import { createCanvas } from '@napi-rs/canvas'; import
ExcelJS from 'exceljs'; import fs from 'fs'; import os
from 'os'; import path from 'path'; import readline from
'readline'; import * as math from 'mathjs'; import
GIFEncoder from 'gifencoder'; import { PassThrough }
from 'stream';


class AnatomicalShapes {


// ===== GENETIC ENGINEERING DIAGRAMS =====

static drawGeneticEngineering(ctx, x, y, width, height, stage, method) {
  ctx.save();
  ctx.translate(x, y);
  
  switch(stage) {
    case 'complete':
      this.drawGeneticEngineeringComplete(ctx, width, height, method);
      break;
    case 'isolation':
      this.drawGeneIsolation(ctx, width, height, method);
      break;
    case 'insertion':
      this.drawGeneInsertion(ctx, width, height, method);
      break;
    case 'transformation':
      this.drawTransformation(ctx, width, height, method);
      break;
    case 'selection':
      this.drawSelection(ctx, width, height, method);
      break;
    case 'expression':
      this.drawGeneExpression(ctx, width, height, method);
      break;
  }
  
  ctx.restore();
}

static drawGeneticEngineeringComplete(ctx, width, height, method) {
  const w = width, h = height;
  
  // Title
  ctx.fillStyle = '#000000';
  ctx.font = `${h * 0.04}px Arial bold`;
  ctx.fillText('Genetic Engineering Process', w * 0.25, h * 0.05);
  
  // Step 1: Gene Isolation
  this.drawProcessStep(ctx, w * 0.1, h * 0.12, w * 0.35, h * 0.15, '1. Gene Isolation', '#3498DB');
  this.drawDNAStrand(ctx, w * 0.15, h * 0.18, w * 0.25, h * 0.05);
  ctx.fillStyle = '#E74C3C';
  ctx.fillRect(w * 0.25, h * 0.175, w * 0.08, h * 0.06);
  ctx.fillStyle = '#FFFFFF';
  ctx.font = `${h * 0.02}px Arial`;
  ctx.fillText('GOI', w * 0.265, h * 0.215);
  
  // Arrow down
  this.drawDownArrow(ctx, w * 0.275, h * 0.28, h * 0.05);
  
  // Step 2: Vector Insertion
  this.drawProcessStep(ctx, w * 0.1, h * 0.35, w * 0.35, h * 0.15, '2. Vector Insertion', '#9B59B6');
  this.drawPlasmid(ctx, w * 0.25, h * 0.42, w * 0.1, '#9B59B6');
  
  // Arrow down
  this.drawDownArrow(ctx, w * 0.275, h * 0.51, h * 0.05);
  
  // Step 3: Transformation
  this.drawProcessStep(ctx, w * 0.1, h * 0.58, w * 0.35, h * 0.15, '3. Transformation', '#27AE60');
  this.drawBacterialCell(ctx, w * 0.25, h * 0.65, w * 0.08, h * 0.06);
  
  // Step 4: Selection (right side)
  this.drawProcessStep(ctx, w * 0.55, h * 0.12, w * 0.35, h * 0.15, '4. Selection', '#F39C12');
  
  // Petri dish with colonies
  ctx.fillStyle = '#ECF0F1';
  ctx.beginPath();
  ctx.arc(w * 0.725, h * 0.2, w * 0.12, 0, Math.PI * 2);
  ctx.fill();
  ctx.strokeStyle = '#95A5A6';
  ctx.lineWidth = 3;
  ctx.stroke();
  
  // Colonies
  for(let i = 0; i < 8; i++) {
    const angle = (i / 8) * Math.PI * 2;
    const cx = w * 0.725 + Math.cos(angle) * w * 0.07;
    const cy = h * 0.2 + Math.sin(angle) * w * 0.07;
    ctx.fillStyle = i % 2 === 0 ? '#27AE60' : '#95A5A6';
    ctx.beginPath();
    ctx.arc(cx, cy, w * 0.015, 0, Math.PI * 2);
    ctx.fill();
  }
  
  // Arrow down
  this.drawDownArrow(ctx, w * 0.725, h * 0.28, h * 0.05);
  
  // Step 5: Expression
  this.drawProcessStep(ctx, w * 0.55, h * 0.35, w * 0.35, h * 0.15, '5. Protein Expression', '#E74C3C');
  
  // Protein production
  ctx.fillStyle = '#E74C3C';
  for(let i = 0; i < 5; i++) {
    const px = w * (0.6 + i * 0.06);
    this.drawProtein(ctx, px, h * 0.43, w * 0.04, h * 0.05);
  }
  
  // Method annotation
  ctx.fillStyle = '#000000';
  ctx.font = `${h * 0.025}px Arial`;
  const methodText = method.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
  ctx.fillText(`Method: ${methodText}`, w * 0.35, h * 0.92);
}

static drawGeneIsolation(ctx, width, height, method) {
  const w = width, h = height;
  
  // Source organism
  ctx.fillStyle = '#ECF0F1';
  ctx.fillRect(w * 0.05, h * 0.1, w * 0.3, h * 0.25);
  ctx.strokeStyle = '#2C3E50';
  ctx.lineWidth = 2;
  ctx.strokeRect(w * 0.05, h * 0.1, w * 0.3, h * 0.25);
  
  ctx.fillStyle = '#000000';
  ctx.font = `${h * 0.025}px Arial bold`;
  ctx.fillText('Source Organism', w * 0.08, h * 0.13);
  
  // DNA extraction
  this.drawCell(ctx, w * 0.2, h * 0.22, w * 0.08, h * 0.08);
  
  // Arrow
  ctx.strokeStyle = '#3498DB';
  ctx.lineWidth = 3;
  ctx.beginPath();
  ctx.moveTo(w * 0.35, h * 0.22);
  ctx.lineTo(w * 0.45, h * 0.22);
  ctx.stroke();
  this.drawArrowhead(ctx, w * 0.45, h * 0.22, 0, h * 0.03, '#3498DB');
  
  // Extracted DNA
  ctx.fillStyle = '#ECF0F1';
  ctx.fillRect(w * 0.48, h * 0.1, w * 0.45, h * 0.25);
  ctx.strokeStyle = '#2C3E50';
  ctx.lineWidth = 2;
  ctx.strokeRect(w * 0.48, h * 0.1, w * 0.45, h * 0.25);
  
  ctx.fillStyle = '#000000';
  ctx.font = `${h * 0.025}px Arial bold`;
  ctx.fillText('Genomic DNA', w * 0.55, h * 0.13);
  
  // Long DNA strand
  this.drawDNAStrand(ctx, w * 0.5, h * 0.18, w * 0.4, h * 0.04);
  this.drawDNAStrand(ctx, w * 0.5, h * 0.24, w * 0.4, h * 0.04);
  this.drawDNAStrand(ctx, w * 0.5, h * 0.30, w * 0.4, h * 0.04);
  
  // Gene of interest highlighted
  ctx.fillStyle = 'rgba(231, 76, 60, 0.3)';
  ctx.fillRect(w * 0.65, h * 0.17, w * 0.15, h * 0.06);
  
  ctx.strokeStyle = '#E74C3C';
  ctx.lineWidth = 2;
  ctx.setLineDash([5, 5]);
  ctx.strokeRect(w * 0.65, h * 0.17, w * 0.15, h * 0.06);
  ctx.setLineDash([]);
  
  ctx.fillStyle = '#E74C3C';
  ctx.font = `${h * 0.02}px Arial bold`;
  ctx.fillText('Gene of Interest (GOI)', w * 0.55, h * 0.15);
  
  // Restriction enzyme cutting
  ctx.fillStyle = '#000000';
  ctx.font = `${h * 0.03}px Arial bold`;
  ctx.fillText('Restriction Enzyme Digestion', w * 0.28, h * 0.42);
  
  // Enzyme molecules
  for(let i = 0; i < 3; i++) {
    const ex = w * (0.6 + i * 0.1);
    ctx.fillStyle = '#F39C12';
    ctx.beginPath();
    ctx.arc(ex, h * 0.45, w * 0.025, 0, Math.PI * 2);
    ctx.fill();
    
    // Pac-man mouth
    ctx.fillStyle = '#ECF0F1';
    ctx.beginPath();
    ctx.moveTo(ex, h * 0.45);
    ctx.lineTo(ex + w * 0.02, h * 0.44);
    ctx.lineTo(ex + w * 0.02, h * 0.46);
    ctx.closePath();
    ctx.fill();
  }
  
  // Arrow down
  this.drawDownArrow(ctx, w * 0.5, h * 0.52, h * 0.05);
  
  // Isolated gene
  ctx.fillStyle = '#ECF0F1';
  ctx.fillRect(w * 0.35, h * 0.60, w * 0.3, h * 0.25);
  ctx.strokeStyle = '#27AE60';
  ctx.lineWidth = 3;
  ctx.strokeRect(w * 0.35, h * 0.60, w * 0.3, h * 0.25);
  
  ctx.fillStyle = '#000000';
  ctx.font = `${h * 0.025}px Arial bold`;
  ctx.fillText('Isolated GOI', w * 0.41, h * 0.63);
  
  // Gene with sticky ends
  ctx.fillStyle = '#E74C3C';
  ctx.fillRect(w * 0.42, h * 0.70, w * 0.16, h * 0.06);
  
  // Sticky ends (jagged)
  ctx.strokeStyle = '#E74C3C';
  ctx.lineWidth = 3;
  ctx.beginPath();
  ctx.moveTo(w * 0.40, h * 0.72);
  ctx.lineTo(w * 0.42, h * 0.70);
  ctx.moveTo(w * 0.40, h * 0.74);
  ctx.lineTo(w * 0.42, h * 0.76);
  ctx.stroke();
  
  ctx.beginPath();
  ctx.moveTo(w * 0.58, h * 0.70);
  ctx.lineTo(w * 0.60, h * 0.72);
  ctx.moveTo(w * 0.58, h * 0.76);
  ctx.lineTo(w * 0.60, h * 0.74);
  ctx.stroke();
  
  // Labels
  ctx.fillStyle = '#000000';
  ctx.font = `${h * 0.018}px Arial`;
  ctx.fillText('5\' overhang', w * 0.32, h * 0.73);
  ctx.fillText('3\' overhang', w * 0.61, h * 0.73);
}

static drawGeneInsertion(ctx, width, height, method) {
  const w = width, h = height;
  
  ctx.fillStyle = '#000000';
  ctx.font = `${h * 0.03}px Arial bold`;
  ctx.fillText('Gene Insertion into Vector', w * 0.3, h * 0.05);
  
  // Isolated gene (left)
  ctx.fillStyle = '#E74C3C';
  ctx.fillRect(w * 0.15, h * 0.12, w * 0.12, h * 0.05);
  
  ctx.fillStyle = '#000000';
  ctx.font = `${h * 0.02}px Arial`;
  ctx.fillText('GOI', w * 0.185, h * 0.10);
  
  // Sticky ends
  ctx.strokeStyle = '#E74C3C';
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.moveTo(w * 0.14, h * 0.135);
  ctx.lineTo(w * 0.15, h * 0.12);
  ctx.moveTo(w * 0.14, h * 0.155);
  ctx.lineTo(w * 0.15, h * 0.17);
  ctx.stroke();
  
  ctx.beginPath();
  ctx.moveTo(w * 0.27, h * 0.12);
  ctx.lineTo(w * 0.28, h * 0.135);
  ctx.moveTo(w * 0.27, h * 0.17);
  ctx.lineTo(w * 0.28, h * 0.155);
  ctx.stroke();
  
  // Plus sign
  ctx.fillStyle = '#000000';
  ctx.font = `${h * 0.04}px Arial bold`;
  ctx.fillText('+', w * 0.30, h * 0.16);
  
  // Plasmid vector (right)
  if(method === 'plasmid-vector') {
    this.drawOpenPlasmid(ctx, w * 0.40, h * 0.10, w * 0.15, h * 0.10);
  } else if(method === 'viral-vector') {
    this.drawViralVector(ctx, w * 0.42, h * 0.12, w * 0.12, h * 0.08);
  }
  
  // Arrow down
  ctx.fillStyle = '#3498DB';
  ctx.font = `${h * 0.025}px Arial`;
  ctx.fillText('DNA Ligase', w * 0.42, h * 0.26);
  this.drawDownArrow(ctx, w * 0.35, h * 0.28, h * 0.06);
  
  // Recombinant vector
  ctx.fillStyle = '#ECF0F1';
  ctx.fillRect(w * 0.2, h * 0.38, w * 0.6, h * 0.35);
  ctx.strokeStyle = '#27AE60';
  ctx.lineWidth = 3;
  ctx.strokeRect(w * 0.2, h * 0.38, w * 0.6, h * 0.35);
  
  ctx.fillStyle = '#000000';
  ctx.font = `${h * 0.025}px Arial bold`;
  ctx.fillText('Recombinant DNA', w * 0.38, h * 0.42);
  
  if(method === 'plasmid-vector') {
    this.drawPlasmid(ctx, w * 0.5, h * 0.55, w * 0.15, '#9B59B6');
    
    // GOI in plasmid
    ctx.fillStyle = '#E74C3C';
    ctx.fillRect(w * 0.545, h * 0.52, w * 0.06, h * 0.025);
    ctx.fillStyle = '#FFFFFF';
    ctx.font = `${h * 0.015}px Arial`;
    ctx.fillText('GOI', w * 0.555, h * 0.537);
    
    // Antibiotic resistance gene
    ctx.fillStyle = '#3498DB';
    ctx.fillRect(w * 0.465, h * 0.575, w * 0.07, h * 0.02);
    ctx.fillStyle = '#FFFFFF';
    ctx.font = `${h * 0.012}px Arial`;
    ctx.fillText('AmpR', w * 0.475, h * 0.59);
    
  } else if(method === 'viral-vector') {
    this.drawViralVector(ctx, w * 0.45, h * 0.52, w * 0.18, h * 0.12);
    ctx.fillStyle = '#E74C3C';
    ctx.fillRect(w * 0.50, h * 0.56, w * 0.08, h * 0.03);
    ctx.fillStyle = '#FFFFFF';
    ctx.font = `${h * 0.015}px Arial`;
    ctx.fillText('GOI', w * 0.52, h * 0.58);
  }
  
  // Features annotation
  ctx.fillStyle = '#000000';
  ctx.font = `${h * 0.02}px Arial`;
  ctx.fillText('• Gene of interest inserted', w * 0.25, h * 0.78);
  ctx.fillText('• Selectable marker included', w * 0.25, h * 0.82);
  ctx.fillText('• Promoter and regulatory elements', w * 0.25, h * 0.86);
}

static drawTransformation(ctx, width, height, method) {
  const w = width, h = height;
  
  ctx.fillStyle = '#000000';
  ctx.font = `${h * 0.03}px Arial bold`;
  const methodName = method.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
  ctx.fillText(`Transformation: ${methodName}`, w * 0.25, h * 0.05);
  
  if(method === 'electroporation') {
    // Electroporation chamber
    ctx.fillStyle = '#95A5A6';
    ctx.fillRect(w * 0.3, h * 0.15, w * 0.4, h * 0.5);
    ctx.strokeStyle = '#2C3E50';
    ctx.lineWidth = 3;
    ctx.strokeRect(w * 0.3, h * 0.15, w * 0.4, h * 0.5);
    
    // Electrodes
    ctx.fillStyle = '#2C3E50';
    ctx.fillRect(w * 0.28, h * 0.25, w * 0.02, h * 0.3);
    ctx.fillRect(w * 0.70, h * 0.25, w * 0.02, h * 0.3);
    
    // Voltage labels
    ctx.fillStyle = '#000000';
    ctx.font = `${h * 0.03}px Arial bold`;
    ctx.fillText('-', w * 0.25, h * 0.42);
    ctx.fillText('+', w * 0.73, h * 0.42);
    
    // Electric field
    ctx.strokeStyle = '#F39C12';
    ctx.lineWidth = 2;
    ctx.setLineDash([5, 5]);
    for(let i = 0; i < 5; i++) {
      ctx.beginPath();
      ctx.moveTo(w * 0.30, h * (0.25 + i * 0.06));
      ctx.lineTo(w * 0.70, h * (0.25 + i * 0.06));
      ctx.stroke();
    }
    ctx.setLineDash([]);
    
    // Cells with pores
    for(let i = 0; i < 3; i++) {
      const cx = w * (0.4 + i * 0.1);
      const cy = h * 0.4;
      
      this.drawBacterialCell(ctx, cx, cy, w * 0.06, h * 0.05);
      
      // Pores in membrane
      ctx.fillStyle = '#E74C3C';
      for(let j = 0; j < 4; j++) {
        const angle = (j / 4) * Math.PI * 2;
        const px = cx + Math.cos(angle) * w * 0.032;
        const py = cy + Math.sin(angle) * h * 0.027;
        ctx.fillRect(px, py, w * 0.003, h * 0.008);
      }
    }
    
    // DNA entering
    ctx.strokeStyle = '#9B59B6';
    ctx.lineWidth = 2;
    for(let i = 0; i < 3; i++) {
      ctx.beginPath();
      ctx.moveTo(w * (0.35 + i * 0.1), h * 0.35);
      ctx.lineTo(w * (0.38 + i * 0.1), h * 0.38);
      ctx.stroke();
    }
    
  } else if(method === 'gene-gun') {
    // Gene gun device
    ctx.fillStyle = '#7F8C8D';
    ctx.fillRect(w * 0.15, h * 0.25, w * 0.25, h * 0.15);
    
    // Barrel
    ctx.fillRect(w * 0.4, h * 0.295, w * 0.2, h * 0.03);
    
    // Gold particles with DNA
    ctx.fillStyle = '#F39C12';
    for(let i = 0; i < 8; i++) {
      const px = w * (0.6 + i * 0.03);
      const py = h * (0.305 + Math.sin(i) * 0.02);
      
      ctx.beginPath();
      ctx.arc(px, py, w * 0.008, 0, Math.PI * 2);
      ctx.fill();
      
      // DNA coating
      ctx.strokeStyle = '#9B59B6';
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.arc(px, py, w * 0.012, 0, Math.PI * 2);
      ctx.stroke();
    }
    
    // Target cells
    ctx.fillStyle = '#D5E8D4';
    ctx.fillRect(w * 0.65, h * 0.2, w * 0.25, h * 0.25);
    ctx.strokeStyle = '#82B366';
    ctx.lineWidth = 2;
    ctx.strokeRect(w * 0.65, h * 0.2, w * 0.25, h * 0.25);
    
    // Plant cells
    for(let i = 0; i < 2; i++) {
      for(let j = 0; j < 2; j++) {
        this.drawPlantCell(ctx, w * (0.68 + i * 0.08), h * (0.24 + j * 0.08), w * 0.06, h * 0.06);
      }
    }
    
    ctx.fillStyle = '#000000';
    ctx.font = `${h * 0.02}px Arial`;
    ctx.fillText('Gene Gun', w * 0.22, h * 0.23);
    ctx.fillText('Plant Tissue', w * 0.70, h * 0.18);
    
  } else {
    // Heat shock / chemical method
    // Ice bath
    ctx.fillStyle = '#D6EAF8';
    ctx.fillRect(w * 0.1, h * 0.35, w * 0.25, h * 0.15);
    ctx.strokeStyle = '#3498DB';
    ctx.lineWidth = 2;
    ctx.strokeRect(w * 0.1, h * 0.35, w * 0.25, h * 0.15);
    
    // Ice cubes
    ctx.fillStyle = '#ECF0F1';
    ctx.fillRect(w * 0.12, h * 0.37, w * 0.04, h * 0.04);
    ctx.fillRect(w * 0.17, h * 0.38, w * 0.04, h * 0.04);
    ctx.fillRect(w * 0.28, h * 0.37, w * 0.04, h * 0.04);
    
    ctx.fillStyle = '#000000';
    ctx.font = `${h * 0.02}px Arial`;
    ctx.fillText('0°C', w * 0.18, h * 0.33);
    ctx.fillText('Ice', w * 0.19, h * 0.52);
    
    // Tube with cells
    ctx.fillStyle = '#ECF0F1';
    ctx.fillRect(w * 0.20, h * 0.38, w * 0.05, h * 0.10);
    ctx.strokeStyle = '#95A5A6';
    ctx.lineWidth = 2;
    ctx.strokeRect(w * 0.20, h * 0.38, w * 0.05, h * 0.10);
    
    // Arrow
    this.drawArrowhead(ctx, w * 0.38, h * 0.42, 0, h * 0.03, '#E74C3C');
    ctx.strokeStyle = '#E74C3C';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(w * 0.35, h * 0.42);
    ctx.lineTo(w * 0.38, h * 0.42);
    ctx.stroke();
    
    // Heat shock
    ctx.fillStyle = '#FADBD8';
    ctx.fillRect(w * 0.42, h * 0.35, w * 0.25, h * 0.15);
    ctx.strokeStyle = '#E74C3C';
    ctx.lineWidth = 2;
    ctx.strokeRect(w * 0.42, h * 0.35, w * 0.25, h * 0.15);
    
    // Heat waves
    ctx.strokeStyle = '#E74C3C';
    ctx.lineWidth = 2;
    for(let i = 0; i < 3; i++) {
      ctx.beginPath();
      const y = h * (0.32 + i * 0.02);
      ctx.moveTo(w * 0.45, y);
      ctx.quadraticCurveTo(w * 0.50, y - h * 0.01, w * 0.55, y);
      ctx.quadraticCurveTo(w * 0.60, y + h * 0.01, w * 0.65, y);
      ctx.stroke();
    }
    
    ctx.fillStyle = '#000000';
    ctx.font = `${h * 0.02}px Arial`;
    ctx.fillText('42°C', w * 0.51, h * 0.33);
    ctx.fillText('30-90 sec', w * 0.49, h * 0.52);
    
    // Tube in heat
    ctx.fillStyle = '#ECF0F1';
    ctx.fillRect(w * 0.52, h * 0.38, w * 0.05, h * 0.10);
    ctx.strokeStyle = '#95A5A6';
    ctx.lineWidth = 2;
    ctx.strokeRect(w * 0.52, h * 0.38, w * 0.05, h * 0.10);
    
    // Arrow to recovery
    this.drawArrowhead(ctx, w * 0.70, h * 0.42, 0, h * 0.03, '#27AE60');
    ctx.strokeStyle = '#27AE60';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(w * 0.67, h * 0.42);
    ctx.lineTo(w * 0.70, h * 0.42);
    ctx.stroke();
    
    // Recovery
    ctx.fillStyle = '#D5F4E6';
    ctx.fillRect(w * 0.72, h * 0.35, w * 0.18, h * 0.15);
    ctx.strokeStyle = '#27AE60';
    ctx.lineWidth = 2;
    ctx.strokeRect(w * 0.72, h * 0.35, w * 0.18, h * 0.15);
    
    ctx.fillStyle = '#000000';
    ctx.font = `${h * 0.02}px Arial`;
    ctx.fillText('37°C', w * 0.77, h * 0.33);
    ctx.fillText('Recovery', w * 0.74, h * 0.52);
  }
  
  // Result
  ctx.fillStyle = '#000000';
  ctx.font = `${h * 0.025}px Arial bold`;
  ctx.fillText('Transformed Cells', w * 0.38, h * 0.70);
  
  // Transformed cells
  for(let i = 0; i < 5; i++) {
    const cx = w * (0.3 + i * 0.1);
    this.drawBacterialCell(ctx, cx, h * 0.78, w * 0.05, h * 0.04);
    
    // Plasmid inside
    ctx.strokeStyle = '#9B59B6';
    ctx.lineWidth = 1.5;
    ctx.beginPath();
    ctx.arc(cx, h * 0.78, w * 0.015, 0, Math.PI * 2);
    ctx.stroke();
  }
}

static drawSelection(ctx, width, height, method) {
  const w = width, h = height;
  
  ctx.fillStyle = '#000000';
  ctx.font = `${h * 0.03}px Arial bold`;
  ctx.fillText('Selection of Transformed Cells', w * 0.28, h * 0.05);
  
  // Plating
  ctx.fillStyle = '#000000';
  ctx.font = `${h * 0.025}px Arial`;
  ctx.fillText('Plate on selective media', w * 0.1, h * 0.12);
  
  // Petri dish with agar
  ctx.fillStyle = '#F8F9F9';
  ctx.beginPath();
  ctx.arc(w * 0.3, h * 0.30, w * 0.15, 0, Math.PI * 2);
  ctx.fill();
  ctx.strokeStyle = '#95A5A6';
  ctx.lineWidth = 3;
  ctx.stroke();
  
  // Agar with antibiotic
  ctx.fillStyle = '#FEF5E7';
  ctx.beginPath();
  ctx.arc(w * 0.3, h * 0.30, w * 0.14, 0, Math.PI * 2);
  ctx.fill();
  
  // Label
  ctx.fillStyle = '#F39C12';
  ctx.font = `${h * 0.02}px Arial bold`;
  ctx.fillText('+ Ampicillin', w * 0.24, h * 0.31);
  
  // Spread cells
  ctx.fillStyle = '#95A5A6';
  for(let i = 0; i < 20; i++) {
    const angle = Math.random() * Math.PI * 2;
    const radius = Math.random() * w * 0.12;
    const cx = w * 0.3 + Math.cos(angle) * radius;
    const cy = h * 0.30 + Math.sin(angle) * radius;
    
    ctx.beginPath();
    ctx.arc(cx, cy, w * 0.003, 0, Math.PI * 2);
    ctx.fill();
  }
  
  // Incubation
  ctx.fillStyle = '#000000';
  ctx.font = `${h * 0.025}px Arial`;
  ctx.fillText('Incubate overnight at 37°C', w * 0.1, h * 0.50);
  
  // Arrow down
  this.drawDownArrow(ctx, w * 0.3, h * 0.52, h * 0.05);
  
  // Result petri dish
  ctx.fillStyle = '#F8F9F9';
  ctx.beginPath();
  ctx.arc(w * 0.3, h * 0.72, w * 0.15, 0, Math.PI * 2);
  ctx.fill();
  ctx.strokeStyle = '#95A5A6';
  ctx.lineWidth = 3;
  ctx.stroke();
  
  ctx.fillStyle = '#FEF5E7';
  ctx.beginPath();
  ctx.arc(w * 0.3, h * 0.72, w * 0.14, 0, Math.PI * 2);
  ctx.fill();
  
  // Successful colonies (green)
  for(let i = 0; i < 8; i++) {
    const angle = (i / 8) * Math.PI * 2;
    const radius = w * 0.08;
    const cx = w * 0.3 + Math.cos(angle) * radius;
    const cy = h * 0.72 + Math.sin(angle) * radius * 0.6;
    
    ctx.fillStyle = '#27AE60';
    ctx.beginPath();
    ctx.arc(cx, cy, w * 0.015, 0, Math.PI * 2);
    ctx.fill();
    
    // Halo around colony
    ctx.strokeStyle = 'rgba(39, 174, 96, 0.3)';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.arc(cx, cy, w * 0.022, 0, Math.PI * 2);
    ctx.stroke();
  }
  
  ctx.fillStyle = '#000000';
  ctx.font = `${h * 0.02}px Arial`;
  ctx.fillText('Transformed colonies', w * 0.22, h * 0.88);
  
  // Explanation panel
  ctx.fillStyle = '#ECF0F1';
  ctx.fillRect(w * 0.52, h * 0.15, w * 0.42, h * 0.70);
  ctx.strokeStyle = '#27AE60';
  ctx.lineWidth = 2;
  ctx.strokeRect(w * 0.52, h * 0.15, w * 0.42, h * 0.70);
  
  ctx.fillStyle = '#000000';
  ctx.font = `${h * 0.025}px Arial bold`;
  ctx.fillText('Selection Principle', w * 0.60, h * 0.20);
  
  // Non-transformed cell
  ctx.font = `${h * 0.022}px Arial`;
  ctx.fillText('Non-transformed cell:', w * 0.55, h * 0.28);
  
  this.drawBacterialCell(ctx, w * 0.65, h * 0.35, w * 0.05, h * 0.04);
  ctx.fillStyle = '#E74C3C';
  ctx.font = `${h * 0.04}px Arial bold`;
  ctx.fillText('✗', w * 0.72, h * 0.37);
  
  ctx.fillStyle = '#000000';
  ctx.font = `${h * 0.02}px Arial`;
  ctx.fillText('• No antibiotic resistance', w * 0.55, h * 0.44);
  ctx.fillText('• Cannot grow', w * 0.55, h * 0.48);
  ctx.fillText('• Dies on selective media', w * 0.55, h * 0.52);
  
  // Transformed cell
  ctx.font = `${h * 0.022}px Arial`;
  ctx.fillText('Transformed cell:', w * 0.55, h * 0.60);
  
  this.drawBacterialCell(ctx, w * 0.65, h * 0.67, w * 0.05, h * 0.04);
  
  // Plasmid with resistance gene
  ctx.strokeStyle = '#9B59B6';
  ctx.lineWidth = 1.5;
  ctx.beginPath();
  ctx.arc(w * 0.65, h * 0.67, w * 0.015, 0, Math.PI * 2);
  ctx.stroke();
  
  ctx.fillStyle = '#27AE60';
  ctx.font = `${h * 0.04}px Arial bold`;
  ctx.fillText('✓', w * 0.72, h * 0.69);
  
  ctx.fillStyle = '#000000';
  ctx.font = `${h * 0.02}px Arial`;
  ctx.fillText('• Has resistance plasmid', w * 0.55, h * 0.76);
  ctx.fillText('• Survives antibiotic', w * 0.55, h * 0.80);
  ctx.fillText('• Forms colony', w * 0.55, h * 0.84);
}

static drawGeneExpression(ctx, width, height, method) {
  const w = width, h = height;
  
  ctx.fillStyle = '#000000';
  ctx.font = `${h * 0.03}px Arial bold`;
  ctx.fillText('Protein Expression & Production', w * 0.28, h * 0.05);
  
  // Bacterial cell with plasmid
  ctx.fillStyle = '#D5E8D4';
  ctx.beginPath();
  ctx.arc(w * 0.2, h * 0.20, w * 0.1, 0, Math.PI * 2);
  ctx.fill();
  ctx.strokeStyle = '#82B366';
  ctx.lineWidth = 3;
  ctx.stroke();
  
  // Plasmid
  ctx.strokeStyle = '#9B59B6';
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.arc(w * 0.2, h * 0.20, w * 0.03, 0, Math.PI * 2);
  ctx.stroke();
  
  // GOI in plasmid
  ctx.fillStyle = '#E74C3C';
  ctx.fillRect(w * 0.195, h * 0.175, w * 0.01, h * 0.02);
  
  ctx.fillStyle = '#000000';
  ctx.font = `${h * 0.02}px Arial`;
  ctx.fillText('Transformed cell', w * 0.14, h * 0.35);
  
  // Arrow to transcription
  ctx.strokeStyle = '#3498DB';
  ctx.lineWidth = 3;
  ctx.beginPath();
  ctx.moveTo(w * 0.3, h * 0.20);
  ctx.lineTo(w * 0.38, h * 0.20);
  ctx.stroke();
  this.drawArrowhead(ctx, w * 0.38, h * 0.20, 0, h * 0.03, '#3498DB');
  
  // Transcription
  ctx.fillStyle = '#ECF0F1';
  ctx.fillRect(w * 0.40, h * 0.12, w * 0.22, h * 0.16);
  ctx.strokeStyle = '#3498DB';
  ctx.lineWidth = 2;
  ctx.strokeRect(w * 0.40, h * 0.12, w * 0.22, h * 0.16);
  
  ctx.fillStyle = '#3498DB';
  ctx.font = `${h * 0.022}px Arial bold`;
  ctx.fillText('Transcription', w * 0.44, h * 0.16);
  
  // DNA to mRNA
  ctx.strokeStyle = '#3498DB';
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.moveTo(w * 0.42, h * 0.19);
  ctx.lineTo(w * 0.60, h * 0.19);
  ctx.stroke();
  
  // mRNA
  ctx.strokeStyle = '#E74C3C';
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.moveTo(w * 0.42, h * 0.24);
  for(let i = 0; i <= 18; i++) {
    const x = w * (0.42 + i * 0.01);
    const y = h * (0.24 + Math.sin(i * 0.8) * 0.008);
    ctx.lineTo(x, y);
  }
  ctx.stroke();
  
  // Arrow to translation
  ctx.strokeStyle = '#9B59B6';
  ctx.lineWidth = 3;
  ctx.beginPath();
  ctx.moveTo(w * 0.62, h * 0.20);
  ctx.lineTo(w * 0.68, h * 0.20);
  ctx.stroke();
  this.drawArrowhead(ctx, w * 0.68, h * 0.20, 0, h * 0.03, '#9B59B6');
  
  // Translation
  ctx.fillStyle = '#ECF0F1';
  ctx.fillRect(w * 0.70, h * 0.12, w * 0.22, h * 0.16);
  ctx.strokeStyle = '#9B59B6';
  ctx.lineWidth = 2;
  ctx.strokeRect(w * 0.70, h * 0.12, w * 0.22, h * 0.16);
  
  ctx.fillStyle = '#9B59B6';
  ctx.font = `${h * 0.022}px Arial bold`;
  ctx.fillText('Translation', w * 0.75, h * 0.16);
  
  // Ribosome
  ctx.fillStyle = '#7F8C8D';
  ctx.beginPath();
  ctx.arc(w * 0.75, h * 0.21, w * 0.02, 0, Math.PI);
  ctx.fill();
  ctx.beginPath();
  ctx.arc(w * 0.75, h * 0.23, w * 0.015, Math.PI, Math.PI * 2);
  ctx.fill();
  
  // mRNA through ribosome
  ctx.strokeStyle = '#E74C3C';
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.moveTo(w * 0.72, h * 0.22);
  ctx.lineTo(w * 0.88, h * 0.22);
  ctx.stroke();
  
  // Growing protein chain
  ctx.fillStyle = '#27AE60';
  for(let i = 0; i < 5; i++) {
    ctx.beginPath();
    ctx.arc(w * (0.78 + i * 0.015), h * (0.24 + i * 0.01), w * 0.008, 0, Math.PI * 2);
    ctx.fill();
  }
  
  // Arrow down to protein production
  this.drawDownArrow(ctx, w * 0.5, h * 0.32, h * 0.08);
  
  // Protein production
  ctx.fillStyle = '#E8F8F5';
  ctx.fillRect(w * 0.15, h * 0.45, w * 0.7, h * 0.35);
  ctx.strokeStyle = '#27AE60';
  ctx.lineWidth = 3;
  ctx.strokeRect(w * 0.15, h * 0.45, w * 0.7, h * 0.35);
  
  ctx.fillStyle = '#27AE60';
  ctx.font = `${h * 0.025}px Arial bold`;
  ctx.fillText('Protein Production', w * 0.38, h * 0.50);
  
  // Multiple protein molecules
  for(let i = 0; i < 3; i++) {
    for(let j = 0; j < 4; j++) {
      const px = w * (0.22 + j * 0.15);
      const py = h * (0.56 + i * 0.07);
      this.drawProtein(ctx, px, py, w * 0.05, h * 0.04);
    }
  }
  
  // Production stats
  ctx.fillStyle = '#000000';
  ctx.font = `${h * 0.02}px Arial`;
  ctx.fillText('High-level expression achieved', w * 0.32, h * 0.85);
  ctx.fillText('Ready for purification', w * 0.35, h * 0.89);
}

static drawProcessStep(ctx, x, y, width, height, title, color) {
  ctx.fillStyle = 'rgba(236, 240, 241, 0.8)';
  ctx.fillRect(x, y, width, height);
  ctx.strokeStyle = color;
  ctx.lineWidth = 3;
  ctx.strokeRect(x, y, width, height);
  
  ctx.fillStyle = color;
  ctx.font = `${height * 0.15}px Arial bold`;
  ctx.fillText(title, x + width * 0.1, y + height * 0.25);
}

static drawDownArrow(ctx, x, y, size) {
  ctx.fillStyle = '#95A5A6';
  ctx.fillRect(x - size * 0.15, y, size * 0.3, size);
  
  ctx.beginPath();
  ctx.moveTo(x - size * 0.4, y + size);
  ctx.lineTo(x, y + size * 1.3);
  ctx.lineTo(x + size * 0.4, y + size);
  ctx.closePath();
  ctx.fill();
}

static drawPlasmid(ctx, centerX, centerY, radius, color) {
  // Circular plasmid
  ctx.strokeStyle = color;
  ctx.lineWidth = 3;
  ctx.beginPath();
  ctx.arc(centerX, centerY, radius, 0, Math.PI * 2);
  ctx.stroke();
  
  // Inner circle for double-stranded DNA
  ctx.beginPath();
  ctx.arc(centerX, centerY, radius * 0.85, 0, Math.PI * 2);
  ctx.stroke();
}

static drawOpenPlasmid(ctx, x, y, width, height) {
  // Linearized plasmid
  ctx.strokeStyle = '#9B59B6';
  ctx.lineWidth = 3;
  
  // Upper strand
  ctx.beginPath();
  ctx.moveTo(x, y);
  ctx.lineTo(x + width * 0.3, y);
  ctx.moveTo(x + width * 0.5, y);
  ctx.lineTo(x + width, y);
  ctx.stroke();
  
  // Lower strand
  ctx.beginPath();
  ctx.moveTo(x, y + height);
  ctx.lineTo(x + width * 0.3, y + height);
  ctx.moveTo(x + width * 0.5, y + height);
  ctx.lineTo(x + width, y + height);
  ctx.stroke();
  
  // Connection lines
  for(let i = 0; i <= 10; i++) {
    if(i < 3 || i > 5) {
      const xPos = x + (i / 10) * width;
      ctx.beginPath();
      ctx.moveTo(xPos, y);
      ctx.lineTo(xPos, y + height);
      ctx.stroke();
    }
  }
  
  // Cut site indicators
  ctx.strokeStyle = '#E74C3C';
  ctx.lineWidth = 2;
  ctx.setLineDash([3, 3]);
  ctx.beginPath();
  ctx.moveTo(x + width * 0.3, y - height * 0.2);
  ctx.lineTo(x + width * 0.3, y + height * 1.2);
  ctx.stroke();
  ctx.beginPath();
  ctx.moveTo(x + width * 0.5, y - height * 0.2);
  ctx.lineTo(x + width * 0.5, y + height * 1.2);
  ctx.stroke();
  ctx.setLineDash([]);
}

static drawViralVector(ctx, x, y, width, height) {
  // Viral capsid (hexagonal)
  ctx.strokeStyle = '#E74C3C';
  ctx.lineWidth = 2;
  ctx.beginPath();
  for(let i = 0; i < 6; i++) {
    const angle = (i / 6) * Math.PI * 2 - Math.PI / 2;
    const px = x + width * 0.5 + Math.cos(angle) * width * 0.5;
    const py = y + height * 0.5 + Math.sin(angle) * height * 0.5;
    if(i === 0) ctx.moveTo(px, py);
    else ctx.lineTo(px, py);
  }
  ctx.closePath();
  ctx.stroke();
  
  // Fill
  ctx.fillStyle = 'rgba(231, 76, 60, 0.1)';
  ctx.fill();
  
  // DNA inside
  ctx.strokeStyle = '#3498DB';
  ctx.lineWidth = 1.5;
  ctx.beginPath();
  for(let i = 0; i < 3; i++) {
    const sy = y + height * (0.3 + i * 0.15);
    ctx.moveTo(x + width * 0.2, sy);
    ctx.quadraticCurveTo(x + width * 0.5, sy + height * 0.05, x + width * 0.8, sy);
  }
  ctx.stroke();
}

static drawBacterialCell(ctx, centerX, centerY, width, height) {
  // Oval bacterial cell
  ctx.fillStyle = '#D5E8D4';
  ctx.beginPath();
  ctx.ellipse(centerX, centerY, width / 2, height / 2, 0, 0, Math.PI * 2);
  ctx.fill();
  
  // Cell membrane
  ctx.strokeStyle = '#82B366';
  ctx.lineWidth = 2;
  ctx.stroke();
  
  // Nucleoid region
  ctx.fillStyle = 'rgba(52, 152, 219, 0.2)';
  ctx.beginPath();
  ctx.ellipse(centerX, centerY, width / 3, height / 3, 0, 0, Math.PI * 2);
  ctx.fill();
}

static drawPlantCell(ctx, centerX, centerY, width, height) {
  // Cell wall (rectangular)
  ctx.strokeStyle = '#82B366';
  ctx.lineWidth = 2.5;
  ctx.strokeRect(centerX - width / 2, centerY - height / 2, width, height);
  
  // Cell membrane
  ctx.strokeStyle = '#A9DFBF';
  ctx.lineWidth = 1.5;
  ctx.strokeRect(centerX - width * 0.45, centerY - height * 0.45, width * 0.9, height * 0.9);
  
  // Chloroplasts
  ctx.fillStyle = '#27AE60';
  for(let i = 0; i < 3; i++) {
    const angle = (i / 3) * Math.PI * 2;
    const px = centerX + Math.cos(angle) * width * 0.25;
    const py = centerY + Math.sin(angle) * height * 0.25;
    ctx.beginPath();
    ctx.ellipse(px, py, width * 0.08, height * 0.06, angle, 0, Math.PI * 2);
    ctx.fill();
  }
  
  // Nucleus
  ctx.fillStyle = '#5DADE2';
  ctx.beginPath();
  ctx.arc(centerX, centerY, width * 0.15, 0, Math.PI * 2);
  ctx.fill();
}

static drawCell(ctx, centerX, centerY, width, height) {
  // Generic eukaryotic cell
  ctx.fillStyle = '#FAE5D3';
  ctx.beginPath();
  ctx.ellipse(centerX, centerY, width / 2, height / 2, 0, 0, Math.PI * 2);
  ctx.fill();
  
  // Cell membrane
  ctx.strokeStyle = '#E59866';
  ctx.lineWidth = 2;
  ctx.stroke();
  
  // Nucleus
  ctx.fillStyle = '#5DADE2';
  ctx.beginPath();
  ctx.arc(centerX, centerY, width * 0.3, 0, Math.PI * 2);
  ctx.fill();
  ctx.strokeStyle = '#2E86C1';
  ctx.lineWidth = 1.5;
  ctx.stroke();
}

static drawDNAStrand(ctx, x, y, width, height) {
  // Double helix representation
  ctx.strokeStyle = '#3498DB';
  ctx.lineWidth = 2;
  
  // Top strand
  ctx.beginPath();
  ctx.moveTo(x, y);
  ctx.lineTo(x + width, y);
  ctx.stroke();
  
  // Bottom strand
  ctx.beginPath();
  ctx.moveTo(x, y + height);
  ctx.lineTo(x + width, y + height);
  ctx.stroke();
  
  // Base pairs
  ctx.strokeStyle = '#95A5A6';
  ctx.lineWidth = 1;
  const pairs = Math.floor(width / 10);
  for(let i = 0; i <= pairs; i++) {
    const xPos = x + (i / pairs) * width;
    ctx.beginPath();
    ctx.moveTo(xPos, y);
    ctx.lineTo(xPos, y + height);
    ctx.stroke();
  }
}

static drawProtein(ctx, centerX, centerY, width, height) {
  // Protein as irregular blob
  const gradient = ctx.createRadialGradient(centerX, centerY, 0, centerX, centerY, width * 0.6);
  gradient.addColorStop(0, '#27AE60');
  gradient.addColorStop(0.7, '#229954');
  gradient.addColorStop(1, '#1E8449');
  
  ctx.fillStyle = gradient;
  ctx.beginPath();
  ctx.moveTo(centerX - width * 0.3, centerY - height * 0.2);
  ctx.bezierCurveTo(
    centerX - width * 0.4, centerY - height * 0.4,
    centerX - width * 0.2, centerY - height * 0.5,
    centerX + width * 0.1, centerY - height * 0.4
  );
  ctx.bezierCurveTo(
    centerX + width * 0.4, centerY - height * 0.3,
    centerX + width * 0.5, centerY - height * 0.1,
    centerX + width * 0.4, centerY + height * 0.2
  );
  ctx.bezierCurveTo(
    centerX + width * 0.3, centerY + height * 0.5,
    centerX, centerY + height * 0.5,
    centerX - width * 0.2, centerY + height * 0.3
  );
  ctx.bezierCurveTo(
    centerX - width * 0.4, centerY + height * 0.1,
    centerX - width * 0.4, centerY - height * 0.1,
    centerX - width * 0.3, centerY - height * 0.2
  );
  ctx.closePath();
  ctx.fill();
  
  // Outline
  ctx.strokeStyle = '#1E8449';
  ctx.lineWidth = 1.5;
  ctx.stroke();
  
  // Alpha helix representation
  ctx.strokeStyle = 'rgba(255, 255, 255, 0.3)';
  ctx.lineWidth = 1;
  ctx.beginPath();
  for(let i = 0; i < 3; i++) {
    const sx = centerX - width * 0.15 + i * width * 0.15;
    const sy = centerY - height * 0.2;
    ctx.moveTo(sx, sy);
    ctx.lineTo(sx, sy + height * 0.4);
  }
  ctx.stroke();
}

// ===== CLONING PROCESS DIAGRAMS =====

static drawCloning(ctx, x, y, width, height, cloningType, stage) {
  ctx.save();
  ctx.translate(x, y);
  
  switch(stage) {
    case 'complete':
      this.drawCloningComplete(ctx, width, height, cloningType);
      break;
    case 'donor-cell':
      this.drawDonorCell(ctx, width, height, cloningType);
      break;
    case 'enucleation':
      this.drawEnucleation(ctx, width, height, cloningType);
      break;
    case 'fusion':
      this.drawCellFusion(ctx, width, height, cloningType);
      break;
    case 'development':
      this.drawEmbryoDevelopment(ctx, width, height, cloningType);
      break;
    case 'birth':
      this.drawClonedOrganism(ctx, width, height, cloningType);
      break;
  }
  
  ctx.restore();
}

static drawCloningComplete(ctx, width, height, cloningType) {
  const w = width, h = height;
  
  ctx.fillStyle = '#000000';
  ctx.font = `${h * 0.04}px Arial bold`;
  const typeTitle = cloningType === 'organismal' ? 'Somatic Cell Nuclear Transfer (SCNT)' : 
                    cloningType === 'gene' ? 'Gene Cloning' :
                    cloningType === 'therapeutic' ? 'Therapeutic Cloning' : 'Reproductive Cloning';
  ctx.fillText(typeTitle, w * 0.25, h * 0.05);
  
  if(cloningType === 'organismal' || cloningType === 'reproductive') {
    // Step 1: Donor cell
    this.drawProcessStep(ctx, w * 0.05, h * 0.12, w * 0.25, h * 0.12, '1. Donor Cell', '#3498DB');
    this.drawCell(ctx, w * 0.175, h * 0.20, w * 0.06, h * 0.05);
    
    // Step 2: Egg cell
    this.drawProcessStep(ctx, w * 0.35, h * 0.12, w * 0.25, h * 0.12, '2. Egg Cell', '#E74C3C');
    this.drawEggCell(ctx, w * 0.475, h * 0.20, w * 0.07, h * 0.06);
    
    // Step 3: Enucleation
    this.drawProcessStep(ctx, w * 0.65, h * 0.12, w * 0.30, h * 0.12, '3. Remove Nucleus', '#F39C12');
    this.drawEnucleatedEgg(ctx, w * 0.80, h * 0.20, w * 0.07, h * 0.06);
    
    // Arrow down
    this.drawDownArrow(ctx, w * 0.5, h * 0.28, h * 0.05);
    
    // Step 4: Nuclear transfer
    this.drawProcessStep(ctx, w * 0.20, h * 0.36, w * 0.60, h * 0.12, '4. Nuclear Transfer', '#9B59B6');
    this.drawNuclearTransfer(ctx, w * 0.50, h * 0.44, w * 0.15);
    
    // Arrow down
    this.drawDownArrow(ctx, w * 0.5, h * 0.52, h * 0.05);
    
    // Step 5: Development
    this.drawProcessStep(ctx, w * 0.20, h * 0.60, w * 0.60, h * 0.12, '5. Embryo Development', '#27AE60');
    this.drawEmbryoStages(ctx, w * 0.25, h * 0.67, w * 0.50, h * 0.04);
    
    // Arrow down
    this.drawDownArrow(ctx, w * 0.5, h * 0.76, h * 0.05);
    
    // Step 6: Clone
    this.drawProcessStep(ctx, w * 0.30, h * 0.84, w * 0.40, h * 0.12, '6. Cloned Organism', '#E74C3C');
  }
}

static drawDonorCell(ctx, width, height, cloningType) {
  const w = width, h = height;
  
  ctx.fillStyle = '#000000';
  ctx.font = `${h * 0.03}px Arial bold`;
  ctx.fillText('Donor Cell Selection', w * 0.35, h * 0.08);
  
  // Donor organism
  ctx.fillStyle = '#ECF0F1';
  ctx.fillRect(w * 0.1, h * 0.15, w * 0.35, h * 0.30);
  ctx.strokeStyle = '#3498DB';
  ctx.lineWidth = 3;
  ctx.strokeRect(w * 0.1, h * 0.15, w * 0.35, h * 0.30);
  
  ctx.fillStyle = '#3498DB';
  ctx.font = `${h * 0.025}px Arial bold`;
  ctx.fillText('Donor Organism', w * 0.18, h * 0.19);
  
  // Somatic cell extraction
  this.drawCell(ctx, w * 0.275, h * 0.30, w * 0.08, h * 0.08);
  
  ctx.fillStyle = '#000000';
  ctx.font = `${h * 0.02}px Arial`;
  ctx.fillText('Somatic cell', w * 0.235, h * 0.42);
  ctx.fillText('(body cell)', w * 0.24, h * 0.45);
  
  // Arrow
  ctx.strokeStyle = '#3498DB';
  ctx.lineWidth = 3;
  ctx.beginPath();
  ctx.moveTo(w * 0.45, h * 0.30);
  ctx.lineTo(w * 0.55, h * 0.30);
  ctx.stroke();
  this.drawArrowhead(ctx, w * 0.55, h * 0.30, 0, h * 0.03, '#3498DB');
  
  // Isolated donor cell
  ctx.fillStyle = '#E8F8F5';
  ctx.fillRect(w * 0.58, h * 0.15, w * 0.32, h * 0.30);
  ctx.strokeStyle = '#27AE60';
  ctx.lineWidth = 3;
  ctx.strokeRect(w * 0.58, h * 0.15, w * 0.32, h * 0.30);
  
  ctx.fillStyle = '#27AE60';
  ctx.font = `${h * 0.025}px Arial bold`;
  ctx.fillText('Donor Cell', w * 0.67, h * 0.19);
  
  this.drawCell(ctx, w * 0.74, h * 0.30, w * 0.10, h * 0.10);
  
  // Nucleus highlighted
  ctx.fillStyle = '#E74C3C';
  ctx.beginPath();
  ctx.arc(w * 0.74, h * 0.30, w * 0.035, 0, Math.PI * 2);
  ctx.fill();
  
  ctx.fillStyle = '#FFFFFF';
  ctx.font = `${h * 0.018}px Arial bold`;
  ctx.fillText('DNA', w * 0.725, h * 0.305);
  
  // Information box
  ctx.fillStyle = '#FEF5E7';
  ctx.fillRect(w * 0.10, h * 0.52, w * 0.80, h * 0.35);
  ctx.strokeStyle = '#F39C12';
  ctx.lineWidth = 2;
  ctx.strokeRect(w * 0.10, h * 0.52, w * 0.80, h * 0.35);
  
  ctx.fillStyle = '#000000';
  ctx.font = `${h * 0.025}px Arial bold`;
  ctx.fillText('Donor Cell Characteristics:', w * 0.32, h * 0.57);
  
  ctx.font = `${h * 0.022}px Arial`;
  ctx.fillText('• Contains complete genome (diploid)', w * 0.15, h * 0.63);
  ctx.fillText('• Usually from adult tissue', w * 0.15, h * 0.68);
  ctx.fillText('• Differentiated somatic cell', w * 0.15, h * 0.73);
  ctx.fillText('• Nuclear DNA will be cloned', w * 0.15, h * 0.78);
  ctx.fillText('• Determines genetic identity of clone', w * 0.15, h * 0.83);
}

static drawEnucleation(ctx, width, height, cloningType) {
  const w = width, h = height;
  
  ctx.fillStyle = '#000000';
  ctx.font = `${h * 0.03}px Arial bold`;
  ctx.fillText('Enucleation Process', w * 0.35, h * 0.08);
  
  // Egg cell before
  ctx.fillStyle = '#000000';
  ctx.font = `${h * 0.025}px Arial`;
  ctx.fillText('Unfertilized Egg Cell', w * 0.15, h * 0.18);
  
  this.drawEggCell(ctx, w * 0.25, h * 0.30, w * 0.12, h * 0.10);
  
  // Micropipette
  ctx.fillStyle = '#95A5A6';
  ctx.fillRect(w * 0.10, h * 0.26, w * 0.08, h * 0.015);
  
  // Pipette tip
  ctx.beginPath();
  ctx.moveTo(w * 0.18, h * 0.26);
  ctx.lineTo(w * 0.20, h * 0.2675);
  ctx.lineTo(w * 0.18, h * 0.275);
  ctx.closePath();
  ctx.fill();
  
  // Nucleus being removed
  ctx.fillStyle = 'rgba(93, 173, 226, 0.5)';
  ctx.beginPath();
  ctx.arc(w * 0.15, h * 0.2675, w * 0.015, 0, Math.PI * 2);
  ctx.fill();
  
  // Arrow showing process
  ctx.strokeStyle = '#E74C3C';
  ctx.lineWidth = 2;
  ctx.setLineDash([5, 5]);
  ctx.beginPath();
  ctx.moveTo(w * 0.20, h * 0.2675);
  ctx.lineTo(w * 0.23, h * 0.30);
  ctx.stroke();
  ctx.setLineDash([]);
  
  // Arrow to result
  ctx.strokeStyle = '#F39C12';
  ctx.lineWidth = 3;
  ctx.beginPath();
  ctx.moveTo(w * 0.35, h * 0.30);
  ctx.lineTo(w * 0.45, h * 0.30);
  ctx.stroke();
  this.drawArrowhead(ctx, w * 0.45, h * 0.30, 0, h * 0.03, '#F39C12');
  
  // Enucleated egg
  ctx.fillStyle = '#000000';
  ctx.font = `${h * 0.025}px Arial`;
  ctx.fillText('Enucleated Egg', w * 0.62, h * 0.18);
  
  this.drawEnucleatedEgg(ctx, w * 0.65, h * 0.30, w * 0.12, h * 0.10);
  
  // Removed nucleus shown separately
  ctx.fillStyle = '#5DADE2';
  ctx.beginPath();
  ctx.arc(w * 0.85, h * 0.30, w * 0.025, 0, Math.PI * 2);
  ctx.fill();
  ctx.strokeStyle = '#2E86C1';
  ctx.lineWidth = 1.5;
  ctx.stroke();
  
  // X mark on removed nucleus
  ctx.strokeStyle = '#E74C3C';
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.moveTo(w * 0.84, h * 0.29);
  ctx.lineTo(w * 0.86, h * 0.31);
  ctx.stroke();
  ctx.beginPath();
  ctx.moveTo(w * 0.86, h * 0.29);
  ctx.lineTo(w * 0.84, h * 0.31);
  ctx.stroke();
  
  ctx.fillStyle = '#000000';
  ctx.font = `${h * 0.018}px Arial`;
  ctx.fillText('Discarded', w * 0.82, h * 0.35);
  
  // Process details
  ctx.fillStyle = '#ECF0F1';
  ctx.fillRect(w * 0.10, h * 0.48, w * 0.80, h * 0.40);
  ctx.strokeStyle = '#F39C12';
  ctx.lineWidth = 2;
  ctx.strokeRect(w * 0.10, h * 0.48, w * 0.80, h * 0.40);
  
  ctx.fillStyle = '#F39C12';
  ctx.font = `${h * 0.025}px Arial bold`;
  ctx.fillText('Enucleation Details:', w * 0.36, h * 0.53);
  
  ctx.fillStyle = '#000000';
  ctx.font = `${h * 0.022}px Arial`;
  ctx.fillText('1. Egg cell is held in place with holding pipette', w * 0.15, h * 0.60);
  ctx.fillText('2. Micropipette penetrates cell membrane', w * 0.15, h * 0.65);
  ctx.fillText('3. Nucleus is aspirated (sucked out)', w * 0.15, h * 0.70);
  ctx.fillText('4. Egg retains cytoplasm & mitochondria', w * 0.15, h * 0.75);
  ctx.fillText('5. Result: Empty egg ready for donor nucleus', w * 0.15, h * 0.80);
  
  ctx.font = `${h * 0.02}px Arial italic`;
  ctx.fillStyle = '#7F8C8D';
  ctx.fillText('Note: Mitochondrial DNA remains in egg cytoplasm', w * 0.22, h * 0.85);
}

static drawCellFusion(ctx, width, height, cloningType) {
  const w = width, h = height;
  
  ctx.fillStyle = '#000000';
  ctx.font = `${h * 0.03}px Arial bold`;
  ctx.fillText('Nuclear Transfer & Fusion', w * 0.32, h * 0.08);
  
  // Donor nucleus
  ctx.fillStyle = '#000000';
  ctx.font = `${h * 0.022}px Arial`;
  ctx.fillText('Donor Nucleus', w * 0.10, h * 0.18);
  
  ctx.fillStyle = '#E74C3C';
  ctx.beginPath();
  ctx.arc(w * 0.18, h * 0.25, w * 0.03, 0, Math.PI * 2);
  ctx.fill();
  ctx.strokeStyle = '#C0392B';
  ctx.lineWidth = 2;
  ctx.stroke();
  
  // Plus sign
  ctx.fillStyle = '#000000';
  ctx.font = `${h * 0.04}px Arial bold`;
  ctx.fillText('+', w * 0.24, h * 0.27);
  
  // Enucleated egg
  ctx.font = `${h * 0.022}px Arial`;
  ctx.fillText('Enucleated Egg', w * 0.32, h * 0.18);
  
  this.drawEnucleatedEgg(ctx, w * 0.40, h * 0.25, w * 0.10, h * 0.08);
  
  // Arrow showing insertion
  ctx.strokeStyle = '#9B59B6';
  ctx.lineWidth = 3;
  ctx.beginPath();
  ctx.moveTo(w * 0.21, h * 0.25);
  ctx.lineTo(w * 0.35, h * 0.25);
  ctx.stroke();
  this.drawArrowhead(ctx, w * 0.35, h * 0.25, 0, h * 0.02, '#9B59B6');
  
  // Method 1: Microinjection
  ctx.fillStyle = '#E8F8F5';
  ctx.fillRect(w * 0.05, h * 0.38, w * 0.42, h * 0.24);
  ctx.strokeStyle = '#27AE60';
  ctx.lineWidth = 2;
  ctx.strokeRect(w * 0.05, h * 0.38, w * 0.42, h * 0.24);
  
  ctx.fillStyle = '#27AE60';
  ctx.font = `${h * 0.022}px Arial bold`;
  ctx.fillText('Method 1: Microinjection', w * 0.12, h * 0.42);
  
  // Microinjection illustration
  this.drawEnucleatedEgg(ctx, w * 0.26, h * 0.52, w * 0.08, h * 0.06);
  
  // Micropipette injecting
  ctx.fillStyle = '#95A5A6';
  ctx.fillRect(w * 0.12, h * 0.495, w * 0.10, h * 0.012);
  ctx.beginPath();
  ctx.moveTo(w * 0.22, h * 0.495);
  ctx.lineTo(w * 0.235, h * 0.501);
  ctx.lineTo(w * 0.22, h * 0.507);
  ctx.closePath();
  ctx.fill();
  
  // Nucleus being injected
  ctx.fillStyle = '#E74C3C';
  ctx.beginPath();
  ctx.arc(w * 0.24, h * 0.501, w * 0.008, 0, Math.PI * 2);
  ctx.fill();
  
  // Method 2: Electrofusion
  ctx.fillStyle = '#FEF5E7';
  ctx.fillRect(w * 0.53, h * 0.38, w * 0.42, h * 0.24);
  ctx.strokeStyle = '#F39C12';
  ctx.lineWidth = 2;
  ctx.strokeRect(w * 0.53, h * 0.38, w * 0.42, h * 0.24);
  
  ctx.fillStyle = '#F39C12';
  ctx.font = `${h * 0.022}px Arial bold`;
  ctx.fillText('Method 2: Electrofusion', w * 0.60, h * 0.42);
  
  // Electrofusion illustration
  // Egg
  this.drawEnucleatedEgg(ctx, w * 0.74, h * 0.52, w * 0.08, h * 0.06);
  
  // Nucleus adjacent
  ctx.fillStyle = '#E74C3C';
  ctx.beginPath();
  ctx.arc(w * 0.68, h * 0.52, w * 0.015, 0, Math.PI * 2);
  ctx.fill();
  
  // Electric pulse
  ctx.strokeStyle = '#F39C12';
  ctx.lineWidth = 2;
  for(let i = 0; i < 3; i++) {
    const y = h * (0.47 + i * 0.03);
    ctx.beginPath();
    ctx.moveTo(w * 0.65, y);
    ctx.lineTo(w * 0.67, y - h * 0.01);
    ctx.lineTo(w * 0.69, y);
    ctx.lineTo(w * 0.71, y - h * 0.01);
    ctx.lineTo(w * 0.73, y);
    ctx.stroke();
  }
  
  // Result: Reconstructed embryo
  ctx.fillStyle = '#000000';
  ctx.font = `${h * 0.025}px Arial bold`;
  ctx.fillText('Result: Reconstructed Embryo', w * 0.30, h * 0.70);
  
  ctx.fillStyle = '#E8F8F5';
  ctx.fillRect(w * 0.25, h * 0.75, w * 0.50, h * 0.20);
  ctx.strokeStyle = '#9B59B6';
  ctx.lineWidth = 3;
  ctx.strokeRect(w * 0.25, h * 0.75, w * 0.50, h * 0.20);
  
  // Reconstructed cell
  ctx.fillStyle = '#FAD7A0';
  ctx.beginPath();
  ctx.ellipse(w * 0.42, h * 0.85, w * 0.06, w * 0.05, 0, 0, Math.PI * 2);
  ctx.fill();
  ctx.strokeStyle = '#E59866';
  ctx.lineWidth = 2;
  ctx.stroke();
  
  // Donor nucleus inside
  ctx.fillStyle = '#E74C3C';
  ctx.beginPath();
  ctx.arc(w * 0.42, h * 0.85, w * 0.02, 0, Math.PI * 2);
  ctx.fill();
  
  ctx.fillStyle = '#000000';
  ctx.font = `${h * 0.02}px Arial`;
  ctx.fillText('• Donor DNA in egg cytoplasm', w * 0.50, h * 0.82);
  ctx.fillText('• Ready for activation', w * 0.50, h * 0.86);
  ctx.fillText('• Will develop as clone', w * 0.50, h * 0.90);
}

static drawEmbryoDevelopment(ctx, width, height, cloningType) {
  const w = width, h = height;
  
  ctx.fillStyle = '#000000';
  ctx.font = `${h * 0.03}px Arial bold`;
  ctx.fillText('Embryo Development', w * 0.35, h * 0.08);
  
  // Activation
  ctx.fillStyle = '#FEF5E7';
  ctx.fillRect(w * 0.05, h * 0.14, w * 0.20, h * 0.16);
  ctx.strokeStyle = '#F39C12';
  ctx.lineWidth = 2;
  ctx.strokeRect(w * 0.05, h * 0.14, w * 0.20, h * 0.16);
  
  ctx.fillStyle = '#F39C12';
  ctx.font = `${h * 0.02}px Arial bold`;
  ctx.fillText('Activation', w * 0.10, h * 0.17);
  
  // Single cell
  ctx.fillStyle = '#FAD7A0';
  ctx.beginPath();
  ctx.arc(w * 0.15, h * 0.24, w * 0.025, 0, Math.PI * 2);
  ctx.fill();
  
  ctx.fillStyle = '#000000';
  ctx.font = `${h * 0.015}px Arial`;
  ctx.fillText('Electric/chemical', w * 0.07, h * 0.29);
  
  // Arrow
  this.drawArrowhead(ctx, w * 0.27, h * 0.22, 0, h * 0.02, '#3498DB');
  ctx.strokeStyle = '#3498DB';
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.moveTo(w * 0.25, h * 0.22);
  ctx.lineTo(w * 0.27, h * 0.22);
  ctx.stroke();
  
  // 2-cell stage
  ctx.fillStyle = '#E8F8F5';
  ctx.fillRect(w * 0.29, h * 0.14, w * 0.14, h * 0.16);
  ctx.strokeStyle = '#27AE60';
  ctx.lineWidth = 2;
  ctx.strokeRect(w * 0.29, h * 0.14, w * 0.14, h * 0.16);
  
  ctx.fillStyle = '#27AE60';
  ctx.font = `${h * 0.02}px Arial bold`;
  ctx.fillText('2-Cell', w * 0.32, h * 0.17);
  
  for(let i = 0; i < 2; i++) {
    ctx.fillStyle = '#A9DFBF';
    ctx.beginPath();
    ctx.arc(w * (0.34 + i * 0.04), h * 0.24, w * 0.018, 0, Math.PI * 2);
    ctx.fill();
    ctx.strokeStyle = '#52BE80';
    ctx.lineWidth = 1;
    ctx.stroke();
  }
  
  ctx.fillStyle = '#000000';
  ctx.font = `${h * 0.015}px Arial`;
  ctx.fillText('1 day', w * 0.33, h * 0.29);
  
  // Arrow
  this.drawArrowhead(ctx, w * 0.45, h * 0.22, 0, h * 0.02, '#3498DB');
  ctx.strokeStyle = '#3498DB';
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.moveTo(w * 0.43, h * 0.22);
  ctx.lineTo(w * 0.45, h * 0.22);
  ctx.stroke();
  
  // 4-8 cell stage
  ctx.fillStyle = '#E8F8F5';
  ctx.fillRect(w * 0.47, h * 0.14, w * 0.14, h * 0.16);
  ctx.strokeStyle = '#27AE60';
  ctx.lineWidth = 2;
  ctx.strokeRect(w * 0.47, h * 0.14, w * 0.14, h * 0.16);
  
  ctx.fillStyle = '#27AE60';
  ctx.font = `${h * 0.02}px Arial bold`;
  ctx.fillText('8-Cell', w * 0.50, h * 0.17);
  
  // 8 cells in cluster
  const positions = [
    [0, 0], [0.025, 0], [0.0125, 0.022],
    [-0.0125, 0.022], [-0.025, 0], [-0.0125, -0.022],
    [0.0125, -0.022], [0, -0.025]
  ];
  positions.forEach(([dx, dy]) => {
    ctx.fillStyle = '#A9DFBF';
    ctx.beginPath();
    ctx.arc(w * (0.54 + dx), h * (0.24 + dy), w * 0.012, 0, Math.PI * 2);
    ctx.fill();
  });
  
  ctx.fillStyle = '#000000';
  ctx.font = `${h * 0.015}px Arial`;
  ctx.fillText('2-3 days', w * 0.50, h * 0.29);
  
  // Arrow
  this.drawArrowhead(ctx, w * 0.63, h * 0.22, 0, h * 0.02, '#3498DB');
  ctx.strokeStyle = '#3498DB';
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.moveTo(w * 0.61, h * 0.22);
  ctx.lineTo(w * 0.63, h * 0.22);
  ctx.stroke();
  
  // Morula
  ctx.fillStyle = '#E8F8F5';
  ctx.fillRect(w * 0.65, h * 0.14, w * 0.14, h * 0.16);
  ctx.strokeStyle = '#27AE60';
  ctx.lineWidth = 2;
  ctx.strokeRect(w * 0.65, h * 0.14, w * 0.14, h * 0.16);
  
  ctx.fillStyle = '#27AE60';
  ctx.font = `${h * 0.02}px Arial bold`;
  ctx.fillText('Morula', w * 0.68, h * 0.17);
  
  // Many cells (16+)
  for(let i = 0; i < 16; i++) {
    const angle = (i / 16) * Math.PI * 2;
    const radius = w * 0.022;
    const cx = w * 0.72 + Math.cos(angle) * radius;
    const cy = h * 0.24 + Math.sin(angle) * radius * 0.7;
    
    ctx.fillStyle = '#A9DFBF';
    ctx.beginPath();
    ctx.arc(cx, cy, w * 0.008, 0, Math.PI * 2);
    ctx.fill();
  }
  
  ctx.fillStyle = '#000000';
  ctx.font = `${h * 0.015}px Arial`;
  ctx.fillText('4 days', w * 0.69, h * 0.29);
  
  // Arrow
  this.drawArrowhead(ctx, w * 0.81, h * 0.22, 0, h * 0.02, '#3498DB');
  ctx.strokeStyle = '#3498DB';
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.moveTo(w * 0.79, h * 0.22);
  ctx.lineTo(w * 0.81, h * 0.22);
  ctx.stroke();
  
  // Blastocyst
  ctx.fillStyle = '#E8F8F5';
  ctx.fillRect(w * 0.83, h * 0.14, w * 0.14, h * 0.16);
  ctx.strokeStyle = '#27AE60';
  ctx.lineWidth = 2;
  ctx.strokeRect(w * 0.83, h * 0.14, w * 0.14, h * 0.16);
  
  ctx.fillStyle = '#27AE60';
  ctx.font = `${h * 0.02}px Arial bold`;
  ctx.fillText('Blastocyst', w * 0.85, h * 0.17);
  
  // Blastocyst structure
  ctx.fillStyle = 'rgba(169, 223, 191, 0.3)';
  ctx.beginPath();
  ctx.arc(w * 0.90, h * 0.24, w * 0.025, 0, Math.PI * 2);
  ctx.fill();
  ctx.strokeStyle = '#52BE80';
  ctx.lineWidth = 2;
  ctx.stroke();
  
  // Inner cell mass
  ctx.fillStyle = '#52BE80';
  ctx.beginPath();
  ctx.arc(w * 0.895, h * 0.235, w * 0.012, 0, Math.PI * 2);
  ctx.fill();
  
  ctx.fillStyle = '#000000';
  ctx.font = `${h * 0.015}px Arial`;
  ctx.fillText('5-6 days', w * 0.87, h * 0.29);
  
  // Implantation or further culture
  this.drawDownArrow(ctx, w * 0.50, h * 0.34, h * 0.06);
  
  if(cloningType === 'therapeutic') {
    // Stem cell extraction
    ctx.fillStyle = '#E8F8F5';
    ctx.fillRect(w * 0.20, h * 0.44, w * 0.60, h * 0.30);
    ctx.strokeStyle = '#9B59B6';
    ctx.lineWidth = 3;
    ctx.strokeRect(w * 0.20, h * 0.44, w * 0.60, h * 0.30);
    
    ctx.fillStyle = '#9B59B6';
    ctx.font = `${h * 0.025}px Arial bold`;
    ctx.fillText('Stem Cell Extraction', w * 0.36, h * 0.48);
    
    // Blastocyst
    this.drawBlastocyst(ctx, w * 0.32, h * 0.59, w * 0.08);
    
    // Arrow
    this.drawArrowhead(ctx, w * 0.44, h * 0.59, 0, h * 0.03, '#9B59B6');
    ctx.strokeStyle = '#9B59B6';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(w * 0.40, h * 0.59);
    ctx.lineTo(w * 0.44, h * 0.59);
    ctx.stroke();
    
    // Stem cells
    ctx.fillStyle = '#000000';
    ctx.font = `${h * 0.02}px Arial`;
    ctx.fillText('Embryonic Stem Cells', w * 0.52, h * 0.56);
    
    for(let i = 0; i < 8; i++) {
      const cx = w * (0.50 + (i % 4) * 0.04);
      const cy = h * (0.60 + Math.floor(i / 4) * 0.04);
      
      ctx.fillStyle = '#9B59B6';
      ctx.beginPath();
      ctx.arc(cx, cy, w * 0.015, 0, Math.PI * 2);
      ctx.fill();
      ctx.strokeStyle = '#7D3C98';
      ctx.lineWidth = 1.5;
      ctx.stroke();
    }
    
    ctx.fillStyle = '#000000';
    ctx.font = `${h * 0.018}px Arial`;
    ctx.fillText('(Pluripotent - can become any cell type)', w * 0.48, h * 0.69);
    
  } else {
    // Implantation into surrogate
    ctx.fillStyle = '#FADBD8';
    ctx.fillRect(w * 0.20, h * 0.44, w * 0.60, h * 0.30);
    ctx.strokeStyle = '#E74C3C';
    ctx.lineWidth = 3;
    ctx.strokeRect(w * 0.20, h * 0.44, w * 0.60, h * 0.30);
    
    ctx.fillStyle = '#E74C3C';
    ctx.font = `${h * 0.025}px Arial bold`;
    ctx.fillText('Implantation into Surrogate', w * 0.32, h * 0.48);
    
    // Uterus representation
    ctx.strokeStyle = '#E59866';
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.moveTo(w * 0.35, h * 0.54);
    ctx.quadraticCurveTo(w * 0.30, h * 0.62, w * 0.35, h * 0.70);
    ctx.lineTo(w * 0.65, h * 0.70);
    ctx.quadraticCurveTo(w * 0.70, h * 0.62, w * 0.65, h * 0.54);
    ctx.closePath();
    ctx.stroke();
    
    ctx.fillStyle = 'rgba(229, 152, 102, 0.1)';
    ctx.fill();
    
    // Blastocyst implanted
    this.drawBlastocyst(ctx, w * 0.50, h * 0.62, w * 0.04);
    
    ctx.fillStyle = '#000000';
    ctx.font = `${h * 0.02}px Arial`;
    ctx.fillText('Embryo implants in uterine wall', w * 0.32, h * 0.73);
  }
  
  // Timeline
  ctx.fillStyle = '#000000';
  ctx.font = `${h * 0.022}px Arial bold`;
  ctx.fillText('Development Timeline:', w * 0.05, h * 0.82);
  
  ctx.font = `${h * 0.02}px Arial`;
  ctx.fillText('Day 0: Activation → Day 1: 2-cell → Day 3: 8-cell → Day 4: Morula → Day 5-6: Blastocyst', w * 0.05, h * 0.86);
  
  if(cloningType === 'reproductive' || cloningType === 'organismal') {
    ctx.fillText('Day 6-7: Implantation → 9 months: Full development', w * 0.05, h * 0.90);
  } else {
    ctx.fillText('Day 5-6: Stem cell harvest (embryo destroyed)', w * 0.05, h * 0.90);
  }
}

static drawClonedOrganism(ctx, width, height, cloningType) {
  const w = width, h = height;
  
  if(cloningType === 'therapeutic') {
    // Therapeutic applications
    ctx.fillStyle = '#000000';
    ctx.font = `${h * 0.03}px Arial bold`;
    ctx.fillText('Therapeutic Applications', w * 0.32, h * 0.08);
    
    // Stem cells
    ctx.fillStyle = '#E8F8F5';
    ctx.fillRect(w * 0.05, h * 0.14, w * 0.25, h * 0.20);
    ctx.strokeStyle = '#9B59B6';
    ctx.lineWidth = 2;
    ctx.strokeRect(w * 0.05, h * 0.14, w * 0.25, h * 0.20);
    
    ctx.fillStyle = '#9B59B6';
    ctx.font = `${h * 0.022}px Arial bold`;
    ctx.fillText('Embryonic', w * 0.10, h * 0.17);
    ctx.fillText('Stem Cells', w * 0.11, h * 0.20);
    
    for(let i = 0; i < 6; i++) {
      const cx = w * (0.10 + (i % 3) * 0.06);
      const cy = h * (0.24 + Math.floor(i / 3) * 0.05);
      
      ctx.fillStyle = '#9B59B6';
      ctx.beginPath();
      ctx.arc(cx, cy, w * 0.015, 0, Math.PI * 2);
      ctx.fill();
    }
    
    // Differentiation arrows
    for(let i = 0; i < 3; i++) {
      const startY = h * (0.40 + i * 0.18);
      this.drawArrowhead(ctx, w * 0.35, startY, 0, h * 0.02, '#27AE60');
      ctx.strokeStyle = '#27AE60';
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(w * 0.30, startY);
      ctx.lineTo(w * 0.35, startY);
      ctx.stroke();
    }
    
    // Differentiated cell types
    const cellTypes = [
      {name: 'Nerve Cells', y: 0.40, color: '#F39C12'},
      {name: 'Heart Cells', y: 0.58, color: '#E74C3C'},
      {name: 'Pancreas Cells', y: 0.76, color: '#3498DB'}
    ];
    
    cellTypes.forEach(cell => {
      ctx.fillStyle = '#ECF0F1';
      ctx.fillRect(w * 0.37, h * (cell.y - 0.06), w * 0.25, h * 0.12);
      ctx.strokeStyle = cell.color;
      ctx.lineWidth = 2;
      ctx.strokeRect(w * 0.37, h * (cell.y - 0.06), w * 0.25, h * 0.12);
      
      ctx.fillStyle = cell.color;
      ctx.font = `${h * 0.022}px Arial bold`;
      ctx.fillText(cell.name, w * 0.42, h * (cell.y - 0.03));
      
      // Cell illustrations
      for(let i = 0; i < 3; i++) {
        ctx.fillStyle = cell.color;
        ctx.globalAlpha = 0.6;
        ctx.beginPath();
        ctx.arc(w * (0.42 + i * 0.05), h * (cell.y + 0.02), w * 0.015, 0, Math.PI * 2);
        ctx.fill();
        ctx.globalAlpha = 1.0;
      }
    });
    
    // Treatment applications
    ctx.fillStyle = '#E8F8F5';
    ctx.fillRect(w * 0.68, h * 0.14, w * 0.28, h * 0.75);
    ctx.strokeStyle = '#27AE60';
    ctx.lineWidth = 3;
    ctx.strokeRect(w * 0.68, h * 0.14, w * 0.28, h * 0.75);
    
    ctx.fillStyle = '#27AE60';
    ctx.font = `${h * 0.025}px Arial bold`;
    ctx.fillText('Medical Uses', w * 0.74, h * 0.18);
    
    ctx.fillStyle = '#000000';
    ctx.font = `${h * 0.02}px Arial`;
    const treatments = [
      'Parkinson\'s disease',
      'Spinal cord injury',
      'Heart disease',
      'Diabetes',
      'Organ regeneration',
      'Drug testing',
      'Disease modeling',
      'Personalized medicine'
    ];
    
    treatments.forEach((treatment, i) => {
      ctx.fillText(`• ${treatment}`, w * 0.70, h * (0.24 + i * 0.06));
    });
    
  } else {
    // Reproductive cloning result
    ctx.fillStyle = '#000000';
    ctx.font = `${h * 0.03}px Arial bold`;
    ctx.fillText('Cloned Organism', w * 0.38, h * 0.08);
    
    // Pregnancy timeline
    ctx.fillStyle = '#FADBD8';
    ctx.fillRect(w * 0.10, h * 0.14, w * 0.80, h * 0.20);
    ctx.strokeStyle = '#E74C3C';
    ctx.lineWidth = 2;
    ctx.strokeRect(w * 0.10, h * 0.14, w * 0.80, h * 0.20);
    
    ctx.fillStyle = '#E74C3C';
    ctx.font = `${h * 0.022}px Arial bold`;
    ctx.fillText('Gestation Period: ~9 months (varies by species)', w * 0.28, h * 0.18);
    
    // Timeline bar
    ctx.fillStyle = '#E59866';
    ctx.fillRect(w * 0.15, h * 0.22, w * 0.70, h * 0.06);
    
    // Milestones
    const milestones = [
      {pos: 0.0, text: 'Implant'},
      {pos: 0.33, text: '3 months'},
      {pos: 0.67, text: '6 months'},
      {pos: 1.0, text: 'Birth'}
    ];
    
    milestones.forEach(m => {
      const x = w * (0.15 + m.pos * 0.70);
      ctx.strokeStyle = '#2C3E50';
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(x, h * 0.22);
      ctx.lineTo(x, h * 0.30);
      ctx.stroke();
      
      ctx.fillStyle = '#000000';
      ctx.font = `${h * 0.018}px Arial`;
      ctx.fillText(m.text, x - w * 0.02, h * 0.32);
    });
    
    // Comparison: Original vs Clone
    ctx.fillStyle = '#E8F8F5';
    ctx.fillRect(w * 0.10, h * 0.40, w * 0.35, h * 0.45);
    ctx.strokeStyle = '#3498DB';
    ctx.lineWidth = 3;
    ctx.strokeRect(w * 0.10, h * 0.40, w * 0.35, h * 0.45);
    
    ctx.fillStyle = '#3498DB';
    ctx.font = `${h * 0.025}px Arial bold`;
    ctx.fillText('Donor Animal', w * 0.18, h * 0.44);
    
    // Simple animal silhouette (sheep/cow)
    ctx.fillStyle = '#95A5A6';
    ctx.beginPath();
    ctx.ellipse(w * 0.275, h * 0.60, w * 0.08, h * 0.12, 0, 0, Math.PI * 2);
    ctx.fill();
    
    // Head
    ctx.beginPath();
    ctx.ellipse(w * 0.31, h * 0.54, w * 0.04, h * 0.05, 0.3, 0, Math.PI * 2);
    ctx.fill();
    
    ctx.fillStyle = '#000000';
    ctx.font = `${h * 0.02}px Arial`;
    ctx.fillText('DNA Source', w * 0.22, h * 0.78);
    
    // Double helix icon
    this.drawDNAIcon(ctx, w * 0.275, h * 0.80, w * 0.03, h * 0.04);
    
    // Clone
    ctx.fillStyle = '#E8F8F5';
    ctx.fillRect(w * 0.55, h * 0.40, w * 0.35, h * 0.45);
    ctx.strokeStyle = '#27AE60';
    ctx.lineWidth = 3;
    ctx.strokeRect(w * 0.55, h * 0.40, w * 0.35, h * 0.45);
    
    ctx.fillStyle = '#27AE60';
    ctx.font = `${h * 0.025}px Arial bold`;
    ctx.fillText('Cloned Animal', w * 0.62, h * 0.44);
    
    // Identical animal silhouette
    ctx.fillStyle = '#95A5A6';
    ctx.beginPath();
    ctx.ellipse(w * 0.725, h * 0.60, w * 0.08, h * 0.12, 0, 0, Math.PI * 2);
    ctx.fill();
    
    // Head
    ctx.beginPath();
    ctx.ellipse(w * 0.76, h * 0.54, w * 0.04, h * 0.05, 0.3, 0, Math.PI * 2);
    ctx.fill();
    
    ctx.fillStyle = '#000000';
    ctx.font = `${h * 0.02}px Arial`;
    ctx.fillText('Identical DNA', w * 0.66, h * 0.78);
    
    // Double helix icon
    this.drawDNAIcon(ctx, w * 0.725, h * 0.80, w * 0.03, h * 0.04);
    
    // Equals sign between them
    ctx.fillStyle = '#27AE60';
    ctx.font = `${h * 0.06}px Arial bold`;
    ctx.fillText('=', w * 0.48, h * 0.63);
    
    ctx.fillStyle = '#000000';
    ctx.font = `${h * 0.018}px Arial`;
    ctx.fillText('(Genetically identical)', w * 0.42, h * 0.68);
  }
  
  // Important notes
  ctx.fillStyle = '#FEF5E7';
  ctx.fillRect(w * 0.10, h * 0.90, w * 0.80, h * 0.08);
  ctx.strokeStyle = '#F39C12';
  ctx.lineWidth = 2;
  ctx.strokeRect(w * 0.10, h * 0.90, w * 0.80, h * 0.08);
  
  ctx.fillStyle = '#F39C12';
  ctx.font = `${h * 0.02}px Arial bold`;
  ctx.fillText('Note:', w * 0.12, h * 0.93);
  
  ctx.fillStyle = '#000000';
  ctx.font = `${h * 0.018}px Arial`;
  if(cloningType === 'therapeutic') {
    ctx.fillText('Therapeutic cloning creates stem cells for treatment, not a living organism. Embryo is destroyed after ~5-6 days.', w * 0.18, h * 0.93);
    ctx.fillText('Ethically controversial but holds promise for regenerative medicine and personalized treatments.', w * 0.12, h * 0.96);
  } else {
    ctx.fillText('Clone has identical nuclear DNA but different mitochondrial DNA (from egg donor). Not a perfect copy.', w * 0.18, h * 0.93);
    ctx.fillText('Success rates are low (~1-5%). Many ethical, legal, and technical challenges remain.', w * 0.12, h * 0.96);
  }
}

static drawEggCell(ctx, centerX, centerY, width, height) {
  // Large egg cell with prominent nucleus
  ctx.fillStyle = '#FAD7A0';
  ctx.beginPath();
  ctx.ellipse(centerX, centerY, width / 2, height / 2, 0, 0, Math.PI * 2);
  ctx.fill();
  
  ctx.strokeStyle = '#E59866';
  ctx.lineWidth = 2;
  ctx.stroke();
  
  // Zona pellucida (outer layer)
  ctx.strokeStyle = '#D68910';
  ctx.lineWidth = 1;
  ctx.setLineDash([2, 2]);
  ctx.beginPath();
  ctx.ellipse(centerX, centerY, width / 2 + width * 0.05, height / 2 + height * 0.05, 0, 0, Math.PI * 2);
  ctx.stroke();
  ctx.setLineDash([]);
  
  // Nucleus
  ctx.fillStyle = '#5DADE2';
  ctx.beginPath();
  ctx.arc(centerX, centerY, width * 0.15, 0, Math.PI * 2);
  ctx.fill();
  ctx.strokeStyle = '#2E86C1';
  ctx.lineWidth = 1.5;
  ctx.stroke();
}

static drawEnucleatedEgg(ctx, centerX, centerY, width, height) {
  // Egg cell without nucleus
  ctx.fillStyle = '#FAD7A0';
  ctx.beginPath();
  ctx.ellipse(centerX, centerY, width / 2, height / 2, 0, 0, Math.PI * 2);
  ctx.fill();
  
  ctx.strokeStyle = '#E59866';
  ctx.lineWidth = 2;
  ctx.stroke();
  
  // Zona pellucida
  ctx.strokeStyle = '#D68910';
  ctx.lineWidth = 1;
  ctx.setLineDash([2, 2]);
  ctx.beginPath();
  ctx.ellipse(centerX, centerY, width / 2 + width * 0.05, height / 2 + height * 0.05, 0, 0, Math.PI * 2);
  ctx.stroke();
  ctx.setLineDash([]);
  
  // Empty space where nucleus was (slightly darker)
  ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
  ctx.beginPath();
  ctx.arc(centerX, centerY, width * 0.15, 0, Math.PI * 2);
  ctx.fill();
  
  // Dotted outline showing removed nucleus
  ctx.strokeStyle = '#95A5A6';
  ctx.lineWidth = 1;
  ctx.setLineDash([3, 3]);
  ctx.stroke();
  ctx.setLineDash([]);
}

static drawNuclearTransfer(ctx, centerX, centerY, width) {
  // Enucleated egg
  this.drawEnucleatedEgg(ctx, centerX, centerY, width, width * 0.8);
  
  // Donor nucleus being transferred
  ctx.fillStyle = '#E74C3C';
  ctx.beginPath();
  ctx.arc(centerX + width * 0.15, centerY - width * 0.2, width * 0.12, 0, Math.PI * 2);
  ctx.fill();
  ctx.strokeStyle = '#C0392B';
  ctx.lineWidth = 2;
  ctx.stroke();
  
  // Arrow showing transfer
  ctx.strokeStyle = '#9B59B6';
  ctx.lineWidth = 2;
  ctx.setLineDash([5, 5]);
  ctx.beginPath();
  ctx.moveTo(centerX + width * 0.15, centerY - width * 0.08);
  ctx.lineTo(centerX, centerY);
  ctx.stroke();
  ctx.setLineDash([]);
  
  this.drawArrowhead(ctx, centerX, centerY, Math.PI * 0.75, width * 0.08, '#9B59B6');
}

static drawEmbryoStages(ctx, x, y, width, height) {
  const stages = [
    {cells: 1, label: '1-cell'},
    {cells: 2, label: '2-cell'},
    {cells: 4, label: '4-cell'},
    {cells: 8, label: '8-cell'},
    {cells: 16, label: 'Morula'},
    {cells: 'blast', label: 'Blastocyst'}
  ];
  
  stages.forEach((stage, i) => {
    const cx = x + (i / (stages.length - 1)) * width;
    
    if(stage.cells === 'blast') {
      this.drawBlastocyst(ctx, cx, y, height * 1.5);
    } else {
      // Draw cell cluster
      const cellSize = height / (stage.cells > 4 ? 4 : 2);
      const clusterSize = height * 1.2;
      
      ctx.strokeStyle = '#52BE80';
      ctx.lineWidth = 1.5;
      ctx.beginPath();
      ctx.arc(cx, y, clusterSize, 0, Math.PI * 2);
      ctx.stroke();
      
      // Draw individual cells
      for(let j = 0; j < stage.cells; j++) {
        const angle = (j / stage.cells) * Math.PI * 2;
        const radius = clusterSize * 0.5;
        const cellX = cx + Math.cos(angle) * radius;
        const cellY = y + Math.sin(angle) * radius;
        
        ctx.fillStyle = '#A9DFBF';
        ctx.beginPath();
        ctx.arc(cellX, cellY, cellSize, 0, Math.PI * 2);
        ctx.fill();
        ctx.strokeStyle = '#52BE80';
        ctx.lineWidth = 1;
        ctx.stroke();
      }
    }
    
    // Label
    ctx.fillStyle = '#000000';
    ctx.font = `${height * 0.3}px Arial`;
    ctx.fillText(stage.label, cx - width * 0.04, y + height * 3);
  });
}

static drawBlastocyst(ctx, centerX, centerY, radius) {
  // Outer layer (trophoblast)
  ctx.fillStyle = 'rgba(169, 223, 191, 0.3)';
  ctx.beginPath();
  ctx.arc(centerX, centerY, radius, 0, Math.PI * 2);
  ctx.fill();
  
  ctx.strokeStyle = '#52BE80';
  ctx.lineWidth = 2;
  ctx.stroke();
  
  // Inner cell mass
  ctx.fillStyle = '#52BE80';
  ctx.beginPath();
  ctx.arc(centerX + radius * 0.3, centerY - radius * 0.2, radius * 0.4, 0, Math.PI * 2);
  ctx.fill();
  
  // Blastocoel (cavity)
  ctx.fillStyle = 'rgba(255, 255, 255, 0.5)';
  ctx.beginPath();
  ctx.arc(centerX - radius * 0.2, centerY + radius * 0.2, radius * 0.3, 0, Math.PI * 2);
  ctx.fill();
}

static drawDNAIcon(ctx, centerX, centerY, width, height) {
  ctx.strokeStyle = '#3498DB';
  ctx.lineWidth = 2;
  
  // Double helix
  for(let i = 0; i <= 10; i++) {
    const x = centerX - width / 2 + (i / 10) * width;
    const y1 = centerY + Math.sin((i / 10) * Math.PI * 4) * height / 3;
    const y2 = centerY - Math.sin((i / 10) * Math.PI * 4) * height / 3;
    
    if(i > 0) {
      ctx.beginPath();
      ctx.moveTo(prevX, prevY1);
      ctx.lineTo(x, y1);
      ctx.stroke();
      
      ctx.beginPath();
      ctx.moveTo(prevX, prevY2);
      ctx.lineTo(x, y2);
      ctx.stroke();
    }
    
    var prevX = x;
    var prevY1 = y1;
    var prevY2 = y2;
    
    // Base pairs
    if(i % 2 === 0) {
      ctx.strokeStyle = '#95A5A6';
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.moveTo(x, y1);
      ctx.lineTo(x, y2);
      ctx.stroke();
      ctx.strokeStyle = '#3498DB';
      ctx.lineWidth = 2;
    }
  }
}

// ===== BIOREACTOR DIAGRAMS =====

static drawBioreactor(ctx, x, y, width, height, type, component) {
  ctx.save();
  ctx.translate(x, y);
  
  switch(component) {
    case 'complete':
      this.drawBioreactorComplete(ctx, width, height, type);
      break;
    case 'vessel':
      this.drawBioreactorVessel(ctx, width, height, type);
      break;
    case 'agitation':
      this.drawBioreactorAgitation(ctx, width, height, type);
      break;
    case 'aeration':
      this.drawBioreactorAeration(ctx, width, height, type);
      break;
    case 'control-systems':
      this.drawBioreactorControls(ctx, width, height, type);
      break;
    case 'monitoring':
      this.drawBioreactorMonitoring(ctx, width, height, type);
      break;
  }
  
  ctx.restore();
}

static drawBioreactorComplete(ctx, width, height, type) {
  const w = width, h = height;
  
  ctx.fillStyle = '#000000';
  ctx.font = `${h * 0.04}px Arial bold`;
  const typeText = type.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
  ctx.fillText(`${typeText} Bioreactor`, w * 0.32, h * 0.05);
  
  if(type === 'stirred-tank') {
    this.drawStirredTankBioreactor(ctx, w, h);
  } else if(type === 'airlift') {
    this.drawAirliftBioreactor(ctx, w, h);
  } else if(type === 'packed-bed') {
    this.drawPackedBedBioreactor(ctx, w, h);
  } else if(type === 'hollow-fiber') {
    this.drawHollowFiberBioreactor(ctx, w, h);
  }
}

static drawStirredTankBioreactor(ctx, w, h) {
  // Main vessel
  ctx.fillStyle = 'rgba(236, 240, 241, 0.5)';
  ctx.strokeStyle = '#2C3E50';
  ctx.lineWidth = 3;
  
  // Cylindrical tank
  ctx.beginPath();
  ctx.moveTo(w * 0.3, h * 0.25);
  ctx.lineTo(w * 0.3, h * 0.70);
  ctx.quadraticCurveTo(w * 0.5, h * 0.75, w * 0.7, h * 0.70);
  ctx.lineTo(w * 0.7, h * 0.25);
  ctx.quadraticCurveTo(w * 0.5, h * 0.20, w * 0.3, h * 0.25);
  ctx.closePath();
  ctx.fill();
  ctx.stroke();
  
  // Top ellipse
  ctx.fillStyle = '#BDC3C7';
  ctx.beginPath();
  ctx.ellipse(w * 0.5, h * 0.25, w * 0.2, h * 0.03, 0, 0, Math.PI * 2);
  ctx.fill();
  ctx.stroke();
  
  // Culture medium
  ctx.fillStyle = 'rgba(169, 223, 191, 0.4)';
  ctx.beginPath();
  ctx.moveTo(w * 0.32, h * 0.35);
  ctx.lineTo(w * 0.32, h * 0.68);
  ctx.quadraticCurveTo(w * 0.5, h * 0.72, w * 0.68, h * 0.68);
  ctx.lineTo(w * 0.68, h * 0.35);
  ctx.closePath();
  ctx.fill();
  
  // Medium surface
  ctx.fillStyle = 'rgba(82, 190, 128, 0.3)';
  ctx.beginPath();
  ctx.ellipse(w * 0.5, h * 0.35, w * 0.18, h * 0.025, 0, 0, Math.PI * 2);
  ctx.fill();
  ctx.strokeStyle = '#52BE80';
  ctx.lineWidth = 2;
  ctx.stroke();
  
  // Impeller shaft
  ctx.fillStyle = '#95A5A6';
  ctx.fillRect(w * 0.495, h * 0.15, w * 0.01, h * 0.50);
  
  // Motor
  ctx.fillStyle = '#34495E';
  ctx.fillRect(w * 0.46, h * 0.10, w * 0.08, h * 0.06);
  ctx.strokeStyle = '#2C3E50';
  ctx.lineWidth = 2;
  ctx.strokeRect(w * 0.46, h * 0.10, w * 0.08, h * 0.06);
  
  ctx.fillStyle = '#FFFFFF';
  ctx.font = `${h * 0.025}px Arial`;
  ctx.fillText('Motor', w * 0.47, h * 0.14);
  
  // Impeller blades (Rushton turbine)
  const impellerY = h * 0.55;
  ctx.fillStyle = '#7F8C8D';
  
  // 6 blades
  for(let i = 0; i < 6; i++) {
    const angle = (i / 6) * Math.PI * 2;
    ctx.save();
    ctx.translate(w * 0.5, impellerY);
    ctx.rotate(angle);
    ctx.fillRect(-w * 0.005, 0, w * 0.08, h * 0.02);
    ctx.restore();
  }
  
  // Rotation arrows
  ctx.strokeStyle = '#E74C3C';
  ctx.lineWidth = 2;
  ctx.setLineDash([5, 5]);
  ctx.beginPath();
  ctx.arc(w * 0.5, impellerY, w * 0.12, 0, Math.PI * 1.5);
  ctx.stroke();
  ctx.setLineDash([]);
  this.drawArrowhead(ctx, w * 0.5, impellerY - w * 0.12, -Math.PI / 2, h * 0.02, '#E74C3C');
  
  // Sparger (air inlet)
  ctx.strokeStyle = '#3498DB';
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.moveTo(w * 0.5, h * 0.75);
  ctx.lineTo(w * 0.5, h * 0.67);
  ctx.stroke();
  
  // Air bubbles
  for(let i = 0; i < 12; i++) {
    const bx = w * (0.45 + Math.random() * 0.1);
    const by = h * (0.40 + Math.random() * 0.27);
    
    ctx.fillStyle = 'rgba(52, 152, 219, 0.3)';
    ctx.beginPath();
    ctx.arc(bx, by, w * 0.008, 0, Math.PI * 2);
    ctx.fill();
    ctx.strokeStyle = '#3498DB';
    ctx.lineWidth = 1;
    ctx.stroke();
  }
  
  // Baffles (4 vertical plates)
  ctx.strokeStyle = '#7F8C8D';
  ctx.lineWidth = 3;
  for(let i = 0; i < 4; i++) {
    const angle = (i / 4) * Math.PI * 2;
    const bx = w * 0.5 + Math.cos(angle) * w * 0.17;
    
    ctx.beginPath();
    ctx.moveTo(bx, h * 0.36);
    ctx.lineTo(bx, h * 0.68);
    ctx.stroke();
  }
  
  // Sensors and ports
  // pH probe
  ctx.fillStyle = '#F39C12';
  ctx.fillRect(w * 0.72, h * 0.40, w * 0.02, h * 0.08);
  ctx.fillStyle = '#000000';
  ctx.font = `${h * 0.018}px Arial`;
  ctx.fillText('pH', w * 0.75, h * 0.44);
  
  // Temperature probe
  ctx.fillStyle = '#E74C3C';
  ctx.fillRect(w * 0.72, h * 0.52, w * 0.02, h * 0.08);
  ctx.fillStyle = '#000000';
  ctx.fillText('Temp', w * 0.75, h * 0.56);
  
  // DO (Dissolved Oxygen) probe
  ctx.fillStyle = '#3498DB';
  ctx.fillRect(w * 0.26, h * 0.45, w * 0.02, h * 0.08);
  ctx.fillStyle = '#000000';
  ctx.fillText('DO', w * 0.20, h * 0.49);
  
  // Harvest outlet
  ctx.strokeStyle = '#27AE60';
  ctx.lineWidth = 3;
  ctx.beginPath();
  ctx.moveTo(w * 0.32, h * 0.70);
  ctx.lineTo(w * 0.25, h * 0.75);
  ctx.stroke();
  
  ctx.fillStyle = '#000000';
  ctx.font = `${h * 0.018}px Arial`;
  ctx.fillText('Harvest', w * 0.17, h * 0.78);
  
  // Feed inlet
  ctx.strokeStyle = '#9B59B6';
  ctx.lineWidth = 3;
  ctx.beginPath();
  ctx.moveTo(w * 0.30, h * 0.30);
  ctx.lineTo(w * 0.25, h * 0.25);
  ctx.stroke();
  
  ctx.fillStyle = '#000000';
  ctx.fillText('Feed', w * 0.19, h * 0.24);
  
  // Exhaust gas
  ctx.strokeStyle = '#95A5A6';
  ctx.lineWidth = 3;
  ctx.beginPath();
  ctx.moveTo(w * 0.70, h * 0.30);
  ctx.lineTo(w * 0.75, h * 0.25);
  ctx.stroke();
  
  ctx.fillStyle = '#000000';
  ctx.fillText('Exhaust', w * 0.76, h * 0.24);
  
  // Air inlet (bottom)
  ctx.strokeStyle = '#3498DB';
  ctx.lineWidth = 3;
  ctx.beginPath();
  ctx.moveTo(w * 0.50, h * 0.75);
  ctx.lineTo(w * 0.50, h * 0.82);
  ctx.stroke();
  
  ctx.fillStyle = '#000000';
  ctx.fillText('Air in', w * 0.51, h * 0.85);
  
  // Labels
  ctx.font = `${h * 0.02}px Arial`;
  ctx.fillText('Culture', w * 0.45, h * 0.50);
  ctx.fillText('Impeller', w * 0.38, h * 0.58);
  ctx.fillText('Baffle', w * 0.60, h * 0.48);
}

static drawAirliftBioreactor(ctx, w, h) {
  // Outer vessel
  ctx.fillStyle = 'rgba(236, 240, 241, 0.5)';
  ctx.strokeStyle = '#2C3E50';
  ctx.lineWidth = 3;
  
  ctx.beginPath();
  ctx.moveTo(w * 0.25, h * 0.20);
  ctx.lineTo(w * 0.25, h * 0.75);
  ctx.quadraticCurveTo(w * 0.5, h * 0.80, w * 0.75, h * 0.75);
  ctx.lineTo(w * 0.75, h * 0.20);
  ctx.quadraticCurveTo(w * 0.5, h * 0.15, w * 0.25, h * 0.20);
  ctx.closePath();
  ctx.fill();
  ctx.stroke();
  
  // Draft tube (internal)
  ctx.strokeStyle = '#7F8C8D';
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.moveTo(w * 0.42, h * 0.25);
  ctx.lineTo(w * 0.42, h * 0.68);
  ctx.moveTo(w * 0.58, h * 0.25);
  ctx.lineTo(w * 0.58, h * 0.68);
  ctx.stroke();
  
  // Culture medium
  ctx.fillStyle = 'rgba(169, 223, 191, 0.4)';
  ctx.beginPath();
  ctx.moveTo(w * 0.27, h * 0.30);
  ctx.lineTo(w * 0.27, h * 0.73);
  ctx.quadraticCurveTo(w * 0.5, h * 0.77, w * 0.73, h * 0.73);
  ctx.lineTo(w * 0.73, h * 0.30);
  ctx.closePath();
  ctx.fill();
  
  // Air sparger
  ctx.strokeStyle = '#3498DB';
  ctx.lineWidth = 3;
  ctx.beginPath();
  ctx.moveTo(w * 0.5, h * 0.82);
  ctx.lineTo(w * 0.5, h * 0.70);
  ctx.stroke();
  
  // Air bubbles in draft tube (riser)
  for(let i = 0; i < 15; i++) {
    const bx = w * (0.44 + Math.random() * 0.12);
    const by = h * (0.30 + Math.random() * 0.38);
    
    ctx.fillStyle = 'rgba(52, 152, 219, 0.4)';
    ctx.beginPath();
    ctx.arc(bx, by, w * 0.01, 0, Math.PI * 2);
    ctx.fill();
  }
  
  // Flow arrows
  ctx.strokeStyle = '#E74C3C';
  ctx.lineWidth = 2;
  
  // Upward flow in riser
  this.drawFlowArrow(ctx, w * 0.5, h * 0.60, 0, -h * 0.15, '#E74C3C');
  
  // Downward flow in downcomer
  this.drawFlowArrow(ctx, w * 0.32, h * 0.45, 0, h * 0.15, '#E74C3C');
  this.drawFlowArrow(ctx, w * 0.68, h * 0.45, 0, h * 0.15, '#E74C3C');
  
  // Circulation at top
  ctx.strokeStyle = '#E74C3C';
  ctx.lineWidth = 2;
  ctx.setLineDash([5, 5]);
  ctx.beginPath();
  ctx.moveTo(w * 0.42, h * 0.30);
  ctx.quadraticCurveTo(w * 0.5, h * 0.25, w * 0.58, h * 0.30);
  ctx.stroke();
  ctx.setLineDash([]);
  
  // Labels
  ctx.fillStyle = '#000000';
  ctx.font = `${h * 0.022}px Arial bold`;
  ctx.fillText('Riser', w * 0.47, h * 0.50);
  ctx.fillText('Downcomer', w * 0.28, h * 0.35);
  ctx.fillText('Downcomer', w * 0.64, h * 0.35);
  
  ctx.font = `${h * 0.018}px Arial`;
  ctx.fillText('Air inlet', w * 0.52, h * 0.85);
  ctx.fillText('Draft tube', w * 0.60, h * 0.68);
  
  // Ports
  ctx.strokeStyle = '#9B59B6';
  ctx.lineWidth = 3;
  ctx.beginPath();
  ctx.moveTo(w * 0.25, h * 0.25);
  ctx.lineTo(w * 0.20, h * 0.20);
  ctx.stroke();
  
  ctx.fillStyle = '#000000';
  ctx.fillText('Feed', w * 0.14, h * 0.19);
  
  ctx.strokeStyle = '#27AE60';
  ctx.lineWidth = 3;
  ctx.beginPath();
  ctx.moveTo(w * 0.27, h * 0.75);
  ctx.lineTo(w * 0.22, h * 0.80);
  ctx.stroke();
  
  ctx.fillText('Harvest', w * 0.14, h * 0.83);
  
  ctx.strokeStyle = '#95A5A6';
  ctx.lineWidth = 3;
  ctx.beginPath();
  ctx.moveTo(w * 0.75, h * 0.25);
  ctx.lineTo(w * 0.80, h * 0.20);
  ctx.stroke();
  
  ctx.fillText('Exhaust', w * 0.81, h * 0.19);
}

static drawPackedBedBioreactor(ctx, w, h) {
  // Main column
  ctx.fillStyle = 'rgba(236, 240, 241, 0.5)';
  ctx.strokeStyle = '#2C3E50';
  ctx.lineWidth = 3;
  ctx.strokeRect(w * 0.35, h * 0.20, w * 0.30, h * 0.60);
  
  // Packed bed (cells on support matrix)
  ctx.fillStyle = '#D7BDE2';
  ctx.fillRect(w * 0.37, h * 0.35, w * 0.26, h * 0.35);
  
  // Matrix particles
  for(let i = 0; i < 50; i++) {
    const px = w * (0.37 + Math.random() * 0.26);
    const py = h * (0.35 + Math.random() * 0.35);
    
    ctx.fillStyle = '#8E44AD';
    ctx.beginPath();
    ctx.arc(px, py, w * 0.006, 0, Math.PI * 2);
    ctx.fill();
    
    // Cells attached
    if(Math.random() > 0.6) {
      ctx.fillStyle = '#27AE60';
      ctx.beginPath();
      ctx.arc(px + w * 0.008, py, w * 0.004, 0, Math.PI * 2);
      ctx.fill();
    }
  }
  
  // Support screens
  ctx.strokeStyle = '#7F8C8D';
  ctx.lineWidth = 2;
  
  // Top screen
  for(let i = 0; i < 10; i++) {
    ctx.beginPath();
    ctx.moveTo(w * (0.37 + i * 0.026), h * 0.35);
    ctx.lineTo(w * (0.37 + i * 0.026), h * 0.36);
    ctx.stroke();
  }
  
  // Bottom screen
  for(let i = 0; i < 10; i++) {
    ctx.beginPath();
    ctx.moveTo(w * (0.37 + i * 0.026), h * 0.69);
    ctx.lineTo(w * (0.37 + i * 0.026), h * 0.70);
    ctx.stroke();
  }
  
  // Medium flow (downward)
  ctx.fillStyle = 'rgba(52, 152, 219, 0.3)';
  
  // Inlet distribution
  ctx.fillRect(w * 0.37, h * 0.25, w * 0.26, h * 0.08);
  
  // Outlet collection
  ctx.fillRect(w * 0.37, h * 0.72, w * 0.26, h * 0.06);
  
  // Flow arrows
  for(let i = 0; i < 5; i++) {
    const fx = w * (0.40 + i * 0.05);
    this.drawFlowArrow(ctx, fx, h * 0.40, 0, h * 0.10, '#3498DB');
    this.drawFlowArrow(ctx, fx, h * 0.55, 0, h * 0.10, '#3498DB');
  }
  
  // Inlet
  ctx.strokeStyle = '#9B59B6';
  ctx.lineWidth = 3;
  ctx.beginPath();
  ctx.moveTo(w * 0.50, h * 0.20);
  ctx.lineTo(w * 0.50, h * 0.15);
  ctx.stroke();
  
  ctx.fillStyle = '#000000';
  ctx.font = `${h * 0.018}px Arial`;
  ctx.fillText('Medium in', w * 0.45, h * 0.13);
  
  // Outlet
  ctx.strokeStyle = '#27AE60';
  ctx.lineWidth = 3;
  ctx.beginPath();
  ctx.moveTo(w * 0.50, h * 0.80);
  ctx.lineTo(w * 0.50, h * 0.85);
  ctx.stroke();
  
  ctx.fillText('Product out', w * 0.44, h * 0.88);
  
  // Air inlet (side)
  ctx.strokeStyle = '#3498DB';
  ctx.lineWidth = 3;
  ctx.beginPath();
  ctx.moveTo(w * 0.35, h * 0.65);
  ctx.lineTo(w * 0.30, h * 0.65);
  ctx.stroke();
  
  ctx.fillText('Air', w * 0.24, h * 0.67);
  
  // Labels
  ctx.fillStyle = '#000000';
  ctx.font = `${h * 0.022}px Arial bold`;
  ctx.fillText('Packed Bed', w * 0.68, h * 0.50);
  
  ctx.font = `${h * 0.018}px Arial`;
  ctx.fillText('(Cells immobilized', w * 0.68, h * 0.54);
  ctx.fillText('on support matrix)', w * 0.68, h * 0.57);
  
  ctx.fillText('Support screen', w * 0.68, h * 0.36);
  ctx.fillText('Distribution', w * 0.68, h * 0.28);
  ctx.fillText('Collection', w * 0.68, h * 0.74);
}

static drawHollowFiberBioreactor(ctx, w, h) {
  // Outer shell
  ctx.fillStyle = 'rgba(236, 240, 241, 0.5)';
  ctx.strokeStyle = '#2C3E50';
  ctx.lineWidth = 3;
  
  // Cylindrical shell
  ctx.beginPath();
  ctx.moveTo(w * 0.25, h * 0.30);
  ctx.lineTo(w * 0.25, h * 0.70);
  ctx.lineTo(w * 0.75, h * 0.70);
  ctx.lineTo(w * 0.75, h * 0.30);
  ctx.closePath();
  ctx.fill();
  ctx.stroke();
  
  // End caps
  ctx.fillStyle = '#BDC3C7';
  ctx.fillRect(w * 0.23, h * 0.30, w * 0.04, h * 0.40);
  ctx.fillRect(w * 0.73, h * 0.30, w * 0.04, h * 0.40);
  
  ctx.strokeStyle = '#2C3E50';
  ctx.lineWidth = 2;
  ctx.strokeRect(w * 0.23, h * 0.30, w * 0.04, h * 0.40);
  ctx.strokeRect(w * 0.73, h * 0.30, w * 0.04, h * 0.40);
  
  // Hollow fibers (vertical lines)
  ctx.strokeStyle = '#8E44AD';
  ctx.lineWidth = 1.5;
  
  for(let i = 0; i < 20; i++) {
    const fx = w * (0.28 + i * 0.02);
    
    ctx.beginPath();
    ctx.moveTo(fx, h * 0.32);
    ctx.lineTo(fx, h * 0.68);
    ctx.stroke();
    
    // Cells on outside of fibers
    for(let j = 0; j < 5; j++) {
      const cy = h * (0.35 + j * 0.06);
      
      ctx.fillStyle = '#27AE60';
      ctx.beginPath();
      ctx.arc(fx + w * 0.003, cy, w * 0.004, 0, Math.PI * 2);
      ctx.fill();
    }
  }
  
  // Medium flow (around fibers - extracapillary space)
  ctx.fillStyle = 'rgba(169, 223, 191, 0.2)';
  ctx.fillRect(w * 0.27, h * 0.32, w * 0.46, h * 0.36);
  
  // Medium inlet
  ctx.strokeStyle = '#9B59B6';
  ctx.lineWidth = 3;
  ctx.beginPath();
  ctx.moveTo(w * 0.25, h * 0.40);
  ctx.lineTo(w * 0.20, h * 0.40);
  ctx.stroke();
  
  this.drawArrowhead(ctx, w * 0.25, h * 0.40, 0, h * 0.02, '#9B59B6');
  
  ctx.fillStyle = '#000000';
  ctx.font = `${h * 0.018}px Arial`;
  ctx.fillText('Medium in', w * 0.10, h * 0.42);
  
  // Medium outlet
  ctx.strokeStyle = '#9B59B6';
  ctx.lineWidth = 3;
  ctx.beginPath();
  ctx.moveTo(w * 0.75, h * 0.60);
  ctx.lineTo(w * 0.80, h * 0.60);
  ctx.stroke();
  
  this.drawArrowhead(ctx, w * 0.80, h * 0.60, 0, h * 0.02, '#9B59B6');
  
  ctx.fillText('Medium out', w * 0.81, h * 0.62);
  
  // Nutrient/O2 flow inside fibers
  ctx.strokeStyle = '#3498DB';
  ctx.lineWidth = 3;
  
  // Inlet header
  ctx.beginPath();
  ctx.moveTo(w * 0.23, h * 0.45);
  ctx.lineTo(w * 0.18, h * 0.45);
  ctx.stroke();
  
  this.drawArrowhead(ctx, w * 0.23, h * 0.45, 0, h * 0.02, '#3498DB');
  
  ctx.fillStyle = '#000000';
  ctx.fillText('Nutrient in', w * 0.08, h * 0.47);
  
  // Outlet header
  ctx.strokeStyle = '#27AE60';
  ctx.lineWidth = 3;
  ctx.beginPath();
  ctx.moveTo(w * 0.77, h * 0.55);
  ctx.lineTo(w * 0.82, h * 0.55);
  ctx.stroke();
  
  this.drawArrowhead(ctx, w * 0.82, h * 0.55, 0, h * 0.02, '#27AE60');
  
  ctx.fillText('Waste out', w * 0.83, h * 0.57);
  
  // Cross-section detail
  ctx.fillStyle = '#ECF0F1';
  ctx.beginPath();
  ctx.arc(w * 0.85, h * 0.35, w * 0.08, 0, Math.PI * 2);
  ctx.fill();
  ctx.strokeStyle = '#2C3E50';
  ctx.lineWidth = 2;
  ctx.stroke();
  
  ctx.fillStyle = '#000000';
  ctx.font = `${h * 0.018}px Arial bold`;
  ctx.fillText('Cross-section', w * 0.80, h * 0.28);
  
  // Fiber cross-sections
  for(let i = 0; i < 7; i++) {
    const angle = (i / 7) * Math.PI * 2;
    const fx = w * 0.85 + Math.cos(angle) * w * 0.04;
    const fy = h * 0.35 + Math.sin(angle) * w * 0.04;
    
    // Fiber wall
    ctx.strokeStyle = '#8E44AD';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.arc(fx, fy, w * 0.012, 0, Math.PI * 2);
    ctx.stroke();
    
    // Lumen (inside)
    ctx.fillStyle = 'rgba(52, 152, 219, 0.3)';
    ctx.beginPath();
    ctx.arc(fx, fy, w * 0.008, 0, Math.PI * 2);
    ctx.fill();
    
    // Cells on outside
    for(let j = 0; j < 3; j++) {
      const cellAngle = (j / 3) * Math.PI * 2;
      const cx = fx + Math.cos(cellAngle) * w * 0.016;
      const cy = fy + Math.sin(cellAngle) * w * 0.016;
      
      ctx.fillStyle = '#27AE60';
      ctx.beginPath();
      ctx.arc(cx, cy, w * 0.004, 0, Math.PI * 2);
      ctx.fill();
    }
  }
  
  // Labels on cross-section
  ctx.fillStyle = '#8E44AD';
  ctx.font = `${h * 0.015}px Arial`;
  ctx.fillText('Fiber', w * 0.88, h * 0.42);
  
  ctx.fillStyle = '#27AE60';
  ctx.fillText('Cells', w * 0.88, h * 0.45);
  
  ctx.fillStyle = '#3498DB';
  ctx.fillText('Nutrients', w * 0.88, h * 0.48);
}

static drawBioreactorVessel(ctx, width, height, type) {
  // Similar to complete but focused on vessel structure
  const w = width, h = height;
  
  ctx.fillStyle = '#000000';
  ctx.font = `${h * 0.03}px Arial bold`;
  ctx.fillText('Bioreactor Vessel Construction', w * 0.28, h * 0.08);
  
  // Main vessel with materials
  ctx.fillStyle = '#ECF0F1';
  ctx.fillRect(w * 0.25, h * 0.20, w * 0.50, h * 0.60);
  ctx.strokeStyle = '#2C3E50';
  ctx.lineWidth = 4;
  ctx.strokeRect(w * 0.25, h * 0.20, w * 0.50, h * 0.60);
  
  // Material layers (cutaway view)
  ctx.fillStyle = '#95A5A6';
  ctx.fillRect(w * 0.25, h * 0.20, w * 0.02, h * 0.60);
  
  ctx.fillStyle = '#BDC3C7';
  ctx.fillRect(w * 0.27, h * 0.20, w * 0.01, h * 0.60);
  
  // Labels for layers
  ctx.fillStyle = '#000000';
  ctx.font = `${h * 0.02}px Arial`;
  ctx.fillText('Outer jacket', w * 0.05, h * 0.50);
  ctx.fillText('Insulation', w * 0.05, h * 0.54);
  ctx.fillText('Inner wall', w * 0.05, h * 0.58);
  
  // Arrows pointing to layers
  ctx.strokeStyle = '#7F8C8D';
  ctx.lineWidth = 1;
  for(let i = 0; i < 3; i++) {
    ctx.beginPath();
    ctx.moveTo(w * 0.18, h * (0.50 + i * 0.04));
    ctx.lineTo(w * (0.25 + i * 0.01), h * (0.50 + i * 0.04));
    ctx.stroke();
  }
  
  // Ports and fittings
  ctx.fillStyle = '#34495E';
  
  // Top port
  ctx.fillRect(w * 0.48, h * 0.15, w * 0.04, h * 0.05);
  ctx.fillText('Access port', w * 0.52, h * 0.14);
  
  // Side ports
  const portPositions = [0.30, 0.45, 0.60, 0.75];
  portPositions.forEach((py, i) => {
    ctx.fillRect(w * 0.76, h * py, w * 0.04, h * 0.02);
    
    ctx.fillStyle = '#000000';
    ctx.font = `${h * 0.018}px Arial`;
    const labels = ['Sensor', 'Sampling', 'Feed', 'Drain'];
    ctx.fillText(labels[i], w * 0.81, h * (py + 0.01));
    ctx.fillStyle = '#34495E';
  });
  
  // Specification table
  ctx.fillStyle = '#FEF5E7';
  ctx.fillRect(w * 0.05, h * 0.65, w * 0.18, h * 0.30);
  ctx.strokeStyle = '#F39C12';
  ctx.lineWidth = 2;
  ctx.strokeRect(w * 0.05, h * 0.65, w * 0.18, h * 0.30);
  
  ctx.fillStyle = '#F39C12';
  ctx.font = `${h * 0.022}px Arial bold`;
  ctx.fillText('Specifications', w * 0.07, h * 0.68);
  
  ctx.fillStyle = '#000000';
  ctx.font = `${h * 0.018}px Arial`;
  ctx.fillText('Material: SS316L', w * 0.07, h * 0.72);
  ctx.fillText('Volume: 1-10,000L', w * 0.07, h * 0.76);
  ctx.fillText('Pressure: 3 bar', w * 0.07, h * 0.80);
  ctx.fillText('Temp: 4-80°C', w * 0.07, h * 0.84);
  ctx.fillText('Sterile design', w * 0.07, h * 0.88);
  ctx.fillText('CIP/SIP capable', w * 0.07, h * 0.92);
}

static drawBioreactorAgitation(ctx, width, height, type) {
  const w = width, h = height;
  
  ctx.fillStyle = '#000000';
  ctx.font = `${h * 0.03}px Arial bold`;
  ctx.fillText('Agitation System', w * 0.35, h * 0.08);
  
  // Different impeller types
  const impellers = [
    {name: 'Rushton Turbine', y: 0.20, blades: 6, type: 'radial'},
    {name: 'Marine Propeller', y: 0.45, blades: 3, type: 'axial'},
    {name: 'Pitched Blade', y: 0.70, blades: 4, type: 'mixed'}
  ];
  
  impellers.forEach((imp, idx) => {
    const baseX = w * (0.15 + idx * 0.30);
    const baseY = h * imp.y;
    
    // Box for each impeller
    ctx.fillStyle = '#ECF0F1';
    ctx.fillRect(baseX - w * 0.10, baseY - h * 0.08, w * 0.20, h * 0.16);
    ctx.strokeStyle = '#3498DB';
    ctx.lineWidth = 2;
    ctx.strokeRect(baseX - w * 0.10, baseY - h * 0.08, w * 0.20, h * 0.16);
    
    // Title
    ctx.fillStyle = '#3498DB';
    ctx.font = `${h * 0.02}px Arial bold`;
    ctx.fillText(imp.name, baseX - w * 0.08, baseY - h * 0.05);
    
    // Shaft
    ctx.fillStyle = '#95A5A6';
    ctx.fillRect(baseX - w * 0.005, baseY - h * 0.03, w * 0.01, h * 0.06);
    
    // Draw impeller blades
    if(imp.type === 'radial') {
      // Rushton turbine - flat blades
      ctx.fillStyle = '#7F8C8D';
      for(let i = 0; i < imp.blades; i++) {
        const angle = (i / imp.blades) * Math.PI * 2;
        ctx.save();
        ctx.translate(baseX, baseY);
        ctx.rotate(angle);
        ctx.fillRect(-w * 0.005, 0, w * 0.06, h * 0.015);
        ctx.restore();
      }
    } else if(imp.type === 'axial') {
      // Marine propeller - angled blades
      ctx.fillStyle = '#7F8C8D';
      for(let i = 0; i < imp.blades; i++) {
        const angle = (i / imp.blades) * Math.PI * 2;
        ctx.save();
        ctx.translate(baseX, baseY);
        ctx.rotate(angle);
        ctx.beginPath();
        ctx.moveTo(0, 0);
        ctx.lineTo(w * 0.05, h * 0.01);
        ctx.lineTo(w * 0.05, h * 0.025);
        ctx.lineTo(0, h * 0.015);
        ctx.closePath();
        ctx.fill();
        ctx.restore();
      }
    } else {
      // Pitched blade - angled flat blades
      ctx.fillStyle = '#7F8C8D';
      for(let i = 0; i < imp.blades; i++) {
        const angle = (i / imp.blades) * Math.PI * 2;
        ctx.save();
        ctx.translate(baseX, baseY);
        ctx.rotate(angle);
        ctx.beginPath();
        ctx.moveTo(0, 0);
        ctx.lineTo(w * 0.055, -h * 0.01);
        ctx.lineTo(w * 0.055, h * 0.005);
        ctx.lineTo(0, h * 0.015);
        ctx.closePath();
        ctx.fill();
        ctx.restore();
      }
    }
    
    // Flow pattern arrows
    ctx.strokeStyle = '#E74C3C';
    ctx.lineWidth = 1.5;
    ctx.setLineDash([3, 3]);
    
    if(imp.type === 'radial') {
      // Radial flow
      for(let i = 0; i < 4; i++) {
        const angle = (i / 4) * Math.PI * 2;
        ctx.beginPath();
        ctx.moveTo(baseX, baseY);
        ctx.lineTo(baseX + Math.cos(angle) * w * 0.08, baseY + Math.sin(angle) * w * 0.08);
        ctx.stroke();
      }
    } else if(imp.type === 'axial') {
      // Axial flow (downward)
      this.drawFlowArrow(ctx, baseX, baseY + h * 0.02, 0, h * 0.04, '#E74C3C');
    } else {
      // Mixed flow
      ctx.beginPath();
      ctx.moveTo(baseX, baseY + h * 0.02);
      ctx.quadraticCurveTo(baseX + w * 0.06, baseY + h * 0.04, baseX + w * 0.08, baseY);
      ctx.stroke();
    }
    
    ctx.setLineDash([]);
    
    // Type label
    ctx.fillStyle = '#000000';
    ctx.font = `${h * 0.018}px Arial`;
    ctx.fillText(`${imp.type.charAt(0).toUpperCase() + imp.type.slice(1)} flow`, 
                 baseX - w * 0.06, baseY + h * 0.06);
  });
  
  // Power input information
  ctx.fillStyle = '#E8F8F5';
  ctx.fillRect(w * 0.10, h * 0.88, w * 0.80, h * 0.10);
  ctx.strokeStyle = '#27AE60';
  ctx.lineWidth = 2;
  ctx.strokeRect(w * 0.10, h * 0.88, w * 0.80, h * 0.10);
  
  ctx.fillStyle = '#27AE60';
  ctx.font = `${h * 0.022}px Arial bold`;
  ctx.fillText('Agitation Functions:', w * 0.12, h * 0.91);
  
  ctx.fillStyle = '#000000';
  ctx.font = `${h * 0.02}px Arial`;
  ctx.fillText('• Mixing nutrients  • Oxygen transfer  • Heat transfer  • Prevent settling  • Shear cells (controlled)', 
               w * 0.12, h * 0.95);
}

static drawBioreactorAeration(ctx, width, height, type) {
  const w = width, h = height;
  
  ctx.fillStyle = '#000000';
  ctx.font = `${h * 0.03}px Arial bold`;
  ctx.fillText('Aeration & Oxygenation System', w * 0.28, h * 0.08);
  
  // Air supply system
  ctx.fillStyle = '#ECF0F1';
  ctx.fillRect(w * 0.05, h * 0.15, w * 0.25, h * 0.35);
  ctx.strokeStyle = '#3498DB';
  ctx.lineWidth = 2;
  ctx.strokeRect(w * 0.05, h * 0.15, w * 0.25, h * 0.35);
  
  ctx.fillStyle = '#3498DB';
  ctx.font = `${h * 0.022}px Arial bold`;
  ctx.fillText('Air Supply Train', w * 0.09, h * 0.19);
  
  // Components
  const components = [
    {name: 'Compressor', y: 0.24, icon: 'comp'},
    {name: 'Filter (0.2μm)', y: 0.32, icon: 'filter'},
    {name: 'Flow meter', y: 0.40, icon: 'meter'},
    {name: 'Humidifier', y: 0.48, icon: 'humid'}
  ];
  
  components.forEach((comp, i) => {
    ctx.fillStyle = '#7F8C8D';
    ctx.fillRect(w * 0.10, h * comp.y, w * 0.15, h * 0.05);
    ctx.strokeStyle = '#2C3E50';
    ctx.lineWidth = 1;
    ctx.strokeRect(w * 0.10, h * comp.y, w * 0.15, h * 0.05);
    
    ctx.fillStyle = '#FFFFFF';
    ctx.font = `${h * 0.018}px Arial`;
    ctx.fillText(comp.name, w * 0.11, h * (comp.y + 0.03));
    
    // Connection line
    if(i < components.length - 1) {
      ctx.strokeStyle = '#3498DB';
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(w * 0.175, h * (comp.y + 0.05));
      ctx.lineTo(w * 0.175, h * components[i + 1].y);
      ctx.stroke();
    }
  });
  
  // Sparger types
  ctx.fillStyle = '#FEF5E7';
  ctx.fillRect(w * 0.35, h * 0.15, w * 0.60, h * 0.35);
  ctx.strokeStyle = '#F39C12';
  ctx.lineWidth = 2;
  ctx.strokeRect(w * 0.35, h * 0.15, w * 0.60, h * 0.35);
  
  ctx.fillStyle = '#F39C12';
  ctx.font = `${h * 0.022}px Arial bold`;
  ctx.fillText('Sparger Designs', w * 0.52, h * 0.19);
  
  // Ring sparger
  ctx.fillStyle = '#000000';
  ctx.font = `${h * 0.018}px Arial`;
  ctx.fillText('Ring Sparger', w * 0.38, h * 0.24);
  
  ctx.strokeStyle = '#7F8C8D';
  ctx.lineWidth = 3;
  ctx.beginPath();
  ctx.arc(w * 0.45, h * 0.32, w * 0.04, 0, Math.PI * 2);
  ctx.stroke();
  
  // Holes in ring
  for(let i = 0; i < 8; i++) {
    const angle = (i / 8) * Math.PI * 2;
    const hx = w * 0.45 + Math.cos(angle) * w * 0.04;
    const hy = h * 0.32 + Math.sin(angle) * w * 0.04;
    
    ctx.fillStyle = '#3498DB';
    ctx.beginPath();
    ctx.arc(hx, hy, w * 0.003, 0, Math.PI * 2);
    ctx.fill();
  }
  
  // Porous sparger
  ctx.fillStyle = '#000000';
  ctx.font = `${h * 0.018}px Arial`;
  ctx.fillText('Porous Plate', w * 0.58, h * 0.24);
  
  ctx.fillStyle = '#BDC3C7';
  ctx.fillRect(w * 0.62, h * 0.30, w * 0.08, h * 0.015);
  ctx.strokeStyle = '#7F8C8D';
  ctx.lineWidth = 1;
  ctx.strokeRect(w * 0.62, h * 0.30, w * 0.08, h * 0.015);
  
  // Many tiny holes
  for(let i = 0; i < 20; i++) {
    const px = w * (0.62 + Math.random() * 0.08);
    const py = h * 0.3075;
    
    ctx.fillStyle = '#3498DB';
    ctx.fillRect(px, py, w * 0.001, h * 0.003);
  }
  
  // Single orifice
  ctx.fillStyle = '#000000';
  ctx.font = `${h * 0.018}px Arial`;
  ctx.fillText('Single Orifice', w * 0.76, h * 0.24);
  
  ctx.strokeStyle = '#7F8C8D';
  ctx.lineWidth = 3;
  ctx.beginPath();
  ctx.moveTo(w * 0.82, h * 0.27);
  ctx.lineTo(w * 0.82, h * 0.32);
  ctx.stroke();
  
  // Large bubble
  ctx.fillStyle = 'rgba(52, 152, 219, 0.3)';
  ctx.beginPath();
  ctx.arc(w * 0.82, h * 0.35, w * 0.012, 0, Math.PI * 2);
  ctx.fill();
  ctx.strokeStyle = '#3498DB';
  ctx.lineWidth = 1;
  ctx.stroke();
  
  // Bubble size comparison
  ctx.fillStyle = '#000000';
  ctx.font = `${h * 0.015}px Arial`;
  ctx.fillText('Large bubbles', w * 0.76, h * 0.40);
  ctx.fillText('Medium bubbles', w * 0.58, h * 0.40);
  ctx.fillText('Fine bubbles', w * 0.38, h * 0.40);
  
  // Bubble examples with sizes
  const bubbleSizes = [
    {x: 0.45, size: 0.003, label: '0.5-1mm'},
    {x: 0.66, size: 0.007, label: '1-3mm'},
    {x: 0.82, size: 0.012, label: '3-6mm'}
  ];
  
  bubbleSizes.forEach(b => {
    ctx.fillStyle = 'rgba(52, 152, 219, 0.3)';
    ctx.beginPath();
    ctx.arc(w * b.x, h * 0.44, w * b.size, 0, Math.PI * 2);
    ctx.fill();
    ctx.strokeStyle = '#3498DB';
    ctx.lineWidth = 1;
    ctx.stroke();
    
    ctx.fillStyle = '#000000';
    ctx.font = `${h * 0.012}px Arial`;
    ctx.fillText(b.label, w * (b.x - 0.02), h * 0.47);
  });
  
  // Mass transfer explanation
  ctx.fillStyle = '#E8F8F5';
  ctx.fillRect(w * 0.05, h * 0.55, w * 0.90, h * 0.38);
  ctx.strokeStyle = '#27AE60';
  ctx.lineWidth = 2;
  ctx.strokeRect(w * 0.05, h * 0.55, w * 0.90, h * 0.38);
  
  ctx.fillStyle = '#27AE60';
  ctx.font = `${h * 0.025}px Arial bold`;
  ctx.fillText('Oxygen Mass Transfer', w * 0.38, h * 0.59);
  
  // Bubble diagram
  ctx.fillStyle = 'rgba(52, 152, 219, 0.2)';
  ctx.beginPath();
  ctx.arc(w * 0.20, h * 0.72, w * 0.08, 0, Math.PI * 2);
  ctx.fill();
  ctx.strokeStyle = '#3498DB';
  ctx.lineWidth = 2;
  ctx.stroke();
  
  ctx.fillStyle = '#3498DB';
  ctx.font = `${h * 0.018}px Arial`;
  ctx.fillText('Air bubble', w * 0.16, h * 0.67);
  ctx.fillText('(O₂, N₂, CO₂)', w * 0.15, h * 0.70);
  
  // Arrows showing O2 transfer
  ctx.strokeStyle = '#E74C3C';
  ctx.lineWidth = 2;
  for(let i = 0; i < 6; i++) {
    const angle = (i / 6) * Math.PI * 2;
    const sx = w * 0.20 + Math.cos(angle) * w * 0.08;
    const sy = h * 0.72 + Math.sin(angle) * w * 0.08;
    const ex = w * 0.20 + Math.cos(angle) * w * 0.12;
    const ey = h * 0.72 + Math.sin(angle) * w * 0.12;
    
    ctx.beginPath();
    ctx.moveTo(sx, sy);
    ctx.lineTo(ex, ey);
    ctx.stroke();
    
    this.drawArrowhead(ctx, ex, ey, angle, h * 0.015, '#E74C3C');
  }
  
  // Dissolved oxygen in medium
  ctx.fillStyle = 'rgba(169, 223, 191, 0.3)';
  ctx.fillRect(w * 0.28, h * 0.64, w * 0.15, h * 0.16);
  ctx.strokeStyle = '#52BE80';
  ctx.lineWidth = 1;
  ctx.strokeRect(w * 0.28, h * 0.64, w * 0.15, h * 0.16);
  
  ctx.fillStyle = '#27AE60';
  ctx.font = `${h * 0.018}px Arial`;
  ctx.fillText('Liquid medium', w * 0.29, h * 0.68);
  ctx.fillText('(dissolved O₂)', w * 0.29, h * 0.71);
  
  // O2 molecules in solution
  for(let i = 0; i < 12; i++) {
    const ox = w * (0.29 + Math.random() * 0.13);
    const oy = h * (0.66 + Math.random() * 0.13);
    
    ctx.fillStyle = '#E74C3C';
    ctx.font = `${h * 0.015}px Arial`;
    ctx.fillText('O₂', ox, oy);
  }
  
  // Cell consuming oxygen
  this.drawCell(ctx, w * 0.52, h * 0.72, w * 0.06, h * 0.06);
  
  ctx.fillStyle = '#000000';
  ctx.font = `${h * 0.018}px Arial`;
  ctx.fillText('Cell uptake', w * 0.50, h * 0.80);
  
  // Arrow from medium to cell
  ctx.strokeStyle = '#E74C3C';
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.moveTo(w * 0.43, h * 0.72);
  ctx.lineTo(w * 0.49, h * 0.72);
  ctx.stroke();
  this.drawArrowhead(ctx, w * 0.49, h * 0.72, 0, h * 0.015, '#E74C3C');
  
  // Key parameters
  ctx.fillStyle = '#FEF5E7';
  ctx.fillRect(w * 0.62, h * 0.63, w * 0.30, h * 0.26);
  ctx.strokeStyle = '#F39C12';
  ctx.lineWidth = 2;
  ctx.strokeRect(w * 0.62, h * 0.63, w * 0.30, h * 0.26);
  
  ctx.fillStyle = '#F39C12';
  ctx.font = `${h * 0.02}px Arial bold`;
  ctx.fillText('Key Parameters:', w * 0.64, h * 0.67);
  
  ctx.fillStyle = '#000000';
  ctx.font = `${h * 0.018}px Arial`;
  ctx.fillText('• kLa (mass transfer coefficient)', w * 0.64, h * 0.71);
  ctx.fillText('• Air flow rate (vvm)', w * 0.64, h * 0.75);
  ctx.fillText('• Bubble size & residence time', w * 0.64, h * 0.79);
  ctx.fillText('• Dissolved O₂ (DO) level', w * 0.64, h * 0.83);
  ctx.fillText('• Agitation rate (rpm)', w * 0.64, h * 0.87);
}

static drawBioreactorControls(ctx, width, height, type) {
  const w = width, h = height;
  
  ctx.fillStyle = '#000000';
  ctx.font = `${h * 0.03}px Arial bold`;
  ctx.fillText('Control Systems', w * 0.38, h * 0.08);
  
  // Control loop diagram
  ctx.fillStyle = '#ECF0F1';
  ctx.fillRect(w * 0.10, h * 0.15, w * 0.80, h * 0.70);
  ctx.strokeStyle = '#2C3E50';
  ctx.lineWidth = 2;
  ctx.strokeRect(w * 0.10, h * 0.15, w * 0.80, h * 0.70);
  
  // Bioreactor (center)
  ctx.fillStyle = 'rgba(169, 223, 191, 0.3)';
  ctx.beginPath();
  ctx.ellipse(w * 0.50, h * 0.50, w * 0.12, h * 0.15, 0, 0, Math.PI * 2);
  ctx.fill();
  ctx.strokeStyle = '#27AE60';
  ctx.lineWidth = 3;
  ctx.stroke();
  
  ctx.fillStyle = '#27AE60';
  ctx.font = `${h * 0.025}px Arial bold`;
  ctx.fillText('Bioreactor', w * 0.45, h * 0.52);
  
  // Control parameters (circular arrangement)
  const controls = [
    {name: 'pH', color: '#F39C12', angle: 0, setpoint: '7.0'},
    {name: 'Temp', color: '#E74C3C', angle: Math.PI / 3, setpoint: '37°C'},
    {name: 'DO', color: '#3498DB', angle: 2 * Math.PI / 3, setpoint: '40%'},
    {name: 'Agitation', color: '#9B59B6', angle: Math.PI, setpoint: '300rpm'},
    {name: 'Pressure', color: '#16A085', angle: 4 * Math.PI / 3, setpoint: '0.5bar'},
    {name: 'Foam', color: '#D35400', angle: 5 * Math.PI / 3, setpoint: 'Auto'}
  ];
  
  controls.forEach(ctrl => {
    const cx = w * 0.50 + Math.cos(ctrl.angle) * w * 0.28;
    const cy = h * 0.50 + Math.sin(ctrl.angle) * h * 0.30;
    
    // Sensor box
    ctx.fillStyle = '#ECF0F1';
    ctx.fillRect(cx - w * 0.05, cy - h * 0.04, w * 0.10, h * 0.08);
    ctx.strokeStyle = ctrl.color;
    ctx.lineWidth = 2;
    ctx.strokeRect(cx - w * 0.05, cy - h * 0.04, w * 0.10, h * 0.08);
    
    ctx.fillStyle = ctrl.color;
    ctx.font = `${h * 0.02}px Arial bold`;
    ctx.fillText(ctrl.name, cx - w * 0.03, cy - h * 0.01);
    
    ctx.fillStyle = '#000000';
    ctx.font = `${h * 0.015}px Arial`;
    ctx.fillText(`SP: ${ctrl.setpoint}`, cx - w * 0.04, cy + h * 0.02);
    
    // Connection to bioreactor
    ctx.strokeStyle = ctrl.color;
    ctx.lineWidth = 2;
    ctx.setLineDash([5, 5]);
    ctx.beginPath();
    const reactorX = w * 0.50 + Math.cos(ctrl.angle) * w * 0.12;
    const reactorY = h * 0.50 + Math.sin(ctrl.angle) * h * 0.15;
    ctx.moveTo(reactorX, reactorY);
    ctx.lineTo(cx, cy - h * 0.04);
    ctx.stroke();
    ctx.setLineDash([]);
    
    // Actuator
    const ax = w * 0.50 + Math.cos(ctrl.angle + 0.3) * w * 0.22;
    const ay = h * 0.50 + Math.sin(ctrl.angle + 0.3) * h * 0.24;
    
    ctx.fillStyle = ctrl.color;
    ctx.beginPath();
    ctx.arc(ax, ay, w * 0.025, 0, Math.PI * 2);
    ctx.fill();
    
    ctx.fillStyle = '#FFFFFF';
    ctx.font = `${h * 0.015}px Arial bold`;
    ctx.fillText('A', ax - w * 0.007, ay + h * 0.005);
  });
  
  // PLC/Controller
  ctx.fillStyle = '#34495E';
  ctx.fillRect(w * 0.15, h * 0.88, w * 0.20, h * 0.08);
  ctx.strokeStyle = '#2C3E50';
  ctx.lineWidth = 2;
  ctx.strokeRect(w * 0.15, h * 0.88, w * 0.20, h * 0.08);
  
  ctx.fillStyle = '#27AE60';
  ctx.fillRect(w * 0.17, h * 0.90, w * 0.16, h * 0.04);
  
  ctx.fillStyle = '#000000';
  ctx.font = `${h * 0.018}px Arial bold`;
  ctx.fillText('PLC Controller', w * 0.18, h * 0.93);
  
  // Computer/HMI
  ctx.fillStyle = '#ECF0F1';
  ctx.fillRect(w * 0.65, h * 0.88, w * 0.20, h * 0.08);
  ctx.strokeStyle = '#3498DB';
  ctx.lineWidth = 2;
  ctx.strokeRect(w * 0.65, h * 0.88, w * 0.20, h * 0.08);
  
  ctx.fillStyle = '#3498DB';
  ctx.fillRect(w * 0.67, h * 0.90, w * 0.16, h * 0.04);
  
  ctx.fillStyle = '#FFFFFF';
  ctx.font = `${h * 0.018}px Arial bold`;
  ctx.fillText('HMI / SCADA', w * 0.68, h * 0.93);
  
  // Communication line
  ctx.strokeStyle = '#95A5A6';
  ctx.lineWidth = 3;
  ctx.beginPath();
  ctx.moveTo(w * 0.35, h * 0.92);
  ctx.lineTo(w * 0.65, h * 0.92);
  ctx.stroke();
  
  // Control strategy note
  ctx.fillStyle = '#000000';
  ctx.font = `${h * 0.018}px Arial italic`;
  ctx.fillText('SP = Setpoint, A = Actuator', w * 0.40, h * 0.90);
}

static drawBioreactorMonitoring(ctx, width, height, type) {
  const w = width, h = height;
  
  ctx.fillStyle = '#000000';
  ctx.font = `${h * 0.03}px Arial bold`;
  ctx.fillText('Monitoring & Sensors', w * 0.35, h * 0.08);
  
  // Sensor types
  const sensors = [
    {name: 'pH Electrode', y: 0.18, color: '#F39C12', 
     desc: 'Measures H⁺ concentration', range: '0-14 pH'},
    {name: 'Dissolved Oxygen (DO)', y: 0.35, color: '#3498DB', 
     desc: 'Optical or polarographic', range: '0-100% saturation'},
    {name: 'Temperature (RTD)', y: 0.52, color: '#E74C3C', 
     desc: 'Resistance temperature detector', range: '0-100°C'},
    {name: 'Pressure Transducer', y: 0.69, color: '#16A085', 
     desc: 'Measures vessel pressure', range: '0-5 bar'}
  ];
  
  sensors.forEach((sensor, i) => {
    // Sensor box
    ctx.fillStyle = '#ECF0F1';
    ctx.fillRect(w * 0.05, h * sensor.y, w * 0.40, h * 0.14);
    ctx.strokeStyle = sensor.color;
    ctx.lineWidth = 3;
    ctx.strokeRect(w * 0.05, h * sensor.y, w * 0.40, h * 0.14);
    
    // Title
    ctx.fillStyle = sensor.color;
    ctx.font = `${h * 0.022}px Arial bold`;
    ctx.fillText(sensor.name, w * 0.08, h * (sensor.y + 0.03));
    
    // Description
    ctx.fillStyle = '#000000';
    ctx.font = `${h * 0.018}px Arial`;
    ctx.fillText(sensor.desc, w * 0.08, h * (sensor.y + 0.07));
    ctx.fillText(`Range: ${sensor.range}`, w * 0.08, h * (sensor.y + 0.10));
    
    // Sensor icon/diagram
    const iconX = w * 0.35;
    const iconY = h * (sensor.y + 0.07);
    
    if(i === 0) {
      // pH electrode
      ctx.strokeStyle = sensor.color;
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(iconX, iconY - h * 0.03);
      ctx.lineTo(iconX, iconY + h * 0.02);
      ctx.stroke();
      
      ctx.fillStyle = sensor.color;
      ctx.beginPath();
      ctx.arc(iconX, iconY + h * 0.03, w * 0.01, 0, Math.PI * 2);
      ctx.fill();
      
    } else if(i === 1) {
      // DO probe
      ctx.fillStyle = 'rgba(52, 152, 219, 0.3)';
      ctx.fillRect(iconX - w * 0.015, iconY - h * 0.02, w * 0.03, h * 0.05);
      ctx.strokeStyle = sensor.color;
      ctx.lineWidth = 2;
      ctx.strokeRect(iconX - w * 0.015, iconY - h * 0.02, w * 0.03, h * 0.05);
      
      // Membrane
      ctx.strokeStyle = sensor.color;
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.moveTo(iconX - w * 0.015, iconY + h * 0.03);
      ctx.lineTo(iconX + w * 0.015, iconY + h * 0.03);
      ctx.stroke();
      
    } else if(i === 2) {
      // RTD
      ctx.strokeStyle = sensor.color;
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(iconX, iconY - h * 0.03);
      ctx.lineTo(iconX, iconY);
      ctx.stroke();
      
      // Resistor symbol
      for(let j = 0; j < 4; j++) {
        ctx.beginPath();
        ctx.moveTo(iconX, iconY + j * h * 0.012);
        ctx.lineTo(iconX + w * 0.01, iconY + j * h * 0.012 + h * 0.006);
        ctx.lineTo(iconX - w * 0.01, iconY + j * h * 0.012 + h * 0.012);
        ctx.stroke();
      }
      
    } else {
      // Pressure transducer
      ctx.fillStyle = sensor.color;
      ctx.fillRect(iconX - w * 0.02, iconY - h * 0.02, w * 0.04, h * 0.04);
      
      // Diaphragm
      ctx.strokeStyle = '#FFFFFF';
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.arc(iconX, iconY, w * 0.012, 0, Math.PI * 2);
      ctx.stroke();
    }
  });
  
  // Online monitoring display
  ctx.fillStyle = '#2C3E50';
  ctx.fillRect(w * 0.52, h * 0.18, w * 0.42, h * 0.65);
  ctx.strokeStyle = '#34495E';
  ctx.lineWidth = 3;
  ctx.strokeRect(w * 0.52, h * 0.18, w * 0.42, h * 0.65);
  
  // Screen
  ctx.fillStyle = '#1C2833';
  ctx.fillRect(w * 0.54, h * 0.22, w * 0.38, h * 0.50);
  
  ctx.fillStyle = '#27AE60';
  ctx.font = `${h * 0.025}px Arial bold`;
  ctx.fillText('Real-Time Monitoring', w * 0.58, h * 0.26);
  
  // Data display
  const readings = [
    {param: 'pH', value: '7.02', unit: '', color: '#F39C12', y: 0.32},
    {param: 'Temperature', value: '37.1', unit: '°C', color: '#E74C3C', y: 0.40},
    {param: 'DO', value: '42.3', unit: '%', color: '#3498DB', y: 0.48},
    {param: 'Agitation', value: '305', unit: 'rpm', color: '#9B59B6', y: 0.56},
    {param: 'Pressure', value: '0.52', unit: 'bar', color: '#16A085', y: 0.64}
  ];
  
  readings.forEach(reading => {
    ctx.fillStyle = reading.color;
    ctx.font = `${h * 0.02}px Arial bold`;
    ctx.fillText(reading.param + ':', w * 0.56, h * reading.y);
    
    ctx.font = `${h * 0.025}px monospace bold`;
    ctx.fillText(reading.value + ' ' + reading.unit, w * 0.72, h * reading.y);
    
    // Trend indicator
    ctx.fillStyle = '#27AE60';
    ctx.font = `${h * 0.015}px Arial`;
    ctx.fillText('▲', w * 0.88, h * reading.y);
  });
  
  // Control buttons
  const buttons = ['START', 'STOP', 'ALARM'];
  buttons.forEach((btn, i) => {
    const bx = w * (0.56 + i * 0.12);
    const color = i === 0 ? '#27AE60' : i === 1 ? '#E74C3C' : '#F39C12';
    
    ctx.fillStyle = color;
    ctx.fillRect(bx, h * 0.75, w * 0.08, h * 0.04);
    ctx.strokeStyle = '#2C3E50';
    ctx.lineWidth = 2;
    ctx.strokeRect(bx, h * 0.75, w * 0.08, h * 0.04);
    
    ctx.fillStyle = '#FFFFFF';
    ctx.font = `${h * 0.018}px Arial bold`;
    ctx.fillText(btn, bx + w * 0.01, h * 0.775);
  });
}

static drawFlowArrow(ctx, x, y, dx, dy, color) {
  ctx.strokeStyle = color;
  ctx.lineWidth = 2;
  ctx.setLineDash([5, 5]);
  ctx.beginPath();
  ctx.moveTo(x, y);
  ctx.lineTo(x + dx, y + dy);
  ctx.stroke();
  ctx.setLineDash([]);
  
  const angle = Math.atan2(dy, dx);
  this.drawArrowhead(ctx, x + dx, y + dy, angle, Math.abs(dy) * 0.15, color);
}

// ===== GMO PRODUCTION DIAGRAMS =====

static drawGMOProduction(ctx, x, y, width, height, organism, trait) {
  ctx.save();
  ctx.translate(x, y);
  
  // For GMO production, we'll create a comprehensive overview
  this.drawGMOProductionProcess(ctx, width, height, organism, trait);
  
  ctx.restore();
}

static drawGMOProductionProcess(ctx, width, height, organism, trait) {
  const w = width, h = height;
  
  ctx.fillStyle = '#000000';
  ctx.font = `${h * 0.03}px Arial bold`;
  const orgText = organism.charAt(0).toUpperCase() + organism.slice(1);
  ctx.fillText(`GMO ${orgText} Production`, w * 0.32, h * 0.05);
  
  // Process flow
  const steps = [
    {title: '1. Gene Identification', y: 0.12},
    {title: '2. Gene Isolation', y: 0.28},
    {title: '3. Vector Construction', y: 0.44},
    {title: '4. Transformation', y: 0.60},
    {title: '5. Selection & Testing', y: 0.76}
  ];
  
  steps.forEach((step, i) => {
    // Step box
    ctx.fillStyle = '#ECF0F1';
    ctx.fillRect(w * 0.10, h * step.y, w * 0.80, h * 0.12);
    
    const colors = ['#3498DB', '#9B59B6', '#E74C3C', '#27AE60', '#F39C12'];
    ctx.strokeStyle = colors[i];
    ctx.lineWidth = 3;
    ctx.strokeRect(w * 0.10, h * step.y, w * 0.80, h * 0.12);
    
    ctx.fillStyle = colors[i];
    ctx.font = `${h * 0.022}px Arial bold`;
    ctx.fillText(step.title, w * 0.12, h * (step.y + 0.03));
    
    // Step-specific content
    ctx.fillStyle = '#000000';
    ctx.font = `${h * 0.018}px Arial`;
    
    switch(i) {
      case 0:
        if(trait === 'herbicide-resistance') {
          ctx.fillText('• Target: EPSPS gene from Agrobacterium', w * 0.12, h * (step.y + 0.07));
          ctx.fillText('• Confers glyphosate resistance', w * 0.12, h * (step.y + 0.10));
        } else if(trait === 'pest-resistance') {
          ctx.fillText('• Target: Bt toxin gene from Bacillus thuringiensis', w * 0.12, h * (step.y + 0.07));
          ctx.fillText('• Kills specific insect pests', w * 0.12, h * (step.y + 0.10));
        } else if(trait === 'nutrient-enhancement') {
          ctx.fillText('• Target: Beta-carotene biosynthesis genes', w * 0.12, h * (step.y + 0.07));
          ctx.fillText('• Increases vitamin A content', w * 0.12, h * (step.y + 0.10));
        }
        break;
        
      case 1:
        ctx.fillText('• Extract DNA from source organism', w * 0.12, h * (step.y + 0.07));
        ctx.fillText('• Use PCR to amplify target gene', w * 0.12, h * (step.y + 0.10));
        break;
        
      case 2:
        ctx.fillText('• Insert gene into plasmid or viral vector', w * 0.12, h * (step.y + 0.07));
        ctx.fillText('• Add promoter, selectable marker, terminator', w * 0.12, h * (step.y + 0.10));
        break;
        
      case 3:
        if(organism === 'plant') {
          ctx.fillText('• Agrobacterium-mediated or gene gun', w * 0.12, h * (step.y + 0.07));
          ctx.fillText('• Introduce DNA into plant cells/tissue', w * 0.12, h * (step.y + 0.10));
        } else if(organism === 'bacteria') {
          ctx.fillText('• Electroporation or heat shock', w * 0.12, h * (step.y + 0.07));
          ctx.fillText('• Transform bacterial cells with plasmid', w * 0.12, h * (step.y + 0.10));
        }
        break;
        
      case 4:
        ctx.fillText('• Screen for successful transformants', w * 0.12, h * (step.y + 0.07));
        ctx.fillText('• Verify gene expression and trait function', w * 0.12, h * (step.y + 0.10));
        break;
    }
    
    // Arrow between steps
    if(i < steps.length - 1) {
      ctx.strokeStyle = '#95A5A6';
      ctx.lineWidth = 3;
      ctx.beginPath();
      ctx.moveTo(w * 0.50, h * (step.y + 0.12));
      ctx.lineTo(w * 0.50, h * steps[i + 1].y);
      ctx.stroke();
      
      this.drawArrowhead(ctx, w * 0.50, h * steps[i + 1].y, Math.PI / 2, h * 0.03, '#95A5A6');
    }
    
    // Visual representation for each step
    const visualX = w * 0.70;
    const visualY = h * (step.y + 0.06);
    
    switch(i) {
      case 0:
        // DNA strand with highlighted gene
        this.drawDNAStrand(ctx, visualX, visualY, w * 0.15, h * 0.02);
        ctx.fillStyle = '#E74C3C';
        ctx.fillRect(visualX + w * 0.05, visualY - h * 0.005, w * 0.04, h * 0.03);
        ctx.fillStyle = '#FFFFFF';
        ctx.font = `${h * 0.012}px Arial`;
        ctx.fillText('Gene', visualX + w * 0.052, visualY + h * 0.015);
        break;
        
      case 1:
        // Isolated gene
        ctx.fillStyle = '#9B59B6';
        ctx.fillRect(visualX + w * 0.05, visualY, w * 0.06, h * 0.03);
        ctx.strokeStyle = '#7D3C98';
        ctx.lineWidth = 2;
        ctx.strokeRect(visualX + w * 0.05, visualY, w * 0.06, h * 0.03);
        break;
        
      case 2:
        // Plasmid with gene
        this.drawPlasmid(ctx, visualX + w * 0.075, visualY + h * 0.015, w * 0.04, '#E74C3C');
        ctx.fillStyle = '#9B59B6';
        ctx.fillRect(visualX + w * 0.065, visualY + h * 0.005, w * 0.02, h * 0.01);
        break;
        
      case 3:
        // Cell with DNA
        if(organism === 'plant') {
          this.drawPlantCell(ctx, visualX + w * 0.075, visualY + h * 0.015, w * 0.05, h * 0.05);
        } else {
          this.drawBacterialCell(ctx, visualX + w * 0.075, visualY + h * 0.015, w * 0.04, h * 0.03);
        }
        break;
        
      case 4:
        // Multiple GMO organisms
        for(let j = 0; j < 3; j++) {
          if(organism === 'plant') {
            this.drawPlantCell(ctx, visualX + w * (0.05 + j * 0.04), visualY + h * 0.015, w * 0.03, h * 0.03);
          } else {
            this.drawBacterialCell(ctx, visualX + w * (0.05 + j * 0.04), visualY + h * 0.015, w * 0.03, h * 0.02);
          }
          
          // Checkmark
          ctx.fillStyle = '#27AE60';
          ctx.font = `${h * 0.02}px Arial bold`;
          ctx.fillText('✓', visualX + w * (0.04 + j * 0.04), visualY + h * 0.005);
        }
        break;
    }
  });
  
  // Applications/Benefits box
  ctx.fillStyle = '#E8F8F5';
  ctx.fillRect(w * 0.10, h * 0.90, w * 0.80, h * 0.08);
  ctx.strokeStyle = '#27AE60';
  ctx.lineWidth = 2;
  ctx.strokeRect(w * 0.10, h * 0.90, w * 0.80, h * 0.08);
  
  ctx.fillStyle = '#27AE60';
  ctx.font = `${h * 0.02}px Arial bold`;
  ctx.fillText('Applications:', w * 0.12, h * 0.93);
  
  ctx.fillStyle = '#000000';
  ctx.font = `${h * 0.018}px Arial`;
  
  if(trait === 'herbicide-resistance') {
    ctx.fillText('Reduced herbicide use, easier weed control, increased crop yield', w * 0.25, h * 0.93);
  } else if(trait === 'pest-resistance') {
    ctx.fillText('Reduced pesticide application, lower costs, environmentally friendly', w * 0.25, h * 0.93);
  } else if(trait === 'nutrient-enhancement') {
    ctx.fillText('Address malnutrition (e.g., Golden Rice with Vitamin A)', w * 0.25, h * 0.93);
  } else if(trait === 'pharmaceutical') {
    ctx.fillText('Production of medicines, vaccines, and therapeutic proteins', w * 0.25, h * 0.93);
  }
  
  ctx.fillText('GMO crops cover >190M hectares globally (2020)', w * 0.25, h * 0.96);
}



// ======== DNA Technology Diagrams ==========================

