// ===== ROOT SYSTEM =====
static drawRootSystem(ctx, x, y, width, height, type, process) {
  ctx.save();
  ctx.translate(x, y);

  switch(type) {
    case 'taproot':
      this.drawTaprootSystem(ctx, width, height, process);
      break;
    case 'fibrous':
      this.drawFibrousRootSystem(ctx, width, height, process);
      break;
    case 'complete':
    default:
      this.drawCompleteRootSystem(ctx, width, height, process);
      break;
  }

  ctx.restore();
}

static drawCompleteRootSystem(ctx, w, h, process) {
  // Background - soil gradient
  const soilGrad = ctx.createLinearGradient(0, 0, 0, h);
  soilGrad.addColorStop(0, '#8B6914');
  soilGrad.addColorStop(0.3, '#7A5C10');
  soilGrad.addColorStop(1, '#5A3E08');
  ctx.fillStyle = soilGrad;
  ctx.fillRect(0, 0, w, h);

  // Soil particles
  ctx.fillStyle = '#6B4A0E';
  for(let i = 0; i < 40; i++) {
    const px = (i * 137.5 % 1) * w;
    const py = (i * 0.0732) * h;
    ctx.beginPath();
    ctx.arc(px, py, w * 0.008 + (i % 3) * w * 0.005, 0, Math.PI * 2);
    ctx.fill();
  }

  // Divider line between taproot and fibrous
  ctx.strokeStyle = '#FFDD44';
  ctx.lineWidth = 2;
  ctx.setLineDash([8, 4]);
  ctx.beginPath();
  ctx.moveTo(w * 0.5, 0);
  ctx.lineTo(w * 0.5, h);
  ctx.stroke();
  ctx.setLineDash([]);

  // === LEFT: Taproot system ===
  this.drawTaprootSystem(ctx, w * 0.44, h * 0.9, process, w * 0.04, h * 0.05);

  // === RIGHT: Fibrous root system ===
  this.drawFibrousRootSystem(ctx, w * 0.44, h * 0.9, process, w * 0.54, h * 0.05);

  // Labels
  ctx.fillStyle = '#FFFFFF';
  ctx.font = `bold ${h * 0.05}px Arial`;
  ctx.textAlign = 'center';
  ctx.fillText('Taproot System', w * 0.25, h * 0.05);
  ctx.fillText('Fibrous Root System', w * 0.75, h * 0.05);
  ctx.textAlign = 'left';

  if(process === 'water-uptake') {
    ctx.strokeStyle = '#4488FF';
    ctx.lineWidth = 2;
    ctx.setLineDash([4, 3]);
    for(let i = 0; i < 6; i++) {
      const px = (i / 5) * w;
      ctx.beginPath();
      ctx.moveTo(px, h * 0.9);
      ctx.lineTo(px + w * 0.02, h * 0.75);
      ctx.stroke();
    }
    ctx.setLineDash([]);
    ctx.fillStyle = '#88CCFF';
    ctx.font = `${h * 0.04}px Arial`;
    ctx.fillText('Water absorption', w * 0.02, h * 0.95);
  }
}

static drawTaprootSystem(ctx, w, h, process, offsetX = 0, offsetY = 0) {
  ctx.save();
  ctx.translate(offsetX, offsetY);

  // Main taproot
  ctx.fillStyle = '#C8A050';
  ctx.strokeStyle = '#8B6020';
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.moveTo(w * 0.45, 0);
  ctx.bezierCurveTo(w * 0.42, h * 0.3, w * 0.44, h * 0.6, w * 0.43, h * 0.9);
  ctx.lineTo(w * 0.53, h * 0.9);
  ctx.bezierCurveTo(w * 0.54, h * 0.6, w * 0.56, h * 0.3, w * 0.55, 0);
  ctx.closePath();
  ctx.fill();
  ctx.stroke();

  // Lateral roots
  const laterals = [
    {y:0.2,dir:-1,l:0.3},{y:0.3,dir:1,l:0.28},{y:0.42,dir:-1,l:0.25},
    {y:0.52,dir:1,l:0.22},{y:0.62,dir:-1,l:0.18},{y:0.72,dir:1,l:0.15},
  ];
  laterals.forEach(lr => {
    ctx.strokeStyle = '#A88030';
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.moveTo(w * (lr.dir < 0 ? 0.45 : 0.55), h * lr.y);
    ctx.bezierCurveTo(
      w * (lr.dir < 0 ? 0.45 - lr.l * 0.5 : 0.55 + lr.l * 0.5), h * (lr.y + 0.02),
      w * (lr.dir < 0 ? 0.45 - lr.l * 0.8 : 0.55 + lr.l * 0.8), h * (lr.y + 0.04),
      w * (lr.dir < 0 ? 0.45 - lr.l : 0.55 + lr.l), h * (lr.y + 0.06)
    );
    ctx.stroke();

    // Root hairs on laterals
    ctx.strokeStyle = '#C8A060';
    ctx.lineWidth = 1;
    for(let i = 0; i < 4; i++) {
      const t = (i + 1) / 5;
      const hx = w * (lr.dir < 0 ? 0.45 - lr.l * t : 0.55 + lr.l * t);
      const hy = h * (lr.y + 0.04 * t);
      ctx.beginPath();
      ctx.moveTo(hx, hy);
      ctx.lineTo(hx, hy + h * 0.025);
      ctx.stroke();
    }
  });

  // Root cap at tip
  ctx.fillStyle = '#D4B060';
  ctx.beginPath();
  ctx.ellipse(w * 0.49, h * 0.92, w * 0.055, h * 0.04, 0, 0, Math.PI * 2);
  ctx.fill();

  ctx.restore();
}

static drawFibrousRootSystem(ctx, w, h, process, offsetX = 0, offsetY = 0) {
  ctx.save();
  ctx.translate(offsetX, offsetY);

  // Multiple fibrous roots radiating from base
  const rootData = [
    {startX:0.45,angle:-0.8,len:0.9,curve:-0.15},
    {startX:0.47,angle:-0.4,len:0.85,curve:0.1},
    {startX:0.5,angle:0,len:0.88,curve:-0.05},
    {startX:0.52,angle:0.4,len:0.83,curve:0.12},
    {startX:0.54,angle:0.8,len:0.87,curve:-0.1},
    {startX:0.46,angle:-1.1,len:0.75,curve:0.2},
    {startX:0.53,angle:1.1,len:0.72,curve:-0.2},
  ];

  rootData.forEach((rd, ri) => {
    const endX = rd.startX + Math.sin(rd.angle) * rd.len * 0.45;
    const endY = Math.cos(rd.angle < 0 ? -rd.angle : rd.angle) * rd.len * 0.88;
    const thickness = 3 - ri * 0.2;

    ctx.strokeStyle = '#B89040';
    ctx.lineWidth = Math.max(1.5, thickness);
    ctx.beginPath();
    ctx.moveTo(w * rd.startX, 0);
    ctx.bezierCurveTo(
      w * (rd.startX + rd.curve * 0.5), h * 0.35,
      w * (endX + rd.curve), h * 0.65,
      w * endX, h * endY
    );
    ctx.stroke();

    // Root hairs along each root
    ctx.strokeStyle = '#D4B060';
    ctx.lineWidth = 1;
    for(let i = 2; i < 7; i++) {
      const t = i / 8;
      const hx = w * (rd.startX + (endX - rd.startX) * t + rd.curve * t * 0.5);
      const hy = h * endY * t;
      ctx.beginPath();
      ctx.moveTo(hx, hy);
      ctx.lineTo(hx + w * 0.02 * (ri % 2 ? 1 : -1), hy + h * 0.02);
      ctx.stroke();
    }
  });

  // Stem base
  ctx.fillStyle = '#6B8830';
  ctx.strokeStyle = '#3A5510';
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.rect(w * 0.44, -h * 0.04, w * 0.12, h * 0.06);
  ctx.fill();
  ctx.stroke();

  ctx.restore();
}

// ===== STEM SYSTEM =====
static drawStemSystem(ctx, x, y, width, height, type, process) {
  ctx.save();
  ctx.translate(x, y);

  switch(type) {
    case 'longitudinal':
      this.drawStemLongitudinal(ctx, width, height, process);
      break;
    case 'shoot':
      this.drawShootSystem(ctx, width, height, process);
      break;
    case 'complete':
    default:
      this.drawCompleteStemSystem(ctx, width, height, process);
      break;
  }

  ctx.restore();
}

static drawCompleteStemSystem(ctx, w, h, process) {
  ctx.fillStyle = '#0A1A08';
  ctx.fillRect(0, 0, w, h);

  // Main stem (central axis)
  const stemX = w * 0.5;
  ctx.fillStyle = '#6B8830';
  ctx.strokeStyle = '#3A5510';
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.rect(stemX - w * 0.04, h * 0.08, w * 0.08, h * 0.85);
  ctx.fill();
  ctx.stroke();

  // Nodes and leaves at intervals
  const nodeHeights = [0.15, 0.3, 0.45, 0.6, 0.72];
  nodeHeights.forEach((ny, i) => {
    // Node band
    ctx.fillStyle = '#4A7020';
    ctx.beginPath();
    ctx.rect(stemX - w * 0.045, ny * h, w * 0.09, h * 0.025);
    ctx.fill();

    // Leaf (alternating sides)
    const side = i % 2 === 0 ? 1 : -1;
    ctx.fillStyle = '#7AB840';
    ctx.strokeStyle = '#3A6810';
    ctx.lineWidth = 1.5;
    ctx.beginPath();
    ctx.moveTo(stemX + side * w * 0.04, ny * h + h * 0.012);
    ctx.bezierCurveTo(
      stemX + side * w * 0.2, ny * h - h * 0.04,
      stemX + side * w * 0.35, ny * h - h * 0.02,
      stemX + side * w * 0.38, ny * h + h * 0.03
    );
    ctx.bezierCurveTo(
      stemX + side * w * 0.28, ny * h + h * 0.07,
      stemX + side * w * 0.12, ny * h + h * 0.05,
      stemX + side * w * 0.04, ny * h + h * 0.012
    );
    ctx.fill();
    ctx.stroke();

    // Midrib
    ctx.strokeStyle = '#4A7820';
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(stemX + side * w * 0.04, ny * h + h * 0.012);
    ctx.lineTo(stemX + side * w * 0.34, ny * h + h * 0.02);
    ctx.stroke();

    // Axillary bud
    ctx.fillStyle = '#C8A050';
    ctx.beginPath();
    ctx.arc(stemX + side * w * 0.055, ny * h - h * 0.01, w * 0.018, 0, Math.PI * 2);
    ctx.fill();
  });

  // Apical bud
  ctx.fillStyle = '#AADE68';
  ctx.strokeStyle = '#4A7820';
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.ellipse(stemX, h * 0.07, w * 0.04, h * 0.045, 0, 0, Math.PI * 2);
  ctx.fill();
  ctx.stroke();

  // Leaf primordia around apex
  ctx.fillStyle = '#CCEE88';
  [{a:-0.4},{a:0.4}].forEach(lp => {
    ctx.beginPath();
    ctx.ellipse(stemX + Math.sin(lp.a)*w*0.04, h*0.055, w*0.02, h*0.02, lp.a, 0, Math.PI*2);
    ctx.fill();
  });

  // Internode labels (bracket)
  ctx.strokeStyle = '#FFAA44';
  ctx.lineWidth = 1.5;
  ctx.setLineDash([3, 3]);
  ctx.beginPath();
  ctx.moveTo(stemX + w * 0.12, h * 0.3 + h * 0.025);
  ctx.lineTo(stemX + w * 0.18, h * 0.3 + h * 0.025);
  ctx.lineTo(stemX + w * 0.18, h * 0.45);
  ctx.lineTo(stemX + w * 0.12, h * 0.45);
  ctx.stroke();
  ctx.setLineDash([]);

  // Process highlights
  if(process === 'transport') {
    // Upward water/minerals arrow
    ctx.strokeStyle = '#4488FF';
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.moveTo(stemX - w * 0.02, h * 0.85);
    ctx.lineTo(stemX - w * 0.02, h * 0.15);
    ctx.stroke();
    ctx.fillStyle = '#4488FF';
    ctx.beginPath();
    ctx.moveTo(stemX - w * 0.02, h * 0.12);
    ctx.lineTo(stemX - w * 0.05, h * 0.18);
    ctx.lineTo(stemX + w * 0.01, h * 0.18);
    ctx.closePath();
    ctx.fill();

    // Downward sugar arrow
    ctx.strokeStyle = '#FF8844';
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.moveTo(stemX + w * 0.02, h * 0.15);
    ctx.lineTo(stemX + w * 0.02, h * 0.85);
    ctx.stroke();
    ctx.fillStyle = '#FF8844';
    ctx.beginPath();
    ctx.moveTo(stemX + w * 0.02, h * 0.88);
    ctx.lineTo(stemX - w * 0.01, h * 0.82);
    ctx.lineTo(stemX + w * 0.05, h * 0.82);
    ctx.closePath();
    ctx.fill();
  }

  // Labels
  ctx.fillStyle = '#FFFFFF';
  ctx.font = `bold ${h * 0.05}px Arial`;
  ctx.fillText('Shoot System', w * 0.32, h * 0.04);
  ctx.font = `${h * 0.035}px Arial`;
  ctx.fillText('Apical bud', stemX + w * 0.08, h * 0.08);
  ctx.fillText('Node', stemX - w * 0.46, h * 0.305);
  ctx.fillText('Axillary bud', stemX - w * 0.48, h * 0.44);
  ctx.fillText('Internode', stemX + w * 0.2, h * 0.38);
  ctx.fillText('Leaf', stemX + w * 0.4, h * 0.16);
  if(process === 'transport') {
    ctx.fillStyle = '#88CCFF';
    ctx.fillText('H₂O / minerals ↑', w * 0.02, h * 0.92);
    ctx.fillStyle = '#FFBB88';
    ctx.fillText('Sugars ↓', w * 0.55, h * 0.92);
  }
}

static drawStemLongitudinal(ctx, w, h, process) {
  ctx.fillStyle = '#1A2A10';
  ctx.fillRect(0, 0, w, h);

  // Stem outline
  ctx.fillStyle = '#7AB840';
  ctx.strokeStyle = '#3A6810';
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.rect(w * 0.2, h * 0.05, w * 0.6, h * 0.9);
  ctx.fill();
  ctx.stroke();

  // Pith (center)
  ctx.fillStyle = '#E8D880';
  ctx.beginPath();
  ctx.rect(w * 0.38, h * 0.05, w * 0.24, h * 0.9);
  ctx.fill();

  // Vascular bundles (longitudinal)
  const bundleXs = [w*0.28, w*0.35, w*0.65, w*0.72];
  bundleXs.forEach(bx => {
    ctx.fillStyle = '#B04020';
    ctx.beginPath();
    ctx.rect(bx, h * 0.05, w * 0.025, h * 0.9);
    ctx.fill();
    ctx.fillStyle = '#E08050';
    ctx.beginPath();
    ctx.rect(bx - w * 0.015, h * 0.05, w * 0.015, h * 0.9);
    ctx.fill();
  });

  // Cortex
  ctx.fillStyle = 'rgba(100,160,60,0.4)';
  ctx.beginPath();
  ctx.rect(w * 0.2, h * 0.05, w * 0.08, h * 0.9);
  ctx.fill();
  ctx.beginPath();
  ctx.rect(w * 0.72, h * 0.05, w * 0.08, h * 0.9);
  ctx.fill();

  // Epidermis
  ctx.fillStyle = '#3A6010';
  ctx.fillRect(w * 0.2, h * 0.05, w * 0.015, h * 0.9);
  ctx.fillRect(w * 0.785, h * 0.05, w * 0.015, h * 0.9);

  // Node plates (horizontal bands)
  [0.3, 0.55, 0.75].forEach(ny => {
    ctx.fillStyle = 'rgba(50,100,20,0.5)';
    ctx.fillRect(w * 0.2, ny * h, w * 0.6, h * 0.025);
  });

  // Labels
  ctx.fillStyle = '#FFFFFF';
  ctx.font = `bold ${h * 0.05}px Arial`;
  ctx.fillText('Stem Longitudinal', w * 0.22, h * 0.04);
  ctx.font = `${h * 0.035}px Arial`;
  ctx.fillText('Epidermis', w * 0.01, h * 0.5);
  ctx.fillText('Cortex', w * 0.23, h * 0.96);
  ctx.fillText('Vascular bundle', w * 0.27, h * 0.96);
  ctx.fillStyle = '#FFE88A';
  ctx.fillText('Pith', w * 0.47, h * 0.5);
}

// ===== LEAF ARRANGEMENT =====
static drawLeafArrangement(ctx, x, y, width, height, pattern, process) {
  ctx.save();
  ctx.translate(x, y);

  switch(pattern) {
    case 'alternate':
      this.drawAlternateArrangement(ctx, width, height);
      break;
    case 'opposite':
      this.drawOppositeArrangement(ctx, width, height);
      break;
    case 'whorled':
      this.drawWhorledArrangement(ctx, width, height);
      break;
    case 'spiral':
      this.drawSpiralArrangement(ctx, width, height);
      break;
    case 'complete':
    default:
      this.drawCompleteLeafArrangement(ctx, width, height);
      break;
  }

  ctx.restore();
}

static drawCompleteLeafArrangement(ctx, w, h, process) {
  ctx.fillStyle = '#0A1A08';
  ctx.fillRect(0, 0, w, h);

  const drawStem = (cx, h2, stemH) => {
    ctx.fillStyle = '#6B8830';
    ctx.strokeStyle = '#3A5510';
    ctx.lineWidth = 1.5;
    ctx.beginPath();
    ctx.rect(cx - w*0.02, h2*0.08, w*0.04, stemH);
    ctx.fill(); ctx.stroke();
  };

  const drawLeaf = (cx, cy, side, scale = 1) => {
    ctx.fillStyle = '#7AB840';
    ctx.strokeStyle = '#3A6810';
    ctx.lineWidth = 1;
    ctx.save();
    ctx.translate(cx + side * w * 0.02, cy);
    ctx.scale(scale, scale);
    ctx.beginPath();
    ctx.moveTo(0, 0);
    ctx.bezierCurveTo(side*w*0.06, -h*0.025, side*w*0.12, -h*0.015, side*w*0.13, h*0.01);
    ctx.bezierCurveTo(side*w*0.1, h*0.03, side*w*0.04, h*0.025, 0, 0);
    ctx.fill(); ctx.stroke();
    ctx.restore();
  };

  // Alternate
  const ac = w * 0.18;
  drawStem(ac, h, h * 0.85);
  [{y:0.2,s:1},{y:0.35,s:-1},{y:0.5,s:1},{y:0.65,s:-1},{y:0.78,s:1}].forEach(l => {
    drawLeaf(ac, l.y*h, l.s);
  });
  ctx.fillStyle = '#FFFFFF';
  ctx.font = `bold ${h*0.05}px Arial`;
  ctx.textAlign = 'center';
  ctx.fillText('Alternate', ac, h*0.96);

  // Opposite
  const oc = w * 0.42;
  drawStem(oc, h, h * 0.85);
  [0.2, 0.38, 0.56, 0.72].forEach(ny => {
    drawLeaf(oc, ny*h, 1);
    drawLeaf(oc, ny*h, -1);
  });
  ctx.fillText('Opposite', oc, h*0.96);

  // Whorled
  const wc = w * 0.65;
  drawStem(wc, h, h * 0.85);
  [0.25, 0.48, 0.68].forEach(ny => {
    for(let i = 0; i < 3; i++) {
      const angle = (i / 3) * Math.PI * 2;
      ctx.fillStyle = '#7AB840';
      ctx.strokeStyle = '#3A6810';
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.moveTo(wc, ny*h);
      ctx.bezierCurveTo(
        wc + Math.cos(angle)*w*0.1, ny*h + Math.sin(angle)*h*0.04,
        wc + Math.cos(angle)*w*0.17, ny*h + Math.sin(angle)*h*0.02,
        wc + Math.cos(angle)*w*0.18, ny*h + Math.sin(angle)*h*0.0
      );
      ctx.bezierCurveTo(
        wc + Math.cos(angle)*w*0.14, ny*h - Math.sin(angle)*h*0.02,
        wc + Math.cos(angle)*w*0.06, ny*h - Math.sin(angle)*h*0.03,
        wc, ny*h
      );
      ctx.fill(); ctx.stroke();
    }
  });
  ctx.fillText('Whorled', wc, h*0.96);

  // Spiral / Fibonacci angle label
  const sc = w * 0.86;
  drawStem(sc, h, h * 0.85);
  for(let i = 0; i < 8; i++) {
    const angle = i * 2.399; // Golden angle
    const t = i / 7;
    const radius = w * 0.06;
    ctx.fillStyle = `hsl(${100 + i*15}, 60%, 45%)`;
    ctx.beginPath();
    ctx.moveTo(sc, (0.15 + t*0.72)*h);
    ctx.bezierCurveTo(
      sc + Math.cos(angle)*radius*0.8, (0.15+t*0.72)*h + Math.sin(angle)*h*0.025,
      sc + Math.cos(angle)*radius*1.2, (0.15+t*0.72)*h + Math.sin(angle)*h*0.01,
      sc + Math.cos(angle)*radius*1.3, (0.15+t*0.72)*h
    );
    ctx.bezierCurveTo(
      sc + Math.cos(angle)*radius*0.9, (0.15+t*0.72)*h - Math.sin(angle)*h*0.025,
      sc, (0.15+t*0.72)*h,
      sc, (0.15+t*0.72)*h
    );
    ctx.fill();
  }
  ctx.fillStyle = '#FFFFFF';
  ctx.fillText('Spiral', sc, h*0.96);
  ctx.font = `${h*0.032}px Arial`;
  ctx.fillText('(137.5°)', sc, h * 1.01);

  ctx.font = `bold ${h*0.05}px Arial`;
  ctx.fillText('Phyllotaxis — Leaf Arrangements', w*0.5, h*0.06);
  ctx.textAlign = 'left';
}

static drawAlternateArrangement(ctx, w, h) {
  ctx.fillStyle = '#0A1A08';
  ctx.fillRect(0, 0, w, h);
  const cx = w*0.5;
  ctx.fillStyle = '#6B8830';
  ctx.strokeStyle = '#3A5510';
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.rect(cx-w*0.03, h*0.05, w*0.06, h*0.9);
  ctx.fill(); ctx.stroke();
  [{y:0.15,s:1},{y:0.3,s:-1},{y:0.45,s:1},{y:0.6,s:-1},{y:0.75,s:1}].forEach(l => {
    ctx.fillStyle = '#7AB840';
    ctx.strokeStyle = '#3A6810';
    ctx.lineWidth = 1.5;
    ctx.beginPath();
    ctx.moveTo(cx + l.s*w*0.03, l.y*h);
    ctx.bezierCurveTo(cx+l.s*w*0.25,l.y*h-h*0.05,cx+l.s*w*0.4,l.y*h,cx+l.s*w*0.42,l.y*h+h*0.02);
    ctx.bezierCurveTo(cx+l.s*w*0.32,l.y*h+h*0.06,cx+l.s*w*0.1,l.y*h+h*0.04,cx+l.s*w*0.03,l.y*h);
    ctx.fill(); ctx.stroke();
  });
  ctx.fillStyle = '#FFFFFF';
  ctx.font = `bold ${h*0.06}px Arial`;
  ctx.textAlign = 'center';
  ctx.fillText('Alternate', cx, h*0.96);
  ctx.textAlign = 'left';
}

static drawOppositeArrangement(ctx, w, h) {
  ctx.fillStyle = '#0A1A08';
  ctx.fillRect(0, 0, w, h);
  const cx = w*0.5;
  ctx.fillStyle = '#6B8830';
  ctx.strokeStyle = '#3A5510';
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.rect(cx-w*0.03, h*0.05, w*0.06, h*0.9);
  ctx.fill(); ctx.stroke();
  [0.2, 0.4, 0.6, 0.78].forEach(ny => {
    [-1,1].forEach(s => {
      ctx.fillStyle = '#7AB840';
      ctx.strokeStyle = '#3A6810';
      ctx.lineWidth = 1.5;
      ctx.beginPath();
      ctx.moveTo(cx+s*w*0.03, ny*h);
      ctx.bezierCurveTo(cx+s*w*0.25,ny*h-h*0.04,cx+s*w*0.38,ny*h,cx+s*w*0.4,ny*h+h*0.02);
      ctx.bezierCurveTo(cx+s*w*0.3,ny*h+h*0.055,cx+s*w*0.1,ny*h+h*0.04,cx+s*w*0.03,ny*h);
      ctx.fill(); ctx.stroke();
    });
  });
  ctx.fillStyle = '#FFFFFF';
  ctx.font = `bold ${h*0.06}px Arial`;
  ctx.textAlign = 'center';
  ctx.fillText('Opposite', cx, h*0.96);
  ctx.textAlign = 'left';
}

static drawWhorledArrangement(ctx, w, h) {
  ctx.fillStyle = '#0A1A08';
  ctx.fillRect(0, 0, w, h);
  const cx = w*0.5;
  ctx.fillStyle = '#6B8830';
  ctx.strokeStyle = '#3A5510';
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.rect(cx-w*0.03, h*0.05, w*0.06, h*0.9);
  ctx.fill(); ctx.stroke();
  [0.25, 0.5, 0.75].forEach(ny => {
    for(let i=0; i<4; i++) {
      const angle = (i/4)*Math.PI*2;
      ctx.fillStyle = '#7AB840';
      ctx.strokeStyle = '#3A6810';
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.moveTo(cx, ny*h);
      ctx.bezierCurveTo(
        cx+Math.cos(angle)*w*0.14, ny*h+Math.sin(angle)*h*0.055,
        cx+Math.cos(angle)*w*0.25, ny*h+Math.sin(angle)*h*0.02,
        cx+Math.cos(angle)*w*0.26, ny*h
      );
      ctx.bezierCurveTo(
        cx+Math.cos(angle)*w*0.2, ny*h-Math.sin(angle)*h*0.04,
        cx+Math.cos(angle)*w*0.08, ny*h-Math.sin(angle)*h*0.04,
        cx, ny*h
      );
      ctx.fill(); ctx.stroke();
    }
  });
  ctx.fillStyle = '#FFFFFF';
  ctx.font = `bold ${h*0.06}px Arial`;
  ctx.textAlign = 'center';
  ctx.fillText('Whorled', cx, h*0.96);
  ctx.textAlign = 'left';
}

static drawSpiralArrangement(ctx, w, h) {
  ctx.fillStyle = '#0A1A08';
  ctx.fillRect(0, 0, w, h);
  const cx = w*0.5;
  ctx.fillStyle = '#6B8830';
  ctx.strokeStyle = '#3A5510';
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.rect(cx-w*0.03, h*0.08, w*0.06, h*0.86);
  ctx.fill(); ctx.stroke();
  for(let i=0; i<10; i++) {
    const angle = i*2.399;
    const t = i/9;
    ctx.fillStyle = `hsl(${90+i*20},65%,${35+i*2}%)`;
    ctx.beginPath();
    ctx.moveTo(cx, (0.12+t*0.76)*h);
    ctx.bezierCurveTo(
      cx+Math.cos(angle)*w*0.14, (0.12+t*0.76)*h+Math.sin(angle)*h*0.03,
      cx+Math.cos(angle)*w*0.26, (0.12+t*0.76)*h+Math.sin(angle)*h*0.01,
      cx+Math.cos(angle)*w*0.28, (0.12+t*0.76)*h
    );
    ctx.bezierCurveTo(
      cx+Math.cos(angle)*w*0.2, (0.12+t*0.76)*h-Math.sin(angle)*h*0.03,
      cx, (0.12+t*0.76)*h,
      cx, (0.12+t*0.76)*h
    );
    ctx.fill();
  }
  ctx.fillStyle = '#FFFFFF';
  ctx.font = `bold ${h*0.055}px Arial`;
  ctx.textAlign = 'center';
  ctx.fillText('Spiral (137.5°)', cx, h*0.96);
  ctx.font = `${h*0.04}px Arial`;
  ctx.fillText('Golden angle', cx, h*0.04);
  ctx.textAlign = 'left';
}

// ===== RESPIRATION COMPLETE =====
static drawRespirationComplete(ctx, x, y, width, height, stage, process) {
  ctx.save();
  ctx.translate(x, y);

  switch(stage) {
    case 'glycolysis':
      this.drawGlycolysis(ctx, 0, 0, width, height);
      break;
    case 'krebs':
      this.drawKrebsCycle(ctx, 0, 0, width, height);
      break;
    case 'etc':
      this.drawCellularRespirationETC(ctx, 0, 0, width, height);
      break;
    case 'overview':
    default:
      this.drawRespirationOverview(ctx, width, height, process);
      break;
  }

  ctx.restore();
}

