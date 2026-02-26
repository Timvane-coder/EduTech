import { createCanvas } from '@napi-rs/canvas'; import
ExcelJS from 'exceljs'; import fs from 'fs'; import os
from 'os'; import path from 'path'; import readline from
'readline'; import * as math from 'mathjs'; import
GIFEncoder from 'gifencoder'; import { PassThrough }
from 'stream';




class AnatomicalShapes {

// ============= Biotechnology Diagrams =======================

// ===== GEL ELECTROPHORESIS DIAGRAMS =====

static drawGelElectrophoresis(ctx, x, y, width, height, stage, application) {
  ctx.save();
  ctx.translate(x, y);
  
  switch(stage) {
    case 'complete':
      this.drawGelElectrophoresisComplete(ctx, width, height, application);
      break;
    case 'loading':
      this.drawGelElectrophoresisLoading(ctx, width, height, application);
      break;
    case 'separation':
      this.drawGelElectrophoresisSeparation(ctx, width, height, application);
      break;
    case 'visualization':
      this.drawGelElectrophoresisVisualization(ctx, width, height, application);
      break;
    case 'interpretation':
      this.drawGelElectrophoresisInterpretation(ctx, width, height, application);
      break;
  }
  
  ctx.restore();
}

static drawGelElectrophoresisComplete(ctx, width, height, application) {
  const w = width, h = height;
  
  // Gel apparatus
  ctx.fillStyle = '#E8E8E8';
  ctx.fillRect(w * 0.1, h * 0.2, w * 0.8, h * 0.6);
  
  // Buffer chamber
  ctx.fillStyle = '#B8D8E8';
  ctx.fillRect(w * 0.05, h * 0.15, w * 0.9, h * 0.1);
  ctx.fillRect(w * 0.05, h * 0.75, w * 0.9, h * 0.1);
  
  // Electrodes
  ctx.fillStyle = '#2C3E50';
  ctx.fillRect(w * 0.05, h * 0.18, w * 0.03, h * 0.04);
  ctx.fillRect(w * 0.92, h * 0.78, w * 0.03, h * 0.04);
  
  // Negative electrode label
  ctx.fillStyle = '#000000';
  ctx.font = `${h * 0.04}px Arial`;
  ctx.fillText('-', w * 0.02, h * 0.22);
  
  // Positive electrode label
  ctx.fillText('+', w * 0.96, h * 0.82);
  
  // Wells
  const wellCount = application === 'dna-fingerprinting' ? 8 : 6;
  for(let i = 0; i < wellCount; i++) {
    ctx.fillStyle = '#34495E';
    const wellX = w * (0.15 + i * 0.7 / wellCount);
    ctx.fillRect(wellX, h * 0.22, w * 0.04, h * 0.03);
  }
  
  // DNA bands based on application
  this.drawDNABands(ctx, w, h, application);
  
  // Molecular weight ladder
  ctx.strokeStyle = '#8E44AD';
  ctx.lineWidth = 2;
  const ladderSizes = [10000, 8000, 6000, 5000, 4000, 3000, 2000, 1500, 1000, 500];
  ladderSizes.forEach((size, i) => {
    const y = h * (0.3 + i * 0.04);
    ctx.beginPath();
    ctx.moveTo(w * 0.15, y);
    ctx.lineTo(w * 0.19, y);
    ctx.stroke();
    
    // Size labels
    ctx.fillStyle = '#000000';
    ctx.font = `${h * 0.02}px Arial`;
    ctx.fillText(`${size}bp`, w * 0.02, y + h * 0.01);
  });
  
  // Outline
  ctx.strokeStyle = '#2C3E50';
  ctx.lineWidth = 3;
  ctx.strokeRect(w * 0.1, h * 0.2, w * 0.8, h * 0.6);
}

static drawGelElectrophoresisLoading(ctx, width, height, application) {
  const w = width, h = height;
  
  // Gel tray
  ctx.fillStyle = '#E8E8E8';
  ctx.fillRect(w * 0.1, h * 0.3, w * 0.8, h * 0.5);
  
  // Wells
  const wellCount = 8;
  for(let i = 0; i < wellCount; i++) {
    ctx.fillStyle = '#34495E';
    const wellX = w * (0.15 + i * 0.7 / wellCount);
    ctx.fillRect(wellX, h * 0.32, w * 0.04, h * 0.04);
  }
  
  // Micropipette loading sample into well 3
  const pipetteX = w * (0.15 + 2 * 0.7 / wellCount + 0.02);
  const pipetteY = h * 0.15;
  
  // Pipette body
  ctx.fillStyle = '#ECF0F1';
  ctx.fillRect(pipetteX, pipetteY, w * 0.015, h * 0.15);
  
  // Pipette tip
  ctx.fillStyle = '#95A5A6';
  ctx.beginPath();
  ctx.moveTo(pipetteX, pipetteY + h * 0.15);
  ctx.lineTo(pipetteX + w * 0.015, pipetteY + h * 0.15);
  ctx.lineTo(pipetteX + w * 0.0075, pipetteY + h * 0.18);
  ctx.closePath();
  ctx.fill();
  
  // Sample drop
  ctx.fillStyle = '#3498DB';
  ctx.beginPath();
  ctx.arc(pipetteX + w * 0.0075, pipetteY + h * 0.19, w * 0.008, 0, Math.PI * 2);
  ctx.fill();
  
  // Arrow showing loading direction
  ctx.strokeStyle = '#E74C3C';
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.moveTo(pipetteX + w * 0.03, pipetteY + h * 0.12);
  ctx.lineTo(pipetteX + w * 0.03, pipetteY + h * 0.2);
  ctx.stroke();
  
  // Arrowhead
  ctx.fillStyle = '#E74C3C';
  ctx.beginPath();
  ctx.moveTo(pipetteX + w * 0.03, pipetteY + h * 0.2);
  ctx.lineTo(pipetteX + w * 0.025, pipetteY + h * 0.19);
  ctx.lineTo(pipetteX + w * 0.035, pipetteY + h * 0.19);
  ctx.closePath();
  ctx.fill();
  
  // Labels
  ctx.fillStyle = '#000000';
  ctx.font = `${h * 0.03}px Arial`;
  ctx.fillText('Loading sample', w * 0.35, h * 0.1);
  
  // Outline
  ctx.strokeStyle = '#2C3E50';
  ctx.lineWidth = 3;
  ctx.strokeRect(w * 0.1, h * 0.3, w * 0.8, h * 0.5);
}

static drawGelElectrophoresisSeparation(ctx, width, height, application) {
  const w = width, h = height;
  
  // Power supply
  ctx.fillStyle = '#34495E';
  ctx.fillRect(w * 0.75, h * 0.05, w * 0.2, h * 0.15);
  
  // Digital display
  ctx.fillStyle = '#27AE60';
  ctx.fillRect(w * 0.77, h * 0.08, w * 0.16, h * 0.06);
  ctx.fillStyle = '#000000';
  ctx.font = `${h * 0.04}px monospace`;
  ctx.fillText('100V', w * 0.78, h * 0.13);
  
  // Gel with active separation
  ctx.fillStyle = '#E8E8E8';
  ctx.fillRect(w * 0.1, h * 0.25, w * 0.8, h * 0.6);
  
  // Electric field lines
  ctx.strokeStyle = '#F39C12';
  ctx.lineWidth = 1;
  ctx.setLineDash([5, 5]);
  for(let i = 0; i < 5; i++) {
    ctx.beginPath();
    ctx.moveTo(w * 0.1, h * (0.3 + i * 0.1));
    ctx.lineTo(w * 0.9, h * (0.3 + i * 0.1));
    ctx.stroke();
  }
  ctx.setLineDash([]);
  
  // Wells
  for(let i = 0; i < 6; i++) {
    ctx.fillStyle = '#34495E';
    const wellX = w * (0.15 + i * 0.7 / 6);
    ctx.fillRect(wellX, h * 0.27, w * 0.04, h * 0.03);
    
    // DNA samples migrating
    const migrationProgress = [0.2, 0.15, 0.25, 0.18, 0.22, 0.2];
    ctx.fillStyle = '#3498DB';
    ctx.globalAlpha = 0.6;
    ctx.fillRect(wellX, h * (0.3 + migrationProgress[i]), w * 0.04, h * 0.02);
    ctx.globalAlpha = 1.0;
  }
  
  // Electrodes with cables
  ctx.fillStyle = '#2C3E50';
  ctx.fillRect(w * 0.05, h * 0.23, w * 0.03, h * 0.04);
  ctx.fillRect(w * 0.92, h * 0.83, w * 0.03, h * 0.04);
  
  // Cables to power supply
  ctx.strokeStyle = '#E74C3C';
  ctx.lineWidth = 3;
  ctx.beginPath();
  ctx.moveTo(w * 0.065, h * 0.25);
  ctx.lineTo(w * 0.75, h * 0.12);
  ctx.stroke();
  
  ctx.strokeStyle = '#000000';
  ctx.beginPath();
  ctx.moveTo(w * 0.935, h * 0.85);
  ctx.lineTo(w * 0.95, h * 0.2);
  ctx.stroke();
  
  // Labels
  ctx.fillStyle = '#000000';
  ctx.font = `${h * 0.025}px Arial`;
  ctx.fillText('DNA migrating toward +', w * 0.3, h * 0.2);
  
  // Outline
  ctx.strokeStyle = '#2C3E50';
  ctx.lineWidth = 3;
  ctx.strokeRect(w * 0.1, h * 0.25, w * 0.8, h * 0.6);
}

static drawGelElectrophoresisVisualization(ctx, width, height, application) {
  const w = width, h = height;
  
  // UV transilluminator base
  ctx.fillStyle = '#2C3E50';
  ctx.fillRect(w * 0.05, h * 0.7, w * 0.9, h * 0.25);
  
  // UV light glow
  const gradient = ctx.createRadialGradient(w * 0.5, h * 0.7, 0, w * 0.5, h * 0.5, w * 0.5);
  gradient.addColorStop(0, 'rgba(138, 43, 226, 0.3)');
  gradient.addColorStop(1, 'rgba(138, 43, 226, 0)');
  ctx.fillStyle = gradient;
  ctx.fillRect(w * 0.05, h * 0.2, w * 0.9, h * 0.5);
  
  // Gel on transilluminator
  ctx.fillStyle = '#E8E8E8';
  ctx.fillRect(w * 0.1, h * 0.25, w * 0.8, h * 0.5);
  
  // Wells
  for(let i = 0; i < 6; i++) {
    ctx.fillStyle = '#34495E';
    const wellX = w * (0.15 + i * 0.7 / 6);
    ctx.fillRect(wellX, h * 0.27, w * 0.04, h * 0.03);
  }
  
  // Fluorescent DNA bands (glowing)
  for(let i = 0; i < 6; i++) {
    const wellX = w * (0.15 + i * 0.7 / 6);
    const bandPositions = this.getBandPositions(application, i);
    
    bandPositions.forEach(pos => {
      // Glow effect
      const glowGradient = ctx.createRadialGradient(
        wellX + w * 0.02, h * pos, 0,
        wellX + w * 0.02, h * pos, w * 0.03
      );
      glowGradient.addColorStop(0, 'rgba(0, 255, 0, 0.8)');
      glowGradient.addColorStop(1, 'rgba(0, 255, 0, 0)');
      ctx.fillStyle = glowGradient;
      ctx.fillRect(wellX - w * 0.01, h * (pos - 0.01), w * 0.06, h * 0.025);
      
      // Bright band
      ctx.fillStyle = '#00FF00';
      ctx.fillRect(wellX, h * pos, w * 0.04, h * 0.015);
    });
  }
  
  // UV warning label
  ctx.fillStyle = '#F39C12';
  ctx.fillRect(w * 0.85, h * 0.72, w * 0.08, h * 0.05);
  ctx.fillStyle = '#000000';
  ctx.font = `${h * 0.025}px Arial bold`;
  ctx.fillText('⚠ UV', w * 0.86, h * 0.755);
  
  // Camera/documentation
  ctx.fillStyle = '#34495E';
  ctx.fillRect(w * 0.4, h * 0.05, w * 0.2, h * 0.12);
  ctx.fillStyle = '#2C3E50';
  ctx.beginPath();
  ctx.arc(w * 0.5, h * 0.11, w * 0.05, 0, Math.PI * 2);
  ctx.fill();
  
  // Lens
  ctx.fillStyle = '#95A5A6';
  ctx.beginPath();
  ctx.arc(w * 0.5, h * 0.11, w * 0.03, 0, Math.PI * 2);
  ctx.fill();
  
  // Label
  ctx.fillStyle = '#000000';
  ctx.font = `${h * 0.025}px Arial`;
  ctx.fillText('UV Visualization', w * 0.35, h * 0.18);
  
  // Outline
  ctx.strokeStyle = '#8A2BE2';
  ctx.lineWidth = 3;
  ctx.strokeRect(w * 0.1, h * 0.25, w * 0.8, h * 0.5);
}

static drawGelElectrophoresisInterpretation(ctx, width, height, application) {
  const w = width, h = height;
  
  // Gel image
  ctx.fillStyle = '#000000';
  ctx.fillRect(w * 0.05, h * 0.1, w * 0.5, h * 0.6);
  
  // Wells
  for(let i = 0; i < 6; i++) {
    const wellX = w * (0.1 + i * 0.35 / 6);
    
    // Band patterns
    const bandPositions = this.getBandPositions(application, i);
    bandPositions.forEach(pos => {
      ctx.fillStyle = '#00FF00';
      ctx.fillRect(wellX, h * pos, w * 0.04, h * 0.015);
    });
  }
  
  // Molecular weight ladder on left
  ctx.fillStyle = '#FFFFFF';
  ctx.font = `${h * 0.02}px Arial`;
  const sizes = [10, 8, 6, 5, 4, 3, 2, 1.5, 1, 0.5];
  sizes.forEach((size, i) => {
    const y = h * (0.15 + i * 0.05);
    ctx.fillText(`${size}kb`, w * 0.57, y);
    
    // Ladder band
    ctx.fillStyle = '#00FF00';
    ctx.fillRect(w * 0.1, y - h * 0.008, w * 0.04, h * 0.012);
    ctx.fillStyle = '#FFFFFF';
  });
  
  // Analysis annotations
  ctx.strokeStyle = '#E74C3C';
  ctx.lineWidth = 2;
  
  // Circle a band
  ctx.beginPath();
  ctx.arc(w * 0.3, h * 0.4, w * 0.03, 0, Math.PI * 2);
  ctx.stroke();
  
  // Arrow to annotation
  ctx.beginPath();
  ctx.moveTo(w * 0.33, h * 0.4);
  ctx.lineTo(w * 0.6, h * 0.35);
  ctx.stroke();
  
  // Annotation text
  ctx.fillStyle = '#000000';
  ctx.font = `${h * 0.025}px Arial`;
  ctx.fillText('Match found', w * 0.62, h * 0.35);
  ctx.font = `${h * 0.02}px Arial`;
  ctx.fillText('~3.5kb fragment', w * 0.62, h * 0.38);
  
  // Results table
  ctx.strokeStyle = '#2C3E50';
  ctx.lineWidth = 2;
  ctx.strokeRect(w * 0.05, h * 0.75, w * 0.9, h * 0.2);
  
  // Table headers
  ctx.fillStyle = '#3498DB';
  ctx.fillRect(w * 0.05, h * 0.75, w * 0.9, h * 0.04);
  ctx.fillStyle = '#FFFFFF';
  ctx.font = `${h * 0.025}px Arial bold`;
  ctx.fillText('Sample', w * 0.08, h * 0.78);
  ctx.fillText('Band Sizes (kb)', w * 0.25, h * 0.78);
  ctx.fillText('Result', w * 0.6, h * 0.78);
  
  // Sample rows
  ctx.fillStyle = '#000000';
  ctx.font = `${h * 0.02}px Arial`;
  const sampleResults = [
    ['Sample 1', '3.5, 2.0, 1.2', 'Match'],
    ['Sample 2', '4.0, 2.5', 'No Match'],
    ['Sample 3', '3.5, 2.0, 1.2', 'Match']
  ];
  
  sampleResults.forEach((row, i) => {
    const y = h * (0.82 + i * 0.04);
    ctx.fillText(row[0], w * 0.08, y);
    ctx.fillText(row[1], w * 0.25, y);
    
    // Result with color
    ctx.fillStyle = row[2] === 'Match' ? '#27AE60' : '#E74C3C';
    ctx.fillText(row[2], w * 0.6, y);
    ctx.fillStyle = '#000000';
  });
  
  // Title
  ctx.font = `${h * 0.03}px Arial bold`;
  ctx.fillText('Gel Analysis Results', w * 0.25, h * 0.05);
}

static getBandPositions(application, laneIndex) {
  const positions = {
    'dna-fingerprinting': [
      [0.35, 0.45, 0.55], // Lane 0
      [0.40, 0.50, 0.60], // Lane 1
      [0.35, 0.45, 0.55], // Lane 2 - matches lane 0
      [0.38, 0.52, 0.58], // Lane 3
      [0.42, 0.48, 0.62], // Lane 4
      [0.35, 0.45, 0.55]  // Lane 5 - matches lane 0
    ],
    'pcr-products': [
      [0.40], [0.40], [0.40], [0.40], [0.40], [0.40]
    ],
    'restriction-digest': [
      [0.35, 0.42, 0.50, 0.58],
      [0.38, 0.48, 0.60],
      [0.35, 0.45, 0.55, 0.62],
      [0.40, 0.52],
      [0.36, 0.44, 0.54],
      [0.38, 0.46, 0.56, 0.64]
    ],
    'rna-analysis': [
      [0.38, 0.52], [0.40, 0.54], [0.38, 0.52], [0.42, 0.56], [0.38, 0.52], [0.40, 0.54]
    ]
  };
  
  return positions[application]?.[laneIndex] || [0.45];
}

static drawDNABands(ctx, w, h, application) {
  for(let i = 0; i < 6; i++) {
    const wellX = w * (0.2 + i * 0.7 / 6);
    const bandPositions = this.getBandPositions(application, i);
    
    ctx.fillStyle = '#3498DB';
    ctx.globalAlpha = 0.7;
    bandPositions.forEach(pos => {
      ctx.fillRect(wellX, h * pos, w * 0.04, h * 0.015);
    });
    ctx.globalAlpha = 1.0;
  }
}

// ===== CRISPR-CAS9 DIAGRAMS =====

static drawCRISPR(ctx, x, y, width, height, stage, component) {
  ctx.save();
  ctx.translate(x, y);
  
  switch(stage) {
    case 'complete':
      this.drawCRISPRComplete(ctx, width, height, component);
      break;
    case 'recognition':
      this.drawCRISPRRecognition(ctx, width, height, component);
      break;
    case 'cleavage':
      this.drawCRISPRCleavage(ctx, width, height, component);
      break;
    case 'repair':
      this.drawCRISPRRepair(ctx, width, height, component);
      break;
    case 'outcome':
      this.drawCRISPROutcome(ctx, width, height, component);
      break;
  }
  
  ctx.restore();
}

static drawCRISPRComplete(ctx, width, height, component) {
  const w = width, h = height;
  
  // Target DNA double helix
  this.drawDNADoubleHelix(ctx, w * 0.1, h * 0.4, w * 0.8, h * 0.1, '#3498DB');
  
  // PAM sequence highlight
  ctx.fillStyle = '#E74C3C';
  ctx.fillRect(w * 0.6, h * 0.38, w * 0.08, h * 0.14);
  ctx.fillStyle = '#FFFFFF';
  ctx.font = `${h * 0.03}px monospace bold`;
  ctx.fillText('PAM', w * 0.615, h * 0.47);
  
  // Guide RNA (wavy line with bases)
  ctx.strokeStyle = '#9B59B6';
  ctx.lineWidth = 3;
  ctx.beginPath();
  ctx.moveTo(w * 0.2, h * 0.25);
  for(let i = 0; i <= 20; i++) {
    const x = w * (0.2 + i * 0.02);
    const y = h * (0.25 + Math.sin(i * 0.5) * 0.02);
    ctx.lineTo(x, y);
  }
  ctx.stroke();
  
  // Cas9 protein (large irregular shape)
  this.drawCas9Protein(ctx, w * 0.3, h * 0.05, w * 0.3, h * 0.3);
  
  // RNA-DNA hybrid region
  ctx.fillStyle = 'rgba(155, 89, 182, 0.3)';
  ctx.fillRect(w * 0.25, h * 0.35, w * 0.3, h * 0.15);
  
  // Cleavage sites (scissors icons)
  this.drawScissors(ctx, w * 0.52, h * 0.37, h * 0.04);
  this.drawScissors(ctx, w * 0.52, h * 0.47, h * 0.04);
  
  // Labels
  ctx.fillStyle = '#000000';
  ctx.font = `${h * 0.025}px Arial`;
  ctx.fillText('Cas9 Protein', w * 0.32, h * 0.02);
  ctx.fillText('Guide RNA', w * 0.22, h * 0.22);
  ctx.fillText('Target DNA', w * 0.75, h * 0.37);
  ctx.fillText('Cut sites', w * 0.56, h * 0.42);
}

static drawCRISPRRecognition(ctx, width, height, component) {
  const w = width, h = height;
  
  // DNA strand
  this.drawDNADoubleHelix(ctx, w * 0.1, h * 0.5, w * 0.8, h * 0.08, '#3498DB');
  
  // Cas9-gRNA complex approaching
  this.drawCas9Protein(ctx, w * 0.15, h * 0.15, w * 0.25, h * 0.25);
  
  // Guide RNA extending from Cas9
  ctx.strokeStyle = '#9B59B6';
  ctx.lineWidth = 3;
  ctx.beginPath();
  ctx.moveTo(w * 0.35, h * 0.35);
  ctx.quadraticCurveTo(w * 0.4, h * 0.42, w * 0.45, h * 0.48);
  ctx.stroke();
  
  // PAM sequence scanning
  for(let i = 0; i < 4; i++) {
    const x = w * (0.5 + i * 0.1);
    ctx.fillStyle = i === 2 ? '#E74C3C' : '#BDC3C7';
    ctx.fillRect(x, h * 0.48, w * 0.06, h * 0.12);
    
    if(i === 2) {
      ctx.fillStyle = '#FFFFFF';
      ctx.font = `${h * 0.025}px monospace bold`;
      ctx.fillText('NGG', x + w * 0.005, h * 0.56);
    }
  }
  
  // Scanning arrows
  ctx.strokeStyle = '#F39C12';
  ctx.lineWidth = 2;
  for(let i = 0; i < 3; i++) {
    const x = w * (0.52 + i * 0.1);
    ctx.beginPath();
    ctx.moveTo(x, h * 0.42);
    ctx.lineTo(x, h * 0.46);
    ctx.stroke();
    
    // Arrowhead
    ctx.beginPath();
    ctx.moveTo(x, h * 0.46);
    ctx.lineTo(x - w * 0.01, h * 0.44);
    ctx.lineTo(x + w * 0.01, h * 0.44);
    ctx.closePath();
    ctx.fillStyle = '#F39C12';
    ctx.fill();
  }
  
  // Labels
  ctx.fillStyle = '#000000';
  ctx.font = `${h * 0.03}px Arial bold`;
  ctx.fillText('1. PAM Recognition', w * 0.3, h * 0.08);
  ctx.font = `${h * 0.025}px Arial`;
  ctx.fillText('Cas9 scans for PAM sequence', w * 0.25, h * 0.7);
  ctx.fillText('(NGG in S. pyogenes)', w * 0.28, h * 0.75);
}

static drawCRISPRCleavage(ctx, width, height, component) {
  const w = width, h = height;
  
  // Cas9 protein positioned on DNA
  this.drawCas9Protein(ctx, w * 0.25, h * 0.15, w * 0.35, h * 0.3);
  
  // DNA with R-loop formation
  ctx.strokeStyle = '#3498DB';
  ctx.lineWidth = 4;
  
  // Upper strand (unwound)
  ctx.beginPath();
  ctx.moveTo(w * 0.1, h * 0.42);
  ctx.lineTo(w * 0.3, h * 0.42);
  ctx.quadraticCurveTo(w * 0.4, h * 0.35, w * 0.5, h * 0.35);
  ctx.lineTo(w * 0.7, h * 0.35);
  ctx.stroke();
  
  // Lower strand (unwound)
  ctx.beginPath();
  ctx.moveTo(w * 0.1, h * 0.58);
  ctx.lineTo(w * 0.3, h * 0.58);
  ctx.quadraticCurveTo(w * 0.4, h * 0.65, w * 0.5, h * 0.65);
  ctx.lineTo(w * 0.7, h * 0.65);
  ctx.stroke();
  
  // gRNA hybridized to target strand
  ctx.strokeStyle = '#9B59B6';
  ctx.lineWidth = 3;
  ctx.setLineDash([5, 5]);
  ctx.beginPath();
  ctx.moveTo(w * 0.35, h * 0.28);
  ctx.lineTo(w * 0.5, h * 0.35);
  ctx.stroke();
  ctx.setLineDash([]);
  
  // Cleavage points with active cutting
  // RuvC domain cut (bottom strand)
  ctx.fillStyle = '#E74C3C';
  ctx.beginPath();
  ctx.arc(w * 0.48, h * 0.65, w * 0.015, 0, Math.PI * 2);
  ctx.fill();
  
  // HNH domain cut (top strand)
  ctx.beginPath();
  ctx.arc(w * 0.52, h * 0.35, w * 0.015, 0, Math.PI * 2);
  ctx.fill();
  
  // Scissors at cut sites
  this.drawScissors(ctx, w * 0.48, h * 0.63, h * 0.05);
  this.drawScissors(ctx, w * 0.52, h * 0.33, h * 0.05);
  
  // Cut indication lines
  ctx.strokeStyle = '#E74C3C';
  ctx.lineWidth = 2;
  ctx.setLineDash([3, 3]);
  ctx.beginPath();
  ctx.moveTo(w * 0.48, h * 0.55);
  ctx.lineTo(w * 0.48, h * 0.7);
  ctx.stroke();
  
  ctx.beginPath();
  ctx.moveTo(w * 0.52, h * 0.3);
  ctx.lineTo(w * 0.52, h * 0.45);
  ctx.stroke();
  ctx.setLineDash([]);
  
  // Domain labels
  ctx.fillStyle = '#000000';
  ctx.font = `${h * 0.02}px Arial`;
  ctx.fillText('HNH domain', w * 0.54, h * 0.3);
  ctx.fillText('RuvC domain', w * 0.54, h * 0.68);
  
  // R-loop region
  ctx.strokeStyle = '#F39C12';
  ctx.lineWidth = 2;
  ctx.strokeRect(w * 0.3, h * 0.33, w * 0.25, h * 0.34);
  ctx.fillStyle = '#F39C12';
  ctx.font = `${h * 0.02}px Arial`;
  ctx.fillText('R-loop', w * 0.38, h * 0.72);
  
  // Title
  ctx.fillStyle = '#000000';
  ctx.font = `${h * 0.03}px Arial bold`;
  ctx.fillText('2. DNA Cleavage', w * 0.35, h * 0.08);
  ctx.font = `${h * 0.025}px Arial`;
  ctx.fillText('Double-strand break 3bp upstream of PAM', w * 0.2, h * 0.8);
}

static drawCRISPRRepair(ctx, width, height, component) {
  const w = width, h = height;
  
  // Double strand break
  ctx.strokeStyle = '#3498DB';
  ctx.lineWidth = 4;
  
  // Left DNA fragment - top strand
  ctx.beginPath();
  ctx.moveTo(w * 0.05, h * 0.35);
  ctx.lineTo(w * 0.35, h * 0.35);
  ctx.stroke();
  
  // Left DNA fragment - bottom strand
  ctx.beginPath();
  ctx.moveTo(w * 0.05, h * 0.45);
  ctx.lineTo(w * 0.35, h * 0.45);
  ctx.stroke();
  
  // Right DNA fragment - top strand
  ctx.beginPath();
  ctx.moveTo(w * 0.45, h * 0.35);
  ctx.lineTo(w * 0.75, h * 0.35);
  ctx.stroke();
  
  // Right DNA fragment - bottom strand
  ctx.beginPath();
  ctx.moveTo(w * 0.45, h * 0.45);
  ctx.lineTo(w * 0.75, h * 0.45);
  ctx.stroke();
  
  // Break indication
  ctx.strokeStyle = '#E74C3C';
  ctx.lineWidth = 3;
  ctx.setLineDash([5, 5]);
  ctx.beginPath();
  ctx.moveTo(w * 0.37, h * 0.3);
  ctx.lineTo(w * 0.37, h * 0.5);
  ctx.stroke();
  ctx.beginPath();
  ctx.moveTo(w * 0.43, h * 0.3);
  ctx.lineTo(w * 0.43, h * 0.5);
  ctx.stroke();
  ctx.setLineDash([]);
  
  // Two repair pathways
  
  // NHEJ pathway (left side)
  ctx.fillStyle = 'rgba(231, 76, 60, 0.1)';
  ctx.fillRect(w * 0.05, h * 0.55, w * 0.4, h * 0.35);
  
  ctx.strokeStyle = '#E74C3C';
  ctx.lineWidth = 2;
  ctx.strokeRect(w * 0.05, h * 0.55, w * 0.4, h * 0.35);
  
  // NHEJ DNA (imperfect join)
  ctx.strokeStyle = '#3498DB';
  ctx.lineWidth = 4;
  ctx.beginPath();
  ctx.moveTo(w * 0.1, h * 0.65);
  ctx.lineTo(w * 0.22, h * 0.65);
  ctx.lineTo(w * 0.25, h * 0.68);
  ctx.lineTo(w * 0.28, h * 0.65);
  ctx.lineTo(w * 0.4, h * 0.65);
  ctx.stroke();
  
  ctx.beginPath();
  ctx.moveTo(w * 0.1, h * 0.75);
  ctx.lineTo(w * 0.23, h * 0.75);
  ctx.lineTo(w * 0.27, h * 0.72);
  ctx.lineTo(w * 0.4, h * 0.75);
  ctx.stroke();
  
  // Indel marking
  ctx.fillStyle = '#E74C3C';
  ctx.fillRect(w * 0.22, h * 0.63, w * 0.08, h * 0.14);
  ctx.fillStyle = '#FFFFFF';
  ctx.font = `${h * 0.02}px Arial bold`;
  ctx.fillText('indel', w * 0.225, h * 0.71);
  
  ctx.fillStyle = '#000000';
  ctx.font = `${h * 0.025}px Arial bold`;
  ctx.fillText('NHEJ', w * 0.18, h * 0.6);
  ctx.font = `${h * 0.02}px Arial`;
  ctx.fillText('(Error-prone)', w * 0.15, h * 0.85);
  
  // HDR pathway (right side)
  ctx.fillStyle = 'rgba(46, 204, 113, 0.1)';
  ctx.fillRect(w * 0.55, h * 0.55, w * 0.4, h * 0.35);
  
  ctx.strokeStyle = '#27AE60';
  ctx.lineWidth = 2;
  ctx.strokeRect(w * 0.55, h * 0.55, w * 0.4, h * 0.35);
  
  // Donor template
  ctx.strokeStyle = '#F39C12';
  ctx.lineWidth = 3;
  ctx.setLineDash([10, 5]);
  ctx.beginPath();
  ctx.moveTo(w * 0.6, h * 0.6);
  ctx.lineTo(w * 0.9, h * 0.6);
  ctx.stroke();
  ctx.setLineDash([]);
  
  ctx.fillStyle = '#F39C12';
  ctx.font = `${h * 0.018}px Arial`;
  ctx.fillText('Donor template', w * 0.65, h * 0.58);
  
  // HDR repaired DNA (perfect)
  ctx.strokeStyle = '#3498DB';
  ctx.lineWidth = 4;
  ctx.beginPath();
  ctx.moveTo(w * 0.6, h * 0.7);
  ctx.lineTo(w * 0.9, h * 0.7);
  ctx.stroke();
  
  ctx.beginPath();
  ctx.moveTo(w * 0.6, h * 0.78);
  ctx.lineTo(w * 0.9, h * 0.78);
  ctx.stroke();
  
  // Inserted sequence
  ctx.fillStyle = '#27AE60';
  ctx.fillRect(w * 0.72, h * 0.68, w * 0.08, h * 0.12);
  ctx.fillStyle = '#FFFFFF';
  ctx.font = `${h * 0.018}px Arial bold`;
  ctx.fillText('insert', w * 0.725, h * 0.75);
  
  ctx.fillStyle = '#000000';
  ctx.font = `${h * 0.025}px Arial bold`;
  ctx.fillText('HDR', w * 0.7, h * 0.6);
  ctx.font = `${h * 0.02}px Arial`;
  ctx.fillText('(Precise repair)', w * 0.65, h * 0.85);
  
  // Title
  ctx.fillStyle = '#000000';
  ctx.font = `${h * 0.03}px Arial bold`;
  ctx.fillText('3. DNA Repair Pathways', w * 0.3, h * 0.08);
  
  // Arrows showing pathways
  ctx.strokeStyle = '#95A5A6';
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.moveTo(w * 0.25, h * 0.5);
  ctx.lineTo(w * 0.25, h * 0.55);
  ctx.stroke();
  
  ctx.beginPath();
  ctx.moveTo(w * 0.75, h * 0.5);
  ctx.lineTo(w * 0.75, h * 0.55);
  ctx.stroke();
}

static drawCRISPROutcome(ctx, width, height, component) {
  const w = width, h = height;
  
  // Three possible outcomes
  
  // 1. Gene Knockout (top)
  ctx.fillStyle = 'rgba(231, 76, 60, 0.1)';
  ctx.fillRect(w * 0.05, h * 0.1, w * 0.9, h * 0.22);
  
  ctx.strokeStyle = '#E74C3C';
  ctx.lineWidth = 2;
  ctx.strokeRect(w * 0.05, h * 0.1, w * 0.9, h * 0.22);
  
  ctx.fillStyle = '#E74C3C';
  ctx.font = `${h * 0.025}px Arial bold`;
  ctx.fillText('Gene Knockout', w * 0.1, h * 0.14);
  
  // Gene with frameshift
  this.drawGene(ctx, w * 0.1, h * 0.18, w * 0.3, h * 0.08, '#3498DB');
  ctx.fillStyle = '#E74C3C';
  ctx.fillRect(w * 0.28, h * 0.17, w * 0.03, h * 0.1);
  ctx.fillStyle = '#FFFFFF';
  ctx.font = `${h * 0.015}px Arial`;
  ctx.fillText('Δ', w * 0.285, h * 0.23);
  
  // No protein
  ctx.fillStyle = '#95A5A6';
  ctx.font = `${h * 0.02}px Arial`;
  ctx.fillText('→ No functional protein', w * 0.45, h * 0.23);
  
  // 2. Gene Correction (middle)
  ctx.fillStyle = 'rgba(46, 204, 113, 0.1)';
  ctx.fillRect(w * 0.05, h * 0.38, w * 0.9, h * 0.22);
  
  ctx.strokeStyle = '#27AE60';
  ctx.lineWidth = 2;
  ctx.strokeRect(w * 0.05, h * 0.38, w * 0.9, h * 0.22);
  
  ctx.fillStyle = '#27AE60';
  ctx.font = `${h * 0.025}px Arial bold`;
  ctx.fillText('Gene Correction', w * 0.1, h * 0.42);
  
  // Mutant gene
  this.drawGene(ctx, w * 0.1, h * 0.46, w * 0.15, h * 0.08, '#E74C3C');
  ctx.fillStyle = '#000000';
  ctx.font = `${h * 0.015}px Arial`;
  ctx.fillText('mutant', w * 0.12, h * 0.45);
  
  // Arrow
  ctx.strokeStyle = '#27AE60';
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.moveTo(w * 0.26, h * 0.5);
  ctx.lineTo(w * 0.32, h * 0.5);
  ctx.stroke();
  this.drawArrowhead(ctx, w * 0.32, h * 0.5, 0, h * 0.02, '#27AE60');
  
  // Corrected gene
  this.drawGene(ctx, w * 0.34, h * 0.46, w * 0.15, h * 0.08, '#27AE60');
  ctx.fillStyle = '#000000';
  ctx.font = `${h * 0.015}px Arial`;
  ctx.fillText('corrected', w * 0.35, h * 0.45);
  
  ctx.fillStyle = '#27AE60';
  ctx.font = `${h * 0.02}px Arial`;
  ctx.fillText('→ Restored function', w * 0.52, h * 0.51);
  
  // 3. Gene Insertion (bottom)
  ctx.fillStyle = 'rgba(52, 152, 219, 0.1)';
  ctx.fillRect(w * 0.05, h * 0.66, w * 0.9, h * 0.22);
  
  ctx.strokeStyle = '#3498DB';
  ctx.lineWidth = 2;
  ctx.strokeRect(w * 0.05, h * 0.66, w * 0.9, h * 0.22);
  
  ctx.fillStyle = '#3498DB';
  ctx.font = `${h * 0.025}px Arial bold`;
  ctx.fillText('Gene Insertion', w * 0.1, h * 0.7);
  
  // Original gene
  this.drawGene(ctx, w * 0.1, h * 0.74, w * 0.2, h * 0.08, '#95A5A6');
  
  // Plus sign
  ctx.fillStyle = '#3498DB';
  ctx.font = `${h * 0.03}px Arial bold`;
  ctx.fillText('+', w * 0.315, h * 0.79);
  
  // New gene
  this.drawGene(ctx, w * 0.35, h * 0.74, w * 0.12, h * 0.08, '#3498DB');
  ctx.fillStyle = '#FFFFFF';
  ctx.font = `${h * 0.015}px Arial`;
  ctx.fillText('new gene', w * 0.365, h * 0.73);
  
  ctx.fillStyle = '#3498DB';
  ctx.font = `${h * 0.02}px Arial`;
  ctx.fillText('→ New function added', w * 0.52, h * 0.79);
  
  // Title
  ctx.fillStyle = '#000000';
  ctx.font = `${h * 0.03}px Arial bold`;
  ctx.fillText('4. Editing Outcomes', w * 0.35, h * 0.05);
}

static drawCas9Protein(ctx, x, y, width, height) {
  const w = width, h = height;
  
  // Irregular protein shape
  const gradient = ctx.createRadialGradient(x + w * 0.5, y + h * 0.5, 0, x + w * 0.5, y + h * 0.5, w * 0.7);
  gradient.addColorStop(0, '#F39C12');
  gradient.addColorStop(0.7, '#E67E22');
  gradient.addColorStop(1, '#D35400');
  
  ctx.fillStyle = gradient;
  ctx.beginPath();
  ctx.moveTo(x + w * 0.2, y);
  ctx.bezierCurveTo(x + w * 0.1, y + h * 0.1, x, y + h * 0.3, x + w * 0.05, y + h * 0.5);
  ctx.bezierCurveTo(x, y + h * 0.7, x + w * 0.1, y + h * 0.9, x + w * 0.3, y + h);
  ctx.bezierCurveTo(x + w * 0.5, y + h * 0.95, x + w * 0.7, y + h, x + w * 0.85, y + h * 0.9);
  ctx.bezierCurveTo(x + w * 0.95, y + h * 0.75, x + w, y + h * 0.6, x + w * 0.95, y + h * 0.4);
  ctx.bezierCurveTo(x + w, y + h * 0.2, x + w * 0.9, y + h * 0.05, x + w * 0.7, y);
  ctx.closePath();
  ctx.fill();
  
  // Active site cleft
  ctx.fillStyle = '#8B4513';
  ctx.beginPath();
  ctx.moveTo(x + w * 0.6, y + h * 0.3);
  ctx.quadraticCurveTo(x + w * 0.7, y + h * 0.5, x + w * 0.6, y + h * 0.7);
  ctx.lineTo(x + w * 0.55, y + h * 0.65);
  ctx.quadraticCurveTo(x + w * 0.65, y + h * 0.5, x + w * 0.55, y + h * 0.35);
  ctx.closePath();
  ctx.fill();
  
  // Protein domains
  ctx.strokeStyle = '#2C3E50';
  ctx.lineWidth = 1.5;
  ctx.setLineDash([3, 3]);
  
  // HNH domain
  ctx.strokeRect(x + w * 0.55, y + h * 0.1, w * 0.35, h * 0.3);
  ctx.fillStyle = '#2C3E50';
  ctx.font = `${h * 0.08}px Arial`;
  ctx.fillText('HNH', x + w * 0.6, y + h * 0.28);
  
  // RuvC domain
  ctx.strokeRect(x + w * 0.1, y + h * 0.6, w * 0.4, h * 0.3);
  ctx.fillText('RuvC', x + w * 0.15, y + h * 0.78);
  
  ctx.setLineDash([]);
  
  // Outline
  ctx.strokeStyle = '#D35400';
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.moveTo(x + w * 0.2, y);
  ctx.bezierCurveTo(x + w * 0.1, y + h * 0.1, x, y + h * 0.3, x + w * 0.05, y + h * 0.5);
  ctx.bezierCurveTo(x, y + h * 0.7, x + w * 0.1, y + h * 0.9, x + w * 0.3, y + h);
  ctx.bezierCurveTo(x + w * 0.5, y + h * 0.95, x + w * 0.7, y + h, x + w * 0.85, y + h * 0.9);
  ctx.bezierCurveTo(x + w * 0.95, y + h * 0.75, x + w, y + h * 0.6, x + w * 0.95, y + h * 0.4);
  ctx.bezierCurveTo(x + w, y + h * 0.2, x + w * 0.9, y + h * 0.05, x + w * 0.7, y);
  ctx.closePath();
  ctx.stroke();
}

static drawScissors(ctx, x, y, size) {
  ctx.save();
  ctx.translate(x, y);
  
  // Scissors blades
  ctx.strokeStyle = '#34495E';
  ctx.lineWidth = size * 0.08;
  
  // Left blade
  ctx.beginPath();
  ctx.moveTo(-size * 0.3, -size * 0.3);
  ctx.lineTo(0, 0);
  ctx.stroke();
  
  // Right blade
  ctx.beginPath();
  ctx.moveTo(size * 0.3, -size * 0.3);
  ctx.lineTo(0, 0);
  ctx.stroke();
  
  // Handles
  ctx.fillStyle = '#E74C3C';
  ctx.beginPath();
  ctx.arc(-size * 0.3, -size * 0.3, size * 0.15, 0, Math.PI * 2);
  ctx.fill();
  
  ctx.beginPath();
  ctx.arc(size * 0.3, -size * 0.3, size * 0.15, 0, Math.PI * 2);
  ctx.fill();
  
  // Pivot
  ctx.fillStyle = '#2C3E50';
  ctx.beginPath();
  ctx.arc(0, 0, size * 0.1, 0, Math.PI * 2);
  ctx.fill();
  
  ctx.restore();
}

static drawDNADoubleHelix(ctx, x, y, width, height, color) {
  ctx.strokeStyle = color;
  ctx.lineWidth = 3;
  
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
  ctx.lineWidth = 1.5;
  const basePairCount = Math.floor(width / 20);
  for(let i = 0; i <= basePairCount; i++) {
    const xPos = x + (i * width / basePairCount);
    ctx.beginPath();
    ctx.moveTo(xPos, y);
    ctx.lineTo(xPos, y + height);
    ctx.stroke();
  }
}

static drawGene(ctx, x, y, width, height, color) {
  // Gene body
  ctx.fillStyle = color;
  ctx.fillRect(x, y, width * 0.9, height);
  
  // Arrow head
  ctx.beginPath();
  ctx.moveTo(x + width * 0.9, y);
  ctx.lineTo(x + width, y + height / 2);
  ctx.lineTo(x + width * 0.9, y + height);
  ctx.closePath();
  ctx.fill();
  
  // Outline
  ctx.strokeStyle = color;
  ctx.lineWidth = 2;
  ctx.strokeRect(x, y, width * 0.9, height);
  ctx.stroke();
  ctx.beginPath();
  ctx.moveTo(x + width * 0.9, y);
  ctx.lineTo(x + width, y + height / 2);
  ctx.lineTo(x + width * 0.9, y + height);
  ctx.stroke();
}

static drawArrowhead(ctx, x, y, angle, size, color) {
  ctx.save();
  ctx.translate(x, y);
  ctx.rotate(angle);
  
  ctx.fillStyle = color;
  ctx.beginPath();
  ctx.moveTo(0, 0);
  ctx.lineTo(-size * 0.6, -size * 0.4);
  ctx.lineTo(-size * 0.6, size * 0.4);
  ctx.closePath();
  ctx.fill();
  
  ctx.restore();
}

}