  // ===== DNA FINGERPRINTING METHODS =====
  
  static drawDNAFingerprinting(ctx, x, y, width, height, method, application) {
    ctx.save();
    ctx.translate(x, y);
    
    switch(method) {
      case 'rflp':
        this.drawRFLP(ctx, width, height, application);
        break;
      case 'str':
        this.drawSTR(ctx, width, height, application);
        break;
      case 'vntr':
        this.drawVNTR(ctx, width, height, application);
        break;
      case 'comparison':
        this.drawComparison(ctx, width, height, application);
        break;
    }
    
    ctx.restore();
  }

  static drawRFLP(ctx, width, height, application) {
    const w = width, h = height;
    
    // RFLP (Restriction Fragment Length Polymorphism)
    // Draw gel electrophoresis pattern with varying band positions
    
    // Background gel
    const gelGradient = ctx.createLinearGradient(0, 0, 0, h);
    gelGradient.addColorStop(0, '#E8F4F8');
    gelGradient.addColorStop(1, '#D0E8F0');
    ctx.fillStyle = gelGradient;
    ctx.fillRect(w * 0.1, h * 0.15, w * 0.8, h * 0.7);
    
    // Border
    ctx.strokeStyle = '#2C3E50';
    ctx.lineWidth = 3;
    ctx.strokeRect(w * 0.1, h * 0.15, w * 0.8, h * 0.7);
    
    // Wells at top
    const lanes = application === 'forensics' ? 5 : 4;
    const laneWidth = (w * 0.8) / lanes;
    
    for(let i = 0; i < lanes; i++) {
      const laneX = w * 0.1 + i * laneWidth + laneWidth / 2;
      
      // Well
      ctx.fillStyle = '#34495E';
      ctx.fillRect(laneX - w * 0.02, h * 0.16, w * 0.04, h * 0.03);
      
      // DNA bands (varying positions for polymorphism)
      const bandPositions = this.generateRFLPBands(i, application);
      bandPositions.forEach(pos => {
        ctx.fillStyle = '#8E44AD';
        ctx.globalAlpha = 0.8;
        ctx.fillRect(laneX - w * 0.025, h * pos, w * 0.05, h * 0.015);
        ctx.globalAlpha = 1.0;
        
        // Band glow
        ctx.strokeStyle = '#9B59B6';
        ctx.lineWidth = 2;
        ctx.strokeRect(laneX - w * 0.025, h * pos, w * 0.05, h * 0.015);
      });
    }
    
    // Molecular weight markers on left
    ctx.fillStyle = '#2C3E50';
    ctx.font = `${h * 0.025}px Arial`;
    ctx.textAlign = 'right';
    const markers = ['10kb', '8kb', '6kb', '4kb', '2kb', '1kb'];
    markers.forEach((marker, idx) => {
      const markerY = h * (0.25 + idx * 0.1);
      ctx.fillText(marker, w * 0.08, markerY);
      
      // Marker line
      ctx.strokeStyle = '#95A5A6';
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.moveTo(w * 0.09, markerY - h * 0.01);
      ctx.lineTo(w * 0.1, markerY - h * 0.01);
      ctx.stroke();
    });
    
    // Labels
    ctx.textAlign = 'center';
    ctx.fillStyle = '#2C3E50';
    ctx.font = `${h * 0.03}px Arial`;
    const labels = application === 'forensics' 
      ? ['Crime Scene', 'Suspect 1', 'Suspect 2', 'Victim', 'Control']
      : application === 'paternity'
      ? ['Mother', 'Child', 'Father', 'Control']
      : ['Sample 1', 'Sample 2', 'Sample 3', 'Control'];
    
    for(let i = 0; i < lanes; i++) {
      const laneX = w * 0.1 + i * laneWidth + laneWidth / 2;
      ctx.fillText(labels[i] || `Lane ${i+1}`, laneX, h * 0.1);
    }
    
    // Title
    ctx.font = `bold ${h * 0.04}px Arial`;
    ctx.fillText('RFLP Analysis', w * 0.5, h * 0.05);
  }

