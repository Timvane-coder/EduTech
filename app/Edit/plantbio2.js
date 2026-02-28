Here are the missing organ/part drawing methods:
static drawRootHair(ctx, w, h) {
  // Background - soil context
  ctx.fillStyle = '#8B6914';
  ctx.fillRect(0, 0, w, h);

  // Soil particles
  ctx.fillStyle = '#6B4F10';
  const particles = [
    {x:0.05,y:0.1,r:0.03},{x:0.85,y:0.15,r:0.025},{x:0.92,y:0.45,r:0.02},
    {x:0.88,y:0.75,r:0.03},{x:0.07,y:0.6,r:0.025},{x:0.1,y:0.85,r:0.02},
  ];
  particles.forEach(p => {
    ctx.beginPath();
    ctx.arc(p.x*w, p.y*h, p.r*w, 0, Math.PI*2);
    ctx.fill();
  });

  // Main root epidermis cell body
  ctx.fillStyle = '#C8E6A0';
  ctx.strokeStyle = '#5A7D3E';
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.roundRect(w*0.25, h*0.15, w*0.5, h*0.7, w*0.03);
  ctx.fill();
  ctx.stroke();

  // Root hair - long tubular extension
  ctx.fillStyle = '#D4EDAA';
  ctx.strokeStyle = '#5A7D3E';
  ctx.lineWidth = 1.5;
  ctx.beginPath();
  ctx.moveTo(w*0.75, h*0.38);
  ctx.bezierCurveTo(w*0.82, h*0.35, w*0.88, h*0.3, w*0.93, h*0.25);
  ctx.bezierCurveTo(w*0.97, h*0.2, w*0.95, h*0.48, w*0.93, h*0.52);
  ctx.bezierCurveTo(w*0.88, h*0.5, w*0.82, h*0.5, w*0.75, h*0.52);
  ctx.closePath();
  ctx.fill();
  ctx.stroke();

  // Vacuole
  ctx.fillStyle = 'rgba(180,220,255,0.6)';
  ctx.strokeStyle = '#5599CC';
  ctx.lineWidth = 1;
  ctx.beginPath();
  ctx.ellipse(w*0.5, h*0.5, w*0.15, h*0.22, 0, 0, Math.PI*2);
  ctx.fill();
  ctx.stroke();

  // Nucleus
  ctx.fillStyle = '#8B4513';
  ctx.strokeStyle = '#5A2D00';
  ctx.lineWidth = 1.5;
  ctx.beginPath();
  ctx.ellipse(w*0.42, h*0.38, w*0.07, h*0.09, -0.3, 0, Math.PI*2);
  ctx.fill();
  ctx.stroke();

  // Nucleolus
  ctx.fillStyle = '#5A1A00';
  ctx.beginPath();
  ctx.arc(w*0.41, h*0.37, w*0.025, 0, Math.PI*2);
  ctx.fill();

  // Cell wall detail
  ctx.strokeStyle = '#4A6B2E';
  ctx.lineWidth = 3;
  ctx.strokeRect(w*0.25, h*0.15, w*0.5, h*0.7);

  // Water molecules entering hair (blue dots with arrows)
  ctx.fillStyle = '#4488FF';
  const waterDots = [{x:0.15,y:0.3},{x:0.1,y:0.5},{x:0.12,y:0.7}];
  waterDots.forEach(d => {
    ctx.beginPath();
    ctx.arc(d.x*w, d.y*h, w*0.02, 0, Math.PI*2);
    ctx.fill();
    // Arrow toward cell
    ctx.strokeStyle = '#4488FF';
    ctx.lineWidth = 1.5;
    ctx.setLineDash([3,3]);
    ctx.beginPath();
    ctx.moveTo(d.x*w + w*0.03, d.y*h);
    ctx.lineTo(w*0.24, d.y*h);
    ctx.stroke();
    ctx.setLineDash([]);
  });

  // Labels
  ctx.fillStyle = '#FFFFFF';
  ctx.font = `bold ${h*0.055}px Arial`;
  ctx.fillText('Root Hair Cell', w*0.25, h*0.1);
  ctx.font = `${h*0.04}px Arial`;
  ctx.fillStyle = '#CCFFCC';
  ctx.fillText('Root hair', w*0.77, h*0.22);
  ctx.fillText('Vacuole', w*0.52, h*0.52);
  ctx.fillText('Nucleus', w*0.3, h*0.33);
  ctx.fillStyle = '#AADDFF';
  ctx.fillText('H₂O', w*0.03, h*0.28);
  ctx.fillText('H₂O', w*0.03, h*0.48);
  ctx.fillText('H₂O', w*0.03, h*0.68);
}

static drawRootCap(ctx, w, h) {
  // Background
  ctx.fillStyle = '#7A5C1E';
  ctx.fillRect(0, 0, w, h);

  // Soil particles
  ctx.fillStyle = '#5A3E10';
  [{x:0.05,y:0.8,r:0.04},{x:0.9,y:0.75,r:0.03},{x:0.15,y:0.95,r:0.025},
   {x:0.8,y:0.92,r:0.035},{x:0.5,y:0.98,r:0.03}].forEach(p => {
    ctx.beginPath(); ctx.arc(p.x*w,p.y*h,p.r*w,0,Math.PI*2); ctx.fill();
  });

  // Root tip / apical meristem region
  ctx.fillStyle = '#C8E6A0';
  ctx.strokeStyle = '#4A6B2E';
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.roundRect(w*0.35, h*0.05, w*0.3, h*0.45, w*0.04);
  ctx.fill();
  ctx.stroke();

  // Root cap - dome shape below
  ctx.fillStyle = '#A8D080';
  ctx.strokeStyle = '#4A6B2E';
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.moveTo(w*0.35, h*0.48);
  ctx.bezierCurveTo(w*0.3, h*0.55, w*0.28, h*0.65, w*0.5, h*0.78);
  ctx.bezierCurveTo(w*0.72, h*0.65, w*0.7, h*0.55, w*0.65, h*0.48);
  ctx.closePath();
  ctx.fill();
  ctx.stroke();

  // Columella cells (central gravity-sensing cells)
  ctx.fillStyle = '#5A8030';
  ctx.strokeStyle = '#3A5520';
  ctx.lineWidth = 1;
  const columellaCells = [
    {x:0.46,y:0.54,w:0.08,h:0.06},{x:0.54,y:0.54,w:0.08,h:0.06},
    {x:0.44,y:0.61,w:0.08,h:0.06},{x:0.52,y:0.61,w:0.08,h:0.06},{x:0.6,y:0.61,w:0.08,h:0.06},
    {x:0.46,y:0.68,w:0.08,h:0.06},{x:0.54,y:0.68,w:0.08,h:0.06},
  ];
  columellaCells.forEach(c => {
    ctx.beginPath();
    ctx.rect(c.x*w, c.y*h, c.w*w, c.h*h);
    ctx.fill(); ctx.stroke();
    // Statolith (amyloplast) in each
    ctx.fillStyle = '#FFD700';
    ctx.beginPath();
    ctx.arc((c.x+c.w*0.5)*w, (c.y+c.h*0.65)*h, w*0.015, 0, Math.PI*2);
    ctx.fill();
    ctx.fillStyle = '#5A8030';
  });

  // Lateral root cap cells (sloughing off)
  ctx.fillStyle = '#88B060';
  ctx.strokeStyle = '#4A6B2E';
  ctx.lineWidth = 1;
  const lateralCells = [
    {x:0.3,y:0.56,w:0.07,h:0.06},{x:0.63,y:0.56,w:0.07,h:0.06},
    {x:0.28,y:0.63,w:0.07,h:0.06},{x:0.65,y:0.63,w:0.07,h:0.06},
  ];
  lateralCells.forEach(c => {
    ctx.beginPath();
    ctx.rect(c.x*w, c.y*h, c.w*w, c.h*h);
    ctx.fill(); ctx.stroke();
  });

  // Sloughed cells (detached border cells in soil)
  ctx.fillStyle = 'rgba(168,208,128,0.5)';
  ctx.strokeStyle = '#4A6B2E';
  ctx.lineWidth = 1;
  [{x:0.2,y:0.72},{x:0.72,y:0.7},{x:0.35,y:0.82},{x:0.62,y:0.8}].forEach(c => {
    ctx.beginPath();
    ctx.ellipse(c.x*w, c.y*h, w*0.04, h*0.03, 0.3, 0, Math.PI*2);
    ctx.fill(); ctx.stroke();
  });

  // Quiescent center (QC) mark
  ctx.fillStyle = 'rgba(255,100,100,0.4)';
  ctx.strokeStyle = '#CC3333';
  ctx.lineWidth = 1.5;
  ctx.beginPath();
  ctx.ellipse(w*0.5, h*0.42, w*0.07, h*0.05, 0, 0, Math.PI*2);
  ctx.fill(); ctx.stroke();

  // Gravity arrow
  ctx.strokeStyle = '#FFAA00';
  ctx.lineWidth = 2.5;
  ctx.beginPath();
  ctx.moveTo(w*0.88, h*0.1);
  ctx.lineTo(w*0.88, h*0.35);
  ctx.stroke();
  ctx.beginPath();
  ctx.moveTo(w*0.83, h*0.32);
  ctx.lineTo(w*0.88, h*0.38);
  ctx.lineTo(w*0.93, h*0.32);
  ctx.fillStyle = '#FFAA00';
  ctx.fill();

  // Labels
  ctx.fillStyle = '#FFFFFF';
  ctx.font = `bold ${h*0.055}px Arial`;
  ctx.fillText('Root Cap', w*0.33, h*0.06);
  ctx.font = `${h*0.038}px Arial`;
  ctx.fillText('Quiescent', w*0.52, h*0.39);
  ctx.fillText('Center', w*0.52, h*0.43);
  ctx.fillText('Columella', w*0.05, h*0.58);
  ctx.fillText('(statoliths)', w*0.04, h*0.62);
  ctx.fillStyle = '#FFAA00';
  ctx.fillText('Gravity', w*0.82, h*0.44);
}

