// ============================================================
// MISSING COMPLETE SYSTEM DRAWING METHODS
// ============================================================

static drawFermentation(ctx, x, y, width, height, stage, location) {
  ctx.save();
  ctx.translate(x, y);
  switch (stage) {
    case 'complete':
      this.drawFermentationComplete(ctx, width, height, location);
      break;
    case 'lactic-acid':
      this.drawFermentationLacticAcid(ctx, width, height, location);
      break;
    case 'ethanol':
      this.drawFermentationEthanol(ctx, width, height, location);
      break;
    case 'glycolysis':
      this.drawGlycolysis(ctx, width, height, location);
      break;
  }
  ctx.restore();
}

static drawFermentationComplete(ctx, w, h, location) {
  // Background
  const bg = ctx.createLinearGradient(0, 0, 0, h);
  bg.addColorStop(0, '#FFF9E6');
  bg.addColorStop(1, '#FFF0CC');
  ctx.fillStyle = bg;
  ctx.fillRect(0, 0, w, h);
  ctx.strokeStyle = '#D4A017';
  ctx.lineWidth = 3;
  ctx.strokeRect(0, 0, w, h);

  ctx.fillStyle = '#7B4F00';
  ctx.font = 'bold 20px Arial';
  ctx.textAlign = 'center';
  ctx.fillText('FERMENTATION (Anaerobic Respiration)', w * 0.5, h * 0.06);

  ctx.fillStyle = '#555';
  ctx.font = '13px Arial';
  ctx.fillText('No oxygen required — regenerates NAD⁺ to sustain glycolysis', w * 0.5, h * 0.11);

  // Glucose → Pyruvate (glycolysis box)
  ctx.fillStyle = '#3498DB';
  ctx.fillRect(w * 0.05, h * 0.17, w * 0.9, h * 0.15);
  ctx.fillStyle = '#FFF';
  ctx.font = 'bold 15px Arial';
  ctx.textAlign = 'center';
  ctx.fillText('GLYCOLYSIS:  Glucose → 2 Pyruvate  +  2 ATP  +  2 NADH', w * 0.5, h * 0.26);

  // Split arrow down to two pathways
  ctx.strokeStyle = '#555';
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.moveTo(w * 0.5, h * 0.32);
  ctx.lineTo(w * 0.5, h * 0.38);
  ctx.stroke();
  ctx.beginPath();
  ctx.moveTo(w * 0.5, h * 0.38);
  ctx.lineTo(w * 0.25, h * 0.38);
  ctx.moveTo(w * 0.5, h * 0.38);
  ctx.lineTo(w * 0.75, h * 0.38);
  ctx.stroke();
  this.drawArrow(ctx, w * 0.25, h * 0.38, w * 0.25, h * 0.44, '#E74C3C');
  this.drawArrow(ctx, w * 0.75, h * 0.38, w * 0.75, h * 0.44, '#9B59B6');

  // Lactic acid pathway
  const lacX = w * 0.05, lacY = h * 0.44, lacW = w * 0.38, lacH = h * 0.38;
  ctx.fillStyle = '#FDECEA';
  ctx.fillRect(lacX, lacY, lacW, lacH);
  ctx.strokeStyle = '#E74C3C';
  ctx.lineWidth = 2;
  ctx.strokeRect(lacX, lacY, lacW, lacH);
  ctx.fillStyle = '#C0392B';
  ctx.font = 'bold 14px Arial';
  ctx.textAlign = 'center';
  ctx.fillText('LACTIC ACID FERMENTATION', lacX + lacW / 2, lacY + h * 0.05);
  ctx.fillStyle = '#333';
  ctx.font = '12px Arial';
  ctx.fillText('Pyruvate + NADH', lacX + lacW / 2, lacY + h * 0.11);
  this.drawArrow(ctx, lacX + lacW / 2, lacY + h * 0.14, lacX + lacW / 2, lacY + h * 0.19, '#E74C3C');
  ctx.fillStyle = '#C0392B';
  ctx.font = 'bold 13px Arial';
  ctx.fillText('Lactate + NAD⁺', lacX + lacW / 2, lacY + h * 0.23);
  ctx.fillStyle = '#555';
  ctx.font = '11px Arial';
  ctx.fillText('Enzyme: Lactate Dehydrogenase', lacX + lacW / 2, lacY + h * 0.28);
  ctx.fillText('Occurs in: muscle cells, RBCs,', lacX + lacW / 2, lacY + h * 0.32);
  ctx.fillText('lactic acid bacteria', lacX + lacW / 2, lacY + h * 0.36);

  // Ethanol pathway
  const ethX = w * 0.57, ethY = h * 0.44, ethW = w * 0.38, ethH = h * 0.38;
  ctx.fillStyle = '#F3E8FF';
  ctx.fillRect(ethX, ethY, ethW, ethH);
  ctx.strokeStyle = '#9B59B6';
  ctx.lineWidth = 2;
  ctx.strokeRect(ethX, ethY, ethW, ethH);
  ctx.fillStyle = '#6C3483';
  ctx.font = 'bold 14px Arial';
  ctx.textAlign = 'center';
  ctx.fillText('ALCOHOLIC FERMENTATION', ethX + ethW / 2, ethY + h * 0.05);
  ctx.fillStyle = '#333';
  ctx.font = '12px Arial';
  ctx.fillText('Pyruvate', ethX + ethW / 2, ethY + h * 0.11);
  this.drawArrow(ctx, ethX + ethW / 2, ethY + h * 0.13, ethX + ethW / 2, ethY + h * 0.17, '#9B59B6');
  ctx.fillStyle = '#555';
  ctx.font = '11px Arial';
  ctx.fillText('(pyruvate decarboxylase)', ethX + ethW / 2, ethY + h * 0.16);
  ctx.fillStyle = '#6C3483';
  ctx.font = '13px Arial';
  ctx.fillText('Acetaldehyde + CO₂', ethX + ethW / 2, ethY + h * 0.21);
  this.drawArrow(ctx, ethX + ethW / 2, ethY + h * 0.23, ethX + ethW / 2, ethY + h * 0.27, '#9B59B6');
  ctx.fillStyle = '#555';
  ctx.font = '11px Arial';
  ctx.fillText('(alcohol dehydrogenase + NADH)', ethX + ethW / 2, ethY + h * 0.26);
  ctx.fillStyle = '#6C3483';
  ctx.font = 'bold 13px Arial';
  ctx.fillText('Ethanol + NAD⁺', ethX + ethW / 2, ethY + h * 0.31);
  ctx.font = '11px Arial';
  ctx.fillStyle = '#555';
  ctx.fillText('Occurs in: yeast, some bacteria', ethX + ethW / 2, ethY + h * 0.36);

  // Key point
  ctx.fillStyle = '#27AE60';
  ctx.font = 'bold 13px Arial';
  ctx.textAlign = 'center';
  ctx.fillText('⚠ NAD⁺ regeneration allows glycolysis to continue — net yield: 2 ATP per glucose', w * 0.5, h * 0.95);
}

static drawFermentationLacticAcid(ctx, w, h, location) {
  const bg = ctx.createLinearGradient(0, 0, 0, h);
  bg.addColorStop(0, '#FFF5F5'); bg.addColorStop(1, '#FDECEA');
  ctx.fillStyle = bg; ctx.fillRect(0, 0, w, h);
  ctx.strokeStyle = '#E74C3C'; ctx.lineWidth = 3; ctx.strokeRect(0, 0, w, h);

  ctx.fillStyle = '#C0392B'; ctx.font = 'bold 20px Arial'; ctx.textAlign = 'center';
  ctx.fillText('LACTIC ACID FERMENTATION', w * 0.5, h * 0.07);

  const steps = [
    { y: 0.18, mol: 'Glucose (C₆H₁₂O₆)', color: '#FF6B6B' },
    { y: 0.38, mol: '2 Pyruvate (C₃H₄O₃)', color: '#E67E22' },
    { y: 0.62, mol: '2 Lactate (C₃H₆O₃)', color: '#E74C3C' },
  ];
  steps.forEach(s => this.drawMolecule(ctx, w * 0.5, h * s.y, 38, s.color, s.mol));

  // Arrows
  this.drawArrow(ctx, w * 0.5, h * 0.24, w * 0.5, h * 0.32, '#3498DB');
  ctx.fillStyle = '#3498DB'; ctx.font = '12px Arial'; ctx.textAlign = 'left';
  ctx.fillText('Glycolysis', w * 0.55, h * 0.27);
  ctx.fillText('+2 ATP net, +2 NADH', w * 0.55, h * 0.30);

  this.drawArrow(ctx, w * 0.5, h * 0.44, w * 0.5, h * 0.55, '#E74C3C');
  ctx.fillStyle = '#E74C3C'; ctx.textAlign = 'left';
  ctx.fillText('Lactate dehydrogenase', w * 0.55, h * 0.48);
  ctx.fillText('NADH → NAD⁺ (recycled)', w * 0.55, h * 0.51);

  // NAD+ cycle arrow
  ctx.strokeStyle = '#27AE60'; ctx.lineWidth = 2; ctx.setLineDash([5, 3]);
  ctx.beginPath();
  ctx.moveTo(w * 0.3, h * 0.62); ctx.bezierCurveTo(w * 0.1, h * 0.62, w * 0.1, h * 0.18, w * 0.3, h * 0.18);
  ctx.stroke(); ctx.setLineDash([]);
  ctx.fillStyle = '#27AE60'; ctx.font = 'bold 11px Arial'; ctx.textAlign = 'center';
  ctx.fillText('NAD⁺ recycled', w * 0.1, h * 0.40);
  ctx.fillText('→ glycolysis continues', w * 0.1, h * 0.43);

  ctx.fillStyle = '#555'; ctx.font = '12px Arial'; ctx.textAlign = 'center';
  ctx.fillText('Net: 2 ATP | Found in: skeletal muscle, RBCs, yogurt bacteria', w * 0.5, h * 0.78);
  ctx.fillText('Lactate can be converted back to glucose in the liver (Cori cycle)', w * 0.5, h * 0.83);
}

static drawFermentationEthanol(ctx, w, h, location) {
  const bg = ctx.createLinearGradient(0, 0, 0, h);
  bg.addColorStop(0, '#F9F0FF'); bg.addColorStop(1, '#F3E8FF');
  ctx.fillStyle = bg; ctx.fillRect(0, 0, w, h);
  ctx.strokeStyle = '#9B59B6'; ctx.lineWidth = 3; ctx.strokeRect(0, 0, w, h);

  ctx.fillStyle = '#6C3483'; ctx.font = 'bold 20px Arial'; ctx.textAlign = 'center';
  ctx.fillText('ALCOHOLIC FERMENTATION', w * 0.5, h * 0.07);

  const steps = [
    { y: 0.17, mol: 'Glucose', color: '#FF6B6B' },
    { y: 0.34, mol: '2 Pyruvate', color: '#E67E22' },
    { y: 0.52, mol: '2 Acetaldehyde + 2CO₂', color: '#F39C12' },
    { y: 0.70, mol: '2 Ethanol + 2CO₂', color: '#9B59B6' },
  ];
  steps.forEach(s => this.drawMolecule(ctx, w * 0.5, h * s.y, 36, s.color, s.mol));

  this.drawArrow(ctx, w * 0.5, h * 0.22, w * 0.5, h * 0.28, '#3498DB');
  ctx.fillStyle = '#3498DB'; ctx.font = '12px Arial'; ctx.textAlign = 'left';
  ctx.fillText('Glycolysis (+2 ATP, +2 NADH)', w * 0.57, h * 0.25);

  this.drawArrow(ctx, w * 0.5, h * 0.39, w * 0.5, h * 0.46, '#E67E22');
  ctx.fillStyle = '#E67E22'; ctx.textAlign = 'left';
  ctx.fillText('Pyruvate decarboxylase', w * 0.57, h * 0.42);
  ctx.fillText('(−CO₂)', w * 0.57, h * 0.45);

  this.drawArrow(ctx, w * 0.5, h * 0.57, w * 0.5, h * 0.64, '#9B59B6');
  ctx.fillStyle = '#9B59B6'; ctx.textAlign = 'left';
  ctx.fillText('Alcohol dehydrogenase', w * 0.57, h * 0.60);
  ctx.fillText('NADH → NAD⁺', w * 0.57, h * 0.63);

  // NAD+ cycle
  ctx.strokeStyle = '#27AE60'; ctx.lineWidth = 2; ctx.setLineDash([5, 3]);
  ctx.beginPath();
  ctx.moveTo(w * 0.3, h * 0.70); ctx.bezierCurveTo(w * 0.1, h * 0.70, w * 0.1, h * 0.17, w * 0.3, h * 0.17);
  ctx.stroke(); ctx.setLineDash([]);
  ctx.fillStyle = '#27AE60'; ctx.font = 'bold 11px Arial'; ctx.textAlign = 'center';
  ctx.fillText('NAD⁺ recycled', w * 0.1, h * 0.43);

  ctx.fillStyle = '#555'; ctx.font = '12px Arial'; ctx.textAlign = 'center';
  ctx.fillText('Net: 2 ATP | Found in: Saccharomyces cerevisiae (baker\'s/brewer\'s yeast)', w * 0.5, h * 0.84);
  ctx.fillText('Used in: bread, beer, wine production', w * 0.5, h * 0.89);
}

// ─────────────────────────────────────────────────────────────

static drawBetaOxidation(ctx, x, y, width, height, stage, location) {
  ctx.save();
  ctx.translate(x, y);
  switch (stage) {
    case 'complete':
      this.drawBetaOxidationComplete(ctx, width, height, location);
      break;
    case 'activation':
      this.drawBetaOxidationActivation(ctx, width, height, location);
      break;
    case 'spiral':
      this.drawBetaOxidationSpiral(ctx, width, height, location);
      break;
    case 'yield':
      this.drawBetaOxidationYield(ctx, width, height, location);
      break;
  }
  ctx.restore();
}

static drawBetaOxidationComplete(ctx, w, h, location) {
  const bg = ctx.createLinearGradient(0, 0, w, h);
  bg.addColorStop(0, '#FFF8E1'); bg.addColorStop(1, '#FFF0C2');
  ctx.fillStyle = bg; ctx.fillRect(0, 0, w, h);
  ctx.strokeStyle = '#F39C12'; ctx.lineWidth = 3; ctx.strokeRect(0, 0, w, h);

  ctx.fillStyle = '#7D5A00'; ctx.font = 'bold 20px Arial'; ctx.textAlign = 'center';
  ctx.fillText('β-OXIDATION (Fatty Acid Oxidation)', w * 0.5, h * 0.06);
  ctx.fillStyle = '#555'; ctx.font = '13px Arial';
  ctx.fillText('Mitochondrial matrix — breaks fatty acids into Acetyl-CoA', w * 0.5, h * 0.11);

  // Step 1: Activation (cytoplasm)
  ctx.fillStyle = '#3498DB';
  ctx.fillRect(w * 0.05, h * 0.15, w * 0.9, h * 0.1);
  ctx.fillStyle = '#FFF'; ctx.font = 'bold 13px Arial'; ctx.textAlign = 'center';
  ctx.fillText('STEP 1 — ACTIVATION (cytoplasm):  Fatty Acid + CoA + ATP → Acyl-CoA + AMP + PPᵢ', w * 0.5, h * 0.21);

  // Transport
  ctx.fillStyle = '#95A5A6';
  ctx.font = '12px Arial'; ctx.textAlign = 'center';
  ctx.fillText('↓ Carnitine shuttle transports Acyl-CoA across inner mitochondrial membrane', w * 0.5, h * 0.31);

  // Beta-oxidation spiral
  ctx.fillStyle = '#E67E22'; ctx.font = 'bold 16px Arial';
  ctx.fillText('β-OXIDATION SPIRAL (per cycle, 2C removed):', w * 0.5, h * 0.38);

  const cycles = [
    'Oxidation: Acyl-CoA + FAD → trans-Enoyl-CoA + FADH₂',
    'Hydration: trans-Enoyl-CoA + H₂O → 3-Hydroxyacyl-CoA',
    'Oxidation: 3-Hydroxyacyl-CoA + NAD⁺ → 3-Ketoacyl-CoA + NADH',
    'Thiolysis: 3-Ketoacyl-CoA + CoA → Acetyl-CoA + shortened Acyl-CoA',
  ];
  cycles.forEach((c, i) => {
    ctx.fillStyle = i % 2 === 0 ? '#FFF8E1' : '#FFF0C2';
    ctx.fillRect(w * 0.05, h * (0.43 + i * 0.08), w * 0.9, h * 0.075);
    ctx.strokeStyle = '#F39C12'; ctx.lineWidth = 1;
    ctx.strokeRect(w * 0.05, h * (0.43 + i * 0.08), w * 0.9, h * 0.075);
    ctx.fillStyle = '#333'; ctx.font = '12px Arial'; ctx.textAlign = 'left';
    ctx.fillText(`${i + 1}. ${c}`, w * 0.07, h * (0.43 + i * 0.08) + h * 0.042);
  });

  // ATP yield (palmitate example)
  ctx.fillStyle = '#27AE60';
  ctx.fillRect(w * 0.05, h * 0.78, w * 0.9, h * 0.17);
  ctx.fillStyle = '#FFF'; ctx.font = 'bold 14px Arial'; ctx.textAlign = 'center';
  ctx.fillText('ATP YIELD — Palmitate (C16:0), 7 cycles:', w * 0.5, h * 0.82);
  ctx.font = '12px Arial';
  ctx.fillText('7 FADH₂ (×1.5) + 7 NADH (×2.5) + 8 Acetyl-CoA (×10) − 2 ATP (activation) = 106 ATP', w * 0.5, h * 0.87);
  ctx.font = 'bold 15px Arial';
  ctx.fillText('Net ≈ 106 ATP per palmitate molecule', w * 0.5, h * 0.92);
}

static drawBetaOxidationActivation(ctx, w, h, location) {
  const bg = ctx.createLinearGradient(0, 0, 0, h);
  bg.addColorStop(0, '#EBF8FF'); bg.addColorStop(1, '#BEE3F8');
  ctx.fillStyle = bg; ctx.fillRect(0, 0, w, h);
  ctx.strokeStyle = '#3182CE'; ctx.lineWidth = 3; ctx.strokeRect(0, 0, w, h);
  ctx.fillStyle = '#1A365D'; ctx.font = 'bold 18px Arial'; ctx.textAlign = 'center';
  ctx.fillText('FATTY ACID ACTIVATION & TRANSPORT', w * 0.5, h * 0.07);

  // Cytoplasm zone
  ctx.fillStyle = 'rgba(190,227,248,0.4)';
  ctx.fillRect(w * 0.02, h * 0.12, w * 0.96, h * 0.35);
  ctx.strokeStyle = '#3182CE'; ctx.lineWidth = 1.5; ctx.setLineDash([4, 4]);
  ctx.strokeRect(w * 0.02, h * 0.12, w * 0.96, h * 0.35); ctx.setLineDash([]);
  ctx.fillStyle = '#2B6CB0'; ctx.font = 'bold 12px Arial'; ctx.textAlign = 'left';
  ctx.fillText('CYTOPLASM', w * 0.04, h * 0.17);

  this.drawMolecule(ctx, w * 0.15, h * 0.28, 34, '#F6AD55', 'Fatty Acid');
  this.drawArrow(ctx, w * 0.23, h * 0.28, w * 0.38, h * 0.28, '#718096');
  ctx.fillStyle = '#555'; ctx.font = '11px Arial'; ctx.textAlign = 'center';
  ctx.fillText('Acyl-CoA', w * 0.305, h * 0.24);
  ctx.fillText('synthetase', w * 0.305, h * 0.27);
  ctx.fillText('+CoA, ATP→AMP+PPi', w * 0.305, h * 0.30);
  this.drawMolecule(ctx, w * 0.5, h * 0.28, 34, '#ED8936', 'Acyl-CoA');

  // Carnitine shuttle
  ctx.fillStyle = '#744210'; ctx.font = 'bold 12px Arial'; ctx.textAlign = 'center';
  ctx.fillText('↓ Carnitine Shuttle (CPT-I, Translocase, CPT-II)', w * 0.5, h * 0.50);

  // Inner membrane
  ctx.fillStyle = '#FC8181';
  ctx.fillRect(0, h * 0.53, w, h * 0.04);
  ctx.fillStyle = '#FFF'; ctx.font = 'bold 11px Arial'; ctx.textAlign = 'center';
  ctx.fillText('INNER MITOCHONDRIAL MEMBRANE', w * 0.5, h * 0.558);

  // Matrix zone
  ctx.fillStyle = 'rgba(254,235,200,0.5)';
  ctx.fillRect(w * 0.02, h * 0.57, w * 0.96, h * 0.30);
  ctx.strokeStyle = '#ED8936'; ctx.lineWidth = 1.5; ctx.setLineDash([4, 4]);
  ctx.strokeRect(w * 0.02, h * 0.57, w * 0.96, h * 0.30); ctx.setLineDash([]);
  ctx.fillStyle = '#7B341E'; ctx.font = 'bold 12px Arial'; ctx.textAlign = 'left';
  ctx.fillText('MITOCHONDRIAL MATRIX', w * 0.04, h * 0.62);
  this.drawMolecule(ctx, w * 0.5, h * 0.73, 34, '#DD6B20', 'Acyl-CoA\n(ready for β-ox)');
  ctx.fillStyle = '#27AE60'; ctx.font = 'bold 13px Arial'; ctx.textAlign = 'center';
  ctx.fillText('→ enters β-oxidation spiral', w * 0.5, h * 0.84);
}

static drawBetaOxidationSpiral(ctx, w, h, location) {
  const bg = ctx.createLinearGradient(0, 0, w, h);
  bg.addColorStop(0, '#FFFAF0'); bg.addColorStop(1, '#FFF0C2');
  ctx.fillStyle = bg; ctx.fillRect(0, 0, w, h);
  ctx.strokeStyle = '#DD6B20'; ctx.lineWidth = 3; ctx.strokeRect(0, 0, w, h);
  ctx.fillStyle = '#7B341E'; ctx.font = 'bold 18px Arial'; ctx.textAlign = 'center';
  ctx.fillText('β-OXIDATION SPIRAL — 4-Step Cycle', w * 0.5, h * 0.06);

  // Draw circular spiral
  const cx = w * 0.5, cy = h * 0.5, r = h * 0.3;
  ctx.strokeStyle = '#DD6B20'; ctx.lineWidth = 3;
  ctx.beginPath(); ctx.arc(cx, cy, r, 0, Math.PI * 2); ctx.stroke();

  const stepPositions = [
    { angle: -Math.PI / 2, label: '① Oxidation', sub: 'Acyl-CoA\n→Enoyl-CoA\n+FADH₂', color: '#3182CE' },
    { angle: 0, label: '② Hydration', sub: 'Enoyl-CoA\n→OH-Acyl-CoA', color: '#38A169' },
    { angle: Math.PI / 2, label: '③ Oxidation', sub: 'OH-Acyl-CoA\n→Keto-Acyl-CoA\n+NADH', color: '#9B2C2C' },
    { angle: Math.PI, label: '④ Thiolysis', sub: 'Keto-Acyl-CoA\n→Acetyl-CoA\n+shorter Acyl-CoA', color: '#744210' },
  ];

  stepPositions.forEach(step => {
    const sx = cx + (r + 70) * Math.cos(step.angle);
    const sy = cy + (r + 70) * Math.sin(step.angle);
    ctx.fillStyle = step.color; ctx.font = 'bold 12px Arial'; ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
    ctx.fillText(step.label, sx, sy - 12);
    ctx.fillStyle = '#333'; ctx.font = '10px Arial';
    step.sub.split('\n').forEach((line, i) => ctx.fillText(line, sx, sy + i * 12));
  });

  // Acetyl-CoA exits center
  ctx.beginPath(); ctx.arc(cx, cy, 22, 0, Math.PI * 2);
  ctx.fillStyle = '#F6AD55'; ctx.fill();
  ctx.strokeStyle = '#C05621'; ctx.lineWidth = 2; ctx.stroke();
  ctx.fillStyle = '#7B341E'; ctx.font = 'bold 10px Arial'; ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
  ctx.fillText('Acetyl-CoA', cx, cy - 4); ctx.fillText('exits', cx, cy + 7);

  ctx.textBaseline = 'alphabetic';
  ctx.fillStyle = '#27AE60'; ctx.font = 'bold 12px Arial'; ctx.textAlign = 'center';
  ctx.fillText('Each turn: 1 FADH₂ + 1 NADH + 1 Acetyl-CoA; chain shortened by 2C', w * 0.5, h * 0.94);
}

static drawBetaOxidationYield(ctx, w, h, location) {
  const bg = ctx.createLinearGradient(0, 0, 0, h);
  bg.addColorStop(0, '#F0FFF4'); bg.addColorStop(1, '#C6F6D5');
  ctx.fillStyle = bg; ctx.fillRect(0, 0, w, h);
  ctx.strokeStyle = '#27AE60'; ctx.lineWidth = 3; ctx.strokeRect(0, 0, w, h);
  ctx.fillStyle = '#1C4532'; ctx.font = 'bold 18px Arial'; ctx.textAlign = 'center';
  ctx.fillText('β-OXIDATION ATP YIELD — Palmitate (C16)', w * 0.5, h * 0.06);

  const rows = [
    ['Product', 'Quantity', 'ATP/unit', 'Subtotal'],
    ['FADH₂ (from β-ox)', '7', '×1.5', '10.5 ATP'],
    ['NADH (from β-ox)', '7', '×2.5', '17.5 ATP'],
    ['Acetyl-CoA → Krebs', '8', '×10', '80 ATP'],
    ['Activation cost', '', '−2', '−2 ATP'],
    ['TOTAL', '', '', '≈ 106 ATP'],
  ];

  const tableX = w * 0.07, tableY = h * 0.14, colW = w * 0.215, rowH = h * 0.1;
  rows.forEach((row, ri) => {
    row.forEach((cell, ci) => {
      ctx.fillStyle = ri === 0 ? '#276749' : (ri === rows.length - 1 ? '#22543D' : (ri % 2 === 0 ? '#F0FFF4' : '#C6F6D5'));
      ctx.fillRect(tableX + ci * colW, tableY + ri * rowH, colW, rowH);
      ctx.strokeStyle = '#48BB78'; ctx.lineWidth = 1;
      ctx.strokeRect(tableX + ci * colW, tableY + ri * rowH, colW, rowH);
      ctx.fillStyle = ri === 0 || ri === rows.length - 1 ? '#FFF' : '#333';
      ctx.font = ri === 0 || ri === rows.length - 1 ? 'bold 13px Arial' : '13px Arial';
      ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
      ctx.fillText(cell, tableX + ci * colW + colW / 2, tableY + ri * rowH + rowH / 2);
    });
  });

  ctx.textBaseline = 'alphabetic';
  ctx.fillStyle = '#1C4532'; ctx.font = 'bold 14px Arial'; ctx.textAlign = 'center';
  ctx.fillText('Compare: Glucose (C6) → ~32 ATP  |  Palmitate (C16) → ~106 ATP', w * 0.5, h * 0.88);
  ctx.font = '12px Arial'; ctx.fillStyle = '#555';
  ctx.fillText('Fatty acids yield ~2× more ATP per carbon than carbohydrates', w * 0.5, h * 0.93);
}

// ─────────────────────────────────────────────────────────────

static drawAminoAcidCatabolism(ctx, x, y, width, height, stage, location) {
  ctx.save();
  ctx.translate(x, y);
  switch (stage) {
    case 'complete':
      this.drawAminoAcidCatabolismComplete(ctx, width, height, location);
      break;
    case 'transamination':
      this.drawAminoAcidTransamination(ctx, width, height, location);
      break;
    case 'urea-cycle':
      this.drawUreaCycle(ctx, width, height, location);
      break;
    case 'carbon-skeletons':
      this.drawCarbonSkeletons(ctx, width, height, location);
      break;
  }
  ctx.restore();
}

static drawAminoAcidCatabolismComplete(ctx, w, h, location) {
  const bg = ctx.createLinearGradient(0, 0, 0, h);
  bg.addColorStop(0, '#FFF5F5'); bg.addColorStop(1, '#FFE4E1');
  ctx.fillStyle = bg; ctx.fillRect(0, 0, w, h);
  ctx.strokeStyle = '#FC8181'; ctx.lineWidth = 3; ctx.strokeRect(0, 0, w, h);

  ctx.fillStyle = '#742A2A'; ctx.font = 'bold 20px Arial'; ctx.textAlign = 'center';
  ctx.fillText('AMINO ACID CATABOLISM', w * 0.5, h * 0.06);
  ctx.fillStyle = '#555'; ctx.font = '13px Arial';
  ctx.fillText('Protein → amino acids → nitrogen removal → carbon skeleton → energy', w * 0.5, h * 0.11);

  // Step 1
  ctx.fillStyle = '#E53E3E'; ctx.fillRect(w * 0.05, h * 0.15, w * 0.9, h * 0.09);
  ctx.fillStyle = '#FFF'; ctx.font = 'bold 13px Arial'; ctx.textAlign = 'center';
  ctx.fillText('STEP 1 — TRANSAMINATION: Amino acid + α-ketoglutarate → α-keto acid + Glutamate', w * 0.5, h * 0.205);

  this.drawArrow(ctx, w * 0.5, h * 0.24, w * 0.5, h * 0.29, '#555');
  ctx.fillStyle = '#C53030'; ctx.font = 'bold 13px Arial';
  ctx.fillText('STEP 2 — OXIDATIVE DEAMINATION: Glutamate → α-ketoglutarate + NH₄⁺', w * 0.5, h * 0.35);

  this.drawArrow(ctx, w * 0.3, h * 0.38, w * 0.15, h * 0.46, '#9B59B6');
  this.drawArrow(ctx, w * 0.7, h * 0.38, w * 0.82, h * 0.46, '#E67E22');

  // NH4 path
  ctx.fillStyle = '#9B59B6'; ctx.fillRect(w * 0.04, h * 0.46, w * 0.32, h * 0.22);
  ctx.fillStyle = '#FFF'; ctx.font = 'bold 12px Arial'; ctx.textAlign = 'center';
  ctx.fillText('NH₄⁺ → UREA CYCLE', w * 0.2, h * 0.52);
  ctx.font = '11px Arial';
  ctx.fillText('(liver mitochondria)', w * 0.2, h * 0.57);
  ctx.fillText('NH₄⁺ + CO₂ + 3 ATP', w * 0.2, h * 0.61);
  ctx.fillText('→ Urea (excreted)', w * 0.2, h * 0.65);

  // Carbon skeleton path
  ctx.fillStyle = '#E67E22'; ctx.fillRect(w * 0.62, h * 0.46, w * 0.33, h * 0.22);
  ctx.fillStyle = '#FFF'; ctx.font = 'bold 12px Arial'; ctx.textAlign = 'center';
  ctx.fillText('CARBON SKELETON', w * 0.785, h * 0.52);
  ctx.font = '11px Arial';
  ctx.fillText('→ Krebs intermediates:', w * 0.785, h * 0.57);
  ctx.fillText('Acetyl-CoA, OAA,', w * 0.785, h * 0.61);
  ctx.fillText('α-KG, Fumarate, Suc', w * 0.785, h * 0.65);

  ctx.fillStyle = '#27AE60'; ctx.font = 'bold 13px Arial'; ctx.textAlign = 'center';
  ctx.fillText('Glucogenic AAs → Glucose | Ketogenic AAs → Ketone bodies', w * 0.5, h * 0.76);
  ctx.font = '12px Arial'; ctx.fillStyle = '#555';
  ctx.fillText('20 amino acids → 7 different entry points into central metabolism', w * 0.5, h * 0.82);
  ctx.fillText('Net ATP depends on entry point — Ala→Pyr→Acetyl-CoA→~8.5 ATP', w * 0.5, h * 0.87);
}

static drawAminoAcidTransamination(ctx, w, h, location) {
  const bg = ctx.createLinearGradient(0, 0, 0, h); bg.addColorStop(0, '#FFF5F5'); bg.addColorStop(1, '#FED7D7');
  ctx.fillStyle = bg; ctx.fillRect(0, 0, w, h);
  ctx.strokeStyle = '#FC8181'; ctx.lineWidth = 3; ctx.strokeRect(0, 0, w, h);
  ctx.fillStyle = '#742A2A'; ctx.font = 'bold 18px Arial'; ctx.textAlign = 'center';
  ctx.fillText('TRANSAMINATION', w * 0.5, h * 0.07);
  ctx.fillStyle = '#555'; ctx.font = '12px Arial';
  ctx.fillText('Transfer of amino group from amino acid to α-ketoglutarate', w * 0.5, h * 0.13);

  this.drawMolecule(ctx, w * 0.2, h * 0.32, 38, '#FC8181', 'Amino Acid\n(−NH₂)');
  this.drawMolecule(ctx, w * 0.5, h * 0.32, 38, '#F6AD55', 'α-Ketoglutarate');
  this.drawArrow(ctx, w * 0.32, h * 0.32, w * 0.38, h * 0.32, '#718096');
  ctx.fillStyle = '#718096'; ctx.font = '11px Arial'; ctx.textAlign = 'center'; ctx.fillText('Aminotransferase\n(PLP cofactor)', w * 0.35, h * 0.27);

  this.drawArrow(ctx, w * 0.62, h * 0.32, w * 0.68, h * 0.32, '#718096');
  this.drawMolecule(ctx, w * 0.8, h * 0.32, 38, '#68D391', 'Glutamate\n(+NH₂)');
  this.drawMolecule(ctx, w * 0.5, h * 0.62, 38, '#E53E3E', 'α-Keto acid\n(carbon skeleton)');
  this.drawArrow(ctx, w * 0.5, h * 0.42, w * 0.5, h * 0.52, '#E53E3E');

  ctx.fillStyle = '#2B6CB0'; ctx.font = 'bold 12px Arial'; ctx.textAlign = 'center';
  ctx.fillText('Glutamate then undergoes oxidative deamination (GDH) →', w * 0.5, h * 0.78);
  ctx.fillText('α-ketoglutarate + NH₄⁺ (feeds urea cycle)', w * 0.5, h * 0.83);
}

static drawUreaCycle(ctx, w, h, location) {
  const bg = ctx.createLinearGradient(0, 0, 0, h); bg.addColorStop(0, '#FAF5FF'); bg.addColorStop(1, '#E9D8FD');
  ctx.fillStyle = bg; ctx.fillRect(0, 0, w, h);
  ctx.strokeStyle = '#9B59B6'; ctx.lineWidth = 3; ctx.strokeRect(0, 0, w, h);
  ctx.fillStyle = '#44337A'; ctx.font = 'bold 18px Arial'; ctx.textAlign = 'center';
  ctx.fillText('UREA CYCLE', w * 0.5, h * 0.06);

  const cx = w * 0.5, cy = h * 0.52, r = h * 0.3;
  ctx.strokeStyle = '#9B59B6'; ctx.lineWidth = 3;
  ctx.beginPath(); ctx.arc(cx, cy, r, 0, Math.PI * 2); ctx.stroke();

  const mols = [
    { angle: -Math.PI / 2, name: 'Carbamoyl\nphosphate', color: '#9B59B6' },
    { angle: 0, name: 'Citrulline', color: '#3182CE' },
    { angle: Math.PI / 2, name: 'Argino-\nsuccinate', color: '#E53E3E' },
    { angle: Math.PI, name: 'Arginine', color: '#DD6B20' },
  ];
  mols.forEach(m => {
    const mx = cx + r * Math.cos(m.angle);
    const my = cy + r * Math.sin(m.angle);
    ctx.beginPath(); ctx.arc(mx, my, 28, 0, Math.PI * 2);
    ctx.fillStyle = m.color; ctx.fill();
    ctx.strokeStyle = '#FFF'; ctx.lineWidth = 2; ctx.stroke();
    ctx.fillStyle = '#FFF'; ctx.font = 'bold 9px Arial'; ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
    m.name.split('\n').forEach((line, i) => ctx.fillText(line, mx, my + (i - 0.5) * 11));
  });
  ctx.textBaseline = 'alphabetic';

  // Center: Ornithine
  ctx.beginPath(); ctx.arc(cx, cy, 30, 0, Math.PI * 2);
  ctx.fillStyle = '#F6AD55'; ctx.fill();
  ctx.strokeStyle = '#7B341E'; ctx.lineWidth = 2; ctx.stroke();
  ctx.fillStyle = '#7B341E'; ctx.font = 'bold 11px Arial'; ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
  ctx.fillText('Ornithine', cx, cy);
  ctx.textBaseline = 'alphabetic';

  // Inputs/outputs
  ctx.fillStyle = '#555'; ctx.font = '12px Arial'; ctx.textAlign = 'center';
  ctx.fillText('Inputs: 2 NH₄⁺ + CO₂ + 3 ATP → Urea + H₂O (excreted in urine)', w * 0.5, h * 0.92);
}

