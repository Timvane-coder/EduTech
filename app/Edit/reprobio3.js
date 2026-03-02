// ─────────────────────────────────────────────
// MISSING SYSTEMS — switch-case dispatcher pattern
// ─────────────────────────────────────────────

static drawImplantation(ctx, x, y, width, height, stage) {
  ctx.save();
  ctx.translate(x, y);

  switch (stage) {
    case 'complete':
      this.drawCompleteImplantation(ctx, width, height);
      break;
    case 'apposition':
      this.drawImplantationApposition(ctx, width, height);
      break;
    case 'adhesion':
      this.drawImplantationAdhesion(ctx, width, height);
      break;
    case 'invasion':
      this.drawImplantationInvasion(ctx, width, height);
      break;
    default:
      this.drawCompleteImplantation(ctx, width, height);
  }

  ctx.restore();
}

static drawCompleteImplantation(ctx, width, height) {
  const stages = ['Apposition', 'Adhesion', 'Invasion'];
  const sw = width / 3;

  stages.forEach((label, i) => {
    const cx = sw * i + sw / 2;
    const cy = height / 2;

    // Endometrium bed
    ctx.fillStyle = '#FFD0E0';
    ctx.strokeStyle = '#C71585';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.roundRect(cx - sw * 0.42, cy + height * 0.1, sw * 0.84, height * 0.3, 4);
    ctx.fill();
    ctx.stroke();

    // Blastocyst
    const bR = sw * 0.18;
    const by = cy - bR - (i * height * 0.08);
    ctx.fillStyle = '#FFF8DC';
    ctx.strokeStyle = '#DAA520';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.arc(cx, by, bR, 0, Math.PI * 2);
    ctx.fill();
    ctx.stroke();

    // ICM
    ctx.fillStyle = '#FFA500';
    ctx.beginPath();
    ctx.arc(cx + bR * 0.3, by - bR * 0.2, bR * 0.3, 0, Math.PI * 2);
    ctx.fill();

    if (i >= 1) {
      // Adhesion / invasion fingers
      ctx.strokeStyle = '#8B0000';
      ctx.lineWidth = 1.5;
      const fingers = i === 1 ? 3 : 6;
      for (let f = 0; f < fingers; f++) {
        const fx = cx - sw * 0.15 + f * (sw * 0.15);
        const depth = i === 2 ? height * 0.18 : height * 0.04;
        ctx.beginPath();
        ctx.moveTo(fx, by + bR);
        ctx.lineTo(fx, cy + height * 0.1 + depth);
        ctx.stroke();
      }
    }

    ctx.fillStyle = '#333';
    ctx.font = `${Math.max(9, width * 0.03)}px Arial`;
    ctx.textAlign = 'center';
    ctx.fillText(label, cx, cy + height * 0.46);
  });
}

static drawImplantationApposition(ctx, width, height) {
  const cx = width / 2, cy = height / 2;

  // Endometrium
  ctx.fillStyle = '#FFD0E0';
  ctx.strokeStyle = '#C71585';
  ctx.lineWidth = 2.5;
  ctx.beginPath();
  ctx.roundRect(width * 0.05, cy + height * 0.05, width * 0.9, height * 0.35, 6);
  ctx.fill();
  ctx.stroke();

  // Glands
  ctx.strokeStyle = '#FF69B4';
  ctx.lineWidth = 1.5;
  for (let i = 0; i < 5; i++) {
    const gx = width * 0.15 + i * width * 0.18;
    ctx.beginPath();
    ctx.moveTo(gx, cy + height * 0.08);
    ctx.bezierCurveTo(gx - 10, cy + height * 0.18, gx + 10, cy + height * 0.28, gx, cy + height * 0.38);
    ctx.stroke();
  }

  // Blastocyst hovering
  const bR = width * 0.14;
  ctx.fillStyle = '#FFF8DC';
  ctx.strokeStyle = '#DAA520';
  ctx.lineWidth = 2.5;
  ctx.beginPath();
  ctx.arc(cx, cy - height * 0.08, bR, 0, Math.PI * 2);
  ctx.fill();
  ctx.stroke();

  // Trophoblast cells on surface
  ctx.fillStyle = '#F4A460';
  for (let i = -2; i <= 2; i++) {
    ctx.beginPath();
    ctx.arc(cx + i * bR * 0.4, cy - height * 0.08 + bR, 5, 0, Math.PI * 2);
    ctx.fill();
  }

  // Gap arrow
  ctx.strokeStyle = '#666';
  ctx.lineWidth = 1.5;
  ctx.setLineDash([4, 3]);
  ctx.beginPath();
  ctx.moveTo(cx, cy - height * 0.08 + bR + 4);
  ctx.lineTo(cx, cy + height * 0.05);
  ctx.stroke();
  ctx.setLineDash([]);

  ctx.fillStyle = '#C71585';
  ctx.font = `${Math.max(10, width * 0.045)}px Arial`;
  ctx.textAlign = 'center';
  ctx.fillText('Apposition', cx, cy + height * 0.48);
}

static drawImplantationAdhesion(ctx, width, height) {
  const cx = width / 2, cy = height / 2;

  // Endometrium
  ctx.fillStyle = '#FFD0E0';
  ctx.strokeStyle = '#C71585';
  ctx.lineWidth = 2.5;
  ctx.beginPath();
  ctx.roundRect(width * 0.05, cy, width * 0.9, height * 0.4, 6);
  ctx.fill();
  ctx.stroke();

  // Blastocyst seated on surface
  const bR = width * 0.14;
  ctx.fillStyle = '#FFF8DC';
  ctx.strokeStyle = '#DAA520';
  ctx.lineWidth = 2.5;
  ctx.beginPath();
  ctx.arc(cx, cy - bR * 0.6, bR, 0, Math.PI * 2);
  ctx.fill();
  ctx.stroke();

  // ICM
  ctx.fillStyle = '#FFA500';
  ctx.beginPath();
  ctx.arc(cx + bR * 0.3, cy - bR * 0.8, bR * 0.3, 0, Math.PI * 2);
  ctx.fill();

  // Pinopodes (adhesion molecules on endometrium surface)
  ctx.fillStyle = '#FF1493';
  for (let i = -3; i <= 3; i++) {
    ctx.beginPath();
    ctx.arc(cx + i * width * 0.06, cy + 3, 4, 0, Math.PI * 2);
    ctx.fill();
  }

  // Integrin bridges
  ctx.strokeStyle = '#8B0000';
  ctx.lineWidth = 1.5;
  for (let i = -2; i <= 2; i++) {
    const tx = cx + i * bR * 0.4;
    ctx.beginPath();
    ctx.moveTo(tx, cy - bR * 0.6 + bR);
    ctx.lineTo(tx, cy + 2);
    ctx.stroke();
  }

  ctx.fillStyle = '#C71585';
  ctx.font = `${Math.max(10, width * 0.045)}px Arial`;
  ctx.textAlign = 'center';
  ctx.fillText('Adhesion', cx, cy + height * 0.48);
}

static drawImplantationInvasion(ctx, width, height) {
  const cx = width / 2, cy = height / 2;

  // Deep endometrium
  ctx.fillStyle = '#FFD0E0';
  ctx.strokeStyle = '#C71585';
  ctx.lineWidth = 2.5;
  ctx.beginPath();
  ctx.roundRect(width * 0.05, cy - height * 0.05, width * 0.9, height * 0.48, 6);
  ctx.fill();
  ctx.stroke();

  // Decidua cells
  ctx.fillStyle = '#FFB6C1';
  for (let r = 0; r < 3; r++) {
    for (let c = 0; c < 6; c++) {
      ctx.beginPath();
      ctx.arc(width * 0.12 + c * width * 0.15, cy + height * 0.12 + r * height * 0.1, 7, 0, Math.PI * 2);
      ctx.fill();
      ctx.strokeStyle = '#C71585';
      ctx.lineWidth = 1;
      ctx.stroke();
    }
  }

  // Blastocyst embedded
  const bR = width * 0.13;
  ctx.fillStyle = '#FFF8DC';
  ctx.strokeStyle = '#DAA520';
  ctx.lineWidth = 2.5;
  ctx.beginPath();
  ctx.arc(cx, cy - height * 0.02, bR, 0, Math.PI * 2);
  ctx.fill();
  ctx.stroke();

  // Syncytiotrophoblast invasion fingers
  ctx.fillStyle = 'rgba(139,0,0,0.5)';
  ctx.strokeStyle = '#8B0000';
  ctx.lineWidth = 2;
  for (let i = -3; i <= 3; i++) {
    const fx = cx + i * bR * 0.35;
    const depth = height * 0.12 + Math.abs(i) * height * 0.02;
    ctx.beginPath();
    ctx.moveTo(fx, cy - height * 0.02 + bR);
    ctx.lineTo(fx - 3, cy + depth);
    ctx.lineTo(fx + 3, cy + depth);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();
  }

  ctx.fillStyle = '#C71585';
  ctx.font = `${Math.max(10, width * 0.045)}px Arial`;
  ctx.textAlign = 'center';
  ctx.fillText('Invasion', cx, cy + height * 0.48);
}

// ─────────────────────────────────────────────

static drawMaleReproductiveSystem(ctx, x, y, width, height, view) {
  ctx.save();
  ctx.translate(x, y);

  switch (view) {
    case 'labeled':
      this.drawMaleReproductiveLabeled(ctx, width, height);
      break;
    case 'sagittal':
      this.drawMaleReproductiveSagittal(ctx, width, height);
      break;
    case 'schematic':
    default:
      this.drawMaleReproductiveSchematic(ctx, width, height);
  }

  ctx.restore();
}

static drawMaleReproductiveSchematic(ctx, width, height) {
  const cx = width / 2, cy = height / 2;

  // Bladder
  ctx.fillStyle = '#E0F0FF';
  ctx.strokeStyle = '#4169E1';
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.ellipse(cx, cy - height * 0.32, width * 0.18, height * 0.12, 0, 0, Math.PI * 2);
  ctx.fill();
  ctx.stroke();
  ctx.fillStyle = '#4169E1';
  ctx.font = `${Math.max(8, width * 0.038)}px Arial`;
  ctx.textAlign = 'right';
  ctx.fillText('Bladder', cx - width * 0.2, cy - height * 0.32);

  // Urethra
  ctx.strokeStyle = '#4169E1';
  ctx.lineWidth = 3;
  ctx.beginPath();
  ctx.moveTo(cx, cy - height * 0.2);
  ctx.bezierCurveTo(cx + width * 0.02, cy, cx + width * 0.02, cy + height * 0.15, cx, cy + height * 0.38);
  ctx.stroke();

  // Prostate
  ctx.fillStyle = '#FFDEAD';
  ctx.strokeStyle = '#D2691E';
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.ellipse(cx + width * 0.02, cy - height * 0.14, width * 0.1, height * 0.07, 0, 0, Math.PI * 2);
  ctx.fill();
  ctx.stroke();
  ctx.fillStyle = '#8B4513';
  ctx.textAlign = 'right';
  ctx.fillText('Prostate', cx - width * 0.1, cy - height * 0.14);

  // Seminal vesicles (bilateral)
  [-1, 1].forEach(side => {
    ctx.fillStyle = '#E6E6FA';
    ctx.strokeStyle = '#6A5ACD';
    ctx.lineWidth = 1.5;
    ctx.beginPath();
    ctx.ellipse(cx + side * width * 0.14, cy - height * 0.2, width * 0.06, height * 0.06, side * 0.5, 0, Math.PI * 2);
    ctx.fill();
    ctx.stroke();
  });
  ctx.fillStyle = '#6A5ACD';
  ctx.textAlign = 'left';
  ctx.fillText('Seminal vesicle', cx + width * 0.2, cy - height * 0.2);

  // Vas deferens (bilateral)
  [-1, 1].forEach(side => {
    ctx.strokeStyle = '#4682B4';
    ctx.lineWidth = 2.5;
    ctx.beginPath();
    ctx.moveTo(cx + side * width * 0.18, cy + height * 0.15);
    ctx.bezierCurveTo(
      cx + side * width * 0.2, cy - height * 0.05,
      cx + side * width * 0.14, cy - height * 0.15,
      cx + side * width * 0.1, cy - height * 0.16
    );
    ctx.stroke();
  });
  ctx.fillStyle = '#4682B4';
  ctx.textAlign = 'right';
  ctx.fillText('Vas deferens', cx - width * 0.22, cy + height * 0.05);

  // Epididymis (bilateral)
  [-1, 1].forEach(side => {
    ctx.strokeStyle = '#8B4513';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.arc(cx + side * width * 0.21, cy + height * 0.22, width * 0.04, 0, Math.PI * 1.5);
    ctx.stroke();
  });

  // Testes (bilateral)
  [-1, 1].forEach(side => {
    ctx.fillStyle = '#FFDAB9';
    ctx.strokeStyle = '#CD853F';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.ellipse(cx + side * width * 0.18, cy + height * 0.3, width * 0.08, height * 0.1, 0, 0, Math.PI * 2);
    ctx.fill();
    ctx.stroke();
  });
  ctx.fillStyle = '#CD853F';
  ctx.textAlign = 'left';
  ctx.fillText('Testis', cx + width * 0.28, cy + height * 0.3);

  // Scrotum outline
  ctx.strokeStyle = '#CD853F';
  ctx.lineWidth = 2;
  ctx.setLineDash([4, 3]);
  ctx.beginPath();
  ctx.ellipse(cx, cy + height * 0.32, width * 0.3, height * 0.18, 0, 0, Math.PI * 2);
  ctx.stroke();
  ctx.setLineDash([]);

  // Penis
  ctx.fillStyle = '#FFDAB9';
  ctx.strokeStyle = '#CD853F';
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.roundRect(cx - width * 0.05, cy + height * 0.05, width * 0.1, height * 0.28, 4);
  ctx.fill();
  ctx.stroke();

  ctx.fillStyle = '#333';
  ctx.font = `${Math.max(11, width * 0.05)}px Arial`;
  ctx.textAlign = 'center';
  ctx.fillText('Male Reproductive System', cx, height * 0.97);
}

static drawMaleReproductiveLabeled(ctx, width, height) {
  this.drawMaleReproductiveSchematic(ctx, width, height);
  // Additional callout lines for labeled view
  const cx = width / 2, cy = height / 2;
  ctx.strokeStyle = '#999';
  ctx.lineWidth = 1;

  const labels = [
    { x: cx, y: cy - height * 0.32, label: 'Urinary bladder', tx: -width * 0.38 },
    { x: cx, y: cy + height * 0.38, label: 'Urethral meatus', tx: width * 0.1 },
    { x: cx + width * 0.02, y: cy - height * 0.14, label: 'Prostate gland', tx: -width * 0.35 },
  ];
  labels.forEach(l => {
    ctx.beginPath();
    ctx.moveTo(l.x, l.y);
    ctx.lineTo(l.x + l.tx * 0.6, l.y);
    ctx.stroke();
    ctx.fillStyle = '#333';
    ctx.font = `${Math.max(8, width * 0.035)}px Arial`;
    ctx.textAlign = l.tx < 0 ? 'right' : 'left';
    ctx.fillText(l.label, l.x + l.tx, l.y - 3);
  });
}

static drawMaleReproductiveSagittal(ctx, width, height) {
  this.drawMaleReproductiveSchematic(ctx, width, height);
  // Sagittal cross-section overlay
  const cx = width / 2, cy = height / 2;
  ctx.strokeStyle = 'rgba(255,0,0,0.3)';
  ctx.lineWidth = 1.5;
  ctx.setLineDash([6, 4]);
  ctx.beginPath();
  ctx.moveTo(cx, height * 0.02);
  ctx.lineTo(cx, height * 0.95);
  ctx.stroke();
  ctx.setLineDash([]);

  ctx.fillStyle = 'rgba(255,0,0,0.5)';
  ctx.font = `${Math.max(8, width * 0.035)}px Arial`;
  ctx.textAlign = 'left';
  ctx.fillText('Sagittal plane', cx + 4, height * 0.06);
}

// ─────────────────────────────────────────────

static drawFemaleReproductiveSystem(ctx, x, y, width, height, view) {
  ctx.save();
  ctx.translate(x, y);

  switch (view) {
    case 'labeled':
      this.drawFemaleReproductiveLabeled(ctx, width, height);
      break;
    case 'sagittal':
      this.drawFemaleReproductiveSagittal(ctx, width, height);
      break;
    case 'schematic':
    default:
      this.drawFemaleReproductiveSchematic(ctx, width, height);
  }

  ctx.restore();
}

static drawFemaleReproductiveSchematic(ctx, width, height) {
  const cx = width / 2, cy = height / 2;

  // Uterus body
  ctx.fillStyle = '#FFB6C1';
  ctx.strokeStyle = '#C71585';
  ctx.lineWidth = 2.5;
  ctx.beginPath();
  ctx.moveTo(cx - width * 0.12, cy - height * 0.18);
  ctx.bezierCurveTo(cx - width * 0.16, cy - height * 0.05, cx - width * 0.15, cy + height * 0.08, cx - width * 0.06, cy + height * 0.14);
  ctx.lineTo(cx + width * 0.06, cy + height * 0.14);
  ctx.bezierCurveTo(cx + width * 0.15, cy + height * 0.08, cx + width * 0.16, cy - height * 0.05, cx + width * 0.12, cy - height * 0.18);
  ctx.closePath();
  ctx.fill();
  ctx.stroke();

  // Fundus arc
  ctx.fillStyle = '#FF69B4';
  ctx.beginPath();
  ctx.arc(cx, cy - height * 0.2, width * 0.12, Math.PI, 0);
  ctx.fill();
  ctx.stroke();

  // Fallopian tubes (bilateral)
  [-1, 1].forEach(side => {
    ctx.strokeStyle = '#FF69B4';
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.moveTo(cx + side * width * 0.12, cy - height * 0.16);
    ctx.bezierCurveTo(
      cx + side * width * 0.18, cy - height * 0.22,
      cx + side * width * 0.28, cy - height * 0.22,
      cx + side * width * 0.34, cy - height * 0.14
    );
    ctx.stroke();
    // Fimbriae
    ctx.strokeStyle = '#FF1493';
    ctx.lineWidth = 1.5;
    for (let f = -2; f <= 2; f++) {
      const fa = (f / 4) * 0.8;
      ctx.beginPath();
      ctx.moveTo(cx + side * width * 0.34, cy - height * 0.14);
      ctx.lineTo(
        cx + side * (width * 0.34 + Math.sin(fa) * 10),
        cy - height * 0.14 + Math.cos(fa) * 10
      );
      ctx.stroke();
    }
  });
  ctx.fillStyle = '#FF69B4';
  ctx.font = `${Math.max(8, width * 0.038)}px Arial`;
  ctx.textAlign = 'right';
  ctx.fillText('Fallopian tube', cx - width * 0.36, cy - height * 0.18);

  // Ovaries (bilateral)
  [-1, 1].forEach(side => {
    ctx.fillStyle = '#FFF0F5';
    ctx.strokeStyle = '#FF69B4';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.ellipse(cx + side * width * 0.36, cy - height * 0.05, width * 0.07, height * 0.09, 0.3, 0, Math.PI * 2);
    ctx.fill();
    ctx.stroke();
    // Follicle
    ctx.fillStyle = '#FFD700';
    ctx.beginPath();
    ctx.arc(cx + side * width * 0.36, cy - height * 0.05, width * 0.025, 0, Math.PI * 2);
    ctx.fill();
  });
  ctx.fillStyle = '#FF1493';
  ctx.textAlign = 'left';
  ctx.fillText('Ovary', cx + width * 0.44, cy - height * 0.05);

  // Cervix
  ctx.fillStyle = '#FFB6C1';
  ctx.strokeStyle = '#C71585';
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.roundRect(cx - width * 0.05, cy + height * 0.14, width * 0.1, height * 0.1, 3);
  ctx.fill();
  ctx.stroke();
  ctx.fillStyle = '#C71585';
  ctx.textAlign = 'right';
  ctx.fillText('Cervix', cx - width * 0.08, cy + height * 0.2);

  // Vagina
  ctx.fillStyle = '#FFB6C1';
  ctx.strokeStyle = '#C71585';
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.roundRect(cx - width * 0.06, cy + height * 0.24, width * 0.12, height * 0.18, 3);
  ctx.fill();
  ctx.stroke();
  ctx.fillStyle = '#C71585';
  ctx.textAlign = 'right';
  ctx.fillText('Vagina', cx - width * 0.1, cy + height * 0.33);

  ctx.fillStyle = '#333';
  ctx.font = `${Math.max(11, width * 0.05)}px Arial`;
  ctx.textAlign = 'center';
  ctx.fillText('Female Reproductive System', cx, height * 0.97);
}

static drawFemaleReproductiveLabeled(ctx, width, height) {
  this.drawFemaleReproductiveSchematic(ctx, width, height);
}

static drawFemaleReproductiveSagittal(ctx, width, height) {
  this.drawFemaleReproductiveSchematic(ctx, width, height);
  const cx = width / 2;
  ctx.strokeStyle = 'rgba(255,0,0,0.3)';
  ctx.lineWidth = 1.5;
  ctx.setLineDash([6, 4]);
  ctx.beginPath();
  ctx.moveTo(cx, height * 0.02);
  ctx.lineTo(cx, height * 0.95);
  ctx.stroke();
  ctx.setLineDash([]);
}

// ─────────────────────────────────────────────

static drawOvulation(ctx, x, y, width, height, stage) {
  ctx.save();
  ctx.translate(x, y);

  switch (stage) {
    case 'complete':
      this.drawOvulationComplete(ctx, width, height);
      break;
    case 'pre':
      this.drawOvulationPre(ctx, width, height);
      break;
    case 'rupture':
      this.drawOvulationRupture(ctx, width, height);
      break;
    case 'post':
      this.drawOvulationPost(ctx, width, height);
      break;
    default:
      this.drawOvulationComplete(ctx, width, height);
  }

  ctx.restore();
}

static drawOvulationComplete(ctx, width, height) {
  const stages = ['Pre-ovulation', 'Rupture', 'Post-ovulation'];
  const sw = width / 3;

  stages.forEach((label, i) => {
    const cx = sw * i + sw / 2;
    const cy = height / 2;

    // Ovary
    ctx.fillStyle = '#FFF0F5';
    ctx.strokeStyle = '#FF69B4';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.ellipse(cx, cy, sw * 0.36, height * 0.38, 0, 0, Math.PI * 2);
    ctx.fill();
    ctx.stroke();

    if (i === 0) {
      // Graafian follicle, bulging
      ctx.fillStyle = '#E0F0FF';
      ctx.strokeStyle = '#4682B4';
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.arc(cx + sw * 0.1, cy - height * 0.2, sw * 0.18, 0, Math.PI * 2);
      ctx.fill();
      ctx.stroke();
      // Oocyte
      ctx.fillStyle = '#FFD700';
      ctx.beginPath();
      ctx.arc(cx + sw * 0.1, cy - height * 0.2, sw * 0.06, 0, Math.PI * 2);
      ctx.fill();
    } else if (i === 1) {
      // Rupture
      ctx.fillStyle = 'rgba(224,240,255,0.4)';
      ctx.strokeStyle = '#DC143C';
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.arc(cx + sw * 0.1, cy - height * 0.22, sw * 0.18, 0, Math.PI * 2);
      ctx.fill();
      ctx.stroke();
      // Expelled oocyte
      ctx.fillStyle = '#FFD700';
      ctx.strokeStyle = '#DAA520';
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.arc(cx + sw * 0.28, cy - height * 0.3, sw * 0.07, 0, Math.PI * 2);
      ctx.fill();
      ctx.stroke();
      // Rupture lines
      ctx.strokeStyle = '#DC143C';
      ctx.lineWidth = 1.5;
      for (let r = -2; r <= 2; r++) {
        ctx.beginPath();
        ctx.moveTo(cx + sw * 0.2 + r * 4, cy - height * 0.28);
        ctx.lineTo(cx + sw * 0.23 + r * 5, cy - height * 0.18);
        ctx.stroke();
      }
    } else {
      // Corpus luteum forming
      ctx.fillStyle = '#FFD700';
      ctx.strokeStyle = '#B8860B';
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.arc(cx, cy - height * 0.15, sw * 0.15, 0, Math.PI * 2);
      ctx.fill();
      ctx.stroke();
    }

    ctx.fillStyle = '#333';
    ctx.font = `${Math.max(8, width * 0.028)}px Arial`;
    ctx.textAlign = 'center';
    ctx.fillText(label, cx, cy + height * 0.46);
  });

  ctx.fillStyle = '#C71585';
  ctx.font = `${Math.max(10, width * 0.045)}px Arial`;
  ctx.textAlign = 'center';
  ctx.fillText('Ovulation', width / 2, height * 0.97);
}

