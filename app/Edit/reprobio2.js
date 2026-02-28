static drawFallopianTube(ctx, width, height) {
  const cx = width / 2;
  const cy = height / 2;

  // Main tube body - curved S-shape path
  ctx.strokeStyle = '#FF69B4';
  ctx.lineWidth = 6;
  ctx.lineCap = 'round';
  ctx.beginPath();
  ctx.moveTo(cx - width * 0.35, cy + height * 0.1);
  ctx.bezierCurveTo(
    cx - width * 0.1, cy + height * 0.1,
    cx - width * 0.1, cy - height * 0.15,
    cx + width * 0.05, cy - height * 0.15
  );
  ctx.bezierCurveTo(
    cx + width * 0.2, cy - height * 0.15,
    cx + width * 0.25, cy - height * 0.05,
    cx + width * 0.35, cy - height * 0.2
  );
  ctx.stroke();

  // Fimbriae (finger-like projections at distal end)
  ctx.strokeStyle = '#FF1493';
  ctx.lineWidth = 2;
  const fimbriae = [
    { angle: -60, len: 18 }, { angle: -30, len: 22 }, { angle: 0, len: 20 },
    { angle: 30, len: 18 }, { angle: 60, len: 15 }, { angle: 90, len: 14 }
  ];
  const fimbriaBase = { x: cx + width * 0.35, y: cy - height * 0.2 };
  fimbriae.forEach(f => {
    const rad = (f.angle * Math.PI) / 180;
    ctx.beginPath();
    ctx.moveTo(fimbriaBase.x, fimbriaBase.y);
    ctx.lineTo(fimbriaBase.x + Math.cos(rad) * f.len, fimbriaBase.y + Math.sin(rad) * f.len);
    ctx.stroke();
  });

  // Isthmus label region marker
  ctx.fillStyle = '#FF69B4';
  ctx.font = `${Math.max(10, width * 0.05)}px Arial`;
  ctx.textAlign = 'center';
  ctx.fillText('Fallopian Tube', cx, cy + height * 0.35);

  // Lumen highlight
  ctx.strokeStyle = 'rgba(255,192,203,0.5)';
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.moveTo(cx - width * 0.35, cy + height * 0.07);
  ctx.bezierCurveTo(
    cx - width * 0.1, cy + height * 0.07,
    cx - width * 0.1, cy - height * 0.12,
    cx + width * 0.05, cy - height * 0.12
  );
  ctx.stroke();
}

static drawCervix(ctx, width, height) {
  const cx = width / 2;
  const cy = height / 2;

  // Cervical body - barrel-shaped
  ctx.fillStyle = '#FFB6C1';
  ctx.strokeStyle = '#C71585';
  ctx.lineWidth = 2.5;
  ctx.beginPath();
  ctx.ellipse(cx, cy, width * 0.18, height * 0.32, 0, 0, Math.PI * 2);
  ctx.fill();
  ctx.stroke();

  // Internal os (upper opening)
  ctx.fillStyle = '#C71585';
  ctx.beginPath();
  ctx.ellipse(cx, cy - height * 0.2, width * 0.05, height * 0.04, 0, 0, Math.PI * 2);
  ctx.fill();

  // External os (lower opening - slit shaped)
  ctx.strokeStyle = '#C71585';
  ctx.lineWidth = 3;
  ctx.beginPath();
  ctx.moveTo(cx - width * 0.06, cy + height * 0.25);
  ctx.lineTo(cx + width * 0.06, cy + height * 0.25);
  ctx.stroke();

  // Cervical canal
  ctx.strokeStyle = '#FF69B4';
  ctx.lineWidth = 1.5;
  ctx.setLineDash([4, 3]);
  ctx.beginPath();
  ctx.moveTo(cx, cy - height * 0.2);
  ctx.lineTo(cx, cy + height * 0.25);
  ctx.stroke();
  ctx.setLineDash([]);

  // Ectocervix surface texture
  ctx.strokeStyle = '#DB7093';
  ctx.lineWidth = 1;
  for (let i = -2; i <= 2; i++) {
    ctx.beginPath();
    ctx.moveTo(cx + i * width * 0.04, cy + height * 0.15);
    ctx.lineTo(cx + i * width * 0.045, cy + height * 0.28);
    ctx.stroke();
  }

  ctx.fillStyle = '#C71585';
  ctx.font = `${Math.max(10, width * 0.06)}px Arial`;
  ctx.textAlign = 'center';
  ctx.fillText('Cervix', cx, cy + height * 0.42);
}

static drawVagina(ctx, width, height) {
  const cx = width / 2;
  const cy = height / 2;

  // Vaginal walls - two curved bands
  ctx.fillStyle = '#FFB6C1';
  ctx.strokeStyle = '#C71585';
  ctx.lineWidth = 2.5;

  // Left wall
  ctx.beginPath();
  ctx.moveTo(cx - width * 0.2, cy - height * 0.35);
  ctx.bezierCurveTo(cx - width * 0.25, cy, cx - width * 0.22, cy + height * 0.1, cx - width * 0.12, cy + height * 0.35);
  ctx.lineTo(cx - width * 0.05, cy + height * 0.35);
  ctx.bezierCurveTo(cx - width * 0.12, cy + height * 0.1, cx - width * 0.1, cy, cx - width * 0.08, cy - height * 0.35);
  ctx.closePath();
  ctx.fill();
  ctx.stroke();

  // Right wall
  ctx.beginPath();
  ctx.moveTo(cx + width * 0.2, cy - height * 0.35);
  ctx.bezierCurveTo(cx + width * 0.25, cy, cx + width * 0.22, cy + height * 0.1, cx + width * 0.12, cy + height * 0.35);
  ctx.lineTo(cx + width * 0.05, cy + height * 0.35);
  ctx.bezierCurveTo(cx + width * 0.12, cy + height * 0.1, cx + width * 0.1, cy, cx + width * 0.08, cy - height * 0.35);
  ctx.closePath();
  ctx.fill();
  ctx.stroke();

  // Rugae (transverse ridges)
  ctx.strokeStyle = '#DB7093';
  ctx.lineWidth = 1;
  for (let i = -3; i <= 3; i++) {
    const y = cy + i * height * 0.1;
    ctx.beginPath();
    ctx.moveTo(cx - width * 0.18 + Math.abs(i) * 2, y);
    ctx.bezierCurveTo(cx - width * 0.05, y + height * 0.02, cx + width * 0.05, y + height * 0.02, cx + width * 0.18 - Math.abs(i) * 2, y);
    ctx.stroke();
  }

  ctx.fillStyle = '#C71585';
  ctx.font = `${Math.max(10, width * 0.06)}px Arial`;
  ctx.textAlign = 'center';
  ctx.fillText('Vagina', cx, cy + height * 0.45);
}