static drawCarbonSkeletons(ctx, w, h, location) {
  const bg = ctx.createLinearGradient(0, 0, 0, h); bg.addColorStop(0, '#FFFAF0'); bg.addColorStop(1, '#FFF0C2');
  ctx.fillStyle = bg; ctx.fillRect(0, 0, w, h);
  ctx.strokeStyle = '#ED8936'; ctx.lineWidth = 3; ctx.strokeRect(0, 0, w, h);
  ctx.fillStyle = '#7B341E'; ctx.font = 'bold 18px Arial'; ctx.textAlign = 'center';
  ctx.fillText('AMINO ACID CARBON SKELETONS → METABOLISM', w * 0.5, h * 0.06);

  const entries = [
    { label: 'Acetyl-CoA', aas: 'Leu, Lys, Ile, Thr', color: '#F6AD55', x: 0.2, y: 0.2 },
    { label: 'Pyruvate', aas: 'Ala, Ser, Cys, Gly, Trp', color: '#FC8181', x: 0.2, y: 0.38 },
    { label: 'OAA', aas: 'Asp, Asn', color: '#68D391', x: 0.2, y: 0.56 },
    { label: 'α-Ketoglutarate', aas: 'Glu, Gln, Pro, His, Arg', color: '#90CDF4', x: 0.2, y: 0.72 },
    { label: 'Fumarate', aas: 'Phe, Tyr', color: '#D6BCFA', x: 0.65, y: 0.38 },
    { label: 'Succinyl-CoA', aas: 'Met, Ile, Val, Thr', color: '#FBD38D', x: 0.65, y: 0.56 },
  ];
  entries.forEach(e => {
    ctx.fillStyle = e.color;
    ctx.fillRect(w * (e.x - 0.14), h * (e.y - 0.05), w * 0.28, h * 0.1);
    ctx.strokeStyle = '#718096'; ctx.lineWidth = 1; ctx.strokeRect(w * (e.x - 0.14), h * (e.y - 0.05), w * 0.28, h * 0.1);
    ctx.fillStyle = '#1A202C'; ctx.font = 'bold 12px Arial'; ctx.textAlign = 'center';
    ctx.fillText(e.label, w * e.x, h * e.y - 2);
    ctx.fillStyle = '#4A5568'; ctx.font = '10px Arial';
    ctx.fillText(e.aas, w * e.x, h * e.y + 11);
  });

  ctx.fillStyle = '#27AE60'; ctx.font = 'bold 12px Arial'; ctx.textAlign = 'center';
  ctx.fillText('Glucogenic: can form glucose via gluconeogenesis  |  Ketogenic: form ketone bodies', w * 0.5, h * 0.88);
}

// ─────────────────────────────────────────────────────────────

static drawGluconeogenesis(ctx, x, y, width, height, stage, location) {
  ctx.save();
  ctx.translate(x, y);
  switch (stage) {
    case 'complete':
      this.drawGluconeogenesisComplete(ctx, width, height, location);
      break;
    case 'bypass-reactions':
      this.drawGluconeogenesisBypass(ctx, width, height, location);
      break;
    case 'substrates':
      this.drawGluconeogenesisSubstrates(ctx, width, height, location);
      break;
  }
  ctx.restore();
}

static drawGluconeogenesisComplete(ctx, w, h, location) {
  const bg = ctx.createLinearGradient(0, 0, 0, h);
  bg.addColorStop(0, '#E8F4F8'); bg.addColorStop(1, '#D0EEF8');
  ctx.fillStyle = bg; ctx.fillRect(0, 0, w, h);
  ctx.strokeStyle = '#2B6CB0'; ctx.lineWidth = 3; ctx.strokeRect(0, 0, w, h);

  ctx.fillStyle = '#1A365D'; ctx.font = 'bold 20px Arial'; ctx.textAlign = 'center';
  ctx.fillText('GLUCONEOGENESIS', w * 0.5, h * 0.06);
  ctx.fillStyle = '#555'; ctx.font = '13px Arial';
  ctx.fillText('Synthesis of glucose from non-carbohydrate precursors (liver & kidney)', w * 0.5, h * 0.11);

  const steps = [
    { y: 0.18, label: 'Pyruvate / Lactate / AAs / Glycerol', color: '#FC8181' },
    { y: 0.28, label: 'Oxaloacetate (OAA)', color: '#F6AD55' },
    { y: 0.38, label: 'Phosphoenolpyruvate (PEP)', color: '#F6E05E' },
    { y: 0.49, label: 'Fructose-1,6-bisphosphate (F1,6BP)', color: '#68D391' },
    { y: 0.60, label: 'Fructose-6-phosphate (F6P)', color: '#4FD1C5' },
    { y: 0.70, label: 'Glucose-6-phosphate (G6P)', color: '#63B3ED' },
    { y: 0.80, label: 'GLUCOSE', color: '#3182CE' },
  ];

  const enzymes = [
    'Pyruvate carboxylase (mito) + PEPCK',
    'Enolase (reverse)', 'Aldolase, TPI (reverse)',
    '⭐ FBPase-1 (bypasses PFK-1)',
    'Phosphoglucose isomerase',
    '⭐ Glucose-6-phosphatase (bypasses Hexokinase)',
  ];

  steps.forEach((s, i) => {
    const barX = w * 0.1, barY = h * s.y - h * 0.035, barW = w * 0.5, barH = h * 0.06;
    ctx.fillStyle = s.color; ctx.fillRect(barX, barY, barW, barH);
    ctx.strokeStyle = '#718096'; ctx.lineWidth = 1; ctx.strokeRect(barX, barY, barW, barH);
    ctx.fillStyle = '#1A202C'; ctx.font = i === steps.length - 1 ? 'bold 14px Arial' : '12px Arial';
    ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
    ctx.fillText(s.label, barX + barW / 2, barY + barH / 2);
    if (i < steps.length - 1) {
      this.drawArrow(ctx, barX + barW / 2, barY + barH, barX + barW / 2, h * steps[i + 1].y - h * 0.04, '#718096');
      ctx.fillStyle = enzymes[i].startsWith('⭐') ? '#E53E3E' : '#555';
      ctx.font = enzymes[i].startsWith('⭐') ? 'bold 11px Arial' : '11px Arial';
      ctx.textAlign = 'left'; ctx.textBaseline = 'middle';
      ctx.fillText(enzymes[i], w * 0.63, h * ((s.y + steps[i + 1].y) / 2));
    }
  });

  ctx.textBaseline = 'alphabetic';
  ctx.fillStyle = '#1A365D'; ctx.font = 'bold 12px Arial'; ctx.textAlign = 'center';
  ctx.fillText('Cost: 6 ATP + 2 GTP + 2 NADH per glucose | ⭐ = irreversible bypass enzymes', w * 0.5, h * 0.93);
}

static drawGluconeogenesisBypass(ctx, w, h, location) {
  const bg = ctx.createLinearGradient(0, 0, 0, h); bg.addColorStop(0, '#FFF5F5'); bg.addColorStop(1, '#FED7D7');
  ctx.fillStyle = bg; ctx.fillRect(0, 0, w, h);
  ctx.strokeStyle = '#FC8181'; ctx.lineWidth = 3; ctx.strokeRect(0, 0, w, h);
  ctx.fillStyle = '#742A2A'; ctx.font = 'bold 18px Arial'; ctx.textAlign = 'center';
  ctx.fillText('GLUCONEOGENESIS — 3 BYPASS REACTIONS', w * 0.5, h * 0.06);
  ctx.fillStyle = '#555'; ctx.font = '12px Arial';
  ctx.fillText('These bypass the 3 irreversible steps of glycolysis', w * 0.5, h * 0.11);

  const bypasses = [
    {
      glycolysis: 'Pyruvate kinase\nPEP → Pyruvate',
      gluconeo: 'Pyruvate carboxylase + PEPCK\nPyruvate→OAA→PEP',
      y: 0.22, color: '#FC8181',
    },
    {
      glycolysis: 'PFK-1\nF6P → F1,6BP',
      gluconeo: 'Fructose-1,6-bisphosphatase\nF1,6BP → F6P',
      y: 0.52, color: '#F6AD55',
    },
    {
      glycolysis: 'Hexokinase\nGlucose → G6P',
      gluconeo: 'Glucose-6-phosphatase\nG6P → Glucose',
      y: 0.77, color: '#F6E05E',
    },
  ];

  bypasses.forEach(b => {
    const half = w * 0.35;
    // Glycolysis side
    ctx.fillStyle = '#3182CE'; ctx.fillRect(w * 0.05, h * b.y, half, h * 0.12);
    ctx.fillStyle = '#FFF'; ctx.font = 'bold 11px Arial'; ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
    b.glycolysis.split('\n').forEach((line, i) => ctx.fillText(line, w * 0.05 + half / 2, h * b.y + h * 0.035 + i * h * 0.04));

    // VS
    ctx.fillStyle = '#333'; ctx.font = 'bold 16px Arial'; ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
    ctx.fillText('↔', w * 0.5, h * b.y + h * 0.06);

    // Gluconeogenesis side
    ctx.fillStyle = b.color; ctx.fillRect(w * 0.6, h * b.y, half, h * 0.12);
    ctx.fillStyle = '#1A202C'; ctx.font = 'bold 11px Arial'; ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
    b.gluconeo.split('\n').forEach((line, i) => ctx.fillText(line, w * 0.6 + half / 2, h * b.y + h * 0.035 + i * h * 0.04));
  });

  ctx.textBaseline = 'alphabetic';
  ctx.fillStyle = '#333'; ctx.font = '11px Arial'; ctx.textAlign = 'left';
  ctx.fillText('GLYCOLYSIS', w * 0.15, h * 0.17); ctx.fillText('GLUCONEOGENESIS', w * 0.65, h * 0.17);
}

static drawGluconeogenesisSubstrates(ctx, w, h, location) {
  const bg = ctx.createLinearGradient(0, 0, 0, h); bg.addColorStop(0, '#EBF8FF'); bg.addColorStop(1, '#BEE3F8');
  ctx.fillStyle = bg; ctx.fillRect(0, 0, w, h);
  ctx.strokeStyle = '#2B6CB0'; ctx.lineWidth = 3; ctx.strokeRect(0, 0, w, h);
  ctx.fillStyle = '#1A365D'; ctx.font = 'bold 18px Arial'; ctx.textAlign = 'center';
  ctx.fillText('GLUCONEOGENIC SUBSTRATES', w * 0.5, h * 0.06);

  const sources = [
    { substrate: 'Lactate', source: 'Muscle, RBCs', path: '→ Pyruvate → OAA → PEP', color: '#FC8181', x: 0.2, y: 0.25 },
    { substrate: 'Amino Acids', source: 'Muscle protein', path: '→ Pyruvate / OAA / PEP intermediates', color: '#F6AD55', x: 0.8, y: 0.25 },
    { substrate: 'Glycerol', source: 'Triglyceride hydrolysis', path: '→ DHAP → F1,6BP', color: '#68D391', x: 0.2, y: 0.55 },
    { substrate: 'Propionate', source: 'Odd-chain fatty acids', path: '→ Succinyl-CoA → OAA', color: '#63B3ED', x: 0.8, y: 0.55 },
  ];

  // Central glucose
  ctx.beginPath(); ctx.arc(w * 0.5, h * 0.75, 45, 0, Math.PI * 2);
  ctx.fillStyle = '#3182CE'; ctx.fill();
  ctx.strokeStyle = '#1A365D'; ctx.lineWidth = 3; ctx.stroke();
  ctx.fillStyle = '#FFF'; ctx.font = 'bold 14px Arial'; ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
  ctx.fillText('GLUCOSE', w * 0.5, h * 0.75);
  ctx.textBaseline = 'alphabetic';

  sources.forEach(s => {
    const sx = w * s.x, sy = h * s.y;
    ctx.beginPath(); ctx.arc(sx, sy, 38, 0, Math.PI * 2);
    ctx.fillStyle = s.color; ctx.fill();
    ctx.strokeStyle = '#4A5568'; ctx.lineWidth = 2; ctx.stroke();
    ctx.fillStyle = '#1A202C'; ctx.font = 'bold 11px Arial'; ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
    ctx.fillText(s.substrate, sx, sy - 6);
    ctx.font = '9px Arial'; ctx.fillText(s.source, sx, sy + 6);
    ctx.textBaseline = 'alphabetic';

    // Arrow to glucose
    const angle = Math.atan2(h * 0.75 - sy, w * 0.5 - sx);
    this.drawArrow(ctx, sx + 38 * Math.cos(angle), sy + 38 * Math.sin(angle), w * 0.5 - 45 * Math.cos(angle), h * 0.75 - 45 * Math.sin(angle), '#718096');
    ctx.fillStyle = '#4A5568'; ctx.font = '10px Arial'; ctx.textAlign = 'center';
    ctx.fillText(s.path, (sx + w * 0.5) / 2, (sy + h * 0.75) / 2);
  });
}

// ─────────────────────────────────────────────────────────────

static drawPentosePhosphate(ctx, x, y, width, height, stage, location) {
  ctx.save();
  ctx.translate(x, y);
  switch (stage) {
    case 'complete':
      this.drawPentosePhosphateComplete(ctx, width, height, location);
      break;
    case 'oxidative':
      this.drawPentosePhosphateOxidative(ctx, width, height, location);
      break;
    case 'non-oxidative':
      this.drawPentosePhosphateNonOxidative(ctx, width, height, location);
      break;
  }
  ctx.restore();
}

static drawPentosePhosphateComplete(ctx, w, h, location) {
  const bg = ctx.createLinearGradient(0, 0, w, h);
  bg.addColorStop(0, '#F0FFF4'); bg.addColorStop(1, '#C6F6D5');
  ctx.fillStyle = bg; ctx.fillRect(0, 0, w, h);
  ctx.strokeStyle = '#48BB78'; ctx.lineWidth = 3; ctx.strokeRect(0, 0, w, h);

  ctx.fillStyle = '#1C4532'; ctx.font = 'bold 20px Arial'; ctx.textAlign = 'center';
  ctx.fillText('PENTOSE PHOSPHATE PATHWAY (PPP)', w * 0.5, h * 0.06);
  ctx.fillStyle = '#555'; ctx.font = '13px Arial';
  ctx.fillText('Cytoplasm — produces NADPH and ribose-5-phosphate', w * 0.5, h * 0.11);

  // Phase I: Oxidative
  ctx.fillStyle = '#276749';
  ctx.fillRect(w * 0.04, h * 0.15, w * 0.44, h * 0.65);
  ctx.fillStyle = '#FFF'; ctx.font = 'bold 15px Arial'; ctx.textAlign = 'center';
  ctx.fillText('OXIDATIVE PHASE', w * 0.26, h * 0.20);
  ctx.font = '12px Arial';
  const oxSteps = [
    'Glucose-6-P',
    '+ NADP⁺ → NADPH',
    '6-Phosphogluconate',
    '+ NADP⁺ → NADPH + CO₂',
    'Ribulose-5-P',
  ];
  oxSteps.forEach((s, i) => {
    ctx.fillText(s, w * 0.26, h * (0.27 + i * 0.09));
    if (i < oxSteps.length - 1) this.drawArrow(ctx, w * 0.26, h * (0.285 + i * 0.09), w * 0.26, h * (0.32 + i * 0.09), '#A0AEC0');
  });
  ctx.fillStyle = '#FFF'; ctx.font = 'bold 12px Arial';
  ctx.fillText('Yield: 2 NADPH + 1 CO₂', w * 0.26, h * 0.72);

  // Phase II: Non-oxidative
  ctx.fillStyle = '#2B6CB0';
  ctx.fillRect(w * 0.52, h * 0.15, w * 0.44, h * 0.65);
  ctx.fillStyle = '#FFF'; ctx.font = 'bold 15px Arial';
  ctx.fillText('NON-OXIDATIVE PHASE', w * 0.74, h * 0.20);
  ctx.font = '12px Arial';
  const noSteps = [
    'Ribulose-5-P',
    '(epimerase / isomerase)',
    'Xylulose-5-P + Ribose-5-P',
    '(transketolase, transaldolase)',
    'F6P + G3P → Glycolysis',
  ];
  noSteps.forEach((s, i) => {
    ctx.fillText(s, w * 0.74, h * (0.27 + i * 0.09));
    if (i < noSteps.length - 1) this.drawArrow(ctx, w * 0.74, h * (0.285 + i * 0.09), w * 0.74, h * (0.32 + i * 0.09), '#A0AEC0');
  });
  ctx.fillStyle = '#FFF'; ctx.font = 'bold 12px Arial';
  ctx.fillText('Yields Ribose-5-P for nucleotides', w * 0.74, h * 0.72);

  ctx.fillStyle = '#276749'; ctx.font = 'bold 13px Arial'; ctx.textAlign = 'center';
  ctx.fillText('Key functions: NADPH for biosynthesis/antioxidant  |  Ribose-5-P for DNA/RNA synthesis', w * 0.5, h * 0.87);
  ctx.font = '12px Arial'; ctx.fillStyle = '#555';
  ctx.fillText('Critical in RBCs (glutathione reduction), liver (fatty acid synthesis)', w * 0.5, h * 0.93);
}

static drawPentosePhosphateOxidative(ctx, w, h, location) {
  const bg = ctx.createLinearGradient(0, 0, 0, h); bg.addColorStop(0, '#F0FFF4'); bg.addColorStop(1, '#9AE6B4');
  ctx.fillStyle = bg; ctx.fillRect(0, 0, w, h);
  ctx.strokeStyle = '#38A169'; ctx.lineWidth = 3; ctx.strokeRect(0, 0, w, h);
  ctx.fillStyle = '#1C4532'; ctx.font = 'bold 18px Arial'; ctx.textAlign = 'center';
  ctx.fillText('PPP — OXIDATIVE PHASE', w * 0.5, h * 0.06);

  const steps = [
    { y: 0.18, mol: 'Glucose-6-phosphate', color: '#3182CE' },
    { y: 0.38, mol: '6-Phosphoglucono-δ-lactone', color: '#F6AD55' },
    { y: 0.58, mol: '6-Phosphogluconate', color: '#ED8936' },
    { y: 0.78, mol: 'Ribulose-5-phosphate + CO₂', color: '#68D391' },
  ];
  const enzymes = ['G6PD (+NADP⁺→NADPH)', 'Lactonase (+H₂O)', '6PGD (+NADP⁺→NADPH, −CO₂)'];
  steps.forEach((s, i) => {
    this.drawMolecule(ctx, w * 0.4, h * s.y, 38, s.color, s.mol);
    if (i < steps.length - 1) {
      this.drawArrow(ctx, w * 0.4, h * s.y + 0.04 * h, w * 0.4, h * steps[i + 1].y - 0.04 * h, '#718096');
      ctx.fillStyle = '#2B6CB0'; ctx.font = 'bold 11px Arial'; ctx.textAlign = 'left';
      ctx.fillText(enzymes[i], w * 0.55, h * ((s.y + steps[i + 1].y) / 2));
    }
  });
  ctx.fillStyle = '#276749'; ctx.font = 'bold 13px Arial'; ctx.textAlign = 'center';
  ctx.fillText('2 NADPH produced — used for reductive biosynthesis & ROS detoxification', w * 0.5, h * 0.91);
}

static drawPentosePhosphateNonOxidative(ctx, w, h, location) {
  const bg = ctx.createLinearGradient(0, 0, 0, h); bg.addColorStop(0, '#EBF8FF'); bg.addColorStop(1, '#BEE3F8');
  ctx.fillStyle = bg; ctx.fillRect(0, 0, w, h);
  ctx.strokeStyle = '#2B6CB0'; ctx.lineWidth = 3; ctx.strokeRect(0, 0, w, h);
  ctx.fillStyle = '#1A365D'; ctx.font = 'bold 18px Arial'; ctx.textAlign = 'center';
  ctx.fillText('PPP — NON-OXIDATIVE PHASE', w * 0.5, h * 0.06);
  ctx.fillStyle = '#555'; ctx.font = '12px Arial';
  ctx.fillText('Interconverts phosphorylated sugars (C3–C7) via transketolase & transaldolase', w * 0.5, h * 0.12);

  const sugars = [
    { x: 0.15, y: 0.3, label: 'Ribulose-5-P\n(C5)', color: '#F6AD55' },
    { x: 0.15, y: 0.55, label: 'Ribose-5-P\n(C5)', color: '#68D391' },
    { x: 0.4, y: 0.3, label: 'Xylulose-5-P\n(C5)', color: '#90CDF4' },
    { x: 0.65, y: 0.42, label: 'Sedohep-\ntulose-7-P (C7)', color: '#D6BCFA' },
    { x: 0.65, y: 0.65, label: 'Glyceraldehyde\n-3-P (C3)', color: '#FBD38D' },
    { x: 0.87, y: 0.42, label: 'Fructose-6-P\n→ Glycolysis', color: '#FC8181' },
    { x: 0.87, y: 0.65, label: 'Erythrose-4-P\n(C4)', color: '#F6AD55' },
  ];

  sugars.forEach(s => {
    ctx.beginPath(); ctx.arc(w * s.x, h * s.y, 32, 0, Math.PI * 2);
    ctx.fillStyle = s.color; ctx.fill();
    ctx.strokeStyle = '#4A5568'; ctx.lineWidth = 1.5; ctx.stroke();
    ctx.fillStyle = '#1A202C'; ctx.font = 'bold 9px Arial'; ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
    s.label.split('\n').forEach((line, i) => ctx.fillText(line, w * s.x, h * s.y + (i - 0.5) * 12));
  });

  ctx.textBaseline = 'alphabetic';
  ctx.fillStyle = '#2B6CB0'; ctx.font = 'bold 11px Arial'; ctx.textAlign = 'center';
  ctx.fillText('Transketolase (TPP cofactor) + Transaldolase allow reversible interconversion', w * 0.5, h * 0.86);
  ctx.fillStyle = '#555'; ctx.font = '11px Arial';
  ctx.fillText('Ribose-5-P → nucleotide biosynthesis | F6P, G3P → glycolysis', w * 0.5, h * 0.92);
}

// ─────────────────────────────────────────────────────────────

static drawPyruvateDecarboxylation(ctx, x, y, width, height, stage, location) {
  ctx.save();
  ctx.translate(x, y);
  switch (stage) {
    case 'complete':
      this.drawPyruvateDecarboxylationComplete(ctx, width, height, location);
      break;
    case 'steps':
      this.drawPyruvateDecarboxylationSteps(ctx, width, height, location);
      break;
    case 'complex':
      this.drawPyruvateDecarboxylationComplex(ctx, width, height, location);
      break;
  }
  ctx.restore();
}

static drawPyruvateDecarboxylationComplete(ctx, w, h, location) {
  const bg = ctx.createLinearGradient(0, 0, 0, h);
  bg.addColorStop(0, '#FFFBEB'); bg.addColorStop(1, '#FEF3C7');
  ctx.fillStyle = bg; ctx.fillRect(0, 0, w, h);
  ctx.strokeStyle = '#D97706'; ctx.lineWidth = 3; ctx.strokeRect(0, 0, w, h);

  ctx.fillStyle = '#78350F'; ctx.font = 'bold 20px Arial'; ctx.textAlign = 'center';
  ctx.fillText('PYRUVATE DECARBOXYLATION (Bridge Reaction)', w * 0.5, h * 0.06);
  ctx.fillStyle = '#555'; ctx.font = '13px Arial';
  ctx.fillText('Mitochondrial matrix — links glycolysis to Krebs cycle', w * 0.5, h * 0.11);

  // Overall equation box
  ctx.fillStyle = '#92400E'; ctx.fillRect(w * 0.05, h * 0.15, w * 0.9, h * 0.1);
  ctx.fillStyle = '#FFF'; ctx.font = 'bold 15px Arial'; ctx.textAlign = 'center';
  ctx.fillText('Pyruvate + NAD⁺ + CoA  →  Acetyl-CoA + CO₂ + NADH', w * 0.5, h * 0.22);

  // PDH complex diagram
  ctx.fillStyle = '#B45309'; ctx.font = 'bold 16px Arial'; ctx.textAlign = 'center';
  ctx.fillText('Pyruvate Dehydrogenase Complex (PDC)', w * 0.5, h * 0.33);

  const components = [
    { label: 'E1 — Pyruvate\nDecarboxylase', sub: 'Cofactor: TPP\nDecarboxylates pyruvate', color: '#FCD34D', x: 0.2, y: 0.52 },
    { label: 'E2 — Dihydrolipoyl\nTransacetylase', sub: 'Cofactor: Lipoamide\nTransfers acetyl group', color: '#6EE7B7', x: 0.5, y: 0.52 },
    { label: 'E3 — Dihydrolipoyl\nDehydrogenase', sub: 'Cofactor: FAD, NAD⁺\nRegenerates lipoamide', color: '#93C5FD', x: 0.8, y: 0.52 },
  ];
  components.forEach(c => {
    const bx = w * (c.x - 0.13), by = h * (c.y - 0.1), bw = w * 0.26, bh = h * 0.2;
    ctx.fillStyle = c.color; ctx.fillRect(bx, by, bw, bh);
    ctx.strokeStyle = '#374151'; ctx.lineWidth = 1.5; ctx.strokeRect(bx, by, bw, bh);
    ctx.fillStyle = '#1A202C'; ctx.font = 'bold 11px Arial'; ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
    c.label.split('\n').forEach((line, i) => ctx.fillText(line, bx + bw / 2, by + h * 0.04 + i * h * 0.035));
    ctx.fillStyle = '#374151'; ctx.font = '10px Arial';
    c.sub.split('\n').forEach((line, i) => ctx.fillText(line, bx + bw / 2, by + h * 0.13 + i * h * 0.03));
  });

  ctx.textBaseline = 'alphabetic';
  // Arrows between components
  this.drawArrow(ctx, w * 0.33, h * 0.52, w * 0.37, h * 0.52, '#374151');
  this.drawArrow(ctx, w * 0.63, h * 0.52, w * 0.67, h * 0.52, '#374151');

  // Regulation
  ctx.fillStyle = '#991B1B'; ctx.font = 'bold 13px Arial'; ctx.textAlign = 'center';
  ctx.fillText('REGULATION: Inhibited by Acetyl-CoA, NADH, ATP  |  Activated by pyruvate, CoA, NAD⁺, AMP', w * 0.5, h * 0.80);
  ctx.fillStyle = '#555'; ctx.font = '12px Arial';
  ctx.fillText('PDH kinase (inactivates PDC) | PDH phosphatase (activates PDC)', w * 0.5, h * 0.86);
  ctx.fillStyle = '#27AE60'; ctx.font = 'bold 13px Arial';
  ctx.fillText('Per pyruvate: 1 Acetyl-CoA + 1 NADH + 1 CO₂  (×2 per glucose)', w * 0.5, h * 0.93);
}

static drawPyruvateDecarboxylationSteps(ctx, w, h, location) {
  const bg = ctx.createLinearGradient(0, 0, 0, h); bg.addColorStop(0, '#FFFBEB'); bg.addColorStop(1, '#FDE68A');
  ctx.fillStyle = bg; ctx.fillRect(0, 0, w, h);
  ctx.strokeStyle = '#F59E0B'; ctx.lineWidth = 3; ctx.strokeRect(0, 0, w, h);
  ctx.fillStyle = '#78350F'; ctx.font = 'bold 18px Arial'; ctx.textAlign = 'center';
  ctx.fillText('PYRUVATE DECARBOXYLATION — STEP BY STEP', w * 0.5, h * 0.06);

  const steps = [
    { y: 0.17, label: 'Pyruvate (3C)', color: '#FC8181' },
    { y: 0.32, label: 'Acetaldehyde-TPP (E1 bound)', color: '#FCD34D' },
    { y: 0.47, label: 'Acetyl-lipoamide (E2 bound)', color: '#86EFAC' },
    { y: 0.62, label: 'Acetyl-CoA (released)', color: '#6EE7B7' },
  ];
  const descs = [
    'E1 (TPP): decarboxylation removes CO₂',
    'E2 (lipoamide): transfers acetyl group',
    'CoA attacks → Acetyl-CoA released, NADH formed',
  ];

  steps.forEach((s, i) => {
    this.drawMolecule(ctx, w * 0.35, h * s.y, 36, s.color, s.label);
    if (i < steps.length - 1) {
      this.drawArrow(ctx, w * 0.35, h * s.y + h * 0.04, w * 0.35, h * steps[i + 1].y - h * 0.04, '#718096');
      ctx.fillStyle = '#374151'; ctx.font = '11px Arial'; ctx.textAlign = 'left';
      ctx.fillText(descs[i], w * 0.52, h * ((s.y + steps[i + 1].y) / 2));
    }
  });

  ctx.fillStyle = '#27AE60'; ctx.font = 'bold 13px Arial'; ctx.textAlign = 'center';
  ctx.fillText('CO₂ released | NAD⁺ reduced to NADH | Acetyl-CoA enters Krebs cycle', w * 0.5, h * 0.80);
}

static drawPyruvateDecarboxylationComplex(ctx, w, h, location) {
  const bg = ctx.createLinearGradient(0, 0, 0, h); bg.addColorStop(0, '#EFF6FF'); bg.addColorStop(1, '#DBEAFE');
  ctx.fillStyle = bg; ctx.fillRect(0, 0, w, h);
  ctx.strokeStyle = '#3B82F6'; ctx.lineWidth = 3; ctx.strokeRect(0, 0, w, h);
  ctx.fillStyle = '#1E3A8A'; ctx.font = 'bold 18px Arial'; ctx.textAlign = 'center';
  ctx.fillText('PDH COMPLEX — STRUCTURE', w * 0.5, h * 0.06);

  // Core: E2 24-mer
  ctx.beginPath(); ctx.arc(w * 0.5, h * 0.5, 90, 0, Math.PI * 2);
  ctx.fillStyle = '#BFDBFE'; ctx.fill(); ctx.strokeStyle = '#3B82F6'; ctx.lineWidth = 3; ctx.stroke();
  ctx.fillStyle = '#1E3A8A'; ctx.font = 'bold 13px Arial'; ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
  ctx.fillText('E2 core', w * 0.5, h * 0.5 - 10);
  ctx.font = '11px Arial'; ctx.fillText('(24 dihydrolipoyl', w * 0.5, h * 0.5 + 5);
  ctx.fillText('transacetylase)', w * 0.5, h * 0.5 + 18);
  ctx.textBaseline = 'alphabetic';

  // E1 dimers on surface
  for (let i = 0; i < 6; i++) {
    const angle = (Math.PI / 3) * i;
    const ex = w * 0.5 + 130 * Math.cos(angle), ey = h * 0.5 + 130 * Math.sin(angle);
    ctx.beginPath(); ctx.arc(ex, ey, 28, 0, Math.PI * 2);
    ctx.fillStyle = '#FDE68A'; ctx.fill(); ctx.strokeStyle = '#D97706'; ctx.lineWidth = 2; ctx.stroke();
    ctx.fillStyle = '#78350F'; ctx.font = 'bold 10px Arial'; ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
    ctx.fillText('E1', ex, ey - 5); ctx.font = '8px Arial'; ctx.fillText('(TPP)', ex, ey + 6);
    ctx.textBaseline = 'alphabetic';
    ctx.strokeStyle = '#999'; ctx.lineWidth = 1.5;
    ctx.beginPath(); ctx.moveTo(w * 0.5 + 90 * Math.cos(angle), h * 0.5 + 90 * Math.sin(angle));
    ctx.lineTo(ex - 28 * Math.cos(angle), ey - 28 * Math.sin(angle)); ctx.stroke();
  }

  // E3 dimers
  for (let i = 0; i < 3; i++) {
    const angle = (Math.PI * 2 / 3) * i + Math.PI / 6;
    const ex = w * 0.5 + 155 * Math.cos(angle), ey = h * 0.5 + 155 * Math.sin(angle);
    ctx.beginPath(); ctx.arc(ex, ey, 22, 0, Math.PI * 2);
    ctx.fillStyle = '#A7F3D0'; ctx.fill(); ctx.strokeStyle = '#059669'; ctx.lineWidth = 2; ctx.stroke();
    ctx.fillStyle = '#065F46'; ctx.font = 'bold 10px Arial'; ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
    ctx.fillText('E3', ex, ey - 4); ctx.font = '8px Arial'; ctx.fillText('(FAD)', ex, ey + 6);
    ctx.textBaseline = 'alphabetic';
  }

  ctx.fillStyle = '#1E3A8A'; ctx.font = 'bold 12px Arial'; ctx.textAlign = 'center';
  ctx.fillText('~9.5 MDa complex — one of largest known enzyme assemblies', w * 0.5, h * 0.93);
}

// ─────────────────────────────────────────────────────────────

static drawPhotorespiration(ctx, x, y, width, height, stage, location) {
  ctx.save();
  ctx.translate(x, y);
  switch (stage) {
    case 'complete':
      this.drawPhotorespirationComplete(ctx, width, height, location);
      break;
    case 'oxygenase-reaction':
      this.drawPhotorespirationOxygenase(ctx, width, height, location);
      break;
    case 'recovery':
      this.drawPhotorespirationRecovery(ctx, width, height, location);
      break;
  }
  ctx.restore();
}

