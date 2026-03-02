






Here are all 29 missing complete system drawing methods, each with a dispatcher + sub-methods following the exact switch-case pattern:
// ===== PHOSPHORUS CYCLE =====
static drawPhosphorusCycle(ctx, x, y, width, height, component = 'complete') {
  ctx.save();
  ctx.translate(x, y);

  const colors = {
    rock:   { base: '#9e9e9e', light: '#cfcfcf', dark: '#616161' },
    soil:   { base: '#8d6e63', light: '#be9c91', dark: '#5d4037' },
    plant:  { base: '#2e7d32', light: '#60ad5e', dark: '#1b5e20' },
    animal: { base: '#f57c00', light: '#ffb74d', dark: '#bf360c' },
    water:  { base: '#0288d1', light: '#4fc3f7', dark: '#01579b' },
  };

  switch(component) {
    case 'complete':       this.drawCompletePhosphorusCycle(ctx, colors, width, height); break;
    case 'weathering':     this.drawPhWeathering(ctx, colors, width, height); break;
    case 'uptake':         this.drawPhUptake(ctx, colors, width, height); break;
    case 'decomposition':  this.drawPhDecomposition(ctx, colors, width, height); break;
    case 'runoff':         this.drawPhRunoff(ctx, colors, width, height); break;
    case 'sedimentation':  this.drawPhSedimentation(ctx, colors, width, height); break;
    default:               this.drawCompletePhosphorusCycle(ctx, colors, width, height);
  }

  ctx.restore();
}

static drawCompletePhosphorusCycle(ctx, colors, w, h) {
  // nodes: rock, soil, plants, animals, decomposers, water/sediment
  const nodes = [
    { id: 'rock',   x: 0.5,  y: 0.88, label: 'Rock / Minerals',   color: colors.rock },
    { id: 'soil',   x: 0.5,  y: 0.65, label: 'Soil PO₄³⁻',        color: colors.soil },
    { id: 'plant',  x: 0.22, y: 0.38, label: 'Plants',             color: colors.plant },
    { id: 'animal', x: 0.78, y: 0.38, label: 'Animals',            color: colors.animal },
    { id: 'decomp', x: 0.5,  y: 0.38, label: 'Decomposers',        color: colors.soil },
    { id: 'water',  x: 0.2,  y: 0.72, label: 'Water / Sediment',   color: colors.water },
  ];

  const arrows = [
    [0.5, 0.84, 0.5, 0.7,   'Weathering'],
    [0.5, 0.61, 0.24, 0.43, 'Root uptake'],
    [0.26, 0.34, 0.74, 0.34,'Consumption'],
    [0.76, 0.42, 0.54, 0.42,'Excretion/death'],
    [0.46, 0.42, 0.5,  0.61,'Decomposition'],
    [0.46, 0.65, 0.22, 0.7, 'Leaching/runoff'],
    [0.22, 0.76, 0.46, 0.86,'Sedimentation'],
  ];

  arrows.forEach(([x1,y1,x2,y2,lbl]) => {
    ctx.strokeStyle = 'rgba(80,80,80,0.5)';
    ctx.lineWidth = w * 0.005;
    ctx.setLineDash([w*0.012, w*0.008]);
    this.drawArrow(ctx, w*x1, h*y1, w*x2, h*y2);
    ctx.setLineDash([]);
    ctx.fillStyle = '#555';
    ctx.font = `${h*0.025}px Arial`;
    ctx.textAlign = 'center';
    ctx.fillText(lbl, w*(x1+x2)/2 + w*0.04, h*(y1+y2)/2 - h*0.015);
  });

  nodes.forEach(n => {
    this.drawOrganism(ctx, w*n.x, h*n.y, w*0.13, h*0.07, n.label, n.color);
  });

  ctx.fillStyle = '#111';
  ctx.font = `bold ${h*0.035}px Arial`;
  ctx.textAlign = 'center';
  ctx.fillText('Phosphorus Cycle', w*0.5, h*0.06);
}

static drawPhWeathering(ctx, colors, w, h) {
  // Rock breaking down with rain and acids
  const cx = w*0.5, cy = h*0.6;
  // rock
  ctx.fillStyle = colors.rock.base;
  ctx.beginPath(); ctx.roundRect(cx-w*0.15, cy-h*0.1, w*0.3, h*0.2, w*0.02); ctx.fill();
  ctx.strokeStyle = colors.rock.dark; ctx.lineWidth=w*0.005; ctx.stroke();
  ctx.fillStyle='#fff'; ctx.font=`bold ${h*0.03}px Arial`; ctx.textAlign='center';
  ctx.fillText('Rock (PO₄)', cx, cy+h*0.01);

  // crack lines
  ctx.strokeStyle = colors.rock.dark; ctx.lineWidth=w*0.004;
  [[cx-w*0.05,cy-h*0.1,cx-w*0.02,cy+h*0.1],[cx+w*0.04,cy-h*0.1,cx+w*0.06,cy+h*0.1]].forEach(([x1,y1,x2,y2])=>{
    ctx.beginPath(); ctx.moveTo(x1,y1); ctx.lineTo(x2,y2); ctx.stroke();
  });

  // rain drops
  ctx.fillStyle = colors.water ? '#4fc3f7' : '#4fc3f7';
  [[w*0.3,h*0.2],[w*0.5,h*0.15],[w*0.7,h*0.22],[w*0.4,h*0.28],[w*0.6,h*0.25]].forEach(([rx,ry])=>{
    ctx.beginPath(); ctx.ellipse(rx,ry,w*0.01,h*0.018,0,0,Math.PI*2); ctx.fill();
    ctx.strokeStyle='#0288d1'; ctx.lineWidth=1; ctx.stroke();
  });

  // arrow down to soil node
  this.drawArrow(ctx, cx, cy+h*0.12, cx, h*0.88);
  ctx.fillStyle='#333'; ctx.font=`${h*0.028}px Arial`; ctx.textAlign='center';
  ctx.fillText('→ Soluble PO₄³⁻ released to soil', cx, h*0.93);
  this.drawOrganism(ctx, cx, h*0.92, w*0.2, h*0.06, 'Soil PO₄³⁻', {base:'#8d6e63',light:'#be9c91',dark:'#5d4037'});

  ctx.fillStyle='#111'; ctx.font=`bold ${h*0.035}px Arial`; ctx.textAlign='center';
  ctx.fillText('Phosphorus: Weathering', w*0.5, h*0.08);
}

static drawPhUptake(ctx, colors, w, h) {
  // soil → root → plant
  ctx.fillStyle = '#c8a96e';
  ctx.fillRect(0, h*0.55, w, h*0.45);
  this.drawOrganism(ctx, w*0.5, h*0.7, w*0.2, h*0.07, 'Soil PO₄³⁻', colors.soil);
  // root
  ctx.strokeStyle='#5d4037'; ctx.lineWidth=w*0.008;
  ctx.beginPath(); ctx.moveTo(w*0.5,h*0.66); ctx.lineTo(w*0.5,h*0.45); ctx.stroke();
  for(let i=0;i<4;i++){
    ctx.beginPath(); ctx.moveTo(w*0.5,h*(0.52+i*0.04)); ctx.lineTo(w*(0.5+(i%2===0?0.08:-0.08)),h*(0.55+i*0.04)); ctx.stroke();
  }
  this.drawArrow(ctx, w*0.5, h*0.64, w*0.5, h*0.48);
  ctx.fillStyle='#555'; ctx.font=`${h*0.026}px Arial`; ctx.textAlign='center';
  ctx.fillText('Root uptake', w*0.62, h*0.57);
  this.drawOrganism(ctx, w*0.5, h*0.3, w*0.18, h*0.07, 'Plant tissue', colors.plant);
  ctx.fillStyle='#111'; ctx.font=`bold ${h*0.035}px Arial`; ctx.textAlign='center';
  ctx.fillText('Phosphorus: Plant Uptake', w*0.5, h*0.08);
}

static drawPhDecomposition(ctx, colors, w, h) {
  this.drawOrganism(ctx, w*0.5, h*0.2, w*0.2, h*0.07, 'Dead Organisms', colors.animal);
  this.drawArrow(ctx, w*0.5, h*0.24, w*0.5, h*0.44);
  ctx.fillStyle='#555'; ctx.font=`${h*0.026}px Arial`; ctx.textAlign='center';
  ctx.fillText('Microbial breakdown', w*0.65, h*0.34);
  this.drawOrganism(ctx, w*0.5, h*0.5, w*0.22, h*0.07, 'Decomposers', colors.soil);
  this.drawArrow(ctx, w*0.5, h*0.54, w*0.5, h*0.72);
  ctx.fillText('Mineralisation', w*0.65, h*0.63);
  this.drawOrganism(ctx, w*0.5, h*0.78, w*0.22, h*0.07, 'Soil PO₄³⁻', colors.soil);
  ctx.fillStyle='#111'; ctx.font=`bold ${h*0.035}px Arial`; ctx.textAlign='center';
  ctx.fillText('Phosphorus: Decomposition', w*0.5, h*0.08);
}

static drawPhRunoff(ctx, colors, w, h) {
  // landscape with runoff arrow to water body
  ctx.fillStyle='#81c784'; ctx.fillRect(0,h*0.3,w*0.7,h*0.5);
  ctx.fillStyle='#0288d1'; ctx.beginPath(); ctx.ellipse(w*0.82,h*0.6,w*0.14,h*0.2,0,0,Math.PI*2); ctx.fill();
  this.drawOrganism(ctx,w*0.35,h*0.42,w*0.2,h*0.07,'Soil PO₄³⁻',colors.soil);
  this.drawArrow(ctx,w*0.55,h*0.55,w*0.68,h*0.58);
  ctx.fillStyle='#0288d1'; ctx.font=`${h*0.026}px Arial`; ctx.textAlign='center';
  ctx.fillText('Runoff / Leaching',w*0.62,h*0.52);
  ctx.fillStyle='#fff'; ctx.fillText('Water body',w*0.82,h*0.61);
  ctx.fillStyle='#111'; ctx.font=`bold ${h*0.035}px Arial`; ctx.textAlign='center';
  ctx.fillText('Phosphorus: Runoff',w*0.5,h*0.12);
}

static drawPhSedimentation(ctx, colors, w, h) {
  ctx.fillStyle='#0288d1'; ctx.fillRect(0,0,w,h*0.5);
  ctx.fillStyle='#9e9e9e'; ctx.fillRect(0,h*0.5,w,h*0.5);
  this.drawOrganism(ctx,w*0.5,h*0.25,w*0.22,h*0.07,'Dissolved PO₄',colors.water||{base:'#4fc3f7',light:'#b3e5fc',dark:'#0277bd'});
  this.drawArrow(ctx,w*0.5,h*0.29,w*0.5,h*0.46);
  ctx.fillStyle='#fff'; ctx.font=`${h*0.026}px Arial`; ctx.textAlign='center';
  ctx.fillText('Sinking / Sedimentation',w*0.5,h*0.38);
  this.drawOrganism(ctx,w*0.5,h*0.72,w*0.22,h*0.07,'Rock / Sediment',colors.rock);
  this.drawArrow(ctx,w*0.5,h*0.76,w*0.5,h*0.9);
  ctx.fillStyle='#555'; ctx.font=`${h*0.026}px Arial`; ctx.textAlign='center';
  ctx.fillText('Uplift (geological time)',w*0.5,h*0.86);
  ctx.fillStyle='#111'; ctx.font=`bold ${h*0.035}px Arial`; ctx.textAlign='center';
  ctx.fillText('Phosphorus: Sedimentation',w*0.5,h*0.07);
}

// ===== SULPHUR CYCLE =====
static drawSulphurCycle(ctx, x, y, width, height, component = 'complete') {
  ctx.save();
  ctx.translate(x, y);
  const colors = {
    atmos:  { base: '#ffd600', light: '#ffff52', dark: '#c7a500' },
    soil:   { base: '#8d6e63', light: '#be9c91', dark: '#5d4037' },
    plant:  { base: '#2e7d32', light: '#60ad5e', dark: '#1b5e20' },
    ocean:  { base: '#0288d1', light: '#4fc3f7', dark: '#01579b' },
    volcano:{ base: '#e64a19', light: '#ff7043', dark: '#bf360c' },
  };
  switch(component) {
    case 'complete':    this.drawCompleteSulphurCycle(ctx, colors, width, height); break;
    case 'volcanic':    this.drawSulphurVolcanic(ctx, colors, width, height); break;
    case 'biological':  this.drawSulphurBiological(ctx, colors, width, height); break;
    case 'atmospheric': this.drawSulphurAtmospheric(ctx, colors, width, height); break;
    case 'deposition':  this.drawSulphurDeposition(ctx, colors, width, height); break;
    default:            this.drawCompleteSulphurCycle(ctx, colors, width, height);
  }
  ctx.restore();
}

static drawCompleteSulphurCycle(ctx, colors, w, h) {
  const nodes = [
    { x:0.5,  y:0.12, label:'Atmosphere SO₂/H₂S', color:colors.atmos },
    { x:0.15, y:0.45, label:'Volcanoes',            color:colors.volcano },
    { x:0.5,  y:0.45, label:'Soil SO₄²⁻',           color:colors.soil },
    { x:0.85, y:0.45, label:'Ocean SO₄²⁻',           color:colors.ocean },
    { x:0.3,  y:0.75, label:'Plants/Animals',        color:colors.plant },
    { x:0.7,  y:0.75, label:'Decomposers',           color:colors.soil },
  ];
  const arrows = [
    [0.17,0.41, 0.44,0.15, 'SO₂ volcanic emission'],
    [0.5, 0.41, 0.5, 0.18, 'Evaporation H₂S'],
    [0.5, 0.18, 0.5, 0.41, 'Acid rain / Deposition'],
    [0.5, 0.49, 0.32,0.71, 'Plant uptake'],
    [0.32,0.79, 0.66,0.79, 'Consumption/death'],
    [0.68,0.71, 0.54,0.49, 'Decomp/mineralisation'],
    [0.54,0.45, 0.82,0.45, 'Runoff to ocean'],
    [0.82,0.41, 0.54,0.16, 'Marine evaporation'],
  ];
  arrows.forEach(([x1,y1,x2,y2,lbl])=>{
    ctx.strokeStyle='rgba(80,80,80,0.45)'; ctx.lineWidth=w*0.004; ctx.setLineDash([w*0.01,w*0.007]);
    this.drawArrow(ctx,w*x1,h*y1,w*x2,h*y2);
    ctx.setLineDash([]);
    ctx.fillStyle='#444'; ctx.font=`${h*0.022}px Arial`; ctx.textAlign='center';
    ctx.fillText(lbl,w*(x1+x2)/2,h*(y1+y2)/2-h*0.012);
  });
  nodes.forEach(n=>this.drawOrganism(ctx,w*n.x,h*n.y,w*0.15,h*0.065,n.label,n.color));
  ctx.fillStyle='#111'; ctx.font=`bold ${h*0.035}px Arial`; ctx.textAlign='center';
  ctx.fillText('Sulphur Cycle',w*0.5,h*0.97);
}

static drawSulphurVolcanic(ctx, colors, w, h) {
  // volcano shape
  ctx.fillStyle=colors.volcano.dark;
  ctx.beginPath(); ctx.moveTo(w*0.5,h*0.25); ctx.lineTo(w*0.2,h*0.75); ctx.lineTo(w*0.8,h*0.75); ctx.closePath(); ctx.fill();
  ctx.fillStyle=colors.volcano.base;
  ctx.beginPath(); ctx.ellipse(w*0.5,h*0.27,w*0.07,h*0.06,0,0,Math.PI*2); ctx.fill();
  // plume
  ctx.strokeStyle=colors.atmos.base; ctx.lineWidth=w*0.015; ctx.lineCap='round';
  ctx.beginPath(); ctx.moveTo(w*0.5,h*0.22); ctx.bezierCurveTo(w*0.48,h*0.12,w*0.54,h*0.08,w*0.5,h*0.04); ctx.stroke();
  ctx.fillStyle=colors.atmos.dark; ctx.font=`${h*0.028}px Arial`; ctx.textAlign='center';
  ctx.fillText('SO₂ / H₂S emissions',w*0.5,h*0.02);
  ctx.fillStyle='#fff'; ctx.font=`${h*0.028}px Arial`; ctx.fillText('Volcano',w*0.5,h*0.56);
  ctx.fillStyle='#111'; ctx.font=`bold ${h*0.033}px Arial`; ctx.textAlign='center';
  ctx.fillText('Sulphur: Volcanic Emission',w*0.5,h*0.88);
}

static drawSulphurBiological(ctx, colors, w, h) {
  this.drawOrganism(ctx,w*0.2,h*0.35,w*0.18,h*0.07,'Plants',colors.plant);
  this.drawOrganism(ctx,w*0.5,h*0.35,w*0.18,h*0.07,'Animals',{base:'#f57c00',light:'#ffb74d',dark:'#bf360c'});
  this.drawOrganism(ctx,w*0.8,h*0.35,w*0.18,h*0.07,'Decomposers',colors.soil);
  this.drawOrganism(ctx,w*0.5,h*0.65,w*0.2,h*0.07,'Soil SO₄²⁻',colors.soil);
  this.drawOrganism(ctx,w*0.5,h*0.1,w*0.22,h*0.07,'Atmosphere H₂S',colors.atmos);
  this.drawArrow(ctx,w*0.5,h*0.14,w*0.5,h*0.31); // atmos→soil path
  this.drawArrow(ctx,w*0.22,h*0.39,w*0.46,h*0.39);
  this.drawArrow(ctx,w*0.54,h*0.39,w*0.76,h*0.39);
  this.drawArrow(ctx,w*0.8,h*0.42,w*0.56,h*0.61);
  this.drawArrow(ctx,w*0.5,h*0.61,w*0.24,h*0.42);
  this.drawArrow(ctx,w*0.5,h*0.61,w*0.5,h*0.78);
  ctx.fillStyle='#444'; ctx.font=`${h*0.026}px Arial`; ctx.textAlign='center';
  ctx.fillText('H₂S volatilisation',w*0.5,h*0.82);
  ctx.fillStyle='#111'; ctx.font=`bold ${h*0.033}px Arial`; ctx.textAlign='center';
  ctx.fillText('Sulphur: Biological Cycle',w*0.5,h*0.93);
}

static drawSulphurAtmospheric(ctx, colors, w, h) {
  // sky gradient
  const sky=ctx.createLinearGradient(0,0,0,h*0.6);
  sky.addColorStop(0,'#90caf9'); sky.addColorStop(1,'#e3f2fd');
  ctx.fillStyle=sky; ctx.fillRect(0,0,w,h*0.6);
  ctx.fillStyle='#c8e6c9'; ctx.fillRect(0,h*0.6,w,h*0.4);
  // SO2 oxidation chain
  const steps=[
    {x:0.2,y:0.15,label:'SO₂',color:colors.atmos},
    {x:0.5,y:0.15,label:'SO₃',color:colors.atmos},
    {x:0.8,y:0.15,label:'H₂SO₄\n(Acid Rain)',color:{base:'#e53935',light:'#ef9a9a',dark:'#b71c1c'}},
    {x:0.5,y:0.55,label:'Soil SO₄²⁻',color:colors.soil},
  ];
  for(let i=0;i<2;i++) this.drawArrow(ctx,w*steps[i].x+w*0.07,h*0.15,w*steps[i+1].x-w*0.07,h*0.15);
  this.drawArrow(ctx,w*0.8,h*0.22,w*0.56,h*0.52);
  ctx.strokeStyle='#1565c0'; ctx.lineWidth=w*0.004; ctx.setLineDash([w*0.01,w*0.007]);
  ctx.beginPath(); for(let i=0;i<6;i++){ctx.moveTo(w*(0.68+i*0.04),h*0.3); ctx.lineTo(w*(0.66+i*0.04),h*0.38);} ctx.stroke(); ctx.setLineDash([]);
  steps.forEach(s=>this.drawOrganism(ctx,w*s.x,h*s.y,w*0.14,h*0.07,s.label,s.color));
  ctx.fillStyle='#1565c0'; ctx.font=`${h*0.024}px Arial`; ctx.textAlign='center'; ctx.fillText('+O₂',w*0.35,h*0.12);
  ctx.fillText('+H₂O',w*0.65,h*0.12);
  ctx.fillStyle='#111'; ctx.font=`bold ${h*0.033}px Arial`; ctx.textAlign='center';
  ctx.fillText('Sulphur: Atmospheric Oxidation',w*0.5,h*0.88);
}

static drawSulphurDeposition(ctx, colors, w, h) {
  // cloud dropping acid rain
  this.drawCloud(ctx, w*0.5, h*0.18, w*0.28, h*0.12, colors.atmos);
  // rain drops
  ctx.fillStyle='#e53935';
  for(let i=0;i<8;i++) { ctx.beginPath(); ctx.ellipse(w*(0.35+i*0.04),h*(0.32+i%2*0.04),w*0.006,h*0.012,0,0,Math.PI*2); ctx.fill(); }
  ctx.fillStyle='#b71c1c'; ctx.font=`${h*0.024}px Arial`; ctx.textAlign='center';
  ctx.fillText('H₂SO₄ acid rain',w*0.5,h*0.42);
  // ground
  ctx.fillStyle='#a5d6a7'; ctx.fillRect(0,h*0.5,w,h*0.15);
  ctx.fillStyle='#8d6e63'; ctx.fillRect(0,h*0.65,w,h*0.35);
  this.drawOrganism(ctx,w*0.5,h*0.72,w*0.22,h*0.07,'Soil SO₄²⁻',colors.soil);
  this.drawArrow(ctx,w*0.5,h*0.46,w*0.5,h*0.68);
  ctx.fillStyle='#111'; ctx.font=`bold ${h*0.033}px Arial`; ctx.textAlign='center';
  ctx.fillText('Sulphur: Deposition',w*0.5,h*0.06);
}

// ===== OXYGEN CYCLE =====
static drawOxygenCycle(ctx, x, y, width, height, component = 'complete') {
  ctx.save();
  ctx.translate(x, y);
  const colors = {
    atmos:  { base: '#42a5f5', light: '#90caf9', dark: '#1565c0' },
    plant:  { base: '#2e7d32', light: '#60ad5e', dark: '#1b5e20' },
    animal: { base: '#f57c00', light: '#ffb74d', dark: '#bf360c' },
    ozone:  { base: '#7b1fa2', light: '#ce93d8', dark: '#4a148c' },
  };
  switch(component) {
    case 'complete':        this.drawCompleteOxygenCycle(ctx, colors, width, height); break;
    case 'photosynthesis':  this.drawO2Photosynthesis(ctx, colors, width, height); break;
    case 'respiration':     this.drawO2Respiration(ctx, colors, width, height); break;
    case 'ozone':           this.drawO2Ozone(ctx, colors, width, height); break;
    default:                this.drawCompleteOxygenCycle(ctx, colors, width, height);
  }
  ctx.restore();
}

static drawCompleteOxygenCycle(ctx, colors, w, h) {
  const nodes = [
    {x:0.5, y:0.12, label:'Atmospheric O₂', color:colors.atmos},
    {x:0.18,y:0.45, label:'Plants\n(Photosynthesis)', color:colors.plant},
    {x:0.82,y:0.45, label:'Animals\n(Respiration)', color:colors.animal},
    {x:0.5, y:0.78, label:'Ozone Layer (O₃)', color:colors.ozone},
  ];
  const arrows = [
    [0.5,0.18, 0.22,0.41, 'O₂ used in respiration'],
    [0.22,0.41, 0.5,0.18, 'O₂ released'],
    [0.5,0.18, 0.78,0.41, 'O₂ consumed'],
    [0.78,0.41,0.5,0.18,  'CO₂ released'],
    [0.5,0.18, 0.5,0.74,  'UV forms O₃'],
  ];
  arrows.forEach(([x1,y1,x2,y2,lbl],i)=>{
    const offset = i%2===0 ? -w*0.04 : w*0.04;
    ctx.strokeStyle='rgba(66,165,245,0.5)'; ctx.lineWidth=w*0.005; ctx.setLineDash([w*0.01,w*0.007]);
    this.drawArrow(ctx,w*x1+offset,h*y1,w*x2+offset,h*y2);
    ctx.setLineDash([]);
    ctx.fillStyle='#333'; ctx.font=`${h*0.022}px Arial`; ctx.textAlign='center';
    ctx.fillText(lbl,w*(x1+x2)/2+offset+w*0.06,h*(y1+y2)/2);
  });
  nodes.forEach(n=>this.drawOrganism(ctx,w*n.x,h*n.y,w*0.16,h*0.07,n.label,n.color));
  ctx.fillStyle='#111'; ctx.font=`bold ${h*0.035}px Arial`; ctx.textAlign='center';
  ctx.fillText('Oxygen Cycle',w*0.5,h*0.96);
}

static drawO2Photosynthesis(ctx, colors, w, h) {
  // Sun
  ctx.fillStyle='#ffeb3b';
  ctx.beginPath(); ctx.arc(w*0.15,h*0.18,w*0.07,0,Math.PI*2); ctx.fill();
  for(let i=0;i<8;i++){ const a=i*Math.PI/4; ctx.strokeStyle='#f9a825'; ctx.lineWidth=w*0.004; ctx.beginPath(); ctx.moveTo(w*0.15+Math.cos(a)*w*0.08,h*0.18+Math.sin(a)*h*0.06); ctx.lineTo(w*0.15+Math.cos(a)*w*0.11,h*0.18+Math.sin(a)*h*0.09); ctx.stroke(); }
  this.drawOrganism(ctx,w*0.5,h*0.45,w*0.22,h*0.08,'Plant / Algae',colors.plant);
  // reaction
  ctx.fillStyle='#333'; ctx.font=`${h*0.026}px Arial`; ctx.textAlign='center';
  ctx.fillText('6CO₂ + 6H₂O + light energy →',w*0.5,h*0.65);
  ctx.fillText('C₆H₁₂O₆ + 6O₂',w*0.5,h*0.72);
  this.drawArrow(ctx,w*0.15,h*0.22,w*0.42,h*0.42);
  ctx.fillStyle='#1b5e20'; ctx.font=`${h*0.024}px Arial`;
  ctx.fillText('Light energy',w*0.26,h*0.3);
  // O2 arrow going up
  this.drawArrow(ctx,w*0.5,h*0.4,w*0.5,h*0.15);
  this.drawOrganism(ctx,w*0.5,h*0.1,w*0.2,h*0.06,'O₂ released',colors.atmos);
  ctx.fillStyle='#111'; ctx.font=`bold ${h*0.033}px Arial`; ctx.textAlign='center';
  ctx.fillText('O₂ from Photosynthesis',w*0.5,h*0.88);
}

static drawO2Respiration(ctx, colors, w, h) {
  this.drawOrganism(ctx,w*0.5,h*0.18,w*0.2,h*0.07,'Atmospheric O₂',colors.atmos);
  this.drawArrow(ctx,w*0.5,h*0.22,w*0.5,h*0.4);
  this.drawOrganism(ctx,w*0.5,h*0.46,w*0.2,h*0.07,'Animal / Cell',colors.animal);
  ctx.fillStyle='#555'; ctx.font=`${h*0.026}px Arial`; ctx.textAlign='center';
  ctx.fillText('Aerobic respiration',w*0.5,h*0.32);
  ctx.fillText('C₆H₁₂O₆ + 6O₂ → 6CO₂ + 6H₂O + ATP',w*0.5,h*0.62);
  this.drawArrow(ctx,w*0.5,h*0.5,w*0.3,h*0.72);
  this.drawArrow(ctx,w*0.5,h*0.5,w*0.7,h*0.72);
  this.drawOrganism(ctx,w*0.28,h*0.78,w*0.18,h*0.07,'CO₂',{base:'#546e7a',light:'#90a4ae',dark:'#263238'});
  this.drawOrganism(ctx,w*0.72,h*0.78,w*0.18,h*0.07,'H₂O',{base:'#0288d1',light:'#4fc3f7',dark:'#01579b'});
  ctx.fillStyle='#111'; ctx.font=`bold ${h*0.033}px Arial`; ctx.textAlign='center';
  ctx.fillText('O₂ in Respiration',w*0.5,h*0.93);
}

static drawO2Ozone(ctx, colors, w, h) {
  // UV + O2 → O3 cycle
  const sky=ctx.createLinearGradient(0,0,0,h);
  sky.addColorStop(0,'#1a237e'); sky.addColorStop(0.4,'#7b1fa2'); sky.addColorStop(1,'#42a5f5');
  ctx.fillStyle=sky; ctx.fillRect(0,0,w,h);
  // ozone layer band
  ctx.fillStyle='rgba(123,31,162,0.35)';
  ctx.fillRect(0,h*0.3,w,h*0.18);
  ctx.strokeStyle='rgba(206,147,216,0.8)'; ctx.lineWidth=w*0.006;
  ctx.strokeRect(0,h*0.3,w,h*0.18);
  ctx.fillStyle='#fff'; ctx.font=`bold ${h*0.028}px Arial`; ctx.textAlign='center';
  ctx.fillText('Ozone Layer (O₃)',w*0.5,h*0.4);
  // reactions
  ctx.font=`${h*0.026}px Arial`;
  ctx.fillText('O₂ + UV → 2O•',w*0.5,h*0.2);
  ctx.fillText('O• + O₂ → O₃',w*0.5,h*0.26);
  ctx.fillText('O₃ + UV → O₂ + O•  (absorption)',w*0.5,h*0.56);
  // UV arrow
  ctx.strokeStyle='#ffeb3b'; ctx.lineWidth=w*0.006;
  ctx.beginPath(); ctx.moveTo(w*0.15,h*0.05); ctx.lineTo(w*0.15,h*0.3); ctx.stroke();
  ctx.fillStyle='#ffeb3b'; ctx.fillText('UV radiation',w*0.15,h*0.03);
  // blocked UV below
  ctx.strokeStyle='rgba(255,235,59,0.3)'; ctx.lineWidth=w*0.003; ctx.setLineDash([w*0.008,w*0.008]);
  ctx.beginPath(); ctx.moveTo(w*0.15,h*0.48); ctx.lineTo(w*0.15,h*0.7); ctx.stroke(); ctx.setLineDash([]);
  ctx.fillStyle='rgba(255,255,255,0.6)'; ctx.font=`${h*0.022}px Arial`; ctx.fillText('UV blocked',w*0.15,h*0.72);
  ctx.fillStyle='#fff'; ctx.font=`bold ${h*0.03}px Arial`; ctx.textAlign='center';
  ctx.fillText('Ozone Layer Formation & UV Absorption',w*0.5,h*0.88);
}

// ===== ENERGY FLOW =====
static drawEnergyFlow(ctx, x, y, width, height, component = 'complete') {
  ctx.save();
  ctx.translate(x, y);
  const colors = {
    producer: { base: '#2e7d32', light: '#60ad5e', dark: '#1b5e20' },
    primary:  { base: '#f57c00', light: '#ffb74d', dark: '#bf360c' },
    secondary:{ base: '#1565c0', light: '#64b5f6', dark: '#0d47a1' },
    tertiary: { base: '#6a1b9a', light: '#ce93d8', dark: '#4a148c' },
    heat:     { base: '#e53935', light: '#ef9a9a', dark: '#b71c1c' },
  };
  switch(component) {
    case 'complete':  this.drawCompleteEnergyFlow(ctx, colors, width, height); break;
    case 'producers': this.drawEnergyProducers(ctx, colors, width, height); break;
    case 'primary':   this.drawEnergyPrimary(ctx, colors, width, height); break;
    case 'secondary': this.drawEnergySecondary(ctx, colors, width, height); break;
    case 'heat-loss': this.drawEnergyHeatLoss(ctx, colors, width, height); break;
    default:          this.drawCompleteEnergyFlow(ctx, colors, width, height);
  }
  ctx.restore();
}

