static drawCompleteChromosomeStructure(ctx, x, y, width, height, view, componentFocus) {
  ctx.save();
  ctx.translate(x, y);

  switch (view) {
    case 'complete':
    case 'dna':
      this.drawDoubleHelix(ctx, width, height, componentFocus);
      break;
    case 'nucleosome':
      this.drawNucleosome(ctx, width, height, componentFocus);
      break;
    case 'chromatin':
      this.drawChromatinFiber(ctx, width, height, componentFocus);
      break;
    case 'chromosome':
      this.drawChromosome(ctx, width, height, componentFocus);
      break;
    case 'histone':
      this.drawHistoneProtein(ctx, width, height, componentFocus);
      break;
    case 'supercoiling':
      this.drawDNASupercoiling(ctx, width, height, componentFocus);
      break;
    case 'telomere':
      this.drawTelomere(ctx, width, height, componentFocus);
      break;
    case 'centromere':
      this.drawCentromere(ctx, width, height, componentFocus);
      break;
    case 'overview':
    default:
      this._drawChromosomeStructureOverview(ctx, width, height, componentFocus);
      break;
  }

  ctx.restore();
}

static _drawChromosomeStructureOverview(ctx, width, height, componentFocus) {
  const w = width, h = height;
  const cx = w * 0.5;

  // Title
  ctx.fillStyle = '#222';
  ctx.font = `bold ${Math.max(13, w * 0.038)}px Arial`;
  ctx.textAlign = 'center';
  ctx.textBaseline = 'alphabetic';
  ctx.fillText('DNA → Chromatin → Chromosome', cx, 22);

  const levels = [
    { label: 'DNA Double Helix', sublabel: '2 nm', y: h * 0.1, color: '#4A90E2' },
    { label: 'Nucleosome', sublabel: '11 nm', y: h * 0.28, color: '#E8A000' },
    { label: '30nm Chromatin Fiber', sublabel: '30 nm', y: h * 0.48, color: '#8E44AD' },
    { label: 'Looped Domain', sublabel: '300 nm', y: h * 0.67, color: '#27AE60' },
    { label: 'Chromosome', sublabel: '700 nm', y: h * 0.86, color: '#E74C3C' }
  ];

  levels.forEach((lv, i) => {
    const lx = w * 0.18;
    const rx = w * 0.82;
    const bandH = h * 0.13;

    // Background band
    const bg = ctx.createLinearGradient(lx, lv.y - bandH * 0.5, rx, lv.y + bandH * 0.5);
    bg.addColorStop(0, lv.color + '22');
    bg.addColorStop(0.5, lv.color + '44');
    bg.addColorStop(1, lv.color + '22');
    ctx.fillStyle = bg;
    ctx.strokeStyle = lv.color + '88';
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.roundRect(lx, lv.y - bandH * 0.5, rx - lx, bandH, 8);
    ctx.fill();
    ctx.stroke();

    // Mini visual icon on left
    const iconX = lx + w * 0.08;
    if (i === 0) {
      // DNA helix mini
      for (let s = 0; s < 2; s++) {
        ctx.strokeStyle = s === 0 ? '#4A90E2' : '#E24A4A';
        ctx.lineWidth = 3;
        ctx.beginPath();
        for (let p = 0; p <= 16; p++) {
          const angle = (p / 16) * Math.PI * 3 + s * Math.PI;
          const px = iconX + Math.cos(angle) * w * 0.03;
          const py = lv.y - bandH * 0.4 + p * (bandH * 0.8 / 16);
          p === 0 ? ctx.moveTo(px, py) : ctx.lineTo(px, py);
        }
        ctx.stroke();
      }
    } else if (i === 1) {
      // Nucleosome mini
      ctx.fillStyle = '#E8A000';
      ctx.beginPath();
      ctx.ellipse(iconX, lv.y, w * 0.04, h * 0.045, 0, 0, Math.PI * 2);
      ctx.fill();
      ctx.strokeStyle = '#4A90E2';
      ctx.lineWidth = 3;
      ctx.beginPath();
      ctx.ellipse(iconX, lv.y, w * 0.055, h * 0.06, 0, -Math.PI * 0.2, Math.PI * 2.2);
      ctx.stroke();
    } else if (i === 2) {
      // 30nm fiber mini
      for (let n = 0; n < 3; n++) {
        ctx.fillStyle = '#E8A000';
        ctx.beginPath();
        ctx.ellipse(iconX + (n % 2 === 0 ? -w * 0.015 : w * 0.015), lv.y - h * 0.035 + n * h * 0.035, w * 0.022, h * 0.022, 0, 0, Math.PI * 2);
        ctx.fill();
      }
    } else if (i === 3) {
      // Loop domains
      ctx.strokeStyle = lv.color;
      ctx.lineWidth = 3;
      ctx.beginPath();
      ctx.arc(iconX, lv.y, w * 0.04, 0, Math.PI * 1.8);
      ctx.stroke();
      ctx.fillStyle = lv.color;
      ctx.beginPath();
      ctx.arc(iconX + w * 0.04, lv.y, 4, 0, Math.PI * 2);
      ctx.fill();
    } else {
      // Chromosome
      ctx.fillStyle = '#E74C3C';
      ctx.beginPath();
      ctx.roundRect(iconX - w * 0.015, lv.y - h * 0.05, w * 0.03, h * 0.1, 5);
      ctx.fill();
      ctx.fillStyle = '#FF8C69';
      ctx.beginPath();
      ctx.ellipse(iconX, lv.y, w * 0.025, h * 0.018, 0, 0, Math.PI * 2);
      ctx.fill();
    }

    // Label + sublabel
    ctx.fillStyle = lv.color;
    ctx.font = `bold ${Math.max(10, w * 0.03)}px Arial`;
    ctx.textAlign = 'left';
    ctx.textBaseline = 'middle';
    ctx.fillText(lv.label, lx + w * 0.18, lv.y - 7);
    ctx.fillStyle = '#666';
    ctx.font = `${Math.max(9, w * 0.026)}px Arial`;
    ctx.fillText(lv.sublabel, lx + w * 0.18, lv.y + 8);

    // Arrow to next level
    if (i < levels.length - 1) {
      ctx.strokeStyle = '#CCC';
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(cx, lv.y + bandH * 0.5);
      ctx.lineTo(cx, levels[i + 1].y - h * 0.065);
      ctx.stroke();
      ctx.fillStyle = '#CCC';
      ctx.beginPath();
      ctx.moveTo(cx, levels[i + 1].y - h * 0.065);
      ctx.lineTo(cx - 5, levels[i + 1].y - h * 0.065 - 8);
      ctx.lineTo(cx + 5, levels[i + 1].y - h * 0.065 - 8);
      ctx.closePath();
      ctx.fill();
    }
  });
}

// ─────────────────────────────────────────────────────────────────────────────

static drawCompleteCentralDogma(ctx, x, y, width, height, view, componentFocus) {
  ctx.save();
  ctx.translate(x, y);

  switch (view) {
    case 'complete':
    case 'overview':
    default:
      this._drawCentralDogmaOverview(ctx, width, height, componentFocus);
      break;
    case 'transcription':
      this.drawTranscriptionBubble(ctx, width, height, componentFocus);
      break;
    case 'translation':
      this.drawRibosomeStructure(ctx, width, height, componentFocus);
      break;
    case 'replication':
      this.drawReplicationFork(ctx, width, height, componentFocus);
      break;
    case 'rna-processing':
      this.drawRNAProcessing(ctx, width, height, componentFocus);
      break;
    case 'dna':
      this.drawDoubleHelix(ctx, width, height, componentFocus);
      break;
    case 'mrna':
      this.drawMRNA(ctx, width, height, componentFocus);
      break;
    case 'protein':
      this.drawProteinFolding(ctx, width, height, componentFocus);
      break;
  }

  ctx.restore();
}

static _drawCentralDogmaOverview(ctx, width, height, componentFocus) {
  const w = width, h = height;
  const cx = w * 0.5;

  ctx.fillStyle = '#222';
  ctx.font = `bold ${Math.max(13, w * 0.038)}px Arial`;
  ctx.textAlign = 'center';
  ctx.textBaseline = 'alphabetic';
  ctx.fillText('The Central Dogma', cx, 22);

  // ── Three main molecules ──────────────────────────────────────────────
  const nodes = [
    { label: 'DNA', x: w * 0.18, y: h * 0.42, color: '#4A90E2', r: w * 0.11 },
    { label: 'RNA', x: w * 0.50, y: h * 0.42, color: '#FF9F43', r: w * 0.10 },
    { label: 'Protein', x: w * 0.82, y: h * 0.42, color: '#2ECC71', r: w * 0.10 }
  ];

  nodes.forEach(n => {
    const g = ctx.createRadialGradient(n.x - n.r * 0.3, n.y - n.r * 0.3, 4, n.x, n.y, n.r);
    g.addColorStop(0, n.color + 'DD');
    g.addColorStop(1, n.color + '66');
    ctx.fillStyle = g;
    ctx.strokeStyle = n.color;
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2);
    ctx.fill();
    ctx.stroke();
    ctx.fillStyle = '#fff';
    ctx.font = `bold ${Math.max(11, w * 0.034)}px Arial`;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(n.label, n.x, n.y);
  });

  // ── Arrows with process labels ─────────────────────────────────────────
  const arrows = [
    { x1: nodes[0].x + nodes[0].r, y1: nodes[0].y, x2: nodes[1].x - nodes[1].r, y2: nodes[1].y, label: 'Transcription', color: '#E74C3C' },
    { x1: nodes[1].x + nodes[1].r, y1: nodes[1].y, x2: nodes[2].x - nodes[2].r, y2: nodes[2].y, label: 'Translation', color: '#9B59B6' }
  ];

  arrows.forEach(ar => {
    const mx = (ar.x1 + ar.x2) * 0.5;
    ctx.strokeStyle = ar.color;
    ctx.lineWidth = 4;
    ctx.beginPath();
    ctx.moveTo(ar.x1, ar.y1);
    ctx.lineTo(ar.x2, ar.y2);
    ctx.stroke();
    ctx.fillStyle = ar.color;
    ctx.beginPath();
    ctx.moveTo(ar.x2, ar.y2);
    ctx.lineTo(ar.x2 - 10, ar.y2 - 6);
    ctx.lineTo(ar.x2 - 10, ar.y2 + 6);
    ctx.closePath();
    ctx.fill();
    ctx.fillStyle = ar.color;
    ctx.font = `bold ${Math.max(9, w * 0.028)}px Arial`;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'alphabetic';
    ctx.fillText(ar.label, mx, ar.y1 - 12);
  });

  // DNA replication self-arrow
  const dna = nodes[0];
  ctx.strokeStyle = '#4A90E2';
  ctx.lineWidth = 3;
  ctx.beginPath();
  ctx.arc(dna.x, dna.y - dna.r * 0.6, dna.r * 0.7, Math.PI * 1.1, Math.PI * 2.9);
  ctx.stroke();
  ctx.fillStyle = '#4A90E2';
  const repEndX = dna.x + dna.r * 0.7 * Math.cos(Math.PI * 2.9);
  const repEndY = dna.y - dna.r * 0.6 + dna.r * 0.7 * Math.sin(Math.PI * 2.9);
  ctx.beginPath();
  ctx.arc(repEndX, repEndY, 5, 0, Math.PI * 2);
  ctx.fill();
  ctx.fillStyle = '#4A90E2';
  ctx.font = `bold ${Math.max(9, w * 0.026)}px Arial`;
  ctx.textAlign = 'center';
  ctx.textBaseline = 'alphabetic';
  ctx.fillText('Replication', dna.x, dna.y - dna.r * 1.45);

  // Reverse transcription (dashed)
  ctx.strokeStyle = '#E74C3C';
  ctx.lineWidth = 2;
  ctx.setLineDash([5, 4]);
  ctx.beginPath();
  ctx.moveTo(nodes[1].x - nodes[1].r, nodes[1].y + 22);
  ctx.lineTo(nodes[0].x + nodes[0].r, nodes[0].y + 22);
  ctx.stroke();
  ctx.setLineDash([]);
  ctx.fillStyle = '#E74C3C';
  ctx.font = `italic ${Math.max(8, w * 0.022)}px Arial`;
  ctx.textAlign = 'center';
  ctx.textBaseline = 'alphabetic';
  ctx.fillText('Reverse Transcription', (nodes[0].x + nodes[1].x) * 0.5, nodes[0].y + 38);

  // Sub-process boxes
  const subSteps = [
    { x: nodes[0].x, y: h * 0.72, text: 'Initiation\nElongation\nTermination', color: '#FF9F43' },
    { x: nodes[1].x, y: h * 0.72, text: '5\' Cap · Splicing\nPoly(A) tail', color: '#E67E22' },
    { x: nodes[2].x, y: h * 0.72, text: 'Folding\nModification\nTargeting', color: '#27AE60' }
  ];

  subSteps.forEach(ss => {
    ctx.fillStyle = ss.color + '22';
    ctx.strokeStyle = ss.color + '88';
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.roundRect(ss.x - w * 0.1, ss.y - h * 0.07, w * 0.2, h * 0.18, 6);
    ctx.fill(); ctx.stroke();
    const lines = ss.text.split('\n');
    lines.forEach((line, li) => {
      ctx.fillStyle = ss.color;
      ctx.font = `${Math.max(8, w * 0.022)}px Arial`;
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText(line, ss.x, ss.y - h * 0.02 + li * h * 0.052);
    });
    // Connector
    ctx.strokeStyle = ss.color + '66';
    ctx.lineWidth = 1;
    ctx.setLineDash([3, 3]);
    ctx.beginPath();
    ctx.moveTo(ss.x, nodes[0].y + nodes[0].r);
    ctx.lineTo(ss.x, ss.y - h * 0.07);
    ctx.stroke();
    ctx.setLineDash([]);
  });
}

// ─────────────────────────────────────────────────────────────────────────────

static drawCompleteGeneExpression(ctx, x, y, width, height, view, componentFocus) {
  ctx.save();
  ctx.translate(x, y);

  switch (view) {
    case 'complete':
    case 'overview':
    default:
      this._drawGeneExpressionOverview(ctx, width, height, componentFocus);
      break;
    case 'chromatin':
      this.drawChromatinFiber(ctx, width, height, componentFocus);
      break;
    case 'promoter':
      this.drawPromoterRegion(ctx, width, height, componentFocus);
      break;
    case 'transcription-factor':
      this.drawTranscriptionFactor(ctx, width, height, componentFocus);
      break;
    case 'enhancer':
      this.drawEnhancerRegion(ctx, width, height, componentFocus);
      break;
    case 'transcription':
      this.drawTranscriptionBubble(ctx, width, height, componentFocus);
      break;
    case 'rna-processing':
      this.drawRNAProcessing(ctx, width, height, componentFocus);
      break;
    case 'translation':
      this.drawRibosomeStructure(ctx, width, height, componentFocus);
      break;
    case 'protein-folding':
      this.drawProteinFolding(ctx, width, height, componentFocus);
      break;
  }

  ctx.restore();
}

static _drawGeneExpressionOverview(ctx, width, height, componentFocus) {
  const w = width, h = height;
  const cx = w * 0.5;

  ctx.fillStyle = '#222';
  ctx.font = `bold ${Math.max(13, w * 0.038)}px Arial`;
  ctx.textAlign = 'center';
  ctx.textBaseline = 'alphabetic';
  ctx.fillText('Gene Expression Overview', cx, 22);

  const stages = [
    {
      label: 'Chromatin Remodeling',
      color: '#8E44AD', icon: 'chromatin',
      x: cx, y: h * 0.11,
      desc: 'HAT/HDAC · SWI/SNF'
    },
    {
      label: 'Transcription Initiation',
      color: '#E74C3C', icon: 'pol',
      x: cx, y: h * 0.26,
      desc: 'TFs · Mediator · Pol II'
    },
    {
      label: 'RNA Processing',
      color: '#E67E22', icon: 'rna',
      x: cx, y: h * 0.41,
      desc: '5\' Cap · Splicing · Poly(A)'
    },
    {
      label: 'Nuclear Export',
      color: '#F39C12', icon: 'export',
      x: cx, y: h * 0.56,
      desc: 'NPC · mRNP complex'
    },
    {
      label: 'Translation',
      color: '#27AE60', icon: 'ribosome',
      x: cx, y: h * 0.71,
      desc: 'Ribosome · Factors'
    },
    {
      label: 'Protein Modification',
      color: '#3498DB', icon: 'protein',
      x: cx, y: h * 0.86,
      desc: 'Folding · PTMs · Targeting'
    }
  ];

  const boxW = w * 0.68, boxH = h * 0.1;

  stages.forEach((st, i) => {
    // Box
    const bg = ctx.createLinearGradient(cx - boxW * 0.5, st.y, cx + boxW * 0.5, st.y);
    bg.addColorStop(0, st.color + '33');
    bg.addColorStop(0.5, st.color + '55');
    bg.addColorStop(1, st.color + '33');
    ctx.fillStyle = bg;
    ctx.strokeStyle = st.color;
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.roundRect(cx - boxW * 0.5, st.y - boxH * 0.5, boxW, boxH, 8);
    ctx.fill(); ctx.stroke();

    // Icon dot
    ctx.fillStyle = st.color;
    ctx.beginPath();
    ctx.arc(cx - boxW * 0.5 + w * 0.05, st.y, w * 0.03, 0, Math.PI * 2);
    ctx.fill();

    // Labels
    ctx.fillStyle = st.color;
    ctx.font = `bold ${Math.max(9, w * 0.028)}px Arial`;
    ctx.textAlign = 'left';
    ctx.textBaseline = 'middle';
    ctx.fillText(st.label, cx - boxW * 0.5 + w * 0.1, st.y - 7);
    ctx.fillStyle = '#666';
    ctx.font = `${Math.max(8, w * 0.022)}px Arial`;
    ctx.fillText(st.desc, cx - boxW * 0.5 + w * 0.1, st.y + 7);

    // Regulation indicators on right
    const regX = cx + boxW * 0.5 - w * 0.06;
    if (i % 2 === 0) {
      ctx.fillStyle = '#27AE60';
      ctx.font = `bold ${Math.max(9, w * 0.026)}px Arial`;
      ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
      ctx.fillText('▲', regX, st.y);
    } else {
      ctx.fillStyle = '#E74C3C';
      ctx.font = `bold ${Math.max(9, w * 0.026)}px Arial`;
      ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
      ctx.fillText('▼', regX, st.y);
    }

    // Arrow between stages
    if (i < stages.length - 1) {
      ctx.strokeStyle = st.color + 'AA';
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(cx, st.y + boxH * 0.5);
      ctx.lineTo(cx, stages[i + 1].y - boxH * 0.5 - 2);
      ctx.stroke();
      ctx.fillStyle = stages[i + 1].color;
      ctx.beginPath();
      ctx.moveTo(cx, stages[i + 1].y - boxH * 0.5 - 2);
      ctx.lineTo(cx - 5, stages[i + 1].y - boxH * 0.5 - 9);
      ctx.lineTo(cx + 5, stages[i + 1].y - boxH * 0.5 - 9);
      ctx.closePath();
      ctx.fill();
    }
  });
}

// ─────────────────────────────────────────────────────────────────────────────

