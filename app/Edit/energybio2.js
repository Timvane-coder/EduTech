I'll implement the missing organ/part drawing methods. Let me write them all out:
// ============================================================
// MISSING ORGAN/PART DRAWING METHODS
// ============================================================

static drawUbiquinone(ctx, x, y, options = {}) {
  const { scale = 1, label = true, animated = false, time = 0 } = options;
  const s = scale;

  ctx.save();
  ctx.translate(x, y);

  // Benzoquinone ring (hexagonal)
  const ringRadius = 20 * s;
  ctx.beginPath();
  for (let i = 0; i < 6; i++) {
    const angle = (Math.PI / 3) * i - Math.PI / 6;
    const px = ringRadius * Math.cos(angle);
    const py = ringRadius * Math.sin(angle);
    i === 0 ? ctx.moveTo(px, py) : ctx.lineTo(px, py);
  }
  ctx.closePath();
  ctx.fillStyle = animated
    ? `hsl(${45 + Math.sin(time * 2) * 15}, 90%, 55%)`
    : '#F5A623';
  ctx.fill();
  ctx.strokeStyle = '#C47D0E';
  ctx.lineWidth = 2 * s;
  ctx.stroke();

  // Double bonds (alternating lines inside ring)
  ctx.strokeStyle = '#7B4F00';
  ctx.lineWidth = 1.5 * s;
  for (let i = 0; i < 3; i++) {
    const a1 = (Math.PI / 3) * (i * 2) - Math.PI / 6;
    const a2 = (Math.PI / 3) * (i * 2 + 1) - Math.PI / 6;
    const ix1 = (ringRadius * 0.6) * Math.cos(a1);
    const iy1 = (ringRadius * 0.6) * Math.sin(a1);
    const ix2 = (ringRadius * 0.6) * Math.cos(a2);
    const iy2 = (ringRadius * 0.6) * Math.sin(a2);
    ctx.beginPath();
    ctx.moveTo(ix1, iy1);
    ctx.lineTo(ix2, iy2);
    ctx.stroke();
  }

  // Oxygen substituents (=O groups at positions 1 and 2)
  const oPositions = [
    { angle: -Math.PI / 2, label: '=O' },
    { angle: -Math.PI / 6, label: '=O' },
  ];
  oPositions.forEach(op => {
    const ox = (ringRadius + 14 * s) * Math.cos(op.angle);
    const oy = (ringRadius + 14 * s) * Math.sin(op.angle);
    ctx.beginPath();
    ctx.moveTo(ringRadius * Math.cos(op.angle), ringRadius * Math.sin(op.angle));
    ctx.lineTo(ox, oy);
    ctx.strokeStyle = '#E53E3E';
    ctx.lineWidth = 2 * s;
    ctx.stroke();
    ctx.fillStyle = '#E53E3E';
    ctx.font = `bold ${10 * s}px sans-serif`;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText('O', ox, oy);
  });

  // Isoprenoid tail (simplified zigzag)
  ctx.strokeStyle = '#555';
  ctx.lineWidth = 1.5 * s;
  ctx.beginPath();
  const tailStart = { x: ringRadius * Math.cos(Math.PI / 2), y: ringRadius * Math.sin(Math.PI / 2) };
  ctx.moveTo(tailStart.x, tailStart.y);
  const tailPoints = 6;
  for (let i = 1; i <= tailPoints; i++) {
    const tx = tailStart.x + i * 10 * s;
    const ty = tailStart.y + (i % 2 === 0 ? -8 : 8) * s;
    ctx.lineTo(tx, ty);
  }
  ctx.stroke();

  // Electrons indicator (reduced form UQH2 dots)
  ctx.fillStyle = '#3182CE';
  ctx.font = `${9 * s}px sans-serif`;
  ctx.textAlign = 'center';
  ctx.fillText('Q', 0, 4 * s);

  if (label) {
    ctx.fillStyle = '#2D3748';
    ctx.font = `bold ${11 * s}px sans-serif`;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'top';
    ctx.fillText('Ubiquinone (CoQ)', 0, ringRadius + 20 * s);
  }

  ctx.restore();
}

static drawCytochromeC(ctx, x, y, options = {}) {
  const { scale = 1, label = true, animated = false, time = 0, reduced = false } = options;
  const s = scale;

  ctx.save();
  ctx.translate(x, y);

  // Protein globe
  const grad = ctx.createRadialGradient(-8 * s, -8 * s, 2 * s, 0, 0, 28 * s);
  grad.addColorStop(0, reduced ? '#FC8181' : '#FEB2B2');
  grad.addColorStop(1, reduced ? '#C53030' : '#E53E3E');
  ctx.beginPath();
  ctx.ellipse(0, 0, 28 * s, 24 * s, 0, 0, Math.PI * 2);
  ctx.fillStyle = grad;
  ctx.fill();
  ctx.strokeStyle = '#9B2C2C';
  ctx.lineWidth = 2 * s;
  ctx.stroke();

  // Heme group (flat porphyrin ring simplified)
  ctx.beginPath();
  ctx.rect(-10 * s, -10 * s, 20 * s, 20 * s);
  ctx.fillStyle = 'rgba(150, 60, 0, 0.6)';
  ctx.fill();
  ctx.strokeStyle = '#7B341E';
  ctx.lineWidth = 1.5 * s;
  ctx.stroke();

  // Iron center
  ctx.beginPath();
  ctx.arc(0, 0, 4 * s, 0, Math.PI * 2);
  ctx.fillStyle = animated
    ? `hsl(${200 + Math.sin(time * 3) * 30}, 80%, 50%)`
    : '#2B6CB0';
  ctx.fill();
  ctx.strokeStyle = '#1A365D';
  ctx.lineWidth = 1 * s;
  ctx.stroke();

  // Fe label
  ctx.fillStyle = '#FFF';
  ctx.font = `bold ${8 * s}px sans-serif`;
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText('Fe', 0, 0);

  // Oxidation state indicator
  ctx.fillStyle = reduced ? '#276749' : '#C53030';
  ctx.font = `${9 * s}px sans-serif`;
  ctx.textAlign = 'right';
  ctx.textBaseline = 'top';
  ctx.fillText(reduced ? 'Fe²⁺' : 'Fe³⁺', 24 * s, -22 * s);

  // Electron transfer arrow if animated
  if (animated) {
    const pulse = Math.sin(time * 4) * 0.5 + 0.5;
    ctx.beginPath();
    ctx.arc(0, 0, (28 + pulse * 8) * s, 0, Math.PI * 2);
    ctx.strokeStyle = `rgba(49, 130, 206, ${0.3 + pulse * 0.4})`;
    ctx.lineWidth = 2 * s;
    ctx.stroke();
  }

  if (label) {
    ctx.fillStyle = '#2D3748';
    ctx.font = `bold ${11 * s}px sans-serif`;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'top';
    ctx.fillText('Cytochrome c', 0, 30 * s);
  }

  ctx.restore();
}

static drawFlavinMononucleotide(ctx, x, y, options = {}) {
  const { scale = 1, label = true, reduced = false } = options;
  const s = scale;

  ctx.save();
  ctx.translate(x, y);

  // Isoalloxazine ring system (3-ring structure)
  // Ring 1 - benzene ring (left)
  ctx.beginPath();
  ctx.rect(-38 * s, -15 * s, 22 * s, 30 * s);
  ctx.fillStyle = reduced ? '#C6F6D5' : '#FEFCBF';
  ctx.fill();
  ctx.strokeStyle = '#744210';
  ctx.lineWidth = 1.5 * s;
  ctx.stroke();

  // Ring 2 - pyrazine ring (middle)
  ctx.beginPath();
  ctx.rect(-16 * s, -15 * s, 22 * s, 30 * s);
  ctx.fillStyle = reduced ? '#9AE6B4' : '#FAF089';
  ctx.fill();
  ctx.stroke();

  // Ring 3 - pyrimidine ring (right)
  ctx.beginPath();
  ctx.rect(6 * s, -15 * s, 22 * s, 30 * s);
  ctx.fillStyle = reduced ? '#68D391' : '#F6E05E';
  ctx.fill();
  ctx.stroke();

  // N atoms in rings
  const nPositions = [
    [-5 * s, -8 * s], [6 * s, -8 * s],
    [-5 * s, 8 * s], [17 * s, -8 * s],
  ];
  ctx.fillStyle = '#2B6CB0';
  ctx.font = `bold ${9 * s}px sans-serif`;
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  nPositions.forEach(([nx, ny]) => ctx.fillText('N', nx, ny));

  // Oxygen groups
  ctx.fillStyle = '#E53E3E';
  ctx.fillText('O', 17 * s, 8 * s);
  ctx.fillText('O', 28 * s, -8 * s);

  // Ribitol phosphate tail
  ctx.strokeStyle = '#555';
  ctx.lineWidth = 1.5 * s;
  ctx.beginPath();
  ctx.moveTo(-38 * s, 0);
  ctx.lineTo(-55 * s, 0);
  ctx.stroke();
  ctx.beginPath();
  ctx.arc(-60 * s, 0, 5 * s, 0, Math.PI * 2);
  ctx.fillStyle = '#E53E3E';
  ctx.fill();
  ctx.stroke();
  ctx.fillStyle = '#FFF';
  ctx.font = `bold ${7 * s}px sans-serif`;
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText('P', -60 * s, 0);

  // State label
  ctx.fillStyle = reduced ? '#276749' : '#975A16';
  ctx.font = `bold ${12 * s}px sans-serif`;
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText(reduced ? 'FMNH₂' : 'FMN', -5 * s, 0);

  if (label) {
    ctx.fillStyle = '#2D3748';
    ctx.font = `bold ${11 * s}px sans-serif`;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'top';
    ctx.fillText(reduced ? 'FMN (reduced)' : 'Flavin Mononucleotide', 0, 22 * s);
  }

  ctx.restore();
}