static drawCompleteEnergyFlow(ctx, colors, w, h) {
  // Sankey-style flow with kJ values
  const levels = [
    {y:0.82, label:'Producers',          kJ:'10,000 kJ', color:colors.producer, barW:0.7},
    {y:0.64, label:'Primary Consumers',  kJ:'1,000 kJ',  color:colors.primary,  barW:0.49},
    {y:0.46, label:'Secondary Consumers',kJ:'100 kJ',    color:colors.secondary, barW:0.28},
    {y:0.28, label:'Tertiary Consumers', kJ:'10 kJ',     color:colors.tertiary,  barW:0.07},
  ];
  const heatLoss = ['9,000 kJ','900 kJ','90 kJ'];

  // solar input arrow
  ctx.strokeStyle='#ffeb3b'; ctx.lineWidth=w*0.01;
  this.drawArrow(ctx,w*0.08,h*0.95,w*0.15,h*0.85);
  ctx.fillStyle='#f9a825'; ctx.font=`${h*0.026}px Arial`; ctx.textAlign='center';
  ctx.fillText('Solar 100,000 kJ',w*0.06,h*0.97);

  levels.forEach((lv,i)=>{
    const x0 = w*(0.5-lv.barW/2), barH = h*0.1;
    const g=ctx.createLinearGradient(x0,0,x0+w*lv.barW,0);
    g.addColorStop(0,lv.color.light); g.addColorStop(1,lv.color.base);
    ctx.fillStyle=g;
    ctx.fillRect(x0, h*lv.y, w*lv.barW, barH);
    ctx.strokeStyle=lv.color.dark; ctx.lineWidth=w*0.004; ctx.strokeRect(x0,h*lv.y,w*lv.barW,barH);
    ctx.fillStyle='#fff'; ctx.font=`bold ${h*0.028}px Arial`; ctx.textAlign='center';
    ctx.fillText(`${lv.label}  ${lv.kJ}`, w*0.5, h*lv.y+barH*0.62);
    // heat loss arrows
    if(i<3){
      ctx.strokeStyle=colors.heat.base; ctx.lineWidth=w*0.005;
      this.drawArrow(ctx,w*(0.5+lv.barW/2),h*(lv.y+0.05),w*0.92,h*(lv.y+0.05));
      ctx.fillStyle=colors.heat.dark; ctx.font=`${h*0.024}px Arial`;
      ctx.fillText(`Heat: ${heatLoss[i]}`,w*0.88,h*(lv.y+0.03));
    }
  });

  ctx.fillStyle='#111'; ctx.font=`bold ${h*0.033}px Arial`; ctx.textAlign='center';
  ctx.fillText('Energy Flow Through Trophic Levels',w*0.5,h*0.07);
  ctx.font=`${h*0.025}px Arial`; ctx.fillStyle='#555';
  ctx.fillText('~10% efficiency at each transfer',w*0.5,h*0.13);
}

static drawEnergyProducers(ctx, colors, w, h) {
  const barH=h*0.14;
  ctx.fillStyle=colors.producer.base;
  ctx.fillRect(w*0.1,h*0.35,w*0.8,barH);
  ctx.strokeStyle=colors.producer.dark; ctx.lineWidth=w*0.005; ctx.strokeRect(w*0.1,h*0.35,w*0.8,barH);
  ctx.fillStyle='#fff'; ctx.font=`bold ${h*0.035}px Arial`; ctx.textAlign='center';
  ctx.fillText('Producers — 10,000 kJ / m² / yr',w*0.5,h*0.43);
  this.drawArrow(ctx,w*0.5,h*0.5,w*0.5,h*0.68);
  ctx.fillStyle='#555'; ctx.font=`${h*0.027}px Arial`; ctx.fillText('→ 10% to Primary Consumers',w*0.5,h*0.78);
  // sun
  ctx.fillStyle='#ffeb3b'; ctx.beginPath(); ctx.arc(w*0.15,h*0.2,w*0.07,0,Math.PI*2); ctx.fill();
  this.drawArrow(ctx,w*0.2,h*0.22,w*0.35,h*0.36);
  ctx.fillStyle='#111'; ctx.font=`bold ${h*0.033}px Arial`; ctx.textAlign='center';
  ctx.fillText('Energy: Producers',w*0.5,h*0.08);
}

static drawEnergyPrimary(ctx, colors, w, h) {
  this.drawOrganism(ctx,w*0.5,h*0.2,w*0.3,h*0.08,'Producers: 10,000 kJ',colors.producer);
  this.drawArrow(ctx,w*0.5,h*0.25,w*0.5,h*0.42);
  ctx.fillStyle=colors.heat.base; ctx.font=`${h*0.025}px Arial`; ctx.textAlign='center';
  ctx.fillText('9,000 kJ lost as heat',w*0.78,h*0.33);
  this.drawArrow(ctx,w*0.55,h*0.3,w*0.72,h*0.3);
  this.drawOrganism(ctx,w*0.5,h*0.48,w*0.3,h*0.08,'Primary Consumers: 1,000 kJ',colors.primary);
  ctx.fillStyle='#111'; ctx.font=`bold ${h*0.033}px Arial`; ctx.textAlign='center';
  ctx.fillText('Energy: Primary Consumer Level',w*0.5,h*0.08);
}

static drawEnergySecondary(ctx, colors, w, h) {
  this.drawOrganism(ctx,w*0.5,h*0.2,w*0.32,h*0.08,'Primary Consumers: 1,000 kJ',colors.primary);
  this.drawArrow(ctx,w*0.5,h*0.25,w*0.5,h*0.42);
  ctx.fillStyle=colors.heat.base; ctx.font=`${h*0.025}px Arial`; ctx.textAlign='center';
  ctx.fillText('900 kJ lost as heat',w*0.77,h*0.33);
  this.drawArrow(ctx,w*0.54,h*0.3,w*0.7,h*0.3);
  this.drawOrganism(ctx,w*0.5,h*0.48,w*0.32,h*0.08,'Secondary Consumers: 100 kJ',colors.secondary);
  ctx.fillStyle='#111'; ctx.font=`bold ${h*0.033}px Arial`; ctx.textAlign='center';
  ctx.fillText('Energy: Secondary Consumer Level',w*0.5,h*0.08);
}

static drawEnergyHeatLoss(ctx, colors, w, h) {
  // show heat radiating from each level
  const lvls=[
    {y:0.22,label:'Producers 10,000 kJ',heat:'9,000',color:colors.producer},
    {y:0.44,label:'Primary 1,000 kJ',heat:'900',color:colors.primary},
    {y:0.66,label:'Secondary 100 kJ',heat:'90',color:colors.secondary},
  ];
  lvls.forEach(lv=>{
    this.drawOrganism(ctx,w*0.38,h*lv.y,w*0.28,h*0.07,lv.label,lv.color);
    // heat arrows
    for(let i=0;i<3;i++){
      ctx.strokeStyle=colors.heat.base; ctx.lineWidth=w*0.005;
      ctx.beginPath(); ctx.moveTo(w*0.52,h*lv.y); ctx.lineTo(w*(0.58+i*0.07),h*(lv.y-0.08)); ctx.stroke();
    }
    ctx.fillStyle=colors.heat.dark; ctx.font=`${h*0.024}px Arial`; ctx.textAlign='left';
    ctx.fillText(`${lv.heat} kJ heat`,w*0.56,h*(lv.y-0.1));
  });
  ctx.fillStyle='#111'; ctx.font=`bold ${h*0.033}px Arial`; ctx.textAlign='center';
  ctx.fillText('Energy: Heat Loss at Each Level',w*0.5,h*0.08);
}

// ===== TERRESTRIAL FOOD WEB =====
static drawTerrestrialFoodWeb(ctx, x, y, width, height, component = 'complete') {
  ctx.save();
  ctx.translate(x, y);
  const colors = {
    producer:  { base: '#2e7d32', light: '#60ad5e', dark: '#1b5e20' },
    herbivore: { base: '#f57c00', light: '#ffb74d', dark: '#bf360c' },
    carnivore: { base: '#1565c0', light: '#64b5f6', dark: '#0d47a1' },
    apex:      { base: '#6a1b9a', light: '#ce93d8', dark: '#4a148c' },
    decomp:    { base: '#4e342e', light: '#a1887f', dark: '#3e2723' },
  };
  switch(component) {
    case 'complete':  this.drawCompleteTerrestrialWeb(ctx, colors, width, height); break;
    case 'producers': this.drawTerrestrialProducers(ctx, colors, width, height); break;
    case 'herbivores':this.drawTerrestrialHerbivores(ctx, colors, width, height); break;
    case 'carnivores':this.drawTerrestrialCarnivores(ctx, colors, width, height); break;
    case 'apex':      this.drawTerrestrialApex(ctx, colors, width, height); break;
    default:          this.drawCompleteTerrestrialWeb(ctx, colors, width, height);
  }
  ctx.restore();
}

static drawCompleteTerrestrialWeb(ctx, colors, w, h) {
  // Specific species positions
  const species = [
    {id:'grass',  x:0.15, y:0.82, label:'Grass',    color:colors.producer},
    {id:'oak',    x:0.4,  y:0.82, label:'Oak Tree',  color:colors.producer},
    {id:'berry',  x:0.65, y:0.82, label:'Berries',   color:colors.producer},
    {id:'seeds',  x:0.88, y:0.82, label:'Seeds',     color:colors.producer},
    {id:'rabbit', x:0.1,  y:0.58, label:'Rabbit',    color:colors.herbivore},
    {id:'deer',   x:0.35, y:0.58, label:'Deer',      color:colors.herbivore},
    {id:'mouse',  x:0.6,  y:0.58, label:'Mouse',     color:colors.herbivore},
    {id:'bird',   x:0.85, y:0.58, label:'Songbird',  color:colors.herbivore},
    {id:'fox',    x:0.22, y:0.34, label:'Fox',        color:colors.carnivore},
    {id:'snake',  x:0.5,  y:0.34, label:'Snake',     color:colors.carnivore},
    {id:'owl',    x:0.78, y:0.34, label:'Owl',        color:colors.carnivore},
    {id:'wolf',   x:0.38, y:0.12, label:'Wolf',       color:colors.apex},
    {id:'hawk',   x:0.65, y:0.12, label:'Hawk',       color:colors.apex},
  ];

  // feeding links (prey→predator)
  const links = [
    ['grass','rabbit'],['grass','deer'],['oak','deer'],['oak','mouse'],
    ['berry','bird'],['seeds','bird'],['seeds','mouse'],
    ['rabbit','fox'],['rabbit','snake'],['rabbit','owl'],
    ['mouse','snake'],['mouse','owl'],['mouse','fox'],
    ['bird','owl'],['bird','hawk'],
    ['deer','wolf'],['fox','wolf'],['rabbit','hawk'],
  ];

  ctx.lineWidth = w*0.003;
  links.forEach(([prey,pred])=>{
    const from = species.find(s=>s.id===prey);
    const to   = species.find(s=>s.id===pred);
    ctx.strokeStyle='rgba(100,100,100,0.4)';
    ctx.setLineDash([w*0.008,w*0.006]);
    this.drawArrow(ctx,w*from.x,h*from.y,w*to.x,h*to.y);
    ctx.setLineDash([]);
  });

  species.forEach(s=>this.drawOrganism(ctx,w*s.x,h*s.y,w*0.1,h*0.065,s.label,s.color));

  // level labels
  [['Producers',0.88],['Herbivores',0.64],['Carnivores',0.4],['Apex',0.18]].forEach(([lbl,y])=>{
    ctx.fillStyle='rgba(0,0,0,0.12)'; ctx.fillRect(0,h*(y-0.05),w*0.08,h*0.09);
    ctx.fillStyle='#222'; ctx.font=`bold ${h*0.022}px Arial`; ctx.textAlign='center';
    ctx.fillText(lbl,w*0.04,h*y);
  });

  ctx.fillStyle='#111'; ctx.font=`bold ${h*0.033}px Arial`; ctx.textAlign='center';
  ctx.fillText('Terrestrial Food Web',w*0.5,h*0.04);
}

static drawTerrestrialProducers(ctx, colors, w, h) {
  const producers = [
    {x:0.18,y:0.5,label:'Grass'},
    {x:0.38,y:0.5,label:'Oak Tree'},
    {x:0.58,y:0.5,label:'Berries'},
    {x:0.78,y:0.5,label:'Seeds/Nuts'},
  ];
  producers.forEach(p=>this.drawOrganism(ctx,w*p.x,h*p.y,w*0.15,h*0.08,p.label,colors.producer));
  ctx.fillStyle='#111'; ctx.font=`bold ${h*0.033}px Arial`; ctx.textAlign='center';
  ctx.fillText('Terrestrial Producers',w*0.5,h*0.15);
  ctx.font=`${h*0.026}px Arial`; ctx.fillStyle='#444';
  ctx.fillText('Convert solar energy via photosynthesis',w*0.5,h*0.85);
}

static drawTerrestrialHerbivores(ctx, colors, w, h) {
  ['Rabbit','Deer','Mouse','Songbird'].forEach((name,i)=>{
    this.drawOrganism(ctx,w*(0.15+i*0.23),h*0.5,w*0.18,h*0.08,name,colors.herbivore);
  });
  ctx.fillStyle='#111'; ctx.font=`bold ${h*0.033}px Arial`; ctx.textAlign='center';
  ctx.fillText('Terrestrial Herbivores (Primary Consumers)',w*0.5,h*0.15);
}

static drawTerrestrialCarnivores(ctx, colors, w, h) {
  ['Fox','Snake','Owl'].forEach((name,i)=>{
    this.drawOrganism(ctx,w*(0.2+i*0.3),h*0.5,w*0.2,h*0.08,name,colors.carnivore);
  });
  ctx.fillStyle='#111'; ctx.font=`bold ${h*0.033}px Arial`; ctx.textAlign='center';
  ctx.fillText('Terrestrial Carnivores (Secondary Consumers)',w*0.5,h*0.15);
}

static drawTerrestrialApex(ctx, colors, w, h) {
  ['Wolf','Hawk'].forEach((name,i)=>{
    this.drawOrganism(ctx,w*(0.3+i*0.4),h*0.5,w*0.22,h*0.08,name,colors.apex);
  });
  ctx.fillStyle='#111'; ctx.font=`bold ${h*0.033}px Arial`; ctx.textAlign='center';
  ctx.fillText('Apex Predators',w*0.5,h*0.2);
  ctx.font=`${h*0.026}px Arial`; ctx.fillStyle='#444';
  ctx.fillText('No natural predators — top of the food web',w*0.5,h*0.82);
}

// ===== AQUATIC FOOD WEB =====
static drawAquaticFoodWeb(ctx, x, y, width, height, component = 'complete') {
  ctx.save();
  ctx.translate(x, y);
  const colors = {
    phyto:  { base: '#2e7d32', light: '#60ad5e', dark: '#1b5e20' },
    zoo:    { base: '#0288d1', light: '#4fc3f7', dark: '#01579b' },
    small:  { base: '#f57c00', light: '#ffb74d', dark: '#bf360c' },
    large:  { base: '#1565c0', light: '#64b5f6', dark: '#0d47a1' },
    apex:   { base: '#6a1b9a', light: '#ce93d8', dark: '#4a148c' },
    decomp: { base: '#4e342e', light: '#a1887f', dark: '#3e2723' },
  };
  switch(component) {
    case 'complete':     this.drawCompleteAquaticWeb(ctx, colors, width, height); break;
    case 'phytoplankton':this.drawAquaticPhyto(ctx, colors, width, height); break;
    case 'zooplankton':  this.drawAquaticZoo(ctx, colors, width, height); break;
    case 'fish':         this.drawAquaticFish(ctx, colors, width, height); break;
    case 'apex':         this.drawAquaticApex(ctx, colors, width, height); break;
    default:             this.drawCompleteAquaticWeb(ctx, colors, width, height);
  }
  ctx.restore();
}

static drawCompleteAquaticWeb(ctx, colors, w, h) {
  // ocean background
  const bg=ctx.createLinearGradient(0,0,0,h);
  bg.addColorStop(0,'#b3e5fc'); bg.addColorStop(1,'#01579b');
  ctx.fillStyle=bg; ctx.fillRect(0,0,w,h);

  const species = [
    {id:'phyto', x:0.2,  y:0.85, label:'Phytoplankton', color:colors.phyto},
    {id:'algae', x:0.6,  y:0.85, label:'Algae/Kelp',    color:colors.phyto},
    {id:'zoo',   x:0.12, y:0.65, label:'Zooplankton',   color:colors.zoo},
    {id:'shrimp',x:0.42, y:0.65, label:'Krill/Shrimp',  color:colors.zoo},
    {id:'crab',  x:0.72, y:0.65, label:'Crab',           color:colors.small},
    {id:'small', x:0.22, y:0.44, label:'Small Fish',     color:colors.small},
    {id:'squid', x:0.55, y:0.44, label:'Squid',          color:colors.small},
    {id:'seal',  x:0.82, y:0.44, label:'Seal',           color:colors.large},
    {id:'tuna',  x:0.3,  y:0.22, label:'Tuna',           color:colors.large},
    {id:'shark', x:0.6,  y:0.12, label:'Shark',          color:colors.apex},
    {id:'orca',  x:0.85, y:0.22, label:'Orca',           color:colors.apex},
  ];

  const links=[
    ['phyto','zoo'],['phyto','shrimp'],['algae','shrimp'],['algae','crab'],
    ['zoo','small'],['shrimp','small'],['shrimp','squid'],
    ['small','tuna'],['squid','tuna'],['crab','seal'],['small','seal'],
    ['tuna','shark'],['seal','orca'],['tuna','orca'],
  ];

  links.forEach(([a,b])=>{
    const from=species.find(s=>s.id===a), to=species.find(s=>s.id===b);
    ctx.strokeStyle='rgba(255,255,255,0.45)'; ctx.lineWidth=w*0.003; ctx.setLineDash([w*0.008,w*0.006]);
    this.drawArrow(ctx,w*from.x,h*from.y,w*to.x,h*to.y);
    ctx.setLineDash([]);
  });

  species.forEach(s=>this.drawOrganism(ctx,w*s.x,h*s.y,w*0.12,h*0.065,s.label,s.color));

  ctx.fillStyle='rgba(255,255,255,0.9)'; ctx.font=`bold ${h*0.035}px Arial`; ctx.textAlign='center';
  ctx.fillText('Aquatic / Marine Food Web',w*0.5,h*0.04);
}

static drawAquaticPhyto(ctx, colors, w, h) {
  const bg=ctx.createLinearGradient(0,0,0,h); bg.addColorStop(0,'#b3e5fc'); bg.addColorStop(1,'#0288d1');
  ctx.fillStyle=bg; ctx.fillRect(0,0,w,h);
  ['Diatoms','Dinoflagellates','Cyanobacteria','Green Algae'].forEach((name,i)=>{
    this.drawOrganism(ctx,w*(0.15+i*0.23),h*0.5,w*0.18,h*0.08,name,colors.phyto);
  });
  ctx.fillStyle='#fff'; ctx.font=`bold ${h*0.033}px Arial`; ctx.textAlign='center';
  ctx.fillText('Aquatic Producers (Phytoplankton)',w*0.5,h*0.15);
}

static drawAquaticZoo(ctx, colors, w, h) {
  const bg=ctx.createLinearGradient(0,0,0,h); bg.addColorStop(0,'#b3e5fc'); bg.addColorStop(1,'#0288d1');
  ctx.fillStyle=bg; ctx.fillRect(0,0,w,h);
  ['Copepods','Krill','Amphipods','Jellyfish'].forEach((name,i)=>{
    this.drawOrganism(ctx,w*(0.13+i*0.24),h*0.5,w*0.18,h*0.08,name,colors.zoo);
  });
  ctx.fillStyle='#fff'; ctx.font=`bold ${h*0.033}px Arial`; ctx.textAlign='center';
  ctx.fillText('Zooplankton (Primary Consumers)',w*0.5,h*0.15);
}

static drawAquaticFish(ctx, colors, w, h) {
  const bg=ctx.createLinearGradient(0,0,0,h); bg.addColorStop(0,'#b3e5fc'); bg.addColorStop(1,'#0288d1');
  ctx.fillStyle=bg; ctx.fillRect(0,0,w,h);
  ['Herring','Mackerel','Squid','Tuna'].forEach((name,i)=>{
    this.drawOrganism(ctx,w*(0.13+i*0.24),h*0.5,w*0.18,h*0.08,name,colors.small);
  });
  ctx.fillStyle='#fff'; ctx.font=`bold ${h*0.033}px Arial`; ctx.textAlign='center';
  ctx.fillText('Fish (Secondary Consumers)',w*0.5,h*0.15);
}

static drawAquaticApex(ctx, colors, w, h) {
  const bg=ctx.createLinearGradient(0,0,0,h); bg.addColorStop(0,'#0288d1'); bg.addColorStop(1,'#01579b');
  ctx.fillStyle=bg; ctx.fillRect(0,0,w,h);
  ['Great White Shark','Orca','Dolphin'].forEach((name,i)=>{
    this.drawOrganism(ctx,w*(0.2+i*0.3),h*0.5,w*0.22,h*0.08,name,colors.apex);
  });
  ctx.fillStyle='#fff'; ctx.font=`bold ${h*0.033}px Arial`; ctx.textAlign='center';
  ctx.fillText('Apex Marine Predators',w*0.5,h*0.15);
}

// ===== SOIL FOOD WEB =====
static drawSoilFoodWeb(ctx, x, y, width, height, component = 'complete') {
  ctx.save();
  ctx.translate(x, y);
  const colors = {
    bacteria: { base: '#fdd835', light: '#ffee58', dark: '#f9a825' },
    fungi:    { base: '#8d6e63', light: '#be9c91', dark: '#5d4037' },
    nematode: { base: '#e53935', light: '#ef9a9a', dark: '#b71c1c' },
    mite:     { base: '#6a1b9a', light: '#ce93d8', dark: '#4a148c' },
    worm:     { base: '#e65100', light: '#ff8a50', dark: '#bf360c' },
  };
  switch(component) {
    case 'complete':  this.drawCompleteSoilWeb(ctx, colors, width, height); break;
    case 'bacteria':  this.drawSoilBacteria(ctx, colors, width, height); break;
    case 'fungi':     this.drawSoilFungi(ctx, colors, width, height); break;
    case 'nematodes': this.drawSoilNematodes(ctx, colors, width, height); break;
    case 'mites':     this.drawSoilMites(ctx, colors, width, height); break;
    case 'worms':     this.drawSoilWorms(ctx, colors, width, height); break;
    default:          this.drawCompleteSoilWeb(ctx, colors, width, height);
  }
  ctx.restore();
}

static drawCompleteSoilWeb(ctx, colors, w, h) {
  ctx.fillStyle='#5d4037'; ctx.fillRect(0,0,w,h);
  // soil texture
  ctx.fillStyle='rgba(255,255,255,0.05)';
  for(let i=0;i<60;i++){ ctx.beginPath(); ctx.arc(Math.random()*w,Math.random()*h,w*0.008,0,Math.PI*2); ctx.fill(); }

  const nodes = [
    {id:'dom',     x:0.5,  y:0.88, label:'Dead Organic Matter', color:{base:'#3e2723',light:'#6d4c41',dark:'#1b0000'}},
    {id:'bacteria',x:0.2,  y:0.68, label:'Bacteria',            color:colors.bacteria},
    {id:'fungi',   x:0.5,  y:0.68, label:'Fungi',               color:colors.fungi},
    {id:'protozoa',x:0.8,  y:0.68, label:'Protozoa',            color:{base:'#0288d1',light:'#4fc3f7',dark:'#01579b'}},
    {id:'nematode',x:0.25, y:0.44, label:'Nematodes',           color:colors.nematode},
    {id:'mite',    x:0.6,  y:0.44, label:'Mites',               color:colors.mite},
    {id:'worm',    x:0.85, y:0.44, label:'Earthworms',          color:colors.worm},
    {id:'beetle',  x:0.4,  y:0.2,  label:'Beetles',             color:{base:'#1565c0',light:'#64b5f6',dark:'#0d47a1'}},
    {id:'centipede',x:0.75,y:0.2,  label:'Centipedes',          color:{base:'#2e7d32',light:'#60ad5e',dark:'#1b5e20'}},
  ];
  const links=[
    ['dom','bacteria'],['dom','fungi'],['dom','worm'],
    ['bacteria','protozoa'],['bacteria','nematode'],
    ['fungi','nematode'],['fungi','mite'],
    ['protozoa','nematode'],
    ['nematode','beetle'],['mite','beetle'],['worm','centipede'],['beetle','centipede'],
  ];
  links.forEach(([a,b])=>{
    const from=nodes.find(n=>n.id===a),to=nodes.find(n=>n.id===b);
    ctx.strokeStyle='rgba(255,255,200,0.3)'; ctx.lineWidth=w*0.003; ctx.setLineDash([w*0.008,w*0.006]);
    this.drawArrow(ctx,w*from.x,h*from.y,w*to.x,h*to.y);
    ctx.setLineDash([]);
  });
  nodes.forEach(n=>this.drawOrganism(ctx,w*n.x,h*n.y,w*0.14,h*0.065,n.label,n.color));
  ctx.fillStyle='rgba(255,255,255,0.9)'; ctx.font=`bold ${h*0.033}px Arial`; ctx.textAlign='center';
  ctx.fillText('Soil / Detrital Food Web',w*0.5,h*0.06);
}

static drawSoilBacteria(ctx, colors, w, h) {
  ctx.fillStyle='#4e342e'; ctx.fillRect(0,0,w,h);
  ctx.fillStyle='rgba(255,255,255,0.06)'; for(let i=0;i<40;i++){ctx.beginPath();ctx.arc(Math.random()*w,Math.random()*h,w*0.007,0,Math.PI*2);ctx.fill();}
  // bacterial colony clusters
  for(let c=0;c<4;c++){
    const cx=w*(0.18+c*0.22),cy=h*0.5;
    for(let i=0;i<12;i++){
      const bx=cx+(Math.random()-0.5)*w*0.1, by=cy+(Math.random()-0.5)*h*0.12;
      ctx.fillStyle=colors.bacteria.base; ctx.beginPath(); ctx.arc(bx,by,w*0.012,0,Math.PI*2); ctx.fill();
    }
  }
  ctx.fillStyle='rgba(255,255,255,0.9)'; ctx.font=`bold ${h*0.033}px Arial`; ctx.textAlign='center';
  ctx.fillText('Soil Bacteria — Decomposers',w*0.5,h*0.15);
  ctx.font=`${h*0.026}px Arial`; ctx.fillText('Break down organic matter → release nutrients',w*0.5,h*0.82);
}

static drawSoilFungi(ctx, colors, w, h) {
  ctx.fillStyle='#4e342e'; ctx.fillRect(0,0,w,h);
  // hyphal network
  ctx.strokeStyle=colors.fungi.light; ctx.lineWidth=w*0.004;
  for(let i=0;i<12;i++){
    ctx.beginPath(); ctx.moveTo(Math.random()*w,Math.random()*h);
    for(let j=0;j<4;j++) ctx.lineTo(Math.random()*w,Math.random()*h);
    ctx.stroke();
  }
  ctx.fillStyle='rgba(255,255,255,0.85)'; ctx.font=`bold ${h*0.033}px Arial`; ctx.textAlign='center';
  ctx.fillText('Soil Fungi — Hyphal Network',w*0.5,h*0.1);
  ctx.font=`${h*0.026}px Arial`; ctx.fillText('Digest cellulose & lignin; form mycorrhizae',w*0.5,h*0.88);
}

static drawSoilNematodes(ctx, colors, w, h) {
  ctx.fillStyle='#4e342e'; ctx.fillRect(0,0,w,h);
  for(let i=0;i<5;i++){
    const cx=w*(0.15+i*0.17), cy=h*0.5;
    ctx.strokeStyle=colors.nematode.base; ctx.lineWidth=h*0.018; ctx.lineCap='round';
    ctx.beginPath(); ctx.moveTo(cx-w*0.05,cy);
    for(let j=0;j<4;j++) ctx.quadraticCurveTo(cx-w*0.05+j*w*0.03,(cy+(j%2===0?h*0.06:-h*0.06)),cx-w*0.05+(j+1)*w*0.03,cy);
    ctx.stroke();
  }
  ctx.fillStyle='rgba(255,255,255,0.85)'; ctx.font=`bold ${h*0.033}px Arial`; ctx.textAlign='center';
  ctx.fillText('Soil Nematodes',w*0.5,h*0.15);
  ctx.font=`${h*0.026}px Arial`; ctx.fillText('Feed on bacteria, fungi & plant roots',w*0.5,h*0.82);
}

static drawSoilMites(ctx, colors, w, h) {
  ctx.fillStyle='#4e342e'; ctx.fillRect(0,0,w,h);
  for(let i=0;i<6;i++){
    const mx=w*(0.14+i*0.15),my=h*0.5;
    ctx.fillStyle=colors.mite.base; ctx.beginPath(); ctx.ellipse(mx,my,w*0.035,h*0.04,0,0,Math.PI*2); ctx.fill();
    ctx.fillStyle=colors.mite.dark;
    for(let l=0;l<4;l++){ const a=l*Math.PI/2+Math.PI/4; ctx.beginPath(); ctx.moveTo(mx,my); ctx.lineTo(mx+Math.cos(a)*w*0.05,my+Math.sin(a)*h*0.055); ctx.strokeStyle=colors.mite.dark; ctx.lineWidth=w*0.004; ctx.stroke(); }
  }
  ctx.fillStyle='rgba(255,255,255,0.85)'; ctx.font=`bold ${h*0.033}px Arial`; ctx.textAlign='center';
  ctx.fillText('Soil Mites',w*0.5,h*0.15);
  ctx.font=`${h*0.026}px Arial`; ctx.fillText('Shred litter; feed on fungi, nematodes & bacteria',w*0.5,h*0.82);
}

static drawSoilWorms(ctx, colors, w, h) {
  ctx.fillStyle='#4e342e'; ctx.fillRect(0,0,w,h);
  for(let i=0;i<3;i++){
    const sx=w*0.15,sy=h*(0.3+i*0.22);
    ctx.strokeStyle=colors.worm.base; ctx.lineWidth=h*0.028; ctx.lineCap='round';
    ctx.beginPath(); ctx.moveTo(sx,sy);
    for(let j=0;j<6;j++) ctx.quadraticCurveTo(sx+j*w*0.12,(sy+(j%2===0?h*0.06:-h*0.06)),sx+(j+1)*w*0.12,sy);
    ctx.stroke();
  }
  ctx.fillStyle='rgba(255,255,255,0.85)'; ctx.font=`bold ${h*0.033}px Arial`; ctx.textAlign='center';
  ctx.fillText('Earthworms',w*0.5,h*0.08);
  ctx.font=`${h*0.026}px Arial`; ctx.fillText('Ingest soil & organic matter; aerate & enrich soil',w*0.5,h*0.92);
}

// ===== MARINE CARBON PUMP =====
static drawMarineCarbonPump(ctx, x, y, width, height, component = 'complete') {
  ctx.save();
  ctx.translate(x, y);
  const colors = {
    surface: { base: '#0288d1', light: '#4fc3f7', dark: '#01579b' },
    deep:    { base: '#01579b', light: '#0288d1', dark: '#002f6c' },
    phyto:   { base: '#2e7d32', light: '#60ad5e', dark: '#1b5e20' },
    carbon:  { base: '#546e7a', light: '#90a4ae', dark: '#263238' },
  };
  switch(component) {
    case 'complete':      this.drawCompleteMarinePump(ctx, colors, width, height); break;
    case 'production':    this.drawPumpProduction(ctx, colors, width, height); break;
    case 'sinking':       this.drawPumpSinking(ctx, colors, width, height); break;
    case 'sequestration': this.drawPumpSequestration(ctx, colors, width, height); break;
    default:              this.drawCompleteMarinePump(ctx, colors, width, height);
  }
  ctx.restore();
}