static drawRootCrossSection(ctx, w, h) {
  const cx = w*0.5, cy = h*0.5;

  ctx.fillStyle = '#7A5C1E';
  ctx.fillRect(0, 0, w, h);

  // Layers from outside in
  const layers = [
    { r: 0.44, color: '#E8C870', label: 'Epidermis', labelR: 0.46 },
    { r: 0.39, color: '#C8A850', label: 'Cortex', labelR: 0.32 },
    { r: 0.22, color: '#A88840', label: 'Endodermis', labelR: 0.23 },
    { r: 0.17, color: '#88A060', label: 'Pericycle', labelR: 0.17 },
    { r: 0.12, color: '#6080A0', label: 'Stele', labelR: 0.0 },
  ];

  layers.forEach(layer => {
    ctx.beginPath();
    ctx.arc(cx, cy, layer.r*w, 0, Math.PI*2);
    ctx.fillStyle = layer.color;
    ctx.fill();
    ctx.strokeStyle = '#3A2A08';
    ctx.lineWidth = 1.5;
    ctx.stroke();
  });

  // Xylem arms (star pattern in center)
  const xylemArms = 4;
  ctx.fillStyle = '#B04020';
  for(let i=0; i<xylemArms; i++) {
    const angle = (i/xylemArms)*Math.PI*2;
    ctx.beginPath();
    ctx.ellipse(
      cx + Math.cos(angle)*w*0.06,
      cy + Math.sin(angle)*w*0.06,
      w*0.035, w*0.025,
      angle, 0, Math.PI*2
    );
    ctx.fill();
  }

  // Phloem between xylem arms
  ctx.fillStyle = '#E08050';
  for(let i=0; i<xylemArms; i++) {
    const angle = ((i+0.5)/xylemArms)*Math.PI*2;
    ctx.beginPath();
    ctx.arc(cx + Math.cos(angle)*w*0.065, cy + Math.sin(angle)*w*0.065, w*0.022, 0, Math.PI*2);
    ctx.fill();
  }

  // Casparian strip dots on endodermis
  ctx.fillStyle = '#5A3010';
  for(let i=0; i<24; i++) {
    const angle = (i/24)*Math.PI*2;
    ctx.beginPath();
    ctx.arc(cx + Math.cos(angle)*w*0.22, cy + Math.sin(angle)*w*0.22, w*0.008, 0, Math.PI*2);
    ctx.fill();
  }

  // Root hair on epidermis
  ctx.strokeStyle = '#C8E6A0';
  ctx.lineWidth = 2;
  for(let i=0; i<8; i++) {
    const angle = (i/8)*Math.PI*2;
    ctx.beginPath();
    ctx.moveTo(cx + Math.cos(angle)*w*0.44, cy + Math.sin(angle)*w*0.44);
    ctx.lineTo(cx + Math.cos(angle)*w*0.5, cy + Math.sin(angle)*w*0.5);
    ctx.stroke();
  }

  // Labels with lines
  const labelData = [
    {angle:-0.4, r:0.42, text:'Epidermis'},
    {angle:0.5, r:0.31, text:'Cortex'},
    {angle:-1.2, r:0.22, text:'Endodermis'},
    {angle:1.5, r:0.155, text:'Pericycle'},
    {angle:Math.PI*1.1, r:0.07, text:'Xylem'},
    {angle:Math.PI*0.6, r:0.07, text:'Phloem'},
  ];

  ctx.font = `${h*0.042}px Arial`;
  ctx.fillStyle = '#FFFFFF';
  ctx.strokeStyle = '#FFFFFF';
  ctx.lineWidth = 1;
  labelData.forEach(l => {
    const lx = cx + Math.cos(l.angle)*l.r*w;
    const ly = cy + Math.sin(l.angle)*l.r*h;
    ctx.fillText(l.text, lx - ctx.measureText(l.text).width/2, ly);
  });

  ctx.fillStyle = '#FFFFFF';
  ctx.font = `bold ${h*0.055}px Arial`;
  ctx.fillText('Root Cross-Section', w*0.18, h*0.06);
  ctx.font = `${h*0.036}px Arial`;
  ctx.fillText('Casparian strip', w*0.58, h*0.2);
}

static drawStemCrossSection(ctx, w, h) {
  ctx.fillStyle = '#3A2A10';
  ctx.fillRect(0, 0, w, h);

  const drawStem = (cx, cy, radius, isMonocot, label) => {
    // Cortex
    ctx.beginPath();
    ctx.arc(cx, cy, radius, 0, Math.PI*2);
    ctx.fillStyle = '#A8C870';
    ctx.fill();
    ctx.strokeStyle = '#4A6B2E';
    ctx.lineWidth = 2;
    ctx.stroke();

    // Epidermis ring
    ctx.beginPath();
    ctx.arc(cx, cy, radius, 0, Math.PI*2);
    ctx.strokeStyle = '#2A4A18';
    ctx.lineWidth = 4;
    ctx.stroke();

    if(!isMonocot) {
      // Dicot: ring of vascular bundles + pith center
      ctx.beginPath();
      ctx.arc(cx, cy, radius*0.35, 0, Math.PI*2);
      ctx.fillStyle = '#D4B870';
      ctx.fill();
      ctx.strokeStyle = '#4A3A10';
      ctx.lineWidth = 1;
      ctx.stroke();

      // Vascular bundles in a ring
      const numBundles = 6;
      for(let i=0; i<numBundles; i++) {
        const angle = (i/numBundles)*Math.PI*2;
        const bx = cx + Math.cos(angle)*radius*0.62;
        const by = cy + Math.sin(angle)*radius*0.62;
        // Xylem (inner)
        ctx.beginPath();
        ctx.ellipse(bx + Math.cos(angle)*radius*0.05, by + Math.sin(angle)*radius*0.05, radius*0.07, radius*0.05, angle, 0, Math.PI*2);
        ctx.fillStyle = '#B04020';
        ctx.fill();
        // Phloem (outer)
        ctx.beginPath();
        ctx.ellipse(bx - Math.cos(angle)*radius*0.05, by - Math.sin(angle)*radius*0.05, radius*0.06, radius*0.04, angle, 0, Math.PI*2);
        ctx.fillStyle = '#E08050';
        ctx.fill();
      }
    } else {
      // Monocot: scattered vascular bundles
      const bundlePositions = [
        {r:0.25,a:0.0},{r:0.25,a:1.6},{r:0.25,a:3.2},{r:0.25,a:4.8},
        {r:0.55,a:0.5},{r:0.55,a:1.5},{r:0.55,a:2.5},{r:0.55,a:3.5},{r:0.55,a:4.5},{r:0.55,a:5.5},
        {r:0.75,a:0.2},{r:0.75,a:1.2},{r:0.75,a:2.2},{r:0.75,a:3.2},{r:0.75,a:4.2},{r:0.75,a:5.2},
      ];
      bundlePositions.forEach(bp => {
        const bx = cx + Math.cos(bp.a)*bp.r*radius;
        const by = cy + Math.sin(bp.a)*bp.r*radius;
        // Xylem
        ctx.beginPath();
        ctx.arc(bx, by, radius*0.06, 0, Math.PI*2);
        ctx.fillStyle = '#B04020';
        ctx.fill();
        // Phloem cap
        ctx.beginPath();
        ctx.arc(bx, by - radius*0.07, radius*0.04, 0, Math.PI*2);
        ctx.fillStyle = '#E08050';
        ctx.fill();
      });
    }

    // Label
    ctx.fillStyle = '#FFFFFF';
    ctx.font = `bold ${h*0.048}px Arial`;
    ctx.textAlign = 'center';
    ctx.fillText(label, cx, cy + radius + h*0.07);
    ctx.textAlign = 'left';
  };

  drawStem(w*0.27, h*0.48, w*0.22, false, 'Dicot');
  drawStem(w*0.73, h*0.48, w*0.22, true, 'Monocot');

  // Legend
  ctx.fillStyle = '#B04020';
  ctx.beginPath(); ctx.arc(w*0.08, h*0.88, w*0.015, 0, Math.PI*2); ctx.fill();
  ctx.fillStyle = '#FFFFFF';
  ctx.font = `${h*0.038}px Arial`;
  ctx.fillText('Xylem', w*0.11, h*0.895);
  ctx.fillStyle = '#E08050';
  ctx.beginPath(); ctx.arc(w*0.08, h*0.93, w*0.015, 0, Math.PI*2); ctx.fill();
  ctx.fillStyle = '#FFFFFF';
  ctx.fillText('Phloem', w*0.11, h*0.945);

  ctx.fillStyle = '#FFFFFF';
  ctx.font = `bold ${h*0.055}px Arial`;
  ctx.fillText('Stem Cross-Sections', w*0.22, h*0.07);
  ctx.font = `${h*0.038}px Arial`;
  ctx.fillText('(Ring arrangement)', w*0.08, h*0.96);
  ctx.fillText('(Scattered bundles)', w*0.6, h*0.96);
}