static drawTestis(ctx, width, height) {
  const cx = width / 2;
  const cy = height / 2;

  // Outer tunica albuginea
  ctx.fillStyle = '#FFDAB9';
  ctx.strokeStyle = '#CD853F';
  ctx.lineWidth = 3;
  ctx.beginPath();
  ctx.ellipse(cx, cy, width * 0.32, height * 0.4, 0, 0, Math.PI * 2);
  ctx.fill();
  ctx.stroke();

  // Seminiferous tubule coils (simplified cross-section)
  ctx.strokeStyle = '#DEB887';
  ctx.lineWidth = 1.5;
  const tubuleCount = 8;
  for (let i = 0; i < tubuleCount; i++) {
    const angle = (i / tubuleCount) * Math.PI * 2;
    const tx = cx + Math.cos(angle) * width * 0.12;
    const ty = cy + Math.sin(angle) * height * 0.15;
    ctx.beginPath();
    ctx.ellipse(tx, ty, width * 0.07, height * 0.08, angle, 0, Math.PI * 2);
    ctx.stroke();
  }
  // Central tubule
  ctx.beginPath();
  ctx.ellipse(cx, cy, width * 0.07, height * 0.08, 0, 0, Math.PI * 2);
  ctx.stroke();

  // Rete testis
  ctx.fillStyle = '#CD853F';
  ctx.beginPath();
  ctx.ellipse(cx + width * 0.2, cy, width * 0.06, height * 0.1, 0, 0, Math.PI * 2);
  ctx.fill();

  // Mediastinum line
  ctx.strokeStyle = '#A0522D';
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.moveTo(cx + width * 0.14, cy - height * 0.3);
  ctx.lineTo(cx + width * 0.14, cy + height * 0.3);
  ctx.stroke();

  ctx.fillStyle = '#8B4513';
  ctx.font = `${Math.max(10, width * 0.06)}px Arial`;
  ctx.textAlign = 'center';
  ctx.fillText('Testis', cx, cy + height * 0.5);
}

static drawEpididymis(ctx, width, height) {
  const cx = width / 2;
  const cy = height / 2;

  // Testis outline for context
  ctx.fillStyle = '#FFF5E6';
  ctx.strokeStyle = '#CD853F';
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.ellipse(cx - width * 0.08, cy, width * 0.28, height * 0.38, 0, 0, Math.PI * 2);
  ctx.fill();
  ctx.stroke();

  // Epididymis - coiled structure along posterior testis
  ctx.strokeStyle = '#8B4513';
  ctx.lineWidth = 3;
  ctx.lineCap = 'round';

  // Caput (head) - tightly coiled at top
  const headX = cx + width * 0.18;
  const headY = cy - height * 0.22;
  for (let i = 0; i < 5; i++) {
    ctx.beginPath();
    ctx.ellipse(headX, headY + i * height * 0.04, width * 0.06, height * 0.025, 0.3, 0, Math.PI * 2);
    ctx.stroke();
  }

  // Corpus (body) - connecting portion
  ctx.beginPath();
  ctx.moveTo(headX, headY + height * 0.18);
  ctx.bezierCurveTo(headX + width * 0.04, cy, headX, cy + height * 0.1, headX - width * 0.02, cy + height * 0.2);
  ctx.stroke();

  // Cauda (tail)
  ctx.beginPath();
  ctx.arc(headX - width * 0.04, cy + height * 0.22, width * 0.06, 0, Math.PI * 1.5);
  ctx.stroke();

  // Labels
  ctx.fillStyle = '#8B4513';
  ctx.font = `${Math.max(9, width * 0.05)}px Arial`;
  ctx.textAlign = 'left';
  ctx.fillText('Head', headX + width * 0.08, headY + height * 0.02);
  ctx.fillText('Body', headX + width * 0.08, cy);
  ctx.fillText('Tail', headX + width * 0.08, cy + height * 0.22);

  ctx.textAlign = 'center';
  ctx.font = `${Math.max(10, width * 0.06)}px Arial`;
  ctx.fillText('Epididymis', cx, cy + height * 0.48);
}

static drawVasDeferens(ctx, width, height) {
  const cx = width / 2;
  const cy = height / 2;

  // Duct path - ascending then looping over
  ctx.strokeStyle = '#4682B4';
  ctx.lineWidth = 5;
  ctx.lineCap = 'round';
  ctx.beginPath();
  ctx.moveTo(cx - width * 0.3, cy + height * 0.35);
  ctx.bezierCurveTo(
    cx - width * 0.3, cy - height * 0.1,
    cx - width * 0.1, cy - height * 0.35,
    cx, cy - height * 0.35
  );
  ctx.bezierCurveTo(
    cx + width * 0.15, cy - height * 0.35,
    cx + width * 0.3, cy - height * 0.2,
    cx + width * 0.3, cy + height * 0.05
  );
  ctx.stroke();

  // Inner lumen
  ctx.strokeStyle = 'rgba(173,216,230,0.6)';
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.moveTo(cx - width * 0.3, cy + height * 0.35);
  ctx.bezierCurveTo(
    cx - width * 0.3, cy - height * 0.1,
    cx - width * 0.1, cy - height * 0.35,
    cx, cy - height * 0.35
  );
  ctx.bezierCurveTo(
    cx + width * 0.15, cy - height * 0.35,
    cx + width * 0.3, cy - height * 0.2,
    cx + width * 0.3, cy + height * 0.05
  );
  ctx.stroke();

  // Ampulla (dilated terminal portion)
  ctx.fillStyle = '#5F9EA0';
  ctx.strokeStyle = '#2F4F4F';
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.ellipse(cx + width * 0.28, cy + height * 0.1, width * 0.06, height * 0.1, 0.3, 0, Math.PI * 2);
  ctx.fill();
  ctx.stroke();

  ctx.fillStyle = '#2F4F4F';
  ctx.font = `${Math.max(9, width * 0.05)}px Arial`;
  ctx.textAlign = 'right';
  ctx.fillText('Ampulla', cx + width * 0.45, cy + height * 0.12);

  ctx.textAlign = 'center';
  ctx.font = `${Math.max(10, width * 0.06)}px Arial`;
  ctx.fillText('Vas Deferens', cx, cy + height * 0.46);
}