static drawPhotorespirationComplete(ctx, w, h, location) {
  const bg = ctx.createLinearGradient(0, 0, 0, h);
  bg.addColorStop(0, '#F0FFF4'); bg.addColorStop(1, '#FFF9C4');
  ctx.fillStyle = bg; ctx.fillRect(0, 0, w, h);
  ctx.strokeStyle = '#ECC94B'; ctx.lineWidth = 3; ctx.strokeRect(0, 0, w, h);

  ctx.fillStyle = '#744210'; ctx.font = 'bold 20px Arial'; ctx.textAlign = 'center';
  ctx.fillText('PHOTORESPIRATION', w * 0.5, h * 0.06);
  ctx.fillStyle = '#555'; ctx.font = '13px Arial';
  ctx.fillText('Wasteful pathway: O₂ competes with CO₂ at RuBisCO active site', w * 0.5, h * 0.11);

  // Compartments
  const compartments = [
    { label: 'CHLOROPLAST', x: 0.02, y: 0.15, w: 0.3, h: 0.7, color: '#C6F6D5', border: '#276749' },
    { label: 'PEROXISOME', x: 0.35, y: 0.15, w: 0.3, h: 0.7, color: '#FED7D7', border: '#E53E3E' },
    { label: 'MITOCHONDRION', x: 0.68, y: 0.15, w: 0.3, h: 0.7, color: '#FEF3C7', border: '#D97706' },
  ];
  compartments.forEach(c => {
    ctx.fillStyle = c.color; ctx.fillRect(w * c.x, h * c.y, w * c.w, h * c.h);
    ctx.strokeStyle = c.border; ctx.lineWidth = 2; ctx.strokeRect(w * c.x, h * c.y, w * c.w, h * c.h);
    ctx.fillStyle = c.border; ctx.font = 'bold 11px Arial'; ctx.textAlign = 'center';
    ctx.fillText(c.label, w * (c.x + c.w / 2), h * c.y + h * 0.035);
  });

  // Chloroplast content
  ctx.fillStyle = '#276749'; ctx.font = '11px Arial'; ctx.textAlign = 'center';
  ctx.fillText('RuBisCO + O₂', w * 0.17, h * 0.30);
  ctx.fillText('RuBP + O₂ →', w * 0.17, h * 0.38);
  ctx.fillText('3-PGA + 2-PG', w * 0.17, h * 0.44);
  ctx.fillStyle = '#E53E3E'; ctx.font = 'bold 11px Arial';
  ctx.fillText('(2-phosphoglycolate', w * 0.17, h * 0.50);
  ctx.fillText('is TOXIC)', w * 0.17, h * 0.55);

  // Peroxisome content
  ctx.fillStyle = '#9B2C2C'; ctx.font = '11px Arial'; ctx.textAlign = 'center';
  ctx.fillText('Glycolate → Glyoxylate', w * 0.5, h * 0.32);
  ctx.fillText('(oxidase, H₂O₂)', w * 0.5, h * 0.38);
  ctx.fillText('Glyoxylate → Glycine', w * 0.5, h * 0.48);
  ctx.fillText('Serine + CO₂', w * 0.5, h * 0.58);
  ctx.fillStyle = '#E53E3E'; ctx.font = 'bold 11px Arial';
  ctx.fillText('CO₂ LOST!', w * 0.5, h * 0.64);

  // Mitochondrion content
  ctx.fillStyle = '#744210'; ctx.font = '11px Arial'; ctx.textAlign = 'center';
  ctx.fillText('2 Glycine →', w * 0.83, h * 0.35);
  ctx.fillText('Serine + CO₂ + NH₃', w * 0.83, h * 0.43);
  ctx.fillText('(GDC complex)', w * 0.83, h * 0.49);
  ctx.fillStyle = '#E53E3E'; ctx.font = 'bold 11px Arial';
  ctx.fillText('CO₂ RELEASED!', w * 0.83, h * 0.58);

  // Net cost
  ctx.fillStyle = '#742A2A'; ctx.font = 'bold 13px Arial'; ctx.textAlign = 'center';
  ctx.fillText('Net cost: 2 PG → 1 PGA costs 2 ATP + 2 NADPH, releases 1 CO₂ + 1 NH₃', w * 0.5, h * 0.88);
  ctx.font = '12px Arial'; ctx.fillStyle = '#555';
  ctx.fillText('~25% of fixed carbon lost via photorespiration at 25°C in C3 plants', w * 0.5, h * 0.93);
}

static drawPhotorespirationOxygenase(ctx, w, h, location) {
  const bg = ctx.createLinearGradient(0, 0, 0, h); bg.addColorStop(0, '#FFFFF0'); bg.addColorStop(1, '#FEFCBF');
  ctx.fillStyle = bg; ctx.fillRect(0, 0, w, h);
  ctx.strokeStyle = '#D69E2E'; ctx.lineWidth = 3; ctx.strokeRect(0, 0, w, h);
  ctx.fillStyle = '#744210'; ctx.font = 'bold 18px Arial'; ctx.textAlign = 'center';
  ctx.fillText('RuBisCO OXYGENASE REACTION', w * 0.5, h * 0.07);

  this.drawMolecule(ctx, w * 0.2, h * 0.25, 36, '#63B3ED', 'RuBP (C5)');
  this.drawMolecule(ctx, w * 0.5, h * 0.25, 28, '#FC8181', 'O₂');
  ctx.strokeStyle = '#718096'; ctx.lineWidth = 2;
  ctx.beginPath(); ctx.moveTo(w * 0.28, h * 0.25); ctx.lineTo(w * 0.38, h * 0.25); ctx.stroke();
  ctx.beginPath(); ctx.moveTo(w * 0.62, h * 0.25); ctx.lineTo(w * 0.7, h * 0.25); ctx.stroke();

  ctx.fillStyle = '#744210'; ctx.font = '12px Arial'; ctx.textAlign = 'center';
  ctx.fillText('RuBisCO\n(oxygenase activity)', w * 0.5, h * 0.16);

  this.drawMolecule(ctx, w * 0.3, h * 0.5, 36, '#68D391', '3-PGA (C3)');
  this.drawMolecule(ctx, w * 0.7, h * 0.5, 36, '#FC8181', '2-Phosphoglycolate\n(C2) TOXIC');

  ctx.strokeStyle = '#718096'; ctx.lineWidth = 2;
  ctx.beginPath(); ctx.moveTo(w * 0.5, h * 0.30); ctx.lineTo(w * 0.3, h * 0.43); ctx.stroke();
  ctx.beginPath(); ctx.moveTo(w * 0.5, h * 0.30); ctx.lineTo(w * 0.7, h * 0.43); ctx.stroke();

  this.drawArrow(ctx, w * 0.7, h * 0.57, w * 0.7, h * 0.65, '#E53E3E');
  ctx.fillStyle = '#E53E3E'; ctx.font = 'bold 12px Arial'; ctx.textAlign = 'center';
  ctx.fillText('Phosphatase removes P → Glycolate (C2)', w * 0.7, h * 0.70);
  ctx.fillText('→ exported to peroxisome for salvage', w * 0.7, h * 0.76);

  ctx.fillStyle = '#C53030'; ctx.font = 'bold 13px Arial'; ctx.textAlign = 'center';
  ctx.fillText('CO₂/O₂ ratio determines carboxylase vs oxygenase activity', w * 0.5, h * 0.86);
  ctx.fillText('High temp / low CO₂ favors oxygenase → increases photorespiration', w * 0.5, h * 0.92);
}

static drawPhotorespirationRecovery(ctx, w, h, location) {
  const bg = ctx.createLinearGradient(0, 0, 0, h); bg.addColorStop(0, '#FFF5F5'); bg.addColorStop(1, '#FED7D7');
  ctx.fillStyle = bg; ctx.fillRect(0, 0, w, h);
  ctx.strokeStyle = '#FC8181'; ctx.lineWidth = 3; ctx.strokeRect(0, 0, w, h);
  ctx.fillStyle = '#742A2A'; ctx.font = 'bold 18px Arial'; ctx.textAlign = 'center';
  ctx.fillText('PHOTORESPIRATION — CARBON RECOVERY', w * 0.5, h * 0.06);
  ctx.fillStyle = '#555'; ctx.font = '12px Arial';
  ctx.fillText('2-Phosphoglycolate salvage — spans 3 organelles', w * 0.5, h * 0.11);

  const recoverySteps = [
    '2× 2-Phosphoglycolate (chloroplast)',
    '→ 2× Glycolate (phosphatase)',
    '→ 2× Glyoxylate + H₂O₂ (peroxisome oxidase)',
    '→ 2× Glycine + NH₃ (transaminase)',
    '→ Serine + CO₂ + NADH (mitochondria, GDC)',
    '→ Hydroxypyruvate (peroxisome)',
    '→ Glycerate (reductase, NADH)',
    '→ 3-PGA → returned to Calvin cycle',
  ];

  recoverySteps.forEach((step, i) => {
    const isLoss = step.includes('CO₂');
    ctx.fillStyle = isLoss ? '#FED7D7' : '#FFF5F5';
    ctx.fillRect(w * 0.07, h * (0.17 + i * 0.09), w * 0.86, h * 0.07);
    ctx.strokeStyle = isLoss ? '#FC8181' : '#CBD5E0'; ctx.lineWidth = 1;
    ctx.strokeRect(w * 0.07, h * (0.17 + i * 0.09), w * 0.86, h * 0.07);
    ctx.fillStyle = isLoss ? '#C53030' : '#2D3748'; ctx.font = isLoss ? 'bold 11px Arial' : '11px Arial';
    ctx.textAlign = 'left'; ctx.textBaseline = 'middle';
    ctx.fillText(step, w * 0.1, h * (0.17 + i * 0.09) + h * 0.035);
  });

  ctx.textBaseline = 'alphabetic';
  ctx.fillStyle = '#C53030'; ctx.font = 'bold 12px Arial'; ctx.textAlign = 'center';
  ctx.fillText('Net: 2 PG → 1 PGA  |  Cost: 2 ATP, 3 NADPH  |  1 CO₂ lost per cycle', w * 0.5, h * 0.92);
}

// ─────────────────────────────────────────────────────────────

static drawC4Photosynthesis(ctx, x, y, width, height, stage, location) {
  ctx.save();
  ctx.translate(x, y);
  switch (stage) {
    case 'complete':
      this.drawC4PhotosynthesisComplete(ctx, width, height, location);
      break;
    case 'mesophyll':
      this.drawC4Mesophyll(ctx, width, height, location);
      break;
    case 'bundle-sheath':
      this.drawC4BundleSheath(ctx, width, height, location);
      break;
    case 'comparison':
      this.drawC4C3Comparison(ctx, width, height, location);
      break;
  }
  ctx.restore();
}

static drawC4PhotosynthesisComplete(ctx, w, h, location) {
  const bg = ctx.createLinearGradient(0, 0, 0, h);
  bg.addColorStop(0, '#F0FFF4'); bg.addColorStop(1, '#C6F6D5');
  ctx.fillStyle = bg; ctx.fillRect(0, 0, w, h);
  ctx.strokeStyle = '#276749'; ctx.lineWidth = 3; ctx.strokeRect(0, 0, w, h);

  ctx.fillStyle = '#1C4532'; ctx.font = 'bold 20px Arial'; ctx.textAlign = 'center';
  ctx.fillText('C4 PHOTOSYNTHESIS', w * 0.5, h * 0.06);
  ctx.fillStyle = '#555'; ctx.font = '13px Arial';
  ctx.fillText('CO₂ concentrating mechanism — corn, sugarcane, sorghum', w * 0.5, h * 0.11);

  // Mesophyll cell
  ctx.fillStyle = '#9AE6B4'; ctx.fillRect(w * 0.03, h * 0.16, w * 0.44, h * 0.72);
  ctx.strokeStyle = '#276749'; ctx.lineWidth = 2; ctx.strokeRect(w * 0.03, h * 0.16, w * 0.44, h * 0.72);
  ctx.fillStyle = '#1C4532'; ctx.font = 'bold 14px Arial'; ctx.textAlign = 'center';
  ctx.fillText('MESOPHYLL CELL', w * 0.25, h * 0.21);

  const mesSteps = [
    { y: 0.30, label: 'CO₂ + PEP', color: '#68D391' },
    { y: 0.44, label: 'Oxaloacetate (C4)', color: '#F6AD55' },
    { y: 0.58, label: 'Malate or\nAspartate (C4)', color: '#FC8181' },
  ];
  mesSteps.forEach((s, i) => {
    this.drawMolecule(ctx, w * 0.25, h * s.y, 30, s.color, s.label);
    if (i < mesSteps.length - 1) this.drawArrow(ctx, w * 0.25, h * s.y + h * 0.035, w * 0.25, h * mesSteps[i + 1].y - h * 0.035, '#718096');
  });
  ctx.fillStyle = '#276749'; ctx.font = '11px Arial'; ctx.textAlign = 'center';
  ctx.fillText('PEP carboxylase (high CO₂ affinity)', w * 0.25, h * 0.37);
  ctx.fillText('NADP-malate dehydrogenase', w * 0.25, h * 0.51);
  ctx.fillStyle = '#2B6CB0'; ctx.font = 'bold 11px Arial';
  ctx.fillText('→ transported to bundle sheath', w * 0.25, h * 0.66);

  // Bundle sheath cell
  ctx.fillStyle = '#BEE3F8'; ctx.fillRect(w * 0.52, h * 0.16, w * 0.44, h * 0.72);
  ctx.strokeStyle = '#2B6CB0'; ctx.lineWidth = 2; ctx.strokeRect(w * 0.52, h * 0.16, w * 0.44, h * 0.72);
  ctx.fillStyle = '#1A365D'; ctx.font = 'bold 14px Arial'; ctx.textAlign = 'center';
  ctx.fillText('BUNDLE SHEATH CELL', w * 0.74, h * 0.21);

  const bsSteps = [
    { y: 0.30, label: 'Malate (C4)', color: '#FC8181' },
    { y: 0.44, label: 'CO₂ (concentrated!)', color: '#F6AD55' },
    { y: 0.58, label: 'Calvin cycle\n(RuBisCO + CO₂)', color: '#68D391' },
    { y: 0.72, label: 'Sugar / Glucose', color: '#3182CE' },
  ];
  bsSteps.forEach((s, i) => {
    this.drawMolecule(ctx, w * 0.74, h * s.y, 30, s.color, s.label);
    if (i < bsSteps.length - 1) this.drawArrow(ctx, w * 0.74, h * s.y + h * 0.035, w * 0.74, h * bsSteps[i + 1].y - h * 0.035, '#718096');
  });
  ctx.fillStyle = '#2B6CB0'; ctx.font = '11px Arial'; ctx.textAlign = 'center';
  ctx.fillText('NADP-ME decarboxylase', w * 0.74, h * 0.37);
  ctx.fillText('RuBisCO — no photorespiration', w * 0.74, h * 0.51);

  // Transport arrow
  ctx.strokeStyle = '#9B59B6'; ctx.lineWidth = 3;
  ctx.beginPath(); ctx.moveTo(w * 0.47, h * 0.55); ctx.lineTo(w * 0.52, h * 0.55); ctx.stroke();
  ctx.fillStyle = '#9B59B6'; ctx.font = 'bold 10px Arial'; ctx.textAlign = 'center';
  ctx.fillText('C4', w * 0.495, h * 0.52);

  ctx.fillStyle = '#1C4532'; ctx.font = 'bold 13px Arial'; ctx.textAlign = 'center';
  ctx.fillText('C4 plants: ~50% more efficient in hot/dry conditions, no photorespiration loss', w * 0.5, h * 0.92);
}

static drawC4Mesophyll(ctx, w, h, location) {
  const bg = ctx.createLinearGradient(0, 0, 0, h); bg.addColorStop(0, '#F0FFF4'); bg.addColorStop(1, '#9AE6B4');
  ctx.fillStyle = bg; ctx.fillRect(0, 0, w, h);
  ctx.strokeStyle = '#276749'; ctx.lineWidth = 3; ctx.strokeRect(0, 0, w, h);
  ctx.fillStyle = '#1C4532'; ctx.font = 'bold 18px Arial'; ctx.textAlign = 'center';
  ctx.fillText('C4 — MESOPHYLL CELL REACTIONS', w * 0.5, h * 0.06);

  const steps = [
    { y: 0.18, label: 'CO₂ + PEP (C3)', color: '#68D391' },
    { y: 0.35, label: 'Oxaloacetate, OAA (C4)', color: '#F6AD55' },
    { y: 0.52, label: 'Malate (C4) or Aspartate', color: '#FC8181' },
    { y: 0.70, label: '→ Bundle Sheath Cell', color: '#63B3ED' },
    { y: 0.85, label: 'Pyruvate returned to mesophyll + ATP', color: '#D6BCFA' },
  ];
  const enz = ['PEP carboxylase (PEPC)\nhigh affinity for CO₂, not O₂',
    'NADP-malate dehydrogenase\nor aspartate transaminase',
    'Plasmodesmata transport\n(symplastic)', 'Regeneration from pyruvate\n(PPDK + 2 ATP)'];

  steps.forEach((s, i) => {
    this.drawMolecule(ctx, w * 0.4, h * s.y, 34, s.color, s.label);
    if (i < steps.length - 1) {
      this.drawArrow(ctx, w * 0.4, h * s.y + h * 0.04, w * 0.4, h * steps[i + 1].y - h * 0.04, '#718096');
      ctx.fillStyle = '#276749'; ctx.font = '10px Arial'; ctx.textAlign = 'left';
      ctx.fillText(enz[i], w * 0.55, h * ((s.y + steps[i + 1].y) / 2));
    }
  });
}

static drawC4BundleSheath(ctx, w, h, location) {
  const bg = ctx.createLinearGradient(0, 0, 0, h); bg.addColorStop(0, '#EBF8FF'); bg.addColorStop(1, '#BEE3F8');
  ctx.fillStyle = bg; ctx.fillRect(0, 0, w, h);
  ctx.strokeStyle = '#2B6CB0'; ctx.lineWidth = 3; ctx.strokeRect(0, 0, w, h);
  ctx.fillStyle = '#1A365D'; ctx.font = 'bold 18px Arial'; ctx.textAlign = 'center';
  ctx.fillText('C4 — BUNDLE SHEATH REACTIONS', w * 0.5, h * 0.06);

  const steps = [
    { y: 0.18, label: 'Malate (C4) arrives', color: '#FC8181' },
    { y: 0.33, label: 'Pyruvate + CO₂ (concentrated)', color: '#F6AD55' },
    { y: 0.50, label: 'RuBP + CO₂ → 3-PGA × 2', color: '#68D391' },
    { y: 0.67, label: 'Calvin cycle → G3P', color: '#4FD1C5' },
    { y: 0.83, label: 'Glucose / Sucrose', color: '#3182CE' },
  ];
  const enz = ['NADP-malic enzyme (decarboxylase)\nreleases CO₂ + NADPH',
    'RuBisCO (carboxylase only)\nno photorespiration!',
    'Calvin cycle\n(light-independent)', 'Sucrose synthesis'];

  steps.forEach((s, i) => {
    this.drawMolecule(ctx, w * 0.4, h * s.y, 34, s.color, s.label);
    if (i < steps.length - 1) {
      this.drawArrow(ctx, w * 0.4, h * s.y + h * 0.04, w * 0.4, h * steps[i + 1].y - h * 0.04, '#718096');
      ctx.fillStyle = '#2B6CB0'; ctx.font = '10px Arial'; ctx.textAlign = 'left';
      ctx.fillText(enz[i], w * 0.56, h * ((s.y + steps[i + 1].y) / 2));
    }
  });

  ctx.fillStyle = '#1A365D'; ctx.font = 'bold 12px Arial'; ctx.textAlign = 'center';
  ctx.fillText('High [CO₂] around RuBisCO eliminates oxygenase activity → zero photorespiration', w * 0.5, h * 0.94);
}

static drawC4C3Comparison(ctx, w, h, location) {
  const bg = ctx.createLinearGradient(0, 0, 0, h); bg.addColorStop(0, '#FAFAFA'); bg.addColorStop(1, '#F0F0F0');
  ctx.fillStyle = bg; ctx.fillRect(0, 0, w, h);
  ctx.strokeStyle = '#718096'; ctx.lineWidth = 3; ctx.strokeRect(0, 0, w, h);
  ctx.fillStyle = '#1A202C'; ctx.font = 'bold 20px Arial'; ctx.textAlign = 'center';
  ctx.fillText('C3 vs C4 PHOTOSYNTHESIS', w * 0.5, h * 0.06);

  const headers = ['Feature', 'C3 Plants', 'C4 Plants'];
  const rows = [
    ['CO₂ fixation enzyme', 'RuBisCO only', 'PEPC (mesophyll) + RuBisCO (BS)'],
    ['First stable product', '3-PGA (C3)', 'OAA → Malate (C4)'],
    ['Photorespiration', 'Significant (~25%)', 'Negligible (CO₂ concentrated)'],
    ['ATP/CO₂ fixed', '~18 ATP', '~30 ATP (extra pumping cost)'],
    ['Optimal temperature', '15–25°C', '30–40°C'],
    ['Water use efficiency', 'Lower', 'Higher'],
    ['Examples', 'Wheat, rice, soy', 'Corn, sugarcane, sorghum'],
  ];

  const colW = [w * 0.32, w * 0.32, w * 0.32];
  const colX = [w * 0.02, w * 0.34, w * 0.66];
  const rowH = h * 0.1;

  // Header
  headers.forEach((h2, ci) => {
    ctx.fillStyle = '#2D3748';
    ctx.fillRect(colX[ci], h * 0.12, colW[ci], rowH);
    ctx.fillStyle = '#FFF'; ctx.font = 'bold 12px Arial'; ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
    ctx.fillText(h2, colX[ci] + colW[ci] / 2, h * 0.12 + rowH / 2);
  });

  rows.forEach((row, ri) => {
    const rowY = h * 0.12 + (ri + 1) * rowH;
    row.forEach((cell, ci) => {
      ctx.fillStyle = ri % 2 === 0 ? (ci === 0 ? '#EDF2F7' : (ci === 1 ? '#EBF8FF' : '#F0FFF4')) : (ci === 0 ? '#E2E8F0' : (ci === 1 ? '#BEE3F8' : '#C6F6D5'));
      ctx.fillRect(colX[ci], rowY, colW[ci], rowH);
      ctx.strokeStyle = '#CBD5E0'; ctx.lineWidth = 1; ctx.strokeRect(colX[ci], rowY, colW[ci], rowH);
      ctx.fillStyle = '#2D3748'; ctx.font = '10px Arial'; ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
      ctx.fillText(cell, colX[ci] + colW[ci] / 2, rowY + rowH / 2);
    });
  });
  ctx.textBaseline = 'alphabetic';
}

// ─────────────────────────────────────────────────────────────

static drawCAMPhotosynthesis(ctx, x, y, width, height, stage, location) {
  ctx.save();
  ctx.translate(x, y);
  switch (stage) {
    case 'complete':
      this.drawCAMPhotosynthesisComplete(ctx, width, height, location);
      break;
    case 'night':
      this.drawCAMNight(ctx, width, height, location);
      break;
    case 'day':
      this.drawCAMDay(ctx, width, height, location);
      break;
    case 'comparison':
      this.drawCAMComparison(ctx, width, height, location);
      break;
  }
  ctx.restore();
}

static drawCAMPhotosynthesisComplete(ctx, w, h, location) {
  const bg = ctx.createLinearGradient(0, 0, w, h);
  bg.addColorStop(0, '#FFFFF0'); bg.addColorStop(1, '#FEF3C7');
  ctx.fillStyle = bg; ctx.fillRect(0, 0, w, h);
  ctx.strokeStyle = '#D97706'; ctx.lineWidth = 3; ctx.strokeRect(0, 0, w, h);

  ctx.fillStyle = '#78350F'; ctx.font = 'bold 20px Arial'; ctx.textAlign = 'center';
  ctx.fillText('CAM PHOTOSYNTHESIS', w * 0.5, h * 0.06);
  ctx.fillStyle = '#555'; ctx.font = '13px Arial';
  ctx.fillText('Crassulacean Acid Metabolism — cacti, succulents, pineapple', w * 0.5, h * 0.11);

  // Night panel
  ctx.fillStyle = '#2D3748'; ctx.fillRect(w * 0.03, h * 0.15, w * 0.44, h * 0.73);
  ctx.strokeStyle = '#718096'; ctx.lineWidth = 2; ctx.strokeRect(w * 0.03, h * 0.15, w * 0.44, h * 0.73);
  ctx.fillStyle = '#FFF'; ctx.font = 'bold 16px Arial'; ctx.textAlign = 'center';
  ctx.fillText('🌙 NIGHT', w * 0.25, h * 0.22);
  ctx.font = '12px Arial';
  const nightSteps = [
    'Stomata OPEN', 'CO₂ enters', 'CO₂ + PEP → OAA', '(PEPC enzyme)', 'OAA → Malate',
    'Malate stored in vacuole', '(accumulates as malic acid)',
  ];
  nightSteps.forEach((s, i) => {
    const isHighlight = s.includes('PEPC') || s.includes('vacuole');
    ctx.fillStyle = isHighlight ? '#F6AD55' : '#FFF';
    ctx.font = isHighlight ? 'bold 11px Arial' : '11px Arial';
    ctx.fillText(s, w * 0.25, h * (0.30 + i * 0.08));
  });

  // Day panel
  ctx.fillStyle = '#FEF3C7'; ctx.fillRect(w * 0.52, h * 0.15, w * 0.44, h * 0.73);
  ctx.strokeStyle = '#D97706'; ctx.lineWidth = 2; ctx.strokeRect(w * 0.52, h * 0.15, w * 0.44, h * 0.73);
  ctx.fillStyle = '#78350F'; ctx.font = 'bold 16px Arial'; ctx.textAlign = 'center';
  ctx.fillText('☀ DAY', w * 0.74, h * 0.22);
  ctx.font = '12px Arial'; ctx.fillStyle = '#333';
  const daySteps = [
    'Stomata CLOSED', '(prevents water loss)', 'Malate from vacuole', '→ decarboxylated',
    'CO₂ released → RuBisCO', 'Calvin cycle proceeds', '→ Sugar produced',
  ];
  daySteps.forEach((s, i) => {
    const isHighlight = s.includes('RuBisCO') || s.includes('Calvin') || s.includes('Sugar');
    ctx.fillStyle = isHighlight ? '#276749' : '#333';
    ctx.font = isHighlight ? 'bold 11px Arial' : '11px Arial';
    ctx.fillText(s, w * 0.74, h * (0.30 + i * 0.08));
  });

  ctx.fillStyle = '#78350F'; ctx.font = 'bold 12px Arial'; ctx.textAlign = 'center';
  ctx.fillText('CAM separates CO₂ fixation (night) from Calvin cycle (day) TEMPORALLY', w * 0.5, h * 0.91);
  ctx.font = '11px Arial'; ctx.fillStyle = '#555';
  ctx.fillText('WUE 3–6× higher than C3; adapted to arid environments', w * 0.5, h * 0.96);
}

static drawCAMNight(ctx, w, h, location) {
  const bg = ctx.createLinearGradient(0, 0, 0, h); bg.addColorStop(0, '#1A202C'); bg.addColorStop(1, '#2D3748');
  ctx.fillStyle = bg; ctx.fillRect(0, 0, w, h);
  ctx.strokeStyle = '#718096'; ctx.lineWidth = 3; ctx.strokeRect(0, 0, w, h);
  ctx.fillStyle = '#FFF'; ctx.font = 'bold 20px Arial'; ctx.textAlign = 'center';
  ctx.fillText('🌙 CAM — NIGHT PHASE', w * 0.5, h * 0.07);

  const steps = [
    { y: 0.20, label: 'CO₂ (atmosphere)', color: '#63B3ED' },
    { y: 0.36, label: 'PEP + CO₂ → OAA', color: '#F6AD55' },
    { y: 0.52, label: 'Malate (C4)', color: '#FC8181' },
    { y: 0.70, label: 'Vacuole storage (as malic acid)', color: '#9F7AEA' },
  ];
  const enz = ['Stomata open\nPEP carboxylase (PEPC)', 'NADP-malate dehydrogenase\n(NADH consumed)', 'Malate transporter\n(active transport)'];

  steps.forEach((s, i) => {
    this.drawMolecule(ctx, w * 0.35, h * s.y, 36, s.color, s.label);
    if (i < steps.length - 1) {
      this.drawArrow(ctx, w * 0.35, h * s.y + h * 0.04, w * 0.35, h * steps[i + 1].y - h * 0.04, '#A0AEC0');
      ctx.fillStyle = '#CBD5E0'; ctx.font = '11px Arial'; ctx.textAlign = 'left';
      ctx.fillText(enz[i], w * 0.54, h * ((s.y + steps[i + 1].y) / 2));
    }
  });

  ctx.fillStyle = '#A0AEC0'; ctx.font = '12px Arial'; ctx.textAlign = 'center';
  ctx.fillText('PEP regenerated from starch/sugars via glycolysis', w * 0.5, h * 0.86);
  ctx.fillStyle = '#FFF'; ctx.font = 'bold 12px Arial';
  ctx.fillText('Vacuole pH drops from ~6 to ~4 as malic acid accumulates overnight', w * 0.5, h * 0.92);
}

static drawCAMDay(ctx, w, h, location) {
  const bg = ctx.createLinearGradient(0, 0, 0, h); bg.addColorStop(0, '#FFFBEB'); bg.addColorStop(1, '#FDE68A');
  ctx.fillStyle = bg; ctx.fillRect(0, 0, w, h);
  ctx.strokeStyle = '#F59E0B'; ctx.lineWidth = 3; ctx.strokeRect(0, 0, w, h);
  ctx.fillStyle = '#78350F'; ctx.font = 'bold 20px Arial'; ctx.textAlign = 'center';
  ctx.fillText('☀ CAM — DAY PHASE', w * 0.5, h * 0.07);

  const steps = [
    { y: 0.20, label: 'Malate from vacuole', color: '#FC8181' },
    { y: 0.36, label: 'Pyruvate + CO₂', color: '#F6AD55' },
    { y: 0.52, label: 'Calvin cycle (RuBisCO + CO₂)', color: '#68D391' },
    { y: 0.70, label: 'G3P → Sugar / Starch', color: '#3182CE' },
  ];
  const enz = ['Decarboxylase (NADP-ME or PEPCK)\n+ light energy', 'RuBisCO carboxylase\nstomata CLOSED → no water loss', 'Light reactions supply ATP + NADPH'];

  steps.forEach((s, i) => {
    this.drawMolecule(ctx, w * 0.35, h * s.y, 36, s.color, s.label);
    if (i < steps.length - 1) {
      this.drawArrow(ctx, w * 0.35, h * s.y + h * 0.04, w * 0.35, h * steps[i + 1].y - h * 0.04, '#D97706');
      ctx.fillStyle = '#744210'; ctx.font = '11px Arial'; ctx.textAlign = 'left';
      ctx.fillText(enz[i], w * 0.54, h * ((s.y + steps[i + 1].y) / 2));
    }
  });

  ctx.fillStyle = '#276749'; ctx.font = 'bold 12px Arial'; ctx.textAlign = 'center';
  ctx.fillText('Pyruvate → PEP (PPDK, 2 ATP) → ready for next night\'s CO₂ fixation', w * 0.5, h * 0.84);
  ctx.fillStyle = '#555'; ctx.font = '11px Arial';
  ctx.fillText('CO₂ concentrated around RuBisCO → no photorespiration', w * 0.5, h * 0.90);
}

static drawCAMComparison(ctx, w, h, location) {
  const bg = ctx.createLinearGradient(0, 0, 0, h); bg.addColorStop(0, '#FAFAFA'); bg.addColorStop(1, '#EDF2F7');
  ctx.fillStyle = bg; ctx.fillRect(0, 0, w, h);
  ctx.strokeStyle = '#718096'; ctx.lineWidth = 3; ctx.strokeRect(0, 0, w, h);
  ctx.fillStyle = '#1A202C'; ctx.font = 'bold 18px Arial'; ctx.textAlign = 'center';
  ctx.fillText('C3 vs C4 vs CAM COMPARISON', w * 0.5, h * 0.06);

  const cols = ['Feature', 'C3', 'C4', 'CAM'];
  const rows2 = [
    ['CO₂ acceptor', 'RuBisCO', 'PEPC → RuBisCO', 'PEPC → RuBisCO'],
    ['CO₂ fix time', 'Day', 'Day', 'Night (stomata open)'],
    ['Stomata', 'Open day', 'Open day', 'Open night only'],
    ['Photorespiration', 'Yes', 'No', 'No'],
    ['Water loss', 'High', 'Medium', 'Low (most efficient)'],
    ['Productivity', 'Medium', 'High', 'Low (slow growth)'],
    ['Examples', 'Wheat, trees', 'Corn, sugarcane', 'Cacti, Aloe, pineapple'],
  ];

  const cW = w * 0.235, cXs = [w * 0.02, w * 0.26, w * 0.50, w * 0.74], rH = h * 0.1;
  const colors = ['#EDF2F7', '#EBF8FF', '#C6F6D5', '#FEF3C7'];

  cols.forEach((col, ci) => {
    ctx.fillStyle = '#2D3748'; ctx.fillRect(cXs[ci], h * 0.12, cW, rH);
    ctx.strokeStyle = '#FFF'; ctx.lineWidth = 1; ctx.strokeRect(cXs[ci], h * 0.12, cW, rH);
    ctx.fillStyle = '#FFF'; ctx.font = 'bold 12px Arial'; ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
    ctx.fillText(col, cXs[ci] + cW / 2, h * 0.12 + rH / 2);
  });

  rows2.forEach((row, ri) => {
    row.forEach((cell, ci) => {
      ctx.fillStyle = ri % 2 === 0 ? colors[ci] : (ci === 0 ? '#E2E8F0' : colors[ci] + 'AA');
      ctx.fillRect(cXs[ci], h * (0.22 + ri * 0.1), cW, rH);
      ctx.strokeStyle = '#CBD5E0'; ctx.lineWidth = 1;
      ctx.strokeRect(cXs[ci], h * (0.22 + ri * 0.1), cW, rH);
      ctx.fillStyle = '#2D3748'; ctx.font = '10px Arial'; ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
      ctx.fillText(cell, cXs[ci] + cW / 2, h * (0.22 + ri * 0.1) + rH / 2);
    });
  });
  ctx.textBaseline = 'alphabetic';
}

// ─────────────────────────────────────────────────────────────

static drawCyclicPhotophosphorylation(ctx, x, y, width, height, stage, location) {
  ctx.save();
  ctx.translate(x, y);
  switch (stage) {
    case 'complete':
      this.drawCyclicPhotophosphorylationComplete(ctx, width, height, location);
      break;
    case 'electron-path':
      this.drawCyclicElectronPath(ctx, width, height, location);
      break;
    case 'comparison':
      this.drawCyclicNonCyclicComparison(ctx, width, height, location);
      break;
  }
  ctx.restore();
}