static drawCompleteMarinePump(ctx, colors, w, h) {
  const bg=ctx.createLinearGradient(0,0,0,h);
  bg.addColorStop(0,'#b3e5fc'); bg.addColorStop(0.15,'#0288d1'); bg.addColorStop(1,'#002f6c');
  ctx.fillStyle=bg; ctx.fillRect(0,0,w,h);

  // zone labels
  ctx.fillStyle='rgba(255,255,255,0.15)'; ctx.fillRect(0,0,w,h*0.18);
  ctx.fillStyle='rgba(255,255,255,0.08)'; ctx.fillRect(0,h*0.18,w,h*0.45);
  ctx.strokeStyle='rgba(255,255,255,0.3)'; ctx.lineWidth=w*0.003; ctx.setLineDash([w*0.01,w*0.008]);
  ctx.beginPath(); ctx.moveTo(0,h*0.18); ctx.lineTo(w,h*0.18); ctx.stroke();
  ctx.beginPath(); ctx.moveTo(0,h*0.63); ctx.lineTo(w,h*0.63); ctx.stroke();
  ctx.setLineDash([]);

  ctx.fillStyle='rgba(255,255,255,0.7)'; ctx.font=`${h*0.025}px Arial`; ctx.textAlign='right';
  ctx.fillText('Euphotic zone',w*0.97,h*0.1);
  ctx.fillText('Mesopelagic',w*0.97,h*0.42);
  ctx.fillText('Deep ocean',w*0.97,h*0.8);

  // phytoplankton
  const pColor={base:'rgba(46,125,50,0.85)',light:'#a5d6a7',dark:'#1b5e20'};
  for(let i=0;i<6;i++) this.drawOrganism(ctx,w*(0.12+i*0.15),h*0.1,w*0.1,h*0.055,i===0?'Phyto-\nplankton':'',pColor);
  ctx.fillStyle='rgba(255,255,255,0.85)'; ctx.font=`${h*0.026}px Arial`; ctx.textAlign='center';
  ctx.fillText('Phytoplankton fix CO₂ → organic carbon',w*0.5,h*0.22);

  // CO2 uptake arrow from atmosphere
  ctx.strokeStyle='#a5d6a7'; ctx.lineWidth=w*0.006;
  this.drawArrow(ctx,w*0.5,h*0.0,w*0.5,h*0.07);
  ctx.fillStyle='rgba(255,255,255,0.7)'; ctx.font=`${h*0.024}px Arial`;
  ctx.fillText('CO₂ from atmosphere',w*0.5,h*0.01);

  // death → sinking particles
  const steps=[[0.25,0.25,'Death & aggregation'],[0.25,0.48,'Sinking\nparticles'],[0.25,0.72,'Deep\nstorage']];
  steps.forEach(([fx,fy,lbl])=>{
    ctx.fillStyle='rgba(200,200,100,0.6)'; ctx.beginPath(); ctx.arc(w*fx,h*fy,w*0.025,0,Math.PI*2); ctx.fill();
    ctx.fillStyle='rgba(255,255,255,0.75)'; ctx.font=`${h*0.023}px Arial`; ctx.textAlign='left';
    ctx.fillText(lbl,w*(fx+0.04),h*fy+h*0.01);
  });
  // sinking arrow
  ctx.strokeStyle='rgba(200,200,100,0.6)'; ctx.lineWidth=w*0.005;
  this.drawArrow(ctx,w*0.25,h*0.29,w*0.25,h*0.82);

  // remineralisation
  this.drawArrow(ctx,w*0.65,h*0.82,w*0.65,h*0.22);
  ctx.fillStyle='rgba(255,200,100,0.85)'; ctx.font=`${h*0.023}px Arial`; ctx.textAlign='left';
  ctx.fillText('Remineralisation',w*0.67,h*0.55);
  ctx.fillText('(centuries)',w*0.67,h*0.59);

  ctx.fillStyle='rgba(255,255,255,0.95)'; ctx.font=`bold ${h*0.033}px Arial`; ctx.textAlign='center';
  ctx.fillText('Marine Biological Carbon Pump',w*0.5,h*0.96);
}

static drawPumpProduction(ctx, colors, w, h) {
  const bg=ctx.createLinearGradient(0,0,0,h); bg.addColorStop(0,'#b3e5fc'); bg.addColorStop(1,'#0288d1');
  ctx.fillStyle=bg; ctx.fillRect(0,0,w,h);
  // sun
  ctx.fillStyle='#ffeb3b'; ctx.beginPath(); ctx.arc(w*0.15,h*0.15,w*0.06,0,Math.PI*2); ctx.fill();
  this.drawArrow(ctx,w*0.5,h*0.02,w*0.5,h*0.18);
  ctx.fillStyle='rgba(255,255,255,0.85)'; ctx.font=`${h*0.024}px Arial`; ctx.textAlign='center';
  ctx.fillText('CO₂ + H₂O + sunlight → organic C + O₂',w*0.5,h*0.32);
  this.drawOrganism(ctx,w*0.5,h*0.55,w*0.3,h*0.08,'Phytoplankton\n(producers)',colors.phyto);
  ctx.fillStyle='rgba(255,255,255,0.9)'; ctx.font=`bold ${h*0.033}px Arial`; ctx.textAlign='center';
  ctx.fillText('Biological Pump: Primary Production',w*0.5,h*0.88);
}

static drawPumpSinking(ctx, colors, w, h) {
  const bg=ctx.createLinearGradient(0,0,0,h); bg.addColorStop(0,'#0288d1'); bg.addColorStop(1,'#002f6c');
  ctx.fillStyle=bg; ctx.fillRect(0,0,w,h);
  for(let i=0;i<8;i++){
    const px=w*(0.15+i*0.1), speed=0.1+i*0.08;
    ctx.fillStyle='rgba(200,200,80,0.6)'; ctx.beginPath(); ctx.arc(px,h*(0.12+speed*0.6),w*0.02,0,Math.PI*2); ctx.fill();
    ctx.strokeStyle='rgba(200,200,80,0.3)'; ctx.lineWidth=w*0.002;
    ctx.beginPath(); ctx.moveTo(px,h*0.1); ctx.lineTo(px,h*(0.1+speed)); ctx.stroke();
  }
  ctx.fillStyle='rgba(255,255,255,0.85)'; ctx.font=`bold ${h*0.033}px Arial`; ctx.textAlign='center';
  ctx.fillText('Biological Pump: Particle Sinking',w*0.5,h*0.06);
  ctx.font=`${h*0.026}px Arial`; ctx.fillText('Fecal pellets, dead cells, aggregates sink to deep',w*0.5,h*0.92);
}

static drawPumpSequestration(ctx, colors, w, h) {
  const bg=ctx.createLinearGradient(0,0,0,h); bg.addColorStop(0,'#002f6c'); bg.addColorStop(1,'#000a1a');
  ctx.fillStyle=bg; ctx.fillRect(0,0,w,h);
  ctx.fillStyle='#5d4037'; ctx.fillRect(0,h*0.75,w,h*0.25);
  ctx.fillStyle='rgba(200,200,80,0.5)';
  for(let i=0;i<15;i++) { ctx.beginPath(); ctx.arc(Math.random()*w,h*0.77+Math.random()*h*0.2,w*0.012,0,Math.PI*2); ctx.fill(); }
  ctx.fillStyle='rgba(255,255,255,0.85)'; ctx.font=`bold ${h*0.033}px Arial`; ctx.textAlign='center';
  ctx.fillText('Carbon Sequestration in Deep Ocean',w*0.5,h*0.1);
  ctx.font=`${h*0.026}px Arial`;
  ctx.fillText('Organic carbon stored in sediments',w*0.5,h*0.82);
  ctx.fillText('for hundreds to thousands of years',w*0.5,h*0.87);
}

// ===== GREENHOUSE EFFECT =====
static drawGreenhouseEffect(ctx, x, y, width, height, component = 'complete') {
  ctx.save();
  ctx.translate(x, y);
  const colors = {
    sun:   { base: '#ffeb3b', light: '#fff9c4', dark: '#f9a825' },
    gas:   { base: '#81c784', light: '#c8e6c9', dark: '#388e3c' },
    earth: { base: '#1565c0', light: '#64b5f6', dark: '#0d47a1' },
    heat:  { base: '#e53935', light: '#ef9a9a', dark: '#b71c1c' },
  };
  switch(component) {
    case 'complete':    this.drawCompleteGreenhouseEffect(ctx, colors, width, height); break;
    case 'solar-in':    this.drawGreenhouseSolarIn(ctx, colors, width, height); break;
    case 'absorption':  this.drawGreenhouseAbsorption(ctx, colors, width, height); break;
    case 're-emission': this.drawGreenhouseReEmission(ctx, colors, width, height); break;
    case 'enhanced':    this.drawGreenhouseEnhanced(ctx, colors, width, height); break;
    default:            this.drawCompleteGreenhouseEffect(ctx, colors, width, height);
  }
  ctx.restore();
}

static drawCompleteGreenhouseEffect(ctx, colors, w, h) {
  // sky
  const sky=ctx.createLinearGradient(0,0,0,h*0.75);
  sky.addColorStop(0,'#0d47a1'); sky.addColorStop(1,'#b3e5fc');
  ctx.fillStyle=sky; ctx.fillRect(0,0,w,h*0.75);
  // earth surface
  ctx.fillStyle='#2e7d32'; ctx.fillRect(0,h*0.75,w,h*0.25);

  // greenhouse gas layer band
  ctx.fillStyle='rgba(129,199,132,0.25)';
  ctx.fillRect(0,h*0.3,w,h*0.18);
  ctx.strokeStyle='rgba(56,142,60,0.6)'; ctx.lineWidth=w*0.004;
  ctx.strokeRect(0,h*0.3,w,h*0.18);
  ctx.fillStyle='rgba(56,142,60,0.9)'; ctx.font=`bold ${h*0.027}px Arial`; ctx.textAlign='center';
  ctx.fillText('Greenhouse Gas Layer (CO₂, CH₄, H₂O, N₂O)',w*0.5,h*0.41);

  // sun
  ctx.fillStyle='#ffeb3b'; ctx.beginPath(); ctx.arc(w*0.88,h*0.08,w*0.07,0,Math.PI*2); ctx.fill();

  // incoming solar radiation (yellow)
  ctx.strokeStyle='#f9a825'; ctx.lineWidth=w*0.006;
  [[0.88,0.15,0.5,0.75],[0.88,0.15,0.2,0.75],[0.88,0.15,0.8,0.75]].forEach(([x1,y1,x2,y2])=>{
    this.drawArrow(ctx,w*x1,h*y1,w*x2,h*y2);
  });
  ctx.fillStyle='#f9a825'; ctx.font=`${h*0.024}px Arial`;
  ctx.fillText('Solar radiation (shortwave)',w*0.3,h*0.22);

  // upward IR from earth (orange)
  ctx.strokeStyle='#e65100'; ctx.lineWidth=w*0.005; ctx.setLineDash([w*0.01,w*0.007]);
  [[0.35,0.75,0.35,0.32],[0.65,0.75,0.65,0.32]].forEach(([x1,y1,x2,y2])=>{
    this.drawArrow(ctx,w*x1,h*y1,w*x2,h*y2);
  });
  ctx.setLineDash([]);
  ctx.fillStyle='#e65100'; ctx.fillText('IR from earth surface',w*0.12,h*0.6);

  // re-emitted heat back to earth (red)
  ctx.strokeStyle=colors.heat.base; ctx.lineWidth=w*0.007;
  [[0.35,0.48,0.35,0.73],[0.65,0.48,0.65,0.73],[0.5,0.48,0.5,0.73]].forEach(([x1,y1,x2,y2])=>{
    this.drawArrow(ctx,w*x1,h*y1,w*x2,h*y2);
  });
  ctx.fillStyle=colors.heat.base; ctx.font=`bold ${h*0.026}px Arial`;
  ctx.fillText('Re-emitted heat → warming',w*0.5,h*0.68);

  ctx.fillStyle='#fff'; ctx.font=`bold ${h*0.033}px Arial`; ctx.textAlign='center';
  ctx.fillText('The Greenhouse Effect',w*0.5,h*0.04);
}

static drawGreenhouseSolarIn(ctx, colors, w, h) {
  const sky=ctx.createLinearGradient(0,0,0,h); sky.addColorStop(0,'#0d47a1'); sky.addColorStop(1,'#b3e5fc');
  ctx.fillStyle=sky; ctx.fillRect(0,0,w,h*0.85); ctx.fillStyle='#2e7d32'; ctx.fillRect(0,h*0.85,w,h*0.15);
  ctx.fillStyle='#ffeb3b'; ctx.beginPath(); ctx.arc(w*0.5,h*0.08,w*0.07,0,Math.PI*2); ctx.fill();
  ctx.strokeStyle='#f9a825'; ctx.lineWidth=w*0.008;
  this.drawArrow(ctx,w*0.5,h*0.16,w*0.5,h*0.82);
  ctx.fillStyle='#fff'; ctx.font=`${h*0.028}px Arial`; ctx.textAlign='center';
  ctx.fillText('Short-wave solar radiation reaches Earth surface',w*0.5,h*0.55);
  ctx.font=`bold ${h*0.033}px Arial`; ctx.fillText('Greenhouse Effect: Solar Input',w*0.5,h*0.96);
}

static drawGreenhouseAbsorption(ctx, colors, w, h) {
  const sky=ctx.createLinearGradient(0,0,0,h); sky.addColorStop(0,'#0d47a1'); sky.addColorStop(1,'#b3e5fc');
  ctx.fillStyle=sky; ctx.fillRect(0,0,w,h*0.75); ctx.fillStyle='#2e7d32'; ctx.fillRect(0,h*0.75,w,h*0.25);
  // GHG molecules
  ['CO₂','CH₄','N₂O','H₂O'].forEach((g,i)=>{
    this.drawOrganism(ctx,w*(0.18+i*0.22),h*0.4,w*0.16,h*0.07,g,colors.gas);
  });
  ctx.strokeStyle='#e65100'; ctx.lineWidth=w*0.005; ctx.setLineDash([w*0.01,w*0.007]);
  this.drawArrow(ctx,w*0.5,h*0.72,w*0.5,h*0.48);
  ctx.setLineDash([]);
  ctx.fillStyle='#fff'; ctx.font=`${h*0.026}px Arial`; ctx.textAlign='center';
  ctx.fillText('IR radiation absorbed by greenhouse gases',w*0.5,h*0.6);
  ctx.font=`bold ${h*0.033}px Arial`; ctx.fillText('Greenhouse Effect: Absorption',w*0.5,h*0.95);
}

static drawGreenhouseReEmission(ctx, colors, w, h) {
  const sky=ctx.createLinearGradient(0,0,0,h); sky.addColorStop(0,'#0d47a1'); sky.addColorStop(1,'#b3e5fc');
  ctx.fillStyle=sky; ctx.fillRect(0,0,w,h*0.75); ctx.fillStyle='#2e7d32'; ctx.fillRect(0,h*0.75,w,h*0.25);
  ctx.fillStyle='rgba(129,199,132,0.3)'; ctx.fillRect(0,h*0.32,w,h*0.16);
  ctx.fillStyle='rgba(56,142,60,0.9)'; ctx.font=`${h*0.026}px Arial`; ctx.textAlign='center';
  ctx.fillText('GHG Layer',w*0.5,h*0.41);
  // downward re-emission arrows
  ctx.strokeStyle=colors.heat.base; ctx.lineWidth=w*0.007;
  for(let i=0;i<4;i++) this.drawArrow(ctx,w*(0.2+i*0.2),h*0.48,w*(0.2+i*0.2),h*0.73);
  ctx.fillStyle=colors.heat.base; ctx.font=`bold ${h*0.028}px Arial`;
  ctx.fillText('Heat re-emitted towards Earth → warming',w*0.5,h*0.68);
  ctx.fillStyle='#fff'; ctx.font=`bold ${h*0.033}px Arial`; ctx.textAlign='center';
  ctx.fillText('Greenhouse Effect: Re-emission',w*0.5,h*0.12);
}

static drawGreenhouseEnhanced(ctx, colors, w, h) {
  const sky=ctx.createLinearGradient(0,0,0,h); sky.addColorStop(0,'#b71c1c'); sky.addColorStop(0.5,'#ff7043'); sky.addColorStop(1,'#ffcc80');
  ctx.fillStyle=sky; ctx.fillRect(0,0,w,h*0.78); ctx.fillStyle='#4e342e'; ctx.fillRect(0,h*0.78,w,h*0.22);
  ctx.fillStyle='rgba(229,57,53,0.35)'; ctx.fillRect(0,h*0.28,w,h*0.22);
  ctx.fillStyle='rgba(255,255,255,0.85)'; ctx.font=`bold ${h*0.027}px Arial`; ctx.textAlign='center';
  ctx.fillText('Thickened GHG Layer',w*0.5,h*0.4);
  ctx.font=`${h*0.024}px Arial`;
  ctx.fillText('↑ CO₂, CH₄ from fossil fuels, deforestation,',w*0.5,h*0.16);
  ctx.fillText('agriculture → more heat trapped',w*0.5,h*0.22);
  // temp increase thermometer
  ctx.fillStyle='#e53935'; ctx.fillRect(w*0.06,h*0.5,w*0.04,h*0.25);
  ctx.fillStyle='#fff'; ctx.strokeStyle='#e53935'; ctx.lineWidth=w*0.004;
  ctx.strokeRect(w*0.06,h*0.5,w*0.04,h*0.25);
  ctx.fillStyle='rgba(255,255,255,0.85)'; ctx.font=`${h*0.025}px Arial`; ctx.textAlign='left';
  ctx.fillText('+1.5–4°C',w*0.12,h*0.62);
  ctx.font=`bold ${h*0.033}px Arial`; ctx.textAlign='center';
  ctx.fillText('Enhanced Greenhouse Effect',w*0.5,h*0.06);
}

// ===== OZONE LAYER =====
static drawOzoneLayer(ctx, x, y, width, height, component = 'complete') {
  ctx.save();
  ctx.translate(x, y);
  const colors = {
    ozone:  { base: '#7b1fa2', light: '#ce93d8', dark: '#4a148c' },
    uv:     { base: '#ffeb3b', light: '#fff9c4', dark: '#f9a825' },
    cfc:    { base: '#e53935', light: '#ef9a9a', dark: '#b71c1c' },
    oxygen: { base: '#0288d1', light: '#4fc3f7', dark: '#01579b' },
  };
  switch(component) {
    case 'complete':   this.drawCompleteOzoneLayer(ctx, colors, width, height); break;
    case 'formation':  this.drawOzoneFormation(ctx, colors, width, height); break;
    case 'destruction':this.drawOzoneDestruction(ctx, colors, width, height); break;
    case 'hole':       this.drawOzoneHole(ctx, colors, width, height); break;
    default:           this.drawCompleteOzoneLayer(ctx, colors, width, height);
  }
  ctx.restore();
}

static drawCompleteOzoneLayer(ctx, colors, w, h) {
  const bg=ctx.createLinearGradient(0,0,0,h);
  bg.addColorStop(0,'#1a237e'); bg.addColorStop(0.35,'#7b1fa2'); bg.addColorStop(0.65,'#42a5f5'); bg.addColorStop(1,'#c8e6c9');
  ctx.fillStyle=bg; ctx.fillRect(0,0,w,h);

  // layer zones
  const zones=[
    {y:0,   h:0.25,label:'Thermosphere',   alpha:0.0},
    {y:0.25,h:0.2, label:'Stratosphere\n(Ozone Layer 15–35 km)', alpha:0.25},
    {y:0.45,h:0.3, label:'Troposphere',    alpha:0.0},
    {y:0.75,h:0.25,label:'Earth Surface',  alpha:0.15},
  ];
  zones.forEach(z=>{
    ctx.fillStyle=`rgba(255,255,255,${z.alpha})`; ctx.fillRect(0,h*z.y,w,h*z.h);
    ctx.fillStyle='rgba(255,255,255,0.65)'; ctx.font=`${h*0.024}px Arial`; ctx.textAlign='left';
    ctx.fillText(z.label,w*0.02,h*(z.y+z.h*0.5));
  });
  ctx.strokeStyle='rgba(206,147,216,0.6)'; ctx.lineWidth=w*0.004; ctx.setLineDash([w*0.01,w*0.008]);
  [h*0.25,h*0.45].forEach(ly=>{ ctx.beginPath(); ctx.moveTo(0,ly); ctx.lineTo(w,ly); ctx.stroke(); });
  ctx.setLineDash([]);

  // UV arrow in, blocked
  ctx.strokeStyle='#ffeb3b'; ctx.lineWidth=w*0.007;
  this.drawArrow(ctx,w*0.5,h*0.02,w*0.5,h*0.26);
  ctx.fillStyle='#ffeb3b'; ctx.font=`${h*0.024}px Arial`; ctx.textAlign='center'; ctx.fillText('UV-B / UV-C',w*0.5,h*0.01);
  // blocked
  ctx.strokeStyle='rgba(255,235,59,0.25)'; ctx.lineWidth=w*0.005; ctx.setLineDash([w*0.01,w*0.007]);
  ctx.beginPath(); ctx.moveTo(w*0.5,h*0.44); ctx.lineTo(w*0.5,h*0.72); ctx.stroke(); ctx.setLineDash([]);
  ctx.fillStyle='rgba(255,235,59,0.5)'; ctx.fillText('UV largely blocked',w*0.5,h*0.58);

  // O2→O3 formation
  ctx.fillStyle='rgba(255,255,255,0.8)'; ctx.font=`${h*0.022}px Arial`;
  ctx.fillText('O₂ + UV → 2O•',w*0.75,h*0.3);
  ctx.fillText('O• + O₂ → O₃',w*0.75,h*0.35);
  // CFC destruction
  ctx.fillStyle='rgba(255,100,100,0.9)';
  ctx.fillText('CFCs + UV → Cl•',w*0.15,h*0.3);
  ctx.fillText('Cl• + O₃ → ClO + O₂',w*0.15,h*0.35);

  ctx.fillStyle='rgba(255,255,255,0.95)'; ctx.font=`bold ${h*0.033}px Arial`; ctx.textAlign='center';
  ctx.fillText('Stratospheric Ozone Layer',w*0.5,h*0.95);
}

static drawOzoneFormation(ctx, colors, w, h) {
  const bg=ctx.createLinearGradient(0,0,0,h); bg.addColorStop(0,'#1a237e'); bg.addColorStop(1,'#7b1fa2');
  ctx.fillStyle=bg; ctx.fillRect(0,0,w,h);
  const steps=[
    {x:0.2,y:0.25,label:'O₂',color:colors.oxygen},
    {x:0.5,y:0.25,label:'2 O• atoms',color:colors.oxygen},
    {x:0.8,y:0.5, label:'O₃ (Ozone)',color:colors.ozone},
  ];
  this.drawArrow(ctx,w*0.27,h*0.25,w*0.43,h*0.25);
  this.drawArrow(ctx,w*0.57,h*0.28,w*0.76,h*0.47);
  ctx.strokeStyle='#ffeb3b'; ctx.lineWidth=w*0.006;
  ctx.beginPath(); ctx.moveTo(w*0.5,h*0.02); ctx.lineTo(w*0.3,h*0.2); ctx.stroke();
  ctx.fillStyle='#ffeb3b'; ctx.font=`${h*0.024}px Arial`; ctx.textAlign='center';
  ctx.fillText('UV photon',w*0.3,h*0.12);
  ctx.fillText('+ O₂',w*0.68,h*0.38);
  steps.forEach(s=>this.drawOrganism(ctx,w*s.x,h*s.y,w*0.2,h*0.08,s.label,s.color));
  ctx.fillStyle='rgba(255,255,255,0.9)'; ctx.font=`bold ${h*0.03}px Arial`; ctx.textAlign='center';
  ctx.fillText('Ozone Formation in Stratosphere',w*0.5,h*0.88);
}

static drawOzoneDestruction(ctx, colors, w, h) {
  const bg=ctx.createLinearGradient(0,0,0,h); bg.addColorStop(0,'#1a237e'); bg.addColorStop(1,'#7b1fa2');
  ctx.fillStyle=bg; ctx.fillRect(0,0,w,h);
  this.drawOrganism(ctx,w*0.2,h*0.25,w*0.18,h*0.07,'CFC',colors.cfc);
  this.drawArrow(ctx,w*0.29,h*0.25,w*0.44,h*0.25);
  this.drawOrganism(ctx,w*0.5,h*0.25,w*0.18,h*0.07,'Cl• radical',colors.cfc);
  this.drawArrow(ctx,w*0.59,h*0.25,w*0.74,h*0.35);
  this.drawOrganism(ctx,w*0.8,h*0.25,w*0.18,h*0.07,'O₃',colors.ozone);
  this.drawArrow(ctx,w*0.8,h*0.32,w*0.65,h*0.55);
  this.drawOrganism(ctx,w*0.6,h*0.6,w*0.2,h*0.08,'O₂ + ClO',colors.oxygen);
  ctx.strokeStyle='#ffeb3b'; ctx.lineWidth=w*0.005; ctx.beginPath(); ctx.moveTo(w*0.2,h*0.05); ctx.lineTo(w*0.2,h*0.18); ctx.stroke();
  ctx.fillStyle='#ffeb3b'; ctx.font=`${h*0.024}px Arial`; ctx.textAlign='center'; ctx.fillText('UV',w*0.2,h*0.04);
  ctx.fillStyle='rgba(255,255,255,0.85)'; ctx.font=`${h*0.024}px Arial`;
  ctx.fillText('CFC + UV → Cl• (chlorine radical)',w*0.5,h*0.75);
  ctx.fillText('Cl• + O₃ → ClO + O₂ (destroys ozone)',w*0.5,h*0.81);
  ctx.font=`bold ${h*0.03}px Arial`; ctx.fillText('Ozone Destruction by CFCs',w*0.5,h*0.92);
}

static drawOzoneHole(ctx, colors, w, h) {
  const bg=ctx.createLinearGradient(0,0,0,h); bg.addColorStop(0,'#1a237e'); bg.addColorStop(1,'#7b1fa2');
  ctx.fillStyle=bg; ctx.fillRect(0,0,w,h);
  // Antarctic ozone hole representation
  ctx.fillStyle='rgba(123,31,162,0.5)'; ctx.beginPath(); ctx.ellipse(w*0.5,h*0.5,w*0.38,h*0.35,0,0,Math.PI*2); ctx.fill();
  ctx.strokeStyle='rgba(206,147,216,0.8)'; ctx.lineWidth=w*0.006; ctx.stroke();
  // hole
  ctx.fillStyle='rgba(0,0,0,0.55)'; ctx.beginPath(); ctx.ellipse(w*0.5,h*0.5,w*0.18,h*0.15,0,0,Math.PI*2); ctx.fill();
  ctx.fillStyle='rgba(255,235,59,0.8)'; ctx.font=`bold ${h*0.028}px Arial`; ctx.textAlign='center';
  ctx.fillText('Ozone Hole',w*0.5,h*0.5);
  ctx.fillStyle='rgba(255,255,255,0.8)'; ctx.font=`${h*0.024}px Arial`;
  ctx.fillText('Thin ozone region over Antarctica',w*0.5,h*0.72);
  ctx.fillText('Caused by CFC accumulation in stratosphere',w*0.5,h*0.78);
  ctx.font=`bold ${h*0.03}px Arial`; ctx.fillText('Antarctic Ozone Hole',w*0.5,h*0.1);
}

// ===== ECOLOGICAL SUCCESSION =====
static drawSuccession(ctx, x, y, width, height, component = 'complete') {
  ctx.save();
  ctx.translate(x, y);
  const colors = {
    primary:   { base: '#78909c', light: '#b0bec5', dark: '#546e7a' },
    pioneer:   { base: '#aed581', light: '#dcedc8', dark: '#7cb342' },
    early:     { base: '#4caf50', light: '#a5d6a7', dark: '#388e3c' },
    mid:       { base: '#2e7d32', light: '#60ad5e', dark: '#1b5e20' },
    climax:    { base: '#1b5e20', light: '#388e3c', dark: '#003300' },
    secondary: { base: '#f57c00', light: '#ffb74d', dark: '#bf360c' },
  };
  switch(component) {
    case 'complete':  this.drawCompleteSuccession(ctx, colors, width, height); break;
    case 'primary':   this.drawPrimarySuccession(ctx, colors, width, height); break;
    case 'secondary': this.drawSecondarySuccession(ctx, colors, width, height); break;
    case 'climax':    this.drawClimaxCommunity(ctx, colors, width, height); break;
    default:          this.drawCompleteSuccession(ctx, colors, width, height);
  }
  ctx.restore();
}

static drawCompleteSuccession(ctx, colors, w, h) {
  // primary succession stages across top half
  const primaryStages=[
    {x:0.1, label:'Bare Rock',       color:colors.primary, icon:'rock'},
    {x:0.3, label:'Lichens/Moss',    color:colors.pioneer, icon:'moss'},
    {x:0.5, label:'Herbs/Grasses',   color:colors.early,   icon:'grass'},
    {x:0.7, label:'Shrubs',          color:colors.mid,     icon:'shrub'},
    {x:0.9, label:'Climax Forest',   color:colors.climax,  icon:'forest'},
  ];
  // secondary succession stages across bottom half
  const secondaryStages=[
    {x:0.1, label:'Disturbance\n(Fire/Clear)',color:colors.secondary,icon:'fire'},
    {x:0.3, label:'Annuals',         color:colors.pioneer, icon:'annual'},
    {x:0.5, label:'Perennials',      color:colors.early,   icon:'perennial'},
    {x:0.7, label:'Shrubs',          color:colors.mid,     icon:'shrub'},
    {x:0.9, label:'Climax Forest',   color:colors.climax,  icon:'forest'},
  ];

  ctx.fillStyle='#e8f5e9'; ctx.fillRect(0,0,w,h*0.48);
  ctx.fillStyle='#fff8e1'; ctx.fillRect(0,h*0.52,w,h*0.48);

  ctx.fillStyle='#1b5e20'; ctx.font=`bold ${h*0.028}px Arial`; ctx.textAlign='left';
  ctx.fillText('Primary Succession',w*0.01,h*0.05);
  ctx.fillStyle='#bf360c'; ctx.fillText('Secondary Succession',w*0.01,h*0.57);

  primaryStages.forEach((s,i)=>{
    this.drawOrganism(ctx,w*s.x,h*0.28,w*0.14,h*0.08,s.label,s.color);
    if(i<primaryStages.length-1){ ctx.strokeStyle='#555'; ctx.lineWidth=w*0.004; this.drawArrow(ctx,w*(s.x+0.07),h*0.28,w*(primaryStages[i+1].x-0.07),h*0.28); }
  });

  secondaryStages.forEach((s,i)=>{
    this.drawOrganism(ctx,w*s.x,h*0.8,w*0.14,h*0.08,s.label,s.color);
    if(i<secondaryStages.length-1){ ctx.strokeStyle='#555'; ctx.lineWidth=w*0.004; this.drawArrow(ctx,w*(s.x+0.07),h*0.8,w*(secondaryStages[i+1].x-0.07),h*0.8); }
  });

  // time arrows
  ctx.strokeStyle='#333'; ctx.lineWidth=w*0.005;
  this.drawArrow(ctx,w*0.02,h*0.44,w*0.98,h*0.44);
  this.drawArrow(ctx,w*0.02,h*0.96,w*0.98,h*0.96);
  ctx.fillStyle='#333'; ctx.font=`${h*0.024}px Arial`; ctx.textAlign='center';
  ctx.fillText('← Time (hundreds to thousands of years) →',w*0.5,h*0.44);
  ctx.fillText('← Time (decades to centuries) →',w*0.5,h*0.96);

  ctx.fillStyle='#111'; ctx.font=`bold ${h*0.033}px Arial`; ctx.textAlign='center';
  ctx.fillText('Ecological Succession',w*0.5,h*0.005);
}

static drawPrimarySuccession(ctx, colors, w, h) {
  const stages=[
    {x:0.1, label:'Bare Rock',     color:colors.primary},
    {x:0.28,label:'Pioneer\nLichens',color:colors.pioneer},
    {x:0.46,label:'Mosses/\nHerbs',color:colors.early},
    {x:0.64,label:'Shrubs',        color:colors.mid},
    {x:0.82,label:'Climax\nForest',color:colors.climax},
  ];
  stages.forEach((s,i)=>{
    this.drawOrganism(ctx,w*s.x,h*0.5,w*0.14,h*0.09,s.label,s.color);
    if(i<stages.length-1) this.drawArrow(ctx,w*(s.x+0.08),h*0.5,w*(stages[i+1].x-0.06),h*0.5);
  });
  ctx.fillStyle='#333'; ctx.font=`${h*0.024}px Arial`; ctx.textAlign='center';
  ctx.fillText('Starts on bare, lifeless substrate (rock, sand, lava)',w*0.5,h*0.75);
  ctx.fillStyle='#111'; ctx.font=`bold ${h*0.033}px Arial`; ctx.textAlign='center';
  ctx.fillText('Primary Succession',w*0.5,h*0.15);
}