static drawOvulationPre(ctx, width, height) {
  const cx = width / 2, cy = height / 2;
  ctx.fillStyle = '#FFF0F5';
  ctx.strokeStyle = '#FF69B4';
  ctx.lineWidth = 3;
  ctx.beginPath();
  ctx.ellipse(cx, cy, width * 0.38, height * 0.4, 0, 0, Math.PI * 2);
  ctx.fill();
  ctx.stroke();

  // LH surge arrow
  ctx.strokeStyle = '#DC143C';
  ctx.fillStyle = '#DC143C';
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.moveTo(cx - width * 0.05, cy - height * 0.48);
  ctx.lineTo(cx - width * 0.05, cy - height * 0.38);
  ctx.stroke();
  ctx.beginPath();
  ctx.moveTo(cx - width * 0.05, cy - height * 0.38);
  ctx.lineTo(cx - width * 0.09, cy - height * 0.44);
  ctx.lineTo(cx - width * 0.01, cy - height * 0.44);
  ctx.closePath();
  ctx.fill();
  ctx.font = `${Math.max(9, width * 0.04)}px Arial`;
  ctx.textAlign = 'center';
  ctx.fillText('LH surge', cx - width * 0.05, cy - height * 0.48);

  // Graafian follicle
  ctx.fillStyle = '#E0F0FF';
  ctx.strokeStyle = '#4682B4';
  ctx.lineWidth = 3;
  ctx.beginPath();
  ctx.arc(cx + width * 0.08, cy - height * 0.18, width * 0.18, 0, Math.PI * 2);
  ctx.fill();
  ctx.stroke();

  ctx.fillStyle = '#FFD700';
  ctx.beginPath();
  ctx.arc(cx + width * 0.08, cy - height * 0.18, width * 0.06, 0, Math.PI * 2);
  ctx.fill();

  ctx.fillStyle = '#4682B4';
  ctx.font = `${Math.max(9, width * 0.04)}px Arial`;
  ctx.textAlign = 'center';
  ctx.fillText('Graafian Follicle', cx, cy + height * 0.46);
}

static drawOvulationRupture(ctx, width, height) {
  const cx = width / 2, cy = height / 2;
  ctx.fillStyle = '#FFF0F5';
  ctx.strokeStyle = '#FF69B4';
  ctx.lineWidth = 3;
  ctx.beginPath();
  ctx.ellipse(cx, cy, width * 0.38, height * 0.4, 0, 0, Math.PI * 2);
  ctx.fill();
  ctx.stroke();

  // Follicle rupturing
  ctx.strokeStyle = '#DC143C';
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.arc(cx + width * 0.08, cy - height * 0.2, width * 0.17, 0, Math.PI * 2);
  ctx.stroke();

  // Fluid burst lines
  for (let i = 0; i < 8; i++) {
    const angle = -0.5 + i * 0.15;
    ctx.beginPath();
    ctx.moveTo(cx + width * 0.08 + Math.cos(angle) * width * 0.17, cy - height * 0.2 + Math.sin(angle) * height * 0.17);
    ctx.lineTo(cx + width * 0.08 + Math.cos(angle) * width * 0.25, cy - height * 0.2 + Math.sin(angle) * height * 0.25);
    ctx.stroke();
  }

  // Oocyte + cumulus being expelled
  ctx.fillStyle = '#FFF8DC';
  ctx.strokeStyle = '#DAA520';
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.arc(cx + width * 0.32, cy - height * 0.34, width * 0.08, 0, Math.PI * 2);
  ctx.fill();
  ctx.stroke();
  ctx.fillStyle = '#FFD700';
  ctx.beginPath();
  ctx.arc(cx + width * 0.32, cy - height * 0.34, width * 0.04, 0, Math.PI * 2);
  ctx.fill();

  ctx.fillStyle = '#DC143C';
  ctx.font = `${Math.max(10, width * 0.045)}px Arial`;
  ctx.textAlign = 'center';
  ctx.fillText('Follicle Rupture', cx, cy + height * 0.46);
}

static drawOvulationPost(ctx, width, height) {
  const cx = width / 2, cy = height / 2;
  ctx.fillStyle = '#FFF0F5';
  ctx.strokeStyle = '#FF69B4';
  ctx.lineWidth = 3;
  ctx.beginPath();
  ctx.ellipse(cx, cy, width * 0.38, height * 0.4, 0, 0, Math.PI * 2);
  ctx.fill();
  ctx.stroke();

  // Corpus luteum forming
  ctx.fillStyle = '#FFD700';
  ctx.strokeStyle = '#B8860B';
  ctx.lineWidth = 2.5;
  ctx.beginPath();
  ctx.arc(cx, cy - height * 0.12, width * 0.15, 0, Math.PI * 2);
  ctx.fill();
  ctx.stroke();
  ctx.fillStyle = '#FFA500';
  ctx.beginPath();
  ctx.arc(cx, cy - height * 0.12, width * 0.06, 0, Math.PI * 2);
  ctx.fill();

  ctx.fillStyle = '#B8860B';
  ctx.font = `${Math.max(9, width * 0.04)}px Arial`;
  ctx.textAlign = 'center';
  ctx.fillText('Corpus Luteum', cx + width * 0.02, cy + height * 0.46);
}

// ─────────────────────────────────────────────

static drawPregnancy(ctx, x, y, width, height, trimester) {
  ctx.save();
  ctx.translate(x, y);

  switch (trimester) {
    case 'complete':
      this.drawPregnancyComplete(ctx, width, height);
      break;
    case 'first':
      this.drawPregnancyFirst(ctx, width, height);
      break;
    case 'second':
      this.drawPregnancySecond(ctx, width, height);
      break;
    case 'third':
      this.drawPregnancyThird(ctx, width, height);
      break;
    default:
      this.drawPregnancyComplete(ctx, width, height);
  }

  ctx.restore();
}

static drawPregnancyComplete(ctx, width, height) {
  const trimesters = ['1st Trimester', '2nd Trimester', '3rd Trimester'];
  const sw = width / 3;
  const fetusSizes = [0.06, 0.12, 0.22];
  const uterusSizes = [0.16, 0.26, 0.38];

  trimesters.forEach((label, i) => {
    const cx = sw * i + sw / 2;
    const cy = height / 2;
    const uR = uterusSizes[i];
    const fR = fetusSizes[i];

    // Uterus
    ctx.fillStyle = 'rgba(255,182,193,0.4)';
    ctx.strokeStyle = '#C71585';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.ellipse(cx, cy, width * uR, height * (uR * 1.1), 0, 0, Math.PI * 2);
    ctx.fill();
    ctx.stroke();

    // Fetus silhouette
    ctx.fillStyle = 'rgba(255,160,122,0.8)';
    ctx.strokeStyle = '#CD853F';
    ctx.lineWidth = 1.5;
    // Body
    ctx.beginPath();
    ctx.ellipse(cx, cy, width * fR, height * fR * 1.3, i === 2 ? 0.3 : 0, 0, Math.PI * 2);
    ctx.fill();
    ctx.stroke();
    // Head
    ctx.beginPath();
    ctx.arc(cx + (i === 2 ? width * fR * 0.6 : 0), cy - height * fR * 1.0, width * fR * 0.7, 0, Math.PI * 2);
    ctx.fill();
    ctx.stroke();

    // Week labels
    const weeks = ['Wk 1–12', 'Wk 13–26', 'Wk 27–40'];
    ctx.fillStyle = '#888';
    ctx.font = `${Math.max(8, width * 0.028)}px Arial`;
    ctx.textAlign = 'center';
    ctx.fillText(weeks[i], cx, cy + height * uR * 1.3 + 14);
    ctx.fillStyle = '#333';
    ctx.font = `${Math.max(9, width * 0.032)}px Arial`;
    ctx.fillText(label, cx, cy + height * uR * 1.3 + 28);
  });

  ctx.fillStyle = '#C71585';
  ctx.font = `${Math.max(11, width * 0.05)}px Arial`;
  ctx.textAlign = 'center';
  ctx.fillText('Pregnancy Trimesters', width / 2, height * 0.97);
}

static drawPregnancyFirst(ctx, width, height) {
  const cx = width / 2, cy = height / 2;
  // Uterus (small)
  ctx.fillStyle = 'rgba(255,182,193,0.5)';
  ctx.strokeStyle = '#C71585';
  ctx.lineWidth = 2.5;
  ctx.beginPath();
  ctx.ellipse(cx, cy, width * 0.22, height * 0.26, 0, 0, Math.PI * 2);
  ctx.fill();
  ctx.stroke();

  // Embryo ~8wk
  ctx.fillStyle = 'rgba(255,160,122,0.9)';
  ctx.strokeStyle = '#CD853F';
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.ellipse(cx, cy + height * 0.04, width * 0.05, height * 0.07, 0.2, 0, Math.PI * 2);
  ctx.fill();
  ctx.stroke();
  ctx.beginPath();
  ctx.arc(cx + width * 0.04, cy - height * 0.04, width * 0.04, 0, Math.PI * 2);
  ctx.fill();
  ctx.stroke();

  // Yolk sac
  ctx.fillStyle = 'rgba(255,250,200,0.8)';
  ctx.strokeStyle = '#DAA520';
  ctx.lineWidth = 1.5;
  ctx.beginPath();
  ctx.arc(cx - width * 0.1, cy, width * 0.04, 0, Math.PI * 2);
  ctx.fill();
  ctx.stroke();

  ctx.fillStyle = '#C71585';
  ctx.font = `${Math.max(10, width * 0.05)}px Arial`;
  ctx.textAlign = 'center';
  ctx.fillText('First Trimester (~8 wks)', cx, cy + height * 0.42);
}

static drawPregnancySecond(ctx, width, height) {
  const cx = width / 2, cy = height / 2;
  ctx.fillStyle = 'rgba(255,182,193,0.5)';
  ctx.strokeStyle = '#C71585';
  ctx.lineWidth = 2.5;
  ctx.beginPath();
  ctx.ellipse(cx, cy, width * 0.34, height * 0.4, 0, 0, Math.PI * 2);
  ctx.fill();
  ctx.stroke();

  // Fetus ~20wk
  ctx.fillStyle = 'rgba(255,160,122,0.9)';
  ctx.strokeStyle = '#CD853F';
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.ellipse(cx, cy + height * 0.05, width * 0.1, height * 0.18, 0, 0, Math.PI * 2);
  ctx.fill();
  ctx.stroke();
  ctx.beginPath();
  ctx.arc(cx, cy - height * 0.14, width * 0.08, 0, Math.PI * 2);
  ctx.fill();
  ctx.stroke();

  // Placenta
  ctx.fillStyle = '#DC143C';
  ctx.beginPath();
  ctx.ellipse(cx - width * 0.22, cy - height * 0.1, width * 0.1, height * 0.08, -0.5, 0, Math.PI * 2);
  ctx.fill();

  // Umbilical cord
  ctx.strokeStyle = '#00CED1';
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.moveTo(cx - width * 0.12, cy - height * 0.1);
  ctx.bezierCurveTo(cx - width * 0.1, cy - height * 0.02, cx - width * 0.06, cy, cx, cy + height * 0.04);
  ctx.stroke();

  ctx.fillStyle = '#C71585';
  ctx.font = `${Math.max(10, width * 0.05)}px Arial`;
  ctx.textAlign = 'center';
  ctx.fillText('Second Trimester (~20 wks)', cx, cy + height * 0.47);
}

static drawPregnancyThird(ctx, width, height) {
  const cx = width / 2, cy = height / 2;
  ctx.fillStyle = 'rgba(255,182,193,0.5)';
  ctx.strokeStyle = '#C71585';
  ctx.lineWidth = 3;
  ctx.beginPath();
  ctx.ellipse(cx, cy, width * 0.44, height * 0.46, 0, 0, Math.PI * 2);
  ctx.fill();
  ctx.stroke();

  // Full-term fetus (cephalic/head-down)
  ctx.fillStyle = 'rgba(255,160,122,0.9)';
  ctx.strokeStyle = '#CD853F';
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.ellipse(cx + width * 0.06, cy + height * 0.04, width * 0.14, height * 0.26, 0.2, 0, Math.PI * 2);
  ctx.fill();
  ctx.stroke();
  // Head (lower, engaged)
  ctx.beginPath();
  ctx.arc(cx + width * 0.04, cy + height * 0.28, width * 0.1, 0, Math.PI * 2);
  ctx.fill();
  ctx.stroke();

  // Limbs
  ctx.strokeStyle = '#CD853F';
  ctx.lineWidth = 3;
  ctx.beginPath();
  ctx.moveTo(cx + width * 0.16, cy - height * 0.08);
  ctx.lineTo(cx + width * 0.28, cy - height * 0.18);
  ctx.stroke();
  ctx.beginPath();
  ctx.moveTo(cx - width * 0.06, cy - height * 0.08);
  ctx.lineTo(cx - width * 0.2, cy - height * 0.18);
  ctx.stroke();

  // Placenta (fundal)
  ctx.fillStyle = '#DC143C';
  ctx.beginPath();
  ctx.ellipse(cx, cy - height * 0.38, width * 0.18, height * 0.07, 0, 0, Math.PI * 2);
  ctx.fill();

  ctx.fillStyle = '#C71585';
  ctx.font = `${Math.max(10, width * 0.05)}px Arial`;
  ctx.textAlign = 'center';
  ctx.fillText('Third Trimester (~36 wks)', cx, cy + height * 0.47);
}

// ─────────────────────────────────────────────

static drawParturition(ctx, x, y, width, height, stage) {
  ctx.save();
  ctx.translate(x, y);

  switch (stage) {
    case 'complete':
      this.drawParturitionComplete(ctx, width, height);
      break;
    case 'latent':
      this.drawParturitionLatent(ctx, width, height);
      break;
    case 'active':
      this.drawParturitionActive(ctx, width, height);
      break;
    case 'transition':
      this.drawParturitionTransition(ctx, width, height);
      break;
    case 'delivery':
      this.drawParturitionDelivery(ctx, width, height);
      break;
    default:
      this.drawParturitionComplete(ctx, width, height);
  }

  ctx.restore();
}

static drawParturitionComplete(ctx, width, height) {
  const stages = ['Latent', 'Active', 'Delivery'];
  const sw = width / 3;
  const dilations = [3, 6, 10];

  stages.forEach((label, i) => {
    const cx = sw * i + sw / 2;
    const cy = height / 2;
    const dil = dilations[i];

    // Pelvis outline
    ctx.fillStyle = 'rgba(255,228,196,0.5)';
    ctx.strokeStyle = '#CD853F';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.ellipse(cx, cy, sw * 0.4, height * 0.4, 0, 0, Math.PI * 2);
    ctx.fill();
    ctx.stroke();

    // Uterus wall
    ctx.strokeStyle = '#C71585';
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.arc(cx, cy - height * 0.05, sw * 0.3, 0, Math.PI * 2);
    ctx.stroke();

    // Cervical dilation (opening at bottom of uterus)
    const openW = (dil / 10) * sw * 0.22;
    ctx.fillStyle = '#FFB6C1';
    ctx.beginPath();
    ctx.ellipse(cx, cy + height * 0.18, openW, height * 0.04, 0, 0, Math.PI * 2);
    ctx.fill();

    ctx.strokeStyle = '#C71585';
    ctx.lineWidth = 1.5;
    ctx.beginPath();
    ctx.moveTo(cx - openW, cy + height * 0.14);
    ctx.lineTo(cx - openW, cy + height * 0.22);
    ctx.moveTo(cx + openW, cy + height * 0.14);
    ctx.lineTo(cx + openW, cy + height * 0.22);
    ctx.stroke();

    // Fetus head
    if (i < 2) {
      ctx.fillStyle = 'rgba(255,160,122,0.9)';
      ctx.strokeStyle = '#CD853F';
      ctx.lineWidth = 1.5;
      ctx.beginPath();
      ctx.arc(cx, cy + height * 0.06, sw * 0.14, 0, Math.PI * 2);
      ctx.fill();
      ctx.stroke();
    }

    // Dilation label
    ctx.fillStyle = '#C71585';
    ctx.font = `${Math.max(8, width * 0.028)}px Arial`;
    ctx.textAlign = 'center';
    ctx.fillText(`${dil} cm`, cx, cy + height * 0.35);
    ctx.fillStyle = '#333';
    ctx.font = `${Math.max(8, width * 0.028)}px Arial`;
    ctx.fillText(label, cx, cy + height * 0.44);
  });

  ctx.fillStyle = '#8B4513';
  ctx.font = `${Math.max(11, width * 0.05)}px Arial`;
  ctx.textAlign = 'center';
  ctx.fillText('Parturition (Labor & Birth)', width / 2, height * 0.97);
}

static drawParturitionLatent(ctx, width, height) {
  const cx = width / 2, cy = height / 2;
  // Uterus with early contractions
  ctx.fillStyle = 'rgba(255,182,193,0.5)';
  ctx.strokeStyle = '#C71585';
  ctx.lineWidth = 3;
  ctx.beginPath();
  ctx.ellipse(cx, cy, width * 0.35, height * 0.42, 0, 0, Math.PI * 2);
  ctx.fill();
  ctx.stroke();

  // Cervix barely dilated
  ctx.fillStyle = '#FFB6C1';
  ctx.beginPath();
  ctx.ellipse(cx, cy + height * 0.32, width * 0.04, height * 0.04, 0, 0, Math.PI * 2);
  ctx.fill();
  ctx.stroke();

  // Contraction arrows
  ctx.strokeStyle = '#DC143C';
  ctx.fillStyle = '#DC143C';
  ctx.lineWidth = 2;
  [[-0.28, 0], [0.28, 0], [0, -0.38], [0, 0.38]].forEach(([dx, dy]) => {
    const arrX = cx + dx * width;
    const arrY = cy + dy * height;
    const toX = cx + dx * width * 0.55;
    const toY = cy + dy * height * 0.55;
    ctx.beginPath();
    ctx.moveTo(arrX, arrY);
    ctx.lineTo(toX, toY);
    ctx.stroke();
  });

  ctx.fillStyle = '#C71585';
  ctx.font = `${Math.max(10, width * 0.05)}px Arial`;
  ctx.textAlign = 'center';
  ctx.fillText('Latent Phase (0–3 cm)', cx, cy + height * 0.47);
}

static drawParturitionActive(ctx, width, height) {
  const cx = width / 2, cy = height / 2;
  ctx.fillStyle = 'rgba(255,182,193,0.5)';
  ctx.strokeStyle = '#C71585';
  ctx.lineWidth = 3;
  ctx.beginPath();
  ctx.ellipse(cx, cy, width * 0.35, height * 0.42, 0, 0, Math.PI * 2);
  ctx.fill();
  ctx.stroke();

  // 6cm dilation
  ctx.fillStyle = '#FFB6C1';
  ctx.beginPath();
  ctx.ellipse(cx, cy + height * 0.32, width * 0.1, height * 0.04, 0, 0, Math.PI * 2);
  ctx.fill();

  // Fetus descended
  ctx.fillStyle = 'rgba(255,160,122,0.9)';
  ctx.strokeStyle = '#CD853F';
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.ellipse(cx, cy + height * 0.06, width * 0.1, height * 0.16, 0, 0, Math.PI * 2);
  ctx.fill();
  ctx.stroke();
  ctx.beginPath();
  ctx.arc(cx, cy + height * 0.24, width * 0.09, 0, Math.PI * 2);
  ctx.fill();
  ctx.stroke();

  ctx.fillStyle = '#C71585';
  ctx.font = `${Math.max(10, width * 0.05)}px Arial`;
  ctx.textAlign = 'center';
  ctx.fillText('Active Phase (4–7 cm)', cx, cy + height * 0.47);
}

static drawParturitionTransition(ctx, width, height) {
  const cx = width / 2, cy = height / 2;
  ctx.fillStyle = 'rgba(255,182,193,0.5)';
  ctx.strokeStyle = '#C71585';
  ctx.lineWidth = 3;
  ctx.beginPath();
  ctx.ellipse(cx, cy, width * 0.35, height * 0.42, 0, 0, Math.PI * 2);
  ctx.fill();
  ctx.stroke();

  // 10cm full dilation
  ctx.fillStyle = '#FFB6C1';
  ctx.beginPath();
  ctx.ellipse(cx, cy + height * 0.32, width * 0.18, height * 0.04, 0, 0, Math.PI * 2);
  ctx.fill();

  // Head crowning
  ctx.fillStyle = 'rgba(255,160,122,0.9)';
  ctx.strokeStyle = '#CD853F';
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.arc(cx, cy + height * 0.32, width * 0.14, 0, Math.PI * 2);
  ctx.fill();
  ctx.stroke();

  ctx.fillStyle = '#C71585';
  ctx.font = `${Math.max(10, width * 0.05)}px Arial`;
  ctx.textAlign = 'center';
  ctx.fillText('Transition (8–10 cm)', cx, cy + height * 0.47);
}

static drawParturitionDelivery(ctx, width, height) {
  const cx = width / 2, cy = height / 2;

  // Birth canal
  ctx.fillStyle = '#FFE4E1';
  ctx.strokeStyle = '#C71585';
  ctx.lineWidth = 2.5;
  ctx.beginPath();
  ctx.moveTo(cx - width * 0.22, cy - height * 0.35);
  ctx.bezierCurveTo(cx - width * 0.28, cy, cx - width * 0.26, cy + height * 0.15, cx - width * 0.15, cy + height * 0.38);
  ctx.lineTo(cx + width * 0.15, cy + height * 0.38);
  ctx.bezierCurveTo(cx + width * 0.26, cy + height * 0.15, cx + width * 0.28, cy, cx + width * 0.22, cy - height * 0.35);
  ctx.closePath();
  ctx.fill();
  ctx.stroke();

  // Baby emerging
  ctx.fillStyle = 'rgba(255,160,122,0.95)';
  ctx.strokeStyle = '#CD853F';
  ctx.lineWidth = 2.5;
  ctx.beginPath();
  ctx.arc(cx, cy + height * 0.25, width * 0.14, 0, Math.PI * 2);
  ctx.fill();
  ctx.stroke();
  ctx.beginPath();
  ctx.ellipse(cx, cy + height * 0.06, width * 0.1, height * 0.2, 0, 0, Math.PI * 2);
  ctx.fill();
  ctx.stroke();

  ctx.fillStyle = '#C71585';
  ctx.font = `${Math.max(10, width * 0.05)}px Arial`;
  ctx.textAlign = 'center';
  ctx.fillText('Delivery', cx, cy + height * 0.47);
}

// ─────────────────────────────────────────────

static drawLactation(ctx, x, y, width, height, view) {
  ctx.save();
  ctx.translate(x, y);

  switch (view) {
    case 'complete':
      this.drawLactationComplete(ctx, width, height);
      break;
    case 'anatomy':
      this.drawLactationAnatomy(ctx, width, height);
      break;
    case 'hormones':
      this.drawLactationHormones(ctx, width, height);
      break;
    case 'letdown':
      this.drawLactationLetdown(ctx, width, height);
      break;
    default:
      this.drawLactationComplete(ctx, width, height);
  }

  ctx.restore();
}

static drawLactationComplete(ctx, width, height) {
  const cx = width / 2, cy = height / 2;

  // Breast cross-section (left half of canvas)
  const bx = cx * 0.55;

  // Skin boundary
  ctx.fillStyle = '#FFDAB9';
  ctx.strokeStyle = '#CD853F';
  ctx.lineWidth = 2.5;
  ctx.beginPath();
  ctx.arc(bx, cy, width * 0.3, 0, Math.PI * 2);
  ctx.fill();
  ctx.stroke();

  // Fatty tissue
  ctx.fillStyle = '#FFF0D0';
  ctx.beginPath();
  ctx.arc(bx, cy, width * 0.26, 0, Math.PI * 2);
  ctx.fill();

  // Lobules (milk-producing)
  ctx.fillStyle = '#FFE4E1';
  ctx.strokeStyle = '#C71585';
  ctx.lineWidth = 1.5;
  for (let i = 0; i < 6; i++) {
    const angle = (i / 6) * Math.PI * 2;
    const lx = bx + Math.cos(angle) * width * 0.14;
    const ly = cy + Math.sin(angle) * height * 0.14;
    ctx.beginPath();
    ctx.ellipse(lx, ly, width * 0.05, height * 0.05, angle, 0, Math.PI * 2);
    ctx.fill();
    ctx.stroke();
  }

  // Lactiferous ducts
  ctx.strokeStyle = '#4169E1';
  ctx.lineWidth = 2;
  for (let i = 0; i < 6; i++) {
    const angle = (i / 6) * Math.PI * 2;
    ctx.beginPath();
    ctx.moveTo(bx + Math.cos(angle) * width * 0.11, cy + Math.sin(angle) * height * 0.11);
    ctx.lineTo(bx + Math.cos(angle) * width * 0.04, cy + Math.sin(angle) * height * 0.04);
    ctx.stroke();
  }

  // Nipple/areola
  ctx.fillStyle = '#C67B5E';
  ctx.beginPath();
  ctx.arc(bx + width * 0.28, cy, width * 0.04, 0, Math.PI * 2);
  ctx.fill();

  // Milk droplets
  ctx.fillStyle = '#F0F8FF';
  ctx.strokeStyle = '#87CEEB';
  ctx.lineWidth = 1;
  [0, -8, 8].forEach((oy, i) => {
    ctx.beginPath();
    ctx.arc(bx + width * 0.36 + i * 4, cy + oy, 4, 0, Math.PI * 2);
    ctx.fill();
    ctx.stroke();
  });

  // Hormone feedback chart (right half)
  const chartX = cx * 1.3;
  const hormones = [
    { name: 'Prolactin', color: '#9370DB', y: cy - height * 0.22 },
    { name: 'Oxytocin', color: '#DC143C', y: cy - height * 0.06 },
    { name: 'Estrogen ↓', color: '#228B22', y: cy + height * 0.1 },
  ];
  hormones.forEach(h => {
    ctx.fillStyle = h.color;
    ctx.fillRect(chartX - width * 0.12, h.y - 8, 12, 12);
    ctx.font = `${Math.max(8, width * 0.035)}px Arial`;
    ctx.textAlign = 'left';
    ctx.fillText(h.name, chartX - width * 0.06, h.y + 4);
  });

  ctx.fillStyle = '#333';
  ctx.font = `${Math.max(11, width * 0.05)}px Arial`;
  ctx.textAlign = 'center';
  ctx.fillText('Lactation', cx, height * 0.97);
}