static drawCyclicPhotophosphorylationComplete(ctx, w, h, location) {
  const bg = ctx.createLinearGradient(0, 0, 0, h);
  bg.addColorStop(0, '#EBF8FF'); bg.addColorStop(1, '#BEE3F8');
  ctx.fillStyle = bg; ctx.fillRect(0, 0, w, h);
  ctx.strokeStyle = '#2B6CB0'; ctx.lineWidth = 3; ctx.strokeRect(0, 0, w, h);

  ctx.fillStyle = '#1A365D'; ctx.font = 'bold 20px Arial'; ctx.textAlign = 'center';
  ctx.fillText('CYCLIC PHOTOPHOSPHORYLATION', w * 0.5, h * 0.06);
  ctx.fillStyle = '#555'; ctx.font = '13px Arial';
  ctx.fillText('Cyclic electron flow around PSI — produces ATP only, no NADPH or O₂', w * 0.5, h * 0.11);

  // PSI
  const psiX = w * 0.5, psiY = h * 0.38;
  ctx.beginPath(); ctx.arc(psiX, psiY, 55, 0, Math.PI * 2);
  ctx.fillStyle = '#3182CE'; ctx.fill();
  ctx.strokeStyle = '#1A365D'; ctx.lineWidth = 3; ctx.stroke();
  ctx.fillStyle = '#FFF'; ctx.font = 'bold 14px Arial'; ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
  ctx.fillText('PSI', psiX, psiY - 8); ctx.font = '11px Arial'; ctx.fillText('(P700)', psiX, psiY + 8);
  ctx.textBaseline = 'alphabetic';

  // Light input arrow
  this.drawArrow(ctx, psiX, psiY - 75, psiX, psiY - 55, '#F6E05E');
  ctx.fillStyle = '#F6E05E'; ctx.font = 'bold 12px Arial'; ctx.textAlign = 'center';
  ctx.fillText('Light (hν)', psiX, psiY - 80);

  // Cyclic path: PSI → Fd → Cyt b6f → PC → PSI
  const pathPoints = [
    { x: psiX + 80, y: psiY - 40, label: 'Fd\n(Ferredoxin)' },
    { x: psiX + 130, y: psiY + 60, label: 'Cyt b₆f\nComplex' },
    { x: psiX - 130, y: psiY + 60, label: 'PQ\nPool' },
    { x: psiX - 80, y: psiY - 40, label: 'PC\n(Plastocyanin)' },
  ];

  const colors2 = ['#68D391', '#9B59B6', '#F6AD55', '#63B3ED'];
  pathPoints.forEach((p, i) => {
    ctx.beginPath(); ctx.arc(p.x, p.y, 30, 0, Math.PI * 2);
    ctx.fillStyle = colors2[i]; ctx.fill();
    ctx.strokeStyle = '#333'; ctx.lineWidth = 2; ctx.stroke();
    ctx.fillStyle = '#FFF'; ctx.font = 'bold 9px Arial'; ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
    p.label.split('\n').forEach((line, li) => ctx.fillText(line, p.x, p.y + (li - 0.5) * 12));
    ctx.textBaseline = 'alphabetic';
  });

  // Arrows between components
  const allPoints = [{ x: psiX, y: psiY }, ...pathPoints];
  for (let i = 0; i < pathPoints.length; i++) {
    const from = i === 0 ? { x: psiX + 55, y: psiY - 10 } : pathPoints[i - 1];
    const to = pathPoints[i];
    const dx = to.x - from.x, dy = to.y - from.y;
    const len = Math.hypot(dx, dy);
    const startX = from.x + (dx / len) * (i === 0 ? 0 : 30);
    const startY = from.y + (dy / len) * (i === 0 ? 0 : 30);
    const endX = to.x - (dx / len) * 30;
    const endY = to.y - (dy / len) * 30;
    this.drawArrow(ctx, startX, startY, endX, endY, '#374151');
  }
  // Return arrow from PC back to PSI
  const lastP = pathPoints[pathPoints.length - 1];
  const dx = psiX - 55 - lastP.x, dy = psiY - lastP.y;
  const len = Math.hypot(dx, dy);
  this.drawArrow(ctx, lastP.x + 30 * dx / len, lastP.y + 30 * dy / len, psiX - 55, psiY - 10, '#374151');

  // H+ pumping at Cyt b6f
  const cytP = pathPoints[1];
  this.drawArrow(ctx, cytP.x, cytP.y - 30, cytP.x, cytP.y - 60, '#E53E3E');
  ctx.fillStyle = '#E53E3E'; ctx.font = 'bold 11px Arial'; ctx.textAlign = 'center';
  ctx.fillText('H⁺ pumped', cytP.x, cytP.y - 65);

  // ATP synthase
  ctx.beginPath(); ctx.arc(w * 0.5, h * 0.82, 30, 0, Math.PI * 2);
  ctx.fillStyle = '#27AE60'; ctx.fill(); ctx.strokeStyle = '#1C4532'; ctx.lineWidth = 2; ctx.stroke();
  ctx.fillStyle = '#FFF'; ctx.font = 'bold 11px Arial'; ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
  ctx.fillText('ATP', w * 0.5, h * 0.82 - 4); ctx.fillText('Syn', w * 0.5, h * 0.82 + 8);
  ctx.textBaseline = 'alphabetic';
  this.drawArrow(ctx, cytP.x, h * 0.82, w * 0.5 + 30, h * 0.82, '#27AE60');

  ctx.fillStyle = '#1A365D'; ctx.font = 'bold 12px Arial'; ctx.textAlign = 'center';
  ctx.fillText('Net: ATP only | No NADPH, no O₂ | Increases ATP/NADPH ratio when needed', w * 0.5, h * 0.93);
}

static drawCyclicElectronPath(ctx, w, h, location) {
  const bg = ctx.createLinearGradient(0, 0, 0, h); bg.addColorStop(0, '#EBF8FF'); bg.addColorStop(1, '#90CDF4');
  ctx.fillStyle = bg; ctx.fillRect(0, 0, w, h);
  ctx.strokeStyle = '#2B6CB0'; ctx.lineWidth = 3; ctx.strokeRect(0, 0, w, h);
  ctx.fillStyle = '#1A365D'; ctx.font = 'bold 18px Arial'; ctx.textAlign = 'center';
  ctx.fillText('CYCLIC ELECTRON FLOW — PATH DETAIL', w * 0.5, h * 0.06);

  const carriers = [
    { x: 0.5, y: 0.18, label: 'P700 (excited)', color: '#F6AD55', note: 'Light energy absorbed' },
    { x: 0.75, y: 0.30, label: 'A₀, A₁, Fx/FA/FB', color: '#68D391', note: 'PSI iron-sulfur acceptors' },
    { x: 0.75, y: 0.48, label: 'Ferredoxin (Fd)', color: '#9AE6B4', note: 'Soluble, freely diffuses' },
    { x: 0.5, y: 0.63, label: 'Cyt b₆f Complex', color: '#9B59B6', note: 'Pumps H⁺ to lumen' },
    { x: 0.25, y: 0.48, label: 'PQ pool', color: '#FCD34D', note: 'Lipid-soluble, in membrane' },
    { x: 0.25, y: 0.30, label: 'Plastocyanin (PC)', color: '#63B3ED', note: 'Cu protein, lumen-side' },
  ];

  carriers.forEach(c => {
    ctx.beginPath(); ctx.arc(w * c.x, h * c.y, 34, 0, Math.PI * 2);
    ctx.fillStyle = c.color; ctx.fill();
    ctx.strokeStyle = '#333'; ctx.lineWidth = 2; ctx.stroke();
    ctx.fillStyle = '#1A202C'; ctx.font = 'bold 9px Arial'; ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
    ctx.fillText(c.label, w * c.x, h * c.y - 4);
    ctx.textBaseline = 'alphabetic';
    ctx.fillStyle = '#4A5568'; ctx.font = '9px Arial'; ctx.textAlign = 'center';
    ctx.fillText(c.note, w * c.x, h * c.y + 46);
  });

  // Cyclic arrows
  for (let i = 0; i < carriers.length; i++) {
    const from = carriers[i], to = carriers[(i + 1) % carriers.length];
    const dx = w * to.x - w * from.x, dy = h * to.y - h * from.y;
    const len = Math.hypot(dx, dy);
    this.drawArrow(ctx, w * from.x + 34 * dx / len, h * from.y + 34 * dy / len, w * to.x - 34 * dx / len, h * to.y - 34 * dy / len, '#2B6CB0');
  }

  ctx.fillStyle = '#E53E3E'; ctx.font = 'bold 12px Arial'; ctx.textAlign = 'center';
  ctx.fillText('H⁺ pumped at Cyt b₆f → ATP synthase → ATP produced', w * 0.5, h * 0.88);
  ctx.fillStyle = '#555'; ctx.font = '11px Arial';
  ctx.fillText('Cyclic flow activated when NADP⁺ is limiting or ATP/NADPH ratio is low', w * 0.5, h * 0.93);
}

static drawCyclicNonCyclicComparison(ctx, w, h, location) {
  const bg = ctx.createLinearGradient(0, 0, 0, h); bg.addColorStop(0, '#FAFAFA'); bg.addColorStop(1, '#EDF2F7');
  ctx.fillStyle = bg; ctx.fillRect(0, 0, w, h);
  ctx.strokeStyle = '#718096'; ctx.lineWidth = 3; ctx.strokeRect(0, 0, w, h);
  ctx.fillStyle = '#1A202C'; ctx.font = 'bold 18px Arial'; ctx.textAlign = 'center';
  ctx.fillText('CYCLIC vs NON-CYCLIC PHOTOPHOSPHORYLATION', w * 0.5, h * 0.06);

  const rows3 = [
    ['Feature', 'Cyclic', 'Non-cyclic (Z-scheme)'],
    ['Photosystems used', 'PSI only', 'PSII + PSI'],
    ['Products', 'ATP only', 'ATP + NADPH + O₂'],
    ['Electron donor', 'Recycled (cyclic)', 'Water (H₂O)'],
    ['O₂ evolution', 'No', 'Yes'],
    ['NADPH production', 'No', 'Yes'],
    ['H⁺ pumping site', 'Cyt b₆f only', 'PSII + Cyt b₆f'],
    ['When active', 'Low NADP⁺, high ATP need', 'Normal photosynthesis'],
    ['ATP/NADPH ratio', 'ATP only (∞)', '~1.28-1.5 : 1'],
  ];

  const colW2 = [w * 0.3, w * 0.3, w * 0.35];
  const colX2 = [w * 0.02, w * 0.32, w * 0.63];
  const rH2 = h * 0.10;

  rows3.forEach((row, ri) => {
    row.forEach((cell, ci) => {
      ctx.fillStyle = ri === 0 ? '#2D3748' : (ri % 2 === 0 ? ['#EDF2F7', '#EBF8FF', '#F0FFF4'][ci] : ['#E2E8F0', '#BEE3F8', '#C6F6D5'][ci]);
      ctx.fillRect(colX2[ci], h * (0.13 + ri * rH2), colW2[ci], rH2);
      ctx.strokeStyle = ri === 0 ? '#FFF' : '#CBD5E0'; ctx.lineWidth = 1;
      ctx.strokeRect(colX2[ci], h * (0.13 + ri * rH2), colW2[ci], rH2);
      ctx.fillStyle = ri === 0 ? '#FFF' : '#2D3748';
      ctx.font = ri === 0 ? 'bold 11px Arial' : '10px Arial'; ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
      ctx.fillText(cell, colX2[ci] + colW2[ci] / 2, h * (0.13 + ri * rH2) + rH2 / 2);
    });
  });
  ctx.textBaseline = 'alphabetic';
}

// ─────────────────────────────────────────────────────────────

static drawNonCyclicPhotophosphorylation(ctx, x, y, width, height, stage, location) {
  ctx.save();
  ctx.translate(x, y);
  switch (stage) {
    case 'complete':
      this.drawZSchemeComplete(ctx, width, height, location);
      break;
    case 'psii-side':
      this.drawZSchemePSII(ctx, width, height, location);
      break;
    case 'psi-side':
      this.drawZSchemePSI(ctx, width, height, location);
      break;
    case 'energy-diagram':
      this.drawZSchemeEnergyDiagram(ctx, width, height, location);
      break;
  }
  ctx.restore();
}

static drawZSchemeComplete(ctx, w, h, location) {
  const bg = ctx.createLinearGradient(0, 0, 0, h);
  bg.addColorStop(0, '#FEFCBF'); bg.addColorStop(1, '#F0FFF4');
  ctx.fillStyle = bg; ctx.fillRect(0, 0, w, h);
  ctx.strokeStyle = '#276749'; ctx.lineWidth = 3; ctx.strokeRect(0, 0, w, h);

  ctx.fillStyle = '#1C4532'; ctx.font = 'bold 20px Arial'; ctx.textAlign = 'center';
  ctx.fillText('NON-CYCLIC PHOTOPHOSPHORYLATION — Z-SCHEME', w * 0.5, h * 0.06);
  ctx.fillStyle = '#555'; ctx.font = '13px Arial';
  ctx.fillText('Electron flow from H₂O → NADPH, linked by PSII and PSI via ETC', w * 0.5, h * 0.11);

  // Y-axis: energy (top = low potential = high energy)
  ctx.strokeStyle = '#718096'; ctx.lineWidth = 2;
  ctx.beginPath(); ctx.moveTo(w * 0.07, h * 0.15); ctx.lineTo(w * 0.07, h * 0.88); ctx.stroke();
  ctx.fillStyle = '#555'; ctx.font = '11px Arial'; ctx.textAlign = 'right';
  ctx.fillText('High energy', w * 0.06, h * 0.20);
  ctx.fillText('(low E°)', w * 0.06, h * 0.24);
  ctx.fillText('Low energy', w * 0.06, h * 0.82);
  ctx.fillText('(high E°)', w * 0.06, h * 0.86);

  // PSII side
  ctx.fillStyle = '#276749'; ctx.font = 'bold 13px Arial'; ctx.textAlign = 'center';
  ctx.fillText('PSII', w * 0.22, h * 0.14);

  const psiiCarriers = [
    { x: 0.22, y: 0.82, label: 'P680 (ground)', color: '#FC8181' },
    { x: 0.22, y: 0.30, label: 'P680* (excited)', color: '#F6AD55' },
    { x: 0.3, y: 0.35, label: 'Pheo', color: '#FCD34D' },
    { x: 0.38, y: 0.42, label: 'QA→QB', color: '#68D391' },
    { x: 0.46, y: 0.50, label: 'PQ pool', color: '#86EFAC' },
    { x: 0.52, y: 0.56, label: 'Cyt b₆f', color: '#9B59B6' },
    { x: 0.58, y: 0.62, label: 'PC', color: '#63B3ED' },
  ];

  const psiCarriers = [
    { x: 0.65, y: 0.82, label: 'P700 (ground)', color: '#FC8181' },
    { x: 0.65, y: 0.22, label: 'P700* (excited)', color: '#F6AD55' },
    { x: 0.73, y: 0.27, label: 'A₀/A₁', color: '#FCD34D' },
    { x: 0.81, y: 0.33, label: 'Fd', color: '#68D391' },
    { x: 0.89, y: 0.38, label: 'FNR→NADPH', color: '#3182CE' },
  ];

  // Draw Z-shape
  [psiiCarriers, psiCarriers].forEach(carriers => {
    for (let i = 0; i < carriers.length - 1; i++) {
      const from = carriers[i], to = carriers[i + 1];
      this.drawArrow(ctx, w * from.x, h * from.y, w * to.x, h * to.y, '#374151');
    }
  });

  // Light arrows to excited states
  this.drawArrow(ctx, w * 0.22, h * 0.75, w * 0.22, h * 0.37, '#F6E05E');
  ctx.fillStyle = '#D97706'; ctx.font = 'bold 11px Arial'; ctx.textAlign = 'left'; ctx.fillText('hν', w * 0.14, h * 0.55);
  this.drawArrow(ctx, w * 0.65, h * 0.75, w * 0.65, h * 0.30, '#F6E05E');
  ctx.fillText('hν', w * 0.57, h * 0.52);

  // Water oxidation
  ctx.fillStyle = '#2B6CB0'; ctx.font = '11px Arial'; ctx.textAlign = 'center';
  ctx.fillText('2H₂O → O₂+4H⁺+4e⁻', w * 0.18, h * 0.90);

  // Draw all carrier nodes
  [...psiiCarriers, ...psiCarriers].forEach(c => {
    ctx.beginPath(); ctx.arc(w * c.x, h * c.y, 18, 0, Math.PI * 2);
    ctx.fillStyle = c.color; ctx.fill();
    ctx.strokeStyle = '#333'; ctx.lineWidth = 1.5; ctx.stroke();
    ctx.fillStyle = '#1A202C'; ctx.font = 'bold 8px Arial'; ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
    ctx.fillText(c.label, w * c.x, h * c.y);
    ctx.textBaseline = 'alphabetic';
  });

  // Connect PSII to PSI via PC
  this.drawArrow(ctx, w * 0.62, h * 0.62, w * 0.63, h * 0.70, '#374151');

  // H+ pumping label
  ctx.fillStyle = '#E53E3E'; ctx.font = 'bold 11px Arial'; ctx.textAlign = 'center';
  ctx.fillText('H⁺ pumped by Cyt b₆f → ATP via ATP synthase', w * 0.45, h * 0.78);

  ctx.fillStyle = '#1C4532'; ctx.font = 'bold 12px Arial';
  ctx.fillText('Net: 2H₂O + 2NADP⁺ + ~3ADP+P → O₂ + 2NADPH + ~3ATP', w * 0.5, h * 0.94);
}

static drawZSchemePSII(ctx, w, h, location) {
  const bg = ctx.createLinearGradient(0, 0, 0, h); bg.addColorStop(0, '#F0FFF4'); bg.addColorStop(1, '#C6F6D5');
  ctx.fillStyle = bg; ctx.fillRect(0, 0, w, h);
  ctx.strokeStyle = '#276749'; ctx.lineWidth = 3; ctx.strokeRect(0, 0, w, h);
  ctx.fillStyle = '#1C4532'; ctx.font = 'bold 18px Arial'; ctx.textAlign = 'center';
  ctx.fillText('Z-SCHEME — PSII SIDE', w * 0.5, h * 0.06);

  const steps = [
    { y: 0.18, label: 'H₂O (electron donor)', color: '#63B3ED' },
    { y: 0.30, label: 'Mn₄CaO₅ OEC', color: '#FC8181' },
    { y: 0.42, label: 'P680 (excited by light)', color: '#F6AD55' },
    { y: 0.54, label: 'Pheophytin', color: '#FCD34D' },
    { y: 0.66, label: 'QA plastoquinone', color: '#68D391' },
    { y: 0.78, label: 'QB / PQ pool → Cyt b₆f', color: '#9B59B6' },
  ];
  const enz2 = ['Water splitting, release O₂ + 4H⁺', 'Light absorption (680nm), charge separation',
    'Electron transfer, first stable radical', 'Tightly bound, electron transfer to QB',
    'Loosely bound, accepts 2e⁻ + 2H⁺, diffuses'];

  steps.forEach((s, i) => {
    this.drawMolecule(ctx, w * 0.38, h * s.y, 32, s.color, s.label);
    if (i < steps.length - 1) {
      this.drawArrow(ctx, w * 0.38, h * s.y + h * 0.035, w * 0.38, h * steps[i + 1].y - h * 0.035, '#718096');
      ctx.fillStyle = '#276749'; ctx.font = '10px Arial'; ctx.textAlign = 'left';
      ctx.fillText(enz2[i], w * 0.54, h * ((s.y + steps[i + 1].y) / 2));
    }
  });

  ctx.fillStyle = '#1C4532'; ctx.font = 'bold 12px Arial'; ctx.textAlign = 'center';
  ctx.fillText('O₂ released into atmosphere | 4 electrons per O₂ | P680 has highest E° of any biological electron acceptor', w * 0.5, h * 0.92);
}

static drawZSchemePSI(ctx, w, h, location) {
  const bg = ctx.createLinearGradient(0, 0, 0, h); bg.addColorStop(0, '#EBF8FF'); bg.addColorStop(1, '#BEE3F8');
  ctx.fillStyle = bg; ctx.fillRect(0, 0, w, h);
  ctx.strokeStyle = '#2B6CB0'; ctx.lineWidth = 3; ctx.strokeRect(0, 0, w, h);
  ctx.fillStyle = '#1A365D'; ctx.font = 'bold 18px Arial'; ctx.textAlign = 'center';
  ctx.fillText('Z-SCHEME — PSI SIDE', w * 0.5, h * 0.06);

  const steps = [
    { y: 0.18, label: 'Plastocyanin (PC)', color: '#63B3ED' },
    { y: 0.30, label: 'P700 (ground state)', color: '#FC8181' },
    { y: 0.42, label: 'P700* (excited, 700nm)', color: '#F6AD55' },
    { y: 0.54, label: 'A₀ (Chl a acceptor)', color: '#FCD34D' },
    { y: 0.65, label: 'A₁ (Phylloquinone)', color: '#86EFAC' },
    { y: 0.76, label: 'Fx, FA, FB (Fe-S clusters)', color: '#9B59B6' },
    { y: 0.87, label: 'Ferredoxin → FNR → NADPH', color: '#3182CE' },
  ];
  const enz3 = ['Cu carrier delivers e⁻ to P700', 'Light absorption 700nm\ncharge separation',
    'Primary electron acceptor', 'Secondary acceptor', 'Iron-sulfur relay', 'Soluble Fd → FNR → NADPH'];

  steps.forEach((s, i) => {
    this.drawMolecule(ctx, w * 0.38, h * s.y, 30, s.color, s.label);
    if (i < steps.length - 1) {
      this.drawArrow(ctx, w * 0.38, h * s.y + h * 0.03, w * 0.38, h * steps[i + 1].y - h * 0.03, '#718096');
      ctx.fillStyle = '#2B6CB0'; ctx.font = '10px Arial'; ctx.textAlign = 'left';
      ctx.fillText(enz3[i], w * 0.55, h * ((s.y + steps[i + 1].y) / 2));
    }
  });

  ctx.fillStyle = '#1A365D'; ctx.font = 'bold 12px Arial'; ctx.textAlign = 'center';
  ctx.fillText('P700* has lowest E° (most reducing) of any biological electron donor', w * 0.5, h * 0.93);
}

static drawZSchemeEnergyDiagram(ctx, w, h, location) {
  const bg = ctx.createLinearGradient(0, 0, 0, h); bg.addColorStop(0, '#FAFAFA'); bg.addColorStop(1, '#EDF2F7');
  ctx.fillStyle = bg; ctx.fillRect(0, 0, w, h);
  ctx.strokeStyle = '#718096'; ctx.lineWidth = 3; ctx.strokeRect(0, 0, w, h);
  ctx.fillStyle = '#1A202C'; ctx.font = 'bold 18px Arial'; ctx.textAlign = 'center';
  ctx.fillText('Z-SCHEME ENERGY DIAGRAM (Reduction Potential)', w * 0.5, h * 0.06);

  // Y axis: E° (V), top = negative (high energy)
  const axY1 = h * 0.13, axY2 = h * 0.90;
  ctx.strokeStyle = '#333'; ctx.lineWidth = 2;
  ctx.beginPath(); ctx.moveTo(w * 0.1, axY1); ctx.lineTo(w * 0.1, axY2); ctx.stroke();
  ctx.fillStyle = '#333'; ctx.font = '11px Arial'; ctx.textAlign = 'right';
  ctx.fillText('−1.4V', w * 0.09, axY1 + 5);
  ctx.fillText('+0.8V', w * 0.09, axY2);
  ctx.fillText('E° (V)', w * 0.1, axY1 - 8);
  ctx.save(); ctx.translate(w * 0.05, (axY1 + axY2) / 2); ctx.rotate(-Math.PI / 2);
  ctx.textAlign = 'center'; ctx.fillText('Reduction Potential', 0, 0); ctx.restore();

  // Helper to get y position from E° value
  const eToY = (e) => axY1 + ((e - (-1.4)) / (0.8 - (-1.4))) * (axY2 - axY1);

  const carriers2 = [
    { x: 0.25, e: 0.82, label: 'H₂O/O₂\n+0.82V', color: '#63B3ED' },
    { x: 0.28, e: 0.38, label: 'P680\n+0.38V', color: '#FC8181' },
    { x: 0.30, e: -0.61, label: 'P680*\n−0.61V', color: '#F6AD55' },
    { x: 0.38, e: -0.50, label: 'Pheo\n−0.50V', color: '#FCD34D' },
    { x: 0.44, e: -0.07, label: 'QA\n−0.07V', color: '#68D391' },
    { x: 0.50, e: 0.05, label: 'PQ\n+0.05V', color: '#86EFAC' },
    { x: 0.56, e: 0.22, label: 'Cyt b₆f\n+0.22V', color: '#9B59B6' },
    { x: 0.62, e: 0.37, label: 'PC\n+0.37V', color: '#3182CE' },
    { x: 0.67, e: 0.38, label: 'P700\n+0.38V', color: '#FC8181' },
    { x: 0.69, e: -1.33, label: 'P700*\n−1.33V', color: '#F6AD55' },
    { x: 0.76, e: -1.05, label: 'A₀\n−1.05V', color: '#FCD34D' },
    { x: 0.82, e: -0.73, label: 'Fd\n−0.73V', color: '#68D391' },
    { x: 0.89, e: -0.32, label: 'NADPH\n−0.32V', color: '#3182CE' },
  ];

  // Z-shape electron path
  ctx.strokeStyle = '#374151'; ctx.lineWidth = 2.5;
  ctx.beginPath();
  carriers2.forEach((c, i) => {
    const cy = eToY(c.e);
    i === 0 ? ctx.moveTo(w * c.x, cy) : ctx.lineTo(w * c.x, cy);
  });
  ctx.stroke();

  // Light energy jumps (vertical arrows up)
  const p680 = carriers2[2], p700 = carriers2[9];
  ctx.strokeStyle = '#ECC94B'; ctx.lineWidth = 3;
  ctx.beginPath(); ctx.moveTo(w * 0.27, eToY(0.38)); ctx.lineTo(w * 0.27, eToY(-0.61)); ctx.stroke();
  ctx.beginPath(); ctx.moveTo(w * 0.68, eToY(0.38)); ctx.lineTo(w * 0.68, eToY(-1.33)); ctx.stroke();
  ctx.fillStyle = '#D97706'; ctx.font = 'bold 11px Arial'; ctx.textAlign = 'center';
  ctx.fillText('hν', w * 0.25, eToY((-0.61 + 0.38) / 2));
  ctx.fillText('hν', w * 0.66, eToY((-1.33 + 0.38) / 2));

  // Carrier dots
  carriers2.forEach(c => {
    const cy = eToY(c.e);
    ctx.beginPath(); ctx.arc(w * c.x, cy, 6, 0, Math.PI * 2);
    ctx.fillStyle = c.color; ctx.fill(); ctx.strokeStyle = '#333'; ctx.lineWidth = 1; ctx.stroke();
    ctx.fillStyle = '#1A202C'; ctx.font = '8px Arial'; ctx.textAlign = 'center'; ctx.textBaseline = 'bottom';
    c.label.split('\n').forEach((line, i) => ctx.fillText(line, w * c.x, cy - 6 - i * 9));
    ctx.textBaseline = 'alphabetic';
  });
}

// ─────────────────────────────────────────────────────────────

static drawChemiosmosis(ctx, x, y, width, height, stage, location) {
  ctx.save();
  ctx.translate(x, y);
  switch (stage) {
    case 'complete':
      this.drawChemiosmosisComplete(ctx, width, height, location);
      break;
    case 'proton-gradient':
      this.drawProtonGradientDetail(ctx, width, height, location);
      break;
    case 'atp-synthesis':
      this.drawChemiosmosisATPSynthesis(ctx, width, height, location);
      break;
    case 'mitochondria':
      this.drawChemiosmosisMitochondria(ctx, width, height, location);
      break;
    case 'chloroplast':
      this.drawChemiosmosisChloroplast(ctx, width, height, location);
      break;
  }
  ctx.restore();
}

static drawChemiosmosisComplete(ctx, w, h, location) {
  const bg = ctx.createLinearGradient(0, 0, 0, h);
  bg.addColorStop(0, '#EBF8FF'); bg.addColorStop(1, '#BEE3F8');
  ctx.fillStyle = bg; ctx.fillRect(0, 0, w, h);
  ctx.strokeStyle = '#2B6CB0'; ctx.lineWidth = 3; ctx.strokeRect(0, 0, w, h);

  ctx.fillStyle = '#1A365D'; ctx.font = 'bold 20px Arial'; ctx.textAlign = 'center';
  ctx.fillText('CHEMIOSMOSIS', w * 0.5, h * 0.06);
  ctx.fillStyle = '#555'; ctx.font = '13px Arial';
  ctx.fillText('Proton motive force (PMF) drives ATP synthesis — Mitchell\'s hypothesis', w * 0.5, h * 0.11);

  // Membrane
  const memY = h * 0.5;
  ctx.fillStyle = '#FC8181'; ctx.fillRect(0, memY - h * 0.04, w, h * 0.08);
  ctx.fillStyle = '#FFF'; ctx.font = 'bold 13px Arial'; ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
  ctx.fillText('INNER MEMBRANE (phospholipid bilayer)', w * 0.5, memY);
  ctx.textBaseline = 'alphabetic';

  // High H+ zone (IMS / lumen)
  ctx.fillStyle = '#FED7D7';
  ctx.fillRect(0, 0, w, memY - h * 0.04);
  ctx.fillStyle = '#C53030'; ctx.font = 'bold 15px Arial'; ctx.textAlign = 'center';
  ctx.fillText('HIGH [H⁺] — IMS / Thylakoid Lumen', w * 0.5, h * 0.18);
  ctx.font = '13px Arial'; ctx.fillStyle = '#E53E3E';
  for (let i = 0; i < 8; i++) {
    ctx.fillText('H⁺', w * (0.1 + i * 0.11), h * 0.33);
  }
  ctx.fillStyle = '#9B2C2C'; ctx.font = '12px Arial';
  ctx.fillText('pH ~7 (mito IMS) or ~5 (chloroplast lumen)', w * 0.5, h * 0.43);

  // Low H+ zone (matrix / stroma)
  ctx.fillStyle = '#C6F6D5';
  ctx.fillRect(0, memY + h * 0.04, w, h * 0.42);
  ctx.fillStyle = '#276749'; ctx.font = 'bold 15px Arial'; ctx.textAlign = 'center';
  ctx.fillText('LOW [H⁺] — Matrix / Stroma', w * 0.5, h * 0.60);
  ctx.font = '12px Arial'; ctx.fillStyle = '#276749';
  ctx.fillText('pH ~8 (creates ΔpH ≈ 1-1.5 units)', w * 0.5, h * 0.68);

  // ATP synthase complex
  const atpX = w * 0.5, atpY = memY;
  ctx.fillStyle = '#27AE60';
  ctx.fillRect(atpX - 25, atpY - h * 0.12, 50, h * 0.12); // F0 stalk
  ctx.beginPath(); ctx.arc(atpX, atpY + h * 0.10, 40, 0, Math.PI * 2); // F1 head
  ctx.fillStyle = '#27AE60'; ctx.fill();
  ctx.strokeStyle = '#1C4532'; ctx.lineWidth = 2; ctx.stroke();
  ctx.fillStyle = '#FFF'; ctx.font = 'bold 12px Arial'; ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
  ctx.fillText('ATP', atpX, atpY + h * 0.10 - 5); ctx.fillText('Synthase', atpX, atpY + h * 0.10 + 8);
  ctx.textBaseline = 'alphabetic';

  // H+ flow arrows through ATP synthase
  for (let i = -2; i <= 2; i++) {
    if (Math.abs(i) !== 0) continue;
    this.drawArrow(ctx, atpX + i * 10, memY - h * 0.08, atpX + i * 10, memY - h * 0.01, '#E53E3E');
  }
  ctx.fillStyle = '#E53E3E'; ctx.font = 'bold 12px Arial'; ctx.textAlign = 'right';
  ctx.fillText('H⁺ flows down gradient', atpX - 35, memY - h * 0.04);

  // ADP+Pi → ATP
  this.drawArrow(ctx, atpX + 50, memY + h * 0.10, atpX + 90, memY + h * 0.10, '#27AE60');
  ctx.fillStyle = '#1C4532'; ctx.font = 'bold 13px Arial'; ctx.textAlign = 'left';
  ctx.fillText('ADP + Pᵢ → ATP', atpX + 50, memY + h * 0.08);

  // PMF equation
  ctx.fillStyle = '#2B6CB0'; ctx.font = 'bold 13px Arial'; ctx.textAlign = 'center';
  ctx.fillText('PMF = ΔΨ (membrane potential) + ΔpH (chemical gradient)', w * 0.5, h * 0.93);
  ctx.font = '12px Arial'; ctx.fillStyle = '#555';
  ctx.fillText('~3 H⁺ per ATP synthesized | ~10 H⁺ pumped per NADH oxidized', w * 0.5, h * 0.97);
}

static drawProtonGradientDetail(ctx, w, h, location) {
  const bg = ctx.createLinearGradient(0, 0, 0, h); bg.addColorStop(0, '#FFF5F5'); bg.addColorStop(1, '#FED7D7');
  ctx.fillStyle = bg; ctx.fillRect(0, 0, w, h);
  ctx.strokeStyle = '#FC8181'; ctx.lineWidth = 3; ctx.strokeRect(0, 0, w, h);
  ctx.fillStyle = '#742A2A'; ctx.font = 'bold 18px Arial'; ctx.textAlign = 'center';
  ctx.fillText('PROTON MOTIVE FORCE (PMF) — DETAIL', w * 0.5, h * 0.06);

  // PMF equation breakdown
  ctx.fillStyle = '#2D3748'; ctx.font = 'bold 15px Arial'; ctx.textAlign = 'center';
  ctx.fillText('ΔG = −nFΔΨ + 2.303RT·ΔpH', w * 0.5, h * 0.16);

  const components = [
    { label: 'ΔΨ — Membrane Potential', value: '−180 mV (mito)', color: '#FC8181', x: 0.25, y: 0.35 },
    { label: 'ΔpH — Chemical Gradient', value: '−1 unit (mito) =', color: '#63B3ED', x: 0.75, y: 0.35 },
  ];
  components.forEach(c => {
    ctx.fillStyle = c.color; ctx.fillRect(w * (c.x - 0.2), h * c.y, w * 0.4, h * 0.18);
    ctx.strokeStyle = '#4A5568'; ctx.lineWidth = 2; ctx.strokeRect(w * (c.x - 0.2), h * c.y, w * 0.4, h * 0.18);
    ctx.fillStyle = '#1A202C'; ctx.font = 'bold 12px Arial'; ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
    ctx.fillText(c.label, w * c.x, h * c.y + h * 0.06);
    ctx.fillStyle = '#333'; ctx.font = '11px Arial'; ctx.fillText(c.value, w * c.x, h * c.y + h * 0.13);
    ctx.textBaseline = 'alphabetic';
  });

  // Combination
  ctx.fillStyle = '#27AE60'; ctx.fillRect(w * 0.2, h * 0.60, w * 0.6, h * 0.12);
  ctx.fillStyle = '#FFF'; ctx.font = 'bold 13px Arial'; ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
  ctx.fillText('PMF ≈ 200–220 mV total = sufficient to drive ATP synthesis', w * 0.5, h * 0.66);
  ctx.textBaseline = 'alphabetic';

  ctx.fillStyle = '#555'; ctx.font = '12px Arial'; ctx.textAlign = 'center';
  ctx.fillText('Mito: ΔΨ dominates (70%) | Chloroplast: ΔpH dominates (70%)', w * 0.5, h * 0.80);
  ctx.fillText('PMF = proton electrochemical gradient across coupling membrane', w * 0.5, h * 0.86);
  ctx.fillStyle = '#2B6CB0'; ctx.font = 'bold 12px Arial';
  ctx.fillText('Uncouplers (e.g., DNP) dissipate PMF → heat instead of ATP', w * 0.5, h * 0.93);
}