static drawSeminalVesicle(ctx, width, height) {
  const cx = width / 2;
  const cy = height / 2;

  // Lobulated gland body
  ctx.fillStyle = '#E6E6FA';
  ctx.strokeStyle = '#6A5ACD';
  ctx.lineWidth = 2.5;

  // Main lobes
  const lobes = [
    { x: cx - width * 0.08, y: cy - height * 0.05, rx: width * 0.12, ry: height * 0.14 },
    { x: cx + width * 0.08, y: cy - height * 0.1,  rx: width * 0.1,  ry: height * 0.12 },
    { x: cx - width * 0.05, y: cy + height * 0.1,  rx: width * 0.1,  ry: height * 0.1  },
    { x: cx + width * 0.1,  y: cy + height * 0.08, rx: width * 0.08, ry: height * 0.09 },
  ];
  lobes.forEach(l => {
    ctx.beginPath();
    ctx.ellipse(l.x, l.y, l.rx, l.ry, 0, 0, Math.PI * 2);
    ctx.fill();
    ctx.stroke();
  });

  // Internal folds
  ctx.strokeStyle = '#9370DB';
  ctx.lineWidth = 1;
  lobes.forEach(l => {
    for (let i = -1; i <= 1; i++) {
      ctx.beginPath();
      ctx.moveTo(l.x + i * l.rx * 0.4, l.y - l.ry * 0.6);
      ctx.lineTo(l.x + i * l.rx * 0.35, l.y + l.ry * 0.6);
      ctx.stroke();
    }
  });

  // Excretory duct
  ctx.strokeStyle = '#6A5ACD';
  ctx.lineWidth = 3;
  ctx.beginPath();
  ctx.moveTo(cx - width * 0.08, cy + height * 0.2);
  ctx.bezierCurveTo(cx, cy + height * 0.28, cx + width * 0.1, cy + height * 0.28, cx + width * 0.15, cy + height * 0.35);
  ctx.stroke();

  ctx.fillStyle = '#483D8B';
  ctx.font = `${Math.max(10, width * 0.055)}px Arial`;
  ctx.textAlign = 'center';
  ctx.fillText('Seminal Vesicle', cx, cy + height * 0.46);
}

static drawProstate(ctx, width, height) {
  const cx = width / 2;
  const cy = height / 2;

  // Outer capsule - walnut shaped
  ctx.fillStyle = '#FFDEAD';
  ctx.strokeStyle = '#D2691E';
  ctx.lineWidth = 3;
  ctx.beginPath();
  ctx.ellipse(cx, cy, width * 0.35, height * 0.28, 0, 0, Math.PI * 2);
  ctx.fill();
  ctx.stroke();

  // Median groove (anterior)
  ctx.strokeStyle = '#A0522D';
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.moveTo(cx, cy - height * 0.28);
  ctx.bezierCurveTo(cx - width * 0.02, cy - height * 0.1, cx - width * 0.02, cy + height * 0.1, cx, cy + height * 0.28);
  ctx.stroke();

  // Urethra passing through
  ctx.strokeStyle = '#4169E1';
  ctx.lineWidth = 4;
  ctx.beginPath();
  ctx.moveTo(cx + width * 0.05, cy - height * 0.35);
  ctx.bezierCurveTo(cx + width * 0.03, cy - height * 0.1, cx + width * 0.03, cy + height * 0.1, cx + width * 0.05, cy + height * 0.35);
  ctx.stroke();

  // Zones (simplified)
  // Peripheral zone
  ctx.strokeStyle = '#CD853F';
  ctx.lineWidth = 1.5;
  ctx.setLineDash([4, 3]);
  ctx.beginPath();
  ctx.ellipse(cx - width * 0.05, cy + height * 0.05, width * 0.2, height * 0.16, 0, 0, Math.PI * 2);
  ctx.stroke();
  // Central zone
  ctx.beginPath();
  ctx.ellipse(cx + width * 0.03, cy - height * 0.05, width * 0.1, height * 0.1, 0, 0, Math.PI * 2);
  ctx.stroke();
  ctx.setLineDash([]);

  // Labels
  ctx.fillStyle = '#4169E1';
  ctx.font = `${Math.max(9, width * 0.045)}px Arial`;
  ctx.textAlign = 'right';
  ctx.fillText('Urethra', cx - width * 0.08, cy - height * 0.25);

  ctx.fillStyle = '#8B4513';
  ctx.textAlign = 'center';
  ctx.font = `${Math.max(10, width * 0.06)}px Arial`;
  ctx.fillText('Prostate', cx, cy + height * 0.42);
}

static drawBulbourethralGland(ctx, width, height) {
  const cx = width / 2;
  const cy = height / 2;

  // Paired glands (Cowper's glands)
  const glands = [
    { x: cx - width * 0.12, y: cy - height * 0.05 },
    { x: cx + width * 0.12, y: cy - height * 0.05 }
  ];

  glands.forEach((g, i) => {
    // Gland body - round lobulated
    ctx.fillStyle = '#FFE4B5';
    ctx.strokeStyle = '#DAA520';
    ctx.lineWidth = 2.5;
    ctx.beginPath();
    ctx.arc(g.x, g.y, width * 0.1, 0, Math.PI * 2);
    ctx.fill();
    ctx.stroke();

    // Lobules
    ctx.strokeStyle = '#B8860B';
    ctx.lineWidth = 1;
    for (let j = 0; j < 5; j++) {
      const angle = (j / 5) * Math.PI * 2;
      const lx = g.x + Math.cos(angle) * width * 0.05;
      const ly = g.y + Math.sin(angle) * height * 0.04;
      ctx.beginPath();
      ctx.arc(lx, ly, width * 0.03, 0, Math.PI * 2);
      ctx.stroke();
    }

    // Duct leading to urethra
    ctx.strokeStyle = '#DAA520';
    ctx.lineWidth = 2.5;
    ctx.beginPath();
    ctx.moveTo(g.x + (i === 0 ? width * 0.1 : -width * 0.1), g.y);
    ctx.bezierCurveTo(
      g.x + (i === 0 ? width * 0.15 : -width * 0.15), g.y + height * 0.1,
      cx + (i === 0 ? -width * 0.03 : width * 0.03), cy + height * 0.15,
      cx, cy + height * 0.18
    );
    ctx.stroke();
  });

  // Urethra
  ctx.strokeStyle = '#4169E1';
  ctx.lineWidth = 4;
  ctx.beginPath();
  ctx.moveTo(cx, cy - height * 0.35);
  ctx.lineTo(cx, cy + height * 0.35);
  ctx.stroke();

  ctx.fillStyle = '#8B6914';
  ctx.font = `${Math.max(9, width * 0.048)}px Arial`;
  ctx.textAlign = 'center';
  ctx.fillText("Bulbourethral Glands", cx, cy + height * 0.46);
}