static drawLenticels(ctx, w, h) {
  ctx.fillStyle = '#8B5A2B';
  ctx.fillRect(0, 0, w, h);

  // Bark texture
  ctx.fillStyle = '#7A4A1E';
  for(let i=0; i<8; i++) {
    ctx.fillRect(0, i*(h/8), w, 2);
  }

  // Lenticel 1 - cross section showing gas exchange
  const lx1 = w*0.35, ly1 = h*0.4;

  // Outer bark layers
  ctx.fillStyle = '#6B3A10';
  ctx.beginPath();
  ctx.rect(w*0.05, h*0.2, w*0.9, h*0.12);
  ctx.fill();

  // Lenticel opening in bark
  ctx.fillStyle = '#C8A050';
  ctx.beginPath();
  ctx.ellipse(lx1, h*0.26, w*0.12, h*0.05, 0, 0, Math.PI*2);
  ctx.fill();
  ctx.strokeStyle = '#5A3010';
  ctx.lineWidth = 2;
  ctx.stroke();

  // Complementary cells (loosely arranged)
  const compCells = [
    {x:0.23,y:0.28},{x:0.29,y:0.25},{x:0.35,y:0.28},{x:0.41,y:0.25},{x:0.47,y:0.28},
    {x:0.26,y:0.33},{x:0.32,y:0.31},{x:0.38,y:0.33},{x:0.44,y:0.31},
  ];
  ctx.fillStyle = '#E8C880';
  ctx.strokeStyle = '#8B6020';
  ctx.lineWidth = 1;
  compCells.forEach(c => {
    ctx.beginPath();
    ctx.ellipse(c.x*w, c.y*h, w*0.022, h*0.022, 0, 0, Math.PI*2);
    ctx.fill(); ctx.stroke();
  });

  // Cork cells on sides
  ctx.fillStyle = '#9B6030';
  ctx.strokeStyle = '#5A3010';
  ctx.lineWidth = 1;
  const corkCells = [
    {x:0.12,y:0.26,wide:true},{x:0.12,y:0.3,wide:true},
    {x:0.57,y:0.26,wide:true},{x:0.57,y:0.3,wide:true},
  ];
  corkCells.forEach(c => {
    ctx.beginPath();
    ctx.rect(c.x*w, c.y*h - h*0.02, w*0.06, h*0.04);
    ctx.fill(); ctx.stroke();
  });

  // Gas exchange arrows (CO2 out, O2 in)
  const drawArrow = (x1,y1,x2,y2,color) => {
    ctx.strokeStyle = color;
    ctx.fillStyle = color;
    ctx.lineWidth = 2;
    ctx.setLineDash([4,3]);
    ctx.beginPath();
    ctx.moveTo(x1*w,y1*h); ctx.lineTo(x2*w,y2*h); ctx.stroke();
    ctx.setLineDash([]);
    const dx=x2-x1, dy=y2-y1, len=Math.sqrt(dx*dx+dy*dy);
    const nx=dx/len, ny=dy/len;
    ctx.beginPath();
    ctx.moveTo(x2*w,y2*h);
    ctx.lineTo((x2-nx*0.05)*w+ny*0.03*w,(y2-ny*0.05)*h-nx*0.03*h);
    ctx.lineTo((x2-nx*0.05)*w-ny*0.03*w,(y2-ny*0.05)*h+nx*0.03*h);
    ctx.closePath(); ctx.fill();
  };

  drawArrow(0.3,0.36,0.27,0.12,'#FF6633');
  drawArrow(0.36,0.36,0.36,0.12,'#FF6633');
  drawArrow(0.42,0.36,0.45,0.12,'#FF6633');
  drawArrow(0.25,0.12,0.28,0.35,'#33AAFF');

  // Surface view lenticel (right side)
  ctx.fillStyle = '#B07030';
  ctx.beginPath();
  ctx.ellipse(w*0.75, h*0.45, w*0.14, h*0.06, 0.2, 0, Math.PI*2);
  ctx.fill();
  ctx.strokeStyle = '#5A3010';
  ctx.lineWidth = 2;
  ctx.stroke();

  // Texture lines on surface lenticel
  ctx.strokeStyle = '#7A4A10';
  ctx.lineWidth = 1;
  for(let i=-3; i<=3; i++) {
    ctx.beginPath();
    ctx.moveTo(w*0.75+i*w*0.035, h*0.39);
    ctx.lineTo(w*0.75+i*w*0.02, h*0.51);
    ctx.stroke();
  }

  // Labels
  ctx.fillStyle = '#FFFFFF';
  ctx.font = `bold ${h*0.055}px Arial`;
  ctx.fillText('Lenticels', w*0.35, h*0.08);
  ctx.font = `${h*0.038}px Arial`;
  ctx.fillText('Complementary', w*0.05, h*0.55);
  ctx.fillText('cells', w*0.08, h*0.6);
  ctx.fillText('Cork', w*0.08, h*0.7);
  ctx.fillText('Surface view →', w*0.57, h*0.58);
  ctx.fillStyle = '#FF6633';
  ctx.fillText('CO₂ out', w*0.25, h*0.1);
  ctx.fillStyle = '#33AAFF';
  ctx.fillText('O₂ in', w*0.43, h*0.1);
}

static drawTrichome(ctx, w, h) {
  ctx.fillStyle = '#8BC870';
  ctx.fillRect(0, 0, w, h);

  // Leaf surface background
  ctx.fillStyle = '#7AB860';
  ctx.fillRect(0, h*0.65, w, h*0.35);
  ctx.strokeStyle = '#5A9840';
  ctx.lineWidth = 2;
  ctx.beginPath(); ctx.moveTo(0,h*0.65); ctx.lineTo(w,h*0.65); ctx.stroke();

  // Epidermal cells visible
  ctx.strokeStyle = '#4A8830';
  ctx.lineWidth = 1;
  for(let i=0; i<6; i++) {
    ctx.beginPath();
    ctx.rect(i*w/6, h*0.65, w/6, h*0.35);
    ctx.stroke();
  }

  // === Glandular trichome (left) ===
  const tx1 = w*0.25;
  // Stalk cells
  ctx.fillStyle = '#D4E8A0';
  ctx.strokeStyle = '#4A7030';
  ctx.lineWidth = 1.5;
  const stalkCells = [
    {y:0.62,h:0.07},{y:0.55,h:0.07},{y:0.48,h:0.07},
  ];
  stalkCells.forEach(s => {
    ctx.beginPath();
    ctx.rect(tx1 - w*0.025, s.y*h, w*0.05, s.h*h);
    ctx.fill(); ctx.stroke();
  });
  // Glandular head
  ctx.fillStyle = '#FFDD44';
  ctx.strokeStyle = '#AA8800';
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.arc(tx1, h*0.42, w*0.065, 0, Math.PI*2);
  ctx.fill(); ctx.stroke();
  // Secretory droplets
  ctx.fillStyle = 'rgba(255,200,0,0.6)';
  [{x:-0.04,y:-0.06},{x:0.04,y:-0.07},{x:0.0,y:-0.08}].forEach(d => {
    ctx.beginPath();
    ctx.arc(tx1+d.x*w, h*0.42+d.y*h, w*0.015, 0, Math.PI*2);
    ctx.fill();
  });
  ctx.fillStyle = '#FFFFFF';
  ctx.font = `${h*0.04}px Arial`;
  ctx.fillText('Glandular', w*0.03, h*0.32);
  ctx.fillText('trichome', w*0.05, h*0.37);

  // === Non-glandular unicellular trichome (center) ===
  const tx2 = w*0.52;
  ctx.fillStyle = '#D4E8A0';
  ctx.strokeStyle = '#4A7030';
  ctx.lineWidth = 1.5;
  ctx.beginPath();
  ctx.moveTo(tx2 - w*0.025, h*0.65);
  ctx.bezierCurveTo(tx2 - w*0.02, h*0.45, tx2 + w*0.03, h*0.3, tx2 + w*0.05, h*0.12);
  ctx.bezierCurveTo(tx2 + w*0.06, h*0.08, tx2 + w*0.04, h*0.06, tx2 + w*0.03, h*0.07);
  ctx.bezierCurveTo(tx2 + w*0.01, h*0.26, tx2 - w*0.01, h*0.43, tx2 + w*0.025, h*0.65);
  ctx.closePath();
  ctx.fill(); ctx.stroke();
  ctx.fillStyle = '#FFFFFF';
  ctx.fillText('Non-glandular', w*0.5, h*0.32);
  ctx.fillText('unicellular', w*0.52, h*0.37);

  // === Stellate (star) trichome (right) ===
  const tx3 = w*0.78, ty3 = h*0.52;
  // Base cell
  ctx.fillStyle = '#C8E090';
  ctx.strokeStyle = '#4A7030';
  ctx.lineWidth = 1.5;
  ctx.beginPath();
  ctx.rect(tx3-w*0.025, h*0.6, w*0.05, h*0.05);
  ctx.fill(); ctx.stroke();
  // Radiating arms
  const arms = 6;
  for(let i=0; i<arms; i++) {
    const angle = (i/arms)*Math.PI*2;
    ctx.strokeStyle = '#C8E090';
    ctx.fillStyle = '#C8E090';
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.moveTo(tx3, ty3);
    ctx.lineTo(tx3 + Math.cos(angle)*w*0.1, ty3 + Math.sin(angle)*h*0.12);
    ctx.stroke();
    ctx.beginPath();
    ctx.arc(tx3 + Math.cos(angle)*w*0.1, ty3 + Math.sin(angle)*h*0.12, w*0.012, 0, Math.PI*2);
    ctx.fill();
  }
  ctx.fillStyle = '#FFFFFF';
  ctx.fillText('Stellate', w*0.75, h*0.35);
  ctx.fillText('trichome', w*0.73, h*0.4);

  ctx.fillStyle = '#FFFFFF';
  ctx.font = `bold ${h*0.055}px Arial`;
  ctx.fillText('Trichomes', w*0.36, h*0.08);
}