static drawCompleteProteinSynthesis(ctx, x, y, width, height, view, componentFocus) {
  ctx.save();
  ctx.translate(x, y);

  switch (view) {
    case 'complete':
    case 'overview':
    default:
      this._drawProteinSynthesisOverview(ctx, width, height, componentFocus);
      break;
    case 'aminoacylation':
      this.drawAminoacylation(ctx, width, height, componentFocus);
      break;
    case 'initiation':
      this.drawTranslationInitiation(ctx, width, height, componentFocus);
      break;
    case 'elongation':
      this.drawTranslationElongation(ctx, width, height, componentFocus);
      break;
    case 'termination':
      this.drawTranslationTermination(ctx, width, height, componentFocus);
      break;
    case 'peptide-bond':
      this.drawPeptideBondFormation(ctx, width, height, componentFocus);
      break;
    case 'polysome':
      this.drawPolysome(ctx, width, height, componentFocus);
      break;
    case 'ribosome-recycling':
      this.drawRibosomeRecycling(ctx, width, height, componentFocus);
      break;
  }

  ctx.restore();
}

static _drawProteinSynthesisOverview(ctx, width, height, componentFocus) {
  const w = width, h = height;
  const cx = w * 0.5;

  ctx.fillStyle = '#222';
  ctx.font = `bold ${Math.max(13, w * 0.038)}px Arial`;
  ctx.textAlign = 'center';
  ctx.textBaseline = 'alphabetic';
  ctx.fillText('Complete Protein Synthesis', cx, 22);

  const phases = [
    {
      name: 'tRNA Charging', color: '#F39C12',
      steps: ['aaRS recognizes AA', 'ATP → AMP + PPi', 'AA-tRNA formed'],
      x: w * 0.22, y: h * 0.2
    },
    {
      name: 'Initiation', color: '#3498DB',
      steps: ['43S PIC assembly', 'mRNA scanning', 'AUG recognition', '80S formation'],
      x: w * 0.7, y: h * 0.2
    },
    {
      name: 'Elongation', color: '#27AE60',
      steps: ['AA-tRNA delivery (eEF1A)', 'Peptidyl transfer', 'Translocation (eEF2)'],
      x: w * 0.22, y: h * 0.58
    },
    {
      name: 'Termination & Recycling', color: '#E74C3C',
      steps: ['Stop codon (eRF1)', 'Peptide release', 'Ribosome recycling'],
      x: w * 0.7, y: h * 0.58
    }
  ];

  phases.forEach((ph, i) => {
    const boxW = w * 0.44, boxH = h * 0.3;
    const bx = ph.x - boxW * 0.5, by = ph.y - boxH * 0.5;

    // Box
    const bg = ctx.createLinearGradient(bx, by, bx + boxW, by + boxH);
    bg.addColorStop(0, ph.color + '22');
    bg.addColorStop(1, ph.color + '44');
    ctx.fillStyle = bg;
    ctx.strokeStyle = ph.color;
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.roundRect(bx, by, boxW, boxH, 10);
    ctx.fill(); ctx.stroke();

    // Header
    ctx.fillStyle = ph.color;
    ctx.beginPath();
    ctx.roundRect(bx, by, boxW, h * 0.055, [10, 10, 0, 0]);
    ctx.fill();
    ctx.fillStyle = '#fff';
    ctx.font = `bold ${Math.max(10, w * 0.03)}px Arial`;
    ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
    ctx.fillText(ph.name, ph.x, by + h * 0.028);

    // Steps
    ph.steps.forEach((step, si) => {
      const sy = by + h * 0.08 + si * h * 0.065;
      ctx.fillStyle = ph.color + 'AA';
      ctx.beginPath();
      ctx.arc(bx + w * 0.04, sy, 5, 0, Math.PI * 2);
      ctx.fill();
      ctx.fillStyle = '#333';
      ctx.font = `${Math.max(8, w * 0.024)}px Arial`;
      ctx.textAlign = 'left'; ctx.textBaseline = 'middle';
      ctx.fillText(step, bx + w * 0.06, sy);
    });
  });

  // Central flow arrows
  const arrowDefs = [
    { x1: w * 0.44, y1: h * 0.2, x2: w * 0.48, y2: h * 0.2 },
    { x1: w * 0.7, y1: h * 0.36, x2: w * 0.7, y2: h * 0.43 },
    { x1: w * 0.22, y1: h * 0.36, x2: w * 0.22, y2: h * 0.43 },
    { x1: w * 0.44, y1: h * 0.58, x2: w * 0.48, y2: h * 0.58 }
  ];

  arrowDefs.forEach(ar => {
    ctx.strokeStyle = '#AAA';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(ar.x1, ar.y1); ctx.lineTo(ar.x2, ar.y2);
    ctx.stroke();
    const dx = ar.x2 - ar.x1, dy = ar.y2 - ar.y1;
    const len = Math.sqrt(dx * dx + dy * dy);
    const ux = dx / len, uy = dy / len;
    ctx.fillStyle = '#AAA';
    ctx.beginPath();
    ctx.moveTo(ar.x2, ar.y2);
    ctx.lineTo(ar.x2 - ux * 10 - uy * 6, ar.y2 - uy * 10 + ux * 6);
    ctx.lineTo(ar.x2 - ux * 10 + uy * 6, ar.y2 - uy * 10 - ux * 6);
    ctx.closePath();
    ctx.fill();
  });

  // Polysome note bottom
  ctx.fillStyle = '#9B59B6';
  ctx.font = `${Math.max(8, w * 0.024)}px Arial`;
  ctx.textAlign = 'center'; ctx.textBaseline = 'alphabetic';
  ctx.fillText('Multiple ribosomes → Polysome for efficient synthesis', cx, h - 8);
}

// ─────────────────────────────────────────────────────────────────────────────

static drawCompleteReplicationFork(ctx, x, y, width, height, view, componentFocus) {
  ctx.save();
  ctx.translate(x, y);

  switch (view) {
    case 'complete':
    case 'overview':
    default:
      this._drawReplicationForkOverview(ctx, width, height, componentFocus);
      break;
    case 'helicase':
      this.drawHelicaseEnzyme(ctx, width, height, componentFocus);
      break;
    case 'primase':
      this.drawPrimaseEnzyme(ctx, width, height, componentFocus);
      break;
    case 'pol3':
      this.drawDNAPolymeraseIII(ctx, width, height, componentFocus);
      break;
    case 'pol1':
      this.drawDNAPolymeraseI(ctx, width, height, componentFocus);
      break;
    case 'ligase':
      this.drawDNALigaseEnzyme(ctx, width, height, componentFocus);
      break;
    case 'topoisomerase':
      this.drawTopoisomeraseEnzyme(ctx, width, height, componentFocus);
      break;
    case 'okazaki':
      this.drawOkazakiFragment(ctx, width, height, componentFocus);
      break;
    case 'primer-removal':
      this.drawPrimerRemoval(ctx, width, height, componentFocus);
      break;
  }

  ctx.restore();
}

static _drawReplicationForkOverview(ctx, width, height, componentFocus) {
  const w = width, h = height;
  const cx = w * 0.38, cy = h * 0.5;

  ctx.fillStyle = '#222';
  ctx.font = `bold ${Math.max(13, w * 0.038)}px Arial`;
  ctx.textAlign = 'center';
  ctx.textBaseline = 'alphabetic';
  ctx.fillText('Complete Replication Fork', w * 0.5, 22);

  // Parental dsDNA
  for (let s = 0; s < 2; s++) {
    ctx.strokeStyle = s === 0 ? '#4A90E2' : '#E24A4A';
    ctx.lineWidth = 5;
    ctx.beginPath();
    ctx.moveTo(w * 0.04, cy + s * 14 - 7);
    ctx.lineTo(cx, cy + s * 14 - 7);
    ctx.stroke();
  }

  // Topoisomerase (ahead of fork)
  const topoX = w * 0.12, topoY = cy - h * 0.18;
  ctx.fillStyle = '#E74C3C';
  ctx.strokeStyle = '#C0392B'; ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.arc(topoX, topoY, w * 0.055, 0, Math.PI * 2);
  ctx.fill(); ctx.stroke();
  ctx.fillStyle = '#fff';
  ctx.font = `bold ${Math.max(7, w * 0.02)}px Arial`;
  ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
  ctx.fillText('Topo', topoX, topoY - 5);
  ctx.fillText('I/II', topoX, topoY + 6);
  ctx.strokeStyle = '#E74C3C'; ctx.lineWidth = 1; ctx.setLineDash([3, 3]);
  ctx.beginPath(); ctx.moveTo(topoX, topoY + w * 0.055); ctx.lineTo(cx * 0.5, cy - 7); ctx.stroke();
  ctx.setLineDash([]);

  // Helicase
  const helX = cx, helY = cy;
  const helG = ctx.createRadialGradient(helX - 5, helY - 5, 3, helX, helY, w * 0.06);
  helG.addColorStop(0, '#85C1E9'); helG.addColorStop(1, '#2980B9');
  ctx.fillStyle = helG; ctx.strokeStyle = '#1A5276'; ctx.lineWidth = 2;
  ctx.beginPath(); ctx.arc(helX, helY, w * 0.06, 0, Math.PI * 2); ctx.fill(); ctx.stroke();
  ctx.fillStyle = '#fff';
  ctx.font = `bold ${Math.max(7, w * 0.02)}px Arial`;
  ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
  ctx.fillText('Helicase', helX, helY);

  // SSB on template
  for (let i = 0; i < 3; i++) {
    const sx = cx + w * 0.06 + i * w * 0.1;
    ctx.fillStyle = '#95E1D3'; ctx.strokeStyle = '#1ABC9C'; ctx.lineWidth = 1;
    ctx.beginPath(); ctx.arc(sx, cy - h * 0.06, w * 0.025, 0, Math.PI * 2);
    ctx.fill(); ctx.stroke();
    ctx.fillStyle = '#333'; ctx.font = `${Math.max(6, w * 0.016)}px Arial`;
    ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
    ctx.fillText('SSB', sx, cy - h * 0.06);
  }

  // Leading strand template
  ctx.strokeStyle = '#4A90E2'; ctx.lineWidth = 4;
  ctx.beginPath(); ctx.moveTo(cx, cy - 7); ctx.lineTo(w * 0.96, cy - h * 0.28); ctx.stroke();

  // Leading strand synthesis
  ctx.strokeStyle = '#2ECC71'; ctx.lineWidth = 4;
  ctx.beginPath(); ctx.moveTo(cx + w * 0.1, cy - h * 0.04); ctx.lineTo(w * 0.93, cy - h * 0.26); ctx.stroke();

  // Pol III on leading
  const pl3x = cx + w * 0.28, pl3y = cy - h * 0.13;
  ctx.fillStyle = '#27AE60'; ctx.strokeStyle = '#1E8449'; ctx.lineWidth = 2;
  ctx.beginPath(); ctx.arc(pl3x, pl3y, w * 0.048, 0, Math.PI * 2); ctx.fill(); ctx.stroke();
  ctx.fillStyle = '#fff'; ctx.font = `bold ${Math.max(7, w * 0.02)}px Arial`;
  ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
  ctx.fillText('Pol III', pl3x, pl3y);

  // Lagging strand template
  ctx.strokeStyle = '#E24A4A'; ctx.lineWidth = 4;
  ctx.beginPath(); ctx.moveTo(cx, cy + 7); ctx.lineTo(w * 0.96, cy + h * 0.3); ctx.stroke();

  // Okazaki fragments (3)
  for (let i = 0; i < 3; i++) {
    const ot = (i + 0.5) / 3;
    const ox = cx + ot * w * 0.55, oy = cy + ot * h * 0.22 + h * 0.05;
    // RNA primer
    ctx.strokeStyle = '#F39C12'; ctx.lineWidth = 4;
    ctx.beginPath(); ctx.moveTo(ox, oy); ctx.lineTo(ox + w * 0.06, oy); ctx.stroke();
    // DNA extension
    ctx.strokeStyle = '#E74C3C'; ctx.lineWidth = 4;
    ctx.beginPath(); ctx.moveTo(ox + w * 0.06, oy); ctx.lineTo(ox + w * 0.18, oy); ctx.stroke();
    // Pol III on lagging
    if (i === 0) {
      ctx.fillStyle = '#27AE60'; ctx.strokeStyle = '#1E8449'; ctx.lineWidth = 2;
      ctx.beginPath(); ctx.arc(ox + w * 0.06, oy - h * 0.06, w * 0.038, 0, Math.PI * 2);
      ctx.fill(); ctx.stroke();
      ctx.fillStyle = '#fff'; ctx.font = `bold ${Math.max(6, w * 0.018)}px Arial`;
      ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
      ctx.fillText('Pol III', ox + w * 0.06, oy - h * 0.06);
    }
  }

  // Primase
  const primX = cx + w * 0.07, primY = cy + h * 0.1;
  ctx.fillStyle = '#F39C12'; ctx.strokeStyle = '#D35400'; ctx.lineWidth = 2;
  ctx.beginPath(); ctx.arc(primX, primY, w * 0.038, 0, Math.PI * 2); ctx.fill(); ctx.stroke();
  ctx.fillStyle = '#fff'; ctx.font = `bold ${Math.max(7, w * 0.02)}px Arial`;
  ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
  ctx.fillText('Primase', primX, primY);

  // Pol I & Ligase (right side for finishing)
  [['Pol I', '#E67E22', w * 0.78, cy + h * 0.22],
   ['Ligase', '#8E44AD', w * 0.88, cy + h * 0.26]].forEach(([lbl, col, lx, ly]) => {
    ctx.fillStyle = col; ctx.strokeStyle = col; ctx.lineWidth = 2;
    ctx.beginPath(); ctx.arc(lx, ly, w * 0.038, 0, Math.PI * 2); ctx.fill(); ctx.stroke();
    ctx.fillStyle = '#fff'; ctx.font = `bold ${Math.max(7, w * 0.02)}px Arial`;
    ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
    ctx.fillText(lbl, lx, ly);
  });

  // Legend
  const legItems = [
    ['▬ Template', '#4A90E2'], ['▬ Leading', '#2ECC71'],
    ['▬ RNA Primer', '#F39C12'], ['▬ Lagging', '#E74C3C']
  ];
  legItems.forEach((li, i) => {
    ctx.fillStyle = li[1];
    ctx.font = `${Math.max(8, w * 0.022)}px Arial`;
    ctx.textAlign = 'left'; ctx.textBaseline = 'alphabetic';
    ctx.fillText(li[0], w * 0.54 + (i % 2) * w * 0.22, h - 22 + Math.floor(i / 2) * 14);
  });
}

// ─────────────────────────────────────────────────────────────────────────────

static drawCompleteOperonSystem(ctx, x, y, width, height, view, componentFocus) {
  ctx.save();
  ctx.translate(x, y);

  switch (view) {
    case 'complete':
    case 'lac':
      this._drawLacOperon(ctx, width, height, componentFocus);
      break;
    case 'trp':
      this._drawTrpOperon(ctx, width, height, componentFocus);
      break;
    case 'repressor':
      this.drawRepressorProtein(ctx, width, height, componentFocus);
      break;
    case 'activator':
      this.drawActivatorProtein(ctx, width, height, componentFocus);
      break;
    case 'promoter':
      this.drawPromoterRegion(ctx, width, height, componentFocus);
      break;
    case 'overview':
    default:
      this._drawOperonOverview(ctx, width, height, componentFocus);
      break;
  }

  ctx.restore();
}

static _drawOperonOverview(ctx, width, height, componentFocus) {
  const w = width, h = height;
  const cx = w * 0.5;

  ctx.fillStyle = '#222';
  ctx.font = `bold ${Math.max(13, w * 0.038)}px Arial`;
  ctx.textAlign = 'center'; ctx.textBaseline = 'alphabetic';
  ctx.fillText('Operon Systems', cx, 22);

  // lac operon (top half) and trp operon (bottom half)
  const operons = [
    {
      name: 'lac Operon (Inducible)',
      y: h * 0.3, color: '#3498DB',
      genes: ['lacI', 'P/O', 'lacZ', 'lacY', 'lacA'],
      geneColors: ['#E74C3C', '#9B59B6', '#27AE60', '#27AE60', '#27AE60'],
      state: 'induced',
      note: 'Lactose present → Inducer relieves repression'
    },
    {
      name: 'trp Operon (Repressible)',
      y: h * 0.72, color: '#E74C3C',
      genes: ['trpR', 'P/O', 'trpE', 'trpD', 'trpC', 'trpB', 'trpA'],
      geneColors: ['#E74C3C', '#9B59B6', '#27AE60', '#27AE60', '#27AE60', '#27AE60', '#27AE60'],
      state: 'repressed',
      note: 'Tryptophan present → Co-repressor activates repressor'
    }
  ];

  operons.forEach(op => {
    const boxH = h * 0.28;
    const bx = w * 0.04, by = op.y - boxH * 0.5;
    const boxW = w * 0.92;

    // Background
    ctx.fillStyle = op.color + '15';
    ctx.strokeStyle = op.color + '88';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.roundRect(bx, by, boxW, boxH, 10);
    ctx.fill(); ctx.stroke();

    // Title
    ctx.fillStyle = op.color;
    ctx.font = `bold ${Math.max(10, w * 0.03)}px Arial`;
    ctx.textAlign = 'left'; ctx.textBaseline = 'alphabetic';
    ctx.fillText(op.name, bx + 10, by + 18);

    // Gene map
    const geneMapY = op.y + h * 0.01;
    const geneMapX = bx + w * 0.04;
    const geneW = (boxW - w * 0.08) / op.genes.length;
    op.genes.forEach((gene, gi) => {
      ctx.fillStyle = op.geneColors[gi];
      ctx.strokeStyle = op.geneColors[gi];
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.roundRect(geneMapX + gi * geneW + 2, geneMapY - h * 0.04, geneW - 4, h * 0.08, 4);
      ctx.fill(); ctx.stroke();
      ctx.fillStyle = '#fff';
      ctx.font = `bold ${Math.max(7, w * 0.02)}px Arial`;
      ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
      ctx.fillText(gene, geneMapX + gi * geneW + geneW * 0.5, geneMapY);
    });

    // DNA line below genes
    ctx.strokeStyle = '#4A90E2'; ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.moveTo(geneMapX, geneMapY + h * 0.04);
    ctx.lineTo(geneMapX + op.genes.length * geneW, geneMapY + h * 0.04);
    ctx.stroke();

    // State indicator
    const stateColor = op.state === 'induced' ? '#27AE60' : '#E74C3C';
    ctx.fillStyle = stateColor + '33';
    ctx.strokeStyle = stateColor;
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.roundRect(bx + boxW - w * 0.2, by + 6, w * 0.18, h * 0.04, 5);
    ctx.fill(); ctx.stroke();
    ctx.fillStyle = stateColor;
    ctx.font = `bold ${Math.max(8, w * 0.024)}px Arial`;
    ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
    ctx.fillText(op.state === 'induced' ? 'ACTIVE ▲' : 'SILENCED ▼', bx + boxW - w * 0.11, by + h * 0.02 + 6);

    // Note
    ctx.fillStyle = '#666';
    ctx.font = `italic ${Math.max(8, w * 0.022)}px Arial`;
    ctx.textAlign = 'left'; ctx.textBaseline = 'alphabetic';
    ctx.fillText(op.note, bx + 10, by + boxH - 8);
  });
}