static drawSecondarySuccession(ctx, colors, w, h) {
  const stages=[
    {x:0.1, label:'Disturbance',   color:colors.secondary},
    {x:0.28,label:'Annual\nWeeds', color:colors.pioneer},
    {x:0.46,label:'Perennial\nGrasses',color:colors.early},
    {x:0.64,label:'Shrubs/\nSapling',color:colors.mid},
    {x:0.82,label:'Climax\nForest',color:colors.climax},
  ];
  stages.forEach((s,i)=>{
    this.drawOrganism(ctx,w*s.x,h*0.5,w*0.15,h*0.09,s.label,s.color);
    if(i<stages.length-1) this.drawArrow(ctx,w*(s.x+0.08),h*0.5,w*(stages[i+1].x-0.06),h*0.5);
  });
  ctx.fillStyle='#333'; ctx.font=`${h*0.024}px Arial`; ctx.textAlign='center';
  ctx.fillText('Soil is intact — recovery faster than primary succession',w*0.5,h*0.75);
  ctx.fillStyle='#111'; ctx.font=`bold ${h*0.033}px Arial`; ctx.textAlign='center';
  ctx.fillText('Secondary Succession',w*0.5,h*0.15);
}

static drawClimaxCommunity(ctx, colors, w, h) {
  // draw a rich forest scene
  ctx.fillStyle='#c8e6c9'; ctx.fillRect(0,0,w,h*0.7);
  ctx.fillStyle='#5d4037'; ctx.fillRect(0,h*0.7,w,h*0.3);
  // trees
  for(let i=0;i<7;i++){
    const tx=w*(0.08+i*0.13), th=h*(0.35+Math.random()*0.2), ty=h*0.7-th;
    ctx.fillStyle='#5d4037'; ctx.fillRect(tx-w*0.015,h*0.7-h*0.12,w*0.03,h*0.15);
    ctx.fillStyle=colors.climax.base; ctx.beginPath(); ctx.arc(tx,ty+h*0.06,w*0.065,0,Math.PI*2); ctx.fill();
  }
  this.drawOrganism(ctx,w*0.5,h*0.85,w*0.35,h*0.07,'Climax Community — Stable, high biodiversity',colors.climax);
  ctx.fillStyle='#111'; ctx.font=`bold ${h*0.033}px Arial`; ctx.textAlign='center';
  ctx.fillText('Climax Community',w*0.5,h*0.07);
  ctx.font=`${h*0.026}px Arial`; ctx.fillStyle='#1b5e20';
  ctx.fillText('Final stable stage — dominated by late-successional species',w*0.5,h*0.15);
}

// ===== COMPETITION =====
static drawCompetitionInteraction(ctx, x, y, width, height, component = 'complete') {
  ctx.save();
  ctx.translate(x, y);
  const colors = {
    sp1:   { base: '#1565c0', light: '#64b5f6', dark: '#0d47a1' },
    sp2:   { base: '#c62828', light: '#ef9a9a', dark: '#7f0000' },
    both:  { base: '#6a1b9a', light: '#ce93d8', dark: '#4a148c' },
  };
  switch(component) {
    case 'complete':      this.drawCompleteCompetition(ctx, colors, width, height); break;
    case 'interspecific': this.drawInterspecificCompetition(ctx, colors, width, height); break;
    case 'intraspecific': this.drawIntraspecificCompetition(ctx, colors, width, height); break;
    case 'exclusion':     this.drawCompetitiveExclusion(ctx, colors, width, height); break;
    default:              this.drawCompleteCompetition(ctx, colors, width, height);
  }
  ctx.restore();
}

static drawCompleteCompetition(ctx, colors, w, h) {
  // left panel: interspecific; right panel: intraspecific
  ctx.fillStyle='#e8eaf6'; ctx.fillRect(0,0,w*0.48,h);
  ctx.fillStyle='#fce4ec'; ctx.fillRect(w*0.52,0,w*0.48,h);

  // Interspecific: two species population curves over time
  ctx.save(); ctx.translate(0,0);
  ctx.fillStyle='#283593'; ctx.font=`bold ${h*0.028}px Arial`; ctx.textAlign='center';
  ctx.fillText('Interspecific Competition',w*0.24,h*0.08);

  const drawCurve=(xOff,points,col)=>{
    ctx.strokeStyle=col; ctx.lineWidth=w*0.005;
    ctx.beginPath(); ctx.moveTo(xOff+w*0.04,h*0.85);
    points.forEach(([px,py])=>ctx.lineTo(xOff+w*px,h*py));
    ctx.stroke();
  };
  // Species A grows, Species B declines
  drawCurve(0,[[0.04,0.85],[0.1,0.7],[0.16,0.55],[0.22,0.4],[0.28,0.35],[0.34,0.33],[0.4,0.32]],colors.sp1.base);
  drawCurve(0,[[0.04,0.3],[0.1,0.38],[0.16,0.5],[0.22,0.65],[0.28,0.75],[0.34,0.8],[0.4,0.82]],colors.sp2.base);
  ctx.fillStyle=colors.sp1.base; ctx.font=`${h*0.024}px Arial`; ctx.textAlign='left';
  ctx.fillText('Species A',w*0.35,h*0.38);
  ctx.fillStyle=colors.sp2.base; ctx.fillText('Species B',w*0.35,h*0.76);
  // axes
  ctx.strokeStyle='#333'; ctx.lineWidth=w*0.003;
  ctx.beginPath(); ctx.moveTo(w*0.04,h*0.15); ctx.lineTo(w*0.04,h*0.88); ctx.lineTo(w*0.46,h*0.88); ctx.stroke();
  ctx.fillStyle='#333'; ctx.font=`${h*0.022}px Arial`; ctx.textAlign='center';
  ctx.fillText('Time',w*0.24,h*0.95); ctx.fillText('Population',w*0.01,h*0.5);
  ctx.restore();

  // Intraspecific: single species logistic curve
  ctx.save(); ctx.translate(w*0.52,0);
  ctx.fillStyle='#880e4f'; ctx.font=`bold ${h*0.028}px Arial`; ctx.textAlign='center';
  ctx.fillText('Intraspecific Competition',w*0.24,h*0.08);
  // logistic S-curve for one species
  ctx.strokeStyle=colors.sp1.base; ctx.lineWidth=w*0.005;
  ctx.beginPath(); ctx.moveTo(w*0.04,h*0.82);
  for(let i=0;i<=36;i++){
    const t=i/36, K=h*0.25, N0=h*0.82;
    const yy=N0-(N0-K)/(1+Math.exp(-12*(t-0.5)));
    ctx.lineTo(w*(0.04+i*0.4/36),yy);
  }
  ctx.stroke();
  // K line
  ctx.strokeStyle='#880e4f'; ctx.lineWidth=w*0.003; ctx.setLineDash([w*0.01,w*0.007]);
  ctx.beginPath(); ctx.moveTo(w*0.04,h*0.25); ctx.lineTo(w*0.44,h*0.25); ctx.stroke();
  ctx.setLineDash([]);
  ctx.fillStyle='#880e4f'; ctx.font=`${h*0.024}px Arial`; ctx.textAlign='left';
  ctx.fillText('K (carrying capacity)',w*0.1,h*0.22);
  ctx.fillText('Intraspecific\ncompetition increases\nas pop. → K',w*0.22,h*0.6);
  ctx.strokeStyle='#333'; ctx.lineWidth=w*0.003;
  ctx.beginPath(); ctx.moveTo(w*0.04,h*0.15); ctx.lineTo(w*0.04,h*0.88); ctx.lineTo(w*0.46,h*0.88); ctx.stroke();
  ctx.fillStyle='#333'; ctx.font=`${h*0.022}px Arial`; ctx.textAlign='center';
  ctx.fillText('Time',w*0.24,h*0.95);
  ctx.restore();

  ctx.fillStyle='#111'; ctx.font=`bold ${h*0.033}px Arial`; ctx.textAlign='center';
  ctx.fillText('Competition Interactions',w*0.5,h*0.003);
}

static drawInterspecificCompetition(ctx, colors, w, h) {
  this._drawAxes(ctx,w,h,'Time →','Population size');
  // two competing species
  const ptA=[[0,0.82],[0.15,0.65],[0.3,0.45],[0.5,0.35],[0.7,0.3],[0.9,0.28]];
  const ptB=[[0,0.28],[0.15,0.38],[0.3,0.52],[0.5,0.65],[0.7,0.72],[0.9,0.74]];
  this._plotLine(ctx,w,h,ptA,colors.sp1.base);
  this._plotLine(ctx,w,h,ptB,colors.sp2.base);
  ctx.fillStyle=colors.sp1.base; ctx.font=`${h*0.026}px Arial`; ctx.textAlign='left';
  ctx.fillText('Species 1 (loses)',w*0.65,h*0.37);
  ctx.fillStyle=colors.sp2.base;
  ctx.fillText('Species 2 (wins)',w*0.65,h*0.67);
  ctx.fillStyle='#111'; ctx.font=`bold ${h*0.03}px Arial`; ctx.textAlign='center';
  ctx.fillText('Interspecific Competition',w*0.5,h*0.08);
}

static drawIntraspecificCompetition(ctx, colors, w, h) {
  this._drawAxes(ctx,w,h,'Population density →','Growth rate / individual');
  // declining curve as density rises
  const pts=[[0,0.2],[0.15,0.25],[0.3,0.38],[0.45,0.55],[0.6,0.68],[0.75,0.75],[0.9,0.78]];
  this._plotLine(ctx,w,h,pts,colors.sp1.base);
  ctx.fillStyle='#444'; ctx.font=`${h*0.025}px Arial`; ctx.textAlign='left';
  ctx.fillText('Per-capita growth rate falls as',w*0.1,h*0.35);
  ctx.fillText('population density increases',w*0.1,h*0.41);
  ctx.fillStyle='#111'; ctx.font=`bold ${h*0.03}px Arial`; ctx.textAlign='center';
  ctx.fillText('Intraspecific Competition',w*0.5,h*0.08);
}

static drawCompetitiveExclusion(ctx, colors, w, h) {
  this._drawAxes(ctx,w,h,'Time →','Population size');
  const ptA=[[0,0.75],[0.2,0.62],[0.45,0.45],[0.7,0.32],[0.9,0.22],[1.0,0.15]];
  const ptB=[[0,0.2], [0.2,0.3], [0.45,0.48],[0.7,0.62],[0.9,0.71],[1.0,0.75]];
  this._plotLine(ctx,w,h,ptA,colors.sp1.base);
  this._plotLine(ctx,w,h,ptB,colors.sp2.base);
  ctx.fillStyle=colors.sp1.base; ctx.font=`${h*0.025}px Arial`; ctx.textAlign='left';
  ctx.fillText('Species 1 → excluded',w*0.5,h*0.22);
  ctx.fillStyle=colors.sp2.base; ctx.fillText('Species 2 → dominates',w*0.5,h*0.68);
  ctx.fillStyle='#111'; ctx.font=`bold ${h*0.03}px Arial`; ctx.textAlign='center';
  ctx.fillText('Competitive Exclusion Principle',w*0.5,h*0.08);
  ctx.font=`${h*0.024}px Arial`; ctx.fillStyle='#555';
  ctx.fillText('"No two species can occupy the same niche indefinitely"',w*0.5,h*0.93);
}

// helper: draw axes
static _drawAxes(ctx, w, h, xLabel, yLabel) {
  ctx.strokeStyle='#333'; ctx.lineWidth=w*0.004;
  ctx.beginPath(); ctx.moveTo(w*0.1,h*0.1); ctx.lineTo(w*0.1,h*0.88); ctx.lineTo(w*0.95,h*0.88); ctx.stroke();
  ctx.fillStyle='#333'; ctx.font=`${h*0.024}px Arial`; ctx.textAlign='center';
  ctx.fillText(xLabel,w*0.52,h*0.95);
  ctx.save(); ctx.translate(w*0.04,h*0.5); ctx.rotate(-Math.PI/2); ctx.fillText(yLabel,0,0); ctx.restore();
}

// helper: plot a line from fractional points
static _plotLine(ctx, w, h, pts, color) {
  const ox=w*0.1, oy=h*0.88, pw=w*0.85, ph=h*0.78;
  ctx.strokeStyle=color; ctx.lineWidth=w*0.006; ctx.lineJoin='round';
  ctx.beginPath(); ctx.moveTo(ox+pts[0][0]*pw, oy-pts[0][1]*ph);
  pts.slice(1).forEach(([px,py])=>ctx.lineTo(ox+px*pw,oy-py*ph));
  ctx.stroke();
}

// ===== SYMBIOSIS =====
static drawSymbiosisTypes(ctx, x, y, width, height, component = 'complete') {
  ctx.save();
  ctx.translate(x, y);
  const colors = {
    mutualism:    { base: '#2e7d32', light: '#60ad5e', dark: '#1b5e20' },
    commensalism: { base: '#1565c0', light: '#64b5f6', dark: '#0d47a1' },
    parasitism:   { base: '#c62828', light: '#ef9a9a', dark: '#7f0000' },
  };
  switch(component) {
    case 'complete':     this.drawCompleteSymbiosis(ctx, colors, width, height); break;
    case 'mutualism':    this.drawMutualism(ctx, colors, width, height); break;
    case 'commensalism': this.drawCommensalism(ctx, colors, width, height); break;
    case 'parasitism':   this.drawParasitism(ctx, colors, width, height); break;
    default:             this.drawCompleteSymbiosis(ctx, colors, width, height);
  }
  ctx.restore();
}

static drawCompleteSymbiosis(ctx, colors, w, h) {
  const panels=[
    {x:0,    color:colors.mutualism,   title:'Mutualism',    sub:'(+/+)',  desc:'Both species benefit\ne.g. Bee & Flower'},
    {x:0.34, color:colors.commensalism,title:'Commensalism', sub:'(+/0)',  desc:'One benefits,\nother unaffected\ne.g. Barnacle & Whale'},
    {x:0.67, color:colors.parasitism,  title:'Parasitism',   sub:'(+/−)',  desc:'Parasite benefits,\nhost harmed\ne.g. Tick & Deer'},
  ];
  panels.forEach(p=>{
    const px=w*p.x, pw=w*0.33;
    // panel bg
    ctx.fillStyle=p.color.light+'55'; ctx.fillRect(px,0,pw,h);
    ctx.strokeStyle=p.color.dark; ctx.lineWidth=w*0.003; ctx.strokeRect(px,0,pw,h);
    // two organisms
    this.drawOrganism(ctx,px+pw*0.3,h*0.38,pw*0.4,h*0.09,'Species A',p.color);
    this.drawOrganism(ctx,px+pw*0.7,h*0.38,pw*0.4,h*0.09,'Species B',{base:'#78909c',light:'#b0bec5',dark:'#546e7a'});
    // interaction line
    ctx.strokeStyle=p.color.base; ctx.lineWidth=w*0.005;
    ctx.beginPath(); ctx.moveTo(px+pw*0.38,h*0.38); ctx.lineTo(px+pw*0.62,h*0.38); ctx.stroke();
    // title & labels
    ctx.fillStyle=p.color.dark; ctx.font=`bold ${h*0.03}px Arial`; ctx.textAlign='center';
    ctx.fillText(p.title,px+pw*0.5,h*0.12);
    ctx.fillStyle=p.color.base; ctx.font=`bold ${h*0.04}px Arial`; ctx.fillText(p.sub,px+pw*0.5,h*0.22);
    ctx.fillStyle='#333'; ctx.font=`${h*0.024}px Arial`;
    p.desc.split('\n').forEach((line,i)=>ctx.fillText(line,px+pw*0.5,h*(0.6+i*0.07)));
  });
  ctx.fillStyle='#111'; ctx.font=`bold ${h*0.033}px Arial`; ctx.textAlign='center';
  ctx.fillText('Types of Symbiosis',w*0.5,h*0.005);
}

static drawMutualism(ctx, colors, w, h) {
  this.drawOrganism(ctx,w*0.28,h*0.45,w*0.22,h*0.09,'Bee',colors.mutualism);
  this.drawOrganism(ctx,w*0.72,h*0.45,w*0.22,h*0.09,'Flower',colors.mutualism);
  // double-headed arrow
  ctx.strokeStyle=colors.mutualism.base; ctx.lineWidth=w*0.007;
  this.drawArrow(ctx,w*0.4,h*0.42,w*0.6,h*0.42);
  this.drawArrow(ctx,w*0.6,h*0.48,w*0.4,h*0.48);
  ctx.fillStyle=colors.mutualism.base; ctx.font=`bold ${h*0.035}px Arial`; ctx.textAlign='center';
  ctx.fillText('+',w*0.27,h*0.3); ctx.fillText('+',w*0.73,h*0.3);
  ctx.fillStyle='#333'; ctx.font=`${h*0.026}px Arial`;
  ctx.fillText('Bee gets nectar (food)',w*0.5,h*0.65);
  ctx.fillText('Flower gets pollination',w*0.5,h*0.72);
  ctx.fillStyle='#111'; ctx.font=`bold ${h*0.033}px Arial`; ctx.fillText('Mutualism (+/+)',w*0.5,h*0.12);
}

static drawCommensalism(ctx, colors, w, h) {
  this.drawOrganism(ctx,w*0.28,h*0.45,w*0.22,h*0.09,'Barnacle',colors.commensalism);
  this.drawOrganism(ctx,w*0.72,h*0.45,w*0.22,h*0.09,'Whale',{base:'#546e7a',light:'#b0bec5',dark:'#37474f'});
  ctx.strokeStyle=colors.commensalism.base; ctx.lineWidth=w*0.007;
  this.drawArrow(ctx,w*0.4,h*0.45,w*0.61,h*0.45);
  ctx.strokeStyle='#999'; ctx.lineWidth=w*0.004; ctx.setLineDash([w*0.01,w*0.007]);
  this.drawArrow(ctx,w*0.61,h*0.48,w*0.4,h*0.48); ctx.setLineDash([]);
  ctx.fillStyle=colors.commensalism.base; ctx.font=`bold ${h*0.035}px Arial`; ctx.textAlign='center';
  ctx.fillText('+',w*0.27,h*0.3); ctx.fillStyle='#999'; ctx.fillText('0',w*0.73,h*0.3);
  ctx.fillStyle='#333'; ctx.font=`${h*0.026}px Arial`;
  ctx.fillText('Barnacle gets transport & food scraps',w*0.5,h*0.65);
  ctx.fillText('Whale is unaffected',w*0.5,h*0.72);
  ctx.fillStyle='#111'; ctx.font=`bold ${h*0.033}px Arial`; ctx.fillText('Commensalism (+/0)',w*0.5,h*0.12);
}

static drawParasitism(ctx, colors, w, h) {
  this.drawOrganism(ctx,w*0.28,h*0.45,w*0.22,h*0.09,'Tick\n(Parasite)',colors.parasitism);
  this.drawOrganism(ctx,w*0.72,h*0.45,w*0.22,h*0.09,'Deer\n(Host)',{base:'#6d4c41',light:'#a1887f',dark:'#3e2723'});
  ctx.strokeStyle=colors.parasitism.base; ctx.lineWidth=w*0.007;
  this.drawArrow(ctx,w*0.4,h*0.42,w*0.61,h*0.42);
  ctx.strokeStyle='#555'; ctx.lineWidth=w*0.004; ctx.setLineDash([w*0.01,w*0.007]);
  this.drawArrow(ctx,w*0.61,h*0.48,w*0.4,h*0.48); ctx.setLineDash([]);
  ctx.fillStyle=colors.parasitism.base; ctx.font=`bold ${h*0.035}px Arial`; ctx.textAlign='center';
  ctx.fillText('+',w*0.27,h*0.3); ctx.fillStyle='#b71c1c'; ctx.fillText('−',w*0.73,h*0.3);
  ctx.fillStyle='#333'; ctx.font=`${h*0.026}px Arial`;
  ctx.fillText('Tick feeds on host blood (benefits)',w*0.5,h*0.65);
  ctx.fillText('Deer weakened, may spread disease (harmed)',w*0.5,h*0.72);
  ctx.fillStyle='#111'; ctx.font=`bold ${h*0.033}px Arial`; ctx.fillText('Parasitism (+/−)',w*0.5,h*0.12);
}

// ===== NICHE COMPARISON =====
static drawNicheComparison(ctx, x, y, width, height, component = 'complete') {
  ctx.save();
  ctx.translate(x, y);
  const colors = {
    fundamental: { base: '#1565c0', light: '#64b5f6', dark: '#0d47a1' },
    realised:    { base: '#c62828', light: '#ef9a9a', dark: '#7f0000' },
  };
  switch(component) {
    case 'complete':     this.drawCompleteNiche(ctx, colors, width, height); break;
    case 'fundamental':  this.drawFundamentalNiche(ctx, colors, width, height); break;
    case 'realised':     this.drawRealisedNiche(ctx, colors, width, height); break;
    case 'overlap':      this.drawNicheOverlap(ctx, colors, width, height); break;
    default:             this.drawCompleteNiche(ctx, colors, width, height);
  }
  ctx.restore();
}

static drawCompleteNiche(ctx, colors, w, h) {
  this._drawAxes(ctx,w,h,'Resource axis (e.g. temperature) →','Performance / abundance');
  const ox=w*0.1, oy=h*0.88, pw=w*0.85, ph=h*0.78;
  // fundamental niche: wide Gaussian
  ctx.strokeStyle=colors.fundamental.base; ctx.lineWidth=w*0.006; ctx.fillStyle=colors.fundamental.base+'33';
  ctx.beginPath();
  for(let i=0;i<=100;i++){
    const t=i/100, xp=ox+t*pw, yp=oy-ph*0.8*Math.exp(-Math.pow((t-0.5)/0.22,2));
    i===0?ctx.moveTo(xp,yp):ctx.lineTo(xp,yp);
  }
  ctx.lineTo(ox+pw,oy); ctx.lineTo(ox,oy); ctx.closePath(); ctx.fill(); ctx.stroke();

  // realised niche: narrower, shifted due to competition
  ctx.strokeStyle=colors.realised.base; ctx.lineWidth=w*0.006; ctx.fillStyle=colors.realised.base+'33';
  ctx.beginPath();
  for(let i=0;i<=100;i++){
    const t=i/100, xp=ox+t*pw, yp=oy-ph*0.65*Math.exp(-Math.pow((t-0.35)/0.12,2));
    i===0?ctx.moveTo(xp,yp):ctx.lineTo(xp,yp);
  }
  ctx.lineTo(ox+pw,oy); ctx.lineTo(ox,oy); ctx.closePath(); ctx.fill(); ctx.stroke();

  ctx.fillStyle=colors.fundamental.base; ctx.font=`${h*0.026}px Arial`; ctx.textAlign='left';
  ctx.fillText('Fundamental niche',w*0.55,h*0.28);
  ctx.fillStyle=colors.realised.base; ctx.fillText('Realised niche',w*0.18,h*0.32);
  ctx.fillStyle='#555'; ctx.font=`${h*0.022}px Arial`;
  ctx.fillText('(reduced by competition / predation)',w*0.18,h*0.38);
  ctx.fillStyle='#111'; ctx.font=`bold ${h*0.033}px Arial`; ctx.textAlign='center';
  ctx.fillText('Fundamental vs Realised Niche',w*0.5,h*0.08);
}

static drawFundamentalNiche(ctx, colors, w, h) {
  this._drawAxes(ctx,w,h,'Resource gradient →','Performance');
  const ox=w*0.1,oy=h*0.88,pw=w*0.85,ph=h*0.78;
  ctx.strokeStyle=colors.fundamental.base; ctx.lineWidth=w*0.007; ctx.fillStyle=colors.fundamental.base+'44';
  ctx.beginPath();
  for(let i=0;i<=100;i++){const t=i/100,xp=ox+t*pw,yp=oy-ph*0.82*Math.exp(-Math.pow((t-0.5)/0.22,2));i===0?ctx.moveTo(xp,yp):ctx.lineTo(xp,yp);}
  ctx.lineTo(ox+pw,oy);ctx.lineTo(ox,oy);ctx.closePath();ctx.fill();ctx.stroke();
  ctx.fillStyle=colors.fundamental.base; ctx.font=`${h*0.026}px Arial`; ctx.textAlign='center';
  ctx.fillText('Full range where species CAN survive (no competitors)',w*0.5,h*0.35);
  ctx.fillStyle='#111'; ctx.font=`bold ${h*0.03}px Arial`; ctx.fillText('Fundamental Niche',w*0.5,h*0.08);
}

static drawRealisedNiche(ctx, colors, w, h) {
  this._drawAxes(ctx,w,h,'Resource gradient →','Performance');
  const ox=w*0.1,oy=h*0.88,pw=w*0.85,ph=h*0.78;
  ctx.strokeStyle=colors.realised.base; ctx.lineWidth=w*0.007; ctx.fillStyle=colors.realised.base+'44';
  ctx.beginPath();
  for(let i=0;i<=100;i++){const t=i/100,xp=ox+t*pw,yp=oy-ph*0.65*Math.exp(-Math.pow((t-0.38)/0.12,2));i===0?ctx.moveTo(xp,yp):ctx.lineTo(xp,yp);}
  ctx.lineTo(ox+pw,oy);ctx.lineTo(ox,oy);ctx.closePath();ctx.fill();ctx.stroke();
  ctx.fillStyle=colors.realised.base; ctx.font=`${h*0.026}px Arial`; ctx.textAlign='center';
  ctx.fillText('Reduced range where species ACTUALLY lives',w*0.5,h*0.35);
  ctx.fillText('due to biotic interactions',w*0.5,h*0.41);
  ctx.fillStyle='#111'; ctx.font=`bold ${h*0.03}px Arial`; ctx.fillText('Realised Niche',w*0.5,h*0.08);
}

static drawNicheOverlap(ctx, colors, w, h) {
  this._drawAxes(ctx,w,h,'Resource gradient →','Performance');
  const ox=w*0.1,oy=h*0.88,pw=w*0.85,ph=h*0.78;
  // two overlapping gaussians
  [[0.4,colors.fundamental.base],[0.6,colors.realised.base]].forEach(([center,col])=>{
    ctx.strokeStyle=col; ctx.lineWidth=w*0.006; ctx.fillStyle=col+'44';
    ctx.beginPath();
    for(let i=0;i<=100;i++){const t=i/100,xp=ox+t*pw,yp=oy-ph*0.75*Math.exp(-Math.pow((t-center)/0.18,2));i===0?ctx.moveTo(xp,yp):ctx.lineTo(xp,yp);}
    ctx.lineTo(ox+pw,oy);ctx.lineTo(ox,oy);ctx.closePath();ctx.fill();ctx.stroke();
  });
  ctx.fillStyle='rgba(200,100,100,0.4)'; // overlap region shading
  ctx.fillStyle=colors.fundamental.base; ctx.font=`${h*0.025}px Arial`; ctx.textAlign='left'; ctx.fillText('Species 1',w*0.12,h*0.35);
  ctx.fillStyle=colors.realised.base; ctx.fillText('Species 2',w*0.68,h*0.35);
  ctx.fillStyle='#555'; ctx.font=`${h*0.024}px Arial`; ctx.textAlign='center';
  ctx.fillText('Overlap → competition for shared resources',w*0.5,h*0.88);
  ctx.fillStyle='#111'; ctx.font=`bold ${h*0.03}px Arial`; ctx.fillText('Niche Overlap',w*0.5,h*0.08);
}

// ===== SPECIES RICHNESS / LATITUDE =====
static drawSpeciesRichnessLatitude(ctx, x, y, width, height, component = 'complete') {
  ctx.save();
  ctx.translate(x, y);
  const colors = {
    tropical: { base: '#2e7d32', light: '#60ad5e', dark: '#1b5e20' },
    temperate:{ base: '#1565c0', light: '#64b5f6', dark: '#0d47a1' },
    polar:    { base: '#b0bec5', light: '#eceff1', dark: '#78909c' },
    curve:    { base: '#e53935', light: '#ef9a9a', dark: '#b71c1c' },
  };
  switch(component) {
    case 'complete':  this.drawCompleteLatitudeGradient(ctx, colors, width, height); break;
    case 'tropical':  this.drawTropicalZone(ctx, colors, width, height); break;
    case 'temperate': this.drawTemperateZone(ctx, colors, width, height); break;
    case 'polar':     this.drawPolarZone(ctx, colors, width, height); break;
    default:          this.drawCompleteLatitudeGradient(ctx, colors, width, height);
  }
  ctx.restore();
}

static drawCompleteLatitudeGradient(ctx, colors, w, h) {
  // background: tropical to polar gradient left→right
  const bg=ctx.createLinearGradient(0,0,w,0);
  bg.addColorStop(0,'#a5d6a7'); bg.addColorStop(0.5,'#b3e5fc'); bg.addColorStop(1,'#eceff1');
  ctx.fillStyle=bg; ctx.fillRect(0,0,w,h);

  this._drawAxes(ctx,w,h,'Latitude (Equator → Pole) →','Species Richness');

  // diversity gradient curve
  const ox=w*0.1,oy=h*0.88,pw=w*0.85,ph=h*0.78;
  ctx.strokeStyle=colors.curve.base; ctx.lineWidth=w*0.007;
  ctx.beginPath();
  for(let i=0;i<=100;i++){
    const t=i/100, xp=ox+t*pw, yp=oy-ph*(0.85-0.82*t*t);
    i===0?ctx.moveTo(xp,yp):ctx.lineTo(xp,yp);
  }
  ctx.stroke();

  // zone shading
  [[0,0.33,'Tropical\n(High diversity)','#2e7d32'],[0.33,0.66,'Temperate\n(Moderate)','#1565c0'],[0.66,1.0,'Polar\n(Low diversity)','#546e7a']].forEach(([s,e,lbl,col])=>{
    ctx.fillStyle=col+'22'; ctx.fillRect(ox+s*pw,h*0.1,pw*(e-s),h*0.78);
    ctx.fillStyle=col; ctx.font=`${h*0.026}px Arial`; ctx.textAlign='center';
    ctx.fillText(lbl,ox+(s+e)/2*pw,h*0.18);
  });

  ctx.fillStyle='#111'; ctx.font=`bold ${h*0.033}px Arial`; ctx.textAlign='center';
  ctx.fillText('Latitudinal Diversity Gradient',w*0.5,h*0.06);
}

static drawTropicalZone(ctx, colors, w, h) {
  ctx.fillStyle='#c8e6c9'; ctx.fillRect(0,0,w,h);
  for(let i=0;i<8;i++){
    const tx=w*(0.1+i*0.11);
    ctx.fillStyle='#5d4037'; ctx.fillRect(tx-w*0.012,h*0.4,w*0.024,h*0.4);
    ctx.fillStyle=colors.tropical.base; ctx.beginPath(); ctx.arc(tx,h*0.38,w*0.055,0,Math.PI*2); ctx.fill();
  }
  ctx.fillStyle=colors.tropical.dark; ctx.font=`bold ${h*0.03}px Arial`; ctx.textAlign='center';
  ctx.fillText('Tropical Zone — Highest Species Richness',w*0.5,h*0.12);
  ctx.font=`${h*0.025}px Arial`; ctx.fillStyle='#1b5e20';
  ctx.fillText('Warm year-round, high rainfall, stable climate,',w*0.5,h*0.88);
  ctx.fillText('long evolutionary history → high biodiversity',w*0.5,h*0.94);
}

static drawTemperateZone(ctx, colors, w, h) {
  ctx.fillStyle='#bbdefb'; ctx.fillRect(0,0,w,h);
  for(let i=0;i<5;i++){
    const tx=w*(0.15+i*0.18);
    ctx.fillStyle='#5d4037'; ctx.fillRect(tx-w*0.012,h*0.45,w*0.024,h*0.35);
    ctx.fillStyle=colors.temperate.base; ctx.beginPath(); ctx.arc(tx,h*0.43,w*0.048,0,Math.PI*2); ctx.fill();
  }
  ctx.fillStyle=colors.temperate.dark; ctx.font=`bold ${h*0.03}px Arial`; ctx.textAlign='center';
  ctx.fillText('Temperate Zone — Moderate Species Richness',w*0.5,h*0.12);
  ctx.font=`${h*0.025}px Arial`; ctx.fillStyle='#0d47a1';
  ctx.fillText('Seasonal variation limits species; less diverse than tropical',w*0.5,h*0.88);
}