static drawRespirationOverview(ctx, w, h, process) {
  ctx.fillStyle = '#0A0A1A';
  ctx.fillRect(0, 0, w, h);

  const drawBox = (bx, by, bw, bh, color, title, subtitle) => {
    ctx.fillStyle = color;
    ctx.strokeStyle = '#FFFFFF';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.roundRect(bx, by, bw, bh, w*0.02);
    ctx.fill(); ctx.stroke();
    ctx.fillStyle = '#FFFFFF';
    ctx.font = `bold ${h*0.045}px Arial`;
    ctx.textAlign = 'center';
    ctx.fillText(title, bx+bw*0.5, by+bh*0.38);
    ctx.font = `${h*0.033}px Arial`;
    ctx.fillStyle = 'rgba(255,255,255,0.8)';
    ctx.fillText(subtitle, bx+bw*0.5, by+bh*0.65);
    ctx.textAlign = 'left';
  };

  const drawArrow = (x1,y1,x2,y2,color='#FFFFFF') => {
    ctx.strokeStyle = color;
    ctx.fillStyle = color;
    ctx.lineWidth = 2.5;
    ctx.beginPath();
    ctx.moveTo(x1,y1); ctx.lineTo(x2,y2); ctx.stroke();
    const angle = Math.atan2(y2-y1,x2-x1);
    ctx.beginPath();
    ctx.moveTo(x2,y2);
    ctx.lineTo(x2-Math.cos(angle-0.4)*w*0.025,y2-Math.sin(angle-0.4)*w*0.025);
    ctx.lineTo(x2-Math.cos(angle+0.4)*w*0.025,y2-Math.sin(angle+0.4)*w*0.025);
    ctx.closePath(); ctx.fill();
  };

  const bw = w*0.28, bh = h*0.15;

  // Glucose input
  ctx.fillStyle = '#FFD700';
  ctx.font = `bold ${h*0.048}px Arial`;
  ctx.textAlign = 'center';
  ctx.fillText('Glucose (C₆H₁₂O₆)', w*0.5, h*0.07);
  ctx.textAlign = 'left';

  // Stage 1: Glycolysis (cytoplasm)
  drawBox(w*0.36, h*0.11, bw, bh, '#1A3A6A', 'Glycolysis', 'Cytoplasm');
  // Products
  ctx.fillStyle = '#88CCFF';
  ctx.font = `${h*0.033}px Arial`;
  ctx.textAlign = 'center';
  ctx.fillText('2 Pyruvate | 2 ATP (net) | 2 NADH', w*0.5, h*0.3);

  drawArrow(w*0.5, h*0.27, w*0.5, h*0.34);

  // Stage 2: Krebs Cycle
  drawBox(w*0.36, h*0.35, bw, bh, '#1A5A1A', 'Krebs Cycle', 'Mitochondria matrix');
  ctx.fillStyle = '#88FFAA';
  ctx.font = `${h*0.033}px Arial`;
  ctx.fillText('6 CO₂ | 2 ATP | 8 NADH | 2 FADH₂', w*0.5, h*0.54);
  ctx.textAlign = 'left';

  drawArrow(w*0.5, h*0.51, w*0.5, h*0.58);

  // Stage 3: ETC
  drawBox(w*0.36, h*0.59, bw, bh*1.1, '#3A1A5A', 'Electron Transport', 'Inner mitochondrial membrane');
  ctx.fillStyle = '#DDAAFF';
  ctx.font = `${h*0.033}px Arial`;
  ctx.textAlign = 'center';
  ctx.fillText('~32 ATP | H₂O', w*0.5, h*0.78);
  ctx.textAlign = 'left';

  // Reactant inputs (left side)
  const inputLabels = [
    {y:0.19, text:'O₂ →', color:'#FF8844'},
    {y:0.43, text:'O₂ →', color:'#FF8844'},
    {y:0.68, text:'O₂ →', color:'#FF8844'},
  ];
  ctx.font = `${h*0.038}px Arial`;
  inputLabels.forEach(il => {
    ctx.fillStyle = il.color;
    ctx.fillText(il.text, w*0.08, il.y*h);
  });

  // ATP tallies (right side)
  const atpLabels = [
    {y:0.19, text:'2 ATP'},
    {y:0.43, text:'2 ATP'},
    {y:0.7, text:'~32 ATP'},
  ];
  ctx.fillStyle = '#FFD700';
  atpLabels.forEach(al => {
    ctx.fillText(al.text, w*0.68, al.y*h);
  });

  // Total ATP
  ctx.fillStyle = '#FFD700';
  ctx.font = `bold ${h*0.05}px Arial`;
  ctx.textAlign = 'center';
  ctx.fillText('Total: ~36–38 ATP', w*0.5, h*0.96);
  ctx.textAlign = 'left';

  ctx.fillStyle = '#FFFFFF';
  ctx.font = `bold ${h*0.052}px Arial`;
  ctx.fillText('Aerobic Respiration Overview', w*0.18, h*0.05);
}

// ===== GLYCOLYSIS =====
static drawGlycolysis(ctx, x, y, width, height, process) {
  const ox = typeof x === 'object' ? 0 : x;
  const oy = typeof y === 'object' ? 0 : y;
  const w = typeof x === 'object' ? x : width;
  const h = typeof y === 'object' ? y : height;

  ctx.save();
  if(ox || oy) ctx.translate(ox, oy);

  ctx.fillStyle = '#0A0A1A';
  ctx.fillRect(0, 0, w, h);

  // Cytoplasm background
  ctx.fillStyle = 'rgba(30,50,100,0.3)';
  ctx.beginPath();
  ctx.roundRect(w*0.02, h*0.04, w*0.96, h*0.92, w*0.02);
  ctx.fill();
  ctx.strokeStyle = '#4466AA';
  ctx.lineWidth = 2;
  ctx.stroke();

  ctx.fillStyle = '#4466AA';
  ctx.font = `${h*0.038}px Arial`;
  ctx.fillText('Cytoplasm', w*0.04, h*0.095);

  const molecules = [
    {name:'Glucose', sub:'C₆H₁₂O₆', y:0.12, color:'#FFD700'},
    {name:'Glucose-6-P', sub:'', y:0.23, color:'#FFA500'},
    {name:'Fructose-6-P', sub:'', y:0.34, color:'#FF8C00'},
    {name:'Fructose-1,6-bisP', sub:'', y:0.45, color:'#FF6600'},
    {name:'2× G3P', sub:'(PGAL)', y:0.56, color:'#FF4500'},
    {name:'2× 3-Phosphoglycerate', sub:'', y:0.67, color:'#CC2200'},
    {name:'2× Pyruvate', sub:'C₃H₄O₃', y:0.82, color:'#AA0000'},
  ];

  molecules.forEach((m, i) => {
    // Box
    ctx.fillStyle = m.color;
    ctx.strokeStyle = 'rgba(255,255,255,0.4)';
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.roundRect(w*0.3, m.y*h, w*0.4, h*0.075, w*0.01);
    ctx.fill(); ctx.stroke();

    ctx.fillStyle = '#000000';
    ctx.font = `bold ${h*0.038}px Arial`;
    ctx.textAlign = 'center';
    ctx.fillText(m.name, w*0.5, m.y*h + h*0.045);
    if(m.sub) {
      ctx.font = `${h*0.03}px Arial`;
      ctx.fillText(m.sub, w*0.5, m.y*h + h*0.065);
    }
    ctx.textAlign = 'left';

    // Arrow to next
    if(i < molecules.length-1) {
      ctx.strokeStyle = '#FFFFFF';
      ctx.lineWidth = 1.5;
      ctx.beginPath();
      ctx.moveTo(w*0.5, (m.y+0.075)*h);
      ctx.lineTo(w*0.5, molecules[i+1].y*h);
      ctx.stroke();
      ctx.fillStyle = '#FFFFFF';
      ctx.beginPath();
      ctx.moveTo(w*0.5, molecules[i+1].y*h);
      ctx.lineTo(w*0.47, (molecules[i+1].y-0.018)*h);
      ctx.lineTo(w*0.53, (molecules[i+1].y-0.018)*h);
      ctx.closePath(); ctx.fill();
    }
  });

  // ATP consumed / produced annotations
  const annotations = [
    {y:0.175, text:'−1 ATP', color:'#FF6666', side:'left'},
    {y:0.395, text:'−1 ATP', color:'#FF6666', side:'left'},
    {y:0.615, text:'+2 ATP, +2 NADH', color:'#88FF88', side:'right'},
    {y:0.73, text:'+2 ATP', color:'#88FF88', side:'right'},
  ];
  annotations.forEach(an => {
    ctx.fillStyle = an.color;
    ctx.font = `${h*0.033}px Arial`;
    ctx.fillText(an.text, an.side==='left' ? w*0.04 : w*0.72, an.y*h);
  });

  ctx.fillStyle = '#FFFFFF';
  ctx.font = `bold ${h*0.052}px Arial`;
  ctx.textAlign = 'center';
  ctx.fillText('Glycolysis', w*0.5, h*0.05);
  ctx.font = `${h*0.036}px Arial`;
  ctx.fillText('Net: 2 ATP | 2 NADH | 2 Pyruvate', w*0.5, h*0.95);
  ctx.textAlign = 'left';

  ctx.restore();
}

// ===== KREBS CYCLE =====
static drawKrebsCycle(ctx, x, y, width, height, process) {
  const w = typeof x === 'object' ? x : width;
  const h = typeof y === 'object' ? y : height;
  const ox = typeof x === 'number' && width ? x : 0;
  const oy = typeof y === 'number' && height ? y : 0;

  ctx.save();
  if(ox || oy) ctx.translate(ox, oy);

  ctx.fillStyle = '#080A08';
  ctx.fillRect(0, 0, w, h);

  // Mitochondria matrix background
  ctx.fillStyle = 'rgba(20,50,20,0.4)';
  ctx.beginPath();
  ctx.ellipse(w*0.5, h*0.5, w*0.48, h*0.46, 0, 0, Math.PI*2);
  ctx.fill();
  ctx.strokeStyle = '#336633';
  ctx.lineWidth = 2;
  ctx.stroke();
  ctx.fillStyle = '#336633';
  ctx.font = `${h*0.033}px Arial`;
  ctx.fillText('Mitochondrial Matrix', w*0.3, h*0.06);

  const cx = w*0.5, cy = h*0.5;
  const r = w*0.28;

  const steps = [
    {name:'Acetyl-CoA\n(2C)', color:'#FFD700'},
    {name:'Citrate\n(6C)',    color:'#FFA500'},
    {name:'Isocitrate\n(6C)',  color:'#FF8C00'},
    {name:'α-Ketoglutarate\n(5C)', color:'#FF6600'},
    {name:'Succinyl-CoA\n(4C)', color:'#FF4500'},
    {name:'Succinate\n(4C)',  color:'#CC3300'},
    {name:'Fumarate\n(4C)',   color:'#AA2200'},
    {name:'Malate\n(4C)',     color:'#881100'},
    {name:'Oxaloacetate\n(4C)', color:'#660000'},
  ];

  // Draw cycle arrows
  ctx.strokeStyle = '#AAAAAA';
  ctx.lineWidth = 2.5;
  steps.forEach((s, i) => {
    const angle1 = ((i)/steps.length)*Math.PI*2 - Math.PI/2;
    const angle2 = ((i+1)/steps.length)*Math.PI*2 - Math.PI/2;
    const midAngle = (angle1+angle2)/2;
    ctx.beginPath();
    ctx.moveTo(cx+Math.cos(angle1)*r, cy+Math.sin(angle1)*r);
    ctx.quadraticCurveTo(cx+Math.cos(midAngle)*r*1.15, cy+Math.sin(midAngle)*r*1.15,
      cx+Math.cos(angle2)*r, cy+Math.sin(angle2)*r);
    ctx.stroke();
  });

  // Draw molecule boxes
  steps.forEach((s, i) => {
    const angle = (i/steps.length)*Math.PI*2 - Math.PI/2;
    const mx = cx + Math.cos(angle)*r;
    const my = cy + Math.sin(angle)*r;

    ctx.fillStyle = s.color;
    ctx.strokeStyle = 'rgba(255,255,255,0.3)';
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.roundRect(mx - w*0.075, my - h*0.04, w*0.15, h*0.07, w*0.01);
    ctx.fill(); ctx.stroke();

    ctx.fillStyle = '#000000';
    ctx.font = `bold ${h*0.028}px Arial`;
    ctx.textAlign = 'center';
    s.name.split('\n').forEach((line, li) => {
      ctx.fillText(line, mx, my - h*0.01 + li*h*0.028);
    });
    ctx.textAlign = 'left';
  });

  // Central outputs label
  ctx.fillStyle = '#FFFFFF';
  ctx.font = `bold ${h*0.04}px Arial`;
  ctx.textAlign = 'center';
  ctx.fillText('Per turn:', cx, cy - h*0.07);
  ctx.font = `${h*0.034}px Arial`;
  ctx.fillStyle = '#88FF88';
  ctx.fillText('3 NADH', cx, cy - h*0.02);
  ctx.fillStyle = '#FFAA44';
  ctx.fillText('1 FADH₂', cx, cy + h*0.03);
  ctx.fillStyle = '#FFD700';
  ctx.fillText('1 ATP', cx, cy + h*0.08);
  ctx.fillStyle = '#FF8888';
  ctx.fillText('2 CO₂', cx, cy + h*0.13);
  ctx.textAlign = 'left';

  // CO2 release arrows
  ctx.strokeStyle = '#FF8888';
  ctx.lineWidth = 1.5;
  ctx.setLineDash([3,3]);
  [[2,3],[3,4]].forEach(([from]) => {
    const angle = (from/steps.length)*Math.PI*2 - Math.PI/2;
    const mx = cx + Math.cos(angle)*r;
    const my = cy + Math.sin(angle)*r;
    ctx.beginPath();
    ctx.moveTo(mx, my);
    ctx.lineTo(mx + Math.cos(angle)*w*0.08, my + Math.sin(angle)*h*0.08);
    ctx.stroke();
    ctx.fillStyle = '#FF8888';
    ctx.font = `${h*0.03}px Arial`;
    ctx.fillText('CO₂', mx + Math.cos(angle)*w*0.09, my + Math.sin(angle)*h*0.09 + h*0.01);
  });
  ctx.setLineDash([]);

  ctx.fillStyle = '#FFFFFF';
  ctx.font = `bold ${h*0.05}px Arial`;
  ctx.textAlign = 'center';
  ctx.fillText('Krebs / Citric Acid Cycle', cx, h*0.04);
  ctx.textAlign = 'left';

  ctx.restore();
}

// ===== ETC =====
static drawCellularRespirationETC(ctx, x, y, width, height, process) {
  const w = typeof x === 'object' ? x : width;
  const h = typeof y === 'object' ? y : height;
  const ox = typeof x === 'number' && width ? x : 0;
  const oy = typeof y === 'number' && height ? y : 0;

  ctx.save();
  if(ox || oy) ctx.translate(ox, oy);

  ctx.fillStyle = '#08080A';
  ctx.fillRect(0, 0, w, h);

  // Inner mitochondrial membrane
  const memY = h * 0.52;
  const memThick = h * 0.06;

  ctx.fillStyle = '#3A1A5A';
  ctx.fillRect(0, memY, w, memThick);
  ctx.fillStyle = '#5A2A7A';
  ctx.font = `${h*0.033}px Arial`;
  ctx.fillText('Inner Mitochondrial Membrane', w*0.25, memY + memThick*0.65);

  // Matrix (below)
  ctx.fillStyle = 'rgba(20,50,20,0.3)';
  ctx.fillRect(0, memY + memThick, w, h - memY - memThick);
  ctx.fillStyle = '#336633';
  ctx.font = `${h*0.036}px Arial`;
  ctx.fillText('Matrix', w*0.02, h*0.88);

  // Intermembrane space (above membrane)
  ctx.fillStyle = 'rgba(30,30,80,0.3)';
  ctx.fillRect(0, h*0.25, w, memY - h*0.25);
  ctx.fillStyle = '#4444AA';
  ctx.font = `${h*0.033}px Arial`;
  ctx.fillText('Intermembrane Space', w*0.02, h*0.32);

  // Protein complexes
  const complexes = [
    {x:0.1, name:'Complex I', sub:'NADH\nDehydrogenase', color:'#4466CC'},
    {x:0.28, name:'Complex II', sub:'Succinate\nDehydrogenase', color:'#4488AA'},
    {x:0.46, name:'Complex III', sub:'Cytochrome\nbc1', color:'#6644AA'},
    {x:0.64, name:'Complex IV', sub:'Cytochrome\nc Oxidase', color:'#884488'},
    {x:0.82, name:'ATP Synthase', sub:'(Complex V)', color:'#AA6622'},
  ];

  complexes.forEach(c => {
    const cw = w*0.14, ch = h*0.2;
    ctx.fillStyle = c.color;
    ctx.strokeStyle = 'rgba(255,255,255,0.4)';
    ctx.lineWidth = 1.5;
    ctx.beginPath();
    ctx.roundRect(c.x*w, memY - ch*0.6, cw, ch + memThick, w*0.01);
    ctx.fill(); ctx.stroke();

    ctx.fillStyle = '#FFFFFF';
    ctx.font = `bold ${h*0.033}px Arial`;
    ctx.textAlign = 'center';
    ctx.fillText(c.name, (c.x + 0.07)*w, memY - ch*0.5 + h*0.04);
    ctx.font = `${h*0.026}px Arial`;
    c.sub.split('\n').forEach((line, li) => {
      ctx.fillText(line, (c.x + 0.07)*w, memY - ch*0.5 + h*0.09 + li*h*0.028);
    });
    ctx.textAlign = 'left';
  });

  // Electron carriers (NADH → Complexes)
  const drawElectron = (x1,y1,x2,y2,label,color='#FFDD44') => {
    ctx.strokeStyle = color;
    ctx.fillStyle = color;
    ctx.lineWidth = 2;
    ctx.setLineDash([4,3]);
    ctx.beginPath(); ctx.moveTo(x1*w,y1*h); ctx.lineTo(x2*w,y2*h); ctx.stroke();
    ctx.setLineDash([]);
    ctx.font = `${h*0.032}px Arial`;
    ctx.fillText(label, ((x1+x2)/2)*w, ((y1+y2)/2)*h);
  };

  // NADH → Complex I
  drawElectron(0.17, 0.2, 0.17, 0.38, 'NADH', '#88FFAA');
  // FADH2 → Complex II
  drawElectron(0.35, 0.2, 0.35, 0.38, 'FADH₂', '#FFAA44');
  // Ubiquinone (Q) between I/II and III
  ctx.fillStyle = '#FFDD44';
  ctx.beginPath();
  ctx.arc(w*0.37, memY - h*0.05, w*0.02, 0, Math.PI*2);
  ctx.fill();
  ctx.fillStyle = '#000000';
  ctx.font = `bold ${h*0.028}px Arial`;
  ctx.textAlign = 'center';
  ctx.fillText('Q', w*0.37, memY - h*0.04);
  ctx.textAlign = 'left';

  // Cytochrome c between III and IV
  ctx.fillStyle = '#FF6688';
  ctx.beginPath();
  ctx.arc(w*0.56, h*0.4, w*0.018, 0, Math.PI*2);
  ctx.fill();
  ctx.fillStyle = '#FFFFFF';
  ctx.font = `${h*0.026}px Arial`;
  ctx.textAlign = 'center';
  ctx.fillText('cyt c', w*0.56, h*0.395);
  ctx.textAlign = 'left';

  // Proton pumping arrows (H+ into intermembrane space)
  [0.17, 0.53, 0.71].forEach(px => {
    ctx.strokeStyle = '#FF8844';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(px*w, memY + memThick*0.5);
    ctx.lineTo(px*w, h*0.38);
    ctx.stroke();
    ctx.fillStyle = '#FF8844';
    ctx.font = `${h*0.032}px Arial`;
    ctx.fillText('H⁺', px*w + w*0.01, h*0.36);
  });

  // O2 + H+ → H2O at Complex IV
  ctx.strokeStyle = '#4488FF';
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.moveTo(w*0.71, h*0.65);
  ctx.lineTo(w*0.71, h*0.58);
  ctx.stroke();
  ctx.fillStyle = '#4488FF';
  ctx.font = `${h*0.032}px Arial`;
  ctx.fillText('O₂', w*0.67, h*0.67);
  ctx.fillText('H₂O', w*0.69, h*0.72);

  // ATP synthase — H+ flowing back
  ctx.strokeStyle = '#FFD700';
  ctx.lineWidth = 2.5;
  ctx.beginPath();
  ctx.moveTo(w*0.89, h*0.4);
  ctx.lineTo(w*0.89, memY + memThick);
  ctx.stroke();
  ctx.fillStyle = '#FFD700';
  ctx.font = `${h*0.036}px Arial`;
  ctx.textAlign = 'center';
  ctx.fillText('H⁺ ↓', w*0.91, h*0.45);
  ctx.fillText('ATP', w*0.89, h*0.82);
  ctx.textAlign = 'left';

  ctx.fillStyle = '#FFFFFF';
  ctx.font = `bold ${h*0.05}px Arial`;
  ctx.fillText('Electron Transport Chain', w*0.25, h*0.08);
  ctx.font = `${h*0.036}px Arial`;
  ctx.fillStyle = '#FFD700';
  ctx.fillText('~32 ATP produced', w*0.35, h*0.96);

  ctx.restore();
}

// ===== TRANSPIRATION STREAM =====
static drawTranspirationStream(ctx, x, y, width, height, detail, process) {
  ctx.save();
  ctx.translate(x, y);

  switch(detail) {
    case 'water-uptake':
      this.drawWaterUptake(ctx, 0, 0, width, height);
      break;
    case 'cohesion':
      this.drawCohesionTension(ctx, width, height, process);
      break;
    case 'complete':
    default:
      this.drawCompleteTranspirationStream(ctx, width, height, process);
      break;
  }

  ctx.restore();
}

static drawCompleteTranspirationStream(ctx, w, h, process) {
  ctx.fillStyle = '#0A1808';
  ctx.fillRect(0, 0, w, h);

  // Soil zone
  ctx.fillStyle = '#5A3E10';
  ctx.fillRect(0, h*0.82, w, h*0.18);
  ctx.fillStyle = '#7A5C14';
  ctx.font = `${h*0.038}px Arial`;
  ctx.fillText('Soil', w*0.02, h*0.9);

  // Stem / xylem column
  ctx.fillStyle = '#8B4513';
  ctx.strokeStyle = '#5A2A08';
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.rect(w*0.45, h*0.12, w*0.1, h*0.75);
  ctx.fill(); ctx.stroke();

  // Xylem vessels inside
  ctx.fillStyle = '#C8602A';
  ctx.beginPath();
  ctx.rect(w*0.47, h*0.12, w*0.06, h*0.75);
  ctx.fill();

  // Root hairs (bottom)
  ctx.strokeStyle = '#C8A050';
  ctx.lineWidth = 1.5;
  for(let i=0; i<6; i++) {
    const rx = w*(0.2 + i*0.1);
    ctx.beginPath();
    ctx.moveTo(rx, h*0.84);
    ctx.bezierCurveTo(rx-w*0.03, h*0.87, rx-w*0.05, h*0.9, rx-w*0.04, h*0.95);
    ctx.stroke();
  }

  // Water path arrows in xylem
  ctx.strokeStyle = '#4488FF';
  ctx.lineWidth = 2.5;
  ctx.setLineDash([6,4]);
  ctx.beginPath();
  ctx.moveTo(w*0.5, h*0.86);
  ctx.lineTo(w*0.5, h*0.14);
  ctx.stroke();
  ctx.setLineDash([]);
  // Arrow head
  ctx.fillStyle = '#4488FF';
  ctx.beginPath();
  ctx.moveTo(w*0.5, h*0.13);
  ctx.lineTo(w*0.46, h*0.19);
  ctx.lineTo(w*0.54, h*0.19);
  ctx.closePath(); ctx.fill();

  // Leaf at top
  ctx.fillStyle = '#7AB840';
  ctx.strokeStyle = '#3A6810';
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.moveTo(w*0.5, h*0.12);
  ctx.bezierCurveTo(w*0.2, h*0.05, w*0.05, h*0.1, w*0.08, h*0.18);
  ctx.bezierCurveTo(w*0.15, h*0.26, w*0.38, h*0.22, w*0.5, h*0.12);
  ctx.fill(); ctx.stroke();
  // Right leaf
  ctx.beginPath();
  ctx.moveTo(w*0.5, h*0.12);
  ctx.bezierCurveTo(w*0.8, h*0.05, w*0.95, h*0.1, w*0.92, h*0.18);
  ctx.bezierCurveTo(w*0.85, h*0.26, w*0.62, h*0.22, w*0.5, h*0.12);
  ctx.fill(); ctx.stroke();

  // Stomata water vapor arrows (evaporation)
  ctx.strokeStyle = '#87CEEB';
  ctx.lineWidth = 2;
  ctx.setLineDash([4,3]);
  [[0.2,0.18],[0.32,0.14],[0.68,0.14],[0.8,0.18]].forEach(([sx,sy]) => {
    ctx.beginPath();
    ctx.moveTo(sx*w, sy*h);
    ctx.lineTo(sx*w + w*0.01, (sy-0.06)*h);
    ctx.stroke();
  });
  ctx.setLineDash([]);

  // Labels
  ctx.fillStyle = '#FFFFFF';
  ctx.font = `bold ${h*0.052}px Arial`;
  ctx.fillText('Transpiration Stream', w*0.22, h*0.06);
  ctx.font = `${h*0.036}px Arial`;
  ctx.fillStyle = '#87CEEB';
  ctx.fillText('H₂O vapour out', w*0.65, h*0.04);
  ctx.fillStyle = '#4488FF';
  ctx.fillText('Xylem (H₂O up)', w*0.56, h*0.55);
  ctx.fillStyle = '#C8A050';
  ctx.fillText('Root hairs', w*0.02, h*0.79);
  ctx.fillStyle = '#CCFFAA';
  ctx.fillText('Cohesion–tension', w*0.02, h*0.48);
  ctx.fillText('mechanism', w*0.02, h*0.53);
}

// ===== WATER UPTAKE =====
static drawWaterUptake(ctx, x, y, width, height, process) {
  const w = typeof x === 'object' ? x : width;
  const h = typeof y === 'object' ? y : height;
  const ox = typeof x === 'number' && width ? x : 0;
  const oy = typeof y === 'number' && height ? y : 0;

  ctx.save();
  if(ox || oy) ctx.translate(ox, oy);

  ctx.fillStyle = '#0A1808';
  ctx.fillRect(0, 0, w, h);

  // Soil
  ctx.fillStyle = '#6B4A10';
  ctx.fillRect(0, h*0.7, w, h*0.3);

  // Root cross section (left = outside, right = inside)
  const layers = [
    {x:0.05, w:0.12, color:'#C8A050', label:'Epidermis\n+ Root hair'},
    {x:0.17, w:0.2,  color:'#A88840', label:'Cortex\n(Osmosis)'},
    {x:0.37, w:0.06, color:'#806830', label:'Endodermis\n(Casparian)'},
    {x:0.43, w:0.06, color:'#88A060', label:'Pericycle'},
    {x:0.49, w:0.14, color:'#6080A0', label:'Xylem'},
  ];

  layers.forEach(l => {
    ctx.fillStyle = l.color;
    ctx.strokeStyle = 'rgba(0,0,0,0.4)';
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.rect(l.x*w, h*0.15, l.w*w, h*0.6);
    ctx.fill(); ctx.stroke();

    ctx.fillStyle = '#FFFFFF';
    ctx.font = `${h*0.032}px Arial`;
    ctx.textAlign = 'center';
    l.label.split('\n').forEach((line, li) => {
      ctx.fillText(line, (l.x + l.w*0.5)*w, h*0.92 + li*h*0.04);
    });
    ctx.textAlign = 'left';
  });

  // Symplast path (through cells)
  ctx.strokeStyle = '#4488FF';
  ctx.lineWidth = 2.5;
  ctx.setLineDash([5,3]);
  ctx.beginPath();
  ctx.moveTo(w*0.08, h*0.42);
  ctx.bezierCurveTo(w*0.15,h*0.38, w*0.25,h*0.42, w*0.32,h*0.4);
  ctx.bezierCurveTo(w*0.38,h*0.38, w*0.44,h*0.42, w*0.5,h*0.4);
  ctx.bezierCurveTo(w*0.54,h*0.38, w*0.58,h*0.42, w*0.62,h*0.4);
  ctx.stroke();
  ctx.setLineDash([]);

  // Apoplast path (around cells)
  ctx.strokeStyle = '#88FF44';
  ctx.lineWidth = 2.5;
  ctx.setLineDash([5,3]);
  ctx.beginPath();
  ctx.moveTo(w*0.08, h*0.52);
  ctx.lineTo(w*0.37, h*0.52);
  // Blocked at Casparian
  ctx.stroke();
  ctx.setLineDash([]);

  // Casparian strip block
  ctx.strokeStyle = '#FF4444';
  ctx.lineWidth = 3;
  ctx.beginPath();
  ctx.moveTo(w*0.37, h*0.48);
  ctx.lineTo(w*0.37, h*0.58);
  ctx.stroke();
  ctx.fillStyle = '#FF4444';
  ctx.font = `bold ${h*0.033}px Arial`;
  ctx.fillText('✕', w*0.365, h*0.56);

  // Water molecules
  ctx.fillStyle = '#4488FF';
  [0.08,0.12,0.16].forEach(wx => {
    ctx.beginPath();
    ctx.arc(wx*w, h*0.75, w*0.015, 0, Math.PI*2);
    ctx.fill();
    ctx.fillStyle = '#FFFFFF';
    ctx.font = `${h*0.028}px Arial`;
    ctx.textAlign = 'center';
    ctx.fillText('H₂O', wx*w, h*0.81);
    ctx.fillStyle = '#4488FF';
    ctx.textAlign = 'left';
  });

  // Osmosis arrows
  ctx.strokeStyle = '#88CCFF';
  ctx.lineWidth = 2;
  for(let i=0; i<4; i++) {
    const ax = (0.1 + i*0.06)*w;
    ctx.beginPath();
    ctx.moveTo(ax, h*0.7);
    ctx.lineTo(ax + w*0.015, h*0.62);
    ctx.stroke();
  }

  ctx.fillStyle = '#FFFFFF';
  ctx.font = `bold ${h*0.052}px Arial`;
  ctx.fillText('Water Uptake', w*0.3, h*0.1);
  ctx.font = `${h*0.034}px Arial`;
  ctx.fillStyle = '#4488FF';
  ctx.fillText('Symplast ──', w*0.65, h*0.38);
  ctx.fillStyle = '#88FF44';
  ctx.fillText('Apoplast ──', w*0.65, h*0.5);
  ctx.fillStyle = '#FF8888';
  ctx.fillText('Casparian strip blocks', w*0.38, h*0.14);
  ctx.fillText('apoplast pathway', w*0.42, h*0.19);

  ctx.restore();
}

