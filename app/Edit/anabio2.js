// ============================================================
// CARDIOVASCULAR — Missing Drawing Methods
// ============================================================

static drawAorta(ctx, color, w, h) {
  const gradient = ctx.createLinearGradient(w * 0.4, h * 0.1, w * 0.6, h * 0.9);
  gradient.addColorStop(0, color.light);
  gradient.addColorStop(0.5, color.base);
  gradient.addColorStop(1, color.dark);
  ctx.fillStyle = gradient;

  // Ascending aorta
  ctx.beginPath();
  ctx.moveTo(w * 0.48, h * 0.35);
  ctx.bezierCurveTo(w * 0.46, h * 0.25, w * 0.46, h * 0.18, w * 0.5, h * 0.12);
  ctx.bezierCurveTo(w * 0.54, h * 0.18, w * 0.54, h * 0.25, w * 0.52, h * 0.35);
  ctx.closePath();
  ctx.fill();

  // Aortic arch
  ctx.beginPath();
  ctx.moveTo(w * 0.48, h * 0.15);
  ctx.bezierCurveTo(w * 0.48, h * 0.08, w * 0.62, h * 0.08, w * 0.62, h * 0.18);
  ctx.bezierCurveTo(w * 0.62, h * 0.22, w * 0.58, h * 0.24, w * 0.56, h * 0.22);
  ctx.bezierCurveTo(w * 0.56, h * 0.14, w * 0.54, h * 0.13, w * 0.52, h * 0.15);
  ctx.closePath();
  ctx.fill();

  // Descending aorta
  ctx.beginPath();
  ctx.moveTo(w * 0.58, h * 0.22);
  ctx.bezierCurveTo(w * 0.6, h * 0.3, w * 0.62, h * 0.5, w * 0.6, h * 0.75);
  ctx.bezierCurveTo(w * 0.59, h * 0.8, w * 0.57, h * 0.82, w * 0.55, h * 0.82);
  ctx.bezierCurveTo(w * 0.53, h * 0.82, w * 0.52, h * 0.8, w * 0.52, h * 0.75);
  ctx.bezierCurveTo(w * 0.54, h * 0.5, w * 0.56, h * 0.3, w * 0.56, h * 0.22);
  ctx.closePath();
  ctx.fill();

  // Branch vessels (celiac, mesenteric)
  ctx.strokeStyle = color.dark;
  ctx.lineWidth = 2;
  [[0.59, 0.45, 0.68, 0.45], [0.6, 0.55, 0.7, 0.52], [0.59, 0.65, 0.67, 0.62]].forEach(([x1, y1, x2, y2]) => {
    ctx.beginPath();
    ctx.moveTo(w * x1, h * y1);
    ctx.lineTo(w * x2, h * y2);
    ctx.stroke();
  });

  ctx.strokeStyle = color.dark;
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.moveTo(w * 0.48, h * 0.35);
  ctx.bezierCurveTo(w * 0.46, h * 0.25, w * 0.46, h * 0.12, w * 0.5, h * 0.1);
  ctx.bezierCurveTo(w * 0.64, h * 0.1, w * 0.64, h * 0.22, w * 0.6, h * 0.22);
  ctx.bezierCurveTo(w * 0.62, h * 0.5, w * 0.62, h * 0.75, w * 0.55, h * 0.83);
  ctx.stroke();
}

static drawPulmonaryArtery(ctx, color, w, h) {
  ctx.fillStyle = color.base;

  // Main pulmonary trunk
  ctx.beginPath();
  ctx.moveTo(w * 0.47, h * 0.4);
  ctx.bezierCurveTo(w * 0.45, h * 0.32, w * 0.48, h * 0.25, w * 0.52, h * 0.25);
  ctx.bezierCurveTo(w * 0.56, h * 0.25, w * 0.58, h * 0.3, w * 0.57, h * 0.38);
  ctx.lineTo(w * 0.53, h * 0.4);
  ctx.closePath();
  ctx.fill();

  // Left pulmonary artery
  ctx.beginPath();
  ctx.moveTo(w * 0.5, h * 0.27);
  ctx.bezierCurveTo(w * 0.42, h * 0.24, w * 0.3, h * 0.28, w * 0.25, h * 0.35);
  ctx.bezierCurveTo(w * 0.23, h * 0.38, w * 0.24, h * 0.42, w * 0.26, h * 0.43);
  ctx.bezierCurveTo(w * 0.3, h * 0.36, w * 0.42, h * 0.3, w * 0.5, h * 0.31);
  ctx.closePath();
  ctx.fill();

  // Right pulmonary artery
  ctx.beginPath();
  ctx.moveTo(w * 0.54, h * 0.27);
  ctx.bezierCurveTo(w * 0.62, h * 0.24, w * 0.72, h * 0.28, w * 0.76, h * 0.35);
  ctx.bezierCurveTo(w * 0.78, h * 0.38, w * 0.77, h * 0.42, w * 0.75, h * 0.43);
  ctx.bezierCurveTo(w * 0.72, h * 0.36, w * 0.62, h * 0.3, w * 0.54, h * 0.31);
  ctx.closePath();
  ctx.fill();

  ctx.strokeStyle = color.dark;
  ctx.lineWidth = 1.5;
  ctx.beginPath();
  ctx.moveTo(w * 0.26, h * 0.43);
  ctx.bezierCurveTo(w * 0.25, h * 0.38, w * 0.3, h * 0.28, w * 0.5, h * 0.27);
  ctx.bezierCurveTo(w * 0.55, h * 0.25, w * 0.6, h * 0.28, w * 0.65, h * 0.33);
  ctx.bezierCurveTo(w * 0.72, h * 0.3, w * 0.78, h * 0.38, w * 0.75, h * 0.43);
  ctx.stroke();
}

static drawPulmonaryVein(ctx, color, w, h) {
  ctx.fillStyle = color.base;

  // Four pulmonary veins entering left atrium
  const veins = [
    { sx: 0.25, sy: 0.38, ex: 0.44, ey: 0.42 },
    { sx: 0.25, sy: 0.48, ex: 0.44, ey: 0.48 },
    { sx: 0.75, sy: 0.38, ex: 0.56, ey: 0.42 },
    { sx: 0.75, sy: 0.48, ex: 0.56, ey: 0.48 },
  ];

  veins.forEach(v => {
    ctx.beginPath();
    ctx.moveTo(w * v.sx, h * v.sy);
    ctx.bezierCurveTo(w * (v.sx + v.ex) / 2, h * v.sy, w * (v.sx + v.ex) / 2, h * v.ey, w * v.ex, h * v.ey);
    ctx.lineWidth = 6;
    ctx.strokeStyle = color.base;
    ctx.stroke();
    ctx.lineWidth = 1.5;
    ctx.strokeStyle = color.dark;
    ctx.stroke();
  });

  // Left atrium body
  ctx.fillStyle = color.light;
  ctx.beginPath();
  ctx.ellipse(w * 0.5, h * 0.45, w * 0.08, h * 0.07, 0, 0, Math.PI * 2);
  ctx.fill();
  ctx.strokeStyle = color.dark;
  ctx.lineWidth = 1.5;
  ctx.stroke();
}

static drawVenaCava(ctx, color, w, h) {
  ctx.fillStyle = color.base;

  // Superior vena cava
  ctx.beginPath();
  ctx.moveTo(w * 0.48, h * 0.12);
  ctx.bezierCurveTo(w * 0.46, h * 0.18, w * 0.46, h * 0.28, w * 0.48, h * 0.38);
  ctx.lineTo(w * 0.52, h * 0.38);
  ctx.bezierCurveTo(w * 0.52, h * 0.28, w * 0.52, h * 0.18, w * 0.52, h * 0.12);
  ctx.closePath();
  ctx.fill();
  ctx.strokeStyle = color.dark;
  ctx.lineWidth = 1.5;
  ctx.stroke();

  // Label text area — draw arrow indicators
  ctx.fillStyle = color.dark;
  ctx.font = `${w * 0.04}px sans-serif`;
  ctx.fillText('SVC', w * 0.54, h * 0.22);

  // Inferior vena cava
  ctx.fillStyle = color.base;
  ctx.beginPath();
  ctx.moveTo(w * 0.48, h * 0.62);
  ctx.bezierCurveTo(w * 0.46, h * 0.72, w * 0.46, h * 0.82, w * 0.48, h * 0.9);
  ctx.lineTo(w * 0.52, h * 0.9);
  ctx.bezierCurveTo(w * 0.52, h * 0.82, w * 0.52, h * 0.72, w * 0.52, h * 0.62);
  ctx.closePath();
  ctx.fill();
  ctx.strokeStyle = color.dark;
  ctx.lineWidth = 1.5;
  ctx.stroke();
  ctx.fillStyle = color.dark;
  ctx.fillText('IVC', w * 0.54, h * 0.78);

  // Right atrium connection
  ctx.fillStyle = color.light;
  ctx.beginPath();
  ctx.ellipse(w * 0.5, h * 0.5, w * 0.06, h * 0.08, 0, 0, Math.PI * 2);
  ctx.fill();
  ctx.strokeStyle = color.dark;
  ctx.lineWidth = 1.5;
  ctx.stroke();
}

static drawCoronaryArteries(ctx, color, w, h) {
  ctx.strokeStyle = color.base;
  ctx.lineWidth = 3;
  ctx.lineCap = 'round';

  // Left coronary artery (LCA) and branches
  ctx.beginPath();
  ctx.moveTo(w * 0.5, h * 0.32);
  ctx.bezierCurveTo(w * 0.42, h * 0.33, w * 0.35, h * 0.4, w * 0.32, h * 0.5);
  ctx.stroke();

  // Left anterior descending (LAD)
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.moveTo(w * 0.36, h * 0.4);
  ctx.bezierCurveTo(w * 0.38, h * 0.5, w * 0.4, h * 0.62, w * 0.42, h * 0.72);
  ctx.stroke();

  // Circumflex
  ctx.beginPath();
  ctx.moveTo(w * 0.36, h * 0.4);
  ctx.bezierCurveTo(w * 0.3, h * 0.45, w * 0.28, h * 0.55, w * 0.35, h * 0.65);
  ctx.stroke();

  // Right coronary artery (RCA)
  ctx.lineWidth = 3;
  ctx.beginPath();
  ctx.moveTo(w * 0.5, h * 0.32);
  ctx.bezierCurveTo(w * 0.58, h * 0.33, w * 0.65, h * 0.4, w * 0.68, h * 0.5);
  ctx.stroke();

  // RCA branches
  ctx.lineWidth = 1.5;
  ctx.beginPath();
  ctx.moveTo(w * 0.63, h * 0.43);
  ctx.bezierCurveTo(w * 0.65, h * 0.55, w * 0.63, h * 0.65, w * 0.58, h * 0.72);
  ctx.stroke();

  // Heart silhouette for reference
  ctx.strokeStyle = color.dark;
  ctx.lineWidth = 1;
  ctx.setLineDash([4, 4]);
  ctx.beginPath();
  ctx.moveTo(w * 0.5, h * 0.75);
  ctx.bezierCurveTo(w * 0.25, h * 0.6, w * 0.2, h * 0.35, w * 0.38, h * 0.28);
  ctx.bezierCurveTo(w * 0.44, h * 0.25, w * 0.5, h * 0.3, w * 0.5, h * 0.3);
  ctx.bezierCurveTo(w * 0.5, h * 0.3, w * 0.56, h * 0.25, w * 0.62, h * 0.28);
  ctx.bezierCurveTo(w * 0.8, h * 0.35, w * 0.75, h * 0.6, w * 0.5, h * 0.75);
  ctx.stroke();
  ctx.setLineDash([]);
}

static drawHeartValves(ctx, color, w, h) {
  // Draw all 4 heart valves in a cross-section view
  const cx = w * 0.5, cy = h * 0.5;

  // Mitral valve (bicuspid) — left AV valve
  ctx.fillStyle = color.light;
  ctx.strokeStyle = color.dark;
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.ellipse(cx - w * 0.12, cy, w * 0.08, h * 0.04, -0.3, 0, Math.PI * 2);
  ctx.fill(); ctx.stroke();
  // Leaflets
  ctx.beginPath();
  ctx.moveTo(cx - w * 0.2, cy);
  ctx.bezierCurveTo(cx - w * 0.16, cy - h * 0.04, cx - w * 0.12, cy - h * 0.04, cx - w * 0.08, cy);
  ctx.bezierCurveTo(cx - w * 0.12, cy - h * 0.06, cx - w * 0.16, cy - h * 0.06, cx - w * 0.2, cy);
  ctx.fillStyle = color.base;
  ctx.fill(); ctx.stroke();

  // Tricuspid valve — right AV valve
  ctx.fillStyle = color.light;
  ctx.beginPath();
  ctx.ellipse(cx + w * 0.12, cy, w * 0.09, h * 0.04, 0.3, 0, Math.PI * 2);
  ctx.fill(); ctx.stroke();
  // 3 leaflets indicated
  [-1, 0, 1].forEach(i => {
    ctx.beginPath();
    ctx.moveTo(cx + w * 0.12 + i * w * 0.04, cy);
    ctx.bezierCurveTo(cx + w * 0.12 + i * w * 0.04 - w * 0.02, cy - h * 0.05,
      cx + w * 0.12 + i * w * 0.04 + w * 0.02, cy - h * 0.05,
      cx + w * 0.12 + i * w * 0.04, cy);
    ctx.fillStyle = color.base;
    ctx.fill(); ctx.stroke();
  });

  // Aortic valve — semilunar (3 cusps)
  ctx.fillStyle = color.light;
  ctx.beginPath();
  ctx.ellipse(cx - w * 0.04, cy - h * 0.15, w * 0.06, h * 0.06, 0, 0, Math.PI * 2);
  ctx.fill(); ctx.stroke();
  [0, 120, 240].forEach(deg => {
    const a = deg * Math.PI / 180;
    ctx.beginPath();
    ctx.moveTo(cx - w * 0.04, cy - h * 0.15);
    ctx.arc(cx - w * 0.04, cy - h * 0.15, w * 0.06, a, a + Math.PI / 1.5);
    ctx.fillStyle = color.base;
    ctx.fill(); ctx.stroke();
  });

  // Pulmonary valve — semilunar
  ctx.fillStyle = color.light;
  ctx.beginPath();
  ctx.ellipse(cx + w * 0.06, cy - h * 0.18, w * 0.055, h * 0.055, 0, 0, Math.PI * 2);
  ctx.fill(); ctx.stroke();
  [0, 120, 240].forEach(deg => {
    const a = deg * Math.PI / 180;
    ctx.beginPath();
    ctx.moveTo(cx + w * 0.06, cy - h * 0.18);
    ctx.arc(cx + w * 0.06, cy - h * 0.18, w * 0.055, a, a + Math.PI / 1.5);
    ctx.fillStyle = color.base;
    ctx.fill(); ctx.stroke();
  });

  // Labels
  ctx.fillStyle = color.dark;
  ctx.font = `${w * 0.035}px sans-serif`;
  ctx.fillText('Mitral', cx - w * 0.22, cy + h * 0.08);
  ctx.fillText('Tricuspid', cx + w * 0.06, cy + h * 0.08);
  ctx.fillText('Aortic', cx - w * 0.1, cy - h * 0.22);
  ctx.fillText('Pulmonary', cx + w * 0.02, cy - h * 0.25);
}

static drawCapillaryBed(ctx, color, w, h) {
  ctx.lineCap = 'round';

  // Arteriole (left side, red-ish)
  ctx.strokeStyle = color.base;
  ctx.lineWidth = 5;
  ctx.beginPath();
  ctx.moveTo(w * 0.1, h * 0.5);
  ctx.lineTo(w * 0.25, h * 0.5);
  ctx.stroke();

  // Venule (right side, blue-ish)
  ctx.strokeStyle = color.dark;
  ctx.lineWidth = 5;
  ctx.beginPath();
  ctx.moveTo(w * 0.75, h * 0.5);
  ctx.lineTo(w * 0.9, h * 0.5);
  ctx.stroke();

  // Capillary network
  const capPaths = [
    [[0.25, 0.5], [0.35, 0.3], [0.5, 0.25], [0.65, 0.3], [0.75, 0.5]],
    [[0.25, 0.5], [0.35, 0.4], [0.5, 0.38], [0.65, 0.4], [0.75, 0.5]],
    [[0.25, 0.5], [0.35, 0.5], [0.5, 0.5], [0.65, 0.5], [0.75, 0.5]],
    [[0.25, 0.5], [0.35, 0.6], [0.5, 0.62], [0.65, 0.6], [0.75, 0.5]],
    [[0.25, 0.5], [0.35, 0.7], [0.5, 0.75], [0.65, 0.7], [0.75, 0.5]],
  ];

  capPaths.forEach((pts, i) => {
    const t = i / (capPaths.length - 1);
    // Gradient from red to blue across capillaries
    const r = Math.round(200 - t * 100);
    const b = Math.round(50 + t * 150);
    ctx.strokeStyle = `rgb(${r},80,${b})`;
    ctx.lineWidth = 1.5;
    ctx.beginPath();
    ctx.moveTo(w * pts[0][0], h * pts[0][1]);
    for (let j = 1; j < pts.length; j++) {
      ctx.lineTo(w * pts[j][0], h * pts[j][1]);
    }
    ctx.stroke();
  });

  // Cross-connections
  ctx.strokeStyle = color.base;
  ctx.lineWidth = 1;
  [[0.38, 0.3, 0.38, 0.4], [0.5, 0.25, 0.5, 0.38], [0.62, 0.3, 0.62, 0.4]].forEach(([x1, y1, x2, y2]) => {
    ctx.beginPath();
    ctx.moveTo(w * x1, h * y1);
    ctx.lineTo(w * x2, h * y2);
    ctx.stroke();
  });

  // Labels
  ctx.fillStyle = color.dark;
  ctx.font = `${w * 0.04}px sans-serif`;
  ctx.fillText('Arteriole', w * 0.04, h * 0.45);
  ctx.fillText('Venule', w * 0.76, h * 0.45);
  ctx.fillText('Capillary bed', w * 0.38, h * 0.92);
}

// ============================================================
// RESPIRATORY — Missing Drawing Methods
// ============================================================

static drawNasalCavity(ctx, color, w, h) {
  ctx.fillStyle = color.light;
  ctx.strokeStyle = color.dark;
  ctx.lineWidth = 2;

  // Outer nasal cavity outline (sagittal cross-section)
  ctx.beginPath();
  ctx.moveTo(w * 0.2, h * 0.2);
  ctx.bezierCurveTo(w * 0.15, h * 0.25, w * 0.15, h * 0.5, w * 0.2, h * 0.6);
  ctx.bezierCurveTo(w * 0.25, h * 0.65, w * 0.5, h * 0.65, w * 0.7, h * 0.6);
  ctx.bezierCurveTo(w * 0.78, h * 0.55, w * 0.78, h * 0.3, w * 0.7, h * 0.2);
  ctx.bezierCurveTo(w * 0.55, h * 0.15, w * 0.35, h * 0.15, w * 0.2, h * 0.2);
  ctx.fill();
  ctx.stroke();

  // Nasal septum
  ctx.strokeStyle = color.dark;
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.moveTo(w * 0.45, h * 0.2);
  ctx.lineTo(w * 0.45, h * 0.62);
  ctx.stroke();

  // Turbinates (conchae) — left side
  ctx.fillStyle = color.base;
  [[0.28, 0.32], [0.28, 0.42], [0.28, 0.52]].forEach(([x, y]) => {
    ctx.beginPath();
    ctx.moveTo(w * x, h * y);
    ctx.bezierCurveTo(w * (x + 0.06), h * (y - 0.04), w * (x + 0.12), h * (y - 0.02), w * (x + 0.14), h * y);
    ctx.bezierCurveTo(w * (x + 0.12), h * (y + 0.03), w * (x + 0.06), h * (y + 0.03), w * x, h * y);
    ctx.fill();
    ctx.strokeStyle = color.dark;
    ctx.lineWidth = 1;
    ctx.stroke();
  });

  // Olfactory region (top)
  ctx.fillStyle = color.dark;
  ctx.font = `${w * 0.035}px sans-serif`;
  ctx.fillText('Olfactory', w * 0.22, h * 0.18);
  ctx.fillText('Superior', w * 0.18, h * 0.33);
  ctx.fillText('Middle', w * 0.18, h * 0.43);
  ctx.fillText('Inferior', w * 0.18, h * 0.53);
  ctx.fillText('Conchae', w * 0.18, h * 0.57);
}

static drawPharynx(ctx, color, w, h) {
  const gradient = ctx.createLinearGradient(w * 0.35, 0, w * 0.65, 0);
  gradient.addColorStop(0, color.dark);
  gradient.addColorStop(0.5, color.light);
  gradient.addColorStop(1, color.dark);
  ctx.fillStyle = gradient;

  // Nasopharynx
  ctx.beginPath();
  ctx.moveTo(w * 0.35, h * 0.1);
  ctx.lineTo(w * 0.65, h * 0.1);
  ctx.bezierCurveTo(w * 0.67, h * 0.15, w * 0.67, h * 0.28, w * 0.65, h * 0.32);
  ctx.lineTo(w * 0.35, h * 0.32);
  ctx.bezierCurveTo(w * 0.33, h * 0.28, w * 0.33, h * 0.15, w * 0.35, h * 0.1);
  ctx.fill();

  // Oropharynx
  ctx.fillStyle = color.base;
  ctx.beginPath();
  ctx.moveTo(w * 0.35, h * 0.32);
  ctx.lineTo(w * 0.65, h * 0.32);
  ctx.bezierCurveTo(w * 0.67, h * 0.38, w * 0.67, h * 0.52, w * 0.65, h * 0.55);
  ctx.lineTo(w * 0.35, h * 0.55);
  ctx.bezierCurveTo(w * 0.33, h * 0.52, w * 0.33, h * 0.38, w * 0.35, h * 0.32);
  ctx.fill();

  // Laryngopharynx
  ctx.fillStyle = color.light;
  ctx.beginPath();
  ctx.moveTo(w * 0.37, h * 0.55);
  ctx.lineTo(w * 0.63, h * 0.55);
  ctx.bezierCurveTo(w * 0.63, h * 0.65, w * 0.6, h * 0.75, w * 0.55, h * 0.8);
  ctx.lineTo(w * 0.45, h * 0.8);
  ctx.bezierCurveTo(w * 0.4, h * 0.75, w * 0.37, h * 0.65, w * 0.37, h * 0.55);
  ctx.fill();

  // Outline
  ctx.strokeStyle = color.dark;
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.moveTo(w * 0.35, h * 0.1);
  ctx.lineTo(w * 0.65, h * 0.1);
  ctx.bezierCurveTo(w * 0.67, h * 0.4, w * 0.63, h * 0.7, w * 0.55, h * 0.82);
  ctx.lineTo(w * 0.45, h * 0.82);
  ctx.bezierCurveTo(w * 0.37, h * 0.7, w * 0.33, h * 0.4, w * 0.35, h * 0.1);
  ctx.stroke();

  // Division lines
  ctx.setLineDash([4, 3]);
  ctx.lineWidth = 1;
  [[0.32], [0.55]].forEach(([y]) => {
    ctx.beginPath();
    ctx.moveTo(w * 0.3, h * y);
    ctx.lineTo(w * 0.7, h * y);
    ctx.stroke();
  });
  ctx.setLineDash([]);

  ctx.fillStyle = color.dark;
  ctx.font = `${w * 0.036}px sans-serif`;
  ctx.fillText('Naso-', w * 0.7, h * 0.2);
  ctx.fillText('pharynx', w * 0.7, h * 0.25);
  ctx.fillText('Oro-', w * 0.7, h * 0.42);
  ctx.fillText('pharynx', w * 0.7, h * 0.47);
  ctx.fillText('Laryngo-', w * 0.7, h * 0.62);
  ctx.fillText('pharynx', w * 0.7, h * 0.67);
}

static drawLarynx(ctx, color, w, h) {
  ctx.fillStyle = color.light;
  ctx.strokeStyle = color.dark;
  ctx.lineWidth = 2;

  // Thyroid cartilage
  ctx.beginPath();
  ctx.moveTo(w * 0.3, h * 0.2);
  ctx.lineTo(w * 0.7, h * 0.2);
  ctx.bezierCurveTo(w * 0.73, h * 0.28, w * 0.73, h * 0.42, w * 0.7, h * 0.5);
  ctx.bezierCurveTo(w * 0.6, h * 0.55, w * 0.4, h * 0.55, w * 0.3, h * 0.5);
  ctx.bezierCurveTo(w * 0.27, h * 0.42, w * 0.27, h * 0.28, w * 0.3, h * 0.2);
  ctx.fill();
  ctx.stroke();

  // Adam's apple notch
  ctx.beginPath();
  ctx.moveTo(w * 0.42, h * 0.2);
  ctx.lineTo(w * 0.5, h * 0.13);
  ctx.lineTo(w * 0.58, h * 0.2);
  ctx.fill();
  ctx.stroke();

  // Cricoid cartilage
  ctx.fillStyle = color.base;
  ctx.beginPath();
  ctx.moveTo(w * 0.32, h * 0.55);
  ctx.lineTo(w * 0.68, h * 0.55);
  ctx.bezierCurveTo(w * 0.7, h * 0.62, w * 0.68, h * 0.7, w * 0.65, h * 0.72);
  ctx.lineTo(w * 0.35, h * 0.72);
  ctx.bezierCurveTo(w * 0.32, h * 0.7, w * 0.3, h * 0.62, w * 0.32, h * 0.55);
  ctx.fill();
  ctx.stroke();

  // Epiglottis
  ctx.fillStyle = color.dark;
  ctx.beginPath();
  ctx.moveTo(w * 0.5, h * 0.12);
  ctx.bezierCurveTo(w * 0.43, h * 0.15, w * 0.4, h * 0.22, w * 0.43, h * 0.28);
  ctx.bezierCurveTo(w * 0.47, h * 0.3, w * 0.53, h * 0.3, w * 0.57, h * 0.28);
  ctx.bezierCurveTo(w * 0.6, h * 0.22, w * 0.57, h * 0.15, w * 0.5, h * 0.12);
  ctx.fill();

  // Vocal cords
  ctx.strokeStyle = color.dark;
  ctx.lineWidth = 2.5;
  ctx.beginPath();
  ctx.moveTo(w * 0.35, h * 0.38);
  ctx.bezierCurveTo(w * 0.42, h * 0.42, w * 0.5, h * 0.43, w * 0.65, h * 0.38);
  ctx.stroke();
  ctx.beginPath();
  ctx.moveTo(w * 0.35, h * 0.44);
  ctx.bezierCurveTo(w * 0.42, h * 0.4, w * 0.5, h * 0.39, w * 0.65, h * 0.44);
  ctx.stroke();

  ctx.fillStyle = color.dark;
  ctx.font = `${w * 0.035}px sans-serif`;
  ctx.fillText('Epiglottis', w * 0.62, h * 0.16);
  ctx.fillText('Thyroid', w * 0.72, h * 0.34);
  ctx.fillText('Vocal cords', w * 0.68, h * 0.41);
  ctx.fillText('Cricoid', w * 0.72, h * 0.63);
}

static drawPleuralCavity(ctx, color, w, h) {
  // Draw lungs with pleural membranes
  ctx.fillStyle = color.light;
  ctx.globalAlpha = 0.4;

  // Left pleural cavity
  ctx.beginPath();
  ctx.moveTo(w * 0.08, h * 0.25);
  ctx.bezierCurveTo(w * 0.04, h * 0.35, w * 0.04, h * 0.68, w * 0.12, h * 0.8);
  ctx.bezierCurveTo(w * 0.2, h * 0.85, w * 0.38, h * 0.82, w * 0.42, h * 0.72);
  ctx.bezierCurveTo(w * 0.44, h * 0.55, w * 0.43, h * 0.38, w * 0.4, h * 0.28);
  ctx.bezierCurveTo(w * 0.3, h * 0.2, w * 0.14, h * 0.2, w * 0.08, h * 0.25);
  ctx.fill();

  // Right pleural cavity
  ctx.beginPath();
  ctx.moveTo(w * 0.92, h * 0.25);
  ctx.bezierCurveTo(w * 0.96, h * 0.35, w * 0.96, h * 0.68, w * 0.88, h * 0.8);
  ctx.bezierCurveTo(w * 0.8, h * 0.85, w * 0.62, h * 0.82, w * 0.58, h * 0.72);
  ctx.bezierCurveTo(w * 0.56, h * 0.55, w * 0.57, h * 0.38, w * 0.6, h * 0.28);
  ctx.bezierCurveTo(w * 0.7, h * 0.2, w * 0.86, h * 0.2, w * 0.92, h * 0.25);
  ctx.fill();

  ctx.globalAlpha = 1.0;

  // Visceral pleura (inner, on lung surface)
  ctx.strokeStyle = color.base;
  ctx.lineWidth = 3;
  ctx.beginPath();
  ctx.moveTo(w * 0.1, h * 0.28);
  ctx.bezierCurveTo(w * 0.06, h * 0.38, w * 0.07, h * 0.68, w * 0.15, h * 0.78);
  ctx.bezierCurveTo(w * 0.24, h * 0.82, w * 0.38, h * 0.78, w * 0.4, h * 0.68);
  ctx.bezierCurveTo(w * 0.42, h * 0.52, w * 0.41, h * 0.35, w * 0.38, h * 0.28);
  ctx.stroke();

  ctx.beginPath();
  ctx.moveTo(w * 0.9, h * 0.28);
  ctx.bezierCurveTo(w * 0.94, h * 0.38, w * 0.93, h * 0.68, w * 0.85, h * 0.78);
  ctx.bezierCurveTo(w * 0.76, h * 0.82, w * 0.62, h * 0.78, w * 0.6, h * 0.68);
  ctx.bezierCurveTo(w * 0.58, h * 0.52, w * 0.59, h * 0.35, w * 0.62, h * 0.28);
  ctx.stroke();

  // Parietal pleura (outer)
  ctx.strokeStyle = color.dark;
  ctx.lineWidth = 1.5;
  ctx.setLineDash([4, 3]);
  ctx.beginPath();
  ctx.moveTo(w * 0.08, h * 0.25);
  ctx.bezierCurveTo(w * 0.03, h * 0.38, w * 0.04, h * 0.7, w * 0.12, h * 0.82);
  ctx.bezierCurveTo(w * 0.22, h * 0.87, w * 0.4, h * 0.84, w * 0.43, h * 0.72);
  ctx.stroke();

  ctx.beginPath();
  ctx.moveTo(w * 0.92, h * 0.25);
  ctx.bezierCurveTo(w * 0.97, h * 0.38, w * 0.96, h * 0.7, w * 0.88, h * 0.82);
  ctx.bezierCurveTo(w * 0.78, h * 0.87, w * 0.6, h * 0.84, w * 0.57, h * 0.72);
  ctx.stroke();
  ctx.setLineDash([]);

  // Mediastinum
  ctx.fillStyle = color.dark;
  ctx.font = `${w * 0.038}px sans-serif`;
  ctx.fillText('Mediastinum', w * 0.36, h * 0.5);
  ctx.fillText('Pleural fluid', w * 0.04, h * 0.55);
  ctx.fillText('Pleural fluid', w * 0.75, h * 0.55);
}

static drawLungLobes(ctx, color, w, h) {
  // Right lung — 3 lobes
  const rGrad = ctx.createRadialGradient(w * 0.72, h * 0.5, 0, w * 0.72, h * 0.5, w * 0.28);
  rGrad.addColorStop(0, color.light);
  rGrad.addColorStop(1, color.dark);

  // Superior lobe
  ctx.fillStyle = rGrad;
  ctx.beginPath();
  ctx.moveTo(w * 0.58, h * 0.22);
  ctx.bezierCurveTo(w * 0.65, h * 0.18, w * 0.82, h * 0.18, w * 0.88, h * 0.26);
  ctx.bezierCurveTo(w * 0.91, h * 0.33, w * 0.9, h * 0.42, w * 0.87, h * 0.44);
  ctx.lineTo(w * 0.58, h * 0.42);
  ctx.closePath();
  ctx.fill();
  ctx.strokeStyle = color.dark;
  ctx.lineWidth = 1.5;
  ctx.stroke();

  // Middle lobe
  ctx.beginPath();
  ctx.moveTo(w * 0.58, h * 0.42);
  ctx.lineTo(w * 0.87, h * 0.44);
  ctx.bezierCurveTo(w * 0.9, h * 0.5, w * 0.88, h * 0.56, w * 0.86, h * 0.58);
  ctx.lineTo(w * 0.58, h * 0.56);
  ctx.closePath();
  ctx.fill();
  ctx.stroke();

  // Inferior lobe
  ctx.beginPath();
  ctx.moveTo(w * 0.58, h * 0.56);
  ctx.lineTo(w * 0.86, h * 0.58);
  ctx.bezierCurveTo(w * 0.9, h * 0.67, w * 0.88, h * 0.76, w * 0.8, h * 0.8);
  ctx.bezierCurveTo(w * 0.7, h * 0.82, w * 0.6, h * 0.78, w * 0.58, h * 0.7);
  ctx.closePath();
  ctx.fill();
  ctx.stroke();

  // Left lung — 2 lobes
  const lGrad = ctx.createRadialGradient(w * 0.28, h * 0.5, 0, w * 0.28, h * 0.5, w * 0.25);
  lGrad.addColorStop(0, color.light);
  lGrad.addColorStop(1, color.dark);

  // Superior lobe
  ctx.fillStyle = lGrad;
  ctx.beginPath();
  ctx.moveTo(w * 0.42, h * 0.22);
  ctx.bezierCurveTo(w * 0.35, h * 0.18, w * 0.18, h * 0.18, w * 0.12, h * 0.26);
  ctx.bezierCurveTo(w * 0.09, h * 0.33, w * 0.1, h * 0.5, w * 0.12, h * 0.54);
  ctx.lineTo(w * 0.42, h * 0.52);
  ctx.closePath();
  ctx.fill();
  ctx.stroke();

  // Inferior lobe
  ctx.beginPath();
  ctx.moveTo(w * 0.42, h * 0.52);
  ctx.lineTo(w * 0.12, h * 0.54);
  ctx.bezierCurveTo(w * 0.1, h * 0.64, w * 0.12, h * 0.76, w * 0.2, h * 0.8);
  ctx.bezierCurveTo(w * 0.3, h * 0.83, w * 0.4, h * 0.78, w * 0.42, h * 0.7);
  ctx.closePath();
  ctx.fill();
  ctx.stroke();

  // Fissure labels
  ctx.fillStyle = color.dark;
  ctx.font = `${w * 0.032}px sans-serif`;
  ctx.fillText('Horizontal', w * 0.86, h * 0.43);
  ctx.fillText('fissure', w * 0.87, h * 0.47);
  ctx.fillText('Oblique', w * 0.87, h * 0.57);
  ctx.fillText('fissure', w * 0.87, h * 0.61);
}

// ============================================================
// REPRODUCTIVE (MALE) — Missing Drawing Methods
// ============================================================

static drawTestis(ctx, color, w, h) {
  const gradient = ctx.createRadialGradient(w * 0.5, h * 0.5, 0, w * 0.5, h * 0.5, w * 0.3);
  gradient.addColorStop(0, color.light);
  gradient.addColorStop(0.6, color.base);
  gradient.addColorStop(1, color.dark);

  // Tunica vaginalis (outer covering)
  ctx.fillStyle = 'rgba(220,220,240,0.4)';
  ctx.strokeStyle = color.dark;
  ctx.lineWidth = 1.5;
  ctx.beginPath();
  ctx.ellipse(w * 0.5, h * 0.52, w * 0.28, h * 0.38, 0, 0, Math.PI * 2);
  ctx.fill(); ctx.stroke();

  // Testis body
  ctx.fillStyle = gradient;
  ctx.beginPath();
  ctx.ellipse(w * 0.5, h * 0.54, w * 0.24, h * 0.34, 0, 0, Math.PI * 2);
  ctx.fill(); ctx.stroke();

  // Septa (lobule divisions)
  ctx.strokeStyle = color.dark;
  ctx.lineWidth = 0.6;
  ctx.globalAlpha = 0.4;
  for (let i = 1; i < 6; i++) {
    const angle = (i / 6) * Math.PI * 2;
    ctx.beginPath();
    ctx.moveTo(w * 0.5, h * 0.3);
    ctx.lineTo(w * 0.5 + Math.cos(angle) * w * 0.22, h * 0.54 + Math.sin(angle) * h * 0.32);
    ctx.stroke();
  }
  ctx.globalAlpha = 1;

  // Seminiferous tubules (coiled, shown schematically)
  ctx.strokeStyle = color.base;
  ctx.lineWidth = 1;
  [[0.42, 0.48], [0.52, 0.44], [0.6, 0.52], [0.44, 0.62], [0.56, 0.66]].forEach(([cx, cy]) => {
    ctx.beginPath();
    ctx.arc(w * cx, h * cy, w * 0.04, 0, Math.PI * 2);
    ctx.stroke();
  });

  // Epididymis (attached to posterior)
  ctx.fillStyle = color.dark;
  ctx.strokeStyle = color.dark;
  ctx.lineWidth = 3;
  ctx.beginPath();
  ctx.moveTo(w * 0.74, h * 0.25);
  ctx.bezierCurveTo(w * 0.8, h * 0.3, w * 0.82, h * 0.4, w * 0.78, h * 0.5);
  ctx.bezierCurveTo(w * 0.76, h * 0.6, w * 0.74, h * 0.72, w * 0.72, h * 0.8);
  ctx.stroke();

  // Rete testis
  ctx.fillStyle = color.dark;
  ctx.beginPath();
  ctx.ellipse(w * 0.7, h * 0.35, w * 0.04, h * 0.06, 0.5, 0, Math.PI * 2);
  ctx.fill();

  ctx.fillStyle = color.dark;
  ctx.font = `${w * 0.034}px sans-serif`;
  ctx.fillText('Testis', w * 0.36, h * 0.5);
  ctx.fillText('Seminiferous', w * 0.08, h * 0.54);
  ctx.fillText('tubules', w * 0.1, h * 0.59);
  ctx.fillText('Rete testis', w * 0.73, h * 0.3);
  ctx.fillText('Epididymis', w * 0.82, h * 0.52);
}