static drawPolarZone(ctx, colors, w, h) {
  ctx.fillStyle='#eceff1'; ctx.fillRect(0,0,w,h);
  // sparse vegetation
  for(let i=0;i<3;i++){
    const tx=w*(0.25+i*0.25);
    ctx.fillStyle=colors.polar.dark; ctx.beginPath(); ctx.arc(tx,h*0.6,w*0.03,0,Math.PI*2); ctx.fill();
  }
  ctx.fillStyle=colors.polar.dark; ctx.font=`bold ${h*0.03}px Arial`; ctx.textAlign='center';
  ctx.fillText('Polar Zone — Lowest Species Richness',w*0.5,h*0.15);
  ctx.font=`${h*0.025}px Arial`; ctx.fillStyle='#546e7a';
  ctx.fillText('Extreme cold, limited sunlight, short growing season',w*0.5,h*0.85);
}

// ===== ISLAND BIOGEOGRAPHY =====
static drawIslandBiogeography(ctx, x, y, width, height, component = 'complete') {
  ctx.save();
  ctx.translate(x, y);
  const colors = {
    immigration: { base: '#1565c0', light: '#64b5f6', dark: '#0d47a1' },
    extinction:  { base: '#c62828', light: '#ef9a9a', dark: '#7f0000' },
    equilibrium: { base: '#2e7d32', light: '#60ad5e', dark: '#1b5e20' },
  };
  switch(component) {
    case 'complete':    this.drawCompleteIslandBiogeography(ctx, colors, width, height); break;
    case 'immigration': this.drawImmigrationCurve(ctx, colors, width, height); break;
    case 'extinction':  this.drawExtinctionCurve(ctx, colors, width, height); break;
    case 'equilibrium': this.drawEquilibriumPoint(ctx, colors, width, height); break;
    case 'species-area':this.drawSpeciesAreaCurve(ctx, colors, width, height); break;
    default:            this.drawCompleteIslandBiogeography(ctx, colors, width, height);
  }
  ctx.restore();
}

static drawCompleteIslandBiogeography(ctx, colors, w, h) {
  this._drawAxes(ctx,w,h,'Number of species on island →','Rate (immigration / extinction)');
  const ox=w*0.1,oy=h*0.88,pw=w*0.85,ph=h*0.78;

  // immigration curve: decreasing
  ctx.strokeStyle=colors.immigration.base; ctx.lineWidth=w*0.007;
  ctx.beginPath();
  for(let i=0;i<=100;i++){const t=i/100,xp=ox+t*pw,yp=oy-ph*(0.88-0.88*t);i===0?ctx.moveTo(xp,yp):ctx.lineTo(xp,yp);}
  ctx.stroke();

  // extinction curve: increasing
  ctx.strokeStyle=colors.extinction.base; ctx.lineWidth=w*0.007;
  ctx.beginPath();
  for(let i=0;i<=100;i++){const t=i/100,xp=ox+t*pw,yp=oy-ph*(0.85*t*t);i===0?ctx.moveTo(xp,yp):ctx.lineTo(xp,yp);}
  ctx.stroke();

  // equilibrium point (intersection ~0.5, 0.44)
  const eqX=ox+0.72*pw, eqY=oy-ph*0.44;
  ctx.fillStyle=colors.equilibrium.base; ctx.beginPath(); ctx.arc(eqX,eqY,w*0.018,0,Math.PI*2); ctx.fill();
  ctx.strokeStyle='#333'; ctx.lineWidth=w*0.003; ctx.setLineDash([w*0.01,w*0.007]);
  ctx.beginPath(); ctx.moveTo(eqX,eqY); ctx.lineTo(eqX,oy); ctx.stroke();
  ctx.setLineDash([]);
  ctx.fillStyle=colors.equilibrium.dark; ctx.font=`bold ${h*0.026}px Arial`; ctx.textAlign='center';
  ctx.fillText('S*\n(Equilibrium)',eqX,oy+h*0.04);

  ctx.fillStyle=colors.immigration.base; ctx.font=`${h*0.025}px Arial`; ctx.textAlign='left';
  ctx.fillText('Immigration rate',w*0.12,h*0.2);
  ctx.fillStyle=colors.extinction.base; ctx.fillText('Extinction rate',w*0.65,h*0.78);

  ctx.fillStyle='#111'; ctx.font=`bold ${h*0.033}px Arial`; ctx.textAlign='center';
  ctx.fillText('Island Biogeography (MacArthur & Wilson)',w*0.5,h*0.07);
}

static drawImmigrationCurve(ctx, colors, w, h) {
  this._drawAxes(ctx,w,h,'Species present →','Immigration rate');
  const ox=w*0.1,oy=h*0.88,pw=w*0.85,ph=h*0.78;
  ctx.strokeStyle=colors.immigration.base; ctx.lineWidth=w*0.007;
  ctx.beginPath();
  for(let i=0;i<=100;i++){const t=i/100,xp=ox+t*pw,yp=oy-ph*(0.88-0.88*t);i===0?ctx.moveTo(xp,yp):ctx.lineTo(xp,yp);}
  ctx.stroke();
  ctx.fillStyle='#333'; ctx.font=`${h*0.025}px Arial`; ctx.textAlign='left';
  ctx.fillText('Declines as more species already present\n(fewer new colonisers)',w*0.15,h*0.45);
  ctx.fillStyle='#111'; ctx.font=`bold ${h*0.03}px Arial`; ctx.textAlign='center';
  ctx.fillText('Immigration Rate Curve',w*0.5,h*0.08);
}

static drawExtinctionCurve(ctx, colors, w, h) {
  this._drawAxes(ctx,w,h,'Species present →','Extinction rate');
  const ox=w*0.1,oy=h*0.88,pw=w*0.85,ph=h*0.78;
  ctx.strokeStyle=colors.extinction.base; ctx.lineWidth=w*0.007;
  ctx.beginPath();
  for(let i=0;i<=100;i++){const t=i/100,xp=ox+t*pw,yp=oy-ph*(0.85*t*t);i===0?ctx.moveTo(xp,yp):ctx.lineTo(xp,yp);}
  ctx.stroke();
  ctx.fillStyle='#333'; ctx.font=`${h*0.025}px Arial`; ctx.textAlign='left';
  ctx.fillText('Increases with more species\n(greater competition → more local extinction)',w*0.12,h*0.55);
  ctx.fillStyle='#111'; ctx.font=`bold ${h*0.03}px Arial`; ctx.textAlign='center';
  ctx.fillText('Extinction Rate Curve',w*0.5,h*0.08);
}

static drawEquilibriumPoint(ctx, colors, w, h) {
  this._drawAxes(ctx,w,h,'Species richness (S) →','Rate');
  const ox=w*0.1,oy=h*0.88,pw=w*0.85,ph=h*0.78;
  ctx.strokeStyle=colors.immigration.base; ctx.lineWidth=w*0.006;
  ctx.beginPath();for(let i=0;i<=100;i++){const t=i/100,xp=ox+t*pw,yp=oy-ph*(0.88-0.88*t);i===0?ctx.moveTo(xp,yp):ctx.lineTo(xp,yp);}ctx.stroke();
  ctx.strokeStyle=colors.extinction.base;
  ctx.beginPath();for(let i=0;i<=100;i++){const t=i/100,xp=ox+t*pw,yp=oy-ph*(0.85*t*t);i===0?ctx.moveTo(xp,yp):ctx.lineTo(xp,yp);}ctx.stroke();
  const eqX=ox+0.72*pw,eqY=oy-ph*0.44;
  ctx.fillStyle=colors.equilibrium.base; ctx.beginPath(); ctx.arc(eqX,eqY,w*0.02,0,Math.PI*2); ctx.fill();
  ctx.strokeStyle='#333'; ctx.lineWidth=w*0.003; ctx.setLineDash([w*0.01,w*0.007]);
  ctx.beginPath(); ctx.moveTo(eqX,eqY); ctx.lineTo(eqX,oy); ctx.stroke(); ctx.setLineDash([]);
  ctx.fillStyle=colors.equilibrium.dark; ctx.font=`bold ${h*0.028}px Arial`; ctx.textAlign='center';
  ctx.fillText('S*',eqX,oy+h*0.04);
  ctx.fillText('Dynamic equilibrium',eqX,eqY-h*0.04);
  ctx.fillStyle='#111'; ctx.font=`bold ${h*0.03}px Arial`; ctx.textAlign='center';
  ctx.fillText('Species Equilibrium Point',w*0.5,h*0.08);
}

static drawSpeciesAreaCurve(ctx, colors, w, h) {
  this._drawAxes(ctx,w,h,'log(Island Area) →','log(Species Richness)');
  const ox=w*0.1,oy=h*0.88,pw=w*0.85,ph=h*0.78;
  ctx.strokeStyle=colors.equilibrium.base; ctx.lineWidth=w*0.007;
  ctx.beginPath();
  for(let i=0;i<=100;i++){const t=i/100,xp=ox+t*pw,yp=oy-ph*(0.15+0.72*t);i===0?ctx.moveTo(xp,yp):ctx.lineTo(xp,yp);}
  ctx.stroke();
  ctx.fillStyle='#555'; ctx.font=`${h*0.025}px Arial`; ctx.textAlign='left';
  ctx.fillText('S = cA^z',w*0.55,h*0.35);
  ctx.fillText('(z ≈ 0.2–0.35 typically)',w*0.55,h*0.42);
  ctx.fillText('Larger islands → more species',w*0.2,h*0.6);
  ctx.fillStyle='#111'; ctx.font=`bold ${h*0.03}px Arial`; ctx.textAlign='center';
  ctx.fillText('Species-Area Relationship',w*0.5,h*0.08);
}

// ===== CARRYING CAPACITY FACTORS =====
static drawCarryingCapacityFactors(ctx, x, y, width, height, component = 'complete') {
  ctx.save();
  ctx.translate(x, y);
  const colors = {
    dd:   { base: '#1565c0', light: '#64b5f6', dark: '#0d47a1' },
    di:   { base: '#c62828', light: '#ef9a9a', dark: '#7f0000' },
    pop:  { base: '#2e7d32', light: '#60ad5e', dark: '#1b5e20' },
  };
  switch(component) {
    case 'complete':          this.drawCompleteCarryingCapacity(ctx, colors, width, height); break;
    case 'density-dependent': this.drawDensityDependent(ctx, colors, width, height); break;
    case 'density-independent':this.drawDensityIndependent(ctx, colors, width, height); break;
    case 'comparison':        this.drawDDDIComparison(ctx, colors, width, height); break;
    default:                  this.drawCompleteCarryingCapacity(ctx, colors, width, height);
  }
  ctx.restore();
}

static drawCompleteCarryingCapacity(ctx, colors, w, h) {
  // left: density-dependent, right: density-independent examples
  ctx.fillStyle='#e8eaf6'; ctx.fillRect(0,0,w*0.48,h);
  ctx.fillStyle='#fce4ec'; ctx.fillRect(w*0.52,0,w*0.48,h);

  // DD panel
  ctx.fillStyle='#283593'; ctx.font=`bold ${h*0.027}px Arial`; ctx.textAlign='center';
  ctx.fillText('Density-Dependent',w*0.24,h*0.08);
  const ddItems=['Competition','Predation','Disease','Parasitism','Starvation'];
  ddItems.forEach((item,i)=>{
    ctx.fillStyle=colors.dd.light; ctx.fillRect(w*0.04,h*(0.15+i*0.14),w*0.4,h*0.1);
    ctx.strokeStyle=colors.dd.dark; ctx.lineWidth=w*0.003; ctx.strokeRect(w*0.04,h*(0.15+i*0.14),w*0.4,h*0.1);
    ctx.fillStyle=colors.dd.dark; ctx.font=`${h*0.026}px Arial`;
    ctx.fillText(item,w*0.24,h*(0.15+i*0.14)+h*0.065);
  });
  ctx.fillStyle='#283593'; ctx.font=`${h*0.022}px Arial`;
  ctx.fillText('Intensity increases with\npopulation density',w*0.24,h*0.88);

  // DI panel
  ctx.fillStyle='#880e4f'; ctx.font=`bold ${h*0.027}px Arial`; ctx.textAlign='center';
  ctx.fillText('Density-Independent',w*0.76,h*0.08);
  const diItems=['Fire','Flood','Drought','Frost','Volcanic\neruption'];
  diItems.forEach((item,i)=>{
    ctx.fillStyle=colors.di.light; ctx.fillRect(w*0.56,h*(0.15+i*0.14),w*0.4,h*0.1);
    ctx.strokeStyle=colors.di.dark; ctx.lineWidth=w*0.003; ctx.strokeRect(w*0.56,h*(0.15+i*0.14),w*0.4,h*0.1);
    ctx.fillStyle=colors.di.dark; ctx.font=`${h*0.026}px Arial`;
    ctx.fillText(item,w*0.76,h*(0.15+i*0.14)+h*0.065);
  });
  ctx.fillStyle='#880e4f'; ctx.font=`${h*0.022}px Arial`;
  ctx.fillText('Affect population regardless\nof density',w*0.76,h*0.88);

  ctx.fillStyle='#111'; ctx.font=`bold ${h*0.033}px Arial`; ctx.textAlign='center';
  ctx.fillText('Carrying Capacity Limiting Factors',w*0.5,h*0.005);
}

static drawDensityDependent(ctx, colors, w, h) {
  this._drawAxes(ctx,w,h,'Population density →','Effect intensity');
  const ox=w*0.1,oy=h*0.88,pw=w*0.85,ph=h*0.78;
  ctx.strokeStyle=colors.dd.base; ctx.lineWidth=w*0.007;
  ctx.beginPath();
  for(let i=0;i<=100;i++){const t=i/100,xp=ox+t*pw,yp=oy-ph*(0.05+0.85*t);i===0?ctx.moveTo(xp,yp):ctx.lineTo(xp,yp);}
  ctx.stroke();
  ctx.fillStyle=colors.dd.base; ctx.font=`${h*0.025}px Arial`; ctx.textAlign='left';
  ctx.fillText('Competition, disease,\npredation increase with density',w*0.14,h*0.4);
  ctx.fillStyle='#111'; ctx.font=`bold ${h*0.03}px Arial`; ctx.textAlign='center';
  ctx.fillText('Density-Dependent Limiting Factors',w*0.5,h*0.08);
}

static drawDensityIndependent(ctx, colors, w, h) {
  this._drawAxes(ctx,w,h,'Population density →','Effect intensity');
  const ox=w*0.1,oy=h*0.88,pw=w*0.85,ph=h*0.78;
  ctx.strokeStyle=colors.di.base; ctx.lineWidth=w*0.007;
  ctx.beginPath(); ctx.moveTo(ox,oy-ph*0.55); ctx.lineTo(ox+pw,oy-ph*0.55); ctx.stroke();
  ctx.fillStyle=colors.di.base; ctx.font=`${h*0.025}px Arial`; ctx.textAlign='left';
  ctx.fillText('Fire, drought, frost — affect all\npopulation sizes equally',w*0.14,h*0.42);
  ctx.fillStyle='#111'; ctx.font=`bold ${h*0.03}px Arial`; ctx.textAlign='center';
  ctx.fillText('Density-Independent Limiting Factors',w*0.5,h*0.08);
}

static drawDDDIComparison(ctx, colors, w, h) {
  this._drawAxes(ctx,w,h,'Population density →','Effect intensity');
  const ox=w*0.1,oy=h*0.88,pw=w*0.85,ph=h*0.78;
  ctx.strokeStyle=colors.dd.base; ctx.lineWidth=w*0.007;
  ctx.beginPath();for(let i=0;i<=100;i++){const t=i/100;ctx.lineTo(ox+t*pw,oy-ph*(0.05+0.85*t));}ctx.stroke();
  ctx.strokeStyle=colors.di.base;
  ctx.beginPath();ctx.moveTo(ox,oy-ph*0.45);ctx.lineTo(ox+pw,oy-ph*0.45);ctx.stroke();
  ctx.fillStyle=colors.dd.base; ctx.font=`${h*0.025}px Arial`; ctx.textAlign='left';
  ctx.fillText('Density-dependent',w*0.6,h*0.35);
  ctx.fillStyle=colors.di.base; ctx.fillText('Density-independent',w*0.35,h*0.55);
  ctx.fillStyle='#111'; ctx.font=`bold ${h*0.03}px Arial`; ctx.textAlign='center';
  ctx.fillText('DD vs DI Limiting Factors',w*0.5,h*0.08);
}

// ===== ALLEE EFFECT =====
static drawAlleePatch(ctx, x, y, width, height, component = 'complete') {
  ctx.save();
  ctx.translate(x, y);
  const colors = {
    growth:  { base: '#2e7d32', light: '#60ad5e', dark: '#1b5e20' },
    allee:   { base: '#c62828', light: '#ef9a9a', dark: '#7f0000' },
    classic: { base: '#1565c0', light: '#64b5f6', dark: '#0d47a1' },
  };
  switch(component) {
    case 'complete': this.drawCompleteAllee(ctx, colors, width, height); break;
    case 'curve':    this.drawAlleeCurve(ctx, colors, width, height); break;
    case 'strong':   this.drawStrongAllee(ctx, colors, width, height); break;
    case 'weak':     this.drawWeakAllee(ctx, colors, width, height); break;
    default:         this.drawCompleteAllee(ctx, colors, width, height);
  }
  ctx.restore();
}

static drawCompleteAllee(ctx, colors, w, h) {
  this._drawAxes(ctx,w,h,'Population density (N) →','Per-capita growth rate (r)');
  const ox=w*0.1,oy=h*0.88,pw=w*0.85,ph=h*0.78;

  // classic logistic (no Allee): r decreases linearly with N
  ctx.strokeStyle=colors.classic.base; ctx.lineWidth=w*0.006;
  ctx.setLineDash([w*0.012,w*0.008]);
  ctx.beginPath();ctx.moveTo(ox,oy-ph*0.82);ctx.lineTo(ox+pw,oy);ctx.stroke();
  ctx.setLineDash([]);

  // Allee effect curve: hump shape, negative at low N
  ctx.strokeStyle=colors.allee.base; ctx.lineWidth=w*0.007;
  ctx.beginPath();
  for(let i=0;i<=100;i++){
    const t=i/100,xp=ox+t*pw;
    const yp=oy-ph*(0.85*(t-0.12)*(0.9-t)*4.2);
    i===0?ctx.moveTo(xp,yp):ctx.lineTo(xp,yp);
  }
  ctx.stroke();

  // zero line
  ctx.strokeStyle='#aaa'; ctx.lineWidth=w*0.003;
  ctx.beginPath();ctx.moveTo(ox,oy);ctx.lineTo(ox+pw,oy);ctx.stroke();

  // Allee threshold
  const aX=ox+0.12*pw;
  ctx.strokeStyle='#555'; ctx.lineWidth=w*0.003; ctx.setLineDash([w*0.008,w*0.007]);
  ctx.beginPath();ctx.moveTo(aX,h*0.1);ctx.lineTo(aX,oy);ctx.stroke();ctx.setLineDash([]);
  ctx.fillStyle='#555'; ctx.font=`${h*0.024}px Arial`; ctx.textAlign='center';
  ctx.fillText('Allee threshold (A)',aX,h*0.09);

  ctx.fillStyle=colors.classic.base; ctx.font=`${h*0.024}px Arial`; ctx.textAlign='left';
  ctx.fillText('Classic logistic',w*0.55,h*0.22);
  ctx.fillStyle=colors.allee.base; ctx.fillText('Allee effect',w*0.55,h*0.42);
  ctx.fillStyle='#c62828'; ctx.fillText('↓ Growth negative below threshold',w*0.12,h*0.78);

  ctx.fillStyle='#111'; ctx.font=`bold ${h*0.033}px Arial`; ctx.textAlign='center';
  ctx.fillText('Allee Effect',w*0.5,h*0.06);
}

static drawAlleeCurve(ctx, colors, w, h) {
  this._drawAxes(ctx,w,h,'Population size (N) →','Per-capita growth rate');
  const ox=w*0.1,oy=h*0.88,pw=w*0.85,ph=h*0.78;
  ctx.strokeStyle=colors.allee.base; ctx.lineWidth=w*0.007;
  ctx.beginPath();
  for(let i=0;i<=100;i++){const t=i/100,xp=ox+t*pw,yp=oy-ph*(0.85*(t-0.12)*(0.9-t)*4.2);i===0?ctx.moveTo(xp,yp):ctx.lineTo(xp,yp);}
  ctx.stroke();
  ctx.strokeStyle='#aaa'; ctx.lineWidth=w*0.003;ctx.beginPath();ctx.moveTo(ox,oy);ctx.lineTo(ox+pw,oy);ctx.stroke();
  ctx.fillStyle='#111'; ctx.font=`bold ${h*0.03}px Arial`; ctx.textAlign='center';
  ctx.fillText('Allee Effect Curve',w*0.5,h*0.08);
}

static drawStrongAllee(ctx, colors, w, h) {
  this._drawAxes(ctx,w,h,'N →','dN/dt');
  const ox=w*0.1,oy=h*0.6,pw=w*0.85,ph=h*0.45;
  // strong Allee: negative growth below threshold
  ctx.strokeStyle=colors.allee.base; ctx.lineWidth=w*0.007;
  ctx.beginPath();
  for(let i=0;i<=100;i++){const t=i/100,xp=ox+t*pw,yp=oy-ph*(0.9*(t-0.2)*(0.85-t)*4.5);i===0?ctx.moveTo(xp,yp):ctx.lineTo(xp,yp);}
  ctx.stroke();
  ctx.strokeStyle='#aaa'; ctx.lineWidth=w*0.003;ctx.beginPath();ctx.moveTo(ox,oy);ctx.lineTo(ox+pw,oy);ctx.stroke();
  ctx.fillStyle='#c62828'; ctx.font=`${h*0.025}px Arial`; ctx.textAlign='left';
  ctx.fillText('Population declines to extinction below threshold',w*0.12,h*0.82);
  ctx.fillStyle='#111'; ctx.font=`bold ${h*0.03}px Arial`; ctx.textAlign='center';
  ctx.fillText('Strong (Obligate) Allee Effect',w*0.5,h*0.08);
}

static drawWeakAllee(ctx, colors, w, h) {
  this._drawAxes(ctx,w,h,'N →','Per-capita growth rate');
  const ox=w*0.1,oy=h*0.88,pw=w*0.85,ph=h*0.78;
  // weak Allee: still positive but reduced at low N
  ctx.strokeStyle=colors.growth.base; ctx.lineWidth=w*0.007;
  ctx.beginPath();
  for(let i=0;i<=100;i++){const t=i/100,xp=ox+t*pw,yp=oy-ph*(0.82*t*(1.05-t)*1.4*(1-(0.08/(t+0.08))));i===0?ctx.moveTo(xp,yp):ctx.lineTo(xp,yp);}
  ctx.stroke();
  ctx.fillStyle=colors.growth.dark; ctx.font=`${h*0.025}px Arial`; ctx.textAlign='left';
  ctx.fillText('Growth still positive but\nreduced at low densities',w*0.12,h*0.4);
  ctx.fillStyle='#111'; ctx.font=`bold ${h*0.03}px Arial`; ctx.textAlign='center';
  ctx.fillText('Weak (Facultative) Allee Effect',w*0.5,h*0.08);
}

// ===== METAPOPULATION =====
static drawMetapopulation(ctx, x, y, width, height, component = 'complete') {
  ctx.save();
  ctx.translate(x, y);
  const colors = {
    occupied:  { base: '#2e7d32', light: '#60ad5e', dark: '#1b5e20' },
    empty:     { base: '#9e9e9e', light: '#e0e0e0', dark: '#616161' },
    dispersal: { base: '#1565c0', light: '#64b5f6', dark: '#0d47a1' },
  };
  switch(component) {
    case 'complete':    this.drawCompleteMetapopulation(ctx, colors, width, height); break;
    case 'patches':     this.drawMetapopPatches(ctx, colors, width, height); break;
    case 'colonisation':this.drawMetapopColonisation(ctx, colors, width, height); break;
    case 'extinction':  this.drawMetapopExtinction(ctx, colors, width, height); break;
    default:            this.drawCompleteMetapopulation(ctx, colors, width, height);
  }
  ctx.restore();
}

static drawCompleteMetapopulation(ctx, colors, w, h) {
  // landscape matrix
  ctx.fillStyle='#f5f5f5'; ctx.fillRect(0,0,w,h);
  ctx.fillStyle='#bcaaa4'; // matrix (unsuitable habitat)
  ctx.fillRect(0,0,w,h);

  const patches=[
    {x:0.18,y:0.2,  r:0.09, occupied:true,  label:'A'},
    {x:0.55,y:0.15, r:0.07, occupied:true,  label:'B'},
    {x:0.82,y:0.3,  r:0.08, occupied:false, label:'C (extinct)'},
    {x:0.25,y:0.62, r:0.06, occupied:true,  label:'D'},
    {x:0.6, y:0.55, r:0.1,  occupied:true,  label:'E'},
    {x:0.85,y:0.72, r:0.07, occupied:false, label:'F (empty)'},
    {x:0.15,y:0.85, r:0.05, occupied:false, label:'G'},
    {x:0.5, y:0.85, r:0.08, occupied:true,  label:'H'},
  ];

  const dispersalLinks=[
    [0,1],[0,3],[1,2],[1,4],[3,4],[4,5],[4,7],[6,7],[2,4],[5,7],
  ];

  // dispersal arrows
  dispersalLinks.forEach(([ai,bi])=>{
    const a=patches[ai],b=patches[bi];
    if(a.occupied || b.occupied){
      ctx.strokeStyle=colors.dispersal.base+'88'; ctx.lineWidth=w*0.004; ctx.setLineDash([w*0.01,w*0.008]);
      this.drawArrow(ctx,w*a.x,h*a.y,w*b.x,h*b.y);
      ctx.setLineDash([]);
    }
  });

  // patches
  patches.forEach(p=>{
    const col=p.occupied?colors.occupied:colors.empty;
    const g=ctx.createRadialGradient(w*p.x-w*p.r*0.3,h*p.y-h*p.r*0.3,0,w*p.x,h*p.y,w*p.r);
    g.addColorStop(0,col.light); g.addColorStop(1,col.base);
    ctx.fillStyle=g; ctx.beginPath(); ctx.arc(w*p.x,h*p.y,w*p.r,0,Math.PI*2); ctx.fill();
    ctx.strokeStyle=col.dark; ctx.lineWidth=w*0.004; ctx.stroke();
    ctx.fillStyle='#fff'; ctx.font=`bold ${h*0.025}px Arial`; ctx.textAlign='center';
    ctx.fillText(p.label,w*p.x,h*p.y+h*0.008);
  });

  // legend
  ctx.fillStyle=colors.occupied.base; ctx.fillRect(w*0.02,h*0.92,w*0.04,h*0.04);
  ctx.fillStyle=colors.empty.base;    ctx.fillRect(w*0.22,h*0.92,w*0.04,h*0.04);
  ctx.fillStyle='#111'; ctx.font=`${h*0.026}px Arial`; ctx.textAlign='left';
  ctx.fillText('Occupied patch',w*0.07,h*0.95);
  ctx.fillText('Empty patch',w*0.27,h*0.95);

  ctx.fillStyle='#111'; ctx.font=`bold ${h*0.033}px Arial`; ctx.textAlign='center';
  ctx.fillText('Metapopulation — Patch Network',w*0.5,h*0.05);
}

static drawMetapopPatches(ctx, colors, w, h) {
  ctx.fillStyle='#bcaaa4'; ctx.fillRect(0,0,w,h);
  const patches=[{x:0.2,y:0.5,r:0.1,occ:true},{x:0.5,y:0.3,r:0.13,occ:true},{x:0.8,y:0.5,r:0.08,occ:false},{x:0.5,y:0.72,r:0.09,occ:true}];
  patches.forEach(p=>{
    const col=p.occ?colors.occupied:colors.empty;
    ctx.fillStyle=p.occ?col.base:col.light; ctx.beginPath(); ctx.arc(w*p.x,h*p.y,w*p.r,0,Math.PI*2); ctx.fill();
    ctx.strokeStyle=col.dark; ctx.lineWidth=w*0.005; ctx.stroke();
  });
  ctx.fillStyle='rgba(255,255,255,0.85)'; ctx.font=`bold ${h*0.033}px Arial`; ctx.textAlign='center';
  ctx.fillText('Habitat Patches',w*0.5,h*0.1);
}

static drawMetapopColonisation(ctx, colors, w, h) {
  ctx.fillStyle='#bcaaa4'; ctx.fillRect(0,0,w,h);
  // source patch
  ctx.fillStyle=colors.occupied.base; ctx.beginPath(); ctx.arc(w*0.25,h*0.5,w*0.12,0,Math.PI*2); ctx.fill();
  ctx.strokeStyle=colors.occupied.dark; ctx.lineWidth=w*0.005; ctx.stroke();
  ctx.fillStyle='#fff'; ctx.font=`bold ${h*0.026}px Arial`; ctx.textAlign='center'; ctx.fillText('Source',w*0.25,h*0.5);
  // sink patch (empty)
  ctx.fillStyle=colors.empty.light; ctx.beginPath(); ctx.arc(w*0.75,h*0.5,w*0.1,0,Math.PI*2); ctx.fill();
  ctx.strokeStyle=colors.empty.dark; ctx.lineWidth=w*0.005; ctx.stroke();
  ctx.fillStyle='#555'; ctx.fillText('Empty\n(Sink)',w*0.75,h*0.5);
  // dispersal arrows
  ctx.strokeStyle=colors.dispersal.base; ctx.lineWidth=w*0.007;
  this.drawArrow(ctx,w*0.38,h*0.46,w*0.65,h*0.46);
  this.drawArrow(ctx,w*0.38,h*0.54,w*0.65,h*0.54);
  ctx.fillStyle=colors.dispersal.dark; ctx.font=`${h*0.026}px Arial`;
  ctx.fillText('Colonisation',w*0.5,h*0.38);
  ctx.fillStyle='rgba(255,255,255,0.85)'; ctx.font=`bold ${h*0.03}px Arial`; ctx.textAlign='center';
  ctx.fillText('Metapopulation: Colonisation',w*0.5,h*0.12);
}

static drawMetapopExtinction(ctx, colors, w, h) {
  ctx.fillStyle='#bcaaa4'; ctx.fillRect(0,0,w,h);
  // once-occupied patch going extinct
  ctx.fillStyle=colors.occupied.base+'88'; ctx.beginPath(); ctx.arc(w*0.5,h*0.45,w*0.15,0,Math.PI*2); ctx.fill();
  ctx.strokeStyle=colors.occupied.dark; ctx.lineWidth=w*0.005; ctx.setLineDash([w*0.01,w*0.008]); ctx.stroke(); ctx.setLineDash([]);
  ctx.fillStyle='#fff'; ctx.font=`bold ${h*0.026}px Arial`; ctx.textAlign='center'; ctx.fillText('Local\nExtinction',w*0.5,h*0.45);
  // X cross
  ctx.strokeStyle='#c62828'; ctx.lineWidth=w*0.01;
  ctx.beginPath(); ctx.moveTo(w*0.38,h*0.33); ctx.lineTo(w*0.62,h*0.57); ctx.stroke();
  ctx.beginPath(); ctx.moveTo(w*0.62,h*0.33); ctx.lineTo(w*0.38,h*0.57); ctx.stroke();
  ctx.fillStyle='rgba(255,255,255,0.85)'; ctx.font=`bold ${h*0.03}px Arial`; ctx.textAlign='center';
  ctx.fillText('Metapopulation: Local Extinction',w*0.5,h*0.1);
  ctx.font=`${h*0.025}px Arial`; ctx.fillStyle='#555';
  ctx.fillText('Recolonisation possible from other occupied patches',w*0.5,h*0.82);
}