static drawCohesionTension(ctx, w, h, process) {
  ctx.fillStyle = '#0A1808';
  ctx.fillRect(0, 0, w, h);

  // Xylem tube
  ctx.fillStyle = '#8B4513';
  ctx.strokeStyle = '#5A2A08';
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.rect(w*0.4, h*0.1, w*0.2, h*0.8);
  ctx.fill(); ctx.stroke();

  // Water column
  ctx.fillStyle = '#3366FF';
  ctx.beginPath();
  ctx.rect(w*0.42, h*0.12, w*0.16, h*0.76);
  ctx.fill();

  // Water molecules in column
  for(let i=0; i<8; i++) {
    const wy = h*(0.15 + i*0.09);
    ctx.fillStyle = '#88AAFF';
    ctx.beginPath();
    ctx.arc(w*0.5, wy, w*0.025, 0, Math.PI*2);
    ctx.fill();
    ctx.strokeStyle = '#FFFFFF';
    ctx.lineWidth = 1;
    ctx.stroke();
    if(i < 7) {
      ctx.strokeStyle = '#AACCFF';
      ctx.lineWidth = 1.5;
      ctx.beginPath();
      ctx.moveTo(w*0.5, wy + w*0.025);
      ctx.lineTo(w*0.5, wy + w*0.065);
      ctx.stroke();
    }
  }

  // Tension arrow (upward pull)
  ctx.strokeStyle = '#FFD700';
  ctx.lineWidth = 3;
  ctx.beginPath();
  ctx.moveTo(w*0.5, h*0.88);
  ctx.lineTo(w*0.5, h*0.15);
  ctx.stroke();
  ctx.fillStyle = '#FFD700';
  ctx.beginPath();
  ctx.moveTo(w*0.5, h*0.13);
  ctx.lineTo(w*0.45, h*0.2);
  ctx.lineTo(w*0.55, h*0.2);
  ctx.closePath(); ctx.fill();

  ctx.fillStyle = '#FFFFFF';
  ctx.font = `bold ${h*0.05}px Arial`;
  ctx.textAlign = 'center';
  ctx.fillText('Cohesion–Tension', w*0.5, h*0.06);
  ctx.font = `${h*0.036}px Arial`;
  ctx.fillText('Pull from leaf', w*0.62, h*0.18);
  ctx.fillText('H-bonds (cohesion)', w*0.62, h*0.5);
  ctx.fillText('Adhesion to walls', w*0.62, h*0.75);
  ctx.textAlign = 'left';
}

// ===== PRESSURE FLOW =====
static drawPressureFlowComplete(ctx, x, y, width, height, detail, process) {
  ctx.save();
  ctx.translate(x, y);

  switch(detail) {
    case 'loading':
      this.drawPhloemLoading(ctx, width, height, process);
      break;
    case 'unloading':
      this.drawPhloemUnloading(ctx, width, height, process);
      break;
    case 'complete':
    default:
      this.drawPressureFlowOverview(ctx, width, height, process);
      break;
  }

  ctx.restore();
}

static drawPressureFlowOverview(ctx, w, h, process) {
  ctx.fillStyle = '#0A0A18';
  ctx.fillRect(0, 0, w, h);

  // Source (leaf - top)
  ctx.fillStyle = '#3A6820';
  ctx.strokeStyle = '#2A4810';
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.roundRect(w*0.1, h*0.04, w*0.35, h*0.18, w*0.02);
  ctx.fill(); ctx.stroke();
  ctx.fillStyle = '#FFFFFF';
  ctx.font = `bold ${h*0.045}px Arial`;
  ctx.textAlign = 'center';
  ctx.fillText('SOURCE (Leaf)', w*0.275, h*0.115);
  ctx.font = `${h*0.033}px Arial`;
  ctx.fillText('Sucrose loaded → HIGH ψ', w*0.275, h*0.17);
  ctx.textAlign = 'left';

  // Sink (root - bottom)
  ctx.fillStyle = '#6A3A10';
  ctx.strokeStyle = '#3A1808';
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.roundRect(w*0.55, h*0.78, w*0.35, h*0.18, w*0.02);
  ctx.fill(); ctx.stroke();
  ctx.fillStyle = '#FFFFFF';
  ctx.font = `bold ${h*0.045}px Arial`;
  ctx.textAlign = 'center';
  ctx.fillText('SINK (Root)', w*0.725, h*0.87);
  ctx.font = `${h*0.033}px Arial`;
  ctx.fillText('Sucrose unloaded → LOW ψ', w*0.725, h*0.92);
  ctx.textAlign = 'left';

  // Phloem tube (connecting source to sink)
  ctx.fillStyle = '#8B4513';
  ctx.strokeStyle = '#5A2808';
  ctx.lineWidth = 1.5;
  ctx.beginPath();
  ctx.moveTo(w*0.38, h*0.22);
  ctx.bezierCurveTo(w*0.38, h*0.45, w*0.62, h*0.55, w*0.62, h*0.78);
  ctx.lineTo(w*0.68, h*0.78);
  ctx.bezierCurveTo(w*0.68, h*0.55, w*0.44, h*0.45, w*0.44, h*0.22);
  ctx.closePath();
  ctx.fill(); ctx.stroke();

  // Xylem (parallel)
  ctx.fillStyle = '#4488AA';
  ctx.beginPath();
  ctx.rect(w*0.28, h*0.22, w*0.08, h*0.56);
  ctx.fill(); ctx.stroke();

  // Flow arrows (sugar down phloem)
  ctx.strokeStyle = '#FF8844';
  ctx.lineWidth = 2.5;
  ctx.setLineDash([6,4]);
  ctx.beginPath();
  ctx.moveTo(w*0.5, h*0.28);
  ctx.bezierCurveTo(w*0.5, h*0.5, w*0.55, h*0.6, w*0.55, h*0.76);
  ctx.stroke();
  ctx.setLineDash([]);
  ctx.fillStyle = '#FF8844';
  ctx.beginPath();
  ctx.moveTo(w*0.55, h*0.77);
  ctx.lineTo(w*0.51, h*0.7);
  ctx.lineTo(w*0.59, h*0.7);
  ctx.closePath(); ctx.fill();

  // Water recycling (xylem up)
  ctx.strokeStyle = '#4488FF';
  ctx.lineWidth = 2;
  ctx.setLineDash([5,3]);
  ctx.beginPath();
  ctx.moveTo(w*0.32, h*0.76);
  ctx.lineTo(w*0.32, h*0.24);
  ctx.stroke();
  ctx.setLineDash([]);
  ctx.fillStyle = '#4488FF';
  ctx.beginPath();
  ctx.moveTo(w*0.32, h*0.23);
  ctx.lineTo(w*0.28, h*0.3);
  ctx.lineTo(w*0.36, h*0.3);
  ctx.closePath(); ctx.fill();

  // Sucrose molecules (dots)
  ctx.fillStyle = '#FFD700';
  [[0.5,0.32],[0.5,0.45],[0.53,0.58],[0.54,0.68]].forEach(([sx,sy]) => {
    ctx.beginPath();
    ctx.arc(sx*w, sy*h, w*0.018, 0, Math.PI*2);
    ctx.fill();
  });

  ctx.fillStyle = '#FFFFFF';
  ctx.font = `bold ${h*0.052}px Arial`;
  ctx.fillText('Pressure Flow / Translocation', w*0.1, h*0.03);
  ctx.font = `${h*0.035}px Arial`;
  ctx.fillStyle = '#FF8844';
  ctx.fillText('Sugars in phloem ↓', w*0.62, h*0.52);
  ctx.fillStyle = '#4488FF';
  ctx.fillText('Water recycled ↑', w*0.02, h*0.52);
  ctx.fillStyle = '#8B4513';
  ctx.fillText('Phloem', w*0.38, h*0.5);
  ctx.fillStyle = '#4488AA';
  ctx.fillText('Xylem', w*0.29, h*0.82);
}

static drawPhloemLoading(ctx, w, h, process) {
  ctx.fillStyle = '#0A0A18';
  ctx.fillRect(0, 0, w, h);
  ctx.fillStyle = '#FFFFFF';
  ctx.font = `bold ${h*0.06}px Arial`;
  ctx.textAlign = 'center';
  ctx.fillText('Phloem Loading', w*0.5, h*0.08);
  ctx.textAlign = 'left';
  // Mesophyll cell
  ctx.fillStyle = '#3A6820';
  ctx.strokeStyle = '#2A4810';
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.roundRect(w*0.05, h*0.15, w*0.3, h*0.3, w*0.02);
  ctx.fill(); ctx.stroke();
  ctx.fillStyle = '#FFFFFF';
  ctx.font = `${h*0.038}px Arial`;
  ctx.textAlign = 'center';
  ctx.fillText('Mesophyll', w*0.2, h*0.32);
  ctx.textAlign = 'left';
  // Companion cell
  ctx.fillStyle = '#5A3A80';
  ctx.beginPath();
  ctx.roundRect(w*0.4, h*0.15, w*0.2, h*0.3, w*0.02);
  ctx.fill(); ctx.stroke();
  ctx.fillStyle = '#FFFFFF';
  ctx.textAlign = 'center';
  ctx.fillText('Companion', w*0.5, h*0.3);
  ctx.fillText('cell', w*0.5, h*0.36);
  ctx.textAlign = 'left';
  // Sieve tube
  ctx.fillStyle = '#8B4513';
  ctx.beginPath();
  ctx.roundRect(w*0.65, h*0.1, w*0.2, h*0.8, w*0.02);
  ctx.fill(); ctx.stroke();
  ctx.fillStyle = '#FFFFFF';
  ctx.textAlign = 'center';
  ctx.fillText('Sieve tube', w*0.75, h*0.5);
  ctx.textAlign = 'left';
  // Sucrose arrow
  ctx.strokeStyle = '#FFD700';
  ctx.lineWidth = 3;
  ctx.beginPath();
  ctx.moveTo(w*0.35, h*0.3);
  ctx.lineTo(w*0.4, h*0.3);
  ctx.stroke();
  ctx.fillStyle = '#FFD700';
  ctx.font = `${h*0.034}px Arial`;
  ctx.fillText('Sucrose →', w*0.25, h*0.1);
}

static drawPhloemUnloading(ctx, w, h, process) {
  ctx.fillStyle = '#0A0A18';
  ctx.fillRect(0, 0, w, h);
  ctx.fillStyle = '#FFFFFF';
  ctx.font = `bold ${h*0.06}px Arial`;
  ctx.textAlign = 'center';
  ctx.fillText('Phloem Unloading', w*0.5, h*0.08);
  ctx.textAlign = 'left';
  // Sieve tube
  ctx.fillStyle = '#8B4513';
  ctx.beginPath();
  ctx.roundRect(w*0.15, h*0.1, w*0.2, h*0.8, w*0.02);
  ctx.fill(); ctx.stroke();
  ctx.fillStyle = '#FFFFFF';
  ctx.textAlign = 'center';
  ctx.fillText('Sieve tube', w*0.25, h*0.5);
  ctx.textAlign = 'left';
  // Sink cell
  ctx.fillStyle = '#6A3A10';
  ctx.beginPath();
  ctx.roundRect(w*0.5, h*0.15, w*0.35, h*0.3, w*0.02);
  ctx.fill(); ctx.stroke();
  ctx.fillStyle = '#FFFFFF';
  ctx.textAlign = 'center';
  ctx.fillText('Sink cell', w*0.675, h*0.3);
  ctx.textAlign = 'left';
  // Arrow
  ctx.strokeStyle = '#FFD700';
  ctx.lineWidth = 3;
  ctx.beginPath();
  ctx.moveTo(w*0.35, h*0.3);
  ctx.lineTo(w*0.5, h*0.3);
  ctx.stroke();
  ctx.fillStyle = '#FFD700';
  ctx.font = `${h*0.034}px Arial`;
  ctx.fillText('→ Sucrose unloaded', w*0.5, h*0.55);
}

// ===== FLOWER TO FRUIT SEQUENCE =====
static drawFlowerToFruitSequence(ctx, x, y, width, height, stage, process) {
  ctx.save();
  ctx.translate(x, y);

  switch(stage) {
    case 'pollination':
      this.drawPollinationStage(ctx, width, height);
      break;
    case 'fertilization':
      this.drawFertilizationStage(ctx, width, height);
      break;
    case 'fruit-development':
      this.drawFruitDevelopmentStage(ctx, width, height);
      break;
    case 'complete':
    default:
      this.drawCompleteFlowerFruitSequence(ctx, width, height, process);
      break;
  }

  ctx.restore();
}

static drawCompleteFlowerFruitSequence(ctx, w, h, process) {
  ctx.fillStyle = '#0A0A18';
  ctx.fillRect(0, 0, w, h);

  const stages = [
    {x:0.08, label:'1. Flower', sub:'Open & ready', color:'#CC4488'},
    {x:0.3,  label:'2. Pollination', sub:'Pollen transfer', color:'#CCAA22'},
    {x:0.52, label:'3. Fertilization', sub:'Double fertilization', color:'#4488CC'},
    {x:0.74, label:'4. Fruit/Seed', sub:'Ovary → fruit', color:'#44AA44'},
  ];

  stages.forEach((s, i) => {
    const cx = (s.x + 0.1)*w, cy = h*0.45;
    const r = w*0.085;

    // Circle
    ctx.fillStyle = s.color;
    ctx.strokeStyle = 'rgba(255,255,255,0.5)';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.arc(cx, cy, r, 0, Math.PI*2);
    ctx.fill(); ctx.stroke();

    // Simple icon
    ctx.fillStyle = 'rgba(255,255,255,0.9)';
    ctx.font = `${h*0.065}px Arial`;
    ctx.textAlign = 'center';
    const icons = ['🌸','🌼','🔬','🍎'];
    ctx.fillText(icons[i], cx, cy + h*0.025);

    // Label
    ctx.fillStyle = '#FFFFFF';
    ctx.font = `bold ${h*0.04}px Arial`;
    ctx.fillText(s.label, cx, cy + r + h*0.07);
    ctx.font = `${h*0.032}px Arial`;
    ctx.fillStyle = 'rgba(255,255,255,0.7)';
    ctx.fillText(s.sub, cx, cy + r + h*0.115);
    ctx.textAlign = 'left';

    // Arrow to next
    if(i < stages.length - 1) {
      const nextCx = (stages[i+1].x + 0.1)*w;
      ctx.strokeStyle = '#FFFFFF';
      ctx.lineWidth = 2.5;
      ctx.beginPath();
      ctx.moveTo(cx + r, cy);
      ctx.lineTo(nextCx - r, cy);
      ctx.stroke();
      ctx.fillStyle = '#FFFFFF';
      ctx.beginPath();
      ctx.moveTo(nextCx - r, cy);
      ctx.lineTo(nextCx - r - w*0.02, cy - h*0.02);
      ctx.lineTo(nextCx - r - w*0.02, cy + h*0.02);
      ctx.closePath(); ctx.fill();
    }
  });

  // Detail boxes below
  const details = [
    'Sepals, petals,\nstamens, pistil',
    'Wind / insects\ncarry pollen',
    'Pollen tube grows\nto ovule',
    'Seed + fruit wall\ndevelop',
  ];
  stages.forEach((s, i) => {
    const cx = (s.x + 0.1)*w;
    ctx.fillStyle = 'rgba(255,255,255,0.1)';
    ctx.strokeStyle = 'rgba(255,255,255,0.2)';
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.roundRect(cx - w*0.09, h*0.72, w*0.18, h*0.2, w*0.01);
    ctx.fill(); ctx.stroke();
    ctx.fillStyle = 'rgba(255,255,255,0.8)';
    ctx.font = `${h*0.033}px Arial`;
    ctx.textAlign = 'center';
    details[i].split('\n').forEach((line, li) => {
      ctx.fillText(line, cx, h*0.78 + li*h*0.05);
    });
    ctx.textAlign = 'left';
  });

  ctx.fillStyle = '#FFFFFF';
  ctx.font = `bold ${h*0.052}px Arial`;
  ctx.textAlign = 'center';
  ctx.fillText('Flower → Fruit Development Sequence', w*0.5, h*0.07);
  ctx.textAlign = 'left';
}

static drawPollinationStage(ctx, w, h) {
  ctx.fillStyle = '#0A0A18';
  ctx.fillRect(0, 0, w, h);
  ctx.fillStyle = '#FFFFFF';
  ctx.font = `bold ${h*0.06}px Arial`;
  ctx.textAlign = 'center';
  ctx.fillText('Pollination', w*0.5, h*0.08);
  ctx.textAlign = 'left';
  // Stigma (target flower)
  ctx.fillStyle = '#CC4488';
  ctx.beginPath();
  ctx.arc(w*0.7, h*0.5, w*0.1, 0, Math.PI*2);
  ctx.fill();
  ctx.fillStyle = '#FFFFFF';
  ctx.textAlign = 'center';
  ctx.fillText('Stigma', w*0.7, h*0.54);
  // Anther (source)
  ctx.fillStyle = '#CCAA22';
  ctx.beginPath();
  ctx.arc(w*0.3, h*0.4, w*0.08, 0, Math.PI*2);
  ctx.fill();
  ctx.fillText('Anther', w*0.3, h*0.44);
  // Pollen grain dots
  ctx.fillStyle = '#FFD700';
  [[0.42,0.42],[0.52,0.38],[0.58,0.44]].forEach(([px,py]) => {
    ctx.beginPath();
    ctx.arc(px*w, py*h, w*0.02, 0, Math.PI*2);
    ctx.fill();
  });
  ctx.strokeStyle = '#FFD700';
  ctx.lineWidth = 1.5;
  ctx.setLineDash([4,3]);
  ctx.beginPath();
  ctx.moveTo(w*0.38, h*0.4);
  ctx.bezierCurveTo(w*0.55, h*0.35, w*0.62, h*0.42, w*0.6, h*0.5);
  ctx.stroke();
  ctx.setLineDash([]);
  ctx.textAlign = 'left';
}

static drawFertilizationStage(ctx, w, h) {
  ctx.fillStyle = '#0A0A18';
  ctx.fillRect(0, 0, w, h);
  ctx.fillStyle = '#FFFFFF';
  ctx.font = `bold ${h*0.06}px Arial`;
  ctx.textAlign = 'center';
  ctx.fillText('Double Fertilization', w*0.5, h*0.08);
  // Style
  ctx.strokeStyle = '#CC4488';
  ctx.lineWidth = 4;
  ctx.beginPath();
  ctx.moveTo(w*0.5, h*0.15);
  ctx.lineTo(w*0.5, h*0.65);
  ctx.stroke();
  // Pollen tube
  ctx.strokeStyle = '#FFD700';
  ctx.lineWidth = 2.5;
  ctx.beginPath();
  ctx.moveTo(w*0.5, h*0.2);
  ctx.lineTo(w*0.5, h*0.7);
  ctx.stroke();
  // Ovule
  ctx.fillStyle = '#4488CC';
  ctx.beginPath();
  ctx.ellipse(w*0.5, h*0.78, w*0.12, h*0.1, 0, 0, Math.PI*2);
  ctx.fill();
  ctx.fillStyle = '#FFFFFF';
  ctx.fillText('Ovule', w*0.5, h*0.82);
  ctx.font = `${h*0.035}px Arial`;
  ctx.fillText('Sperm 1 + Egg → Zygote', w*0.5, h*0.55);
  ctx.fillText('Sperm 2 + Polar nuclei → Endosperm', w*0.5, h*0.61);
  ctx.textAlign = 'left';
}

static drawFruitDevelopmentStage(ctx, w, h) {
  ctx.fillStyle = '#0A0A18';
  ctx.fillRect(0, 0, w, h);
  ctx.fillStyle = '#FFFFFF';
  ctx.font = `bold ${h*0.06}px Arial`;
  ctx.textAlign = 'center';
  ctx.fillText('Fruit Development', w*0.5, h*0.08);
  ctx.textAlign = 'left';
  const stages = [{x:0.15,r:0.05,c:'#CC4488',l:'Ovary'},{x:0.38,r:0.07,c:'#AA6622',l:'Young\nfruit'},{x:0.62,r:0.1,c:'#44AA44',l:'Mature\nfruit'},{x:0.85,r:0.08,c:'#AA4400',l:'Ripe\nfruit'}];
  stages.forEach(s => {
    ctx.fillStyle = s.c;
    ctx.beginPath();
    ctx.arc(s.x*w, h*0.5, s.r*w, 0, Math.PI*2);
    ctx.fill();
    ctx.fillStyle = '#FFFFFF';
    ctx.font = `${h*0.035}px Arial`;
    ctx.textAlign = 'center';
    s.l.split('\n').forEach((line,li) => ctx.fillText(line, s.x*w, h*0.7+li*h*0.05));
    ctx.textAlign = 'left';
  });
}

// ===== FRUIT TYPES =====
static drawFruitTypes(ctx, x, y, width, height, type, process) {
  ctx.save();
  ctx.translate(x, y);

  switch(type) {
    case 'drupe':
      this.drawDrupe(ctx, width, height);
      break;
    case 'berry':
      this.drawBerry(ctx, width, height);
      break;
    case 'achene':
      this.drawAchene(ctx, width, height);
      break;
    case 'capsule':
      this.drawCapsule(ctx, width, height);
      break;
    case 'complete':
    default:
      this.drawCompleteFruitTypes(ctx, width, height, process);
      break;
  }

  ctx.restore();
}

static drawCompleteFruitTypes(ctx, w, h, process) {
  ctx.fillStyle = '#0A0A18';
  ctx.fillRect(0, 0, w, h);

  ctx.fillStyle = '#FFFFFF';
  ctx.font = `bold ${h*0.055}px Arial`;
  ctx.textAlign = 'center';
  ctx.fillText('Fruit Types', w*0.5, h*0.07);
  ctx.textAlign = 'left';

  const panelW = w*0.22, panelH = h*0.75;
  const panels = [
    {x:0.02, type:'drupe',   label:'Drupe',   sub:'Fleshy, one seed\ne.g. cherry, peach'},
    {x:0.26, type:'berry',   label:'Berry',   sub:'Many seeds\ne.g. tomato, grape'},
    {x:0.5,  type:'achene',  label:'Achene',  sub:'Dry, one seed\ne.g. sunflower'},
    {x:0.74, type:'capsule', label:'Capsule', sub:'Dry, splits open\ne.g. poppy'},
  ];

  panels.forEach(p => {
    ctx.fillStyle = 'rgba(255,255,255,0.05)';
    ctx.strokeStyle = 'rgba(255,255,255,0.2)';
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.roundRect(p.x*w, h*0.1, panelW, panelH, w*0.01);
    ctx.fill(); ctx.stroke();

    // Draw the fruit
    const cx = (p.x + 0.11)*w, cy = h*0.45;
    if(p.type === 'drupe') {
      // Outer flesh
      ctx.fillStyle = '#CC3366';
      ctx.beginPath();
      ctx.arc(cx, cy, w*0.09, 0, Math.PI*2);
      ctx.fill();
      // Mesocarp
      ctx.fillStyle = '#FF6699';
      ctx.beginPath();
      ctx.arc(cx, cy, w*0.07, 0, Math.PI*2);
      ctx.fill();
      // Endocarp (stone)
      ctx.fillStyle = '#AA5522';
      ctx.beginPath();
      ctx.arc(cx, cy, w*0.04, 0, Math.PI*2);
      ctx.fill();
      // Seed
      ctx.fillStyle = '#CCAA44';
      ctx.beginPath();
      ctx.arc(cx, cy, w*0.02, 0, Math.PI*2);
      ctx.fill();
    } else if(p.type === 'berry') {
      ctx.fillStyle = '#884400';
      ctx.beginPath();
      ctx.arc(cx, cy, w*0.09, 0, Math.PI*2);
      ctx.fill();
      ctx.fillStyle = '#FF6633';
      ctx.beginPath();
      ctx.arc(cx, cy, w*0.08, 0, Math.PI*2);
      ctx.fill();
      // Seeds
      ctx.fillStyle = '#FFDD44';
      [[0,0],[0.04,0.04],[-0.04,0.03],[0.03,-0.05],[-0.03,-0.04]].forEach(([dx,dy]) => {
        ctx.beginPath();
        ctx.arc(cx+dx*w, cy+dy*h, w*0.013, 0, Math.PI*2);
        ctx.fill();
      });
    } else if(p.type === 'achene') {
      ctx.fillStyle = '#8B7355';
      ctx.beginPath();
      ctx.ellipse(cx, cy, w*0.04, h*0.1, 0, 0, Math.PI*2);
      ctx.fill();
      // Pappus (feathery top)
      ctx.strokeStyle = '#CCCCCC';
      ctx.lineWidth = 1;
      for(let i=0; i<5; i++) {
        const angle = -Math.PI*0.5 + (i-2)*0.3;
        ctx.beginPath();
        ctx.moveTo(cx, cy - h*0.1);
        ctx.lineTo(cx + Math.cos(angle)*w*0.06, cy - h*0.1 - Math.sin(Math.abs(angle))*h*0.07);
        ctx.stroke();
      }
    } else if(p.type === 'capsule') {
      // Closed capsule
      ctx.fillStyle = '#8B7355';
      ctx.strokeStyle = '#5A4A28';
      ctx.lineWidth = 1.5;
      ctx.beginPath();
      ctx.ellipse(cx, cy, w*0.06, h*0.12, 0, 0, Math.PI*2);
      ctx.fill(); ctx.stroke();
      // Split lines
      ctx.strokeStyle = '#3A2A10';
      ctx.lineWidth = 1;
      for(let i=0; i<4; i++) {
        const angle = (i/4)*Math.PI*2;
        ctx.beginPath();
        ctx.moveTo(cx, cy - h*0.12);
        ctx.lineTo(cx + Math.cos(angle)*w*0.025, cy + Math.sin(angle)*h*0.12);
        ctx.stroke();
      }
      // Seeds spilling
      ctx.fillStyle = '#CCAA44';
      [[0.08,0],[0.06,0.06],[0.1,0.04]].forEach(([dx,dy]) => {
        ctx.beginPath();
        ctx.arc(cx+dx*w, cy+dy*h, w*0.01, 0, Math.PI*2);
        ctx.fill();
      });
    }

    // Labels
    ctx.fillStyle = '#FFFFFF';
    ctx.font = `bold ${h*0.04}px Arial`;
    ctx.textAlign = 'center';
    ctx.fillText(p.label, (p.x + 0.11)*w, h*0.77);
    ctx.font = `${h*0.03}px Arial`;
    ctx.fillStyle = 'rgba(255,255,255,0.7)';
    p.sub.split('\n').forEach((line, li) => {
      ctx.fillText(line, (p.x + 0.11)*w, h*0.82 + li*h*0.04);
    });
    ctx.textAlign = 'left';
  });
}