static drawLactationAnatomy(ctx, width, height) {
  const cx = width / 2, cy = height / 2;

  ctx.fillStyle = '#FFDAB9';
  ctx.strokeStyle = '#CD853F';
  ctx.lineWidth = 2.5;
  ctx.beginPath();
  ctx.arc(cx, cy, width * 0.38, 0, Math.PI * 2);
  ctx.fill();
  ctx.stroke();

  // Sections
  const alveoli = [
    [cx - 0.12 * width, cy - 0.15 * height],
    [cx + 0.12 * width, cy - 0.15 * height],
    [cx - 0.18 * width, cy + 0.05 * height],
    [cx + 0.18 * width, cy + 0.05 * height],
    [cx, cy + 0.2 * height],
    [cx - 0.08 * width, cy - 0.02 * height],
  ];
  ctx.fillStyle = '#FFE4E1';
  ctx.strokeStyle = '#C71585';
  ctx.lineWidth = 1.5;
  alveoli.forEach(([ax, ay]) => {
    ctx.beginPath();
    ctx.arc(ax, ay, width * 0.055, 0, Math.PI * 2);
    ctx.fill();
    ctx.stroke();
  });

  // Ducts converging to nipple
  ctx.strokeStyle = '#4169E1';
  ctx.lineWidth = 2.5;
  alveoli.forEach(([ax, ay]) => {
    ctx.beginPath();
    ctx.moveTo(ax, ay);
    ctx.quadraticCurveTo((ax + cx + width * 0.34) / 2, (ay + cy) / 2, cx + width * 0.34, cy);
    ctx.stroke();
  });

  // Nipple
  ctx.fillStyle = '#C67B5E';
  ctx.beginPath();
  ctx.arc(cx + width * 0.36, cy, width * 0.04, 0, Math.PI * 2);
  ctx.fill();

  ctx.fillStyle = '#C71585';
  ctx.font = `${Math.max(10, width * 0.05)}px Arial`;
  ctx.textAlign = 'center';
  ctx.fillText('Mammary Gland Anatomy', cx, cy + height * 0.46);
}

static drawLactationHormones(ctx, width, height) {
  const cx = width / 2, cy = height / 2;
  const dayW = width / 12;

  const hormoneData = [
    { name: 'Prolactin', color: '#9370DB', fn: (d) => d < 3 ? 90 - d * 10 : 60 + Math.sin(d) * 15 },
    { name: 'Oxytocin', color: '#DC143C', fn: (d) => d < 1 ? 20 : 50 + Math.sin(d * 3) * 30 },
    { name: 'Estrogen', color: '#228B22', fn: (d) => d < 4 ? 10 : 10 + d * 5 },
  ];

  hormoneData.forEach(h => {
    ctx.strokeStyle = h.color;
    ctx.lineWidth = 2.5;
    ctx.beginPath();
    for (let d = 0; d <= 12; d++) {
      const px = d * dayW;
      const py = height * 0.85 - h.fn(d) * height * 0.007;
      d === 0 ? ctx.moveTo(px, py) : ctx.lineTo(px, py);
    }
    ctx.stroke();
  });

  // Axes
  ctx.strokeStyle = '#333';
  ctx.lineWidth = 1.5;
  ctx.beginPath();
  ctx.moveTo(0, height * 0.85);
  ctx.lineTo(width, height * 0.85);
  ctx.moveTo(0, 0);
  ctx.lineTo(0, height * 0.85);
  ctx.stroke();

  ctx.fillStyle = '#333';
  ctx.font = `${Math.max(9, width * 0.042)}px Arial`;
  ctx.textAlign = 'center';
  ctx.fillText('Months postpartum', cx, height * 0.97);
  ctx.textAlign = 'left';
  ctx.fillText('0', 2, height * 0.85 + 14);
  ctx.fillText('6', width * 0.5, height * 0.85 + 14);
  ctx.fillText('12', width * 0.95, height * 0.85 + 14);

  // Legend
  let ly = 20;
  hormoneData.forEach(h => {
    ctx.fillStyle = h.color;
    ctx.fillRect(width - 110, ly, 12, 12);
    ctx.fillStyle = '#333';
    ctx.font = `${Math.max(9, width * 0.038)}px Arial`;
    ctx.textAlign = 'left';
    ctx.fillText(h.name, width - 94, ly + 11);
    ly += 18;
  });
}

static drawLactationLetdown(ctx, width, height) {
  const cx = width / 2, cy = height / 2;

  // Suckling stimulus
  ctx.fillStyle = '#FFF0E0';
  ctx.strokeStyle = '#CD853F';
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.arc(cx - width * 0.32, cy, width * 0.1, 0, Math.PI * 2);
  ctx.fill();
  ctx.stroke();
  ctx.fillStyle = '#CD853F';
  ctx.font = `${Math.max(9, width * 0.04)}px Arial`;
  ctx.textAlign = 'center';
  ctx.fillText("Infant", cx - width * 0.32, cy + height * 0.15);

  // Nerve signal arrow to brain
  ctx.strokeStyle = '#FF8C00';
  ctx.lineWidth = 2;
  ctx.setLineDash([5, 3]);
  ctx.beginPath();
  ctx.moveTo(cx - width * 0.22, cy - height * 0.04);
  ctx.bezierCurveTo(cx, cy - height * 0.3, cx + width * 0.1, cy - height * 0.4, cx + width * 0.28, cy - height * 0.35);
  ctx.stroke();
  ctx.setLineDash([]);

  // Hypothalamus/pituitary
  ctx.fillStyle = '#E6E6FA';
  ctx.strokeStyle = '#6A5ACD';
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.ellipse(cx + width * 0.3, cy - height * 0.32, width * 0.1, height * 0.08, 0, 0, Math.PI * 2);
  ctx.fill();
  ctx.stroke();
  ctx.fillStyle = '#483D8B';
  ctx.font = `${Math.max(8, width * 0.035)}px Arial`;
  ctx.fillText('Pituitary', cx + width * 0.3, cy - height * 0.3);

  // Oxytocin release arrow
  ctx.strokeStyle = '#DC143C';
  ctx.lineWidth = 2.5;
  ctx.beginPath();
  ctx.moveTo(cx + width * 0.3, cy - height * 0.24);
  ctx.bezierCurveTo(cx + width * 0.25, cy, cx + width * 0.1, cy + height * 0.12, cx, cy + height * 0.15);
  ctx.stroke();
  ctx.fillStyle = '#DC143C';
  ctx.fillText('Oxytocin', cx + width * 0.28, cy - height * 0.1);

  // Breast milk ejection
  ctx.fillStyle = '#FFDAB9';
  ctx.strokeStyle = '#CD853F';
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.arc(cx, cy, width * 0.15, 0, Math.PI * 2);
  ctx.fill();
  ctx.stroke();
  // Milk drops
  ctx.fillStyle = 'rgba(255,255,255,0.9)';
  ctx.strokeStyle = '#87CEEB';
  ctx.lineWidth = 1;
  [-5, 0, 5].forEach((oy, i) => {
    ctx.beginPath();
    ctx.arc(cx - width * 0.18 - i * 6, cy + oy * 2, 4, 0, Math.PI * 2);
    ctx.fill();
    ctx.stroke();
  });

  ctx.fillStyle = '#C71585';
  ctx.font = `${Math.max(10, width * 0.05)}px Arial`;
  ctx.textAlign = 'center';
  ctx.fillText('Let-Down Reflex', cx, cy + height * 0.46);
}

// ─────────────────────────────────────────────

static drawContraception(ctx, x, y, width, height, method) {
  ctx.save();
  ctx.translate(x, y);

  switch (method) {
    case 'complete':
      this.drawContraceptionComplete(ctx, width, height);
      break;
    case 'barrier':
      this.drawContraceptionBarrier(ctx, width, height);
      break;
    case 'hormonal':
      this.drawContraceptionHormonal(ctx, width, height);
      break;
    case 'iud':
      this.drawContraceptionIUD(ctx, width, height);
      break;
    case 'sterilization':
      this.drawContraceptionSterilization(ctx, width, height);
      break;
    default:
      this.drawContraceptionComplete(ctx, width, height);
  }

  ctx.restore();
}

static drawContraceptionComplete(ctx, width, height) {
  const methods = ['Barrier', 'Hormonal', 'IUD', 'Sterilization'];
  const sw = width / 4;

  methods.forEach((label, i) => {
    const cx = sw * i + sw / 2;
    const cy = height * 0.42;

    // Panel background
    ctx.fillStyle = '#F8F8FF';
    ctx.strokeStyle = '#9370DB';
    ctx.lineWidth = 1.5;
    ctx.beginPath();
    ctx.roundRect(cx - sw * 0.42, height * 0.06, sw * 0.84, height * 0.7, 6);
    ctx.fill();
    ctx.stroke();

    // Icon per method
    ctx.strokeStyle = '#6A5ACD';
    ctx.fillStyle = '#E6E6FA';
    ctx.lineWidth = 2;

    if (i === 0) {
      // Condom outline
      ctx.beginPath();
      ctx.roundRect(cx - sw * 0.12, cy - height * 0.22, sw * 0.24, height * 0.3, [sw * 0.12, sw * 0.12, 0, 0]);
      ctx.fill();
      ctx.stroke();
      ctx.fillStyle = '#9370DB';
      ctx.beginPath();
      ctx.arc(cx, cy - height * 0.22, sw * 0.07, 0, Math.PI * 2);
      ctx.fill();
    } else if (i === 1) {
      // Pill pack
      for (let r = 0; r < 2; r++) {
        for (let c = 0; c < 3; c++) {
          ctx.beginPath();
          ctx.arc(cx - sw * 0.1 + c * sw * 0.1, cy - height * 0.12 + r * height * 0.1, sw * 0.04, 0, Math.PI * 2);
          ctx.fill();
          ctx.stroke();
        }
      }
    } else if (i === 2) {
      // IUD T-shape
      ctx.lineWidth = 4;
      ctx.strokeStyle = '#4169E1';
      ctx.beginPath();
      ctx.moveTo(cx - sw * 0.15, cy - height * 0.12);
      ctx.lineTo(cx + sw * 0.15, cy - height * 0.12);
      ctx.moveTo(cx, cy - height * 0.12);
      ctx.lineTo(cx, cy + height * 0.1);
      ctx.stroke();
    } else {
      // Tube tied (X)
      ctx.strokeStyle = '#DC143C';
      ctx.lineWidth = 3;
      ctx.beginPath();
      ctx.moveTo(cx - sw * 0.2, cy - height * 0.12);
      ctx.bezierCurveTo(cx - sw * 0.05, cy, cx + sw * 0.05, cy, cx + sw * 0.2, cy - height * 0.12);
      ctx.stroke();
      // Ligature
      ctx.strokeStyle = '#8B0000';
      ctx.lineWidth = 4;
      ctx.beginPath();
      ctx.arc(cx, cy, sw * 0.04, 0, Math.PI * 2);
      ctx.stroke();
    }

    ctx.fillStyle = '#333';
    ctx.font = `${Math.max(9, width * 0.03)}px Arial`;
    ctx.textAlign = 'center';
    ctx.fillText(label, cx, cy + height * 0.3);
  });

  ctx.fillStyle = '#6A5ACD';
  ctx.font = `${Math.max(11, width * 0.05)}px Arial`;
  ctx.textAlign = 'center';
  ctx.fillText('Contraception Methods', width / 2, height * 0.97);
}

static drawContraceptionBarrier(ctx, width, height) {
  const cx = width / 2, cy = height / 2;

  // Condom
  ctx.fillStyle = '#FFE4B5';
  ctx.strokeStyle = '#CD853F';
  ctx.lineWidth = 3;
  ctx.beginPath();
  ctx.roundRect(cx - width * 0.12, cy - height * 0.3, width * 0.24, height * 0.45, [width * 0.12, width * 0.12, 0, 0]);
  ctx.fill();
  ctx.stroke();

  // Reservoir tip
  ctx.fillStyle = '#FFD700';
  ctx.beginPath();
  ctx.arc(cx, cy - height * 0.3, width * 0.06, 0, Math.PI * 2);
  ctx.fill();

  // Rolled rim
  ctx.fillStyle = '#CD853F';
  ctx.beginPath();
  ctx.ellipse(cx, cy + height * 0.15, width * 0.12, height * 0.04, 0, 0, Math.PI * 2);
  ctx.fill();

  // Sperm blocked arrows
  ctx.strokeStyle = '#DC143C';
  ctx.lineWidth = 1.5;
  for (let i = -1; i <= 1; i++) {
    ctx.beginPath();
    ctx.moveTo(cx + i * width * 0.06, cy + height * 0.22);
    ctx.lineTo(cx + i * width * 0.06, cy + height * 0.32);
    ctx.stroke();
    // X
    const bx2 = cx + i * width * 0.06;
    const by = cy + height * 0.28;
    ctx.beginPath();
    ctx.moveTo(bx2 - 5, by - 5);
    ctx.lineTo(bx2 + 5, by + 5);
    ctx.moveTo(bx2 + 5, by - 5);
    ctx.lineTo(bx2 - 5, by + 5);
    ctx.stroke();
  }

  ctx.fillStyle = '#8B4513';
  ctx.font = `${Math.max(10, width * 0.05)}px Arial`;
  ctx.textAlign = 'center';
  ctx.fillText('Barrier Contraception', cx, cy + height * 0.46);
}

static drawContraceptionHormonal(ctx, width, height) {
  const cx = width / 2, cy = height / 2;

  // Pill blister pack
  ctx.fillStyle = '#F0E6FF';
  ctx.strokeStyle = '#6A5ACD';
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.roundRect(cx - width * 0.3, cy - height * 0.2, width * 0.6, height * 0.35, 8);
  ctx.fill();
  ctx.stroke();

  // Pills
  for (let r = 0; r < 2; r++) {
    for (let c = 0; c < 4; c++) {
      ctx.fillStyle = c + r * 4 < 5 ? '#9370DB' : '#DDD';
      ctx.strokeStyle = '#6A5ACD';
      ctx.lineWidth = 1.5;
      ctx.beginPath();
      ctx.arc(cx - width * 0.22 + c * width * 0.15, cy - height * 0.08 + r * height * 0.12, width * 0.05, 0, Math.PI * 2);
      ctx.fill();
      ctx.stroke();
    }
  }

  // Mechanism arrows (estrogen/progesterone inhibit FSH/LH)
  const hormList = [
    { label: 'Estrogen', color: '#9370DB', y: cy + height * 0.22 },
    { label: 'Progestin', color: '#228B22', y: cy + height * 0.32 },
  ];
  hormList.forEach(h => {
    ctx.fillStyle = h.color;
    ctx.fillRect(cx - width * 0.28, h.y - 8, 12, 12);
    ctx.font = `${Math.max(9, width * 0.04)}px Arial`;
    ctx.textAlign = 'left';
    ctx.fillText(h.label + ' → suppresses ovulation', cx - width * 0.14, h.y + 4);
  });

  ctx.fillStyle = '#6A5ACD';
  ctx.font = `${Math.max(10, width * 0.05)}px Arial`;
  ctx.textAlign = 'center';
  ctx.fillText('Hormonal Contraception', cx, height * 0.97);
}

static drawContraceptionIUD(ctx, width, height) {
  const cx = width / 2, cy = height / 2;

  // Uterus
  ctx.fillStyle = '#FFB6C1';
  ctx.strokeStyle = '#C71585';
  ctx.lineWidth = 2.5;
  ctx.beginPath();
  ctx.moveTo(cx - width * 0.22, cy - height * 0.22);
  ctx.bezierCurveTo(cx - width * 0.28, cy + height * 0.05, cx - width * 0.2, cy + height * 0.18, cx - width * 0.08, cy + height * 0.22);
  ctx.lineTo(cx + width * 0.08, cy + height * 0.22);
  ctx.bezierCurveTo(cx + width * 0.2, cy + height * 0.18, cx + width * 0.28, cy + height * 0.05, cx + width * 0.22, cy - height * 0.22);
  ctx.bezierCurveTo(cx + width * 0.14, cy - height * 0.32, cx - width * 0.14, cy - height * 0.32, cx - width * 0.22, cy - height * 0.22);
  ctx.fill();
  ctx.stroke();

  // IUD T-shape inside uterus
  ctx.strokeStyle = '#4169E1';
  ctx.lineWidth = 5;
  ctx.lineCap = 'round';
  ctx.beginPath();
  ctx.moveTo(cx - width * 0.14, cy - height * 0.1);
  ctx.lineTo(cx + width * 0.14, cy - height * 0.1);
  ctx.moveTo(cx, cy - height * 0.1);
  ctx.lineTo(cx, cy + height * 0.15);
  ctx.stroke();

  // Strings
  ctx.strokeStyle = '#00CED1';
  ctx.lineWidth = 1.5;
  ctx.beginPath();
  ctx.moveTo(cx - width * 0.02, cy + height * 0.15);
  ctx.lineTo(cx - width * 0.04, cy + height * 0.3);
  ctx.moveTo(cx + width * 0.02, cy + height * 0.15);
  ctx.lineTo(cx + width * 0.04, cy + height * 0.3);
  ctx.stroke();

  ctx.fillStyle = '#4169E1';
  ctx.font = `${Math.max(10, width * 0.05)}px Arial`;
  ctx.textAlign = 'center';
  ctx.fillText('Intrauterine Device (IUD)', cx, cy + height * 0.46);
}

static drawContraceptionSterilization(ctx, width, height) {
  const cx = width / 2, cy = height / 2;

  // Uterus
  ctx.fillStyle = '#FFB6C1';
  ctx.strokeStyle = '#C71585';
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.moveTo(cx - width * 0.16, cy - height * 0.15);
  ctx.bezierCurveTo(cx - width * 0.2, cy + height * 0.05, cx - width * 0.14, cy + height * 0.14, cx - width * 0.06, cy + height * 0.18);
  ctx.lineTo(cx + width * 0.06, cy + height * 0.18);
  ctx.bezierCurveTo(cx + width * 0.14, cy + height * 0.14, cx + width * 0.2, cy + height * 0.05, cx + width * 0.16, cy - height * 0.15);
  ctx.bezierCurveTo(cx + width * 0.1, cy - height * 0.22, cx - width * 0.1, cy - height * 0.22, cx - width * 0.16, cy - height * 0.15);
  ctx.fill();
  ctx.stroke();

  // Fallopian tubes with ligation
  [-1, 1].forEach(side => {
    ctx.strokeStyle = '#FF69B4';
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.moveTo(cx + side * width * 0.16, cy - height * 0.1);
    ctx.bezierCurveTo(
      cx + side * width * 0.24, cy - height * 0.18,
      cx + side * width * 0.3, cy - height * 0.16,
      cx + side * width * 0.36, cy - height * 0.08
    );
    ctx.stroke();

    // Ligation clip/tie
    ctx.fillStyle = '#DC143C';
    ctx.strokeStyle = '#8B0000';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.arc(cx + side * width * 0.25, cy - height * 0.15, 6, 0, Math.PI * 2);
    ctx.fill();
    ctx.stroke();

    // Cut mark
    ctx.strokeStyle = '#8B0000';
    ctx.lineWidth = 2;
    const lx = cx + side * width * 0.25;
    const ly = cy - height * 0.15;
    ctx.beginPath();
    ctx.moveTo(lx - 5, ly - 8);
    ctx.lineTo(lx + 5, ly + 8);
    ctx.moveTo(lx + 5, ly - 8);
    ctx.lineTo(lx - 5, ly + 8);
    ctx.stroke();
  });

  ctx.fillStyle = '#8B0000';
  ctx.font = `${Math.max(10, width * 0.05)}px Arial`;
  ctx.textAlign = 'center';
  ctx.fillText('Tubal Ligation', cx, cy + height * 0.38);
}

// ─────────────────────────────────────────────

static drawIVF(ctx, x, y, width, height, stage) {
  ctx.save();
  ctx.translate(x, y);

  switch (stage) {
    case 'complete':
      this.drawIVFComplete(ctx, width, height);
      break;
    case 'stimulation':
      this.drawIVFStimulation(ctx, width, height);
      break;
    case 'retrieval':
      this.drawIVFRetrieval(ctx, width, height);
      break;
    case 'fertilization':
      this.drawIVFFertilization(ctx, width, height);
      break;
    case 'culture':
      this.drawIVFCulture(ctx, width, height);
      break;
    case 'transfer':
      this.drawIVFTransfer(ctx, width, height);
      break;
    default:
      this.drawIVFComplete(ctx, width, height);
  }

  ctx.restore();
}

static drawIVFComplete(ctx, width, height) {
  const stages = ['Stimulation', 'Retrieval', 'Fertilize', 'Culture', 'Transfer'];
  const sw = width / 5;

  stages.forEach((label, i) => {
    const cx = sw * i + sw / 2;
    const cy = height * 0.45;

    // Step circle
    ctx.fillStyle = '#E6E6FA';
    ctx.strokeStyle = '#6A5ACD';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.arc(cx, cy, sw * 0.3, 0, Math.PI * 2);
    ctx.fill();
    ctx.stroke();

    // Step number
    ctx.fillStyle = '#6A5ACD';
    ctx.font = `bold ${Math.max(10, width * 0.04)}px Arial`;
    ctx.textAlign = 'center';
    ctx.fillText(i + 1, cx, cy + 5);

    // Connector arrow
    if (i < stages.length - 1) {
      ctx.strokeStyle = '#9370DB';
      ctx.lineWidth = 1.5;
      ctx.beginPath();
      ctx.moveTo(cx + sw * 0.32, cy);
      ctx.lineTo(sw * (i + 1) + sw * 0.18, cy);
      ctx.stroke();
      // Arrowhead
      const ax = sw * (i + 1) + sw * 0.18;
      ctx.beginPath();
      ctx.moveTo(ax, cy);
      ctx.lineTo(ax - 6, cy - 4);
      ctx.lineTo(ax - 6, cy + 4);
      ctx.closePath();
      ctx.fillStyle = '#9370DB';
      ctx.fill();
    }

    ctx.fillStyle = '#333';
    ctx.font = `${Math.max(8, width * 0.028)}px Arial`;
    ctx.textAlign = 'center';
    ctx.fillText(label, cx, cy + sw * 0.44);
  });

  ctx.fillStyle = '#6A5ACD';
  ctx.font = `${Math.max(11, width * 0.05)}px Arial`;
  ctx.textAlign = 'center';
  ctx.fillText('In Vitro Fertilization (IVF)', width / 2, height * 0.97);
}

static drawIVFStimulation(ctx, width, height) {
  const cx = width / 2, cy = height / 2;
  // Ovary with multiple growing follicles
  ctx.fillStyle = '#FFF0F5';
  ctx.strokeStyle = '#FF69B4';
  ctx.lineWidth = 3;
  ctx.beginPath();
  ctx.ellipse(cx, cy, width * 0.38, height * 0.4, 0, 0, Math.PI * 2);
  ctx.fill();
  ctx.stroke();

  const folliclePositions = [
    [cx - 0.1 * width, cy - 0.2 * height, 0.08], [cx + 0.14 * width, cy - 0.18 * height, 0.09],
    [cx - 0.2 * width, cy, 0.07], [cx + 0.18 * width, cy + 0.05 * height, 0.08],
    [cx, cy + 0.18 * height, 0.07], [cx - 0.08 * width, cy + 0.06 * height, 0.06],
  ];
  folliclePositions.forEach(([fx, fy, fr]) => {
    ctx.fillStyle = '#E0F0FF';
    ctx.strokeStyle = '#4682B4';
    ctx.lineWidth = 1.5;
    ctx.beginPath();
    ctx.arc(fx, fy, fr * width, 0, Math.PI * 2);
    ctx.fill();
    ctx.stroke();
    ctx.fillStyle = '#FFD700';
    ctx.beginPath();
    ctx.arc(fx, fy, fr * width * 0.35, 0, Math.PI * 2);
    ctx.fill();
  });

  // Injection symbol
  ctx.strokeStyle = '#4169E1';
  ctx.lineWidth = 2.5;
  ctx.beginPath();
  ctx.moveTo(cx + width * 0.42, cy - height * 0.3);
  ctx.lineTo(cx + width * 0.28, cy - height * 0.18);
  ctx.stroke();
  ctx.fillStyle = '#4169E1';
  ctx.font = `${Math.max(9, width * 0.04)}px Arial`;
  ctx.textAlign = 'left';
  ctx.fillText('FSH/LH', cx + width * 0.42, cy - height * 0.32);
  ctx.fillText('injection', cx + width * 0.42, cy - height * 0.24);

  ctx.fillStyle = '#C71585';
  ctx.font = `${Math.max(10, width * 0.05)}px Arial`;
  ctx.textAlign = 'center';
  ctx.fillText('Ovarian Stimulation', cx, cy + height * 0.47);
}