static drawEpididymis(ctx, color, w, h) {
  ctx.strokeStyle = color.dark;
  ctx.lineWidth = 2;

  // Testis outline (context)
  ctx.fillStyle = '#f5d5c5';
  ctx.strokeStyle = '#c0a090';
  ctx.setLineDash([4, 3]);
  ctx.lineWidth = 1.5;
  ctx.beginPath();
  ctx.ellipse(w * 0.38, h * 0.55, w * 0.2, h * 0.3, 0, 0, Math.PI * 2);
  ctx.fill(); ctx.stroke();
  ctx.setLineDash([]);

  // Epididymis — head, body, tail
  const epiGrad = ctx.createLinearGradient(w * 0.6, h * 0.15, w * 0.8, h * 0.9);
  epiGrad.addColorStop(0, color.light);
  epiGrad.addColorStop(1, color.dark);

  // Head (caput) — large, superior
  ctx.fillStyle = epiGrad;
  ctx.strokeStyle = color.dark;
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.ellipse(w * 0.62, h * 0.28, w * 0.1, h * 0.1, 0, 0, Math.PI * 2);
  ctx.fill(); ctx.stroke();

  // Body (corpus) — tubular middle section, coiled
  ctx.beginPath();
  ctx.moveTo(w * 0.62, h * 0.38);
  ctx.bezierCurveTo(w * 0.68, h * 0.42, w * 0.72, h * 0.5, w * 0.68, h * 0.58);
  ctx.bezierCurveTo(w * 0.65, h * 0.64, w * 0.6, h * 0.66, w * 0.58, h * 0.7);
  ctx.lineWidth = 8;
  ctx.strokeStyle = color.base;
  ctx.stroke();
  ctx.lineWidth = 2;
  ctx.strokeStyle = color.dark;
  ctx.stroke();

  // Tail (cauda) — inferior
  ctx.fillStyle = epiGrad;
  ctx.strokeStyle = color.dark;
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.ellipse(w * 0.58, h * 0.76, w * 0.08, h * 0.07, 0.3, 0, Math.PI * 2);
  ctx.fill(); ctx.stroke();

  // Vas deferens arising from tail
  ctx.strokeStyle = color.base;
  ctx.lineWidth = 5;
  ctx.beginPath();
  ctx.moveTo(w * 0.54, h * 0.8);
  ctx.bezierCurveTo(w * 0.5, h * 0.88, w * 0.44, h * 0.9, w * 0.4, h * 0.88);
  ctx.stroke();
  ctx.strokeStyle = color.dark;
  ctx.lineWidth = 2;
  ctx.stroke();

  // Efferent ductules from testis
  ctx.strokeStyle = color.dark;
  ctx.lineWidth = 1;
  for (let i = 0; i < 4; i++) {
    ctx.beginPath();
    ctx.moveTo(w * (0.56 + i * 0.01), h * 0.28);
    ctx.lineTo(w * (0.54 + i * 0.01), h * 0.22);
    ctx.stroke();
  }

  ctx.fillStyle = color.dark;
  ctx.font = `${w * 0.035}px sans-serif`;
  ctx.fillText('Head (caput)', w * 0.72, h * 0.26);
  ctx.fillText('Body (corpus)', w * 0.72, h * 0.52);
  ctx.fillText('Tail (cauda)', w * 0.68, h * 0.78);
  ctx.fillText('Vas deferens', w * 0.28, h * 0.92);
  ctx.fillText('Testis', w * 0.26, h * 0.52);
}

static drawVasDeferens(ctx, color, w, h) {
  ctx.lineCap = 'round';

  // Vas deferens tube — from scrotum up through inguinal canal to ejaculatory duct
  ctx.strokeStyle = color.base;
  ctx.lineWidth = 8;
  ctx.beginPath();
  ctx.moveTo(w * 0.42, h * 0.88);
  ctx.bezierCurveTo(w * 0.4, h * 0.75, w * 0.35, h * 0.6, w * 0.32, h * 0.45);
  ctx.bezierCurveTo(w * 0.3, h * 0.35, w * 0.32, h * 0.25, w * 0.4, h * 0.2);
  ctx.bezierCurveTo(w * 0.48, h * 0.16, w * 0.56, h * 0.2, w * 0.6, h * 0.28);
  ctx.bezierCurveTo(w * 0.62, h * 0.35, w * 0.6, h * 0.45, w * 0.55, h * 0.52);
  ctx.stroke();
  ctx.lineWidth = 2;
  ctx.strokeStyle = color.dark;
  ctx.beginPath();
  ctx.moveTo(w * 0.42, h * 0.88);
  ctx.bezierCurveTo(w * 0.4, h * 0.75, w * 0.35, h * 0.6, w * 0.32, h * 0.45);
  ctx.bezierCurveTo(w * 0.3, h * 0.35, w * 0.32, h * 0.25, w * 0.4, h * 0.2);
  ctx.bezierCurveTo(w * 0.48, h * 0.16, w * 0.56, h * 0.2, w * 0.6, h * 0.28);
  ctx.bezierCurveTo(w * 0.62, h * 0.35, w * 0.6, h * 0.45, w * 0.55, h * 0.52);
  ctx.stroke();

  // Ampulla (dilated end)
  ctx.fillStyle = color.base;
  ctx.strokeStyle = color.dark;
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.ellipse(w * 0.52, h * 0.55, w * 0.05, h * 0.07, 0.4, 0, Math.PI * 2);
  ctx.fill(); ctx.stroke();

  // Cross-section inset
  ctx.fillStyle = color.light;
  ctx.beginPath();
  ctx.arc(w * 0.78, h * 0.42, w * 0.1, 0, Math.PI * 2);
  ctx.fill(); ctx.stroke();
  // Lumen
  ctx.fillStyle = '#e8f4ff';
  ctx.beginPath();
  ctx.arc(w * 0.78, h * 0.42, w * 0.05, 0, Math.PI * 2);
  ctx.fill();
  // Muscular layers ring
  ctx.strokeStyle = color.dark;
  ctx.lineWidth = 4;
  ctx.beginPath();
  ctx.arc(w * 0.78, h * 0.42, w * 0.075, 0, Math.PI * 2);
  ctx.stroke();

  // Testis at bottom
  ctx.fillStyle = '#f0e0d0';
  ctx.strokeStyle = '#c09080';
  ctx.lineWidth = 1.5;
  ctx.setLineDash([4, 3]);
  ctx.beginPath();
  ctx.ellipse(w * 0.44, h * 0.92, w * 0.12, h * 0.06, 0, 0, Math.PI * 2);
  ctx.fill(); ctx.stroke();
  ctx.setLineDash([]);

  ctx.fillStyle = color.dark;
  ctx.font = `${w * 0.034}px sans-serif`;
  ctx.fillText('Vas deferens', w * 0.05, h * 0.35);
  ctx.fillText('Ampulla', w * 0.58, h * 0.52);
  ctx.fillText('Cross-section', w * 0.7, h * 0.3);
  ctx.fillText('Muscular wall', w * 0.7, h * 0.56);
  ctx.fillText('Testis', w * 0.36, h * 0.96);
}

static drawProstate(ctx, color, w, h) {
  const gradient = ctx.createRadialGradient(w * 0.5, h * 0.48, 0, w * 0.5, h * 0.48, w * 0.3);
  gradient.addColorStop(0, color.light);
  gradient.addColorStop(0.6, color.base);
  gradient.addColorStop(1, color.dark);

  // Prostate gland body (walnut-shaped)
  ctx.fillStyle = gradient;
  ctx.strokeStyle = color.dark;
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.moveTo(w * 0.5, h * 0.22);
  ctx.bezierCurveTo(w * 0.7, h * 0.22, w * 0.78, h * 0.34, w * 0.78, h * 0.48);
  ctx.bezierCurveTo(w * 0.78, h * 0.65, w * 0.66, h * 0.75, w * 0.5, h * 0.75);
  ctx.bezierCurveTo(w * 0.34, h * 0.75, w * 0.22, h * 0.65, w * 0.22, h * 0.48);
  ctx.bezierCurveTo(w * 0.22, h * 0.34, w * 0.3, h * 0.22, w * 0.5, h * 0.22);
  ctx.fill(); ctx.stroke();

  // Zones
  // Peripheral zone (largest, posterior)
  ctx.fillStyle = color.base;
  ctx.globalAlpha = 0.5;
  ctx.beginPath();
  ctx.ellipse(w * 0.5, h * 0.56, w * 0.22, h * 0.14, 0, 0, Math.PI * 2);
  ctx.fill();
  ctx.globalAlpha = 1;

  // Central zone
  ctx.fillStyle = color.light;
  ctx.globalAlpha = 0.5;
  ctx.beginPath();
  ctx.ellipse(w * 0.5, h * 0.4, w * 0.12, h * 0.1, 0, 0, Math.PI * 2);
  ctx.fill();
  ctx.globalAlpha = 1;

  // Transitional zone (periurethral)
  ctx.fillStyle = '#ffeecc';
  ctx.globalAlpha = 0.7;
  ctx.beginPath();
  ctx.ellipse(w * 0.5, h * 0.46, w * 0.06, h * 0.08, 0, 0, Math.PI * 2);
  ctx.fill();
  ctx.globalAlpha = 1;

  // Urethra passing through
  ctx.strokeStyle = '#8888ff';
  ctx.lineWidth = 4;
  ctx.beginPath();
  ctx.moveTo(w * 0.5, h * 0.18);
  ctx.lineTo(w * 0.5, h * 0.78);
  ctx.stroke();

  // Ejaculatory ducts
  ctx.strokeStyle = color.dark;
  ctx.lineWidth = 2;
  [[0.44, 0.28, 0.5, 0.45], [0.56, 0.28, 0.5, 0.45]].forEach(([x1, y1, x2, y2]) => {
    ctx.beginPath();
    ctx.moveTo(w * x1, h * y1);
    ctx.bezierCurveTo(w * x1, h * 0.38, w * x2, h * 0.4, w * x2, h * y2);
    ctx.stroke();
  });

  ctx.fillStyle = color.dark;
  ctx.font = `${w * 0.033}px sans-serif`;
  ctx.fillText('Peripheral zone', w * 0.6, h * 0.6);
  ctx.fillText('Central zone', w * 0.6, h * 0.4);
  ctx.fillText('Transition zone', w * 0.04, h * 0.46);
  ctx.fillText('Urethra', w * 0.52, h * 0.88);
  ctx.fillText('Ejaculatory', w * 0.04, h * 0.3);
  ctx.fillText('ducts', w * 0.05, h * 0.35);
}

static drawSeminalVesicle(ctx, color, w, h) {
  const gradient = ctx.createLinearGradient(w * 0.2, h * 0.2, w * 0.8, h * 0.8);
  gradient.addColorStop(0, color.light);
  gradient.addColorStop(1, color.base);

  // Pair of seminal vesicles
  // Left
  ctx.fillStyle = gradient;
  ctx.strokeStyle = color.dark;
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.moveTo(w * 0.25, h * 0.35);
  ctx.bezierCurveTo(w * 0.18, h * 0.38, w * 0.16, h * 0.5, w * 0.2, h * 0.6);
  ctx.bezierCurveTo(w * 0.24, h * 0.7, w * 0.34, h * 0.74, w * 0.42, h * 0.7);
  ctx.bezierCurveTo(w * 0.48, h * 0.66, w * 0.48, h * 0.56, w * 0.44, h * 0.5);
  ctx.bezierCurveTo(w * 0.42, h * 0.44, w * 0.36, h * 0.4, w * 0.32, h * 0.38);
  ctx.bezierCurveTo(w * 0.28, h * 0.35, w * 0.25, h * 0.35, w * 0.25, h * 0.35);
  ctx.fill(); ctx.stroke();

  // Right
  ctx.beginPath();
  ctx.moveTo(w * 0.75, h * 0.35);
  ctx.bezierCurveTo(w * 0.82, h * 0.38, w * 0.84, h * 0.5, w * 0.8, h * 0.6);
  ctx.bezierCurveTo(w * 0.76, h * 0.7, w * 0.66, h * 0.74, w * 0.58, h * 0.7);
  ctx.bezierCurveTo(w * 0.52, h * 0.66, w * 0.52, h * 0.56, w * 0.56, h * 0.5);
  ctx.bezierCurveTo(w * 0.58, h * 0.44, w * 0.64, h * 0.4, w * 0.68, h * 0.38);
  ctx.bezierCurveTo(w * 0.72, h * 0.35, w * 0.75, h * 0.35, w * 0.75, h * 0.35);
  ctx.fill(); ctx.stroke();

  // Internal folds (mucosal folding)
  ctx.strokeStyle = color.dark;
  ctx.lineWidth = 0.8;
  [[0.26, 0.44, 0.38, 0.48], [0.22, 0.52, 0.36, 0.58], [0.74, 0.44, 0.62, 0.48], [0.78, 0.52, 0.64, 0.58]].forEach(([x1, y1, x2, y2]) => {
    ctx.beginPath();
    ctx.moveTo(w * x1, h * y1);
    ctx.bezierCurveTo(w * ((x1 + x2) / 2), h * (y1 + 0.04), w * ((x1 + x2) / 2), h * y2, w * x2, h * y2);
    ctx.stroke();
  });

  // Excretory ducts joining vas deferens
  ctx.strokeStyle = color.dark;
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.moveTo(w * 0.4, h * 0.66);
  ctx.bezierCurveTo(w * 0.44, h * 0.72, w * 0.48, h * 0.78, w * 0.5, h * 0.82);
  ctx.stroke();
  ctx.beginPath();
  ctx.moveTo(w * 0.6, h * 0.66);
  ctx.bezierCurveTo(w * 0.56, h * 0.72, w * 0.52, h * 0.78, w * 0.5, h * 0.82);
  ctx.stroke();

  // Vas deferens entering top
  [[0.3, 0.22, 0.28, 0.38], [0.7, 0.22, 0.72, 0.38]].forEach(([x1, y1, x2, y2]) => {
    ctx.strokeStyle = color.base;
    ctx.lineWidth = 5;
    ctx.beginPath();
    ctx.moveTo(w * x1, h * y1);
    ctx.lineTo(w * x2, h * y2);
    ctx.stroke();
    ctx.strokeStyle = color.dark;
    ctx.lineWidth = 1.5;
    ctx.beginPath();
    ctx.moveTo(w * x1, h * y1);
    ctx.lineTo(w * x2, h * y2);
    ctx.stroke();
  });

  ctx.fillStyle = color.dark;
  ctx.font = `${w * 0.035}px sans-serif`;
  ctx.fillText('Seminal vesicles', w * 0.3, h * 0.18);
  ctx.fillText('Vas deferens', w * 0.18, h * 0.18);
  ctx.fillText('Excretory duct', w * 0.36, h * 0.88);
}

static drawPenis(ctx, color, w, h) {
  const gradient = ctx.createLinearGradient(w * 0.35, h * 0.1, w * 0.65, h * 0.9);
  gradient.addColorStop(0, color.light);
  gradient.addColorStop(0.5, color.base);
  gradient.addColorStop(1, color.dark);

  // Shaft
  ctx.fillStyle = gradient;
  ctx.strokeStyle = color.dark;
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.rect(w * 0.36, h * 0.2, w * 0.28, h * 0.55);
  ctx.fill(); ctx.stroke();

  // Glans penis
  ctx.fillStyle = color.base;
  ctx.beginPath();
  ctx.moveTo(w * 0.36, h * 0.75);
  ctx.bezierCurveTo(w * 0.32, h * 0.8, w * 0.32, h * 0.9, w * 0.5, h * 0.92);
  ctx.bezierCurveTo(w * 0.68, h * 0.9, w * 0.68, h * 0.8, w * 0.64, h * 0.75);
  ctx.closePath();
  ctx.fill(); ctx.stroke();

  // Corona
  ctx.strokeStyle = color.dark;
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.moveTo(w * 0.34, h * 0.76);
  ctx.bezierCurveTo(w * 0.38, h * 0.73, w * 0.62, h * 0.73, w * 0.66, h * 0.76);
  ctx.stroke();

  // Cross section showing erectile tissue
  // Corpora cavernosa (2)
  ctx.fillStyle = '#cc4444';
  ctx.beginPath();
  ctx.ellipse(w * 0.44, h * 0.45, w * 0.07, h * 0.12, 0, 0, Math.PI * 2);
  ctx.fill();
  ctx.beginPath();
  ctx.ellipse(w * 0.56, h * 0.45, w * 0.07, h * 0.12, 0, 0, Math.PI * 2);
  ctx.fill();
  ctx.strokeStyle = color.dark;
  ctx.lineWidth = 1;
  [0.44, 0.56].forEach(x => {
    ctx.beginPath();
    ctx.ellipse(w * x, h * 0.45, w * 0.07, h * 0.12, 0, 0, Math.PI * 2);
    ctx.stroke();
  });

  // Corpus spongiosum (1, ventral, surrounds urethra)
  ctx.fillStyle = '#ff8866';
  ctx.beginPath();
  ctx.ellipse(w * 0.5, h * 0.62, w * 0.05, h * 0.05, 0, 0, Math.PI * 2);
  ctx.fill();
  ctx.strokeStyle = color.dark;
  ctx.lineWidth = 1;
  ctx.stroke();

  // Urethra
  ctx.fillStyle = '#8888ff';
  ctx.beginPath();
  ctx.arc(w * 0.5, h * 0.62, w * 0.02, 0, Math.PI * 2);
  ctx.fill();

  // External urethral meatus
  ctx.fillStyle = '#6666ff';
  ctx.beginPath();
  ctx.arc(w * 0.5, h * 0.9, w * 0.012, 0, Math.PI * 2);
  ctx.fill();

  ctx.fillStyle = color.dark;
  ctx.font = `${w * 0.032}px sans-serif`;
  ctx.fillText('Glans', w * 0.7, h * 0.83);
  ctx.fillText('Corpora cavernosa', w * 0.68, h * 0.45);
  ctx.fillText('Corpus spongiosum', w * 0.68, h * 0.62);
  ctx.fillText('Urethra', w * 0.68, h * 0.68);
  ctx.fillText('Urethral meatus', w * 0.55, h * 0.94);
}

// ============================================================
// REPRODUCTIVE (FEMALE) — Missing Drawing Methods
// ============================================================

static drawOvary(ctx, color, w, h) {
  const gradient = ctx.createRadialGradient(w * 0.5, h * 0.5, 0, w * 0.5, h * 0.5, w * 0.28);
  gradient.addColorStop(0, color.light);
  gradient.addColorStop(0.6, color.base);
  gradient.addColorStop(1, color.dark);

  ctx.fillStyle = gradient;
  ctx.strokeStyle = color.dark;
  ctx.lineWidth = 2;

  // Ovary (almond-shaped)
  ctx.beginPath();
  ctx.moveTo(w * 0.5, h * 0.18);
  ctx.bezierCurveTo(w * 0.72, h * 0.18, w * 0.78, h * 0.35, w * 0.78, h * 0.5);
  ctx.bezierCurveTo(w * 0.78, h * 0.65, w * 0.72, h * 0.82, w * 0.5, h * 0.82);
  ctx.bezierCurveTo(w * 0.28, h * 0.82, w * 0.22, h * 0.65, w * 0.22, h * 0.5);
  ctx.bezierCurveTo(w * 0.22, h * 0.35, w * 0.28, h * 0.18, w * 0.5, h * 0.18);
  ctx.fill(); ctx.stroke();

  // Follicles at various stages
  // Primordial follicles (tiny)
  ctx.fillStyle = color.dark;
  [[0.35, 0.28], [0.42, 0.25], [0.58, 0.26], [0.66, 0.32], [0.68, 0.45], [0.65, 0.7], [0.42, 0.73], [0.32, 0.62]].forEach(([px, py]) => {
    ctx.beginPath();
    ctx.arc(w * px, h * py, w * 0.012, 0, Math.PI * 2);
    ctx.fill();
  });

  // Primary follicle
  ctx.fillStyle = '#ffe0a0';
  ctx.strokeStyle = color.dark;
  ctx.lineWidth = 1;
  ctx.beginPath();
  ctx.arc(w * 0.38, h * 0.42, w * 0.03, 0, Math.PI * 2);
  ctx.fill(); ctx.stroke();

  // Secondary follicle
  ctx.fillStyle = '#ffcc88';
  ctx.beginPath();
  ctx.arc(w * 0.6, h * 0.56, w * 0.045, 0, Math.PI * 2);
  ctx.fill(); ctx.stroke();

  // Graafian follicle (mature, large with antrum)
  ctx.fillStyle = '#fff0e0';
  ctx.beginPath();
  ctx.arc(w * 0.44, h * 0.6, w * 0.07, 0, Math.PI * 2);
  ctx.fill();
  ctx.strokeStyle = color.dark;
  ctx.lineWidth = 1.5;
  ctx.stroke();
  // Antrum (fluid-filled space)
  ctx.fillStyle = '#e8f8ff';
  ctx.beginPath();
  ctx.arc(w * 0.44, h * 0.6, w * 0.04, 0, Math.PI * 2);
  ctx.fill();
  // Oocyte
  ctx.fillStyle = color.base;
  ctx.beginPath();
  ctx.arc(w * 0.42, h * 0.58, w * 0.015, 0, Math.PI * 2);
  ctx.fill();

  // Corpus luteum
  ctx.fillStyle = '#f5d060';
  ctx.strokeStyle = color.dark;
  ctx.lineWidth = 1.5;
  ctx.beginPath();
  ctx.arc(w * 0.58, h * 0.4, w * 0.055, 0, Math.PI * 2);
  ctx.fill(); ctx.stroke();

  ctx.fillStyle = color.dark;
  ctx.font = `${w * 0.032}px sans-serif`;
  ctx.fillText('Corpus luteum', w * 0.62, h * 0.36);
  ctx.fillText('Graafian follicle', w * 0.5, h * 0.7);
  ctx.fillText('Secondary', w * 0.64, h * 0.54);
  ctx.fillText('Primordial', w * 0.05, h * 0.28);
}

static drawFallopianTube(ctx, color, w, h) {
  ctx.lineCap = 'round';

  // Fallopian tube — 4 regions
  ctx.strokeStyle = color.base;
  ctx.lineWidth = 10;
  ctx.beginPath();
  // Interstitial/isthmus (narrow, from uterus)
  ctx.moveTo(w * 0.35, h * 0.62);
  ctx.bezierCurveTo(w * 0.3, h * 0.55, w * 0.22, h * 0.48, w * 0.2, h * 0.4);
  // Ampulla (wider, curved)
  ctx.bezierCurveTo(w * 0.18, h * 0.3, w * 0.22, h * 0.2, w * 0.35, h * 0.18);
  // Infundibulum (funnel-shaped end)
  ctx.bezierCurveTo(w * 0.45, h * 0.16, w * 0.5, h * 0.18, w * 0.52, h * 0.22);
  ctx.stroke();

  ctx.lineWidth = 2;
  ctx.strokeStyle = color.dark;
  ctx.beginPath();
  ctx.moveTo(w * 0.35, h * 0.62);
  ctx.bezierCurveTo(w * 0.3, h * 0.55, w * 0.22, h * 0.48, w * 0.2, h * 0.4);
  ctx.bezierCurveTo(w * 0.18, h * 0.3, w * 0.22, h * 0.2, w * 0.35, h * 0.18);
  ctx.bezierCurveTo(w * 0.45, h * 0.16, w * 0.5, h * 0.18, w * 0.52, h * 0.22);
  ctx.stroke();

  // Fimbriae (finger-like projections at infundibulum)
  const fimbriae = [[0.52, 0.22], [0.56, 0.18], [0.58, 0.24], [0.55, 0.28], [0.52, 0.3]];
  ctx.strokeStyle = color.dark;
  ctx.lineWidth = 2;
  fimbriae.forEach(([fx, fy]) => {
    ctx.beginPath();
    ctx.moveTo(w * 0.52, h * 0.24);
    ctx.bezierCurveTo(w * fx, h * fy, w * (fx + 0.02), h * (fy - 0.02), w * (fx + 0.03), h * fy);
    ctx.stroke();
  });

  // Ovary
  ctx.fillStyle = color.light;
  ctx.strokeStyle = color.dark;
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.ellipse(w * 0.7, h * 0.3, w * 0.1, h * 0.14, 0.3, 0, Math.PI * 2);
  ctx.fill(); ctx.stroke();

  // Uterus outline
  ctx.fillStyle = '#f5d0c0';
  ctx.strokeStyle = '#c09080';
  ctx.lineWidth = 1.5;
  ctx.setLineDash([4, 3]);
  ctx.beginPath();
  ctx.moveTo(w * 0.35, h * 0.55);
  ctx.bezierCurveTo(w * 0.3, h * 0.58, w * 0.28, h * 0.72, w * 0.35, h * 0.82);
  ctx.bezierCurveTo(w * 0.42, h * 0.88, w * 0.58, h * 0.88, w * 0.65, h * 0.82);
  ctx.bezierCurveTo(w * 0.72, h * 0.72, w * 0.7, h * 0.58, w * 0.65, h * 0.55);
  ctx.bezierCurveTo(w * 0.55, h * 0.52, w * 0.45, h * 0.52, w * 0.35, h * 0.55);
  ctx.stroke();
  ctx.setLineDash([]);

  ctx.fillStyle = color.dark;
  ctx.font = `${w * 0.033}px sans-serif`;
  ctx.fillText('Interstitial', w * 0.05, h * 0.62);
  ctx.fillText('Isthmus', w * 0.05, h * 0.48);
  ctx.fillText('Ampulla', w * 0.06, h * 0.32);
  ctx.fillText('Infundibulum', w * 0.3, h * 0.12);
  ctx.fillText('Fimbriae', w * 0.6, h * 0.14);
  ctx.fillText('Ovary', w * 0.72, h * 0.18);
}

static drawUterus(ctx, color, w, h) {
  const gradient = ctx.createRadialGradient(w * 0.5, h * 0.5, 0, w * 0.5, h * 0.5, w * 0.38);
  gradient.addColorStop(0, color.light);
  gradient.addColorStop(0.6, color.base);
  gradient.addColorStop(1, color.dark);

  // Uterus (pear-shaped)
  ctx.fillStyle = gradient;
  ctx.strokeStyle = color.dark;
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.moveTo(w * 0.5, h * 0.12);
  ctx.bezierCurveTo(w * 0.72, h * 0.12, w * 0.82, h * 0.28, w * 0.82, h * 0.5);
  ctx.bezierCurveTo(w * 0.82, h * 0.64, w * 0.74, h * 0.72, w * 0.62, h * 0.76);
  ctx.lineTo(w * 0.58, h * 0.84);
  ctx.lineTo(w * 0.42, h * 0.84);
  ctx.lineTo(w * 0.38, h * 0.76);
  ctx.bezierCurveTo(w * 0.26, h * 0.72, w * 0.18, h * 0.64, w * 0.18, h * 0.5);
  ctx.bezierCurveTo(w * 0.18, h * 0.28, w * 0.28, h * 0.12, w * 0.5, h * 0.12);
  ctx.fill(); ctx.stroke();

  // Uterine cavity (interior)
  ctx.fillStyle = '#e8d0c8';
  ctx.beginPath();
  ctx.moveTo(w * 0.5, h * 0.2);
  ctx.bezierCurveTo(w * 0.58, h * 0.2, w * 0.65, h * 0.3, w * 0.65, h * 0.48);
  ctx.lineTo(w * 0.55, h * 0.72);
  ctx.lineTo(w * 0.45, h * 0.72);
  ctx.lineTo(w * 0.35, h * 0.48);
  ctx.bezierCurveTo(w * 0.35, h * 0.3, w * 0.42, h * 0.2, w * 0.5, h * 0.2);
  ctx.fill();

  // Endometrium (lining)
  ctx.strokeStyle = '#cc6655';
  ctx.lineWidth = 4;
  ctx.beginPath();
  ctx.moveTo(w * 0.5, h * 0.2);
  ctx.bezierCurveTo(w * 0.58, h * 0.2, w * 0.65, h * 0.3, w * 0.65, h * 0.48);
  ctx.lineTo(w * 0.55, h * 0.72);
  ctx.lineTo(w * 0.45, h * 0.72);
  ctx.lineTo(w * 0.35, h * 0.48);
  ctx.bezierCurveTo(w * 0.35, h * 0.3, w * 0.42, h * 0.2, w * 0.5, h * 0.2);
  ctx.stroke();

  // Myometrium (muscle layer)
  ctx.strokeStyle = color.base;
  ctx.lineWidth = 8;
  ctx.setLineDash([6, 3]);
  ctx.beginPath();
  ctx.moveTo(w * 0.5, h * 0.15);
  ctx.bezierCurveTo(w * 0.7, h * 0.15, w * 0.78, h * 0.3, w * 0.78, h * 0.5);
  ctx.bezierCurveTo(w * 0.78, h * 0.65, w * 0.7, h * 0.72, w * 0.6, h * 0.76);
  ctx.stroke();
  ctx.setLineDash([]);

  // Cervix
  ctx.fillStyle = color.dark;
  ctx.beginPath();
  ctx.rect(w * 0.44, h * 0.76, w * 0.12, h * 0.1);
  ctx.fill();
  ctx.strokeStyle = color.dark;
  ctx.lineWidth = 1.5;
  ctx.stroke();

  // Fallopian tube attachments
  [[0.22, 0.35], [0.78, 0.35]].forEach(([tx, ty]) => {
    ctx.strokeStyle = color.base;
    ctx.lineWidth = 5;
    ctx.beginPath();
    ctx.moveTo(tx < 0.5 ? w * 0.22 : w * 0.78, h * ty);
    ctx.lineTo(tx < 0.5 ? w * 0.1 : w * 0.9, h * 0.28);
    ctx.stroke();
    ctx.strokeStyle = color.dark;
    ctx.lineWidth = 1.5;
    ctx.beginPath();
    ctx.moveTo(tx < 0.5 ? w * 0.22 : w * 0.78, h * ty);
    ctx.lineTo(tx < 0.5 ? w * 0.1 : w * 0.9, h * 0.28);
    ctx.stroke();
  });

  ctx.fillStyle = color.dark;
  ctx.font = `${w * 0.033}px sans-serif`;
  ctx.fillText('Fundus', w * 0.44, h * 0.1);
  ctx.fillText('Body', w * 0.52, h * 0.44);
  ctx.fillText('Endometrium', w * 0.68, h * 0.32);
  ctx.fillText('Myometrium', w * 0.68, h * 0.44);
  ctx.fillText('Cervix', w * 0.57, h * 0.82);
  ctx.fillText('Fallopian tube', w * 0.02, h * 0.22);
}

static drawCervix(ctx, color, w, h) {
  const gradient = ctx.createLinearGradient(w * 0.3, h * 0.1, w * 0.7, h * 0.9);
  gradient.addColorStop(0, color.light);
  gradient.addColorStop(1, color.base);

  // Cervix body (cylindrical)
  ctx.fillStyle = gradient;
  ctx.strokeStyle = color.dark;
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.rect(w * 0.35, h * 0.12, w * 0.3, h * 0.55);
  ctx.fill(); ctx.stroke();

  // Endocervical canal
  ctx.fillStyle = '#f0c0b0';
  ctx.beginPath();
  ctx.rect(w * 0.46, h * 0.12, w * 0.08, h * 0.55);
  ctx.fill();

  // External os
  ctx.fillStyle = color.dark;
  ctx.beginPath();
  ctx.ellipse(w * 0.5, h * 0.67, w * 0.04, h * 0.02, 0, 0, Math.PI * 2);
  ctx.fill();

  // Internal os
  ctx.beginPath();
  ctx.ellipse(w * 0.5, h * 0.15, w * 0.04, h * 0.02, 0, 0, Math.PI * 2);
  ctx.fill();

  // Nabothian cysts (common cervical finding)
  ctx.fillStyle = '#e8f0ff';
  ctx.strokeStyle = color.dark;
  ctx.lineWidth = 1;
  [[0.38, 0.3], [0.42, 0.45], [0.6, 0.35], [0.62, 0.52]].forEach(([px, py]) => {
    ctx.beginPath();
    ctx.arc(w * px, h * py, w * 0.025, 0, Math.PI * 2);
    ctx.fill(); ctx.stroke();
  });

  // Vagina below
  ctx.fillStyle = color.light;
  ctx.strokeStyle = color.dark;
  ctx.lineWidth = 1.5;
  ctx.setLineDash([4, 3]);
  ctx.beginPath();
  ctx.moveTo(w * 0.35, h * 0.67);
  ctx.bezierCurveTo(w * 0.3, h * 0.72, w * 0.28, h * 0.85, w * 0.35, h * 0.9);
  ctx.lineTo(w * 0.65, h * 0.9);
  ctx.bezierCurveTo(w * 0.72, h * 0.85, w * 0.7, h * 0.72, w * 0.65, h * 0.67);
  ctx.stroke();
  ctx.setLineDash([]);

  // Rugae in vagina
  ctx.strokeStyle = '#c0a090';
  ctx.lineWidth = 0.8;
  [[0.37, 0.72, 0.63, 0.72], [0.36, 0.78, 0.64, 0.78], [0.37, 0.84, 0.63, 0.84]].forEach(([x1, y1, x2, y2]) => {
    ctx.beginPath();
    ctx.moveTo(w * x1, h * y1);
    ctx.bezierCurveTo(w * 0.45, h * (y1 - 0.02), w * 0.55, h * (y1 - 0.02), w * x2, h * y2);
    ctx.stroke();
  });

  ctx.fillStyle = color.dark;
  ctx.font = `${w * 0.035}px sans-serif`;
  ctx.fillText('Uterine body', w * 0.06, h * 0.12);
  ctx.fillText('Internal os', w * 0.54, h * 0.14);
  ctx.fillText('Cervix', w * 0.68, h * 0.38);
  ctx.fillText('Nabothian cysts', w * 0.65, h * 0.44);
  ctx.fillText('External os', w * 0.55, h * 0.7);
  ctx.fillText('Vagina', w * 0.68, h * 0.8);
}

static drawVagina(ctx, color, w, h) {
  const gradient = ctx.createLinearGradient(w * 0.3, h * 0.1, w * 0.7, h * 0.9);
  gradient.addColorStop(0, color.light);
  gradient.addColorStop(0.5, color.base);
  gradient.addColorStop(1, color.dark);

  // Vaginal walls (flattened tube)
  ctx.fillStyle = gradient;
  ctx.strokeStyle = color.dark;
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.moveTo(w * 0.3, h * 0.15);
  ctx.bezierCurveTo(w * 0.24, h * 0.25, w * 0.22, h * 0.55, w * 0.28, h * 0.72);
  ctx.bezierCurveTo(w * 0.33, h * 0.82, w * 0.42, h * 0.88, w * 0.5, h * 0.88);
  ctx.bezierCurveTo(w * 0.58, h * 0.88, w * 0.67, h * 0.82, w * 0.72, h * 0.72);
  ctx.bezierCurveTo(w * 0.78, h * 0.55, w * 0.76, h * 0.25, w * 0.7, h * 0.15);
  ctx.bezierCurveTo(w * 0.62, h * 0.1, w * 0.38, h * 0.1, w * 0.3, h * 0.15);
  ctx.fill(); ctx.stroke();

  // Lumen
  ctx.fillStyle = '#e8d0c8';
  ctx.beginPath();
  ctx.moveTo(w * 0.38, h * 0.16);
  ctx.bezierCurveTo(w * 0.34, h * 0.28, w * 0.32, h * 0.55, w * 0.36, h * 0.7);
  ctx.bezierCurveTo(w * 0.4, h * 0.8, w * 0.46, h * 0.84, w * 0.5, h * 0.84);
  ctx.bezierCurveTo(w * 0.54, h * 0.84, w * 0.6, h * 0.8, w * 0.64, h * 0.7);
  ctx.bezierCurveTo(w * 0.68, h * 0.55, w * 0.66, h * 0.28, w * 0.62, h * 0.16);
  ctx.bezierCurveTo(w * 0.56, h * 0.13, w * 0.44, h * 0.13, w * 0.38, h * 0.16);
  ctx.fill();

  // Rugae (transverse ridges)
  ctx.strokeStyle = color.dark;
  ctx.lineWidth = 1;
  [0.25, 0.35, 0.45, 0.55, 0.65, 0.75].forEach(y => {
    ctx.beginPath();
    ctx.moveTo(w * 0.36, h * y);
    ctx.bezierCurveTo(w * 0.44, h * (y - 0.02), w * 0.56, h * (y - 0.02), w * 0.64, h * y);
    ctx.stroke();
  });

  // Fornices (recesses around cervix at top)
  ctx.strokeStyle = color.dark;
  ctx.lineWidth = 1.5;
  ctx.beginPath();
  ctx.moveTo(w * 0.3, h * 0.16);
  ctx.bezierCurveTo(w * 0.35, h * 0.1, w * 0.42, h * 0.08, w * 0.5, h * 0.08);
  ctx.bezierCurveTo(w * 0.58, h * 0.08, w * 0.65, h * 0.1, w * 0.7, h * 0.16);
  ctx.stroke();

  // Vestibule at bottom
  ctx.fillStyle = '#cc8866';
  ctx.beginPath();
  ctx.ellipse(w * 0.5, h * 0.87, w * 0.06, h * 0.03, 0, 0, Math.PI * 2);
  ctx.fill();

  ctx.fillStyle = color.dark;
  ctx.font = `${w * 0.035}px sans-serif`;
  ctx.fillText('Fornix', w * 0.52, h * 0.08);
  ctx.fillText('Rugae', w * 0.68, h * 0.45);
  ctx.fillText('Vaginal wall', w * 0.04, h * 0.5);
  ctx.fillText('Lumen', w * 0.5, h * 0.5);
  ctx.fillText('Vestibule', w * 0.56, h * 0.9);
}