static drawBulkCell(ctx, w, h) {
  ctx.fillStyle = '#B8D890';
  ctx.fillRect(0, 0, w, h);

  // Cell wall
  ctx.fillStyle = '#C8E8A0';
  ctx.strokeStyle = '#4A6B2E';
  ctx.lineWidth = 4;
  ctx.beginPath();
  ctx.roundRect(w*0.08, h*0.08, w*0.84, h*0.84, w*0.06);
  ctx.fill(); ctx.stroke();

  // Cell membrane (thin inner line)
  ctx.strokeStyle = '#88AA60';
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.roundRect(w*0.1, h*0.1, w*0.8, h*0.8, w*0.05);
  ctx.stroke();

  // Large central vacuole
  ctx.fillStyle = 'rgba(180,220,255,0.55)';
  ctx.strokeStyle = '#5599CC';
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.ellipse(w*0.5, h*0.52, w*0.28, h*0.3, 0, 0, Math.PI*2);
  ctx.fill(); ctx.stroke();

  // Chloroplasts scattered in cytoplasm
  const chloroPos = [
    {x:0.22,y:0.22,a:0.3},{x:0.48,y:0.16,a:-0.2},{x:0.72,y:0.25,a:0.5},
    {x:0.18,y:0.5,a:0.1},{x:0.78,y:0.52,a:-0.3},{x:0.25,y:0.75,a:0.4},
    {x:0.55,y:0.82,a:0.0},{x:0.78,y:0.78,a:-0.4},
  ];
  chloroPos.forEach(c => {
    ctx.fillStyle = '#3A7A20';
    ctx.strokeStyle = '#2A5A10';
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.ellipse(c.x*w, c.y*h, w*0.055, h*0.035, c.a, 0, Math.PI*2);
    ctx.fill(); ctx.stroke();
    // Thylakoid stacks (simple lines)
    ctx.strokeStyle = '#1A4A08';
    ctx.lineWidth = 1;
    for(let i=-1; i<=1; i++) {
      ctx.beginPath();
      ctx.moveTo(c.x*w + Math.cos(c.a)*i*w*0.025 - Math.sin(c.a)*w*0.04,
                 c.y*h + Math.sin(c.a)*i*w*0.025 + Math.cos(c.a)*w*0.04);
      ctx.lineTo(c.x*w + Math.cos(c.a)*i*w*0.025 + Math.sin(c.a)*w*0.04,
                 c.y*h + Math.sin(c.a)*i*w*0.025 - Math.cos(c.a)*w*0.04);
      ctx.stroke();
    }
  });

  // Nucleus
  ctx.fillStyle = '#D4905A';
  ctx.strokeStyle = '#8B4513';
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.ellipse(w*0.38, h*0.38, w*0.1, h*0.09, -0.2, 0, Math.PI*2);
  ctx.fill(); ctx.stroke();

  // Nuclear pores
  ctx.fillStyle = '#8B4513';
  for(let i=0; i<6; i++) {
    const a = (i/6)*Math.PI*2;
    ctx.beginPath();
    ctx.arc(w*0.38 + Math.cos(a)*w*0.09, h*0.38 + Math.sin(a)*h*0.08, w*0.008, 0, Math.PI*2);
    ctx.fill();
  }

  // Nucleolus
  ctx.fillStyle = '#6A2A00';
  ctx.beginPath();
  ctx.arc(w*0.37, h*0.37, w*0.03, 0, Math.PI*2);
  ctx.fill();

  // Mitochondria (small oval)
  ctx.fillStyle = '#E09060';
  ctx.strokeStyle = '#A05020';
  ctx.lineWidth = 1;
  [{x:0.65,y:0.32,a:0.5},{x:0.72,y:0.68,a:-0.3}].forEach(m => {
    ctx.beginPath();
    ctx.ellipse(m.x*w, m.y*h, w*0.04, h*0.025, m.a, 0, Math.PI*2);
    ctx.fill(); ctx.stroke();
  });

  // ER rough (wavy lines near nucleus)
  ctx.strokeStyle = '#AA7040';
  ctx.lineWidth = 1.5;
  ctx.setLineDash([4,2]);
  ctx.beginPath();
  ctx.moveTo(w*0.28, h*0.44);
  ctx.bezierCurveTo(w*0.3,h*0.47,w*0.35,h*0.43,w*0.37,h*0.46);
  ctx.bezierCurveTo(w*0.39,h*0.49,w*0.44,h*0.45,w*0.46,h*0.48);
  ctx.stroke();
  ctx.setLineDash([]);

  // Labels
  ctx.fillStyle = '#1A3A08';
  ctx.font = `bold ${h*0.052}px Arial`;
  ctx.fillText('Mesophyll Cell', w*0.28, h*0.06);
  ctx.font = `${h*0.038}px Arial`;
  ctx.fillText('Cell wall', w*0.68, h*0.14);
  ctx.fillText('Chloroplast', w*0.55, h*0.55);
  ctx.fillText('Nucleus', w*0.5, h*0.36);
  ctx.fillText('Vacuole', w*0.54, h*0.5);
  ctx.fillText('Mitochondria', w*0.55, h*0.3);
}

static drawChloroplast(ctx, w, h) {
  ctx.fillStyle = '#1A3A10';
  ctx.fillRect(0, 0, w, h);

  // Outer membrane
  ctx.fillStyle = '#3A6A20';
  ctx.strokeStyle = '#1A4A08';
  ctx.lineWidth = 3;
  ctx.beginPath();
  ctx.ellipse(w*0.5, h*0.5, w*0.44, h*0.38, 0, 0, Math.PI*2);
  ctx.fill(); ctx.stroke();

  // Inner membrane
  ctx.strokeStyle = '#2A5A10';
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.ellipse(w*0.5, h*0.5, w*0.40, h*0.34, 0, 0, Math.PI*2);
  ctx.stroke();

  // Stroma (medium green fill already set)
  ctx.fillStyle = '#4A7A28';
  ctx.beginPath();
  ctx.ellipse(w*0.5, h*0.5, w*0.39, h*0.33, 0, 0, Math.PI*2);
  ctx.fill();

  // Grana (stacks of thylakoids) - 3 grana
  const granaData = [
    {cx:0.32, cy:0.48, stackCount:5},
    {cx:0.54, cy:0.38, stackCount:4},
    {cx:0.68, cy:0.55, stackCount:6},
  ];

  granaData.forEach(g => {
    const sw = w*0.08, sh = h*0.025;
    for(let i=0; i<g.stackCount; i++) {
      const ty = (g.cy - (g.stackCount/2)*0.04 + i*0.04)*h;
      ctx.fillStyle = i%2===0 ? '#88CC44' : '#66AA22';
      ctx.strokeStyle = '#2A5A08';
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.rect(g.cx*w - sw/2, ty, sw, sh);
      ctx.fill(); ctx.stroke();
    }
    // Label granum
    ctx.fillStyle = '#FFFFFF';
    ctx.font = `${h*0.035}px Arial`;
    ctx.textAlign = 'center';
    ctx.fillText('granum', g.cx*w, (g.cy + g.stackCount*0.02 + 0.07)*h);
    ctx.textAlign = 'left';
  });

  // Stroma lamellae (connecting grana)
  ctx.strokeStyle = '#55AA20';
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.moveTo(w*0.36, h*0.48);
  ctx.bezierCurveTo(w*0.42,h*0.44,w*0.48,h*0.42,w*0.54,h*0.4);
  ctx.stroke();
  ctx.beginPath();
  ctx.moveTo(w*0.58, h*0.42);
  ctx.bezierCurveTo(w*0.62,h*0.46,w*0.65,h*0.5,w*0.66,h*0.53);
  ctx.stroke();

  // Stroma label
  ctx.fillStyle = '#CCFFAA';
  ctx.font = `${h*0.04}px Arial`;
  ctx.fillText('Stroma', w*0.17, h*0.65);
  ctx.fillText('(Calvin cycle)', w*0.13, h*0.7);

  // Thylakoid label
  ctx.fillStyle = '#AAFFCC';
  ctx.fillText('Thylakoid', w*0.04, h*0.35);
  ctx.fillText('membrane', w*0.04, h*0.4);

  // Outer/inner membrane labels
  ctx.fillStyle = '#FFFFFF';
  ctx.font = `${h*0.036}px Arial`;
  ctx.fillText('Outer membrane', w*0.55, h*0.88);
  ctx.fillText('Inner membrane', w*0.55, h*0.93);

  ctx.fillStyle = '#FFFFFF';
  ctx.font = `bold ${h*0.055}px Arial`;
  ctx.fillText('Chloroplast', w*0.32, h*0.08);

  // Stroma lamellae label
  ctx.fillStyle = '#AAFFAA';
  ctx.font = `${h*0.036}px Arial`;
  ctx.fillText('Stroma', w*0.44, h*0.56);
  ctx.fillText('lamellae', w*0.44, h*0.61);
}