static drawIVFRetrieval(ctx, width, height) {
  const cx = width / 2, cy = height / 2;

  // Follicle
  ctx.fillStyle = '#E0F0FF';
  ctx.strokeStyle = '#4682B4';
  ctx.lineWidth = 2.5;
  ctx.beginPath();
  ctx.arc(cx, cy, width * 0.28, 0, Math.PI * 2);
  ctx.fill();
  ctx.stroke();

  // Needle
  ctx.strokeStyle = '#708090';
  ctx.lineWidth = 5;
  ctx.beginPath();
  ctx.moveTo(cx + width * 0.44, cy - height * 0.38);
  ctx.lineTo(cx + width * 0.06, cy - height * 0.06);
  ctx.stroke();

  // Needle tip
  ctx.fillStyle = '#708090';
  ctx.beginPath();
  ctx.moveTo(cx + width * 0.06, cy - height * 0.06);
  ctx.lineTo(cx + width * 0.12, cy - height * 0.14);
  ctx.lineTo(cx + width * 0.14, cy - height * 0.05);
  ctx.closePath();
  ctx.fill();

  // Oocyte being aspirated
  ctx.fillStyle = '#FFD700';
  ctx.strokeStyle = '#DAA520';
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.arc(cx, cy, width * 0.07, 0, Math.PI * 2);
  ctx.fill();
  ctx.stroke();

  // Aspiration flow dashes
  ctx.strokeStyle = '#4682B4';
  ctx.lineWidth = 1.5;
  ctx.setLineDash([4, 4]);
  ctx.beginPath();
  ctx.moveTo(cx + width * 0.08, cy - height * 0.06);
  ctx.lineTo(cx + width * 0.22, cy - height * 0.18);
  ctx.stroke();
  ctx.setLineDash([]);

  ctx.fillStyle = '#4682B4';
  ctx.font = `${Math.max(10, width * 0.05)}px Arial`;
  ctx.textAlign = 'center';
  ctx.fillText('Egg Retrieval', cx, cy + height * 0.4);
}

static drawIVFFertilization(ctx, width, height) {
  const cx = width / 2, cy = height / 2;

  // Petri dish
  ctx.fillStyle = 'rgba(240,248,255,0.7)';
  ctx.strokeStyle = '#708090';
  ctx.lineWidth = 3;
  ctx.beginPath();
  ctx.ellipse(cx, cy + height * 0.12, width * 0.4, height * 0.14, 0, 0, Math.PI * 2);
  ctx.fill();
  ctx.stroke();

  // Egg
  ctx.fillStyle = '#FFF8DC';
  ctx.strokeStyle = '#DAA520';
  ctx.lineWidth = 2.5;
  ctx.beginPath();
  ctx.arc(cx, cy, width * 0.18, 0, Math.PI * 2);
  ctx.fill();
  ctx.stroke();

  // Zona pellucida
  ctx.strokeStyle = '#FF69B4';
  ctx.lineWidth = 4;
  ctx.globalAlpha = 0.5;
  ctx.beginPath();
  ctx.arc(cx, cy, width * 0.22, 0, Math.PI * 2);
  ctx.stroke();
  ctx.globalAlpha = 1;

  // ICSI needle
  ctx.strokeStyle = '#4169E1';
  ctx.lineWidth = 3;
  ctx.beginPath();
  ctx.moveTo(cx + width * 0.44, cy - height * 0.28);
  ctx.lineTo(cx + width * 0.22, cy);
  ctx.stroke();

  // Single sperm at needle tip
  ctx.fillStyle = '#4169E1';
  ctx.beginPath();
  ctx.arc(cx + width * 0.22, cy, 6, 0, Math.PI * 2);
  ctx.fill();

  ctx.fillStyle = '#6A5ACD';
  ctx.font = `${Math.max(9, width * 0.04)}px Arial`;
  ctx.textAlign = 'left';
  ctx.fillText('ICSI Injection', cx + width * 0.44, cy - height * 0.3);

  ctx.fillStyle = '#4169E1';
  ctx.font = `${Math.max(10, width * 0.05)}px Arial`;
  ctx.textAlign = 'center';
  ctx.fillText('Fertilization (ICSI)', cx, cy + height * 0.46);
}

static drawIVFCulture(ctx, width, height) {
  const cx = width / 2, cy = height / 2;

  // Incubator/dish
  ctx.fillStyle = 'rgba(240,255,240,0.6)';
  ctx.strokeStyle = '#228B22';
  ctx.lineWidth = 2.5;
  ctx.beginPath();
  ctx.roundRect(cx - width * 0.4, cy - height * 0.38, width * 0.8, height * 0.65, 10);
  ctx.fill();
  ctx.stroke();

  // Culture wells with embryos at different stages
  const embryoStages = [
    { label: 'Day 1\n2-cell', cells: 2, x: cx - width * 0.22, y: cy - height * 0.16 },
    { label: 'Day 2\n4-cell', cells: 4, x: cx, y: cy - height * 0.16 },
    { label: 'Day 3\n8-cell', cells: 8, x: cx + width * 0.22, y: cy - height * 0.16 },
    { label: 'Day 5\nBlastocyst', cells: 0, x: cx - width * 0.1, y: cy + height * 0.1 },
  ];

  embryoStages.forEach(({ cells, x, y, label }) => {
    // Well
    ctx.fillStyle = '#E8F5E9';
    ctx.strokeStyle = '#4CAF50';
    ctx.lineWidth = 1.5;
    ctx.beginPath();
    ctx.arc(x, y, width * 0.1, 0, Math.PI * 2);
    ctx.fill();
    ctx.stroke();

    if (cells > 0) {
      // Embryo cells
      ctx.fillStyle = '#FFF8DC';
      ctx.strokeStyle = '#DAA520';
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.arc(x, y, width * 0.08, 0, Math.PI * 2);
      ctx.fill();
      ctx.stroke();
      for (let c = 0; c < Math.min(cells, 8); c++) {
        const ca = (c / Math.min(cells, 8)) * Math.PI * 2;
        const r = cells <= 2 ? width * 0.04 : width * 0.025;
        ctx.beginPath();
        ctx.arc(x + Math.cos(ca) * width * 0.04, y + Math.sin(ca) * width * 0.04, r, 0, Math.PI * 2);
        ctx.fillStyle = '#FFDAB9';
        ctx.fill();
        ctx.strokeStyle = '#CD853F';
        ctx.stroke();
      }
    } else {
      // Blastocyst
      ctx.fillStyle = 'rgba(173,216,230,0.6)';
      ctx.strokeStyle = '#4682B4';
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.arc(x, y, width * 0.08, 0, Math.PI * 2);
      ctx.fill();
      ctx.stroke();
      ctx.fillStyle = '#FFA500';
      ctx.beginPath();
      ctx.arc(x + width * 0.025, y - width * 0.025, width * 0.03, 0, Math.PI * 2);
      ctx.fill();
    }

    ctx.fillStyle = '#2E7D32';
    ctx.font = `${Math.max(7, width * 0.028)}px Arial`;
    ctx.textAlign = 'center';
    label.split('\n').forEach((line, li) => {
      ctx.fillText(line, x, y + width * 0.12 + li * 11);
    });
  });

  ctx.fillStyle = '#228B22';
  ctx.font = `${Math.max(10, width * 0.05)}px Arial`;
  ctx.textAlign = 'center';
  ctx.fillText('Embryo Culture', cx, cy + height * 0.37);
}

static drawIVFTransfer(ctx, width, height) {
  const cx = width / 2, cy = height / 2;

  // Uterus
  ctx.fillStyle = '#FFB6C1';
  ctx.strokeStyle = '#C71585';
  ctx.lineWidth = 2.5;
  ctx.beginPath();
  ctx.moveTo(cx - width * 0.22, cy - height * 0.22);
  ctx.bezierCurveTo(cx - width * 0.28, cy + height * 0.05, cx - width * 0.2, cy + height * 0.18, cx - width * 0.08, cy + height * 0.24);
  ctx.lineTo(cx + width * 0.08, cy + height * 0.24);
  ctx.bezierCurveTo(cx + width * 0.2, cy + height * 0.18, cx + width * 0.28, cy + height * 0.05, cx + width * 0.22, cy - height * 0.22);
  ctx.bezierCurveTo(cx + width * 0.14, cy - height * 0.32, cx - width * 0.14, cy - height * 0.32, cx - width * 0.22, cy - height * 0.22);
  ctx.fill();
  ctx.stroke();

  // Catheter
  ctx.strokeStyle = '#708090';
  ctx.lineWidth = 4;
  ctx.beginPath();
  ctx.moveTo(cx + width * 0.44, cy + height * 0.38);
  ctx.bezierCurveTo(cx + width * 0.2, cy + height * 0.28, cx + width * 0.1, cy + height * 0.18, cx + width * 0.02, cy);
  ctx.stroke();

  // Blastocyst being deposited
  ctx.fillStyle = 'rgba(173,216,230,0.8)';
  ctx.strokeStyle = '#4682B4';
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.arc(cx + width * 0.02, cy, width * 0.07, 0, Math.PI * 2);
  ctx.fill();
  ctx.stroke();
  ctx.fillStyle = '#FFA500';
  ctx.beginPath();
  ctx.arc(cx + width * 0.04, cy - width * 0.02, width * 0.025, 0, Math.PI * 2);
  ctx.fill();

  // Endometrium highlight
  ctx.strokeStyle = '#FF69B4';
  ctx.lineWidth = 3;
  ctx.globalAlpha = 0.4;
  ctx.beginPath();
  ctx.moveTo(cx - width * 0.2, cy + height * 0.15);
  ctx.bezierCurveTo(cx - width * 0.05, cy + height * 0.2, cx + width * 0.05, cy + height * 0.2, cx + width * 0.2, cy + height * 0.15);
  ctx.stroke();
  ctx.globalAlpha = 1;

  ctx.fillStyle = '#C71585';
  ctx.font = `${Math.max(10, width * 0.05)}px Arial`;
  ctx.textAlign = 'center';
  ctx.fillText('Embryo Transfer', cx, cy + height * 0.44);
}

// ─────────────────────────────────────────────

static drawMeiosis(ctx, x, y, width, height, stage) {
  ctx.save();
  ctx.translate(x, y);

  switch (stage) {
    case 'complete':
      this.drawMeiosisComplete(ctx, width, height);
      break;
    case 'prophase1':
      this.drawMeiosisProphase1(ctx, width, height);
      break;
    case 'metaphase1':
      this.drawMeiosisMetaphase1(ctx, width, height);
      break;
    case 'anaphase1':
      this.drawMeiosisAnaphase1(ctx, width, height);
      break;
    case 'meiosis2':
      this.drawMeiosis2(ctx, width, height);
      break;
    default:
      this.drawMeiosisComplete(ctx, width, height);
  }

  ctx.restore();
}

static drawMeiosisComplete(ctx, width, height) {
  const stages = ['Prophase I', 'Metaphase I', 'Anaphase I', 'Telophase I', 'Meiosis II', 'Gametes'];
  const cols = 3, rows = 2;
  const cw = width / cols, ch = height / rows;

  stages.forEach((label, i) => {
    const col = i % cols, row = Math.floor(i / cols);
    const cx = col * cw + cw / 2;
    const cy = row * ch + ch / 2;
    const r = Math.min(cw, ch) * 0.28;

    // Cell outline
    ctx.fillStyle = '#FFF8DC';
    ctx.strokeStyle = '#8B4513';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.arc(cx, cy, r, 0, Math.PI * 2);
    ctx.fill();
    ctx.stroke();

    // Chromosomes based on stage
    const chrColor = ['#DC143C', '#4169E1', '#228B22', '#9370DB'];

    if (i === 0) {
      // Prophase I: bivalents (tetrads), crossing over
      [[-0.3, -0.3], [0.3, -0.3], [-0.3, 0.3], [0.3, 0.3]].forEach(([dx, dy], ci) => {
        ctx.strokeStyle = chrColor[ci % 2];
        ctx.lineWidth = 4;
        ctx.beginPath();
        ctx.moveTo(cx + dx * r, cy + dy * r - r * 0.2);
        ctx.lineTo(cx + dx * r, cy + dy * r + r * 0.2);
        ctx.stroke();
        // Homolog
        ctx.strokeStyle = chrColor[ci % 2 + 2];
        ctx.beginPath();
        ctx.moveTo(cx + dx * r + 6, cy + dy * r - r * 0.2);
        ctx.lineTo(cx + dx * r + 6, cy + dy * r + r * 0.2);
        ctx.stroke();
        // Chiasma (X crossing)
        ctx.strokeStyle = '#FF8C00';
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(cx + dx * r, cy + dy * r);
        ctx.lineTo(cx + dx * r + 6, cy + dy * r);
        ctx.stroke();
      });
    } else if (i === 1) {
      // Metaphase I: bivalents on plate
      ctx.setLineDash([3, 2]);
      ctx.strokeStyle = '#888';
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.moveTo(cx, cy - r);
      ctx.lineTo(cx, cy + r);
      ctx.stroke();
      ctx.setLineDash([]);
      [[r * 0.2, 0], [-r * 0.2, 0]].forEach(([dx, dy], ci) => {
        chrColor.slice(0, 2).forEach((c, j) => {
          ctx.strokeStyle = c;
          ctx.lineWidth = 4;
          ctx.beginPath();
          ctx.moveTo(cx + dx, cy + dy - r * 0.3 + j * r * 0.2);
          ctx.lineTo(cx + dx + 6, cy + dy - r * 0.3 + j * r * 0.2);
          ctx.stroke();
        });
      });
    } else if (i === 2) {
      // Anaphase I: homologs separating
      [[0, -r * 0.5], [0, r * 0.5]].forEach(([dx, dy], pole) => {
        chrColor.slice(pole * 2, pole * 2 + 2).forEach((c, j) => {
          ctx.strokeStyle = c;
          ctx.lineWidth = 4;
          ctx.beginPath();
          ctx.moveTo(cx + j * 8 - 4, cy + dy - r * 0.1);
          ctx.lineTo(cx + j * 8 - 4, cy + dy + r * 0.1);
          ctx.stroke();
        });
      });
    } else if (i === 3) {
      // Telophase I: two nuclei forming
      [cy - r * 0.45, cy + r * 0.45].forEach(ny => {
        ctx.strokeStyle = '#8B4513';
        ctx.lineWidth = 1.5;
        ctx.setLineDash([3, 2]);
        ctx.beginPath();
        ctx.arc(cx, ny, r * 0.3, 0, Math.PI * 2);
        ctx.stroke();
        ctx.setLineDash([]);
      });
    } else if (i === 4) {
      // Meiosis II: 4 cells forming
      [[-r * 0.45, -r * 0.45], [r * 0.45, -r * 0.45], [-r * 0.45, r * 0.45], [r * 0.45, r * 0.45]].forEach(([dx, dy]) => {
        ctx.fillStyle = '#FFE4E1';
        ctx.strokeStyle = '#8B4513';
        ctx.lineWidth = 1.5;
        ctx.beginPath();
        ctx.arc(cx + dx, cy + dy, r * 0.28, 0, Math.PI * 2);
        ctx.fill();
        ctx.stroke();
      });
    } else {
      // Gametes: 4 final cells
      [[-r * 0.5, -r * 0.4], [r * 0.5, -r * 0.4], [-r * 0.5, r * 0.4], [r * 0.5, r * 0.4]].forEach(([dx, dy], gi) => {
        ctx.fillStyle = '#FFD700';
        ctx.strokeStyle = '#DAA520';
        ctx.lineWidth = 1.5;
        ctx.beginPath();
        ctx.arc(cx + dx, cy + dy, r * 0.22, 0, Math.PI * 2);
        ctx.fill();
        ctx.stroke();
        // n label
        ctx.fillStyle = '#8B4513';
        ctx.font = `${Math.max(7, width * 0.025)}px Arial`;
        ctx.textAlign = 'center';
        ctx.fillText('n', cx + dx, cy + dy + 4);
      });
    }

    ctx.fillStyle = '#333';
    ctx.font = `${Math.max(8, width * 0.03)}px Arial`;
    ctx.textAlign = 'center';
    ctx.fillText(label, cx, cy + r + 14);
  });

  ctx.fillStyle = '#8B4513';
  ctx.font = `${Math.max(11, width * 0.05)}px Arial`;
  ctx.textAlign = 'center';
  ctx.fillText('Meiosis', width / 2, height * 0.97);
}

static drawMeiosisProphase1(ctx, width, height) {
  const cx = width / 2, cy = height / 2;
  const r = Math.min(width, height) * 0.38;

  ctx.fillStyle = '#FFF8DC';
  ctx.strokeStyle = '#8B4513';
  ctx.lineWidth = 2.5;
  ctx.beginPath();
  ctx.arc(cx, cy, r, 0, Math.PI * 2);
  ctx.fill();
  ctx.stroke();

  // Nuclear envelope dissolving
  ctx.strokeStyle = '#8B4513';
  ctx.lineWidth = 1.5;
  ctx.setLineDash([4, 6]);
  ctx.beginPath();
  ctx.arc(cx, cy, r * 0.62, 0, Math.PI * 2);
  ctx.stroke();
  ctx.setLineDash([]);

  // 4 bivalents with crossing over
  const positions = [
    [cx - r * 0.3, cy - r * 0.3], [cx + r * 0.3, cy - r * 0.3],
    [cx - r * 0.3, cy + r * 0.3], [cx + r * 0.3, cy + r * 0.3],
  ];
  const colors = [['#DC143C', '#FF6B6B'], ['#4169E1', '#87CEEB'], ['#228B22', '#90EE90'], ['#9370DB', '#DDA0DD']];

  positions.forEach(([px, py], idx) => {
    // Homolog 1
    ctx.strokeStyle = colors[idx][0];
    ctx.lineWidth = 5;
    ctx.lineCap = 'round';
    ctx.beginPath();
    ctx.moveTo(px - 4, py - r * 0.18);
    ctx.lineTo(px - 4, py + r * 0.18);
    ctx.stroke();
    // Homolog 2
    ctx.strokeStyle = colors[idx][1];
    ctx.beginPath();
    ctx.moveTo(px + 4, py - r * 0.18);
    ctx.lineTo(px + 4, py + r * 0.18);
    ctx.stroke();
    // Chiasma
    ctx.strokeStyle = '#FF8C00';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(px - 4, py);
    ctx.lineTo(px + 4, py);
    ctx.stroke();
  });

  ctx.fillStyle = '#8B4513';
  ctx.font = `${Math.max(10, width * 0.05)}px Arial`;
  ctx.textAlign = 'center';
  ctx.fillText('Prophase I — Synapsis & Crossing Over', cx, cy + r + 18);
}

static drawMeiosisMetaphase1(ctx, width, height) {
  const cx = width / 2, cy = height / 2;
  const r = Math.min(width, height) * 0.38;

  ctx.fillStyle = '#FFF8DC';
  ctx.strokeStyle = '#8B4513';
  ctx.lineWidth = 2.5;
  ctx.beginPath();
  ctx.arc(cx, cy, r, 0, Math.PI * 2);
  ctx.fill();
  ctx.stroke();

  // Metaphase plate (equatorial)
  ctx.strokeStyle = '#888';
  ctx.lineWidth = 1.5;
  ctx.setLineDash([4, 3]);
  ctx.beginPath();
  ctx.moveTo(cx, cy - r * 0.9);
  ctx.lineTo(cx, cy + r * 0.9);
  ctx.stroke();
  ctx.setLineDash([]);

  // Spindle fibers
  ctx.strokeStyle = '#B0C4DE';
  ctx.lineWidth = 1;
  [[-r * 0.2, 0], [r * 0.2, 0]].forEach(([dx]) => {
    for (let f = -2; f <= 2; f++) {
      ctx.beginPath();
      ctx.moveTo(cx + dx, cy + f * r * 0.15);
      ctx.lineTo(cx, cy - r * 0.85);
      ctx.moveTo(cx + dx, cy + f * r * 0.15);
      ctx.lineTo(cx, cy + r * 0.85);
      ctx.stroke();
    }
  });

  // Bivalents on plate
  [[-r * 0.2, cy - r * 0.28], [r * 0.2, cy - r * 0.28], [-r * 0.2, cy + r * 0.28], [r * 0.2, cy + r * 0.28]].forEach(([bx, by], idx) => {
    ['#DC143C', '#4169E1'][idx % 2];
    ctx.strokeStyle = ['#DC143C', '#4169E1', '#228B22', '#9370DB'][idx];
    ctx.lineWidth = 5;
    ctx.lineCap = 'round';
    ctx.beginPath();
    ctx.moveTo(bx - 4, by);
    ctx.lineTo(bx + 4, by);
    ctx.stroke();
  });

  ctx.fillStyle = '#8B4513';
  ctx.font = `${Math.max(10, width * 0.05)}px Arial`;
  ctx.textAlign = 'center';
  ctx.fillText('Metaphase I — Bivalents Aligned', cx, cy + r + 18);
}

static drawMeiosisAnaphase1(ctx, width, height) {
  const cx = width / 2, cy = height / 2;
  const r = Math.min(width, height) * 0.38;

  ctx.fillStyle = '#FFF8DC';
  ctx.strokeStyle = '#8B4513';
  ctx.lineWidth = 2.5;
  ctx.beginPath();
  ctx.arc(cx, cy, r, 0, Math.PI * 2);
  ctx.fill();
  ctx.stroke();

  // Spindle
  ctx.strokeStyle = '#B0C4DE';
  ctx.lineWidth = 1;
  for (let f = -1; f <= 1; f++) {
    ctx.beginPath();
    ctx.moveTo(cx + f * 12, cy - r * 0.32);
    ctx.lineTo(cx, cy - r * 0.88);
    ctx.moveTo(cx + f * 12, cy + r * 0.32);
    ctx.lineTo(cx, cy + r * 0.88);
    ctx.stroke();
  }

  // Homologs separating to poles
  [[-r * 0.5], [r * 0.5]].forEach(([dy], pole) => {
    [['#DC143C', '#4169E1'], ['#228B22', '#9370DB']][pole].forEach((c, j) => {
      ctx.strokeStyle = c;
      ctx.lineWidth = 5;
      ctx.lineCap = 'round';
      ctx.beginPath();
      ctx.moveTo(cx + j * 10 - 5, cy + dy - 8);
      ctx.lineTo(cx + j * 10 - 5, cy + dy + 8);
      ctx.stroke();
    });
  });

  ctx.fillStyle = '#8B4513';
  ctx.font = `${Math.max(10, width * 0.05)}px Arial`;
  ctx.textAlign = 'center';
  ctx.fillText('Anaphase I — Homologs Separate', cx, cy + r + 18);
}

static drawMeiosis2(ctx, width, height) {
  const cx = width / 2, cy = height / 2;

  // Two secondary oocytes/cells side by side
  [-1, 1].forEach(side => {
    const scx = cx + side * width * 0.27;

    ctx.fillStyle = '#FFF8DC';
    ctx.strokeStyle = '#8B4513';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.arc(scx, cy, width * 0.2, 0, Math.PI * 2);
    ctx.fill();
    ctx.stroke();

    // Metaphase II plate
    ctx.strokeStyle = '#888';
    ctx.lineWidth = 1.5;
    ctx.setLineDash([3, 3]);
    ctx.beginPath();
    ctx.moveTo(scx, cy - width * 0.18);
    ctx.lineTo(scx, cy + width * 0.18);
    ctx.stroke();
    ctx.setLineDash([]);

    // Sister chromatids
    const colors = side === -1 ? ['#DC143C', '#4169E1'] : ['#228B22', '#9370DB'];
    [[-width * 0.06, 0], [width * 0.06, 0]].forEach(([dx, dy], ci) => {
      ctx.strokeStyle = colors[ci];
      ctx.lineWidth = 5;
      ctx.lineCap = 'round';
      ctx.beginPath();
      ctx.moveTo(scx + dx - 4, cy + dy - width * 0.06);
      ctx.lineTo(scx + dx + 4, cy + dy + width * 0.06);
      ctx.stroke();
    });
  });

  // Division arrow
  ctx.strokeStyle = '#333';
  ctx.lineWidth = 1.5;
  ctx.beginPath();
  ctx.moveTo(cx, cy - height * 0.38);
  ctx.lineTo(cx - width * 0.22, cy - height * 0.06);
  ctx.moveTo(cx, cy - height * 0.38);
  ctx.lineTo(cx + width * 0.22, cy - height * 0.06);
  ctx.stroke();

  ctx.fillStyle = '#8B4513';
  ctx.font = `${Math.max(10, width * 0.05)}px Arial`;
  ctx.textAlign = 'center';
  ctx.fillText('Meiosis II — Sister Chromatids Separate', cx, cy + height * 0.44);
}