static drawPenis(ctx, width, height) {
  const cx = width / 2;
  const cy = height / 2;

  // Shaft
  ctx.fillStyle = '#FFDAB9';
  ctx.strokeStyle = '#CD853F';
  ctx.lineWidth = 2.5;
  ctx.beginPath();
  ctx.roundRect(cx - width * 0.18, cy - height * 0.35, width * 0.36, height * 0.55, [6]);
  ctx.fill();
  ctx.stroke();

  // Glans penis
  ctx.fillStyle = '#FFB6A0';
  ctx.strokeStyle = '#CD5C5C';
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.ellipse(cx, cy + height * 0.26, width * 0.2, height * 0.1, 0, 0, Math.PI * 2);
  ctx.fill();
  ctx.stroke();

  // Corona
  ctx.strokeStyle = '#B22222';
  ctx.lineWidth = 1.5;
  ctx.beginPath();
  ctx.ellipse(cx, cy + height * 0.19, width * 0.2, height * 0.04, 0, 0, Math.PI);
  ctx.stroke();

  // Corpus cavernosum (left)
  ctx.fillStyle = 'rgba(205,133,63,0.3)';
  ctx.strokeStyle = '#A0522D';
  ctx.lineWidth = 1.5;
  ctx.beginPath();
  ctx.roundRect(cx - width * 0.16, cy - height * 0.32, width * 0.14, height * 0.5, [4]);
  ctx.fill();
  ctx.stroke();

  // Corpus cavernosum (right)
  ctx.beginPath();
  ctx.roundRect(cx + width * 0.02, cy - height * 0.32, width * 0.14, height * 0.5, [4]);
  ctx.fill();
  ctx.stroke();

  // Corpus spongiosum / urethra
  ctx.fillStyle = 'rgba(65,105,225,0.25)';
  ctx.strokeStyle = '#4169E1';
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.roundRect(cx - width * 0.04, cy - height * 0.32, width * 0.08, height * 0.56, [4]);
  ctx.fill();
  ctx.stroke();

  // Urethral meatus
  ctx.strokeStyle = '#4169E1';
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.moveTo(cx - width * 0.02, cy + height * 0.34);
  ctx.lineTo(cx + width * 0.02, cy + height * 0.34);
  ctx.stroke();

  ctx.fillStyle = '#8B4513';
  ctx.font = `${Math.max(10, width * 0.06)}px Arial`;
  ctx.textAlign = 'center';
  ctx.fillText('Penis', cx, cy + height * 0.46);
}

static drawScrotum(ctx, width, height) {
  const cx = width / 2;
  const cy = height / 2;

  // Scrotal sac - two fused pouches
  ctx.fillStyle = '#FFDAB9';
  ctx.strokeStyle = '#CD853F';
  ctx.lineWidth = 2.5;

  // Left pouch
  ctx.beginPath();
  ctx.arc(cx - width * 0.16, cy + height * 0.05, width * 0.22, 0, Math.PI * 2);
  ctx.fill();
  ctx.stroke();

  // Right pouch
  ctx.beginPath();
  ctx.arc(cx + width * 0.16, cy + height * 0.05, width * 0.22, 0, Math.PI * 2);
  ctx.fill();
  ctx.stroke();

  // Median raphe (septum line)
  ctx.strokeStyle = '#A0522D';
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.moveTo(cx, cy - height * 0.18);
  ctx.bezierCurveTo(cx + width * 0.01, cy, cx - width * 0.01, cy + height * 0.1, cx, cy + height * 0.27);
  ctx.stroke();

  // Rugae texture
  ctx.strokeStyle = '#DEB887';
  ctx.lineWidth = 1;
  [
    [cx - width * 0.25, cy, cx - width * 0.08, cy + height * 0.15],
    [cx - width * 0.28, cy + height * 0.1, cx - width * 0.1, cy + height * 0.22],
    [cx + width * 0.08, cy, cx + width * 0.25, cy + height * 0.15],
    [cx + width * 0.1, cy + height * 0.1, cx + width * 0.28, cy + height * 0.22],
  ].forEach(([x1, y1, x2, y2]) => {
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.quadraticCurveTo((x1 + x2) / 2, (y1 + y2) / 2 - height * 0.04, x2, y2);
    ctx.stroke();
  });

  // Left testis inside
  ctx.fillStyle = 'rgba(255,200,150,0.5)';
  ctx.strokeStyle = '#CD853F';
  ctx.lineWidth = 1.5;
  ctx.beginPath();
  ctx.ellipse(cx - width * 0.16, cy + height * 0.07, width * 0.12, height * 0.14, 0, 0, Math.PI * 2);
  ctx.fill();
  ctx.stroke();

  // Right testis inside
  ctx.beginPath();
  ctx.ellipse(cx + width * 0.16, cy + height * 0.07, width * 0.12, height * 0.14, 0, 0, Math.PI * 2);
  ctx.fill();
  ctx.stroke();

  ctx.fillStyle = '#8B4513';
  ctx.font = `${Math.max(10, width * 0.06)}px Arial`;
  ctx.textAlign = 'center';
  ctx.fillText('Scrotum', cx, cy + height * 0.43);
}