static drawMitochondria(ctx, w, h) {
  ctx.fillStyle = '#2A1A0A';
  ctx.fillRect(0, 0, w, h);

  // Outer membrane
  ctx.fillStyle = '#C87840';
  ctx.strokeStyle = '#8B4513';
  ctx.lineWidth = 3;
  ctx.beginPath();
  ctx.ellipse(w*0.5, h*0.5, w*0.44, h*0.34, 0, 0, Math.PI*2);
  ctx.fill(); ctx.stroke();

  // Intermembrane space
  ctx.fillStyle = '#E09A60';
  ctx.beginPath();
  ctx.ellipse(w*0.5, h*0.5, w*0.4, h*0.3, 0, 0, Math.PI*2);
  ctx.fill();

  // Inner membrane / matrix fill
  ctx.fillStyle = '#D08040';
  ctx.beginPath();
  ctx.ellipse(w*0.5, h*0.5, w*0.36, h*0.26, 0, 0, Math.PI*2);
  ctx.fill();

  // Cristae (inner membrane folds)
  ctx.strokeStyle = '#E09A60';
  ctx.lineWidth = 6;
  ctx.fillStyle = '#E09A60';

  const cristaePaths = [
    // shelf-like folds from top
    [{x:0.2,y:0.4},{x:0.35,y:0.4},{x:0.35,y:0.36},{x:0.52,y:0.36},{x:0.52,y:0.4},{x:0.6,y:0.4}],
    [{x:0.22,y:0.54},{x:0.38,y:0.54},{x:0.38,y:0.58},{x:0.55,y:0.58},{x:0.55,y:0.54},{x:0.7,y:0.54}],
    [{x:0.3,y:0.46},{x:0.32,y:0.46},{x:0.32,y:0.5},{x:0.44,y:0.5},{x:0.44,y:0.46},{x:0.62,y:0.46}],
  ];

  cristaePaths.forEach(path => {
    ctx.beginPath();
    ctx.moveTo(path[0].x*w, path[0].y*h);
    path.slice(1).forEach(p => ctx.lineTo(p.x*w, p.y*h));
    ctx.stroke();
  });

  // Matrix label region
  ctx.fillStyle = '#FFDDBB';
  ctx.font = `${h*0.042}px Arial`;
  ctx.fillText('Matrix', w*0.44, h*0.52);

  // ATP synthase dots on inner membrane
  ctx.fillStyle = '#FFDD44';
  const atpPos = [
    {x:0.35,y:0.38},{x:0.49,y:0.37},{x:0.38,y:0.56},{x:0.52,y:0.57},{x:0.43,y:0.48},
  ];
  atpPos.forEach(p => {
    ctx.beginPath();
    ctx.arc(p.x*w, p.y*h, w*0.014, 0, Math.PI*2);
    ctx.fill();
  });

  // Labels
  ctx.fillStyle = '#FFFFFF';
  ctx.font = `bold ${h*0.055}px Arial`;
  ctx.fillText('Mitochondrion', w*0.28, h*0.08);
  ctx.font = `${h*0.038}px Arial`;
  ctx.fillText('Outer membrane', w*0.55, h*0.2);
  ctx.fillText('Inner membrane', w*0.55, h*0.25);
  ctx.fillText('Intermembrane', w*0.55, h*0.3);
  ctx.fillText('space', w*0.55, h*0.35);
  ctx.fillText('Cristae', w*0.04, h*0.43);
  ctx.fillStyle = '#FFDD44';
  ctx.fillText('ATP synthase', w*0.04, h*0.75);
  ctx.fillStyle = '#FFDDBB';
  ctx.fillText('(Krebs cycle', w*0.37, h*0.6);
  ctx.fillText('here)', w*0.43, h*0.65);
}

static drawPollen(ctx, w, h) {
  ctx.fillStyle = '#2A1A00';
  ctx.fillRect(0, 0, w, h);

  // === Main pollen grain (large, center-left) ===
  const px = w*0.38, py = h*0.48;

  // Exine (outer wall) - spiky
  const spikes = 18;
  ctx.fillStyle = '#E8A820';
  ctx.strokeStyle = '#AA7010';
  ctx.lineWidth = 2;
  ctx.beginPath();
  for(let i=0; i<spikes*2; i++) {
    const angle = (i/spikes)*Math.PI;
    const r = i%2===0 ? w*0.24 : w*0.18;
    const x = px + Math.cos(angle)*r;
    const y = py + Math.sin(angle)*r*0.85;
    if(i===0) ctx.moveTo(x,y); else ctx.lineTo(x,y);
  }
  ctx.closePath();
  ctx.fill(); ctx.stroke();

  // Intine (inner wall)
  ctx.fillStyle = '#F0C840';
  ctx.beginPath();
  ctx.ellipse(px, py, w*0.16, h*0.15, 0, 0, Math.PI*2);
  ctx.fill();

  // Vegetative nucleus
  ctx.fillStyle = '#CC5500';
  ctx.strokeStyle = '#882200';
  ctx.lineWidth = 1.5;
  ctx.beginPath();
  ctx.ellipse(px-w*0.04, py-h*0.03, w*0.055, h*0.05, -0.3, 0, Math.PI*2);
  ctx.fill(); ctx.stroke();

  // Generative cell (2 sperm)
  ctx.fillStyle = '#FF8844';
  ctx.strokeStyle = '#CC4400';
  ctx.lineWidth = 1;
  ctx.beginPath();
  ctx.ellipse(px+w*0.04, py+h*0.02, w*0.04, h*0.055, 0.4, 0, Math.PI*2);
  ctx.fill(); ctx.stroke();

  // Apertures (colpi/pores) - 3 colpate
  ctx.strokeStyle = '#AA7010';
  ctx.fillStyle = 'rgba(100,50,0,0.4)';
  ctx.lineWidth = 2;
  for(let i=0; i<3; i++) {
    const angle = (i/3)*Math.PI*2;
    ctx.beginPath();
    ctx.ellipse(px+Math.cos(angle)*w*0.15, py+Math.sin(angle)*h*0.13, w*0.025, h*0.07, angle, 0, Math.PI*2);
    ctx.fill(); ctx.stroke();
  }

  // === Surface detail close-up (right) ===
  const sx = w*0.78, sy = h*0.42;
  ctx.fillStyle = '#E8A820';
  ctx.strokeStyle = '#AA7010';
  ctx.lineWidth = 1;
  ctx.beginPath();
  ctx.arc(sx, sy, w*0.14, 0, Math.PI*2);
  ctx.fill(); ctx.stroke();
  // Sculptured exine surface
  ctx.fillStyle = '#AA7010';
  const sculpture = [{x:-0.06,y:-0.08},{x:0.0,y:-0.1},{x:0.07,y:-0.07},
    {x:-0.08,y:0.0},{x:0.0,y:0.0},{x:0.08,y:0.02},{x:-0.05,y:0.08},{x:0.03,y:0.09}];
  sculpture.forEach(s => {
    ctx.beginPath();
    ctx.arc(sx+s.x*w, sy+s.y*h, w*0.012, 0, Math.PI*2);
    ctx.fill();
  });

  // Labels
  ctx.fillStyle = '#FFFFFF';
  ctx.font = `bold ${h*0.055}px Arial`;
  ctx.fillText('Pollen Grain', w*0.3, h*0.08);
  ctx.font = `${h*0.038}px Arial`;
  ctx.fillText('Exine', w*0.12, h*0.26);
  ctx.fillText('(outer wall)', w*0.08, h*0.31);
  ctx.fillText('Vegetative', w*0.04, h*0.48);
  ctx.fillText('nucleus', w*0.06, h*0.53);
  ctx.fillText('Generative', w*0.04, h*0.62);
  ctx.fillText('cell', w*0.08, h*0.67);
  ctx.fillText('Aperture', w*0.38, h*0.78);
  ctx.fillStyle = '#FFD070';
  ctx.fillText('Surface detail →', w*0.55, h*0.86);
}

static drawOvule(ctx, w, h) {
  ctx.fillStyle = '#1A2A3A';
  ctx.fillRect(0, 0, w, h);

  const cx = w*0.48, cy = h*0.48;

  // Outer integument
  ctx.fillStyle = '#8BC870';
  ctx.strokeStyle = '#4A7830';
  ctx.lineWidth = 3;
  ctx.beginPath();
  ctx.ellipse(cx, cy, w*0.32, h*0.38, 0, 0, Math.PI*2);
  ctx.fill(); ctx.stroke();

  // Inner integument
  ctx.fillStyle = '#A8D888';
  ctx.strokeStyle = '#5A8840';
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.ellipse(cx, cy+h*0.02, w*0.25, h*0.31, 0, 0, Math.PI*2);
  ctx.fill(); ctx.stroke();

  // Nucellus
  ctx.fillStyle = '#C8EEA8';
  ctx.strokeStyle = '#6A9850';
  ctx.lineWidth = 1.5;
  ctx.beginPath();
  ctx.ellipse(cx, cy+h*0.03, w*0.18, h*0.24, 0, 0, Math.PI*2);
  ctx.fill(); ctx.stroke();

  // Embryo sac (large central cell)
  ctx.fillStyle = 'rgba(200,160,240,0.5)';
  ctx.strokeStyle = '#8844AA';
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.ellipse(cx, cy+h*0.04, w*0.12, h*0.18, 0, 0, Math.PI*2);
  ctx.fill(); ctx.stroke();

  // Egg cell (at micropyle end)
  ctx.fillStyle = '#FF8888';
  ctx.strokeStyle = '#CC4444';
  ctx.lineWidth = 1.5;
  ctx.beginPath();
  ctx.arc(cx, cy-h*0.09, w*0.035, 0, Math.PI*2);
  ctx.fill(); ctx.stroke();

  // Synergids (flanking egg)
  ctx.fillStyle = '#FFAAAA';
  ctx.strokeStyle = '#CC4444';
  ctx.lineWidth = 1;
  ctx.beginPath();
  ctx.ellipse(cx-w*0.05, cy-h*0.08, w*0.025, h*0.03, -0.2, 0, Math.PI*2);
  ctx.fill(); ctx.stroke();
  ctx.beginPath();
  ctx.ellipse(cx+w*0.05, cy-h*0.08, w*0.025, h*0.03, 0.2, 0, Math.PI*2);
  ctx.fill(); ctx.stroke();

  // Central cell (large, 2 polar nuclei)
  ctx.fillStyle = '#9966CC';
  ctx.strokeStyle = '#6633AA';
  ctx.lineWidth = 1;
  ctx.beginPath(); ctx.arc(cx-w*0.04, cy+h*0.04, w*0.02, 0, Math.PI*2); ctx.fill(); ctx.stroke();
  ctx.beginPath(); ctx.arc(cx+w*0.04, cy+h*0.04, w*0.02, 0, Math.PI*2); ctx.fill(); ctx.stroke();

  // Antipodal cells (at chalaza end)
  ctx.fillStyle = '#FFCC88';
  ctx.strokeStyle = '#AA7730';
  ctx.lineWidth = 1;
  [{x:-0.05,y:0.14},{x:0.0,y:0.16},{x:0.05,y:0.14}].forEach(a => {
    ctx.beginPath();
    ctx.arc(cx+a.x*w, cy+a.y*h, w*0.022, 0, Math.PI*2);
    ctx.fill(); ctx.stroke();
  });

  // Micropyle (opening at top)
  ctx.strokeStyle = '#4A7830';
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.moveTo(cx-w*0.06, cy-h*0.36);
  ctx.lineTo(cx-w*0.02, cy-h*0.32);
  ctx.stroke();
  ctx.beginPath();
  ctx.moveTo(cx+w*0.06, cy-h*0.36);
  ctx.lineTo(cx+w*0.02, cy-h*0.32);
  ctx.stroke();

  // Funiculus (stalk)
  ctx.strokeStyle = '#4A7830';
  ctx.lineWidth = 5;
  ctx.beginPath();
  ctx.moveTo(cx, cy+h*0.38);
  ctx.lineTo(cx, cy+h*0.48);
  ctx.stroke();

  // Labels
  ctx.fillStyle = '#FFFFFF';
  ctx.font = `bold ${h*0.053}px Arial`;
  ctx.fillText('Ovule Structure', w*0.28, h*0.07);
  ctx.font = `${h*0.036}px Arial`;
  ctx.fillText('Outer integument', w*0.62, h*0.22);
  ctx.fillText('Inner integument', w*0.62, h*0.28);
  ctx.fillText('Nucellus', w*0.62, h*0.34);
  ctx.fillText('Embryo sac', w*0.62, h*0.4);
  ctx.fillStyle = '#FFAAAA';
  ctx.fillText('Egg cell', w*0.04, h*0.36);
  ctx.fillText('Synergids', w*0.04, h*0.42);
  ctx.fillStyle = '#CC99FF';
  ctx.fillText('Polar nuclei', w*0.04, h*0.5);
  ctx.fillStyle = '#FFCC88';
  ctx.fillText('Antipodals', w*0.04, h*0.62);
  ctx.fillStyle = '#CCFFCC';
  ctx.fillText('Micropyle', w*0.38, h*0.12);
  ctx.fillText('Funiculus', w*0.52, h*0.93);
}