  static drawSTR(ctx, width, height, application) {
    const w = width, h = height;
    
    // STR (Short Tandem Repeat) - Electropherogram style
    
    // Background
    ctx.fillStyle = '#FFFFFF';
    ctx.fillRect(0, 0, w, h);
    
    // Grid lines
    ctx.strokeStyle = '#E0E0E0';
    ctx.lineWidth = 1;
    for(let i = 0; i <= 10; i++) {
      ctx.beginPath();
      ctx.moveTo(w * 0.1, h * (0.15 + i * 0.07));
      ctx.lineTo(w * 0.9, h * (0.15 + i * 0.07));
      ctx.stroke();
    }
    
    // Draw multiple STR loci
    const loci = application === 'forensics' 
      ? ['D3S1358', 'vWA', 'FGA', 'D8S1179']
      : ['CSF1PO', 'D13S317', 'D16S539', 'D18S51'];
    
    loci.forEach((locus, idx) => {
      const yOffset = h * (0.2 + idx * 0.18);
      
      // Locus label
      ctx.fillStyle = '#2C3E50';
      ctx.font = `bold ${h * 0.025}px Arial`;
      ctx.textAlign = 'left';
      ctx.fillText(locus, w * 0.02, yOffset);
      
      // Draw electropherogram peaks
      this.drawSTRPeaks(ctx, w * 0.15, yOffset, w * 0.7, h * 0.12, idx);
    });
    
    // X-axis (base pair size)
    ctx.strokeStyle = '#2C3E50';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(w * 0.15, h * 0.88);
    ctx.lineTo(w * 0.85, h * 0.88);
    ctx.stroke();
    
    // Base pair labels
    ctx.fillStyle = '#2C3E50';
    ctx.font = `${h * 0.02}px Arial`;
    ctx.textAlign = 'center';
    for(let i = 0; i <= 5; i++) {
      const x = w * (0.15 + i * 0.14);
      const bp = 100 + i * 50;
      ctx.fillText(`${bp}bp`, x, h * 0.93);
    }
    
    // Title
    ctx.font = `bold ${h * 0.04}px Arial`;
    ctx.fillText('STR Profile Analysis', w * 0.5, h * 0.08);
  }