static drawBreast(ctx, color, w, h) {
  const gradient = ctx.createRadialGradient(w * 0.5, h * 0.52, 0, w * 0.5, h * 0.52, w * 0.4);
  gradient.addColorStop(0, color.light);
  gradient.addColorStop(0.6, color.base);
  gradient.addColorStop(1, color.dark);

  // Breast mound (sagittal section)
  ctx.fillStyle = gradient;
  ctx.strokeStyle = color.dark;
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.moveTo(w * 0.1, h * 0.25);
  ctx.bezierCurveTo(w * 0.08, h * 0.45, w * 0.12, h * 0.72, w * 0.28, h * 0.85);
  ctx.bezierCurveTo(w * 0.42, h * 0.92, w * 0.62, h * 0.9, w * 0.78, h * 0.8);
  ctx.bezierCurveTo(w * 0.9, h * 0.7, w * 0.92, h * 0.5, w * 0.85, h * 0.35);
  ctx.bezierCurveTo(w * 0.78, h * 0.22, w * 0.62, h * 0.18, w * 0.5, h * 0.2);
  ctx.bezierCurveTo(w * 0.35, h * 0.2, w * 0.18, h * 0.22, w * 0.1, h * 0.25);
  ctx.fill(); ctx.stroke();

  // Chest wall (pectoralis major)
  ctx.fillStyle = '#cc8877';
  ctx.strokeStyle = color.dark;
  ctx.lineWidth = 1.5;
  ctx.beginPath();
  ctx.rect(w * 0.06, h * 0.1, w * 0.06, h * 0.75);
  ctx.fill(); ctx.stroke();

  // Lobes (15-20 glandular lobes)
  const lobes = [
    [0.35, 0.35], [0.5, 0.3], [0.65, 0.38], [0.7, 0.52],
    [0.62, 0.65], [0.48, 0.68], [0.32, 0.6], [0.25, 0.48],
  ];
  lobes.forEach(([lx, ly]) => {
    ctx.fillStyle = '#f0d0b0';
    ctx.strokeStyle = color.dark;
    ctx.lineWidth = 0.8;
    ctx.beginPath();
    ctx.ellipse(w * lx, h * ly, w * 0.07, h * 0.06, Math.random() * Math.PI, 0, Math.PI * 2);
    ctx.fill(); ctx.stroke();
  });

  // Lactiferous ducts (converging to nipple)
  ctx.strokeStyle = color.dark;
  ctx.lineWidth = 1.5;
  lobes.forEach(([lx, ly]) => {
    ctx.beginPath();
    ctx.moveTo(w * lx, h * ly);
    ctx.bezierCurveTo(w * ((lx + 0.5) / 2), h * ((ly + 0.5) / 2), w * 0.48, h * 0.52, w * 0.5, h * 0.55);
    ctx.stroke();
  });

  // Nipple and areola
  ctx.fillStyle = '#c07060';
  ctx.beginPath();
  ctx.arc(w * 0.5, h * 0.55, w * 0.07, 0, Math.PI * 2);
  ctx.fill(); ctx.stroke();

  ctx.fillStyle = '#aa5040';
  ctx.beginPath();
  ctx.arc(w * 0.5, h * 0.55, w * 0.025, 0, Math.PI * 2);
  ctx.fill();

  // Fat lobules
  ctx.fillStyle = '#ffe8c0';
  ctx.globalAlpha = 0.4;
  [[0.25, 0.35], [0.72, 0.35], [0.72, 0.65], [0.28, 0.72]].forEach(([px, py]) => {
    ctx.beginPath();
    ctx.ellipse(w * px, h * py, w * 0.06, h * 0.06, 0, 0, Math.PI * 2);
    ctx.fill();
  });
  ctx.globalAlpha = 1;

  ctx.fillStyle = color.dark;
  ctx.font = `${w * 0.032}px sans-serif`;
  ctx.fillText('Pectoralis', w * 0.02, h * 0.42);
  ctx.fillText('Lobe', w * 0.6, h * 0.28);
  ctx.fillText('Lactiferous', w * 0.68, h * 0.55);
  ctx.fillText('ducts', w * 0.7, h * 0.6);
  ctx.fillText('Nipple', w * 0.55, h * 0.5);
  ctx.fillText('Areola', w * 0.55, h * 0.44);
  ctx.fillText('Fat', w * 0.73, h * 0.68);
}

// ============================================================
// ENDOCRINE — Missing Drawing Methods
// ============================================================

static drawPituitaryGland(ctx, color, w, h) {
  // Pituitary in sella turcica context
  ctx.fillStyle = color.dark;
  ctx.strokeStyle = color.dark;
  ctx.lineWidth = 1.5;

  // Sella turcica (bony cup)
  ctx.beginPath();
  ctx.moveTo(w * 0.22, h * 0.38);
  ctx.bezierCurveTo(w * 0.22, h * 0.6, w * 0.36, h * 0.68, w * 0.5, h * 0.68);
  ctx.bezierCurveTo(w * 0.64, h * 0.68, w * 0.78, h * 0.6, w * 0.78, h * 0.38);
  ctx.lineTo(w * 0.7, h * 0.38);
  ctx.bezierCurveTo(w * 0.7, h * 0.56, w * 0.62, h * 0.62, w * 0.5, h * 0.62);
  ctx.bezierCurveTo(w * 0.38, h * 0.62, w * 0.3, h * 0.56, w * 0.3, h * 0.38);
  ctx.closePath();
  ctx.fillStyle = '#d4c5a0';
  ctx.fill(); ctx.stroke();

  // Anterior lobe (adenohypophysis) — larger
  const aGrad = ctx.createRadialGradient(w * 0.42, h * 0.48, 0, w * 0.42, h * 0.48, w * 0.15);
  aGrad.addColorStop(0, color.light);
  aGrad.addColorStop(1, color.base);
  ctx.fillStyle = aGrad;
  ctx.strokeStyle = color.dark;
  ctx.lineWidth = 1.5;
  ctx.beginPath();
  ctx.ellipse(w * 0.42, h * 0.5, w * 0.14, h * 0.1, 0, 0, Math.PI * 2);
  ctx.fill(); ctx.stroke();

  // Posterior lobe (neurohypophysis) — smaller
  const pGrad = ctx.createRadialGradient(w * 0.58, h * 0.5, 0, w * 0.58, h * 0.5, w * 0.1);
  pGrad.addColorStop(0, color.light);
  pGrad.addColorStop(1, color.dark);
  ctx.fillStyle = pGrad;
  ctx.beginPath();
  ctx.ellipse(w * 0.58, h * 0.5, w * 0.09, h * 0.09, 0, 0, Math.PI * 2);
  ctx.fill(); ctx.stroke();

  // Pituitary stalk (infundibulum)
  ctx.fillStyle = color.base;
  ctx.strokeStyle = color.dark;
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.moveTo(w * 0.46, h * 0.4);
  ctx.lineTo(w * 0.54, h * 0.4);
  ctx.lineTo(w * 0.54, h * 0.18);
  ctx.lineTo(w * 0.46, h * 0.18);
  ctx.closePath();
  ctx.fill(); ctx.stroke();

  // Hypothalamus connection
  ctx.fillStyle = color.dark;
  ctx.beginPath();
  ctx.ellipse(w * 0.5, h * 0.17, w * 0.18, h * 0.05, 0, 0, Math.PI * 2);
  ctx.fill();

  ctx.fillStyle = color.dark;
  ctx.font = `${w * 0.036}px sans-serif`;
  ctx.fillText('Hypothalamus', w * 0.34, h * 0.12);
  ctx.fillText('Infundibulum', w * 0.56, h * 0.3);
  ctx.fillText('Anterior lobe', w * 0.08, h * 0.48);
  ctx.fillText('Posterior lobe', w * 0.64, h * 0.56);
  ctx.fillText('Sella turcica', w * 0.36, h * 0.74);
}

static drawHypothalamus(ctx, color, w, h) {
  const gradient = ctx.createRadialGradient(w * 0.5, h * 0.42, 0, w * 0.5, h * 0.42, w * 0.38);
  gradient.addColorStop(0, color.light);
  gradient.addColorStop(0.6, color.base);
  gradient.addColorStop(1, color.dark);

  // Brain outline for context
  ctx.fillStyle = '#f5e6d0';
  ctx.strokeStyle = color.dark;
  ctx.lineWidth = 1.5;
  ctx.setLineDash([4, 3]);
  ctx.beginPath();
  ctx.ellipse(w * 0.5, h * 0.38, w * 0.42, h * 0.32, 0, 0, Math.PI * 2);
  ctx.fill(); ctx.stroke();
  ctx.setLineDash([]);

  // Hypothalamus region
  ctx.fillStyle = gradient;
  ctx.strokeStyle = color.dark;
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.moveTo(w * 0.32, h * 0.48);
  ctx.bezierCurveTo(w * 0.3, h * 0.55, w * 0.32, h * 0.65, w * 0.4, h * 0.7);
  ctx.bezierCurveTo(w * 0.45, h * 0.73, w * 0.55, h * 0.73, w * 0.6, h * 0.7);
  ctx.bezierCurveTo(w * 0.68, h * 0.65, w * 0.7, h * 0.55, w * 0.68, h * 0.48);
  ctx.bezierCurveTo(w * 0.62, h * 0.44, w * 0.55, h * 0.43, w * 0.5, h * 0.43);
  ctx.bezierCurveTo(w * 0.45, h * 0.43, w * 0.38, h * 0.44, w * 0.32, h * 0.48);
  ctx.fill(); ctx.stroke();

  // Nuclei (clusters of neurons)
  const nuclei = [
    { x: 0.4, y: 0.52, label: 'Supraoptic' },
    { x: 0.52, y: 0.5, label: 'Paraventricular' },
    { x: 0.62, y: 0.54, label: 'Preoptic' },
    { x: 0.45, y: 0.62, label: 'Arcuate' },
    { x: 0.57, y: 0.63, label: 'Ventromedial' },
  ];
  nuclei.forEach(({ x, y }) => {
    ctx.fillStyle = color.dark;
    ctx.beginPath();
    ctx.arc(w * x, h * y, w * 0.025, 0, Math.PI * 2);
    ctx.fill();
  });

  // Infundibulum going down to pituitary
  ctx.fillStyle = color.base;
  ctx.strokeStyle = color.dark;
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.moveTo(w * 0.46, h * 0.72);
  ctx.lineTo(w * 0.54, h * 0.72);
  ctx.lineTo(w * 0.54, h * 0.88);
  ctx.lineTo(w * 0.46, h * 0.88);
  ctx.closePath();
  ctx.fill(); ctx.stroke();

  ctx.fillStyle = color.dark;
  ctx.font = `${w * 0.032}px sans-serif`;
  ctx.fillText('Hypothalamus', w * 0.28, h * 0.4);
  ctx.fillText('Supraoptic nucleus', w * 0.12, h * 0.52);
  ctx.fillText('Arcuate nucleus', w * 0.12, h * 0.65);
  ctx.fillText('Infundibulum', w * 0.56, h * 0.82);
  ctx.fillText('(to pituitary)', w * 0.56, h * 0.87);
}

static drawThyroidGland(ctx, color, w, h) {
  const gradient = ctx.createRadialGradient(w * 0.5, h * 0.5, 0, w * 0.5, h * 0.5, w * 0.4);
  gradient.addColorStop(0, color.light);
  gradient.addColorStop(0.6, color.base);
  gradient.addColorStop(1, color.dark);

  // Left lobe
  ctx.fillStyle = gradient;
  ctx.strokeStyle = color.dark;
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.ellipse(w * 0.32, h * 0.52, w * 0.15, h * 0.26, -0.15, 0, Math.PI * 2);
  ctx.fill(); ctx.stroke();

  // Right lobe
  ctx.beginPath();
  ctx.ellipse(w * 0.68, h * 0.52, w * 0.15, h * 0.26, 0.15, 0, Math.PI * 2);
  ctx.fill(); ctx.stroke();

  // Isthmus (connecting bridge)
  ctx.beginPath();
  ctx.moveTo(w * 0.38, h * 0.55);
  ctx.bezierCurveTo(w * 0.42, h * 0.52, w * 0.58, h * 0.52, w * 0.62, h * 0.55);
  ctx.bezierCurveTo(w * 0.58, h * 0.62, w * 0.42, h * 0.62, w * 0.38, h * 0.55);
  ctx.fill(); ctx.stroke();

  // Pyramidal lobe (sometimes present)
  ctx.fillStyle = color.base;
  ctx.beginPath();
  ctx.moveTo(w * 0.44, h * 0.52);
  ctx.bezierCurveTo(w * 0.45, h * 0.42, w * 0.47, h * 0.32, w * 0.5, h * 0.25);
  ctx.bezierCurveTo(w * 0.53, h * 0.32, w * 0.55, h * 0.42, w * 0.56, h * 0.52);
  ctx.fill(); ctx.stroke();

  // Follicles (structural units)
  ctx.fillStyle = '#ffffdd';
  ctx.strokeStyle = color.dark;
  ctx.lineWidth = 0.8;
  [[0.28, 0.45], [0.35, 0.55], [0.3, 0.62], [0.68, 0.45], [0.72, 0.55], [0.65, 0.62]].forEach(([px, py]) => {
    ctx.beginPath();
    ctx.arc(w * px, h * py, w * 0.03, 0, Math.PI * 2);
    ctx.fill(); ctx.stroke();
  });

  // Trachea behind
  ctx.strokeStyle = color.dark;
  ctx.lineWidth = 1;
  ctx.setLineDash([3, 3]);
  ctx.beginPath();
  ctx.moveTo(w * 0.44, h * 0.15);
  ctx.lineTo(w * 0.44, h * 0.85);
  ctx.moveTo(w * 0.56, h * 0.15);
  ctx.lineTo(w * 0.56, h * 0.85);
  ctx.stroke();
  ctx.setLineDash([]);

  ctx.fillStyle = color.dark;
  ctx.font = `${w * 0.036}px sans-serif`;
  ctx.fillText('Left lobe', w * 0.12, h * 0.52);
  ctx.fillText('Right lobe', w * 0.72, h * 0.52);
  ctx.fillText('Isthmus', w * 0.42, h * 0.68);
  ctx.fillText('Pyramidal', w * 0.56, h * 0.32);
  ctx.fillText('lobe', w * 0.58, h * 0.37);
}

static drawParathyroidGland(ctx, color, w, h) {
  // Show thyroid with 4 parathyroid glands embedded in posterior surface

  // Thyroid context (lighter)
  ctx.fillStyle = '#f5d0c0';
  ctx.strokeStyle = '#c09080';
  ctx.lineWidth = 1.5;
  ctx.setLineDash([4, 3]);
  ctx.beginPath();
  ctx.ellipse(w * 0.32, h * 0.5, w * 0.15, h * 0.3, 0, 0, Math.PI * 2);
  ctx.fill(); ctx.stroke();
  ctx.beginPath();
  ctx.ellipse(w * 0.68, h * 0.5, w * 0.15, h * 0.3, 0, 0, Math.PI * 2);
  ctx.fill(); ctx.stroke();
  ctx.setLineDash([]);

  // Four parathyroid glands (small ovals on posterior surface)
  const ptGlands = [
    { x: 0.26, y: 0.36, label: 'Superior L' },
    { x: 0.26, y: 0.62, label: 'Inferior L' },
    { x: 0.74, y: 0.36, label: 'Superior R' },
    { x: 0.74, y: 0.62, label: 'Inferior R' },
  ];

  const ptGrad = ctx.createRadialGradient(w * 0.5, h * 0.5, 0, w * 0.5, h * 0.5, w * 0.1);
  ptGrad.addColorStop(0, color.light);
  ptGrad.addColorStop(1, color.base);

  ptGlands.forEach(({ x, y }) => {
    ctx.fillStyle = ptGrad;
    ctx.strokeStyle = color.dark;
    ctx.lineWidth = 1.5;
    ctx.beginPath();
    ctx.ellipse(w * x, h * y, w * 0.04, h * 0.055, 0, 0, Math.PI * 2);
    ctx.fill(); ctx.stroke();
  });

  // Chief cells (dots inside each gland)
  ptGlands.forEach(({ x, y }) => {
    ctx.fillStyle = color.dark;
    [[-0.01, -0.01], [0.01, -0.01], [0, 0.02]].forEach(([dx, dy]) => {
      ctx.beginPath();
      ctx.arc(w * (x + dx), h * (y + dy), w * 0.008, 0, Math.PI * 2);
      ctx.fill();
    });
  });

  ctx.fillStyle = color.dark;
  ctx.font = `${w * 0.034}px sans-serif`;
  ctx.fillText('Superior L', w * 0.02, h * 0.34);
  ctx.fillText('Inferior L', w * 0.02, h * 0.64);
  ctx.fillText('Superior R', w * 0.78, h * 0.34);
  ctx.fillText('Inferior R', w * 0.78, h * 0.64);
  ctx.fillText('(on posterior', w * 0.3, h * 0.88);
  ctx.fillText('thyroid surface)', w * 0.28, h * 0.93);
}

static drawAdrenalGland(ctx, color, w, h) {
  // Show both adrenal glands atop kidneys

  // Kidney outlines (context, dashed)
  ctx.strokeStyle = '#b0a090';
  ctx.lineWidth = 1.5;
  ctx.setLineDash([4, 3]);
  [[0.25, 0.55], [0.75, 0.55]].forEach(([kx, ky]) => {
    ctx.beginPath();
    ctx.ellipse(w * kx, h * ky, w * 0.14, h * 0.25, 0, 0, Math.PI * 2);
    ctx.stroke();
  });
  ctx.setLineDash([]);

  const grad = ctx.createRadialGradient(w * 0.5, h * 0.3, 0, w * 0.5, h * 0.3, w * 0.15);
  grad.addColorStop(0, color.light);
  grad.addColorStop(1, color.base);

  // Left adrenal (crescent/triangular shape)
  ctx.fillStyle = grad;
  ctx.strokeStyle = color.dark;
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.moveTo(w * 0.18, h * 0.35);
  ctx.bezierCurveTo(w * 0.18, h * 0.28, w * 0.22, h * 0.22, w * 0.28, h * 0.22);
  ctx.bezierCurveTo(w * 0.36, h * 0.22, w * 0.38, h * 0.3, w * 0.36, h * 0.38);
  ctx.bezierCurveTo(w * 0.34, h * 0.44, w * 0.26, h * 0.46, w * 0.2, h * 0.42);
  ctx.bezierCurveTo(w * 0.18, h * 0.4, w * 0.18, h * 0.37, w * 0.18, h * 0.35);
  ctx.fill(); ctx.stroke();

  // Right adrenal (pyramidal)
  ctx.beginPath();
  ctx.moveTo(w * 0.62, h * 0.22);
  ctx.bezierCurveTo(w * 0.68, h * 0.2, w * 0.76, h * 0.22, w * 0.8, h * 0.28);
  ctx.bezierCurveTo(w * 0.82, h * 0.35, w * 0.8, h * 0.42, w * 0.74, h * 0.44);
  ctx.bezierCurveTo(w * 0.68, h * 0.46, w * 0.62, h * 0.4, w * 0.62, h * 0.35);
  ctx.bezierCurveTo(w * 0.62, h * 0.3, w * 0.62, h * 0.24, w * 0.62, h * 0.22);
  ctx.fill(); ctx.stroke();

  // Cross-section of one adrenal showing zones
  ctx.fillStyle = color.light;
  ctx.beginPath();
  ctx.ellipse(w * 0.5, h * 0.72, w * 0.2, h * 0.14, 0, 0, Math.PI * 2);
  ctx.fill(); ctx.stroke();

  // Zona glomerulosa (outermost)
  ctx.fillStyle = '#ffddaa';
  ctx.beginPath();
  ctx.ellipse(w * 0.5, h * 0.72, w * 0.2, h * 0.14, 0, 0, Math.PI * 2);
  ctx.fill();
  // Zona fasciculata
  ctx.fillStyle = '#ffcc88';
  ctx.beginPath();
  ctx.ellipse(w * 0.5, h * 0.72, w * 0.15, h * 0.1, 0, 0, Math.PI * 2);
  ctx.fill();
  // Zona reticularis
  ctx.fillStyle = '#cc9966';
  ctx.beginPath();
  ctx.ellipse(w * 0.5, h * 0.72, w * 0.1, h * 0.065, 0, 0, Math.PI * 2);
  ctx.fill();
  // Medulla
  ctx.fillStyle = color.dark;
  ctx.beginPath();
  ctx.ellipse(w * 0.5, h * 0.72, w * 0.05, h * 0.033, 0, 0, Math.PI * 2);
  ctx.fill();
  ctx.strokeStyle = color.dark;
  ctx.lineWidth = 1;
  ctx.beginPath();
  ctx.ellipse(w * 0.5, h * 0.72, w * 0.2, h * 0.14, 0, 0, Math.PI * 2);
  ctx.stroke();

  ctx.fillStyle = color.dark;
  ctx.font = `${w * 0.031}px sans-serif`;
  ctx.fillText('Left adrenal', w * 0.06, h * 0.22);
  ctx.fillText('Right adrenal', w * 0.78, h * 0.22);
  ctx.fillText('Cross-section:', w * 0.3, h * 0.58);
  ctx.fillText('Glomerulosa', w * 0.72, h * 0.66);
  ctx.fillText('Fasciculata', w * 0.72, h * 0.71);
  ctx.fillText('Reticularis', w * 0.72, h * 0.76);
  ctx.fillText('Medulla', w * 0.72, h * 0.81);
}

static drawThymus(ctx, color, w, h) {
  const gradient = ctx.createRadialGradient(w * 0.5, h * 0.45, 0, w * 0.5, h * 0.45, w * 0.35);
  gradient.addColorStop(0, color.light);
  gradient.addColorStop(0.6, color.base);
  gradient.addColorStop(1, color.dark);

  // Two lobes of thymus
  ctx.fillStyle = gradient;
  ctx.strokeStyle = color.dark;
  ctx.lineWidth = 2;

  // Left lobe
  ctx.beginPath();
  ctx.moveTo(w * 0.5, h * 0.18);
  ctx.bezierCurveTo(w * 0.44, h * 0.16, w * 0.28, h * 0.2, w * 0.25, h * 0.35);
  ctx.bezierCurveTo(w * 0.22, h * 0.5, w * 0.28, h * 0.68, w * 0.38, h * 0.75);
  ctx.bezierCurveTo(w * 0.44, h * 0.78, w * 0.5, h * 0.76, w * 0.5, h * 0.72);
  ctx.bezierCurveTo(w * 0.46, h * 0.65, w * 0.44, h * 0.5, w * 0.46, h * 0.4);
  ctx.bezierCurveTo(w * 0.46, h * 0.28, w * 0.48, h * 0.2, w * 0.5, h * 0.18);
  ctx.fill(); ctx.stroke();

  // Right lobe
  ctx.beginPath();
  ctx.moveTo(w * 0.5, h * 0.18);
  ctx.bezierCurveTo(w * 0.56, h * 0.16, w * 0.72, h * 0.2, w * 0.75, h * 0.35);
  ctx.bezierCurveTo(w * 0.78, h * 0.5, w * 0.72, h * 0.68, w * 0.62, h * 0.75);
  ctx.bezierCurveTo(w * 0.56, h * 0.78, w * 0.5, h * 0.76, w * 0.5, h * 0.72);
  ctx.bezierCurveTo(w * 0.54, h * 0.65, w * 0.56, h * 0.5, w * 0.54, h * 0.4);
  ctx.bezierCurveTo(w * 0.54, h * 0.28, w * 0.52, h * 0.2, w * 0.5, h * 0.18);
  ctx.fill(); ctx.stroke();

  // Cortex/medulla distinction
  ctx.fillStyle = color.dark;
  ctx.globalAlpha = 0.25;
  ctx.beginPath();
  ctx.ellipse(w * 0.38, h * 0.48, w * 0.08, h * 0.2, -0.2, 0, Math.PI * 2);
  ctx.fill();
  ctx.beginPath();
  ctx.ellipse(w * 0.62, h * 0.48, w * 0.08, h * 0.2, 0.2, 0, Math.PI * 2);
  ctx.fill();
  ctx.globalAlpha = 1;

  // Hassall's corpuscles (medullary structures)
  ctx.fillStyle = '#ffeecc';
  ctx.strokeStyle = color.dark;
  ctx.lineWidth = 0.8;
  [[0.38, 0.4], [0.4, 0.55], [0.36, 0.65], [0.62, 0.4], [0.6, 0.55], [0.64, 0.65]].forEach(([px, py]) => {
    ctx.beginPath();
    ctx.arc(w * px, h * py, w * 0.022, 0, Math.PI * 2);
    ctx.fill(); ctx.stroke();
  });

  ctx.fillStyle = color.dark;
  ctx.font = `${w * 0.036}px sans-serif`;
  ctx.fillText('Thymus', w * 0.42, h * 0.88);
  ctx.fillText('Left lobe', w * 0.1, h * 0.45);
  ctx.fillText('Right lobe', w * 0.74, h * 0.45);
  ctx.fillText("Hassall's", w * 0.52, h * 0.55);
  ctx.fillText('corpuscles', w * 0.5, h * 0.6);
}

static drawPinealGland(ctx, color, w, h) {
  const gradient = ctx.createRadialGradient(w * 0.5, h * 0.45, 0, w * 0.5, h * 0.45, w * 0.18);
  gradient.addColorStop(0, color.light);
  gradient.addColorStop(0.7, color.base);
  gradient.addColorStop(1, color.dark);

  // Brain context (dashed)
  ctx.fillStyle = '#f5e8d8';
  ctx.strokeStyle = '#c0a890';
  ctx.lineWidth = 1;
  ctx.setLineDash([4, 3]);
  ctx.beginPath();
  ctx.ellipse(w * 0.5, h * 0.4, w * 0.44, h * 0.34, 0, 0, Math.PI * 2);
  ctx.fill(); ctx.stroke();
  ctx.setLineDash([]);

  // Pineal body — pine-cone shaped
  ctx.fillStyle = gradient;
  ctx.strokeStyle = color.dark;
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.moveTo(w * 0.5, h * 0.28);
  ctx.bezierCurveTo(w * 0.56, h * 0.3, w * 0.6, h * 0.38, w * 0.6, h * 0.46);
  ctx.bezierCurveTo(w * 0.6, h * 0.56, w * 0.55, h * 0.62, w * 0.5, h * 0.62);
  ctx.bezierCurveTo(w * 0.45, h * 0.62, w * 0.4, h * 0.56, w * 0.4, h * 0.46);
  ctx.bezierCurveTo(w * 0.4, h * 0.38, w * 0.44, h * 0.3, w * 0.5, h * 0.28);
  ctx.fill(); ctx.stroke();

  // Scale-like surface texture
  ctx.strokeStyle = color.dark;
  ctx.lineWidth = 0.8;
  [[0.5, 0.34], [0.5, 0.42], [0.5, 0.5], [0.5, 0.58]].forEach(([cx, cy]) => {
    ctx.beginPath();
    ctx.ellipse(w * cx, h * cy, w * 0.07, h * 0.03, 0, 0, Math.PI * 2);
    ctx.stroke();
  });

  // Stalk
  ctx.fillStyle = color.base;
  ctx.beginPath();
  ctx.rect(w * 0.47, h * 0.62, w * 0.06, h * 0.08);
  ctx.fill(); ctx.stroke();

  // Habenular commissure
  ctx.strokeStyle = color.dark;
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.moveTo(w * 0.3, h * 0.68);
  ctx.bezierCurveTo(w * 0.4, h * 0.7, w * 0.6, h * 0.7, w * 0.7, h * 0.68);
  ctx.stroke();

  // Calcium deposits (brain sand / corpora arenacea)
  ctx.fillStyle = '#ffffff';
  [[0.47, 0.4], [0.52, 0.46], [0.48, 0.54]].forEach(([px, py]) => {
    ctx.beginPath();
    ctx.arc(w * px, h * py, w * 0.013, 0, Math.PI * 2);
    ctx.fill();
    ctx.strokeStyle = '#aaaaaa';
    ctx.lineWidth = 0.5;
    ctx.stroke();
  });

  ctx.fillStyle = color.dark;
  ctx.font = `${w * 0.036}px sans-serif`;
  ctx.fillText('Pineal gland', w * 0.3, h * 0.24);
  ctx.fillText('(Epiphysis cerebri)', w * 0.26, h * 0.29);
  ctx.fillText('Brain sand', w * 0.62, h * 0.44);
  ctx.fillText('Habenular', w * 0.56, h * 0.72);
  ctx.fillText('commissure', w * 0.55, h * 0.77);
}

static drawIsletOfLangerhans(ctx, color, w, h) {
  // Show islet within exocrine pancreatic acini

  // Exocrine acinar cells (background)
  ctx.fillStyle = '#e8d5b5';
  ctx.beginPath();
  ctx.rect(w * 0.05, h * 0.05, w * 0.9, h * 0.9);
  ctx.fill();

  // Acinar cells (small clusters)
  ctx.strokeStyle = '#c0a870';
  ctx.lineWidth = 0.8;
  for (let row = 0; row < 5; row++) {
    for (let col = 0; col < 5; col++) {
      const x = 0.1 + col * 0.18;
      const y = 0.1 + row * 0.18;
      ctx.fillStyle = '#f5e5c5';
      ctx.beginPath();
      ctx.ellipse(w * x, h * y, w * 0.06, h * 0.065, col * 0.2, 0, Math.PI * 2);
      ctx.fill(); ctx.stroke();
      // Zymogen granules
      ctx.fillStyle = '#aa8855';
      ctx.beginPath();
      ctx.arc(w * x, h * y, w * 0.02, 0, Math.PI * 2);
      ctx.fill();
    }
  }

  // Islet of Langerhans (central, pale island)
  const isletGrad = ctx.createRadialGradient(w * 0.5, h * 0.5, 0, w * 0.5, h * 0.5, w * 0.2);
  isletGrad.addColorStop(0, color.light);
  isletGrad.addColorStop(0.8, color.base);
  isletGrad.addColorStop(1, color.dark);
  ctx.fillStyle = isletGrad;
  ctx.strokeStyle = color.dark;
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.ellipse(w * 0.5, h * 0.5, w * 0.2, h * 0.22, 0, 0, Math.PI * 2);
  ctx.fill(); ctx.stroke();

  // Alpha cells (glucagon, periphery)
  ctx.fillStyle = '#ffaaaa';
  [[0.38, 0.4], [0.52, 0.35], [0.64, 0.44], [0.62, 0.6], [0.46, 0.66], [0.36, 0.58]].forEach(([px, py]) => {
    ctx.beginPath();
    ctx.arc(w * px, h * py, w * 0.025, 0, Math.PI * 2);
    ctx.fill();
    ctx.strokeStyle = color.dark;
    ctx.lineWidth = 0.5;
    ctx.stroke();
  });

  // Beta cells (insulin, center majority)
  ctx.fillStyle = '#aaddaa';
  [[0.48, 0.46], [0.52, 0.5], [0.46, 0.54], [0.54, 0.44], [0.42, 0.5]].forEach(([px, py]) => {
    ctx.beginPath();
    ctx.arc(w * px, h * py, w * 0.028, 0, Math.PI * 2);
    ctx.fill();
    ctx.strokeStyle = color.dark;
    ctx.lineWidth = 0.5;
    ctx.stroke();
  });

  // Delta cells (somatostatin)
  ctx.fillStyle = '#aaaaff';
  [[0.44, 0.42], [0.56, 0.56]].forEach(([px, py]) => {
    ctx.beginPath();
    ctx.arc(w * px, h * py, w * 0.022, 0, Math.PI * 2);
    ctx.fill();
    ctx.strokeStyle = color.dark;
    ctx.lineWidth = 0.5;
    ctx.stroke();
  });

  // Legend
  ctx.font = `${w * 0.034}px sans-serif`;
  ctx.fillStyle = '#ffaaaa';
  ctx.fillRect(w * 0.72, h * 0.72, w * 0.04, h * 0.03);
  ctx.fillStyle = color.dark;
  ctx.fillText('α cells (glucagon)', w * 0.77, h * 0.75);
  ctx.fillStyle = '#aaddaa';
  ctx.fillRect(w * 0.72, h * 0.79, w * 0.04, h * 0.03);
  ctx.fillStyle = color.dark;
  ctx.fillText('β cells (insulin)', w * 0.77, h * 0.82);
  ctx.fillStyle = '#aaaaff';
  ctx.fillRect(w * 0.72, h * 0.86, w * 0.04, h * 0.03);
  ctx.fillStyle = color.dark;
  ctx.fillText('δ cells (somato.)', w * 0.77, h * 0.89);
  ctx.fillText('Islet of Langerhans', w * 0.28, h * 0.94);
}



// ============================================================
// LYMPHATIC / IMMUNE — Missing Drawing Methods
// ============================================================

static drawLymphNode(ctx, color, w, h) {
  const gradient = ctx.createRadialGradient(w * 0.5, h * 0.48, 0, w * 0.5, h * 0.48, w * 0.3);
  gradient.addColorStop(0, color.light);
  gradient.addColorStop(0.5, color.base);
  gradient.addColorStop(1, color.dark);

  // Capsule
  ctx.fillStyle = gradient;
  ctx.strokeStyle = color.dark;
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.moveTo(w * 0.5, h * 0.15);
  ctx.bezierCurveTo(w * 0.72, h * 0.15, w * 0.82, h * 0.3, w * 0.82, h * 0.48);
  ctx.bezierCurveTo(w * 0.82, h * 0.66, w * 0.7, h * 0.78, w * 0.5, h * 0.78);
  ctx.bezierCurveTo(w * 0.3, h * 0.78, w * 0.18, h * 0.66, w * 0.18, h * 0.48);
  ctx.bezierCurveTo(w * 0.18, h * 0.3, w * 0.28, h * 0.15, w * 0.5, h * 0.15);
  ctx.fill();
  ctx.stroke();

  // Cortex (outer, B-cell follicles)
  ctx.fillStyle = color.dark;
  ctx.globalAlpha = 0.25;
  ctx.beginPath();
  ctx.ellipse(w * 0.5, h * 0.3, w * 0.25, h * 0.12, 0, 0, Math.PI * 2);
  ctx.fill();
  ctx.globalAlpha = 1;

  // Germinal centers (secondary follicles)
  ctx.fillStyle = color.light;
  ctx.strokeStyle = color.dark;
  ctx.lineWidth = 1;
  [[0.38, 0.3], [0.5, 0.28], [0.62, 0.3]].forEach(([px, py]) => {
    ctx.beginPath();
    ctx.arc(w * px, h * py, w * 0.045, 0, Math.PI * 2);
    ctx.fill();
    ctx.stroke();
  });

  // Paracortex (T-cell zone)
  ctx.fillStyle = '#ddccff';
  ctx.globalAlpha = 0.4;
  ctx.beginPath();
  ctx.ellipse(w * 0.5, h * 0.46, w * 0.22, h * 0.12, 0, 0, Math.PI * 2);
  ctx.fill();
  ctx.globalAlpha = 1;

  // Medullary cords and sinuses
  ctx.strokeStyle = color.dark;
  ctx.lineWidth = 1;
  [[0.38, 0.56, 0.46, 0.68], [0.5, 0.54, 0.5, 0.7], [0.62, 0.56, 0.54, 0.68]].forEach(([x1, y1, x2, y2]) => {
    ctx.beginPath();
    ctx.moveTo(w * x1, h * y1);
    ctx.bezierCurveTo(w * x1, h * (y1 + 0.06), w * x2, h * (y2 - 0.06), w * x2, h * y2);
    ctx.stroke();
  });

  // Hilum
  ctx.fillStyle = color.dark;
  ctx.beginPath();
  ctx.arc(w * 0.5, h * 0.78, w * 0.015, 0, Math.PI * 2);
  ctx.fill();

  // Afferent lymphatics
  ctx.strokeStyle = color.base;
  ctx.lineWidth = 2;
  [[-0.25, 0.2], [0.0, 0.15], [0.25, 0.2]].forEach(([dx, dy]) => {
    ctx.beginPath();
    ctx.moveTo(w * (0.5 + dx * 1.4), h * dy);
    ctx.bezierCurveTo(w * (0.5 + dx), h * (dy + 0.08), w * (0.5 + dx * 0.5), h * 0.25, w * (0.5 + dx * 0.28), h * 0.22);
    ctx.stroke();
  });

  // Efferent lymphatic
  ctx.beginPath();
  ctx.moveTo(w * 0.5, h * 0.78);
  ctx.lineTo(w * 0.5, h * 0.93);
  ctx.stroke();

  ctx.fillStyle = color.dark;
  ctx.font = `${w * 0.034}px sans-serif`;
  ctx.fillText('Germinal center', w * 0.68, h * 0.27);
  ctx.fillText('Cortex', w * 0.68, h * 0.33);
  ctx.fillText('Paracortex', w * 0.68, h * 0.46);
  ctx.fillText('Medulla', w * 0.68, h * 0.62);
  ctx.fillText('Hilum', w * 0.55, h * 0.8);
  ctx.fillText('Efferent vessel', w * 0.52, h * 0.9);
}