static drawDrupe(ctx, w, h) {
  ctx.fillStyle = '#0A0A18';
  ctx.fillRect(0, 0, w, h);
  const cx = w*0.5, cy = h*0.48;
  // Exocarp
  ctx.fillStyle = '#CC3366';
  ctx.beginPath(); ctx.arc(cx, cy, w*0.38, 0, Math.PI*2); ctx.fill();
  // Mesocarp
  ctx.fillStyle = '#FF6699';
  ctx.beginPath(); ctx.arc(cx, cy, w*0.32, 0, Math.PI*2); ctx.fill();
  // Endocarp (stone)
  ctx.fillStyle = '#AA5522';
  ctx.strokeStyle = '#7A3A10';
  ctx.lineWidth = 2;
  ctx.beginPath(); ctx.arc(cx, cy, w*0.18, 0, Math.PI*2); ctx.fill(); ctx.stroke();
  // Seed
  ctx.fillStyle = '#CCAA44';
  ctx.beginPath(); ctx.ellipse(cx, cy, w*0.1, h*0.13, 0, 0, Math.PI*2); ctx.fill();
  // Labels
  ctx.fillStyle = '#FFFFFF';
  ctx.font = `bold ${h*0.055}px Arial`;
  ctx.textAlign = 'center';
  ctx.fillText('Drupe (e.g. Cherry)', cx, h*0.08);
  ctx.font = `${h*0.038}px Arial`;
  ctx.fillText('Exocarp (skin)', cx + w*0.3, cy - h*0.2);
  ctx.fillText('Mesocarp (flesh)', cx + w*0.28, cy);
  ctx.fillText('Endocarp (stone)', cx + w*0.1, cy + h*0.22);
  ctx.fillText('Seed', cx, cy + h*0.17);
  ctx.textAlign = 'left';
}

static drawBerry(ctx, w, h) {
  ctx.fillStyle = '#0A0A18';
  ctx.fillRect(0, 0, w, h);
  const cx = w*0.5, cy = h*0.48;
  ctx.fillStyle = '#FF6633';
  ctx.beginPath(); ctx.arc(cx, cy, w*0.38, 0, Math.PI*2); ctx.fill();
  ctx.fillStyle = '#FF8855';
  ctx.beginPath(); ctx.arc(cx, cy, w*0.34, 0, Math.PI*2); ctx.fill();
  const seedPos = [{x:0,y:0},{x:0.12,y:0.1},{x:-0.1,y:0.08},{x:0.08,y:-0.14},{x:-0.08,y:-0.12},{x:0.16,y:-0.05},{x:-0.14,y:0.04}];
  ctx.fillStyle = '#FFEEAA';
  ctx.strokeStyle = '#AA8822';
  ctx.lineWidth = 1;
  seedPos.forEach(s => {
    ctx.beginPath();
    ctx.ellipse(cx+s.x*w, cy+s.y*h, w*0.035, h*0.045, 0.3, 0, Math.PI*2);
    ctx.fill(); ctx.stroke();
  });
  ctx.fillStyle = '#FFFFFF';
  ctx.font = `bold ${h*0.055}px Arial`;
  ctx.textAlign = 'center';
  ctx.fillText('Berry (e.g. Tomato)', cx, h*0.08);
  ctx.font = `${h*0.038}px Arial`;
  ctx.fillText('Pericarp (fleshy)', cx, h*0.9);
  ctx.fillText('Many seeds', cx, h*0.95);
  ctx.textAlign = 'left';
}

static drawAchene(ctx, w, h) {
  ctx.fillStyle = '#0A0A18';
  ctx.fillRect(0, 0, w, h);
  const cx = w*0.5, cy = h*0.55;
  ctx.fillStyle = '#8B7355';
  ctx.strokeStyle = '#5A4A28';
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.ellipse(cx, cy, w*0.08, h*0.22, 0, 0, Math.PI*2);
  ctx.fill(); ctx.stroke();
  ctx.fillStyle = '#CCAA44';
  ctx.beginPath();
  ctx.ellipse(cx, cy, w*0.055, h*0.18, 0, 0, Math.PI*2);
  ctx.fill();
  // Pappus
  ctx.strokeStyle = '#CCCCCC';
  ctx.lineWidth = 1;
  for(let i=0; i<8; i++) {
    const angle = -Math.PI*0.5 + (i-3.5)*0.28;
    ctx.beginPath();
    ctx.moveTo(cx, cy - h*0.22);
    ctx.lineTo(cx + Math.cos(angle)*w*0.18, cy - h*0.22 - Math.sin(Math.abs(angle - Math.PI*0.5)*0.5)*h*0.18);
    ctx.stroke();
  }
  ctx.fillStyle = '#FFFFFF';
  ctx.font = `bold ${h*0.055}px Arial`;
  ctx.textAlign = 'center';
  ctx.fillText('Achene (e.g. Sunflower)', cx, h*0.08);
  ctx.font = `${h*0.038}px Arial`;
  ctx.fillText('Pappus (parachute)', cx, h*0.18);
  ctx.fillText('Pericarp (dry wall)', cx, h*0.82);
  ctx.fillText('Single seed', cx, h*0.88);
  ctx.textAlign = 'left';
}

static drawCapsule(ctx, w, h) {
  ctx.fillStyle = '#0A0A18';
  ctx.fillRect(0, 0, w, h);
  const cx = w*0.5, cy = h*0.48;
  const valves = 5;
  for(let i=0; i<valves; i++) {
    const angle = (i/valves)*Math.PI*2 - Math.PI*0.1*(i%2?1:-1)*0.5;
    ctx.fillStyle = `hsl(35,50%,${30+i*4}%)`;
    ctx.strokeStyle = '#3A2A10';
    ctx.lineWidth = 1.5;
    ctx.beginPath();
    ctx.moveTo(cx, cy);
    ctx.arc(cx, cy, w*0.3, angle - Math.PI/valves, angle + Math.PI/valves);
    ctx.closePath();
    ctx.fill(); ctx.stroke();
  }
  // Seeds spilling
  ctx.fillStyle = '#CCAA44';
  for(let i=0; i<10; i++) {
    const angle = (i/10)*Math.PI*2;
    const r = 0.32 + (i%3)*0.04;
    ctx.beginPath();
    ctx.arc(cx + Math.cos(angle)*r*w, cy + Math.sin(angle)*r*h*0.8, w*0.018, 0, Math.PI*2);
    ctx.fill();
  }
  ctx.fillStyle = '#FFFFFF';
  ctx.font = `bold ${h*0.055}px Arial`;
  ctx.textAlign = 'center';
  ctx.fillText('Capsule (e.g. Poppy)', cx, h*0.08);
  ctx.font = `${h*0.038}px Arial`;
  ctx.fillText('Splits open (dehiscent)', cx, h*0.9);
  ctx.fillText('Many seeds released', cx, h*0.95);
  ctx.textAlign = 'left';
}

// ===== SEED DISPERSAL =====
static drawSeedDispersal(ctx, x, y, width, height, mechanism, process) {
  ctx.save();
  ctx.translate(x, y);

  switch(mechanism) {
    case 'wind':
      this.drawWindDispersal(ctx, width, height);
      break;
    case 'water':
      this.drawWaterDispersal(ctx, width, height);
      break;
    case 'animal':
      this.drawAnimalDispersal(ctx, width, height);
      break;
    case 'explosive':
      this.drawExplosiveDispersal(ctx, width, height);
      break;
    case 'complete':
    default:
      this.drawCompleteSeedDispersal(ctx, width, height, process);
      break;
  }

  ctx.restore();
}

static drawCompleteSeedDispersal(ctx, w, h, process) {
  ctx.fillStyle = '#050A18';
  ctx.fillRect(0, 0, w, h);

  ctx.fillStyle = '#FFFFFF';
  ctx.font = `bold ${h*0.055}px Arial`;
  ctx.textAlign = 'center';
  ctx.fillText('Seed Dispersal Mechanisms', w*0.5, h*0.07);
  ctx.textAlign = 'left';

  const panelW = w*0.22, panelH = h*0.72;
  const mechanisms = [
    {x:0.02, label:'Wind',     sub:'Lightweight structures\nfor flight', color:'#4488AA'},
    {x:0.26, label:'Water',    sub:'Buoyant, waterproof\ncoating',       color:'#3366CC'},
    {x:0.5,  label:'Animal',   sub:'Hooks, fleshy fruit\nor burial',     color:'#AA6633'},
    {x:0.74, label:'Explosive', sub:'Tension release\n(dehiscence)',     color:'#CC4422'},
  ];

  mechanisms.forEach((m, mi) => {
    const pcx = (m.x + 0.11)*w;
    ctx.fillStyle = 'rgba(255,255,255,0.05)';
    ctx.strokeStyle = `rgba(255,255,255,0.2)`;
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.roundRect(m.x*w, h*0.1, panelW, panelH, w*0.01);
    ctx.fill(); ctx.stroke();

    // Illustrations
    if(mi === 0) {
      // Wind - dandelion
      ctx.strokeStyle = '#CCCCCC';
      ctx.lineWidth = 1;
      for(let i=0; i<8; i++) {
        const angle = (i/8)*Math.PI*2;
        ctx.beginPath();
        ctx.moveTo(pcx, h*0.42);
        ctx.lineTo(pcx + Math.cos(angle)*w*0.08, h*0.42 + Math.sin(angle)*h*0.1);
        ctx.stroke();
        ctx.fillStyle = '#DDDDDD';
        ctx.beginPath();
        ctx.arc(pcx + Math.cos(angle)*w*0.085, h*0.42 + Math.sin(angle)*h*0.105, w*0.012, 0, Math.PI*2);
        ctx.fill();
      }
      // Flying seed
      ctx.strokeStyle = '#AAAAAA';
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.moveTo(w*0.16, h*0.25);
      for(let i=0; i<5; i++) ctx.lineTo(w*(0.16+i*0.01)+Math.cos(i)*w*0.01, h*(0.25-i*0.025));
      ctx.stroke();
      // Wind arrows
      ctx.strokeStyle = '#88CCFF';
      ctx.lineWidth = 1.5;
      [0.15,0.2,0.25].forEach(ay => {
        ctx.beginPath();
        ctx.moveTo(pcx-w*0.12, ay*h);
        ctx.lineTo(pcx+w*0.12, ay*h);
        ctx.stroke();
      });
    } else if(mi === 1) {
      // Water - coconut
      ctx.fillStyle = '#8B6020';
      ctx.beginPath();
      ctx.ellipse(pcx, h*0.42, w*0.07, h*0.1, 0, 0, Math.PI*2);
      ctx.fill();
      // Waves
      ctx.strokeStyle = '#4488FF';
      ctx.lineWidth = 2;
      [0.58,0.64,0.7].forEach(wy => {
        ctx.beginPath();
        for(let i=0; i<8; i++) {
          const wx = (m.x + i/7*0.22)*w;
          if(i===0) ctx.moveTo(wx, wy*h);
          else ctx.bezierCurveTo(wx-w*0.015, (wy-0.015)*h, wx-w*0.01, (wy+0.015)*h, wx, wy*h);
        }
        ctx.stroke();
      });
    } else if(mi === 2) {
      // Animal - hooked seed
      ctx.fillStyle = '#8B7355';
      ctx.strokeStyle = '#5A4A28';
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.ellipse(pcx, h*0.42, w*0.05, h*0.08, 0, 0, Math.PI*2);
      ctx.fill(); ctx.stroke();
      // Hooks
      for(let i=0; i<6; i++) {
        const angle = (i/6)*Math.PI*2;
        ctx.strokeStyle = '#5A4A28';
        ctx.lineWidth = 1.5;
        ctx.beginPath();
        ctx.moveTo(pcx+Math.cos(angle)*w*0.055, h*0.42+Math.sin(angle)*h*0.09);
        ctx.bezierCurveTo(
          pcx+Math.cos(angle)*w*0.08, h*0.42+Math.sin(angle)*h*0.1,
          pcx+Math.cos(angle+0.5)*w*0.08, h*0.42+Math.sin(angle+0.5)*h*0.1,
          pcx+Math.cos(angle+0.5)*w*0.065, h*0.42+Math.sin(angle+0.5)*h*0.08
        );
        ctx.stroke();
      }
    } else if(mi === 3) {
      // Explosive - pod opening
      ctx.fillStyle = '#4A7020';
      ctx.strokeStyle = '#2A4A10';
      ctx.lineWidth = 1.5;
      // Two pod halves
      ctx.beginPath();
      ctx.moveTo(pcx, h*0.32);
      ctx.bezierCurveTo(pcx-w*0.08, h*0.38, pcx-w*0.08, h*0.52, pcx, h*0.58);
      ctx.bezierCurveTo(pcx-w*0.02, h*0.52, pcx-w*0.02, h*0.38, pcx, h*0.32);
      ctx.fill(); ctx.stroke();
      ctx.beginPath();
      ctx.moveTo(pcx, h*0.32);
      ctx.bezierCurveTo(pcx+w*0.08, h*0.38, pcx+w*0.08, h*0.52, pcx, h*0.58);
      ctx.bezierCurveTo(pcx+w*0.02, h*0.52, pcx+w*0.02, h*0.38, pcx, h*0.32);
      ctx.fill(); ctx.stroke();
      // Seeds flying
      ctx.fillStyle = '#CCAA44';
      [[0.06,0.35],[-0.08,0.28],[0.1,0.22],[-0.12,0.18]].forEach(([dx,dy]) => {
        ctx.beginPath();
        ctx.arc(pcx+dx*w, dy*h, w*0.015, 0, Math.PI*2);
        ctx.fill();
        ctx.strokeStyle = '#AA8822';
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(pcx+dx*w*0.3, (dy+0.05)*h);
        ctx.lineTo(pcx+dx*w, dy*h);
        ctx.stroke();
      });
    }

    ctx.fillStyle = '#FFFFFF';
    ctx.font = `bold ${h*0.042}px Arial`;
    ctx.textAlign = 'center';
    ctx.fillText(m.label, pcx, h*0.82);
    ctx.font = `${h*0.03}px Arial`;
    ctx.fillStyle = 'rgba(255,255,255,0.7)';
    m.sub.split('\n').forEach((line, li) => {
      ctx.fillText(line, pcx, h*0.87 + li*h*0.04);
    });
    ctx.textAlign = 'left';
  });
}

static drawWindDispersal(ctx, w, h) {
  ctx.fillStyle = '#050A18';
  ctx.fillRect(0, 0, w, h);
  ctx.fillStyle = '#FFFFFF';
  ctx.font = `bold ${h*0.055}px Arial`;
  ctx.textAlign = 'center';
  // Wind arrows
  ctx.strokeStyle = '#88CCFF';
  ctx.lineWidth = 3;
  [0.3,0.5,0.7].forEach(ay => {
    ctx.beginPath();
    ctx.moveTo(w*0.05, ay*h);
    ctx.bezierCurveTo(w*0.3,(ay-0.05)*h,w*0.6,(ay+0.05)*h,w*0.95,ay*h);
    ctx.stroke();
  });
  // Dandelion parachute seeds
  [[0.5,0.4],[0.75,0.3],[0.85,0.55]].forEach(([sx,sy]) => {
    ctx.strokeStyle = '#CCCCCC';
    ctx.lineWidth = 1;
    for(let i=0; i<7; i++) {
      const angle = -Math.PI*0.6 + (i/6)*Math.PI*1.2;
      ctx.beginPath();
      ctx.moveTo(sx*w, sy*h);
      ctx.lineTo(sx*w + Math.cos(angle)*w*0.07, sy*h + Math.sin(angle)*h*0.09);
      ctx.stroke();
      ctx.fillStyle = '#EEEEEE';
      ctx.beginPath();
      ctx.arc(sx*w + Math.cos(angle)*w*0.075, sy*h + Math.sin(angle)*h*0.095, w*0.01, 0, Math.PI*2);
      ctx.fill();
    }
  });
  // Maple samara
  ctx.fillStyle = '#8B7355';
  ctx.beginPath();
  ctx.ellipse(w*0.25, h*0.55, w*0.025, h*0.04, 0.5, 0, Math.PI*2);
  ctx.fill();
  ctx.fillStyle = '#AABB88';
  ctx.beginPath();
  ctx.ellipse(w*0.22, h*0.5, w*0.08, h*0.025, -0.3, 0, Math.PI*2);
  ctx.fill();
  ctx.fillStyle = '#FFFFFF';
  ctx.fillText('Wind Dispersal', w*0.5, h*0.1);
  ctx.font = `${h*0.038}px Arial`;
  ctx.fillText('Pappus (dandelion)', w*0.3, h*0.9);
  ctx.fillText('Wing (maple samara)', w*0.02, h*0.7);
  ctx.textAlign = 'left';
}

static drawWaterDispersal(ctx, w, h) {
  ctx.fillStyle = '#050A18';
  ctx.fillRect(0, 0, w, h);
  // Water surface
  const waterY = h*0.55;
  ctx.fillStyle = '#1A3A6A';
  ctx.fillRect(0, waterY, w, h - waterY);
  ctx.strokeStyle = '#4488FF';
  ctx.lineWidth = 2;
  for(let i=0; i<5; i++) {
    ctx.beginPath();
    ctx.moveTo(i*w*0.25, waterY);
    ctx.bezierCurveTo((i+0.25)*w*0.25, waterY-h*0.02, (i+0.5)*w*0.25, waterY+h*0.02, (i+1)*w*0.25, waterY);
    ctx.stroke();
  }
  // Coconut
  ctx.fillStyle = '#8B6020';
  ctx.beginPath();
  ctx.ellipse(w*0.35, waterY - h*0.08, w*0.1, h*0.13, 0, 0, Math.PI*2);
  ctx.fill();
  ctx.fillStyle = '#C8A040';
  ctx.beginPath();
  ctx.ellipse(w*0.35, waterY - h*0.08, w*0.08, h*0.11, 0, 0, Math.PI*2);
  ctx.fill();
  // Water lily seed pod
  ctx.fillStyle = '#4A7820';
  ctx.beginPath();
  ctx.arc(w*0.7, waterY - h*0.04, w*0.06, 0, Math.PI*2);
  ctx.fill();
  // Motion arrows
  ctx.strokeStyle = '#88CCFF';
  ctx.lineWidth = 2;
  ctx.setLineDash([5,3]);
  ctx.beginPath();
  ctx.moveTo(w*0.1, waterY + h*0.1);
  ctx.lineTo(w*0.9, waterY + h*0.1);
  ctx.stroke();
  ctx.setLineDash([]);
  ctx.fillStyle = '#FFFFFF';
  ctx.font = `bold ${h*0.055}px Arial`;
  ctx.textAlign = 'center';
  ctx.fillText('Water Dispersal', w*0.5, h*0.1);
  ctx.font = `${h*0.038}px Arial`;
  ctx.fillText('Buoyant fruit/seed', w*0.5, h*0.3);
  ctx.textAlign = 'left';
}

static drawAnimalDispersal(ctx, w, h) {
  ctx.fillStyle = '#050A18';
  ctx.fillRect(0, 0, w, h);
  // Hooked seeds (burdock)
  ctx.fillStyle = '#8B7355';
  ctx.beginPath();
  ctx.arc(w*0.3, h*0.45, w*0.1, 0, Math.PI*2);
  ctx.fill();
  for(let i=0; i<12; i++) {
    const angle = (i/12)*Math.PI*2;
    ctx.strokeStyle = '#5A4A28';
    ctx.lineWidth = 1.5;
    ctx.beginPath();
    ctx.moveTo(w*0.3 + Math.cos(angle)*w*0.1, h*0.45 + Math.sin(angle)*h*0.1);
    ctx.bezierCurveTo(
      w*0.3 + Math.cos(angle)*w*0.14, h*0.45 + Math.sin(angle)*h*0.14,
      w*0.3 + Math.cos(angle+0.4)*w*0.14, h*0.45 + Math.sin(angle+0.4)*h*0.14,
      w*0.3 + Math.cos(angle+0.4)*w*0.1, h*0.45 + Math.sin(angle+0.4)*h*0.1
    );
    ctx.stroke();
  }
  // Fleshy fruit
  ctx.fillStyle = '#CC4422';
  ctx.beginPath();
  ctx.arc(w*0.65, h*0.4, w*0.1, 0, Math.PI*2);
  ctx.fill();
  ctx.fillStyle = '#FFEEAA';
  ctx.beginPath();
  ctx.arc(w*0.65, h*0.4, w*0.025, 0, Math.PI*2);
  ctx.fill();
  // Bird outline
  ctx.strokeStyle = '#AAAAAA';
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.arc(w*0.75, h*0.22, w*0.04, 0, Math.PI*2);
  ctx.stroke();
  ctx.beginPath();
  ctx.moveTo(w*0.79, h*0.23);
  ctx.bezierCurveTo(w*0.9, h*0.2, w*0.95, h*0.28, w*0.88, h*0.3);
  ctx.stroke();
  ctx.fillStyle = '#FFFFFF';
  ctx.font = `bold ${h*0.055}px Arial`;
  ctx.textAlign = 'center';
  ctx.fillText('Animal Dispersal', w*0.5, h*0.1);
  ctx.font = `${h*0.038}px Arial`;
  ctx.fillText('Hooks attach to fur/feathers', w*0.5, h*0.78);
  ctx.fillText('Fleshy fruit eaten, seed excreted', w*0.5, h*0.83);
  ctx.textAlign = 'left';
}

static drawExplosiveDispersal(ctx, w, h) {
  ctx.fillStyle = '#050A18';
  ctx.fillRect(0, 0, w, h);
  const cx = w*0.5, cy = h*0.55;
  // Pod halves spiralling
  ctx.fillStyle = '#4A7020';
  ctx.strokeStyle = '#2A4A10';
  ctx.lineWidth = 2;
  ctx.save();
  ctx.translate(cx - w*0.08, cy);
  ctx.rotate(-0.5);
  ctx.beginPath();
  ctx.ellipse(0, 0, w*0.04, h*0.14, 0, 0, Math.PI*2);
  ctx.fill(); ctx.stroke();
  ctx.restore();
  ctx.save();
  ctx.translate(cx + w*0.08, cy);
  ctx.rotate(0.5);
  ctx.beginPath();
  ctx.ellipse(0, 0, w*0.04, h*0.14, 0, 0, Math.PI*2);
  ctx.fill(); ctx.stroke();
  ctx.restore();
  // Seeds flying out
  ctx.fillStyle = '#CCAA44';
  const seedTrajectories = [
    {x:0.25,y:0.2,vx:-0.06,vy:-0.18},
    {x:0.4,y:0.22,vx:0,vy:-0.2},
    {x:0.6,y:0.25,vx:0.08,vy:-0.16},
    {x:0.75,y:0.3,vx:0.14,vy:-0.1},
    {x:0.2,y:0.35,vx:-0.14,vy:-0.05},
    {x:0.78,y:0.42,vx:0.16,vy:0.02},
  ];
  seedTrajectories.forEach(s => {
    ctx.beginPath();
    ctx.arc(s.x*w, s.y*h, w*0.016, 0, Math.PI*2);
    ctx.fill();
    // Trajectory line
    ctx.strokeStyle = '#AA8822';
    ctx.lineWidth = 1;
    ctx.setLineDash([3,2]);
    ctx.beginPath();
    ctx.moveTo(cx, cy);
    ctx.lineTo(s.x*w, s.y*h);
    ctx.stroke();
    ctx.setLineDash([]);
  });
  ctx.fillStyle = '#FFFFFF';
  ctx.font = `bold ${h*0.055}px Arial`;
  ctx.textAlign = 'center';
  ctx.fillText('Explosive Dispersal', w*0.5, h*0.1);
  ctx.font = `${h*0.038}px Arial`;
  ctx.fillText('Tension in pod wall', w*0.5, h*0.88);
  ctx.fillText('Springs open — ejects seeds', w*0.5, h*0.93);
  ctx.textAlign = 'left';
}

// ===== ASEXUAL REPRODUCTION =====
static drawAsexualReproduction(ctx, x, y, width, height, method, process) {
  ctx.save();
  ctx.translate(x, y);

  switch(method) {
    case 'runners':
      this.drawRunners(ctx, width, height);
      break;
    case 'bulbs':
      this.drawBulbs(ctx, width, height);
      break;
    case 'rhizomes':
      this.drawRhizomes(ctx, width, height);
      break;
    case 'cuttings':
      this.drawCuttings(ctx, width, height);
      break;
    case 'complete':
    default:
      this.drawCompleteAsexualReproduction(ctx, width, height, process);
      break;
  }

  ctx.restore();
}

static drawCompleteAsexualReproduction(ctx, w, h, process) {
  ctx.fillStyle = '#050A08';
  ctx.fillRect(0, 0, w, h);

  ctx.fillStyle = '#FFFFFF';
  ctx.font = `bold ${h*0.055}px Arial`;
  ctx.textAlign = 'center';
  ctx.fillText('Vegetative Propagation', w*0.5, h*0.06);
  ctx.textAlign = 'left';

  // Soil line
  ctx.fillStyle = '#6B4A10';
  ctx.fillRect(0, h*0.62, w, h*0.38);
  ctx.strokeStyle = '#8B6A20';
  ctx.lineWidth = 2;
  ctx.beginPath(); ctx.moveTo(0,h*0.62); ctx.lineTo(w,h*0.62); ctx.stroke();

  // 1. Stolons/Runners (top left)
  ctx.fillStyle = '#4A7820';
  ctx.strokeStyle = '#2A5010';
  ctx.lineWidth = 2;
  // Parent plant
  ctx.beginPath();
  ctx.arc(w*0.12, h*0.5, w*0.04, 0, Math.PI*2);
  ctx.fill();
  // Runner
  ctx.strokeStyle = '#6B9830';
  ctx.lineWidth = 3;
  ctx.beginPath();
  ctx.moveTo(w*0.16, h*0.52);
  ctx.bezierCurveTo(w*0.22,h*0.56, w*0.26,h*0.54, w*0.3, h*0.52);
  ctx.stroke();
  // New plant
  ctx.fillStyle = '#4A7820';
  ctx.beginPath();
  ctx.arc(w*0.3, h*0.5, w*0.03, 0, Math.PI*2);
  ctx.fill();
  ctx.strokeStyle = '#4A7820';
  ctx.lineWidth = 1.5;
  ctx.beginPath(); ctx.moveTo(w*0.3, h*0.47); ctx.lineTo(w*0.28, h*0.39); ctx.stroke();
  ctx.beginPath(); ctx.moveTo(w*0.3, h*0.47); ctx.lineTo(w*0.32, h*0.39); ctx.stroke();
  ctx.fillStyle = '#FFFFFF';
  ctx.font = `bold ${h*0.04}px Arial`;
  ctx.textAlign = 'center';
  ctx.fillText('Stolons/Runners', w*0.21, h*0.1);
  ctx.font = `${h*0.031}px Arial`;
  ctx.fillStyle = 'rgba(255,255,255,0.7)';
  ctx.fillText('(strawberry)', w*0.21, h*0.145);

  // 2. Bulbs (center-left)
  const bcx = w*0.5, bcy = h*0.72;
  // Bulb scales
  for(let i=0; i<4; i++) {
    ctx.fillStyle = `hsl(40, ${40+i*10}%, ${35-i*3}%)`;
    ctx.strokeStyle = '#5A3A10';
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.ellipse(bcx, bcy - i*h*0.02, w*(0.07-i*0.01), h*(0.1-i*0.015), 0, 0, Math.PI*2);
    ctx.fill(); ctx.stroke();
  }
  // Shoot from top
  ctx.strokeStyle = '#4A7820';
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.moveTo(bcx, bcy-h*0.1);
  ctx.lineTo(bcx, bcy-h*0.22);
  ctx.stroke();
  // Leaf from shoot
  ctx.fillStyle = '#7AB840';
  ctx.beginPath();
  ctx.moveTo(bcx, bcy-h*0.18);
  ctx.bezierCurveTo(bcx+w*0.08,bcy-h*0.22,bcx+w*0.1,bcy-h*0.3,bcx+w*0.04,bcy-h*0.32);
  ctx.bezierCurveTo(bcx,bcy-h*0.28,bcx,bcy-h*0.2,bcx,bcy-h*0.18);
  ctx.fill();
  // Roots
  ctx.strokeStyle = '#C8A050';
  ctx.lineWidth = 1.5;
  [[-0.03,0.04],[0,0.05],[0.03,0.04],[-0.02,0.06],[0.02,0.06]].forEach(([dx,dy]) => {
    ctx.beginPath();
    ctx.moveTo(bcx+dx*w, bcy+h*0.08);
    ctx.bezierCurveTo(bcx+dx*w*0.8,bcy+h*(0.1+dy),bcx+dx*w*1.5,bcy+h*(0.12+dy),bcx+dx*w*2,bcy+h*(0.11+dy));
    ctx.stroke();
  });
  ctx.fillStyle = '#FFFFFF';
  ctx.font = `bold ${h*0.04}px Arial`;
  ctx.textAlign = 'center';
  ctx.fillText('Bulbs', bcx, h*0.1);
  ctx.font = `${h*0.031}px Arial`;
  ctx.fillStyle = 'rgba(255,255,255,0.7)';
  ctx.fillText('(onion, tulip)', bcx, h*0.145);

  // 3. Rhizomes (top right)
  const rcx = w*0.78;
  ctx.strokeStyle = '#C8A050';
  ctx.lineWidth = 8;
  ctx.lineCap = 'round';
  ctx.beginPath();
  ctx.moveTo(rcx - w*0.12, h*0.65);
  ctx.bezierCurveTo(rcx-w*0.08,h*0.68,rcx,h*0.67,rcx+w*0.02,h*0.65);
  ctx.bezierCurveTo(rcx+w*0.04,h*0.63,rcx+w*0.12,h*0.65,rcx+w*0.12,h*0.68);
  ctx.stroke();
  ctx.lineCap = 'butt';
  // Shoots from nodes
  ctx.strokeStyle = '#4A7820';
  ctx.lineWidth = 2;
  [[rcx-w*0.08,h*0.65],[rcx+w*0.02,h*0.65],[rcx+w*0.1,h*0.66]].forEach(([sx,sy]) => {
    ctx.beginPath();
    ctx.moveTo(sx, sy);
    ctx.lineTo(sx + w*0.01, h*0.5);
    ctx.stroke();
    ctx.fillStyle = '#7AB840';
    ctx.beginPath();
    ctx.moveTo(sx, h*0.53);
    ctx.bezierCurveTo(sx+w*0.05,h*0.49,sx+w*0.07,h*0.5,sx+w*0.06,h*0.54);
    ctx.bezierCurveTo(sx+w*0.03,h*0.56,sx,h*0.55,sx,h*0.53);
    ctx.fill();
  });
  ctx.fillStyle = '#FFFFFF';
  ctx.font = `bold ${h*0.04}px Arial`;
  ctx.textAlign = 'center';
  ctx.fillText('Rhizomes', rcx, h*0.1);
  ctx.font = `${h*0.031}px Arial`;
  ctx.fillStyle = 'rgba(255,255,255,0.7)';
  ctx.fillText('(ginger, iris)', rcx, h*0.145);
  ctx.textAlign = 'left';

  // Soil texture
  ctx.fillStyle = '#7A5C14';
  for(let i=0; i<20; i++) {
    const px = (i*0.137) % 1 * w;
    const py = h*0.65 + (i*0.073%1)*h*0.3;
    ctx.beginPath();
    ctx.arc(px, py, w*0.007, 0, Math.PI*2);
    ctx.fill();
  }
}