// ─────────────────────────────────────────────

static drawMitosis(ctx, x, y, width, height, stage) {
  ctx.save();
  ctx.translate(x, y);

  switch (stage) {
    case 'complete':
      this.drawMitosisComplete(ctx, width, height);
      break;
    case 'interphase':
      this.drawMitosisInterphase(ctx, width, height);
      break;
    case 'prophase':
      this.drawMitosisProphase(ctx, width, height);
      break;
    case 'metaphase':
      this.drawMitosisMetaphase(ctx, width, height);
      break;
    case 'anaphase':
      this.drawMitosisAnaphase(ctx, width, height);
      break;
    case 'telophase':
      this.drawMitosisTelophase(ctx, width, height);
      break;
    default:
      this.drawMitosisComplete(ctx, width, height);
  }

  ctx.restore();
}

static drawMitosisComplete(ctx, width, height) {
  const phases = ['Interphase', 'Prophase', 'Metaphase', 'Anaphase', 'Telophase', 'Cytokinesis'];
  const cols = 3, rows = 2;
  const cw = width / cols, ch = height / rows;
  const chrColors = ['#DC143C', '#4169E1', '#228B22', '#9370DB'];

  phases.forEach((label, i) => {
    const col = i % cols, row = Math.floor(i / cols);
    const cx = col * cw + cw / 2;
    const cy = row * ch + ch / 2;
    const r = Math.min(cw, ch) * 0.28;

    ctx.fillStyle = '#E0F0FF';
    ctx.strokeStyle = '#4169E1';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.arc(cx, cy, r, 0, Math.PI * 2);
    ctx.fill();
    ctx.stroke();

    if (i === 0) {
      // Interphase: nucleus with chromatin
      ctx.fillStyle = 'rgba(65,105,225,0.2)';
      ctx.strokeStyle = '#4169E1';
      ctx.lineWidth = 1.5;
      ctx.beginPath();
      ctx.arc(cx, cy, r * 0.5, 0, Math.PI * 2);
      ctx.fill();
      ctx.stroke();
      ctx.fillStyle = '#4169E1';
      ctx.beginPath();
      ctx.arc(cx + r * 0.15, cy - r * 0.1, r * 0.12, 0, Math.PI * 2);
      ctx.fill();
    } else if (i === 1) {
      // Prophase: condensing chromosomes
      chrColors.forEach((c, ci) => {
        const angle = (ci / 4) * Math.PI * 2;
        ctx.strokeStyle = c;
        ctx.lineWidth = 4;
        ctx.lineCap = 'round';
        ctx.beginPath();
        ctx.moveTo(cx + Math.cos(angle) * r * 0.22, cy + Math.sin(angle) * r * 0.22);
        ctx.lineTo(cx + Math.cos(angle) * r * 0.44, cy + Math.sin(angle) * r * 0.44);
        ctx.stroke();
      });
    } else if (i === 2) {
      // Metaphase: chromosomes on plate
      ctx.strokeStyle = '#888';
      ctx.lineWidth = 1;
      ctx.setLineDash([3, 2]);
      ctx.beginPath();
      ctx.moveTo(cx - r * 0.9, cy);
      ctx.lineTo(cx + r * 0.9, cy);
      ctx.stroke();
      ctx.setLineDash([]);
      chrColors.forEach((c, ci) => {
        ctx.strokeStyle = c;
        ctx.lineWidth = 5;
        ctx.lineCap = 'round';
        ctx.beginPath();
        ctx.moveTo(cx - r * 0.45 + ci * r * 0.3, cy - r * 0.1);
        ctx.lineTo(cx - r * 0.45 + ci * r * 0.3, cy + r * 0.1);
        ctx.stroke();
      });
    } else if (i === 3) {
      // Anaphase: chromatids to poles
      [[0, -r * 0.42], [0, r * 0.42]].forEach(([dx, dy], pole) => {
        chrColors.slice(pole * 2, pole * 2 + 2).forEach((c, j) => {
          ctx.strokeStyle = c;
          ctx.lineWidth = 4;
          ctx.beginPath();
          ctx.moveTo(cx + j * 10 - 5, cy + dy - r * 0.08);
          ctx.lineTo(cx + j * 10 - 5, cy + dy + r * 0.08);
          ctx.stroke();
        });
      });
    } else if (i === 4) {
      // Telophase: two nuclei
      [-r * 0.36, r * 0.36].forEach(dy => {
        ctx.fillStyle = 'rgba(65,105,225,0.15)';
        ctx.strokeStyle = '#4169E1';
        ctx.lineWidth = 1.5;
        ctx.setLineDash([3, 2]);
        ctx.beginPath();
        ctx.arc(cx, cy + dy, r * 0.26, 0, Math.PI * 2);
        ctx.fill();
        ctx.stroke();
        ctx.setLineDash([]);
      });
    } else {
      // Cytokinesis: cleavage furrow
      [-r * 0.4, r * 0.4].forEach(dy => {
        ctx.fillStyle = '#E0F0FF';
        ctx.strokeStyle = '#4169E1';
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.arc(cx, cy + dy, r * 0.4, 0, Math.PI * 2);
        ctx.fill();
        ctx.stroke();
      });
      ctx.strokeStyle = '#DC143C';
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(cx - r * 0.8, cy);
      ctx.lineTo(cx + r * 0.8, cy);
      ctx.stroke();
    }

    ctx.fillStyle = '#333';
    ctx.font = `${Math.max(8, width * 0.03)}px Arial`;
    ctx.textAlign = 'center';
    ctx.fillText(label, cx, cy + r + 14);
  });

  ctx.fillStyle = '#4169E1';
  ctx.font = `${Math.max(11, width * 0.05)}px Arial`;
  ctx.textAlign = 'center';
  ctx.fillText('Mitosis', width / 2, height * 0.97);
}

static drawMitosisInterphase(ctx, width, height) {
  const cx = width / 2, cy = height / 2;
  const r = Math.min(width, height) * 0.38;

  ctx.fillStyle = '#E0F0FF';
  ctx.strokeStyle = '#4169E1';
  ctx.lineWidth = 3;
  ctx.beginPath();
  ctx.arc(cx, cy, r, 0, Math.PI * 2);
  ctx.fill();
  ctx.stroke();

  // Nucleus
  ctx.fillStyle = 'rgba(65,105,225,0.18)';
  ctx.strokeStyle = '#4169E1';
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.arc(cx, cy, r * 0.5, 0, Math.PI * 2);
  ctx.fill();
  ctx.stroke();

  // Nucleolus
  ctx.fillStyle = '#4169E1';
  ctx.beginPath();
  ctx.arc(cx + r * 0.1, cy - r * 0.1, r * 0.1, 0, Math.PI * 2);
  ctx.fill();

  // Chromatin (dispersed)
  ctx.strokeStyle = '#6A5ACD';
  ctx.lineWidth = 1.5;
  for (let i = 0; i < 8; i++) {
    const angle = (i / 8) * Math.PI * 2;
    const cr = r * 0.3 + Math.random() * r * 0.1;
    ctx.beginPath();
    ctx.arc(cx + Math.cos(angle) * cr, cy + Math.sin(angle) * cr, 4, 0, Math.PI * 2);
    ctx.stroke();
  }

  // Centrioles
  ctx.fillStyle = '#FF8C00';
  [[-r * 0.65, -r * 0.65], [r * 0.65, r * 0.65]].forEach(([dx, dy]) => {
    ctx.beginPath();
    ctx.ellipse(cx + dx, cy + dy, 6, 3, 0.5, 0, Math.PI * 2);
    ctx.fill();
  });

  ctx.fillStyle = '#4169E1';
  ctx.font = `${Math.max(10, width * 0.05)}px Arial`;
  ctx.textAlign = 'center';
  ctx.fillText('Interphase (DNA Replication)', cx, cy + r + 18);
}

static drawMitosisProphase(ctx, width, height) {
  const cx = width / 2, cy = height / 2;
  const r = Math.min(width, height) * 0.38;

  ctx.fillStyle = '#E0F0FF';
  ctx.strokeStyle = '#4169E1';
  ctx.lineWidth = 3;
  ctx.beginPath();
  ctx.arc(cx, cy, r, 0, Math.PI * 2);
  ctx.fill();
  ctx.stroke();

  // Condensed chromosomes (X-shapes)
  const chrPos = [
    [cx - r * 0.28, cy - r * 0.28], [cx + r * 0.28, cy - r * 0.28],
    [cx - r * 0.28, cy + r * 0.28], [cx + r * 0.28, cy + r * 0.28],
  ];
  const chrColors2 = ['#DC143C', '#4169E1', '#228B22', '#9370DB'];
  chrPos.forEach(([px, py], idx) => {
    ctx.strokeStyle = chrColors2[idx];
    ctx.lineWidth = 5;
    ctx.lineCap = 'round';
    // Chromatid 1
    ctx.beginPath();
    ctx.moveTo(px - 8, py - r * 0.14);
    ctx.lineTo(px, py);
    ctx.lineTo(px - 8, py + r * 0.14);
    ctx.stroke();
    // Chromatid 2
    ctx.beginPath();
    ctx.moveTo(px + 8, py - r * 0.14);
    ctx.lineTo(px, py);
    ctx.lineTo(px + 8, py + r * 0.14);
    ctx.stroke();
    // Centromere
    ctx.fillStyle = '#FF8C00';
    ctx.beginPath();
    ctx.arc(px, py, 4, 0, Math.PI * 2);
    ctx.fill();
  });

  // Nuclear envelope fragmenting
  ctx.strokeStyle = '#4169E1';
  ctx.lineWidth = 1.5;
  ctx.setLineDash([4, 8]);
  ctx.beginPath();
  ctx.arc(cx, cy, r * 0.58, 0, Math.PI * 2);
  ctx.stroke();
  ctx.setLineDash([]);

  ctx.fillStyle = '#4169E1';
  ctx.font = `${Math.max(10, width * 0.05)}px Arial`;
  ctx.textAlign = 'center';
  ctx.fillText('Prophase — Chromosomes Condense', cx, cy + r + 18);
}

static drawMitosisMetaphase(ctx, width, height) {
  const cx = width / 2, cy = height / 2;
  const r = Math.min(width, height) * 0.38;

  ctx.fillStyle = '#E0F0FF';
  ctx.strokeStyle = '#4169E1';
  ctx.lineWidth = 3;
  ctx.beginPath();
  ctx.arc(cx, cy, r, 0, Math.PI * 2);
  ctx.fill();
  ctx.stroke();

  // Metaphase plate
  ctx.strokeStyle = '#888';
  ctx.lineWidth = 1.5;
  ctx.setLineDash([4, 3]);
  ctx.beginPath();
  ctx.moveTo(cx, cy - r * 0.9);
  ctx.lineTo(cx, cy + r * 0.9);
  ctx.stroke();
  ctx.setLineDash([]);

  // Spindle fibers from poles
  ctx.strokeStyle = '#B0C4DE';
  ctx.lineWidth = 1;
  for (let i = -3; i <= 3; i++) {
    ctx.beginPath();
    ctx.moveTo(cx + i * r * 0.1, cy);
    ctx.lineTo(cx - r * 0.9, cy + i * r * 0.12);
    ctx.moveTo(cx + i * r * 0.1, cy);
    ctx.lineTo(cx + r * 0.9, cy + i * r * 0.12);
    ctx.stroke();
  }

  // Chromosomes on plate (vertical line at cx)
  const chrColors2 = ['#DC143C', '#4169E1', '#228B22', '#9370DB'];
  [-r * 0.42, -r * 0.14, r * 0.14, r * 0.42].forEach((dy, idx) => {
    const px = cx;
    const py = cy + dy;
    ctx.strokeStyle = chrColors2[idx];
    ctx.lineWidth = 5;
    ctx.lineCap = 'round';
    ctx.beginPath();
    ctx.moveTo(px - r * 0.14, py - 5);
    ctx.lineTo(px, py);
    ctx.lineTo(px - r * 0.14, py + 5);
    ctx.moveTo(px + r * 0.14, py - 5);
    ctx.lineTo(px, py);
    ctx.lineTo(px + r * 0.14, py + 5);
    ctx.stroke();
    ctx.fillStyle = '#FF8C00';
    ctx.beginPath();
    ctx.arc(px, py, 4, 0, Math.PI * 2);
    ctx.fill();
  });

  ctx.fillStyle = '#4169E1';
  ctx.font = `${Math.max(10, width * 0.05)}px Arial`;
  ctx.textAlign = 'center';
  ctx.fillText('Metaphase — Chromosomes Aligned', cx, cy + r + 18);
}

static drawMitosisAnaphase(ctx, width, height) {
  const cx = width / 2, cy = height / 2;
  const r = Math.min(width, height) * 0.38;

  ctx.fillStyle = '#E0F0FF';
  ctx.strokeStyle = '#4169E1';
  ctx.lineWidth = 3;
  ctx.beginPath();
  ctx.arc(cx, cy, r, 0, Math.PI * 2);
  ctx.fill();
  ctx.stroke();

  // Spindle
  ctx.strokeStyle = '#B0C4DE';
  ctx.lineWidth = 1;
  for (let i = -2; i <= 2; i++) {
    ctx.beginPath();
    ctx.moveTo(cx + i * 8, cy - r * 0.35);
    ctx.lineTo(cx - r * 0.9, cy + i * 10);
    ctx.moveTo(cx + i * 8, cy + r * 0.35);
    ctx.lineTo(cx + r * 0.9, cy + i * 10);
    ctx.stroke();
  }

  // Sister chromatids moving to opposite poles
  const chrColors2 = ['#DC143C', '#4169E1', '#228B22', '#9370DB'];
  [[0, -r * 0.48], [0, r * 0.48]].forEach(([, dy], pole) => {
    [-r * 0.18, -r * 0.06, r * 0.06, r * 0.18].forEach((dx, idx) => {
      ctx.strokeStyle = chrColors2[idx];
      ctx.lineWidth = 4;
      ctx.lineCap = 'round';
      ctx.beginPath();
      ctx.moveTo(cx + dx, cy + dy - r * 0.07);
      ctx.lineTo(cx + dx, cy + dy + r * 0.07);
      ctx.stroke();
    });
  });

  ctx.fillStyle = '#4169E1';
  ctx.font = `${Math.max(10, width * 0.05)}px Arial`;
  ctx.textAlign = 'center';
  ctx.fillText('Anaphase — Chromatids Pulled Apart', cx, cy + r + 18);
}

static drawMitosisTelophase(ctx, width, height) {
  const cx = width / 2, cy = height / 2;
  const r = Math.min(width, height) * 0.38;

  // Cell elongating
  ctx.fillStyle = '#E0F0FF';
  ctx.strokeStyle = '#4169E1';
  ctx.lineWidth = 3;
  ctx.beginPath();
  ctx.ellipse(cx, cy, r * 0.9, r * 1.1, 0, 0, Math.PI * 2);
  ctx.fill();
  ctx.stroke();

  // Two daughter nuclei forming
  [-r * 0.52, r * 0.52].forEach(dy => {
    ctx.fillStyle = 'rgba(65,105,225,0.15)';
    ctx.strokeStyle = '#4169E1';
    ctx.lineWidth = 2;
    ctx.setLineDash([3, 2]);
    ctx.beginPath();
    ctx.arc(cx, cy + dy, r * 0.3, 0, Math.PI * 2);
    ctx.fill();
    ctx.stroke();
    ctx.setLineDash([]);

    // Decondensing chromosomes (less defined)
    ctx.strokeStyle = 'rgba(107,85,205,0.5)';
    ctx.lineWidth = 2;
    for (let j = 0; j < 4; j++) {
      const angle = (j / 4) * Math.PI * 2;
      ctx.beginPath();
      ctx.arc(cx + Math.cos(angle) * r * 0.18, cy + dy + Math.sin(angle) * r * 0.15, 4, 0, Math.PI * 2);
      ctx.stroke();
    }
  });

  // Cleavage furrow
  ctx.strokeStyle = '#DC143C';
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.moveTo(cx - r * 0.8, cy);
  ctx.lineTo(cx + r * 0.8, cy);
  ctx.stroke();

  ctx.fillStyle = '#4169E1';
  ctx.font = `${Math.max(10, width * 0.05)}px Arial`;
  ctx.textAlign = 'center';
  ctx.fillText('Telophase — Nuclear Envelopes Reform', cx, cy + r * 1.2 + 14);
}

// ─────────────────────────────────────────────

static drawHormonalFeedback(ctx, x, y, width, height, axis) {
  ctx.save();
  ctx.translate(x, y);

  switch (axis) {
    case 'complete':
      this.drawHormonalFeedbackComplete(ctx, width, height);
      break;
    case 'hpg':
      this.drawHormonalFeedbackHPG(ctx, width, height);
      break;
    case 'female':
      this.drawHormonalFeedbackFemale(ctx, width, height);
      break;
    case 'male':
      this.drawHormonalFeedbackMale(ctx, width, height);
      break;
    default:
      this.drawHormonalFeedbackComplete(ctx, width, height);
  }

  ctx.restore();
}

static drawHormonalFeedbackComplete(ctx, width, height) {
  this.drawHormonalFeedbackHPG(ctx, width, height);
}

static drawHormonalFeedbackHPG(ctx, width, height) {
  const cx = width / 2, cy = height / 2;

  // Three tiers: Hypothalamus → Pituitary → Gonads
  const tiers = [
    { label: 'Hypothalamus', hormone: 'GnRH', color: '#9370DB', y: cy - height * 0.32, w: width * 0.3, h: height * 0.1 },
    { label: 'Anterior Pituitary', hormone: 'FSH / LH', color: '#4169E1', y: cy - height * 0.05, w: width * 0.32, h: height * 0.1 },
    { label: 'Gonads', hormone: 'Estrogen / Testosterone', color: '#228B22', y: cy + height * 0.22, w: width * 0.38, h: height * 0.1 },
  ];

  tiers.forEach(t => {
    ctx.fillStyle = t.color + '33';
    ctx.strokeStyle = t.color;
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.roundRect(cx - t.w / 2, t.y - t.h / 2, t.w, t.h, 8);
    ctx.fill();
    ctx.stroke();
    ctx.fillStyle = t.color;
    ctx.font = `bold ${Math.max(9, width * 0.04)}px Arial`;
    ctx.textAlign = 'center';
    ctx.fillText(t.label, cx, t.y - 2);
    ctx.font = `${Math.max(8, width * 0.034)}px Arial`;
    ctx.fillText(t.hormone, cx, t.y + 12);
  });

  // Stimulatory arrows (downward, left side)
  const stimArrows = [
    { y1: tiers[0].y + tiers[0].h / 2, y2: tiers[1].y - tiers[1].h / 2, color: '#9370DB' },
    { y1: tiers[1].y + tiers[1].h / 2, y2: tiers[2].y - tiers[2].h / 2, color: '#4169E1' },
  ];
  stimArrows.forEach(a => {
    ctx.strokeStyle = a.color;
    ctx.lineWidth = 2.5;
    ctx.beginPath();
    ctx.moveTo(cx - width * 0.08, a.y1);
    ctx.lineTo(cx - width * 0.08, a.y2);
    ctx.stroke();
    // Arrowhead
    ctx.fillStyle = a.color;
    ctx.beginPath();
    ctx.moveTo(cx - width * 0.08, a.y2);
    ctx.lineTo(cx - width * 0.08 - 5, a.y2 - 8);
    ctx.lineTo(cx - width * 0.08 + 5, a.y2 - 8);
    ctx.closePath();
    ctx.fill();
    ctx.fillStyle = a.color;
    ctx.font = `${Math.max(8, width * 0.032)}px Arial`;
    ctx.textAlign = 'right';
    ctx.fillText('+', cx - width * 0.1, (a.y1 + a.y2) / 2 + 4);
  });

  // Negative feedback arrows (upward, right side, dashed)
  const fbArrows = [
    { y1: tiers[2].y - tiers[2].h / 2, y2: tiers[1].y + tiers[1].h / 2, color: '#DC143C' },
    { y1: tiers[2].y - tiers[2].h / 2, y2: tiers[0].y + tiers[0].h / 2, color: '#DC143C' },
  ];
  fbArrows.forEach((a, idx) => {
    ctx.strokeStyle = a.color;
    ctx.lineWidth = 2;
    ctx.setLineDash([5, 3]);
    ctx.beginPath();
    const rx = cx + width * (0.1 + idx * 0.06);
    ctx.moveTo(rx, a.y1);
    ctx.lineTo(rx, a.y2);
    ctx.stroke();
    ctx.setLineDash([]);
    // Flat inhibition bar
    ctx.beginPath();
    ctx.moveTo(rx - 5, a.y2);
    ctx.lineTo(rx + 5, a.y2);
    ctx.stroke();
    ctx.fillStyle = a.color;
    ctx.font = `${Math.max(8, width * 0.032)}px Arial`;
    ctx.textAlign = 'left';
    ctx.fillText('−', rx + 6, (a.y1 + a.y2) / 2 + 4);
  });

  ctx.fillStyle = '#333';
  ctx.font = `${Math.max(11, width * 0.05)}px Arial`;
  ctx.textAlign = 'center';
  ctx.fillText('HPG Axis — Hormonal Feedback', cx, height * 0.97);
}

static drawHormonalFeedbackFemale(ctx, width, height) {
  const cx = width / 2, cy = height / 2;

  const tiers = [
    { label: 'Hypothalamus', sub: 'GnRH (pulsatile)', color: '#9370DB', y: cy - height * 0.34 },
    { label: 'Pituitary', sub: 'FSH + LH', color: '#4169E1', y: cy - height * 0.06 },
    { label: 'Ovary', sub: 'Estrogen + Progesterone', color: '#FF69B4', y: cy + height * 0.22 },
    { label: 'Uterus / Breast', sub: 'End organ response', color: '#228B22', y: cy + height * 0.4 },
  ];

  tiers.forEach((t, i) => {
    const w = width * 0.34;
    ctx.fillStyle = t.color + '22';
    ctx.strokeStyle = t.color;
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.roundRect(cx - w / 2, t.y - height * 0.055, w, height * 0.08, 6);
    ctx.fill();
    ctx.stroke();
    ctx.fillStyle = t.color;
    ctx.font = `bold ${Math.max(9, width * 0.038)}px Arial`;
    ctx.textAlign = 'center';
    ctx.fillText(t.label, cx, t.y - 4);
    ctx.font = `${Math.max(7, width * 0.03)}px Arial`;
    ctx.fillText(t.sub, cx, t.y + 10);

    if (i < tiers.length - 1) {
      ctx.strokeStyle = t.color;
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(cx, t.y + height * 0.025);
      ctx.lineTo(cx, tiers[i + 1].y - height * 0.055);
      ctx.stroke();
      ctx.fillStyle = t.color;
      ctx.beginPath();
      const ay = tiers[i + 1].y - height * 0.055;
      ctx.moveTo(cx, ay);
      ctx.lineTo(cx - 5, ay - 8);
      ctx.lineTo(cx + 5, ay - 8);
      ctx.closePath();
      ctx.fill();
    }
  });

  // Long-loop negative feedback
  ctx.strokeStyle = '#DC143C';
  ctx.lineWidth = 2;
  ctx.setLineDash([5, 3]);
  const fbx = cx + width * 0.22;
  ctx.beginPath();
  ctx.moveTo(fbx, tiers[2].y);
  ctx.lineTo(fbx, tiers[0].y);
  ctx.stroke();
  ctx.setLineDash([]);
  ctx.fillStyle = '#DC143C';
  ctx.font = `${Math.max(8, width * 0.035)}px Arial`;
  ctx.textAlign = 'left';
  ctx.fillText('−  Long-loop', fbx + 4, (tiers[0].y + tiers[2].y) / 2);
  ctx.fillText('feedback', fbx + 4, (tiers[0].y + tiers[2].y) / 2 + 12);

  ctx.fillStyle = '#C71585';
  ctx.font = `${Math.max(11, width * 0.05)}px Arial`;
  ctx.textAlign = 'center';
  ctx.fillText('Female HPG Axis', cx, height * 0.97);
}