  static drawVNTR(ctx, width, height, application) {
    const w = width, h = height;
    
    // VNTR (Variable Number Tandem Repeat)
    
    // Background
    const bgGradient = ctx.createLinearGradient(0, 0, 0, h);
    bgGradient.addColorStop(0, '#ECF0F1');
    bgGradient.addColorStop(1, '#BDC3C7');
    ctx.fillStyle = bgGradient;
    ctx.fillRect(0, 0, w, h);
    
    // Draw DNA minisatellite regions
    const samples = application === 'paternity' ? 3 : 4;
    const sampleHeight = h * 0.6 / samples;
    
    for(let i = 0; i < samples; i++) {
      const yPos = h * 0.2 + i * sampleHeight;
      
      // Sample label
      ctx.fillStyle = '#2C3E50';
      ctx.font = `${h * 0.025}px Arial`;
      ctx.textAlign = 'right';
      const sampleLabel = application === 'paternity'
        ? ['Mother', 'Child', 'Father'][i]
        : ['Sample ' + (i+1)];
      ctx.fillText(sampleLabel, w * 0.15, yPos + sampleHeight / 2);
      
      // Draw tandem repeats
      const repeatCount = this.getVNTRRepeatCount(i, application);
      const repeatWidth = w * 0.04;
      const startX = w * 0.2;
      
      for(let j = 0; j < repeatCount; j++) {
        const x = startX + j * (repeatWidth + w * 0.01);
        
        // Repeat unit
        const repeatGradient = ctx.createLinearGradient(x, yPos, x + repeatWidth, yPos + sampleHeight * 0.6);
        repeatGradient.addColorStop(0, '#3498DB');
        repeatGradient.addColorStop(1, '#2980B9');
        ctx.fillStyle = repeatGradient;
        ctx.fillRect(x, yPos + sampleHeight * 0.2, repeatWidth, sampleHeight * 0.6);
        
        // Border
        ctx.strokeStyle = '#1F618D';
        ctx.lineWidth = 2;
        ctx.strokeRect(x, yPos + sampleHeight * 0.2, repeatWidth, sampleHeight * 0.6);
      }
      
      // Allele size label
      ctx.fillStyle = '#2C3E50';
      ctx.font = `${h * 0.02}px Arial`;
      ctx.textAlign = 'left';
      ctx.fillText(`${repeatCount} repeats`, startX + repeatCount * (repeatWidth + w * 0.01) + w * 0.02, yPos + sampleHeight / 2);
    }
    
    // Title
    ctx.fillStyle = '#2C3E50';
    ctx.font = `bold ${h * 0.04}px Arial`;
    ctx.textAlign = 'center';
    ctx.fillText('VNTR Analysis', w * 0.5, h * 0.1);
    
    // Legend
    ctx.font = `${h * 0.022}px Arial`;
    ctx.fillText('Each block = one tandem repeat unit', w * 0.5, h * 0.95);
  }