static drawRunners(ctx, w, h) {
  ctx.fillStyle = '#050A08';
  ctx.fillRect(0, 0, w, h);
  ctx.fillStyle = '#6B4A10';
  ctx.fillRect(0, h*0.6, w, h*0.4);
  ctx.strokeStyle = '#8B6A20';
  ctx.lineWidth = 1.5;
  ctx.beginPath(); ctx.moveTo(0,h*0.6); ctx.lineTo(w,h*0.6); ctx.stroke();
  const drawPlant = (px, py, size) => {
    ctx.fillStyle = '#4A7820';
    ctx.beginPath(); ctx.arc(px, py, size*w*0.04, 0, Math.PI*2); ctx.fill();
    for(let i=0; i<3; i++) {
      const angle = -Math.PI*0.5 + (i-1)*0.6;
      ctx.strokeStyle = '#4A7820';
      ctx.lineWidth = 1.5;
      ctx.beginPath(); ctx.moveTo(px, py - size*w*0.04);
      ctx.lineTo(px + Math.cos(angle)*size*w*0.1, py + Math.sin(angle)*size*h*0.12);
      ctx.stroke();
      ctx.fillStyle = '#7AB840';
      ctx.beginPath();
      ctx.ellipse(px + Math.cos(angle)*size*w*0.1, py + Math.sin(angle)*size*h*0.12, size*w*0.04, size*h*0.06, angle, 0, Math.PI*2);
      ctx.fill();
    }
    // Roots
    ctx.strokeStyle = '#C8A050';
    ctx.lineWidth = 1;
    for(let i=-1; i<=1; i++) {
      ctx.beginPath(); ctx.moveTo(px + i*size*w*0.02, py+size*w*0.04); ctx.lineTo(px+i*size*w*0.03, py+size*h*0.12); ctx.stroke();
    }
  };
  drawPlant(w*0.15, h*0.52, 1.2);
  drawPlant(w*0.45, h*0.54, 0.9);
  drawPlant(w*0.75, h*0.52, 1.0);
  // Runners
  ctx.strokeStyle = '#6B9830';
  ctx.lineWidth = 3;
  ctx.beginPath();
  ctx.moveTo(w*0.19, h*0.58); ctx.bezierCurveTo(w*0.28,h*0.65,w*0.36,h*0.63,w*0.41,h*0.58); ctx.stroke();
  ctx.beginPath();
  ctx.moveTo(w*0.49, h*0.58); ctx.bezierCurveTo(w*0.58,h*0.65,w*0.66,h*0.63,w*0.71,h*0.58); ctx.stroke();
  ctx.fillStyle = '#FFFFFF';
  ctx.font = `bold ${h*0.06}px Arial`;
  ctx.textAlign = 'center';
  ctx.fillText('Stolons / Runners', w*0.5, h*0.1);
  ctx.font = `${h*0.038}px Arial`;
  ctx.fillText('(e.g. Strawberry)', w*0.5, h*0.17);
  ctx.textAlign = 'left';
}

static drawBulbs(ctx, w, h) {
  ctx.fillStyle = '#050A08';
  ctx.fillRect(0, 0, w, h);
  ctx.fillStyle = '#6B4A10';
  ctx.fillRect(0, h*0.6, w, h*0.4);
  ctx.strokeStyle = '#8B6A20';
  ctx.lineWidth = 1.5;
  ctx.beginPath(); ctx.moveTo(0,h*0.6); ctx.lineTo(w,h*0.6); ctx.stroke();
  // Main bulb
  for(let i=0; i<5; i++) {
    ctx.fillStyle = `hsl(40,${35+i*8}%,${42-i*4}%)`;
    ctx.strokeStyle = '#5A3A10';
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.ellipse(w*0.35, h*0.72-i*h*0.025, w*(0.1-i*0.015), h*(0.15-i*0.02), 0, 0, Math.PI*2);
    ctx.fill(); ctx.stroke();
  }
  // Shoot
  ctx.strokeStyle = '#4A7820';
  ctx.lineWidth = 2.5;
  ctx.beginPath(); ctx.moveTo(w*0.35, h*0.58); ctx.lineTo(w*0.35, h*0.22); ctx.stroke();
  // Leaf
  ctx.fillStyle = '#7AB840';
  ctx.beginPath();
  ctx.moveTo(w*0.35, h*0.3);
  ctx.bezierCurveTo(w*0.48,h*0.24,w*0.55,h*0.15,w*0.52,h*0.1);
  ctx.bezierCurveTo(w*0.45,h*0.12,w*0.38,h*0.22,w*0.35,h*0.3);
  ctx.fill();
  // Daughter bulbs (offsets)
  [0.55,0.65].forEach(bx => {
    for(let i=0; i<3; i++) {
      ctx.fillStyle = `hsl(40,${30+i*8}%,${40-i*3}%)`;
      ctx.beginPath();
      ctx.ellipse(bx*w, h*0.73-i*h*0.02, w*(0.06-i*0.01), h*(0.09-i*0.012), 0, 0, Math.PI*2);
      ctx.fill();
    }
    ctx.strokeStyle = '#4A7820';
    ctx.lineWidth = 1.5;
    ctx.beginPath(); ctx.moveTo(bx*w, h*0.63); ctx.lineTo(bx*w, h*0.48); ctx.stroke();
    ctx.fillStyle = '#7AB840';
    ctx.beginPath();
    ctx.ellipse(bx*w + w*0.04, h*0.5, w*0.04, h*0.06, 0.4, 0, Math.PI*2);
    ctx.fill();
  });
  // Roots
  ctx.strokeStyle = '#C8A050';
  ctx.lineWidth = 1.5;
  for(let i=-3; i<=3; i++) {
    ctx.beginPath();
    ctx.moveTo(w*0.35 + i*w*0.02, h*0.79);
    ctx.bezierCurveTo(w*0.35+i*w*0.015,h*0.84,w*0.35+i*w*0.025,h*0.88,w*0.35+i*w*0.03,h*0.9);
    ctx.stroke();
  }
  ctx.fillStyle = '#FFFFFF';
  ctx.font = `bold ${h*0.06}px Arial`;
  ctx.textAlign = 'center';
  ctx.fillText('Bulbs & Offsets', w*0.5, h*0.08);
  ctx.font = `${h*0.038}px Arial`;
  ctx.fillText('(e.g. Onion, Garlic)', w*0.5, h*0.14);
  ctx.textAlign = 'left';
}

static drawRhizomes(ctx, w, h) {
  ctx.fillStyle = '#050A08';
  ctx.fillRect(0, 0, w, h);
  ctx.fillStyle = '#6B4A10';
  ctx.fillRect(0, h*0.55, w, h*0.45);
  ctx.strokeStyle = '#8B6A20';
  ctx.lineWidth = 1.5;
  ctx.beginPath(); ctx.moveTo(0,h*0.55); ctx.lineTo(w,h*0.55); ctx.stroke();
  ctx.strokeStyle = '#C8A050';
  ctx.lineWidth = 10;
  ctx.lineCap = 'round';
  ctx.beginPath();
  ctx.moveTo(w*0.05, h*0.72);
  ctx.bezierCurveTo(w*0.15,h*0.68,w*0.25,h*0.76,w*0.38,h*0.72);
  ctx.bezierCurveTo(w*0.5,h*0.68,w*0.6,h*0.76,w*0.72,h*0.72);
  ctx.bezierCurveTo(w*0.82,h*0.68,w*0.9,h*0.72,w*0.95,h*0.7);
  ctx.stroke();
  ctx.lineCap = 'butt';
  // Nodes with dots
  [0.05,0.38,0.72,0.95].forEach(nx => {
    ctx.fillStyle = '#AA8030';
    ctx.beginPath(); ctx.arc(nx*w, h*0.72, w*0.015, 0, Math.PI*2); ctx.fill();
  });
  // Shoots from nodes
  [[0.05,0.72],[0.38,0.72],[0.72,0.72]].forEach(([sx,sy]) => {
    ctx.strokeStyle = '#4A7820';
    ctx.lineWidth = 2.5;
    ctx.beginPath(); ctx.moveTo(sx*w, sy*h); ctx.lineTo(sx*w + w*0.02, h*0.35); ctx.stroke();
    ctx.fillStyle = '#7AB840';
    ctx.beginPath();
    ctx.moveTo(sx*w+w*0.02, h*0.45);
    ctx.bezierCurveTo(sx*w+w*0.1,h*0.38,sx*w+w*0.14,h*0.4,sx*w+w*0.12,h*0.46);
    ctx.bezierCurveTo(sx*w+w*0.06,h*0.5,sx*w+w*0.02,h*0.48,sx*w+w*0.02,h*0.45);
    ctx.fill();
    ctx.beginPath();
    ctx.moveTo(sx*w+w*0.02, h*0.42);
    ctx.bezierCurveTo(sx*w-w*0.06,h*0.35,sx*w-w*0.1,h*0.37,sx*w-w*0.08,h*0.43);
    ctx.bezierCurveTo(sx*w-w*0.02,h*0.48,sx*w+w*0.02,h*0.45,sx*w+w*0.02,h*0.42);
    ctx.fill();
  });
  // Root hairs hanging below
  ctx.strokeStyle = '#AA8030';
  ctx.lineWidth = 1;
  for(let i=0; i<12; i++) {
    const rx = (0.08 + i*0.07)*w;
    ctx.beginPath(); ctx.moveTo(rx, h*0.74); ctx.lineTo(rx+Math.random()*w*0.02-w*0.01, h*0.86); ctx.stroke();
  }
  ctx.fillStyle = '#FFFFFF';
  ctx.font = `bold ${h*0.06}px Arial`;
  ctx.textAlign = 'center';
  ctx.fillText('Rhizomes', w*0.5, h*0.08);
  ctx.font = `${h*0.038}px Arial`;
  ctx.fillText('(e.g. Ginger, Iris)', w*0.5, h*0.14);
  ctx.textAlign = 'left';
}

static drawCuttings(ctx, w, h) {
  ctx.fillStyle = '#050A08';
  ctx.fillRect(0, 0, w, h);
  ctx.fillStyle = '#6B4A10';
  ctx.fillRect(0, h*0.62, w, h*0.38);
  ctx.strokeStyle = '#8B6A20';
  ctx.lineWidth = 1.5;
  ctx.beginPath(); ctx.moveTo(0,h*0.62); ctx.lineTo(w,h*0.62); ctx.stroke();
  // Cutting stem
  ctx.fillStyle = '#6B8830';
  ctx.strokeStyle = '#3A5510';
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.rect(w*0.42, h*0.2, w*0.08, h*0.55);
  ctx.fill(); ctx.stroke();
  // Leaves on cutting
  [[0.46,0.28,-1],[0.46,0.38,1],[0.46,0.48,-1]].forEach(([sx,sy,side]) => {
    ctx.fillStyle = '#7AB840';
    ctx.beginPath();
    ctx.moveTo(sx*w, sy*h);
    ctx.bezierCurveTo(sx*w+side*w*0.15,sy*h-h*0.04,sx*w+side*w*0.22,sy*h+h*0.01,sx*w+side*w*0.2,sy*h+h*0.04);
    ctx.bezierCurveTo(sx*w+side*w*0.1,sy*h+h*0.07,sx*w+side*w*0.02,sy*h+h*0.04,sx*w,sy*h);
    ctx.fill();
  });
  // Adventitious roots forming at base
  ctx.strokeStyle = '#C8A050';
  ctx.lineWidth = 2;
  for(let i=-2; i<=2; i++) {
    ctx.beginPath();
    ctx.moveTo(w*0.46 + i*w*0.012, h*0.75);
    ctx.bezierCurveTo(w*0.46+i*w*0.01,h*0.8,w*0.46+i*w*0.015,h*0.85,w*0.46+i*w*0.02,h*0.88);
    ctx.stroke();
  }
  // Rooting hormone label
  ctx.fillStyle = '#FFDD44';
  ctx.font = `${h*0.036}px Arial`;
  ctx.textAlign = 'center';
  ctx.fillText('Auxin / rooting hormone', w*0.5, h*0.18);
  ctx.fillStyle = '#CCAA44';
  ctx.beginPath();
  ctx.rect(w*0.38, h*0.7, w*0.15, h*0.04);
  ctx.fill();
  ctx.fillStyle = '#000000';
  ctx.font = `${h*0.032}px Arial`;
  ctx.fillText('Hormone powder', w*0.5, h*0.728);
  ctx.fillStyle = '#FFFFFF';
  ctx.font = `bold ${h*0.06}px Arial`;
  ctx.fillText('Stem Cuttings', w*0.5, h*0.08);
  ctx.font = `${h*0.038}px Arial`;
  ctx.fillText('(e.g. Rose, Geranium)', w*0.5, h*0.14);
  ctx.textAlign = 'left';
}

// ===== PLANT HORMONES =====
static drawPlantHormonesOverview(ctx, x, y, width, height, hormone, process) {
  ctx.save();
  ctx.translate(x, y);

  switch(hormone) {
    case 'auxin':
      this.drawAuxinDetail(ctx, 0, 0, width, height);
      break;
    case 'gibberellin':
      this.drawGibberellinDetail(ctx, 0, 0, width, height);
      break;
    case 'cytokinin':
      this.drawCytokininDetail(ctx, width, height);
      break;
    case 'aba':
      this.drawABADetail(ctx, width, height);
      break;
    case 'ethylene':
      this.drawEthyleneDetail(ctx, width, height);
      break;
    case 'overview':
    default:
      this.drawHormonesOverview(ctx, width, height, process);
      break;
  }

  ctx.restore();
}

static drawHormonesOverview(ctx, w, h, process) {
  ctx.fillStyle = '#050818';
  ctx.fillRect(0, 0, w, h);

  ctx.fillStyle = '#FFFFFF';
  ctx.font = `bold ${h*0.055}px Arial`;
  ctx.textAlign = 'center';
  ctx.fillText('Plant Hormone Overview', w*0.5, h*0.07);
  ctx.textAlign = 'left';

  const hormones = [
    {name:'Auxin\n(IAA)',     color:'#4488CC', effects:['Cell elongation','Apical dominance','Root formation','Phototropism'], icon:'↗'},
    {name:'Gibberellin\n(GA)',color:'#44AA44', effects:['Stem elongation','Seed germination','Fruit growth','Bolting'],        icon:'↑↑'},
    {name:'Cytokinin',        color:'#CC8844', effects:['Cell division','Shoot formation','Delays senescence','Nutrient sink'], icon:'✦'},
    {name:'ABA',              color:'#AA4488', effects:['Stomata closure','Seed dormancy','Stress response','Inhibition'],     icon:'✕'},
    {name:'Ethylene\n(gas)',  color:'#888844', effects:['Fruit ripening','Leaf abscission','Epinasty','Stress'],               icon:'~'},
  ];

  const colW = w*0.18, colH = h*0.82, startX = w*0.02;

  hormones.forEach((hormone, i) => {
    const hx = startX + i*(colW + w*0.01);

    ctx.fillStyle = hormone.color;
    ctx.strokeStyle = 'rgba(255,255,255,0.3)';
    ctx.lineWidth = 1.5;
    ctx.beginPath();
    ctx.roundRect(hx, h*0.1, colW, colH, w*0.01);
    ctx.fill(); ctx.stroke();

    // Header
    ctx.fillStyle = 'rgba(0,0,0,0.3)';
    ctx.beginPath();
    ctx.roundRect(hx, h*0.1, colW, h*0.14, [w*0.01, w*0.01, 0, 0]);
    ctx.fill();

    ctx.fillStyle = '#FFFFFF';
    ctx.font = `bold ${h*0.04}px Arial`;
    ctx.textAlign = 'center';
    hormone.name.split('\n').forEach((line, li) => {
      ctx.fillText(line, hx + colW*0.5, h*0.14 + li*h*0.038);
    });

    // Icon
    ctx.font = `${h*0.06}px Arial`;
    ctx.fillText(hormone.icon, hx + colW*0.5, h*0.28);

    // Effects list
    ctx.font = `${h*0.032}px Arial`;
    ctx.textAlign = 'left';
    ctx.fillStyle = 'rgba(255,255,255,0.9)';
    hormone.effects.forEach((effect, ei) => {
      ctx.fillText('• ' + effect, hx + colW*0.08, h*0.36 + ei*h*0.12);
    });
    ctx.textAlign = 'left';
  });
}

static drawCytokininDetail(ctx, w, h) {
  ctx.fillStyle = '#050818';
  ctx.fillRect(0, 0, w, h);
  ctx.fillStyle = '#FFFFFF';
  ctx.font = `bold ${h*0.06}px Arial`;
  ctx.textAlign = 'center';
  ctx.fillText('Cytokinin', w*0.5, h*0.08);
  ctx.font = `${h*0.038}px Arial`;
  ctx.fillText('Primary: Zeatin — produced in roots', w*0.5, h*0.14);
  // Cell division diagram
  ctx.fillStyle = '#CC8844';
  ctx.beginPath(); ctx.arc(w*0.5, h*0.4, w*0.08, 0, Math.PI*2); ctx.fill();
  ctx.strokeStyle = '#FFFFFF';
  ctx.lineWidth = 2;
  ctx.beginPath(); ctx.moveTo(w*0.5-w*0.08,h*0.4); ctx.lineTo(w*0.5+w*0.08,h*0.4); ctx.stroke();
  // Two daughter cells
  ctx.fillStyle = '#DD9955';
  ctx.beginPath(); ctx.arc(w*0.38, h*0.58, w*0.06, 0, Math.PI*2); ctx.fill();
  ctx.beginPath(); ctx.arc(w*0.62, h*0.58, w*0.06, 0, Math.PI*2); ctx.fill();
  ctx.strokeStyle = '#FFAA44';
  ctx.lineWidth = 2;
  ctx.setLineDash([4,3]);
  ctx.beginPath(); ctx.moveTo(w*0.44,h*0.48); ctx.lineTo(w*0.38,h*0.52); ctx.stroke();
  ctx.beginPath(); ctx.moveTo(w*0.56,h*0.48); ctx.lineTo(w*0.62,h*0.52); ctx.stroke();
  ctx.setLineDash([]);
  ctx.fillStyle = '#FFFFFF';
  ctx.font = `${h*0.038}px Arial`;
  ctx.fillText('Cell division → growth', w*0.5, h*0.76);
  ctx.fillText('Delays leaf senescence', w*0.5, h*0.82);
  ctx.fillText('Promotes bud formation', w*0.5, h*0.88);
  ctx.textAlign = 'left';
}

static drawABADetail(ctx, w, h) {
  ctx.fillStyle = '#050818';
  ctx.fillRect(0, 0, w, h);
  ctx.fillStyle = '#FFFFFF';
  ctx.font = `bold ${h*0.06}px Arial`;
  ctx.textAlign = 'center';
  ctx.fillText('Abscisic Acid (ABA)', w*0.5, h*0.08);
  ctx.font = `${h*0.038}px Arial`;
  ctx.fillText('Stress hormone — closes stomata', w*0.5, h*0.14);
  // Leaf
  ctx.fillStyle = '#4A7820';
  ctx.beginPath();
  ctx.ellipse(w*0.5, h*0.4, w*0.3, h*0.2, 0, 0, Math.PI*2);
  ctx.fill();
  // Closed stoma
  ctx.fillStyle = '#2A5010';
  ctx.beginPath(); ctx.arc(w*0.5, h*0.42, w*0.04, 0, Math.PI*2); ctx.fill();
  ctx.strokeStyle = '#FFAA44';
  ctx.lineWidth = 3;
  ctx.beginPath(); ctx.moveTo(w*0.45,h*0.38); ctx.lineTo(w*0.55,h*0.48); ctx.stroke();
  ctx.beginPath(); ctx.moveTo(w*0.55,h*0.38); ctx.lineTo(w*0.45,h*0.48); ctx.stroke();
  ctx.fillStyle = '#FFFFFF';
  ctx.font = `${h*0.038}px Arial`;
  ctx.fillText('Stomata close → ↓ water loss', w*0.5, h*0.72);
  ctx.fillText('Seeds enter dormancy', w*0.5, h*0.78);
  ctx.fillText('Inhibits growth under stress', w*0.5, h*0.84);
  ctx.textAlign = 'left';
}

static drawEthyleneDetail(ctx, w, h) {
  ctx.fillStyle = '#050818';
  ctx.fillRect(0, 0, w, h);
  ctx.fillStyle = '#FFFFFF';
  ctx.font = `bold ${h*0.06}px Arial`;
  ctx.textAlign = 'center';
  ctx.fillText('Ethylene (C₂H₄)', w*0.5, h*0.08);
  ctx.font = `${h*0.038}px Arial`;
  ctx.fillText('Gaseous hormone — fruit ripening', w*0.5, h*0.14);
  // Green fruit → ripe fruit
  ctx.fillStyle = '#4A7820';
  ctx.beginPath(); ctx.arc(w*0.3, h*0.45, w*0.1, 0, Math.PI*2); ctx.fill();
  ctx.fillStyle = '#FF4400';
  ctx.beginPath(); ctx.arc(w*0.7, h*0.45, w*0.12, 0, Math.PI*2); ctx.fill();
  // Ethylene gas dots
  ctx.fillStyle = 'rgba(255,220,100,0.5)';
  [[0.42,0.4],[0.5,0.42],[0.46,0.48],[0.54,0.38]].forEach(([gx,gy]) => {
    ctx.beginPath(); ctx.arc(gx*w, gy*h, w*0.018, 0, Math.PI*2); ctx.fill();
  });
  ctx.strokeStyle = '#FFD700';
  ctx.lineWidth = 2;
  ctx.beginPath(); ctx.moveTo(w*0.4, h*0.45); ctx.lineTo(w*0.57, h*0.45); ctx.stroke();
  ctx.fillStyle = '#FFFFFF';
  ctx.font = `${h*0.038}px Arial`;
  ctx.fillText('Fruit ripening & softening', w*0.5, h*0.72);
  ctx.fillText('Leaf/fruit abscission', w*0.5, h*0.78);
  ctx.fillText('Seed germination', w*0.5, h*0.84);
  ctx.textAlign = 'left';
}

// ===== AUXIN DETAIL =====
static drawAuxinDetail(ctx, x, y, width, height, detail, process) {
  const w = typeof x === 'object' ? x : width;
  const h = typeof y === 'object' ? y : height;
  const ox = typeof x === 'number' && width ? x : 0;
  const oy = typeof y === 'number' && height ? y : 0;

  ctx.save();
  if(ox || oy) ctx.translate(ox, oy);

  const d = typeof x === 'object' ? y : detail;

  switch(d) {
    case 'transport':
      this.drawAuxinTransport(ctx, w, h, process);
      break;
    case 'phototropism':
      this.drawAuxinPhototropism(ctx, w, h);
      break;
    case 'apical-dominance':
      this.drawApicalDominance(ctx, w, h);
      break;
    case 'overview':
    default:
      this.drawAuxinOverview(ctx, w, h, process);
      break;
  }

  ctx.restore();
}

static drawAuxinOverview(ctx, w, h, process) {
  ctx.fillStyle = '#050818';
  ctx.fillRect(0, 0, w, h);

  ctx.fillStyle = '#FFFFFF';
  ctx.font = `bold ${h*0.055}px Arial`;
  ctx.textAlign = 'center';
  ctx.fillText('Auxin (IAA) — Overview', w*0.5, h*0.07);
  ctx.textAlign = 'left';

  // Plant diagram showing auxin distribution
  const stemX = w*0.5;
  ctx.fillStyle = '#6B8830';
  ctx.strokeStyle = '#3A5510';
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.rect(stemX - w*0.03, h*0.12, w*0.06, h*0.72);
  ctx.fill(); ctx.stroke();

  // Auxin concentration gradient (more at tip, basipetal flow)
  for(let i=0; i<8; i++) {
    const y = h*(0.14 + i*0.085);
    const concentration = 1 - i/8;
    const dotCount = Math.round(concentration * 5);
    ctx.fillStyle = '#4488CC';
    for(let d=0; d<dotCount; d++) {
      ctx.beginPath();
      ctx.arc(stemX - w*0.01 + d*w*0.005, y, w*0.008, 0, Math.PI*2);
      ctx.fill();
    }
  }

  // Biosynthesis at tip label
  ctx.fillStyle = '#4488CC';
  ctx.fillRect(stemX + w*0.06, h*0.12, w*0.3, h*0.07);
  ctx.fillStyle = '#FFFFFF';
  ctx.font = `${h*0.036}px Arial`;
  ctx.fillText('Produced at apex', stemX + w*0.08, h*0.155);

  // Basipetal transport arrow
  ctx.strokeStyle = '#88CCFF';
  ctx.lineWidth = 2.5;
  ctx.setLineDash([5,3]);
  ctx.beginPath();
  ctx.moveTo(stemX - w*0.06, h*0.15);
  ctx.lineTo(stemX - w*0.06, h*0.82);
  ctx.stroke();
  ctx.setLineDash([]);
  ctx.fillStyle = '#88CCFF';
  ctx.beginPath();
  ctx.moveTo(stemX - w*0.06, h*0.84);
  ctx.lineTo(stemX - w*0.1, h*0.78);
  ctx.lineTo(stemX - w*0.02, h*0.78);
  ctx.closePath(); ctx.fill();
  ctx.fillStyle = '#88CCFF';
  ctx.font = `${h*0.032}px Arial`;
  ctx.fillText('Basipetal', w*0.02, h*0.5);
  ctx.fillText('transport', w*0.02, h*0.55);

  // Effects boxes
  const effects = [
    {y:0.3, text:'Cell elongation\n(cell wall loosening)'},
    {y:0.52, text:'Root initiation\n(higher conc. inhibits)'},
    {y:0.72, text:'Apical dominance\n(inhibits lateral buds)'},
  ];
  effects.forEach(e => {
    ctx.fillStyle = 'rgba(68,136,204,0.2)';
    ctx.strokeStyle = '#4488CC';
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.roundRect(stemX + w*0.08, e.y*h, w*0.4, h*0.12, w*0.01);
    ctx.fill(); ctx.stroke();
    ctx.fillStyle = '#CCDDFF';
    ctx.font = `${h*0.032}px Arial`;
    e.text.split('\n').forEach((line, li) => {
      ctx.fillText(line, stemX + w*0.1, e.y*h + h*0.045 + li*h*0.038);
    });
    // Line from stem to box
    ctx.strokeStyle = 'rgba(68,136,204,0.4)';
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(stemX + w*0.03, (e.y + 0.06)*h);
    ctx.lineTo(stemX + w*0.08, (e.y + 0.06)*h);
    ctx.stroke();
  });
}