static drawHormonalFeedbackMale(ctx, width, height) {
  const cx = width / 2, cy = height / 2;

  const tiers = [
    { label: 'Hypothalamus', sub: 'GnRH', color: '#9370DB', y: cy - height * 0.3 },
    { label: 'Anterior Pituitary', sub: 'LH  |  FSH', color: '#4169E1', y: cy - height * 0.06 },
    { label: 'Testis', sub: 'Testosterone  |  Inhibin B', color: '#CD853F', y: cy + height * 0.22 },
  ];

  tiers.forEach((t, i) => {
    const w = width * 0.36;
    ctx.fillStyle = t.color + '22';
    ctx.strokeStyle = t.color;
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.roundRect(cx - w / 2, t.y - height * 0.055, w, height * 0.09, 6);
    ctx.fill();
    ctx.stroke();
    ctx.fillStyle = t.color;
    ctx.font = `bold ${Math.max(9, width * 0.038)}px Arial`;
    ctx.textAlign = 'center';
    ctx.fillText(t.label, cx, t.y - 2);
    ctx.font = `${Math.max(7, width * 0.032)}px Arial`;
    ctx.fillText(t.sub, cx, t.y + 12);

    if (i < tiers.length - 1) {
      ctx.strokeStyle = t.color;
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(cx - width * 0.08, t.y + height * 0.035);
      ctx.lineTo(cx - width * 0.08, tiers[i + 1].y - height * 0.055);
      ctx.stroke();
      const ay = tiers[i + 1].y - height * 0.055;
      ctx.fillStyle = t.color;
      ctx.beginPath();
      ctx.moveTo(cx - width * 0.08, ay);
      ctx.lineTo(cx - width * 0.08 - 5, ay - 8);
      ctx.lineTo(cx - width * 0.08 + 5, ay - 8);
      ctx.closePath();
      ctx.fill();
    }
  });

  // Testosterone negative feedback
  ctx.strokeStyle = '#DC143C';
  ctx.lineWidth = 2;
  ctx.setLineDash([5, 3]);
  ctx.beginPath();
  ctx.moveTo(cx + width * 0.14, tiers[2].y - height * 0.02);
  ctx.lineTo(cx + width * 0.14, tiers[0].y + height * 0.04);
  ctx.stroke();
  ctx.setLineDash([]);
  ctx.fillStyle = '#DC143C';
  ctx.font = `${Math.max(8, width * 0.035)}px Arial`;
  ctx.textAlign = 'left';
  ctx.fillText('Testosterone', cx + width * 0.16, cy);
  ctx.fillText('−  feedback', cx + width * 0.16, cy + 12);

  // Inhibin B → FSH only
  ctx.strokeStyle = '#FF8C00';
  ctx.lineWidth = 2;
  ctx.setLineDash([4, 4]);
  ctx.beginPath();
  ctx.moveTo(cx + width * 0.2, tiers[2].y - height * 0.02);
  ctx.lineTo(cx + width * 0.2, tiers[1].y + height * 0.04);
  ctx.stroke();
  ctx.setLineDash([]);
  ctx.fillStyle = '#FF8C00';
  ctx.textAlign = 'left';
  ctx.fillText('Inhibin B → FSH', cx + width * 0.22, (tiers[1].y + tiers[2].y) / 2 + 4);

  ctx.fillStyle = '#8B4513';
  ctx.font = `${Math.max(11, width * 0.05)}px Arial`;
  ctx.textAlign = 'center';
  ctx.fillText('Male HPG Axis', cx, height * 0.97);
}

// ─────────────────────────────────────────────

static drawSpermiogenesis(ctx, x, y, width, height, stage) {
  ctx.save();
  ctx.translate(x, y);

  switch (stage) {
    case 'complete':
      this.drawSpermiogenesisComplete(ctx, width, height);
      break;
    case 'golgi':
      this.drawSpermiogenesisGolgi(ctx, width, height);
      break;
    case 'cap':
      this.drawSpermiogenesisCap(ctx, width, height);
      break;
    case 'acrosome':
      this.drawSpermiogenesisAcrosome(ctx, width, height);
      break;
    case 'maturation':
      this.drawSpermiogenesisMaturation(ctx, width, height);
      break;
    default:
      this.drawSpermiogenesisComplete(ctx, width, height);
  }

  ctx.restore();
}

static drawSpermiogenesisComplete(ctx, width, height) {
  const stages = ['Spermatid\n(Round)', 'Golgi\nPhase', 'Cap\nPhase', 'Acrosomal\nPhase', 'Maturation\nPhase', 'Spermatozoon'];
  const sw = width / stages.length;

  stages.forEach((label, i) => {
    const cx = sw * i + sw / 2;
    const cy = height * 0.42;
    const progress = i / (stages.length - 1);

    // Cell body (elongating)
    const cellH = 18 + progress * 14;
    const cellW = 14 - progress * 4;
    ctx.fillStyle = '#FFF8DC';
    ctx.strokeStyle = '#CD853F';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.ellipse(cx, cy, cellW, cellH, 0, 0, Math.PI * 2);
    ctx.fill();
    ctx.stroke();

    // Nucleus (condensing/elongating)
    ctx.fillStyle = `hsl(220, 70%, ${70 - progress * 30}%)`;
    ctx.beginPath();
    ctx.ellipse(cx, cy, cellW * 0.7, cellH * (0.5 - progress * 0.15), 0, 0, Math.PI * 2);
    ctx.fill();

    // Acrosome (developing cap)
    if (i >= 1) {
      ctx.fillStyle = `rgba(255, 100, 50, ${0.2 + progress * 0.6})`;
      ctx.strokeStyle = '#DC143C';
      ctx.lineWidth = 1.5;
      ctx.beginPath();
      ctx.ellipse(cx, cy - cellH * (0.5 - progress * 0.1), cellW * 0.7, cellH * (0.15 + progress * 0.1), 0, 0, Math.PI);
      ctx.fill();
      ctx.stroke();
    }

    // Flagellum (developing)
    if (i >= 3) {
      const tailLength = (i - 2) * height * 0.08;
      ctx.strokeStyle = '#4169E1';
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(cx, cy + cellH);
      ctx.bezierCurveTo(cx + 4, cy + cellH + tailLength * 0.3, cx - 4, cy + cellH + tailLength * 0.6, cx, cy + cellH + tailLength);
      ctx.stroke();
    }

    // Mitochondrial sheath
    if (i >= 4) {
      ctx.strokeStyle = '#FF8C00';
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(cx - cellW * 0.8, cy + cellH * 0.4);
      ctx.lineTo(cx - cellW * 0.8, cy + cellH * 0.8);
      ctx.moveTo(cx + cellW * 0.8, cy + cellH * 0.4);
      ctx.lineTo(cx + cellW * 0.8, cy + cellH * 0.8);
      ctx.stroke();
    }

    // Arrow to next
    if (i < stages.length - 1) {
      ctx.strokeStyle = '#999';
      ctx.lineWidth = 1.5;
      ctx.beginPath();
      ctx.moveTo(cx + sw * 0.38, cy);
      ctx.lineTo(cx + sw * 0.62, cy);
      ctx.stroke();
      ctx.fillStyle = '#999';
      ctx.beginPath();
      ctx.moveTo(cx + sw * 0.62, cy);
      ctx.lineTo(cx + sw * 0.56, cy - 4);
      ctx.lineTo(cx + sw * 0.56, cy + 4);
      ctx.closePath();
      ctx.fill();
    }

    ctx.fillStyle = '#333';
    ctx.font = `${Math.max(7, width * 0.028)}px Arial`;
    ctx.textAlign = 'center';
    label.split('\n').forEach((line, li) => {
      ctx.fillText(line, cx, cy + cellH + 16 + li * 12 + (i >= 3 ? height * 0.08 * (i - 2) : 0));
    });
  });

  ctx.fillStyle = '#8B4513';
  ctx.font = `${Math.max(11, width * 0.05)}px Arial`;
  ctx.textAlign = 'center';
  ctx.fillText('Spermiogenesis', width / 2, height * 0.97);
}

static drawSpermiogenesisGolgi(ctx, width, height) {
  const cx = width / 2, cy = height / 2;
  // Round spermatid with Golgi complex
  ctx.fillStyle = '#FFF8DC';
  ctx.strokeStyle = '#CD853F';
  ctx.lineWidth = 2.5;
  ctx.beginPath();
  ctx.arc(cx, cy, width * 0.25, 0, Math.PI * 2);
  ctx.fill();
  ctx.stroke();

  // Large round nucleus
  ctx.fillStyle = '#B0C4DE';
  ctx.strokeStyle = '#4169E1';
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.arc(cx, cy, width * 0.14, 0, Math.PI * 2);
  ctx.fill();
  ctx.stroke();

  // Golgi apparatus (stacked cisternae)
  ctx.strokeStyle = '#DAA520';
  ctx.lineWidth = 2.5;
  ctx.lineCap = 'round';
  for (let g = 0; g < 4; g++) {
    ctx.beginPath();
    ctx.arc(cx + width * 0.12, cy - height * 0.08 + g * height * 0.04, width * 0.04 + g * 2, 0, Math.PI);
    ctx.stroke();
  }

  // Proacrosomal granule forming
  ctx.fillStyle = 'rgba(255,100,50,0.7)';
  ctx.beginPath();
  ctx.arc(cx, cy - width * 0.14, width * 0.04, 0, Math.PI * 2);
  ctx.fill();

  ctx.fillStyle = '#8B4513';
  ctx.font = `${Math.max(10, width * 0.05)}px Arial`;
  ctx.textAlign = 'center';
  ctx.fillText('Golgi Phase', cx, cy + height * 0.38);
}

static drawSpermiogenesisCap(ctx, width, height) {
  const cx = width / 2, cy = height / 2;
  ctx.fillStyle = '#FFF8DC';
  ctx.strokeStyle = '#CD853F';
  ctx.lineWidth = 2.5;
  ctx.beginPath();
  ctx.arc(cx, cy, width * 0.25, 0, Math.PI * 2);
  ctx.fill();
  ctx.stroke();

  ctx.fillStyle = '#B0C4DE';
  ctx.strokeStyle = '#4169E1';
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.arc(cx, cy, width * 0.14, 0, Math.PI * 2);
  ctx.fill();
  ctx.stroke();

  // Acrosomal cap spreading over nucleus
  ctx.fillStyle = 'rgba(255,100,50,0.5)';
  ctx.strokeStyle = '#DC143C';
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.arc(cx, cy, width * 0.14, Math.PI * 1.1, Math.PI * 1.9);
  ctx.arc(cx, cy, width * 0.18, Math.PI * 1.9, Math.PI * 1.1, true);
  ctx.closePath();
  ctx.fill();
  ctx.stroke();

  ctx.fillStyle = '#DC143C';
  ctx.font = `${Math.max(9, width * 0.04)}px Arial`;
  ctx.textAlign = 'left';
  ctx.fillText('Acrosomal cap', cx + width * 0.2, cy - height * 0.12);

  ctx.fillStyle = '#8B4513';
  ctx.font = `${Math.max(10, width * 0.05)}px Arial`;
  ctx.textAlign = 'center';
  ctx.fillText('Cap Phase', cx, cy + height * 0.38);
}

static drawSpermiogenesisAcrosome(ctx, width, height) {
  const cx = width / 2, cy = height / 2;

  // Elongating cell
  ctx.fillStyle = '#FFF8DC';
  ctx.strokeStyle = '#CD853F';
  ctx.lineWidth = 2.5;
  ctx.beginPath();
  ctx.ellipse(cx, cy, width * 0.1, height * 0.3, 0, 0, Math.PI * 2);
  ctx.fill();
  ctx.stroke();

  // Elongated nucleus
  ctx.fillStyle = '#5F9EA0';
  ctx.strokeStyle = '#2F4F4F';
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.ellipse(cx, cy - height * 0.06, width * 0.07, height * 0.18, 0, 0, Math.PI * 2);
  ctx.fill();
  ctx.stroke();

  // Acrosome covering anterior nucleus
  ctx.fillStyle = 'rgba(220,20,60,0.6)';
  ctx.strokeStyle = '#DC143C';
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.ellipse(cx, cy - height * 0.18, width * 0.07, height * 0.08, 0, 0, Math.PI);
  ctx.fill();
  ctx.stroke();

  // Annulus
  ctx.strokeStyle = '#DAA520';
  ctx.lineWidth = 3;
  ctx.beginPath();
  ctx.arc(cx, cy + height * 0.08, width * 0.1, 0, Math.PI * 2);
  ctx.stroke();

  // Flagellum
  ctx.strokeStyle = '#4169E1';
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.moveTo(cx, cy + height * 0.3);
  ctx.bezierCurveTo(cx + 8, cy + height * 0.4, cx - 8, cy + height * 0.45, cx, cy + height * 0.48);
  ctx.stroke();

  ctx.fillStyle = '#8B4513';
  ctx.font = `${Math.max(10, width * 0.05)}px Arial`;
  ctx.textAlign = 'center';
  ctx.fillText('Acrosomal Phase', cx, cy + height * 0.47);
}

static drawSpermiogenesisMaturation(ctx, width, height) {
  const cx = width / 2, cy = height * 0.35;

  // Mature spermatozoon (full view)
  // Acrosome
  ctx.fillStyle = 'rgba(220,20,60,0.7)';
  ctx.strokeStyle = '#DC143C';
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.ellipse(cx, cy - height * 0.12, width * 0.06, height * 0.06, 0, 0, Math.PI);
  ctx.fill();
  ctx.stroke();

  // Head
  ctx.fillStyle = '#5F9EA0';
  ctx.strokeStyle = '#2F4F4F';
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.ellipse(cx, cy, width * 0.07, height * 0.12, 0, 0, Math.PI * 2);
  ctx.fill();
  ctx.stroke();

  // Neck
  ctx.fillStyle = '#DAA520';
  ctx.beginPath();
  ctx.ellipse(cx, cy + height * 0.13, width * 0.04, height * 0.02, 0, 0, Math.PI * 2);
  ctx.fill();

  // Midpiece (mitochondrial sheath)
  ctx.fillStyle = '#FF8C00';
  ctx.strokeStyle = '#B8860B';
  ctx.lineWidth = 1.5;
  ctx.beginPath();
  ctx.roundRect(cx - width * 0.025, cy + height * 0.15, width * 0.05, height * 0.18, 3);
  ctx.fill();
  ctx.stroke();
  // Mitochondria coil lines
  ctx.strokeStyle = '#8B4513';
  ctx.lineWidth = 1;
  for (let m = 1; m < 6; m++) {
    ctx.beginPath();
    ctx.moveTo(cx - width * 0.025, cy + height * 0.15 + m * height * 0.03);
    ctx.lineTo(cx + width * 0.025, cy + height * 0.15 + m * height * 0.03);
    ctx.stroke();
  }

  // Principal piece
  ctx.strokeStyle = '#4169E1';
  ctx.lineWidth = 3;
  ctx.lineCap = 'round';
  ctx.beginPath();
  ctx.moveTo(cx, cy + height * 0.33);
  ctx.lineTo(cx, cy + height * 0.6);
  ctx.stroke();

  // End piece
  ctx.lineWidth = 1.5;
  ctx.beginPath();
  ctx.moveTo(cx, cy + height * 0.6);
  ctx.bezierCurveTo(cx + 4, cy + height * 0.68, cx - 4, cy + height * 0.73, cx, cy + height * 0.78);
  ctx.stroke();

  // Labels
  const labels = [
    { text: 'Acrosome', y: cy - height * 0.14, x: cx + width * 0.12 },
    { text: 'Head', y: cy, x: cx + width * 0.12 },
    { text: 'Midpiece', y: cy + height * 0.24, x: cx + width * 0.12 },
    { text: 'Tail', y: cy + height * 0.5, x: cx + width * 0.12 },
  ];
  ctx.strokeStyle = '#999';
  ctx.lineWidth = 1;
  ctx.fillStyle = '#333';
  ctx.font = `${Math.max(8, width * 0.038)}px Arial`;
  ctx.textAlign = 'left';
  labels.forEach(l => {
    ctx.beginPath();
    ctx.moveTo(cx + width * 0.08, l.y);
    ctx.lineTo(l.x, l.y);
    ctx.stroke();
    ctx.fillText(l.text, l.x + 3, l.y + 4);
  });

  ctx.fillStyle = '#8B4513';
  ctx.font = `${Math.max(10, width * 0.05)}px Arial`;
  ctx.textAlign = 'center';
  ctx.fillText('Mature Spermatozoon', cx, height * 0.95);
}

// ─────────────────────────────────────────────

static drawFolliculogenesis(ctx, x, y, width, height, stage) {
  ctx.save();
  ctx.translate(x, y);

  switch (stage) {
    case 'complete':
      this.drawFolliculogenesisComplete(ctx, width, height);
      break;
    case 'primordial':
      this.drawFolliculogenesisPrimordial(ctx, width, height);
      break;
    case 'primary':
      this.drawFolliculogenesisPrimary(ctx, width, height);
      break;
    case 'secondary':
      this.drawFolliculogenesisSecondary(ctx, width, height);
      break;
    case 'antral':
      this.drawFolliculogenesisAntral(ctx, width, height);
      break;
    case 'graafian':
      this.drawFolliculogenesisGraafian(ctx, width, height);
      break;
    default:
      this.drawFolliculogenesisComplete(ctx, width, height);
  }

  ctx.restore();
}

static drawFolliculogenesisComplete(ctx, width, height) {
  const stages = [
    { label: 'Primordial', layers: 0, antrum: false, size: 0.04 },
    { label: 'Primary', layers: 1, antrum: false, size: 0.06 },
    { label: 'Secondary', layers: 2, antrum: false, size: 0.09 },
    { label: 'Early Antral', layers: 2, antrum: true, size: 0.13 },
    { label: 'Graafian', layers: 3, antrum: true, size: 0.18 },
  ];
  const sw = width / stages.length;

  stages.forEach((s, i) => {
    const cx = sw * i + sw / 2;
    const cy = height * 0.48;
    const r = width * s.size;

    // Theca
    if (s.layers >= 1) {
      ctx.fillStyle = '#FFE4C4';
      ctx.strokeStyle = '#8B4513';
      ctx.lineWidth = 1.5;
      ctx.beginPath();
      ctx.arc(cx, cy, r * 1.2, 0, Math.PI * 2);
      ctx.fill();
      ctx.stroke();
    }

    // Granulosa layers
    const granulosaCols = ['#FFE4E1', '#FFD0D0', '#FFC0C0'];
    for (let l = Math.min(s.layers, 3) - 1; l >= 0; l--) {
      ctx.fillStyle = granulosaCols[l] || '#FFE4E1';
      ctx.strokeStyle = '#C71585';
      ctx.lineWidth = 1.5;
      ctx.beginPath();
      ctx.arc(cx, cy, r * (0.9 - l * 0.08), 0, Math.PI * 2);
      ctx.fill();
      ctx.stroke();
    }

    // Antrum (fluid space)
    if (s.antrum) {
      ctx.fillStyle = '#E0F0FF';
      ctx.strokeStyle = '#4682B4';
      ctx.lineWidth = 1.5;
      ctx.beginPath();
      ctx.arc(cx + r * 0.1, cy - r * 0.1, r * 0.45, 0, Math.PI * 2);
      ctx.fill();
      ctx.stroke();
    }

    // Zona pellucida
    ctx.strokeStyle = '#FF69B4';
    ctx.lineWidth = 2;
    ctx.globalAlpha = 0.6;
    ctx.beginPath();
    ctx.arc(cx, cy, r * 0.38, 0, Math.PI * 2);
    ctx.stroke();
    ctx.globalAlpha = 1;

    // Oocyte
    ctx.fillStyle = '#FFD700';
    ctx.strokeStyle = '#DAA520';
    ctx.lineWidth = 1.5;
    ctx.beginPath();
    ctx.arc(cx, cy, r * 0.3, 0, Math.PI * 2);
    ctx.fill();
    ctx.stroke();

    ctx.fillStyle = '#333';
    ctx.font = `${Math.max(7, width * 0.028)}px Arial`;
    ctx.textAlign = 'center';
    ctx.fillText(s.label, cx, cy + r * 1.35 + 10);
  });

  // Arrow progression
  ctx.strokeStyle = '#9370DB';
  ctx.lineWidth = 1.5;
  for (let i = 0; i < stages.length - 1; i++) {
    const x1 = sw * i + sw * 0.88;
    const x2 = sw * (i + 1) + sw * 0.12;
    const ay = height * 0.48;
    ctx.beginPath();
    ctx.moveTo(x1, ay);
    ctx.lineTo(x2, ay);
    ctx.stroke();
    ctx.fillStyle = '#9370DB';
    ctx.beginPath();
    ctx.moveTo(x2, ay);
    ctx.lineTo(x2 - 6, ay - 4);
    ctx.lineTo(x2 - 6, ay + 4);
    ctx.closePath();
    ctx.fill();
  }

  ctx.fillStyle = '#C71585';
  ctx.font = `${Math.max(11, width * 0.05)}px Arial`;
  ctx.textAlign = 'center';
  ctx.fillText('Folliculogenesis', width / 2, height * 0.97);
}

static drawFolliculogenesisPrimordial(ctx, width, height) {
  const cx = width / 2, cy = height / 2;
  const r = width * 0.12;

  // Single flat granulosa layer
  ctx.fillStyle = '#FFEEDD';
  ctx.strokeStyle = '#CD853F';
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.arc(cx, cy, r * 1.4, 0, Math.PI * 2);
  ctx.fill();
  ctx.stroke();

  // Flat granulosa cells
  ctx.fillStyle = '#FFD0D0';
  ctx.strokeStyle = '#C71585';
  ctx.lineWidth = 1;
  const numCells = 10;
  for (let i = 0; i < numCells; i++) {
    const angle = (i / numCells) * Math.PI * 2;
    ctx.beginPath();
    ctx.ellipse(cx + Math.cos(angle) * r * 1.1, cy + Math.sin(angle) * r * 1.1, 7, 4, angle, 0, Math.PI * 2);
    ctx.fill();
    ctx.stroke();
  }

  // Oocyte
  ctx.fillStyle = '#FFD700';
  ctx.strokeStyle = '#DAA520';
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.arc(cx, cy, r, 0, Math.PI * 2);
  ctx.fill();
  ctx.stroke();

  // Nucleus
  ctx.fillStyle = '#FFA500';
  ctx.beginPath();
  ctx.arc(cx, cy, r * 0.35, 0, Math.PI * 2);
  ctx.fill();

  ctx.fillStyle = '#8B4513';
  ctx.font = `${Math.max(10, width * 0.05)}px Arial`;
  ctx.textAlign = 'center';
  ctx.fillText('Primordial Follicle', cx, cy + height * 0.38);
}

static drawFolliculogenesisPrimary(ctx, width, height) {
  const cx = width / 2, cy = height / 2;
  const r = width * 0.16;

  // Single cuboidal granulosa layer
  ctx.fillStyle = '#FFE4C4';
  ctx.strokeStyle = '#8B4513';
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.arc(cx, cy, r * 1.5, 0, Math.PI * 2);
  ctx.fill();
  ctx.stroke();

  // Cuboidal granulosa cells
  ctx.fillStyle = '#FFE4E1';
  ctx.strokeStyle = '#C71585';
  ctx.lineWidth = 1.5;
  const numCells2 = 12;
  for (let i = 0; i < numCells2; i++) {
    const angle = (i / numCells2) * Math.PI * 2;
    ctx.beginPath();
    ctx.arc(cx + Math.cos(angle) * r * 1.2, cy + Math.sin(angle) * r * 1.2, 7, 0, Math.PI * 2);
    ctx.fill();
    ctx.stroke();
  }

  // Zona pellucida (forming)
  ctx.strokeStyle = '#FF69B4';
  ctx.lineWidth = 3;
  ctx.globalAlpha = 0.5;
  ctx.beginPath();
  ctx.arc(cx, cy, r * 0.8, 0, Math.PI * 2);
  ctx.stroke();
  ctx.globalAlpha = 1;

  // Oocyte (larger)
  ctx.fillStyle = '#FFD700';
  ctx.strokeStyle = '#DAA520';
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.arc(cx, cy, r * 0.72, 0, Math.PI * 2);
  ctx.fill();
  ctx.stroke();

  ctx.fillStyle = '#FFA500';
  ctx.beginPath();
  ctx.arc(cx, cy, r * 0.25, 0, Math.PI * 2);
  ctx.fill();

  ctx.fillStyle = '#8B4513';
  ctx.font = `${Math.max(10, width * 0.05)}px Arial`;
  ctx.textAlign = 'center';
  ctx.fillText('Primary Follicle', cx, cy + height * 0.42);
}

static drawFolliculogenesisSecondary(ctx, width, height) {
  const cx = width / 2, cy = height / 2;
  const r = width * 0.22;

  // Theca externa
  ctx.fillStyle = '#FAEBD7';
  ctx.strokeStyle = '#8B4513';
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.arc(cx, cy, r * 1.4, 0, Math.PI * 2);
  ctx.fill();
  ctx.stroke();

  // Theca interna
  ctx.fillStyle = '#FFD7A0';
  ctx.strokeStyle = '#CD853F';
  ctx.lineWidth = 1.5;
  ctx.beginPath();
  ctx.arc(cx, cy, r * 1.2, 0, Math.PI * 2);
  ctx.fill();
  ctx.stroke();

  // Multiple granulosa layers
  for (let l = 0; l < 3; l++) {
    ctx.fillStyle = `rgba(255, ${200 - l * 20}, ${200 - l * 20}, 0.6)`;
    ctx.strokeStyle = '#C71585';
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.arc(cx, cy, r * (1.0 - l * 0.1), 0, Math.PI * 2);
    ctx.fill();
    ctx.stroke();
  }

  // Zona pellucida
  ctx.strokeStyle = '#FF69B4';
  ctx.lineWidth = 4;
  ctx.globalAlpha = 0.5;
  ctx.beginPath();
  ctx.arc(cx, cy, r * 0.6, 0, Math.PI * 2);
  ctx.stroke();
  ctx.globalAlpha = 1;

  ctx.fillStyle = '#FFD700';
  ctx.strokeStyle = '#DAA520';
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.arc(cx, cy, r * 0.5, 0, Math.PI * 2);
  ctx.fill();
  ctx.stroke();

  ctx.fillStyle = '#8B4513';
  ctx.font = `${Math.max(10, width * 0.05)}px Arial`;
  ctx.textAlign = 'center';
  ctx.fillText('Secondary Follicle', cx, cy + height * 0.44);
}