static drawIronSulfurCluster(ctx, x, y, options = {}) {
  const { scale = 1, label = true, animated = false, time = 0, type = '2Fe2S' } = options;
  const s = scale;

  ctx.save();
  ctx.translate(x, y);

  const is4Fe = type === '4Fe4S';

  if (is4Fe) {
    // 4Fe-4S cube arrangement (alternating Fe and S at cube corners)
    const cubeSize = 16 * s;
    const offset = 10 * s;
    const atoms = [
      { x: -offset, y: -offset, type: 'Fe' },
      { x: offset, y: -offset, type: 'S' },
      { x: offset, y: offset, type: 'Fe' },
      { x: -offset, y: offset, type: 'S' },
      { x: 0, y: -offset * 1.5, type: 'S' },
      { x: offset * 1.5, y: 0, type: 'Fe' },
      { x: 0, y: offset * 1.5, type: 'S' },
      { x: -offset * 1.5, y: 0, type: 'Fe' },
    ];

    // Draw bonds
    ctx.strokeStyle = '#718096';
    ctx.lineWidth = 1.5 * s;
    for (let i = 0; i < atoms.length; i++) {
      for (let j = i + 1; j < atoms.length; j++) {
        if (atoms[i].type !== atoms[j].type) {
          const dist = Math.hypot(atoms[i].x - atoms[j].x, atoms[i].y - atoms[j].y);
          if (dist < 35 * s) {
            ctx.beginPath();
            ctx.moveTo(atoms[i].x, atoms[i].y);
            ctx.lineTo(atoms[j].x, atoms[j].y);
            ctx.stroke();
          }
        }
      }
    }

    // Draw atoms
    atoms.forEach(atom => {
      ctx.beginPath();
      ctx.arc(atom.x, atom.y, 7 * s, 0, Math.PI * 2);
      ctx.fillStyle = atom.type === 'Fe'
        ? (animated ? `hsl(${210 + Math.sin(time * 2) * 20}, 70%, 45%)` : '#3182CE')
        : '#F6AD55';
      ctx.fill();
      ctx.strokeStyle = atom.type === 'Fe' ? '#1A365D' : '#7B341E';
      ctx.lineWidth = 1 * s;
      ctx.stroke();
      ctx.fillStyle = '#FFF';
      ctx.font = `bold ${7 * s}px sans-serif`;
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText(atom.type, atom.x, atom.y);
    });
  } else {
    // 2Fe-2S rhombus arrangement
    const atoms = [
      { x: 0, y: -18 * s, type: 'Fe' },
      { x: 18 * s, y: 0, type: 'S' },
      { x: 0, y: 18 * s, type: 'Fe' },
      { x: -18 * s, y: 0, type: 'S' },
    ];

    // Bonds
    ctx.strokeStyle = '#718096';
    ctx.lineWidth = 2 * s;
    for (let i = 0; i < 4; i++) {
      const next = atoms[(i + 1) % 4];
      ctx.beginPath();
      ctx.moveTo(atoms[i].x, atoms[i].y);
      ctx.lineTo(next.x, next.y);
      ctx.stroke();
    }
    // Cross bonds
    ctx.lineWidth = 1 * s;
    ctx.setLineDash([3, 3]);
    ctx.beginPath();
    ctx.moveTo(atoms[0].x, atoms[0].y);
    ctx.lineTo(atoms[2].x, atoms[2].y);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(atoms[1].x, atoms[1].y);
    ctx.lineTo(atoms[3].x, atoms[3].y);
    ctx.stroke();
    ctx.setLineDash([]);

    atoms.forEach(atom => {
      ctx.beginPath();
      ctx.arc(atom.x, atom.y, 9 * s, 0, Math.PI * 2);
      ctx.fillStyle = atom.type === 'Fe'
        ? (animated ? `hsl(${210 + Math.sin(time * 2) * 20}, 70%, 45%)` : '#3182CE')
        : '#F6AD55';
      ctx.fill();
      ctx.strokeStyle = atom.type === 'Fe' ? '#1A365D' : '#7B341E';
      ctx.lineWidth = 1.5 * s;
      ctx.stroke();
      ctx.fillStyle = '#FFF';
      ctx.font = `bold ${8 * s}px sans-serif`;
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText(atom.type, atom.x, atom.y);
    });
  }

  if (label) {
    ctx.fillStyle = '#2D3748';
    ctx.font = `bold ${11 * s}px sans-serif`;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'top';
    ctx.fillText(is4Fe ? '[4Fe-4S] Cluster' : '[2Fe-2S] Cluster', 0, (is4Fe ? 28 : 30) * s);
  }

  ctx.restore();
}

static drawNADHMolecule(ctx, x, y, options = {}) {
  const { scale = 1, label = true, reduced = true } = options;
  const s = scale;

  ctx.save();
  ctx.translate(x, y);

  // Nicotinamide ring (pyridine ring)
  const r = 18 * s;
  ctx.beginPath();
  for (let i = 0; i < 6; i++) {
    const angle = (Math.PI / 3) * i - Math.PI / 2;
    i === 0 ? ctx.moveTo(r * Math.cos(angle), r * Math.sin(angle))
            : ctx.lineTo(r * Math.cos(angle), r * Math.sin(angle));
  }
  ctx.closePath();
  ctx.fillStyle = reduced ? '#C6F6D5' : '#BEE3F8';
  ctx.fill();
  ctx.strokeStyle = reduced ? '#276749' : '#2B6CB0';
  ctx.lineWidth = 2 * s;
  ctx.stroke();

  // N in ring
  ctx.fillStyle = '#2B6CB0';
  ctx.font = `bold ${10 * s}px sans-serif`;
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText('N⁺', 0, 0);

  // CONH2 amide group
  const amideX = 0;
  const amideY = -(r + 16 * s);
  ctx.strokeStyle = '#555';
  ctx.lineWidth = 1.5 * s;
  ctx.beginPath();
  ctx.moveTo(0, -r);
  ctx.lineTo(amideX, amideY);
  ctx.stroke();
  ctx.fillStyle = '#E53E3E';
  ctx.font = `${9 * s}px sans-serif`;
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText('CONH₂', amideX, amideY - 6 * s);

  // Ribose connector
  ctx.strokeStyle = '#888';
  ctx.lineWidth = 1.5 * s;
  ctx.beginPath();
  ctx.moveTo(r * Math.cos(Math.PI / 6), r * Math.sin(Math.PI / 6));
  ctx.lineTo(r * 1.8 * Math.cos(Math.PI / 6), r * 1.8 * Math.sin(Math.PI / 6));
  ctx.stroke();

  // Adenine ring (simplified)
  const ax = r * 2.5 * Math.cos(Math.PI / 6);
  const ay = r * 2.5 * Math.sin(Math.PI / 6);
  ctx.beginPath();
  ctx.ellipse(ax, ay, 14 * s, 10 * s, Math.PI / 6, 0, Math.PI * 2);
  ctx.fillStyle = '#EBF8FF';
  ctx.fill();
  ctx.strokeStyle = '#2B6CB0';
  ctx.lineWidth = 1.5 * s;
  ctx.stroke();
  ctx.fillStyle = '#2B6CB0';
  ctx.font = `bold ${9 * s}px sans-serif`;
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText('A', ax, ay);

  // Phosphate bridge
  ctx.fillStyle = '#E53E3E';
  ctx.font = `${8 * s}px sans-serif`;
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  const midX = (r * Math.cos(Math.PI / 6) + ax) / 2;
  const midY = (r * Math.sin(Math.PI / 6) + ay) / 2;
  ctx.fillText('P-P', midX, midY - 8 * s);

  // H indicator on nicotinamide for reduced form
  if (reduced) {
    ctx.fillStyle = '#276749';
    ctx.font = `bold ${13 * s}px sans-serif`;
    ctx.textAlign = 'left';
    ctx.textBaseline = 'middle';
    ctx.fillText('H', -r * 0.3, r * 0.3);
  }

  if (label) {
    ctx.fillStyle = '#2D3748';
    ctx.font = `bold ${11 * s}px sans-serif`;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'top';
    const bottomY = r * 2.5 * Math.sin(Math.PI / 6) + 18 * s;
    ctx.fillText(reduced ? 'NADH' : 'NAD⁺', 0, bottomY);
  }

  ctx.restore();
}