static drawAuxinTransport(ctx, w, h, process) {
  ctx.fillStyle = '#050818';
  ctx.fillRect(0, 0, w, h);
  ctx.fillStyle = '#FFFFFF';
  ctx.font = `bold ${h*0.055}px Arial`;
  ctx.textAlign = 'center';
  ctx.fillText('Auxin Polar Transport', w*0.5, h*0.07);
  ctx.textAlign = 'left';
  // Single cell
  ctx.fillStyle = '#3A5820';
  ctx.strokeStyle = '#2A4010';
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.roundRect(w*0.2, h*0.2, w*0.6, h*0.55, w*0.02);
  ctx.fill(); ctx.stroke();
  // PIN carriers (bottom membrane)
  ctx.fillStyle = '#FFAA44';
  for(let i=0; i<4; i++) {
    ctx.beginPath();
    ctx.rect(w*(0.28+i*0.12), h*0.7, w*0.08, h*0.05);
    ctx.fill();
    ctx.fillStyle = '#000000';
    ctx.font = `${h*0.028}px Arial`;
    ctx.textAlign = 'center';
    ctx.fillText('PIN', w*(0.32+i*0.12), h*0.73);
    ctx.textAlign = 'left';
    ctx.fillStyle = '#FFAA44';
  }
  // AUX/LAX carriers (top)
  ctx.fillStyle = '#4488CC';
  for(let i=0; i<3; i++) {
    ctx.beginPath();
    ctx.rect(w*(0.3+i*0.14), h*0.2, w*0.08, h*0.04);
    ctx.fill();
    ctx.fillStyle = '#FFFFFF';
    ctx.font = `${h*0.026}px Arial`;
    ctx.textAlign = 'center';
    ctx.fillText('AUX1', w*(0.34+i*0.14), h*0.225);
    ctx.textAlign = 'left';
    ctx.fillStyle = '#4488CC';
  }
  // Auxin dots
  ctx.fillStyle = '#88CCFF';
  [[0.5,0.35],[0.4,0.42],[0.6,0.38],[0.5,0.5],[0.45,0.56]].forEach(([ax,ay]) => {
    ctx.beginPath(); ctx.arc(ax*w, ay*h, w*0.02, 0, Math.PI*2); ctx.fill();
  });
  // Arrow (auxin out bottom)
  ctx.strokeStyle = '#88CCFF';
  ctx.lineWidth = 2.5;
  ctx.beginPath(); ctx.moveTo(w*0.5, h*0.75); ctx.lineTo(w*0.5, h*0.88); ctx.stroke();
  ctx.fillStyle = '#88CCFF';
  ctx.beginPath(); ctx.moveTo(w*0.5,h*0.9); ctx.lineTo(w*0.46,h*0.84); ctx.lineTo(w*0.54,h*0.84); ctx.closePath(); ctx.fill();
  ctx.fillStyle = '#FFFFFF';
  ctx.font = `${h*0.036}px Arial`;
  ctx.textAlign = 'center';
  ctx.fillText('Active efflux via PIN carriers', w*0.5, h*0.14);
  ctx.fillText('Unidirectional (polar) flow →', w*0.5, h*0.95);
  ctx.textAlign = 'left';
}

static drawAuxinPhototropism(ctx, w, h) {
  ctx.fillStyle = '#050818';
  ctx.fillRect(0, 0, w, h);
  ctx.fillStyle = '#FFFFFF';
  ctx.font = `bold ${h*0.055}px Arial`;
  ctx.textAlign = 'center';
  ctx.fillText('Auxin & Phototropism', w*0.5, h*0.07);
  ctx.textAlign = 'left';
  const stemX = w*0.5;
  // Curved stem bending toward light
  ctx.fillStyle = '#6B8830';
  ctx.strokeStyle = '#3A5510';
  ctx.lineWidth = 8;
  ctx.beginPath();
  ctx.moveTo(stemX, h*0.9);
  ctx.bezierCurveTo(stemX, h*0.7, stemX-w*0.05, h*0.5, stemX-w*0.12, h*0.25);
  ctx.stroke();
  // Light from left
  ctx.fillStyle = '#FFD700';
  ctx.beginPath(); ctx.arc(w*0.08, h*0.15, w*0.04, 0, Math.PI*2); ctx.fill();
  ctx.strokeStyle = '#FFD700';
  ctx.lineWidth = 1.5;
  for(let i=0; i<5; i++) {
    const angle = -0.4 + i*0.2;
    ctx.beginPath();
    ctx.moveTo(w*0.12, h*0.15);
    ctx.lineTo(w*0.12 + Math.cos(angle)*w*0.12, h*0.15 + Math.sin(angle)*h*0.12);
    ctx.stroke();
  }
  // Auxin concentrations (more on dark side)
  ctx.fillStyle = '#4488CC';
  for(let i=0; i<5; i++) {
    const y = h*(0.35 + i*0.1);
    for(let d=0; d<3; d++) {
      ctx.beginPath();
      ctx.arc(stemX + w*0.01 + d*w*0.012, y, w*0.01, 0, Math.PI*2);
      ctx.fill();
    }
    for(let d=0; d<1; d++) {
      ctx.beginPath();
      ctx.arc(stemX - w*0.02, y, w*0.01, 0, Math.PI*2);
      ctx.fill();
    }
  }
  ctx.fillStyle = '#FFFFFF';
  ctx.font = `${h*0.034}px Arial`;
  ctx.fillText('Low auxin\n(light side)', w*0.04, h*0.58);
  ctx.fillText('High auxin\n(dark side)', w*0.62, h*0.58);
  ctx.font = `${h*0.038}px Arial`;
  ctx.textAlign = 'center';
  ctx.fillText('Unequal distribution → bending toward light', w*0.5, h*0.92);
  ctx.textAlign = 'left';
}

static drawApicalDominance(ctx, w, h) {
  ctx.fillStyle = '#050818';
  ctx.fillRect(0, 0, w, h);
  ctx.fillStyle = '#FFFFFF';
  ctx.font = `bold ${h*0.055}px Arial`;
  ctx.textAlign = 'center';
  ctx.fillText('Apical Dominance', w*0.5, h*0.07);
  ctx.textAlign = 'left';
  const sx = w*0.5;
  // Stem
  ctx.fillStyle = '#6B8830';
  ctx.strokeStyle = '#3A5510';
  ctx.lineWidth = 2;
  ctx.beginPath(); ctx.rect(sx-w*0.025, h*0.1, w*0.05, h*0.8); ctx.fill(); ctx.stroke();
  // Apical bud
  ctx.fillStyle = '#AADE68';
  ctx.beginPath(); ctx.ellipse(sx, h*0.1, w*0.035, h*0.04, 0, 0, Math.PI*2); ctx.fill();
  // Inhibited axillary buds
  [0.3,0.5,0.7].forEach(ny => {
    ctx.fillStyle = '#AA6622';
    ctx.beginPath(); ctx.arc(sx + w*0.06, ny*h, w*0.02, 0, Math.PI*2); ctx.fill();
    ctx.strokeStyle = '#FF4444';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(sx+w*0.04, ny*h - h*0.025);
    ctx.lineTo(sx+w*0.08, ny*h + h*0.025);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(sx+w*0.08, ny*h - h*0.025);
    ctx.lineTo(sx+w*0.04, ny*h + h*0.025);
    ctx.stroke();
    // Auxin flow indicator
    ctx.strokeStyle = '#4488CC';
    ctx.lineWidth = 1.5;
    ctx.setLineDash([3,2]);
    ctx.beginPath();
    ctx.moveTo(sx - w*0.025, h*0.14);
    ctx.lineTo(sx - w*0.025, ny*h);
    ctx.stroke();
    ctx.setLineDash([]);
  });
  ctx.fillStyle = '#FFFFFF';
  ctx.font = `${h*0.036}px Arial`;
  ctx.fillText('Auxin from apex', sx + w*0.1, h*0.22);
  ctx.fillText('inhibits lateral buds', sx + w*0.1, h*0.27);
  ctx.font = `${h*0.034}px Arial`;
  ctx.fillStyle = 'rgba(255,255,255,0.7)';
  ctx.textAlign = 'center';
  ctx.fillText('Remove apex → lateral buds grow (pruning)', sx, h*0.92);
  ctx.textAlign = 'left';
}

// ===== GIBBERELLIN =====
static drawGibberellinDetail(ctx, x, y, width, height, detail, process) {
  const w = typeof x === 'object' ? x : width;
  const h = typeof y === 'object' ? y : height;
  const ox = typeof x === 'number' && width ? x : 0;
  const oy = typeof y === 'number' && height ? y : 0;

  ctx.save();
  if(ox || oy) ctx.translate(ox, oy);

  const d = typeof x === 'object' ? y : detail;

  switch(d) {
    case 'elongation':
      this.drawGibberellinElongation(ctx, w, h);
      break;
    case 'germination':
      this.drawGibberellinGermination(ctx, w, h);
      break;
    case 'overview':
    default:
      this.drawGibberellinOverview(ctx, w, h, process);
      break;
  }

  ctx.restore();
}

static drawGibberellinOverview(ctx, w, h, process) {
  ctx.fillStyle = '#050818';
  ctx.fillRect(0, 0, w, h);

  ctx.fillStyle = '#FFFFFF';
  ctx.font = `bold ${h*0.055}px Arial`;
  ctx.textAlign = 'center';
  ctx.fillText('Gibberellin (GA) — Overview', w*0.5, h*0.07);
  ctx.textAlign = 'left';

  // Left: short plant (no GA)
  const drawPlant = (cx, stemH, color, label, sublabel) => {
    ctx.fillStyle = '#5A3A10';
    ctx.fillRect(cx - w*0.08, h*0.85, w*0.16, h*0.1);
    ctx.fillStyle = color;
    ctx.strokeStyle = '#3A5510';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.rect(cx - w*0.02, h*0.85 - stemH, w*0.04, stemH);
    ctx.fill(); ctx.stroke();
    // Leaves
    [[1],[−1],[1],[−1]].forEach((s, i) => {
      if(i * stemH/4 > stemH) return;
      const leafY = h*0.85 - stemH + i * stemH*0.3;
      ctx.fillStyle = '#7AB840';
      ctx.beginPath();
      ctx.moveTo(cx + s[0]*w*0.02, leafY);
      ctx.bezierCurveTo(cx+s[0]*w*0.1,leafY-h*0.025,cx+s[0]*w*0.14,leafY+h*0.01,cx+s[0]*w*0.13,leafY+h*0.03);
      ctx.bezierCurveTo(cx+s[0]*w*0.07,leafY+h*0.05,cx+s[0]*w*0.02,leafY+h*0.02,cx+s[0]*w*0.02,leafY);
      ctx.fill();
    });
    ctx.fillStyle = '#FFFFFF';
    ctx.font = `bold ${h*0.04}px Arial`;
    ctx.textAlign = 'center';
    ctx.fillText(label, cx, h*0.96);
    ctx.font = `${h*0.032}px Arial`;
    ctx.fillStyle = 'rgba(255,255,255,0.7)';
    ctx.fillText(sublabel, cx, h*1.0);
    ctx.textAlign = 'left';
  };

  drawPlant(w*0.28, h*0.28, '#6B8830', 'No GA', 'Dwarf');
  // Arrow
  ctx.strokeStyle = '#44AA44';
  ctx.lineWidth = 3;
  ctx.beginPath();
  ctx.moveTo(w*0.38, h*0.55);
  ctx.lineTo(w*0.62, h*0.55);
  ctx.stroke();
  ctx.fillStyle = '#44AA44';
  ctx.beginPath();
  ctx.moveTo(w*0.63, h*0.55);
  ctx.lineTo(w*0.58, h*0.52);
  ctx.lineTo(w*0.58, h*0.58);
  ctx.closePath(); ctx.fill();
  ctx.fillStyle = '#FFFFFF';
  ctx.font = `${h*0.036}px Arial`;
  ctx.textAlign = 'center';
  ctx.fillText('+ Gibberellin', w*0.5, h*0.52);
  ctx.textAlign = 'left';
  drawPlant(w*0.72, h*0.58, '#7AB840', '+ GA', 'Normal height');

  // Effects list
  const effects = ['Stem elongation (internode)','Seed germination (activates amylase)','Fruit development (parthenocarpy)','Bolting in rosette plants','Breaks seed/bud dormancy'];
  ctx.fillStyle = '#FFFFFF';
  ctx.font = `${h*0.034}px Arial`;
  effects.forEach((e, i) => {
    ctx.fillStyle = '#88FF88';
    ctx.fillText('▸ ' + e, w*0.04, h*0.14 + i*h*0.065);
  });
}

static drawGibberellinElongation(ctx, w, h) {
  ctx.fillStyle = '#050818';
  ctx.fillRect(0, 0, w, h);
  ctx.fillStyle = '#FFFFFF';
  ctx.font = `bold ${h*0.055}px Arial`;
  ctx.textAlign = 'center';
  ctx.fillText('Gibberellin: Stem Elongation', w*0.5, h*0.07);
  // Two stems
  const drawStem = (cx, nodeH, label) => {
    ctx.fillStyle = '#6B8830';
    ctx.strokeStyle = '#3A5510';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.rect(cx - w*0.025, h*0.9 - nodeH*4, w*0.05, nodeH*4);
    ctx.fill(); ctx.stroke();
    // Node bands
    for(let i=0; i<3; i++) {
      ctx.fillStyle = '#4A6020';
      ctx.beginPath();
      ctx.rect(cx - w*0.03, h*0.9 - nodeH*(i+1), w*0.06, nodeH*0.15);
      ctx.fill();
    }
    ctx.fillStyle = '#FFFFFF';
    ctx.font = `${h*0.038}px Arial`;
    ctx.fillText(label, cx, h*0.95);
  };
  drawStem(w*0.3, h*0.07, 'No GA\n(short internodes)');
  drawStem(w*0.7, h*0.17, '+ GA\n(long internodes)');
  // GA arrow
  ctx.strokeStyle = '#44AA44';
  ctx.lineWidth = 2.5;
  ctx.beginPath(); ctx.moveTo(w*0.4, h*0.5); ctx.lineTo(w*0.6, h*0.5); ctx.stroke();
  ctx.fillStyle = '#FFFFFF';
  ctx.font = `${h*0.038}px Arial`;
  ctx.textAlign = 'center';
  ctx.fillText('GA → internode\nelongation', w*0.5, h*0.42);
  ctx.textAlign = 'left';
}

static drawGibberellinGermination(ctx, w, h) {
  ctx.fillStyle = '#050818';
  ctx.fillRect(0, 0, w, h);
  ctx.fillStyle = '#FFFFFF';
  ctx.font = `bold ${h*0.055}px Arial`;
  ctx.textAlign = 'center';
  ctx.fillText('Gibberellin: Germination', w*0.5, h*0.07);
  ctx.textAlign = 'left';
  // Seed anatomy with GA pathway
  // Seed coat
  ctx.fillStyle = '#8B5A20';
  ctx.beginPath(); ctx.ellipse(w*0.5, h*0.42, w*0.28, h*0.25, 0, 0, Math.PI*2); ctx.fill();
  // Aleurone layer
  ctx.fillStyle = '#CC8830';
  ctx.beginPath(); ctx.ellipse(w*0.5, h*0.42, w*0.24, h*0.21, 0, 0, Math.PI*2); ctx.fill();
  // Endosperm
  ctx.fillStyle = '#E8CC80';
  ctx.beginPath(); ctx.ellipse(w*0.5, h*0.42, w*0.18, h*0.16, 0, 0, Math.PI*2); ctx.fill();
  // Embryo
  ctx.fillStyle = '#7AB840';
  ctx.beginPath(); ctx.ellipse(w*0.5, h*0.46, w*0.06, h*0.08, 0, 0, Math.PI*2); ctx.fill();
  // Pathway labels
  const steps = [
    {x:0.65, y:0.22, text:'1. Embryo releases GA'},
    {x:0.65, y:0.32, text:'2. GA → Aleurone'},
    {x:0.65, y:0.42, text:'3. Aleurone makes α-amylase'},
    {x:0.65, y:0.52, text:'4. Amylase breaks starch'},
    {x:0.65, y:0.62, text:'5. Sugars fuel germination'},
  ];
  ctx.font = `${h*0.033}px Arial`;
  steps.forEach(s => {
    ctx.fillStyle = '#CCDDFF';
    ctx.fillText(s.text, s.x*w, s.y*h);
  });
  ctx.fillStyle = '#FFFFFF';
  ctx.textAlign = 'center';
  ctx.font = `${h*0.036}px Arial`;
  ctx.fillText('GA signal → enzyme synthesis → starch digestion', w*0.5, h*0.88);
  ctx.textAlign = 'left';
}

// ===== PHOTOPERIODISM =====
static drawPhotoperiodism(ctx, x, y, width, height, type, process) {
  ctx.save();
  ctx.translate(x, y);

  switch(type) {
    case 'short-day':
      this.drawShortDayPlant(ctx, width, height);
      break;
    case 'long-day':
      this.drawLongDayPlant(ctx, width, height);
      break;
    case 'day-neutral':
      this.drawDayNeutralPlant(ctx, width, height);
      break;
    case 'complete':
    default:
      this.drawCompletePhotoperiodism(ctx, width, height, process);
      break;
  }

  ctx.restore();
}

static drawCompletePhotoperiodism(ctx, w, h, process) {
  ctx.fillStyle = '#050818';
  ctx.fillRect(0, 0, w, h);

  ctx.fillStyle = '#FFFFFF';
  ctx.font = `bold ${h*0.055}px Arial`;
  ctx.textAlign = 'center';
  ctx.fillText('Photoperiodism — Flowering Response', w*0.5, h*0.06);
  ctx.textAlign = 'left';

  const drawDayBar = (x, y, barW, barH, lightFrac, label, flowers) => {
    // Day (light) part
    ctx.fillStyle = '#FFD700';
    ctx.beginPath();
    ctx.roundRect(x, y, barW * lightFrac, barH, [4, 0, 0, 4]);
    ctx.fill();
    // Night (dark) part
    ctx.fillStyle = '#1A1A3A';
    ctx.beginPath();
    ctx.roundRect(x + barW*lightFrac, y, barW*(1-lightFrac), barH, [0, 4, 4, 0]);
    ctx.fill();
    ctx.strokeStyle = 'rgba(255,255,255,0.3)';
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.roundRect(x, y, barW, barH, 4);
    ctx.stroke();
    // Critical line
    ctx.strokeStyle = '#FF4444';
    ctx.lineWidth = 1.5;
    ctx.setLineDash([4,3]);
    ctx.beginPath();
    ctx.moveTo(x + barW*0.45, y - barH*0.3);
    ctx.lineTo(x + barW*0.45, y + barH*1.3);
    ctx.stroke();
    ctx.setLineDash([]);
    // Flower or X
    ctx.font = `${h*0.08}px Arial`;
    ctx.textAlign = 'center';
    ctx.fillText(flowers ? '🌸' : '🌿', x + barW*0.5, y + barH*3.0);
    // Label
    ctx.fillStyle = '#FFFFFF';
    ctx.font = `bold ${h*0.038}px Arial`;
    ctx.fillText(label, x + barW*0.5, y - barH*0.5);
    ctx.textAlign = 'left';
  };

  const bw = w*0.26, bh = h*0.06, sy = h*0.38;

  // Short-day plant (needs long night)
  drawDayBar(w*0.04, sy, bw, bh, 0.35, 'Short-Day', true);
  ctx.fillStyle = '#AAFFAA';
  ctx.font = `${h*0.03}px Arial`;
  ctx.fillText('Long night → flowers', w*0.04, sy + bh*4.5);

  // Short-day plant, long day (no flower)
  drawDayBar(w*0.04, sy + h*0.25, bw, bh, 0.65, '', false);
  ctx.fillStyle = 'rgba(255,100,100,0.8)';
  ctx.font = `${h*0.03}px Arial`;
  ctx.fillText('Short night → no flower', w*0.04, sy + h*0.25 + bh*4.5);

  // Long-day plant (needs short night)
  drawDayBar(w*0.38, sy, bw, bh, 0.65, 'Long-Day', true);
  ctx.fillStyle = '#AAFFAA';
  ctx.font = `${h*0.03}px Arial`;
  ctx.fillText('Short night → flowers', w*0.38, sy + bh*4.5);

  // Long-day, long night (no flower)
  drawDayBar(w*0.38, sy + h*0.25, bw, bh, 0.35, '', false);
  ctx.fillStyle = 'rgba(255,100,100,0.8)';
  ctx.font = `${h*0.03}px Arial`;
  ctx.fillText('Long night → no flower', w*0.38, sy + h*0.25 + bh*4.5);

  // Day-neutral
  drawDayBar(w*0.72, sy, bw, bh, 0.5, 'Day-Neutral', true);
  ctx.fillStyle = '#AAFFAA';
  ctx.font = `${h*0.03}px Arial`;
  ctx.fillText('Flowers regardless', w*0.72, sy + bh*4.5);
  drawDayBar(w*0.72, sy + h*0.25, bw, bh, 0.35, '', true);
  ctx.fillText('of day length', w*0.72, sy + h*0.25 + bh*4.5);

  // Legend
  ctx.fillStyle = '#FFD700';
  ctx.fillRect(w*0.02, h*0.85, w*0.06, h*0.04);
  ctx.fillStyle = '#1A1A3A';
  ctx.fillRect(w*0.1, h*0.85, w*0.06, h*0.04);
  ctx.fillStyle = '#FFFFFF';
  ctx.font = `${h*0.035}px Arial`;
  ctx.fillText('Light period', w*0.02, h*0.93);
  ctx.fillText('Dark period', w*0.1, h*0.93);
  ctx.strokeStyle = '#FF4444';
  ctx.lineWidth = 1.5;
  ctx.setLineDash([4,3]);
  ctx.beginPath(); ctx.moveTo(w*0.4, h*0.86); ctx.lineTo(w*0.46, h*0.86); ctx.stroke();
  ctx.setLineDash([]);
  ctx.fillStyle = '#FFFFFF';
  ctx.fillText('Critical night length', w*0.47, h*0.88);

  // Phytochrome note
  ctx.fillStyle = 'rgba(255,255,255,0.6)';
  ctx.font = `${h*0.032}px Arial`;
  ctx.textAlign = 'center';
  ctx.fillText('Phytochrome (Pr/Pfr) is the light receptor measuring night length', w*0.5, h*0.96);
  ctx.textAlign = 'left';
}

static drawShortDayPlant(ctx, w, h) {
  ctx.fillStyle = '#050818';
  ctx.fillRect(0, 0, w, h);
  ctx.fillStyle = '#FFFFFF';
  ctx.font = `bold ${h*0.06}px Arial`;
  ctx.textAlign = 'center';
  ctx.fillText('Short-Day Plant', w*0.5, h*0.08);
  ctx.font = `${h*0.038}px Arial`;
  ctx.fillText('(e.g. Chrysanthemum, Poinsettia)', w*0.5, h*0.14);
  ctx.textAlign = 'left';
  // Day bar (short day)
  ctx.fillStyle = '#FFD700';
  ctx.fillRect(w*0.1, h*0.3, w*0.3, h*0.08);
  ctx.fillStyle = '#1A1A3A';
  ctx.fillRect(w*0.4, h*0.3, w*0.5, h*0.08);
  ctx.fillStyle = '#FFFFFF';
  ctx.font = `${h*0.036}px Arial`;
  ctx.textAlign = 'center';
  ctx.fillText('Short day / Long night → FLOWERS ✓', w*0.5, h*0.5);
  // Day bar (long day)
  ctx.fillStyle = '#FFD700';
  ctx.fillRect(w*0.1, h*0.6, w*0.6, h*0.08);
  ctx.fillStyle = '#1A1A3A';
  ctx.fillRect(w*0.7, h*0.6, w*0.2, h*0.08);
  ctx.fillStyle = '#FFFFFF';
  ctx.fillText('Long day / Short night → NO FLOWER ✗', w*0.5, h*0.8);
  ctx.textAlign = 'left';
}

static drawLongDayPlant(ctx, w, h) {
  ctx.fillStyle = '#050818';
  ctx.fillRect(0, 0, w, h);
  ctx.fillStyle = '#FFFFFF';
  ctx.font = `bold ${h*0.06}px Arial`;
  ctx.textAlign = 'center';
  ctx.fillText('Long-Day Plant', w*0.5, h*0.08);
  ctx.font = `${h*0.038}px Arial`;
  ctx.fillText('(e.g. Wheat, Clover)', w*0.5, h*0.14);
  ctx.textAlign = 'left';
  ctx.fillStyle = '#FFD700';
  ctx.fillRect(w*0.1, h*0.3, w*0.6, h*0.08);
  ctx.fillStyle = '#1A1A3A';
  ctx.fillRect(w*0.7, h*0.3, w*0.2, h*0.08);
  ctx.fillStyle = '#FFFFFF';
  ctx.font = `${h*0.036}px Arial`;
  ctx.textAlign = 'center';
  ctx.fillText('Long day / Short night → FLOWERS ✓', w*0.5, h*0.5);
  ctx.fillStyle = '#FFD700';
  ctx.fillRect(w*0.1, h*0.6, w*0.3, h*0.08);
  ctx.fillStyle = '#1A1A3A';
  ctx.fillRect(w*0.4, h*0.6, w*0.5, h*0.08);
  ctx.fillStyle = '#FFFFFF';
  ctx.fillText('Short day / Long night → NO FLOWER ✗', w*0.5, h*0.8);
  ctx.textAlign = 'left';
}

static drawDayNeutralPlant(ctx, w, h) {
  ctx.fillStyle = '#050818';
  ctx.fillRect(0, 0, w, h);
  ctx.fillStyle = '#FFFFFF';
  ctx.font = `bold ${h*0.06}px Arial`;
  ctx.textAlign = 'center';
  ctx.fillText('Day-Neutral Plant', w*0.5, h*0.08);
  ctx.font = `${h*0.038}px Arial`;
  ctx.fillText('(e.g. Tomato, Cucumber)', w*0.5, h*0.14);
  ctx.textAlign = 'left';
  // Two bars both flowering
  [[0.3,0.7],[0.6,0.4],[0.5,0.5]].forEach(([light, dark], i) => {
    ctx.fillStyle = '#FFD700';
    ctx.fillRect(w*0.1, h*(0.25+i*0.23), w*light*0.8, h*0.07);
    ctx.fillStyle = '#1A1A3A';
    ctx.fillRect(w*(0.1+light*0.8), h*(0.25+i*0.23), w*dark*0.8, h*0.07);
    ctx.fillStyle = '#FFFFFF';
    ctx.font = `${h*0.032}px Arial`;
    ctx.textAlign = 'center';
    ctx.fillText('→ FLOWERS ✓', w*0.5, h*(0.38+i*0.23));
  });
  ctx.font = `${h*0.038}px Arial`;
  ctx.fillText('Flowers regardless of photoperiod', w*0.5, h*0.9);
  ctx.textAlign = 'left';
}

// ===== NUTRIENT UPTAKE =====
static drawNutrientUptake(ctx, x, y, width, height, type, process) {
  ctx.save();
  ctx.translate(x, y);

  switch(type) {
    case 'active':
      this.drawActiveUptake(ctx, width, height);
      break;
    case 'passive':
      this.drawPassiveUptake(ctx, width, height);
      break;
    case 'complete':
    default:
      this.drawCompleteNutrientUptake(ctx, width, height, process);
      break;
  }

  ctx.restore();
}