static drawFolliculogenesisAntral(ctx, width, height) {
  const cx = width / 2, cy = height / 2;
  const r = width * 0.3;

  // Theca
  ctx.fillStyle = '#FAEBD7';
  ctx.strokeStyle = '#8B4513';
  ctx.lineWidth = 2.5;
  ctx.beginPath();
  ctx.arc(cx, cy, r * 1.3, 0, Math.PI * 2);
  ctx.fill();
  ctx.stroke();

  // Granulosa
  ctx.fillStyle = '#FFE4E1';
  ctx.strokeStyle = '#C71585';
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.arc(cx, cy, r, 0, Math.PI * 2);
  ctx.fill();
  ctx.stroke();

  // Antrum (forming)
  ctx.fillStyle = '#E0F0FF';
  ctx.strokeStyle = '#4682B4';
  ctx.lineWidth = 1.5;
  ctx.beginPath();
  ctx.arc(cx + r * 0.15, cy - r * 0.15, r * 0.4, 0, Math.PI * 2);
  ctx.fill();
  ctx.stroke();

  // Cumulus oophorus
  ctx.fillStyle = '#FFEEDD';
  ctx.strokeStyle = '#CD853F';
  ctx.lineWidth = 1.5;
  ctx.beginPath();
  ctx.arc(cx - r * 0.2, cy + r * 0.2, r * 0.25, 0, Math.PI * 2);
  ctx.fill();
  ctx.stroke();

  // Oocyte
  ctx.fillStyle = '#FFD700';
  ctx.strokeStyle = '#DAA520';
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.arc(cx - r * 0.2, cy + r * 0.2, r * 0.16, 0, Math.PI * 2);
  ctx.fill();
  ctx.stroke();

  // Labels
  ctx.fillStyle = '#4682B4';
  ctx.font = `${Math.max(9, width * 0.04)}px Arial`;
  ctx.textAlign = 'left';
  ctx.fillText('Antrum', cx + r * 0.55, cy - r * 0.08);
  ctx.fillStyle = '#CD853F';
  ctx.fillText('Cumulus', cx - r * 0.5, cy + r * 0.5);

  ctx.fillStyle = '#C71585';
  ctx.font = `${Math.max(10, width * 0.05)}px Arial`;
  ctx.textAlign = 'center';
  ctx.fillText('Antral Follicle', cx, cy + height * 0.45);
}

static drawFolliculogenesisGraafian(ctx, width, height) {
  const cx = width / 2, cy = height / 2;
  const r = width * 0.36;

  // Outer theca externa
  ctx.fillStyle = '#F5DEB3';
  ctx.strokeStyle = '#8B4513';
  ctx.lineWidth = 3;
  ctx.beginPath();
  ctx.arc(cx, cy, r, 0, Math.PI * 2);
  ctx.fill();
  ctx.stroke();

  // Theca interna (vascular)
  ctx.fillStyle = '#FFDAB9';
  ctx.strokeStyle = '#CD853F';
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.arc(cx, cy, r * 0.9, 0, Math.PI * 2);
  ctx.fill();
  ctx.stroke();

  // Granulosa (mural)
  ctx.fillStyle = '#FFE4E1';
  ctx.strokeStyle = '#C71585';
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.arc(cx, cy, r * 0.78, 0, Math.PI * 2);
  ctx.fill();
  ctx.stroke();

  // Large antrum
  ctx.fillStyle = '#D4EDFF';
  ctx.strokeStyle = '#4682B4';
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.arc(cx, cy, r * 0.62, 0, Math.PI * 2);
  ctx.fill();
  ctx.stroke();

  // Cumulus-oocyte complex (mound)
  ctx.fillStyle = '#FFEEDD';
  ctx.strokeStyle = '#CD853F';
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.arc(cx - r * 0.2, cy + r * 0.25, r * 0.22, 0, Math.PI * 2);
  ctx.fill();
  ctx.stroke();

  // Zona pellucida
  ctx.strokeStyle = '#FF69B4';
  ctx.lineWidth = 4;
  ctx.globalAlpha = 0.5;
  ctx.beginPath();
  ctx.arc(cx - r * 0.2, cy + r * 0.25, r * 0.14, 0, Math.PI * 2);
  ctx.stroke();
  ctx.globalAlpha = 1;

  // Oocyte (mature, arrested MII)
  ctx.fillStyle = '#FFD700';
  ctx.strokeStyle = '#DAA520';
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.arc(cx - r * 0.2, cy + r * 0.25, r * 0.1, 0, Math.PI * 2);
  ctx.fill();
  ctx.stroke();

  // Stigma (thinning wall)
  ctx.strokeStyle = '#DC143C';
  ctx.lineWidth = 3;
  ctx.beginPath();
  ctx.arc(cx + r * 0.62, cy - r * 0.3, r * 0.1, -0.5, 0.5);
  ctx.stroke();

  ctx.fillStyle = '#DC143C';
  ctx.font = `${Math.max(9, width * 0.04)}px Arial`;
  ctx.textAlign = 'left';
  ctx.fillText('Stigma', cx + r * 0.72, cy - r * 0.3);
  ctx.fillStyle = '#4682B4';
  ctx.fillText('Antrum', cx + r * 0.04, cy - r * 0.18);

  ctx.fillStyle = '#C71585';
  ctx.font = `${Math.max(10, width * 0.05)}px Arial`;
  ctx.textAlign = 'center';
  ctx.fillText('Graafian (Pre-ovulatory) Follicle', cx, cy + height * 0.46);
}

// ─────────────────────────────────────────────

static drawCorpusLuteumCycle(ctx, x, y, width, height, stage) {
  ctx.save();
  ctx.translate(x, y);

  switch (stage) {
    case 'complete':
      this.drawCorpusLuteumCycleComplete(ctx, width, height);
      break;
    case 'formation':
      this.drawCorpusLuteumFormation(ctx, width, height);
      break;
    case 'peak':
      this.drawCorpusLuteumPeak(ctx, width, height);
      break;
    case 'regression':
      this.drawCorpusLuteumRegression(ctx, width, height);
      break;
    case 'albicans':
      this.drawCorpusAlbicans(ctx, width, height);
      break;
    default:
      this.drawCorpusLuteumCycleComplete(ctx, width, height);
  }

  ctx.restore();
}

static drawCorpusLuteumCycleComplete(ctx, width, height) {
  const stages = [
    { label: 'Ovulation', color: '#DC143C', desc: 'Day 14' },
    { label: 'Early CL', color: '#FFD700', desc: 'Day 15–18' },
    { label: 'Peak CL', color: '#FFA500', desc: 'Day 20–22' },
    { label: 'Regression', color: '#DDD', desc: 'Day 24–26' },
    { label: 'Corpus\nAlbicans', color: '#F0F0F0', desc: 'Day 28+' },
  ];
  const sw = width / stages.length;

  stages.forEach((s, i) => {
    const cx = sw * i + sw / 2;
    const cy = height * 0.44;
    const r = sw * 0.26;

    // Main body
    ctx.fillStyle = s.color;
    ctx.strokeStyle = '#8B4513';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.arc(cx, cy, r, 0, Math.PI * 2);
    ctx.fill();
    ctx.stroke();

    if (i === 0) {
      // Ruptured follicle
      ctx.strokeStyle = '#DC143C';
      ctx.lineWidth = 1.5;
      for (let br = 0; br < 6; br++) {
        const angle = (br / 6) * Math.PI * 2;
        ctx.beginPath();
        ctx.moveTo(cx + Math.cos(angle) * r * 0.8, cy + Math.sin(angle) * r * 0.8);
        ctx.lineTo(cx + Math.cos(angle) * r * 1.2, cy + Math.sin(angle) * r * 1.2);
        ctx.stroke();
      }
    } else if (i >= 1 && i <= 2) {
      // Luteal cells (yellow)
      const folds = 8 + i * 2;
      ctx.strokeStyle = '#B8860B';
      ctx.lineWidth = 1;
      for (let f = 0; f < folds; f++) {
        const angle = (f / folds) * Math.PI * 2;
        const rInner = r * 0.5;
        const rOuter = r * 0.85;
        ctx.beginPath();
        ctx.moveTo(cx + Math.cos(angle) * rInner, cy + Math.sin(angle) * rInner);
        ctx.lineTo(cx + Math.cos(angle) * rOuter, cy + Math.sin(angle) * rOuter);
        ctx.stroke();
      }
      // Central clot
      ctx.fillStyle = i === 2 ? '#FF8C00' : '#FFC0A0';
      ctx.beginPath();
      ctx.arc(cx, cy, r * 0.28, 0, Math.PI * 2);
      ctx.fill();
    } else if (i === 3) {
      // Shrinking, vacuolated
      ctx.fillStyle = '#EEE';
      ctx.strokeStyle = '#999';
      ctx.lineWidth = 1;
      for (let v = 0; v < 5; v++) {
        const angle = (v / 5) * Math.PI * 2;
        ctx.beginPath();
        ctx.arc(cx + Math.cos(angle) * r * 0.5, cy + Math.sin(angle) * r * 0.5, r * 0.14, 0, Math.PI * 2);
        ctx.fill();
        ctx.stroke();
      }
    }

    // Progesterone level bar
    const progLevels = [0, 0.3, 1.0, 0.5, 0.05];
    const barH = height * 0.18 * progLevels[i];
    ctx.fillStyle = '#228B22';
    ctx.beginPath();
    ctx.roundRect(cx - sw * 0.1, height * 0.75 - barH, sw * 0.2, barH, [2, 2, 0, 0]);
    ctx.fill();

    ctx.fillStyle = '#333';
    ctx.font = `${Math.max(7, width * 0.028)}px Arial`;
    ctx.textAlign = 'center';
    s.label.split('\n').forEach((line, li) => {
      ctx.fillText(line, cx, cy + r + 14 + li * 11);
    });
    ctx.fillStyle = '#777';
    ctx.font = `${Math.max(6, width * 0.024)}px Arial`;
    ctx.fillText(s.desc, cx, cy + r + 32 + (s.label.includes('\n') ? 8 : 0));
  });

  // Progesterone axis label
  ctx.fillStyle = '#228B22';
  ctx.font = `${Math.max(9, width * 0.038)}px Arial`;
  ctx.textAlign = 'left';
  ctx.fillText('Progesterone', 4, height * 0.78);

  ctx.fillStyle = '#B8860B';
  ctx.font = `${Math.max(11, width * 0.05)}px Arial`;
  ctx.textAlign = 'center';
  ctx.fillText('Corpus Luteum Cycle', width / 2, height * 0.97);
}

static drawCorpusLuteumFormation(ctx, width, height) {
  const cx = width / 2, cy = height / 2;

  // Ovary background
  ctx.fillStyle = '#FFF0F5';
  ctx.strokeStyle = '#FF69B4';
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.ellipse(cx, cy, width * 0.42, height * 0.42, 0, 0, Math.PI * 2);
  ctx.fill();
  ctx.stroke();

  // Empty follicle becoming luteal
  ctx.fillStyle = 'rgba(255,215,0,0.3)';
  ctx.strokeStyle = '#B8860B';
  ctx.lineWidth = 2.5;
  ctx.beginPath();
  ctx.arc(cx, cy - height * 0.08, width * 0.22, 0, Math.PI * 2);
  ctx.fill();
  ctx.stroke();

  // Granulosa-lutein cells invading
  ctx.fillStyle = '#FFD700';
  ctx.strokeStyle = '#DAA520';
  ctx.lineWidth = 1.5;
  for (let i = 0; i < 8; i++) {
    const angle = (i / 8) * Math.PI * 2;
    ctx.beginPath();
    ctx.arc(cx + Math.cos(angle) * width * 0.12, cy - height * 0.08 + Math.sin(angle) * height * 0.12, 8, 0, Math.PI * 2);
    ctx.fill();
    ctx.stroke();
  }

  // Blood clot (central)
  ctx.fillStyle = '#DC143C';
  ctx.beginPath();
  ctx.arc(cx, cy - height * 0.08, width * 0.06, 0, Math.PI * 2);
  ctx.fill();

  ctx.fillStyle = '#B8860B';
  ctx.font = `${Math.max(10, width * 0.05)}px Arial`;
  ctx.textAlign = 'center';
  ctx.fillText('CL Formation (Day 14–16)', cx, cy + height * 0.42);
}

static drawCorpusLuteumPeak(ctx, width, height) {
  const cx = width / 2, cy = height / 2;

  ctx.fillStyle = '#FFF0F5';
  ctx.strokeStyle = '#FF69B4';
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.ellipse(cx, cy, width * 0.42, height * 0.42, 0, 0, Math.PI * 2);
  ctx.fill();
  ctx.stroke();

  // Fully formed CL (larger, brighter yellow)
  ctx.fillStyle = '#FFD700';
  ctx.strokeStyle = '#B8860B';
  ctx.lineWidth = 3;
  ctx.beginPath();
  ctx.arc(cx, cy - height * 0.06, width * 0.28, 0, Math.PI * 2);
  ctx.fill();
  ctx.stroke();

  // Folded inner wall
  ctx.strokeStyle = '#DAA520';
  ctx.lineWidth = 2;
  const folds = 12;
  ctx.beginPath();
  for (let f = 0; f <= folds; f++) {
    const angle = (f / folds) * Math.PI * 2;
    const r = f % 2 === 0 ? width * 0.14 : width * 0.2;
    const px = cx + Math.cos(angle) * r;
    const py = cy - height * 0.06 + Math.sin(angle) * r * (height / width);
    f === 0 ? ctx.moveTo(px, py) : ctx.lineTo(px, py);
  }
  ctx.closePath();
  ctx.fillStyle = '#FFF8DC';
  ctx.fill();
  ctx.stroke();

  // Orange central coagulum
  ctx.fillStyle = '#FF8C00';
  ctx.beginPath();
  ctx.arc(cx, cy - height * 0.06, width * 0.07, 0, Math.PI * 2);
  ctx.fill();

  // Progesterone arrow
  ctx.strokeStyle = '#228B22';
  ctx.fillStyle = '#228B22';
  ctx.lineWidth = 2.5;
  ctx.beginPath();
  ctx.moveTo(cx + width * 0.34, cy + height * 0.1);
  ctx.lineTo(cx + width * 0.34, cy - height * 0.22);
  ctx.stroke();
  ctx.beginPath();
  ctx.moveTo(cx + width * 0.34, cy - height * 0.22);
  ctx.lineTo(cx + width * 0.34 - 5, cy - height * 0.16);
  ctx.lineTo(cx + width * 0.34 + 5, cy - height * 0.16);
  ctx.closePath();
  ctx.fill();
  ctx.font = `${Math.max(9, width * 0.04)}px Arial`;
  ctx.textAlign = 'left';
  ctx.fillText('P4 ↑', cx + width * 0.36, cy - height * 0.06);

  ctx.fillStyle = '#B8860B';
  ctx.font = `${Math.max(10, width * 0.05)}px Arial`;
  ctx.textAlign = 'center';
  ctx.fillText('Peak CL (Day 20–22)', cx, cy + height * 0.42);
}

static drawCorpusLuteumRegression(ctx, width, height) {
  const cx = width / 2, cy = height / 2;

  ctx.fillStyle = '#FFF0F5';
  ctx.strokeStyle = '#FF69B4';
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.ellipse(cx, cy, width * 0.42, height * 0.42, 0, 0, Math.PI * 2);
  ctx.fill();
  ctx.stroke();

  // Regressing CL (smaller, pale)
  ctx.fillStyle = '#F5E6C8';
  ctx.strokeStyle = '#999';
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.arc(cx, cy - height * 0.06, width * 0.2, 0, Math.PI * 2);
  ctx.fill();
  ctx.stroke();

  // Vacuoles (apoptosis)
  ctx.fillStyle = 'rgba(255,255,255,0.8)';
  ctx.strokeStyle = '#CCC';
  ctx.lineWidth = 1;
  for (let v = 0; v < 7; v++) {
    const angle = (v / 7) * Math.PI * 2;
    ctx.beginPath();
    ctx.arc(cx + Math.cos(angle) * width * 0.1, cy - height * 0.06 + Math.sin(angle) * height * 0.1, 7, 0, Math.PI * 2);
    ctx.fill();
    ctx.stroke();
  }

  // Progesterone drop arrow
  ctx.strokeStyle = '#DC143C';
  ctx.fillStyle = '#DC143C';
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.moveTo(cx + width * 0.34, cy - height * 0.22);
  ctx.lineTo(cx + width * 0.34, cy + height * 0.1);
  ctx.stroke();
  ctx.beginPath();
  ctx.moveTo(cx + width * 0.34, cy + height * 0.1);
  ctx.lineTo(cx + width * 0.34 - 5, cy + height * 0.04);
  ctx.lineTo(cx + width * 0.34 + 5, cy + height * 0.04);
  ctx.closePath();
  ctx.fill();
  ctx.font = `${Math.max(9, width * 0.04)}px Arial`;
  ctx.textAlign = 'left';
  ctx.fillText('P4 ↓', cx + width * 0.36, cy - height * 0.06);

  ctx.fillStyle = '#999';
  ctx.font = `${Math.max(10, width * 0.05)}px Arial`;
  ctx.textAlign = 'center';
  ctx.fillText('CL Regression (Day 24–26)', cx, cy + height * 0.42);
}

static drawCorpusAlbicans(ctx, width, height) {
  const cx = width / 2, cy = height / 2;

  ctx.fillStyle = '#FFF0F5';
  ctx.strokeStyle = '#FF69B4';
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.ellipse(cx, cy, width * 0.42, height * 0.42, 0, 0, Math.PI * 2);
  ctx.fill();
  ctx.stroke();

  // Corpus albicans — white scar (fibrosed)
  ctx.fillStyle = '#F0F0F0';
  ctx.strokeStyle = '#CCC';
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.arc(cx, cy - height * 0.08, width * 0.13, 0, Math.PI * 2);
  ctx.fill();
  ctx.stroke();

  // Fibrotic texture
  ctx.strokeStyle = '#999';
  ctx.lineWidth = 1;
  for (let f = 0; f < 8; f++) {
    const angle = (f / 8) * Math.PI * 2;
    ctx.beginPath();
    ctx.moveTo(cx, cy - height * 0.08);
    ctx.lineTo(cx + Math.cos(angle) * width * 0.1, cy - height * 0.08 + Math.sin(angle) * height * 0.1);
    ctx.stroke();
  }

  ctx.fillStyle = '#888';
  ctx.font = `${Math.max(10, width * 0.05)}px Arial`;
  ctx.textAlign = 'center';
  ctx.fillText('Corpus Albicans (Scar)', cx, cy + height * 0.42);
}

// ─────────────────────────────────────────────

static drawTwinDevelopment(ctx, x, y, width, height, type) {
  ctx.save();
  ctx.translate(x, y);

  switch (type) {
    case 'complete':
      this.drawTwinDevelopmentComplete(ctx, width, height);
      break;
    case 'monozygotic':
      this.drawTwinMonozygotic(ctx, width, height);
      break;
    case 'dizygotic':
      this.drawTwinDizygotic(ctx, width, height);
      break;
    case 'comparison':
      this.drawTwinComparison(ctx, width, height);
      break;
    default:
      this.drawTwinDevelopmentComplete(ctx, width, height);
  }

  ctx.restore();
}

static drawTwinDevelopmentComplete(ctx, width, height) {
  const half = width / 2;

  // Dividing line
  ctx.strokeStyle = '#CCC';
  ctx.lineWidth = 1.5;
  ctx.setLineDash([6, 4]);
  ctx.beginPath();
  ctx.moveTo(half, 0);
  ctx.lineTo(half, height);
  ctx.stroke();
  ctx.setLineDash([]);

  // Headers
  ctx.fillStyle = '#4169E1';
  ctx.font = `bold ${Math.max(10, width * 0.04)}px Arial`;
  ctx.textAlign = 'center';
  ctx.fillText('Monozygotic', half * 0.5, height * 0.06);
  ctx.fillStyle = '#228B22';
  ctx.fillText('Dizygotic', half * 1.5, height * 0.06);
  ctx.fillStyle = '#888';
  ctx.font = `${Math.max(8, width * 0.032)}px Arial`;
  ctx.fillText('(Identical)', half * 0.5, height * 0.12);
  ctx.fillText('(Fraternal)', half * 1.5, height * 0.12);

  // Monozygotic side: 1 egg + 1 sperm → zygote → splits
  const mCx = half * 0.5, mCy = height * 0.42;
  // Single fertilized egg
  ctx.fillStyle = '#FFF8DC';
  ctx.strokeStyle = '#DAA520';
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.arc(mCx, mCy - height * 0.22, half * 0.1, 0, Math.PI * 2);
  ctx.fill();
  ctx.stroke();
  ctx.fillStyle = '#DAA520';
  ctx.font = `${Math.max(7, width * 0.028)}px Arial`;
  ctx.textAlign = 'center';
  ctx.fillText('1 zygote', mCx, mCy - height * 0.1);

  // Arrow down
  ctx.strokeStyle = '#4169E1';
  ctx.lineWidth = 1.5;
  ctx.beginPath();
  ctx.moveTo(mCx, mCy - height * 0.08);
  ctx.lineTo(mCx, mCy - height * 0.01);
  ctx.stroke();

  // Two embryos (same membrane origin)
  ctx.strokeStyle = '#4169E1';
  ctx.lineWidth = 2;
  ctx.setLineDash([4, 3]);
  ctx.beginPath();
  ctx.ellipse(mCx, mCy + height * 0.08, half * 0.35, height * 0.3, 0, 0, Math.PI * 2);
  ctx.stroke();
  ctx.setLineDash([]);
  ctx.fillStyle = 'rgba(255,160,122,0.7)';
  ctx.strokeStyle = '#CD853F';
  ctx.lineWidth = 1.5;
  ctx.beginPath();
  ctx.arc(mCx - half * 0.1, mCy + height * 0.08, half * 0.07, 0, Math.PI * 2);
  ctx.fill();
  ctx.stroke();
  ctx.beginPath();
  ctx.arc(mCx + half * 0.1, mCy + height * 0.08, half * 0.07, 0, Math.PI * 2);
  ctx.fill();
  ctx.stroke();

  // Dizygotic side: 2 eggs + 2 sperm → 2 zygotes
  const dCx = half * 1.5, dCy = height * 0.42;
  [-1, 1].forEach(side => {
    ctx.fillStyle = '#FFF8DC';
    ctx.strokeStyle = '#DAA520';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.arc(dCx + side * half * 0.15, dCy - height * 0.22, half * 0.09, 0, Math.PI * 2);
    ctx.fill();
    ctx.stroke();
    // Separate chorions
    ctx.strokeStyle = '#228B22';
    ctx.lineWidth = 2;
    ctx.setLineDash([4, 3]);
    ctx.beginPath();
    ctx.ellipse(dCx + side * half * 0.16, dCy + height * 0.08, half * 0.2, height * 0.28, 0, 0, Math.PI * 2);
    ctx.stroke();
    ctx.setLineDash([]);
    ctx.fillStyle = 'rgba(255,160,122,0.7)';
    ctx.strokeStyle = '#CD853F';
    ctx.lineWidth = 1.5;
    ctx.beginPath();
    ctx.arc(dCx + side * half * 0.16, dCy + height * 0.08, half * 0.08, 0, Math.PI * 2);
    ctx.fill();
    ctx.stroke();
  });

  ctx.fillStyle = '#888';
  ctx.font = `${Math.max(8, width * 0.032)}px Arial`;
  ctx.textAlign = 'center';
  ctx.fillText('Shared chorion', mCx, dCy + height * 0.32);
  ctx.fillText('Separate chorions', dCx, dCy + height * 0.32);

  ctx.fillStyle = '#333';
  ctx.font = `${Math.max(11, width * 0.05)}px Arial`;
  ctx.textAlign = 'center';
  ctx.fillText('Twin Development', width / 2, height * 0.97);
}