// ===== BIOMASS PRODUCTIVITY =====
static drawBiomassProductivity(ctx, x, y, width, height, component = 'complete') {
  ctx.save();
  ctx.translate(x, y);
  const colors = {
    gpp: { base: '#f57c00', light: '#ffb74d', dark: '#bf360c' },
    npp: { base: '#2e7d32', light: '#60ad5e', dark: '#1b5e20' },
    resp:{ base: '#c62828', light: '#ef9a9a', dark: '#7f0000' },
  };
  switch(component) {
    case 'complete':   this.drawCompleteProductivity(ctx, colors, width, height); break;
    case 'gpp':        this.drawGPP(ctx, colors, width, height); break;
    case 'npp':        this.drawNPP(ctx, colors, width, height); break;
    case 'comparison': this.drawGPPNPPComparison(ctx, colors, width, height); break;
    default:           this.drawCompleteProductivity(ctx, colors, width, height);
  }
  ctx.restore();
}

static drawCompleteProductivity(ctx, colors, w, h) {
  // sunlight arrow
  ctx.fillStyle='#ffeb3b'; ctx.beginPath(); ctx.arc(w*0.5,h*0.08,w*0.05,0,Math.PI*2); ctx.fill();
  this.drawArrow(ctx,w*0.5,h*0.13,w*0.5,h*0.25);
  // GPP block
  ctx.fillStyle=colors.gpp.light; ctx.fillRect(w*0.1,h*0.28,w*0.8,h*0.12);
  ctx.strokeStyle=colors.gpp.dark; ctx.lineWidth=w*0.004; ctx.strokeRect(w*0.1,h*0.28,w*0.8,h*0.12);
  ctx.fillStyle=colors.gpp.dark; ctx.font=`bold ${h*0.03}px Arial`; ctx.textAlign='center';
  ctx.fillText('GPP = Gross Primary Productivity (all photosynthesis)',w*0.5,h*0.355);
  // split arrow
  this.drawArrow(ctx,w*0.3,h*0.4,w*0.3,h*0.55);
  this.drawArrow(ctx,w*0.7,h*0.4,w*0.7,h*0.55);
  // respiration block
  ctx.fillStyle=colors.resp.light; ctx.fillRect(w*0.52,h*0.55,w*0.38,h*0.12);
  ctx.strokeStyle=colors.resp.dark; ctx.lineWidth=w*0.004; ctx.strokeRect(w*0.52,h*0.55,w*0.38,h*0.12);
  ctx.fillStyle=colors.resp.dark; ctx.font=`${h*0.026}px Arial`; ctx.textAlign='center';
  ctx.fillText('Plant Respiration (Ra)',w*0.71,h*0.62);
  // NPP block
  ctx.fillStyle=colors.npp.light; ctx.fillRect(w*0.1,h*0.55,w*0.38,h*0.12);
  ctx.strokeStyle=colors.npp.dark; ctx.lineWidth=w*0.004; ctx.strokeRect(w*0.1,h*0.55,w*0.38,h*0.12);
  ctx.fillStyle=colors.npp.dark; ctx.font=`bold ${h*0.028}px Arial`; ctx.textAlign='center';
  ctx.fillText('NPP = GPP − Ra',w*0.29,h*0.62);
  // equation
  ctx.fillStyle='#333'; ctx.font=`${h*0.026}px Arial`; ctx.textAlign='center';
  ctx.fillText('NPP = energy available to consumers & decomposers',w*0.5,h*0.82);
  ctx.font=`${h*0.024}px Arial`; ctx.fillText('Typical: NPP ≈ 50% of GPP in plants',w*0.5,h*0.88);
  ctx.fillStyle='#111'; ctx.font=`bold ${h*0.033}px Arial`; ctx.textAlign='center';
  ctx.fillText('Gross vs Net Primary Productivity',w*0.5,h*0.07);
}

static drawGPP(ctx, colors, w, h) {
  ctx.fillStyle='#ffeb3b'; ctx.beginPath(); ctx.arc(w*0.15,h*0.15,w*0.06,0,Math.PI*2); ctx.fill();
  this.drawArrow(ctx,w*0.5,h*0.18,w*0.5,h*0.35);
  this.drawOrganism(ctx,w*0.5,h*0.5,w*0.5,h*0.1,'GPP — Total photosynthesis\n(kJ m⁻² yr⁻¹)',colors.gpp);
  ctx.fillStyle='#333'; ctx.font=`${h*0.025}px Arial`; ctx.textAlign='center';
  ctx.fillText('Includes energy used by plant respiration',w*0.5,h*0.72);
  ctx.fillStyle='#111'; ctx.font=`bold ${h*0.03}px Arial`; ctx.fillText('Gross Primary Productivity (GPP)',w*0.5,h*0.1);
}

static drawNPP(ctx, colors, w, h) {
  this.drawOrganism(ctx,w*0.5,h*0.28,w*0.5,h*0.1,'GPP',colors.gpp);
  this.drawArrow(ctx,w*0.5,h*0.33,w*0.5,h*0.48);
  ctx.fillStyle=colors.resp.base; ctx.font=`${h*0.025}px Arial`; ctx.textAlign='center';
  ctx.fillText('− Plant Respiration (Ra)',w*0.5,h*0.44);
  this.drawOrganism(ctx,w*0.5,h*0.6,w*0.5,h*0.1,'NPP — Net energy for ecosystem',colors.npp);
  ctx.fillStyle='#333'; ctx.font=`${h*0.025}px Arial`; ctx.textAlign='center';
  ctx.fillText('NPP = GPP − Ra',w*0.5,h*0.78);
  ctx.fillStyle='#111'; ctx.font=`bold ${h*0.03}px Arial`; ctx.fillText('Net Primary Productivity (NPP)',w*0.5,h*0.1);
}

static drawGPPNPPComparison(ctx, colors, w, h) {
  // bar chart comparison
  const biomes=[
    {name:'Tropical\nRainforest', gpp:2200,npp:1000},
    {name:'Temperate\nForest',    gpp:1200,npp:600},
    {name:'Grassland',            gpp:600, npp:300},
    {name:'Desert',               gpp:90,  npp:40},
  ];
  const maxVal=2400, bw=w*0.15, gap=w*0.06;
  const ox=w*0.1,oy=h*0.82,ph=h*0.65;
  biomes.forEach((b,i)=>{
    const bx=ox+i*(bw*2+gap);
    ctx.fillStyle=colors.gpp.base; ctx.fillRect(bx,oy-b.gpp/maxVal*ph,bw,b.gpp/maxVal*ph);
    ctx.fillStyle=colors.npp.base; ctx.fillRect(bx+bw,oy-b.npp/maxVal*ph,bw,b.npp/maxVal*ph);
    ctx.fillStyle='#333'; ctx.font=`${h*0.022}px Arial`; ctx.textAlign='center';
    b.name.split('\n').forEach((line,li)=>ctx.fillText(line,bx+bw,oy+h*(0.04+li*0.04)));
    ctx.fillStyle='#fff'; ctx.font=`${h*0.02}px Arial`;
    ctx.fillText(b.gpp,bx+bw/2,oy-b.gpp/maxVal*ph-h*0.01);
    ctx.fillText(b.npp,bx+bw+bw/2,oy-b.npp/maxVal*ph-h*0.01);
  });
  // axes
  ctx.strokeStyle='#333'; ctx.lineWidth=w*0.003;
  ctx.beginPath(); ctx.moveTo(ox,h*0.1); ctx.lineTo(ox,oy); ctx.lineTo(w*0.95,oy); ctx.stroke();
  ctx.fillStyle='#333'; ctx.font=`${h*0.022}px Arial`; ctx.textAlign='center';
  ctx.fillText('g C m⁻² yr⁻¹',ox-w*0.05,h*0.5);
  // legend
  ctx.fillStyle=colors.gpp.base; ctx.fillRect(w*0.65,h*0.08,w*0.04,h*0.03);
  ctx.fillStyle=colors.npp.base; ctx.fillRect(w*0.8,h*0.08,w*0.04,h*0.03);
  ctx.fillStyle='#333'; ctx.font=`${h*0.024}px Arial`; ctx.textAlign='left';
  ctx.fillText('GPP',w*0.7,h*0.1); ctx.fillText('NPP',w*0.85,h*0.1);
  ctx.fillStyle='#111'; ctx.font=`bold ${h*0.03}px Arial`; ctx.textAlign='center';
  ctx.fillText('GPP vs NPP Across Biomes',w*0.5,h*0.06);
}

// ===== TROPHIC EFFICIENCY =====
static drawTrophicEfficiency(ctx, x, y, width, height, component = 'complete') {
  ctx.save();
  ctx.translate(x, y);
  const colors = {
    producer:  { base: '#2e7d32', light: '#60ad5e', dark: '#1b5e20' },
    primary:   { base: '#f57c00', light: '#ffb74d', dark: '#bf360c' },
    secondary: { base: '#1565c0', light: '#64b5f6', dark: '#0d47a1' },
    tertiary:  { base: '#6a1b9a', light: '#ce93d8', dark: '#4a148c' },
    heat:      { base: '#e53935', light: '#ef9a9a', dark: '#b71c1c' },
  };
  switch(component) {
    case 'complete':  this.drawCompleteTrophicEfficiency(ctx, colors, width, height); break;
    case 'transfer':  this.drawEnergyTransfer(ctx, colors, width, height); break;
    case 'lindeman':  this.drawLindemanEfficiency(ctx, colors, width, height); break;
    case 'pyramid':   this.drawEfficiencyPyramid(ctx, colors, width, height); break;
    default:          this.drawCompleteTrophicEfficiency(ctx, colors, width, height);
  }
  ctx.restore();
}

static drawCompleteTrophicEfficiency(ctx, colors, w, h) {
  const levels=[
    {y:0.82,w:0.7, label:'Producers',           val:'10,000 kJ', color:colors.producer},
    {y:0.62,w:0.5, label:'Primary Consumers',    val:'1,000 kJ',  color:colors.primary},
    {y:0.42,w:0.3, label:'Secondary Consumers',  val:'100 kJ',    color:colors.secondary},
    {y:0.22,w:0.12,label:'Tertiary Consumers',   val:'10 kJ',     color:colors.tertiary},
  ];
  const efficiencies=['10% transfer →','10% transfer →','10% transfer →'];

  levels.forEach((lv,i)=>{
    const x0=w*(0.5-lv.w/2),barH=h*0.12;
    const g=ctx.createLinearGradient(x0,0,x0+w*lv.w,0);
    g.addColorStop(0,lv.color.light); g.addColorStop(1,lv.color.base);
    ctx.fillStyle=g; ctx.fillRect(x0,h*lv.y,w*lv.w,barH);
    ctx.strokeStyle=lv.color.dark; ctx.lineWidth=w*0.004; ctx.strokeRect(x0,h*lv.y,w*lv.w,barH);
    ctx.fillStyle='#fff'; ctx.font=`bold ${h*0.026}px Arial`; ctx.textAlign='center';
    ctx.fillText(`${lv.label}  ${lv.val}`,w*0.5,h*lv.y+barH*0.62);
    if(i<3){
      // heat loss
      ctx.strokeStyle=colors.heat.base; ctx.lineWidth=w*0.005;
      this.drawArrow(ctx,w*(0.5+lv.w/2),h*(lv.y+0.06),w*0.9,h*(lv.y+0.06));
      ctx.fillStyle=colors.heat.dark; ctx.font=`${h*0.022}px Arial`; ctx.textAlign='left';
      ctx.fillText(`90% heat loss`,w*0.82,h*(lv.y+0.04));
      // efficiency label
      ctx.fillStyle='#333'; ctx.font=`${h*0.022}px Arial`; ctx.textAlign='center';
      ctx.fillText(efficiencies[i],w*0.5,h*(lv.y-0.02));
    }
  });
  ctx.fillStyle='#111'; ctx.font=`bold ${h*0.033}px Arial`; ctx.textAlign='center';
  ctx.fillText('Trophic Efficiency (Lindeman, ~10% rule)',w*0.5,h*0.08);
}

static drawEnergyTransfer(ctx, colors, w, h) {
  this.drawOrganism(ctx,w*0.5,h*0.25,w*0.35,h*0.09,'Prey: 100 kJ available',colors.primary);
  this.drawArrow(ctx,w*0.5,h*0.3,w*0.5,h*0.48);
  this.drawOrganism(ctx,w*0.5,h*0.55,w*0.35,h*0.09,'Predator: 10 kJ assimilated',colors.secondary);
  ctx.fillStyle=colors.heat.base; ctx.font=`${h*0.026}px Arial`; ctx.textAlign='center';
  ctx.fillText('90 kJ lost as heat, faeces, urine',w*0.5,h*0.42);
  this.drawArrow(ctx,w*0.62,h*0.38,w*0.8,h*0.32);
  ctx.fillStyle='#111'; ctx.font=`bold ${h*0.03}px Arial`; ctx.textAlign='center';
  ctx.fillText('Single Trophic Transfer (~10% efficiency)',w*0.5,h*0.1);
}

static drawLindemanEfficiency(ctx, colors, w, h) {
  // bar chart of ingestion, assimilation, production
  const stages=[
    {label:'Ingested',   pct:100,color:colors.primary},
    {label:'Assimilated',pct:60, color:colors.secondary},
    {label:'Net Production',pct:10,color:colors.producer},
  ];
  const maxH=h*0.55, bw=w*0.15, ox=w*0.18;
  stages.forEach((s,i)=>{
    const bh=maxH*s.pct/100, bx=ox+i*(bw+w*0.1), by=h*0.75-bh;
    ctx.fillStyle=s.color.base; ctx.fillRect(bx,by,bw,bh);
    ctx.strokeStyle=s.color.dark; ctx.lineWidth=w*0.003; ctx.strokeRect(bx,by,bw,bh);
    ctx.fillStyle='#333'; ctx.font=`${h*0.024}px Arial`; ctx.textAlign='center';
    ctx.fillText(`${s.pct}%`,bx+bw/2,by-h*0.02);
    s.label.split(' ').forEach((line,li)=>ctx.fillText(line,bx+bw/2,h*0.8+li*h*0.04));
  });
  // axis
  ctx.strokeStyle='#333'; ctx.lineWidth=w*0.003;
  ctx.beginPath(); ctx.moveTo(ox,h*0.75); ctx.lineTo(ox+w*0.62,h*0.75); ctx.stroke();
  ctx.fillStyle='#111'; ctx.font=`bold ${h*0.03}px Arial`; ctx.textAlign='center';
  ctx.fillText('Lindeman Efficiency Breakdown',w*0.5,h*0.1);
}

static drawEfficiencyPyramid(ctx, colors, w, h) {
  const lvls=[
    {w:0.7,y:0.82,label:'Producers 10,000',  color:colors.producer},
    {w:0.5,y:0.64,label:'1° Consumers 1,000',color:colors.primary},
    {w:0.3,y:0.46,label:'2° Consumers 100',  color:colors.secondary},
    {w:0.1,y:0.28,label:'3° Consumers 10',   color:colors.tertiary},
  ];
  lvls.forEach(lv=>{
    const x0=w*(0.5-lv.w/2),barH=h*0.13;
    ctx.fillStyle=lv.color.base; ctx.fillRect(x0,h*lv.y,w*lv.w,barH);
    ctx.strokeStyle=lv.color.dark; ctx.lineWidth=w*0.003; ctx.strokeRect(x0,h*lv.y,w*lv.w,barH);
    ctx.fillStyle='#fff'; ctx.font=`bold ${h*0.026}px Arial`; ctx.textAlign='center';
    ctx.fillText(lv.label,w*0.5,h*lv.y+barH*0.62);
  });
  ctx.fillStyle='#111'; ctx.font=`bold ${h*0.033}px Arial`; ctx.textAlign='center';
  ctx.fillText('Trophic Efficiency Pyramid (kJ)',w*0.5,h*0.1);
}

// ===== BIOACCUMULATION =====
static drawBioaccumulation(ctx, x, y, width, height, component = 'complete') {
  ctx.save();
  ctx.translate(x, y);
  const colors = {
    water:    { base: '#0288d1', light: '#4fc3f7', dark: '#01579b' },
    phyto:    { base: '#2e7d32', light: '#60ad5e', dark: '#1b5e20' },
    zoo:      { base: '#f57c00', light: '#ffb74d', dark: '#bf360c' },
    small:    { base: '#1565c0', light: '#64b5f6', dark: '#0d47a1' },
    large:    { base: '#6a1b9a', light: '#ce93d8', dark: '#4a148c' },
    toxin:    { base: '#c62828', light: '#ef9a9a', dark: '#7f0000' },
  };
  switch(component) {
    case 'complete':      this.drawCompleteBioaccumulation(ctx, colors, width, height); break;
    case 'water':         this.drawBioaccWater(ctx, colors, width, height); break;
    case 'phytoplankton': this.drawBioaccPhyto(ctx, colors, width, height); break;
    case 'fish':          this.drawBioaccFish(ctx, colors, width, height); break;
    case 'apex':          this.drawBioaccApex(ctx, colors, width, height); break;
    default:              this.drawCompleteBioaccumulation(ctx, colors, width, height);
  }
  ctx.restore();
}

static drawCompleteBioaccumulation(ctx, colors, w, h) {
  // ocean bg
  const bg=ctx.createLinearGradient(0,0,0,h);
  bg.addColorStop(0,'#b3e5fc'); bg.addColorStop(1,'#01579b');
  ctx.fillStyle=bg; ctx.fillRect(0,0,w,h);

  const levels=[
    {x:0.1, y:0.8,  r:0.04, label:'Water\n0.000003 ppm', conc:1,  color:colors.water},
    {x:0.28,y:0.7,  r:0.055,label:'Phyto-\nplankton\n0.04 ppm',conc:2,color:colors.phyto},
    {x:0.48,y:0.57, r:0.07, label:'Zooplankton\n0.5 ppm',  conc:3, color:colors.zoo},
    {x:0.67,y:0.42, r:0.085,label:'Small Fish\n2 ppm',     conc:4, color:colors.small},
    {x:0.85,y:0.24, r:0.1,  label:'Large Fish\n25 ppm',    conc:5, color:colors.large},
  ];

  // arrows
  for(let i=0;i<levels.length-1;i++){
    const a=levels[i],b=levels[i+1];
    ctx.strokeStyle='rgba(255,255,255,0.5)'; ctx.lineWidth=w*0.004; ctx.setLineDash([w*0.008,w*0.007]);
    this.drawArrow(ctx,w*a.x,h*a.y,w*b.x,h*b.y);
    ctx.setLineDash([]);
  }

  // organisms with toxin dots inside
  levels.forEach(lv=>{
    const g=ctx.createRadialGradient(w*lv.x-w*lv.r*0.3,h*lv.y-h*lv.r*0.3,0,w*lv.x,h*lv.y,w*lv.r);
    g.addColorStop(0,lv.color.light); g.addColorStop(1,lv.color.base);
    ctx.fillStyle=g; ctx.beginPath(); ctx.arc(w*lv.x,h*lv.y,w*lv.r,0,Math.PI*2); ctx.fill();
    ctx.strokeStyle=lv.color.dark; ctx.lineWidth=w*0.003; ctx.stroke();
    // toxin dots
    ctx.fillStyle=colors.toxin.base;
    for(let i=0;i<lv.conc*2;i++){
      const a=Math.random()*Math.PI*2, r=Math.random()*w*lv.r*0.7;
      ctx.beginPath(); ctx.arc(w*lv.x+Math.cos(a)*r,h*lv.y+Math.sin(a)*r,w*0.006,0,Math.PI*2); ctx.fill();
    }
    // label
    ctx.fillStyle='rgba(255,255,255,0.85)'; ctx.font=`${h*0.022}px Arial`; ctx.textAlign='center';
    lv.label.split('\n').forEach((line,li)=>ctx.fillText(line,w*lv.x,h*(lv.y+lv.r+0.04+li*0.04)));
  });

  // toxin scale bar
  ctx.fillStyle='rgba(255,255,255,0.8)'; ctx.font=`bold ${h*0.026}px Arial`; ctx.textAlign='left';
  ctx.fillText('● Toxin concentration (DDT/Mercury model)',w*0.02,h*0.1);

  ctx.fillStyle='rgba(255,255,255,0.95)'; ctx.font=`bold ${h*0.033}px Arial`; ctx.textAlign='center';
  ctx.fillText('Bioaccumulation (Biomagnification)',w*0.5,h*0.04);
}

static drawBioaccWater(ctx, colors, w, h) {
  const bg=ctx.createLinearGradient(0,0,0,h); bg.addColorStop(0,'#b3e5fc'); bg.addColorStop(1,'#0288d1');
  ctx.fillStyle=bg; ctx.fillRect(0,0,w,h);
  ctx.fillStyle='rgba(255,255,255,0.85)'; ctx.font=`bold ${h*0.03}px Arial`; ctx.textAlign='center';
  ctx.fillText('Toxin in Water: 0.000003 ppm',w*0.5,h*0.2);
  ctx.fillStyle=colors.toxin.base;
  for(let i=0;i<12;i++){ctx.beginPath();ctx.arc(Math.random()*w,h*(0.3+Math.random()*0.5),w*0.007,0,Math.PI*2);ctx.fill();}
  ctx.fillStyle='rgba(255,255,255,0.85)'; ctx.font=`${h*0.026}px Arial`;
  ctx.fillText('Toxins enter aquatic systems via runoff, industrial waste',w*0.5,h*0.88);
}

static drawBioaccPhyto(ctx, colors, w, h) {
  const bg=ctx.createLinearGradient(0,0,0,h); bg.addColorStop(0,'#b3e5fc'); bg.addColorStop(1,'#0288d1');
  ctx.fillStyle=bg; ctx.fillRect(0,0,w,h);
  for(let i=0;i<6;i++){
    const px=w*(0.15+i*0.14),py=h*0.5;
    ctx.fillStyle=colors.phyto.base; ctx.beginPath(); ctx.arc(px,py,w*0.055,0,Math.PI*2); ctx.fill();
    ctx.fillStyle=colors.toxin.base;
    for(let j=0;j<4;j++){ctx.beginPath();ctx.arc(px+(Math.random()-0.5)*w*0.06,py+(Math.random()-0.5)*h*0.06,w*0.007,0,Math.PI*2);ctx.fill();}
  }
  ctx.fillStyle='rgba(255,255,255,0.85)'; ctx.font=`bold ${h*0.03}px Arial`; ctx.textAlign='center';
  ctx.fillText('Phytoplankton: 0.04 ppm',w*0.5,h*0.18);
  ctx.font=`${h*0.026}px Arial`; ctx.fillText('Filter-feed and accumulate toxins',w*0.5,h*0.82);
}

static drawBioaccFish(ctx, colors, w, h) {
  const bg=ctx.createLinearGradient(0,0,0,h); bg.addColorStop(0,'#0288d1'); bg.addColorStop(1,'#01579b');
  ctx.fillStyle=bg; ctx.fillRect(0,0,w,h);
  // small fish
  this.drawOrganism(ctx,w*0.3,h*0.38,w*0.22,h*0.09,'Small Fish\n2 ppm',colors.small);
  this.drawOrganism(ctx,w*0.7,h*0.62,w*0.24,h*0.09,'Large Fish\n25 ppm',colors.large);
  this.drawArrow(ctx,w*0.41,h*0.42,w*0.58,h*0.58);
  ctx.fillStyle='rgba(255,255,255,0.85)'; ctx.font=`bold ${h*0.03}px Arial`; ctx.textAlign='center';
  ctx.fillText('Bioaccumulation in Fish',w*0.5,h*0.12);
  ctx.font=`${h*0.024}px Arial`; ctx.fillText('Each predator accumulates toxins from many prey',w*0.5,h*0.82);
}

static drawBioaccApex(ctx, colors, w, h) {
  const bg=ctx.createLinearGradient(0,0,0,h); bg.addColorStop(0,'#01579b'); bg.addColorStop(1,'#002f6c');
  ctx.fillStyle=bg; ctx.fillRect(0,0,w,h);
  this.drawOrganism(ctx,w*0.5,h*0.45,w*0.4,h*0.1,'Apex Predator\n(e.g. Eagle, Orca)\n>50 ppm',colors.large);
  ctx.fillStyle='rgba(255,255,255,0.85)'; ctx.font=`bold ${h*0.03}px Arial`; ctx.textAlign='center';
  ctx.fillText('Apex Predator: Highest Toxin Load',w*0.5,h*0.15);
  ctx.font=`${h*0.024}px Arial`;
  ctx.fillText('Eggshell thinning, reproductive failure,',w*0.5,h*0.72);
  ctx.fillText('neurological damage — e.g. DDT & bald eagles',w*0.5,h*0.78);
}

// ===== CLIMATE BIOME GRAPH =====
static drawClimateBiomeGraph(ctx, x, y, width, height, component = 'complete') {
  ctx.save();
  ctx.translate(x, y);
  const colors = {
    tropical:   { base: '#1b5e20', light: '#a5d6a7', dark: '#1b5e20' },
    temperate:  { base: '#1565c0', light: '#bbdefb', dark: '#0d47a1' },
    desert:     { base: '#f57f17', light: '#fff9c4', dark: '#e65100' },
    tundra:     { base: '#78909c', light: '#eceff1', dark: '#546e7a' },
    boreal:     { base: '#00695c', light: '#b2dfdb', dark: '#004d40' },
    savanna:    { base: '#558b2f', light: '#dcedc8', dark: '#33691e' },
    shrubland:  { base: '#f9a825', light: '#fff9c4', dark: '#f57f17' },
    grassland:  { base: '#8bc34a', light: '#dcedc8', dark: '#558b2f' },
  };
  switch(component) {
    case 'complete':  this.drawWhittakerBiomeGraph(ctx, colors, width, height); break;
    case 'tropical':  this.drawBiomeRegion(ctx,'Tropical Rainforest',colors.tropical,width,height,'High temp, high rain'); break;
    case 'desert':    this.drawBiomeRegion(ctx,'Desert',colors.desert,width,height,'High temp, low rain'); break;
    case 'tundra':    this.drawBiomeRegion(ctx,'Tundra',colors.tundra,width,height,'Low temp, low rain'); break;
    case 'boreal':    this.drawBiomeRegion(ctx,'Boreal Forest (Taiga)',colors.boreal,width,height,'Cool, moderate rain'); break;
    case 'grassland': this.drawBiomeRegion(ctx,'Temperate Grassland',colors.grassland,width,height,'Moderate temp, low–moderate rain'); break;
    default:          this.drawWhittakerBiomeGraph(ctx, colors, width, height);
  }
  ctx.restore();
}

static drawWhittakerBiomeGraph(ctx, colors, w, h) {
  // Axes: x=mean annual precipitation (0–400cm), y=mean annual temperature (-15 to 30°C)
  const ox=w*0.12,oy=h*0.88,pw=w*0.82,ph=h*0.78;
  ctx.fillStyle='#fafafa'; ctx.fillRect(ox,oy-ph,pw,ph);
  this._drawAxes(ctx,w,h,'Mean Annual Precipitation (cm) →','Mean Annual Temperature (°C)');

  // biome regions as filled polygons (approximate Whittaker positions)
  const biomes=[
    {label:'Tropical\nRainforest', pts:[[0.7,0.75],[1.0,0.75],[1.0,1.0],[0.7,1.0]],         color:colors.tropical},
    {label:'Tropical\nSeasonal',   pts:[[0.45,0.7],[0.7,0.7],[0.7,1.0],[0.45,1.0]],          color:colors.savanna},
    {label:'Desert',               pts:[[0.0,0.4],[0.25,0.4],[0.25,1.0],[0.0,1.0]],          color:colors.desert},
    {label:'Savanna',              pts:[[0.25,0.65],[0.55,0.65],[0.55,1.0],[0.25,1.0]],       color:colors.shrubland},
    {label:'Temperate\nForest',    pts:[[0.45,0.3],[0.8,0.3],[0.8,0.7],[0.45,0.7]],          color:colors.temperate},
    {label:'Shrubland',            pts:[[0.2,0.35],[0.45,0.35],[0.45,0.65],[0.2,0.65]],      color:colors.shrubland},
    {label:'Temperate\nGrassland', pts:[[0.12,0.3],[0.35,0.3],[0.35,0.55],[0.12,0.55]],      color:colors.grassland},
    {label:'Boreal\nForest',       pts:[[0.2,0.1],[0.7,0.1],[0.7,0.32],[0.2,0.32]],         color:colors.boreal},
    {label:'Tundra',               pts:[[0.0,0.0],[0.5,0.0],[0.5,0.12],[0.0,0.12]],         color:colors.tundra},
  ];

  biomes.forEach(b=>{
    ctx.fillStyle=b.color.light+'cc';
    ctx.strokeStyle=b.color.dark;
    ctx.lineWidth=w*0.003;
    ctx.beginPath();
    b.pts.forEach(([px,py],i)=>{
      const xp=ox+px*pw, yp=oy-py*ph;
      i===0?ctx.moveTo(xp,yp):ctx.lineTo(xp,yp);
    });
    ctx.closePath(); ctx.fill(); ctx.stroke();
    const cx=b.pts.reduce((s,p)=>s+p[0],0)/b.pts.length;
    const cy=b.pts.reduce((s,p)=>s+p[1],0)/b.pts.length;
    ctx.fillStyle=b.color.dark; ctx.font=`${h*0.022}px Arial`; ctx.textAlign='center';
    b.label.split('\n').forEach((line,li)=>ctx.fillText(line,ox+cx*pw,oy-cy*ph+li*h*0.028));
  });

  ctx.fillStyle='#111'; ctx.font=`bold ${h*0.033}px Arial`; ctx.textAlign='center';
  ctx.fillText('Whittaker Biome Classification',w*0.5,h*0.06);
}

static drawBiomeRegion(ctx, name, color, w, h, desc) {
  ctx.fillStyle=color.light; ctx.fillRect(0,0,w,h);
  ctx.fillStyle=color.dark; ctx.font=`bold ${h*0.04}px Arial`; ctx.textAlign='center';
  ctx.fillText(name,w*0.5,h*0.15);
  ctx.fillStyle=color.base; ctx.font=`${h*0.028}px Arial`;
  ctx.fillText(desc,w*0.5,h*0.25);
  // simple climate chart bars
  const months=['J','F','M','A','M','J','J','A','S','O','N','D'];
  const temps  =[28,28,28,27,26,25,24,24,25,26,27,28];
  const rain   =[200,180,250,230,200,150,120,140,180,220,240,210];
  const bw=w*0.055, ox=w*0.08, oy=h*0.7;
  months.forEach((m,i)=>{
    const rh=h*0.3*(rain[i]/300);
    ctx.fillStyle=color.base+'88'; ctx.fillRect(ox+i*bw,oy-rh,bw*0.7,rh);
    ctx.fillStyle='#333'; ctx.font=`${h*0.02}px Arial`; ctx.textAlign='center';
    ctx.fillText(m,ox+i*bw+bw*0.35,oy+h*0.03);
  });
  ctx.strokeStyle=color.dark; ctx.lineWidth=w*0.004;
  ctx.beginPath();
  months.forEach((m,i)=>{const yp=oy-h*0.25*(temps[i]/30);i===0?ctx.moveTo(ox+i*bw+bw*0.35,yp):ctx.lineTo(ox+i*bw+bw*0.35,yp);});
  ctx.stroke();
  ctx.fillStyle='#111'; ctx.font=`${h*0.024}px Arial`; ctx.textAlign='left';
  ctx.fillText('▬ Temperature  ■ Rainfall',w*0.1,h*0.82);
}

// ===== SEASONALITY =====
static drawSeasonality(ctx, x, y, width, height, component = 'complete') {
  ctx.save();
  ctx.translate(x, y);
  const colors = {
    summer: { base: '#f9a825', light: '#fff9c4', dark: '#f57f17' },
    winter: { base: '#5c6bc0', light: '#c5cae9', dark: '#3949ab' },
    spring: { base: '#43a047', light: '#c8e6c9', dark: '#2e7d32' },
    autumn: { base: '#e64a19', light: '#ffccbc', dark: '#bf360c' },
    temp:   { base: '#e53935', light: '#ef9a9a', dark: '#b71c1c' },
    day:    { base: '#ffb300', light: '#fff9c4', dark: '#ff8f00' },
  };
  switch(component) {
    case 'complete':    this.drawCompleteSeasonality(ctx, colors, width, height); break;
    case 'temperature': this.drawSeasonTemperature(ctx, colors, width, height); break;
    case 'daylength':   this.drawSeasonDaylength(ctx, colors, width, height); break;
    case 'four-seasons':this.drawFourSeasons(ctx, colors, width, height); break;
    default:            this.drawCompleteSeasonality(ctx, colors, width, height);
  }
  ctx.restore();
}

