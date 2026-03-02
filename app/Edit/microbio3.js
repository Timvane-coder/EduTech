// ============================================================
// BACTERIA COMPLETE SYSTEMS
// ============================================================

static drawGramStainComparison(ctx, x, y, width, height, type, structure) {
  ctx.save();
  ctx.translate(x, y);

  switch (structure) {
    case 'complete':
      this.drawGramStainFull(ctx, {}, width, height);
      break;
    case 'gram-positive-wall':
      this.drawGramPositiveWall(ctx, {}, width, height);
      break;
    case 'gram-negative-wall':
      this.drawGramNegativeWall(ctx, {}, width, height);
      break;
    case 'stain-crystal-violet':
      this.drawCrystalVioletStep(ctx, {}, width, height);
      break;
    case 'stain-iodine':
      this.drawIodineStep(ctx, {}, width, height);
      break;
    case 'stain-decolorize':
      this.drawDecolorizeStep(ctx, {}, width, height);
      break;
    case 'stain-safranin':
      this.drawSafraninStep(ctx, {}, width, height);
      break;
  }

  ctx.restore();
}

static drawGramStainFull(ctx, color, w, h) {
  ctx.fillStyle = '#ECF0F1';
  ctx.fillRect(0, 0, w, h);

  ctx.fillStyle = '#2C3E50';
  ctx.font = `bold ${w * 0.045}px Arial`;
  ctx.fillText('Gram Stain Comparison', w * 0.25, h * 0.06);

  // Divider
  ctx.strokeStyle = '#BDC3C7';
  ctx.lineWidth = 2;
  ctx.setLineDash([6, 4]);
  ctx.beginPath();
  ctx.moveTo(w * 0.5, h * 0.08);
  ctx.lineTo(w * 0.5, h * 0.98);
  ctx.stroke();
  ctx.setLineDash([]);

  ctx.fillStyle = '#8E44AD';
  ctx.font = `bold ${w * 0.038}px Arial`;
  ctx.fillText('Gram-Positive (+)', w * 0.05, h * 0.12);
  ctx.fillStyle = '#E91E63';
  ctx.fillText('Gram-Negative (−)', w * 0.55, h * 0.12);

  this.drawGramPositiveWall(ctx, {}, w * 0.45, h * 0.82, 0, h * 0.15);
  this.drawGramNegativeWall(ctx, {}, w * 0.45, h * 0.82, w * 0.52, h * 0.15);
}

static drawGramPositiveWall(ctx, color, w, h, ox = 0, oy = 0) {
  const cx = ox + w * 0.5;
  const cy = oy + h * 0.5;

  // Thick peptidoglycan
  ctx.fillStyle = '#D7BDE2';
  ctx.strokeStyle = '#8E44AD';
  ctx.lineWidth = 18;
  ctx.beginPath();
  ctx.ellipse(cx, cy, w * 0.32, h * 0.28, 0, 0, Math.PI * 2);
  ctx.fill();
  ctx.stroke();

  // Teichoic acids
  for (let i = 0; i < 16; i++) {
    const angle = (i / 16) * Math.PI * 2;
    ctx.strokeStyle = '#A569BD';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(cx + Math.cos(angle) * w * 0.32, cy + Math.sin(angle) * h * 0.28);
    ctx.lineTo(cx + Math.cos(angle) * w * 0.42, cy + Math.sin(angle) * h * 0.36);
    ctx.stroke();
    ctx.fillStyle = '#27AE60';
    ctx.beginPath();
    ctx.arc(cx + Math.cos(angle) * w * 0.42, cy + Math.sin(angle) * h * 0.36, w * 0.012, 0, Math.PI * 2);
    ctx.fill();
  }

  // Membrane
  ctx.strokeStyle = '#E74C3C';
  ctx.lineWidth = 4;
  ctx.fillStyle = '#FADBD8';
  ctx.beginPath();
  ctx.ellipse(cx, cy, w * 0.2, h * 0.17, 0, 0, Math.PI * 2);
  ctx.fill();
  ctx.stroke();

  // Cytoplasm
  ctx.fillStyle = '#F9E79F';
  ctx.beginPath();
  ctx.ellipse(cx, cy, w * 0.17, h * 0.14, 0, 0, Math.PI * 2);
  ctx.fill();

  // Stain color (purple)
  ctx.fillStyle = 'rgba(142,68,173,0.35)';
  ctx.beginPath();
  ctx.ellipse(cx, cy, w * 0.32, h * 0.28, 0, 0, Math.PI * 2);
  ctx.fill();

  ctx.fillStyle = '#2C3E50';
  ctx.font = `${w * 0.055}px Arial`;
  ctx.fillText('Thick PG wall', ox + w * 0.05, oy + h * 0.88);
  ctx.fillText('No outer membrane', ox + w * 0.05, oy + h * 0.94);
  ctx.fillText('Retains crystal violet', ox + w * 0.05, oy + h * 1.0);
}

static drawGramNegativeWall(ctx, color, w, h, ox = 0, oy = 0) {
  const cx = ox + w * 0.5;
  const cy = oy + h * 0.5;

  // Outer membrane
  ctx.strokeStyle = '#E91E63';
  ctx.lineWidth = 8;
  ctx.fillStyle = '#FADBD8';
  ctx.beginPath();
  ctx.ellipse(cx, cy, w * 0.38, h * 0.33, 0, 0, Math.PI * 2);
  ctx.fill();
  ctx.stroke();

  // LPS spikes
  for (let i = 0; i < 18; i++) {
    const angle = (i / 18) * Math.PI * 2;
    ctx.strokeStyle = '#C0392B';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(cx + Math.cos(angle) * w * 0.38, cy + Math.sin(angle) * h * 0.33);
    ctx.lineTo(cx + Math.cos(angle) * w * 0.46, cy + Math.sin(angle) * h * 0.4);
    ctx.stroke();
  }

  // Thin peptidoglycan
  ctx.strokeStyle = '#8E44AD';
  ctx.lineWidth = 3;
  ctx.beginPath();
  ctx.ellipse(cx, cy, w * 0.28, h * 0.24, 0, 0, Math.PI * 2);
  ctx.stroke();

  // Periplasm
  ctx.fillStyle = 'rgba(46,204,113,0.2)';
  ctx.beginPath();
  ctx.ellipse(cx, cy, w * 0.28, h * 0.24, 0, 0, Math.PI * 2);
  ctx.fill();

  // Inner membrane
  ctx.strokeStyle = '#E74C3C';
  ctx.lineWidth = 4;
  ctx.fillStyle = '#F9E79F';
  ctx.beginPath();
  ctx.ellipse(cx, cy, w * 0.2, h * 0.17, 0, 0, Math.PI * 2);
  ctx.fill();
  ctx.stroke();

  // Stain (pink/red - decolorized, only safranin)
  ctx.fillStyle = 'rgba(231,76,60,0.25)';
  ctx.beginPath();
  ctx.ellipse(cx, cy, w * 0.38, h * 0.33, 0, 0, Math.PI * 2);
  ctx.fill();

  ctx.fillStyle = '#2C3E50';
  ctx.font = `${w * 0.055}px Arial`;
  ctx.fillText('Thin PG + outer membrane', ox + w * 0.02, oy + h * 0.88);
  ctx.fillText('LPS on outer membrane', ox + w * 0.02, oy + h * 0.94);
  ctx.fillText('Loses crystal violet', ox + w * 0.02, oy + h * 1.0);
}

static drawCrystalVioletStep(ctx, color, w, h) {
  ctx.fillStyle = '#EDE7F6';
  ctx.fillRect(0, 0, w, h);
  ctx.fillStyle = '#4A148C';
  ctx.font = `bold ${w * 0.042}px Arial`;
  ctx.fillText('Step 1: Crystal Violet Applied', w * 0.05, h * 0.08);

  [0.28, 0.72].forEach((px) => {
    const cx = w * px, cy = h * 0.5;
    ctx.fillStyle = 'rgba(106,27,154,0.6)';
    ctx.beginPath();
    ctx.ellipse(cx, cy, w * 0.18, h * 0.28, 0, 0, Math.PI * 2);
    ctx.fill();
    ctx.strokeStyle = '#4A148C';
    ctx.lineWidth = 4;
    ctx.stroke();
  });

  ctx.fillStyle = '#4A148C';
  ctx.font = `${w * 0.035}px Arial`;
  ctx.fillText('Both gram+ and gram− stain purple', w * 0.1, h * 0.88);
}

static drawIodineStep(ctx, color, w, h) {
  ctx.fillStyle = '#FFF8E1';
  ctx.fillRect(0, 0, w, h);
  ctx.fillStyle = '#E65100';
  ctx.font = `bold ${w * 0.042}px Arial`;
  ctx.fillText('Step 2: Iodine (Mordant)', w * 0.05, h * 0.08);

  [0.28, 0.72].forEach((px) => {
    const cx = w * px, cy = h * 0.5;
    ctx.fillStyle = 'rgba(74,20,140,0.75)';
    ctx.beginPath();
    ctx.ellipse(cx, cy, w * 0.18, h * 0.28, 0, 0, Math.PI * 2);
    ctx.fill();
    ctx.strokeStyle = '#E65100';
    ctx.lineWidth = 5;
    ctx.stroke();
  });

  ctx.fillStyle = '#BF360C';
  ctx.font = `${w * 0.035}px Arial`;
  ctx.fillText('Iodine locks CV into thick PG wall', w * 0.08, h * 0.88);
}

static drawDecolorizeStep(ctx, color, w, h) {
  ctx.fillStyle = '#E8F5E9';
  ctx.fillRect(0, 0, w, h);
  ctx.fillStyle = '#1B5E20';
  ctx.font = `bold ${w * 0.042}px Arial`;
  ctx.fillText('Step 3: Decolorize (Ethanol/Acetone)', w * 0.05, h * 0.08);

  // Gram+ retains purple
  ctx.fillStyle = 'rgba(74,20,140,0.7)';
  ctx.beginPath();
  ctx.ellipse(w * 0.28, h * 0.5, w * 0.18, h * 0.28, 0, 0, Math.PI * 2);
  ctx.fill();
  ctx.strokeStyle = '#4A148C';
  ctx.lineWidth = 4;
  ctx.stroke();

  // Gram- loses stain (colorless)
  ctx.fillStyle = 'rgba(200,200,200,0.3)';
  ctx.beginPath();
  ctx.ellipse(w * 0.72, h * 0.5, w * 0.18, h * 0.28, 0, 0, Math.PI * 2);
  ctx.fill();
  ctx.strokeStyle = '#90A4AE';
  ctx.lineWidth = 4;
  ctx.stroke();

  ctx.fillStyle = '#2C3E50';
  ctx.font = `${w * 0.033}px Arial`;
  ctx.fillText('Gram+ (purple)', w * 0.15, h * 0.84);
  ctx.fillText('Gram− (colorless)', w * 0.58, h * 0.84);
}

static drawSafraninStep(ctx, color, w, h) {
  ctx.fillStyle = '#FCE4EC';
  ctx.fillRect(0, 0, w, h);
  ctx.fillStyle = '#880E4F';
  ctx.font = `bold ${w * 0.042}px Arial`;
  ctx.fillText('Step 4: Safranin Counterstain', w * 0.05, h * 0.08);

  // Gram+ stays purple
  ctx.fillStyle = 'rgba(74,20,140,0.7)';
  ctx.beginPath();
  ctx.ellipse(w * 0.28, h * 0.5, w * 0.18, h * 0.28, 0, 0, Math.PI * 2);
  ctx.fill();
  ctx.strokeStyle = '#4A148C';
  ctx.lineWidth = 4;
  ctx.stroke();

  // Gram- picks up safranin (pink/red)
  ctx.fillStyle = 'rgba(233,30,99,0.55)';
  ctx.beginPath();
  ctx.ellipse(w * 0.72, h * 0.5, w * 0.18, h * 0.28, 0, 0, Math.PI * 2);
  ctx.fill();
  ctx.strokeStyle = '#C2185B';
  ctx.lineWidth = 4;
  ctx.stroke();

  ctx.fillStyle = '#2C3E50';
  ctx.font = `${w * 0.033}px Arial`;
  ctx.fillText('Gram+ = Purple', w * 0.15, h * 0.84);
  ctx.fillText('Gram− = Pink/Red', w * 0.57, h * 0.84);
}

// ─────────────────────────────────────────────────────────────

static drawBinaryFission(ctx, x, y, width, height, type, structure) {
  ctx.save();
  ctx.translate(x, y);

  switch (structure) {
    case 'complete':
      this.drawBinaryFissionFull(ctx, {}, width, height);
      break;
    case 'stage-normal':
      this.drawBinaryFissionStage(ctx, {}, width, height, 0);
      break;
    case 'stage-elongation':
      this.drawBinaryFissionStage(ctx, {}, width, height, 1);
      break;
    case 'stage-septum':
      this.drawBinaryFissionStage(ctx, {}, width, height, 2);
      break;
    case 'stage-division':
      this.drawBinaryFissionStage(ctx, {}, width, height, 3);
      break;
    case 'stage-separation':
      this.drawBinaryFissionStage(ctx, {}, width, height, 4);
      break;
  }

  ctx.restore();
}

static drawBinaryFissionFull(ctx, color, w, h) {
  ctx.fillStyle = '#ECF0F1';
  ctx.fillRect(0, 0, w, h);
  ctx.fillStyle = '#2C3E50';
  ctx.font = `bold ${w * 0.042}px Arial`;
  ctx.fillText('Binary Fission Sequence', w * 0.25, h * 0.06);

  const stages = ['Normal', 'Elongation', 'Septum', 'Division', 'Separation'];
  const cols = 5;
  stages.forEach((label, i) => {
    const ox = (i / cols) * w;
    this.drawBinaryFissionStage(ctx, {}, w / cols, h * 0.78, ox, h * 0.12, i);
    ctx.fillStyle = '#2C3E50';
    ctx.font = `${w * 0.028}px Arial`;
    ctx.fillText(label, ox + w / cols * 0.15, h * 0.96);
    if (i < stages.length - 1) {
      ctx.fillStyle = '#27AE60';
      ctx.font = `bold ${w * 0.04}px Arial`;
      ctx.fillText('→', ox + w / cols * 0.82, h * 0.53);
    }
  });
}

static drawBinaryFissionStage(ctx, color, w, h, ox = 0, oy = 0, stage = 0) {
  const cx = ox + w * 0.5;
  const cy = oy + h * 0.5;
  const elongation = [1, 1.35, 1.6, 1.0, 1.0][stage];
  const split = stage === 4;

  if (split) {
    // Two daughter cells
    [-0.28, 0.28].forEach((dx) => {
      ctx.fillStyle = '#F9E79F';
      ctx.strokeStyle = '#884EA0';
      ctx.lineWidth = 3;
      ctx.beginPath();
      ctx.ellipse(cx + w * dx, cy, w * 0.17, h * 0.2, 0, 0, Math.PI * 2);
      ctx.fill();
      ctx.stroke();
      ctx.fillStyle = '#5DADE2';
      ctx.globalAlpha = 0.6;
      ctx.beginPath();
      ctx.ellipse(cx + w * dx, cy, w * 0.07, h * 0.08, 0, 0, Math.PI * 2);
      ctx.fill();
      ctx.globalAlpha = 1;
    });
    return;
  }

  ctx.fillStyle = '#F9E79F';
  ctx.strokeStyle = '#884EA0';
  ctx.lineWidth = 3;
  ctx.beginPath();
  ctx.ellipse(cx, cy, w * 0.22 * elongation, h * 0.22, 0, 0, Math.PI * 2);
  ctx.fill();
  ctx.stroke();

  // DNA (replicating from stage 1)
  if (stage === 0) {
    ctx.fillStyle = '#5DADE2';
    ctx.globalAlpha = 0.6;
    ctx.beginPath();
    ctx.ellipse(cx, cy, w * 0.1, h * 0.09, 0, 0, Math.PI * 2);
    ctx.fill();
    ctx.globalAlpha = 1;
  } else {
    [-0.15, 0.15].forEach((dx) => {
      ctx.fillStyle = '#5DADE2';
      ctx.globalAlpha = 0.6;
      ctx.beginPath();
      ctx.ellipse(cx + w * dx * elongation, cy, w * 0.08, h * 0.08, 0, 0, Math.PI * 2);
      ctx.fill();
      ctx.globalAlpha = 1;
    });
  }

  // Septum forming
  if (stage >= 2) {
    ctx.strokeStyle = '#E74C3C';
    ctx.lineWidth = stage === 2 ? 3 : 5;
    ctx.beginPath();
    ctx.moveTo(cx, cy - h * 0.22);
    ctx.lineTo(cx, cy + h * 0.22);
    ctx.stroke();
  }
}

// ─────────────────────────────────────────────────────────────

static drawConjugation(ctx, x, y, width, height, type, structure) {
  ctx.save();
  ctx.translate(x, y);

  switch (structure) {
    case 'complete':
      this.drawConjugationFull(ctx, {}, width, height);
      break;
    case 'pilus-contact':
      this.drawConjugationStep(ctx, {}, width, height, 0);
      break;
    case 'channel-form':
      this.drawConjugationStep(ctx, {}, width, height, 1);
      break;
    case 'plasmid-transfer':
      this.drawConjugationStep(ctx, {}, width, height, 2);
      break;
    case 'completion':
      this.drawConjugationStep(ctx, {}, width, height, 3);
      break;
  }

  ctx.restore();
}

static drawConjugationFull(ctx, color, w, h) {
  ctx.fillStyle = '#ECF0F1';
  ctx.fillRect(0, 0, w, h);
  ctx.fillStyle = '#2C3E50';
  ctx.font = `bold ${w * 0.042}px Arial`;
  ctx.fillText('Bacterial Conjugation', w * 0.3, h * 0.06);

  const stages = ['Pilus Contact', 'Channel Forms', 'Plasmid Transfer', 'Completion'];
  stages.forEach((label, i) => {
    const ox = (i / 4) * w;
    this.drawConjugationStep(ctx, {}, w / 4, h * 0.78, ox, h * 0.12, i);
    ctx.fillStyle = '#2C3E50';
    ctx.font = `${w * 0.026}px Arial`;
    ctx.fillText(label, ox + w * 0.02, h * 0.96);
    if (i < 3) {
      ctx.fillStyle = '#27AE60';
      ctx.font = `bold ${w * 0.04}px Arial`;
      ctx.fillText('→', ox + w / 4 * 0.84, h * 0.53);
    }
  });
}

static drawConjugationStep(ctx, color, w, h, ox = 0, oy = 0, step = 0) {
  const donorX = ox + w * 0.22;
  const recipX = ox + w * 0.78;
  const cy = oy + h * 0.5;

  // Donor cell
  ctx.fillStyle = '#FDEBD0';
  ctx.strokeStyle = '#884EA0';
  ctx.lineWidth = 3;
  ctx.beginPath();
  ctx.ellipse(donorX, cy, w * 0.15, h * 0.22, 0, 0, Math.PI * 2);
  ctx.fill();
  ctx.stroke();
  ctx.fillStyle = '#2C3E50';
  ctx.font = `${w * 0.05}px Arial`;
  ctx.fillText('F+', donorX - w * 0.04, cy - h * 0.27);

  // Recipient cell
  ctx.fillStyle = '#EAF2F8';
  ctx.strokeStyle = '#1A5276';
  ctx.lineWidth = 3;
  ctx.beginPath();
  ctx.ellipse(recipX, cy, w * 0.15, h * 0.22, 0, 0, Math.PI * 2);
  ctx.fill();
  ctx.stroke();
  ctx.fillStyle = '#2C3E50';
  ctx.fillText('F−', recipX - w * 0.04, cy - h * 0.27);

  // Donor plasmid
  ctx.strokeStyle = '#27AE60';
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.arc(donorX, cy, w * 0.07, 0, Math.PI * 2);
  ctx.stroke();

  if (step === 0) {
    // Sex pilus extended
    ctx.strokeStyle = '#E74C3C';
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.moveTo(donorX + w * 0.15, cy);
    ctx.lineTo(recipX - w * 0.15, cy);
    ctx.stroke();
  }

  if (step >= 1) {
    // Conjugation bridge/channel
    ctx.fillStyle = 'rgba(243,156,18,0.4)';
    ctx.fillRect(donorX + w * 0.15, cy - h * 0.04, recipX - donorX - w * 0.3, h * 0.08);
    ctx.strokeStyle = '#F39C12';
    ctx.lineWidth = 2;
    ctx.strokeRect(donorX + w * 0.15, cy - h * 0.04, recipX - donorX - w * 0.3, h * 0.08);
  }

  if (step === 2) {
    // Plasmid moving through channel
    ctx.strokeStyle = '#27AE60';
    ctx.lineWidth = 2;
    ctx.setLineDash([4, 3]);
    ctx.beginPath();
    ctx.moveTo(donorX + w * 0.15, cy);
    ctx.lineTo(recipX - w * 0.15, cy);
    ctx.stroke();
    ctx.setLineDash([]);
    // Arrow
    ctx.fillStyle = '#27AE60';
    ctx.beginPath();
    ctx.arc(w * 0.5 + ox, cy, w * 0.025, 0, Math.PI * 2);
    ctx.fill();
  }

  if (step === 3) {
    // Both cells have plasmid
    [donorX, recipX].forEach((cx2) => {
      ctx.strokeStyle = '#27AE60';
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.arc(cx2, cy, w * 0.07, 0, Math.PI * 2);
      ctx.stroke();
    });
    ctx.fillStyle = '#2C3E50';
    ctx.font = `${w * 0.04}px Arial`;
    ctx.fillText('F+', recipX - w * 0.04, cy + h * 0.3);
  }
}

// ─────────────────────────────────────────────────────────────

static drawTransformation(ctx, x, y, width, height, type, structure) {
  ctx.save();
  ctx.translate(x, y);

  switch (structure) {
    case 'complete':
      this.drawTransformationFull(ctx, {}, width, height);
      break;
    case 'dna-release':
      this.drawTransformationStep(ctx, {}, width, height, 0);
      break;
    case 'dna-binding':
      this.drawTransformationStep(ctx, {}, width, height, 1);
      break;
    case 'dna-uptake':
      this.drawTransformationStep(ctx, {}, width, height, 2);
      break;
    case 'integration':
      this.drawTransformationStep(ctx, {}, width, height, 3);
      break;
  }

  ctx.restore();
}

static drawTransformationFull(ctx, color, w, h) {
  ctx.fillStyle = '#ECF0F1';
  ctx.fillRect(0, 0, w, h);
  ctx.fillStyle = '#2C3E50';
  ctx.font = `bold ${w * 0.042}px Arial`;
  ctx.fillText('Bacterial Transformation', w * 0.28, h * 0.06);

  const labels = ['DNA Release', 'DNA Binding', 'Uptake', 'Integration'];
  labels.forEach((label, i) => {
    const ox = (i / 4) * w;
    this.drawTransformationStep(ctx, {}, w / 4, h * 0.78, ox, h * 0.12, i);
    ctx.fillStyle = '#2C3E50';
    ctx.font = `${w * 0.026}px Arial`;
    ctx.fillText(label, ox + w * 0.03, h * 0.96);
    if (i < 3) {
      ctx.fillStyle = '#27AE60';
      ctx.font = `bold ${w * 0.04}px Arial`;
      ctx.fillText('→', ox + w / 4 * 0.84, h * 0.53);
    }
  });
}

static drawTransformationStep(ctx, color, w, h, ox = 0, oy = 0, step = 0) {
  const cx = ox + w * 0.5;
  const cy = oy + h * 0.5;

  // Competent cell
  ctx.fillStyle = '#EAF2F8';
  ctx.strokeStyle = '#1A5276';
  ctx.lineWidth = 3;
  ctx.beginPath();
  ctx.ellipse(cx, cy, w * 0.22, h * 0.28, 0, 0, Math.PI * 2);
  ctx.fill();
  ctx.stroke();

  // Chromosome
  ctx.strokeStyle = '#2980B9';
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.ellipse(cx, cy, w * 0.1, h * 0.1, 0, 0, Math.PI * 2);
  ctx.stroke();

  if (step === 0) {
    // Free DNA fragments from lysed donor
    const dnaFrags = [[-0.38, -0.22], [0.35, -0.3], [-0.3, 0.28], [0.38, 0.2], [0.0, -0.38]];
    dnaFrags.forEach(([dx, dy]) => {
      ctx.strokeStyle = '#E74C3C';
      ctx.lineWidth = 3;
      ctx.beginPath();
      ctx.moveTo(cx + w * dx - w * 0.04, cy + h * dy);
      ctx.lineTo(cx + w * dx + w * 0.04, cy + h * dy);
      ctx.stroke();
    });
  }

  if (step === 1) {
    // DNA binding to surface receptors
    const bindFrags = [[-0.22, -0.3], [0.22, -0.3], [-0.22, 0.3], [0.22, 0.3]];
    bindFrags.forEach(([dx, dy]) => {
      ctx.strokeStyle = '#E74C3C';
      ctx.lineWidth = 3;
      ctx.beginPath();
      ctx.moveTo(cx + w * dx - w * 0.04, cy + h * dy);
      ctx.lineTo(cx + w * dx + w * 0.04, cy + h * dy);
      ctx.stroke();
      ctx.fillStyle = '#F39C12';
      ctx.beginPath();
      ctx.arc(cx + w * dx, cy + h * dy, w * 0.018, 0, Math.PI * 2);
      ctx.fill();
    });
  }

  if (step === 2) {
    // DNA being pulled into cell
    ctx.strokeStyle = '#E74C3C';
    ctx.lineWidth = 3;
    ctx.setLineDash([4, 3]);
    ctx.beginPath();
    ctx.moveTo(cx - w * 0.22, cy - h * 0.05);
    ctx.lineTo(cx - w * 0.1, cy - h * 0.05);
    ctx.stroke();
    ctx.setLineDash([]);
    ctx.fillStyle = '#E74C3C';
    ctx.beginPath();
    ctx.arc(cx - w * 0.12, cy - h * 0.05, w * 0.02, 0, Math.PI * 2);
    ctx.fill();
  }

  if (step === 3) {
    // DNA integrated into chromosome
    ctx.strokeStyle = '#E74C3C';
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.arc(cx, cy, w * 0.1, 0, Math.PI * 1.0);
    ctx.stroke();
    ctx.strokeStyle = '#2980B9';
    ctx.beginPath();
    ctx.arc(cx, cy, w * 0.1, Math.PI, Math.PI * 2);
    ctx.stroke();
    ctx.fillStyle = '#2C3E50';
    ctx.font = `${w * 0.042}px Arial`;
    ctx.fillText('Transformed!', cx - w * 0.18, cy + h * 0.38);
  }
}

// ─────────────────────────────────────────────────────────────

static drawTransduction(ctx, x, y, width, height, type, structure) {
  ctx.save();
  ctx.translate(x, y);

  switch (structure) {
    case 'complete':
      this.drawTransductionFull(ctx, {}, width, height);
      break;
    case 'phage-infects-donor':
      this.drawTransductionStep(ctx, {}, width, height, 0);
      break;
    case 'dna-packaging':
      this.drawTransductionStep(ctx, {}, width, height, 1);
      break;
    case 'phage-infects-recipient':
      this.drawTransductionStep(ctx, {}, width, height, 2);
      break;
    case 'dna-integration':
      this.drawTransductionStep(ctx, {}, width, height, 3);
      break;
  }

  ctx.restore();
}

static drawTransductionFull(ctx, color, w, h) {
  ctx.fillStyle = '#ECF0F1';
  ctx.fillRect(0, 0, w, h);
  ctx.fillStyle = '#2C3E50';
  ctx.font = `bold ${w * 0.042}px Arial`;
  ctx.fillText('Transduction (Phage-mediated Gene Transfer)', w * 0.1, h * 0.06);

  const labels = ['Phage Infects Donor', 'DNA Packaging', 'Infects Recipient', 'Integration'];
  labels.forEach((label, i) => {
    const ox = (i / 4) * w;
    this.drawTransductionStep(ctx, {}, w / 4, h * 0.78, ox, h * 0.12, i);
    ctx.fillStyle = '#2C3E50';
    ctx.font = `${w * 0.024}px Arial`;
    ctx.fillText(label, ox + w * 0.01, h * 0.96);
    if (i < 3) {
      ctx.fillStyle = '#E74C3C';
      ctx.font = `bold ${w * 0.04}px Arial`;
      ctx.fillText('→', ox + w / 4 * 0.84, h * 0.53);
    }
  });
}