static drawFADH2Molecule(ctx, x, y, options = {}) {
  const { scale = 1, label = true, reduced = true } = options;
  const s = scale;

  ctx.save();
  ctx.translate(x, y);

  // Isoalloxazine ring system (same as FMN but with adenine/ribose)
  const ringW = 20 * s;
  const ringH = 28 * s;

  // Three fused rings
  const rings = [
    { x: -ringW, y: -ringH / 2, color: reduced ? '#C6F6D5' : '#FEFCBF' },
    { x: 0, y: -ringH / 2, color: reduced ? '#9AE6B4' : '#FAF089' },
    { x: ringW, y: -ringH / 2, color: reduced ? '#68D391' : '#F6E05E' },
  ];

  rings.forEach(ring => {
    ctx.beginPath();
    ctx.rect(ring.x, ring.y, ringW, ringH);
    ctx.fillStyle = ring.color;
    ctx.fill();
    ctx.strokeStyle = '#744210';
    ctx.lineWidth = 1.5 * s;
    ctx.stroke();
  });

  // N labels
  ctx.fillStyle = '#2B6CB0';
  ctx.font = `bold ${9 * s}px sans-serif`;
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText('N', 0, -4 * s);
  ctx.fillText('N', ringW, -4 * s);

  // O labels
  ctx.fillStyle = '#E53E3E';
  ctx.fillText('O', ringW * 1.5 + 2 * s, -8 * s);
  ctx.fillText('O', ringW * 1.5 + 2 * s, 8 * s);

  // Ribitol-AMP tail
  ctx.strokeStyle = '#555';
  ctx.lineWidth = 1.5 * s;
  ctx.beginPath();
  ctx.moveTo(-ringW, 0);
  ctx.lineTo(-ringW - 20 * s, 0);
  ctx.stroke();

  // AMP group (simplified)
  ctx.beginPath();
  ctx.ellipse(-ringW - 34 * s, 0, 12 * s, 16 * s, 0, 0, Math.PI * 2);
  ctx.fillStyle = '#EBF8FF';
  ctx.fill();
  ctx.strokeStyle = '#2B6CB0';
  ctx.lineWidth = 1.5 * s;
  ctx.stroke();
  ctx.fillStyle = '#2B6CB0';
  ctx.font = `bold ${9 * s}px sans-serif`;
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText('AMP', -ringW - 34 * s, 0);

  // H atoms on N1 and N5 for reduced form
  if (reduced) {
    ctx.fillStyle = '#276749';
    ctx.font = `bold ${11 * s}px sans-serif`;
    ctx.textAlign = 'center';
    ctx.fillText('H', 0, -ringH / 2 - 8 * s);
    ctx.fillText('H', ringW, ringH / 2 + 8 * s);
  }

  // State label
  ctx.fillStyle = reduced ? '#276749' : '#975A16';
  ctx.font = `bold ${12 * s}px sans-serif`;
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText(reduced ? 'FADH₂' : 'FAD', ringW / 2, 4 * s);

  if (label) {
    ctx.fillStyle = '#2D3748';
    ctx.font = `bold ${11 * s}px sans-serif`;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'top';
    ctx.fillText(reduced ? 'FADH₂ (reduced)' : 'FAD (oxidized)', 0, ringH / 2 + 10 * s);
  }

  ctx.restore();
}

static drawPyruvate(ctx, x, y, options = {}) {
  const { scale = 1, label = true } = options;
  const s = scale;

  ctx.save();
  ctx.translate(x, y);

  // CH3 - C(=O) - COO⁻ (3-carbon structure)
  // Background pill
  ctx.beginPath();
  ctx.roundRect(-55 * s, -22 * s, 110 * s, 44 * s, 10 * s);
  ctx.fillStyle = '#FFF5F5';
  ctx.fill();
  ctx.strokeStyle = '#FC8181';
  ctx.lineWidth = 2 * s;
  ctx.stroke();

  const baseY = 0;
  ctx.strokeStyle = '#2D3748';
  ctx.lineWidth = 2 * s;

  // CH3 group (C1)
  ctx.beginPath();
  ctx.arc(-38 * s, baseY, 10 * s, 0, Math.PI * 2);
  ctx.fillStyle = '#E2E8F0';
  ctx.fill();
  ctx.stroke();
  ctx.fillStyle = '#2D3748';
  ctx.font = `bold ${9 * s}px sans-serif`;
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText('CH₃', -38 * s, baseY);

  // Bond C1-C2
  ctx.beginPath();
  ctx.moveTo(-28 * s, baseY);
  ctx.lineTo(-12 * s, baseY);
  ctx.stroke();

  // C2 = keto carbon
  ctx.beginPath();
  ctx.arc(0, baseY, 10 * s, 0, Math.PI * 2);
  ctx.fillStyle = '#FEB2B2';
  ctx.fill();
  ctx.stroke();
  ctx.fillStyle = '#2D3748';
  ctx.font = `bold ${9 * s}px sans-serif`;
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText('C', 0, baseY);

  // =O double bond (ketone)
  ctx.strokeStyle = '#E53E3E';
  ctx.lineWidth = 2 * s;
  ctx.beginPath();
  ctx.moveTo(-4 * s, -10 * s);
  ctx.lineTo(-4 * s, -20 * s);
  ctx.stroke();
  ctx.beginPath();
  ctx.moveTo(4 * s, -10 * s);
  ctx.lineTo(4 * s, -20 * s);
  ctx.stroke();
  ctx.fillStyle = '#E53E3E';
  ctx.font = `bold ${10 * s}px sans-serif`;
  ctx.textAlign = 'center';
  ctx.textBaseline = 'bottom';
  ctx.fillText('O', 0, -20 * s);

  // Bond C2-C3
  ctx.strokeStyle = '#2D3748';
  ctx.lineWidth = 2 * s;
  ctx.beginPath();
  ctx.moveTo(10 * s, baseY);
  ctx.lineTo(26 * s, baseY);
  ctx.stroke();

  // C3 = carboxylate
  ctx.beginPath();
  ctx.arc(38 * s, baseY, 12 * s, 0, Math.PI * 2);
  ctx.fillStyle = '#FED7D7';
  ctx.fill();
  ctx.stroke();
  ctx.fillStyle = '#E53E3E';
  ctx.font = `bold ${8 * s}px sans-serif`;
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText('COO⁻', 38 * s, baseY);

  if (label) {
    ctx.fillStyle = '#2D3748';
    ctx.font = `bold ${12 * s}px sans-serif`;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'top';
    ctx.fillText('Pyruvate (C₃H₃O₃⁻)', 0, 26 * s);
  }

  ctx.restore();
}

static drawAcetylCoA(ctx, x, y, options = {}) {
  const { scale = 1, label = true } = options;
  const s = scale;

  ctx.save();
  ctx.translate(x, y);

  // Background
  ctx.beginPath();
  ctx.roundRect(-70 * s, -40 * s, 140 * s, 80 * s, 12 * s);
  ctx.fillStyle = '#FFFFF0';
  ctx.fill();
  ctx.strokeStyle = '#ECC94B';
  ctx.lineWidth = 2 * s;
  ctx.stroke();

  // CoA moiety (large, simplified as blob)
  ctx.beginPath();
  ctx.ellipse(-35 * s, 10 * s, 28 * s, 20 * s, 0, 0, Math.PI * 2);
  ctx.fillStyle = '#BEE3F8';
  ctx.fill();
  ctx.strokeStyle = '#2B6CB0';
  ctx.lineWidth = 1.5 * s;
  ctx.stroke();
  ctx.fillStyle = '#2B6CB0';
  ctx.font = `bold ${10 * s}px sans-serif`;
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText('CoA', -35 * s, 10 * s);

  // Thioester bond S-C
  ctx.strokeStyle = '#D69E2E';
  ctx.lineWidth = 2.5 * s;
  ctx.beginPath();
  ctx.moveTo(-7 * s, 10 * s);
  ctx.lineTo(10 * s, 10 * s);
  ctx.stroke();
  ctx.fillStyle = '#D69E2E';
  ctx.font = `bold ${11 * s}px sans-serif`;
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText('S', 0, 10 * s);

  // Acetyl group CH3-C(=O)-
  // Carbonyl carbon
  ctx.beginPath();
  ctx.arc(28 * s, 10 * s, 11 * s, 0, Math.PI * 2);
  ctx.fillStyle = '#FEF3C7';
  ctx.fill();
  ctx.strokeStyle = '#D69E2E';
  ctx.lineWidth = 1.5 * s;
  ctx.stroke();
  ctx.fillStyle = '#92400E';
  ctx.font = `bold ${9 * s}px sans-serif`;
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText('C=O', 28 * s, 10 * s);

  // Methyl group
  ctx.beginPath();
  ctx.arc(52 * s, 10 * s, 11 * s, 0, Math.PI * 2);
  ctx.fillStyle = '#E2E8F0';
  ctx.fill();
  ctx.strokeStyle = '#4A5568';
  ctx.lineWidth = 1.5 * s;
  ctx.stroke();
  ctx.fillStyle = '#2D3748';
  ctx.font = `bold ${9 * s}px sans-serif`;
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText('CH₃', 52 * s, 10 * s);

  // Bond carbonyl to methyl
  ctx.strokeStyle = '#4A5568';
  ctx.lineWidth = 2 * s;
  ctx.beginPath();
  ctx.moveTo(39 * s, 10 * s);
  ctx.lineTo(41 * s, 10 * s);
  ctx.stroke();

  // High energy wavy bond indicator
  ctx.strokeStyle = '#F6AD55';
  ctx.lineWidth = 1.5 * s;
  ctx.beginPath();
  for (let i = 0; i < 6; i++) {
    const wx = -7 * s + i * 3 * s;
    const wy = 10 * s + (i % 2 === 0 ? -4 : 4) * s;
    i === 0 ? ctx.moveTo(wx, wy) : ctx.lineTo(wx, wy);
  }
  ctx.stroke();

  // ~S label
  ctx.fillStyle = '#C05621';
  ctx.font = `${8 * s}px sans-serif`;
  ctx.textAlign = 'center';
  ctx.textBaseline = 'bottom';
  ctx.fillText('~', 2 * s, 10 * s);

  if (label) {
    ctx.fillStyle = '#2D3748';
    ctx.font = `bold ${12 * s}px sans-serif`;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'top';
    ctx.fillText('Acetyl-CoA', 0, 32 * s);
    ctx.font = `${9 * s}px sans-serif`;
    ctx.fillStyle = '#718096';
    ctx.fillText('(2C + CoA, high-energy thioester)', 0, 46 * s);
  }

  ctx.restore();
}