static drawChemiosmosisATPSynthesis(ctx, w, h, location) {
  const bg = ctx.createLinearGradient(0, 0, 0, h); bg.addColorStop(0, '#F0FFF4'); bg.addColorStop(1, '#C6F6D5');
  ctx.fillStyle = bg; ctx.fillRect(0, 0, w, h);
  ctx.strokeStyle = '#276749'; ctx.lineWidth = 3; ctx.strokeRect(0, 0, w, h);
  ctx.fillStyle = '#1C4532'; ctx.font = 'bold 18px Arial'; ctx.textAlign = 'center';
  ctx.fillText('ATP SYNTHASE MECHANISM', w * 0.5, h * 0.06);
  ctx.fillStyle = '#555'; ctx.font = '12px Arial';
  ctx.fillText('Rotary motor — binding change mechanism (Boyer)', w * 0.5, h * 0.12);

  // Membrane
  ctx.fillStyle = '#FC8181'; ctx.fillRect(0, h * 0.42, w, h * 0.06);

  // F0 subunit (rotor in membrane)
  ctx.fillStyle = '#3182CE';
  ctx.fillRect(w * 0.42, h * 0.30, w * 0.16, h * 0.18);
  ctx.fillStyle = '#FFF'; ctx.font = 'bold 12px Arial'; ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
  ctx.fillText('F₀', w * 0.5, h * 0.39);
  ctx.fillText('c-ring', w * 0.5, h * 0.43);
  ctx.textBaseline = 'alphabetic';
  ctx.fillStyle = '#1A365D'; ctx.font = '10px Arial'; ctx.textAlign = 'center';
  ctx.fillText('H⁺ channel', w * 0.5, h * 0.30);

  // F1 subunit (catalytic head)
  ctx.beginPath(); ctx.arc(w * 0.5, h * 0.68, h * 0.16, 0, Math.PI * 2);
  ctx.fillStyle = '#27AE60'; ctx.fill(); ctx.strokeStyle = '#1C4532'; ctx.lineWidth = 2; ctx.stroke();
  ctx.fillStyle = '#FFF'; ctx.font = 'bold 13px Arial'; ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
  ctx.fillText('F₁', w * 0.5, h * 0.65); ctx.font = '11px Arial'; ctx.fillText('(α₃β₃γ)', w * 0.5, h * 0.72);
  ctx.textBaseline = 'alphabetic';

  // 3 catalytic sites
  const siteLabels = ['OPEN', 'LOOSE', 'TIGHT'];
  const siteColors = ['#FED7D7', '#FEF3C7', '#C6F6D5'];
  siteLabels.forEach((s, i) => {
    const angle = (Math.PI * 2 / 3) * i - Math.PI / 2;
    const sx = w * 0.5 + h * 0.10 * Math.cos(angle);
    const sy = h * 0.68 + h * 0.10 * Math.sin(angle);
    ctx.beginPath(); ctx.arc(sx, sy, h * 0.04, 0, Math.PI * 2);
    ctx.fillStyle = siteColors[i]; ctx.fill(); ctx.strokeStyle = '#333'; ctx.lineWidth = 1; ctx.stroke();
    ctx.fillStyle = '#1A202C'; ctx.font = 'bold 8px Arial'; ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
    ctx.fillText(s, sx, sy);
    ctx.textBaseline = 'alphabetic';
  });

  // H+ flow arrows
  for (let i = 0; i < 3; i++) {
    this.drawArrow(ctx, w * (0.35 + i * 0.1), h * 0.20, w * (0.35 + i * 0.1), h * 0.29, '#E53E3E');
  }
  ctx.fillStyle = '#E53E3E'; ctx.font = 'bold 12px Arial'; ctx.textAlign = 'center';
  ctx.fillText('3 H⁺ per ATP (approx)', w * 0.5, h * 0.18);

  ctx.fillStyle = '#276749'; ctx.font = 'bold 12px Arial'; ctx.textAlign = 'center';
  ctx.fillText('H⁺ flow rotates c-ring → γ subunit rotates within α₃β₃ → conformational change → ATP released', w * 0.5, h * 0.92);
}

static drawChemiosmosisMitochondria(ctx, w, h, location) {
  const bg = ctx.createLinearGradient(0, 0, 0, h); bg.addColorStop(0, '#FFF9E6'); bg.addColorStop(1, '#FFF0C2');
  ctx.fillStyle = bg; ctx.fillRect(0, 0, w, h);
  ctx.strokeStyle = '#D97706'; ctx.lineWidth = 3; ctx.strokeRect(0, 0, w, h);
  ctx.fillStyle = '#78350F'; ctx.font = 'bold 18px Arial'; ctx.textAlign = 'center';
  ctx.fillText('MITOCHONDRIAL CHEMIOSMOSIS', w * 0.5, h * 0.06);

  // Inner membrane
  ctx.fillStyle = '#FC8181'; ctx.fillRect(0, h * 0.45, w, h * 0.05);
  ctx.fillStyle = '#FFF'; ctx.font = 'bold 11px Arial'; ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
  ctx.fillText('INNER MITOCHONDRIAL MEMBRANE (IMM)', w * 0.5, h * 0.475);
  ctx.textBaseline = 'alphabetic';

  ctx.fillStyle = '#FED7D7'; ctx.font = 'bold 13px Arial'; ctx.textAlign = 'center';
  ctx.fillText('INTERMEMBRANE SPACE (IMS)', w * 0.5, h * 0.20);
  ctx.fillStyle = '#9B2C2C'; ctx.font = '12px Arial';
  ctx.fillText('pH ~7.2  |  ΔΨ: negative inside matrix (+outside)', w * 0.5, h * 0.27);
  ctx.fillText('High [H⁺] due to pumping by Complexes I, III, IV', w * 0.5, h * 0.34);

  ctx.fillStyle = '#C6F6D5'; ctx.font = 'bold 13px Arial';
  ctx.fillText('MATRIX', w * 0.5, h * 0.62);
  ctx.fillStyle = '#276749'; ctx.font = '12px Arial';
  ctx.fillText('pH ~8.0  |  Low [H⁺]', w * 0.5, h * 0.68);
  ctx.fillText('Krebs cycle, β-oxidation occur here', w * 0.5, h * 0.74);

  // Complexes
  const complexes2 = [
    { x: 0.15, label: 'Complex I', h_count: '4 H⁺/2e⁻', color: '#3182CE' },
    { x: 0.35, label: 'Complex III', h_count: '4 H⁺/2e⁻', color: '#9B59B6' },
    { x: 0.55, label: 'Complex IV', h_count: '2 H⁺/2e⁻', color: '#E53E3E' },
    { x: 0.80, label: 'ATP Synthase', h_count: '3 H⁺/ATP', color: '#27AE60' },
  ];
  complexes2.forEach(c => {
    ctx.fillStyle = c.color; ctx.fillRect(w * (c.x - 0.06), h * 0.35, w * 0.12, h * 0.20);
    ctx.fillStyle = '#FFF'; ctx.font = 'bold 9px Arial'; ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
    ctx.fillText(c.label, w * c.x, h * 0.43);
    ctx.fillText(c.h_count, w * c.x, h * 0.50);
    ctx.textBaseline = 'alphabetic';
    // H+ arrows (pumping or flowing)
    const isATPSyn = c.label === 'ATP Synthase';
    if (!isATPSyn) {
      this.drawArrow(ctx, w * c.x, h * 0.35, w * c.x, h * 0.28, '#E53E3E');
    } else {
      this.drawArrow(ctx, w * c.x, h * 0.35, w * c.x, h * 0.55, '#27AE60');
    }
  });

  ctx.fillStyle = '#78350F'; ctx.font = 'bold 12px Arial'; ctx.textAlign = 'center';
  ctx.fillText('Total: ~10 H⁺/NADH pumped → ~3.3 ATP/NADH (at ~3 H⁺/ATP)', w * 0.5, h * 0.88);
  ctx.font = '11px Arial'; ctx.fillStyle = '#555';
  ctx.fillText('FADH₂ → Complex II → no pumping → ~1.5 ATP/FADH₂', w * 0.5, h * 0.93);
}

static drawChemiosmosisChloroplast(ctx, w, h, location) {
  const bg = ctx.createLinearGradient(0, 0, 0, h); bg.addColorStop(0, '#F0FFF4'); bg.addColorStop(1, '#9AE6B4');
  ctx.fillStyle = bg; ctx.fillRect(0, 0, w, h);
  ctx.strokeStyle = '#276749'; ctx.lineWidth = 3; ctx.strokeRect(0, 0, w, h);
  ctx.fillStyle = '#1C4532'; ctx.font = 'bold 18px Arial'; ctx.textAlign = 'center';
  ctx.fillText('CHLOROPLAST CHEMIOSMOSIS', w * 0.5, h * 0.06);

  // Thylakoid membrane
  ctx.fillStyle = '#68D391'; ctx.fillRect(0, h * 0.45, w, h * 0.05);
  ctx.fillStyle = '#1C4532'; ctx.font = 'bold 11px Arial'; ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
  ctx.fillText('THYLAKOID MEMBRANE', w * 0.5, h * 0.475);
  ctx.textBaseline = 'alphabetic';

  ctx.fillStyle = '#C6F6D5'; ctx.font = 'bold 13px Arial'; ctx.textAlign = 'center';
  ctx.fillText('THYLAKOID LUMEN', w * 0.5, h * 0.22);
  ctx.fillStyle = '#276749'; ctx.font = '12px Arial';
  ctx.fillText('pH ~5 (very acidic!) — ΔpH ≈ 3 units', w * 0.5, h * 0.30);
  ctx.fillText('Water splitting + PQ-Cyt b₆f pump H⁺ from stroma into lumen', w * 0.5, h * 0.37);

  ctx.fillStyle = '#1C4532'; ctx.font = 'bold 13px Arial';
  ctx.fillText('STROMA', w * 0.5, h * 0.62);
  ctx.fillStyle = '#276749'; ctx.font = '12px Arial';
  ctx.fillText('pH ~8 — Calvin cycle uses ATP + NADPH produced here', w * 0.5, h * 0.69);

  // Components
  const chlComponents = [
    { x: 0.15, label: 'PSII\n(P680)', h_note: '4 H⁺\nfrom OEC', color: '#48BB78' },
    { x: 0.35, label: 'Cyt b₆f', h_note: '4 H⁺\nQ-cycle', color: '#9B59B6' },
    { x: 0.55, label: 'PSI\n(P700)', h_note: 'No H⁺\npumping', color: '#3182CE' },
    { x: 0.80, label: 'CF₀CF₁\nATP Syn', h_note: '3-4 H⁺\nper ATP', color: '#27AE60' },
  ];
  chlComponents.forEach(c => {
    ctx.fillStyle = c.color; ctx.fillRect(w * (c.x - 0.06), h * 0.35, w * 0.12, h * 0.20);
    ctx.fillStyle = '#FFF'; ctx.font = 'bold 9px Arial'; ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
    c.label.split('\n').forEach((line, i) => ctx.fillText(line, w * c.x, h * 0.41 + i * 12));
    c.h_note.split('\n').forEach((line, i) => ctx.fillText(line, w * c.x, h * 0.52 + i * 11));
    ctx.textBaseline = 'alphabetic';
    if (c.label !== 'PSI\n(P700)') {
      const isATP = c.label.includes('ATP');
      isATP
        ? this.drawArrow(ctx, w * c.x, h * 0.35, w * c.x, h * 0.56, '#27AE60')
        : this.drawArrow(ctx, w * c.x, h * 0.35, w * c.x, h * 0.28, '#E53E3E');
    }
  });

  ctx.fillStyle = '#1C4532'; ctx.font = 'bold 12px Arial'; ctx.textAlign = 'center';
  ctx.fillText('ΔpH dominates in chloroplasts (pH 8→5) | CF₀CF₁ produces ATP for Calvin cycle', w * 0.5, h * 0.88);
  ctx.font = '11px Arial'; ctx.fillStyle = '#555';
  ctx.fillText('~14 H⁺/NADPH pathway → ~3-4 ATP (ratio tuned for Calvin cycle needs)', w * 0.5, h * 0.93);
}

// ─────────────────────────────────────────────────────────────

static drawSubstrateLevelPhosphorylation(ctx, x, y, width, height, stage, location) {
  ctx.save();
  ctx.translate(x, y);
  switch (stage) {
    case 'complete':
      this.drawSubstrateLevelPhosphorylationComplete(ctx, width, height, location);
      break;
    case 'glycolysis-steps':
      this.drawSLPGlycolysis(ctx, width, height, location);
      break;
    case 'krebs-steps':
      this.drawSLPKrebs(ctx, width, height, location);
      break;
    case 'comparison':
      this.drawSLPvsOxPhos(ctx, width, height, location);
      break;
  }
  ctx.restore();
}

static drawSubstrateLevelPhosphorylationComplete(ctx, w, h, location) {
  const bg = ctx.createLinearGradient(0, 0, 0, h);
  bg.addColorStop(0, '#FFFFF0'); bg.addColorStop(1, '#FEFCBF');
  ctx.fillStyle = bg; ctx.fillRect(0, 0, w, h);
  ctx.strokeStyle = '#ECC94B'; ctx.lineWidth = 3; ctx.strokeRect(0, 0, w, h);

  ctx.fillStyle = '#744210'; ctx.font = 'bold 20px Arial'; ctx.textAlign = 'center';
  ctx.fillText('SUBSTRATE-LEVEL PHOSPHORYLATION (SLP)', w * 0.5, h * 0.06);
  ctx.fillStyle = '#555'; ctx.font = '13px Arial';
  ctx.fillText('Direct ATP synthesis from high-energy phosphate bonds — no chemiosmosis required', w * 0.5, h * 0.11);

  // Mechanism box
  ctx.fillStyle = '#B7791F'; ctx.fillRect(w * 0.05, h * 0.15, w * 0.9, h * 0.14);
  ctx.fillStyle = '#FFF'; ctx.font = 'bold 14px Arial'; ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
  ctx.fillText('Mechanism: Substrate-P + ADP → Product + ATP (enzyme-catalyzed)', w * 0.5, h * 0.22);
  ctx.textBaseline = 'alphabetic';

  // Two pathway boxes
  // Glycolysis SLP
  ctx.fillStyle = '#3498DB'; ctx.fillRect(w * 0.04, h * 0.34, w * 0.44, h * 0.50);
  ctx.fillStyle = '#FFF'; ctx.font = 'bold 14px Arial'; ctx.textAlign = 'center';
  ctx.fillText('GLYCOLYSIS', w * 0.26, h * 0.40);
  ctx.font = '12px Arial';
  [
    'Step 7: 1,3-BPG → 3-PGA',
    'Enzyme: Phosphoglycerate kinase',
    'Yield: 2 ATP (×2 pyruvate)',
    '',
    'Step 10: PEP → Pyruvate',
    'Enzyme: Pyruvate kinase',
    'Yield: 2 ATP (×2 pyruvate)',
    '',
    'Glycolysis SLP total: 4 ATP',
    '(net 2 ATP after investment)',
  ].forEach((s, i) => ctx.fillText(s, w * 0.26, h * (0.46 + i * 0.046)));

  // Krebs SLP
  ctx.fillStyle = '#9B59B6'; ctx.fillRect(w * 0.52, h * 0.34, w * 0.44, h * 0.50);
  ctx.fillStyle = '#FFF'; ctx.font = 'bold 14px Arial'; ctx.textAlign = 'center';
  ctx.fillText('KREBS CYCLE', w * 0.74, h * 0.40);
  ctx.font = '12px Arial';
  [
    'Step: Succinyl-CoA → Succinate',
    'Enzyme: Succinyl-CoA synthetase',
    'Yield: 1 GTP (= 1 ATP equiv)',
    '(×2 per glucose)',
    '',
    'Krebs SLP total: 2 GTP/glucose',
    '',
    'GTP → ATP via nucleoside',
    'diphosphate kinase',
  ].forEach((s, i) => ctx.fillText(s, w * 0.74, h * (0.46 + i * 0.046)));

  ctx.fillStyle = '#27AE60'; ctx.font = 'bold 14px Arial'; ctx.textAlign = 'center';
  ctx.fillText('Total SLP per glucose: 2 ATP (glycolysis net) + 2 GTP (Krebs) = 4 ATP', w * 0.5, h * 0.91);
  ctx.font = '12px Arial'; ctx.fillStyle = '#555';
  ctx.fillText('Compare: Oxidative phosphorylation contributes ~28-30 ATP per glucose', w * 0.5, h * 0.96);
}

static drawSLPGlycolysis(ctx, w, h, location) {
  const bg = ctx.createLinearGradient(0, 0, 0, h); bg.addColorStop(0, '#EBF8FF'); bg.addColorStop(1, '#BEE3F8');
  ctx.fillStyle = bg; ctx.fillRect(0, 0, w, h);
  ctx.strokeStyle = '#3182CE'; ctx.lineWidth = 3; ctx.strokeRect(0, 0, w, h);
  ctx.fillStyle = '#1A365D'; ctx.font = 'bold 18px Arial'; ctx.textAlign = 'center';
  ctx.fillText('SLP IN GLYCOLYSIS — TWO STEPS', w * 0.5, h * 0.06);

  // Step 7
  ctx.fillStyle = '#2B6CB0'; ctx.fillRect(w * 0.05, h * 0.13, w * 0.9, h * 0.35);
  ctx.fillStyle = '#FFF'; ctx.font = 'bold 14px Arial'; ctx.textAlign = 'center';
  ctx.fillText('STEP 7 — Phosphoglycerate Kinase', w * 0.5, h * 0.19);
  this.drawMolecule(ctx, w * 0.2, h * 0.31, 32, '#FCD34D', '1,3-BPG\n(high energy P)');
  ctx.strokeStyle = '#FFF'; ctx.lineWidth = 1.5;
  ctx.beginPath(); ctx.moveTo(w * 0.33, h * 0.31); ctx.lineTo(w * 0.5, h * 0.31); ctx.stroke();
  ctx.fillStyle = '#FFF'; ctx.font = '11px Arial'; ctx.textAlign = 'center';
  ctx.fillText('+ ADP', w * 0.415, h * 0.29);
  ctx.fillText('→ PGK', w * 0.415, h * 0.33);
  this.drawMolecule(ctx, w * 0.65, h * 0.31, 32, '#68D391', '3-PGA');
  ctx.fillStyle = '#FFF'; ctx.font = 'bold 12px Arial'; ctx.textAlign = 'right';
  ctx.fillText('+ ATP ✓', w * 0.9, h * 0.31);
  ctx.font = '11px Arial'; ctx.fillStyle = '#BEE3F8';
  ctx.fillText('Acyl phosphate → ester — drives ADP phosphorylation', w * 0.5, h * 0.42);

  // Step 10
  ctx.fillStyle = '#2C5282'; ctx.fillRect(w * 0.05, h * 0.53, w * 0.9, h * 0.35);
  ctx.fillStyle = '#FFF'; ctx.font = 'bold 14px Arial'; ctx.textAlign = 'center';
  ctx.fillText('STEP 10 — Pyruvate Kinase', w * 0.5, h * 0.59);
  this.drawMolecule(ctx, w * 0.2, h * 0.71, 32, '#FCD34D', 'PEP\n(high energy P)');
  ctx.strokeStyle = '#FFF'; ctx.lineWidth = 1.5;
  ctx.beginPath(); ctx.moveTo(w * 0.33, h * 0.71); ctx.lineTo(w * 0.5, h * 0.71); ctx.stroke();
  ctx.fillStyle = '#FFF'; ctx.font = '11px Arial'; ctx.textAlign = 'center';
  ctx.fillText('+ ADP', w * 0.415, h * 0.69);
  ctx.fillText('→ PK', w * 0.415, h * 0.73);
  this.drawMolecule(ctx, w * 0.65, h * 0.71, 32, '#68D391', 'Pyruvate');
  ctx.fillStyle = '#FFF'; ctx.font = 'bold 12px Arial'; ctx.textAlign = 'right';
  ctx.fillText('+ ATP ✓', w * 0.9, h * 0.71);
  ctx.font = '11px Arial'; ctx.fillStyle = '#90CDF4';
  ctx.fillText('Enol phosphate — high-energy bond drives ATP synthesis', w * 0.5, h * 0.82);

  ctx.fillStyle = '#1A365D'; ctx.font = 'bold 13px Arial'; ctx.textAlign = 'center';
  ctx.fillText('Both steps ×2 per glucose → 4 total ATP, net 2 ATP after investment steps', w * 0.5, h * 0.95);
}

static drawSLPKrebs(ctx, w, h, location) {
  const bg = ctx.createLinearGradient(0, 0, 0, h); bg.addColorStop(0, '#FAF5FF'); bg.addColorStop(1, '#E9D8FD');
  ctx.fillStyle = bg; ctx.fillRect(0, 0, w, h);
  ctx.strokeStyle = '#9B59B6'; ctx.lineWidth = 3; ctx.strokeRect(0, 0, w, h);
  ctx.fillStyle = '#44337A'; ctx.font = 'bold 18px Arial'; ctx.textAlign = 'center';
  ctx.fillText('SLP IN KREBS CYCLE', w * 0.5, h * 0.06);

  ctx.fillStyle = '#553C9A'; ctx.fillRect(w * 0.05, h * 0.14, w * 0.9, h * 0.50);
  ctx.fillStyle = '#FFF'; ctx.font = 'bold 14px Arial'; ctx.textAlign = 'center';
  ctx.fillText('STEP 5 — Succinyl-CoA Synthetase', w * 0.5, h * 0.20);
  this.drawMolecule(ctx, w * 0.2, h * 0.38, 35, '#FCD34D', 'Succinyl-CoA\n(high energy\nthioester)');
  ctx.strokeStyle = '#FFF'; ctx.lineWidth = 1.5;
  ctx.beginPath(); ctx.moveTo(w * 0.33, h * 0.38); ctx.lineTo(w * 0.5, h * 0.38); ctx.stroke();
  ctx.fillStyle = '#FFF'; ctx.font = '11px Arial'; ctx.textAlign = 'center';
  ctx.fillText('+ GDP + Pᵢ', w * 0.415, h * 0.35);
  ctx.fillText('→ SCS', w * 0.415, h * 0.40);
  this.drawMolecule(ctx, w * 0.65, h * 0.38, 35, '#68D391', 'Succinate +\nCoA');
  ctx.fillStyle = '#FFF'; ctx.font = 'bold 12px Arial'; ctx.textAlign = 'right';
  ctx.fillText('+ GTP ✓', w * 0.9, h * 0.38);

  ctx.font = '11px Arial'; ctx.textAlign = 'center'; ctx.fillStyle = '#C4B5FD';
  ctx.fillText('GTP immediately converted to ATP: GTP + ADP → GDP + ATP', w * 0.5, h * 0.54);
  ctx.fillText('(nucleoside diphosphate kinase, NDPK)', w * 0.5, h * 0.59);

  ctx.fillStyle = '#FFF'; ctx.font = 'bold 13px Arial'; ctx.textAlign = 'center';
  ctx.fillText('Per glucose: 2 × 1 GTP = 2 ATP equivalent | Occurs in mitochondrial matrix', w * 0.5, h * 0.74);
  ctx.font = '12px Arial'; ctx.fillStyle = '#C4B5FD';
  ctx.fillText('In heart/brain: ATP-specific form | In liver: GTP-specific form', w * 0.5, h * 0.81);
}

static drawSLPvsOxPhos(ctx, w, h, location) {
  const bg = ctx.createLinearGradient(0, 0, 0, h); bg.addColorStop(0, '#FAFAFA'); bg.addColorStop(1, '#EDF2F7');
  ctx.fillStyle = bg; ctx.fillRect(0, 0, w, h);
  ctx.strokeStyle = '#718096'; ctx.lineWidth = 3; ctx.strokeRect(0, 0, w, h);
  ctx.fillStyle = '#1A202C'; ctx.font = 'bold 18px Arial'; ctx.textAlign = 'center';
  ctx.fillText('SLP vs OXIDATIVE PHOSPHORYLATION', w * 0.5, h * 0.06);

  const rows4 = [
    ['Property', 'Substrate-Level P.', 'Oxidative P. (OxPhos)'],
    ['ATP synthesis mechanism', 'Direct phosphate transfer', 'Chemiosmotic (PMF)'],
    ['Enzyme required', 'Single kinase', 'ATP synthase complex'],
    ['Membrane needed?', 'No', 'Yes (inner membrane)'],
    ['O₂ required?', 'No', 'Yes (final acceptor at CIV)'],
    ['Inhibited by', 'Specific inhibitors (e.g., arsenate)', 'Oligomycin, uncouplers, cyanide'],
    ['ATP yield/glucose', '4 ATP', '~28-30 ATP'],
    ['Found in', 'Glycolysis + Krebs', 'Inner mito membrane'],
    ['Works under', 'Aerobic + anaerobic', 'Aerobic only'],
  ];

  const cW3 = [w * 0.3, w * 0.32, w * 0.32];
  const cX3 = [w * 0.02, w * 0.33, w * 0.66];
  const rH3 = h * 0.10;

  rows4.forEach((row, ri) => {
    row.forEach((cell, ci) => {
      ctx.fillStyle = ri === 0 ? '#2D3748' : (ri % 2 === 0 ? ['#EDF2F7', '#FFF5F5', '#F0FFF4'][ci] : ['#E2E8F0', '#FED7D7', '#C6F6D5'][ci]);
      ctx.fillRect(cX3[ci], h * (0.13 + ri * rH3), cW3[ci], rH3);
      ctx.strokeStyle = '#CBD5E0'; ctx.lineWidth = 1;
      ctx.strokeRect(cX3[ci], h * (0.13 + ri * rH3), cW3[ci], rH3);
      ctx.fillStyle = ri === 0 ? '#FFF' : '#2D3748';
      ctx.font = ri === 0 ? 'bold 11px Arial' : '10px Arial'; ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
      ctx.fillText(cell, cX3[ci] + cW3[ci] / 2, h * (0.13 + ri * rH3) + rH3 / 2);
    });
  });
  ctx.textBaseline = 'alphabetic';
}

// ─────────────────────────────────────────────────────────────

static drawMitochondrialImport(ctx, x, y, width, height, stage, location) {
  ctx.save();
  ctx.translate(x, y);
  switch (stage) {
    case 'complete':
      this.drawMitochondrialImportComplete(ctx, width, height, location);
      break;
    case 'tom-complex':
      this.drawTOMComplex(ctx, width, height, location);
      break;
    case 'tim-complexes':
      this.drawTIMComplexes(ctx, width, height, location);
      break;
    case 'pathways':
      this.drawImportPathways(ctx, width, height, location);
      break;
  }
  ctx.restore();
}

static drawMitochondrialImportComplete(ctx, w, h, location) {
  const bg = ctx.createLinearGradient(0, 0, 0, h);
  bg.addColorStop(0, '#FFF9E6'); bg.addColorStop(1, '#FFF0C2');
  ctx.fillStyle = bg; ctx.fillRect(0, 0, w, h);
  ctx.strokeStyle = '#D97706'; ctx.lineWidth = 3; ctx.strokeRect(0, 0, w, h);

  ctx.fillStyle = '#78350F'; ctx.font = 'bold 20px Arial'; ctx.textAlign = 'center';
  ctx.fillText('MITOCHONDRIAL PROTEIN IMPORT', w * 0.5, h * 0.06);
  ctx.fillStyle = '#555'; ctx.font = '13px Arial';
  ctx.fillText('TOM/TIM machinery — ~1500 nuclear-encoded proteins imported post-translationally', w * 0.5, h * 0.11);

  // Outer membrane
  ctx.fillStyle = '#FC8181'; ctx.fillRect(0, h * 0.28, w, h * 0.05);
  ctx.fillStyle = '#FFF'; ctx.font = 'bold 11px Arial'; ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
  ctx.fillText('OUTER MEMBRANE', w * 0.5, h * 0.305);
  ctx.textBaseline = 'alphabetic';

  // Inner membrane
  ctx.fillStyle = '#F6AD55'; ctx.fillRect(0, h * 0.52, w, h * 0.05);
  ctx.fillStyle = '#FFF'; ctx.font = 'bold 11px Arial'; ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
  ctx.fillText('INNER MEMBRANE', w * 0.5, h * 0.545);
  ctx.textBaseline = 'alphabetic';

  // Zones
  ctx.fillStyle = '#EBF8FF'; ctx.fillRect(0, 0, w, h * 0.28);
  ctx.fillStyle = '#2B6CB0'; ctx.font = 'bold 13px Arial'; ctx.textAlign = 'left';
  ctx.fillText('CYTOPLASM', w * 0.03, h * 0.08);

  ctx.fillStyle = '#FEF3C7'; ctx.fillRect(0, h * 0.33, w, h * 0.19);
  ctx.fillStyle = '#744210'; ctx.font = 'bold 13px Arial';
  ctx.fillText('IMS', w * 0.03, h * 0.43);

  ctx.fillStyle = '#C6F6D5'; ctx.fillRect(0, h * 0.57, w, h * 0.38);
  ctx.fillStyle = '#276749'; ctx.font = 'bold 13px Arial';
  ctx.fillText('MATRIX', w * 0.03, h * 0.65);

  // TOM complex (outer membrane)
  ctx.fillStyle = '#E53E3E'; ctx.fillRect(w * 0.3, h * 0.15, w * 0.15, h * 0.18);
  ctx.fillStyle = '#FFF'; ctx.font = 'bold 11px Arial'; ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
  ctx.fillText('TOM40', w * 0.375, h * 0.22);
  ctx.fillText('complex', w * 0.375, h * 0.27);
  ctx.textBaseline = 'alphabetic';
  ctx.fillStyle = '#9B2C2C'; ctx.font = '10px Arial'; ctx.textAlign = 'center';
  ctx.fillText('Tom20/22/5/6/7\n(receptors)', w * 0.375, h * 0.14);

  // TIM23 complex (inner membrane)
  ctx.fillStyle = '#3182CE'; ctx.fillRect(w * 0.3, h * 0.44, w * 0.15, h * 0.16);
  ctx.fillStyle = '#FFF'; ctx.font = 'bold 11px Arial'; ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
  ctx.fillText('TIM23', w * 0.375, h * 0.50);
  ctx.fillText('complex', w * 0.375, h * 0.54);
  ctx.textBaseline = 'alphabetic';

  // TIM22 complex
  ctx.fillStyle = '#9B59B6'; ctx.fillRect(w * 0.55, h * 0.44, w * 0.15, h * 0.16);
  ctx.fillStyle = '#FFF'; ctx.font = 'bold 11px Arial'; ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
  ctx.fillText('TIM22', w * 0.625, h * 0.50);
  ctx.fillText('(carrier)', w * 0.625, h * 0.54);
  ctx.textBaseline = 'alphabetic';

  // Protein precursor (presequence)
  ctx.fillStyle = '#4A5568'; ctx.font = '12px Arial'; ctx.textAlign = 'center';
  ctx.fillText('Precursor protein (N-terminal presequence)', w * 0.375, h * 0.02);
  this.drawArrow(ctx, w * 0.375, h * 0.05, w * 0.375, h * 0.14, '#4A5568');

  // Presequence cleavage in matrix
  ctx.fillStyle = '#276749'; ctx.font = '12px Arial';
  ctx.fillText('MPP cleaves presequence', w * 0.6, h * 0.64);
  ctx.fillText('Mature protein folds (Hsp70/Hsp60)', w * 0.6, h * 0.70);

  // Energy requirements
  ctx.fillStyle = '#78350F'; ctx.font = 'bold 12px Arial'; ctx.textAlign = 'center';
  ctx.fillText('Energy: ΔΨ drives TIM23 translocation | ATP drives Hsp70 pulling', w * 0.5, h * 0.88);
  ctx.font = '11px Arial'; ctx.fillStyle = '#555';
  ctx.fillText('4 pathways: matrix / inner membrane / IMS / outer membrane insertion', w * 0.5, h * 0.93);
}

static drawTOMComplex(ctx, w, h, location) {
  const bg = ctx.createLinearGradient(0, 0, 0, h); bg.addColorStop(0, '#FFF5F5'); bg.addColorStop(1, '#FED7D7');
  ctx.fillStyle = bg; ctx.fillRect(0, 0, w, h);
  ctx.strokeStyle = '#FC8181'; ctx.lineWidth = 3; ctx.strokeRect(0, 0, w, h);
  ctx.fillStyle = '#742A2A'; ctx.font = 'bold 18px Arial'; ctx.textAlign = 'center';
  ctx.fillText('TOM COMPLEX (Translocase Outer Membrane)', w * 0.5, h * 0.06);

  // Outer membrane
  ctx.fillStyle = '#FC8181'; ctx.fillRect(0, h * 0.45, w, h * 0.08);
  ctx.fillStyle = '#FFF'; ctx.font = 'bold 12px Arial'; ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
  ctx.fillText('OUTER MITOCHONDRIAL MEMBRANE', w * 0.5, h * 0.49);
  ctx.textBaseline = 'alphabetic';

  const subunits = [
    { x: 0.15, y: 0.35, w2: 0.08, h2: 0.18, label: 'Tom20', note: 'Presequence\nreceptor', color: '#FC8181' },
    { x: 0.27, y: 0.28, w2: 0.08, h2: 0.25, label: 'Tom22', note: 'Central\nreceptor', color: '#F6AD55' },
    { x: 0.40, y: 0.30, w2: 0.18, h2: 0.23, label: 'Tom40', note: 'Main\nchannel', color: '#63B3ED' },
    { x: 0.62, y: 0.38, w2: 0.06, h2: 0.15, label: 'Tom5', note: 'Auxiliary', color: '#9B59B6' },
    { x: 0.71, y: 0.40, w2: 0.06, h2: 0.13, label: 'Tom6', note: 'Assembly', color: '#9B59B6' },
    { x: 0.80, y: 0.40, w2: 0.06, h2: 0.13, label: 'Tom7', note: 'Stability', color: '#9B59B6' },
  ];

  subunits.forEach(s => {
    ctx.fillStyle = s.color; ctx.fillRect(w * s.x, h * s.y, w * s.w2, h * s.h2);
    ctx.strokeStyle = '#333'; ctx.lineWidth = 1.5; ctx.strokeRect(w * s.x, h * s.y, w * s.w2, h * s.h2);
    ctx.fillStyle = '#FFF'; ctx.font = 'bold 9px Arial'; ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
    ctx.fillText(s.label, w * (s.x + s.w2 / 2), h * (s.y + s.h2 / 2) - 6);
    ctx.font = '8px Arial';
    s.note.split('\n').forEach((line, i) => ctx.fillText(line, w * (s.x + s.w2 / 2), h * (s.y + s.h2 / 2) + 5 + i * 9));
    ctx.textBaseline = 'alphabetic';
  });

  // Import channel arrow
  this.drawArrow(ctx, w * 0.49, h * 0.15, w * 0.49, h * 0.28, '#2B6CB0');
  ctx.fillStyle = '#2B6CB0'; ctx.font = 'bold 11px Arial'; ctx.textAlign = 'center';
  ctx.fillText('Precursor protein', w * 0.49, h * 0.13);

  ctx.fillStyle = '#9B2C2C'; ctx.font = '12px Arial'; ctx.textAlign = 'center';
  ctx.fillText('Tom20/22 bind N-terminal presequence | Tom40 forms β-barrel pore | Small Toms regulate assembly', w * 0.5, h * 0.70);
  ctx.fillText('Also imports β-barrel outer membrane proteins via TOB/SAM complex', w * 0.5, h * 0.77);
}

static drawTIMComplexes(ctx, w, h, location) {
  const bg = ctx.createLinearGradient(0, 0, 0, h); bg.addColorStop(0, '#EBF8FF'); bg.addColorStop(1, '#BEE3F8');
  ctx.fillStyle = bg; ctx.fillRect(0, 0, w, h);
  ctx.strokeStyle = '#2B6CB0'; ctx.lineWidth = 3; ctx.strokeRect(0, 0, w, h);
  ctx.fillStyle = '#1A365D'; ctx.font = 'bold 18px Arial'; ctx.textAlign = 'center';
  ctx.fillText('TIM23 vs TIM22 COMPLEXES', w * 0.5, h * 0.06);

  // Inner membrane
  ctx.fillStyle = '#F6AD55'; ctx.fillRect(0, h * 0.47, w, h * 0.06);
  ctx.fillStyle = '#FFF'; ctx.font = 'bold 11px Arial'; ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
  ctx.fillText('INNER MITOCHONDRIAL MEMBRANE', w * 0.5, h * 0.50);
  ctx.textBaseline = 'alphabetic';

  // TIM23
  ctx.fillStyle = '#3182CE'; ctx.fillRect(w * 0.06, h * 0.20, w * 0.38, h * 0.40);
  ctx.strokeStyle = '#1A365D'; ctx.lineWidth = 2; ctx.strokeRect(w * 0.06, h * 0.20, w * 0.38, h * 0.40);
  ctx.fillStyle = '#FFF'; ctx.font = 'bold 13px Arial'; ctx.textAlign = 'center';
  ctx.fillText('TIM23 Complex', w * 0.25, h * 0.26);
  ctx.font = '11px Arial';
  [
    'Tim23 — channel subunit',
    'Tim17 — regulates channel',
    'Tim50 — presequence receptor',
    'Tim44 — Hsp70 anchor',
    '→ Matrix + IMM proteins',
    'Driven by ΔΨ + ATP',
  ].forEach((s, i) => ctx.fillText(s, w * 0.25, h * (0.31 + i * 0.048)));

  // TIM22
  ctx.fillStyle = '#9B59B6'; ctx.fillRect(w * 0.56, h * 0.20, w * 0.38, h * 0.40);
  ctx.strokeStyle = '#44337A'; ctx.lineWidth = 2; ctx.strokeRect(w * 0.56, h * 0.20, w * 0.38, h * 0.40);
  ctx.fillStyle = '#FFF'; ctx.font = 'bold 13px Arial'; ctx.textAlign = 'center';
  ctx.fillText('TIM22 Complex', w * 0.75, h * 0.26);
  ctx.font = '11px Arial';
  [
    'Tim22 — channel subunit',
    'Tim54 — substrate binding',
    'Tim18 — assembly',
    'Small TIMs in IMS assist',
    '→ Inner membrane carriers',
    '(ANT, AAC, phosphate carrier)',
  ].forEach((s, i) => ctx.fillText(s, w * 0.75, h * (0.31 + i * 0.048)));

  ctx.fillStyle = '#1A365D'; ctx.font = 'bold 12px Arial'; ctx.textAlign = 'center';
  ctx.fillText('TIM23: soluble matrix proteins | TIM22: hydrophobic IMM carriers', w * 0.5, h * 0.76);
  ctx.font = '11px Arial'; ctx.fillStyle = '#555';
  ctx.fillText('Both require TOM complex to cross outer membrane first', w * 0.5, h * 0.82);
}