static drawCompleteNutrientUptake(ctx, w, h, process) {
  ctx.fillStyle = '#050818';
  ctx.fillRect(0, 0, w, h);

  // Soil background
  ctx.fillStyle = '#5A3A10';
  ctx.fillRect(0, 0, w, h*0.5);

  ctx.fillStyle = '#FFFFFF';
  ctx.font = `bold ${h*0.053}px Arial`;
  ctx.textAlign = 'center';
  ctx.fillText('Mineral/Nutrient Uptake', w*0.5, h*0.06);
  ctx.textAlign = 'left';

  // Root hair cross section
  const rhy = h*0.35;
  ctx.fillStyle = '#C8E6A0';
  ctx.strokeStyle = '#5A7D3E';
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.ellipse(w*0.5, rhy, w*0.2, h*0.18, 0, 0, Math.PI*2);
  ctx.fill(); ctx.stroke();

  // Root hair extension
  ctx.beginPath();
  ctx.moveTo(w*0.7, rhy - h*0.03);
  ctx.bezierCurveTo(w*0.78, rhy-h*0.04, w*0.84, rhy-h*0.01, w*0.86, rhy+h*0.02);
  ctx.bezierCurveTo(w*0.84, rhy+h*0.05, w*0.78, rhy+h*0.04, w*0.7, rhy+h*0.03);
  ctx.closePath();
  ctx.fill(); ctx.stroke();

  // Proton pump (ATPase) on membrane
  ctx.fillStyle = '#FF6633';
  ctx.beginPath();
  ctx.rect(w*0.29, rhy - h*0.015, w*0.04, h*0.03);
  ctx.fill();
  ctx.fillStyle = '#FFFFFF';
  ctx.font = `${h*0.026}px Arial`;
  ctx.textAlign = 'center';
  ctx.fillText('H⁺-ATPase', w*0.31, rhy + h*0.005);
  ctx.textAlign = 'left';

  // Ion channels on membrane
  ctx.fillStyle = '#4488CC';
  [[0.38,0],[0.44,0],[0.56,0],[0.62,0]].forEach(([rx]) => {
    ctx.beginPath();
    ctx.rect(rx*w, rhy - h*0.015, w*0.025, h*0.03);
    ctx.fill();
  });

  // Mineral ions in soil
  const ions = [
    {x:0.08,y:0.15,label:'NO₃⁻',color:'#88CC44'},
    {x:0.2,y:0.1,label:'K⁺',color:'#FFAA44'},
    {x:0.35,y:0.08,label:'PO₄³⁻',color:'#FF6688'},
    {x:0.6,y:0.1,label:'Ca²⁺',color:'#44CCCC'},
    {x:0.75,y:0.15,label:'Mg²⁺',color:'#AAFF44'},
    {x:0.88,y:0.08,label:'Fe²⁺',color:'#CC8844'},
  ];
  ions.forEach(ion => {
    ctx.fillStyle = ion.color;
    ctx.beginPath(); ctx.arc(ion.x*w, ion.y*h, w*0.025, 0, Math.PI*2); ctx.fill();
    ctx.fillStyle = '#000000';
    ctx.font = `bold ${h*0.028}px Arial`;
    ctx.textAlign = 'center';
    ctx.fillText(ion.label, ion.x*w, ion.y*h + h*0.01);
    ctx.textAlign = 'left';
    // Arrow toward root
    ctx.strokeStyle = ion.color;
    ctx.lineWidth = 1.5;
    ctx.setLineDash([4,3]);
    const dx = w*0.5 - ion.x*w, dy = rhy - ion.y*h;
    const len = Math.sqrt(dx*dx+dy*dy);
    ctx.beginPath();
    ctx.moveTo(ion.x*w, ion.y*h);
    ctx.lineTo(ion.x*w + dx*0.5, ion.y*h + dy*0.5);
    ctx.stroke();
    ctx.setLineDash([]);
  });

  // Macronutrient vs micronutrient table
  const tableX = w*0.02, tableY = h*0.62;
  ctx.fillStyle = 'rgba(255,255,255,0.1)';
  ctx.beginPath();
  ctx.roundRect(tableX, tableY, w*0.46, h*0.32, w*0.01);
  ctx.fill();
  ctx.fillStyle = '#FFFFFF';
  ctx.font = `bold ${h*0.038}px Arial`;
  ctx.fillText('Macronutrients', tableX + w*0.02, tableY + h*0.055);
  ctx.font = `${h*0.03}px Arial`;
  ['N, P, K, Ca, Mg, S'].forEach((item, i) => {
    ctx.fillText('• ' + item, tableX + w*0.03, tableY + h*0.11 + i*h*0.04);
  });
  ctx.font = `bold ${h*0.038}px Arial`;
  ctx.fillText('Micronutrients', tableX + w*0.24, tableY + h*0.055);
  ctx.font = `${h*0.03}px Arial`;
  ['Fe, Mn, Zn,', 'Cu, B, Mo, Cl'].forEach((item, i) => {
    ctx.fillText('• ' + item, tableX + w*0.25, tableY + h*0.11 + i*h*0.06);
  });

  // Active vs passive legend
  ctx.fillStyle = '#FF6633';
  ctx.fillRect(w*0.5, tableY + h*0.05, w*0.06, h*0.035);
  ctx.fillStyle = '#FFFFFF';
  ctx.font = `${h*0.03}px Arial`;
  ctx.fillText('Active transport (ATPase)', w*0.57, tableY + h*0.075);
  ctx.fillStyle = '#4488CC';
  ctx.fillRect(w*0.5, tableY + h*0.1, w*0.06, h*0.035);
  ctx.fillText('Channel proteins', w*0.57, tableY + h*0.125);

  ctx.fillStyle = '#FFFFFF';
  ctx.font = `bold ${h*0.052}px Arial`;
  ctx.fillText('Nutrient Uptake System', w*0.22, h*0.06);
}

static drawActiveUptake(ctx, w, h) {
  ctx.fillStyle = '#050818';
  ctx.fillRect(0, 0, w, h);
  ctx.fillStyle = '#FFFFFF';
  ctx.font = `bold ${h*0.055}px Arial`;
  ctx.textAlign = 'center';
  ctx.fillText('Active Transport', w*0.5, h*0.07);
  ctx.textAlign = 'left';
  // Membrane
  ctx.fillStyle = '#3A1A5A';
  ctx.fillRect(0, h*0.4, w, h*0.12);
  ctx.fillStyle = '#5A2A7A';
  ctx.font = `${h*0.033}px Arial`;
  ctx.textAlign = 'center';
  ctx.fillText('Plasma Membrane', w*0.5, h*0.48);
  ctx.textAlign = 'left';
  // Carrier protein
  ctx.fillStyle = '#FF6633';
  ctx.strokeStyle = '#CC3300';
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.rect(w*0.44, h*0.36, w*0.12, h*0.2);
  ctx.fill(); ctx.stroke();
  ctx.fillStyle = '#FFFFFF';
  ctx.font = `${h*0.032}px Arial`;
  ctx.textAlign = 'center';
  ctx.fillText('Carrier', w*0.5, h*0.45);
  ctx.fillText('protein', w*0.5, h*0.49);
  ctx.textAlign = 'left';
  // ATP → ADP
  ctx.fillStyle = '#FFD700';
  ctx.font = `${h*0.038}px Arial`;
  ctx.textAlign = 'center';
  ctx.fillText('ATP', w*0.35, h*0.3);
  ctx.fillText('ADP + Pi', w*0.65, h*0.3);
  ctx.strokeStyle = '#FFD700';
  ctx.lineWidth = 2;
  ctx.beginPath(); ctx.moveTo(w*0.42, h*0.36); ctx.lineTo(w*0.38, h*0.32); ctx.stroke();
  ctx.beginPath(); ctx.moveTo(w*0.58, h*0.36); ctx.lineTo(w*0.62, h*0.32); ctx.stroke();
  // Ion moving against gradient
  ctx.fillStyle = '#44CCCC';
  ctx.beginPath(); ctx.arc(w*0.5, h*0.24, w*0.03, 0, Math.PI*2); ctx.fill();
  ctx.strokeStyle = '#44CCCC';
  ctx.lineWidth = 2.5;
  ctx.beginPath(); ctx.moveTo(w*0.5, h*0.27); ctx.lineTo(w*0.5, h*0.37); ctx.stroke();
  ctx.fillStyle = '#44CCCC';
  ctx.beginPath(); ctx.moveTo(w*0.5,h*0.38); ctx.lineTo(w*0.46,h*0.33); ctx.lineTo(w*0.54,h*0.33); ctx.closePath(); ctx.fill();
  ctx.fillStyle = '#FFFFFF';
  ctx.font = `${h*0.034}px Arial`;
  ctx.textAlign = 'center';
  ctx.fillText('Ion moves against concentration gradient', w*0.5, h*0.82);
  ctx.fillText('Requires energy (ATP)', w*0.5, h*0.88);
  ctx.textAlign = 'left';
}

static drawPassiveUptake(ctx, w, h) {
  ctx.fillStyle = '#050818';
  ctx.fillRect(0, 0, w, h);
  ctx.fillStyle = '#FFFFFF';
  ctx.font = `bold ${h*0.055}px Arial`;
  ctx.textAlign = 'center';
  ctx.fillText('Passive Transport', w*0.5, h*0.07);
  ctx.textAlign = 'left';
  ctx.fillStyle = '#3A1A5A';
  ctx.fillRect(0, h*0.4, w, h*0.12);
  ctx.fillStyle = '#5A2A7A';
  ctx.font = `${h*0.033}px Arial`;
  ctx.textAlign = 'center';
  ctx.fillText('Plasma Membrane', w*0.5, h*0.48);
  ctx.textAlign = 'left';
  // Channel protein
  ctx.fillStyle = '#4488CC';
  ctx.strokeStyle = '#2255AA';
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.rect(w*0.44, h*0.36, w*0.12, h*0.2);
  ctx.fill(); ctx.stroke();
  ctx.fillStyle = '#FFFFFF';
  ctx.font = `${h*0.032}px Arial`;
  ctx.textAlign = 'center';
  ctx.fillText('Channel', w*0.5, h*0.46);
  ctx.textAlign = 'left';
  // Concentration gradient
  ctx.fillStyle = '#FFD700';
  ctx.font = `${h*0.036}px Arial`;
  ctx.textAlign = 'center';
  ctx.fillText('HIGH', w*0.5, h*0.22);
  ctx.fillText('concentration', w*0.5, h*0.27);
  ctx.fillText('LOW', w*0.5, h*0.72);
  // Ion moving with gradient
  ctx.strokeStyle = '#88CCFF';
  ctx.lineWidth = 2.5;
  ctx.beginPath(); ctx.moveTo(w*0.5, h*0.3); ctx.lineTo(w*0.5, h*0.37); ctx.stroke();
  ctx.fillStyle = '#88CCFF';
  ctx.beginPath(); ctx.moveTo(w*0.5,h*0.38); ctx.lineTo(w*0.46,h*0.33); ctx.lineTo(w*0.54,h*0.33); ctx.closePath(); ctx.fill();
  ctx.beginPath(); ctx.arc(w*0.5, h*0.28, w*0.025, 0, Math.PI*2); ctx.fill();
  ctx.fillStyle = '#FFFFFF';
  ctx.font = `${h*0.034}px Arial`;
  ctx.fillText('Ion moves with concentration gradient', w*0.5, h*0.84);
  ctx.fillText('No energy required', w*0.5, h*0.9);
  ctx.textAlign = 'left';
}

// ===== NITROGEN CYCLE =====
static drawNitrogenCycle(ctx, x, y, width, height, stage, process) {
  ctx.save();
  ctx.translate(x, y);

  switch(stage) {
    case 'fixation':
      this.drawNitrogenFixation(ctx, width, height);
      break;
    case 'complete':
    default:
      this.drawCompleteNitrogenCycle(ctx, width, height, process);
      break;
  }

  ctx.restore();
}

static drawCompleteNitrogenCycle(ctx, w, h, process) {
  ctx.fillStyle = '#050818';
  ctx.fillRect(0, 0, w, h);

  ctx.fillStyle = '#FFFFFF';
  ctx.font = `bold ${h*0.053}px Arial`;
  ctx.textAlign = 'center';
  ctx.fillText('Nitrogen Cycle', w*0.5, h*0.06);
  ctx.textAlign = 'left';

  const nodes = [
    {x:0.5,  y:0.12, label:'N₂\n(atmosphere)', color:'#4488CC', r:0.07},
    {x:0.15, y:0.35, label:'NH₄⁺\n(ammonium)',  color:'#88AA44', r:0.065},
    {x:0.82, y:0.35, label:'NO₂⁻\n(nitrite)',   color:'#AACC44', r:0.055},
    {x:0.82, y:0.6,  label:'NO₃⁻\n(nitrate)',   color:'#44CC88', r:0.065},
    {x:0.5,  y:0.72, label:'Plant\nprotein',     color:'#7AB840', r:0.07},
    {x:0.18, y:0.6,  label:'Organic\nN (soil)',  color:'#CC8844', r:0.065},
    {x:0.5,  y:0.45, label:'Animal\nprotein',    color:'#CC4488', r:0.065},
  ];

  // Draw connections first
  const connections = [
    [0,1,'Nitrogen fixation\n(Rhizobium)','#88AA44'],
    [1,4,'Uptake by roots','#7AB840'],
    [4,6,'Consumption','#CC4488'],
    [6,5,'Decomposition','#CC8844'],
    [5,1,'Ammonification','#88AA44'],
    [1,2,'Nitrification\n(Nitrosomonas)','#AACC44'],
    [2,3,'Nitrification\n(Nitrobacter)','#44CC88'],
    [3,4,'Root uptake','#7AB840'],
    [3,0,'Denitrification\n(anaerobic)','#4488CC'],
  ];

  connections.forEach(([from, to, label, color]) => {
    const fn = nodes[from], tn = nodes[to];
    ctx.strokeStyle = color;
    ctx.lineWidth = 2;
    ctx.setLineDash([5,3]);
    ctx.beginPath();
    ctx.moveTo(fn.x*w, fn.y*h);
    ctx.lineTo(tn.x*w, tn.y*h);
    ctx.stroke();
    ctx.setLineDash([]);
    // Arrow
    const dx = tn.x - fn.x, dy = tn.y - fn.y;
    const len = Math.sqrt(dx*dx+dy*dy);
    const mx = (fn.x + tn.x)*0.5*w, my = (fn.y + tn.y)*0.5*h;
    const angle = Math.atan2(dy*h, dx*w);
    ctx.fillStyle = color;
    ctx.beginPath();
    ctx.moveTo(mx + Math.cos(angle)*w*0.03, my + Math.sin(angle)*h*0.03);
    ctx.lineTo(mx + Math.cos(angle-0.5)*w*0.02, my + Math.sin(angle-0.5)*h*0.02);
    ctx.lineTo(mx + Math.cos(angle+0.5)*w*0.02, my + Math.sin(angle+0.5)*h*0.02);
    ctx.closePath(); ctx.fill();
    // Label (mid-point)
    ctx.fillStyle = color;
    ctx.font = `${h*0.026}px Arial`;
    ctx.textAlign = 'center';
    label.split('\n').forEach((line, li) => {
      ctx.fillText(line, mx + Math.cos(angle + Math.PI*0.5)*w*0.05, my + Math.sin(angle + Math.PI*0.5)*h*0.05 + li*h*0.025);
    });
    ctx.textAlign = 'left';
  });

  // Draw nodes
  nodes.forEach(node => {
    ctx.fillStyle = node.color;
    ctx.strokeStyle = 'rgba(255,255,255,0.4)';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.arc(node.x*w, node.y*h, node.r*w, 0, Math.PI*2);
    ctx.fill(); ctx.stroke();

    ctx.fillStyle = '#000000';
    ctx.font = `bold ${h*0.03}px Arial`;
    ctx.textAlign = 'center';
    node.label.split('\n').forEach((line, li) => {
      ctx.fillText(line, node.x*w, node.y*h + li*h*0.03 - h*0.01);
    });
    ctx.textAlign = 'left';
  });
}

static drawNitrogenFixation(ctx, w, h) {
  ctx.fillStyle = '#050818';
  ctx.fillRect(0, 0, w, h);
  ctx.fillStyle = '#6B4A10';
  ctx.fillRect(0, h*0.55, w, h*0.45);

  ctx.fillStyle = '#FFFFFF';
  ctx.font = `bold ${h*0.055}px Arial`;
  ctx.textAlign = 'center';
  ctx.fillText('Nitrogen Fixation', w*0.5, h*0.07);
  ctx.textAlign = 'left';

  // Legume root
  ctx.fillStyle = '#C8A050';
  ctx.strokeStyle = '#8B6020';
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.moveTo(w*0.45, h*0.55);
  ctx.bezierCurveTo(w*0.42,h*0.7,w*0.44,h*0.85,w*0.43,h*0.95);
  ctx.lineTo(w*0.53,h*0.95);
  ctx.bezierCurveTo(w*0.54,h*0.85,w*0.56,h*0.7,w*0.53,h*0.55);
  ctx.closePath();
  ctx.fill(); ctx.stroke();

  // Root nodules
  const nodulePositions = [{x:0.42,y:0.7},{x:0.45,y:0.8},{x:0.53,y:0.75},{x:0.55,y:0.65}];
  nodulePositions.forEach(np => {
    ctx.fillStyle = '#E8A840';
    ctx.strokeStyle = '#AA7020';
    ctx.lineWidth = 1.5;
    ctx.beginPath();
    ctx.arc(np.x*w, np.y*h, w*0.04, 0, Math.PI*2);
    ctx.fill(); ctx.stroke();
    // Bacteria inside
    ctx.fillStyle = '#CC4422';
    ctx.font = `${h*0.025}px Arial`;
    ctx.textAlign = 'center';
    ctx.fillText('Rhiz.', np.x*w, np.y*h + h*0.008);
    ctx.textAlign = 'left';
  });

  // N2 → NH4 arrow
  ctx.strokeStyle = '#88CC44';
  ctx.lineWidth = 3;
  ctx.beginPath();
  ctx.moveTo(w*0.5, h*0.15);
  ctx.lineTo(w*0.5, h*0.55);
  ctx.stroke();
  ctx.fillStyle = '#88CC44';
  ctx.beginPath();
  ctx.moveTo(w*0.5, h*0.57);
  ctx.lineTo(w*0.46, h*0.51);
  ctx.lineTo(w*0.54, h*0.51);
  ctx.closePath(); ctx.fill();
  ctx.fillStyle = '#FFFFFF';
  ctx.font = `${h*0.04}px Arial`;
  ctx.textAlign = 'center';
  ctx.fillText('N₂ + 8H⁺ + 8e⁻ + 16ATP', w*0.5, h*0.18);
  ctx.fillText('nitrogenase enzyme', w*0.5, h*0.24);
  ctx.fillText('↓', w*0.5, h*0.3);
  ctx.fillText('2NH₃ + H₂ + 16ADP', w*0.5, h*0.36);
  ctx.textAlign = 'left';
}

// ===== C4 PHOTOSYNTHESIS =====
static drawC4Photosynthesis(ctx, x, y, width, height, detail, process) {
  ctx.save();
  ctx.translate(x, y);

  switch(detail) {
    case 'anatomy':
      this.drawKranzAnatomy(ctx, width, height);
      break;
    case 'pathway':
      this.drawC4Pathway(ctx, width, height);
      break;
    case 'complete':
    default:
      this.drawCompleteC4(ctx, width, height, process);
      break;
  }

  ctx.restore();
}

static drawCompleteC4(ctx, w, h, process) {
  ctx.fillStyle = '#050818';
  ctx.fillRect(0, 0, w, h);

  ctx.fillStyle = '#FFFFFF';
  ctx.font = `bold ${h*0.053}px Arial`;
  ctx.textAlign = 'center';
  ctx.fillText('C4 Photosynthesis', w*0.5, h*0.06);
  ctx.textAlign = 'left';

  // Mesophyll cell (left)
  ctx.fillStyle = '#3A6820';
  ctx.strokeStyle = '#2A4810';
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.roundRect(w*0.04, h*0.15, w*0.38, h*0.65, w*0.02);
  ctx.fill(); ctx.stroke();

  ctx.fillStyle = '#FFFFFF';
  ctx.font = `bold ${h*0.04}px Arial`;
  ctx.textAlign = 'center';
  ctx.fillText('Mesophyll Cell', w*0.23, h*0.22);
  ctx.textAlign = 'left';

  // Bundle sheath cell (right)
  ctx.fillStyle = '#2A5818';
  ctx.strokeStyle = '#1A3808';
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.roundRect(w*0.58, h*0.15, w*0.38, h*0.65, w*0.02);
  ctx.fill(); ctx.stroke();

  ctx.fillStyle = '#FFFFFF';
  ctx.font = `bold ${h*0.04}px Arial`;
  ctx.textAlign = 'center';
  ctx.fillText('Bundle Sheath Cell', w*0.77, h*0.22);
  ctx.textAlign = 'left';

  // C4 cycle steps
  const drawStep = (cellX, y, text, color) => {
    ctx.fillStyle = color;
    ctx.strokeStyle = 'rgba(255,255,255,0.3)';
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.roundRect(cellX, y, w*0.33, h*0.1, w*0.01);
    ctx.fill(); ctx.stroke();
    ctx.fillStyle = '#FFFFFF';
    ctx.font = `${h*0.034}px Arial`;
    ctx.textAlign = 'center';
    ctx.fillText(text, cellX + w*0.165, y + h*0.06);
    ctx.textAlign = 'left';
  };

  // Mesophyll steps
  drawStep(w*0.055, h*0.3, 'CO₂ + PEP → OAA (4C)', '#2A5A30');
  drawStep(w*0.055, h*0.5, 'OAA → Malate/Aspartate', '#2A5A30');
  drawStep(w*0.055, h*0.68, '3C returns (pyruvate/PEP)', '#2A5A30');

  // Bundle sheath steps
  drawStep(w*0.605, h*0.3, 'Malate → CO₂ + pyruvate', '#1A4820');
  drawStep(w*0.605, h*0.5, 'CO₂ → Calvin Cycle (C3)', '#1A4820');
  drawStep(w*0.605, h*0.68, '← Pyruvate returns', '#1A4820');

  // Transfer arrows between cells
  ctx.strokeStyle = '#FFD700';
  ctx.lineWidth = 3;
  ctx.beginPath();
  ctx.moveTo(w*0.42, h*0.42);
  ctx.lineTo(w*0.58, h*0.42);
  ctx.stroke();
  ctx.fillStyle = '#FFD700';
  ctx.beginPath();
  ctx.moveTo(w*0.59, h*0.42);
  ctx.lineTo(w*0.54, h*0.39);
  ctx.lineTo(w*0.54, h*0.45);
  ctx.closePath(); ctx.fill();
  ctx.fillStyle = '#FFD700';
  ctx.font = `${h*0.032}px Arial`;
  ctx.textAlign = 'center';
  ctx.fillText('4C compound', w*0.5, h*0.4);
  ctx.textAlign = 'left';

  ctx.strokeStyle = '#88CCFF';
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.moveTo(w*0.58, h*0.72);
  ctx.lineTo(w*0.42, h*0.72);
  ctx.stroke();
  ctx.fillStyle = '#88CCFF';
  ctx.beginPath();
  ctx.moveTo(w*0.41, h*0.72);
  ctx.lineTo(w*0.46, h*0.69);
  ctx.lineTo(w*0.46, h*0.75);
  ctx.closePath(); ctx.fill();
  ctx.fillStyle = '#88CCFF';
  ctx.font = `${h*0.032}px Arial`;
  ctx.textAlign = 'center';
  ctx.fillText('3C return', w*0.5, h*0.7);
  ctx.textAlign = 'left';

  // PEP carboxylase label
  ctx.fillStyle = '#FFDD44';
  ctx.font = `${h*0.03}px Arial`;
  ctx.fillText('PEP carboxylase', w*0.06, h*0.27);
  ctx.fillText('(high CO₂ affinity)', w*0.06, h*0.31);

  // RuBisCO label
  ctx.fillText('RuBisCO (C3 cycle)', w*0.61, h*0.27);
  ctx.fillText('(concentrated CO₂)', w*0.61, h*0.31);

  // Benefit note
  ctx.fillStyle = '#AAFFAA';
  ctx.font = `${h*0.033}px Arial`;
  ctx.textAlign = 'center';
  ctx.fillText('Benefit: concentrates CO₂ around RuBisCO → reduces photorespiration', w*0.5, h*0.9);
  ctx.fillText('(Efficient in hot, dry, high-light conditions: corn, sugarcane)', w*0.5, h*0.95);
  ctx.textAlign = 'left';
}

static drawKranzAnatomy(ctx, w, h) {
  ctx.fillStyle = '#050818';
  ctx.fillRect(0, 0, w, h);
  ctx.fillStyle = '#FFFFFF';
  ctx.font = `bold ${h*0.055}px Arial`;
  ctx.textAlign = 'center';
  ctx.fillText('Kranz Anatomy (C4 leaf)', w*0.5, h*0.07);
  ctx.textAlign = 'left';
  // Bundle sheath ring
  ctx.fillStyle = '#1A4818';
  ctx.strokeStyle = '#0A2808';
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.arc(w*0.5, h*0.5, w*0.3, 0, Math.PI*2);
  ctx.fill(); ctx.stroke();
  // Mesophyll ring
  ctx.fillStyle = '#3A6828';
  ctx.beginPath();
  ctx.arc(w*0.5, h*0.5, w*0.42, 0, Math.PI*2);
  ctx.fill();
  // Bundle sheath re-draw (on top)
  ctx.fillStyle = '#1A4818';
  ctx.beginPath();
  ctx.arc(w*0.5, h*0.5, w*0.28, 0, Math.PI*2);
  ctx.fill();
  // Vascular bundle center
  ctx.fillStyle = '#8B4513';
  ctx.beginPath();
  ctx.arc(w*0.5, h*0.5, w*0.12, 0, Math.PI*2);
  ctx.fill();
  ctx.fillStyle = '#B04020';
  ctx.beginPath();
  ctx.arc(w*0.5, h*0.5, w*0.07, 0, Math.PI*2);
  ctx.fill();
  // Chloroplast symbols in bundle sheath
  ctx.fillStyle = '#2A7A20';
  for(let i=0; i<8; i++) {
    const angle = (i/8)*Math.PI*2;
    ctx.beginPath();
    ctx.ellipse(w*0.5 + Math.cos(angle)*w*0.22, h*0.5 + Math.sin(angle)*h*0.22, w*0.025, h*0.018, angle, 0, Math.PI*2);
    ctx.fill();
  }
  // Chloroplast symbols in mesophyll
  ctx.fillStyle = '#4A8A38';
  for(let i=0; i<12; i++) {
    const angle = (i/12)*Math.PI*2;
    ctx.beginPath();
    ctx.ellipse(w*0.5 + Math.cos(angle)*w*0.36, h*0.5 + Math.sin(angle)*h*0.36, w*0.02, h*0.015, angle, 0, Math.PI*2);
    ctx.fill();
  }
  ctx.fillStyle = '#FFFFFF';
  ctx.font = `${h*0.036}px Arial`;
  ctx.textAlign = 'center';
  ctx.fillText('Bundle sheath cells', w*0.5, h*0.5);
  ctx.fillText('(agranal chloroplasts)', w*0.5, h*0.56);
  ctx.fillText('Mesophyll cells', w*0.5, h*0.88);
  ctx.fillText('Vascular bundle', w*0.5, h*0.16);
  ctx.textAlign = 'left';
}