  static drawComparison(ctx, width, height, application) {
    const w = width, h = height;
    
    // Side-by-side comparison view
    
    // Background
    ctx.fillStyle = '#F8F9FA';
    ctx.fillRect(0, 0, w, h);
    
    // Left panel - Sample A
    ctx.fillStyle = '#FFFFFF';
    ctx.fillRect(w * 0.05, h * 0.15, w * 0.4, h * 0.7);
    ctx.strokeStyle = '#2C3E50';
    ctx.lineWidth = 3;
    ctx.strokeRect(w * 0.05, h * 0.15, w * 0.4, h * 0.7);
    
    // Right panel - Sample B
    ctx.fillRect(w * 0.55, h * 0.15, w * 0.4, h * 0.7);
    ctx.strokeRect(w * 0.55, h * 0.15, w * 0.4, h * 0.7);
    
    // Draw matching bands
    const markers = 6;
    for(let i = 0; i < markers; i++) {
      const yPos = h * (0.25 + i * 0.1);
      const isMatch = application === 'forensics' ? (i % 2 === 0) : (i < 4);
      
      // Left band
      ctx.fillStyle = isMatch ? '#27AE60' : '#E74C3C';
      ctx.globalAlpha = 0.7;
      ctx.fillRect(w * 0.15, yPos, w * 0.2, h * 0.025);
      
      // Right band
      ctx.fillRect(w * 0.65, yPos, w * 0.2, h * 0.025);
      ctx.globalAlpha = 1.0;
      
      // Connection line if match
      if(isMatch) {
        ctx.strokeStyle = '#27AE60';
        ctx.lineWidth = 2;
        ctx.setLineDash([5, 5]);
        ctx.beginPath();
        ctx.moveTo(w * 0.45, yPos + h * 0.0125);
        ctx.lineTo(w * 0.55, yPos + h * 0.0125);
        ctx.stroke();
        ctx.setLineDash([]);
      }
    }
    
    // Labels
    ctx.fillStyle = '#2C3E50';
    ctx.font = `bold ${h * 0.03}px Arial`;
    ctx.textAlign = 'center';
    ctx.fillText(application === 'forensics' ? 'Crime Scene' : 'Sample A', w * 0.25, h * 0.1);
    ctx.fillText(application === 'forensics' ? 'Suspect' : 'Sample B', w * 0.75, h * 0.1);
    
    // Match percentage
    const matchPercent = application === 'forensics' ? 50 : 67;
    ctx.font = `bold ${h * 0.05}px Arial`;
    ctx.fillStyle = matchPercent > 60 ? '#27AE60' : '#E67E22';
    ctx.fillText(`${matchPercent}% Match`, w * 0.5, h * 0.93);
    
    // Title
    ctx.fillStyle = '#2C3E50';
    ctx.font = `bold ${h * 0.04}px Arial`;
    ctx.fillText('DNA Profile Comparison', w * 0.5, h * 0.05);
  }