static drawEmbryo(ctx, w, h) {
  ctx.fillStyle = '#1A2A10';
  ctx.fillRect(0, 0, w, h);

  // Seed coat outline (background)
  ctx.fillStyle = '#5A3A10';
  ctx.strokeStyle = '#3A2008';
  ctx.lineWidth = 3;
  ctx.beginPath();
  ctx.ellipse(w*0.5, h*0.5, w*0.44, h*0.46, 0, 0, Math.PI*2);
  ctx.fill(); ctx.stroke();

  // Endosperm (if present) - thin layer
  ctx.fillStyle = '#D4B860';
  ctx.beginPath();
  ctx.ellipse(w*0.5, h*0.5, w*0.4, h*0.42, 0, 0, Math.PI*2);
  ctx.fill();

  // === Dicot embryo ===
  // Two cotyledons
  ctx.fillStyle = '#7AB840';
  ctx.strokeStyle = '#3A6810';
  ctx.lineWidth = 2;
  // Left cotyledon
  ctx.beginPath();
  ctx.ellipse(w*0.38, h*0.38, w*0.1, h*0.15, -0.4, 0, Math.PI*2);
  ctx.fill(); ctx.stroke();
  // Right cotyledon
  ctx.beginPath();
  ctx.ellipse(w*0.62, h*0.38, w*0.1, h*0.15, 0.4, 0, Math.PI*2);
  ctx.fill(); ctx.stroke();

  // Hypocotyl
  ctx.fillStyle = '#88C050';
  ctx.strokeStyle = '#3A6810';
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.rect(w*0.44, h*0.42, w*0.12, h*0.18);
  ctx.fill(); ctx.stroke();

  // Radicle (embryonic root)
  ctx.fillStyle = '#AA8840';
  ctx.strokeStyle = '#7A5820';
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.ellipse(w*0.5, h*0.64, w*0.07, h*0.09, 0, 0, Math.PI*2);
  ctx.fill(); ctx.stroke();

  // Plumule / epicotyl
  ctx.fillStyle = '#A8D860';
  ctx.strokeStyle = '#3A6810';
  ctx.lineWidth = 1.5;
  ctx.beginPath();
  ctx.ellipse(w*0.5, h*0.34, w*0.04, h*0.06, 0, 0, Math.PI*2);
  ctx.fill(); ctx.stroke();
  // Tiny leaf primordia on plumule
  ctx.fillStyle = '#C8F880';
  ctx.beginPath();
  ctx.ellipse(w*0.47, h*0.3, w*0.025, h*0.03, -0.5, 0, Math.PI*2);
  ctx.fill();
  ctx.beginPath();
  ctx.ellipse(w*0.53, h*0.3, w*0.025, h*0.03, 0.5, 0, Math.PI*2);
  ctx.fill();

  // Dimension lines / labels
  const labelLine = (x1,y1,x2,y2,text,textX,textY) => {
    ctx.strokeStyle = '#FFFFFF';
    ctx.lineWidth = 1;
    ctx.setLineDash([3,3]);
    ctx.beginPath(); ctx.moveTo(x1*w,y1*h); ctx.lineTo(x2*w,y2*h); ctx.stroke();
    ctx.setLineDash([]);
    ctx.fillStyle = '#FFFFFF';
    ctx.font = `${h*0.038}px Arial`;
    ctx.fillText(text, textX*w, textY*h);
  };

  labelLine(0.28,0.38,0.1,0.34,'Cotyledon',0.02,0.34);
  labelLine(0.44,0.51,0.2,0.55,'Hypocotyl',0.02,0.55);
  labelLine(0.5,0.71,0.62,0.8,'Radicle',0.63,0.8);
  labelLine(0.5,0.28,0.68,0.22,'Plumule',0.69,0.22);

  ctx.fillStyle = '#FFFFFF';
  ctx.font = `bold ${h*0.055}px Arial`;
  ctx.fillText('Dicot Embryo', w*0.3, h*0.07);
}

static drawEndosperm(ctx, w, h) {
  ctx.fillStyle = '#2A1808';
  ctx.fillRect(0, 0, w, h);

  // Seed coat
  ctx.fillStyle = '#8B5A20';
  ctx.strokeStyle = '#5A3010';
  ctx.lineWidth = 3;
  ctx.beginPath();
  ctx.ellipse(w*0.5, h*0.5, w*0.45, h*0.43, 0, 0, Math.PI*2);
  ctx.fill(); ctx.stroke();

  // Endosperm mass
  ctx.fillStyle = '#E8CC80';
  ctx.strokeStyle = '#AA9040';
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.ellipse(w*0.5, h*0.5, w*0.4, h*0.38, 0, 0, Math.PI*2);
  ctx.fill(); ctx.stroke();

  // Endosperm cells (starchy)
  ctx.fillStyle = '#D4B860';
  ctx.strokeStyle = '#AA8830';
  ctx.lineWidth = 1;
  const cellGrid = [];
  for(let r=-2; r<=2; r++) {
    for(let c=-3; c<=3; c++) {
      const ex = w*0.5 + c*w*0.085;
      const ey = h*0.5 + r*h*0.075;
      const dx = (ex-w*0.5)/( w*0.38), dy = (ey-h*0.5)/(h*0.36);
      if(dx*dx+dy*dy < 1.0) {
        ctx.beginPath();
        ctx.rect(ex-w*0.035, ey-h*0.03, w*0.07, h*0.06);
        ctx.fill(); ctx.stroke();
        // Starch granule
        ctx.fillStyle = '#FFEEAA';
        ctx.beginPath(); ctx.arc(ex, ey, w*0.012, 0, Math.PI*2); ctx.fill();
        ctx.fillStyle = '#D4B860';
      }
    }
  }

  // Aleurone layer (outer protein ring)
  ctx.strokeStyle = '#CC8830';
  ctx.lineWidth = 5;
  ctx.beginPath();
  ctx.ellipse(w*0.5, h*0.5, w*0.38, h*0.36, 0, 0, Math.PI*2);
  ctx.stroke();
  // Aleurone cells
  ctx.fillStyle = '#E8A840';
  ctx.strokeStyle = '#AA6820';
  ctx.lineWidth = 1;
  for(let i=0; i<16; i++) {
    const angle = (i/16)*Math.PI*2;
    const ax = w*0.5 + Math.cos(angle)*w*0.37;
    const ay = h*0.5 + Math.sin(angle)*h*0.35;
    ctx.beginPath();
    ctx.arc(ax, ay, w*0.022, 0, Math.PI*2);
    ctx.fill(); ctx.stroke();
  }

  // Small embryo region
  ctx.fillStyle = '#7AB840';
  ctx.strokeStyle = '#3A6810';
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.ellipse(w*0.5, h*0.7, w*0.08, h*0.06, 0, 0, Math.PI*2);
  ctx.fill(); ctx.stroke();

  // Labels
  ctx.fillStyle = '#FFFFFF';
  ctx.font = `bold ${h*0.055}px Arial`;
  ctx.fillText('Endosperm', w*0.33, h*0.07);
  ctx.font = `${h*0.038}px Arial`;
  ctx.fillText('Seed coat', w*0.66, h*0.22);
  ctx.fillText('Aleurone layer', w*0.62, h*0.3);
  ctx.fillText('(protein storage)', w*0.6, h*0.35);
  ctx.fillText('Starchy endosperm', w*0.04, h*0.5);
  ctx.fillText('(carbohydrate store)', w*0.03, h*0.55);
  ctx.fillStyle = '#FFEEAA';
  ctx.fillText('Starch granules', w*0.04, h*0.65);
  ctx.fillStyle = '#AAFFAA';
  ctx.fillText('Embryo', w*0.52, h*0.78);
}