static drawC4Pathway(ctx, w, h) {
  ctx.fillStyle = '#050818';
  ctx.fillRect(0, 0, w, h);
  ctx.fillStyle = '#FFFFFF';
  ctx.font = `bold ${h*0.055}px Arial`;
  ctx.textAlign = 'center';
  ctx.fillText('C4 Pathway Detail', w*0.5, h*0.06);
  ctx.textAlign = 'left';

  const drawBox = (bx, by, bw, bh, color, text) => {
    ctx.fillStyle = color;
    ctx.strokeStyle = 'rgba(255,255,255,0.3)';
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.roundRect(bx, by, bw, bh, w*0.01);
    ctx.fill(); ctx.stroke();
    ctx.fillStyle = '#FFFFFF';
    ctx.font = `${h*0.032}px Arial`;
    ctx.textAlign = 'center';
    text.split('\n').forEach((line, li) => {
      ctx.fillText(line, bx + bw*0.5, by + bh*0.45 + li*h*0.034);
    });
    ctx.textAlign = 'left';
  };

  const drawArrow = (x1, y1, x2, y2, label, color = '#FFFFFF') => {
    ctx.strokeStyle = color;
    ctx.fillStyle = color;
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(x1*w, y1*h);
    ctx.lineTo(x2*w, y2*h);
    ctx.stroke();
    const angle = Math.atan2((y2-y1)*h, (x2-x1)*w);
    ctx.beginPath();
    ctx.moveTo(x2*w, y2*h);
    ctx.lineTo(x2*w - Math.cos(angle-0.4)*w*0.025, y2*h - Math.sin(angle-0.4)*h*0.025);
    ctx.lineTo(x2*w - Math.cos(angle+0.4)*w*0.025, y2*h - Math.sin(angle+0.4)*h*0.025);
    ctx.closePath(); ctx.fill();
    if(label) {
      ctx.fillStyle = color;
      ctx.font = `${h*0.028}px Arial`;
      ctx.textAlign = 'center';
      ctx.fillText(label, ((x1+x2)/2)*w, ((y1+y2)/2)*h - h*0.015);
      ctx.textAlign = 'left';
    }
  };

  const bw = w*0.3, bh = h*0.09;

  // Mesophyll column
  ctx.fillStyle = 'rgba(50,100,40,0.2)';
  ctx.strokeStyle = '#3A6820';
  ctx.lineWidth = 1.5;
  ctx.beginPath();
  ctx.roundRect(w*0.03, h*0.1, w*0.38, h*0.82, w*0.01);
  ctx.fill(); ctx.stroke();
  ctx.fillStyle = '#7AB840';
  ctx.font = `bold ${h*0.038}px Arial`;
  ctx.textAlign = 'center';
  ctx.fillText('Mesophyll', w*0.22, h*0.16);
  ctx.textAlign = 'left';

  // Bundle sheath column
  ctx.fillStyle = 'rgba(25,70,25,0.2)';
  ctx.strokeStyle = '#1A4818';
  ctx.lineWidth = 1.5;
  ctx.beginPath();
  ctx.roundRect(w*0.59, h*0.1, w*0.38, h*0.82, w*0.01);
  ctx.fill(); ctx.stroke();
  ctx.fillStyle = '#3ABA30';
  ctx.font = `bold ${h*0.038}px Arial`;
  ctx.textAlign = 'center';
  ctx.fillText('Bundle Sheath', w*0.78, h*0.16);
  ctx.textAlign = 'left';

  // Mesophyll molecules
  drawBox(w*0.06, h*0.2,  bw, bh, '#2A5A30', 'CO₂ + PEP (3C)');
  drawBox(w*0.06, h*0.38, bw, bh, '#2A6A30', 'OAA (4C)\noxaloacetate');
  drawBox(w*0.06, h*0.56, bw, bh, '#2A7A30', 'Malate / Aspartate\n(4C)');
  drawBox(w*0.06, h*0.74, bw, bh, '#1A5A20', 'Pyruvate (3C)\n→ PEP (ATP used)');

  // Bundle sheath molecules
  drawBox(w*0.62, h*0.2,  bw, bh, '#1A4820', 'Malate / Aspartate\n(4C) arrives');
  drawBox(w*0.62, h*0.38, bw, bh, '#1A5820', 'CO₂ released\n+ Pyruvate (3C)');
  drawBox(w*0.62, h*0.56, bw, bh, '#1A6820', 'CO₂ → Calvin Cycle\n(RuBisCO + RuBP)');
  drawBox(w*0.62, h*0.74, bw, bh, '#0A4818', 'Pyruvate → back\nto mesophyll');

  // Mesophyll arrows
  drawArrow(0.22, 0.29, 0.22, 0.38, 'PEP carboxylase', '#88FF88');
  drawArrow(0.22, 0.47, 0.22, 0.56, 'NADP-malate DH', '#88FF88');
  drawArrow(0.22, 0.65, 0.22, 0.74, '', '#88FF88');

  // Transfer arrows
  drawArrow(0.36, 0.60, 0.62, 0.24, '4C transfer →', '#FFD700');
  drawArrow(0.62, 0.78, 0.36, 0.78, '← 3C return', '#88CCFF');

  // Bundle sheath arrows
  drawArrow(0.78, 0.29, 0.78, 0.38, 'decarboxylation', '#AAFFAA');
  drawArrow(0.78, 0.47, 0.78, 0.56, '→ Calvin cycle', '#AAFFAA');
  drawArrow(0.78, 0.65, 0.78, 0.74, '', '#AAFFAA');
}

// ===== CAM PHOTOSYNTHESIS =====
static drawCAMPhotosynthesis(ctx, x, y, width, height, detail, process) {
  ctx.save();
  ctx.translate(x, y);

  switch(detail) {
    case 'night':
      this.drawCAMNight(ctx, width, height);
      break;
    case 'day':
      this.drawCAMDay(ctx, width, height);
      break;
    case 'graph':
      this.drawCAMGraph(ctx, width, height);
      break;
    case 'complete':
    default:
      this.drawCompleteCAM(ctx, width, height, process);
      break;
  }

  ctx.restore();
}

static drawCompleteCAM(ctx, w, h, process) {
  ctx.fillStyle = '#050818';
  ctx.fillRect(0, 0, w, h);

  ctx.fillStyle = '#FFFFFF';
  ctx.font = `bold ${h*0.053}px Arial`;
  ctx.textAlign = 'center';
  ctx.fillText('CAM Photosynthesis (Temporal Separation)', w*0.5, h*0.06);
  ctx.textAlign = 'left';

  // Night panel (left)
  ctx.fillStyle = 'rgba(10,10,30,0.8)';
  ctx.strokeStyle = '#2244AA';
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.roundRect(w*0.02, h*0.1, w*0.46, h*0.58, w*0.01);
  ctx.fill(); ctx.stroke();

  // Night sky
  ctx.fillStyle = '#AACCFF';
  ctx.font = `${h*0.06}px Arial`;
  ctx.textAlign = 'center';
  ctx.fillText('🌙', w*0.12, h*0.22);
  ctx.fillStyle = '#FFFFFF';
  ctx.font = `bold ${h*0.042}px Arial`;
  ctx.fillText('NIGHT', w*0.25, h*0.18);

  // Stomata open at night
  ctx.fillStyle = '#88CCFF';
  ctx.font = `${h*0.034}px Arial`;
  ctx.fillText('Stomata OPEN', w*0.25, h*0.27);
  // Open stoma drawing
  ctx.fillStyle = '#44AA44';
  ctx.strokeStyle = '#226622';
  ctx.lineWidth = 1.5;
  ctx.beginPath();
  ctx.ellipse(w*0.14, h*0.34, w*0.025, h*0.015, 0, 0, Math.PI*2);
  ctx.fill(); ctx.stroke();
  ctx.beginPath();
  ctx.ellipse(w*0.2, h*0.34, w*0.025, h*0.015, 0, 0, Math.PI*2);
  ctx.fill(); ctx.stroke();
  ctx.fillStyle = '#88CCFF';
  ctx.beginPath();
  ctx.ellipse(w*0.17, h*0.34, w*0.012, h*0.008, 0, 0, Math.PI*2);
  ctx.fill();

  // CO2 enters
  ctx.strokeStyle = '#FF8844';
  ctx.lineWidth = 2;
  ctx.setLineDash([4,3]);
  ctx.beginPath();
  ctx.moveTo(w*0.06, h*0.37);
  ctx.lineTo(w*0.14, h*0.36);
  ctx.stroke();
  ctx.setLineDash([]);
  ctx.fillStyle = '#FF8844';
  ctx.font = `${h*0.034}px Arial`;
  ctx.fillText('CO₂ in', w*0.03, h*0.35);

  // Reaction box
  ctx.fillStyle = 'rgba(68,136,44,0.3)';
  ctx.strokeStyle = '#44AA44';
  ctx.lineWidth = 1;
  ctx.beginPath();
  ctx.roundRect(w*0.06, h*0.42, w*0.38, h*0.2, w*0.01);
  ctx.fill(); ctx.stroke();
  ctx.fillStyle = '#CCFFAA';
  ctx.font = `${h*0.033}px Arial`;
  ctx.textAlign = 'center';
  ctx.fillText('CO₂ + PEP → OAA', w*0.25, h*0.49);
  ctx.fillText('OAA → Malate (4C)', w*0.25, h*0.54);
  ctx.fillText('Malate stored in vacuole', w*0.25, h*0.59);
  ctx.textAlign = 'left';

  // Vacuole
  ctx.fillStyle = 'rgba(68,136,204,0.4)';
  ctx.strokeStyle = '#4488CC';
  ctx.lineWidth = 1.5;
  ctx.beginPath();
  ctx.ellipse(w*0.25, h*0.63, w*0.1, h*0.03, 0, 0, Math.PI*2);
  ctx.fill(); ctx.stroke();
  ctx.fillStyle = '#AADDFF';
  ctx.font = `${h*0.028}px Arial`;
  ctx.textAlign = 'center';
  ctx.fillText('Vacuole (malate store)', w*0.25, h*0.64);
  ctx.textAlign = 'left';

  // Day panel (right)
  ctx.fillStyle = 'rgba(30,25,5,0.8)';
  ctx.strokeStyle = '#AAAA22';
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.roundRect(w*0.52, h*0.1, w*0.46, h*0.58, w*0.01);
  ctx.fill(); ctx.stroke();

  // Sun
  ctx.fillStyle = '#FFD700';
  ctx.font = `${h*0.06}px Arial`;
  ctx.textAlign = 'center';
  ctx.fillText('☀️', w*0.88, h*0.2);
  ctx.fillStyle = '#FFFFFF';
  ctx.font = `bold ${h*0.042}px Arial`;
  ctx.fillText('DAY', w*0.75, h*0.18);

  // Stomata closed
  ctx.fillStyle = '#FF8888';
  ctx.font = `${h*0.034}px Arial`;
  ctx.fillText('Stomata CLOSED', w*0.75, h*0.27);
  // Closed stoma
  ctx.fillStyle = '#44AA44';
  ctx.strokeStyle = '#226622';
  ctx.lineWidth = 1.5;
  ctx.beginPath();
  ctx.ellipse(w*0.64, h*0.34, w*0.02, h*0.02, 0, 0, Math.PI*2);
  ctx.fill(); ctx.stroke();
  ctx.beginPath();
  ctx.ellipse(w*0.7, h*0.34, w*0.02, h*0.02, 0, 0, Math.PI*2);
  ctx.fill(); ctx.stroke();
  // No pore gap drawn = closed

  // Malate released
  ctx.fillStyle = 'rgba(68,136,204,0.4)';
  ctx.strokeStyle = '#4488CC';
  ctx.lineWidth = 1.5;
  ctx.beginPath();
  ctx.ellipse(w*0.75, h*0.43, w*0.1, h*0.03, 0, 0, Math.PI*2);
  ctx.fill(); ctx.stroke();
  ctx.fillStyle = '#AADDFF';
  ctx.font = `${h*0.028}px Arial`;
  ctx.textAlign = 'center';
  ctx.fillText('Vacuole releases malate', w*0.75, h*0.44);
  ctx.textAlign = 'left';

  // Day reactions
  ctx.fillStyle = 'rgba(200,150,20,0.25)';
  ctx.strokeStyle = '#CCAA44';
  ctx.lineWidth = 1;
  ctx.beginPath();
  ctx.roundRect(w*0.55, h*0.48, w*0.4, h*0.15, w*0.01);
  ctx.fill(); ctx.stroke();
  ctx.fillStyle = '#FFEEAA';
  ctx.font = `${h*0.033}px Arial`;
  ctx.textAlign = 'center';
  ctx.fillText('Malate → CO₂ + pyruvate', w*0.75, h*0.55);
  ctx.fillText('CO₂ → Calvin Cycle (light)', w*0.75, h*0.6);
  ctx.textAlign = 'left';

  // Light arrows to chloroplast
  ctx.strokeStyle = '#FFD700';
  ctx.lineWidth = 2;
  for(let i=0; i<3; i++) {
    const lx = (0.6 + i*0.07)*w;
    ctx.beginPath();
    ctx.moveTo(lx, h*0.1);
    ctx.lineTo(lx, h*0.18);
    ctx.stroke();
    ctx.fillStyle = '#FFD700';
    ctx.beginPath();
    ctx.moveTo(lx, h*0.19);
    ctx.lineTo(lx - w*0.01, h*0.16);
    ctx.lineTo(lx + w*0.01, h*0.16);
    ctx.closePath(); ctx.fill();
  }

  // Advantage label
  ctx.fillStyle = 'rgba(255,255,255,0.1)';
  ctx.strokeStyle = 'rgba(255,255,255,0.2)';
  ctx.lineWidth = 1;
  ctx.beginPath();
  ctx.roundRect(w*0.02, h*0.72, w*0.96, h*0.24, w*0.01);
  ctx.fill(); ctx.stroke();
  ctx.fillStyle = '#AAFFCC';
  ctx.font = `bold ${h*0.038}px Arial`;
  ctx.textAlign = 'center';
  ctx.fillText('Advantage: Stomata closed during hot day → minimal water loss', w*0.5, h*0.79);
  ctx.font = `${h*0.033}px Arial`;
  ctx.fillStyle = 'rgba(255,255,255,0.8)';
  ctx.fillText('Examples: Cacti, agave, pineapple, aloe (hot, arid environments)', w*0.5, h*0.85);
  ctx.fillText('Trade-off: CO₂ uptake limited to night → slower growth than C3/C4', w*0.5, h*0.91);
  ctx.textAlign = 'left';
}

static drawCAMNight(ctx, w, h) {
  ctx.fillStyle = '#050818';
  ctx.fillRect(0, 0, w, h);

  // Starry night
  ctx.fillStyle = '#FFFFFF';
  for(let i=0; i<20; i++) {
    ctx.beginPath();
    ctx.arc((i*137.5%1)*w, (i*0.05)*h*0.3, w*0.004, 0, Math.PI*2);
    ctx.fill();
  }

  ctx.fillStyle = '#AACCFF';
  ctx.font = `${h*0.08}px Arial`;
  ctx.textAlign = 'center';
  ctx.fillText('🌙', w*0.85, h*0.12);

  ctx.fillStyle = '#FFFFFF';
  ctx.font = `bold ${h*0.055}px Arial`;
  ctx.fillText('CAM — Night Phase', w*0.5, h*0.08);
  ctx.textAlign = 'left';

  // Cell
  ctx.fillStyle = '#2A4A20';
  ctx.strokeStyle = '#1A3010';
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.roundRect(w*0.08, h*0.18, w*0.84, h*0.55, w*0.03);
  ctx.fill(); ctx.stroke();

  // Open stomata on bottom
  for(let i=0; i<3; i++) {
    const sx = (0.2 + i*0.28)*w;
    ctx.fillStyle = '#44AA44';
    ctx.beginPath();
    ctx.ellipse(sx - w*0.03, h*0.73, w*0.022, h*0.016, -0.3, 0, Math.PI*2);
    ctx.fill();
    ctx.beginPath();
    ctx.ellipse(sx + w*0.03, h*0.73, w*0.022, h*0.016, 0.3, 0, Math.PI*2);
    ctx.fill();
    // Pore
    ctx.fillStyle = '#88CCFF';
    ctx.beginPath();
    ctx.ellipse(sx, h*0.73, w*0.012, h*0.008, 0, 0, Math.PI*2);
    ctx.fill();
    // CO2 entering
    ctx.strokeStyle = '#FF8844';
    ctx.lineWidth = 1.5;
    ctx.setLineDash([3,2]);
    ctx.beginPath();
    ctx.moveTo(sx, h*0.78);
    ctx.lineTo(sx, h*0.73);
    ctx.stroke();
    ctx.setLineDash([]);
    ctx.fillStyle = '#FF8844';
    ctx.font = `${h*0.03}px Arial`;
    ctx.textAlign = 'center';
    ctx.fillText('CO₂', sx, h*0.82);
    ctx.textAlign = 'left';
  }

  // Chloroplast
  ctx.fillStyle = '#3A7A20';
  ctx.strokeStyle = '#2A5A10';
  ctx.lineWidth = 1.5;
  ctx.beginPath();
  ctx.ellipse(w*0.28, h*0.42, w*0.1, h*0.08, -0.3, 0, Math.PI*2);
  ctx.fill(); ctx.stroke();
  ctx.fillStyle = '#CCFFAA';
  ctx.font = `${h*0.03}px Arial`;
  ctx.textAlign = 'center';
  ctx.fillText('Chloroplast', w*0.28, h*0.43);
  ctx.textAlign = 'left';

  // PEP carboxylase reaction
  ctx.fillStyle = 'rgba(68,170,44,0.3)';
  ctx.strokeStyle = '#44AA44';
  ctx.lineWidth = 1;
  ctx.beginPath();
  ctx.roundRect(w*0.42, h*0.27, w*0.24, h*0.14, w*0.01);
  ctx.fill(); ctx.stroke();
  ctx.fillStyle = '#CCFFAA';
  ctx.font = `${h*0.03}px Arial`;
  ctx.textAlign = 'center';
  ctx.fillText('CO₂ + PEP', w*0.54, h*0.34);
  ctx.fillText('→ OAA → Malate', w*0.54, h*0.38);
  ctx.textAlign = 'left';

  // Large vacuole
  ctx.fillStyle = 'rgba(68,136,220,0.35)';
  ctx.strokeStyle = '#4488CC';
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.ellipse(w*0.68, h*0.43, w*0.15, h*0.17, 0, 0, Math.PI*2);
  ctx.fill(); ctx.stroke();

  // Arrow: reaction → vacuole
  ctx.strokeStyle = '#FFD700';
  ctx.lineWidth = 2.5;
  ctx.beginPath();
  ctx.moveTo(w*0.66, h*0.41);
  ctx.lineTo(w*0.55, h*0.38);
  ctx.stroke();
  ctx.fillStyle = '#FFD700';
  ctx.beginPath();
  ctx.moveTo(w*0.54, h*0.38);
  ctx.lineTo(w*0.58, h*0.34);
  ctx.lineTo(w*0.58, h*0.42);
  ctx.closePath(); ctx.fill();

  ctx.fillStyle = '#AADDFF';
  ctx.font = `bold ${h*0.034}px Arial`;
  ctx.textAlign = 'center';
  ctx.fillText('Vacuole', w*0.68, h*0.41);
  ctx.font = `${h*0.028}px Arial`;
  ctx.fillText('Malate stored', w*0.68, h*0.46);
  ctx.fillText('(acidifies at night)', w*0.68, h*0.5);
  ctx.textAlign = 'left';

  ctx.fillStyle = '#FFFFFF';
  ctx.font = `${h*0.034}px Arial`;
  ctx.textAlign = 'center';
  ctx.fillText('pH falls in cell (malic acid accumulates) — detectable by taste!', w*0.5, h*0.84);
  ctx.textAlign = 'left';
}

static drawCAMDay(ctx, w, h) {
  ctx.fillStyle = '#050818';
  ctx.fillRect(0, 0, w, h);

  // Bright day sky tint
  ctx.fillStyle = 'rgba(255,220,100,0.08)';
  ctx.fillRect(0, 0, w, h*0.5);

  ctx.fillStyle = '#FFD700';
  ctx.font = `${h*0.08}px Arial`;
  ctx.textAlign = 'center';
  ctx.fillText('☀️', w*0.88, h*0.1);

  ctx.fillStyle = '#FFFFFF';
  ctx.font = `bold ${h*0.055}px Arial`;
  ctx.fillText('CAM — Day Phase', w*0.5, h*0.07);
  ctx.textAlign = 'left';

  // Cell
  ctx.fillStyle = '#2A4A20';
  ctx.strokeStyle = '#1A3010';
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.roundRect(w*0.08, h*0.16, w*0.84, h*0.58, w*0.03);
  ctx.fill(); ctx.stroke();

  // Closed stomata on bottom
  for(let i=0; i<3; i++) {
    const sx = (0.2 + i*0.28)*w;
    ctx.fillStyle = '#44AA44';
    ctx.beginPath();
    ctx.ellipse(sx, h*0.74, w*0.025, h*0.018, 0, 0, Math.PI*2);
    ctx.fill();
    ctx.strokeStyle = '#226622';
    ctx.lineWidth = 1;
    ctx.stroke();
    // No pore = closed
    ctx.strokeStyle = '#FF6666';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(sx - w*0.015, h*0.72);
    ctx.lineTo(sx + w*0.015, h*0.76);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(sx + w*0.015, h*0.72);
    ctx.lineTo(sx - w*0.015, h*0.76);
    ctx.stroke();
  }
  ctx.fillStyle = '#FF8888';
  ctx.font = `${h*0.032}px Arial`;
  ctx.textAlign = 'center';
  ctx.fillText('Stomata CLOSED (prevents water loss)', w*0.5, h*0.82);
  ctx.textAlign = 'left';

  // Vacuole releasing malate
  ctx.fillStyle = 'rgba(68,136,220,0.35)';
  ctx.strokeStyle = '#4488CC';
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.ellipse(w*0.28, h*0.44, w*0.14, h*0.16, 0, 0, Math.PI*2);
  ctx.fill(); ctx.stroke();
  ctx.fillStyle = '#AADDFF';
  ctx.font = `bold ${h*0.033}px Arial`;
  ctx.textAlign = 'center';
  ctx.fillText('Vacuole', w*0.28, h*0.41);
  ctx.font = `${h*0.028}px Arial`;
  ctx.fillText('Malate released', w*0.28, h*0.46);
  ctx.textAlign = 'left';

  // Malate → CO2 arrow
  ctx.strokeStyle = '#FFAA44';
  ctx.lineWidth = 2.5;
  ctx.beginPath();
  ctx.moveTo(w*0.42, h*0.44);
  ctx.lineTo(w*0.56, h*0.44);
  ctx.stroke();
  ctx.fillStyle = '#FFAA44';
  ctx.beginPath();
  ctx.moveTo(w*0.57, h*0.44);
  ctx.lineTo(w*0.52, h*0.41);
  ctx.lineTo(w*0.52, h*0.47);
  ctx.closePath(); ctx.fill();
  ctx.fillStyle = '#FFAA44';
  ctx.font = `${h*0.03}px Arial`;
  ctx.textAlign = 'center';
  ctx.fillText('decarboxylation', w*0.49, h*0.41);
  ctx.textAlign = 'left';

  // Decarboxylation box
  ctx.fillStyle = 'rgba(200,140,40,0.3)';
  ctx.strokeStyle = '#CCAA44';
  ctx.lineWidth = 1;
  ctx.beginPath();
  ctx.roundRect(w*0.57, h*0.32, w*0.26, h*0.14, w*0.01);
  ctx.fill(); ctx.stroke();
  ctx.fillStyle = '#FFEEAA';
  ctx.font = `${h*0.031}px Arial`;
  ctx.textAlign = 'center';
  ctx.fillText('Malate → CO₂ + pyruvate', w*0.7, h*0.38);
  ctx.fillText('(NADP-malic enzyme)', w*0.7, h*0.43);
  ctx.textAlign = 'left';

  // CO2 → Calvin Cycle
  ctx.fillStyle = 'rgba(44,140,44,0.3)';
  ctx.strokeStyle = '#44CC44';
  ctx.lineWidth = 1;
  ctx.beginPath();
  ctx.roundRect(w*0.57, h*0.54, w*0.26, h*0.14, w*0.01);
  ctx.fill(); ctx.stroke();
  ctx.fillStyle = '#CCFFAA';
  ctx.font = `${h*0.031}px Arial`;
  ctx.textAlign = 'center';
  ctx.fillText('CO₂ → Calvin Cycle', w*0.7, h*0.6);
  ctx.fillText('Light reactions active', w*0.7, h*0.64);
  ctx.textAlign = 'left';

  // Light arrows
  ctx.strokeStyle = '#FFD700';
  ctx.lineWidth = 1.5;
  for(let i=0; i<4; i++) {
    const lx = (0.6 + i*0.06)*w;
    ctx.beginPath();
    ctx.moveTo(lx, h*0.16);
    ctx.lineTo(lx, h*0.24);
    ctx.stroke();
    ctx.fillStyle = '#FFD700';
    ctx.beginPath();
    ctx.moveTo(lx, h*0.25);
    ctx.lineTo(lx - w*0.008, h*0.21);
    ctx.lineTo(lx + w*0.008, h*0.21);
    ctx.closePath(); ctx.fill();
  }

  ctx.fillStyle = '#FFFFFF';
  ctx.font = `${h*0.032}px Arial`;
  ctx.textAlign = 'center';
  ctx.fillText('Internal CO₂ source from stored malate → no need to open stomata', w*0.5, h*0.9);
  ctx.textAlign = 'left';
}

static drawCAMGraph(ctx, w, h) {
  ctx.fillStyle = '#050818';
  ctx.fillRect(0, 0, w, h);

  ctx.fillStyle = '#FFFFFF';
  ctx.font = `bold ${h*0.055}px Arial`;
  ctx.textAlign = 'center';
  ctx.fillText('CAM: Daily Acid/Stomata Cycle', w*0.5, h*0.07);
  ctx.textAlign = 'left';

  const gx = w*0.1, gy = h*0.18, gw = w*0.82, gh = h*0.55;

  // Graph background
  ctx.fillStyle = 'rgba(255,255,255,0.05)';
  ctx.strokeStyle = 'rgba(255,255,255,0.2)';
  ctx.lineWidth = 1;
  ctx.beginPath();
  ctx.rect(gx, gy, gw, gh);
  ctx.fill(); ctx.stroke();

  // Grid lines
  ctx.strokeStyle = 'rgba(255,255,255,0.1)';
  ctx.lineWidth = 1;
  for(let i=1; i<4; i++) {
    ctx.beginPath();
    ctx.moveTo(gx, gy + gh*i/4);
    ctx.lineTo(gx + gw, gy + gh*i/4);
    ctx.stroke();
  }

  // Night/day shading
  ctx.fillStyle = 'rgba(10,10,50,0.5)';
  ctx.fillRect(gx, gy, gw*0.35, gh);
  ctx.fillStyle = 'rgba(255,220,0,0.07)';
  ctx.fillRect(gx + gw*0.35, gy, gw*0.65, gh);

  // Day/night labels
  ctx.fillStyle = '#AACCFF';
  ctx.font = `bold ${h*0.038}px Arial`;
  ctx.textAlign = 'center';
  ctx.fillText('Night', gx + gw*0.175, gy + h*0.04);
  ctx.fillStyle = '#FFD700';
  ctx.fillText('Day', gx + gw*0.675, gy + h*0.04);
  ctx.textAlign = 'left';

  // Malic acid curve (rises at night, falls by day)
  ctx.strokeStyle = '#FF6688';
  ctx.lineWidth = 3;
  ctx.beginPath();
  const malatePts = [[0,0.9],[0.1,0.7],[0.2,0.4],[0.35,0.1],[0.5,0.15],[0.65,0.3],[0.8,0.6],[1.0,0.85]];
  malatePts.forEach(([t,v],i) => {
    const px = gx + t*gw, py = gy + v*gh;
    if(i===0) ctx.moveTo(px,py); else ctx.lineTo(px,py);
  });
  ctx.stroke();

  // Stomata aperture (open at night, closed by day)
  ctx.strokeStyle = '#44CCAA';
  ctx.lineWidth = 3;
  ctx.beginPath();
  const stomPts = [[0,0.15],[0.1,0.1],[0.2,0.08],[0.35,0.12],[0.45,0.6],[0.55,0.85],[0.65,0.88],[0.8,0.82],[1.0,0.2]];
  stomPts.forEach(([t,v],i) => {
    const px = gx + t*gw, py = gy + v*gh;
    if(i===0) ctx.moveTo(px,py); else ctx.lineTo(px,py);
  });
  ctx.stroke();

  // Axes
  ctx.strokeStyle = '#FFFFFF';
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.moveTo(gx, gy);
  ctx.lineTo(gx, gy + gh);
  ctx.lineTo(gx + gw, gy + gh);
  ctx.stroke();

  // X axis labels (time)
  ctx.fillStyle = '#FFFFFF';
  ctx.font = `${h*0.032}px Arial`;
  ctx.textAlign = 'center';
  ctx.fillText('18:00', gx, gy + gh + h*0.04);
  ctx.fillText('21:00', gx + gw*0.175, gy + gh + h*0.04);
  ctx.fillText('00:00', gx + gw*0.35, gy + gh + h*0.04);
  ctx.fillText('06:00', gx + gw*0.58, gy + gh + h*0.04);
  ctx.fillText('12:00', gx + gw*0.75, gy + gh + h*0.04);
  ctx.fillText('18:00', gx + gw, gy + gh + h*0.04);
  ctx.textAlign = 'left';

  // Y axis labels
  ctx.fillStyle = '#FF6688';
  ctx.font = `${h*0.032}px Arial`;
  ctx.save();
  ctx.translate(gx - w*0.05, gy + gh*0.5);
  ctx.rotate(-Math.PI/2);
  ctx.textAlign = 'center';
  ctx.fillText('Malic acid ↑', 0, 0);
  ctx.restore();

  ctx.fillStyle = '#44CCAA';
  ctx.save();
  ctx.translate(gx - w*0.09, gy + gh*0.5);
  ctx.rotate(-Math.PI/2);
  ctx.textAlign = 'center';
  ctx.fillText('Stomata aperture ↑', 0, 0);
  ctx.restore();

  // Legend
  ctx.fillStyle = '#FF6688';
  ctx.fillRect(w*0.18, h*0.82, w*0.06, h*0.025);
  ctx.fillStyle = '#FFFFFF';
  ctx.font = `${h*0.032}px Arial`;
  ctx.fillText('Malate level', w*0.25, h*0.836);

  ctx.fillStyle = '#44CCAA';
  ctx.fillRect(w*0.52, h*0.82, w*0.06, h*0.025);
  ctx.fillStyle = '#FFFFFF';
  ctx.fillText('Stomata aperture', w*0.59, h*0.836);

  ctx.fillStyle = 'rgba(255,255,255,0.7)';
  ctx.font = `${h*0.031}px Arial`;
  ctx.textAlign = 'center';
  ctx.fillText('Inverse relationship: stomata open when acid accumulates (night)', w*0.5, h*0.93);
  ctx.textAlign = 'left';
}