static drawImportPathways(ctx, w, h, location) {
  const bg = ctx.createLinearGradient(0, 0, 0, h); bg.addColorStop(0, '#FFFFF0'); bg.addColorStop(1, '#FEF3C7');
  ctx.fillStyle = bg; ctx.fillRect(0, 0, w, h);
  ctx.strokeStyle = '#D97706'; ctx.lineWidth = 3; ctx.strokeRect(0, 0, w, h);
  ctx.fillStyle = '#78350F'; ctx.font = 'bold 18px Arial'; ctx.textAlign = 'center';
  ctx.fillText('MITOCHONDRIAL IMPORT PATHWAYS', w * 0.5, h * 0.06);

  const paths = [
    { label: 'Matrix pathway', route: 'Presequence → TOM → TIM23 → MPP cleavage → matrix', color: '#3182CE', y: 0.20 },
    { label: 'Stop-transfer IMM', route: 'Presequence → TOM → TIM23 → stop-transfer anchor → lateral release into IMM', color: '#9B59B6', y: 0.32 },
    { label: 'Carrier pathway (IMM)', route: 'Internal signals → TOM → small TIMs (IMS) → TIM22 → lateral IMM insertion', color: '#E53E3E', y: 0.44 },
    { label: 'IMS pathway', route: 'Cysteine-rich proteins → TOM → MIA40/Erv1 (IMS) → disulfide bonds trap in IMS', color: '#ED8936', y: 0.56 },
    { label: 'Outer membrane (β-barrel)', route: 'β-barrel proteins → TOM → small TIMs → SAM/TOB complex → OM insertion', color: '#D69E2E', y: 0.68 },
  ];

  paths.forEach(p => {
    ctx.fillStyle = p.color; ctx.fillRect(w * 0.03, h * p.y, w * 0.94, h * 0.09);
    ctx.fillStyle = '#FFF'; ctx.font = 'bold 11px Arial'; ctx.textAlign = 'left'; ctx.textBaseline = 'middle';
    ctx.fillText(`${p.label}:`, w * 0.05, h * p.y + h * 0.025);
    ctx.font = '10px Arial';
    ctx.fillText(p.route, w * 0.05, h * p.y + h * 0.065);
    ctx.textBaseline = 'alphabetic';
  });

  ctx.fillStyle = '#78350F'; ctx.font = 'bold 12px Arial'; ctx.textAlign = 'center';
  ctx.fillText('All pathways start with TOM — the universal import gateway of the outer membrane', w * 0.5, h * 0.85);
  ctx.font = '11px Arial'; ctx.fillStyle = '#555';
  ctx.fillText('~99% of mitochondrial proteins encoded in nucleus | Only 13 encoded in mito DNA (mammals)', w * 0.5, h * 0.91);
}

// ─────────────────────────────────────────────────────────────

static drawChloroplastImport(ctx, x, y, width, height, stage, location) {
  ctx.save();
  ctx.translate(x, y);
  switch (stage) {
    case 'complete':
      this.drawChloroplastImportComplete(ctx, width, height, location);
      break;
    case 'toc-complex':
      this.drawTOCComplex(ctx, width, height, location);
      break;
    case 'tic-complex':
      this.drawTICComplex(ctx, width, height, location);
      break;
    case 'thylakoid-targeting':
      this.drawThylakoidTargeting(ctx, width, height, location);
      break;
  }
  ctx.restore();
}

static drawChloroplastImportComplete(ctx, w, h, location) {
  const bg = ctx.createLinearGradient(0, 0, 0, h);
  bg.addColorStop(0, '#F0FFF4'); bg.addColorStop(1, '#C6F6D5');
  ctx.fillStyle = bg; ctx.fillRect(0, 0, w, h);
  ctx.strokeStyle = '#276749'; ctx.lineWidth = 3; ctx.strokeRect(0, 0, w, h);

  ctx.fillStyle = '#1C4532'; ctx.font = 'bold 20px Arial'; ctx.textAlign = 'center';
  ctx.fillText('CHLOROPLAST PROTEIN IMPORT', w * 0.5, h * 0.06);
  ctx.fillStyle = '#555'; ctx.font = '13px Arial';
  ctx.fillText('TOC/TIC machinery — ~2000-3500 nuclear-encoded chloroplast proteins', w * 0.5, h * 0.11);

  // Outer envelope
  ctx.fillStyle = '#68D391'; ctx.fillRect(0, h * 0.24, w, h * 0.04);
  ctx.fillStyle = '#FFF'; ctx.font = 'bold 10px Arial'; ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
  ctx.fillText('OUTER ENVELOPE MEMBRANE (OEM)', w * 0.5, h * 0.26);
  ctx.textBaseline = 'alphabetic';

  // Inner envelope
  ctx.fillStyle = '#276749'; ctx.fillRect(0, h * 0.42, w, h * 0.04);
  ctx.fillStyle = '#FFF'; ctx.font = 'bold 10px Arial'; ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
  ctx.fillText('INNER ENVELOPE MEMBRANE (IEM)', w * 0.5, h * 0.44);
  ctx.textBaseline = 'alphabetic';

  // Zones
  ctx.fillStyle = '#EBF8FF'; ctx.fillRect(0, 0, w, h * 0.24);
  ctx.fillStyle = '#2B6CB0'; ctx.font = 'bold 12px Arial'; ctx.textAlign = 'left';
  ctx.fillText('CYTOPLASM', w * 0.03, h * 0.10);

  ctx.fillStyle = '#BEE3F8'; ctx.fillRect(0, h * 0.28, w, h * 0.14);
  ctx.fillStyle = '#2C5282'; ctx.font = 'bold 12px Arial';
  ctx.fillText('INTERMEMBRANE SPACE (IMS)', w * 0.03, h * 0.36);

  ctx.fillStyle = '#C6F6D5'; ctx.fillRect(0, h * 0.46, w, h * 0.50);
  ctx.fillStyle = '#276749'; ctx.font = 'bold 12px Arial';
  ctx.fillText('STROMA', w * 0.03, h * 0.55);

  // TOC complex
  ctx.fillStyle = '#3182CE'; ctx.fillRect(w * 0.32, h * 0.12, w * 0.16, h * 0.17);
  ctx.fillStyle = '#FFF'; ctx.font = 'bold 11px Arial'; ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
  ctx.fillText('TOC', w * 0.4, h * 0.18);
  ctx.fillText('complex', w * 0.4, h * 0.23);
  ctx.textBaseline = 'alphabetic';
  ctx.font = '9px Arial'; ctx.fillStyle = '#1A365D'; ctx.textAlign = 'center';
  ctx.fillText('Toc75(channel)\nToc34/Toc159\n(GTPase receptors)', w * 0.4, h * 0.10);

  // TIC complex
  ctx.fillStyle = '#276749'; ctx.fillRect(w * 0.32, h * 0.37, w * 0.16, h * 0.14);
  ctx.fillStyle = '#FFF'; ctx.font = 'bold 11px Arial'; ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
  ctx.fillText('TIC', w * 0.4, h * 0.42);
  ctx.fillText('complex', w * 0.4, h * 0.46);
  ctx.textBaseline = 'alphabetic';
  ctx.font = '9px Arial'; ctx.fillStyle = '#1C4532'; ctx.textAlign = 'center';
  ctx.fillText('Tic110/Tic40/Tic20\nHsp93, Cpn60', w * 0.4, h * 0.35);

  // Precursor protein
  ctx.fillStyle = '#4A5568'; ctx.font = '12px Arial'; ctx.textAlign = 'center';
  ctx.fillText('Precursor protein\n(cTP signal)', w * 0.4, h * 0.02);
  this.drawArrow(ctx, w * 0.4, h * 0.07, w * 0.4, h * 0.11, '#4A5568');

  // SPP cleavage
  ctx.fillStyle = '#276749'; ctx.font = '12px Arial'; ctx.textAlign = 'left';
  ctx.fillText('SPP (stromal processing peptidase)', w * 0.56, h * 0.53);
  ctx.fillText('cleaves cTP signal', w * 0.56, h * 0.59);
  ctx.fillText('Cpn60 assists folding', w * 0.56, h * 0.65);

  ctx.fillStyle = '#1C4532'; ctx.font = 'bold 12px Arial'; ctx.textAlign = 'center';
  ctx.fillText('cTP (chloroplast transit peptide) recognized by Toc159/34 | GTP hydrolysis drives import', w * 0.5, h * 0.88);
  ctx.font = '11px Arial'; ctx.fillStyle = '#555';
  ctx.fillText('Further targeting: thylakoid membrane proteins require additional sorting signals', w * 0.5, h * 0.93);
}

static drawTOCComplex(ctx, w, h, location) {
  const bg = ctx.createLinearGradient(0, 0, 0, h); bg.addColorStop(0, '#EBF8FF'); bg.addColorStop(1, '#BEE3F8');
  ctx.fillStyle = bg; ctx.fillRect(0, 0, w, h);
  ctx.strokeStyle = '#2B6CB0'; ctx.lineWidth = 3; ctx.strokeRect(0, 0, w, h);
  ctx.fillStyle = '#1A365D'; ctx.font = 'bold 18px Arial'; ctx.textAlign = 'center';
  ctx.fillText('TOC COMPLEX — DETAIL', w * 0.5, h * 0.06);

  ctx.fillStyle = '#68D391'; ctx.fillRect(0, h * 0.42, w, h * 0.08);
  ctx.fillStyle = '#FFF'; ctx.font = 'bold 11px Arial'; ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
  ctx.fillText('OUTER ENVELOPE MEMBRANE', w * 0.5, h * 0.46);
  ctx.textBaseline = 'alphabetic';

  const subunits2 = [
    { x: 0.2, y: 0.25, w2: 0.14, h2: 0.25, label: 'Toc159', note: 'GTPase\nreceptor\n(abundant)', color: '#FC8181' },
    { x: 0.43, y: 0.25, w2: 0.14, h2: 0.25, label: 'Toc75', note: 'β-barrel\nchannel\n(pore)', color: '#3182CE' },
    { x: 0.65, y: 0.28, w2: 0.12, h2: 0.22, label: 'Toc34', note: 'GTPase\nreceptor\n(preprotein)', color: '#F6AD55' },
  ];

  subunits2.forEach(s => {
    ctx.fillStyle = s.color; ctx.fillRect(w * s.x, h * s.y, w * s.w2, h * s.h2);
    ctx.strokeStyle = '#333'; ctx.lineWidth = 1.5; ctx.strokeRect(w * s.x, h * s.y, w * s.w2, h * s.h2);
    ctx.fillStyle = '#FFF'; ctx.font = 'bold 10px Arial'; ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
    ctx.fillText(s.label, w * (s.x + s.w2 / 2), h * (s.y + h * 0.025 / h));
    ctx.font = '9px Arial';
    s.note.split('\n').forEach((line, i) => ctx.fillText(line, w * (s.x + s.w2 / 2), h * (s.y + s.h2 / 2) + i * 11));
    ctx.textBaseline = 'alphabetic';
  });

  this.drawArrow(ctx, w * 0.5, h * 0.10, w * 0.5, h * 0.24, '#276749');
  ctx.fillStyle = '#276749'; ctx.font = 'bold 11px Arial'; ctx.textAlign = 'center';
  ctx.fillText('cTP precursor protein', w * 0.5, h * 0.08);
  ctx.fillStyle = '#555'; ctx.font = '12px Arial';
  ctx.fillText('GTP hydrolysis by Toc159/34 drives precursor insertion into Toc75 channel', w * 0.5, h * 0.72);
  ctx.fillText('Toc75 is evolutionarily related to bacterial Omp85 — endosymbiotic origin', w * 0.5, h * 0.79);
}

static drawTICComplex(ctx, w, h, location) {
  const bg = ctx.createLinearGradient(0, 0, 0, h); bg.addColorStop(0, '#F0FFF4'); bg.addColorStop(1, '#9AE6B4');
  ctx.fillStyle = bg; ctx.fillRect(0, 0, w, h);
  ctx.strokeStyle = '#276749'; ctx.lineWidth = 3; ctx.strokeRect(0, 0, w, h);
  ctx.fillStyle = '#1C4532'; ctx.font = 'bold 18px Arial'; ctx.textAlign = 'center';
  ctx.fillText('TIC COMPLEX — DETAIL', w * 0.5, h * 0.06);

  ctx.fillStyle = '#276749'; ctx.fillRect(0, h * 0.38, w, h * 0.08);
  ctx.fillStyle = '#FFF'; ctx.font = 'bold 11px Arial'; ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
  ctx.fillText('INNER ENVELOPE MEMBRANE', w * 0.5, h * 0.42);
  ctx.textBaseline = 'alphabetic';

  const ticSubunits = [
    { x: 0.15, y: 0.22, w2: 0.14, h2: 0.24, label: 'Tic110', note: 'Main\nchannel\n(pore)', color: '#3182CE' },
    { x: 0.35, y: 0.25, w2: 0.12, h2: 0.21, label: 'Tic40', note: 'Co-chaperone\nHsp93 binding', color: '#9B59B6' },
    { x: 0.52, y: 0.26, w2: 0.12, h2: 0.20, label: 'Tic20', note: 'Auxiliary\nchannel?', color: '#ED8936' },
    { x: 0.20, y: 0.56, w2: 0.16, h2: 0.18, label: 'Hsp93\n(ClpC)', note: 'AAA-ATPase\npulls protein', color: '#FC8181' },
    { x: 0.50, y: 0.56, w2: 0.16, h2: 0.18, label: 'Cpn60', note: 'Chaperonin\nfolds protein', color: '#F6AD55' },
  ];

  ticSubunits.forEach(s => {
    ctx.fillStyle = s.color; ctx.fillRect(w * s.x, h * s.y, w * s.w2, h * s.h2);
    ctx.strokeStyle = '#333'; ctx.lineWidth = 1.5; ctx.strokeRect(w * s.x, h * s.y, w * s.w2, h * s.h2);
    ctx.fillStyle = '#FFF'; ctx.font = 'bold 9px Arial'; ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
    s.label.split('\n').forEach((line, i) => ctx.fillText(line, w * (s.x + s.w2 / 2), h * (s.y + h * 0.025 / h) + i * 11));
    ctx.font = '8px Arial';
    s.note.split('\n').forEach((line, i) => ctx.fillText(line, w * (s.x + s.w2 / 2), h * (s.y + s.h2 * 0.7) + i * 10));
    ctx.textBaseline = 'alphabetic';
  });

  ctx.fillStyle = '#1C4532'; ctx.font = 'bold 12px Arial'; ctx.textAlign = 'center';
  ctx.fillText('ATP hydrolysis by Hsp93 provides pulling force | Cpn60 ensures correct folding', w * 0.5, h * 0.83);
  ctx.font = '11px Arial'; ctx.fillStyle = '#555';
  ctx.fillText('TIC complex architecture under active research — Tic20/Tic214 may form core channel', w * 0.5, h * 0.89);
}

static drawThylakoidTargeting(ctx, w, h, location) {
  const bg = ctx.createLinearGradient(0, 0, 0, h); bg.addColorStop(0, '#FFFFF0'); bg.addColorStop(1, '#FEFCBF');
  ctx.fillStyle = bg; ctx.fillRect(0, 0, w, h);
  ctx.strokeStyle = '#D69E2E'; ctx.lineWidth = 3; ctx.strokeRect(0, 0, w, h);
  ctx.fillStyle = '#744210'; ctx.font = 'bold 18px Arial'; ctx.textAlign = 'center';
  ctx.fillText('THYLAKOID TARGETING PATHWAYS', w * 0.5, h * 0.06);
  ctx.fillStyle = '#555'; ctx.font = '12px Arial';
  ctx.fillText('After stromal import, lumenal proteins need a second sorting step', w * 0.5, h * 0.12);

  const pathways = [
    { label: 'cpSRP/Alb3 pathway', desc: 'Hydrophobic membrane proteins | SRP-like mechanism | Co-translational or post-translational | No ATP/ΔpH', color: '#3182CE', x: 0.25 },
    { label: 'cpSec pathway', desc: 'Lumenal proteins with hydrophobic signal | Requires ATP | SecA/SecY/SecE translocase', color: '#9B59B6', x: 0.5 },
    { label: 'ΔpH/Tat pathway', desc: 'Folded lumenal proteins (cofactors pre-bound) | Driven by ΔpH only | Twin-arginine signal', color: '#E53E3E', x: 0.75 },
  ];

  pathways.forEach(p => {
    ctx.beginPath(); ctx.arc(w * p.x, h * 0.4, 55, 0, Math.PI * 2);
    ctx.fillStyle = p.color; ctx.fill();
    ctx.strokeStyle = '#333'; ctx.lineWidth = 2; ctx.stroke();
    ctx.fillStyle = '#FFF'; ctx.font = 'bold 10px Arial'; ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
    ctx.fillText(p.label, w * p.x, h * 0.36);
    ctx.textBaseline = 'alphabetic';
    ctx.fillStyle = '#333'; ctx.font = '9px Arial'; ctx.textAlign = 'center';
    const words = p.desc.split(' | ');
    words.forEach((word, i) => ctx.fillText(word, w * p.x, h * (0.56 + i * 0.065)));
  });

  ctx.fillStyle = '#744210'; ctx.font = 'bold 12px Arial'; ctx.textAlign = 'center';
  ctx.fillText('Spontaneous insertion also occurs for some single-span proteins', w * 0.5, h * 0.88);
  ctx.font = '11px Arial'; ctx.fillStyle = '#555';
  ctx.fillText('~95% of thylakoid proteins are nuclear-encoded and imported through 3 sequential steps', w * 0.5, h * 0.93);
}

// ─────────────────────────────────────────────────────────────

static drawMitochondrialFusion(ctx, x, y, width, height, stage, location) {
  ctx.save();
  ctx.translate(x, y);
  switch (stage) {
    case 'complete':
      this.drawMitochondrialFusionComplete(ctx, width, height, location);
      break;
    case 'fission':
      this.drawMitochondrialFission(ctx, width, height, location);
      break;
    case 'machinery':
      this.drawFusionMachinery(ctx, width, height, location);
      break;
    case 'physiological':
      this.drawMitochondrialDynamicsPhysiology(ctx, width, height, location);
      break;
  }
  ctx.restore();
}

static drawMitochondrialFusionComplete(ctx, w, h, location) {
  const bg = ctx.createLinearGradient(0, 0, 0, h);
  bg.addColorStop(0, '#FFF9E6'); bg.addColorStop(1, '#FFF0C2');
  ctx.fillStyle = bg; ctx.fillRect(0, 0, w, h);
  ctx.strokeStyle = '#D97706'; ctx.lineWidth = 3; ctx.strokeRect(0, 0, w, h);

  ctx.fillStyle = '#78350F'; ctx.font = 'bold 20px Arial'; ctx.textAlign = 'center';
  ctx.fillText('MITOCHONDRIAL DYNAMICS', w * 0.5, h * 0.06);
  ctx.fillStyle = '#555'; ctx.font = '13px Arial';
  ctx.fillText('Fusion and fission maintain mitochondrial quality and network', w * 0.5, h * 0.11);

  // Fusion panel
  ctx.fillStyle = '#C6F6D5'; ctx.fillRect(w *0.03, h * 0.15, w * 0.44, h * 0.72);
  ctx.strokeStyle = '#276749'; ctx.lineWidth = 2; ctx.strokeRect(w * 0.03, h * 0.15, w * 0.44, h * 0.72);
  ctx.fillStyle = '#1C4532'; ctx.font = 'bold 14px Arial'; ctx.textAlign = 'center';
  ctx.fillText('FUSION', w * 0.25, h * 0.21);

  // Two separate mitochondria
  const drawMitoShape = (cx, cy, rx, ry, color) => {
    ctx.save();
    ctx.beginPath();
    ctx.ellipse(cx, cy, rx, ry, 0, 0, Math.PI * 2);
    ctx.fillStyle = color; ctx.fill();
    ctx.strokeStyle = '#276749'; ctx.lineWidth = 2; ctx.stroke();
    // Cristae lines
    ctx.strokeStyle = 'rgba(39,103,73,0.4)'; ctx.lineWidth = 1;
    for (let i = -1; i <= 1; i++) {
      ctx.beginPath();
      ctx.moveTo(cx + i * rx * 0.4, cy - ry * 0.6);
      ctx.lineTo(cx + i * rx * 0.4, cy + ry * 0.6);
      ctx.stroke();
    }
    ctx.restore();
  };

  drawMitoShape(w * 0.13, h * 0.35, 35, 20, '#9AE6B4');
  drawMitoShape(w * 0.25, h * 0.35, 35, 20, '#68D391');
  this.drawArrow(ctx, w * 0.25, h * 0.44, w * 0.25, h * 0.52, '#276749');
  ctx.fillStyle = '#276749'; ctx.font = '11px Arial'; ctx.textAlign = 'center';
  ctx.fillText('Mitofusin 1/2 (OMM)', w * 0.25, h * 0.50);
  ctx.fillText('OPA1 (IMM)', w * 0.25, h * 0.54);
  drawMitoShape(w * 0.25, h * 0.65, 50, 22, '#48BB78');
  ctx.fillStyle = '#276749'; ctx.font = '11px Arial'; ctx.textAlign = 'center';
  ctx.fillText('Merged mitochondrion', w * 0.25, h * 0.74);
  ctx.fillStyle = '#1C4532'; ctx.font = '10px Arial';
  ctx.fillText('↑ interconnected network', w * 0.25, h * 0.79);
  ctx.fillText('Content mixing, mtDNA rescue', w * 0.25, h * 0.83);

  // Fission panel
  ctx.fillStyle = '#FED7D7'; ctx.fillRect(w * 0.53, h * 0.15, w * 0.44, h * 0.72);
  ctx.strokeStyle = '#C53030'; ctx.lineWidth = 2; ctx.strokeRect(w * 0.53, h * 0.15, w * 0.44, h * 0.72);
  ctx.fillStyle = '#742A2A'; ctx.font = 'bold 14px Arial'; ctx.textAlign = 'center';
  ctx.fillText('FISSION', w * 0.75, h * 0.21);

  drawMitoShape(w * 0.75, h * 0.33, 50, 22, '#FC8181');
  this.drawArrow(ctx, w * 0.75, h * 0.44, w * 0.75, h * 0.52, '#C53030');
  ctx.fillStyle = '#C53030'; ctx.font = '11px Arial'; ctx.textAlign = 'center';
  ctx.fillText('DRP1 recruitment', w * 0.75, h * 0.50);
  ctx.fillText('Fis1/MFF receptors', w * 0.75, h * 0.54);
  drawMitoShape(w * 0.66, h * 0.65, 30, 16, '#FEB2B2');
  drawMitoShape(w * 0.84, h * 0.65, 30, 16, '#FEB2B2');
  ctx.fillStyle = '#742A2A'; ctx.font = '11px Arial'; ctx.textAlign = 'center';
  ctx.fillText('Two daughter mitochondria', w * 0.75, h * 0.74);
  ctx.fillStyle = '#9B2C2C'; ctx.font = '10px Arial';
  ctx.fillText('↑ fragmented network', w * 0.75, h * 0.79);
  ctx.fillText('Mitophagy, apoptosis, stress', w * 0.75, h * 0.83);

  ctx.fillStyle = '#78350F'; ctx.font = 'bold 12px Arial'; ctx.textAlign = 'center';
  ctx.fillText('Balance of fusion/fission maintains healthy mitochondrial network', w * 0.5, h * 0.93);
}

static drawMitochondrialFission(ctx, w, h, location) {
  const bg = ctx.createLinearGradient(0, 0, 0, h); bg.addColorStop(0, '#FFF5F5'); bg.addColorStop(1, '#FED7D7');
  ctx.fillStyle = bg; ctx.fillRect(0, 0, w, h);
  ctx.strokeStyle = '#FC8181'; ctx.lineWidth = 3; ctx.strokeRect(0, 0, w, h);
  ctx.fillStyle = '#742A2A'; ctx.font = 'bold 18px Arial'; ctx.textAlign = 'center';
  ctx.fillText('MITOCHONDRIAL FISSION — MECHANISM', w * 0.5, h * 0.06);

  const steps2 = [
    { y: 0.18, label: 'ER tubule contacts mitochondrion\n(marks fission site)', color: '#63B3ED' },
    { y: 0.33, label: 'Actin polymerization drives constriction\n(INF2, mDia1)', color: '#9B59B6' },
    { y: 0.48, label: 'Fis1 / MFF / MiD49/51 recruit DRP1\n(from cytoplasm)', color: '#FC8181' },
    { y: 0.63, label: 'DRP1 oligomerizes into helical ring\naround constriction site', color: '#F6AD55' },
    { y: 0.78, label: 'GTP hydrolysis drives ring tightening\n→ membrane scission', color: '#68D391' },
  ];

  steps2.forEach((s, i) => {
    ctx.fillStyle = s.color;
    ctx.fillRect(w * 0.08, h * s.y - h * 0.05, w * 0.84, h * 0.10);
    ctx.strokeStyle = '#718096'; ctx.lineWidth = 1;
    ctx.strokeRect(w * 0.08, h * s.y - h * 0.05, w * 0.84, h * 0.10);
    ctx.fillStyle = '#1A202C'; ctx.font = '11px Arial'; ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
    s.label.split('\n').forEach((line, li) => ctx.fillText(line, w * 0.5, h * s.y - h * 0.01 + li * h * 0.04));
    ctx.textBaseline = 'alphabetic';
    if (i < steps2.length - 1) this.drawArrow(ctx, w * 0.5, h * s.y + h * 0.05, w * 0.5, h * steps2[i + 1].y - h * 0.055, '#718096');
  });

  ctx.fillStyle = '#742A2A'; ctx.font = 'bold 12px Arial'; ctx.textAlign = 'center';
  ctx.fillText('DRP1 is primarily cytoplasmic — recruited to OMM by adapter proteins during fission', w * 0.5, h * 0.92);
}

static drawFusionMachinery(ctx, w, h, location) {
  const bg = ctx.createLinearGradient(0, 0, 0, h); bg.addColorStop(0, '#F0FFF4'); bg.addColorStop(1, '#C6F6D5');
  ctx.fillStyle = bg; ctx.fillRect(0, 0, w, h);
  ctx.strokeStyle = '#276749'; ctx.lineWidth = 3; ctx.strokeRect(0, 0, w, h);
  ctx.fillStyle = '#1C4532'; ctx.font = 'bold 18px Arial'; ctx.textAlign = 'center';
  ctx.fillText('FUSION MACHINERY', w * 0.5, h * 0.06);

  const proteins = [
    { label: 'Mitofusin 1 (Mfn1)', location: 'OMM', function: 'OMM tethering and fusion\n(coiled-coil domain)', color: '#3182CE', x: 0.25, y: 0.28 },
    { label: 'Mitofusin 2 (Mfn2)', location: 'OMM', function: 'OMM fusion + ER tethering\n(also in heart/muscle)', color: '#2B6CB0', x: 0.75, y: 0.28 },
    { label: 'OPA1', location: 'IMM (lumen side)', function: 'IMM fusion + cristae remodeling\nLong/short forms (OMA1/YME1L)', color: '#276749', x: 0.25, y: 0.58 },
    { label: 'DRP1', location: 'Cytoplasm → OMM', function: 'GTPase — drives fission\nRecruited by Fis1/MFF/MiD', color: '#E53E3E', x: 0.75, y: 0.58 },
  ];

  proteins.forEach(p => {
    const bx = w * (p.x - 0.18), by = h * (p.y - 0.12), bw = w * 0.36, bh = h * 0.24;
    ctx.fillStyle = p.color; ctx.fillRect(bx, by, bw, bh);
    ctx.strokeStyle = '#1A202C'; ctx.lineWidth = 1.5; ctx.strokeRect(bx, by, bw, bh);
    ctx.fillStyle = '#FFF'; ctx.font = 'bold 12px Arial'; ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
    ctx.fillText(p.label, bx + bw / 2, by + h * 0.04);
    ctx.font = '10px Arial'; ctx.fillStyle = '#E2E8F0';
    ctx.fillText(p.location, bx + bw / 2, by + h * 0.08);
    ctx.fillStyle = '#FFF'; ctx.font = '10px Arial';
    p.function.split('\n').forEach((line, i) => ctx.fillText(line, bx + bw / 2, by + h * 0.14 + i * h * 0.04));
    ctx.textBaseline = 'alphabetic';
  });

  ctx.fillStyle = '#1C4532'; ctx.font = 'bold 12px Arial'; ctx.textAlign = 'center';
  ctx.fillText('Mfn1/2 mutations → CMT2A neuropathy | OPA1 mutations → autosomal dominant optic atrophy', w * 0.5, h * 0.84);
  ctx.font = '11px Arial'; ctx.fillStyle = '#555';
  ctx.fillText('GTPase activity drives membrane remodeling | Cardiolipin facilitates IMM fusion', w * 0.5, h * 0.90);
  ctx.fillText('Both OMM and IMM must fuse independently — two separate steps', w * 0.5, h * 0.95);
}

static drawMitochondrialDynamicsPhysiology(ctx, w, h, location) {
  const bg = ctx.createLinearGradient(0, 0, 0, h); bg.addColorStop(0, '#FAFAFA'); bg.addColorStop(1, '#EDF2F7');
  ctx.fillStyle = bg; ctx.fillRect(0, 0, w, h);
  ctx.strokeStyle = '#718096'; ctx.lineWidth = 3; ctx.strokeRect(0, 0, w, h);
  ctx.fillStyle = '#1A202C'; ctx.font = 'bold 18px Arial'; ctx.textAlign = 'center';
  ctx.fillText('MITOCHONDRIAL DYNAMICS — PHYSIOLOGICAL ROLES', w * 0.5, h * 0.06);

  const roles = [
    { trigger: 'Starvation / stress', response: '↑ Fusion', outcome: 'Elongated network, more efficient OXPHOS, protection from mitophagy', color: '#C6F6D5', border: '#276749' },
    { trigger: 'High glucose / differentiation', response: '↑ Fission', outcome: 'Fragmented network, allows mitophagy of damaged mitos, mtDNA distribution', color: '#FED7D7', border: '#E53E3E' },
    { trigger: 'Apoptosis', response: '↑ Fission + OPA1 cleavage', outcome: 'Cristae remodeling → cytochrome c release → caspase activation', color: '#FEF3C7', border: '#D97706' },
    { trigger: 'Cell division', response: 'Balanced fission', outcome: 'Equal distribution of mitochondria to daughter cells', color: '#EBF8FF', border: '#3182CE' },
    { trigger: 'mtDNA mutation', response: '↑ Fusion (complementation)', outcome: 'Mixing of mitochondrial contents rescues defective mitochondria', color: '#FAF5FF', border: '#9B59B6' },
  ];

  roles.forEach((r, i) => {
    const rowY = h * (0.15 + i * 0.155);
    ctx.fillStyle = r.color; ctx.fillRect(w * 0.02, rowY, w * 0.96, h * 0.135);
    ctx.strokeStyle = r.border; ctx.lineWidth = 1.5; ctx.strokeRect(w * 0.02, rowY, w * 0.96, h * 0.135);
    ctx.fillStyle = r.border; ctx.font = 'bold 11px Arial'; ctx.textAlign = 'left'; ctx.textBaseline = 'middle';
    ctx.fillText(r.trigger, w * 0.04, rowY + h * 0.03);
    ctx.fillStyle = '#1A202C'; ctx.font = 'bold 11px Arial';
    ctx.fillText(`→ ${r.response}`, w * 0.04, rowY + h * 0.075);
    ctx.font = '10px Arial';
    ctx.fillText(r.outcome, w * 0.04, rowY + h * 0.115);
    ctx.textBaseline = 'alphabetic';
  });

  ctx.fillStyle = '#1A202C'; ctx.font = 'bold 12px Arial'; ctx.textAlign = 'center';
  ctx.fillText('Dysfunctional dynamics linked to Parkinson\'s, Alzheimer\'s, diabetes, cancer', w * 0.5, h * 0.94);
}

// ─────────────────────────────────────────────────────────────

static drawEndosymbioticTheory(ctx, x, y, width, height, stage, location) {
  ctx.save();
  ctx.translate(x, y);
  switch (stage) {
    case 'complete':
      this.drawEndosymbioticTheoryComplete(ctx, width, height, location);
      break;
    case 'mitochondria-origin':
      this.drawMitochondriaOrigin(ctx, width, height, location);
      break;
    case 'chloroplast-origin':
      this.drawChloroplastOrigin(ctx, width, height, location);
      break;
    case 'evidence':
      this.drawEndosymbioticEvidence(ctx, width, height, location);
      break;
  }
  ctx.restore();
}

static drawEndosymbioticTheoryComplete(ctx, w, h, location) {
  const bg = ctx.createLinearGradient(0, 0, 0, h);
  bg.addColorStop(0, '#FAFAFA'); bg.addColorStop(1, '#EDF2F7');
  ctx.fillStyle = bg; ctx.fillRect(0, 0, w, h);
  ctx.strokeStyle = '#718096'; ctx.lineWidth = 3; ctx.strokeRect(0, 0, w, h);

  ctx.fillStyle = '#1A202C'; ctx.font = 'bold 20px Arial'; ctx.textAlign = 'center';
  ctx.fillText('ENDOSYMBIOTIC THEORY', w * 0.5, h * 0.06);
  ctx.fillStyle = '#555'; ctx.font = '13px Arial';
  ctx.fillText('Lynn Margulis (1967) — eukaryotic organelles from prokaryotic ancestors', w * 0.5, h * 0.11);

  // Timeline
  const events = [
    { y: 0.20, time: '~3.5 Bya', event: 'First prokaryotes (anaerobic)', color: '#718096' },
    { y: 0.30, time: '~2.7 Bya', event: 'Cyanobacteria evolve oxygenic photosynthesis', color: '#48BB78' },
    { y: 0.40, time: '~2.0 Bya', event: 'Great Oxidation Event (O₂ accumulates)', color: '#63B3ED' },
    { y: 0.50, time: '~1.8 Bya', event: 'Proto-eukaryote engulfs α-proteobacterium → MITOCHONDRION', color: '#E53E3E' },
    { y: 0.62, time: '~1.5 Bya', event: 'Eukaryote engulfs cyanobacterium → CHLOROPLAST', color: '#276749' },
    { y: 0.74, time: '~1.0 Bya', event: 'Multicellular eukaryotes diversify', color: '#9B59B6' },
    { y: 0.84, time: 'Present', event: 'Plants, animals, fungi — all with endosymbiotic organelles', color: '#2B6CB0' },
  ];

  // Timeline axis
  ctx.strokeStyle = '#CBD5E0'; ctx.lineWidth = 3;
  ctx.beginPath(); ctx.moveTo(w * 0.1, h * 0.17); ctx.lineTo(w * 0.1, h * 0.88); ctx.stroke();

  events.forEach(e => {
    ctx.beginPath(); ctx.arc(w * 0.1, h * e.y, 8, 0, Math.PI * 2);
    ctx.fillStyle = e.color; ctx.fill();
    ctx.strokeStyle = '#FFF'; ctx.lineWidth = 2; ctx.stroke();
    ctx.fillStyle = e.color; ctx.font = 'bold 11px Arial'; ctx.textAlign = 'left';
    ctx.fillText(e.time, w * 0.13, h * e.y - 4);
    ctx.fillStyle = '#2D3748'; ctx.font = '12px Arial';
    ctx.fillText(e.event, w * 0.13, h * e.y + 9);
  });

  // Key evidence icons
  ctx.fillStyle = '#1A202C'; ctx.font = 'bold 13px Arial'; ctx.textAlign = 'center';
  ctx.fillText('Key evidence: double membranes, 70S ribosomes, circular DNA, binary fission, own tRNA', w * 0.5, h * 0.94);
}