static drawCompleteSeasonality(ctx, colors, w, h) {
  this._drawAxes(ctx,w,h,'Month (Jan → Dec) →','Value');
  const ox=w*0.1,oy=h*0.88,pw=w*0.85,ph=h*0.78;
  const months=12;
  const temps=[-5,0,5,12,18,22,25,24,18,11,4,-3];
  const days= [8.5,10,12,14,16,17,17,15,13,11,9,8];

  // temperature curve (red)
  ctx.strokeStyle=colors.temp.base; ctx.lineWidth=w*0.007;
  ctx.beginPath();
  temps.forEach((t,i)=>{
    const xp=ox+i/(months-1)*pw, yp=oy-((t+10)/40)*ph;
    i===0?ctx.moveTo(xp,yp):ctx.lineTo(xp,yp);
  });
  ctx.stroke();

  // day length curve (yellow)
  ctx.strokeStyle=colors.day.base; ctx.lineWidth=w*0.007;
  ctx.beginPath();
  days.forEach((d,i)=>{
    const xp=ox+i/(months-1)*pw, yp=oy-((d-6)/14)*ph;
    i===0?ctx.moveTo(xp,yp):ctx.lineTo(xp,yp);
  });
  ctx.stroke();

  // season shading
  [[0,0.25,'Winter','#5c6bc022'],[0.25,0.5,'Spring','#43a04722'],[0.5,0.75,'Summer','#f9a82522'],[0.75,1,'Autumn','#e64a1922']].forEach(([s,e,lbl,col])=>{
    ctx.fillStyle=col; ctx.fillRect(ox+s*pw,oy-ph,pw*(e-s),ph);
    ctx.fillStyle='#333'; ctx.font=`${h*0.024}px Arial`; ctx.textAlign='center';
    ctx.fillText(lbl,ox+(s+e)/2*pw,h*0.14);
  });

  // month ticks
  ['J','F','M','A','M','J','J','A','S','O','N','D'].forEach((m,i)=>{
    ctx.fillStyle='#333'; ctx.font=`${h*0.022}px Arial`; ctx.textAlign='center';
    ctx.fillText(m,ox+i/(months-1)*pw,oy+h*0.03);
  });

  // legend
  ctx.strokeStyle=colors.temp.base; ctx.lineWidth=w*0.006;
  ctx.beginPath(); ctx.moveTo(w*0.55,h*0.12); ctx.lineTo(w*0.65,h*0.12); ctx.stroke();
  ctx.fillStyle=colors.temp.base; ctx.font=`${h*0.024}px Arial`; ctx.textAlign='left'; ctx.fillText('Temperature',w*0.66,h*0.13);
  ctx.strokeStyle=colors.day.base;
  ctx.beginPath(); ctx.moveTo(w*0.55,h*0.18); ctx.lineTo(w*0.65,h*0.18); ctx.stroke();
  ctx.fillStyle=colors.day.base; ctx.fillText('Day length',w*0.66,h*0.19);

  ctx.fillStyle='#111'; ctx.font=`bold ${h*0.033}px Arial`; ctx.textAlign='center';
  ctx.fillText('Seasonal Variation in Temperate Ecosystem',w*0.5,h*0.06);
}

static drawSeasonTemperature(ctx, colors, w, h) {
  this._drawAxes(ctx,w,h,'Month →','Temperature (°C)');
  const ox=w*0.1,oy=h*0.88,pw=w*0.85,ph=h*0.78;
  const temps=[-5,0,5,12,18,22,25,24,18,11,4,-3];
  ctx.strokeStyle=colors.temp.base; ctx.lineWidth=w*0.008;
  ctx.beginPath();
  temps.forEach((t,i)=>{const xp=ox+i/11*pw,yp=oy-((t+10)/40)*ph;i===0?ctx.moveTo(xp,yp):ctx.lineTo(xp,yp);});
  ctx.stroke();
  ['J','F','M','A','M','J','J','A','S','O','N','D'].forEach((m,i)=>{
    ctx.fillStyle='#333'; ctx.font=`${h*0.022}px Arial`; ctx.textAlign='center';
    ctx.fillText(m,ox+i/11*pw,oy+h*0.03);
  });
  ctx.fillStyle='#111'; ctx.font=`bold ${h*0.03}px Arial`; ctx.textAlign='center';
  ctx.fillText('Seasonal Temperature Variation',w*0.5,h*0.08);
}

static drawSeasonDaylength(ctx, colors, w, h) {
  this._drawAxes(ctx,w,h,'Month →','Day length (hours)');
  const ox=w*0.1,oy=h*0.88,pw=w*0.85,ph=h*0.78;
  const days=[8.5,10,12,14,16,17,17,15,13,11,9,8];
  ctx.strokeStyle=colors.day.base; ctx.lineWidth=w*0.008;
  ctx.beginPath();
  days.forEach((d,i)=>{const xp=ox+i/11*pw,yp=oy-((d-6)/14)*ph;i===0?ctx.moveTo(xp,yp):ctx.lineTo(xp,yp);});
  ctx.stroke();
  ['J','F','M','A','M','J','J','A','S','O','N','D'].forEach((m,i)=>{
    ctx.fillStyle='#333'; ctx.font=`${h*0.022}px Arial`; ctx.textAlign='center';
    ctx.fillText(m,ox+i/11*pw,oy+h*0.03);
  });
  ctx.fillStyle='#111'; ctx.font=`bold ${h*0.03}px Arial`; ctx.textAlign='center';
  ctx.fillText('Seasonal Day Length Variation',w*0.5,h*0.08);
}

static drawFourSeasons(ctx, colors, w, h) {
  const seasons=[
    {x:0,   y:0,   color:colors.winter, name:'Winter', desc:'Short days, cold,\ndormancy'},
    {x:0.5, y:0,   color:colors.spring, name:'Spring', desc:'Increasing day,\nflowering, migration'},
    {x:0,   y:0.5, color:colors.summer, name:'Summer', desc:'Long days, warm,\npeak growth'},
    {x:0.5, y:0.5, color:colors.autumn, name:'Autumn', desc:'Decreasing day,\nleaf fall, migration'},
  ];
  seasons.forEach(s=>{
    ctx.fillStyle=s.color.light; ctx.fillRect(w*s.x,h*s.y,w*0.5,h*0.5);
    ctx.strokeStyle=s.color.dark; ctx.lineWidth=w*0.003; ctx.strokeRect(w*s.x,h*s.y,w*0.5,h*0.5);
    ctx.fillStyle=s.color.dark; ctx.font=`bold ${h*0.032}px Arial`; ctx.textAlign='center';
    ctx.fillText(s.name,w*(s.x+0.25),h*(s.y+0.18));
    ctx.fillStyle='#333'; ctx.font=`${h*0.025}px Arial`;
    s.desc.split('\n').forEach((line,i)=>ctx.fillText(line,w*(s.x+0.25),h*(s.y+0.3+i*0.07)));
  });
  ctx.fillStyle='#111'; ctx.font=`bold ${h*0.033}px Arial`; ctx.textAlign='center';
  ctx.fillText('The Four Seasons',w*0.5,h*0.005);
}

// ===== TIDAL ZONES =====
static drawTidalZones(ctx, x, y, width, height, component = 'complete') {
  ctx.save();
  ctx.translate(x, y);
  const colors = {
    splash:    { base: '#90a4ae', light: '#eceff1', dark: '#546e7a' },
    high:      { base: '#0288d1', light: '#b3e5fc', dark: '#01579b' },
    mid:       { base: '#0277bd', light: '#81d4fa', dark: '#01579b' },

    low:       { base: '#01579b', light: '#4fc3f7', dark: '#002f6c' },
    sublittoral:{ base: '#002f6c', light: '#0288d1', dark: '#000a1a' },
  };
  switch(component) {
    case 'complete':     this.drawCompleteTidalZones(ctx, colors, width, height); break;
    case 'splash':       this.drawSplashZone(ctx, colors, width, height); break;
    case 'high-tide':    this.drawHighTideZone(ctx, colors, width, height); break;
    case 'mid-tide':     this.drawMidTideZone(ctx, colors, width, height); break;
    case 'low-tide':     this.drawLowTideZone(ctx, colors, width, height); break;
    case 'sublittoral':  this.drawSublittoralZone(ctx, colors, width, height); break;
    default:             this.drawCompleteTidalZones(ctx, colors, width, height);
  }
  ctx.restore();
}

static drawCompleteTidalZones(ctx, colors, w, h) {
  const zones = [
    { frac:0.12, color:'#b0bec5', label:'Splash Zone',          organisms:'Lichens, Periwinkles' },
    { frac:0.2,  color:'#4fc3f7', label:'High Intertidal',      organisms:'Barnacles, Limpets' },
    { frac:0.22, color:'#0288d1', label:'Mid Intertidal',        organisms:'Mussels, Sea stars' },
    { frac:0.22, color:'#0277bd', label:'Low Intertidal',        organisms:'Kelp, Urchins, Crabs' },
    { frac:0.24, color:'#01579b', label:'Sublittoral (Subtidal)',organisms:'Fish, Coral, Anemones' },
  ];

  let y = h * 0.05;
  const x0 = w * 0.02, bw = w * 0.55;

  zones.forEach((zone) => {
    const zh = h * zone.frac;
    ctx.fillStyle = zone.color;
    ctx.fillRect(x0, y, bw, zh);
    ctx.strokeStyle = 'rgba(0,0,0,0.2)';
    ctx.lineWidth = 1;
    ctx.strokeRect(x0, y, bw, zh);

    // wave texture on water zones
    if (zone.color !== '#b0bec5') {
      ctx.strokeStyle = 'rgba(255,255,255,0.25)';
      ctx.lineWidth = w * 0.003;
      for (let i = 1; i < 4; i++) {
        ctx.beginPath();
        ctx.moveTo(x0, y + zh * i / 4);
        ctx.bezierCurveTo(x0 + bw * 0.25, y + zh * i / 4 - zh * 0.04,
          x0 + bw * 0.75, y + zh * i / 4 + zh * 0.04, x0 + bw, y + zh * i / 4);
        ctx.stroke();
      }
    }

    ctx.fillStyle = '#fff';
    ctx.font = `bold ${h * 0.025}px Arial`;
    ctx.textAlign = 'left';
    ctx.fillText(zone.label, x0 + w * 0.01, y + zh * 0.45);
    ctx.font = `${h * 0.022}px Arial`;
    ctx.fillStyle = 'rgba(255,255,255,0.85)';
    ctx.fillText(zone.organisms, x0 + w * 0.01, y + zh * 0.72);

    // label line to right
    ctx.strokeStyle = '#555';
    ctx.lineWidth = w * 0.002;
    ctx.beginPath();
    ctx.moveTo(x0 + bw, y + zh * 0.5);
    ctx.lineTo(x0 + bw + w * 0.03, y + zh * 0.5);
    ctx.stroke();

    y += zh;
  });

  // tide markers
  ctx.strokeStyle = '#0288d1';
  ctx.lineWidth = w * 0.004;
  ctx.setLineDash([w * 0.01, w * 0.007]);
  const highTideY = h * 0.17, lowTideY = h * 0.59;
  ctx.beginPath(); ctx.moveTo(x0 + bw + w * 0.03, highTideY); ctx.lineTo(x0 + bw + w * 0.14, highTideY); ctx.stroke();
  ctx.beginPath(); ctx.moveTo(x0 + bw + w * 0.03, lowTideY);  ctx.lineTo(x0 + bw + w * 0.14, lowTideY);  ctx.stroke();
  ctx.setLineDash([]);
  ctx.fillStyle = '#0288d1'; ctx.font = `bold ${h * 0.024}px Arial`; ctx.textAlign = 'left';
  ctx.fillText('High Tide', x0 + bw + w * 0.15, highTideY + h * 0.01);
  ctx.fillText('Low Tide',  x0 + bw + w * 0.15, lowTideY  + h * 0.01);

  ctx.fillStyle = '#111'; ctx.font = `bold ${h * 0.033}px Arial`; ctx.textAlign = 'center';
  ctx.fillText('Intertidal Zonation', w * 0.5, h * 0.97);
}

static drawSplashZone(ctx, colors, w, h) {
  ctx.fillStyle = '#b0bec5'; ctx.fillRect(0, 0, w, h);
  ctx.fillStyle = colors.splash.dark; ctx.font = `bold ${h * 0.035}px Arial`; ctx.textAlign = 'center';
  ctx.fillText('Splash Zone', w * 0.5, h * 0.12);
  // lichens and periwinkles
  ['Lichen patches', 'Periwinkle snails', 'Rock barnacles'].forEach((org, i) => {
    this.drawOrganism(ctx, w * (0.22 + i * 0.28), h * 0.5, w * 0.2, h * 0.08, org, colors.splash);
  });
  ctx.fillStyle = '#333'; ctx.font = `${h * 0.026}px Arial`; ctx.textAlign = 'center';
  ctx.fillText('Rarely submerged — extreme desiccation & wave spray', w * 0.5, h * 0.82);
}

static drawHighTideZone(ctx, colors, w, h) {
  const bg = ctx.createLinearGradient(0, 0, 0, h);
  bg.addColorStop(0, '#b0bec5'); bg.addColorStop(0.3, '#4fc3f7'); bg.addColorStop(1, '#0288d1');
  ctx.fillStyle = bg; ctx.fillRect(0, 0, w, h);
  ctx.fillStyle = 'rgba(255,255,255,0.9)'; ctx.font = `bold ${h * 0.035}px Arial`; ctx.textAlign = 'center';
  ctx.fillText('High Intertidal Zone', w * 0.5, h * 0.1);
  ['Barnacles', 'Limpets', 'Periwinkles'].forEach((org, i) => {
    this.drawOrganism(ctx, w * (0.2 + i * 0.3), h * 0.5, w * 0.22, h * 0.08, org, colors.high);
  });
  ctx.fillStyle = 'rgba(255,255,255,0.85)'; ctx.font = `${h * 0.026}px Arial`;
  ctx.fillText('Submerged only at high tide — tolerates air exposure', w * 0.5, h * 0.82);
}

static drawMidTideZone(ctx, colors, w, h) {
  const bg = ctx.createLinearGradient(0, 0, 0, h);
  bg.addColorStop(0, '#4fc3f7'); bg.addColorStop(1, '#0277bd');
  ctx.fillStyle = bg; ctx.fillRect(0, 0, w, h);
  ctx.fillStyle = 'rgba(255,255,255,0.9)'; ctx.font = `bold ${h * 0.035}px Arial`; ctx.textAlign = 'center';
  ctx.fillText('Mid Intertidal Zone', w * 0.5, h * 0.1);
  ['Mussels', 'Sea Stars', 'Chitons'].forEach((org, i) => {
    this.drawOrganism(ctx, w * (0.2 + i * 0.3), h * 0.5, w * 0.22, h * 0.08, org, colors.mid);
  });
  ctx.fillStyle = 'rgba(255,255,255,0.85)'; ctx.font = `${h * 0.026}px Arial`;
  ctx.fillText('Exposed twice daily — high biodiversity & competition', w * 0.5, h * 0.82);
}

static drawLowTideZone(ctx, colors, w, h) {
  const bg = ctx.createLinearGradient(0, 0, 0, h);
  bg.addColorStop(0, '#0288d1'); bg.addColorStop(1, '#01579b');
  ctx.fillStyle = bg; ctx.fillRect(0, 0, w, h);
  ctx.fillStyle = 'rgba(255,255,255,0.9)'; ctx.font = `bold ${h * 0.035}px Arial`; ctx.textAlign = 'center';
  ctx.fillText('Low Intertidal Zone', w * 0.5, h * 0.1);
  ['Kelp', 'Sea Urchins', 'Crabs', 'Nudibranchs'].forEach((org, i) => {
    this.drawOrganism(ctx, w * (0.15 + i * 0.23), h * 0.5, w * 0.18, h * 0.08, org, colors.low);
  });
  ctx.fillStyle = 'rgba(255,255,255,0.85)'; ctx.font = `${h * 0.026}px Arial`;
  ctx.fillText('Exposed only at extreme low tides — rich diversity', w * 0.5, h * 0.82);
}

static drawSublittoralZone(ctx, colors, w, h) {
  const bg = ctx.createLinearGradient(0, 0, 0, h);
  bg.addColorStop(0, '#01579b'); bg.addColorStop(1, '#002f6c');
  ctx.fillStyle = bg; ctx.fillRect(0, 0, w, h);
  ctx.fillStyle = 'rgba(255,255,255,0.9)'; ctx.font = `bold ${h * 0.035}px Arial`; ctx.textAlign = 'center';
  ctx.fillText('Sublittoral Zone (always submerged)', w * 0.5, h * 0.1);
  ['Fish', 'Coral', 'Sea Anemones', 'Lobster'].forEach((org, i) => {
    this.drawOrganism(ctx, w * (0.12 + i * 0.24), h * 0.5, w * 0.2, h * 0.08, org, colors.sublittoral);
  });
  ctx.fillStyle = 'rgba(255,255,255,0.85)'; ctx.font = `${h * 0.026}px Arial`;
  ctx.fillText('Never exposed to air — permanent marine habitat', w * 0.5, h * 0.82);
}

// ===== LAKE STRATIFICATION =====
static drawLakeStratification(ctx, x, y, width, height, component = 'complete') {
  ctx.save();
  ctx.translate(x, y);
  const colors = {
    epilimnion:  { base: '#4fc3f7', light: '#b3e5fc', dark: '#0288d1' },
    thermocline: { base: '#0288d1', light: '#81d4fa', dark: '#01579b' },
    hypolimnion: { base: '#01579b', light: '#0288d1', dark: '#002f6c' },
    sediment:    { base: '#5d4037', light: '#a1887f', dark: '#3e2723' },
    turnover:    { base: '#43a047', light: '#c8e6c9', dark: '#2e7d32' },
  };
  switch(component) {
    case 'complete':    this.drawCompleteLakeStratification(ctx, colors, width, height); break;
    case 'summer':      this.drawSummerStratification(ctx, colors, width, height); break;
    case 'winter':      this.drawWinterStratification(ctx, colors, width, height); break;
    case 'turnover':    this.drawSeasonalTurnover(ctx, colors, width, height); break;
    case 'thermocline': this.drawThermoclineDetail(ctx, colors, width, height); break;
    default:            this.drawCompleteLakeStratification(ctx, colors, width, height);
  }
  ctx.restore();
}

static drawCompleteLakeStratification(ctx, colors, w, h) {
  // four season panels
  const seasons = [
    { x: 0,    label: 'Summer',  layers: [
      { frac: 0.25, color: '#4fc3f7', label: 'Epilimnion\n(warm, 20–25°C)' },
      { frac: 0.18, color: '#0288d1', label: 'Thermocline\n(rapid temp drop)' },
      { frac: 0.32, color: '#01579b', label: 'Hypolimnion\n(cold, 4–8°C)' },
      { frac: 0.1,  color: '#5d4037', label: 'Sediment' },
    ]},
    { x: 0.26, label: 'Autumn\nTurnover', layers: [
      { frac: 0.65, color: '#2196f3', label: 'Mixing\n(uniform temp)' },
      { frac: 0.1,  color: '#5d4037', label: 'Sediment' },
    ]},
    { x: 0.52, label: 'Winter', layers: [
      { frac: 0.06, color: '#e3f2fd', label: 'Ice' },
      { frac: 0.59, color: '#0277bd', label: 'Cold water\n(0–4°C, inverse\nstratification)' },
      { frac: 0.1,  color: '#5d4037', label: 'Sediment' },
    ]},
    { x: 0.76, label: 'Spring\nTurnover', layers: [
      { frac: 0.65, color: '#26c6da', label: 'Mixing\n(uniform temp)' },
      { frac: 0.1,  color: '#5d4037', label: 'Sediment' },
    ]},
  ];

  const panelW = w * 0.25, y0 = h * 0.12, lakeH = h * 0.8;
  seasons.forEach(s => {
    const px = w * s.x;
    let ly = y0;
    s.layers.forEach(layer => {
      const lh = lakeH * layer.frac;
      ctx.fillStyle = layer.color;
      ctx.fillRect(px, ly, panelW - w * 0.01, lh);
      ctx.strokeStyle = 'rgba(0,0,0,0.15)'; ctx.lineWidth = 1;
      ctx.strokeRect(px, ly, panelW - w * 0.01, lh);
      ctx.fillStyle = 'rgba(255,255,255,0.85)';
      ctx.font = `${h * 0.021}px Arial`; ctx.textAlign = 'center';
      layer.label.split('\n').forEach((line, li) =>
        ctx.fillText(line, px + panelW / 2 - w * 0.005, ly + lh * 0.35 + li * h * 0.038));
      ly += lh;
    });
    // season label
    ctx.fillStyle = '#111'; ctx.font = `bold ${h * 0.028}px Arial`; ctx.textAlign = 'center';
    s.label.split('\n').forEach((line, li) =>
      ctx.fillText(line, px + panelW / 2 - w * 0.005, h * 0.07 + li * h * 0.035));
  });

  ctx.fillStyle = '#111'; ctx.font = `bold ${h * 0.033}px Arial`; ctx.textAlign = 'center';
  ctx.fillText('Lake Thermal Stratification & Seasonal Turnover', w * 0.5, h * 0.97);
}

static drawSummerStratification(ctx, colors, w, h) {
  const layers = [
    { frac: 0.28, color: colors.epilimnion.base,  label: 'Epilimnion',  temp: '20–25°C', desc: 'Warm, wind-mixed, O₂ rich' },
    { frac: 0.2,  color: colors.thermocline.base, label: 'Thermocline', temp: '10–20°C', desc: 'Rapid temperature drop' },
    { frac: 0.37, color: colors.hypolimnion.base, label: 'Hypolimnion', temp: '4–8°C',   desc: 'Cold, dark, O₂ depleted' },
    { frac: 0.1,  color: colors.sediment.base,    label: 'Sediment',    temp: '~4°C',    desc: 'Anaerobic decomposition' },
  ];
  let y = h * 0.08;
  layers.forEach(lv => {
    const lh = h * lv.frac;
    ctx.fillStyle = lv.color;
    ctx.fillRect(w * 0.1, y, w * 0.55, lh);
    ctx.strokeStyle = 'rgba(0,0,0,0.2)'; ctx.lineWidth = 1;
    ctx.strokeRect(w * 0.1, y, w * 0.55, lh);
    ctx.fillStyle = '#fff'; ctx.font = `bold ${h * 0.026}px Arial`; ctx.textAlign = 'left';
    ctx.fillText(`${lv.label}  ${lv.temp}`, w * 0.12, y + lh * 0.45);
    ctx.font = `${h * 0.022}px Arial`; ctx.fillStyle = 'rgba(255,255,255,0.8)';
    ctx.fillText(lv.desc, w * 0.12, y + lh * 0.72);
    y += lh;
  });
  // temperature profile curve on right
  const ox = w * 0.72, oy = h * 0.08, ph = h * 0.85, pw = w * 0.2;
  ctx.strokeStyle = '#e53935'; ctx.lineWidth = w * 0.006;
  ctx.beginPath();
  [[0, 0.95], [0.1, 0.85], [0.28, 0.75], [0.48, 0.3], [0.68, 0.08], [0.85, 0.05], [0.95, 0.04]].forEach(([t, xf], i) => {
    i === 0 ? ctx.moveTo(ox + xf * pw, oy + t * ph) : ctx.lineTo(ox + xf * pw, oy + t * ph);
  });
  ctx.stroke();
  ctx.strokeStyle = '#333'; ctx.lineWidth = w * 0.003;
  ctx.beginPath(); ctx.moveTo(ox, oy); ctx.lineTo(ox, oy + ph); ctx.stroke();
  ctx.fillStyle = '#e53935'; ctx.font = `${h * 0.022}px Arial`; ctx.textAlign = 'center';
  ctx.fillText('Temperature →', ox + pw * 0.5, oy - h * 0.01);
  ctx.fillStyle = '#111'; ctx.font = `bold ${h * 0.033}px Arial`; ctx.textAlign = 'center';
  ctx.fillText('Summer Lake Stratification', w * 0.5, h * 0.04);
}

static drawWinterStratification(ctx, colors, w, h) {
  const layers = [
    { frac: 0.07, color: '#e3f2fd', label: 'Ice cover',    temp: '0°C' },
    { frac: 0.18, color: '#b3e5fc', label: '0–1°C water',  temp: '0–1°C' },
    { frac: 0.5,  color: colors.hypolimnion.base, label: 'Cold water\n(inverse stratification)', temp: '1–4°C' },
    { frac: 0.1,  color: colors.sediment.base, label: 'Sediment', temp: '~4°C' },
  ];
  let y = h * 0.1;
  layers.forEach(lv => {
    const lh = h * lv.frac;
    ctx.fillStyle = lv.color; ctx.fillRect(w * 0.1, y, w * 0.6, lh);
    ctx.strokeStyle = 'rgba(0,0,0,0.2)'; ctx.lineWidth = 1; ctx.strokeRect(w * 0.1, y, w * 0.6, lh);
    ctx.fillStyle = lv.color === '#e3f2fd' ? '#333' : '#fff';
    ctx.font = `${h * 0.025}px Arial`; ctx.textAlign = 'left';
    lv.label.split('\n').forEach((line, li) => ctx.fillText(`${line}  ${li === 0 ? lv.temp : ''}`, w * 0.12, y + lh * 0.45 + li * h * 0.04));
    y += lh;
  });
  ctx.fillStyle = '#111'; ctx.font = `bold ${h * 0.033}px Arial`; ctx.textAlign = 'center';
  ctx.fillText('Winter Lake Stratification', w * 0.5, h * 0.06);
  ctx.font = `${h * 0.025}px Arial`; ctx.fillStyle = '#555';
  ctx.fillText('Densest water (4°C) sinks — ice floats', w * 0.5, h * 0.91);
}

static drawSeasonalTurnover(ctx, colors, w, h) {
  // arrows showing mixing
  const bg = ctx.createLinearGradient(0, h * 0.1, 0, h * 0.85);
  bg.addColorStop(0, '#4fc3f7'); bg.addColorStop(1, '#01579b');
  ctx.fillStyle = bg; ctx.fillRect(w * 0.15, h * 0.1, w * 0.7, h * 0.75);
  ctx.strokeStyle = '#0288d1'; ctx.lineWidth = w * 0.004;
  ctx.strokeRect(w * 0.15, h * 0.1, w * 0.7, h * 0.75);

  // circular mixing arrows
  const cx = w * 0.5, cy = h * 0.48;
  [[-1, 1], [1, -1]].forEach(([dx, dy]) => {
    ctx.strokeStyle = 'rgba(255,255,255,0.7)'; ctx.lineWidth = w * 0.006;
    ctx.beginPath();
    ctx.arc(cx + dx * w * 0.1, cy + dy * h * 0.08, w * 0.12, 0, Math.PI * 1.7);
    ctx.stroke();
    // arrowhead
    ctx.fillStyle = 'rgba(255,255,255,0.7)';
    const ax = cx + dx * w * 0.1 + Math.cos(Math.PI * 1.7) * w * 0.12;
    const ay = cy + dy * h * 0.08 + Math.sin(Math.PI * 1.7) * w * 0.12;
    ctx.beginPath(); ctx.arc(ax, ay, w * 0.015, 0, Math.PI * 2); ctx.fill();
  });

  ctx.fillStyle = 'rgba(255,255,255,0.9)'; ctx.font = `bold ${h * 0.03}px Arial`; ctx.textAlign = 'center';
  ctx.fillText('Uniform temperature', cx, cy - h * 0.22);
  ctx.fillText('→ full water column mixing', cx, cy - h * 0.15);
  ctx.fillText('Nutrients upwelled, O₂ redistributed', cx, cy + h * 0.28);
  ctx.fillStyle = '#111'; ctx.font = `bold ${h * 0.033}px Arial`; ctx.textAlign = 'center';
  ctx.fillText('Seasonal Turnover (Spring & Autumn)', w * 0.5, h * 0.06);
}

static drawThermoclineDetail(ctx, colors, w, h) {
  this._drawAxes(ctx, w, h, 'Temperature (°C) →', 'Depth →');
  const ox = w * 0.12, oy = h * 0.1, ph = h * 0.8, pw = w * 0.8;

  // inverted depth axis: shallow at top
  const profile = [[25, 0], [24, 0.1], [22, 0.2], [18, 0.3], [10, 0.42], [6, 0.55], [5, 0.65], [4.5, 0.75], [4, 0.85], [4, 0.95]];
  ctx.strokeStyle = colors.thermocline.base; ctx.lineWidth = w * 0.007;
  ctx.beginPath();
  profile.forEach(([temp, depth], i) => {
    const xp = ox + (temp / 30) * pw, yp = oy + depth * ph;
    i === 0 ? ctx.moveTo(xp, yp) : ctx.lineTo(xp, yp);
  });
  ctx.stroke();

  // thermocline band
  ctx.fillStyle = 'rgba(2,136,209,0.2)';
  ctx.fillRect(ox, oy + h * 0.28, pw, h * 0.27);
  ctx.strokeStyle = colors.thermocline.dark; ctx.lineWidth = w * 0.003; ctx.setLineDash([w * 0.01, w * 0.007]);
  ctx.beginPath(); ctx.moveTo(ox, oy + h * 0.28); ctx.lineTo(ox + pw, oy + h * 0.28); ctx.stroke();
  ctx.beginPath(); ctx.moveTo(ox, oy + h * 0.55); ctx.lineTo(ox + pw, oy + h * 0.55); ctx.stroke();
  ctx.setLineDash([]);
  ctx.fillStyle = colors.thermocline.dark; ctx.font = `bold ${h * 0.026}px Arial`; ctx.textAlign = 'right';
  ctx.fillText('Thermocline', ox + pw, oy + h * 0.4);

  ctx.fillStyle = '#111'; ctx.font = `bold ${h * 0.03}px Arial`; ctx.textAlign = 'center';
  ctx.fillText('Thermocline Temperature Profile', w * 0.5, h * 0.06);
}

// ===== CORAL REEF ZONES =====
static drawCoralReefZones(ctx, x, y, width, height, component = 'complete') {
  ctx.save();
  ctx.translate(x, y);
  const colors = {
    lagoon:   { base: '#4fc3f7', light: '#e1f5fe', dark: '#0288d1' },
    flat:     { base: '#f57c00', light: '#ffe0b2', dark: '#bf360c' },
    crest:    { base: '#e53935', light: '#ffcdd2', dark: '#b71c1c' },
    fore:     { base: '#1565c0', light: '#bbdefb', dark: '#0d47a1' },
    deep:     { base: '#002f6c', light: '#0288d1', dark: '#000a1a' },
  };
  switch(component) {
    case 'complete': this.drawCompleteCoralReef(ctx, colors, width, height); break;
    case 'lagoon':   this.drawLagoon(ctx, colors, width, height); break;
    case 'crest':    this.drawReefCrest(ctx, colors, width, height); break;
    case 'fore-reef':this.drawForeReef(ctx, colors, width, height); break;
    case 'deep':     this.drawDeepReef(ctx, colors, width, height); break;
    default:         this.drawCompleteCoralReef(ctx, colors, width, height);
  }
  ctx.restore();
}