static _drawLacOperon(ctx, width, height, componentFocus) {
  const w = width, h = height;
  const cx = w * 0.5;

  ctx.fillStyle = '#222';
  ctx.font = `bold ${Math.max(13, w * 0.038)}px Arial`;
  ctx.textAlign = 'center'; ctx.textBaseline = 'alphabetic';
  ctx.fillText('lac Operon', cx, 22);

  // Two states: repressed (top) / induced (bottom)
  const states = [
    { label: 'Repressed (no lactose)', y: h * 0.28, active: false },
    { label: 'Induced (lactose present)', y: h * 0.72, active: true }
  ];

  states.forEach(state => {
    const dnaY = state.y;

    // DNA
    ctx.strokeStyle = '#4A90E2'; ctx.lineWidth = 5;
    ctx.beginPath(); ctx.moveTo(w * 0.04, dnaY); ctx.lineTo(w * 0.96, dnaY); ctx.stroke();

    // Genes
    const genes = [
      { x: w * 0.1, w: w * 0.09, label: 'lacI', color: '#E74C3C' },
      { x: w * 0.22, w: w * 0.05, label: 'P', color: '#9B59B6' },
      { x: w * 0.27, w: w * 0.04, label: 'O', color: '#8E44AD' },
      { x: w * 0.32, w: w * 0.14, label: 'lacZ', color: '#27AE60' },
      { x: w * 0.47, w: w * 0.12, label: 'lacY', color: '#2ECC71' },
      { x: w * 0.6, w: w * 0.1, label: 'lacA', color: '#1ABC9C' }
    ];

    genes.forEach(g => {
      ctx.fillStyle = state.active || g.label === 'lacI' || g.label === 'P' ? g.color : g.color + '66';
      ctx.strokeStyle = g.color;
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.roundRect(g.x, dnaY - h * 0.07, g.w, h * 0.1, 4);
      ctx.fill(); ctx.stroke();
      ctx.fillStyle = '#fff';
      ctx.font = `bold ${Math.max(8, w * 0.024)}px Arial`;
      ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
      ctx.fillText(g.label, g.x + g.w * 0.5, dnaY - h * 0.02);
    });

    // Repressor protein
    const repX = w * 0.295, repY = dnaY - h * 0.2;
    ctx.fillStyle = state.active ? 'rgba(231,76,60,0.3)' : '#E74C3C';
    ctx.strokeStyle = '#C0392B'; ctx.lineWidth = 2;
    ctx.beginPath(); ctx.arc(repX, repY, w * 0.05, 0, Math.PI * 2); ctx.fill(); ctx.stroke();
    ctx.fillStyle = state.active ? '#999' : '#fff';
    ctx.font = `bold ${Math.max(7, w * 0.02)}px Arial`;
    ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
    ctx.fillText('Rep', repX, repY - 4);
    ctx.font = `${Math.max(6, w * 0.016)}px Arial`;
    ctx.fillText(state.active ? '(inactive)' : '(active)', repX, repY + 6);

    if (state.active) {
      // Allolactose
      ctx.fillStyle = '#F39C12';
      ctx.beginPath(); ctx.arc(repX + w * 0.1, repY, w * 0.03, 0, Math.PI * 2); ctx.fill();
      ctx.fillStyle = '#fff'; ctx.font = `${Math.max(6, w * 0.016)}px Arial`;
      ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
      ctx.fillText('Allo-\nlact.', repX + w * 0.1, repY);
    } else {
      // Repressor binding to operator
      ctx.strokeStyle = '#C0392B'; ctx.lineWidth = 2; ctx.setLineDash([3, 3]);
      ctx.beginPath(); ctx.moveTo(repX, repY + w * 0.05); ctx.lineTo(repX, dnaY - h * 0.07); ctx.stroke();
      ctx.setLineDash([]);
    }

    // mRNA arrow
    if (state.active) {
      ctx.strokeStyle = '#FF9F43'; ctx.lineWidth = 3;
      ctx.beginPath();
      ctx.moveTo(w * 0.27, dnaY - h * 0.07);
      ctx.lineTo(w * 0.27, dnaY - h * 0.28);
      ctx.lineTo(w * 0.75, dnaY - h * 0.28);
      ctx.stroke();
      ctx.fillStyle = '#FF9F43';
      ctx.beginPath();
      ctx.moveTo(w * 0.75, dnaY - h * 0.28);
      ctx.lineTo(w * 0.73, dnaY - h * 0.28 - 5);
      ctx.lineTo(w * 0.73, dnaY - h * 0.28 + 5);
      ctx.closePath(); ctx.fill();
      ctx.fillStyle = '#FF9F43';
      ctx.font = `${Math.max(8, w * 0.022)}px Arial`;
      ctx.textAlign = 'center'; ctx.textBaseline = 'alphabetic';
      ctx.fillText('mRNA', w * 0.52, dnaY - h * 0.3);
    } else {
      ctx.fillStyle = '#E74C3C';
      ctx.font = `bold ${Math.max(9, w * 0.026)}px Arial`;
      ctx.textAlign = 'center'; ctx.textBaseline = 'alphabetic';
      ctx.fillText('✕ Transcription blocked', w * 0.55, dnaY - h * 0.12);
    }

    ctx.fillStyle = '#333';
    ctx.font = `bold ${Math.max(10, w * 0.028)}px Arial`;
    ctx.textAlign = 'left'; ctx.textBaseline = 'alphabetic';
    ctx.fillText(state.label, w * 0.04, dnaY + h * 0.1);
  });
}

static _drawTrpOperon(ctx, width, height, componentFocus) {
  const w = width, h = height;
  const cx = w * 0.5;

  ctx.fillStyle = '#222';
  ctx.font = `bold ${Math.max(13, w * 0.038)}px Arial`;
  ctx.textAlign = 'center'; ctx.textBaseline = 'alphabetic';
  ctx.fillText('trp Operon', cx, 22);

  const states = [
    { label: 'Active (low tryptophan)', y: h * 0.3, active: true },
    { label: 'Repressed (high tryptophan)', y: h * 0.72, active: false }
  ];

  states.forEach(state => {
    const dnaY = state.y;
    ctx.strokeStyle = '#4A90E2'; ctx.lineWidth = 5;
    ctx.beginPath(); ctx.moveTo(w * 0.04, dnaY); ctx.lineTo(w * 0.96, dnaY); ctx.stroke();

    const genes = [
      { x: w * 0.08, w: w * 0.08, label: 'trpR', color: '#E74C3C' },
      { x: w * 0.19, w: w * 0.04, label: 'P', color: '#9B59B6' },
      { x: w * 0.24, w: w * 0.08, label: 'trpE', color: '#3498DB' },
      { x: w * 0.33, w: w * 0.08, label: 'trpD', color: '#2980B9' },
      { x: w * 0.42, w: w * 0.08, label: 'trpC', color: '#27AE60' },
      { x: w * 0.51, w: w * 0.08, label: 'trpB', color: '#2ECC71' },
      { x: w * 0.6, w: w * 0.08, label: 'trpA', color: '#1ABC9C' }
    ];

    genes.forEach(g => {
      ctx.fillStyle = state.active ? g.color : g.color + '55';
      ctx.strokeStyle = g.color; ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.roundRect(g.x, dnaY - h * 0.07, g.w, h * 0.1, 4);
      ctx.fill(); ctx.stroke();
      ctx.fillStyle = '#fff';
      ctx.font = `bold ${Math.max(7, w * 0.02)}px Arial`;
      ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
      ctx.fillText(g.label, g.x + g.w * 0.5, dnaY - h * 0.02);
    });

    // Aporepressor
    const arepX = w * 0.26, arepY = dnaY - h * 0.2;
    ctx.fillStyle = state.active ? 'rgba(231,76,60,0.3)' : '#E74C3C';
    ctx.strokeStyle = '#C0392B'; ctx.lineWidth = 2;
    ctx.beginPath(); ctx.arc(arepX, arepY, w * 0.05, 0, Math.PI * 2); ctx.fill(); ctx.stroke();
    ctx.fillStyle = state.active ? '#999' : '#fff';
    ctx.font = `bold ${Math.max(6, w * 0.018)}px Arial`;
    ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
    ctx.fillText(state.active ? 'Apo-rep\n(inactive)' : 'Co-rep\n(active)', arepX, arepY);

    if (!state.active) {
      // Tryptophan co-repressor
      ctx.fillStyle = '#8E44AD';
      ctx.beginPath(); ctx.arc(arepX + w * 0.1, arepY, w * 0.03, 0, Math.PI * 2); ctx.fill();
      ctx.fillStyle = '#fff'; ctx.font = `${Math.max(6, w * 0.016)}px Arial`;
      ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
      ctx.fillText('Trp', arepX + w * 0.1, arepY);
      ctx.strokeStyle = '#C0392B'; ctx.lineWidth = 2; ctx.setLineDash([3, 3]);
      ctx.beginPath(); ctx.moveTo(arepX, arepY + w * 0.05); ctx.lineTo(arepX, dnaY - h * 0.07); ctx.stroke();
      ctx.setLineDash([]);
    }

    if (state.active) {
      ctx.strokeStyle = '#FF9F43'; ctx.lineWidth = 3;
      ctx.beginPath();
      ctx.moveTo(w * 0.24, dnaY - h * 0.07);
      ctx.lineTo(w * 0.24, dnaY - h * 0.28);
      ctx.lineTo(w * 0.72, dnaY - h * 0.28);
      ctx.stroke();
      ctx.fillStyle = '#FF9F43';
      ctx.beginPath();
      ctx.moveTo(w * 0.72, dnaY - h * 0.28);
      ctx.lineTo(w * 0.70, dnaY - h * 0.28 - 5);
      ctx.lineTo(w * 0.70, dnaY - h * 0.28 + 5);
      ctx.closePath(); ctx.fill();
      ctx.fillStyle = '#FF9F43';
      ctx.font = `${Math.max(8, w * 0.022)}px Arial`;
      ctx.textAlign = 'center'; ctx.textBaseline = 'alphabetic';
      ctx.fillText('mRNA → Trp enzymes', w * 0.5, dnaY - h * 0.3);
    } else {
      ctx.fillStyle = '#E74C3C';
      ctx.font = `bold ${Math.max(9, w * 0.026)}px Arial`;
      ctx.textAlign = 'center'; ctx.textBaseline = 'alphabetic';
      ctx.fillText('✕ Transcription blocked', w * 0.55, dnaY - h * 0.12);
    }

    ctx.fillStyle = '#333';
    ctx.font = `bold ${Math.max(10, w * 0.028)}px Arial`;
    ctx.textAlign = 'left'; ctx.textBaseline = 'alphabetic';
    ctx.fillText(state.label, w * 0.04, dnaY + h * 0.1);
  });
}

// ─────────────────────────────────────────────────────────────────────────────

static drawCompleteRNAInterference(ctx, x, y, width, height, view, componentFocus) {
  ctx.save();
  ctx.translate(x, y);

  switch (view) {
    case 'complete':
    case 'overview':
    default:
      this._drawRNAInterferenceOverview(ctx, width, height, componentFocus);
      break;
    case 'mirna':
      this.drawMicroRNA(ctx, width, height, componentFocus);
      break;
    case 'sirna':
      this.drawSiRNA(ctx, width, height, componentFocus);
      break;
    case 'rnai':
      this.drawRNAInterference(ctx, width, height, componentFocus);
      break;
    case 'dicer':
      this._drawDicerProcessing(ctx, width, height, componentFocus);
      break;
    case 'risc':
      this._drawRISCAssembly(ctx, width, height, componentFocus);
      break;
  }

  ctx.restore();
}

static _drawRNAInterferenceOverview(ctx, width, height, componentFocus) {
  const w = width, h = height;
  const cx = w * 0.5;

  ctx.fillStyle = '#222';
  ctx.font = `bold ${Math.max(13, w * 0.038)}px Arial`;
  ctx.textAlign = 'center'; ctx.textBaseline = 'alphabetic';
  ctx.fillText('RNA Interference Pathway', cx, 22);

  // Two entry paths: miRNA (left) and siRNA (right)
  const paths = [
    {
      label: 'miRNA Pathway', color: '#9B59B6',
      x: w * 0.25,
      steps: [
        { y: h * 0.1, label: 'pri-miRNA\n(RNA Pol II)' },
        { y: h * 0.24, label: 'pre-miRNA\n(Drosha/DGCR8)' },
        { y: h * 0.38, label: 'pre-miRNA\n(Nuclear export)' }
      ]
    },
    {
      label: 'siRNA Pathway', color: '#3498DB',
      x: w * 0.75,
      steps: [
        { y: h * 0.1, label: 'dsRNA\n(viral/exogenous)' },
        { y: h * 0.24, label: 'Long dsRNA' },
        { y: h * 0.38, label: 'dsRNA in cytoplasm' }
      ]
    }
  ];

  paths.forEach(path => {
    ctx.fillStyle = path.color;
    ctx.font = `bold ${Math.max(10, w * 0.03)}px Arial`;
    ctx.textAlign = 'center'; ctx.textBaseline = 'alphabetic';
    ctx.fillText(path.label, path.x, h * 0.04);

    path.steps.forEach((step, i) => {
      const lines = step.label.split('\n');
      ctx.fillStyle = path.color + '33';
      ctx.strokeStyle = path.color;
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.roundRect(path.x - w * 0.14, step.y - h * 0.04, w * 0.28, h * 0.075, 6);
      ctx.fill(); ctx.stroke();
      lines.forEach((line, li) => {
        ctx.fillStyle = path.color;
        ctx.font = `${Math.max(8, w * 0.022)}px Arial`;
        ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
        ctx.fillText(line, path.x, step.y - h * 0.008 + li * h * 0.028);
      });

      if (i < path.steps.length - 1) {
        ctx.strokeStyle = path.color; ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(path.x, step.y + h * 0.035);
        ctx.lineTo(path.x, path.steps[i + 1].y - h * 0.04);
        ctx.stroke();
        ctx.fillStyle = path.color;
        ctx.beginPath();
        ctx.moveTo(path.x, path.steps[i + 1].y - h * 0.04);
        ctx.lineTo(path.x - 5, path.steps[i + 1].y - h * 0.04 - 8);
        ctx.lineTo(path.x + 5, path.steps[i + 1].y - h * 0.04 - 8);
        ctx.closePath(); ctx.fill();
      }
    });
  });

  // Convergence at DICER
  const dicerY = h * 0.52;
  ctx.fillStyle = '#E74C3C';
  ctx.strokeStyle = '#C0392B'; ctx.lineWidth = 3;
  ctx.beginPath();
  ctx.ellipse(cx, dicerY, w * 0.1, h * 0.05, 0, 0, Math.PI * 2);
  ctx.fill(); ctx.stroke();
  ctx.fillStyle = '#fff';
  ctx.font = `bold ${Math.max(9, w * 0.028)}px Arial`;
  ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
  ctx.fillText('DICER', cx, dicerY);

  // Arrows converging to DICER
  [w * 0.25, w * 0.75].forEach(px => {
    ctx.strokeStyle = '#E74C3C'; ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(px, h * 0.455);
    ctx.lineTo(cx + (px > cx ? w * 0.1 : -w * 0.1), dicerY);
    ctx.stroke();
  });

  // RISC loading
  const riscY = h * 0.67;
  ctx.fillStyle = '#F39C12';
  ctx.strokeStyle = '#D35400'; ctx.lineWidth = 3;
  ctx.beginPath();
  ctx.ellipse(cx, riscY, w * 0.12, h * 0.05, 0, 0, Math.PI * 2);
  ctx.fill(); ctx.stroke();
  ctx.fillStyle = '#fff';
  ctx.font = `bold ${Math.max(9, w * 0.028)}px Arial`;
  ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
  ctx.fillText('RISC (Ago2)', cx, riscY);

  // DICER → RISC arrow
  ctx.strokeStyle = '#F39C12'; ctx.lineWidth = 3;
  ctx.beginPath();
  ctx.moveTo(cx, dicerY + h * 0.05);
  ctx.lineTo(cx, riscY - h * 0.05);
  ctx.stroke();
  ctx.fillStyle = '#F39C12';
  ctx.beginPath();
  ctx.moveTo(cx, riscY - h * 0.05);
  ctx.lineTo(cx - 5, riscY - h * 0.05 - 8);
  ctx.lineTo(cx + 5, riscY - h * 0.05 - 8);
  ctx.closePath(); ctx.fill();
  ctx.fillStyle = '#F39C12';
  ctx.font = `${Math.max(8, w * 0.022)}px Arial`;
  ctx.textAlign = 'left'; ctx.textBaseline = 'middle';
  ctx.fillText('21-23nt siRNA/miRNA', cx + w * 0.13, (dicerY + riscY) * 0.5);

  // Outcomes
  const outcomes = [
    { x: w * 0.22, y: h * 0.85, label: 'mRNA Cleavage', color: '#E74C3C', from: 'sirna' },
    { x: w * 0.78, y: h * 0.85, label: 'Translation\nRepression', color: '#9B59B6', from: 'mirna' }
  ];

  outcomes.forEach(oc => {
    ctx.fillStyle = oc.color + '33';
    ctx.strokeStyle = oc.color; ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.roundRect(oc.x - w * 0.14, oc.y - h * 0.05, w * 0.28, h * 0.08, 6);
    ctx.fill(); ctx.stroke();
    oc.label.split('\n').forEach((line, li) => {
      ctx.fillStyle = oc.color;
      ctx.font = `bold ${Math.max(8, w * 0.024)}px Arial`;
      ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
      ctx.fillText(line, oc.x, oc.y - h * 0.01 + li * h * 0.03);
    });
    ctx.strokeStyle = oc.color; ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(cx + (oc.x > cx ? w * 0.12 : -w * 0.12), riscY);
    ctx.lineTo(oc.x, oc.y - h * 0.05);
    ctx.stroke();
  });
}

static _drawDicerProcessing(ctx, width, height, componentFocus) {
  const w = width, h = height;
  const cx = w * 0.5, cy = h * 0.5;

  ctx.fillStyle = '#222';
  ctx.font = `bold ${Math.max(13, w * 0.038)}px Arial`;
  ctx.textAlign = 'center'; ctx.textBaseline = 'alphabetic';
  ctx.fillText('DICER Processing', cx, 22);

  // dsRNA input
  for (let s = 0; s < 2; s++) {
    ctx.strokeStyle = s === 0 ? '#4A90E2' : '#E24A4A';
    ctx.lineWidth = 5;
    ctx.beginPath();
    ctx.moveTo(w * 0.06, cy - h * 0.25 + s * 14 - 7);
    ctx.lineTo(cx - w * 0.04, cy - h * 0.25 + s * 14 - 7);
    ctx.stroke();
  }
  ctx.fillStyle = '#4A90E2'; ctx.font = `${Math.max(9, w * 0.026)}px Arial`;
  ctx.textAlign = 'center'; ctx.textBaseline = 'alphabetic';
  ctx.fillText('dsRNA (long)', w * 0.2, cy - h * 0.33);

  // DICER enzyme
  const dg = ctx.createRadialGradient(cx - 10, cy - 10, 5, cx, cy, w * 0.2);
  dg.addColorStop(0, 'rgba(231,76,60,0.7)');
  dg.addColorStop(1, 'rgba(231,76,60,0.25)');
  ctx.fillStyle = dg; ctx.strokeStyle = '#C0392B'; ctx.lineWidth = 3;
  ctx.beginPath(); ctx.ellipse(cx, cy, w * 0.22, h * 0.25, 0, 0, Math.PI * 2);
  ctx.fill(); ctx.stroke();
  ctx.fillStyle = '#fff';
  ctx.font = `bold ${Math.max(10, w * 0.03)}px Arial`;
  ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
  ctx.fillText('DICER', cx, cy - h * 0.06);
  ctx.font = `${Math.max(8, w * 0.022)}px Arial`;
  ctx.fillText('(RNase III family)', cx, cy + h * 0.04);
  // Domains
  ['PAZ', 'RNase IIIa', 'RNase IIIb'].forEach((d, di) => {
    ctx.fillStyle = ['#F39C12', '#3498DB', '#9B59B6'][di] + 'AA';
    ctx.strokeStyle = ['#F39C12', '#3498DB', '#9B59B6'][di];
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.roundRect(cx - w * 0.18 + di * w * 0.12, cy + h * 0.08, w * 0.1, h * 0.06, 4);
    ctx.fill(); ctx.stroke();
    ctx.fillStyle = '#fff'; ctx.font = `${Math.max(6, w * 0.016)}px Arial`;
    ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
    ctx.fillText(d, cx - w * 0.13 + di * w * 0.12, cy + h * 0.11);
  });

  // siRNA/miRNA output (21-23 nt duplexes)
  for (let frag = 0; frag < 3; frag++) {
    const fx = w * 0.1 + frag * w * 0.28, fy = cy + h * 0.3;
    for (let s = 0; s < 2; s++) {
      ctx.strokeStyle = s === 0 ? '#4A90E2' : '#E24A4A';
      ctx.lineWidth = 4;
      ctx.beginPath();
      ctx.moveTo(fx, fy + s * 10 - 5); ctx.lineTo(fx + w * 0.18, fy + s * 10 - 5); ctx.stroke();
    }
    // 2nt overhang
    ctx.strokeStyle = '#4A90E2'; ctx.lineWidth = 3;
    ctx.beginPath(); ctx.moveTo(fx + w * 0.18, fy - 5); ctx.lineTo(fx + w * 0.22, fy - 5); ctx.stroke();
    ctx.strokeStyle = '#E24A4A'; ctx.lineWidth = 3;
    ctx.beginPath(); ctx.moveTo(fx - w * 0.04, fy + 5); ctx.lineTo(fx, fy + 5); ctx.stroke();
  }
  ctx.fillStyle = '#333'; ctx.font = `${Math.max(9, w * 0.026)}px Arial`;
  ctx.textAlign = 'center'; ctx.textBaseline = 'alphabetic';
  ctx.fillText('~21-23 nt siRNA duplexes (2nt 3\' overhangs)', cx, cy + h * 0.44);
}

