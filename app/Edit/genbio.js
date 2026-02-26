import { createCanvas } from '@napi-rs/canvas'; import
ExcelJS from 'exceljs'; import fs from 'fs'; import os
from 'os'; import path from 'path'; import readline from
'readline'; import * as math from 'mathjs'; import
GIFEncoder from 'gifencoder'; import { PassThrough }
from 'stream';

class AnatomicalShapes {





// ===== DNA STRUCTURE DIAGRAMS =====

static drawDNAStructure(ctx, x, y, width, height, view, componentFocus) {
  ctx.save();
  ctx.translate(x, y);
  
  switch(view) {
    case 'complete':
    case 'doubleHelix':
      this.drawDoubleHelix(ctx, width, height, componentFocus);
      break;
    case 'basePairs':
      this.drawBasePairs(ctx, width, height, componentFocus);
      break;
    case 'sugarPhosphate':
      this.drawSugarPhosphate(ctx, width, height, componentFocus);
      break;
    case 'nucleotide':
      this.drawNucleotide(ctx, width, height, componentFocus);
      break;
    case 'major-minor-grooves':
      this.drawMajorMinorGrooves(ctx, width, height, componentFocus);
      break;
  }
  
  ctx.restore();
}

static drawDoubleHelix(ctx, width, height, componentFocus) {
  const w = width, h = height;
  
  // Draw two strands of the helix
  const numTurns = 3;
  const pointsPerTurn = 20;
  
  // Color scheme for DNA
  const colors = {
    backbone: '#4A90E2',
    adenine: '#FF6B6B',
    thymine: '#4ECDC4',
    guanine: '#FFD93D',
    cytosine: '#95E1D3'
  };
  
  // Draw backbone (sugar-phosphate)
  for (let strand = 0; strand < 2; strand++) {
    const gradient = ctx.createLinearGradient(0, 0, 0, h);
    gradient.addColorStop(0, colors.backbone);
    gradient.addColorStop(0.5, '#2E5C8A');
    gradient.addColorStop(1, colors.backbone);
    
    ctx.strokeStyle = componentFocus === 'backbone' || componentFocus === 'complete' 
      ? gradient : 'rgba(74, 144, 226, 0.3)';
    ctx.lineWidth = componentFocus === 'backbone' ? 8 : 6;
    
    ctx.beginPath();
    for (let i = 0; i <= numTurns * pointsPerTurn; i++) {
      const t = i / pointsPerTurn;
      const angle = t * Math.PI * 2 + (strand * Math.PI);
      const xPos = w * 0.5 + Math.cos(angle) * w * 0.3;
      const yPos = (i / (numTurns * pointsPerTurn)) * h;
      
      if (i === 0) ctx.moveTo(xPos, yPos);
      else ctx.lineTo(xPos, yPos);
    }
    ctx.stroke();
  }
  
  // Draw base pairs
  const basePairs = [
    ['A', 'T'], ['T', 'A'], ['G', 'C'], ['C', 'G'], ['A', 'T'],
    ['G', 'C'], ['C', 'G'], ['T', 'A'], ['A', 'T'], ['G', 'C']
  ];
  
  for (let i = 0; i < basePairs.length; i++) {
    const t = (i / (basePairs.length - 1)) * numTurns;
    const angle1 = t * Math.PI * 2;
    const angle2 = t * Math.PI * 2 + Math.PI;
    
    const x1 = w * 0.5 + Math.cos(angle1) * w * 0.3;
    const x2 = w * 0.5 + Math.cos(angle2) * w * 0.3;
    const yPos = (i / (basePairs.length - 1)) * h * 0.9 + h * 0.05;
    
    // Base pair connection
    if (componentFocus === 'hydrogen-bonds' || componentFocus === 'complete') {
      ctx.strokeStyle = 'rgba(100, 100, 100, 0.5)';
      ctx.lineWidth = 2;
      ctx.setLineDash([5, 5]);
      ctx.beginPath();
      ctx.moveTo(x1, yPos);
      ctx.lineTo(x2, yPos);
      ctx.stroke();
      ctx.setLineDash([]);
    }
    
    // Bases
    if (componentFocus === 'bases' || componentFocus === 'complete') {
      // Left base
      const base1Color = basePairs[i][0] === 'A' ? colors.adenine :
                         basePairs[i][0] === 'T' ? colors.thymine :
                         basePairs[i][0] === 'G' ? colors.guanine : colors.cytosine;
      ctx.fillStyle = base1Color;
      ctx.beginPath();
      ctx.arc(x1, yPos, 8, 0, Math.PI * 2);
      ctx.fill();
      
      // Right base
      const base2Color = basePairs[i][1] === 'A' ? colors.adenine :
                         basePairs[i][1] === 'T' ? colors.thymine :
                         basePairs[i][1] === 'G' ? colors.guanine : colors.cytosine;
      ctx.fillStyle = base2Color;
      ctx.beginPath();
      ctx.arc(x2, yPos, 8, 0, Math.PI * 2);
      ctx.fill();
    }
  }
  
  // Antiparallel arrows
  if (componentFocus === 'antiparallel' || componentFocus === 'complete') {
    ctx.fillStyle = '#333';
    // 5' to 3' arrow (left strand)
    ctx.beginPath();
    ctx.moveTo(w * 0.1, h * 0.1);
    ctx.lineTo(w * 0.1, h * 0.3);
    ctx.lineTo(w * 0.08, h * 0.28);
    ctx.moveTo(w * 0.1, h * 0.3);
    ctx.lineTo(w * 0.12, h * 0.28);
    ctx.stroke();
    
    // 3' to 5' arrow (right strand)
    ctx.beginPath();
    ctx.moveTo(w * 0.9, h * 0.9);
    ctx.lineTo(w * 0.9, h * 0.7);
    ctx.lineTo(w * 0.88, h * 0.72);
    ctx.moveTo(w * 0.9, h * 0.7);
    ctx.lineTo(w * 0.92, h * 0.72);
    ctx.stroke();
  }
}

static drawBasePairs(ctx, width, height, componentFocus) {
  const w = width, h = height;
  
  const colors = {
    adenine: '#FF6B6B',
    thymine: '#4ECDC4',
    guanine: '#FFD93D',
    cytosine: '#95E1D3'
  };
  
  const pairs = [
    { left: 'A', right: 'T', bonds: 2 },
    { left: 'G', right: 'C', bonds: 3 }
  ];
  
  pairs.forEach((pair, idx) => {
    const yOffset = h * 0.2 + idx * h * 0.5;
    
    // Left base (larger representation)
    const leftColor = pair.left === 'A' ? colors.adenine : colors.guanine;
    const gradient1 = ctx.createRadialGradient(w * 0.2, yOffset, 0, w * 0.2, yOffset, 50);
    gradient1.addColorStop(0, leftColor);
    gradient1.addColorStop(1, this.darkenColor(leftColor, 0.3));
    
    ctx.fillStyle = gradient1;
    this.drawBaseShape(ctx, w * 0.2, yOffset, 50, pair.left);
    
    // Right base
    const rightColor = pair.right === 'T' ? colors.thymine : colors.cytosine;
    const gradient2 = ctx.createRadialGradient(w * 0.8, yOffset, 0, w * 0.8, yOffset, 50);
    gradient2.addColorStop(0, rightColor);
    gradient2.addColorStop(1, this.darkenColor(rightColor, 0.3));
    
    ctx.fillStyle = gradient2;
    this.drawBaseShape(ctx, w * 0.8, yOffset, 50, pair.right);
    
    // Hydrogen bonds
    ctx.strokeStyle = '#666';
    ctx.lineWidth = 3;
    ctx.setLineDash([10, 5]);
    
    for (let i = 0; i < pair.bonds; i++) {
      const bondY = yOffset - 20 + (i * 20);
      ctx.beginPath();
      ctx.moveTo(w * 0.2 + 55, bondY);
      ctx.lineTo(w * 0.8 - 55, bondY);
      ctx.stroke();
    }
    ctx.setLineDash([]);
    
    // Labels
    ctx.fillStyle = '#000';
    ctx.font = 'bold 24px Arial';
    ctx.textAlign = 'center';
    ctx.fillText(pair.left, w * 0.2, yOffset + 8);
    ctx.fillText(pair.right, w * 0.8, yOffset + 8);
    
    ctx.font = '14px Arial';
    ctx.fillText(`${pair.bonds} hydrogen bonds`, w * 0.5, yOffset + 60);
  });
}

static drawBaseShape(ctx, x, y, size, base) {
  ctx.beginPath();
  if (base === 'A' || base === 'G') {
    // Purine (double ring)
    ctx.arc(x - 15, y, size * 0.4, 0, Math.PI * 2);
    ctx.arc(x + 15, y, size * 0.4, 0, Math.PI * 2);
  } else {
    // Pyrimidine (single ring)
    ctx.arc(x, y, size * 0.5, 0, Math.PI * 2);
  }
  ctx.fill();
  ctx.strokeStyle = '#000';
  ctx.lineWidth = 2;
  ctx.stroke();
}

static drawSugarPhosphate(ctx, width, height, componentFocus) {
  const w = width, h = height;
  
  // Draw a segment of the backbone showing sugar-phosphate structure
  const numUnits = 4;
  
  for (let i = 0; i < numUnits; i++) {
    const yPos = h * 0.1 + i * (h * 0.2);
    
    // Phosphate group (circle)
    const phosphateGradient = ctx.createRadialGradient(w * 0.3, yPos, 0, w * 0.3, yPos, 25);
    phosphateGradient.addColorStop(0, '#FFA500');
    phosphateGradient.addColorStop(1, '#CC8400');
    
    ctx.fillStyle = phosphateGradient;
    ctx.beginPath();
    ctx.arc(w * 0.3, yPos, 25, 0, Math.PI * 2);
    ctx.fill();
    ctx.strokeStyle = '#000';
    ctx.lineWidth = 2;
    ctx.stroke();
    
    ctx.fillStyle = '#000';
    ctx.font = 'bold 14px Arial';
    ctx.textAlign = 'center';
    ctx.fillText('P', w * 0.3, yPos + 5);
    
    // Sugar (pentagon - deoxyribose)
    const sugarGradient = ctx.createRadialGradient(w * 0.5, yPos + 60, 0, w * 0.5, yPos + 60, 35);
    sugarGradient.addColorStop(0, '#90EE90');
    sugarGradient.addColorStop(1, '#6BC16B');
    
    ctx.fillStyle = sugarGradient;
    ctx.beginPath();
    for (let j = 0; j < 5; j++) {
      const angle = (j * 2 * Math.PI / 5) - Math.PI / 2;
      const px = w * 0.5 + Math.cos(angle) * 35;
      const py = yPos + 60 + Math.sin(angle) * 35;
      if (j === 0) ctx.moveTo(px, py);
      else ctx.lineTo(px, py);
    }
    ctx.closePath();
    ctx.fill();
    ctx.stroke();
    
    ctx.fillText('Sugar', w * 0.5, yPos + 65);
    
    // Connecting lines
    ctx.strokeStyle = '#333';
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.moveTo(w * 0.3, yPos + 25);
    ctx.lineTo(w * 0.5, yPos + 25);
    ctx.stroke();
    
    if (i < numUnits - 1) {
      ctx.beginPath();
      ctx.moveTo(w * 0.5, yPos + 95);
      ctx.lineTo(w * 0.3, yPos + h * 0.2 - 25);
      ctx.stroke();
    }
    
    // Base attachment point
    ctx.strokeStyle = '#666';
    ctx.setLineDash([5, 5]);
    ctx.beginPath();
    ctx.moveTo(w * 0.5 + 35, yPos + 60);
    ctx.lineTo(w * 0.7, yPos + 60);
    ctx.stroke();
    ctx.setLineDash([]);
    
    ctx.fillStyle = '#888';
    ctx.font = '12px Arial';
    ctx.fillText('to base', w * 0.75, yPos + 65);
  }
}

static drawNucleotide(ctx, width, height, componentFocus) {
  const w = width, h = height;
  
  // Central detailed nucleotide structure
  const centerX = w * 0.5;
  const centerY = h * 0.5;
  
  // Phosphate group
  const phosphateGradient = ctx.createRadialGradient(centerX - 100, centerY - 100, 0, centerX - 100, centerY - 100, 40);
  phosphateGradient.addColorStop(0, '#FFA500');
  phosphateGradient.addColorStop(1, '#CC8400');
  
  ctx.fillStyle = phosphateGradient;
  ctx.beginPath();
  ctx.arc(centerX - 100, centerY - 100, 40, 0, Math.PI * 2);
  ctx.fill();
  ctx.strokeStyle = '#000';
  ctx.lineWidth = 3;
  ctx.stroke();
  
  ctx.fillStyle = '#000';
  ctx.font = 'bold 20px Arial';
  ctx.textAlign = 'center';
  ctx.fillText('Phosphate', centerX - 100, centerY - 95);
  ctx.font = '14px Arial';
  ctx.fillText('(PO₄³⁻)', centerX - 100, centerY - 75);
  
  // Sugar (deoxyribose)
  const sugarGradient = ctx.createRadialGradient(centerX, centerY, 0, centerX, centerY, 50);
  sugarGradient.addColorStop(0, '#90EE90');
  sugarGradient.addColorStop(1, '#6BC16B');
  
  ctx.fillStyle = sugarGradient;
  ctx.beginPath();
  for (let i = 0; i < 5; i++) {
    const angle = (i * 2 * Math.PI / 5) - Math.PI / 2;
    const px = centerX + Math.cos(angle) * 50;
    const py = centerY + Math.sin(angle) * 50;
    if (i === 0) ctx.moveTo(px, py);
    else ctx.lineTo(px, py);
  }
  ctx.closePath();
  ctx.fill();
  ctx.stroke();
  
  ctx.fillStyle = '#000';
  ctx.font = 'bold 18px Arial';
  ctx.fillText('Deoxyribose', centerX, centerY - 5);
  ctx.font = '14px Arial';
  ctx.fillText('(5-carbon sugar)', centerX, centerY + 15);
  
  // Nitrogenous base
  const baseGradient = ctx.createRadialGradient(centerX + 120, centerY, 0, centerX + 120, centerY, 55);
  baseGradient.addColorStop(0, '#FF6B6B');
  baseGradient.addColorStop(1, '#CC5555');
  
  ctx.fillStyle = baseGradient;
  ctx.beginPath();
  ctx.arc(centerX + 120, centerY - 20, 35, 0, Math.PI * 2);
  ctx.arc(centerX + 120, centerY + 20, 35, 0, Math.PI * 2);
  ctx.fill();
  ctx.stroke();
  
  ctx.fillStyle = '#000';
  ctx.font = 'bold 18px Arial';
  ctx.fillText('Nitrogenous', centerX + 120, centerY - 5);
  ctx.fillText('Base', centerX + 120, centerY + 15);
  ctx.font = '12px Arial';
  ctx.fillText('(A, T, G, or C)', centerX + 120, centerY + 35);
  
  // Connecting bonds
  ctx.strokeStyle = '#333';
  ctx.lineWidth = 4;
  
  // Phosphate to sugar
  ctx.beginPath();
  ctx.moveTo(centerX - 60, centerY - 80);
  ctx.lineTo(centerX - 35, centerY - 35);
  ctx.stroke();
  
  // Sugar to base
  ctx.beginPath();
  ctx.moveTo(centerX + 35, centerY);
  ctx.lineTo(centerX + 65, centerY);
  ctx.stroke();
  
  // Labels with arrows
  ctx.strokeStyle = '#666';
  ctx.lineWidth = 2;
  ctx.fillStyle = '#666';
  ctx.font = '14px Arial';
  
  // 5' carbon label
  ctx.fillText("5' carbon", centerX - 35, centerY - 60);
  this.drawArrow(ctx, centerX - 20, centerY - 55, centerX - 10, centerY - 45);
  
  // 3' carbon label
  ctx.fillText("3' carbon", centerX + 10, centerY + 70);
  this.drawArrow(ctx, centerX + 20, centerY + 65, centerX + 25, centerY + 55);
}

static drawMajorMinorGrooves(ctx, width, height, componentFocus) {
  const w = width, h = height;
  
  // Draw DNA helix with groove annotations
  const numTurns = 2;
  const pointsPerTurn = 30;
  
  // Background helix
  for (let strand = 0; strand < 2; strand++) {
    ctx.strokeStyle = '#4A90E2';
    ctx.lineWidth = 6;
    ctx.beginPath();
    
    for (let i = 0; i <= numTurns * pointsPerTurn; i++) {
      const t = i / pointsPerTurn;
      const angle = t * Math.PI * 2 + (strand * Math.PI);
      const xPos = w * 0.5 + Math.cos(angle) * w * 0.25;
      const yPos = (i / (numTurns * pointsPerTurn)) * h * 0.8 + h * 0.1;
      
      if (i === 0) ctx.moveTo(xPos, yPos);
      else ctx.lineTo(xPos, yPos);
    }
    ctx.stroke();
  }
  
  // Highlight major groove
  ctx.fillStyle = 'rgba(255, 107, 107, 0.3)';
  ctx.beginPath();
  for (let i = 0; i <= pointsPerTurn * 0.6; i++) {
    const t = i / pointsPerTurn + 0.2;
    const angle1 = t * Math.PI * 2;
    const angle2 = t * Math.PI * 2 + Math.PI;
    
    const x1 = w * 0.5 + Math.cos(angle1) * w * 0.25;
    const x2 = w * 0.5 + Math.cos(angle2) * w * 0.25;
    const yPos = (t / numTurns) * h * 0.8 + h * 0.1;
    
    if (i === 0) ctx.moveTo(x1, yPos);
    else ctx.lineTo(x1, yPos);
  }
  for (let i = pointsPerTurn * 0.6; i >= 0; i--) {
    const t = i / pointsPerTurn + 0.2;
    const angle2 = t * Math.PI * 2 + Math.PI;
    const x2 = w * 0.5 + Math.cos(angle2) * w * 0.25;
    const yPos = (t / numTurns) * h * 0.8 + h * 0.1;
    ctx.lineTo(x2, yPos);
  }
  ctx.closePath();
  ctx.fill();
  
  // Highlight minor groove
  ctx.fillStyle = 'rgba(78, 205, 196, 0.3)';
  ctx.beginPath();
  for (let i = 0; i <= pointsPerTurn * 0.4; i++) {
    const t = i / pointsPerTurn + 0.9;
    const angle1 = t * Math.PI * 2;
    const angle2 = t * Math.PI * 2 + Math.PI;
    
    const x1 = w * 0.5 + Math.cos(angle1) * w * 0.25;
    const x2 = w * 0.5 + Math.cos(angle2) * w * 0.25;
    const yPos = (t / numTurns) * h * 0.8 + h * 0.1;
    
    if (i === 0) ctx.moveTo(x1, yPos);
    else ctx.lineTo(x1, yPos);
  }
  for (let i = pointsPerTurn * 0.4; i >= 0; i--) {
    const t = i / pointsPerTurn + 0.9;
    const angle2 = t * Math.PI * 2 + Math.PI;
    const x2 = w * 0.5 + Math.cos(angle2) * w * 0.25;
    const yPos = (t / numTurns) * h * 0.8 + h * 0.1;
    ctx.lineTo(x2, yPos);
  }
  ctx.closePath();
  ctx.fill();
  
  // Labels
  ctx.fillStyle = '#000';
  ctx.font = 'bold 18px Arial';
  ctx.textAlign = 'center';
  
  ctx.fillText('Major Groove', w * 0.5, h * 0.35);
  ctx.font = '12px Arial';
  ctx.fillText('(wider, deeper)', w * 0.5, h * 0.38);
  
  ctx.font = 'bold 18px Arial';
  ctx.fillText('Minor Groove', w * 0.5, h * 0.75);
  ctx.font = '12px Arial';
  ctx.fillText('(narrower, shallower)', w * 0.5, h * 0.78);
}

// ===== DNA REPLICATION DIAGRAMS =====

static drawDNAReplication(ctx, x, y, width, height, stage, enzymeHighlight) {
  ctx.save();
  ctx.translate(x, y);
  
  switch(stage) {
    case 'complete':
    case 'initiation':
      this.drawReplicationInitiation(ctx, width, height, enzymeHighlight);
      break;
    case 'elongation':
      this.drawReplicationElongation(ctx, width, height, enzymeHighlight);
      break;
    case 'termination':
      this.drawReplicationTermination(ctx, width, height, enzymeHighlight);
      break;
    case 'lagging-strand':
      this.drawLaggingStrand(ctx, width, height, enzymeHighlight);
      break;
    case 'leading-strand':
      this.drawLeadingStrand(ctx, width, height, enzymeHighlight);
      break;
  }
  
  ctx.restore();
}

static drawReplicationInitiation(ctx, width, height, enzymeHighlight) {
  const w = width, h = height;
  
  // Original DNA double helix
  ctx.strokeStyle = '#4A90E2';
  ctx.lineWidth = 6;
  
  // Left intact region
  for (let strand = 0; strand < 2; strand++) {
    ctx.beginPath();
    for (let i = 0; i <= 10; i++) {
      const angle = (i / 10) * Math.PI * 2 + (strand * Math.PI);
      const xPos = w * 0.2 + Math.cos(angle) * w * 0.08;
      const yPos = h * 0.2 + (i / 10) * h * 0.6;
      if (i === 0) ctx.moveTo(xPos, yPos);
      else ctx.lineTo(xPos, yPos);
    }
    ctx.stroke();
  }
  
  // Replication fork (opening)
  ctx.strokeStyle = '#E74C3C';
  ctx.lineWidth = 6;
  
  // Upper strand separating
  ctx.beginPath();
  ctx.moveTo(w * 0.3, h * 0.3);
  ctx.quadraticCurveTo(w * 0.4, h * 0.25, w * 0.5, h * 0.2);
  ctx.stroke();
  
  // Lower strand separating
  ctx.beginPath();
  ctx.moveTo(w * 0.3, h * 0.7);
  ctx.quadraticCurveTo(w * 0.4, h * 0.75, w * 0.5, h * 0.8);
  ctx.stroke();
  
  // Helicase enzyme
  if (enzymeHighlight === 'helicase' || enzymeHighlight === 'all') {
    const helicaseGradient = ctx.createRadialGradient(w * 0.35, h * 0.5, 0, w * 0.35, h * 0.5, 30);
    helicaseGradient.addColorStop(0, '#FFD700');
    helicaseGradient.addColorStop(1, '#FFA500');
    
    ctx.fillStyle = helicaseGradient;
    ctx.beginPath();
    ctx.arc(w * 0.35, h * 0.5, 30, 0, Math.PI * 2);
    ctx.fill();
    ctx.strokeStyle = '#000';
    ctx.lineWidth = 2;
    ctx.stroke();
    
    ctx.fillStyle = '#000';
    ctx.font = 'bold 12px Arial';
    ctx.textAlign = 'center';
    ctx.fillText('Helicase', w * 0.35, h * 0.505);
  }
  
  // Topoisomerase
  if (enzymeHighlight === 'topoisomerase' || enzymeHighlight === 'all') {
    ctx.fillStyle = '#9B59B6';
    ctx.beginPath();
    ctx.arc(w * 0.25, h * 0.35, 20, 0, Math.PI * 2);
    ctx.fill();
    
    ctx.fillStyle = '#FFF';
    ctx.font = 'bold 10px Arial';
    ctx.textAlign = 'center';
    ctx.fillText('Topo', w * 0.25, h * 0.355);
  }
  
  // SSB proteins (single-strand binding)
  ctx.fillStyle = '#3498DB';
  const ssbPositions = [[0.45, 0.22], [0.48, 0.19], [0.45, 0.78], [0.48, 0.81]];
  ssbPositions.forEach(([px, py]) => {
    ctx.beginPath();
    ctx.arc(w * px, h * py, 8, 0, Math.PI * 2);
    ctx.fill();
  });
  
  // Origin of replication marker
  ctx.strokeStyle = '#E74C3C';
  ctx.lineWidth = 3;
  ctx.setLineDash([5, 5]);
  ctx.beginPath();
  ctx.arc(w * 0.3, h * 0.5, 60, 0, Math.PI * 2);
  ctx.stroke();
  ctx.setLineDash([]);
  
  ctx.fillStyle = '#000';
  ctx.font = '14px Arial';
  ctx.fillText('Origin of Replication', w * 0.3, h * 0.15);
}

static drawReplicationElongation(ctx, width, height, enzymeHighlight) {
  const w = width, h = height;
  
  // Template strands
  ctx.strokeStyle = '#4A90E2';
  ctx.lineWidth = 5;
  
  // Leading strand template (top)
  ctx.beginPath();
  ctx.moveTo(w * 0.1, h * 0.25);
  ctx.lineTo(w * 0.9, h * 0.25);
  ctx.stroke();
  
  // Lagging strand template (bottom)
  ctx.beginPath();
  ctx.moveTo(w * 0.1, h * 0.75);
  ctx.lineTo(w * 0.9, h * 0.75);
  ctx.stroke();
  
  // New strands being synthesized
  ctx.strokeStyle = '#E74C3C';
  ctx.lineWidth = 5;
  
  // Leading strand (continuous)
  ctx.beginPath();
  ctx.moveTo(w * 0.1, h * 0.35);
  ctx.lineTo(w * 0.7, h * 0.35);
  ctx.stroke();
  
  // DNA Polymerase on leading strand
  if (enzymeHighlight === 'dna-polymerase' || enzymeHighlight === 'all') {
    const polGradient = ctx.createRadialGradient(w * 0.7, h * 0.3, 0, w * 0.7, h * 0.3, 25);
    polGradient.addColorStop(0, '#2ECC71');
    polGradient.addColorStop(1, '#27AE60');
    
    ctx.fillStyle = polGradient;
    ctx.beginPath();
    ctx.arc(w * 0.7, h * 0.3, 25, 0, Math.PI * 2);
    ctx.fill();
    ctx.strokeStyle = '#000';
    ctx.lineWidth = 2;
    ctx.stroke();
    
    ctx.fillStyle = '#FFF';
    ctx.font = 'bold 10px Arial';
    ctx.textAlign = 'center';
    ctx.fillText('DNA Pol', w * 0.7, h * 0.305);
  }
  
  // Lagging strand (Okazaki fragments)
  const fragmentPositions = [0.2, 0.4, 0.6];
  fragmentPositions.forEach((pos, idx) => {
    ctx.strokeStyle = '#E74C3C';
    ctx.lineWidth = 5;
    ctx.beginPath();
    ctx.moveTo(w * pos, h * 0.65);
    ctx.lineTo(w * (pos + 0.15), h * 0.65);
    ctx.stroke();
    
    // Primase creating RNA primer
    if ((idx === fragmentPositions.length - 1) && (enzymeHighlight === 'primase' || enzymeHighlight === 'all')) {
      ctx.fillStyle = '#F39C12';
      ctx.beginPath();
      ctx.arc(w * (pos - 0.02), h * 0.7, 20, 0, Math.PI * 2);
      ctx.fill();
      
      ctx.fillStyle = '#FFF';
      ctx.font = 'bold 9px Arial';
      ctx.fillText('Primase', w * (pos - 0.02), h * 0.705);
      
      // RNA primer
      ctx.strokeStyle = '#9B59B6';
      ctx.lineWidth = 3;
      ctx.setLineDash([3, 3]);
      ctx.beginPath();
      ctx.moveTo(w * (pos - 0.05), h * 0.65);
      ctx.lineTo(w * pos, h * 0.65);
      ctx.stroke();
      ctx.setLineDash([]);
    }
  });
  
  // DNA Ligase
  if (enzymeHighlight === 'ligase' || enzymeHighlight === 'all') {
    ctx.fillStyle = '#E67E22';
    ctx.beginPath();
    ctx.arc(w * 0.375, h * 0.65, 18, 0, Math.PI * 2);
    ctx.fill();
    
    ctx.fillStyle = '#FFF';
    ctx.font = 'bold 9px Arial';
    ctx.fillText('Ligase', w * 0.375, h * 0.655);
    
    // Show ligation point
    ctx.strokeStyle = '#FFD700';
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.arc(w * 0.35, h * 0.65, 12, 0, Math.PI * 2);
    ctx.stroke();
  }
  
  // Replication fork
  ctx.strokeStyle = '#95A5A6';
  ctx.lineWidth = 2;
  ctx.setLineDash([5, 5]);
  ctx.beginPath();
  ctx.moveTo(w * 0.75, h * 0.25);
  ctx.lineTo(w * 0.8, h * 0.5);
  ctx.lineTo(w * 0.75, h * 0.75);
  ctx.stroke();
  ctx.setLineDash([]);
  
  // Direction arrows
  ctx.fillStyle = '#000';
  ctx.font = '14px Arial';
  ctx.textAlign = 'center';
  ctx.fillText("5' → 3'", w * 0.5, h * 0.15);
  ctx.fillText("Leading Strand", w * 0.5, h * 0.18);
  
  ctx.fillText("3' → 5'", w * 0.5, h * 0.85);
  ctx.fillText("Lagging Strand", w * 0.5, h * 0.88);
}

static drawReplicationTermination(ctx, width, height, enzymeHighlight) {
  const w = width, h = height;
  
  // Two replication forks meeting
  // Left fork
  ctx.strokeStyle = '#E74C3C';
  ctx.lineWidth = 6;
  
  // Left upper strand
  ctx.beginPath();
  ctx.moveTo(w * 0.1, h * 0.3);
  ctx.quadraticCurveTo(w * 0.35, h * 0.35, w * 0.45, h * 0.45);
  ctx.stroke();
  
  // Left lower strand
  ctx.beginPath();
  ctx.moveTo(w * 0.1, h * 0.7);
  ctx.quadraticCurveTo(w * 0.35, h * 0.65, w * 0.45, h * 0.55);
  ctx.stroke();
  
  // Right fork
  // Right upper strand
  ctx.beginPath();
  ctx.moveTo(w * 0.9, h * 0.3);
  ctx.quadraticCurveTo(w * 0.65, h * 0.35, w * 0.55, h * 0.45);
  ctx.stroke();
  
  // Right lower strand
  ctx.beginPath();
  ctx.moveTo(w * 0.9, h * 0.7);
  ctx.quadraticCurveTo(w * 0.65, h * 0.65, w * 0.55, h * 0.55);
  ctx.stroke();
  
  // Termination region
  ctx.fillStyle = 'rgba(155, 89, 182, 0.2)';
  ctx.fillRect(w * 0.45, h * 0.4, w * 0.1, h * 0.2);
  
  ctx.strokeStyle = '#9B59B6';
  ctx.lineWidth = 3;
  ctx.setLineDash([8, 4]);
  ctx.strokeRect(w * 0.45, h * 0.4, w * 0.1, h * 0.2);
  ctx.setLineDash([]);
  
  // Termination proteins
  ctx.fillStyle = '#8E44AD';
  ctx.beginPath();
  ctx.arc(w * 0.5, h * 0.5, 25, 0, Math.PI * 2);
  ctx.fill();
  
  ctx.fillStyle = '#FFF';
  ctx.font = 'bold 10px Arial';
  ctx.textAlign = 'center';
  ctx.fillText('Tus', w * 0.5, h * 0.505);
  
  // Final ligase action
  if (enzymeHighlight === 'ligase' || enzymeHighlight === 'all') {
    ctx.fillStyle = '#E67E22';
    ctx.beginPath();
    ctx.arc(w * 0.48, h * 0.43, 15, 0, Math.PI * 2);
    ctx.fill();
    
    ctx.fillStyle = '#FFF';
    ctx.font = 'bold 8px Arial';
    ctx.fillText('Ligase', w * 0.48, h * 0.433);
  }
  
  // Completed daughter molecules
  ctx.strokeStyle = '#2ECC71';
  ctx.lineWidth = 4;
  
  // Molecule 1
  for (let strand = 0; strand < 2; strand++) {
    ctx.beginPath();
    for (let i = 0; i <= 5; i++) {
      const angle = (i / 5) * Math.PI + (strand * Math.PI);
      const xPos = w * 0.25 + Math.cos(angle) * w * 0.08;
      const yPos = h * 0.2 + (i / 5) * h * 0.25;
      if (i === 0) ctx.moveTo(xPos, yPos);
      else ctx.lineTo(xPos, yPos);
    }
    ctx.stroke();
  }
  
  // Molecule 2
  for (let strand = 0; strand < 2; strand++) {
    ctx.beginPath();
    for (let i = 0; i <= 5; i++) {
      const angle = (i / 5) * Math.PI + (strand * Math.PI);
      const xPos = w * 0.75 + Math.cos(angle) * w * 0.08;
      const yPos = h * 0.2 + (i / 5) * h * 0.25;
      if (i === 0) ctx.moveTo(xPos, yPos);
      else ctx.lineTo(xPos, yPos);
    }
    ctx.stroke();
  }
  
  // Labels
  ctx.fillStyle = '#000';
  ctx.font = 'bold 16px Arial';
  ctx.fillText('Termination Region', w * 0.5, h * 0.15);
  
  ctx.font = '12px Arial';
  ctx.fillText('Daughter DNA 1', w * 0.25, h * 0.55);
  ctx.fillText('Daughter DNA 2', w * 0.75, h * 0.55);
}

static drawLaggingStrand(ctx, width, height, enzymeHighlight) {
  const w = width, h = height;
  
  // Template strand
  ctx.strokeStyle = '#4A90E2';
  ctx.lineWidth = 6;
  ctx.beginPath();
  ctx.moveTo(w * 0.1, h * 0.5);
  ctx.lineTo(w * 0.9, h * 0.5);
  ctx.stroke();
  
  // 3' and 5' labels on template
  ctx.fillStyle = '#000';
  ctx.font = 'bold 14px Arial';
  ctx.textAlign = 'center';
  ctx.fillText("3'", w * 0.08, h * 0.48);
  ctx.fillText("5'", w * 0.92, h * 0.48);
  
  // Okazaki fragments with detailed steps
  const fragments = [
    { start: 0.15, end: 0.3, stage: 'complete' },
    { start: 0.35, end: 0.5, stage: 'polymerase' },
    { start: 0.55, end: 0.65, stage: 'primer' }
  ];
  
  fragments.forEach((frag, idx) => {
    // RNA primer (purple dashed line at start)
    if (frag.stage === 'primer' || frag.stage === 'polymerase') {
      ctx.strokeStyle = '#9B59B6';
      ctx.lineWidth = 4;
      ctx.setLineDash([4, 4]);
      ctx.beginPath();
      ctx.moveTo(w * frag.start, h * 0.35);
      ctx.lineTo(w * (frag.start + 0.03), h * 0.35);
      ctx.stroke();
      ctx.setLineDash([]);
      
      // Primase
      if (frag.stage === 'primer' && (enzymeHighlight === 'primase' || enzymeHighlight === 'all')) {
        ctx.fillStyle = '#F39C12';
        ctx.beginPath();
        ctx.arc(w * frag.start, h * 0.25, 22, 0, Math.PI * 2);
        ctx.fill();
        ctx.strokeStyle = '#000';
        ctx.lineWidth = 2;
        ctx.stroke();
        
        ctx.fillStyle = '#FFF';
        ctx.font = 'bold 10px Arial';
        ctx.fillText('Primase', w * frag.start, h * 0.255);
      }
    }
    
    // DNA strand
    ctx.strokeStyle = '#E74C3C';
    ctx.lineWidth = 5;
    ctx.beginPath();
    
    if (frag.stage === 'complete') {
      ctx.moveTo(w * frag.start, h * 0.35);
      ctx.lineTo(w * frag.end, h * 0.35);
    } else if (frag.stage === 'polymerase') {
      ctx.moveTo(w * (frag.start + 0.03), h * 0.35);
      ctx.lineTo(w * frag.end, h * 0.35);
    } else {
      ctx.moveTo(w * (frag.start + 0.03), h * 0.35);
      ctx.lineTo(w * (frag.start + 0.05), h * 0.35);
    }
    ctx.stroke();
    
    // DNA Polymerase
    if (frag.stage === 'polymerase' && (enzymeHighlight === 'dna-polymerase' || enzymeHighlight === 'all')) {
      const polGradient = ctx.createRadialGradient(w * frag.end, h * 0.35, 0, w * frag.end, h * 0.35, 25);
      polGradient.addColorStop(0, '#2ECC71');
      polGradient.addColorStop(1, '#27AE60');
      
      ctx.fillStyle = polGradient;
      ctx.beginPath();
      ctx.arc(w * frag.end, h * 0.35, 25, 0, Math.PI * 2);
      ctx.fill();
      ctx.strokeStyle = '#000';
      ctx.lineWidth = 2;
      ctx.stroke();
      
      ctx.fillStyle = '#FFF';
      ctx.font = 'bold 9px Arial';
      ctx.fillText('DNA Pol III', w * frag.end, h * 0.355);
    }
    
    // Ligase between fragments
    if (idx === 0 && (enzymeHighlight === 'ligase' || enzymeHighlight === 'all')) {
      ctx.fillStyle = '#E67E22';
      ctx.beginPath();
      ctx.arc(w * 0.325, h * 0.35, 20, 0, Math.PI * 2);
      ctx.fill();
      ctx.strokeStyle = '#000';
      ctx.lineWidth = 2;
      ctx.stroke();
      
      ctx.fillStyle = '#FFF';
      ctx.font = 'bold 9px Arial';
      ctx.fillText('Ligase', w * 0.325, h * 0.355);
      
      // Ligation point
      ctx.strokeStyle = '#FFD700';
      ctx.lineWidth = 4;
      ctx.beginPath();
      ctx.arc(w * 0.3, h * 0.35, 10, 0, Math.PI * 2);
      ctx.stroke();
    }
    
    // Fragment labels
    ctx.fillStyle = '#000';
    ctx.font = '10px Arial';
    const midPoint = (frag.start + frag.end) / 2;
    ctx.fillText(`Fragment ${idx + 1}`, w * midPoint, h * 0.22);
  });
  
  // Direction arrow
  ctx.strokeStyle = '#000';
  ctx.lineWidth = 2;
  ctx.fillStyle = '#000';
  this.drawArrow(ctx, w * 0.7, h * 0.65, w * 0.3, h * 0.65);
  
  ctx.font = '12px Arial';
  ctx.fillText('Direction of replication fork movement', w * 0.5, h * 0.75);
  
  // Title
  ctx.font = 'bold 16px Arial';
  ctx.fillText('Lagging Strand - Okazaki Fragments', w * 0.5, h * 0.1);
}

static drawLeadingStrand(ctx, width, height, enzymeHighlight) {
  const w = width, h = height;
  
  // Template strand
  ctx.strokeStyle = '#4A90E2';
  ctx.lineWidth = 6;
  ctx.beginPath();
  ctx.moveTo(w * 0.1, h * 0.5);
  ctx.lineTo(w * 0.9, h * 0.5);
  ctx.stroke();
  
  // 5' and 3' labels
  ctx.fillStyle = '#000';
  ctx.font = 'bold 14px Arial';
  ctx.textAlign = 'center';
  ctx.fillText("5'", w * 0.08, h * 0.48);
  ctx.fillText("3'", w * 0.92, h * 0.48);
  
  // Single RNA primer at origin
  ctx.strokeStyle = '#9B59B6';
  ctx.lineWidth = 4;
  ctx.setLineDash([4, 4]);
  ctx.beginPath();
  ctx.moveTo(w * 0.15, h * 0.35);
  ctx.lineTo(w * 0.18, h * 0.35);
  ctx.stroke();
  ctx.setLineDash([]);
  
  // Continuous DNA synthesis
  ctx.strokeStyle = '#E74C3C';
  ctx.lineWidth = 5;
  ctx.beginPath();
  ctx.moveTo(w * 0.18, h * 0.35);
  ctx.lineTo(w * 0.75, h * 0.35);
  ctx.stroke();
  
  // DNA Polymerase III at the end
  if (enzymeHighlight === 'dna-polymerase' || enzymeHighlight === 'all') {
    const polGradient = ctx.createRadialGradient(w * 0.75, h * 0.35, 0, w * 0.75, h * 0.35, 30);
    polGradient.addColorStop(0, '#2ECC71');
    polGradient.addColorStop(1, '#27AE60');
    
    ctx.fillStyle = polGradient;
    ctx.beginPath();
    ctx.arc(w * 0.75, h * 0.35, 30, 0, Math.PI * 2);
    ctx.fill();
    ctx.strokeStyle = '#000';
    ctx.lineWidth = 2;
    ctx.stroke();
    
    ctx.fillStyle = '#FFF';
    ctx.font = 'bold 11px Arial';
    ctx.fillText('DNA Pol III', w * 0.75, h * 0.355);
  }
  
  // Helicase ahead
  if (enzymeHighlight === 'helicase' || enzymeHighlight === 'all') {
    const helicaseGradient = ctx.createRadialGradient(w * 0.82, h * 0.5, 0, w * 0.82, h * 0.5, 28);
    helicaseGradient.addColorStop(0, '#FFD700');
    helicaseGradient.addColorStop(1, '#FFA500');
    
    ctx.fillStyle = helicaseGradient;
    ctx.beginPath();
    ctx.arc(w * 0.82, h * 0.5, 28, 0, Math.PI * 2);
    ctx.fill();
    ctx.strokeStyle = '#000';
    ctx.lineWidth = 2;
    ctx.stroke();
    
    ctx.fillStyle = '#000';
    ctx.font = 'bold 11px Arial';
    ctx.fillText('Helicase', w * 0.82, h * 0.505);
  }
  
  // SSB proteins
  ctx.fillStyle = '#3498DB';
  const ssbPos = [0.78, 0.81, 0.84];
  ssbPos.forEach(pos => {
    ctx.beginPath();
    ctx.arc(w * pos, h * 0.42, 8, 0, Math.PI * 2);
    ctx.fill();
  });
  
  ctx.fillStyle = '#000';
  ctx.font = '9px Arial';
  ctx.fillText('SSB', w * 0.81, h * 0.45);
  
  // Direction indicators
  ctx.strokeStyle = '#000';
  ctx.lineWidth = 2;
  ctx.fillStyle = '#000';
  
  // Synthesis direction
  this.drawArrow(ctx, w * 0.3, h * 0.25, w * 0.65, h * 0.25);
  ctx.font = '11px Arial';
  ctx.fillText("5' → 3' synthesis", w * 0.475, h * 0.22);
  
  // Fork movement
  this.drawArrow(ctx, w * 0.3, h * 0.65, w * 0.7, h * 0.65);
  ctx.fillText('Replication fork movement', w * 0.5, h * 0.72);
  
  // Continuous synthesis indicator
  ctx.strokeStyle = '#2ECC71';
  ctx.lineWidth = 3;
  ctx.setLineDash([10, 5]);
  ctx.beginPath();
  ctx.moveTo(w * 0.2, h * 0.28);
  ctx.lineTo(w * 0.7, h * 0.28);
  ctx.stroke();
  ctx.setLineDash([]);
  
  ctx.fillStyle = '#2ECC71';
  ctx.font = 'bold 12px Arial';
  ctx.fillText('Continuous synthesis', w * 0.45, h * 0.18);
  
  // Title
  ctx.fillStyle = '#000';
  ctx.font = 'bold 16px Arial';
  ctx.fillText('Leading Strand - Continuous Synthesis', w * 0.5, h * 0.1);
}

// ===== TRANSCRIPTION DIAGRAMS =====

static drawTranscription(ctx, x, y, width, height, stage, detail) {
  ctx.save();
  ctx.translate(x, y);
  
  switch(stage) {
    case 'complete':
    case 'initiation':
      this.drawTranscriptionInitiation(ctx, width, height, detail);
      break;
    case 'elongation':
      this.drawTranscriptionElongation(ctx, width, height, detail);
      break;
    case 'termination':
      this.drawTranscriptionTermination(ctx, width, height, detail);
      break;
    case 'rna-processing':
      this.drawRNAProcessing(ctx, width, height, detail);
      break;
  }
  
  ctx.restore();
}

static drawTranscriptionInitiation(ctx, width, height, detail) {
  const w = width, h = height;
  
  // DNA double helix
  ctx.strokeStyle = '#4A90E2';
  ctx.lineWidth = 6;
  
  for (let strand = 0; strand < 2; strand++) {
    ctx.beginPath();
    for (let i = 0; i <= 15; i++) {
      const angle = (i / 15) * Math.PI * 2 + (strand * Math.PI);
      const xPos = w * 0.5 + Math.cos(angle) * w * 0.08;
      const yPos = h * 0.15 + (i / 15) * h * 0.7;
      if (i === 0) ctx.moveTo(xPos, yPos);
      else ctx.lineTo(xPos, yPos);
    }
    ctx.stroke();
  }
  
  // Promoter region
  ctx.fillStyle = 'rgba(255, 193, 7, 0.3)';
  ctx.fillRect(w * 0.35, h * 0.35, w * 0.3, h * 0.1);
  
  ctx.strokeStyle = '#FFC107';
  ctx.lineWidth = 3;
  ctx.setLineDash([8, 4]);
  ctx.strokeRect(w * 0.35, h * 0.35, w * 0.3, h * 0.1);
  ctx.setLineDash([]);
  
  ctx.fillStyle = '#000';
  ctx.font = 'bold 14px Arial';
  ctx.textAlign = 'center';
  ctx.fillText('Promoter', w * 0.5, h * 0.33);
  
  // TATA box
  if (detail === 'promoter' || detail === 'overview') {
    ctx.fillStyle = '#FF9800';
    ctx.fillRect(w * 0.42, h * 0.38, w * 0.16, h * 0.04);
    
    ctx.fillStyle = '#000';
    ctx.font = 'bold 11px Arial';
    ctx.fillText('TATA Box', w * 0.5, h * 0.405);
  }
  
  // RNA Polymerase II
  if (detail === 'rna-polymerase' || detail === 'overview') {
    const polGradient = ctx.createRadialGradient(w * 0.5, h * 0.5, 0, w * 0.5, h * 0.5, 40);
    polGradient.addColorStop(0, '#E74C3C');
    polGradient.addColorStop(1, '#C0392B');
    
    ctx.fillStyle = polGradient;
    ctx.beginPath();
    ctx.arc(w * 0.5, h * 0.5, 40, 0, Math.PI * 2);
    ctx.fill();
    ctx.strokeStyle = '#000';
    ctx.lineWidth = 2;
    ctx.stroke();
    
    ctx.fillStyle = '#FFF';
    ctx.font = 'bold 12px Arial';
    ctx.fillText('RNA Pol II', w * 0.5, h * 0.505);
  }
  
  // Transcription factors
  if (detail === 'transcription-factors' || detail === 'overview') {
    const tfColors = ['#9B59B6', '#3498DB', '#1ABC9C'];
    const tfPositions = [[0.38, 0.42], [0.5, 0.42], [0.62, 0.42]];
    
    tfPositions.forEach(([px, py], idx) => {
      ctx.fillStyle = tfColors[idx];
      ctx.beginPath();
      ctx.arc(w * px, h * py, 18, 0, Math.PI * 2);
      ctx.fill();
      ctx.strokeStyle = '#000';
      ctx.lineWidth = 1.5;
      ctx.stroke();
      
      ctx.fillStyle = '#FFF';
      ctx.font = 'bold 8px Arial';
      ctx.fillText(`TF${idx + 1}`, w * px, h * py + 3);
    });
  }
  
  // Enhancer region (if detail)
  if (detail === 'enhancers') {
    ctx.fillStyle = 'rgba(76, 175, 80, 0.3)';
    ctx.fillRect(w * 0.1, h * 0.2, w * 0.15, h * 0.08);
    
    ctx.strokeStyle = '#4CAF50';
    ctx.lineWidth = 2;
    ctx.setLineDash([5, 5]);
    ctx.strokeRect(w * 0.1, h * 0.2, w * 0.15, h * 0.08);
    ctx.setLineDash([]);
    
    ctx.fillStyle = '#000';
    ctx.font = '11px Arial';
    ctx.fillText('Enhancer', w * 0.175, h * 0.18);
    
    // Mediator complex connecting enhancer
    ctx.strokeStyle = '#4CAF50';
    ctx.lineWidth = 2;
    ctx.setLineDash([3, 3]);
    ctx.beginPath();
    ctx.moveTo(w * 0.25, h * 0.24);
    ctx.quadraticCurveTo(w * 0.35, h * 0.3, w * 0.42, h * 0.42);
    ctx.stroke();
    ctx.setLineDash([]);
  }
  
  // Directional arrow
  ctx.fillStyle = '#000';
  ctx.font = 'bold 12px Arial';
  ctx.fillText("5'", w * 0.2, h * 0.6);
  ctx.fillText("3'", w * 0.8, h * 0.6);
  
  this.drawArrow(ctx, w * 0.25, h * 0.65, w * 0.75, h * 0.65);
  ctx.font = '11px Arial';
  ctx.fillText('Direction of transcription', w * 0.5, h * 0.72);
}

static drawTranscriptionElongation(ctx, width, height, detail) {
  const w = width, h = height;
  
  // DNA being transcribed
  // Template strand
  ctx.strokeStyle = '#4A90E2';
  ctx.lineWidth = 6;
  ctx.beginPath();
  ctx.moveTo(w * 0.1, h * 0.6);
  ctx.lineTo(w * 0.9, h * 0.6);
  ctx.stroke();
  
  // Non-template strand
  ctx.beginPath();
  ctx.moveTo(w * 0.1, h * 0.4);
  ctx.lineTo(w * 0.35, h * 0.4);
  ctx.stroke();
  
  ctx.beginPath();
  ctx.moveTo(w * 0.65, h * 0.4);
  ctx.lineTo(w * 0.9, h * 0.4);
  ctx.stroke();
  
  // Transcription bubble (unwound DNA)
  ctx.strokeStyle = '#4A90E2';
  ctx.lineWidth = 5;
  ctx.beginPath();
  ctx.moveTo(w * 0.35, h * 0.4);
  ctx.quadraticCurveTo(w * 0.4, h * 0.3, w * 0.45, h * 0.35);
  ctx.stroke();
  
  ctx.beginPath();
  ctx.moveTo(w * 0.55, h * 0.35);
  ctx.quadraticCurveTo(w * 0.6, h * 0.3, w * 0.65, h * 0.4);
  ctx.stroke();
  
  if (detail === 'overview' || detail === 'transcription-bubble') {
    ctx.fillStyle = 'rgba(255, 235, 59, 0.2)';
    ctx.beginPath();
    ctx.moveTo(w * 0.35, h * 0.4);
    ctx.quadraticCurveTo(w * 0.4, h * 0.3, w * 0.45, h * 0.35);
    ctx.lineTo(w * 0.55, h * 0.35);
    ctx.quadraticCurveTo(w * 0.6, h * 0.3, w * 0.65, h * 0.4);
    ctx.lineTo(w * 0.65, h * 0.6);
    ctx.lineTo(w * 0.35, h * 0.6);
    ctx.closePath();
    ctx.fill();
  }
  
  // RNA Polymerase
  const polGradient = ctx.createRadialGradient(w * 0.5, h * 0.5, 0, w * 0.5, h * 0.5, 45);
  polGradient.addColorStop(0, '#E74C3C');
  polGradient.addColorStop(0.6, '#C0392B');
  polGradient.addColorStop(1, '#A93226');
  
  ctx.fillStyle = polGradient;
  ctx.beginPath();
  ctx.arc(w * 0.5, h * 0.5, 45, 0, Math.PI * 2);
  ctx.fill();
  ctx.strokeStyle = '#000';
  ctx.lineWidth = 3;
  ctx.stroke();
  
  ctx.fillStyle = '#FFF';
  ctx.font = 'bold 14px Arial';
  ctx.textAlign = 'center';
  ctx.fillText('RNA', w * 0.5, h * 0.49);
  ctx.fillText('Polymerase II', w * 0.5, h * 0.52);
  
  // Emerging RNA transcript
  ctx.strokeStyle = '#9B59B6';
  ctx.lineWidth = 5;
  ctx.beginPath();
  ctx.moveTo(w * 0.5, h * 0.55);
  ctx.quadraticCurveTo(w * 0.45, h * 0.65, w * 0.4, h * 0.7);
  ctx.quadraticCurveTo(w * 0.35, h * 0.75, w * 0.25, h * 0.75);
  ctx.stroke();
  
  // RNA strand with bases
  ctx.fillStyle = '#9B59B6';
  const rnaPositions = [0.45, 0.4, 0.35, 0.3, 0.25];
  rnaPositions.forEach((px, idx) => {
    const py = 0.7 + (idx > 2 ? 0.05 : idx * 0.015);
    ctx.beginPath();
    ctx.arc(w * px, h * py, 6, 0, Math.PI * 2);
    ctx.fill();
  });
  
  // NTPs (nucleotide triphosphates) being added
  if (detail === 'overview' || detail === 'rna-polymerase') {
    const ntpColors = ['#FF6B6B', '#4ECDC4', '#FFD93D', '#95E1D3'];
    const ntpPos = [[0.58, 0.42], [0.62, 0.38], [0.66, 0.45]];
    
    ntpPos.forEach(([px, py], idx) => {
      ctx.fillStyle = ntpColors[idx % 4];
      ctx.beginPath();
      ctx.arc(w * px, h * py, 10, 0, Math.PI * 2);
      ctx.fill();
      ctx.strokeStyle = '#000';
      ctx.lineWidth = 1.5;
      ctx.stroke();
    });
    
    ctx.fillStyle = '#000';
    ctx.font = '10px Arial';
    ctx.fillText('NTPs', w * 0.68, h * 0.37);
  }
  
  // Template strand labels
  ctx.fillStyle = '#000';
  ctx.font = 'bold 12px Arial';
  ctx.fillText("3'", w * 0.08, h * 0.58);
  ctx.fillText("5'", w * 0.92, h * 0.58);
  
  ctx.fillText("5'", w * 0.08, h * 0.38);
  ctx.fillText("3'", w * 0.92, h * 0.38);
  
  // RNA 5' to 3' label
  ctx.fillStyle = '#9B59B6';
  ctx.fillText("5'", w * 0.52, h * 0.58);
  ctx.fillText("3'", w * 0.22, h * 0.73);
  
  // Direction arrow
  ctx.strokeStyle = '#000';
  ctx.lineWidth = 2;
  ctx.fillStyle = '#000';
  this.drawArrow(ctx, w * 0.3, h * 0.85, w * 0.7, h * 0.85);
  
  ctx.font = '11px Arial';
  ctx.fillStyle = '#000';
  ctx.fillText('Direction of transcription', w * 0.5, h * 0.92);
  
  // Title
  ctx.font = 'bold 16px Arial';
  ctx.fillText('Elongation Phase', w * 0.5, h * 0.1);
}

static drawTranscriptionTermination(ctx, width, height, detail) {
  const w = width, h = height;
  
  // DNA
  ctx.strokeStyle = '#4A90E2';
  ctx.lineWidth = 6;
  
  for (let strand = 0; strand < 2; strand++) {
    ctx.beginPath();
    for (let i = 0; i <= 10; i++) {
      const angle = (i / 10) * Math.PI * 1.5 + (strand * Math.PI);
      const xPos = w * 0.5 + Math.cos(angle) * w * 0.08;
      const yPos = h * 0.2 + (i / 10) * h * 0.5;
      if (i === 0) ctx.moveTo(xPos, yPos);
      else ctx.lineTo(xPos, yPos);
    }
    ctx.stroke();
  }
  
  // Terminator sequence
  ctx.fillStyle = 'rgba(231, 76, 60, 0.2)';
  ctx.fillRect(w * 0.4, h * 0.5, w * 0.2, h * 0.12);
  
  ctx.strokeStyle = '#E74C3C';
  ctx.lineWidth = 3;
  ctx.setLineDash([8, 4]);
  ctx.strokeRect(w * 0.4, h * 0.5, w * 0.2, h * 0.12);
  ctx.setLineDash([]);
  
  ctx.fillStyle = '#000';
  ctx.font = 'bold 13px Arial';
  ctx.textAlign = 'center';
  ctx.fillText('Terminator', w * 0.5, h * 0.48);
  ctx.font = '10px Arial';
  ctx.fillText('Sequence', w * 0.5, h * 0.5);
  
  // RNA Polymerase releasing
  const polGradient = ctx.createRadialGradient(w * 0.55, h * 0.55, 0, w * 0.55, h * 0.55, 35);
  polGradient.addColorStop(0, '#E74C3C');
  polGradient.addColorStop(1, '#C0392B');
  
  ctx.fillStyle = polGradient;
  ctx.beginPath();
  ctx.arc(w * 0.55, h * 0.55, 35, 0, Math.PI * 2);
  ctx.fill();
  ctx.strokeStyle = '#000';
  ctx.lineWidth = 2;
  ctx.stroke();
  
  ctx.fillStyle = '#FFF';
  ctx.font = 'bold 11px Arial';
  ctx.fillText('RNA Pol', w * 0.55, h * 0.555);
  
  // Released RNA transcript
  ctx.strokeStyle = '#9B59B6';
  ctx.lineWidth = 6;
  ctx.beginPath();
  ctx.moveTo(w * 0.5, h * 0.6);
  ctx.quadraticCurveTo(w * 0.4, h * 0.65, w * 0.35, h * 0.7);
  ctx.quadraticCurveTo(w * 0.3, h * 0.75, w * 0.3, h * 0.82);
  ctx.stroke();
  
  // Hairpin structure (rho-independent termination)
  if (detail === 'overview' || detail === 'rna-polymerase') {
    ctx.strokeStyle = '#9B59B6';
    ctx.lineWidth = 5;
    
    // Hairpin loop
    ctx.beginPath();
    ctx.arc(w * 0.32, h * 0.75, 15, Math.PI, 0, false);
    ctx.stroke();
    
    // Stem
    ctx.beginPath();
    ctx.moveTo(w * 0.32 - 15, h * 0.75);
    ctx.lineTo(w * 0.32 - 15, h * 0.82);
    ctx.stroke();
    
    ctx.beginPath();
    ctx.moveTo(w * 0.32 + 15, h * 0.75);
    ctx.lineTo(w * 0.32 + 15, h * 0.82);
    ctx.stroke();
    
    ctx.fillStyle = '#000';
    ctx.font = '10px Arial';
    ctx.fillText('Hairpin', w * 0.32, h * 0.73);
  }
  
  // Poly-U tail
  ctx.fillStyle = '#4ECDC4';
  const uTailPos = [0.3, 0.31, 0.32, 0.33, 0.34];
  uTailPos.forEach(px => {
    ctx.beginPath();
    ctx.arc(w * px, h * 0.85, 5, 0, Math.PI * 2);
    ctx.fill();
  });
  
  ctx.fillStyle = '#000';
  ctx.font = '9px Arial';
  ctx.fillText('Poly-U tail', w * 0.32, h * 0.88);
  
  // Release arrow
  ctx.strokeStyle = '#666';
  ctx.lineWidth = 2;
  ctx.fillStyle = '#666';
  this.drawArrow(ctx, w * 0.4, h * 0.68, w * 0.35, h * 0.78);
  
  ctx.font = '10px Arial';
  ctx.fillText('Release', w * 0.42, h * 0.73);
  
  // Labels
  ctx.fillStyle = '#9B59B6';
  ctx.font = 'bold 11px Arial';
  ctx.fillText("5'", w * 0.5, h * 0.62);
  ctx.fillText("3'", w * 0.36, h * 0.86);
  
  // Title
  ctx.fillStyle = '#000';
  ctx.font = 'bold 16px Arial';
  ctx.fillText('Termination Phase', w * 0.5, h * 0.12);
}

static drawRNAProcessing(ctx, width, height, detail) {
  const w = width, h = height;
  
  // Pre-mRNA (top)
  ctx.strokeStyle = '#9B59B6';
  ctx.lineWidth = 8;
  ctx.beginPath();
  ctx.moveTo(w * 0.1, h * 0.15);
  ctx.lineTo(w * 0.9, h * 0.15);
  ctx.stroke();
  
  ctx.fillStyle = '#000';
  ctx.font = 'bold 14px Arial';
  ctx.textAlign = 'center';
  ctx.fillText('Pre-mRNA', w * 0.5, h * 0.1);
  
  // Exons and Introns
  const exonColor = '#2ECC71';
  const intronColor = '#E74C3C';
  
  // Exons
  ctx.fillStyle = exonColor;
  ctx.fillRect(w * 0.1, h * 0.13, w * 0.15, h * 0.04);
  ctx.fillRect(w * 0.4, h * 0.13, w * 0.12, h * 0.04);
  ctx.fillRect(w * 0.68, h * 0.13, w * 0.15, h * 0.04);
  
  // Introns
  ctx.fillStyle = intronColor;
  ctx.fillRect(w * 0.25, h * 0.13, w * 0.15, h * 0.04);
  ctx.fillRect(w * 0.52, h * 0.13, w * 0.16, h * 0.04);
  ctx.fillRect(w * 0.83, h * 0.13, w * 0.07, h * 0.04);
  
  // Labels
  ctx.fillStyle = '#000';
  ctx.font = '10px Arial';
  ctx.fillText('Exon 1', w * 0.175, h * 0.21);
  ctx.fillText('Intron', w * 0.325, h * 0.21);
  ctx.fillText('Exon 2', w * 0.46, h * 0.21);
  ctx.fillText('Intron', w * 0.6, h * 0.21);
  ctx.fillText('Exon 3', w * 0.755, h * 0.21);
  
  // 5' Cap addition
  ctx.fillStyle = '#FFD700';
  ctx.beginPath();
  ctx.arc(w * 0.1, h * 0.15, 12, 0, Math.PI * 2);
  ctx.fill();
  ctx.strokeStyle = '#000';
  ctx.lineWidth = 2;
  ctx.stroke();
  
  ctx.fillStyle = '#000';
  ctx.font = 'bold 9px Arial';
  ctx.fillText('Cap', w * 0.1, h * 0.155);
  
  ctx.font = '10px Arial';
  ctx.fillText("5' Cap", w * 0.1, h * 0.25);
  
  // Poly-A tail
  ctx.fillStyle = '#FF6B6B';
  for (let i = 0; i < 8; i++) {
    ctx.beginPath();
    ctx.arc(w * (0.83 + i * 0.01), h * 0.15, 4, 0, Math.PI * 2);
    ctx.fill();
  }
  
  ctx.fillStyle = '#000';
  ctx.font = '10px Arial';
  ctx.fillText('Poly-A Tail', w * 0.87, h * 0.25);
  
  // Splicing process (middle)
  ctx.strokeStyle = '#95A5A6';
  ctx.lineWidth = 2;
  ctx.fillStyle = '#95A5A6';
  
  // Arrows showing processing
  this.drawArrow(ctx, w * 0.2, h * 0.3, w * 0.2, h * 0.45);
  this.drawArrow(ctx, w * 0.5, h * 0.3, w * 0.5, h * 0.45);
  this.drawArrow(ctx, w * 0.8, h * 0.3, w * 0.8, h * 0.45);
  
  ctx.font = 'bold 13px Arial';
  ctx.fillText('Splicing', w * 0.35, h * 0.38);
  
  // Spliced introns (lariat structures)
  if (detail === 'overview' || detail === 'rna-splicing') {
    ctx.strokeStyle = '#E74C3C';
    ctx.lineWidth = 4;
    
    // Lariat 1
    ctx.beginPath();
    ctx.arc(w * 0.32, h * 0.55, 20, 0, Math.PI * 2);
    ctx.stroke();
    
    ctx.beginPath();
    ctx.moveTo(w * 0.32 + 20, h * 0.55);
    ctx.lineTo(w * 0.32 + 35, h * 0.55);
    ctx.stroke();
    
    // Lariat 2
    ctx.beginPath();
    ctx.arc(w * 0.6, h * 0.55, 22, 0, Math.PI * 2);
    ctx.stroke();
    
    ctx.beginPath();
    ctx.moveTo(w * 0.6 + 22, h * 0.55);
    ctx.lineTo(w * 0.6 + 38, h * 0.55);
    ctx.stroke();
    
    ctx.fillStyle = '#E74C3C';
    ctx.font = '10px Arial';
    ctx.fillText('Lariat', w * 0.32, h * 0.52);
    ctx.fillText('(degraded)', w * 0.32, h * 0.64);
  }
  
  // Mature mRNA (bottom)
  ctx.strokeStyle = '#2ECC71';
  ctx.lineWidth = 8;
  ctx.beginPath();
  ctx.moveTo(w * 0.15, h * 0.75);
  ctx.lineTo(w * 0.85, h * 0.75);
  ctx.stroke();
  
  ctx.fillStyle = '#000';
  ctx.font = 'bold 14px Arial';
  ctx.fillText('Mature mRNA', w * 0.5, h * 0.7);
  
  // Only exons in mature mRNA
  ctx.fillStyle = exonColor;
  ctx.fillRect(w * 0.15, h * 0.73, w * 0.2, h * 0.04);
  ctx.fillRect(w * 0.4, h * 0.73, w * 0.15, h * 0.04);
  ctx.fillRect(w * 0.6, h * 0.73, w * 0.2, h * 0.04);
  
  ctx.fillStyle = '#000';
  ctx.font = '10px Arial';
  ctx.fillText('Exon 1', w * 0.25, h * 0.82);
  ctx.fillText('Exon 2', w * 0.475, h * 0.82);
  ctx.fillText('Exon 3', w * 0.7, h * 0.82);
  
  // 5' Cap on mature
  ctx.fillStyle = '#FFD700';
  ctx.beginPath();
  ctx.arc(w * 0.15, h * 0.75, 12, 0, Math.PI * 2);
  ctx.fill();
  ctx.strokeStyle = '#000';
  ctx.lineWidth = 2;
  ctx.stroke();
  
  // Poly-A tail on mature
  ctx.fillStyle = '#FF6B6B';
  for (let i = 0; i < 8; i++) {
    ctx.beginPath();
    ctx.arc(w * (0.8 + i * 0.01), h * 0.75, 4, 0, Math.PI * 2);
    ctx.fill();
  }
  
  // Export to cytoplasm indicator
  ctx.strokeStyle = '#000';
  ctx.lineWidth = 2;
  ctx.fillStyle = '#000';
  this.drawArrow(ctx, w * 0.5, h * 0.85, w * 0.5, h * 0.95);
  
  ctx.font = '11px Arial';
  ctx.fillText('Export to cytoplasm', w * 0.5, h * 0.93);
  
  // Title
  ctx.font = 'bold 16px Arial';
  ctx.fillText('RNA Processing (Splicing)', w * 0.5, h * 0.05);
}

// ===== TRANSLATION DIAGRAMS =====

static drawTranslation(ctx, x, y, width, height, stage, componentFocus) {
  ctx.save();
  ctx.translate(x, y);
  
  switch(stage) {
    case 'complete':
    case 'initiation':
      this.drawTranslationInitiation(ctx, width, height, componentFocus);
      break;
    case 'elongation':
      this.drawTranslationElongation(ctx, width, height, componentFocus);
      break;
    case 'termination':
      this.drawTranslationTermination(ctx, width, height, componentFocus);
      break;
    case 'ribosome-binding':
      this.drawRibosomeBinding(ctx, width, height, componentFocus);
      break;
  }
  
  ctx.restore();
}

static drawTranslationInitiation(ctx, width, height, componentFocus) {
  const w = width, h = height;
  
  // mRNA
  ctx.strokeStyle = '#9B59B6';
  ctx.lineWidth = 6;
  ctx.beginPath();
  ctx.moveTo(w * 0.1, h * 0.5);
  ctx.lineTo(w * 0.9, h * 0.5);
  ctx.stroke();
  
  // 5' Cap
  ctx.fillStyle = '#FFD700';
  ctx.beginPath();
  ctx.arc(w * 0.1, h * 0.5, 15, 0, Math.PI * 2);
  ctx.fill();
  ctx.strokeStyle = '#000';
  ctx.lineWidth = 2;
  ctx.stroke();
  
  ctx.fillStyle = '#000';
  ctx.font = 'bold 9px Arial';
  ctx.textAlign = 'center';
  ctx.fillText('Cap', w * 0.1, h * 0.505);
  
  // Codons on mRNA
  const codons = ['AUG', 'UUU', 'GCA', 'UAC'];
  codons.forEach((codon, idx) => {
    const xPos = w * (0.25 + idx * 0.15);
    
    ctx.fillStyle = 'rgba(155, 89, 182, 0.3)';
    ctx.fillRect(xPos - 15, h * 0.48, 30, h * 0.04);
    
    ctx.fillStyle = '#000';
    ctx.font = 'bold 11px Arial';
    ctx.fillText(codon, xPos, h * 0.505);
  });
  
  // Start codon highlight
  ctx.strokeStyle = '#E74C3C';
  ctx.lineWidth = 3;
  ctx.strokeRect(w * 0.235, h * 0.48, 30, h * 0.04);
  
  ctx.fillStyle = '#E74C3C';
  ctx.font = '10px Arial';
  ctx.fillText('Start', w * 0.25, h * 0.45);
  
  // Small ribosomal subunit (40S in eukaryotes)
  if (componentFocus === 'ribosome' || componentFocus === 'complete') {
    const smallSubGradient = ctx.createRadialGradient(w * 0.25, h * 0.35, 0, w * 0.25, h * 0.35, 40);
    smallSubGradient.addColorStop(0, '#3498DB');
    smallSubGradient.addColorStop(1, '#2874A6');
    
    ctx.fillStyle = smallSubGradient;
    ctx.beginPath();
    ctx.ellipse(w * 0.25, h * 0.35, 50, 30, 0, 0, Math.PI * 2);
    ctx.fill();
    ctx.strokeStyle = '#000';
    ctx.lineWidth = 2;
    ctx.stroke();
    
    ctx.fillStyle = '#FFF';
    ctx.font = 'bold 12px Arial';
    ctx.fillText('40S', w * 0.25, h * 0.36);
  }
  
  // Initiator tRNA (Met-tRNA)
  if (componentFocus === 'trna' || componentFocus === 'complete') {
    this.drawTRNA(ctx, w * 0.25, h * 0.5, 'UAC', 'Met', 25);
  }
  
  // Large ribosomal subunit (60S) approaching
  if (componentFocus === 'ribosome' || componentFocus === 'complete') {
    const largeSubGradient = ctx.createRadialGradient(w * 0.35, h * 0.25, 0, w * 0.35, h * 0.25, 50);
    largeSubGradient.addColorStop(0, '#2ECC71');
    largeSubGradient.addColorStop(1, '#229954');
    
    ctx.fillStyle = largeSubGradient;
    ctx.beginPath();
    ctx.ellipse(w * 0.35, h * 0.25, 60, 35, 0, 0, Math.PI * 2);
    ctx.fill();
    ctx.strokeStyle = '#000';
    ctx.lineWidth = 2;
    ctx.stroke();
    
    ctx.fillStyle = '#FFF';
    ctx.font = 'bold 13px Arial';
    ctx.fillText('60S', w * 0.35, h * 0.26);
    
    // Arrow showing joining
    ctx.strokeStyle = '#666';
    ctx.lineWidth = 2;
    ctx.fillStyle = '#666';
    this.drawArrow(ctx, w * 0.35, h * 0.3, w * 0.28, h * 0.38);
  }
  
  // Initiation factors
  ctx.fillStyle = '#F39C12';
  const ifPositions = [[0.15, 0.4], [0.2, 0.35], [0.3, 0.32]];
  ifPositions.forEach(([px, py], idx) => {
    ctx.beginPath();
    ctx.arc(w * px, h * py, 12, 0, Math.PI * 2);
    ctx.fill();
    
    ctx.fillStyle = '#FFF';
    ctx.font = 'bold 8px Arial';
    ctx.fillText(`eIF${idx + 1}`, w * px, h * py + 3);
    ctx.fillStyle = '#F39C12';
  });
  
  // Labels
  ctx.fillStyle = '#000';
  ctx.font = '12px Arial';
  ctx.fillText("5'", w * 0.05, h * 0.48);
  ctx.fillText("3'", w * 0.95, h * 0.48);
  
  ctx.font = 'bold 16px Arial';
  ctx.fillText('Translation Initiation', w * 0.5, h * 0.1);
}

static drawTranslationElongation(ctx, width, height, componentFocus) {
  const w = width, h = height;
  
  // mRNA
  ctx.strokeStyle = '#9B59B6';
  ctx.lineWidth = 6;
  ctx.beginPath();
  ctx.moveTo(w * 0.1, h * 0.6);
  ctx.lineTo(w * 0.9, h * 0.6);
  ctx.stroke();
  
  // Codons
  const codons = ['GCA', 'UAC', 'UUU', 'AAG'];
  codons.forEach((codon, idx) => {
    const xPos = w * (0.25 + idx * 0.15);
    
    ctx.fillStyle = 'rgba(155, 89, 182, 0.3)';
    ctx.fillRect(xPos - 15, h * 0.58, 30, h * 0.04);
    
    ctx.fillStyle = '#000';
    ctx.font = 'bold 10px Arial';
    ctx.textAlign = 'center';
    ctx.fillText(codon, xPos, h * 0.605);
  });
  
  // Ribosome (both subunits assembled)
  if (componentFocus === 'ribosome' || componentFocus === 'complete') {
    // Large subunit (60S)
    const largeSubGradient = ctx.createRadialGradient(w * 0.4, h * 0.45, 0, w * 0.4, h * 0.45, 60);
    largeSubGradient.addColorStop(0, '#2ECC71');
    largeSubGradient.addColorStop(1, '#229954');
    
    ctx.fillStyle = largeSubGradient;
    ctx.beginPath();
    ctx.ellipse(w * 0.4, h * 0.45, 70, 40, 0, 0, Math.PI * 2);
    ctx.fill();
    ctx.strokeStyle = '#000';
    ctx.lineWidth = 2;
    ctx.stroke();
    
    // Small subunit (40S)
    const smallSubGradient = ctx.createRadialGradient(w * 0.4, h * 0.6, 0, w * 0.4, h * 0.6, 50);
    smallSubGradient.addColorStop(0, '#3498DB');
    smallSubGradient.addColorStop(1, '#2874A6');
    
    ctx.fillStyle = smallSubGradient;
    ctx.beginPath();
    ctx.ellipse(w * 0.4, h * 0.6, 60, 35, 0, 0, Math.PI * 2);
    ctx.fill();
    ctx.stroke();
  }
  
  // Ribosome binding sites (A, P, E)
  ctx.strokeStyle = '#000';
  ctx.lineWidth = 2;
  ctx.setLineDash([3, 3]);
  
  // E site
  ctx.beginPath();
  ctx.rect(w * 0.24, h * 0.52, 30, h * 0.1);
  ctx.stroke();
  
  ctx.fillStyle = '#95A5A6';
  ctx.font = 'bold 11px Arial';
  ctx.fillText('E', w * 0.255, h * 0.50);
  
  // P site
  ctx.beginPath();
  ctx.rect(w * 0.325, h * 0.52, 30, h * 0.1);
  ctx.stroke();
  
  ctx.fillStyle = '#E67E22';
  ctx.fillText('P', w * 0.34, h * 0.50);
  
  // A site
  ctx.beginPath();
  ctx.rect(w * 0.41, h * 0.52, 30, h * 0.1);
  ctx.stroke();
  
  ctx.fillStyle = '#E74C3C';
  ctx.fillText('A', w * 0.425, h * 0.50);
  
  ctx.setLineDash([]);
  
  // tRNAs
  if (componentFocus === 'trna' || componentFocus === 'complete') {
    // Exiting tRNA in E site
    this.drawTRNA(ctx, w * 0.255, h * 0.6, 'CGU', '', 20, 0.5);
    
    // tRNA with growing peptide in P site
    this.drawTRNA(ctx, w * 0.34, h * 0.6, 'AUG', 'Met', 25);
    
    // Incoming tRNA in A site
    this.drawTRNA(ctx, w * 0.425, h * 0.6, 'AAA', 'Phe', 25);
  }
  
  // Growing polypeptide chain
  if (componentFocus === 'amino-acids' || componentFocus === 'complete' || componentFocus === 'peptide-bond') {
    ctx.strokeStyle = '#FF6B6B';
    ctx.lineWidth = 4;
    ctx.beginPath();
    ctx.moveTo(w * 0.34, h * 0.55);
    ctx.quadraticCurveTo(w * 0.3, h * 0.5, w * 0.25, h * 0.48);
    ctx.quadraticCurveTo(w * 0.2, h * 0.46, w * 0.15, h * 0.5);
    ctx.stroke();
    
    // Amino acids in chain
    const aaColors = ['#FF6B6B', '#4ECDC4', '#FFD93D', '#95E1D3'];
    const aaPositions = [[0.34, 0.55], [0.3, 0.5], [0.25, 0.48], [0.2, 0.46], [0.15, 0.5]];
    
    aaPositions.forEach(([px, py], idx) => {
      ctx.fillStyle = aaColors[idx % 4];
      ctx.beginPath();
      ctx.arc(w * px, h * py, 8, 0, Math.PI * 2);
      ctx.fill();
      ctx.strokeStyle = '#000';
      ctx.lineWidth = 1.5;
      ctx.stroke();
    });
    
    ctx.fillStyle = '#000';
    ctx.font = '9px Arial';
    ctx.fillText('Polypeptide', w * 0.15, h * 0.54);
  }
  
  // Peptide bond formation indicator
  if (componentFocus === 'peptide-bond' || componentFocus === 'complete') {
    ctx.strokeStyle = '#FFD700';
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.moveTo(w * 0.36, h * 0.565);
    ctx.lineTo(w * 0.40, h * 0.565);
    ctx.stroke();
    
    ctx.fillStyle = '#FFD700';
    ctx.font = 'bold 9px Arial';
    ctx.fillText('Peptide bond', w * 0.38, h * 0.54);
    ctx.fillText('forming', w * 0.38, h * 0.55);
  }
  
  // Elongation factors
  ctx.fillStyle = '#9B59B6';
  ctx.beginPath();
  ctx.arc(w * 0.5, h * 0.55, 15, 0, Math.PI * 2);
  ctx.fill();
  
  ctx.fillStyle = '#FFF';
  ctx.font = 'bold 8px Arial';
  ctx.fillText('EF-Tu', w * 0.5, h * 0.555);
  
  // Direction arrow
  ctx.strokeStyle = '#000';
  ctx.lineWidth = 2;
  ctx.fillStyle = '#000';
  this.drawArrow(ctx, w * 0.2, h * 0.75, w * 0.6, h * 0.75);
  
  ctx.font = '11px Arial';
  ctx.fillText('Direction of translation', w * 0.4, h * 0.82);
  
  // Labels
  ctx.font = 'bold 12px Arial';
  ctx.fillText("5'", w * 0.08, h * 0.58);
  ctx.fillText("3'", w * 0.92, h * 0.58);
  
  ctx.font = 'bold 16px Arial';
  ctx.fillText('Translation Elongation', w * 0.5, h * 0.1);
}

static drawTranslationTermination(ctx, width, height, componentFocus) {
  const w = width, h = height;
  
  // mRNA
  ctx.strokeStyle = '#9B59B6';
  ctx.lineWidth = 6;
  ctx.beginPath();
  ctx.moveTo(w * 0.1, h * 0.6);
  ctx.lineTo(w * 0.9, h * 0.6);
  ctx.stroke();
  
  // Codons including stop codon
  const codons = ['AAG', 'GCA', 'UAA', 'UUU'];
  codons.forEach((codon, idx) => {
    const xPos = w * (0.2 + idx * 0.15);
    
    if (idx === 2) {
      ctx.fillStyle = 'rgba(231, 76, 60, 0.4)';
    } else {
      ctx.fillStyle = 'rgba(155, 89, 182, 0.3)';
    }
    ctx.fillRect(xPos - 15, h * 0.58, 30, h * 0.04);
    
    ctx.fillStyle = '#000';
    ctx.font = 'bold 10px Arial';
    ctx.textAlign = 'center';
    ctx.fillText(codon, xPos, h * 0.605);
  });
  
  // Stop codon highlight
  ctx.strokeStyle = '#E74C3C';
  ctx.lineWidth = 3;
  ctx.strokeRect(w * 0.485, h * 0.58, 30, h * 0.04);
  
  ctx.fillStyle = '#E74C3C';
  ctx.font = 'bold 11px Arial';
  ctx.fillText('STOP', w * 0.5, h * 0.55);
  
  // Ribosome
  if (componentFocus === 'ribosome' || componentFocus === 'complete') {
    // Large subunit
    const largeSubGradient = ctx.createRadialGradient(w * 0.4, h * 0.45, 0, w * 0.4, h * 0.45, 60);
    largeSubGradient.addColorStop(0, '#2ECC71');
    largeSubGradient.addColorStop(1, '#229954');
    
    ctx.fillStyle = largeSubGradient;
    ctx.beginPath();
    ctx.ellipse(w * 0.4, h * 0.45, 70, 40, 0, 0, Math.PI * 2);
    ctx.fill();
    ctx.strokeStyle = '#000';
    ctx.lineWidth = 2;
    ctx.stroke();
    
    // Small subunit
    const smallSubGradient = ctx.createRadialGradient(w * 0.4, h * 0.6, 0, w * 0.4, h * 0.6, 50);
    smallSubGradient.addColorStop(0, '#3498DB');
    smallSubGradient.addColorStop(1, '#2874A6');
    
    ctx.fillStyle = smallSubGradient;
    ctx.beginPath();
    ctx.ellipse(w * 0.4, h * 0.6, 60, 35, 0, 0, Math.PI * 2);
    ctx.fill();
    ctx.stroke();
  }
  
  // Release factor binding to stop codon
  const rfGradient = ctx.createRadialGradient(w * 0.5, h * 0.6, 0, w * 0.5, h * 0.6, 25);
  rfGradient.addColorStop(0, '#F39C12');
  rfGradient.addColorStop(1, '#E67E22');
  
  ctx.fillStyle = rfGradient;
  ctx.beginPath();
  ctx.arc(w * 0.5, h * 0.6, 25, 0, Math.PI * 2);
  ctx.fill();
  ctx.strokeStyle = '#000';
  ctx.lineWidth = 2;
  ctx.stroke();
  
  ctx.fillStyle = '#FFF';
  ctx.font = 'bold 10px Arial';
  ctx.fillText('Release', w * 0.5, h * 0.595);
  ctx.fillText('Factor', w * 0.5, h * 0.61);
  
  // Last tRNA with polypeptide
  if (componentFocus === 'trna' || componentFocus === 'complete') {
    this.drawTRNA(ctx, w * 0.35, h * 0.6, 'CUU', 'Leu', 22);
  }
  
  // Complete polypeptide being released
  if (componentFocus === 'amino-acids' || componentFocus === 'complete') {
    ctx.strokeStyle = '#FF6B6B';
    ctx.lineWidth = 4;
    ctx.beginPath();
    ctx.moveTo(w * 0.35, h * 0.55);
    ctx.quadraticCurveTo(w * 0.25, h * 0.5, w * 0.2, h * 0.45);
    ctx.quadraticCurveTo(w * 0.15, h * 0.4, w * 0.12, h * 0.35);
    ctx.stroke();
    
    // Amino acids
    const aaColors = ['#FF6B6B', '#4ECDC4', '#FFD93D', '#95E1D3', '#FF9999'];
    const aaPositions = [[0.35, 0.55], [0.28, 0.52], [0.22, 0.48], [0.17, 0.43], [0.13, 0.38], [0.12, 0.35]];
    
    aaPositions.forEach(([px, py], idx) => {
      ctx.fillStyle = aaColors[idx % 5];
      ctx.beginPath();
      ctx.arc(w * px, h * py, 8, 0, Math.PI * 2);
      ctx.fill();
      ctx.strokeStyle = '#000';
      ctx.lineWidth = 1.5;
      ctx.stroke();
    });
    
    // Release arrow
    ctx.strokeStyle = '#666';
    ctx.lineWidth = 2;
    ctx.fillStyle = '#666';
    this.drawArrow(ctx, w * 0.25, h * 0.42, w * 0.15, h * 0.32);
    
    ctx.fillStyle = '#000';
    ctx.font = '10px Arial';
    ctx.fillText('Released', w * 0.18, h * 0.36);
    ctx.fillText('Polypeptide', w * 0.18, h * 0.38);
  }
  
  // Ribosome dissociation
  ctx.strokeStyle = '#95A5A6';
  ctx.lineWidth = 2;
  ctx.fillStyle = '#95A5A6';
  
  // Arrows showing subunits separating
  this.drawArrow(ctx, w * 0.45, h * 0.4, w * 0.5, h * 0.3);
  this.drawArrow(ctx, w * 0.45, h * 0.65, w * 0.5, h * 0.75);
  
  ctx.font = '10px Arial';
  ctx.fillText('Ribosome', w * 0.6, h * 0.48);
  ctx.fillText('dissociation', w * 0.6, h * 0.5);
  
  // Recycled subunits
  // 60S
  ctx.fillStyle = 'rgba(46, 204, 113, 0.5)';
  ctx.beginPath();
  ctx.ellipse(w * 0.65, h * 0.25, 45, 25, 0, 0, Math.PI * 2);
  ctx.fill();
  ctx.strokeStyle = '#2ECC71';
  ctx.lineWidth = 2;
  ctx.stroke();
  
  ctx.fillStyle = '#2ECC71';
  ctx.font = 'bold 11px Arial';
  ctx.fillText('60S', w * 0.65, h * 0.26);
  
  // 40S
  ctx.fillStyle = 'rgba(52, 152, 219, 0.5)';
  ctx.beginPath();
  ctx.ellipse(w * 0.65, h * 0.8, 40, 22, 0, 0, Math.PI * 2);
  ctx.fill();
  ctx.strokeStyle = '#3498DB';
  ctx.stroke();
  
  ctx.fillStyle = '#3498DB';
  ctx.fillText('40S', w * 0.65, h * 0.81);
  
  // Labels
  ctx.fillStyle = '#000';
  ctx.font = 'bold 12px Arial';
  ctx.fillText("5'", w * 0.08, h * 0.58);
  ctx.fillText("3'", w * 0.92, h * 0.58);
  
  ctx.font = 'bold 16px Arial';
  ctx.fillText('Translation Termination', w * 0.5, h * 0.1);
}

static drawRibosomeBinding(ctx, width, height, componentFocus) {
  const w = width, h = height;
  
  // Title
  ctx.fillStyle = '#000';
  ctx.font = 'bold 16px Arial';
  ctx.textAlign = 'center';
  ctx.fillText('Ribosome Structure & Binding Sites', w * 0.5, h * 0.08);
  
  // Large detailed ribosome
  const centerX = w * 0.5;
  const centerY = h * 0.5;
  
  // Large subunit (60S)
  const largeSubGradient = ctx.createRadialGradient(centerX, centerY - 50, 0, centerX, centerY - 50, 90);
  largeSubGradient.addColorStop(0, '#2ECC71');
  largeSubGradient.addColorStop(0.6, '#27AE60');
  largeSubGradient.addColorStop(1, '#229954');
  
  ctx.fillStyle = largeSubGradient;
  ctx.beginPath();
  ctx.ellipse(centerX, centerY - 50, 100, 60, 0, 0, Math.PI * 2);
  ctx.fill();
  ctx.strokeStyle = '#000';
  ctx.lineWidth = 3;
  ctx.stroke();
  
  ctx.fillStyle = '#FFF';
  ctx.font = 'bold 18px Arial';
  ctx.fillText('Large Subunit (60S)', centerX, centerY - 45);
  
  // Small subunit (40S)
  const smallSubGradient = ctx.createRadialGradient(centerX, centerY + 50, 0, centerX, centerY + 50, 80);
  smallSubGradient.addColorStop(0, '#3498DB');
  smallSubGradient.addColorStop(0.6, '#2E86C1');
  smallSubGradient.addColorStop(1, '#2874A6');
  
  ctx.fillStyle = smallSubGradient;
  ctx.beginPath();
  ctx.ellipse(centerX, centerY + 50, 90, 55, 0, 0, Math.PI * 2);
  ctx.fill();
  ctx.stroke();
  
  ctx.fillStyle = '#FFF';
  ctx.fillText('Small Subunit (40S)', centerX, centerY + 55);
  
  // mRNA channel
  ctx.strokeStyle = '#9B59B6';
  ctx.lineWidth = 8;
  ctx.beginPath();
  ctx.moveTo(centerX - 120, centerY);
  ctx.lineTo(centerX + 120, centerY);
  ctx.stroke();
  
  ctx.fillStyle = '#000';
  ctx.font = '12px Arial';
  ctx.fillText('mRNA', centerX - 150, centerY + 5);
  ctx.fillText("5' → 3'", centerX + 140, centerY + 5);
  
  // Three binding sites: E, P, A
  const siteWidth = 50;
  const siteHeight = 100;
  
  // E site (Exit)
  ctx.fillStyle = 'rgba(149, 165, 166, 0.3)';
  ctx.fillRect(centerX - 75 - siteWidth/2, centerY - siteHeight/2, siteWidth, siteHeight);
  ctx.strokeStyle = '#95A5A6';
  ctx.lineWidth = 3;
  ctx.setLineDash([5, 5]);
  ctx.strokeRect(centerX - 75 - siteWidth/2, centerY - siteHeight/2, siteWidth, siteHeight);
  
  ctx.fillStyle = '#95A5A6';
  ctx.font = 'bold 24px Arial';
  ctx.fillText('E', centerX - 75, centerY - 60);
  ctx.font = '12px Arial';
  ctx.fillText('Exit site', centerX - 75, centerY - 75);
  
  // P site (Peptidyl)
  ctx.fillStyle = 'rgba(230, 126, 34, 0.3)';
  ctx.fillRect(centerX - siteWidth/2, centerY - siteHeight/2, siteWidth, siteHeight);
  ctx.strokeStyle = '#E67E22';
  ctx.strokeRect(centerX - siteWidth/2, centerY - siteHeight/2, siteWidth, siteHeight);
  
  ctx.fillStyle = '#E67E22';
  ctx.font = 'bold 24px Arial';
  ctx.fillText('P', centerX, centerY - 60);
  ctx.font = '12px Arial';
  ctx.fillText('Peptidyl site', centerX, centerY - 75);
  
  // A site (Aminoacyl)
  ctx.fillStyle = 'rgba(231, 76, 60, 0.3)';
  ctx.fillRect(centerX + 75 - siteWidth/2, centerY - siteHeight/2, siteWidth, siteHeight);
  ctx.strokeStyle = '#E74C3C';
  ctx.strokeRect(centerX + 75 - siteWidth/2, centerY - siteHeight/2, siteWidth, siteHeight);
  
  ctx.setLineDash([]);
  
  ctx.fillStyle = '#E74C3C';
  ctx.font = 'bold 24px Arial';
  ctx.fillText('A', centerX + 75, centerY - 60);
  ctx.font = '12px Arial';
  ctx.fillText('Aminoacyl site', centerX + 75, centerY - 75);
  
  // tRNAs in sites
  if (componentFocus === 'trna' || componentFocus === 'complete') {
    // Empty tRNA in E site
    this.drawTRNA(ctx, centerX - 75, centerY, 'UCG', '', 20, 0.4);
    
    // tRNA with peptide in P site
    this.drawTRNA(ctx, centerX, centerY, 'AUG', 'Peptide', 25);
    
    // Incoming tRNA in A site
    this.drawTRNA(ctx, centerX + 75, centerY, 'AAA', 'Lys', 25);
  }
  
  // Codons on mRNA
  const codonPositions = [centerX - 75, centerX, centerX + 75];
  const codonSeq = ['UCG', 'AUG', 'AAA'];
  
  codonSeq.forEach((codon, idx) => {
    ctx.fillStyle = 'rgba(155, 89, 182, 0.4)';
    ctx.fillRect(codonPositions[idx] - 18, centerY - 8, 36, 16);
    
    ctx.fillStyle = '#000';
    ctx.font = 'bold 11px Arial';
    ctx.fillText(codon, codonPositions[idx], centerY + 3);
  });
  
  // Peptidyl transferase center
  ctx.fillStyle = '#FFD700';
  ctx.beginPath();
  ctx.arc(centerX - 5, centerY - 15, 15, 0, Math.PI * 2);
  ctx.fill();
  ctx.strokeStyle = '#000';
  ctx.lineWidth = 2;
  ctx.stroke();
  
  ctx.fillStyle = '#000';
  ctx.font = 'bold 9px Arial';
  ctx.fillText('PTC', centerX - 5, centerY - 11);
  
  // Legend
  ctx.font = '11px Arial';
  ctx.textAlign = 'left';
  ctx.fillText('E site: Exiting deacylated tRNA', w * 0.05, h * 0.9);
  ctx.fillText('P site: Peptidyl-tRNA (holds growing chain)', w * 0.05, h * 0.93);
  ctx.fillText('A site: Aminoacyl-tRNA (incoming)', w * 0.05, h * 0.96);
}

static drawTRNA(ctx, x, y, anticodon, aminoacid, size = 25, opacity = 1.0) {
  ctx.save();
  ctx.globalAlpha = opacity;
  
  // tRNA cloverleaf structure (simplified)
  const tRNAGradient = ctx.createRadialGradient(x, y - size * 0.8, 0, x, y - size * 0.8, size);
  tRNAGradient.addColorStop(0, '#F39C12');
  tRNAGradient.addColorStop(1, '#E67E22');
  
  ctx.fillStyle = tRNAGradient;
  
  // Main body
  ctx.beginPath();
  ctx.moveTo(x, y - size * 1.2);
  ctx.quadraticCurveTo(x - size * 0.6, y - size * 0.9, x - size * 0.5, y - size * 0.4);
  ctx.quadraticCurveTo(x - size * 0.3, y, x, y + size * 0.2);
  ctx.quadraticCurveTo(x + size * 0.3, y, x + size * 0.5, y - size * 0.4);
  ctx.quadraticCurveTo(x + size * 0.6, y - size * 0.9, x, y - size * 1.2);
  ctx.closePath();
  ctx.fill();
  ctx.strokeStyle = '#000';
  ctx.lineWidth = 1.5;
  ctx.stroke();
  
  // Anticodon loop at bottom
  ctx.fillStyle = '#E67E22';
  ctx.beginPath();
  ctx.arc(x, y + size * 0.2, size * 0.3, 0, Math.PI * 2);
  ctx.fill();
  ctx.stroke();
  
  // Anticodon text
  ctx.fillStyle = '#000';
  ctx.font = `bold ${size * 0.35}px Arial`;
  ctx.textAlign = 'center';
  ctx.fillText(anticodon, x, y + size * 0.25);
  
  // Amino acid at top (if present)
  if (aminoacid) {
    ctx.fillStyle = '#4ECDC4';
    ctx.beginPath();
    ctx.arc(x, y - size * 1.3, size * 0.35, 0, Math.PI * 2);
    ctx.fill();
    ctx.strokeStyle = '#000';
    ctx.lineWidth = 1.5;
    ctx.stroke();
    
    ctx.fillStyle = '#000';
    ctx.font = `bold ${size * 0.3}px Arial`;
    ctx.fillText(aminoacid, x, y - size * 1.25);
  }
  
  ctx.restore();
}

// ===== RNA STRUCTURE DIAGRAMS =====

static drawRNAStructure(ctx, x, y, width, height, rnaType, feature) {
  ctx.save();
  ctx.translate(x, y);
  
  switch(rnaType) {
    case 'mRNA':
      this.drawMRNA(ctx, width, height, feature);
      break;
    case 'tRNA':
      this.drawTRNAStructure(ctx, width, height, feature);
      break;
    case 'rRNA':
      this.drawRRNA(ctx, width, height, feature);
      break;
    case 'comparison':
      this.drawRNAComparison(ctx, width, height, feature);
      break;
  }
  
  ctx.restore();
}

static drawMRNA(ctx, width, height, feature) {
  const w = width, h = height;
  
  // Title
  ctx.fillStyle = '#000';
  ctx.font = 'bold 18px Arial';
  ctx.textAlign = 'center';
  ctx.fillText('Messenger RNA (mRNA) Structure', w * 0.5, h * 0.08);
  
  // Main mRNA strand
  ctx.strokeStyle = '#9B59B6';
  ctx.lineWidth = 8;
  ctx.beginPath();
  ctx.moveTo(w * 0.1, h * 0.5);
  ctx.lineTo(w * 0.9, h * 0.5);
  ctx.stroke();
  
  // 5' Cap (7-methylguanosine)
  if (feature === 'structure' || feature === 'modifications') {
    const capGradient = ctx.createRadialGradient(w * 0.1, h * 0.5, 0, w * 0.1, h * 0.5, 20);
    capGradient.addColorStop(0, '#FFD700');
    capGradient.addColorStop(1, '#FFA500');
    
    ctx.fillStyle = capGradient;
    ctx.beginPath();
    ctx.arc(w * 0.1, h * 0.5, 20, 0, Math.PI * 2);
    ctx.fill();
    ctx.strokeStyle = '#000';
    ctx.lineWidth = 2;
    ctx.stroke();
    
    ctx.fillStyle = '#000';
    ctx.font = 'bold 11px Arial';
    ctx.fillText("5' Cap", w * 0.1, h * 0.505);
    
    ctx.font = '10px Arial';
    ctx.fillText('(m⁷G)', w * 0.1, h * 0.38);
  }
  
  // 5' UTR (Untranslated Region)
  if (feature === 'structure' || feature === 'function') {
    ctx.fillStyle = 'rgba(52, 152, 219, 0.3)';
    ctx.fillRect(w * 0.15, h * 0.47, w * 0.12, h * 0.06);
    
    ctx.strokeStyle = '#3498DB';
    ctx.lineWidth = 2;
    ctx.setLineDash([5, 5]);
    ctx.strokeRect(w * 0.15, h * 0.47, w * 0.12, h * 0.06);
    ctx.setLineDash([]);
    
    ctx.fillStyle = '#3498DB';
    ctx.font = 'bold 12px Arial';
    ctx.fillText("5' UTR", w * 0.21, h * 0.42);
  }
  
  // Start codon (AUG)
  ctx.fillStyle = 'rgba(46, 204, 113, 0.4)';
  ctx.fillRect(w * 0.29, h * 0.47, w * 0.04, h * 0.06);
  
  ctx.strokeStyle = '#2ECC71';
  ctx.lineWidth = 2;
  ctx.strokeRect(w * 0.29, h * 0.47, w * 0.04, h * 0.06);
  
  ctx.fillStyle = '#000';
  ctx.font = 'bold 11px Arial';
  ctx.fillText('AUG', w * 0.31, h * 0.505);
  ctx.font = '9px Arial';
  ctx.fillText('Start', w * 0.31, h * 0.42);
  
  // Coding sequence
  ctx.fillStyle = 'rgba(46, 204, 113, 0.2)';
  ctx.fillRect(w * 0.33, h * 0.47, w * 0.3, h * 0.06);
  
  ctx.strokeStyle = '#2ECC71';
  ctx.setLineDash([3, 3]);
  ctx.strokeRect(w * 0.33, h * 0.47, w * 0.3, h * 0.06);
  ctx.setLineDash([]);
  
  ctx.fillStyle = '#2ECC71';
  ctx.font = 'bold 12px Arial';
  ctx.fillText('Coding Sequence (CDS)', w * 0.48, h * 0.42);
  
  // Codons in coding sequence
  if (feature === 'structure' || feature === 'function') {
    const codons = ['UUU', 'GCA', 'UAC', 'AAG', 'GGU'];
    codons.forEach((codon, idx) => {
      const xPos = w * (0.35 + idx * 0.05);
      ctx.fillStyle = '#000';
      ctx.font = '9px Arial';
      ctx.fillText(codon, xPos, h * 0.505);
    });
  }
  
  // Stop codon (UAA)
  ctx.fillStyle = 'rgba(231, 76, 60, 0.4)';
  ctx.fillRect(w * 0.65, h * 0.47, w * 0.04, h * 0.06);
  
  ctx.strokeStyle = '#E74C3C';
  ctx.lineWidth = 2;
  ctx.strokeRect(w * 0.65, h * 0.47, w * 0.04, h * 0.06);
  
  ctx.fillStyle = '#000';
  ctx.font = 'bold 11px Arial';
  ctx.fillText('UAA', w * 0.67, h * 0.505);
  ctx.font = '9px Arial';
  ctx.fillText('Stop', w * 0.67, h * 0.42);
  
  // 3' UTR
  if (feature === 'structure' || feature === 'function') {
    ctx.fillStyle = 'rgba(52, 152, 219, 0.3)';
    ctx.fillRect(w * 0.7, h * 0.47, w * 0.12, h * 0.06);
    
    ctx.strokeStyle = '#3498DB';
    ctx.lineWidth = 2;
    ctx.setLineDash([5, 5]);
    ctx.strokeRect(w * 0.7, h * 0.47, w * 0.12, h * 0.06);
    ctx.setLineDash([]);
    
    ctx.fillStyle = '#3498DB';
    ctx.font = 'bold 12px Arial';
    ctx.fillText("3' UTR", w * 0.76, h * 0.42);
  }
  
  // Poly-A tail
  if (feature === 'structure' || feature === 'modifications') {
    ctx.fillStyle = '#FF6B6B';
    for (let i = 0; i < 15; i++) {
      ctx.beginPath();
      ctx.arc(w * (0.83 + i * 0.008), h * 0.5, 4, 0, Math.PI * 2);
      ctx.fill();
    }
    
    ctx.fillStyle = '#000';
    ctx.font = '10px Arial';
    ctx.fillText('Poly-A Tail', w * 0.88, h * 0.38);
    ctx.fillText('(~200 As)', w * 0.88, h * 0.4);
  }
  
  // Processing features
  if (feature === 'processing') {
    // Splicing sites
    ctx.strokeStyle = '#9B59B6';
    ctx.lineWidth = 2;
    ctx.setLineDash([3, 3]);
    
    ctx.beginPath();
    ctx.moveTo(w * 0.35, h * 0.53);
    ctx.lineTo(w * 0.35, h * 0.62);
    ctx.stroke();
    
    ctx.beginPath();
    ctx.moveTo(w * 0.55, h * 0.53);
    ctx.lineTo(w * 0.55, h * 0.62);
    ctx.stroke();
    
    ctx.setLineDash([]);
    
    ctx.fillStyle = '#000';
    ctx.font = '9px Arial';
    ctx.fillText('Splice sites', w * 0.45, h * 0.65);
  }
  
  // Direction arrows
  ctx.strokeStyle = '#000';
  ctx.lineWidth = 2;
  ctx.fillStyle = '#000';
  
  ctx.font = 'bold 14px Arial';
  ctx.fillText("5'", w * 0.05, h * 0.48);
  ctx.fillText("3'", w * 0.95, h * 0.48);
  
  // Function labels
  if (feature === 'function') {
    ctx.font = '11px Arial';
    ctx.fillText('Ribosome binding', w * 0.21, h * 0.6);
    ctx.fillText('Protein coding', w * 0.48, h * 0.6);
    ctx.fillText('Stability/regulation', w * 0.76, h * 0.6);
  }
}

static drawTRNAStructure(ctx, width, height, feature) {
  const w = width, h = height;
  
  // Title
  ctx.fillStyle = '#000';
  ctx.font = 'bold 18px Arial';
  ctx.textAlign = 'center';
  ctx.fillText('Transfer RNA (tRNA) Structure', w * 0.5, h * 0.08);
  
  const centerX = w * 0.5;
  const centerY = h * 0.5;
  
  // Cloverleaf structure (2D)
  if (feature === 'structure' || feature === 'modifications') {
    // Acceptor stem
    ctx.strokeStyle = '#F39C12';
    ctx.lineWidth = 6;
    
    ctx.beginPath();
    ctx.moveTo(centerX - 20, centerY - 150);
    ctx.lineTo(centerX - 20, centerY - 80);
    ctx.stroke();
    
    ctx.beginPath();
    ctx.moveTo(centerX + 20, centerY - 150);
    ctx.lineTo(centerX + 20, centerY - 80);
    ctx.stroke();
    
    // Base pairing lines
    ctx.strokeStyle = '#666';
    ctx.lineWidth = 1;
    ctx.setLineDash([3, 3]);
    for (let i = 0; i < 7; i++) {
      const y = centerY - 150 + i * 10;
      ctx.beginPath();
      ctx.moveTo(centerX - 20, y);
      ctx.lineTo(centerX + 20, y);
      ctx.stroke();
    }
    ctx.setLineDash([]);
    
    // 3' CCA tail
    ctx.fillStyle = '#E74C3C';
    const ccaPos = [[centerX + 30, centerY - 160], [centerX + 40, centerY - 165], [centerX + 50, centerY - 170]];
    ccaPos.forEach((pos, idx) => {
      ctx.beginPath();
      ctx.arc(pos[0], pos[1], 6, 0, Math.PI * 2);
      ctx.fill();
    });
    
    ctx.fillStyle = '#000';
    ctx.font = '10px Arial';
    ctx.fillText('C', ccaPos[0][0], ccaPos[0][1] + 3);
    ctx.fillText('C', ccaPos[1][0], ccaPos[1][1] + 3);
    ctx.fillText('A', ccaPos[2][0], ccaPos[2][1] + 3);
    
    ctx.font = '11px Arial';
    ctx.fillText("3' CCA", centerX + 65, centerY - 165);
    
    // Amino acid attachment site
    ctx.fillStyle = '#4ECDC4';
    ctx.beginPath();
    ctx.arc(centerX + 60, centerY - 175, 12, 0, Math.PI * 2);
    ctx.fill();
    ctx.strokeStyle = '#000';
    ctx.lineWidth = 2;
    ctx.stroke();
    
    ctx.fillStyle = '#000';
    ctx.font = 'bold 9px Arial';
    ctx.fillText('AA', centerX + 60, centerY - 172);
    
    ctx.font = '9px Arial';
    ctx.fillText('Amino acid', centerX + 85, centerY - 175);
    ctx.fillText('binding site', centerX + 85, centerY - 165);
    
    // D arm (left)
    ctx.strokeStyle = '#F39C12';
    ctx.lineWidth = 6;
    ctx.beginPath();
    ctx.arc(centerX - 80, centerY - 60, 30, -Math.PI/2, Math.PI/2);
    ctx.stroke();
    
    ctx.fillStyle = '#000';
    ctx.font = 'bold 12px Arial';
    ctx.fillText('D', centerX - 80, centerY - 55);
    ctx.font = '10px Arial';
    ctx.fillText('D arm', centerX - 120, centerY - 55);
    
    // Anticodon arm (bottom)
    ctx.strokeStyle = '#F39C12';
    ctx.lineWidth = 6;
    
    ctx.beginPath();
    ctx.moveTo(centerX - 20, centerY - 80);
    ctx.lineTo(centerX - 20, centerY + 20);
    ctx.stroke();
    
    ctx.beginPath();
    ctx.moveTo(centerX + 20, centerY - 80);
    ctx.lineTo(centerX + 20, centerY + 20);
    ctx.stroke();
    
    // Anticodon loop
    ctx.beginPath();
    ctx.arc(centerX, centerY + 50, 35, 0, Math.PI * 2);
    ctx.stroke();
    
    ctx.fillStyle = '#E67E22';
    ctx.font = 'bold 14px Arial';
    ctx.fillText('Anticodon', centerX, centerY + 55);
    
    // Anticodon bases
    const anticodonBases = ['U', 'A', 'C'];
    anticodonBases.forEach((base, idx) => {
      const angle = Math.PI/2 + (idx - 1) * Math.PI/4;
      const x = centerX + Math.cos(angle) * 25;
      const y = centerY + 50 + Math.sin(angle) * 25;
      
      ctx.fillStyle = '#FFD93D';
      ctx.beginPath();
      ctx.arc(x, y, 8, 0, Math.PI * 2);
      ctx.fill();
      
      ctx.fillStyle = '#000';
      ctx.font = 'bold 10px Arial';
      ctx.fillText(base, x, y + 3);
    });
    
    // TψC arm (right)
    ctx.strokeStyle = '#F39C12';
    ctx.lineWidth = 6;
    ctx.beginPath();
    ctx.arc(centerX + 80, centerY - 60, 30, Math.PI/2, 3*Math.PI/2);
    ctx.stroke();
    
    ctx.fillStyle = '#000';
    ctx.font = 'bold 12px Arial';
    ctx.fillText('TψC', centerX + 80, centerY - 55);
    ctx.font = '10px Arial';
    ctx.fillText('TψC arm', centerX + 115, centerY - 55);
    
    // Variable loop (small)
    ctx.strokeStyle = '#F39C12';
    ctx.lineWidth = 4;
    ctx.beginPath();
    ctx.arc(centerX + 50, centerY - 20, 15, 0, Math.PI * 2);
    ctx.stroke();
    
    ctx.fillStyle = '#000';
    ctx.font = '9px Arial';
    ctx.fillText('Variable', centerX + 75, centerY - 20);
    ctx.fillText('loop', centerX + 75, centerY - 10);
  }
  
  // Modified bases
  if (feature === 'modifications') {
    ctx.fillStyle = '#9B59B6';
    const modPositions = [[centerX - 80, centerY - 75], [centerX + 80, centerY - 75]];
    modPositions.forEach(pos => {
      ctx.beginPath();
      ctx.arc(pos[0], pos[1], 6, 0, Math.PI * 2);
      ctx.fill();
    });
    
    ctx.fillStyle = '#9B59B6';
    ctx.font = '9px Arial';
    ctx.fillText('Modified bases', centerX - 150, centerY + 100);
    ctx.fillText('(pseudouridine, etc.)', centerX - 150, centerY + 110);
  }
  
  // 3D L-shape (side view)
  if (feature === 'function') {
    ctx.strokeStyle = '#95A5A6';
    ctx.lineWidth = 2;
    ctx.setLineDash([5, 5]);
    
    // L-shape outline
    ctx.beginPath();
    ctx.moveTo(centerX + 120, centerY - 160);
    ctx.lineTo(centerX + 120, centerY - 20);
    ctx.lineTo(centerX + 220, centerY - 20);
    ctx.stroke();
    
    ctx.setLineDash([]);
    
    ctx.fillStyle = '#000';
    ctx.font = '11px Arial';
    ctx.fillText('3D L-shaped structure', centerX + 160, centerY - 170);
    
    // Acceptor end
    ctx.fillStyle = '#4ECDC4';
    ctx.beginPath();
    ctx.arc(centerX + 120, centerY - 160, 10, 0, Math.PI * 2);
    ctx.fill();
    
    ctx.fillStyle = '#000';
    ctx.font = '9px Arial';
    ctx.fillText('Acceptor', centerX + 135, centerY - 155);
    ctx.fillText('end', centerX + 135, centerY - 145);
    
    // Anticodon end
    ctx.fillStyle = '#E67E22';
    ctx.beginPath();
    ctx.arc(centerX + 220, centerY - 20, 10, 0, Math.PI * 2);
    ctx.fill();
    
    ctx.fillStyle = '#000';
    ctx.fillText('Anticodon', centerX + 235, centerY - 15);
    ctx.fillText('end', centerX + 235, centerY - 5);
  }
  
  // Labels
  ctx.fillStyle = '#000';
  ctx.font = 'bold 12px Arial';
  ctx.fillText("5'", centerX - 40, centerY - 155);
  ctx.fillText("3'", centerX + 40, centerY - 155);
}

static drawRRNA(ctx, width, height, feature) {
  const w = width, h = height;
  
  // Title
  ctx.fillStyle = '#000';
  ctx.font = 'bold 18px Arial';
  ctx.textAlign = 'center';
  ctx.fillText('Ribosomal RNA (rRNA) Structure', w * 0.5, h * 0.08);
  
  const centerX = w * 0.5;
  const centerY = h * 0.5;
  
  // Complex secondary structure with multiple loops
  if (feature === 'structure') {
    ctx.strokeStyle = '#2ECC71';
    ctx.lineWidth = 6;
    
    // Central stem
    ctx.beginPath();
    ctx.moveTo(centerX - 15, centerY - 120);
    ctx.lineTo(centerX - 15, centerY + 80);
    ctx.stroke();
    
    ctx.beginPath();
    ctx.moveTo(centerX + 15, centerY - 120);
    ctx.lineTo(centerX + 15, centerY + 80);
    ctx.stroke();
    
    // Multiple hairpin loops
    const loops = [
      { x: -80, y: -80, size: 25, label: 'Loop 1' },
      { x: 80, y: -80, size: 25, label: 'Loop 2' },
      { x: -80, y: 0, size: 30, label: 'Loop 3' },
      { x: 80, y: 20, size: 28, label: 'Loop 4' },
      { x: 0, y: 110, size: 35, label: 'Terminal loop' }
    ];
    
    loops.forEach(loop => {
      ctx.strokeStyle = '#2ECC71';
      ctx.lineWidth = 6;
      ctx.beginPath();
      ctx.arc(centerX + loop.x, centerY + loop.y, loop.size, 0, Math.PI * 2);
      ctx.stroke();
      
      ctx.fillStyle = '#000';
      ctx.font = '10px Arial';
      ctx.fillText(loop.label, centerX + loop.x, centerY + loop.y + 3);
    });
    
    // Connecting stems
    ctx.strokeStyle = '#2ECC71';
    ctx.lineWidth = 4;
    
    ctx.beginPath();
    ctx.moveTo(centerX - 15, centerY - 80);
    ctx.lineTo(centerX - 55, centerY - 80);
    ctx.stroke();
    
    ctx.beginPath();
    ctx.moveTo(centerX + 15, centerY - 80);
    ctx.lineTo(centerX + 55, centerY - 80);
    ctx.stroke();
    
    ctx.beginPath();
    ctx.moveTo(centerX - 15, centerY);
    ctx.lineTo(centerX - 50, centerY);
    ctx.stroke();
    
    ctx.beginPath();
    ctx.moveTo(centerX + 15, centerY + 20);
    ctx.lineTo(centerX + 52, centerY + 20);
    ctx.stroke();
  }
  
  // Functional domains
  if (feature === 'function') {
    // Peptidyl transferase center
    ctx.fillStyle = 'rgba(255, 215, 0, 0.3)';
    ctx.fillRect(centerX - 40, centerY - 20, 80, 50);
    
    ctx.strokeStyle = '#FFD700';
    ctx.lineWidth = 3;
    ctx.setLineDash([8, 4]);
    ctx.strokeRect(centerX - 40, centerY - 20, 80, 50);
    ctx.setLineDash([]);
    
    ctx.fillStyle = '#FFD700';
    ctx.font = 'bold 12px Arial';
    ctx.fillText('Peptidyl Transferase', centerX, centerY);
    ctx.fillText('Center (PTC)', centerX, centerY + 15);
    
    // Decoding site
    ctx.fillStyle = 'rgba(231, 76, 60, 0.2)';
    ctx.beginPath();
    ctx.arc(centerX + 80, centerY - 80, 40, 0, Math.PI * 2);
    ctx.fill();
    
    ctx.strokeStyle = '#E74C3C';
    ctx.lineWidth = 2;
    ctx.setLineDash([5, 5]);
    ctx.beginPath();
    ctx.arc(centerX + 80, centerY - 80, 40, 0, Math.PI * 2);
    ctx.stroke();
    ctx.setLineDash([]);
    
    ctx.fillStyle = '#E74C3C';
    ctx.font = 'bold 11px Arial';
    ctx.fillText('Decoding', centerX + 80, centerY - 83);
    ctx.fillText('Site', centerX + 80, centerY - 70);
  }
  
  // Types of rRNA
  if (feature === 'structure' || feature === 'modifications') {
    ctx.font = '12px Arial';
    ctx.fillStyle = '#000';
    ctx.textAlign = 'left';
    
    ctx.fillText('Types in eukaryotic ribosome:', w * 0.05, h * 0.75);
    ctx.fillText('• 18S rRNA (small subunit, 40S)', w * 0.05, h * 0.79);
    ctx.fillText('• 5.8S rRNA (large subunit, 60S)', w * 0.05, h * 0.83);
    ctx.fillText('• 28S rRNA (large subunit, 60S)', w * 0.05, h * 0.87);
    ctx.fillText('• 5S rRNA (large subunit, 60S)', w * 0.05, h * 0.91);
  }
  
  // Modified nucleotides
  if (feature === 'modifications') {
    ctx.fillStyle = '#9B59B6';
    const modSites = [
      [centerX - 80, centerY - 55],
      [centerX + 80, centerY - 55],
      [centerX, centerY + 110],
      [centerX - 50, centerY + 25]
    ];
    
    modSites.forEach(pos => {
      ctx.beginPath();
      ctx.arc(pos[0], pos[1], 5, 0, Math.PI * 2);
      ctx.fill();
    });
    
    ctx.font = '10px Arial';
    ctx.fillText('Modified nucleotides', w * 0.6, h * 0.75);
    ctx.fillText('(pseudouridine, methylation)', w * 0.6, h * 0.78);
  }
}

static drawRNAComparison(ctx, width, height, feature) {
  const w = width, h = height;
  
  // Title
  ctx.fillStyle = '#000';
  ctx.font = 'bold 18px Arial';
  ctx.textAlign = 'center';
  ctx.fillText('RNA Types Comparison', w * 0.5, h * 0.06);
  
  // Three columns
  const colWidth = w / 3.5;
  const cols = [
    { x: w * 0.15, title: 'mRNA', color: '#9B59B6', size: 'Variable', function: 'Protein coding', location: 'Nucleus→Cytoplasm' },
    { x: w * 0.5, title: 'tRNA', color: '#F39C12', size: '76-90 nt', function: 'Amino acid transport', location: 'Cytoplasm' },
    { x: w * 0.85, title: 'rRNA', color: '#2ECC71', size: '120-5000 nt', function: 'Ribosome structure', location: 'Ribosome' }
  ];
  
  cols.forEach(col => {
    // Column header
    ctx.fillStyle = col.color;
    ctx.font = 'bold 16px Arial';
    ctx.fillText(col.title, col.x, h * 0.12);
    
    // Structure representation
    ctx.strokeStyle = col.color;
    ctx.lineWidth = 6;
    
    if (col.title === 'mRNA') {
      // Linear mRNA
      ctx.beginPath();
      ctx.moveTo(col.x - 40, h * 0.25);
      ctx.lineTo(col.x + 40, h * 0.25);
      ctx.stroke();
      
      // Cap
      ctx.fillStyle = '#FFD700';
      ctx.beginPath();
      ctx.arc(col.x - 40, h * 0.25, 8, 0, Math.PI * 2);
      ctx.fill();
      
      // Poly-A
      ctx.fillStyle = '#FF6B6B';
      for (let i = 0; i < 5; i++) {
        ctx.beginPath();
        ctx.arc(col.x + 40 + i * 5, h * 0.25, 3, 0, Math.PI * 2);
        ctx.fill();
      }
    } else if (col.title === 'tRNA') {
      // Cloverleaf tRNA
      ctx.beginPath();
      ctx.moveTo(col.x - 10, h * 0.18);
      ctx.lineTo(col.x - 10, h * 0.24);
      ctx.stroke();
      
      ctx.beginPath();
      ctx.moveTo(col.x + 10, h * 0.18);
      ctx.lineTo(col.x + 10, h * 0.24);
      ctx.stroke();
      
      ctx.beginPath();
      ctx.arc(col.x, h * 0.3, 15, 0, Math.PI * 2);
      ctx.stroke();
      
      // Amino acid
      ctx.fillStyle = '#4ECDC4';
      ctx.beginPath();
      ctx.arc(col.x, h * 0.16, 8, 0, Math.PI * 2);
      ctx.fill();
    } else {
      // Complex rRNA
      ctx.beginPath();
      ctx.arc(col.x - 15, h * 0.22, 12, 0, Math.PI * 2);
      ctx.stroke();
      
      ctx.beginPath();
      ctx.arc(col.x + 15, h * 0.22, 12, 0, Math.PI * 2);
      ctx.stroke();
      
      ctx.beginPath();
      ctx.arc(col.x, h * 0.3, 15, 0, Math.PI * 2);
      ctx.stroke();
    }
    
    // Information boxes
    ctx.fillStyle = '#000';
    ctx.font = '11px Arial';
    ctx.textAlign = 'center';
    
    ctx.fillText('Size:', col.x, h * 0.42);
    ctx.font = 'bold 10px Arial';
    ctx.fillText(col.size, col.x, h * 0.46);
    
    ctx.font = '11px Arial';
    ctx.fillText('Function:', col.x, h * 0.54);
    ctx.font = '10px Arial';
    const functionLines = col.function.split(' ');
    functionLines.forEach((line, idx) => {
      ctx.fillText(line, col.x, h * (0.58 + idx * 0.04));
    });
    
    ctx.font = '11px Arial';
    ctx.fillText('Location:', col.x, h * 0.70);
    ctx.font = '10px Arial';
    const locationLines = col.location.split('→');
    locationLines.forEach((line, idx) => {
      ctx.fillText(line, col.x, h * (0.74 + idx * 0.04));
    });
  });
  
  // Additional features comparison
  ctx.fillStyle = '#000';
  ctx.font = 'bold 13px Arial';
  ctx.textAlign = 'left';
  ctx.fillText('Key Features:', w * 0.05, h * 0.88);
  
  ctx.font = '10px Arial';
  ctx.fillText('• mRNA: 5\' cap, poly-A tail, codons', w * 0.05, h * 0.92);
  ctx.fillText('• tRNA: Anticodon, amino acid binding, cloverleaf structure', w * 0.05, h * 0.96);
  ctx.fillText('• rRNA: Catalytic activity, ribosome assembly, highly conserved', w * 0.55, h * 0.92);
}

// ===== CODON CHART DIAGRAMS =====

static drawCodonChart(ctx, x, y, width, height, display, feature) {
  ctx.save();
  ctx.translate(x, y);
  
  switch(display) {
    case 'circular':
      this.drawCircularCodonChart(ctx, width, height, feature);
      break;
    case 'table':
      this.drawTableCodonChart(ctx, width, height, feature);
      break;
    case 'wheel':
      this.drawWheelCodonChart(ctx, width, height, feature);
      break;
  }
  
  ctx.restore();
}

static drawTableCodonChart(ctx, width, height, feature) {
  const w = width, h = height;
  
  // Title
  ctx.fillStyle = '#000';
  ctx.font = 'bold 18px Arial';
  ctx.textAlign = 'center';
  ctx.fillText('Genetic Code - Codon Table', w * 0.5, h * 0.05);
  
  const bases = ['U', 'C', 'A', 'G'];
  const codonTable = {
    'UUU': 'Phe', 'UUC': 'Phe', 'UUA': 'Leu', 'UUG': 'Leu',
    'UCU': 'Ser', 'UCC': 'Ser', 'UCA': 'Ser', 'UCG': 'Ser',
    'UAU': 'Tyr', 'UAC': 'Tyr', 'UAA': 'STOP', 'UAG': 'STOP',
    'UGU': 'Cys', 'UGC': 'Cys', 'UGA': 'STOP', 'UGG': 'Trp',
    
    'CUU': 'Leu', 'CUC': 'Leu', 'CUA': 'Leu', 'CUG': 'Leu',
    'CCU': 'Pro', 'CCC': 'Pro', 'CCA': 'Pro', 'CCG': 'Pro',
    'CAU': 'His', 'CAC': 'His', 'CAA': 'Gln', 'CAG': 'Gln',
    'CGU': 'Arg', 'CGC': 'Arg', 'CGA': 'Arg', 'CGG': 'Arg',
    
    'AUU': 'Ile', 'AUC': 'Ile', 'AUA': 'Ile', 'AUG': 'Met',
    'ACU': 'Thr', 'ACC': 'Thr', 'ACA': 'Thr', 'ACG': 'Thr',
    'AAU': 'Asn', 'AAC': 'Asn', 'AAA': 'Lys', 'AAG': 'Lys',
    'AGU': 'Ser', 'AGC': 'Ser', 'AGA': 'Arg', 'AGG': 'Arg',
    
    'GUU': 'Val', 'GUC': 'Val', 'GUA': 'Val', 'GUG': 'Val',
    'GCU': 'Ala', 'GCC': 'Ala', 'GCA': 'Ala', 'GCG': 'Ala',
    'GAU': 'Asp', 'GAC': 'Asp', 'GAA': 'Glu', 'GAG': 'Glu',
    'GGU': 'Gly', 'GGC': 'Gly', 'GGA': 'Gly', 'GGG': 'Gly'
  };
  
  const cellWidth = w * 0.13;
  const cellHeight = h * 0.12;
  const startX = w * 0.15;
  const startY = h * 0.15;
  
  // Column headers (second position)
  ctx.fillStyle = '#3498DB';
  ctx.font = 'bold 14px Arial';
  bases.forEach((base, idx) => {
    ctx.fillText(base, startX + (idx + 0.5) * cellWidth, startY - 10);
  });
  
  // Row headers (first position)
  ctx.fillStyle = '#2ECC71';
  bases.forEach((base, idx) => {
    ctx.fillText(base, startX - 20, startY + (idx + 0.5) * cellHeight + 5);
  });
  
  // Third position label
  ctx.fillStyle = '#000';
  ctx.font = '11px Arial';
  ctx.fillText('3rd', w * 0.88, startY - 5);
  
  // Draw grid and codons
  bases.forEach((first, i) => {
    bases.forEach((second, j) => {
      bases.forEach((third, k) => {
        const codon = first + second + third;
        const aa = codonTable[codon];
        
        const x = startX + j * cellWidth;
        const y = startY + i * cellHeight + k * (cellHeight / 4);
        
        // Cell background
        let bgColor = 'rgba(200, 200, 200, 0.2)';
        if (feature === 'start-codons' && codon === 'AUG') {
          bgColor = 'rgba(46, 204, 113, 0.4)';
        } else if (feature === 'stop-codons' && aa === 'STOP') {
          bgColor = 'rgba(231, 76, 60, 0.4)';
        } else if (aa === 'STOP') {
          bgColor = 'rgba(231, 76, 60, 0.2)';
        } else if (codon === 'AUG') {
          bgColor = 'rgba(46, 204, 113, 0.2)';
        }
        
        ctx.fillStyle = bgColor;
        ctx.fillRect(x, y, cellWidth, cellHeight / 4);
        
        ctx.strokeStyle = '#95A5A6';
        ctx.lineWidth = 0.5;
        ctx.strokeRect(x, y, cellWidth, cellHeight / 4);
        
        // Codon and amino acid
        ctx.fillStyle = '#000';
        ctx.font = '9px Arial';
        ctx.textAlign = 'left';
        ctx.fillText(codon, x + 5, y + cellHeight / 8 - 2);
        
        ctx.font = 'bold 9px Arial';
        if (aa === 'STOP') {
          ctx.fillStyle = '#E74C3C';
        } else if (codon === 'AUG') {
          ctx.fillStyle = '#2ECC71';
        }
        ctx.textAlign = 'right';
        ctx.fillText(aa, x + cellWidth - 5, y + cellHeight / 8 + 7);
        
        // Third position base indicator
        ctx.fillStyle = '#9B59B6';
        ctx.font = '8px Arial';
        ctx.textAlign = 'right';
        ctx.fillText(third, x + cellWidth - 2, y + 3);
      });
    });
  });
  
  // Legend
  ctx.font = '11px Arial';
  ctx.textAlign = 'left';
  ctx.fillStyle = '#2ECC71';
  ctx.fillText('■ Start codon (AUG)', w * 0.05, h * 0.95);
  
  ctx.fillStyle = '#E74C3C';
  ctx.fillText('■ Stop codons (UAA, UAG, UGA)', w * 0.3, h * 0.95);
  
  // Degeneracy note
  if (feature === 'degeneracy' || feature === 'wobble') {
    ctx.fillStyle = '#000';
    ctx.font = '10px Arial';
    ctx.fillText('Note: Multiple codons can code for the same amino acid (degeneracy)', w * 0.05, h * 0.98);
  }
}

static drawCircularCodonChart(ctx, width, height, feature) {
  const w = width, h = height;
  
  ctx.fillStyle = '#000';
  ctx.font = 'bold 18px Arial';
  ctx.textAlign = 'center';
  ctx.fillText('Genetic Code - Circular Representation', w * 0.5, h * 0.05);
  
  const centerX = w * 0.5;
  const centerY = h * 0.52;
  const outerRadius = Math.min(w, h) * 0.4;
  
  const bases = ['U', 'C', 'A', 'G'];
  const baseColors = {
    'U': '#FF6B6B',
    'C': '#4ECDC4',
    'A': '#FFD93D',
    'G': '#95E1D3'
  };
  
  // Draw three concentric rings for three positions
  const rings = [
    { inner: outerRadius * 0.5, outer: outerRadius * 0.7, label: '1st' },
    { inner: outerRadius * 0.7, outer: outerRadius * 0.85, label: '2nd' },
    { inner: outerRadius * 0.85, outer: outerRadius, label: '3rd' }
  ];
  
  // First position (innermost ring)
  bases.forEach((base, i) => {
    const startAngle = (i / 4) * Math.PI * 2 - Math.PI / 2;
    const endAngle = ((i + 1) / 4) * Math.PI * 2 - Math.PI / 2;
    
    ctx.fillStyle = baseColors[base];
    ctx.globalAlpha = 0.3;
    ctx.beginPath();
    ctx.arc(centerX, centerY, rings[0].outer, startAngle, endAngle);
    ctx.arc(centerX, centerY, rings[0].inner, endAngle, startAngle, true);
    ctx.closePath();
    ctx.fill();
    
    ctx.globalAlpha = 1.0;
    ctx.strokeStyle = '#000';
    ctx.lineWidth = 1;
    ctx.stroke();
    
    // Label
    const midAngle = (startAngle + endAngle) / 2;
    const labelRadius = (rings[0].inner + rings[0].outer) / 2;
    const labelX = centerX + Math.cos(midAngle) * labelRadius;
    const labelY = centerY + Math.sin(midAngle) * labelRadius;
    
    ctx.fillStyle = '#000';
    ctx.font = 'bold 16px Arial';
    ctx.fillText(base, labelX, labelY + 5);
  });
  
  // Second position (middle ring)
  bases.forEach((base1, i) => {
    bases.forEach((base2, j) => {
      const startAngle = ((i * 4 + j) / 16) * Math.PI * 2 - Math.PI / 2;
      const endAngle = ((i * 4 + j + 1) / 16) * Math.PI * 2 - Math.PI / 2;
      
      const gradient = ctx.createRadialGradient(centerX, centerY, rings[1].inner, centerX, centerY, rings[1].outer);
      gradient.addColorStop(0, baseColors[base1]);
      gradient.addColorStop(1, baseColors[base2]);
      
      ctx.fillStyle = gradient;
      ctx.globalAlpha = 0.4;
      ctx.beginPath();
      ctx.arc(centerX, centerY, rings[1].outer, startAngle, endAngle);
      ctx.arc(centerX, centerY, rings[1].inner, endAngle, startAngle, true);
      ctx.closePath();
      ctx.fill();
      
      ctx.globalAlpha = 1.0;
      ctx.strokeStyle = '#666';
      ctx.lineWidth = 0.5;
      ctx.stroke();
      
      // Label
      const midAngle = (startAngle + endAngle) / 2;
      const labelRadius = (rings[1].inner + rings[1].outer) / 2;
      const labelX = centerX + Math.cos(midAngle) * labelRadius;
      const labelY = centerY + Math.sin(midAngle) * labelRadius;
      
      ctx.fillStyle = '#000';
      ctx.font = 'bold 11px Arial';
      ctx.fillText(base2, labelX, labelY + 4);
    });
  });
  
  // Third position and amino acids (outer ring)
  const codonTable = {
    'UUU': 'Phe', 'UUC': 'Phe', 'UUA': 'Leu', 'UUG': 'Leu',
    'UCU': 'Ser', 'UCC': 'Ser', 'UCA': 'Ser', 'UCG': 'Ser',
    'UAU': 'Tyr', 'UAC': 'Tyr', 'UAA': 'STOP', 'UAG': 'STOP',
    'UGU': 'Cys', 'UGC': 'Cys', 'UGA': 'STOP', 'UGG': 'Trp',
    'CUU': 'Leu', 'CUC': 'Leu', 'CUA': 'Leu', 'CUG': 'Leu',
    'CCU': 'Pro', 'CCC': 'Pro', 'CCA': 'Pro', 'CCG': 'Pro',
    'CAU': 'His', 'CAC': 'His', 'CAA': 'Gln', 'CAG': 'Gln',
    'CGU': 'Arg', 'CGC': 'Arg', 'CGA': 'Arg', 'CGG': 'Arg',
    'AUU': 'Ile', 'AUC': 'Ile', 'AUA': 'Ile', 'AUG': 'Met',
    'ACU': 'Thr', 'ACC': 'Thr', 'ACA': 'Thr', 'ACG': 'Thr',
    'AAU': 'Asn', 'AAC': 'Asn', 'AAA': 'Lys', 'AAG': 'Lys',
    'AGU': 'Ser', 'AGC': 'Ser', 'AGA': 'Arg', 'AGG': 'Arg',
    'GUU': 'Val', 'GUC': 'Val', 'GUA': 'Val', 'GUG': 'Val',
    'GCU': 'Ala', 'GCC': 'Ala', 'GCA': 'Ala', 'GCG': 'Ala',
    'GAU': 'Asp', 'GAC': 'Asp', 'GAA': 'Glu', 'GAG': 'Glu',
    'GGU': 'Gly', 'GGC': 'Gly', 'GGA': 'Gly', 'GGG': 'Gly'
  };
  
  let idx = 0;
  bases.forEach((base1) => {
    bases.forEach((base2) => {
      bases.forEach((base3) => {
        const codon = base1 + base2 + base3;
        const aa = codonTable[codon];
        
        const startAngle = (idx / 64) * Math.PI * 2 - Math.PI / 2;
        const endAngle = ((idx + 1) / 64) * Math.PI * 2 - Math.PI / 2;
        
        let fillColor = 'rgba(150, 150, 150, 0.3)';
        if (aa === 'STOP') {
          fillColor = 'rgba(231, 76, 60, 0.6)';
        } else if (codon === 'AUG') {
          fillColor = 'rgba(46, 204, 113, 0.6)';
        }
        
        ctx.fillStyle = fillColor;
        ctx.beginPath();
        ctx.arc(centerX, centerY, rings[2].outer, startAngle, endAngle);
        ctx.arc(centerX, centerY, rings[2].inner, endAngle, startAngle, true);
        ctx.closePath();
        ctx.fill();
        
        ctx.strokeStyle = '#333';
        ctx.lineWidth = 0.5;
        ctx.stroke();
        
        // Amino acid label (outer)
        const midAngle = (startAngle + endAngle) / 2;
        const aaRadius = rings[2].outer + 15;
        const aaX = centerX + Math.cos(midAngle) * aaRadius;
        const aaY = centerY + Math.sin(midAngle) * aaRadius;
        
        ctx.save();
        ctx.translate(aaX, aaY);
        ctx.rotate(midAngle + Math.PI / 2);
        
        ctx.fillStyle = aa === 'STOP' ? '#E74C3C' : (codon === 'AUG' ? '#2ECC71' : '#000');
        ctx.font = 'bold 7px Arial';
        ctx.textAlign = 'center';
        ctx.fillText(aa, 0, 0);
        
        ctx.restore();
        
        idx++;
      });
    });
  });
  
  // Center labels
  ctx.fillStyle = '#000';
  ctx.font = '12px Arial';
  ctx.textAlign = 'center';
  ctx.fillText('1st position', centerX, centerY - outerRadius * 0.55);
  ctx.fillText('2nd position', centerX, centerY - outerRadius * 0.75);
  ctx.fillText('3rd position', centerX, centerY - outerRadius * 0.9);
}

static drawWheelCodonChart(ctx, width, height, feature) {
  const w = width, h = height;
  
  ctx.fillStyle = '#000';
  ctx.font = 'bold 18px Arial';
  ctx.textAlign = 'center';
  ctx.fillText('Genetic Code Wheel', w * 0.5, h * 0.05);
  
  const centerX = w * 0.5;
  const centerY = h * 0.5;
  const maxRadius = Math.min(w, h) * 0.42;
  
  // Simplified codon wheel showing wobble base pairing
  const bases = ['U', 'C', 'A', 'G'];
  const aaGroups = {
    'Phe': ['UUU', 'UUC'],
    'Leu': ['UUA', 'UUG', 'CUU', 'CUC', 'CUA', 'CUG'],
    'Ile': ['AUU', 'AUC', 'AUA'],
    'Met': ['AUG'],
    'Val': ['GUU', 'GUC', 'GUA', 'GUG'],
    'Ser': ['UCU', 'UCC', 'UCA', 'UCG', 'AGU', 'AGC'],
    'Pro': ['CCU', 'CCC', 'CCA', 'CCG'],
    'Thr': ['ACU', 'ACC', 'ACA', 'ACG'],
    'Ala': ['GCU', 'GCC', 'GCA', 'GCG'],
    'Tyr': ['UAU', 'UAC'],
    'STOP': ['UAA', 'UAG', 'UGA'],
    'His': ['CAU', 'CAC'],
    'Gln': ['CAA', 'CAG'],
    'Asn': ['AAU', 'AAC'],
    'Lys': ['AAA', 'AAG'],
    'Asp': ['GAU', 'GAC'],
    'Glu': ['GAA', 'GAG'],
    'Cys': ['UGU', 'UGC'],
    'Trp': ['UGG'],
    'Arg': ['CGU', 'CGC', 'CGA', 'CGG', 'AGA', 'AGG'],
    'Gly': ['GGU', 'GGC', 'GGA', 'GGG']
  };
  
  // Draw wedges for amino acid families
  const aaColors = [
    '#FF6B6B', '#4ECDC4', '#FFD93D', '#95E1D3', '#FF9999',
    '#66CDAA', '#DDA0DD', '#F0E68C', '#FFB6C1', '#87CEEB',
    '#FFA07A', '#98FB98', '#DEB887', '#F08080', '#E0BBE4',
    '#C4A4E0', '#FFDAB9', '#B0E0E6', '#FFCCCB', '#D8BFD8'
  ];
  
  let colorIdx = 0;
  const totalAAs = Object.keys(aaGroups).length;
  let currentAngle = -Math.PI / 2;
  
  Object.entries(aaGroups).forEach(([aa, codons], idx) => {
    const wedgeSize = (Math.PI * 2) / totalAAs;
    const endAngle = currentAngle + wedgeSize;
    
    // Different colors for special codons
    let wedgeColor = aaColors[colorIdx % aaColors.length];
    if (aa === 'STOP') {
      wedgeColor = '#E74C3C';
    } else if (aa === 'Met') {
      wedgeColor = '#2ECC71';
    }
    
    // Draw wedge
    ctx.fillStyle = wedgeColor;
    ctx.globalAlpha = 0.6;
    ctx.beginPath();
    ctx.moveTo(centerX, centerY);
    ctx.arc(centerX, centerY, maxRadius, currentAngle, endAngle);
    ctx.closePath();
    ctx.fill();
    
    ctx.globalAlpha = 1.0;
    ctx.strokeStyle = '#000';
    ctx.lineWidth = 2;
    ctx.stroke();
    
    // Amino acid label
    const midAngle = (currentAngle + endAngle) / 2;
    const labelRadius = maxRadius * 0.7;
    const labelX = centerX + Math.cos(midAngle) * labelRadius;
    const labelY = centerY + Math.sin(midAngle) * labelRadius;
    
    ctx.fillStyle = '#000';
    ctx.font = 'bold 14px Arial';
    ctx.textAlign = 'center';
    ctx.fillText(aa, labelX, labelY);
    
    // Codon count
    ctx.font = '10px Arial';
    ctx.fillText(`(${codons.length})`, labelX, labelY + 15);
    
    // Show codons at edge
    if (feature === 'wobble' || feature === 'degeneracy') {
      codons.forEach((codon, cIdx) => {
        const codonAngle = currentAngle + (cIdx + 0.5) * wedgeSize / codons.length;
        const codonRadius = maxRadius + 20;
        const codonX = centerX + Math.cos(codonAngle) * codonRadius;
        const codonY = centerY + Math.sin(codonAngle) * codonRadius;
        
        ctx.save();
        ctx.translate(codonX, codonY);
        ctx.rotate(codonAngle + Math.PI / 2);
        
        ctx.fillStyle = '#333';
        ctx.font = '8px Arial';
        ctx.fillText(codon, 0, 0);
        
        ctx.restore();
      });
    }
    
    currentAngle = endAngle;
    colorIdx++;
  });
  
  // Center circle with title
  ctx.fillStyle = '#FFF';
  ctx.beginPath();
  ctx.arc(centerX, centerY, maxRadius * 0.2, 0, Math.PI * 2);
  ctx.fill();
  ctx.strokeStyle = '#000';
  ctx.lineWidth = 3;
  ctx.stroke();
  
  ctx.fillStyle = '#000';
  ctx.font = 'bold 12px Arial';
  ctx.fillText('64', centerX, centerY - 5);
  ctx.fillText('Codons', centerX, centerY + 10);
  
  // Legend
  if (feature === 'degeneracy') {
    ctx.font = '11px Arial';
    ctx.textAlign = 'left';
    ctx.fillText('Wedge size shows degeneracy', w * 0.05, h * 0.95);
    ctx.fillText('(# of codons per amino acid)', w * 0.05, h * 0.98);
  }
}

// ===== HELPER FUNCTIONS =====

static drawArrow(ctx, x1, y1, x2, y2) {
  const headLength = 10;
  const angle = Math.atan2(y2 - y1, x2 - x1);
  
  ctx.beginPath();
  ctx.moveTo(x1, y1);
  ctx.lineTo(x2, y2);
  ctx.stroke();
  
  ctx.beginPath();
  ctx.moveTo(x2, y2);
  ctx.lineTo(x2 - headLength * Math.cos(angle - Math.PI / 6), y2 - headLength * Math.sin(angle - Math.PI / 6));
  ctx.moveTo(x2, y2);
  ctx.lineTo(x2 - headLength * Math.cos(angle + Math.PI / 6), y2 - headLength * Math.sin(angle + Math.PI / 6));
  ctx.stroke();
}

static darkenColor(color, amount) {
  // Simple color darkening
  const num = parseInt(color.replace('#', ''), 16);
  const r = Math.max(0, (num >> 16) - amount * 255);
  const g = Math.max(0, ((num >> 8) & 0x00FF) - amount * 255);
  const b = Math.max(0, (num & 0x0000FF) - amount * 255);
  return '#' + ((r << 16) | (g << 8) | b).toString(16).padStart(6, '0');
}


}

