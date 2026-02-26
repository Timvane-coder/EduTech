import { createCanvas } from '@napi-rs/canvas'; import
ExcelJS from 'exceljs'; import fs from 'fs'; import os
from 'os'; import path from 'path'; import readline from
'readline'; import * as math from 'mathjs'; import
GIFEncoder from 'gifencoder'; import { PassThrough }
from 'stream';


class AnatomicalShapes {

/** ============ HealthImmunologyShapes ========================*/
  
  // ===== IMMUNE RESPONSE DIAGRAMS =====
  
  static drawImmuneResponse(ctx, x, y, width, height, responseType, stage) {
    ctx.save();
    ctx.translate(x, y);
    
    switch(stage) {
      case 'complete':
        this.drawCompleteImmuneResponse(ctx, width, height, responseType);
        break;
      case 'recognition':
        this.drawRecognitionStage(ctx, width, height, responseType);
        break;
      case 'activation':
        this.drawActivationStage(ctx, width, height, responseType);
        break;
      case 'effector':
        this.drawEffectorStage(ctx, width, height, responseType);
        break;
      case 'memory':
        this.drawMemoryStage(ctx, width, height, responseType);
        break;
    }
    
    ctx.restore();
  }
  
  static drawCompleteImmuneResponse(ctx, w, h, responseType) {
    const showInnate = responseType === 'both' || responseType === 'innate';
    const showAdaptive = responseType === 'both' || responseType === 'adaptive';
    
    // Pathogen entry
    ctx.fillStyle = '#8B0000';
    ctx.beginPath();
    ctx.arc(w * 0.1, h * 0.5, 15, 0, Math.PI * 2);
    ctx.fill();
    
    // Innate response pathway
    if (showInnate) {
      // Macrophage
      ctx.fillStyle = '#FFB366';
      ctx.beginPath();
      ctx.arc(w * 0.3, h * 0.3, 25, 0, Math.PI * 2);
      ctx.fill();
      
      // Phagocytosis
      ctx.strokeStyle = '#FF8C00';
      ctx.lineWidth = 3;
      ctx.setLineDash([5, 5]);
      ctx.beginPath();
      ctx.moveTo(w * 0.1, h * 0.5);
      ctx.lineTo(w * 0.3, h * 0.3);
      ctx.stroke();
      ctx.setLineDash([]);
      
      // Inflammation
      ctx.fillStyle = 'rgba(255, 69, 0, 0.3)';
      ctx.beginPath();
      ctx.arc(w * 0.3, h * 0.3, 50, 0, Math.PI * 2);
      ctx.fill();
    }
    
    // Adaptive response pathway
    if (showAdaptive) {
      // Dendritic cell
      ctx.fillStyle = '#9370DB';
      ctx.beginPath();
      ctx.arc(w * 0.3, h * 0.7, 25, 0, Math.PI * 2);
      ctx.fill();
      
      // Dendritic extensions
      for(let i = 0; i < 6; i++) {
        const angle = (Math.PI * 2 * i) / 6;
        ctx.strokeStyle = '#9370DB';
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(w * 0.3, h * 0.7);
        ctx.lineTo(w * 0.3 + Math.cos(angle) * 35, h * 0.7 + Math.sin(angle) * 35);
        ctx.stroke();
      }
      
      // T cell activation
      ctx.fillStyle = '#4169E1';
      ctx.beginPath();
      ctx.arc(w * 0.5, h * 0.5, 20, 0, Math.PI * 2);
      ctx.fill();
      
      // B cell activation
      ctx.fillStyle = '#00CED1';
      ctx.beginPath();
      ctx.arc(w * 0.5, h * 0.7, 20, 0, Math.PI * 2);
      ctx.fill();
      
      // Antibodies (Y-shaped)
      for(let i = 0; i < 3; i++) {
        this.drawAntibody(ctx, w * 0.7 + i * 30, h * 0.7, 15);
      }
      
      // Connection lines
      ctx.strokeStyle = '#666';
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(w * 0.3, h * 0.7);
      ctx.lineTo(w * 0.5, h * 0.5);
      ctx.moveTo(w * 0.3, h * 0.7);
      ctx.lineTo(w * 0.5, h * 0.7);
      ctx.stroke();
    }
    
    // Timeline arrow
    ctx.strokeStyle = '#000';
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.moveTo(w * 0.05, h * 0.95);
    ctx.lineTo(w * 0.95, h * 0.95);
    ctx.stroke();
    
    // Arrowhead
    ctx.beginPath();
    ctx.moveTo(w * 0.95, h * 0.95);
    ctx.lineTo(w * 0.92, h * 0.93);
    ctx.lineTo(w * 0.92, h * 0.97);
    ctx.closePath();
    ctx.fill();
  }
  
  static drawRecognitionStage(ctx, w, h, responseType) {
    // Pathogen
    ctx.fillStyle = '#8B0000';
    ctx.beginPath();
    ctx.arc(w * 0.3, h * 0.5, 30, 0, Math.PI * 2);
    ctx.fill();
    
    // Pathogen antigens (spikes)
    for(let i = 0; i < 8; i++) {
      const angle = (Math.PI * 2 * i) / 8;
      ctx.fillStyle = '#FF0000';
      ctx.beginPath();
      ctx.arc(
        w * 0.3 + Math.cos(angle) * 35,
        h * 0.5 + Math.sin(angle) * 35,
        5, 0, Math.PI * 2
      );
      ctx.fill();
    }
    
    // Pattern Recognition Receptor
    ctx.fillStyle = '#FFB366';
    ctx.beginPath();
    ctx.arc(w * 0.6, h * 0.5, 25, 0, Math.PI * 2);
    ctx.fill();
    
    // Receptor binding site
    ctx.fillStyle = '#FF8C00';
    ctx.beginPath();
    ctx.arc(w * 0.575, h * 0.5, 10, 0, Math.PI * 2);
    ctx.fill();
    
    // Recognition binding
    ctx.strokeStyle = '#000';
    ctx.lineWidth = 3;
    ctx.setLineDash([10, 5]);
    ctx.beginPath();
    ctx.moveTo(w * 0.33, h * 0.5);
    ctx.lineTo(w * 0.575, h * 0.5);
    ctx.stroke();
    ctx.setLineDash([]);
    
    // Lock and key metaphor
    ctx.fillStyle = '#FFD700';
    ctx.font = '20px Arial';
    ctx.fillText('Recognition', w * 0.4, h * 0.35);
  }
  
  static drawActivationStage(ctx, w, h, responseType) {
    // Activated cell (glowing)
    const gradient = ctx.createRadialGradient(w * 0.5, h * 0.5, 0, w * 0.5, h * 0.5, 60);
    gradient.addColorStop(0, '#FFD700');
    gradient.addColorStop(0.5, '#FFA500');
    gradient.addColorStop(1, 'rgba(255, 165, 0, 0)');
    
    ctx.fillStyle = gradient;
    ctx.beginPath();
    ctx.arc(w * 0.5, h * 0.5, 60, 0, Math.PI * 2);
    ctx.fill();
    
    // Central immune cell
    ctx.fillStyle = '#FF8C00';
    ctx.beginPath();
    ctx.arc(w * 0.5, h * 0.5, 30, 0, Math.PI * 2);
    ctx.fill();
    
    // Signal molecules radiating out
    for(let i = 0; i < 12; i++) {
      const angle = (Math.PI * 2 * i) / 12;
      const distance = 80;
      
      ctx.fillStyle = '#FF6347';
      ctx.beginPath();
      ctx.arc(
        w * 0.5 + Math.cos(angle) * distance,
        h * 0.5 + Math.sin(angle) * distance,
        8, 0, Math.PI * 2
      );
      ctx.fill();
      
      // Signal paths
      ctx.strokeStyle = 'rgba(255, 99, 71, 0.5)';
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(w * 0.5, h * 0.5);
      ctx.lineTo(
        w * 0.5 + Math.cos(angle) * distance,
        h * 0.5 + Math.sin(angle) * distance
      );
      ctx.stroke();
    }
    
    // Nucleus activation
    ctx.fillStyle = '#8B0000';
    ctx.beginPath();
    ctx.arc(w * 0.5, h * 0.5, 15, 0, Math.PI * 2);
    ctx.fill();
  }
  
  static drawEffectorStage(ctx, w, h, responseType) {
    // Multiple effector cells
    const positions = [
      [0.2, 0.3], [0.4, 0.25], [0.6, 0.3], [0.8, 0.25],
      [0.3, 0.6], [0.5, 0.65], [0.7, 0.6]
    ];
    
    positions.forEach(([px, py]) => {
      // Effector cell
      ctx.fillStyle = '#4169E1';
      ctx.beginPath();
      ctx.arc(w * px, h * py, 20, 0, Math.PI * 2);
      ctx.fill();
      
      // Activity marker
      ctx.strokeStyle = '#FFD700';
      ctx.lineWidth = 3;
      ctx.beginPath();
      ctx.arc(w * px, h * py, 25, 0, Math.PI * 1.5);
      ctx.stroke();
    });
    
    // Target pathogens being destroyed
    const targets = [[0.25, 0.5], [0.55, 0.45], [0.75, 0.5]];
    targets.forEach(([tx, ty]) => {
      ctx.fillStyle = 'rgba(139, 0, 0, 0.5)';
      ctx.beginPath();
      ctx.arc(w * tx, h * ty, 15, 0, Math.PI * 2);
      ctx.fill();
      
      // Destruction X
      ctx.strokeStyle = '#FF0000';
      ctx.lineWidth = 3;
      ctx.beginPath();
      ctx.moveTo(w * tx - 10, h * ty - 10);
      ctx.lineTo(w * tx + 10, h * ty + 10);
      ctx.moveTo(w * tx + 10, h * ty - 10);
      ctx.lineTo(w * tx - 10, h * ty + 10);
      ctx.stroke();
    });
  }
  
  static drawMemoryStage(ctx, w, h, responseType) {
    // Memory cells (long-lived)
    const memoryPositions = [
      [0.2, 0.3], [0.4, 0.4], [0.6, 0.35], [0.8, 0.4],
      [0.3, 0.6], [0.5, 0.65], [0.7, 0.6], [0.85, 0.65]
    ];
    
    memoryPositions.forEach(([mx, my]) => {
      // Memory B or T cell
      ctx.fillStyle = '#9370DB';
      ctx.beginPath();
      ctx.arc(w * mx, h * my, 18, 0, Math.PI * 2);
      ctx.fill();
      
      // Memory marker (M)
      ctx.fillStyle = '#FFF';
      ctx.font = 'bold 14px Arial';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText('M', w * mx, h * my);
    });
    
    // Long-term survival indication
    ctx.strokeStyle = '#9370DB';
    ctx.lineWidth = 2;
    ctx.setLineDash([5, 5]);
    memoryPositions.forEach(([mx, my], i) => {
      if (i < memoryPositions.length - 1) {
        ctx.beginPath();
        ctx.moveTo(w * mx, h * my);
        ctx.lineTo(w * memoryPositions[i + 1][0], h * memoryPositions[i + 1][1]);
        ctx.stroke();
      }
    });
    ctx.setLineDash([]);
    
    // Timeline showing years
    ctx.fillStyle = '#000';
    ctx.font = '16px Arial';
    ctx.fillText('Years of Protection →', w * 0.1, h * 0.9);
  }
  
  // ===== VACCINATION DIAGRAMS =====
  
  static drawVaccination(ctx, x, y, width, height, vaccineType, stage) {
    ctx.save();
    ctx.translate(x, y);
    
    switch(stage) {
      case 'complete':
        this.drawCompleteVaccination(ctx, width, height, vaccineType);
        break;
      case 'administration':
        this.drawAdministration(ctx, width, height, vaccineType);
        break;
      case 'recognition':
        this.drawVaccineRecognition(ctx, width, height, vaccineType);
        break;
      case 'primary-response':
        this.drawPrimaryResponse(ctx, width, height, vaccineType);
        break;
      case 'memory-formation':
        this.drawMemoryFormation(ctx, width, height, vaccineType);
        break;
      case 'secondary-response':
        this.drawSecondaryResponse(ctx, width, height, vaccineType);
        break;
    }
    
    ctx.restore();
  }
  