static _drawRISCAssembly(ctx, width, height, componentFocus) {
  const w = width, h = height;
  const cx = w * 0.5, cy = h * 0.5;

  ctx.fillStyle = '#222';
  ctx.font = `bold ${Math.max(13, w * 0.038)}px Arial`;
  ctx.textAlign = 'center'; ctx.textBaseline = 'alphabetic';
  ctx.fillText('RISC Assembly & mRNA Cleavage', cx, 22);

  // siRNA duplex
  for (let s = 0; s < 2; s++) {
    ctx.strokeStyle = s === 0 ? '#4A90E2' : '#E24A4A';
    ctx.lineWidth = 5;
    ctx.beginPath();
    ctx.moveTo(w * 0.1, h * 0.18 + s * 12 - 6);
    ctx.lineTo(w * 0.44, h * 0.18 + s * 12 - 6);
    ctx.stroke();
  }
  ctx.fillStyle = '#333'; ctx.font = `${Math.max(8, w * 0.022)}px Arial`;
  ctx.textAlign = 'center'; ctx.textBaseline = 'alphabetic';
  ctx.fillText('siRNA duplex', w * 0.27, h * 0.12);

  // AGO2 loading
  const ago2X = cx + w * 0.12, ago2Y = h * 0.38;
  const ag = ctx.createRadialGradient(ago2X - 8, ago2Y - 8, 4, ago2X, ago2Y, w * 0.15);
  ag.addColorStop(0, 'rgba(243,156,18,0.7)');
  ag.addColorStop(1, 'rgba(243,156,18,0.3)');
  ctx.fillStyle = ag; ctx.strokeStyle = '#D35400'; ctx.lineWidth = 3;
  ctx.beginPath(); ctx.ellipse(ago2X, ago2Y, w * 0.18, h * 0.18, 0, 0, Math.PI * 2);
  ctx.fill(); ctx.stroke();
  ctx.fillStyle = '#fff';
  ctx.font = `bold ${Math.max(10, w * 0.03)}px Arial`;
  ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
  ctx.fillText('AGO2', ago2X, ago2Y - 6);
  ctx.font = `${Math.max(7, w * 0.02)}px Arial`;
  ctx.fillText('(Slicer)', ago2X, ago2Y + 8);

  // Passenger strand ejection
  ctx.strokeStyle = '#E24A4A'; ctx.lineWidth = 3; ctx.setLineDash([4, 3]);
  ctx.beginPath();
  ctx.moveTo(ago2X - w * 0.1, ago2Y - h * 0.08);
  ctx.lineTo(w * 0.08, h * 0.22);
  ctx.stroke(); ctx.setLineDash([]);
  ctx.fillStyle = '#E24A4A'; ctx.font = `${Math.max(8, w * 0.022)}px Arial`;
  ctx.textAlign = 'left'; ctx.textBaseline = 'alphabetic';
  ctx.fillText('Passenger\nstrand degraded', w * 0.04, h * 0.22);

  // Guide strand (antisense) in RISC
  ctx.strokeStyle = '#4A90E2'; ctx.lineWidth = 4;
  ctx.beginPath();
  ctx.moveTo(ago2X - w * 0.15, ago2Y);
  ctx.lineTo(ago2X + w * 0.15, ago2Y);
  ctx.stroke();
  ctx.fillStyle = '#4A90E2'; ctx.font = `${Math.max(8, w * 0.022)}px Arial`;
  ctx.textAlign = 'center'; ctx.textBaseline = 'alphabetic';
  ctx.fillText('Guide strand (antisense)', ago2X, ago2Y + h * 0.16 + 6);

  // Target mRNA
  ctx.strokeStyle = '#FF9F43'; ctx.lineWidth = 5;
  ctx.beginPath();
  ctx.moveTo(w * 0.06, h * 0.74); ctx.lineTo(w * 0.94, h * 0.74); ctx.stroke();
  ctx.fillStyle = '#FF9F43'; ctx.font = `${Math.max(8, w * 0.022)}px Arial`;
  ctx.textAlign = 'right'; ctx.textBaseline = 'middle';
  ctx.fillText('Target mRNA', w * 0.94, h * 0.68);

  // Complementary binding
  ctx.strokeStyle = 'rgba(100,100,100,0.4)'; ctx.lineWidth = 2; ctx.setLineDash([3, 3]);
  for (let i = 0; i < 8; i++) {
    const bx = ago2X - w * 0.14 + i * w * 0.04;
    ctx.beginPath(); ctx.moveTo(bx, ago2Y + h * 0.16); ctx.lineTo(bx, h * 0.74); ctx.stroke();
  }
  ctx.setLineDash([]);

  // Cleavage scissors
  ctx.fillStyle = '#E74C3C';
  ctx.font = `${Math.max(14, w * 0.04)}px Arial`;
  ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
  ctx.fillText('✂', ago2X, (ago2Y + h * 0.16 + h * 0.74) * 0.5);
  ctx.strokeStyle = '#E74C3C'; ctx.lineWidth = 3;
  ctx.beginPath();
  ctx.moveTo(ago2X, h * 0.74 - 2);
  ctx.lineTo(ago2X, h * 0.74 + 2);
  ctx.stroke();

  // Degradation
  ctx.fillStyle = '#E74C3C'; ctx.font = `bold ${Math.max(9, w * 0.026)}px Arial`;
  ctx.textAlign = 'center'; ctx.textBaseline = 'alphabetic';
  ctx.fillText('mRNA cleavage → degradation', cx, h - 8);
}

// ─────────────────────────────────────────────────────────────────────────────

static drawCompleteEpigenetics(ctx, x, y, width, height, view, componentFocus) {
  ctx.save();
  ctx.translate(x, y);

  switch (view) {
    case 'complete':
    case 'overview':
    default:
      this._drawEpigeneticsOverview(ctx, width, height, componentFocus);
      break;
    case 'histone-modification':
      this.drawHistoneModification(ctx, width, height, componentFocus);
      break;
    case 'dna-methylation':
      this.drawDNAMethylation(ctx, width, height, componentFocus);
      break;
    case 'chromatin':
      this.drawChromatin(ctx, width, height, componentFocus);
      break;
    case 'heterochromatin':
      this.drawHeterochromatin(ctx, width, height, componentFocus);
      break;
    case 'euchromatin':
      this.drawEuchromatin(ctx, width, height, componentFocus);
      break;
    case 'nucleosome':
      this.drawNucleosome(ctx, width, height, componentFocus);
      break;
  }

  ctx.restore();
}