static drawTransductionStep(ctx, color, w, h, ox = 0, oy = 0, step = 0) {
  const cx = ox + w * 0.5;
  const cy = oy + h * 0.5;

  const drawCell = (cellX, cellY, col) => {
    ctx.fillStyle = col;
    ctx.strokeStyle = '#884EA0';
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.ellipse(cellX, cellY, w * 0.18, h * 0.24, 0, 0, Math.PI * 2);
    ctx.fill();
    ctx.stroke();
  };

  const drawPhage = (px, py, scale = 1) => {
    ctx.fillStyle = '#E74C3C';
    ctx.beginPath();
    ctx.moveTo(px, py - h * 0.1 * scale);
    for (let i = 0; i < 6; i++) {
      const a = (i / 6) * Math.PI * 2;
      i === 0
        ? ctx.moveTo(px + Math.cos(a) * w * 0.06 * scale, py - h * 0.04 * scale + Math.sin(a) * h * 0.06 * scale)
        : ctx.lineTo(px + Math.cos(a) * w * 0.06 * scale, py - h * 0.04 * scale + Math.sin(a) * h * 0.06 * scale);
    }
    ctx.closePath();
    ctx.fill();
    ctx.strokeStyle = '#C0392B';
    ctx.lineWidth = 1.5;
    ctx.stroke();
    ctx.strokeStyle = '#922B21';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(px, py - h * 0.04 * scale + h * 0.06 * scale);
    ctx.lineTo(px, py + h * 0.04 * scale);
    ctx.stroke();
    for (let i = -1; i <= 1; i++) {
      ctx.beginPath();
      ctx.moveTo(px, py + h * 0.04 * scale);
      ctx.lineTo(px + w * 0.04 * scale * i, py + h * 0.09 * scale);
      ctx.stroke();
    }
  };

  if (step === 0) {
    drawCell(cx, cy, '#FDEBD0');
    ctx.strokeStyle = '#2980B9';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.ellipse(cx, cy, w * 0.08, h * 0.09, 0, 0, Math.PI * 2);
    ctx.stroke();
    drawPhage(cx, oy + h * 0.12, 0.85);
    ctx.strokeStyle = '#E74C3C';
    ctx.lineWidth = 2;
    ctx.setLineDash([3, 2]);
    ctx.beginPath();
    ctx.moveTo(cx, oy + h * 0.22);
    ctx.lineTo(cx, cy - h * 0.24);
    ctx.stroke();
    ctx.setLineDash([]);
  }

  if (step === 1) {
    drawCell(cx, cy, '#FDEBD0');
    // Phage DNA mixed with host DNA, accidental packaging
    ctx.strokeStyle = '#E74C3C';
    ctx.lineWidth = 2;
    ctx.setLineDash([4, 3]);
    ctx.beginPath();
    ctx.ellipse(cx, cy, w * 0.08, h * 0.08, 0.3, 0, Math.PI * 2);
    ctx.stroke();
    ctx.setLineDash([]);
    // New phage heads forming
    for (let i = -1; i <= 1; i++) {
      ctx.fillStyle = '#E74C3C';
      ctx.globalAlpha = 0.7;
      ctx.beginPath();
      for (let s = 0; s < 6; s++) {
        const a = (s / 6) * Math.PI * 2;
        s === 0
          ? ctx.moveTo(cx + i * w * 0.12 + Math.cos(a) * w * 0.04, cy + Math.sin(a) * h * 0.05)
          : ctx.lineTo(cx + i * w * 0.12 + Math.cos(a) * w * 0.04, cy + Math.sin(a) * h * 0.05);
      }
      ctx.closePath();
      ctx.fill();
      ctx.globalAlpha = 1;
    }
  }

  if (step === 2) {
    drawCell(cx + w * 0.22, cy, '#EAF2F8');
    drawPhage(cx - w * 0.1, cy - h * 0.1, 0.7);
    ctx.strokeStyle = '#E74C3C';
    ctx.lineWidth = 2;
    ctx.setLineDash([3, 2]);
    ctx.beginPath();
    ctx.moveTo(cx - w * 0.05, cy - h * 0.05);
    ctx.lineTo(cx + w * 0.1, cy);
    ctx.stroke();
    ctx.setLineDash([]);
  }

  if (step === 3) {
    drawCell(cx, cy, '#E8F8E8');
    ctx.strokeStyle = '#2980B9';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.arc(cx, cy, w * 0.08, 0, Math.PI * 1.3);
    ctx.stroke();
    ctx.strokeStyle = '#E74C3C';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.arc(cx, cy, w * 0.08, Math.PI * 1.3, Math.PI * 2);
    ctx.stroke();
    ctx.fillStyle = '#2C3E50';
    ctx.font = `${w * 0.038}px Arial`;
    ctx.fillText('Transductant', cx - w * 0.2, cy + h * 0.36);
  }
}

// ─────────────────────────────────────────────────────────────

static drawEndosporeFormation(ctx, x, y, width, height, type, structure) {
  ctx.save();
  ctx.translate(x, y);

  switch (structure) {
    case 'complete':
      this.drawEndosporeFormationFull(ctx, {}, width, height);
      break;
    case 'stage-1':
      this.drawEndosporeStage(ctx, {}, width, height, 1);
      break;
    case 'stage-2':
      this.drawEndosporeStage(ctx, {}, width, height, 2);
      break;
    case 'stage-3':
      this.drawEndosporeStage(ctx, {}, width, height, 3);
      break;
    case 'stage-4':
      this.drawEndosporeStage(ctx, {}, width, height, 4);
      break;
    case 'stage-5':
      this.drawEndosporeStage(ctx, {}, width, height, 5);
      break;
    case 'stage-6':
      this.drawEndosporeStage(ctx, {}, width, height, 6);
      break;
    case 'stage-7':
      this.drawEndosporeStage(ctx, {}, width, height, 7);
      break;
  }

  ctx.restore();
}

static drawEndosporeFormationFull(ctx, color, w, h) {
  ctx.fillStyle = '#ECF0F1';
  ctx.fillRect(0, 0, w, h);
  ctx.fillStyle = '#2C3E50';
  ctx.font = `bold ${w * 0.04}px Arial`;
  ctx.fillText('Endospore Formation (Sporulation Stages I–VII)', w * 0.08, h * 0.06);

  for (let i = 1; i <= 7; i++) {
    const col = (i - 1) % 4;
    const row = Math.floor((i - 1) / 4);
    const ox = col * (w / 4);
    const oy = row * (h * 0.44) + h * 0.1;
    this.drawEndosporeStage(ctx, {}, w / 4, h * 0.38, ox, oy, i);
    ctx.fillStyle = '#2C3E50';
    ctx.font = `${w * 0.026}px Arial`;
    ctx.fillText(`Stage ${i}`, ox + w * 0.03, oy + h * 0.42);
  }
}

static drawEndosporeStage(ctx, color, w, h, ox = 0, oy = 0, stage = 1) {
  const cx = ox + w * 0.5;
  const cy = oy + h * 0.5;

  // Mother cell outline
  ctx.fillStyle = '#FDEBD0';
  ctx.strokeStyle = '#884EA0';
  ctx.lineWidth = 3;
  ctx.beginPath();
  ctx.ellipse(cx, cy, w * 0.38, h * 0.28, 0, 0, Math.PI * 2);
  ctx.fill();
  ctx.stroke();

  const stageLabels = ['', 'Axial filament', 'Asymmetric septum', 'Engulfment', 'Cortex', 'Spore coat', 'Maturation', 'Lysis/Release'];

  if (stage === 1) {
    // Axial filament
    ctx.strokeStyle = '#E74C3C';
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.moveTo(cx - w * 0.3, cy);
    ctx.lineTo(cx + w * 0.3, cy);
    ctx.stroke();
  }

  if (stage >= 2) {
    // Forespore at one end
    const spX = stage === 7 ? cx + w * 0.1 : cx + w * 0.14;
    const spR = w * 0.12;
    const spH = h * 0.18;

    if (stage === 2) {
      // Asymmetric septum
      ctx.strokeStyle = '#E74C3C';
      ctx.lineWidth = 3;
      ctx.beginPath();
      ctx.moveTo(spX - spR, cy - h * 0.28);
      ctx.lineTo(spX - spR, cy + h * 0.28);
      ctx.stroke();
    }

    if (stage >= 3 && stage <= 6) {
      // Cortex layers progressively
      const colors = ['#FADBD8', '#F5CBA7', '#FAD7A0', '#A9DFBF'];
      for (let layer = Math.min(stage - 2, 3); layer >= 0; layer--) {
        ctx.fillStyle = colors[layer];
        ctx.strokeStyle = '#884EA0';
        ctx.lineWidth = stage >= layer + 3 ? 3 : 1;
        ctx.beginPath();
        ctx.ellipse(spX, cy, spR + layer * w * 0.025, spH + layer * h * 0.03, 0, 0, Math.PI * 2);
        ctx.fill();
        ctx.stroke();
      }

      // Forespore core
      ctx.fillStyle = '#F9E79F';
      ctx.beginPath();
      ctx.ellipse(spX, cy, spR, spH, 0, 0, Math.PI * 2);
      ctx.fill();
    }

    if (stage === 7) {
      // Released spore (lysis of mother cell)
      ctx.fillStyle = '#ECF0F1';
      ctx.fillRect(ox, oy, w, h);
      ctx.fillStyle = '#A9DFBF';
      ctx.strokeStyle = '#1E8449';
      ctx.lineWidth = 5;
      ctx.beginPath();
      ctx.ellipse(cx, cy, w * 0.22, h * 0.28, 0, 0, Math.PI * 2);
      ctx.fill();
      ctx.stroke();
      ctx.fillStyle = '#F9E79F';
      ctx.beginPath();
      ctx.ellipse(cx, cy, w * 0.14, h * 0.18, 0, 0, Math.PI * 2);
      ctx.fill();
      ctx.fillStyle = '#E74C3C';
      ctx.beginPath();
      ctx.ellipse(cx, cy, w * 0.06, h * 0.08, 0, 0, Math.PI * 2);
      ctx.fill();
    }
  }

  ctx.fillStyle = '#2C3E50';
  ctx.font = `${w * 0.075}px Arial`;
  ctx.fillText(stageLabels[stage], ox + w * 0.04, oy + h * 0.9);
}

// ─────────────────────────────────────────────────────────────

static drawBacterialGrowthCurve(ctx, x, y, width, height, type, structure) {
  ctx.save();
  ctx.translate(x, y);

  switch (structure) {
    case 'complete':
      this.drawGrowthCurveFull(ctx, {}, width, height);
      break;
    case 'lag-phase':
      this.drawGrowthPhase(ctx, {}, width, height, 'lag');
      break;
    case 'log-phase':
      this.drawGrowthPhase(ctx, {}, width, height, 'log');
      break;
    case 'stationary-phase':
      this.drawGrowthPhase(ctx, {}, width, height, 'stationary');
      break;
    case 'death-phase':
      this.drawGrowthPhase(ctx, {}, width, height, 'death');
      break;
  }

  ctx.restore();
}

static drawGrowthCurveFull(ctx, color, w, h) {
  ctx.fillStyle = '#0D1117';
  ctx.fillRect(0, 0, w, h);

  const pad = { l: w * 0.12, r: w * 0.05, t: h * 0.1, b: h * 0.15 };
  const gw = w - pad.l - pad.r;
  const gh = h - pad.t - pad.b;

  // Axes
  ctx.strokeStyle = '#ECF0F1';
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.moveTo(pad.l, pad.t);
  ctx.lineTo(pad.l, pad.t + gh);
  ctx.lineTo(pad.l + gw, pad.t + gh);
  ctx.stroke();

  // Axis labels
  ctx.fillStyle = '#ECF0F1';
  ctx.font = `${w * 0.035}px Arial`;
  ctx.fillText('log N', pad.l * 0.1, pad.t + gh * 0.4);
  ctx.fillText('Time', pad.l + gw * 0.44, pad.t + gh + h * 0.1);

  // Growth curve points
  const phases = [
    { x: 0, y: 0.85, col: '#F39C12', label: 'Lag' },
    { x: 0.22, y: 0.84, col: '#F39C12', label: '' },
    { x: 0.35, y: 0.65, col: '#27AE60', label: 'Log' },
    { x: 0.5, y: 0.35, col: '#27AE60', label: '' },
    { x: 0.65, y: 0.18, col: '#2980B9', label: 'Stationary' },
    { x: 0.78, y: 0.18, col: '#2980B9', label: '' },
    { x: 0.88, y: 0.38, col: '#E74C3C', label: 'Death' },
    { x: 1.0, y: 0.72, col: '#E74C3C', label: '' },
  ];

  // Draw curve
  ctx.beginPath();
  phases.forEach(({ x, y }, i) => {
    const px = pad.l + x * gw;
    const py = pad.t + y * gh;
    i === 0 ? ctx.moveTo(px, py) : ctx.lineTo(px, py);
  });
  ctx.strokeStyle = '#ECF0F1';
  ctx.lineWidth = 3;
  ctx.stroke();

  // Phase color fills and labels
  const phaseRanges = [
    { xStart: 0, xEnd: 0.28, col: 'rgba(243,156,18,0.15)', label: 'LAG', labelCol: '#F39C12' },
    { xStart: 0.28, xEnd: 0.58, col: 'rgba(39,174,96,0.15)', label: 'LOG', labelCol: '#27AE60' },
    { xStart: 0.58, xEnd: 0.78, col: 'rgba(41,128,185,0.15)', label: 'STATIONARY', labelCol: '#2980B9' },
    { xStart: 0.78, xEnd: 1.0, col: 'rgba(231,76,60,0.15)', label: 'DEATH', labelCol: '#E74C3C' },
  ];

  phaseRanges.forEach(({ xStart, xEnd, col, label, labelCol }) => {
    ctx.fillStyle = col;
    ctx.fillRect(pad.l + xStart * gw, pad.t, (xEnd - xStart) * gw, gh);
    ctx.strokeStyle = labelCol;
    ctx.lineWidth = 1;
    ctx.setLineDash([4, 3]);
    ctx.beginPath();
    ctx.moveTo(pad.l + xEnd * gw, pad.t);
    ctx.lineTo(pad.l + xEnd * gw, pad.t + gh);
    ctx.stroke();
    ctx.setLineDash([]);
    ctx.fillStyle = labelCol;
    ctx.font = `bold ${w * 0.032}px Arial`;
    ctx.fillText(label, pad.l + (xStart + (xEnd - xStart) * 0.2) * gw, pad.t + gh + h * 0.07);
  });

  ctx.fillStyle = '#ECF0F1';
  ctx.font = `bold ${w * 0.042}px Arial`;
  ctx.fillText('Bacterial Growth Curve', pad.l, pad.t - h * 0.04);
}

static drawGrowthPhase(ctx, color, w, h, phase) {
  const phaseData = {
    lag: { col: '#F39C12', title: 'Lag Phase', desc: 'Adaptation, no net growth', cells: 3 },
    log: { col: '#27AE60', title: 'Log (Exponential) Phase', desc: 'Rapid doubling, max growth rate', cells: 12 },
    stationary: { col: '#2980B9', title: 'Stationary Phase', desc: 'Growth = Death, nutrients depleted', cells: 8 },
    death: { col: '#E74C3C', title: 'Death Phase', desc: 'Death > Growth, toxic waste', cells: 3 },
  };
  const d = phaseData[phase];

  ctx.fillStyle = '#ECF0F1';
  ctx.fillRect(0, 0, w, h);
  ctx.fillStyle = d.col;
  ctx.font = `bold ${w * 0.05}px Arial`;
  ctx.fillText(d.title, w * 0.05, h * 0.08);
  ctx.fillStyle = '#2C3E50';
  ctx.font = `${w * 0.035}px Arial`;
  ctx.fillText(d.desc, w * 0.05, h * 0.15);

  const positions = [];
  for (let i = 0; i < d.cells; i++) {
    positions.push([0.1 + (i % 5) * 0.18, 0.35 + Math.floor(i / 5) * 0.28]);
  }
  positions.forEach(([px, py]) => {
    ctx.fillStyle = phase === 'death' ? '#BDC3C7' : '#FDEBD0';
    ctx.strokeStyle = d.col;
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.ellipse(w * px, h * py, w * 0.07, h * 0.08, 0, 0, Math.PI * 2);
    ctx.fill();
    ctx.stroke();
    if (phase === 'death') {
      ctx.strokeStyle = '#E74C3C';
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(w * px - w * 0.04, h * py - h * 0.04);
      ctx.lineTo(w * px + w * 0.04, h * py + h * 0.04);
      ctx.moveTo(w * px + w * 0.04, h * py - h * 0.04);
      ctx.lineTo(w * px - w * 0.04, h * py + h * 0.04);
      ctx.stroke();
    }
  });
}

// ─────────────────────────────────────────────────────────────

static drawBiofilm(ctx, x, y, width, height, type, structure) {
  ctx.save();
  ctx.translate(x, y);

  switch (structure) {
    case 'complete':
      this.drawBiofilmFull(ctx, {}, width, height);
      break;
    case 'attachment':
      this.drawBiofilmStage(ctx, {}, width, height, 0);
      break;
    case 'microcolony':
      this.drawBiofilmStage(ctx, {}, width, height, 1);
      break;
    case 'maturation':
      this.drawBiofilmStage(ctx, {}, width, height, 2);
      break;
    case 'dispersal':
      this.drawBiofilmStage(ctx, {}, width, height, 3);
      break;
  }

  ctx.restore();
}

static drawBiofilmFull(ctx, color, w, h) {
  ctx.fillStyle = '#ECF0F1';
  ctx.fillRect(0, 0, w, h);
  ctx.fillStyle = '#2C3E50';
  ctx.font = `bold ${w * 0.042}px Arial`;
  ctx.fillText('Biofilm Formation Stages', w * 0.28, h * 0.06);

  const labels = ['Attachment', 'Microcolony', 'Maturation', 'Dispersal'];
  labels.forEach((label, i) => {
    const ox = (i / 4) * w;
    this.drawBiofilmStage(ctx, {}, w / 4, h * 0.78, ox, h * 0.12, i);
    ctx.fillStyle = '#2C3E50';
    ctx.font = `${w * 0.026}px Arial`;
    ctx.fillText(label, ox + w * 0.03, h * 0.96);
    if (i < 3) {
      ctx.fillStyle = '#27AE60';
      ctx.font = `bold ${w * 0.04}px Arial`;
      ctx.fillText('→', ox + w / 4 * 0.84, h * 0.53);
    }
  });
}

static drawBiofilmStage(ctx, color, w, h, ox = 0, oy = 0, stage = 0) {
  // Surface
  ctx.fillStyle = '#D5B896';
  ctx.fillRect(ox, oy + h * 0.78, w, h * 0.22);
  ctx.strokeStyle = '#A0785A';
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.moveTo(ox, oy + h * 0.78);
  ctx.lineTo(ox + w, oy + h * 0.78);
  ctx.stroke();

  // Water/medium above
  ctx.fillStyle = 'rgba(174,214,241,0.3)';
  ctx.fillRect(ox, oy, w, h * 0.78);

  if (stage === 0) {
    // Free-floating + initial attachment
    const freePos = [[0.2, 0.3], [0.5, 0.2], [0.75, 0.35]];
    freePos.forEach(([px, py]) => {
      ctx.fillStyle = '#27AE60';
      ctx.beginPath();
      ctx.ellipse(ox + w * px, oy + h * py, w * 0.04, h * 0.05, 0, 0, Math.PI * 2);
      ctx.fill();
      ctx.strokeStyle = '#1E8449';
      ctx.lineWidth = 1.5;
      ctx.stroke();
    });
    // Attached cells
    const attachedPos = [[0.35, 0.76], [0.55, 0.76], [0.65, 0.76]];
    attachedPos.forEach(([px, py]) => {
      ctx.fillStyle = '#27AE60';
      ctx.beginPath();
      ctx.ellipse(ox + w * px, oy + h * py, w * 0.04, h * 0.04, 0, 0, Math.PI * 2);
      ctx.fill();
    });
  }

  if (stage === 1) {
    // Small clusters with EPS beginning
    const clusters = [[0.25, 0.72], [0.5, 0.7], [0.75, 0.72]];
    clusters.forEach(([px, py]) => {
      ctx.fillStyle = 'rgba(39,174,96,0.25)';
      ctx.beginPath();
      ctx.ellipse(ox + w * px, oy + h * py, w * 0.1, h * 0.1, 0, 0, Math.PI * 2);
      ctx.fill();
      for (let c = 0; c < 4; c++) {
        const ca = (c / 4) * Math.PI * 2;
        ctx.fillStyle = '#27AE60';
        ctx.beginPath();
        ctx.ellipse(ox + w * px + Math.cos(ca) * w * 0.055, oy + h * py + Math.sin(ca) * h * 0.05, w * 0.03, h * 0.035, 0, 0, Math.PI * 2);
        ctx.fill();
      }
    });
  }

  if (stage === 2) {
    // Mature mushroom-shaped towers
    [[0.25, 0.68, 0.14, 0.22], [0.6, 0.62, 0.18, 0.28]].forEach(([px, py, rw, rh]) => {
      // EPS matrix
      ctx.fillStyle = 'rgba(39,174,96,0.3)';
      ctx.strokeStyle = '#1E8449';
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.ellipse(ox + w * px, oy + h * py, w * rw, h * rh, 0, 0, Math.PI * 2);
      ctx.fill();
      ctx.stroke();
      // Water channel
      ctx.strokeStyle = '#AED6F1';
      ctx.lineWidth = 4;
      ctx.setLineDash([3, 2]);
      ctx.beginPath();
      ctx.moveTo(ox + w * px + w * rw * 0.7, oy + h * 0.78);
      ctx.lineTo(ox + w * px + w * rw * 0.7, oy + h * (py - rh * 0.8));
      ctx.stroke();
      ctx.setLineDash([]);
      // Cells inside
      for (let c = 0; c < 6; c++) {
        const ca = (c / 6) * Math.PI * 2;
        ctx.fillStyle = '#27AE60';
        ctx.beginPath();
        ctx.ellipse(ox + w * px + Math.cos(ca) * w * rw * 0.6, oy + h * py + Math.sin(ca) * h * rh * 0.6, w * 0.025, h * 0.03, 0, 0, Math.PI * 2);
        ctx.fill();
      }
    });
  }

  if (stage === 3) {
    // Dispersal - cells leaving
    ctx.fillStyle = 'rgba(39,174,96,0.3)';
    ctx.strokeStyle = '#1E8449';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.ellipse(ox + w * 0.45, oy + h * 0.68, w * 0.15, h * 0.18, 0, 0, Math.PI * 2);
    ctx.fill();
    ctx.stroke();
    // Dispersing cells
    [[0.15, 0.3], [0.7, 0.25], [0.82, 0.45], [0.1, 0.5]].forEach(([px, py]) => {
      ctx.fillStyle = '#E74C3C';
      ctx.beginPath();
      ctx.ellipse(ox + w * px, oy + h * py, w * 0.03, h * 0.04, 0, 0, Math.PI * 2);
      ctx.fill();
      ctx.strokeStyle = '#E74C3C';
      ctx.lineWidth = 1.5;
      ctx.setLineDash([2, 2]);
      ctx.beginPath();
      ctx.moveTo(ox + w * px, oy + h * py);
      ctx.lineTo(ox + w * 0.45, oy + h * 0.62);
      ctx.stroke();
      ctx.setLineDash([]);
    });
  }
}

// ─────────────────────────────────────────────────────────────

static drawChemotaxis(ctx, x, y, width, height, type, structure) {
  ctx.save();
  ctx.translate(x, y);

  switch (structure) {
    case 'complete':
      this.drawChemotaxisFull(ctx, {}, width, height);
      break;
    case 'run':
      this.drawChemotaxisMode(ctx, {}, width, height, 'run');
      break;
    case 'tumble':
      this.drawChemotaxisMode(ctx, {}, width, height, 'tumble');
      break;
    case 'signaling':
      this.drawChemotaxisSignaling(ctx, {}, width, height);
      break;
    case 'gradient':
      this.drawChemotaxisGradient(ctx, {}, width, height);
      break;
  }

  ctx.restore();
}

static drawChemotaxisFull(ctx, color, w, h) {
  ctx.fillStyle = '#ECF0F1';
  ctx.fillRect(0, 0, w, h);
  ctx.fillStyle = '#2C3E50';
  ctx.font = `bold ${w * 0.042}px Arial`;
  ctx.fillText('Chemotaxis: Run & Tumble', w * 0.28, h * 0.06);

  this.drawChemotaxisGradient(ctx, {}, w, h * 0.5, 0, h * 0.08);

  ctx.fillStyle = '#2C3E50';
  ctx.font = `bold ${w * 0.033}px Arial`;
  ctx.fillText('Run (CCW flagella)', w * 0.05, h * 0.64);
  ctx.fillText('Tumble (CW flagella)', w * 0.55, h * 0.64);

  this.drawChemotaxisMode(ctx, {}, w * 0.45, h * 0.3, 0, h * 0.66, 'run');
  this.drawChemotaxisMode(ctx, {}, w * 0.45, h * 0.3, w * 0.52, h * 0.66, 'tumble');
}

static drawChemotaxisGradient(ctx, color, w, h, ox = 0, oy = 0) {
  // Gradient background
  const grad = ctx.createLinearGradient(ox, oy, ox + w, oy);
  grad.addColorStop(0, 'rgba(231,76,60,0.05)');
  grad.addColorStop(1, 'rgba(231,76,60,0.4)');
  ctx.fillStyle = grad;
  ctx.fillRect(ox, oy, w, h);

  ctx.fillStyle = '#E74C3C';
  ctx.font = `${w * 0.032}px Arial`;
  ctx.fillText('← Low attractant', ox + w * 0.02, oy + h * 0.15);
  ctx.fillText('High attractant →', ox + w * 0.65, oy + h * 0.15);

  // Biased random walk path
  ctx.strokeStyle = '#2980B9';
  ctx.lineWidth = 3;
  ctx.beginPath();
  const pathPoints = [
    [0.05, 0.6], [0.1, 0.4], [0.12, 0.65], [0.18, 0.5],
    [0.22, 0.3], [0.28, 0.55], [0.32, 0.35], [0.4, 0.5],
    [0.45, 0.25], [0.55, 0.45], [0.62, 0.3], [0.72, 0.5],
    [0.8, 0.35], [0.9, 0.45], [0.95, 0.3]
  ];
  pathPoints.forEach(([px, py], i) => {
    i === 0 ? ctx.moveTo(ox + w * px, oy + h * py) : ctx.lineTo(ox + w * px, oy + h * py);
  });
  ctx.stroke();

  // Tumble dots
  [2, 4, 6, 9, 12].forEach(i => {
    ctx.fillStyle = '#E74C3C';
    ctx.beginPath();
    ctx.arc(ox + w * pathPoints[i][0], oy + h * pathPoints[i][1], w * 0.012, 0, Math.PI * 2);
    ctx.fill();
  });

  // Cell at end
  ctx.fillStyle = '#27AE60';
  ctx.beginPath();
  ctx.ellipse(ox + w * 0.95, oy + h * 0.3, w * 0.025, h * 0.1, 0, 0, Math.PI * 2);
  ctx.fill();
}

static drawChemotaxisMode(ctx, color, w, h, ox = 0, oy = 0, mode = 'run') {
  const cx = ox + w * 0.5;
  const cy = oy + h * 0.5;

  ctx.fillStyle = '#FDEBD0';
  ctx.strokeStyle = '#884EA0';
  ctx.lineWidth = 3;
  ctx.beginPath();
  ctx.ellipse(cx, cy, w * 0.14, h * 0.2, 0, 0, Math.PI * 2);
  ctx.fill();
  ctx.stroke();

  if (mode === 'run') {
    // CCW bundled flagella - straight motion
    ctx.strokeStyle = '#2980B9';
    ctx.lineWidth = 3;
    for (let i = 0; i < 4; i++) {
      const fy = cy + (i - 1.5) * h * 0.12;
      ctx.beginPath();
      ctx.moveTo(cx + w * 0.14, fy);
      for (let s = 0; s <= 20; s++) {
        const t = s / 20;
        ctx.lineTo(cx + w * 0.14 + t * w * 0.3, fy + Math.sin(t * Math.PI * 3) * h * 0.04);
      }
      ctx.stroke();
    }
    ctx.fillStyle = '#27AE60';
    ctx.font = `bold ${w * 0.06}px Arial`;
    ctx.fillText('→', cx - w * 0.35, cy + h * 0.05);
  } else {
    // CW splayed flagella - tumble
    ctx.strokeStyle = '#E74C3C';
    ctx.lineWidth = 2;
    for (let i = 0; i < 5; i++) {
      const startAngle = (i / 5) * Math.PI * 2;
      ctx.beginPath();
      ctx.moveTo(cx + Math.cos(startAngle) * w * 0.14, cy + Math.sin(startAngle) * h * 0.2);
      for (let s = 0; s <= 15; s++) {
        const t = s / 15;
        const a = startAngle + t * 1.2;
        ctx.lineTo(cx + Math.cos(a) * (w * 0.14 + t * w * 0.25), cy + Math.sin(a) * (h * 0.2 + t * h * 0.18));
      }
      ctx.stroke();
    }
    // Rotation arrows
    ctx.strokeStyle = '#F39C12';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.arc(cx, cy, w * 0.08, 0, Math.PI * 1.6);
    ctx.stroke();
    ctx.fillStyle = '#F39C12';
    ctx.font = `bold ${w * 0.07}px Arial`;
    ctx.fillText('↺', cx - w * 0.07, cy + h * 0.06);
  }
}

static drawChemotaxisSignaling(ctx, color, w, h) {
  ctx.fillStyle = '#ECF0F1';
  ctx.fillRect(0, 0, w, h);
  ctx.fillStyle = '#2C3E50';
  ctx.font = `bold ${w * 0.04}px Arial`;
  ctx.fillText('Chemotaxis Signaling Pathway', w * 0.22, h * 0.06);

  // MCPs (methyl-accepting chemotaxis proteins)
  ctx.fillStyle = '#8E44AD';
  ctx.fillRect(w * 0.05, h * 0.15, w * 0.12, h * 0.45);
  ctx.strokeStyle = '#6C3483';
  ctx.lineWidth = 2;
  ctx.strokeRect(w * 0.05, h * 0.15, w * 0.12, h * 0.45);
  ctx.fillStyle = '#ECF0F1';
  ctx.font = `${w * 0.028}px Arial`;
  ctx.fillText('MCP', w * 0.065, h * 0.4);
  ctx.fillStyle = '#2C3E50';
  ctx.fillText('Receptor', w * 0.02, h * 0.68);

  // Ligand binding
  ctx.fillStyle = '#E74C3C';
  ctx.beginPath();
  ctx.arc(w * 0.11, h * 0.12, w * 0.025, 0, Math.PI * 2);
  ctx.fill();
  ctx.fillStyle = '#2C3E50';
  ctx.fillText('Attractant', w * 0.02, h * 0.1);

  // CheA (kinase)
  ctx.fillStyle = '#2980B9';
  ctx.beginPath();
  ctx.arc(w * 0.32, h * 0.38, w * 0.06, 0, Math.PI * 2);
  ctx.fill();
  ctx.fillStyle = '#ECF0F1';
  ctx.font = `${w * 0.03}px Arial`;
  ctx.fillText('CheA', w * 0.295, h * 0.39);

  // CheW (coupling)
  ctx.fillStyle = '#27AE60';
  ctx.beginPath();
  ctx.arc(w * 0.22, h * 0.38, w * 0.04, 0, Math.PI * 2);
  ctx.fill();
  ctx.fillStyle = '#ECF0F1';
  ctx.fillText('CheW', w * 0.2, h * 0.39);

  // CheY (response regulator)
  ctx.fillStyle = '#F39C12';
  ctx.beginPath();
  ctx.arc(w * 0.52, h * 0.55, w * 0.055, 0, Math.PI * 2);
  ctx.fill();
  ctx.fillStyle = '#ECF0F1';
  ctx.fillText('CheY', w * 0.5, h * 0.56);

  // CheZ (phosphatase)
  ctx.fillStyle = '#E67E22';
  ctx.beginPath();
  ctx.arc(w * 0.52, h * 0.28, w * 0.045, 0, Math.PI * 2);
  ctx.fill();
  ctx.fillStyle = '#ECF0F1';
  ctx.fillText('CheZ', w * 0.5, h * 0.29);

  // Flagellar motor
  ctx.fillStyle = '#884EA0';
  ctx.beginPath();
  ctx.arc(w * 0.75, h * 0.55, w * 0.07, 0, Math.PI * 2);
  ctx.fill();
  ctx.fillStyle = '#ECF0F1';
  ctx.fillText('Motor', w * 0.72, h * 0.56);
  ctx.fillStyle = '#2C3E50';
  ctx.fillText('(FliM/switch)', w * 0.7, h * 0.65);

  // Arrows
  const arrows = [
    [w * 0.17, h * 0.38, w * 0.18, h * 0.38],
    [w * 0.26, h * 0.38, w * 0.26, h * 0.38],
    [w * 0.38, h * 0.5, w * 0.47, h * 0.55],
    [w * 0.57, h * 0.55, w * 0.68, h * 0.55],
    [w * 0.56, h * 0.3, w * 0.56, h * 0.5],
  ];
  ctx.strokeStyle = '#2C3E50';
  ctx.lineWidth = 2;
  arrows.forEach(([x1, y1, x2, y2]) => {
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.stroke();
  });

  // Phosphorylation label
  ctx.fillStyle = '#E74C3C';
  ctx.font = `${w * 0.028}px Arial`;
  ctx.fillText('~P', w * 0.4, h * 0.48);
  ctx.fillText('CW = Tumble', w * 0.72, h * 0.78);
  ctx.fillText('CCW = Run', w * 0.72, h * 0.84);

  // Methylation
  ctx.fillStyle = '#884EA0';
  ctx.fillText('CheB/CheR', w * 0.06, h * 0.78);
  ctx.fillText('(methylation)', w * 0.06, h * 0.84);
  ctx.fillText('adaptation', w * 0.06, h * 0.9);
}