static drawOxaloacetate(ctx, x, y, options = {}) {
  const { scale = 1, label = true } = options;
  const s = scale;

  ctx.save();
  ctx.translate(x, y);

  // OAA = 4-carbon: COO⁻-CO-CH₂-COO⁻
  ctx.beginPath();
  ctx.roundRect(-65 * s, -28 * s, 130 * s, 56 * s, 10 * s);
  ctx.fillStyle = '#F0FFF4';
  ctx.fill();
  ctx.strokeStyle = '#48BB78';
  ctx.lineWidth = 2 * s;
  ctx.stroke();

  const atoms = [
    { x: -48 * s, y: 0, label: 'COO⁻', color: '#FED7D7', stroke: '#FC8181' },
    { x: -16 * s, y: 0, label: 'C=O', color: '#FEF3C7', stroke: '#ECC94B' },
    { x: 16 * s, y: 0, label: 'CH₂', color: '#E2E8F0', stroke: '#A0AEC0' },
    { x: 48 * s, y: 0, label: 'COO⁻', color: '#FED7D7', stroke: '#FC8181' },
  ];

  // Bonds
  ctx.strokeStyle = '#4A5568';
  ctx.lineWidth = 2 * s;
  for (let i = 0; i < atoms.length - 1; i++) {
    ctx.beginPath();
    ctx.moveTo(atoms[i].x + 12 * s, 0);
    ctx.lineTo(atoms[i + 1].x - 12 * s, 0);
    ctx.stroke();
  }

  // Atoms
  atoms.forEach(atom => {
    ctx.beginPath();
    ctx.arc(atom.x, atom.y, 13 * s, 0, Math.PI * 2);
    ctx.fillStyle = atom.color;
    ctx.fill();
    ctx.strokeStyle = atom.stroke;
    ctx.lineWidth = 1.5 * s;
    ctx.stroke();
    ctx.fillStyle = '#2D3748';
    ctx.font = `bold ${8 * s}px sans-serif`;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(atom.label, atom.x, atom.y);
  });

  if (label) {
    ctx.fillStyle = '#2D3748';
    ctx.font = `bold ${12 * s}px sans-serif`;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'top';
    ctx.fillText('Oxaloacetate (OAA)', 0, 18 * s);
    ctx.font = `${9 * s}px sans-serif`;
    ctx.fillStyle = '#718096';
    ctx.fillText('(C₄, Krebs cycle anchor)', 0, 32 * s);
  }

  ctx.restore();
}

static drawRubisco(ctx, x, y, options = {}) {
  const { scale = 1, label = true, animated = false, time = 0 } = options;
  const s = scale;

  ctx.save();
  ctx.translate(x, y);

  // RuBisCO is a large hexadecameric enzyme (8 large + 8 small subunits)
  // Simplified: barrel shape with 8 surrounding small subunits

  // Large subunit barrel (L8 core)
  const barrelGrad = ctx.createRadialGradient(-10 * s, -10 * s, 2 * s, 0, 0, 35 * s);
  barrelGrad.addColorStop(0, '#9AE6B4');
  barrelGrad.addColorStop(1, '#276749');
  ctx.beginPath();
  ctx.ellipse(0, 0, 35 * s, 28 * s, 0, 0, Math.PI * 2);
  ctx.fillStyle = barrelGrad;
  ctx.fill();
  ctx.strokeStyle = '#1C4532';
  ctx.lineWidth = 2.5 * s;
  ctx.stroke();

  // 8 small subunits on top and bottom (S8)
  for (let i = 0; i < 4; i++) {
    const angle = (Math.PI / 2) * i;
    const sx = 42 * s * Math.cos(angle);
    const sy = 42 * s * Math.sin(angle) * 0.7;
    ctx.beginPath();
    ctx.ellipse(sx, sy, 10 * s, 8 * s, angle, 0, Math.PI * 2);
    ctx.fillStyle = '#C6F6D5';
    ctx.fill();
    ctx.strokeStyle = '#276749';
    ctx.lineWidth = 1.5 * s;
    ctx.stroke();
  }

  // Active site indicator
  const pulseR = animated ? 8 * s + Math.sin(time * 3) * 2 * s : 8 * s;
  ctx.beginPath();
  ctx.arc(0, 0, pulseR, 0, Math.PI * 2);
  ctx.fillStyle = animated
    ? `rgba(236, 201, 75, ${0.5 + Math.sin(time * 3) * 0.3})`
    : 'rgba(236, 201, 75, 0.7)';
  ctx.fill();
  ctx.strokeStyle = '#B7791F';
  ctx.lineWidth = 1.5 * s;
  ctx.stroke();

  // Mg²⁺ cofactor at active site
  ctx.fillStyle = '#1A365D';
  ctx.font = `bold ${8 * s}px sans-serif`;
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText('Mg²⁺', 0, 0);

  // TIM barrel notation
  ctx.fillStyle = 'rgba(255,255,255,0.8)';
  ctx.font = `${8 * s}px sans-serif`;
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText('(β/α)₈', 0, 16 * s);

  if (label) {
    ctx.fillStyle = '#2D3748';
    ctx.font = `bold ${12 * s}px sans-serif`;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'top';
    ctx.fillText('RuBisCO', 0, 40 * s);
    ctx.font = `${9 * s}px sans-serif`;
    ctx.fillStyle = '#718096';
    ctx.fillText('(L₈S₈ hexadecamer)', 0, 54 * s);
  }

  ctx.restore();
}

static drawRuBP(ctx, x, y, options = {}) {
  const { scale = 1, label = true } = options;
  const s = scale;

  ctx.save();
  ctx.translate(x, y);

  // RuBP = 5-carbon bisphosphate
  ctx.beginPath();
  ctx.roundRect(-75 * s, -30 * s, 150 * s, 60 * s, 10 * s);
  ctx.fillStyle = '#EBF8FF';
  ctx.fill();
  ctx.strokeStyle = '#4299E1';
  ctx.lineWidth = 2 * s;
  ctx.stroke();

  const carbons = [
    { x: -52 * s, y: 0, label: 'P-C₁', color: '#FED7D7', stroke: '#FC8181' },
    { x: -22 * s, y: 0, label: 'C=O', color: '#FEF3C7', stroke: '#ECC94B' },
    { x: 8 * s, y: 0, label: 'CHOH', color: '#C6F6D5', stroke: '#48BB78' },
    { x: 38 * s, y: 0, label: 'CHOH', color: '#C6F6D5', stroke: '#48BB78' },
    { x: 64 * s, y: 0, label: 'C₅-P', color: '#FED7D7', stroke: '#FC8181' },
  ];

  // Bonds
  ctx.strokeStyle = '#4A5568';
  ctx.lineWidth = 2 * s;
  for (let i = 0; i < carbons.length - 1; i++) {
    ctx.beginPath();
    ctx.moveTo(carbons[i].x + 13 * s, 0);
    ctx.lineTo(carbons[i + 1].x - 13 * s, 0);
    ctx.stroke();
  }

  carbons.forEach(c => {
    ctx.beginPath();
    ctx.arc(c.x, c.y, 13 * s, 0, Math.PI * 2);
    ctx.fillStyle = c.color;
    ctx.fill();
    ctx.strokeStyle = c.stroke;
    ctx.lineWidth = 1.5 * s;
    ctx.stroke();
    ctx.fillStyle = '#2D3748';
    ctx.font = `bold ${7 * s}px sans-serif`;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(c.label, c.x, c.y);
  });

  if (label) {
    ctx.fillStyle = '#2D3748';
    ctx.font = `bold ${12 * s}px sans-serif`;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'top';
    ctx.fillText('RuBP (Ribulose-1,5-bisphosphate)', 0, 20 * s);
    ctx.font = `${9 * s}px sans-serif`;
    ctx.fillStyle = '#718096';
    ctx.fillText('C₅, CO₂ acceptor', 0, 34 * s);
  }

  ctx.restore();
}