static drawMitochondriaOrigin(ctx, w, h, location) {
  const bg = ctx.createLinearGradient(0, 0, 0, h); bg.addColorStop(0, '#FFF9E6'); bg.addColorStop(1, '#FFF0C2');
  ctx.fillStyle = bg; ctx.fillRect(0, 0, w, h);
  ctx.strokeStyle = '#D97706'; ctx.lineWidth = 3; ctx.strokeRect(0, 0, w, h);
  ctx.fillStyle = '#78350F'; ctx.font = 'bold 18px Arial'; ctx.textAlign = 'center';
  ctx.fillText('ORIGIN OF MITOCHONDRIA', w * 0.5, h * 0.06);

  // Step 1: ancestor and bacterium
  ctx.fillStyle = '#FEF3C7'; ctx.fillRect(w * 0.03, h * 0.13, w * 0.94, h * 0.20);
  ctx.strokeStyle = '#D97706'; ctx.lineWidth = 1.5; ctx.strokeRect(w * 0.03, h * 0.13, w * 0.94, h * 0.20);
  ctx.fillStyle = '#744210'; ctx.font = 'bold 13px Arial'; ctx.textAlign = 'center';
  ctx.fillText('~1.8 Bya: Ancestral archaeon / proto-eukaryote + aerobic α-proteobacterium', w * 0.5, h * 0.20);

  // Draw ancestral cell engulfing bacterium
  ctx.beginPath(); ctx.ellipse(w * 0.25, h * 0.27, 60, 35, 0, 0, Math.PI * 2);
  ctx.fillStyle = '#BEE3F8'; ctx.fill(); ctx.strokeStyle = '#3182CE'; ctx.lineWidth = 2; ctx.stroke();
  ctx.fillStyle = '#1A365D'; ctx.font = 'bold 10px Arial'; ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
  ctx.fillText('Archaeon', w * 0.25, h * 0.27); ctx.textBaseline = 'alphabetic';
  ctx.fillStyle = '#555'; ctx.font = '10px Arial'; ctx.textAlign = 'center';
  ctx.fillText('(no mito)', w * 0.25, h * 0.30);

  ctx.beginPath(); ctx.ellipse(w * 0.55, h * 0.27, 28, 18, 0, 0, Math.PI * 2);
  ctx.fillStyle = '#FECACA'; ctx.fill(); ctx.strokeStyle = '#C53030'; ctx.lineWidth = 2; ctx.stroke();
  ctx.fillStyle = '#742A2A'; ctx.font = 'bold 9px Arial'; ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
  ctx.fillText('α-proteo', w * 0.55, h * 0.265); ctx.fillText('bacterium', w * 0.55, h * 0.278); ctx.textBaseline = 'alphabetic';

  this.drawArrow(ctx, w * 0.65, h * 0.27, w * 0.73, h * 0.27, '#555');

  // Endocytosis
  ctx.beginPath(); ctx.ellipse(w * 0.84, h * 0.27, 55, 35, 0, 0, Math.PI * 2);
  ctx.fillStyle = '#BEE3F8'; ctx.fill(); ctx.strokeStyle = '#3182CE'; ctx.lineWidth = 2; ctx.stroke();
  ctx.beginPath(); ctx.ellipse(w * 0.84, h * 0.27, 20, 14, 0, 0, Math.PI * 2);
  ctx.fillStyle = '#FECACA'; ctx.fill(); ctx.strokeStyle = '#C53030'; ctx.lineWidth = 1.5; ctx.stroke();
  ctx.fillStyle = '#742A2A'; ctx.font = 'bold 9px Arial'; ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
  ctx.fillText('engulfed', w * 0.84, h * 0.27); ctx.textBaseline = 'alphabetic';

  // Gene transfer
  this.drawArrow(ctx, w * 0.5, h * 0.37, w * 0.5, h * 0.44, '#555');
  ctx.fillStyle = '#333'; ctx.font = '11px Arial'; ctx.textAlign = 'center';
  ctx.fillText('Massive gene transfer to host nucleus over ~1.5 billion years', w * 0.5, h * 0.42);

  // Modern mitochondrion comparison
  const compRows = [
    ['Feature', 'α-Proteobacteria', 'Modern Mitochondrion'],
    ['Membranes', '1 (peptidoglycan wall)', '2 (outer + inner)'],
    ['Genome', 'Circular DNA, ~4Mb', 'Circular mtDNA, 16.5 kb (human)'],
    ['Ribosomes', '70S', '70S (mito-specific)'],
    ['Division', 'Binary fission', 'Fission (DRP1/FtsZ-like)'],
    ['Closest relative', 'Rickettsiales order', '—'],
  ];

  const cW4 = [w * 0.27, w * 0.33, w * 0.34], cX4 = [w * 0.02, w * 0.30, w * 0.64];
  compRows.forEach((row, ri) => {
    row.forEach((cell, ci) => {
      ctx.fillStyle = ri === 0 ? '#744210' : (ri % 2 === 0 ? ['#FEF3C7', '#FED7D7', '#C6F6D5'][ci] : ['#FFFBEB', '#FFF5F5', '#F0FFF4'][ci]);
      ctx.fillRect(cX4[ci], h * (0.48 + ri * 0.085), cW4[ci], h * 0.08);
      ctx.strokeStyle = '#CBD5E0'; ctx.lineWidth = 1; ctx.strokeRect(cX4[ci], h * (0.48 + ri * 0.085), cW4[ci], h * 0.08);
      ctx.fillStyle = ri === 0 ? '#FFF' : '#2D3748';
      ctx.font = ri === 0 ? 'bold 10px Arial' : '10px Arial'; ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
      ctx.fillText(cell, cX4[ci] + cW4[ci] / 2, h * (0.48 + ri * 0.085) + h * 0.04);
    });
  });
  ctx.textBaseline = 'alphabetic';
}

static drawChloroplastOrigin(ctx, w, h, location) {
  const bg = ctx.createLinearGradient(0, 0, 0, h); bg.addColorStop(0, '#F0FFF4'); bg.addColorStop(1, '#C6F6D5');
  ctx.fillStyle = bg; ctx.fillRect(0, 0, w, h);
  ctx.strokeStyle = '#276749'; ctx.lineWidth = 3; ctx.strokeRect(0, 0, w, h);
  ctx.fillStyle = '#1C4532'; ctx.font = 'bold 18px Arial'; ctx.textAlign = 'center';
  ctx.fillText('ORIGIN OF CHLOROPLASTS', w * 0.5, h * 0.06);

  ctx.fillStyle = '#9AE6B4'; ctx.fillRect(w * 0.03, h * 0.13, w * 0.94, h * 0.20);
  ctx.strokeStyle = '#276749'; ctx.lineWidth = 1.5; ctx.strokeRect(w * 0.03, h * 0.13, w * 0.94, h * 0.20);
  ctx.fillStyle = '#1C4532'; ctx.font = 'bold 13px Arial'; ctx.textAlign = 'center';
  ctx.fillText('~1.5 Bya: Eukaryote (already had mitochondria) engulfs cyanobacterium', w * 0.5, h * 0.20);

  ctx.beginPath(); ctx.ellipse(w * 0.22, h * 0.27, 60, 35, 0, 0, Math.PI * 2);
  ctx.fillStyle = '#BEE3F8'; ctx.fill(); ctx.strokeStyle = '#3182CE'; ctx.lineWidth = 2; ctx.stroke();
  ctx.beginPath(); ctx.ellipse(w * 0.19, h * 0.28, 12, 8, 0.3, 0, Math.PI * 2);
  ctx.fillStyle = '#FC8181'; ctx.fill(); ctx.strokeStyle = '#C53030'; ctx.lineWidth = 1; ctx.stroke();
  ctx.fillStyle = '#1A365D'; ctx.font = 'bold 9px Arial'; ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
  ctx.fillText('Eukaryote', w * 0.22, h * 0.265);
  ctx.fillText('(+mito)', w * 0.22, h * 0.278); ctx.textBaseline = 'alphabetic';

  ctx.beginPath(); ctx.ellipse(w * 0.52, h * 0.27, 26, 18, 0, 0, Math.PI * 2);
  ctx.fillStyle = '#C6F6D5'; ctx.fill(); ctx.strokeStyle = '#276749'; ctx.lineWidth = 2; ctx.stroke();
  ctx.fillStyle = '#1C4532'; ctx.font = 'bold 9px Arial'; ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
  ctx.fillText('Cyano-', w * 0.52, h * 0.265); ctx.fillText('bacterium', w * 0.52, h * 0.278); ctx.textBaseline = 'alphabetic';

  this.drawArrow(ctx, w * 0.63, h * 0.27, w * 0.71, h * 0.27, '#555');

  ctx.beginPath(); ctx.ellipse(w * 0.85, h * 0.27, 58, 36, 0, 0, Math.PI * 2);
  ctx.fillStyle = '#BEE3F8'; ctx.fill(); ctx.strokeStyle = '#3182CE'; ctx.lineWidth = 2; ctx.stroke();
  ctx.beginPath(); ctx.ellipse(w * 0.82, h * 0.28, 12, 8, 0.3, 0, Math.PI * 2);
  ctx.fillStyle = '#FC8181'; ctx.fill(); ctx.strokeStyle = '#C53030'; ctx.lineWidth = 1; ctx.stroke();
  ctx.beginPath(); ctx.ellipse(w * 0.88, h * 0.26, 22, 16, 0, 0, Math.PI * 2);
  ctx.fillStyle = '#C6F6D5'; ctx.fill(); ctx.strokeStyle = '#276749'; ctx.lineWidth = 1.5; ctx.stroke();
  ctx.fillStyle = '#1C4532'; ctx.font = 'bold 8px Arial'; ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
  ctx.fillText('proto-chlp', w * 0.88, h * 0.26); ctx.textBaseline = 'alphabetic';

  const compRows2 = [
    ['Feature', 'Cyanobacteria', 'Modern Chloroplast'],
    ['Membranes', '2 membranes + thylakoids', '2 envelope + thylakoids'],
    ['Genome', 'Circular DNA, ~3 Mb', 'Circular cpDNA, ~150 kb'],
    ['Ribosomes', '70S', '70S (chloroplast)'],
    ['Photosystems', 'PSII + PSI', 'PSII + PSI (identical!)'],
    ['Pigments', 'Chl a + phycobilins', 'Chl a + b + carotenoids'],
  ];

  const cW5 = [w * 0.27, w * 0.33, w * 0.34], cX5 = [w * 0.02, w * 0.30, w * 0.64];
  compRows2.forEach((row, ri) => {
    row.forEach((cell, ci) => {
      ctx.fillStyle = ri === 0 ? '#276749' : (ri % 2 === 0 ? ['#F0FFF4', '#FEFCBF', '#C6F6D5'][ci] : ['#E6FFFA', '#FFFFF0', '#9AE6B4'][ci]);
      ctx.fillRect(cX5[ci], h * (0.38 + ri * 0.088), cW5[ci], h * 0.082);
      ctx.strokeStyle = '#CBD5E0'; ctx.lineWidth = 1; ctx.strokeRect(cX5[ci], h * (0.38 + ri * 0.088), cW5[ci], h * 0.082);
      ctx.fillStyle = ri === 0 ? '#FFF' : '#2D3748';
      ctx.font = ri === 0 ? 'bold 10px Arial' : '10px Arial'; ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
      ctx.fillText(cell, cX5[ci] + cW5[ci] / 2, h * (0.38 + ri * 0.088) + h * 0.041);
    });
  });
  ctx.textBaseline = 'alphabetic';

  ctx.fillStyle = '#1C4532'; ctx.font = 'bold 12px Arial'; ctx.textAlign = 'center';
  ctx.fillText('Secondary endosymbiosis: some algae re-engulfed red/green algae → 3-4 membranes!', w * 0.5, h * 0.92);
}

static drawEndosymbioticEvidence(ctx, w, h, location) {
  const bg = ctx.createLinearGradient(0, 0, 0, h); bg.addColorStop(0, '#EDF2F7'); bg.addColorStop(1, '#E2E8F0');
  ctx.fillStyle = bg; ctx.fillRect(0, 0, w, h);
  ctx.strokeStyle = '#718096'; ctx.lineWidth = 3; ctx.strokeRect(0, 0, w, h);
  ctx.fillStyle = '#1A202C'; ctx.font = 'bold 18px Arial'; ctx.textAlign = 'center';
  ctx.fillText('EVIDENCE FOR ENDOSYMBIOTIC THEORY', w * 0.5, h * 0.06);

  const evidences = [
    { title: '🔬 Double membranes', desc: 'Mitochondria and chloroplasts have 2 membranes — outer (from host phagocytosis) + inner (from bacterial membrane)', color: '#FED7D7' },
    { title: '🧬 Circular genome', desc: 'Both organelles have circular DNA like bacteria, not linear chromosomes; often contains bacterial-type genes', color: '#C6F6D5' },
    { title: '🔩 70S ribosomes', desc: 'Organellar ribosomes are 70S (like bacteria), sensitive to bacterial antibiotics (chloramphenicol, streptomycin)', color: '#BEE3F8' },
    { title: '✂️ Binary fission', desc: 'Organelles divide by binary fission (like bacteria), not mitosis; cannot be made de novo by the cell', color: '#FEF3C7' },
    { title: '📍 Phylogenetic trees', desc: 'Mito DNA closely related to α-Proteobacteria (Rickettsiales); cpDNA closest to Cyanobacteria', color: '#E9D8FD' },
    { title: '🔄 Gene transfer evidence', desc: 'Many organellar genes found in nucleus — ongoing gene transfer; ~1000 mito proteins nuclear-encoded', color: '#FED7D7' },
    { title: '🌿 Living intermediates', desc: 'Paulinella chromatophora: recent chloroplast acquisition ~140 Mya — shows process in action', color: '#C6F6D5' },
  ];

  evidences.forEach((e, i) => {
    const ey = h * (0.13 + i * 0.118);
    ctx.fillStyle = e.color; ctx.fillRect(w * 0.02, ey, w * 0.96, h * 0.105);
    ctx.strokeStyle = '#CBD5E0'; ctx.lineWidth = 1; ctx.strokeRect(w * 0.02, ey, w * 0.96, h * 0.105);
    ctx.fillStyle = '#1A202C'; ctx.font = 'bold 12px Arial'; ctx.textAlign = 'left';
    ctx.fillText(e.title, w * 0.04, ey + h * 0.035);
    ctx.fillStyle = '#4A5568'; ctx.font = '11px Arial';
    ctx.fillText(e.desc, w * 0.04, ey + h * 0.075);
  });
}

// ─────────────────────────────────────────────────────────────

static drawATPEnergyBudget(ctx, x, y, width, height, stage, location) {
  ctx.save();
  ctx.translate(x, y);
  switch (stage) {
    case 'complete':
      this.drawATPEnergyBudgetComplete(ctx, width, height, location);
      break;
    case 'per-stage':
      this.drawATPEnergyBudgetPerStage(ctx, width, height, location);
      break;
    case 'theoretical-vs-actual':
      this.drawATPTheoreticalVsActual(ctx, width, height, location);
      break;
    case 'comparison':
      this.drawATPFuelComparison(ctx, width, height, location);
      break;
  }
  ctx.restore();
}

static drawATPEnergyBudgetComplete(ctx, w, h, location) {
  const bg = ctx.createLinearGradient(0, 0, 0, h);
  bg.addColorStop(0, '#F0FFF4'); bg.addColorStop(1, '#FEFCBF');
  ctx.fillStyle = bg; ctx.fillRect(0, 0, w, h);
  ctx.strokeStyle = '#276749'; ctx.lineWidth = 3; ctx.strokeRect(0, 0, w, h);

  ctx.fillStyle = '#1C4532'; ctx.font = 'bold 20px Arial'; ctx.textAlign = 'center';
  ctx.fillText('ATP ENERGY BUDGET — Complete Glucose Oxidation', w * 0.5, h * 0.06);
  ctx.fillStyle = '#555'; ctx.font = '13px Arial';
  ctx.fillText('C₆H₁₂O₆ + 6O₂ → 6CO₂ + 6H₂O + ~30-32 ATP', w * 0.5, h * 0.11);

  const stages2 = [
    { stage: 'Glycolysis', location2: 'Cytoplasm', atp: '+4 (gross)\n−2 (invest)\n= 2 net', nadh: '2 NADH', fadh2: '—', color: '#3182CE' },
    { stage: 'Pyruvate Decarboxylation', location2: 'Mito matrix', atp: '0', nadh: '2 NADH', fadh2: '—', color: '#9B59B6' },
    { stage: 'Krebs Cycle (×2)', location2: 'Mito matrix', atp: '2 GTP', nadh: '6 NADH', fadh2: '2 FADH₂', color: '#E53E3E' },
    { stage: 'Oxidative Phosphorylation', location2: 'Inner membrane', atp: '~26-28', nadh: '10 NADH used', fadh2: '2 FADH₂ used', color: '#27AE60' },
  ];

  const hdr = ['Stage', 'Location', 'Direct ATP', 'NADH', 'FADH₂'];
  const cW6 = [w * 0.22, w * 0.20, w * 0.16, w * 0.20, w * 0.16];
  const cX6 = [w * 0.02, w * 0.25, w * 0.46, w * 0.63, w * 0.84];
  const rH4 = h * 0.11;

  hdr.forEach((h2, ci) => {
    ctx.fillStyle = '#2D3748'; ctx.fillRect(cX6[ci], h * 0.16, cW6[ci], rH4 * 0.7);
    ctx.fillStyle = '#FFF'; ctx.font = 'bold 11px Arial'; ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
    ctx.fillText(h2, cX6[ci] + cW6[ci] / 2, h * 0.16 + rH4 * 0.35);
    ctx.textBaseline = 'alphabetic';
  });

  stages2.forEach((s, ri) => {
    const rowData = [s.stage, s.location2, s.atp, s.nadh, s.fadh2];
    rowData.forEach((cell, ci) => {
      ctx.fillStyle = ri % 2 === 0 ? s.color + '33' : s.color + '55';
      ctx.fillRect(cX6[ci], h * (0.24 + ri * rH4), cW6[ci], rH4);
      ctx.strokeStyle = '#CBD5E0'; ctx.lineWidth = 1;
      ctx.strokeRect(cX6[ci], h * (0.24 + ri * rH4), cW6[ci], rH4);
      ctx.fillStyle = ci === 0 ? s.color : '#2D3748';
      ctx.font = ci === 0 ? 'bold 10px Arial' : '10px Arial'; ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
      cell.split('\n').forEach((line, li) => ctx.fillText(line, cX6[ci] + cW6[ci] / 2, h * (0.24 + ri * rH4) + rH4 * 0.3 + li * h * 0.04));
      ctx.textBaseline = 'alphabetic';
    });
  });

  // Total row
  const totalY = h * (0.24 + 4 * rH4);
  ctx.fillStyle = '#1C4532'; ctx.fillRect(w * 0.02, totalY, w * 0.96, rH4);
  ctx.fillStyle = '#FFF'; ctx.font = 'bold 16px Arial'; ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
  ctx.fillText('TOTAL ≈ 30–32 ATP per glucose molecule', w * 0.5, totalY + rH4 / 2);
  ctx.textBaseline = 'alphabetic';

  // Efficiency
  ctx.fillStyle = '#276749'; ctx.font = 'bold 13px Arial'; ctx.textAlign = 'center';
  ctx.fillText('Efficiency ≈ 40% (ΔG° = −2870 kJ/mol glucose | ATP stores ~1150 kJ/mol)', w * 0.5, h * 0.88);
  ctx.font = '12px Arial'; ctx.fillStyle = '#555';
  ctx.fillText('NADH → ~2.5 ATP | FADH₂ → ~1.5 ATP (P/O ratios)', w * 0.5, h * 0.93);
}

static drawATPEnergyBudgetPerStage(ctx, w, h, location) {
  const bg = ctx.createLinearGradient(0, 0, 0, h); bg.addColorStop(0, '#EBF8FF'); bg.addColorStop(1, '#BEE3F8');
  ctx.fillStyle = bg; ctx.fillRect(0, 0, w, h);
  ctx.strokeStyle = '#2B6CB0'; ctx.lineWidth = 3; ctx.strokeRect(0, 0, w, h);
  ctx.fillStyle = '#1A365D'; ctx.font = 'bold 18px Arial'; ctx.textAlign = 'center';
  ctx.fillText('ATP YIELD PER STAGE', w * 0.5, h * 0.06);

  const stageData = [
    { label: 'Glycolysis\n(SLP)', atp: 2, color: '#3182CE', x: 0.12 },
    { label: 'Pyruvate\nDecarb.', atp: 0, color: '#718096', x: 0.27 },
    { label: 'Krebs\nCycle', atp: 2, color: '#9B59B6', x: 0.42 },
    { label: 'OxPhos\n(NADH)', atp: 25, color: '#E53E3E', x: 0.62 },
    { label: 'OxPhos\n(FADH₂)', atp: 3, color: '#E67E22', x: 0.82 },
  ];

  const maxATP = 30, barMaxH = h * 0.50, barY = h * 0.25;

  stageData.forEach(s => {
    const barH = (s.atp / maxATP) * barMaxH;
    const barX = w * (s.x - 0.06), barW = w * 0.12;
    // Bar
    ctx.fillStyle = s.color;
    ctx.fillRect(barX, barY + barMaxH - barH, barW, barH);
    ctx.strokeStyle = '#1A202C'; ctx.lineWidth = 1.5;
    ctx.strokeRect(barX, barY + barMaxH - barH, barW, barH);
    // Value
    ctx.fillStyle = '#1A202C'; ctx.font = 'bold 16px Arial'; ctx.textAlign = 'center';
    ctx.fillText(`${s.atp}`, barX + barW / 2, barY + barMaxH - barH - 5);
    // Label
    ctx.font = '10px Arial'; ctx.textAlign = 'center';
    s.label.split('\n').forEach((line, i) => ctx.fillText(line, barX + barW / 2, barY + barMaxH + 15 + i * 13));
  });

  // Baseline
  ctx.strokeStyle = '#333'; ctx.lineWidth = 2;
  ctx.beginPath(); ctx.moveTo(w * 0.04, barY + barMaxH); ctx.lineTo(w * 0.96, barY + barMaxH); ctx.stroke();

  // Y-axis
  ctx.beginPath(); ctx.moveTo(w * 0.04, barY); ctx.lineTo(w * 0.04, barY + barMaxH); ctx.stroke();
  [0, 5, 10, 15, 20, 25, 30].forEach(val => {
    const y2 = barY + barMaxH - (val / maxATP) * barMaxH;
    ctx.fillStyle = '#718096'; ctx.font = '10px Arial'; ctx.textAlign = 'right';
    ctx.fillText(`${val}`, w * 0.03, y2 + 4);
    ctx.strokeStyle = '#CBD5E0'; ctx.lineWidth = 0.5;
    ctx.beginPath(); ctx.moveTo(w * 0.04, y2); ctx.lineTo(w * 0.96, y2); ctx.stroke();
  });

  ctx.fillStyle = '#1A365D'; ctx.font = 'bold 13px Arial'; ctx.textAlign = 'center';
  ctx.fillText('OxPhos accounts for ~90% of total ATP yield from glucose oxidation', w * 0.5, h * 0.88);
  ctx.font = '12px Arial'; ctx.fillStyle = '#555';
  ctx.fillText('Without O₂ (fermentation): only 2 ATP | With O₂: ~30-32 ATP → 15× more efficient', w * 0.5, h * 0.93);
}

static drawATPTheoreticalVsActual(ctx, w, h, location) {
  const bg = ctx.createLinearGradient(0, 0, 0, h); bg.addColorStop(0, '#FAFAFA'); bg.addColorStop(1, '#EDF2F7');
  ctx.fillStyle = bg; ctx.fillRect(0, 0, w, h);
  ctx.strokeStyle = '#718096'; ctx.lineWidth = 3; ctx.strokeRect(0, 0, w, h);
  ctx.fillStyle = '#1A202C'; ctx.font = 'bold 18px Arial'; ctx.textAlign = 'center';
  ctx.fillText('THEORETICAL vs ACTUAL ATP YIELD', w * 0.5, h * 0.06);

  const rows5 = [
    ['Source', 'Theoretical', 'Actual (P/O based)', 'Notes'],
    ['Glycolysis NADH\n(2 × NADH)', '2 × 3 = 6', '2 × 2.5 = 5', 'Shuttle cost (mito)'],
    ['Pyr. Decarb NADH\n(2 × NADH)', '2 × 3 = 6', '2 × 2.5 = 5', 'Directly in matrix'],
    ['Krebs NADH\n(6 × NADH)', '6 × 3 = 18', '6 × 2.5 = 15', 'Classical estimate 3'],
    ['Krebs FADH₂\n(2 × FADH₂)', '2 × 2 = 4', '2 × 1.5 = 3', 'Enters at Complex II'],
    ['SLP (Glycolysis)', '2', '2', 'Net ATP direct'],
    ['SLP (Krebs)', '2', '2', 'GTP = ATP equiv'],
    ['TOTAL', '38', '~30–32', 'Actual varies'],
  ];

  const cW7 = [w * 0.28, w * 0.18, w * 0.22, w * 0.28];
  const cX7 = [w * 0.02, w * 0.31, w * 0.50, w * 0.73];
  const rH5 = h * 0.107;

  rows5.forEach((row, ri) => {
    row.forEach((cell, ci) => {
      ctx.fillStyle = ri === 0 ? '#2D3748' :
        (ri === rows5.length - 1 ? '#1C4532' :
          (ri % 2 === 0 ? ['#EDF2F7', '#FFF5F5', '#F0FFF4', '#FEFCBF'][ci] :
            ['#E2E8F0', '#FED7D7', '#C6F6D5', '#FAF089'][ci]));
      ctx.fillRect(cX7[ci], h * (0.13 + ri * rH5), cW7[ci], rH5);
      ctx.strokeStyle = '#CBD5E0'; ctx.lineWidth = 1;
      ctx.strokeRect(cX7[ci], h * (0.13 + ri * rH5), cW7[ci], rH5);
      ctx.fillStyle = ri === 0 || ri === rows5.length - 1 ? '#FFF' : '#2D3748';
      ctx.font = ri === 0 || ri === rows5.length - 1 ? 'bold 10px Arial' : '10px Arial';
      ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
      cell.split('\n').forEach((line, li) => ctx.fillText(line, cX7[ci] + cW7[ci] / 2, h * (0.13 + ri * rH5) + rH5 * 0.3 + li * h * 0.04));
      ctx.textBaseline = 'alphabetic';
    });
  });

  ctx.fillStyle = '#276749'; ctx.font = 'bold 12px Arial'; ctx.textAlign = 'center';
  ctx.fillText('P/O ratios: NADH = 2.5, FADH₂ = 1.5 (based on rotational catalysis of ATP synthase)', w * 0.5, h * 0.90);
  ctx.font = '11px Arial'; ctx.fillStyle = '#555';
  ctx.fillText('Old textbook "38 ATP" used P/O of 3 (NADH) and 2 (FADH₂) — now revised', w * 0.5, h * 0.95);
}

static drawATPFuelComparison(ctx, w, h, location) {
  const bg = ctx.createLinearGradient(0, 0, 0, h); bg.addColorStop(0, '#FFFBEB'); bg.addColorStop(1, '#FEF3C7');
  ctx.fillStyle = bg; ctx.fillRect(0, 0, w, h);
  ctx.strokeStyle = '#D97706'; ctx.lineWidth = 3; ctx.strokeRect(0, 0, w, h);
  ctx.fillStyle = '#78350F'; ctx.font = 'bold 18px Arial'; ctx.textAlign = 'center';
  ctx.fillText('ATP YIELD — FUEL MOLECULE COMPARISON', w * 0.5, h * 0.06);

  const fuels = [
    { fuel: 'Glucose (C6)', atp: 32, perC: 5.3, color: '#3182CE' },
    { fuel: 'Fructose (C6)', atp: 32, perC: 5.3, color: '#63B3ED' },
    { fuel: 'Palmitate (C16 FA)', atp: 106, perC: 6.6, color: '#F6AD55' },
    { fuel: 'Alanine (AA, C3)', atp: 8, perC: 2.7, color: '#FC8181' },
    { fuel: 'Glutamate (AA, C5)', atp: 22, perC: 4.4, color: '#9B59B6' },
    { fuel: 'Galactose (C6)', atp: 32, perC: 5.3, color: '#4FD1C5' },
    { fuel: 'Acetate (C2)', atp: 10, perC: 5.0, color: '#68D391' },
  ];

  const maxATP2 = 110, barMaxH2 = h * 0.45, barY2 = h * 0.20;

  fuels.forEach((f, i) => {
    const barH2 = (f.atp / maxATP2) * barMaxH2;
    const barX2 = w * (0.07 + i * 0.13), barW2 = w * 0.10;
    ctx.fillStyle = f.color;
    ctx.fillRect(barX2, barY2 + barMaxH2 - barH2, barW2, barH2);
    ctx.strokeStyle = '#1A202C'; ctx.lineWidth = 1;
    ctx.strokeRect(barX2, barY2 + barMaxH2 - barH2, barW2, barH2);
    ctx.fillStyle = '#1A202C'; ctx.font = 'bold 12px Arial'; ctx.textAlign = 'center';
    ctx.fillText(`${f.atp}`, barX2 + barW2 / 2, barY2 + barMaxH2 - barH2 - 5);
    ctx.font = '9px Arial'; ctx.textAlign = 'center';
    ctx.fillText(f.fuel, barX2 + barW2 / 2, barY2 + barMaxH2 + 12);
    ctx.fillStyle = '#718096'; ctx.font = '9px Arial';
    ctx.fillText(`${f.perC}/C`, barX2 + barW2 / 2, barY2 + barMaxH2 + 24);
  });

  ctx.strokeStyle = '#333'; ctx.lineWidth = 2;
  ctx.beginPath(); ctx.moveTo(w * 0.04, barY2 + barMaxH2); ctx.lineTo(w * 0.98, barY2 + barMaxH2); ctx.stroke();
  [0, 25, 50, 75, 100].forEach(val => {
    const y2 = barY2 + barMaxH2 - (val / maxATP2) * barMaxH2;
    ctx.fillStyle = '#718096'; ctx.font = '10px Arial'; ctx.textAlign = 'right';
    ctx.fillText(`${val}`, w * 0.03, y2 + 4);
  });

  ctx.fillStyle = '#78350F'; ctx.font = 'bold 13px Arial'; ctx.textAlign = 'center';
  ctx.fillText('Fatty acids yield most ATP total; highest ATP per carbon among common fuels', w * 0.5, h * 0.80);
  ctx.font = '11px Arial'; ctx.fillStyle = '#555';
  ctx.fillText('Carbs metabolized faster | Fats store more energy per gram | AAs used when others depleted', w * 0.5, h * 0.86);
}

// ─────────────────────────────────────────────────────────────

static drawRedoxPotentialChart(ctx, x, y, width, height, stage, location) {
  ctx.save();
  ctx.translate(x, y);
  switch (stage) {
    case 'complete':
      this.drawRedoxPotentialChartComplete(ctx, width, height, location);
      break;
    case 'respiration-tower':
      this.drawElectronTowerRespiration(ctx, width, height, location);
      break;
    case 'photosynthesis-tower':
      this.drawElectronTowerPhotosynthesis(ctx, width, height, location);
      break;
    case 'half-reactions':
      this.drawHalfReactions(ctx, width, height, location);
      break;
  }
  ctx.restore();
}

