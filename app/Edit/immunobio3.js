static drawComplementSystem(ctx, x, y, width, height, stage) {
  ctx.save();
  ctx.translate(x, y);
  switch (stage) {
    case 'classical':
      this.drawComplementClassical(ctx, width, height);
      break;
    case 'lectin':
      this.drawComplementLectin(ctx, width, height);
      break;
    case 'alternative':
      this.drawComplementAlternative(ctx, width, height);
      break;
    case 'mac':
      this.drawComplementMAC(ctx, width, height);
      break;
    case 'complete':
    default:
      this.drawComplementComplete(ctx, width, height);
      break;
  }
  ctx.restore();
}

static drawComplementComplete(ctx, w, h) {
  // Three pathway origins at top
  const pathways = [
    { label: 'Classical', x: 0.15, color: '#4169E1' },
    { label: 'Lectin',    x: 0.50, color: '#9370DB' },
    { label: 'Alternative', x: 0.85, color: '#FF8C00' },
  ];
  pathways.forEach(({ label, x, color }) => {
    ctx.fillStyle = color;
    ctx.beginPath();
    ctx.arc(w * x, h * 0.12, 22, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = '#fff';
    ctx.font = `bold ${Math.floor(w * 0.028)}px sans-serif`;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(label, w * x, h * 0.12);
  });

  // Converge to C3 convertase
  pathways.forEach(({ x, color }) => {
    ctx.strokeStyle = color;
    ctx.lineWidth = 2.5;
    ctx.beginPath();
    ctx.moveTo(w * x, h * 0.18);
    ctx.lineTo(w * 0.5, h * 0.35);
    ctx.stroke();
  });

  // C3 convertase node
  ctx.fillStyle = '#228B22';
  ctx.beginPath();
  ctx.arc(w * 0.5, h * 0.38, 26, 0, Math.PI * 2);
  ctx.fill();
  ctx.fillStyle = '#fff';
  ctx.font = `bold ${Math.floor(w * 0.026)}px sans-serif`;
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText('C3 Conv.', w * 0.5, h * 0.38);

  // C3 cleavage → C3a and C3b
  ctx.strokeStyle = '#228B22';
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.moveTo(w * 0.5, h * 0.44);
  ctx.lineTo(w * 0.25, h * 0.56);
  ctx.stroke();
  ctx.beginPath();
  ctx.moveTo(w * 0.5, h * 0.44);
  ctx.lineTo(w * 0.75, h * 0.56);
  ctx.stroke();

  // C3a (anaphylatoxin)
  ctx.fillStyle = '#FF6347';
  ctx.beginPath();
  ctx.arc(w * 0.22, h * 0.6, 18, 0, Math.PI * 2);
  ctx.fill();
  ctx.fillStyle = '#fff';
  ctx.font = `bold ${Math.floor(w * 0.024)}px sans-serif`;
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText('C3a', w * 0.22, h * 0.6);

  // C3b (opsonin) → C5 convertase
  ctx.fillStyle = '#32CD32';
  ctx.beginPath();
  ctx.arc(w * 0.75, h * 0.6, 18, 0, Math.PI * 2);
  ctx.fill();
  ctx.fillStyle = '#fff';
  ctx.font = `bold ${Math.floor(w * 0.024)}px sans-serif`;
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText('C3b', w * 0.75, h * 0.6);

  // C5 convertase
  ctx.strokeStyle = '#32CD32';
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.moveTo(w * 0.75, h * 0.66);
  ctx.lineTo(w * 0.75, h * 0.73);
  ctx.stroke();
  ctx.fillStyle = '#006400';
  ctx.beginPath();
  ctx.arc(w * 0.75, h * 0.77, 18, 0, Math.PI * 2);
  ctx.fill();
  ctx.fillStyle = '#fff';
  ctx.font = `bold ${Math.floor(w * 0.022)}px sans-serif`;
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText('C5 Conv.', w * 0.75, h * 0.77);

  // MAC assembly at bottom
  ctx.strokeStyle = '#006400';
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.moveTo(w * 0.75, h * 0.83);
  ctx.lineTo(w * 0.75, h * 0.9);
  ctx.stroke();

  // MAC pore
  ctx.fillStyle = '#8B0000';
  ctx.beginPath();
  ctx.ellipse(w * 0.75, h * 0.93, 30, 12, 0, 0, Math.PI * 2);
  ctx.fill();
  ctx.strokeStyle = '#FF0000';
  ctx.lineWidth = 2;
  ctx.stroke();
  ctx.fillStyle = '#fff';
  ctx.font = `bold ${Math.floor(w * 0.022)}px sans-serif`;
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText('MAC', w * 0.75, h * 0.93);

  // Opsonization label
  ctx.fillStyle = 'rgba(50,205,50,0.15)';
  ctx.beginPath();
  ctx.arc(w * 0.25, h * 0.78, 28, 0, Math.PI * 2);
  ctx.fill();
  ctx.strokeStyle = '#228B22';
  ctx.lineWidth = 1.5;
  ctx.setLineDash([4, 3]);
  ctx.beginPath();
  ctx.moveTo(w * 0.22, h * 0.67);
  ctx.lineTo(w * 0.25, h * 0.73);
  ctx.stroke();
  ctx.setLineDash([]);
  ctx.fillStyle = '#006400';
  ctx.font = `${Math.floor(w * 0.022)}px sans-serif`;
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText('Opsonization', w * 0.25, h * 0.78);
}

static drawComplementClassical(ctx, w, h) {
  // Antibody-antigen complex trigger
  ctx.fillStyle = '#8B0000';
  ctx.beginPath();
  ctx.arc(w * 0.5, h * 0.15, 20, 0, Math.PI * 2);
  ctx.fill();
  // Y antibody
  ctx.strokeStyle = '#FFD700';
  ctx.lineWidth = 3;
  ctx.beginPath();
  ctx.moveTo(w * 0.5, h * 0.28);
  ctx.lineTo(w * 0.5, h * 0.2);
  ctx.lineTo(w * 0.43, h * 0.13);
  ctx.moveTo(w * 0.5, h * 0.2);
  ctx.lineTo(w * 0.57, h * 0.13);
  ctx.stroke();
  // C1 recognition
  ctx.fillStyle = '#4169E1';
  ctx.beginPath();
  ctx.arc(w * 0.5, h * 0.38, 22, 0, Math.PI * 2);
  ctx.fill();
  ctx.fillStyle = '#fff';
  ctx.font = `bold ${Math.floor(w * 0.03)}px sans-serif`;
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText('C1qrs', w * 0.5, h * 0.38);
  // Cascade C4 → C2 → C3
  const steps = [{ label: 'C4', y: 0.53 }, { label: 'C2', y: 0.66 }, { label: 'C3 Conv.', y: 0.8 }];
  steps.forEach(({ label, y }, i) => {
    ctx.strokeStyle = '#4169E1';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(w * 0.5, h * (y - 0.08));
    ctx.lineTo(w * 0.5, h * (y - 0.01));
    ctx.stroke();
    ctx.fillStyle = i === 2 ? '#228B22' : '#6495ED';
    ctx.beginPath();
    ctx.arc(w * 0.5, h * y, 20, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = '#fff';
    ctx.font = `bold ${Math.floor(w * 0.026)}px sans-serif`;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(label, w * 0.5, h * y);
  });
}

static drawComplementLectin(ctx, w, h) {
  // Mannose sugars on pathogen surface
  ctx.fillStyle = '#8B4513';
  ctx.fillRect(w * 0.1, h * 0.05, w * 0.8, h * 0.12);
  ctx.fillStyle = '#DEB887';
  for (let i = 0; i < 6; i++) {
    ctx.beginPath();
    ctx.arc(w * (0.15 + i * 0.14), h * 0.05, 8, 0, Math.PI * 2);
    ctx.fill();
  }
  ctx.fillStyle = '#fff';
  ctx.font = `${Math.floor(w * 0.025)}px sans-serif`;
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText('Pathogen Mannose', w * 0.5, h * 0.11);

  // MBL binding
  ctx.strokeStyle = '#9370DB';
  ctx.lineWidth = 2.5;
  for (let i = 1; i <= 4; i++) {
    ctx.beginPath();
    ctx.moveTo(w * (0.2 + i * 0.13), h * 0.17);
    ctx.lineTo(w * 0.5, h * 0.33);
    ctx.stroke();
  }
  ctx.fillStyle = '#9370DB';
  ctx.beginPath();
  ctx.arc(w * 0.5, h * 0.36, 22, 0, Math.PI * 2);
  ctx.fill();
  ctx.fillStyle = '#fff';
  ctx.font = `bold ${Math.floor(w * 0.026)}px sans-serif`;
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText('MBL', w * 0.5, h * 0.36);

  // MASP1/2 activation
  ['MASP1', 'MASP2'].forEach((label, i) => {
    const nx = w * (0.3 + i * 0.4);
    ctx.strokeStyle = '#9370DB';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(w * 0.5, h * 0.44);
    ctx.lineTo(nx, h * 0.56);
    ctx.stroke();
    ctx.fillStyle = '#7B68EE';
    ctx.beginPath();
    ctx.arc(nx, h * 0.6, 20, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = '#fff';
    ctx.font = `bold ${Math.floor(w * 0.024)}px sans-serif`;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(label, nx, h * 0.6);
  });

  // → C3 convertase
  ctx.strokeStyle = '#7B68EE';
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.moveTo(w * 0.5, h * 0.67);
  ctx.lineTo(w * 0.5, h * 0.77);
  ctx.stroke();
  ctx.fillStyle = '#228B22';
  ctx.beginPath();
  ctx.arc(w * 0.5, h * 0.82, 24, 0, Math.PI * 2);
  ctx.fill();
  ctx.fillStyle = '#fff';
  ctx.font = `bold ${Math.floor(w * 0.026)}px sans-serif`;
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText('C3 Conv.', w * 0.5, h * 0.82);
}

static drawComplementAlternative(ctx, w, h) {
  // Spontaneous C3 hydrolysis
  ctx.fillStyle = '#FF8C00';
  ctx.beginPath();
  ctx.arc(w * 0.3, h * 0.15, 22, 0, Math.PI * 2);
  ctx.fill();
  ctx.fillStyle = '#fff';
  ctx.font = `bold ${Math.floor(w * 0.026)}px sans-serif`;
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText('C3(H₂O)', w * 0.3, h * 0.15);

  // Factor B and D
  ['Factor B', 'Factor D'].forEach((label, i) => {
    ctx.strokeStyle = '#FF8C00';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(w * 0.3, h * 0.22);
    ctx.lineTo(w * (0.3 + (i === 0 ? 0.25 : -0.08)), h * 0.38);
    ctx.stroke();
    ctx.fillStyle = '#FFA500';
    ctx.beginPath();
    ctx.arc(w * (0.3 + (i === 0 ? 0.25 : -0.08)), h * 0.42, 20, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = '#fff';
    ctx.font = `${Math.floor(w * 0.022)}px sans-serif`;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(label, w * (0.3 + (i === 0 ? 0.25 : -0.08)), h * 0.42);
  });

  // Amplification loop arrow
  ctx.strokeStyle = 'rgba(255,140,0,0.5)';
  ctx.lineWidth = 2;
  ctx.setLineDash([5, 4]);
  ctx.beginPath();
  ctx.arc(w * 0.65, h * 0.52, 30, -0.4, Math.PI * 1.3);
  ctx.stroke();
  ctx.setLineDash([]);
  ctx.fillStyle = '#FF8C00';
  ctx.font = `${Math.floor(w * 0.022)}px sans-serif`;
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText('Amplification loop', w * 0.65, h * 0.58);

  // Properdin stabilization
  ctx.fillStyle = '#DAA520';
  ctx.beginPath();
  ctx.arc(w * 0.5, h * 0.7, 18, 0, Math.PI * 2);
  ctx.fill();
  ctx.fillStyle = '#fff';
  ctx.font = `${Math.floor(w * 0.022)}px sans-serif`;
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText('Properdin', w * 0.5, h * 0.7);

  // → C3 convertase
  ctx.strokeStyle = '#FF8C00';
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.moveTo(w * 0.5, h * 0.77);
  ctx.lineTo(w * 0.5, h * 0.86);
  ctx.stroke();
  ctx.fillStyle = '#228B22';
  ctx.beginPath();
  ctx.arc(w * 0.5, h * 0.9, 22, 0, Math.PI * 2);
  ctx.fill();
  ctx.fillStyle = '#fff';
  ctx.font = `bold ${Math.floor(w * 0.024)}px sans-serif`;
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText('C3 Conv.', w * 0.5, h * 0.9);
}

static drawComplementMAC(ctx, w, h) {
  const cx = w * 0.5, cy = h * 0.5;
  // Cell membrane
  ctx.fillStyle = '#DEB887';
  ctx.fillRect(0, cy - 18, w, 36);
  ctx.strokeStyle = '#C4A265';
  ctx.lineWidth = 2;
  ctx.strokeRect(0, cy - 18, w, 36);

  // MAC pore channel
  ctx.fillStyle = '#8B0000';
  ctx.beginPath();
  ctx.ellipse(cx, cy, 38, 18, 0, 0, Math.PI * 2);
  ctx.fill();
  ctx.strokeStyle = '#FF0000';
  ctx.lineWidth = 2.5;
  ctx.stroke();

  // Inner lumen
  ctx.fillStyle = '#FF6347';
  ctx.beginPath();
  ctx.ellipse(cx, cy, 20, 10, 0, 0, Math.PI * 2);
  ctx.fill();

  // Component labels around pore
  const components = ['C5b', 'C6', 'C7', 'C8', 'C9×n'];
  components.forEach((label, i) => {
    const a = (i / components.length) * Math.PI * 2 - Math.PI / 2;
    const lx = cx + Math.cos(a) * 65, ly = cy + Math.sin(a) * 55;
    ctx.strokeStyle = '#8B0000';
    ctx.lineWidth = 1.5;
    ctx.beginPath();
    ctx.moveTo(cx + Math.cos(a) * 40, cy + Math.sin(a) * 20);
    ctx.lineTo(lx, ly);
    ctx.stroke();
    ctx.fillStyle = '#8B0000';
    ctx.beginPath();
    ctx.arc(lx, ly, 16, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = '#fff';
    ctx.font = `bold ${Math.floor(w * 0.024)}px sans-serif`;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(label, lx, ly);
  });

  // Ion/water influx arrows
  ctx.strokeStyle = '#00BFFF';
  ctx.lineWidth = 2;
  for (let i = -2; i <= 2; i++) {
    ctx.beginPath();
    ctx.moveTo(cx + i * 8, cy - 38);
    ctx.lineTo(cx + i * 8, cy - 22);
    ctx.stroke();
    ctx.fillStyle = '#00BFFF';
    ctx.beginPath();
    ctx.moveTo(cx + i * 8, cy - 22);
    ctx.lineTo(cx + i * 8 - 4, cy - 28);
    ctx.lineTo(cx + i * 8 + 4, cy - 28);
    ctx.closePath();
    ctx.fill();
  }
  ctx.fillStyle = '#00BFFF';
  ctx.font = `${Math.floor(w * 0.022)}px sans-serif`;
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText('Ion/H₂O influx → Cell lysis', cx, cy - 50);
}

// ─────────────────────────────────────────────────────────────────────────────

static drawInnateImmuneResponse(ctx, x, y, width, height, stage) {
  ctx.save();
  ctx.translate(x, y);
  switch (stage) {
    case 'barriers':
      this.drawInnateBarriers(ctx, width, height);
      break;
    case 'pattern_recognition':
      this.drawInnatePatternRecognition(ctx, width, height);
      break;
    case 'inflammation':
      this.drawInnateInflammation(ctx, width, height);
      break;
    case 'phagocytosis':
      this.drawInnatePhagocytosis(ctx, width, height);
      break;
    case 'complete':
    default:
      this.drawInnateComplete(ctx, width, height);
      break;
  }
  ctx.restore();
}

static drawInnateComplete(ctx, w, h) {
  // Pathogen
  ctx.fillStyle = '#8B0000';
  ctx.beginPath();
  ctx.arc(w * 0.1, h * 0.5, 16, 0, Math.PI * 2);
  ctx.fill();

  // PRR / TLR recognition
  ctx.fillStyle = '#FF8C00';
  ctx.beginPath();
  ctx.arc(w * 0.28, h * 0.5, 20, 0, Math.PI * 2);
  ctx.fill();
  ctx.fillStyle = '#fff';
  ctx.font = `bold ${Math.floor(w * 0.025)}px sans-serif`;
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText('TLR', w * 0.28, h * 0.5);

  // Signaling arrow
  ctx.strokeStyle = '#FF8C00';
  ctx.lineWidth = 2.5;
  ctx.beginPath();
  ctx.moveTo(w * 0.1, h * 0.5);
  ctx.lineTo(w * 0.22, h * 0.5);
  ctx.stroke();

  // NF-κB nucleus
  ctx.fillStyle = '#9400D3';
  ctx.beginPath();
  ctx.arc(w * 0.45, h * 0.5, 22, 0, Math.PI * 2);
  ctx.fill();
  ctx.fillStyle = '#fff';
  ctx.font = `bold ${Math.floor(w * 0.022)}px sans-serif`;
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText('NF-κB', w * 0.45, h * 0.5);

  ctx.strokeStyle = '#9400D3';
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.moveTo(w * 0.35, h * 0.5);
  ctx.lineTo(w * 0.4, h * 0.5);
  ctx.stroke();

  // Effector branches
  const branches = [
    { label: 'Cytokines', y: 0.2, color: '#FF6347' },
    { label: 'NK Cells',  y: 0.4, color: '#2E8B57' },
    { label: 'Phagocytes', y: 0.6, color: '#CD853F' },
    { label: 'Complement', y: 0.8, color: '#00CED1' },
  ];
  branches.forEach(({ label, y, color }) => {
    ctx.strokeStyle = '#9400D3';
    ctx.lineWidth = 1.8;
    ctx.setLineDash([4, 3]);
    ctx.beginPath();
    ctx.moveTo(w * 0.52, h * 0.5);
    ctx.lineTo(w * 0.62, h * y);
    ctx.stroke();
    ctx.setLineDash([]);
    ctx.fillStyle = color;
    ctx.beginPath();
    ctx.arc(w * 0.68, h * y, 18, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = '#fff';
    ctx.font = `bold ${Math.floor(w * 0.022)}px sans-serif`;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(label, w * 0.68, h * y);
  });

  // Bridge to adaptive (dashed)
  ctx.strokeStyle = '#aaa';
  ctx.lineWidth = 1.5;
  ctx.setLineDash([6, 4]);
  ctx.beginPath();
  ctx.moveTo(w * 0.82, h * 0.4);
  ctx.lineTo(w * 0.94, h * 0.5);
  ctx.stroke();
  ctx.setLineDash([]);
  ctx.fillStyle = '#555';
  ctx.font = `${Math.floor(w * 0.02)}px sans-serif`;
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText('→ Adaptive', w * 0.92, h * 0.44);
}

static drawInnateBarriers(ctx, w, h) {
  // Skin
  ctx.fillStyle = '#DEB887';
  ctx.fillRect(0, h * 0.07, w, h * 0.18);
  ctx.strokeStyle = '#C4A265';
  ctx.lineWidth = 3;
  ctx.strokeRect(0, h * 0.07, w, h * 0.18);
  ctx.fillStyle = '#8B6914';
  ctx.font = `bold ${Math.floor(w * 0.03)}px sans-serif`;
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText('Skin (physical barrier)', w * 0.5, h * 0.16);

  // Mucous layer
  ctx.fillStyle = 'rgba(173,255,47,0.35)';
  ctx.fillRect(0, h * 0.33, w, h * 0.15);
  ctx.fillStyle = '#556B2F';
  ctx.font = `bold ${Math.floor(w * 0.028)}px sans-serif`;
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText('Mucus layer', w * 0.5, h * 0.405);

  // Cilia
  ctx.strokeStyle = '#3CB371';
  ctx.lineWidth = 2;
  for (let i = 0; i < 14; i++) {
    const bx = w * (0.04 + i * 0.066);
    ctx.beginPath();
    ctx.moveTo(bx, h * 0.33);
    ctx.quadraticCurveTo(bx + 6, h * 0.22, bx, h * 0.12);
    ctx.stroke();
  }

  // Stomach acid
  ctx.fillStyle = 'rgba(255,200,0,0.3)';
  ctx.fillRect(w * 0.1, h * 0.57, w * 0.8, h * 0.16);
  ctx.strokeStyle = '#B8860B';
  ctx.lineWidth = 2;
  ctx.strokeRect(w * 0.1, h * 0.57, w * 0.8, h * 0.16);
  ctx.fillStyle = '#8B6914';
  ctx.font = `bold ${Math.floor(w * 0.028)}px sans-serif`;
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText('Stomach acid (pH ~2)', w * 0.5, h * 0.65);

  // Microbiome
  ctx.fillStyle = 'rgba(144,238,144,0.35)';
  ctx.fillRect(w * 0.1, h * 0.8, w * 0.8, h * 0.14);
  ctx.strokeStyle = '#228B22';
  ctx.lineWidth = 2;
  ctx.strokeRect(w * 0.1, h * 0.8, w * 0.8, h * 0.14);
  ctx.fillStyle = '#006400';
  ctx.font = `bold ${Math.floor(w * 0.026)}px sans-serif`;
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText('Commensal microbiome (competition)', w * 0.5, h * 0.87);
}

static drawInnatePatternRecognition(ctx, w, h) {
  // PRRs on cell surface
  const prrs = [
    { label: 'TLR4', x: 0.2, color: '#FF6347' },
    { label: 'TLR9', x: 0.4, color: '#FF4500' },
    { label: 'NLR',  x: 0.6, color: '#DC143C' },
    { label: 'RIG-I', x: 0.8, color: '#B22222' },
  ];
  // Cell body
  ctx.fillStyle = '#FFE4B5';
  ctx.beginPath();
  ctx.arc(w * 0.5, h * 0.6, h * 0.3, 0, Math.PI * 2);
  ctx.fill();
  ctx.strokeStyle = '#DAA520';
  ctx.lineWidth = 2;
  ctx.stroke();

  prrs.forEach(({ label, x, color }) => {
    const sx = w * x, sy = h * 0.35;
    ctx.strokeStyle = color;
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.moveTo(sx, sy + 10);
    ctx.lineTo(sx, h * 0.6 - h * 0.3 * Math.sin(Math.acos((sx - w * 0.5) / (h * 0.3))));
    ctx.stroke();
    ctx.fillStyle = color;
    ctx.beginPath();
    ctx.arc(sx, sy, 16, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = '#fff';
    ctx.font = `bold ${Math.floor(w * 0.022)}px sans-serif`;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(label, sx, sy);
  });

  // PAMPs labels above
  ['LPS', 'CpG DNA', 'Peptidoglycan', 'dsRNA'].forEach((pamp, i) => {
    ctx.fillStyle = '#8B0000';
    ctx.beginPath();
    ctx.arc(w * (0.2 + i * 0.2), h * 0.12, 12, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = '#fff';
    ctx.font = `${Math.floor(w * 0.02)}px sans-serif`;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(pamp, w * (0.2 + i * 0.2), h * 0.12);
    // PAMP→PRR arrow
    ctx.strokeStyle = 'rgba(139,0,0,0.5)';
    ctx.lineWidth = 1.5;
    ctx.beginPath();
    ctx.moveTo(w * (0.2 + i * 0.2), h * 0.2);
    ctx.lineTo(w * (0.2 + i * 0.2), h * 0.28);
    ctx.stroke();
  });

  // Nucleus NF-κB activation
  ctx.fillStyle = '#9400D3';
  ctx.beginPath();
  ctx.arc(w * 0.5, h * 0.62, h * 0.12, 0, Math.PI * 2);
  ctx.fill();
  ctx.fillStyle = '#fff';
  ctx.font = `bold ${Math.floor(w * 0.024)}px sans-serif`;
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText('NF-κB', w * 0.5, h * 0.62);
}

static drawInnateInflammation(ctx, w, h) {
  // Reuse conceptual inflammation view
  // Tissue damage signal
  ctx.fillStyle = 'rgba(255,69,0,0.18)';
  ctx.beginPath();
  ctx.arc(w * 0.5, h * 0.5, h * 0.4, 0, Math.PI * 2);
  ctx.fill();

  ctx.fillStyle = '#FF4500';
  ctx.beginPath();
  ctx.arc(w * 0.5, h * 0.5, 18, 0, Math.PI * 2);
  ctx.fill();
  ctx.fillStyle = '#fff';
  ctx.font = `bold ${Math.floor(w * 0.024)}px sans-serif`;
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText('Damage', w * 0.5, h * 0.5);

  // Mediators
  const mediators = [
    { label: 'Histamine', a: 0.0 },
    { label: 'IL-1β', a: 1.05 },
    { label: 'TNF-α', a: 2.1 },
    { label: 'IL-6', a: 3.14 },
    { label: 'Prostaglandin', a: 4.2 },
    { label: 'Bradykinin', a: 5.25 },
  ];
  mediators.forEach(({ label, a }) => {
    const mx = w * 0.5 + Math.cos(a) * h * 0.3;
    const my = h * 0.5 + Math.sin(a) * h * 0.3;
    ctx.strokeStyle = '#FF6347';
    ctx.lineWidth = 1.5;
    ctx.setLineDash([3, 3]);
    ctx.beginPath();
    ctx.moveTo(w * 0.5 + Math.cos(a) * 22, h * 0.5 + Math.sin(a) * 22);
    ctx.lineTo(mx, my);
    ctx.stroke();
    ctx.setLineDash([]);
    ctx.fillStyle = '#FF8C00';
    ctx.beginPath();
    ctx.arc(mx, my, 16, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = '#fff';
    ctx.font = `${Math.floor(w * 0.02)}px sans-serif`;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(label, mx, my);
  });
}

static drawInnatePhagocytosis(ctx, w, h) {
  // Same as standalone phagocytosis core — see drawPhagocytosis
  this.drawPhagocytosisComplete(ctx, w, h);
}

// ─────────────────────────────────────────────────────────────────────────────

static drawAdaptiveImmuneResponse(ctx, x, y, width, height, stage) {
  ctx.save();
  ctx.translate(x, y);
  switch (stage) {
    case 'antigen_presentation':
      this.drawAdaptiveAntigenPresentation(ctx, width, height);
      break;
    case 'clonal_selection':
      this.drawAdaptiveClonalSelection(ctx, width, height);
      break;
    case 'effector':
      this.drawAdaptiveEffector(ctx, width, height);
      break;
    case 'memory':
      this.drawAdaptiveMemory(ctx, width, height);
      break;
    case 'complete':
    default:
      this.drawAdaptiveComplete(ctx, width, height);
      break;
  }
  ctx.restore();
}

static drawAdaptiveComplete(ctx, w, h) {
  // APC
  ctx.fillStyle = '#DA70D6';
  ctx.beginPath();
  ctx.arc(w * 0.15, h * 0.5, 22, 0, Math.PI * 2);
  ctx.fill();
  ctx.fillStyle = '#fff';
  ctx.font = `bold ${Math.floor(w * 0.024)}px sans-serif`;
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText('APC', w * 0.15, h * 0.5);

  // Helper T
  ctx.strokeStyle = '#aaa';
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.moveTo(w * 0.24, h * 0.5);
  ctx.lineTo(w * 0.34, h * 0.32);
  ctx.stroke();
  ctx.fillStyle = '#FF6B35';
  ctx.beginPath();
  ctx.arc(w * 0.38, h * 0.3, 20, 0, Math.PI * 2);
  ctx.fill();
  ctx.fillStyle = '#fff';
  ctx.font = `bold ${Math.floor(w * 0.022)}px sans-serif`;
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText('Th', w * 0.38, h * 0.3);

  // Cytotoxic T
  ctx.beginPath();
  ctx.moveTo(w * 0.24, h * 0.5);
  ctx.lineTo(w * 0.34, h * 0.68);
  ctx.stroke();
  ctx.fillStyle = '#DC143C';
  ctx.beginPath();
  ctx.arc(w * 0.38, h * 0.7, 20, 0, Math.PI * 2);
  ctx.fill();
  ctx.fillStyle = '#fff';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText('CTL', w * 0.38, h * 0.7);

  // B cell
  ctx.strokeStyle = '#aaa';
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.moveTo(w * 0.38, h * 0.3);
  ctx.lineTo(w * 0.55, h * 0.2);
  ctx.stroke();
  ctx.fillStyle = '#1E90FF';
  ctx.beginPath();
  ctx.arc(w * 0.6, h * 0.18, 20, 0, Math.PI * 2);
  ctx.fill();
  ctx.fillStyle = '#fff';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText('B', w * 0.6, h * 0.18);

  // Plasma cell → antibodies
  ctx.beginPath();
  ctx.moveTo(w * 0.67, h * 0.18);
  ctx.lineTo(w * 0.77, h * 0.18);
  ctx.stroke();
  ctx.fillStyle = '#4682B4';
  ctx.beginPath();
  ctx.arc(w * 0.82, h * 0.18, 18, 0, Math.PI * 2);
  ctx.fill();
  ctx.fillStyle = '#fff';
  ctx.font = `bold ${Math.floor(w * 0.02)}px sans-serif`;
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText('Plasma', w * 0.82, h * 0.18);

  // Memory branch
  ctx.strokeStyle = '#aaa';
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.moveTo(w * 0.38, h * 0.3);
  ctx.lineTo(w * 0.55, h * 0.5);
  ctx.stroke();
  ctx.fillStyle = '#20B2AA';
  ctx.beginPath();
  ctx.arc(w * 0.6, h * 0.5, 18, 0, Math.PI * 2);
  ctx.fill();
  ctx.fillStyle = '#fff';
  ctx.font = `bold ${Math.floor(w * 0.02)}px sans-serif`;
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText('Memory', w * 0.6, h * 0.5);

  // Target cell killed
  ctx.strokeStyle = '#aaa';
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.moveTo(w * 0.47, h * 0.7);
  ctx.lineTo(w * 0.57, h * 0.75);
  ctx.stroke();
  ctx.fillStyle = 'rgba(139,0,0,0.5)';
  ctx.beginPath();
  ctx.arc(w * 0.63, h * 0.77, 16, 0, Math.PI * 2);
  ctx.fill();
  ctx.strokeStyle = '#FF0000';
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.moveTo(w * 0.57, h * 0.71);
  ctx.lineTo(w * 0.69, h * 0.83);
  ctx.moveTo(w * 0.69, h * 0.71);
  ctx.lineTo(w * 0.57, h * 0.83);
  ctx.stroke();
}

static drawAdaptiveAntigenPresentation(ctx, w, h) {
  this.drawAntigenProcessingComplete(ctx, w, h);
}

static drawAdaptiveClonalSelection(ctx, w, h) {
  this.drawClonalSelectionComplete(ctx, w, h);
}

static drawAdaptiveEffector(ctx, w, h) {
  this.drawEffectorStage(ctx, w, h, 'adaptive');
}

static drawAdaptiveMemory(ctx, w, h) {
  this.drawMemoryStage(ctx, w, h, 'adaptive');
}

// ─────────────────────────────────────────────────────────────────────────────

static drawHumoralImmunity(ctx, x, y, width, height, stage) {
  ctx.save();
  ctx.translate(x, y);
  switch (stage) {
    case 'bcell_activation':
      this.drawHumoralBCellActivation(ctx, width, height);
      break;
    case 'antibody_production':
      this.drawHumoralAntibodyProduction(ctx, width, height);
      break;
    case 'antibody_function':
      this.drawHumoralAntibodyFunction(ctx, width, height);
      break;
    case 'complete':
    default:
      this.drawHumoralComplete(ctx, width, height);
      break;
  }
  ctx.restore();
}

static drawHumoralComplete(ctx, w, h) {
  // Antigen → B cell
  ctx.fillStyle = '#8B0000';
  ctx.beginPath();
  ctx.arc(w * 0.08, h * 0.5, 14, 0, Math.PI * 2);
  ctx.fill();

  ctx.strokeStyle = '#666';
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.moveTo(w * 0.12, h * 0.5);
  ctx.lineTo(w * 0.22, h * 0.5);
  ctx.stroke();

  // B cell
  ctx.fillStyle = '#1E90FF';
  ctx.beginPath();
  ctx.arc(w * 0.28, h * 0.5, 20, 0, Math.PI * 2);
  ctx.fill();
  ctx.fillStyle = '#fff';
  ctx.font = `bold ${Math.floor(w * 0.025)}px sans-serif`;
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText('B', w * 0.28, h * 0.5);

  // Helper T signal
  ctx.fillStyle = '#FF6B35';
  ctx.beginPath();
  ctx.arc(w * 0.28, h * 0.22, 16, 0, Math.PI * 2);
  ctx.fill();
  ctx.strokeStyle = '#FF6B35';
  ctx.lineWidth = 1.5;
  ctx.setLineDash([3, 3]);
  ctx.beginPath();
  ctx.moveTo(w * 0.28, h * 0.3);
  ctx.lineTo(w * 0.28, h * 0.38);
  ctx.stroke();
  ctx.setLineDash([]);
  ctx.fillStyle = '#fff';
  ctx.font = `bold ${Math.floor(w * 0.02)}px sans-serif`;
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText('Th', w * 0.28, h * 0.22);

  // → Plasma cell
  ctx.strokeStyle = '#666';
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.moveTo(w * 0.37, h * 0.5);
  ctx.lineTo(w * 0.47, h * 0.35);
  ctx.stroke();
  ctx.fillStyle = '#4682B4';
  ctx.beginPath();
  ctx.arc(w * 0.52, h * 0.3, 18, 0, Math.PI * 2);
  ctx.fill();
  ctx.fillStyle = '#fff';
  ctx.font = `bold ${Math.floor(w * 0.02)}px sans-serif`;
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText('Plasma', w * 0.52, h * 0.3);

  // → Memory B
  ctx.strokeStyle = '#666';
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.moveTo(w * 0.37, h * 0.5);
  ctx.lineTo(w * 0.47, h * 0.65);
  ctx.stroke();
  ctx.fillStyle = '#20B2AA';
  ctx.beginPath();
  ctx.arc(w * 0.52, h * 0.7, 16, 0, Math.PI * 2);
  ctx.fill();
  ctx.fillStyle = '#fff';
  ctx.font = `bold ${Math.floor(w * 0.019)}px sans-serif`;
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText('Mem B', w * 0.52, h * 0.7);

  // Antibody isotypes
  const isotypes = ['IgM', 'IgG', 'IgA', 'IgE'];
  const isoColors = ['#6495ED', '#4169E1', '#7B68EE', '#9370DB'];
  isotypes.forEach((iso, i) => {
    const ax = w * (0.65 + (i % 2) * 0.16), ay = h * (0.25 + Math.floor(i / 2) * 0.3);
    ctx.strokeStyle = '#666';
    ctx.lineWidth = 1.5;
    ctx.beginPath();
    ctx.moveTo(w * 0.58, h * 0.3);
    ctx.lineTo(ax - 15, ay);
    ctx.stroke();
    ctx.fillStyle = isoColors[i];
    ctx.beginPath();
    ctx.arc(ax, ay, 16, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = '#fff';
    ctx.font = `bold ${Math.floor(w * 0.02)}px sans-serif`;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(iso, ax, ay);
  });

  // Effector labels
  ctx.fillStyle = '#333';
  ctx.font = `${Math.floor(w * 0.018)}px sans-serif`;
  ctx.textAlign = 'left';
  ctx.textBaseline = 'middle';
  ctx.fillText('Neutralize / Opsonize / Activate complement', w * 0.08, h * 0.9);
}

static drawHumoralBCellActivation(ctx, w, h) {
  const cx = w * 0.5, cy = h * 0.5;
  // B cell
  ctx.fillStyle = '#1E90FF';
  ctx.beginPath();
  ctx.arc(cx, cy, 35, 0, Math.PI * 2);
  ctx.fill();
  ctx.strokeStyle = '#00008B';
  ctx.lineWidth = 2;
  ctx.stroke();

  // BCR binding antigen
  ctx.fillStyle = '#8B0000';
  ctx.beginPath();
  ctx.arc(cx - 55, cy - 20, 14, 0, Math.PI * 2);
  ctx.fill();
  ctx.strokeStyle = '#FFD700';
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.moveTo(cx - 43, cy - 18);
  ctx.lineTo(cx - 35, cy - 15);
  ctx.stroke();

  // CD40-CD40L interaction with Th
  ctx.fillStyle = '#FF6B35';
  ctx.beginPath();
  ctx.arc(cx + 65, cy - 30, 24, 0, Math.PI * 2);
  ctx.fill();
  ctx.strokeStyle = '#FF6B35';
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.moveTo(cx + 35, cy - 15);
  ctx.lineTo(cx + 44, cy - 22);
  ctx.stroke();
  ctx.fillStyle = '#fff';
  ctx.font = `bold ${Math.floor(w * 0.024)}px sans-serif`;
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText('Th', cx + 65, cy - 30);

  // Cytokine arrows
  ctx.strokeStyle = '#FFD700';
  ctx.lineWidth = 1.5;
  ctx.setLineDash([3, 3]);
  [[-10, 50], [10, 55], [30, 52]].forEach(([dx, dy]) => {
    ctx.beginPath();
    ctx.moveTo(cx + 45, cy);
    ctx.lineTo(cx + dx, cy + dy);
    ctx.stroke();
  });
  ctx.setLineDash([]);

  // Activation signal in nucleus
  ctx.fillStyle = '#00008B';
  ctx.beginPath();
  ctx.arc(cx, cy, 18, 0, Math.PI * 2);
  ctx.fill();
  ctx.fillStyle = '#fff';
  ctx.font = `bold ${Math.floor(w * 0.022)}px sans-serif`;
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText('Activation', cx, cy + 60);
}

static drawHumoralAntibodyProduction(ctx, w, h) {
  // Plasma cell secreting antibodies
  ctx.fillStyle = '#4682B4';
  ctx.beginPath();
  ctx.ellipse(w * 0.25, h * 0.5, 30, 40, 0, 0, Math.PI * 2);
  ctx.fill();
  ctx.strokeStyle = '#00008B';
  ctx.lineWidth = 2;
  ctx.stroke();
  ctx.fillStyle = '#fff';
  ctx.font = `bold ${Math.floor(w * 0.024)}px sans-serif`;
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText('Plasma', w * 0.25, h * 0.5);

  // Antibody stream
  const yOffsets = [-0.3, -0.1, 0.1, 0.3];
  yOffsets.forEach((yo, i) => {
    const ax = w * (0.48 + i * 0.12), ay = h * (0.5 + yo);
    // Y shape
    ctx.strokeStyle = '#FFD700';
    ctx.lineWidth = 2.5;
    ctx.beginPath();
    ctx.moveTo(ax, ay + 12);
    ctx.lineTo(ax, ay + 2);
    ctx.lineTo(ax - 8, ay - 8);
    ctx.moveTo(ax, ay + 2);
    ctx.lineTo(ax + 8, ay - 8);
    ctx.stroke();
  });
  // Arrow
  ctx.strokeStyle = '#666';
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.moveTo(w * 0.33, h * 0.5);
  ctx.lineTo(w * 0.45, h * 0.5);
  ctx.stroke();
}

static drawHumoralAntibodyFunction(ctx, w, h) {
  const funcs = [
    { label: 'Neutralization', x: 0.2, y: 0.25, color: '#4169E1' },
    { label: 'Opsonization',   x: 0.5, y: 0.25, color: '#228B22' },
    { label: 'ADCC',           x: 0.8, y: 0.25, color: '#FF6347' },
    { label: 'Complement',     x: 0.2, y: 0.72, color: '#9370DB' },
    { label: 'Agglutination',  x: 0.5, y: 0.72, color: '#FF8C00' },
    { label: 'Precipitation',  x: 0.8, y: 0.72, color: '#20B2AA' },
  ];
  funcs.forEach(({ label, x, y, color }) => {
    ctx.fillStyle = color;
    ctx.beginPath();
    ctx.arc(w * x, h * y, 28, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = '#fff';
    ctx.font = `bold ${Math.floor(w * 0.022)}px sans-serif`;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(label, w * x, h * y);
  });

  // Central antibody
  ctx.strokeStyle = '#FFD700';
  ctx.lineWidth = 3;
  const cx = w * 0.5, cy = h * 0.5;
  ctx.beginPath();
  ctx.moveTo(cx, cy + 16);
  ctx.lineTo(cx, cy + 4);
  ctx.lineTo(cx - 10, cy - 8);
  ctx.moveTo(cx, cy + 4);
  ctx.lineTo(cx + 10, cy - 8);
  ctx.stroke();

  funcs.forEach(({ x, y }) => {
    ctx.strokeStyle = 'rgba(200,200,200,0.5)';
    ctx.lineWidth = 1.5;
    ctx.setLineDash([4, 3]);
    ctx.beginPath();
    ctx.moveTo(cx, cy);
    ctx.lineTo(w * x, h * y + 28);
    ctx.stroke();
    ctx.setLineDash([]);
  });
}

// ─────────────────────────────────────────────────────────────────────────────

static drawCellMediatedImmunity(ctx, x, y, width, height, stage) {
  ctx.save();
  ctx.translate(x, y);
  switch (stage) {
    case 'tc_activation':
      this.drawCMITcActivation(ctx, width, height);
      break;
    case 'killing':
      this.drawCMIKilling(ctx, width, height);
      break;
    case 'th1_response':
      this.drawCMITh1(ctx, width, height);
      break;
    case 'complete':
    default:
      this.drawCMIComplete(ctx, width, height);
      break;
  }
  ctx.restore();
}

static drawCMIComplete(ctx, w, h) {
  // APC presenting to Tc
  ctx.fillStyle = '#DA70D6';
  ctx.beginPath();
  ctx.arc(w * 0.15, h * 0.5, 20, 0, Math.PI * 2);
  ctx.fill();
  ctx.fillStyle = '#fff';
  ctx.font = `bold ${Math.floor(w * 0.024)}px sans-serif`;
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText('APC', w * 0.15, h * 0.5);

  ctx.strokeStyle = '#666';
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.moveTo(w * 0.24, h * 0.5);
  ctx.lineTo(w * 0.34, h * 0.5);
  ctx.stroke();

  // CTL
  ctx.fillStyle = '#DC143C';
  ctx.beginPath();
  ctx.arc(w * 0.42, h * 0.5, 22, 0, Math.PI * 2);
  ctx.fill();
  ctx.fillStyle = '#fff';
  ctx.font = `bold ${Math.floor(w * 0.024)}px sans-serif`;
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText('CTL', w * 0.42, h * 0.5);

  // Th1 helper
  ctx.fillStyle = '#FF6B35';
  ctx.beginPath();
  ctx.arc(w * 0.42, h * 0.22, 18, 0, Math.PI * 2);
  ctx.fill();
  ctx.fillStyle = '#fff';
  ctx.font = `bold ${Math.floor(w * 0.02)}px sans-serif`;
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText('Th1', w * 0.42, h * 0.22);
  ctx.strokeStyle = '#FF6B35';
  ctx.lineWidth = 1.5;
  ctx.setLineDash([3, 3]);
  ctx.beginPath();
  ctx.moveTo(w * 0.42, h * 0.3);
  ctx.lineTo(w * 0.42, h * 0.38);
  ctx.stroke();
  ctx.setLineDash([]);

  // Mechanisms
  const mechanisms = [
    { label: 'Perforin\npore', x: 0.63, y: 0.28, color: '#FF69B4' },
    { label: 'Granzyme\napoptosis', x: 0.63, y: 0.5, color: '#DC143C' },
    { label: 'Fas/FasL\ndeath', x: 0.63, y: 0.72, color: '#8B0000' },
  ];
  mechanisms.forEach(({ label, x, y, color }) => {
    ctx.strokeStyle = '#aaa';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(w * 0.53, h * 0.5);
    ctx.lineTo(w * x - 0.04 * w, h * y);
    ctx.stroke();
    ctx.fillStyle = color;
    ctx.beginPath();
    ctx.arc(w * x, h * y, 20, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = '#fff';
    ctx.font = `bold ${Math.floor(w * 0.02)}px sans-serif`;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    label.split('\n').forEach((line, li) => ctx.fillText(line, w * x, h * y + (li - 0.5) * 11));
  });

  // Target cell
  ctx.fillStyle = 'rgba(139,0,0,0.4)';
  ctx.beginPath();
  ctx.arc(w * 0.86, h * 0.5, 24, 0, Math.PI * 2);
  ctx.fill();
  ctx.strokeStyle = '#FF0000';
  ctx.lineWidth = 2.5;
  ctx.beginPath();
  ctx.moveTo(w * 0.78, h * 0.42);
  ctx.lineTo(w * 0.94, h * 0.58);
  ctx.moveTo(w * 0.94, h * 0.42);
  ctx.lineTo(w * 0.78, h * 0.58);
  ctx.stroke();
}

static drawCMITcActivation(ctx, w, h) {
  const cx = w * 0.5, cy = h * 0.5;
  // MHC-I on APC
  ctx.fillStyle = '#DA70D6';
  ctx.beginPath();
  ctx.arc(w * 0.22, cy, 28, 0, Math.PI * 2);
  ctx.fill();
  ctx.fillStyle = '#fff';
  ctx.font = `bold ${Math.floor(w * 0.022)}px sans-serif`;
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText('APC\nMHC-I', w * 0.22, cy);

  // TCR on CTL
  ctx.fillStyle = '#DC143C';
  ctx.beginPath();
  ctx.arc(w * 0.78, cy, 28, 0, Math.PI * 2);
  ctx.fill();
  ctx.fillStyle = '#fff';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText('CTL\nTCR', w * 0.78, cy);

  // Immunological synapse
  ctx.fillStyle = 'rgba(255,215,0,0.25)';
  ctx.fillRect(cx - 18, cy - 35, 36, 70);
  ctx.strokeStyle = '#FFD700';
  ctx.lineWidth = 2;
  ctx.strokeRect(cx - 18, cy - 35, 36, 70);
  ctx.fillStyle = '#B8860B';
  ctx.font = `${Math.floor(w * 0.02)}px sans-serif`;
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText('Synapse', cx, cy + 50);

  // Signal molecules
  ['CD8', 'CD3', 'IL-2R'].forEach((sig, i) => {
    ctx.fillStyle = '#FF8C00';
    ctx.beginPath();
    ctx.arc(cx, cy - 20 + i * 20, 8, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = '#fff';
    ctx.font = `${Math.floor(w * 0.018)}px sans-serif`;
    ctx.textAlign = 'left';
    ctx.textBaseline = 'middle';
    ctx.fillText(sig, cx + 12, cy - 20 + i * 20);
  });
}

static drawCMIKilling(ctx, w, h) {
  // CTL
  ctx.fillStyle = '#DC143C';
  ctx.beginPath();
  ctx.arc(w * 0.25, h * 0.5, 28, 0, Math.PI * 2);
  ctx.fill();
  ctx.fillStyle = '#fff';
  ctx.font = `bold ${Math.floor(w * 0.024)}px sans-serif`;
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText('CTL', w * 0.25, h * 0.5);

  // Granule exocytosis
  ctx.fillStyle = '#FF69B4';
  for (let i = 0; i < 5; i++) {
    const gx = w * (0.35 + i * 0.06), gy = h * (0.45 + (i % 2) * 0.1);
    ctx.beginPath();
    ctx.arc(gx, gy, 7, 0, Math.PI * 2);
    ctx.fill();
  }

  // Target infected cell
  ctx.fillStyle = 'rgba(139,0,0,0.55)';
  ctx.beginPath();
  ctx.arc(w * 0.75, h * 0.5, 32, 0, Math.PI * 2);
  ctx.fill();
  ctx.fillStyle = '#fff';
  ctx.font = `bold ${Math.floor(w * 0.022)}px sans-serif`;
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText('Infected\ncell', w * 0.75, h * 0.5);

  // Perforin pores on target
  ctx.strokeStyle = '#FF69B4';
  ctx.lineWidth = 2.5;
  for (let i = -2; i <= 2; i++) {
    ctx.beginPath();
    ctx.arc(w * 0.75 + i * 8, h * 0.5 - 30, 5, 0, Math.PI);
    ctx.stroke();
  }

  // Apoptosis markers
  ctx.strokeStyle = '#FF0000';
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.moveTo(w * 0.67, h * 0.42);
  ctx.lineTo(w * 0.83, h * 0.58);
  ctx.moveTo(w * 0.83, h * 0.42);
  ctx.lineTo(w * 0.67, h * 0.58);
  ctx.stroke();
}

static drawCMITh1(ctx, w, h) {
  // Th1 center
  ctx.fillStyle = '#FF6B35';
  ctx.beginPath();
  ctx.arc(w * 0.5, h * 0.4, 26, 0, Math.PI * 2);
  ctx.fill();
  ctx.fillStyle = '#fff';
  ctx.font = `bold ${Math.floor(w * 0.026)}px sans-serif`;
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText('Th1', w * 0.5, h * 0.4);

  // Cytokines produced
  const cytokines = [
    { label: 'IFN-γ', x: 0.2, y: 0.65, color: '#4169E1' },
    { label: 'TNF-β', x: 0.4, y: 0.72, color: '#DC143C' },
    { label: 'IL-2',  x: 0.6, y: 0.72, color: '#228B22' },
    { label: 'IL-12', x: 0.8, y: 0.65, color: '#9400D3' },
  ];
  cytokines.forEach(({ label, x, y, color }) => {
    ctx.strokeStyle = 'rgba(200,200,200,0.6)';
    ctx.lineWidth = 1.5;
    ctx.setLineDash([4, 3]);
    ctx.beginPath();
    ctx.moveTo(w * 0.5, h * 0.52);
    ctx.lineTo(w * x, h * y);
    ctx.stroke();
    ctx.setLineDash([]);
    ctx.fillStyle = color;
    ctx.beginPath();
    ctx.arc(w * x, h * y, 20, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = '#fff';
    ctx.font = `bold ${Math.floor(w * 0.022)}px sans-serif`;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(label, w * x, h * y);
  });

  // Macrophage activation
  ctx.fillStyle = '#CD853F';
  ctx.beginPath();
  ctx.arc(w * 0.5, h * 0.15, 20, 0, Math.PI * 2);
  ctx.fill();
  ctx.fillStyle = '#fff';
  ctx.font = `bold ${Math.floor(w * 0.02)}px sans-serif`;
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText('Mφ act.', w * 0.5, h * 0.15);
  ctx.strokeStyle = '#CD853F';
  ctx.lineWidth = 1.5;
  ctx.setLineDash([3, 3]);
  ctx.beginPath();
  ctx.moveTo(w * 0.5, h * 0.25);
  ctx.lineTo(w * 0.5, h * 0.33);
  ctx.stroke();
  ctx.setLineDash([]);
}

// ─────────────────────────────────────────────────────────────────────────────

static drawClottingCascade(ctx, x, y, width, height, stage) {
  ctx.save();
  ctx.translate(x, y);
  switch (stage) {
    case 'extrinsic':
      this.drawClottingExtrinsic(ctx, width, height);
      break;
    case 'intrinsic':
      this.drawClottingIntrinsic(ctx, width, height);
      break;
    case 'common':
      this.drawClottingCommon(ctx, width, height);
      break;
    case 'complete':
    default:
      this.drawClottingComplete(ctx, width, height);
      break;
  }
  ctx.restore();
}

static drawClottingComplete(ctx, w, h) {
  // Extrinsic (left)
  ctx.fillStyle = '#FF6347';
  ctx.beginPath();
  ctx.arc(w * 0.2, h * 0.1, 22, 0, Math.PI * 2);
  ctx.fill();
  ctx.fillStyle = '#fff';
  ctx.font = `bold ${Math.floor(w * 0.024)}px sans-serif`;
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText('TF/VIIa', w * 0.2, h * 0.1);

  // Intrinsic (right)
  ctx.fillStyle = '#4169E1';
  ctx.beginPath();
  ctx.arc(w * 0.8, h * 0.1, 22, 0, Math.PI * 2);
  ctx.fill();
  ctx.fillStyle = '#fff';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText('XII→XI\n→IX', w * 0.8, h * 0.1);

  // Converge at Xa
  ctx.strokeStyle = '#FF6347';
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.moveTo(w * 0.2, h * 0.18);
  ctx.lineTo(w * 0.5, h * 0.35);
  ctx.stroke();
  ctx.strokeStyle = '#4169E1';
  ctx.beginPath();
  ctx.moveTo(w * 0.8, h * 0.18);
  ctx.lineTo(w * 0.5, h * 0.35);
  ctx.stroke();

  // Common pathway steps
  const steps = [
    { label: 'Xa + Va\nProthrombinase', y: 0.38, color: '#228B22' },
    { label: 'Prothrombin\n→ Thrombin', y: 0.54, color: '#32CD32' },
    { label: 'Fibrinogen\n→ Fibrin', y: 0.7, color: '#DAA520' },
    { label: 'Fibrin Clot\n(XIIIa crosslink)', y: 0.86, color: '#C4A265' },
  ];
  steps.forEach(({ label, y, color }, i) => {
    if (i > 0) {
      ctx.strokeStyle = '#555';
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(w * 0.5, h * (y - 0.1));
      ctx.lineTo(w * 0.5, h * (y - 0.02));
      ctx.stroke();
    }
    ctx.fillStyle = color;
    ctx.beginPath();
    ctx.arc(w * 0.5, h * y, 24, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = '#fff';
    ctx.font = `bold ${Math.floor(w * 0.02)}px sans-serif`;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    label.split('\n').forEach((line, li) => ctx.fillText(line, w * 0.5, h * y + (li - 0.5) * 11));
  });

  // Platelet plug (side note)
  ctx.fillStyle = 'rgba(255,165,0,0.25)';
  ctx.beginPath();
  ctx.arc(w * 0.85, h * 0.6, 28, 0, Math.PI * 2);
  ctx.fill();
  ctx.strokeStyle = '#FF8C00';
  ctx.lineWidth = 1.5;
  ctx.setLineDash([4, 3]);
  ctx.beginPath();
  ctx.moveTo(w * 0.7, h * 0.6);
  ctx.lineTo(w * 0.74, h * 0.6);
  ctx.stroke();
  ctx.setLineDash([]);
  ctx.fillStyle = '#FF8C00';
  ctx.font = `bold ${Math.floor(w * 0.02)}px sans-serif`;
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText('Platelet\nPlug', w * 0.85, h * 0.6);
}

static drawClottingExtrinsic(ctx, w, h) {
  const steps = [
    { label: 'Vessel damage\nTF exposed', y: 0.1, color: '#B22222' },
    { label: 'TF + FVII\n→ TF/VIIa', y: 0.28, color: '#FF4500' },
    { label: 'FX → Xa\nFIX → IXa', y: 0.46, color: '#FF6347' },
    { label: 'Xa + Va\nProthrombinase', y: 0.64, color: '#228B22' },
    { label: 'Thrombin', y: 0.8, color: '#32CD32' },
  ];
  steps.forEach(({ label, y, color }, i) => {
    if (i > 0) {
      ctx.strokeStyle = '#aaa';
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(w * 0.5, h * (y - 0.11));
      ctx.lineTo(w * 0.5, h * (y - 0.02));
      ctx.stroke();
    }
    ctx.fillStyle = color;
    ctx.beginPath();
    ctx.arc(w * 0.5, h * y, 24, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = '#fff';
    ctx.font = `bold ${Math.floor(w * 0.022)}px sans-serif`;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    label.split('\n').forEach((line, li) => ctx.fillText(line, w * 0.5, h * y + (li - 0.5) * 11));
  });
}

static drawClottingIntrinsic(ctx, w, h) {
  const steps = [
    { label: 'FXII (Hageman)\nactivation', y: 0.1, color: '#4169E1' },
    { label: 'FXIa', y: 0.26, color: '#5A80C0' },
    { label: 'FIXa + FVIIIa\nTenase complex', y: 0.44, color: '#6495ED' },
    { label: 'FX → Xa', y: 0.62, color: '#228B22' },
    { label: 'Thrombin', y: 0.8, color: '#32CD32' },
  ];
  steps.forEach(({ label, y, color }, i) => {
    if (i > 0) {
      ctx.strokeStyle = '#aaa';
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(w * 0.5, h * (y - 0.1));
      ctx.lineTo(w * 0.5, h * (y - 0.02));
      ctx.stroke();
    }
    ctx.fillStyle = color;
    ctx.beginPath();
    ctx.arc(w * 0.5, h * y, 24, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = '#fff';
    ctx.font = `bold ${Math.floor(w * 0.022)}px sans-serif`;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    label.split('\n').forEach((line, li) => ctx.fillText(line, w * 0.5, h * y + (li - 0.5) * 11));
  });
}

static drawClottingCommon(ctx, w, h) {
  const steps = [
    { label: 'Xa + Va\nProthrombinase', y: 0.15, color: '#228B22' },
    { label: 'Prothrombin\n→ Thrombin', y: 0.38, color: '#32CD32' },
    { label: 'Fibrinogen\n→ Fibrin monomers', y: 0.58, color: '#DAA520' },
    { label: 'FXIII crosslinks\nFibrin clot', y: 0.8, color: '#C4A265' },
  ];
  steps.forEach(({ label, y, color }, i) => {
    if (i > 0) {
      ctx.strokeStyle = '#aaa';
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(w * 0.5, h * (y - 0.13));
      ctx.lineTo(w * 0.5, h * (y - 0.02));
      ctx.stroke();
    }
    ctx.fillStyle = color;
    ctx.beginPath();
    ctx.arc(w * 0.5, h * y, 26, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = '#fff';
    ctx.font = `bold ${Math.floor(w * 0.022)}px sans-serif`;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    label.split('\n').forEach((line, li) => ctx.fillText(line, w * 0.5, h * y + (li - 0.5) * 11));
  });
}

// ─────────────────────────────────────────────────────────────────────────────

static drawPhagocytosis(ctx, x, y, width, height, stage) {
  ctx.save();
  ctx.translate(x, y);
  switch (stage) {
    case 'recognition':
      this.drawPhagocytosisRecognition(ctx, width, height);
      break;
    case 'engulfment':
      this.drawPhagocytosisEngulfment(ctx, width, height);
      break;
    case 'phagosome':
      this.drawPhagocytosisPhagosome(ctx, width, height);
      break;
    case 'digestion':
      this.drawPhagocytosisDigestion(ctx, width, height);
      break;
    case 'complete':
    default:
      this.drawPhagocytosisComplete(ctx, width, height);
      break;
  }
  ctx.restore();
}

static drawPhagocytosisComplete(ctx, w, h) {
  const stages = [
    { label: '1. Recognition\n& Binding', x: 0.15, y: 0.3, color: '#FF8C00' },
    { label: '2. Pseudopod\nExtension', x: 0.35, y: 0.3, color: '#FF6347' },
    { label: '3. Phagosome\nFormation', x: 0.55, y: 0.3, color: '#DC143C' },
    { label: '4. Phagolysosome\nFusion', x: 0.75, y: 0.3, color: '#8B0000' },
    { label: '5. Digestion &\nExocytosis', x: 0.88, y: 0.7, color: '#CD853F' },
  ];
  stages.forEach(({ label, x, y, color }, i) => {
    if (i > 0 && i < stages.length - 1) {
      ctx.strokeStyle = '#aaa';
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(w * (stages[i-1].x + 0.07), h * 0.3);
      ctx.lineTo(w * (x - 0.07), h * 0.3);
      ctx.stroke();
    }
    ctx.fillStyle = color;
    ctx.beginPath();
    ctx.arc(w * x, h * y, 24, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = '#fff';
    ctx.font = `bold ${Math.floor(w * 0.02)}px sans-serif`;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    label.split('\n').forEach((line, li) => ctx.fillText(line, w * x, h * y + (li - 0.5) * 10));
  });

  // Arrow stage 4 → 5
  ctx.strokeStyle = '#aaa';
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.moveTo(w * 0.82, h * 0.38);
  ctx.bezierCurveTo(w * 0.95, h * 0.5, w * 0.95, h * 0.6, w * 0.88, h * 0.62);
  ctx.stroke();

  // Macrophage illustration at bottom center
  ctx.fillStyle = '#CD853F';
  ctx.beginPath();
  const points = 10;
  for (let i = 0; i < points; i++) {
    const a = (i / points) * Math.PI * 2;
    const r = h * 0.22 * (0.8 + 0.25 * Math.sin(i * 2.3));
    const px = w * 0.38 + Math.cos(a) * r;
    const py = h * 0.72 + Math.sin(a) * r;
    i === 0 ? ctx.moveTo(px, py) : ctx.lineTo(px, py);
  }
  ctx.closePath();
  ctx.fill();
  ctx.strokeStyle = '#8B4513';
  ctx.lineWidth = 2;
  ctx.stroke();

  // Pathogen inside
  ctx.fillStyle = '#8B0000';
  ctx.beginPath();
  ctx.arc(w * 0.38, h * 0.72, 14, 0, Math.PI * 2);
  ctx.fill();

  // Phagosome ring
  ctx.strokeStyle = '#FF6347';
  ctx.lineWidth = 2;
  ctx.setLineDash([4, 3]);
  ctx.beginPath();
  ctx.arc(w * 0.38, h * 0.72, 20, 0, Math.PI * 2);
  ctx.stroke();
  ctx.setLineDash([]);
}

static drawPhagocytosisRecognition(ctx, w, h) {
  const cx = w * 0.5, cy = h * 0.5;
  // Macrophage
  ctx.fillStyle = '#CD853F';
  ctx.beginPath();
  ctx.arc(cx, cy, h * 0.28, 0, Math.PI * 2);
  ctx.fill();
  ctx.strokeStyle = '#8B4513';
  ctx.lineWidth = 2;
  ctx.stroke();

  // PRR receptors on surface
  const receptors = ['FcR', 'CR1', 'MR', 'TLR'];
  receptors.forEach((r, i) => {
    const a = (i / receptors.length) * Math.PI - Math.PI / 2;
    const rx = cx + Math.cos(a) * h * 0.28, ry = cy + Math.sin(a) * h * 0.28;
    ctx.fillStyle = '#FF8C00';
    ctx.beginPath();
    ctx.arc(rx, ry, 12, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = '#fff';
    ctx.font = `bold ${Math.floor(w * 0.02)}px sans-serif`;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(r, rx, ry);
  });

  // Pathogen with opsonins
  ctx.fillStyle = '#8B0000';
  ctx.beginPath();
  ctx.arc(cx, cy - h * 0.42, 16, 0, Math.PI * 2);
  ctx.fill();
  // IgG opsonin
  ctx.strokeStyle = '#FFD700';
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.moveTo(cx, cy - h * 0.35);
  ctx.lineTo(cx, cy - h * 0.3);
  ctx.lineTo(cx - 8, cy - h * 0.23);
  ctx.moveTo(cx, cy - h * 0.3);
  ctx.lineTo(cx + 8, cy - h * 0.23);
  ctx.stroke();
}

static drawPhagocytosisEngulfment(ctx, w, h) {
  const cx = w * 0.5, cy = h * 0.55;
  // Cell body open
  ctx.fillStyle = '#CD853F';
  ctx.beginPath();
  ctx.arc(cx, cy, h * 0.28, 0.35, Math.PI * 2 - 0.35);
  ctx.fill();
  ctx.strokeStyle = '#8B4513';
  ctx.lineWidth = 2;
  ctx.stroke();

  // Pseudopod arms wrapping
  ctx.strokeStyle = '#CD853F';
  ctx.lineWidth = 14;
  ctx.lineCap = 'round';
  ctx.beginPath();
  ctx.moveTo(cx - h * 0.2, cy - h * 0.22);
  ctx.quadraticCurveTo(cx - h * 0.32, cy - h * 0.42, cx - h * 0.1, cy - h * 0.47);
  ctx.stroke();
  ctx.beginPath();
  ctx.moveTo(cx + h * 0.2, cy - h * 0.22);
  ctx.quadraticCurveTo(cx + h * 0.32, cy - h * 0.42, cx + h * 0.1, cy - h * 0.47);
  ctx.stroke();

  // Pathogen
  ctx.fillStyle = '#8B0000';
  ctx.beginPath();
  ctx.arc(cx, cy - h * 0.38, 16, 0, Math.PI * 2);
  ctx.fill();
}

static drawPhagocytosisPhagosome(ctx, w, h) {
  const cx = w * 0.5, cy = h * 0.5;
  // Cell body
  ctx.fillStyle = '#CD853F';
  ctx.beginPath();
  ctx.arc(cx, cy, h * 0.35, 0, Math.PI * 2);
  ctx.fill();
  ctx.strokeStyle = '#8B4513';
  ctx.lineWidth = 2;
  ctx.stroke();

  // Phagosome
  ctx.fillStyle = 'rgba(255,99,71,0.35)';
  ctx.beginPath();
  ctx.arc(cx, cy - h * 0.08, h * 0.14, 0, Math.PI * 2);
  ctx.fill();
  ctx.strokeStyle = '#FF6347';
  ctx.lineWidth = 2;
  ctx.stroke();

  // Pathogen inside phagosome
  ctx.fillStyle = '#8B0000';
  ctx.beginPath();
  ctx.arc(cx, cy - h * 0.08, 10, 0, Math.PI * 2);
  ctx.fill();

  // Lysosome
  ctx.fillStyle = '#FF4500';
  ctx.beginPath();
  ctx.arc(cx + h * 0.18, cy + h * 0.08, 18, 0, Math.PI * 2);
  ctx.fill();
  ctx.fillStyle = '#fff';
  ctx.font = `bold ${Math.floor(w * 0.022)}px sans-serif`;
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText('Lyso', cx + h * 0.18, cy + h * 0.08);

  // Arrow lysosome → phagosome
  ctx.strokeStyle = '#FF4500';
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.moveTo(cx + h * 0.1, cy + h * 0.02);
  ctx.lineTo(cx + h * 0.06, cy - h * 0.04);
  ctx.stroke();
}

static drawPhagocytosisDigestion(ctx, w, h) {
  const cx = w * 0.5, cy = h * 0.5;
  // Cell
  ctx.fillStyle = '#CD853F';
  ctx.beginPath();
  ctx.arc(cx, cy, h * 0.35, 0, Math.PI * 2);
  ctx.fill();
  ctx.strokeStyle = '#8B4513';
  ctx.lineWidth = 2;
  ctx.stroke();

  // Phagolysosome (merged)
  ctx.fillStyle = 'rgba(139,0,0,0.5)';
  ctx.beginPath();
  ctx.arc(cx, cy, h * 0.18, 0, Math.PI * 2);
  ctx.fill();
  ctx.strokeStyle = '#8B0000';
  ctx.lineWidth = 2;
  ctx.stroke();

  // Degraded contents (dots)
  ctx.fillStyle = '#FF6347';
  for (let i = 0; i < 8; i++) {
    const a = (i / 8) * Math.PI * 2;
    ctx.beginPath();
    ctx.arc(cx + Math.cos(a) * h * 0.1, cy + Math.sin(a) * h * 0.1, 5, 0, Math.PI * 2);
    ctx.fill();
  }

  // Exocytosis arrow
  ctx.strokeStyle = '#aaa';
  ctx.lineWidth = 2.5;
  ctx.beginPath();
  ctx.moveTo(cx, cy - h * 0.35);
  ctx.lineTo(cx, cy - h * 0.45);
  ctx.stroke();
  ctx.fillStyle = '#aaa';
  ctx.beginPath();
  ctx.moveTo(cx, cy - h * 0.45);
  ctx.lineTo(cx - 7, cy - h * 0.39);
  ctx.lineTo(cx + 7, cy - h * 0.39);
  ctx.closePath();
  ctx.fill();

  ctx.fillStyle = '#555';
  ctx.font = `${Math.floor(w * 0.022)}px sans-serif`;
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText('Exocytosis of debris', cx, cy - h * 0.5);
}

// ─────────────────────────────────────────────────────────────────────────────

static drawApoptosis(ctx, x, y, width, height, stage) {
  ctx.save();
  ctx.translate(x, y);
  switch (stage) {
    case 'intrinsic':
      this.drawApoptosisIntrinsic(ctx, width, height);
      break;
    case 'extrinsic':
      this.drawApoptosisExtrinsic(ctx, width, height);
      break;
    case 'execution':
      this.drawApoptosisExecution(ctx, width, height);
      break;
    case 'complete':
    default:
      this.drawApoptosisComplete(ctx, width, height);
      break;
  }
  ctx.restore();
}

static drawApoptosisComplete(ctx, w, h) {
  // Two pathway triggers
  ctx.fillStyle = '#4169E1';
  ctx.beginPath();
  ctx.arc(w * 0.22, h * 0.12, 22, 0, Math.PI * 2);
  ctx.fill();
  ctx.fillStyle = '#fff';
  ctx.font = `bold ${Math.floor(w * 0.024)}px sans-serif`;
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText('Intrinsic\n(Mito)', w * 0.22, h * 0.12);

  ctx.fillStyle = '#DC143C';
  ctx.beginPath();
  ctx.arc(w * 0.78, h * 0.12, 22, 0, Math.PI * 2);
  ctx.fill();
  ctx.fillStyle = '#fff';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText('Extrinsic\n(FasL)', w * 0.78, h * 0.12);

  // Converge at caspase cascade
  ctx.strokeStyle = '#555';
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.moveTo(w * 0.22, h * 0.2);
  ctx.lineTo(w * 0.5, h * 0.35);
  ctx.stroke();
  ctx.beginPath();
  ctx.moveTo(w * 0.78, h * 0.2);
  ctx.lineTo(w * 0.5, h * 0.35);
  ctx.stroke();

  // Caspase cascade
  const caspaseSteps = [
    { label: 'Caspase-9/-8\n(Initiator)', y: 0.38, color: '#9400D3' },
    { label: 'Caspase-3/-7\n(Executioner)', y: 0.56, color: '#7B00CC' },
  ];
  caspaseSteps.forEach(({ label, y, color }, i) => {
    if (i > 0) {
      ctx.strokeStyle = '#555';
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(w * 0.5, h * (y - 0.1));
      ctx.lineTo(w * 0.5, h * (y - 0.01));
      ctx.stroke();
    }
    ctx.fillStyle = color;
    ctx.beginPath();
    ctx.arc(w * 0.5, h * y, 26, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = '#fff';
    ctx.font = `bold ${Math.floor(w * 0.02)}px sans-serif`;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    label.split('\n').forEach((line, li) => ctx.fillText(line, w * 0.5, h * y + (li - 0.5) * 11));
  });

  // Outcomes
  const outcomes = [
    { label: 'DNA\nFragmentation', x: 0.2, y: 0.78, color: '#8B008B' },
    { label: 'Membrane\nBlebbing', x: 0.5, y: 0.82, color: '#9932CC' },
    { label: 'Apoptotic\nBodies', x: 0.8, y: 0.78, color: '#BA55D3' },
  ];
  outcomes.forEach(({ label, x, y, color }) => {
    ctx.strokeStyle = '#aaa';
    ctx.lineWidth = 1.5;
    ctx.setLineDash([3, 3]);
    ctx.beginPath();
    ctx.moveTo(w * 0.5, h * 0.68);
    ctx.lineTo(w * x, h * y - 0.03 * h);
    ctx.stroke();
    ctx.setLineDash([]);
    ctx.fillStyle = color;
    ctx.beginPath();
    ctx.arc(w * x, h * y, 20, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = '#fff';
    ctx.font = `bold ${Math.floor(w * 0.019)}px sans-serif`;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    label.split('\n').forEach((line, li) => ctx.fillText(line, w * x, h * y + (li - 0.5) * 10));
  });
}

static drawApoptosisIntrinsic(ctx, w, h) {
  const steps = [
    { label: 'DNA damage /\nStress signal', y: 0.1, color: '#4169E1' },
    { label: 'p53 activation', y: 0.27, color: '#5A80C0' },
    { label: 'Bax/Bad\n(pro-apoptotic)', y: 0.44, color: '#7B00CC' },
    { label: 'Cytochrome c\nrelease (Mito)', y: 0.61, color: '#9400D3' },
    { label: 'Apoptosome\nCaspase-9', y: 0.78, color: '#BA55D3' },
  ];
  steps.forEach(({ label, y, color }, i) => {
    if (i > 0) {
      ctx.strokeStyle = '#aaa';
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(w * 0.5, h * (y - 0.1));
      ctx.lineTo(w * 0.5, h * (y - 0.01));
      ctx.stroke();
    }
    ctx.fillStyle = color;
    ctx.beginPath();
    ctx.arc(w * 0.5, h * y, 24, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = '#fff';
    ctx.font = `bold ${Math.floor(w * 0.02)}px sans-serif`;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    label.split('\n').forEach((line, li) => ctx.fillText(line, w * 0.5, h * y + (li - 0.5) * 11));
  });
}

static drawApoptosisExtrinsic(ctx, w, h) {
  const steps = [
    { label: 'FasL / TNF-α\nDeath ligand', y: 0.1, color: '#DC143C' },
    { label: 'Death receptor\n(Fas/TNFR)', y: 0.28, color: '#FF4500' },
    { label: 'DISC formation\nFADD recruit', y: 0.46, color: '#FF6347' },
    { label: 'Caspase-8\nactivation', y: 0.64, color: '#9400D3' },
    { label: 'Caspase-3\n(Execution)', y: 0.82, color: '#BA55D3' },
  ];
  steps.forEach(({ label, y, color }, i) => {
    if (i > 0) {
      ctx.strokeStyle = '#aaa';
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(w * 0.5, h * (y - 0.1));
      ctx.lineTo(w * 0.5, h * (y - 0.01));
      ctx.stroke();
    }
    ctx.fillStyle = color;
    ctx.beginPath();
    ctx.arc(w * 0.5, h * y, 24, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = '#fff';
    ctx.font = `bold ${Math.floor(w * 0.02)}px sans-serif`;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    label.split('\n').forEach((line, li) => ctx.fillText(line, w * 0.5, h * y + (li - 0.5) * 11));
  });
}

static drawApoptosisExecution(ctx, w, h) {
  const cx = w * 0.5, cy = h * 0.5;
  // Cell fragmenting
  ctx.fillStyle = 'rgba(147,0,211,0.2)';
  ctx.strokeStyle = '#9400D3';
  ctx.lineWidth = 2;
  ctx.setLineDash([5, 4]);
  ctx.beginPath();
  ctx.arc(cx, cy, h * 0.35, 0, Math.PI * 2);
  ctx.fill();
  ctx.stroke();
  ctx.setLineDash([]);

  // Membrane blebs
  [[-0.3, -0.3], [0.35, -0.25], [-0.25, 0.32], [0.3, 0.3], [0.0, -0.42]].forEach(([dx, dy]) => {
    ctx.fillStyle = 'rgba(186,85,211,0.6)';
    ctx.strokeStyle = '#9932CC';
    ctx.lineWidth = 1.5;
    ctx.beginPath();
    ctx.arc(cx + dx * h * 0.35, cy + dy * h * 0.35, 14, 0, Math.PI * 2);
    ctx.fill();
    ctx.stroke();
  });

  // DNA ladder (fragmented)
  ctx.fillStyle = '#4169E1';
  ctx.beginPath();
  ctx.arc(cx, cy, 28, 0, Math.PI * 2);
  ctx.fill();
  ctx.strokeStyle = '#8B0000';
  ctx.lineWidth = 2;
  for (let i = -2; i <= 2; i++) {
    ctx.beginPath();
    ctx.moveTo(cx - 14, cy + i * 8);
    ctx.lineTo(cx + 14, cy + i * 8);
    ctx.stroke();
  }
  ctx.strokeStyle = '#8B0000';
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.moveTo(cx - 8, cy - 16);
  ctx.lineTo(cx - 8, cy + 16);
  ctx.moveTo(cx + 8, cy - 16);
  ctx.lineTo(cx + 8, cy + 16);
  ctx.stroke();

  // Macrophage clearance arrow
  ctx.fillStyle = '#CD853F';
  ctx.beginPath();
  ctx.arc(w * 0.88, h * 0.82, 18, 0, Math.PI * 2);
  ctx.fill();
  ctx.strokeStyle = '#CD853F';
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.moveTo(w * 0.75, h * 0.78);
  ctx.lineTo(w * 0.82, h * 0.8);
  ctx.stroke();
  ctx.fillStyle = '#fff';
  ctx.font = `${Math.floor(w * 0.02)}px sans-serif`;
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText('Mφ\nclearance', w * 0.88, h * 0.82);
}

// ─────────────────────────────────────────────────────────────────────────────

static drawMHCPresentation(ctx, x, y, width, height, stage) {
  ctx.save();
  ctx.translate(x, y);
  switch (stage) {
    case 'processing':
      this.drawMHCProcessingStage(ctx, width, height);
      break;
    case 'mhc1':
      this.drawMHCClass1(ctx, width, height);
      break;
    case 'mhc2':
      this.drawMHCClass2(ctx, width, height);
      break;
    case 'tcell_interaction':
      this.drawMHCTcellInteraction(ctx, width, height);
      break;
    case 'complete':
    default:
      this.drawMHCPresentationComplete(ctx, width, height);
      break;
  }
  ctx.restore();
}

static drawMHCPresentationComplete(ctx, w, h) {
  this.drawAntigenProcessingComplete(ctx, w, h);
}

static drawMHCProcessingStage(ctx, w, h) {
  // Pathogen entering
  ctx.fillStyle = '#8B0000';
  ctx.beginPath();
  ctx.arc(w * 0.1, h * 0.2, 14, 0, Math.PI * 2);
  ctx.fill();
  ctx.strokeStyle = '#555';
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.moveTo(w * 0.18, h * 0.22);
  ctx.lineTo(w * 0.28, h * 0.3);
  ctx.stroke();

  // Endosome/Proteasome
  ctx.fillStyle = '#FF6347';
  ctx.beginPath();
  ctx.arc(w * 0.38, h * 0.35, 26, 0, Math.PI * 2);
  ctx.fill();
  ctx.fillStyle = '#fff';
  ctx.font = `bold ${Math.floor(w * 0.022)}px sans-serif`;
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText('Protea-\nsome', w * 0.38, h * 0.35);

  // Peptide fragments
  ctx.strokeStyle = '#FF8C00';
  ctx.lineWidth = 3;
  [0.55, 0.6, 0.65].forEach(px => {
    ctx.beginPath();
    ctx.moveTo(w * px, h * 0.28);
    ctx.lineTo(w * px, h * 0.42);
    ctx.stroke();
  });

  // MHC loading
  ctx.fillStyle = '#4169E1';
  ctx.beginPath();
  ctx.arc(w * 0.6, h * 0.6, 26, 0, Math.PI * 2);
  ctx.fill();
  ctx.fillStyle = '#fff';
  ctx.font = `bold ${Math.floor(w * 0.022)}px sans-serif`;
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText('MHC\nloading', w * 0.6, h * 0.6);

  ctx.strokeStyle = '#555';
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.moveTo(w * 0.6, h * 0.5);
  ctx.lineTo(w * 0.6, h * 0.52);
  ctx.stroke();

  // Surface presentation
  ctx.fillStyle = '#228B22';
  ctx.beginPath();
  ctx.arc(w * 0.6, h * 0.85, 24, 0, Math.PI * 2);
  ctx.fill();
  ctx.fillStyle = '#fff';
  ctx.font = `bold ${Math.floor(w * 0.022)}px sans-serif`;
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText('MHC-\npeptide', w * 0.6, h * 0.85);
  ctx.strokeStyle = '#555';
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.moveTo(w * 0.6, h * 0.72);
  ctx.lineTo(w * 0.6, h * 0.74);
  ctx.stroke();
}

static drawMHCClass1(ctx, w, h) {
  const cx = w * 0.5, cy = h * 0.5;
  // All nucleated cells label
  ctx.fillStyle = '#E6E6FA';
  ctx.fillRect(w * 0.05, h * 0.05, w * 0.9, h * 0.12);
  ctx.strokeStyle = '#9370DB';
  ctx.lineWidth = 1.5;
  ctx.strokeRect(w * 0.05, h * 0.05, w * 0.9, h * 0.12);
  ctx.fillStyle = '#4B0082';
  ctx.font = `bold ${Math.floor(w * 0.026)}px sans-serif`;
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText('MHC Class I — All nucleated cells', w * 0.5, h * 0.11);

  // Cell
  ctx.fillStyle = '#DEB887';
  ctx.beginPath();
  ctx.arc(cx, cy + h * 0.1, h * 0.25, 0, Math.PI * 2);
  ctx.fill();
  ctx.strokeStyle = '#C4A265';
  ctx.lineWidth = 2;
  ctx.stroke();

  // Membrane
  ctx.fillStyle = '#C4A265';
  ctx.fillRect(cx - h * 0.3, cy - h * 0.02, h * 0.6, h * 0.04);

  // MHC-I groove
  ctx.fillStyle = '#4169E1';
  ctx.beginPath();
  ctx.ellipse(cx, cy - h * 0.06, 28, 12, 0, 0, Math.PI * 2);
  ctx.fill();
  // Peptide in groove
  ctx.strokeStyle = '#FF6347';
  ctx.lineWidth = 4;
  ctx.lineCap = 'round';
  ctx.beginPath();
  ctx.moveTo(cx - 20, cy - h * 0.06);
  ctx.lineTo(cx + 20, cy - h * 0.06);
  ctx.stroke();

  // β2-microglobulin
  ctx.fillStyle = '#9370DB';
  ctx.beginPath();
  ctx.arc(cx + 40, cy - h * 0.02, 14, 0, Math.PI * 2);
  ctx.fill();
  ctx.fillStyle = '#fff';
  ctx.font = `bold ${Math.floor(w * 0.018)}px sans-serif`;
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText('β2m', cx + 40, cy - h * 0.02);

  // CD8 T cell binding
  ctx.fillStyle = '#DC143C';
  ctx.beginPath();
  ctx.arc(cx - 70, cy - h * 0.1, 20, 0, Math.PI * 2);
  ctx.fill();
  ctx.fillStyle = '#fff';
  ctx.font = `bold ${Math.floor(w * 0.022)}px sans-serif`;
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText('CD8\nTCR', cx - 70, cy - h * 0.1);
  ctx.strokeStyle = '#DC143C';
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.moveTo(cx - 53, cy - h * 0.08);
  ctx.lineTo(cx - 30, cy - h * 0.06);
  ctx.stroke();
}

static drawMHCClass2(ctx, w, h) {
  const cx = w * 0.5, cy = h * 0.5;
  // APCs only label
  ctx.fillStyle = '#FFF0F5';
  ctx.fillRect(w * 0.05, h * 0.05, w * 0.9, h * 0.12);
  ctx.strokeStyle = '#DA70D6';
  ctx.lineWidth = 1.5;
  ctx.strokeRect(w * 0.05, h * 0.05, w * 0.9, h * 0.12);
  ctx.fillStyle = '#8B008B';
  ctx.font = `bold ${Math.floor(w * 0.026)}px sans-serif`;
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText('MHC Class II — APCs only', w * 0.5, h * 0.11);

  // APC cell
  ctx.fillStyle = '#DA70D6';
  ctx.beginPath();
  ctx.arc(cx, cy + h * 0.1, h * 0.25, 0, Math.PI * 2);
  ctx.fill();
  ctx.strokeStyle = '#9400D3';
  ctx.lineWidth = 2;
  ctx.stroke();

  // Membrane
  ctx.fillStyle = '#9400D3';
  ctx.fillRect(cx - h * 0.3, cy - h * 0.02, h * 0.6, h * 0.04);

  // MHC-II groove (wider)
  ctx.fillStyle = '#9370DB';
  ctx.beginPath();
  ctx.ellipse(cx, cy - h * 0.07, 34, 14, 0, 0, Math.PI * 2);
  ctx.fill();
  // Peptide
  ctx.strokeStyle = '#FF6347';
  ctx.lineWidth = 5;
  ctx.lineCap = 'round';
  ctx.beginPath();
  ctx.moveTo(cx - 26, cy - h * 0.07);
  ctx.bezierCurveTo(cx - 10, cy - h * 0.12, cx + 10, cy - h * 0.12, cx + 26, cy - h * 0.07);
  ctx.stroke();

  // CD4 T cell binding
  ctx.fillStyle = '#FF6B35';
  ctx.beginPath();
  ctx.arc(cx - 70, cy - h * 0.12, 20, 0, Math.PI * 2);
  ctx.fill();
  ctx.fillStyle = '#fff';
  ctx.font = `bold ${Math.floor(w * 0.022)}px sans-serif`;
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText('CD4\nTCR', cx - 70, cy - h * 0.12);
  ctx.strokeStyle = '#FF6B35';
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.moveTo(cx - 52, cy - h * 0.1);
  ctx.lineTo(cx - 36, cy - h * 0.07);
  ctx.stroke();
}

static drawMHCTcellInteraction(ctx, w, h) {
  // APC left, T cell right, synapse center
  ctx.fillStyle = '#DA70D6';
  ctx.beginPath();
  ctx.arc(w * 0.22, h * 0.5, 36, 0, Math.PI * 2);
  ctx.fill();
  ctx.fillStyle = '#fff';
  ctx.font = `bold ${Math.floor(w * 0.026)}px sans-serif`;
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText('APC', w * 0.22, h * 0.5);

  ctx.fillStyle = '#FF6B35';
  ctx.beginPath();
  ctx.arc(w * 0.78, h * 0.5, 36, 0, Math.PI * 2);
  ctx.fill();
  ctx.fillStyle = '#fff';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText('T Cell', w * 0.78, h * 0.5);

  // Synapse zone
  ctx.fillStyle = 'rgba(255,215,0,0.2)';
  ctx.fillRect(w * 0.42, h * 0.3, w * 0.16, h * 0.4);
  ctx.strokeStyle = '#FFD700';
  ctx.lineWidth = 2;
  ctx.strokeRect(w * 0.42, h * 0.3, w * 0.16, h * 0.4);

  // Molecular pairs
  const pairs = [
    { a: 'MHC-II', b: 'TCR',   y: 0.38, ca: '#9370DB', cb: '#FF8C00' },
    { a: 'B7',     b: 'CD28',  y: 0.5,  ca: '#4169E1', cb: '#228B22' },
    { a: 'ICAM-1', b: 'LFA-1', y: 0.62, ca: '#20B2AA', cb: '#DC143C' },
  ];
  pairs.forEach(({ a, b, y, ca, cb }) => {
    ctx.fillStyle = ca;
    ctx.beginPath();
    ctx.arc(w * 0.43, h * y, 12, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = '#fff';
    ctx.font = `bold ${Math.floor(w * 0.018)}px sans-serif`;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(a, w * 0.43, h * y);

    ctx.fillStyle = cb;
    ctx.beginPath();
    ctx.arc(w * 0.57, h * y, 12, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = '#fff';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(b, w * 0.57, h * y);

    ctx.strokeStyle = '#FFD700';
    ctx.lineWidth = 1.5;
    ctx.beginPath();
    ctx.moveTo(w * 0.46, h * y);
    ctx.lineTo(w * 0.54, h * y);
    ctx.stroke();
  });
}

// ─────────────────────────────────────────────────────────────────────────────

static drawClonalSelection(ctx, x, y, width, height, stage) {
  ctx.save();
  ctx.translate(x, y);
  switch (stage) {
    case 'naive_pool':
      this.drawClonalNaivePool(ctx, width, height);
      break;
    case 'selection':
      this.drawClonalSelectionStage(ctx, width, height);
      break;
    case 'expansion':
      this.drawClonalExpansionStage(ctx, width, height);
      break;
    case 'complete':
    default:
      this.drawClonalSelectionComplete(ctx, width, height);
      break;
  }
  ctx.restore();
}

static drawClonalSelectionComplete(ctx, w, h) {
  // Naive B/T cell pool
  const poolColors = ['#6495ED','#4169E1','#1E90FF','#00BFFF','#87CEEB','#7B68EE','#ADD8E6','#B0C4DE'];
  poolColors.forEach((color, i) => {
    const px = w * (0.05 + (i % 4) * 0.12), py = h * (0.08 + Math.floor(i / 4) * 0.18);
    ctx.fillStyle = color;
    ctx.beginPath();
    ctx.arc(px, py, 14, 0, Math.PI * 2);
    ctx.fill();
  });
  ctx.fillStyle = '#333';
  ctx.font = `${Math.floor(w * 0.022)}px sans-serif`;
  ctx.textAlign = 'left';
  ctx.textBaseline = 'middle';
  ctx.fillText('Naive lymphocyte pool', w * 0.05, h * 0.33);

  // Antigen
  ctx.fillStyle = '#8B0000';
  ctx.beginPath();
  ctx.arc(w * 0.5, h * 0.18, 18, 0, Math.PI * 2);
  ctx.fill();
  ctx.fillStyle = '#fff';
  ctx.font = `bold ${Math.floor(w * 0.024)}px sans-serif`;
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText('Ag', w * 0.5, h * 0.18);

  // Selected clone (highlighted)
  ctx.fillStyle = '#FFD700';
  ctx.beginPath();
  ctx.arc(w * 0.5, h * 0.44, 20, 0, Math.PI * 2);
  ctx.fill();
  ctx.strokeStyle = '#FF8C00';
  ctx.lineWidth = 3;
  ctx.stroke();

  // Selection arrow
  ctx.strokeStyle = '#FF8C00';
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.moveTo(w * 0.5, h * 0.3);
  ctx.lineTo(w * 0.5, h * 0.37);
  ctx.stroke();
  ctx.fillStyle = '#FF8C00';
  ctx.beginPath();
  ctx.moveTo(w * 0.5, h * 0.37);
  ctx.lineTo(w * 0.44, h * 0.33);
  ctx.lineTo(w * 0.56, h * 0.33);
  ctx.closePath();
  ctx.fill();

  // Clonal expansion
  const expansionCells = [[0.3, 0.62], [0.4, 0.68], [0.5, 0.64], [0.6, 0.68], [0.7, 0.62],
                           [0.35, 0.8], [0.5, 0.82], [0.65, 0.8]];
  expansionCells.forEach(([px, py]) => {
    ctx.fillStyle = '#FFD700';
    ctx.beginPath();
    ctx.arc(w * px, h * py, 14, 0, Math.PI * 2);
    ctx.fill();
    ctx.strokeStyle = '#FF8C00';
    ctx.lineWidth = 1.5;
    ctx.stroke();
    // Division arrow
    ctx.strokeStyle = '#aaa';
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(w * 0.5, h * 0.52);
    ctx.lineTo(w * px, h * py - 14);
    ctx.stroke();
  });

  ctx.fillStyle = '#333';
  ctx.font = `${Math.floor(w * 0.02)}px sans-serif`;
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText('Clonal expansion of selected clone', w * 0.5, h * 0.93);
}

static drawClonalNaivePool(ctx, w, h) {
  const receptorColors = ['#6495ED','#FF6347','#32CD32','#FFD700','#DA70D6',
                           '#20B2AA','#FF8C00','#DC143C','#00BFFF','#9400D3',
                           '#3CB371','#FF69B4'];
  ctx.fillStyle = '#333';
  ctx.font = `bold ${Math.floor(w * 0.026)}px sans-serif`;
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText('Diverse Naive Lymphocyte Pool', w * 0.5, h * 0.07);

  receptorColors.forEach((color, i) => {
    const px = w * (0.08 + (i % 6) * 0.155), py = h * (0.2 + Math.floor(i / 6) * 0.3);
    ctx.fillStyle = color;
    ctx.beginPath();
    ctx.arc(px, py, 20, 0, Math.PI * 2);
    ctx.fill();
    ctx.strokeStyle = 'rgba(0,0,0,0.2)';
    ctx.lineWidth = 1;
    ctx.stroke();
    // Unique receptor symbol
    ctx.strokeStyle = '#fff';
    ctx.lineWidth = 2;
    const a = (i / receptorColors.length) * Math.PI * 2;
    ctx.beginPath();
    ctx.moveTo(px, py - 10);
    ctx.lineTo(px + Math.cos(a) * 12, py + Math.sin(a) * 12);
    ctx.stroke();
  });

  ctx.fillStyle = '#555';
  ctx.font = `${Math.floor(w * 0.02)}px sans-serif`;
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText('Each cell has a unique antigen receptor (BCR / TCR)', w * 0.5, h * 0.9);
}

static drawClonalSelectionStage(ctx, w, h) {
  // Antigen enters
  ctx.fillStyle = '#8B0000';
  ctx.beginPath();
  ctx.arc(w * 0.5, h * 0.12, 18, 0, Math.PI * 2);
  ctx.fill();
  ctx.fillStyle = '#fff';
  ctx.font = `bold ${Math.floor(w * 0.026)}px sans-serif`;
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText('Antigen', w * 0.5, h * 0.12);

  // Pool — most don't match (grey), one matches (gold)
  const pool = [
    [0.15, 0.38, '#bbb', false], [0.3, 0.35, '#bbb', false],
    [0.5,  0.33, '#FFD700', true],
    [0.7, 0.35, '#bbb', false],  [0.85, 0.38, '#bbb', false],
    [0.15, 0.6,  '#bbb', false], [0.3, 0.62, '#bbb', false],
    [0.7, 0.62,  '#bbb', false], [0.85, 0.6, '#bbb', false],
  ];
  pool.forEach(([px, py, color, match]) => {
    ctx.fillStyle = color;
    ctx.beginPath();
    ctx.arc(w * px, h * py, 16, 0, Math.PI * 2);
    ctx.fill();
    if (match) {
      ctx.strokeStyle = '#FF8C00';
      ctx.lineWidth = 3;
      ctx.stroke();
      // Lock-key connection
      ctx.strokeStyle = '#FF8C00';
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(w * px, h * py - 16);
      ctx.lineTo(w * px, h * 0.22);
      ctx.stroke();
    }
  });

  ctx.fillStyle = '#333';
  ctx.font = `${Math.floor(w * 0.022)}px sans-serif`;
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText('Only the complementary clone is selected', w * 0.5, h * 0.82);
}

static drawClonalExpansionStage(ctx, w, h) {
  this.drawClonalExpansionComplete(ctx, w, h);
}

// ─────────────────────────────────────────────────────────────────────────────

static drawClonalExpansion(ctx, x, y, width, height, stage) {
  ctx.save();
  ctx.translate(x, y);
  switch (stage) {
    case 'activation':
      this.drawClonalExpActivation(ctx, width, height);
      break;
    case 'proliferation':
      this.drawClonalExpProliferation(ctx, width, height);
      break;
    case 'differentiation':
      this.drawClonalExpDifferentiation(ctx, width, height);
      break;
    case 'complete':
    default:
      this.drawClonalExpansionComplete(ctx, width, height);
      break;
  }
  ctx.restore();
}

static drawClonalExpansionComplete(ctx, w, h) {
  // Selected clone at top
  ctx.fillStyle = '#FFD700';
  ctx.beginPath();
  ctx.arc(w * 0.5, h * 0.1, 20, 0, Math.PI * 2);
  ctx.fill();
  ctx.strokeStyle = '#FF8C00';
  ctx.lineWidth = 2.5;
  ctx.stroke();
  ctx.fillStyle = '#fff';
  ctx.font = `bold ${Math.floor(w * 0.024)}px sans-serif`;
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText('Selected\nClone', w * 0.5, h * 0.1);

  // Division waves
  const waves = [
    { cells: [[0.35, 0.28], [0.65, 0.28]], r: 16 },
    { cells: [[0.2, 0.46], [0.4, 0.46], [0.6, 0.46], [0.8, 0.46]], r: 14 },
    { cells: [[0.1,0.65],[0.27,0.65],[0.44,0.65],[0.56,0.65],[0.73,0.65],[0.9,0.65]], r: 12 },
  ];
  waves.forEach(({ cells, r }) => {
    cells.forEach(([px, py]) => {
      ctx.fillStyle = '#FFD700';
      ctx.beginPath();
      ctx.arc(w * px, h * py, r, 0, Math.PI * 2);
      ctx.fill();
      ctx.strokeStyle = '#FF8C00';
      ctx.lineWidth = 1.5;
      ctx.stroke();
    });
  });

  // Effector vs Memory split at bottom
  ctx.strokeStyle = '#aaa';
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.moveTo(w * 0.27, h * 0.73);
  ctx.lineTo(w * 0.3, h * 0.82);
  ctx.stroke();
  ctx.beginPath();
  ctx.moveTo(w * 0.73, h * 0.73);
  ctx.lineTo(w * 0.7, h * 0.82);
  ctx.stroke();

  ctx.fillStyle = '#DC143C';
  ctx.beginPath();
  ctx.arc(w * 0.3, h * 0.88, 18, 0, Math.PI * 2);
  ctx.fill();
  ctx.fillStyle = '#fff';
  ctx.font = `bold ${Math.floor(w * 0.02)}px sans-serif`;
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText('Effector', w * 0.3, h * 0.88);

  ctx.fillStyle = '#20B2AA';
  ctx.beginPath();
  ctx.arc(w * 0.7, h * 0.88, 18, 0, Math.PI * 2);
  ctx.fill();
  ctx.fillStyle = '#fff';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText('Memory', w * 0.7, h * 0.88);
}

static drawClonalExpActivation(ctx, w, h) {
  // IL-2 autocrine loop
  const cx = w * 0.5, cy = h * 0.5;
  ctx.fillStyle = '#FFD700';
  ctx.beginPath();
  ctx.arc(cx, cy, 32, 0, Math.PI * 2);
  ctx.fill();
  ctx.strokeStyle = '#FF8C00';
  ctx.lineWidth = 2.5;
  ctx.stroke();
  ctx.fillStyle = '#fff';
  ctx.font = `bold ${Math.floor(w * 0.026)}px sans-serif`;
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText('Activated\nLymphocyte', cx, cy);

  // IL-2 loop arrow
  ctx.strokeStyle = '#228B22';
  ctx.lineWidth = 2.5;
  ctx.beginPath();
  ctx.arc(cx + 60, cy, 30, -0.5, Math.PI * 1.3);
  ctx.stroke();
  ctx.fillStyle = '#228B22';
  ctx.font = `bold ${Math.floor(w * 0.02)}px sans-serif`;
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText('IL-2\nautocrine', cx + 60, cy + 42);

  // Signal 1 and 2
  [{ label: 'Signal 1\nTCR/MHC', x: 0.15, y: 0.25 }, { label: 'Signal 2\nCD28/B7', x: 0.15, y: 0.75 }].forEach(({ label, x, y }) => {
    ctx.fillStyle = '#4169E1';
    ctx.beginPath();
    ctx.arc(w * x, h * y, 20, 0, Math.PI * 2);
    ctx.fill();
    ctx.strokeStyle = '#4169E1';
    ctx.lineWidth = 1.5;
    ctx.setLineDash([3, 3]);
    ctx.beginPath();
    ctx.moveTo(w * x + 18, h * y);
    ctx.lineTo(cx - 32, cy);
    ctx.stroke();
    ctx.setLineDash([]);
    ctx.fillStyle = '#fff';
    ctx.font = `bold ${Math.floor(w * 0.02)}px sans-serif`;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    label.split('\n').forEach((line, li) => ctx.fillText(line, w * x, h * y + (li - 0.5) * 10));
  });
}

static drawClonalExpProliferation(ctx, w, h) {
  // Mitosis stages
  const phases = [
    { label: 'G1\nGrowth', x: 0.2, y: 0.3, color: '#6495ED' },
    { label: 'S\nDNA Syn.', x: 0.5, y: 0.2, color: '#4169E1' },
    { label: 'G2\nPrep', x: 0.8, y: 0.3, color: '#1E90FF' },
    { label: 'M\nMitosis', x: 0.8, y: 0.7, color: '#FF8C00' },
    { label: '2 Daughter\nCells', x: 0.5, y: 0.82, color: '#FFD700' },
  ];
  const phaseOrder = [[0,1],[1,2],[2,3],[3,4]];
  phaseOrder.forEach(([a, b]) => {
    ctx.strokeStyle = '#aaa';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(w * phases[a].x, h * phases[a].y);
    ctx.lineTo(w * phases[b].x, h * phases[b].y);
    ctx.stroke();
  });
  phases.forEach(({ label, x, y, color }) => {
    ctx.fillStyle = color;
    ctx.beginPath();
    ctx.arc(w * x, h * y, 24, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = '#fff';
    ctx.font = `bold ${Math.floor(w * 0.022)}px sans-serif`;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    label.split('\n').forEach((line, li) => ctx.fillText(line, w * x, h * y + (li - 0.5) * 11));
  });
}

static drawClonalExpDifferentiation(ctx, w, h) {
  // Activated clone → effector subtypes
  ctx.fillStyle = '#FFD700';
  ctx.beginPath();
  ctx.arc(w * 0.5, h * 0.15, 22, 0, Math.PI * 2);
  ctx.fill();
  ctx.fillStyle = '#fff';
  ctx.font = `bold ${Math.floor(w * 0.024)}px sans-serif`;
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText('Activated\nClone', w * 0.5, h * 0.15);

  const subtypes = [
    { label: 'Plasma\nCell', x: 0.15, y: 0.6, color: '#4682B4' },
    { label: 'Th1', x: 0.32, y: 0.55, color: '#FF6B35' },
    { label: 'Th2', x: 0.5, y: 0.52, color: '#FF8C00' },
    { label: 'CTL', x: 0.68, y: 0.55, color: '#DC143C' },
    { label: 'Memory', x: 0.85, y: 0.6, color: '#20B2AA' },
  ];
  subtypes.forEach(({ label, x, y, color }) => {
    ctx.strokeStyle = '#aaa';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(w * 0.5, h * 0.25);
    ctx.lineTo(w * x, h * y - 0.04 * h);
    ctx.stroke();
    ctx.fillStyle = color;
    ctx.beginPath();
    ctx.arc(w * x, h * y, 22, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = '#fff';
    ctx.font = `bold ${Math.floor(w * 0.022)}px sans-serif`;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    label.split('\n').forEach((line, li) => ctx.fillText(line, w * x, h * y + (li - 0.5) * 10));
  });
}

// ─────────────────────────────────────────────────────────────────────────────

static drawAntigenProcessing(ctx, x, y, width, height, stage) {
  ctx.save();
  ctx.translate(x, y);
  switch (stage) {
    case 'endocytosis':
      this.drawAntigenEndocytosis(ctx, width, height);
      break;
    case 'proteolysis':
      this.drawAntigenProteolysis(ctx, width, height);
      break;
    case 'mhc_loading':
      this.drawAntigenMHCLoading(ctx, width, height);
      break;
    case 'complete':
    default:
      this.drawAntigenProcessingComplete(ctx, width, height);
      break;
  }
  ctx.restore();
}

static drawAntigenProcessingComplete(ctx, w, h) {
  const steps = [
    { label: 'Pathogen\nEndocytosis', x: 0.12, y: 0.25, color: '#8B0000' },
    { label: 'Endosome\nAcidification', x: 0.30, y: 0.25, color: '#FF6347' },
    { label: 'Protease\nDigestion', x: 0.50, y: 0.25, color: '#FF4500' },
    { label: 'MHC-II\nLoading', x: 0.70, y: 0.25, color: '#4169E1' },
    { label: 'Surface\nPresentation', x: 0.88, y: 0.25, color: '#228B22' },
  ];
  steps.forEach(({ label, x, y, color }, i) => {
    if (i > 0) {
      ctx.strokeStyle = '#aaa';
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(w * (steps[i-1].x + 0.06), h * y);
      ctx.lineTo(w * (x - 0.06), h * y);
      ctx.stroke();
      ctx.fillStyle = '#aaa';
      ctx.beginPath();
      ctx.moveTo(w * (x - 0.06), h * y);
      ctx.lineTo(w * (x - 0.09), h * y - 5);
      ctx.lineTo(w * (x - 0.09), h * y + 5);
      ctx.closePath();
      ctx.fill();
    }
    ctx.fillStyle = color;
    ctx.beginPath();
    ctx.arc(w * x, h * y, 22, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = '#fff';
    ctx.font = `bold ${Math.floor(w * 0.02)}px sans-serif`;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    label.split('\n').forEach((line, li) => ctx.fillText(line, w * x, h * y + (li - 0.5) * 11));
  });

  // APC cell body below
  ctx.fillStyle = '#DA70D6';
  ctx.beginPath();
  const pts = 10;
  for (let i = 0; i < pts; i++) {
    const a = (i / pts) * Math.PI * 2;
    const r = h * 0.26 * (0.85 + 0.2 * Math.sin(i * 2.1));
    const px = w * 0.5 + Math.cos(a) * r, py = h * 0.65 + Math.sin(a) * r;
    i === 0 ? ctx.moveTo(px, py) : ctx.lineTo(px, py);
  }
  ctx.closePath();
  ctx.fill();
  ctx.strokeStyle = '#9400D3';
  ctx.lineWidth = 2;
  ctx.stroke();

  // Nucleus
  ctx.fillStyle = '#9400D3';
  ctx.beginPath();
  ctx.arc(w * 0.5, h * 0.65, h * 0.1, 0, Math.PI * 2);
  ctx.fill();

  // MHC on surface
  ctx.fillStyle = '#FFD700';
  for (let i = 0; i < 8; i++) {
    const a = (i / 8) * Math.PI * 2;
    const mx = w * 0.5 + Math.cos(a) * h * 0.27;
    const my = h * 0.65 + Math.sin(a) * h * 0.27;
    ctx.beginPath();
    ctx.arc(mx, my, 5, 0, Math.PI * 2);
    ctx.fill();
  }

  // Arrow from step 5 down to cell surface
  ctx.strokeStyle = '#228B22';
  ctx.lineWidth = 2;
  ctx.setLineDash([4, 3]);
  ctx.beginPath();
  ctx.moveTo(w * 0.88, h * 0.35);
  ctx.lineTo(w * 0.78, h * 0.5);
  ctx.stroke();
  ctx.setLineDash([]);
}

static drawAntigenEndocytosis(ctx, w, h) {
  const cx = w * 0.5, cy = h * 0.55;
  // Pathogen outside
  ctx.fillStyle = '#8B0000';
  ctx.beginPath();
  ctx.arc(cx, h * 0.15, 18, 0, Math.PI * 2);
  ctx.fill();
  for (let i = 0; i < 8; i++) {
    const a = (i / 8) * Math.PI * 2;
    ctx.fillStyle = '#CC0000';
    ctx.beginPath();
    ctx.arc(cx + Math.cos(a) * 22, h * 0.15 + Math.sin(a) * 22, 5, 0, Math.PI * 2);
    ctx.fill();
  }

  // Cell membrane
  ctx.strokeStyle = '#DA70D6';
  ctx.lineWidth = 4;
  ctx.beginPath();
  ctx.moveTo(0, h * 0.35);
  ctx.lineTo(w, h * 0.35);
  ctx.stroke();

  // Receptor-mediated invagination
  ctx.fillStyle = 'rgba(218,112,214,0.4)';
  ctx.beginPath();
  ctx.arc(cx, h * 0.43, 24, Math.PI, 0, true);
  ctx.fill();
  ctx.strokeStyle = '#DA70D6';
  ctx.lineWidth = 3;
  ctx.stroke();

  // Endosome
  ctx.fillStyle = 'rgba(255,99,71,0.4)';
  ctx.beginPath();
  ctx.arc(cx, cy, 28, 0, Math.PI * 2);
  ctx.fill();
  ctx.strokeStyle = '#FF6347';
  ctx.lineWidth = 2;
  ctx.stroke();

  // Pathogen inside
  ctx.fillStyle = '#8B0000';
  ctx.beginPath();
  ctx.arc(cx, cy, 12, 0, Math.PI * 2);
  ctx.fill();

  // Arrow
  ctx.strokeStyle = '#aaa';
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.moveTo(cx, h * 0.28);
  ctx.lineTo(cx, h * 0.37);
  ctx.stroke();
}

static drawAntigenProteolysis(ctx, w, h) {
  const cx = w * 0.5, cy = h * 0.5;
  // Lysosome/endosome
  ctx.fillStyle = 'rgba(255,69,0,0.3)';
  ctx.beginPath();
  ctx.arc(cx, cy, h * 0.28, 0, Math.PI * 2);
  ctx.fill();
  ctx.strokeStyle = '#FF4500';
  ctx.lineWidth = 2;
  ctx.stroke();

  // Proteases (scissors symbol)
  ctx.strokeStyle = '#FF6347';
  ctx.lineWidth = 3;
  [[-0.15, -0.1], [0.15, 0.1], [-0.1, 0.18], [0.1, -0.18]].forEach(([dx, dy]) => {
    const px = cx + dx * h, py = cy + dy * h;
    ctx.beginPath();
    ctx.moveTo(px - 8, py - 8);
    ctx.lineTo(px + 8, py + 8);
    ctx.moveTo(px + 8, py - 8);
    ctx.lineTo(px - 8, py + 8);
    ctx.stroke();
  });

  // Peptide fragments result
  ctx.strokeStyle = '#FF8C00';
  ctx.lineWidth = 4;
  ctx.lineCap = 'round';
  [[-0.2, 0], [0, 0.15], [0.2, -0.05], [-0.1, -0.2], [0.15, 0.22]].forEach(([dx, dy]) => {
    const a = Math.atan2(dy, dx);
    const px = cx + dx * h, py = cy + dy * h;
    ctx.beginPath();
    ctx.moveTo(px - Math.cos(a) * 12, py - Math.sin(a) * 12);
    ctx.lineTo(px + Math.cos(a) * 12, py + Math.sin(a) * 12);
    ctx.stroke();
  });

  ctx.fillStyle = '#333';
  ctx.font = `bold ${Math.floor(w * 0.024)}px sans-serif`;
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText('Peptide fragments', cx, cy + h * 0.38);
}

static drawAntigenMHCLoading(ctx, w, h) {
  const cx = w * 0.5, cy = h * 0.5;
  // MHC-II molecule
  ctx.fillStyle = '#4169E1';
  ctx.beginPath();
  ctx.ellipse(cx - 20, cy, 18, 40, 0.2, 0, Math.PI * 2);
  ctx.fill();
  ctx.beginPath();
  ctx.ellipse(cx + 20, cy, 18, 40, -0.2, 0, Math.PI * 2);
  ctx.fill();
  ctx.strokeStyle = '#00008B';
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.ellipse(cx - 20, cy, 18, 40, 0.2, 0, Math.PI * 2);
  ctx.stroke();
  ctx.beginPath();
  ctx.ellipse(cx + 20, cy, 18, 40, -0.2, 0, Math.PI * 2);
  ctx.stroke();
  // Groove
  ctx.fillStyle = '#6495ED';
  ctx.beginPath();
  ctx.ellipse(cx, cy + 10, 30, 12, 0, 0, Math.PI * 2);
  ctx.fill();

  // Peptide dropping in
  ctx.strokeStyle = '#FF6347';
  ctx.lineWidth = 4;
  ctx.lineCap = 'round';
  ctx.beginPath();
  ctx.moveTo(cx - 20, cy - h * 0.22);
  ctx.lineTo(cx + 20, cy - h * 0.22);
  ctx.stroke();
  ctx.strokeStyle = '#aaa';
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.moveTo(cx, cy - h * 0.22 + 5);
  ctx.lineTo(cx, cy - 5);
  ctx.stroke();
  ctx.fillStyle = '#aaa';
  ctx.beginPath();
  ctx.moveTo(cx, cy - 5);
  ctx.lineTo(cx - 5, cy - 12);
  ctx.lineTo(cx + 5, cy - 12);
  ctx.closePath();
  ctx.fill();
}

// ─────────────────────────────────────────────────────────────────────────────

static drawHypersensitivityType1(ctx, x, y, width, height, stage) {
  ctx.save();
  ctx.translate(x, y);
  switch (stage) {
    case 'sensitization':
      this.drawHS1Sensitization(ctx, width, height);
      break;
    case 'elicitation':
      this.drawHS1Elicitation(ctx, width, height);
      break;
    case 'complete':
    default:
      this.drawHS1Complete(ctx, width, height);
      break;
  }
  ctx.restore();
}

static drawHS1Complete(ctx, w, h) {
  // Phase labels
  ['SENSITIZATION', 'ELICITATION'].forEach((label, i) => {
    ctx.fillStyle = i === 0 ? 'rgba(65,105,225,0.12)' : 'rgba(220,20,60,0.12)';
    ctx.fillRect(w * (i * 0.5 + 0.01), h * 0.01, w * 0.48, h * 0.98);
    ctx.fillStyle = i === 0 ? '#4169E1' : '#DC143C';
    ctx.font = `bold ${Math.floor(w * 0.026)}px sans-serif`;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(label, w * (i * 0.5 + 0.25), h * 0.06);
  });

  // Sensitization: Allergen → IgE on mast cell
  ctx.fillStyle = '#8B0000';
  ctx.beginPath();
  ctx.arc(w * 0.1, h * 0.25, 12, 0, Math.PI * 2);
  ctx.fill();
  ctx.fillStyle = '#555';
  ctx.font = `${Math.floor(w * 0.02)}px sans-serif`;
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText('Allergen', w * 0.1, h * 0.36);

  ctx.strokeStyle = '#aaa';
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.moveTo(w * 0.13, h * 0.25);
  ctx.lineTo(w * 0.2, h * 0.35);
  ctx.stroke();

  // B cell → IgE production
  ctx.fillStyle = '#1E90FF';
  ctx.beginPath();
  ctx.arc(w * 0.23, h * 0.38, 14, 0, Math.PI * 2);
  ctx.fill();
  ctx.strokeStyle = '#aaa';
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.moveTo(w * 0.26, h * 0.42);
  ctx.lineTo(w * 0.3, h * 0.52);
  ctx.stroke();

  // IgE + mast cell
  ctx.fillStyle = '#FF8C69';
  ctx.beginPath();
  ctx.arc(w * 0.32, h * 0.6, 18, 0, Math.PI * 2);
  ctx.fill();
  ctx.fillStyle = '#fff';
  ctx.font = `bold ${Math.floor(w * 0.02)}px sans-serif`;
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText('Mast\n+IgE', w * 0.32, h * 0.6);

  // Elicitation: Re-exposure → degranulation
  ctx.fillStyle = '#8B0000';
  ctx.beginPath();
  ctx.arc(w * 0.6, h * 0.25, 12, 0, Math.PI * 2);
  ctx.fill();
  ctx.fillStyle = '#555';
  ctx.font = `${Math.floor(w * 0.02)}px sans-serif`;
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText('Re-exposure', w * 0.6, h * 0.36);

  ctx.strokeStyle = '#DC143C';
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.moveTo(w * 0.6, h * 0.3);
  ctx.lineTo(w * 0.7, h * 0.48);
  ctx.stroke();

  // Mast cell degranulating
  ctx.fillStyle = '#FF8C69';
  ctx.beginPath();
  ctx.arc(w * 0.72, h * 0.55, 20, 0, Math.PI * 2);
  ctx.fill();
  ctx.strokeStyle = '#CC4400';
  ctx.lineWidth = 1.5;
  ctx.stroke();
  // Granules exploding
  ctx.fillStyle = '#9400D3';
  [[0.85, 0.42], [0.88, 0.58], [0.78, 0.7], [0.62, 0.68]].forEach(([px, py]) => {
    ctx.beginPath();
    ctx.arc(w * px, h * py, 8, 0, Math.PI * 2);
    ctx.fill();
  });

  // Symptoms
  ctx.fillStyle = '#DC143C';
  ctx.font = `${Math.floor(w * 0.02)}px sans-serif`;
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText('Histamine / Leukotrienes', w * 0.75, h * 0.82);
  ctx.fillText('→ Allergy / Anaphylaxis', w * 0.75, h * 0.89);
}

static drawHS1Sensitization(ctx, w, h) {
  const steps = [
    { label: 'Allergen\nentry', y: 0.1, color: '#8B0000' },
    { label: 'APC\npresentation', y: 0.28, color: '#DA70D6' },
    { label: 'Th2 cell\nactivation', y: 0.46, color: '#FF6B35' },
    { label: 'IL-4 → B cell\nIgE class switch', y: 0.64, color: '#1E90FF' },
    { label: 'IgE binds\nFcεRI on mast', y: 0.82, color: '#FF8C69' },
  ];
  steps.forEach(({ label, y, color }, i) => {
    if (i > 0) {
      ctx.strokeStyle = '#aaa';
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(w * 0.5, h * (y - 0.1));
      ctx.lineTo(w * 0.5, h * (y - 0.01));
      ctx.stroke();
    }
    ctx.fillStyle = color;
    ctx.beginPath();
    ctx.arc(w * 0.5, h * y, 22, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = '#fff';
    ctx.font = `bold ${Math.floor(w * 0.022)}px sans-serif`;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    label.split('\n').forEach((line, li) => ctx.fillText(line, w * 0.5, h * y + (li - 0.5) * 11));
  });
}

static drawHS1Elicitation(ctx, w, h) {
  const steps = [
    { label: 'Re-exposure\nto allergen', y: 0.1, color: '#8B0000' },
    { label: 'Allergen crosslinks\nIgE on mast cell', y: 0.28, color: '#FF8C69' },
    { label: 'FcεRI\naggregation', y: 0.46, color: '#CC4400' },
    { label: 'Degranulation:\nHistamine, PGs, LTs', y: 0.64, color: '#9400D3' },
    { label: 'Allergy symptoms\n(< 30 min)', y: 0.82, color: '#DC143C' },
  ];
  steps.forEach(({ label, y, color }, i) => {
    if (i > 0) {
      ctx.strokeStyle = '#aaa';
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(w * 0.5, h * (y - 0.1));
      ctx.lineTo(w * 0.5, h * (y - 0.01));
      ctx.stroke();
    }
    ctx.fillStyle = color;
    ctx.beginPath();
    ctx.arc(w * 0.5, h * y, 22, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = '#fff';
    ctx.font = `bold ${Math.floor(w * 0.022)}px sans-serif`;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    label.split('\n').forEach((line, li) => ctx.fillText(line, w * 0.5, h * y + (li - 0.5) * 11));
  });
}

// ─────────────────────────────────────────────────────────────────────────────

static drawHypersensitivityType2(ctx, x, y, width, height, stage) {
  ctx.save();
  ctx.translate(x, y);
  switch (stage) {
    case 'antibody_binding':
      this.drawHS2AntibodyBinding(ctx, width, height);
      break;
    case 'destruction':
      this.drawHS2Destruction(ctx, width, height);
      break;
    case 'complete':
    default:
      this.drawHS2Complete(ctx, width, height);
      break;
  }
  ctx.restore();
}

static drawHS2Complete(ctx, w, h) {
  // Target cell (e.g. RBC)
  ctx.fillStyle = '#B22222';
  ctx.beginPath();
  ctx.arc(w * 0.5, h * 0.35, 32, 0, Math.PI * 2);
  ctx.fill();
  ctx.fillStyle = '#fff';
  ctx.font = `bold ${Math.floor(w * 0.026)}px sans-serif`;
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText('Target Cell', w * 0.5, h * 0.35);

  // IgG/IgM antibodies bound to surface
  ctx.strokeStyle = '#FFD700';
  ctx.lineWidth = 2.5;
  for (let i = 0; i < 6; i++) {
    const a = (i / 6) * Math.PI * 2;
    const bx = w * 0.5 + Math.cos(a) * 32, by = h * 0.35 + Math.sin(a) * 32;
    ctx.beginPath();
    ctx.moveTo(bx, by);
    ctx.lineTo(bx + Math.cos(a) * 10, by + Math.sin(a) * 10);
    ctx.lineTo(bx + Math.cos(a + 0.4) * 18, by + Math.sin(a + 0.4) * 18);
    ctx.moveTo(bx + Math.cos(a) * 10, by + Math.sin(a) * 10);
    ctx.lineTo(bx + Math.cos(a - 0.4) * 18, by + Math.sin(a - 0.4) * 18);
    ctx.stroke();
  }

  // Effector mechanisms
  const mechs = [
    { label: 'Complement\nlysis', x: 0.15, y: 0.7, color: '#00CED1' },
    { label: 'ADCC\n(NK cells)', x: 0.5, y: 0.75, color: '#2E8B57' },
    { label: 'Phagocytosis\n(macrophage)', x: 0.85, y: 0.7, color: '#CD853F' },
  ];
  mechs.forEach(({ label, x, y, color }) => {
    ctx.strokeStyle = '#aaa';
    ctx.lineWidth = 2;
    ctx.setLineDash([4, 3]);
    ctx.beginPath();
    ctx.moveTo(w * 0.5, h * 0.52);
    ctx.lineTo(w * x, h * y - 0.04 * h);
    ctx.stroke();
    ctx.setLineDash([]);
    ctx.fillStyle = color;
    ctx.beginPath();
    ctx.arc(w * x, h * y, 22, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = '#fff';
    ctx.font = `bold ${Math.floor(w * 0.02)}px sans-serif`;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    label.split('\n').forEach((line, li) => ctx.fillText(line, w * x, h * y + (li - 0.5) * 11));
  });

  // Examples
  ctx.fillStyle = '#555';
  ctx.font = `${Math.floor(w * 0.02)}px sans-serif`;
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText('Examples: Hemolytic anemia, Transfusion reactions, Myasthenia gravis', w * 0.5, h * 0.93);
}

static drawHS2AntibodyBinding(ctx, w, h) {
  const cx = w * 0.5, cy = h * 0.45;
  // Cell
  ctx.fillStyle = '#B22222';
  ctx.beginPath();
  ctx.arc(cx, cy, 40, 0, Math.PI * 2);
  ctx.fill();
  // Surface antigen (triangle)
  for (let i = 0; i < 6; i++) {
    const a = (i / 6) * Math.PI * 2;
    ctx.fillStyle = '#FF6347';
    ctx.beginPath();
    const sx = cx + Math.cos(a) * 40, sy = cy + Math.sin(a) * 40;
    ctx.arc(sx, sy, 7, 0, Math.PI * 2);
    ctx.fill();
  }
  // IgG binding
  ctx.strokeStyle = '#FFD700';
  ctx.lineWidth = 2.5;
  for (let i = 0; i < 4; i++) {
    const a = (i / 4) * Math.PI * 2 + 0.3;
    const bx = cx + Math.cos(a) * 40, by = cy + Math.sin(a) * 40;
    const ox = Math.cos(a), oy = Math.sin(a);
    ctx.beginPath();
    ctx.moveTo(bx + ox * 18, by + oy * 18);
    ctx.lineTo(bx + ox * 8, by + oy * 8);
    ctx.lineTo(bx + (ox - oy * 0.5) * 16, by + (oy + ox * 0.5) * 16);
    ctx.moveTo(bx + ox * 8, by + oy * 8);
    ctx.lineTo(bx + (ox + oy * 0.5) * 16, by + (oy - ox * 0.5) * 16);
    ctx.stroke();
  }
  ctx.fillStyle = '#555';
  ctx.font = `${Math.floor(w * 0.022)}px sans-serif`;
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText('IgG/IgM binding to cell-surface antigen', cx, h * 0.82);
}

static drawHS2Destruction(ctx, w, h) {
  const cx = w * 0.5, cy = h * 0.4;
  // Destroyed cell (fragmented)
  ctx.fillStyle = 'rgba(178,34,34,0.4)';
  ctx.strokeStyle = '#B22222';
  ctx.lineWidth = 2;
  ctx.setLineDash([5, 4]);
  ctx.beginPath();
  ctx.arc(cx, cy, 38, 0, Math.PI * 2);
  ctx.fill();
  ctx.stroke();
  ctx.setLineDash([]);
  // Fragments
  [[cx - 28, cy - 20], [cx + 25, cy + 18], [cx - 15, cy + 30], [cx + 30, cy - 25]].forEach(([fx, fy]) => {
    ctx.fillStyle = 'rgba(178,34,34,0.6)';
    ctx.beginPath();
    ctx.arc(fx, fy, 12, 0, Math.PI * 2);
    ctx.fill();
  });
  // Complement MAC pores
  ctx.strokeStyle = '#00CED1';
  ctx.lineWidth = 3;
  ctx.setLineDash([]);
  for (let i = -2; i <= 2; i++) {
    ctx.beginPath();
    ctx.arc(cx + i * 10, cy - 38, 5, 0, Math.PI);
    ctx.stroke();
  }
  ctx.fillStyle = '#555';
  ctx.font = `${Math.floor(w * 0.022)}px sans-serif`;
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText('Cell lysis via complement + ADCC', cx, h * 0.75);
}

// ─────────────────────────────────────────────────────────────────────────────

static drawHypersensitivityType3(ctx, x, y, width, height, stage) {
  ctx.save();
  ctx.translate(x, y);
  switch (stage) {
    case 'complex_formation':
      this.drawHS3ComplexFormation(ctx, width, height);
      break;
    case 'deposition':
      this.drawHS3Deposition(ctx, width, height);
      break;
    case 'inflammation':
      this.drawHS3Inflammation(ctx, width, height);
      break;
    case 'complete':
    default:
      this.drawHS3Complete(ctx, width, height);
      break;
  }
  ctx.restore();
}

static drawHS3Complete(ctx, w, h) {
  // Step row
  const steps = [
    { label: 'Soluble\nAntigens', x: 0.1, color: '#8B0000' },
    { label: 'Antibody\n(IgG/IgM)', x: 0.28, color: '#FFD700' },
    { label: 'Immune\nComplex', x: 0.5, color: '#FF6347' },
    { label: 'Vessel\nDeposition', x: 0.72, color: '#DC143C' },
    { label: 'Complement\n+ Neutrophil', x: 0.9, color: '#9400D3' },
  ];
  steps.forEach(({ label, x, color }, i) => {
    if (i > 0) {
      ctx.strokeStyle = '#aaa';
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(w * (steps[i-1].x + 0.07), h * 0.2);
      ctx.lineTo(w * (x - 0.07), h * 0.2);
      ctx.stroke();
    }
    ctx.fillStyle = color;
    ctx.beginPath();
    ctx.arc(w * x, h * 0.2, 20, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = '#fff';
    ctx.font = `bold ${Math.floor(w * 0.018)}px sans-serif`;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    label.split('\n').forEach((line, li) => ctx.fillText(line, w * x, h * 0.2 + (li - 0.5) * 10));
  });

  // Vessel wall deposition graphic
  ctx.fillStyle = '#DEB887';
  ctx.fillRect(w * 0.1, h * 0.42, w * 0.8, h * 0.14);
  ctx.strokeStyle = '#C4A265';
  ctx.lineWidth = 2;
  ctx.strokeRect(w * 0.1, h * 0.42, w * 0.8, h * 0.14);
  ctx.fillStyle = '#555';
  ctx.font = `${Math.floor(w * 0.022)}px sans-serif`;
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText('Vessel wall', w * 0.5, h * 0.49);

  // IC deposits
  ctx.fillStyle = '#FF6347';
  [0.25, 0.4, 0.55, 0.7].forEach(px => {
    ctx.beginPath();
    ctx.arc(w * px, h * 0.42, 10, 0, Math.PI * 2);
    ctx.fill();
  });

  // Neutrophil damage
  ctx.fillStyle = '#FF4500';
  ctx.beginPath();
  ctx.arc(w * 0.5, h * 0.68, 24, 0, Math.PI * 2);
  ctx.fill();
  ctx.fillStyle = '#fff';
  ctx.font = `bold ${Math.floor(w * 0.022)}px sans-serif`;
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText('Tissue\ndamage', w * 0.5, h * 0.68);

  ctx.fillStyle = '#555';
  ctx.font = `${Math.floor(w * 0.02)}px sans-serif`;
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText('Examples: SLE, serum sickness, post-strep GN', w * 0.5, h * 0.88);
}

static drawHS3ComplexFormation(ctx, w, h) {
  const cx = w * 0.5, cy = h * 0.45;
  // Antigen + antibody lattice
  ctx.fillStyle = '#8B0000';
  ctx.beginPath();
  ctx.arc(cx, cy - 30, 16, 0, Math.PI * 2);
  ctx.fill();
  ctx.fillStyle = '#FFD700';
  ctx.strokeStyle = '#FFD700';
  ctx.lineWidth = 2;
  [[cx - 30, cy], [cx + 30, cy], [cx, cy + 30], [cx - 20, cy - 60], [cx + 20, cy - 60]].forEach(([ax, ay]) => {
    ctx.beginPath();
    ctx.moveTo(ax, ay + 14);
    ctx.lineTo(ax, ay + 4);
    ctx.lineTo(ax - 8, ay - 6);
    ctx.moveTo(ax, ay + 4);
    ctx.lineTo(ax + 8, ay - 6);
    ctx.stroke();
    ctx.strokeStyle = '#aaa';
    ctx.lineWidth = 1.5;
    ctx.beginPath();
    ctx.moveTo(ax, ay + 6);
    ctx.lineTo(cx, cy - 16);
    ctx.stroke();
    ctx.strokeStyle = '#FFD700';
    ctx.lineWidth = 2;
  });
  ctx.fillStyle = '#555';
  ctx.font = `${Math.floor(w * 0.022)}px sans-serif`;
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText('Soluble immune complex lattice', cx, h * 0.82);
}

static drawHS3Deposition(ctx, w, h) {
  // Vessel cross section
  ctx.fillStyle = '#FFE4E1';
  ctx.beginPath();
  ctx.ellipse(w * 0.5, h * 0.5, w * 0.35, h * 0.25, 0, 0, Math.PI * 2);
  ctx.fill();
  ctx.strokeStyle = '#DEB887';
  ctx.lineWidth = 8;
  ctx.stroke();

  // IC clumps in wall
  ctx.fillStyle = '#FF6347';
  [0.25, 0.4, 0.6, 0.75].forEach((t) => {
    const a = t * Math.PI * 2;
    const wx = w * 0.5 + Math.cos(a) * w * 0.35;
    const wy = h * 0.5 + Math.sin(a) * h * 0.25;
    ctx.beginPath();
    ctx.arc(wx, wy, 10, 0, Math.PI * 2);
    ctx.fill();
  });

  // Flow inside vessel
  ctx.fillStyle = 'rgba(178,34,34,0.4)';
  ctx.beginPath();
  ctx.ellipse(w * 0.5, h * 0.5, w * 0.25, h * 0.16, 0, 0, Math.PI * 2);
  ctx.fill();
  ctx.fillStyle = '#555';
  ctx.font = `${Math.floor(w * 0.022)}px sans-serif`;
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText('IC deposition in vessel wall', w * 0.5, h * 0.85);
}

static drawHS3Inflammation(ctx, w, h) {
  // Same pattern as innate inflammation but HS3 specific
  ctx.fillStyle = 'rgba(255,69,0,0.15)';
  ctx.beginPath();
  ctx.arc(w * 0.5, h * 0.45, h * 0.35, 0, Math.PI * 2);
  ctx.fill();

  // Complement activation
  ctx.fillStyle = '#00CED1';
  ctx.beginPath();
  ctx.arc(w * 0.3, h * 0.3, 18, 0, Math.PI * 2);
  ctx.fill();
  ctx.fillStyle = '#fff';
  ctx.font = `bold ${Math.floor(w * 0.022)}px sans-serif`;
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText('C3a/C5a', w * 0.3, h * 0.3);

  // Neutrophil recruitment
  ctx.fillStyle = '#9400D3';
  ctx.beginPath();
  ctx.arc(w * 0.5, h * 0.45, 22, 0, Math.PI * 2);
  ctx.fill();
  ctx.fillStyle = '#fff';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText('Neutrophil\ndegranulation', w * 0.5, h * 0.45);

  // Lysosomal enzymes
  ctx.fillStyle = '#FF4500';
  ctx.beginPath();
  ctx.arc(w * 0.7, h * 0.6, 18, 0, Math.PI * 2);
  ctx.fill();
  ctx.fillStyle = '#fff';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText('Lysosomal\nenzymes', w * 0.7, h * 0.6);

  ctx.fillStyle = '#555';
  ctx.font = `${Math.floor(w * 0.02)}px sans-serif`;
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText('Vasculitis, glomerulonephritis, tissue damage', w * 0.5, h * 0.87);
}

// ─────────────────────────────────────────────────────────────────────────────

static drawHypersensitivityType4(ctx, x, y, width, height, stage) {
  ctx.save();
  ctx.translate(x, y);
  switch (stage) {
    case 'sensitization':
      this.drawHS4Sensitization(ctx, width, height);
      break;
    case 'elicitation':
      this.drawHS4Elicitation(ctx, width, height);
      break;
    case 'complete':
    default:
      this.drawHS4Complete(ctx, width, height);
      break;
  }
  ctx.restore();
}

static drawHS4Complete(ctx, w, h) {
  // No antibody involved — T cell mediated
  ctx.fillStyle = '#4A0080';
  ctx.font = `bold ${Math.floor(w * 0.024)}px sans-serif`;
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText('Delayed-Type Hypersensitivity (48–72 h)', w * 0.5, h * 0.06);

  const steps = [
    { label: 'Antigen\nEntry', x: 0.5, y: 0.18, color: '#8B0000' },
    { label: 'APC\nPresentation', x: 0.5, y: 0.34, color: '#DA70D6' },
    { label: 'CD4+ Th1\nActivation', x: 0.5, y: 0.50, color: '#FF6B35' },
    { label: 'IFN-γ / TNF-α\nCytokines', x: 0.5, y: 0.66, color: '#DC143C' },
    { label: 'Macrophage\nActivation', x: 0.3, y: 0.82, color: '#CD853F' },
    { label: 'Granuloma\nFormation', x: 0.7, y: 0.82, color: '#8B4513' },
  ];
  steps.forEach(({ label, x, y, color }, i) => {
    if (i > 0 && i < 4) {
      ctx.strokeStyle = '#aaa';
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(w * steps[i-1].x, h * (steps[i-1].y + 0.05));
      ctx.lineTo(w * x, h * (y - 0.05));
      ctx.stroke();
    }
    if (i === 4 || i === 5) {
      ctx.strokeStyle = '#aaa';
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(w * 0.5, h * 0.73);
      ctx.lineTo(w * x, h * y - 0.04 * h);
      ctx.stroke();
    }
    ctx.fillStyle = color;
    ctx.beginPath();
    ctx.arc(w * x, h * y, 20, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = '#fff';
    ctx.font = `bold ${Math.floor(w * 0.02)}px sans-serif`;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    label.split('\n').forEach((line, li) => ctx.fillText(line, w * x, h * y + (li - 0.5) * 10));
  });

  ctx.fillStyle = '#555';
  ctx.font = `${Math.floor(w * 0.019)}px sans-serif`;
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText('Examples: TB skin test, contact dermatitis, graft rejection', w * 0.5, h * 0.95);
}

static drawHS4Sensitization(ctx, w, h) {
  const steps = [
    { label: 'Antigen (hapten)\ncontact', y: 0.1, color: '#8B0000' },
    { label: 'Langerhans cell\nprocessing', y: 0.28, color: '#DA70D6' },
    { label: 'Lymph node\nmigration', y: 0.46, color: '#8FBC8F' },
    { label: 'Th1 priming\n& memory', y: 0.64, color: '#FF6B35' },
    { label: 'Memory Th1\ncirculating', y: 0.82, color: '#20B2AA' },
  ];
  steps.forEach(({ label, y, color }, i) => {
    if (i > 0) {
      ctx.strokeStyle = '#aaa';
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(w * 0.5, h * (y - 0.1));
      ctx.lineTo(w * 0.5, h * (y - 0.01));
      ctx.stroke();
    }
    ctx.fillStyle = color;
    ctx.beginPath();
    ctx.arc(w * 0.5, h * y, 22, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = '#fff';
    ctx.font = `bold ${Math.floor(w * 0.022)}px sans-serif`;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    label.split('\n').forEach((line, li) => ctx.fillText(line, w * 0.5, h * y + (li - 0.5) * 11));
  });
}

static drawHS4Elicitation(ctx, w, h) {
  const steps = [
    { label: 'Re-exposure\nto antigen', y: 0.1, color: '#8B0000' },
    { label: 'Memory Th1\nreactivation', y: 0.28, color: '#FF6B35' },
    { label: 'IFN-γ, TNF-α\nIL-2 release', y: 0.46, color: '#DC143C' },
    { label: 'Macrophage\nactivation', y: 0.64, color: '#CD853F' },
    { label: 'Tissue damage\n48–72 h', y: 0.82, color: '#8B4513' },
  ];
  steps.forEach(({ label, y, color }, i) => {
    if (i > 0) {
      ctx.strokeStyle = '#aaa';
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(w * 0.5, h * (y - 0.1));
      ctx.lineTo(w * 0.5, h * (y - 0.01));
      ctx.stroke();
    }
    ctx.fillStyle = color;
    ctx.beginPath();
    ctx.arc(w * 0.5, h * y, 22, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = '#fff';
    ctx.font = `bold ${Math.floor(w * 0.022)}px sans-serif`;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    label.split('\n').forEach((line, li) => ctx.fillText(line, w * 0.5, h * y + (li - 0.5) * 11));
  });
}

// ─────────────────────────────────────────────────────────────────────────────

static drawAutoimmunity(ctx, x, y, width, height, stage) {
  ctx.save();
  ctx.translate(x, y);
  switch (stage) {
    case 'breakdown':
      this.drawAutoimmunityBreakdown(ctx, width, height);
      break;
    case 'self_attack':
      this.drawAutoimmunitySelfAttack(ctx, width, height);
      break;
    case 'examples':
      this.drawAutoimmunityExamples(ctx, width, height);
      break;
    case 'complete':
    default:
      this.drawAutoimmunityComplete(ctx, width, height);
      break;
  }
  ctx.restore();
}

static drawAutoimmunityComplete(ctx, w, h) {
  // Normal tolerance (left) → broken (center) → attack (right)

  // Tolerance zone
  ctx.fillStyle = 'rgba(0,128,0,0.1)';
  ctx.fillRect(0, 0, w * 0.3, h);
  ctx.fillStyle = '#006400';
  ctx.font = `bold ${Math.floor(w * 0.024)}px sans-serif`;
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText('Normal\nTolerance', w * 0.15, h * 0.12);

  // Treg
  ctx.fillStyle = '#3CB371';
  ctx.beginPath();
  ctx.arc(w * 0.15, h * 0.35, 20, 0, Math.PI * 2);
  ctx.fill();
  ctx.fillStyle = '#fff';
  ctx.font = `bold ${Math.floor(w * 0.022)}px sans-serif`;
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText('Treg', w * 0.15, h * 0.35);

  // Tolerance failure triggers
  ctx.fillStyle = 'rgba(220,20,60,0.1)';
  ctx.fillRect(w * 0.32, 0, w * 0.36, h);
  ctx.fillStyle = '#8B0000';
  ctx.font = `bold ${Math.floor(w * 0.022)}px sans-serif`;
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText('Tolerance\nFailure', w * 0.5, h * 0.12);

  const triggers = ['Genetic\nfactors', 'Molecular\nmimicry', 'Bystander\nactivation', 'Treg\ndefect'];
  triggers.forEach((t, i) => {
    ctx.fillStyle = '#DC143C';
    ctx.beginPath();
    ctx.arc(w * (0.36 + (i % 2) * 0.18), h * (0.32 + Math.floor(i / 2) * 0.22), 16, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = '#fff';
    ctx.font = `bold ${Math.floor(w * 0.018)}px sans-serif`;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    t.split('\n').forEach((line, li) => ctx.fillText(line, w * (0.36 + (i % 2) * 0.18), h * (0.32 + Math.floor(i / 2) * 0.22) + (li - 0.5) * 9));
  });

  // Self-attack zone
  ctx.fillStyle = 'rgba(139,0,0,0.1)';
  ctx.fillRect(w * 0.7, 0, w * 0.3, h);
  ctx.fillStyle = '#8B0000';
  ctx.font = `bold ${Math.floor(w * 0.022)}px sans-serif`;
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText('Autoimmune\nAttack', w * 0.85, h * 0.12);

  // Self tissue target
  ctx.fillStyle = '#DEB887';
  ctx.beginPath();
  ctx.arc(w * 0.85, h * 0.45, 26, 0, Math.PI * 2);
  ctx.fill();
  ctx.fillStyle = '#fff';
  ctx.font = `bold ${Math.floor(w * 0.022)}px sans-serif`;
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText('Self\ntissue', w * 0.85, h * 0.45);
  ctx.strokeStyle = '#FF0000';
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.moveTo(w * 0.78, h * 0.38);
  ctx.lineTo(w * 0.92, h * 0.52);
  ctx.moveTo(w * 0.92, h * 0.38);
  ctx.lineTo(w * 0.78, h * 0.52);
  ctx.stroke();

  // Examples
  ctx.fillStyle = '#555';
  ctx.font = `${Math.floor(w * 0.019)}px sans-serif`;
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText('T1D · MS · Rheumatoid arthritis · SLE · Hashimoto\'s', w * 0.5, h * 0.92);
}

static drawAutoimmunityBreakdown(ctx, w, h) {
  const mechanisms = [
    { label: 'Clonal deletion\nfailure', x: 0.2, y: 0.25, color: '#DC143C' },
    { label: 'Molecular\nmimicry', x: 0.6, y: 0.25, color: '#FF4500' },
    { label: 'Bystander\nactivation', x: 0.2, y: 0.6, color: '#FF6347' },
    { label: 'Treg\ndysfunction', x: 0.6, y: 0.6, color: '#8B0000' },
    { label: 'Epitope\nspreading', x: 0.4, y: 0.42, color: '#B22222' },
  ];
  mechanisms.forEach(({ label, x, y, color }) => {
    ctx.fillStyle = color;
    ctx.beginPath();
    ctx.arc(w * x, h * y, 26, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = '#fff';
    ctx.font = `bold ${Math.floor(w * 0.022)}px sans-serif`;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    label.split('\n').forEach((line, li) => ctx.fillText(line, w * x, h * y + (li - 0.5) * 11));
  });

  ctx.fillStyle = '#555';
  ctx.font = `${Math.floor(w * 0.022)}px sans-serif`;
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText('Central & Peripheral tolerance breakdown mechanisms', w * 0.5, h * 0.87);
}

static drawAutoimmunitySelfAttack(ctx, w, h) {
  // Autoreactive T/B cell → self tissue
  ctx.fillStyle = '#DC143C';
  ctx.beginPath();
  ctx.arc(w * 0.22, h * 0.45, 24, 0, Math.PI * 2);
  ctx.fill();
  ctx.fillStyle = '#fff';
  ctx.font = `bold ${Math.floor(w * 0.022)}px sans-serif`;
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText('Autoreactive\nT/B cell', w * 0.22, h * 0.45);

  ctx.strokeStyle = '#DC143C';
  ctx.lineWidth = 3;
  ctx.beginPath();
  ctx.moveTo(w * 0.34, h * 0.45);
  ctx.lineTo(w * 0.56, h * 0.45);
  ctx.stroke();
  ctx.fillStyle = '#DC143C';
  ctx.beginPath();
  ctx.moveTo(w * 0.56, h * 0.45);
  ctx.lineTo(w * 0.5, h * 0.42);
  ctx.lineTo(w * 0.5, h * 0.48);
  ctx.closePath();
  ctx.fill();

  // Self tissue target with X
  ctx.fillStyle = '#DEB887';
  ctx.beginPath();
  ctx.arc(w * 0.72, h * 0.45, 32, 0, Math.PI * 2);
  ctx.fill();
  ctx.strokeStyle = '#FF0000';
  ctx.lineWidth = 3;
  ctx.beginPath();
  ctx.moveTo(w * 0.63, h * 0.36);
  ctx.lineTo(w * 0.81, h * 0.54);
  ctx.moveTo(w * 0.81, h * 0.36);
  ctx.lineTo(w * 0.63, h * 0.54);
  ctx.stroke();

  ctx.fillStyle = '#555';
  ctx.font = `${Math.floor(w * 0.022)}px sans-serif`;
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText('Autoreactive lymphocytes attack self-tissue', w * 0.5, h * 0.78);
}

static drawAutoimmunityExamples(ctx, w, h) {
  const diseases = [
    { name: 'Type 1\nDiabetes', target: 'β cells', color: '#4169E1', x: 0.2, y: 0.28 },
    { name: 'Multiple\nSclerosis', target: 'Myelin', color: '#9400D3', x: 0.6, y: 0.28 },
    { name: 'Rheumatoid\nArthritis', target: 'Joints', color: '#DC143C', x: 0.2, y: 0.62 },
    { name: 'SLE', target: 'dsDNA', color: '#FF4500', x: 0.6, y: 0.62 },
  ];
  diseases.forEach(({ name, target, color, x, y }) => {
    ctx.fillStyle = color;
    ctx.beginPath();
    ctx.arc(w * x, h * y, 30, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = '#fff';
    ctx.font = `bold ${Math.floor(w * 0.022)}px sans-serif`;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    name.split('\n').forEach((line, li) => ctx.fillText(line, w * x, h * y + (li - 0.5) * 11));
    ctx.fillStyle = '#555';
    ctx.font = `${Math.floor(w * 0.018)}px sans-serif`;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(`Target: ${target}`, w * x, h * y + 40);
  });

  ctx.fillStyle = '#333';
  ctx.font = `bold ${Math.floor(w * 0.024)}px sans-serif`;
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText('Common Autoimmune Diseases', w * 0.5, h * 0.07);
}

// ─────────────────────────────────────────────────────────────────────────────

static drawImmunodeficiency(ctx, x, y, width, height, stage) {
  ctx.save();
  ctx.translate(x, y);
  switch (stage) {
    case 'primary':
      this.drawImmunodeficiencyPrimary(ctx, width, height);
      break;
    case 'secondary':
      this.drawImmunodeficiencySecondary(ctx, width, height);
      break;
    case 'hiv':
      this.drawImmunodeficiencyHIV(ctx, width, height);
      break;
    case 'complete':
    default:
      this.drawImmunodeficiencyComplete(ctx, width, height);
      break;
  }
  ctx.restore();
}

static drawImmunodeficiencyComplete(ctx, w, h) {
  // Divided: primary (left) / secondary (right)
  ctx.fillStyle = 'rgba(65,105,225,0.1)';
  ctx.fillRect(0, 0, w * 0.48, h);
  ctx.fillStyle = 'rgba(220,20,60,0.1)';
  ctx.fillRect(w * 0.52, 0, w * 0.48, h);

  ctx.fillStyle = '#4169E1';
  ctx.font = `bold ${Math.floor(w * 0.026)}px sans-serif`;
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText('Primary', w * 0.24, h * 0.07);
  ctx.fillText('(Genetic)', w * 0.24, h * 0.13);

  ctx.fillStyle = '#DC143C';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText('Secondary', w * 0.76, h * 0.07);
  ctx.fillText('(Acquired)', w * 0.76, h * 0.13);

  const primary = [
    { label: 'SCID', color: '#4169E1', y: 0.3 },
    { label: 'X-linked\nAgamma.', color: '#6495ED', y: 0.5 },
    { label: 'DiGeorge\nSyndrome', color: '#00BFFF', y: 0.7 },
  ];
  primary.forEach(({ label, color, y }) => {
    ctx.fillStyle = color;
    ctx.beginPath();
    ctx.arc(w * 0.24, h * y, 24, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = '#fff';
    ctx.font = `bold ${Math.floor(w * 0.022)}px sans-serif`;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    label.split('\n').forEach((line, li) => ctx.fillText(line, w * 0.24, h * y + (li - 0.5) * 11));
  });

  const secondary = [
    { label: 'HIV/AIDS', color: '#DC143C', y: 0.3 },
    { label: 'Malnutrition', color: '#FF6347', y: 0.5 },
    { label: 'Immuno-\nsuppressants', color: '#FF8C00', y: 0.7 },
  ];
  secondary.forEach(({ label, color, y }) => {
    ctx.fillStyle = color;
    ctx.beginPath();
    ctx.arc(w * 0.76, h * y, 24, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = '#fff';
    ctx.font = `bold ${Math.floor(w * 0.022)}px sans-serif`;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    label.split('\n').forEach((line, li) => ctx.fillText(line, w * 0.76, h * y + (li - 0.5) * 11));
  });
}

static drawImmunodeficiencyPrimary(ctx, w, h) {
  const disorders = [
    { label: 'SCID\n(T+B defect)', x: 0.25, y: 0.25, color: '#4169E1' },
    { label: 'XLA\n(B cell absent)', x: 0.75, y: 0.25, color: '#6495ED' },
    { label: 'DiGeorge\n(Thymus absent)', x: 0.25, y: 0.6, color: '#00BFFF' },
    { label: 'CGD\n(Phagocyte def.)', x: 0.75, y: 0.6, color: '#1E90FF' },
  ];
  ctx.fillStyle = '#333';
  ctx.font = `bold ${Math.floor(w * 0.026)}px sans-serif`;
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText('Primary (Congenital) Immunodeficiencies', w * 0.5, h * 0.07);

  disorders.forEach(({ label, x, y, color }) => {
    ctx.fillStyle = color;
    ctx.beginPath();
    ctx.arc(w * x, h * y, 30, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = '#fff';
    ctx.font = `bold ${Math.floor(w * 0.022)}px sans-serif`;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    label.split('\n').forEach((line, li) => ctx.fillText(line, w * x, h * y + (li - 0.5) * 11));
  });
}

static drawImmunodeficiencySecondary(ctx, w, h) {
  const causes = [
    { label: 'HIV/AIDS', x: 0.5, y: 0.18, color: '#DC143C' },
    { label: 'Malnutrition', x: 0.2, y: 0.4, color: '#FF8C00' },
    { label: 'Diabetes', x: 0.5, y: 0.4, color: '#FF6347' },
    { label: 'Chemo/\nRadiation', x: 0.8, y: 0.4, color: '#9400D3' },
    { label: 'Splenectomy', x: 0.3, y: 0.65, color: '#8B1A4A' },
    { label: 'Aging', x: 0.7, y: 0.65, color: '#A0522D' },
  ];
  ctx.fillStyle = '#333';
  ctx.font = `bold ${Math.floor(w * 0.026)}px sans-serif`;
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText('Secondary (Acquired) Immunodeficiencies', w * 0.5, h * 0.07);

  causes.forEach(({ label, x, y, color }) => {
    ctx.fillStyle = color;
    ctx.beginPath();
    ctx.arc(w * x, h * y, 24, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = '#fff';
    ctx.font = `bold ${Math.floor(w * 0.02)}px sans-serif`;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    label.split('\n').forEach((line, li) => ctx.fillText(line, w * x, h * y + (li - 0.5) * 10));
  });
}

static drawImmunodeficiencyHIV(ctx, w, h) {
  // HIV lifecycle attacking CD4 T cell
  const cx = w * 0.5, cy = h * 0.5;
  // CD4 T cell
  ctx.fillStyle = '#FF6B35';
  ctx.beginPath();
  ctx.arc(cx, cy, 36, 0, Math.PI * 2);
  ctx.fill();
  ctx.strokeStyle = '#CC3300';
  ctx.lineWidth = 2;
  ctx.stroke();
  ctx.fillStyle = '#fff';
  ctx.font = `bold ${Math.floor(w * 0.024)}px sans-serif`;
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText('CD4+ T cell', cx, cy);

  // HIV particles
  ctx.fillStyle = '#333';
  ctx.font = `bold ${Math.floor(w * 0.022)}px sans-serif`;
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText('HIV Life Cycle', cx, h * 0.06);

  const stages = [
    { label: 'Attach\ngp120/CD4', a: 0.0 },
    { label: 'Fusion\n& Entry', a: 1.05 },
    { label: 'Reverse\nTranscription', a: 2.1 },
    { label: 'Integration\n(Provirus)', a: 3.14 },
    { label: 'Replication\n& Budding', a: 4.2 },
    { label: 'New\nVirions', a: 5.25 },
  ];
  stages.forEach(({ label, a }) => {
    const sx = cx + Math.cos(a) * h * 0.36, sy = cy + Math.sin(a) * h * 0.36;
    ctx.fillStyle = '#8B0000';
    ctx.beginPath();
    ctx.arc(sx, sy, 18, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = '#fff';
    ctx.font = `bold ${Math.floor(w * 0.018)}px sans-serif`;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    label.split('\n').forEach((line, li) => ctx.fillText(line, sx, sy + (li - 0.5) * 9));
  });

  // CD4 decline arrow
  ctx.strokeStyle = '#DC143C';
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.moveTo(w * 0.08, h * 0.85);
  ctx.lineTo(w * 0.45, h * 0.85);
  ctx.stroke();
  ctx.fillStyle = '#DC143C';
  ctx.beginPath();
  ctx.moveTo(w * 0.45, h * 0.85);
  ctx.lineTo(w * 0.4, h * 0.82);
  ctx.lineTo(w * 0.4, h * 0.88);
  ctx.closePath();
  ctx.fill();
  ctx.fillStyle = '#DC143C';
  ctx.font = `${Math.floor(w * 0.02)}px sans-serif`;
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText('CD4 count ↓ → AIDS', w * 0.26, h * 0.93);
}

// ─────────────────────────────────────────────────────────────────────────────

static drawHerdImmunity(ctx, x, y, width, height, stage) {
  ctx.save();
  ctx.translate(x, y);
  switch (stage) {
    case 'no_immunity':
      this.drawHerdNoImmunity(ctx, width, height);
      break;
    case 'partial':
      this.drawHerdPartial(ctx, width, height);
      break;
    case 'threshold':
      this.drawHerdThreshold(ctx, width, height);
      break;
    case 'complete':
    default:
      this.drawHerdComplete(ctx, width, height);
      break;
  }
  ctx.restore();
}

static drawHerdComplete(ctx, w, h) {
  // Grid of people — mix of immune/susceptible/infected
  const cols = 10, rows = 5;
  const cw = w / (cols + 2), ch = h * 0.7 / (rows + 1);

  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      const px = w * 0.1 + c * cw + cw * 0.5;
      const py = h * 0.12 + r * ch + ch * 0.5;
      const idx = r * cols + c;
      // ~70% immune (gold), 10% infected (red), 20% susceptible (grey)
      let color, label;
      if (idx % 10 < 1) { color = '#DC143C'; label = 'I'; }
      else if (idx % 10 < 3) { color = '#aaa'; label = 'S'; }
      else { color = '#FFD700'; label = '✓'; }

      ctx.fillStyle = color;
      ctx.beginPath();
      ctx.arc(px, py, 13, 0, Math.PI * 2);
      ctx.fill();
      ctx.fillStyle = '#333';
      ctx.font = `bold ${Math.floor(w * 0.02)}px sans-serif`;
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText(label, px, py);
    }
  }

  // Legend
  [['#FFD700','Immune'], ['#aaa','Susceptible'], ['#DC143C','Infected']].forEach(([color, label], i) => {
    ctx.fillStyle = color;
    ctx.beginPath();
    ctx.arc(w * (0.15 + i * 0.28), h * 0.88, 8, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = '#333';
    ctx.font = `${Math.floor(w * 0.02)}px sans-serif`;
    ctx.textAlign = 'left';
    ctx.textBaseline = 'middle';
    ctx.fillText(label, w * (0.15 + i * 0.28) + 12, h * 0.88);
  });

  // Threshold label
  ctx.fillStyle = '#006400';
  ctx.font = `bold ${Math.floor(w * 0.022)}px sans-serif`;
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText('~70% immune → chain of transmission broken (herd immunity)', w * 0.5, h * 0.96);
}

static drawHerdNoImmunity(ctx, w, h) {
  // All susceptible, one infected → all get infected
  const cols = 8, rows = 4;
  const cw = w / (cols + 2), ch = h * 0.65 / (rows + 1);

  // Wave of infection arrows
  ctx.strokeStyle = 'rgba(220,20,60,0.3)';
  ctx.lineWidth = 1;
  for (let r = 0; r < rows; r++) {
    for (let c = 1; c < cols; c++) {
      const px1 = w * 0.12 + (c - 1) * cw + cw * 0.5;
      const px2 = w * 0.12 + c * cw + cw * 0.5;
      const py = h * 0.12 + r * ch + ch * 0.5;
      ctx.beginPath();
      ctx.moveTo(px1 + 12, py);
      ctx.lineTo(px2 - 12, py);
      ctx.stroke();
    }
  }

  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      const px = w * 0.12 + c * cw + cw * 0.5;
      const py = h * 0.12 + r * ch + ch * 0.5;
      const infected = (r === 0 && c === 0) || (r + c > 0);
      ctx.fillStyle = infected ? 'rgba(220,20,60,0.7)' : '#aaa';
      ctx.beginPath();
      ctx.arc(px, py, 13, 0, Math.PI * 2);
      ctx.fill();
    }
  }
  ctx.fillStyle = '#333';
  ctx.font = `bold ${Math.floor(w * 0.024)}px sans-serif`;
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText('0% immune — disease spreads freely', w * 0.5, h * 0.9);
}

static drawHerdPartial(ctx, w, h) {
  const cols = 8, rows = 4;
  const cw = w / (cols + 2), ch = h * 0.65 / (rows + 1);

  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      const px = w * 0.12 + c * cw + cw * 0.5;
      const py = h * 0.12 + r * ch + ch * 0.5;
      const idx = r * cols + c;
      let color;
      if (idx % 10 < 1) color = '#DC143C';
      else if (idx % 10 < 5) color = '#aaa';
      else color = '#FFD700';
      ctx.fillStyle = color;
      ctx.beginPath();
      ctx.arc(px, py, 13, 0, Math.PI * 2);
      ctx.fill();
    }
  }
  ctx.fillStyle = '#333';
  ctx.font = `bold ${Math.floor(w * 0.024)}px sans-serif`;
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText('~50% immune — disease still spreading, slower', w * 0.5, h * 0.9);
}

static drawHerdThreshold(ctx, w, h) {
  // R0 and Herd immunity threshold formula
  ctx.fillStyle = '#333';
  ctx.font = `bold ${Math.floor(w * 0.026)}px sans-serif`;
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText('Herd Immunity Threshold (HIT)', w * 0.5, h * 0.1);

  ctx.font = `${Math.floor(w * 0.038)}px sans-serif`;
  ctx.fillText('HIT = 1 − (1 / R₀)', w * 0.5, h * 0.32);

  // Bar chart of HIT for diseases
  const diseases = [
    { name: 'Measles\n(R₀≈15)', hit: 0.95 },
    { name: 'Polio\n(R₀≈6)', hit: 0.85 },
    { name: 'Flu\n(R₀≈3)', hit: 0.67 },
    { name: 'COVID\n(R₀≈2.5)', hit: 0.6 },
  ];
  const barW = w * 0.14, maxH = h * 0.28;
  diseases.forEach(({ name, hit }, i) => {
    const bx = w * (0.15 + i * 0.22), barH = hit * maxH;
    const by = h * 0.78 - barH;
    ctx.fillStyle = `hsl(${30 + i * 30},80%,50%)`;
    ctx.fillRect(bx, by, barW, barH);
    ctx.strokeStyle = '#333';
    ctx.lineWidth = 1;
    ctx.strokeRect(bx, by, barW, barH);
    ctx.fillStyle = '#333';
    ctx.font = `${Math.floor(w * 0.018)}px sans-serif`;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(`${Math.round(hit * 100)}%`, bx + barW / 2, by - 10);
    name.split('\n').forEach((line, li) => ctx.fillText(line, bx + barW / 2, h * 0.84 + li * 14));
  });
}

// ─────────────────────────────────────────────────────────────────────────────

static drawBloodTyping(ctx, x, y, width, height, stage) {
  ctx.save();
  ctx.translate(x, y);
  switch (stage) {
    case 'abo':
      this.drawBloodTypingABO(ctx, width, height);
      break;
    case 'rh':
      this.drawBloodTypingRh(ctx, width, height);
      break;
    case 'compatibility':
      this.drawBloodTypingCompatibility(ctx, width, height);
      break;
    case 'complete':
    default:
      this.drawBloodTypingComplete(ctx, width, height);
      break;
  }
  ctx.restore();
}

static drawBloodTypingComplete(ctx, w, h) {
  // ABO grid
  const types = [
    { type: 'A', antigen: 'A', antibody: 'Anti-B', color: '#DC143C' },
    { type: 'B', antigen: 'B', antibody: 'Anti-A', color: '#4169E1' },
    { type: 'AB', antigen: 'A&B', antibody: 'None', color: '#9400D3' },
    { type: 'O', antigen: 'None', antibody: 'Anti-A&B', color: '#228B22' },
  ];
  ctx.fillStyle = '#333';
  ctx.font = `bold ${Math.floor(w * 0.026)}px sans-serif`;
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText('ABO Blood Group System', w * 0.5, h * 0.06);

  types.forEach(({ type, antigen, antibody, color }, i) => {
    const tx = w * (0.15 + (i % 2) * 0.5), ty = h * (0.22 + Math.floor(i / 2) * 0.3);
    ctx.fillStyle = color;
    ctx.beginPath();
    ctx.arc(tx, ty, 28, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = '#fff';
    ctx.font = `bold ${Math.floor(w * 0.028)}px sans-serif`;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(`Type ${type}`, tx, ty - 8);
    ctx.font = `${Math.floor(w * 0.018)}px sans-serif`;
    ctx.fillText(`Ag: ${antigen}`, tx, ty + 4);
    ctx.fillText(`Ab: ${antibody}`, tx, ty + 15);
  });

  // Rh factor
  ctx.fillStyle = '#FF8C00';
  ctx.font = `bold ${Math.floor(w * 0.024)}px sans-serif`;
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText('Rh Factor: + (has D antigen) / − (lacks D antigen)', w * 0.5, h * 0.87);

  // Universal donor/receiver
  ctx.fillStyle = '#228B22';
  ctx.font = `bold ${Math.floor(w * 0.02)}px sans-serif`;
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText('O− = Universal Donor', w * 0.3, h * 0.95);
  ctx.fillStyle = '#9400D3';
  ctx.fillText('AB+ = Universal Receiver', w * 0.72, h * 0.95);
}

static drawBloodTypingABO(ctx, w, h) {
  const cx = w * 0.5, cy = h * 0.5;
  // RBC base
  ctx.fillStyle = '#B22222';
  ctx.beginPath();
  ctx.arc(cx, cy, 40, 0, Math.PI * 2);
  ctx.fill();
  ctx.fillStyle = 'rgba(0,0,0,0.2)';
  ctx.beginPath();
  ctx.arc(cx, cy, 18, 0, Math.PI * 2);
  ctx.fill();

  // Antigens on surface
  const antigenA = { color: '#DC143C', label: 'A' };
  const antigenB = { color: '#4169E1', label: 'B' };
  [[0.0, antigenA], [1.05, antigenA], [2.1, antigenA],
   [3.14, antigenB], [4.2, antigenB], [5.25, antigenB]].forEach(([a, ag]) => {
    ctx.fillStyle = ag.color;
    ctx.beginPath();
    ctx.arc(cx + Math.cos(a) * 40, cy + Math.sin(a) * 40, 9, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = '#fff';
    ctx.font = `bold ${Math.floor(w * 0.02)}px sans-serif`;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(ag.label, cx + Math.cos(a) * 40, cy + Math.sin(a) * 40);
  });
  ctx.fillStyle = '#9400D3';
  ctx.font = `bold ${Math.floor(w * 0.024)}px sans-serif`;
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText('Blood Type AB', cx, h * 0.88);
}

static drawBloodTypingRh(ctx, w, h) {
  // Two RBCs: Rh+ and Rh-
  [[0.28, '+', '#B22222', true], [0.72, '-', '#A0522D', false]].forEach(([xr, sign, color, hasD]) => {
    const cx = w * xr, cy = h * 0.45;
    ctx.fillStyle = color;
    ctx.beginPath();
    ctx.arc(cx, cy, 36, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = 'rgba(0,0,0,0.2)';
    ctx.beginPath();
    ctx.arc(cx, cy, 16, 0, Math.PI * 2);
    ctx.fill();
    if (hasD) {
      ctx.fillStyle = '#FFD700';
      for (let i = 0; i < 6; i++) {
        const a = (i / 6) * Math.PI * 2;
        ctx.beginPath();
        ctx.arc(cx + Math.cos(a) * 36, cy + Math.sin(a) * 36, 8, 0, Math.PI * 2);
        ctx.fill();
      }
    }
    ctx.fillStyle = '#fff';
    ctx.font = `bold ${Math.floor(w * 0.03)}px sans-serif`;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(`Rh${sign}`, cx, cy);
    ctx.fillStyle = '#333';
    ctx.font = `${Math.floor(w * 0.022)}px sans-serif`;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(hasD ? 'Has D antigen' : 'No D antigen', cx, h * 0.75);
  });
  ctx.fillStyle = '#555';
  ctx.font = `bold ${Math.floor(w * 0.024)}px sans-serif`;
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText('Rh (D) Blood Group System', w * 0.5, h * 0.08);
}

static drawBloodTypingCompatibility(ctx, w, h) {
  // Compatibility matrix header
  ctx.fillStyle = '#333';
  ctx.font = `bold ${Math.floor(w * 0.024)}px sans-serif`;
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText('Transfusion Compatibility', w * 0.5, h * 0.06);

  const types = ['O', 'A', 'B', 'AB'];
  const colors = ['#228B22', '#DC143C', '#4169E1', '#9400D3'];
  const cellW = w * 0.15, cellH = h * 0.14;
  const startX = w * 0.28, startY = h * 0.16;

  // Headers
  ctx.font = `bold ${Math.floor(w * 0.022)}px sans-serif`;
  types.forEach((t, i) => {
    ctx.fillStyle = colors[i];
    ctx.fillText(`Donor ${t}`, startX + i * cellW + cellW / 2, startY - 14);
    ctx.fillText(`Rec ${t}`, startX - 30, startY + i * cellH + cellH / 2);
  });

  // Matrix (O can donate to all; AB can receive from all)
  const matrix = [
    [1,1,1,1],
    [0,1,0,1],
    [0,0,1,1],
    [0,0,0,1],
  ];
  types.forEach((_, r) => {
    types.forEach((_, c) => {
      const mx = startX + c * cellW, my = startY + r * cellH;
      ctx.fillStyle = matrix[r][c] ? 'rgba(34,139,34,0.3)' : 'rgba(220,20,60,0.2)';
      ctx.fillRect(mx, my, cellW - 4, cellH - 4);
      ctx.strokeStyle = '#aaa';
      ctx.lineWidth = 1;
      ctx.strokeRect(mx, my, cellW - 4, cellH - 4);
      ctx.fillStyle = matrix[r][c] ? '#006400' : '#8B0000';
      ctx.font = `bold ${Math.floor(w * 0.022)}px sans-serif`;
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText(matrix[r][c] ? '✓' : '✗', mx + cellW / 2 - 2, my + cellH / 2 - 2);
    });
  });
}

// ─────────────────────────────────────────────────────────────────────────────

static drawAnaphylaxis(ctx, x, y, width, height, stage) {
  ctx.save();
  ctx.translate(x, y);
  switch (stage) {
    case 'trigger':
      this.drawAnaphylaxisTrigger(ctx, width, height);
      break;
    case 'systemic':
      this.drawAnaphylaxisSystemic(ctx, width, height);
      break;
    case 'treatment':
      this.drawAnaphylaxisTreatment(ctx, width, height);
      break;
    case 'complete':
    default:
      this.drawAnaphylaxisComplete(ctx, width, height);
      break;
  }
  ctx.restore();
}

static drawAnaphylaxisComplete(ctx, w, h) {
  // Trigger → massive mast cell/basophil degranulation → systemic effects
  const steps = [
    { label: 'Allergen\ntrigger', x: 0.5, y: 0.1, color: '#8B0000' },
    { label: 'IgE + Mast cell\ndegranulation', x: 0.5, y: 0.28, color: '#FF8C69' },
    { label: 'Massive\nHistamine', x: 0.5, y: 0.46, color: '#9400D3' },
  ];
  steps.forEach(({ label, x, y, color }, i) => {
    if (i > 0) {
      ctx.strokeStyle = '#DC143C';
      ctx.lineWidth = 2.5;
      ctx.beginPath();
      ctx.moveTo(w * steps[i-1].x, h * (steps[i-1].y + 0.06));
      ctx.lineTo(w * x, h * (y - 0.06));
      ctx.stroke();
    }
    ctx.fillStyle = color;
    ctx.beginPath();
    ctx.arc(w * x, h * y, 22, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = '#fff';
    ctx.font = `bold ${Math.floor(w * 0.022)}px sans-serif`;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    label.split('\n').forEach((line, li) => ctx.fillText(line, w * x, h * y + (li - 0.5) * 11));
  });

  // Systemic effects
  const effects = [
    { label: 'Vasodilation\nShock', x: 0.15, y: 0.7, color: '#FF4500' },
    { label: 'Broncho-\nspasm', x: 0.38, y: 0.7, color: '#DC143C' },
    { label: 'Urticaria\nAngioedema', x: 0.62, y: 0.7, color: '#9400D3' },
    { label: 'GI\nSymptoms', x: 0.85, y: 0.7, color: '#8B0000' },
  ];
  effects.forEach(({ label, x, y, color }) => {
    ctx.strokeStyle = '#aaa';
    ctx.lineWidth = 1.5;
    ctx.setLineDash([3, 3]);
    ctx.beginPath();
    ctx.moveTo(w * 0.5, h * 0.55);
    ctx.lineTo(w * x, h * y - 0.04 * h);
    ctx.stroke();
    ctx.setLineDash([]);
    ctx.fillStyle = color;
    ctx.beginPath();
    ctx.arc(w * x, h * y, 20, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = '#fff';
    ctx.font = `bold ${Math.floor(w * 0.019)}px sans-serif`;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    label.split('\n').forEach((line, li) => ctx.fillText(line, w * x, h * y + (li - 0.5) * 10));
  });

  // Treatment: epinephrine
  ctx.fillStyle = '#006400';
  ctx.beginPath();
  ctx.arc(w * 0.5, h * 0.92, 18, 0, Math.PI * 2);
  ctx.fill();
  ctx.fillStyle = '#fff';
  ctx.font = `bold ${Math.floor(w * 0.022)}px sans-serif`;
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText('Rx: Epinephrine', w * 0.5, h * 0.92);
}

static drawAnaphylaxisTrigger(ctx, w, h) {
  // Allergens
  const allergens = ['Peanuts', 'Bee\nvenom', 'Penicillin', 'Latex', 'Shellfish'];
  allergens.forEach((a, i) => {
    ctx.fillStyle = '#8B0000';
    ctx.beginPath();
    ctx.arc(w * (0.15 + i * 0.175), h * 0.25, 20, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = '#fff';
    ctx.font = `bold ${Math.floor(w * 0.018)}px sans-serif`;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    a.split('\n').forEach((line, li) => ctx.fillText(line, w * (0.15 + i * 0.175), h * 0.25 + (li - 0.5) * 9));
  });

  ctx.strokeStyle = '#aaa';
  ctx.lineWidth = 2;
  allergens.forEach((_, i) => {
    ctx.beginPath();
    ctx.moveTo(w * (0.15 + i * 0.175), h * 0.35);
    ctx.lineTo(w * 0.5, h * 0.55);
    ctx.stroke();
  });

  ctx.fillStyle = '#FF8C69';
  ctx.beginPath();
  ctx.arc(w * 0.5, h * 0.62, 30, 0, Math.PI * 2);
  ctx.fill();
  ctx.fillStyle = '#fff';
  ctx.font = `bold ${Math.floor(w * 0.024)}px sans-serif`;
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText('Sensitized\nMast Cell', w * 0.5, h * 0.62);
  ctx.fillStyle = '#555';
  ctx.font = `bold ${Math.floor(w * 0.022)}px sans-serif`;
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText('Common Anaphylaxis Triggers', w * 0.5, h * 0.08);
}

static drawAnaphylaxisSystemic(ctx, w, h) {
  const cx = w * 0.5, cy = h * 0.42;
  // Body silhouette (simplified oval)
  ctx.fillStyle = 'rgba(255,140,140,0.2)';
  ctx.strokeStyle = '#DC143C';
  ctx.lineWidth = 2.5;
  ctx.beginPath();
  ctx.ellipse(cx, cy, w * 0.28, h * 0.36, 0, 0, Math.PI * 2);
  ctx.fill();
  ctx.stroke();

  // Organ effects
  const organs = [
    { label: 'Airways\nswelling', x: 0.5, y: 0.22, color: '#DC143C' },
    { label: 'Heart\nrate↑', x: 0.3, y: 0.38, color: '#FF4500' },
    { label: 'Vessels\ndilate', x: 0.7, y: 0.38, color: '#FF6347' },
    { label: 'GI\ncramps', x: 0.5, y: 0.55, color: '#9400D3' },
    { label: 'Skin\nflush', x: 0.28, y: 0.58, color: '#FF8C00' },
  ];
  organs.forEach(({ label, x, y, color }) => {
    ctx.fillStyle = color;
    ctx.beginPath();
    ctx.arc(w * x, h * y, 16, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = '#fff';
    ctx.font = `bold ${Math.floor(w * 0.018)}px sans-serif`;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    label.split('\n').forEach((line, li) => ctx.fillText(line, w * x, h * y + (li - 0.5) * 9));
  });

  ctx.fillStyle = '#333';
  ctx.font = `bold ${Math.floor(w * 0.022)}px sans-serif`;
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText('Systemic anaphylactic effects', cx, h * 0.87);
}

static drawAnaphylaxisTreatment(ctx, w, h) {
  const treatments = [
    { label: 'Epinephrine\n(EpiPen) 1st', x: 0.5, y: 0.22, color: '#006400', priority: 1 },
    { label: 'Antihistamines\n(H1/H2)', x: 0.25, y: 0.48, color: '#4169E1', priority: 2 },
    { label: 'Corticosteroids\n(delay HS)', x: 0.75, y: 0.48, color: '#9370DB', priority: 2 },
    { label: 'IV fluids\n(volume restore)', x: 0.25, y: 0.73, color: '#20B2AA', priority: 3 },
    { label: 'O₂ /\nAirway mgmt', x: 0.75, y: 0.73, color: '#FF8C00', priority: 3 },
  ];
  ctx.fillStyle = '#333';
  ctx.font = `bold ${Math.floor(w * 0.026)}px sans-serif`;
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText('Anaphylaxis Treatment', w * 0.5, h * 0.07);

  treatments.forEach(({ label, x, y, color }) => {
    ctx.fillStyle = color;
    ctx.beginPath();
    ctx.arc(w * x, h * y, 26, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = '#fff';
    ctx.font = `bold ${Math.floor(w * 0.02)}px sans-serif`;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    label.split('\n').forEach((line, li) => ctx.fillText(line, w * x, h * y + (li - 0.5) * 11));
  });
}

// ─────────────────────────────────────────────────────────────────────────────

static drawSepsis(ctx, x, y, width, height, stage) {
  ctx.save();
  ctx.translate(x, y);
  switch (stage) {
    case 'infection':
      this.drawSepsisInfection(ctx, width, height);
      break;
    case 'sirs':
      this.drawSepsisSIRS(ctx, width, height);
      break;
    case 'organ_failure':
      this.drawSepsisOrganFailure(ctx, width, height);
      break;
    case 'complete':
    default:
      this.drawSepsisComplete(ctx, width, height);
      break;
  }
  ctx.restore();
}

static drawSepsisComplete(ctx, w, h) {
  const progression = [
    { label: 'Infection\n(Bacteria/Virus)', x: 0.5, y: 0.1, color: '#8B0000' },
    { label: 'SIRS\n(Systemic response)', x: 0.5, y: 0.26, color: '#FF4500' },
    { label: 'Sepsis\n(Organ dysfunction)', x: 0.5, y: 0.42, color: '#DC143C' },
    { label: 'Septic Shock\n(Hypotension)', x: 0.5, y: 0.58, color: '#8B0000' },
    { label: 'MODS\n(Multi-organ failure)', x: 0.5, y: 0.74, color: '#4A0000' },
  ];
  progression.forEach(({ label, x, y, color }, i) => {
    if (i > 0) {
      ctx.strokeStyle = '#DC143C';
      ctx.lineWidth = 2.5;
      ctx.beginPath();
      ctx.moveTo(w * progression[i-1].x, h * (progression[i-1].y + 0.06));
      ctx.lineTo(w * x, h * (y - 0.06));
      ctx.stroke();
      ctx.fillStyle = '#DC143C';
      ctx.beginPath();
      ctx.moveTo(w * x, h * (y - 0.06));
      ctx.lineTo(w * x - 5, h * (y - 0.1));
      ctx.lineTo(w * x + 5, h * (y - 0.1));
      ctx.closePath();
      ctx.fill();
    }
    ctx.fillStyle = color;
    ctx.beginPath();
    ctx.arc(w * x, h * y, 22, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = '#fff';
    ctx.font = `bold ${Math.floor(w * 0.02)}px sans-serif`;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    label.split('\n').forEach((line, li) => ctx.fillText(line, w * x, h * y + (li - 0.5) * 11));
  });

  // Cytokines on the side
  const cytokines = ['TNF-α', 'IL-1β', 'IL-6', 'IL-8'];
  cytokines.forEach((c, i) => {
    ctx.fillStyle = '#FF8C00';
    ctx.beginPath();
    ctx.arc(w * 0.82, h * (0.26 + i * 0.12), 14, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = '#fff';
    ctx.font = `bold ${Math.floor(w * 0.018)}px sans-serif`;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(c, w * 0.82, h * (0.26 + i * 0.12));
  });
  ctx.fillStyle = '#FF8C00';
  ctx.font = `${Math.floor(w * 0.018)}px sans-serif`;
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText('Cytokine\nstorm', w * 0.82, h * 0.18);

  ctx.fillStyle = '#555';
  ctx.font = `${Math.floor(w * 0.018)}px sans-serif`;
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText('Mortality risk increases with each stage', w * 0.5, h * 0.92);
}

static drawSepsisInfection(ctx, w, h) {
  // Pathogens entering bloodstream
  ctx.fillStyle = '#DEB887';
  ctx.fillRect(0, h * 0.42, w, h * 0.16);
  ctx.strokeStyle = '#C4A265';
  ctx.lineWidth = 2;
  ctx.strokeRect(0, h * 0.42, w, h * 0.16);
  ctx.fillStyle = '#8B6914';
  ctx.font = `${Math.floor(w * 0.022)}px sans-serif`;
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText('Bloodstream', w * 0.5, h * 0.5);

  // Pathogens
  const sources = [
    { label: 'Pneumonia', x: 0.15, y: 0.2 },
    { label: 'UTI', x: 0.4, y: 0.2 },
    { label: 'Wound', x: 0.65, y: 0.2 },
    { label: 'Meningitis', x: 0.88, y: 0.2 },
  ];
  sources.forEach(({ label, x, y }) => {
    ctx.fillStyle = '#8B0000';
    ctx.beginPath();
    ctx.arc(w * x, h * y, 16, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = '#fff';
    ctx.font = `bold ${Math.floor(w * 0.018)}px sans-serif`;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(label, w * x, h * y);
    ctx.strokeStyle = '#DC143C';
    ctx.lineWidth = 2;
    ctx.setLineDash([3, 3]);
    ctx.beginPath();
    ctx.moveTo(w * x, h * y + 16);
    ctx.lineTo(w * x, h * 0.42);
    ctx.stroke();
    ctx.setLineDash([]);
  });

  // Bacteremia → sepsis label
  ctx.fillStyle = '#DC143C';
  ctx.font = `bold ${Math.floor(w * 0.024)}px sans-serif`;
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText('Bacteremia / Viremia → Systemic spread', w * 0.5, h * 0.75);

  // PRR recognition
  ctx.fillStyle = '#FF8C00';
  ctx.beginPath();
  ctx.arc(w * 0.5, h * 0.87, 20, 0, Math.PI * 2);
  ctx.fill();
  ctx.fillStyle = '#fff';
  ctx.font = `bold ${Math.floor(w * 0.02)}px sans-serif`;
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText('PRR/TLR\nrecognition', w * 0.5, h * 0.87);
}

static drawSepsisSIRS(ctx, w, h) {
  const criteria = [
    { label: 'Temp\n>38°C or <36°C', x: 0.25, y: 0.3, color: '#FF4500' },
    { label: 'HR\n>90 bpm', x: 0.75, y: 0.3, color: '#DC143C' },
    { label: 'RR >20 or\nPaCO₂ <32', x: 0.25, y: 0.62, color: '#FF6347' },
    { label: 'WBC >12k\nor <4k', x: 0.75, y: 0.62, color: '#8B0000' },
  ];
  ctx.fillStyle = '#333';
  ctx.font = `bold ${Math.floor(w * 0.026)}px sans-serif`;
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText('SIRS Criteria (≥2 = SIRS)', w * 0.5, h * 0.08);

  criteria.forEach(({ label, x, y, color }) => {
    ctx.fillStyle = color;
    ctx.beginPath();
    ctx.arc(w * x, h * y, 30, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = '#fff';
    ctx.font = `bold ${Math.floor(w * 0.02)}px sans-serif`;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    label.split('\n').forEach((line, li) => ctx.fillText(line, w * x, h * y + (li - 0.5) * 11));
  });

  ctx.fillStyle = '#555';
  ctx.font = `${Math.floor(w * 0.02)}px sans-serif`;
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText('SIRS + confirmed infection = Sepsis', w * 0.5, h * 0.87);
}

static drawSepsisOrganFailure(ctx, w, h) {
  const organs = [
    { label: 'Lungs\nARDS', x: 0.2, y: 0.28, color: '#4169E1' },
    { label: 'Kidneys\nAKI', x: 0.5, y: 0.22, color: '#9400D3' },
    { label: 'Liver\nFailure', x: 0.8, y: 0.28, color: '#DAA520' },
    { label: 'Heart\nDysfunction', x: 0.2, y: 0.65, color: '#DC143C' },
    { label: 'Brain\nEncephalopathy', x: 0.5, y: 0.7, color: '#228B22' },
    { label: 'Coagulation\nDIC', x: 0.8, y: 0.65, color: '#8B0000' },
  ];
  ctx.fillStyle = '#333';
  ctx.font = `bold ${Math.floor(w * 0.026)}px sans-serif`;
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText('Multi-Organ Dysfunction (MODS)', w * 0.5, h * 0.07);

  organs.forEach(({ label, x, y, color }) => {
    ctx.fillStyle = color;
    ctx.beginPath();
    ctx.arc(w * x, h * y, 26, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = '#fff';
    ctx.font = `bold ${Math.floor(w * 0.02)}px sans-serif`;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    label.split('\n').forEach((line, li) => ctx.fillText(line, w * x, h * y + (li - 0.5) * 11));
  });

  // Mortality marker
  ctx.fillStyle = '#4A0000';
  ctx.font = `bold ${Math.floor(w * 0.022)}px sans-serif`;
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText('Mortality: 30–50% with ≥3 organ failures', w * 0.5, h * 0.92);
}

// ─────────────────────────────────────────────────────────────────────────────

static drawCytokineStorm(ctx, x, y, width, height, stage) {
  ctx.save();
  ctx.translate(x, y);
  switch (stage) {
    case 'trigger':
      this.drawCytokineStormTrigger(ctx, width, height);
      break;
    case 'amplification':
      this.drawCytokineStormAmplification(ctx, width, height);
      break;
    case 'damage':
      this.drawCytokineStormDamage(ctx, width, height);
      break;
    case 'complete':
    default:
      this.drawCytokineStormComplete(ctx, width, height);
      break;
  }
  ctx.restore();
}

static drawCytokineStormComplete(ctx, w, h) {
  // Central explosion of cytokines
  const cx = w * 0.5, cy = h * 0.45;

  // Radial burst background
  ctx.fillStyle = 'rgba(255,69,0,0.12)';
  ctx.beginPath();
  ctx.arc(cx, cy, h * 0.42, 0, Math.PI * 2);
  ctx.fill();

  // Trigger (top)
  ctx.fillStyle = '#8B0000';
  ctx.beginPath();
  ctx.arc(cx, h * 0.1, 18, 0, Math.PI * 2);
  ctx.fill();
  ctx.fillStyle = '#fff';
  ctx.font = `bold ${Math.floor(w * 0.022)}px sans-serif`;
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText('Trigger\n(Pathogen/CAR-T)', cx, h * 0.1);

  ctx.strokeStyle = '#DC143C';
  ctx.lineWidth = 2.5;
  ctx.beginPath();
  ctx.moveTo(cx, h * 0.17);
  ctx.lineTo(cx, h * 0.27);
  ctx.stroke();

  // Immune cell center
  ctx.fillStyle = '#FF4500';
  ctx.beginPath();
  ctx.arc(cx, cy, 28, 0, Math.PI * 2);
  ctx.fill();
  ctx.fillStyle = '#fff';
  ctx.font = `bold ${Math.floor(w * 0.022)}px sans-serif`;
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText('Hyper-\nactivated\nImmune', cx, cy);

  // Cytokine spikes radiating out
  const cytokines = [
    { label: 'TNF-α', a: 0 },
    { label: 'IL-1β', a: 0.7 },
    { label: 'IL-6', a: 1.4 },
    { label: 'IL-12', a: 2.1 },
    { label: 'IFN-γ', a: 2.8 },
    { label: 'IL-18', a: 3.5 },
    { label: 'MCP-1', a: 4.2 },
    { label: 'IL-8', a: 4.9 },
    { label: 'GM-CSF', a: 5.6 },
  ];
  cytokines.forEach(({ label, a }) => {
    const dist = h * 0.3;
    const ex = cx + Math.cos(a) * dist, ey = cy + Math.sin(a) * dist;
    ctx.strokeStyle = '#FF6347';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(cx + Math.cos(a) * 30, cy + Math.sin(a) * 30);
    ctx.lineTo(ex, ey);
    ctx.stroke();
    ctx.fillStyle = '#FF6347';
    ctx.beginPath();
    ctx.arc(ex, ey, 14, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = '#fff';
    ctx.font = `bold ${Math.floor(w * 0.018)}px sans-serif`;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(label, ex, ey);
  });

  // Tissue damage label
  ctx.fillStyle = '#4A0000';
  ctx.font = `bold ${Math.floor(w * 0.022)}px sans-serif`;
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText('→ Bystander tissue destruction', cx, h * 0.88);
  ctx.fillStyle = '#555';
  ctx.font = `${Math.floor(w * 0.018)}px sans-serif`;
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText('Seen in: COVID-19, HLH, CAR-T therapy, Sepsis', cx, h * 0.94);
}

static drawCytokineStormTrigger(ctx, w, h) {
  const triggers = [
    { label: 'SARS-CoV-2', x: 0.2, y: 0.25, color: '#8B0000' },
    { label: 'CAR-T\ntherapy', x: 0.5, y: 0.2, color: '#4169E1' },
    { label: 'Sepsis', x: 0.8, y: 0.25, color: '#DC143C' },
    { label: 'HLH', x: 0.2, y: 0.55, color: '#9400D3' },
    { label: 'Influenza', x: 0.5, y: 0.58, color: '#FF4500' },
    { label: 'Graft\nreaction', x: 0.8, y: 0.55, color: '#228B22' },
  ];
  ctx.fillStyle = '#333';
  ctx.font = `bold ${Math.floor(w * 0.026)}px sans-serif`;
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText('Cytokine Storm Triggers', w * 0.5, h * 0.07);

  triggers.forEach(({ label, x, y, color }) => {
    ctx.fillStyle = color;
    ctx.beginPath();
    ctx.arc(w * x, h * y, 24, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = '#fff';
    ctx.font = `bold ${Math.floor(w * 0.02)}px sans-serif`;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    label.split('\n').forEach((line, li) => ctx.fillText(line, w * x, h * y + (li - 0.5) * 10));

    ctx.strokeStyle = '#aaa';
    ctx.lineWidth = 1.5;
    ctx.setLineDash([3, 3]);
    ctx.beginPath();
    ctx.moveTo(w * x, h * y + 24);
    ctx.lineTo(w * 0.5, h * 0.82);
    ctx.stroke();
    ctx.setLineDash([]);
  });

  ctx.fillStyle = '#FF4500';
  ctx.beginPath();
  ctx.arc(w * 0.5, h * 0.85, 18, 0, Math.PI * 2);
  ctx.fill();
  ctx.fillStyle = '#fff';
  ctx.font = `bold ${Math.floor(w * 0.02)}px sans-serif`;
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText('Cytokine\nStorm', w * 0.5, h * 0.85);
}

static drawCytokineStormAmplification(ctx, w, h) {
  // Positive feedback loop diagram
  const cx = w * 0.5, cy = h * 0.48;

  // Loop circle
  ctx.strokeStyle = 'rgba(255,69,0,0.4)';
  ctx.lineWidth = 3;
  ctx.setLineDash([]);
  ctx.beginPath();
  ctx.arc(cx, cy, h * 0.3, 0, Math.PI * 2);
  ctx.stroke();

  // Nodes on loop
  const nodes = [
    { label: 'Macrophage\nactivation', a: -Math.PI / 2, color: '#CD853F' },
    { label: 'Cytokine\nrelease', a: Math.PI / 6, color: '#FF4500' },
    { label: 'More immune\ncell recruit', a: Math.PI * 5 / 6, color: '#4169E1' },
  ];
  nodes.forEach(({ label, a, color }, i) => {
    const nx = cx + Math.cos(a) * h * 0.3, ny = cy + Math.sin(a) * h * 0.3;
    ctx.fillStyle = color;
    ctx.beginPath();
    ctx.arc(nx, ny, 24, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = '#fff';
    ctx.font = `bold ${Math.floor(w * 0.02)}px sans-serif`;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    label.split('\n').forEach((line, li) => ctx.fillText(line, nx, ny + (li - 0.5) * 10));

    // Arrow along loop
    const arrowA = a + 0.8;
    const ax = cx + Math.cos(arrowA) * h * 0.3, ay = cy + Math.sin(arrowA) * h * 0.3;
    ctx.fillStyle = '#FF4500';
    ctx.beginPath();
    ctx.moveTo(ax, ay);
    ctx.lineTo(ax + Math.cos(arrowA + Math.PI / 2) * 8, ay + Math.sin(arrowA + Math.PI / 2) * 8);
    ctx.lineTo(ax - Math.cos(arrowA + Math.PI / 2) * 8, ay - Math.sin(arrowA + Math.PI / 2) * 8);
    ctx.closePath();
    ctx.fill();
  });

  // Center label
  ctx.fillStyle = '#333';
  ctx.font = `bold ${Math.floor(w * 0.022)}px sans-serif`;
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText('Positive\nFeedback\nLoop', cx, cy);
}

static drawCytokineStormDamage(ctx, w, h) {
  const damage = [
    { label: 'Lung injury\nARDS', x: 0.2, y: 0.28, color: '#4169E1' },
    { label: 'Liver\ndamage', x: 0.55, y: 0.22, color: '#DAA520' },
    { label: 'Kidney\nfailure', x: 0.82, y: 0.32, color: '#9400D3' },
    { label: 'Coagulopathy\nDIC', x: 0.2, y: 0.65, color: '#8B0000' },
    { label: 'Cardiovascular\ncollapse', x: 0.55, y: 0.7, color: '#DC143C' },
    { label: 'Neuro-\nlogical', x: 0.82, y: 0.65, color: '#228B22' },
  ];
  ctx.fillStyle = '#333';
  ctx.font = `bold ${Math.floor(w * 0.024)}px sans-serif`;
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText('Cytokine Storm: Tissue Damage', w * 0.5, h * 0.07);

  damage.forEach(({ label, x, y, color }) => {
    ctx.fillStyle = color;
    ctx.beginPath();
    ctx.arc(w * x, h * y, 26, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = '#fff';
    ctx.font = `bold ${Math.floor(w * 0.02)}px sans-serif`;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    label.split('\n').forEach((line, li) => ctx.fillText(line, w * x, h * y + (li - 0.5) * 11));
  });

  ctx.fillStyle = '#555';
  ctx.font = `${Math.floor(w * 0.02)}px sans-serif`;
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText('Treatment: Corticosteroids, IL-6 blockers (tocilizumab), JAK inhibitors', w * 0.5, h * 0.9);
}

// ─────────────────────────────────────────────────────────────────────────────

static drawLymphNodeActivation(ctx, x, y, width, height, stage) {
  ctx.save();
  ctx.translate(x, y);
  switch (stage) {
    case 'antigen_arrival':
      this.drawLNAntigenArrival(ctx, width, height);
      break;
    case 'tcell_zone':
      this.drawLNTcellZone(ctx, width, height);
      break;
    case 'bcell_zone':
      this.drawLNBcellZone(ctx, width, height);
      break;
    case 'complete':
    default:
      this.drawLymphNodeActivationComplete(ctx, width, height);
      break;
  }
  ctx.restore();
}

static drawLymphNodeActivationComplete(ctx, w, h) {
  // LN outline (kidney shape)
  ctx.fillStyle = '#F5DEB3';
  ctx.beginPath();
  ctx.moveTo(w * 0.3, h * 0.08);
  ctx.bezierCurveTo(w * 0.85, h * 0.05, w * 0.98, h * 0.42, w * 0.82, h * 0.88);
  ctx.bezierCurveTo(w * 0.5, h * 0.98, w * 0.1, h * 0.85, w * 0.3, h * 0.08);
  ctx.closePath();
  ctx.fill();
  ctx.strokeStyle = '#D2B48C';
  ctx.lineWidth = 2.5;
  ctx.stroke();

  // Subcapsular sinus (antigen entry)
  ctx.fillStyle = 'rgba(139,0,0,0.2)';
  ctx.beginPath();
  ctx.moveTo(w * 0.3, h * 0.08);
  ctx.bezierCurveTo(w * 0.85, h * 0.05, w * 0.98, h * 0.42, w * 0.82, h * 0.88);
  ctx.bezierCurveTo(w * 0.75, h * 0.92, w * 0.6, h * 0.9, w * 0.55, h * 0.82);
  ctx.bezierCurveTo(w * 0.88, h * 0.42, w * 0.76, h * 0.1, w * 0.3, h * 0.08);
  ctx.closePath();
  ctx.fill();

  // B cell follicles (cortex)
  ctx.fillStyle = 'rgba(100,149,237,0.55)';
  ctx.strokeStyle = '#4169E1';
  ctx.lineWidth = 1.5;
  [[0.55, 0.22], [0.7, 0.35], [0.58, 0.48]].forEach(([fx, fy]) => {
    ctx.beginPath();
    ctx.arc(w * fx, h * fy, h * 0.1, 0, Math.PI * 2);
    ctx.fill();
    ctx.stroke();
    // Germinal center
    ctx.fillStyle = 'rgba(173,216,230,0.6)';
    ctx.beginPath();
    ctx.arc(w * fx, h * fy, h * 0.055, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = 'rgba(100,149,237,0.55)';
  });
  ctx.fillStyle = '#4169E1';
  ctx.font = `bold ${Math.floor(w * 0.022)}px sans-serif`;
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText('B zone\n(follicles)', w * 0.63, h * 0.35);

  // T cell paracortex
  ctx.fillStyle = 'rgba(255,140,0,0.3)';
  ctx.beginPath();
  ctx.ellipse(w * 0.42, h * 0.58, w * 0.14, h * 0.2, 0, 0, Math.PI * 2);
  ctx.fill();
  ctx.fillStyle = '#FF8C00';
  ctx.font = `bold ${Math.floor(w * 0.02)}px sans-serif`;
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText('T zone\n(paracortex)', w * 0.42, h * 0.58);

  // Medulla
  ctx.fillStyle = 'rgba(222,184,135,0.5)';
  ctx.beginPath();
  ctx.ellipse(w * 0.38, h * 0.78, w * 0.1, h * 0.1, 0, 0, Math.PI * 2);
  ctx.fill();
  ctx.fillStyle = '#8B6914';
  ctx.font = `${Math.floor(w * 0.018)}px sans-serif`;
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText('Medulla', w * 0.38, h * 0.78);

  // Afferent vessels
  ctx.strokeStyle = '#8FBC8F';
  ctx.lineWidth = 3;
  [[0.62, 0.05], [0.82, 0.12]].forEach(([vx, vy]) => {
    ctx.beginPath();
    ctx.moveTo(w * vx, h * vy);
    ctx.lineTo(w * vx * 0.88, h * (vy + 0.07));
    ctx.stroke();
  });

  // Efferent vessel (hilum)
  ctx.strokeStyle = '#3CB371';
  ctx.lineWidth = 4;
  ctx.beginPath();
  ctx.moveTo(w * 0.28, h * 0.52);
  ctx.lineTo(w * 0.08, h * 0.55);
  ctx.stroke();

  // DCs in paracortex
  ctx.fillStyle = '#DA70D6';
  [[0.35, 0.48], [0.45, 0.65]].forEach(([dx, dy]) => {
    ctx.beginPath();
    ctx.arc(w * dx, h * dy, 8, 0, Math.PI * 2);
    ctx.fill();
    for (let i = 0; i < 5; i++) {
      const a = (i / 5) * Math.PI * 2;
      ctx.strokeStyle = '#DA70D6';
      ctx.lineWidth = 1.5;
      ctx.beginPath();
      ctx.moveTo(w * dx + Math.cos(a) * 8, h * dy + Math.sin(a) * 8);
      ctx.lineTo(w * dx + Math.cos(a) * 16, h * dy + Math.sin(a) * 16);
      ctx.stroke();
    }
  });
}

static drawLNAntigenArrival(ctx, w, h) {
  // Afferent lymph vessel bringing antigen
  ctx.strokeStyle = '#8FBC8F';
  ctx.lineWidth = 16;
  ctx.lineCap = 'round';
  ctx.beginPath();
  ctx.moveTo(w * 0.12, h * 0.1);
  ctx.bezierCurveTo(w * 0.2, h * 0.3, w * 0.15, h * 0.45, w * 0.3, h * 0.5);
  ctx.stroke();

  // Antigen particles in vessel
  ctx.fillStyle = '#8B0000';
  [[0.12, 0.12], [0.15, 0.22], [0.18, 0.32], [0.22, 0.42]].forEach(([px, py]) => {
    ctx.beginPath();
    ctx.arc(w * px, h * py, 6, 0, Math.PI * 2);
    ctx.fill();
  });

  // LN outline
  ctx.fillStyle = '#F5DEB3';
  ctx.beginPath();
  ctx.ellipse(w * 0.62, h * 0.55, w * 0.3, h * 0.38, 0, 0, Math.PI * 2);
  ctx.fill();
  ctx.strokeStyle = '#D2B48C';
  ctx.lineWidth = 2;
  ctx.stroke();

  // Subcapsular sinus antigen spread
  ctx.fillStyle = 'rgba(139,0,0,0.15)';
  ctx.beginPath();
  ctx.ellipse(w * 0.62, h * 0.55, w * 0.28, h * 0.35, 0, 0, Math.PI * 2);
  ctx.fill();

  // Macrophage and DC in sinus
  [[0.5, 0.35], [0.72, 0.38]].forEach(([mx, my]) => {
    ctx.fillStyle = '#CD853F';
    ctx.beginPath();
    ctx.arc(w * mx, h * my, 12, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = '#fff';
    ctx.font = `bold ${Math.floor(w * 0.018)}px sans-serif`;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText('Mφ', w * mx, h * my);
  });

  ctx.fillStyle = '#555';
  ctx.font = `bold ${Math.floor(w * 0.022)}px sans-serif`;
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText('Antigen arrives via afferent lymphatics', w * 0.55, h * 0.9);
}

static drawLNTcellZone(ctx, w, h) {
  const cx = w * 0.5, cy = h * 0.5;
  // Paracortex background
  ctx.fillStyle = 'rgba(255,140,0,0.15)';
  ctx.beginPath();
  ctx.ellipse(cx, cy, w * 0.4, h * 0.38, 0, 0, Math.PI * 2);
  ctx.fill();
  ctx.strokeStyle = '#FF8C00';
  ctx.lineWidth = 2;
  ctx.stroke();

  // DC presenting
  ctx.fillStyle = '#DA70D6';
  ctx.beginPath();
  ctx.arc(w * 0.38, h * 0.4, 22, 0, Math.PI * 2);
  ctx.fill();
  ctx.fillStyle = '#fff';
  ctx.font = `bold ${Math.floor(w * 0.022)}px sans-serif`;
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText('DC', w * 0.38, h * 0.4);
  for (let i = 0; i < 6; i++) {
    const a = (i / 6) * Math.PI * 2;
    ctx.strokeStyle = '#DA70D6';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(w * 0.38 + Math.cos(a) * 22, h * 0.4 + Math.sin(a) * 22);
    ctx.lineTo(w * 0.38 + Math.cos(a) * 34, h * 0.4 + Math.sin(a) * 34);
    ctx.stroke();
  }

  // Naive T cells scanning
  [[0.55, 0.3], [0.65, 0.5], [0.55, 0.68], [0.38, 0.62]].forEach(([tx, ty]) => {
    ctx.fillStyle = '#FF6B35';
    ctx.beginPath();
    ctx.arc(w * tx, h * ty, 14, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = '#fff';
    ctx.font = `bold ${Math.floor(w * 0.018)}px sans-serif`;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText('T', w * tx, h * ty);
  });

  // Activated T (gold)
  ctx.fillStyle = '#FFD700';
  ctx.beginPath();
  ctx.arc(w * 0.5, h * 0.45, 18, 0, Math.PI * 2);
  ctx.fill();
  ctx.strokeStyle = '#FF8C00';
  ctx.lineWidth = 2.5;
  ctx.stroke();
  ctx.fillStyle = '#333';
  ctx.font = `bold ${Math.floor(w * 0.02)}px sans-serif`;
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText('Activated\nT', w * 0.5, h * 0.45);

  ctx.fillStyle = '#555';
  ctx.font = `bold ${Math.floor(w * 0.022)}px sans-serif`;
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText('Paracortex: T cell activation zone', w * 0.5, h * 0.88);
}

static drawLNBcellZone(ctx, w, h) {
  const cx = w * 0.5, cy = h * 0.48;
  // Primary follicle
  ctx.fillStyle = 'rgba(100,149,237,0.25)';
  ctx.strokeStyle = '#4169E1';
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.arc(cx, cy, h * 0.35, 0, Math.PI * 2);
  ctx.fill();
  ctx.stroke();

  // Germinal center
  ctx.fillStyle = 'rgba(173,216,230,0.55)';
  ctx.strokeStyle = '#87CEEB';
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.arc(cx, cy, h * 0.2, 0, Math.PI * 2);
  ctx.fill();
  ctx.stroke();

  // B cells in mantle
  for (let i = 0; i < 8; i++) {
    const a = (i / 8) * Math.PI * 2;
    const bx = cx + Math.cos(a) * h * 0.27, by = cy + Math.sin(a) * h * 0.27;
    ctx.fillStyle = '#1E90FF';
    ctx.beginPath();
    ctx.arc(bx, by, 10, 0, Math.PI * 2);
    ctx.fill();
  }

  // GC B cells (centroblasts/centrocytes)
  for (let i = 0; i < 5; i++) {
    const a = (i / 5) * Math.PI * 2;
    const bx = cx + Math.cos(a) * h * 0.12, by = cy + Math.sin(a) * h * 0.12;
    ctx.fillStyle = '#00BFFF';
    ctx.beginPath();
    ctx.arc(bx, by, 9, 0, Math.PI * 2);
    ctx.fill();
  }

  // FDC in center
  ctx.fillStyle = '#FFD700';
  ctx.beginPath();
  ctx.arc(cx, cy, 12, 0, Math.PI * 2);
  ctx.fill();
  ctx.fillStyle = '#333';
  ctx.font = `bold ${Math.floor(w * 0.018)}px sans-serif`;
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText('FDC', cx, cy);

  ctx.fillStyle = '#555';
  ctx.font = `bold ${Math.floor(w * 0.022)}px sans-serif`;
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText('B cell follicle: Somatic hypermutation & affinity maturation', w * 0.5, h * 0.9);
}

// ─────────────────────────────────────────────────────────────────────────────

static drawGerminalCenterReaction(ctx, x, y, width, height, stage) {
  ctx.save();
  ctx.translate(x, y);
  switch (stage) {
    case 'entry':
      this.drawGCEntry(ctx, width, height);
      break;
    case 'dark_zone':
      this.drawGCDarkZone(ctx, width, height);
      break;
    case 'light_zone':
      this.drawGCLightZone(ctx, width, height);
      break;
    case 'output':
      this.drawGCOutput(ctx, width, height);
      break;
    case 'complete':
    default:
      this.drawGerminalCenterComplete(ctx, width, height);
      break;
  }
  ctx.restore();
}

static drawGerminalCenterComplete(ctx, w, h) {
  const cx = w * 0.5, cy = h * 0.5;

  // Dark zone (top half)
  ctx.fillStyle = 'rgba(50,50,120,0.2)';
  ctx.beginPath();
  ctx.ellipse(cx, cy - h * 0.06, w * 0.38, h * 0.3, 0, Math.PI, 0, true);
  ctx.fill();
  ctx.fillStyle = '#333';
  ctx.font = `bold ${Math.floor(w * 0.022)}px sans-serif`;
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText('Dark Zone', cx, cy - h * 0.32);

  // Centroblasts (dividing B cells in dark zone)
  [[0.38, 0.28], [0.5, 0.22], [0.62, 0.28], [0.44, 0.38], [0.56, 0.38]].forEach(([bx, by]) => {
    ctx.fillStyle = '#4169E1';
    ctx.beginPath();
    ctx.arc(w * bx, h * by, 11, 0, Math.PI * 2);
    ctx.fill();
    // Division (dumbbell)
    ctx.strokeStyle = '#6495ED';
    ctx.lineWidth = 1.5;
    ctx.beginPath();
    ctx.moveTo(w * bx - 6, h * by);
    ctx.lineTo(w * bx + 6, h * by);
    ctx.stroke();
  });
  ctx.fillStyle = '#4169E1';
  ctx.font = `${Math.floor(w * 0.018)}px sans-serif`;
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText('Centroblasts\n(SHM + division)', cx, cy - h * 0.15);

  // Light zone (bottom half)
  ctx.fillStyle = 'rgba(173,216,230,0.3)';
  ctx.beginPath();
  ctx.ellipse(cx, cy + h * 0.06, w * 0.38, h * 0.3, 0, 0, Math.PI);
  ctx.fill();
  ctx.fillStyle = '#333';
  ctx.font = `bold ${Math.floor(w * 0.022)}px sans-serif`;
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText('Light Zone', cx, cy + h * 0.33);

  // FDC with antigen
  ctx.fillStyle = '#FFD700';
  ctx.beginPath();
  ctx.arc(cx, cy + h * 0.12, 14, 0, Math.PI * 2);
  ctx.fill();
  ctx.fillStyle = '#333';
  ctx.font = `bold ${Math.floor(w * 0.018)}px sans-serif`;
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText('FDC', cx, cy + h * 0.12);

  // Centrocytes competing
  [[0.35, 0.65], [0.5, 0.7], [0.65, 0.65], [0.42, 0.78], [0.58, 0.78]].forEach(([bx, by]) => {
    ctx.fillStyle = '#00BFFF';
    ctx.beginPath();
    ctx.arc(w * bx, h * by, 10, 0, Math.PI * 2);
    ctx.fill();
  });
  ctx.fillStyle = '#00BFFF';
  ctx.font = `${Math.floor(w * 0.018)}px sans-serif`;
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText('Centrocytes\n(affinity selection)', cx, cy + h * 0.18);

  // Outputs
  ctx.strokeStyle = '#aaa';
  ctx.lineWidth = 2;
  // Plasma cell output
  ctx.beginPath();
  ctx.moveTo(w * 0.18, h * 0.68);
  ctx.lineTo(w * 0.1, h * 0.75);
  ctx.stroke();
  ctx.fillStyle = '#4682B4';
  ctx.beginPath();
  ctx.arc(w * 0.08, h * 0.78, 14, 0, Math.PI * 2);
  ctx.fill();
  ctx.fillStyle = '#fff';
  ctx.font = `bold ${Math.floor(w * 0.018)}px sans-serif`;
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText('Plasma', w * 0.08, h * 0.78);

  // Memory B output
  ctx.strokeStyle = '#aaa';
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.moveTo(w * 0.82, h * 0.68);
  ctx.lineTo(w * 0.9, h * 0.75);
  ctx.stroke();
  ctx.fillStyle = '#20B2AA';
  ctx.beginPath();
  ctx.arc(w * 0.92, h * 0.78, 14, 0, Math.PI * 2);
  ctx.fill();
  ctx.fillStyle = '#fff';
  ctx.font = `bold ${Math.floor(w * 0.018)}px sans-serif`;
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText('Memory\nB', w * 0.92, h * 0.78);
}

static drawGCEntry(ctx, w, h) {
  const steps = [
    { label: 'Antigen\nactivation', y: 0.1, color: '#8B0000' },
    { label: 'Th cell\nco-stimulation', y: 0.28, color: '#FF6B35' },
    { label: 'B cell\nproliferates', y: 0.46, color: '#1E90FF' },
    { label: 'GC\nfoundation', y: 0.64, color: '#4169E1' },
    { label: 'SHM begins', y: 0.82, color: '#9400D3' },
  ];
  steps.forEach(({ label, y, color }, i) => {
    if (i > 0) {
      ctx.strokeStyle = '#aaa'; ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(w * 0.5, h * (y - 0.1)); ctx.lineTo(w * 0.5, h * (y - 0.01));
      ctx.stroke();
    }
    ctx.fillStyle = color;
    ctx.beginPath(); ctx.arc(w * 0.5, h * y, 22, 0, Math.PI * 2); ctx.fill();
    ctx.fillStyle = '#fff';
    ctx.font = `bold ${Math.floor(w * 0.022)}px sans-serif`;
    ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
    label.split('\n').forEach((line, li) => ctx.fillText(line, w * 0.5, h * y + (li - 0.5) * 11));
  });
}

static drawGCDarkZone(ctx, w, h) {
  ctx.fillStyle = 'rgba(30,30,80,0.15)';
  ctx.fillRect(0, 0, w, h);
  ctx.fillStyle = '#333';
  ctx.font = `bold ${Math.floor(w * 0.026)}px sans-serif`;
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText('Dark Zone — Centroblasts', w * 0.5, h * 0.1);

  // SHM process
  const shm = [
    { label: 'Rapid\nproliferation', x: 0.25, y: 0.35, color: '#4169E1' },
    { label: 'AID enzyme\nactivation', x: 0.65, y: 0.35, color: '#9400D3' },
    { label: 'Ig variable\nregion mutation', x: 0.25, y: 0.65, color: '#7B00CC' },
    { label: 'Random\nmutations', x: 0.65, y: 0.65, color: '#DC143C' },
  ];
  shm.forEach(({ label, x, y, color }) => {
    ctx.fillStyle = color;
    ctx.beginPath(); ctx.arc(w * x, h * y, 26, 0, Math.PI * 2); ctx.fill();
    ctx.fillStyle = '#fff';
    ctx.font = `bold ${Math.floor(w * 0.02)}px sans-serif`;
    ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
    label.split('\n').forEach((line, li) => ctx.fillText(line, w * x, h * y + (li - 0.5) * 11));
  });

  ctx.fillStyle = '#555';
  ctx.font = `${Math.floor(w * 0.02)}px sans-serif`;
  ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
  ctx.fillText('~10⁶-fold mutation rate vs normal → diverse BCRs', w * 0.5, h * 0.88);
}

static drawGCLightZone(ctx, w, h) {
  ctx.fillStyle = 'rgba(173,216,230,0.2)';
  ctx.fillRect(0, 0, w, h);
  ctx.fillStyle = '#333';
  ctx.font = `bold ${Math.floor(w * 0.026)}px sans-serif`;
  ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
  ctx.fillText('Light Zone — Affinity Selection', w * 0.5, h * 0.08);

  // FDC with antigen
  ctx.fillStyle = '#FFD700';
  ctx.beginPath(); ctx.arc(w * 0.5, h * 0.35, 24, 0, Math.PI * 2); ctx.fill();
  ctx.fillStyle = '#333';
  ctx.font = `bold ${Math.floor(w * 0.022)}px sans-serif`;
  ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
  ctx.fillText('FDC+Ag', w * 0.5, h * 0.35);

  // High affinity → survives
  ctx.fillStyle = '#228B22';
  ctx.beginPath(); ctx.arc(w * 0.28, h * 0.6, 20, 0, Math.PI * 2); ctx.fill();
  ctx.fillStyle = '#fff';
  ctx.font = `bold ${Math.floor(w * 0.02)}px sans-serif`;
  ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
  ctx.fillText('High\naffinity\n✓', w * 0.28, h * 0.6);

  // Low affinity → apoptosis
  ctx.fillStyle = 'rgba(139,0,0,0.5)';
  ctx.beginPath(); ctx.arc(w * 0.72, h * 0.6, 20, 0, Math.PI * 2); ctx.fill();
  ctx.strokeStyle = '#FF0000';
  ctx.lineWidth = 2.5;
  ctx.beginPath();
  ctx.moveTo(w * 0.65, h * 0.53); ctx.lineTo(w * 0.79, h * 0.67);
  ctx.moveTo(w * 0.79, h * 0.53); ctx.lineTo(w * 0.65, h * 0.67);
  ctx.stroke();
  ctx.fillStyle = '#555';
  ctx.font = `${Math.floor(w * 0.018)}px sans-serif`;
  ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
  ctx.fillText('Low\naffinity\n→ apoptosis', w * 0.72, h * 0.6);

  ctx.strokeStyle = '#aaa'; ctx.lineWidth = 2;
  ctx.beginPath(); ctx.moveTo(w * 0.44, h * 0.45); ctx.lineTo(w * 0.3, h * 0.52); ctx.stroke();
  ctx.beginPath(); ctx.moveTo(w * 0.56, h * 0.45); ctx.lineTo(w * 0.7, h * 0.52); ctx.stroke();

  ctx.fillStyle = '#555';
  ctx.font = `${Math.floor(w * 0.02)}px sans-serif`;
  ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
  ctx.fillText('Survivors re-enter dark zone or exit as plasma/memory B', w * 0.5, h * 0.88);
}

static drawGCOutput(ctx, w, h) {
  ctx.fillStyle = '#333';
  ctx.font = `bold ${Math.floor(w * 0.026)}px sans-serif`;
  ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
  ctx.fillText('Germinal Center Outputs', w * 0.5, h * 0.07);

  // GC center
  ctx.fillStyle = 'rgba(100,149,237,0.3)';
  ctx.beginPath(); ctx.arc(w * 0.5, h * 0.45, h * 0.22, 0, Math.PI * 2); ctx.fill();
  ctx.strokeStyle = '#4169E1'; ctx.lineWidth = 2; ctx.stroke();
  ctx.fillStyle = '#333';
  ctx.font = `bold ${Math.floor(w * 0.022)}px sans-serif`;
  ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
  ctx.fillText('Germinal\nCenter', w * 0.5, h * 0.45);

  const outputs = [
    { label: 'High-affinity\nIgG Plasma cells', x: 0.15, y: 0.35, color: '#4682B4' },
    { label: 'IgA Plasma\n(mucosal)', x: 0.15, y: 0.65, color: '#6495ED' },
    { label: 'Memory B cells\n(long-lived)', x: 0.85, y: 0.35, color: '#20B2AA' },
    { label: 'Class-switched\nantibodies', x: 0.85, y: 0.65, color: '#9370DB' },
  ];
  outputs.forEach(({ label, x, y, color }) => {
    ctx.strokeStyle = '#aaa'; ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(w * (x < 0.5 ? 0.35 : 0.65), h * 0.45);
    ctx.lineTo(w * x + (x < 0.5 ? 22 : -22), h * y);
    ctx.stroke();
    ctx.fillStyle = color;
    ctx.beginPath(); ctx.arc(w * x, h * y, 22, 0, Math.PI * 2); ctx.fill();
    ctx.fillStyle = '#fff';
    ctx.font = `bold ${Math.floor(w * 0.019)}px sans-serif`;
    ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
    label.split('\n').forEach((line, li) => ctx.fillText(line, w * x, h * y + (li - 0.5) * 10));
  });
}

// ─────────────────────────────────────────────────────────────────────────────

static drawSoilMicrobiotaInteraction(ctx, x, y, width, height, stage) {
  ctx.save();
  ctx.translate(x, y);
  switch (stage) {
    case 'microbiome':
      this.drawSoilMicrobiome(ctx, width, height);
      break;
    case 'gut_immune':
      this.drawSoilGutImmune(ctx, width, height);
      break;
    case 'dysbiosis':
      this.drawSoilDysbiosis(ctx, width, height);
      break;
    case 'complete':
    default:
      this.drawSoilMicrobiotaComplete(ctx, width, height);
      break;
  }
  ctx.restore();
}

static drawSoilMicrobiotaComplete(ctx, w, h) {
  // Gut lumen (top)
  ctx.fillStyle = '#FFF8DC';
  ctx.fillRect(0, 0, w, h * 0.38);
  ctx.strokeStyle = '#DEB887';
  ctx.lineWidth = 2;
  ctx.strokeRect(0, 0, w, h * 0.38);
  ctx.fillStyle = '#8B6914';
  ctx.font = `bold ${Math.floor(w * 0.022)}px sans-serif`;
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText('Gut Lumen', w * 0.5, h * 0.06);

  // Microbiota species
  const microbes = [
    { label: 'Lactobacillus', x: 0.1, color: '#228B22' },
    { label: 'Bifidobacterium', x: 0.28, color: '#3CB371' },
    { label: 'Bacteroides', x: 0.5, color: '#20B2AA' },
    { label: 'Faecalibacterium', x: 0.7, color: '#2E8B57' },
    { label: 'E. coli\n(commensal)', x: 0.88, color: '#6B8E23' },
  ];
  microbes.forEach(({ label, x, color }) => {
    ctx.fillStyle = color;
    ctx.beginPath();
    ctx.ellipse(w * x, h * 0.22, 18, 10, 0, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = '#fff';
    ctx.font = `bold ${Math.floor(w * 0.016)}px sans-serif`;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    label.split('\n').forEach((line, li) => ctx.fillText(line, w * x, h * 0.22 + (li - 0.5) * 8));
  });

  // Epithelial barrier
  ctx.fillStyle = '#FFE4B5';
  ctx.fillRect(0, h * 0.38, w, h * 0.1);
  ctx.strokeStyle = '#DAA520';
  ctx.lineWidth = 2;
  ctx.strokeRect(0, h * 0.38, w, h * 0.1);
  // Tight junctions
  ctx.strokeStyle = '#B8860B';
  ctx.lineWidth = 2;
  for (let i = 1; i < 8; i++) {
    ctx.beginPath();
    ctx.moveTo(w * i / 8, h * 0.38);
    ctx.lineTo(w * i / 8, h * 0.48);
    ctx.stroke();
  }
  ctx.fillStyle = '#8B6914';
  ctx.font = `${Math.floor(w * 0.018)}px sans-serif`;
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText('Epithelial barrier (tight junctions)', w * 0.5, h * 0.43);

  // Immune interactions below
  ctx.fillStyle = '#E6F3FF';
  ctx.fillRect(0, h * 0.48, w, h * 0.52);

  const interactions = [
    { label: 'IgA\nsecretion', x: 0.12, y: 0.65, color: '#4169E1' },
    { label: 'Treg\ninduction', x: 0.3, y: 0.62, color: '#3CB371' },
    { label: "Peyer's\nPatch", x: 0.5, y: 0.7, color: '#FF69B4' },
    { label: 'SCFAs\n(butyrate)', x: 0.7, y: 0.62, color: '#FF8C00' },
    { label: 'Th17\nbalance', x: 0.88, y: 0.65, color: '#9400D3' },
  ];
  interactions.forEach(({ label, x, y, color }) => {
    ctx.strokeStyle = '#aaa';
    ctx.lineWidth = 1.5;
    ctx.setLineDash([3, 3]);
    ctx.beginPath();
    ctx.moveTo(w * x, h * 0.48);
    ctx.lineTo(w * x, h * y - 0.04 * h);
    ctx.stroke();
    ctx.setLineDash([]);
    ctx.fillStyle = color;
    ctx.beginPath();
    ctx.arc(w * x, h * y, 18, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = '#fff';
    ctx.font = `bold ${Math.floor(w * 0.018)}px sans-serif`;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    label.split('\n').forEach((line, li) => ctx.fillText(line, w * x, h * y + (li - 0.5) * 9));
  });

  ctx.fillStyle = '#555';
  ctx.font = `bold ${Math.floor(w * 0.02)}px sans-serif`;
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText('Gut microbiota shape immune tolerance & defense', w * 0.5, h * 0.92);
}

static drawSoilMicrobiome(ctx, w, h) {
  // Diversity wheel
  const cx = w * 0.5, cy = h * 0.48;
  const species = [
    { name: 'Firmicutes', pct: 0.35, color: '#228B22' },
    { name: 'Bacteroidetes', pct: 0.3, color: '#20B2AA' },
    { name: 'Actinobacteria', pct: 0.12, color: '#9370DB' },
    { name: 'Proteobacteria', pct: 0.08, color: '#FF8C00' },
    { name: 'Verrucomicrobia', pct: 0.08, color: '#4169E1' },
    { name: 'Other', pct: 0.07, color: '#aaa' },
  ];
  let startAngle = -Math.PI / 2;
  const r = Math.min(w, h) * 0.32;
  species.forEach(({ name, pct, color }) => {
    const sweep = pct * Math.PI * 2;
    ctx.fillStyle = color;
    ctx.beginPath();
    ctx.moveTo(cx, cy);
    ctx.arc(cx, cy, r, startAngle, startAngle + sweep);
    ctx.closePath();
    ctx.fill();
    ctx.strokeStyle = '#fff';
    ctx.lineWidth = 2;
    ctx.stroke();
    // Label
    const midA = startAngle + sweep / 2;
    ctx.fillStyle = '#fff';
    ctx.font = `bold ${Math.floor(w * 0.018)}px sans-serif`;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(name, cx + Math.cos(midA) * r * 0.65, cy + Math.sin(midA) * r * 0.65);
    startAngle += sweep;
  });

  ctx.fillStyle = '#333';
  ctx.font = `bold ${Math.floor(w * 0.026)}px sans-serif`;
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText('Gut Microbiome Composition', cx, h * 0.07);
  ctx.font = `${Math.floor(w * 0.02)}px sans-serif`;
  ctx.fillText('>1000 species, 39 trillion bacteria', cx, h * 0.92);
}

static drawSoilGutImmune(ctx, w, h) {
  // Two-way interaction diagram
  const leftLabel = 'Gut\nMicrobiota';
  const rightLabel = 'Immune\nSystem';

  ctx.fillStyle = '#228B22';
  ctx.beginPath();
  ctx.arc(w * 0.22, h * 0.48, 32, 0, Math.PI * 2);
  ctx.fill();
  ctx.fillStyle = '#fff';
  ctx.font = `bold ${Math.floor(w * 0.022)}px sans-serif`;
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  leftLabel.split('\n').forEach((line, li) => ctx.fillText(line, w * 0.22, h * 0.48 + (li - 0.5) * 11));

  ctx.fillStyle = '#4169E1';
  ctx.beginPath();
  ctx.arc(w * 0.78, h * 0.48, 32, 0, Math.PI * 2);
  ctx.fill();
  ctx.fillStyle = '#fff';
  ctx.font = `bold ${Math.floor(w * 0.022)}px sans-serif`;
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  rightLabel.split('\n').forEach((line, li) => ctx.fillText(line, w * 0.78, h * 0.48 + (li - 0.5) * 11));

  // Microbiota → Immune arrows (top)
  ctx.strokeStyle = '#228B22'; ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.moveTo(w * 0.3, h * 0.38);
  ctx.quadraticCurveTo(w * 0.5, h * 0.22, w * 0.7, h * 0.38);
  ctx.stroke();
  ctx.fillStyle = '#228B22';
  ctx.beginPath();
  ctx.moveTo(w * 0.7, h * 0.38); ctx.lineTo(w * 0.64, h * 0.35); ctx.lineTo(w * 0.67, h * 0.42);
  ctx.closePath(); ctx.fill();

  // Signals top
  const topSignals = ['SCFAs', 'Metabolites', 'PAMPs'];
  topSignals.forEach((s, i) => {
    ctx.fillStyle = '#228B22';
    ctx.font = `${Math.floor(w * 0.018)}px sans-serif`;
    ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
    ctx.fillText(s, w * (0.35 + i * 0.1), h * 0.25);
  });

  // Immune → Microbiota arrows (bottom)
  ctx.strokeStyle = '#4169E1'; ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.moveTo(w * 0.7, h * 0.58);
  ctx.quadraticCurveTo(w * 0.5, h * 0.74, w * 0.3, h * 0.58);
  ctx.stroke();
  ctx.fillStyle = '#4169E1';
  ctx.beginPath();
  ctx.moveTo(w * 0.3, h * 0.58); ctx.lineTo(w * 0.36, h * 0.55); ctx.lineTo(w * 0.33, h * 0.62);
  ctx.closePath(); ctx.fill();

  const bottomSignals = ['IgA', 'Defensins', 'Mucus'];
  bottomSignals.forEach((s, i) => {
    ctx.fillStyle = '#4169E1';
    ctx.font = `${Math.floor(w * 0.018)}px sans-serif`;
    ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
    ctx.fillText(s, w * (0.35 + i * 0.1), h * 0.72);
  });

  ctx.fillStyle = '#555';
  ctx.font = `bold ${Math.floor(w * 0.022)}px sans-serif`;
  ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
  ctx.fillText('Bidirectional microbiota–immune crosstalk', w * 0.5, h * 0.9);
}

static drawSoilDysbiosis(ctx, w, h) {
  // Balanced (left) vs Dysbiosis (right)
  ctx.fillStyle = 'rgba(0,128,0,0.1)';
  ctx.fillRect(0, 0, w * 0.46, h);
  ctx.fillStyle = 'rgba(220,20,60,0.1)';
  ctx.fillRect(w * 0.54, 0, w * 0.46, h);

  ctx.fillStyle = '#006400';
  ctx.font = `bold ${Math.floor(w * 0.024)}px sans-serif`;
  ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
  ctx.fillText('Eubiosis', w * 0.23, h * 0.07);
  ctx.fillStyle = '#8B0000';
  ctx.textAlign = 'center';
  ctx.fillText('Dysbiosis', w * 0.77, h * 0.07);

  // Balanced microbes (varied colors)
  ['#228B22','#20B2AA','#3CB371','#2E8B57'].forEach((color, i) => {
    const bx = w * (0.08 + (i % 2) * 0.2), by = h * (0.25 + Math.floor(i / 2) * 0.2);
    ctx.fillStyle = color;
    ctx.beginPath(); ctx.ellipse(bx, by, 18, 10, 0, 0, Math.PI * 2); ctx.fill();
  });

  // Happy immune cell (left)
  ctx.fillStyle = '#4169E1';
  ctx.beginPath(); ctx.arc(w * 0.23, h * 0.68, 20, 0, Math.PI * 2); ctx.fill();
  ctx.fillStyle = '#fff';
  ctx.font = `bold ${Math.floor(w * 0.02)}px sans-serif`;
  ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
  ctx.fillText('Balanced\nimmune', w * 0.23, h * 0.68);

  // Dysbiotic: overgrowth of pathobionts
  ['#8B0000','#8B0000','#8B0000','#aaa'].forEach((color, i) => {
    const bx = w * (0.58 + (i % 2) * 0.22), by = h * (0.25 + Math.floor(i / 2) * 0.2);
    ctx.fillStyle = color;
    const r = i < 3 ? 20 : 8;
    ctx.beginPath(); ctx.ellipse(bx, by, r, r * 0.55, 0, 0, Math.PI * 2); ctx.fill();
  });

  // Inflamed immune cell (right)
  ctx.fillStyle = '#DC143C';
  ctx.beginPath(); ctx.arc(w * 0.77, h * 0.68, 20, 0, Math.PI * 2); ctx.fill();
  ctx.fillStyle = '#fff';
  ctx.font = `bold ${Math.floor(w * 0.02)}px sans-serif`;
  ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
  ctx.fillText('Inflamed\nimmune', w * 0.77, h * 0.68);

  // Disease outcomes
  const diseases = ['IBD', 'Obesity', 'Allergy', 'Autoimmune'];
  ctx.fillStyle = '#8B0000';
  ctx.font = `${Math.floor(w * 0.018)}px sans-serif`;
  ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
  diseases.forEach((d, i) => ctx.fillText(d, w * (0.58 + (i % 2) * 0.22), h * (0.82 + Math.floor(i / 2) * 0.08)));
}