static drawG3P(ctx, x, y, options = {}) {
  const { scale = 1, label = true } = options;
  const s = scale;

  ctx.save();
  ctx.translate(x, y);

  // G3P = glyceraldehyde-3-phosphate (3C)
  ctx.beginPath();
  ctx.roundRect(-50 * s, -28 * s, 100 * s, 56 * s, 10 * s);
  ctx.fillStyle = '#FFFAF0';
  ctx.fill();
  ctx.strokeStyle = '#ED8936';
  ctx.lineWidth = 2 * s;
  ctx.stroke();

  const atoms = [
    { x: -30 * s, y: 0, label: 'CHO', color: '#FEF3C7', stroke: '#ECC94B' },
    { x: 0, y: 0, label: 'CHOH', color: '#C6F6D5', stroke: '#48BB78' },
    { x: 30 * s, y: 0, label: 'CH₂-P', color: '#FED7D7', stroke: '#FC8181' },
  ];

  // Bonds
  ctx.strokeStyle = '#4A5568';
  ctx.lineWidth = 2 * s;
  for (let i = 0; i < atoms.length - 1; i++) {
    ctx.beginPath();
    ctx.moveTo(atoms[i].x + 13 * s, 0);
    ctx.lineTo(atoms[i + 1].x - 13 * s, 0);
    ctx.stroke();
  }

  atoms.forEach(atom => {
    ctx.beginPath();
    ctx.arc(atom.x, atom.y, 13 * s, 0, Math.PI * 2);
    ctx.fillStyle = atom.color;
    ctx.fill();
    ctx.strokeStyle = atom.stroke;
    ctx.lineWidth = 1.5 * s;
    ctx.stroke();
    ctx.fillStyle = '#2D3748';
    ctx.font = `bold ${7.5 * s}px sans-serif`;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(atom.label, atom.x, atom.y);
  });

  if (label) {
    ctx.fillStyle = '#2D3748';
    ctx.font = `bold ${12 * s}px sans-serif`;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'top';
    ctx.fillText('G3P', 0, 18 * s);
    ctx.font = `${9 * s}px sans-serif`;
    ctx.fillStyle = '#718096';
    ctx.fillText('(Glyceraldehyde-3-phosphate, C₃)', 0, 32 * s);
  }

  ctx.restore();
}

static drawPlastoquinone(ctx, x, y, options = {}) {
  const { scale = 1, label = true, animated = false, time = 0, reduced = false } = options;
  const s = scale;

  ctx.save();
  ctx.translate(x, y);

  // Similar to ubiquinone but in chloroplasts
  const ringRadius = 20 * s;
  ctx.beginPath();
  for (let i = 0; i < 6; i++) {
    const angle = (Math.PI / 3) * i - Math.PI / 6;
    const px = ringRadius * Math.cos(angle);
    const py = ringRadius * Math.sin(angle);
    i === 0 ? ctx.moveTo(px, py) : ctx.lineTo(px, py);
  }
  ctx.closePath();
  ctx.fillStyle = animated
    ? `hsl(${140 + Math.sin(time * 2) * 20}, 70%, ${reduced ? 45 : 65}%)`
    : (reduced ? '#48BB78' : '#68D391');
  ctx.fill();
  ctx.strokeStyle = '#276749';
  ctx.lineWidth = 2 * s;
  ctx.stroke();

  // Alternate double bonds
  ctx.strokeStyle = '#1C4532';
  ctx.lineWidth = 1.5 * s;
  for (let i = 0; i < 3; i++) {
    const a1 = (Math.PI / 3) * (i * 2) - Math.PI / 6;
    const a2 = (Math.PI / 3) * (i * 2 + 1) - Math.PI / 6;
    ctx.beginPath();
    ctx.moveTo((ringRadius * 0.55) * Math.cos(a1), (ringRadius * 0.55) * Math.sin(a1));
    ctx.lineTo((ringRadius * 0.55) * Math.cos(a2), (ringRadius * 0.55) * Math.sin(a2));
    ctx.stroke();
  }

  // =O groups (or OH for reduced PQH2)
  const oPositions = [
    { angle: -Math.PI / 2 },
    { angle: -Math.PI / 6 },
  ];
  oPositions.forEach(op => {
    const ox = (ringRadius + 14 * s) * Math.cos(op.angle);
    const oy = (ringRadius + 14 * s) * Math.sin(op.angle);
    ctx.beginPath();
    ctx.moveTo(ringRadius * Math.cos(op.angle), ringRadius * Math.sin(op.angle));
    ctx.lineTo(ox, oy);
    ctx.strokeStyle = reduced ? '#276749' : '#E53E3E';
    ctx.lineWidth = 2 * s;
    ctx.stroke();
    ctx.fillStyle = reduced ? '#276749' : '#E53E3E';
    ctx.font = `bold ${10 * s}px sans-serif`;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(reduced ? 'OH' : 'O', ox, oy);
  });

  // Phytyl tail
  ctx.strokeStyle = '#555';
  ctx.lineWidth = 1.5 * s;
  ctx.beginPath();
  const tailStart = { x: ringRadius * Math.cos(Math.PI / 2), y: ringRadius * Math.sin(Math.PI / 2) };
  ctx.moveTo(tailStart.x, tailStart.y);
  for (let i = 1; i <= 5; i++) {
    ctx.lineTo(tailStart.x + i * 10 * s, tailStart.y + (i % 2 === 0 ? -8 : 8) * s);
  }
  ctx.stroke();

  // State label
  ctx.fillStyle = '#1C4532';
  ctx.font = `bold ${10 * s}px sans-serif`;
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText(reduced ? 'PQH₂' : 'PQ', 0, 4 * s);

  if (label) {
    ctx.fillStyle = '#2D3748';
    ctx.font = `bold ${11 * s}px sans-serif`;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'top';
    ctx.fillText(reduced ? 'Plastoquinol (PQH₂)' : 'Plastoquinone (PQ)', 0, ringRadius + 22 * s);
  }

  ctx.restore();
}

static drawPlastocyanin(ctx, x, y, options = {}) {
  const { scale = 1, label = true, animated = false, time = 0, reduced = false } = options;
  const s = scale;

  ctx.save();
  ctx.translate(x, y);

  // Small blue copper protein (~10.5 kDa)
  const grad = ctx.createRadialGradient(-8 * s, -8 * s, 2 * s, 0, 0, 22 * s);
  grad.addColorStop(0, reduced ? '#90CDF4' : '#BEE3F8');
  grad.addColorStop(1, reduced ? '#2B6CB0' : '#4299E1');
  ctx.beginPath();
  ctx.ellipse(0, 0, 22 * s, 20 * s, 0, 0, Math.PI * 2);
  ctx.fillStyle = grad;
  ctx.fill();
  ctx.strokeStyle = '#1A365D';
  ctx.lineWidth = 2 * s;
  ctx.stroke();

  // Copper center
  ctx.beginPath();
  ctx.arc(0, 0, 6 * s, 0, Math.PI * 2);
  ctx.fillStyle = animated
    ? `hsl(${30 + Math.sin(time * 3) * 20}, 80%, 50%)`
    : '#DD6B20';
  ctx.fill();
  ctx.strokeStyle = '#7B341E';
  ctx.lineWidth = 1 * s;
  ctx.stroke();

  // Cu label
  ctx.fillStyle = '#FFF';
  ctx.font = `bold ${8 * s}px sans-serif`;
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText('Cu', 0, 0);

  // Ligands (His, His, Cys, Met) - 4 lines
  const ligands = ['His', 'His', 'Cys', 'Met'];
  ligands.forEach((lig, i) => {
    const angle = (Math.PI / 2) * i + Math.PI / 4;
    const lx = 14 * s * Math.cos(angle);
    const ly = 14 * s * Math.sin(angle);
    ctx.strokeStyle = '#718096';
    ctx.lineWidth = 1 * s;
    ctx.beginPath();
    ctx.moveTo(6 * s * Math.cos(angle), 6 * s * Math.sin(angle));
    ctx.lineTo(lx, ly);
    ctx.stroke();
  });

  // Oxidation state
  ctx.fillStyle = reduced ? '#276749' : '#C05621';
  ctx.font = `bold ${9 * s}px sans-serif`;
  ctx.textAlign = 'right';
  ctx.textBaseline = 'top';
  ctx.fillText(reduced ? 'Cu⁺' : 'Cu²⁺', 20 * s, -20 * s);

  // Animated electron pulse
  if (animated) {
    const pulse = Math.sin(time * 4) * 0.5 + 0.5;
    ctx.beginPath();
    ctx.arc(0, 0, (22 + pulse * 6) * s, 0, Math.PI * 2);
    ctx.strokeStyle = `rgba(66, 153, 225, ${0.3 + pulse * 0.4})`;
    ctx.lineWidth = 2 * s;
    ctx.stroke();
  }

  if (label) {
    ctx.fillStyle = '#2D3748';
    ctx.font = `bold ${11 * s}px sans-serif`;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'top';
    ctx.fillText('Plastocyanin (PC)', 0, 26 * s);
  }

  ctx.restore();
}