  // ===== GEL ELECTROPHORESIS FORENSIC =====
  
  static drawGelElectrophoresisForensic(ctx, x, y, width, height, sample, interpretation) {
    ctx.save();
    ctx.translate(x, y);
    
    const w = width, h = height;
    
    // Draw gel apparatus
    this.drawForensicGelApparatus(ctx, w, h);
    
    // Draw samples based on type
    switch(sample) {
      case 'crime-scene':
        this.drawCrimeSceneSample(ctx, w, h, interpretation);
        break;
      case 'suspects':
        this.drawSuspectsSample(ctx, w, h, interpretation);
        break;
      case 'victim':
        this.drawVictimSample(ctx, w, h, interpretation);
        break;
      case 'all':
        this.drawAllSamples(ctx, w, h, interpretation);
        break;
    }
    
    ctx.restore();
  }

  static drawForensicGelApparatus(ctx, w, h) {
    // Gel background
    const gelGradient = ctx.createLinearGradient(w * 0.15, 0, w * 0.85, 0);
    gelGradient.addColorStop(0, '#1A1A2E');
    gelGradient.addColorStop(0.5, '#16213E');
    gelGradient.addColorStop(1, '#1A1A2E');
    ctx.fillStyle = gelGradient;
    ctx.fillRect(w * 0.15, h * 0.2, w * 0.7, h * 0.6);
    
    // UV light effect
    ctx.shadowColor = '#00D9FF';
    ctx.shadowBlur = 20;
    ctx.strokeStyle = '#00D9FF';
    ctx.lineWidth = 3;
    ctx.strokeRect(w * 0.15, h * 0.2, w * 0.7, h * 0.6);
    ctx.shadowBlur = 0;
    
    // Electrodes
    ctx.fillStyle = '#C0C0C0';
    ctx.fillRect(w * 0.12, h * 0.18, w * 0.02, h * 0.64);
    ctx.fillRect(w * 0.86, h * 0.18, w * 0.02, h * 0.64);
    
    // Electrode labels
    ctx.fillStyle = '#FFFFFF';
    ctx.font = `bold ${h * 0.03}px Arial`;
    ctx.textAlign = 'center';
    ctx.fillText('(-)', w * 0.13, h * 0.15);
    ctx.fillText('(+)', w * 0.87, h * 0.15);
  }

