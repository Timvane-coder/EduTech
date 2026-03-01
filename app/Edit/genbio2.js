
static drawDNASupercoiling(ctx, width, height, componentFocus) {
  const w = width, h = height;
  const cx = w * 0.5, cy = h * 0.5;

  const colors = {
    strand1: '#4A90E2',
    strand2: '#E24A4A',
    supercoil: '#6B4EFF',
    label: '#333333'
  };

  // Draw positive supercoil (overwound) on left, negative (underwound) on right
  const types = [
    { x: w * 0.28, label: '+Supercoil', dir: 1 },
    { x: w * 0.72, label: '-Supercoil', dir: -1 }
  ];

  types.forEach(({ x, label, dir }) => {
    const baseY = cy;
    const turns = 4;
    const pts = 60;
    const amplitude = w * 0.1;
    const span = h * 0.7;

    for (let strand = 0; strand < 2; strand++) {
      ctx.strokeStyle = strand === 0 ? colors.strand1 : colors.strand2;
      ctx.lineWidth = 4;
      ctx.beginPath();
      for (let i = 0; i <= pts; i++) {
        const t = i / pts;
        const angle = t * Math.PI * 2 * turns * dir + (strand * Math.PI);
        const twist = Math.sin(t * Math.PI * 2 * 1.5) * w * 0.04 * dir;
        const xPos = x + Math.cos(angle) * amplitude + twist;
        const yPos = baseY - span * 0.5 + t * span;
        if (i === 0) ctx.moveTo(xPos, yPos);
        else ctx.lineTo(xPos, yPos);
      }
      ctx.stroke();
    }

    // Supercoil crossing indicators
    ctx.strokeStyle = colors.supercoil;
    ctx.lineWidth = 2;
    ctx.setLineDash([4, 4]);
    for (let i = 1; i < turns; i++) {
      const t = i / turns;
      const yPos = baseY - span * 0.5 + t * span;
      ctx.beginPath();
      ctx.arc(x, yPos, w * 0.04, 0, Math.PI * 2);
      ctx.stroke();
    }
    ctx.setLineDash([]);

    // Label
    ctx.fillStyle = colors.label;
    ctx.font = `bold ${Math.max(11, w * 0.035)}px Arial`;
    ctx.textAlign = 'center';
    ctx.fillText(label, x, baseY + span * 0.5 + 20);
  });

  // Central relaxed DNA reference
  ctx.strokeStyle = 'rgba(100,100,100,0.4)';
  ctx.lineWidth = 3;
  ctx.setLineDash([6, 4]);
  ctx.beginPath();
  ctx.moveTo(cx, cy - h * 0.35);
  ctx.lineTo(cx, cy + h * 0.35);
  ctx.stroke();
  ctx.setLineDash([]);
  ctx.fillStyle = colors.label;
  ctx.font = `${Math.max(10, w * 0.03)}px Arial`;
  ctx.textAlign = 'center';
  ctx.fillText('Relaxed', cx, cy + h * 0.35 + 18);

  // Title
  ctx.fillStyle = '#222';
  ctx.font = `bold ${Math.max(12, w * 0.04)}px Arial`;
  ctx.textAlign = 'center';
  ctx.fillText('DNA Supercoiling', cx, 22);
}

static drawHistoneProtein(ctx, width, height, componentFocus) {
  const w = width, h = height;
  const cx = w * 0.5, cy = h * 0.5;

  const colors = {
    h2a: '#FF6B6B', h2b: '#FF9F43',
    h3: '#54A0FF', h4: '#5F27CD',
    tails: '#A29BFE', label: '#333'
  };

  const histones = [
    { id: 'H2A', color: colors.h2a, x: cx - w * 0.18, y: cy - h * 0.15 },
    { id: 'H2B', color: colors.h2b, x: cx + w * 0.18, y: cy - h * 0.15 },
    { id: 'H3',  color: colors.h3,  x: cx - w * 0.18, y: cy + h * 0.15 },
    { id: 'H4',  color: colors.h4,  x: cx + w * 0.18, y: cy + h * 0.15 }
  ];

  // Draw octamer outline
  ctx.strokeStyle = 'rgba(150,150,150,0.5)';
  ctx.lineWidth = 2;
  ctx.setLineDash([5, 5]);
  ctx.beginPath();
  ctx.arc(cx, cy, w * 0.32, 0, Math.PI * 2);
  ctx.stroke();
  ctx.setLineDash([]);

  // Draw each histone subunit
  histones.forEach(h => {
    // Main globular domain
    const grad = ctx.createRadialGradient(h.x - 5, h.y - 5, 2, h.x, h.y, w * 0.1);
    grad.addColorStop(0, h.color + 'FF');
    grad.addColorStop(1, h.color + '88');
    ctx.fillStyle = grad;
    ctx.strokeStyle = h.color;
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.arc(h.x, h.y, w * 0.1, 0, Math.PI * 2);
    ctx.fill();
    ctx.stroke();

    // N-terminal tail
    const tailAngle = Math.atan2(h.y - cy, h.x - cx) + Math.PI;
    ctx.strokeStyle = colors.tails;
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.moveTo(h.x + Math.cos(tailAngle) * w * 0.1, h.y + Math.sin(tailAngle) * w * 0.1);
    for (let i = 1; i <= 8; i++) {
      const t = i / 8;
      const wave = Math.sin(i * 1.2) * w * 0.025;
      const px = h.x + Math.cos(tailAngle) * (w * 0.1 + t * w * 0.15) + wave;
      const py = h.y + Math.sin(tailAngle) * (w * 0.1 + t * w * 0.15) + wave * 0.5;
      ctx.lineTo(px, py);
    }
    ctx.stroke();

    // Label
    ctx.fillStyle = '#fff';
    ctx.font = `bold ${Math.max(10, w * 0.032)}px Arial`;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(h.id, h.x, h.y);
  });

  // H1 linker histone
  ctx.fillStyle = '#00B894';
  const h1Grad = ctx.createRadialGradient(cx - 4, cy - 4, 2, cx, cy, w * 0.08);
  h1Grad.addColorStop(0, '#00B894');
  h1Grad.addColorStop(1, '#00695C');
  ctx.fillStyle = h1Grad;
  ctx.beginPath();
  ctx.arc(cx, cy, w * 0.08, 0, Math.PI * 2);
  ctx.fill();
  ctx.strokeStyle = '#007A5E';
  ctx.lineWidth = 2;
  ctx.stroke();
  ctx.fillStyle = '#fff';
  ctx.font = `bold ${Math.max(10, w * 0.03)}px Arial`;
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText('H1', cx, cy);

  ctx.fillStyle = colors.label;
  ctx.font = `bold ${Math.max(12, w * 0.04)}px Arial`;
  ctx.textBaseline = 'alphabetic';
  ctx.fillText('Histone Octamer', cx, 22);
}

static drawNucleosome(ctx, width, height, componentFocus) {
  const w = width, h = height;
  const cx = w * 0.5, cy = h * 0.52;

  // Histone core disk
  const coreRx = w * 0.22, coreRy = h * 0.22;
  const coreGrad = ctx.createRadialGradient(cx - w * 0.05, cy - h * 0.05, 5, cx, cy, coreRx);
  coreGrad.addColorStop(0, '#FFF0C0');
  coreGrad.addColorStop(1, '#E8A000');
  ctx.fillStyle = coreGrad;
  ctx.strokeStyle = '#B8860B';
  ctx.lineWidth = 3;
  ctx.beginPath();
  ctx.ellipse(cx, cy, coreRx, coreRy, 0, 0, Math.PI * 2);
  ctx.fill();
  ctx.stroke();

  // Individual histone labels on core
  const hPos = [
    { id: 'H2A', a: -0.6 }, { id: 'H2B', a: 0.6 },
    { id: 'H3',  a: Math.PI - 0.6 }, { id: 'H4', a: Math.PI + 0.6 }
  ];
  hPos.forEach(hp => {
    const hx = cx + Math.cos(hp.a) * coreRx * 0.6;
    const hy = cy + Math.sin(hp.a) * coreRy * 0.6;
    ctx.fillStyle = 'rgba(255,255,255,0.8)';
    ctx.beginPath();
    ctx.arc(hx, hy, w * 0.045, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = '#333';
    ctx.font = `bold ${Math.max(8, w * 0.028)}px Arial`;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(hp.id, hx, hy);
  });

  // DNA wrapping ~1.65 turns
  const turns = 1.65;
  const pts = 120;
  ctx.lineWidth = 5;
  for (let strand = 0; strand < 2; strand++) {
    const grad = ctx.createLinearGradient(0, 0, w, 0);
    grad.addColorStop(0, strand === 0 ? '#4A90E2' : '#E24A4A');
    grad.addColorStop(1, strand === 0 ? '#1A5FAB' : '#AB1A1A');
    ctx.strokeStyle = grad;
    ctx.beginPath();
    for (let i = 0; i <= pts; i++) {
      const t = i / pts;
      const angle = t * Math.PI * 2 * turns - Math.PI * 0.5 + (strand * 0.18);
      const rx = coreRx + w * 0.055;
      const ry = coreRy + h * 0.055;
      const xPos = cx + Math.cos(angle) * rx;
      const yPos = cy + Math.sin(angle) * ry;
      if (i === 0) ctx.moveTo(xPos, yPos);
      else ctx.lineTo(xPos, yPos);
    }
    ctx.stroke();
  }

  // Linker DNA tails
  ctx.strokeStyle = '#4A90E2';
  ctx.lineWidth = 4;
  const entryAngle = -Math.PI * 0.5;
  const exitAngle = entryAngle + turns * Math.PI * 2;
  [[entryAngle, -1], [exitAngle, 1]].forEach(([ang, dir]) => {
    const sx = cx + Math.cos(ang) * (coreRx + w * 0.055);
    const sy = cy + Math.sin(ang) * (coreRy + h * 0.055);
    ctx.beginPath();
    ctx.moveTo(sx, sy);
    ctx.lineTo(sx + dir * w * 0.15, sy - h * 0.08);
    ctx.stroke();
  });

  // H1 linker histone
  const h1x = cx + Math.cos(exitAngle) * (coreRx + w * 0.055);
  const h1y = cy + Math.sin(exitAngle) * (coreRy + h * 0.055);
  ctx.fillStyle = '#00B894';
  ctx.beginPath();
  ctx.arc(h1x, h1y, w * 0.04, 0, Math.PI * 2);
  ctx.fill();
  ctx.fillStyle = '#fff';
  ctx.font = `bold ${Math.max(8, w * 0.025)}px Arial`;
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText('H1', h1x, h1y);

  // Labels
  ctx.fillStyle = '#333';
  ctx.font = `${Math.max(10, w * 0.032)}px Arial`;
  ctx.textBaseline = 'alphabetic';
  ctx.textAlign = 'left';
  ctx.fillText('Histone Core', cx + coreRx + 5, cy + 5);
  ctx.fillText('Wrapped DNA', cx - w * 0.42, cy - h * 0.28);

  ctx.fillStyle = '#222';
  ctx.font = `bold ${Math.max(12, w * 0.04)}px Arial`;
  ctx.textAlign = 'center';
  ctx.fillText('Nucleosome', cx, 22);
}

static drawChromatinFiber(ctx, width, height, componentFocus) {
  const w = width, h = height;
  const cx = w * 0.5;

  const colors = {
    dna: '#4A90E2', core: '#E8A000',
    linker: '#00B894', fiber: 'rgba(150,100,200,0.15)'
  };

  // 30nm fiber outline
  ctx.fillStyle = colors.fiber;
  ctx.strokeStyle = 'rgba(150,100,200,0.5)';
  ctx.lineWidth = 2;
  ctx.setLineDash([6, 4]);
  ctx.beginPath();
  ctx.roundRect(w * 0.1, h * 0.05, w * 0.8, h * 0.9, 20);
  ctx.fill();
  ctx.stroke();
  ctx.setLineDash([]);

  // Solenoid arrangement of nucleosomes
  const nucleosomes = 6;
  for (let i = 0; i < nucleosomes; i++) {
    const t = i / (nucleosomes - 1);
    const side = i % 2 === 0 ? -1 : 1;
    const nx = cx + side * w * 0.2;
    const ny = h * 0.12 + t * h * 0.76;
    const rx = w * 0.13, ry = h * 0.07;

    // Nucleosome core
    const cg = ctx.createRadialGradient(nx - 4, ny - 4, 2, nx, ny, rx);
    cg.addColorStop(0, '#FFE082');
    cg.addColorStop(1, '#E8A000');
    ctx.fillStyle = cg;
    ctx.strokeStyle = '#B8860B';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.ellipse(nx, ny, rx, ry, 0, 0, Math.PI * 2);
    ctx.fill();
    ctx.stroke();

    // DNA wrap arc
    ctx.strokeStyle = colors.dna;
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.ellipse(nx, ny, rx + 8, ry + 8, 0, -Math.PI * 0.2, Math.PI * 2.2);
    ctx.stroke();

    // Linker to next
    if (i < nucleosomes - 1) {
      const nextSide = (i + 1) % 2 === 0 ? -1 : 1;
      const nxNext = cx + nextSide * w * 0.2;
      const nyNext = h * 0.12 + ((i + 1) / (nucleosomes - 1)) * h * 0.76;
      ctx.strokeStyle = colors.linker;
      ctx.lineWidth = 3;
      ctx.beginPath();
      ctx.moveTo(nx + side * (rx + 8), ny);
      ctx.bezierCurveTo(
        nx + side * (rx + 30), ny + (nyNext - ny) * 0.3,
        nxNext - nextSide * (rx + 30), nyNext - (nyNext - ny) * 0.3,
        nxNext - nextSide * (rx + 8), nyNext
      );
      ctx.stroke();
    }

    // H1
    ctx.fillStyle = '#00B894';
    ctx.beginPath();
    ctx.arc(nx, ny + ry + 8, 6, 0, Math.PI * 2);
    ctx.fill();
  }

  // Labels
  ctx.fillStyle = '#333';
  ctx.font = `${Math.max(9, w * 0.028)}px Arial`;
  ctx.textAlign = 'left';
  ctx.fillText('Nucleosome', w * 0.72, h * 0.15);
  ctx.fillText('Linker DNA', w * 0.72, h * 0.38);
  ctx.fillStyle = 'rgba(150,100,200,0.8)';
  ctx.fillText('30nm Fiber', w * 0.12, h * 0.04);

  ctx.fillStyle = '#222';
  ctx.font = `bold ${Math.max(12, w * 0.04)}px Arial`;
  ctx.textAlign = 'center';
  ctx.fillText('Chromatin Fiber', cx, h - 8);
}

static drawChromosome(ctx, width, height, componentFocus) {
  const w = width, h = height;
  const cx = w * 0.5, cy = h * 0.5;

  const colors = {
    arm: '#7B68EE', band: '#4B0082',
    centromere: '#FF6347', telomere: '#32CD32',
    label: '#333'
  };

  const drawArm = (x, y, armW, armH, top, bandPattern) => {
    // Main arm shape
    const rx = armW * 0.5;
    ctx.beginPath();
    if (top) {
      ctx.moveTo(x - rx, y + armH);
      ctx.lineTo(x - rx, y + armH * 0.15);
      ctx.quadraticCurveTo(x - rx, y, x, y);
      ctx.quadraticCurveTo(x + rx, y, x + rx, y + armH * 0.15);
      ctx.lineTo(x + rx, y + armH);
      ctx.closePath();
    } else {
      ctx.moveTo(x - rx, y);
      ctx.lineTo(x - rx, y + armH * 0.85);
      ctx.quadraticCurveTo(x - rx, y + armH, x, y + armH);
      ctx.quadraticCurveTo(x + rx, y + armH, x + rx, y + armH * 0.85);
      ctx.lineTo(x + rx, y);
      ctx.closePath();
    }
    const g = ctx.createLinearGradient(x - rx, y, x + rx, y);
    g.addColorStop(0, '#A89AFF');
    g.addColorStop(0.4, '#7B68EE');
    g.addColorStop(1, '#5A4FBB');
    ctx.fillStyle = g;
    ctx.fill();
    ctx.strokeStyle = '#4B0082';
    ctx.lineWidth = 2;
    ctx.stroke();

    // G-bands
    bandPattern.forEach(bt => {
      const by = top ? y + bt * armH : y + bt * armH;
      ctx.fillStyle = `rgba(75,0,130,${0.4 + Math.random() * 0.3})`;
      ctx.fillRect(x - rx + 2, by, armW - 4, armH * 0.06);
    });
  };

  const armW = w * 0.22;
  const shortH = h * 0.25;
  const longH = h * 0.35;
  const centY = cy;

  // Short arm (p)
  drawArm(cx, centY - shortH, armW, shortH, true, [0.2, 0.45, 0.7]);
  // Long arm (q)
  drawArm(cx, centY, armW, longH, false, [0.15, 0.3, 0.55, 0.75]);

  // Centromere
  const centGrad = ctx.createRadialGradient(cx, centY, 2, cx, centY, armW * 0.4);
  centGrad.addColorStop(0, '#FF8C69');
  centGrad.addColorStop(1, '#FF6347');
  ctx.fillStyle = centGrad;
  ctx.strokeStyle = '#CC3000';
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.ellipse(cx, centY, armW * 0.4, h * 0.045, 0, 0, Math.PI * 2);
  ctx.fill();
  ctx.stroke();

  // Telomeres
  [[cx, centY - shortH], [cx, centY + longH]].forEach(([tx, ty]) => {
    ctx.fillStyle = colors.telomere;
    ctx.strokeStyle = '#228B22';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.arc(tx, ty, armW * 0.25, 0, Math.PI * 2);
    ctx.fill();
    ctx.stroke();
  });

  // Labels
  ctx.fillStyle = colors.label;
  ctx.font = `${Math.max(10, w * 0.03)}px Arial`;
  ctx.textAlign = 'left';
  const lx = cx + armW * 0.6;
  ctx.fillText('Telomere', lx, centY - shortH + 5);
  ctx.fillText('p arm (short)', lx, centY - shortH * 0.5);
  ctx.fillStyle = '#FF6347';
  ctx.fillText('Centromere', lx, centY + 5);
  ctx.fillStyle = colors.label;
  ctx.fillText('q arm (long)', lx, centY + longH * 0.5);
  ctx.fillText('Telomere', lx, centY + longH + 5);

  ctx.fillStyle = '#222';
  ctx.font = `bold ${Math.max(12, w * 0.04)}px Arial`;
  ctx.textAlign = 'center';
  ctx.fillText('Chromosome', cx, 22);
}

static drawTelomere(ctx, width, height, componentFocus) {
  const w = width, h = height;
  const cx = w * 0.5, cy = h * 0.5;

  const colors = {
    strand1: '#4A90E2', strand2: '#E24A4A',
    repeat: '#FFD700', tloop: '#00CEC9',
    ttaggg: '#FF7675', label: '#333'
  };

  // Chromosome end context
  ctx.fillStyle = 'rgba(123,104,238,0.2)';
  ctx.strokeStyle = '#7B68EE';
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.roundRect(w * 0.05, h * 0.05, w * 0.4, h * 0.45, 8);
  ctx.fill();
  ctx.stroke();
  ctx.fillStyle = '#7B68EE';
  ctx.font = `${Math.max(9, w * 0.028)}px Arial`;
  ctx.textAlign = 'center';
  ctx.fillText('Chromosome End', w * 0.25, h * 0.14);

  // TTAGGG repeat visualization
  const repeats = 8;
  const repW = w * 0.08;
  const repY = h * 0.22;
  for (let i = 0; i < repeats; i++) {
    const rx = w * 0.06 + i * (repW * 0.85);
    const alpha = i < 4 ? 0.9 : 0.5 + (repeats - i) * 0.06;
    ctx.fillStyle = `rgba(255,215,0,${alpha})`;
    ctx.strokeStyle = '#B8860B';
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.roundRect(rx, repY, repW * 0.8, h * 0.12, 4);
    ctx.fill();
    ctx.stroke();
    ctx.fillStyle = '#333';
    ctx.font = `bold ${Math.max(7, w * 0.02)}px Arial`;
    ctx.textAlign = 'center';
    ctx.fillText('TTAGGG', rx + repW * 0.4, repY + h * 0.07);
  }

  // Two DNA strands through repeats
  for (let strand = 0; strand < 2; strand++) {
    ctx.strokeStyle = strand === 0 ? colors.strand1 : colors.strand2;
    ctx.lineWidth = 3;
    ctx.beginPath();
    const sy = repY + (strand === 0 ? -4 : h * 0.12 + 4);
    ctx.moveTo(w * 0.05, sy);
    ctx.lineTo(w * 0.78, sy);
    ctx.stroke();
  }

  // G-overhang (3' single strand)
  ctx.strokeStyle = colors.strand1;
  ctx.lineWidth = 3;
  ctx.setLineDash([5, 3]);
  ctx.beginPath();
  ctx.moveTo(w * 0.78, repY - 4);
  ctx.lineTo(w * 0.92, repY - 4);
  ctx.stroke();
  ctx.setLineDash([]);
  ctx.fillStyle = '#4A90E2';
  ctx.font = `${Math.max(9, w * 0.028)}px Arial`;
  ctx.textAlign = 'left';
  ctx.fillText("3' G-overhang", w * 0.78, repY - 12);

  // T-loop diagram
  const tlCx = w * 0.5, tlCy = h * 0.72;
  ctx.strokeStyle = colors.tloop;
  ctx.lineWidth = 4;
  ctx.beginPath();
  ctx.arc(tlCx, tlCy, w * 0.18, 0, Math.PI * 2);
  ctx.stroke();
  ctx.strokeStyle = colors.strand1;
  ctx.lineWidth = 3;
  ctx.beginPath();
  ctx.moveTo(w * 0.08, tlCy);
  ctx.lineTo(tlCx - w * 0.18, tlCy);
  ctx.stroke();
  ctx.fillStyle = colors.tloop;
  ctx.font = `bold ${Math.max(10, w * 0.03)}px Arial`;
  ctx.textAlign = 'center';
  ctx.fillText('T-loop', tlCx, tlCy + 5);

  ctx.fillStyle = '#222';
  ctx.font = `bold ${Math.max(12, w * 0.04)}px Arial`;
  ctx.textAlign = 'center';
  ctx.fillText('Telomere Structure', cx, 22);
}

static drawCentromere(ctx, width, height, componentFocus) {
  const w = width, h = height;
  const cx = w * 0.5, cy = h * 0.5;

  // Chromosome arms context
  const armW = w * 0.18;
  const armColors = ['#A89AFF', '#7B68EE'];

  // Draw p arm
  const pg = ctx.createLinearGradient(cx - armW, 0, cx + armW, 0);
  pg.addColorStop(0, armColors[0]); pg.addColorStop(1, armColors[1]);
  ctx.fillStyle = pg;
  ctx.beginPath();
  ctx.roundRect(cx - armW * 0.5, h * 0.08, armW, h * 0.35, [8, 8, 0, 0]);
  ctx.fill();
  ctx.strokeStyle = '#4B0082'; ctx.lineWidth = 2; ctx.stroke();

  // Draw q arm
  const qg = ctx.createLinearGradient(cx - armW, 0, cx + armW, 0);
  qg.addColorStop(0, armColors[0]); qg.addColorStop(1, armColors[1]);
  ctx.fillStyle = qg;
  ctx.beginPath();
  ctx.roundRect(cx - armW * 0.5, cy + h * 0.07, armW, h * 0.38, [0, 0, 8, 8]);
  ctx.fill();
  ctx.strokeStyle = '#4B0082'; ctx.lineWidth = 2; ctx.stroke();

  // Centromere region
  const centGrad = ctx.createRadialGradient(cx, cy, 4, cx, cy, w * 0.22);
  centGrad.addColorStop(0, '#FF8C69');
  centGrad.addColorStop(0.6, '#FF6347');
  centGrad.addColorStop(1, '#CC3000');
  ctx.fillStyle = centGrad;
  ctx.strokeStyle = '#AA2000';
  ctx.lineWidth = 3;
  ctx.beginPath();
  ctx.ellipse(cx, cy, w * 0.22, h * 0.09, 0, 0, Math.PI * 2);
  ctx.fill();
  ctx.stroke();

  // Kinetochore plates
  [-1, 1].forEach(side => {
    ctx.fillStyle = '#2C3E50';
    ctx.strokeStyle = '#1A252F';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.roundRect(cx - w * 0.22, cy + side * h * 0.08, w * 0.44, h * 0.04, 4);
    ctx.fill();
    ctx.stroke();

    // Microtubule attachment
    for (let i = 0; i < 4; i++) {
      const mx = cx - w * 0.18 + i * w * 0.12;
      ctx.strokeStyle = '#E74C3C';
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(mx, cy + side * (h * 0.12));
      ctx.lineTo(mx + (Math.random() - 0.5) * w * 0.06, cy + side * h * 0.3);
      ctx.stroke();
    }
  });

  // Alpha-satellite DNA
  ctx.fillStyle = 'rgba(255,255,255,0.7)';
  ctx.font = `${Math.max(9, w * 0.028)}px Arial`;
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText('α-satellite DNA', cx, cy);

  // Labels
  ctx.fillStyle = '#333';
  ctx.font = `${Math.max(9, w * 0.028)}px Arial`;
  ctx.textBaseline = 'alphabetic';
  ctx.textAlign = 'left';
  ctx.fillText('Kinetochore', cx + w * 0.24, cy - h * 0.08);
  ctx.fillText('Microtubule', cx + w * 0.24, cy + h * 0.25);
  ctx.fillText('p arm', cx + w * 0.12, h * 0.2);
  ctx.fillText('q arm', cx + w * 0.12, cy + h * 0.25);

  ctx.fillStyle = '#222';
  ctx.font = `bold ${Math.max(12, w * 0.04)}px Arial`;
  ctx.textAlign = 'center';
  ctx.fillText('Centromere', cx, 22);
}

static drawOriginOfReplication(ctx, width, height, componentFocus) {
  const w = width, h = height;
  const cx = w * 0.5, cy = h * 0.45;

  // Genomic DNA context
  for (let strand = 0; strand < 2; strand++) {
    ctx.strokeStyle = strand === 0 ? '#4A90E2' : '#E24A4A';
    ctx.lineWidth = 4;
    ctx.beginPath();
    ctx.moveTo(w * 0.04, cy + strand * 10 - 5);
    ctx.lineTo(w * 0.96, cy + strand * 10 - 5);
    ctx.stroke();
  }

  // ORC (Origin Recognition Complex)
  const orcW = w * 0.22, orcH = h * 0.18;
  const orcGrad = ctx.createRadialGradient(cx, cy, 4, cx, cy, orcW * 0.5);
  orcGrad.addColorStop(0, '#FFF0C0');
  orcGrad.addColorStop(1, '#F39C12');
  ctx.fillStyle = orcGrad;
  ctx.strokeStyle = '#E67E22';
  ctx.lineWidth = 3;
  ctx.beginPath();
  ctx.ellipse(cx, cy, orcW * 0.5, orcH * 0.5, 0, 0, Math.PI * 2);
  ctx.fill();
  ctx.stroke();
  ctx.fillStyle = '#fff';
  ctx.font = `bold ${Math.max(10, w * 0.03)}px Arial`;
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText('ORC', cx, cy);

  // ARS consensus sequence bar
  ctx.fillStyle = '#27AE60';
  ctx.strokeStyle = '#1E8449';
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.roundRect(cx - w * 0.15, cy + orcH * 0.5 + 10, w * 0.3, h * 0.06, 4);
  ctx.fill();
  ctx.stroke();
  ctx.fillStyle = '#fff';
  ctx.font = `${Math.max(9, w * 0.028)}px Arial`;
  ctx.textBaseline = 'middle';
  ctx.fillText('ARS Consensus Sequence', cx, cy + orcH * 0.5 + 10 + h * 0.03);

  // Licensing factors (MCM)
  [-1, 1].forEach(side => {
    const mx = cx + side * w * 0.32;
    ctx.fillStyle = '#8E44AD';
    ctx.strokeStyle = '#6C3483';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.arc(mx, cy, w * 0.07, 0, Math.PI * 2);
    ctx.fill();
    ctx.stroke();
    ctx.fillStyle = '#fff';
    ctx.font = `bold ${Math.max(8, w * 0.025)}px Arial`;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText('MCM', mx, cy);

    // Arrow from ORC to MCM
    ctx.strokeStyle = '#8E44AD';
    ctx.lineWidth = 2;
    const startX = cx + side * orcW * 0.5;
    const endX = mx - side * w * 0.07;
    ctx.beginPath();
    ctx.moveTo(startX, cy);
    ctx.lineTo(endX, cy);
    ctx.stroke();
    // Arrowhead
    ctx.beginPath();
    ctx.moveTo(endX, cy);
    ctx.lineTo(endX - side * 8, cy - 5);
    ctx.lineTo(endX - side * 8, cy + 5);
    ctx.closePath();
    ctx.fillStyle = '#8E44AD';
    ctx.fill();
  });

  // Labels
  ctx.fillStyle = '#333';
  ctx.font = `${Math.max(9, w * 0.028)}px Arial`;
  ctx.textBaseline = 'alphabetic';
  ctx.textAlign = 'center';
  ctx.fillText('MCM Helicase Loading', cx, h * 0.82);
  ctx.fillText('(Licensing)', cx, h * 0.88);

  ctx.fillStyle = '#222';
  ctx.font = `bold ${Math.max(12, w * 0.04)}px Arial`;
  ctx.fillText('Origin of Replication', cx, 22);
}

static drawReplicationBubble(ctx, width, height, componentFocus) {
  const w = width, h = height;
  const cx = w * 0.5, cy = h * 0.5;

  const colors = {
    template: '#4A90E2', newStrand: '#FF6B6B',
    bubble: 'rgba(255,220,100,0.2)', ssb: '#95E1D3',
    label: '#333'
  };

  // Parental strands (flanking)
  for (let strand = 0; strand < 2; strand++) {
    const yOff = strand === 0 ? -12 : 12;
    ctx.strokeStyle = colors.template;
    ctx.lineWidth = 5;
    ctx.beginPath();
    ctx.moveTo(w * 0.05, cy + yOff);
    ctx.lineTo(w * 0.22, cy + yOff);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(w * 0.78, cy + yOff);
    ctx.lineTo(w * 0.95, cy + yOff);
    ctx.stroke();
  }

  // Bubble region
  const bubbleW = w * 0.56, bubbleH = h * 0.38;
  ctx.fillStyle = colors.bubble;
  ctx.strokeStyle = 'rgba(255,180,0,0.4)';
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.ellipse(cx, cy, bubbleW * 0.5, bubbleH * 0.5, 0, 0, Math.PI * 2);
  ctx.fill();
  ctx.stroke();

  // Template strands within bubble
  for (let strand = 0; strand < 2; strand++) {
    const yOff = strand === 0 ? -bubbleH * 0.35 : bubbleH * 0.35;
    ctx.strokeStyle = colors.template;
    ctx.lineWidth = 4;
    ctx.beginPath();
    ctx.moveTo(cx - bubbleW * 0.48, cy + yOff);
    ctx.lineTo(cx + bubbleW * 0.48, cy + yOff);
    ctx.stroke();
  }

  // Newly synthesized strands
  [-1, 1].forEach(dir => {
    const startX = cx + dir * w * 0.01;
    for (let strand = 0; strand < 2; strand++) {
      const yOff = strand === 0 ? -bubbleH * 0.35 : bubbleH * 0.35;
      ctx.strokeStyle = colors.newStrand;
      ctx.lineWidth = 4;
      ctx.setLineDash([6, 4]);
      ctx.beginPath();
      ctx.moveTo(startX, cy + yOff);
      ctx.lineTo(cx + dir * bubbleW * 0.46, cy + yOff);
      ctx.stroke();
      ctx.setLineDash([]);
    }
  });

  // SSB proteins on template
  for (let i = 0; i < 5; i++) {
    const sx = cx - bubbleW * 0.4 + i * (bubbleW * 0.2);
    ctx.fillStyle = colors.ssb;
    ctx.beginPath();
    ctx.arc(sx, cy - bubbleH * 0.2, 7, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = '#333';
    ctx.font = `bold ${Math.max(6, w * 0.018)}px Arial`;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText('SSB', sx, cy - bubbleH * 0.2);
  }

  // Fork markers
  [-1, 1].forEach(dir => {
    const fx = cx + dir * bubbleW * 0.48;
    ctx.strokeStyle = '#E74C3C';
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.moveTo(fx, cy - bubbleH * 0.5);
    ctx.lineTo(fx, cy + bubbleH * 0.5);
    ctx.stroke();
    ctx.fillStyle = '#E74C3C';
    ctx.font = `bold ${Math.max(9, w * 0.028)}px Arial`;
    ctx.textBaseline = 'alphabetic';
    ctx.fillText(dir === -1 ? '←Fork' : 'Fork→', fx - (dir === -1 ? 45 : 0), cy - bubbleH * 0.5 - 5);
  });

  // Labels
  ctx.fillStyle = '#333';
  ctx.font = `${Math.max(9, w * 0.028)}px Arial`;
  ctx.textAlign = 'center';
  ctx.textBaseline = 'alphabetic';
  ctx.fillStyle = colors.template; ctx.fillText('Template', cx - w * 0.35, cy - bubbleH * 0.35 - 8);
  ctx.fillStyle = colors.newStrand; ctx.fillText('New strand', cx + w * 0.25, cy + bubbleH * 0.35 + 18);

  ctx.fillStyle = '#222';
  ctx.font = `bold ${Math.max(12, w * 0.04)}px Arial`;
  ctx.fillText('Replication Bubble', cx, 22);
}

static drawReplicationFork(ctx, width, height, componentFocus) {
  const w = width, h = height;
  const cx = w * 0.38, cy = h * 0.5;

  const colors = {
    template: '#4A90E2', leading: '#2ECC71',
    lagging: '#E74C3C', primer: '#F39C12',
    okazaki: '#FF8C00', enzyme: '#9B59B6'
  };

  // Fork junction - parental dsDNA coming in from left
  const forkX = cx, forkY = cy;
  for (let s = 0; s < 2; s++) {
    ctx.strokeStyle = colors.template;
    ctx.lineWidth = 5;
    ctx.beginPath();
    ctx.moveTo(w * 0.04, forkY + (s === 0 ? -8 : 8));
    ctx.lineTo(forkX, forkY + (s === 0 ? -8 : 8));
    ctx.stroke();
  }

  // Helicase at fork
  ctx.fillStyle = '#3498DB';
  const helGrad = ctx.createRadialGradient(forkX, forkY, 3, forkX, forkY, w * 0.055);
  helGrad.addColorStop(0, '#85C1E9');
  helGrad.addColorStop(1, '#2980B9');
  ctx.fillStyle = helGrad;
  ctx.strokeStyle = '#1A5276';
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.arc(forkX, forkY, w * 0.055, 0, Math.PI * 2);
  ctx.fill();
  ctx.stroke();
  ctx.fillStyle = '#fff';
  ctx.font = `bold ${Math.max(8, w * 0.026)}px Arial`;
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText('Helicase', forkX, forkY);

  // Leading strand template (upper)
  ctx.strokeStyle = colors.template;
  ctx.lineWidth = 4;
  ctx.beginPath();
  ctx.moveTo(forkX, forkY - 8);
  ctx.lineTo(w * 0.95, forkY - h * 0.28);
  ctx.stroke();

  // Leading strand synthesis
  ctx.strokeStyle = colors.leading;
  ctx.lineWidth = 4;
  ctx.beginPath();
  ctx.moveTo(forkX + w * 0.08, forkY - h * 0.05);
  ctx.lineTo(w * 0.92, forkY - h * 0.26);
  ctx.stroke();

  // Pol III on leading strand
  const polLx = forkX + w * 0.25, polLy = forkY - h * 0.12;
  ctx.fillStyle = '#27AE60';
  ctx.beginPath();
  ctx.arc(polLx, polLy, w * 0.045, 0, Math.PI * 2);
  ctx.fill();
  ctx.strokeStyle = '#1E8449'; ctx.lineWidth = 2; ctx.stroke();
  ctx.fillStyle = '#fff';
  ctx.font = `bold ${Math.max(7, w * 0.022)}px Arial`;
  ctx.fillText('Pol III', polLx, polLy);

  // Lagging strand template (lower)
  ctx.strokeStyle = colors.template;
  ctx.lineWidth = 4;
  ctx.beginPath();
  ctx.moveTo(forkX, forkY + 8);
  ctx.lineTo(w * 0.95, forkY + h * 0.3);
  ctx.stroke();

  // Okazaki fragments
  const numOkazaki = 3;
  for (let i = 0; i < numOkazaki; i++) {
    const ot = (i + 0.5) / numOkazaki;
    const ox = forkX + ot * (w * 0.55);
    const oy = forkY + ot * h * 0.2 + h * 0.06;
    const fragLen = w * 0.12;

    // Primer (RNA)
    ctx.strokeStyle = colors.primer;
    ctx.lineWidth = 4;
    ctx.beginPath();
    ctx.moveTo(ox, oy);
    ctx.lineTo(ox + fragLen * 0.25, oy);
    ctx.stroke();

    // DNA extension
    ctx.strokeStyle = colors.lagging;
    ctx.lineWidth = 4;
    ctx.beginPath();
    ctx.moveTo(ox + fragLen * 0.25, oy);
    ctx.lineTo(ox + fragLen, oy);
    ctx.stroke();
  }

  // Primase
  const primX = forkX + w * 0.06, primY = forkY + h * 0.1;
  ctx.fillStyle = '#F39C12';
  ctx.beginPath();
  ctx.arc(primX, primY, w * 0.038, 0, Math.PI * 2);
  ctx.fill();
  ctx.strokeStyle = '#D68910'; ctx.lineWidth = 2; ctx.stroke();
  ctx.fillStyle = '#fff';
  ctx.font = `bold ${Math.max(7, w * 0.02)}px Arial`;
  ctx.fillText('Primase', primX, primY);

  // Direction arrows
  ctx.fillStyle = '#27AE60';
  ctx.font = `${Math.max(9, w * 0.028)}px Arial`;
  ctx.textAlign = 'left';
  ctx.textBaseline = 'alphabetic';
  ctx.fillText("→ 5'→3' Leading", forkX + w * 0.38, forkY - h * 0.22);
  ctx.fillStyle = '#E74C3C';
  ctx.fillText("← Lagging (Okazaki)", forkX + w * 0.2, forkY + h * 0.32);

  // 5'/3' labels
  ctx.fillStyle = '#333';
  ctx.font = `${Math.max(9, w * 0.028)}px Arial`;
  ctx.fillText("5'", w * 0.04, forkY - 10);
  ctx.fillText("3'", w * 0.04, forkY + 18);

  ctx.fillStyle = '#222';
  ctx.font = `bold ${Math.max(12, w * 0.04)}px Arial`;
  ctx.textAlign = 'center';
  ctx.fillText('Replication Fork', w * 0.5, 22);
}

static drawOkazakiFragment(ctx, width, height, componentFocus) {
  const w = width, h = height;
  const cx = w * 0.5, cy = h * 0.48;

  const colors = {
    template: '#4A90E2', primer: '#F39C12',
    dnaNew: '#E74C3C', ligated: '#2ECC71',
    nick: '#E74C3C', label: '#333'
  };

  const fragY = cy;
  const tempY = cy - h * 0.18;

  // Template strand
  ctx.strokeStyle = colors.template;
  ctx.lineWidth = 5;
  ctx.beginPath();
  ctx.moveTo(w * 0.05, tempY);
  ctx.lineTo(w * 0.95, tempY);
  ctx.stroke();
  ctx.fillStyle = colors.template;
  ctx.font = `${Math.max(9, w * 0.028)}px Arial`;
  ctx.textAlign = 'left';
  ctx.textBaseline = 'middle';
  ctx.fillText("3' → Template", w * 0.05, tempY - 16);

  // Three Okazaki fragments with different states
  const fragments = [
    { x: w * 0.06, label: 'Fragment 3\n(oldest)', state: 'ligated' },
    { x: w * 0.38, label: 'Fragment 2\n(middle)', state: 'nick-filled' },
    { x: w * 0.68, label: 'Fragment 1\n(newest)', state: 'primer' }
  ];

  const fragW = w * 0.27;
  const primerW = w * 0.06;

  fragments.forEach((frag, idx) => {
    const fx = frag.x;

    // RNA Primer (only on newest, replaced on others)
    if (frag.state === 'primer') {
      ctx.strokeStyle = colors.primer;
      ctx.lineWidth = 5;
      ctx.beginPath();
      ctx.moveTo(fx + fragW - primerW, fragY);
      ctx.lineTo(fx + fragW, fragY);
      ctx.stroke();
      ctx.fillStyle = colors.primer;
      ctx.font = `${Math.max(8, w * 0.024)}px Arial`;
      ctx.textAlign = 'center';
      ctx.textBaseline = 'alphabetic';
      ctx.fillText('RNA Primer', fx + fragW - primerW * 0.5, fragY - 8);

      // DNA portion
      ctx.strokeStyle = colors.dnaNew;
      ctx.lineWidth = 5;
      ctx.beginPath();
      ctx.moveTo(fx, fragY);
      ctx.lineTo(fx + fragW - primerW, fragY);
      ctx.stroke();
    } else if (frag.state === 'nick-filled') {
      // Primer removed, gap filled
      ctx.strokeStyle = colors.dnaNew;
      ctx.lineWidth = 5;
      ctx.beginPath();
      ctx.moveTo(fx, fragY);
      ctx.lineTo(fx + fragW - primerW, fragY);
      ctx.stroke();
      // Nick site
      ctx.strokeStyle = colors.nick;
      ctx.lineWidth = 3;
      ctx.beginPath();
      ctx.moveTo(fx + fragW - primerW, fragY - 10);
      ctx.lineTo(fx + fragW - primerW, fragY + 10);
      ctx.stroke();
      ctx.fillStyle = colors.nick;
      ctx.font = `${Math.max(8, w * 0.022)}px Arial`;
      ctx.textAlign = 'center';
      ctx.fillText('Nick', fx + fragW - primerW, fragY - 14);
      // Remaining gap area
      ctx.strokeStyle = '#CCC';
      ctx.lineWidth = 3;
      ctx.setLineDash([4, 4]);
      ctx.beginPath();
      ctx.moveTo(fx + fragW - primerW, fragY);
      ctx.lineTo(fx + fragW, fragY);
      ctx.stroke();
      ctx.setLineDash([]);
    } else {
      // Ligated - fully green
      ctx.strokeStyle = colors.ligated;
      ctx.lineWidth = 5;
      ctx.beginPath();
      ctx.moveTo(fx, fragY);
      ctx.lineTo(fx + fragW, fragY);
      ctx.stroke();
    }

    // Base pairs to template
    for (let bp = 0; bp < 6; bp++) {
      const bx = fx + bp * (fragW / 6) + fragW / 12;
      ctx.strokeStyle = 'rgba(150,150,150,0.5)';
      ctx.lineWidth = 1;
      ctx.setLineDash([3, 3]);
      ctx.beginPath();
      ctx.moveTo(bx, tempY);
      ctx.lineTo(bx, fragY);
      ctx.stroke();
      ctx.setLineDash([]);
    }

    // Fragment label
    ctx.fillStyle = '#333';
    ctx.font = `${Math.max(8, w * 0.024)}px Arial`;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'alphabetic';
    ctx.fillText(frag.label.split('\n')[0], fx + fragW * 0.5, fragY + 22);
    ctx.fillText(frag.label.split('\n')[1], fx + fragW * 0.5, fragY + 36);
  });

  // Ligase icon
  const ligX = w * 0.32, ligY = fragY;
  ctx.fillStyle = '#8E44AD';
  ctx.beginPath();
  ctx.arc(ligX, ligY, w * 0.04, 0, Math.PI * 2);
  ctx.fill();
  ctx.fillStyle = '#fff';
  ctx.font = `bold ${Math.max(8, w * 0.022)}px Arial`;
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText('Ligase', ligX, ligY);

  // Direction
  ctx.fillStyle = '#333';
  ctx.font = `bold ${Math.max(10, w * 0.03)}px Arial`;
  ctx.textAlign = 'center';
  ctx.textBaseline = 'alphabetic';
  ctx.fillText("← 5'", w * 0.08, fragY + 55);
  ctx.fillText("5' →", w * 0.92, fragY + 55);

  ctx.fillStyle = '#222';
  ctx.font = `bold ${Math.max(12, w * 0.04)}px Arial`;
  ctx.fillText('Okazaki Fragments', cx, 22);
}

static drawPrimerRemoval(ctx, width, height, componentFocus) {
  const w = width, h = height;
  const cx = w * 0.5;

  const stageY = [h * 0.18, h * 0.42, h * 0.66, h * 0.88];
  const labels = ['1. Okazaki + RNA Primer', '2. RNase H Removes Primer', '3. Pol I Fills Gap', '4. Ligase Seals Nick'];

  const colors = {
    template: '#4A90E2', primer: '#F39C12',
    okazaki: '#E74C3C', filled: '#2ECC71',
    enzyme: '#9B59B6'
  };

  const strandLen = w * 0.72;
  const primerLen = w * 0.12;
  const startX = w * 0.14;

  stageY.forEach((sy, stage) => {
    // Template
    ctx.strokeStyle = colors.template;
    ctx.lineWidth = 4;
    ctx.beginPath();
    ctx.moveTo(startX, sy - 10);
    ctx.lineTo(startX + strandLen, sy - 10);
    ctx.stroke();

    if (stage === 0) {
      // RNA primer
      ctx.strokeStyle = colors.primer;
      ctx.lineWidth = 4;
      ctx.beginPath();
      ctx.moveTo(startX + strandLen - primerLen, sy + 10);
      ctx.lineTo(startX + strandLen, sy + 10);
      ctx.stroke();
      // Okazaki DNA
      ctx.strokeStyle = colors.okazaki;
      ctx.lineWidth = 4;
      ctx.beginPath();
      ctx.moveTo(startX, sy + 10);
      ctx.lineTo(startX + strandLen - primerLen, sy + 10);
      ctx.stroke();
    } else if (stage === 1) {
      // RNase H cleaving
      ctx.strokeStyle = colors.okazaki;
      ctx.lineWidth = 4;
      ctx.beginPath();
      ctx.moveTo(startX, sy + 10);
      ctx.lineTo(startX + strandLen - primerLen, sy + 10);
      ctx.stroke();
      // Fragmented primer
      for (let i = 0; i < 4; i++) {
        ctx.fillStyle = colors.primer;
        ctx.beginPath();
        ctx.arc(startX + strandLen - primerLen * 0.9 + i * w * 0.03, sy + 5 - i * 5, 5, 0, Math.PI * 2);
        ctx.fill();
      }
      // RNase H enzyme
      ctx.fillStyle = colors.enzyme;
      ctx.beginPath();
      ctx.arc(startX + strandLen - primerLen * 0.5, sy - 22, w * 0.04, 0, Math.PI * 2);
      ctx.fill();
      ctx.fillStyle = '#fff';
      ctx.font = `bold ${Math.max(7, w * 0.02)}px Arial`;
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText('RNase H', startX + strandLen - primerLen * 0.5, sy - 22);
    } else if (stage === 2) {
      // Old okazaki
      ctx.strokeStyle = colors.okazaki;
      ctx.lineWidth = 4;
      ctx.beginPath();
      ctx.moveTo(startX, sy + 10);
      ctx.lineTo(startX + strandLen - primerLen, sy + 10);
      ctx.stroke();
      // Gap being filled by Pol I
      ctx.strokeStyle = colors.filled;
      ctx.lineWidth = 4;
      ctx.setLineDash([5, 3]);
      ctx.beginPath();
      ctx.moveTo(startX + strandLen - primerLen, sy + 10);
      ctx.lineTo(startX + strandLen, sy + 10);
      ctx.stroke();
      ctx.setLineDash([]);
      // Nick
      ctx.strokeStyle = '#E74C3C';
      ctx.lineWidth = 3;
      ctx.beginPath();
      ctx.moveTo(startX + strandLen - primerLen * 0.05, sy);
      ctx.lineTo(startX + strandLen - primerLen * 0.05, sy + 20);
      ctx.stroke();
      // Pol I
      ctx.fillStyle = '#E67E22';
      ctx.beginPath();
      ctx.arc(startX + strandLen - primerLen * 0.5, sy - 22, w * 0.04, 0, Math.PI * 2);
      ctx.fill();
      ctx.fillStyle = '#fff';
      ctx.font = `bold ${Math.max(7, w * 0.02)}px Arial`;
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText('Pol I', startX + strandLen - primerLen * 0.5, sy - 22);
    } else {
      // Fully filled and sealed
      ctx.strokeStyle = colors.filled;
      ctx.lineWidth = 4;
      ctx.beginPath();
      ctx.moveTo(startX, sy + 10);
      ctx.lineTo(startX + strandLen, sy + 10);
      ctx.stroke();
      // Ligase
      ctx.fillStyle = '#8E44AD';
      ctx.beginPath();
      ctx.arc(startX + strandLen - primerLen * 0.5, sy - 22, w * 0.035, 0, Math.PI * 2);
      ctx.fill();
      ctx.fillStyle = '#fff';
      ctx.font = `bold ${Math.max(7, w * 0.02)}px Arial`;
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText('Ligase', startX + strandLen - primerLen * 0.5, sy - 22);
    }

    // Stage label
    ctx.fillStyle = '#333';
    ctx.font = `${Math.max(9, w * 0.028)}px Arial`;
    ctx.textAlign = 'left';
    ctx.textBaseline = 'alphabetic';
    ctx.fillText(labels[stage], startX, sy - 20);
  });

  ctx.fillStyle = '#222';
  ctx.font = `bold ${Math.max(12, w * 0.04)}px Arial`;
  ctx.textAlign = 'center';
  ctx.fillText('Primer Removal', cx, 14);
}

static drawDNAMethylation(ctx, width, height, componentFocus) {
  const w = width, h = height;
  const cx = w * 0.5, cy = h * 0.48;

  const colors = {
    backbone: '#4A90E2', methyl: '#E74C3C',
    unmethyl: '#BDC3C7', cpg: '#2ECC71',
    label: '#333'
  };

  // CpG dinucleotide sequence
  const sequence = ['C', 'G', 'C', 'G', 'A', 'T', 'C', 'G', 'C', 'G'];
  const methylated = [true, true, false, false, false, false, true, true, true, true];
  const nBases = sequence.length;
  const bw = w * 0.08;
  const startX = w * 0.06;

  // Draw double-stranded DNA
  for (let strand = 0; strand < 2; strand++) {
    ctx.strokeStyle = colors.backbone;
    ctx.lineWidth = 4;
    const sy = cy + (strand === 0 ? -20 : 20);
    ctx.beginPath();
    ctx.moveTo(startX - 5, sy);
    ctx.lineTo(startX + nBases * bw + 5, sy);
    ctx.stroke();
  }

  // Bases and methylation
  sequence.forEach((base, i) => {
    const bx = startX + i * bw + bw * 0.5;
    const isCpG = base === 'C' && sequence[i + 1] === 'G';

    // Highlight CpG
    if (isCpG) {
      ctx.fillStyle = 'rgba(46,204,113,0.15)';
      ctx.beginPath();
      ctx.roundRect(bx - bw * 0.4, cy - 45, bw * 1.8, 90, 4);
      ctx.fill();
    }

    // Base pair line
    ctx.strokeStyle = 'rgba(100,100,100,0.4)';
    ctx.lineWidth = 2;
    ctx.setLineDash([3, 3]);
    ctx.beginPath();
    ctx.moveTo(bx, cy - 20);
    ctx.lineTo(bx, cy + 20);
    ctx.stroke();
    ctx.setLineDash([]);

    // Upper base
    const baseColor = base === 'C' ? '#FF6B6B' : base === 'G' ? '#FFD93D' : base === 'A' ? '#4ECDC4' : '#95E1D3';
    ctx.fillStyle = baseColor;
    ctx.beginPath();
    ctx.arc(bx, cy - 20, 9, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = '#333';
    ctx.font = `bold ${Math.max(7, w * 0.022)}px Arial`;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(base, bx, cy - 20);

    // Complementary base
    const comp = base === 'A' ? 'T' : base === 'T' ? 'A' : base === 'G' ? 'C' : 'G';
    const compColor = comp === 'C' ? '#FF6B6B' : comp === 'G' ? '#FFD93D' : comp === 'A' ? '#4ECDC4' : '#95E1D3';
    ctx.fillStyle = compColor;
    ctx.beginPath();
    ctx.arc(bx, cy + 20, 9, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = '#333';
    ctx.fillText(comp, bx, cy + 20);

    // Methyl group (CH3)
    if (base === 'C' && methylated[i]) {
      ctx.fillStyle = colors.methyl;
      ctx.beginPath();
      ctx.arc(bx, cy - 44, 10, 0, Math.PI * 2);
      ctx.fill();
      ctx.strokeStyle = '#C0392B';
      ctx.lineWidth = 1;
      ctx.stroke();
      // Connector
      ctx.strokeStyle = colors.methyl;
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(bx, cy - 30);
      ctx.lineTo(bx, cy - 34);
      ctx.stroke();
      ctx.fillStyle = '#fff';
      ctx.font = `bold ${Math.max(6, w * 0.018)}px Arial`;
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText('CH₃', bx, cy - 44);
    }

    // CpG label
    if (isCpG) {
      ctx.fillStyle = colors.cpg;
      ctx.font = `bold ${Math.max(8, w * 0.024)}px Arial`;
      ctx.textAlign = 'center';
      ctx.textBaseline = 'alphabetic';
      ctx.fillText('CpG', bx + bw * 0.5, cy + 50);
    }
  });

  // Legend
  const legX = w * 0.05, legY = h * 0.85;
  [[colors.methyl, 'Methylated C'], [colors.unmethyl, 'Unmethylated C'], [colors.cpg, 'CpG Site']].forEach(([c, lbl], i) => {
    ctx.fillStyle = c;
    ctx.beginPath();
    ctx.arc(legX + i * w * 0.3, legY, 7, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = '#333';
    ctx.font = `${Math.max(9, w * 0.028)}px Arial`;
    ctx.textAlign = 'left';
    ctx.textBaseline = 'middle';
    ctx.fillText(lbl, legX + i * w * 0.3 + 12, legY);
  });

  ctx.fillStyle = '#222';
  ctx.font = `bold ${Math.max(12, w * 0.04)}px Arial`;
  ctx.textAlign = 'center';
  ctx.textBaseline = 'alphabetic';
  ctx.fillText('DNA Methylation', cx, 22);
}

static drawDNADamage(ctx, width, height, componentFocus) {
  const w = width, h = height;
  const cx = w * 0.5;

  const damageTypes = [
    { name: 'Pyrimidine Dimer', y: h * 0.18, color: '#E74C3C', desc: 'UV-induced T-T crosslink' },
    { name: 'Depurination', y: h * 0.38, color: '#E67E22', desc: 'Loss of purine base' },
    { name: 'Oxidative (8-oxoG)', y: h * 0.58, color: '#9B59B6', desc: 'ROS modification' },
    { name: 'Double-Strand Break', y: h * 0.78, color: '#E74C3C', desc: 'Ionizing radiation' }
  ];

  const strandLen = w * 0.6;
  const sx = w * 0.2;

  damageTypes.forEach((dt, idx) => {
    const sy = dt.y;

    // Normal DNA left portion
    for (let s = 0; s < 2; s++) {
      ctx.strokeStyle = '#4A90E2';
      ctx.lineWidth = 4;
      ctx.beginPath();
      ctx.moveTo(sx, sy + s * 12 - 6);
      ctx.lineTo(sx + strandLen * 0.35, sy + s * 12 - 6);
      ctx.stroke();
    }

    // Damage zone
    const dmgX = sx + strandLen * 0.38;
    const dmgW = strandLen * 0.24;

    if (dt.name === 'Double-Strand Break') {
      // Full break - gap in both strands
      for (let s = 0; s < 2; s++) {
        ctx.strokeStyle = dt.color;
        ctx.lineWidth = 4;
        ctx.beginPath();
        ctx.moveTo(sx, sy + s * 12 - 6);
        ctx.lineTo(dmgX, sy + s * 12 - 6);
        ctx.stroke();
        ctx.beginPath();
        ctx.moveTo(dmgX + dmgW, sy + s * 12 - 6);
        ctx.lineTo(sx + strandLen, sy + s * 12 - 6);
        ctx.stroke();
      }
      // Break indicator
      ctx.strokeStyle = dt.color;
      ctx.lineWidth = 3;
      ctx.setLineDash([4, 4]);
      for (let s = 0; s < 2; s++) {
        ctx.beginPath();
        ctx.moveTo(dmgX + dmgW * 0.5 - 5, sy + s * 12 - 6);
        ctx.lineTo(dmgX + dmgW * 0.5 + 5, sy + s * 12 - 6);
        ctx.stroke();
      }
      ctx.setLineDash([]);
      // Lightning bolt
      ctx.strokeStyle = '#E74C3C';
      ctx.lineWidth = 3;
      ctx.beginPath();
      ctx.moveTo(dmgX + dmgW * 0.5, sy - 16);
      ctx.lineTo(dmgX + dmgW * 0.5 - 6, sy);
      ctx.lineTo(dmgX + dmgW * 0.5 + 4, sy);
      ctx.lineTo(dmgX + dmgW * 0.5 - 4, sy + 16);
      ctx.stroke();
    } else if (dt.name === 'Pyrimidine Dimer') {
      for (let s = 0; s < 2; s++) {
        ctx.strokeStyle = '#4A90E2';
        ctx.lineWidth = 4;
        ctx.beginPath();
        ctx.moveTo(dmgX, sy + s * 12 - 6);
        ctx.lineTo(sx + strandLen, sy + s * 12 - 6);
        ctx.stroke();
      }
      // Distortion bulge
      ctx.strokeStyle = dt.color;
      ctx.lineWidth = 3;
      ctx.beginPath();
      ctx.arc(dmgX + dmgW * 0.5, sy - 6, dmgW * 0.4, Math.PI, 0);
      ctx.stroke();
      // Crosslink
      ctx.fillStyle = dt.color;
      for (let t = 0; t < 2; t++) {
        ctx.beginPath();
        ctx.arc(dmgX + dmgW * 0.3 + t * dmgW * 0.4, sy - 6, 6, 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.strokeStyle = dt.color;
      ctx.lineWidth = 3;
      ctx.beginPath();
      ctx.moveTo(dmgX + dmgW * 0.3, sy - 6);
      ctx.lineTo(dmgX + dmgW * 0.7, sy - 6);
      ctx.stroke();
    } else if (dt.name === 'Depurination') {
      for (let s = 0; s < 2; s++) {
        ctx.strokeStyle = '#4A90E2';
        ctx.lineWidth = 4;
        ctx.beginPath();
        ctx.moveTo(dmgX, sy + s * 12 - 6);
        ctx.lineTo(sx + strandLen, sy + s * 12 - 6);
        ctx.stroke();
      }
      // Missing base (empty socket)
      ctx.strokeStyle = dt.color;
      ctx.lineWidth = 2;
      ctx.setLineDash([3, 3]);
      ctx.beginPath();
      ctx.arc(dmgX + dmgW * 0.5, sy - 6, 10, 0, Math.PI * 2);
      ctx.stroke();
      ctx.setLineDash([]);
      ctx.fillStyle = dt.color;
      ctx.font = `bold ${Math.max(12, w * 0.04)}px Arial`;
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText('?', dmgX + dmgW * 0.5, sy - 6);
    } else {
      // Oxidative
      for (let s = 0; s < 2; s++) {
        ctx.strokeStyle = '#4A90E2';
        ctx.lineWidth = 4;
        ctx.beginPath();
        ctx.moveTo(dmgX, sy + s * 12 - 6);
        ctx.lineTo(sx + strandLen, sy + s * 12 - 6);
        ctx.stroke();
      }
      ctx.fillStyle = dt.color;
      ctx.beginPath();
      ctx.arc(dmgX + dmgW * 0.5, sy - 6, 10, 0, Math.PI * 2);
      ctx.fill();
      ctx.fillStyle = '#fff';
      ctx.font = `bold ${Math.max(7, w * 0.02)}px Arial`;
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText('8G', dmgX + dmgW * 0.5, sy - 6);
    }

    // Label
    ctx.fillStyle = dt.color;
    ctx.font = `bold ${Math.max(9, w * 0.028)}px Arial`;
    ctx.textAlign = 'left';
    ctx.textBaseline = 'alphabetic';
    ctx.fillText(dt.name, sx, sy - 18);
    ctx.fillStyle = '#666';
    ctx.font = `${Math.max(8, w * 0.022)}px Arial`;
    ctx.fillText(dt.desc, sx, sy + 24);
  });

  ctx.fillStyle = '#222';
  ctx.font = `bold ${Math.max(12, w * 0.04)}px Arial`;
  ctx.textAlign = 'center';
  ctx.fillText('DNA Damage Types', cx, 14);
}

static drawDNARepair(ctx, width, height, componentFocus) {
  const w = width, h = height;
  const cx = w * 0.5;

  const pathways = [
    { name: 'BER', full: 'Base Excision Repair', y: h * 0.2, color: '#27AE60', enzymes: ['DNA Glycosylase', 'APE1', 'Pol β', 'Ligase'] },
    { name: 'NER', full: 'Nucleotide Excision Repair', y: h * 0.45, color: '#2980B9', enzymes: ['XPC', 'TFIIH', 'XPG/XPF', 'Pol δ'] },
    { name: 'NHEJ', full: 'Non-Homologous End Joining', y: h * 0.7, color: '#E74C3C', enzymes: ['Ku70/80', 'DNA-PKcs', 'Ligase IV'] },
    { name: 'HR', full: 'Homologous Recombination', y: h * 0.9, color: '#8E44AD', enzymes: ['MRN', 'RPA', 'RAD51', 'Pol'] }
  ];

  pathways.forEach(pw => {
    const sy = pw.y;
    // Pathway bar
    const barGrad = ctx.createLinearGradient(w * 0.04, sy, w * 0.96, sy);
    barGrad.addColorStop(0, pw.color + '33');
    barGrad.addColorStop(0.5, pw.color + '55');
    barGrad.addColorStop(1, pw.color + '22');
    ctx.fillStyle = barGrad;
    ctx.strokeStyle = pw.color;
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.roundRect(w * 0.04, sy - h * 0.08, w * 0.92, h * 0.14, 8);
    ctx.fill();
    ctx.stroke();

    // Abbreviation badge
    ctx.fillStyle = pw.color;
    ctx.beginPath();
    ctx.roundRect(w * 0.05, sy - h * 0.06, w * 0.08, h * 0.1, 5);
    ctx.fill();
    ctx.fillStyle = '#fff';
    ctx.font = `bold ${Math.max(9, w * 0.028)}px Arial`;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(pw.name, w * 0.09, sy);

    // Enzyme chain
    pw.enzymes.forEach((enzyme, i) => {
      const ex = w * 0.18 + i * w * 0.19;
      ctx.fillStyle = pw.color + 'AA';
      ctx.strokeStyle = pw.color;
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.roundRect(ex, sy - h * 0.04, w * 0.17, h * 0.07, 4);
      ctx.fill();
      ctx.stroke();
      ctx.fillStyle = '#333';
      ctx.font = `${Math.max(7, w * 0.022)}px Arial`;
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText(enzyme, ex + w * 0.085, sy);

      // Arrow between enzymes
      if (i < pw.enzymes.length - 1) {
        ctx.strokeStyle = pw.color;
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(ex + w * 0.17, sy);
        ctx.lineTo(ex + w * 0.19 - 2, sy);
        ctx.stroke();
        ctx.fillStyle = pw.color;
        ctx.beginPath();
        ctx.moveTo(ex + w * 0.19, sy);
        ctx.lineTo(ex + w * 0.185, sy - 4);
        ctx.lineTo(ex + w * 0.185, sy + 4);
        ctx.closePath();
        ctx.fill();
      }
    });

    // Full name
    ctx.fillStyle = '#666';
    ctx.font = `italic ${Math.max(8, w * 0.022)}px Arial`;
    ctx.textAlign = 'left';
    ctx.textBaseline = 'alphabetic';
    ctx.fillText(pw.full, w * 0.05, sy - h * 0.07);
  });

  ctx.fillStyle = '#222';
  ctx.font = `bold ${Math.max(12, w * 0.04)}px Arial`;
  ctx.textAlign = 'center';
  ctx.fillText('DNA Repair Pathways', cx, 14);
}

static drawHelicaseEnzyme(ctx, width, height, componentFocus) {
  const w = width, h = height;
  const cx = w * 0.5, cy = h * 0.5;

  // Hexameric ring structure
  const ringR = w * 0.22;
  const nSubunits = 6;
  const colors = ['#3498DB', '#2980B9', '#1F618D', '#2471A3', '#2E86C1', '#1A5276'];

  // Draw DNA coming through center
  for (let s = 0; s < 2; s++) {
    ctx.strokeStyle = s === 0 ? '#4A90E2' : '#E24A4A';
    ctx.lineWidth = 5;
    ctx.beginPath();
    ctx.moveTo(cx + s * 8 - 4, h * 0.05);
    ctx.lineTo(cx + s * 8 - 4, h * 0.95);
    ctx.stroke();
  }

  // Ring subunits
  for (let i = 0; i < nSubunits; i++) {
    const angle = (i / nSubunits) * Math.PI * 2 - Math.PI * 0.5;
    const sx = cx + Math.cos(angle) * ringR;
    const sy = cy + Math.sin(angle) * ringR;

    const subGrad = ctx.createRadialGradient(sx - 5, sy - 5, 3, sx, sy, w * 0.1);
    subGrad.addColorStop(0, '#85C1E9');
    subGrad.addColorStop(1, colors[i]);
    ctx.fillStyle = subGrad;
    ctx.strokeStyle = '#1A5276';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.arc(sx, sy, w * 0.1, 0, Math.PI * 2);
    ctx.fill();
    ctx.stroke();

    ctx.fillStyle = '#fff';
    ctx.font = `bold ${Math.max(8, w * 0.025)}px Arial`;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(`${i + 1}`, sx, sy);
  }

  // Central channel
  const chanGrad = ctx.createRadialGradient(cx, cy, 2, cx, cy, w * 0.1);
  chanGrad.addColorStop(0, 'rgba(255,255,255,0.9)');
  chanGrad.addColorStop(1, 'rgba(200,220,255,0.5)');
  ctx.fillStyle = chanGrad;
  ctx.beginPath();
  ctx.arc(cx, cy, w * 0.1, 0, Math.PI * 2);
  ctx.fill();
  ctx.strokeStyle = '#4A90E2';
  ctx.lineWidth = 2;
  ctx.stroke();

  // ATP hydrolysis arrows
  for (let i = 0; i < nSubunits; i++) {
    const angle = (i / nSubunits) * Math.PI * 2 - Math.PI * 0.5;
    const ax = cx + Math.cos(angle) * (ringR + w * 0.14);
    const ay = cy + Math.sin(angle) * (ringR + h * 0.1);
    ctx.fillStyle = '#F39C12';
    ctx.font = `${Math.max(7, w * 0.02)}px Arial`;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText('ATP', ax, ay);
  }

  // Unwinding arrows
  ctx.strokeStyle = '#2ECC71';
  ctx.lineWidth = 3;
  [[-1, 0.15], [1, 0.85]].forEach(([dir, yt]) => {
    const ay = h * yt;
    ctx.beginPath();
    ctx.moveTo(cx - 15, ay);
    ctx.lineTo(cx - 30, ay + dir * 20);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(cx + 15, ay);
    ctx.lineTo(cx + 30, ay + dir * 20);
    ctx.stroke();
  });

  ctx.fillStyle = '#333';
  ctx.font = `${Math.max(9, w * 0.028)}px Arial`;
  ctx.textAlign = 'center';
  ctx.textBaseline = 'alphabetic';
  ctx.fillText('Central DNA channel', cx, cy + w * 0.12 + 14);

  ctx.fillStyle = '#222';
  ctx.font = `bold ${Math.max(12, w * 0.04)}px Arial`;
  ctx.fillText('Helicase (Hexameric)', cx, 22);
}

static drawDNAPolymeraseI(ctx, width, height, componentFocus) {
  const w = width, h = height;
  const cx = w * 0.5, cy = h * 0.5;

  // Three domains: 5'→3' polymerase, 3'→5' exonuclease, 5'→3' exonuclease
  const domains = [
    { name: "5'→3'\nPolymerase", x: cx, y: cy, rx: w * 0.2, ry: h * 0.2, color: '#3498DB', desc: 'Synthesis' },
    { name: "3'→5'\nExonuclease", x: cx - w * 0.28, y: cy - h * 0.08, rx: w * 0.12, ry: h * 0.12, color: '#E74C3C', desc: 'Proofreading' },
    { name: "5'→3'\nExonuclease", x: cx + w * 0.3, y: cy + h * 0.08, rx: w * 0.12, ry: h * 0.12, color: '#27AE60', desc: 'Nick translation' }
  ];

  // DNA substrate
  for (let s = 0; s < 2; s++) {
    ctx.strokeStyle = s === 0 ? '#4A90E2' : '#E24A4A';
    ctx.lineWidth = 4;
    const sy = cy + s * 14 - 7;
    ctx.beginPath();
    ctx.moveTo(w * 0.05, sy);
    ctx.lineTo(w * 0.95, sy);
    ctx.stroke();
  }

  // Domains
  domains.forEach(d => {
    const g = ctx.createRadialGradient(d.x - d.rx * 0.3, d.y - d.ry * 0.3, 5, d.x, d.y, d.rx);
    g.addColorStop(0, d.color + 'CC');
    g.addColorStop(1, d.color + '66');
    ctx.fillStyle = g;
    ctx.strokeStyle = d.color;
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.ellipse(d.x, d.y, d.rx, d.ry, 0, 0, Math.PI * 2);
    ctx.fill();
    ctx.stroke();

    d.name.split('\n').forEach((line, i) => {
      ctx.fillStyle = '#fff';
      ctx.font = `bold ${Math.max(8, w * 0.025)}px Arial`;
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText(line, d.x, d.y + (i - 0.5) * 14);
    });

    ctx.fillStyle = '#333';
    ctx.font = `italic ${Math.max(8, w * 0.022)}px Arial`;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'alphabetic';
    ctx.fillText(d.desc, d.x, d.y + d.ry + 14);
  });

  // Klenow fragment boundary
  ctx.strokeStyle = '#9B59B6';
  ctx.lineWidth = 2;
  ctx.setLineDash([6, 4]);
  ctx.beginPath();
  ctx.moveTo(cx - w * 0.14, h * 0.1);
  ctx.lineTo(cx - w * 0.14, h * 0.9);
  ctx.stroke();
  ctx.setLineDash([]);
  ctx.fillStyle = '#9B59B6';
  ctx.font = `${Math.max(8, w * 0.022)}px Arial`;
  ctx.textAlign = 'left';
  ctx.textBaseline = 'alphabetic';
  ctx.fillText('← Klenow Fragment', cx - w * 0.12, h * 0.12);

  ctx.fillStyle = '#222';
  ctx.font = `bold ${Math.max(12, w * 0.04)}px Arial`;
  ctx.textAlign = 'center';
  ctx.fillText('DNA Polymerase I', cx, 22);
}

static drawDNAPolymeraseIII(ctx, width, height, componentFocus) {
  const w = width, h = height;
  const cx = w * 0.5, cy = h * 0.5;

  // Core enzyme, β clamp, clamp loader
  const components = [
    { name: 'α (pol)', x: cx - w * 0.08, y: cy - h * 0.05, r: w * 0.09, color: '#3498DB', desc: '5\'→3\' polymerase' },
    { name: 'ε (exo)', x: cx + w * 0.08, y: cy - h * 0.05, r: w * 0.07, color: '#E74C3C', desc: '3\'→5\' proof' },
    { name: 'θ', x: cx, y: cy - h * 0.14, r: w * 0.045, color: '#E67E22', desc: 'θ subunit' }
  ];

  // β clamp (ring)
  const clampR = w * 0.28;
  ctx.strokeStyle = '#27AE60';
  ctx.lineWidth = 16;
  ctx.globalAlpha = 0.3;
  ctx.beginPath();
  ctx.arc(cx, cy + h * 0.12, clampR, 0, Math.PI * 2);
  ctx.stroke();
  ctx.globalAlpha = 1;
  ctx.strokeStyle = '#27AE60';
  ctx.lineWidth = 5;
  ctx.beginPath();
  ctx.arc(cx, cy + h * 0.12, clampR, 0, Math.PI * 2);
  ctx.stroke();
  ctx.fillStyle = '#27AE60';
  ctx.font = `bold ${Math.max(9, w * 0.028)}px Arial`;
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText('β Clamp', cx, cy + h * 0.12);

  // DNA through clamp
  for (let s = 0; s < 2; s++) {
    ctx.strokeStyle = s === 0 ? '#4A90E2' : '#E24A4A';
    ctx.lineWidth = 4;
    ctx.beginPath();
    ctx.moveTo(cx + s * 8 - 4, h * 0.05);
    ctx.lineTo(cx + s * 8 - 4, h * 0.95);
    ctx.stroke();
  }

  // Core subunits
  components.forEach(c => {
    const g = ctx.createRadialGradient(c.x - 5, c.y - 5, 2, c.x, c.y, c.r);
    g.addColorStop(0, c.color + 'CC');
    g.addColorStop(1, c.color + '88');
    ctx.fillStyle = g;
    ctx.strokeStyle = c.color;
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.arc(c.x, c.y, c.r, 0, Math.PI * 2);
    ctx.fill();
    ctx.stroke();
    ctx.fillStyle = '#fff';
    ctx.font = `bold ${Math.max(8, w * 0.025)}px Arial`;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(c.name, c.x, c.y);
    ctx.fillStyle = '#333';
    ctx.font = `${Math.max(7, w * 0.02)}px Arial`;
    ctx.textBaseline = 'alphabetic';
    ctx.fillText(c.desc, c.x, c.y + c.r + 12);
  });

  // γ complex (clamp loader)
  const gcx = cx + w * 0.32, gcy = cy - h * 0.12;
  ctx.fillStyle = '#8E44AD';
  ctx.strokeStyle = '#6C3483';
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.roundRect(gcx - w * 0.1, gcy - h * 0.06, w * 0.2, h * 0.12, 6);
  ctx.fill();
  ctx.stroke();
  ctx.fillStyle = '#fff';
  ctx.font = `bold ${Math.max(8, w * 0.025)}px Arial`;
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText('γ Complex', gcx, gcy - 7);
  ctx.fillText('(Clamp Loader)', gcx, gcy + 7);

  ctx.fillStyle = '#222';
  ctx.font = `bold ${Math.max(12, w * 0.04)}px Arial`;
  ctx.textAlign = 'center';
  ctx.textBaseline = 'alphabetic';
  ctx.fillText('DNA Polymerase III', cx, 22);
}

static drawDNALigaseEnzyme(ctx, width, height, componentFocus) {
  const w = width, h = height;
  const cx = w * 0.5, cy = h * 0.5;

  // DNA with nick
  const strandY = [cy - 14, cy + 14];
  const nickX = cx;

  strandY.forEach((sy, idx) => {
    if (idx === 0) {
      // Top strand with nick
      ctx.strokeStyle = '#4A90E2';
      ctx.lineWidth = 5;
      ctx.beginPath();
      ctx.moveTo(w * 0.05, sy);
      ctx.lineTo(nickX - 10, sy);
      ctx.stroke();
      ctx.beginPath();
      ctx.moveTo(nickX + 10, sy);
      ctx.lineTo(w * 0.95, sy);
      ctx.stroke();
    } else {
      ctx.strokeStyle = '#E24A4A';
      ctx.lineWidth = 5;
      ctx.beginPath();
      ctx.moveTo(w * 0.05, sy);
      ctx.lineTo(w * 0.95, sy);
      ctx.stroke();
    }
  });

  // Nick indicator
  ctx.strokeStyle = '#E74C3C';
  ctx.lineWidth = 3;
  ctx.beginPath();
  ctx.moveTo(nickX, strandY[0] - 12);
  ctx.lineTo(nickX, strandY[0] + 12);
  ctx.stroke();
  ctx.fillStyle = '#E74C3C';
  ctx.font = `bold ${Math.max(9, w * 0.028)}px Arial`;
  ctx.textAlign = 'center';
  ctx.textBaseline = 'alphabetic';
  ctx.fillText('Nick', nickX, strandY[0] - 16);

  // Ligase enzyme wrapping DNA
  const ligGrad = ctx.createRadialGradient(cx - 10, cy - 10, 5, cx, cy, w * 0.2);
  ligGrad.addColorStop(0, 'rgba(142,68,173,0.4)');
  ligGrad.addColorStop(1, 'rgba(142,68,173,0.15)');
  ctx.fillStyle = ligGrad;
  ctx.strokeStyle = '#8E44AD';
  ctx.lineWidth = 3;
  ctx.beginPath();
  ctx.ellipse(cx, cy, w * 0.22, h * 0.28, 0, 0, Math.PI * 2);
  ctx.fill();
  ctx.stroke();

  // Domains of ligase
  const domains = [
    { name: 'NTase', x: cx - w * 0.08, y: cy - h * 0.08, r: w * 0.07, color: '#8E44AD' },
    { name: 'OBD', x: cx + w * 0.08, y: cy - h * 0.08, r: w * 0.06, color: '#9B59B6' },
    { name: 'DBD', x: cx, y: cy + h * 0.1, r: w * 0.07, color: '#6C3483' }
  ];

  domains.forEach(d => {
    ctx.fillStyle = d.color;
    ctx.beginPath();
    ctx.arc(d.x, d.y, d.r, 0, Math.PI * 2);
    ctx.fill();
    ctx.strokeStyle = '#4A235A';
    ctx.lineWidth = 1;
    ctx.stroke();
    ctx.fillStyle = '#fff';
    ctx.font = `bold ${Math.max(8, w * 0.024)}px Arial`;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(d.name, d.x, d.y);
  });

  // AMP cofactor
  ctx.fillStyle = '#F39C12';
  ctx.beginPath();
  ctx.arc(cx + w * 0.16, cy - h * 0.06, w * 0.04, 0, Math.PI * 2);
  ctx.fill();
  ctx.fillStyle = '#fff';
  ctx.font = `bold ${Math.max(7, w * 0.022)}px Arial`;
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText('AMP', cx + w * 0.16, cy - h * 0.06);

  // Reaction arrow showing sealing
  ctx.strokeStyle = '#27AE60';
  ctx.lineWidth = 3;
  ctx.beginPath();
  ctx.moveTo(cx - 12, strandY[0] + 24);
  ctx.lineTo(cx - 12, strandY[0] + 50);
  ctx.stroke();
  ctx.fillStyle = '#27AE60';
  ctx.beginPath();
  ctx.moveTo(cx - 12, strandY[0] + 50);
  ctx.lineTo(cx - 18, strandY[0] + 42);
  ctx.lineTo(cx - 6, strandY[0] + 42);
  ctx.closePath();
  ctx.fill();

  // Sealed product
  ctx.strokeStyle = '#27AE60';
  ctx.lineWidth = 5;
  const sealY = strandY[0] + 68;
  ctx.beginPath();
  ctx.moveTo(cx - w * 0.25, sealY);
  ctx.lineTo(cx + w * 0.25, sealY);
  ctx.stroke();
  ctx.fillStyle = '#27AE60';
  ctx.font = `${Math.max(9, w * 0.028)}px Arial`;
  ctx.textAlign = 'center';
  ctx.textBaseline = 'alphabetic';
  ctx.fillText('Sealed strand', cx, sealY - 8);

  ctx.fillStyle = '#222';
  ctx.font = `bold ${Math.max(12, w * 0.04)}px Arial`;
  ctx.fillText('DNA Ligase', cx, 22);
}

static drawPrimaseEnzyme(ctx, width, height, componentFocus) {
  const w = width, h = height;
  const cx = w * 0.5, cy = h * 0.48;

  // Template ssDNA
  ctx.strokeStyle = '#4A90E2';
  ctx.lineWidth = 5;
  ctx.beginPath();
  ctx.moveTo(w * 0.05, cy + h * 0.15);
  ctx.lineTo(w * 0.95, cy + h * 0.15);
  ctx.stroke();
  ctx.fillStyle = '#4A90E2';
  ctx.font = `${Math.max(9, w * 0.028)}px Arial`;
  ctx.textAlign = 'left';
  ctx.textBaseline = 'alphabetic';
  ctx.fillText("3' Template", w * 0.05, cy + h * 0.15 - 8);

  // Primase enzyme
  const primGrad = ctx.createRadialGradient(cx - 10, cy - 10, 5, cx, cy, w * 0.18);
  primGrad.addColorStop(0, 'rgba(243,156,18,0.6)');
  primGrad.addColorStop(1, 'rgba(230,126,34,0.3)');
  ctx.fillStyle = primGrad;
  ctx.strokeStyle = '#E67E22';
  ctx.lineWidth = 3;
  ctx.beginPath();
  ctx.ellipse(cx, cy, w * 0.22, h * 0.25, 0, 0, Math.PI * 2);
  ctx.fill();
  ctx.stroke();

  // Zinc-binding domain
  ctx.fillStyle = '#E67E22';
  ctx.beginPath();
  ctx.arc(cx - w * 0.1, cy - h * 0.06, w * 0.07, 0, Math.PI * 2);
  ctx.fill();
  ctx.strokeStyle = '#D35400';
  ctx.lineWidth = 2;
  ctx.stroke();
  ctx.fillStyle = '#fff';
  ctx.font = `bold ${Math.max(8, w * 0.024)}px Arial`;
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText('ZBD', cx - w * 0.1, cy - h * 0.06);

  // RNA polymerase domain
  ctx.fillStyle = '#F39C12';
  ctx.beginPath();
  ctx.arc(cx + w * 0.1, cy - h * 0.06, w * 0.09, 0, Math.PI * 2);
  ctx.fill();
  ctx.strokeStyle = '#D35400';
  ctx.lineWidth = 2;
  ctx.stroke();
  ctx.fillStyle = '#fff';
  ctx.font = `bold ${Math.max(8, w * 0.024)}px Arial`;
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText('RNAP', cx + w * 0.1, cy - h * 0.06);

  // Growing RNA primer
  const primerStart = cx - w * 0.15;
  const nNTs = 6;
  const ntColors = ['#FF6B6B', '#FFD93D', '#4ECDC4', '#FF6B6B', '#FFD93D', '#95E1D3'];
  for (let i = 0; i < nNTs; i++) {
    const nx = primerStart + i * w * 0.05;
    ctx.fillStyle = ntColors[i];
    ctx.beginPath();
    ctx.arc(nx, cy + h * 0.06, 8, 0, Math.PI * 2);
    ctx.fill();
    if (i > 0) {
      ctx.strokeStyle = '#999';
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(nx - w * 0.05 + 8, cy + h * 0.06);
      ctx.lineTo(nx - 8, cy + h * 0.06);
      ctx.stroke();
    }
  }
  // Growing end indicator
  ctx.strokeStyle = '#E74C3C';
  ctx.lineWidth = 2;
  ctx.setLineDash([3, 3]);
  ctx.beginPath();
  ctx.moveTo(primerStart + nNTs * w * 0.05, cy + h * 0.06);
  ctx.lineTo(primerStart + (nNTs + 2) * w * 0.05, cy + h * 0.06);
  ctx.stroke();
  ctx.setLineDash([]);
  ctx.fillStyle = '#E74C3C';
  ctx.font = `${Math.max(9, w * 0.028)}px Arial`;
  ctx.textAlign = 'left';
  ctx.textBaseline = 'middle';
  ctx.fillText("→ 5' RNA Primer", primerStart, cy + h * 0.06 - 16);

  // NTPs entering
  ['ATP', 'GTP', 'CTP', 'UTP'].forEach((ntp, i) => {
    const nx = w * 0.08 + i * w * 0.12;
    const ny = cy - h * 0.28;
    ctx.fillStyle = ntColors[i];
    ctx.beginPath();
    ctx.arc(nx, ny, w * 0.04, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = '#333';
    ctx.font = `${Math.max(7, w * 0.02)}px Arial`;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(ntp, nx, ny);
    ctx.strokeStyle = ntColors[i];
    ctx.lineWidth = 1;
    ctx.setLineDash([3, 2]);
    ctx.beginPath();
    ctx.moveTo(nx, ny + w * 0.04);
    ctx.lineTo(cx, cy - h * 0.25);
    ctx.stroke();
    ctx.setLineDash([]);
  });

  ctx.fillStyle = '#222';
  ctx.font = `bold ${Math.max(12, w * 0.04)}px Arial`;
  ctx.textAlign = 'center';
  ctx.textBaseline = 'alphabetic';
  ctx.fillText('Primase', cx, 22);
}

static drawTopoisomeraseEnzyme(ctx, width, height, componentFocus) {
  const w = width, h = height;
  const cx = w * 0.5, cy = h * 0.5;

  // Two types: Topo I and Topo II
  const drawTopo = (centerX, type, label) => {
    const dnaY = h * 0.35;

    // DNA (supercoiled input)
    ctx.strokeStyle = '#4A90E2';
    ctx.lineWidth = 4;
    // Overwound helix
    for (let s = 0; s < 2; s++) {
      ctx.beginPath();
      for (let i = 0; i <= 40; i++) {
        const t = i / 40;
        const angle = t * Math.PI * 4 + s * Math.PI;
        const x = centerX - w * 0.12 + t * w * 0.24;
        const y = dnaY + Math.sin(angle) * h * 0.05;
        if (i === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }
      ctx.stroke();
    }

    // Enzyme body
    const eg = ctx.createRadialGradient(centerX, cy, 5, centerX, cy, w * 0.15);
    eg.addColorStop(0, type === 'I' ? 'rgba(52,152,219,0.6)' : 'rgba(231,76,60,0.6)');
    eg.addColorStop(1, type === 'I' ? 'rgba(41,128,185,0.3)' : 'rgba(192,57,43,0.3)');
    ctx.fillStyle = eg;
    ctx.strokeStyle = type === 'I' ? '#2980B9' : '#C0392B';
    ctx.lineWidth = 3;
    ctx.beginPath();
    if (type === 'I') {
      // Clamp shape
      ctx.arc(centerX, cy, w * 0.15, 0, Math.PI * 2);
    } else {
      // Gate shape for Topo II
      ctx.ellipse(centerX, cy, w * 0.18, h * 0.22, 0, 0, Math.PI * 2);
    }
    ctx.fill();
    ctx.stroke();

    // Gate/mechanism
    if (type === 'II') {
      ctx.strokeStyle = '#E74C3C';
      ctx.lineWidth = 3;
      ctx.beginPath();
      ctx.moveTo(centerX - w * 0.18, cy);
      ctx.lineTo(centerX + w * 0.18, cy);
      ctx.stroke();
      ctx.fillStyle = '#C0392B';
      ctx.font = `${Math.max(7, w * 0.022)}px Arial`;
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText('G-segment', centerX, cy + 12);
      ctx.fillText('T-segment', centerX, cy - 12);
    }

    // Relaxed DNA output
    ctx.strokeStyle = '#2ECC71';
    ctx.lineWidth = 4;
    const outY = h * 0.72;
    for (let s = 0; s < 2; s++) {
      ctx.beginPath();
      for (let i = 0; i <= 40; i++) {
        const t = i / 40;
        const angle = t * Math.PI * 2 + s * Math.PI;
        const x = centerX - w * 0.12 + t * w * 0.24;
        const y = outY + Math.sin(angle) * h * 0.04;
        if (i === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }
      ctx.stroke();
    }

    // Arrow
    ctx.strokeStyle = '#7F8C8D';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(centerX, dnaY + h * 0.07);
    ctx.lineTo(centerX, cy - h * 0.2);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(centerX, cy + h * 0.2);
    ctx.lineTo(centerX, outY - h * 0.05);
    ctx.stroke();

    // Label
    ctx.fillStyle = '#222';
    ctx.font = `bold ${Math.max(10, w * 0.03)}px Arial`;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'alphabetic';
    ctx.fillText(label, centerX, h - 8);
  };

  drawTopo(w * 0.28, 'I', 'Topoisomerase I');
  drawTopo(w * 0.72, 'II', 'Topoisomerase II');

  // Divider
  ctx.strokeStyle = '#DDD';
  ctx.lineWidth = 1;
  ctx.beginPath();
  ctx.moveTo(cx, h * 0.05);
  ctx.lineTo(cx, h * 0.95);
  ctx.stroke();

  // Labels
  ctx.fillStyle = '#333';
  ctx.font = `${Math.max(9, w * 0.026)}px Arial`;
  ctx.textAlign = 'center';
  ctx.textBaseline = 'alphabetic';
  ctx.fillStyle = '#4A90E2';
  ctx.fillText('Supercoiled in', w * 0.28, h * 0.3);
  ctx.fillStyle = '#2ECC71';
  ctx.fillText('Relaxed out', w * 0.28, h * 0.78);

  ctx.fillStyle = '#222';
  ctx.font = `bold ${Math.max(12, w * 0.04)}px Arial`;
  ctx.textAlign = 'center';
  ctx.fillText('Topoisomerases', cx, 22);
}

static drawRNAPolymeraseII(ctx, width, height, componentFocus) {
  const w = width, h = height;
  const cx = w * 0.5, cy = h * 0.5;

  // DNA template entering
  for (let s = 0; s < 2; s++) {
    ctx.strokeStyle = s === 0 ? '#4A90E2' : '#E24A4A';
    ctx.lineWidth = 4;
    ctx.beginPath();
    ctx.moveTo(w * 0.04, cy - h * 0.12 + s * 14 - 7);
    ctx.lineTo(cx - w * 0.2, cy - h * 0.12 + s * 14 - 7);
    ctx.stroke();
  }

  // Main Pol II body
  const mainGrad = ctx.createRadialGradient(cx - w * 0.06, cy - h * 0.06, 8, cx, cy, w * 0.3);
  mainGrad.addColorStop(0, 'rgba(142,68,173,0.7)');
  mainGrad.addColorStop(0.6, 'rgba(142,68,173,0.4)');
  mainGrad.addColorStop(1, 'rgba(142,68,173,0.15)');
  ctx.fillStyle = mainGrad;
  ctx.strokeStyle = '#8E44AD';
  ctx.lineWidth = 3;
  ctx.beginPath();
  ctx.ellipse(cx, cy, w * 0.32, h * 0.38, 0, 0, Math.PI * 2);
  ctx.fill();
  ctx.stroke();

  // Clamp domain
  ctx.fillStyle = 'rgba(155,89,182,0.7)';
  ctx.beginPath();
  ctx.ellipse(cx - w * 0.12, cy - h * 0.1, w * 0.1, h * 0.12, -0.3, 0, Math.PI * 2);
  ctx.fill();
  ctx.strokeStyle = '#6C3483'; ctx.lineWidth = 2; ctx.stroke();
  ctx.fillStyle = '#fff';
  ctx.font = `${Math.max(7, w * 0.02)}px Arial`;
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText('Clamp', cx - w * 0.12, cy - h * 0.1);

  // Active site with Mg2+
  ctx.fillStyle = '#F39C12';
  ctx.beginPath();
  ctx.arc(cx, cy + h * 0.05, w * 0.045, 0, Math.PI * 2);
  ctx.fill();
  ctx.fillStyle = '#fff';
  ctx.font = `bold ${Math.max(8, w * 0.024)}px Arial`;
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText('Mg²⁺', cx, cy + h * 0.05);

  // CTD (C-terminal domain) tail
  ctx.strokeStyle = '#E74C3C';
  ctx.lineWidth = 3;
  ctx.beginPath();
  ctx.moveTo(cx + w * 0.3, cy);
  for (let i = 0; i < 8; i++) {
    const tx = cx + w * 0.3 + i * w * 0.04;
    const ty = cy + Math.sin(i * 1.5) * h * 0.06;
    ctx.lineTo(tx, ty);
  }
  ctx.stroke();
  ctx.fillStyle = '#E74C3C';
  ctx.font = `${Math.max(7, w * 0.02)}px Arial`;
  ctx.textAlign = 'left';
  ctx.textBaseline = 'alphabetic';
  ctx.fillText('CTD (YSPTSPS)', cx + w * 0.3, cy - 8);

  // Template strand in active site
  ctx.strokeStyle = '#4A90E2';
  ctx.lineWidth = 3;
  ctx.beginPath();
  ctx.moveTo(cx - w * 0.18, cy - h * 0.12);
  ctx.bezierCurveTo(cx - w * 0.06, cy - h * 0.12, cx - w * 0.06, cy + h * 0.05, cx, cy + h * 0.05);
  ctx.stroke();

  // RNA product exiting
  ctx.strokeStyle = '#FF9F43';
  ctx.lineWidth = 4;
  ctx.setLineDash([5, 3]);
  ctx.beginPath();
  ctx.moveTo(cx + w * 0.1, cy - h * 0.15);
  ctx.lineTo(w * 0.95, cy - h * 0.35);
  ctx.stroke();
  ctx.setLineDash([]);
  ctx.fillStyle = '#FF9F43';
  ctx.font = `${Math.max(9, w * 0.028)}px Arial`;
  ctx.textAlign = 'left';
  ctx.textBaseline = 'alphabetic';
  ctx.fillText("RNA →", cx + w * 0.18, cy - h * 0.25);

  ctx.fillStyle = '#222';
  ctx.font = `bold ${Math.max(12, w * 0.04)}px Arial`;
  ctx.textAlign = 'center';
  ctx.fillText('RNA Polymerase II', cx, 22);
}

static drawRibonucleaseH(ctx, width, height, componentFocus) {
  const w = width, h = height;
  const cx = w * 0.5, cy = h * 0.45;

  // RNA:DNA hybrid
  const hyLen = w * 0.7, hyX = w * 0.15, hyY = cy;

  // RNA strand (orange)
  ctx.strokeStyle = '#FF9F43';
  ctx.lineWidth = 5;
  ctx.beginPath();
  ctx.moveTo(hyX, hyY - 10);
  ctx.lineTo(hyX + hyLen, hyY - 10);
  ctx.stroke();

  // DNA strand (blue)
  ctx.strokeStyle = '#4A90E2';
  ctx.lineWidth = 5;
  ctx.beginPath();
  ctx.moveTo(hyX, hyY + 10);
  ctx.lineTo(hyX + hyLen, hyY + 10);
  ctx.stroke();

  // Base pair connectors
  for (let i = 0; i < 10; i++) {
    const bx = hyX + (i / 9) * hyLen;
    ctx.strokeStyle = 'rgba(150,150,150,0.5)';
    ctx.lineWidth = 2;
    ctx.setLineDash([3, 3]);
    ctx.beginPath();
    ctx.moveTo(bx, hyY - 10);
    ctx.lineTo(bx, hyY + 10);
    ctx.stroke();
    ctx.setLineDash([]);
  }

  // RNase H enzyme
  const enzX = cx, enzY = cy - h * 0.22;
  const rGrad = ctx.createRadialGradient(enzX - 8, enzY - 8, 4, enzX, enzY, w * 0.14);
  rGrad.addColorStop(0, 'rgba(231,76,60,0.7)');
  rGrad.addColorStop(1, 'rgba(192,57,43,0.3)');
  ctx.fillStyle = rGrad;
  ctx.strokeStyle = '#C0392B';
  ctx.lineWidth = 3;
  ctx.beginPath();
  ctx.ellipse(enzX, enzY, w * 0.14, h * 0.14, 0, 0, Math.PI * 2);
  ctx.fill();
  ctx.stroke();
  ctx.fillStyle = '#fff';
  ctx.font = `bold ${Math.max(9, w * 0.028)}px Arial`;
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText('RNase H', enzX, enzY - 7);
  ctx.font = `${Math.max(7, w * 0.02)}px Arial`;
  ctx.fillText('(Active Site)', enzX, enzY + 7);

  // Mg2+ ions
  [-w * 0.04, w * 0.04].forEach(offset => {
    ctx.fillStyle = '#F39C12';
    ctx.beginPath();
    ctx.arc(enzX + offset, enzY + h * 0.04, w * 0.025, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = '#fff';
    ctx.font = `bold ${Math.max(6, w * 0.018)}px Arial`;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText('Mg', enzX + offset, enzY + h * 0.04);
  });

  // Cleavage of RNA
  const clvX1 = cx - w * 0.06, clvX2 = cx + w * 0.06;
  ctx.strokeStyle = '#E74C3C';
  ctx.lineWidth = 3;
  [[clvX1], [clvX2]].forEach(([clx]) => {
    ctx.beginPath();
    ctx.moveTo(clx, hyY - 22);
    ctx.lineTo(clx, hyY + 2);
    ctx.stroke();
    ctx.fillStyle = '#E74C3C';
    ctx.beginPath();
    ctx.moveTo(clx, hyY + 2);
    ctx.lineTo(clx - 5, hyY - 6);
    ctx.lineTo(clx + 5, hyY - 6);
    ctx.closePath();
    ctx.fill();
  });

  // Cleaved RNA fragments (degraded)
  ctx.fillStyle = 'rgba(255,159,67,0.5)';
  for (let i = 0; i < 5; i++) {
    ctx.beginPath();
    ctx.arc(cx - w * 0.1 + i * w * 0.05, cy + h * 0.2, 6, 0, Math.PI * 2);
    ctx.fill();
  }
  ctx.fillStyle = '#FF9F43';
  ctx.font = `${Math.max(8, w * 0.025)}px Arial`;
  ctx.textAlign = 'center';
  ctx.textBaseline = 'alphabetic';
  ctx.fillText('RNA fragments', cx, cy + h * 0.28);

  // DNA remains intact
  ctx.strokeStyle = '#4A90E2';
  ctx.lineWidth = 4;
  ctx.beginPath();
  ctx.moveTo(hyX, cy + h * 0.32);
  ctx.lineTo(hyX + hyLen, cy + h * 0.32);
  ctx.stroke();
  ctx.fillStyle = '#4A90E2';
  ctx.fillText('Intact DNA template', cx, cy + h * 0.35);

  // Labels
  ctx.fillStyle = '#FF9F43';
  ctx.font = `${Math.max(9, w * 0.028)}px Arial`;
  ctx.textAlign = 'left';
  ctx.textBaseline = 'alphabetic';
  ctx.fillText("RNA strand", hyX, hyY - 18);
  ctx.fillStyle = '#4A90E2';
  ctx.fillText("DNA strand", hyX, hyY + 22);

  ctx.fillStyle = '#222';
  ctx.font = `bold ${Math.max(12, w * 0.04)}px Arial`;
  ctx.textAlign = 'center';
  ctx.fillText('RNase H', cx, 22);
}

static drawExonuclease(ctx, width, height, componentFocus) {
  const w = width, h = height;
  const cx = w * 0.5, cy = h * 0.5;

  // Title 
  ctx.fillStyle = '#222';
  ctx.font = `bold ${Math.max(12, w * 0.04)}px Arial`;
  ctx.textAlign = 'center';
  ctx.textBaseline = 'alphabetic';
  ctx.fillText('Exonuclease', cx, 22);

  // 5'→3' exonuclease (left panel)
  const drawPanel = (panelX, dir, title, color) => {
    const dnaY = cy - h * 0.05;

    // DNA substrate
    ctx.strokeStyle = '#4A90E2';
    ctx.lineWidth = 5;
    ctx.beginPath();
    ctx.moveTo(panelX - w * 0.2, dnaY);
    ctx.lineTo(panelX + w * 0.2, dnaY);
    ctx.stroke();

    // End label
    ctx.fillStyle = '#333';
    ctx.font = `${Math.max(9, w * 0.028)}px Arial`;
    ctx.textAlign = dir > 0 ? 'right' : 'left';
    ctx.textBaseline = 'middle';
    ctx.fillText(dir > 0 ? "5'" : "3'", panelX - w * 0.2 + (dir < 0 ? -5 : 0), dnaY);
    ctx.textAlign = dir > 0 ? 'left' : 'right';
    ctx.fillText(dir > 0 ? "3'" : "5'", panelX + w * 0.2 + (dir > 0 ? 5 : 0), dnaY);

    // Enzyme
    ctx.fillStyle = color;
    ctx.strokeStyle = color === '#E74C3C' ? '#C0392B' : '#2471A3';
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.arc(panelX + dir * w * 0.12, dnaY - h * 0.12, w * 0.075, 0, Math.PI * 2);
    ctx.fill();
    ctx.stroke();
    ctx.fillStyle = '#fff';
    ctx.font = `bold ${Math.max(7, w * 0.022)}px Arial`;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText('Exo', panelX + dir * w * 0.12, dnaY - h * 0.12);

    // Cleaved nucleotides
    for (let i = 0; i < 4; i++) {
      const nx = panelX + dir * (w * 0.2 - i * w * 0.08);
      const ny = dnaY + h * 0.12 + i * h * 0.04;
      ctx.fillStyle = `rgba(231,76,60,${0.9 - i * 0.15})`;
      ctx.beginPath();
      ctx.arc(nx, ny, 7, 0, Math.PI * 2);
      ctx.fill();
    }
    ctx.fillStyle = '#E74C3C';
    ctx.font = `${Math.max(8, w * 0.022)}px Arial`;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'alphabetic';
    ctx.fillText('Released', panelX + dir * w * 0.1, dnaY + h * 0.28);
    ctx.fillText('nucleotides', panelX + dir * w * 0.1, dnaY + h * 0.36);

    // Arrow showing direction
    ctx.strokeStyle = color;
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.moveTo(panelX - w * 0.18 * dir, dnaY - h * 0.22);
    ctx.lineTo(panelX + w * 0.05 * dir, dnaY - h * 0.22);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(panelX + w * 0.05 * dir, dnaY - h * 0.22);
    ctx.lineTo(panelX + w * 0.05 * dir - dir * 8, dnaY - h * 0.22 - 5);
    ctx.lineTo(panelX + w * 0.05 * dir - dir * 8, dnaY - h * 0.22 + 5);
    ctx.closePath();
    ctx.fillStyle = color;
    ctx.fill();
    ctx.fillText(title, panelX, cy + h * 0.4);
  };

  drawPanel(w * 0.28, 1, "5'→3' Exonuclease", '#E74C3C');
  drawPanel(w * 0.72, -1, "3'→5' Exonuclease", '#3498DB');

  // Divider
  ctx.strokeStyle = '#EEE';
  ctx.lineWidth = 1;
  ctx.beginPath();
  ctx.moveTo(cx, h * 0.08);
  ctx.lineTo(cx, h * 0.92);
  ctx.stroke();
}

static drawEndonuclease(ctx, width, height, componentFocus) {
  const w = width, h = height;
  const cx = w * 0.5, cy = h * 0.48;

  // dsDNA substrate
  for (let s = 0; s < 2; s++) {
    ctx.strokeStyle = s === 0 ? '#4A90E2' : '#E24A4A';
    ctx.lineWidth = 5;
    ctx.beginPath();
    ctx.moveTo(w * 0.06, cy + s * 14 - 7);
    ctx.lineTo(w * 0.94, cy + s * 14 - 7);
    ctx.stroke();
  }

  // End labels
  ctx.fillStyle = '#333';
  ctx.font = `${Math.max(9, w * 0.028)}px Arial`;
  ctx.textAlign = 'right';
  ctx.textBaseline = 'middle';
  ctx.fillText("5'", w * 0.05, cy - 7);
  ctx.fillText("3'", w * 0.05, cy + 7);
  ctx.textAlign = 'left';
  ctx.fillText("3'", w * 0.95, cy - 7);
  ctx.fillText("5'", w * 0.95, cy + 7);

  // Endonuclease enzyme sitting on DNA
  const enzGrad = ctx.createRadialGradient(cx - 10, cy - h * 0.18, 5, cx, cy - h * 0.18, w * 0.16);
  enzGrad.addColorStop(0, 'rgba(39,174,96,0.7)');
  enzGrad.addColorStop(1, 'rgba(27,120,66,0.3)');
  ctx.fillStyle = enzGrad;
  ctx.strokeStyle = '#1E8449';
  ctx.lineWidth = 3;
  ctx.beginPath();
  ctx.ellipse(cx, cy - h * 0.18, w * 0.18, h * 0.16, 0, 0, Math.PI * 2);
  ctx.fill();
  ctx.stroke();
  ctx.fillStyle = '#fff';
  ctx.font = `bold ${Math.max(9, w * 0.028)}px Arial`;
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText('Endonuclease', cx, cy - h * 0.18);

  // Cleavage site markers (staggered cuts)
  const cutX = cx;
  const cut2X = cx + w * 0.05;

  ctx.strokeStyle = '#E74C3C';
  ctx.lineWidth = 4;
  ctx.beginPath();
  ctx.moveTo(cutX, cy - 18);
  ctx.lineTo(cutX, cy + 4);
  ctx.stroke();
  ctx.beginPath();
  ctx.moveTo(cut2X, cy + 4);
  ctx.lineTo(cut2X, cy + 22);
  ctx.stroke();

  // Gap visualization
  ctx.strokeStyle = 'rgba(100,100,100,0.3)';
  ctx.lineWidth = 2;
  ctx.setLineDash([3, 3]);
  ctx.beginPath();
  ctx.moveTo(cutX, cy - 7);
  ctx.lineTo(cut2X, cy + 7);
  ctx.stroke();
  ctx.setLineDash([]);

  // Sticky ends result
  const resY = cy + h * 0.28;
  // Left fragment
  ctx.strokeStyle = '#4A90E2';
  ctx.lineWidth = 4;
  ctx.beginPath();
  ctx.moveTo(w * 0.06, resY - 7);
  ctx.lineTo(cx + w * 0.03, resY - 7);
  ctx.stroke();
  ctx.strokeStyle = '#E24A4A';
  ctx.beginPath();
  ctx.moveTo(w * 0.06, resY + 7);
  ctx.lineTo(cx, resY + 7);
  ctx.stroke();

  // Right fragment
  ctx.strokeStyle = '#4A90E2';
  ctx.lineWidth = 4;
  ctx.beginPath();
  ctx.moveTo(cx + w * 0.06, resY - 7);
  ctx.lineTo(w * 0.94, resY - 7);
  ctx.stroke();
  ctx.strokeStyle = '#E24A4A';
  ctx.beginPath();
  ctx.moveTo(cx + w * 0.03, resY + 7);
  ctx.lineTo(w * 0.94, resY + 7);
  ctx.stroke();

  // Overhang labels
  ctx.fillStyle = '#E74C3C';
  ctx.font = `${Math.max(8, w * 0.024)}px Arial`;
  ctx.textAlign = 'center';
  ctx.textBaseline = 'alphabetic';
  ctx.fillText('5\' overhang (sticky ends)', cx, resY + 25);

  ctx.fillStyle = '#222';
  ctx.font = `bold ${Math.max(12, w * 0.04)}px Arial`;
  ctx.fillText('Endonuclease', cx, 22);
}

static drawRestrictionEnzyme(ctx, width, height, componentFocus) {
  const w = width, h = height;
  const cx = w * 0.5, cy = h * 0.48;

  // Recognition sequence display
  const sequence = ['G', 'A', 'A', 'T', 'T', 'C'];
  const complement = ['C', 'T', 'T', 'A', 'A', 'G'];
  const nBases = sequence.length;
  const bw = w * 0.1;
  const startX = cx - (nBases * bw) / 2;
  const topY = cy - h * 0.1;
  const botY = cy + h * 0.1;

  const baseColors = { G: '#FFD93D', A: '#FF6B6B', T: '#4ECDC4', C: '#95E1D3' };

  // DNA backbone lines
  for (let s = 0; s < 2; s++) {
    ctx.strokeStyle = s === 0 ? '#4A90E2' : '#E24A4A';
    ctx.lineWidth = 4;
    ctx.beginPath();
    ctx.moveTo(w * 0.04, s === 0 ? topY : botY);
    ctx.lineTo(w * 0.96, s === 0 ? topY : botY);
    ctx.stroke();
  }

  // Recognition site highlight
  ctx.fillStyle = 'rgba(255,215,0,0.2)';
  ctx.strokeStyle = '#FFD700';
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.roundRect(startX - 4, topY - 16, nBases * bw + 8, botY - topY + 32, 6);
  ctx.fill();
  ctx.stroke();
  ctx.fillStyle = '#B8860B';
  ctx.font = `${Math.max(8, w * 0.024)}px Arial`;
  ctx.textAlign = 'center';
  ctx.textBaseline = 'alphabetic';
  ctx.fillText('Recognition Site (EcoRI)', cx, topY - 20);

  // Bases
  sequence.forEach((base, i) => {
    const bx = startX + i * bw + bw * 0.5;
    // Top base
    ctx.fillStyle = baseColors[base];
    ctx.strokeStyle = '#999';
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.arc(bx, topY, bw * 0.38, 0, Math.PI * 2);
    ctx.fill(); ctx.stroke();
    ctx.fillStyle = '#333';
    ctx.font = `bold ${Math.max(9, w * 0.028)}px Arial`;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(base, bx, topY);

    // Bottom base
    ctx.fillStyle = baseColors[complement[i]];
    ctx.strokeStyle = '#999';
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.arc(bx, botY, bw * 0.38, 0, Math.PI * 2);
    ctx.fill(); ctx.stroke();
    ctx.fillStyle = '#333';
    ctx.fillText(complement[i], bx, botY);

    // H-bond lines
    ctx.strokeStyle = 'rgba(100,100,100,0.4)';
    ctx.lineWidth = 1;
    ctx.setLineDash([3, 3]);
    ctx.beginPath();
    ctx.moveTo(bx, topY + bw * 0.38);
    ctx.lineTo(bx, botY - bw * 0.38);
    ctx.stroke();
    ctx.setLineDash([]);
  });

  // EcoRI enzyme (dimer)
  [-1, 1].forEach(side => {
    const ex = cx + side * w * 0.09;
    const ey = cy - h * 0.32;
    ctx.fillStyle = '#8E44AD';
    ctx.strokeStyle = '#6C3483';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.ellipse(ex, ey, w * 0.09, h * 0.1, 0, 0, Math.PI * 2);
    ctx.fill(); ctx.stroke();
    ctx.fillStyle = '#fff';
    ctx.font = `bold ${Math.max(8, w * 0.024)}px Arial`;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(side < 0 ? 'EcoRI' : 'EcoRI', ex, ey - 5);
    ctx.font = `${Math.max(7, w * 0.02)}px Arial`;
    ctx.fillText('subunit', ex, ey + 7);
  });

  // Cleavage arrows (staggered)
  const cut1X = startX + bw, cut2X = startX + nBases * bw - bw;
  [cut1X, cut2X].forEach((cx2, i) => {
    const sy2 = i === 0 ? topY : botY;
    ctx.strokeStyle = '#E74C3C';
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.moveTo(cx2, sy2 - 14);
    ctx.lineTo(cx2, sy2 + 14);
    ctx.stroke();
  });

  // Resulting sticky ends
  const resY = cy + h * 0.3;
  const strandData = [
    { y: resY, color: '#4A90E2', x1: w * 0.04, x2: cx - w * 0.08, x3: cx + w * 0.1, x4: w * 0.96 },
    { y: resY + 14, color: '#E24A4A', x1: w * 0.04, x2: cx + w * 0.02, x3: cx - w * 0.02, x4: w * 0.96 }
  ];
  strandData.forEach(sd => {
    ctx.strokeStyle = sd.color;
    ctx.lineWidth = 4;
    ctx.beginPath(); ctx.moveTo(sd.x1, sd.y); ctx.lineTo(sd.x2, sd.y); ctx.stroke();
    ctx.beginPath(); ctx.moveTo(sd.x3, sd.y); ctx.lineTo(sd.x4, sd.y); ctx.stroke();
  });

  // Overhang labels
  ctx.fillStyle = '#E74C3C';
  ctx.font = `${Math.max(8, w * 0.024)}px Arial`;
  ctx.textAlign = 'center';
  ctx.textBaseline = 'alphabetic';
  ctx.fillText("5' AATT overhangs", cx, resY + 30);

  ctx.fillStyle = '#222';
  ctx.font = `bold ${Math.max(12, w * 0.04)}px Arial`;
  ctx.fillText('Restriction Enzyme (EcoRI)', cx, 22);
}

static drawPromoterRegion(ctx, width, height, componentFocus) {
  const w = width, h = height;
  const cx = w * 0.5, cy = h * 0.5;

  // Genomic DNA
  for (let s = 0; s < 2; s++) {
    ctx.strokeStyle = s === 0 ? '#4A90E2' : '#E24A4A';
    ctx.lineWidth = 4;
    ctx.beginPath();
    ctx.moveTo(w * 0.04, cy + s * 12 - 6);
    ctx.lineTo(w * 0.96, cy + s * 12 - 6);
    ctx.stroke();
  }

  // Promoter elements
  const elements = [
    { name: 'TATA Box', pos: 0.28, color: '#E74C3C', pos_label: '-30', h: h * 0.22 },
    { name: 'Inr', pos: 0.5, color: '#E67E22', pos_label: '+1', h: h * 0.22 },
    { name: 'DPE', pos: 0.65, color: '#27AE60', pos_label: '+30', h: h * 0.22 },
    { name: 'BRE', pos: 0.2, color: '#3498DB', pos_label: '-37', h: h * 0.22 }
  ];

  elements.forEach(el => {
    const ex = w * el.pos;
    const boxH = h * 0.12;
    const boxW = w * 0.09;

    // Highlight box on DNA
    ctx.fillStyle = el.color + '33';
    ctx.strokeStyle = el.color;
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.roundRect(ex - boxW * 0.5, cy - 8, boxW, 28, 4);
    ctx.fill();
    ctx.stroke();

    // Element label above
    ctx.strokeStyle = el.color;
    ctx.lineWidth = 1;
    ctx.setLineDash([4, 3]);
    ctx.beginPath();
    ctx.moveTo(ex, cy - 8);
    ctx.lineTo(ex, cy - el.h);
    ctx.stroke();
    ctx.setLineDash([]);

    ctx.fillStyle = el.color;
    ctx.font = `bold ${Math.max(9, w * 0.028)}px Arial`;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'alphabetic';
    ctx.fillText(el.name, ex, cy - el.h - 4);
    ctx.font = `${Math.max(8, w * 0.022)}px Arial`;
    ctx.fillStyle = '#666';
    ctx.fillText(el.pos_label, ex, cy + 28);
  });

  // TSS +1 arrow
  const tssX = w * 0.5;
  ctx.strokeStyle = '#E67E22';
  ctx.lineWidth = 3;
  ctx.beginPath();
  ctx.moveTo(tssX, cy - h * 0.12);
  ctx.lineTo(tssX + w * 0.08, cy - h * 0.12);
  ctx.stroke();
  ctx.beginPath();
  ctx.moveTo(tssX + w * 0.08, cy - h * 0.12);
  ctx.lineTo(tssX + w * 0.06, cy - h * 0.12 - 5);
  ctx.lineTo(tssX + w * 0.06, cy - h * 0.12 + 5);
  ctx.closePath();
  ctx.fill();
  ctx.fillStyle = '#E67E22';
  ctx.font = `bold ${Math.max(8, w * 0.024)}px Arial`;
  ctx.textAlign = 'left';
  ctx.textBaseline = 'middle';
  ctx.fillText('TSS', tssX + w * 0.09, cy - h * 0.12);

  // Upstream/Downstream labels
  ctx.fillStyle = '#333';
  ctx.font = `${Math.max(9, w * 0.028)}px Arial`;
  ctx.textAlign = 'center';
  ctx.fillText('← Upstream', w * 0.15, cy + h * 0.3);
  ctx.fillText('Downstream →', w * 0.82, cy + h * 0.3);

  ctx.fillStyle = '#222';
  ctx.font = `bold ${Math.max(12, w * 0.04)}px Arial`;
  ctx.fillText('Promoter Region', cx, 22);
}

static drawTATABox(ctx, width, height, componentFocus) {
  const w = width, h = height;
  const cx = w * 0.5, cy = h * 0.48;

  // DNA double strand
  const seqRegion = ['A', 'T', 'A', 'T', 'A', 'A', 'T', 'A'];
  const compSeq = ['T', 'A', 'T', 'A', 'T', 'T', 'A', 'T'];
  const nB = seqRegion.length;
  const bw = w * 0.09;
  const startX = cx - (nB * bw) / 2;

  // Flanking DNA
  ctx.strokeStyle = '#4A90E2';
  ctx.lineWidth = 4;
  ctx.beginPath();
  ctx.moveTo(w * 0.04, cy - 12); ctx.lineTo(startX, cy - 12); ctx.stroke();
  ctx.beginPath();
  ctx.moveTo(startX + nB * bw, cy - 12); ctx.lineTo(w * 0.96, cy - 12); ctx.stroke();
  ctx.strokeStyle = '#E24A4A';
  ctx.beginPath();
  ctx.moveTo(w * 0.04, cy + 12); ctx.lineTo(startX, cy + 12); ctx.stroke();
  ctx.beginPath();
  ctx.moveTo(startX + nB * bw, cy + 12); ctx.lineTo(w * 0.96, cy + 12); ctx.stroke();

  // TATA box highlight
  ctx.fillStyle = 'rgba(231,76,60,0.15)';
  ctx.strokeStyle = '#E74C3C';
  ctx.lineWidth = 3;
  ctx.beginPath();
  ctx.roundRect(startX - 4, cy - 28, nB * bw + 8, 56, 8);
  ctx.fill(); ctx.stroke();

  // Bases
  const baseColors = { T: '#4ECDC4', A: '#FF6B6B', G: '#FFD93D', C: '#95E1D3' };
  seqRegion.forEach((base, i) => {
    const bx = startX + i * bw + bw * 0.5;
    // Top
    ctx.fillStyle = baseColors[base];
    ctx.beginPath();
    ctx.arc(bx, cy - 12, bw * 0.35, 0, Math.PI * 2);
    ctx.fill();
    ctx.strokeStyle = '#999'; ctx.lineWidth = 1; ctx.stroke();
    ctx.fillStyle = '#333';
    ctx.font = `bold ${Math.max(9, w * 0.028)}px Arial`;
    ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
    ctx.fillText(base, bx, cy - 12);

    // H-bonds
    ctx.strokeStyle = 'rgba(100,100,100,0.4)';
    ctx.lineWidth = 1; ctx.setLineDash([2, 2]);
    ctx.beginPath(); ctx.moveTo(bx, cy - 5); ctx.lineTo(bx, cy + 5); ctx.stroke();
    ctx.setLineDash([]);

    // Bottom
    ctx.fillStyle = baseColors[compSeq[i]];
    ctx.beginPath();
    ctx.arc(bx, cy + 12, bw * 0.35, 0, Math.PI * 2);
    ctx.fill();
    ctx.strokeStyle = '#999'; ctx.lineWidth = 1; ctx.stroke();
    ctx.fillStyle = '#333';
    ctx.fillText(compSeq[i], bx, cy + 12);
  });

  // TBP (TATA-binding protein)
  const tbpY = cy - h * 0.25;
  const tbpGrad = ctx.createRadialGradient(cx - 10, tbpY - 10, 4, cx, tbpY, w * 0.2);
  tbpGrad.addColorStop(0, 'rgba(52,152,219,0.7)');
  tbpGrad.addColorStop(1, 'rgba(41,128,185,0.3)');
  ctx.fillStyle = tbpGrad;
  ctx.strokeStyle = '#2980B9';
  ctx.lineWidth = 3;
  // Saddle shape
  ctx.beginPath();
  ctx.ellipse(cx, tbpY, w * 0.22, h * 0.1, 0, 0, Math.PI * 2);
  ctx.fill(); ctx.stroke();
  ctx.fillStyle = '#fff';
  ctx.font = `bold ${Math.max(9, w * 0.028)}px Arial`;
  ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
  ctx.fillText('TBP', cx, tbpY - 6);
  ctx.font = `${Math.max(7, w * 0.02)}px Arial`;
  ctx.fillText('(TATA-binding protein)', cx, tbpY + 8);

  // DNA bending under TBP
  ctx.strokeStyle = '#4A90E2';
  ctx.lineWidth = 3;
  ctx.setLineDash([4, 4]);
  ctx.beginPath();
  ctx.moveTo(startX, cy - 12);
  ctx.bezierCurveTo(startX + nB * bw * 0.2, tbpY + h * 0.1, startX + nB * bw * 0.8, tbpY + h * 0.1, startX + nB * bw, cy - 12);
  ctx.stroke();
  ctx.setLineDash([]);

  ctx.fillStyle = '#222';
  ctx.font = `bold ${Math.max(12, w * 0.04)}px Arial`;
  ctx.textAlign = 'center';
  ctx.textBaseline = 'alphabetic';
  ctx.fillText('TATA Box', cx, 22);
}

static drawTranscriptionFactor(ctx, width, height, componentFocus) {
  const w = width, h = height;
  const cx = w * 0.5, cy = h * 0.5;

  // General TF with domains
  const domains = [
    { name: 'DBD', full: 'DNA Binding Domain', x: cx - w * 0.05, y: cy + h * 0.08, rx: w * 0.16, ry: h * 0.12, color: '#3498DB' },
    { name: 'AD', full: 'Activation Domain', x: cx - w * 0.12, y: cy - h * 0.18, rx: w * 0.12, ry: h * 0.1, color: '#27AE60' },
    { name: 'NLS', full: 'Nuclear Localization', x: cx + w * 0.14, y: cy - h * 0.1, rx: w * 0.08, ry: h * 0.07, color: '#E74C3C' },
    { name: 'LZ', full: 'Leucine Zipper', x: cx + w * 0.05, y: cy + h * 0.06, rx: w * 0.06, ry: h * 0.14, color: '#9B59B6' }
  ];

  // DNA target sequence
  for (let s = 0; s < 2; s++) {
    ctx.strokeStyle = s === 0 ? '#4A90E2' : '#E24A4A';
    ctx.lineWidth = 4;
    ctx.beginPath();
    ctx.moveTo(w * 0.06, cy + h * 0.28 + s * 14 - 7);
    ctx.lineTo(w * 0.94, cy + h * 0.28 + s * 14 - 7);
    ctx.stroke();
  }

  // Response element highlight
  ctx.fillStyle = 'rgba(52,152,219,0.2)';
  ctx.strokeStyle = '#3498DB';
  ctx.lineWidth = 2;
  ctx.setLineDash([4, 3]);
  ctx.beginPath();
  ctx.roundRect(cx - w * 0.15, cy + h * 0.18, w * 0.3, 34, 6);
  ctx.fill(); ctx.stroke();
  ctx.setLineDash([]);
  ctx.fillStyle = '#3498DB';
  ctx.font = `${Math.max(8, w * 0.024)}px Arial`;
  ctx.textAlign = 'center';
  ctx.textBaseline = 'alphabetic';
  ctx.fillText('Response Element', cx, cy + h * 0.2);

  // Draw domains
  domains.forEach(d => {
    const g = ctx.createRadialGradient(d.x - d.rx * 0.3, d.y - d.ry * 0.3, 4, d.x, d.y, d.rx);
    g.addColorStop(0, d.color + 'CC');
    g.addColorStop(1, d.color + '55');
    ctx.fillStyle = g;
    ctx.strokeStyle = d.color;
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.ellipse(d.x, d.y, d.rx, d.ry, 0, 0, Math.PI * 2);
    ctx.fill(); ctx.stroke();
    ctx.fillStyle = '#fff';
    ctx.font = `bold ${Math.max(9, w * 0.028)}px Arial`;
    ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
    ctx.fillText(d.name, d.x, d.y - 6);
    ctx.font = `${Math.max(7, w * 0.02)}px Arial`;
    ctx.fillText(d.full, d.x, d.y + 6);
  });

  // Protein-protein interaction with coactivator
  const coActX = cx + w * 0.3, coActY = cy - h * 0.12;
  ctx.fillStyle = '#E67E22';
  ctx.strokeStyle = '#D35400';
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.arc(coActX, coActY, w * 0.07, 0, Math.PI * 2);
  ctx.fill(); ctx.stroke();
  ctx.fillStyle = '#fff';
  ctx.font = `bold ${Math.max(7, w * 0.022)}px Arial`;
  ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
  ctx.fillText('CoAct', coActX, coActY);

  ctx.strokeStyle = '#999';
  ctx.lineWidth = 2;
  ctx.setLineDash([4, 3]);
  ctx.beginPath();
  ctx.moveTo(domains[1].x + w * 0.12, domains[1].y);
  ctx.lineTo(coActX - w * 0.07, coActY);
  ctx.stroke();
  ctx.setLineDash([]);

  ctx.fillStyle = '#222';
  ctx.font = `bold ${Math.max(12, w * 0.04)}px Arial`;
  ctx.textAlign = 'center';
  ctx.textBaseline = 'alphabetic';
  ctx.fillText('Transcription Factor', cx, 22);
}

static drawEnhancerRegion(ctx, width, height, componentFocus) {
  const w = width, h = height;
  const cx = w * 0.5, cy = h * 0.5;

  // Gene region
  const geneX = cx + w * 0.1, geneY = cy, geneW = w * 0.3;
  ctx.fillStyle = '#2ECC71';
  ctx.strokeStyle = '#1E8449';
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.roundRect(geneX, geneY - 12, geneW, 24, 6);
  ctx.fill(); ctx.stroke();
  ctx.fillStyle = '#fff';
  ctx.font = `bold ${Math.max(9, w * 0.028)}px Arial`;
  ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
  ctx.fillText('Gene', geneX + geneW * 0.5, geneY);

  // Promoter
  const promX = geneX - w * 0.12;
  ctx.fillStyle = '#E74C3C';
  ctx.strokeStyle = '#C0392B';
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.roundRect(promX - w * 0.06, geneY - 12, w * 0.12, 24, 6);
  ctx.fill(); ctx.stroke();
  ctx.fillStyle = '#fff';
  ctx.font = `bold ${Math.max(8, w * 0.024)}px Arial`;
  ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
  ctx.fillText('Promoter', promX, geneY);

  // DNA backbone
  ctx.strokeStyle = '#4A90E2';
  ctx.lineWidth = 3;
  ctx.beginPath();
  ctx.moveTo(w * 0.04, geneY);
  ctx.lineTo(w * 0.96, geneY);
  ctx.stroke();

  // Enhancer (can be far away)
  const enhX = w * 0.18, enhY = geneY;
  ctx.fillStyle = '#F39C12';
  ctx.strokeStyle = '#D35400';
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.roundRect(enhX - w * 0.1, enhY - 16, w * 0.2, 32, 6);
  ctx.fill(); ctx.stroke();
  ctx.fillStyle = '#fff';
  ctx.font = `bold ${Math.max(9, w * 0.028)}px Arial`;
  ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
  ctx.fillText('Enhancer', enhX, enhY - 5);
  ctx.font = `${Math.max(7, w * 0.022)}px Arial`;
  ctx.fillText('(TF Bound)', enhX, enhY + 6);

  // DNA looping to bring enhancer to promoter
  ctx.strokeStyle = '#F39C12';
  ctx.lineWidth = 3;
  ctx.setLineDash([5, 4]);
  ctx.beginPath();
  ctx.moveTo(enhX + w * 0.1, enhY - 16);
  ctx.bezierCurveTo(
    enhX + w * 0.1, enhY - h * 0.3,
    promX, enhY - h * 0.3,
    promX, enhY - 12
  );
  ctx.stroke();
  ctx.setLineDash([]);

  // Cohesin/Mediator complex on loop
  const loopMidX = (enhX + w * 0.1 + promX) / 2;
  const loopMidY = enhY - h * 0.3 - 10;
  ctx.fillStyle = '#8E44AD';
  ctx.beginPath();
  ctx.arc(loopMidX, loopMidY, w * 0.05, 0, Math.PI * 2);
  ctx.fill();
  ctx.fillStyle = '#fff';
  ctx.font = `bold ${Math.max(7, w * 0.02)}px Arial`;
  ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
  ctx.fillText('Cohesin', loopMidX, loopMidY);

  // TF icons on enhancer
  ['TF1', 'TF2'].forEach((tf, i) => {
    const tfx = enhX - w * 0.05 + i * w * 0.1;
    ctx.fillStyle = i === 0 ? '#3498DB' : '#9B59B6';
    ctx.beginPath();
    ctx.arc(tfx, enhY - 28, w * 0.04, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = '#fff';
    ctx.font = `bold ${Math.max(7, w * 0.02)}px Arial`;
    ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
    ctx.fillText(tf, tfx, enhY - 28);
  });

  // Distance annotation
  ctx.strokeStyle = '#999';
  ctx.lineWidth = 1;
  ctx.setLineDash([3, 3]);
  ctx.beginPath();
  ctx.moveTo(enhX + w * 0.1, geneY + 24);
  ctx.lineTo(promX - w * 0.06, geneY + 24);
  ctx.stroke();
  ctx.setLineDash([]);
  ctx.fillStyle = '#666';
  ctx.font = `${Math.max(8, w * 0.022)}px Arial`;
  ctx.textAlign = 'center'; ctx.textBaseline = 'alphabetic';
  ctx.fillText('1–100 kb', (enhX + w * 0.1 + promX - w * 0.06) / 2, geneY + 36);

  ctx.fillStyle = '#222';
  ctx.font = `bold ${Math.max(12, w * 0.04)}px Arial`;
  ctx.fillText('Enhancer Region', cx, 22);
}

static drawSilencerRegion(ctx, width, height, componentFocus) {
  const w = width, h = height;
  const cx = w * 0.5, cy = h * 0.5;

  // DNA
  ctx.strokeStyle = '#4A90E2';
  ctx.lineWidth = 3;
  ctx.beginPath();
  ctx.moveTo(w * 0.04, cy); ctx.lineTo(w * 0.96, cy); ctx.stroke();

  // Gene (suppressed)
  const geneX = w * 0.55, geneW = w * 0.3;
  ctx.fillStyle = 'rgba(189,195,199,0.6)';
  ctx.strokeStyle = '#7F8C8D';
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.roundRect(geneX, cy - 12, geneW, 24, 6);
  ctx.fill(); ctx.stroke();
  ctx.fillStyle = '#7F8C8D';
  ctx.font = `bold ${Math.max(9, w * 0.028)}px Arial`;
  ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
  ctx.fillText('Gene (OFF)', geneX + geneW * 0.5, cy);

  // X mark over gene
  ctx.strokeStyle = '#E74C3C';
  ctx.lineWidth = 3;
  ctx.beginPath();
  ctx.moveTo(geneX + geneW * 0.3, cy - 10); ctx.lineTo(geneX + geneW * 0.7, cy + 10); ctx.stroke();
  ctx.beginPath();
  ctx.moveTo(geneX + geneW * 0.7, cy - 10); ctx.lineTo(geneX + geneW * 0.3, cy + 10); ctx.stroke();

  // Silencer element
  const silX = w * 0.2;
  ctx.fillStyle = '#E74C3C';
  ctx.strokeStyle = '#C0392B';
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.roundRect(silX - w * 0.1, cy - 16, w * 0.2, 32, 6);
  ctx.fill(); ctx.stroke();
  ctx.fillStyle = '#fff';
  ctx.font = `bold ${Math.max(9, w * 0.028)}px Arial`;
  ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
  ctx.fillText('Silencer', silX, cy - 5);
  ctx.font = `${Math.max(7, w * 0.022)}px Arial`;
  ctx.fillText('(Repressor)', silX, cy + 6);

  // Repressor proteins
  ['R1', 'R2'].forEach((r, i) => {
    const rx = silX - w * 0.06 + i * w * 0.12;
    const ry = cy - 30;
    ctx.fillStyle = '#C0392B';
    ctx.beginPath();
    ctx.arc(rx, ry, w * 0.04, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = '#fff';
    ctx.font = `bold ${Math.max(7, w * 0.02)}px Arial`;
    ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
    ctx.fillText(r, rx, ry);
  });

  // Signal pathway to silencer
  ctx.strokeStyle = '#E74C3C';
  ctx.lineWidth = 2;
  ctx.setLineDash([4, 3]);
  ctx.beginPath();
  ctx.moveTo(silX, cy - 16);
  ctx.lineTo(silX, cy - h * 0.25);
  ctx.stroke();
  ctx.setLineDash([]);
  ctx.fillStyle = '#E74C3C';
  ctx.font = `${Math.max(8, w * 0.024)}px Arial`;
  ctx.textAlign = 'center'; ctx.textBaseline = 'alphabetic';
  ctx.fillText('Signal', silX, cy - h * 0.28);

  // Propagation through chromatin
  ctx.strokeStyle = '#9B59B6';
  ctx.lineWidth = 3;
  ctx.setLineDash([5, 4]);
  ctx.beginPath();
  ctx.moveTo(silX + w * 0.1, cy);
  ctx.bezierCurveTo(silX + w * 0.2, cy - h * 0.15, geneX - w * 0.1, cy - h * 0.15, geneX, cy);
  ctx.stroke();
  ctx.setLineDash([]);
  ctx.fillStyle = '#9B59B6';
  ctx.font = `${Math.max(8, w * 0.022)}px Arial`;
  ctx.textAlign = 'center'; ctx.textBaseline = 'alphabetic';
  ctx.fillText('Chromatin compaction', cx, cy - h * 0.18);

  // Contrast: active vs silenced
  ctx.fillStyle = '#27AE60';
  ctx.font = `${Math.max(9, w * 0.028)}px Arial`;
  ctx.textAlign = 'center'; ctx.textBaseline = 'alphabetic';
  ctx.fillText('↑ Active: Enhancer', cx, cy + h * 0.28);
  ctx.fillStyle = '#E74C3C';
  ctx.fillText('↓ Silenced: Repressor bound', cx, cy + h * 0.36);

  ctx.fillStyle = '#222';
  ctx.font = `bold ${Math.max(12, w * 0.04)}px Arial`;
  ctx.fillText('Silencer Region', cx, 22);
}

static drawTranscriptionBubble(ctx, width, height, componentFocus) {
  const w = width, h = height;
  const cx = w * 0.5, cy = h * 0.5;

  // Upstream dsDNA
  for (let s = 0; s < 2; s++) {
    ctx.strokeStyle = s === 0 ? '#4A90E2' : '#E24A4A';
    ctx.lineWidth = 5;
    ctx.beginPath();
    ctx.moveTo(w * 0.04, cy + s * 14 - 7);
    ctx.lineTo(w * 0.25, cy + s * 14 - 7);
    ctx.stroke();
  }

  // Downstream dsDNA
  for (let s = 0; s < 2; s++) {
    ctx.strokeStyle = s === 0 ? '#4A90E2' : '#E24A4A';
    ctx.lineWidth = 5;
    ctx.beginPath();
    ctx.moveTo(w * 0.75, cy + s * 14 - 7);
    ctx.lineTo(w * 0.96, cy + s * 14 - 7);
    ctx.stroke();
  }

  // Bubble region
  const bubW = w * 0.5, bubH = h * 0.45;
  ctx.fillStyle = 'rgba(255,220,100,0.15)';
  ctx.strokeStyle = 'rgba(255,180,0,0.4)';
  ctx.lineWidth = 2;
  ctx.setLineDash([5, 4]);
  ctx.beginPath();
  ctx.ellipse(cx, cy, bubW * 0.5, bubH * 0.5, 0, 0, Math.PI * 2);
  ctx.fill(); ctx.stroke();
  ctx.setLineDash([]);

  // Non-template strand (top, follows curve)
  ctx.strokeStyle = '#4A90E2';
  ctx.lineWidth = 4;
  ctx.beginPath();
  ctx.moveTo(w * 0.25, cy - 7);
  ctx.bezierCurveTo(cx - bubW * 0.3, cy - bubH * 0.42, cx + bubW * 0.3, cy - bubH * 0.42, w * 0.75, cy - 7);
  ctx.stroke();

  // Template strand (bottom)
  ctx.strokeStyle = '#E24A4A';
  ctx.lineWidth = 4;
  ctx.beginPath();
  ctx.moveTo(w * 0.25, cy + 7);
  ctx.bezierCurveTo(cx - bubW * 0.3, cy + bubH * 0.42, cx + bubW * 0.3, cy + bubH * 0.42, w * 0.75, cy + 7);
  ctx.stroke();

  // Growing RNA in hybrid region
  ctx.strokeStyle = '#FF9F43';
  ctx.lineWidth = 5;
  ctx.setLineDash([6, 3]);
  ctx.beginPath();
  ctx.moveTo(cx - bubW * 0.28, cy + bubH * 0.28);
  ctx.bezierCurveTo(cx, cy + bubH * 0.18, cx + bubW * 0.15, cy + bubH * 0.12, cx + bubW * 0.28, cy);
  ctx.stroke();
  ctx.setLineDash([]);

  // RNA Polymerase
  const polGrad = ctx.createRadialGradient(cx - 8, cy - 8, 5, cx, cy, w * 0.18);
  polGrad.addColorStop(0, 'rgba(142,68,173,0.5)');
  polGrad.addColorStop(1, 'rgba(142,68,173,0.15)');
  ctx.fillStyle = polGrad;
  ctx.strokeStyle = '#8E44AD';
  ctx.lineWidth = 3;
  ctx.beginPath();
  ctx.ellipse(cx, cy, w * 0.2, h * 0.22, 0, 0, Math.PI * 2);
  ctx.fill(); ctx.stroke();
  ctx.fillStyle = '#8E44AD';
  ctx.font = `bold ${Math.max(9, w * 0.028)}px Arial`;
  ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
  ctx.fillText('RNA Pol II', cx, cy);

  // Labels
  ctx.fillStyle = '#4A90E2';
  ctx.font = `${Math.max(8, w * 0.024)}px Arial`;
  ctx.textBaseline = 'alphabetic';
  ctx.fillText('Non-template strand', cx - w * 0.15, cy - bubH * 0.44);
  ctx.fillStyle = '#E24A4A';
  ctx.fillText('Template strand', cx - w * 0.12, cy + bubH * 0.44 + 14);
  ctx.fillStyle = '#FF9F43';
  ctx.fillText('→ RNA (growing)', cx + bubW * 0.28 + 4, cy + 4);

  ctx.fillStyle = '#222';
  ctx.font = `bold ${Math.max(12, w * 0.04)}px Arial`;
  ctx.textAlign = 'center';
  ctx.fillText('Transcription Bubble', cx, 22);
}

static drawSpliceosome(ctx, width, height, componentFocus) {
  const w = width, h = height;
  const cx = w * 0.5, cy = h * 0.5;

  // pre-mRNA
  ctx.strokeStyle = '#FF9F43';
  ctx.lineWidth = 5;
  ctx.beginPath();
  ctx.moveTo(w * 0.04, cy + h * 0.22);
  ctx.lineTo(w * 0.96, cy + h * 0.22);
  ctx.stroke();

  // Intron region highlight
  const intronX = cx - w * 0.18, intronW = w * 0.36;
  ctx.fillStyle = 'rgba(231,76,60,0.15)';
  ctx.strokeStyle = '#E74C3C';
  ctx.lineWidth = 2;
  ctx.setLineDash([4, 3]);
  ctx.beginPath();
  ctx.roundRect(intronX, cy + h * 0.14, intronW, 28, 6);
  ctx.fill(); ctx.stroke();
  ctx.setLineDash([]);
  ctx.fillStyle = '#E74C3C';
  ctx.font = `${Math.max(9, w * 0.028)}px Arial`;
  ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
  ctx.fillText('Intron', cx, cy + h * 0.27);

  // Exons
  [w * 0.1, w * 0.74].forEach((ex, i) => {
    ctx.fillStyle = 'rgba(46,204,113,0.4)';
    ctx.strokeStyle = '#27AE60';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.roundRect(ex, cy + h * 0.14, w * 0.16, 28, 6);
    ctx.fill(); ctx.stroke();
    ctx.fillStyle = '#1E8449';
    ctx.font = `bold ${Math.max(9, w * 0.028)}px Arial`;
    ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
    ctx.fillText(`Exon ${i + 1}`, ex + w * 0.08, cy + h * 0.27);
  });

  // snRNP complexes (U1, U2, U4, U5, U6)
  const snrnps = [
    { id: 'U1', x: intronX + 5, y: cy - h * 0.0, color: '#3498DB' },
    { id: 'U2', x: cx, y: cy - h * 0.02, color: '#9B59B6' },
    { id: 'U4/U6', x: intronX + intronW - w * 0.05, y: cy, color: '#E67E22' },
    { id: 'U5', x: cx - w * 0.05, y: cy - h * 0.12, color: '#27AE60' }
  ];

  snrnps.forEach(sn => {
    ctx.fillStyle = sn.color;
    ctx.strokeStyle = 'rgba(0,0,0,0.2)';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.arc(sn.x, sn.y, w * 0.07, 0, Math.PI * 2);
    ctx.fill(); ctx.stroke();
    ctx.fillStyle = '#fff';
    ctx.font = `bold ${Math.max(8, w * 0.024)}px Arial`;
    ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
    ctx.fillText(sn.id, sn.x, sn.y);

    // Connector to mRNA
    ctx.strokeStyle = sn.color + '88';
    ctx.lineWidth = 2;
    ctx.setLineDash([3, 3]);
    ctx.beginPath();
    ctx.moveTo(sn.x, sn.y + w * 0.07);
    ctx.lineTo(sn.x, cy + h * 0.14);
    ctx.stroke();
    ctx.setLineDash([]);
  });

  // Lariat intermediate (small)
  const lx = cx + w * 0.3, ly = cy - h * 0.15;
  ctx.strokeStyle = '#FF9F43';
  ctx.lineWidth = 3;
  ctx.beginPath();
  ctx.arc(lx, ly, w * 0.06, 0, Math.PI * 1.7);
  ctx.stroke();
  ctx.beginPath();
  ctx.moveTo(lx + w * 0.06, ly + h * 0.02);
  ctx.lineTo(lx + w * 0.14, ly + h * 0.12);
  ctx.stroke();
  ctx.fillStyle = '#FF9F43';
  ctx.font = `${Math.max(8, w * 0.022)}px Arial`;
  ctx.textAlign = 'center'; ctx.textBaseline = 'alphabetic';
  ctx.fillText('Lariat', lx, ly + h * 0.16);

  ctx.fillStyle = '#222';
  ctx.font = `bold ${Math.max(12, w * 0.04)}px Arial`;
  ctx.textAlign = 'center';
  ctx.fillText('Spliceosome', cx, 22);
}

static drawIntronLariat(ctx, width, height, componentFocus) {
  const w = width, h = height;
  const cx = w * 0.5, cy = h * 0.5;

  // Stages
  const stages = [
    { x: w * 0.2, y: cy, label: '1. Pre-mRNA' },
    { x: w * 0.5, y: cy, label: '2. Lariat' },
    { x: w * 0.8, y: cy, label: '3. Debranching' }
  ];

  // Stage 1: linear pre-mRNA with branch point
  const s1x = stages[0].x;
  ctx.strokeStyle = '#FF9F43';
  ctx.lineWidth = 5;
  ctx.beginPath();
  ctx.moveTo(s1x - w * 0.1, cy - 10);
  ctx.lineTo(s1x + w * 0.12, cy - 10);
  ctx.stroke();
  // Branch point A
  ctx.fillStyle = '#E74C3C';
  ctx.beginPath();
  ctx.arc(s1x + w * 0.04, cy - 10, 7, 0, Math.PI * 2);
  ctx.fill();
  ctx.fillStyle = '#fff';
  ctx.font = `bold ${Math.max(8, w * 0.025)}px Arial`;
  ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
  ctx.fillText('A', s1x + w * 0.04, cy - 10);
  ctx.fillStyle = '#E74C3C';
  ctx.font = `${Math.max(7, w * 0.02)}px Arial`;
  ctx.textBaseline = 'alphabetic';
  ctx.fillText('Branch Pt', s1x + w * 0.04, cy + 6);
  // 5' splice site marker
  ctx.strokeStyle = '#3498DB';
  ctx.lineWidth = 3;
  ctx.beginPath();
  ctx.moveTo(s1x - w * 0.04, cy - 22);
  ctx.lineTo(s1x - w * 0.04, cy + 2);
  ctx.stroke();
  ctx.fillStyle = '#3498DB';
  ctx.font = `${Math.max(7, w * 0.02)}px Arial`;
  ctx.textAlign = 'center'; ctx.textBaseline = 'alphabetic';
  ctx.fillText("5'ss", s1x - w * 0.04, cy - 24);

  // Stage 2: Lariat loop
  const s2x = stages[1].x;
  const lR = h * 0.18;
  ctx.strokeStyle = '#FF9F43';
  ctx.lineWidth = 5;
  // Loop
  ctx.beginPath();
  ctx.arc(s2x, cy - lR, lR, Math.PI * 0.3, Math.PI * 2.7);
  ctx.stroke();
  // Tail
  ctx.beginPath();
  ctx.moveTo(s2x + lR * Math.cos(Math.PI * 2.7), cy - lR + lR * Math.sin(Math.PI * 2.7));
  ctx.lineTo(s2x + w * 0.12, cy + h * 0.1);
  ctx.stroke();
  // Branch point in loop
  ctx.fillStyle = '#E74C3C';
  ctx.beginPath();
  ctx.arc(s2x - w * 0.01, cy - 8, 7, 0, Math.PI * 2);
  ctx.fill();
  ctx.fillStyle = '#fff';
  ctx.font = `bold ${Math.max(7, w * 0.022)}px Arial`;
  ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
  ctx.fillText('A', s2x - w * 0.01, cy - 8);
  ctx.fillStyle = '#E74C3C';
  ctx.font = `${Math.max(7, w * 0.02)}px Arial`;
  ctx.textBaseline = 'alphabetic';
  ctx.fillText("2'–5'\nbranch", s2x + w * 0.04, cy - 6);

  // Stage 3: debranching/linearization
  const s3x = stages[2].x;
  // Circular form
  ctx.strokeStyle = 'rgba(255,159,67,0.5)';
  ctx.lineWidth = 3;
  ctx.setLineDash([4, 4]);
  ctx.beginPath();
  ctx.arc(s3x - w * 0.04, cy, h * 0.1, 0, Math.PI * 2);
  ctx.stroke();
  ctx.setLineDash([]);
  // Linear degraded
  ctx.strokeStyle = '#FF9F43';
  ctx.lineWidth = 4;
  ctx.beginPath();
  ctx.moveTo(s3x + w * 0.02, cy);
  ctx.lineTo(s3x + w * 0.12, cy);
  ctx.stroke();
  // Scissors icon
  ctx.fillStyle = '#9B59B6';
  ctx.font = `${Math.max(12, w * 0.035)}px Arial`;
  ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
  ctx.fillText('✂', s3x + w * 0.04, cy - h * 0.12);
  ctx.fillStyle = '#9B59B6';
  ctx.font = `${Math.max(7, w * 0.02)}px Arial`;
  ctx.textBaseline = 'alphabetic';
  ctx.fillText('Debranching', s3x - w * 0.02, cy + h * 0.16);
  ctx.fillText('enzyme', s3x, cy + h * 0.24);

  // Stage labels
  stages.forEach(s => {
    ctx.fillStyle = '#333';
    ctx.font = `bold ${Math.max(9, w * 0.028)}px Arial`;
    ctx.textAlign = 'center'; ctx.textBaseline = 'alphabetic';
    ctx.fillText(s.label, s.x, h - 8);
  });

  // Arrows between stages
  [w * 0.33, w * 0.63].forEach(ax => {
    ctx.strokeStyle = '#999';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(ax, cy);
    ctx.lineTo(ax + w * 0.05, cy);
    ctx.stroke();
    ctx.fillStyle = '#999';
    ctx.beginPath();
    ctx.moveTo(ax + w * 0.05, cy);
    ctx.lineTo(ax + w * 0.03, cy - 5);
    ctx.lineTo(ax + w * 0.03, cy + 5);
    ctx.closePath();
    ctx.fill();
  });

  ctx.fillStyle = '#222';
  ctx.font = `bold ${Math.max(12, w * 0.04)}px Arial`;
  ctx.textAlign = 'center';
  ctx.fillText('Intron Lariat', cx, 22);
}

static drawCapAddition(ctx, width, height, componentFocus) {
  const w = width, h = height;
  const cx = w * 0.5, cy = h * 0.5;

  // mRNA transcript
  ctx.strokeStyle = '#FF9F43';
  ctx.lineWidth = 5;
  ctx.beginPath();
  ctx.moveTo(w * 0.32, cy + h * 0.05);
  ctx.lineTo(w * 0.96, cy + h * 0.05);
  ctx.stroke();

  // 5' end label
  ctx.fillStyle = '#FF9F43';
  ctx.font = `${Math.max(9, w * 0.028)}px Arial`;
  ctx.textAlign = 'right';
  ctx.textBaseline = 'middle';
  ctx.fillText("5'", w * 0.32, cy + h * 0.05);

  // Cap structure (7-methylguanosine)
  const capX = w * 0.18, capY = cy + h * 0.05;
  const capGrad = ctx.createRadialGradient(capX - 6, capY - 6, 3, capX, capY, w * 0.1);
  capGrad.addColorStop(0, '#FFE082');
  capGrad.addColorStop(1, '#F57F17');
  ctx.fillStyle = capGrad;
  ctx.strokeStyle = '#E65100';
  ctx.lineWidth = 3;
  ctx.beginPath();
  ctx.arc(capX, capY, w * 0.1, 0, Math.PI * 2);
  ctx.fill(); ctx.stroke();
  ctx.fillStyle = '#fff';
  ctx.font = `bold ${Math.max(9, w * 0.028)}px Arial`;
  ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
  ctx.fillText('m⁷G', capX, capY - 5);
  ctx.font = `${Math.max(7, w * 0.02)}px Arial`;
  ctx.fillText('Cap', capX, capY + 7);

  // Triphosphate linkage
  ctx.strokeStyle = '#E65100';
  ctx.lineWidth = 3;
  ctx.beginPath();
  ctx.moveTo(capX + w * 0.1, capY);
  ctx.lineTo(w * 0.32, capY);
  ctx.stroke();
  // PPP label
  ctx.fillStyle = '#E65100';
  ctx.font = `${Math.max(8, w * 0.024)}px Arial`;
  ctx.textAlign = 'center'; ctx.textBaseline = 'alphabetic';
  ctx.fillText('5\'-5\' PPP link', (capX + w * 0.1 + w * 0.32) / 2, capY - 8);

  // Enzymes involved
  const enzymes = [
    { name: 'RNA Triphosphatase', y: cy - h * 0.22, color: '#3498DB', desc: 'Removes γ-phosphate' },
    { name: 'Guanylyl Transferase', y: cy - h * 0.12, color: '#27AE60', desc: 'Adds GMP' },
    { name: 'Guanine-N7 MTase', y: cy, color: '#E67E22', desc: 'Methylates at N7' }
  ];

  enzymes.forEach(enz => {
    const ex = cx + w * 0.05;
    ctx.fillStyle = enz.color + '33';
    ctx.strokeStyle = enz.color;
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.roundRect(ex, enz.y - 12, w * 0.38, 24, 5);
    ctx.fill(); ctx.stroke();
    ctx.fillStyle = enz.color;
    ctx.font = `bold ${Math.max(8, w * 0.024)}px Arial`;
    ctx.textAlign = 'left'; ctx.textBaseline = 'middle';
    ctx.fillText(enz.name, ex + 6, enz.y - 4);
    ctx.fillStyle = '#666';
    ctx.font = `${Math.max(7, w * 0.018)}px Arial`;
    ctx.fillText(enz.desc, ex + 6, enz.y + 5);
  });

  // Benefits
  ctx.fillStyle = '#333';
  ctx.font = `${Math.max(8, w * 0.024)}px Arial`;
  ctx.textAlign = 'center'; ctx.textBaseline = 'alphabetic';
  ctx.fillText('Functions: ribosome recognition, nuclease protection, nuclear export', cx, h - 8);

  ctx.fillStyle = '#222';
  ctx.font = `bold ${Math.max(12, w * 0.04)}px Arial`;
  ctx.fillText("5' Cap Addition", cx, 22);
}

static drawPolyAAddition(ctx, width, height, componentFocus) {
  const w = width, h = height;
  const cx = w * 0.5;

  // Pre-mRNA
  const rnaY = h * 0.3;
  ctx.strokeStyle = '#FF9F43';
  ctx.lineWidth = 5;
  ctx.beginPath();
  ctx.moveTo(w * 0.04, rnaY);
  ctx.lineTo(w * 0.9, rnaY);
  ctx.stroke();

  // AAUAAA signal sequence
  const sigX = w * 0.6, sigY = rnaY;
  ctx.fillStyle = 'rgba(231,76,60,0.2)';
  ctx.strokeStyle = '#E74C3C';
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.roundRect(sigX - 4, sigY - 14, w * 0.2, 28, 5);
  ctx.fill(); ctx.stroke();
  ctx.fillStyle = '#E74C3C';
  ctx.font = `bold ${Math.max(8, w * 0.024)}px Arial`;
  ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
  ctx.fillText('AAUAAA', sigX + w * 0.1, sigY - 5);
  ctx.font = `${Math.max(7, w * 0.02)}px Arial`;
  ctx.fillText('Signal', sigX + w * 0.1, sigY + 5);

  // Cleavage site
  const clvX = w * 0.83;
  ctx.strokeStyle = '#E74C3C';
  ctx.lineWidth = 3;
  ctx.beginPath();
  ctx.moveTo(clvX, rnaY - 14); ctx.lineTo(clvX, rnaY + 14); ctx.stroke();
  ctx.fillStyle = '#E74C3C';
  ctx.font = `${Math.max(7, w * 0.02)}px Arial`;
  ctx.textAlign = 'center'; ctx.textBaseline = 'alphabetic';
  ctx.fillText('Cleavage', clvX, rnaY - 16);

  // CstF / CPSF complexes
  const cpsf = { x: sigX + w * 0.1, y: rnaY - h * 0.18 };
  const cstf = { x: clvX, y: rnaY - h * 0.16 };
  [{ ...cpsf, label: 'CPSF', color: '#3498DB' }, { ...cstf, label: 'CstF', color: '#9B59B6' }].forEach(c => {
    ctx.fillStyle = c.color;
    ctx.beginPath();
    ctx.arc(c.x, c.y, w * 0.06, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = '#fff';
    ctx.font = `bold ${Math.max(8, w * 0.024)}px Arial`;
    ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
    ctx.fillText(c.label, c.x, c.y);
    ctx.strokeStyle = c.color + '88';
    ctx.lineWidth = 2; ctx.setLineDash([3, 3]);
    ctx.beginPath();
    ctx.moveTo(c.x, c.y + w * 0.06); ctx.lineTo(c.x, rnaY); ctx.stroke();
    ctx.setLineDash([]);
  });

  // Poly(A) tail
  const polyAY = h * 0.65;
  const numA = 12;
  const aColors = ['#FF6B6B', '#FFD93D'];
  for (let i = 0; i < numA; i++) {
    const ax = w * 0.06 + i * (w * 0.76 / numA) + (w * 0.76 / numA) * 0.5;
    ctx.fillStyle = aColors[i % 2];
    ctx.beginPath();
    ctx.arc(ax, polyAY, w * 0.03, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = '#333';
    ctx.font = `bold ${Math.max(7, w * 0.02)}px Arial`;
    ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
    ctx.fillText('A', ax, polyAY);
    if (i > 0) {
      ctx.strokeStyle = '#FF9F43';
      ctx.lineWidth = 3;
      ctx.beginPath();
      ctx.moveTo(ax - (w * 0.76 / numA) * 0.5 + w * 0.03, polyAY);
      ctx.lineTo(ax - w * 0.03, polyAY);
      ctx.stroke();
    }
  }
  // Dotted extension
  ctx.strokeStyle = '#FFD93D';
  ctx.lineWidth = 3; ctx.setLineDash([4, 3]);
  ctx.beginPath();
  ctx.moveTo(w * 0.06 + numA * (w * 0.76 / numA), polyAY);
  ctx.lineTo(w * 0.96, polyAY);
  ctx.stroke();
  ctx.setLineDash([]);
  ctx.fillStyle = '#333';
  ctx.font = `bold ${Math.max(9, w * 0.028)}px Arial`;
  ctx.textAlign = 'right'; ctx.textBaseline = 'middle';
  ctx.fillText('200-250nt', w * 0.96, polyAY);

  // Poly(A) Polymerase
  ctx.fillStyle = '#27AE60';
  ctx.beginPath();
  ctx.arc(cx + w * 0.2, polyAY - h * 0.1, w * 0.06, 0, Math.PI * 2);
  ctx.fill();
  ctx.fillStyle = '#fff';
  ctx.font = `bold ${Math.max(7, w * 0.022)}px Arial`;
  ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
  ctx.fillText('PAP', cx + w * 0.2, polyAY - h * 0.1);

  ctx.fillStyle = '#222';
  ctx.font = `bold ${Math.max(12, w * 0.04)}px Arial`;
  ctx.textAlign = 'center'; ctx.textBaseline = 'alphabetic';
  ctx.fillText("Poly(A) Tail Addition", cx, 22);
}

static drawSnRNA(ctx, width, height, componentFocus) {
  const w = width, h = height;
  const cx = w * 0.5, cy = h * 0.5;

  // Five major snRNAs in spliceosome
  const snRNAs = [
    { id: 'U1', x: w * 0.18, y: h * 0.3, color: '#3498DB', role: '5\' splice site recognition', loops: 4 },
    { id: 'U2', x: w * 0.38, y: h * 0.25, color: '#9B59B6', role: 'Branch point recognition', loops: 5 },
    { id: 'U4', x: w * 0.62, y: h * 0.3, color: '#E67E22', role: 'U6 chaperone', loops: 3 },
    { id: 'U5', x: w * 0.5, y: h * 0.65, color: '#27AE60', role: 'Exon alignment', loops: 4 },
    { id: 'U6', x: w * 0.8, y: h * 0.35, color: '#E74C3C', role: 'Catalysis', loops: 6 }
  ];

  snRNAs.forEach(sn => {
    // Draw cloverleaf-like secondary structure
    const stems = sn.loops;
    const stemR = w * 0.04;
    const loopR = h * 0.04;

    for (let i = 0; i < stems; i++) {
      const angle = (i / stems) * Math.PI * 2 - Math.PI * 0.5;
      const sx = sn.x + Math.cos(angle) * w * 0.08;
      const sy = sn.y + Math.sin(angle) * h * 0.1;

      // Stem
      ctx.strokeStyle = sn.color;
      ctx.lineWidth = 3;
      ctx.beginPath();
      ctx.moveTo(sn.x, sn.y);
      ctx.lineTo(sx, sy);
      ctx.stroke();

      // Loop
      ctx.fillStyle = sn.color + '55';
      ctx.strokeStyle = sn.color;
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.arc(sx, sy, stemR, 0, Math.PI * 2);
      ctx.fill(); ctx.stroke();
    }

    // Central body
    const bg = ctx.createRadialGradient(sn.x - 4, sn.y - 4, 2, sn.x, sn.y, w * 0.055);
    bg.addColorStop(0, sn.color);
    bg.addColorStop(1, sn.color + '88');
    ctx.fillStyle = bg;
    ctx.strokeStyle = sn.color;
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.arc(sn.x, sn.y, w * 0.055, 0, Math.PI * 2);
    ctx.fill(); ctx.stroke();
    ctx.fillStyle = '#fff';
    ctx.font = `bold ${Math.max(9, w * 0.028)}px Arial`;
    ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
    ctx.fillText(sn.id, sn.x, sn.y);

    // Role label
    ctx.fillStyle = sn.color;
    ctx.font = `${Math.max(7, w * 0.02)}px Arial`;
    ctx.textAlign = 'center'; ctx.textBaseline = 'alphabetic';
    ctx.fillText(sn.role, sn.x, sn.y + w * 0.065 + h * 0.1 + 4);
  });

  // U4/U6 interaction
  ctx.strokeStyle = 'rgba(230,115,0,0.5)';
  ctx.lineWidth = 3;
  ctx.setLineDash([4, 3]);
  ctx.beginPath();
  ctx.moveTo(snRNAs[2].x, snRNAs[2].y);
  ctx.lineTo(snRNAs[4].x, snRNAs[4].y);
  ctx.stroke();
  ctx.setLineDash([]);
  ctx.fillStyle = '#999';
  ctx.font = `italic ${Math.max(7, w * 0.02)}px Arial`;
  ctx.textAlign = 'center'; ctx.textBaseline = 'alphabetic';
  ctx.fillText('base pairing', (snRNAs[2].x + snRNAs[4].x) / 2, (snRNAs[2].y + snRNAs[4].y) / 2 - 4);

  ctx.fillStyle = '#222';
  ctx.font = `bold ${Math.max(12, w * 0.04)}px Arial`;
  ctx.textAlign = 'center';
  ctx.fillText('snRNA Types', cx, 22);
}

static drawSnRNP(ctx, width, height, componentFocus) {
  const w = width, h = height;
  const cx = w * 0.5, cy = h * 0.5;

  // Sm protein ring (7 subunits)
  const ringR = w * 0.2;
  const smProteins = ['B/B\'', 'D1', 'D2', 'D3', 'E', 'F', 'G'];
  const smColors = ['#3498DB', '#2980B9', '#1F618D', '#2471A3', '#2E86C1', '#1A5276', '#154360'];

  smProteins.forEach((sm, i) => {
    const angle = (i / smProteins.length) * Math.PI * 2 - Math.PI * 0.5;
    const sx = cx + Math.cos(angle) * ringR;
    const sy = cy + Math.sin(angle) * ringR;

    ctx.fillStyle = smColors[i];
    ctx.strokeStyle = '#0D2C4D';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.arc(sx, sy, w * 0.065, 0, Math.PI * 2);
    ctx.fill(); ctx.stroke();
    ctx.fillStyle = '#fff';
    ctx.font = `bold ${Math.max(7, w * 0.02)}px Arial`;
    ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
    ctx.fillText(sm, sx, sy);
  });

  // snRNA threaded through ring
  ctx.strokeStyle = '#FF9F43';
  ctx.lineWidth = 6;
  ctx.beginPath();
  ctx.moveTo(cx, h * 0.1);
  ctx.bezierCurveTo(cx - w * 0.15, cy - h * 0.05, cx + w * 0.15, cy + h * 0.05, cx, h * 0.9);
  ctx.stroke();
  ctx.fillStyle = '#FF9F43';
  ctx.font = `bold ${Math.max(8, w * 0.024)}px Arial`;
  ctx.textAlign = 'center'; ctx.textBaseline = 'alphabetic';
  ctx.fillText('snRNA', cx + w * 0.08, h * 0.15);

  // Sm-binding site highlight
  ctx.strokeStyle = '#F39C12';
  ctx.lineWidth = 2;
  ctx.setLineDash([4, 3]);
  ctx.beginPath();
  ctx.arc(cx, cy, ringR * 0.55, 0, Math.PI * 2);
  ctx.stroke();
  ctx.setLineDash([]);
  ctx.fillStyle = '#F39C12';
  ctx.font = `${Math.max(7, w * 0.02)}px Arial`;
  ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
  ctx.fillText('Sm site', cx, cy);

  // Specific proteins (snRNP-specific)
  [{ label: 'U1-70K', x: cx + w * 0.33, y: cy - h * 0.15, color: '#27AE60' },
   { label: 'U1-A', x: cx + w * 0.35, y: cy, color: '#E74C3C' },
   { label: 'U1-C', x: cx + w * 0.33, y: cy + h * 0.15, color: '#9B59B6' }
  ].forEach(p => {
    ctx.fillStyle = p.color;
    ctx.beginPath();
    ctx.arc(p.x, p.y, w * 0.05, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = '#fff';
    ctx.font = `bold ${Math.max(7, w * 0.02)}px Arial`;
    ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
    ctx.fillText(p.label, p.x, p.y);
    ctx.strokeStyle = p.color + '88';
    ctx.lineWidth = 2; ctx.setLineDash([3, 3]);
    ctx.beginPath();
    ctx.moveTo(cx + ringR, p.y);
    ctx.lineTo(p.x - w * 0.05, p.y);
    ctx.stroke();
    ctx.setLineDash([]);
  });

  ctx.fillStyle = '#222';
  ctx.font = `bold ${Math.max(12, w * 0.04)}px Arial`;
  ctx.textAlign = 'center';
  ctx.textBaseline = 'alphabetic';
  ctx.fillText('snRNP (U1 snRNP)', cx, 22);
}

static drawExon(ctx, width, height, componentFocus) {
  const w = width, h = height;
  const cx = w * 0.5, cy = h * 0.5;

  // pre-mRNA context
  ctx.strokeStyle = '#FF9F43';
  ctx.lineWidth = 4;
  ctx.beginPath();
  ctx.moveTo(w * 0.04, cy - 10);
  ctx.lineTo(w * 0.96, cy - 10);
  ctx.stroke();

  // Multiple exons and introns
  const regions = [
    { type: 'intron', x: w * 0.04, w: w * 0.12, label: '' },
    { type: 'exon', x: w * 0.16, w: w * 0.14, label: 'Exon 1', info: '5\' UTR' },
    { type: 'intron', x: w * 0.3, w: w * 0.12, label: 'Intron 1' },
    { type: 'exon', x: w * 0.42, w: w * 0.16, label: 'Exon 2', info: 'Coding' },
    { type: 'intron', x: w * 0.58, w: w * 0.1, label: 'Intron 2' },
    { type: 'exon', x: w * 0.68, w: w * 0.16, label: 'Exon 3', info: '3\' UTR' },
    { type: 'intron', x: w * 0.84, w: w * 0.12, label: '' }
  ];

  regions.forEach(r => {
    if (r.type === 'exon') {
      // Exon box
      const eg = ctx.createLinearGradient(r.x, cy, r.x + r.w, cy);
      eg.addColorStop(0, '#27AE60');
      eg.addColorStop(1, '#1E8449');
      ctx.fillStyle = eg;
      ctx.strokeStyle = '#145A32';
      ctx.lineWidth = 3;
      ctx.beginPath();
      ctx.roundRect(r.x, cy - h * 0.18, r.w, h * 0.36, 6);
      ctx.fill(); ctx.stroke();
      ctx.fillStyle = '#fff';
      ctx.font = `bold ${Math.max(9, w * 0.028)}px Arial`;
      ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
      ctx.fillText(r.label, r.x + r.w * 0.5, cy - 8);
      ctx.font = `${Math.max(7, w * 0.02)}px Arial`;
      ctx.fillText(r.info, r.x + r.w * 0.5, cy + 8);
    }
  });

  // Intron arcs between exons
  const exons = regions.filter(r => r.type === 'exon');
  for (let i = 0; i < exons.length - 1; i++) {
    const e1x = exons[i].x + exons[i].w;
    const e2x = exons[i + 1].x;
    const midX = (e1x + e2x) / 2;
    ctx.strokeStyle = '#E74C3C';
    ctx.lineWidth = 2;
    ctx.setLineDash([4, 3]);
    ctx.beginPath();
    ctx.moveTo(e1x, cy);
    ctx.quadraticCurveTo(midX, cy - h * 0.28, e2x, cy);
    ctx.stroke();
    ctx.setLineDash([]);
    ctx.fillStyle = '#E74C3C';
    ctx.font = `${Math.max(7, w * 0.02)}px Arial`;
    ctx.textAlign = 'center'; ctx.textBaseline = 'alphabetic';
    ctx.fillText(`Intron ${i + 1}`, midX, cy - h * 0.3);
  }

  // Splice sites
  exons.forEach((ex, i) => {
    if (i < exons.length) {
      // 5' donor
      ctx.fillStyle = '#3498DB';
      ctx.beginPath();
      ctx.arc(ex.x, cy, 6, 0, Math.PI * 2);
      ctx.fill();
      // 3' acceptor
      ctx.fillStyle = '#E74C3C';
      ctx.beginPath();
      ctx.arc(ex.x + ex.w, cy, 6, 0, Math.PI * 2);
      ctx.fill();
    }
  });

  // Legend
  ctx.fillStyle = '#27AE60';
  ctx.beginPath();
  ctx.roundRect(w * 0.36, h * 0.82, 14, 14, 3);
  ctx.fill();
  ctx.fillStyle = '#333';
  ctx.font = `${Math.max(8, w * 0.024)}px Arial`;
  ctx.textAlign = 'left'; ctx.textBaseline = 'middle';
  ctx.fillText('Exon (retained in mRNA)', w * 0.36 + 18, h * 0.89);

  ctx.fillStyle = '#222';
  ctx.font = `bold ${Math.max(12, w * 0.04)}px Arial`;
  ctx.textAlign = 'center'; ctx.textBaseline = 'alphabetic';
  ctx.fillText('Exon Structure', cx, 22);
}

static drawIntron(ctx, width, height, componentFocus) {
  const w = width, h = height;
  const cx = w * 0.5, cy = h * 0.5;

  // pre-mRNA
  for (let i = 0; i < 3; i++) {
    const rx = w * 0.06 + i * w * 0.31;
    if (i < 2) {
      // Exon boxes
      ctx.fillStyle = '#27AE60';
      ctx.strokeStyle = '#145A32';
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.roundRect(rx, cy - 14, w * 0.18, 28, 5);
      ctx.fill(); ctx.stroke();
      ctx.fillStyle = '#fff';
      ctx.font = `bold ${Math.max(9, w * 0.028)}px Arial`;
      ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
      ctx.fillText(`Exon ${i + 1}`, rx + w * 0.09, cy);
    }
  }

  // Intron in detail
  const intronStart = w * 0.24, intronEnd = w * 0.76;
  const intronW = intronEnd - intronStart;

  // Intron arc
  ctx.strokeStyle = '#E74C3C';
  ctx.lineWidth = 4;
  ctx.beginPath();
  ctx.moveTo(intronStart, cy);
  ctx.bezierCurveTo(intronStart + intronW * 0.2, cy - h * 0.35, intronStart + intronW * 0.8, cy - h * 0.35, intronEnd, cy);
  ctx.stroke();

  // Intron highlight region
  ctx.fillStyle = 'rgba(231,76,60,0.1)';
  ctx.strokeStyle = 'rgba(231,76,60,0.3)';
  ctx.lineWidth = 1;
  ctx.setLineDash([4, 4]);
  ctx.beginPath();
  ctx.moveTo(intronStart, cy + 14);
  ctx.bezierCurveTo(intronStart + intronW * 0.2, cy - h * 0.4, intronStart + intronW * 0.8, cy - h * 0.4, intronEnd, cy + 14);
  ctx.lineTo(intronEnd, cy - 14);
  ctx.bezierCurveTo(intronStart + intronW * 0.8, cy - h * 0.3, intronStart + intronW * 0.2, cy - h * 0.3, intronStart, cy - 14);
  ctx.closePath();
  ctx.fill(); ctx.stroke();
  ctx.setLineDash([]);

  // Key sequences
  const keySeqs = [
    { x: intronStart + 5, label: "GU (5' donor)", color: '#3498DB' },
    { x: cx, label: 'Branch Point\n(YYYYYYY)', color: '#9B59B6' },
    { x: intronEnd - 5, label: "AG (3' acceptor)", color: '#E67E22' }
  ];

  keySeqs.forEach(ks => {
    const dotY = cy;
    ctx.fillStyle = ks.color;
    ctx.beginPath();
    ctx.arc(ks.x, dotY, 8, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = '#fff';
    ctx.font = `bold ${Math.max(7, w * 0.02)}px Arial`;
    ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
    ctx.fillText(ks.label.split('\n')[0].slice(0, 2), ks.x, dotY);

    // Label above
    ctx.fillStyle = ks.color;
    ctx.font = `${Math.max(7, w * 0.02)}px Arial`;
    ctx.textAlign = 'center'; ctx.textBaseline = 'alphabetic';
    ks.label.split('\n').forEach((line, li) => {
      ctx.fillText(line, ks.x, cy - h * 0.38 - li * 14);
    });
  });

  // Polypyrimidine tract
  ctx.fillStyle = 'rgba(155,89,182,0.2)';
  ctx.strokeStyle = '#9B59B6';
  ctx.lineWidth = 2;
  ctx.setLineDash([3, 3]);
  ctx.beginPath();
  ctx.roundRect(cx + w * 0.06, cy - 8, w * 0.15, 16, 4);
  ctx.fill(); ctx.stroke();
  ctx.setLineDash([]);
  ctx.fillStyle = '#9B59B6';
  ctx.font = `${Math.max(7, w * 0.02)}px Arial`;
  ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
  ctx.fillText('Py tract', cx + w * 0.06 + w * 0.075, cy);

  ctx.fillStyle = '#222';
  ctx.font = `bold ${Math.max(12, w * 0.04)}px Arial`;
  ctx.textAlign = 'center'; ctx.textBaseline = 'alphabetic';
  ctx.fillText('Intron Structure', cx, 22);
}

static drawRibosomeStructure(ctx, width, height, componentFocus) {
  const w = width, h = height;
  const cx = w * 0.5, cy = h * 0.52;

  // Large subunit (60S/50S)
  const lsGrad = ctx.createRadialGradient(cx - w * 0.08, cy - h * 0.14, 8, cx, cy - h * 0.1, w * 0.3);
  lsGrad.addColorStop(0, '#F0AD4E');
  lsGrad.addColorStop(1, '#C87A15');
  ctx.fillStyle = lsGrad;
  ctx.strokeStyle = '#A0621A';
  ctx.lineWidth = 3;
  ctx.beginPath();
  ctx.ellipse(cx, cy - h * 0.1, w * 0.33, h * 0.25, 0, 0, Math.PI * 2);
  ctx.fill(); ctx.stroke();
  ctx.fillStyle = '#fff';
  ctx.font = `bold ${Math.max(10, w * 0.032)}px Arial`;
  ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
  ctx.fillText('60S', cx - w * 0.12, cy - h * 0.14);
  ctx.font = `${Math.max(8, w * 0.024)}px Arial`;
  ctx.fillText('(Large Subunit)', cx - w * 0.06, cy - h * 0.04);

  // Small subunit (40S/30S)
  const ssGrad = ctx.createRadialGradient(cx - w * 0.06, cy + h * 0.12, 6, cx, cy + h * 0.16, w * 0.25);
  ssGrad.addColorStop(0, '#5DADE2');
  ssGrad.addColorStop(1, '#1A6FA0');
  ctx.fillStyle = ssGrad;
  ctx.strokeStyle = '#1A6FA0';
  ctx.lineWidth = 3;
  ctx.beginPath();
  ctx.ellipse(cx, cy + h * 0.16, w * 0.3, h * 0.16, 0, 0, Math.PI * 2);
  ctx.fill(); ctx.stroke();
  ctx.fillStyle = '#fff';
  ctx.font = `bold ${Math.max(10, w * 0.032)}px Arial`;
  ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
  ctx.fillText('40S', cx - w * 0.1, cy + h * 0.14);
  ctx.font = `${Math.max(8, w * 0.024)}px Arial`;
  ctx.fillText('(Small Subunit)', cx - w * 0.04, cy + h * 0.22);

  // mRNA channel
  ctx.strokeStyle = '#FF9F43';
  ctx.lineWidth = 6;
  ctx.beginPath();
  ctx.moveTo(w * 0.04, cy + h * 0.06);
  ctx.lineTo(cx - w * 0.3, cy + h * 0.06);
  ctx.stroke();
  ctx.beginPath();
  ctx.moveTo(cx + w * 0.3, cy + h * 0.06);
  ctx.lineTo(w * 0.96, cy + h * 0.06);
  ctx.stroke();
  ctx.fillStyle = '#FF9F43';
  ctx.font = `${Math.max(8, w * 0.024)}px Arial`;
  ctx.textAlign = 'left'; ctx.textBaseline = 'alphabetic';
  ctx.fillText("5' →", w * 0.04, cy + h * 0.04);
  ctx.textAlign = 'right';
  ctx.fillText("→ 3'", w * 0.96, cy + h * 0.04);

  // A, P, E sites
  const sites = [
    { id: 'A', x: cx + w * 0.1, color: '#E74C3C', desc: 'Aminoacyl' },
    { id: 'P', x: cx, color: '#2ECC71', desc: 'Peptidyl' },
    { id: 'E', x: cx - w * 0.1, color: '#9B59B6', desc: 'Exit' }
  ];

  sites.forEach(site => {
    ctx.fillStyle = site.color + '33';
    ctx.strokeStyle = site.color;
    ctx.lineWidth = 2;
    ctx.setLineDash([4, 3]);
    ctx.beginPath();
    ctx.roundRect(site.x - w * 0.04, cy - h * 0.3, w * 0.08, h * 0.54, 4);
    ctx.fill(); ctx.stroke();
    ctx.setLineDash([]);
    ctx.fillStyle = site.color;
    ctx.font = `bold ${Math.max(10, w * 0.032)}px Arial`;
    ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
    ctx.fillText(site.id, site.x, cy - h * 0.32);
    ctx.font = `${Math.max(7, w * 0.02)}px Arial`;
    ctx.fillText(site.desc, site.x, cy + h * 0.34);

    // tRNA silhouette in P site
    if (site.id === 'P') {
      ctx.fillStyle = 'rgba(46,204,113,0.4)';
      ctx.beginPath();
      ctx.ellipse(site.x, cy - h * 0.16, w * 0.04, h * 0.1, 0, 0, Math.PI * 2);
      ctx.fill();
    }
  });

  // GTPase center label
  ctx.fillStyle = '#333';
  ctx.font = `${Math.max(7, w * 0.02)}px Arial`;
  ctx.textAlign = 'center'; ctx.textBaseline = 'alphabetic';
  ctx.fillText('GTPase center', cx + w * 0.2, cy - h * 0.28);

  ctx.fillStyle = '#222';
  ctx.font = `bold ${Math.max(12, w * 0.04)}px Arial`;
  ctx.fillText('Ribosome Structure', cx, 22);
}

static drawPeptideBondFormation(ctx, width, height, componentFocus) {
  const w = width, h = height;
  const cx = w * 0.5, cy = h * 0.5;

  // Two amino acids
  const aaColors = ['#3498DB', '#E74C3C'];
  const aaPos = [cx - w * 0.22, cx + w * 0.22];
  const aaNames = ['Amino acid 1', 'Amino acid 2'];

  aaPos.forEach((ax, i) => {
    // R group
    ctx.fillStyle = aaColors[i] + '66';
    ctx.strokeStyle = aaColors[i];
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.arc(ax, cy - h * 0.18, w * 0.07, 0, Math.PI * 2);
    ctx.fill(); ctx.stroke();
    ctx.fillStyle = aaColors[i];
    ctx.font = `bold ${Math.max(9, w * 0.028)}px Arial`;
    ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
    ctx.fillText('R' + (i + 1), ax, cy - h * 0.18);

    // Amino group (H2N-)
    ctx.fillStyle = '#27AE60';
    ctx.strokeStyle = '#1E8449';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.arc(ax - w * 0.1, cy + h * 0.04, w * 0.05, 0, Math.PI * 2);
    ctx.fill(); ctx.stroke();
    ctx.fillStyle = '#fff';
    ctx.font = `bold ${Math.max(8, w * 0.024)}px Arial`;
    ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
    ctx.fillText('H₂N', ax - w * 0.1, cy + h * 0.04);

    // Alpha carbon
    ctx.fillStyle = '#ECF0F1';
    ctx.strokeStyle = '#333';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.arc(ax, cy + h * 0.04, w * 0.04, 0, Math.PI * 2);
    ctx.fill(); ctx.stroke();
    ctx.fillStyle = '#333';
    ctx.font = `bold ${Math.max(8, w * 0.024)}px Arial`;
    ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
    ctx.fillText('Cα', ax, cy + h * 0.04);

    // Carboxyl group (COOH)
    ctx.fillStyle = '#E74C3C';
    ctx.strokeStyle = '#C0392B';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.arc(ax + w * 0.1, cy + h * 0.04, w * 0.055, 0, Math.PI * 2);
    ctx.fill(); ctx.stroke();
    ctx.fillStyle = '#fff';
    ctx.font = `bold ${Math.max(8, w * 0.024)}px Arial`;
    ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
    ctx.fillText('COOH', ax + w * 0.1, cy + h * 0.04);

    // Bond lines
    ctx.strokeStyle = '#333';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(ax - w * 0.1 + w * 0.05, cy + h * 0.04);
    ctx.lineTo(ax - w * 0.04, cy + h * 0.04);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(ax + w * 0.04, cy + h * 0.04);
    ctx.lineTo(ax + w * 0.1 - w * 0.055, cy + h * 0.04);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(ax, cy - h * 0.11);
    ctx.lineTo(ax, cy + h * 0.0);
    ctx.stroke();

    ctx.fillStyle = '#333';
    ctx.font = `${Math.max(8, w * 0.024)}px Arial`;
    ctx.textAlign = 'center'; ctx.textBaseline = 'alphabetic';
    ctx.fillText(aaNames[i], ax, cy + h * 0.18);
  });

  // Reaction arrow with H2O release
  ctx.strokeStyle = '#333';
  ctx.lineWidth = 3;
  ctx.beginPath();
  ctx.moveTo(cx - w * 0.05, cy);
  ctx.lineTo(cx + w * 0.05, cy);
  ctx.stroke();
  ctx.beginPath();
  ctx.moveTo(cx + w * 0.05, cy);
  ctx.lineTo(cx + w * 0.03, cy - 5);
  ctx.lineTo(cx + w * 0.03, cy + 5);
  ctx.closePath();
  ctx.fill();
  // H2O
  ctx.fillStyle = '#3498DB';
  ctx.font = `bold ${Math.max(9, w * 0.028)}px Arial`;
  ctx.textAlign = 'center'; ctx.textBaseline = 'alphabetic';
  ctx.fillText('−H₂O', cx, cy - 8);

  // Peptide bond product
  const prodY = cy + h * 0.28;
  const midX = cx;
  ctx.strokeStyle = '#9B59B6';
  ctx.lineWidth = 4;
  ctx.beginPath();
  ctx.moveTo(midX - w * 0.06, prodY);
  ctx.lineTo(midX + w * 0.06, prodY);
  ctx.stroke();
  ctx.fillStyle = '#9B59B6';
  ctx.font = `bold ${Math.max(9, w * 0.028)}px Arial`;
  ctx.textAlign = 'center'; ctx.textBaseline = 'alphabetic';
  ctx.fillText('Peptide Bond (C—N)', midX, prodY - 8);
  // Double bond character
  ctx.strokeStyle = '#9B59B6';
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.moveTo(midX - w * 0.02, prodY + 4);
  ctx.lineTo(midX + w * 0.02, prodY + 4);
  ctx.stroke();

  ctx.fillStyle = '#222';
  ctx.font = `bold ${Math.max(12, w * 0.04)}px Arial`;
  ctx.textAlign = 'center'; ctx.textBaseline = 'alphabetic';
  ctx.fillText('Peptide Bond Formation', cx, 22);
}

static drawAminoacylation(ctx, width, height, componentFocus) {
  const w = width, h = height;
  const cx = w * 0.5;

  // Steps of aminoacylation
  const steps = [
    { y: h * 0.2, label: 'Step 1: AA + ATP → AA-AMP + PPi' },
    { y: h * 0.55, label: 'Step 2: AA-AMP + tRNA → AA-tRNA + AMP' }
  ];

  // Step 1
  const s1y = h * 0.3;
  // Amino acid
  ctx.fillStyle = '#3498DB';
  ctx.beginPath();
  ctx.arc(w * 0.12, s1y, w * 0.06, 0, Math.PI * 2);
  ctx.fill();
  ctx.fillStyle = '#fff';
  ctx.font = `bold ${Math.max(8, w * 0.025)}px Arial`;
  ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
  ctx.fillText('AA', w * 0.12, s1y);

  ctx.fillStyle = '#333';
  ctx.font = `bold ${Math.max(10, w * 0.03)}px Arial`;
  ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
  ctx.fillText('+', w * 0.24, s1y);

  // ATP
  ctx.fillStyle = '#F39C12';
  ctx.beginPath();
  ctx.arc(w * 0.36, s1y, w * 0.06, 0, Math.PI * 2);
  ctx.fill();
  ctx.fillStyle = '#fff';
  ctx.font = `bold ${Math.max(8, w * 0.025)}px Arial`;
  ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
  ctx.fillText('ATP', w * 0.36, s1y);

  // Arrow with aaRS
  ctx.fillStyle = '#27AE60';
  ctx.strokeStyle = '#1E8449';
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.roundRect(w * 0.46, s1y - h * 0.06, w * 0.14, h * 0.12, 5);
  ctx.fill(); ctx.stroke();
  ctx.fillStyle = '#fff';
  ctx.font = `bold ${Math.max(7, w * 0.022)}px Arial`;
  ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
  ctx.fillText('aaRS', w * 0.53, s1y - 5);
  ctx.font = `${Math.max(6, w * 0.018)}px Arial`;
  ctx.fillText('enzyme', w * 0.53, s1y + 7);
  ctx.strokeStyle = '#27AE60';
  ctx.lineWidth = 3;
  ctx.beginPath();
  ctx.moveTo(w * 0.44, s1y); ctx.lineTo(w * 0.46, s1y); ctx.stroke();
  ctx.beginPath();
  ctx.moveTo(w * 0.6, s1y); ctx.lineTo(w * 0.64, s1y); ctx.stroke();
  ctx.fillStyle = '#27AE60';
  ctx.beginPath();
  ctx.moveTo(w * 0.64, s1y); ctx.lineTo(w * 0.62, s1y - 5); ctx.lineTo(w * 0.62, s1y + 5); ctx.closePath();
  ctx.fill();

  // AA-AMP
  ctx.fillStyle = '#9B59B6';
  ctx.beginPath();
  ctx.arc(w * 0.72, s1y, w * 0.07, 0, Math.PI * 2);
  ctx.fill();
  ctx.fillStyle = '#fff';
  ctx.font = `bold ${Math.max(8, w * 0.024)}px Arial`;
  ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
  ctx.fillText('AA-', w * 0.72, s1y - 5);
  ctx.fillText('AMP', w * 0.72, s1y + 6);

  ctx.fillStyle = '#333';
  ctx.font = `bold ${Math.max(10, w * 0.03)}px Arial`;
  ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
  ctx.fillText('+PPi', w * 0.88, s1y);

  // Step 2
  const s2y = h * 0.65;
  ctx.fillStyle = '#9B59B6';
  ctx.beginPath();
  ctx.arc(w * 0.12, s2y, w * 0.07, 0, Math.PI * 2);
  ctx.fill();
  ctx.fillStyle = '#fff';
  ctx.font = `bold ${Math.max(7, w * 0.022)}px Arial`;
  ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
  ctx.fillText('AA-AMP', w * 0.12, s2y);

  ctx.fillStyle = '#333';
  ctx.font = `bold ${Math.max(10, w * 0.03)}px Arial`;
  ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
  ctx.fillText('+', w * 0.25, s2y);

  // tRNA
  ctx.fillStyle = '#FF9F43';
  ctx.beginPath();
  ctx.ellipse(w * 0.38, s2y, w * 0.07, h * 0.08, 0, 0, Math.PI * 2);
  ctx.fill();
  ctx.fillStyle = '#fff';
  ctx.font = `bold ${Math.max(8, w * 0.024)}px Arial`;
  ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
  ctx.fillText('tRNA', w * 0.38, s2y);

  // Arrow
  ctx.strokeStyle = '#27AE60';
  ctx.lineWidth = 3;
  ctx.beginPath();
  ctx.moveTo(w * 0.48, s2y); ctx.lineTo(w * 0.58, s2y); ctx.stroke();
  ctx.fillStyle = '#27AE60';
  ctx.beginPath();
  ctx.moveTo(w * 0.58, s2y); ctx.lineTo(w * 0.56, s2y - 5); ctx.lineTo(w * 0.56, s2y + 5); ctx.closePath();
  ctx.fill();

  // Charged tRNA
  ctx.fillStyle = '#E74C3C';
  ctx.beginPath();
  ctx.ellipse(w * 0.72, s2y, w * 0.09, h * 0.1, 0, 0, Math.PI * 2);
  ctx.fill();
  ctx.fillStyle = '#fff';
  ctx.font = `bold ${Math.max(8, w * 0.024)}px Arial`;
  ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
  ctx.fillText('AA-', w * 0.72, s2y - 6);
  ctx.fillText('tRNA', w * 0.72, s2y + 6);

  ctx.fillStyle = '#333';
  ctx.font = `bold ${Math.max(9, w * 0.028)}px Arial`;
  ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
  ctx.fillText('+AMP', w * 0.88, s2y);

  // Step labels
  steps.forEach(s => {
    ctx.fillStyle = '#555';
    ctx.font = `bold ${Math.max(9, w * 0.028)}px Arial`;
    ctx.textAlign = 'center'; ctx.textBaseline = 'alphabetic';
    ctx.fillText(s.label, cx, s.y);
  });

  ctx.fillStyle = '#222';
  ctx.font = `bold ${Math.max(12, w * 0.04)}px Arial`;
  ctx.textAlign = 'center';
  ctx.fillText('tRNA Aminoacylation (Charging)', cx, 22);
}

static drawAminoAcidStructure(ctx, width, height, componentFocus) {
  const w = width, h = height;
  const cx = w * 0.5, cy = h * 0.45;

  // General amino acid structure
  // Alpha carbon center
  ctx.fillStyle = '#ECF0F1';
  ctx.strokeStyle = '#2C3E50';
  ctx.lineWidth = 3;
  ctx.beginPath();
  ctx.arc(cx, cy, w * 0.06, 0, Math.PI * 2);
  ctx.fill(); ctx.stroke();
  ctx.fillStyle = '#2C3E50';
  ctx.font = `bold ${Math.max(10, w * 0.032)}px Arial`;
  ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
  ctx.fillText('Cα', cx, cy);

  // H (hydrogen)
  ctx.fillStyle = '#BDC3C7';
  ctx.strokeStyle = '#7F8C8D';
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.arc(cx, cy - h * 0.22, w * 0.045, 0, Math.PI * 2);
  ctx.fill(); ctx.stroke();
  ctx.strokeStyle = '#7F8C8D'; ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.moveTo(cx, cy - w * 0.06);
  ctx.lineTo(cx, cy - h * 0.22 + w * 0.045);
  ctx.stroke();
  ctx.fillStyle = '#7F8C8D';
  ctx.font = `bold ${Math.max(10, w * 0.032)}px Arial`;
  ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
  ctx.fillText('H', cx, cy - h * 0.22);

  // Amino group (NH2) - left
  ctx.fillStyle = '#2ECC71';
  ctx.strokeStyle = '#1E8449';
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.arc(cx - w * 0.22, cy, w * 0.065, 0, Math.PI * 2);
  ctx.fill(); ctx.stroke();
  ctx.strokeStyle = '#1E8449'; ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.moveTo(cx - w * 0.06, cy);
  ctx.lineTo(cx - w * 0.22 + w * 0.065, cy);
  ctx.stroke();
  ctx.fillStyle = '#fff';
  ctx.font = `bold ${Math.max(10, w * 0.032)}px Arial`;
  ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
  ctx.fillText('NH₂', cx - w * 0.22, cy);

  // Carboxyl group (COOH) - right
  ctx.fillStyle = '#E74C3C';
  ctx.strokeStyle = '#C0392B';
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.arc(cx + w * 0.24, cy, w * 0.07, 0, Math.PI * 2);
  ctx.fill(); ctx.stroke();
  ctx.strokeStyle = '#C0392B'; ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.moveTo(cx + w * 0.06, cy);
  ctx.lineTo(cx + w * 0.24 - w * 0.07, cy);
  ctx.stroke();
  ctx.fillStyle = '#fff';
  ctx.font = `bold ${Math.max(10, w * 0.032)}px Arial`;
  ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
  ctx.fillText('COOH', cx + w * 0.24, cy);

  // R group (variable) - bottom
  const rGrad = ctx.createRadialGradient(cx - 5, cy + h * 0.2 - 5, 4, cx, cy + h * 0.2, w * 0.12);
  rGrad.addColorStop(0, '#9B59B6');
  rGrad.addColorStop(1, '#6C3483');
  ctx.fillStyle = rGrad;
  ctx.strokeStyle = '#6C3483';
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.arc(cx, cy + h * 0.2, w * 0.1, 0, Math.PI * 2);
  ctx.fill(); ctx.stroke();
  ctx.strokeStyle = '#6C3483'; ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.moveTo(cx, cy + w * 0.06);
  ctx.lineTo(cx, cy + h * 0.2 - w * 0.1);
  ctx.stroke();
  ctx.fillStyle = '#fff';
  ctx.font = `bold ${Math.max(10, w * 0.032)}px Arial`;
  ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
  ctx.fillText('R', cx, cy + h * 0.2 - 6);
  ctx.font = `${Math.max(7, w * 0.02)}px Arial`;
  ctx.fillText('(variable)', cx, cy + h * 0.2 + 7);

  // Labels
  const labels = [
    { x: cx - w * 0.22, y: cy + h * 0.1, text: 'Amino group', color: '#1E8449' },
    { x: cx + w * 0.24, y: cy + h * 0.1, text: 'Carboxyl group', color: '#C0392B' },
    { x: cx + w * 0.14, y: cy - h * 0.28, text: 'α-hydrogen', color: '#7F8C8D' },
    { x: cx + w * 0.12, y: cy + h * 0.32, text: 'Side chain (R)', color: '#6C3483' }
  ];
  labels.forEach(l => {
    ctx.fillStyle = l.color;
    ctx.font = `${Math.max(8, w * 0.024)}px Arial`;
    ctx.textAlign = 'center'; ctx.textBaseline = 'alphabetic';
    ctx.fillText(l.text, l.x, l.y);
  });

  // Ionization states at bottom
  const ionY = h * 0.85;
  ctx.fillStyle = '#333';
  ctx.font = `bold ${Math.max(9, w * 0.028)}px Arial`;
  ctx.textAlign = 'center'; ctx.textBaseline = 'alphabetic';
  ctx.fillText('pKa: α-NH₂ ≈ 9.0   |   α-COOH ≈ 2.0', cx, ionY);

  ctx.fillStyle = '#222';
  ctx.font = `bold ${Math.max(12, w * 0.04)}px Arial`;
  ctx.fillText('Amino Acid Structure', cx, 22);
}

static drawPeptideChain(ctx, width, height, componentFocus) {
  const w = width, h = height;
  const cx = w * 0.5, cy = h * 0.48;

  const aaList = [
    { abbr: 'Met', color: '#E74C3C', charge: '' },
    { abbr: 'Gly', color: '#3498DB', charge: '' },
    { abbr: 'Leu', color: '#9B59B6', charge: '' },
    { abbr: 'Asp', color: '#E67E22', charge: '-' },
    { abbr: 'Lys', color: '#27AE60', charge: '+' }
  ];
  const nAA = aaList.length;
  const spacing = w * 0.16;
  const startX = cx - ((nAA - 1) * spacing) / 2;

  // Draw backbone
  for (let i = 0; i < nAA - 1; i++) {
    const x1 = startX + i * spacing + w * 0.05;
    const x2 = startX + (i + 1) * spacing - w * 0.05;
    // N-Cα bond
    ctx.strokeStyle = '#555';
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.moveTo(x1, cy);
    ctx.lineTo(x2, cy);
    ctx.stroke();
    // Peptide bond label
    ctx.fillStyle = '#9B59B6';
    ctx.font = `bold ${Math.max(8, w * 0.024)}px Arial`;
    ctx.textAlign = 'center'; ctx.textBaseline = 'alphabetic';
    ctx.fillText('—', (x1 + x2) / 2, cy - 14);
  }

  // Draw amino acid residues
  aaList.forEach((aa, i) => {
    const ax = startX + i * spacing;
    const ag = ctx.createRadialGradient(ax - 4, cy - 4, 3, ax, cy, w * 0.055);
    ag.addColorStop(0, aa.color + 'CC');
    ag.addColorStop(1, aa.color + '88');
    ctx.fillStyle = ag;
    ctx.strokeStyle = aa.color;
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.arc(ax, cy, w * 0.055, 0, Math.PI * 2);
    ctx.fill(); ctx.stroke();
    ctx.fillStyle = '#fff';
    ctx.font = `bold ${Math.max(8, w * 0.024)}px Arial`;
    ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
    ctx.fillText(aa.abbr, ax, cy - 4);
    if (aa.charge) {
      ctx.font = `bold ${Math.max(9, w * 0.028)}px Arial`;
      ctx.fillText(aa.charge, ax, cy + 7);
    }

    // R group stub
    const rDir = i % 2 === 0 ? -1 : 1;
    ctx.strokeStyle = aa.color;
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.moveTo(ax, cy + rDir * w * 0.055);
    ctx.lineTo(ax, cy + rDir * h * 0.15);
    ctx.stroke();
    ctx.fillStyle = aa.color + '88';
    ctx.beginPath();
    ctx.arc(ax, cy + rDir * h * 0.15, w * 0.035, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = aa.color;
    ctx.font = `${Math.max(7, w * 0.02)}px Arial`;
    ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
    ctx.fillText('R', ax, cy + rDir * h * 0.15);

    // Residue number
    ctx.fillStyle = '#666';
    ctx.font = `${Math.max(7, w * 0.02)}px Arial`;
    ctx.textAlign = 'center'; ctx.textBaseline = 'alphabetic';
    ctx.fillText(`${i + 1}`, ax, cy + h * 0.25);
  });

  // N and C termini
  ctx.fillStyle = '#27AE60';
  ctx.font = `bold ${Math.max(10, w * 0.032)}px Arial`;
  ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
  ctx.fillText("H₂N—", startX - w * 0.1, cy);
  ctx.fillStyle = '#E74C3C';
  ctx.fillText("—COOH", startX + (nAA - 1) * spacing + w * 0.1, cy);

  // N/C terminus labels
  ctx.fillStyle = '#27AE60';
  ctx.font = `${Math.max(8, w * 0.024)}px Arial`;
  ctx.textAlign = 'center'; ctx.textBaseline = 'alphabetic';
  ctx.fillText('N-terminus', startX - w * 0.1, cy + h * 0.1);
  ctx.fillStyle = '#E74C3C';
  ctx.fillText('C-terminus', startX + (nAA - 1) * spacing + w * 0.1, cy + h * 0.1);

  // Peptide bond detail callout
  const pbX = cx, pbY = h * 0.78;
  ctx.strokeStyle = '#9B59B6';
  ctx.lineWidth = 2;
  ctx.setLineDash([3, 3]);
  ctx.beginPath();
  ctx.moveTo(cx, cy + w * 0.055);
  ctx.lineTo(pbX, pbY - 14);
  ctx.stroke();
  ctx.setLineDash([]);
  ctx.fillStyle = '#9B59B6';
  ctx.font = `${Math.max(8, w * 0.024)}px Arial`;
  ctx.textAlign = 'center'; ctx.textBaseline = 'alphabetic';
  ctx.fillText('Peptide bond: C(=O)—N—H  (partial double bond character)', pbX, pbY);

  ctx.fillStyle = '#222';
  ctx.font = `bold ${Math.max(12, w * 0.04)}px Arial`;
  ctx.textAlign = 'center';
  ctx.fillText('Peptide Chain', cx, 22);
}

static drawProteinFolding(ctx, width, height, componentFocus) {
  const w = width, h = height;

  const levels = [
    { name: 'Primary', x: w * 0.12, y: h * 0.25, color: '#3498DB' },
    { name: 'Secondary', x: w * 0.38, y: h * 0.25, color: '#27AE60' },
    { name: 'Tertiary', x: w * 0.64, y: h * 0.25, color: '#E67E22' },
    { name: 'Quaternary', x: w * 0.88, y: h * 0.25, color: '#9B59B6' }
  ];

  // Primary: linear chain
  const p = levels[0];
  const aaColors = ['#E74C3C', '#3498DB', '#27AE60', '#E67E22', '#9B59B6', '#E74C3C'];
  for (let i = 0; i < 6; i++) {
    const ax = p.x - w * 0.07 + i * w * 0.024;
    ctx.fillStyle = aaColors[i];
    ctx.beginPath();
    ctx.arc(ax, p.y + h * 0.12, w * 0.018, 0, Math.PI * 2);
    ctx.fill();
    if (i > 0) {
      ctx.strokeStyle = '#555';
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(ax - w * 0.024 + w * 0.018, p.y + h * 0.12);
      ctx.lineTo(ax - w * 0.018, p.y + h * 0.12);
      ctx.stroke();
    }
  }
  ctx.fillStyle = p.color;
  ctx.font = `bold ${Math.max(9, w * 0.028)}px Arial`;
  ctx.textAlign = 'center'; ctx.textBaseline = 'alphabetic';
  ctx.fillText(p.name, p.x, p.y + h * 0.28);
  ctx.fillStyle = '#555';
  ctx.font = `${Math.max(7, w * 0.02)}px Arial`;
  ctx.fillText('AA sequence', p.x, p.y + h * 0.35);

  // Secondary: helix and sheet
  const s = levels[1];
  // α-helix
  ctx.strokeStyle = '#27AE60';
  ctx.lineWidth = 3;
  ctx.beginPath();
  for (let i = 0; i <= 30; i++) {
    const t = i / 30;
    const hx = s.x - w * 0.06 + t * w * 0.05;
    const hy = s.y + h * 0.06 + Math.sin(t * Math.PI * 4) * h * 0.06;
    if (i === 0) ctx.moveTo(hx, hy);
    else ctx.lineTo(hx, hy);
  }
  ctx.stroke();
  ctx.fillStyle = '#27AE60';
  ctx.font = `${Math.max(7, w * 0.02)}px Arial`;
  ctx.textAlign = 'center'; ctx.textBaseline = 'alphabetic';
  ctx.fillText('α-helix', s.x - w * 0.035, s.y + h * 0.21);

  // β-sheet arrows
  for (let i = 0; i < 3; i++) {
    const bx = s.x + w * 0.02;
    const by = s.y + h * 0.06 + i * h * 0.06;
    ctx.fillStyle = i % 2 === 0 ? '#2ECC71' : '#1E8449';
    ctx.beginPath();
    ctx.moveTo(bx - w * 0.05, by);
    ctx.lineTo(bx + w * 0.02, by);
    ctx.lineTo(bx + w * 0.02, by - 6);
    ctx.lineTo(bx + w * 0.05, by + 4);
    ctx.lineTo(bx + w * 0.02, by + 14);
    ctx.lineTo(bx + w * 0.02, by + 8);
    ctx.lineTo(bx - w * 0.05, by + 8);
    ctx.closePath();
    ctx.fill();
  }
  ctx.fillStyle = '#27AE60';
  ctx.font = `${Math.max(7, w * 0.02)}px Arial`;
  ctx.textAlign = 'center'; ctx.textBaseline = 'alphabetic';
  ctx.fillText('β-sheet', s.x + w * 0.04, s.y + h * 0.34);

  ctx.fillStyle = s.color;
  ctx.font = `bold ${Math.max(9, w * 0.028)}px Arial`;
  ctx.textAlign = 'center';
  ctx.fillText(s.name, s.x, s.y + h * 0.28);

  // Tertiary: blob with motifs
  const t = levels[2];
  ctx.fillStyle = 'rgba(230,115,0,0.15)';
  ctx.strokeStyle = '#E67E22';
  ctx.lineWidth = 3;
  ctx.beginPath();
  ctx.ellipse(t.x, t.y + h * 0.15, w * 0.1, h * 0.14, 0, 0, Math.PI * 2);
  ctx.fill(); ctx.stroke();
  // Internal motifs
  ctx.strokeStyle = '#27AE60';
  ctx.lineWidth = 2;
  ctx.beginPath();
  for (let i = 0; i <= 12; i++) {
    const pt = i / 12;
    const tx2 = t.x - w * 0.06 + pt * w * 0.04;
    const ty2 = t.y + h * 0.1 + Math.sin(pt * Math.PI * 3) * h * 0.04;
    if (i === 0) ctx.moveTo(tx2, ty2); else ctx.lineTo(tx2, ty2);
  }
  ctx.stroke();
  ctx.fillStyle = '#E67E22';
  ctx.font = `bold ${Math.max(9, w * 0.028)}px Arial`;
  ctx.textAlign = 'center'; ctx.textBaseline = 'alphabetic';
  ctx.fillText(t.name, t.x, t.y + h * 0.28);
  ctx.fillStyle = '#555';
  ctx.font = `${Math.max(7, w * 0.02)}px Arial`;
  ctx.fillText('3D fold', t.x, t.y + h * 0.35);

  // Quaternary: multiple subunits
  const q = levels[3];
  const subColors = ['#9B59B6', '#6C3483', '#8E44AD', '#5B2C6F'];
  for (let i = 0; i < 4; i++) {
    const angle = (i / 4) * Math.PI * 2;
    const qx = q.x + Math.cos(angle) * w * 0.06;
    const qy = q.y + h * 0.15 + Math.sin(angle) * h * 0.07;
    ctx.fillStyle = subColors[i];
    ctx.strokeStyle = '#4A235A';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.ellipse(qx, qy, w * 0.05, h * 0.06, angle, 0, Math.PI * 2);
    ctx.fill(); ctx.stroke();
  }
  ctx.fillStyle = q.color;
  ctx.font = `bold ${Math.max(9, w * 0.028)}px Arial`;
  ctx.textAlign = 'center'; ctx.textBaseline = 'alphabetic';
  ctx.fillText(q.name, q.x, q.y + h * 0.28);
  ctx.fillStyle = '#555';
  ctx.font = `${Math.max(7, w * 0.02)}px Arial`;
  ctx.fillText('subunits', q.x, q.y + h * 0.35);

  // Arrows between levels
  for (let i = 0; i < levels.length - 1; i++) {
    const x1 = levels[i].x + w * 0.1;
    const x2 = levels[i + 1].x - w * 0.1;
    const ay = levels[i].y + h * 0.15;
    ctx.strokeStyle = '#999';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(x1, ay); ctx.lineTo(x2, ay); ctx.stroke();
    ctx.fillStyle = '#999';
    ctx.beginPath();
    ctx.moveTo(x2, ay); ctx.lineTo(x2 - 7, ay - 4); ctx.lineTo(x2 - 7, ay + 4);
    ctx.closePath(); ctx.fill();
  }

  ctx.fillStyle = '#222';
  ctx.font = `bold ${Math.max(12, w * 0.04)}px Arial`;
  ctx.textAlign = 'center'; ctx.textBaseline = 'alphabetic';
  ctx.fillText('Protein Folding Levels', w * 0.5, 22);
}

static drawSignalPeptide(ctx, width, height, componentFocus) {
  const w = width, h = height;
  const cx = w * 0.5, cy = h * 0.48;

  // Signal peptide on N-terminus
  const spLen = w * 0.2;
  const spX = w * 0.06;
  const spY = cy;

  // Signal peptide region
  const spGrad = ctx.createLinearGradient(spX, spY, spX + spLen, spY);
  spGrad.addColorStop(0, '#E74C3C');
  spGrad.addColorStop(1, '#C0392B');
  ctx.fillStyle = spGrad;
  ctx.strokeStyle = '#922B21';
  ctx.lineWidth = 3;
  ctx.beginPath();
  ctx.roundRect(spX, spY - 14, spLen, 28, [8, 0, 0, 8]);
  ctx.fill(); ctx.stroke();
  ctx.fillStyle = '#fff';
  ctx.font = `bold ${Math.max(9, w * 0.028)}px Arial`;
  ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
  ctx.fillText('Signal Peptide', spX + spLen * 0.5, spY - 4);
  ctx.font = `${Math.max(7, w * 0.02)}px Arial`;
  ctx.fillText('(15–30 aa)', spX + spLen * 0.5, spY + 6);

  // Mature protein
  const matX = spX + spLen;
  const matLen = w * 0.62;
  const matGrad = ctx.createLinearGradient(matX, spY, matX + matLen, spY);
  matGrad.addColorStop(0, '#3498DB');
  matGrad.addColorStop(1, '#1A5276');
  ctx.fillStyle = matGrad;
  ctx.strokeStyle = '#1A5276';
  ctx.lineWidth = 3;
  ctx.beginPath();
  ctx.roundRect(matX, spY - 14, matLen, 28, [0, 8, 8, 0]);
  ctx.fill(); ctx.stroke();
  ctx.fillStyle = '#fff';
  ctx.font = `bold ${Math.max(9, w * 0.028)}px Arial`;
  ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
  ctx.fillText('Mature Protein', matX + matLen * 0.5, spY);

  // Signal regions detail
  const regions = [
    { name: 'n-region', color: '#F39C12', x: spX, len: spLen * 0.25, desc: '+charged' },
    { name: 'h-region', color: '#E74C3C', x: spX + spLen * 0.25, len: spLen * 0.5, desc: 'hydrophobic' },
    { name: 'c-region', color: '#9B59B6', x: spX + spLen * 0.75, len: spLen * 0.25, desc: 'cleavage' }
  ];

  regions.forEach(r => {
    ctx.fillStyle = r.color + '55';
    ctx.strokeStyle = r.color;
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.roundRect(r.x, spY + 22, r.len - 2, h * 0.1, 3);
    ctx.fill(); ctx.stroke();
    ctx.fillStyle = r.color;
    ctx.font = `${Math.max(7, w * 0.02)}px Arial`;
    ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
    ctx.fillText(r.name, r.x + r.len * 0.5, spY + 22 + h * 0.05 - 5);
    ctx.fillText(r.desc, r.x + r.len * 0.5, spY + 22 + h * 0.05 + 5);
  });

  // SRP (Signal Recognition Particle)
  const srpX = spX + spLen * 0.5, srpY = spY - h * 0.22;
  ctx.fillStyle = '#27AE60';
  ctx.strokeStyle = '#1E8449';
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.ellipse(srpX, srpY, w * 0.1, h * 0.1, 0, 0, Math.PI * 2);
  ctx.fill(); ctx.stroke();
  ctx.fillStyle = '#fff';
  ctx.font = `bold ${Math.max(8, w * 0.024)}px Arial`;
  ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
  ctx.fillText('SRP', srpX, srpY - 5);
  ctx.font = `${Math.max(6, w * 0.018)}px Arial`;
  ctx.fillText('(binds signal)', srpX, srpY + 6);
  ctx.strokeStyle = '#27AE60';
  ctx.lineWidth = 2; ctx.setLineDash([3, 3]);
  ctx.beginPath();
  ctx.moveTo(srpX, srpY + h * 0.1); ctx.lineTo(srpX, spY - 14); ctx.stroke();
  ctx.setLineDash([]);

  // Signal peptidase cleavage
  const clvX = matX + 2;
  ctx.strokeStyle = '#E74C3C';
  ctx.lineWidth = 3;
  ctx.beginPath();
  ctx.moveTo(clvX, spY - 22); ctx.lineTo(clvX, spY + 22); ctx.stroke();
  ctx.fillStyle = '#E74C3C';
  ctx.font = `${Math.max(8, w * 0.024)}px Arial`;
  ctx.textAlign = 'center'; ctx.textBaseline = 'alphabetic';
  ctx.fillText('Signal Peptidase', clvX, spY - 26);
  ctx.fillText('cleavage site', clvX, spY + 36);

  // ER membrane
  ctx.fillStyle = 'rgba(52,152,219,0.15)';
  ctx.strokeStyle = '#3498DB';
  ctx.lineWidth = 2;
  ctx.setLineDash([5, 4]);
  ctx.beginPath();
  ctx.roundRect(w * 0.04, h * 0.72, w * 0.92, h * 0.14, 6);
  ctx.fill(); ctx.stroke();
  ctx.setLineDash([]);
  ctx.fillStyle = '#3498DB';
  ctx.font = `bold ${Math.max(9, w * 0.028)}px Arial`;
  ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
  ctx.fillText('ER Membrane / Translocon', cx, h * 0.79);

  ctx.fillStyle = '#222';
  ctx.font = `bold ${Math.max(12, w * 0.04)}px Arial`;
  ctx.textAlign = 'center'; ctx.textBaseline = 'alphabetic';
  ctx.fillText('Signal Peptide', cx, 22);
}

static drawRibosomeRecycling(ctx, width, height, componentFocus) {
  const w = width, h = height;
  const cx = w * 0.5, cy = h * 0.5;

  const stages = [
    { x: w * 0.15, y: cy, label: 'Post-termination\nComplex' },
    { x: w * 0.4, y: cy, label: 'Subunit\nSeparation' },
    { x: w * 0.65, y: cy, label: 'mRNA + tRNA\nRelease' },
    { x: w * 0.88, y: cy, label: 'Recycled\nSubunits' }
  ];

  // Stage 1: Full ribosome on mRNA with empty A site
  const s = stages[0];
  // 60S
  ctx.fillStyle = 'rgba(230,115,0,0.7)';
  ctx.strokeStyle = '#C87A15';
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.ellipse(s.x, s.y - h * 0.08, w * 0.1, h * 0.09, 0, 0, Math.PI * 2);
  ctx.fill(); ctx.stroke();
  ctx.fillStyle = '#fff';
  ctx.font = `bold ${Math.max(7, w * 0.022)}px Arial`;
  ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
  ctx.fillText('60S', s.x, s.y - h * 0.08);
  // 40S
  ctx.fillStyle = 'rgba(52,152,219,0.7)';
  ctx.strokeStyle = '#1A6FA0';
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.ellipse(s.x, s.y + h * 0.07, w * 0.1, h * 0.07, 0, 0, Math.PI * 2);
  ctx.fill(); ctx.stroke();
  ctx.fillStyle = '#fff';
  ctx.font = `bold ${Math.max(7, w * 0.022)}px Arial`;
  ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
  ctx.fillText('40S', s.x, s.y + h * 0.07);
  // mRNA
  ctx.strokeStyle = '#FF9F43';
  ctx.lineWidth = 4;
  ctx.beginPath();
  ctx.moveTo(s.x - w * 0.12, s.y + h * 0.02);
  ctx.lineTo(s.x + w * 0.12, s.y + h * 0.02);
  ctx.stroke();

  // RRF factor
  ctx.fillStyle = '#27AE60';
  ctx.beginPath();
  ctx.arc(stages[1].x + w * 0.04, stages[1].y - h * 0.18, w * 0.04, 0, Math.PI * 2);
  ctx.fill();
  ctx.fillStyle = '#fff';
  ctx.font = `bold ${Math.max(7, w * 0.02)}px Arial`;
  ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
  ctx.fillText('RRF', stages[1].x + w * 0.04, stages[1].y - h * 0.18);

  // EF-G
  ctx.fillStyle = '#E74C3C';
  ctx.beginPath();
  ctx.arc(stages[1].x - w * 0.04, stages[1].y - h * 0.18, w * 0.04, 0, Math.PI * 2);
  ctx.fill();
  ctx.fillStyle = '#fff';
  ctx.font = `bold ${Math.max(7, w * 0.02)}px Arial`;
  ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
  ctx.fillText('EF-G', stages[1].x - w * 0.04, stages[1].y - h * 0.18);

  // Stage 2: Separated subunits
  ctx.fillStyle = 'rgba(230,115,0,0.7)';
  ctx.strokeStyle = '#C87A15'; ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.ellipse(stages[1].x, stages[1].y - h * 0.1, w * 0.08, h * 0.08, 0, 0, Math.PI * 2);
  ctx.fill(); ctx.stroke();
  ctx.fillStyle = '#fff';
  ctx.font = `bold ${Math.max(7, w * 0.022)}px Arial`;
  ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
  ctx.fillText('60S', stages[1].x, stages[1].y - h * 0.1);

  ctx.fillStyle = 'rgba(52,152,219,0.7)';
  ctx.strokeStyle = '#1A6FA0'; ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.ellipse(stages[1].x, stages[1].y + h * 0.1, w * 0.08, h * 0.06, 0, 0, Math.PI * 2);
  ctx.fill(); ctx.stroke();
  ctx.fillStyle = '#fff';
  ctx.font = `bold ${Math.max(7, w * 0.022)}px Arial`;
  ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
  ctx.fillText('40S', stages[1].x, stages[1].y + h * 0.1);

  // Stage 3: mRNA/tRNA release (ABCE1)
  ctx.fillStyle = '#8E44AD';
  ctx.beginPath();
  ctx.arc(stages[2].x, stages[2].y - h * 0.18, w * 0.04, 0, Math.PI * 2);
  ctx.fill();
  ctx.fillStyle = '#fff';
  ctx.font = `bold ${Math.max(6, w * 0.018)}px Arial`;
  ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
  ctx.fillText('ABCE1', stages[2].x, stages[2].y - h * 0.18);

  ctx.strokeStyle = '#FF9F43'; ctx.lineWidth = 3; ctx.setLineDash([4, 3]);
  ctx.beginPath();
  ctx.moveTo(stages[2].x - w * 0.1, stages[2].y + h * 0.08);
  ctx.lineTo(stages[2].x + w * 0.1, stages[2].y + h * 0.08);
  ctx.stroke(); ctx.setLineDash([]);
  ctx.fillStyle = '#FF9F43';
  ctx.font = `${Math.max(7, w * 0.02)}px Arial`;
  ctx.textAlign = 'center'; ctx.textBaseline = 'alphabetic';
  ctx.fillText('mRNA released', stages[2].x, stages[2].y + h * 0.15);

  // Stage 4: Recycled - free subunits
  [[stages[3].x - w * 0.04, stages[3].y - h * 0.12, 'rgba(230,115,0,0.7)', '#C87A15', '60S'],
   [stages[3].x + w * 0.04, stages[3].y + h * 0.12, 'rgba(52,152,219,0.7)', '#1A6FA0', '40S']
  ].forEach(([rx, ry, fc, sc, lbl]) => {
    ctx.fillStyle = fc; ctx.strokeStyle = sc; ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.arc(rx, ry, w * 0.07, 0, Math.PI * 2);
    ctx.fill(); ctx.stroke();
    ctx.fillStyle = '#fff';
    ctx.font = `bold ${Math.max(8, w * 0.024)}px Arial`;
    ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
    ctx.fillText(lbl, rx, ry);
  });

  // Arrows between stages
  for (let i = 0; i < stages.length - 1; i++) {
    const ax = (stages[i].x + stages[i + 1].x) / 2;
    ctx.strokeStyle = '#999'; ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(stages[i].x + w * 0.1, stages[i].y);
    ctx.lineTo(stages[i + 1].x - w * 0.1, stages[i + 1].y);
    ctx.stroke();
    ctx.fillStyle = '#999';
    ctx.beginPath();
    ctx.moveTo(stages[i + 1].x - w * 0.1, stages[i + 1].y);
    ctx.lineTo(stages[i + 1].x - w * 0.14, stages[i + 1].y - 5);
    ctx.lineTo(stages[i + 1].x - w * 0.14, stages[i + 1].y + 5);
    ctx.closePath(); ctx.fill();
  }

  // Stage labels
  stages.forEach(s => {
    ctx.fillStyle = '#333';
    ctx.font = `${Math.max(8, w * 0.024)}px Arial`;
    ctx.textAlign = 'center'; ctx.textBaseline = 'alphabetic';
    s.label.split('\n').forEach((line, li) => {
      ctx.fillText(line, s.x, h * 0.82 + li * 14);
    });
  });

  ctx.fillStyle = '#222';
  ctx.font = `bold ${Math.max(12, w * 0.04)}px Arial`;
  ctx.textAlign = 'center';
  ctx.fillText('Ribosome Recycling', cx, 22);
}

static drawPolysome(ctx, width, height, componentFocus) {
  const w = width, h = height;
  const cx = w * 0.5, cy = h * 0.52;

  // mRNA backbone
  ctx.strokeStyle = '#FF9F43';
  ctx.lineWidth = 6;
  ctx.beginPath();
  ctx.moveTo(w * 0.04, cy + h * 0.08);
  ctx.lineTo(w * 0.96, cy + h * 0.08);
  ctx.stroke();
  ctx.fillStyle = '#FF9F43';
  ctx.font = `bold ${Math.max(9, w * 0.028)}px Arial`;
  ctx.textAlign = 'left'; ctx.textBaseline = 'alphabetic';
  ctx.fillText("5'", w * 0.04, cy + h * 0.06);
  ctx.textAlign = 'right';
  ctx.fillText("3'", w * 0.96, cy + h * 0.06);

  // 5' cap
  ctx.fillStyle = '#F57F17';
  ctx.strokeStyle = '#E65100'; ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.arc(w * 0.05, cy + h * 0.08, w * 0.025, 0, Math.PI * 2);
  ctx.fill(); ctx.stroke();
  ctx.fillStyle = '#fff';
  ctx.font = `bold ${Math.max(6, w * 0.018)}px Arial`;
  ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
  ctx.fillText('m⁷G', w * 0.05, cy + h * 0.08);

  // Poly A tail
  for (let i = 0; i < 4; i++) {
    ctx.fillStyle = '#FFD700';
    ctx.beginPath();
    ctx.arc(w * 0.91 + i * w * 0.025, cy + h * 0.08, w * 0.015, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = '#333';
    ctx.font = `bold ${Math.max(6, w * 0.016)}px Arial`;
    ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
    ctx.fillText('A', w * 0.91 + i * w * 0.025, cy + h * 0.08);
  }

  // Multiple ribosomes at different positions
  const ribPositions = [0.12, 0.28, 0.44, 0.6, 0.76];
  ribPositions.forEach((pos, idx) => {
    const rx = w * pos;
    const ry = cy + h * 0.08;

    // Growing peptide chain length (longer for earlier ribosomes)
    const chainLen = (1 - pos) * h * 0.38;

    // Peptide chain
    if (chainLen > 10) {
      ctx.strokeStyle = '#9B59B6';
      ctx.lineWidth = 3;
      ctx.beginPath();
      ctx.moveTo(rx, ry - h * 0.06);
      // Zigzag chain
      for (let i = 0; i < 6; i++) {
        const t = i / 5;
        const px2 = rx + (i % 2 === 0 ? -1 : 1) * w * 0.025;
        const py2 = ry - h * 0.06 - t * chainLen;
        if (i === 0) ctx.lineTo(px2, py2);
        else ctx.lineTo(px2, py2);
      }
      ctx.stroke();
      // Growing peptide end blob
      const pEndY = ry - h * 0.06 - chainLen;
      ctx.fillStyle = '#9B59B6';
      ctx.beginPath();
      ctx.arc(rx, pEndY, w * 0.025, 0, Math.PI * 2);
      ctx.fill();
    }

    // 60S subunit (large, top)
    const lgGrad = ctx.createRadialGradient(rx - 4, ry - h * 0.1 - 4, 3, rx, ry - h * 0.1, w * 0.08);
    lgGrad.addColorStop(0, '#F0AD4E');
    lgGrad.addColorStop(1, '#C87A15');
    ctx.fillStyle = lgGrad;
    ctx.strokeStyle = '#A0621A'; ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.ellipse(rx, ry - h * 0.1, w * 0.085, h * 0.09, 0, 0, Math.PI * 2);
    ctx.fill(); ctx.stroke();
    ctx.fillStyle = '#fff';
    ctx.font = `bold ${Math.max(7, w * 0.022)}px Arial`;
    ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
    ctx.fillText('60S', rx, ry - h * 0.1);

    // 40S subunit (small, bottom)
    const smGrad = ctx.createRadialGradient(rx - 3, ry - 3, 2, rx, ry, w * 0.065);
    smGrad.addColorStop(0, '#5DADE2');
    smGrad.addColorStop(1, '#1A6FA0');
    ctx.fillStyle = smGrad;
    ctx.strokeStyle = '#1A6FA0'; ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.ellipse(rx, ry + h * 0.02, w * 0.075, h * 0.05, 0, 0, Math.PI * 2);
    ctx.fill(); ctx.stroke();
    ctx.fillStyle = '#fff';
    ctx.font = `bold ${Math.max(7, w * 0.022)}px Arial`;
    ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
    ctx.fillText('40S', rx, ry + h * 0.02);

    // Direction of translation
    ctx.strokeStyle = '#27AE60'; ctx.lineWidth = 2;
    if (idx < ribPositions.length - 1) {
      ctx.beginPath();
      ctx.moveTo(rx + w * 0.07, ry - h * 0.06);
      ctx.lineTo(rx + w * 0.1, ry - h * 0.06);
      ctx.stroke();
      ctx.fillStyle = '#27AE60';
      ctx.font = `${Math.max(6, w * 0.018)}px Arial`;
      ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
      ctx.fillText('→', rx + w * 0.1, ry - h * 0.06);
    }
  });

  // Labels
  ctx.fillStyle = '#9B59B6';
  ctx.font = `${Math.max(8, w * 0.024)}px Arial`;
  ctx.textAlign = 'center'; ctx.textBaseline = 'alphabetic';
  ctx.fillText('← Longer peptides (5\' ribosomes)     Shorter peptides (3\' ribosomes) →', cx, h * 0.2);
  ctx.fillStyle = '#333';
  ctx.fillText('← Direction of ribosome movement (5\'→3\')', cx, h - 8);

  ctx.fillStyle = '#222';
  ctx.font = `bold ${Math.max(12, w * 0.04)}px Arial`;
  ctx.textAlign = 'center';
  ctx.fillText('Polysome (Polyribosome)', cx, 22);
}

static drawRNASplicing(ctx, width, height, componentFocus) {
  const w = width, h = height;
  const cx = w * 0.5;

  // Pre-mRNA at top
  const preY = h * 0.18;
  ctx.strokeStyle = '#FF9F43';
  ctx.lineWidth = 5;
  ctx.beginPath();
  ctx.moveTo(w * 0.04, preY); ctx.lineTo(w * 0.96, preY); ctx.stroke();

  // Exon/Intron blocks on pre-mRNA
  const blocks = [
    { x: w * 0.04, len: w * 0.16, type: 'exon', id: 'E1' },
    { x: w * 0.2, len: w * 0.18, type: 'intron', id: 'I1' },
    { x: w * 0.38, len: w * 0.16, type: 'exon', id: 'E2' },
    { x: w * 0.54, len: w * 0.16, type: 'intron', id: 'I2' },
    { x: w * 0.7, len: w * 0.14, type: 'exon', id: 'E3' },
    { x: w * 0.84, len: w * 0.12, type: 'intron', id: 'I3' }
  ];

  blocks.forEach(b => {
    ctx.fillStyle = b.type === 'exon' ? 'rgba(46,204,113,0.6)' : 'rgba(231,76,60,0.4)';
    ctx.strokeStyle = b.type === 'exon' ? '#1E8449' : '#C0392B';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.roundRect(b.x, preY - 14, b.len, 28, 4);
    ctx.fill(); ctx.stroke();
    ctx.fillStyle = b.type === 'exon' ? '#1E8449' : '#C0392B';
    ctx.font = `bold ${Math.max(8, w * 0.024)}px Arial`;
    ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
    ctx.fillText(b.id, b.x + b.len * 0.5, preY);
  });

  // Splicing arrows
  const introns = blocks.filter(b => b.type === 'intron');
  introns.forEach((intron, i) => {
    const arcX = intron.x + intron.len * 0.5;
    ctx.strokeStyle = '#8E44AD'; ctx.lineWidth = 2;
    ctx.setLineDash([4, 3]);
    ctx.beginPath();
    ctx.moveTo(intron.x, preY - 14);
    ctx.bezierCurveTo(intron.x, preY - h * 0.12, intron.x + intron.len, preY - h * 0.12, intron.x + intron.len, preY - 14);
    ctx.stroke();
    ctx.setLineDash([]);
    // Scissors
    ctx.fillStyle = '#8E44AD';
    ctx.font = `${Math.max(11, w * 0.035)}px Arial`;
    ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
    ctx.fillText('✂', arcX, preY - h * 0.14);
  });

  // Lariat intermediates
  introns.forEach((intron, i) => {
    const lx = intron.x + intron.len * 0.5;
    const ly = h * 0.46;
    ctx.strokeStyle = '#FF9F43'; ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.arc(lx, ly, w * 0.05, 0, Math.PI * 1.8);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(lx + w * 0.05, ly);
    ctx.lineTo(lx + w * 0.1, ly + h * 0.08);
    ctx.stroke();
    ctx.fillStyle = '#FF9F43';
    ctx.font = `${Math.max(7, w * 0.02)}px Arial`;
    ctx.textAlign = 'center'; ctx.textBaseline = 'alphabetic';
    ctx.fillText(intron.id, lx, ly + h * 0.14);
    ctx.fillText('(lariat)', lx, ly + h * 0.21);
  });

  // Mature mRNA at bottom
  const matY = h * 0.78;
  ctx.fillStyle = '#333';
  ctx.font = `bold ${Math.max(9, w * 0.028)}px Arial`;
  ctx.textAlign = 'left'; ctx.textBaseline = 'alphabetic';
  ctx.fillText('Mature mRNA:', w * 0.04, matY - 20);

  const exons = blocks.filter(b => b.type === 'exon');
  let curX = w * 0.24;
  exons.forEach((exon, i) => {
    ctx.fillStyle = 'rgba(46,204,113,0.8)';
    ctx.strokeStyle = '#1E8449'; ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.roundRect(curX, matY - 14, exon.len, 28, 4);
    ctx.fill(); ctx.stroke();
    ctx.fillStyle = '#fff';
    ctx.font = `bold ${Math.max(9, w * 0.028)}px Arial`;
    ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
    ctx.fillText(exon.id, curX + exon.len * 0.5, matY);
    // Joined bond
    if (i > 0) {
      ctx.strokeStyle = '#27AE60'; ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(curX - 4, matY);
      ctx.lineTo(curX, matY);
      ctx.stroke();
    }
    curX += exon.len + 2;
  });

  // Main arrow
  ctx.strokeStyle = '#999'; ctx.lineWidth = 3;
  ctx.beginPath();
  ctx.moveTo(cx, preY + 20); ctx.lineTo(cx, matY - 24); ctx.stroke();
  ctx.fillStyle = '#999';
  ctx.beginPath();
  ctx.moveTo(cx, matY - 24); ctx.lineTo(cx - 6, matY - 32); ctx.lineTo(cx + 6, matY - 32);
  ctx.closePath(); ctx.fill();
  ctx.fillStyle = '#555';
  ctx.font = `bold ${Math.max(9, w * 0.028)}px Arial`;
  ctx.textAlign = 'left'; ctx.textBaseline = 'middle';
  ctx.fillText('Splicing', cx + 8, (preY + matY) / 2);

  ctx.fillStyle = '#222';
  ctx.font = `bold ${Math.max(12, w * 0.04)}px Arial`;
  ctx.textAlign = 'center'; ctx.textBaseline = 'alphabetic';
  ctx.fillText('RNA Splicing', cx, 22);
}

static drawAlternativeSplicing(ctx, width, height, componentFocus) {
  const w = width, h = height;
  const cx = w * 0.5;

  // Pre-mRNA
  const preY = h * 0.14;
  const blocks = [
    { x: w * 0.04, len: w * 0.1, type: 'exon', id: 'E1', const: true },
    { x: w * 0.14, len: w * 0.08, type: 'intron', id: 'I1' },
    { x: w * 0.22, len: w * 0.12, type: 'exon', id: 'E2', alt: true },
    { x: w * 0.34, len: w * 0.08, type: 'intron', id: 'I2' },
    { x: w * 0.42, len: w * 0.12, type: 'exon', id: 'E3', alt: true },
    { x: w * 0.54, len: w * 0.08, type: 'intron', id: 'I3' },
    { x: w * 0.62, len: w * 0.12, type: 'exon', id: 'E4', const: true },
    { x: w * 0.74, len: w * 0.08, type: 'intron', id: 'I4' },
    { x: w * 0.82, len: w * 0.14, type: 'exon', id: 'E5', const: true }
  ];

  blocks.forEach(b => {
    if (b.type === 'exon') {
      ctx.fillStyle = b.alt ? 'rgba(230,115,0,0.7)' : 'rgba(46,204,113,0.7)';
      ctx.strokeStyle = b.alt ? '#D35400' : '#1E8449';
    } else {
      ctx.fillStyle = 'rgba(189,195,199,0.4)';
      ctx.strokeStyle = '#95A5A6';
    }
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.roundRect(b.x, preY - 12, b.len, 24, 4);
    ctx.fill(); ctx.stroke();
    ctx.fillStyle = b.type === 'exon' ? '#fff' : '#666';
    ctx.font = `bold ${Math.max(7, w * 0.02)}px Arial`;
    ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
    ctx.fillText(b.id, b.x + b.len * 0.5, preY);
  });

  ctx.fillStyle = '#333';
  ctx.font = `bold ${Math.max(9, w * 0.028)}px Arial`;
  ctx.textAlign = 'left'; ctx.textBaseline = 'alphabetic';
  ctx.fillText('pre-mRNA:', w * 0.04, preY - 18);

  // Three isoforms
  const isoforms = [
    { y: h * 0.38, exons: ['E1', 'E2', 'E3', 'E4', 'E5'], label: 'Isoform A (all exons)' },
    { y: h * 0.56, exons: ['E1', 'E2', 'E4', 'E5'], label: 'Isoform B (skip E3)' },
    { y: h * 0.74, exons: ['E1', 'E3', 'E4', 'E5'], label: 'Isoform C (skip E2)' }
  ];

  const exonBlocks = blocks.filter(b => b.type === 'exon');

  isoforms.forEach(iso => {
    ctx.fillStyle = '#555';
    ctx.font = `bold ${Math.max(8, w * 0.024)}px Arial`;
    ctx.textAlign = 'left'; ctx.textBaseline = 'alphabetic';
    ctx.fillText(iso.label, w * 0.04, iso.y - 22);

    let curX = w * 0.14;
    iso.exons.forEach((eId, ei) => {
      const orig = exonBlocks.find(e => e.id === eId);
      const isAlt = orig && orig.alt;
      ctx.fillStyle = isAlt ? 'rgba(230,115,0,0.8)' : 'rgba(46,204,113,0.8)';
      ctx.strokeStyle = isAlt ? '#D35400' : '#1E8449';
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.roundRect(curX, iso.y - 12, w * 0.12, 24, 4);
      ctx.fill(); ctx.stroke();
      ctx.fillStyle = '#fff';
      ctx.font = `bold ${Math.max(8, w * 0.024)}px Arial`;
      ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
      ctx.fillText(eId, curX + w * 0.06, iso.y);
      if (ei > 0) {
        ctx.strokeStyle = '#27AE60'; ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(curX - 2, iso.y); ctx.lineTo(curX, iso.y); ctx.stroke();
      }
      curX += w * 0.14;
    });

    // Protein product icon
    ctx.fillStyle = '#8E44AD';
    ctx.beginPath();
    ctx.arc(w * 0.9, iso.y, w * 0.04, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = '#fff';
    ctx.font = `bold ${Math.max(7, w * 0.02)}px Arial`;
    ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
    ctx.fillText('Prot', w * 0.9, iso.y);
    ctx.strokeStyle = '#8E44AD'; ctx.lineWidth = 2; ctx.setLineDash([3, 3]);
    ctx.beginPath();
    ctx.moveTo(curX, iso.y); ctx.lineTo(w * 0.86, iso.y); ctx.stroke();
    ctx.setLineDash([]);
  });

  // Branching arrows from pre-mRNA
  isoforms.forEach(iso => {
    ctx.strokeStyle = '#BDC3C7'; ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(cx, preY + 14);
    ctx.lineTo(cx, iso.y - 28);
    ctx.stroke();
  });

  // Legend
  [[' Constitutive exon', '#27AE60'], [' Alternative exon', '#E67E22']].forEach(([lbl, col], i) => {
    ctx.fillStyle = col;
    ctx.beginPath();
    ctx.roundRect(w * 0.04 + i * w * 0.4, h * 0.9, 12, 12, 2);
    ctx.fill();
    ctx.fillStyle = '#333';
    ctx.font = `${Math.max(8, w * 0.024)}px Arial`;
    ctx.textAlign = 'left'; ctx.textBaseline = 'middle';
    ctx.fillText(lbl, w * 0.04 + i * w * 0.4 + 14, h * 0.9 + 6);
  });

  ctx.fillStyle = '#222';
  ctx.font = `bold ${Math.max(12, w * 0.04)}px Arial`;
  ctx.textAlign = 'center'; ctx.textBaseline = 'alphabetic';
  ctx.fillText('Alternative Splicing', cx, 22);
}

static drawMicroRNA(ctx, width, height, componentFocus) {
  const w = width, h = height;
  const cx = w * 0.5, cy = h * 0.5;

  // miRNA biogenesis pathway
  // Pri-miRNA
  const priY = h * 0.1;
  ctx.strokeStyle = '#FF9F43'; ctx.lineWidth = 4;
  ctx.beginPath();
  ctx.moveTo(w * 0.06, priY); ctx.lineTo(w * 0.94, priY); ctx.stroke();

  // Hairpin structure
  const hairX = cx, hairTopY = priY;
  ctx.strokeStyle = '#FF9F43'; ctx.lineWidth = 4;
  ctx.beginPath();
  ctx.moveTo(hairX - w * 0.1, priY);
  ctx.bezierCurveTo(hairX - w * 0.12, priY - h * 0.1, hairX + w * 0.12, priY - h * 0.1, hairX + w * 0.1, priY);
  ctx.stroke();
  // Stem base pairs
  for (let i = 0; i < 5; i++) {
    const t = i / 4;
    const bx1 = hairX - w * 0.1 + t * w * 0.04;
    const bx2 = hairX + w * 0.1 - t * w * 0.04;
    const by = priY - t * h * 0.06;
    ctx.strokeStyle = 'rgba(100,100,100,0.4)'; ctx.lineWidth = 1;
    ctx.setLineDash([2, 2]);
    ctx.beginPath(); ctx.moveTo(bx1, by); ctx.lineTo(bx2, by); ctx.stroke();
    ctx.setLineDash([]);
  }
  ctx.fillStyle = '#FF9F43';
  ctx.font = `${Math.max(8, w * 0.024)}px Arial`;
  ctx.textAlign = 'center'; ctx.textBaseline = 'alphabetic';
  ctx.fillText('pri-miRNA', cx, priY - h * 0.12);

  // Drosha processing
  ctx.fillStyle = '#E74C3C';
  ctx.beginPath();
  ctx.arc(cx + w * 0.18, priY, w * 0.05, 0, Math.PI * 2);
  ctx.fill();
  ctx.fillStyle = '#fff';
  ctx.font = `bold ${Math.max(7, w * 0.022)}px Arial`;
  ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
  ctx.fillText('Drosha', cx + w * 0.18, priY);

  // Arrow down
  ctx.strokeStyle = '#999'; ctx.lineWidth = 3;
  ctx.beginPath();
  ctx.moveTo(cx, priY + 8); ctx.lineTo(cx, h * 0.3 - 8); ctx.stroke();
  ctx.fillStyle = '#999';
  ctx.beginPath();
  ctx.moveTo(cx, h * 0.3 - 8); ctx.lineTo(cx - 5, h * 0.3 - 16); ctx.lineTo(cx + 5, h * 0.3 - 16);
  ctx.closePath(); ctx.fill();
  ctx.fillStyle = '#555';
  ctx.font = `${Math.max(8, w * 0.024)}px Arial`;
  ctx.textAlign = 'left'; ctx.textBaseline = 'middle';
  ctx.fillText('Nuclear export', cx + 8, (priY + h * 0.3) / 2);

  // Pre-miRNA hairpin
  const preY = h * 0.34;
  for (let s = 0; s < 2; s++) {
    ctx.strokeStyle = '#FF9F43'; ctx.lineWidth = 4;
    ctx.beginPath();
    ctx.moveTo(cx - w * 0.08 + s * w * 0.04, preY);
    for (let i = 0; i <= 20; i++) {
      const t = i / 20;
      const py = preY + t * h * 0.14;
      const px = cx - w * 0.08 + s * w * 0.04 + (s === 0 ? -1 : 1) * Math.sin(t * Math.PI * 2) * w * 0.02;
      if (i === 0) ctx.moveTo(px, py); else ctx.lineTo(px, py);
    }
    ctx.stroke();
  }
  // Loop
  ctx.strokeStyle = '#FF9F43'; ctx.lineWidth = 4;
  ctx.beginPath();
  ctx.arc(cx, preY + h * 0.14, w * 0.04, 0, Math.PI);
  ctx.stroke();
  ctx.fillStyle = '#FF9F43';
  ctx.font = `${Math.max(8, w * 0.024)}px Arial`;
  ctx.textAlign = 'right'; ctx.textBaseline = 'middle';
  ctx.fillText('pre-miRNA', cx - w * 0.1, preY + h * 0.07);

  // Dicer
  ctx.fillStyle = '#9B59B6';
  ctx.beginPath();
  ctx.arc(cx + w * 0.22, preY + h * 0.07, w * 0.055, 0, Math.PI * 2);
  ctx.fill();
  ctx.fillStyle = '#fff';
  ctx.font = `bold ${Math.max(8, w * 0.024)}px Arial`;
  ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
  ctx.fillText('Dicer', cx + w * 0.22, preY + h * 0.07);

  ctx.strokeStyle = '#999'; ctx.lineWidth = 3;
  ctx.beginPath();
  ctx.moveTo(cx, preY + h * 0.18 + 4); ctx.lineTo(cx, h * 0.62 - 8); ctx.stroke();
  ctx.fillStyle = '#999';
  ctx.beginPath();
  ctx.moveTo(cx, h * 0.62 - 8); ctx.lineTo(cx - 5, h * 0.62 - 16); ctx.lineTo(cx + 5, h * 0.62 - 16);
  ctx.closePath(); ctx.fill();

  // Duplex miRNA
  const dupY = h * 0.65;
  for (let s = 0; s < 2; s++) {
    ctx.strokeStyle = s === 0 ? '#FF6B6B' : '#FFB6C1';
    ctx.lineWidth = 5;
    ctx.beginPath();
    ctx.moveTo(cx - w * 0.15, dupY + s * 12 - 6);
    ctx.lineTo(cx + w * 0.15, dupY + s * 12 - 6);
    ctx.stroke();
  }
  ctx.fillStyle = '#333';
  ctx.font = `${Math.max(8, w * 0.024)}px Arial`;
  ctx.textAlign = 'right'; ctx.textBaseline = 'middle';
  ctx.fillText('miRNA:miRNA* duplex', cx - w * 0.16, dupY);

  // RISC loading
  ctx.strokeStyle = '#999'; ctx.lineWidth = 3;
  ctx.beginPath();
  ctx.moveTo(cx, dupY + 10); ctx.lineTo(cx, h * 0.82 - 8); ctx.stroke();
  ctx.fillStyle = '#999';
  ctx.beginPath();
  ctx.moveTo(cx, h * 0.82 - 8); ctx.lineTo(cx - 5, h * 0.82 - 16); ctx.lineTo(cx + 5, h * 0.82 - 16);
  ctx.closePath(); ctx.fill();

  // RISC complex
  const riscY = h * 0.86;
  ctx.fillStyle = '#E67E22';
  ctx.beginPath();
  ctx.ellipse(cx, riscY, w * 0.12, h * 0.06, 0, 0, Math.PI * 2);
  ctx.fill();
  ctx.strokeStyle = '#D35400'; ctx.lineWidth = 2; ctx.stroke();
  ctx.fillStyle = '#fff';
  ctx.font = `bold ${Math.max(8, w * 0.024)}px Arial`;
  ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
  ctx.fillText('RISC + miRNA', cx, riscY);

  ctx.fillStyle = '#222';
  ctx.font = `bold ${Math.max(12, w * 0.04)}px Arial`;
  ctx.textAlign = 'center'; ctx.textBaseline = 'alphabetic';
  ctx.fillText('microRNA (miRNA) Biogenesis', cx, 22);
}

static drawSiRNA(ctx, width, height, componentFocus) {
  const w = width, h = height;
  const cx = w * 0.5, cy = h * 0.5;

  // dsRNA trigger
  const dsY = h * 0.15;
  for (let s = 0; s < 2; s++) {
    ctx.strokeStyle = s === 0 ? '#4A90E2' : '#E24A4A';
    ctx.lineWidth = 6;
    ctx.beginPath();
    ctx.moveTo(w * 0.1, dsY + s * 14 - 7);
    ctx.lineTo(w * 0.9, dsY + s * 14 - 7);
    ctx.stroke();
  }
  ctx.fillStyle = '#333';
  ctx.font = `bold ${Math.max(9, w * 0.028)}px Arial`;
  ctx.textAlign = 'center'; ctx.textBaseline = 'alphabetic';
  ctx.fillText('Long dsRNA (trigger)', cx, dsY - 12);

  // Dicer cleavage
  const dicerX = cx, dicerY = h * 0.3;
  ctx.fillStyle = '#9B59B6';
  ctx.beginPath();
  ctx.arc(dicerX, dicerY, w * 0.07, 0, Math.PI * 2);
  ctx.fill();
  ctx.strokeStyle = '#6C3483'; ctx.lineWidth = 2; ctx.stroke();
  ctx.fillStyle = '#fff';
  ctx.font = `bold ${Math.max(9, w * 0.028)}px Arial`;
  ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
  ctx.fillText('Dicer', dicerX, dicerY);

  ctx.strokeStyle = '#999'; ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.moveTo(cx, dsY + 8); ctx.lineTo(cx, dicerY - w * 0.07); ctx.stroke();
  ctx.beginPath();
  ctx.moveTo(cx, dicerY + w * 0.07); ctx.lineTo(cx, h * 0.43 - 8); ctx.stroke();
  [[cx - 5, h * 0.43 - 8], [cx + 5, h * 0.43 - 8]].forEach(([px, py]) => {
    ctx.fillStyle = '#999';
    ctx.beginPath();
    ctx.moveTo(cx, h * 0.43 - 8); ctx.lineTo(px, py + 8); ctx.lineTo(px + (cx - px) * 2, py + 8);
    ctx.closePath(); ctx.fill();
  });

  // siRNA duplex (21–23 nt)
  const siY = h * 0.48;
  for (let s = 0; s < 2; s++) {
    ctx.strokeStyle = s === 0 ? '#4A90E2' : '#E24A4A';
    ctx.lineWidth = 5;
    ctx.beginPath();
    ctx.moveTo(cx - w * 0.18, siY + s * 12 - 6);
    ctx.lineTo(cx + w * 0.18, siY + s * 12 - 6);
    ctx.stroke();
  }
  // 2-nt 3' overhangs
  [-1, 1].forEach(side => {
    ctx.strokeStyle = '#4A90E2'; ctx.lineWidth = 4;
    ctx.beginPath();
    ctx.moveTo(cx + side * w * 0.18, siY - 6);
    ctx.lineTo(cx + side * w * 0.22, siY - 6);
    ctx.stroke();
    ctx.strokeStyle = '#E24A4A';
    ctx.beginPath();
    ctx.moveTo(cx + side * (w * 0.18 - w * 0.04), siY + 6);
    ctx.lineTo(cx + side * (w * 0.18 - w * 0.08), siY + 6);
    ctx.stroke();
  });
  ctx.fillStyle = '#333';
  ctx.font = `${Math.max(8, w * 0.024)}px Arial`;
  ctx.textAlign = 'center'; ctx.textBaseline = 'alphabetic';
  ctx.fillText('siRNA duplex (21–23 nt, 2-nt 3\' overhangs)', cx, siY - 14);

  // RISC loading & Ago2
  const risc2Y = h * 0.67;
  ctx.strokeStyle = '#999'; ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.moveTo(cx, siY + 8); ctx.lineTo(cx, risc2Y - h * 0.06); ctx.stroke();

  ctx.fillStyle = '#E67E22';
  ctx.beginPath();
  ctx.ellipse(cx, risc2Y, w * 0.16, h * 0.07, 0, 0, Math.PI * 2);
  ctx.fill();
  ctx.strokeStyle = '#D35400'; ctx.lineWidth = 2; ctx.stroke();
  ctx.fillStyle = '#fff';
  ctx.font = `bold ${Math.max(9, w * 0.028)}px Arial`;
  ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
  ctx.fillText('RISC (Ago2)', cx, risc2Y - 6);
  ctx.font = `${Math.max(7, w * 0.02)}px Arial`;
  ctx.fillText('Passenger strand cleaved', cx, risc2Y + 7);

  // Target mRNA cleavage
  const targY = h * 0.85;
  ctx.strokeStyle = '#FF9F43'; ctx.lineWidth = 5;
  ctx.beginPath();
  ctx.moveTo(w * 0.08, targY); ctx.lineTo(cx - w * 0.04, targY); ctx.stroke();
  ctx.beginPath();
  ctx.moveTo(cx + w * 0.04, targY); ctx.lineTo(w * 0.92, targY); ctx.stroke();
  ctx.strokeStyle = '#E74C3C'; ctx.lineWidth = 3;
  ctx.beginPath();
  ctx.moveTo(cx, targY - 12); ctx.lineTo(cx, targY + 12); ctx.stroke();
  ctx.fillStyle = '#E74C3C';
  ctx.font = `bold ${Math.max(8, w * 0.024)}px Arial`;
  ctx.textAlign = 'center'; ctx.textBaseline = 'alphabetic';
  ctx.fillText('✂ Target mRNA cleavage', cx, targY - 16);

  ctx.strokeStyle = '#999'; ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.moveTo(cx, risc2Y + h * 0.07); ctx.lineTo(cx, targY - 14); ctx.stroke();

  ctx.fillStyle = '#222';
  ctx.font = `bold ${Math.max(12, w * 0.04)}px Arial`;
  ctx.textAlign = 'center'; ctx.textBaseline = 'alphabetic';
  ctx.fillText('siRNA Pathway', cx, 22);
}

static drawLncRNA(ctx, width, height, componentFocus) {
  const w = width, h = height;
  const cx = w * 0.5;

  const types = [
    { name: 'lincRNA', y: h * 0.22, color: '#3498DB', desc: 'Long intergenic ncRNA – chromatin remodeling', icon: 'chr' },
    { name: 'eRNA', y: h * 0.38, color: '#27AE60', desc: 'Enhancer RNA – transcriptional activation', icon: 'enh' },
    { name: 'Antisense lncRNA', y: h * 0.54, color: '#E74C3C', desc: 'Overlaps protein-coding gene antisense', icon: 'anti' },
    { name: 'NEAT1 / MALAT1', y: h * 0.7, color: '#9B59B6', desc: 'Nuclear retention & splicing regulation', icon: 'nuc' },
    { name: 'XIST', y: h * 0.86, color: '#E67E22', desc: 'X-chromosome inactivation (dosage compensation)', icon: 'X' }
  ];

  types.forEach(t => {
    // Background bar
    ctx.fillStyle = t.color + '22';
    ctx.strokeStyle = t.color;
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.roundRect(w * 0.04, t.y - h * 0.06, w * 0.92, h * 0.1, 6);
    ctx.fill(); ctx.stroke();

    // Icon badge
    ctx.fillStyle = t.color;
    ctx.beginPath();
    ctx.roundRect(w * 0.05, t.y - h * 0.045, w * 0.1, h * 0.07, 4);
    ctx.fill();
    ctx.fillStyle = '#fff';
    ctx.font = `bold ${Math.max(8, w * 0.024)}px Arial`;
    ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
    ctx.fillText(t.icon, w * 0.1, t.y);

    // RNA wavy line
    ctx.strokeStyle = t.color;
    ctx.lineWidth = 3;
    ctx.beginPath();
    for (let i = 0; i <= 30; i++) {
      const rxt = w * 0.17 + (i / 30) * w * 0.38;
      const ryt = t.y + Math.sin(i * 0.8) * h * 0.025;
      if (i === 0) ctx.moveTo(rxt, ryt); else ctx.lineTo(rxt, ryt);
    }
    ctx.stroke();
    ctx.fillStyle = t.color;
    ctx.font = `bold ${Math.max(7, w * 0.022)}px Arial`;
    ctx.textAlign = 'left'; ctx.textBaseline = 'middle';
    ctx.fillText('> 200 nt', w * 0.17, t.y - h * 0.04);

    // Name and description
    ctx.fillStyle = t.color;
    ctx.font = `bold ${Math.max(9, w * 0.028)}px Arial`;
    ctx.textAlign = 'left'; ctx.textBaseline = 'middle';
    ctx.fillText(t.name, w * 0.58, t.y - 6);
    ctx.fillStyle = '#555';
    ctx.font = `${Math.max(7, w * 0.02)}px Arial`;
    ctx.fillText(t.desc, w * 0.58, t.y + 6);
  });

  ctx.fillStyle = '#222';
  ctx.font = `bold ${Math.max(12, w * 0.04)}px Arial`;
  ctx.textAlign = 'center'; ctx.textBaseline = 'alphabetic';
  ctx.fillText('Long Non-coding RNA (lncRNA)', cx, 22);
}

static drawRNASecondaryStructure(ctx, width, height, componentFocus) {
  const w = width, h = height;
  const cx = w * 0.5, cy = h * 0.5;

  // Hairpin loop (top left)
  const drawHairpin = (x, y, label) => {
    ctx.strokeStyle = '#FF9F43'; ctx.lineWidth = 4;
    for (let s = 0; s < 2; s++) {
      ctx.beginPath();
      const sx = x + s * w * 0.06;
      for (let i = 0; i <= 15; i++) {
        const t = i / 15;
        const px2 = sx + (s === 0 ? -1 : 1) * Math.sin(t * Math.PI) * w * 0.015;
        const py2 = y + t * h * 0.16;
        if (i === 0) ctx.moveTo(px2, py2); else ctx.lineTo(px2, py2);
      }
      ctx.stroke();
    }
    ctx.beginPath();
    ctx.arc(x + w * 0.03, y + h * 0.16, w * 0.03, 0, Math.PI);
    ctx.stroke();
    // Base pairs
    for (let i = 0; i < 5; i++) {
      const py = y + i * h * 0.028;
      ctx.strokeStyle = 'rgba(150,150,150,0.5)'; ctx.lineWidth = 1;
      ctx.setLineDash([2, 2]);
      ctx.beginPath();
      ctx.moveTo(x, py); ctx.lineTo(x + w * 0.06, py); ctx.stroke();
      ctx.setLineDash([]);
    }
    ctx.fillStyle = '#FF9F43';
    ctx.font = `bold ${Math.max(8, w * 0.024)}px Arial`;
    ctx.textAlign = 'center'; ctx.textBaseline = 'alphabetic';
    ctx.fillText(label, x + w * 0.03, y - 8);
  };

  const drawBulge = (x, y) => {
    ctx.strokeStyle = '#4ECDC4'; ctx.lineWidth = 4;
    ctx.beginPath();
    for (let i = 0; i <= 20; i++) {
      const t = i / 20;
      const py = y + t * h * 0.2;
      const bulge = (t > 0.4 && t < 0.6) ? (s => s === 0 ? -w * 0.04 : 0)(0) : 0;
      ctx.lineTo(x + bulge, py);
      if (i === 0) { ctx.moveTo(x + bulge, py); }
    }
    ctx.stroke();
    ctx.strokeStyle = '#4ECDC4'; ctx.lineWidth = 4;
    ctx.beginPath();
    for (let i = 0; i <= 20; i++) {
      const t = i / 20;
      const py = y + t * h * 0.2;
      ctx.lineTo(x + w * 0.06, py);
      if (i === 0) { ctx.moveTo(x + w * 0.06, py); }
    }
    ctx.stroke();
    // Bulge bubble
    ctx.fillStyle = 'rgba(78,205,196,0.3)';
    ctx.strokeStyle = '#4ECDC4'; ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.arc(x - w * 0.03, y + h * 0.1, w * 0.025, 0, Math.PI * 2);
    ctx.fill(); ctx.stroke();
    ctx.fillStyle = '#4ECDC4';
    ctx.font = `bold ${Math.max(8, w * 0.024)}px Arial`;
    ctx.textAlign = 'center'; ctx.textBaseline = 'alphabetic';
    ctx.fillText('Bulge', x, y - 8);
  };

  const drawInternalLoop = (x, y) => {
    ctx.strokeStyle = '#95E1D3'; ctx.lineWidth = 4;
    [[x, x + w * 0.06]].forEach(([lx, rx]) => {
      ctx.beginPath();
      for (let i = 0; i <= 20; i++) {
        const t = i / 20;
        const py = y + t * h * 0.2;
        const gap = (t > 0.38 && t < 0.62) ? (lx === x ? -w * 0.04 : w * 0.04) : 0;
        if (i === 0) ctx.moveTo(lx + gap, py); else ctx.lineTo(lx + gap, py);
      }
      ctx.stroke();
    });
    ctx.fillStyle = 'rgba(149,225,211,0.3)';
    ctx.strokeStyle = '#95E1D3'; ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.ellipse(x + w * 0.03, y + h * 0.1, w * 0.06, h * 0.04, 0, 0, Math.PI * 2);
    ctx.fill(); ctx.stroke();
    ctx.fillStyle = '#95E1D3';
    ctx.font = `bold ${Math.max(7, w * 0.02)}px Arial`;
    ctx.textAlign = 'center'; ctx.textBaseline = 'alphabetic';
    ctx.fillText('Internal Loop', x + w * 0.03, y - 8);
  };

  const drawJunction = (x, y) => {
    // Multi-stem junction
    for (let i = 0; i < 3; i++) {
      const angle = (i / 3) * Math.PI * 2 - Math.PI * 0.5;
      const ex = x + Math.cos(angle) * w * 0.1;
      const ey = y + Math.sin(angle) * h * 0.12;
      ctx.strokeStyle = '#FFD93D'; ctx.lineWidth = 4;
      ctx.beginPath();
      ctx.moveTo(x, y); ctx.lineTo(ex, ey); ctx.stroke();
      ctx.fillStyle = '#FFD93D';
      ctx.beginPath();
      ctx.arc(ex, ey, w * 0.03, 0, Math.PI * 2);
      ctx.fill();
    }
    ctx.fillStyle = '#F5CBA7';
    ctx.strokeStyle = '#FFD93D'; ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.arc(x, y, w * 0.04, 0, Math.PI * 2);
    ctx.fill(); ctx.stroke();
    ctx.fillStyle = '#D35400';
    ctx.font = `${Math.max(7, w * 0.02)}px Arial`;
    ctx.textAlign = 'center'; ctx.textBaseline = 'alphabetic';
    ctx.fillText('3-way', x, y + h * 0.18);
    ctx.fillText('Junction', x, y + h * 0.25);
  };

  // Render each motif
  drawHairpin(w * 0.12, h * 0.14, 'Hairpin Loop');
  drawBulge(w * 0.32, h * 0.14);
  drawInternalLoop(w * 0.53, h * 0.14);
  drawJunction(w * 0.78, h * 0.35);

  // Pseudoknot
  const pkX = w * 0.18, pkY = h * 0.62;
  ctx.strokeStyle = '#E74C3C'; ctx.lineWidth = 3;
  ctx.beginPath();
  ctx.arc(pkX, pkY, w * 0.1, Math.PI, 0); ctx.stroke();
  ctx.strokeStyle = '#9B59B6'; ctx.lineWidth = 3;
  ctx.beginPath();
  ctx.arc(pkX, pkY + h * 0.06, w * 0.07, 0, Math.PI); ctx.stroke();
  ctx.fillStyle = '#333';
  ctx.font = `bold ${Math.max(8, w * 0.024)}px Arial`;
  ctx.textAlign = 'center'; ctx.textBaseline = 'alphabetic';
  ctx.fillText('Pseudoknot', pkX, pkY + h * 0.2);

  // G-quadruplex
  const gqX = w * 0.62, gqY = h * 0.62;
  for (let i = 0; i < 4; i++) {
    const angle = (i / 4) * Math.PI * 2;
    ctx.fillStyle = '#27AE60';
    ctx.strokeStyle = '#1E8449'; ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.arc(gqX + Math.cos(angle) * w * 0.06, gqY + Math.sin(angle) * h * 0.08, w * 0.025, 0, Math.PI * 2);
    ctx.fill(); ctx.stroke();
    ctx.fillStyle = '#fff';
    ctx.font = `bold ${Math.max(7, w * 0.02)}px Arial`;
    ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
    ctx.fillText('G', gqX + Math.cos(angle) * w * 0.06, gqY + Math.sin(angle) * h * 0.08);
  }
  ctx.fillStyle = '#F39C12';
  ctx.beginPath();
  ctx.arc(gqX, gqY, w * 0.03, 0, Math.PI * 2);
  ctx.fill();
  ctx.fillStyle = '#fff';
  ctx.font = `bold ${Math.max(6, w * 0.018)}px Arial`;
  ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
  ctx.fillText('K⁺', gqX, gqY);
  ctx.fillStyle = '#333';
  ctx.font = `bold ${Math.max(8, w * 0.024)}px Arial`;
  ctx.textAlign = 'center'; ctx.textBaseline = 'alphabetic';
  ctx.fillText('G-quadruplex', gqX, gqY + h * 0.18);

  ctx.fillStyle = '#222';
  ctx.font = `bold ${Math.max(12, w * 0.04)}px Arial`;
  ctx.textAlign = 'center';
  ctx.fillText('RNA Secondary Structures', cx, 22);
}

static drawRibozyme(ctx, width, height, componentFocus) {
  const w = width, h = height;
  const cx = w * 0.5, cy = h * 0.5;

  // Hammerhead ribozyme structure
  // Three stems radiating
  const stems = [
    { angle: -Math.PI * 0.5, color: '#E74C3C', label: 'Stem I', seq: 'GGC...GCC' },
    { angle: Math.PI * 0.16, color: '#3498DB', label: 'Stem II', seq: 'GAA...UUC' },
    { angle: Math.PI * 0.84, color: '#27AE60', label: 'Stem III', seq: 'AGU...ACU' }
  ];

  stems.forEach(stem => {
    const ex = cx + Math.cos(stem.angle) * w * 0.3;
    const ey = cy + Math.sin(stem.angle) * h * 0.3;

    // Double strand stem
    for (let s = 0; s < 2; s++) {
      const perpAngle = stem.angle + Math.PI * 0.5;
      const off = (s - 0.5) * w * 0.015;
      ctx.strokeStyle = stem.color;
      ctx.lineWidth = 4;
      ctx.beginPath();
      ctx.moveTo(cx + Math.cos(perpAngle) * off, cy + Math.sin(perpAngle) * off);
      ctx.lineTo(ex + Math.cos(perpAngle) * off, ey + Math.sin(perpAngle) * off);
      ctx.stroke();
    }

    // Loop at end
    ctx.fillStyle = stem.color + '55';
    ctx.strokeStyle = stem.color; ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.arc(ex, ey, w * 0.04, 0, Math.PI * 2);
    ctx.fill(); ctx.stroke();

    // Base pair ticks
    for (let i = 1; i <= 4; i++) {
      const t = i / 5;
      const bx = cx + Math.cos(stem.angle) * w * 0.3 * t;
      const by = cy + Math.sin(stem.angle) * h * 0.3 * t;
      const perpA = stem.angle + Math.PI * 0.5;
      ctx.strokeStyle = 'rgba(100,100,100,0.4)'; ctx.lineWidth = 1;
      ctx.setLineDash([2, 2]);
      ctx.beginPath();
      ctx.moveTo(bx + Math.cos(perpA) * w * 0.015, by + Math.sin(perpA) * h * 0.015);
      ctx.lineTo(bx - Math.cos(perpA) * w * 0.015, by - Math.sin(perpA) * h * 0.015);
      ctx.stroke(); ctx.setLineDash([]);
    }

    // Label
    ctx.fillStyle = stem.color;
    ctx.font = `bold ${Math.max(8, w * 0.024)}px Arial`;
    ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
    const labelX = cx + Math.cos(stem.angle) * w * 0.38;
    const labelY = cy + Math.sin(stem.angle) * h * 0.38;
    ctx.fillText(stem.label, labelX, labelY);
  });

  // Catalytic core
  const coreGrad = ctx.createRadialGradient(cx - 6, cy - 6, 4, cx, cy, w * 0.1);
  coreGrad.addColorStop(0, 'rgba(255,215,0,0.8)');
  coreGrad.addColorStop(1, 'rgba(255,140,0,0.5)');
  ctx.fillStyle = coreGrad;
  ctx.strokeStyle = '#E67E22'; ctx.lineWidth = 3;
  ctx.beginPath();
  ctx.arc(cx, cy, w * 0.1, 0, Math.PI * 2);
  ctx.fill(); ctx.stroke();
  ctx.fillStyle = '#333';
  ctx.font = `bold ${Math.max(8, w * 0.024)}px Arial`;
  ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
  ctx.fillText('Catalytic', cx, cy - 6);
  ctx.fillText('Core', cx, cy + 6);

  // Mg2+ in active site
  ctx.fillStyle = '#F39C12';
  ctx.beginPath();
  ctx.arc(cx + w * 0.06, cy + h * 0.04, w * 0.025, 0, Math.PI * 2);
  ctx.fill();
  ctx.fillStyle = '#fff';
  ctx.font = `bold ${Math.max(6, w * 0.018)}px Arial`;
  ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
  ctx.fillText('Mg²⁺', cx + w * 0.06, cy + h * 0.04);

  // Cleavage site indicator
  ctx.strokeStyle = '#E74C3C'; ctx.lineWidth = 3;
  ctx.setLineDash([3, 3]);
  ctx.beginPath();
  ctx.arc(cx, cy, w * 0.13, Math.PI * 0.3, Math.PI * 0.6);
  ctx.stroke(); ctx.setLineDash([]);
  ctx.fillStyle = '#E74C3C';
  ctx.font = `${Math.max(7, w * 0.02)}px Arial`;
  ctx.textAlign = 'left'; ctx.textBaseline = 'alphabetic';
  ctx.fillText('Cleavage site', cx + w * 0.1, cy + h * 0.14);

  ctx.fillStyle = '#222';
  ctx.font = `bold ${Math.max(12, w * 0.04)}px Arial`;
  ctx.textAlign = 'center'; ctx.textBaseline = 'alphabetic';
  ctx.fillText('Hammerhead Ribozyme', cx, 22);
}

static drawRNAEditing(ctx, width, height, componentFocus) {
  const w = width, h = height;
  const cx = w * 0.5;

  // Two types: A-to-I and C-to-U
  const types = [
    { y: h * 0.35, type: 'A→I', enzyme: 'ADAR', color: '#3498DB', before: 'A', after: 'I (read as G)', desc: 'Adenosine Deaminase' },
    { y: h * 0.7, type: 'C→U', enzyme: 'APOBEC', color: '#E74C3C', before: 'C', after: 'U', desc: 'Cytidine Deaminase' }
  ];

  types.forEach(t => {
    // Pre-editing mRNA
    ctx.strokeStyle = '#FF9F43'; ctx.lineWidth = 5;
    ctx.beginPath();
    ctx.moveTo(w * 0.04, t.y - 12); ctx.lineTo(w * 0.96, t.y - 12); ctx.stroke();

    // Target base (before)
    ctx.fillStyle = t.color;
    ctx.strokeStyle = t.color; ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.arc(cx - w * 0.08, t.y - 12, w * 0.04, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = '#fff';
    ctx.font = `bold ${Math.max(10, w * 0.032)}px Arial`;
    ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
    ctx.fillText(t.before, cx - w * 0.08, t.y - 12);

    // Enzyme
    const enzGrad = ctx.createRadialGradient(cx - 5, t.y - h * 0.08, 3, cx, t.y - h * 0.08, w * 0.1);
    enzGrad.addColorStop(0, t.color + 'AA');
    enzGrad.addColorStop(1, t.color + '44');
    ctx.fillStyle = enzGrad;
    ctx.strokeStyle = t.color; ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.ellipse(cx, t.y - h * 0.1, w * 0.12, h * 0.07, 0, 0, Math.PI * 2);
    ctx.fill(); ctx.stroke();
    ctx.fillStyle = t.color;
    ctx.font = `bold ${Math.max(8, w * 0.024)}px Arial`;
    ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
    ctx.fillText(t.enzyme, cx, t.y - h * 0.1 - 5);
    ctx.font = `${Math.max(7, w * 0.02)}px Arial`;
    ctx.fillText(t.desc, cx, t.y - h * 0.1 + 6);

    // Arrow
    ctx.strokeStyle = t.color; ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.moveTo(cx - w * 0.04, t.y - 12);
    ctx.lineTo(cx + w * 0.04, t.y - 12);
    ctx.stroke();
    ctx.fillStyle = t.color;
    ctx.font = `bold ${Math.max(9, w * 0.028)}px Arial`;
    ctx.textAlign = 'center'; ctx.textBaseline = 'alphabetic';
    ctx.fillText(t.type, cx, t.y - 22);

    // After base
    ctx.fillStyle = '#27AE60';
    ctx.strokeStyle = '#1E8449'; ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.arc(cx + w * 0.1, t.y - 12, w * 0.05, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = '#fff';
    ctx.font = `bold ${Math.max(8, w * 0.024)}px Arial`;
    ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
    ctx.fillText(t.after.split(' ')[0], cx + w * 0.1, t.y - 12);
    ctx.fillStyle = '#27AE60';
    ctx.font = `${Math.max(7, w * 0.02)}px Arial`;
    ctx.textBaseline = 'alphabetic';
    ctx.fillText(t.after, cx + w * 0.22, t.y - 8);

    // Consequences
    ctx.fillStyle = '#555';
    ctx.font = `${Math.max(8, w * 0.024)}px Arial`;
    ctx.textAlign = 'center'; ctx.textBaseline = 'alphabetic';
    const consequence = t.type === 'A→I' ? 'Recoding, splicing changes, miRNA target alteration'
                                          : 'Stop codon creation, protein truncation (ApoB)';
    ctx.fillText(consequence, cx, t.y + 8);
  });

  ctx.fillStyle = '#222';
  ctx.font = `bold ${Math.max(12, w * 0.04)}px Arial`;
  ctx.textAlign = 'center'; ctx.textBaseline = 'alphabetic';
  ctx.fillText('RNA Editing', cx, 22);
}

static drawRNAInterference(ctx, width, height, componentFocus) {
  const w = width, h = height;
  const cx = w * 0.5;

  // dsRNA / pre-miRNA input
  const inputY = h * 0.12;
  for (let s = 0; s < 2; s++) {
    ctx.strokeStyle = s === 0 ? '#4A90E2' : '#E24A4A';
    ctx.lineWidth = 5;
    ctx.beginPath();
    ctx.moveTo(w * 0.15, inputY + s * 12 - 6); ctx.lineTo(w * 0.85, inputY + s * 12 - 6); ctx.stroke();
  }
  ctx.fillStyle = '#333';
  ctx.font = `bold ${Math.max(9, w * 0.028)}px Arial`;
  ctx.textAlign = 'center'; ctx.textBaseline = 'alphabetic';
  ctx.fillText('dsRNA trigger', cx, inputY - 12);

  // Dicer
  ctx.strokeStyle = '#999'; ctx.lineWidth = 2;
  ctx.beginPath(); ctx.moveTo(cx, inputY + 8); ctx.lineTo(cx, h * 0.28 - 8); ctx.stroke();
  ctx.fillStyle = '#9B59B6';
  ctx.beginPath();
  ctx.ellipse(cx, h * 0.28, w * 0.1, h * 0.06, 0, 0, Math.PI * 2);
  ctx.fill();
  ctx.strokeStyle = '#6C3483'; ctx.lineWidth = 2; ctx.stroke();
  ctx.fillStyle = '#fff';
  ctx.font = `bold ${Math.max(9, w * 0.028)}px Arial`;
  ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
  ctx.fillText('Dicer', cx, h * 0.28);

  // siRNA/miRNA duplexes
  ctx.strokeStyle = '#999'; ctx.lineWidth = 2;
  ctx.beginPath(); ctx.moveTo(cx, h * 0.34); ctx.lineTo(cx, h * 0.42 - 8); ctx.stroke();
  for (let s = 0; s < 2; s++) {
    ctx.strokeStyle = s === 0 ? '#4A90E2' : '#E24A4A';
    ctx.lineWidth = 4;
    ctx.beginPath();
    ctx.moveTo(cx - w * 0.16, h * 0.42 + s * 10 - 5); ctx.lineTo(cx + w * 0.16, h * 0.42 + s * 10 - 5); ctx.stroke();
  }
  ctx.fillStyle = '#333';
  ctx.font = `${Math.max(8, w * 0.024)}px Arial`;
  ctx.textAlign = 'center'; ctx.textBaseline = 'alphabetic';
  ctx.fillText('Small RNA duplex (~22 nt)', cx, h * 0.38);

  // RISC loading
  ctx.strokeStyle = '#999'; ctx.lineWidth = 2;
  ctx.beginPath(); ctx.moveTo(cx, h * 0.47); ctx.lineTo(cx, h * 0.55 - 8); ctx.stroke();
  ctx.fillStyle = '#E67E22';
  ctx.beginPath();
  ctx.ellipse(cx, h * 0.55, w * 0.15, h * 0.07, 0, 0, Math.PI * 2);
  ctx.fill();
  ctx.strokeStyle = '#D35400'; ctx.lineWidth = 2; ctx.stroke();
  ctx.fillStyle = '#fff';
  ctx.font = `bold ${Math.max(9, w * 0.028)}px Arial`;
  ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
  ctx.fillText('RISC + Ago2', cx, h * 0.55);

  // Strand selection
  ctx.strokeStyle = '#999'; ctx.lineWidth = 2;
  ctx.beginPath(); ctx.moveTo(cx, h * 0.62); ctx.lineTo(cx, h * 0.7 - 8); ctx.stroke();
  ctx.strokeStyle = '#4A90E2'; ctx.lineWidth = 4;
  ctx.beginPath();
  ctx.moveTo(cx - w * 0.15, h * 0.7); ctx.lineTo(cx + w * 0.15, h * 0.7); ctx.stroke();
  ctx.fillStyle = '#333';
  ctx.font = `${Math.max(8, w * 0.024)}px Arial`;
  ctx.textAlign = 'center'; ctx.textBaseline = 'alphabetic';
  ctx.fillText('Guide strand selected (passenger degraded)', cx, h * 0.67);

  // Two outcomes branch
  [[w * 0.28, h * 0.87, 'mRNA Cleavage\n(siRNA mode)', '#E74C3C'],
   [w * 0.72, h * 0.87, 'Translation\nRepression (miRNA)', '#3498DB']
  ].forEach(([bx, by, lbl, col]) => {
    ctx.strokeStyle = '#999'; ctx.lineWidth = 2;
    ctx.beginPath(); ctx.moveTo(cx, h * 0.74); ctx.lineTo(bx, by - h * 0.06); ctx.stroke();

    ctx.fillStyle = col + '33';
    ctx.strokeStyle = col; ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.roundRect(bx - w * 0.14, by - h * 0.06, w * 0.28, h * 0.1, 6);
    ctx.fill(); ctx.stroke();
    ctx.fillStyle = col;
    ctx.font = `bold ${Math.max(8, w * 0.024)}px Arial`;
    ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
    lbl.split('\n').forEach((line, li) => {
      ctx.fillText(line, bx, by - h * 0.01 + li * 14);
    });
  });

  ctx.fillStyle = '#222';
  ctx.font = `bold ${Math.max(12, w * 0.04)}px Arial`;
  ctx.textAlign = 'center'; ctx.textBaseline = 'alphabetic';
  ctx.fillText('RNA Interference (RNAi)', cx, 22);
}


static drawWobbleBasePairing(ctx, width, height, componentFocus) {
  const w = width, h = height;
  const cx = w * 0.5, cy = h * 0.5;

  // Codon vs anticodon
  const codonY = cy - h * 0.15;
  const anticodonY = cy + h * 0.15;

  // mRNA codon
  const codon = ['G', 'G', 'U'];
  const anticodon = ['C', 'C', 'I']; // Inosine at wobble
  const bw = w * 0.14;
  const startX = cx - bw;

  ctx.fillStyle = '#FF9F43';
  ctx.font = `bold ${Math.max(9, w * 0.028)}px Arial`;
  ctx.textAlign = 'right'; ctx.textBaseline = 'middle';
  ctx.fillText("mRNA 5'—", startX - 8, codonY);
  ctx.textAlign = 'left';
  ctx.fillText("—3'", startX + 3 * bw + 8, codonY);

  ctx.fillStyle = '#4A90E2';
  ctx.textAlign = 'right';
  ctx.fillText("3'—tRNA", startX - 8, anticodonY);
  ctx.textAlign = 'left';
  ctx.fillText("—5'", startX + 3 * bw + 8, anticodonY);

  const codonColors = { G: '#FFD93D', A: '#FF6B6B', U: '#4ECDC4', C: '#95E1D3', I: '#DDA0DD' };

  codon.forEach((base, i) => {
    const bx = startX + i * bw + bw * 0.5;
    const isWobble = i === 2;

    if (isWobble) {
      // Wobble position highlight
      ctx.fillStyle = 'rgba(221,160,221,0.2)';
      ctx.strokeStyle = '#DDA0DD'; ctx.lineWidth = 2;
      ctx.setLineDash([4, 3]);
      ctx.beginPath();
      ctx.roundRect(bx - bw * 0.45, codonY - 40, bw * 0.9, 80, 6);
      ctx.fill(); ctx.stroke();
      ctx.setLineDash([]);
      ctx.fillStyle = '#DDA0DD';
      ctx.font = `bold ${Math.max(8, w * 0.024)}px Arial`;
      ctx.textAlign = 'center'; ctx.textBaseline = 'alphabetic';
      ctx.fillText('Wobble\nPosition', bx, codonY - 44);
    }

    // Codon base
    ctx.fillStyle = codonColors[base];
    ctx.strokeStyle = '#999'; ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.arc(bx, codonY, w * 0.05, 0, Math.PI * 2);
    ctx.fill(); ctx.stroke();
    ctx.fillStyle = '#333';
    ctx.font = `bold ${Math.max(10, w * 0.032)}px Arial`;
    ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
    ctx.fillText(base, bx, codonY);

    // Anticodon base
    const aBase = anticodon[i];
    ctx.fillStyle = codonColors[aBase] || '#DDA0DD';
    ctx.strokeStyle = '#999'; ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.arc(bx, anticodonY, w * 0.05, 0, Math.PI * 2);
    ctx.fill(); ctx.stroke();
    ctx.fillStyle = '#333';
    ctx.font = `bold ${Math.max(10, w * 0.032)}px Arial`;
    ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
    ctx.fillText(aBase, bx, anticodonY);

    // H-bond lines
    const bondCount = isWobble ? 2 : (base === 'G' ? 3 : 2);
    for (let b = 0; b < bondCount; b++) {
      const offset = (b - (bondCount - 1) / 2) * 6;
      ctx.strokeStyle = 'rgba(100,100,100,0.5)'; ctx.lineWidth = 1;
      ctx.setLineDash([3, 3]);
      ctx.beginPath();
      ctx.moveTo(bx + offset, codonY + w * 0.05);
      ctx.lineTo(bx + offset, anticodonY - w * 0.05);
      ctx.stroke();
      ctx.setLineDash([]);
    }
  });

  // Wobble rules table
  const rules = [
    ['Wobble base (anticodon)', 'Can pair with (codon)'],
    ['U', 'A or G'],
    ['G', 'C or U'],
    ['I (Inosine)', 'U, C, or A'],
    ['C', 'G only']
  ];
  const tableX = w * 0.06, tableY = cy + h * 0.32;
  const rowH = h * 0.075;
  const col1W = w * 0.45;

  rules.forEach((row, ri) => {
    ctx.fillStyle = ri === 0 ? '#34495E' : (ri % 2 === 0 ? '#F8F9F9' : '#FFFFFF');
    ctx.fillRect(tableX, tableY + ri * rowH, w * 0.88, rowH);
    ctx.strokeStyle = '#BDC3C7'; ctx.lineWidth = 1;
    ctx.strokeRect(tableX, tableY + ri * rowH, w * 0.88, rowH);

    row.forEach((cell, ci) => {
      ctx.fillStyle = ri === 0 ? '#fff' : '#333';
      ctx.font = ri === 0 ? `bold ${Math.max(8, w * 0.024)}px Arial` : `${Math.max(8, w * 0.024)}px Arial`;
      ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
      ctx.fillText(cell, tableX + (ci === 0 ? col1W * 0.5 : col1W + (w * 0.88 - col1W) * 0.5), tableY + ri * rowH + rowH * 0.5);
    });
  });

  ctx.fillStyle = '#222';
  ctx.font = `bold ${Math.max(12, w * 0.04)}px Arial`;
  ctx.textAlign = 'center'; ctx.textBaseline = 'alphabetic';
  ctx.fillText('Wobble Base Pairing', cx, 22);
}

static drawAnticodonLoop(ctx, width, height, componentFocus) {
  const w = width, h = height;
  const cx = w * 0.5, cy = h * 0.5;

  // tRNA anticodon loop detail
  // Stem leading to loop
  for (let s = 0; s < 2; s++) {
    ctx.strokeStyle = s === 0 ? '#4A90E2' : '#E24A4A';
    ctx.lineWidth = 4;
    ctx.beginPath();
    ctx.moveTo(cx - w * 0.04 + s * w * 0.08, cy - h * 0.08);
    for (let i = 0; i <= 10; i++) {
      const t = i / 10;
      const yp = cy - h * 0.08 + t * h * 0.14;
      const xp = cx - w * 0.04 + s * w * 0.08 + (s === 0 ? -1 : 1) * Math.sin(t * Math.PI * 2) * w * 0.015;
      if (i === 0) ctx.moveTo(xp, yp); else ctx.lineTo(xp, yp);
    }
    ctx.stroke();
  }

  // Anticodon loop (7 bases: 3 anticodon + flanking)
  const loopBases = ['U', '34', '35', '36', 'A'];
  const nLoop = loopBases.length;
  const loopR = w * 0.2;
  const loopCx = cx, loopCy = cy + h * 0.14;
  const baseColors2 = { U: '#4ECDC4', A: '#FF6B6B', G: '#FFD93D', C: '#95E1D3', '34': '#E74C3C', '35': '#E74C3C', '36': '#E74C3C' };

  for (let i = 0; i < nLoop; i++) {
    const angle = Math.PI + (i / (nLoop - 1)) * Math.PI;
    const bx = loopCx + Math.cos(angle) * loopR;
    const by = loopCy + Math.sin(angle) * loopR;
    const isAnticodon = ['34', '35', '36'].includes(loopBases[i]);

    ctx.fillStyle = isAnticodon ? '#E74C3C' : '#FF9F43';
    ctx.strokeStyle = isAnticodon ? '#C0392B' : '#D35400';
    ctx.lineWidth = isAnticodon ? 3 : 2;
    ctx.beginPath();
    ctx.arc(bx, by, w * (isAnticodon ? 0.055 : 0.04), 0, Math.PI * 2);
    ctx.fill(); ctx.stroke();
    ctx.fillStyle = '#fff';
    ctx.font = `bold ${Math.max(8, w * 0.024)}px Arial`;
    ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
    ctx.fillText(loopBases[i], bx, by);

    // Backbone connection
    if (i > 0) {
      const prevAngle = Math.PI + ((i - 1) / (nLoop - 1)) * Math.PI;
      const px = loopCx + Math.cos(prevAngle) * loopR;
      const py = loopCy + Math.sin(prevAngle) * loopR;
      ctx.strokeStyle = '#FF9F43'; ctx.lineWidth = 3;
      ctx.beginPath();
      ctx.moveTo(px, py); ctx.lineTo(bx, by); ctx.stroke();
    }
  }

  // Anticodon bracket
  const acStart = Math.PI + (1 / 4) * Math.PI;
  const acEnd = Math.PI + (3 / 4) * Math.PI;
  ctx.strokeStyle = '#E74C3C'; ctx.lineWidth = 3;
  ctx.setLineDash([4, 3]);
  ctx.beginPath();
  ctx.arc(loopCx, loopCy, loopR + w * 0.06, acStart, acEnd);
  ctx.stroke();
  ctx.setLineDash([]);
  ctx.fillStyle = '#E74C3C';
  ctx.font = `bold ${Math.max(9, w * 0.028)}px Arial`;
  ctx.textAlign = 'center'; ctx.textBaseline = 'alphabetic';
  ctx.fillText('Anticodon (pos 34-36)', loopCx, loopCy + h * 0.28);

  // Codon complement above
  const codon = ['A', 'U', 'G'];
  codon.forEach((base, i) => {
    const angle = Math.PI + ((i + 1) / (nLoop - 1)) * Math.PI;
    const bx = loopCx + Math.cos(angle) * (loopR - w * 0.14);
    const by = loopCy + Math.sin(angle) * (loopR - h * 0.12) - h * 0.08;

    ctx.fillStyle = baseColors2[base] || '#FF9F43';
    ctx.strokeStyle = '#999'; ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.arc(bx, by, w * 0.04, 0, Math.PI * 2);
    ctx.fill(); ctx.stroke();
    ctx.fillStyle = '#333';
    ctx.font = `bold ${Math.max(9, w * 0.028)}px Arial`;
    ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
    ctx.fillText(base, bx, by);

    // H-bond dotted
    const abx = loopCx + Math.cos(Math.PI + ((i + 1) / (nLoop - 1)) * Math.PI) * loopR;
    const aby = loopCy + Math.sin(Math.PI + ((i + 1) / (nLoop - 1)) * Math.PI) * loopR;
    ctx.strokeStyle = 'rgba(100,100,100,0.4)'; ctx.lineWidth = 1; ctx.setLineDash([3, 3]);
    ctx.beginPath(); ctx.moveTo(bx, by + w * 0.04); ctx.lineTo(abx, aby - w * 0.055); ctx.stroke();
    ctx.setLineDash([]);
  });

  ctx.fillStyle = '#333';
  ctx.font = `${Math.max(8, w * 0.024)}px Arial`;
  ctx.textAlign = 'center'; ctx.textBaseline = 'alphabetic';
  ctx.fillText("mRNA Codon (5'→3')", loopCx, loopCy - h * 0.32);

  ctx.fillStyle = '#222';
  ctx.font = `bold ${Math.max(12, w * 0.04)}px Arial`;
  ctx.fillText('Anticodon Loop', cx, 22);
}

static drawReadingFrame(ctx, width, height, componentFocus) {
  const w = width, h = height;
  const cx = w * 0.5;

  const mRNA = 'AUGGCUCAGAUGCCA';
  const nBases = mRNA.length;
  const bw = (w * 0.9) / nBases;
  const startX = w * 0.05;
  const baseColors3 = { A: '#FF6B6B', U: '#4ECDC4', G: '#FFD93D', C: '#95E1D3' };
  const frames = [
    { y: h * 0.22, offset: 0, color: '#3498DB', label: 'Frame 1 (+0)' },
    { y: h * 0.52, offset: 1, color: '#27AE60', label: 'Frame 2 (+1)' },
    { y: h * 0.78, offset: 2, color: '#E74C3C', label: 'Frame 3 (+2)' }
  ];

  frames.forEach(frame => {
    // mRNA bases
    for (let i = 0; i < nBases; i++) {
      const bx = startX + i * bw + bw * 0.5;
      const base = mRNA[i];
      ctx.fillStyle = baseColors3[base];
      ctx.strokeStyle = '#999'; ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.arc(bx, frame.y - h * 0.06, bw * 0.38, 0, Math.PI * 2);
      ctx.fill(); ctx.stroke();
      ctx.fillStyle = '#333';
      ctx.font = `bold ${Math.max(7, w * 0.02)}px Arial`;
      ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
      ctx.fillText(base, bx, frame.y - h * 0.06);

      // Position number
      ctx.fillStyle = '#999';
      ctx.font = `${Math.max(6, w * 0.016)}px Arial`;
      ctx.fillText(i + 1, bx, frame.y - h * 0.12);
    }

    // Codon grouping brackets
    const usable = nBases - frame.offset;
    const nCodons = Math.floor(usable / 3);
    for (let c = 0; c < nCodons; c++) {
      const ci = frame.offset + c * 3;
      const bxStart = startX + ci * bw;
      const codonSeq = mRNA.slice(ci, ci + 3);
      const codonW = bw * 3;

      ctx.fillStyle = frame.color + (c % 2 === 0 ? '22' : '11');
      ctx.strokeStyle = frame.color; ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.roundRect(bxStart, frame.y - h * 0.02, codonW, h * 0.1, 4);
      ctx.fill(); ctx.stroke();

      ctx.fillStyle = frame.color;
      ctx.font = `bold ${Math.max(7, w * 0.022)}px Arial`;
      ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
      ctx.fillText(codonSeq, bxStart + codonW * 0.5, frame.y + h * 0.03);
    }

    // Frame label
    ctx.fillStyle = frame.color;
    ctx.font = `bold ${Math.max(9, w * 0.028)}px Arial`;
    ctx.textAlign = 'left'; ctx.textBaseline = 'alphabetic';
    ctx.fillText(frame.label, w * 0.05, frame.y - h * 0.14);

    // Frame offset indicator
    if (frame.offset > 0) {
      ctx.fillStyle = 'rgba(150,150,150,0.3)';
      ctx.fillRect(startX, frame.y - h * 0.02, frame.offset * bw, h * 0.1);
      ctx.fillStyle = '#999';
      ctx.font = `${Math.max(7, w * 0.02)}px Arial`;
      ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
      ctx.fillText('+' + frame.offset, startX + frame.offset * bw * 0.5, frame.y + h * 0.03);
    }
  });

  ctx.fillStyle = '#222';
  ctx.font = `bold ${Math.max(12, w * 0.04)}px Arial`;
  ctx.textAlign = 'center'; ctx.textBaseline = 'alphabetic';
  ctx.fillText('Reading Frames', cx, 22);
}

static drawFrameshift(ctx, width, height, componentFocus) {
  const w = width, h = height;
  const cx = w * 0.5;

  const orig = 'AUG CAG UCA GGA UGA';
  const insertion = 'AUG CAG XUC AGG AUG A';
  const deletion  = 'AUG CGU CAG GAU GA';

  const drawMRNA = (seq, y, label, color, mutPos) => {
    const tokens = seq.split(' ');
    const startX = w * 0.04;
    const codonW = w * 0.16;
    ctx.fillStyle = '#333';
    ctx.font = `bold ${Math.max(8, w * 0.024)}px Arial`;
    ctx.textAlign = 'left'; ctx.textBaseline = 'alphabetic';
    ctx.fillText(label, startX, y - 20);

    tokens.forEach((codon, i) => {
      const cx2 = startX + i * (codonW + 4);
      const isAffected = i > 0 && mutPos !== undefined && i >= mutPos;
      const isStop = codon === 'UGA' || codon === 'UAA' || codon === 'UAG';

      ctx.fillStyle = isAffected ? color + '44' : isStop ? '#E74C3C33' : 'rgba(46,204,113,0.2)';
      ctx.strokeStyle = isAffected ? color : isStop ? '#E74C3C' : '#27AE60';
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.roundRect(cx2, y - 12, codonW, 24, 4);
      ctx.fill(); ctx.stroke();

      ctx.fillStyle = isStop ? '#E74C3C' : isAffected ? color : '#1E8449';
      ctx.font = `bold ${Math.max(8, w * 0.024)}px Arial`;
      ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
      ctx.fillText(codon, cx2 + codonW * 0.5, y);

      if (mutPos !== undefined && i === mutPos) {
        ctx.strokeStyle = color; ctx.lineWidth = 3;
        ctx.beginPath();
        ctx.moveTo(cx2 - 2, y - 20); ctx.lineTo(cx2 - 2, y + 20); ctx.stroke();
        ctx.fillStyle = color;
        ctx.font = `${Math.max(7, w * 0.02)}px Arial`;
        ctx.textAlign = 'center'; ctx.textBaseline = 'alphabetic';
        ctx.fillText(mutPos === 1 ? '↑ Insertion' : '↑ Deletion', cx2, y - 24);
      }
    });
  };

  drawMRNA(orig, h * 0.22, 'Normal (wild-type):', '#27AE60', undefined);
  drawMRNA(insertion, h * 0.46, 'Insertion (+1nt): frameshift →', '#3498DB', 1);
  drawMRNA(deletion, h * 0.7, 'Deletion (−1nt): frameshift →', '#E74C3C', 1);

  // Consequence labels
  ctx.fillStyle = '#27AE60';
  ctx.font = `${Math.max(8, w * 0.024)}px Arial`;
  ctx.textAlign = 'right'; ctx.textBaseline = 'alphabetic';
  ctx.fillText('Correct protein', w * 0.96, h * 0.3);
  ctx.fillStyle = '#3498DB';
  ctx.fillText('Wrong aa sequence + premature stop', w * 0.96, h * 0.54);
  ctx.fillStyle = '#E74C3C';
  ctx.fillText('Wrong aa sequence + premature stop', w * 0.96, h * 0.78);

  ctx.fillStyle = '#222';
  ctx.font = `bold ${Math.max(12, w * 0.04)}px Arial`;
  ctx.textAlign = 'center'; ctx.textBaseline = 'alphabetic';
  ctx.fillText('Frameshift Mutation', cx, 22);
}

static drawMissenseMutation(ctx, width, height, componentFocus) {
  const w = width, h = height;
  const cx = w * 0.5, cy = h * 0.5;

  // Normal and mutant side by side
  const panels = [
    { x: w * 0.25, label: 'Normal', codon: 'GAG', aa: 'Glu', color: '#27AE60' },
    { x: w * 0.75, label: 'Missense', codon: 'GTG', aa: 'Val', color: '#E74C3C' }
  ];

  panels.forEach(p => {
    // DNA codon
    ctx.fillStyle = p.color + '22';
    ctx.strokeStyle = p.color; ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.roundRect(p.x - w * 0.12, cy - h * 0.28, w * 0.24, h * 0.08, 6);
    ctx.fill(); ctx.stroke();
    ctx.fillStyle = p.color;
    ctx.font = `bold ${Math.max(9, w * 0.028)}px Arial`;
    ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
    ctx.fillText('DNA: ' + p.codon.replace('U', 'T'), p.x, cy - h * 0.24);

    // mRNA codon
    ctx.fillStyle = 'rgba(255,159,67,0.2)';
    ctx.strokeStyle = '#FF9F43'; ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.roundRect(p.x - w * 0.1, cy - h * 0.14, w * 0.2, h * 0.08, 6);
    ctx.fill(); ctx.stroke();
    ctx.fillStyle = '#FF9F43';
    ctx.font = `bold ${Math.max(9, w * 0.028)}px Arial`;
    ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
    ctx.fillText('mRNA: ' + p.codon, p.x, cy - h * 0.1);

    // Amino acid
    ctx.fillStyle = p.color;
    ctx.strokeStyle = p.color; ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.arc(p.x, cy + h * 0.08, w * 0.08, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = '#fff';
    ctx.font = `bold ${Math.max(10, w * 0.032)}px Arial`;
    ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
    ctx.fillText(p.aa, p.x, cy + h * 0.08);

    // Arrows
    ctx.strokeStyle = '#999'; ctx.lineWidth = 2;
    [[cy - h * 0.2, cy - h * 0.14], [cy - h * 0.06, cy + h * 0.0]].forEach(([y1, y2]) => {
      ctx.beginPath();
      ctx.moveTo(p.x, y1); ctx.lineTo(p.x, y2); ctx.stroke();
      ctx.fillStyle = '#999';
      ctx.beginPath();
      ctx.moveTo(p.x, y2); ctx.lineTo(p.x - 4, y2 - 8); ctx.lineTo(p.x + 4, y2 - 8);
      ctx.closePath(); ctx.fill();
    });

    // Label
    ctx.fillStyle = p.color;
    ctx.font = `bold ${Math.max(10, w * 0.032)}px Arial`;
    ctx.textAlign = 'center'; ctx.textBaseline = 'alphabetic';
    ctx.fillText(p.label, p.x, cy - h * 0.34);
  });

  // Mutation indicator
  ctx.strokeStyle = '#E74C3C'; ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.moveTo(w * 0.25, cy - h * 0.24); ctx.lineTo(w * 0.75, cy - h * 0.24); ctx.stroke();
  ctx.fillStyle = '#E74C3C';
  ctx.font = `bold ${Math.max(9, w * 0.028)}px Arial`;
  ctx.textAlign = 'center'; ctx.textBaseline = 'alphabetic';
  ctx.fillText('A→T point mutation', cx, cy - h * 0.26);

  // HbS example
  ctx.fillStyle = '#333';
  ctx.font = `${Math.max(8, w * 0.024)}px Arial`;
  ctx.textAlign = 'center'; ctx.textBaseline = 'alphabetic';
  ctx.fillText('Example: HbA(Glu6) → HbS(Val6)', cx, cy + h * 0.24);
  ctx.fillText('Causes sickle cell disease', cx, cy + h * 0.31);

  ctx.fillStyle = '#222';
  ctx.font = `bold ${Math.max(12, w * 0.04)}px Arial`;
  ctx.fillText('Missense Mutation', cx, 22);
}

static drawNonsenseMutation(ctx, width, height, componentFocus) {
  const w = width, h = height;
  const cx = w * 0.5;

  const normal  = [
    { codon: 'AUG', aa: 'Met', color: '#3498DB' },
    { codon: 'GGU', aa: 'Gly', color: '#27AE60' },
    { codon: 'CAG', aa: 'Gln', color: '#9B59B6' },
    { codon: 'UCA', aa: 'Ser', color: '#E67E22' },
    { codon: 'UGA', aa: 'STOP', color: '#E74C3C', stop: true }
  ];
  const mutant = [
    { codon: 'AUG', aa: 'Met', color: '#3498DB' },
    { codon: 'GGU', aa: 'Gly', color: '#27AE60' },
    { codon: 'UAG', aa: 'STOP', color: '#E74C3C', stop: true },
    { codon: '---', aa: '---', color: '#BDC3C7', trunc: true },
    { codon: '---', aa: '---', color: '#BDC3C7', trunc: true }
  ];

  const drawRow = (data, y, rowLabel) => {
    const bw = w * 0.16;
    const startX = w * 0.16;
    ctx.fillStyle = '#333';
    ctx.font = `bold ${Math.max(9, w * 0.028)}px Arial`;
    ctx.textAlign = 'right'; ctx.textBaseline = 'middle';
    ctx.fillText(rowLabel, startX - 8, y);

    data.forEach((d, i) => {
      const bx = startX + i * bw + bw * 0.5;
      ctx.fillStyle = d.trunc ? 'rgba(189,195,199,0.2)' : d.color + '33';
      ctx.strokeStyle = d.trunc ? '#BDC3C7' : d.color;
      ctx.lineWidth = d.stop ? 3 : 2;
      ctx.beginPath();
      ctx.roundRect(startX + i * bw, y - h * 0.04, bw - 4, h * 0.08, 4);
      ctx.fill(); ctx.stroke();

      ctx.fillStyle = d.stop ? '#E74C3C' : d.trunc ? '#BDC3C7' : d.color;
      ctx.font = `bold ${Math.max(8, w * 0.024)}px Arial`;
      ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
      ctx.fillText(d.codon, bx, y - h * 0.01);
      ctx.font = `${Math.max(7, w * 0.02)}px Arial`;
      ctx.fillText(d.aa, bx, y + h * 0.025);

      if (d.stop && i === 2 && rowLabel.includes('Mutant')) {
        // Premature stop indicator
        ctx.strokeStyle = '#E74C3C'; ctx.lineWidth = 3;
        ctx.beginPath();
        ctx.moveTo(startX + i * bw - 2, y - h * 0.06);
        ctx.lineTo(startX + i * bw - 2, y + h * 0.06);
        ctx.stroke();
        ctx.fillStyle = '#E74C3C';
        ctx.font = `bold ${Math.max(7, w * 0.022)}px Arial`;
        ctx.textAlign = 'center'; ctx.textBaseline = 'alphabetic';
        ctx.fillText('Premature', bx, y - h * 0.09);
        ctx.fillText('STOP', bx, y - h * 0.02);
      }
    });
  };

  drawRow(normal, h * 0.32, 'Normal:');
  drawRow(mutant, h * 0.56, 'Mutant:');

  // Mutation indicator
  ctx.strokeStyle = '#E74C3C'; ctx.lineWidth = 2;
  ctx.setLineDash([4, 3]);
  ctx.beginPath();
  ctx.moveTo(w * 0.16 + w * 0.16 * 2, h * 0.38);
  ctx.lineTo(w * 0.16 + w * 0.16 * 2, h * 0.5);
  ctx.stroke();
  ctx.setLineDash([]);
  ctx.fillStyle = '#E74C3C';
  ctx.font = `bold ${Math.max(8, w * 0.024)}px Arial`;
  ctx.textAlign = 'center'; ctx.textBaseline = 'alphabetic';
  ctx.fillText('C→A mutation', w * 0.16 + w * 0.16 * 2 + w * 0.08, h * 0.45);

  // Protein comparison
  const protY = h * 0.75;
  ctx.fillStyle = '#27AE60';
  ctx.strokeStyle = '#1E8449'; ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.roundRect(w * 0.16, protY - 12, w * 0.68, 24, 6);
  ctx.fill(); ctx.stroke();
  ctx.fillStyle = '#fff';
  ctx.font = `bold ${Math.max(9, w * 0.028)}px Arial`;
  ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
  ctx.fillText('Normal full-length protein', cx, protY);

  const truncY = h * 0.88;
  ctx.fillStyle = '#E74C3C';
  ctx.strokeStyle = '#C0392B'; ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.roundRect(w * 0.16, truncY - 12, w * 0.3, 24, 6);
  ctx.fill(); ctx.stroke();
  ctx.fillStyle = '#fff';
  ctx.font = `bold ${Math.max(9, w * 0.028)}px Arial`;
  ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
  ctx.fillText('Truncated (NMD)', w * 0.16 + w * 0.15, truncY);

  ctx.fillStyle = '#222';
  ctx.font = `bold ${Math.max(12, w * 0.04)}px Arial`;
  ctx.textAlign = 'center'; ctx.textBaseline = 'alphabetic';
  ctx.fillText('Nonsense Mutation', cx, 22);
}

static drawSilentMutation(ctx, width, height, componentFocus) {
  const w = width, h = height;
  const cx = w * 0.5, cy = h * 0.5;

  const panels = [
    { x: w * 0.25, codon: 'GAA', aa: 'Glu', color: '#27AE60', label: 'Normal' },
    { x: w * 0.75, codon: 'GAG', aa: 'Glu', color: '#3498DB', label: 'Silent Mutant' }
  ];

  panels.forEach(p => {
    const codonColors = { G: '#FFD93D', A: '#FF6B6B', U: '#4ECDC4', C: '#95E1D3' };

    // DNA
    ctx.fillStyle = '#555';
    ctx.font = `bold ${Math.max(9, w * 0.028)}px Arial`;
    ctx.textAlign = 'center'; ctx.textBaseline = 'alphabetic';
    ctx.fillText(p.label, p.x, cy - h * 0.36);

    // Codon bases
    [...p.codon].forEach((base, i) => {
      const bx = p.x - w * 0.08 + i * w * 0.08;
      ctx.fillStyle = codonColors[base];
      ctx.strokeStyle = '#999'; ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.arc(bx, cy - h * 0.2, w * 0.045, 0, Math.PI * 2);
      ctx.fill(); ctx.stroke();
      ctx.fillStyle = '#333';
      ctx.font = `bold ${Math.max(10, w * 0.032)}px Arial`;
      ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
      ctx.fillText(base, bx, cy - h * 0.2);
    });

    ctx.fillStyle = '#555';
    ctx.font = `${Math.max(8, w * 0.024)}px Arial`;
    ctx.textAlign = 'center'; ctx.textBaseline = 'alphabetic';
    ctx.fillText('mRNA codon', p.x, cy - h * 0.28);

    // Arrow
    ctx.strokeStyle = '#999'; ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(p.x, cy - h * 0.14); ctx.lineTo(p.x, cy - h * 0.02); ctx.stroke();
    ctx.fillStyle = '#999';
    ctx.beginPath();
    ctx.moveTo(p.x, cy - h * 0.02); ctx.lineTo(p.x - 4, cy - h * 0.1); ctx.lineTo(p.x + 4, cy - h * 0.1);
    ctx.closePath(); ctx.fill();

    // Amino acid (same)
    const aaGrad = ctx.createRadialGradient(p.x - 5, cy - 5, 3, p.x, cy, w * 0.08);
    aaGrad.addColorStop(0, p.color);
    aaGrad.addColorStop(1, p.color + '88');
    ctx.fillStyle = aaGrad;
    ctx.strokeStyle = p.color; ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.arc(p.x, cy + h * 0.05, w * 0.08, 0, Math.PI * 2);
    ctx.fill(); ctx.stroke();
    ctx.fillStyle = '#fff';
    ctx.font = `bold ${Math.max(10, w * 0.032)}px Arial`;
    ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
    ctx.fillText(p.aa, p.x, cy + h * 0.05);

    ctx.fillStyle = '#333';
    ctx.font = `${Math.max(8, w * 0.024)}px Arial`;
    ctx.textAlign = 'center'; ctx.textBaseline = 'alphabetic';
    ctx.fillText('Same amino acid', p.x, cy + h * 0.18);
  });

  // Double arrow showing same result
  ctx.strokeStyle = '#27AE60'; ctx.lineWidth = 3;
  ctx.beginPath();
  ctx.moveTo(w * 0.25, cy + h * 0.1); ctx.lineTo(w * 0.75, cy + h * 0.1); ctx.stroke();
  // Arrow tips both sides
  ctx.fillStyle = '#27AE60';
  ctx.beginPath();
  ctx.moveTo(w * 0.25, cy + h * 0.1); ctx.lineTo(w * 0.27, cy + h * 0.08); ctx.lineTo(w * 0.27, cy + h * 0.12);
  ctx.closePath(); ctx.fill();
  ctx.beginPath();
  ctx.moveTo(w * 0.75, cy + h * 0.1); ctx.lineTo(w * 0.73, cy + h * 0.08); ctx.lineTo(w * 0.73, cy + h * 0.12);
  ctx.closePath(); ctx.fill();
  ctx.fillStyle = '#27AE60';
  ctx.font = `bold ${Math.max(9, w * 0.028)}px Arial`;
  ctx.textAlign = 'center'; ctx.textBaseline = 'alphabetic';
  ctx.fillText('Same protein (SILENT — no phenotype)', cx, cy + h * 0.06);

  // Mutation arrow
  ctx.strokeStyle = '#E74C3C'; ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.moveTo(w * 0.25 + w * 0.08, cy - h * 0.2);
  ctx.lineTo(w * 0.75 - w * 0.08, cy - h * 0.2);
  ctx.stroke();
  ctx.fillStyle = '#E74C3C';
  ctx.font = `bold ${Math.max(8, w * 0.024)}px Arial`;
  ctx.textAlign = 'center'; ctx.textBaseline = 'alphabetic';
  ctx.fillText('A→G point mutation (3rd codon position)', cx, cy - h * 0.22);
  ctx.font = `${Math.max(7, w * 0.02)}px Arial`;
  ctx.fillText('(Synonymous / Wobble position)', cx, cy - h * 0.16);

  ctx.fillStyle = '#222';
  ctx.font = `bold ${Math.max(12, w * 0.04)}px Arial`;
  ctx.textAlign = 'center'; ctx.textBaseline = 'alphabetic';
  ctx.fillText('Silent (Synonymous) Mutation', cx, 22);
}
Epigenetics & Gene Regulation
static drawHistoneModification(ctx, width, height, componentFocus) {
  const w = width, h = height;
  const cx = w * 0.5, cy = h * 0.5;

  // Nucleosome core
  ctx.fillStyle = 'rgba(232,160,0,0.3)';
  ctx.strokeStyle = '#E8A000'; ctx.lineWidth = 3;
  ctx.beginPath();
  ctx.ellipse(cx, cy, w * 0.18, h * 0.18, 0, 0, Math.PI * 2);
  ctx.fill(); ctx.stroke();
  ctx.fillStyle = '#E8A000';
  ctx.font = `bold ${Math.max(9, w * 0.028)}px Arial`;
  ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
  ctx.fillText('Histone Core', cx, cy);

  // N-terminal tails with modifications
  const tails = [
    { id: 'H3', angle: -Math.PI * 0.6, mods: [
      { type: 'Me', pos: 'K4', color: '#27AE60', effect: 'Active' },
      { type: 'Me', pos: 'K27', color: '#E74C3C', effect: 'Repressed' },
      { type: 'Ac', pos: 'K9', color: '#3498DB', effect: 'Active' }
    ]},
    { id: 'H4', angle: Math.PI * 0.3, mods: [
      { type: 'Ac', pos: 'K16', color: '#9B59B6', effect: 'Active' }
    ]},
    { id: 'H2A', angle: Math.PI * 0.8, mods: [
      { type: 'Ub', pos: 'K119', color: '#E67E22', effect: 'Repressed' }
    ]},
    { id: 'H2B', angle: -Math.PI * 0.2, mods: [
      { type: 'Me', pos: 'K120', color: '#27AE60', effect: 'Active' }
    ]}
  ];

  tails.forEach(tail => {
    const tailLen = w * 0.24;
    const ex = cx + Math.cos(tail.angle) * (w * 0.18 + tailLen);
    const ey = cy + Math.sin(tail.angle) * (h * 0.18 + tailLen * 0.8);
    const sx = cx + Math.cos(tail.angle) * w * 0.18;
    const sy = cy + Math.sin(tail.angle) * h * 0.18;

    // Tail
    ctx.strokeStyle = '#E8A000'; ctx.lineWidth = 4;
    ctx.beginPath();
    ctx.moveTo(sx, sy);
    for (let i = 1; i <= 8; i++) {
      const t = i / 8;
      const px = sx + (ex - sx) * t + Math.sin(i * 1.5) * w * 0.02;
      const py = sy + (ey - sy) * t;
      ctx.lineTo(px, py);
    }
    ctx.stroke();

    // Modifications along tail
    tail.mods.forEach((mod, mi) => {
      const mt = (mi + 1) / (tail.mods.length + 1);
      const mx = sx + (ex - sx) * mt;
      const my = sy + (ey - sy) * mt;

      const modShape = mod.type === 'Ac' ? 'triangle' : mod.type === 'Me' ? 'circle' : 'square';
      ctx.fillStyle = mod.color;
      ctx.strokeStyle = 'rgba(0,0,0,0.2)'; ctx.lineWidth = 1;

      if (modShape === 'circle') {
        ctx.beginPath();
        ctx.arc(mx, my, w * 0.025, 0, Math.PI * 2);
        ctx.fill(); ctx.stroke();
      } else if (modShape === 'triangle') {
        ctx.beginPath();
        ctx.moveTo(mx, my - w * 0.025);
        ctx.lineTo(mx + w * 0.025, my + w * 0.02);
        ctx.lineTo(mx - w * 0.025, my + w * 0.02);
        ctx.closePath();
        ctx.fill(); ctx.stroke();
      } else {
        ctx.beginPath();
        ctx.roundRect(mx - w * 0.02, my - w * 0.02, w * 0.04, w * 0.04, 2);
        ctx.fill(); ctx.stroke();
      }

      ctx.fillStyle = '#fff';
      ctx.font = `bold ${Math.max(6, w * 0.016)}px Arial`;
      ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
      ctx.fillText(mod.type, mx, my);

      ctx.fillStyle = mod.color;
      ctx.font = `${Math.max(6, w * 0.016)}px Arial`;
      ctx.textAlign = 'left'; ctx.textBaseline = 'middle';
      ctx.fillText(mod.pos, mx + w * 0.03, my);
    });

    // Tail ID
    ctx.fillStyle = '#E8A000';
    ctx.font = `bold ${Math.max(8, w * 0.024)}px Arial`;
    ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
    ctx.fillText(tail.id, ex, ey);
  });

  // Legend
  const legY = h * 0.88;
  [['●', '#27AE60', 'Methylation (Me)'], ['▲', '#3498DB', 'Acetylation (Ac)'], ['■', '#E67E22', 'Ubiquitination (Ub)']].forEach(([sym, col, lbl], i) => {
    ctx.fillStyle = col;
    ctx.font = `${Math.max(9, w * 0.028)}px Arial`;
    ctx.textAlign = 'left'; ctx.textBaseline = 'middle';
    ctx.fillText(sym + ' ' + lbl, w * 0.05 + i * w * 0.32, legY);
  });

  ctx.fillStyle = '#222';
  ctx.font = `bold ${Math.max(12, w * 0.04)}px Arial`;
  ctx.textAlign = 'center'; ctx.textBaseline = 'alphabetic';
  ctx.fillText('Histone Modifications', cx, 22);
}

static drawDNAMethylationPattern(ctx, width, height, componentFocus) {
  const w = width, h = height;
  const cx = w * 0.5;

  const contexts = [
    { name: 'Promoter CpG island', y: h * 0.22, methyl: false, color: '#27AE60', desc: 'Unmethylated → Gene ON' },
    { name: 'Gene body CpG', y: h * 0.42, methyl: true, color: '#E74C3C', desc: 'Methylated → Active transcription' },
    { name: 'Silenced promoter', y: h * 0.62, methyl: true, color: '#9B59B6', desc: 'Methylated → Gene OFF' },
    { name: 'Imprinting', y: h * 0.82, methyl: 'partial', color: '#E67E22', desc: 'Parent-specific methylation' }
  ];

  contexts.forEach(ctx2 => {
    // Context bar
    const bx = w * 0.04, by = ctx2.y - h * 0.07, bw2 = w * 0.92, bh2 = h * 0.12;
    ctx.fillStyle = ctx2.color + '15';
    ctx.strokeStyle = ctx2.color; ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.roundRect(bx, by, bw2, bh2, 6);
    ctx.fill(); ctx.stroke();

    // CpG sites
    const nCpG = 8;
    for (let i = 0; i < nCpG; i++) {
      const cpgX = w * 0.12 + i * (w * 0.72 / (nCpG - 1));
      const isMethyl = ctx2.methyl === true || (ctx2.methyl === 'partial' && i % 2 === 0);

      // CpG circle
      ctx.fillStyle = isMethyl ? ctx2.color : '#ECF0F1';
      ctx.strokeStyle = ctx2.color; ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.arc(cpgX, ctx2.y, w * 0.025, 0, Math.PI * 2);
      ctx.fill(); ctx.stroke();

      // Methyl mark
      if (isMethyl) {
        ctx.fillStyle = '#fff';
        ctx.font = `bold ${Math.max(6, w * 0.016)}px Arial`;
        ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
        ctx.fillText('m', cpgX, ctx2.y);
      }
    }

    // Name and description
    ctx.fillStyle = ctx2.color;
    ctx.font = `bold ${Math.max(8, w * 0.024)}px Arial`;
    ctx.textAlign = 'left'; ctx.textBaseline = 'middle';
    ctx.fillText(ctx2.name, w * 0.06, ctx2.y - h * 0.04);
    ctx.fillStyle = '#555';
    ctx.font = `${Math.max(7, w * 0.02)}px Arial`;
    ctx.fillText(ctx2.desc, w * 0.06, ctx2.y + h * 0.04);
  });

  // DNMT enzymes legend
  ctx.fillStyle = '#333';
  ctx.font = `bold ${Math.max(8, w * 0.024)}px Arial`;
  ctx.textAlign = 'right'; ctx.textBaseline = 'middle';
  ctx.fillText('● Methylated CpG    ○ Unmethylated CpG', w * 0.95, h * 0.93);

  ctx.fillStyle = '#222';
  ctx.font = `bold ${Math.max(12, w * 0.04)}px Arial`;
  ctx.textAlign = 'center'; ctx.textBaseline = 'alphabetic';
  ctx.fillText('DNA Methylation Patterns', cx, 22);
}

static drawChromatin(ctx, width, height, componentFocus) {
  const w = width, h = height;
  const cx = w * 0.5;

  // Show euchromatin vs heterochromatin side by side
  // Euchromatin (left) - open, accessible
  const euX = w * 0.25, euY = h * 0.5;
  ctx.fillStyle = 'rgba(46,204,113,0.08)';
  ctx.strokeStyle = '#27AE60'; ctx.lineWidth = 2;
  ctx.setLineDash([4, 4]);
  ctx.beginPath();
  ctx.roundRect(w * 0.04, h * 0.1, w * 0.42, h * 0.8, 12);
  ctx.fill(); ctx.stroke(); ctx.setLineDash([]);
  ctx.fillStyle = '#27AE60';
  ctx.font = `bold ${Math.max(10, w * 0.032)}px Arial`;
  ctx.textAlign = 'center'; ctx.textBaseline = 'alphabetic';
  ctx.fillText('Euchromatin', euX, h * 0.08);

  // Loosely packed nucleosomes
  const euNucs = [[euX - w * 0.1, h * 0.25], [euX + w * 0.05, h * 0.38], [euX - w * 0.06, h * 0.52], [euX + w * 0.08, h * 0.65]];
  euNucs.forEach((n, i) => {
    if (i > 0) {
      ctx.strokeStyle = '#4A90E2'; ctx.lineWidth = 3;
      ctx.beginPath();
      ctx.moveTo(euNucs[i - 1][0], euNucs[i - 1][1]);
      ctx.lineTo(n[0], n[1]);
      ctx.stroke();
    }
    ctx.fillStyle = 'rgba(232,160,0,0.7)';
    ctx.strokeStyle = '#E8A000'; ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.arc(n[0], n[1], w * 0.06, 0, Math.PI * 2);
    ctx.fill(); ctx.stroke();
  });

  // RNA Pol II on euchromatin
  ctx.fillStyle = '#8E44AD';
  ctx.beginPath();
  ctx.arc(euX + w * 0.12, h * 0.38, w * 0.04, 0, Math.PI * 2);
  ctx.fill();
  ctx.fillStyle = '#fff';
  ctx.font = `bold ${Math.max(6, w * 0.018)}px Arial`;
  ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
  ctx.fillText('Pol II', euX + w * 0.12, h * 0.38);

  // Heterochromatin (right) - compact
  const hetX = w * 0.75, hetY = h * 0.5;
  ctx.fillStyle = 'rgba(44,62,80,0.1)';
  ctx.strokeStyle = '#2C3E50'; ctx.lineWidth = 2;
  ctx.setLineDash([4, 4]);
  ctx.beginPath();
  ctx.roundRect(w * 0.54, h * 0.1, w * 0.42, h * 0.8, 12);
  ctx.fill(); ctx.stroke(); ctx.setLineDash([]);
  ctx.fillStyle = '#2C3E50';
  ctx.font = `bold ${Math.max(10, w * 0.032)}px Arial`;
  ctx.textAlign = 'center'; ctx.textBaseline = 'alphabetic';
  ctx.fillText('Heterochromatin', hetX, h * 0.08);

  // Tightly packed nucleosomes
  const hetNucs = [];
  for (let r = 0; r < 3; r++) {
    for (let c = 0; c < 3; c++) {
      hetNucs.push([hetX - w * 0.1 + c * w * 0.1, h * 0.26 + r * h * 0.16]);
    }
  }
  hetNucs.forEach(n => {
    ctx.fillStyle = 'rgba(52,73,94,0.7)';
    ctx.strokeStyle = '#2C3E50'; ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.arc(n[0], n[1], w * 0.045, 0, Math.PI * 2);
    ctx.fill(); ctx.stroke();
  });

  // HP1 protein
  ctx.fillStyle = '#E74C3C';
  ctx.beginPath();
  ctx.arc(hetX, h * 0.7, w * 0.04, 0, Math.PI * 2);
  ctx.fill();
  ctx.fillStyle = '#fff';
  ctx.font = `bold ${Math.max(7, w * 0.02)}px Arial`;
  ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
  ctx.fillText('HP1', hetX, h * 0.7);

  // Properties
  ctx.fillStyle = '#27AE60';
  ctx.font = `${Math.max(7, w * 0.022)}px Arial`;
  ctx.textAlign = 'center'; ctx.textBaseline = 'alphabetic';
  ctx.fillText('Active genes', euX, h * 0.84);
  ctx.fillText('H3K4me3, H3K27ac', euX, h * 0.88);
  ctx.fillStyle = '#2C3E50';
  ctx.fillText('Silenced genes', hetX, h * 0.84);
  ctx.fillText('H3K9me3, H3K27me3', hetX, h * 0.88);

  ctx.fillStyle = '#222';
  ctx.font = `bold ${Math.max(12, w * 0.04)}px Arial`;
  ctx.textAlign = 'center'; ctx.textBaseline = 'alphabetic';
  ctx.fillText('Chromatin States', cx, 22);
}

static drawHeterochromatin(ctx, width, height, componentFocus) {
  const w = width, h = height;
  const cx = w * 0.5, cy = h * 0.5;

  // Constitutive vs Facultative
  const types = [
    { x: w * 0.25, label: 'Constitutive', desc: 'Always silent\n(centromeres, telomeres)', color: '#2C3E50' },
    { x: w * 0.75, label: 'Facultative', desc: 'Conditionally\nsilenced (X-inactivation)', color: '#6C3483' }
  ];

  types.forEach(t => {
    // Dense chromatin blob
    const g = ctx.createRadialGradient(t.x - w * 0.04, cy - h * 0.05, 8, t.x, cy, w * 0.18);
    g.addColorStop(0, t.color + 'CC');
    g.addColorStop(1, t.color + '44');
    ctx.fillStyle = g;
    ctx.strokeStyle = t.color; ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.arc(t.x, cy, w * 0.2, 0, Math.PI * 2);
    ctx.fill(); ctx.stroke();

    // Tightly packed nucleosomes inside
    for (let i = 0; i < 7; i++) {
      const angle = (i / 7) * Math.PI * 2;
      const nx = t.x + Math.cos(angle) * w * 0.1;
      const ny = cy + Math.sin(angle) * h * 0.1;
      ctx.fillStyle = t.color + 'AA';
      ctx.strokeStyle = '#fff'; ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.arc(nx, ny, w * 0.04, 0, Math.PI * 2);
      ctx.fill(); ctx.stroke();
    }

    // Methyl marks
    ctx.fillStyle = '#E74C3C';
    ctx.font = `bold ${Math.max(7, w * 0.022)}px Arial`;
    ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
    ctx.fillText('H3K9me3', t.x, cy - 6);
    ctx.fillText('H3K27me3', t.x, cy + 8);

    // Label
    ctx.fillStyle = t.color;
    ctx.font = `bold ${Math.max(9, w * 0.028)}px Arial`;
    ctx.textAlign = 'center'; ctx.textBaseline = 'alphabetic';
    ctx.fillText(t.label, t.x, cy - w * 0.22);
    t.desc.split('\n').forEach((line, li) => {
      ctx.fillStyle = '#555';
      ctx.font = `${Math.max(7, w * 0.022)}px Arial`;
      ctx.fillText(line, t.x, cy + w * 0.22 + li * 14);
    });

    // HP1 binding
    ctx.fillStyle = '#E74C3C';
    ctx.beginPath();
    ctx.arc(t.x + w * 0.12, cy - h * 0.1, w * 0.035, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = '#fff';
    ctx.font = `bold ${Math.max(6, w * 0.016)}px Arial`;
    ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
    ctx.fillText('HP1', t.x + w * 0.12, cy - h * 0.1);
  });

  // Properties comparison
  const propY = h * 0.85;
  ctx.fillStyle = '#2C3E50';
  ctx.font = `${Math.max(8, w * 0.024)}px Arial`;
  ctx.textAlign = 'center'; ctx.textBaseline = 'alphabetic';
  ctx.fillText('Permanent | Repetitive DNA', w * 0.25, propY);
  ctx.fillStyle = '#6C3483';
  ctx.fillText('Reversible | Tissue-specific', w * 0.75, propY);

  ctx.fillStyle = '#222';
  ctx.font = `bold ${Math.max(12, w * 0.04)}px Arial`;
  ctx.textAlign = 'center'; ctx.textBaseline = 'alphabetic';
  ctx.fillText('Heterochromatin Types', cx, 22);
}

static drawEuchromatin(ctx, width, height, componentFocus) {
  const w = width, h = height;
  const cx = w * 0.5, cy = h * 0.5;

  // Open chromatin with active transcription
  // Background glow
  const glowGrad = ctx.createRadialGradient(cx, cy, 10, cx, cy, w * 0.4);
  glowGrad.addColorStop(0, 'rgba(46,204,113,0.1)');
  glowGrad.addColorStop(1, 'rgba(46,204,113,0)');
  ctx.fillStyle = glowGrad;
  ctx.beginPath();
  ctx.arc(cx, cy, w * 0.4, 0, Math.PI * 2);
  ctx.fill();

  // Loose nucleosomes
  const nucPositions = [
    [cx - w * 0.28, cy - h * 0.2],
    [cx, cy - h * 0.28],
    [cx + w * 0.28, cy - h * 0.18],
    [cx - w * 0.22, cy + h * 0.1],
    [cx + w * 0.22, cy + h * 0.12]
  ];

  let prevX, prevY;
  nucPositions.forEach((n, i) => {
    if (i > 0) {
      ctx.strokeStyle = '#4A90E2'; ctx.lineWidth = 4;
      ctx.beginPath();
      ctx.moveTo(prevX, prevY);
      // Wavy linker
      const mx = (prevX + n[0]) / 2;
      const my = (prevY + n[1]) / 2 + h * 0.04;
      ctx.quadraticCurveTo(mx, my, n[0], n[1]);
      ctx.stroke();
    }

    // Nucleosome with acetyl marks
    const ng = ctx.createRadialGradient(n[0] - 4, n[1] - 4, 3, n[0], n[1], w * 0.065);
    ng.addColorStop(0, '#FFE082');
    ng.addColorStop(1, '#F5A623');
    ctx.fillStyle = ng;
    ctx.strokeStyle = '#E8A000'; ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.arc(n[0], n[1], w * 0.065, 0, Math.PI * 2);
    ctx.fill(); ctx.stroke();

    // Acetylation marks (triangles)
    for (let j = 0; j < 3; j++) {
      const mAngle = (j / 3) * Math.PI * 2;
      const mx = n[0] + Math.cos(mAngle) * w * 0.065;
      const my = n[1] + Math.sin(mAngle) * h * 0.065;
      ctx.fillStyle = '#3498DB';
      ctx.beginPath();
      ctx.moveTo(mx, my - 5); ctx.lineTo(mx + 4, my + 3); ctx.lineTo(mx - 4, my + 3);
      ctx.closePath(); ctx.fill();
    }

    prevX = n[0]; prevY = n[1];
  });

  // RNA Polymerase actively transcribing
  const polX = cx - w * 0.05, polY = cy + h * 0.06;
  ctx.fillStyle = '#8E44AD';
  ctx.strokeStyle = '#6C3483'; ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.ellipse(polX, polY, w * 0.09, h * 0.08, -0.3, 0, Math.PI * 2);
  ctx.fill(); ctx.stroke();
  ctx.fillStyle = '#fff';
  ctx.font = `bold ${Math.max(8, w * 0.024)}px Arial`;
  ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
  ctx.fillText('RNAP', polX, polY - 5);
  ctx.font = `${Math.max(6, w * 0.018)}px Arial`;
  ctx.fillText('(active)', polX, polY + 6);

  // RNA being produced
  ctx.strokeStyle = '#FF9F43'; ctx.lineWidth = 4;
  ctx.setLineDash([5, 3]);
  ctx.beginPath();
  ctx.moveTo(polX + w * 0.09, polY - h * 0.04);
  ctx.lineTo(polX + w * 0.25, polY - h * 0.2);
  ctx.stroke();
  ctx.setLineDash([]);
  ctx.fillStyle = '#FF9F43';
  ctx.font = `${Math.max(8, w * 0.024)}px Arial`;
  ctx.textAlign = 'left'; ctx.textBaseline = 'alphabetic';
  ctx.fillText('mRNA', polX + w * 0.26, polY - h * 0.2);

  // Properties
  ctx.fillStyle = '#27AE60';
  ctx.font = `${Math.max(8, w * 0.024)}px Arial`;
  ctx.textAlign = 'center'; ctx.textBaseline = 'alphabetic';
  ctx.fillText('H3K4me3  •  H3K27ac  •  H3K36me3  •  Open chromatin', cx, h * 0.9);

  ctx.fillStyle = '#222';
  ctx.font = `bold ${Math.max(12, w * 0.04)}px Arial`;
  ctx.fillText('Euchromatin (Active)', cx, 22);
}

static drawOperonStructure(ctx, width, height, componentFocus) {
  const w = width, h = height;
  const cx = w * 0.5, cy = h * 0.5;

  // Lac operon layout
  const elements = [
    { id: 'I', name: 'Regulator', x: w * 0.06, w: w * 0.1, color: '#3498DB', desc: 'lacI gene' },
    { id: 'P', name: 'Promoter', x: w * 0.2, w: w * 0.08, color: '#E74C3C', desc: 'RNA Pol binding' },
    { id: 'O', name: 'Operator', x: w * 0.31, w: w * 0.07, color: '#E67E22', desc: 'Repressor binding' },
    { id: 'lacZ', name: 'β-galactosidase', x: w * 0.41, w: w * 0.18, color: '#27AE60', desc: 'splits lactose' },
    { id: 'lacY', name: 'Permease', x: w * 0.62, w: w * 0.14, color: '#9B59B6', desc: 'lactose import' },
    { id: 'lacA', name: 'Transacetylase', x: w * 0.79, w: w * 0.12, color: '#E67E22', desc: 'acetylation' }
  ];

  elements.forEach(el => {
    ctx.fillStyle = el.color + '55';
    ctx.strokeStyle = el.color; ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.roundRect(el.x, cy - 16, el.w, 32, 4);
    ctx.fill(); ctx.stroke();
    ctx.fillStyle = el.color;
    ctx.font = `bold ${Math.max(7, w * 0.022)}px Arial`;
    ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
    ctx.fillText(el.id, el.x + el.w * 0.5, cy - 5);
    ctx.font = `${Math.max(6, w * 0.016)}px Arial`;
    ctx.fillStyle = '#555';
    ctx.fillText(el.desc, el.x + el.w * 0.5, cy + 7);
    ctx.fillStyle = el.color;
    ctx.font = `${Math.max(6, w * 0.016)}px Arial`;
    ctx.fillText(el.name, el.x + el.w * 0.5, cy - h * 0.1);
  });

  // DNA backbone
  ctx.strokeStyle = '#4A90E2'; ctx.lineWidth = 3;
  ctx.beginPath();
  ctx.moveTo(w * 0.04, cy + 16); ctx.lineTo(w * 0.96, cy + 16); ctx.stroke();

  // Repressor protein (when no lactose)
  const repX = w * 0.345, repY = cy - h * 0.22;
  ctx.fillStyle = '#E74C3C';
  ctx.strokeStyle = '#C0392B'; ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.arc(repX, repY, w * 0.055, 0, Math.PI * 2);
  ctx.fill(); ctx.stroke();
  ctx.fillStyle = '#fff';
  ctx.font = `bold ${Math.max(7, w * 0.022)}px Arial`;
  ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
  ctx.fillText('Repressor', repX, repY);
  ctx.strokeStyle = '#E74C3C'; ctx.lineWidth = 2;
  ctx.setLineDash([3, 3]);
  ctx.beginPath();
  ctx.moveTo(repX, repY + w * 0.055); ctx.lineTo(repX, cy - 16); ctx.stroke();
  ctx.setLineDash([]);

  // Allolactose (inducer) removing repressor
  ctx.fillStyle = '#F39C12';
  ctx.beginPath();
  ctx.arc(repX + w * 0.12, repY, w * 0.035, 0, Math.PI * 2);
  ctx.fill();
  ctx.fillStyle = '#fff';
  ctx.font = `bold ${Math.max(6, w * 0.016)}px Arial`;
  ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
  ctx.fillText('Ind.', repX + w * 0.12, repY);
  ctx.strokeStyle = '#F39C12'; ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.moveTo(repX + w * 0.085, repY);
  ctx.lineTo(repX + w * 0.035, repY);
  ctx.stroke();
  ctx.fillStyle = '#F39C12';
  ctx.beginPath();
  ctx.moveTo(repX + w * 0.035, repY);
  ctx.lineTo(repX + w * 0.06, repY - 4);
  ctx.lineTo(repX + w * 0.06, repY + 4);
  ctx.closePath(); ctx.fill();

  // Transcription arrow
  ctx.strokeStyle = '#FF9F43'; ctx.lineWidth = 3;
  ctx.beginPath();
  ctx.moveTo(w * 0.24, cy - h * 0.08); ctx.lineTo(w * 0.92, cy - h * 0.08); ctx.stroke();
  ctx.fillStyle = '#FF9F43';
  ctx.beginPath();
  ctx.moveTo(w * 0.92, cy - h * 0.08); ctx.lineTo(w * 0.89, cy - h * 0.08 - 5); ctx.lineTo(w * 0.89, cy - h * 0.08 + 5);
  ctx.closePath(); ctx.fill();
  ctx.fillStyle = '#FF9F43';
  ctx.font = `${Math.max(7, w * 0.02)}px Arial`;
  ctx.textAlign = 'center'; ctx.textBaseline = 'alphabetic';
  ctx.fillText('→ mRNA (when induced)', cx, cy - h * 0.11);

  ctx.fillStyle = '#222';
  ctx.font = `bold ${Math.max(12, w * 0.04)}px Arial`;
  ctx.textAlign = 'center'; ctx.textBaseline = 'alphabetic';
  ctx.fillText('Lac Operon Structure', cx, 22);
}

static drawRepressorProtein(ctx, width, height, componentFocus) {
  const w = width, h = height;
  const cx = w * 0.5, cy = h * 0.5;

  // DNA with operator
  for (let s = 0; s < 2; s++) {
    ctx.strokeStyle = s === 0 ? '#4A90E2' : '#E24A4A';
    ctx.lineWidth = 4;
    ctx.beginPath();
    ctx.moveTo(w * 0.04, cy + s * 14 - 7); ctx.lineTo(w * 0.96, cy + s * 14 - 7); ctx.stroke();
  }

  // Operator highlight
  ctx.fillStyle = 'rgba(231,76,60,0.15)';
  ctx.strokeStyle = '#E74C3C'; ctx.lineWidth = 2;
  ctx.setLineDash([4, 3]);
  ctx.beginPath();
  ctx.roundRect(cx - w * 0.15, cy - 10, w * 0.3, 34, 6);
  ctx.fill(); ctx.stroke(); ctx.setLineDash([]);
  ctx.fillStyle = '#E74C3C';
  ctx.font = `${Math.max(8, w * 0.024)}px Arial`;
  ctx.textAlign = 'center'; ctx.textBaseline = 'alphabetic';
  ctx.fillText('Operator', cx, cy - 14);

  // Repressor dimer sitting on operator
  [-1, 1].forEach(side => {
    const rx = cx + side * w * 0.07;
    const ry = cy - h * 0.18;
    const rg = ctx.createRadialGradient(rx - 4, ry - 4, 3, rx, ry, w * 0.09);
    rg.addColorStop(0, '#E74C3CAA');
    rg.addColorStop(1, '#C0392B55');
    ctx.fillStyle = rg;
    ctx.strokeStyle = '#C0392B'; ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.ellipse(rx, ry, w * 0.09, h * 0.1, 0, 0, Math.PI * 2);
    ctx.fill(); ctx.stroke();
    ctx.fillStyle = '#fff';
    ctx.font = `bold ${Math.max(8, w * 0.024)}px Arial`;
    ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
    ctx.fillText(side < 0 ? 'Monomer' : 'Monomer', rx, ry - 5);
    ctx.font = `${Math.max(6, w * 0.018)}px Arial`;
    ctx.fillText('(HTH domain)', rx, ry + 6);

    // DNA-binding arm
    ctx.strokeStyle = '#E74C3C'; ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.moveTo(rx + side * w * 0.03, ry + h * 0.1);
    ctx.lineTo(rx + side * w * 0.06, cy - 10);
    ctx.stroke();
  });

  // Inducer binding sites
  ctx.fillStyle = '#F39C12';
  ctx.strokeStyle = '#D35400'; ctx.lineWidth = 2;
  [cx - w * 0.14, cx + w * 0.14].forEach(ix => {
    ctx.beginPath();
    ctx.arc(ix, cy - h * 0.28, w * 0.04, 0, Math.PI * 2);
    ctx.fill(); ctx.stroke();
    ctx.fillStyle = '#fff';
    ctx.font = `bold ${Math.max(7, w * 0.02)}px Arial`;
    ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
    ctx.fillText('IBD', ix, cy - h * 0.28);
    ctx.fillStyle = '#F39C12';
  });

  // Allosteric change with inducer
  const indY = cy - h * 0.42;
  ctx.fillStyle = '#F39C12';
  ctx.beginPath();
  ctx.arc(cx - w * 0.26, indY, w * 0.04, 0, Math.PI * 2);
  ctx.fill();
  ctx.fillStyle = '#fff';
  ctx.font = `bold ${Math.max(7, w * 0.02)}px Arial`;
  ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
  ctx.fillText('Ind.', cx - w * 0.26, indY);
  ctx.strokeStyle = '#F39C12'; ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.moveTo(cx - w * 0.22, indY);
  ctx.quadraticCurveTo(cx - w * 0.18, cy - h * 0.38, cx - w * 0.14, cy - h * 0.28);
  ctx.stroke();
  ctx.fillStyle = '#F39C12';
  ctx.font = `${Math.max(7, w * 0.02)}px Arial`;
  ctx.textAlign = 'center'; ctx.textBaseline = 'alphabetic';
  ctx.fillText('Inducer causes', cx - w * 0.26, indY - 18);
  ctx.fillText('conformational change', cx - w * 0.26, indY - 6);

  // Release arrow
  ctx.strokeStyle = '#27AE60'; ctx.lineWidth = 3;
  ctx.beginPath();
  ctx.moveTo(cx + w * 0.28, cy - h * 0.12);
  ctx.lineTo(cx + w * 0.38, cy - h * 0.28);
  ctx.stroke();
  ctx.fillStyle = '#27AE60';
  ctx.font = `${Math.max(7, w * 0.022)}px Arial`;
  ctx.textAlign = 'left'; ctx.textBaseline = 'alphabetic';
  ctx.fillText('↑ Releases from DNA', cx + w * 0.3, cy - h * 0.3);

  ctx.fillStyle = '#222';
  ctx.font = `bold ${Math.max(12, w * 0.04)}px Arial`;
  ctx.textAlign = 'center'; ctx.textBaseline = 'alphabetic';
  ctx.fillText('Repressor Protein', cx, 22);
}

static drawActivatorProtein(ctx, width, height, componentFocus) {
  const w = width, h = height;
  const cx = w * 0.5, cy = h * 0.5;

  // DNA
  for (let s = 0; s < 2; s++) {
    ctx.strokeStyle = s === 0 ? '#4A90E2' : '#E24A4A';
    ctx.lineWidth = 4;
    ctx.beginPath();
    ctx.moveTo(w * 0.04, cy + s * 14 - 7); ctx.lineTo(w * 0.96, cy + s * 14 - 7); ctx.stroke();
  }

  // UAS (upstream activating sequence)
  ctx.fillStyle = 'rgba(52,152,219,0.15)';
  ctx.strokeStyle = '#3498DB'; ctx.lineWidth = 2;
  ctx.setLineDash([4, 3]);
  ctx.beginPath();
  ctx.roundRect(cx - w * 0.22, cy - 10, w * 0.18, 34, 6);
  ctx.fill(); ctx.stroke(); ctx.setLineDash([]);
  ctx.fillStyle = '#3498DB';
  ctx.font = `${Math.max(7, w * 0.02)}px Arial`;
  ctx.textAlign = 'center'; ctx.textBaseline = 'alphabetic';
  ctx.fillText('UAS', cx - w * 0.13, cy - 14);

  // Activator protein (with ligand)
  const actX = cx - w * 0.13, actY = cy - h * 0.22;
  const ag = ctx.createRadialGradient(actX - 6, actY - 6, 4, actX, actY, w * 0.12);
  ag.addColorStop(0, '#27AE60CC');
  ag.addColorStop(1, '#1E844955');
  ctx.fillStyle = ag;
  ctx.strokeStyle = '#1E8449'; ctx.lineWidth = 3;
  ctx.beginPath();
  ctx.ellipse(actX, actY, w * 0.12, h * 0.12, 0, 0, Math.PI * 2);
  ctx.fill(); ctx.stroke();
  ctx.fillStyle = '#fff';
  ctx.font = `bold ${Math.max(9, w * 0.028)}px Arial`;
  ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
  ctx.fillText('Activator', actX, actY - 6);
  ctx.font = `${Math.max(7, w * 0.02)}px Arial`;
  ctx.fillText('(bound ligand)', actX, actY + 8);

  // DNA binding domain
  ctx.strokeStyle = '#1E8449'; ctx.lineWidth = 3;
  ctx.beginPath();
  ctx.moveTo(actX, actY + h * 0.12); ctx.lineTo(actX, cy - 10); ctx.stroke();

  // Activation domain reaching RNA Pol
  ctx.fillStyle = '#8E44AD';
  ctx.strokeStyle = '#6C3483'; ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.arc(cx + w * 0.06, cy - h * 0.18, w * 0.09, 0, Math.PI * 2);
  ctx.fill(); ctx.stroke();
  ctx.fillStyle = '#fff';
  ctx.font = `bold ${Math.max(8, w * 0.024)}px Arial`;
  ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
  ctx.fillText('RNA', cx + w * 0.06, cy - h * 0.18 - 5);
  ctx.fillText('Pol II', cx + w * 0.06, cy - h * 0.18 + 6);

  // Interaction line
  ctx.strokeStyle = '#27AE60'; ctx.lineWidth = 3;
  ctx.setLineDash([4, 3]);
  ctx.beginPath();
  ctx.moveTo(actX + w * 0.12, actY); ctx.lineTo(cx + w * 0.06 - w * 0.09, cy - h * 0.18);
  ctx.stroke(); ctx.setLineDash([]);
  ctx.fillStyle = '#27AE60';
  ctx.font = `${Math.max(7, w * 0.02)}px Arial`;
  ctx.textAlign = 'center'; ctx.textBaseline = 'alphabetic';
  ctx.fillText('Interaction', (actX + cx) / 2, cy - h * 0.25);

  // Enhanced transcription
  ctx.strokeStyle = '#FF9F43'; ctx.lineWidth = 4;
  ctx.beginPath();
  ctx.moveTo(cx + w * 0.12, cy - h * 0.05); ctx.lineTo(w * 0.92, cy - h * 0.05); ctx.stroke();
  ctx.fillStyle = '#FF9F43';
  ctx.beginPath();
  ctx.moveTo(w * 0.92, cy - h * 0.05); ctx.lineTo(w * 0.9, cy - h * 0.05 - 5); ctx.lineTo(w * 0.9, cy - h * 0.05 + 5);
  ctx.closePath(); ctx.fill();
  ctx.fillStyle = '#FF9F43';
  ctx.font = `bold ${Math.max(8, w * 0.024)}px Arial`;
  ctx.textAlign = 'center'; ctx.textBaseline = 'alphabetic';
  ctx.fillText('↑ Enhanced transcription', w * 0.7, cy - h * 0.08);

  // Ligand binding
  ctx.fillStyle = '#F39C12';
  ctx.beginPath();
  ctx.arc(actX + w * 0.1, actY + h * 0.06, w * 0.035, 0, Math.PI * 2);
  ctx.fill();
  ctx.fillStyle = '#fff';
  ctx.font = `bold ${Math.max(6, w * 0.018)}px Arial`;
  ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
  ctx.fillText('Lig.', actX + w * 0.1, actY + h * 0.06);

  ctx.fillStyle = '#222';
  ctx.font = `bold ${Math.max(12, w * 0.04)}px Arial`;
  ctx.textAlign = 'center'; ctx.textBaseline = 'alphabetic';
  ctx.fillText('Activator Protein', cx, 22);
}

static drawGeneExpression(ctx, width, height, componentFocus) {
  const w = width, h = height;
  const cx = w * 0.5;

  // Central dogma flow with regulation
  const steps = [
    { y: h * 0.18, label: 'Chromatin Remodeling', icon: '⊛', color: '#E74C3C', desc: 'Histone modifications, DNA methylation' },
    { y: h * 0.34, label: 'Transcription', icon: '→', color: '#E67E22', desc: 'Promoter + TF + RNA Pol II' },
    { y: h * 0.5, label: 'RNA Processing', icon: '✂', color: '#F39C12', desc: 'Capping, splicing, poly(A)' },
    { y: h * 0.66, label: 'Translation', icon: '⚙', color: '#27AE60', desc: 'Ribosome + tRNA + factors' },
    { y: h * 0.82, label: 'Post-translational', icon: '★', color: '#3498DB', desc: 'Folding, modification, localization' }
  ];

  steps.forEach((step, i) => {
    // Background bar
    ctx.fillStyle = step.color + '18';
    ctx.strokeStyle = step.color; ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.roundRect(w * 0.06, step.y - h * 0.06, w * 0.88, h * 0.1, 8);
    ctx.fill(); ctx.stroke();

    // Icon
    ctx.fillStyle = step.color;
    ctx.font = `${Math.max(12, w * 0.04)}px Arial`;
    ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
    ctx.fillText(step.icon, w * 0.13, step.y);

    // Label
    ctx.font = `bold ${Math.max(10, w * 0.032)}px Arial`;
    ctx.textAlign = 'left'; ctx.textBaseline = 'middle';
    ctx.fillText(step.label, w * 0.2, step.y - 7);

    // Description
    ctx.fillStyle = '#555';
    ctx.font = `${Math.max(8, w * 0.022)}px Arial`;
    ctx.fillText(step.desc, w * 0.2, step.y + 7);

    // Connecting arrow
    if (i < steps.length - 1) {
      ctx.strokeStyle = step.color + '88'; ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(cx, step.y + h * 0.04);
      ctx.lineTo(cx, steps[i + 1].y - h * 0.04);
      ctx.stroke();
      ctx.fillStyle = step.color + '88';
      ctx.beginPath();
      ctx.moveTo(cx, steps[i + 1].y - h * 0.04);
      ctx.lineTo(cx - 4, steps[i + 1].y - h * 0.04 - 6);
      ctx.lineTo(cx + 4, steps[i + 1].y - h * 0.04 - 6);
      ctx.closePath(); ctx.fill();
    }

    // Regulatory input arrows (external)
    ctx.strokeStyle = '#BDC3C7'; ctx.lineWidth = 1;
    ctx.setLineDash([3, 3]);
    ctx.beginPath();
    ctx.moveTo(w * 0.04, step.y); ctx.lineTo(w * 0.06, step.y); ctx.stroke();
    ctx.setLineDash([]);
  });

  ctx.fillStyle = '#222';
  ctx.font = `bold ${Math.max(12, w * 0.04)}px Arial`;
  ctx.textAlign = 'center'; ctx.textBaseline = 'alphabetic';
  ctx.fillText('Gene Expression Levels', cx, 22);
}
Cell Signaling / Molecular
static drawATPStructure(ctx, width, height, componentFocus) {
  const w = width, h = height;
  const cx = w * 0.5, cy = h * 0.48;

  // Adenine base
  const adenineX = cx - w * 0.28, adenineY = cy - h * 0.05;
  ctx.fillStyle = '#3498DB';
  ctx.strokeStyle = '#1A5276'; ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.moveTo(adenineX, adenineY - h * 0.12);
  ctx.lineTo(adenineX + w * 0.1, adenineY - h * 0.12);
  ctx.lineTo(adenineX + w * 0.14, adenineY);
  ctx.lineTo(adenineX + w * 0.1, adenineY + h * 0.12);
  ctx.lineTo(adenineX, adenineY + h * 0.12);
  ctx.lineTo(adenineX - w * 0.04, adenineY);
  ctx.closePath();
  ctx.fill(); ctx.stroke();
  ctx.fillStyle = '#fff';
  ctx.font = `bold ${Math.max(9, w * 0.028)}px Arial`;
  ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
  ctx.fillText('Adenine', adenineX + w * 0.05, adenineY);

  // N-glycosidic bond
  ctx.strokeStyle = '#555'; ctx.lineWidth = 3;
  ctx.beginPath();
  ctx.moveTo(adenineX + w * 0.14, adenineY); ctx.lineTo(adenineX + w * 0.2, adenineY); ctx.stroke();

  // Ribose sugar
  const riboseX = adenineX + w * 0.24, riboseY = adenineY;
  ctx.fillStyle = '#F39C12';
  ctx.strokeStyle = '#D35400'; ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.moveTo(riboseX, riboseY - h * 0.1);
  ctx.lineTo(riboseX + w * 0.1, riboseY - h * 0.04);
  ctx.lineTo(riboseX + w * 0.08, riboseY + h * 0.08);
  ctx.lineTo(riboseX - w * 0.02, riboseY + h * 0.08);
  ctx.lineTo(riboseX - w * 0.04, riboseY - h * 0.04);
  ctx.closePath();
  ctx.fill(); ctx.stroke();
  ctx.fillStyle = '#fff';
  ctx.font = `bold ${Math.max(8, w * 0.024)}px Arial`;
  ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
  ctx.fillText("Ribose\n(2'OH)", riboseX + w * 0.03, riboseY);

  // Phosphoanhydride chain
  const pColors = ['#E74C3C', '#C0392B', '#922B21'];
  const pNames = ['α', 'β', 'γ'];
  const pStartX = riboseX + w * 0.12;

  pNames.forEach((pn, i) => {
    const px = pStartX + i * w * 0.13;
    // Bond line
    if (i > 0) {
      ctx.strokeStyle = '#555'; ctx.lineWidth = 3;
      ctx.beginPath();
      ctx.moveTo(px - w * 0.09, riboseY); ctx.lineTo(px - w * 0.04, riboseY); ctx.stroke();
      ctx.fillStyle = '#E74C3C';
      ctx.font = `${Math.max(7, w * 0.02)}px Arial`;
      ctx.textAlign = 'center'; ctx.textBaseline = 'alphabetic';
      ctx.fillText('~', px - w * 0.065, riboseY - h * 0.04);
    } else {
      ctx.strokeStyle = '#555'; ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(riboseX + w * 0.08, riboseY); ctx.lineTo(px - w * 0.04, riboseY); ctx.stroke();
    }

    // Phosphate group
    const pg = ctx.createRadialGradient(px - 4, riboseY - 4, 2, px, riboseY, w * 0.045);
    pg.addColorStop(0, pColors[i]);
    pg.addColorStop(1, pColors[i] + '88');
    ctx.fillStyle = pg;
    ctx.strokeStyle = pColors[i]; ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.arc(px, riboseY, w * 0.045, 0, Math.PI * 2);
    ctx.fill(); ctx.stroke();
    ctx.fillStyle = '#fff';
    ctx.font = `bold ${Math.max(8, w * 0.024)}px Arial`;
    ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
    ctx.fillText(pn + '-P', px, riboseY);

    // Negative charges (O-)
    for (let j = 0; j < 2; j++) {
      const oAngle = (-Math.PI * 0.4 + j * Math.PI * 0.5);
      const ox = px + Math.cos(oAngle) * w * 0.06;
      const oy = riboseY + Math.sin(oAngle) * h * 0.06;
      ctx.strokeStyle = '#E74C3C'; ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.moveTo(px + Math.cos(oAngle) * w * 0.045, riboseY + Math.sin(oAngle) * h * 0.045);
      ctx.lineTo(ox, oy);
      ctx.stroke();
      ctx.fillStyle = '#E74C3C';
      ctx.font = `${Math.max(7, w * 0.02)}px Arial`;
      ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
      ctx.fillText('O⁻', ox, oy);
    }

    // Labels
    ctx.fillStyle = pColors[i];
    ctx.font = `${Math.max(8, w * 0.024)}px Arial`;
    ctx.textAlign = 'center'; ctx.textBaseline = 'alphabetic';
    ctx.fillText(pNames[i], px, riboseY + w * 0.055 + 14);
  });

  // ATP hydrolysis reaction
  const rxnY = h * 0.78;
  ctx.fillStyle = '#333';
  ctx.font = `bold ${Math.max(9, w * 0.028)}px Arial`;
  ctx.textAlign = 'center'; ctx.textBaseline = 'alphabetic';
  ctx.fillText('ATP + H₂O  →  ADP + Pᵢ  +  30.5 kJ/mol', cx, rxnY);

  // High-energy bond brackets
  ctx.strokeStyle = '#E74C3C'; ctx.lineWidth = 2;
  ctx.setLineDash([4, 3]);
  ctx.beginPath();
  ctx.roundRect(pStartX + w * 0.09, riboseY - w * 0.055, w * 0.28, w * 0.11, 4);
  ctx.stroke(); ctx.setLineDash([]);
  ctx.fillStyle = '#E74C3C';
  ctx.font = `${Math.max(7, w * 0.02)}px Arial`;
  ctx.textAlign = 'center'; ctx.textBaseline = 'alphabetic';
  ctx.fillText('High-energy bonds (~)', pStartX + w * 0.23, riboseY - w * 0.055 - 4);

  ctx.fillStyle = '#222';
  ctx.font = `bold ${Math.max(12, w * 0.04)}px Arial`;
  ctx.textAlign = 'center';
  ctx.fillText('ATP Structure', cx, 22);
}

static drawNADHStructure(ctx, width, height, componentFocus) {
  const w = width, h = height;
  const cx = w * 0.5, cy = h * 0.45;

  // Nicotinamide ring (left)
  const nicX = cx - w * 0.22, nicY = cy;
  ctx.fillStyle = '#27AE60';
  ctx.strokeStyle = '#1E8449'; ctx.lineWidth = 2;
  ctx.beginPath();
  for (let i = 0; i < 6; i++) {
    const angle = (i / 6) * Math.PI * 2 - Math.PI * 0.5;
    const x = nicX + Math.cos(angle) * w * 0.09;
    const y = nicY + Math.sin(angle) * h * 0.1;
    if (i === 0) ctx.moveTo(x, y); else ctx.lineTo(x, y);
  }
  ctx.closePath();
  ctx.fill(); ctx.stroke();
  ctx.fillStyle = '#fff';
  ctx.font = `bold ${Math.max(7, w * 0.022)}px Arial`;
  ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
  ctx.fillText('Nicotinamide', nicX, nicY - 4);
  ctx.font = `${Math.max(6, w * 0.016)}px Arial`;
  ctx.fillText('(pyridine ring)', nicX, nicY + 6);

  // Amide group
  ctx.fillStyle = '#27AE60';
  ctx.font = `${Math.max(7, w * 0.02)}px Arial`;
  ctx.textAlign = 'center'; ctx.textBaseline = 'alphabetic';
  ctx.fillText('CONH₂', nicX, nicY - w * 0.1 - 8);

  // N+ (oxidized) / NH (reduced) label
  ctx.fillStyle = '#E74C3C';
  ctx.font = `bold ${Math.max(8, w * 0.024)}px Arial`;
  ctx.textAlign = 'left'; ctx.textBaseline = 'middle';
  ctx.fillText('NAD⁺ ⇌ NADH + H⁺', cx - w * 0.35, cy + h * 0.2);

  // Ribose 1
  const rib1X = nicX + w * 0.14;
  ctx.fillStyle = '#F39C12';
  ctx.strokeStyle = '#D35400'; ctx.lineWidth = 2;
  ctx.beginPath();
  for (let i = 0; i < 5; i++) {
    const angle = (i / 5) * Math.PI * 2 - Math.PI * 0.5;
    const x = rib1X + Math.cos(angle) * w * 0.06;
    const y = nicY + Math.sin(angle) * h * 0.07;
    if (i === 0) ctx.moveTo(x, y); else ctx.lineTo(x, y);
  }
  ctx.closePath();
  ctx.fill(); ctx.stroke();
  ctx.fillStyle = '#fff';
  ctx.font = `bold ${Math.max(6, w * 0.018)}px Arial`;
  ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
  ctx.fillText("Rib", rib1X, nicY);

  // Pyrophosphate bridge
  ctx.strokeStyle = '#E74C3C'; ctx.lineWidth = 3;
  ctx.beginPath();
  ctx.moveTo(rib1X + w * 0.06, nicY); ctx.lineTo(cx, nicY); ctx.stroke();
  ctx.fillStyle = '#E74C3C';
  ctx.font = `${Math.max(7, w * 0.02)}px Arial`;
  ctx.textAlign = 'center'; ctx.textBaseline = 'alphabetic';
  ctx.fillText('P~P', cx - w * 0.04, nicY - 8);

  // Ribose 2
  ctx.fillStyle = '#F39C12';
  ctx.strokeStyle = '#D35400'; ctx.lineWidth = 2;
  ctx.beginPath();
  for (let i = 0; i < 5; i++) {
    const angle = (i / 5) * Math.PI * 2 - Math.PI * 0.5;
    const x = cx + w * 0.08 + Math.cos(angle) * w * 0.06;
    const y = nicY + Math.sin(angle) * h * 0.07;
    if (i === 0) ctx.moveTo(x, y); else ctx.lineTo(x, y);
  }
  ctx.closePath();
  ctx.fill(); ctx.stroke();
  ctx.fillStyle = '#fff';
  ctx.font = `bold ${Math.max(6, w * 0.018)}px Arial`;
  ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
  ctx.fillText("Rib", cx + w * 0.08, nicY);

  // Adenine ring
  const adenX = cx + w * 0.26, adenY = nicY;
  ctx.fillStyle = '#3498DB';
  ctx.strokeStyle = '#1A5276'; ctx.lineWidth = 2;
  ctx.beginPath();
  for (let i = 0; i < 6; i++) {
    const angle = (i / 6) * Math.PI * 2 - Math.PI * 0.5;
    const x = adenX + Math.cos(angle) * w * 0.08;
    const y = adenY + Math.sin(angle) * h * 0.1;
    if (i === 0) ctx.moveTo(x, y); else ctx.lineTo(x, y);
  }
  ctx.closePath();
  ctx.fill(); ctx.stroke();
  ctx.fillStyle = '#fff';
  ctx.font = `bold ${Math.max(7, w * 0.022)}px Arial`;
  ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
  ctx.fillText('Adenine', adenX, adenY);
  ctx.strokeStyle = '#E74C3C'; ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.moveTo(cx + w * 0.14, nicY); ctx.lineTo(adenX - w * 0.08, nicY); ctx.stroke();

  // Redox arrow
  const redY = h * 0.75;
  ctx.strokeStyle = '#27AE60'; ctx.lineWidth = 3;
  ctx.beginPath();
  ctx.moveTo(cx - w * 0.2, redY); ctx.lineTo(cx + w * 0.2, redY); ctx.stroke();
  ctx.fillStyle = '#E74C3C';
  ctx.font = `bold ${Math.max(8, w * 0.024)}px Arial`;
  ctx.textAlign = 'center'; ctx.textBaseline = 'alphabetic';
  ctx.fillText('NAD⁺ + 2H⁺ + 2e⁻', cx - w * 0.18, redY - 8);
  ctx.fillStyle = '#27AE60';
  ctx.fillText('NADH + H⁺', cx + w * 0.08, redY - 8);

  // 2H arrows
  ctx.strokeStyle = '#999'; ctx.lineWidth = 2;
  [[cx - w * 0.05, '+ 2H (reduction)'], [cx + w * 0.05, '− 2H (oxidation)']].forEach(([x, lbl], i) => {
    ctx.fillStyle = '#999';
    ctx.font = `${Math.max(7, w * 0.02)}px Arial`;
    ctx.textAlign = 'center'; ctx.textBaseline = 'alphabetic';
    ctx.fillText(lbl, x, redY + 18);
  });

  ctx.fillStyle = '#222';
  ctx.font = `bold ${Math.max(12, w * 0.04)}px Arial`;
  ctx.textAlign = 'center'; ctx.textBaseline = 'alphabetic';
  ctx.fillText('NADH / NAD⁺ Structure', cx, 22);
}

static drawPhosphorylation(ctx, width, height, componentFocus) {
  const w = width, h = height;
  const cx = w * 0.5, cy = h * 0.5;

  // Protein before phosphorylation (left)
  const drawProtein = (x, y, phos, label) => {
    const g = ctx.createRadialGradient(x - 8, y - 8, 4, x, y, w * 0.16);
    g.addColorStop(0, '#3498DBCC');
    g.addColorStop(1, '#2980B944');
    ctx.fillStyle = g;
    ctx.strokeStyle = '#2980B9'; ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.ellipse(x, y, w * 0.18, h * 0.2, 0, 0, Math.PI * 2);
    ctx.fill(); ctx.stroke();
    ctx.fillStyle = '#fff';
    ctx.font = `bold ${Math.max(9, w * 0.028)}px Arial`;
    ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
    ctx.fillText('Protein', x, y - 6);
    ctx.font = `${Math.max(7, w * 0.02)}px Arial`;
    ctx.fillText(label, x, y + 6);

    // Ser/Thr/Tyr residue
    const resAngle = -Math.PI * 0.3;
    const rx = x + Math.cos(resAngle) * w * 0.18;
    const ry = y + Math.sin(resAngle) * h * 0.2;
    ctx.fillStyle = phos ? '#E74C3C' : '#BDC3C7';
    ctx.strokeStyle = phos ? '#C0392B' : '#95A5A6';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.arc(rx, ry, w * 0.04, 0, Math.PI * 2);
    ctx.fill(); ctx.stroke();
    ctx.fillStyle = '#fff';
    ctx.font = `bold ${Math.max(7, w * 0.02)}px Arial`;
    ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
    ctx.fillText(phos ? 'P' : 'Ser', rx, ry);

    if (phos) {
      // Phosphate group
      ctx.fillStyle = '#F39C12';
      ctx.strokeStyle = '#D35400'; ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.arc(rx + w * 0.055, ry - h * 0.04, w * 0.035, 0, Math.PI * 2);
      ctx.fill(); ctx.stroke();
      ctx.fillStyle = '#fff';
      ctx.font = `bold ${Math.max(6, w * 0.018)}px Arial`;
      ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
      ctx.fillText('PO₄', rx + w * 0.055, ry - h * 0.04);
      ctx.strokeStyle = '#F39C12'; ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(rx + w * 0.04, ry - w * 0.04); ctx.lineTo(rx + w * 0.035, ry - h * 0.04 + w * 0.035); ctx.stroke();
    }
  };

  drawProtein(w * 0.22, cy, false, '(inactive)');
  drawProtein(w * 0.78, cy, true, '(active)');

  // Kinase
  const kinX = cx, kinY = cy - h * 0.22;
  ctx.fillStyle = '#9B59B6';
  ctx.strokeStyle = '#6C3483'; ctx.lineWidth = 3;
  ctx.beginPath();
  ctx.arc(kinX, kinY, w * 0.08, 0, Math.PI * 2);
  ctx.fill(); ctx.stroke();
  ctx.fillStyle = '#fff';
  ctx.font = `bold ${Math.max(9, w * 0.028)}px Arial`;
  ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
  ctx.fillText('Kinase', kinX, kinY - 5);
  ctx.font = `${Math.max(7, w * 0.02)}px Arial`;
  ctx.fillText('(+ ATP)', kinX, kinY + 7);

  // Phosphatase
  const phoX = cx, phoY = cy + h * 0.22;
  ctx.fillStyle = '#27AE60';
  ctx.strokeStyle = '#1E8449'; ctx.lineWidth = 3;
  ctx.beginPath();
  ctx.arc(phoX, phoY, w * 0.08, 0, Math.PI * 2);
  ctx.fill(); ctx.stroke();
  ctx.fillStyle = '#fff';
  ctx.font = `bold ${Math.max(9, w * 0.028)}px Arial`;
  ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
  ctx.fillText('Phosphatase', phoX, phoY - 5);
  ctx.font = `${Math.max(7, w * 0.02)}px Arial`;
  ctx.fillText('(+ H₂O)', phoX, phoY + 7);

  // Forward arrow (phosphorylation)
  ctx.strokeStyle = '#9B59B6'; ctx.lineWidth = 3;
  ctx.beginPath();
  ctx.moveTo(w * 0.4, cy); ctx.lineTo(w * 0.6, cy); ctx.stroke();
  ctx.fillStyle = '#9B59B6';
  ctx.beginPath();
  ctx.moveTo(w * 0.6, cy); ctx.lineTo(w * 0.57, cy - 5); ctx.lineTo(w * 0.57, cy + 5);
  ctx.closePath(); ctx.fill();
  ctx.fillStyle = '#9B59B6';
  ctx.font = `bold ${Math.max(8, w * 0.024)}px Arial`;
  ctx.textAlign = 'center'; ctx.textBaseline = 'alphabetic';
  ctx.fillText('+ ATP → ADP', cx, cy - 6);

  // Reverse arrow (dephosphorylation)
  ctx.strokeStyle = '#27AE60'; ctx.lineWidth = 3;
  ctx.beginPath();
  ctx.moveTo(w * 0.6, cy + 12); ctx.lineTo(w * 0.4, cy + 12); ctx.stroke();
  ctx.fillStyle = '#27AE60';
  ctx.beginPath();
  ctx.moveTo(w * 0.4, cy + 12); ctx.lineTo(w * 0.43, cy + 7); ctx.lineTo(w * 0.43, cy + 17);
  ctx.closePath(); ctx.fill();
  ctx.fillStyle = '#27AE60';
  ctx.font = `bold ${Math.max(8, w * 0.024)}px Arial`;
  ctx.textAlign = 'center'; ctx.textBaseline = 'alphabetic';
  ctx.fillText('+ H₂O → Pᵢ', cx, cy + 24);

  ctx.fillStyle = '#222';
  ctx.font = `bold ${Math.max(12, w * 0.04)}px Arial`;
  ctx.textAlign = 'center'; ctx.textBaseline = 'alphabetic';
  ctx.fillText('Phosphorylation / Dephosphorylation', cx, 22);
}

static drawProteinKinase(ctx, width, height, componentFocus) {
  const w = width, h = height;
  const cx = w * 0.5, cy = h * 0.5;

  // Bilobal structure
  // N-lobe (smaller, ATP binding)
  const nLobeX = cx - w * 0.1, nLobeY = cy - h * 0.08;
  const ng = ctx.createRadialGradient(nLobeX - 6, nLobeY - 6, 4, nLobeX, nLobeY, w * 0.16);
  ng.addColorStop(0, '#3498DBCC');
  ng.addColorStop(1, '#1A5276AA');
  ctx.fillStyle = ng;
  ctx.strokeStyle = '#2980B9'; ctx.lineWidth = 3;
  ctx.beginPath();
  ctx.ellipse(nLobeX, nLobeY, w * 0.18, h * 0.18, -0.2, 0, Math.PI * 2);
  ctx.fill(); ctx.stroke();
  ctx.fillStyle = '#fff';
  ctx.font = `bold ${Math.max(9, w * 0.028)}px Arial`;
  ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
  ctx.fillText('N-lobe', nLobeX, nLobeY - 6);
  ctx.font = `${Math.max(7, w * 0.02)}px Arial`;
  ctx.fillText('(β-sheets)', nLobeX, nLobeY + 6);

  // C-lobe (larger, substrate binding)
  const cLobeX = cx + w * 0.1, cLobeY = cy + h * 0.08;
  const cg = ctx.createRadialGradient(cLobeX - 6, cLobeY - 6, 4, cLobeX, cLobeY, w * 0.2);
  cg.addColorStop(0, '#E67E22CC');
  cg.addColorStop(1, '#D35400AA');
  ctx.fillStyle = cg;
  ctx.strokeStyle = '#D35400'; ctx.lineWidth = 3;
  ctx.beginPath();
  ctx.ellipse(cLobeX, cLobeY, w * 0.22, h * 0.22, -0.2, 0, Math.PI * 2);
  ctx.fill(); ctx.stroke();
  ctx.fillStyle = '#fff';
  ctx.font = `bold ${Math.max(9, w * 0.028)}px Arial`;
  ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
  ctx.fillText('C-lobe', cLobeX, cLobeY - 6);
  ctx.font = `${Math.max(7, w * 0.02)}px Arial`;
  ctx.fillText('(α-helices)', cLobeX, cLobeY + 6);

  // ATP in cleft
  const atpX = cx, atpY = cy - h * 0.05;
  ctx.fillStyle = '#F39C12';
  ctx.strokeStyle = '#D35400'; ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.arc(atpX, atpY, w * 0.055, 0, Math.PI * 2);
  ctx.fill(); ctx.stroke();
  ctx.fillStyle = '#fff';
  ctx.font = `bold ${Math.max(8, w * 0.024)}px Arial`;
  ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
  ctx.fillText('ATP', atpX, atpY);

  // Activation loop
  ctx.strokeStyle = '#E74C3C'; ctx.lineWidth = 3;
  ctx.setLineDash([4, 3]);
  ctx.beginPath();
  ctx.moveTo(cx - w * 0.08, cy + h * 0.14);
  ctx.bezierCurveTo(cx - w * 0.02, cy + h * 0.25, cx + w * 0.06, cy + h * 0.25, cx + w * 0.14, cy + h * 0.14);
  ctx.stroke(); ctx.setLineDash([]);
  ctx.fillStyle = '#E74C3C';
  ctx.font = `bold ${Math.max(7, w * 0.02)}px Arial`;
  ctx.textAlign = 'center'; ctx.textBaseline = 'alphabetic';
  ctx.fillText('Activation loop (DFG motif)', cx + w * 0.03, cy + h * 0.3);

  // Substrate peptide
  ctx.strokeStyle = '#27AE60'; ctx.lineWidth = 4;
  ctx.beginPath();
  ctx.moveTo(cx + w * 0.14, cy + h * 0.02); ctx.lineTo(w * 0.92, cy + h * 0.02); ctx.stroke();
  ctx.fillStyle = '#27AE60';
  ctx.font = `${Math.max(8, w * 0.024)}px Arial`;
  ctx.textAlign = 'left'; ctx.textBaseline = 'middle';
  ctx.fillText('Substrate peptide (Ser/Thr/Tyr)', cx + w * 0.16, cy + h * 0.02 - 12);

  // Catalytic Asp
  ctx.fillStyle = '#8E44AD';
  ctx.beginPath();
  ctx.arc(cx + w * 0.04, cy + h * 0.06, w * 0.03, 0, Math.PI * 2);
  ctx.fill();
  ctx.fillStyle = '#fff';
  ctx.font = `bold ${Math.max(7, w * 0.02)}px Arial`;
  ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
  ctx.fillText('Asp', cx + w * 0.04, cy + h * 0.06);
  ctx.fillStyle = '#8E44AD';
  ctx.font = `${Math.max(7, w * 0.02)}px Arial`;
  ctx.textBaseline = 'alphabetic';
  ctx.fillText('Catalytic base', cx + w * 0.06, cy + h * 0.1);

  ctx.fillStyle = '#222';
  ctx.font = `bold ${Math.max(12, w * 0.04)}px Arial`;
  ctx.textAlign = 'center'; ctx.textBaseline = 'alphabetic';
  ctx.fillText('Protein Kinase', cx, 22);
}

static drawSignalTransduction(ctx, width, height, componentFocus) {
  const w = width, h = height;
  const cx = w * 0.5;

  // Signal cascade: ligand → receptor → cascade → gene expression
  const steps = [
    { y: h * 0.1, label: 'Extracellular Ligand', icon: '⬡', color: '#E74C3C', x: cx },
    { y: h * 0.25, label: 'Receptor Tyrosine Kinase', icon: 'RTK', color: '#E67E22', x: cx },
    { y: h * 0.4, label: 'Adaptor (Grb2/SOS)', icon: 'Grb2', color: '#F39C12', x: cx },
    { y: h * 0.52, label: 'Ras (GTPase)', icon: 'Ras', color: '#27AE60', x: cx },
    { y: h * 0.64, label: 'Raf (MAPKKK)', icon: 'Raf', color: '#3498DB', x: cx },
    { y: h * 0.74, label: 'MEK (MAPKK)', icon: 'MEK', color: '#9B59B6', x: cx },
    { y: h * 0.84, label: 'ERK (MAPK)', icon: 'ERK', color: '#8E44AD', x: cx },
    { y: h * 0.94, label: 'Gene Expression', icon: '→', color: '#2C3E50', x: cx }
  ];

  // Membrane
  ctx.fillStyle = 'rgba(52,152,219,0.1)';
  ctx.strokeStyle = '#3498DB'; ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.roundRect(w * 0.04, h * 0.2, w * 0.92, h * 0.12, 6);
  ctx.fill(); ctx.stroke();
  ctx.fillStyle = '#3498DB';
  ctx.font = `${Math.max(7, w * 0.02)}px Arial`;
  ctx.textAlign = 'right'; ctx.textBaseline = 'middle';
  ctx.fillText('Cell membrane', w * 0.96, h * 0.26);

  steps.forEach((step, i) => {
    ctx.fillStyle = step.color + '22';
    ctx.strokeStyle = step.color; ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.arc(step.x, step.y, w * 0.07, 0, Math.PI * 2);
    ctx.fill(); ctx.stroke();
    ctx.fillStyle = step.color;
    ctx.font = `bold ${Math.max(7, w * 0.022)}px Arial`;
    ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
    ctx.fillText(step.icon, step.x, step.y);

    ctx.fillStyle = '#333';
    ctx.font = `${Math.max(8, w * 0.022)}px Arial`;
    ctx.textAlign = 'left'; ctx.textBaseline = 'middle';
    ctx.fillText(step.label, step.x + w * 0.09, step.y);

    if (i < steps.length - 1) {
      ctx.strokeStyle = step.color + '88'; ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(step.x, step.y + w * 0.07);
      ctx.lineTo(step.x, steps[i + 1].y - w * 0.07);
      ctx.stroke();
      ctx.fillStyle = step.color + '88';
      ctx.beginPath();
      const ny = steps[i + 1].y - w * 0.07;
      ctx.moveTo(step.x, ny); ctx.lineTo(step.x - 4, ny - 6); ctx.lineTo(step.x + 4, ny - 6);
      ctx.closePath(); ctx.fill();
    }

    // Phosphorylation indicators
    if (i >= 3 && i <= 6) {
      ctx.fillStyle = '#E74C3C';
      ctx.font = `bold ${Math.max(8, w * 0.024)}px Arial`;
      ctx.textAlign = 'right'; ctx.textBaseline = 'middle';
      ctx.fillText('P', step.x - w * 0.07 - 4, step.y);
    }
  });

  ctx.fillStyle = '#222';
  ctx.font = `bold ${Math.max(12, w * 0.04)}px Arial`;
  ctx.textAlign = 'center'; ctx.textBaseline = 'alphabetic';
  ctx.fillText('Signal Transduction (MAPK pathway)', cx, 14);
}

static drawGProtein(ctx, width, height, componentFocus) {
  const w = width, h = height;
  const cx = w * 0.5, cy = h * 0.5;

  // Three states: inactive, active, hydrolysis
  const states = [
    { x: w * 0.16, y: cy, label: 'Inactive (GDP)', color: '#E74C3C' },
    { x: w * 0.5, y: cy, label: 'Active (GTP)', color: '#27AE60' },
    { x: w * 0.84, y: cy, label: 'Hydrolysis', color: '#3498DB' }
  ];

  states.forEach((state, si) => {
    // Gα subunit
    ctx.fillStyle = state.color + '55';
    ctx.strokeStyle = state.color; ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.ellipse(state.x, state.y - h * 0.06, w * 0.1, h * 0.12, 0, 0, Math.PI * 2);
    ctx.fill(); ctx.stroke();
    ctx.fillStyle = state.color;
    ctx.font = `bold ${Math.max(8, w * 0.024)}px Arial`;
    ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
    ctx.fillText('Gα', state.x, state.y - h * 0.1);
    ctx.font = `${Math.max(6, w * 0.018)}px Arial`;
    ctx.fillText(si === 0 ? 'GDP' : si === 1 ? 'GTP' : 'GDP+Pi', state.x, state.y - h * 0.02);

    // Gβγ dimer (present in inactive, released in active)
    if (si === 0) {
      ctx.fillStyle = '#8E44AD55';
      ctx.strokeStyle = '#8E44AD'; ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.arc(state.x, state.y + h * 0.1, w * 0.08, 0, Math.PI * 2);
      ctx.fill(); ctx.stroke();
      ctx.fillStyle = '#8E44AD';
      ctx.font = `bold ${Math.max(7, w * 0.022)}px Arial`;
      ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
      ctx.fillText('Gβγ', state.x, state.y + h * 0.1);
    } else if (si === 1) {
      // Free Gβγ
      ctx.fillStyle = '#8E44AD33';
      ctx.strokeStyle = '#8E44AD'; ctx.lineWidth = 2;
      ctx.setLineDash([3, 3]);
      ctx.beginPath();
      ctx.arc(state.x + w * 0.14, state.y + h * 0.1, w * 0.08, 0, Math.PI * 2);
      ctx.fill(); ctx.stroke(); ctx.setLineDash([]);
      ctx.fillStyle = '#8E44AD';
      ctx.font = `bold ${Math.max(7, w * 0.022)}px Arial`;
      ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
      ctx.fillText('Gβγ', state.x + w * 0.14, state.y + h * 0.1);
      // Effector
      ctx.fillStyle = '#F39C12';
      ctx.beginPath();
      ctx.arc(state.x + w * 0.07, state.y - h * 0.2, w * 0.06, 0, Math.PI * 2);
      ctx.fill();
      ctx.fillStyle = '#fff';
      ctx.font = `bold ${Math.max(7, w * 0.022)}px Arial`;
      ctx.fillText('Effector', state.x + w * 0.07, state.y - h * 0.2);
      ctx.strokeStyle = '#27AE60'; ctx.lineWidth = 2;
      ctx.setLineDash([3, 3]);
      ctx.beginPath();
      ctx.moveTo(state.x, state.y - h * 0.18); ctx.lineTo(state.x + w * 0.04, state.y - h * 0.2);
      ctx.stroke(); ctx.setLineDash([]);
    } else {
      // Back to Gβγ association
      ctx.fillStyle = '#8E44AD55';
      ctx.strokeStyle = '#8E44AD'; ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.arc(state.x, state.y + h * 0.1, w * 0.08, 0, Math.PI * 2);
      ctx.fill(); ctx.stroke();
      ctx.fillStyle = '#8E44AD';
      ctx.font = `bold ${Math.max(7, w * 0.022)}px Arial`;
      ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
      ctx.fillText('Gβγ', state.x, state.y + h * 0.1);
    }

    // State label
    ctx.fillStyle = '#333';
    ctx.font = `bold ${Math.max(8, w * 0.024)}px Arial`;
    ctx.textAlign = 'center'; ctx.textBaseline = 'alphabetic';
    ctx.fillText(state.label, state.x, cy + h * 0.28);
  });

  // Arrows between states
  [[w * 0.28, cy - h * 0.05, 'GPCR\nactivation', '#27AE60'],
   [w * 0.68, cy - h * 0.05, 'GTPase\nactivity', '#E74C3C']
  ].forEach(([ax, ay, lbl, col]) => {
    ctx.strokeStyle = col; ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.moveTo(ax - w * 0.04, ay); ctx.lineTo(ax + w * 0.04, ay); ctx.stroke();
    ctx.fillStyle = col;
    ctx.beginPath();
    ctx.moveTo(ax + w * 0.04, ay); ctx.lineTo(ax + w * 0.02, ay - 5); ctx.lineTo(ax + w * 0.02, ay + 5);
    ctx.closePath(); ctx.fill();
    ctx.fillStyle = col;
    ctx.font = `${Math.max(7, w * 0.02)}px Arial`;
    ctx.textAlign = 'center'; ctx.textBaseline = 'alphabetic';
    lbl.split('\n').forEach((line, li) => {
      ctx.fillText(line, ax, ay - 14 + li * 12);
    });
  });

  // GDP/GTP exchange (GEF)
  ctx.fillStyle = '#F39C12';
  ctx.font = `${Math.max(7, w * 0.02)}px Arial`;
  ctx.textAlign = 'center'; ctx.textBaseline = 'alphabetic';
  ctx.fillText('GEF catalyzes GDP→GTP exchange', cx - w * 0.16, cy - h * 0.2);

  ctx.fillStyle = '#222';
  ctx.font = `bold ${Math.max(12, w * 0.04)}px Arial`;
  ctx.textAlign = 'center'; ctx.textBaseline = 'alphabetic';
  ctx.fillText('G Protein Cycle', cx, 22);
}

static drawReceptorProtein(ctx, width, height, componentFocus) {
  const w = width, h = height;
  const cx = w * 0.5, cy = h * 0.5;

  // Cell membrane
  const memY = cy;
  const memH = h * 0.1;
  const memGrad = ctx.createLinearGradient(0, memY - memH * 0.5, 0, memY + memH * 0.5);
  memGrad.addColorStop(0, 'rgba(52,152,219,0.3)');
  memGrad.addColorStop(0.5, 'rgba(52,152,219,0.15)');
  memGrad.addColorStop(1, 'rgba(52,152,219,0.3)');
  ctx.fillStyle = memGrad;
  ctx.strokeStyle = '#3498DB'; ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.roundRect(w * 0.04, memY - memH * 0.5, w * 0.92, memH, 4);
  ctx.fill(); ctx.stroke();

  // Phospholipid heads (dots)
  for (let layer = 0; layer < 2; layer++) {
    const ly = memY + (layer === 0 ? -memH * 0.4 : memH * 0.4);
    for (let i = 0; i < 14; i++) {
      const lx = w * 0.06 + i * w * 0.065;
      ctx.fillStyle = '#3498DB';
      ctx.beginPath();
      ctx.arc(lx, ly, w * 0.012, 0, Math.PI * 2);
      ctx.fill();
      // Tails
      ctx.strokeStyle = '#3498DB'; ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.moveTo(lx, ly + (layer === 0 ? w * 0.012 : -w * 0.012));
      ctx.lineTo(lx, memY + (layer === 0 ? -2 : 2));
      ctx.stroke();
    }
  }

  ctx.fillStyle = '#3498DB';
  ctx.font = `${Math.max(7, w * 0.02)}px Arial`;
  ctx.textAlign = 'right'; ctx.textBaseline = 'middle';
  ctx.fillText('Lipid bilayer', w * 0.04, memY + memH * 0.55);

  // GPCR (7-transmembrane receptor)
  const tmColors = ['#E74C3C', '#E67E22', '#F39C12', '#27AE60', '#3498DB', '#9B59B6', '#8E44AD'];
  const tmSpacing = w * 0.065;
  const tmStart = cx - tmSpacing * 3;

  for (let i = 0; i < 7; i++) {
    const tx = tmStart + i * tmSpacing;
    const tg = ctx.createLinearGradient(tx - tmSpacing * 0.35, 0, tx + tmSpacing * 0.35, 0);
    tg.addColorStop(0, tmColors[i] + '88');
    tg.addColorStop(0.5, tmColors[i]);
    tg.addColorStop(1, tmColors[i] + '88');
    ctx.fillStyle = tg;
    ctx.strokeStyle = tmColors[i]; ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.roundRect(tx - tmSpacing * 0.35, memY - memH * 0.48, tmSpacing * 0.7, memH * 0.96, 4);
    ctx.fill(); ctx.stroke();
    ctx.fillStyle = '#fff';
    ctx.font = `bold ${Math.max(7, w * 0.02)}px Arial`;
    ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
    ctx.fillText(`TM${i + 1}`, tx, memY);
  }

  // Extracellular loops + N-terminus
  const ecLoops = [[tmStart + tmSpacing, memY - memH * 0.5 - h * 0.1],
                   [tmStart + tmSpacing * 3, memY - memH * 0.5 - h * 0.08],
                   [tmStart + tmSpacing * 5, memY - memH * 0.5 - h * 0.1]];

  for (let i = 0; i < 3; i++) {
    const lx1 = tmStart + i * 2 * tmSpacing;
    const lx2 = tmStart + (i * 2 + 2) * tmSpacing;
    const ly = ecLoops[i][1];
    ctx.strokeStyle = '#E67E22'; ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.moveTo(lx1, memY - memH * 0.48);
    ctx.bezierCurveTo(lx1, ly, lx2, ly, lx2, memY - memH * 0.48);
    ctx.stroke();
  }

  // N-terminus
  ctx.strokeStyle = '#E74C3C'; ctx.lineWidth = 3;
  ctx.beginPath();
  ctx.moveTo(tmStart, memY - memH * 0.48);
  ctx.lineTo(tmStart, memY - memH * 0.48 - h * 0.15);
  ctx.stroke();
  ctx.fillStyle = '#E74C3C';
  ctx.font = `bold ${Math.max(7, w * 0.02)}px Arial`;
  ctx.textAlign = 'center'; ctx.textBaseline = 'alphabetic';
  ctx.fillText("N", tmStart, memY - memH * 0.48 - h * 0.17);

  // Intracellular loops + C-terminus
  const icLoops = [[tmStart + tmSpacing, memY + memH * 0.5 + h * 0.06],
                   [tmStart + tmSpacing * 3, memY + memH * 0.5 + h * 0.1],
                   [tmStart + tmSpacing * 5, memY + memH * 0.5 + h * 0.06]];

  for (let i = 0; i < 3; i++) {
    const lx1 = tmStart + i * 2 * tmSpacing;
    const lx2 = tmStart + (i * 2 + 2) * tmSpacing;
    const ly = icLoops[i][1];
    ctx.strokeStyle = '#9B59B6'; ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.moveTo(lx1, memY + memH * 0.48);
    ctx.bezierCurveTo(lx1, ly, lx2, ly, lx2, memY + memH * 0.48);
    ctx.stroke();
  }

  // C-terminus
  ctx.strokeStyle = '#9B59B6'; ctx.lineWidth = 3;
  ctx.beginPath();
  ctx.moveTo(tmStart + 6 * tmSpacing, memY + memH * 0.48);
  ctx.lineTo(tmStart + 6 * tmSpacing, memY + memH * 0.48 + h * 0.15);
  ctx.stroke();
  ctx.fillStyle = '#9B59B6';
  ctx.font = `bold ${Math.max(7, w * 0.02)}px Arial`;
  ctx.textAlign = 'center'; ctx.textBaseline = 'top';
  ctx.fillText("C", tmStart + 6 * tmSpacing, memY + memH * 0.48 + h * 0.16);

  // Ligand binding pocket
  const lbX = cx, lbY = memY - memH * 0.5 - h * 0.08;
  ctx.fillStyle = '#F39C12';
  ctx.strokeStyle = '#D35400'; ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.arc(lbX, lbY - h * 0.1, w * 0.045, 0, Math.PI * 2);
  ctx.fill(); ctx.stroke();
  ctx.fillStyle = '#fff';
  ctx.font = `bold ${Math.max(7, w * 0.022)}px Arial`;
  ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
  ctx.fillText('Ligand', lbX, lbY - h * 0.1);
  ctx.strokeStyle = '#F39C12'; ctx.lineWidth = 2;
  ctx.setLineDash([3, 3]);
  ctx.beginPath();
  ctx.moveTo(lbX, lbY - h * 0.065); ctx.lineTo(lbX, lbY + 4); ctx.stroke();
  ctx.setLineDash([]);

  // G protein coupling (intracellular)
  ctx.fillStyle = '#27AE60';
  ctx.strokeStyle = '#1E8449'; ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.arc(cx + w * 0.12, memY + memH * 0.5 + h * 0.14, w * 0.06, 0, Math.PI * 2);
  ctx.fill(); ctx.stroke();
  ctx.fillStyle = '#fff';
  ctx.font = `bold ${Math.max(7, w * 0.022)}px Arial`;
  ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
  ctx.fillText('G prot.', cx + w * 0.12, memY + memH * 0.5 + h * 0.14);

  // Labels
  ctx.fillStyle = '#E67E22';
  ctx.font = `${Math.max(7, w * 0.02)}px Arial`;
  ctx.textAlign = 'right'; ctx.textBaseline = 'middle';
  ctx.fillText('Extracellular loops', tmStart - 4, memY - memH * 0.5 - h * 0.06);
  ctx.fillStyle = '#9B59B6';
  ctx.textAlign = 'right';
  ctx.fillText('Intracellular loops', tmStart - 4, memY + memH * 0.5 + h * 0.08);

  ctx.fillStyle = '#222';
  ctx.font = `bold ${Math.max(12, w * 0.04)}px Arial`;
  ctx.textAlign = 'center'; ctx.textBaseline = 'alphabetic';
  ctx.fillText('GPCR (7-TM Receptor)', cx, 22);
                    
}