static drawRedoxPotentialChartComplete(ctx, w, h, location) {
  const bg = ctx.createLinearGradient(0, 0, 0, h);
  bg.addColorStop(0, '#1A202C'); bg.addColorStop(1, '#2D3748');
  ctx.fillStyle = bg; ctx.fillRect(0, 0, w, h);
  ctx.strokeStyle = '#4A5568'; ctx.lineWidth = 3; ctx.strokeRect(0, 0, w, h);

  ctx.fillStyle = '#F7FAFC'; ctx.font = 'bold 20px Arial'; ctx.textAlign = 'center';
  ctx.fillText('REDOX POTENTIAL CHART (Electron Tower)', w * 0.5, h * 0.06);
  ctx.fillStyle = '#A0AEC0'; ctx.font = '13px Arial';
  ctx.fillText('Electrons flow from low to high E° (spontaneously)', w * 0.5, h * 0.11);

  // Y-axis setup
  const minE = -0.6, maxE = 0.82;
  const axX = w * 0.12, axY1 = h * 0.14, axY2 = h * 0.92;
  const eToY2 = (e) => axY2 - ((e - minE) / (maxE - minE)) * (axY2 - axY1);

  // Axis
  ctx.strokeStyle = '#718096'; ctx.lineWidth = 2;
  ctx.beginPath(); ctx.moveTo(axX, axY1); ctx.lineTo(axX, axY2); ctx.stroke();
  ctx.fillStyle = '#E2E8F0'; ctx.font = 'bold 11px Arial'; ctx.textAlign = 'center';
  ctx.fillText('E°\' (V)', axX, axY1 - 5);

  // Grid lines and labels
  const eVals = [-0.6, -0.4, -0.32, -0.18, 0, 0.07, 0.22, 0.37, 0.54, 0.82];
  eVals.forEach(e => {
    const gy = eToY2(e);
    ctx.strokeStyle = 'rgba(113,128,150,0.3)'; ctx.lineWidth = 1;
    ctx.beginPath(); ctx.moveTo(axX, gy); ctx.lineTo(w * 0.98, gy); ctx.stroke();
    ctx.fillStyle = '#A0AEC0'; ctx.font = '10px Arial'; ctx.textAlign = 'right';
    ctx.fillText(`${e.toFixed(2)}V`, axX - 3, gy + 4);
  });

  // Electron carriers for respiration
  const respCarriers = [
    { name: 'NAD⁺/NADH', e: -0.32, color: '#FC8181', x: 0.30 },
    { name: 'FAD/FADH₂', e: -0.18, color: '#F6AD55', x: 0.42 },
    { name: 'CoQ/CoQH₂', e: 0.045, color: '#FCD34D', x: 0.30 },
    { name: 'Cyt b (Fe³⁺/Fe²⁺)', e: 0.07, color: '#9AE6B4', x: 0.42 },
    { name: 'Cyt c (Fe³⁺/Fe²⁺)', e: 0.22, color: '#68D391', x: 0.30 },
    { name: 'Cyt a (Fe³⁺/Fe²⁺)', e: 0.29, color: '#4FD1C5', x: 0.42 },
    { name: 'O₂/H₂O', e: 0.82, color: '#63B3ED', x: 0.30 },
  ];

  // Photosynthesis carriers
  const photCarriers = [
    { name: 'P700*/A₀', e: -1.33, color: '#F6AD55', x: 0.70 },
    { name: 'Fd/Fd⁻', e: -0.42, color: '#68D391', x: 0.75 },
    { name: 'NADP⁺/NADPH', e: -0.32, color: '#9B59B6', x: 0.82 },
    { name: 'P680*/Pheo', e: -0.61, color: '#FC8181', x: 0.68 },
    { name: 'QA/QA⁻', e: -0.14, color: '#FCD34D', x: 0.75 },
    { name: 'PQ/PQH₂', e: 0.045, color: '#F6AD55', x: 0.68 },
    { name: 'PC/PC⁻', e: 0.37, color: '#63B3ED', x: 0.75 },
    { name: 'P700/P700⁺', e: 0.43, color: '#FC8181', x: 0.68 },
    { name: 'H₂O/O₂', e: 0.82, color: '#48BB78', x: 0.82 },
    { name: 'P680/P680⁺', e: 1.10, color: '#E53E3E', x: 0.68 },
  ];

  // Draw respiration carriers
  ctx.fillStyle = '#FFF'; ctx.font = 'bold 11px Arial'; ctx.textAlign = 'center';
  ctx.fillText('Respiration', w * 0.35, axY1 - 2);

  respCarriers.forEach(c => {
    if (c.e >= minE && c.e <= maxE) {
      const cy = eToY2(c.e);
      ctx.beginPath(); ctx.arc(w * c.x, cy, 5, 0, Math.PI * 2);
      ctx.fillStyle = c.color; ctx.fill();
      ctx.fillStyle = c.color; ctx.font = '9px Arial'; ctx.textAlign = 'left';
      ctx.fillText(c.name, w * c.x + 8, cy + 4);
    }
  });

  // Electron flow arrow (respiration)
  ctx.strokeStyle = '#FC8181'; ctx.lineWidth = 2;
  const arrowPoints = respCarriers.filter(c => c.e >= minE && c.e <= maxE);
  if (arrowPoints.length > 1) {
    ctx.beginPath();
    arrowPoints.forEach((c, i) => {
      const cy = eToY2(c.e);
      i === 0 ? ctx.moveTo(w * 0.28, cy) : ctx.lineTo(w * 0.28, cy);
    });
    ctx.stroke();
    this.drawArrow(ctx, w * 0.28, eToY2(respCarriers[0].e), w * 0.28, eToY2(respCarriers[respCarriers.length - 1].e), '#FC8181');
    ctx.fillStyle = '#FC8181'; ctx.font = 'bold 10px Arial'; ctx.textAlign = 'center';
    ctx.fillText('e⁻ flow', w * 0.26, (eToY2(respCarriers[0].e) + eToY2(respCarriers[respCarriers.length - 1].e)) / 2);
  }

  ctx.fillStyle = '#A0AEC0'; ctx.font = 'bold 11px Arial'; ctx.textAlign = 'center';
  ctx.fillText('Photosynthesis', w * 0.75, axY1 - 2);

  photCarriers.forEach(c => {
    const clampedE = Math.max(minE, Math.min(maxE, c.e));
    const cy = eToY2(clampedE);
    ctx.beginPath(); ctx.arc(w * c.x, cy, 5, 0, Math.PI * 2);
    ctx.fillStyle = c.color; ctx.fill();
    ctx.fillStyle = c.color; ctx.font = '9px Arial'; ctx.textAlign = 'left';
    ctx.fillText(c.name, w * c.x + 7, cy + 4);
  });

  ctx.fillStyle = '#718096'; ctx.font = 'bold 12px Arial'; ctx.textAlign = 'center';
  ctx.fillText('ΔE°\' = E°\'(acceptor) − E°\'(donor) | ΔG°\' = −nFΔE°\'', w * 0.5, h * 0.96);
}

static drawElectronTowerRespiration(ctx, w, h, location) {
  const bg = ctx.createLinearGradient(0, 0, 0, h); bg.addColorStop(0, '#1A202C'); bg.addColorStop(1, '#2D3748');
  ctx.fillStyle = bg; ctx.fillRect(0, 0, w, h);
  ctx.strokeStyle = '#4A5568'; ctx.lineWidth = 3; ctx.strokeRect(0, 0, w, h);
  ctx.fillStyle = '#F7FAFC'; ctx.font = 'bold 18px Arial'; ctx.textAlign = 'center';
  ctx.fillText('ELECTRON TOWER — CELLULAR RESPIRATION', w * 0.5, h * 0.05);

  const carriers = [
    { name: 'NAD⁺/NADH', e: -0.32, atp: 2.5, color: '#FC8181' },
    { name: 'FMN/FMNH₂', e: -0.30, atp: null, color: '#F6AD55' },
    { name: 'FAD/FADH₂', e: -0.18, atp: 1.5, color: '#FCD34D' },
    { name: 'CoQ/CoQH₂ (UQ)', e: 0.045, atp: null, color: '#F6E05E' },
    { name: 'Cyt b', e: 0.077, atp: null, color: '#9AE6B4' },
    { name: 'Cyt c₁', e: 0.22, atp: null, color: '#68D391' },
    { name: 'Cyt c', e: 0.235, atp: null, color: '#48BB78' },
    { name: 'Cyt a/a₃', e: 0.35, atp: null, color: '#4FD1C5' },
    { name: 'O₂/H₂O', e: 0.816, atp: null, color: '#63B3ED' },
  ];

  const minE = -0.35, maxE = 0.85;
  const axX = w * 0.15, axY1 = h * 0.12, axY2 = h * 0.92;
  const eToY3 = (e) => axY2 - ((e - minE) / (maxE - minE)) * (axY2 - axY1);

  ctx.strokeStyle = '#718096'; ctx.lineWidth = 2;
  ctx.beginPath(); ctx.moveTo(axX, axY1); ctx.lineTo(axX, axY2); ctx.stroke();

  carriers.forEach(c => {
    const cy = eToY3(c.e);
    const barX = axX + 5, barW = w * 0.50;
    ctx.fillStyle = c.color + 'AA'; ctx.fillRect(barX, cy - 8, barW, 16);
    ctx.strokeStyle = c.color; ctx.lineWidth = 2;
    ctx.strokeRect(barX, cy - 8, barW, 16);
    ctx.fillStyle = c.color; ctx.font = 'bold 10px Arial'; ctx.textAlign = 'left'; ctx.textBaseline = 'middle';
    ctx.fillText(`${c.name}  (${c.e}V)`, barX + 5, cy);
    if (c.atp) {
      ctx.fillStyle = '#27AE60'; ctx.font = 'bold 11px Arial'; ctx.textAlign = 'right'; ctx.textBaseline = 'middle';
      ctx.fillText(`→ ${c.atp} ATP`, w * 0.92, cy);
    }
    // E value on axis
    ctx.fillStyle = '#A0AEC0'; ctx.font = '9px Arial'; ctx.textAlign = 'right'; ctx.textBaseline = 'middle';
    ctx.fillText(`${c.e}`, axX - 3, cy);
    ctx.textBaseline = 'alphabetic';
  });

  // Electron flow arrow
  this.drawArrow(ctx, w * 0.08, eToY3(-0.32), w * 0.08, eToY3(0.816), '#FC8181');
  ctx.fillStyle = '#FC8181'; ctx.font = 'bold 11px Arial'; ctx.textAlign = 'center';
  ctx.save(); ctx.translate(w * 0.05, (eToY3(-0.32) + eToY3(0.816)) / 2);
  ctx.rotate(-Math.PI / 2); ctx.fillText('e⁻ flow ↓', 0, 0); ctx.restore();

  ctx.fillStyle = '#A0AEC0'; ctx.font = '12px Arial'; ctx.textAlign = 'center';
  ctx.fillText('ΔE°\' = +1.14V (NADH→O₂) → ΔG°\' = −220 kJ/mol | Released energy drives ~2.5 ATP', w * 0.5, h * 0.96);
}

static drawElectronTowerPhotosynthesis(ctx, w, h, location) {
  const bg = ctx.createLinearGradient(0, 0, 0, h); bg.addColorStop(0, '#0F2027'); bg.addColorStop(1, '#1C4532');
  ctx.fillStyle = bg; ctx.fillRect(0, 0, w, h);
  ctx.strokeStyle = '#276749'; ctx.lineWidth = 3; ctx.strokeRect(0, 0, w, h);
  ctx.fillStyle = '#F0FFF4'; ctx.font = 'bold 18px Arial'; ctx.textAlign = 'center';
  ctx.fillText('ELECTRON TOWER — PHOTOSYNTHESIS (Z-scheme)', w * 0.5, h * 0.05);

  const carriers = [
    { name: 'P680*/Pheo', e: -0.61, light: true, color: '#F6AD55', note: 'PSII excited' },
    { name: 'QA → QB', e: -0.14, color: '#FCD34D' },
    { name: 'PQ pool', e: 0.045, color: '#68D391', note: 'H⁺ pumped' },
    { name: 'Cyt b₆f', e: 0.12, color: '#9B59B6', note: '→ATP' },
    { name: 'PC (Cu)', e: 0.37, color: '#63B3ED' },
    { name: 'P700 (ground)', e: 0.43, light: false, color: '#FC8181' },
    { name: 'P700* (excited)', e: -1.33, light: true, color: '#F6AD55', note: 'PSI excited' },
    { name: 'A₀/A₁', e: -1.05, color: '#FCD34D' },
    { name: 'Ferredoxin', e: -0.42, color: '#68D391' },
    { name: 'NADP⁺/NADPH', e: -0.32, color: '#9B59B6', note: '→NADPH' },
    { name: 'H₂O/O₂', e: 0.816, color: '#48BB78', note: 'OEC' },
    { name: 'P680 (ground)', e: 1.10, color: '#FC8181' },
  ];

  const minE = -1.4, maxE = 1.2;
  const axX = w * 0.12, axY1 = h * 0.12, axY2 = h * 0.92;
  const eToY4 = (e) => axY2 - ((e - minE) / (maxE - minE)) * (axY2 - axY1);

  ctx.strokeStyle = '#4A5568'; ctx.lineWidth = 2;
  ctx.beginPath(); ctx.moveTo(axX, axY1); ctx.lineTo(axX, axY2); ctx.stroke();
  [-1.4, -1.0, -0.5, 0, 0.5, 1.0].forEach(e => {
    const gy = eToY4(e);
    ctx.fillStyle = '#9AE6B4'; ctx.font = '9px Arial'; ctx.textAlign = 'right';
    ctx.fillText(`${e}V`, axX - 2, gy + 4);
    ctx.strokeStyle = 'rgba(74,85,104,0.3)'; ctx.lineWidth = 0.5;
    ctx.beginPath(); ctx.moveTo(axX, gy); ctx.lineTo(w * 0.98, gy); ctx.stroke();
  });

  carriers.forEach(c => {
    const cy = eToY4(c.e);
    ctx.fillStyle = c.color + 'BB'; ctx.fillRect(axX + 5, cy - 7, w * 0.5, 14);
    ctx.strokeStyle = c.color; ctx.lineWidth = 1.5;
    ctx.strokeRect(axX + 5, cy - 7, w * 0.5, 14);
    ctx.fillStyle = c.color; ctx.font = '9px Arial'; ctx.textAlign = 'left'; ctx.textBaseline = 'middle';
    ctx.fillText(`${c.name} (${c.e}V)${c.note ? '  ← ' + c.note : ''}`, axX + 8, cy);
    if (c.light) {
      ctx.fillStyle = '#F6E05E'; ctx.font = 'bold 9px Arial'; ctx.textAlign = 'right'; ctx.textBaseline = 'middle';
      ctx.fillText('hν', w * 0.65, cy);
    }
    ctx.textBaseline = 'alphabetic';
  });

  ctx.fillStyle = '#9AE6B4'; ctx.font = '12px Arial'; ctx.textAlign = 'center';
  ctx.fillText('Light boosts electrons against thermodynamic gradient | Z-shape = two light reactions', w * 0.5, h * 0.96);
}

static drawHalfReactions(ctx, w, h, location) {
  const bg = ctx.createLinearGradient(0, 0, 0, h); bg.addColorStop(0, '#EDF2F7'); bg.addColorStop(1, '#E2E8F0');
  ctx.fillStyle = bg; ctx.fillRect(0, 0, w, h);
  ctx.strokeStyle = '#718096'; ctx.lineWidth = 3; ctx.strokeRect(0, 0, w, h);
  ctx.fillStyle = '#1A202C'; ctx.font = 'bold 18px Arial'; ctx.textAlign = 'center';
  ctx.fillText('KEY HALF-REACTIONS & REDUCTION POTENTIALS', w * 0.5, h * 0.06);

  const halfRxns = [
    { rxn: 'O₂ + 4H⁺ + 4e⁻ → 2H₂O', e: '+0.816 V', color: '#3182CE', note: 'Final acceptor in ETC' },
    { rxn: 'Fe³⁺ + e⁻ → Fe²⁺ (Cyt c)', e: '+0.235 V', color: '#48BB78', note: 'Mobile carrier' },
    { rxn: 'CoQ + 2H⁺ + 2e⁻ → CoQH₂', e: '+0.045 V', color: '#F6AD55', note: 'Lipid-soluble quinone' },
    { rxn: 'Fumarate + 2H⁺ + 2e⁻ → Succinate', e: '+0.031 V', color: '#68D391', note: 'Complex II substrate' },
    { rxn: 'NAD⁺ + H⁺ + 2e⁻ → NADH', e: '−0.320 V', color: '#FC8181', note: 'Major electron donor' },
    { rxn: 'FMN + 2H⁺ + 2e⁻ → FMNH₂', e: '−0.300 V', color: '#F6E05E', note: 'Complex I cofactor' },
    { rxn: 'NADP⁺ + H⁺ + 2e⁻ → NADPH', e: '−0.320 V', color: '#D6BCFA', note: 'Photosynthesis product' },
    { rxn: '2H⁺ + 2e⁻ → H₂', e: '0.000 V', color: '#A0AEC0', note: 'Reference standard' },
    { rxn: 'CO₂ + 2H⁺ + 2e⁻ → HCOOH', e: '−0.432 V', color: '#FBD38D', note: 'Carbon fixation' },
    { rxn: 'Ferredoxin (ox) + e⁻ → Ferredoxin (red)', e: '−0.420 V', color: '#9AE6B4', note: 'PSI product' },
  ];

  halfRxns.forEach((r, i) => {
    const rowY = h * (0.13 + i * 0.085);
    ctx.fillStyle = r.color + '55'; ctx.fillRect(w * 0.02, rowY, w * 0.96, h * 0.075);
    ctx.strokeStyle = r.color; ctx.lineWidth = 1.5; ctx.strokeRect(w * 0.02, rowY, w * 0.96, h * 0.075);
    ctx.fillStyle = '#1A202C'; ctx.font = '11px Arial'; ctx.textAlign = 'left'; ctx.textBaseline = 'middle';
    ctx.fillText(r.rxn, w * 0.04, rowY + h * 0.025);
    ctx.fillStyle = r.color; ctx.font = 'bold 12px Arial'; ctx.textAlign = 'center';
    ctx.fillText(r.e, w * 0.73, rowY + h * 0.025);
    ctx.fillStyle = '#718096'; ctx.font = '10px Arial'; ctx.textAlign = 'right';
    ctx.fillText(r.note, w * 0.98, rowY + h * 0.060);
    ctx.textBaseline = 'alphabetic';
  });
}

// ─────────────────────────────────────────────────────────────

static drawProtonMotiveForce(ctx, x, y, width, height, stage, location) {
  ctx.save();
  ctx.translate(x, y);
  switch (stage) {
    case 'complete':
      this.drawProtonMotiveForcComplete(ctx, width, height, location);
      break;
    case 'components':
      this.drawPMFComponents(ctx, width, height, location);
      break;
    case 'mitochondria':
      this.drawPMFMitochondria(ctx, width, height, location);
      break;
    case 'chloroplast':
      this.drawPMFChloroplast(ctx, width, height, location);
      break;
    case 'uncouplers':
      this.drawPMFUncouplers(ctx, width, height, location);
      break;
  }
  ctx.restore();
}

static drawProtonMotiveForcComplete(ctx, w, h, location) {
  const bg = ctx.createLinearGradient(0, 0, 0, h);
  bg.addColorStop(0, '#1A202C'); bg.addColorStop(1, '#2D3748');
  ctx.fillStyle = bg; ctx.fillRect(0, 0, w, h);
  ctx.strokeStyle = '#4A5568'; ctx.lineWidth = 3; ctx.strokeRect(0, 0, w, h);

  ctx.fillStyle = '#F7FAFC'; ctx.font = 'bold 20px Arial'; ctx.textAlign = 'center';
  ctx.fillText('PROTON MOTIVE FORCE (PMF)', w * 0.5, h * 0.06);
  ctx.fillStyle = '#A0AEC0'; ctx.font = '13px Arial';
  ctx.fillText('Δp = ΔΨ − (2.303RT/F) × ΔpH  ≈  ΔΨ − 59 mV × ΔpH', w * 0.5, h * 0.11);

  // Membrane diagram
  const memY = h * 0.5;
  ctx.fillStyle = '#FC8181'; ctx.fillRect(0, memY - h * 0.05, w, h * 0.10);
  ctx.fillStyle = '#FFF'; ctx.font = 'bold 12px Arial'; ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
  ctx.fillText('MEMBRANE', w * 0.5, memY);
  ctx.textBaseline = 'alphabetic';

  // High H+ side (P-side)
  ctx.fillStyle = 'rgba(252,129,129,0.15)'; ctx.fillRect(0, 0, w, memY - h * 0.05);
  ctx.fillStyle = '#FC8181'; ctx.font = 'bold 14px Arial'; ctx.textAlign = 'center';
  ctx.fillText('P-SIDE (Positive / High H⁺)', w * 0.5, h * 0.20);
  ctx.fillStyle = '#FC8181'; ctx.font = '12px Arial';
  ctx.fillText('IMS (mito) | Thylakoid lumen (chloroplast)', w * 0.5, h * 0.27);

  // H+ ions scattered
  for (let i = 0; i < 10; i++) {
    ctx.fillStyle = `rgba(252, 129, 129, ${0.5 + (i % 3) * 0.2})`;
    ctx.font = 'bold 14px Arial'; ctx.textAlign = 'center';
    ctx.fillText('H⁺', w * (0.07 + (i % 5) * 0.19), h * (0.33 + Math.floor(i / 5) * 0.08));
  }

  // ΔΨ indicator (electric potential)
  ctx.strokeStyle = '#F6AD55'; ctx.lineWidth = 2; ctx.setLineDash([5, 3]);
  ctx.beginPath(); ctx.moveTo(w * 0.85, h * 0.15); ctx.lineTo(w * 0.85, h * 0.85); ctx.stroke();
  ctx.setLineDash([]);
  ctx.fillStyle = '#F6AD55'; ctx.font = 'bold 12px Arial'; ctx.textAlign = 'center';
  ctx.fillText('ΔΨ', w * 0.92, h * 0.35);
  ctx.fillText('(−180mV', w * 0.92, h * 0.40);
  ctx.fillText('mito)', w * 0.92, h * 0.44);
  ctx.fillText('+', w * 0.92, h * 0.23);
  ctx.fillText('−', w * 0.92, h * 0.70);
  this.drawArrow(ctx, w * 0.87, h * 0.30, w * 0.87, h * 0.70, '#F6AD55');

  // Low H+ side (N-side)
  ctx.fillStyle = 'rgba(154,230,180,0.15)'; ctx.fillRect(0, memY + h * 0.05, w, h - memY - h * 0.05);
  ctx.fillStyle = '#9AE6B4'; ctx.font = 'bold 14px Arial'; ctx.textAlign = 'center';
  ctx.fillText('N-SIDE (Negative / Low H⁺)', w * 0.5, h * 0.68);
  ctx.fillStyle = '#9AE6B4'; ctx.font = '12px Arial';
  ctx.fillText('Matrix (mito) | Stroma (chloroplast)', w * 0.5, h * 0.75);

  // ATP synthase
  ctx.fillStyle = '#27AE60'; ctx.fillRect(w * 0.42, memY - h * 0.08, w * 0.16, h * 0.16);
  ctx.strokeStyle = '#1C4532'; ctx.lineWidth = 2; ctx.strokeRect(w * 0.42, memY - h * 0.08, w * 0.16, h * 0.16);
  ctx.fillStyle = '#FFF'; ctx.font = 'bold 10px Arial'; ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
  ctx.fillText('ATP', w * 0.5, memY - 5); ctx.fillText('Synthase', w * 0.5, memY + 8);
  ctx.textBaseline = 'alphabetic';

  // PMF arrow
  this.drawArrow(ctx, w * 0.5, h * 0.40, w * 0.5, h * 0.46, '#27AE60');
  ctx.fillStyle = '#27AE60'; ctx.font = 'bold 11px Arial'; ctx.textAlign = 'left';
  ctx.fillText('H⁺ flows through', w * 0.53, h * 0.43);
  ctx.fillText('ATP synthase', w * 0.53, h * 0.47);

  ctx.fillStyle = '#F7FAFC'; ctx.font = 'bold 12px Arial'; ctx.textAlign = 'center';
  ctx.fillText('PMF = Δp ≈ −200 mV (mito) | ΔG = −FΔp = ~19 kJ/mol H⁺ | ~3 H⁺ per ATP', w * 0.5, h * 0.90);
  ctx.font = '11px Arial'; ctx.fillStyle = '#A0AEC0';
  ctx.fillText('PMF components: ΔΨ (electrical) + ΔpH (chemical) = Electrochemical gradient', w * 0.5, h * 0.95);
}

static drawPMFComponents(ctx, w, h, location) {
  const bg = ctx.createLinearGradient(0, 0, 0, h); bg.addColorStop(0, '#1A202C'); bg.addColorStop(1, '#2D3748');
  ctx.fillStyle = bg; ctx.fillRect(0, 0, w, h);
  ctx.strokeStyle = '#4A5568'; ctx.lineWidth = 3; ctx.strokeRect(0, 0, w, h);
  ctx.fillStyle = '#F7FAFC'; ctx.font = 'bold 18px Arial'; ctx.textAlign = 'center';
  ctx.fillText('PMF COMPONENTS: ΔΨ vs ΔpH', w * 0.5, h * 0.06);

  // Side-by-side comparison: mitochondria vs chloroplast
  // Mitochondria
  ctx.fillStyle = '#744210'; ctx.fillRect(w * 0.04, h * 0.13, w * 0.42, h * 0.72);
  ctx.strokeStyle = '#D97706'; ctx.lineWidth = 2; ctx.strokeRect(w * 0.04, h * 0.13, w * 0.42, h * 0.72);
  ctx.fillStyle = '#FEF3C7'; ctx.font = 'bold 14px Arial'; ctx.textAlign = 'center';
  ctx.fillText('MITOCHONDRIA', w * 0.25, h * 0.19);

  const mitoData = [
    { label: 'ΔΨ (membrane potential)', value: '−180 mV', pct: '~70%', color: '#F6AD55' },
    { label: 'ΔpH (1 unit × 59 mV)', value: '−59 mV', pct: '~30%', color: '#68D391' },
    { label: 'Total PMF (Δp)', value: '~−220 mV', pct: '100%', color: '#63B3ED' },
  ];
  mitoData.forEach((d, i) => {
    const barY = h * (0.24 + i * 0.18);
    ctx.fillStyle = d.color; ctx.fillRect(w * 0.06, barY, w * 0.36 * (parseFloat(d.pct) / 100), h * 0.12);
    ctx.strokeStyle = '#FFF'; ctx.lineWidth = 1; ctx.strokeRect(w * 0.06, barY, w * 0.36 * (parseFloat(d.pct) / 100), h * 0.12);
    ctx.fillStyle = '#FFF'; ctx.font = '10px Arial'; ctx.textAlign = 'left'; ctx.textBaseline = 'middle';
    ctx.fillText(`${d.label}: ${d.value} (${d.pct})`, w * 0.07, barY + h * 0.06);
    ctx.textBaseline = 'alphabetic';
  });
  ctx.fillStyle = '#FEF3C7'; ctx.font = '11px Arial'; ctx.textAlign = 'center';
  ctx.fillText('ΔΨ DOMINATES in mitochondria', w * 0.25, h * 0.74);
  ctx.fillText('pH: IMS ~7.2 → Matrix ~8.0', w * 0.25, h * 0.79);

  // Chloroplast
  ctx.fillStyle = '#1C4532'; ctx.fillRect(w * 0.54, h * 0.13, w * 0.42, h * 0.72);
  ctx.strokeStyle = '#276749'; ctx.lineWidth = 2; ctx.strokeRect(w * 0.54, h * 0.13, w * 0.42, h * 0.72);
  ctx.fillStyle = '#C6F6D5'; ctx.font = 'bold 14px Arial'; ctx.textAlign = 'center';
  ctx.fillText('CHLOROPLAST', w * 0.75, h * 0.19);

  const chlData = [
    { label: 'ΔΨ (small, ~0 mV)', value: '~−30 mV', pct: '~30%', color: '#F6AD55' },
    { label: 'ΔpH (3 units × 59 mV)', value: '−177 mV', pct: '~70%', color: '#68D391' },
    { label: 'Total PMF (Δp)', value: '~−200 mV', pct: '100%', color: '#63B3ED' },
  ];
  chlData.forEach((d, i) => {
    const barY = h * (0.24 + i * 0.18);
    ctx.fillStyle = d.color; ctx.fillRect(w * 0.56, barY, w * 0.36 * (parseFloat(d.pct) / 100), h * 0.12);
    ctx.strokeStyle = '#FFF'; ctx.lineWidth = 1; ctx.strokeRect(w * 0.56, barY, w * 0.36 * (parseFloat(d.pct) / 100), h * 0.12);
    ctx.fillStyle = '#FFF'; ctx.font = '10px Arial'; ctx.textAlign = 'left'; ctx.textBaseline = 'middle';
    ctx.fillText(`${d.label}: ${d.value} (${d.pct})`, w * 0.57, barY + h * 0.06);
    ctx.textBaseline = 'alphabetic';
  });
  ctx.fillStyle = '#C6F6D5'; ctx.font = '11px Arial'; ctx.textAlign = 'center';
  ctx.fillText('ΔpH DOMINATES in chloroplasts', w * 0.75, h * 0.74);
  ctx.fillText('pH: Lumen ~5.0 → Stroma ~8.0', w * 0.75, h * 0.79);

  ctx.fillStyle = '#A0AEC0'; ctx.font = 'bold 12px Arial'; ctx.textAlign = 'center';
  ctx.fillText('Both systems maintain similar total PMF (~200mV) but via different contributions', w * 0.5, h * 0.93);
}

static drawPMFMitochondria(ctx, w, h, location) {
  const bg = ctx.createLinearGradient(0, 0, 0, h); bg.addColorStop(0, '#FFF9E6'); bg.addColorStop(1, '#FFF0C2');
  ctx.fillStyle = bg; ctx.fillRect(0, 0, w, h);
  ctx.strokeStyle = '#D97706'; ctx.lineWidth = 3; ctx.strokeRect(0, 0, w, h);
  ctx.fillStyle = '#78350F'; ctx.font = 'bold 18px Arial'; ctx.textAlign = 'center';
  ctx.fillText('PMF IN MITOCHONDRIA — QUANTITATIVE', w * 0.5, h * 0.06);

  // Quantitative diagram
  const items = [
    { label: 'Complex I pumps', value: '4 H⁺ per 2e⁻ (per NADH)', color: '#3182CE' },
    { label: 'Complex III pumps (Q-cycle)', value: '4 H⁺ per 2e⁻', color: '#9B59B6' },
    { label: 'Complex IV pumps', value: '2 H⁺ per 2e⁻', color: '#E53E3E' },
    { label: 'Total per NADH', value: '10 H⁺ pumped', color: '#DD6B20' },
    { label: 'Total per FADH₂', value: '6 H⁺ pumped (skips CI)', color: '#D97706' },
    { label: 'ATP synthase uses', value: '~3 H⁺ per ATP', color: '#27AE60' },
    { label: 'Phosphate transporter', value: '1 H⁺ per ATP exported', color: '#276749' },
    { label: 'Effective H⁺ per ATP', value: '~3-4 H⁺ total', color: '#1C4532' },
    { label: 'P/O ratio NADH', value: '10/4 = 2.5 ATP', color: '#2B6CB0' },
    { label: 'P/O ratio FADH₂', value: '6/4 = 1.5 ATP', color: '#3182CE' },
  ];

  items.forEach((item, i) => {
    const rowY = h * (0.14 + i * 0.082);
    ctx.fillStyle = item.color + '33'; ctx.fillRect(w * 0.03, rowY, w * 0.94, h * 0.072);
    ctx.strokeStyle = item.color; ctx.lineWidth = 1.5; ctx.strokeRect(w * 0.03, rowY, w * 0.94, h * 0.072);
    ctx.fillStyle = item.color; ctx.font = 'bold 11px Arial'; ctx.textAlign = 'left'; ctx.textBaseline = 'middle';
    ctx.fillText(item.label + ':', w * 0.05, rowY + h * 0.036);
    ctx.fillStyle = '#2D3748'; ctx.font = '11px Arial'; ctx.textAlign = 'right';
    ctx.fillText(item.value, w * 0.97, rowY + h * 0.036);
    ctx.textBaseline = 'alphabetic';
  });
}

static drawPMFChloroplast(ctx, w, h, location) {
  const bg = ctx.createLinearGradient(0, 0, 0, h); bg.addColorStop(0, '#F0FFF4'); bg.addColorStop(1, '#C6F6D5');
  ctx.fillStyle = bg; ctx.fillRect(0, 0, w, h);
  ctx.strokeStyle = '#276749'; ctx.lineWidth = 3; ctx.strokeRect(0, 0, w, h);
  ctx.fillStyle = '#1C4532'; ctx.font = 'bold 18px Arial'; ctx.textAlign = 'center';
  ctx.fillText('PMF IN CHLOROPLASTS — QUANTITATIVE', w * 0.5, h * 0.06);

  const items = [
    { label: 'PSII water splitting', value: '4 H⁺ into lumen per 4e⁻', color: '#48BB78' },
    { label: 'Cytochrome b₆f (Q-cycle)', value: '8 H⁺ into lumen per 4e⁻', color: '#9B59B6' },
    { label: 'Total H⁺ into lumen per NADPH', value: '~3 H⁺ per electron', color: '#276749' },
    { label: 'pH gradient created', value: 'Lumen pH ~5 | Stroma pH ~8 (ΔpH = 3)', color: '#E53E3E' },
    { label: 'ΔpH contribution', value: '3 × 59 mV = 177 mV', color: '#DD6B20' },
    { label: 'ΔΨ contribution', value: '~20-30 mV (ions compensate)', color: '#D97706' },
    { label: 'Total PMF', value: '~200 mV', color: '#27AE60' },
    { label: 'CF₀CF₁ uses per ATP', value: '~14 H⁺/ring → 3-4 H⁺/ATP', color: '#1C4532' },
    { label: 'Linear electron flow ATP yield', value: '~1.28-1.5 ATP per NADPH', color: '#2B6CB0' },
    { label: 'Calvin cycle needs', value: '3 ATP + 2 NADPH per CO₂ fixed', color: '#276749' },
  ];

  items.forEach((item, i) => {
    const rowY = h * (0.14 + i * 0.082);
    ctx.fillStyle = item.color + '33'; ctx.fillRect(w * 0.03, rowY, w * 0.94, h * 0.072);
    ctx.strokeStyle = item.color; ctx.lineWidth = 1.5; ctx.strokeRect(w * 0.03, rowY, w * 0.94, h * 0.072);
    ctx.fillStyle = item.color; ctx.font = 'bold 11px Arial'; ctx.textAlign = 'left'; ctx.textBaseline = 'middle';
    ctx.fillText(item.label + ':', w * 0.05, rowY + h * 0.036);
    ctx.fillStyle = '#2D3748'; ctx.font = '11px Arial'; ctx.textAlign = 'right';
    ctx.fillText(item.value, w * 0.97, rowY + h * 0.036);
    ctx.textBaseline = 'alphabetic';
  });
}

static drawPMFUncouplers(ctx, w, h, location) {
  const bg = ctx.createLinearGradient(0, 0, 0, h); bg.addColorStop(0, '#FFF5F5'); bg.addColorStop(1, '#FED7D7');
  ctx.fillStyle = bg; ctx.fillRect(0, 0, w, h);
  ctx.strokeStyle = '#FC8181'; ctx.lineWidth = 3; ctx.strokeRect(0, 0, w, h);
  ctx.fillStyle = '#742A2A'; ctx.font = 'bold 18px Arial'; ctx.textAlign = 'center';
  ctx.fillText('PMF UNCOUPLERS & INHIBITORS', w * 0.5, h * 0.06);
  ctx.fillStyle = '#555'; ctx.font = '12px Arial';
  ctx.fillText('Agents that dissipate PMF or block ETC/ATP synthase', w * 0.5, h * 0.12);

  const agents = [
    { name: 'DNP (dinitrophenol)', type: 'Uncoupler', mechanism: 'Lipophilic weak acid carries H⁺ across IMM, dissipates ΔpH', effect: 'Heat production, weight loss (dangerous)', color: '#FC8181' },
    { name: 'FCCP / CCCP', type: 'Uncoupler', mechanism: 'Protonophore — shuttles H⁺ across membrane without ATP synthase', effect: 'Used in research (Seahorse assay)', color: '#F6AD55' },
    { name: 'UCP1 (thermogenin)', type: 'Natural uncoupler', mechanism: 'H⁺ channel in brown adipose tissue IMM', effect: 'Non-shivering thermogenesis', color: '#FCD34D' },
    { name: 'Oligomycin', type: 'ATP synthase inhibitor', mechanism: 'Blocks F₀ proton channel — prevents ATP synthesis', effect: 'PMF builds up, ETC slows', color: '#68D391' },
    { name: 'Cyanide (CN⁻)', type: 'Complex IV inhibitor', mechanism: 'Binds Cu-B center, blocks O₂ reduction', effect: 'ETC stops, rapid ATP depletion, lethal', color: '#9B59B6' },
    { name: 'Rotenone', type: 'Complex I inhibitor', mechanism: 'Blocks NADH→UQ electron transfer', effect: 'NADH accumulates, linked to Parkinsonism', color: '#3182CE' },
    { name: 'Antimycin A', type: 'Complex III inhibitor', mechanism: 'Blocks Q_i site in Cyt b₆f/b/c₁', effect: 'ROS production, research tool', color: '#E53E3E' },
  ];

  agents.forEach((a, i) => {
    const rowY = h * (0.16 + i * 0.118);
    ctx.fillStyle = a.color + '44'; ctx.fillRect(w * 0.02, rowY, w * 0.96, h * 0.105);
    ctx.strokeStyle = a.color; ctx.lineWidth = 1.5; ctx.strokeRect(w * 0.02, rowY, w * 0.96, h * 0.105);
    ctx.fillStyle = a.color; ctx.font = 'bold 11px Arial'; ctx.textAlign = 'left'; ctx.textBaseline = 'top';
    ctx.fillText(`${a.name} — ${a.type}`, w * 0.03, rowY + h * 0.010);
    ctx.fillStyle = '#2D3748'; ctx.font = '10px Arial';
    ctx.fillText(`Mechanism: ${a.mechanism}`, w * 0.03, rowY + h * 0.042);
    ctx.fillStyle = '#718096';
    ctx.fillText(`Effect: ${a.effect}`, w * 0.03, rowY + h * 0.072);
    ctx.textBaseline = 'alphabetic';
  });
}