// ─────────────────────────────────────────────────────────────

static drawNitrogenFixation(ctx, x, y, width, height, type, structure) {
  ctx.save();
  ctx.translate(x, y);

  switch (structure) {
    case 'complete':
      this.drawNitrogenFixationFull(ctx, {}, width, height);
      break;
    case 'nitrogenase':
      this.drawNitrogenaseComplex(ctx, {}, width, height);
      break;
    case 'nitrogen-cycle':
      this.drawNitrogenCycle(ctx, {}, width, height);
      break;
    case 'nodule':
      this.drawRootNodule(ctx, {}, width, height);
      break;
  }

  ctx.restore();
}

static drawNitrogenFixationFull(ctx, color, w, h) {
  ctx.fillStyle = '#ECF0F1';
  ctx.fillRect(0, 0, w, h);
  ctx.fillStyle = '#2C3E50';
  ctx.font = `bold ${w * 0.042}px Arial`;
  ctx.fillText('Nitrogen Fixation in Bacteria', w * 0.22, h * 0.06);

  this.drawNitrogenaseComplex(ctx, {}, w * 0.5, h * 0.45, 0, h * 0.1);
  this.drawRootNodule(ctx, {}, w * 0.45, h * 0.4, w * 0.52, h * 0.52);
}

static drawNitrogenaseComplex(ctx, color, w, h, ox = 0, oy = 0) {
  const cx = ox + w * 0.5;
  const cy = oy + h * 0.5;

  ctx.fillStyle = '#EAF2F8';
  ctx.fillRect(ox, oy, w, h);

  // N2 molecule
  ctx.fillStyle = '#2C3E50';
  ctx.font = `bold ${w * 0.055}px Arial`;
  ctx.fillText('N≡N', ox + w * 0.04, cy - h * 0.25);

  // Arrow to nitrogenase
  ctx.strokeStyle = '#27AE60';
  ctx.lineWidth = 3;
  ctx.beginPath();
  ctx.moveTo(ox + w * 0.18, cy - h * 0.2);
  ctx.lineTo(ox + w * 0.28, cy - h * 0.05);
  ctx.stroke();

  // Dinitrogenase reductase (Fe protein)
  ctx.fillStyle = '#F39C12';
  ctx.strokeStyle = '#D35400';
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.ellipse(cx - w * 0.18, cy, w * 0.12, h * 0.15, 0, 0, Math.PI * 2);
  ctx.fill();
  ctx.stroke();
  ctx.fillStyle = '#ECF0F1';
  ctx.font = `${w * 0.03}px Arial`;
  ctx.fillText('Fe', cx - w * 0.22, cy - h * 0.01);
  ctx.fillText('protein', cx - w * 0.24, cy + h * 0.06);

  // [4Fe-4S] cluster
  ctx.fillStyle = '#E74C3C';
  ctx.beginPath();
  ctx.arc(cx - w * 0.18, cy - h * 0.08, w * 0.025, 0, Math.PI * 2);
  ctx.fill();
  ctx.fillStyle = '#2C3E50';
  ctx.font = `${w * 0.022}px Arial`;
  ctx.fillText('[4Fe-4S]', cx - w * 0.26, cy - h * 0.14);

  // Electron transfer arrow
  ctx.strokeStyle = '#E74C3C';
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.moveTo(cx - w * 0.06, cy);
  ctx.lineTo(cx + w * 0.04, cy);
  ctx.stroke();
  ctx.fillStyle = '#E74C3C';
  ctx.font = `${w * 0.025}px Arial`;
  ctx.fillText('e⁻', cx - w * 0.01, cy - h * 0.04);

  // Dinitrogenase (MoFe protein)
  ctx.fillStyle = '#2980B9';
  ctx.strokeStyle = '#1A5276';
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.ellipse(cx + w * 0.18, cy, w * 0.15, h * 0.18, 0, 0, Math.PI * 2);
  ctx.fill();
  ctx.stroke();
  ctx.fillStyle = '#ECF0F1';
  ctx.font = `${w * 0.03}px Arial`;
  ctx.fillText('MoFe', cx + w * 0.1, cy - h * 0.01);
  ctx.fillText('protein', cx + w * 0.09, cy + h * 0.06);

  // FeMo-co cluster
  ctx.fillStyle = '#F1C40F';
  ctx.beginPath();
  ctx.arc(cx + w * 0.18, cy - h * 0.08, w * 0.03, 0, Math.PI * 2);
  ctx.fill();
  ctx.fillStyle = '#2C3E50';
  ctx.font = `${w * 0.022}px Arial`;
  ctx.fillText('FeMo-co', cx + w * 0.12, cy - h * 0.16);

  // Products
  ctx.fillStyle = '#2C3E50';
  ctx.font = `bold ${w * 0.045}px Arial`;
  ctx.fillText('2 NH₃', ox + w * 0.72, cy - h * 0.25);
  ctx.strokeStyle = '#27AE60';
  ctx.lineWidth = 3;
  ctx.beginPath();
  ctx.moveTo(cx + w * 0.33, cy - h * 0.05);
  ctx.lineTo(ox + w * 0.72, cy - h * 0.18);
  ctx.stroke();

  // ATP requirement
  ctx.fillStyle = '#884EA0';
  ctx.font = `${w * 0.03}px Arial`;
  ctx.fillText('16 ATP + 8 e⁻ + 8 H⁺', ox + w * 0.1, oy + h * 0.88);
  ctx.fillText('N₂ + 8H⁺ + 8e⁻ → 2NH₃ + H₂', ox + w * 0.1, oy + h * 0.94);
}