static drawBud(ctx, w, h) {
  ctx.fillStyle = '#1A2A10';
  ctx.fillRect(0, 0, w, h);

  // === Apical bud (left) ===
  const ax = w*0.28, ay = h*0.5;

  // Bud scales (outer protective leaves)
  const scaleAngles = [-0.3, 0.3, -0.15, 0.15, 0.0];
  scaleAngles.forEach((a, i) => {
    ctx.fillStyle = `hsl(30, 60%, ${25+i*5}%)`;
    ctx.strokeStyle = '#3A2008';
    ctx.lineWidth = 1.5;
    ctx.beginPath();
    ctx.moveTo(ax, ay + h*0.18);
    ctx.bezierCurveTo(
      ax + Math.sin(a-0.3)*w*0.12, ay - h*(0.1+i*0.06),
      ax + Math.sin(a+0.3)*w*0.12, ay - h*(0.1+i*0.06),
      ax + Math.sin(a)*w*0.04, ay - h*(0.16+i*0.06)
    );
    ctx.fill(); ctx.stroke();
  });

  // Apical meristem dome
  ctx.fillStyle = '#88CC50';
  ctx.strokeStyle = '#4A7820';
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.arc(ax, ay - h*0.2, w*0.06, 0, Math.PI*2);
  ctx.fill(); ctx.stroke();

  // Leaf primordia around meristem
  ctx.fillStyle = '#AADE68';
  ctx.strokeStyle = '#5A8830';
  ctx.lineWidth = 1;
  [{a:-0.5,r:0.08},{a:0.5,r:0.08},{a:-0.2,r:0.1},{a:0.2,r:0.1}].forEach(p => {
    ctx.beginPath();
    ctx.ellipse(ax+Math.sin(p.a)*w*p.r, ay-h*0.2-Math.cos(p.a)*h*p.r*0.8, w*0.03, h*0.04, p.a, 0, Math.PI*2);
    ctx.fill(); ctx.stroke();
  });

  // Stem below bud
  ctx.fillStyle = '#6B8830';
  ctx.strokeStyle = '#3A5510';
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.rect(ax-w*0.04, ay+h*0.18, w*0.08, h*0.25);
  ctx.fill(); ctx.stroke();

  ctx.fillStyle = '#FFFFFF';
  ctx.font = `${h*0.042}px Arial`;
  ctx.textAlign = 'center';
  ctx.fillText('Apical Bud', ax, h*0.05);
  ctx.fillText('(Terminal)', ax, h*0.1);
  ctx.textAlign = 'left';

  // === Axillary bud (right) ===
  const bx = w*0.72, by = h*0.4;

  // Stem
  ctx.fillStyle = '#6B8830';
  ctx.strokeStyle = '#3A5510';
  ctx.lineWidth = 3;
  ctx.beginPath();
  ctx.rect(bx-w*0.04, h*0.12, w*0.08, h*0.76);
  ctx.fill(); ctx.stroke();

  // Leaf with petiole (subtending leaf)
  ctx.fillStyle = '#7AB840';
  ctx.strokeStyle = '#3A6810';
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.moveTo(bx, by + h*0.1);
  ctx.bezierCurveTo(bx-w*0.25, by+h*0.05, bx-w*0.3, by-h*0.1, bx-w*0.12, by-h*0.16);
  ctx.bezierCurveTo(bx+w*0.02, by-h*0.18, bx+w*0.0, by+h*0.0, bx, by+h*0.1);
  ctx.fill(); ctx.stroke();

  // Axillary bud in leaf axil
  ctx.fillStyle = '#C8A050';
  ctx.strokeStyle = '#8B6020';
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.ellipse(bx - w*0.01, by + h*0.08, w*0.045, h*0.06, -0.3, 0, Math.PI*2);
  ctx.fill(); ctx.stroke();

  // Bud scales on axillary bud
  ctx.fillStyle = '#A07030';
  ctx.strokeStyle = '#6A4010';
  ctx.lineWidth = 1;
  [{a:-0.2},{a:0.2},{a:0.0}].forEach((s,i) => {
    ctx.beginPath();
    ctx.moveTo(bx-w*0.01, by+h*0.13);
    ctx.lineTo(bx-w*0.01 + Math.sin(s.a)*w*0.04, by+h*(0.08-i*0.025));
    ctx.lineTo(bx-w*0.01 + Math.sin(s.a+0.3)*w*0.03, by+h*(0.06-i*0.025));
    ctx.closePath();
    ctx.fill(); ctx.stroke();
  });

  // Node label
  ctx.fillStyle = '#FFDD44';
  ctx.beginPath();
  ctx.arc(bx, by+h*0.1, w*0.025, 0, Math.PI*2);
  ctx.fill();

  ctx.fillStyle = '#FFFFFF';
  ctx.font = `${h*0.042}px Arial`;
  ctx.textAlign = 'center';
  ctx.fillText('Axillary Bud', bx, h*0.05);
  ctx.fillText('(Lateral)', bx, h*0.1);
  ctx.textAlign = 'left';
  ctx.fillText('Node', bx+w*0.06, by+h*0.12);
  ctx.fillText('Axil', bx-w*0.18, by+h*0.12);
  ctx.fillText('Axillary', bx-w*0.22, by+h*0.18);
  ctx.fillText('bud', bx-w*0.16, by+h*0.23);

  // Meristem label on apical bud
  ctx.fillStyle = '#CCFFAA';
  ctx.font = `${h*0.036}px Arial`;
  ctx.fillText('Meristem', ax-w*0.12, ay-h*0.28);
  ctx.fillText('Leaf', ax+w*0.1, ay-h*0.18);
  ctx.fillText('primordia', ax+w*0.1, ay-h*0.13);
  ctx.fillText('Bud', ax+w*0.1, ay-h*0.05);
  ctx.fillText('scales', ax+w*0.1, ay);
}

static drawNodeInternode(ctx, w, h) {
  ctx.fillStyle = '#0A1A08';
  ctx.fillRect(0, 0, w, h);

  // Main stem (vertical)
  const sx = w*0.42;
  ctx.fillStyle = '#7AB840';
  ctx.strokeStyle = '#3A6810';
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.rect(sx - w*0.05, h*0.05, w*0.1, h*0.9);
  ctx.fill(); ctx.stroke();

  // Nodes (3 visible)
  const nodeYs = [0.22, 0.5, 0.78];
  nodeYs.forEach((ny, i) => {
    // Node band
    ctx.fillStyle = '#5A9820';
    ctx.strokeStyle = '#2A5808';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.rect(sx - w*0.055, ny*h - h*0.025, w*0.11, h*0.05);
    ctx.fill(); ctx.stroke();

    // Leaf emerging (alternating sides)
    const side = i%2===0 ? 1 : -1;
    ctx.fillStyle = '#8BC850';
    ctx.strokeStyle = '#3A6810';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(sx + side*w*0.05, ny*h);
    ctx.bezierCurveTo(
      sx + side*w*0.2, ny*h - h*0.06,
      sx + side*w*0.35, ny*h - h*0.04,
      sx + side*w*0.38, ny*h + h*0.02
    );
    ctx.bezierCurveTo(
      sx + side*w*0.28, ny*h + h*0.06,
      sx + side*w*0.12, ny*h + h*0.04,
      sx + side*w*0.05, ny*h
    );
    ctx.fill(); ctx.stroke();

    // Axillary bud
    ctx.fillStyle = '#C8A050';
    ctx.strokeStyle = '#8B6020';
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.arc(sx + side*w*0.06, ny*h - h*0.03, w*0.022, 0, Math.PI*2);
    ctx.fill(); ctx.stroke();
  });

  // Internode brackets (between nodes)
  const drawBracket = (y1, y2, label) => {
    const bx = sx + w*0.3;
    ctx.strokeStyle = '#FFAA44';
    ctx.lineWidth = 1.5;
    ctx.beginPath();
    ctx.moveTo(bx, y1*h + h*0.025);
    ctx.lineTo(bx + w*0.04, y1*h + h*0.025);
    ctx.moveTo(bx + w*0.04, y1*h + h*0.025);
    ctx.lineTo(bx + w*0.04, y2*h - h*0.025);
    ctx.moveTo(bx, y2*h - h*0.025);
    ctx.lineTo(bx + w*0.04, y2*h - h*0.025);
    ctx.stroke();
    ctx.fillStyle = '#FFAA44';
    ctx.font = `${h*0.038}px Arial`;
    ctx.fillText(label, bx + w*0.06, (y1+y2)*h/2 + h*0.015);
  };

  drawBracket(0.22, 0.5, 'Internode');
  drawBracket(0.5, 0.78, 'Internode');

  // Node labels
  ctx.fillStyle = '#FFDDAA';
  ctx.font = `${h*0.038}px Arial`;
  nodeYs.forEach(ny => {
    ctx.fillText('Node', sx - w*0.36, ny*h + h*0.015);
    ctx.strokeStyle = '#FFDDAA';
    ctx.lineWidth = 1;
    ctx.setLineDash([3,3]);
    ctx.beginPath();
    ctx.moveTo(sx - w*0.13, ny*h);
    ctx.lineTo(sx - w*0.055, ny*h);
    ctx.stroke();
    ctx.setLineDash([]);
  });

  // Axillary bud label
  ctx.fillStyle = '#FFEEAA';
  ctx.fillText('Axillary bud', sx + w*0.1, nodeYs[1]*h - h*0.06);

  ctx.fillStyle = '#FFFFFF';
  ctx.font = `bold ${h*0.053}px Arial`;
  ctx.fillText('Node & Internode', w*0.18, h*0.06);
}