static drawFerredoxin(ctx, x, y, options = {}) {
  const { scale = 1, label = true, animated = false, time = 0, reduced = false } = options;
  const s = scale;

  ctx.save();
  ctx.translate(x, y);

  // Small iron-sulfur protein (~11 kDa)
  const grad = ctx.createRadialGradient(-6 * s, -6 * s, 2 * s, 0, 0, 22 * s);
  grad.addColorStop(0, reduced ? '#FEFCBF' : '#EDF2F7');
  grad.addColorStop(1, reduced ? '#B7791F' : '#718096');
  ctx.beginPath();
  ctx.ellipse(0, 0, 22 * s, 20 * s, 0, 0, Math.PI * 2);
  ctx.fillStyle = grad;
  ctx.fill();
  ctx.strokeStyle = '#4A5568';
  ctx.lineWidth = 2 * s;
  ctx.stroke();

  // 2Fe-2S cluster (small version)
  const clusterAtoms = [
    { x: -5 * s, y: -5 * s, type: 'Fe' },
    { x: 5 * s, y: -5 * s, type: 'S' },
    { x: 5 * s, y: 5 * s, type: 'Fe' },
    { x: -5 * s, y: 5 * s, type: 'S' },
  ];
  ctx.strokeStyle = '#718096';
  ctx.lineWidth = 1 * s;
  for (let i = 0; i < 4; i++) {
    const next = clusterAtoms[(i + 1) % 4];
    ctx.beginPath();
    ctx.moveTo(clusterAtoms[i].x, clusterAtoms[i].y);
    ctx.lineTo(next.x, next.y);
    ctx.stroke();
  }
  clusterAtoms.forEach(atom => {
    ctx.beginPath();
    ctx.arc(atom.x, atom.y, 4 * s, 0, Math.PI * 2);
    ctx.fillStyle = atom.type === 'Fe'
      ? (animated ? `hsl(${30 + Math.sin(time * 3) * 20}, 80%, 40%)` : '#C05621')
      : '#F6AD55';
    ctx.fill();
    ctx.strokeStyle = atom.type === 'Fe' ? '#7B341E' : '#C05621';
    ctx.lineWidth = 0.8 * s;
    ctx.stroke();
  });

  // Charge state
  ctx.fillStyle = reduced ? '#276749' : '#C53030';
  ctx.font = `${8 * s}px sans-serif`;
  ctx.textAlign = 'right';
  ctx.textBaseline = 'top';
  ctx.fillText(reduced ? 'Fd(red)' : 'Fd(ox)', 20 * s, -20 * s);

  if (animated) {
    const pulse = Math.sin(time * 4) * 0.5 + 0.5;
    ctx.beginPath();
    ctx.arc(0, 0, (22 + pulse * 5) * s, 0, Math.PI * 2);
    ctx.strokeStyle = `rgba(237, 137, 54, ${0.3 + pulse * 0.4})`;
    ctx.lineWidth = 2 * s;
    ctx.stroke();
  }

  if (label) {
    ctx.fillStyle = '#2D3748';
    ctx.font = `bold ${11 * s}px sans-serif`;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'top';
    ctx.fillText('Ferredoxin (Fd)', 0, 26 * s);
  }

  ctx.restore();
}

static drawFNR(ctx, x, y, options = {}) {
  const { scale = 1, label = true, animated = false, time = 0 } = options;
  const s = scale;

  ctx.save();
  ctx.translate(x, y);

  // FNR = Fd-NADP+ reductase, ~35 kDa flavoprotein
  const grad = ctx.createRadialGradient(-10 * s, -10 * s, 3 * s, 0, 0, 32 * s);
  grad.addColorStop(0, '#FEFCBF');
  grad.addColorStop(1, '#D69E2E');
  ctx.beginPath();
  ctx.ellipse(0, 0, 32 * s, 26 * s, 0, 0, Math.PI * 2);
  ctx.fillStyle = grad;
  ctx.fill();
  ctx.strokeStyle = '#744210';
  ctx.lineWidth = 2 * s;
  ctx.stroke();

  // FAD cofactor (simplified rectangle)
  ctx.beginPath();
  ctx.rect(-12 * s, -8 * s, 24 * s, 16 * s);
  ctx.fillStyle = 'rgba(246, 173, 85, 0.7)';
  ctx.fill();
  ctx.strokeStyle = '#C05621';
  ctx.lineWidth = 1.5 * s;
  ctx.stroke();
  ctx.fillStyle = '#7B341E';
  ctx.font = `bold ${9 * s}px sans-serif`;
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText('FAD', 0, 0);

  // NADP+ binding site (dashed outline)
  ctx.setLineDash([3, 3]);
  ctx.strokeStyle = '#2B6CB0';
  ctx.lineWidth = 1.5 * s;
  ctx.beginPath();
  ctx.ellipse(0, 0, 28 * s, 22 * s, 0, 0, Math.PI * 2);
  ctx.stroke();
  ctx.setLineDash([]);

  // Reaction arrow indicator
  if (animated) {
    const pulse = Math.sin(time * 3) * 0.5 + 0.5;
    ctx.fillStyle = `rgba(49, 130, 206, ${0.3 + pulse * 0.5})`;
    ctx.beginPath();
    ctx.arc(0, 0, (32 + pulse * 8) * s, 0, Math.PI * 2);
    ctx.strokeStyle = `rgba(49, 130, 206, ${0.3 + pulse * 0.4})`;
    ctx.lineWidth = 2 * s;
    ctx.stroke();
  }

  // Fd → NADP+ arrow notation
  ctx.fillStyle = '#1A365D';
  ctx.font = `${8 * s}px sans-serif`;
  ctx.textAlign = 'center';
  ctx.textBaseline = 'bottom';
  ctx.fillText('2Fd⁻ + NADP⁺ → 2Fd + NADPH', 0, -28 * s);

  if (label) {
    ctx.fillStyle = '#2D3748';
    ctx.font = `bold ${11 * s}px sans-serif`;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'top';
    ctx.fillText('FNR', 0, 32 * s);
    ctx.font = `${9 * s}px sans-serif`;
    ctx.fillStyle = '#718096';
    ctx.fillText('(Fd-NADP⁺ Reductase)', 0, 46 * s);
  }

  ctx.restore();
}

static drawPhotosystemII(ctx, x, y, options = {}) {
  const { scale = 1, label = true, animated = false, time = 0 } = options;
  const s = scale;

  ctx.save();
  ctx.translate(x, y);

  // PSII is a large multi-subunit complex embedded in thylakoid membrane
  const w = 90 * s, h = 70 * s;

  // Main complex body
  const grad = ctx.createLinearGradient(-w / 2, -h / 2, w / 2, h / 2);
  grad.addColorStop(0, '#C6F6D5');
  grad.addColorStop(1, '#276749');
  ctx.beginPath();
  ctx.roundRect(-w / 2, -h / 2, w, h, 12 * s);
  ctx.fillStyle = grad;
  ctx.fill();
  ctx.strokeStyle = '#1C4532';
  ctx.lineWidth = 2.5 * s;
  ctx.stroke();

  // Oxygen evolving complex (OEC) - manganese cluster on lumenal side
  ctx.beginPath();
  ctx.roundRect(-30 * s, h / 2 - 2 * s, 60 * s, 22 * s, 6 * s);
  ctx.fillStyle = '#FED7D7';
  ctx.fill();
  ctx.strokeStyle = '#C53030';
  ctx.lineWidth = 1.5 * s;
  ctx.stroke();
  ctx.fillStyle = '#9B2C2C';
  ctx.font = `bold ${9 * s}px sans-serif`;
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText('Mn₄CaO₅ (OEC)', 0, h / 2 + 9 * s);

  // Water oxidation: 2H₂O → O₂ + 4H⁺ + 4e⁻
  ctx.fillStyle = '#2D3748';
  ctx.font = `${8 * s}px sans-serif`;
  ctx.textAlign = 'center';
  ctx.textBaseline = 'bottom';
  ctx.fillText('2H₂O → O₂ + 4H⁺ + 4e⁻', 0, -h / 2 - 4 * s);

  // P680 reaction center
  const p680X = 0, p680Y = -8 * s;
  ctx.beginPath();
  ctx.arc(p680X, p680Y, 14 * s, 0, Math.PI * 2);
  ctx.fillStyle = animated
    ? `hsl(${120 + Math.sin(time * 5) * 30}, 80%, 50%)`
    : '#F6AD55';
  ctx.fill();
  ctx.strokeStyle = '#C05621';
  ctx.lineWidth = 2 * s;
  ctx.stroke();
  ctx.fillStyle = '#7B341E';
  ctx.font = `bold ${9 * s}px sans-serif`;
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText('P680', p680X, p680Y);

  // Pheophytin (Pheo) electron acceptor
  ctx.beginPath();
  ctx.arc(-22 * s, 10 * s, 8 * s, 0, Math.PI * 2);
  ctx.fillStyle = '#BEE3F8';
  ctx.fill();
  ctx.strokeStyle = '#2B6CB0';
  ctx.lineWidth = 1.5 * s;
  ctx.stroke();
  ctx.fillStyle = '#2B6CB0';
  ctx.font = `${7 * s}px sans-serif`;
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText('Pheo', -22 * s, 10 * s);

  // QA and QB plastoquinones
  ['QA', 'QB'].forEach((name, i) => {
    const qx = (i === 0 ? 18 : 38) * s;
    const qy = 10 * s;
    ctx.beginPath();
    ctx.arc(qx, qy, 8 * s, 0, Math.PI * 2);
    ctx.fillStyle = '#FEFCBF';
    ctx.fill();
    ctx.strokeStyle = '#D69E2E';
    ctx.lineWidth = 1.5 * s;
    ctx.stroke();
    ctx.fillStyle = '#744210';
    ctx.font = `bold ${7 * s}px sans-serif`;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(name, qx, qy);
  });

  // Chlorophyll antenna systems
  for (let i = 0; i < 4; i++) {
    const angle = (Math.PI / 2) * i + Math.PI / 4;
    const cx = 35 * s * Math.cos(angle);
    const cy = 35 * s * Math.sin(angle);
    ctx.beginPath();
    ctx.arc(cx, cy, 6 * s, 0, Math.PI * 2);
    ctx.fillStyle = animated
      ? `hsl(${120 + Math.sin(time * 3 + i) * 20}, 60%, 50%)`
      : '#68D391';
    ctx.fill();
    ctx.strokeStyle = '#276749';
    ctx.lineWidth = 1 * s;
    ctx.stroke();
  }

  // Electron transfer arrow (animated)
  if (animated) {
    const arrowProgress = (time % 1);
    ctx.strokeStyle = `rgba(237, 137, 54, 0.8)`;
    ctx.lineWidth = 2 * s;
    ctx.beginPath();
    ctx.moveTo(p680X, p680Y + 14 * s);
    ctx.lineTo(p680X, p680Y + 14 * s + arrowProgress * 20 * s);
    ctx.stroke();
  }

  if (label) {
    ctx.fillStyle = '#2D3748';
    ctx.font = `bold ${12 * s}px sans-serif`;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'top';
    ctx.fillText('Photosystem II (PSII)', 0, h / 2 + 32 * s);
  }

  ctx.restore();
}