static drawCorpusLuteum(ctx, width, height) {
  const cx = width / 2;
  const cy = height / 2;

  // Outer luteal body
  ctx.fillStyle = '#FFD700';
  ctx.strokeStyle = '#B8860B';
  ctx.lineWidth = 3;
  ctx.beginPath();
  ctx.arc(cx, cy, width * 0.32, 0, Math.PI * 2);
  ctx.fill();
  ctx.stroke();

  // Folded luteal cells (wavy inner wall)
  ctx.strokeStyle = '#DAA520';
  ctx.lineWidth = 2;
  ctx.fillStyle = '#FFF8DC';
  ctx.beginPath();
  const folds = 12;
  for (let i = 0; i <= folds; i++) {
    const angle = (i / folds) * Math.PI * 2;
    const r = i % 2 === 0 ? width * 0.18 : width * 0.22;
    const x = cx + Math.cos(angle) * r;
    const y = cy + Math.sin(angle) * r;
    i === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
  }
  ctx.closePath();
  ctx.fill();
  ctx.stroke();

  // Central coagulum (fibrin clot)
  ctx.fillStyle = '#FFA500';
  ctx.strokeStyle = '#FF8C00';
  ctx.lineWidth = 1.5;
  ctx.beginPath();
  ctx.arc(cx, cy, width * 0.1, 0, Math.PI * 2);
  ctx.fill();
  ctx.stroke();

  // Granulosa lutein cells (dots around inner wall)
  ctx.fillStyle = '#DAA520';
  for (let i = 0; i < 16; i++) {
    const angle = (i / 16) * Math.PI * 2;
    const x = cx + Math.cos(angle) * width * 0.2;
    const y = cy + Math.sin(angle) * height * 0.2;
    ctx.beginPath();
    ctx.arc(x, y, 3, 0, Math.PI * 2);
    ctx.fill();
  }

  ctx.fillStyle = '#8B6914';
  ctx.font = `${Math.max(10, width * 0.06)}px Arial`;
  ctx.textAlign = 'center';
  ctx.fillText('Corpus Luteum', cx, cy + height * 0.43);
}

static drawFollicle(ctx, width, height, stage = 'antral') {
  const cx = width / 2;
  const cy = height / 2;

  const stages = {
    primordial: () => {
      // Single oocyte with flat granulosa cells
      ctx.fillStyle = '#FFF5E6';
      ctx.strokeStyle = '#CD853F';
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.arc(cx, cy, width * 0.15, 0, Math.PI * 2);
      ctx.fill();
      ctx.stroke();
      // Oocyte
      ctx.fillStyle = '#FFDAB9';
      ctx.beginPath();
      ctx.arc(cx, cy, width * 0.08, 0, Math.PI * 2);
      ctx.fill();
      ctx.stroke();
      ctx.fillStyle = '#CD853F';
      ctx.font = `${Math.max(9, width * 0.05)}px Arial`;
      ctx.textAlign = 'center';
      ctx.fillText('Primordial', cx, cy + height * 0.25);
    },
    primary: () => {
      ctx.fillStyle = '#FFF5E6';
      ctx.strokeStyle = '#CD853F';
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.arc(cx, cy, width * 0.22, 0, Math.PI * 2);
      ctx.fill();
      ctx.stroke();
      // Zona pellucida
      ctx.strokeStyle = '#FFB6C1';
      ctx.lineWidth = 3;
      ctx.beginPath();
      ctx.arc(cx, cy, width * 0.1, 0, Math.PI * 2);
      ctx.stroke();
      // Oocyte
      ctx.fillStyle = '#FFDAB9';
      ctx.beginPath();
      ctx.arc(cx, cy, width * 0.08, 0, Math.PI * 2);
      ctx.fill();
      ctx.fillStyle = '#CD853F';
      ctx.font = `${Math.max(9, width * 0.05)}px Arial`;
      ctx.textAlign = 'center';
      ctx.fillText('Primary', cx, cy + height * 0.32);
    },
    antral: () => {
      // Outer theca
      ctx.fillStyle = '#FFE4C4';
      ctx.strokeStyle = '#8B4513';
      ctx.lineWidth = 2.5;
      ctx.beginPath();
      ctx.arc(cx, cy, width * 0.38, 0, Math.PI * 2);
      ctx.fill();
      ctx.stroke();
      // Antrum (fluid-filled space)
      ctx.fillStyle = '#E0F0FF';
      ctx.strokeStyle = '#4682B4';
      ctx.lineWidth = 1.5;
      ctx.beginPath();
      ctx.arc(cx + width * 0.05, cy - height * 0.05, width * 0.2, 0, Math.PI * 2);
      ctx.fill();
      ctx.stroke();
      // Cumulus oophorus
      ctx.fillStyle = '#FFDAB9';
      ctx.strokeStyle = '#CD853F';
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.arc(cx - width * 0.1, cy + height * 0.08, width * 0.12, 0, Math.PI * 2);
      ctx.fill();
      ctx.stroke();
      // Oocyte inside cumulus
      ctx.fillStyle = '#FFB07C';
      ctx.beginPath();
      ctx.arc(cx - width * 0.1, cy + height * 0.08, width * 0.07, 0, Math.PI * 2);
      ctx.fill();
      ctx.fillStyle = '#8B4513';
      ctx.font = `${Math.max(9, width * 0.05)}px Arial`;
      ctx.textAlign = 'center';
      ctx.fillText('Antral Follicle', cx, cy + height * 0.46);
    }
  };

  (stages[stage] || stages.antral)();
}

static drawZonaPellucida(ctx, width, height) {
  const cx = width / 2;
  const cy = height / 2;

  // Oocyte core
  ctx.fillStyle = '#FFD580';
  ctx.strokeStyle = '#CD853F';
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.arc(cx, cy, width * 0.22, 0, Math.PI * 2);
  ctx.fill();
  ctx.stroke();

  // Nucleus
  ctx.fillStyle = '#FFA500';
  ctx.beginPath();
  ctx.arc(cx, cy, width * 0.08, 0, Math.PI * 2);
  ctx.fill();

  // Zona pellucida - thick glycoprotein layer
  ctx.strokeStyle = '#FF69B4';
  ctx.lineWidth = 8;
  ctx.globalAlpha = 0.6;
  ctx.beginPath();
  ctx.arc(cx, cy, width * 0.3, 0, Math.PI * 2);
  ctx.stroke();
  ctx.globalAlpha = 1.0;

  // ZP protein channels (radial lines through zona)
  ctx.strokeStyle = '#FF1493';
  ctx.lineWidth = 1;
  for (let i = 0; i < 20; i++) {
    const angle = (i / 20) * Math.PI * 2;
    const r1 = width * 0.24;
    const r2 = width * 0.35;
    ctx.beginPath();
    ctx.moveTo(cx + Math.cos(angle) * r1, cy + Math.sin(angle) * r1);
    ctx.lineTo(cx + Math.cos(angle) * r2, cy + Math.sin(angle) * r2);
    ctx.stroke();
  }

  // Perivitelline space
  ctx.strokeStyle = 'rgba(173,216,230,0.8)';
  ctx.lineWidth = 3;
  ctx.beginPath();
  ctx.arc(cx, cy, width * 0.25, 0, Math.PI * 2);
  ctx.stroke();

  // Labels
  ctx.fillStyle = '#FF1493';
  ctx.font = `${Math.max(9, width * 0.045)}px Arial`;
  ctx.textAlign = 'left';
  ctx.fillText('Zona Pellucida', cx + width * 0.32, cy - height * 0.05);

  ctx.fillStyle = '#4682B4';
  ctx.fillText('Perivitelline', cx + width * 0.25, cy + height * 0.12);
  ctx.fillText('Space', cx + width * 0.25, cy + height * 0.19);

  ctx.fillStyle = '#CD853F';
  ctx.textAlign = 'center';
  ctx.font = `${Math.max(10, width * 0.06)}px Arial`;
  ctx.fillText('Zona Pellucida', cx, cy + height * 0.46);
}