  static drawAllSamples(ctx, w, h, interpretation) {
    const lanes = [
      { label: 'Ladder', x: 0.2, isLadder: true },
      { label: 'Evidence', x: 0.35, bands: [0.3, 0.45, 0.6, 0.72] },
      { label: 'Suspect 1', x: 0.5, bands: [0.3, 0.45, 0.6, 0.72] },
      { label: 'Suspect 2', x: 0.65, bands: [0.25, 0.4, 0.55, 0.68] },
      { label: 'Victim', x: 0.8, bands: [0.28, 0.42, 0.58, 0.7] }
    ];
    
    lanes.forEach(lane => {
      // Lane label
      ctx.fillStyle = '#FFFFFF';
      ctx.font = `${h * 0.022}px Arial`;
      ctx.textAlign = 'center';
      ctx.fillText(lane.label, w * lane.x, h * 0.17);
      
      if(lane.isLadder) {
        // DNA ladder
        for(let i = 0; i < 8; i++) {
          const bandY = h * (0.25 + i * 0.07);
          ctx.fillStyle = '#00FF00';
          ctx.globalAlpha = 0.8;
          ctx.fillRect(w * lane.x - w * 0.02, bandY, w * 0.04, h * 0.012);
          
          // Size label
          ctx.globalAlpha = 1.0;
          ctx.fillStyle = '#FFFFFF';
          ctx.font = `${h * 0.018}px Arial`;
          ctx.textAlign = 'left';
          ctx.fillText(`${1000 - i * 100}bp`, w * 0.88, bandY + h * 0.008);
        }
      } else {
        // Sample bands
        lane.bands.forEach(bandPos => {
          const isMatch = interpretation === 'matching' && lane.label === 'Suspect 1';
          ctx.fillStyle = isMatch ? '#00FF00' : '#FF00FF';
          ctx.globalAlpha = 0.9;
          ctx.shadowColor = isMatch ? '#00FF00' : '#FF00FF';
          ctx.shadowBlur = 15;
          ctx.fillRect(w * lane.x - w * 0.025, h * (0.2 + bandPos * 0.5), w * 0.05, h * 0.015);
          ctx.shadowBlur = 0;
          ctx.globalAlpha = 1.0;
        });
      }
    });
    
    // Interpretation overlay
    if(interpretation === 'matching') {
      ctx.fillStyle = 'rgba(0, 255, 0, 0.1)';
      ctx.fillRect(w * 0.32, h * 0.2, w * 0.16, h * 0.6);
      ctx.fillRect(w * 0.47, h * 0.2, w * 0.16, h * 0.6);
      
      ctx.strokeStyle = '#00FF00';
      ctx.lineWidth = 3;
      ctx.strokeRect(w * 0.32, h * 0.2, w * 0.16, h * 0.6);
      ctx.strokeRect(w * 0.47, h * 0.2, w * 0.16, h * 0.6);
      
      // Match indicator
      ctx.fillStyle = '#00FF00';
      ctx.font = `bold ${h * 0.04}px Arial`;
      ctx.textAlign = 'center';
      ctx.fillText('MATCH CONFIRMED', w * 0.5, h * 0.88);
    }
  }

  static drawCrimeSceneSample(ctx, w, h, interpretation) {
    // Focus on crime scene evidence
    ctx.fillStyle = '#FFFFFF';
    ctx.font = `bold ${h * 0.035}px Arial`;
    ctx.textAlign = 'center';
    ctx.fillText('CRIME SCENE EVIDENCE', w * 0.5, h * 0.15);
    
    // Single lane with detailed bands
    const bands = [
      { y: 0.3, size: '850bp', intensity: 0.9 },
      { y: 0.42, size: '620bp', intensity: 1.0 },
      { y: 0.55, size: '440bp', intensity: 0.85 },
      { y: 0.68, size: '280bp', intensity: 0.95 },
      { y: 0.78, size: '150bp', intensity: 0.7 }
    ];
    
    bands.forEach(band => {
      ctx.fillStyle = '#FF00FF';
      ctx.globalAlpha = band.intensity;
      ctx.shadowColor = '#FF00FF';
      ctx.shadowBlur = 20;
      ctx.fillRect(w * 0.45, h * (0.2 + band.y * 0.7), w * 0.1, h * 0.02);
      ctx.shadowBlur = 0;
      ctx.globalAlpha = 1.0;
      
      // Band label
      ctx.fillStyle = '#FFFFFF';
      ctx.font = `${h * 0.02}px Arial`;
      ctx.textAlign = 'left';
      ctx.fillText(band.size, w * 0.58, h * (0.21 + band.y * 0.7));
    });
  }

  static drawSuspectsSample(ctx, w, h, interpretation) {
    // Multiple suspect comparison
    const suspects = ['Suspect 1', 'Suspect 2', 'Suspect 3'];
    const xPositions = [0.25, 0.5, 0.75];
    
    suspects.forEach((suspect, idx) => {
      ctx.fillStyle = '#FFFFFF';
      ctx.font = `${h * 0.025}px Arial`;
      ctx.textAlign = 'center';
      ctx.fillText(suspect, w * xPositions[idx], h * 0.17);
      
      // Different band patterns
      const bandCount = 4 + idx;
      for(let i = 0; i < bandCount; i++) {
        const yPos = h * (0.25 + i * 0.12);
        ctx.fillStyle = '#00FFFF';
        ctx.globalAlpha = 0.85;
        ctx.shadowColor = '#00FFFF';
        ctx.shadowBlur = 12;
        ctx.fillRect(w * xPositions[idx] - w * 0.03, yPos, w * 0.06, h * 0.015);
        ctx.shadowBlur = 0;
        ctx.globalAlpha = 1.0;
      }
    });
  }

  static drawVictimSample(ctx, w, h, interpretation) {
    // Victim sample with quality indicators
    ctx.fillStyle = '#FFFFFF';
    ctx.font = `bold ${h * 0.035}px Arial`;
    ctx.textAlign = 'center';
    ctx.fillText('VICTIM DNA PROFILE', w * 0.5, h * 0.15);
    
    const bands = [0.28, 0.42, 0.58, 0.7];
    bands.forEach(bandY => {
      ctx.fillStyle = '#FFFF00';
      ctx.globalAlpha = 0.9;
      ctx.shadowColor = '#FFFF00';
      ctx.shadowBlur = 18;
      ctx.fillRect(w * 0.45, h * (0.2 + bandY * 0.7), w * 0.1, h * 0.018);
      ctx.shadowBlur = 0;
      ctx.globalAlpha = 1.0;
    });
    
    // Quality indicator
    ctx.fillStyle = '#00FF00';
    ctx.font = `${h * 0.025}px Arial`;
    ctx.fillText('Quality: Excellent', w * 0.5, h * 0.88);
  }

  // ===== STR ANALYSIS =====
  
  static drawSTRAnalysis(ctx, x, y, width, height, locus, profile) {
    ctx.save();
    ctx.translate(x, y);
    
    const w = width, h = height;
    
    switch(profile) {
      case 'electropherogram':
        this.drawElectropherogram(ctx, w, h, locus);
        break;
      case 'allele-calls':
        this.drawAlleleCalls(ctx, w, h, locus);
        break;
      case 'comparison':
        this.drawSTRComparison(ctx, w, h, locus);
        break;
      case 'statistics':
        this.drawSTRStatistics(ctx, w, h, locus);
        break;
    }
    
    ctx.restore();
  }

  static drawElectropherogram(ctx, w, h, locus) {
    // Electropherogram view with colored peaks
    
    // Background
    ctx.fillStyle = '#FFFFFF';
    ctx.fillRect(0, 0, w, h);
    
    // Grid
    ctx.strokeStyle = '#E0E0E0';
    ctx.lineWidth = 1;
    for(let i = 0; i <= 10; i++) {
      ctx.beginPath();
      ctx.moveTo(w * 0.1, h * (0.1 + i * 0.08));
      ctx.lineTo(w * 0.9, h * (0.1 + i * 0.08));
      ctx.stroke();
    }
    
    // Y-axis
    ctx.strokeStyle = '#2C3E50';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(w * 0.1, h * 0.1);
    ctx.lineTo(w * 0.1, h * 0.9);
    ctx.stroke();
    
    // X-axis
    ctx.beginPath();
    ctx.moveTo(w * 0.1, h * 0.9);
    ctx.lineTo(w * 0.9, h * 0.9);
    ctx.stroke();
    
    // Y-axis label (RFU - Relative Fluorescence Units)
    ctx.fillStyle = '#2C3E50';
    ctx.font = `${h * 0.025}px Arial`;
    ctx.save();
    ctx.translate(w * 0.03, h * 0.5);
    ctx.rotate(-Math.PI / 2);
    ctx.textAlign = 'center';
    ctx.fillText('RFU (Relative Fluorescence Units)', 0, 0);
    ctx.restore();
    
    // X-axis label
    ctx.textAlign = 'center';
    ctx.fillText('Fragment Size (base pairs)', w * 0.5, h * 0.96);
    
    // Draw peaks for different loci
    const locusCount = locus === 'single' ? 1 : locus === 'multiple' ? 3 : 
                      locus === 'codis-13' ? 4 : 5;
    
    const colors = ['#FF0000', '#00FF00', '#0000FF', '#FFFF00', '#FF00FF'];
    
    for(let i = 0; i < locusCount; i++) {
      const color = colors[i % colors.length];
      const offset = i * 0.15;
      
      // Draw two allele peaks (heterozygous)
      this.drawPeak(ctx, w * (0.3 + offset), h * 0.9, w * 0.05, h * 0.5, color);
      this.drawPeak(ctx, w * (0.4 + offset), h * 0.9, w * 0.05, h * 0.6, color);
      
      // Allele labels
      ctx.fillStyle = '#2C3E50';
      ctx.font = `${h * 0.02}px Arial`;
      ctx.textAlign = 'center';
      ctx.fillText(`${12 + i * 2}`, w * (0.3 + offset), h * 0.35);
      ctx.fillText(`${14 + i * 2}`, w * (0.4 + offset), h * 0.25);
    }
    
    // Title
    ctx.fillStyle = '#2C3E50';
    ctx.font = `bold ${h * 0.035}px Arial`;
    ctx.fillText('STR Electropherogram', w * 0.5, h * 0.05);
  }

  static drawAlleleCalls(ctx, w, h, locus) {
    // Table of allele calls
    
    ctx.fillStyle = '#F8F9FA';
    ctx.fillRect(0, 0, w, h);
    
    // Title
    ctx.fillStyle = '#2C3E50';
    ctx.font = `bold ${h * 0.04}px Arial`;
    ctx.textAlign = 'center';
    ctx.fillText('STR Allele Calls', w * 0.5, h * 0.08);
    
    // Table header
    ctx.fillStyle = '#34495E';
    ctx.fillRect(w * 0.1, h * 0.15, w * 0.8, h * 0.06);
    
    ctx.fillStyle = '#FFFFFF';
    ctx.font = `bold ${h * 0.025}px Arial`;
    ctx.textAlign = 'center';
    ctx.fillText('Locus', w * 0.25, h * 0.19);
    ctx.fillText('Allele 1', w * 0.5, h * 0.19);
    ctx.fillText('Allele 2', w * 0.75, h * 0.19);
    
    // Table rows
    const lociData = locus === 'single' 
      ? [{ name: 'D3S1358', a1: 15, a2: 18 }]
      : locus === 'multiple'
      ? [
          { name: 'D3S1358', a1: 15, a2: 18 },
          { name: 'vWA', a1: 14, a2: 17 },
          { name: 'FGA', a1: 22, a2: 24 }
        ]
      : locus === 'codis-13'
      ? [
          { name: 'D3S1358', a1: 15, a2: 18 },
          { name: 'vWA', a1: 14, a2: 17 },
          { name: 'FGA', a1: 22, a2: 24 },
          { name: 'D8S1179', a1: 13, a2: 14 },
          { name: 'D21S11', a1: 28, a2: 30 },
          { name: 'D18S51', a1: 12, a2: 15 },
          { name: 'D5S818', a1: 11, a2: 11 },
          { name: 'D13S317', a1: 11, a2: 12 },
          { name: 'D7S820', a1: 10, a2: 11 },
          { name: 'D16S539', a1: 11, a2: 12 },
          { name: 'THO1', a1: 6, a2: 9.3 },
          { name: 'TPOX', a1: 8, a2: 11 },
          { name: 'CSF1PO', a1: 10, a2: 12 }
        ]
      : [
          { name: 'D3S1358', a1: 15, a2: 18 },
          { name: 'vWA', a1: 14, a2: 17 },
          { name: 'FGA', a1: 22, a2: 24 },
          { name: 'D8S1179', a1: 13, a2: 14 },
          { name: 'D21S11', a1: 28, a2: 30 },
          { name: 'D18S51', a1: 12, a2: 15 },
          { name: 'D5S818', a1: 11, a2: 11 },
          { name: 'D13S317', a1: 11, a2: 12 },
          { name: 'D7S820', a1: 10, a2: 11 },
          { name: 'D16S539', a1: 11, a2: 12 },
          { name: 'THO1', a1: 6, a2: 9.3 },
          { name: 'TPOX', a1: 8, a2: 11 },
          { name: 'CSF1PO', a1: 10, a2: 12 },
          { name: 'Penta D', a1: 9, a2: 13 },
          { name: 'Penta E', a1: 7, a2: 12 },
          { name: 'D2S441', a1: 11, a2: 14 },
          { name: 'D19S433', a1: 13, a2: 14 },
          { name: 'D2S1338', a1: 17, a2: 23 },
          { name: 'D1S1656', a1: 15, a2: 16 },
          { name: 'D12S391', a1: 18, a2: 22 }
        ];
    
    const maxRows = Math.min(lociData.length, 12);
    const rowHeight = Math.min(h * 0.05, (h * 0.7) / maxRows);
    
    lociData.slice(0, maxRows).forEach((data, idx) => {
      const yPos = h * 0.21 + idx * rowHeight;
      
      // Alternating row colors
      if(idx % 2 === 0) {
        ctx.fillStyle = '#ECF0F1';
        ctx.fillRect(w * 0.1, yPos, w * 0.8, rowHeight);
      }
      
      // Row border
      ctx.strokeStyle = '#BDC3C7';
      ctx.lineWidth = 1;
      ctx.strokeRect(w * 0.1, yPos, w * 0.8, rowHeight);
      
      // Data
      ctx.fillStyle = '#2C3E50';
      ctx.font = `${Math.min(h * 0.022, rowHeight * 0.6)}px Arial`;
      ctx.textAlign = 'center';
      ctx.fillText(data.name, w * 0.25, yPos + rowHeight * 0.65);
      ctx.fillText(data.a1.toString(), w * 0.5, yPos + rowHeight * 0.65);
      ctx.fillText(data.a2.toString(), w * 0.75, yPos + rowHeight * 0.65);
    });
    
    // Footer note
    ctx.fillStyle = '#7F8C8D';
    ctx.font = `italic ${h * 0.02}px Arial`;
    ctx.textAlign = 'center';
    const footerY = Math.min(h * 0.93, h * 0.21 + maxRows * rowHeight + h * 0.05);
    ctx.fillText('Allele numbers represent repeat counts', w * 0.5, footerY);
  }

  static drawSTRComparison(ctx, w, h, locus) {
    // Side-by-side comparison
    
    ctx.fillStyle = '#FFFFFF';
    ctx.fillRect(0, 0, w, h);
    
    // Title
    ctx.fillStyle = '#2C3E50';
    ctx.font = `bold ${h * 0.04}px Arial`;
    ctx.textAlign = 'center';
    ctx.fillText('STR Profile Comparison', w * 0.5, h * 0.06);
    
    // Two panels
    ctx.strokeStyle = '#34495E';
    ctx.lineWidth = 3;
    ctx.strokeRect(w * 0.05, h * 0.15, w * 0.4, h * 0.7);
    ctx.strokeRect(w * 0.55, h * 0.15, w * 0.4, h * 0.7);
    
    // Panel labels
    ctx.fillStyle = '#2C3E50';
    ctx.font = `bold ${h * 0.028}px Arial`;
    ctx.fillText('Reference Sample', w * 0.25, h * 0.12);
    ctx.fillText('Unknown Sample', w * 0.75, h * 0.12);
    
    // Draw comparison bars
    const lociToCompare = locus === 'single' ? 1 : locus === 'multiple' ? 4 : 8;
    const barHeight = (h * 0.65) / lociToCompare;
    
    for(let i = 0; i < lociToCompare; i++) {
      const yPos = h * 0.16 + i * barHeight;
      const isMatch = i < lociToCompare - 1; // All but last match
      
      // Locus name
      ctx.fillStyle = '#7F8C8D';
      ctx.font = `${h * 0.02}px Arial`;
      ctx.textAlign = 'right';
      const locusNames = ['D3S1358', 'vWA', 'FGA', 'D8S1179', 'D21S11', 'D18S51', 'D5S818', 'D13S317'];
      ctx.fillText(locusNames[i], w * 0.03, yPos + barHeight * 0.5);
      
      // Left panel bars
      ctx.fillStyle = isMatch ? '#3498DB' : '#E74C3C';
      ctx.globalAlpha = 0.7;
      ctx.fillRect(w * 0.08, yPos + barHeight * 0.2, w * 0.15, barHeight * 0.3);
      ctx.fillRect(w * 0.25, yPos + barHeight * 0.2, w * 0.17, barHeight * 0.3);
      
      // Right panel bars
      ctx.fillStyle = isMatch ? '#3498DB' : '#95A5A6';
      ctx.fillRect(w * 0.58, yPos + barHeight * 0.2, w * 0.15, barHeight * 0.3);
      ctx.fillRect(w * 0.75, yPos + barHeight * 0.2, isMatch ? w * 0.17 : w * 0.12, barHeight * 0.3);
      ctx.globalAlpha = 1.0;
      
      // Match indicator
      if(isMatch) {
        ctx.strokeStyle = '#27AE60';
        ctx.lineWidth = 2;
        ctx.setLineDash([5, 3]);
        ctx.beginPath();
        ctx.moveTo(w * 0.45, yPos + barHeight * 0.35);
        ctx.lineTo(w * 0.55, yPos + barHeight * 0.35);
        ctx.stroke();
        ctx.setLineDash([]);
        
        // Checkmark
        ctx.fillStyle = '#27AE60';
        ctx.font = `bold ${h * 0.025}px Arial`;
        ctx.textAlign = 'center';
        ctx.fillText('✓', w * 0.5, yPos + barHeight * 0.4);
      } else {
        // X mark
        ctx.fillStyle = '#E74C3C';
        ctx.font = `bold ${h * 0.025}px Arial`;
        ctx.textAlign = 'center';
        ctx.fillText('✗', w * 0.5, yPos + barHeight * 0.4);
      }
    }
    
    // Match statistics
    const matchPercent = Math.round(((lociToCompare - 1) / lociToCompare) * 100);
    ctx.fillStyle = matchPercent > 90 ? '#27AE60' : matchPercent > 70 ? '#F39C12' : '#E74C3C';
    ctx.font = `bold ${h * 0.045}px Arial`;
    ctx.textAlign = 'center';
    ctx.fillText(`${matchPercent}% Match`, w * 0.5, h * 0.92);
  }