static drawPhotosystemI(ctx, x, y, options = {}) {
  const { scale = 1, label = true, animated = false, time = 0 } = options;
  const s = scale;

  ctx.save();
  ctx.translate(x, y);

  const w = 85 * s, h = 65 * s;

  // Main complex body
  const grad = ctx.createLinearGradient(-w / 2, -h / 2, w / 2, h / 2);
  grad.addColorStop(0, '#BEE3F8');
  grad.addColorStop(1, '#2C5282');
  ctx.beginPath();
  ctx.roundRect(-w / 2, -h / 2, w, h, 12 * s);
  ctx.fillStyle = grad;
  ctx.fill();
  ctx.strokeStyle = '#1A365D';
  ctx.lineWidth = 2.5 * s;
  ctx.stroke();

  // P700 reaction center
  ctx.beginPath();
  ctx.arc(0, 0, 14 * s, 0, Math.PI * 2);
  ctx.fillStyle = animated
    ? `hsl(${210 + Math.sin(time * 5) * 30}, 80%, 55%)`
    : '#F6AD55';
  ctx.fill();
  ctx.strokeStyle = '#C05621';
  ctx.lineWidth = 2 * s;
  ctx.stroke();
  ctx.fillStyle = '#7B341E';
  ctx.font = `bold ${9 * s}px sans-serif`;
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText('P700', 0, 0);

  // A0 (chlorophyll acceptor)
  ctx.beginPath();
  ctx.arc(-20 * s, -20 * s, 7 * s, 0, Math.PI * 2);
  ctx.fillStyle = '#C6F6D5';
  ctx.fill();
  ctx.strokeStyle = '#276749';
  ctx.lineWidth = 1.5 * s;
  ctx.stroke();
  ctx.fillStyle = '#1C4532';
  ctx.font = `${7 * s}px sans-serif`;
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText('A₀', -20 * s, -20 * s);

  // A1 (phylloquinone)
  ctx.beginPath();
  ctx.arc(20 * s, -20 * s, 7 * s, 0, Math.PI * 2);
  ctx.fillStyle = '#FEFCBF';
  ctx.fill();
  ctx.strokeStyle = '#D69E2E';
  ctx.lineWidth = 1.5 * s;
  ctx.stroke();
  ctx.fillStyle = '#744210';
  ctx.font = `${7 * s}px sans-serif`;
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText('A₁', 20 * s, -20 * s);

  // FeSA, FeSB (iron-sulfur clusters)
  [{ x: -10 * s, y: -30 * s, n: 'FₓA' }, { x: 10 * s, y: -30 * s, n: 'FₓB' }].forEach(fe => {
    ctx.beginPath();
    ctx.arc(fe.x, fe.y, 7 * s, 0, Math.PI * 2);
    ctx.fillStyle = '#FED7D7';
    ctx.fill();
    ctx.strokeStyle = '#C53030';
    ctx.lineWidth = 1.5 * s;
    ctx.stroke();
    ctx.fillStyle = '#9B2C2C';
    ctx.font = `${6 * s}px sans-serif`;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(fe.n, fe.x, fe.y);
  });

  // Ferredoxin docking site (top)
  ctx.beginPath();
  ctx.roundRect(-20 * s, -h / 2 - 18 * s, 40 * s, 18 * s, 4 * s);
  ctx.fillStyle = '#E2E8F0';
  ctx.fill();
  ctx.strokeStyle = '#718096';
  ctx.lineWidth = 1.5 * s;
  ctx.stroke();
  ctx.fillStyle = '#4A5568';
  ctx.font = `${8 * s}px sans-serif`;
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText('Fd dock', 0, -h / 2 - 9 * s);

  // Plastocyanin docking site (bottom)
  ctx.beginPath();
  ctx.roundRect(-20 * s, h / 2, 40 * s, 18 * s, 4 * s);
  ctx.fillStyle = '#EBF8FF';
  ctx.fill();
  ctx.strokeStyle = '#4299E1';
  ctx.lineWidth = 1.5 * s;
  ctx.stroke();
  ctx.fillStyle = '#2B6CB0';
  ctx.font = `${8 * s}px sans-serif`;
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText('PC dock', 0, h / 2 + 9 * s);

  // Antenna chlorophylls
  for (let i = 0; i < 4; i++) {
    const angle = (Math.PI / 2) * i + Math.PI / 4;
    const cx = 32 * s * Math.cos(angle);
    const cy = 32 * s * Math.sin(angle);
    ctx.beginPath();
    ctx.arc(cx, cy, 6 * s, 0, Math.PI * 2);
    ctx.fillStyle = animated
      ? `hsl(${200 + Math.sin(time * 3 + i) * 25}, 60%, 55%)`
      : '#90CDF4';
    ctx.fill();
    ctx.strokeStyle = '#2B6CB0';
    ctx.lineWidth = 1 * s;
    ctx.stroke();
  }

  if (label) {
    ctx.fillStyle = '#2D3748';
    ctx.font = `bold ${12 * s}px sans-serif`;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'top';
    ctx.fillText('Photosystem I (PSI)', 0, h / 2 + 28 * s);
  }

  ctx.restore();
}

static drawCytochromeb6f(ctx, x, y, options = {}) {
  const { scale = 1, label = true, animated = false, time = 0 } = options;
  const s = scale;

  ctx.save();
  ctx.translate(x, y);

  const w = 80 * s, h = 60 * s;

  // Main complex
  const grad = ctx.createLinearGradient(-w / 2, 0, w / 2, 0);
  grad.addColorStop(0, '#E9D8FD');
  grad.addColorStop(1, '#553C9A');
  ctx.beginPath();
  ctx.roundRect(-w / 2, -h / 2, w, h, 10 * s);
  ctx.fillStyle = grad;
  ctx.fill();
  ctx.strokeStyle = '#322659';
  ctx.lineWidth = 2.5 * s;
  ctx.stroke();

  // Cytochrome b6 subunit
  ctx.beginPath();
  ctx.roundRect(-w / 2 + 5 * s, -h / 2 + 5 * s, 30 * s, h - 10 * s, 6 * s);
  ctx.fillStyle = 'rgba(183, 121, 31, 0.5)';
  ctx.fill();
  ctx.strokeStyle = '#744210';
  ctx.lineWidth = 1.5 * s;
  ctx.stroke();
  ctx.fillStyle = '#7B341E';
  ctx.font = `${8 * s}px sans-serif`;
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText('Cyt b₆', -w / 2 + 20 * s, 0);

  // Cytochrome f subunit
  ctx.beginPath();
  ctx.roundRect(5 * s, -h / 2 + 5 * s, 30 * s, h - 10 * s, 6 * s);
  ctx.fillStyle = 'rgba(49, 130, 206, 0.5)';
  ctx.fill();
  ctx.strokeStyle = '#2B6CB0';
  ctx.lineWidth = 1.5 * s;
  ctx.stroke();
  ctx.fillStyle = '#1A365D';
  ctx.font = `${8 * s}px sans-serif`;
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText('Cyt f', 20 * s, 0);

  // Rieske FeS protein (top)
  ctx.beginPath();
  ctx.arc(0, -h / 2 + 10 * s, 8 * s, 0, Math.PI * 2);
  ctx.fillStyle = '#FED7D7';
  ctx.fill();
  ctx.strokeStyle = '#C53030';
  ctx.lineWidth = 1.5 * s;
  ctx.stroke();
  ctx.fillStyle = '#9B2C2C';
  ctx.font = `${7 * s}px sans-serif`;
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText('FeS', 0, -h / 2 + 10 * s);

  // Q-cycle: PQ oxidation on lumenal side, arrows
  const qCycleY = h / 2 - 5 * s;
  ctx.fillStyle = '#2D3748';
  ctx.font = `${8 * s}px sans-serif`;
  ctx.textAlign = 'center';
  ctx.textBaseline = 'bottom';
  ctx.fillText('PQH₂ → PQ + 2H⁺', 0, -h / 2 - 5 * s);

  // Proton transfer arrows (animated)
  if (animated) {
    const offset = (time % 1) * h;
    ctx.strokeStyle = 'rgba(237, 137, 54, 0.8)';
    ctx.lineWidth = 2 * s;
    ctx.beginPath();
    ctx.moveTo(-w / 2 - 15 * s, -h / 2 + offset * 0.5);
    ctx.lineTo(-w / 2 - 15 * s, h / 2 - (h - offset * 0.5));
    ctx.stroke();
    // Arrow head
    ctx.beginPath();
    ctx.moveTo(-w / 2 - 15 * s, -h / 2 + offset * 0.5);
    ctx.lineTo(-w / 2 - 18 * s, -h / 2 + offset * 0.5 + 6 * s);
    ctx.lineTo(-w / 2 - 12 * s, -h / 2 + offset * 0.5 + 6 * s);
    ctx.closePath();
    ctx.fillStyle = 'rgba(237, 137, 54, 0.8)';
    ctx.fill();
  }

  if (label) {
    ctx.fillStyle = '#2D3748';
    ctx.font = `bold ${12 * s}px sans-serif`;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'top';
    ctx.fillText('Cytochrome b₆f Complex', 0, h / 2 + 10 * s);
  }

  ctx.restore();
}