static drawEndometrium(ctx, width, height) {
  const cx = width / 2;
  const cy = height / 2;

  // Myometrium (muscle layer - bottom)
  ctx.fillStyle = '#FFB6C1';
  ctx.strokeStyle = '#C71585';
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.roundRect(0, cy + height * 0.15, width, height * 0.35, [0, 0, 8, 8]);
  ctx.fill();
  ctx.stroke();

  // Stratum basalis
  ctx.fillStyle = '#FF69B4';
  ctx.beginPath();
  ctx.rect(0, cy + height * 0.03, width, height * 0.12);
  ctx.fill();

  // Stratum functionalis
  ctx.fillStyle = '#FFD0E0';
  ctx.beginPath();
  ctx.rect(0, cy - height * 0.2, width, height * 0.23);
  ctx.fill();

  // Uterine glands (tubular structures)
  ctx.strokeStyle = '#C71585';
  ctx.lineWidth = 2;
  for (let i = 0; i < 6; i++) {
    const gx = width * 0.1 + i * width * 0.16;
    ctx.beginPath();
    ctx.moveTo(gx, cy + height * 0.03);
    ctx.bezierCurveTo(
      gx - width * 0.03, cy - height * 0.05,
      gx + width * 0.03, cy - height * 0.12,
      gx, cy - height * 0.18
    );
    ctx.stroke();
  }

  // Blood vessels (spiral arteries in functionalis)
  ctx.strokeStyle = '#DC143C';
  ctx.lineWidth = 1.5;
  for (let i = 0; i < 4; i++) {
    const vx = width * 0.15 + i * width * 0.2;
    ctx.beginPath();
    ctx.moveTo(vx, cy + height * 0.1);
    for (let j = 0; j < 6; j++) {
      const y = cy + height * 0.1 - j * height * 0.055;
      const x = vx + (j % 2 === 0 ? width * 0.025 : -width * 0.025);
      ctx.lineTo(x, y);
    }
    ctx.stroke();
  }

  // Surface epithelium
  ctx.strokeStyle = '#FF1493';
  ctx.lineWidth = 2.5;
  ctx.beginPath();
  ctx.moveTo(0, cy - height * 0.2);
  for (let x = 0; x <= width; x += width * 0.04) {
    ctx.lineTo(x, cy - height * 0.2 + (Math.sin(x * 0.08) * height * 0.015));
  }
  ctx.stroke();

  // Layer labels
  ctx.fillStyle = '#800000';
  ctx.font = `${Math.max(9, width * 0.045)}px Arial`;
  ctx.textAlign = 'right';
  ctx.fillText('Functionalis', width * 0.95, cy - height * 0.08);
  ctx.fillText('Basalis', width * 0.95, cy + height * 0.08);
  ctx.fillText('Myometrium', width * 0.95, cy + height * 0.28);

  ctx.fillStyle = '#C71585';
  ctx.textAlign = 'center';
  ctx.font = `${Math.max(10, width * 0.06)}px Arial`;
  ctx.fillText('Endometrium', cx, height * 0.96);
}

static drawAmnion(ctx, width, height) {
  const cx = width / 2;
  const cy = height / 2;

  // Amniotic cavity filled with fluid
  ctx.fillStyle = 'rgba(173,216,230,0.3)';
  ctx.strokeStyle = '#87CEEB';
  ctx.lineWidth = 1;
  ctx.beginPath();
  ctx.ellipse(cx, cy, width * 0.38, height * 0.38, 0, 0, Math.PI * 2);
  ctx.fill();

  // Amnion membrane (thin inner)
  ctx.strokeStyle = '#4682B4';
  ctx.lineWidth = 3;
  ctx.beginPath();
  ctx.ellipse(cx, cy, width * 0.38, height * 0.38, 0, 0, Math.PI * 2);
  ctx.stroke();

  // Chorion (outer membrane)
  ctx.strokeStyle = '#2E8B57';
  ctx.lineWidth = 2.5;
  ctx.setLineDash([5, 3]);
  ctx.beginPath();
  ctx.ellipse(cx, cy, width * 0.44, height * 0.44, 0, 0, Math.PI * 2);
  ctx.stroke();
  ctx.setLineDash([]);

  // Embryo/fetus silhouette
  ctx.fillStyle = 'rgba(255,160,122,0.7)';
  ctx.strokeStyle = '#CD853F';
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.ellipse(cx, cy, width * 0.12, height * 0.18, 0.3, 0, Math.PI * 2);
  ctx.fill();
  ctx.stroke();
  // Head
  ctx.beginPath();
  ctx.arc(cx + width * 0.05, cy - height * 0.12, width * 0.07, 0, Math.PI * 2);
  ctx.fill();
  ctx.stroke();

  // Amniotic fluid dots
  ctx.fillStyle = 'rgba(135,206,235,0.5)';
  for (let i = 0; i < 20; i++) {
    const angle = Math.random() * Math.PI * 2;
    const r = Math.random() * width * 0.28 + width * 0.05;
    const fx = cx + Math.cos(angle) * r;
    const fy = cy + Math.sin(angle) * height / width * r;
    if (Math.abs(fx - cx) > width * 0.15 || Math.abs(fy - cy) > height * 0.2) {
      ctx.beginPath();
      ctx.arc(fx, fy, 2, 0, Math.PI * 2);
      ctx.fill();
    }
  }

  // Labels
  ctx.fillStyle = '#4682B4';
  ctx.font = `${Math.max(9, width * 0.045)}px Arial`;
  ctx.textAlign = 'left';
  ctx.fillText('Amnion', cx + width * 0.4, cy - height * 0.05);
  ctx.fillStyle = '#2E8B57';
  ctx.fillText('Chorion', cx + width * 0.4, cy + height * 0.08);
  ctx.fillStyle = '#4169E1';
  ctx.fillText('Amniotic fluid', cx - width * 0.45, cy + height * 0.18);

  ctx.fillStyle = '#1E90FF';
  ctx.textAlign = 'center';
  ctx.font = `${Math.max(10, width * 0.06)}px Arial`;
  ctx.fillText('Amnion', cx, cy + height * 0.48);
}