static drawLymphVessel(ctx, color, w, h) {
  ctx.lineCap = 'round';

  // Main lymph vessel
  ctx.strokeStyle = color.base;
  ctx.lineWidth = 8;
  ctx.beginPath();
  ctx.moveTo(w * 0.5, h * 0.06);
  ctx.bezierCurveTo(w * 0.48, h * 0.2, w * 0.45, h * 0.4, w * 0.46, h * 0.6);
  ctx.bezierCurveTo(w * 0.47, h * 0.75, w * 0.5, h * 0.88, w * 0.52, h * 0.96);
  ctx.stroke();
  ctx.lineWidth = 2;
  ctx.strokeStyle = color.dark;
  ctx.beginPath();
  ctx.moveTo(w * 0.5, h * 0.06);
  ctx.bezierCurveTo(w * 0.48, h * 0.2, w * 0.45, h * 0.4, w * 0.46, h * 0.6);
  ctx.bezierCurveTo(w * 0.47, h * 0.75, w * 0.5, h * 0.88, w * 0.52, h * 0.96);
  ctx.stroke();

  // Semilunar valves
  [0.18, 0.32, 0.48, 0.64, 0.78].forEach(vy => {
    ctx.fillStyle = color.light;
    ctx.strokeStyle = color.dark;
    ctx.lineWidth = 1.5;
    // Left leaflet
    ctx.beginPath();
    ctx.moveTo(w * 0.46, h * vy);
    ctx.bezierCurveTo(w * 0.42, h * (vy + 0.01), w * 0.42, h * (vy + 0.04), w * 0.46, h * (vy + 0.04));
    ctx.closePath();
    ctx.fill();
    ctx.stroke();
    // Right leaflet
    ctx.beginPath();
    ctx.moveTo(w * 0.54, h * vy);
    ctx.bezierCurveTo(w * 0.58, h * (vy + 0.01), w * 0.58, h * (vy + 0.04), w * 0.54, h * (vy + 0.04));
    ctx.closePath();
    ctx.fill();
    ctx.stroke();
  });

  // Lymph nodes along vessel
  [0.25, 0.55, 0.82].forEach(ny => {
    ctx.fillStyle = color.base;
    ctx.strokeStyle = color.dark;
    ctx.lineWidth = 1.5;
    ctx.beginPath();
    ctx.ellipse(w * 0.5, h * ny, w * 0.06, h * 0.05, 0, 0, Math.PI * 2);
    ctx.fill();
    ctx.stroke();
  });

  // Capillary fingers at top
  ctx.strokeStyle = color.base;
  ctx.lineWidth = 3;
  [[0.3, 0.12], [0.38, 0.08], [0.62, 0.08], [0.7, 0.12]].forEach(([fx, fy]) => {
    ctx.beginPath();
    ctx.moveTo(w * fx, h * fy);
    ctx.lineTo(w * 0.5, h * 0.08);
    ctx.stroke();
  });

  ctx.fillStyle = color.dark;
  ctx.font = `${w * 0.034}px sans-serif`;
  ctx.fillText('Lymph capillaries', w * 0.16, h * 0.06);
  ctx.fillText('Valve', w * 0.62, h * 0.3);
  ctx.fillText('Lymph node', w * 0.58, h * 0.54);
  ctx.fillText('Collecting duct', w * 0.56, h * 0.72);
}

static drawTonsils(ctx, color, w, h) {
  const gradient = ctx.createRadialGradient(w * 0.5, h * 0.5, 0, w * 0.5, h * 0.5, w * 0.4);
  gradient.addColorStop(0, color.light);
  gradient.addColorStop(0.6, color.base);
  gradient.addColorStop(1, color.dark);

  // Pharyngeal opening
  ctx.fillStyle = '#cc5555';
  ctx.beginPath();
  ctx.ellipse(w * 0.5, h * 0.5, w * 0.32, h * 0.28, 0, 0, Math.PI * 2);
  ctx.fill();

  // Uvula
  ctx.fillStyle = '#dd4444';
  ctx.beginPath();
  ctx.moveTo(w * 0.46, h * 0.32);
  ctx.bezierCurveTo(w * 0.44, h * 0.4, w * 0.44, h * 0.48, w * 0.5, h * 0.52);
  ctx.bezierCurveTo(w * 0.56, h * 0.48, w * 0.56, h * 0.4, w * 0.54, h * 0.32);
  ctx.closePath();
  ctx.fill();

  // Palatine tonsils (bilateral)
  ctx.fillStyle = gradient;
  ctx.strokeStyle = color.dark;
  ctx.lineWidth = 2;
  [[0.22, 0.5], [0.78, 0.5]].forEach(([tx, ty]) => {
    ctx.beginPath();
    ctx.ellipse(w * tx, h * ty, w * 0.1, h * 0.16, 0, 0, Math.PI * 2);
    ctx.fill();
    ctx.stroke();
    // Crypts
    ctx.strokeStyle = color.dark;
    ctx.lineWidth = 0.8;
    for (let c = -2; c <= 2; c++) {
      ctx.beginPath();
      ctx.moveTo(w * tx + c * w * 0.025, h * (ty - 0.14));
      ctx.lineTo(w * tx + c * w * 0.02, h * (ty - 0.02));
      ctx.stroke();
    }
  });

  // Pharyngeal tonsil (adenoid, superior)
  ctx.fillStyle = gradient;
  ctx.strokeStyle = color.dark;
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.ellipse(w * 0.5, h * 0.22, w * 0.1, h * 0.07, 0, 0, Math.PI * 2);
  ctx.fill();
  ctx.stroke();

  // Lingual tonsil (inferior)
  ctx.beginPath();
  ctx.ellipse(w * 0.5, h * 0.76, w * 0.08, h * 0.05, 0, 0, Math.PI * 2);
  ctx.fill();
  ctx.stroke();

  // Soft palate
  ctx.strokeStyle = '#dd6655';
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.moveTo(w * 0.18, h * 0.32);
  ctx.bezierCurveTo(w * 0.35, h * 0.28, w * 0.5, h * 0.3, w * 0.82, h * 0.32);
  ctx.stroke();

  ctx.fillStyle = color.dark;
  ctx.font = `${w * 0.033}px sans-serif`;
  ctx.fillText('Pharyngeal tonsil', w * 0.34, h * 0.12);
  ctx.fillText('(adenoid)', w * 0.4, h * 0.17);
  ctx.fillText('Palatine tonsil', w * 0.02, h * 0.46);
  ctx.fillText('Palatine tonsil', w * 0.72, h * 0.46);
  ctx.fillText('Uvula', w * 0.52, h * 0.52);
  ctx.fillText('Lingual tonsil', w * 0.54, h * 0.8);
}

static drawBoneMarrow(ctx, color, w, h) {
  // Long bone cross-section with marrow

  // Outer periosteum
  ctx.fillStyle = '#e8dcc0';
  ctx.strokeStyle = '#b0a080';
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.roundRect(w * 0.22, h * 0.1, w * 0.56, h * 0.8, w * 0.1);
  ctx.fill();
  ctx.stroke();

  // Compact bone ring
  ctx.fillStyle = '#d4c8a0';
  ctx.beginPath();
  ctx.roundRect(w * 0.28, h * 0.16, w * 0.44, h * 0.68, w * 0.08);
  ctx.fill();

  // Trabecular bone border
  ctx.fillStyle = '#f0e8c8';
  ctx.strokeStyle = '#b0a080';
  ctx.lineWidth = 1.5;
  ctx.beginPath();
  ctx.roundRect(w * 0.34, h * 0.22, w * 0.32, h * 0.56, w * 0.06);
  ctx.fill();
  ctx.stroke();

  // Red bone marrow
  const rMarrow = ctx.createRadialGradient(w * 0.5, h * 0.5, 0, w * 0.5, h * 0.5, w * 0.16);
  rMarrow.addColorStop(0, '#ff9999');
  rMarrow.addColorStop(1, '#cc4444');
  ctx.fillStyle = rMarrow;
  ctx.beginPath();
  ctx.roundRect(w * 0.36, h * 0.24, w * 0.28, h * 0.52, w * 0.04);
  ctx.fill();

  // Blood cell progenitors
  const cellColors = ['#ffaaaa', '#aaaaff', '#aaffaa'];
  [[0.42, 0.35], [0.52, 0.32], [0.58, 0.42], [0.45, 0.5],
   [0.55, 0.55], [0.42, 0.62], [0.58, 0.62], [0.5, 0.45]].forEach(([px, py], i) => {
    ctx.fillStyle = cellColors[i % 3];
    ctx.strokeStyle = '#888';
    ctx.lineWidth = 0.5;
    ctx.beginPath();
    ctx.arc(w * px, h * py, w * 0.02, 0, Math.PI * 2);
    ctx.fill();
    ctx.stroke();
  });

  // Sinusoids (vascular channels)
  ctx.strokeStyle = '#cc4444';
  ctx.lineWidth = 2;
  [[0.4, 0.28, 0.46, 0.42], [0.56, 0.3, 0.6, 0.5],
   [0.4, 0.6, 0.46, 0.7], [0.56, 0.58, 0.6, 0.7]].forEach(([x1, y1, x2, y2]) => {
    ctx.beginPath();
    ctx.moveTo(w * x1, h * y1);
    ctx.bezierCurveTo(w * ((x1 + x2) / 2 - 0.03), h * ((y1 + y2) / 2),
      w * ((x1 + x2) / 2 + 0.03), h * ((y1 + y2) / 2), w * x2, h * y2);
    ctx.stroke();
  });

  ctx.fillStyle = color.dark;
  ctx.font = `${w * 0.033}px sans-serif`;
  ctx.fillText('Compact bone', w * 0.02, h * 0.3);
  ctx.fillText('Trabecular bone', w * 0.02, h * 0.48);
  ctx.fillText('Red marrow', w * 0.66, h * 0.48);
  ctx.fillText('Sinusoid', w * 0.66, h * 0.36);
  ctx.fillText('Progenitor cells', w * 0.66, h * 0.62);
}

// ============================================================
// INTEGUMENTARY — Missing Drawing Methods
// ============================================================

static drawSkinLayers(ctx, color, w, h) {
  const layers = [
    { label: 'Stratum corneum',    thick: 0.06, fill: '#f5d5b0' },
    { label: 'Stratum granulosum', thick: 0.04, fill: '#e8c8a0' },
    { label: 'Stratum spinosum',   thick: 0.08, fill: '#d8b888' },
    { label: 'Stratum basale',     thick: 0.06, fill: '#c8a870' },
    { label: 'Papillary dermis',   thick: 0.1,  fill: '#e8a090' },
    { label: 'Reticular dermis',   thick: 0.2,  fill: '#d08080' },
    { label: 'Hypodermis',         thick: 0.28, fill: '#f5e090' },
  ];

  let y = 0.06;
  layers.forEach(layer => {
    ctx.fillStyle = layer.fill;
    ctx.beginPath();
    ctx.rect(w * 0.05, h * y, w * 0.55, h * layer.thick);
    ctx.fill();
    ctx.strokeStyle = '#888';
    ctx.lineWidth = 0.5;
    ctx.stroke();
    ctx.fillStyle = '#333';
    ctx.font = `${w * 0.03}px sans-serif`;
    ctx.fillText(layer.label, w * 0.62, h * (y + layer.thick / 2 + 0.01));
    y += layer.thick;
  });

  // Epidermis brace
  ctx.strokeStyle = '#333';
  ctx.lineWidth = 1.5;
  ctx.beginPath();
  ctx.moveTo(w * 0.06, h * 0.06);
  ctx.lineTo(w * 0.03, h * 0.06);
  ctx.lineTo(w * 0.03, h * 0.24);
  ctx.lineTo(w * 0.06, h * 0.24);
  ctx.stroke();
  ctx.fillStyle = '#333';
  ctx.font = `${w * 0.028}px sans-serif`;
  ctx.fillText('Epidermis', w * 0.005, h * 0.16);

  // Melanocytes in basale layer
  ctx.fillStyle = '#554433';
  [[0.12, 0.22], [0.22, 0.23], [0.32, 0.22], [0.42, 0.23]].forEach(([px, py]) => {
    ctx.beginPath();
    ctx.arc(w * px, h * py, w * 0.01, 0, Math.PI * 2);
    ctx.fill();
    ctx.strokeStyle = '#554433';
    ctx.lineWidth = 0.8;
    ctx.beginPath();
    ctx.moveTo(w * px, h * py);
    ctx.lineTo(w * (px - 0.02), h * (py - 0.02));
    ctx.moveTo(w * px, h * py);
    ctx.lineTo(w * (px + 0.02), h * (py - 0.02));
    ctx.stroke();
  });

  // Wavy dermo-epidermal junction (dermal papillae)
  ctx.strokeStyle = '#aa7060';
  ctx.lineWidth = 1;
  ctx.beginPath();
  ctx.moveTo(w * 0.05, h * 0.3);
  for (let x = 0; x <= 10; x++) {
    const cx = w * (0.05 + x * 0.055 + 0.0275);
    const cy1 = h * 0.265;
    const ex = w * (0.05 + (x + 1) * 0.055);
    const ey = h * 0.3;
    ctx.quadraticCurveTo(cx, cy1, ex, ey);
  }
  ctx.stroke();
}

static drawHairFollicle(ctx, color, w, h) {
  // Skin surface band
  ctx.fillStyle = '#f5d5b0';
  ctx.beginPath();
  ctx.rect(w * 0.0, h * 0.0, w, h * 0.12);
  ctx.fill();

  // Hair shaft above skin
  const hairGrad = ctx.createLinearGradient(w * 0.48, 0, w * 0.52, 0);
  hairGrad.addColorStop(0, color.dark);
  hairGrad.addColorStop(0.5, color.light);
  hairGrad.addColorStop(1, color.dark);
  ctx.fillStyle = hairGrad;
  ctx.beginPath();
  ctx.rect(w * 0.48, h * 0.01, w * 0.04, h * 0.12);
  ctx.fill();

  // Outer root sheath (follicle wall)
  ctx.fillStyle = color.light;
  ctx.strokeStyle = color.dark;
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.moveTo(w * 0.42, h * 0.12);
  ctx.bezierCurveTo(w * 0.4, h * 0.35, w * 0.4, h * 0.55, w * 0.44, h * 0.78);
  ctx.bezierCurveTo(w * 0.46, h * 0.85, w * 0.48, h * 0.88, w * 0.5, h * 0.88);
  ctx.bezierCurveTo(w * 0.52, h * 0.88, w * 0.54, h * 0.85, w * 0.56, h * 0.78);
  ctx.bezierCurveTo(w * 0.6, h * 0.55, w * 0.6, h * 0.35, w * 0.58, h * 0.12);
  ctx.closePath();
  ctx.fill();
  ctx.stroke();

  // Hair bulb
  ctx.fillStyle = color.base;
  ctx.beginPath();
  ctx.ellipse(w * 0.5, h * 0.83, w * 0.1, h * 0.07, 0, 0, Math.PI * 2);
  ctx.fill();
  ctx.stroke();

  // Dermal papilla
  ctx.fillStyle = '#cc8866';
  ctx.beginPath();
  ctx.ellipse(w * 0.5, h * 0.87, w * 0.05, h * 0.04, 0, 0, Math.PI * 2);
  ctx.fill();
  ctx.stroke();

  // Hair shaft inside follicle
  ctx.fillStyle = color.dark;
  ctx.beginPath();
  ctx.rect(w * 0.48, h * 0.12, w * 0.04, h * 0.7);
  ctx.fill();

  // Sebaceous gland
  ctx.fillStyle = '#ffe8a0';
  ctx.strokeStyle = color.dark;
  ctx.lineWidth = 1.5;
  ctx.beginPath();
  ctx.ellipse(w * 0.36, h * 0.28, w * 0.07, h * 0.07, -0.3, 0, Math.PI * 2);
  ctx.fill();
  ctx.stroke();
  // Duct connecting to follicle
  ctx.strokeStyle = color.dark;
  ctx.lineWidth = 1.5;
  ctx.beginPath();
  ctx.moveTo(w * 0.41, h * 0.28);
  ctx.lineTo(w * 0.44, h * 0.28);
  ctx.stroke();

  // Arrector pili muscle
  ctx.strokeStyle = '#cc8866';
  ctx.lineWidth = 2.5;
  ctx.beginPath();
  ctx.moveTo(w * 0.38, h * 0.14);
  ctx.bezierCurveTo(w * 0.35, h * 0.24, w * 0.36, h * 0.35, w * 0.42, h * 0.38);
  ctx.stroke();

  ctx.fillStyle = color.dark;
  ctx.font = `${w * 0.033}px sans-serif`;
  ctx.fillText('Hair shaft', w * 0.62, h * 0.06);
  ctx.fillText('Sebaceous gland', w * 0.14, h * 0.24);
  ctx.fillText('Arrector pili', w * 0.14, h * 0.14);
  ctx.fillText('Follicle wall', w * 0.62, h * 0.45);
  ctx.fillText('Hair bulb', w * 0.62, h * 0.8);
  ctx.fillText('Dermal papilla', w * 0.62, h * 0.88);
}

static drawSweatGland(ctx, color, w, h) {
  ctx.strokeStyle = color.dark;
  ctx.lineWidth = 1.5;

  // Skin surface
  ctx.fillStyle = '#f5d5b0';
  ctx.beginPath();
  ctx.rect(w * 0, h * 0, w, h * 0.1);
  ctx.fill();

  // Sweat pore on surface
  ctx.fillStyle = color.dark;
  ctx.beginPath();
  ctx.arc(w * 0.5, h * 0.04, w * 0.012, 0, Math.PI * 2);
  ctx.fill();

  // Duct (coiled as it passes through epidermis)
  ctx.strokeStyle = color.base;
  ctx.lineWidth = 4;
  ctx.beginPath();
  ctx.moveTo(w * 0.5, h * 0.04);
  ctx.bezierCurveTo(w * 0.52, h * 0.12, w * 0.54, h * 0.18, w * 0.52, h * 0.24);
  ctx.bezierCurveTo(w * 0.5, h * 0.3, w * 0.48, h * 0.36, w * 0.5, h * 0.42);
  ctx.bezierCurveTo(w * 0.52, h * 0.46, w * 0.52, h * 0.5, w * 0.5, h * 0.52);
  ctx.stroke();
  ctx.lineWidth = 1.5;
  ctx.strokeStyle = color.dark;
  ctx.beginPath();
  ctx.moveTo(w * 0.5, h * 0.04);
  ctx.bezierCurveTo(w * 0.52, h * 0.12, w * 0.54, h * 0.18, w * 0.52, h * 0.24);
  ctx.bezierCurveTo(w * 0.5, h * 0.3, w * 0.48, h * 0.36, w * 0.5, h * 0.42);
  ctx.bezierCurveTo(w * 0.52, h * 0.46, w * 0.52, h * 0.5, w * 0.5, h * 0.52);
  ctx.stroke();

  // Secretory coil (eccrine gland body, deep dermis)
  const coilGrad = ctx.createRadialGradient(w * 0.5, h * 0.74, 0, w * 0.5, h * 0.74, w * 0.18);
  coilGrad.addColorStop(0, color.light);
  coilGrad.addColorStop(1, color.base);
  ctx.fillStyle = coilGrad;
  ctx.strokeStyle = color.dark;
  ctx.lineWidth = 1.5;
  ctx.beginPath();
  ctx.ellipse(w * 0.5, h * 0.74, w * 0.18, h * 0.16, 0, 0, Math.PI * 2);
  ctx.fill();
  ctx.stroke();

  // Coil loops inside body
  ctx.strokeStyle = color.dark;
  ctx.lineWidth = 3;
  ctx.beginPath();
  ctx.arc(w * 0.44, h * 0.7, w * 0.05, 0, Math.PI * 2);
  ctx.stroke();
  ctx.beginPath();
  ctx.arc(w * 0.56, h * 0.72, w * 0.05, Math.PI, Math.PI * 3);
  ctx.stroke();
  ctx.beginPath();
  ctx.arc(w * 0.46, h * 0.8, w * 0.04, 0, Math.PI * 2);
  ctx.stroke();

  // Myoepithelial cells (small ovals surrounding coil)
  ctx.fillStyle = color.dark;
  ctx.globalAlpha = 0.5;
  for (let a = 0; a < Math.PI * 2; a += 0.5) {
    ctx.beginPath();
    ctx.ellipse(w * 0.5 + Math.cos(a) * w * 0.17, h * 0.74 + Math.sin(a) * h * 0.145,
      w * 0.012, h * 0.01, a, 0, Math.PI * 2);
    ctx.fill();
  }
  ctx.globalAlpha = 1;

  ctx.fillStyle = color.dark;
  ctx.font = `${w * 0.034}px sans-serif`;
  ctx.fillText('Sweat pore', w * 0.54, h * 0.04);
  ctx.fillText('Duct', w * 0.56, h * 0.28);
  ctx.fillText('Secretory coil', w * 0.54, h * 0.9);
  ctx.fillText('(eccrine gland)', w * 0.52, h * 0.95);
}

static drawSebaceousGland(ctx, color, w, h) {
  // Skin surface
  ctx.fillStyle = '#f5d5b0';
  ctx.beginPath();
  ctx.rect(w * 0, h * 0, w, h * 0.1);
  ctx.fill();

  // Hair follicle (context)
  ctx.fillStyle = '#e8c8a8';
  ctx.strokeStyle = '#c0a070';
  ctx.lineWidth = 1.5;
  ctx.setLineDash([4, 3]);
  ctx.beginPath();
  ctx.moveTo(w * 0.44, h * 0.1);
  ctx.lineTo(w * 0.44, h * 0.92);
  ctx.moveTo(w * 0.56, h * 0.1);
  ctx.lineTo(w * 0.56, h * 0.92);
  ctx.stroke();
  ctx.setLineDash([]);

  // Sebaceous gland main body (multilobed)
  const lobes = [[0.32, 0.3], [0.38, 0.26], [0.38, 0.36], [0.32, 0.42]];
  lobes.forEach(([lx, ly]) => {
    const gGrad = ctx.createRadialGradient(w * lx, h * ly, 0, w * lx, h * ly, w * 0.07);
    gGrad.addColorStop(0, '#fff0a0');
    gGrad.addColorStop(0.7, '#f0d060');
    gGrad.addColorStop(1, '#c0a030');
    ctx.fillStyle = gGrad;
    ctx.strokeStyle = color.dark;
    ctx.lineWidth = 1.5;
    ctx.beginPath();
    ctx.ellipse(w * lx, h * ly, w * 0.07, h * 0.065, 0, 0, Math.PI * 2);
    ctx.fill();
    ctx.stroke();
  });

  // Sebum-filled cells (lipid droplets inside lobe)
  ctx.fillStyle = '#ffffc0';
  ctx.strokeStyle = '#c0a030';
  ctx.lineWidth = 0.6;
  [[0.3, 0.28], [0.34, 0.32], [0.3, 0.36], [0.38, 0.25], [0.4, 0.32], [0.38, 0.38]].forEach(([px, py]) => {
    ctx.beginPath();
    ctx.arc(w * px, h * py, w * 0.018, 0, Math.PI * 2);
    ctx.fill();
    ctx.stroke();
  });

  // Excretory duct into follicle
  ctx.strokeStyle = '#c0a030';
  ctx.lineWidth = 4;
  ctx.beginPath();
  ctx.moveTo(w * 0.38, h * 0.34);
  ctx.bezierCurveTo(w * 0.41, h * 0.34, w * 0.43, h * 0.33, w * 0.44, h * 0.32);
  ctx.stroke();
  ctx.strokeStyle = color.dark;
  ctx.lineWidth = 1.5;
  ctx.beginPath();
  ctx.moveTo(w * 0.38, h * 0.34);
  ctx.bezierCurveTo(w * 0.41, h * 0.34, w * 0.43, h * 0.33, w * 0.44, h * 0.32);
  ctx.stroke();

  // Second gland (right side of follicle)
  const lobes2 = [[0.68, 0.3], [0.62, 0.26], [0.62, 0.36], [0.68, 0.42]];
  lobes2.forEach(([lx, ly]) => {
    ctx.fillStyle = '#f0d060';
    ctx.strokeStyle = color.dark;
    ctx.lineWidth = 1.5;
    ctx.beginPath();
    ctx.ellipse(w * lx, h * ly, w * 0.07, h * 0.065, 0, 0, Math.PI * 2);
    ctx.fill();
    ctx.stroke();
  });

  ctx.fillStyle = color.dark;
  ctx.font = `${w * 0.034}px sans-serif`;
  ctx.fillText('Sebaceous', w * 0.08, h * 0.28);
  ctx.fillText('gland', w * 0.08, h * 0.33);
  ctx.fillText('Sebum cells', w * 0.08, h * 0.44);
  ctx.fillText('Duct', w * 0.08, h * 0.38);
  ctx.fillText('Hair follicle', w * 0.5, h * 0.5);
}

static drawNailStructure(ctx, color, w, h) {
  // Dorsal view + sagittal cross-section

  // === Sagittal cross-section (main) ===
  // Distal phalanx (bone)
  ctx.fillStyle = '#e8dcc0';
  ctx.strokeStyle = '#b0a080';
  ctx.lineWidth = 1.5;
  ctx.beginPath();
  ctx.roundRect(w * 0.1, h * 0.58, w * 0.7, h * 0.2, w * 0.04);
  ctx.fill();
  ctx.stroke();

  // Nail bed
  ctx.fillStyle = '#f0b8a0';
  ctx.beginPath();
  ctx.rect(w * 0.1, h * 0.44, w * 0.7, h * 0.15);
  ctx.fill();
  ctx.strokeStyle = color.dark;
  ctx.lineWidth = 1;
  ctx.stroke();

  // Nail plate
  const nailGrad = ctx.createLinearGradient(w * 0.1, h * 0.36, w * 0.8, h * 0.44);
  nailGrad.addColorStop(0, '#f0f8ff');
  nailGrad.addColorStop(0.5, '#d8eeff');
  nailGrad.addColorStop(1, '#c8e4ff');
  ctx.fillStyle = nailGrad;
  ctx.strokeStyle = color.dark;
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.rect(w * 0.1, h * 0.36, w * 0.7, h * 0.09);
  ctx.fill();
  ctx.stroke();

  // Nail root (proximal, under eponychium)
  ctx.fillStyle = '#e0eeff';
  ctx.beginPath();
  ctx.rect(w * 0.08, h * 0.36, w * 0.15, h * 0.09);
  ctx.fill();

  // Eponychium (cuticle)
  ctx.fillStyle = '#f5d5b0';
  ctx.strokeStyle = color.dark;
  ctx.lineWidth = 1.5;
  ctx.beginPath();
  ctx.moveTo(w * 0.08, h * 0.36);
  ctx.bezierCurveTo(w * 0.08, h * 0.28, w * 0.16, h * 0.26, w * 0.22, h * 0.3);
  ctx.lineTo(w * 0.22, h * 0.36);
  ctx.closePath();
  ctx.fill();
  ctx.stroke();

  // Nail matrix (germinal)
  ctx.fillStyle = '#ffcccc';
  ctx.beginPath();
  ctx.rect(w * 0.08, h * 0.44, w * 0.15, h * 0.06);
  ctx.fill();
  ctx.strokeStyle = color.dark;
  ctx.lineWidth = 1;
  ctx.stroke();

  // Lunula (whitish crescent)
  ctx.fillStyle = '#f0f8ff';
  ctx.strokeStyle = color.dark;
  ctx.lineWidth = 1;
  ctx.beginPath();
  ctx.ellipse(w * 0.2, h * 0.4, w * 0.08, h * 0.02, 0, 0, Math.PI * 2);
  ctx.fill();
  ctx.stroke();

  // Hyponychium (skin under free edge)
  ctx.fillStyle = '#f5d5b0';
  ctx.strokeStyle = color.dark;
  ctx.lineWidth = 1.5;
  ctx.beginPath();
  ctx.moveTo(w * 0.8, h * 0.36);
  ctx.lineTo(w * 0.88, h * 0.36);
  ctx.bezierCurveTo(w * 0.9, h * 0.38, w * 0.9, h * 0.44, w * 0.88, h * 0.45);
  ctx.lineTo(w * 0.8, h * 0.45);
  ctx.closePath();
  ctx.fill();
  ctx.stroke();

  ctx.fillStyle = color.dark;
  ctx.font = `${w * 0.033}px sans-serif`;
  ctx.fillText('Eponychium', w * 0.02, h * 0.26);
  ctx.fillText('(cuticle)', w * 0.02, h * 0.31);
  ctx.fillText('Nail root', w * 0.02, h * 0.37);
  ctx.fillText('Nail matrix', w * 0.02, h * 0.47);
  ctx.fillText('Nail plate', w * 0.38, h * 0.34);
  ctx.fillText('Lunula', w * 0.14, h * 0.35);
  ctx.fillText('Nail bed', w * 0.38, h * 0.53);
  ctx.fillText('Hyponychium', w * 0.82, h * 0.34);
  ctx.fillText('Distal phalanx', w * 0.32, h * 0.7);
}

static drawDermalPapillae(ctx, color, w, h) {
  // Magnified view of dermo-epidermal junction

  // Epidermis (upper half)
  ctx.fillStyle = '#f0d4b0';
  ctx.beginPath();
  ctx.rect(w * 0, h * 0, w, h * 0.5);
  ctx.fill();

  // Dermis (lower half)
  ctx.fillStyle = '#e89090';
  ctx.beginPath();
  ctx.rect(w * 0, h * 0.5, w, h * 0.5);
  ctx.fill();

  // Dermal papillae projecting upward (finger-like)
  const papillaeX = [0.12, 0.25, 0.38, 0.51, 0.64, 0.77, 0.9];
  ctx.fillStyle = '#e89090';
  ctx.strokeStyle = color.dark;
  ctx.lineWidth = 1.5;
  papillaeX.forEach(px => {
    ctx.beginPath();
    ctx.moveTo(w * (px - 0.05), h * 0.5);
    ctx.bezierCurveTo(w * (px - 0.05), h * 0.34, w * (px + 0.05), h * 0.34, w * (px + 0.05), h * 0.5);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();
  });

  // Capillary loops inside papillae
  ctx.strokeStyle = '#cc3333';
  ctx.lineWidth = 2;
  papillaeX.forEach(px => {
    ctx.beginPath();
    ctx.moveTo(w * px, h * 0.5);
    ctx.bezierCurveTo(w * (px - 0.025), h * 0.44, w * (px - 0.025), h * 0.38, w * px, h * 0.36);
    ctx.bezierCurveTo(w * (px + 0.025), h * 0.38, w * (px + 0.025), h * 0.44, w * px, h * 0.5);
    ctx.stroke();
  });

  // Rete ridges (epidermal pegs projecting downward)
  ctx.fillStyle = '#f0d4b0';
  ctx.strokeStyle = color.dark;
  ctx.lineWidth = 1.5;
  [0.185, 0.315, 0.445, 0.575, 0.705, 0.835].forEach(px => {
    ctx.beginPath();
    ctx.moveTo(w * (px - 0.05), h * 0.5);
    ctx.bezierCurveTo(w * (px - 0.05), h * 0.65, w * (px + 0.05), h * 0.65, w * (px + 0.05), h * 0.5);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();
  });

  // Keratinocyte nuclei (dots in epidermis)
  ctx.fillStyle = color.dark;
  ctx.globalAlpha = 0.5;
  for (let row = 0; row < 3; row++) {
    for (let col = 0; col < 8; col++) {
      ctx.beginPath();
      ctx.arc(w * (0.08 + col * 0.12), h * (0.12 + row * 0.08), w * 0.012, 0, Math.PI * 2);
      ctx.fill();
    }
  }
  ctx.globalAlpha = 1;

  // Collagen fibers in dermis
  ctx.strokeStyle = '#c07070';
  ctx.lineWidth = 1;
  for (let i = 0; i < 10; i++) {
    ctx.beginPath();
    ctx.moveTo(w * (i * 0.11), h * 0.72);
    ctx.bezierCurveTo(w * (i * 0.11 + 0.05), h * 0.68, w * (i * 0.11 + 0.06), h * 0.78, w * (i * 0.11 + 0.11), h * 0.72);
    ctx.stroke();
  }

  ctx.fillStyle = color.dark;
  ctx.font = `${w * 0.034}px sans-serif`;
  ctx.fillText('Epidermis', w * 0.02, h * 0.08);
  ctx.fillText('Dermal papilla', w * 0.52, h * 0.3);
  ctx.fillText('Capillary loop', w * 0.52, h * 0.42);
  ctx.fillText('Rete ridge', w * 0.52, h * 0.62);
  ctx.fillText('Dermis', w * 0.02, h * 0.9);
  ctx.fillText('Collagen fibers', w * 0.02, h * 0.76);
}

// ============================================================
// SKELETAL (BONE MICROSTRUCTURE) — Missing Drawing Methods
// ============================================================

static drawCompactBone(ctx, color, w, h) {
  ctx.fillStyle = '#f0e8d0';
  ctx.beginPath();
  ctx.rect(w * 0.05, h * 0.05, w * 0.9, h * 0.9);
  ctx.fill();

  // Osteons (Haversian systems) — circular layered structures
  const osteonCenters = [[0.25, 0.3], [0.55, 0.25], [0.78, 0.35],
    [0.2, 0.65], [0.5, 0.65], [0.78, 0.7]];

  osteonCenters.forEach(([cx, cy]) => {
    // Concentric lamellae
    [0.13, 0.1, 0.075, 0.05, 0.025].forEach((r, i) => {
      ctx.strokeStyle = i % 2 === 0 ? '#c8b888' : '#d8c898';
      ctx.lineWidth = 3;
      ctx.beginPath();
      ctx.arc(w * cx, h * cy, w * r, 0, Math.PI * 2);
      ctx.stroke();
    });
    // Haversian canal (center)
    ctx.fillStyle = '#cc6644';
    ctx.beginPath();
    ctx.arc(w * cx, h * cy, w * 0.015, 0, Math.PI * 2);
    ctx.fill();
    ctx.strokeStyle = color.dark;
    ctx.lineWidth = 1;
    ctx.stroke();
  });

  // Interstitial lamellae (between osteons)
  ctx.strokeStyle = '#c8b888';
  ctx.lineWidth = 1;
  ctx.globalAlpha = 0.4;
  for (let i = 0; i < 8; i++) {
    ctx.beginPath();
    ctx.moveTo(w * 0.05, h * (0.08 + i * 0.12));
    ctx.lineTo(w * 0.95, h * (0.08 + i * 0.12));
    ctx.stroke();
  }
  ctx.globalAlpha = 1;

  // Volkmann's canals (perforating, connecting Haversian canals)
  ctx.strokeStyle = '#cc6644';
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.moveTo(w * 0.25, h * 0.3);
  ctx.lineTo(w * 0.55, h * 0.25);
  ctx.stroke();
  ctx.beginPath();
  ctx.moveTo(w * 0.55, h * 0.25);
  ctx.lineTo(w * 0.78, h * 0.35);
  ctx.stroke();

  // Osteocyte lacunae (small oval spaces)
  ctx.fillStyle = color.dark;
  osteonCenters.forEach(([cx, cy]) => {
    for (let a = 0; a < Math.PI * 2; a += Math.PI / 3) {
      ctx.beginPath();
      ctx.ellipse(w * cx + Math.cos(a) * w * 0.07, h * cy + Math.sin(a) * h * 0.065,
        w * 0.01, h * 0.007, a, 0, Math.PI * 2);
      ctx.fill();
    }
  });

  ctx.fillStyle = color.dark;
  ctx.font = `${w * 0.033}px sans-serif`;
  ctx.fillText('Osteon', w * 0.3, h * 0.12);
  ctx.fillText('Haversian canal', w * 0.58, h * 0.2);
  ctx.fillText("Volkmann's canal", w * 0.38, h * 0.5);
  ctx.fillText('Osteocyte lacuna', w * 0.04, h * 0.5);
  ctx.fillText('Interstitial lamellae', w * 0.25, h * 0.92);
}

static drawSpongyBone(ctx, color, w, h) {
  // Background (marrow space)
  ctx.fillStyle = '#ffddcc';
  ctx.beginPath();
  ctx.rect(w * 0.05, h * 0.05, w * 0.9, h * 0.9);
  ctx.fill();
  ctx.strokeStyle = color.dark;
  ctx.lineWidth = 1.5;
  ctx.stroke();

  // Trabeculae network (irregular bony spicules)
  const trabeculae = [
    [[0.1, 0.2], [0.3, 0.15], [0.5, 0.2], [0.7, 0.15], [0.9, 0.2]],
    [[0.1, 0.4], [0.25, 0.35], [0.45, 0.38], [0.6, 0.32], [0.85, 0.38]],
    [[0.1, 0.6], [0.3, 0.55], [0.55, 0.58], [0.75, 0.52], [0.9, 0.58]],
    [[0.1, 0.8], [0.28, 0.76], [0.5, 0.78], [0.72, 0.74], [0.9, 0.78]],
  ];

  trabeculae.forEach(pts => {
    ctx.strokeStyle = '#d4c898';
    ctx.lineWidth = 10;
    ctx.beginPath();
    ctx.moveTo(w * pts[0][0], h * pts[0][1]);
    for (let i = 1; i < pts.length; i++) {
      ctx.lineTo(w * pts[i][0], h * pts[i][1]);
    }
    ctx.stroke();
    ctx.strokeStyle = color.dark;
    ctx.lineWidth = 1.5;
    ctx.stroke();
  });

  // Vertical connecting trabeculae
  [[0.25, 0.15, 0.28, 0.76], [0.5, 0.2, 0.5, 0.78], [0.72, 0.15, 0.72, 0.74]].forEach(([x1, y1, x2, y2]) => {
    ctx.strokeStyle = '#d4c898';
    ctx.lineWidth = 10;
    ctx.beginPath();
    ctx.moveTo(w * x1, h * y1);
    ctx.bezierCurveTo(w * x1, h * (y1 + 0.2), w * x2, h * (y2 - 0.2), w * x2, h * y2);
    ctx.stroke();
    ctx.strokeStyle = color.dark;
    ctx.lineWidth = 1.5;
    ctx.stroke();
  });

  // Osteocytes on trabecular surface
  ctx.fillStyle = color.dark;
  [[0.3, 0.15], [0.5, 0.38], [0.7, 0.55], [0.28, 0.58], [0.5, 0.77]].forEach(([px, py]) => {
    ctx.beginPath();
    ctx.arc(w * px, h * py, w * 0.012, 0, Math.PI * 2);
    ctx.fill();
  });

  // Red marrow in spaces
  ctx.fillStyle = '#ffaaaa';
  ctx.globalAlpha = 0.3;
  [[0.38, 0.28], [0.62, 0.28], [0.18, 0.5], [0.5, 0.48], [0.78, 0.45], [0.38, 0.68], [0.62, 0.67]].forEach(([px, py]) => {
    ctx.beginPath();
    ctx.ellipse(w * px, h * py, w * 0.06, h * 0.06, 0, 0, Math.PI * 2);
    ctx.fill();
  });
  ctx.globalAlpha = 1;

  ctx.fillStyle = color.dark;
  ctx.font = `${w * 0.034}px sans-serif`;
  ctx.fillText('Trabecula', w * 0.6, h * 0.12);
  ctx.fillText('Marrow space', w * 0.28, h * 0.46);
  ctx.fillText('Osteocyte', w * 0.54, h * 0.38);
}