static drawPeroxisome(ctx, x, y, options = {}) {
  const { scale = 1, label = true } = options;
  const s = scale;

  ctx.save();
  ctx.translate(x, y);

  // Single membrane-bound organelle
  const r = 40 * s;

  // Outer membrane
  const grad = ctx.createRadialGradient(-10 * s, -10 * s, 5 * s, 0, 0, r);
  grad.addColorStop(0, '#FFF5F5');
  grad.addColorStop(1, '#FED7D7');
  ctx.beginPath();
  ctx.arc(0, 0, r, 0, Math.PI * 2);
  ctx.fillStyle = grad;
  ctx.fill();
  ctx.strokeStyle = '#FC8181';
  ctx.lineWidth = 3 * s;
  ctx.stroke();

  // Crystalloid core (urate oxidase crystal - distinctive feature)
  ctx.beginPath();
  ctx.rect(-14 * s, -14 * s, 28 * s, 28 * s);
  ctx.fillStyle = 'rgba(245, 101, 101, 0.4)';
  ctx.fill();
  ctx.strokeStyle = '#E53E3E';
  ctx.lineWidth = 1.5 * s;
  ctx.stroke();
  ctx.fillStyle = '#9B2C2C';
  ctx.font = `bold ${7 * s}px sans-serif`;
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText('Crystalloid', 0, 0);
  ctx.fillText('core', 0, 8 * s);

  // H2O2 production indicator (catalase enzyme)
  ctx.fillStyle = '#E53E3E';
  ctx.font = `${9 * s}px sans-serif`;
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText('H₂O₂', -22 * s, -22 * s);

  // Arrow to H2O
  ctx.strokeStyle = '#48BB78';
  ctx.lineWidth = 1.5 * s;
  ctx.beginPath();
  ctx.moveTo(-14 * s, -22 * s);
  ctx.lineTo(-6 * s, -22 * s);
  ctx.stroke();
  // Arrow head
  ctx.beginPath();
  ctx.moveTo(-6 * s, -22 * s);
  ctx.lineTo(-10 * s, -25 * s);
  ctx.lineTo(-10 * s, -19 * s);
  ctx.closePath();
  ctx.fillStyle = '#48BB78';
  ctx.fill();

  ctx.fillStyle = '#276749';
  ctx.font = `${9 * s}px sans-serif`;
  ctx.textAlign = 'left';
  ctx.textBaseline = 'middle';
  ctx.fillText('H₂O', -4 * s, -22 * s);

  // Catalase label
  ctx.fillStyle = '#4A5568';
  ctx.font = `italic ${8 * s}px sans-serif`;
  ctx.textAlign = 'center';
  ctx.textBaseline = 'top';
  ctx.fillText('catalase', 0, 18 * s);

  // Membrane proteins (small bumps)
  for (let i = 0; i < 6; i++) {
    const angle = (Math.PI / 3) * i;
    const px = r * Math.cos(angle);
    const py = r * Math.sin(angle);
    ctx.beginPath();
    ctx.arc(px, py, 4 * s, 0, Math.PI * 2);
    ctx.fillStyle = '#FC8181';
    ctx.fill();
    ctx.strokeStyle = '#C53030';
    ctx.lineWidth = 1 * s;
    ctx.stroke();
  }

  if (label) {
    ctx.fillStyle = '#2D3748';
    ctx.font = `bold ${12 * s}px sans-serif`;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'top';
    ctx.fillText('Peroxisome', 0, r + 8 * s);
    ctx.font = `${9 * s}px sans-serif`;
    ctx.fillStyle = '#718096';
    ctx.fillText('(β-oxidation / ROS detox)', 0, r + 22 * s);
  }

  ctx.restore();
}

static drawRibosome70S(ctx, x, y, options = {}) {
  const { scale = 1, label = true, animated = false, time = 0 } = options;
  const s = scale;

  ctx.save();
  ctx.translate(x, y);

  // 70S ribosome = 50S large subunit + 30S small subunit

  // 50S large subunit
  const lsGrad = ctx.createRadialGradient(-8 * s, -8 * s, 3 * s, 0, -8 * s, 32 * s);
  lsGrad.addColorStop(0, '#BEE3F8');
  lsGrad.addColorStop(1, '#2B6CB0');
  ctx.beginPath();
  ctx.ellipse(0, -10 * s, 34 * s, 26 * s, 0, 0, Math.PI * 2);
  ctx.fillStyle = lsGrad;
  ctx.fill();
  ctx.strokeStyle = '#1A365D';
  ctx.lineWidth = 2 * s;
  ctx.stroke();

  // L-shaped notch for subunit interaction
  ctx.beginPath();
  ctx.arc(0, 12 * s, 12 * s, 0, Math.PI, true);
  ctx.fillStyle = '#EBF4FF';
  ctx.fill();

  ctx.fillStyle = 'rgba(255,255,255,0.85)';
  ctx.font = `bold ${10 * s}px sans-serif`;
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText('50S', 0, -14 * s);

  // 23S rRNA label
  ctx.fillStyle = 'rgba(255,255,255,0.6)';
  ctx.font = `${7 * s}px sans-serif`;
  ctx.fillText('23S + 5S rRNA', 0, -4 * s);

  // 30S small subunit
  const ssGrad = ctx.createRadialGradient(-6 * s, 22 * s, 2 * s, 0, 22 * s, 20 * s);
  ssGrad.addColorStop(0, '#C6F6D5');
  ssGrad.addColorStop(1, '#276749');
  ctx.beginPath();
  ctx.ellipse(0, 22 * s, 26 * s, 16 * s, 0, 0, Math.PI * 2);
  ctx.fillStyle = ssGrad;
  ctx.fill();
  ctx.strokeStyle = '#1C4532';
  ctx.lineWidth = 2 * s;
  ctx.stroke();

  ctx.fillStyle = 'rgba(255,255,255,0.85)';
  ctx.font = `bold ${10 * s}px sans-serif`;
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText('30S', 0, 22 * s);

  // 16S rRNA
  ctx.fillStyle = 'rgba(255,255,255,0.6)';
  ctx.font = `${7 * s}px sans-serif`;
  ctx.fillText('16S rRNA', 0, 30 * s);

  // mRNA channel (animated)
  if (animated) {
    const mOffset = (time * 15) % 60;
    ctx.strokeStyle = '#F6AD55';
    ctx.lineWidth = 3 * s;
    ctx.setLineDash([5, 5]);
    ctx.lineDashOffset = -mOffset;
    ctx.beginPath();
    ctx.moveTo(-50 * s, 14 * s);
    ctx.lineTo(50 * s, 14 * s);
    ctx.stroke();
    ctx.setLineDash([]);
    ctx.lineDashOffset = 0;
    // tRNA sites A, P, E
    ['E', 'P', 'A'].forEach((site, i) => {
      const sx = (i - 1) * 16 * s;
      ctx.fillStyle = 'rgba(237, 137, 54, 0.8)';
      ctx.font = `bold ${8 * s}px sans-serif`;
      ctx.textAlign = 'center';
      ctx.textBaseline = 'top';
      ctx.fillText(site, sx, 15 * s);
    });
  }

  if (label) {
    ctx.fillStyle = '#2D3748';
    ctx.font = `bold ${12 * s}px sans-serif`;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'top';
    ctx.fillText('70S Ribosome', 0, 42 * s);
    ctx.font = `${9 * s}px sans-serif`;
    ctx.fillStyle = '#718096';
    ctx.fillText('(mitochondrial / chloroplast)', 0, 56 * s);
  }

  ctx.restore();
}