static drawCompleteCoralReef(ctx, colors, w, h) {
  // cross-section of reef
  const bg = ctx.createLinearGradient(0, 0, 0, h);
  bg.addColorStop(0, '#b3e5fc'); bg.addColorStop(0.5, '#0288d1'); bg.addColorStop(1, '#002f6c');
  ctx.fillStyle = bg; ctx.fillRect(0, 0, w, h);

  // seafloor profile
  const floor = [[0, 0.7], [0.15, 0.68], [0.3, 0.62], [0.42, 0.45], [0.5, 0.42], [0.58, 0.47], [0.7, 0.6], [0.85, 0.72], [1, 0.75]];
  ctx.fillStyle = '#f5f5dc';
  ctx.beginPath(); ctx.moveTo(0, h);
  floor.forEach(([fx, fy]) => ctx.lineTo(w * fx, h * fy));
  ctx.lineTo(w, h); ctx.closePath(); ctx.fill();

  // coral structures on floor
  const corals = [
    { x: 0.08, y: 0.65, color: '#ef9a9a', h: 0.06 },
    { x: 0.2,  y: 0.6,  color: '#f48fb1', h: 0.08 },
    { x: 0.45, y: 0.4,  color: '#e91e63', h: 0.1  },
    { x: 0.55, y: 0.44, color: '#ce93d8', h: 0.08 },
    { x: 0.72, y: 0.57, color: '#80cbc4', h: 0.06 },
    { x: 0.88, y: 0.68, color: '#a5d6a7', h: 0.05 },
  ];
  corals.forEach(c => {
    ctx.fillStyle = c.color;
    ctx.beginPath(); ctx.arc(w * c.x, h * (c.y - c.h / 2), w * 0.035, 0, Math.PI * 2); ctx.fill();
    ctx.fillRect(w * c.x - w * 0.008, h * c.y - h * c.h / 2, w * 0.016, h * c.h);
  });

  // zone labels
  const zones = [
    { x: 0.08, label: 'Lagoon',      color: '#fff' },
    { x: 0.3,  label: 'Reef Flat',   color: '#fff' },
    { x: 0.5,  label: 'Reef Crest',  color: '#ffe' },
    { x: 0.7,  label: 'Fore-Reef',   color: '#ddf' },
    { x: 0.88, label: 'Deep Reef',   color: '#bbf' },
  ];
  zones.forEach(z => {
    ctx.fillStyle = z.color; ctx.font = `bold ${h * 0.026}px Arial`; ctx.textAlign = 'center';
    ctx.fillText(z.label, w * z.x, h * 0.28);
    ctx.strokeStyle = 'rgba(255,255,255,0.4)'; ctx.lineWidth = w * 0.002; ctx.setLineDash([w * 0.007, w * 0.007]);
    ctx.beginPath(); ctx.moveTo(w * z.x, h * 0.3); ctx.lineTo(w * z.x, h * 0.48); ctx.stroke();
    ctx.setLineDash([]);
  });

  // organisms
  const organisms = [
    { x: 0.08, y: 0.18, label: 'Sea Grass\nTurtles',   color: { base: '#43a047', light: '#c8e6c9', dark: '#2e7d32' } },
    { x: 0.5,  y: 0.15, label: 'Coral\nClownfish',     color: { base: '#e91e63', light: '#f8bbd0', dark: '#880e4f' } },
    { x: 0.78, y: 0.18, label: 'Shark\nBarracuda',     color: { base: '#1565c0', light: '#bbdefb', dark: '#0d47a1' } },
  ];
  organisms.forEach(o => this.drawOrganism(ctx, w * o.x, h * o.y, w * 0.18, h * 0.065, o.label, o.color));

  ctx.fillStyle = 'rgba(255,255,255,0.95)'; ctx.font = `bold ${h * 0.033}px Arial`; ctx.textAlign = 'center';
  ctx.fillText('Coral Reef Zones', w * 0.5, h * 0.05);
}

static drawLagoon(ctx, colors, w, h) {
  const bg = ctx.createLinearGradient(0, 0, 0, h);
  bg.addColorStop(0, '#e1f5fe'); bg.addColorStop(1, '#4fc3f7');
  ctx.fillStyle = bg; ctx.fillRect(0, 0, w, h);
  ctx.fillStyle = '#f5f5dc'; ctx.fillRect(0, h * 0.7, w, h * 0.3);
  ['Sea Grass', 'Dugong', 'Sea Turtle', 'Juvenile Fish'].forEach((org, i) => {
    this.drawOrganism(ctx, w * (0.15 + i * 0.23), h * 0.5, w * 0.18, h * 0.08, org, colors.lagoon);
  });
  ctx.fillStyle = '#111'; ctx.font = `bold ${h * 0.033}px Arial`; ctx.textAlign = 'center';
  ctx.fillText('Lagoon Zone — Calm, Shallow Water', w * 0.5, h * 0.12);
  ctx.font = `${h * 0.025}px Arial`; ctx.fillStyle = '#555';
  ctx.fillText('Protected from wave action — nursery habitat', w * 0.5, h * 0.88);
}

static drawReefCrest(ctx, colors, w, h) {
  const bg = ctx.createLinearGradient(0, 0, 0, h);
  bg.addColorStop(0, '#b3e5fc'); bg.addColorStop(1, '#f57c00');
  ctx.fillStyle = bg; ctx.fillRect(0, 0, w, h);
  ctx.fillStyle = '#f5f5dc'; ctx.fillRect(0, h * 0.65, w, h * 0.35);
  // wave
  ctx.strokeStyle = '#fff'; ctx.lineWidth = w * 0.01;
  ctx.beginPath(); ctx.moveTo(0, h * 0.2);
  for (let i = 0; i <= 10; i++) ctx.quadraticCurveTo(w * i * 0.1, h * (i % 2 === 0 ? 0.12 : 0.28), w * (i + 1) * 0.1, h * 0.2);
  ctx.stroke();
  ['Coral Heads', 'Parrotfish', 'Urchins'].forEach((org, i) => {
    this.drawOrganism(ctx, w * (0.2 + i * 0.3), h * 0.5, w * 0.22, h * 0.08, org, colors.crest);
  });
  ctx.fillStyle = '#111'; ctx.font = `bold ${h * 0.033}px Arial`; ctx.textAlign = 'center';
  ctx.fillText('Reef Crest — High Wave Energy', w * 0.5, h * 0.08);
}

static drawForeReef(ctx, colors, w, h) {
  const bg = ctx.createLinearGradient(0, 0, 0, h);
  bg.addColorStop(0, '#0288d1'); bg.addColorStop(1, '#01579b');
  ctx.fillStyle = bg; ctx.fillRect(0, 0, w, h);
  ['Fan Coral', 'Grouper', 'Moray Eel', 'Snapper'].forEach((org, i) => {
    this.drawOrganism(ctx, w * (0.15 + i * 0.23), h * 0.5, w * 0.18, h * 0.08, org, colors.fore);
  });
  ctx.fillStyle = 'rgba(255,255,255,0.9)'; ctx.font = `bold ${h * 0.033}px Arial`; ctx.textAlign = 'center';
  ctx.fillText('Fore-Reef — High Coral Diversity', w * 0.5, h * 0.12);
  ctx.font = `${h * 0.025}px Arial`;
  ctx.fillText('Seaward slope — rich fish & coral communities', w * 0.5, h * 0.82);
}

static drawDeepReef(ctx, colors, w, h) {
  const bg = ctx.createLinearGradient(0, 0, 0, h);
  bg.addColorStop(0, '#01579b'); bg.addColorStop(1, '#002f6c');
  ctx.fillStyle = bg; ctx.fillRect(0, 0, w, h);
  ['Sponges', 'Deep Coral', 'Shark', 'Rays'].forEach((org, i) => {
    this.drawOrganism(ctx, w * (0.15 + i * 0.23), h * 0.5, w * 0.18, h * 0.08, org, colors.deep);
  });
  ctx.fillStyle = 'rgba(255,255,255,0.85)'; ctx.font = `bold ${h * 0.033}px Arial`; ctx.textAlign = 'center';
  ctx.fillText('Deep Reef / Mesophotic Zone', w * 0.5, h * 0.12);
  ctx.font = `${h * 0.025}px Arial`;
  ctx.fillText('Below 30m — low light, specialist species', w * 0.5, h * 0.82);
}

// ===== SOIL FORMATION =====
static drawSoilFormation(ctx, x, y, width, height, component = 'complete') {
  ctx.save();
  ctx.translate(x, y);
  const colors = {
    rock:    { base: '#9e9e9e', light: '#cfcfcf', dark: '#616161' },
    regolith:{ base: '#bdbdbd', light: '#e0e0e0', dark: '#9e9e9e' },
    subsoil: { base: '#a1887f', light: '#d7ccc8', dark: '#6d4c41' },
    topsoil: { base: '#6d4c41', light: '#a1887f', dark: '#4e342e' },
    organic: { base: '#4e342e', light: '#795548', dark: '#3e2723' },
    plant:   { base: '#2e7d32', light: '#60ad5e', dark: '#1b5e20' },
  };
  switch(component) {
    case 'complete':    this.drawCompleteSoilFormation(ctx, colors, width, height); break;
    case 'weathering':  this.drawPhysicalWeathering(ctx, colors, width, height); break;
    case 'biological':  this.drawBiologicalWeathering(ctx, colors, width, height); break;
    case 'horizons':    this.drawHorizonDevelopment(ctx, colors, width, height); break;
    case 'mature':      this.drawMatureSoil(ctx, colors, width, height); break;
    default:            this.drawCompleteSoilFormation(ctx, colors, width, height);
  }
  ctx.restore();
}

static drawCompleteSoilFormation(ctx, colors, w, h) {
  // 5 stages of pedogenesis
  const stages = [
    {
      x: 0.05, label: '1. Bare\nRock',
      layers: [{ frac: 0.85, color: colors.rock.base, label: 'Bedrock' }]
    },
    {
      x: 0.25, label: '2. Weathering',
      layers: [
        { frac: 0.15, color: colors.regolith.base, label: 'Regolith' },
        { frac: 0.7,  color: colors.rock.base,     label: 'Bedrock'  },
      ]
    },
    {
      x: 0.45, label: '3. Pioneer\nPlants',
      layers: [
        { frac: 0.08, color: colors.organic.base,  label: 'Organic' },
        { frac: 0.2,  color: colors.regolith.base, label: 'Regolith' },
        { frac: 0.57, color: colors.rock.base,     label: 'Bedrock'  },
      ]
    },
    {
      x: 0.65, label: '4. Young\nSoil',
      layers: [
        { frac: 0.08, color: colors.organic.base,  label: 'O' },
        { frac: 0.15, color: colors.topsoil.base,  label: 'A' },
        { frac: 0.25, color: colors.subsoil.base,  label: 'B' },
        { frac: 0.37, color: colors.rock.base,     label: 'C/R' },
      ]
    },
    {
      x: 0.82, label: '5. Mature\nSoil',
      layers: [
        { frac: 0.1,  color: colors.organic.base,  label: 'O' },
        { frac: 0.2,  color: colors.topsoil.base,  label: 'A' },
        { frac: 0.22, color: '#a1887f',            label: 'B' },
        { frac: 0.22, color: colors.subsoil.base,  label: 'C' },
        { frac: 0.11, color: colors.rock.base,     label: 'R' },
      ]
    },
  ];

  const stageW = w * 0.16, y0 = h * 0.12, soilH = h * 0.75;
  stages.forEach(s => {
    const px = w * s.x;
    let ly = y0;
    s.layers.forEach(lv => {
      const lh = soilH * lv.frac;
      ctx.fillStyle = lv.color; ctx.fillRect(px, ly, stageW, lh);
      ctx.strokeStyle = 'rgba(0,0,0,0.2)'; ctx.lineWidth = 1; ctx.strokeRect(px, ly, stageW, lh);
      ctx.fillStyle = 'rgba(255,255,255,0.7)'; ctx.font = `${h * 0.02}px Arial`; ctx.textAlign = 'center';
      ctx.fillText(lv.label, px + stageW / 2, ly + lh * 0.55);
      ly += lh;
    });
    ctx.fillStyle = '#111'; ctx.font = `bold ${h * 0.024}px Arial`; ctx.textAlign = 'center';
    s.label.split('\n').forEach((line, li) => ctx.fillText(line, px + stageW / 2, h * 0.07 + li * h * 0.035));
  });

  // time arrow
  ctx.strokeStyle = '#333'; ctx.lineWidth = w * 0.004;
  this.drawArrow(ctx, w * 0.05, h * 0.93, w * 0.95, h * 0.93);
  ctx.fillStyle = '#333'; ctx.font = `${h * 0.024}px Arial`; ctx.textAlign = 'center';
  ctx.fillText('← Time (hundreds to thousands of years) →', w * 0.5, h * 0.97);

  ctx.fillStyle = '#111'; ctx.font = `bold ${h * 0.033}px Arial`; ctx.textAlign = 'center';
  ctx.fillText('Soil Formation (Pedogenesis)', w * 0.5, h * 0.03);
}

static drawPhysicalWeathering(ctx, colors, w, h) {
  ctx.fillStyle = colors.rock.light; ctx.fillRect(0, 0, w, h);
  // rock with cracks
  ctx.fillStyle = colors.rock.base;
  ctx.beginPath(); ctx.roundRect(w * 0.3, h * 0.3, w * 0.4, h * 0.4, w * 0.02); ctx.fill();
  ctx.strokeStyle = colors.rock.dark; ctx.lineWidth = w * 0.005; ctx.stroke();
  // freeze-thaw crack lines
  ctx.strokeStyle = '#fff'; ctx.lineWidth = w * 0.006;
  [[0.38, 0.32, 0.36, 0.68], [0.5, 0.31, 0.52, 0.69], [0.62, 0.33, 0.6, 0.67]].forEach(([x1, y1, x2, y2]) => {
    ctx.beginPath(); ctx.moveTo(w * x1, h * y1); ctx.lineTo(w * x2, h * y2); ctx.stroke();
  });
  ctx.fillStyle = '#0288d1';
  for (let i = 0; i < 8; i++) {
    ctx.beginPath(); ctx.arc(w * (0.28 + Math.random() * 0.44), h * (0.28 + Math.random() * 0.44), w * 0.01, 0, Math.PI * 2); ctx.fill();
  }
  ctx.fillStyle = '#333'; ctx.font = `${h * 0.026}px Arial`; ctx.textAlign = 'center';
  ctx.fillText('Freeze-thaw: water expands in cracks → rock splits', w * 0.5, h * 0.82);
  ctx.fillStyle = '#111'; ctx.font = `bold ${h * 0.033}px Arial`; ctx.textAlign = 'center';
  ctx.fillText('Physical Weathering', w * 0.5, h * 0.14);
}

static drawBiologicalWeathering(ctx, colors, w, h) {
  ctx.fillStyle = colors.rock.light; ctx.fillRect(0, 0, w, h);
  ctx.fillStyle = colors.rock.base;
  ctx.beginPath(); ctx.roundRect(w * 0.2, h * 0.35, w * 0.6, h * 0.4, w * 0.02); ctx.fill();
  // root penetrating rock
  ctx.strokeStyle = colors.plant.dark; ctx.lineWidth = w * 0.008; ctx.lineCap = 'round';
  ctx.beginPath(); ctx.moveTo(w * 0.5, h * 0.15); ctx.bezierCurveTo(w * 0.5, h * 0.3, w * 0.48, h * 0.42, w * 0.49, h * 0.7); ctx.stroke();
  for (let i = 0; i < 4; i++) {
    ctx.lineWidth = w * 0.004;
    ctx.beginPath(); ctx.moveTo(w * 0.49, h * (0.42 + i * 0.07));
    ctx.lineTo(w * (0.49 + (i % 2 === 0 ? 0.08 : -0.08)), h * (0.46 + i * 0.07)); ctx.stroke();
  }
  // lichen patches
  ctx.fillStyle = '#aed581';
  for (let i = 0; i < 6; i++) ctx.fillRect(w * (0.22 + i * 0.08), h * 0.36, w * 0.04, h * 0.03);
  ctx.fillStyle = '#333'; ctx.font = `${h * 0.026}px Arial`; ctx.textAlign = 'center';
  ctx.fillText('Roots & lichens produce acids that dissolve rock minerals', w * 0.5, h * 0.85);
  ctx.fillStyle = '#111'; ctx.font = `bold ${h * 0.033}px Arial`; ctx.textAlign = 'center';
  ctx.fillText('Biological Weathering', w * 0.5, h * 0.14);
}

static drawHorizonDevelopment(ctx, colors, w, h) {
  const horizons = [
    { color: colors.organic.base,  label: 'O — Organic litter accumulates', frac: 0.1 },
    { color: colors.topsoil.base,  label: 'A — Topsoil develops (humus)', frac: 0.2 },
    { color: colors.subsoil.base,  label: 'B — Subsoil (leached minerals)',  frac: 0.25 },
    { color: '#a1887f',            label: 'C — Weathered parent material',   frac: 0.22 },
    { color: colors.rock.base,     label: 'R — Bedrock',                    frac: 0.18 },
  ];
  let y = h * 0.08;
  horizons.forEach(hz => {
    const lh = h * hz.frac;
    ctx.fillStyle = hz.color; ctx.fillRect(w * 0.1, y, w * 0.55, lh);
    ctx.strokeStyle = 'rgba(0,0,0,0.25)'; ctx.lineWidth = 1; ctx.strokeRect(w * 0.1, y, w * 0.55, lh);
    ctx.fillStyle = '#fff'; ctx.font = `${h * 0.026}px Arial`; ctx.textAlign = 'left';
    ctx.fillText(hz.label, w * 0.68, y + lh * 0.55);
    y += lh;
  });
  ctx.fillStyle = '#111'; ctx.font = `bold ${h * 0.033}px Arial`; ctx.textAlign = 'center';
  ctx.fillText('Soil Horizon Development', w * 0.5, h * 0.04);
}

static drawMatureSoil(ctx, colors, w, h) {
  const horizons = [
    { color: colors.organic.base,  label: 'O',  detail: 'Leaf litter, decomposing organic matter', frac: 0.1 },
    { color: colors.topsoil.base,  label: 'A',  detail: 'Dark, humus-rich topsoil, high fertility',  frac: 0.22 },
    { color: '#a1887f',            label: 'E',  detail: 'Eluviation — leached of minerals',          frac: 0.12 },
    { color: colors.subsoil.base,  label: 'B',  detail: 'Illuviation — mineral accumulation',        frac: 0.24 },
    { color: '#bcaaa4',            label: 'C',  detail: 'Partially weathered parent material',       frac: 0.2 },
    { color: colors.rock.base,     label: 'R',  detail: 'Bedrock',                                  frac: 0.07 },
  ];
  let y = h * 0.06;
  horizons.forEach(hz => {
    const lh = h * hz.frac;
    ctx.fillStyle = hz.color; ctx.fillRect(w * 0.05, y, w * 0.5, lh);
    ctx.strokeStyle = 'rgba(0,0,0,0.2)'; ctx.lineWidth = 1; ctx.strokeRect(w * 0.05, y, w * 0.5, lh);
    ctx.fillStyle = '#fff'; ctx.font = `bold ${h * 0.028}px Arial`; ctx.textAlign = 'left';
    ctx.fillText(hz.label, w * 0.08, y + lh * 0.45);
    ctx.fillStyle = '#333'; ctx.font = `${h * 0.022}px Arial`;
    ctx.fillText(hz.detail, w * 0.58, y + lh * 0.55);
    y += lh;
  });
  ctx.fillStyle = '#111'; ctx.font = `bold ${h * 0.033}px Arial`; ctx.textAlign = 'center';
  ctx.fillText('Mature Soil Profile', w * 0.5, h * 0.03);
}

// ===== NUTRIENT CYCLE COMPARISON =====
static drawNutrientCycleComparison(ctx, x, y, width, height, component = 'complete') {
  ctx.save();
  ctx.translate(x, y);
  const colors = {
    gaseous:     { base: '#1565c0', light: '#bbdefb', dark: '#0d47a1' },
    sedimentary: { base: '#8d6e63', light: '#d7ccc8', dark: '#5d4037' },
    atmos:       { base: '#42a5f5', light: '#e3f2fd', dark: '#1565c0' },
    soil:        { base: '#6d4c41', light: '#d7ccc8', dark: '#4e342e' },
    plant:       { base: '#2e7d32', light: '#c8e6c9', dark: '#1b5e20' },
  };
  switch(component) {
    case 'complete':    this.drawCompleteNutrientComparison(ctx, colors, width, height); break;
    case 'gaseous':     this.drawGaseousCycle(ctx, colors, width, height); break;
    case 'sedimentary': this.drawSedimentaryCycle(ctx, colors, width, height); break;
    case 'examples':    this.drawCycleExamples(ctx, colors, width, height); break;
    default:            this.drawCompleteNutrientComparison(ctx, colors, width, height);
  }
  ctx.restore();
}

static drawCompleteNutrientComparison(ctx, colors, w, h) {
  // Two-panel side-by-side
  ctx.fillStyle = '#e3f2fd'; ctx.fillRect(0, 0, w * 0.48, h);
  ctx.fillStyle = '#efebe9'; ctx.fillRect(w * 0.52, 0, w * 0.48, h);

  // === Gaseous cycle (left) ===
  ctx.fillStyle = colors.gaseous.dark; ctx.font = `bold ${h * 0.03}px Arial`; ctx.textAlign = 'center';
  ctx.fillText('Gaseous Cycle', w * 0.24, h * 0.07);
  ctx.font = `${h * 0.022}px Arial`; ctx.fillStyle = '#333';
  ctx.fillText('(e.g. N, C, O, H₂O)', w * 0.24, h * 0.12);

  const gNodes = [
    { x: 0.12, y: 0.25, label: 'Atmosphere', color: colors.atmos },
    { x: 0.12, y: 0.55, label: 'Plants',     color: colors.plant },
    { x: 0.36, y: 0.55, label: 'Animals',    color: { base: '#f57c00', light: '#ffb74d', dark: '#bf360c' } },
    { x: 0.24, y: 0.8,  label: 'Soil',       color: colors.soil },
  ];
  const gArrows = [[0, 1, 'Fixation'],[1, 0, 'Respiration'],[1, 2, 'Consume'],[2, 3, 'Excretion'],[3, 1, 'Uptake'],[3, 0, 'Denitrification']];
  gArrows.forEach(([ai, bi, lbl]) => {
    const a = gNodes[ai], b = gNodes[bi];
    ctx.strokeStyle = 'rgba(21,101,192,0.4)'; ctx.lineWidth = w * 0.004; ctx.setLineDash([w * 0.008, w * 0.006]);
    this.drawArrow(ctx, w * a.x, h * a.y, w * b.x, h * b.y);
    ctx.setLineDash([]);
    ctx.fillStyle = '#444'; ctx.font = `${h * 0.018}px Arial`; ctx.textAlign = 'center';
    ctx.fillText(lbl, w * (a.x + b.x) / 2 + w * 0.02, h * (a.y + b.y) / 2);
  });
  gNodes.forEach(n => this.drawOrganism(ctx, w * n.x, h * n.y, w * 0.14, h * 0.065, n.label, n.color));

  // Atmosphere circle indicator
  ctx.strokeStyle = colors.gaseous.base; ctx.lineWidth = w * 0.005; ctx.setLineDash([w * 0.008, w * 0.006]);
  ctx.beginPath(); ctx.arc(w * 0.24, h * 0.5, w * 0.2, 0, Math.PI * 2); ctx.stroke(); ctx.setLineDash([]);
  ctx.fillStyle = colors.gaseous.base; ctx.font = `${h * 0.022}px Arial`; ctx.textAlign = 'center';
  ctx.fillText('Large atmospheric\nreservoir', w * 0.24, h * 0.92);

  // === Sedimentary cycle (right) ===
  ctx.fillStyle = colors.sedimentary.dark; ctx.font = `bold ${h * 0.03}px Arial`; ctx.textAlign = 'center';
  ctx.fillText('Sedimentary Cycle', w * 0.76, h * 0.07);
  ctx.font = `${h * 0.022}px Arial`; ctx.fillStyle = '#333';
  ctx.fillText('(e.g. P, Ca, Fe, S)', w * 0.76, h * 0.12);

  const sNodes = [
    { x: 0.76, y: 0.25, label: 'Rock',       color: colors.sedimentary },
    { x: 0.64, y: 0.5,  label: 'Soil/Water', color: colors.soil },
    { x: 0.88, y: 0.5,  label: 'Plants',     color: colors.plant },
    { x: 0.76, y: 0.75, label: 'Animals',    color: { base: '#f57c00', light: '#ffb74d', dark: '#bf360c' } },
    { x: 0.76, y: 0.92, label: 'Sediment',   color: colors.sedimentary },
  ];
  const sArrows = [[0, 1, 'Weathering'],[1, 2, 'Uptake'],[2, 3, 'Consume'],[3, 4, 'Death/Excretion'],[4, 0, 'Uplift\n(slow)']];
  sArrows.forEach(([ai, bi, lbl]) => {
    const a = sNodes[ai], b = sNodes[bi];
    ctx.strokeStyle = 'rgba(141,110,99,0.5)'; ctx.lineWidth = w * 0.004; ctx.setLineDash([w * 0.008, w * 0.006]);
    this.drawArrow(ctx, w * a.x, h * a.y, w * b.x, h * b.y);
    ctx.setLineDash([]);
    ctx.fillStyle = '#444'; ctx.font = `${h * 0.018}px Arial`; ctx.textAlign = 'center';
    ctx.fillText(lbl, w * (a.x + b.x) / 2 + w * 0.04, h * (a.y + b.y) / 2);
  });
  sNodes.forEach(n => this.drawOrganism(ctx, w * n.x, h * n.y, w * 0.14, h * 0.06, n.label, n.color));

  ctx.fillStyle = colors.sedimentary.dark; ctx.font = `${h * 0.022}px Arial`; ctx.textAlign = 'center';
  ctx.fillText('No large atmospheric\nreservoir — slow cycling', w * 0.76, h * 0.92);

  ctx.fillStyle = '#111'; ctx.font = `bold ${h * 0.033}px Arial`; ctx.textAlign = 'center';
  ctx.fillText('Gaseous vs Sedimentary Nutrient Cycles', w * 0.5, h * 0.01);
}

static drawGaseousCycle(ctx, colors, w, h) {
  // full-panel gaseous cycle with atmosphere prominent
  const skyBg = ctx.createLinearGradient(0, 0, 0, h * 0.5);
  skyBg.addColorStop(0, '#e3f2fd'); skyBg.addColorStop(1, '#bbdefb');
  ctx.fillStyle = skyBg; ctx.fillRect(0, 0, w, h * 0.5);
  ctx.fillStyle = '#c8e6c9'; ctx.fillRect(0, h * 0.5, w, h * 0.5);

  this.drawOrganism(ctx, w * 0.5, h * 0.18, w * 0.35, h * 0.08, 'Atmosphere\n(large reservoir)', colors.atmos);
  this.drawOrganism(ctx, w * 0.25, h * 0.65, w * 0.22, h * 0.08, 'Plants', colors.plant);
  this.drawOrganism(ctx, w * 0.75, h * 0.65, w * 0.22, h * 0.08, 'Animals', { base: '#f57c00', light: '#ffb74d', dark: '#bf360c' });
  this.drawOrganism(ctx, w * 0.5,  h * 0.85, w * 0.22, h * 0.08, 'Soil', colors.soil);

  const arrows = [[0.5, 0.22, 0.27, 0.61, 'gas↓'],[0.27, 0.61, 0.5, 0.22, 'gas↑'],[0.36, 0.65, 0.64, 0.65, '→'],[0.64, 0.69, 0.56, 0.81, '↓'],[0.44, 0.81, 0.28, 0.69, '↑']];
  arrows.forEach(([x1, y1, x2, y2, lbl]) => {
    ctx.strokeStyle = colors.gaseous.base; ctx.lineWidth = w * 0.005; ctx.setLineDash([w * 0.01, w * 0.007]);
    this.drawArrow(ctx, w * x1, h * y1, w * x2, h * y2);
    ctx.setLineDash([]);
    ctx.fillStyle = colors.gaseous.dark; ctx.font = `${h * 0.022}px Arial`; ctx.textAlign = 'center';
    ctx.fillText(lbl, w * (x1 + x2) / 2 + w * 0.04, h * (y1 + y2) / 2);
  });
  ctx.fillStyle = '#111'; ctx.font = `bold ${h * 0.033}px Arial`; ctx.textAlign = 'center';
  ctx.fillText('Gaseous Nutrient Cycle', w * 0.5, h * 0.06);
}

static drawSedimentaryCycle(ctx, colors, w, h) {
  ctx.fillStyle = '#efebe9'; ctx.fillRect(0, 0, w, h * 0.6);
  ctx.fillStyle = '#9e9e9e'; ctx.fillRect(0, h * 0.6, w, h * 0.4);

  const nodes = [
    { x: 0.2,  y: 0.78, label: 'Rock/Sediment', color: colors.sedimentary },
    { x: 0.5,  y: 0.5,  label: 'Soil/Water',    color: colors.soil },
    { x: 0.28, y: 0.25, label: 'Plants',         color: colors.plant },
    { x: 0.72, y: 0.25, label: 'Animals',        color: { base: '#f57c00', light: '#ffb74d', dark: '#bf360c' } },
    { x: 0.78, y: 0.55, label: 'Decomposers',    color: colors.soil },
  ];
  const arrows = [[0, 1, 'Weathering'],[1, 2, 'Uptake'],[2, 3, 'Consumption'],[3, 4, 'Death'],[4, 1, 'Mineralisation'],[4, 0, 'Sedimentation']];
  arrows.forEach(([ai, bi, lbl]) => {
    const a = nodes[ai], b = nodes[bi];
    ctx.strokeStyle = 'rgba(141,110,99,0.6)'; ctx.lineWidth = w * 0.005; ctx.setLineDash([w * 0.01, w * 0.007]);
    this.drawArrow(ctx, w * a.x, h * a.y, w * b.x, h * b.y);
    ctx.setLineDash([]);
    ctx.fillStyle = '#555'; ctx.font = `${h * 0.02}px Arial`; ctx.textAlign = 'center';
    ctx.fillText(lbl, w * (a.x + b.x) / 2 + w * 0.04, h * (a.y + b.y) / 2 - h * 0.01);
  });
  nodes.forEach(n => this.drawOrganism(ctx, w * n.x, h * n.y, w * 0.18, h * 0.07, n.label, n.color));
  ctx.fillStyle = '#111'; ctx.font = `bold ${h * 0.033}px Arial`; ctx.textAlign = 'center';
  ctx.fillText('Sedimentary Nutrient Cycle', w * 0.5, h * 0.06);
  ctx.font = `${h * 0.024}px Arial`; ctx.fillStyle = '#555';
  ctx.fillText('No atmospheric reservoir — cycling via rock & soil', w * 0.5, h * 0.93);
}

static drawCycleExamples(ctx, colors, w, h) {
  const gaseous = ['Carbon (CO₂/CH₄)', 'Nitrogen (N₂)', 'Oxygen (O₂)', 'Water (H₂O vapour)'];
  const sedimentary = ['Phosphorus (PO₄)', 'Calcium (Ca²⁺)', 'Iron (Fe)', 'Sulphur (SO₄²⁻)'];

  ctx.fillStyle = '#e3f2fd'; ctx.fillRect(0, 0, w * 0.48, h);
  ctx.fillStyle = '#efebe9'; ctx.fillRect(w * 0.52, 0, w * 0.48, h);

  ctx.fillStyle = colors.gaseous.dark; ctx.font = `bold ${h * 0.03}px Arial`; ctx.textAlign = 'center';
  ctx.fillText('Gaseous Cycles', w * 0.24, h * 0.1);
  gaseous.forEach((item, i) => {
    this.drawOrganism(ctx, w * 0.24, h * (0.25 + i * 0.17), w * 0.38, h * 0.08, item, colors.gaseous);
  });

  ctx.fillStyle = colors.sedimentary.dark; ctx.font = `bold ${h * 0.03}px Arial`; ctx.textAlign = 'center';
  ctx.fillText('Sedimentary Cycles', w * 0.76, h * 0.1);
  sedimentary.forEach((item, i) => {
    this.drawOrganism(ctx, w * 0.76, h * (0.25 + i * 0.17), w * 0.38, h * 0.08, item, colors.sedimentary);
  });

  ctx.fillStyle = '#111'; ctx.font = `bold ${h * 0.033}px Arial`; ctx.textAlign = 'center';
  ctx.fillText('Nutrient Cycle Examples', w * 0.5, h * 0.02);
}