static drawNitrogenCycle(ctx, color, w, h) {
  ctx.fillStyle = '#E8F5E9';
  ctx.fillRect(0, 0, w, h);
  ctx.fillStyle = '#1B5E20';
  ctx.font = `bold ${w * 0.038}px Arial`;
  ctx.fillText('Nitrogen Cycle', w * 0.38, h * 0.06);

  const nodes = [
    { x: 0.5, y: 0.15, label: 'N₂ (atmosphere)', col: '#2980B9' },
    { x: 0.15, y: 0.45, label: 'NH₄⁺', col: '#27AE60' },
    { x: 0.5, y: 0.75, label: 'NO₂⁻', col: '#F39C12' },
    { x: 0.85, y: 0.45, label: 'NO₃⁻', col: '#E74C3C' },
  ];

  nodes.forEach(({ x, y, label, col }) => {
    ctx.fillStyle = col;
    ctx.beginPath();
    ctx.arc(w * x, h * y, w * 0.07, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = '#ECF0F1';
    ctx.font = `bold ${w * 0.032}px Arial`;
    ctx.fillText(label, w * x - w * 0.05, h * y + h * 0.012);
  });

  const edges = [
    [0.5, 0.15, 0.15, 0.45, 'N₂ fixation\n(Rhizobium)'],
    [0.15, 0.45, 0.5, 0.75, 'Nitrification\n(Nitrosomonas)'],
    [0.5, 0.75, 0.85, 0.45, 'Nitrification\n(Nitrobacter)'],
    [0.85, 0.45, 0.5, 0.15, 'Denitrification'],
    [0.85, 0.45, 0.15, 0.45, 'Assimilation →'],
  ];

  ctx.lineWidth = 2;
  edges.forEach(([x1, y1, x2, y2, label]) => {
    ctx.strokeStyle = '#555';
    ctx.beginPath();
    ctx.moveTo(w * x1, h * y1);
    ctx.lineTo(w * x2, h * y2);
    ctx.stroke();
    ctx.fillStyle = '#2C3E50';
    ctx.font = `${w * 0.025}px Arial`;
    ctx.fillText(label.split('\n')[0], w * (x1 + x2) / 2 - w * 0.06, h * (y1 + y2) / 2 - h * 0.01);
    if (label.split('\n')[1])
      ctx.fillText(label.split('\n')[1], w * (x1 + x2) / 2 - w * 0.06, h * (y1 + y2) / 2 + h * 0.04);
  });
}

static drawRootNodule(ctx, color, w, h, ox = 0, oy = 0) {
  const cx = ox + w * 0.5;
  const cy = oy + h * 0.5;

  // Nodule cross section
  ctx.fillStyle = '#E8F5E9';
  ctx.strokeStyle = '#2E7D32';
  ctx.lineWidth = 4;
  ctx.beginPath();
  ctx.ellipse(cx, cy, w * 0.4, h * 0.4, 0, 0, Math.PI * 2);
  ctx.fill();
  ctx.stroke();

  // Infected zone (pink, bacteroids)
  ctx.fillStyle = '#FADBD8';
  ctx.strokeStyle = '#E74C3C';
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.ellipse(cx, cy, w * 0.28, h * 0.28, 0, 0, Math.PI * 2);
  ctx.fill();
  ctx.stroke();

  // Bacteroids (Rhizobium inside cells)
  for (let i = 0; i < 14; i++) {
    const angle = (i / 14) * Math.PI * 2;
    const bx = cx + Math.cos(angle) * w * 0.16;
    const by = cy + Math.sin(angle) * h * 0.16;
    ctx.fillStyle = '#884EA0';
    ctx.beginPath();
    ctx.ellipse(bx, by, w * 0.03, h * 0.02, angle, 0, Math.PI * 2);
    ctx.fill();
  }

  // Leghemoglobin (red center)
  ctx.fillStyle = 'rgba(231,76,60,0.4)';
  ctx.beginPath();
  ctx.ellipse(cx, cy, w * 0.1, h * 0.1, 0, 0, Math.PI * 2);
  ctx.fill();
  ctx.fillStyle = '#2C3E50';
  ctx.font = `${w * 0.065}px Arial`;
  ctx.fillText('LHb', cx - w * 0.08, cy + h * 0.025);

  ctx.fillStyle = '#2C3E50';
  ctx.font = `${w * 0.055}px Arial`;
  ctx.fillText('Root Nodule', ox + w * 0.15, oy + h * 0.93);
  ctx.fillStyle = '#884EA0';
  ctx.fillText('Bacteroids', ox + w * 0.15, oy + h * 0.99);
}

// ============================================================
// VIRUS COMPLETE SYSTEMS
// ============================================================

static drawLyticCycle(ctx, x, y, width, height, type, structure) {
  ctx.save();
  ctx.translate(x, y);

  switch (structure) {
    case 'complete':
      this.drawLyticCycleFull(ctx, {}, width, height);
      break;
    case 'attachment':
      this.drawLyticStep(ctx, {}, width, height, 0);
      break;
    case 'injection':
      this.drawLyticStep(ctx, {}, width, height, 1);
      break;
    case 'replication':
      this.drawLyticStep(ctx, {}, width, height, 2);
      break;
    case 'assembly':
      this.drawLyticStep(ctx, {}, width, height, 3);
      break;
    case 'lysis':
      this.drawLyticStep(ctx, {}, width, height, 4);
      break;
  }

  ctx.restore();
}

static drawLyticCycleFull(ctx, color, w, h) {
  ctx.fillStyle = '#0D1117';
  ctx.fillRect(0, 0, w, h);
  ctx.fillStyle = '#ECF0F1';
  ctx.font = `bold ${w * 0.042}px Arial`;
  ctx.fillText('Lytic Cycle', w * 0.38, h * 0.06);

  const labels = ['Attachment', 'Injection', 'Replication', 'Assembly', 'Lysis'];
  labels.forEach((label, i) => {
    const ox = (i / 5) * w;
    this.drawLyticStep(ctx, {}, w / 5, h * 0.78, ox, h * 0.12, i);
    ctx.fillStyle = '#ECF0F1';
    ctx.font = `${w * 0.026}px Arial`;
    ctx.fillText(label, ox + w * 0.01, h * 0.96);
    if (i < 4) {
      ctx.fillStyle = '#E74C3C';
      ctx.font = `bold ${w * 0.04}px Arial`;
      ctx.fillText('→', ox + w / 5 * 0.84, h * 0.53);
    }
  });
}

static drawLyticStep(ctx, color, w, h, ox = 0, oy = 0, step = 0) {
  const cx = ox + w * 0.5;
  const cy = oy + h * 0.55;

  // Host cell
  ctx.fillStyle = step === 4 ? 'rgba(46,134,193,0.2)' : '#1E3A5F';
  ctx.strokeStyle = step === 4 ? '#E74C3C' : '#2980B9';
  ctx.lineWidth = 3;
  ctx.beginPath();
  ctx.ellipse(cx, cy, w * 0.38, h * 0.35, 0, 0, Math.PI * 2);
  ctx.fill();
  ctx.stroke();

  // Phage
  const drawPhageIcon = (px, py, s = 1.0) => {
    ctx.fillStyle = '#E74C3C';
    ctx.beginPath();
    for (let i = 0; i < 6; i++) {
      const a = (i / 6) * Math.PI * 2;
      i === 0
        ? ctx.moveTo(px + Math.cos(a) * w * 0.06 * s, py + Math.sin(a) * h * 0.07 * s)
        : ctx.lineTo(px + Math.cos(a) * w * 0.06 * s, py + Math.sin(a) * h * 0.07 * s);
    }
    ctx.closePath();
    ctx.fill();
    ctx.strokeStyle = '#C0392B';
    ctx.lineWidth = 1.5;
    ctx.stroke();
    ctx.strokeStyle = '#922B21';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(px, py + h * 0.07 * s);
    ctx.lineTo(px, py + h * 0.14 * s);
    ctx.stroke();
    for (let i = -1; i <= 1; i++) {
      ctx.beginPath();
      ctx.moveTo(px, py + h * 0.14 * s);
      ctx.lineTo(px + w * 0.05 * s * i, py + h * 0.2 * s);
      ctx.stroke();
    }
  };

  if (step === 0) {
    drawPhageIcon(cx, oy + h * 0.08);
    ctx.strokeStyle = '#F39C12';
    ctx.lineWidth = 2;
    ctx.setLineDash([3, 2]);
    ctx.beginPath();
    ctx.moveTo(cx, oy + h * 0.3);
    ctx.lineTo(cx, cy - h * 0.35);
    ctx.stroke();
    ctx.setLineDash([]);
  }

  if (step === 1) {
    // Phage attached, DNA injecting
    drawPhageIcon(cx, cy - h * 0.35, 0.8);
    ctx.strokeStyle = '#27AE60';
    ctx.lineWidth = 3;
    ctx.setLineDash([4, 2]);
    ctx.beginPath();
    ctx.moveTo(cx, cy - h * 0.2);
    ctx.lineTo(cx, cy);
    ctx.stroke();
    ctx.setLineDash([]);
  }

  if (step === 2) {
    // Phage DNA + host machinery
    ctx.strokeStyle = '#E74C3C';
    ctx.lineWidth = 2;
    for (let i = 0; i < 4; i++) {
      ctx.beginPath();
      ctx.arc(cx + (i - 1.5) * w * 0.12, cy - h * 0.05, w * 0.06, 0, Math.PI * 2);
      ctx.stroke();
    }
    ctx.fillStyle = '#27AE60';
    ctx.font = `${w * 0.04}px Arial`;
    ctx.fillText('×20 phage DNA', cx - w * 0.25, cy + h * 0.28);
  }

  if (step === 3) {
    // New phages assembling
    for (let i = 0; i < 5; i++) {
      const px = cx - w * 0.28 + i * w * 0.14;
      const py = cy + (i % 2) * h * 0.1;
      drawPhageIcon(px, py - h * 0.12, 0.5);
    }
  }

  if (step === 4) {
    // Cell lysing
    ctx.strokeStyle = '#E74C3C';
    ctx.lineWidth = 3;
    ctx.setLineDash([6, 3]);
    ctx.beginPath();
    ctx.ellipse(cx, cy, w * 0.38, h * 0.35, 0, 0, Math.PI * 2);
    ctx.stroke();
    ctx.setLineDash([]);
    // Released phages
    const positions = [[-0.32, -0.3], [0.3, -0.28], [-0.3, 0.28], [0.28, 0.3], [0, -0.38]];
    positions.forEach(([dx, dy]) => drawPhageIcon(cx + w * dx, oy + h * 0.55 + h * dy, 0.45));
  }
}

// ─────────────────────────────────────────────────────────────

static drawLysogenicCycle(ctx, x, y, width, height, type, structure) {
  ctx.save();
  ctx.translate(x, y);

  switch (structure) {
    case 'complete':
      this.drawLysogenicCycleFull(ctx, {}, width, height);
      break;
    case 'integration':
      this.drawLysogenicStep(ctx, {}, width, height, 0);
      break;
    case 'prophage':
      this.drawLysogenicStep(ctx, {}, width, height, 1);
      break;
    case 'replication':
      this.drawLysogenicStep(ctx, {}, width, height, 2);
      break;
    case 'induction':
      this.drawLysogenicStep(ctx, {}, width, height, 3);
      break;
  }

  ctx.restore();
}

static drawLysogenicCycleFull(ctx, color, w, h) {
  ctx.fillStyle = '#0D1117';
  ctx.fillRect(0, 0, w, h);
  ctx.fillStyle = '#ECF0F1';
  ctx.font = `bold ${w * 0.042}px Arial`;
  ctx.fillText('Lysogenic Cycle', w * 0.35, h * 0.06);

  const labels = ['Integration', 'Prophage', 'Replication', 'Induction'];
  labels.forEach((label, i) => {
    const ox = (i / 4) * w;
    this.drawLysogenicStep(ctx, {}, w / 4, h * 0.78, ox, h * 0.12, i);
    ctx.fillStyle = '#ECF0F1';
    ctx.font = `${w * 0.026}px Arial`;
    ctx.fillText(label, ox + w * 0.02, h * 0.96);
    if (i < 3) {
      ctx.fillStyle = '#8E44AD';
      ctx.font = `bold ${w * 0.04}px Arial`;
      ctx.fillText('→', ox + w / 4 * 0.84, h * 0.53);
    }
  });
}

static drawLysogenicStep(ctx, color, w, h, ox = 0, oy = 0, step = 0) {
  const cx = ox + w * 0.5;
  const cy = oy + h * 0.5;

  ctx.fillStyle = '#1E3A5F';
  ctx.strokeStyle = '#2980B9';
  ctx.lineWidth = 3;
  ctx.beginPath();
  ctx.ellipse(cx, cy, w * 0.38, h * 0.35, 0, 0, Math.PI * 2);
  ctx.fill();
  ctx.stroke();

  // Host chromosome
  ctx.strokeStyle = step === 0 ? '#2980B9' : '#2980B9';
  ctx.lineWidth = 2;
  if (step === 0) {
    ctx.beginPath();
    ctx.arc(cx, cy + h * 0.05, w * 0.18, 0, Math.PI * 1.6);
    ctx.stroke();
    // Phage DNA inserting
    ctx.strokeStyle = '#E74C3C';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.arc(cx, cy + h * 0.05, w * 0.18, Math.PI * 1.6, Math.PI * 2);
    ctx.stroke();
  } else {
    // Chromosome with integrated prophage
    ctx.beginPath();
    ctx.arc(cx, cy + h * 0.05, w * 0.18, 0, Math.PI * 2);
    ctx.stroke();
    // Prophage segment highlighted
    const startAngle = Math.PI * 0.3;
    const endAngle = Math.PI * 0.9;
    ctx.strokeStyle = '#E74C3C';
    ctx.lineWidth = 5;
    ctx.beginPath();
    ctx.arc(cx, cy + h * 0.05, w * 0.18, startAngle, endAngle);
    ctx.stroke();
  }

  if (step === 2) {
    // Cell dividing with prophage passed to daughters
    ctx.strokeStyle = '#F39C12';
    ctx.lineWidth = 2;
    ctx.setLineDash([4, 3]);
    ctx.beginPath();
    ctx.moveTo(cx, cy - h * 0.35);
    ctx.lineTo(cx, cy + h * 0.35);
    ctx.stroke();
    ctx.setLineDash([]);
    ctx.fillStyle = '#F39C12';
    ctx.font = `${w * 0.038}px Arial`;
    ctx.fillText('→ 2 lysogens', cx - w * 0.3, oy + h * 0.92);
  }

  if (step === 3) {
    // Induction - excision
    ctx.strokeStyle = '#F39C12';
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.arc(cx + w * 0.04, cy + h * 0.04, w * 0.1, 0, Math.PI * 2);
    ctx.stroke();
    ctx.fillStyle = '#F39C12';
    ctx.font = `${w * 0.032}px Arial`;
    ctx.fillText('UV/SOS', cx - w * 0.22, oy + h * 0.9);
    ctx.fillText('→ Lytic', cx - w * 0.12, oy + h * 0.96);
  }
}

// ─────────────────────────────────────────────────────────────

static drawViralAssembly(ctx, x, y, width, height, type, structure) {
  ctx.save();
  ctx.translate(x, y);

  switch (structure) {
    case 'complete':
      this.drawViralAssemblyFull(ctx, {}, width, height);
      break;
    case 'capsomers':
      this.drawAssemblyStep(ctx, {}, width, height, 0);
      break;
    case 'procapsid':
      this.drawAssemblyStep(ctx, {}, width, height, 1);
      break;
    case 'genome-packaging':
      this.drawAssemblyStep(ctx, {}, width, height, 2);
      break;
    case 'maturation':
      this.drawAssemblyStep(ctx, {}, width, height, 3);
      break;
  }

  ctx.restore();
}

static drawViralAssemblyFull(ctx, color, w, h) {
  ctx.fillStyle = '#0D1117';
  ctx.fillRect(0, 0, w, h);
  ctx.fillStyle = '#ECF0F1';
  ctx.font = `bold ${w * 0.042}px Arial`;
  ctx.fillText('Capsid Self-Assembly', w * 0.32, h * 0.06);

  const labels = ['Capsomers', 'Procapsid', 'Genome Packaging', 'Mature Virion'];
  labels.forEach((label, i) => {
    const ox = (i / 4) * w;
    this.drawAssemblyStep(ctx, {}, w / 4, h * 0.78, ox, h * 0.12, i);
    ctx.fillStyle = '#ECF0F1';
    ctx.font = `${w * 0.025}px Arial`;
    ctx.fillText(label, ox + w * 0.01, h * 0.96);
    if (i < 3) {
      ctx.fillStyle = '#F39C12';
      ctx.font = `bold ${w * 0.04}px Arial`;
      ctx.fillText('→', ox + w / 4 * 0.84, h * 0.53);
    }
  });
}

static drawAssemblyStep(ctx, color, w, h, ox = 0, oy = 0, step = 0) {
  const cx = ox + w * 0.5;
  const cy = oy + h * 0.5;

  if (step === 0) {
    // Scattered capsomers
    for (let i = 0; i < 12; i++) {
      const angle = (i / 12) * Math.PI * 2;
      const r = w * 0.28;
      const px = cx + Math.cos(angle) * r;
      const py = cy + Math.sin(angle) * r * 0.7;
      ctx.fillStyle = '#2980B9';
      ctx.beginPath();
      for (let s = 0; s < 5; s++) {
        const a = (s / 5) * Math.PI * 2 + angle;
        s === 0 ? ctx.moveTo(px + Math.cos(a) * w * 0.04, py + Math.sin(a) * w * 0.04)
                : ctx.lineTo(px + Math.cos(a) * w * 0.04, py + Math.sin(a) * w * 0.04);
      }
      ctx.closePath();
      ctx.fill();
      ctx.strokeStyle = '#1A5276';
      ctx.lineWidth = 1;
      ctx.stroke();
    }
  }

  if (step === 1) {
    // Procapsid (empty shell)
    ctx.strokeStyle = '#2980B9';
    ctx.lineWidth = 3;
    ctx.fillStyle = 'rgba(41,128,185,0.2)';
    ctx.beginPath();
    ctx.arc(cx, cy, w * 0.28, 0, Math.PI * 2);
    ctx.fill();
    ctx.stroke();
    for (let i = 0; i < 12; i++) {
      const angle = (i / 12) * Math.PI * 2;
      const px = cx + Math.cos(angle) * w * 0.28;
      const py = cy + Math.sin(angle) * w * 0.28;
      ctx.fillStyle = '#5DADE2';
      ctx.beginPath();
      ctx.arc(px, py, w * 0.038, 0, Math.PI * 2);
      ctx.fill();
    }
  }

  if (step === 2) {
    // Shell + DNA being packaged
    ctx.strokeStyle = '#2980B9';
    ctx.lineWidth = 3;
    ctx.fillStyle = 'rgba(41,128,185,0.2)';
    ctx.beginPath();
    ctx.arc(cx, cy, w * 0.28, 0, Math.PI * 2);
    ctx.fill();
    ctx.stroke();
    // DNA coiling inside
    ctx.strokeStyle = '#27AE60';
    ctx.lineWidth = 2;
    for (let ring = 1; ring <= 3; ring++) {
      ctx.beginPath();
      ctx.arc(cx, cy, w * 0.07 * ring, 0, Math.PI * 1.8);
      ctx.stroke();
    }
    // Portal + DNA thread
    ctx.strokeStyle = '#E74C3C';
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.moveTo(cx, cy + w * 0.28);
    ctx.lineTo(cx, cy + w * 0.42);
    ctx.stroke();
  }

  if (step === 3) {
    // Mature virion
    ctx.strokeStyle = '#F39C12';
    ctx.lineWidth = 4;
    ctx.fillStyle = 'rgba(243,156,18,0.2)';
    ctx.beginPath();
    ctx.arc(cx, cy, w * 0.28, 0, Math.PI * 2);
    ctx.fill();
    ctx.stroke();
    ctx.fillStyle = '#27AE60';
    ctx.beginPath();
    ctx.arc(cx, cy, w * 0.16, 0, Math.PI * 2);
    ctx.fill();
    for (let i = 0; i < 12; i++) {
      const angle = (i / 12) * Math.PI * 2;
      const px = cx + Math.cos(angle) * w * 0.28;
      const py = cy + Math.sin(angle) * w * 0.28;
      ctx.fillStyle = '#F39C12';
      ctx.beginPath();
      ctx.arc(px, py, w * 0.038, 0, Math.PI * 2);
      ctx.fill();
    }
  }
}

// ─────────────────────────────────────────────────────────────

static drawViralEntry(ctx, x, y, width, height, type, structure) {
  ctx.save();
  ctx.translate(x, y);

  switch (structure) {
    case 'complete':
      this.drawViralEntryFull(ctx, {}, width, height);
      break;
    case 'receptor-binding':
      this.drawViralEntryStep(ctx, {}, width, height, 0);
      break;
    case 'membrane-fusion':
      this.drawViralEntryStep(ctx, {}, width, height, 1);
      break;
    case 'endocytosis':
      this.drawViralEntryStep(ctx, {}, width, height, 2);
      break;
    case 'uncoating':
      this.drawViralEntryStep(ctx, {}, width, height, 3);
      break;
  }

  ctx.restore();
}

static drawViralEntryFull(ctx, color, w, h) {
  ctx.fillStyle = '#0D1117';
  ctx.fillRect(0, 0, w, h);
  ctx.fillStyle = '#ECF0F1';
  ctx.font = `bold ${w * 0.042}px Arial`;
  ctx.fillText('Viral Entry', w * 0.38, h * 0.06);

  const labels = ['Receptor Binding', 'Membrane Fusion', 'Endocytosis', 'Uncoating'];
  labels.forEach((label, i) => {
    const ox = (i / 4) * w;
    this.drawViralEntryStep(ctx, {}, w / 4, h * 0.78, ox, h * 0.12, i);
    ctx.fillStyle = '#ECF0F1';
    ctx.font = `${w * 0.024}px Arial`;
    ctx.fillText(label, ox + w * 0.01, h * 0.96);
    if (i < 3) {
      ctx.fillStyle = '#2ECC71';
      ctx.font = `bold ${w * 0.04}px Arial`;
      ctx.fillText('→', ox + w / 4 * 0.84, h * 0.53);
    }
  });
}

static drawViralEntryStep(ctx, color, w, h, ox = 0, oy = 0, step = 0) {
  const cx = ox + w * 0.5;
  const memY = oy + h * 0.5;

  // Host membrane
  ctx.fillStyle = '#1A5276';
  ctx.fillRect(ox, memY, w, h * 0.08);
  ctx.strokeStyle = '#2980B9';
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.moveTo(ox, memY);
  ctx.lineTo(ox + w, memY);
  ctx.moveTo(ox, memY + h * 0.08);
  ctx.lineTo(ox + w, memY + h * 0.08);
  ctx.stroke();

  // Cytoplasm below
  ctx.fillStyle = '#1E3A5F';
  ctx.fillRect(ox, memY + h * 0.08, w, h - (memY - oy) - h * 0.08);

  // Virus particle
  const virusY = step >= 2 ? memY + h * 0.22 : memY - h * 0.22;
  ctx.fillStyle = '#884EA0';
  ctx.strokeStyle = '#6C3483';
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.arc(cx, virusY, w * 0.1, 0, Math.PI * 2);
  ctx.fill();
  ctx.stroke();
  // Spike proteins
  for (let i = 0; i < 8; i++) {
    const a = (i / 8) * Math.PI * 2;
    ctx.strokeStyle = '#E74C3C';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(cx + Math.cos(a) * w * 0.1, virusY + Math.sin(a) * w * 0.1);
    ctx.lineTo(cx + Math.cos(a) * w * 0.14, virusY + Math.sin(a) * w * 0.14);
    ctx.stroke();
    ctx.fillStyle = '#E74C3C';
    ctx.beginPath();
    ctx.arc(cx + Math.cos(a) * w * 0.145, virusY + Math.sin(a) * w * 0.145, w * 0.012, 0, Math.PI * 2);
    ctx.fill();
  }

  if (step === 0) {
    // Receptor on membrane
    ctx.fillStyle = '#F39C12';
    ctx.beginPath();
    ctx.rect(cx - w * 0.04, memY - h * 0.04, w * 0.08, h * 0.12);
    ctx.fill();
    ctx.fillStyle = '#2C3E50';
    ctx.font = `${w * 0.03}px Arial`;
    ctx.fillStyle = '#F39C12';
    ctx.fillText('Receptor', cx - w * 0.12, memY + h * 0.16);
  }

  if (step === 1) {
    // Fusion — envelope merging with membrane
    ctx.fillStyle = 'rgba(142,68,173,0.5)';
    ctx.beginPath();
    ctx.ellipse(cx, memY, w * 0.12, h * 0.06, 0, 0, Math.PI * 2);
    ctx.fill();
    ctx.strokeStyle = '#E74C3C';
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.moveTo(cx - w * 0.08, memY - h * 0.01);
    ctx.lineTo(cx + w * 0.08, memY - h * 0.01);
    ctx.stroke();
  }

  if (step === 2) {
    // Endosome forming around virus
    ctx.strokeStyle = '#27AE60';
    ctx.lineWidth = 3;
    ctx.fillStyle = 'rgba(39,174,96,0.2)';
    ctx.beginPath();
    ctx.arc(cx, virusY, w * 0.17, 0, Math.PI * 2);
    ctx.fill();
    ctx.stroke();
  }

  if (step === 3) {
    // Capsid broken open, genome released
    ctx.strokeStyle = '#884EA0';
    ctx.lineWidth = 2;
    ctx.setLineDash([4, 3]);
    ctx.beginPath();
    ctx.arc(cx, virusY, w * 0.1, 0, Math.PI * 2);
    ctx.stroke();
    ctx.setLineDash([]);
    ctx.strokeStyle = '#27AE60';
    ctx.lineWidth = 2;
    for (let i = 0; i < 5; i++) {
      const a = (i / 5) * Math.PI * 2;
      ctx.beginPath();
      ctx.moveTo(cx, virusY);
      ctx.lineTo(cx + Math.cos(a) * w * 0.2, virusY + Math.sin(a) * h * 0.15);
      ctx.stroke();
    }
  }
}

// ─────────────────────────────────────────────────────────────

static drawRNAReplication(ctx, x, y, width, height, type, structure) {
  ctx.save();
  ctx.translate(x, y);

  switch (structure) {
    case 'complete':
      this.drawRNAReplicationFull(ctx, {}, width, height);
      break;
    case 'rdrp-binding':
      this.drawRNAReplicationStep(ctx, {}, width, height, 0);
      break;
    case 'negative-strand':
      this.drawRNAReplicationStep(ctx, {}, width, height, 1);
      break;
    case 'positive-strand':
      this.drawRNAReplicationStep(ctx, {}, width, height, 2);
      break;
    case 'translation':
      this.drawRNAReplicationStep(ctx, {}, width, height, 3);
      break;
  }

  ctx.restore();
}

static drawRNAReplicationFull(ctx, color, w, h) {
  ctx.fillStyle = '#0D1117';
  ctx.fillRect(0, 0, w, h);
  ctx.fillStyle = '#ECF0F1';
  ctx.font = `bold ${w * 0.042}px Arial`;
  ctx.fillText('RNA-Dependent RNA Replication', w * 0.18, h * 0.06);

  const labels = ['RdRp Binding', '(−) Strand Synthesis', '(+) Strand Synthesis', 'Translation'];
  labels.forEach((label, i) => {
    const ox = (i / 4) * w;
    this.drawRNAReplicationStep(ctx, {}, w / 4, h * 0.78, ox, h * 0.12, i);
    ctx.fillStyle = '#ECF0F1';
    ctx.font = `${w * 0.022}px Arial`;
    ctx.fillText(label, ox + w * 0.01, h * 0.96);
    if (i < 3) {
      ctx.fillStyle = '#F39C12';
      ctx.font = `bold ${w * 0.04}px Arial`;
      ctx.fillText('→', ox + w / 4 * 0.84, h * 0.53);
    }
  });
}

static drawRNAReplicationStep(ctx, color, w, h, ox = 0, oy = 0, step = 0) {
  const cx = ox + w * 0.5;
  const cy = oy + h * 0.5;

  // (+) strand template
  ctx.strokeStyle = '#E74C3C';
  ctx.lineWidth = 4;
  ctx.beginPath();
  ctx.moveTo(ox + w * 0.08, cy - h * 0.08);
  for (let i = 0; i <= 40; i++) {
    const t = i / 40;
    ctx.lineTo(ox + w * 0.08 + t * w * 0.84, cy - h * 0.08 + Math.sin(t * Math.PI * 5) * h * 0.08);
  }
  ctx.stroke();
  ctx.fillStyle = '#E74C3C';
  ctx.font = `${w * 0.032}px Arial`;
  ctx.fillText('(+) ssRNA', ox + w * 0.65, cy - h * 0.2);

  if (step === 0) {
    // RdRp complex binding
    ctx.fillStyle = '#F39C12';
    ctx.beginPath();
    ctx.ellipse(cx, cy - h * 0.06, w * 0.1, h * 0.09, 0, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = '#2C3E50';
    ctx.font = `${w * 0.028}px Arial`;
    ctx.fillStyle = '#ECF0F1';
    ctx.fillText('RdRp', cx - w * 0.06, cy - h * 0.04);
  }

  if (step >= 1) {
    // (−) strand being synthesized
    ctx.strokeStyle = '#2980B9';
    ctx.lineWidth = 4;
    ctx.beginPath();
    const progress = step === 1 ? 0.55 : 1.0;
    ctx.moveTo(ox + w * 0.08, cy + h * 0.08);
    for (let i = 0; i <= 40 * progress; i++) {
      const t = i / 40;
      ctx.lineTo(ox + w * 0.08 + t * w * 0.84, cy + h * 0.08 + Math.sin(t * Math.PI * 5 + Math.PI) * h * 0.08);
    }
    ctx.stroke();
    ctx.fillStyle = '#2980B9';
    ctx.fillText('(−) strand', ox + w * 0.65, cy + h * 0.24);

    // RdRp moving
    ctx.fillStyle = '#F39C12';
    ctx.beginPath();
    ctx.ellipse(ox + w * 0.08 + progress * w * 0.84, cy, w * 0.1, h * 0.09, 0, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = '#ECF0F1';
    ctx.fillText('RdRp', ox + w * 0.08 + progress * w * 0.84 - w * 0.06, cy + h * 0.02);
  }

  if (step === 3) {
    // Ribosomes translating
    ctx.fillStyle = '#27AE60';
    ctx.font = `${w * 0.032}px Arial`;
    ctx.fillText('Ribosome → Protein', ox + w * 0.1, oy + h * 0.88);
    for (let i = 0; i < 3; i++) {
      ctx.fillStyle = '#27AE60';
      ctx.beginPath();
      ctx.ellipse(ox + w * (0.2 + i * 0.25), cy + h * 0.22, w * 0.06, h * 0.06, 0, 0, Math.PI * 2);
      ctx.fill();
    }
  }
}

// ─────────────────────────────────────────────────────────────

static drawRetrovirusCycle(ctx, x, y, width, height, type, structure) {
  ctx.save();
  ctx.translate(x, y);

  switch (structure) {
    case 'complete':
      this.drawRetrovirusCycleFull(ctx, {}, width, height);
      break;
    case 'entry':
      this.drawRetrovirusStep(ctx, {}, width, height, 0);
      break;
    case 'reverse-transcription':
      this.drawRetrovirusStep(ctx, {}, width, height, 1);
      break;
    case 'integration':
      this.drawRetrovirusStep(ctx, {}, width, height, 2);
      break;
    case 'transcription':
      this.drawRetrovirusStep(ctx, {}, width, height, 3);
      break;
    case 'budding':
      this.drawRetrovirusStep(ctx, {}, width, height, 4);
      break;
  }

  ctx.restore();
}

static drawRetrovirusCycleFull(ctx, color, w, h) {
  ctx.fillStyle = '#0D1117';
  ctx.fillRect(0, 0, w, h);
  ctx.fillStyle = '#ECF0F1';
  ctx.font = `bold ${w * 0.042}px Arial`;
  ctx.fillText('Retrovirus Lifecycle', w * 0.32, h * 0.06);

  const labels = ['Entry', 'Reverse\nTranscription', 'Integration', 'Transcription', 'Budding'];
  labels.forEach((label, i) => {
    const ox = (i / 5) * w;
    this.drawRetrovirusStep(ctx, {}, w / 5, h * 0.78, ox, h * 0.12, i);
    ctx.fillStyle = '#ECF0F1';
    ctx.font = `${w * 0.022}px Arial`;
    label.split('\n').forEach((line, li) =>
      ctx.fillText(line, ox + w * 0.01, h * (0.93 + li * 0.04))
    );
    if (i < 4) {
      ctx.fillStyle = '#884EA0';
      ctx.font = `bold ${w * 0.04}px Arial`;
      ctx.fillText('→', ox + w / 5 * 0.84, h * 0.53);
    }
  });
}

static drawRetrovirusStep(ctx, color, w, h, ox = 0, oy = 0, step = 0) {
  const cx = ox + w * 0.5;
  const cy = oy + h * 0.5;

  // Cell outline
  ctx.fillStyle = '#1E3A5F';
  ctx.strokeStyle = '#2980B9';
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.ellipse(cx, cy + h * 0.05, w * 0.4, h * 0.35, 0, 0, Math.PI * 2);
  ctx.fill();
  ctx.stroke();

  // Nucleus
  ctx.fillStyle = '#152A40';
  ctx.strokeStyle = '#F39C12';
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.ellipse(cx, cy + h * 0.08, w * 0.18, h * 0.16, 0, 0, Math.PI * 2);
  ctx.fill();
  ctx.stroke();

  if (step === 0) {
    // Retrovirus particle outside
    ctx.fillStyle = '#884EA0';
    ctx.beginPath();
    ctx.arc(cx, oy + h * 0.1, w * 0.1, 0, Math.PI * 2);
    ctx.fill();
    ctx.strokeStyle = '#6C3483';
    ctx.lineWidth = 2;
    ctx.stroke();
    // RNA inside virus
    ctx.strokeStyle = '#E74C3C';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.arc(cx, oy + h * 0.1, w * 0.05, 0, Math.PI * 2);
    ctx.stroke();
    // Arrow
    ctx.strokeStyle = '#ECF0F1';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(cx, oy + h * 0.22);
    ctx.lineTo(cx, cy - h * 0.35);
    ctx.stroke();
  }

  if (step === 1) {
    // RT converting RNA → DNA
    ctx.strokeStyle = '#E74C3C';
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.moveTo(cx - w * 0.25, cy - h * 0.1);
    ctx.lineTo(cx + w * 0.25, cy - h * 0.1);
    ctx.stroke();
    ctx.strokeStyle = '#27AE60';
    ctx.lineWidth = 3;
    ctx.setLineDash([4, 3]);
    ctx.beginPath();
    ctx.moveTo(cx - w * 0.25, cy);
    ctx.lineTo(cx + w * 0.25, cy);
    ctx.stroke();
    ctx.setLineDash([]);
    // RT enzyme
    ctx.fillStyle = '#F39C12';
    ctx.beginPath();
    ctx.ellipse(cx, cy - h * 0.05, w * 0.08, h * 0.08, 0, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = '#ECF0F1';
    ctx.font = `${w * 0.028}px Arial`;
    ctx.fillText('RT', cx - w * 0.03, cy - h * 0.03);
  }

  if (step === 2) {
    // Provirus integrated in nucleus
    ctx.strokeStyle = '#27AE60';
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.arc(cx, cy + h * 0.08, w * 0.14, 0, Math.PI * 1.5);
    ctx.stroke();
    ctx.strokeStyle = '#E74C3C';
    ctx.lineWidth = 5;
    ctx.beginPath();
    ctx.arc(cx, cy + h * 0.08, w * 0.14, Math.PI * 1.5, Math.PI * 2);
    ctx.stroke();
    ctx.fillStyle = '#ECF0F1';
    ctx.font = `${w * 0.025}px Arial`;
    ctx.fillText('Provirus', cx + w * 0.06, cy - h * 0.06);
  }

  if (step === 3) {
    // mRNA transcribed from provirus
    ctx.strokeStyle = '#E74C3C';
    ctx.lineWidth = 5;
    ctx.beginPath();
    ctx.arc(cx, cy + h * 0.08, w * 0.14, Math.PI * 1.5, Math.PI * 2);
    ctx.stroke();
    ctx.strokeStyle = '#E74C3C';
    ctx.lineWidth = 2;
    ctx.setLineDash([3, 2]);
    ctx.beginPath();
    ctx.moveTo(cx + w * 0.18, cy - h * 0.04);
    ctx.lineTo(cx + w * 0.3, cy - h * 0.18);
    ctx.stroke();
    ctx.setLineDash([]);
    ctx.fillStyle = '#E74C3C';
    ctx.font = `${w * 0.028}px Arial`;
    ctx.fillText('mRNA', cx + w * 0.24, cy - h * 0.22);
  }

  if (step === 4) {
    // Budding from membrane
    ctx.fillStyle = '#884EA0';
    ctx.strokeStyle = '#6C3483';
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.arc(cx + w * 0.3, cy - h * 0.3, w * 0.09, 0, Math.PI * 2);
    ctx.fill();
    ctx.stroke();
    // Bud forming
    ctx.fillStyle = 'rgba(142,68,173,0.5)';
    ctx.strokeStyle = '#2980B9';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.arc(cx + w * 0.3, cy - h * 0.12, w * 0.07, 0, Math.PI, true);
    ctx.fill();
    ctx.stroke();
    ctx.fillStyle = '#ECF0F1';
    ctx.font = `${w * 0.028}px Arial`;
    ctx.fillText('New virion', cx + w * 0.16, cy - h * 0.36);
  }
}

// ─────────────────────────────────────────────────────────────

static drawBacteriophageInfection(ctx, x, y, width, height, type, structure) {
  ctx.save();
  ctx.translate(x, y);

  switch (structure) {
    case 'complete':
      this.drawBacteriophageInfectionFull(ctx, {}, width, height);
      break;
    case 'attachment':
      this.drawPhageInfectionStep(ctx, {}, width, height, 0);
      break;
    case 'injection':
      this.drawPhageInfectionStep(ctx, {}, width, height, 1);
      break;
    case 'replication':
      this.drawPhageInfectionStep(ctx, {}, width, height, 2);
      break;
    case 'burst':
      this.drawPhageInfectionStep(ctx, {}, width, height, 3);
      break;
  }

  ctx.restore();
}

static drawBacteriophageInfectionFull(ctx, color, w, h) {
  ctx.fillStyle = '#0D1117';
  ctx.fillRect(0, 0, w, h);
  ctx.fillStyle = '#ECF0F1';
  ctx.font = `bold ${w * 0.042}px Arial`;
  ctx.fillText('Bacteriophage Infection', w * 0.28, h * 0.06);

  const labels = ['Attachment', 'DNA Injection', 'Replication', 'Burst'];
  labels.forEach((label, i) => {
    const ox = (i / 4) * w;
    this.drawPhageInfectionStep(ctx, {}, w / 4, h * 0.78, ox, h * 0.12, i);
    ctx.fillStyle = '#ECF0F1';
    ctx.font = `${w * 0.026}px Arial`;
    ctx.fillText(label, ox + w * 0.02, h * 0.96);
    if (i < 3) {
      ctx.fillStyle = '#E74C3C';
      ctx.font = `bold ${w * 0.04}px Arial`;
      ctx.fillText('→', ox + w / 4 * 0.84, h * 0.53);
    }
  });
}

static drawPhageInfectionStep(ctx, color, w, h, ox = 0, oy = 0, step = 0) {
  const cx = ox + w * 0.5;
  const cy = oy + h * 0.62;

  // Bacterium (rod shaped)
  ctx.fillStyle = step === 3 ? 'rgba(253,235,208,0.3)' : '#FDEBD0';
  ctx.strokeStyle = step === 3 ? '#E74C3C' : '#884EA0';
  ctx.lineWidth = 3;
  ctx.beginPath();
  ctx.ellipse(cx, cy, w * 0.38, h * 0.22, 0, 0, Math.PI * 2);
  ctx.fill();
  ctx.stroke();

  // Bacterial chromosome
  if (step < 3) {
    ctx.strokeStyle = '#2980B9';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.ellipse(cx, cy, w * 0.16, h * 0.1, 0, 0, Math.PI * 2);
    ctx.stroke();
  }

  // Phage above
  const phageY = step === 0 ? oy + h * 0.12 : cy - h * 0.22;
  const drawT4 = (px, py, scale = 1) => {
    // Head
    ctx.fillStyle = '#E74C3C';
    ctx.beginPath();
    for (let i = 0; i < 6; i++) {
      const a = (i / 6) * Math.PI * 2 - Math.PI / 6;
      i === 0
        ? ctx.moveTo(px + Math.cos(a) * w * 0.07 * scale, py + Math.sin(a) * h * 0.1 * scale)
        : ctx.lineTo(px + Math.cos(a) * w * 0.07 * scale, py + Math.sin(a) * h * 0.1 * scale);
    }
    ctx.closePath();
    ctx.fill();
    ctx.strokeStyle = '#C0392B';
    ctx.lineWidth = 1.5;
    ctx.stroke();
    // Tail
    ctx.strokeStyle = '#7F8C8D';
    ctx.lineWidth = 4 * scale;
    ctx.beginPath();
    ctx.moveTo(px, py + h * 0.1 * scale);
    ctx.lineTo(px, py + h * 0.2 * scale);
    ctx.stroke();
    // Baseplate
    ctx.fillStyle = '#884EA0';
    ctx.beginPath();
    ctx.rect(px - w * 0.05 * scale, py + h * 0.2 * scale, w * 0.1 * scale, h * 0.04 * scale);
    ctx.fill();
    // Tail fibers
    for (let i = -2; i <= 2; i += 2) {
      ctx.strokeStyle = '#F39C12';
      ctx.lineWidth = 1.5;
      ctx.beginPath();
      ctx.moveTo(px + w * 0.02 * scale * i, py + h * 0.24 * scale);
      ctx.lineTo(px + w * 0.05 * scale * i, py + h * 0.32 * scale);
      ctx.stroke();
    }
  };

  drawT4(cx, phageY, 0.9);

  if (step === 1) {
    // DNA injecting (green line into cell)
    ctx.strokeStyle = '#27AE60';
    ctx.lineWidth = 3;
    ctx.setLineDash([4, 2]);
    ctx.beginPath();
    ctx.moveTo(cx, phageY + h * 0.32);
    ctx.lineTo(cx, cy - h * 0.1);
    ctx.stroke();
    ctx.setLineDash([]);
  }

  if (step === 2) {
    // Multiple phage heads assembling inside
    ctx.strokeStyle = '#E74C3C';
    ctx.lineWidth = 2;
    for (let i = 0; i < 4; i++) {
      const px2 = cx - w * 0.22 + i * w * 0.15;
      ctx.fillStyle = '#E74C3C';
      ctx.globalAlpha = 0.7;
      ctx.beginPath();
      for (let s = 0; s < 6; s++) {
        const a = (s / 6) * Math.PI * 2;
        s === 0
          ? ctx.moveTo(px2 + Math.cos(a) * w * 0.04, cy + Math.sin(a) * h * 0.06)
          : ctx.lineTo(px2 + Math.cos(a) * w * 0.04, cy + Math.sin(a) * h * 0.06);
      }
      ctx.closePath();
      ctx.fill();
      ctx.globalAlpha = 1;
    }
  }

  if (step === 3) {
    // Burst - multiple phages released
    const relPositions = [[-0.38, -0.3], [0.35, -0.28], [-0.3, 0.15], [0.3, 0.18], [0, -0.38], [-0.1, 0.3]];
    relPositions.forEach(([dx, dy]) => drawT4(cx + w * dx, oy + h * 0.55 + h * dy, 0.4));
    // Lysis mark
    ctx.strokeStyle = '#E74C3C';
    ctx.lineWidth = 3;
    ctx.setLineDash([5, 3]);
    ctx.beginPath();
    ctx.ellipse(cx, cy, w * 0.38, h * 0.22, 0, 0, Math.PI * 2);
    ctx.stroke();
    ctx.setLineDash([]);
  }
}

// ─────────────────────────────────────────────────────────────

static drawAntigenic Variation(ctx, x, y, width, height, type, structure) {
  ctx.save();
  ctx.translate(x, y);

  switch (structure) {
    case 'complete':
      this.drawAntigenicVariationFull(ctx, {}, width, height);
      break;
    case 'antigenic-drift':
      this.drawAntigenicDrift(ctx, {}, width, height);
      break;
    case 'antigenic-shift':
      this.drawAntigenicShift(ctx, {}, width, height);
      break;
    case 'ha-variation':
      this.drawHAVariation(ctx, {}, width, height);
      break;
  }

  ctx.restore();
}

static drawAntigenicVariationFull(ctx, color, w, h) {
  ctx.fillStyle = '#ECF0F1';
  ctx.fillRect(0, 0, w, h);
  ctx.fillStyle = '#2C3E50';
  ctx.font = `bold ${w * 0.042}px Arial`;
  ctx.fillText('Influenza Antigenic Variation', w * 0.2, h * 0.06);

  this.drawAntigenicDrift(ctx, {}, w * 0.48, h * 0.44, 0, h * 0.08);
  this.drawAntigenicShift(ctx, {}, w * 0.48, h * 0.44, w * 0.52, h * 0.08);

  ctx.fillStyle = '#2C3E50';
  ctx.font = `bold ${w * 0.034}px Arial`;
  ctx.fillText('Antigenic Drift', w * 0.1, h * 0.58);
  ctx.fillText('Antigenic Shift', w * 0.62, h * 0.58);

  this.drawHAVariation(ctx, {}, w, h * 0.36, 0, h * 0.62);
}

static drawAntigenicDrift(ctx, color, w, h, ox = 0, oy = 0) {
  const drawInfluenza = (px, py, haColor, naColor, scale = 1) => {
    ctx.fillStyle = '#C0392B';
    ctx.beginPath();
    ctx.arc(px, py, w * 0.07 * scale, 0, Math.PI * 2);
    ctx.fill();
    ctx.strokeStyle = '#922B21';
    ctx.lineWidth = 1.5;
    ctx.stroke();
    // HA spikes
    for (let i = 0; i < 8; i++) {
      const a = (i / 8) * Math.PI * 2;
      ctx.strokeStyle = haColor;
      ctx.lineWidth = 3;
      ctx.beginPath();
      ctx.moveTo(px + Math.cos(a) * w * 0.07 * scale, py + Math.sin(a) * w * 0.07 * scale);
      ctx.lineTo(px + Math.cos(a) * w * 0.11 * scale, py + Math.sin(a) * w * 0.11 * scale);
      ctx.stroke();
      ctx.fillStyle = haColor;
      ctx.beginPath();
      ctx.arc(px + Math.cos(a) * w * 0.115 * scale, py + Math.sin(a) * w * 0.115 * scale, w * 0.014 * scale, 0, Math.PI * 2);
      ctx.fill();
    }
    // NA spikes
    for (let i = 0; i < 5; i++) {
      const a = (i / 5) * Math.PI * 2 + 0.3;
      ctx.strokeStyle = naColor;
      ctx.lineWidth = 3;
      ctx.beginPath();
      ctx.moveTo(px + Math.cos(a) * w * 0.07 * scale, py + Math.sin(a) * w * 0.07 * scale);
      ctx.lineTo(px + Math.cos(a) * w * 0.1 * scale, py + Math.sin(a) * w * 0.1 * scale);
      ctx.stroke();
    }
  };

  // Ancestral → drift variants
  const variants = [
    { x: 0.18, y: 0.35, ha: '#2980B9', na: '#27AE60', label: 'H1' },
    { x: 0.45, y: 0.35, ha: '#3498DB', na: '#2ECC71', label: 'H1*' },
    { x: 0.72, y: 0.35, ha: '#5DADE2', na: '#58D68D', label: 'H1**' },
  ];
  variants.forEach(({ x, y, ha, na, label }) => {
    drawInfluenza(ox + w * x, oy + h * y, ha, na);
    ctx.fillStyle = '#2C3E50';
    ctx.font = `${w * 0.04}px Arial`;
    ctx.fillText(label, ox + w * x - w * 0.04, oy + h * y + h * 0.2);
  });

  // Mutation arrows
  ctx.strokeStyle = '#F39C12';
  ctx.lineWidth = 2;
  [0, 1].forEach(i => {
    ctx.beginPath();
    ctx.moveTo(ox + w * (variants[i].x + 0.1), oy + h * 0.35);
    ctx.lineTo(ox + w * (variants[i + 1].x - 0.1), oy + h * 0.35);
    ctx.stroke();
    ctx.fillStyle = '#E74C3C';
    ctx.font = `${w * 0.028}px Arial`;
    ctx.fillText('mutation', ox + w * (variants[i].x + 0.12), oy + h * 0.28);
  });

  ctx.fillStyle = '#2C3E50';
  ctx.font = `bold ${w * 0.038}px Arial`;
  ctx.fillText('Antigenic Drift (mutations in HA/NA)', ox + w * 0.01, oy + h * 0.08);
}

static drawAntigenicShift(ctx, color, w, h, ox = 0, oy = 0) {
  const cx = ox + w * 0.5;
  const cy = oy + h * 0.45;

  ctx.fillStyle = '#2C3E50';
  ctx.font = `bold ${w * 0.038}px Arial`;
  ctx.fillText('Antigenic Shift (gene reassortment)', ox + w * 0.01, oy + h * 0.08);

  // Human H1N1
  ctx.fillStyle = '#2980B9';
  ctx.beginPath();
  ctx.arc(ox + w * 0.22, cy - h * 0.05, w * 0.1, 0, Math.PI * 2);
  ctx.fill();
  ctx.fillStyle = '#ECF0F1';
  ctx.font = `${w * 0.035}px Arial`;
  ctx.fillText('H1N1', ox + w * 0.16, cy - h * 0.04);

  // Avian H3N2
  ctx.fillStyle = '#27AE60';
  ctx.beginPath();
  ctx.arc(ox + w * 0.78, cy - h * 0.05, w * 0.1, 0, Math.PI * 2);
  ctx.fill();
  ctx.fillStyle = '#ECF0F1';
  ctx.fillText('H3N2', ox + w * 0.72, cy - h * 0.04);

  // Co-infection arrow
  ctx.strokeStyle = '#F39C12';
  ctx.lineWidth = 3;
  ctx.beginPath();
  ctx.moveTo(ox + w * 0.32, cy - h * 0.05);
  ctx.lineTo(ox + w * 0.68, cy - h * 0.05);
  ctx.stroke();
  ctx.fillStyle = '#F39C12';
  ctx.font = `${w * 0.028}px Arial`;
  ctx.fillText('Co-infect', ox + w * 0.42, cy - h * 0.12);

  // Reassortant (novel subtype)
  ctx.fillStyle = '#884EA0';
  ctx.beginPath();
  ctx.arc(cx, cy + h * 0.25, w * 0.12, 0, Math.PI * 2);
  ctx.fill();
  ctx.fillStyle = '#ECF0F1';
  ctx.font = `${w * 0.033}px Arial`;
  ctx.fillText('H1N2', cx - w * 0.06, cy + h * 0.27);
  ctx.font = `${w * 0.026}px Arial`;
  ctx.fillText('Novel subtype!', cx - w * 0.1, cy + h * 0.42);

  // Mix arrows
  ctx.strokeStyle = '#884EA0';
  ctx.lineWidth = 2;
  [[0.22, cy], [0.78, cy]].forEach(([px, py]) => {
    ctx.beginPath();
    ctx.moveTo(ox + w * px, py + h * 0.05);
    ctx.lineTo(cx, cy + h * 0.13);
    ctx.stroke();
  });
}

static drawHAVariation(ctx, color, w, h, ox = 0, oy = 0) {
  ctx.fillStyle = '#2C3E50';
  ctx.font = `bold ${w * 0.036}px Arial`;
  ctx.fillText('Hemagglutinin (HA) antigenic sites', ox + w * 0.25, oy + h * 0.1);

  const cx = ox + w * 0.5;
  const cy = oy + h * 0.65;

  // HA trimer stalk
  ctx.fillStyle = '#1A5276';
  ctx.fillRect(cx - w * 0.04, cy - h * 0.35, w * 0.08, h * 0.38);
  ctx.strokeStyle = '#2980B9';
  ctx.lineWidth = 2;
  ctx.strokeRect(cx - w * 0.04, cy - h * 0.35, w * 0.08, h * 0.38);

  // HA head (globular domain)
  ctx.fillStyle = '#5DADE2';
  ctx.beginPath();
  ctx.ellipse(cx, cy - h * 0.42, w * 0.14, h * 0.16, 0, 0, Math.PI * 2);
  ctx.fill();
  ctx.strokeStyle = '#1A5276';
  ctx.lineWidth = 2;
  ctx.stroke();

  // Antigenic sites (Sa, Sb, Ca, Cb, Ce)
  const sites = [
    { dx: 0, dy: -0.16, label: 'Sa', col: '#E74C3C' },
    { dx: 0.1, dy: -0.1, label: 'Sb', col: '#F39C12' },
    { dx: -0.1, dy: -0.1, label: 'Ca', col: '#27AE60' },
    { dx: 0.06, dy: -0.02, label: 'Cb', col: '#884EA0' },
    { dx: -0.06, dy: -0.02, label: 'Ce', col: '#2980B9' },
  ];
  sites.forEach(({ dx, dy, label, col }) => {
    ctx.fillStyle = col;
    ctx.beginPath();
    ctx.arc(cx + w * dx, cy - h * 0.42 + h * dy, w * 0.025, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = '#2C3E50';
    ctx.font = `bold ${w * 0.026}px Arial`;
    ctx.fillText(label, cx + w * dx - w * 0.016, cy - h * 0.42 + h * dy + h * 0.02);
  });

  // Receptor binding site
  ctx.strokeStyle = '#F1C40F';
  ctx.lineWidth = 3;
  ctx.beginPath();
  ctx.arc(cx, cy - h * 0.42, w * 0.05, 0, Math.PI * 2);
  ctx.stroke();
  ctx.fillStyle = '#F1C40F';
  ctx.font = `${w * 0.024}px Arial`;
  ctx.fillText('RBS', cx - w * 0.02, cy - h * 0.56);

  // Membrane anchor
  ctx.fillStyle = '#D5B896';
  ctx.fillRect(ox, cy, w, h - (cy - oy));
  ctx.fillStyle = '#2C3E50';
  ctx.fillText('Viral membrane', ox + w * 0.38, cy + h * 0.08);
}

// ============================================================
// FUNGI COMPLETE SYSTEMS
// ============================================================

static drawAsexualReproductionFungi(ctx, x, y, width, height, type, structure) {
  ctx.save();
  ctx.translate(x, y);

  switch (structure) {
    case 'complete':
      this.drawAsexualFungiFull(ctx, {}, width, height);
      break;
    case 'conidiation':
      this.drawAsexualFungiStep(ctx, {}, width, height, 'conidiation');
      break;
    case 'sporangiospore':
      this.drawAsexualFungiStep(ctx, {}, width, height, 'sporangiospore');
      break;
    case 'budding':
      this.drawAsexualFungiStep(ctx, {}, width, height, 'budding');
      break;
    case 'fragmentation':
      this.drawAsexualFungiStep(ctx, {}, width, height, 'fragmentation');
      break;
  }

  ctx.restore();
}

static drawAsexualFungiFull(ctx, color, w, h) {
  ctx.fillStyle = '#ECF0F1';
  ctx.fillRect(0, 0, w, h);
  ctx.fillStyle = '#2C3E50';
  ctx.font = `bold ${w * 0.042}px Arial`;
  ctx.fillText('Asexual Reproduction in Fungi', w * 0.2, h * 0.06);

  const modes = ['conidiation', 'sporangiospore', 'budding', 'fragmentation'];
  const labels = ['Conidiation', 'Sporangiospore', 'Budding', 'Fragmentation'];
  modes.forEach((mode, i) => {
    const ox = (i / 4) * w;
    this.drawAsexualFungiStep(ctx, {}, w / 4, h * 0.78, ox, h * 0.12, mode);
    ctx.fillStyle = '#2C3E50';
    ctx.font = `${w * 0.026}px Arial`;
    ctx.fillText(labels[i], ox + w * 0.02, h * 0.96);
  });
}

static drawAsexualFungiStep(ctx, color, w, h, ox = 0, oy = 0, mode = 'conidiation') {
  const cx = ox + w * 0.5;
  const cy = oy + h * 0.5;

  if (mode === 'conidiation') {
    // Conidiophore + chains
    ctx.strokeStyle = '#884EA0';
    ctx.lineWidth = 4;
    ctx.beginPath();
    ctx.moveTo(cx, oy + h * 0.9);
    ctx.lineTo(cx, oy + h * 0.55);
    ctx.stroke();
    ctx.fillStyle = '#8E44AD';
    ctx.beginPath();
    ctx.arc(cx, oy + h * 0.48, w * 0.08, 0, Math.PI * 2);
    ctx.fill();
    for (let i = 0; i < 6; i++) {
      const a = (i / 6) * Math.PI * 2;
      for (let c = 0; c < 3; c++) {
        const dist = w * (0.1 + c * 0.09);
        ctx.fillStyle = `rgb(${46 + c * 30}, ${174 - c * 30}, ${70 + c * 20})`;
        ctx.beginPath();
        ctx.arc(cx + Math.cos(a) * dist, oy + h * 0.48 + Math.sin(a) * dist, w * 0.03, 0, Math.PI * 2);
        ctx.fill();
      }
    }
  }

  if (mode === 'sporangiospore') {
    ctx.strokeStyle = '#884EA0';
    ctx.lineWidth = 4;
    ctx.beginPath();
    ctx.moveTo(cx, oy + h * 0.9);
    ctx.lineTo(cx, oy + h * 0.45);
    ctx.stroke();
    ctx.strokeStyle = '#884EA0';
    ctx.lineWidth = 3;
    ctx.fillStyle = 'rgba(142,68,173,0.2)';
    ctx.beginPath();
    ctx.arc(cx, oy + h * 0.32, w * 0.22, 0, Math.PI * 2);
    ctx.fill();
    ctx.stroke();
    for (let i = 0; i < 10; i++) {
      const a = (i / 10) * Math.PI * 2;
      ctx.fillStyle = '#27AE60';
      ctx.beginPath();
      ctx.ellipse(cx + Math.cos(a) * w * 0.12, oy + h * 0.32 + Math.sin(a) * h * 0.12, w * 0.03, h * 0.025, a, 0, Math.PI * 2);
      ctx.fill();
    }
    // Released spores
    [[0.2, 0.08], [0.75, 0.1], [0.88, 0.25]].forEach(([px, py]) => {
      ctx.fillStyle = '#27AE60';
      ctx.beginPath();
      ctx.arc(ox + w * px, oy + h * py, w * 0.03, 0, Math.PI * 2);
      ctx.fill();
    });
  }

  if (mode === 'budding') {
    // Yeast with bud scar chain
    const positions = [[0.5, 0.55], [0.5, 0.38], [0.5, 0.22], [0.62, 0.3], [0.38, 0.45]];
    positions.forEach(([px, py], i) => {
      ctx.fillStyle = i === 0 ? '#F39C12' : '#FAD7A0';
      ctx.strokeStyle = '#D35400';
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.ellipse(ox + w * px, oy + h * py, w * 0.1, h * 0.1, 0, 0, Math.PI * 2);
      ctx.fill();
      ctx.stroke();
    });
    ctx.fillStyle = '#E74C3C';
    ctx.beginPath();
    ctx.arc(ox + w * 0.5, oy + h * 0.455, w * 0.015, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = '#2C3E50';
    ctx.font = `${w * 0.045}px Arial`;
    ctx.fillText('Bud scar', ox + w * 0.55, oy + h * 0.47);
  }

  if (mode === 'fragmentation') {
    // Hypha breaking into arthrospores
    const segCount = 7;
    for (let i = 0; i < segCount; i++) {
      const sx = ox + w * (0.08 + i * 0.13);
      const gap = i > 3 ? w * 0.025 : 0;
      ctx.fillStyle = i > 3 ? '#27AE60' : '#884EA0';
      ctx.strokeStyle = '#2C3E50';
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.roundRect ? ctx.roundRect(sx + gap, cy - h * 0.1, w * 0.1, h * 0.2, 4)
        : ctx.rect(sx + gap, cy - h * 0.1, w * 0.1, h * 0.2);
      ctx.fill();
      ctx.stroke();
    }
    ctx.strokeStyle = '#E74C3C';
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.moveTo(ox + w * 0.55, cy - h * 0.18);
    ctx.lineTo(ox + w * 0.55, cy + h * 0.18);
    ctx.stroke();
    ctx.fillStyle = '#2C3E50';
    ctx.font = `${w * 0.038}px Arial`;
    ctx.fillText('Arthrospores', ox + w * 0.48, oy + h * 0.82);
  }
}

// ─────────────────────────────────────────────────────────────

static drawSexualReproductionFungi(ctx, x, y, width, height, type, structure) {
  ctx.save();
  ctx.translate(x, y);

  switch (structure) {
    case 'complete':
      this.drawSexualFungiFull(ctx, {}, width, height);
      break;
    case 'plasmogamy':
      this.drawSexualFungiStep(ctx, {}, width, height, 0);
      break;
    case 'karyogamy':
      this.drawSexualFungiStep(ctx, {}, width, height, 1);
      break;
    case 'meiosis':
      this.drawSexualFungiStep(ctx, {}, width, height, 2);
      break;
    case 'spore-dispersal':
      this.drawSexualFungiStep(ctx, {}, width, height, 3);
      break;
  }

  ctx.restore();
}

static drawSexualFungiFull(ctx, color, w, h) {
  ctx.fillStyle = '#ECF0F1';
  ctx.fillRect(0, 0, w, h);
  ctx.fillStyle = '#2C3E50';
  ctx.font = `bold ${w * 0.042}px Arial`;
  ctx.fillText('Sexual Reproduction in Fungi', w * 0.22, h * 0.06);

  const labels = ['Plasmogamy', 'Karyogamy', 'Meiosis', 'Spore Dispersal'];
  labels.forEach((label, i) => {
    const ox = (i / 4) * w;
    this.drawSexualFungiStep(ctx, {}, w / 4, h * 0.78, ox, h * 0.12, i);
    ctx.fillStyle = '#2C3E50';
    ctx.font = `${w * 0.026}px Arial`;
    ctx.fillText(label, ox + w * 0.02, h * 0.96);
    if (i < 3) {
      ctx.fillStyle = '#884EA0';
      ctx.font = `bold ${w * 0.04}px Arial`;
      ctx.fillText('→', ox + w / 4 * 0.84, h * 0.53);
    }
  });
}

static drawSexualFungiStep(ctx, color, w, h, ox = 0, oy = 0, step = 0) {
  const cx = ox + w * 0.5;
  const cy = oy + h * 0.5;

  if (step === 0) {
    // Two compatible mycelia fusing
    ctx.strokeStyle = '#884EA0';
    ctx.lineWidth = 5;
    ctx.fillStyle = '#D7BDE2';
    ctx.beginPath();
    ctx.moveTo(ox + w * 0.05, cy);
    ctx.lineTo(cx - w * 0.05, cy);
    ctx.stroke();
    ctx.strokeStyle = '#E74C3C';
    ctx.fillStyle = '#FADBD8';
    ctx.beginPath();
    ctx.moveTo(ox + w * 0.95, cy);
    ctx.lineTo(cx + w * 0.05, cy);
    ctx.stroke();
    // Fusion point
    ctx.fillStyle = '#F39C12';
    ctx.beginPath();
    ctx.arc(cx, cy, w * 0.07, 0, Math.PI * 2);
    ctx.fill();
    // Nuclei
    ctx.fillStyle = '#884EA0';
    ctx.beginPath();
    ctx.arc(cx - w * 0.2, cy, w * 0.04, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = '#E74C3C';
    ctx.beginPath();
    ctx.arc(cx + w * 0.2, cy, w * 0.04, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = '#2C3E50';
    ctx.font = `${w * 0.035}px Arial`;
    ctx.fillText('(n)', cx - w * 0.25, cy - h * 0.1);
    ctx.fillText('(n)', cx + w * 0.18, cy - h * 0.1);
  }

  if (step === 1) {
    // Zygote with 2 nuclei fusing
    ctx.fillStyle = '#FDEBD0';
    ctx.strokeStyle = '#884EA0';
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.ellipse(cx, cy, w * 0.25, h * 0.28, 0, 0, Math.PI * 2);
    ctx.fill();
    ctx.stroke();
    // Two nuclei merging
    ctx.fillStyle = '#884EA0';
    ctx.beginPath();
    ctx.arc(cx - w * 0.07, cy, w * 0.06, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = '#E74C3C';
    ctx.beginPath();
    ctx.arc(cx + w * 0.07, cy, w * 0.06, 0, Math.PI * 2);
    ctx.fill();
    // Fusion arrow
    ctx.strokeStyle = '#F39C12';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(cx - w * 0.01, cy);
    ctx.lineTo(cx + w * 0.01, cy);
    ctx.stroke();
    ctx.fillStyle = '#2C3E50';
    ctx.font = `${w * 0.035}px Arial`;
    ctx.fillText('(2n)', cx - w * 0.06, cy + h * 0.35);
  }

  if (step === 2) {
    // Meiosis producing 4 haploid nuclei
    const positions = [[cx - w * 0.15, cy - h * 0.15], [cx + w * 0.15, cy - h * 0.15], [cx - w * 0.15, cy + h * 0.15], [cx + w * 0.15, cy + h * 0.15]];
    const cols = ['#884EA0', '#E74C3C', '#2980B9', '#27AE60'];
    positions.forEach(([nx, ny], i) => {
      ctx.fillStyle = cols[i];
      ctx.beginPath();
      ctx.arc(nx, ny, w * 0.07, 0, Math.PI * 2);
      ctx.fill();
      ctx.fillStyle = '#ECF0F1';
      ctx.font = `${w * 0.03}px Arial`;
      ctx.fillText('n', nx - w * 0.014, ny + h * 0.014);
    });
    ctx.strokeStyle = '#F39C12';
    ctx.lineWidth = 2;
    ctx.setLineDash([3, 2]);
    ctx.beginPath();
    ctx.moveTo(cx - w * 0.15, cy);
    ctx.lineTo(cx + w * 0.15, cy);
    ctx.moveTo(cx, cy - h * 0.15);
    ctx.lineTo(cx, cy + h * 0.15);
    ctx.stroke();
    ctx.setLineDash([]);
  }

  if (step === 3) {
    // Spores dispersing
    const sporePositions = [[0.5, 0.5], [0.2, 0.25], [0.8, 0.2], [0.15, 0.7], [0.82, 0.72], [0.5, 0.15]];
    const cols = ['#884EA0', '#E74C3C', '#2980B9', '#27AE60', '#F39C12', '#884EA0'];
    sporePositions.forEach(([px, py], i) => {
      ctx.fillStyle = cols[i];
      ctx.beginPath();
      ctx.arc(ox + w * px, oy + h * py, w * 0.055, 0, Math.PI * 2);
      ctx.fill();
      ctx.strokeStyle = '#2C3E50';
      ctx.lineWidth = 1.5;
      ctx.stroke();
      if (i > 0) {
        ctx.strokeStyle = 'rgba(0,0,0,0.15)';
        ctx.lineWidth = 1;
        ctx.setLineDash([2, 2]);
        ctx.beginPath();
        ctx.moveTo(ox + w * px, oy + h * py);
        ctx.lineTo(cx, oy + h * 0.5);
        ctx.stroke();
        ctx.setLineDash([]);
      }
    });
  }
}

// ─────────────────────────────────────────────────────────────

static drawDikaryoticCycle(ctx, x, y, width, height, type, structure) {
  ctx.save();
  ctx.translate(x, y);

  switch (structure) {
    case 'complete':
      this.drawDikaryoticCycleFull(ctx, {}, width, height);
      break;
    case 'monokaryotic':
      this.drawDikaryoticPhase(ctx, {}, width, height, 'monokaryotic');
      break;
    case 'plasmogamy':
      this.drawDikaryoticPhase(ctx, {}, width, height, 'plasmogamy');
      break;
    case 'dikaryotic':
      this.drawDikaryoticPhase(ctx, {}, width, height, 'dikaryotic');
      break;
    case 'karyogamy-meiosis':
      this.drawDikaryoticPhase(ctx, {}, width, height, 'karyogamy-meiosis');
      break;
  }

  ctx.restore();
}

static drawDikaryoticCycleFull(ctx, color, w, h) {
  ctx.fillStyle = '#ECF0F1';
  ctx.fillRect(0, 0, w, h);
  ctx.fillStyle = '#2C3E50';
  ctx.font = `bold ${w * 0.042}px Arial`;
  ctx.fillText('Dikaryotic Mycelium Lifecycle', w * 0.22, h * 0.06);

  const phases = ['monokaryotic', 'plasmogamy', 'dikaryotic', 'karyogamy-meiosis'];
  const labels = ['Monokaryotic', 'Plasmogamy', 'Dikaryotic (n+n)', 'Karyogamy & Meiosis'];
  phases.forEach((phase, i) => {
    const ox = (i / 4) * w;
    this.drawDikaryoticPhase(ctx, {}, w / 4, h * 0.78, ox, h * 0.12, phase);
    ctx.fillStyle = '#2C3E50';
    ctx.font = `${w * 0.024}px Arial`;
    ctx.fillText(labels[i], ox + w * 0.01, h * 0.96);
    if (i < 3) {
      ctx.fillStyle = '#884EA0';
      ctx.font = `bold ${w * 0.04}px Arial`;
      ctx.fillText('→', ox + w / 4 * 0.84, h * 0.53);
    }
  });
}

static drawDikaryoticPhase(ctx, color, w, h, ox = 0, oy = 0, phase = 'monokaryotic') {
  const cx = ox + w * 0.5;
  const cy = oy + h * 0.5;

  const drawHypha = (hcx, hcy, col, n1col, n2col = null) => {
    ctx.fillStyle = '#FDEBD0';
    ctx.strokeStyle = col;
    ctx.lineWidth = 4;
    ctx.beginPath();
    ctx.roundRect ? ctx.roundRect(hcx - w * 0.3, hcy - h * 0.1, w * 0.6, h * 0.2, h * 0.05)
      : ctx.rect(hcx - w * 0.3, hcy - h * 0.1, w * 0.6, h * 0.2);
    ctx.fill();
    ctx.stroke();
    ctx.fillStyle = n1col;
    ctx.beginPath();
    ctx.arc(n2col ? hcx - w * 0.1 : hcx, hcy, w * 0.07, 0, Math.PI * 2);
    ctx.fill();
    if (n2col) {
      ctx.fillStyle = n2col;
      ctx.beginPath();
      ctx.arc(hcx + w * 0.1, hcy, w * 0.07, 0, Math.PI * 2);
      ctx.fill();
    }
  };

  if (phase === 'monokaryotic') {
    drawHypha(cx, cy, '#884EA0', '#2980B9');
    ctx.fillStyle = '#2C3E50';
    ctx.font = `${w * 0.038}px Arial`;
    ctx.fillText('1 nucleus (n)', cx - w * 0.2, oy + h * 0.82);
  }

  if (phase === 'plasmogamy') {
    drawHypha(cx - w * 0.15, cy - h * 0.15, '#2980B9', '#2980B9');
    drawHypha(cx + w * 0.15, cy + h * 0.15, '#E74C3C', '#E74C3C');
    ctx.strokeStyle = '#F39C12';
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.moveTo(cx - w * 0.05, cy - h * 0.05);
    ctx.lineTo(cx + w * 0.05, cy + h * 0.05);
    ctx.stroke();
    ctx.fillStyle = '#F39C12';
    ctx.font = `${w * 0.038}px Arial`;
    ctx.fillText('Fusion', cx - w * 0.1, oy + h * 0.82);
  }

  if (phase === 'dikaryotic') {
    drawHypha(cx, cy - h * 0.1, '#884EA0', '#2980B9', '#E74C3C');
    drawHypha(cx, cy + h * 0.2, '#884EA0', '#2980B9', '#E74C3C');
    // Clamp connection
    ctx.strokeStyle = '#F39C12';
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.arc(cx, cy + h * 0.05, w * 0.08, Math.PI * 0.1, Math.PI * 0.9);
    ctx.stroke();
    ctx.fillStyle = '#2C3E50';
    ctx.font = `${w * 0.032}px Arial`;
    ctx.fillText('n+n', cx - w * 0.06, oy + h * 0.82);
  }

  if (phase === 'karyogamy-meiosis') {
    // Diploid then meiosis products
    ctx.fillStyle = '#FDEBD0';
    ctx.strokeStyle = '#884EA0';
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.ellipse(cx, cy, w * 0.2, h * 0.2, 0, 0, Math.PI * 2);
    ctx.fill();
    ctx.stroke();
    const sporeColors = ['#2980B9', '#E74C3C', '#27AE60', '#F39C12'];
    for (let i = 0; i < 4; i++) {
      const a = (i / 4) * Math.PI * 2;
      ctx.fillStyle = sporeColors[i];
      ctx.beginPath();
      ctx.arc(cx + Math.cos(a) * w * 0.2, cy + Math.sin(a) * h * 0.2, w * 0.04, 0, Math.PI * 2);
      ctx.fill();
    }
    ctx.fillStyle = '#2C3E50';
    ctx.font = `${w * 0.032}px Arial`;
    ctx.fillText('→ 4 haploid spores', cx - w * 0.3, oy + h * 0.88);
  }
}

// ─────────────────────────────────────────────────────────────

static drawAscomyceteLifecycle(ctx, x, y, width, height, type, structure) {
  ctx.save();
  ctx.translate(x, y);

  switch (structure) {
    case 'complete':
      this.drawAscomyceteLifecycleFull(ctx, {}, width, height);
      break;
    case 'haploid-mycelium':
      this.drawAscomyceteStage(ctx, {}, width, height, 0);
      break;
    case 'gametangia':
      this.drawAscomyceteStage(ctx, {}, width, height, 1);
      break;
    case 'ascogonium':
      this.drawAscomyceteStage(ctx, {}, width, height, 2);
      break;
    case 'asci-formation':
      this.drawAscomyceteStage(ctx, {}, width, height, 3);
      break;
    case 'ascospore-dispersal':
      this.drawAscomyceteStage(ctx, {}, width, height, 4);
      break;
  }

  ctx.restore();
}

static drawAscomyceteLifecycleFull(ctx, color, w, h) {
  ctx.fillStyle = '#ECF0F1';
  ctx.fillRect(0, 0, w, h);
  ctx.fillStyle = '#2C3E50';
  ctx.font = `bold ${w * 0.042}px Arial`;
  ctx.fillText('Ascomycete Lifecycle', w * 0.3, h * 0.06);

  const labels = ['Haploid Mycelium', 'Gametangia', 'Ascogonium', 'Asci Formation', 'Spore Dispersal'];
  labels.forEach((label, i) => {
    const col = i % 3;
    const row = Math.floor(i / 3);
    const ox = col * (w / 3) + (row === 1 ? w / 6 : 0);
    const oy = row * (h * 0.44) + h * 0.1;
    this.drawAscomyceteStage(ctx, {}, w / 3, h * 0.38, ox, oy, i);
    ctx.fillStyle = '#2C3E50';
    ctx.font = `${w * 0.026}px Arial`;
    ctx.fillText(label, ox + w * 0.01, oy + h * 0.42);
  });
}

static drawAscomyceteStage(ctx, color, w, h, ox = 0, oy = 0, stage = 0) {
  const cx = ox + w * 0.5;
  const cy = oy + h * 0.5;

  if (stage === 0) {
    // Haploid mycelium
    ctx.strokeStyle = '#884EA0';
    ctx.lineWidth = 4;
    for (let i = 0; i < 5; i++) {
      ctx.beginPath();
      ctx.moveTo(ox + w * 0.1, oy + h * (0.3 + i * 0.12));
      ctx.bezierCurveTo(cx, oy + h * (0.25 + i * 0.12), cx, oy + h * (0.35 + i * 0.12), ox + w * 0.9, oy + h * (0.3 + i * 0.12));
      ctx.stroke();
    }
    ctx.fillStyle = '#2980B9';
    ctx.beginPath();
    ctx.arc(cx - w * 0.2, cy, w * 0.04, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = '#2C3E50';
    ctx.font = `${w * 0.038}px Arial`;
    ctx.fillText('(n)', cx - w * 0.32, cy + h * 0.04);
  }

  if (stage === 1) {
    // Antheridium + Ascogonium contact
    ctx.fillStyle = '#2980B9';
    ctx.beginPath();
    ctx.ellipse(cx - w * 0.12, cy, w * 0.08, h * 0.1, 0, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = '#E74C3C';
    ctx.beginPath();
    ctx.ellipse(cx + w * 0.12, cy, w * 0.1, h * 0.12, 0, 0, Math.PI * 2);
    ctx.fill();
    // Trichogyne
    ctx.strokeStyle = '#E74C3C';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(cx + w * 0.12, cy - h * 0.12);
    ctx.lineTo(cx - w * 0.06, cy - h * 0.06);
    ctx.stroke();
    ctx.fillStyle = '#2C3E50';
    ctx.font = `${w * 0.033}px Arial`;
    ctx.fillText('Antheridium', cx - w * 0.25, cy + h * 0.22);
    ctx.fillText('Ascogonium', cx + w * 0.02, cy + h * 0.22);
  }

  if (stage === 2) {
    // Dikaryotic ascogenous hyphae
    ctx.strokeStyle = '#884EA0';
    ctx.lineWidth = 4;
    ctx.beginPath();
    ctx.moveTo(cx, oy + h * 0.8);
    ctx.bezierCurveTo(cx - w * 0.2, oy + h * 0.6, cx - w * 0.2, oy + h * 0.3, cx, oy + h * 0.2);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(cx, oy + h * 0.8);
    ctx.bezierCurveTo(cx + w * 0.2, oy + h * 0.6, cx + w * 0.2, oy + h * 0.3, cx, oy + h * 0.2);
    ctx.stroke();
    for (let i = 0; i < 4; i++) {
      const t = i / 3;
      const hx = cx + Math.cos(t * Math.PI) * w * 0.2;
      const hy = oy + h * (0.2 + t * 0.55);
      ctx.fillStyle = '#2980B9';
      ctx.beginPath();
      ctx.arc(hx - w * 0.04, hy, w * 0.03, 0, Math.PI * 2);
      ctx.fill();
      ctx.fillStyle = '#E74C3C';
      ctx.beginPath();
      ctx.arc(hx + w * 0.04, hy, w * 0.03, 0, Math.PI * 2);
      ctx.fill();
    }
  }

  if (stage === 3) {
    // Asci in ascocarp
    ctx.fillStyle = '#F5CBA7';
    ctx.strokeStyle = '#884EA0';
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.arc(cx, cy + h * 0.05, w * 0.28, 0, Math.PI * 2);
    ctx.fill();
    ctx.stroke();
    // Asci
    for (let i = 0; i < 5; i++) {
      const ax = cx - w * 0.22 + i * w * 0.11;
      ctx.fillStyle = '#FDEBD0';
      ctx.strokeStyle = '#884EA0';
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.ellipse(ax, cy + h * 0.05, w * 0.04, h * 0.16, 0, 0, Math.PI * 2);
      ctx.fill();
      ctx.stroke();
      for (let s = 0; s < 4; s++) {
        ctx.fillStyle = '#2980B9';
        ctx.beginPath();
        ctx.arc(ax, cy - h * 0.06 + s * h * 0.07, w * 0.02, 0, Math.PI * 2);
        ctx.fill();
      }
    }
  }

  if (stage === 4) {
    // Ascospores dispersing
    ctx.strokeStyle = '#884EA0';
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.arc(cx, cy + h * 0.1, w * 0.12, 0, Math.PI * 2);
    ctx.stroke();
    const sporePos = [[-0.28, -0.25], [0.25, -0.3], [-0.3, 0.12], [0.28, 0.18], [0, -0.38], [0.35, -0.1]];
    sporePos.forEach(([dx, dy]) => {
      ctx.fillStyle = '#2980B9';
      ctx.beginPath();
      ctx.ellipse(cx + w * dx, cy + h * dy, w * 0.035, h * 0.05, 0.3, 0, Math.PI * 2);
      ctx.fill();
      ctx.strokeStyle = 'rgba(41,128,185,0.3)';
      ctx.lineWidth = 1;
      ctx.setLineDash([2, 2]);
      ctx.beginPath();
      ctx.moveTo(cx + w * dx, cy + h * dy);
      ctx.lineTo(cx, cy + h * 0.1);
      ctx.stroke();
      ctx.setLineDash([]);
    });
  }
}

// ─────────────────────────────────────────────────────────────

static drawBasidiomyceteLifecycle(ctx, x, y, width, height, type, structure) {
  ctx.save();
  ctx.translate(x, y);

  switch (structure) {
    case 'complete':
      this.drawBasidiomyceteLifecycleFull(ctx, {}, width, height);
      break;
    case 'basidiospore-germination':
      this.drawBasidiomyceteStage(ctx, {}, width, height, 0);
      break;
    case 'plasmogamy':
      this.drawBasidiomyceteStage(ctx, {}, width, height, 1);
      break;
    case 'dikaryotic-mycelium':
      this.drawBasidiomyceteStage(ctx, {}, width, height, 2);
      break;
    case 'basidiocarp':
      this.drawBasidiomyceteStage(ctx, {}, width, height, 3);
      break;
    case 'basidium-meiosis':
      this.drawBasidiomyceteStage(ctx, {}, width, height, 4);
      break;
  }

  ctx.restore();
}

static drawBasidiomyceteLifecycleFull(ctx, color, w, h) {
  ctx.fillStyle = '#ECF0F1';
  ctx.fillRect(0, 0, w, h);
  ctx.fillStyle = '#2C3E50';
  ctx.font = `bold ${w * 0.042}px Arial`;
  ctx.fillText('Basidiomycete Lifecycle', w * 0.28, h * 0.06);

  const labels = ['Spore Germination', 'Plasmogamy', 'Dikaryotic Mycelium', 'Basidiocarp', 'Basidium & Meiosis'];
  labels.forEach((label, i) => {
    const col = i % 3;
    const row = Math.floor(i / 3);
    const ox = col * (w / 3) + (row === 1 ? w / 6 : 0);
    const oy = row * (h * 0.44) + h * 0.1;
    this.drawBasidiomyceteStage(ctx, {}, w / 3, h * 0.38, ox, oy, i);
    ctx.fillStyle = '#2C3E50';
    ctx.font = `${w * 0.024}px Arial`;
    ctx.fillText(label, ox + w * 0.01, oy + h * 0.42);
  });
}

static drawBasidiomyceteStage(ctx, color, w, h, ox = 0, oy = 0, stage = 0) {
  const cx = ox + w * 0.5;
  const cy = oy + h * 0.5;

  if (stage === 0) {
    // Basidiospore germinating
    ctx.fillStyle = '#884EA0';
    ctx.beginPath();
    ctx.arc(cx, cy + h * 0.1, w * 0.08, 0, Math.PI * 2);
    ctx.fill();
    ctx.strokeStyle = '#884EA0';
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.moveTo(cx, cy + h * 0.02);
    ctx.lineTo(cx - w * 0.15, cy - h * 0.22);
    ctx.moveTo(cx, cy + h * 0.02);
    ctx.lineTo(cx + w * 0.15, cy - h * 0.18);
    ctx.stroke();
    ctx.fillStyle = '#2980B9';
    ctx.beginPath();
    ctx.arc(cx, cy + h * 0.1, w * 0.035, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = '#2C3E50';
    ctx.font = `${w * 0.038}px Arial`;
    ctx.fillText('(n)', cx + w * 0.1, cy + h * 0.12);
  }

  if (stage === 1) {
    // Two monokaryons fusing
    ctx.strokeStyle = '#2980B9';
    ctx.lineWidth = 4;
    ctx.beginPath();
    ctx.moveTo(ox + w * 0.08, cy);
    ctx.lineTo(cx - w * 0.06, cy);
    ctx.stroke();
    ctx.strokeStyle = '#E74C3C';
    ctx.beginPath();
    ctx.moveTo(ox + w * 0.92, cy);
    ctx.lineTo(cx + w * 0.06, cy);
    ctx.stroke();
    ctx.fillStyle = '#F39C12';
    ctx.beginPath();
    ctx.arc(cx, cy, w * 0.06, 0, Math.PI * 2);
    ctx.fill();
  }

  if (stage === 2) {
    // Dikaryotic mycelium with clamp connections
    for (let i = 0; i < 3; i++) {
      const hy = oy + h * (0.25 + i * 0.2);
      ctx.fillStyle = '#FDEBD0';
      ctx.strokeStyle = '#884EA0';
      ctx.lineWidth = 3;
      ctx.fillRect(ox + w * 0.1, hy - h * 0.05, w * 0.8, h * 0.1);
      ctx.strokeRect(ox + w * 0.1, hy - h * 0.05, w * 0.8, h * 0.1);
      // Nuclei pairs
      ctx.fillStyle = '#2980B9';
      ctx.beginPath();
      ctx.arc(cx - w * 0.1, hy, w * 0.03, 0, Math.PI * 2);
      ctx.fill();
      ctx.fillStyle = '#E74C3C';
      ctx.beginPath();
      ctx.arc(cx + w * 0.1, hy, w * 0.03, 0, Math.PI * 2);
      ctx.fill();
      // Clamp
      ctx.strokeStyle = '#F39C12';
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.arc(cx, hy + h * 0.06, w * 0.06, Math.PI * 0.15, Math.PI * 0.85);
      ctx.stroke();
    }
  }

  if (stage === 3) {
    // Mushroom (basidiocarp)
    ctx.fillStyle = '#E74C3C';
    ctx.strokeStyle = '#C0392B';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.arc(cx, oy + h * 0.3, w * 0.28, Math.PI, 0);
    ctx.fill();
    ctx.stroke();
    // Stipe
    ctx.fillStyle = '#F5CBA7';
    ctx.strokeStyle = '#E59866';
    ctx.lineWidth = 2;
    ctx.fillRect(cx - w * 0.05, oy + h * 0.3, w * 0.1, h * 0.52);
    ctx.strokeRect(cx - w * 0.05, oy + h * 0.3, w * 0.1, h * 0.52);
    // Gills
    ctx.strokeStyle = '#C0392B';
    ctx.lineWidth = 1.5;
    for (let i = -5; i <= 5; i++) {
      ctx.beginPath();
      ctx.moveTo(cx + i * w * 0.04, oy + h * 0.3);
      ctx.lineTo(cx + i * w * 0.035, oy + h * 0.5);
      ctx.stroke();
    }
    // Mycelium
    ctx.strokeStyle = '#884EA0';
    ctx.lineWidth = 2;
    for (let i = -2; i <= 2; i++) {
      ctx.beginPath();
      ctx.moveTo(cx + i * w * 0.06, oy + h * 0.82);
      ctx.bezierCurveTo(cx + i * w * 0.1, oy + h * 0.9, cx + i * w * 0.12, oy + h * 0.95, cx + i * w * 0.16, oy + h * 0.98);
      ctx.stroke();
    }
  }

  if (stage === 4) {
    // Basidium with 4 spores
    ctx.fillStyle = '#F5CBA7';
    ctx.strokeStyle = '#884EA0';
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.moveTo(cx - w * 0.12, oy + h * 0.85);
    ctx.bezierCurveTo(cx - w * 0.15, oy + h * 0.5, cx - w * 0.12, oy + h * 0.2, cx, oy + h * 0.12);
    ctx.bezierCurveTo(cx + w * 0.12, oy + h * 0.2, cx + w * 0.15, oy + h * 0.5, cx + w * 0.12, oy + h * 0.85);
    ctx.fill();
    ctx.stroke();
    // 4 sterigmata + basidiospores
    const sporeAngles = [-0.4, -0.15, 0.15, 0.4];
    const sColors = ['#E74C3C', '#2980B9', '#27AE60', '#F39C12'];
    sporeAngles.forEach((a, i) => {
      const sx = cx + a * w;
      const sy = oy + h * 0.06;
      ctx.strokeStyle = '#884EA0';
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(cx + a * w * 0.4, oy + h * 0.12);
      ctx.lineTo(sx, sy + h * 0.02);
      ctx.stroke();
      ctx.fillStyle = sColors[i];
      ctx.beginPath();
      ctx.ellipse(sx, sy, w * 0.04, h * 0.055, a * 0.5, 0, Math.PI * 2);
      ctx.fill();
      ctx.strokeStyle = '#2C3E50';
      ctx.lineWidth = 1;
      ctx.stroke();
    });
  }
}

// ─────────────────────────────────────────────────────────────

static drawLichenSymbiosis(ctx, x, y, width, height, type, structure) {
  ctx.save();
  ctx.translate(x, y);

  switch (structure) {
    case 'complete':
      this.drawLichenSymbiosisFull(ctx, {}, width, height);
      break;
    case 'cross-section':
      this.drawLichenCrossSection(ctx, {}, width, height);
      break;
    case 'photobiont':
      this.drawLichenPhotobiont(ctx, {}, width, height);
      break;
    case 'mycobiont':
      this.drawLichenMycobiont(ctx, {}, width, height);
      break;
    case 'lichen-thallus':
      this.drawLichenThallus(ctx, {}, width, height);
      break;
  }

  ctx.restore();
}

static drawLichenSymbiosisFull(ctx, color, w, h) {
  ctx.fillStyle = '#ECF0F1';
  ctx.fillRect(0, 0, w, h);
  ctx.fillStyle = '#2C3E50';
  ctx.font = `bold ${w * 0.042}px Arial`;
  ctx.fillText('Lichen Symbiosis', w * 0.32, h * 0.06);

  this.drawLichenCrossSection(ctx, {}, w * 0.55, h * 0.55, 0, h * 0.1);
  this.drawLichenPhotobiont(ctx, {}, w * 0.4, h * 0.35, w * 0.58, h * 0.1);
  this.drawLichenMycobiont(ctx, {}, w * 0.4, h * 0.35, w * 0.58, h * 0.5);
  this.drawLichenThallus(ctx, {}, w, h * 0.2, 0, h * 0.78);
}

static drawLichenCrossSection(ctx, color, w, h, ox = 0, oy = 0) {
  // Upper cortex
  ctx.fillStyle = '#A04000';
  ctx.fillRect(ox, oy, w, h * 0.1);
  ctx.fillStyle = '#ECF0F1';
  ctx.font = `${w * 0.05}px Arial`;
  ctx.fillText('Upper cortex', ox + w * 0.02, oy + h * 0.08);

  // Algal layer
  ctx.fillStyle = '#E8F5E9';
  ctx.fillRect(ox, oy + h * 0.1, w, h * 0.2);
  // Algal cells
  for (let i = 0; i < 12; i++) {
    const ax = ox + w * (0.06 + (i % 6) * 0.16);
    const ay = oy + h * 0.2 + (Math.floor(i / 6)) * h * 0.06;
    ctx.fillStyle = '#27AE60';
    ctx.strokeStyle = '#1E8449';
    ctx.lineWidth = 1.5;
    ctx.beginPath();
    ctx.arc(ax, ay, w * 0.04, 0, Math.PI * 2);
    ctx.fill();
    ctx.stroke();
  }
  ctx.fillStyle = '#2C3E50';
  ctx.fillText('Algal/cyanobacterial layer', ox + w * 0.02, oy + h * 0.32);

  // Medulla (fungal hyphae)
  ctx.fillStyle = '#FFF8E1';
  ctx.fillRect(ox, oy + h * 0.3, w, h * 0.45);
  for (let i = 0; i < 10; i++) {
    const hy = oy + h * (0.35 + i * 0.04);
    ctx.strokeStyle = '#F39C12';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(ox + w * 0.05, hy);
    ctx.bezierCurveTo(ox + w * 0.3, hy + h * 0.01, ox + w * 0.7, hy - h * 0.01, ox + w * 0.95, hy);
    ctx.stroke();
  }
  ctx.fillStyle = '#2C3E50';
  ctx.fillText('Medulla (fungal hyphae)', ox + w * 0.02, oy + h * 0.77);

  // Lower cortex + rhizines
  ctx.fillStyle = '#784212';
  ctx.fillRect(ox, oy + h * 0.75, w, h * 0.1);
  for (let i = 0; i < 6; i++) {
    const rx = ox + w * (0.1 + i * 0.16);
    ctx.strokeStyle = '#4A235A';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(rx, oy + h * 0.85);
    ctx.lineTo(rx, oy + h * 0.96);
    ctx.stroke();
  }
  ctx.fillStyle = '#ECF0F1';
  ctx.fillText('Lower cortex + Rhizines', ox + w * 0.02, oy + h * 0.97);
}

static drawLichenPhotobiont(ctx, color, w, h, ox = 0, oy = 0) {
  const cx = ox + w * 0.5;
  const cy = oy + h * 0.45;
  ctx.fillStyle = '#2C3E50';
  ctx.font = `bold ${w * 0.06}px Arial`;
  ctx.fillText('Photobiont (Algae)', ox + w * 0.05, oy + h * 0.1);

  for (let i = 0; i < 9; i++) {
    const a = (i / 9) * Math.PI * 2;
    const px = cx + Math.cos(a) * w * 0.2;
    const py = cy + Math.sin(a) * h * 0.2;
    ctx.fillStyle = '#27AE60';
    ctx.strokeStyle = '#1E8449';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.arc(px, py, w * 0.05, 0, Math.PI * 2);
    ctx.fill();
    ctx.stroke();
    ctx.fillStyle = '#F9E79F';
    ctx.beginPath();
    ctx.arc(px, py, w * 0.02, 0, Math.PI * 2);
    ctx.fill();
  }
  ctx.fillStyle = '#2C3E50';
  ctx.font = `${w * 0.05}px Arial`;
  ctx.fillText('Provides: sugars', ox + w * 0.1, oy + h * 0.85);
  ctx.fillText('(photosynthesis)', ox + w * 0.1, oy + h * 0.93);
}

static drawLichenMycobiont(ctx, color, w, h, ox = 0, oy = 0) {
  const cx = ox + w * 0.5;
  const cy = oy + h * 0.45;
  ctx.fillStyle = '#2C3E50';
  ctx.font = `bold ${w * 0.06}px Arial`;
  ctx.fillText('Mycobiont (Fungus)', ox + w * 0.04, oy + h * 0.1);

  // Fungal hyphae network
  ctx.strokeStyle = '#F39C12';
  ctx.lineWidth = 3;
  for (let i = 0; i < 6; i++) {
    const a = (i / 6) * Math.PI * 2;
    ctx.beginPath();
    ctx.moveTo(cx, cy);
    ctx.bezierCurveTo(
      cx + Math.cos(a) * w * 0.1, cy + Math.sin(a) * h * 0.1,
      cx + Math.cos(a + 0.5) * w * 0.2, cy + Math.sin(a + 0.5) * h * 0.2,
      cx + Math.cos(a) * w * 0.3, cy + Math.sin(a) * h * 0.28
    );
    ctx.stroke();
  }
  ctx.fillStyle = '#2C3E50';
  ctx.font = `${w * 0.05}px Arial`;
  ctx.fillText('Provides: water,', ox + w * 0.08, oy + h * 0.85);
  ctx.fillText('minerals, structure', ox + w * 0.08, oy + h * 0.93);
}

static drawLichenThallus(ctx, color, w, h, ox = 0, oy = 0) {
  // Three lichen growth forms
  ctx.fillStyle = '#2C3E50';
  ctx.font = `bold ${w * 0.038}px Arial`;
  ctx.fillText('Lichen Growth Forms', ox + w * 0.32, oy + h * 0.2);

  // Crustose
  ctx.fillStyle = '#A04000';
  ctx.beginPath();
  for (let i = 0; i < 20; i++) {
    ctx.beginPath();
    ctx.arc(ox + w * 0.1 + i * w * 0.015 + Math.random() * w * 0.02, oy + h * 0.7, w * 0.018, 0, Math.PI * 2);
    ctx.fill();
  }
  ctx.fillStyle = '#2C3E50';
  ctx.font = `${w * 0.03}px Arial`;
  ctx.fillText('Crustose', ox + w * 0.02, oy + h * 0.9);

  // Foliose
  ctx.fillStyle = '#7D6608';
  for (let i = 0; i < 4; i++) {
    ctx.beginPath();
    ctx.ellipse(ox + w * 0.45 + i * w * 0.04, oy + h * 0.65, w * 0.04, h * 0.2, i * 0.3, 0, Math.PI * 2);
    ctx.fill();
  }
  ctx.fillStyle = '#2C3E50';
  ctx.fillText('Foliose', ox + w * 0.4, oy + h * 0.9);

  // Fruticose
  ctx.strokeStyle = '#566573';
  ctx.lineWidth = 4;
  for (let i = 0; i < 3; i++) {
    ctx.beginPath();
    ctx.moveTo(ox + w * 0.72 + i * w * 0.06, oy + h * 0.85);
    ctx.lineTo(ox + w * 0.72 + i * w * 0.06, oy + h * 0.4);
    ctx.stroke();
    // Branches
    ctx.beginPath();
    ctx.moveTo(ox + w * 0.72 + i * w * 0.06, oy + h * 0.5);
    ctx.lineTo(ox + w * 0.72 + i * w * 0.06 + w * 0.04, oy + h * 0.42);
    ctx.stroke();
  }
  ctx.fillStyle = '#2C3E50';
  ctx.fillText('Fruticose', ox + w * 0.68, oy + h * 0.9);
}

// ─────────────────────────────────────────────────────────────

static drawMycorrhizae(ctx, x, y, width, height, type, structure) {
  ctx.save();
  ctx.translate(x, y);

  switch (structure) {
    case 'complete':
      this.drawMycorrhizaeFull(ctx, {}, width, height);
      break;
    case 'ectomycorrhizal':
      this.drawEctomycorrhizal(ctx, {}, width, height);
      break;
    case 'arbuscular':
      this.drawArbuscularMycorrhizal(ctx, {}, width, height);
      break;
    case 'nutrient-exchange':
      this.drawMycorrhizaeNutrientExchange(ctx, {}, width, height);
      break;
  }

  ctx.restore();
}

static drawMycorrhizaeFull(ctx, color, w, h) {
  ctx.fillStyle = '#ECF0F1';
  ctx.fillRect(0, 0, w, h);
  ctx.fillStyle = '#2C3E50';
  ctx.font = `bold ${w * 0.042}px Arial`;
  ctx.fillText('Mycorrhizal Associations', w * 0.25, h * 0.06);

  this.drawEctomycorrhizal(ctx, {}, w * 0.48, h * 0.88, 0, h * 0.1);
  this.drawArbuscularMycorrhizal(ctx, {}, w * 0.48, h * 0.88, w * 0.52, h * 0.1);

  ctx.fillStyle = '#2C3E50';
  ctx.font = `bold ${w * 0.03}px Arial`;
  ctx.fillText('Ectomycorrhizal (ECM)', w * 0.04, h * 0.96);
  ctx.fillText('Arbuscular Mycorrhizal (AM)', w * 0.52, h * 0.96);
}

static drawEctomycorrhizal(ctx, color, w, h, ox = 0, oy = 0) {
  // Root cross section
  const cx = ox + w * 0.5;
  const cy = oy + h * 0.55;

  // Soil
  ctx.fillStyle = '#D5B896';
  ctx.fillRect(ox, oy + h * 0.35, w, h * 0.65);

  // Root
  ctx.fillStyle = '#F5CBA7';
  ctx.strokeStyle = '#884EA0';
  ctx.lineWidth = 3;
  ctx.beginPath();
  ctx.ellipse(cx, cy, w * 0.28, h * 0.2, 0, 0, Math.PI * 2);
  ctx.fill();
  ctx.stroke();

  // Mantle (fungal sheath)
  ctx.strokeStyle = '#F39C12';
  ctx.lineWidth = 10;
  ctx.beginPath();
  ctx.ellipse(cx, cy, w * 0.28, h * 0.2, 0, 0, Math.PI * 2);
  ctx.stroke();

  // Hartig net (between cortical cells)
  ctx.strokeStyle = '#E67E22';
  ctx.lineWidth = 2;
  for (let i = 0; i < 6; i++) {
    const a = (i / 6) * Math.PI * 2;
    ctx.beginPath();
    ctx.moveTo(cx + Math.cos(a) * w * 0.12, cy + Math.sin(a) * h * 0.08);
    ctx.lineTo(cx + Math.cos(a) * w * 0.26, cy + Math.sin(a) * h * 0.18);
    ctx.stroke();
  }

  // External hyphae
  ctx.strokeStyle = '#F39C12';
  ctx.lineWidth = 2;
  for (let i = 0; i < 8; i++) {
    const a = (i / 8) * Math.PI * 2;
    ctx.beginPath();
    ctx.moveTo(cx + Math.cos(a) * w * 0.35, cy + Math.sin(a) * h * 0.26);
    ctx.lineTo(cx + Math.cos(a) * w * 0.44, cy + Math.sin(a) * h * 0.35);
    ctx.stroke();
  }

  ctx.fillStyle = '#2C3E50';
  ctx.font = `${w * 0.05}px Arial`;
  ctx.fillText('ECM: Hartig net', ox + w * 0.05, oy + h * 0.88);
  ctx.fillStyle = '#F39C12';
  ctx.fillText('Fungal mantle', ox + w * 0.05, oy + h * 0.94);
}

static drawArbuscularMycorrhizal(ctx, color, w, h, ox = 0, oy = 0) {
  const cx = ox + w * 0.5;
  const cy = oy + h * 0.52;

  // Soil
  ctx.fillStyle = '#D5B896';
  ctx.fillRect(ox, oy + h * 0.3, w, h * 0.7);

  // Root cell
  ctx.fillStyle = '#E8F5E9';
  ctx.strokeStyle = '#27AE60';
  ctx.lineWidth = 3;
  ctx.beginPath();
  ctx.ellipse(cx, cy, w * 0.32, h * 0.22, 0, 0, Math.PI * 2);
  ctx.fill();
  ctx.stroke();

  // Arbuscule (branching inside cell)
  ctx.strokeStyle = '#E74C3C';
  ctx.lineWidth = 2;
  const drawArbuscule = (ax, ay, length, angle, depth) => {
    if (depth === 0 || length < w * 0.01) return;
    const ex = ax + Math.cos(angle) * length;
    const ey = ay + Math.sin(angle) * length;
    ctx.beginPath();
    ctx.moveTo(ax, ay);
    ctx.lineTo(ex, ey);
    ctx.stroke();
    drawArbuscule(ex, ey, length * 0.6, angle - 0.5, depth - 1);
    drawArbuscule(ex, ey, length * 0.6, angle + 0.5, depth - 1);
  };
  drawArbuscule(cx, cy, w * 0.08, -Math.PI / 2, 4);

  // Vesicle
  ctx.fillStyle = '#F39C12';
  ctx.beginPath();
  ctx.ellipse(cx + w * 0.15, cy + h * 0.08, w * 0.05, h * 0.05, 0, 0, Math.PI * 2);
  ctx.fill();

  // External spores in soil
  ctx.fillStyle = '#884EA0';
  [[0.15, 0.78], [0.75, 0.82], [0.5, 0.9]].forEach(([px, py]) => {
    ctx.beginPath();
    ctx.arc(ox + w * px, oy + h * py, w * 0.04, 0, Math.PI * 2);
    ctx.fill();
  });

  ctx.fillStyle = '#2C3E50';
  ctx.font = `${w * 0.05}px Arial`;
  ctx.fillText('AM: Arbuscule', ox + w * 0.05, oy + h * 0.88);
  ctx.fillStyle = '#F39C12';
  ctx.fillText('Vesicle', ox + w * 0.05, oy + h * 0.94);
}

static drawMycorrhizaeNutrientExchange(ctx, color, w, h) {
  ctx.fillStyle = '#E8F5E9';
  ctx.fillRect(0, 0, w, h);
  ctx.fillStyle = '#2C3E50';
  ctx.font = `bold ${w * 0.04}px Arial`;
  ctx.fillText('Nutrient Exchange', w * 0.32, h * 0.07);

  const plantX = w * 0.25;
  const fungiX = w * 0.75;
  const cy = h * 0.5;

  // Plant
  ctx.fillStyle = '#27AE60';
  ctx.beginPath();
  ctx.arc(plantX, cy, w * 0.15, 0, Math.PI * 2);
  ctx.fill();
  ctx.fillStyle = '#ECF0F1';
  ctx.font = `bold ${w * 0.04}px Arial`;
  ctx.fillText('Plant', plantX - w * 0.06, cy + h * 0.02);

  // Fungus
  ctx.fillStyle = '#F39C12';
  ctx.beginPath();
  ctx.arc(fungiX, cy, w * 0.15, 0, Math.PI * 2);
  ctx.fill();
  ctx.fillStyle = '#ECF0F1';
  ctx.fillText('Fungus', fungiX - w * 0.08, cy + h * 0.02);

  // Arrows
  ctx.strokeStyle = '#2980B9';
  ctx.lineWidth = 3;
  ctx.beginPath();
  ctx.moveTo(plantX + w * 0.15, cy - h * 0.04);
  ctx.lineTo(fungiX - w * 0.15, cy - h * 0.04);
  ctx.stroke();
  ctx.fillStyle = '#2980B9';
  ctx.font = `${w * 0.033}px Arial`;
  ctx.fillText('Sugars, lipids', w * 0.38, cy - h * 0.07);

  ctx.strokeStyle = '#E74C3C';
  ctx.lineWidth = 3;
  ctx.beginPath();
  ctx.moveTo(fungiX - w * 0.15, cy + h * 0.04);
  ctx.lineTo(plantX + w * 0.15, cy + h * 0.04);
  ctx.stroke();
  ctx.fillStyle = '#E74C3C';
  ctx.fillText('P, N, water', w * 0.4, cy + h * 0.1);
}

// ─────────────────────────────────────────────────────────────

static drawFungalPathogenesis(ctx, x, y, width, height, type, structure) {
  ctx.save();
  ctx.translate(x, y);

  switch (structure) {
    case 'complete':
      this.drawFungalPathogenesisFull(ctx, {}, width, height);
      break;
    case 'spore':
      this.drawFungalPathogenesisStep(ctx, {}, width, height, 0);
      break;
    case 'germination':
      this.drawFungalPathogenesisStep(ctx, {}, width, height, 1);
      break;
    case 'invasion':
      this.drawFungalPathogenesisStep(ctx, {}, width, height, 2);
      break;
    case 'dissemination':
      this.drawFungalPathogenesisStep(ctx, {}, width, height, 3);
      break;
  }

  ctx.restore();
}

static drawFungalPathogenesisFull(ctx, color, w, h) {
  ctx.fillStyle = '#ECF0F1';
  ctx.fillRect(0, 0, w, h);
  ctx.fillStyle = '#2C3E50';
  ctx.font = `bold ${w * 0.042}px Arial`;
  ctx.fillText('Fungal Pathogenesis', w * 0.3, h * 0.06);

  const labels = ['Spore', 'Germination', 'Invasion', 'Dissemination'];
  labels.forEach((label, i) => {
    const ox = (i / 4) * w;
    this.drawFungalPathogenesisStep(ctx, {}, w / 4, h * 0.78, ox, h * 0.12, i);
    ctx.fillStyle = '#2C3E50';
    ctx.font = `${w * 0.026}px Arial`;
    ctx.fillText(label, ox + w * 0.03, h * 0.96);
    if (i < 3) {
      ctx.fillStyle = '#E74C3C';
      ctx.font = `bold ${w * 0.04}px Arial`;
      ctx.fillText('→', ox + w / 4 * 0.84, h * 0.53);
    }
  });
}

static drawFungalPathogenesisStep(ctx, color, w, h, ox = 0, oy = 0, step = 0) {
  const cx = ox + w * 0.5;
  const cy = oy + h * 0.5;

  if (step === 0) {
    // Conidia/spores
    [[0.25, 0.3], [0.5, 0.22], [0.75, 0.35], [0.38, 0.55], [0.65, 0.62]].forEach(([px, py]) => {
      ctx.fillStyle = '#884EA0';
      ctx.strokeStyle = '#6C3483';
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.arc(ox + w * px, oy + h * py, w * 0.06, 0, Math.PI * 2);
      ctx.fill();
      ctx.stroke();
      // Surface ridges
      ctx.strokeStyle = '#6C3483';
      ctx.lineWidth = 1;
      for (let i = 0; i < 6; i++) {
        const a = (i / 6) * Math.PI * 2;
        ctx.beginPath();
        ctx.arc(ox + w * px, oy + h * py, w * 0.05, a, a + Math.PI / 4);
        ctx.stroke();
      }
    });
    ctx.fillStyle = '#2C3E50';
    ctx.font = `${w * 0.04}px Arial`;
    ctx.fillText('Inhaled', ox + w * 0.3, oy + h * 0.85);
    ctx.fillText('conidia', ox + w * 0.3, oy + h * 0.92);
  }

  if (step === 1) {
    // Spore germinating into germ tube
    ctx.fillStyle = '#884EA0';
    ctx.beginPath();
    ctx.arc(cx, cy + h * 0.1, w * 0.1, 0, Math.PI * 2);
    ctx.fill();
    // Germ tube
    ctx.strokeStyle = '#6C3483';
    ctx.lineWidth = 5;
    ctx.beginPath();
    ctx.moveTo(cx, cy - h * 0.0);
    ctx.bezierCurveTo(cx + w * 0.1, cy - h * 0.12, cx + w * 0.15, cy - h * 0.22, cx + w * 0.2, cy - h * 0.3);
    ctx.stroke();
    // Swelling tip
    ctx.fillStyle = '#884EA0';
    ctx.beginPath();
    ctx.arc(cx + w * 0.22, cy - h * 0.32, w * 0.04, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = '#2C3E50';
    ctx.font = `${w * 0.04}px Arial`;
    ctx.fillText('Germ tube', cx - w * 0.18, cy - h * 0.35);
  }

  if (step === 2) {
    // Host cell with hyphae invading
    ctx.fillStyle = '#E8F5E9';
    ctx.strokeStyle = '#27AE60';
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.ellipse(cx, cy, w * 0.3, h * 0.28, 0, 0, Math.PI * 2);
    ctx.fill();
    ctx.stroke();
    // Hyphae penetrating
    ctx.strokeStyle = '#884EA0';
    ctx.lineWidth = 4;
    [[0, -1], [0.8, 0.3], [-0.8, 0.3]].forEach(([dx, dy]) => {
      ctx.beginPath();
      ctx.moveTo(cx + w * dx * 0.3, cy + h * dy * 0.28);
      ctx.lineTo(cx + w * dx * 0.45, cy + h * dy * 0.42);
      ctx.stroke();
    });
    // Immune cells approaching
    ctx.fillStyle = '#F39C12';
    ctx.beginPath();
    ctx.arc(cx - w * 0.38, cy - h * 0.12, w * 0.07, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = '#2C3E50';
    ctx.font = `${w * 0.032}px Arial`;
    ctx.fillText('Macrophage', cx - w * 0.5, cy - h * 0.22);
  }

  if (step === 3) {
    // Dissemination via bloodstream
    ctx.strokeStyle = '#E74C3C';
    ctx.lineWidth = 12;
    ctx.beginPath();
    ctx.moveTo(ox + w * 0.05, cy);
    ctx.bezierCurveTo(ox + w * 0.3, cy - h * 0.2, ox + w * 0.7, cy + h * 0.2, ox + w * 0.95, cy);
    ctx.stroke();
    // Fungal cells in bloodstream
    [[0.2, 0.42], [0.45, 0.55], [0.7, 0.44]].forEach(([px, py]) => {
      ctx.fillStyle = '#884EA0';
      ctx.beginPath();
      ctx.arc(ox + w * px, oy + h * py, w * 0.04, 0, Math.PI * 2);
      ctx.fill();
    });
    // Organ targets
    [[0.25, 0.78, 'Brain'], [0.5, 0.82, 'Lung'], [0.75, 0.78, 'Skin']].forEach(([px, py, organ]) => {
      ctx.fillStyle = '#E74C3C';
      ctx.beginPath();
      ctx.arc(ox + w * px, oy + h * py, w * 0.06, 0, Math.PI * 2);
      ctx.fill();
      ctx.fillStyle = '#2C3E50';
      ctx.font = `${w * 0.035}px Arial`;
      ctx.fillText(organ, ox + w * px - w * 0.04, oy + h * py + h * 0.08);
      ctx.strokeStyle = '#E74C3C';
      ctx.lineWidth = 1.5;
      ctx.setLineDash([2, 2]);
      ctx.beginPath();
      ctx.moveTo(ox + w * px, oy + h * py - h * 0.06);
      ctx.lineTo(ox + w * px, cy + h * 0.05);
      ctx.stroke();
      ctx.setLineDash([]);
    });
  }
}

// ============================================================
// PROTISTS COMPLETE SYSTEMS
// ============================================================

static drawParameciumConjugation(ctx, x, y, width, height, type, structure) {
  ctx.save();
  ctx.translate(x, y);

  switch (structure) {
    case 'complete':
      this.drawParameciumConjugationFull(ctx, {}, width, height);
      break;
    case 'pairing':
      this.drawParameciumConjugationStep(ctx, {}, width, height, 0);
      break;
    case 'meiosis':
      this.drawParameciumConjugationStep(ctx, {}, width, height, 1);
      break;
    case 'exchange':
      this.drawParameciumConjugationStep(ctx, {}, width, height, 2);
      break;
    case 'separation':
      this.drawParameciumConjugationStep(ctx, {}, width, height, 3);
      break;
  }

  ctx.restore();
}

static drawParameciumConjugationFull(ctx, color, w, h) {
  ctx.fillStyle = '#ECF0F1';
  ctx.fillRect(0, 0, w, h);
  ctx.fillStyle = '#2C3E50';
  ctx.font = `bold ${w * 0.042}px Arial`;
  ctx.fillText('Paramecium Conjugation', w * 0.28, h * 0.06);

  const labels = ['Pairing', 'Meiosis', 'Exchange', 'Separation'];
  labels.forEach((label, i) => {
    const ox = (i / 4) * w;
    this.drawParameciumConjugationStep(ctx, {}, w / 4, h * 0.78, ox, h * 0.12, i);
    ctx.fillStyle = '#2C3E50';
    ctx.font = `${w * 0.026}px Arial`;
    ctx.fillText(label, ox + w * 0.04, h * 0.96);
    if (i < 3) {
      ctx.fillStyle = '#2980B9';
      ctx.font = `bold ${w * 0.04}px Arial`;
      ctx.fillText('→', ox + w / 4 * 0.84, h * 0.53);
    }
  });
}

static drawParameciumConjugationStep(ctx, color, w, h, ox = 0, oy = 0, step = 0) {
  const drawParamecium = (pcx, pcy, pw, ph, macro, micro) => {
    ctx.fillStyle = '#AED6F1';
    ctx.strokeStyle = '#1A5276';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.ellipse(pcx, pcy, pw, ph, 0, 0, Math.PI * 2);
    ctx.fill();
    ctx.stroke();
    // Macronucleus
    ctx.fillStyle = '#F9E79F';
    ctx.strokeStyle = '#D4AC0D';
    ctx.lineWidth = 1.5;
    ctx.beginPath();
    ctx.ellipse(pcx, pcy, pw * 0.4, ph * 0.4, 0, 0, Math.PI * 2);
    ctx.fill();
    ctx.stroke();
    if (macro) {
      ctx.fillStyle = '#2C3E50';
      ctx.font = `${pw * 0.2}px Arial`;
      ctx.fillText('Ma', pcx - pw * 0.15, pcy + ph * 0.08);
    }
    // Micronucleus
    ctx.fillStyle = '#E74C3C';
    ctx.beginPath();
    ctx.arc(pcx + pw * 0.35, pcy - ph * 0.2, pw * 0.1, 0, Math.PI * 2);
    ctx.fill();
    // Cilia
    ctx.strokeStyle = '#5DADE2';
    ctx.lineWidth = 1;
    for (let c = 0; c < 12; c++) {
      const a = (c / 12) * Math.PI * 2;
      ctx.beginPath();
      ctx.moveTo(pcx + Math.cos(a) * pw, pcy + Math.sin(a) * ph);
      ctx.lineTo(pcx + Math.cos(a) * (pw + pw * 0.3), pcy + Math.sin(a) * (ph + ph * 0.3));
      ctx.stroke();
    }
  };

  const p1x = ox + w * 0.28;
  const p2x = ox + w * 0.72;
  const cy = oy + h * 0.5;
  const pw = w * 0.15;
  const ph = h * 0.22;

  drawParamecium(p1x, cy, pw, ph, true, true);
  drawParamecium(p2x, cy, pw, ph, true, true);

  if (step === 0) {
    // Connection
    ctx.strokeStyle = '#F39C12';
    ctx.lineWidth = 4;
    ctx.beginPath();
    ctx.moveTo(p1x + pw, cy);
    ctx.lineTo(p2x - pw, cy);
    ctx.stroke();
    ctx.fillStyle = '#2C3E50';
    ctx.font = `${w * 0.038}px Arial`;
    ctx.fillText('Cytoplasmic\nbridge', (p1x + p2x) / 2 - w * 0.1, cy - h * 0.06);
  }

  if (step === 1) {
    // Micronuclei dividing (meiosis)
    ctx.strokeStyle = '#F39C12';
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.moveTo(p1x + pw, cy);
    ctx.lineTo(p2x - pw, cy);
    ctx.stroke();
    [p1x, p2x].forEach((px) => {
      for (let i = 0; i < 3; i++) {
        ctx.fillStyle = '#E74C3C';
        ctx.globalAlpha = 0.6;
        ctx.beginPath();
        ctx.arc(px + (i - 1) * pw * 0.3, cy - ph * 0.35, pw * 0.08, 0, Math.PI * 2);
        ctx.fill();
        ctx.globalAlpha = 1;
      }
    });
    ctx.fillStyle = '#2C3E50';
    ctx.font = `${w * 0.035}px Arial`;
    ctx.fillText('Meiosis → 4 micronuclei', ox + w * 0.12, oy + h * 0.88);
  }

  if (step === 2) {
    // Exchange of haploid micronuclei
    ctx.strokeStyle = '#F39C12';
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.moveTo(p1x + pw, cy);
    ctx.lineTo(p2x - pw, cy);
    ctx.stroke();
    ctx.fillStyle = '#27AE60';
    const midX = (p1x + p2x) / 2;
    ctx.beginPath();
    ctx.arc(midX - w * 0.04, cy, pw * 0.1, 0, Math.PI * 2);
    ctx.fill();
    ctx.beginPath();
    ctx.arc(midX + w * 0.04, cy, pw * 0.1, 0, Math.PI * 2);
    ctx.fill();
    ctx.strokeStyle = '#27AE60';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(midX - w * 0.04, cy);
    ctx.lineTo(midX + w * 0.04, cy);
    ctx.stroke();
  }

  if (step === 3) {
    // Separated cells - ex-conjugants
    ctx.strokeStyle = '#2C3E50';
    ctx.lineWidth = 2;
    ctx.setLineDash([4, 3]);
    ctx.beginPath();
    ctx.moveTo((p1x + p2x) / 2, oy);
    ctx.lineTo((p1x + p2x) / 2, oy + h);
    ctx.stroke();
    ctx.setLineDash([]);
    ctx.fillStyle = '#27AE60';
    ctx.font = `${w * 0.035}px Arial`;
    ctx.fillText('Ex-conjugants', ox + w * 0.25, oy + h * 0.88);
    ctx.fillText('(genetically renewed)', ox + w * 0.12, oy + h * 0.94);
  }
}

// ─────────────────────────────────────────────────────────────

static drawAmoebaPhagocytosis(ctx, x, y, width, height, type, structure) {
  ctx.save();
  ctx.translate(x, y);

  switch (structure) {
    case 'complete':
      this.drawAmoebaPhagocytosisFull(ctx, {}, width, height);
      break;
    case 'pseudopod-extension':
      this.drawPhagocytosisStep(ctx, {}, width, height, 0);
      break;
    case 'engulfment':
      this.drawPhagocytosisStep(ctx, {}, width, height, 1);
      break;
    case 'food-vacuole':
      this.drawPhagocytosisStep(ctx, {}, width, height, 2);
      break;
    case 'digestion':
      this.drawPhagocytosisStep(ctx, {}, width, height, 3);
      break;
  }

  ctx.restore();
}

static drawAmoebaPhagocytosisFull(ctx, color, w, h) {
  ctx.fillStyle = '#ECF0F1';
  ctx.fillRect(0, 0, w, h);
  ctx.fillStyle = '#2C3E50';
  ctx.font = `bold ${w * 0.042}px Arial`;
  ctx.fillText('Amoeba Phagocytosis', w * 0.3, h * 0.06);

  const labels = ['Pseudopod Extension', 'Engulfment', 'Food Vacuole', 'Digestion'];
  labels.forEach((label, i) => {
    const ox = (i / 4) * w;
    this.drawPhagocytosisStep(ctx, {}, w / 4, h * 0.78, ox, h * 0.12, i);
    ctx.fillStyle = '#2C3E50';
    ctx.font = `${w * 0.024}px Arial`;
    ctx.fillText(label, ox + w * 0.01, h * 0.96);
    if (i < 3) {
      ctx.fillStyle = '#E74C3C';
      ctx.font = `bold ${w * 0.04}px Arial`;
      ctx.fillText('→', ox + w / 4 * 0.84, h * 0.53);
    }
  });
}

static drawPhagocytosisStep(ctx, color, w, h, ox = 0, oy = 0, step = 0) {
  const cx = ox + w * 0.5;
  const cy = oy + h * 0.55;

  // Prey bacterium
  const preyX = step <= 1 ? cx + w * 0.32 : cx;
  const preyY = step <= 1 ? cy - h * 0.1 : cy;
  const preyVisible = step <= 2;

  // Amoeba body
  const amoebaPoints = [];
  const ptCount = 24;
  for (let i = 0; i < ptCount; i++) {
    const a = (i / ptCount) * Math.PI * 2;
    let r = w * 0.28;
    // Pseudopod extension
    if (step === 0 && i >= 18 && i <= 22) r += w * 0.1;
    if (step === 1 && i >= 18 && i <= 23) r += w * 0.08;
    amoebaPoints.push([cx + Math.cos(a) * r, cy + Math.sin(a) * r * 0.7]);
  }
  ctx.fillStyle = 'rgba(174,214,241,0.6)';
  ctx.strokeStyle = '#1A5276';
  ctx.lineWidth = 3;
  ctx.beginPath();
  amoebaPoints.forEach(([px, py], i) => i === 0 ? ctx.moveTo(px, py) : ctx.lineTo(px, py));
  ctx.closePath();
  ctx.fill();
  ctx.stroke();

  // Nucleus
  ctx.fillStyle = '#F9E79F';
  ctx.strokeStyle = '#D4AC0D';
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.ellipse(cx - w * 0.08, cy, w * 0.08, h * 0.09, 0, 0, Math.PI * 2);
  ctx.fill();
  ctx.stroke();

  // Prey
  if (preyVisible) {
    ctx.fillStyle = '#27AE60';
    ctx.strokeStyle = '#1E8449';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.ellipse(preyX, preyY, w * 0.05, h * 0.06, 0, 0, Math.PI * 2);
    ctx.fill();
    ctx.stroke();
  }

  if (step === 2) {
    // Food vacuole formed
    ctx.fillStyle = 'rgba(39,174,96,0.3)';
    ctx.strokeStyle = '#27AE60';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.ellipse(cx + w * 0.1, cy - h * 0.06, w * 0.1, h * 0.1, 0, 0, Math.PI * 2);
    ctx.fill();
    ctx.stroke();
    ctx.fillStyle = '#27AE60';
    ctx.beginPath();
    ctx.ellipse(cx + w * 0.1, cy - h * 0.06, w * 0.04, h * 0.05, 0, 0, Math.PI * 2);
    ctx.fill();
  }

  if (step === 3) {
    // Lysosomes fusing + digestion products
    ctx.fillStyle = 'rgba(231,76,60,0.4)';
    ctx.strokeStyle = '#E74C3C';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.ellipse(cx + w * 0.1, cy - h * 0.06, w * 0.12, h * 0.12, 0, 0, Math.PI * 2);
    ctx.fill();
    ctx.stroke();
    // Lysosome dots
    [[-0.05, -0.12], [0.14, -0.14], [0.2, -0.02]].forEach(([dx, dy]) => {
      ctx.fillStyle = '#E74C3C';
      ctx.beginPath();
      ctx.arc(cx + w * dx, cy + h * dy, w * 0.035, 0, Math.PI * 2);
      ctx.fill();
    });
    // Waste exocytosis arrow
    ctx.strokeStyle = '#F39C12';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(cx + w * 0.22, cy - h * 0.1);
    ctx.lineTo(cx + w * 0.35, cy - h * 0.2);
    ctx.stroke();
    ctx.fillStyle = '#2C3E50';
    ctx.font = `${w * 0.038}px Arial`;
    ctx.fillText('Exocytosis', cx + w * 0.25, cy - h * 0.25);
  }
}

// ─────────────────────────────────────────────────────────────

static drawMalariaLifecycle(ctx, x, y, width, height, type, structure) {
  ctx.save();
  ctx.translate(x, y);

  switch (structure) {
    case 'complete':
      this.drawMalariaLifecycleFull(ctx, {}, width, height);
      break;
    case 'mosquito-bite':
      this.drawMalariaStep(ctx, {}, width, height, 0);
      break;
    case 'liver-stage':
      this.drawMalariaStep(ctx, {}, width, height, 1);
      break;
    case 'rbc-invasion':
      this.drawMalariaStep(ctx, {}, width, height, 2);
      break;
    case 'erythrocytic-cycle':
      this.drawMalariaStep(ctx, {}, width, height, 3);
      break;
    case 'gametocyte':
      this.drawMalariaStep(ctx, {}, width, height, 4);
      break;
    case 'mosquito-stage':
      this.drawMalariaStep(ctx, {}, width, height, 5);
      break;
  }

  ctx.restore();
}

static drawMalariaLifecycleFull(ctx, color, w, h) {
  ctx.fillStyle = '#0D1117';
  ctx.fillRect(0, 0, w, h);
  ctx.fillStyle = '#ECF0F1';
  ctx.font = `bold ${w * 0.042}px Arial`;
  ctx.fillText('Plasmodium (Malaria) Lifecycle', w * 0.2, h * 0.05);

  // Human host region
  ctx.fillStyle = 'rgba(41,128,185,0.1)';
  ctx.fillRect(0, h * 0.07, w * 0.65, h * 0.93);
  ctx.strokeStyle = '#2980B9';
  ctx.lineWidth = 2;
  ctx.setLineDash([5, 3]);
  ctx.strokeRect(0, h * 0.07, w * 0.65, h * 0.93);
  ctx.setLineDash([]);
  ctx.fillStyle = '#2980B9';
  ctx.font = `${w * 0.028}px Arial`;
  ctx.fillText('Human host', w * 0.02, h * 0.12);

  // Mosquito host region
  ctx.fillStyle = 'rgba(231,76,60,0.1)';
  ctx.fillRect(w * 0.66, h * 0.07, w * 0.33, h * 0.93);
  ctx.strokeStyle = '#E74C3C';
  ctx.lineWidth = 2;
  ctx.setLineDash([5, 3]);
  ctx.strokeRect(w * 0.66, h * 0.07, w * 0.33, h * 0.93);
  ctx.setLineDash([]);
  ctx.fillStyle = '#E74C3C';
  ctx.fillText('Mosquito', w * 0.72, h * 0.12);

  const stages = [
    { ox: 0, oy: h * 0.07, label: 'Mosquito Bite\n(Sporozoites)' },
    { ox: w * 0.22, oy: h * 0.07, label: 'Liver Stage\n(Schizogony)' },
    { ox: 0, oy: h * 0.52, label: 'RBC Invasion\n(Merozoites)' },
    { ox: w * 0.22, oy: h * 0.52, label: 'Erythrocytic\nCycle' },
    { ox: w * 0.44, oy: h * 0.52, label: 'Gametocytes' },
    { ox: w * 0.66, oy: h * 0.52, label: 'Mosquito\nStage' },
  ];

  stages.forEach(({ ox, oy, label }, i) => {
    this.drawMalariaStep(ctx, {}, w * 0.22, h * 0.42, ox, oy, i);
    ctx.fillStyle = '#ECF0F1';
    ctx.font = `${w * 0.022}px Arial`;
    label.split('\n').forEach((line, li) =>
      ctx.fillText(line, ox + w * 0.01, oy + h * 0.42 + li * h * 0.03 + h * 0.03)
    );
  });
}

static drawMalariaStep(ctx, color, w, h, ox = 0, oy = 0, step = 0) {
  const cx = ox + w * 0.5;
  const cy = oy + h * 0.5;

  if (step === 0) {
    // Mosquito bite + sporozoites entering
    ctx.fillStyle = '#E74C3C';
    ctx.beginPath();
    ctx.moveTo(cx - w * 0.1, oy + h * 0.12);
    ctx.lineTo(cx + w * 0.1, oy + h * 0.12);
    ctx.lineTo(cx, oy + h * 0.35);
    ctx.closePath();
    ctx.fill();
    ctx.strokeStyle = '#C0392B';
    ctx.lineWidth = 2;
    ctx.stroke();
    // Sporozoites
    ctx.fillStyle = '#F39C12';
    for (let i = 0; i < 5; i++) {
      ctx.beginPath();
      ctx.ellipse(cx + (i - 2) * w * 0.08, oy + h * 0.55, w * 0.04, h * 0.03, 0.3, 0, Math.PI * 2);
      ctx.fill();
    }
    ctx.strokeStyle = '#F39C12';
    ctx.lineWidth = 2;
    ctx.setLineDash([3, 2]);
    ctx.beginPath();
    ctx.moveTo(cx, oy + h * 0.35);
    ctx.lineTo(cx, oy + h * 0.5);
    ctx.stroke();
    ctx.setLineDash([]);
    ctx.fillStyle = '#ECF0F1';
    ctx.font = `${w * 0.06}px Arial`;
    ctx.fillText('Sporozoites', cx - w * 0.2, oy + h * 0.72);
  }

  if (step === 1) {
    // Liver cell with schizont
    ctx.fillStyle = '#E8F5E9';
    ctx.strokeStyle = '#27AE60';
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.ellipse(cx, cy, w * 0.35, h * 0.32, 0, 0, Math.PI * 2);
    ctx.fill();
    ctx.stroke();
    // Merozoites inside
    for (let i = 0; i < 10; i++) {
      const a = (i / 10) * Math.PI * 2;
      ctx.fillStyle = '#F39C12';
      ctx.beginPath();
      ctx.ellipse(cx + Math.cos(a) * w * 0.18, cy + Math.sin(a) * h * 0.16, w * 0.035, h * 0.03, a, 0, Math.PI * 2);
      ctx.fill();
    }
    ctx.fillStyle = '#ECF0F1';
    ctx.font = `${w * 0.055}px Arial`;
    ctx.fillText('Liver cell', cx - w * 0.15, oy + h * 0.92);
    ctx.fillStyle = '#F39C12';
    ctx.fillText('Merozoites', cx - w * 0.18, oy + h * 0.98);
  }

  if (step === 2) {
    // Red blood cell + merozoite invading
    ctx.fillStyle = '#FADBD8';
    ctx.strokeStyle = '#E74C3C';
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.ellipse(cx, cy, w * 0.3, h * 0.25, 0, 0, Math.PI * 2);
    ctx.fill();
    ctx.stroke();
    // Biconcave dimple
    ctx.fillStyle = '#F5B7B1';
    ctx.beginPath();
    ctx.ellipse(cx, cy, w * 0.12, h * 0.1, 0, 0, Math.PI * 2);
    ctx.fill();
    // Merozoite attaching
    ctx.fillStyle = '#F39C12';
    ctx.beginPath();
    ctx.ellipse(cx + w * 0.28, cy - h * 0.05, w * 0.05, h * 0.06, 0.5, 0, Math.PI * 2);
    ctx.fill();
    ctx.strokeStyle = '#F39C12';
    ctx.lineWidth = 2;
    ctx.setLineDash([2, 2]);
    ctx.beginPath();
    ctx.moveTo(cx + w * 0.25, cy - h * 0.04);
    ctx.lineTo(cx + w * 0.3, cy - h * 0.04);
    ctx.stroke();
    ctx.setLineDash([]);
  }

  if (step === 3) {
    // Ring stage → trophozoite → schizont → burst
    const stages = [
      { x: 0.2, y: 0.3, col: '#E74C3C', label: 'Ring' },
      { x: 0.5, y: 0.3, col: '#E67E22', label: 'Troph.' },
      { x: 0.8, y: 0.3, col: '#884EA0', label: 'Schiz.' },
    ];
    stages.forEach(({ x, y, col, label }) => {
      ctx.fillStyle = '#FADBD8';
      ctx.strokeStyle = col;
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.ellipse(ox + w * x, oy + h * y, w * 0.1, h * 0.12, 0, 0, Math.PI * 2);
      ctx.fill();
      ctx.stroke();
      ctx.fillStyle = col;
      ctx.beginPath();
      ctx.arc(ox + w * x, oy + h * y, w * 0.04, 0, Math.PI * 2);
      ctx.fill();
      ctx.fillStyle = '#ECF0F1';
      ctx.font = `${w * 0.05}px Arial`;
      ctx.fillText(label, ox + w * x - w * 0.07, oy + h * 0.5);
    });
    ctx.strokeStyle = '#F39C12';
    ctx.lineWidth = 2;
    [0.28, 0.58].forEach(px => {
      ctx.beginPath();
      ctx.moveTo(ox + w * px, oy + h * 0.3);
      ctx.lineTo(ox + w * (px + 0.14), oy + h * 0.3);
      ctx.stroke();
    });
    // Burst releasing merozoites
    ctx.fillStyle = '#884EA0';
    ctx.strokeStyle = '#6C3483';
    ctx.lineWidth = 2;
    ctx.setLineDash([3, 2]);
    ctx.beginPath();
    ctx.ellipse(ox + w * 0.5, oy + h * 0.75, w * 0.22, h * 0.18, 0, 0, Math.PI * 2);
    ctx.stroke();
    ctx.setLineDash([]);
    for (let i = 0; i < 8; i++) {
      const a = (i / 8) * Math.PI * 2;
      ctx.fillStyle = '#F39C12';
      ctx.beginPath();
      ctx.ellipse(ox + w * 0.5 + Math.cos(a) * w * 0.22, oy + h * 0.75 + Math.sin(a) * h * 0.18, w * 0.025, h * 0.025, a, 0, Math.PI * 2);
      ctx.fill();
    }
  }

  if (step === 4) {
    // Gametocytes (male + female)
    // Female macrogametocyte
    ctx.fillStyle = '#E91E63';
    ctx.strokeStyle = '#880E4F';
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.ellipse(cx - w * 0.2, cy, w * 0.12, h * 0.22, 0, 0, Math.PI * 2);
    ctx.fill();
    ctx.stroke();
    ctx.fillStyle = '#ECF0F1';
    ctx.font = `${w * 0.05}px Arial`;
    ctx.fillText('♀', cx - w * 0.25, cy + h * 0.04);

    // Male microgametocyte
    ctx.fillStyle = '#2980B9';
    ctx.strokeStyle = '#1A5276';
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.ellipse(cx + w * 0.2, cy, w * 0.12, h * 0.22, 0, 0, Math.PI * 2);
    ctx.fill();
    ctx.stroke();
    ctx.fillStyle = '#ECF0F1';
    ctx.fillText('♂', cx + w * 0.14, cy + h * 0.04);

    ctx.fillStyle = '#ECF0F1';
    ctx.font = `${w * 0.048}px Arial`;
    ctx.fillText('Gametocytes', cx - w * 0.28, oy + h * 0.9);
    ctx.fillStyle = '#E74C3C';
    ctx.fillText('(in RBCs)', cx - w * 0.18, oy + h * 0.96);
  }

  if (step === 5) {
    // Mosquito midgut: fertilization → oocyst → sporozoites
    ctx.fillStyle = '#F39C12';
    ctx.beginPath();
    ctx.arc(cx - w * 0.15, cy - h * 0.15, w * 0.07, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = '#2980B9';
    ctx.beginPath();
    ctx.arc(cx + w * 0.15, cy - h * 0.15, w * 0.07, 0, Math.PI * 2);
    ctx.fill();
    // Zygote → ookinete
    ctx.fillStyle = '#884EA0';
    ctx.strokeStyle = '#6C3483';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.ellipse(cx, cy + h * 0.08, w * 0.1, h * 0.2, 0.3, 0, Math.PI * 2);
    ctx.fill();
    ctx.stroke();
    ctx.fillStyle = '#ECF0F1';
    ctx.font = `${w * 0.05}px Arial`;
    ctx.fillText('Ookinete', cx - w * 0.18, oy + h * 0.88);
    // Oocyst
    ctx.fillStyle = '#27AE60';
    ctx.strokeStyle = '#1E8449';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.arc(cx + w * 0.28, cy + h * 0.1, w * 0.07, 0, Math.PI * 2);
    ctx.fill();
    ctx.stroke();
    ctx.fillStyle = '#ECF0F1';
    ctx.fillText('Oocyst', cx + w * 0.16, oy + h * 0.94);
  }
}

// ─────────────────────────────────────────────────────────────

static drawEuglenaPhotosynthesis(ctx, x, y, width, height, type, structure) {
  ctx.save();
  ctx.translate(x, y);

  switch (structure) {
    case 'complete':
      this.drawEuglenaPhotosynthesisFull(ctx, {}, width, height);
      break;
    case 'light-mode':
      this.drawEuglenaMetabolicMode(ctx, {}, width, height, 'light');
      break;
    case 'dark-mode':
      this.drawEuglenaMetabolicMode(ctx, {}, width, height, 'dark');
      break;
    case 'eyespot':
      this.drawEuglenaEyespot(ctx, {}, width, height);
      break;
    case 'chloroplast-detail':
      this.drawEuglenaChloroplastDetail(ctx, {}, width, height);
      break;
  }

  ctx.restore();
}

static drawEuglenaPhotosynthesisFull(ctx, color, w, h) {
  ctx.fillStyle = '#ECF0F1';
  ctx.fillRect(0, 0, w, h);
  ctx.fillStyle = '#2C3E50';
  ctx.font = `bold ${w * 0.042}px Arial`;
  ctx.fillText('Euglena Light/Dark Metabolism Switch', w * 0.15, h * 0.06);

  this.drawEuglenaMetabolicMode(ctx, {}, w * 0.48, h * 0.85, 0, h * 0.1);
  this.drawEuglenaMetabolicMode(ctx, {}, w * 0.48, h * 0.85, w * 0.52, h * 0.1);

  ctx.fillStyle = '#2C3E50';
  ctx.font = `bold ${w * 0.034}px Arial`;
  ctx.fillText('Light (Phototrophic)', w * 0.08, h * 0.96);
  ctx.fillText('Dark (Heterotrophic)', w * 0.6, h * 0.96);
}

static drawEuglenaMetabolicMode(ctx, color, w, h, ox = 0, oy = 0, mode = 'light') {
  const cx = ox + w * 0.5;
  const cy = oy + h * 0.52;

  // Euglena body
  ctx.fillStyle = mode === 'light' ? '#D5F5E3' : '#FDEBD0';
  ctx.strokeStyle = '#1E8449';
  ctx.lineWidth = 3;
  ctx.beginPath();
  ctx.moveTo(cx, oy + h * 0.08);
  ctx.bezierCurveTo(cx + w * 0.3, oy + h * 0.2, cx + w * 0.32, oy + h * 0.7, cx, oy + h * 0.92);
  ctx.bezierCurveTo(cx - w * 0.32, oy + h * 0.7, cx - w * 0.3, oy + h * 0.2, cx, oy + h * 0.08);
  ctx.fill();
  ctx.stroke();

  // Chloroplasts
  const chloroCount = mode === 'light' ? 5 : 3;
  for (let i = 0; i < chloroCount; i++) {
    const a = (i / chloroCount) * Math.PI * 2;
    const px = cx + Math.cos(a) * w * 0.14;
    const py = cy + Math.sin(a) * h * 0.18;
    ctx.fillStyle = mode === 'light' ? '#27AE60' : '#566573';
    ctx.strokeStyle = '#1E8449';
    ctx.lineWidth = 1.5;
    ctx.beginPath();
    ctx.ellipse(px, py, w * 0.07, h * 0.06, a, 0, Math.PI * 2);
    ctx.fill();
    ctx.stroke();
  }

  // Nucleus
  ctx.fillStyle = '#F9E79F';
  ctx.strokeStyle = '#D4AC0D';
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.ellipse(cx, cy + h * 0.08, w * 0.09, h * 0.08, 0, 0, Math.PI * 2);
  ctx.fill();
  ctx.stroke();

  // Eyespot
  ctx.fillStyle = '#E74C3C';
  ctx.beginPath();
  ctx.ellipse(cx + w * 0.12, oy + h * 0.2, w * 0.04, h * 0.03, 0.3, 0, Math.PI * 2);
  ctx.fill();

  // Flagellum
  ctx.strokeStyle = '#884EA0';
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.moveTo(cx + w * 0.05, oy + h * 0.08);
  for (let s = 0; s <= 20; s++) {
    const t = s / 20;
    ctx.lineTo(cx + w * 0.05 + t * w * 0.1, oy + h * 0.08 - t * h * 0.25 + Math.sin(t * Math.PI * 4) * w * 0.04);
  }
  ctx.stroke();

  // Paramylon (storage)
  ctx.fillStyle = mode === 'light' ? '#F9E79F' : '#F5CBA7';
  ctx.beginPath();
  ctx.ellipse(cx - w * 0.12, cy - h * 0.05, w * 0.05, h * 0.07, 0, 0, Math.PI * 2);
  ctx.fill();

  if (mode === 'light') {
    // Sun rays
    ctx.strokeStyle = '#F39C12';
    ctx.lineWidth = 2;
    for (let i = 0; i < 8; i++) {
      const a = (i / 8) * Math.PI * 2;
      ctx.beginPath();
      ctx.moveTo(cx + Math.cos(a) * w * 0.4, oy + h * 0.12 + Math.sin(a) * h * 0.12);
      ctx.lineTo(cx + Math.cos(a) * w * 0.47, oy + h * 0.12 + Math.sin(a) * h * 0.15);
      ctx.stroke();
    }
    ctx.fillStyle = '#F39C12';
    ctx.beginPath();
    ctx.arc(cx + w * 0.38, oy + h * 0.12, w * 0.06, 0, Math.PI * 2);
    ctx.fill();
    // CO2 in + O2 out
    ctx.fillStyle = '#2980B9';
    ctx.font = `${w * 0.04}px Arial`;
    ctx.fillText('CO₂ in', ox + w * 0.03, oy + h * 0.5);
    ctx.fillStyle = '#27AE60';
    ctx.fillText('O₂ out', ox + w * 0.03, oy + h * 0.58);
    ctx.fillText('Sugars', ox + w * 0.03, oy + h * 0.66);
  } else {
    // Moon (dark)
    ctx.fillStyle = '#F1C40F';
    ctx.beginPath();
    ctx.arc(cx + w * 0.38, oy + h * 0.14, w * 0.06, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = mode === 'dark' ? '#ECF0F1' : '#2C3E50';
    ctx.beginPath();
    ctx.arc(cx + w * 0.42, oy + h * 0.12, w * 0.05, 0, Math.PI * 2);
    ctx.fill();
    // Heterotrophy indicators
    ctx.fillStyle = '#E74C3C';
    ctx.font = `${w * 0.04}px Arial`;
    ctx.fillText('Phagotrophy', ox + w * 0.03, oy + h * 0.5);
    ctx.fillStyle = '#F39C12';
    ctx.fillText('Paramylon', ox + w * 0.03, oy + h * 0.58);
    ctx.fillText('breakdown', ox + w * 0.03, oy + h * 0.66);
  }
}

static drawEuglenaEyespot(ctx, color, w, h) {
  const cx = w * 0.5;
  const cy = h * 0.5;

  ctx.fillStyle = '#ECF0F1';
  ctx.fillRect(0, 0, w, h);
  ctx.fillStyle = '#2C3E50';
  ctx.font = `bold ${w * 0.042}px Arial`;
  ctx.fillText('Euglena Eyespot (Stigma)', w * 0.2, h * 0.07);

  // Paraflagellar body (photoreceptor)
  ctx.fillStyle = '#F9E79F';
  ctx.strokeStyle = '#D4AC0D';
  ctx.lineWidth = 3;
  ctx.beginPath();
  ctx.ellipse(cx, cy - h * 0.1, w * 0.08, h * 0.09, 0, 0, Math.PI * 2);
  ctx.fill();
  ctx.stroke();
  ctx.fillStyle = '#2C3E50';
  ctx.font = `${w * 0.032}px Arial`;
  ctx.fillText('Paraflagellar body\n(photoreceptor)', cx + w * 0.1, cy - h * 0.1);

  // Carotenoid granules (eyespot)
  ctx.fillStyle = '#E74C3C';
  ctx.strokeStyle = '#C0392B';
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.ellipse(cx, cy + h * 0.1, w * 0.15, h * 0.08, 0, 0, Math.PI * 2);
  ctx.fill();
  ctx.stroke();
  // Granule rows
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 5; j++) {
      ctx.fillStyle = '#922B21';
      ctx.beginPath();
      ctx.arc(cx - w * 0.1 + j * w * 0.05, cy + h * 0.08 + i * h * 0.02, w * 0.01, 0, Math.PI * 2);
      ctx.fill();
    }
  }
  ctx.fillStyle = '#2C3E50';
  ctx.fillText('Carotenoid granules', cx - w * 0.3, cy + h * 0.23);

  // Light direction arrow
  ctx.strokeStyle = '#F39C12';
  ctx.lineWidth = 3;
  ctx.beginPath();
  ctx.moveTo(w * 0.08, cy);
  ctx.lineTo(w * 0.35, cy);
  ctx.stroke();
  ctx.fillStyle = '#F39C12';
  ctx.beginPath();
  ctx.moveTo(w * 0.35, cy);
  ctx.lineTo(w * 0.28, cy - h * 0.03);
  ctx.lineTo(w * 0.28, cy + h * 0.03);
  ctx.closePath();
  ctx.fill();
  ctx.fillStyle = '#F39C12';
  ctx.fillText('Light', w * 0.04, cy - h * 0.04);

  // Shading effect
  ctx.fillStyle = 'rgba(231,76,60,0.2)';
  ctx.beginPath();
  ctx.ellipse(cx, cy + h * 0.1, w * 0.15, h * 0.08, 0, 0, Math.PI * 2);
  ctx.fill();
}

static drawEuglenaChloroplastDetail(ctx, color, w, h) {
  const cx = w * 0.5;
  const cy = h * 0.52;
  const cr = w * 0.3;

  ctx.fillStyle = '#E8F5E9';
  ctx.fillRect(0, 0, w, h);
  ctx.fillStyle = '#2C3E50';
  ctx.font = `bold ${w * 0.04}px Arial`;
  ctx.fillText('Euglena Chloroplast (3 membranes)', w * 0.1, h * 0.06);

  // Outer membrane (ER-derived)
  ctx.fillStyle = 'rgba(174,214,241,0.3)';
  ctx.strokeStyle = '#2980B9';
  ctx.lineWidth = 4;
  ctx.beginPath();
  ctx.ellipse(cx, cy, cr + w * 0.06, h * 0.34, 0, 0, Math.PI * 2);
  ctx.fill();
  ctx.stroke();
  ctx.fillStyle = '#2980B9';
  ctx.font = `${w * 0.028}px Arial`;
  ctx.fillText('Outermost membrane (CER)', cx + cr + w * 0.08, cy);

  // Middle membrane
  ctx.strokeStyle = '#27AE60';
  ctx.lineWidth = 3;
  ctx.fillStyle = 'rgba(39,174,96,0.15)';
  ctx.beginPath();
  ctx.ellipse(cx, cy, cr + w * 0.02, h * 0.28, 0, 0, Math.PI * 2);
  ctx.fill();
  ctx.stroke();

  // Inner membrane
  ctx.strokeStyle = '#1E8449';
  ctx.lineWidth = 3;
  ctx.fillStyle = '#D5F5E3';
  ctx.beginPath();
  ctx.ellipse(cx, cy, cr, h * 0.24, 0, 0, Math.PI * 2);
  ctx.fill();
  ctx.stroke();

  // Thylakoid lamellae
  for (let i = 0; i < 6; i++) {
    const ty = cy - h * 0.16 + i * h * 0.065;
    ctx.strokeStyle = '#145A32';
    ctx.lineWidth = 4;
    ctx.beginPath();
    ctx.moveTo(cx - cr * 0.7, ty);
    ctx.lineTo(cx + cr * 0.7, ty);
    ctx.stroke();
    // Thylakoid bands
    ctx.strokeStyle = '#1E8449';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(cx - cr * 0.7, ty + h * 0.015);
    ctx.lineTo(cx + cr * 0.7, ty + h * 0.015);
    ctx.stroke();
  }

  // Pyrenoid
  ctx.fillStyle = '#F9E79F';
  ctx.strokeStyle = '#D4AC0D';
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.ellipse(cx, cy + h * 0.06, w * 0.07, h * 0.07, 0, 0, Math.PI * 2);
  ctx.fill();
  ctx.stroke();
  ctx.fillStyle = '#2C3E50';
  ctx.fillText('Pyrenoid', cx - w * 0.05, cy + h * 0.07);

  ctx.fillStyle = '#2C3E50';
  ctx.font = `${w * 0.028}px Arial`;
  ctx.fillStyle = '#27AE60';
  ctx.fillText('3 envelope membranes', w * 0.04, h * 0.88);
  ctx.fillStyle = '#145A32';
  ctx.fillText('Thylakoid lamellae', w * 0.04, h * 0.92);
  ctx.fillStyle = '#D4AC0D';
  ctx.fillText('Pyrenoid (carbon fixation)', w * 0.04, h * 0.96);
}

// ─────────────────────────────────────────────────────────────

static drawDiatomReproduction(ctx, x, y, width, height, type, structure) {
  ctx.save();
  ctx.translate(x, y);

  switch (structure) {
    case 'complete':
      this.drawDiatomReproductionFull(ctx, {}, width, height);
      break;
    case 'vegetative-division':
      this.drawDiatomReproductionStep(ctx, {}, width, height, 0);
      break;
    case 'size-reduction':
      this.drawDiatomReproductionStep(ctx, {}, width, height, 1);
      break;
    case 'sexual-induction':
      this.drawDiatomReproductionStep(ctx, {}, width, height, 2);
      break;
    case 'auxospore':
      this.drawDiatomReproductionStep(ctx, {}, width, height, 3);
      break;
  }

  ctx.restore();
}

static drawDiatomReproductionFull(ctx, color, w, h) {
  ctx.fillStyle = '#1A1A2E';
  ctx.fillRect(0, 0, w, h);
  ctx.fillStyle = '#ECF0F1';
  ctx.font = `bold ${w * 0.042}px Arial`;
  ctx.fillText('Diatom Reproduction & Size Reduction', w * 0.1, h * 0.06);

  const labels = ['Vegetative Division', 'Size Reduction', 'Sexual Induction', 'Auxospore'];
  labels.forEach((label, i) => {
    const ox = (i / 4) * w;
    this.drawDiatomReproductionStep(ctx, {}, w / 4, h * 0.78, ox, h * 0.12, i);
    ctx.fillStyle = '#ECF0F1';
    ctx.font = `${w * 0.024}px Arial`;
    ctx.fillText(label, ox + w * 0.01, h * 0.96);
    if (i < 3) {
      ctx.fillStyle = '#5DADE2';
      ctx.font = `bold ${w * 0.04}px Arial`;
      ctx.fillText('→', ox + w / 4 * 0.84, h * 0.53);
    }
  });
}

static drawDiatomReproductionStep(ctx, color, w, h, ox = 0, oy = 0, step = 0) {
  const cx = ox + w * 0.5;
  const cy = oy + h * 0.5;

  const drawFrustule = (fcx, fcy, fw, fh, col1, col2) => {
    // Epitheca
    ctx.fillStyle = col1;
    ctx.strokeStyle = '#1A5276';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.ellipse(fcx, fcy - fh * 0.15, fw, fh * 0.5, 0, 0, Math.PI * 2);
    ctx.fill();
    ctx.stroke();
    // Hypotheca (slightly smaller)
    ctx.fillStyle = col2;
    ctx.beginPath();
    ctx.ellipse(fcx, fcy + fh * 0.15, fw * 0.9, fh * 0.45, 0, 0, Math.PI * 2);
    ctx.fill();
    ctx.stroke();
    // Striae
    ctx.strokeStyle = '#1A5276';
    ctx.lineWidth = 1;
    for (let i = -3; i <= 3; i++) {
      ctx.beginPath();
      ctx.moveTo(fcx + i * fw * 0.25, fcy - fh * 0.6);
      ctx.lineTo(fcx + i * fw * 0.25, fcy + fh * 0.6);
      ctx.stroke();
    }
  };

  if (step === 0) {
    // Parent cell dividing
    drawFrustule(cx, cy - h * 0.12, w * 0.22, h * 0.18, '#5DADE2', '#AED6F1');
    ctx.strokeStyle = '#F39C12';
    ctx.lineWidth = 2;
    ctx.setLineDash([3, 2]);
    ctx.beginPath();
    ctx.moveTo(cx - w * 0.25, cy - h * 0.12);
    ctx.lineTo(cx + w * 0.25, cy - h * 0.12);
    ctx.stroke();
    ctx.setLineDash([]);
    // Two daughters
    drawFrustule(cx - w * 0.28, cy + h * 0.2, w * 0.16, h * 0.14, '#5DADE2', '#AED6F1');
    drawFrustule(cx + w * 0.28, cy + h * 0.2, w * 0.14, h * 0.13, '#5DADE2', '#85C1E9');
    ctx.fillStyle = '#ECF0F1';
    ctx.font = `${w * 0.04}px Arial`;
    ctx.fillText('Same size', cx - w * 0.42, cy + h * 0.38);
    ctx.fillText('Smaller', cx + w * 0.16, cy + h * 0.38);
  }

  if (step === 1) {
    // Size reduction over generations
    const sizes = [0.2, 0.16, 0.12, 0.09, 0.065];
    sizes.forEach((sz, i) => {
      const fx = ox + w * (0.12 + i * 0.18);
      const fy = oy + h * 0.5;
      drawFrustule(fx, fy, w * sz, h * sz * 1.4, '#5DADE2', '#AED6F1');
    });
    ctx.fillStyle = '#ECF0F1';
    ctx.font = `${w * 0.038}px Arial`;
    ctx.fillText('Size decreases with each generation', ox + w * 0.05, oy + h * 0.88);
    // Critical size threshold arrow
    ctx.strokeStyle = '#E74C3C';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(ox + w * 0.73, oy + h * 0.35);
    ctx.lineTo(ox + w * 0.73, oy + h * 0.65);
    ctx.stroke();
    ctx.fillStyle = '#E74C3C';
    ctx.fillText('Critical', ox + w * 0.74, oy + h * 0.5);
    ctx.fillText('size', ox + w * 0.74, oy + h * 0.56);
  }

  if (step === 2) {
    // Sexual induction - gametangia
    drawFrustule(cx - w * 0.2, cy, w * 0.1, h * 0.12, '#E74C3C', '#F1948A');
    drawFrustule(cx + w * 0.2, cy, w * 0.1, h * 0.12, '#2980B9', '#7FB3D3');
    // Gametes emerging
    ctx.fillStyle = '#F39C12';
    ctx.beginPath();
    ctx.arc(cx, cy, w * 0.05, 0, Math.PI * 2);
    ctx.fill();
    ctx.strokeStyle = '#F39C12';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(cx - w * 0.1, cy);
    ctx.lineTo(cx - w * 0.04, cy);
    ctx.moveTo(cx + w * 0.04, cy);
    ctx.lineTo(cx + w * 0.1, cy);
    ctx.stroke();
    ctx.fillStyle = '#ECF0F1';
    ctx.font = `${w * 0.04}px Arial`;
    ctx.fillText('Zygote forming', cx - w * 0.25, oy + h * 0.88);
  }

  if (step === 3) {
    // Auxospore (large, expands to max size)
    ctx.fillStyle = 'rgba(241,196,15,0.3)';
    ctx.strokeStyle = '#F1C40F';
    ctx.lineWidth = 4;
    ctx.setLineDash([5, 3]);
    ctx.beginPath();
    ctx.ellipse(cx, cy, w * 0.3, h * 0.3, 0, 0, Math.PI * 2);
    ctx.fill();
    ctx.stroke();
    ctx.setLineDash([]);
    // New max-size frustule forming inside
    drawFrustule(cx, cy, w * 0.2, h * 0.18, '#5DADE2', '#AED6F1');
    ctx.fillStyle = '#ECF0F1';
    ctx.font = `${w * 0.038}px Arial`;
    ctx.fillText('Auxospore', cx - w * 0.18, oy + h * 0.88);
    ctx.fillStyle = '#F1C40F';
    ctx.fillText('Size restored!', cx - w * 0.2, oy + h * 0.94);
  }
}

// ─────────────────────────────────────────────────────────────

static drawTrypanosome(ctx, x, y, width, height, type, structure) {
  ctx.save();
  ctx.translate(x, y);

  switch (structure) {
    case 'complete':
      this.drawTrypanosomeFull(ctx, {}, width, height);
      break;
    case 'morphology':
      this.drawTrypanosomeMorphology(ctx, {}, width, height);
      break;
    case 'lifecycle':
      this.drawTrypanosome_lifecycle(ctx, {}, width, height);
      break;
    case 'antigenic-variation':
      this.drawTrypanosome_antigenicVariation(ctx, {}, width, height);
      break;
  }

  ctx.restore();
}

static drawTrypanosomeFull(ctx, color, w, h) {
  ctx.fillStyle = '#ECF0F1';
  ctx.fillRect(0, 0, w, h);
  ctx.fillStyle = '#2C3E50';
  ctx.font = `bold ${w * 0.042}px Arial`;
  ctx.fillText('Trypanosome Biology', w * 0.3, h * 0.06);

  this.drawTrypanosomeMorphology(ctx, {}, w * 0.48, h * 0.88, 0, h * 0.1);
  this.drawTrypanosome_antigenicVariation(ctx, {}, w * 0.48, h * 0.88, w * 0.52, h * 0.1);

  ctx.fillStyle = '#2C3E50';
  ctx.font = `bold ${w * 0.03}px Arial`;
  ctx.fillText('Morphology', w * 0.15, h * 0.96);
  ctx.fillText('Antigenic Variation (VSG)', w * 0.56, h * 0.96);
}

static drawTrypanosomeMorphology(ctx, color, w, h, ox = 0, oy = 0) {
  const cx = ox + w * 0.5;
  const cy = oy + h * 0.52;

  ctx.fillStyle = '#2C3E50';
  ctx.font = `bold ${w * 0.04}px Arial`;
  ctx.fillText('Trypanosome (T. brucei)', ox + w * 0.05, oy + h * 0.08);

  // Cell body (elongated)
  ctx.fillStyle = '#AED6F1';
  ctx.strokeStyle = '#1A5276';
  ctx.lineWidth = 3;
  ctx.beginPath();
  ctx.moveTo(cx - w * 0.38, cy);
  ctx.bezierCurveTo(cx - w * 0.3, cy - h * 0.18, cx + w * 0.1, cy - h * 0.2, cx + w * 0.38, cy);
  ctx.bezierCurveTo(cx + w * 0.3, cy + h * 0.18, cx - w * 0.1, cy + h * 0.2, cx - w * 0.38, cy);
  ctx.fill();
  ctx.stroke();

  // VSG coat (surface)
  for (let i = 0; i < 24; i++) {
    const t = i / 24;
    const pathX = cx - w * 0.38 + t * w * 0.76;
    const pathY = cy + (t < 0.5 ? -h * 0.19 + t * h * 0.38 / 0.5 : h * 0.19 - (t - 0.5) * h * 0.38 / 0.5);
    ctx.fillStyle = '#E74C3C';
    ctx.beginPath();
    ctx.arc(pathX, pathY, w * 0.012, 0, Math.PI * 2);
    ctx.fill();
  }

  // Nucleus
  ctx.fillStyle = '#F9E79F';
  ctx.strokeStyle = '#D4AC0D';
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.ellipse(cx - w * 0.05, cy, w * 0.08, h * 0.1, 0, 0, Math.PI * 2);
  ctx.fill();
  ctx.stroke();

  // Kinetoplast (mitochondrial DNA)
  ctx.fillStyle = '#E74C3C';
  ctx.strokeStyle = '#C0392B';
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.ellipse(cx + w * 0.2, cy + h * 0.04, w * 0.04, h * 0.04, 0, 0, Math.PI * 2);
  ctx.fill();
  ctx.stroke();
  ctx.fillStyle = '#2C3E50';
  ctx.font = `${w * 0.03}px Arial`;
  ctx.fillText('K', cx + w * 0.17, cy + h * 0.055);

  // Undulating membrane + flagellum
  ctx.strokeStyle = '#884EA0';
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.moveTo(cx + w * 0.22, cy + h * 0.02);
  for (let i = 0; i <= 30; i++) {
    const t = i / 30;
    ctx.lineTo(cx + w * 0.22 - t * w * 0.55, cy + h * 0.02 + Math.sin(t * Math.PI * 4) * h * 0.08);
  }
  ctx.stroke();

  // Free flagellum tip
  ctx.strokeStyle = '#884EA0';
  ctx.lineWidth = 3;
  ctx.beginPath();
  ctx.moveTo(cx - w * 0.35, cy + h * 0.02);
  ctx.lineTo(cx - w * 0.44, cy - h * 0.06);
  ctx.stroke();

  // Labels
  ctx.fillStyle = '#2C3E50';
  ctx.font = `${w * 0.03}px Arial`;
  ctx.fillStyle = '#E74C3C';
  ctx.fillText('VSG coat', ox + w * 0.04, oy + h * 0.86);
  ctx.fillStyle = '#884EA0';
  ctx.fillText('Flagellum/UMb', ox + w * 0.04, oy + h * 0.92);
  ctx.fillStyle = '#D4AC0D';
  ctx.fillText('Kinetoplast', ox + w * 0.55, oy + h * 0.86);
}

static drawTrypanosome_lifecycle(ctx, color, w, h, ox = 0, oy = 0) {
  ctx.fillStyle = '#ECF0F1';
  ctx.fillRect(ox, oy, w, h);
  ctx.fillStyle = '#2C3E50';
  ctx.font = `bold ${w * 0.038}px Arial`;
  ctx.fillText('T. brucei Lifecycle', ox + w * 0.28, oy + h * 0.06);

  const cx = ox + w * 0.5;
  const cy = oy + h * 0.52;

  // Tsetse fly
  ctx.fillStyle = '#D5B896';
  ctx.beginPath();
  ctx.ellipse(cx, oy + h * 0.18, w * 0.18, h * 0.1, 0, 0, Math.PI * 2);
  ctx.fill();
  ctx.strokeStyle = '#A0785A';
  ctx.lineWidth = 2;
  ctx.stroke();
  ctx.fillStyle = '#2C3E50';
  ctx.font = `${w * 0.03}px Arial`;
  ctx.fillText('Tsetse fly', cx - w * 0.1, oy + h * 0.19);

  // Human
  ctx.fillStyle = '#FDEBD0';
  ctx.beginPath();
  ctx.ellipse(cx, oy + h * 0.82, w * 0.15, h * 0.1, 0, 0, Math.PI * 2);
  ctx.fill();
  ctx.strokeStyle = '#884EA0';
  ctx.lineWidth = 2;
  ctx.stroke();
  ctx.fillStyle = '#2C3E50';
  ctx.fillText('Human host', cx - w * 0.12, oy + h * 0.83);

  // Cycle arrows
  ctx.strokeStyle = '#E74C3C';
  ctx.lineWidth = 3;
  ctx.beginPath();
  ctx.moveTo(cx - w * 0.12, oy + h * 0.25);
  ctx.lineTo(cx - w * 0.2, oy + h * 0.75);
  ctx.stroke();
  ctx.strokeStyle = '#2980B9';
  ctx.beginPath();
  ctx.moveTo(cx + w * 0.12, oy + h * 0.75);
  ctx.lineTo(cx + w * 0.2, oy + h * 0.25);
  ctx.stroke();

  ctx.fillStyle = '#E74C3C';
  ctx.fillText('Metacyclic\ntryp.', ox + w * 0.04, oy + h * 0.5);
  ctx.fillStyle = '#2980B9';
  ctx.fillText('Bloodstream\nform', ox + w * 0.62, oy + h * 0.5);
}

static drawTrypanosome_antigenicVariation(ctx, color, w, h, ox = 0, oy = 0) {
  ctx.fillStyle = '#2C3E50';
  ctx.font = `bold ${w * 0.04}px Arial`;
  ctx.fillText('VSG Antigenic Variation', ox + w * 0.08, oy + h * 0.07);

  const vsgColors = ['#E74C3C', '#2980B9', '#27AE60', '#F39C12', '#884EA0'];
  const vsgLabels = ['VSG A', 'VSG B', 'VSG C', 'VSG D', 'VSG E'];

  // Large VSG gene archive
  ctx.fillStyle = '#2C3E50';
  ctx.font = `${w * 0.03}px Arial`;
  ctx.fillText('VSG gene archive (~1000 variants)', ox + w * 0.05, oy + h * 0.16);

  for (let i = 0; i < 10; i++) {
    ctx.fillStyle = vsgColors[i % 5];
    ctx.globalAlpha = 0.4;
    ctx.beginPath();
    ctx.rect(ox + w * (0.05 + i * 0.09), oy + h * 0.2, w * 0.07, h * 0.06);
    ctx.fill();
    ctx.globalAlpha = 1;
  }

  // Expression site (one active)
  ctx.fillStyle = vsgColors[0];
  ctx.strokeStyle = '#2C3E50';
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.rect(ox + w * 0.38, oy + h * 0.2, w * 0.07, h * 0.06);
  ctx.fill();
  ctx.stroke();
  ctx.fillStyle = '#ECF0F1';
  ctx.font = `${w * 0.025}px Arial`;
  ctx.fillText('Active', ox + w * 0.385, oy + h * 0.25);

  // Cells with different VSG coats (switch over time)
  for (let i = 0; i < 5; i++) {
    const cellX = ox + w * (0.1 + i * 0.18);
    const cellY = oy + h * 0.6;

    ctx.fillStyle = '#AED6F1';
    ctx.strokeStyle = vsgColors[i];
    ctx.lineWidth = 5;
    ctx.beginPath();
    ctx.ellipse(cellX, cellY, w * 0.07, h * 0.12, 0, 0, Math.PI * 2);
    ctx.fill();
    ctx.stroke();

    ctx.fillStyle = '#2C3E50';
    ctx.font = `${w * 0.026}px Arial`;
    ctx.fillText(vsgLabels[i], cellX - w * 0.04, cellY + h * 0.17);

    if (i < 4) {
      ctx.strokeStyle = '#2C3E50';
      ctx.lineWidth = 1.5;
      ctx.beginPath();
      ctx.moveTo(cellX + w * 0.07, cellY);
      ctx.lineTo(cellX + w * 0.11, cellY);
      ctx.stroke();
    }
  }

  ctx.fillStyle = '#2C3E50';
  ctx.font = `${w * 0.028}px Arial`;
  ctx.fillText('Immune evasion by switching VSG gene expression', ox + w * 0.02, oy + h * 0.88);
  ctx.fillStyle = '#E74C3C';
  ctx.fillText('→ antibodies rendered ineffective', ox + w * 0.08, oy + h * 0.94);
}

// ─────────────────────────────────────────────────────────────

static drawAlgalBloom(ctx, x, y, width, height, type, structure) {
  ctx.save();
  ctx.translate(x, y);

  switch (structure) {
    case 'complete':
      this.drawAlgalBloomFull(ctx, {}, width, height);
      break;
    case 'nutrient-loading':
      this.drawAlgalBloomStage(ctx, {}, width, height, 0);
      break;
    case 'rapid-growth':
      this.drawAlgalBloomStage(ctx, {}, width, height, 1);
      break;
    case 'surface-mat':
      this.drawAlgalBloomStage(ctx, {}, width, height, 2);
      break;
    case 'die-off':
      this.drawAlgalBloomStage(ctx, {}, width, height, 3);
      break;
    case 'hypoxia':
      this.drawAlgalBloomStage(ctx, {}, width, height, 4);
      break;
  }

  ctx.restore();
}

static drawAlgalBloomFull(ctx, color, w, h) {
  ctx.fillStyle = '#ECF0F1';
  ctx.fillRect(0, 0, w, h);
  ctx.fillStyle = '#2C3E50';
  ctx.font = `bold ${w * 0.04}px Arial`;
  ctx.fillText('Harmful Algal Bloom (HAB) Formation', w * 0.12, h * 0.06);

  const labels = ['Nutrient Loading', 'Rapid Growth', 'Surface Mat', 'Die-off', 'Hypoxia'];
  labels.forEach((label, i) => {
    const col = i % 3;
    const row = Math.floor(i / 3);
    const ox = col * (w / 3) + (row === 1 ? w / 6 : 0);
    const oy = row * (h * 0.46) + h * 0.09;
    this.drawAlgalBloomStage(ctx, {}, w / 3, h * 0.4, ox, oy, i);
    ctx.fillStyle = '#2C3E50';
    ctx.font = `${w * 0.026}px Arial`;
    ctx.fillText(label, ox + w * 0.02, oy + h * 0.44);
  });
}

static drawAlgalBloomStage(ctx, color, w, h, ox = 0, oy = 0, stage = 0) {
  // Water body
  ctx.fillStyle = '#AED6F1';
  ctx.fillRect(ox, oy, w, h);
  ctx.strokeStyle = '#1A5276';
  ctx.lineWidth = 2;
  ctx.strokeRect(ox, oy, w, h);

  // Sediment
  ctx.fillStyle = '#D5B896';
  ctx.fillRect(ox, oy + h * 0.82, w, h * 0.18);

  if (stage === 0) {
    // Nutrient runoff (arrows from land)
    ctx.fillStyle = '#E8D5B5';
    ctx.fillRect(ox, oy, w * 0.2, h * 0.82);
    ctx.strokeStyle = '#A0785A';
    ctx.lineWidth = 2;
    ctx.stroke();
    ctx.fillStyle = '#2C3E50';
    ctx.font = `${w * 0.06}px Arial`;
    ctx.fillText('Farm/Land', ox + w * 0.01, oy + h * 0.2);
    // Nutrient arrows
    ctx.strokeStyle = '#E74C3C';
    ctx.lineWidth = 3;
    for (let i = 0; i < 3; i++) {
      ctx.beginPath();
      ctx.moveTo(ox + w * 0.2, oy + h * (0.2 + i * 0.18));
      ctx.lineTo(ox + w * 0.45, oy + h * (0.2 + i * 0.18));
      ctx.stroke();
      ctx.fillStyle = '#E74C3C';
      ctx.font = `${w * 0.045}px Arial`;
      ctx.fillText(i === 0 ? 'N' : i === 1 ? 'P' : 'K', ox + w * 0.47, oy + h * (0.23 + i * 0.18));
    }
    // Sparse algae
    for (let i = 0; i < 5; i++) {
      ctx.fillStyle = '#27AE60';
      ctx.beginPath();
      ctx.arc(ox + w * (0.5 + Math.random() * 0.4), oy + h * (0.2 + Math.random() * 0.5), w * 0.02, 0, Math.PI * 2);
      ctx.fill();
    }
  }

  if (stage === 1) {
    // Exponential growth - many cells
    for (let i = 0; i < 40; i++) {
      const ax = ox + w * (0.05 + Math.random() * 0.9);
      const ay = oy + h * (0.05 + Math.random() * 0.7);
      ctx.fillStyle = '#27AE60';
      ctx.globalAlpha = 0.8;
      ctx.beginPath();
      ctx.arc(ax, ay, w * (0.015 + Math.random() * 0.02), 0, Math.PI * 2);
      ctx.fill();
      ctx.globalAlpha = 1;
    }
    // Growth arrows
    ctx.strokeStyle = '#1E8449';
    ctx.lineWidth = 2;
    for (let i = 0; i < 3; i++) {
      ctx.beginPath();
      ctx.moveTo(ox + w * (0.2 + i * 0.3), oy + h * 0.75);
      ctx.lineTo(ox + w * (0.2 + i * 0.3), oy + h * 0.55);
      ctx.stroke();
    }
  }

  if (stage === 2) {
    // Dense surface mat
    ctx.fillStyle = '#145A32';
    ctx.fillRect(ox, oy, w, h * 0.25);
    ctx.fillStyle = '#1E8449';
    ctx.fillRect(ox, oy + h * 0.02, w, h * 0.12);
    // Surface texture
    for (let i = 0; i < 20; i++) {
      ctx.fillStyle = '#27AE60';
      ctx.beginPath();
      ctx.arc(ox + w * (0.02 + i * 0.048), oy + h * 0.12, w * 0.025, 0, Math.PI * 2);
      ctx.fill();
    }
    // Blocked light
    ctx.fillStyle = 'rgba(20,90,50,0.5)';
    ctx.fillRect(ox, oy + h * 0.25, w, h * 0.57);
    ctx.fillStyle = '#ECF0F1';
    ctx.font = `${w * 0.06}px Arial`;
    ctx.fillText('Light\nblocked', ox + w * 0.35, oy + h * 0.55);
  }

  if (stage === 3) {
    // Die-off - brownish water
    ctx.fillStyle = '#7D6608';
    ctx.globalAlpha = 0.4;
    ctx.fillRect(ox, oy, w, h * 0.82);
    ctx.globalAlpha = 1;
    // Dead cell debris
    for (let i = 0; i < 20; i++) {
      ctx.fillStyle = '#566573';
      ctx.beginPath();
      ctx.arc(ox + w * (0.05 + Math.random() * 0.9), oy + h * (0.05 + Math.random() * 0.7), w * 0.02, 0, Math.PI * 2);
      ctx.fill();
    }
    // Bacterial decomposition dots
    for (let i = 0; i < 15; i++) {
      ctx.fillStyle = '#E74C3C';
      ctx.globalAlpha = 0.7;
      ctx.beginPath();
      ctx.arc(ox + w * (0.05 + Math.random() * 0.9), oy + h * 0.7 + Math.random() * h * 0.1, w * 0.01, 0, Math.PI * 2);
      ctx.fill();
      ctx.globalAlpha = 1;
    }
    ctx.fillStyle = '#2C3E50';
    ctx.font = `${w * 0.055}px Arial`;
    ctx.fillText('Decomposition', ox + w * 0.15, oy + h * 0.5);
  }

  if (stage === 4) {
    // Hypoxia - dead zone
    ctx.fillStyle = '#2C3E50';
    ctx.globalAlpha = 0.6;
    ctx.fillRect(ox, oy, w, h * 0.82);
    ctx.globalAlpha = 1;
    // Dead fish
    ctx.strokeStyle = '#BDC3C7';
    ctx.lineWidth = 3;
    [[0.3, 0.35], [0.65, 0.5], [0.2, 0.6]].forEach(([fx, fy]) => {
      ctx.beginPath();
      ctx.moveTo(ox + w * fx, oy + h * fy);
      ctx.lineTo(ox + w * (fx + 0.15), oy + h * fy);
      ctx.stroke();
      ctx.fillStyle = '#BDC3C7';
      ctx.beginPath();
      ctx.arc(ox + w * (fx + 0.16), oy + h * fy, w * 0.02, 0, Math.PI * 2);
      ctx.fill();
      // X eye
      ctx.strokeStyle = '#E74C3C';
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.moveTo(ox + w * (fx + 0.14), oy + h * (fy - 0.03));
      ctx.lineTo(ox + w * (fx + 0.18), oy + h * (fy + 0.03));
      ctx.moveTo(ox + w * (fx + 0.18), oy + h * (fy - 0.03));
      ctx.lineTo(ox + w * (fx + 0.14), oy + h * (fy + 0.03));
      ctx.stroke();
    });
    // O2 depleted label
    ctx.fillStyle = '#E74C3C';
    ctx.font = `bold ${w * 0.065}px Arial`;
    ctx.fillText('O₂ ≈ 0', ox + w * 0.32, oy + h * 0.22);
    ctx.fillStyle = '#ECF0F1';
    ctx.font = `${w * 0.055}px Arial`;
    ctx.fillText('Dead Zone', ox + w * 0.28, oy + h * 0.76);
  }
}