static drawTwinMonozygotic(ctx, width, height) {
  const cx = width / 2;

  // Step 1: Single zygote
  const steps = [
    { y: height * 0.12, label: 'Single fertilized egg (zygote)' },
    { y: height * 0.3, label: 'Early cleavage — embryo splits' },
    { y: height * 0.54, label: 'Two embryos (identical DNA)' },
    { y: height * 0.76, label: 'Shared chorion, separate amnions' },
  ];

  steps.forEach((s, i) => {
    const cy = s.y;

    if (i === 0) {
      ctx.fillStyle = '#FFF8DC';
      ctx.strokeStyle = '#DAA520';
      ctx.lineWidth = 2.5;
      ctx.beginPath();
      ctx.arc(cx, cy, width * 0.1, 0, Math.PI * 2);
      ctx.fill();
      ctx.stroke();
      ctx.fillStyle = '#FFA500';
      ctx.beginPath();
      ctx.arc(cx, cy, width * 0.04, 0, Math.PI * 2);
      ctx.fill();
    } else if (i === 1) {
      // Cell dividing
      ctx.fillStyle = '#FFF8DC';
      ctx.strokeStyle = '#DAA520';
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.arc(cx - width * 0.08, cy, width * 0.08, 0, Math.PI * 2);
      ctx.fill();
      ctx.stroke();
      ctx.beginPath();
      ctx.arc(cx + width * 0.08, cy, width * 0.08, 0, Math.PI * 2);
      ctx.fill();
      ctx.stroke();
      // Split indication
      ctx.strokeStyle = '#DC143C';
      ctx.lineWidth = 2;
      ctx.setLineDash([4, 3]);
      ctx.beginPath();
      ctx.moveTo(cx, cy - height * 0.06);
      ctx.lineTo(cx, cy + height * 0.06);
      ctx.stroke();
      ctx.setLineDash([]);
    } else if (i === 2) {
      [-1, 1].forEach(side => {
        ctx.fillStyle = 'rgba(255,160,122,0.8)';
        ctx.strokeStyle = '#CD853F';
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.arc(cx + side * width * 0.14, cy, width * 0.1, 0, Math.PI * 2);
        ctx.fill();
        ctx.stroke();
        ctx.beginPath();
        ctx.arc(cx + side * (width * 0.14 - 2), cy - 5, width * 0.04, 0, Math.PI * 2);
        ctx.fill();
      });
    } else {
      // Shared chorion
      ctx.strokeStyle = '#228B22';
      ctx.lineWidth = 3;
      ctx.setLineDash([5, 3]);
      ctx.beginPath();
      ctx.ellipse(cx, cy, width * 0.34, height * 0.07, 0, 0, Math.PI * 2);
      ctx.stroke();
      ctx.setLineDash([]);
      // Separate amnions
      [-1, 1].forEach(side => {
        ctx.strokeStyle = '#4169E1';
        ctx.lineWidth = 2;
        ctx.setLineDash([3, 2]);
        ctx.beginPath();
        ctx.ellipse(cx + side * width * 0.14, cy, width * 0.12, height * 0.05, 0, 0, Math.PI * 2);
        ctx.stroke();
        ctx.setLineDash([]);
        ctx.fillStyle = 'rgba(255,160,122,0.8)';
        ctx.strokeStyle = '#CD853F';
        ctx.lineWidth = 1.5;
        ctx.beginPath();
        ctx.arc(cx + side * width * 0.14, cy, width * 0.05, 0, Math.PI * 2);
        ctx.fill();
        ctx.stroke();
      });
    }

    if (i < steps.length - 1) {
      ctx.strokeStyle = '#999';
      ctx.lineWidth = 1.5;
      ctx.beginPath();
      ctx.moveTo(cx, cy + height * 0.065 + (i === 0 ? width * 0.1 : i === 1 ? height * 0.05 : height * 0.04));
      ctx.lineTo(cx, steps[i + 1].y - width * 0.04);
      ctx.stroke();
      ctx.fillStyle = '#999';
      const ay = steps[i + 1].y - width * 0.04;
      ctx.beginPath();
      ctx.moveTo(cx, ay);
      ctx.lineTo(cx - 4, ay - 7);
      ctx.lineTo(cx + 4, ay - 7);
      ctx.closePath();
      ctx.fill();
    }

    ctx.fillStyle = '#4169E1';
    ctx.font = `${Math.max(8, width * 0.035)}px Arial`;
    ctx.textAlign = 'center';
    ctx.fillText(s.label, cx, cy + height * 0.07);
  });
}

static drawTwinDizygotic(ctx, width, height) {
  const cx = width / 2;

  // Two separate eggs and sperm → two separate implantations
  const steps = [
    { y: height * 0.12, label: 'Two separate eggs fertilized' },
    { y: height * 0.35, label: 'Two separate zygotes' },
    { y: height * 0.6, label: 'Two separate implantations' },
    { y: height * 0.82, label: 'Separate chorions & placentas' },
  ];

  steps.forEach((s, i) => {
    const cy = s.y;
    [-1, 1].forEach((side, si) => {
      const ex = cx + side * width * 0.16;
      if (i === 0) {
        // Egg + sperm
        ctx.fillStyle = '#FFF8DC';
        ctx.strokeStyle = '#DAA520';
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.arc(ex, cy, width * 0.09, 0, Math.PI * 2);
        ctx.fill();
        ctx.stroke();
        // Sperm
        ctx.strokeStyle = '#4169E1';
        ctx.lineWidth = 1.5;
        ctx.beginPath();
        ctx.arc(ex + width * 0.08, cy, 5, 0, Math.PI * 2);
        ctx.fill();
      } else if (i === 1) {
        ctx.fillStyle = '#FFF8DC';
        ctx.strokeStyle = '#DAA520';
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.arc(ex, cy, width * 0.09, 0, Math.PI * 2);
        ctx.fill();
        ctx.stroke();
        ctx.fillStyle = '#FFA500';
        ctx.beginPath();
        ctx.arc(ex, cy, width * 0.035, 0, Math.PI * 2);
        ctx.fill();
      } else if (i === 2) {
        // Separate implantation
        ctx.fillStyle = '#FFD0E0';
        ctx.strokeStyle = '#C71585';
        ctx.lineWidth = 1.5;
        ctx.beginPath();
        ctx.roundRect(ex - width * 0.1, cy - height * 0.04, width * 0.2, height * 0.06, 4);
        ctx.fill();
        ctx.stroke();
        ctx.fillStyle = 'rgba(255,160,122,0.8)';
        ctx.strokeStyle = '#CD853F';
        ctx.lineWidth = 1.5;
        ctx.beginPath();
        ctx.arc(ex, cy - height * 0.01, width * 0.05, 0, Math.PI * 2);
        ctx.fill();
        ctx.stroke();
      } else {
        // Separate chorions
        ctx.strokeStyle = ['#228B22', '#B8860B'][si];
        ctx.lineWidth = 2.5;
        ctx.setLineDash([4, 3]);
        ctx.beginPath();
        ctx.ellipse(ex, cy, width * 0.15, height * 0.06, 0, 0, Math.PI * 2);
        ctx.stroke();
        ctx.setLineDash([]);
        ctx.fillStyle = 'rgba(255,160,122,0.8)';
        ctx.strokeStyle = '#CD853F';
        ctx.lineWidth = 1.5;
        ctx.beginPath();
        ctx.arc(ex, cy, width * 0.06, 0, Math.PI * 2);
        ctx.fill();
        ctx.stroke();
      }
    });

    if (i < steps.length - 1) {
      ctx.strokeStyle = '#999';
      ctx.lineWidth = 1.5;
      ctx.beginPath();
      ctx.moveTo(cx, cy + height * 0.055);
      ctx.lineTo(cx, steps[i + 1].y - height * 0.025);
      ctx.stroke();
    }

    ctx.fillStyle = '#228B22';
    ctx.font = `${Math.max(8, width * 0.034)}px Arial`;
    ctx.textAlign = 'center';
    ctx.fillText(s.label, cx, cy + height * 0.075);
  });
}

static drawTwinComparison(ctx, width, height) {
  this.drawTwinDevelopmentComplete(ctx, width, height);
}

// ─────────────────────────────────────────────

static drawNidation(ctx, x, y, width, height, stage) {
  ctx.save();
  ctx.translate(x, y);

  switch (stage) {
    case 'complete':
      this.drawNidationComplete(ctx, width, height);
      break;
    case 'hatching':
      this.drawNidationHatching(ctx, width, height);
      break;
    case 'apposition':
      this.drawNidationAppositionDetail(ctx, width, height);
      break;
    case 'invasion':
      this.drawNidationInvasionDetail(ctx, width, height);
      break;
    case 'decidua':
      this.drawNidationDecidua(ctx, width, height);
      break;
    default:
      this.drawNidationComplete(ctx, width, height);
  }

  ctx.restore();
}

static drawNidationComplete(ctx, width, height) {
  const steps = [
    { label: 'Zona\nHatching', day: 'Day 5–6' },
    { label: 'Apposition', day: 'Day 6' },
    { label: 'Adhesion', day: 'Day 7' },
    { label: 'Invasion', day: 'Day 8–9' },
    { label: 'Decidual\nReaction', day: 'Day 9–10' },
  ];
  const sw = width / steps.length;

  steps.forEach((s, i) => {
    const cx = sw * i + sw / 2;
    const cy = height * 0.44;

    // Endometrium bed
    ctx.fillStyle = '#FFD0E0';
    ctx.strokeStyle = '#C71585';
    ctx.lineWidth = 1.5;
    ctx.beginPath();
    ctx.roundRect(cx - sw * 0.44, cy + height * 0.08, sw * 0.88, height * 0.28, 3);
    ctx.fill();
    ctx.stroke();

    // Blastocyst at appropriate depth
    const depth = i * height * 0.045;
    const bR = sw * 0.18;

    if (i === 0) {
      // Hatching from zona
      ctx.strokeStyle = '#FF69B4';
      ctx.lineWidth = 2;
      ctx.setLineDash([3, 3]);
      ctx.beginPath();
      ctx.arc(cx, cy - bR * 0.5, bR * 1.1, 0, Math.PI * 2);
      ctx.stroke();
      ctx.setLineDash([]);
    }

    // Blastocyst
    ctx.fillStyle = '#FFF8DC';
    ctx.strokeStyle = '#DAA520';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.arc(cx, cy - bR * 0.5 + depth, bR, 0, Math.PI * 2);
    ctx.fill();
    ctx.stroke();
    ctx.fillStyle = '#FFA500';
    ctx.beginPath();
    ctx.arc(cx + bR * 0.25, cy - bR * 0.7 + depth, bR * 0.28, 0, Math.PI * 2);
    ctx.fill();

    if (i >= 2) {
      // Trophoblast invasion fingers
      ctx.fillStyle = 'rgba(139,0,0,0.5)';
      ctx.strokeStyle = '#8B0000';
      ctx.lineWidth = 1.5;
      for (let f = -2; f <= 2; f++) {
        const fDepth = height * 0.04 * (i - 1);
        ctx.beginPath();
        ctx.moveTo(cx + f * bR * 0.3, cy - bR * 0.5 + depth + bR);
        ctx.lineTo(cx + f * bR * 0.28, cy + height * 0.08 + fDepth);
        ctx.stroke();
      }
    }

    if (i === 4) {
      // Decidual cells
      ctx.fillStyle = '#FFB6C1';
      for (let dc = 0; dc < 5; dc++) {
        ctx.beginPath();
        ctx.arc(cx - sw * 0.3 + dc * sw * 0.15, cy + height * 0.2, 6, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    ctx.fillStyle = '#333';
    ctx.font = `${Math.max(7, width * 0.027)}px Arial`;
    ctx.textAlign = 'center';
    s.label.split('\n').forEach((line, li) => {
      ctx.fillText(line, cx, cy + height * 0.38 + li * 10);
    });
    ctx.fillStyle = '#888';
    ctx.font = `${Math.max(6, width * 0.023)}px Arial`;
    ctx.fillText(s.day, cx, cy + height * 0.44 + (s.label.includes('\n') ? 6 : 0));
  });

  ctx.fillStyle = '#C71585';
  ctx.font = `${Math.max(11, width * 0.05)}px Arial`;
  ctx.textAlign = 'center';
  ctx.fillText('Nidation (Implantation Detail)', width / 2, height * 0.97);
}

static drawNidationHatching(ctx, width, height) {
  const cx = width / 2, cy = height / 2;

  // Zona pellucida (cracking)
  ctx.strokeStyle = '#FF69B4';
  ctx.lineWidth = 3;
  ctx.setLineDash([4, 6]);
  ctx.beginPath();
  ctx.arc(cx, cy, width * 0.3, 0, Math.PI * 2);
  ctx.stroke();
  ctx.setLineDash([]);

  // Opening in zona
  ctx.strokeStyle = '#C71585';
  ctx.lineWidth = 3;
  ctx.beginPath();
  ctx.arc(cx + width * 0.2, cy - height * 0.1, width * 0.06, -0.8, 0.8);
  ctx.stroke();

  // Blastocyst hatching out
  ctx.fillStyle = '#FFF8DC';
  ctx.strokeStyle = '#DAA520';
  ctx.lineWidth = 2.5;
  ctx.beginPath();
  ctx.arc(cx + width * 0.12, cy, width * 0.25, 0, Math.PI * 2);
  ctx.fill();
  ctx.stroke();

  // ICM
  ctx.fillStyle = '#FFA500';
  ctx.beginPath();
  ctx.arc(cx + width * 0.2, cy - height * 0.06, width * 0.07, 0, Math.PI * 2);
  ctx.fill();

  // Trophoblast cells on surface
  ctx.fillStyle = '#F4A460';
  ctx.strokeStyle = '#CD853F';
  ctx.lineWidth = 1;
  for (let i = 0; i < 12; i++) {
    const angle = (i / 12) * Math.PI * 2;
    ctx.beginPath();
    ctx.arc(cx + width * 0.12 + Math.cos(angle) * width * 0.24, cy + Math.sin(angle) * height * 0.24, 6, 0, Math.PI * 2);
    ctx.fill();
    ctx.stroke();
  }

  ctx.fillStyle = '#C71585';
  ctx.font = `${Math.max(10, width * 0.05)}px Arial`;
  ctx.textAlign = 'center';
  ctx.fillText('Zona Hatching (Day 5–6)', cx, cy + height * 0.42);
}

static drawNidationAppositionDetail(ctx, width, height) {
  const cx = width / 2, cy = height / 2;

  // Endometrium surface
  ctx.fillStyle = '#FFD0E0';
  ctx.strokeStyle = '#C71585';
  ctx.lineWidth = 2.5;
  ctx.beginPath();
  ctx.roundRect(width * 0.04, cy + height * 0.08, width * 0.92, height * 0.32, 6);
  ctx.fill();
  ctx.stroke();

  // Pinopodes on endometrial surface
  ctx.fillStyle = '#FF1493';
  for (let i = 0; i < 8; i++) {
    const px = width * 0.1 + i * width * 0.11;
    ctx.beginPath();
    ctx.arc(px, cy + height * 0.08, 7, 0, Math.PI * 2);
    ctx.fill();
    ctx.beginPath();
    ctx.moveTo(px - 4, cy + height * 0.08);
    ctx.lineTo(px + 4, cy + height * 0.08);
    ctx.moveTo(px, cy + height * 0.04);
    ctx.lineTo(px, cy + height * 0.12);
    ctx.strokeStyle = '#8B0057';
    ctx.lineWidth = 1;
    ctx.stroke();
  }

  // Blastocyst hovering
  const bR = width * 0.16;
  ctx.fillStyle = '#FFF8DC';
  ctx.strokeStyle = '#DAA520';
  ctx.lineWidth = 2.5;
  ctx.beginPath();
  ctx.arc(cx, cy - bR * 0.3, bR, 0, Math.PI * 2);
  ctx.fill();
  ctx.stroke();

  // Trophoblast surface cells
  ctx.fillStyle = '#F4A460';
  ctx.strokeStyle = '#CD853F';
  ctx.lineWidth = 1.5;
  for (let i = -3; i <= 3; i++) {
    ctx.beginPath();
    ctx.arc(cx + i * bR * 0.4, cy - bR * 0.3 + bR, 6, 0, Math.PI * 2);
    ctx.fill();
    ctx.stroke();
  }

  // ICM
  ctx.fillStyle = '#FFA500';
  ctx.beginPath();
  ctx.arc(cx + bR * 0.3, cy - bR * 0.5, bR * 0.3, 0, Math.PI * 2);
  ctx.fill();

  ctx.fillStyle = '#C71585';
  ctx.font = `${Math.max(10, width * 0.05)}px Arial`;
  ctx.textAlign = 'center';
  ctx.fillText('Apposition — Blastocyst Orienting (Day 6)', cx, cy + height * 0.48);
}

static drawNidationInvasionDetail(ctx, width, height) {
  const cx = width / 2, cy = height / 2;

  // Deep endometrium layers
  // Functionalis
  ctx.fillStyle = '#FFD0E0';
  ctx.strokeStyle = '#C71585';
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.roundRect(width * 0.04, cy - height * 0.1, width * 0.92, height * 0.2, 4);
  ctx.fill();
  ctx.stroke();

  // Basalis
  ctx.fillStyle = '#FF69B4';
  ctx.beginPath();
  ctx.roundRect(width * 0.04, cy + height * 0.1, width * 0.92, height * 0.14, [0, 0, 4, 4]);
  ctx.fill();

  // Blastocyst mostly embedded
  const bR = width * 0.15;
  ctx.fillStyle = '#FFF8DC';
  ctx.strokeStyle = '#DAA520';
  ctx.lineWidth = 2.5;
  ctx.beginPath();
  ctx.arc(cx, cy - height * 0.04, bR, 0, Math.PI * 2);
  ctx.fill();
  ctx.stroke();

  // ICM
  ctx.fillStyle = '#FFA500';
  ctx.beginPath();
  ctx.arc(cx + bR * 0.25, cy - height * 0.06, bR * 0.3, 0, Math.PI * 2);
  ctx.fill();

  // Syncytiotrophoblast invasion columns
  ctx.fillStyle = 'rgba(139,0,0,0.55)';
  ctx.strokeStyle = '#8B0000';
  ctx.lineWidth = 1.5;
  for (let f = -4; f <= 4; f++) {
    const fx = cx + f * bR * 0.25;
    const depth = height * 0.08 + Math.random() * height * 0.06;
    ctx.beginPath();
    ctx.moveTo(fx, cy - height * 0.04 + bR);
    ctx.lineTo(fx - 3, cy - height * 0.04 + bR + depth);
    ctx.lineTo(fx + 3, cy - height * 0.04 + bR + depth);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();
  }

  // Maternal blood lacunae forming
  ctx.fillStyle = 'rgba(220,20,60,0.2)';
  ctx.strokeStyle = '#DC143C';
  ctx.lineWidth = 1;
  [[-bR * 0.4, -height * 0.06], [bR * 0.4, -height * 0.06], [0, height * 0.04]].forEach(([dx, dy]) => {
    ctx.beginPath();
    ctx.ellipse(cx + dx, cy + dy, bR * 0.15, height * 0.035, 0, 0, Math.PI * 2);
    ctx.fill();
    ctx.stroke();
  });

  ctx.fillStyle = '#DC143C';
  ctx.font = `${Math.max(9, width * 0.04)}px Arial`;
  ctx.textAlign = 'left';
  ctx.fillText('Lacunae', cx + bR * 0.55, cy - height * 0.03);
  ctx.fillStyle = '#8B0000';
  ctx.fillText('Syncytio-\ntrophoblast'.replace('\n', ' '), cx + bR * 0.55, cy + height * 0.08);

  ctx.fillStyle = '#C71585';
  ctx.font = `${Math.max(10, width * 0.05)}px Arial`;
  ctx.textAlign = 'center';
  ctx.fillText('Trophoblast Invasion (Day 8–10)', cx, cy + height * 0.36);
}

static drawNidationDecidua(ctx, width, height) {
  const cx = width / 2, cy = height / 2;

  // Endometrium becoming decidua
  ctx.fillStyle = '#FFB6C1';
  ctx.strokeStyle = '#C71585';
  ctx.lineWidth = 2.5;
  ctx.beginPath();
  ctx.roundRect(width * 0.04, cy - height * 0.08, width * 0.92, height * 0.46, 6);
  ctx.fill();
  ctx.stroke();

  // Decidual cells (large, polygonal)
  const deciduaCells = [
    [cx - width * 0.3, cy], [cx - width * 0.15, cy + height * 0.06],
    [cx, cy + height * 0.02], [cx + width * 0.15, cy + height * 0.08],
    [cx + width * 0.3, cy + height * 0.01], [cx - width * 0.22, cy + height * 0.16],
    [cx + width * 0.08, cy + height * 0.16], [cx + width * 0.28, cy + height * 0.18],
  ];
  deciduaCells.forEach(([dcx, dcy]) => {
    ctx.fillStyle = '#FFD0E0';
    ctx.strokeStyle = '#C71585';
    ctx.lineWidth = 1.5;
    ctx.beginPath();
    ctx.arc(dcx, dcy, width * 0.05, 0, Math.PI * 2);
    ctx.fill();
    ctx.stroke();
    // Nucleus
    ctx.fillStyle = '#C71585';
    ctx.beginPath();
    ctx.arc(dcx, dcy, width * 0.018, 0, Math.PI * 2);
    ctx.fill();
  });

  // Embedded blastocyst
  const bR = width * 0.13;
  ctx.fillStyle = '#FFF8DC';
  ctx.strokeStyle = '#DAA520';
  ctx.lineWidth = 2.5;
  ctx.beginPath();
  ctx.arc(cx, cy - height * 0.04, bR, 0, Math.PI * 2);
  ctx.fill();
  ctx.stroke();

  // Decidua capsularis (overlying)
  ctx.strokeStyle = '#FF69B4';
  ctx.lineWidth = 2;
  ctx.setLineDash([4, 3]);
  ctx.beginPath();
  ctx.arc(cx, cy - height * 0.04, bR * 1.3, 0, Math.PI * 2);
  ctx.stroke();
  ctx.setLineDash([]);

  // Labels
  ctx.fillStyle = '#C71585';
  ctx.font = `${Math.max(9, width * 0.04)}px Arial`;
  ctx.textAlign = 'left';
  ctx.fillText('Decidua capsularis', cx + bR * 1.35, cy - height * 0.04);
  ctx.fillStyle = '#8B0057';
  ctx.fillText('Decidual cells', width * 0.06, cy + height * 0.22);

  ctx.fillStyle = '#C71585';
  ctx.font = `${Math.max(10, width * 0.05)}px Arial`;
  ctx.textAlign = 'center';
  ctx.fillText('Decidual Reaction (Day 9–10)', cx, cy + height * 0.44);
}

/**
That completes all 17 missing systems. Here's a quick reference summary of every dispatcher signature:
drawImplantation(ctx, x, y, width, height, stage)
  // stages: 'complete' | 'apposition' | 'adhesion' | 'invasion'

drawMaleReproductiveSystem(ctx, x, y, width, height, view)
  // views: 'schematic' | 'labeled' | 'sagittal'

drawFemaleReproductiveSystem(ctx, x, y, width, height, view)
  // views: 'schematic' | 'labeled' | 'sagittal'

drawOvulation(ctx, x, y, width, height, stage)
  // stages: 'complete' | 'pre' | 'rupture' | 'post'

drawPregnancy(ctx, x, y, width, height, trimester)
  // trimesters: 'complete' | 'first' | 'second' | 'third'

drawParturition(ctx, x, y, width, height, stage)
  // stages: 'complete' | 'latent' | 'active' | 'transition' | 'delivery'

drawLactation(ctx, x, y, width, height, view)
  // views: 'complete' | 'anatomy' | 'hormones' | 'letdown'

drawContraception(ctx, x, y, width, height, method)
  // methods: 'complete' | 'barrier' | 'hormonal' | 'iud' | 'sterilization'

drawIVF(ctx, x, y, width, height, stage)
  // stages: 'complete' | 'stimulation' | 'retrieval' | 'fertilization' | 'culture' | 'transfer'

drawMeiosis(ctx, x, y, width, height, stage)
  // stages: 'complete' | 'prophase1' | 'metaphase1' | 'anaphase1' | 'meiosis2'

drawMitosis(ctx, x, y, width, height, stage)
  // stages: 'complete' | 'interphase' | 'prophase' | 'metaphase' | 'anaphase' | 'telophase'

drawHormonalFeedback(ctx, x, y, width, height, axis)
  // axes: 'complete' | 'hpg' | 'female' | 'male'

drawSpermiogenesis(ctx, x, y, width, height, stage)
  // stages: 'complete' | 'golgi' | 'cap' | 'acrosome' | 'maturation'

drawFolliculogenesis(ctx, x, y, width, height, stage)
  // stages: 'complete' | 'primordial' | 'primary' | 'secondary' | 'antral' | 'graafian'

drawCorpusLuteumCycle(ctx, x, y, width, height, stage)
  // stages: 'complete' | 'formation' | 'peak' | 'regression' | 'albicans'

drawTwinDevelopment(ctx, x, y, width, height, type)
  // types: 'complete' | 'monozygotic' | 'dizygotic' | 'comparison'

drawNidation(ctx, x, y, width, height, stage)
  // stages: 'complete' | 'hatching' | 'apposition' | 'invasion' | 'decidua'
*/