  static drawCompleteVaccination(ctx, w, h, vaccineType) {
    // Syringe
    ctx.fillStyle = '#C0C0C0';
    ctx.fillRect(w * 0.1, h * 0.15, 40, 100);
    ctx.fillStyle = '#87CEEB';
    ctx.fillRect(w * 0.12, h * 0.17, 36, 80);
    
    // Vaccine components based on type
    this.drawVaccineComponent(ctx, w * 0.13, h * 0.2, vaccineType);
    
    // Injection site
    ctx.fillStyle = '#FFE4C4';
    ctx.beginPath();
    ctx.arc(w * 0.3, h * 0.4, 40, 0, Math.PI * 2);
    ctx.fill();
    
    // Immune cells responding
    const cellPositions = [[0.45, 0.3], [0.5, 0.45], [0.55, 0.35]];
    cellPositions.forEach(([cx, cy]) => {
      ctx.fillStyle = '#FFB366';
      ctx.beginPath();
      ctx.arc(w * cx, h * cy, 20, 0, Math.PI * 2);
      ctx.fill();
    });
    
    // Memory cells forming
    ctx.fillStyle = '#9370DB';
    ctx.beginPath();
    ctx.arc(w * 0.7, h * 0.4, 25, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = '#FFF';
    ctx.font = 'bold 16px Arial';
    ctx.textAlign = 'center';
    ctx.fillText('M', w * 0.7, h * 0.4);
    
    // Antibodies produced
    for(let i = 0; i < 4; i++) {
      this.drawAntibody(ctx, w * 0.75 + i * 25, h * 0.6, 12);
    }
    
    // Protection shield
    ctx.strokeStyle = '#FFD700';
    ctx.lineWidth = 4;
    ctx.beginPath();
    ctx.arc(w * 0.7, h * 0.4, 60, 0, Math.PI * 2);
    ctx.stroke();
  }
  
  static drawVaccineComponent(ctx, x, y, vaccineType) {
    switch(vaccineType) {
      case 'live-attenuated':
        // Weakened virus
        ctx.fillStyle = 'rgba(139, 0, 0, 0.5)';
        ctx.beginPath();
        ctx.arc(x + 10, y + 10, 8, 0, Math.PI * 2);
        ctx.fill();
        break;
      case 'inactivated':
        // Dead virus (X marked)
        ctx.fillStyle = '#8B0000';
        ctx.beginPath();
        ctx.arc(x + 10, y + 10, 8, 0, Math.PI * 2);
        ctx.fill();
        ctx.strokeStyle = '#FFF';
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(x + 5, y + 5);
        ctx.lineTo(x + 15, y + 15);
        ctx.moveTo(x + 15, y + 5);
        ctx.lineTo(x + 5, y + 15);
        ctx.stroke();
        break;
      case 'mrna':
        // mRNA strand
        ctx.strokeStyle = '#4169E1';
        ctx.lineWidth = 3;
        ctx.beginPath();
        for(let i = 0; i < 20; i++) {
          ctx.lineTo(x + i * 2, y + 10 + Math.sin(i * 0.5) * 5);
        }
        ctx.stroke();
        break;
    }
  }
  
  static drawAdministration(ctx, w, h, vaccineType) {
    // Detailed syringe
    ctx.fillStyle = '#E0E0E0';
    ctx.fillRect(w * 0.35, h * 0.1, 60, 150);
    
    // Plunger
    ctx.fillStyle = '#A9A9A9';
    ctx.fillRect(w * 0.365, h * 0.05, 30, 60);
    
    // Vaccine liquid
    ctx.fillStyle = '#87CEEB';
    ctx.fillRect(w * 0.37, h * 0.12, 56, 120);
    
    // Needle
    ctx.fillStyle = '#C0C0C0';
    ctx.beginPath();
    ctx.moveTo(w * 0.38, h * 0.26);
    ctx.lineTo(w * 0.41, h * 0.35);
    ctx.lineTo(w * 0.39, h * 0.35);
    ctx.closePath();
    ctx.fill();
    
    // Arm/skin
    ctx.fillStyle = '#FFE4C4';
    ctx.fillRect(w * 0.2, h * 0.35, w * 0.6, h * 0.3);
    
    // Injection point
    ctx.fillStyle = '#FF6347';
    ctx.beginPath();
    ctx.arc(w * 0.4, h * 0.4, 5, 0, Math.PI * 2);
    ctx.fill();
  }
  
  static drawVaccineRecognition(ctx, w, h, vaccineType) {
    // Vaccine antigen
    ctx.fillStyle = '#4169E1';
    ctx.beginPath();
    ctx.arc(w * 0.3, h * 0.5, 25, 0, Math.PI * 2);
    ctx.fill();
    
    // Antigen presenting cell
    ctx.fillStyle = '#FFB366';
    ctx.beginPath();
    ctx.arc(w * 0.6, h * 0.5, 35, 0, Math.PI * 2);
    ctx.fill();
    
    // MHC presentation
    ctx.fillStyle = '#FF8C00';
    ctx.fillRect(w * 0.58, h * 0.45, 30, 20);
    
    // Recognition event
    ctx.strokeStyle = '#FFD700';
    ctx.lineWidth = 4;
    ctx.setLineDash([5, 5]);
    ctx.beginPath();
    ctx.moveTo(w * 0.33, h * 0.5);
    ctx.lineTo(w * 0.58, h * 0.5);
    ctx.stroke();
    ctx.setLineDash([]);
  }
  
  static drawPrimaryResponse(ctx, w, h, vaccineType) {
    // Timeline
    ctx.strokeStyle = '#000';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(w * 0.1, h * 0.8);
    ctx.lineTo(w * 0.9, h * 0.8);
    ctx.stroke();
    
    // Response curve
    ctx.strokeStyle = '#4169E1';
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.moveTo(w * 0.1, h * 0.8);
    ctx.quadraticCurveTo(w * 0.4, h * 0.3, w * 0.7, h * 0.5);
    ctx.lineTo(w * 0.9, h * 0.7);
    ctx.stroke();
    
    // Initial B cells
    for(let i = 0; i < 3; i++) {
      ctx.fillStyle = '#00CED1';
      ctx.beginPath();
      ctx.arc(w * (0.15 + i * 0.1), h * 0.75, 15, 0, Math.PI * 2);
      ctx.fill();
    }
    
    // Proliferating cells
    for(let i = 0; i < 8; i++) {
      ctx.fillStyle = '#00CED1';
      ctx.beginPath();
      ctx.arc(w * (0.45 + (i % 4) * 0.08), h * (0.35 + Math.floor(i / 4) * 0.1), 12, 0, Math.PI * 2);
      ctx.fill();
    }
    
    // Labels
    ctx.fillStyle = '#000';
    ctx.font = '14px Arial';
    ctx.fillText('Day 0', w * 0.1, h * 0.85);
    ctx.fillText('Day 7-14', w * 0.5, h * 0.85);
  }
  
  static drawMemoryFormation(ctx, w, h, vaccineType) {
    // Central memory pool
    ctx.fillStyle = 'rgba(147, 112, 219, 0.2)';
    ctx.beginPath();
    ctx.arc(w * 0.5, h * 0.5, 100, 0, Math.PI * 2);
    ctx.fill();
    
    // Memory B cells
    for(let i = 0; i < 12; i++) {
      const angle = (Math.PI * 2 * i) / 12;
      const radius = 70;
      
      ctx.fillStyle = '#9370DB';
      ctx.beginPath();
      ctx.arc(
        w * 0.5 + Math.cos(angle) * radius,
        h * 0.5 + Math.sin(angle) * radius,
        20, 0, Math.PI * 2
      );
      ctx.fill();
      
      ctx.fillStyle = '#FFF';
      ctx.font = 'bold 14px Arial';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText('M',
        w * 0.5 + Math.cos(angle) * radius,
        h * 0.5 + Math.sin(angle) * radius
      );
    }
    
    // Long-lived indicator
    ctx.strokeStyle = '#9370DB';
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.arc(w * 0.5, h * 0.5, 100, 0, Math.PI * 2);
    ctx.stroke();
  }
  
  static drawSecondaryResponse(ctx, w, h, vaccineType) {
    // Comparison graph
    ctx.strokeStyle = '#000';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(w * 0.1, h * 0.8);
    ctx.lineTo(w * 0.9, h * 0.8);
    ctx.moveTo(w * 0.1, h * 0.8);
    ctx.lineTo(w * 0.1, h * 0.1);
    ctx.stroke();
    
    // Primary response (slower, lower)
    ctx.strokeStyle = '#4169E1';
    ctx.lineWidth = 3;
    ctx.setLineDash([5, 5]);
    ctx.beginPath();
    ctx.moveTo(w * 0.15, h * 0.75);
    ctx.quadraticCurveTo(w * 0.35, h * 0.5, w * 0.55, h * 0.6);
    ctx.stroke();
    ctx.setLineDash([]);
    
    // Secondary response (faster, higher)
    ctx.strokeStyle = '#FF4500';
    ctx.lineWidth = 4;
    ctx.beginPath();
    ctx.moveTo(w * 0.6, h * 0.75);
    ctx.quadraticCurveTo(w * 0.7, h * 0.2, w * 0.85, h * 0.25);
    ctx.stroke();
    
    // Labels
    ctx.fillStyle = '#000';
    ctx.font = '14px Arial';
    ctx.fillText('1st exposure', w * 0.3, h * 0.85);
    ctx.fillText('2nd exposure', w * 0.65, h * 0.85);
    ctx.fillText('Faster!', w * 0.7, h * 0.15);
    ctx.fillText('Stronger!', w * 0.75, h * 0.2);
  }
  
  // ===== BLOOD CELLS DIAGRAMS =====
  
  static drawBloodCells(ctx, x, y, width, height, cellType, func) {
    ctx.save();
    ctx.translate(x, y);
    
    switch(cellType) {
      case 'all':
        this.drawAllBloodCells(ctx, width, height, func);
        break;
      case 'erythrocytes':
        this.drawErythrocytes(ctx, width, height, func);
        break;
      case 'leukocytes':
        this.drawLeukocytes(ctx, width, height, func);
        break;
      case 'platelets':
        this.drawPlatelets(ctx, width, height, func);
        break;
      case 'neutrophils':
        this.drawNeutrophils(ctx, width, height, func);
        break;
      case 'lymphocytes':
        this.drawLymphocytes(ctx, width, height, func);
        break;
      case 'monocytes':
        this.drawMonocytes(ctx, width, height, func);
        break;
      case 'eosinophils':
        this.drawEosinophils(ctx, width, height, func);
        break;
      case 'basophils':
        this.drawBasophils(ctx, width, height, func);
        break;
    }
    
    ctx.restore();
  }
  
  static drawAllBloodCells(ctx, w, h, func) {
    // Red blood cells (most abundant)
    for(let i = 0; i < 15; i++) {
      const x = w * (0.1 + Math.random() * 0.8);
      const y = h * (0.1 + Math.random() * 0.8);
      this.drawSingleRBC(ctx, x, y, 20);
    }
    
    // White blood cells (scattered)
    const wbcTypes = ['neutrophil', 'lymphocyte', 'monocyte'];
    for(let i = 0; i < 6; i++) {
      const x = w * (0.15 + Math.random() * 0.7);
      const y = h * (0.15 + Math.random() * 0.7);
      const type = wbcTypes[Math.floor(Math.random() * wbcTypes.length)];
      this.drawSingleWBC(ctx, x, y, 25, type);
    }
    
    // Platelets (small)
    for(let i = 0; i < 10; i++) {
      const x = w * (0.1 + Math.random() * 0.8);
      const y = h * (0.1 + Math.random() * 0.8);
      this.drawSinglePlatelet(ctx, x, y, 8);
    }
  }
  
  static drawSingleRBC(ctx, x, y, size) {
    // Biconcave disc shape
    ctx.fillStyle = '#DC143C';
    ctx.beginPath();
    ctx.ellipse(x, y, size, size * 0.6, 0, 0, Math.PI * 2);
    ctx.fill();
    
    // Central pallor
    ctx.fillStyle = 'rgba(255, 182, 193, 0.5)';
    ctx.beginPath();
    ctx.ellipse(x, y, size * 0.4, size * 0.3, 0, 0, Math.PI * 2);
    ctx.fill();
    
    // Outline
    ctx.strokeStyle = '#8B0000';
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.ellipse(x, y, size, size * 0.6, 0, 0, Math.PI * 2);
    ctx.stroke();
  }
  
  static drawSingleWBC(ctx, x, y, size, type) {
    // Cell body
    ctx.fillStyle = '#E6E6FA';
    ctx.beginPath();
    ctx.arc(x, y, size, 0, Math.PI * 2);
    ctx.fill();
    
    // Nucleus shape varies by type
    ctx.fillStyle = '#4B0082';
    switch(type) {
      case 'neutrophil':
        // Multi-lobed nucleus
        for(let i = 0; i < 3; i++) {
          ctx.beginPath();
          ctx.arc(x + (i - 1) * 8, y, 8, 0, Math.PI * 2);
          ctx.fill();
        }
        break;
      case 'lymphocyte':
        // Large round nucleus
        ctx.beginPath();
        ctx.arc(x, y, size * 0.7, 0, Math.PI * 2);
        ctx.fill();
        break;
      case 'monocyte':
        // Kidney-shaped nucleus
        ctx.beginPath();
        ctx.ellipse(x, y, size * 0.6, size * 0.4, 0, 0, Math.PI * 2);
        ctx.fill();
        break;
    }
    
    // Outline
    ctx.strokeStyle = '#483D8B';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.arc(x, y, size, 0, Math.PI * 2);
    ctx.stroke();
  }
  
  static drawSinglePlatelet(ctx, x, y, size) {
    // Irregular small fragment
    ctx.fillStyle = '#DDA0DD';
    ctx.beginPath();
    for(let i = 0; i < 6; i++) {
      const angle = (Math.PI * 2 * i) / 6;
      const radius = size * (0.8 + Math.random() * 0.4);
      if(i === 0) {
        ctx.moveTo(x + Math.cos(angle) * radius, y + Math.sin(angle) * radius);
      } else {
        ctx.lineTo(x + Math.cos(angle) * radius, y + Math.sin(angle) * radius);
      }
    }
    ctx.closePath();
    ctx.fill();
    ctx.strokeStyle = '#8B008B';
    ctx.lineWidth = 1;
    ctx.stroke();
  }
  
  static drawErythrocytes(ctx, w, h, func) {
    if(func === 'structure') {
      // Detailed RBC structure
      const centerX = w * 0.5;
      const centerY = h * 0.5;
      const size = 80;
      
      // Main cell
      this.drawSingleRBC(ctx, centerX, centerY, size);
      
      // Hemoglobin molecules
      for(let i = 0; i < 8; i++) {
        const angle = (Math.PI * 2 * i) / 8;
        ctx.fillStyle = '#8B0000';
        ctx.beginPath();
        ctx.arc(
          centerX + Math.cos(angle) * size * 0.5,
          centerY + Math.sin(angle) * size * 0.3,
          5, 0, Math.PI * 2
        );
        ctx.fill();
      }
      
      // Labels
      ctx.fillStyle = '#000';
      ctx.font = '14px Arial';
      ctx.fillText('Biconcave Shape', centerX - 60, centerY - 100);
      ctx.fillText('Hemoglobin', centerX + 100, centerY);
      ctx.fillText('No Nucleus', centerX - 60, centerY + 100);
      
    } else if(func === 'oxygen-transport') {
      // Oxygen binding illustration
      const rbc = { x: w * 0.3, y: h * 0.5, size: 60 };
      this.drawSingleRBC(ctx, rbc.x, rbc.y, rbc.size);
      
      // O2 molecules
      for(let i = 0; i < 4; i++) {
        ctx.fillStyle = '#87CEEB';
        ctx.beginPath();
        ctx.arc(w * (0.5 + i * 0.08), h * 0.3, 15, 0, Math.PI * 2);
        ctx.fill();
        
        ctx.fillStyle = '#000';
        ctx.font = 'bold 12px Arial';
        ctx.textAlign = 'center';
        ctx.fillText('O₂', w * (0.5 + i * 0.08), h * 0.3);
        
        // Binding arrows
        ctx.strokeStyle = '#4169E1';
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(w * (0.5 + i * 0.08), h * 0.32);
        ctx.lineTo(rbc.x + 20, rbc.y - 10);
        ctx.stroke();
      }
      
      // CO2 release
      for(let i = 0; i < 2; i++) {
        ctx.fillStyle = '#FFB6C1';
        ctx.beginPath();
        ctx.arc(w * (0.15 + i * 0.08), h * 0.7, 12, 0, Math.PI * 2);
        ctx.fill();
        
        ctx.fillStyle = '#000';
        ctx.font = 'bold 10px Arial';
        ctx.fillText('CO₂', w * (0.15 + i * 0.08), h * 0.7);
      }
    }
  }
  
  static drawLeukocytes(ctx, w, h, func) {
    // All WBC types displayed
    const types = [
      { name: 'Neutrophil', x: 0.2, y: 0.25, type: 'neutrophil', color: '#FFE4E1' },
      { name: 'Lymphocyte', x: 0.5, y: 0.25, type: 'lymphocyte', color: '#E6E6FA' },
      { name: 'Monocyte', x: 0.8, y: 0.25, type: 'monocyte', color: '#F0E68C' },
      { name: 'Eosinophil', x: 0.35, y: 0.65, type: 'eosinophil', color: '#FFB6C1' },
      { name: 'Basophil', x: 0.65, y: 0.65, type: 'basophil', color: '#DDA0DD' }
    ];
    
    types.forEach(cell => {
      // Cell body
      ctx.fillStyle = cell.color;
      ctx.beginPath();
      ctx.arc(w * cell.x, h * cell.y, 35, 0, Math.PI * 2);
      ctx.fill();
      
      // Type-specific features
      this.drawWBCFeatures(ctx, w * cell.x, h * cell.y, 35, cell.type);
      
      // Label
      ctx.fillStyle = '#000';
      ctx.font = '12px Arial';
      ctx.textAlign = 'center';
      ctx.fillText(cell.name, w * cell.x, h * cell.y + 55);
    });
  }
  
  static drawWBCFeatures(ctx, x, y, size, type) {
    ctx.fillStyle = '#4B0082';
    
    switch(type) {
      case 'neutrophil':
        // 3-5 lobed nucleus
        for(let i = 0; i < 3; i++) {
          ctx.beginPath();
          ctx.arc(x + (i - 1) * 12, y, 10, 0, Math.PI * 2);
          ctx.fill();
        }
        break;
        
      case 'lymphocyte':
        // Large round nucleus (takes up most of cell)
        ctx.beginPath();
        ctx.arc(x, y, size * 0.65, 0, Math.PI * 2);
        ctx.fill();
        break;
        
      case 'monocyte':
        // Kidney/horseshoe-shaped nucleus
        ctx.beginPath();
        ctx.arc(x - 8, y, 15, 0.3, Math.PI - 0.3);
        ctx.arc(x + 8, y, 15, Math.PI - 0.3, -0.3);
        ctx.fill();
        break;
        
      case 'eosinophil':
        // Bi-lobed nucleus with granules
        ctx.beginPath();
        ctx.arc(x - 7, y, 12, 0, Math.PI * 2);
        ctx.fill();
        ctx.beginPath();
        ctx.arc(x + 7, y, 12, 0, Math.PI * 2);
        ctx.fill();
        
        // Red granules
        ctx.fillStyle = '#FF6347';
        for(let i = 0; i < 8; i++) {
          const angle = (Math.PI * 2 * i) / 8;
          ctx.beginPath();
          ctx.arc(x + Math.cos(angle) * 20, y + Math.sin(angle) * 20, 3, 0, Math.PI * 2);
          ctx.fill();
        }
        break;
        
      case 'basophil':
        // Obscured nucleus with dark granules
        ctx.beginPath();
        ctx.arc(x, y, 10, 0, Math.PI * 2);
        ctx.fill();
        
        // Purple/blue granules
        ctx.fillStyle = '#8B008B';
        for(let i = 0; i < 12; i++) {
          const angle = (Math.PI * 2 * i) / 12;
          const radius = 15 + Math.random() * 10;
          ctx.beginPath();
          ctx.arc(x + Math.cos(angle) * radius, y + Math.sin(angle) * radius, 4, 0, Math.PI * 2);
          ctx.fill();
        }
        break;
    }
    
    // Outline
    ctx.strokeStyle = '#483D8B';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.arc(x, y, size, 0, Math.PI * 2);
    ctx.stroke();
  }
  
  static drawPlatelets(ctx, w, h, func) {
    if(func === 'structure') {
      // Detailed platelet structure
      const centerX = w * 0.5;
      const centerY = h * 0.5;
      
      this.drawSinglePlatelet(ctx, centerX, centerY, 40);
      
      // Granules
      ctx.fillStyle = '#8B008B';
      for(let i = 0; i < 6; i++) {
        const angle = (Math.PI * 2 * i) / 6;
        ctx.beginPath();
        ctx.arc(
          centerX + Math.cos(angle) * 15,
          centerY + Math.sin(angle) * 15,
          4, 0, Math.PI * 2
        );
        ctx.fill();
      }
      
    } else if(func === 'clotting') {
      // Clotting cascade visualization
      const injury = { x: w * 0.2, y: h * 0.5 };
      
      // Blood vessel wall damage
      ctx.strokeStyle = '#8B0000';
      ctx.lineWidth = 4;
      ctx.beginPath();
      ctx.moveTo(injury.x, h * 0.3);
      ctx.lineTo(injury.x, h * 0.7);
      ctx.stroke();
      
      // Gap in vessel
      ctx.clearRect(injury.x - 5, h * 0.45, 10, h * 0.1);
      
      // Platelets accumulating
      const plateletPositions = [
        [0.22, 0.45], [0.24, 0.48], [0.26, 0.46],
        [0.23, 0.52], [0.25, 0.54], [0.27, 0.52]
      ];
      
      plateletPositions.forEach(([px, py]) => {
        this.drawSinglePlatelet(ctx, w * px, h * py, 12);
      });
      
      // Fibrin mesh
      ctx.strokeStyle = '#DAA520';
      ctx.lineWidth = 2;
      for(let i = 0; i < 8; i++) {
        ctx.beginPath();
        ctx.moveTo(w * 0.22 + Math.random() * 60, h * 0.45 + Math.random() * 40);
        ctx.lineTo(w * 0.22 + Math.random() * 60, h * 0.45 + Math.random() * 40);
        ctx.stroke();
      }
      
      // Clot formation
      ctx.fillStyle = 'rgba(139, 0, 0, 0.3)';
      ctx.beginPath();
      ctx.ellipse(w * 0.25, h * 0.5, 40, 50, 0, 0, Math.PI * 2);
      ctx.fill();
    }
  }
  
  static drawNeutrophils(ctx, w, h, func) {
    const centerX = w * 0.5;
    const centerY = h * 0.5;
    const size = 60;
    
    // Neutrophil cell
    ctx.fillStyle = '#FFE4E1';
    ctx.beginPath();
    ctx.arc(centerX, centerY, size, 0, Math.PI * 2);
    ctx.fill();
    
    // Multi-lobed nucleus (3-5 lobes)
    ctx.fillStyle = '#4B0082';
    const lobes = [
      { x: centerX - 20, y: centerY - 10 },
      { x: centerX, y: centerY - 15 },
      { x: centerX + 20, y: centerY - 10 },
      { x: centerX - 10, y: centerY + 15 },
      { x: centerX + 10, y: centerY + 15 }
    ];
    
    lobes.forEach(lobe => {
      ctx.beginPath();
      ctx.arc(lobe.x, lobe.y, 12, 0, Math.PI * 2);
      ctx.fill();
    });
    
    // Connecting chromatin
    ctx.strokeStyle = '#4B0082';
    ctx.lineWidth = 3;
    for(let i = 0; i < lobes.length - 1; i++) {
      ctx.beginPath();
      ctx.moveTo(lobes[i].x, lobes[i].y);
      ctx.lineTo(lobes[i + 1].x, lobes[i + 1].y);
      ctx.stroke();
    }
    
    if(func === 'immune-defense') {
      // Phagocytosis in action
      const bacteria = [
        { x: centerX + 80, y: centerY - 20 },
        { x: centerX + 90, y: centerY + 30 }
      ];
      
      bacteria.forEach(b => {
        ctx.fillStyle = '#8B4513';
        ctx.beginPath();
        ctx.arc(b.x, b.y, 10, 0, Math.PI * 2);
        ctx.fill();
        
        // Pseudopods extending
        ctx.strokeStyle = '#FFE4E1';
        ctx.lineWidth = 8;
        ctx.beginPath();
        ctx.moveTo(centerX + size - 10, centerY);
        ctx.lineTo(b.x - 15, b.y);
        ctx.stroke();
      });
    }
    
    // Granules
    ctx.fillStyle = '#FFB6C1';
    for(let i = 0; i < 15; i++) {
      const angle = (Math.PI * 2 * i) / 15;
      const radius = 35 + Math.random() * 15;
      ctx.beginPath();
      ctx.arc(
        centerX + Math.cos(angle) * radius,
        centerY + Math.sin(angle) * radius,
        3, 0, Math.PI * 2
      );
      ctx.fill();
    }
    
    // Outline
    ctx.strokeStyle = '#483D8B';
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.arc(centerX, centerY, size, 0, Math.PI * 2);
    ctx.stroke();
  }
  
  static drawLymphocytes(ctx, w, h, func) {
    const centerX = w * 0.5;
    const centerY = h * 0.5;
    const size = 60;
    
    // Lymphocyte cell
    ctx.fillStyle = '#E6E6FA';
    ctx.beginPath();
    ctx.arc(centerX, centerY, size, 0, Math.PI * 2);
    ctx.fill();
    
    // Large round nucleus (takes up most of cell)
    ctx.fillStyle = '#4B0082';
    ctx.beginPath();
    ctx.arc(centerX, centerY, size * 0.7, 0, Math.PI * 2);
    ctx.fill();
    
    // Chromatin pattern
    ctx.fillStyle = '#8B008B';
    for(let i = 0; i < 8; i++) {
      const angle = (Math.PI * 2 * i) / 8;
      ctx.beginPath();
      ctx.arc(
        centerX + Math.cos(angle) * 25,
        centerY + Math.sin(angle) * 25,
        5, 0, Math.PI * 2
      );
      ctx.fill();
    }
    
    // Thin rim of cytoplasm
    ctx.strokeStyle = '#E6E6FA';
    ctx.lineWidth = 8;
    ctx.beginPath();
    ctx.arc(centerX, centerY, size * 0.85, 0, Math.PI * 2);
    ctx.stroke();
    
    if(func === 'immune-defense') {
      // B cell producing antibodies
      for(let i = 0; i < 5; i++) {
        const angle = (Math.PI * 2 * i) / 5;
        this.drawAntibody(
          ctx,
          centerX + Math.cos(angle) * 90,
          centerY + Math.sin(angle) * 90,
          15
        );
      }
      
      // T cell attacking infected cell
      ctx.fillStyle = 'rgba(139, 0, 0, 0.5)';
      ctx.beginPath();
      ctx.arc(centerX + 100, centerY, 40, 0, Math.PI * 2);
      ctx.fill();
      
      // Perforin release
      ctx.strokeStyle = '#FFD700';
      ctx.lineWidth = 3;
      for(let i = 0; i < 4; i++) {
        ctx.beginPath();
        ctx.moveTo(centerX + size, centerY);
        ctx.lineTo(centerX + 100 - 40, centerY + (i - 1.5) * 10);
        ctx.stroke();
      }
    }
    
    // Outline
    ctx.strokeStyle = '#483D8B';
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.arc(centerX, centerY, size, 0, Math.PI * 2);
    ctx.stroke();
  }
  
  static drawMonocytes(ctx, w, h, func) {
    const centerX = w * 0.5;
    const centerY = h * 0.5;
    const size = 70;
    
    // Monocyte cell (largest WBC)
    ctx.fillStyle = '#F0E68C';
    ctx.beginPath();
    ctx.arc(centerX, centerY, size, 0, Math.PI * 2);
    ctx.fill();
    
    // Kidney/horseshoe-shaped nucleus
    ctx.fillStyle = '#4B0082';
    ctx.beginPath();
    ctx.arc(centerX - 15, centerY, 25, 0.3, Math.PI - 0.3);
    ctx.arc(centerX + 15, centerY, 25, Math.PI - 0.3, -0.3 + Math.PI * 2);
    ctx.fill();
    
    // Abundant cytoplasm with vacuoles
    ctx.fillStyle = 'rgba(255, 255, 255, 0.4)';
    for(let i = 0; i < 8; i++) {
      const angle = (Math.PI * 2 * i) / 8;
      ctx.beginPath();
      ctx.arc(
        centerX + Math.cos(angle) * 40,
        centerY + Math.sin(angle) * 40,
        8, 0, Math.PI * 2
      );
      ctx.fill();
    }
    
    if(func === 'immune-defense') {
      // Transformation to macrophage
      const macro = { x: centerX + 120, y: centerY, size: 90 };
      
      // Macrophage (larger, irregular)
      ctx.fillStyle = '#FFB366';
      ctx.beginPath();
      for(let i = 0; i < 12; i++) {
        const angle = (Math.PI * 2 * i) / 12;
        const radius = macro.size * (0.8 + Math.random() * 0.4);
        if(i === 0) {
          ctx.moveTo(macro.x + Math.cos(angle) * radius, macro.y + Math.sin(angle) * radius);
        } else {
          ctx.lineTo(macro.x + Math.cos(angle) * radius, macro.y + Math.sin(angle) * radius);
        }
      }
      ctx.closePath();
      ctx.fill();
      
      // Arrow showing transformation
      ctx.strokeStyle = '#000';
      ctx.lineWidth = 3;
      ctx.beginPath();
      ctx.moveTo(centerX + size + 5, centerY);
      ctx.lineTo(macro.x - macro.size - 5, macro.y);
      ctx.stroke();
      
      // Arrowhead
      ctx.beginPath();
      ctx.moveTo(macro.x - macro.size - 5, macro.y);
      ctx.lineTo(macro.x - macro.size - 15, macro.y - 8);
      ctx.lineTo(macro.x - macro.size - 15, macro.y + 8);
      ctx.closePath();
      ctx.fill();
    }
    
    // Outline
    ctx.strokeStyle = '#483D8B';
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.arc(centerX, centerY, size, 0, Math.PI * 2);
    ctx.stroke();
  }
  
  static drawEosinophils(ctx, w, h, func) {
    const centerX = w * 0.5;
    const centerY = h * 0.5;
    const size = 60;
    
    // Eosinophil cell
    ctx.fillStyle = '#FFB6C1';
    ctx.beginPath();
    ctx.arc(centerX, centerY, size, 0, Math.PI * 2);
    ctx.fill();
    
    // Bi-lobed nucleus
    ctx.fillStyle = '#4B0082';
    ctx.beginPath();
    ctx.arc(centerX - 15, centerY, 18, 0, Math.PI * 2);
    ctx.fill();
    ctx.beginPath();
    ctx.arc(centerX + 15, centerY, 18, 0, Math.PI * 2);
    ctx.fill();
    
    // Connecting bridge
    ctx.fillRect(centerX - 15, centerY - 8, 30, 16);
    
    // Large red/orange granules (characteristic)
    ctx.fillStyle = '#FF6347';
    const granules = 16;
    for(let i = 0; i < granules; i++) {
      const angle = (Math.PI * 2 * i) / granules;
      const radius = 30 + Math.random() * 15;
      ctx.beginPath();
      ctx.arc(
        centerX + Math.cos(angle) * radius,
        centerY + Math.sin(angle) * radius,
        5, 0, Math.PI * 2
      );
      ctx.fill();
    }
    
    if(func === 'immune-defense') {
      // Parasite (worm segment)
      ctx.strokeStyle = '#8B4513';
      ctx.lineWidth = 20;
      ctx.beginPath();
      ctx.moveTo(w * 0.15, h * 0.3);
      ctx.quadraticCurveTo(w * 0.15, h * 0.6, w * 0.25, h * 0.7);
      ctx.stroke();
      
      // Eosinophils attacking
      for(let i = 0; i < 3; i++) {
        const attackX = w * 0.15 + i * 20;
        const attackY = h * 0.4 + i * 15;
        
        ctx.fillStyle = '#FFB6C1';
        ctx.beginPath();
        ctx.arc(attackX, attackY, 15, 0, Math.PI * 2);
        ctx.fill();
        
        // Release of granules
        ctx.fillStyle = '#FF6347';
        for(let j = 0; j < 3; j++) {
          ctx.beginPath();
          ctx.arc(attackX + 20 + j * 8, attackY, 3, 0, Math.PI * 2);
          ctx.fill();
        }
      }
    }
    
    // Outline
    ctx.strokeStyle = '#483D8B';
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.arc(centerX, centerY, size, 0, Math.PI * 2);
    ctx.stroke();
  }
  
  static drawBasophils(ctx, w, h, func) {
    const centerX = w * 0.5;
    const centerY = h * 0.5;
    const size = 60;
    
    // Basophil cell
    ctx.fillStyle = '#DDA0DD';
    ctx.beginPath();
    ctx.arc(centerX, centerY, size, 0, Math.PI * 2);
    ctx.fill();
    
    // Obscured S-shaped or lobed nucleus (hard to see due to granules)
    ctx.fillStyle = '#4B0082';
    ctx.beginPath();
    ctx.arc(centerX, centerY, 20, 0, Math.PI * 2);
    ctx.fill();
    
    // Large dark purple/blue granules (very prominent, obscure nucleus)
    ctx.fillStyle = '#8B008B';
    const granules = 20;
    for(let i = 0; i < granules; i++) {
      const angle = (Math.PI * 2 * i) / granules;
      const radius = 15 + Math.random() * 30;
      ctx.beginPath();
      ctx.arc(
        centerX + Math.cos(angle) * radius,
        centerY + Math.sin(angle) * radius,
        6, 0, Math.PI * 2
      );
      ctx.fill();
    }
    
    // More granules in random positions
    for(let i = 0; i < 10; i++) {
      const angle = Math.random() * Math.PI * 2;
      const radius = Math.random() * 45;
      ctx.beginPath();
      ctx.arc(
        centerX + Math.cos(angle) * radius,
        centerY + Math.sin(angle) * radius,
        5, 0, Math.PI * 2
      );
      ctx.fill();
    }
    
    if(func === 'immune-defense') {
      // Histamine release (allergic response)
      ctx.fillStyle = 'rgba(255, 0, 0, 0.3)';
      ctx.beginPath();
      ctx.arc(centerX, centerY, 100, 0, Math.PI * 2);
      ctx.fill();
      
      // Histamine molecules
      for(let i = 0; i < 8; i++) {
        const angle = (Math.PI * 2 * i) / 8;
        ctx.fillStyle = '#FF1493';
        ctx.beginPath();
        ctx.arc(
          centerX + Math.cos(angle) * 80,
          centerY + Math.sin(angle) * 80,
          8, 0, Math.PI * 2
        );
        ctx.fill();
        
        ctx.fillStyle = '#000';
        ctx.font = '10px Arial';
        ctx.textAlign = 'center';
        ctx.fillText('H',
          centerX + Math.cos(angle) * 80,
          centerY + Math.sin(angle) * 80 + 3
        );
      }
    }
    
    // Outline
    ctx.strokeStyle = '#483D8B';
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.arc(centerX, centerY, size, 0, Math.PI * 2);
    ctx.stroke();
  }
  
  // ===== ANTIBODY STRUCTURE DIAGRAMS =====
  
  static drawAntibodyStructure(ctx, x, y, width, height, region, type) {
    ctx.save();
    ctx.translate(x, y);
    
    const w = width;
    const h = height;
    const centerX = w * 0.5;
    const centerY = h * 0.5;
    
    // Draw complete Y-shaped antibody
    this.drawCompleteAntibody(ctx, centerX, centerY, w * 0.4, h * 0.6, region, type);
    
    ctx.restore();
  }
  
  static drawCompleteAntibody(ctx, centerX, centerY, width, height, region, type) {
    const armWidth = width * 0.4;
    const armHeight = height * 0.4;
    const stemHeight = height * 0.5;
    
    // Highlight specific region if requested
    const highlightColor = '#FFD700';
    const baseColor = '#4169E1';
    const variableColor = '#FF6347';
    const constantColor = '#4169E1';
    
    // Left Fab arm
    ctx.strokeStyle = region === 'fab' || region === 'antigen-binding' ? highlightColor : baseColor;
    ctx.lineWidth = 20;
    ctx.lineCap = 'round';
    ctx.beginPath();
    ctx.moveTo(centerX, centerY);
    ctx.lineTo(centerX - armWidth, centerY - armHeight);
    ctx.stroke();
    
    // Right Fab arm
    ctx.beginPath();
    ctx.moveTo(centerX, centerY);
    ctx.lineTo(centerX + armWidth, centerY - armHeight);
    ctx.stroke();
    
    // Fc stem
    ctx.strokeStyle = region === 'fc' ? highlightColor : baseColor;
    ctx.beginPath();
    ctx.moveTo(centerX, centerY);
    ctx.lineTo(centerX, centerY + stemHeight);
    ctx.stroke();
    
    // Variable regions (antigen binding sites)
    ctx.fillStyle = region === 'variable-region' || region === 'antigen-binding' ? highlightColor : variableColor;
    ctx.beginPath();
    ctx.arc(centerX - armWidth, centerY - armHeight, 25, 0, Math.PI * 2);
    ctx.fill();
    ctx.beginPath();
    ctx.arc(centerX + armWidth, centerY - armHeight, 25, 0, Math.PI * 2);
    ctx.fill();
    
    // Constant regions
    ctx.fillStyle = region === 'constant-region' ? highlightColor : constantColor;
    
    // Heavy chains (larger ovals along arms and stem)
    ctx.beginPath();
    ctx.ellipse(centerX - armWidth * 0.5, centerY - armHeight * 0.5, 15, 25, -0.5, 0, Math.PI * 2);
    ctx.fill();
    ctx.beginPath();
    ctx.ellipse(centerX + armWidth * 0.5, centerY - armHeight * 0.5, 15, 25, 0.5, 0, Math.PI * 2);
    ctx.fill();
    
    // Light chains (smaller ovals on outer arms)
    ctx.fillStyle = region === 'constant-region' ? highlightColor : '#87CEEB';
    ctx.beginPath();
    ctx.ellipse(centerX - armWidth * 0.7, centerY - armHeight * 0.7, 12, 20, -0.5, 0, Math.PI * 2);
    ctx.fill();
    ctx.beginPath();
    ctx.ellipse(centerX + armWidth * 0.7, centerY - armHeight * 0.7, 12, 20, 0.5, 0, Math.PI * 2);
    ctx.fill();
    
    // Fc region (crystallizable fragment)
    ctx.fillStyle = region === 'fc' ? highlightColor : constantColor;
    ctx.beginPath();
    ctx.ellipse(centerX - 20, centerY + stemHeight * 0.5, 15, 30, 0, 0, Math.PI * 2);
    ctx.fill();
    ctx.beginPath();
    ctx.ellipse(centerX + 20, centerY + stemHeight * 0.5, 15, 30, 0, 0, Math.PI * 2);
    ctx.fill();
    
    // Hinge region
    ctx.strokeStyle = '#FFB6C1';
    ctx.lineWidth = 8;
    ctx.setLineDash([5, 5]);
    ctx.beginPath();
    ctx.moveTo(centerX - 15, centerY - 10);
    ctx.lineTo(centerX + 15, centerY + 10);
    ctx.stroke();
    ctx.setLineDash([]);
    
    // Disulfide bonds (S-S)
    ctx.strokeStyle = '#FFD700';
    ctx.lineWidth = 3;
    const bonds = [
      [centerX - armWidth * 0.6, centerY - armHeight * 0.6],
      [centerX + armWidth * 0.6, centerY - armHeight * 0.6],
      [centerX, centerY]
    ];
    
    bonds.forEach(([bx, by]) => {
      ctx.beginPath();
      ctx.moveTo(bx - 8, by - 8);
      ctx.lineTo(bx + 8, by + 8);
      ctx.moveTo(bx + 8, by - 8);
      ctx.lineTo(bx - 8, by + 8);
      ctx.stroke();
    });
    
    // Labels based on type
    ctx.fillStyle = '#000';
    ctx.font = 'bold 14px Arial';
    ctx.textAlign = 'center';
    
    if(type === 'IgG') {
      ctx.fillText('IgG (Most Common)', centerX, centerY + stemHeight + 40);
    } else if(type === 'IgM') {
      // IgM is pentameric - draw 5 Y shapes in a circle
      ctx.fillText('IgM (Pentamer)', centerX, centerY + stemHeight + 60);
      for(let i = 0; i < 5; i++) {
        const angle = (Math.PI * 2 * i) / 5 - Math.PI / 2;
        const radius = 80;
        const scale = 0.3;
        ctx.save();
        ctx.translate(
          centerX + Math.cos(angle) * radius,
          centerY + Math.sin(angle) * radius
        );
        ctx.rotate(angle + Math.PI / 2);
        ctx.strokeStyle = '#4169E1';
        ctx.lineWidth = 8;
        // Small Y shape
        ctx.beginPath();
        ctx.moveTo(0, 0);
        ctx.lineTo(-15 * scale, -20 * scale);
        ctx.moveTo(0, 0);
        ctx.lineTo(15 * scale, -20 * scale);
        ctx.moveTo(0, 0);
        ctx.lineTo(0, 25 * scale);
        ctx.stroke();
        ctx.restore();
      }
    } else if(type === 'IgA') {
      ctx.fillText('IgA (Dimer - Mucosal)', centerX, centerY + stemHeight + 40);
    } else if(type === 'IgE') {
      // IgE has extra constant domain
      ctx.fillText('IgE (Allergy/Parasite)', centerX, centerY + stemHeight + 50);
      ctx.fillStyle = '#FF69B4';
      ctx.beginPath();
      ctx.ellipse(centerX, centerY + stemHeight * 0.7, 20, 25, 0, 0, Math.PI * 2);
      ctx.fill();
    } else if(type === 'IgD') {
      ctx.fillText('IgD (B Cell Receptor)', centerX, centerY + stemHeight + 40);
    }
    
    // Antigen if showing binding
    if(region === 'antigen-binding') {
      this.drawAntigen(ctx, centerX - armWidth, centerY - armHeight - 40, 30);
      this.drawAntigen(ctx, centerX + armWidth, centerY - armHeight - 40, 30);
    }
  }
  
  static drawAntigen(ctx, x, y, size) {
    // Pathogen antigen (epitope)
    ctx.fillStyle = '#8B0000';
    ctx.beginPath();
    ctx.arc(x, y, size, 0, Math.PI * 2);
    ctx.fill();
    
    // Epitope (binding site)
    ctx.fillStyle = '#FF0000';
    ctx.beginPath();
    ctx.arc(x, y + size * 0.7, size * 0.4, 0, Math.PI * 2);
    ctx.fill();
    
    // Binding indication
    ctx.strokeStyle = '#FFD700';
    ctx.lineWidth = 3;
    ctx.setLineDash([5, 5]);
    ctx.beginPath();
    ctx.moveTo(x, y + size);
    ctx.lineTo(x, y + size + 15);
    ctx.stroke();
    ctx.setLineDash([]);
  }
  
  static drawAntibody(ctx, x, y, size) {
    // Simple Y-shaped antibody for use in other diagrams
    ctx.strokeStyle = '#4169E1';
    ctx.lineWidth = 3;
    ctx.lineCap = 'round';
    
    // Left arm
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineTo(x - size * 0.6, y - size * 0.8);
    ctx.stroke();
    
    // Right arm
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineTo(x + size * 0.6, y - size * 0.8);
    ctx.stroke();
    
    // Stem
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineTo(x, y + size);
    ctx.stroke();
    
    // Binding sites
    ctx.fillStyle = '#FF6347';
    ctx.beginPath();
    ctx.arc(x - size * 0.6, y - size * 0.8, size * 0.2, 0, Math.PI * 2);
    ctx.fill();
    ctx.beginPath();
    ctx.arc(x + size * 0.6, y - size * 0.8, size * 0.2, 0, Math.PI * 2);
    ctx.fill();
  }
  
  // ===== PATHOGEN TYPES DIAGRAMS =====
  
  static drawPathogenTypes(ctx, x, y, width, height, pathogen, characteristic) {
    ctx.save();
    ctx.translate(x, y);
    
    const w = width;
    const h = height;
    
    switch(pathogen) {
      case 'all':
        this.drawAllPathogens(ctx, w, h, characteristic);
        break;
      case 'bacteria':
        this.drawBacteria(ctx, w, h, characteristic);
        break;
      case 'viruses':
        this.drawVirus(ctx, w, h, characteristic);
        break;
      case 'fungi':
        this.drawFungi(ctx, w, h, characteristic);
        break;
      case 'protozoa':
        this.drawProtozoa(ctx, w, h, characteristic);
        break;
      case 'helminths':
        this.drawHelminths(ctx, w, h, characteristic);
        break;
      case 'prions':
        this.drawPrions(ctx, w, h, characteristic);
        break;
    }
    
    ctx.restore();
  }
  
  static drawAllPathogens(ctx, w, h, characteristic) {
    const pathogens = [
      { name: 'Bacteria', x: 0.2, y: 0.25, type: 'bacteria' },
      { name: 'Virus', x: 0.5, y: 0.25, type: 'virus' },
      { name: 'Fungi', x: 0.8, y: 0.25, type: 'fungi' },
      { name: 'Protozoa', x: 0.25, y: 0.65, type: 'protozoa' },
      { name: 'Helminth', x: 0.55, y: 0.65, type: 'helminth' },
      { name: 'Prion', x: 0.85, y: 0.65, type: 'prion' }
    ];
    
    pathogens.forEach(p => {
      this.drawPathogenIcon(ctx, w * p.x, h * p.y, 40, p.type);
      
      ctx.fillStyle = '#000';
      ctx.font = '12px Arial';
      ctx.textAlign = 'center';
      ctx.fillText(p.name, w * p.x, h * p.y + 50);
      
      // Size indication
      if(characteristic === 'size') {
        const sizes = {
          'bacteria': '1-10 μm',
          'virus': '20-300 nm',
          'fungi': '2-200 μm',
          'protozoa': '10-100 μm',
          'helminth': 'mm-m',
          'prion': '2-10 nm'
        };
        ctx.font = '10px Arial';
        ctx.fillText(sizes[p.type], w * p.x, h * p.y + 65);
      }
    });
  }
  
  static drawPathogenIcon(ctx, x, y, size, type) {
    switch(type) {
      case 'bacteria':
        // Rod-shaped bacterium
        ctx.fillStyle = '#228B22';
        ctx.beginPath();
        ctx.ellipse(x, y, size * 0.8, size * 0.3, 0, 0, Math.PI * 2);
        ctx.fill();
        
        // Flagella
        ctx.strokeStyle = '#228B22';
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(x - size * 0.8, y);
        ctx.quadraticCurveTo(x - size * 1.2, y - size * 0.4, x - size * 1.5, y);
        ctx.stroke();
        break;
        
      case 'virus':
        // Icosahedral virus
        ctx.fillStyle = '#FF6347';
        ctx.beginPath();
        ctx.arc(x, y, size * 0.5, 0, Math.PI * 2);
        ctx.fill();
        
        // Spikes
        for(let i = 0; i < 8; i++) {
          const angle = (Math.PI * 2 * i) / 8;
          ctx.fillStyle = '#FF0000';
          ctx.beginPath();
          ctx.arc(
            x + Math.cos(angle) * size * 0.6,
            y + Math.sin(angle) * size * 0.6,
            size * 0.15, 0, Math.PI * 2
          );
          ctx.fill();
        }
        break;
        
      case 'fungi':
        // Yeast cell with bud
        ctx.fillStyle = '#DEB887';
        ctx.beginPath();
        ctx.arc(x, y, size * 0.6, 0, Math.PI * 2);
        ctx.fill();
        
        // Bud
        ctx.beginPath();
        ctx.arc(x + size * 0.5, y - size * 0.3, size * 0.3, 0, Math.PI * 2);
        ctx.fill();
        
        // Cell wall
        ctx.strokeStyle = '#8B4513';
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.arc(x, y, size * 0.6, 0, Math.PI * 2);
        ctx.stroke();
        break;
        
      case 'protozoa':
        // Amoeba-like shape
        ctx.fillStyle = '#87CEEB';
        ctx.beginPath();
        for(let i = 0; i < 8; i++) {
          const angle = (Math.PI * 2 * i) / 8;
          const radius = size * (0.5 + Math.random() * 0.3);
          if(i === 0) {
            ctx.moveTo(x + Math.cos(angle) * radius, y + Math.sin(angle) * radius);
          } else {
            ctx.lineTo(x + Math.cos(angle) * radius, y + Math.sin(angle) * radius);
          }
        }
        ctx.closePath();
        ctx.fill();
        
        // Nucleus
        ctx.fillStyle = '#4169E1';
        ctx.beginPath();
        ctx.arc(x, y, size * 0.2, 0, Math.PI * 2);
        ctx.fill();
        break;
        
      case 'helminth':
        // Worm segment
        ctx.strokeStyle = '#CD853F';
        ctx.lineWidth = size * 0.4;
        ctx.lineCap = 'round';
        ctx.beginPath();
        ctx.moveTo(x - size * 0.6, y - size * 0.3);
        ctx.quadraticCurveTo(x, y + size * 0.3, x + size * 0.6, y - size * 0.2);
        ctx.stroke();
        
        // Segments
        ctx.strokeStyle = '#8B4513';
        ctx.lineWidth = 1;
        for(let i = 0; i < 4; i++) {
          ctx.beginPath();
          ctx.moveTo(x - size * 0.4 + i * size * 0.3, y - size * 0.4);
          ctx.lineTo(x - size * 0.4 + i * size * 0.3, y + size * 0.4);
          ctx.stroke();
        }
        break;
        
      case 'prion':
        // Misfolded protein
        ctx.strokeStyle = '#9370DB';
        ctx.lineWidth = 4;
        ctx.beginPath();
        for(let i = 0; i < 10; i++) {
          const xPos = x - size * 0.5 + i * size * 0.12;
          ctx.lineTo(xPos, y + (i % 2 === 0 ? -size * 0.3 : size * 0.3));
        }
        ctx.stroke();
        break;
    }
  }
  
  static drawBacteria(ctx, w, h, characteristic) {
    const centerX = w * 0.5;
    const centerY = h * 0.5;
    
    if(characteristic === 'structure') {
      // Detailed bacterial structure
      
      // Cell wall
      ctx.strokeStyle = '#8B4513';
      ctx.lineWidth = 6;
      ctx.beginPath();
      ctx.ellipse(centerX, centerY, 100, 40, 0, 0, Math.PI * 2);
      ctx.stroke();
      
      // Cell membrane
      ctx.strokeStyle = '#228B22';
      ctx.lineWidth = 3;
      ctx.setLineDash([5, 5]);
      ctx.beginPath();
      ctx.ellipse(centerX, centerY, 94, 36, 0, 0, Math.PI * 2);
      ctx.stroke();
      ctx.setLineDash([]);
      
      // Cytoplasm
      ctx.fillStyle = '#90EE90';
      ctx.beginPath();
      ctx.ellipse(centerX, centerY, 90, 32, 0, 0, Math.PI * 2);
      ctx.fill();
      
      // Nucleoid (DNA region)
      ctx.fillStyle = '#FFD700';
      ctx.beginPath();
      ctx.arc(centerX, centerY, 25, 0, Math.PI * 2);
      ctx.fill();
      
      // Plasmids
      ctx.strokeStyle = '#FFD700';
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.arc(centerX - 40, centerY - 10, 8, 0, Math.PI * 2);
      ctx.stroke();
      ctx.beginPath();
      ctx.arc(centerX + 35, centerY + 8, 6, 0, Math.PI * 2);
      ctx.stroke();
      
      // Ribosomes
      ctx.fillStyle = '#4169E1';
      for(let i = 0; i < 15; i++) {
        const angle = Math.random() * Math.PI * 2;
        const radius = Math.random() * 60;
        ctx.beginPath();
        ctx.arc(
          centerX + Math.cos(angle) * radius,
          centerY + Math.sin(angle) * radius * 0.4,
          2, 0, Math.PI * 2
        );
        ctx.fill();
      }
      
      // Flagellum
      ctx.strokeStyle = '#228B22';
      ctx.lineWidth = 3;
      ctx.beginPath();
      ctx.moveTo(centerX + 100, centerY);
      for(let i = 0; i < 8; i++) {
        ctx.lineTo(
          centerX + 100 + i * 20,
          centerY + (i % 2 === 0 ? -15 : 15)
        );
      }
      ctx.stroke();
      
      // Pili (shorter, straighter)
      for(let i = 0; i < 5; i++) {
        const angle = (Math.PI * 2 * i) / 5;
        ctx.strokeStyle = '#228B22';
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(
          centerX + Math.cos(angle) * 100,
          centerY + Math.sin(angle) * 40
        );
        ctx.lineTo(
          centerX + Math.cos(angle) * 130,
          centerY + Math.sin(angle) * 52
        );
        ctx.stroke();
      }
      
      // Labels
      ctx.fillStyle = '#000';
      ctx.font = '12px Arial';
      ctx.fillText('Cell Wall', centerX - 120, centerY - 50);
      ctx.fillText('Nucleoid', centerX + 30, centerY);
      ctx.fillText('Flagellum', centerX + 180, centerY - 30);
      ctx.fillText('Pili', centerX + 120, centerY + 70);
      
    } else if(characteristic === 'reproduction') {
      // Binary fission
      const stages = [
        { x: 0.2, y: 0.3, phase: 1 },
        { x: 0.5, y: 0.3, phase: 2 },
        { x: 0.8, y: 0.3, phase: 3 },
        { x: 0.35, y: 0.7, phase: 4 }
      ];
      
      stages.forEach(stage => {
        const x = w * stage.x;
        const y = h * stage.y;
        
        ctx.fillStyle = '#90EE90';
        ctx.strokeStyle = '#228B22';
        ctx.lineWidth = 3;
        
        switch(stage.phase) {
          case 1:
            // Original cell
            ctx.beginPath();
            ctx.ellipse(x, y, 40, 20, 0, 0, Math.PI * 2);
            ctx.fill();
            ctx.stroke();
            
            // Single chromosome
            ctx.fillStyle = '#FFD700';
            ctx.beginPath();
            ctx.arc(x, y, 8, 0, Math.PI * 2);
            ctx.fill();
            break;
            
          case 2:
            // DNA replication
            ctx.beginPath();
            ctx.ellipse(x, y, 45, 22, 0, 0, Math.PI * 2);
            ctx.fill();
            ctx.stroke();
            
            // Two chromosomes
            ctx.fillStyle = '#FFD700';
            ctx.beginPath();
            ctx.arc(x - 10, y, 8, 0, Math.PI * 2);
            ctx.fill();
            ctx.beginPath();
            ctx.arc(x + 10, y, 8, 0, Math.PI * 2);
            ctx.fill();
            break;
            
          case 3:
            // Cell elongation
            ctx.beginPath();
            ctx.ellipse(x, y, 50, 20, 0, 0, Math.PI * 2);
            ctx.fill();
            ctx.stroke();
            
            // Chromosomes separating
            ctx.fillStyle = '#FFD700';
            ctx.beginPath();
            ctx.arc(x - 20, y, 8, 0, Math.PI * 2);
            ctx.fill();
            ctx.beginPath();
            ctx.arc(x + 20, y, 8, 0, Math.PI * 2);
            ctx.fill();
            
            // Division forming
            ctx.strokeStyle = '#8B4513';
            ctx.lineWidth = 2;
            ctx.beginPath();
            ctx.moveTo(x, y - 20);
            ctx.lineTo(x, y + 20);
            ctx.stroke();
            break;
            
          case 4:
            // Two daughter cells
            ctx.beginPath();
            ctx.ellipse(x - 25, y, 40, 20, 0, 0, Math.PI * 2);
            ctx.fill();
            ctx.stroke();
            
            ctx.beginPath();
            ctx.ellipse(x + 25, y, 40, 20, 0, 0, Math.PI * 2);
            ctx.fill();
            ctx.stroke();
            
            ctx.fillStyle = '#FFD700';
            ctx.beginPath();
            ctx.arc(x - 25, y, 8, 0, Math.PI * 2);
            ctx.fill();
            ctx.beginPath();
            ctx.arc(x + 25, y, 8, 0, Math.PI * 2);
            ctx.fill();
            break;
        }
      });
      
      // Timeline
      ctx.strokeStyle = '#000';
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(w * 0.1, h * 0.5);
      ctx.lineTo(w * 0.9, h * 0.5);
      ctx.stroke();
      
      ctx.fillStyle = '#000';
      ctx.font = '12px Arial';
      ctx.fillText('~20-30 minutes', w * 0.4, h * 0.55);
    }
  }
  
  static drawVirus(ctx, w, h, characteristic) {
    const centerX = w * 0.5;
    const centerY = h * 0.5;
    
    if(characteristic === 'structure') {
      // Detailed virus structure (bacteriophage-like for complexity)
      
      // Head (capsid)
      ctx.fillStyle = '#FF6347';
      ctx.beginPath();
      // Icosahedral approximation
      const sides = 6;
      for(let i = 0; i < sides; i++) {
        const angle = (Math.PI * 2 * i) / sides;
        const x = centerX + Math.cos(angle) * 60;
        const y = centerY - 50 + Math.sin(angle) * 60;
        if(i === 0) {
          ctx.moveTo(x, y);
        } else {
          ctx.lineTo(x, y);
        }
      }
      ctx.closePath();
      ctx.fill();
      
      // Nucleic acid (DNA/RNA inside)
      ctx.strokeStyle = '#FFD700';
      ctx.lineWidth = 3;
      ctx.beginPath();
      for(let i = 0; i < 20; i++) {
        const angle = Math.random() * Math.PI * 2;
        const radius = Math.random() * 40;
        ctx.lineTo(
          centerX + Math.cos(angle) * radius,
          centerY - 50 + Math.sin(angle) * radius
        );
      }
      ctx.stroke();
      
      // Tail sheath
      ctx.fillStyle = '#FF4500';
      ctx.fillRect(centerX - 20, centerY + 20, 40, 80);
      
      // Tail fibers
      const fiberPositions = [-30, -10, 10, 30];
      fiberPositions.forEach(offset => {
        ctx.strokeStyle = '#FF4500';
        ctx.lineWidth = 4;
        ctx.beginPath();
        ctx.moveTo(centerX + offset, centerY + 100);
        ctx.lineTo(centerX + offset * 2, centerY + 150);
        ctx.stroke();
      });
      
      // Base plate
      ctx.fillStyle = '#8B0000';
      ctx.fillRect(centerX - 35, centerY + 100, 70, 10);
      
      // Spikes on head
      for(let i = 0; i < 6; i++) {
        const angle = (Math.PI * 2 * i) / 6;
        ctx.fillStyle = '#FF0000';
        ctx.beginPath();
        ctx.arc(
          centerX + Math.cos(angle) * 70,
          centerY - 50 + Math.sin(angle) * 70,
          8, 0, Math.PI * 2
        );
        ctx.fill();
      }
      
      // Labels
      ctx.fillStyle = '#000';
      ctx.font = '12px Arial';
      ctx.fillText('Capsid (Protein Coat)', centerX + 80, centerY - 50);
      ctx.fillText('Genetic Material', centerX + 80, centerY - 30);
      ctx.fillText('Tail Sheath', centerX + 50, centerY + 60);
      ctx.fillText('Tail Fibers', centerX + 80, centerY + 130);
      
    } else if(characteristic === 'reproduction') {
      // Viral replication cycle (lytic)
      const stages = [
        { name: 'Attachment', x: 0.2, y: 0.25 },
        { name: 'Penetration', x: 0.5, y: 0.25 },
        { name: 'Replication', x: 0.8, y: 0.25 },
        { name: 'Assembly', x: 0.3, y: 0.65 },
        { name: 'Release', x: 0.7, y: 0.65 }
      ];
      
      stages.forEach((stage, index) => {
        const x = w * stage.x;
        const y = h * stage.y;
        
        switch(index) {
          case 0: // Attachment
            // Host cell
            ctx.fillStyle = '#FFE4C4';
            ctx.beginPath();
            ctx.arc(x, y, 40, 0, Math.PI * 2);
            ctx.fill();
            
            // Virus approaching
            ctx.fillStyle = '#FF6347';
            ctx.beginPath();
            ctx.arc(x - 60, y, 15, 0, Math.PI * 2);
            ctx.fill();
            
            // Spikes
            for(let i = 0; i < 6; i++) {
              const angle = (Math.PI * 2 * i) / 6;
              ctx.fillStyle = '#FF0000';
              ctx.beginPath();
              ctx.arc(
                x - 60 + Math.cos(angle) * 18,
                y + Math.sin(angle) * 18,
                4, 0, Math.PI * 2
              );
              ctx.fill();
            }
            break;
            
          case 1: // Penetration
            ctx.fillStyle = '#FFE4C4';
            ctx.beginPath();
            ctx.arc(x, y, 40, 0, Math.PI * 2);
            ctx.fill();
            
            // Virus entering
            ctx.fillStyle = '#FF6347';
            ctx.beginPath();
            ctx.arc(x - 25, y, 12, 0, Math.PI * 2);
            ctx.fill();
            
            // DNA injecting
            ctx.strokeStyle = '#FFD700';
            ctx.lineWidth = 3;
            ctx.beginPath();
            ctx.moveTo(x - 25, y);
            ctx.lineTo(x, y);
            ctx.stroke();
            break;
            
          case 2: // Replication
            ctx.fillStyle = '#FFE4C4';
            ctx.beginPath();
            ctx.arc(x, y, 40, 0, Math.PI * 2);
            ctx.fill();
            
            // Multiple viral DNA
            for(let i = 0; i < 6; i++) {
              const angle = (Math.PI * 2 * i) / 6;
              ctx.strokeStyle = '#FFD700';
              ctx.lineWidth = 2;
              ctx.beginPath();
              ctx.arc(
                x + Math.cos(angle) * 20,
                y + Math.sin(angle) * 20,
                8, 0, Math.PI * 2
              );
              ctx.stroke();
            }
            break;
            
          case 3: // Assembly
            ctx.fillStyle = '#FFE4C4';
            ctx.beginPath();
            ctx.arc(x, y, 40, 0, Math.PI * 2);
            ctx.fill();
            
            // New viruses forming
            for(let i = 0; i < 5; i++) {
              const angle = (Math.PI * 2 * i) / 5;
              ctx.fillStyle = '#FF6347';
              ctx.beginPath();
              ctx.arc(
                x + Math.cos(angle) * 25,
                y + Math.sin(angle) * 25,
                10, 0,Math.PI * 2
              );
              ctx.fill();
            }
            break;
            
          case 4: // Release
            // Lysed cell
            ctx.strokeStyle = '#FFE4C4';
            ctx.lineWidth = 3;
            ctx.setLineDash([10, 5]);
            ctx.beginPath();
            ctx.arc(x, y, 40, 0, Math.PI * 2);
            ctx.stroke();
            ctx.setLineDash([]);
            
            // Released viruses
            const releasePositions = [
              [-60, -30], [-40, -50], [40, -50], [60, -30],
              [-50, 40], [0, 60], [50, 40]
            ];
            
            releasePositions.forEach(([dx, dy]) => {
              ctx.fillStyle = '#FF6347';
              ctx.beginPath();
              ctx.arc(x + dx, y + dy, 12, 0, Math.PI * 2);
              ctx.fill();
              
              // Spikes
              for(let i = 0; i < 6; i++) {
                const angle = (Math.PI * 2 * i) / 6;
                ctx.fillStyle = '#FF0000';
                ctx.beginPath();
                ctx.arc(
                  x + dx + Math.cos(angle) * 15,
                  y + dy + Math.sin(angle) * 15,
                  3, 0, Math.PI * 2
                );
                ctx.fill();
              }
            });
            break;
        }
        
        // Stage label
        ctx.fillStyle = '#000';
        ctx.font = 'bold 11px Arial';
        ctx.textAlign = 'center';
        ctx.fillText(stage.name, x, y + 60);
      });
    }
  }
  
  static drawFungi(ctx, w, h, characteristic) {
    const centerX = w * 0.5;
    const centerY = h * 0.5;
    
    if(characteristic === 'structure') {
      // Yeast cell with detailed structure
      
      // Cell wall
      ctx.strokeStyle = '#8B4513';
      ctx.lineWidth = 5;
      ctx.beginPath();
      ctx.arc(centerX, centerY, 80, 0, Math.PI * 2);
      ctx.stroke();
      
      // Cell membrane
      ctx.strokeStyle = '#DEB887';
      ctx.lineWidth = 2;
      ctx.setLineDash([5, 5]);
      ctx.beginPath();
      ctx.arc(centerX, centerY, 75, 0, Math.PI * 2);
      ctx.stroke();
      ctx.setLineDash([]);
      
      // Cytoplasm
      ctx.fillStyle = '#F5DEB3';
      ctx.beginPath();
      ctx.arc(centerX, centerY, 72, 0, Math.PI * 2);
      ctx.fill();
      
      // Nucleus
      ctx.strokeStyle = '#4B0082';
      ctx.lineWidth = 3;
      ctx.beginPath();
      ctx.arc(centerX, centerY, 25, 0, Math.PI * 2);
      ctx.stroke();
      
      ctx.fillStyle = '#E6E6FA';
      ctx.beginPath();
      ctx.arc(centerX, centerY, 22, 0, Math.PI * 2);
      ctx.fill();
      
      // Vacuole
      ctx.strokeStyle = '#87CEEB';
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.arc(centerX + 35, centerY - 20, 20, 0, Math.PI * 2);
      ctx.stroke();
      
      // Mitochondria
      ctx.fillStyle = '#FF6347';
      const mitoPositions = [
        [centerX - 40, centerY + 20],
        [centerX + 30, centerY + 30],
        [centerX - 30, centerY - 35]
      ];
      
      mitoPositions.forEach(([mx, my]) => {
        ctx.beginPath();
        ctx.ellipse(mx, my, 15, 8, Math.random() * Math.PI, 0, Math.PI * 2);
        ctx.fill();
      });
      
      // Bud (asexual reproduction)
      ctx.fillStyle = '#F5DEB3';
      ctx.strokeStyle = '#8B4513';
      ctx.lineWidth = 4;
      ctx.beginPath();
      ctx.arc(centerX + 70, centerY - 40, 30, 0, Math.PI * 2);
      ctx.fill();
      ctx.stroke();
      
      // Bud scar
      ctx.strokeStyle = '#8B4513';
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.arc(centerX + 50, centerY - 30, 8, 0, Math.PI * 2);
      ctx.stroke();
      
      // Labels
      ctx.fillStyle = '#000';
      ctx.font = '12px Arial';
      ctx.fillText('Cell Wall', centerX - 120, centerY);
      ctx.fillText('Nucleus', centerX + 30, centerY - 5);
      ctx.fillText('Vacuole', centerX + 65, centerY - 20);
      ctx.fillText('Bud', centerX + 105, centerY - 40);
      
    } else if(characteristic === 'reproduction') {
      // Budding process
      const stages = [
        { x: 0.15, y: 0.5, budSize: 0 },
        { x: 0.35, y: 0.5, budSize: 0.3 },
        { x: 0.55, y: 0.5, budSize: 0.6 },
        { x: 0.75, y: 0.5, budSize: 0.9 }
      ];
      
      stages.forEach(stage => {
        const x = w * stage.x;
        const y = h * stage.y;
        
        // Mother cell
        ctx.fillStyle = '#F5DEB3';
        ctx.strokeStyle = '#8B4513';
        ctx.lineWidth = 3;
        ctx.beginPath();
        ctx.arc(x, y, 40, 0, Math.PI * 2);
        ctx.fill();
        ctx.stroke();
        
        // Nucleus
        ctx.fillStyle = '#E6E6FA';
        ctx.beginPath();
        ctx.arc(x, y, 15, 0, Math.PI * 2);
        ctx.fill();
        
        if(stage.budSize > 0) {
          // Growing bud
          const budSize = 40 * stage.budSize;
          ctx.fillStyle = '#F5DEB3';
          ctx.strokeStyle = '#8B4513';
          ctx.lineWidth = 3;
          ctx.beginPath();
          ctx.arc(x + 45, y - 25, budSize, 0, Math.PI * 2);
          ctx.fill();
          ctx.stroke();
          
          if(stage.budSize > 0.5) {
            // Bud nucleus forming
            ctx.fillStyle = '#E6E6FA';
            ctx.beginPath();
            ctx.arc(x + 45, y - 25, budSize * 0.4, 0, Math.PI * 2);
            ctx.fill();
          }
          
          if(stage.budSize >= 0.9) {
            // Separation
            ctx.strokeStyle = '#FF0000';
            ctx.lineWidth = 2;
            ctx.setLineDash([5, 5]);
            ctx.beginPath();
            const angle = Math.atan2(-25, 45);
            const contactX = x + Math.cos(angle) * 40;
            const contactY = y + Math.sin(angle) * 40;
            ctx.moveTo(contactX - 10, contactY - 10);
            ctx.lineTo(contactX + 10, contactY + 10);
            ctx.stroke();
            ctx.setLineDash([]);
          }
        }
      });
      
      // Final separated cells
      const finalX = w * 0.9;
      const finalY = h * 0.5;
      
      ctx.fillStyle = '#F5DEB3';
      ctx.strokeStyle = '#8B4513';
      ctx.lineWidth = 3;
      ctx.beginPath();
      ctx.arc(finalX - 25, finalY, 35, 0, Math.PI * 2);
      ctx.fill();
      ctx.stroke();
      
      ctx.beginPath();
      ctx.arc(finalX + 25, finalY, 35, 0, Math.PI * 2);
      ctx.fill();
      ctx.stroke();
    }
  }
  
  static drawProtozoa(ctx, w, h, characteristic) {
    const centerX = w * 0.5;
    const centerY = h * 0.5;
    
    if(characteristic === 'structure') {
      // Paramecium-like structure
      
      // Cell body (irregular oval)
      ctx.fillStyle = '#87CEEB';
      ctx.beginPath();
      ctx.ellipse(centerX, centerY, 100, 60, 0, 0, Math.PI * 2);
      ctx.fill();
      
      // Cilia (hair-like projections)
      ctx.strokeStyle = '#4682B4';
      ctx.lineWidth = 2;
      
      // Top cilia
      for(let i = 0; i < 20; i++) {
        const x = centerX - 90 + i * 10;
        ctx.beginPath();
        ctx.moveTo(x, centerY - 60);
        ctx.lineTo(x + Math.sin(i * 0.5) * 5, centerY - 75);
        ctx.stroke();
      }
      
      // Bottom cilia
      for(let i = 0; i < 20; i++) {
        const x = centerX - 90 + i * 10;
        ctx.beginPath();
        ctx.moveTo(x, centerY + 60);
        ctx.lineTo(x + Math.sin(i * 0.5) * 5, centerY + 75);
        ctx.stroke();
      }
      
      // Macronucleus (kidney-shaped)
      ctx.fillStyle = '#4B0082';
      ctx.beginPath();
      ctx.ellipse(centerX - 20, centerY, 35, 20, 0.3, 0, Math.PI * 2);
      ctx.fill();
      
      // Micronucleus (small, round)
      ctx.fillStyle = '#8B008B';
      ctx.beginPath();
      ctx.arc(centerX + 20, centerY - 10, 10, 0, Math.PI * 2);
      ctx.fill();
      
      // Oral groove (feeding)
      ctx.strokeStyle = '#4682B4';
      ctx.lineWidth = 4;
      ctx.beginPath();
      ctx.arc(centerX - 60, centerY, 20, 0.5, Math.PI - 0.5);
      ctx.stroke();
      
      // Food vacuoles
      ctx.fillStyle = '#FFD700';
      const vacuoles = [
        [centerX + 40, centerY - 20],
        [centerX + 30, centerY + 25],
        [centerX - 40, centerY + 30]
      ];
      
      vacuoles.forEach(([vx, vy]) => {
        ctx.beginPath();
        ctx.arc(vx, vy, 12, 0, Math.PI * 2);
        ctx.fill();
      });
      
      // Contractile vacuole
      ctx.strokeStyle = '#00CED1';
      ctx.lineWidth = 3;
      ctx.beginPath();
      ctx.arc(centerX + 60, centerY, 15, 0, Math.PI * 2);
      ctx.stroke();
      
      // Radiating canals
      for(let i = 0; i < 6; i++) {
        const angle = (Math.PI * 2 * i) / 6;
        ctx.beginPath();
        ctx.moveTo(centerX + 60, centerY);
        ctx.lineTo(
          centerX + 60 + Math.cos(angle) * 20,
          centerY + Math.sin(angle) * 20
        );
        ctx.stroke();
      }
      
      // Labels
      ctx.fillStyle = '#000';
      ctx.font = '11px Arial';
      ctx.fillText('Cilia', centerX - 100, centerY - 85);
      ctx.fillText('Macronucleus', centerX - 60, centerY - 30);
      ctx.fillText('Food Vacuole', centerX + 55, centerY + 40);
      ctx.fillText('Contractile Vacuole', centerX + 85, centerY + 20);
      
    } else if(characteristic === 'reproduction') {
      // Binary fission in protozoa
      ctx.fillStyle = '#87CEEB';
      
      // Stage 1: Original cell
      ctx.beginPath();
      ctx.ellipse(w * 0.25, h * 0.3, 50, 30, 0, 0, Math.PI * 2);
      ctx.fill();
      
      ctx.fillStyle = '#4B0082';
      ctx.beginPath();
      ctx.arc(w * 0.25, h * 0.3, 12, 0, Math.PI * 2);
      ctx.fill();
      
      // Stage 2: Nucleus dividing
      ctx.fillStyle = '#87CEEB';
      ctx.beginPath();
      ctx.ellipse(w * 0.5, h * 0.3, 55, 32, 0, 0, Math.PI * 2);
      ctx.fill();
      
      ctx.fillStyle = '#4B0082';
      ctx.beginPath();
      ctx.arc(w * 0.48, h * 0.3, 10, 0, Math.PI * 2);
      ctx.fill();
      ctx.beginPath();
      ctx.arc(w * 0.52, h * 0.3, 10, 0, Math.PI * 2);
      ctx.fill();
      
      // Stage 3: Cell dividing
      ctx.fillStyle = '#87CEEB';
      ctx.beginPath();
      ctx.ellipse(w * 0.75, h * 0.28, 50, 28, 0, 0, Math.PI * 2);
      ctx.fill();
      ctx.beginPath();
      ctx.ellipse(w * 0.75, h * 0.34, 50, 28, 0, 0, Math.PI * 2);
      ctx.fill();
      
      ctx.strokeStyle = '#4682B4';
      ctx.lineWidth = 2;
      ctx.setLineDash([5, 5]);
      ctx.beginPath();
      ctx.moveTo(w * 0.72, h * 0.31);
      ctx.lineTo(w * 0.78, h * 0.31);
      ctx.stroke();
      ctx.setLineDash([]);
      
      ctx.fillStyle = '#4B0082';
      ctx.beginPath();
      ctx.arc(w * 0.75, h * 0.28, 10, 0, Math.PI * 2);
      ctx.fill();
      ctx.beginPath();
      ctx.arc(w * 0.75, h * 0.34, 10, 0, Math.PI * 2);
      ctx.fill();
      
      // Stage 4: Two daughter cells
      ctx.fillStyle = '#87CEEB';
      ctx.beginPath();
      ctx.ellipse(w * 0.4, h * 0.7, 45, 28, 0, 0, Math.PI * 2);
      ctx.fill();
      ctx.beginPath();
      ctx.ellipse(w * 0.6, h * 0.7, 45, 28, 0, 0, Math.PI * 2);
      ctx.fill();
      
      ctx.fillStyle = '#4B0082';
      ctx.beginPath();
      ctx.arc(w * 0.4, h * 0.7, 10, 0, Math.PI * 2);
      ctx.fill();
      ctx.beginPath();
      ctx.arc(w * 0.6, h * 0.7, 10, 0, Math.PI * 2);
      ctx.fill();
      
      // Arrows between stages
      ctx.strokeStyle = '#000';
      ctx.lineWidth = 2;
      const arrows = [
        [w * 0.25, h * 0.35],
        [w * 0.5, h * 0.35],
        [w * 0.75, h * 0.4]
      ];
      
      arrows.forEach(([ax, ay]) => {
        ctx.beginPath();
        ctx.moveTo(ax, ay);
        ctx.lineTo(ax, ay + 20);
        ctx.stroke();
        
        // Arrowhead
        ctx.beginPath();
        ctx.moveTo(ax, ay + 20);
        ctx.lineTo(ax - 5, ay + 15);
        ctx.lineTo(ax + 5, ay + 15);
        ctx.closePath();
        ctx.fill();
      });
    }
  }
  
  static drawHelminths(ctx, w, h, characteristic) {
    const centerX = w * 0.5;
    const centerY = h * 0.5;
    
    if(characteristic === 'structure') {
      // Tapeworm structure
      
      // Scolex (head)
      ctx.fillStyle = '#CD853F';
      ctx.beginPath();
      ctx.arc(centerX, h * 0.15, 25, 0, Math.PI * 2);
      ctx.fill();
      
      // Hooks
      for(let i = 0; i < 8; i++) {
        const angle = (Math.PI * 2 * i) / 8;
        ctx.strokeStyle = '#8B4513';
        ctx.lineWidth = 3;
        ctx.beginPath();
        ctx.arc(
          centerX + Math.cos(angle) * 20,
          h * 0.15 + Math.sin(angle) * 20,
          8, angle - 0.5, angle + 0.5
        );
        ctx.stroke();
      }
      
      // Suckers
      for(let i = 0; i < 4; i++) {
        const angle = (Math.PI * 2 * i) / 4;
        ctx.strokeStyle = '#A0522D';
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.arc(
          centerX + Math.cos(angle) * 30,
          h * 0.15 + Math.sin(angle) * 30,
          10, 0, Math.PI * 2
        );
        ctx.stroke();
      }
      
      // Neck
      ctx.fillStyle = '#DEB887';
      ctx.fillRect(centerX - 15, h * 0.18, 30, 30);
      
      // Proglottids (segments)
      const numSegments = 12;
      for(let i = 0; i < numSegments; i++) {
        const segY = h * 0.25 + i * 35;
        const segWidth = 80 + (i * 5);
        
        // Segment body
        ctx.fillStyle = i % 2 === 0 ? '#CD853F' : '#DEB887';
        ctx.fillRect(centerX - segWidth / 2, segY, segWidth, 30);
        
        // Segment border
        ctx.strokeStyle = '#8B4513';
        ctx.lineWidth = 2;
        ctx.strokeRect(centerX - segWidth / 2, segY, segWidth, 30);
        
        // Reproductive organs (in mature segments)
        if(i > 6) {
          ctx.fillStyle = '#FF69B4';
          ctx.beginPath();
          ctx.ellipse(centerX - 15, segY + 15, 8, 6, 0, 0, Math.PI * 2);
          ctx.fill();
          ctx.beginPath();
          ctx.ellipse(centerX + 15, segY + 15, 8, 6, 0, 0, Math.PI * 2);
          ctx.fill();
        }
      }
      
      // Labels
      ctx.fillStyle = '#000';
      ctx.font = '12px Arial';
      ctx.fillText('Scolex (Head)', centerX + 40, h * 0.12);
      ctx.fillText('Hooks & Suckers', centerX + 40, h * 0.17);
      ctx.fillText('Neck', centerX + 25, h * 0.22);
      ctx.fillText('Immature Proglottids', centerX + 70, h * 0.35);
      ctx.fillText('Mature Proglottids', centerX + 70, h * 0.6);
      ctx.fillText('(with reproductive organs)', centerX + 70, h * 0.65);
      
    } else if(characteristic === 'reproduction') {
      // Life cycle
      const stages = [
        { name: 'Eggs in\nFeces', x: 0.2, y: 0.3 },
        { name: 'Intermediate\nHost', x: 0.5, y: 0.2 },
        { name: 'Larvae in\nMuscle', x: 0.8, y: 0.3 },
        { name: 'Human\nIngestion', x: 0.8, y: 0.7 },
        { name: 'Adult in\nIntestine', x: 0.2, y: 0.7 }
      ];
      
      stages.forEach((stage, index) => {
        const x = w * stage.x;
        const y = h * stage.y;
        
        // Stage illustration
        switch(index) {
          case 0: // Eggs
            for(let i = 0; i < 5; i++) {
              ctx.fillStyle = '#FFD700';
              ctx.beginPath();
              ctx.ellipse(
                x + (i % 3 - 1) * 15,
                y + Math.floor(i / 3) * 15,
                6, 8, 0, 0, Math.PI * 2
              );
              ctx.fill();
            }
            break;
            
          case 1: // Intermediate host (pig/cow)
            ctx.fillStyle = '#FFC0CB';
            ctx.beginPath();
            ctx.ellipse(x, y, 35, 25, 0, 0, Math.PI * 2);
            ctx.fill();
            
            // Legs
            ctx.strokeStyle = '#FFC0CB';
            ctx.lineWidth = 4;
            for(let i = 0; i < 4; i++) {
              ctx.beginPath();
              ctx.moveTo(x + (i < 2 ? -20 : 20), y + 15);
              ctx.lineTo(x + (i < 2 ? -25 : 25), y + 30);
              ctx.stroke();
            }
            break;
            
          case 2: // Larvae in muscle
            ctx.fillStyle = '#FFE4C4';
            ctx.fillRect(x - 30, y - 20, 60, 40);
            
            // Cysts
            for(let i = 0; i < 4; i++) {
              ctx.strokeStyle = '#CD853F';
              ctx.lineWidth = 2;
              ctx.beginPath();
              ctx.arc(
                x + (i % 2 - 0.5) * 30,
                y + (Math.floor(i / 2) - 0.5) * 25,
                10, 0, Math.PI * 2
              );
              ctx.stroke();
              
              // Larva inside
              ctx.strokeStyle = '#8B4513';
              ctx.lineWidth = 3;
              ctx.beginPath();
              ctx.arc(
                x + (i % 2 - 0.5) * 30,
                y + (Math.floor(i / 2) - 0.5) * 25,
                6, 0, Math.PI
              );
              ctx.stroke();
            }
            break;
            
          case 3: // Human ingestion
            // Person icon
            ctx.fillStyle = '#FFE4C4';
            ctx.beginPath();
            ctx.arc(x, y - 25, 15, 0, Math.PI * 2);
            ctx.fill();
            
            ctx.fillRect(x - 20, y - 10, 40, 50);
            
            // Stomach
            ctx.strokeStyle = '#FF6347';
            ctx.lineWidth = 3;
            ctx.beginPath();
            ctx.arc(x, y + 10, 18, 0, Math.PI * 2);
            ctx.stroke();
            break;
            
          case 4: // Adult in intestine
            // Intestine
            ctx.strokeStyle = '#FFE4C4';
            ctx.lineWidth = 20;
            ctx.beginPath();
            ctx.moveTo(x - 40, y - 30);
            ctx.quadraticCurveTo(x, y, x - 40, y + 30);
            ctx.stroke();
            
            // Adult worm
            ctx.strokeStyle = '#CD853F';
            ctx.lineWidth = 6;
            ctx.beginPath();
            ctx.moveTo(x - 35, y - 25);
            for(let i = 0; i < 8; i++) {
              ctx.lineTo(
                x - 35 + i * 10,
                y - 25 + (i % 2 === 0 ? -5 : 5)
              );
            }
            ctx.stroke();
            break;
        }
        
        // Label
        ctx.fillStyle = '#000';
        ctx.font = '11px Arial';
        ctx.textAlign = 'center';
        const lines = stage.name.split('\n');
        lines.forEach((line, i) => {
          ctx.fillText(line, x, y + 50 + i * 14);
        });
      });
      
      // Cycle arrows
      ctx.strokeStyle = '#4169E1';
      ctx.lineWidth = 3;
      const arrowPaths = [
        [[w * 0.25, h * 0.3], [w * 0.45, h * 0.25]],
        [[w * 0.55, h * 0.25], [w * 0.75, h * 0.3]],
        [[w * 0.8, h * 0.35], [w * 0.8, h * 0.65]],
        [[w * 0.75, h * 0.7], [w * 0.25, h * 0.7]],
        [[w * 0.2, h * 0.65], [w * 0.2, h * 0.35]]
      ];
      
      arrowPaths.forEach(path => {
        ctx.beginPath();
        ctx.moveTo(path[0][0], path[0][1]);
        ctx.lineTo(path[1][0], path[1][1]);
        ctx.stroke();
        
        // Arrowhead
        const angle = Math.atan2(
          path[1][1] - path[0][1],
          path[1][0] - path[0][0]
        );
        ctx.beginPath();
        ctx.moveTo(path[1][0], path[1][1]);
        ctx.lineTo(
          path[1][0] - 10 * Math.cos(angle - 0.3),
          path[1][1] - 10 * Math.sin(angle - 0.3)
        );
        ctx.lineTo(
          path[1][0] - 10 * Math.cos(angle + 0.3),
          path[1][1] - 10 * Math.sin(angle + 0.3)
        );
        ctx.closePath();
        ctx.fill();
      });
    }
  }
  
  static drawPrions(ctx, w, h, characteristic) {
    const centerX = w * 0.5;
    const centerY = h * 0.5;
    
    if(characteristic === 'structure') {
      // Normal protein
      ctx.fillStyle = '#000';
      ctx.font = 'bold 14px Arial';
      ctx.fillText('Normal Protein', w * 0.15, h * 0.15);
      
      ctx.strokeStyle = '#4169E1';
      ctx.lineWidth = 6;
      ctx.lineCap = 'round';
      ctx.beginPath();
      
      // Alpha helix structure
      for(let i = 0; i < 15; i++) {
        const x = w * 0.15 + i * 8;
        const y = h * 0.25 + Math.sin(i * 0.8) * 15;
        if(i === 0) {
          ctx.moveTo(x, y);
        } else {
          ctx.lineTo(x, y);
        }
      }
      ctx.stroke();
      
      // Misfolded prion
      ctx.fillStyle = '#000';
      ctx.fillText('Misfolded Prion', w * 0.55, h * 0.15);
      
      ctx.strokeStyle = '#FF0000';
      ctx.lineWidth = 6;
      ctx.beginPath();
      
      // Beta sheet structure (more angular)
      const prionPath = [
        [w * 0.55, h * 0.25],
        [w * 0.58, h * 0.22],
        [w * 0.61, h * 0.28],
        [w * 0.64, h * 0.23],
        [w * 0.67, h * 0.29],
        [w * 0.70, h * 0.24],
        [w * 0.73, h * 0.30],
        [w * 0.76, h * 0.25]
      ];
      
      prionPath.forEach((point, i) => {
        if(i === 0) {
          ctx.moveTo(point[0], point[1]);
        } else {
          ctx.lineTo(point[0], point[1]);
        }
      });
      ctx.stroke();
      
      // Conversion process
      ctx.fillStyle = '#000';
      ctx.font = 'bold 16px Arial';
      ctx.fillText('Conversion Process', centerX - 80, h * 0.45);
      
      // Normal protein
      this.drawProteinShape(ctx, centerX - 100, h * 0.6, 'normal');
      
      // Arrow
      ctx.strokeStyle = '#000';
      ctx.lineWidth = 3;
      ctx.beginPath();
      ctx.moveTo(centerX - 60, h * 0.6);
      ctx.lineTo(centerX - 20, h * 0.6);
      ctx.stroke();
      
      // Arrowhead
      ctx.beginPath();
      ctx.moveTo(centerX - 20, h * 0.6);
      ctx.lineTo(centerX - 28, h * 0.57);
      ctx.lineTo(centerX - 28, h * 0.63);
      ctx.closePath();
      ctx.fill();
      
      // Prion template
      this.drawProteinShape(ctx, centerX, h * 0.6, 'prion');
      
      // Plus sign
      ctx.fillStyle = '#000';
      ctx.font = 'bold 24px Arial';
      ctx.fillText('+', centerX + 40, h * 0.62);
      
      // Newly converted prion
      this.drawProteinShape(ctx, centerX + 100, h * 0.6, 'prion');
      
      // Cascade effect
      ctx.fillStyle = '#000';
      ctx.font = 'bold 16px Arial';
      ctx.fillText('Accumulation & Aggregation', centerX - 100, h * 0.78);
      
      // Aggregated prions
      for(let i = 0; i < 8; i++) {
        const x = centerX - 80 + (i % 4) * 50;
        const y = h * 0.85 + Math.floor(i / 4) * 30;
        this.drawProteinShape(ctx, x, y, 'prion', 0.6);
      }
      
      // Fibril formation
      ctx.strokeStyle = '#8B0000';
      ctx.lineWidth = 2;
      ctx.setLineDash([3, 3]);
      for(let i = 0; i < 7; i++) {
        ctx.beginPath();
        ctx.moveTo(centerX - 80 + i * 50, h * 0.85);
        ctx.lineTo(centerX - 80 + (i + 1) * 50, h * 0.85);
        ctx.stroke();
      }
      ctx.setLineDash([]);
      
    } else if(characteristic === 'reproduction') {
      // Prion propagation mechanism
      
      // Timeline
      ctx.strokeStyle = '#000';
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(w * 0.1, h * 0.9);
      ctx.lineTo(w * 0.9, h * 0.9);
      ctx.stroke();
      
      ctx.fillStyle = '#000';
      ctx.font = '12px Arial';
      ctx.fillText('Time →', w * 0.85, h * 0.95);
      
      // Stage 1: Single prion
      ctx.fillStyle = '#000';
      ctx.font = 'bold 12px Arial';
      ctx.fillText('Initial Infection', w * 0.15, h * 0.15);
      
      this.drawProteinShape(ctx, w * 0.2, h * 0.25, 'prion');
      
      // Stage 2: Converts normal proteins
      ctx.fillText('Conversion', w * 0.35, h * 0.35);
      
      this.drawProteinShape(ctx, w * 0.35, h * 0.45, 'prion');
      for(let i = 0; i < 3; i++) {
        this.drawProteinShape(ctx, w * 0.35 + (i - 1) * 35, h * 0.55, 'normal', 0.7);
        
        // Conversion arrows
        ctx.strokeStyle = '#FF0000';
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(w * 0.35, h * 0.48);
        ctx.lineTo(w * 0.35 + (i - 1) * 35, h * 0.52);
        ctx.stroke();
      }
      
      // Stage 3: Exponential growth
      ctx.fillStyle = '#000';
      ctx.fillText('Multiplication', w * 0.55, h * 0.25);
      
      for(let i = 0; i < 6; i++) {
        const angle = (Math.PI * 2 * i) / 6;
        this.drawProteinShape(
          ctx,
          w * 0.6 + Math.cos(angle) * 40,
          h * 0.4 + Math.sin(angle) * 40,
          'prion',
          0.6
        );
      }
      
      // Stage 4: Aggregation
      ctx.fillText('Aggregation', w * 0.75, h * 0.15);
      
      // Dense cluster
      for(let i = 0; i < 12; i++) {
        const x = w * 0.78 + (i % 3 - 1) * 25;
        const y = h * 0.35 + Math.floor(i / 3) * 20;
        this.drawProteinShape(ctx, x, y, 'prion', 0.5);
      }
      
      // Plaque formation border
      ctx.strokeStyle = '#8B0000';
      ctx.lineWidth = 4;
      ctx.beginPath();
      ctx.ellipse(w * 0.78, h * 0.42, 50, 55, 0, 0, Math.PI * 2);
      ctx.stroke();
      
      ctx.fillStyle = '#8B0000';
      ctx.font = '11px Arial';
      ctx.fillText('Amyloid Plaque', w * 0.72, h * 0.55);
      
      // Stage 5: Neuron damage
      ctx.fillStyle = '#000';
      ctx.font = 'bold 12px Arial';
      ctx.fillText('Neurodegeneration', w * 0.15, h * 0.65);
      
      // Damaged neuron
      ctx.fillStyle = 'rgba(255, 228, 196, 0.5)';
      ctx.beginPath();
      ctx.arc(w * 0.25, h * 0.75, 30, 0, Math.PI * 2);
      ctx.fill();
      
      ctx.strokeStyle = 'rgba(139, 0, 0, 0.7)';
      ctx.lineWidth = 3;
      ctx.beginPath();
      ctx.arc(w * 0.25, h * 0.75, 30, 0, Math.PI * 2);
      ctx.stroke();
      
      // Broken dendrites
      for(let i = 0; i < 4; i++) {
        const angle = (Math.PI * 2 * i) / 4;
        ctx.strokeStyle = 'rgba(139, 69, 19, 0.5)';
        ctx.lineWidth = 4;
        ctx.setLineDash([10, 5]);
        ctx.beginPath();
        ctx.moveTo(
          w * 0.25 + Math.cos(angle) * 30,
          h * 0.75 + Math.sin(angle) * 30
        );
        ctx.lineTo(
          w * 0.25 + Math.cos(angle) * 50,
          h * 0.75 + Math.sin(angle) * 50
        );
        ctx.stroke();
        ctx.setLineDash([]);
      }
      
      // Prion plaques near neuron
      for(let i = 0; i < 3; i++) {
        const angle = (Math.PI * 2 * i) / 3 + 0.5;
        for(let j = 0; j < 4; j++) {
          this.drawProteinShape(
            ctx,
            w * 0.25 + Math.cos(angle) * 45 + (j % 2) * 10,
            h * 0.75 + Math.sin(angle) * 45 + Math.floor(j / 2) * 10,
            'prion',
            0.4
          );
        }
      }
    }
  }
  
  static drawProteinShape(ctx, x, y, type, scale = 1) {
    ctx.save();
    ctx.translate(x, y);
    ctx.scale(scale, scale);
    
    if(type === 'normal') {
      // Alpha helix (smooth curves)
      ctx.strokeStyle = '#4169E1';
      ctx.lineWidth = 4;
      ctx.lineCap = 'round';
      ctx.beginPath();
      
      for(let i = 0; i < 8; i++) {
        const px = -15 + i * 4;
        const py = Math.sin(i * 0.7) * 8;
        if(i === 0) {
          ctx.moveTo(px, py);
        } else {
          ctx.lineTo(px, py);
        }
      }
      ctx.stroke();
      
    } else if(type === 'prion') {
      // Beta sheet (angular, zigzag)
      ctx.strokeStyle = '#FF0000';
      ctx.lineWidth = 4;
      ctx.lineCap = 'round';
      ctx.beginPath();
      
      const zigzag = [
        [-15, 0], [-10, -8], [-5, 2], [0, -6],
        [5, 3], [10, -7], [15, 0]
      ];
      
      zigzag.forEach((point, i) => {
        if(i === 0) {
          ctx.moveTo(point[0], point[1]);
        } else {
          ctx.lineTo(point[0], point[1]);
        }
      });
      ctx.stroke();
    }
    
    ctx.restore();
  }
  
  // ===== INFLAMMATION DIAGRAMS =====
  
  static drawInflammation(ctx, x, y, width, height, stage, type) {
    ctx.save();
    ctx.translate(x, y);
    
    const w = width;
    const h = height;
    
    switch(stage) {
      case 'complete':
        this.drawCompleteInflammation(ctx, w, h, type);
        break;
      case 'tissue-damage':
        this.drawTissueDamage(ctx, w, h, type);
        break;
      case 'chemical-signals':
        this.drawChemicalSignals(ctx, w, h, type);
        break;
      case 'vasodilation':
        this.drawVasodilation(ctx, w, h, type);
        break;
      case 'phagocyte-recruitment':
        this.drawPhagocyteRecruitment(ctx, w, h, type);
        break;
      case 'tissue-repair':
        this.drawTissueRepair(ctx, w, h, type);
        break;
    }
    
    ctx.restore();
  }
  
  static drawCompleteInflammation(ctx, w, h, type) {
    // Timeline of inflammation
    ctx.strokeStyle = '#000';
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.moveTo(w * 0.1, h * 0.9);
    ctx.lineTo(w * 0.9, h * 0.9);
    ctx.stroke();
    
    // Injury site
    ctx.fillStyle = '#FF6347';
    ctx.beginPath();
    ctx.moveTo(w * 0.15, h * 0.3);
    ctx.lineTo(w * 0.2, h * 0.35);
    ctx.lineTo(w * 0.15, h * 0.4);
    ctx.lineTo(w * 0.1, h * 0.35);
    ctx.closePath();
    ctx.fill();
    
    ctx.fillStyle = '#000';
    ctx.font = '12px Arial';
    ctx.fillText('Injury', w * 0.12, h * 0.45);
    
    // Blood vessel with dilation
    ctx.strokeStyle = '#DC143C';
    ctx.lineWidth = 8;
    ctx.beginPath();
    ctx.moveTo(w * 0.25, h * 0.35);
    ctx.lineTo(w * 0.4, h * 0.35);
    ctx.stroke();
    
    // Dilated portion
    ctx.lineWidth = 16;
    ctx.beginPath();
    ctx.moveTo(w * 0.4, h * 0.35);
    ctx.lineTo(w * 0.6, h * 0.35);
    ctx.stroke();
    
    ctx.fillText('Vasodilation', w * 0.42, h * 0.3);
    
    // White blood cells migrating
    for(let i = 0; i < 4; i++) {
      const x = w * (0.45 + i * 0.05);
      const y = h * 0.35 + (i % 2 === 0 ? 10 : -10);
      
      ctx.fillStyle = '#E6E6FA';
      ctx.beginPath();
      ctx.arc(x, y, 8, 0, Math.PI * 2);
      ctx.fill();
    }
    
    // Leaking to tissue
    ctx.strokeStyle = '#FFB6C1';
    ctx.lineWidth = 3;
    ctx.setLineDash([5, 5]);
    for(let i = 0; i < 3; i++) {
      ctx.beginPath();
      ctx.moveTo(w * (0.5 + i * 0.05), h * 0.43);
      ctx.lineTo(w * (0.5 + i * 0.05), h * 0.55);
      ctx.stroke();
    }
    ctx.setLineDash([]);
    
    ctx.fillStyle = '#000';
    ctx.fillText('Increased', w * 0.48, h * 0.52);
    ctx.fillText('Permeability', w * 0.48, h * 0.56);
    
    // Tissue with immune cells
    ctx.fillStyle = 'rgba(255, 182, 193, 0.3)';
    ctx.fillRect(w * 0.4, h * 0.6, w * 0.3, h * 0.25);
    
    // Phagocytes in tissue
    for(let i = 0; i < 6; i++) {
      ctx.fillStyle = '#FFB366';
      ctx.beginPath();
      ctx.arc(
        w * (0.45 + (i % 3) * 0.08),
        h * (0.65 + Math.floor(i / 3) * 0.1),
        10, 0, Math.PI * 2
      );
      ctx.fill();
    }
    
    ctx.fillStyle = '#000';
    ctx.fillText('Phagocytosis', w * 0.45, h * 0.82);
    
    // Classical signs of inflammation
    const signs = [
      { text: 'Redness', x: 0.75, y: 0.25 },
      { text: 'Heat', x: 0.75, y: 0.35 },
      { text: 'Swelling', x: 0.75, y: 0.45 },
      { text: 'Pain', x: 0.75, y: 0.55 },
      { text: 'Loss of Function', x: 0.75, y: 0.65 }
    ];
    
    ctx.fillStyle = '#8B0000';
    ctx.font = 'bold 13px Arial';
    signs.forEach(sign => {
      ctx.fillText('• ' + sign.text, w * sign.x, h * sign.y);
    });
  }
  
  static drawTissueDamage(ctx, w, h, type) {
    const centerX = w * 0.5;
    const centerY = h * 0.5;
    
    // Normal tissue cells
    ctx.fillStyle = '#FFE4C4';
    ctx.strokeStyle = '#8B4513';
    ctx.lineWidth = 2;
    
    for(let i = 0; i < 5; i++) {
      for(let j = 0; j < 5; j++) {
        if(Math.abs(i - 2) > 1 || Math.abs(j - 2) > 1) {
          const x = centerX - 100 + i * 50;
          const y = centerY - 100 + j * 50;
          
          ctx.beginPath();
          ctx.rect(x, y, 45, 45);
          ctx.fill();
          ctx.stroke();
          
          // Nucleus
          ctx.fillStyle = '#4B0082';
          ctx.beginPath();
          ctx.arc(x + 22, y + 22, 8, 0, Math.PI * 2);
          ctx.fill();
          ctx.fillStyle = '#FFE4C4';
        }
      }
    }
    
    // Damaged area
    ctx.fillStyle = '#8B0000';
    ctx.beginPath();
    ctx.arc(centerX, centerY, 60, 0, Math.PI * 2);
    ctx.fill();
    
    // Ruptured cells
    ctx.strokeStyle = '#FF0000';
    ctx.lineWidth = 3;
    for(let i = 0; i < 8; i++) {
      const angle = (Math.PI * 2 * i) / 8;
      ctx.beginPath();
      ctx.moveTo(centerX, centerY);
      ctx.lineTo(
        centerX + Math.cos(angle) * 70,
        centerY + Math.sin(angle) * 70
      );
      ctx.stroke();
    }
    
    // Released DAMPs (damage signals)
    ctx.fillStyle = '#FFD700';
    for(let i = 0; i < 12; i++) {
      const angle = Math.random() * Math.PI * 2;
      const radius = 70 + Math.random() * 40;
      ctx.beginPath();
      ctx.arc(
        centerX + Math.cos(angle) * radius,
        centerY + Math.sin(angle) * radius,
        6, 0, Math.PI * 2
      );
      ctx.fill();
    }
    
    // Labels
    ctx.fillStyle = '#000';
    ctx.font = '14px Arial';
    ctx.fillText('Tissue Damage', centerX - 50, h * 0.15);
    ctx.font = '12px Arial';
    ctx.fillText('DAMPs Released', centerX + 80, centerY);
    ctx.fillText('(Danger Signals)', centerX + 80, centerY + 15);
  }
  
  static drawChemicalSignals(ctx, w, h, type) {
    const centerX = w * 0.5;
    const centerY = h * 0.5;
    
    // Injury site
    ctx.fillStyle = '#8B0000';
    ctx.beginPath();
    ctx.arc(centerX, centerY, 40, 0, Math.PI * 2);
    ctx.fill();
    
    // Chemical mediators radiating out
    const mediators = [
      { name: 'Histamine', color: '#FF69B4', angle: 0 },
      { name: 'Prostaglandins', color: '#FF6347', angle: Math.PI / 3 },
      { name: 'Leukotrienes', color: '#FFA500', angle: 2 * Math.PI / 3 },
      { name: 'Cytokines', color: '#FFD700', angle: Math.PI },
      { name: 'Chemokines', color: '#9370DB', angle: 4 * Math.PI / 3 },
      { name: 'Bradykinin', color: '#87CEEB', angle: 5 * Math.PI / 3 }
    ];
    
    mediators.forEach(med => {
      // Gradient effect
      const gradient = ctx.createRadialGradient(
        centerX, centerY, 40,
        centerX + Math.cos(med.angle) * 120,
        centerY + Math.sin(med.angle) * 120,
        0
      );
      gradient.addColorStop(0, med.color);
      gradient.addColorStop(1, 'rgba(255, 255, 255, 0)');
      
      ctx.fillStyle = gradient;
      ctx.beginPath();
      ctx.moveTo(centerX, centerY);
      ctx.arc(centerX, centerY, 120, med.angle - 0.4, med.angle + 0.4);
      ctx.closePath();
      ctx.fill();
      
      // Molecule representations
      for(let i = 0; i < 5; i++) {
        const radius = 60 + i * 15;
        ctx.fillStyle = med.color;
        ctx.beginPath();
        ctx.arc(
          centerX + Math.cos(med.angle) * radius,
          centerY + Math.sin(med.angle) * radius,
          5, 0, Math.PI * 2
        );
        ctx.fill();
      }
      
      // Label
      ctx.fillStyle = '#000';
      ctx.font = '11px Arial';
      ctx.textAlign = 'center';
      ctx.fillText(
        med.name,
        centerX + Math.cos(med.angle) * 140,
        centerY + Math.sin(med.angle) * 140
      );
    });
    
    // Legend - Effects
    ctx.textAlign = 'left';
    ctx.fillStyle = '#000';
    ctx.font = 'bold 13px Arial';
    ctx.fillText('Effects:', w * 0.05, h * 0.85);
    
    ctx.font = '11px Arial';
    const effects = [
      '• Vasodilation',
      '• Increased permeability',
      '• Pain sensation',
      '• Immune cell recruitment'
    ];
    
    effects.forEach((effect, i) => {
      ctx.fillText(effect, w * 0.05, h * (0.88 + i * 0.03));
    });
  }
  
  static drawVasodilation(ctx, w, h, type) {
    // Before (normal blood vessel)
    ctx.fillStyle = '#000';
    ctx.font = 'bold 14px Arial';
    ctx.fillText('Before', w * 0.2, h * 0.15);
    
    ctx.strokeStyle = '#DC143C';
    ctx.lineWidth = 12;
    ctx.beginPath();
    ctx.moveTo(w * 0.1, h * 0.25);
    ctx.lineTo(w * 0.4, h * 0.25);
    ctx.stroke();
    
    // Blood flow
    ctx.fillStyle = '#8B0000';
    for(let i = 0; i < 5; i++) {
      ctx.beginPath();
      ctx.arc(w * (0.12 + i * 0.06), h * 0.25, 4, 0, Math.PI * 2);
      ctx.fill();
    }
    
    // Diameter label
    ctx.fillStyle = '#000';
    ctx.font = '11px Arial';
    ctx.fillText('Normal diameter', w * 0.15, h * 0.32);
    
    // Arrow
    ctx.strokeStyle = '#000';
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.moveTo(w * 0.25, h * 0.35);
    ctx.lineTo(w * 0.25, h * 0.42);
    ctx.stroke();
    
    // Arrowhead
    ctx.beginPath();
    ctx.moveTo(w * 0.25, h * 0.42);
    ctx.lineTo(w * 0.22, h * 0.37);
    ctx.lineTo(w * 0.28, h * 0.37);
    ctx.closePath();
    ctx.fill();
    
    // Histamine/NO action
    ctx.fillStyle = '#FF69B4';
    ctx.font = '12px Arial';
    ctx.fillText('Histamine', w * 0.28, h * 0.39);
    ctx.fillText('Nitric Oxide', w * 0.28, h * 0.41);
    
    // After (dilated blood vessel)
    ctx.fillStyle = '#000';
    ctx.font = 'bold 14px Arial';
    ctx.fillText('After (Vasodilation)', w * 0.15, h * 0.5);
    
    ctx.strokeStyle = '#DC143C';
    ctx.lineWidth = 24;
    ctx.beginPath();
    ctx.moveTo(w * 0.1, h * 0.6);
    ctx.lineTo(w * 0.4, h * 0.6);
    ctx.stroke();
    
    // Increased blood flow
    ctx.fillStyle = '#8B0000';
    for(let i = 0; i < 10; i++) {
      ctx.beginPath();
      ctx.arc(
        w * (0.11 + i * 0.03),
        h * 0.6 + (i % 2 === 0 ? -6 : 6),
        4, 0, Math.PI * 2
      );
      ctx.fill();
    }
    
    // Diameter label
    ctx.fillStyle = '#000';
    ctx.font = '11px Arial';
    ctx.fillText('Increased diameter', w * 0.15, h * 0.68);
    ctx.fillText('Increased blood flow', w * 0.15, h * 0.71);
    
    // Smooth muscle relaxation
    ctx.fillStyle = '#FFE4C4';
    ctx.fillRect(w * 0.5, h * 0.2, w * 0.35, h * 0.25);
    
    ctx.fillStyle = '#000';
    ctx.font = 'bold 13px Arial';
    ctx.fillText('Smooth Muscle Relaxation', w * 0.52, h * 0.23);
    
    // Relaxed muscle fibers
    ctx.strokeStyle = '#8B4513';
    ctx.lineWidth = 4;
    ctx.setLineDash([10, 5]);
    for(let i = 0; i < 5; i++) {
      ctx.beginPath();
      ctx.moveTo(w * 0.52, h * (0.27 + i * 0.03));
      ctx.lineTo(w * 0.83, h * (0.27 + i * 0.03));
      ctx.stroke();
    }
    ctx.setLineDash([]);
    
    // Results box
    ctx.fillStyle = 'rgba(255, 215, 0, 0.2)';
    ctx.fillRect(w * 0.5, h * 0.5, w * 0.4, h * 0.25);
    
    ctx.strokeStyle = '#FFD700';
    ctx.lineWidth = 2;
    ctx.strokeRect(w * 0.5, h * 0.5, w * 0.4, h * 0.25);
    
    ctx.fillStyle = '#000';
    ctx.font = 'bold 13px Arial';
    ctx.fillText('Results:', w * 0.52, h * 0.53);
    
    ctx.font = '12px Arial';
    const results = [
      '• Redness (rubor)',
      '• Heat (calor)',
      '• More immune cells arrive',
      '• More oxygen & nutrients'
    ];
    
    results.forEach((result, i) => {
      ctx.fillText(result, w * 0.52, h * (0.56 + i * 0.04));
    });
  }
  
  static drawPhagocyteRecruitment(ctx, w, h, type) {
    // Blood vessel
    ctx.strokeStyle = '#DC143C';
    ctx.lineWidth = 20;
    ctx.beginPath();
    ctx.moveTo(w * 0.1, h * 0.3);
    ctx.lineTo(w * 0.9, h * 0.3);
    ctx.stroke();
    
    // Endothelial cells
    ctx.fillStyle = '#FFB6C1';
    for(let i = 0; i < 8; i++) {
      ctx.fillRect(w * (0.1 + i * 0.1), h * 0.3 - 10, w * 0.09, 20);
    }
    
    // Selectins on endothelium
    for(let i = 0; i < 8; i++) {
      ctx.fillStyle = '#FF1493';
      ctx.beginPath();
      ctx.arc(w * (0.13 + i * 0.1), h * 0.3 + 12, 3, 0, Math.PI * 2);
      ctx.fill();
    }
    
    // Rolling - neutrophil with selectin binding
    ctx.fillStyle = '#E6E6FA';
    ctx.beginPath();
    ctx.arc(w * 0.3, h * 0.3, 15, 0, Math.PI * 2);
    ctx.fill();
    
    ctx.strokeStyle = '#483D8B';
    ctx.lineWidth = 2;
    ctx.stroke();
    
    // Selectin bonds
    ctx.strokeStyle = '#FF1493';
    ctx.lineWidth = 2;
    ctx.setLineDash([3, 3]);
    ctx.beginPath();
    ctx.moveTo(w * 0.3, h * 0.3 + 15);
    ctx.lineTo(w * 0.3, h * 0.3 + 10);
    ctx.stroke();
    ctx.setLineDash([]);
    
    ctx.fillStyle = '#000';
    ctx.font = '11px Arial';
    ctx.fillText('Rolling', w * 0.28, h * 0.25);
    
    // Activation - neutrophil with chemokine receptors
    ctx.fillStyle = '#E6E6FA';
    ctx.beginPath();
    ctx.arc(w * 0.5, h * 0.3, 15, 0, Math.PI * 2);
    ctx.fill();
    
    ctx.strokeStyle = '#483D8B';
    ctx.lineWidth = 2;
    ctx.stroke();
    
    // Chemokine gradient
    ctx.fillStyle = '#9370DB';
    for(let i = 0; i < 4; i++) {
      ctx.beginPath();
      ctx.arc(w * (0.48 + i * 0.02), h * 0.28, 3, 0, Math.PI * 2);
      ctx.fill();
    }
    
    ctx.fillStyle = '#000';
    ctx.fillText('Activation', w * 0.47, h * 0.25);
    
    // Adhesion - flattened neutrophil
    ctx.fillStyle = '#E6E6FA';
    ctx.fillRect(w * 0.68, h * 0.3 - 8, 30, 16);
    
    ctx.strokeStyle = '#483D8B';
    ctx.lineWidth = 2;
    ctx.strokeRect(w * 0.68, h * 0.3 - 8, 30, 16);
    
    // Integrin bonds
    ctx.strokeStyle = '#4169E1';
    ctx.lineWidth = 3;
    for(let i = 0; i < 3; i++) {
      ctx.beginPath();
      ctx.moveTo(w * (0.7 + i * 0.08), h * 0.3 + 8);
      ctx.lineTo(w * (0.7 + i * 0.08), h * 0.3 + 10);
      ctx.stroke();
    }
    
    ctx.fillStyle = '#000';
    ctx.fillText('Adhesion', w * 0.685, h * 0.25);
    
    // Transmigration (diapedesis)
    ctx.fillStyle = '#E6E6FA';
    ctx.beginPath();
    ctx.ellipse(w * 0.85, h * 0.38, 12, 18, 0, 0, Math.PI * 2);
    ctx.fill();
    
    ctx.strokeStyle = '#483D8B';
    ctx.lineWidth = 2;
    ctx.stroke();
    
    // Squeezing through endothelium
    ctx.strokeStyle = '#FFB6C1';
    ctx.lineWidth = 3;
    ctx.setLineDash([5, 5]);
    ctx.beginPath();
    ctx.moveTo(w * 0.83, h * 0.3 + 10);
    ctx.lineTo(w * 0.87, h * 0.3 + 10);
    ctx.stroke();
    ctx.setLineDash([]);
    
    ctx.fillStyle = '#000';
    ctx.fillText('Transmigration', w * 0.81, h * 0.5);
    
    // Tissue below
    ctx.fillStyle = 'rgba(255, 228, 196, 0.5)';
    ctx.fillRect(w * 0.1, h * 0.35, w * 0.8, h * 0.2);
    
    // Chemokine gradient in tissue
    ctx.fillStyle = '#9370DB';
    for(let i = 0; i < 20; i++) {
      const x = w * (0.15 + Math.random() * 0.7);
      const y = h * (0.4 + Math.random() * 0.1);
      ctx.beginPath();
      ctx.arc(x, y, 2, 0, Math.PI * 2);
      ctx.fill();
    }
    
    // Migrated phagocyte in tissue
    ctx.fillStyle = '#FFB366';
    ctx.beginPath();
    ctx.arc(w * 0.85, h * 0.5, 15, 0, Math.PI * 2);
    ctx.fill();
    
    // Pathogen target
    ctx.fillStyle = '#8B0000';
    ctx.beginPath();
    ctx.arc(w * 0.75, h * 0.48, 10, 0, Math.PI * 2);
    ctx.fill();
    
    // Arrow showing movement
    ctx.strokeStyle = '#FF8C00';
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.moveTo(w * 0.85 - 12, h * 0.5);
    ctx.lineTo(w * 0.75 + 8, h * 0.48);
    ctx.stroke();
    
    // Arrowhead
    ctx.fillStyle = '#FF8C00';
    ctx.beginPath();
    ctx.moveTo(w * 0.75 + 8, h * 0.48);
    ctx.lineTo(w * 0.75 + 13, h * 0.46);
    ctx.lineTo(w * 0.75 + 13, h * 0.5);
    ctx.closePath();
    ctx.fill();
    
    ctx.fillStyle = '#000';
    ctx.font = '11px Arial';
    ctx.fillText('Chemotaxis', w * 0.77, h * 0.44);
    
    // Labels for molecular interactions
    ctx.fillStyle = '#000';
    ctx.font = 'bold 12px Arial';
    ctx.fillText('Molecular Steps:', w * 0.1, h * 0.6);
    
    ctx.font = '11px Arial';
    const steps = [
      '1. Selectins → Rolling along endothelium',
      '2. Chemokines → Activation of integrins',
      '3. Integrins → Firm adhesion',
      '4. PECAM-1 → Transmigration',
      '5. Chemokine gradient → Migration to site'
    ];
    
    steps.forEach((step, i) => {
      ctx.fillText(step, w * 0.1, h * (0.63 + i * 0.04));
    });
  }
  
  static drawTissueRepair(ctx, w, h, type) {
    // Timeline
    ctx.strokeStyle = '#000';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(w * 0.1, h * 0.85);
    ctx.lineTo(w * 0.9, h * 0.85);
    ctx.stroke();
    
    ctx.fillStyle = '#000';
    ctx.font = '11px Arial';
    ctx.fillText('Days →', w * 0.85, h * 0.9);
    
    // Phase 1: Hemostasis (immediate)
    ctx.fillStyle = '#000';
    ctx.font = 'bold 12px Arial';
    ctx.fillText('Hemostasis', w * 0.12, h * 0.1);
    
    // Blood clot
    ctx.fillStyle = '#8B0000';
    ctx.beginPath();
    ctx.arc(w * 0.15, h * 0.2, 25, 0, Math.PI * 2);
    ctx.fill();
    
    // Fibrin mesh
    ctx.strokeStyle = '#DAA520';
    ctx.lineWidth = 2;
    for(let i = 0; i < 8; i++) {
      const angle = (Math.PI * 2 * i) / 8;
      ctx.beginPath();
      ctx.moveTo(w * 0.15, h * 0.2);
      ctx.lineTo(
        w * 0.15 + Math.cos(angle) * 20,
        h * 0.2 + Math.sin(angle) * 20
      );
      ctx.stroke();
    }
    
    // Platelets
    for(let i = 0; i < 6; i++) {
      ctx.fillStyle = '#DDA0DD';
      const angle = (Math.PI * 2 * i) / 6;
      ctx.beginPath();
      ctx.arc(
        w * 0.15 + Math.cos(angle) * 15,
        h * 0.2 + Math.sin(angle) * 15,
        4, 0, Math.PI * 2
      );
      ctx.fill();
    }
    
    ctx.fillStyle = '#000';
    ctx.font = '10px Arial';
    ctx.fillText('Clot formation', w * 0.11, h * 0.28);
    ctx.fillText('stops bleeding', w * 0.11, h * 0.31);
    
    // Phase 2: Inflammation (0-3 days)
    ctx.fillStyle = '#000';
    ctx.font = 'bold 12px Arial';
    ctx.fillText('Inflammation', w * 0.3, h * 0.1);
    
    // Inflamed tissue
    ctx.fillStyle = 'rgba(255, 99, 71, 0.3)';
    ctx.fillRect(w * 0.3, h * 0.15, 60, 50);
    
    // Neutrophils
    for(let i = 0; i < 4; i++) {
      ctx.fillStyle = '#FFE4E1';
      ctx.beginPath();
      ctx.arc(
        w * (0.32 + (i % 2) * 0.04),
        h * (0.18 + Math.floor(i / 2) * 0.06),
        8, 0, Math.PI * 2
      );
      ctx.fill();
      
      ctx.strokeStyle = '#483D8B';
      ctx.lineWidth = 1;
      ctx.stroke();
    }
    
    // Macrophages
    for(let i = 0; i < 3; i++) {
      ctx.fillStyle = '#FFB366';
      ctx.beginPath();
      ctx.arc(
        w * (0.31 + i * 0.04),
        h * 0.22,
        10, 0, Math.PI * 2
      );
      ctx.fill();
    }
    
    ctx.fillStyle = '#000';
    ctx.font = '10px Arial';
    ctx.fillText('Debris removal', w * 0.29, h * 0.28);
    ctx.fillText('Infection control', w * 0.29, h * 0.31);
    
    // Phase 3: Proliferation (3-21 days)
    ctx.fillStyle = '#000';
    ctx.font = 'bold 12px Arial';
    ctx.fillText('Proliferation', w * 0.52, h * 0.1);
    
    // New tissue forming
    ctx.fillStyle = '#FFB6C1';
    ctx.fillRect(w * 0.5, h * 0.15, 80, 50);
    
    // Fibroblasts
    for(let i = 0; i < 8; i++) {
      ctx.fillStyle = '#DDA0DD';
      ctx.beginPath();
      ctx.ellipse(
        w * (0.52 + (i % 4) * 0.04),
        h * (0.18 + Math.floor(i / 4) * 0.08),
        8, 5, Math.random() * Math.PI, 0, Math.PI * 2
      );
      ctx.fill();
    }
    
    // Collagen fibers
    ctx.strokeStyle = '#4169E1';
    ctx.lineWidth = 2;
    for(let i = 0; i < 10; i++) {
      ctx.beginPath();
      ctx.moveTo(w * (0.51 + Math.random() * 0.08), h * (0.16 + Math.random() * 0.08));
      ctx.lineTo(w * (0.51 + Math.random() * 0.08), h * (0.16 + Math.random() * 0.08));
      ctx.stroke();
    }
    
    // New blood vessels (angiogenesis)
    ctx.strokeStyle = '#DC143C';
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.moveTo(w * 0.52, h * 0.19);
    ctx.quadraticCurveTo(w * 0.56, h * 0.17, w * 0.6, h * 0.19);
    ctx.stroke();
    
    ctx.fillStyle = '#000';
    ctx.font = '10px Arial';
    ctx.fillText('New tissue', w * 0.51, h * 0.28);
    ctx.fillText('Angiogenesis', w * 0.51, h * 0.31);
    
    // Phase 4: Remodeling (21 days - 2 years)
    ctx.fillStyle = '#000';
    ctx.font = 'bold 12px Arial';
    ctx.fillText('Remodeling', w * 0.78, h * 0.1);
    
    // Mature scar tissue
    ctx.fillStyle = '#F5DEB3';
    ctx.fillRect(w * 0.75, h * 0.15, 80, 50);
    
    // Organized collagen
    ctx.strokeStyle = '#4169E1';
    ctx.lineWidth = 2;
    for(let i = 0; i < 8; i++) {
      ctx.beginPath();
      ctx.moveTo(w * 0.76, h * (0.17 + i * 0.006));
      ctx.lineTo(w * 0.84, h * (0.17 + i * 0.006));
      ctx.stroke();
    }
    
    // Mature blood vessels
    ctx.strokeStyle = '#DC143C';
    ctx.lineWidth = 4;
    ctx.beginPath();
    ctx.moveTo(w * 0.76, h * 0.2);
    ctx.lineTo(w * 0.84, h * 0.2);
    ctx.stroke();
    
    ctx.fillStyle = '#000';
    ctx.font = '10px Arial';
    ctx.fillText('Scar maturation', w * 0.76, h * 0.28);
    ctx.fillText('Tissue strength', w * 0.76, h * 0.31);
    
    // Key cells and factors
    ctx.fillStyle = 'rgba(255, 215, 0, 0.2)';
    ctx.fillRect(w * 0.1, h * 0.4, w * 0.8, h * 0.35);
    
    ctx.strokeStyle = '#FFD700';
    ctx.lineWidth = 2;
    ctx.strokeRect(w * 0.1, h * 0.4, w * 0.8, h * 0.35);
    
    ctx.fillStyle = '#000';
    ctx.font = 'bold 13px Arial';
    ctx.fillText('Key Players in Tissue Repair:', w * 0.12, h * 0.43);
    
    ctx.font = '11px Arial';
    const players = [
      'Platelets → Release growth factors (PDGF, TGF-β)',
      'Macrophages → Phagocytosis, release cytokines',
      'Fibroblasts → Produce collagen and ECM',
      'Endothelial cells → Form new blood vessels',
      'Keratinocytes → Re-epithelialization (skin)',
      'Growth factors → VEGF (angiogenesis), EGF (epithelial growth)',
      'MMPs → Remodel extracellular matrix'
    ];
    
    players.forEach((player, i) => {
      ctx.fillText('• ' + player, w * 0.12, h * (0.47 + i * 0.035));
    });
    
    // Outcome indication
    if(type === 'acute') {
      ctx.fillStyle = '#228B22';
      ctx.font = 'bold 12px Arial';
      ctx.fillText('✓ Complete healing possible', w * 0.12, h * 0.72);
    } else if(type === 'chronic') {
      ctx.fillStyle = '#8B0000';
      ctx.font = 'bold 12px Arial';
      ctx.fillText('⚠ Prolonged inflammation → Fibrosis', w * 0.12, h * 0.72);
    }
  }
  
  // ===== DISEASE TRANSMISSION DIAGRAMS =====
  
  static drawDiseaseTransmission(ctx, x, y, width, height, diseaseType, stage) {
    ctx.save();
    ctx.translate(x, y);
    
    const w = width;
    const h = height;
    
    switch(stage) {
      case 'complete':
        this.drawCompleteTransmissionCycle(ctx, w, h, diseaseType);
        break;
      case 'infection':
        this.drawInfectionStage(ctx, w, h, diseaseType);
        break;
      case 'incubation':
        this.drawIncubationStage(ctx, w, h, diseaseType);
        break;
      case 'transmission':
        this.drawTransmissionStage(ctx, w, h, diseaseType);
        break;
      case 'vector-acquisition':
        this.drawVectorAcquisitionStage(ctx, w, h, diseaseType);
        break;
    }
    
    ctx.restore();
  }
  
  static drawCompleteTransmissionCycle(ctx, w, h, diseaseType) {
    // Circular transmission cycle
    const centerX = w * 0.5;
    const centerY = h * 0.5;
    const radius = Math.min(w, h) * 0.35;
    
    // Cycle arrow
    ctx.strokeStyle = '#4169E1';
    ctx.lineWidth = 4;
    ctx.beginPath();
    ctx.arc(centerX, centerY, radius, 0, Math.PI * 1.9);
    ctx.stroke();
    
    // Arrowhead
    const arrowAngle = Math.PI * 1.9;
    ctx.fillStyle = '#4169E1';
    ctx.beginPath();
    ctx.moveTo(
      centerX + Math.cos(arrowAngle) * radius,
      centerY + Math.sin(arrowAngle) * radius
    );
    ctx.lineTo(
      centerX + Math.cos(arrowAngle - 0.3) * (radius - 15),
      centerY + Math.sin(arrowAngle - 0.3) * (radius - 15)
    );
    ctx.lineTo(
      centerX + Math.cos(arrowAngle + 0.1) * (radius + 10),
      centerY + Math.sin(arrowAngle + 0.1) * (radius + 10)
    );
    ctx.closePath();
    ctx.fill();
    
    // Stage positions on the cycle
    const stages = [
      { name: 'Infected\nHuman', angle: -Math.PI / 2, icon: 'human-sick' },
      { name: 'Vector\nBites', angle: 0, icon: 'mosquito' },
      { name: 'Pathogen\nin Vector', angle: Math.PI / 2, icon: 'parasite' },
      { name: 'Vector\nTransmits', angle: Math.PI, icon: 'bite' },
      { name: 'New\nInfection', angle: -Math.PI * 3 / 4, icon: 'human-new' }
    ];
    
    stages.forEach(stage => {
      const x = centerX + Math.cos(stage.angle) * radius;
      const y = centerY + Math.sin(stage.angle) * radius;
      
      // Draw icon based on disease type
      this.drawTransmissionIcon(ctx, x, y, stage.icon, diseaseType);
      
      // Label
      ctx.fillStyle = '#000';
      ctx.font = '11px Arial';
      ctx.textAlign = 'center';
      const lines = stage.name.split('\n');
      lines.forEach((line, i) => {
        const labelRadius = radius + 40;
        ctx.fillText(
          line,
          centerX + Math.cos(stage.angle) * labelRadius,
          centerY + Math.sin(stage.angle) * labelRadius + i * 12
        );
      });
    });
    
    // Central label
    ctx.fillStyle = '#000';
    ctx.font = 'bold 16px Arial';
    ctx.textAlign = 'center';
    ctx.fillText(this.getDiseaseLabel(diseaseType), centerX, centerY - 10);
    ctx.font = '12px Arial';
    ctx.fillText('Transmission Cycle', centerX, centerY + 10);
  }
  
  static drawTransmissionIcon(ctx, x, y, icon, diseaseType) {
    switch(icon) {
      case 'human-sick':
        // Sick person
        ctx.fillStyle = '#FFE4C4';
        ctx.beginPath();
        ctx.arc(x, y - 15, 12, 0, Math.PI * 2);
        ctx.fill();
        
        ctx.fillRect(x - 15, y - 3, 30, 35);
        
        // Red face (fever)
        ctx.fillStyle = '#FF6347';
        ctx.beginPath();
        ctx.arc(x, y - 15, 10, 0, Math.PI * 2);
        ctx.fill();
        break;
        
      case 'mosquito':
        // Mosquito
        ctx.fillStyle = '#8B4513';
        ctx.beginPath();
        ctx.ellipse(x, y, 15, 8, 0, 0, Math.PI * 2);
        ctx.fill();
        
        // Wings
        ctx.fillStyle = 'rgba(200, 200, 200, 0.5)';
        ctx.beginPath();
        ctx.ellipse(x - 8, y, 12, 18, -0.3, 0, Math.PI * 2);
        ctx.fill();
        ctx.beginPath();
        ctx.ellipse(x + 8, y, 12, 18, 0.3, 0, Math.PI * 2);
        ctx.fill();
        
        // Proboscis
        ctx.strokeStyle = '#8B4513';
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(x + 15, y);
        ctx.lineTo(x + 25, y);
        ctx.stroke();
        break;
        
      case 'parasite':
        // Parasite in vector
        if(diseaseType === 'malaria') {
          // Plasmodium sporozoites
          for(let i = 0; i < 4; i++) {
            ctx.fillStyle = '#FF6347';
            ctx.beginPath();
            ctx.ellipse(
              x + (i - 1.5) * 8,
              y,
              6, 3, 0, 0, Math.PI * 2
            );
            ctx.fill();
          }
        } else {
          // Generic pathogen
          ctx.fillStyle = '#8B0000';
          ctx.beginPath();
          ctx.arc(x, y, 12, 0, Math.PI * 2);
          ctx.fill();
        }
        break;
        
      case 'bite':
        // Biting action
        ctx.strokeStyle = '#FF0000';
        ctx.lineWidth = 3;
        ctx.beginPath();
        ctx.arc(x, y, 15, 0, Math.PI);
        ctx.stroke();
        
        // Injection
        ctx.strokeStyle = '#FFD700';
        ctx.lineWidth = 2;
        ctx.setLineDash([3, 3]);
        ctx.beginPath();
        ctx.moveTo(x, y - 15);
        ctx.lineTo(x, y + 10);
        ctx.stroke();
        ctx.setLineDash([]);
        break;
        
      case 'human-new':
        // Newly infected person
        ctx.fillStyle = '#FFE4C4';
        ctx.beginPath();
        ctx.arc(x, y - 15, 12, 0, Math.PI * 2);
        ctx.fill();
        
        ctx.fillRect(x - 15, y - 3, 30, 35);
        
        // Red spot (bite)
        ctx.fillStyle = '#FF0000';
        ctx.beginPath();
        ctx.arc(x - 10, y + 10, 4, 0, Math.PI * 2);
        ctx.fill();
        break;
    }
  }
  
  static getDiseaseLabel(diseaseType) {
    const labels = {
      'malaria': 'Malaria',
      'dengue': 'Dengue Fever',
      'lyme': 'Lyme Disease',
      'zika': 'Zika Virus',
      'plague': 'Plague',
      'typhus': 'Typhus'
    };
    return labels[diseaseType] || 'Vector-Borne Disease';
  }
  
  static drawInfectionStage(ctx, w, h, diseaseType) {
    // Initial bite
    ctx.fillStyle = '#FFE4C4';
    ctx.fillRect(w * 0.3, h * 0.3, w * 0.4, h * 0.4);
    
    ctx.fillStyle = '#000';
    ctx.font = 'bold 14px Arial';
    ctx.fillText('Initial Infection', w * 0.38, h * 0.25);
    
    // Vector (mosquito) landing
    this.drawTransmissionIcon(ctx, w * 0.5, h * 0.35, 'mosquito', diseaseType);
    
    // Bite site
    ctx.fillStyle = '#FF6347';
    ctx.beginPath();
    ctx.arc(w * 0.5, h * 0.5, 15, 0, Math.PI * 2);
    ctx.fill();
    
    // Pathogens entering
    ctx.strokeStyle = '#8B0000';
    ctx.lineWidth = 3;
    ctx.setLineDash([5, 5]);
    for(let i = 0; i < 5; i++) {
      ctx.beginPath();
      ctx.moveTo(w * 0.5, h * 0.35 + 8);
      ctx.lineTo(w * 0.5 + (i - 2) * 8, h * 0.5 - 15);
      ctx.stroke();
    }
    ctx.setLineDash([]);
    
    // Pathogens
    for(let i = 0; i < 5; i++) {
      ctx.fillStyle = '#8B0000';
      ctx.beginPath();
      ctx.arc(w * 0.5 + (i - 2) * 10, h * 0.52, 4, 0, Math.PI * 2);
      ctx.fill();
    }
    
    // Blood vessel
    ctx.strokeStyle = '#DC143C';
    ctx.lineWidth = 8;
    ctx.beginPath();
    ctx.moveTo(w * 0.3, h * 0.6);
    ctx.lineTo(w * 0.7, h * 0.6);
    ctx.stroke();
    
    // Pathogens entering bloodstream
    for(let i = 0; i < 4; i++) {
      ctx.fillStyle = '#8B0000';
      ctx.beginPath();
      ctx.arc(w * (0.35 + i * 0.1), h * 0.6, 5, 0, Math.PI * 2);
      ctx.fill();
    }
  }
  
  static drawIncubationStage(ctx, w, h, diseaseType) {
    // Human silhouette
    ctx.fillStyle = '#FFE4C4';
    ctx.beginPath();
    ctx.arc(w * 0.3, h * 0.25, 25, 0, Math.PI * 2);
    ctx.fill();
    
    ctx.fillRect(w * 0.25, h * 0.3, w * 0.1, h * 0.3);
    
    // Pathogen multiplication
    ctx.fillStyle = '#000';
    ctx.font = 'bold 14px Arial';
    ctx.fillText('Incubation Period', w * 0.45, h * 0.2);
    
    // Timeline
    ctx.strokeStyle = '#000';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(w * 0.45, h * 0.3);
    ctx.lineTo(w * 0.9, h * 0.3);
    ctx.stroke();
    
    // Pathogen count over time
    for(let day = 0; day < 5; day++) {
      const x = w * (0.5 + day * 0.08);
      const count = Math.pow(2, day);
      
      ctx.fillStyle = '#000';
      ctx.font = '11px Arial';
      ctx.fillText(`Day ${day + 1}`, x, h * 0.27);
      
      // Draw increasing pathogen numbers
      const maxShow = Math.min(count, 8);
      for(let i = 0; i < maxShow; i++) {
        ctx.fillStyle = '#8B0000';
        ctx.beginPath();
        ctx.arc(
          x + (i % 3 - 1) * 8,
          h * (0.35 + Math.floor(i / 3) * 0.05),
          4, 0, Math.PI * 2
        );
        ctx.fill();
      }
      
      if(count > 8) {
        ctx.fillStyle = '#000';
        ctx.font = '10px Arial';
        ctx.fillText(`×${count}`, x, h * 0.5);
      }
    }
    
    // Symptoms appear
    ctx.fillStyle = 'rgba(255, 99, 71, 0.3)';
    ctx.fillRect(w * 0.45, h * 0.55, w * 0.4, h * 0.3);
    
    ctx.fillStyle = '#000';
    ctx.font = 'bold 13px Arial';
    ctx.fillText('Symptoms Appear:', w * 0.48, h * 0.6);
    
    ctx.font = '11px Arial';
    const symptoms = this.getSymptoms(diseaseType);
    symptoms.forEach((symptom, i) => {
      ctx.fillText('• ' + symptom, w * 0.48, h * (0.64 + i * 0.04));
    });
  }
  
  static getSymptoms(diseaseType) {
    const symptomMap = {
      'malaria': ['Fever', 'Chills', 'Headache', 'Anemia'],
      'dengue': ['High fever', 'Rash', 'Joint pain', 'Bleeding'],
      'lyme': ['Bulls-eye rash', 'Fever', 'Fatigue', 'Joint pain'],
      'zika': ['Fever', 'Rash', 'Joint pain', 'Conjunctivitis'],
      'plague': ['Fever', 'Swollen lymph nodes', 'Weakness'],
      'typhus': ['Fever', 'Headache', 'Rash', 'Confusion']
    };
    return symptomMap[diseaseType] || ['Fever', 'Fatigue', 'Pain'];
  }
  
  static drawTransmissionStage(ctx, w, h, diseaseType) {
    // Infected person
    ctx.fillStyle = '#FFE4C4';
    ctx.beginPath();
    ctx.arc(w * 0.2, h * 0.4, 30, 0, Math.PI * 2);
    ctx.fill();
    
    ctx.fillRect(w * 0.15, h * 0.45, w * 0.1, h * 0.25);
    
    // Fever indication
    ctx.fillStyle = '#FF6347';
    ctx.beginPath();
    ctx.arc(w * 0.2, h * 0.4, 25, 0, Math.PI * 2);
    ctx.fill();
    
    // Vector approaches
    this.drawTransmissionIcon(ctx, w * 0.35, h * 0.35, 'mosquito', diseaseType);
    
    // Arrow showing vector movement
    ctx.strokeStyle = '#4169E1';
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.moveTo(w * 0.35, h * 0.38);
    ctx.lineTo(w * 0.25, h * 0.42);
    ctx.stroke();
    
    // Arrowhead
    ctx.fillStyle = '#4169E1';
    ctx.beginPath();
    ctx.moveTo(w * 0.25, h * 0.42);
    ctx.lineTo(w * 0.27, h * 0.39);
    ctx.lineTo(w * 0.27, h * 0.45);
    ctx.closePath();
    ctx.fill();
    
    // Blood meal with pathogens
    ctx.strokeStyle = '#DC143C';
    ctx.lineWidth = 4;
    ctx.setLineDash([3, 3]);
    ctx.beginPath();
    ctx.moveTo(w * 0.22, h * 0.5);
    ctx.lineTo(w * 0.32, h * 0.4);
    ctx.stroke();
    ctx.setLineDash([]);
    
    // Pathogens being taken up
    for(let i = 0; i < 5; i++) {
      ctx.fillStyle = '#8B0000';
      ctx.beginPath();
      const t = i / 5;
      const px = w * (0.22 + t * 0.1);
      const py = h * (0.5 - t * 0.1);
      ctx.arc(px, py, 3, 0, Math.PI * 2);
      ctx.fill();
    }
    
    // Vector now infected
    ctx.fillStyle = '#000';
    ctx.font = 'bold 13px Arial';
    ctx.fillText('Vector Acquires Pathogen', w * 0.5, h * 0.3);
    
    // Infected vector
    this.drawTransmissionIcon(ctx, w * 0.7, h * 0.4, 'mosquito', diseaseType);
    
    // Pathogens in vector gut
    ctx.fillStyle = 'rgba(139, 0, 0, 0.3)';
    ctx.beginPath();
    ctx.ellipse(w * 0.7, h * 0.4, 10, 6, 0, 0, Math.PI * 2);
    ctx.fill();
    
    for(let i = 0; i < 4; i++) {
      ctx.fillStyle = '#8B0000';
      ctx.beginPath();
      ctx.arc(w * (0.68 + i * 0.01), h * 0.4, 2, 0, Math.PI * 2);
      ctx.fill();
    }
    
    // New susceptible host
    ctx.fillStyle = '#FFE4C4';
    ctx.beginPath();
    ctx.arc(w * 0.8, h * 0.65, 30, 0, Math.PI * 2);
    ctx.fill();
    
    ctx.fillRect(w * 0.75, h * 0.7, w * 0.1, h * 0.25);
    
    // Vector moves to new host
    ctx.strokeStyle = '#4169E1';
    ctx.lineWidth = 3;
    ctx.setLineDash([10, 5]);
    ctx.beginPath();
    ctx.moveTo(w * 0.7, h * 0.45);
    ctx.lineTo(w * 0.78, h * 0.62);
    ctx.stroke();
    ctx.setLineDash([]);
    
    // Arrowhead
    ctx.fillStyle = '#4169E1';
    ctx.beginPath();
    ctx.moveTo(w * 0.78, h * 0.62);
    ctx.lineTo(w * 0.75, h * 0.58);
    ctx.lineTo(w * 0.8, h * 0.59);
    ctx.closePath();
    ctx.fill();
    
    ctx.fillStyle = '#000';
    ctx.font = '12px Arial';
    ctx.fillText('Transmission', w * 0.72, h * 0.55);
    ctx.fillText('to new host', w * 0.72, h * 0.58);
  }
  
  static drawVectorAcquisitionStage(ctx, w, h, diseaseType) {
    // Detailed view of pathogen lifecycle in vector
    ctx.fillStyle = '#000';
    ctx.font = 'bold 16px Arial';
    ctx.fillText('Pathogen Development in Vector', w * 0.3, h * 0.1);
    
    // Vector body outline
    ctx.fillStyle = 'rgba(139, 69, 19, 0.2)';
    ctx.beginPath();
    ctx.ellipse(w * 0.5, h * 0.5, 150, 80, 0, 0, Math.PI * 2);
    ctx.fill();
    
    ctx.strokeStyle = '#8B4513';
    ctx.lineWidth = 3;
    ctx.stroke();
    
    // Stage 1: Ingestion
    ctx.fillStyle = '#000';
    ctx.font = 'bold 12px Arial';
    ctx.fillText('1. Ingestion', w * 0.25, h * 0.3);
    
    // Midgut
    ctx.fillStyle = '#FFB6C1';
    ctx.beginPath();
    ctx.ellipse(w * 0.35, h * 0.45, 40, 25, 0, 0, Math.PI * 2);
    ctx.fill();
    
    ctx.strokeStyle = '#FF69B4';
    ctx.lineWidth = 2;
    ctx.stroke();
    
    // Pathogens in midgut
    for(let i = 0; i < 8; i++) {
      const angle = (Math.PI * 2 * i) / 8;
      ctx.fillStyle = '#8B0000';
      ctx.beginPath();
      ctx.arc(
        w * 0.35 + Math.cos(angle) * 20,
        h * 0.45 + Math.sin(angle) * 12,
        4, 0, Math.PI * 2
      );
      ctx.fill();
    }
    
    ctx.fillStyle = '#000';
    ctx.font = '10px Arial';
    ctx.fillText('Midgut', w * 0.32, h * 0.52);
    
    // Stage 2: Multiplication
    ctx.fillStyle = '#000';
    ctx.font = 'bold 12px Arial';
    ctx.fillText('2. Multiplication', w * 0.48, h * 0.3);
    
    // Multiplying pathogens
    for(let i = 0; i < 15; i++) {
      ctx.fillStyle = '#8B0000';
      ctx.beginPath();
      ctx.arc(
        w * (0.48 + Math.random() * 0.08),
        h * (0.42 + Math.random() * 0.08),
        3, 0, Math.PI * 2
      );
      ctx.fill();
    }
    
    // Arrow showing multiplication
    ctx.strokeStyle = '#FF0000';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(w * 0.375, h * 0.45);
    ctx.lineTo(w * 0.46, h * 0.45);
    ctx.stroke();
    
    // Arrowhead
    ctx.fillStyle = '#FF0000';
    ctx.beginPath();
    ctx.moveTo(w * 0.46, h * 0.45);
    ctx.lineTo(w * 0.44, h * 0.43);
    ctx.lineTo(w * 0.44, h * 0.47);
    ctx.closePath();
    ctx.fill();
    
    // Stage 3: Migration to salivary glands
    ctx.fillStyle = '#000';
    ctx.font = 'bold 12px Arial';
    ctx.fillText('3. Migration', w * 0.62, h * 0.3);
    
    // Salivary glands
    ctx.fillStyle = '#87CEEB';
    ctx.beginPath();
    ctx.ellipse(w * 0.65, h * 0.4, 30, 20, 0, 0, Math.PI * 2);
    ctx.fill();
    
    ctx.strokeStyle = '#4169E1';
    ctx.lineWidth = 2;
    ctx.stroke();
    
    // Sporozoites in salivary glands
    for(let i = 0; i < 12; i++) {
      ctx.fillStyle = '#FF6347';
      ctx.beginPath();
      const angle = (Math.PI * 2 * i) / 12;
      ctx.ellipse(
        w * 0.65 + Math.cos(angle) * 15,
        h * 0.4 + Math.sin(angle) * 10,
        5, 2, angle, 0, Math.PI * 2
      );
      ctx.fill();
    }
    
    ctx.fillStyle = '#000';
    ctx.font = '10px Arial';
    ctx.fillText('Salivary Glands', w * 0.6, h * 0.48);
    
    // Migration path
    ctx.strokeStyle = '#FF6347';
    ctx.lineWidth = 2;
    ctx.setLineDash([5, 5]);
    ctx.beginPath();
    ctx.moveTo(w * 0.54, h * 0.45);
    ctx.quadraticCurveTo(w * 0.59, h * 0.38, w * 0.635, h * 0.4);
    ctx.stroke();
    ctx.setLineDash([]);
    
    // Timeline
    ctx.strokeStyle = '#000';
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.moveTo(w * 0.2, h * 0.7);
    ctx.lineTo(w * 0.8, h * 0.7);
    ctx.stroke();
    
    ctx.fillStyle = '#000';
    ctx.font = '11px Arial';
    ctx.fillText('Day 0', w * 0.2, h * 0.75);
    ctx.fillText('Day 7-14', w * 0.5, h * 0.75);
    ctx.fillText('Day 14+', w * 0.75, h * 0.75);
    ctx.fillText('(Infectious)', w * 0.73, h * 0.78);
    
    // Extrinsic incubation period
    ctx.fillStyle = 'rgba(255, 215, 0, 0.2)';
    ctx.fillRect(w * 0.2, h * 0.82, w * 0.6, h * 0.13);
    
    ctx.strokeStyle = '#FFD700';
    ctx.lineWidth = 2;
    ctx.strokeRect(w * 0.2, h * 0.82, w * 0.6, h * 0.13);
    
    ctx.fillStyle = '#000';
    ctx.font = 'bold 12px Arial';
    ctx.fillText('Extrinsic Incubation Period:', w * 0.22, h * 0.86);
    ctx.font = '11px Arial';
    ctx.fillText('Time required for pathogen to develop in vector', w * 0.22, h * 0.89);
    ctx.fillText('Temperature dependent (warmer = faster)', w * 0.22, h * 0.92);
  }
}