static drawAmnioticSac(ctx, width, height) {
  const cx = width / 2;
  const cy = height / 2;

  // Outer chorionic layer
  ctx.fillStyle = 'rgba(144,238,144,0.15)';
  ctx.strokeStyle = '#228B22';
  ctx.lineWidth = 4;
  ctx.beginPath();
  ctx.ellipse(cx, cy, width * 0.44, height * 0.44, 0, 0, Math.PI * 2);
  ctx.fill();
  ctx.stroke();

  // Inner amniotic layer
  ctx.fillStyle = 'rgba(173,216,230,0.25)';
  ctx.strokeStyle = '#1E90FF';
  ctx.lineWidth = 3;
  ctx.beginPath();
  ctx.ellipse(cx, cy, width * 0.36, height * 0.36, 0, 0, Math.PI * 2);
  ctx.fill();
  ctx.stroke();

  // Fluid particles
  ctx.fillStyle = 'rgba(100,149,237,0.5)';
  const particles = [
    [cx - 0.2 * width, cy - 0.15 * height], [cx + 0.18 * width, cy - 0.22 * height],
    [cx - 0.25 * width, cy + 0.1 * height], [cx + 0.22 * width, cy + 0.18 * height],
    [cx - 0.05 * width, cy + 0.28 * height], [cx + 0.05 * width, cy - 0.28 * height],
  ];
  particles.forEach(([px, py]) => {
    ctx.beginPath();
    ctx.arc(px, py, 4, 0, Math.PI * 2);
    ctx.fill();
  });

  // Fetus (simple)
  ctx.fillStyle = 'rgba(255,200,150,0.85)';
  ctx.strokeStyle = '#CD853F';
  ctx.lineWidth = 2;
  // Body
  ctx.beginPath();
  ctx.ellipse(cx - width * 0.04, cy + height * 0.04, width * 0.11, height * 0.16, -0.3, 0, Math.PI * 2);
  ctx.fill();
  ctx.stroke();
  // Head
  ctx.beginPath();
  ctx.arc(cx + width * 0.06, cy - height * 0.1, width * 0.09, 0, Math.PI * 2);
  ctx.fill();
  ctx.stroke();

  // Umbilical cord stub
  ctx.strokeStyle = '#00CED1';
  ctx.lineWidth = 3;
  ctx.beginPath();
  ctx.moveTo(cx - width * 0.04, cy + height * 0.2);
  ctx.bezierCurveTo(cx - width * 0.1, cy + height * 0.28, cx - width * 0.05, cy + height * 0.35, cx, cy + height * 0.42);
  ctx.stroke();

  // Dimension arrow annotations
  ctx.strokeStyle = '#666';
  ctx.lineWidth = 1;
  ctx.fillStyle = '#333';
  ctx.font = `${Math.max(9, width * 0.045)}px Arial`;
  ctx.textAlign = 'left';
  ctx.fillText('Chorion', cx + width * 0.46, cy - height * 0.12);
  ctx.fillText('Amnion', cx + width * 0.38, cy + height * 0.02);
  ctx.fillText('Amniotic', cx - width * 0.48, cy + height * 0.28);
  ctx.fillText('fluid', cx - width * 0.48, cy + height * 0.35);

  ctx.fillStyle = '#1E90FF';
  ctx.textAlign = 'center';
  ctx.font = `${Math.max(10, width * 0.06)}px Arial`;
  ctx.fillText('Amniotic Sac', cx, cy + height * 0.48);
}

static drawYolkSac(ctx, width, height) {
  const cx = width / 2;
  const cy = height / 2;

  // Yolk sac body (round vesicle)
  ctx.fillStyle = '#FFFACD';
  ctx.strokeStyle = '#DAA520';
  ctx.lineWidth = 3;
  ctx.beginPath();
  ctx.arc(cx, cy, width * 0.28, 0, Math.PI * 2);
  ctx.fill();
  ctx.stroke();

  // Inner endodermal lining
  ctx.strokeStyle = '#FFD700';
  ctx.lineWidth = 5;
  ctx.globalAlpha = 0.4;
  ctx.beginPath();
  ctx.arc(cx, cy, width * 0.24, 0, Math.PI * 2);
  ctx.stroke();
  ctx.globalAlpha = 1.0;

  // Blood islands (hematopoiesis)
  ctx.fillStyle = '#DC143C';
  const islands = [
    [cx - 0.1 * width, cy - 0.08 * height, 5],
    [cx + 0.12 * width, cy - 0.05 * height, 4],
    [cx + 0.05 * width, cy + 0.12 * height, 6],
    [cx - 0.14 * width, cy + 0.1 * height, 4],
    [cx - 0.04 * width, cy - 0.15 * height, 5],
  ];
  islands.forEach(([ix, iy, r]) => {
    ctx.beginPath();
    ctx.arc(ix, iy, r, 0, Math.PI * 2);
    ctx.fill();
  });

  // Stalk connecting to embryo
  ctx.strokeStyle = '#DAA520';
  ctx.lineWidth = 5;
  ctx.beginPath();
  ctx.moveTo(cx, cy - width * 0.28);
  ctx.bezierCurveTo(cx + width * 0.05, cy - height * 0.36, cx + width * 0.12, cy - height * 0.4, cx + width * 0.2, cy - height * 0.42);
  ctx.stroke();

  // Embryonic disc at top of stalk
  ctx.fillStyle = '#FFA07A';
  ctx.strokeStyle = '#CD853F';
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.ellipse(cx + width * 0.24, cy - height * 0.42, width * 0.09, height * 0.06, -0.5, 0, Math.PI * 2);
  ctx.fill();
  ctx.stroke();

  // Labels
  ctx.fillStyle = '#B8860B';
  ctx.font = `${Math.max(9, width * 0.045)}px Arial`;
  ctx.textAlign = 'left';
  ctx.fillText('Embryo', cx + width * 0.33, cy - height * 0.4);
  ctx.fillText('Stalk', cx + width * 0.12, cy - height * 0.32);
  ctx.fillStyle = '#DC143C';
  ctx.fillText('Blood islands', cx + width * 0.3, cy + height * 0.05);

  ctx.fillStyle = '#B8860B';
  ctx.textAlign = 'center';
  ctx.font = `${Math.max(10, width * 0.06)}px Arial`;
  ctx.fillText('Yolk Sac', cx, cy + height * 0.4);
}