static drawOsteon(ctx, color, w, h) {
  // Single osteon magnified

  // Outer cement line
  ctx.strokeStyle = color.dark;
  ctx.lineWidth = 3;
  ctx.beginPath();
  ctx.arc(w * 0.5, h * 0.5, w * 0.42, 0, Math.PI * 2);
  ctx.stroke();

  // Concentric lamellae (10 rings)
  const rings = 10;
  for (let i = rings; i > 0; i--) {
    const r = (i / rings) * w * 0.38;
    ctx.strokeStyle = i % 2 === 0 ? '#c8b878' : '#e0d090';
    ctx.lineWidth = 4;
    ctx.beginPath();
    ctx.arc(w * 0.5, h * 0.5, r, 0, Math.PI * 2);
    ctx.stroke();
  }

  // Haversian canal (central)
  ctx.fillStyle = '#cc6644';
  ctx.beginPath();
  ctx.arc(w * 0.5, h * 0.5, w * 0.05, 0, Math.PI * 2);
  ctx.fill();
  ctx.strokeStyle = color.dark;
  ctx.lineWidth = 1.5;
  ctx.stroke();
  // Nerve and blood vessel symbol
  ctx.strokeStyle = '#cc3333';
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.moveTo(w * 0.5, h * 0.45);
  ctx.lineTo(w * 0.5, h * 0.55);
  ctx.stroke();

  // Osteocytes (lacunae) arranged in rings
  ctx.fillStyle = color.dark;
  [0.12, 0.2, 0.28, 0.36].forEach(r => {
    for (let a = 0; a < Math.PI * 2; a += Math.PI / (r < 0.2 ? 3 : 5)) {
      ctx.beginPath();
      ctx.ellipse(w * 0.5 + Math.cos(a) * w * r, h * 0.5 + Math.sin(a) * h * r,
        w * 0.012, h * 0.01, a, 0, Math.PI * 2);
      ctx.fill();
    }
  });

  // Canaliculi (tiny channels connecting lacunae — radial lines)
  ctx.strokeStyle = color.dark;
  ctx.lineWidth = 0.5;
  ctx.globalAlpha = 0.5;
  [0.12, 0.2, 0.28, 0.36].forEach(r => {
    for (let a = 0; a < Math.PI * 2; a += Math.PI / (r < 0.2 ? 3 : 5)) {
      const nx = w * 0.5 + Math.cos(a) * w * r;
      const ny = h * 0.5 + Math.sin(a) * h * r;
      // Radial canaliculi
      ctx.beginPath();
      ctx.moveTo(nx, ny);
      ctx.lineTo(nx + Math.cos(a) * w * 0.03, ny + Math.sin(a) * h * 0.03);
      ctx.moveTo(nx, ny);
      ctx.lineTo(nx - Math.cos(a) * w * 0.025, ny - Math.sin(a) * h * 0.025);
      ctx.stroke();
    }
  });
  ctx.globalAlpha = 1;

  ctx.fillStyle = color.dark;
  ctx.font = `${w * 0.034}px sans-serif`;
  ctx.fillText('Haversian canal', w * 0.54, h * 0.45);
  ctx.fillText('Osteocyte', w * 0.6, h * 0.28);
  ctx.fillText('lacuna', w * 0.62, h * 0.33);
  ctx.fillText('Canaliculus', w * 0.6, h * 0.64);
  ctx.fillText('Cement line', w * 0.04, h * 0.15);
  ctx.fillText('Lamella', w * 0.04, h * 0.5);
}

static drawHaversianCanal(ctx, color, w, h) {
  // Cross-sectional close-up of Haversian canal

  // Canal lumen
  ctx.fillStyle = '#ffddcc';
  ctx.strokeStyle = color.dark;
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.arc(w * 0.5, h * 0.5, w * 0.15, 0, Math.PI * 2);
  ctx.fill();
  ctx.stroke();

  // Blood vessel (artery/vein)
  ctx.fillStyle = '#cc3333';
  ctx.beginPath();
  ctx.arc(w * 0.46, h * 0.47, w * 0.06, 0, Math.PI * 2);
  ctx.fill();
  ctx.strokeStyle = color.dark;
  ctx.lineWidth = 1;
  ctx.stroke();
  // Lumen
  ctx.fillStyle = '#ff8888';
  ctx.beginPath();
  ctx.arc(w * 0.46, h * 0.47, w * 0.035, 0, Math.PI * 2);
  ctx.fill();

  // Vein
  ctx.fillStyle = '#3344aa';
  ctx.beginPath();
  ctx.arc(w * 0.56, h * 0.53, w * 0.055, 0, Math.PI * 2);
  ctx.fill();
  ctx.strokeStyle = color.dark;
  ctx.lineWidth = 1;
  ctx.stroke();
  ctx.fillStyle = '#8899dd';
  ctx.beginPath();
  ctx.arc(w * 0.56, h * 0.53, w * 0.03, 0, Math.PI * 2);
  ctx.fill();

  // Nerve fiber
  ctx.fillStyle = '#ffee88';
  ctx.beginPath();
  ctx.arc(w * 0.52, h * 0.42, w * 0.02, 0, Math.PI * 2);
  ctx.fill();
  ctx.strokeStyle = color.dark;
  ctx.lineWidth = 1;
  ctx.stroke();

  // Lamellae rings (osteon around canal)
  [0.2, 0.28, 0.35, 0.42].forEach(r => {
    ctx.strokeStyle = '#c8b878';
    ctx.lineWidth = 5;
    ctx.beginPath();
    ctx.arc(w * 0.5, h * 0.5, w * r, 0, Math.PI * 2);
    ctx.stroke();
    ctx.strokeStyle = color.dark;
    ctx.lineWidth = 0.8;
    ctx.stroke();
  });

  // Osteocytes in lamellae
  ctx.fillStyle = color.dark;
  [0.235, 0.315, 0.385].forEach(r => {
    for (let a = 0; a < Math.PI * 2; a += Math.PI / 3.5) {
      ctx.beginPath();
      ctx.ellipse(w * 0.5 + Math.cos(a) * w * r, h * 0.5 + Math.sin(a) * h * r,
        w * 0.012, h * 0.009, a, 0, Math.PI * 2);
      ctx.fill();
    }
  });

  ctx.fillStyle = color.dark;
  ctx.font = `${w * 0.033}px sans-serif`;
  ctx.fillText('Artery', w * 0.22, h * 0.36);
  ctx.fillText('Vein', w * 0.6, h * 0.62);
  ctx.fillText('Nerve', w * 0.56, h * 0.36);
  ctx.fillText('Canal lumen', w * 0.62, h * 0.48);
  ctx.fillText('Lamellae', w * 0.04, h * 0.7);
  ctx.fillText('Osteocyte', w * 0.04, h * 0.55);
}

static drawPeriosteum(ctx, color, w, h) {
  // Bone shaft with periosteum layers

  // Compact bone cortex
  ctx.fillStyle = '#e8dcc0';
  ctx.strokeStyle = '#b0a080';
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.roundRect(w * 0.25, h * 0.15, w * 0.5, h * 0.7, w * 0.1);
  ctx.fill();
  ctx.stroke();

  // Marrow cavity
  ctx.fillStyle = '#ffccaa';
  ctx.beginPath();
  ctx.roundRect(w * 0.36, h * 0.28, w * 0.28, h * 0.44, w * 0.06);
  ctx.fill();

  // Outer fibrous layer of periosteum
  ctx.fillStyle = '#f0e0c8';
  ctx.strokeStyle = color.dark;
  ctx.lineWidth = 1.5;
  ctx.beginPath();
  ctx.roundRect(w * 0.18, h * 0.12, w * 0.64, h * 0.76, w * 0.12);
  ctx.fill();
  ctx.stroke();

  // Inner osteogenic (cambium) layer
  ctx.fillStyle = '#e8c8a0';
  ctx.strokeStyle = color.dark;
  ctx.lineWidth = 1;
  ctx.beginPath();
  ctx.roundRect(w * 0.22, h * 0.14, w * 0.56, h * 0.72, w * 0.11);
  ctx.fill();
  ctx.stroke();

  // Sharpey's fibers (perforating fibers anchoring periosteum to bone)
  ctx.strokeStyle = '#a07040';
  ctx.lineWidth = 1.5;
  for (let i = 0; i < 8; i++) {
    const x = 0.26 + i * 0.07;
    ctx.beginPath();
    ctx.moveTo(w * x, h * 0.16);
    ctx.lineTo(w * x, h * 0.2);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(w * x, h * 0.8);
    ctx.lineTo(w * x, h * 0.84);
    ctx.stroke();
  }

  // Osteoblasts on inner surface (small rowed dots)
  ctx.fillStyle = '#cc8844';
  [0.27, 0.35, 0.43, 0.51, 0.59, 0.67, 0.73].forEach(x => {
    ctx.beginPath();
    ctx.arc(w * x, h * 0.21, w * 0.012, 0, Math.PI * 2);
    ctx.fill();
    ctx.beginPath();
    ctx.arc(w * x, h * 0.79, w * 0.012, 0, Math.PI * 2);
    ctx.fill();
  });

  // Blood vessels in periosteum
  ctx.strokeStyle = '#cc3333';
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.moveTo(w * 0.2, h * 0.5);
  ctx.bezierCurveTo(w * 0.22, h * 0.45, w * 0.24, h * 0.55, w * 0.26, h * 0.5);
  ctx.stroke();

  ctx.fillStyle = color.dark;
  ctx.font = `${w * 0.033}px sans-serif`;
  ctx.fillText('Fibrous layer', w * 0.04, h * 0.2);
  ctx.fillText('Osteogenic layer', w * 0.04, h * 0.27);
  ctx.fillText("Sharpey's fibers", w * 0.04, h * 0.34);
  ctx.fillText('Osteoblasts', w * 0.04, h * 0.41);
  ctx.fillText('Compact bone', w * 0.38, h * 0.52);
  ctx.fillText('Marrow cavity', w * 0.38, h * 0.56);
  ctx.fillText('Blood vessel', w * 0.04, h * 0.54);
}

static drawGrowthPlate(ctx, color, w, h) {
  // Epiphyseal growth plate (physis) — shows zones

  const zones = [
    { label: 'Epiphysis (bone)', thick: 0.1,  fill: '#e8dcc0' },
    { label: 'Resting zone',     thick: 0.08, fill: '#f0e8d0' },
    { label: 'Proliferative',    thick: 0.14, fill: '#d8e8c0' },
    { label: 'Hypertrophic',     thick: 0.14, fill: '#e0c890' },
    { label: 'Calcification',    thick: 0.1,  fill: '#c8b870' },
    { label: 'Metaphysis (bone)',thick: 0.3,  fill: '#e8dcc0' },
  ];

  let y = 0.04;
  zones.forEach(zone => {
    ctx.fillStyle = zone.fill;
    ctx.beginPath();
    ctx.rect(w * 0.1, h * y, w * 0.55, h * zone.thick);
    ctx.fill();
    ctx.strokeStyle = '#888';
    ctx.lineWidth = 0.8;
    ctx.stroke();
    ctx.fillStyle = '#333';
    ctx.font = `${w * 0.032}px sans-serif`;
    ctx.fillText(zone.label, w * 0.68, h * (y + zone.thick / 2 + 0.01));
    y += zone.thick;
  });

  // Chondrocyte columns in proliferative zone
  ctx.fillStyle = '#8899aa';
  const prolStart = 0.04 + 0.1 + 0.08;
  for (let col = 0; col < 5; col++) {
    const cx = 0.14 + col * 0.1;
    for (let row = 0; row < 5; row++) {
      ctx.beginPath();
      ctx.ellipse(w * cx, h * (prolStart + 0.016 + row * 0.025), w * 0.025, h * 0.018, 0, 0, Math.PI * 2);
      ctx.fill();
      ctx.strokeStyle = color.dark;
      ctx.lineWidth = 0.5;
      ctx.stroke();
    }
  }

  // Hypertrophic (enlarged) chondrocytes
  ctx.fillStyle = '#aabb88';
  const hypoStart = prolStart + 0.14;
  for (let col = 0; col < 5; col++) {
    const cx = 0.14 + col * 0.1;
    for (let row = 0; row < 3; row++) {
      ctx.beginPath();
      ctx.ellipse(w * cx, h * (hypoStart + 0.02 + row * 0.04), w * 0.03, h * 0.025, 0, 0, Math.PI * 2);
      ctx.fill();
      ctx.strokeStyle = color.dark;
      ctx.lineWidth = 0.5;
      ctx.stroke();
    }
  }

  // Bony trabeculae in metaphysis
  ctx.strokeStyle = '#c8b870';
  ctx.lineWidth = 4;
  for (let col = 0; col < 5; col++) {
    const cx = 0.14 + col * 0.1;
    ctx.beginPath();
    ctx.moveTo(w * cx, h * 0.5);
    ctx.lineTo(w * cx, h * 0.9);
    ctx.stroke();
  }
  ctx.strokeStyle = color.dark;
  ctx.lineWidth = 1;
  for (let col = 0; col < 5; col++) {
    const cx = 0.14 + col * 0.1;
    ctx.beginPath();
    ctx.moveTo(w * cx, h * 0.5);
    ctx.lineTo(w * cx, h * 0.9);
    ctx.stroke();
  }
}

static drawJointCapsule(ctx, color, w, h) {
  // Synovial joint capsule cross-section

  // Bones (proximal and distal)
  ctx.fillStyle = '#e8dcc0';
  ctx.strokeStyle = color.dark;
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.roundRect(w * 0.2, h * 0.05, w * 0.6, h * 0.22, w * 0.06);
  ctx.fill(); ctx.stroke();

  ctx.beginPath();
  ctx.roundRect(w * 0.2, h * 0.73, w * 0.6, h * 0.22, w * 0.06);
  ctx.fill(); ctx.stroke();

  // Articular cartilage (hyaline, on bone ends)
  ctx.fillStyle = '#c8e8f0';
  ctx.strokeStyle = color.dark;
  ctx.lineWidth = 1.5;
  [[h * 0.26, h * 0.04], [h * 0.73, h * 0.04]].forEach(([y, thick]) => {
    ctx.beginPath();
    ctx.rect(w * 0.22, y - thick, w * 0.56, h * 0.045);
    ctx.fill(); ctx.stroke();
  });

  // Fibrous capsule (outer, thick)
  ctx.fillStyle = '#d4c4a0';
  ctx.strokeStyle = color.dark;
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.rect(w * 0.15, h * 0.27, w * 0.1, h * 0.46);
  ctx.fill(); ctx.stroke();
  ctx.beginPath();
  ctx.rect(w * 0.75, h * 0.27, w * 0.1, h * 0.46);
  ctx.fill(); ctx.stroke();

  // Synovial membrane (inner layer)
  ctx.fillStyle = '#f0d0c0';
  ctx.strokeStyle = color.dark;
  ctx.lineWidth = 1.5;
  ctx.beginPath();
  ctx.rect(w * 0.22, h * 0.28, w * 0.05, h * 0.44);
  ctx.fill(); ctx.stroke();
  ctx.beginPath();
  ctx.rect(w * 0.73, h * 0.28, w * 0.05, h * 0.44);
  ctx.fill(); ctx.stroke();

  // Synovial fluid (joint space)
  ctx.fillStyle = '#f0f8d8';
  ctx.globalAlpha = 0.7;
  ctx.beginPath();
  ctx.rect(w * 0.27, h * 0.28, w * 0.46, h * 0.44);
  ctx.fill();
  ctx.globalAlpha = 1;
  ctx.strokeStyle = color.dark;
  ctx.lineWidth = 1;
  ctx.stroke();

  // Synovial villi (small projections into joint space)
  ctx.fillStyle = '#f0d0c0';
  ctx.strokeStyle = color.dark;
  ctx.lineWidth = 0.8;
  [0.28, 0.32, 0.36].forEach(x => {
    ctx.beginPath();
    ctx.moveTo(w * x, h * 0.28);
    ctx.lineTo(w * x, h * 0.33);
    ctx.stroke();
  });

  // Ligament (reinforcing band)
  ctx.fillStyle = '#f5e8c0';
  ctx.strokeStyle = color.dark;
  ctx.lineWidth = 1.5;
  ctx.beginPath();
  ctx.moveTo(w * 0.35, h * 0.25);
  ctx.lineTo(w * 0.65, h * 0.25);
  ctx.lineTo(w * 0.65, h * 0.3);
  ctx.lineTo(w * 0.35, h * 0.3);
  ctx.closePath();
  ctx.fill(); ctx.stroke();

  ctx.fillStyle = color.dark;
  ctx.font = `${w * 0.032}px sans-serif`;
  ctx.fillText('Bone', w * 0.44, h * 0.18);
  ctx.fillText('Articular cartilage', w * 0.3, h * 0.24);
  ctx.fillText('Ligament', w * 0.42, h * 0.28);
  ctx.fillText('Fibrous capsule', w * 0.02, h * 0.5);
  ctx.fillText('Synovial membrane', w * 0.66, h * 0.45);
  ctx.fillText('Synovial fluid', w * 0.35, h * 0.52);
}