static _drawEpigeneticsOverview(ctx, width, height, componentFocus) {
  const w = width, h = height;
  const cx = w * 0.5;

  ctx.fillStyle = '#222';
  ctx.font = `bold ${Math.max(13, w * 0.038)}px Arial`;
  ctx.textAlign = 'center'; ctx.textBaseline = 'alphabetic';
  ctx.fillText('Epigenetic Modifications Overview', cx, 22);

  // Central nucleosome
  const ncx = cx, ncy = h * 0.45;
  // Core
  const cg = ctx.createRadialGradient(ncx - 8, ncy - 8, 4, ncx, ncy, w * 0.1);
  cg.addColorStop(0, '#FFE082'); cg.addColorStop(1, '#E8A000');
  ctx.fillStyle = cg; ctx.strokeStyle = '#B8860B'; ctx.lineWidth = 3;
  ctx.beginPath(); ctx.ellipse(ncx, ncy, w * 0.1, h * 0.1, 0, 0, Math.PI * 2);
  ctx.fill(); ctx.stroke();
  ctx.fillStyle = '#fff'; ctx.font = `bold ${Math.max(9, w * 0.026)}px Arial`;
  ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
  ctx.fillText('Histone', ncx, ncy - 5);
  ctx.fillText('Octamer', ncx, ncy + 7);

  // DNA wrapping
  ctx.strokeStyle = '#4A90E2'; ctx.lineWidth = 5;
  ctx.beginPath();
  ctx.ellipse(ncx, ncy, w * 0.135, h * 0.14, 0, -0.3, Math.PI * 2.3);
  ctx.stroke();

  // Modification categories surrounding the nucleosome
  const modifications = [
    {
      label: 'Histone Acetylation', short: 'Ac',
      angle: -Math.PI * 0.5, color: '#27AE60',
      desc: 'HAT adds; HDAC removes\nActivates transcription',
      residues: 'H3K9ac, H3K14ac'
    },
    {
      label: 'Histone Methylation', short: 'Me',
      angle: -Math.PI * 0.1, color: '#3498DB',
      desc: 'HMT adds; HDM removes\nActivate or repress',
      residues: 'H3K4me3 (act), H3K27me3 (rep)'
    },
    {
      label: 'Histone Phosphorylation', short: 'Ph',
      angle: Math.PI * 0.3, color: '#E74C3C',
      desc: 'Kinase adds\nDNA damage response',
      residues: 'γH2AX (DSB marker)'
    },
    {
      label: 'Histone Ubiquitination', short: 'Ub',
      angle: Math.PI * 0.7, color: '#E67E22',
      desc: 'E3 ligase adds\nTranscription regulation',
      residues: 'H2AK119ub, H2BK120ub'
    },
    {
      label: 'DNA Methylation', short: 'mC',
      angle: Math.PI * 1.1, color: '#9B59B6',
      desc: 'DNMT adds; TET removes\nGene silencing',
      residues: '5mC at CpG sites'
    },
    {
      label: 'Histone Sumoylation', short: 'Su',
      angle: Math.PI * 1.5, color: '#F39C12',
      desc: 'SUMO ligase adds\nTranscription repression',
      residues: 'H4K20su'
    }
  ];

  const armLen = w * 0.28;
  modifications.forEach(mod => {
    const mx = ncx + Math.cos(mod.angle) * armLen;
    const my = ncy + Math.sin(mod.angle) * armLen * 0.9;

    // Arm line
    ctx.strokeStyle = mod.color + 'AA'; ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(ncx + Math.cos(mod.angle) * w * 0.135, ncy + Math.sin(mod.angle) * h * 0.14);
    ctx.lineTo(mx - Math.cos(mod.angle) * w * 0.07, my - Math.sin(mod.angle) * h * 0.05);
    ctx.stroke();

    // Badge
    ctx.fillStyle = mod.color;
    ctx.beginPath();
    ctx.arc(mx, my, w * 0.035, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = '#fff';
    ctx.font = `bold ${Math.max(7, w * 0.02)}px Arial`;
    ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
    ctx.fillText(mod.short, mx, my);

    // Label box
    const lbx = mx + Math.cos(mod.angle) * w * 0.06;
    const lby = my + Math.sin(mod.angle) * h * 0.04;
    ctx.fillStyle = mod.color;
    ctx.font = `bold ${Math.max(7, w * 0.02)}px Arial`;
    ctx.textAlign = mod.angle > -Math.PI * 0.3 && mod.angle < Math.PI * 0.8 ? 'left' : 'right';
    ctx.textBaseline = 'middle';
    ctx.fillText(mod.label, lbx, lby - h * 0.015);
    ctx.fillStyle = '#666'; ctx.font = `${Math.max(6, w * 0.016)}px Arial`;
    ctx.fillText(mod.residues, lbx, lby + h * 0.015);
  });

  // Outcome arrows (bottom)
  const outcomes = [
    { x: cx - w * 0.2, label: 'Euchromatin\n(Active)', color: '#27AE60' },
    { x: cx + w * 0.2, label: 'Heterochromatin\n(Silenced)', color: '#E74C3C' }
  ];

  outcomes.forEach(oc => {
    ctx.fillStyle = oc.color + '33'; ctx.strokeStyle = oc.color; ctx.lineWidth = 2;
    ctx.beginPath(); ctx.roundRect(oc.x - w * 0.1, h * 0.86, w * 0.2, h * 0.1, 6); ctx.fill(); ctx.stroke();
    oc.label.split('\n').forEach((line, li) => {
      ctx.fillStyle = oc.color;
      ctx.font = `bold ${Math.max(8, w * 0.022)}px Arial`;
      ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
      ctx.fillText(line, oc.x, h * 0.91 + li * h * 0.03);
    });
  });
}

// ─────────────────────────────────────────────────────────────────────────────

static drawCompleteSignalTransduction(ctx, x, y, width, height, view, componentFocus) {
  ctx.save();
  ctx.translate(x, y);

  switch (view) {
    case 'complete':
    case 'overview':
    default:
      this._drawSignalTransductionOverview(ctx, width, height, componentFocus);
      break;
    case 'receptor':
      this.drawReceptorProtein(ctx, width, height, componentFocus);
      break;
    case 'g-protein':
      this.drawGProtein(ctx, width, height, componentFocus);
      break;
    case 'kinase':
      this.drawProteinKinase(ctx, width, height, componentFocus);
      break;
    case 'phosphorylation':
      this.drawPhosphorylation(ctx, width, height, componentFocus);
      break;
    case 'signal-transduction':
      this.drawSignalTransduction(ctx, width, height, componentFocus);
      break;
  }

  ctx.restore();
}

static _drawSignalTransductionOverview(ctx, width, height, componentFocus) {
  const w = width, h = height;
  const cx = w * 0.5;

  ctx.fillStyle = '#222';
  ctx.font = `bold ${Math.max(13, w * 0.038)}px Arial`;
  ctx.textAlign = 'center'; ctx.textBaseline = 'alphabetic';
  ctx.fillText('Signal Transduction Pathway', cx, 22);

  // Extracellular space
  ctx.fillStyle = 'rgba(52,152,219,0.08)';
  ctx.beginPath(); ctx.roundRect(w * 0.04, h * 0.04, w * 0.92, h * 0.16, 8); ctx.fill();
  ctx.fillStyle = '#3498DB'; ctx.font = `italic ${Math.max(8, w * 0.022)}px Arial`;
  ctx.textAlign = 'left'; ctx.textBaseline = 'alphabetic';
  ctx.fillText('Extracellular', w * 0.06, h * 0.1);

  // Plasma membrane
  ctx.fillStyle = 'rgba(231,76,60,0.15)';
  ctx.beginPath(); ctx.roundRect(w * 0.04, h * 0.2, w * 0.92, h * 0.1, 0); ctx.fill();
  ctx.strokeStyle = '#E74C3C'; ctx.lineWidth = 2;
  ctx.beginPath(); ctx.moveTo(w * 0.04, h * 0.2); ctx.lineTo(w * 0.96, h * 0.2); ctx.stroke();
  ctx.beginPath(); ctx.moveTo(w * 0.04, h * 0.3); ctx.lineTo(w * 0.96, h * 0.3); ctx.stroke();
  ctx.fillStyle = '#E74C3C'; ctx.font = `italic ${Math.max(8, w * 0.022)}px Arial`;
  ctx.textAlign = 'left'; ctx.textBaseline = 'middle';
  ctx.fillText('Plasma Membrane', w * 0.06, h * 0.25);

  // Cytoplasm
  ctx.fillStyle = 'rgba(39,174,96,0.05)';
  ctx.beginPath(); ctx.roundRect(w * 0.04, h * 0.3, w * 0.92, h * 0.38, 0); ctx.fill();
  ctx.fillStyle = '#27AE60'; ctx.font = `italic ${Math.max(8, w * 0.022)}px Arial`;
  ctx.textAlign = 'left'; ctx.textBaseline = 'alphabetic';
  ctx.fillText('Cytoplasm', w * 0.06, h * 0.35);

  // Nucleus
  ctx.fillStyle = 'rgba(142,68,173,0.1)';
  ctx.strokeStyle = '#8E44AD'; ctx.lineWidth = 2;
  ctx.setLineDash([5, 3]);
  ctx.beginPath(); ctx.roundRect(w * 0.04, h * 0.68, w * 0.92, h * 0.28, 8); ctx.fill(); ctx.stroke();
  ctx.setLineDash([]);
  ctx.fillStyle = '#8E44AD'; ctx.font = `italic ${Math.max(8, w * 0.022)}px Arial`;
  ctx.textAlign = 'left'; ctx.textBaseline = 'alphabetic';
  ctx.fillText('Nucleus', w * 0.06, h * 0.73);

  // Cascade components
  const components = [
    { label: 'Ligand', x: cx, y: h * 0.09, color: '#F39C12', r: w * 0.055, desc: '' },
    { label: 'Receptor\n(GPCR/RTK)', x: cx, y: h * 0.25, color: '#E74C3C', r: w * 0.07, desc: '' },
    { label: 'G-protein/\nAdaptor', x: cx, y: h * 0.38, color: '#E67E22', r: w * 0.065, desc: 'GDP→GTP' },
    { label: 'Second\nMessenger', x: cx - w * 0.18, y: h * 0.48, color: '#3498DB', r: w * 0.055, desc: 'cAMP/Ca²⁺' },
    { label: 'Kinase\nCascade', x: cx + w * 0.18, y: h * 0.48, color: '#27AE60', r: w * 0.055, desc: 'MAPK pathway' },
    { label: 'Transcription\nFactor', x: cx, y: h * 0.76, color: '#9B59B6', r: w * 0.065, desc: 'Activated TF' },
    { label: 'Target Gene', x: cx, y: h * 0.9, color: '#8E44AD', r: w * 0.055, desc: 'Gene expression' }
  ];

  components.forEach((comp, ci) => {
    const g = ctx.createRadialGradient(comp.x - comp.r * 0.3, comp.y - comp.r * 0.3, 3, comp.x, comp.y, comp.r);
    g.addColorStop(0, comp.color + 'DD'); g.addColorStop(1, comp.color + '66');
    ctx.fillStyle = g; ctx.strokeStyle = comp.color; ctx.lineWidth = 2;
    ctx.beginPath(); ctx.arc(comp.x, comp.y, comp.r, 0, Math.PI * 2); ctx.fill(); ctx.stroke();

    const lines = comp.label.split('\n');
    lines.forEach((line, li) => {
      ctx.fillStyle = '#fff';
      ctx.font = `bold ${Math.max(7, w * 0.02)}px Arial`;
      ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
      ctx.fillText(line, comp.x, comp.y + (li - (lines.length - 1) * 0.5) * h * 0.03);
    });

    if (comp.desc) {
      ctx.fillStyle = comp.color;
      ctx.font = `${Math.max(6, w * 0.016)}px Arial`;
      ctx.textAlign = 'center'; ctx.textBaseline = 'alphabetic';
      ctx.fillText(comp.desc, comp.x + comp.r + w * 0.02, comp.y + 4);
    }

    // Arrows to next
    if (ci < components.length - 1 && ci !== 2) {
      const next = components[ci + 1];
      const dx = next.x - comp.x, dy = next.y - comp.y;
      const dist = Math.sqrt(dx * dx + dy * dy);
      const ux = dx / dist, uy = dy / dist;
      const x1 = comp.x + ux * comp.r, y1 = comp.y + uy * comp.r;
      const x2 = next.x - ux * next.r, y2 = next.y - uy * next.r;
      ctx.strokeStyle = next.color; ctx.lineWidth = 2;
      ctx.beginPath(); ctx.moveTo(x1, y1); ctx.lineTo(x2, y2); ctx.stroke();
      ctx.fillStyle = next.color;
      ctx.beginPath();
      ctx.moveTo(x2, y2);
      ctx.lineTo(x2 - ux * 8 - uy * 5, y2 - uy * 8 + ux * 5);
      ctx.lineTo(x2 - ux * 8 + uy * 5, y2 - uy * 8 - ux * 5);
      ctx.closePath(); ctx.fill();
    }
  });

  // G-protein arrows to both second messenger and kinase
  const gp = components[2];
  [components[3], components[4]].forEach(target => {
    const dx = target.x - gp.x, dy = target.y - gp.y;
    const dist = Math.sqrt(dx * dx + dy * dy);
    const ux = dx / dist, uy = dy / dist;
    ctx.strokeStyle = target.color; ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(gp.x + ux * gp.r, gp.y + uy * gp.r);
    ctx.lineTo(target.x - ux * target.r, target.y - uy * target.r);
    ctx.stroke();
    ctx.fillStyle = target.color;
    const x2 = target.x - ux * target.r, y2 = target.y - uy * target.r;
    ctx.beginPath();
    ctx.moveTo(x2, y2);
    ctx.lineTo(x2 - ux * 8 - uy * 5, y2 - uy * 8 + ux * 5);
    ctx.lineTo(x2 - ux * 8 + uy * 5, y2 - uy * 8 - ux * 5);
    ctx.closePath(); ctx.fill();
  });

  // Both pathways to TF
  [components[3], components[4]].forEach(src => {
    const target = components[5];
    const dx = target.x - src.x, dy = target.y - src.y;
    const dist = Math.sqrt(dx * dx + dy * dy);
    const ux = dx / dist, uy = dy / dist;
    ctx.strokeStyle = target.color; ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(src.x + ux * src.r, src.y + uy * src.r);
    ctx.lineTo(target.x - ux * target.r, target.y - uy * target.r);
    ctx.stroke();
  });
}

// ─────────────────────────────────────────────────────────────────────────────

static drawCompleteAlternativeSplicing(ctx, x, y, width, height, view, componentFocus) {
  ctx.save();
  ctx.translate(x, y);

  switch (view) {
    case 'complete':
    case 'overview':
    default:
      this._drawAlternativeSplicingOverview(ctx, width, height, componentFocus);
      break;
    case 'exon-skipping':
      this._drawExonSkipping(ctx, width, height, componentFocus);
      break;
    case 'alt-5ss':
      this._drawAlt5SS(ctx, width, height, componentFocus);
      break;
    case 'intron-retention':
      this._drawIntronRetention(ctx, width, height, componentFocus);
      break;
    case 'splicing':
      this.drawRNASplicing(ctx, width, height, componentFocus);
      break;
    case 'spliceosome':
      this.drawSpliceosome(ctx, width, height, componentFocus);
      break;
  }

  ctx.restore();
}

static _drawAlternativeSplicingOverview(ctx, width, height, componentFocus) {
  const w = width, h = height;
  const cx = w * 0.5;

  ctx.fillStyle = '#222';
  ctx.font = `bold ${Math.max(13, w * 0.038)}px Arial`;
  ctx.textAlign = 'center'; ctx.textBaseline = 'alphabetic';
  ctx.fillText('Alternative Splicing', cx, 22);

  // Pre-mRNA (top)
  const preY = h * 0.14;
  const exonRects = [
    { x: w * 0.05, w: w * 0.1, label: 'E1', color: '#27AE60' },
    { x: w * 0.22, w: w * 0.1, label: 'E2', color: '#3498DB' },
    { x: w * 0.39, w: w * 0.1, label: 'E3', color: '#E74C3C' },
    { x: w * 0.56, w: w * 0.1, label: 'E4', color: '#9B59B6' },
    { x: w * 0.73, w: w * 0.1, label: 'E5', color: '#E67E22' }
  ];
  const intronGaps = [w * 0.15, w * 0.32, w * 0.49, w * 0.66];

  // Backbone
  ctx.strokeStyle = '#FF9F43'; ctx.lineWidth = 4;
  ctx.beginPath(); ctx.moveTo(w * 0.04, preY); ctx.lineTo(w * 0.85, preY); ctx.stroke();

  // Exon boxes
  exonRects.forEach(er => {
    ctx.fillStyle = er.color; ctx.strokeStyle = er.color; ctx.lineWidth = 2;
    ctx.beginPath(); ctx.roundRect(er.x, preY - h * 0.04, er.w, h * 0.08, 4); ctx.fill(); ctx.stroke();
    ctx.fillStyle = '#fff'; ctx.font = `bold ${Math.max(9, w * 0.026)}px Arial`;
    ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
    ctx.fillText(er.label, er.x + er.w * 0.5, preY);
  });

  // Intron arches
  intronGaps.forEach(ix => {
    ctx.strokeStyle = '#999'; ctx.lineWidth = 2; ctx.setLineDash([3, 3]);
    ctx.beginPath(); ctx.moveTo(ix, preY); ctx.quadraticCurveTo(ix + w * 0.035, preY - h * 0.06, ix + w * 0.07, preY); ctx.stroke();
    ctx.setLineDash([]);
  });

  ctx.fillStyle = '#333'; ctx.font = `bold ${Math.max(9, w * 0.026)}px Arial`;
  ctx.textAlign = 'left'; ctx.textBaseline = 'middle';
  ctx.fillText('pre-mRNA', w * 0.86, preY);

  // Alternative splicing events
  const events = [
    {
      name: 'Exon Skipping', y: h * 0.34,
      kept: [0, 2, 4], // E1, E3, E5
      color: '#E74C3C', note: 'E2 and E4 skipped'
    },
    {
      name: 'Cassette Exon', y: h * 0.52,
      kept: [0, 1, 3, 4],
      color: '#3498DB', note: 'E3 excluded'
    },
    {
      name: 'Mutually Exclusive', y: h * 0.7,
      kept: [0, 1, 4], // or [0, 2, 4]
      color: '#9B59B6', note: 'E2 or E3, not both'
    },
    {
      name: 'Intron Retention', y: h * 0.88,
      kept: [0, 1, 2, 3, 4],
      intron: true, color: '#E67E22', note: 'Intron 2 retained'
    }
  ];

  events.forEach(ev => {
    // Output mRNA bar
    const barX = w * 0.05, barH = h * 0.08;
    ctx.strokeStyle = '#FF9F43'; ctx.lineWidth = 3;
    let curX = barX;
    ev.kept.forEach((ki, i) => {
      const er = exonRects[ki];
      // draw kept exon segment
      const segW = er.w * 0.85;
      ctx.fillStyle = er.color; ctx.strokeStyle = er.color; ctx.lineWidth = 2;
      ctx.beginPath(); ctx.roundRect(curX, ev.y - barH * 0.5, segW, barH, 4); ctx.fill(); ctx.stroke();
      ctx.fillStyle = '#fff'; ctx.font = `bold ${Math.max(7, w * 0.02)}px Arial`;
      ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
      ctx.fillText(er.label, curX + segW * 0.5, ev.y);

      if (i > 0) {
        // join line between segments
        ctx.strokeStyle = '#FF9F43'; ctx.lineWidth = 3;
        ctx.beginPath(); ctx.moveTo(curX - w * 0.018, ev.y); ctx.lineTo(curX, ev.y); ctx.stroke();
      }
      curX += segW + w * 0.02;

      // Special intron retention between first 2 exons
      if (ev.intron && i === 1) {
        ctx.fillStyle = '#E67E22' + '44'; ctx.strokeStyle = '#E67E22'; ctx.lineWidth = 2;
        ctx.setLineDash([3, 3]);
        ctx.beginPath(); ctx.roundRect(curX, ev.y - barH * 0.5, w * 0.08, barH, 4); ctx.fill(); ctx.stroke();
        ctx.setLineDash([]);
        ctx.fillStyle = '#E67E22'; ctx.font = `${Math.max(6, w * 0.016)}px Arial`;
        ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
        ctx.fillText('Intron', curX + w * 0.04, ev.y);
        curX += w * 0.1;
      }
    });

    // Event label and color
    ctx.fillStyle = ev.color; ctx.font = `bold ${Math.max(9, w * 0.026)}px Arial`;
    ctx.textAlign = 'left'; ctx.textBaseline = 'middle';
    ctx.fillText(ev.name, w * 0.72, ev.y - 6);
    ctx.fillStyle = '#888'; ctx.font = `italic ${Math.max(7, w * 0.02)}px Arial`;
    ctx.fillText(ev.note, w * 0.72, ev.y + 8);

    // Arrow from pre-mRNA
    ctx.strokeStyle = ev.color + '88'; ctx.lineWidth = 1;
    ctx.setLineDash([4, 3]);
    ctx.beginPath(); ctx.moveTo(cx, preY + h * 0.04); ctx.lineTo(cx, ev.y - barH * 0.5); ctx.stroke();
    ctx.setLineDash([]);
  });
}

static _drawExonSkipping(ctx, width, height, componentFocus) {
  const w = width, h = height;
  const cx = w * 0.5;

  ctx.fillStyle = '#222';
  ctx.font = `bold ${Math.max(13, w * 0.038)}px Arial`;
  ctx.textAlign = 'center'; ctx.textBaseline = 'alphabetic';
  ctx.fillText('Exon Skipping', cx, 22);

  const dnaY = h * 0.3;
  const exons = [
    { x: w * 0.08, w: w * 0.14, label: 'Exon 1', color: '#27AE60' },
    { x: w * 0.32, w: w * 0.14, label: 'Exon 2', color: '#E74C3C' },
    { x: w * 0.56, w: w * 0.14, label: 'Exon 3', color: '#3498DB' },
    { x: w * 0.8, w: w * 0.12, label: 'Exon 4', color: '#9B59B6' }
  ];
  const introns = [w * 0.22, w * 0.46, w * 0.7];

  // Pre-mRNA
  ctx.strokeStyle = '#FF9F43'; ctx.lineWidth = 4;
  ctx.beginPath(); ctx.moveTo(w * 0.06, dnaY); ctx.lineTo(w * 0.94, dnaY); ctx.stroke();
  exons.forEach(e => {
    ctx.fillStyle = e.color; ctx.lineWidth = 2;
    ctx.beginPath(); ctx.roundRect(e.x, dnaY - h * 0.05, e.w, h * 0.1, 5); ctx.fill();
    ctx.fillStyle = '#fff'; ctx.font = `bold ${Math.max(8, w * 0.024)}px Arial`;
    ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
    ctx.fillText(e.label, e.x + e.w * 0.5, dnaY);
  });
  introns.forEach(ix => {
    ctx.strokeStyle = '#999'; ctx.lineWidth = 2; ctx.setLineDash([4, 3]);
    ctx.beginPath(); ctx.moveTo(ix, dnaY); ctx.quadraticCurveTo(ix + w * 0.07, dnaY - h * 0.08, ix + w * 0.14, dnaY); ctx.stroke();
    ctx.setLineDash([]);
  });
  ctx.fillStyle = '#333'; ctx.font = `${Math.max(8, w * 0.024)}px Arial`;
  ctx.textAlign = 'right'; ctx.textBaseline = 'middle';
  ctx.fillText('pre-mRNA', w * 0.06, dnaY - h * 0.08);

  // Constitutive mRNA (with E2)
  const m1Y = h * 0.6;
  ctx.fillStyle = '#333'; ctx.font = `bold ${Math.max(9, w * 0.026)}px Arial`;
  ctx.textAlign = 'left'; ctx.textBaseline = 'alphabetic';
  ctx.fillText('Constitutive (all exons)', w * 0.04, m1Y - h * 0.07);
  [0, 1, 2, 3].forEach((ei, i) => {
    const e = exons[ei];
    const ex = w * 0.08 + i * (e.w + w * 0.03);
    ctx.fillStyle = e.color; ctx.lineWidth = 2;
    ctx.beginPath(); ctx.roundRect(ex, m1Y - h * 0.04, e.w, h * 0.08, 5); ctx.fill();
    ctx.fillStyle = '#fff'; ctx.font = `bold ${Math.max(8, w * 0.022)}px Arial`;
    ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
    ctx.fillText(e.label.split(' ')[1], ex + e.w * 0.5, m1Y);
  });

  // Skipped mRNA (no E2)
  const m2Y = h * 0.82;
  ctx.fillStyle = '#E74C3C'; ctx.font = `bold ${Math.max(9, w * 0.026)}px Arial`;
  ctx.textAlign = 'left'; ctx.textBaseline = 'alphabetic';
  ctx.fillText('Exon-skipped (Exon 2 excluded)', w * 0.04, m2Y - h * 0.07);
  [0, 2, 3].forEach((ei, i) => {
    const e = exons[ei];
    const ex = w * 0.08 + i * (e.w + w * 0.03);
    ctx.fillStyle = e.color; ctx.lineWidth = 2;
    ctx.beginPath(); ctx.roundRect(ex, m2Y - h * 0.04, e.w, h * 0.08, 5); ctx.fill();
    ctx.fillStyle = '#fff'; ctx.font = `bold ${Math.max(8, w * 0.022)}px Arial`;
    ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
    ctx.fillText(e.label.split(' ')[1], ex + e.w * 0.5, m2Y);
  });

  // Exon 2 crossed out in skipped version
  const skipE = exons[1];
  ctx.fillStyle = 'rgba(231,76,60,0.2)';
  ctx.beginPath(); ctx.roundRect(skipE.x, dnaY - h * 0.05, skipE.w, h * 0.1, 5); ctx.fill();
  ctx.strokeStyle = '#E74C3C'; ctx.lineWidth = 3;
  ctx.beginPath(); ctx.moveTo(skipE.x + 4, dnaY - h * 0.04); ctx.lineTo(skipE.x + skipE.w - 4, dnaY + h * 0.04); ctx.stroke();
  ctx.beginPath(); ctx.moveTo(skipE.x + skipE.w - 4, dnaY - h * 0.04); ctx.lineTo(skipE.x + 4, dnaY + h * 0.04); ctx.stroke();

  // Long-range splicing arc
  ctx.strokeStyle = '#E74C3C'; ctx.lineWidth = 3;
  ctx.beginPath();
  ctx.moveTo(exons[0].x + exons[0].w, dnaY);
  ctx.quadraticCurveTo(exons[1].x + exons[1].w * 0.5, dnaY - h * 0.2, exons[2].x, dnaY);
  ctx.stroke();
}

static _drawAlt5SS(ctx, width, height, componentFocus) {
  const w = width, h = height;
  const cx = w * 0.5;

  ctx.fillStyle = '#222';
  ctx.font = `bold ${Math.max(13, w * 0.038)}px Arial`;
  ctx.textAlign = 'center'; ctx.textBaseline = 'alphabetic';
  ctx.fillText('Alternative 5\' Splice Site', cx, 22);

  const dnaY = h * 0.4;
  // Exon 1
  ctx.fillStyle = '#27AE60'; ctx.lineWidth = 2;
  ctx.beginPath(); ctx.roundRect(w * 0.05, dnaY - h * 0.07, w * 0.35, h * 0.14, 5); ctx.fill();
  ctx.fillStyle = '#fff'; ctx.font = `bold ${Math.max(10, w * 0.03)}px Arial`;
  ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
  ctx.fillText('Exon 1', w * 0.05 + w * 0.175, dnaY);

  // Two possible 5' splice sites
  const ss1X = w * 0.4, ss2X = w * 0.52;
  [ss1X, ss2X].forEach((sx, si) => {
    ctx.fillStyle = si === 0 ? '#E74C3C' : '#3498DB';
    ctx.beginPath(); ctx.arc(sx, dnaY, 8, 0, Math.PI * 2); ctx.fill();
    ctx.fillStyle = si === 0 ? '#E74C3C' : '#3498DB';
    ctx.font = `${Math.max(7, w * 0.02)}px Arial`;
    ctx.textAlign = 'center'; ctx.textBaseline = 'alphabetic';
    ctx.fillText(`5'ss ${si + 1}`, sx, dnaY - h * 0.1);
    ctx.strokeStyle = si === 0 ? '#E74C3C' : '#3498DB';
    ctx.lineWidth = 2; ctx.setLineDash([3, 3]);
    ctx.beginPath(); ctx.moveTo(sx, dnaY - 8); ctx.lineTo(sx, dnaY - h * 0.08); ctx.stroke();
    ctx.setLineDash([]);
  });

  // Exon 2
  ctx.fillStyle = '#3498DB'; ctx.lineWidth = 2;
  ctx.beginPath(); ctx.roundRect(w * 0.65, dnaY - h * 0.07, w * 0.3, h * 0.14, 5); ctx.fill();
  ctx.fillStyle = '#fff'; ctx.font = `bold ${Math.max(10, w * 0.03)}px Arial`;
  ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
  ctx.fillText('Exon 2', w * 0.65 + w * 0.15, dnaY);

  // Two resulting mRNAs
  const r1Y = h * 0.68, r2Y = h * 0.85;
  // mRNA 1 (shorter)
  ctx.fillStyle = '#27AE60'; ctx.beginPath(); ctx.roundRect(w * 0.05, r1Y - h * 0.04, w * 0.35, h * 0.08, 4); ctx.fill();
  ctx.fillStyle = '#fff'; ctx.font = `bold ${Math.max(8, w * 0.024)}px Arial`;
  ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
  ctx.fillText('Exon 1 (full)', w * 0.05 + w * 0.175, r1Y);
  ctx.fillStyle = '#3498DB'; ctx.beginPath(); ctx.roundRect(w * 0.43, r1Y - h * 0.04, w * 0.3, h * 0.08, 4); ctx.fill();
  ctx.fillStyle = '#fff'; ctx.fillText('Exon 2', w * 0.58, r1Y);
  ctx.fillStyle = '#E74C3C'; ctx.font = `bold ${Math.max(8, w * 0.022)}px Arial`;
  ctx.textAlign = 'left'; ctx.textBaseline = 'middle';
  ctx.fillText('→ Shorter protein', w * 0.76, r1Y);

  // mRNA 2 (longer, includes extra region)
  ctx.fillStyle = '#27AE60'; ctx.beginPath(); ctx.roundRect(w * 0.05, r2Y - h * 0.04, w * 0.47, h * 0.08, 4); ctx.fill();
  ctx.fillStyle = '#fff'; ctx.font = `bold ${Math.max(8, w * 0.024)}px Arial`;
  ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
  ctx.fillText('Exon 1 + extra region', w * 0.05 + w * 0.235, r2Y);
  ctx.fillStyle = '#3498DB'; ctx.beginPath(); ctx.roundRect(w * 0.55, r2Y - h * 0.04, w * 0.2, h * 0.08, 4); ctx.fill();
  ctx.fillStyle = '#fff'; ctx.fillText('Exon 2', w * 0.65, r2Y);
  ctx.fillStyle = '#3498DB'; ctx.font = `bold ${Math.max(8, w * 0.022)}px Arial`;
  ctx.textAlign = 'left'; ctx.textBaseline = 'middle';
  ctx.fillText('→ Longer protein', w * 0.78, r2Y);
}

static _drawIntronRetention(ctx, width, height, componentFocus) {
  const w = width, h = height;
  const cx = w * 0.5;

  ctx.fillStyle = '#222';
  ctx.font = `bold ${Math.max(13, w * 0.038)}px Arial`;
  ctx.textAlign = 'center'; ctx.textBaseline = 'alphabetic';
  ctx.fillText('Intron Retention', cx, 22);

  const preY = h * 0.25;
  // pre-mRNA
  ctx.strokeStyle = '#FF9F43'; ctx.lineWidth = 4;
  ctx.beginPath(); ctx.moveTo(w * 0.05, preY); ctx.lineTo(w * 0.95, preY); ctx.stroke();

  // Exons and intron
  const exon1 = { x: w * 0.05, w: w * 0.25 };
  const intron = { x: w * 0.3, w: w * 0.4 };
  const exon2 = { x: w * 0.7, w: w * 0.25 };

  ctx.fillStyle = '#27AE60'; ctx.beginPath(); ctx.roundRect(exon1.x, preY - h * 0.06, exon1.w, h * 0.12, 5); ctx.fill();
  ctx.fillStyle = '#E74C3C' + '55'; ctx.strokeStyle = '#E74C3C'; ctx.lineWidth = 2; ctx.setLineDash([4, 3]);
  ctx.beginPath(); ctx.roundRect(intron.x, preY - h * 0.04, intron.w, h * 0.08, 4); ctx.fill(); ctx.stroke();
  ctx.setLineDash([]);
  ctx.fillStyle = '#3498DB'; ctx.beginPath(); ctx.roundRect(exon2.x, preY - h * 0.06, exon2.w, h * 0.12, 5); ctx.fill();

  ctx.fillStyle = '#fff'; ctx.font = `bold ${Math.max(9, w * 0.026)}px Arial`;
  ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
  ctx.fillText('Exon 1', exon1.x + exon1.w * 0.5, preY);
  ctx.fillStyle = '#E74C3C';
  ctx.fillText('Intron', intron.x + intron.w * 0.5, preY);
  ctx.fillStyle = '#fff';
  ctx.fillText('Exon 2', exon2.x + exon2.w * 0.5, preY);

  // Normal splicing path
  const n1Y = h * 0.52;
  ctx.fillStyle = '#333'; ctx.font = `bold ${Math.max(9, w * 0.026)}px Arial`;
  ctx.textAlign = 'left'; ctx.textBaseline = 'alphabetic';
  ctx.fillText('Normal splicing:', w * 0.04, n1Y - h * 0.07);
  ctx.fillStyle = '#27AE60'; ctx.beginPath(); ctx.roundRect(w * 0.1, n1Y - h * 0.04, w * 0.25, h * 0.08, 5); ctx.fill();
  ctx.fillStyle = '#3498DB'; ctx.beginPath(); ctx.roundRect(w * 0.38, n1Y - h * 0.04, w * 0.25, h * 0.08, 5); ctx.fill();
  ctx.fillStyle = '#fff'; ctx.font = `bold ${Math.max(9, w * 0.026)}px Arial`;
  ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
  ctx.fillText('Exon 1', w * 0.225, n1Y);
  ctx.fillText('Exon 2', w * 0.505, n1Y);
  ctx.strokeStyle = '#27AE60'; ctx.lineWidth = 3;
  ctx.beginPath(); ctx.moveTo(w * 0.35, n1Y); ctx.lineTo(w * 0.38, n1Y); ctx.stroke();
  ctx.fillStyle = '#27AE60';
  ctx.font = `${Math.max(8, w * 0.022)}px Arial`;
  ctx.textAlign = 'left'; ctx.textBaseline = 'middle';
  ctx.fillText('→ Normal mRNA', w * 0.66, n1Y);

  // Intron retention path
  const n2Y = h * 0.78;
  ctx.fillStyle = '#E67E22'; ctx.font = `bold ${Math.max(9, w * 0.026)}px Arial`;
  ctx.textAlign = 'left'; ctx.textBaseline = 'alphabetic';
  ctx.fillText('Intron retention:', w * 0.04, n2Y - h * 0.07);
  ctx.fillStyle = '#27AE60'; ctx.beginPath(); ctx.roundRect(w * 0.05, n2Y - h * 0.04, w * 0.18, h * 0.08, 5); ctx.fill();
  ctx.fillStyle = '#E74C3C' + '66'; ctx.strokeStyle = '#E74C3C'; ctx.lineWidth = 2;
  ctx.beginPath(); ctx.roundRect(w * 0.23, n2Y - h * 0.04, w * 0.28, h * 0.08, 5); ctx.fill(); ctx.stroke();
  ctx.fillStyle = '#3498DB'; ctx.beginPath(); ctx.roundRect(w * 0.51, n2Y - h * 0.04, w * 0.18, h * 0.08, 5); ctx.fill();
  ctx.fillStyle = '#fff'; ctx.font = `bold ${Math.max(8, w * 0.022)}px Arial`;
  ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
  ctx.fillText('E1', w * 0.14, n2Y);
  ctx.fillStyle = '#E74C3C';
  ctx.fillText('INTRON retained', w * 0.37, n2Y);
  ctx.fillStyle = '#fff';
  ctx.fillText('E2', w * 0.6, n2Y);
  ctx.fillStyle = '#E74C3C';
  ctx.font = `${Math.max(8, w * 0.022)}px Arial`;
  ctx.textAlign = 'left'; ctx.textBaseline = 'middle';
  ctx.fillText('→ Truncated / NMD target', w * 0.72, n2Y);
}

// ─────────────────────────────────────────────────────────────────────────────

static drawCompleteGeneticCode(ctx, x, y, width, height, view, componentFocus) {
  ctx.save();
  ctx.translate(x, y);

  switch (view) {
    case 'complete':
    case 'table':
      this.drawTableCodonChart(ctx, width, height, componentFocus);
      break;
    case 'circular':
      this.drawCircularCodonChart(ctx, width, height, componentFocus);
      break;
    case 'wheel':
      this.drawWheelCodonChart(ctx, width, height, componentFocus);
      break;
    case 'wobble':
      this.drawWobbleBasePairing(ctx, width, height, componentFocus);
      break;
    case 'anticodon':
      this.drawAnticodonLoop(ctx, width, height, componentFocus);
      break;
    case 'reading-frame':
      this.drawReadingFrame(ctx, width, height, componentFocus);
      break;
    case 'overview':
    default:
      this._drawGeneticCodeOverview(ctx, width, height, componentFocus);
      break;
  }

  ctx.restore();
}

static _drawGeneticCodeOverview(ctx, width, height, componentFocus) {
  const w = width, h = height;
  const cx = w * 0.5;

  ctx.fillStyle = '#222';
  ctx.font = `bold ${Math.max(13, w * 0.038)}px Arial`;
  ctx.textAlign = 'center'; ctx.textBaseline = 'alphabetic';
  ctx.fillText('Genetic Code System', cx, 22);

  // Compact codon table (4×4 grid of boxes, each with 4 codons)
  const bases1 = ['U', 'C', 'A', 'G'];
  const bases2 = ['U', 'C', 'A', 'G'];
  const bases3 = ['U', 'C', 'A', 'G'];

  const codonTable = {
    UUU: 'Phe', UUC: 'Phe', UUA: 'Leu', UUG: 'Leu',
    UCU: 'Ser', UCC: 'Ser', UCA: 'Ser', UCG: 'Ser',
    UAU: 'Tyr', UAC: 'Tyr', UAA: 'Stop', UAG: 'Stop',
    UGU: 'Cys', UGC: 'Cys', UGA: 'Stop', UGG: 'Trp',
    CUU: 'Leu', CUC: 'Leu', CUA: 'Leu', CUG: 'Leu',
    CCU: 'Pro', CCC: 'Pro', CCA: 'Pro', CCG: 'Pro',
    CAU: 'His', CAC: 'His', CAA: 'Gln', CAG: 'Gln',
    CGU: 'Arg', CGC: 'Arg', CGA: 'Arg', CGG: 'Arg',
    AUU: 'Ile', AUC: 'Ile', AUA: 'Ile', AUG: 'Met*',
    ACU: 'Thr', ACC: 'Thr', ACA: 'Thr', ACG: 'Thr',
    AAU: 'Asn', AAC: 'Asn', AAA: 'Lys', AAG: 'Lys',
    AGU: 'Ser', AGC: 'Ser', AGA: 'Arg', AGG: 'Arg',
    GUU: 'Val', GUC: 'Val', GUA: 'Val', GUG: 'Val',
    GCU: 'Ala', GCC: 'Ala', GCA: 'Ala', GCG: 'Ala',
    GAU: 'Asp', GAC: 'Asp', GAA: 'Glu', GAG: 'Glu',
    GGU: 'Gly', GGC: 'Gly', GGA: 'Gly', GGG: 'Gly'
  };

  const aaColors = {
    'Stop': '#E74C3C', 'Met*': '#F39C12',
    'Phe': '#3498DB', 'Leu': '#2980B9', 'Ile': '#1F618D',
    'Val': '#27AE60', 'Ser': '#2ECC71', 'Pro': '#1ABC9C',
    'Thr': '#16A085', 'Ala': '#52BE80', 'Tyr': '#9B59B6',
    'Trp': '#8E44AD', 'His': '#F39C12', 'Gln': '#D68910',
    'Asn': '#E67E22', 'Lys': '#D35400', 'Asp': '#E74C3C',
    'Glu': '#C0392B', 'Cys': '#F1C40F', 'Arg': '#B7950B',
    'Gly': '#7F8C8D'
  };

  const tableX = w * 0.06, tableY = h * 0.07;
  const tableW = w * 0.88, tableH = h * 0.82;
  const cellW = tableW / 4, cellH = tableH / 4;

  // Row/column headers
  const headerColors = ['#E74C3C', '#27AE60', '#3498DB', '#E67E22'];
  bases1.forEach((b1, i) => {
    ctx.fillStyle = headerColors[i] + 'BB';
    ctx.beginPath(); ctx.roundRect(tableX + i * cellW + 2, tableY, cellW - 4, cellH * 0.12, 3); ctx.fill();
    ctx.fillStyle = headerColors[i];
    ctx.font = `bold ${Math.max(9, w * 0.026)}px Arial`;
    ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
    ctx.fillText(b1, tableX + i * cellW + cellW * 0.5, tableY + cellH * 0.06);
  });

  // Draw each cell
  bases1.forEach((b1, i) => {
    bases2.forEach((b2, j) => {
      const cellX = tableX + i * cellW;
      const cellY = tableY + cellH * 0.14 + j * cellH * 0.215;
      const subCellH = cellH * 0.215 / 4;

      bases3.forEach((b3, k) => {
        const codon = b1 + b2 + b3;
        const aa = codonTable[codon] || '?';
        const aaColor = aaColors[aa] || '#7F8C8D';

        const scY = cellY + k * subCellH;

        ctx.fillStyle = aaColor + '44';
        ctx.strokeStyle = aaColor + '66';
        ctx.lineWidth = 0.5;
        ctx.beginPath();
        ctx.roundRect(cellX + 1, scY + 0.5, cellW - 2, subCellH - 1, 2);
        ctx.fill(); ctx.stroke();

        ctx.fillStyle = '#222';
        ctx.font = `${Math.max(5.5, w * 0.016)}px Arial`;
        ctx.textAlign = 'left'; ctx.textBaseline = 'middle';
        ctx.fillText(codon, cellX + 3, scY + subCellH * 0.5);
        ctx.fillStyle = aaColor;
        ctx.font = `bold ${Math.max(5.5, w * 0.016)}px Arial`;
        ctx.textAlign = 'right';
        ctx.fillText(aa, cellX + cellW - 3, scY + subCellH * 0.5);
      });
    });
  });

  // Legend row
  const legendY = h * 0.96;
  const legendItems = [['#E74C3C', 'Stop'], ['#F39C12', 'Start/Met'], ['#3498DB', 'Nonpolar'], ['#27AE60', 'Polar']];
  legendItems.forEach((li, idx) => {
    const lx = w * 0.05 + idx * w * 0.24;
    ctx.fillStyle = li[0];
    ctx.beginPath(); ctx.arc(lx, legendY, 4, 0, Math.PI * 2); ctx.fill();
    ctx.fillStyle = '#444'; ctx.font = `${Math.max(7, w * 0.018)}px Arial`;
    ctx.textAlign = 'left'; ctx.textBaseline = 'middle';
    ctx.fillText(li[1], lx + 7, legendY);
  });
}

// ─────────────────────────────────────────────────────────────────────────────

static drawCompleteMutationTypes(ctx, x, y, width, height, view, componentFocus) {
  ctx.save();
  ctx.translate(x, y);

  switch (view) {
    case 'complete':
    case 'overview':
    default:
      this._drawMutationTypesOverview(ctx, width, height, componentFocus);
      break;
    case 'missense':
      this.drawMissenseMutation(ctx, width, height, componentFocus);
      break;
    case 'nonsense':
      this.drawNonsenseMutation(ctx, width, height, componentFocus);
      break;
    case 'silent':
      this.drawSilentMutation(ctx, width, height, componentFocus);
      break;
    case 'frameshift':
      this.drawFrameshift(ctx, width, height, componentFocus);
      break;
    case 'dna-damage':
      this.drawDNADamage(ctx, width, height, componentFocus);
      break;
    case 'dna-repair':
      this.drawDNARepair(ctx, width, height, componentFocus);
      break;
  }

  ctx.restore();
}

static _drawMutationTypesOverview(ctx, width, height, componentFocus) {
  const w = width, h = height;
  const cx = w * 0.5;

  ctx.fillStyle = '#222';
  ctx.font = `bold ${Math.max(13, w * 0.038)}px Arial`;
  ctx.textAlign = 'center'; ctx.textBaseline = 'alphabetic';
  ctx.fillText('Mutation Types', cx, 22);

  const mutations = [
    {
      type: 'Silent', color: '#27AE60',
      original: 'GAA', mutant: 'GAG',
      aa_orig: 'Glu', aa_mut: 'Glu',
      desc: 'Same amino acid', effect: 'No change in protein',
      x: w * 0.25, y: h * 0.18
    },
    {
      type: 'Missense', color: '#F39C12',
      original: 'GAA', mutant: 'GUA',
      aa_orig: 'Glu', aa_mut: 'Val',
      desc: 'Different amino acid', effect: 'Altered protein function',
      x: w * 0.75, y: h * 0.18
    },
    {
      type: 'Nonsense', color: '#E74C3C',
      original: 'CAA', mutant: 'UAA',
      aa_orig: 'Gln', aa_mut: 'Stop',
      desc: 'Premature stop codon', effect: 'Truncated protein',
      x: w * 0.25, y: h * 0.5
    },
    {
      type: 'Frameshift (Insertion)', color: '#9B59B6',
      original: 'AUG·GAA·GCU', mutant: 'AUG·GAA·AGC·U',
      aa_orig: 'Met-Glu-Ala', aa_mut: 'Met-Glu-Ser…',
      desc: '+1 insertion shifts reading frame', effect: 'Completely altered downstream',
      x: w * 0.75, y: h * 0.5
    },
    {
      type: 'Frameshift (Deletion)', color: '#E67E22',
      original: 'AUG·GAA·GCU', mutant: 'AUG·AAG·CU…',
      aa_orig: 'Met-Glu-Ala', aa_mut: 'Met-Lys…',
      desc: '-1 deletion shifts reading frame', effect: 'Completely altered downstream',
      x: w * 0.25, y: h * 0.82
    },
    {
      type: 'Splice Site', color: '#3498DB',
      original: 'GU…intron…AG', mutant: 'AU…intron…AG',
      aa_orig: 'Normal splicing', aa_mut: 'Exon skipped',
      desc: '5\' splice site mutation', effect: 'Aberrant mRNA isoform',
      x: w * 0.75, y: h * 0.82
    }
  ];

  mutations.forEach(mut => {
    const boxW = w * 0.42, boxH = h * 0.24;
    const bx = mut.x - boxW * 0.5, by = mut.y - boxH * 0.5;

    // Box
    ctx.fillStyle = mut.color + '15';
    ctx.strokeStyle = mut.color;
    ctx.lineWidth = 2;
    ctx.beginPath(); ctx.roundRect(bx, by, boxW, boxH, 8); ctx.fill(); ctx.stroke();

    // Header
    ctx.fillStyle = mut.color;
    ctx.beginPath(); ctx.roundRect(bx, by, boxW, boxH * 0.2, [8, 8, 0, 0]); ctx.fill();
    ctx.fillStyle = '#fff';
    ctx.font = `bold ${Math.max(9, w * 0.028)}px Arial`;
    ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
    ctx.fillText(mut.type, mut.x, by + boxH * 0.1);

    // Original codon
    ctx.fillStyle = '#333';
    ctx.font = `${Math.max(7, w * 0.02)}px Arial`;
    ctx.textAlign = 'left'; ctx.textBaseline = 'alphabetic';
    ctx.fillText('Original:', bx + 6, by + boxH * 0.32);
    ctx.fillStyle = '#4A90E2';
    ctx.font = `bold ${Math.max(7, w * 0.02)}px Arial`;
    ctx.fillText(mut.original, bx + boxW * 0.32, by + boxH * 0.32);
    ctx.fillStyle = '#4A90E2';
    ctx.font = `italic ${Math.max(7, w * 0.018)}px Arial`;
    ctx.fillText(`→ ${mut.aa_orig}`, bx + boxW * 0.6, by + boxH * 0.32);

    // Mutant codon
    ctx.fillStyle = '#333';
    ctx.font = `${Math.max(7, w * 0.02)}px Arial`;
    ctx.fillText('Mutant:', bx + 6, by + boxH * 0.52);
    ctx.fillStyle = mut.color;
    ctx.font = `bold ${Math.max(7, w * 0.02)}px Arial`;
    ctx.fillText(mut.mutant, bx + boxW * 0.32, by + boxH * 0.52);
    ctx.fillStyle = mut.color;
    ctx.font = `italic ${Math.max(7, w * 0.018)}px Arial`;
    ctx.fillText(`→ ${mut.aa_mut}`, bx + boxW * 0.6, by + boxH * 0.52);

    // Desc
    ctx.fillStyle = '#666';
    ctx.font = `italic ${Math.max(7, w * 0.018)}px Arial`;
    ctx.fillText(mut.desc, bx + 6, by + boxH * 0.72);
    ctx.fillStyle = mut.color;
    ctx.font = `${Math.max(7, w * 0.018)}px Arial`;
    ctx.fillText('→ ' + mut.effect, bx + 6, by + boxH * 0.88);
  });
}

// ─────────────────────────────────────────────────────────────────────────────

static drawCompleteProteinFolding(ctx, x, y, width, height, view, componentFocus) {
  ctx.save();
  ctx.translate(x, y);

  switch (view) {
    case 'complete':
    case 'overview':
    default:
      this._drawProteinFoldingOverview(ctx, width, height, componentFocus);
      break;
    case 'primary':
      this._drawPrimaryStructure(ctx, width, height, componentFocus);
      break;
    case 'secondary':
      this._drawSecondaryStructure(ctx, width, height, componentFocus);
      break;
    case 'tertiary':
      this._drawTertiaryStructure(ctx, width, height, componentFocus);
      break;
    case 'quaternary':
      this._drawQuaternaryStructure(ctx, width, height, componentFocus);
      break;
    case 'peptide-bond':
      this.drawPeptideBondFormation(ctx, width, height, componentFocus);
      break;
  }

  ctx.restore();
}

static _drawProteinFoldingOverview(ctx, width, height, componentFocus) {
  const w = width, h = height;
  const cx = w * 0.5;

  ctx.fillStyle = '#222';
  ctx.font = `bold ${Math.max(13, w * 0.038)}px Arial`;
  ctx.textAlign = 'center'; ctx.textBaseline = 'alphabetic';
  ctx.fillText('Levels of Protein Structure', cx, 22);

  const levels = [
    { name: 'Primary', num: '1°', y: h * 0.15, color: '#3498DB', desc: 'Amino acid sequence' },
    { name: 'Secondary', num: '2°', y: h * 0.37, color: '#27AE60', desc: 'α-helix · β-sheet · turns' },
    { name: 'Tertiary', num: '3°', y: h * 0.62, color: '#9B59B6', desc: 'Full 3D fold (one chain)' },
    { name: 'Quaternary', num: '4°', y: h * 0.85, color: '#E74C3C', desc: 'Multi-subunit complex' }
  ];

  levels.forEach((lv, i) => {
    const lx = w * 0.06, rx = w * 0.94;
    const bh = h * 0.17;

    // Box
    const bg = ctx.createLinearGradient(lx, lv.y - bh * 0.5, rx, lv.y + bh * 0.5);
    bg.addColorStop(0, lv.color + '22'); bg.addColorStop(0.5, lv.color + '44'); bg.addColorStop(1, lv.color + '22');
    ctx.fillStyle = bg; ctx.strokeStyle = lv.color; ctx.lineWidth = 2;
    ctx.beginPath(); ctx.roundRect(lx, lv.y - bh * 0.5, rx - lx, bh, 8); ctx.fill(); ctx.stroke();

    // Level badge
    ctx.fillStyle = lv.color;
    ctx.beginPath(); ctx.roundRect(lx + 6, lv.y - bh * 0.4, w * 0.08, bh * 0.8, 5); ctx.fill();
    ctx.fillStyle = '#fff';
    ctx.font = `bold ${Math.max(13, w * 0.04)}px Arial`;
    ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
    ctx.fillText(lv.num, lx + 6 + w * 0.04, lv.y);

    // Name & desc
    ctx.fillStyle = lv.color;
    ctx.font = `bold ${Math.max(10, w * 0.03)}px Arial`;
    ctx.textAlign = 'left'; ctx.textBaseline = 'middle';
    ctx.fillText(lv.name + ' Structure', lx + w * 0.12, lv.y - h * 0.025);
    ctx.fillStyle = '#666'; ctx.font = `${Math.max(9, w * 0.026)}px Arial`;
    ctx.fillText(lv.desc, lx + w * 0.12, lv.y + h * 0.022);

    // Mini illustration (right side)
    const ix = rx - w * 0.22, iy = lv.y;

    if (i === 0) {
      // Primary: bead chain
      for (let b = 0; b < 7; b++) {
        ctx.fillStyle = [`#FF6B6B`, '#FFD93D', '#4ECDC4', '#3498DB', '#9B59B6', '#E74C3C', '#27AE60'][b];
        ctx.beginPath(); ctx.arc(ix - w * 0.08 + b * w * 0.025, iy, w * 0.012, 0, Math.PI * 2); ctx.fill();
        if (b > 0) {
          ctx.strokeStyle = '#999'; ctx.lineWidth = 2;
          ctx.beginPath();
          ctx.moveTo(ix - w * 0.08 + (b - 1) * w * 0.025 + w * 0.012, iy);
          ctx.lineTo(ix - w * 0.08 + b * w * 0.025 - w * 0.012, iy);
          ctx.stroke();
        }
      }
    } else if (i === 1) {
      // Secondary: alpha helix + beta sheet
      // Helix
      ctx.strokeStyle = '#27AE60'; ctx.lineWidth = 3;
      ctx.beginPath();
      for (let p = 0; p <= 20; p++) {
        const angle = p / 20 * Math.PI * 4;
        const px = ix - w * 0.1 + p * w * 0.012;
        const py = iy + Math.sin(angle) * h * 0.035;
        p === 0 ? ctx.moveTo(px, py) : ctx.lineTo(px, py);
      }
      ctx.stroke();
      // Beta sheet arrows
      ctx.fillStyle = '#1E8449';
      for (let b = 0; b < 3; b++) {
        const bx2 = ix + w * 0.04;
        ctx.beginPath();
        ctx.moveTo(bx2, iy - h * 0.04 + b * h * 0.04);
        ctx.lineTo(bx2 + w * 0.06, iy - h * 0.04 + b * h * 0.04);
        ctx.lineTo(bx2 + w * 0.075, iy - h * 0.03 + b * h * 0.04);
        ctx.lineTo(bx2 + w * 0.075, iy - h * 0.05 + b * h * 0.04);
        ctx.closePath(); ctx.fill();
      }
    } else if (i === 2) {
      // Tertiary: blob shape
      ctx.fillStyle = '#9B59B6' + '55'; ctx.strokeStyle = '#9B59B6'; ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(ix, iy - h * 0.06);
      ctx.bezierCurveTo(ix + w * 0.08, iy - h * 0.07, ix + w * 0.12, iy, ix + w * 0.08, iy + h * 0.06);
      ctx.bezierCurveTo(ix + w * 0.04, iy + h * 0.08, ix - w * 0.06, iy + h * 0.07, ix - w * 0.09, iy);
      ctx.bezierCurveTo(ix - w * 0.1, iy - h * 0.05, ix - w * 0.05, iy - h * 0.06, ix, iy - h * 0.06);
      ctx.fill(); ctx.stroke();
      ctx.strokeStyle = '#9B59B6'; ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(ix - w * 0.04, iy - h * 0.02);
      ctx.bezierCurveTo(ix + w * 0.02, iy - h * 0.04, ix + w * 0.04, iy, ix + w * 0.02, iy + h * 0.03);
      ctx.stroke();
    } else {
      // Quaternary: multiple subunits
      const subColors = ['#E74C3C', '#3498DB', '#27AE60', '#F39C12'];
      [[-1, -1], [1, -1], [-1, 1], [1, 1]].forEach(([sx, sy], si) => {
        ctx.fillStyle = subColors[si] + '88';
        ctx.strokeStyle = subColors[si]; ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.ellipse(ix + sx * w * 0.04, iy + sy * h * 0.04, w * 0.035, h * 0.04, si * 0.4, 0, Math.PI * 2);
        ctx.fill(); ctx.stroke();
      });
    }

    // Arrow to next
    if (i < levels.length - 1) {
      ctx.strokeStyle = levels[i + 1].color; ctx.lineWidth = 2;
      ctx.beginPath(); ctx.moveTo(cx, lv.y + bh * 0.5); ctx.lineTo(cx, levels[i + 1].y - bh * 0.5 - 2); ctx.stroke();
      ctx.fillStyle = levels[i + 1].color;
      ctx.beginPath();
      ctx.moveTo(cx, levels[i + 1].y - bh * 0.5 - 2);
      ctx.lineTo(cx - 5, levels[i + 1].y - bh * 0.5 - 10);
      ctx.lineTo(cx + 5, levels[i + 1].y - bh * 0.5 - 10);
      ctx.closePath(); ctx.fill();
    }
  });
}

static _drawPrimaryStructure(ctx, width, height, componentFocus) {
  const w = width, h = height;
  const cx = w * 0.5, cy = h * 0.5;

  ctx.fillStyle = '#222';
  ctx.font = `bold ${Math.max(13, w * 0.038)}px Arial`;
  ctx.textAlign = 'center'; ctx.textBaseline = 'alphabetic';
  ctx.fillText('Primary Structure', cx, 22);

  const aas = ['Met', 'Gly', 'Lys', 'Ala', 'Thr', 'Val', 'Glu', 'Pro', 'Arg', 'Ser'];
  const aaColors = ['#F39C12', '#BDC3C7', '#3498DB', '#95A5A6', '#27AE60',
                    '#2ECC71', '#E74C3C', '#9B59B6', '#1ABC9C', '#E67E22'];

  const startX = w * 0.06, bw = (w * 0.88) / aas.length, by = cy;

  // Peptide backbone line
  ctx.strokeStyle = '#7F8C8D'; ctx.lineWidth = 3;
  ctx.beginPath(); ctx.moveTo(startX, by); ctx.lineTo(startX + aas.length * bw, by); ctx.stroke();

  aas.forEach((aa, i) => {
    const ax = startX + i * bw + bw * 0.5;

    // R group
    ctx.fillStyle = aaColors[i] + '55'; ctx.strokeStyle = aaColors[i]; ctx.lineWidth = 2;
    ctx.beginPath(); ctx.arc(ax, by - h * 0.18, w * 0.04, 0, Math.PI * 2); ctx.fill(); ctx.stroke();
    ctx.fillStyle = aaColors[i]; ctx.font = `bold ${Math.max(7, w * 0.02)}px Arial`;
    ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
    ctx.fillText('R', ax, by - h * 0.18);
    ctx.strokeStyle = '#7F8C8D'; ctx.lineWidth = 1.5;
    ctx.beginPath(); ctx.moveTo(ax, by - h * 0.13); ctx.lineTo(ax, by); ctx.stroke();

    // Cα node
    ctx.fillStyle = '#ECF0F1'; ctx.strokeStyle = '#2C3E50'; ctx.lineWidth = 2;
    ctx.beginPath(); ctx.arc(ax, by, w * 0.025, 0, Math.PI * 2); ctx.fill(); ctx.stroke();
    ctx.fillStyle = '#2C3E50'; ctx.font = `bold ${Math.max(6, w * 0.016)}px Arial`;
    ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
    ctx.fillText('Cα', ax, by);

    // AA label below
    ctx.fillStyle = aaColors[i]; ctx.font = `${Math.max(7, w * 0.02)}px Arial`;
    ctx.textBaseline = 'alphabetic';
    ctx.fillText(aa, ax, by + h * 0.12);
    ctx.fillStyle = '#888'; ctx.font = `${Math.max(6, w * 0.016)}px Arial`;
    ctx.fillText(`${i + 1}`, ax, by + h * 0.18);

    // Peptide bond
    if (i < aas.length - 1) {
      ctx.fillStyle = '#E74C3C';
      ctx.font = `${Math.max(7, w * 0.018)}px Arial`;
      ctx.textAlign = 'center'; ctx.textBaseline = 'alphabetic';
      ctx.fillText('—', ax + bw * 0.5, by + 4);
    }
  });

  // N and C terminus
  ctx.fillStyle = '#27AE60'; ctx.font = `bold ${Math.max(10, w * 0.03)}px Arial`;
  ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
  ctx.fillText('H₂N', startX - w * 0.04, by);
  ctx.fillStyle = '#E74C3C';
  ctx.fillText('COOH', startX + aas.length * bw + w * 0.04, by);

  ctx.fillStyle = '#333'; ctx.font = `${Math.max(9, w * 0.026)}px Arial`;
  ctx.textAlign = 'center'; ctx.textBaseline = 'alphabetic';
  ctx.fillText('Sequence: N-terminus → C-terminus', cx, h - 8);
}

static _drawSecondaryStructure(ctx, width, height, componentFocus) {
  const w = width, h = height;
  const cx = w * 0.5;

  ctx.fillStyle = '#222';
  ctx.font = `bold ${Math.max(13, w * 0.038)}px Arial`;
  ctx.textAlign = 'center'; ctx.textBaseline = 'alphabetic';
  ctx.fillText('Secondary Structure', cx, 22);

  // Alpha helix (left)
  const helX = w * 0.25, helCy = h * 0.48;
  ctx.fillStyle = '#3498DB';
  ctx.font = `bold ${Math.max(10, w * 0.03)}px Arial`;
  ctx.textAlign = 'center'; ctx.textBaseline = 'alphabetic';
  ctx.fillText('α-Helix', helX, h * 0.1);

  // Ribbon helix
  const helPoints = [];
  for (let i = 0; i <= 36; i++) {
    const angle = (i / 36) * Math.PI * 5;
    helPoints.push({ x: helX + Math.cos(angle) * w * 0.09, y: helCy - h * 0.3 + i * (h * 0.6 / 36) });
  }
  // Shadow ribbon
  ctx.strokeStyle = '#2980B9' + '66'; ctx.lineWidth = 14;
  ctx.beginPath();
  helPoints.forEach((pt, i) => i === 0 ? ctx.moveTo(pt.x + 4, pt.y + 4) : ctx.lineTo(pt.x + 4, pt.y + 4));
  ctx.stroke();
  // Main ribbon
  ctx.strokeStyle = '#3498DB'; ctx.lineWidth = 10;
  ctx.lineCap = 'round';
  ctx.beginPath();
  helPoints.forEach((pt, i) => i === 0 ? ctx.moveTo(pt.x, pt.y) : ctx.lineTo(pt.x, pt.y));
  ctx.stroke();
  // H-bonds
  ctx.strokeStyle = '#F39C12'; ctx.lineWidth = 1.5; ctx.setLineDash([3, 3]);
  for (let i = 0; i < 4; i++) {
    const p1 = helPoints[i * 4 + 2], p2 = helPoints[i * 4 + 6];
    if (p1 && p2) {
      ctx.beginPath(); ctx.moveTo(p1.x, p1.y); ctx.lineTo(p2.x, p2.y); ctx.stroke();
    }
  }
  ctx.setLineDash([]);
  ctx.fillStyle = '#F39C12'; ctx.font = `${Math.max(8, w * 0.022)}px Arial`;
  ctx.textAlign = 'center'; ctx.textBaseline = 'alphabetic';
  ctx.fillText('H-bonds (i to i+4)', helX, h * 0.88);

  // Beta sheet (right)
  const betX = w * 0.72, betCy = h * 0.5;
  ctx.fillStyle = '#27AE60';
  ctx.font = `bold ${Math.max(10, w * 0.03)}px Arial`;
  ctx.textAlign = 'center'; ctx.textBaseline = 'alphabetic';
  ctx.fillText('β-Sheet', betX, h * 0.1);

  // 4 beta strands
  for (let s = 0; s < 4; s++) {
    const sy = betCy - h * 0.28 + s * h * 0.18;
    const dir = s % 2 === 0 ? 1 : -1;
    const sx = betX - dir * w * 0.12;

    // Arrow body
    ctx.fillStyle = '#27AE60' + '88'; ctx.strokeStyle = '#27AE60'; ctx.lineWidth = 2;
    const arrowW = w * 0.24, arrowH = h * 0.1;
    ctx.beginPath();
    ctx.moveTo(sx, sy - arrowH * 0.5);
    ctx.lineTo(sx + dir * (arrowW - w * 0.04), sy - arrowH * 0.5);
    ctx.lineTo(sx + dir * arrowW, sy);
    ctx.lineTo(sx + dir * (arrowW - w * 0.04), sy + arrowH * 0.5);
    ctx.lineTo(sx, sy + arrowH * 0.5);
    ctx.closePath(); ctx.fill(); ctx.stroke();

    ctx.fillStyle = '#fff'; ctx.font = `${Math.max(7, w * 0.02)}px Arial`;
    ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
    ctx.fillText(s % 2 === 0 ? '→' : '←', betX, sy);

    // H-bonds between strands
    if (s < 3) {
      for (let b = 0; b < 4; b++) {
        const bx = betX - w * 0.1 + b * w * 0.07;
        const sy2 = betCy - h * 0.28 + (s + 1) * h * 0.18;
        ctx.strokeStyle = '#F39C12'; ctx.lineWidth = 1.5; ctx.setLineDash([3, 3]);
        ctx.beginPath(); ctx.moveTo(bx, sy + arrowH * 0.5); ctx.lineTo(bx, sy2 - arrowH * 0.5); ctx.stroke();
        ctx.setLineDash([]);
      }
    }
  }
  ctx.fillStyle = '#F39C12'; ctx.font = `${Math.max(8, w * 0.022)}px Arial`;
  ctx.textAlign = 'center'; ctx.textBaseline = 'alphabetic';
  ctx.fillText('H-bonds between strands', betX, h * 0.88);

  // Divider
  ctx.strokeStyle = '#EEE'; ctx.lineWidth = 1;
  ctx.beginPath(); ctx.moveTo(cx, h * 0.08); ctx.lineTo(cx, h * 0.92); ctx.stroke();
}

static _drawTertiaryStructure(ctx, width, height, componentFocus) {
  const w = width, h = height;
  const cx = w * 0.5, cy = h * 0.5;

  ctx.fillStyle = '#222';
  ctx.font = `bold ${Math.max(13, w * 0.038)}px Arial`;
  ctx.textAlign = 'center'; ctx.textBaseline = 'alphabetic';
  ctx.fillText('Tertiary Structure', cx, 22);

  // Draw protein blob
  const blob = [
    [cx - w * 0.18, cy - h * 0.2],
    [cx + w * 0.08, cy - h * 0.28],
    [cx + w * 0.26, cy - h * 0.1],
    [cx + w * 0.24, cy + h * 0.15],
    [cx + w * 0.06, cy + h * 0.28],
    [cx - w * 0.16, cy + h * 0.22],
    [cx - w * 0.28, cy + h * 0.08],
    [cx - w * 0.26, cy - h * 0.1]
  ];

  ctx.fillStyle = 'rgba(155,89,182,0.15)';
  ctx.strokeStyle = '#9B59B6'; ctx.lineWidth = 3;
  ctx.beginPath();
  ctx.moveTo(blob[0][0], blob[0][1]);
  blob.forEach((pt, i) => {
    const next = blob[(i + 1) % blob.length];
    const cpx = (pt[0] + next[0]) * 0.5;
    const cpy = (pt[1] + next[1]) * 0.5;
    ctx.quadraticCurveTo(pt[0], pt[1], cpx, cpy);
  });
  ctx.closePath(); ctx.fill(); ctx.stroke();

  // Structural elements inside
  // Alpha helices
  for (let i = 0; i < 3; i++) {
    const hx = cx - w * 0.12 + i * w * 0.12, hy = cy - h * 0.08 + i * h * 0.08;
    ctx.strokeStyle = '#3498DB'; ctx.lineWidth = 6;
    ctx.beginPath();
    for (let p = 0; p <= 12; p++) {
      const angle = p / 12 * Math.PI * 3;
      const px = hx + Math.cos(angle) * w * 0.04;
      const py = hy - h * 0.1 + p * (h * 0.2 / 12);
      p === 0 ? ctx.moveTo(px, py) : ctx.lineTo(px, py);
    }
    ctx.stroke();
  }

  // Beta strands
  ctx.fillStyle = '#27AE60'; ctx.lineWidth = 2;
  [[cx + w * 0.08, cy - h * 0.12], [cx + w * 0.08, cy - h * 0.02], [cx + w * 0.08, cy + h * 0.08]].forEach(([bx, by]) => {
    ctx.fillStyle = '#27AE60' + '88'; ctx.strokeStyle = '#27AE60';
    ctx.beginPath();
    ctx.moveTo(bx - w * 0.06, by - h * 0.04);
    ctx.lineTo(bx + w * 0.04, by - h * 0.04);
    ctx.lineTo(bx + w * 0.07, by);
    ctx.lineTo(bx + w * 0.04, by + h * 0.04);
    ctx.lineTo(bx - w * 0.06, by + h * 0.04);
    ctx.closePath(); ctx.fill(); ctx.stroke();
  });

  // Loop/coil regions
  ctx.strokeStyle = '#BDC3C7'; ctx.lineWidth = 3;
  ctx.setLineDash([4, 3]);
  ctx.beginPath();
  ctx.moveTo(cx - w * 0.1, cy - h * 0.18);
  ctx.bezierCurveTo(cx - w * 0.18, cy - h * 0.05, cx + w * 0.05, cy + h * 0.18, cx + w * 0.1, cy + h * 0.22);
  ctx.stroke();
  ctx.setLineDash([]);

  // Stabilizing interactions legend
  const interactions = [
    { x: cx + w * 0.3, y: h * 0.35, label: 'Hydrophobic\ncore', color: '#E74C3C' },
    { x: cx + w * 0.3, y: h * 0.52, label: 'Disulfide\nbond', color: '#F39C12' },
    { x: cx + w * 0.3, y: h * 0.68, label: 'Ionic\nbond', color: '#3498DB' },
    { x: cx + w * 0.3, y: h * 0.84, label: 'H-bond', color: '#27AE60' }
  ];

  interactions.forEach(intr => {
    ctx.fillStyle = intr.color;
    ctx.beginPath(); ctx.arc(intr.x - w * 0.04, intr.y, w * 0.02, 0, Math.PI * 2); ctx.fill();
    ctx.fillStyle = intr.color;
    ctx.font = `${Math.max(8, w * 0.022)}px Arial`;
    ctx.textAlign = 'left'; ctx.textBaseline = 'middle';
    intr.label.split('\n').forEach((ln, li) => ctx.fillText(ln, intr.x - w * 0.01, intr.y + (li - 0.5) * h * 0.028));
  });
}

static _drawQuaternaryStructure(ctx, width, height, componentFocus) {
  const w = width, h = height;
  const cx = w * 0.5, cy = h * 0.5;

  ctx.fillStyle = '#222';
  ctx.font = `bold ${Math.max(13, w * 0.038)}px Arial`;
  ctx.textAlign = 'center'; ctx.textBaseline = 'alphabetic';
  ctx.fillText('Quaternary Structure (Hemoglobin)', cx, 22);

  // Draw 4 subunits
  const subunits = [
    { x: cx - w * 0.18, y: cy - h * 0.15, color: '#E74C3C', label: 'α₁' },
    { x: cx + w * 0.18, y: cy - h * 0.15, color: '#3498DB', label: 'β₁' },
    { x: cx - w * 0.18, y: cy + h * 0.15, color: '#E67E22', label: 'α₂' },
    { x: cx + w * 0.18, y: cy + h * 0.15, color: '#9B59B6', label: 'β₂' }
  ];

  // Interface lines
  const pairs = [[0, 1], [0, 2], [1, 3], [2, 3], [0, 3], [1, 2]];
  pairs.forEach(([a, b]) => {
    ctx.strokeStyle = 'rgba(150,150,150,0.3)'; ctx.lineWidth = 2;
    ctx.beginPath(); ctx.moveTo(subunits[a].x, subunits[a].y); ctx.lineTo(subunits[b].x, subunits[b].y); ctx.stroke();
  });

  subunits.forEach(su => {
    const g = ctx.createRadialGradient(su.x - w * 0.04, su.y - h * 0.04, 4, su.x, su.y, w * 0.12);
    g.addColorStop(0, su.color + 'CC'); g.addColorStop(1, su.color + '55');
    ctx.fillStyle = g; ctx.strokeStyle = su.color; ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.moveTo(su.x - w * 0.08, su.y - h * 0.1);
    ctx.bezierCurveTo(su.x + w * 0.06, su.y - h * 0.14, su.x + w * 0.12, su.y, su.x + w * 0.08, su.y + h * 0.1);
    ctx.bezierCurveTo(su.x - w * 0.04, su.y + h * 0.13, su.x - w * 0.14, su.y + h * 0.06, su.x - w * 0.12, su.y - h * 0.04);
    ctx.closePath(); ctx.fill(); ctx.stroke();

    // Heme group
    ctx.fillStyle = '#B7950B';
    ctx.beginPath(); ctx.arc(su.x, su.y, w * 0.03, 0, Math.PI * 2); ctx.fill();
    ctx.fillStyle = '#F39C12'; ctx.beginPath(); ctx.arc(su.x, su.y, w * 0.015, 0, Math.PI * 2); ctx.fill();
    ctx.fillStyle = '#333'; ctx.font = `bold ${Math.max(6, w * 0.016)}px Arial`;
    ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
    ctx.fillText('Fe', su.x, su.y);

    // Label
    ctx.fillStyle = su.color;
    ctx.font = `bold ${Math.max(11, w * 0.034)}px Arial`;
    ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
    ctx.fillText(su.label, su.x - w * 0.1, su.y - h * 0.08);
  });

  // Interface labels
  ctx.fillStyle = '#666'; ctx.font = `italic ${Math.max(8, w * 0.022)}px Arial`;
  ctx.textAlign = 'center'; ctx.textBaseline = 'alphabetic';
  ctx.fillText('α₁β₁ interface (stable)', cx, cy - h * 0.28);
  ctx.fillText('α₁β₂ interface (T↔R switch)', cx, cy + h * 0.32);

  // O2 binding note
  ctx.fillStyle = '#3498DB';
  ctx.font = `${Math.max(8, w * 0.024)}px Arial`;
  ctx.textAlign = 'center'; ctx.textBaseline = 'alphabetic';
  ctx.fillText('4 heme groups · cooperative O₂ binding · T-state (deoxy) ↔ R-state (oxy)', cx, h - 8);
}

// ─────────────────────────────────────────────────────────────────────────────

static drawCompleteTranscriptionRegulation(ctx, x, y, width, height, view, componentFocus) {
  ctx.save();
  ctx.translate(x, y);

  switch (view) {
    case 'complete':
    case 'overview':
    default:
      this._drawTranscriptionRegulationOverview(ctx, width, height, componentFocus);
      break;
    case 'enhancer':
      this.drawEnhancerRegion(ctx, width, height, componentFocus);
      break;
    case 'silencer':
      this.drawSilencerRegion(ctx, width, height, componentFocus);
      break;
    case 'transcription-factor':
      this.drawTranscriptionFactor(ctx, width, height, componentFocus);
      break;
    case 'tata-box':
      this.drawTATABox(ctx, width, height, componentFocus);
      break;
    case 'promoter':
      this.drawPromoterRegion(ctx, width, height, componentFocus);
      break;
    case 'rna-polymerase':
      this.drawRNAPolymeraseII(ctx, width, height, componentFocus);
      break;
    case 'mediator':
      this._drawMediatorComplex(ctx, width, height, componentFocus);
      break;
  }

  ctx.restore();
}

static _drawTranscriptionRegulationOverview(ctx, width, height, componentFocus) {
  const w = width, h = height;
  const cx = w * 0.5, dnaY = h * 0.62;

  ctx.fillStyle = '#222';
  ctx.font = `bold ${Math.max(13, w * 0.038)}px Arial`;
  ctx.textAlign = 'center'; ctx.textBaseline = 'alphabetic';
  ctx.fillText('Transcription Regulation', cx, 22);

  // Genomic DNA
  for (let s = 0; s < 2; s++) {
    ctx.strokeStyle = s === 0 ? '#4A90E2' : '#E24A4A';
    ctx.lineWidth = 5;
    ctx.beginPath();
    ctx.moveTo(w * 0.02, dnaY + s * 14 - 7);
    ctx.lineTo(w * 0.98, dnaY + s * 14 - 7);
    ctx.stroke();
  }

  // Enhancer (far upstream left)
  const enhX = w * 0.1;
  ctx.fillStyle = '#F39C12'; ctx.strokeStyle = '#D35400'; ctx.lineWidth = 2;
  ctx.beginPath(); ctx.roundRect(enhX - w * 0.07, dnaY - h * 0.06, w * 0.14, h * 0.09, 5); ctx.fill(); ctx.stroke();
  ctx.fillStyle = '#fff'; ctx.font = `bold ${Math.max(8, w * 0.024)}px Arial`;
  ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
  ctx.fillText('Enhancer', enhX, dnaY - h * 0.015);

  // Silencer (upstream right of enhancer)
  const silX = w * 0.3;
  ctx.fillStyle = '#E74C3C'; ctx.strokeStyle = '#C0392B'; ctx.lineWidth = 2;
  ctx.beginPath(); ctx.roundRect(silX - w * 0.07, dnaY - h * 0.06, w * 0.14, h * 0.09, 5); ctx.fill(); ctx.stroke();
  ctx.fillStyle = '#fff'; ctx.font = `bold ${Math.max(8, w * 0.024)}px Arial`;
  ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
  ctx.fillText('Silencer', silX, dnaY - h * 0.015);

  // Promoter / TATA
  const promX = w * 0.54;
  ctx.fillStyle = '#9B59B6'; ctx.strokeStyle = '#6C3483'; ctx.lineWidth = 2;
  ctx.beginPath(); ctx.roundRect(promX - w * 0.09, dnaY - h * 0.06, w * 0.18, h * 0.09, 5); ctx.fill(); ctx.stroke();
  ctx.fillStyle = '#fff'; ctx.font = `bold ${Math.max(8, w * 0.024)}px Arial`;
  ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
  ctx.fillText('Promoter/TATA', promX, dnaY - h * 0.015);

  // Gene
  const geneX = w * 0.78;
  ctx.fillStyle = '#27AE60'; ctx.strokeStyle = '#1E8449'; ctx.lineWidth = 2;
  ctx.beginPath(); ctx.roundRect(geneX - w * 0.1, dnaY - h * 0.06, w * 0.2, h * 0.09, 5); ctx.fill(); ctx.stroke();
  ctx.fillStyle = '#fff'; ctx.font = `bold ${Math.max(9, w * 0.026)}px Arial`;
  ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
  ctx.fillText('Gene', geneX, dnaY - h * 0.015);

  // Activator TF on enhancer
  const actX = enhX, actY = dnaY - h * 0.22;
  ctx.fillStyle = '#27AE60'; ctx.strokeStyle = '#1E8449'; ctx.lineWidth = 2;
  ctx.beginPath(); ctx.ellipse(actX, actY, w * 0.06, h * 0.07, 0, 0, Math.PI * 2); ctx.fill(); ctx.stroke();
  ctx.fillStyle = '#fff'; ctx.font = `bold ${Math.max(7, w * 0.02)}px Arial`;
  ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
  ctx.fillText('Act-TF', actX, actY);
  ctx.strokeStyle = '#27AE60'; ctx.lineWidth = 1; ctx.setLineDash([3, 3]);
  ctx.beginPath(); ctx.moveTo(actX, actY + h * 0.07); ctx.lineTo(actX, dnaY - h * 0.06); ctx.stroke();
  ctx.setLineDash([]);

  // Repressor TF on silencer
  const repX = silX, repY = dnaY - h * 0.22;
  ctx.fillStyle = '#E74C3C'; ctx.strokeStyle = '#C0392B'; ctx.lineWidth = 2;
  ctx.beginPath(); ctx.ellipse(repX, repY, w * 0.06, h * 0.07, 0, 0, Math.PI * 2); ctx.fill(); ctx.stroke();
  ctx.fillStyle = '#fff'; ctx.font = `bold ${Math.max(7, w * 0.02)}px Arial`;
  ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
  ctx.fillText('Rep-TF', repX, repY);
  ctx.strokeStyle = '#E74C3C'; ctx.lineWidth = 1; ctx.setLineDash([3, 3]);
  ctx.beginPath(); ctx.moveTo(repX, repY + h * 0.07); ctx.lineTo(repX, dnaY - h * 0.06); ctx.stroke();
  ctx.setLineDash([]);

  // Mediator complex
  const medX = promX - w * 0.04, medY = dnaY - h * 0.38;
  ctx.fillStyle = '#3498DB' + 'AA'; ctx.strokeStyle = '#2980B9'; ctx.lineWidth = 2;
  ctx.beginPath(); ctx.ellipse(medX, medY, w * 0.1, h * 0.09, 0, 0, Math.PI * 2); ctx.fill(); ctx.stroke();
  ctx.fillStyle = '#fff'; ctx.font = `bold ${Math.max(8, w * 0.024)}px Arial`;
  ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
  ctx.fillText('Mediator', medX, medY);

  // Pol II + GTFs
  const polX = promX + w * 0.06, polY = dnaY - h * 0.2;
  ctx.fillStyle = '#8E44AD' + 'AA'; ctx.strokeStyle = '#6C3483'; ctx.lineWidth = 2;
  ctx.beginPath(); ctx.ellipse(polX, polY, w * 0.09, h * 0.1, 0, 0, Math.PI * 2); ctx.fill(); ctx.stroke();
  ctx.fillStyle = '#fff'; ctx.font = `bold ${Math.max(7, w * 0.02)}px Arial`;
  ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
  ctx.fillText('Pol II', polX, polY - 5);
  ctx.font = `${Math.max(6, w * 0.016)}px Arial`;
  ctx.fillText('+ GTFs', polX, polY + 6);

  // DNA loop (enhancer to promoter)
  ctx.strokeStyle = '#F39C12'; ctx.lineWidth = 2; ctx.setLineDash([5, 4]);
  ctx.beginPath();
  ctx.moveTo(enhX + w * 0.07, dnaY - h * 0.03);
  ctx.bezierCurveTo(enhX + w * 0.1, dnaY - h * 0.55, promX - w * 0.15, dnaY - h * 0.55, promX - w * 0.09, dnaY - h * 0.03);
  ctx.stroke();
  ctx.setLineDash([]);
  ctx.fillStyle = '#F39C12'; ctx.font = `${Math.max(8, w * 0.022)}px Arial`;
  ctx.textAlign = 'center'; ctx.textBaseline = 'alphabetic';
  ctx.fillText('DNA loop', (enhX + promX) * 0.5, dnaY - h * 0.57);

  // Silencer repression arrow
  ctx.strokeStyle = '#E74C3C'; ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.moveTo(silX + w * 0.07, dnaY - h * 0.03);
  ctx.bezierCurveTo(silX + w * 0.1, dnaY - h * 0.45, promX - w * 0.12, dnaY - h * 0.45, promX - w * 0.09, dnaY - h * 0.06);
  ctx.stroke();
  ctx.fillStyle = '#E74C3C'; ctx.font = `${Math.max(8, w * 0.022)}px Arial`;
  ctx.textAlign = 'center'; ctx.textBaseline = 'alphabetic';
  ctx.fillText('Repression', (silX + promX) * 0.5, dnaY - h * 0.47);

  // RNA output
  ctx.strokeStyle = '#FF9F43'; ctx.lineWidth = 4;
  ctx.beginPath();
  ctx.moveTo(geneX, dnaY - h * 0.06);
  ctx.lineTo(geneX + w * 0.04, dnaY - h * 0.25);
  ctx.stroke();
  ctx.fillStyle = '#FF9F43'; ctx.font = `${Math.max(9, w * 0.026)}px Arial`;
  ctx.textAlign = 'left'; ctx.textBaseline = 'middle';
  ctx.fillText('mRNA', geneX + w * 0.05, dnaY - h * 0.22);
}

static _drawMediatorComplex(ctx, width, height, componentFocus) {
  const w = width, h = height;
  const cx = w * 0.5, cy = h * 0.5;

  ctx.fillStyle = '#222';
  ctx.font = `bold ${Math.max(13, w * 0.038)}px Arial`;
  ctx.textAlign = 'center'; ctx.textBaseline = 'alphabetic';
  ctx.fillText('Mediator Complex', cx, 22);

  // Mediator modules
  const modules = [
    { name: 'Head', x: cx, y: cy + h * 0.18, rx: w * 0.18, ry: h * 0.12, color: '#3498DB', desc: 'Pol II interaction' },
    { name: 'Middle', x: cx, y: cy, rx: w * 0.2, ry: h * 0.13, color: '#2980B9', desc: 'Kinase module dock' },
    { name: 'Tail', x: cx, y: cy - h * 0.2, rx: w * 0.22, ry: h * 0.14, color: '#1F618D', desc: 'Activator TF binding' }
  ];

  modules.forEach((m, i) => {
    const mg = ctx.createRadialGradient(m.x - m.rx * 0.3, m.y - m.ry * 0.3, 4, m.x, m.y, m.rx);
    mg.addColorStop(0, m.color + 'CC'); mg.addColorStop(1, m.color + '44');
    ctx.fillStyle = mg; ctx.strokeStyle = m.color; ctx.lineWidth = 3;
    ctx.beginPath(); ctx.ellipse(m.x, m.y, m.rx, m.ry, 0, 0, Math.PI * 2); ctx.fill(); ctx.stroke();
    ctx.fillStyle = '#fff';
    ctx.font = `bold ${Math.max(9, w * 0.028)}px Arial`;
    ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
    ctx.fillText(m.name, m.x, m.y - 5);
    ctx.font = `${Math.max(7, w * 0.02)}px Arial`;
    ctx.fillText(m.desc, m.x, m.y + 7);
    if (i < modules.length - 1) {
      ctx.strokeStyle = '#AAA'; ctx.lineWidth = 1;
      ctx.setLineDash([3, 3]);
      ctx.beginPath(); ctx.moveTo(m.x, m.y - m.ry); ctx.lineTo(m.x, modules[i + 1].y + modules[i + 1].ry); ctx.stroke();
      ctx.setLineDash([]);
    }
  });

  // Pol II below head
  ctx.fillStyle = '#8E44AD' + 'AA'; ctx.strokeStyle = '#6C3483'; ctx.lineWidth = 2;
  ctx.beginPath(); ctx.ellipse(cx, cy + h * 0.36, w * 0.12, h * 0.07, 0, 0, Math.PI * 2); ctx.fill(); ctx.stroke();
  ctx.fillStyle = '#fff'; ctx.font = `bold ${Math.max(9, w * 0.026)}px Arial`;
  ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
  ctx.fillText('RNA Pol II', cx, cy + h * 0.36);
  ctx.strokeStyle = '#8E44AD'; ctx.lineWidth = 2;
  ctx.beginPath(); ctx.moveTo(cx, modules[0].y + modules[0].ry); ctx.lineTo(cx, cy + h * 0.29); ctx.stroke();

  // Activator TF above tail
  ctx.fillStyle = '#27AE60' + 'AA'; ctx.strokeStyle = '#1E8449'; ctx.lineWidth = 2;
  ctx.beginPath(); ctx.ellipse(cx, cy - h * 0.4, w * 0.1, h * 0.07, 0, 0, Math.PI * 2); ctx.fill(); ctx.stroke();
  ctx.fillStyle = '#fff'; ctx.font = `bold ${Math.max(8, w * 0.024)}px Arial`;
  ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
  ctx.fillText('Act-TF', cx, cy - h * 0.4);
  ctx.strokeStyle = '#27AE60'; ctx.lineWidth = 2;
  ctx.beginPath(); ctx.moveTo(cx, cy - h * 0.33); ctx.lineTo(cx, modules[2].y - modules[2].ry); ctx.stroke();

  // CDK8 kinase module
  ctx.fillStyle = '#E74C3C' + 'AA'; ctx.strokeStyle = '#C0392B'; ctx.lineWidth = 2;
  ctx.beginPath(); ctx.arc(cx + w * 0.3, cy, w * 0.07, 0, Math.PI * 2); ctx.fill(); ctx.stroke();
  ctx.fillStyle = '#fff'; ctx.font = `bold ${Math.max(8, w * 0.022)}px Arial`;
  ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
  ctx.fillText('CDK8', cx + w * 0.3, cy - 5);
  ctx.font = `${Math.max(6, w * 0.016)}px Arial`;
  ctx.fillText('Kinase', cx + w * 0.3, cy + 6);
  ctx.strokeStyle = '#E74C3C'; ctx.lineWidth = 1; ctx.setLineDash([3, 3]);
  ctx.beginPath(); ctx.moveTo(cx + w * 0.3 - w * 0.07, cy); ctx.lineTo(modules[1].x + modules[1].rx, modules[1].y); ctx.stroke();
  ctx.setLineDash([]);
}