static drawAllantois(ctx, width, height) {
  const cx = width / 2;
  const cy = height / 2;

  // Allantoic vesicle
  ctx.fillStyle = '#E0FFE0';
  ctx.strokeStyle = '#228B22';
  ctx.lineWidth = 3;
  ctx.beginPath();
  ctx.ellipse(cx, cy + height * 0.1, width * 0.22, height * 0.24, 0, 0, Math.PI * 2);
  ctx.fill();
  ctx.stroke();

  // Allantoic stalk (outgrowth from hindgut)
  ctx.strokeStyle = '#2E8B57';
  ctx.lineWidth = 5;
  ctx.beginPath();
  ctx.moveTo(cx, cy - height * 0.14);
  ctx.bezierCurveTo(cx - width * 0.03, cy - height * 0.05, cx - width * 0.02, cy + height * 0.02, cx, cy - height * 0.14);
  ctx.moveTo(cx, cy - height * 0.14);
  ctx.lineTo(cx, cy - height * 0.14 + height * 0.28);
  ctx.stroke();

  // Embryo body above
  ctx.fillStyle = 'rgba(255,160,122,0.75)';
  ctx.strokeStyle = '#CD853F';
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.ellipse(cx, cy - height * 0.28, width * 0.14, height * 0.12, 0, 0, Math.PI * 2);
  ctx.fill();
  ctx.stroke();
  // Head
  ctx.beginPath();
  ctx.arc(cx + width * 0.08, cy - height * 0.35, width * 0.08, 0, Math.PI * 2);
  ctx.fill();
  ctx.stroke();

  // Allantoic blood vessels
  ctx.strokeStyle = '#DC143C';
  ctx.lineWidth = 2;
  // Umbilical arteries
  for (let side = -1; side <= 1; side += 2) {
    ctx.beginPath();
    ctx.moveTo(cx + side * width * 0.05, cy - height * 0.14);
    ctx.bezierCurveTo(
      cx + side * width * 0.08, cy,
      cx + side * width * 0.1, cy + height * 0.1,
      cx + side * width * 0.08, cy + height * 0.3
    );
    ctx.stroke();
  }

  // Labels
  ctx.fillStyle = '#228B22';
  ctx.font = `${Math.max(9, width * 0.045)}px Arial`;
  ctx.textAlign = 'left';
  ctx.fillText('Allantoic', cx + width * 0.26, cy + height * 0.08);
  ctx.fillText('vesicle', cx + width * 0.26, cy + height * 0.15);
  ctx.fillStyle = '#DC143C';
  ctx.fillText('Blood vessels', cx - width * 0.48, cy + height * 0.08);

  ctx.fillStyle = '#228B22';
  ctx.textAlign = 'center';
  ctx.font = `${Math.max(10, width * 0.06)}px Arial`;
  ctx.fillText('Allantois', cx, cy + height * 0.45);
}

static drawChorion(ctx, width, height) {
  const cx = width / 2;
  const cy = height / 2;

  // Chorionic sac
  ctx.fillStyle = 'rgba(144,238,144,0.2)';
  ctx.strokeStyle = '#228B22';
  ctx.lineWidth = 4;
  ctx.beginPath();
  ctx.ellipse(cx, cy, width * 0.42, height * 0.42, 0, 0, Math.PI * 2);
  ctx.fill();
  ctx.stroke();

  // Chorionic villi projections (all around early chorion)
  ctx.strokeStyle = '#006400';
  ctx.lineWidth = 2;
  const villiCount = 28;
  for (let i = 0; i < villiCount; i++) {
    const angle = (i / villiCount) * Math.PI * 2;
    const baseR = width * 0.42;
    const tipR = baseR + width * 0.06 + Math.random() * width * 0.04;
    const bx = cx + Math.cos(angle) * baseR;
    const by = cy + Math.sin(angle) * height / width * baseR;
    const tx = cx + Math.cos(angle) * tipR;
    const ty = cy + Math.sin(angle) * height / width * tipR;
    ctx.beginPath();
    ctx.moveTo(bx, by);
    ctx.lineTo(tx, ty);
    ctx.stroke();
    // Villus tip
    ctx.beginPath();
    ctx.arc(tx, ty, 3, 0, Math.PI * 2);
    ctx.fillStyle = '#006400';
    ctx.fill();
  }

  // Inner amniotic sac
  ctx.strokeStyle = '#4169E1';
  ctx.lineWidth = 2.5;
  ctx.setLineDash([5, 3]);
  ctx.beginPath();
  ctx.ellipse(cx, cy, width * 0.26, height * 0.26, 0, 0, Math.PI * 2);
  ctx.stroke();
  ctx.setLineDash([]);

  // Embryo
  ctx.fillStyle = 'rgba(255,160,122,0.8)';
  ctx.strokeStyle = '#CD853F';
  ctx.lineWidth = 1.5;
  ctx.beginPath();
  ctx.arc(cx, cy, width * 0.1, 0, Math.PI * 2);
  ctx.fill();
  ctx.stroke();

  // Labels
  ctx.fillStyle = '#228B22';
  ctx.font = `${Math.max(9, width * 0.045)}px Arial`;
  ctx.textAlign = 'left';
  ctx.fillText('Chorionic villi', cx + width * 0.44, cy - height * 0.08);
  ctx.fillStyle = '#4169E1';
  ctx.fillText('Amnion', cx + width * 0.28, cy + height * 0.12);
  ctx.fillStyle = '#CD853F';
  ctx.fillText('Embryo', cx - width * 0.08, cy + height * 0.04);

  ctx.fillStyle = '#006400';
  ctx.textAlign = 'center';
  ctx.font = `${Math.max(10, width * 0.06)}px Arial`;
  ctx.fillText('Chorion', cx, cy + height * 0.48);
}