static drawCartilage(ctx, color, w, h) {
  // Show three types of cartilage side by side

  const types = ['Hyaline', 'Elastic', 'Fibro-'];
  const subs  = ['',        '',        'cartilage'];
  const fills = ['#c8e8f0', '#f0e0a0', '#e0d0b0'];

  types.forEach((t, i) => {
    const x0 = 0.04 + i * 0.33;
    // Background
    ctx.fillStyle = fills[i];
    ctx.strokeStyle = color.dark;
    ctx.lineWidth = 1.5;
    ctx.beginPath();
    ctx.rect(w * x0, h * 0.1, w * 0.28, h * 0.78);
    ctx.fill(); ctx.stroke();

    // Title
    ctx.fillStyle = color.dark;
    ctx.font = `${w * 0.038}px sans-serif`;
    ctx.fillText(t, w * (x0 + 0.04), h * 0.08);
    if (subs[i]) ctx.fillText(subs[i], w * (x0 + 0.04), h * 0.13);

    // Perichondrium
    ctx.fillStyle = '#d4b890';
    ctx.beginPath();
    ctx.rect(w * x0, h * 0.1, w * 0.28, h * 0.05);
    ctx.fill();
    ctx.beginPath();
    ctx.rect(w * x0, h * 0.83, w * 0.28, h * 0.05);
    ctx.fill();

    // Chondrocytes in lacunae
    for (let row = 0; row < 5; row++) {
      for (let col = 0; col < 3; col++) {
        const cx = x0 + 0.06 + col * 0.085;
        const cy = 0.22 + row * 0.12;
        // Lacuna
        ctx.fillStyle = fills[i];
        ctx.strokeStyle = color.dark;
        ctx.lineWidth = 0.8;
        ctx.beginPath();
        ctx.ellipse(w * cx, h * cy, w * 0.03, h * 0.035, 0, 0, Math.PI * 2);
        ctx.fill(); ctx.stroke();
        // Chondrocyte
        ctx.fillStyle = '#4488aa';
        ctx.beginPath();
        ctx.ellipse(w * cx, h * cy, w * 0.018, h * 0.022, 0, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    // Specific matrix differences
    if (i === 1) {
      // Elastic fibers (wavy lines)
      ctx.strokeStyle = '#cc8833';
      ctx.lineWidth = 0.8;
      for (let row = 0; row < 6; row++) {
        ctx.beginPath();
        ctx.moveTo(w * x0, h * (0.16 + row * 0.115));
        for (let fx = 0; fx < 8; fx++) {
          const fx2 = x0 + fx * 0.035;
          ctx.quadraticCurveTo(w * (fx2 + 0.018), h * (0.14 + row * 0.115),
            w * (fx2 + 0.035), h * (0.16 + row * 0.115));
        }
        ctx.stroke();
      }
    } else if (i === 2) {
      // Collagen bundles (thick parallel lines)
      ctx.strokeStyle = '#a08060';
      ctx.lineWidth = 2;
      for (let row = 0; row < 4; row++) {
        ctx.beginPath();
        ctx.moveTo(w * x0, h * (0.18 + row * 0.155));
        ctx.lineTo(w * (x0 + 0.28), h * (0.18 + row * 0.155));
        ctx.stroke();
      }
    }
  });

  ctx.fillStyle = color.dark;
  ctx.font = `${w * 0.032}px sans-serif`;
  ctx.fillText('Perichondrium', w * 0.04, h * 0.06);
  ctx.fillText('Lacuna', w * 0.3, h * 0.38);
}

static drawSynovialJoint(ctx, color, w, h) {
  // Generic synovial joint (e.g. knee, simplified)

  // Femur / proximal bone
  ctx.fillStyle = '#e8dcc0';
  ctx.strokeStyle = color.dark;
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.moveTo(w * 0.3, h * 0.05);
  ctx.lineTo(w * 0.7, h * 0.05);
  ctx.bezierCurveTo(w * 0.78, h * 0.12, w * 0.78, h * 0.24, w * 0.7, h * 0.3);
  ctx.bezierCurveTo(w * 0.62, h * 0.34, w * 0.38, h * 0.34, w * 0.3, h * 0.3);
  ctx.bezierCurveTo(w * 0.22, h * 0.24, w * 0.22, h * 0.12, w * 0.3, h * 0.05);
  ctx.fill(); ctx.stroke();

  // Tibia / distal bone
  ctx.beginPath();
  ctx.moveTo(w * 0.28, h * 0.68);
  ctx.bezierCurveTo(w * 0.2, h * 0.62, w * 0.2, h * 0.5, w * 0.28, h * 0.44);
  ctx.bezierCurveTo(w * 0.36, h * 0.4, w * 0.64, h * 0.4, w * 0.72, h * 0.44);
  ctx.bezierCurveTo(w * 0.8, h * 0.5, w * 0.8, h * 0.62, w * 0.72, h * 0.68);
  ctx.lineTo(w * 0.28, h * 0.68);
  ctx.closePath();
  ctx.fill(); ctx.stroke();

  // Articular cartilage
  ctx.fillStyle = '#c8e8f0';
  ctx.strokeStyle = color.dark;
  ctx.lineWidth = 1.5;
  // Upper cartilage
  ctx.beginPath();
  ctx.moveTo(w * 0.3, h * 0.3);
  ctx.bezierCurveTo(w * 0.38, h * 0.34, w * 0.62, h * 0.34, w * 0.7, h * 0.3);
  ctx.bezierCurveTo(w * 0.62, h * 0.37, w * 0.38, h * 0.37, w * 0.3, h * 0.3);
  ctx.fill(); ctx.stroke();
  // Lower cartilage
  ctx.beginPath();
  ctx.moveTo(w * 0.28, h * 0.44);
  ctx.bezierCurveTo(w * 0.36, h * 0.4, w * 0.64, h * 0.4, w * 0.72, h * 0.44);
  ctx.bezierCurveTo(w * 0.64, h * 0.47, w * 0.36, h * 0.47, w * 0.28, h * 0.44);
  ctx.fill(); ctx.stroke();

  // Joint capsule (lateral walls)
  ctx.fillStyle = '#d4c4a0';
  ctx.strokeStyle = color.dark;
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.rect(w * 0.16, h * 0.3, w * 0.1, h * 0.14);
  ctx.fill(); ctx.stroke();
  ctx.beginPath();
  ctx.rect(w * 0.74, h * 0.3, w * 0.1, h * 0.14);
  ctx.fill(); ctx.stroke();

  // Synovial membrane
  ctx.fillStyle = '#f0d0c0';
  ctx.strokeStyle = color.dark;
  ctx.lineWidth = 1;
  ctx.beginPath();
  ctx.rect(w * 0.22, h * 0.3, w * 0.05, h * 0.14);
  ctx.fill(); ctx.stroke();
  ctx.beginPath();
  ctx.rect(w * 0.73, h * 0.3, w * 0.05, h * 0.14);
  ctx.fill(); ctx.stroke();

  // Synovial fluid (joint space)
  ctx.fillStyle = '#f0f8d8';
  ctx.globalAlpha = 0.6;
  ctx.beginPath();
  ctx.rect(w * 0.27, h * 0.37, w * 0.46, h * 0.07);
  ctx.fill();
  ctx.globalAlpha = 1;

  // Meniscus (fibrocartilage wedge)
  ctx.fillStyle = '#d8c8a0';
  ctx.strokeStyle = color.dark;
  ctx.lineWidth = 1.5;
  [[0.3, 0.37], [0.62, 0.37]].forEach(([mx, my]) => {
    ctx.beginPath();
    ctx.moveTo(w * mx, h * my);
    ctx.lineTo(w * (mx + 0.08), h * my);
    ctx.lineTo(w * (mx + 0.04), h * (my + 0.07));
    ctx.closePath();
    ctx.fill(); ctx.stroke();
  });

  // Ligaments
  ctx.strokeStyle = '#c8aa70';
  ctx.lineWidth = 3;
  // Collateral ligaments
  ctx.beginPath();
  ctx.moveTo(w * 0.22, h * 0.3);
  ctx.lineTo(w * 0.22, h * 0.44);
  ctx.stroke();
  ctx.beginPath();
  ctx.moveTo(w * 0.78, h * 0.3);
  ctx.lineTo(w * 0.78, h * 0.44);
  ctx.stroke();

  ctx.fillStyle = color.dark;
  ctx.font = `${w * 0.032}px sans-serif`;
  ctx.fillText('Articular cartilage', w * 0.3, h * 0.35);
  ctx.fillText('Meniscus', w * 0.02, h * 0.42);
  ctx.fillText('Synovial fluid', w * 0.36, h * 0.42);
  ctx.fillText('Joint capsule', w * 0.04, h * 0.33);
  ctx.fillText('Synovial membrane', w * 0.78, h * 0.37);
  ctx.fillText('Ligament', w * 0.02, h * 0.47);
}

static drawIntervertebralDisc(ctx, color, w, h) {
  // Sagittal cross-section of IVD between two vertebrae

  // Vertebral bodies
  ctx.fillStyle = '#e8dcc0';
  ctx.strokeStyle = color.dark;
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.roundRect(w * 0.15, h * 0.04, w * 0.7, h * 0.24, w * 0.04);
  ctx.fill(); ctx.stroke();
  ctx.beginPath();
  ctx.roundRect(w * 0.15, h * 0.72, w * 0.7, h * 0.24, w * 0.04);
  ctx.fill(); ctx.stroke();

  // End plates (hyaline cartilage)
  ctx.fillStyle = '#c8e8f0';
  ctx.strokeStyle = color.dark;
  ctx.lineWidth = 1.5;
  ctx.beginPath();
  ctx.rect(w * 0.16, h * 0.27, w * 0.68, h * 0.04);
  ctx.fill(); ctx.stroke();
  ctx.beginPath();
  ctx.rect(w * 0.16, h * 0.69, w * 0.68, h * 0.04);
  ctx.fill(); ctx.stroke();

  // Annulus fibrosus (concentric fibrous rings)
  const annulusLayers = 6;
  for (let i = 0; i < annulusLayers; i++) {
    const inset = i * 0.05;
    const r = i % 2 === 0 ? '#d4c4a0' : '#c8b890';
    ctx.fillStyle = r;
    ctx.strokeStyle = color.dark;
    ctx.lineWidth = 0.8;
    ctx.beginPath();
    ctx.rect(w * (0.16 + inset), h * 0.31, w * (0.68 - inset * 2), h * 0.38);
    ctx.fill(); ctx.stroke();
  }

  // Nucleus pulposus (central gel-like)
  const nucGrad = ctx.createRadialGradient(w * 0.5, h * 0.5, 0, w * 0.5, h * 0.5, w * 0.15);
  nucGrad.addColorStop(0, '#e8f0ff');
  nucGrad.addColorStop(0.7, '#c8d8f0');
  nucGrad.addColorStop(1, '#a8b8e0');
  ctx.fillStyle = nucGrad;
  ctx.strokeStyle = color.dark;
  ctx.lineWidth = 1.5;
  ctx.beginPath();
  ctx.ellipse(w * 0.5, h * 0.5, w * 0.15, h * 0.12, 0, 0, Math.PI * 2);
  ctx.fill(); ctx.stroke();

  // Posterior longitudinal ligament (back)
  ctx.fillStyle = '#f0e0c0';
  ctx.strokeStyle = color.dark;
  ctx.lineWidth = 1.5;
  ctx.beginPath();
  ctx.rect(w * 0.82, h * 0.04, w * 0.04, h * 0.92);
  ctx.fill(); ctx.stroke();

  // Anterior longitudinal ligament (front)
  ctx.beginPath();
  ctx.rect(w * 0.14, h * 0.04, w * 0.04, h * 0.92);
  ctx.fill(); ctx.stroke();

  ctx.fillStyle = color.dark;
  ctx.font = `${w * 0.033}px sans-serif`;
  ctx.fillText('Vertebral body', w * 0.32, h * 0.17);
  ctx.fillText('End plate', w * 0.68, h * 0.27);
  ctx.fillText('Annulus fibrosus', w * 0.04, h * 0.5);
  ctx.fillText('Nucleus pulposus', w * 0.56, h * 0.5);
  ctx.fillText('Post. lig.', w * 0.82, h * 0.5);
  ctx.fillText('Ant. lig.', w * 0.06, h * 0.24);
}

// ============================================================
// EAR — Missing Drawing Methods
// ============================================================

static drawOuterEar(ctx, color, w, h) {
  const gradient = ctx.createRadialGradient(w * 0.45, h * 0.5, 0, w * 0.45, h * 0.5, w * 0.4);
  gradient.addColorStop(0, color.light);
  gradient.addColorStop(0.6, color.base);
  gradient.addColorStop(1, color.dark);

  // Auricle (pinna) — complex cartilaginous folds
  ctx.fillStyle = gradient;
  ctx.strokeStyle = color.dark;
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.moveTo(w * 0.5, h * 0.1);
  ctx.bezierCurveTo(w * 0.72, h * 0.08, w * 0.85, h * 0.2, w * 0.85, h * 0.38);
  ctx.bezierCurveTo(w * 0.85, h * 0.55, w * 0.78, h * 0.68, w * 0.68, h * 0.75);
  ctx.bezierCurveTo(w * 0.62, h * 0.82, w * 0.55, h * 0.88, w * 0.48, h * 0.9);
  ctx.bezierCurveTo(w * 0.38, h * 0.92, w * 0.3, h * 0.88, w * 0.28, h * 0.78);
  ctx.bezierCurveTo(w * 0.25, h * 0.65, w * 0.22, h * 0.5, w * 0.22, h * 0.38);
  ctx.bezierCurveTo(w * 0.22, h * 0.22, w * 0.32, h * 0.1, w * 0.5, h * 0.1);
  ctx.fill(); ctx.stroke();

  // Helix (outer rim)
  ctx.strokeStyle = color.dark;
  ctx.lineWidth = 3;
  ctx.beginPath();
  ctx.moveTo(w * 0.5, h * 0.14);
  ctx.bezierCurveTo(w * 0.68, h * 0.12, w * 0.8, h * 0.22, w * 0.8, h * 0.4);
  ctx.bezierCurveTo(w * 0.8, h * 0.58, w * 0.72, h * 0.72, w * 0.6, h * 0.78);
  ctx.stroke();

  // Antihelix
  ctx.strokeStyle = color.dark;
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.moveTo(w * 0.45, h * 0.22);
  ctx.bezierCurveTo(w * 0.55, h * 0.2, w * 0.65, h * 0.28, w * 0.65, h * 0.44);
  ctx.bezierCurveTo(w * 0.65, h * 0.58, w * 0.58, h * 0.68, w * 0.5, h * 0.72);
  ctx.stroke();

  // Concha
  ctx.fillStyle = color.dark;
  ctx.globalAlpha = 0.2;
  ctx.beginPath();
  ctx.ellipse(w * 0.45, h * 0.52, w * 0.12, h * 0.16, 0, 0, Math.PI * 2);
  ctx.fill();
  ctx.globalAlpha = 1;

  // External auditory meatus (ear canal opening)
  ctx.fillStyle = '#333';
  ctx.beginPath();
  ctx.ellipse(w * 0.38, h * 0.54, w * 0.04, h * 0.055, 0.3, 0, Math.PI * 2);
  ctx.fill();

  // Tragus
  ctx.fillStyle = color.base;
  ctx.strokeStyle = color.dark;
  ctx.lineWidth = 1.5;
  ctx.beginPath();
  ctx.moveTo(w * 0.3, h * 0.5);
  ctx.bezierCurveTo(w * 0.32, h * 0.44, w * 0.36, h * 0.44, w * 0.37, h * 0.5);
  ctx.bezierCurveTo(w * 0.36, h * 0.56, w * 0.32, h * 0.56, w * 0.3, h * 0.5);
  ctx.fill(); ctx.stroke();

  // Earlobe (lobule)
  ctx.fillStyle = gradient;
  ctx.strokeStyle = color.dark;
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.ellipse(w * 0.38, h * 0.87, w * 0.1, h * 0.07, -0.2, 0, Math.PI * 2);
  ctx.fill(); ctx.stroke();

  ctx.fillStyle = color.dark;
  ctx.font = `${w * 0.033}px sans-serif`;
  ctx.fillText('Helix', w * 0.62, h * 0.14);
  ctx.fillText('Antihelix', w * 0.62, h * 0.28);
  ctx.fillText('Concha', w * 0.5, h * 0.52);
  ctx.fillText('Tragus', w * 0.14, h * 0.5);
  ctx.fillText('Meatus', w * 0.14, h * 0.58);
  ctx.fillText('Lobule', w * 0.5, h * 0.92);
}

static drawMiddleEar(ctx, color, w, h) {
  // Tympanic membrane + ossicles in tympanic cavity

  // Tympanic cavity outline
  ctx.fillStyle = '#f0e8d0';
  ctx.strokeStyle = color.dark;
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.roundRect(w * 0.08, h * 0.12, w * 0.84, h * 0.76, w * 0.06);
  ctx.fill(); ctx.stroke();

  // Tympanic membrane (eardrum)
  ctx.fillStyle = '#f5d0b0';
  ctx.strokeStyle = color.dark;
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.ellipse(w * 0.18, h * 0.5, w * 0.06, h * 0.3, 0, 0, Math.PI * 2);
  ctx.fill(); ctx.stroke();

  // Malleus (hammer)
  ctx.fillStyle = '#c8b888';
  ctx.strokeStyle = color.dark;
  ctx.lineWidth = 1.5;
  ctx.beginPath();
  ctx.ellipse(w * 0.3, h * 0.3, w * 0.04, h * 0.04, 0, 0, Math.PI * 2);
  ctx.fill(); ctx.stroke();
  ctx.lineWidth = 3;
  ctx.strokeStyle = '#c8b888';
  ctx.beginPath();
  ctx.moveTo(w * 0.3, h * 0.34);
  ctx.lineTo(w * 0.22, h * 0.5);
  ctx.stroke();
  ctx.lineWidth = 1;
  ctx.strokeStyle = color.dark;
  ctx.beginPath();
  ctx.moveTo(w * 0.3, h * 0.34);
  ctx.lineTo(w * 0.22, h * 0.5);
  ctx.stroke();

  // Incus (anvil)
  ctx.fillStyle = '#c8b888';
  ctx.strokeStyle = color.dark;
  ctx.lineWidth = 1.5;
  ctx.beginPath();
  ctx.ellipse(w * 0.44, h * 0.3, w * 0.04, h * 0.04, 0, 0, Math.PI * 2);
  ctx.fill(); ctx.stroke();
  ctx.strokeStyle = '#c8b888';
  ctx.lineWidth = 3;
  ctx.beginPath();
  ctx.moveTo(w * 0.44, h * 0.34);
  ctx.bezierCurveTo(w * 0.46, h * 0.42, w * 0.52, h * 0.46, w * 0.54, h * 0.52);
  ctx.stroke();
  ctx.lineWidth = 1;
  ctx.strokeStyle = color.dark;
  ctx.beginPath();
  ctx.moveTo(w * 0.44, h * 0.34);
  ctx.bezierCurveTo(w * 0.46, h * 0.42, w * 0.52, h * 0.46, w * 0.54, h * 0.52);
  ctx.stroke();

  // Stapes (stirrup)
  ctx.fillStyle = '#c8b888';
  ctx.strokeStyle = color.dark;
  ctx.lineWidth = 1.5;
  ctx.beginPath();
  ctx.ellipse(w * 0.58, h * 0.52, w * 0.03, h * 0.03, 0, 0, Math.PI * 2);
  ctx.fill(); ctx.stroke();
  ctx.strokeStyle = '#c8b888';
  ctx.lineWidth = 3;
  ctx.beginPath();
  ctx.moveTo(w * 0.58, h * 0.52);
  ctx.bezierCurveTo(w * 0.62, h * 0.48, w * 0.66, h * 0.48, w * 0.68, h * 0.52);
  ctx.bezierCurveTo(w * 0.66, h * 0.56, w * 0.62, h * 0.56, w * 0.58, h * 0.52);
  ctx.stroke();

  // Stapes footplate on oval window
  ctx.fillStyle = '#c8b888';
  ctx.strokeStyle = color.dark;
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.rect(w * 0.68, h * 0.48, w * 0.04, h * 0.08);
  ctx.fill(); ctx.stroke();

  // Oval window
  ctx.fillStyle = '#aaccff';
  ctx.beginPath();
  ctx.ellipse(w * 0.76, h * 0.42, w * 0.04, h * 0.06, 0, 0, Math.PI * 2);
  ctx.fill(); ctx.stroke();

  // Round window
  ctx.fillStyle = '#aaccff';
  ctx.beginPath();
  ctx.ellipse(w * 0.76, h * 0.62, w * 0.035, h * 0.05, 0, 0, Math.PI * 2);
  ctx.fill(); ctx.stroke();

  // Eustachian tube
  ctx.strokeStyle = color.base;
  ctx.lineWidth = 5;
  ctx.beginPath();
  ctx.moveTo(w * 0.12, h * 0.72);
  ctx.bezierCurveTo(w * 0.1, h * 0.82, w * 0.12, h * 0.9, w * 0.25, h * 0.92);
  ctx.stroke();
  ctx.strokeStyle = color.dark;
  ctx.lineWidth = 1.5;
  ctx.stroke();

  // Joint between malleus-incus
  ctx.strokeStyle = color.dark;
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.moveTo(w * 0.34, h * 0.3);
  ctx.lineTo(w * 0.4, h * 0.3);
  ctx.stroke();

  ctx.fillStyle = color.dark;
  ctx.font = `${w * 0.032}px sans-serif`;
  ctx.fillText('Eardrum', w * 0.02, h * 0.46);
  ctx.fillText('Malleus', w * 0.28, h * 0.22);
  ctx.fillText('Incus', w * 0.44, h * 0.22);
  ctx.fillText('Stapes', w * 0.57, h * 0.44);
  ctx.fillText('Oval window', w * 0.78, h * 0.4);
  ctx.fillText('Round window', w * 0.78, h * 0.62);
  ctx.fillText('Eustachian tube', w * 0.16, h * 0.9);
}

static drawInnerEar(ctx, color, w, h) {
  // Labyrinth overview showing cochlea + vestibule + semicircular canals

  // Cochlea (snail shape)
  const cochGrad = ctx.createRadialGradient(w * 0.3, h * 0.65, 0, w * 0.3, h * 0.65, w * 0.25);
  cochGrad.addColorStop(0, color.light);
  cochGrad.addColorStop(1, color.base);
  ctx.fillStyle = cochGrad;
  ctx.strokeStyle = color.dark;
  ctx.lineWidth = 2;
  // 2.5 turns
  for (let turn = 0; turn < 3; turn++) {
    const r = (2.5 - turn) * w * 0.08;
    ctx.beginPath();
    ctx.arc(w * 0.3, h * 0.65, r, Math.PI * 0.8, Math.PI * 2.8);
    ctx.strokeStyle = color.dark;
    ctx.lineWidth = 8 - turn * 2;
    ctx.stroke();
    ctx.lineWidth = 1.5;
    ctx.strokeStyle = color.dark;
    ctx.stroke();
  }

  // Cochlear apex
  ctx.fillStyle = color.light;
  ctx.beginPath();
  ctx.arc(w * 0.3 + w * 0.04, h * 0.57, w * 0.025, 0, Math.PI * 2);
  ctx.fill(); ctx.stroke();

  // Vestibule (central chamber)
  ctx.fillStyle = color.base;
  ctx.strokeStyle = color.dark;
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.ellipse(w * 0.5, h * 0.52, w * 0.07, h * 0.08, 0, 0, Math.PI * 2);
  ctx.fill(); ctx.stroke();

  // Three semicircular canals
  const canals = [
    { cx: 0.5, cy: 0.28, rx: 0.18, ry: 0.16, rot: 0,   label: 'Superior' },
    { cx: 0.62, cy: 0.38, rx: 0.14, ry: 0.18, rot: 0.5, label: 'Posterior' },
    { cx: 0.58, cy: 0.38, rx: 0.18, ry: 0.1,  rot: 0.2, label: 'Lateral' },
  ];
  canals.forEach(({ cx, cy, rx, ry, rot }) => {
    ctx.strokeStyle = color.dark;
    ctx.lineWidth = 5;
    ctx.beginPath();
    ctx.ellipse(w * cx, h * cy, w * rx, h * ry, rot, 0, Math.PI * 2);
    ctx.stroke();
    ctx.lineWidth = 1.5;
    ctx.strokeStyle = color.dark;
    ctx.stroke();
  });

  // Ampullae (dilated ends of canals)
  [[0.36, 0.44], [0.56, 0.6], [0.6, 0.28]].forEach(([ax, ay]) => {
    ctx.fillStyle = color.light;
    ctx.strokeStyle = color.dark;
    ctx.lineWidth = 1.5;
    ctx.beginPath();
    ctx.arc(w * ax, h * ay, w * 0.02, 0, Math.PI * 2);
    ctx.fill(); ctx.stroke();
  });

  // Oval window connection
  ctx.strokeStyle = color.dark;
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.moveTo(w * 0.43, h * 0.5);
  ctx.lineTo(w * 0.3, h * 0.5);
  ctx.stroke();

  // Cochlear nerve
  ctx.strokeStyle = '#ffdd44';
  ctx.lineWidth = 3;
  ctx.beginPath();
  ctx.moveTo(w * 0.3, h * 0.65);
  ctx.bezierCurveTo(w * 0.22, h * 0.68, w * 0.12, h * 0.72, w * 0.08, h * 0.78);
  ctx.stroke();

  // Vestibular nerve
  ctx.beginPath();
  ctx.moveTo(w * 0.5, h * 0.52);
  ctx.bezierCurveTo(w * 0.38, h * 0.6, w * 0.2, h * 0.7, w * 0.08, h * 0.78);
  ctx.stroke();

  ctx.fillStyle = color.dark;
  ctx.font = `${w * 0.033}px sans-serif`;
  ctx.fillText('Superior canal', w * 0.38, h * 0.12);
  ctx.fillText('Lateral canal', w * 0.72, h * 0.38);
  ctx.fillText('Posterior canal', w * 0.72, h * 0.52);
  ctx.fillText('Vestibule', w * 0.52, h * 0.48);
  ctx.fillText('Cochlea', w * 0.06, h * 0.68);
  ctx.fillText('Cochlear nerve', w * 0.04, h * 0.82);
}

static drawCochlea(ctx, color, w, h) {
  // Detailed cochlea cross-section showing scalae

  // Overall cochlea outline (2.5 turns)
  ctx.strokeStyle = color.dark;
  ctx.lineWidth = 2;
  for (let turn = 0; turn < 3; turn++) {
    const r = (2.5 - turn) * w * 0.12;
    ctx.fillStyle = turn % 2 === 0 ? color.light : color.base;
    ctx.beginPath();
    ctx.arc(w * 0.5, h * 0.55, r, 0, Math.PI * 2);
    ctx.fill();
    ctx.stroke();
  }

  // Modiolus (central axis)
  ctx.fillStyle = '#e8dcc0';
  ctx.beginPath();
  ctx.arc(w * 0.5, h * 0.55, w * 0.07, 0, Math.PI * 2);
  ctx.fill(); ctx.stroke();

  // Spiral lamina (shown as dividing line in one turn)
  ctx.strokeStyle = color.dark;
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.moveTo(w * 0.5, h * 0.55);
  ctx.bezierCurveTo(w * 0.62, h * 0.48, w * 0.7, h * 0.38, w * 0.66, h * 0.28);
  ctx.stroke();

  // Unrolled duct cross-section (inset)
  const ix = 0.06, iy = 0.08, iw = 0.36, ih = 0.3;
  ctx.fillStyle = '#f0f0f0';
  ctx.strokeStyle = color.dark;
  ctx.lineWidth = 1.5;
  ctx.beginPath();
  ctx.rect(w * ix, h * iy, w * iw, h * ih);
  ctx.fill(); ctx.stroke();

  // Scala vestibuli (top)
  ctx.fillStyle = '#c0e8ff';
  ctx.beginPath();
  ctx.rect(w * ix, h * iy, w * iw, h * ih * 0.35);
  ctx.fill();

  // Scala media / cochlear duct (middle)
  ctx.fillStyle = '#d8ffd8';
  ctx.beginPath();
  ctx.rect(w * ix, h * (iy + ih * 0.35), w * iw, h * ih * 0.3);
  ctx.fill();

  // Scala tympani (bottom)
  ctx.fillStyle = '#ffd8d8';
  ctx.beginPath();
  ctx.rect(w * ix, h * (iy + ih * 0.65), w * iw, h * ih * 0.35);
  ctx.fill();

  // Reissner's membrane
  ctx.strokeStyle = color.dark;
  ctx.lineWidth = 1.5;
  ctx.beginPath();
  ctx.moveTo(w * ix, h * (iy + ih * 0.35));
  ctx.lineTo(w * (ix + iw), h * (iy + ih * 0.35));
  ctx.stroke();

  // Basilar membrane + Organ of Corti
  ctx.lineWidth = 2.5;
  ctx.strokeStyle = '#cc8844';
  ctx.beginPath();
  ctx.moveTo(w * ix, h * (iy + ih * 0.65));
  ctx.lineTo(w * (ix + iw), h * (iy + ih * 0.65));
  ctx.stroke();

  // Hair cells on basilar membrane (tiny bumps)
  ctx.fillStyle = color.dark;
  for (let i = 0; i < 8; i++) {
    ctx.beginPath();
    ctx.arc(w * (ix + 0.04 + i * 0.04), h * (iy + ih * 0.63), w * 0.008, 0, Math.PI * 2);
    ctx.fill();
  }

  ctx.fillStyle = color.dark;
  ctx.font = `${w * 0.03}px sans-serif`;
  ctx.fillText('Scala vestibuli', w * (ix + 0.02), h * (iy + 0.06));
  ctx.fillText('Cochlear duct', w * (ix + 0.02), h * (iy + ih * 0.5));
  ctx.fillText('Scala tympani', w * (ix + 0.02), h * (iy + ih * 0.85));
  ctx.fillText('Basilar membrane', w * (ix + 0.01), h * (iy + ih * 0.72));
  ctx.fillText('(Organ of Corti)', w * (ix + 0.01), h * (iy + ih * 0.78));
  ctx.fillText('Modiolus', w * 0.52, h * 0.55);
  ctx.fillText('Spiral lamina', w * 0.62, h * 0.4);
}

static drawAuditoryOssicles(ctx, color, w, h) {
  // Detailed drawing of all three ossicles: malleus, incus, stapes

  ctx.strokeStyle = color.dark;
  ctx.lineWidth = 2;

  // ===  MALLEUS (left third) ===
  ctx.fillStyle = color.base;
  // Head
  ctx.beginPath();
  ctx.ellipse(w * 0.18, h * 0.22, w * 0.06, h * 0.065, 0, 0, Math.PI * 2);
  ctx.fill(); ctx.stroke();
  // Neck
  ctx.fillStyle = color.dark;
  ctx.beginPath();
  ctx.rect(w * 0.16, h * 0.28, w * 0.04, h * 0.06);
  ctx.fill(); ctx.stroke();
  // Manubrium (handle)
  ctx.fillStyle = color.base;
  ctx.lineWidth = 6;
  ctx.strokeStyle = color.base;
  ctx.beginPath();
  ctx.moveTo(w * 0.18, h * 0.34);
  ctx.bezierCurveTo(w * 0.16, h * 0.45, w * 0.14, h * 0.55, w * 0.15, h * 0.68);
  ctx.stroke();
  ctx.lineWidth = 2;
  ctx.strokeStyle = color.dark;
  ctx.stroke();
  // Lateral process
  ctx.strokeStyle = color.base;
  ctx.lineWidth = 4;
  ctx.beginPath();
  ctx.moveTo(w * 0.18, h * 0.32);
  ctx.lineTo(w * 0.1, h * 0.3);
  ctx.stroke();
  ctx.strokeStyle = color.dark;
  ctx.lineWidth = 1.5;
  ctx.stroke();
  ctx.fillStyle = color.dark;
  ctx.font = `${w * 0.036}px sans-serif`;
  ctx.fillText('Malleus', w * 0.08, h * 0.12);
  ctx.fillText('Head', w * 0.22, h * 0.2);
  ctx.fillText('Neck', w * 0.22, h * 0.3);
  ctx.fillText('Manubrium', w * 0.22, h * 0.52);

  // === INCUS (center third) ===
  ctx.fillStyle = color.base;
  ctx.strokeStyle = color.dark;
  ctx.lineWidth = 2;
  // Body
  ctx.beginPath();
  ctx.ellipse(w * 0.5, h * 0.22, w * 0.065, h * 0.065, 0, 0, Math.PI * 2);
  ctx.fill(); ctx.stroke();
  // Short crus (posterior)
  ctx.strokeStyle = color.base;
  ctx.lineWidth = 5;
  ctx.beginPath();
  ctx.moveTo(w * 0.5, h * 0.28);
  ctx.bezierCurveTo(w * 0.52, h * 0.38, w * 0.52, h * 0.46, w * 0.48, h * 0.52);
  ctx.stroke();
  ctx.strokeStyle = color.dark;
  ctx.lineWidth = 1.5;
  ctx.stroke();
  // Long crus
  ctx.strokeStyle = color.base;
  ctx.lineWidth = 4;
  ctx.beginPath();
  ctx.moveTo(w * 0.5, h * 0.28);
  ctx.bezierCurveTo(w * 0.56, h * 0.36, w * 0.58, h * 0.5, w * 0.56, h * 0.64);
  ctx.stroke();
  ctx.strokeStyle = color.dark;
  ctx.lineWidth = 1.5;
  ctx.stroke();
  // Lenticular process at end
  ctx.fillStyle = color.base;
  ctx.strokeStyle = color.dark;
  ctx.lineWidth = 1.5;
  ctx.beginPath();
  ctx.arc(w * 0.55, h * 0.67, w * 0.022, 0, Math.PI * 2);
  ctx.fill(); ctx.stroke();
  ctx.fillStyle = color.dark;
  ctx.fillText('Incus', w * 0.42, h * 0.12);
  ctx.fillText('Body', w * 0.56, h * 0.2);
  ctx.fillText('Long crus', w * 0.6, h * 0.46);
  ctx.fillText('Short crus', w * 0.34, h * 0.44);
  ctx.fillText('Lenticular', w * 0.58, h * 0.66);

  // === STAPES (right third) ===
  ctx.fillStyle = color.base;
  ctx.strokeStyle = color.dark;
  ctx.lineWidth = 2;
  // Head
  ctx.beginPath();
  ctx.ellipse(w * 0.8, h * 0.32, w * 0.03, h * 0.03, 0, 0, Math.PI * 2);
  ctx.fill(); ctx.stroke();
  // Anterior crus
  ctx.strokeStyle = color.base;
  ctx.lineWidth = 4;
  ctx.beginPath();
  ctx.moveTo(w * 0.8, h * 0.35);
  ctx.bezierCurveTo(w * 0.78, h * 0.48, w * 0.76, h * 0.58, w * 0.78, h * 0.65);
  ctx.stroke();
  ctx.strokeStyle = color.dark;
  ctx.lineWidth = 1.5;
  ctx.stroke();
  // Posterior crus
  ctx.strokeStyle = color.base;
  ctx.lineWidth = 4;
  ctx.beginPath();
  ctx.moveTo(w * 0.8, h * 0.35);
  ctx.bezierCurveTo(w * 0.84, h * 0.48, w * 0.86, h * 0.58, w * 0.84, h * 0.65);
  ctx.stroke();
  ctx.strokeStyle = color.dark;
  ctx.lineWidth = 1.5;
  ctx.stroke();
  // Footplate
  ctx.fillStyle = color.base;
  ctx.strokeStyle = color.dark;
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.ellipse(w * 0.81, h * 0.68, w * 0.05, h * 0.03, 0, 0, Math.PI * 2);
  ctx.fill(); ctx.stroke();
  ctx.fillStyle = color.dark;
  ctx.fillText('Stapes', w * 0.74, h * 0.12);
  ctx.fillText('Head', w * 0.84, h * 0.3);
  ctx.fillText('Ant. crus', w * 0.68, h * 0.52);
  ctx.fillText('Post. crus', w * 0.87, h * 0.52);
  ctx.fillText('Footplate', w * 0.74, h * 0.74);
}

static drawSemicircularCanals(ctx, color, w, h) {
  // Three semicircular canals in orthogonal planes

  // Superior (anterior) canal
  ctx.strokeStyle = color.base;
  ctx.lineWidth = 8;
  ctx.beginPath();
  ctx.arc(w * 0.5, h * 0.38, w * 0.32, Math.PI, 0);
  ctx.stroke();
  ctx.lineWidth = 2;
  ctx.strokeStyle = color.dark;
  ctx.stroke();

  // Posterior canal
  ctx.strokeStyle = color.dark;
  ctx.lineWidth = 8;
  ctx.strokeStyle = color.base;
  ctx.beginPath();
  ctx.ellipse(w * 0.72, h * 0.55, w * 0.16, h * 0.3, 0.4, 0, Math.PI * 2);
  ctx.stroke();
  ctx.lineWidth = 2;
  ctx.strokeStyle = color.dark;
  ctx.stroke();

  // Lateral (horizontal) canal
  ctx.strokeStyle = color.base;
  ctx.lineWidth = 8;
  ctx.beginPath();
  ctx.ellipse(w * 0.5, h * 0.55, w * 0.28, h * 0.12, 0, 0, Math.PI * 2);
  ctx.stroke();
  ctx.lineWidth = 2;
  ctx.strokeStyle = color.dark;
  ctx.stroke();

  // Vestibule (common chamber)
  ctx.fillStyle = color.base;
  ctx.strokeStyle = color.dark;
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.ellipse(w * 0.5, h * 0.56, w * 0.06, h * 0.08, 0, 0, Math.PI * 2);
  ctx.fill(); ctx.stroke();

  // Ampullae (one per canal)
  [[0.22, 0.56], [0.5, 0.44], [0.62, 0.32]].forEach(([ax, ay]) => {
    ctx.fillStyle = color.light;
    ctx.strokeStyle = color.dark;
    ctx.lineWidth = 1.5;
    ctx.beginPath();
    ctx.arc(w * ax, h * ay, w * 0.025, 0, Math.PI * 2);
    ctx.fill(); ctx.stroke();
  });

  // Cupula inside ampulla (crista ampullaris)
  ctx.strokeStyle = color.dark;
  ctx.lineWidth = 1.5;
  ctx.beginPath();
  ctx.moveTo(w * 0.5, h * 0.41);
  ctx.bezierCurveTo(w * 0.48, h * 0.43, w * 0.48, h * 0.46, w * 0.5, h * 0.47);
  ctx.bezierCurveTo(w * 0.52, h * 0.46, w * 0.52, h * 0.43, w * 0.5, h * 0.41);
  ctx.stroke();

  // Crura communis (joined limbs of superior and posterior)
  ctx.strokeStyle = color.base;
  ctx.lineWidth = 6;
  ctx.beginPath();
  ctx.moveTo(w * 0.68, h * 0.38);
  ctx.lineTo(w * 0.7, h * 0.52);
  ctx.stroke();
  ctx.strokeStyle = color.dark;
  ctx.lineWidth = 2;
  ctx.stroke();

  // Cochlea (context, small)
  ctx.strokeStyle = color.dark;
  ctx.lineWidth = 4;
  ctx.beginPath();
  ctx.arc(w * 0.3, h * 0.72, w * 0.1, 0.5, Math.PI * 2.5);
  ctx.stroke();
  ctx.beginPath();
  ctx.arc(w * 0.3, h * 0.72, w * 0.065, 0.5, Math.PI * 2.5);
  ctx.stroke();

  ctx.fillStyle = color.dark;
  ctx.font = `${w * 0.033}px sans-serif`;
  ctx.fillText('Superior canal', w * 0.28, h * 0.06);
  ctx.fillText('Lateral canal', w * 0.56, h * 0.68);
  ctx.fillText('Posterior canal', w * 0.76, h * 0.62);
  ctx.fillText('Ampulla', w * 0.54, h * 0.42);
  ctx.fillText('Vestibule', w * 0.54, h * 0.52);
  ctx.fillText('Cochlea', w * 0.14, h * 0.78);
}

static drawAuditoryNerve(ctx, color, w, h) {
  // Vestibulocochlear nerve (CN VIII) and its branches

  // Cochlear nerve branch
  ctx.strokeStyle = '#ffdd44';
  ctx.lineWidth = 4;
  ctx.beginPath();
  ctx.moveTo(w * 0.22, h * 0.68);
  ctx.bezierCurveTo(w * 0.3, h * 0.62, w * 0.42, h * 0.58, w * 0.52, h * 0.52);
  ctx.stroke();
  ctx.lineWidth = 1;
  ctx.strokeStyle = color.dark;
  ctx.stroke();

  // Vestibular nerve branch
  ctx.strokeStyle = '#ffdd44';
  ctx.lineWidth = 4;
  ctx.beginPath();
  ctx.moveTo(w * 0.22, h * 0.42);
  ctx.bezierCurveTo(w * 0.32, h * 0.44, w * 0.42, h * 0.48, w * 0.52, h * 0.52);
  ctx.stroke();
  ctx.lineWidth = 1;
  ctx.strokeStyle = color.dark;
  ctx.stroke();

  // Main trunk
  ctx.strokeStyle = '#ffdd44';
  ctx.lineWidth = 8;
  ctx.beginPath();
  ctx.moveTo(w * 0.52, h * 0.52);
  ctx.bezierCurveTo(w * 0.65, h * 0.52, w * 0.8, h * 0.52, w * 0.92, h * 0.52);
  ctx.stroke();
  ctx.lineWidth = 2;
  ctx.strokeStyle = color.dark;
  ctx.stroke();

  // Myelin sheath bands
  ctx.strokeStyle = color.dark;
  ctx.lineWidth = 1;
  [0.6, 0.68, 0.76, 0.84].forEach(x => {
    ctx.beginPath();
    ctx.moveTo(w * x, h * 0.47);
    ctx.lineTo(w * x, h * 0.57);
    ctx.stroke();
  });

  // Cochlea (schematic)
  ctx.strokeStyle = color.dark;
  ctx.lineWidth = 3;
  ctx.beginPath();
  ctx.arc(w * 0.18, h * 0.72, w * 0.1, 0, Math.PI * 1.8);
  ctx.stroke();
  ctx.beginPath();
  ctx.arc(w * 0.18, h * 0.72, w * 0.07, 0, Math.PI * 1.8);
  ctx.stroke();

  // Spiral ganglion (cell bodies)
  ctx.fillStyle = color.base;
  ctx.strokeStyle = color.dark;
  ctx.lineWidth = 1.5;
  ctx.beginPath();
  ctx.arc(w * 0.24, h * 0.68, w * 0.04, 0, Math.PI * 2);
  ctx.fill(); ctx.stroke();

  // Vestibular ganglion (Scarpa's ganglion)
  ctx.beginPath();
  ctx.arc(w * 0.3, h * 0.44, w * 0.04, 0, Math.PI * 2);
  ctx.fill(); ctx.stroke();

  // Semicircular canals (schematic)
  ctx.strokeStyle = color.dark;
  ctx.lineWidth = 2;
  ctx.setLineDash([4, 3]);
  ctx.beginPath();
  ctx.arc(w * 0.18, h * 0.38, w * 0.08, 0, Math.PI);
  ctx.stroke();
  ctx.beginPath();
  ctx.ellipse(w * 0.24, h * 0.3, w * 0.06, w * 0.14, 0.3, 0, Math.PI * 2);
  ctx.stroke();
  ctx.setLineDash([]);

  // Brainstem connection
  ctx.fillStyle = '#e8c8a0';
  ctx.strokeStyle = color.dark;
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.ellipse(w * 0.92, h * 0.5, w * 0.06, h * 0.25, 0, 0, Math.PI * 2);
  ctx.fill(); ctx.stroke();

  ctx.fillStyle = color.dark;
  ctx.font = `${w * 0.034}px sans-serif`;
  ctx.fillText('Cochlea', w * 0.04, h * 0.78);
  ctx.fillText('Spiral ganglion', w * 0.04, h * 0.6);
  ctx.fillText('Cochlear nerve', w * 0.26, h * 0.76);
  ctx.fillText('Vestibular', w * 0.22, h * 0.36);
  ctx.fillText('ganglion', w * 0.22, h * 0.41);
  ctx.fillText('Vestibular nerve', w * 0.26, h * 0.32);
  ctx.fillText('CN VIII trunk', w * 0.64, h * 0.44);
  ctx.fillText('Brainstem', w * 0.88, h * 0.3);
}

static drawEardrum(ctx, color, w, h) {
  // Tympanic membrane — front view + cross-section

  // === Front view (tympanic membrane face) ===
  const tmGrad = ctx.createRadialGradient(w * 0.3, h * 0.5, 0, w * 0.3, h * 0.5, w * 0.24);
  tmGrad.addColorStop(0, color.light);
  tmGrad.addColorStop(0.5, color.base);
  tmGrad.addColorStop(1, color.dark);

  ctx.fillStyle = tmGrad;
  ctx.strokeStyle = color.dark;
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.ellipse(w * 0.3, h * 0.5, w * 0.22, h * 0.38, 0, 0, Math.PI * 2);
  ctx.fill(); ctx.stroke();

  // Fibrous annulus (thickened rim)
  ctx.strokeStyle = color.dark;
  ctx.lineWidth = 4;
  ctx.beginPath();
  ctx.ellipse(w * 0.3, h * 0.5, w * 0.22, h * 0.38, 0, 0, Math.PI * 2);
  ctx.stroke();

  // Pars flaccida (upper thin region)
  ctx.fillStyle = color.light;
  ctx.strokeStyle = color.dark;
  ctx.lineWidth = 1.5;
  ctx.beginPath();
  ctx.ellipse(w * 0.3, h * 0.22, w * 0.08, h * 0.05, 0, 0, Math.PI * 2);
  ctx.fill(); ctx.stroke();

  // Pars tensa (lower larger region)
  ctx.globalAlpha = 0.3;
  ctx.fillStyle = color.dark;
  ctx.beginPath();
  ctx.ellipse(w * 0.3, h * 0.54, w * 0.18, h * 0.3, 0, 0, Math.PI * 2);
  ctx.fill();
  ctx.globalAlpha = 1;

  // Malleus handle imprint (visible through membrane)
  ctx.strokeStyle = color.dark;
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.moveTo(w * 0.3, h * 0.28);
  ctx.bezierCurveTo(w * 0.28, h * 0.38, w * 0.26, h * 0.5, w * 0.27, h * 0.62);
  ctx.stroke();

  // Umbo (tip of manubrium, central depression)
  ctx.fillStyle = color.dark;
  ctx.beginPath();
  ctx.arc(w * 0.27, h * 0.62, w * 0.015, 0, Math.PI * 2);
  ctx.fill();

  // Light reflex (cone of light)
  ctx.fillStyle = 'rgba(255,255,200,0.5)';
  ctx.beginPath();
  ctx.moveTo(w * 0.27, h * 0.62);
  ctx.bezierCurveTo(w * 0.2, h * 0.65, w * 0.18, h * 0.72, w * 0.22, h * 0.76);
  ctx.lineTo(w * 0.3, h * 0.7);
  ctx.closePath();
  ctx.fill();

  // === Cross-section (right side) ===
  ctx.fillStyle = color.base;
  ctx.strokeStyle = color.dark;
  ctx.lineWidth = 2;
  // Epidermis (outer layer)
  ctx.strokeStyle = '#cc8844';
  ctx.lineWidth = 3;
  ctx.beginPath();
  ctx.moveTo(w * 0.62, h * 0.18);
  ctx.bezierCurveTo(w * 0.65, h * 0.35, w * 0.65, h * 0.65, w * 0.62, h * 0.82);
  ctx.stroke();
  // Fibrous middle layer
  ctx.strokeStyle = '#888844';
  ctx.lineWidth = 3;
  ctx.beginPath();
  ctx.moveTo(w * 0.67, h * 0.18);
  ctx.bezierCurveTo(w * 0.7, h * 0.35, w * 0.7, h * 0.65, w * 0.67, h * 0.82);
  ctx.stroke();
  // Mucosa (inner layer)
  ctx.strokeStyle = '#cc4488';
  ctx.lineWidth = 3;
  ctx.beginPath();
  ctx.moveTo(w * 0.72, h * 0.18);
  ctx.bezierCurveTo(w * 0.75, h * 0.35, w * 0.75, h * 0.65, w * 0.72, h * 0.82);
  ctx.stroke();

  // Cross-section layer legend
  ctx.font = `${w * 0.03}px sans-serif`;
  ctx.fillStyle = '#cc8844';
  ctx.fillText('Epidermis', w * 0.78, h * 0.35);
  ctx.fillStyle = '#888844';
  ctx.fillText('Fibrous layer', w * 0.78, h * 0.5);
  ctx.fillStyle = '#cc4488';
  ctx.fillText('Mucosa', w * 0.78, h * 0.65);

  ctx.fillStyle = color.dark;
  ctx.font = `${w * 0.033}px sans-serif`;
  ctx.fillText('Pars flaccida', w * 0.04, h * 0.2);
  ctx.fillText('Pars tensa', w * 0.04, h * 0.54);
  ctx.fillText('Malleus handle', w * 0.04, h * 0.44);
  ctx.fillText('Umbo', w * 0.04, h * 0.64);
  ctx.fillText('Light reflex', w * 0.04, h * 0.72);
  ctx.fillText('Annulus', w * 0.35, h * 0.85);
  ctx.fillText('Cross-section', w * 0.64, h * 0.12);
}

// ============================================================
// CELLULAR — Missing Drawing Methods
// ============================================================

static drawAnimalCell(ctx, color, w, h) {
  // Nucleus
  ctx.fillStyle = '#aaccff';
  ctx.strokeStyle = color.dark;
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.ellipse(w * 0.48, h * 0.46, w * 0.14, h * 0.14, 0, 0, Math.PI * 2);
  ctx.fill(); ctx.stroke();

  // Nucleolus
  ctx.fillStyle = '#6688cc';
  ctx.beginPath();
  ctx.arc(w * 0.46, h * 0.44, w * 0.05, 0, Math.PI * 2);
  ctx.fill();

  // Nuclear envelope (double membrane)
  ctx.strokeStyle = color.dark;
  ctx.lineWidth = 1;
  ctx.setLineDash([3, 2]);
  ctx.beginPath();
  ctx.ellipse(w * 0.48, h * 0.46, w * 0.155, h * 0.155, 0, 0, Math.PI * 2);
  ctx.stroke();
  ctx.setLineDash([]);

  // Nuclear pores
  ctx.fillStyle = color.dark;
  for (let a = 0; a < Math.PI * 2; a += Math.PI / 4) {
    ctx.beginPath();
    ctx.arc(w * 0.48 + Math.cos(a) * w * 0.14,
            h * 0.46 + Math.sin(a) * h * 0.14, w * 0.006, 0, Math.PI * 2);
    ctx.fill();
  }

  // Cell membrane (plasma membrane) — irregular shape
  ctx.fillStyle = 'rgba(255,240,200,0.5)';
  ctx.strokeStyle = color.dark;
  ctx.lineWidth = 2.5;
  ctx.beginPath();
  ctx.moveTo(w * 0.5, h * 0.08);
  ctx.bezierCurveTo(w * 0.78, h * 0.1, w * 0.92, h * 0.28, w * 0.88, h * 0.55);
  ctx.bezierCurveTo(w * 0.86, h * 0.75, w * 0.72, h * 0.92, w * 0.5, h * 0.92);
  ctx.bezierCurveTo(w * 0.28, h * 0.92, w * 0.12, h * 0.78, w * 0.1, h * 0.55);
  ctx.bezierCurveTo(w * 0.08, h * 0.3, w * 0.22, h * 0.1, w * 0.5, h * 0.08);
  ctx.fill(); ctx.stroke();

  // Mitochondria
  ctx.fillStyle = '#ffcc88';
  ctx.strokeStyle = color.dark;
  ctx.lineWidth = 1.5;
  [[0.28, 0.3, 0.3], [0.7, 0.35, -0.5], [0.72, 0.68, 0.3], [0.32, 0.72, -0.2]].forEach(([mx, my, rot]) => {
    ctx.beginPath();
    ctx.ellipse(w * mx, h * my, w * 0.06, h * 0.03, rot, 0, Math.PI * 2);
    ctx.fill(); ctx.stroke();
  });

  // Endoplasmic reticulum (rough, near nucleus)
  ctx.strokeStyle = '#cc8844';
  ctx.lineWidth = 1.5;
  ctx.beginPath();
  ctx.moveTo(w * 0.34, h * 0.45);
  ctx.bezierCurveTo(w * 0.28, h * 0.5, w * 0.26, h * 0.6, w * 0.32, h * 0.65);
  ctx.bezierCurveTo(w * 0.38, h * 0.7, w * 0.44, h * 0.66, w * 0.44, h * 0.6);
  ctx.stroke();

  // Golgi apparatus
  ctx.strokeStyle = '#44aa88';
  ctx.lineWidth = 2;
  [[0.62, 0.58], [0.64, 0.62], [0.66, 0.66], [0.68, 0.7]].forEach(([gx, gy]) => {
    ctx.beginPath();
    ctx.ellipse(w * gx, h * gy, w * 0.06, h * 0.015, 0.3, 0, Math.PI * 2);
    ctx.stroke();
  });

  // Ribosomes (tiny dots along ER and free)
  ctx.fillStyle = '#885522';
  [[0.33, 0.45], [0.3, 0.52], [0.34, 0.57], [0.5, 0.3], [0.6, 0.28], [0.65, 0.42]].forEach(([rx, ry]) => {
    ctx.beginPath();
    ctx.arc(w * rx, h * ry, w * 0.007, 0, Math.PI * 2);
    ctx.fill();
  });

  // Centrosome/centrioles
  ctx.fillStyle = '#aaaaff';
  ctx.strokeStyle = color.dark;
  ctx.lineWidth = 1;
  ctx.beginPath();
  ctx.ellipse(w * 0.55, h * 0.3, w * 0.025, h * 0.018, 0, 0, Math.PI * 2);
  ctx.fill(); ctx.stroke();
  ctx.beginPath();
  ctx.ellipse(w * 0.56, h * 0.32, w * 0.015, h * 0.022, 1, 0, Math.PI * 2);
  ctx.fill(); ctx.stroke();

  // Lysosomes
  ctx.fillStyle = '#ff9944';
  [[0.22, 0.62], [0.78, 0.5], [0.55, 0.78]].forEach(([lx, ly]) => {
    ctx.beginPath();
    ctx.arc(w * lx, h * ly, w * 0.022, 0, Math.PI * 2);
    ctx.fill();
    ctx.strokeStyle = color.dark;
    ctx.lineWidth = 0.8;
    ctx.stroke();
  });

  // Vacuole
  ctx.fillStyle = 'rgba(200,230,255,0.6)';
  ctx.strokeStyle = color.dark;
  ctx.lineWidth = 1;
  ctx.beginPath();
  ctx.arc(w * 0.72, h * 0.78, w * 0.04, 0, Math.PI * 2);
  ctx.fill(); ctx.stroke();

  ctx.fillStyle = color.dark;
  ctx.font = `${w * 0.03}px sans-serif`;
  ctx.fillText('Nucleus', w * 0.5, h * 0.44);
  ctx.fillText('Nucleolus', w * 0.4, h * 0.4);
  ctx.fillText('Mitochondria', w * 0.14, h * 0.28);
  ctx.fillText('Rough ER', w * 0.14, h * 0.58);
  ctx.fillText('Golgi', w * 0.75, h * 0.6);
  ctx.fillText('Centrosome', w * 0.57, h * 0.26);
  ctx.fillText('Lysosome', w * 0.8, h * 0.48);
  ctx.fillText('Cell membrane', w * 0.36, h * 0.06);
}

static drawRedBloodCell(ctx, color, w, h) {
  // Biconcave disc — front and side view

  // Front view (left)
  const rbc1 = ctx.createRadialGradient(w * 0.27, h * 0.5, 0, w * 0.27, h * 0.5, w * 0.22);
  rbc1.addColorStop(0, '#ff9999');
  rbc1.addColorStop(0.6, '#cc3333');
  rbc1.addColorStop(1, '#aa1111');
  ctx.fillStyle = rbc1;
  ctx.strokeStyle = color.dark;
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.ellipse(w * 0.27, h * 0.5, w * 0.22, h * 0.22, 0, 0, Math.PI * 2);
  ctx.fill(); ctx.stroke();

  // Central pallor (biconcave depression)
  const pallor = ctx.createRadialGradient(w * 0.27, h * 0.5, 0, w * 0.27, h * 0.5, w * 0.1);
  pallor.addColorStop(0, '#ffcccc');
  pallor.addColorStop(1, '#cc3333');
  ctx.fillStyle = pallor;
  ctx.beginPath();
  ctx.ellipse(w * 0.27, h * 0.5, w * 0.1, h * 0.1, 0, 0, Math.PI * 2);
  ctx.fill();

  // Side profile view (right) — shows biconcave shape
  ctx.fillStyle = '#cc3333';
  ctx.strokeStyle = color.dark;
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.moveTo(w * 0.6, h * 0.32);
  ctx.bezierCurveTo(w * 0.72, h * 0.32, w * 0.82, h * 0.34, w * 0.88, h * 0.38);
  ctx.bezierCurveTo(w * 0.92, h * 0.42, w * 0.92, h * 0.48, w * 0.88, h * 0.5);
  ctx.bezierCurveTo(w * 0.82, h * 0.52, w * 0.82, h * 0.58, w * 0.88, h * 0.6);
  ctx.bezierCurveTo(w * 0.92, h * 0.62, w * 0.92, h * 0.68, w * 0.88, h * 0.72);
  ctx.bezierCurveTo(w * 0.82, h * 0.76, w * 0.72, h * 0.78, w * 0.6, h * 0.78);
  ctx.bezierCurveTo(w * 0.54, h * 0.76, w * 0.54, h * 0.72, w * 0.58, h * 0.68);
  ctx.bezierCurveTo(w * 0.62, h * 0.64, w * 0.62, h * 0.56, w * 0.58, h * 0.5);
  ctx.bezierCurveTo(w * 0.62, h * 0.44, w * 0.62, h * 0.36, w * 0.58, h * 0.32);
  ctx.closePath();
  ctx.fill(); ctx.stroke();

  // Size annotation
  ctx.fillStyle = color.dark;
  ctx.font = `${w * 0.035}px sans-serif`;
  ctx.fillText('Front view', w * 0.14, h * 0.14);
  ctx.fillText('6-8 µm', w * 0.16, h * 0.82);
  ctx.fillText('Side view', w * 0.64, h * 0.14);
  ctx.fillText('Biconcave', w * 0.62, h * 0.5);
  ctx.fillText('disc', w * 0.64, h * 0.56);
  ctx.fillText('Central pallor', w * 0.04, h * 0.5);
  ctx.fillText('No nucleus', w * 0.14, h * 0.64);
  ctx.fillText('(anucleate)', w * 0.14, h * 0.69);
}

static drawWhiteBloodCell(ctx, color, w, h) {
  // Show 5 types of leukocytes

  const cells = [
    {
      name: 'Neutrophil', x: 0.2, y: 0.28, fill: '#ffe8cc',
      nucleus: 'multilobed', lobes: 3
    },
    {
      name: 'Eosinophil', x: 0.5, y: 0.28, fill: '#ffcccc',
      nucleus: 'bilobed', lobes: 2
    },
    {
      name: 'Basophil', x: 0.8, y: 0.28, fill: '#ccccff',
      nucleus: 'S-shaped', lobes: 2
    },
    {
      name: 'Lymphocyte', x: 0.3, y: 0.72, fill: '#ccffcc',
      nucleus: 'round', lobes: 1
    },
    {
      name: 'Monocyte', x: 0.7, y: 0.72, fill: '#eeeebb',
      nucleus: 'horseshoe', lobes: 1
    },
  ];

  cells.forEach(cell => {
    const cx = w * cell.x, cy = h * cell.y;

    // Cell body
    ctx.fillStyle = cell.fill;
    ctx.strokeStyle = color.dark;
    ctx.lineWidth = 1.5;
    ctx.beginPath();
    ctx.arc(cx, cy, w * 0.1, 0, Math.PI * 2);
    ctx.fill(); ctx.stroke();

    // Nucleus types
    ctx.fillStyle = '#6688aa';
    if (cell.lobes >= 2) {
      // Multi/bilobed nucleus
      for (let i = 0; i < cell.lobes; i++) {
        const a = (i / cell.lobes) * Math.PI * 2;
        ctx.beginPath();
        ctx.ellipse(cx + Math.cos(a) * w * 0.04, cy + Math.sin(a) * h * 0.04,
          w * 0.032, h * 0.032, a, 0, Math.PI * 2);
        ctx.fill();
      }
      // Connecting strands
      for (let i = 0; i < cell.lobes - 1; i++) {
        const a1 = (i / cell.lobes) * Math.PI * 2;
        const a2 = ((i + 1) / cell.lobes) * Math.PI * 2;
        ctx.strokeStyle = '#6688aa';
        ctx.lineWidth = 3;
        ctx.beginPath();
        ctx.moveTo(cx + Math.cos(a1) * w * 0.04, cy + Math.sin(a1) * h * 0.04);
        ctx.lineTo(cx + Math.cos(a2) * w * 0.04, cy + Math.sin(a2) * h * 0.04);
        ctx.stroke();
      }
    } else if (cell.nucleus === 'round') {
      ctx.beginPath();
      ctx.arc(cx - w * 0.02, cy, w * 0.06, 0, Math.PI * 2);
      ctx.fill();
    } else {
      // Horseshoe (monocyte)
      ctx.strokeStyle = '#6688aa';
      ctx.lineWidth = 6;
      ctx.beginPath();
      ctx.arc(cx, cy, w * 0.055, Math.PI * 0.3, Math.PI * 1.7);
      ctx.stroke();
    }

    // Granules (for granulocytes)
    if (['Neutrophil', 'Eosinophil', 'Basophil'].includes(cell.name)) {
      const gc = cell.name === 'Eosinophil' ? '#ff4444' :
                 cell.name === 'Basophil'   ? '#4444aa' : '#aaa';
      ctx.fillStyle = gc;
      for (let g = 0; g < 8; g++) {
        const ga = Math.random() * Math.PI * 2;
        const gr = Math.random() * w * 0.07;
        ctx.beginPath();
        ctx.arc(cx + Math.cos(ga) * gr, cy + Math.sin(ga) * gr * 1.2, w * 0.007, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    ctx.fillStyle = color.dark;
    ctx.font = `${w * 0.03}px sans-serif`;
    ctx.fillText(cell.name, cx - w * 0.08, cy + h * 0.14);
  });
}

static drawPlatelet(ctx, color, w, h) {
  // Show platelet structure + activation

  // Resting platelet (discoid, left)
  const pGrad = ctx.createRadialGradient(w * 0.28, h * 0.35, 0, w * 0.28, h * 0.35, w * 0.2);
  pGrad.addColorStop(0, '#ffe0c0');
  pGrad.addColorStop(0.7, '#ffaa88');
  pGrad.addColorStop(1, '#cc6644');
  ctx.fillStyle = pGrad;
  ctx.strokeStyle = color.dark;
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.ellipse(w * 0.28, h * 0.35, w * 0.2, h * 0.12, 0, 0, Math.PI * 2);
  ctx.fill(); ctx.stroke();

  // Dense granules
  ctx.fillStyle = '#aa3333';
  [[0.22, 0.33], [0.28, 0.36], [0.34, 0.34]].forEach(([gx, gy]) => {
    ctx.beginPath();
    ctx.arc(w * gx, h * gy, w * 0.012, 0, Math.PI * 2);
    ctx.fill();
  });

  // Alpha granules
  ctx.fillStyle = '#cc8844';
  [[0.24, 0.37], [0.31, 0.33], [0.3, 0.38]].forEach(([gx, gy]) => {
    ctx.beginPath();
    ctx.arc(w * gx, h * gy, w * 0.01, 0, Math.PI * 2);
    ctx.fill();
  });

  // Marginal band (microtubules)
  ctx.strokeStyle = '#aa88cc';
  ctx.lineWidth = 1.5;
  ctx.beginPath();
  ctx.ellipse(w * 0.28, h * 0.35, w * 0.18, h * 0.1, 0, 0, Math.PI * 2);
  ctx.stroke();

  ctx.fillStyle = color.dark;
  ctx.font = `${w * 0.033}px sans-serif`;
  ctx.fillText('Resting platelet', w * 0.1, h * 0.2);
  ctx.fillText('(discoid)', w * 0.16, h * 0.25);

  // Activated platelet (right, spiky pseudopods)
  ctx.fillStyle = '#ffaa88';
  ctx.strokeStyle = color.dark;
  ctx.lineWidth = 1.5;
  ctx.beginPath();
  ctx.arc(w * 0.7, h * 0.45, w * 0.12, 0, Math.PI * 2);
  ctx.fill(); ctx.stroke();

  // Pseudopods (spiky projections)
  for (let i = 0; i < 8; i++) {
    const a = (i / 8) * Math.PI * 2;
    const r1 = w * 0.12, r2 = w * 0.22;
    ctx.strokeStyle = '#cc6644';
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.moveTo(w * 0.7 + Math.cos(a) * r1, h * 0.45 + Math.sin(a) * r1);
    ctx.lineTo(w * 0.7 + Math.cos(a) * r2, h * 0.45 + Math.sin(a) * r2);
    ctx.stroke();
    ctx.strokeStyle = color.dark;
    ctx.lineWidth = 1;
    ctx.stroke();
  }

  // Degranulation (released factors)
  ctx.fillStyle = '#aa3333';
  ctx.globalAlpha = 0.5;
  for (let i = 0; i < 6; i++) {
    const a = (i / 6) * Math.PI * 2;
    ctx.beginPath();
    ctx.arc(w * 0.7 + Math.cos(a) * w * 0.28, h * 0.45 + Math.sin(a) * h * 0.28,
      w * 0.01, 0, Math.PI * 2);
    ctx.fill();
  }
  ctx.globalAlpha = 1;

  // Fibrin mesh (platelet plug context)
  ctx.strokeStyle = '#ccaa44';
  ctx.lineWidth = 1;
  [[0.55, 0.68, 0.85, 0.72], [0.6, 0.75, 0.82, 0.65], [0.62, 0.62, 0.78, 0.78]].forEach(([x1, y1, x2, y2]) => {
    ctx.beginPath();
    ctx.moveTo(w * x1, h * y1);
    ctx.lineTo(w * x2, h * y2);
    ctx.stroke();
  });

  ctx.fillStyle = color.dark;
  ctx.font = `${w * 0.033}px sans-serif`;
  ctx.fillText('Activated platelet', w * 0.52, h * 0.22);
  ctx.fillText('Pseudopods', w * 0.52, h * 0.27);
  ctx.fillText('Dense granules', w * 0.04, h * 0.55);
  ctx.fillText('Alpha granules', w * 0.04, h * 0.62);
  ctx.fillText('Marginal band', w * 0.04, h * 0.48);
  ctx.fillText('Fibrin mesh', w * 0.62, h * 0.88);

  // Size comparison annotation
  ctx.fillStyle = color.dark;
  ctx.font = `${w * 0.03}px sans-serif`;
  ctx.fillText('2-4 µm (no nucleus)', w * 0.04, h * 0.42);
}

static drawMitochondria(ctx, color, w, h) {
  // Detailed mitochondrion — outer/inner membrane, cristae, matrix

  // Outer membrane
  const outerGrad = ctx.createRadialGradient(w * 0.5, h * 0.5, 0, w * 0.5, h * 0.5, w * 0.42);
  outerGrad.addColorStop(0, '#fff8e0');
  outerGrad.addColorStop(0.8, '#ffe8a0');
  outerGrad.addColorStop(1, '#c8a840');
  ctx.fillStyle = outerGrad;
  ctx.strokeStyle = color.dark;
  ctx.lineWidth = 3;
  ctx.beginPath();
  ctx.ellipse(w * 0.5, h * 0.5, w * 0.42, h * 0.32, 0, 0, Math.PI * 2);
  ctx.fill(); ctx.stroke();

  // Intermembrane space
  ctx.fillStyle = '#fff0c8';
  ctx.beginPath();
  ctx.ellipse(w * 0.5, h * 0.5, w * 0.38, h * 0.28, 0, 0, Math.PI * 2);
  ctx.fill();

  // Inner membrane (matrix interior)
  ctx.fillStyle = '#ffcc66';
  ctx.strokeStyle = color.dark;
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.ellipse(w * 0.5, h * 0.5, w * 0.34, h * 0.24, 0, 0, Math.PI * 2);
  ctx.fill(); ctx.stroke();

  // Cristae (inner membrane folds projecting into matrix)
  ctx.fillStyle = '#e8aa44';
  ctx.strokeStyle = color.dark;
  ctx.lineWidth = 1.5;
  // Tubular cristae
  const cristaeDefs = [
    { x: 0.25, y: 0.5, len: 0.15, angle: 0 },
    { x: 0.36, y: 0.34, len: 0.14, angle: 1.1 },
    { x: 0.36, y: 0.66, len: 0.14, angle: -1.1 },
    { x: 0.64, y: 0.36, len: 0.13, angle: -0.9 },
    { x: 0.64, y: 0.64, len: 0.13, angle: 0.9 },
    { x: 0.72, y: 0.5, len: 0.12, angle: 0.1 },
  ];
  cristaeDefs.forEach(({ x, y, len, angle }) => {
    const ex = x + Math.cos(angle) * len;
    const ey = y + Math.sin(angle) * len * 1.5;
    ctx.fillStyle = '#e8aa44';
    ctx.strokeStyle = color.dark;
    ctx.lineWidth = 1.5;
    ctx.beginPath();
    ctx.moveTo(w * x, h * y - h * 0.025);
    ctx.lineTo(w * ex, h * ey - h * 0.025);
    ctx.lineTo(w * ex, h * ey + h * 0.025);
    ctx.lineTo(w * x, h * y + h * 0.025);
    ctx.closePath();
    ctx.fill(); ctx.stroke();
  });

  // Matrix (dark interior between cristae)
  ctx.fillStyle = '#cc8833';
  ctx.beginPath();
  ctx.ellipse(w * 0.5, h * 0.5, w * 0.12, h * 0.1, 0, 0, Math.PI * 2);
  ctx.fill();

  // Mitochondrial DNA (circular)
  ctx.strokeStyle = '#cc4444';
  ctx.lineWidth = 1.5;
  ctx.beginPath();
  ctx.arc(w * 0.5, h * 0.5, w * 0.05, 0, Math.PI * 2);
  ctx.stroke();

  // Ribosomes (mitoribosomes, tiny dots)
  ctx.fillStyle = '#884422';
  [[0.44, 0.46], [0.55, 0.48], [0.48, 0.55], [0.52, 0.43]].forEach(([rx, ry]) => {
    ctx.beginPath();
    ctx.arc(w * rx, h * ry, w * 0.008, 0, Math.PI * 2);
    ctx.fill();
  });

  // ATP synthase complexes (on inner membrane edge)
  ctx.fillStyle = '#4488cc';
  for (let a = 0; a < Math.PI * 2; a += Math.PI / 5) {
    ctx.beginPath();
    ctx.arc(w * 0.5 + Math.cos(a) * w * 0.34, h * 0.5 + Math.sin(a) * h * 0.24,
      w * 0.01, 0, Math.PI * 2);
    ctx.fill();
  }

  ctx.fillStyle = color.dark;
  ctx.font = `${w * 0.033}px sans-serif`;
  ctx.fillText('Outer membrane', w * 0.04, h * 0.2);
  ctx.fillText('Inner membrane', w * 0.04, h * 0.28);
  ctx.fillText('Cristae', w * 0.04, h * 0.45);
  ctx.fillText('Matrix', w * 0.52, h * 0.5);
  ctx.fillText('mtDNA', w * 0.54, h * 0.56);
  ctx.fillText('ATP synthase', w * 0.68, h * 0.2);
  ctx.fillText('Intermembrane', w * 0.62, h * 0.8);
  ctx.fillText('space', w * 0.66, h * 0.85);
}

static drawNuclearEnvelope(ctx, color, w, h) {
  // Detailed nuclear envelope cross-section

  // Nuclear interior / chromatin
  ctx.fillStyle = '#d0e8ff';
  ctx.strokeStyle = color.dark;
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.ellipse(w * 0.5, h * 0.5, w * 0.35, h * 0.38, 0, 0, Math.PI * 2);
  ctx.fill(); ctx.stroke();

  // Heterochromatin (condensed, darker near periphery)
  ctx.fillStyle = '#8899cc';
  ctx.globalAlpha = 0.4;
  ctx.beginPath();
  ctx.ellipse(w * 0.5, h * 0.5, w * 0.32, h * 0.35, 0, 0, Math.PI * 2);
  ctx.fill();
  ctx.globalAlpha = 1;

  // Nucleolus
  ctx.fillStyle = '#6688bb';
  ctx.beginPath();
  ctx.ellipse(w * 0.48, h * 0.46, w * 0.1, h * 0.1, 0, 0, Math.PI * 2);
  ctx.fill();
  ctx.strokeStyle = color.dark;
  ctx.lineWidth = 1.5;
  ctx.stroke();

  // Inner nuclear membrane
  ctx.strokeStyle = '#4466aa';
  ctx.lineWidth = 4;
  ctx.beginPath();
  ctx.ellipse(w * 0.5, h * 0.5, w * 0.35, h * 0.38, 0, 0, Math.PI * 2);
  ctx.stroke();

  // Outer nuclear membrane
  ctx.strokeStyle = '#6688cc';
  ctx.lineWidth = 4;
  ctx.beginPath();
  ctx.ellipse(w * 0.5, h * 0.5, w * 0.41, h * 0.44, 0, 0, Math.PI * 2);
  ctx.stroke();
  ctx.lineWidth = 1;
  ctx.strokeStyle = color.dark;
  ctx.stroke();

  // Perinuclear space (between the two membranes)
  ctx.fillStyle = '#eeeeff';
  ctx.globalAlpha = 0.4;
  ctx.beginPath();
  ctx.ellipse(w * 0.5, h * 0.5, w * 0.41, h * 0.44, 0, 0, Math.PI * 2);
  ctx.fill();
  ctx.globalAlpha = 1;

  // Nuclear pore complexes (8-fold symmetry)
  const porePositions = 8;
  for (let i = 0; i < porePositions; i++) {
    const a = (i / porePositions) * Math.PI * 2;
    const px = w * 0.5 + Math.cos(a) * w * 0.38;
    const py = h * 0.5 + Math.sin(a) * h * 0.41;

    // Pore channel
    ctx.fillStyle = '#ffddaa';
    ctx.strokeStyle = color.dark;
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.ellipse(px, py, w * 0.025, h * 0.025, a, 0, Math.PI * 2);
    ctx.fill(); ctx.stroke();

    // Cytoplasmic filaments
    ctx.strokeStyle = '#cc8844';
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(px + Math.cos(a) * w * 0.025, py + Math.sin(a) * h * 0.025);
    ctx.lineTo(px + Math.cos(a) * w * 0.05, py + Math.sin(a) * h * 0.05);
    ctx.stroke();
  }

  // ER continuity with outer membrane
  ctx.strokeStyle = '#6688cc';
  ctx.lineWidth = 3;
  ctx.beginPath();
  ctx.moveTo(w * 0.5 + w * 0.41, h * 0.5);
  ctx.bezierCurveTo(w * 0.96, h * 0.5, w * 0.96, h * 0.7, w * 0.88, h * 0.8);
  ctx.stroke();
  ctx.strokeStyle = color.dark;
  ctx.lineWidth = 1;
  ctx.stroke();

  // Lamins (nuclear lamina, just inside inner membrane)
  ctx.strokeStyle = '#3344aa';
  ctx.lineWidth = 2;
  ctx.setLineDash([4, 3]);
  ctx.beginPath();
  ctx.ellipse(w * 0.5, h * 0.5, w * 0.33, h * 0.36, 0, 0, Math.PI * 2);
  ctx.stroke();
  ctx.setLineDash([]);

  ctx.fillStyle = color.dark;
  ctx.font = `${w * 0.03}px sans-serif`;
  ctx.fillText('Outer membrane', w * 0.6, h * 0.1);
  ctx.fillText('Inner membrane', w * 0.6, h * 0.16);
  ctx.fillText('Perinuclear space', w * 0.6, h * 0.22);
  ctx.fillText('Nuclear pore', w * 0.6, h * 0.28);
  ctx.fillText('Lamins', w * 0.06, h * 0.52);
  ctx.fillText('Nucleolus', w * 0.36, h * 0.4);
  ctx.fillText('Chromatin', w * 0.52, h * 0.62);
  ctx.fillText('ER continuity', w * 0.78, h * 0.76);
}

// ============================================================
// DIGESTIVE — Missing Drawing Methods
// ============================================================

static drawTeeth(ctx, color, w, h) {
  ctx.fillStyle = color.light;
  ctx.strokeStyle = color.dark;
  ctx.lineWidth = 1.5;

  // Upper jaw arc
  const teeth = [
    // [x, y, width, height, label]
    // Upper teeth (incisors, canines, premolars, molars) — left to right
    [0.12, 0.2, 0.07, 0.12], [0.2, 0.18, 0.07, 0.14],
    [0.28, 0.15, 0.065, 0.16], [0.35, 0.14, 0.06, 0.14],
    [0.42, 0.14, 0.06, 0.14], [0.49, 0.14, 0.06, 0.14],
    [0.56, 0.15, 0.065, 0.16], [0.63, 0.18, 0.07, 0.14],
    [0.71, 0.2, 0.07, 0.12],
  ];

  // Upper gum
  ctx.fillStyle = '#e88080';
  ctx.beginPath();
  ctx.ellipse(w * 0.5, h * 0.22, w * 0.42, h * 0.1, 0, Math.PI, 0);
  ctx.fill();

  teeth.forEach(([x, y, tw, th]) => {
    ctx.fillStyle = color.light;
    ctx.beginPath();
    ctx.roundRect(w * x, h * y, w * tw, h * th, w * 0.01);
    ctx.fill();
    ctx.strokeStyle = color.dark;
    ctx.lineWidth = 1;
    ctx.stroke();
  });

  // Lower gum
  ctx.fillStyle = '#e88080';
  ctx.beginPath();
  ctx.ellipse(w * 0.5, h * 0.78, w * 0.4, h * 0.09, 0, 0, Math.PI);
  ctx.fill();

  // Lower teeth
  teeth.forEach(([x, y, tw, th]) => {
    ctx.fillStyle = color.light;
    const ly = 0.88 - y - th;
    ctx.beginPath();
    ctx.roundRect(w * x, h * ly, w * tw, h * th, w * 0.01);
    ctx.fill();
    ctx.strokeStyle = color.dark;
    ctx.lineWidth = 1;
    ctx.stroke();
  });

  // Labels
  ctx.fillStyle = color.dark;
  ctx.font = `${w * 0.032}px sans-serif`;
  ctx.fillText('Incisors', w * 0.35, h * 0.1);
  ctx.fillText('Canine', w * 0.07, h * 0.15);
  ctx.fillText('Molars', w * 0.74, h * 0.15);
}

static drawTongue(ctx, color, w, h) {
  const gradient = ctx.createRadialGradient(w * 0.5, h * 0.55, 0, w * 0.5, h * 0.55, w * 0.35);
  gradient.addColorStop(0, color.light);
  gradient.addColorStop(0.6, color.base);
  gradient.addColorStop(1, color.dark);
  ctx.fillStyle = gradient;

  // Tongue body
  ctx.beginPath();
  ctx.moveTo(w * 0.28, h * 0.75);
  ctx.bezierCurveTo(w * 0.22, h * 0.65, w * 0.2, h * 0.45, w * 0.28, h * 0.32);
  ctx.bezierCurveTo(w * 0.35, h * 0.22, w * 0.65, h * 0.22, w * 0.72, h * 0.32);
  ctx.bezierCurveTo(w * 0.8, h * 0.45, w * 0.78, h * 0.65, w * 0.72, h * 0.75);
  ctx.bezierCurveTo(w * 0.65, h * 0.82, w * 0.35, h * 0.82, w * 0.28, h * 0.75);
  ctx.fill();

  // Median sulcus
  ctx.strokeStyle = color.dark;
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.moveTo(w * 0.5, h * 0.28);
  ctx.lineTo(w * 0.5, h * 0.7);
  ctx.stroke();

  // Papillae (taste buds — circumvallate)
  ctx.fillStyle = color.dark;
  const papillae = [
    [0.38, 0.52], [0.44, 0.5], [0.5, 0.49], [0.56, 0.5], [0.62, 0.52],
  ];
  papillae.forEach(([px, py]) => {
    ctx.beginPath();
    ctx.arc(w * px, h * py, w * 0.015, 0, Math.PI * 2);
    ctx.fill();
  });

  // Filiform papillae (small dots across surface)
  ctx.fillStyle = color.dark;
  for (let row = 0; row < 4; row++) {
    for (let col = 0; col < 6; col++) {
      const px = 0.3 + col * 0.07;
      const py = 0.3 + row * 0.055;
      ctx.beginPath();
      ctx.arc(w * px, h * py, w * 0.005, 0, Math.PI * 2);
      ctx.fill();
    }
  }

  // Epiglottis hint
  ctx.strokeStyle = color.dark;
  ctx.lineWidth = 1.5;
  ctx.beginPath();
  ctx.moveTo(w * 0.35, h * 0.8);
  ctx.bezierCurveTo(w * 0.42, h * 0.85, w * 0.58, h * 0.85, w * 0.65, h * 0.8);
  ctx.stroke();

  ctx.fillStyle = color.dark;
  ctx.font = `${w * 0.038}px sans-serif`;
  ctx.fillText('Circumvallate', w * 0.55, h * 0.57);
  ctx.fillText('papillae', w * 0.58, h * 0.62);
  ctx.fillText('Median sulcus', w * 0.52, h * 0.35);
}

static drawSalivaryGlands(ctx, color, w, h) {
  ctx.strokeStyle = color.dark;
  ctx.lineWidth = 1.5;

  // Parotid gland (largest, near ear)
  const pgGrad = ctx.createRadialGradient(w * 0.8, h * 0.3, 0, w * 0.8, h * 0.3, w * 0.12);
  pgGrad.addColorStop(0, color.light);
  pgGrad.addColorStop(1, color.base);
  ctx.fillStyle = pgGrad;
  ctx.beginPath();
  ctx.ellipse(w * 0.8, h * 0.3, w * 0.1, h * 0.12, -0.3, 0, Math.PI * 2);
  ctx.fill(); ctx.stroke();

  // Parotid duct (Stensen's duct)
  ctx.strokeStyle = color.base;
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.moveTo(w * 0.7, h * 0.3);
  ctx.bezierCurveTo(w * 0.6, h * 0.32, w * 0.5, h * 0.38, w * 0.48, h * 0.45);
  ctx.stroke();

  // Submandibular gland
  const smGrad = ctx.createRadialGradient(w * 0.35, h * 0.6, 0, w * 0.35, h * 0.6, w * 0.09);
  smGrad.addColorStop(0, color.light);
  smGrad.addColorStop(1, color.base);
  ctx.fillStyle = smGrad;
  ctx.strokeStyle = color.dark;
  ctx.lineWidth = 1.5;
  ctx.beginPath();
  ctx.ellipse(w * 0.35, h * 0.6, w * 0.09, h * 0.07, 0.2, 0, Math.PI * 2);
  ctx.fill(); ctx.stroke();

  // Submandibular duct (Wharton's duct)
  ctx.strokeStyle = color.base;
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.moveTo(w * 0.38, h * 0.55);
  ctx.bezierCurveTo(w * 0.44, h * 0.52, w * 0.48, h * 0.5, w * 0.5, h * 0.52);
  ctx.stroke();

  // Sublingual gland (smallest, under tongue)
  const slGrad = ctx.createRadialGradient(w * 0.5, h * 0.68, 0, w * 0.5, h * 0.68, w * 0.06);
  slGrad.addColorStop(0, color.light);
  slGrad.addColorStop(1, color.base);
  ctx.fillStyle = slGrad;
  ctx.strokeStyle = color.dark;
  ctx.lineWidth = 1.5;
  ctx.beginPath();
  ctx.ellipse(w * 0.5, h * 0.68, w * 0.07, h * 0.05, 0, 0, Math.PI * 2);
  ctx.fill(); ctx.stroke();

  // Jaw outline for context
  ctx.strokeStyle = color.dark;
  ctx.lineWidth = 1;
  ctx.setLineDash([4, 3]);
  ctx.beginPath();
  ctx.moveTo(w * 0.25, h * 0.3);
  ctx.bezierCurveTo(w * 0.2, h * 0.5, w * 0.25, h * 0.75, w * 0.5, h * 0.8);
  ctx.bezierCurveTo(w * 0.75, h * 0.75, w * 0.8, h * 0.5, w * 0.78, h * 0.3);
  ctx.stroke();
  ctx.setLineDash([]);

  ctx.fillStyle = color.dark;
  ctx.font = `${w * 0.035}px sans-serif`;
  ctx.fillText('Parotid', w * 0.82, h * 0.26);
  ctx.fillText('Submandibular', w * 0.16, h * 0.6);
  ctx.fillText('Sublingual', w * 0.52, h * 0.74);
}

static drawDuodenum(ctx, color, w, h) {
  const gradient = ctx.createLinearGradient(w * 0.3, h * 0.2, w * 0.7, h * 0.8);
  gradient.addColorStop(0, color.light);
  gradient.addColorStop(0.5, color.base);
  gradient.addColorStop(1, color.dark);
  ctx.fillStyle = gradient;
  ctx.strokeStyle = color.dark;
  ctx.lineWidth = 2;

  // C-shaped duodenum around pancreatic head
  ctx.beginPath();
  ctx.moveTo(w * 0.45, h * 0.22);
  ctx.bezierCurveTo(w * 0.6, h * 0.22, w * 0.72, h * 0.28, w * 0.74, h * 0.4);
  ctx.bezierCurveTo(w * 0.76, h * 0.5, w * 0.74, h * 0.62, w * 0.68, h * 0.68);
  ctx.bezierCurveTo(w * 0.62, h * 0.74, w * 0.52, h * 0.76, w * 0.45, h * 0.75);
  ctx.lineTo(w * 0.45, h * 0.65);
  ctx.bezierCurveTo(w * 0.52, h * 0.65, w * 0.6, h * 0.63, w * 0.63, h * 0.58);
  ctx.bezierCurveTo(w * 0.68, h * 0.52, w * 0.66, h * 0.42, w * 0.64, h * 0.38);
  ctx.bezierCurveTo(w * 0.62, h * 0.3, w * 0.54, h * 0.3, w * 0.45, h * 0.32);
  ctx.closePath();
  ctx.fill();
  ctx.stroke();

  // Ampulla of Vater
  ctx.fillStyle = color.dark;
  ctx.beginPath();
  ctx.arc(w * 0.64, h * 0.52, w * 0.02, 0, Math.PI * 2);
  ctx.fill();

  // Mucosal folds (circular folds inside lumen)
  ctx.strokeStyle = color.dark;
  ctx.lineWidth = 1;
  [[0.53, 0.28, 0.53, 0.34], [0.63, 0.36, 0.67, 0.42], [0.7, 0.5, 0.65, 0.56], [0.61, 0.62, 0.55, 0.66]].forEach(([x1, y1, x2, y2]) => {
    ctx.beginPath();
    ctx.moveTo(w * x1, h * y1);
    ctx.lineTo(w * x2, h * y2);
    ctx.stroke();
  });

  ctx.fillStyle = color.dark;
  ctx.font = `${w * 0.035}px sans-serif`;
  ctx.fillText('Duodenum', w * 0.3, h * 0.5);
  ctx.fillText('Ampulla', w * 0.66, h * 0.55);
  ctx.fillText('of Vater', w * 0.66, h * 0.6);
}

static drawJejunum(ctx, color, w, h) {
  ctx.strokeStyle = color.dark;
  ctx.lineWidth = 2.5;
  ctx.fillStyle = color.base;

  // Tightly coiled jejunum (upper-left abdomen)
  const loops = [
    [[0.2, 0.15], [0.7, 0.15], [0.8, 0.3], [0.7, 0.42]],
    [[0.7, 0.42], [0.55, 0.5], [0.3, 0.5], [0.2, 0.4]],
    [[0.2, 0.4], [0.15, 0.55], [0.2, 0.65], [0.35, 0.68]],
    [[0.35, 0.68], [0.6, 0.72], [0.78, 0.65], [0.75, 0.52]],
  ];

  loops.forEach(pts => {
    ctx.beginPath();
    ctx.moveTo(w * pts[0][0], h * pts[0][1]);
    ctx.bezierCurveTo(
      w * pts[1][0], h * pts[1][1],
      w * pts[2][0], h * pts[2][1],
      w * pts[3][0], h * pts[3][1]
    );
    ctx.lineWidth = 12;
    ctx.strokeStyle = color.light;
    ctx.stroke();
    ctx.lineWidth = 2;
    ctx.strokeStyle = color.dark;
    ctx.stroke();
  });

  // Circular folds (plicae circulares) — characteristic of jejunum
  ctx.strokeStyle = color.base;
  ctx.lineWidth = 1;
  [[0.3, 0.18], [0.5, 0.18], [0.65, 0.28], [0.65, 0.38], [0.5, 0.47], [0.3, 0.46]].forEach(([px, py]) => {
    ctx.beginPath();
    ctx.arc(w * px, h * py, w * 0.03, 0, Math.PI * 2);
    ctx.stroke();
  });

  // Vascular arcades (mesenteric vessels)
  ctx.strokeStyle = '#cc3333';
  ctx.lineWidth = 1;
  ctx.setLineDash([3, 3]);
  ctx.beginPath();
  ctx.moveTo(w * 0.5, h * 0.9);
  ctx.bezierCurveTo(w * 0.4, h * 0.75, w * 0.3, h * 0.6, w * 0.25, h * 0.45);
  ctx.stroke();
  ctx.setLineDash([]);

  ctx.fillStyle = color.dark;
  ctx.font = `${w * 0.04}px sans-serif`;
  ctx.fillText('Jejunum', w * 0.35, h * 0.85);
  ctx.fillText('(proximal small intestine)', w * 0.15, h * 0.9);
}

static drawIleum(ctx, color, w, h) {
  ctx.strokeStyle = color.dark;
  ctx.lineWidth = 2.5;

  // Loosely coiled ileum (lower-right abdomen, fewer circular folds than jejunum)
  const loops = [
    [[0.15, 0.15], [0.65, 0.12], [0.8, 0.28], [0.72, 0.44]],
    [[0.72, 0.44], [0.58, 0.55], [0.3, 0.55], [0.18, 0.45]],
    [[0.18, 0.45], [0.12, 0.6], [0.18, 0.72], [0.38, 0.74]],
    [[0.38, 0.74], [0.62, 0.76], [0.8, 0.7], [0.82, 0.55]],
    [[0.82, 0.55], [0.84, 0.45], [0.78, 0.35], [0.72, 0.44]],
  ];

  loops.forEach(pts => {
    ctx.beginPath();
    ctx.moveTo(w * pts[0][0], h * pts[0][1]);
    ctx.bezierCurveTo(
      w * pts[1][0], h * pts[1][1],
      w * pts[2][0], h * pts[2][1],
      w * pts[3][0], h * pts[3][1]
    );
    ctx.lineWidth = 10;
    ctx.strokeStyle = color.light;
    ctx.stroke();
    ctx.lineWidth = 2;
    ctx.strokeStyle = color.dark;
    ctx.stroke();
  });

  // Peyer's patches (lymphoid tissue — characteristic of ileum)
  ctx.fillStyle = color.dark;
  [[0.35, 0.2], [0.55, 0.15], [0.6, 0.42], [0.35, 0.6]].forEach(([px, py]) => {
    ctx.beginPath();
    ctx.ellipse(w * px, h * py, w * 0.025, h * 0.015, 0.5, 0, Math.PI * 2);
    ctx.fill();
  });

  // Ileocecal valve at terminal end
  ctx.fillStyle = color.base;
  ctx.strokeStyle = color.dark;
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.ellipse(w * 0.82, h * 0.55, w * 0.03, h * 0.04, 0, 0, Math.PI * 2);
  ctx.fill(); ctx.stroke();

  ctx.fillStyle = color.dark;
  ctx.font = `${w * 0.038}px sans-serif`;
  ctx.fillText('Ileum', w * 0.38, h * 0.88);
  ctx.fillText("Peyer's patches", w * 0.42, h * 0.38);
  ctx.fillText('Ileocecal valve', w * 0.68, h * 0.62);
}

static drawCecum(ctx, color, w, h) {
  const gradient = ctx.createRadialGradient(w * 0.5, h * 0.55, 0, w * 0.5, h * 0.55, w * 0.3);
  gradient.addColorStop(0, color.light);
  gradient.addColorStop(1, color.base);
  ctx.fillStyle = gradient;
  ctx.strokeStyle = color.dark;
  ctx.lineWidth = 2;

  // Cecum body
  ctx.beginPath();
  ctx.moveTo(w * 0.3, h * 0.32);
  ctx.bezierCurveTo(w * 0.22, h * 0.35, w * 0.2, h * 0.5, w * 0.25, h * 0.65);
  ctx.bezierCurveTo(w * 0.3, h * 0.78, w * 0.45, h * 0.82, w * 0.6, h * 0.78);
  ctx.bezierCurveTo(w * 0.74, h * 0.72, w * 0.78, h * 0.58, w * 0.72, h * 0.45);
  ctx.bezierCurveTo(w * 0.68, h * 0.35, w * 0.58, h * 0.3, w * 0.5, h * 0.3);
  ctx.lineTo(w * 0.3, h * 0.32);
  ctx.fill();
  ctx.stroke();

  // Ileocecal valve
  ctx.fillStyle = color.dark;
  ctx.beginPath();
  ctx.ellipse(w * 0.5, h * 0.32, w * 0.05, h * 0.04, 0, 0, Math.PI * 2);
  ctx.fill();

  // Ileum entering
  ctx.strokeStyle = color.base;
  ctx.lineWidth = 8;
  ctx.beginPath();
  ctx.moveTo(w * 0.5, h * 0.15);
  ctx.lineTo(w * 0.5, h * 0.3);
  ctx.stroke();
  ctx.strokeStyle = color.dark;
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.moveTo(w * 0.5, h * 0.15);
  ctx.lineTo(w * 0.5, h * 0.3);
  ctx.stroke();

  // Ascending colon
  ctx.strokeStyle = color.base;
  ctx.lineWidth = 12;
  ctx.beginPath();
  ctx.moveTo(w * 0.72, h * 0.45);
  ctx.lineTo(w * 0.72, h * 0.18);
  ctx.stroke();
  ctx.strokeStyle = color.dark;
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.moveTo(w * 0.72, h * 0.45);
  ctx.lineTo(w * 0.72, h * 0.18);
  ctx.stroke();

  ctx.fillStyle = color.dark;
  ctx.font = `${w * 0.04}px sans-serif`;
  ctx.fillText('Cecum', w * 0.35, h * 0.6);
  ctx.fillText('Ileocecal valve', w * 0.22, h * 0.28);
  ctx.fillText('Ascending colon', w * 0.74, h * 0.3);
}

static drawAppendix(ctx, color, w, h) {
  const gradient = ctx.createLinearGradient(w * 0.4, h * 0.2, w * 0.6, h * 0.85);
  gradient.addColorStop(0, color.light);
  gradient.addColorStop(1, color.dark);
  ctx.fillStyle = gradient;
  ctx.strokeStyle = color.dark;
  ctx.lineWidth = 2;

  // Cecum base
  ctx.fillStyle = color.light;
  ctx.beginPath();
  ctx.ellipse(w * 0.5, h * 0.28, w * 0.18, h * 0.1, 0, 0, Math.PI * 2);
  ctx.fill(); ctx.stroke();

  // Appendix body — finger-like projection
  ctx.fillStyle = gradient;
  ctx.beginPath();
  ctx.moveTo(w * 0.44, h * 0.34);
  ctx.bezierCurveTo(w * 0.4, h * 0.42, w * 0.36, h * 0.55, w * 0.38, h * 0.68);
  ctx.bezierCurveTo(w * 0.4, h * 0.78, w * 0.46, h * 0.82, w * 0.5, h * 0.82);
  ctx.bezierCurveTo(w * 0.54, h * 0.82, w * 0.56, h * 0.78, w * 0.55, h * 0.68);
  ctx.bezierCurveTo(w * 0.55, h * 0.55, w * 0.54, h * 0.42, w * 0.56, h * 0.34);
  ctx.closePath();
  ctx.fill();
  ctx.stroke();

  // Lymphoid tissue patches
  ctx.fillStyle = color.dark;
  [[0.49, 0.42], [0.47, 0.52], [0.46, 0.62], [0.47, 0.72]].forEach(([px, py]) => {
    ctx.beginPath();
    ctx.arc(w * px, h * py, w * 0.018, 0, Math.PI * 2);
    ctx.fill();
  });

  // Mesoappendix
  ctx.strokeStyle = color.dark;
  ctx.lineWidth = 1;
  ctx.setLineDash([3, 3]);
  ctx.beginPath();
  ctx.moveTo(w * 0.56, h * 0.35);
  ctx.bezierCurveTo(w * 0.65, h * 0.45, w * 0.68, h * 0.65, w * 0.58, h * 0.78);
  ctx.stroke();
  ctx.setLineDash([]);

  ctx.fillStyle = color.dark;
  ctx.font = `${w * 0.038}px sans-serif`;
  ctx.fillText('Cecum', w * 0.35, h * 0.18);
  ctx.fillText('Vermiform', w * 0.6, h * 0.5);
  ctx.fillText('appendix', w * 0.6, h * 0.55);
  ctx.fillText('Mesoappendix', w * 0.66, h * 0.4);
}

static drawRectum(ctx, color, w, h) {
  const gradient = ctx.createLinearGradient(w * 0.35, h * 0.1, w * 0.65, h * 0.9);
  gradient.addColorStop(0, color.light);
  gradient.addColorStop(1, color.dark);
  ctx.fillStyle = gradient;
  ctx.strokeStyle = color.dark;
  ctx.lineWidth = 2;

  // Rectum body with typical curves
  ctx.beginPath();
  ctx.moveTo(w * 0.38, h * 0.1);
  ctx.bezierCurveTo(w * 0.36, h * 0.2, w * 0.3, h * 0.35, w * 0.35, h * 0.5);
  ctx.bezierCurveTo(w * 0.38, h * 0.6, w * 0.45, h * 0.65, w * 0.48, h * 0.72);
  ctx.bezierCurveTo(w * 0.5, h * 0.78, w * 0.5, h * 0.85, w * 0.48, h * 0.9);
  ctx.lineTo(w * 0.52, h * 0.9);
  ctx.bezierCurveTo(w * 0.5, h * 0.85, w * 0.52, h * 0.78, w * 0.55, h * 0.72);
  ctx.bezierCurveTo(w * 0.58, h * 0.65, w * 0.65, h * 0.6, w * 0.66, h * 0.5);
  ctx.bezierCurveTo(w * 0.7, h * 0.35, w * 0.64, h * 0.2, w * 0.62, h * 0.1);
  ctx.closePath();
  ctx.fill();
  ctx.stroke();

  // Houston's valves (transverse folds)
  ctx.strokeStyle = color.dark;
  ctx.lineWidth = 1.5;
  [[0.38, 0.3, 0.57, 0.3], [0.37, 0.45, 0.56, 0.42], [0.39, 0.58, 0.58, 0.58]].forEach(([x1, y1, x2, y2]) => {
    ctx.beginPath();
    ctx.moveTo(w * x1, h * y1);
    ctx.bezierCurveTo(w * ((x1 + x2) / 2), h * (y1 - 0.04), w * ((x1 + x2) / 2), h * (y2 - 0.04), w * x2, h * y2);
    ctx.stroke();
  });

  // Anorectal junction
  ctx.fillStyle = color.dark;
  ctx.beginPath();
  ctx.rect(w * 0.44, h * 0.82, w * 0.12, h * 0.02);
  ctx.fill();

  ctx.fillStyle = color.dark;
  ctx.font = `${w * 0.035}px sans-serif`;
  ctx.fillText('Rectum', w * 0.18, h * 0.4);
  ctx.fillText("Houston's", w * 0.68, h * 0.3);
  ctx.fillText('valves', w * 0.68, h * 0.35);
  ctx.fillText('Anorectal', w * 0.55, h * 0.88);
  ctx.fillText('junction', w * 0.55, h * 0.93);
}

static drawAnus(ctx, color, w, h) {
  ctx.strokeStyle = color.dark;
  ctx.lineWidth = 2;

  // Anal canal cross section
  ctx.fillStyle = color.light;
  ctx.beginPath();
  ctx.ellipse(w * 0.5, h * 0.3, w * 0.12, h * 0.08, 0, 0, Math.PI * 2);
  ctx.fill(); ctx.stroke();

  // Internal anal sphincter
  ctx.fillStyle = color.base;
  ctx.strokeStyle = color.dark;
  ctx.lineWidth = 6;
  ctx.beginPath();
  ctx.ellipse(w * 0.5, h * 0.52, w * 0.15, h * 0.1, 0, 0, Math.PI * 2);
  ctx.stroke();

  // External anal sphincter
  ctx.lineWidth = 8;
  ctx.strokeStyle = color.dark;
  ctx.beginPath();
  ctx.ellipse(w * 0.5, h * 0.55, w * 0.2, h * 0.14, 0, 0, Math.PI * 2);
  ctx.stroke();

  // Anal columns
  ctx.strokeStyle = color.base;
  ctx.lineWidth = 1;
  for (let i = 0; i < 8; i++) {
    const angle = (i / 8) * Math.PI * 2;
    ctx.beginPath();
    ctx.moveTo(w * 0.5 + Math.cos(angle) * w * 0.06, h * 0.3 + Math.sin(angle) * h * 0.04);
    ctx.lineTo(w * 0.5 + Math.cos(angle) * w * 0.12, h * 0.52 + Math.sin(angle) * h * 0.08);
    ctx.stroke();
  }

  // Puborectalis muscle
  ctx.strokeStyle = color.dark;
  ctx.lineWidth = 3;
  ctx.setLineDash([5, 3]);
  ctx.beginPath();
  ctx.ellipse(w * 0.5, h * 0.45, w * 0.25, h * 0.18, 0, 0, Math.PI * 2);
  ctx.stroke();
  ctx.setLineDash([]);

  ctx.fillStyle = color.dark;
  ctx.font = `${w * 0.035}px sans-serif`;
  ctx.fillText('Anal canal', w * 0.65, h * 0.28);
  ctx.fillText('Internal sphincter', w * 0.66, h * 0.5);
  ctx.fillText('External sphincter', w * 0.66, h * 0.58);
  ctx.fillText('Anal columns', w * 0.15, h * 0.42);
}

static drawSpleen(ctx, color, w, h) {
  const gradient = ctx.createRadialGradient(w * 0.5, h * 0.45, 0, w * 0.5, h * 0.45, w * 0.35);
  gradient.addColorStop(0, color.light);
  gradient.addColorStop(0.5, color.base);
  gradient.addColorStop(1, color.dark);
  ctx.fillStyle = gradient;
  ctx.strokeStyle = color.dark;
  ctx.lineWidth = 2;

  // Spleen — bean shaped, convex lateral, concave medial
  ctx.beginPath();
  ctx.moveTo(w * 0.5, h * 0.18);
  ctx.bezierCurveTo(w * 0.68, h * 0.18, w * 0.8, h * 0.3, w * 0.8, h * 0.48);
  ctx.bezierCurveTo(w * 0.8, h * 0.66, w * 0.68, h * 0.78, w * 0.5, h * 0.78);
  ctx.bezierCurveTo(w * 0.38, h * 0.78, w * 0.28, h * 0.72, w * 0.24, h * 0.6);
  ctx.bezierCurveTo(w * 0.2, h * 0.5, w * 0.24, h * 0.38, w * 0.3, h * 0.32);
  ctx.bezierCurveTo(w * 0.36, h * 0.25, w * 0.42, h * 0.22, w * 0.5, h * 0.18);
  ctx.fill();
  ctx.stroke();

  // Hilum (medial notch where vessels enter)
  ctx.fillStyle = color.dark;
  ctx.beginPath();
  ctx.moveTo(w * 0.25, h * 0.42);
  ctx.bezierCurveTo(w * 0.23, h * 0.46, w * 0.23, h * 0.52, w * 0.25, h * 0.56);
  ctx.bezierCurveTo(w * 0.28, h * 0.52, w * 0.28, h * 0.46, w * 0.25, h * 0.42);
  ctx.fill();

  // Splenic vessels at hilum
  ctx.strokeStyle = '#cc3333';
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.moveTo(w * 0.25, h * 0.49);
  ctx.lineTo(w * 0.1, h * 0.49);
  ctx.stroke();
  ctx.strokeStyle = '#3355bb';
  ctx.beginPath();
  ctx.moveTo(w * 0.25, h * 0.53);
  ctx.lineTo(w * 0.1, h * 0.53);
  ctx.stroke();

  // Notches on superior border
  ctx.fillStyle = color.dark;
  [[0.38, 0.19], [0.47, 0.18]].forEach(([nx, ny]) => {
    ctx.beginPath();
    ctx.arc(w * nx, h * ny, w * 0.015, 0, Math.PI * 2);
    ctx.fill();
  });

  // Internal trabecular pattern
  ctx.strokeStyle = color.dark;
  ctx.lineWidth = 0.8;
  ctx.globalAlpha = 0.3;
  [[0.45, 0.25, 0.62, 0.4], [0.4, 0.38, 0.7, 0.5], [0.38, 0.52, 0.68, 0.64], [0.42, 0.65, 0.65, 0.72]].forEach(([x1, y1, x2, y2]) => {
    ctx.beginPath();
    ctx.moveTo(w * x1, h * y1);
    ctx.bezierCurveTo(w * ((x1 + x2) / 2), h * (y1 - 0.05), w * ((x1 + x2) / 2), h * y2, w * x2, h * y2);
    ctx.stroke();
  });
  ctx.globalAlpha = 1;

  ctx.fillStyle = color.dark;
  ctx.font = `${w * 0.038}px sans-serif`;
  ctx.fillText('Spleen', w * 0.52, h * 0.48);
  ctx.fillText('Hilum', w * 0.05, h * 0.45);
  ctx.fillText('Splenic artery', w * 0.02, h * 0.48);
  ctx.fillText('Splenic vein', w * 0.02, h * 0.54);
}


// ============================================================
// URINARY — Missing Drawing Methods
// ============================================================

static drawKidney(ctx, color, w, h) {
  const gradient = ctx.createRadialGradient(w * 0.5, h * 0.5, 0, w * 0.5, h * 0.5, w * 0.35);
  gradient.addColorStop(0, color.light);
  gradient.addColorStop(0.5, color.base);
  gradient.addColorStop(1, color.dark);
  ctx.fillStyle = gradient;
  ctx.strokeStyle = color.dark;
  ctx.lineWidth = 2;

  // Kidney outer cortex — bean shaped
  ctx.beginPath();
  ctx.moveTo(w * 0.5, h * 0.12);
  ctx.bezierCurveTo(w * 0.72, h * 0.12, w * 0.82, h * 0.28, w * 0.82, h * 0.5);
  ctx.bezierCurveTo(w * 0.82, h * 0.72, w * 0.72, h * 0.88, w * 0.5, h * 0.88);
  ctx.bezierCurveTo(w * 0.32, h * 0.88, w * 0.22, h * 0.75, w * 0.2, h * 0.6);
  ctx.bezierCurveTo(w * 0.18, h * 0.45, w * 0.22, h * 0.3, w * 0.3, h * 0.22);
  ctx.bezierCurveTo(w * 0.36, h * 0.16, w * 0.42, h * 0.12, w * 0.5, h * 0.12);
  ctx.fill();
  ctx.stroke();

  // Renal cortex (outer layer)
  ctx.fillStyle = color.base;
  ctx.beginPath();
  ctx.moveTo(w * 0.5, h * 0.18);
  ctx.bezierCurveTo(w * 0.68, h * 0.18, w * 0.76, h * 0.3, w * 0.76, h * 0.5);
  ctx.bezierCurveTo(w * 0.76, h * 0.7, w * 0.68, h * 0.82, w * 0.5, h * 0.82);
  ctx.bezierCurveTo(w * 0.36, h * 0.82, w * 0.28, h * 0.72, w * 0.28, h * 0.58);
  ctx.bezierCurveTo(w * 0.28, h * 0.42, w * 0.34, h * 0.28, w * 0.42, h * 0.22);
  ctx.bezierCurveTo(w * 0.45, h * 0.2, w * 0.48, h * 0.18, w * 0.5, h * 0.18);
  ctx.fill();

  // Renal medulla (pyramids)
  ctx.fillStyle = color.dark;
  const pyramids = [
    { cx: 0.58, cy: 0.28 }, { cx: 0.68, cy: 0.4 }, { cx: 0.7, cy: 0.55 },
    { cx: 0.62, cy: 0.7 }, { cx: 0.48, cy: 0.76 }
  ];
  pyramids.forEach(({ cx, cy }) => {
    ctx.beginPath();
    ctx.ellipse(w * cx, h * cy, w * 0.07, h * 0.08, Math.atan2(cy - 0.5, cx - 0.35), 0, Math.PI * 2);
    ctx.fill();
  });

  // Renal pelvis / collecting area
  ctx.fillStyle = '#ffffcc';
  ctx.beginPath();
  ctx.ellipse(w * 0.38, h * 0.5, w * 0.1, h * 0.18, 0, 0, Math.PI * 2);
  ctx.fill();
  ctx.strokeStyle = color.dark;
  ctx.lineWidth = 1.5;
  ctx.stroke();

  // Hilum
  ctx.fillStyle = color.dark;
  ctx.beginPath();
  ctx.moveTo(w * 0.22, h * 0.42);
  ctx.bezierCurveTo(w * 0.2, h * 0.48, w * 0.2, h * 0.55, w * 0.22, h * 0.6);
  ctx.bezierCurveTo(w * 0.26, h * 0.55, w * 0.26, h * 0.48, w * 0.22, h * 0.42);
  ctx.fill();

  // Ureter leaving hilum
  ctx.strokeStyle = color.base;
  ctx.lineWidth = 4;
  ctx.beginPath();
  ctx.moveTo(w * 0.22, h * 0.5);
  ctx.lineTo(w * 0.1, h * 0.5);
  ctx.stroke();
  ctx.strokeStyle = color.dark;
  ctx.lineWidth = 1.5;
  ctx.stroke();

  ctx.fillStyle = color.dark;
  ctx.font = `${w * 0.035}px sans-serif`;
  ctx.fillText('Cortex', w * 0.62, h * 0.5);
  ctx.fillText('Medullary', w * 0.56, h * 0.62);
  ctx.fillText('pyramid', w * 0.57, h * 0.67);
  ctx.fillText('Renal pelvis', w * 0.28, h * 0.42);
  ctx.fillText('Ureter', w * 0.04, h * 0.48);
}

static drawNephron(ctx, color, w, h) {
  ctx.strokeStyle = color.dark;
  ctx.lineWidth = 2;

  // Glomerulus (tuft of capillaries)
  ctx.fillStyle = '#cc4444';
  ctx.beginPath();
  ctx.arc(w * 0.25, h * 0.18, w * 0.06, 0, Math.PI * 2);
  ctx.fill(); ctx.stroke();

  // Bowman's capsule
  ctx.fillStyle = 'rgba(200,220,255,0.3)';
  ctx.strokeStyle = color.dark;
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.arc(w * 0.25, h * 0.18, w * 0.09, 0, Math.PI * 2);
  ctx.fill(); ctx.stroke();

  // Proximal convoluted tubule
  ctx.strokeStyle = color.base;
  ctx.lineWidth = 3;
  ctx.beginPath();
  ctx.moveTo(w * 0.34, h * 0.18);
  ctx.bezierCurveTo(w * 0.45, h * 0.12, w * 0.55, h * 0.18, w * 0.55, h * 0.28);
  ctx.bezierCurveTo(w * 0.55, h * 0.35, w * 0.48, h * 0.38, w * 0.42, h * 0.4);
  ctx.stroke();

  // Loop of Henle (descending and ascending)
  ctx.beginPath();
  ctx.moveTo(w * 0.42, h * 0.4);
  ctx.bezierCurveTo(w * 0.38, h * 0.5, w * 0.35, h * 0.65, w * 0.38, h * 0.78);
  ctx.bezierCurveTo(w * 0.42, h * 0.85, w * 0.5, h * 0.87, w * 0.55, h * 0.8);
  ctx.bezierCurveTo(w * 0.58, h * 0.72, w * 0.58, h * 0.6, w * 0.55, h * 0.5);
  ctx.stroke();

  // Distal convoluted tubule
  ctx.beginPath();
  ctx.moveTo(w * 0.55, h * 0.5);
  ctx.bezierCurveTo(w * 0.62, h * 0.42, w * 0.72, h * 0.38, w * 0.72, h * 0.28);
  ctx.bezierCurveTo(w * 0.72, h * 0.2, w * 0.65, h * 0.15, w * 0.6, h * 0.18);
  ctx.stroke();

  // Collecting duct
  ctx.strokeStyle = color.dark;
  ctx.lineWidth = 4;
  ctx.beginPath();
  ctx.moveTo(w * 0.75, h * 0.22);
  ctx.lineTo(w * 0.75, h * 0.88);
  ctx.stroke();

  // Connection from DCT to collecting duct
  ctx.strokeStyle = color.base;
  ctx.lineWidth = 3;
  ctx.beginPath();
  ctx.moveTo(w * 0.6, h * 0.18);
  ctx.lineTo(w * 0.75, h * 0.22);
  ctx.stroke();

  // Peritubular capillaries
  ctx.strokeStyle = '#4488cc';
  ctx.lineWidth = 1.5;
  ctx.setLineDash([3, 2]);
  ctx.beginPath();
  ctx.moveTo(w * 0.25, h * 0.27);
  ctx.bezierCurveTo(w * 0.3, h * 0.35, w * 0.32, h * 0.5, w * 0.35, h * 0.6);
  ctx.bezierCurveTo(w * 0.38, h * 0.72, w * 0.48, h * 0.78, w * 0.55, h * 0.75);
  ctx.stroke();
  ctx.setLineDash([]);

  // Labels
  ctx.fillStyle = color.dark;
  ctx.font = `${w * 0.033}px sans-serif`;
  ctx.fillText('Glomerulus', w * 0.05, h * 0.12);
  ctx.fillText("Bowman's capsule", w * 0.02, h * 0.17);
  ctx.fillText('PCT', w * 0.5, h * 0.22);
  ctx.fillText('Loop of Henle', w * 0.14, h * 0.7);
  ctx.fillText('DCT', w * 0.62, h * 0.28);
  ctx.fillText('Collecting duct', w * 0.77, h * 0.55);
}

static drawUreter(ctx, color, w, h) {
  ctx.strokeStyle = color.dark;
  ctx.lineWidth = 2;

  // Left ureter
  ctx.fillStyle = color.base;
  ctx.beginPath();
  ctx.moveTo(w * 0.36, h * 0.1);
  ctx.bezierCurveTo(w * 0.34, h * 0.25, w * 0.32, h * 0.45, w * 0.35, h * 0.65);
  ctx.bezierCurveTo(w * 0.37, h * 0.78, w * 0.4, h * 0.88, w * 0.42, h * 0.92);
  ctx.lineTo(w * 0.46, h * 0.92);
  ctx.bezierCurveTo(w * 0.44, h * 0.88, w * 0.41, h * 0.78, w * 0.39, h * 0.65);
  ctx.bezierCurveTo(w * 0.37, h * 0.45, w * 0.38, h * 0.25, w * 0.4, h * 0.1);
  ctx.closePath();
  ctx.fill(); ctx.stroke();

  // Right ureter
  ctx.beginPath();
  ctx.moveTo(w * 0.64, h * 0.1);
  ctx.bezierCurveTo(w * 0.66, h * 0.25, w * 0.68, h * 0.45, w * 0.65, h * 0.65);
  ctx.bezierCurveTo(w * 0.63, h * 0.78, w * 0.6, h * 0.88, w * 0.58, h * 0.92);
  ctx.lineTo(w * 0.54, h * 0.92);
  ctx.bezierCurveTo(w * 0.56, h * 0.88, w * 0.59, h * 0.78, w * 0.61, h * 0.65);
  ctx.bezierCurveTo(w * 0.63, h * 0.45, w * 0.62, h * 0.25, w * 0.6, h * 0.1);
  ctx.closePath();
  ctx.fill(); ctx.stroke();

  // Peristaltic waves (cross-sectional narrowings)
  ctx.strokeStyle = color.dark;
  ctx.lineWidth = 1;
  [[0.38, 0.25], [0.37, 0.45], [0.36, 0.62]].forEach(([x, y]) => {
    ctx.beginPath();
    ctx.moveTo(w * x, h * y);
    ctx.lineTo(w * (x + 0.04), h * y);
    ctx.stroke();
  });

  // Bladder outline at bottom
  ctx.fillStyle = color.light;
  ctx.strokeStyle = color.dark;
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.ellipse(w * 0.5, h * 0.88, w * 0.1, h * 0.06, 0, 0, Math.PI * 2);
  ctx.fill(); ctx.stroke();

  ctx.fillStyle = color.dark;
  ctx.font = `${w * 0.038}px sans-serif`;
  ctx.fillText('Left ureter', w * 0.06, h * 0.3);
  ctx.fillText('Right ureter', w * 0.7, h * 0.3);
  ctx.fillText('Bladder', w * 0.44, h * 0.98);
}

static drawUrinaryBladder(ctx, color, w, h) {
  const gradient = ctx.createRadialGradient(w * 0.5, h * 0.45, 0, w * 0.5, h * 0.45, w * 0.38);
  gradient.addColorStop(0, color.light);
  gradient.addColorStop(0.7, color.base);
  gradient.addColorStop(1, color.dark);
  ctx.fillStyle = gradient;
  ctx.strokeStyle = color.dark;
  ctx.lineWidth = 2;

  // Bladder body
  ctx.beginPath();
  ctx.moveTo(w * 0.5, h * 0.12);
  ctx.bezierCurveTo(w * 0.72, h * 0.12, w * 0.85, h * 0.28, w * 0.85, h * 0.5);
  ctx.bezierCurveTo(w * 0.85, h * 0.68, w * 0.72, h * 0.82, w * 0.55, h * 0.84);
  ctx.bezierCurveTo(w * 0.52, h * 0.88, w * 0.5, h * 0.9, w * 0.5, h * 0.92);
  ctx.bezierCurveTo(w * 0.5, h * 0.9, w * 0.48, h * 0.88, w * 0.45, h * 0.84);
  ctx.bezierCurveTo(w * 0.28, h * 0.82, w * 0.15, h * 0.68, w * 0.15, h * 0.5);
  ctx.bezierCurveTo(w * 0.15, h * 0.28, w * 0.28, h * 0.12, w * 0.5, h * 0.12);
  ctx.fill();
  ctx.stroke();

  // Detrusor muscle layers
  ctx.strokeStyle = color.dark;
  ctx.lineWidth = 1;
  ctx.globalAlpha = 0.4;
  ctx.beginPath();
  ctx.ellipse(w * 0.5, h * 0.5, w * 0.3, h * 0.3, 0, 0, Math.PI * 2);
  ctx.stroke();
  ctx.globalAlpha = 1;

  // Ureteral openings (ureteral orifices)
  ctx.fillStyle = color.dark;
  [[0.38, 0.72], [0.62, 0.72]].forEach(([px, py]) => {
    ctx.beginPath();
    ctx.arc(w * px, h * py, w * 0.018, 0, Math.PI * 2);
    ctx.fill();
  });

  // Internal urethral orifice
  ctx.beginPath();
  ctx.arc(w * 0.5, h * 0.84, w * 0.018, 0, Math.PI * 2);
  ctx.fill();

  // Rugae (internal folds when empty)
  ctx.strokeStyle = color.dark;
  ctx.lineWidth = 0.8;
  ctx.globalAlpha = 0.5;
  [[0.35, 0.3, 0.5, 0.25], [0.6, 0.3, 0.52, 0.25], [0.28, 0.5, 0.35, 0.45], [0.72, 0.5, 0.65, 0.45]].forEach(([x1, y1, x2, y2]) => {
    ctx.beginPath();
    ctx.moveTo(w * x1, h * y1);
    ctx.bezierCurveTo(w * x2, h * y2, w * x2, h * y2, w * x2, h * y2);
    ctx.stroke();
  });
  ctx.globalAlpha = 1;

  // Ureteral lines coming in from top
  ctx.strokeStyle = color.base;
  ctx.lineWidth = 4;
  [[0.32, 0.1, 0.38, 0.72], [0.68, 0.1, 0.62, 0.72]].forEach(([x1, y1, x2, y2]) => {
    ctx.beginPath();
    ctx.moveTo(w * x1, h * y1);
    ctx.bezierCurveTo(w * x1, h * 0.4, w * x2, h * 0.55, w * x2, h * y2);
    ctx.stroke();
  });
  ctx.strokeStyle = color.dark;
  ctx.lineWidth = 1.5;
  [[0.32, 0.1, 0.38, 0.72], [0.68, 0.1, 0.62, 0.72]].forEach(([x1, y1, x2, y2]) => {
    ctx.beginPath();
    ctx.moveTo(w * x1, h * y1);
    ctx.bezierCurveTo(w * x1, h * 0.4, w * x2, h * 0.55, w * x2, h * y2);
    ctx.stroke();
  });

  ctx.fillStyle = color.dark;
  ctx.font = `${w * 0.035}px sans-serif`;
  ctx.fillText('Bladder', w * 0.44, h * 0.5);
  ctx.fillText('Ureteral', w * 0.12, h * 0.68);
  ctx.fillText('orifices', w * 0.12, h * 0.73);
  ctx.fillText('Urethral', w * 0.62, h * 0.86);
  ctx.fillText('orifice', w * 0.62, h * 0.9);
}

static drawUrethra(ctx, color, w, h) {
  ctx.strokeStyle = color.dark;
  ctx.lineWidth = 2;

  // Urethra tube (female — short and straight; show male for more anatomy detail)
  ctx.fillStyle = color.base;
  ctx.beginPath();
  ctx.moveTo(w * 0.44, h * 0.1);
  ctx.bezierCurveTo(w * 0.42, h * 0.25, w * 0.38, h * 0.45, w * 0.35, h * 0.6);
  ctx.bezierCurveTo(w * 0.32, h * 0.72, w * 0.32, h * 0.82, w * 0.35, h * 0.9);
  ctx.lineTo(w * 0.4, h * 0.9);
  ctx.bezierCurveTo(w * 0.38, h * 0.82, w * 0.38, h * 0.72, w * 0.4, h * 0.6);
  ctx.bezierCurveTo(w * 0.43, h * 0.45, w * 0.47, h * 0.25, w * 0.5, h * 0.1);
  ctx.closePath();
  ctx.fill(); ctx.stroke();

  // Prostate region (male)
  ctx.fillStyle = color.light;
  ctx.beginPath();
  ctx.ellipse(w * 0.44, h * 0.28, w * 0.1, h * 0.09, 0.2, 0, Math.PI * 2);
  ctx.fill();
  ctx.strokeStyle = color.dark;
  ctx.lineWidth = 1.5;
  ctx.stroke();

  // Sphincters
  ctx.strokeStyle = color.dark;
  ctx.lineWidth = 4;
  ctx.beginPath();
  ctx.arc(w * 0.46, h * 0.18, w * 0.04, 0, Math.PI * 2);
  ctx.stroke();

  ctx.lineWidth = 3;
  ctx.beginPath();
  ctx.arc(w * 0.42, h * 0.5, w * 0.05, 0, Math.PI * 2);
  ctx.stroke();

  // Bladder outline at top
  ctx.fillStyle = color.light;
  ctx.strokeStyle = color.dark;
  ctx.lineWidth = 1.5;
  ctx.beginPath();
  ctx.ellipse(w * 0.5, h * 0.1, w * 0.1, h * 0.05, 0, 0, Math.PI * 2);
  ctx.fill(); ctx.stroke();

  ctx.fillStyle = color.dark;
  ctx.font = `${w * 0.035}px sans-serif`;
  ctx.fillText('Bladder neck', w * 0.55, h * 0.1);
  ctx.fillText('Int. sphincter', w * 0.52, h * 0.18);
  ctx.fillText('Prostate', w * 0.56, h * 0.28);
  ctx.fillText('Ext. sphincter', w * 0.5, h * 0.5);
  ctx.fillText('Urethra', w * 0.2, h * 0.55);
  ctx.fillText('External', w * 0.43, h * 0.95);
  ctx.fillText('urethral orifice', w * 0.38, h * 0.99);
}

static drawGlomerulus(ctx, color, w, h) {
  ctx.strokeStyle = color.dark;
  ctx.lineWidth = 1.5;

  // Bowman's capsule (outer)
  ctx.fillStyle = 'rgba(220,235,255,0.5)';
  ctx.beginPath();
  ctx.arc(w * 0.5, h * 0.5, w * 0.3, 0, Math.PI * 2);
  ctx.fill(); ctx.stroke();

  // Urinary space
  ctx.fillStyle = 'rgba(200,220,255,0.3)';
  ctx.beginPath();
  ctx.arc(w * 0.5, h * 0.5, w * 0.25, 0, Math.PI * 2);
  ctx.fill();

  // Glomerular capillary tuft
  const tufts = [
    [0.5, 0.42], [0.58, 0.46], [0.62, 0.54], [0.56, 0.62],
    [0.46, 0.62], [0.4, 0.54], [0.42, 0.46], [0.5, 0.5],
  ];
  tufts.forEach(([px, py], i) => {
    ctx.fillStyle = '#cc3333';
    ctx.beginPath();
    ctx.arc(w * px, h * py, w * 0.04, 0, Math.PI * 2);
    ctx.fill();
    ctx.strokeStyle = color.dark;
    ctx.lineWidth = 1;
    ctx.stroke();

    if (i < tufts.length - 1) {
      ctx.strokeStyle = '#cc3333';
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(w * px, h * py);
      ctx.lineTo(w * tufts[i + 1][0], h * tufts[i + 1][1]);
      ctx.stroke();
    }
  });

  // Afferent arteriole (incoming)
  ctx.strokeStyle = '#cc3333';
  ctx.lineWidth = 4;
  ctx.beginPath();
  ctx.moveTo(w * 0.22, h * 0.36);
  ctx.bezierCurveTo(w * 0.3, h * 0.35, w * 0.38, h * 0.38, w * 0.44, h * 0.44);
  ctx.stroke();

  // Efferent arteriole (outgoing)
  ctx.strokeStyle = '#bb2222';
  ctx.lineWidth = 3;
  ctx.beginPath();
  ctx.moveTo(w * 0.44, h * 0.58);
  ctx.bezierCurveTo(w * 0.35, h * 0.65, w * 0.25, h * 0.65, w * 0.2, h * 0.68);
  ctx.stroke();

  // Podocytes (foot processes — indicated by small projections)
  ctx.strokeStyle = color.dark;
  ctx.lineWidth = 1;
  for (let angle = 0; angle < Math.PI * 2; angle += 0.4) {
    const r = w * 0.22;
    const x = w * 0.5 + Math.cos(angle) * r;
    const y = h * 0.5 + Math.sin(angle) * r;
    const x2 = w * 0.5 + Math.cos(angle) * (r + w * 0.03);
    const y2 = h * 0.5 + Math.sin(angle) * (r + h * 0.03);
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineTo(x2, y2);
    ctx.stroke();
  }

  ctx.fillStyle = color.dark;
  ctx.font = `${w * 0.04}px sans-serif`;
  ctx.fillText('Afferent arteriole', w * 0.02, h * 0.33);
  ctx.fillText('Efferent arteriole', w * 0.02, h * 0.7);
  ctx.fillText("Bowman's capsule", w * 0.38, h * 0.88);
  ctx.fillText('Capillary tuft', w * 0.5, h * 0.5);
}

static drawRenalTubule(ctx, color, w, h) {
  ctx.lineCap = 'round';

  // Show tubule cross-sections and longitudinal view

  // Longitudinal section
  ctx.fillStyle = color.light;
  ctx.strokeStyle = color.dark;
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.rect(w * 0.1, h * 0.12, w * 0.35, h * 0.76);
  ctx.fill(); ctx.stroke();

  // Lumen
  ctx.fillStyle = '#e8f0ff';
  ctx.beginPath();
  ctx.rect(w * 0.2, h * 0.12, w * 0.15, h * 0.76);
  ctx.fill();

  // Brush border / microvilli (PCT)
  ctx.strokeStyle = color.base;
  ctx.lineWidth = 0.8;
  for (let y = 0.14; y < 0.88; y += 0.025) {
    ctx.beginPath();
    ctx.moveTo(w * 0.2, h * y);
    ctx.lineTo(w * 0.17, h * y);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(w * 0.35, h * y);
    ctx.lineTo(w * 0.38, h * y);
    ctx.stroke();
  }

  // Epithelial nuclei
  ctx.fillStyle = color.dark;
  for (let y = 0.18; y < 0.85; y += 0.08) {
    ctx.beginPath();
    ctx.ellipse(w * 0.14, h * y, w * 0.03, h * 0.02, 0, 0, Math.PI * 2);
    ctx.fill();
    ctx.beginPath();
    ctx.ellipse(w * 0.41, h * (y + 0.04), w * 0.03, h * 0.02, 0, 0, Math.PI * 2);
    ctx.fill();
  }

  // Cross section view
  ctx.fillStyle = color.light;
  ctx.strokeStyle = color.dark;
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.arc(w * 0.73, h * 0.42, w * 0.2, 0, Math.PI * 2);
  ctx.fill(); ctx.stroke();

  // Lumen cross section
  ctx.fillStyle = '#e8f0ff';
  ctx.beginPath();
  ctx.arc(w * 0.73, h * 0.42, w * 0.1, 0, Math.PI * 2);
  ctx.fill();

  // Epithelial cells (cross section, 8 cells)
  for (let i = 0; i < 8; i++) {
    const a = (i / 8) * Math.PI * 2;
    const cx = w * 0.73 + Math.cos(a) * w * 0.155;
    const cy = h * 0.42 + Math.sin(a) * h * 0.155;
    ctx.fillStyle = color.dark;
    ctx.beginPath();
    ctx.arc(cx, cy, w * 0.018, 0, Math.PI * 2);
    ctx.fill();
  }

  // Microvilli ring
  for (let i = 0; i < 24; i++) {
    const a = (i / 24) * Math.PI * 2;
    ctx.beginPath();
    ctx.moveTo(w * 0.73 + Math.cos(a) * w * 0.1, h * 0.42 + Math.sin(a) * h * 0.1);
    ctx.lineTo(w * 0.73 + Math.cos(a) * w * 0.115, h * 0.42 + Math.sin(a) * h * 0.115);
    ctx.strokeStyle = color.base;
    ctx.lineWidth = 1;
    ctx.stroke();
  }

  ctx.fillStyle = color.dark;
  ctx.font = `${w * 0.036}px sans-serif`;
  ctx.fillText('Longitudinal section', w * 0.08, h * 0.08);
  ctx.fillText('Cross section', w * 0.6, h * 0.08);
  ctx.fillText('Lumen', w * 0.2, h * 0.5);
  ctx.fillText('Brush border', w * 0.0, h * 0.72);
  ctx.fillText('Epithelium', w * 0.53, h * 0.85);
}