  static drawSTRStatistics(ctx, w, h, locus) {
    // Statistical analysis view
    
    ctx.fillStyle = '#F0F3F4';
    ctx.fillRect(0, 0, w, h);
    
    // Title
    ctx.fillStyle = '#2C3E50';
    ctx.font = `bold ${h * 0.04}px Arial`;
    ctx.textAlign = 'center';
    ctx.fillText('STR Statistical Analysis', w * 0.5, h * 0.06);
    
    // Random Match Probability Box
    ctx.fillStyle = '#FFFFFF';
    ctx.fillRect(w * 0.05, h * 0.12, w * 0.4, h * 0.35);
    ctx.strokeStyle = '#34495E';
    ctx.lineWidth = 2;
    ctx.strokeRect(w * 0.05, h * 0.12, w * 0.4, h * 0.35);
    
    ctx.fillStyle = '#34495E';
    ctx.font = `bold ${h * 0.028}px Arial`;
    ctx.fillText('Random Match Probability', w * 0.25, h * 0.16);
    
    const rmp = locus === 'single' ? '1 in 100' : 
                locus === 'multiple' ? '1 in 10,000' :
                locus === 'codis-13' ? '1 in 1 trillion' :
                '1 in 1 quintillion';
    
    ctx.fillStyle = '#E74C3C';
    ctx.font = `bold ${h * 0.05}px Arial`;
    ctx.fillText(rmp, w * 0.25, h * 0.28);
    
    // Likelihood Ratio
    ctx.fillStyle = '#FFFFFF';
    ctx.fillRect(w * 0.55, h * 0.12, w * 0.4, h * 0.35);
    ctx.strokeStyle = '#34495E';
    ctx.strokeRect(w * 0.55, h * 0.12, w * 0.4, h * 0.35);
    
    ctx.fillStyle = '#34495E';
    ctx.font = `bold ${h * 0.028}px Arial`;
    ctx.fillText('Likelihood Ratio', w * 0.75, h * 0.16);
    
    const lr = locus === 'single' ? '100:1' : 
               locus === 'multiple' ? '10,000:1' :
               locus === 'codis-13' ? '1 trillion:1' :
               '1 quintillion:1';
    
    ctx.fillStyle = '#27AE60';
    ctx.font = `bold ${h * 0.05}px Arial`;
    ctx.fillText(lr, w * 0.75, h * 0.28);
    
    // Allele Frequency Chart
    ctx.fillStyle = '#FFFFFF';
    ctx.fillRect(w * 0.05, h * 0.52, w * 0.9, h * 0.42);
    ctx.strokeStyle = '#34495E';
    ctx.strokeRect(w * 0.05, h * 0.52, w * 0.9, h * 0.42);
    
    ctx.fillStyle = '#34495E';
    ctx.font = `bold ${h * 0.028}px Arial`;
    ctx.textAlign = 'center';
    ctx.fillText('Allele Frequency Distribution', w * 0.5, h * 0.56);
    
    // Bar chart
    const alleles = [10, 11, 12, 13, 14, 15, 16, 17, 18, 19];
    const frequencies = [0.05, 0.08, 0.15, 0.22, 0.25, 0.12, 0.08, 0.03, 0.01, 0.01];
    const barWidth = (w * 0.8) / alleles.length;
    
    alleles.forEach((allele, idx) => {
      const barX = w * 0.1 + idx * barWidth;
      const barH = frequencies[idx] * h * 0.25;
      
      // Bar
      const barGradient = ctx.createLinearGradient(barX, h * 0.87 - barH, barX, h * 0.87);
      barGradient.addColorStop(0, '#3498DB');
      barGradient.addColorStop(1, '#2980B9');
      ctx.fillStyle = barGradient;
      ctx.fillRect(barX, h * 0.87 - barH, barWidth * 0.8, barH);
      
      // Border
      ctx.strokeStyle = '#2C3E50';
      ctx.lineWidth = 1;
      ctx.strokeRect(barX, h * 0.87 - barH, barWidth * 0.8, barH);
      
      // Allele label
      ctx.fillStyle = '#2C3E50';
      ctx.font = `${h * 0.018}px Arial`;
      ctx.textAlign = 'center';
      ctx.fillText(allele.toString(), barX + barWidth * 0.4, h * 0.91);
      
      // Frequency label
      if(frequencies[idx] > 0.1) {
        ctx.fillStyle = '#FFFFFF';
        ctx.font = `bold ${h * 0.015}px Arial`;
        ctx.fillText((frequencies[idx] * 100).toFixed(0) + '%', barX + barWidth * 0.4, h * 0.87 - barH / 2);
      }
    });
    
    // X-axis label
    ctx.fillStyle = '#2C3E50';
    ctx.font = `${h * 0.02}px Arial`;
    ctx.textAlign = 'center';
    ctx.fillText('Allele (repeat count)', w * 0.5, h * 0.95);
  }

  // ===== FORENSIC COMPARISON =====
  
  static drawForensicComparison(ctx, x, y, width, height, evidence, outcome) {
    ctx.save();
    ctx.translate(x, y);
    
    const w = width, h = height;
    
    switch(outcome) {
      case 'match':
        this.drawMatchComparison(ctx, w, h, evidence);
        break;
      case 'exclusion':
        this.drawExclusionComparison(ctx, w, h, evidence);
        break;
      case 'inconclusive':
        this.drawInconclusiveComparison(ctx, w, h, evidence);
        break;
      case 'partial':
        this.drawPartialComparison(ctx, w, h, evidence);
        break;
    }
    
    ctx.restore();
  }

  static drawMatchComparison(ctx, w, h, evidence) {
    // Background
    ctx.fillStyle = '#E8F8F5';
    ctx.fillRect(0, 0, w, h);
    
    // Title
    ctx.fillStyle = '#27AE60';
    ctx.font = `bold ${h * 0.045}px Arial`;
    ctx.textAlign = 'center';
    ctx.fillText('DNA MATCH CONFIRMED', w * 0.5, h * 0.06);
    
    // Evidence type badge
    const evidenceLabels = {
      'single-source': 'Single Source DNA',
      'mixture': 'DNA Mixture',
      'degraded': 'Degraded Sample',
      'touch-dna': 'Touch DNA'
    };
    
    ctx.fillStyle = '#34495E';
    ctx.fillRect(w * 0.35, h * 0.1, w * 0.3, h * 0.05);
    ctx.fillStyle = '#FFFFFF';
    ctx.font = `${h * 0.025}px Arial`;
    ctx.fillText(evidenceLabels[evidence] || 'Evidence Type', w * 0.5, h * 0.135);
    
    // Two DNA profiles side by side
    const profiles = [
      { label: 'Crime Scene', x: 0.15, color: '#E74C3C' },
      { label: 'Suspect', x: 0.6, color: '#27AE60' }
    ];
    
    profiles.forEach(profile => {
      // Profile box
      ctx.fillStyle = '#FFFFFF';
      ctx.fillRect(w * profile.x, h * 0.2, w * 0.3, h * 0.5);
      ctx.strokeStyle = profile.color;
      ctx.lineWidth = 4;
      ctx.strokeRect(w * profile.x, h * 0.2, w * 0.3, h * 0.5);
      
      // Label
      ctx.fillStyle = profile.color;
      ctx.font = `bold ${h * 0.03}px Arial`;
      ctx.textAlign = 'center';
      ctx.fillText(profile.label, w * (profile.x + 0.15), h * 0.18);
      
      // STR markers (matching pattern)
      const markers = ['D3S1358', 'vWA', 'FGA', 'D8S1179', 'D21S11'];
      markers.forEach((marker, idx) => {
        const yPos = h * (0.25 + idx * 0.09);
        
        // Marker name
        ctx.fillStyle = '#2C3E50';
        ctx.font = `${h * 0.02}px Arial`;
        ctx.textAlign = 'left';
        ctx.fillText(marker, w * (profile.x + 0.02), yPos);
        
        // Allele bars
        ctx.fillStyle = profile.color;
        ctx.globalAlpha = 0.8;
        ctx.fillRect(w * (profile.x + 0.12), yPos - h * 0.015, w * 0.06, h * 0.02);
        ctx.fillRect(w * (profile.x + 0.2), yPos - h * 0.015, w * 0.08, h * 0.02);
        ctx.globalAlpha = 1.0;
        
        // Allele numbers
        ctx.fillStyle = '#FFFFFF';
        ctx.font = `bold ${h * 0.015}px Arial`;
        ctx.textAlign = 'center';
        ctx.fillText('15', w * (profile.x + 0.15), yPos);
        ctx.fillText('18', w * (profile.x + 0.24), yPos);
      });
    });
    
    // Connecting lines showing match
    ctx.strokeStyle = '#27AE60';
    ctx.lineWidth = 3;
    ctx.setLineDash([10, 5]);
    for(let i = 0; i < 5; i++) {
      const yPos = h * (0.25 + i * 0.09);
      ctx.beginPath();
      ctx.moveTo(w * 0.45, yPos);
      ctx.lineTo(w * 0.6, yPos);
      ctx.stroke();
      
      // Checkmark
      ctx.setLineDash([]);
      ctx.fillStyle = '#27AE60';
      ctx.font = `bold ${h * 0.03}px Arial`;
      ctx.textAlign = 'center';
      ctx.fillText('✓', w * 0.525, yPos + h * 0.005);
      ctx.setLineDash([10, 5]);
    }
    ctx.setLineDash([]);
    
    // Statistics
    ctx.fillStyle = '#FFFFFF';
    ctx.fillRect(w * 0.2, h * 0.75, w * 0.6, h * 0.15);
    ctx.strokeStyle = '#27AE60';
    ctx.lineWidth = 3;
    ctx.strokeRect(w * 0.2, h * 0.75, w * 0.6, h * 0.15);
    
    ctx.fillStyle = '#2C3E50';
    ctx.font = `${h * 0.025}px Arial`;
    ctx.textAlign = 'center';
    ctx.fillText('Match Probability:', w * 0.5, h * 0.8);
    
    ctx.fillStyle = '#27AE60';
    ctx.font = `bold ${h * 0.04}px Arial`;
    ctx.fillText('1 in 10 trillion', w * 0.5, h * 0.86);
  }

  static drawExclusionComparison(ctx, w, h, evidence) {
    // Background
    ctx.fillStyle = '#FADBD8';
    ctx.fillRect(0, 0, w, h);
    
    // Title
    ctx.fillStyle = '#E74C3C';
    ctx.font = `bold ${h * 0.045}px Arial`;
    ctx.textAlign = 'center';
    ctx.fillText('DNA EXCLUSION', w * 0.5, h * 0.06);
    
    // Evidence type
    ctx.fillStyle = '#34495E';
    ctx.fillRect(w * 0.3, h * 0.1, w * 0.4, h * 0.05);
    ctx.fillStyle = '#FFFFFF';
    ctx.font = `${h * 0.025}px Arial`;
    ctx.fillText('Suspect Excluded as Source', w * 0.5, h * 0.135);
    
    // Two profiles with mismatches
    const profiles = [
      { label: 'Crime Scene', x: 0.15, color: '#34495E' },
      { label: 'Suspect', x: 0.6, color: '#E74C3C' }
    ];
    
    profiles.forEach(profile => {
      ctx.fillStyle = '#FFFFFF';
      ctx.fillRect(w * profile.x, h * 0.2, w * 0.3, h * 0.5);
      ctx.strokeStyle = profile.color;
      ctx.lineWidth = 4;
      ctx.strokeRect(w * profile.x, h * 0.2, w * 0.3, h * 0.5);
      
      ctx.fillStyle = profile.color;
      ctx.font = `bold ${h * 0.03}px Arial`;
      ctx.textAlign = 'center';
      ctx.fillText(profile.label, w * (profile.x + 0.15), h * 0.18);
      
      const markers = ['D3S1358', 'vWA', 'FGA', 'D8S1179', 'D21S11'];
      markers.forEach((marker, idx) => {
        const yPos = h * (0.25 + idx * 0.09);
        
        ctx.fillStyle = '#2C3E50';
        ctx.font = `${h * 0.02}px Arial`;
        ctx.textAlign = 'left';
        ctx.fillText(marker, w * (profile.x + 0.02), yPos);
        
        // Different alleles for each profile
        const alleles = profile.label === 'Crime Scene' 
          ? [[15, 18], [14, 17], [22, 24], [13, 14], [28, 30]]
          : [[12, 16], [16, 19], [20, 23], [11, 15], [29, 31]];
        
        ctx.fillStyle = profile.color;
        ctx.globalAlpha = 0.8;
        ctx.fillRect(w * (profile.x + 0.12), yPos - h * 0.015, w * 0.06, h * 0.02);
        ctx.fillRect(w * (profile.x + 0.2), yPos - h * 0.015, w * 0.08, h * 0.02);
        ctx.globalAlpha = 1.0;
        
        ctx.fillStyle = '#FFFFFF';
        ctx.font = `bold ${h * 0.015}px Arial`;
        ctx.textAlign = 'center';
        ctx.fillText(alleles[idx][0].toString(), w * (profile.x + 0.15), yPos);
        ctx.fillText(alleles[idx][1].toString(), w * (profile.x + 0.24), yPos);
      });
    });
    
    // X marks showing mismatches
    ctx.fillStyle = '#E74C3C';
    ctx.font = `bold ${h * 0.04}px Arial`;
    ctx.textAlign = 'center';
    for(let i = 0; i < 5; i++) {
      const yPos = h * (0.25 + i * 0.09);
      ctx.fillText('✗', w * 0.525, yPos + h * 0.005);
    }
    
    // Result box
    ctx.fillStyle = '#FFFFFF';
    ctx.fillRect(w * 0.2, h * 0.75, w * 0.6, h * 0.15);
    ctx.strokeStyle = '#E74C3C';
    ctx.lineWidth = 3;
    ctx.strokeRect(w * 0.2, h * 0.75, w * 0.6, h * 0.15);
    
    ctx.fillStyle = '#2C3E50';
    ctx.font = `${h * 0.025}px Arial`;
    ctx.fillText('Result:', w * 0.5, h * 0.8);
    
    ctx.fillStyle = '#E74C3C';
    ctx.font = `bold ${h * 0.04}px Arial`;
    ctx.fillText('No Match - Excluded', w * 0.5, h * 0.86);
  }

  static drawInconclusiveComparison(ctx, w, h, evidence) {
    // Background
    ctx.fillStyle = '#FEF5E7';
    ctx.fillRect(0, 0, w, h);
    
    // Title
    ctx.fillStyle = '#F39C12';
    ctx.font = `bold ${h * 0.045}px Arial`;
    ctx.textAlign = 'center';
    ctx.fillText('INCONCLUSIVE RESULT', w * 0.5, h * 0.06);
    
    // Reason badge
    const reasons = {
      'degraded': 'Insufficient DNA Quality',
      'mixture': 'Complex Mixture',
      'touch-dna': 'Low DNA Quantity',
      'single-source': 'Partial Profile'
    };
    
    ctx.fillStyle = '#E67E22';
    ctx.fillRect(w * 0.25, h * 0.1, w * 0.5, h * 0.05);
    ctx.fillStyle = '#FFFFFF';
    ctx.font = `${h * 0.025}px Arial`;
    ctx.fillText(reasons[evidence] || 'Inconclusive', w * 0.5, h * 0.135);
    
    // Profile visualization showing degradation/issues
    ctx.fillStyle = '#FFFFFF';
    ctx.fillRect(w * 0.1, h * 0.2, w * 0.8, h * 0.5);
    ctx.strokeStyle = '#F39C12';
    ctx.lineWidth = 4;
    ctx.strokeRect(w * 0.1, h * 0.2, w * 0.8, h * 0.5);
    
    // Show partial/degraded peaks
    const markers = ['D3S1358', 'vWA', 'FGA', 'D8S1179', 'D21S11', 'D18S51'];
    markers.forEach((marker, idx) => {
      const yPos = h * (0.25 + idx * 0.075);
      
      ctx.fillStyle = '#2C3E50';
      ctx.font = `${h * 0.02}px Arial`;
      ctx.textAlign = 'left';
      ctx.fillText(marker, w * 0.12, yPos);
      
      // Show varying levels of signal quality
      const signalQuality = [1.0, 0.7, 0.3, 0.8, 0.4, 0.6][idx];
      
      if(signalQuality > 0.5) {
        ctx.fillStyle = '#F39C12';
        ctx.globalAlpha = signalQuality;
        ctx.fillRect(w * 0.3, yPos - h * 0.015, w * 0.08, h * 0.02);
        ctx.fillRect(w * 0.4, yPos - h * 0.015, w * 0.1, h * 0.02);
        ctx.globalAlpha = 1.0;
        
        // Question marks for uncertain calls
        ctx.fillStyle = '#E67E22';
        ctx.font = `bold ${h * 0.02}px Arial`;
        ctx.textAlign = 'center';
        ctx.fillText('?', w * 0.34, yPos);
        ctx.fillText('?', w * 0.45, yPos);
      } else {
        // No signal or very weak
        ctx.fillStyle = '#BDC3C7';
        ctx.globalAlpha = 0.3;
        ctx.fillRect(w * 0.3, yPos - h * 0.015, w * 0.2, h * 0.02);
        ctx.globalAlpha = 1.0;
        
        ctx.fillStyle = '#95A5A6';
        ctx.font = `${h * 0.018}px Arial`;
        ctx.textAlign = 'center';
        ctx.fillText('No data', w * 0.4, yPos);
      }
    });
    
    // Quality indicators
    ctx.fillStyle = '#FFFFFF';
    ctx.fillRect(w * 0.15, h * 0.75, w * 0.7, h * 0.15);
    ctx.strokeStyle = '#F39C12';
    ctx.lineWidth = 3;
    ctx.strokeRect(w * 0.15, h * 0.75, w * 0.7, h * 0.15);
    
    ctx.fillStyle = '#2C3E50';
    ctx.font = `${h * 0.022}px Arial`;
    ctx.textAlign = 'left';
    ctx.fillText('• Partial allele dropout detected', w * 0.17, h * 0.79);
    ctx.fillText('• Stutter peaks present', w * 0.17, h * 0.82);
    ctx.fillText('• Additional testing recommended', w * 0.17, h * 0.85);
    
    ctx.fillStyle = '#F39C12';
    ctx.font = `bold ${h * 0.035}px Arial`;
    ctx.textAlign = 'center';
    ctx.fillText('Cannot Include or Exclude', w * 0.5, h * 0.95);
  }

  static drawPartialComparison(ctx, w, h, evidence) {
    // Background
    ctx.fillStyle = '#EBF5FB';
    ctx.fillRect(0, 0, w, h);
    
    // Title
    ctx.fillStyle = '#3498DB';
    ctx.font = `bold ${h * 0.045}px Arial`;
    ctx.textAlign = 'center';
    ctx.fillText('PARTIAL DNA MATCH', w * 0.5, h * 0.06);
    
    // Evidence info
    ctx.fillStyle = '#2980B9';
    ctx.fillRect(w * 0.25, h * 0.1, w * 0.5, h * 0.05);
    ctx.fillStyle = '#FFFFFF';
    ctx.font = `${h * 0.025}px Arial`;
    ctx.fillText('Some Loci Match - Further Testing Needed', w * 0.5, h * 0.135);
    
    // Two profiles
    const profiles = [
      { label: 'Evidence', x: 0.15, color: '#34495E' },
      { label: 'Reference', x: 0.6, color: '#3498DB' }
    ];
    
    profiles.forEach(profile => {
      ctx.fillStyle = '#FFFFFF';
      ctx.fillRect(w * profile.x, h * 0.2, w * 0.3, h * 0.5);
      ctx.strokeStyle = profile.color;
      ctx.lineWidth = 4;
      ctx.strokeRect(w * profile.x, h * 0.2, w * 0.3, h * 0.5);
      
      ctx.fillStyle = profile.color;
      ctx.font = `bold ${h * 0.03}px Arial`;
      ctx.textAlign = 'center';
      ctx.fillText(profile.label, w * (profile.x + 0.15), h * 0.18);
      
      const markers = ['D3S1358', 'vWA', 'FGA', 'D8S1179', 'D21S11', 'D18S51'];
      const statuses = ['match', 'match', 'missing', 'match', 'missing', 'mismatch'];
      
      markers.forEach((marker, idx) => {
        const yPos = h * (0.25 + idx * 0.08);
        const status = statuses[idx];
        
        ctx.fillStyle = '#2C3E50';
        ctx.font = `${h * 0.02}px Arial`;
        ctx.textAlign = 'left';
        ctx.fillText(marker, w * (profile.x + 0.02), yPos);
        
        if(status === 'missing' && profile.label === 'Evidence') {
          // Show missing data
          ctx.fillStyle = '#BDC3C7';
          ctx.globalAlpha = 0.3;
          ctx.fillRect(w * (profile.x + 0.12), yPos - h * 0.015, w * 0.14, h * 0.02);
          ctx.globalAlpha = 1.0;
          
          ctx.fillStyle = '#95A5A6';
          ctx.font = `italic ${h * 0.018}px Arial`;
          ctx.textAlign = 'center';
          ctx.fillText('N/A', w * (profile.x + 0.19), yPos);
        } else {
          // Show alleles
          const alleles = status === 'match' 
            ? [15, 18] 
            : status === 'mismatch' && profile.label === 'Evidence'
            ? [12, 14]
            : [15, 18];
          
          const barColor = status === 'match' ? '#27AE60' : 
                          status === 'mismatch' ? '#E74C3C' : profile.color;
          
          ctx.fillStyle = barColor;
          ctx.globalAlpha = 0.8;
          ctx.fillRect(w * (profile.x + 0.12), yPos - h * 0.015, w * 0.06, h * 0.02);
          ctx.fillRect(w * (profile.x + 0.2), yPos - h * 0.015, w * 0.08, h * 0.02);
          ctx.globalAlpha = 1.0;
          
          ctx.fillStyle = '#FFFFFF';
          ctx.font = `bold ${h * 0.015}px Arial`;
          ctx.textAlign = 'center';
          ctx.fillText(alleles[0].toString(), w * (profile.x + 0.15), yPos);
          ctx.fillText(alleles[1].toString(), w * (profile.x + 0.24), yPos);
        }
      });
    });
    
    // Status indicators between profiles
    const statuses = ['match', 'match', 'missing', 'match', 'missing', 'mismatch'];
    statuses.forEach((status, idx) => {
      const yPos = h * (0.25 + idx * 0.08);
      
      if(status === 'match') {
        ctx.fillStyle = '#27AE60';
        ctx.font = `bold ${h * 0.03}px Arial`;
        ctx.textAlign = 'center';
        ctx.fillText('✓', w * 0.525, yPos + h * 0.005);
      } else if(status === 'mismatch') {
        ctx.fillStyle = '#E74C3C';
        ctx.font = `bold ${h * 0.03}px Arial`;
        ctx.textAlign = 'center';
        ctx.fillText('✗', w * 0.525, yPos + h * 0.005);
      } else {
        ctx.fillStyle = '#F39C12';
        ctx.font = `bold ${h * 0.025}px Arial`;
        ctx.textAlign = 'center';
        ctx.fillText('?', w * 0.525, yPos + h * 0.005);
      }
    });
    
    // Summary statistics
    ctx.fillStyle = '#FFFFFF';
    ctx.fillRect(w * 0.15, h * 0.75, w * 0.7, h * 0.15);
    ctx.strokeStyle = '#3498DB';
    ctx.lineWidth = 3;
    ctx.strokeRect(w * 0.15, h * 0.75, w * 0.7, h * 0.15);
    
    ctx.fillStyle = '#2C3E50';
    ctx.font = `${h * 0.025}px Arial`;
    ctx.textAlign = 'center';
    ctx.fillText('Matched Loci: 3 / 6', w * 0.5, h * 0.8);
    
    ctx.fillStyle = '#3498DB';
    ctx.font = `bold ${h * 0.035}px Arial`;
    ctx.fillText('Partial Match - 50%', w * 0.5, h * 0.86);
  }

  // ===== HELPER METHODS =====
  
  static generateRFLPBands(laneIndex, application) {
    // Generate RFLP band positions for different samples
    const patterns = {
      forensics: [
        [0.3, 0.45, 0.6, 0.72],    // Crime scene
        [0.3, 0.45, 0.6, 0.72],    // Suspect 1 (match)
        [0.28, 0.42, 0.58, 0.7],   // Suspect 2 (no match)
        [0.32, 0.48, 0.62, 0.75],  // Victim
        [0.25, 0.4, 0.55, 0.68, 0.8] // Control
      ],
      paternity: [
        [0.3, 0.45, 0.6],          // Mother
        [0.3, 0.5, 0.65],          // Child (shares with both)
        [0.35, 0.5, 0.65],         // Father
        [0.25, 0.4, 0.55, 0.7]     // Control
      ],
      default: [
        [0.3, 0.45, 0.6],
        [0.32, 0.48, 0.62],
        [0.28, 0.42, 0.58],
        [0.25, 0.4, 0.55, 0.7]
      ]
    };
    
    const pattern = patterns[application] || patterns.default;
    return pattern[laneIndex] || [0.3, 0.5, 0.7];
  }

  static drawSTRPeaks(ctx, x, y, width, height, locusIndex) {
    // Draw electropherogram-style peaks
    const peakPositions = [
      [0.3, 0.5],
      [0.25, 0.45],
      [0.35, 0.6],
      [0.4, 0.65]
    ];
    
    const positions = peakPositions[locusIndex % peakPositions.length];
    const colors = ['#0000FF', '#00FF00', '#FF0000', '#000000'];
    
    positions.forEach((pos, idx) => {
      const peakX = x + width * pos;
      const peakHeight = height * (0.6 + Math.random() * 0.3);
      
      // Draw peak as triangle
      ctx.fillStyle = colors[locusIndex % colors.length];
      ctx.globalAlpha = 0.7;
      ctx.beginPath();
      ctx.moveTo(peakX, y);
      ctx.lineTo(peakX - width * 0.03, y - peakHeight);
      ctx.lineTo(peakX + width * 0.03, y - peakHeight);
      ctx.closePath();
      ctx.fill();
      ctx.globalAlpha = 1.0;
      
      // Peak outline
      ctx.strokeStyle = colors[locusIndex % colors.length];
      ctx.lineWidth = 2;
      ctx.stroke();
    });
  }

  static getVNTRRepeatCount(sampleIndex, application) {
    // Return number of tandem repeats for visualization
    if(application === 'paternity') {
      return [8, 10, 9][sampleIndex] || 7;
    }
    return [7, 9, 8, 6][sampleIndex] || 7;
  }

  static drawPeak(ctx, x, y, width, height, color) {
    // Draw a single electropherogram peak
    ctx.fillStyle = color;
    ctx.globalAlpha = 0.7;
    
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.bezierCurveTo(
      x + width * 0.3, y - height * 0.5,
      x + width * 0.7, y - height,
      x + width, y - height
    );
    ctx.bezierCurveTo(
      x + width * 0.7, y - height,
      x + width * 0.3, y - height * 0.5,
      x, y
    );
    ctx.closePath();
    ctx.fill();
    
    ctx.globalAlpha = 1.0;
    ctx.strokeStyle = color;
    ctx.lineWidth = 2;
    ctx.stroke();
  }
}