static drawPetiole(ctx, w, h) {
  ctx.fillStyle = '#1A2A10';
  ctx.fillRect(0, 0, w, h);

  // === Longitudinal view (left half) ===
  // Stem at bottom-left
  ctx.fillStyle = '#7AB840';
  ctx.strokeStyle = '#3A6810';
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.rect(w*0.04, h*0.7, w*0.14, h*0.25);
  ctx.fill(); ctx.stroke();

  // Petiole connecting stem to blade
  ctx.fillStyle = '#88C048';
  ctx.strokeStyle = '#3A6810';
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.moveTo(w*0.1, h*0.7);
  ctx.bezierCurveTo(w*0.15, h*0.5, w*0.25, h*0.35, w*0.35, h*0.28);
  ctx.lineTo(w*0.37, h*0.32);
  ctx.bezierCurveTo(w*0.27, h*0.4, w*0.18, h*0.54, w*0.14, h*0.7);
  ctx.closePath();
  ctx.fill(); ctx.stroke();

  // Leaf blade
  ctx.fillStyle = '#7AB840';
  ctx.strokeStyle = '#3A6810';
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.moveTo(w*0.36, h*0.3);
  ctx.bezierCurveTo(w*0.5, h*0.1, w*0.7, h*0.08, w*0.78, h*0.2);
  ctx.bezierCurveTo(w*0.82, h*0.32, w*0.7, h*0.44, w*0.55, h*0.46);
  ctx.bezierCurveTo(w*0.44, h*0.48, w*0.38, h*0.4, w*0.36, h*0.3);
  ctx.fill(); ctx.stroke();
  // Midrib
  ctx.strokeStyle = '#4A7820';
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.moveTo(w*0.36, h*0.3);
  ctx.bezierCurveTo(w*0.5, h*0.22, w*0.65, h*0.22, w*0.78, h*0.2);
  ctx.stroke();
  // Veins
  ctx.lineWidth = 1;
  [[0.5,0.22,0.48,0.38],[0.6,0.22,0.6,0.38],[0.7,0.22,0.72,0.35]].forEach(v => {
    ctx.beginPath(); ctx.moveTo(v[0]*w,v[1]*h); ctx.lineTo(v[2]*w,v[3]*h); ctx.stroke();
  });

  // Labels (longitudinal)
  ctx.fillStyle = '#FFFFFF';
  ctx.font = `${h*0.038}px Arial`;
  ctx.fillText('Leaf blade', w*0.55, h*0.58);
  ctx.fillText('(lamina)', w*0.57, h*0.63);
  ctx.fillText('Petiole', w*0.02, h*0.5);
  ctx.fillText('Stem', w*0.03, h*0.88);

  // === Cross-section (right, inset) ===
  const csx = w*0.77, csy = h*0.72;
  ctx.fillStyle = '#2A4A18';
  ctx.strokeStyle = '#1A2A08';
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.arc(csx, csy, w*0.16, 0, Math.PI*2);
  ctx.fill(); ctx.stroke();

  // Epidermis ring
  ctx.strokeStyle = '#4A7820';
  ctx.lineWidth = 3;
  ctx.beginPath();
  ctx.arc(csx, csy, w*0.16, 0, Math.PI*2);
  ctx.stroke();

  // Cortex
  ctx.fillStyle = '#6A9A38';
  ctx.beginPath();
  ctx.arc(csx, csy, w*0.13, 0, Math.PI*2);
  ctx.fill();

  // Vascular bundles (arc of 3)
  const vbAngles = [-0.5, 0, 0.5];
  vbAngles.forEach(a => {
    const vx = csx + Math.sin(a)*w*0.06;
    const vy = csy - Math.abs(a)*h*0.02 - h*0.02;
    // Xylem
    ctx.fillStyle = '#B04020';
    ctx.beginPath(); ctx.arc(vx, vy, w*0.025, 0, Math.PI*2); ctx.fill();
    // Phloem
    ctx.fillStyle = '#E08050';
    ctx.beginPath(); ctx.arc(vx, vy + h*0.03, w*0.018, 0, Math.PI*2); ctx.fill();
  });

  // Collenchyma corners
  ctx.fillStyle = '#88BB50';
  [{a:0,r:0.12},{a:Math.PI,r:0.12}].forEach(c => {
    ctx.beginPath();
    ctx.arc(csx+Math.cos(c.a)*c.r*w, csy+Math.sin(c.a)*c.r*w, w*0.03, 0, Math.PI*2);
    ctx.fill();
  });

  ctx.fillStyle = '#FFFFFF';
  ctx.font = `${h*0.036}px Arial`;
  ctx.textAlign = 'center';
  ctx.fillText('X-section', csx, csy+h*0.21);
  ctx.textAlign = 'left';
  ctx.fillText('Xylem', csx+w*0.18, csy-h*0.04);
  ctx.fillText('Phloem', csx+w*0.18, csy+h*0.02);

  ctx.fillStyle = '#FFFFFF';
  ctx.font = `bold ${h*0.053}px Arial`;
  ctx.fillText('Petiole', w*0.37, h*0.07);
}

static drawMeristem(ctx, w, h) {
  ctx.fillStyle = '#0A1A08';
  ctx.fillRect(0, 0, w, h);

  const cx = w*0.5, cy = h*0.62;
  const meristemH = h*0.28;
  const meristemW = w*0.32;

  // Background stem tissue
  ctx.fillStyle = '#4A7828';
  ctx.strokeStyle = '#2A5010';
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.rect(cx - w*0.25, h*0.55, w*0.5, h*0.42);
  ctx.fill(); ctx.stroke();

  // Draw cell grid for meristem (small, densely packed cells)
  const rows = 8, cols = 7;
  const cellW = meristemW*2/cols, cellH = meristemH/rows;
  ctx.strokeStyle = '#2A5010';
  ctx.lineWidth = 1;

  for(let r=0; r<rows; r++) {
    for(let c=0; c<cols; c++) {
      const cellX = cx - meristemW + c*cellW;
      const cellY = (cy - meristemH) + r*cellH;
      // Color by zone
      const relR = r/rows;
      if(relR < 0.25) {
        ctx.fillStyle = '#AADE68'; // Protoderm (outermost)
      } else if(relR < 0.55) {
        ctx.fillStyle = '#88CC44'; // Ground meristem
      } else {
        ctx.fillStyle = '#66AA28'; // Procambium
      }
      ctx.beginPath();
      ctx.rect(cellX+1, cellY+1, cellW-2, cellH-2);
      ctx.fill(); ctx.stroke();

      // Nucleus in each cell
      ctx.fillStyle = '#2A5A10';
      ctx.beginPath();
      ctx.arc(cellX + cellW*0.5, cellY + cellH*0.45, cellW*0.15, 0, Math.PI*2);
      ctx.fill();
    }
  }

  // Dome shape clip/overlay to show apical dome
  ctx.fillStyle = '#CCEE88';
  ctx.strokeStyle = '#5A8A20';
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.ellipse(cx, cy - meristemH, meristemW, meristemH*0.5, 0, Math.PI, Math.PI*2);
  ctx.fill(); ctx.stroke();

  // Cells in dome
  ctx.fillStyle = '#BBDD77';
  ctx.strokeStyle = '#4A7A18';
  ctx.lineWidth = 1;
  for(let i=0; i<12; i++) {
    const angle = Math.PI + (i/11)*Math.PI;
    const r = 0.6 + (i%3)*0.15;
    ctx.beginPath();
    ctx.ellipse(
      cx + Math.cos(angle)*meristemW*r*0.7,
      (cy-meristemH) + Math.sin(angle)*meristemH*0.4*r,
      cellW*0.35, cellH*0.35, angle, 0, Math.PI*2
    );
    ctx.fill(); ctx.stroke();
  }

  // Zone labels with brackets
  const drawZoneLabel = (y, text, color) => {
    ctx.fillStyle = color;
    ctx.strokeStyle = color;
    ctx.lineWidth = 1.5;
    ctx.beginPath();
    ctx.moveTo(cx + meristemW + w*0.02, y*h);
    ctx.lineTo(cx + meristemW + w*0.06, y*h);
    ctx.stroke();
    ctx.font = `${h*0.036}px Arial`;
    ctx.fillText(text, cx + meristemW + w*0.07, y*h + h*0.01);
  };

  drawZoneLabel(0.38, 'Protoderm', '#AADE68');
  drawZoneLabel(0.48, 'Ground', '#88CC44');
  drawZoneLabel(0.5, 'meristem', '#88CC44');
  drawZoneLabel(0.58, 'Procambium', '#66AA28');

  // Mitosis indicator (cell dividing)
  ctx.strokeStyle = '#FFDD44';
  ctx.lineWidth = 2;
  ctx.fillStyle = 'rgba(255,220,0,0.2)';
  ctx.beginPath();
  ctx.rect(cx - cellW*0.5, (cy-meristemH) + 2*cellH + 1, cellW-1, cellH-1);
  ctx.fill(); ctx.stroke();
  ctx.fillStyle = '#FFDD44';
  ctx.font = `${h*0.032}px Arial`;
  ctx.fillText('Mitosis', cx - w*0.28, (cy-meristemH) + 2.5*cellH);

  ctx.fillStyle = '#FFFFFF';
  ctx.font = `bold ${h*0.053}px Arial`;
  ctx.textAlign = 'center';
  ctx.fillText('Apical Meristem', cx, h*0.06);
  ctx.font = `${h*0.038}px Arial`;
  ctx.fillText('Apical dome', cx, h*0.14);
  ctx.fillText('(initial cells)', cx, h*0.19);
  ctx.textAlign = 'left';
}
