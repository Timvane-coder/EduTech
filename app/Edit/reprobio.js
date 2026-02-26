import { createCanvas } from '@napi-rs/canvas'; import
ExcelJS from 'exceljs'; import fs from 'fs'; import os
from 'os'; import path from 'path'; import readline from
'readline'; import * as math from 'mathjs'; import
GIFEncoder from 'gifencoder'; import { PassThrough }
from 'stream';


class AnatomicalShapes {

// =========== REPRODUCTION ================================


  static drawEmbryoDevelopment(ctx, x, y, width, height, stage, week) {
    ctx.save();
    ctx.translate(x, y);
    
    switch(stage) {
      case 'complete':
        this.drawCompleteEmbryoStages(ctx, width, height, week);
        break;
      case 'cleavage':
        this.drawCleavageStage(ctx, width, height);
        break;
      case 'blastula':
        this.drawBlastulaStage(ctx, width, height);
        break;
      case 'gastrulation':
        this.drawGastrulationStage(ctx, width, height);
        break;
      case 'organogenesis':
        this.drawOrganogenesisStage(ctx, width, height, week);
        break;
      case 'fetal':
        this.drawFetalStage(ctx, width, height, week);
        break;
    }
    
    ctx.restore();
  }

  static drawCompleteEmbryoStages(ctx, width, height, week) {
    const stages = ['Zygote', 'Cleavage', 'Blastula', 'Gastrula', 'Embryo'];
    const stageWidth = width / 5;
    
    for(let i = 0; i < stages.length; i++) {
      const x = i * stageWidth + stageWidth / 2;
      const y = height / 2;
      
      // Draw each stage progressively larger
      const size = 30 + (i * 15);
      
      ctx.fillStyle = '#FFE4E1';
      ctx.strokeStyle = '#8B4513';
      ctx.lineWidth = 2;
      
      ctx.beginPath();
      ctx.arc(x, y, size, 0, Math.PI * 2);
      ctx.fill();
      ctx.stroke();
      
      // Add internal details based on stage
      if(i >= 1) { // Cleavage divisions
        ctx.strokeStyle = '#CD853F';
        ctx.lineWidth = 1.5;
        for(let j = 0; j < Math.pow(2, i); j++) {
          const angle = (Math.PI * 2 * j) / Math.pow(2, i);
          ctx.beginPath();
          ctx.moveTo(x, y);
          ctx.lineTo(x + Math.cos(angle) * size, y + Math.sin(angle) * size);
          ctx.stroke();
        }
      }
      
      // Labels
      ctx.fillStyle = '#000000';
      ctx.font = '12px Arial';
      ctx.textAlign = 'center';
      ctx.fillText(stages[i], x, y + size + 20);
    }
  }

  static drawCleavageStage(ctx, width, height) {
    const centerX = width / 2;
    const centerY = height / 2;
    const radius = Math.min(width, height) / 3;
    
    // Zona pellucida (outer shell)
    ctx.strokeStyle = '#DEB887';
    ctx.lineWidth = 4;
    ctx.beginPath();
    ctx.arc(centerX, centerY, radius, 0, Math.PI * 2);
    ctx.stroke();
    
    // Draw 8-cell stage
    const cells = 8;
    const cellRadius = radius / 3;
    
    for(let i = 0; i < cells; i++) {
      const angle = (Math.PI * 2 * i) / cells;
      const distance = radius * 0.5;
      const x = centerX + Math.cos(angle) * distance;
      const y = centerY + Math.sin(angle) * distance;
      
      // Cell gradient
      const gradient = ctx.createRadialGradient(x - 5, y - 5, 0, x, y, cellRadius);
      gradient.addColorStop(0, '#FFE4E1');
      gradient.addColorStop(1, '#FFB6C1');
      
      ctx.fillStyle = gradient;
      ctx.strokeStyle = '#8B4513';
      ctx.lineWidth = 2;
      
      ctx.beginPath();
      ctx.arc(x, y, cellRadius, 0, Math.PI * 2);
      ctx.fill();
      ctx.stroke();
      
      // Nucleus
      ctx.fillStyle = '#4169E1';
      ctx.beginPath();
      ctx.arc(x, y, cellRadius / 3, 0, Math.PI * 2);
      ctx.fill();
    }
  }

  static drawBlastulaStage(ctx, width, height) {
    const centerX = width / 2;
    const centerY = height / 2;
    const radius = Math.min(width, height) / 3;
    
    // Blastocoel (hollow cavity)
    const gradient = ctx.createRadialGradient(centerX, centerY, 0, centerX, centerY, radius);
    gradient.addColorStop(0, '#E0F7FF');
    gradient.addColorStop(0.7, '#B0E0E6');
    gradient.addColorStop(1, '#87CEEB');
    
    ctx.fillStyle = gradient;
    ctx.beginPath();
    ctx.arc(centerX, centerY, radius, 0, Math.PI * 2);
    ctx.fill();
    
    // Blastomeres (cells forming outer layer)
    const numCells = 24;
    const cellSize = 15;
    
    for(let i = 0; i < numCells; i++) {
      const angle = (Math.PI * 2 * i) / numCells;
      const x = centerX + Math.cos(angle) * radius;
      const y = centerY + Math.sin(angle) * radius;
      
      ctx.fillStyle = '#FFE4E1';
      ctx.strokeStyle = '#8B4513';
      ctx.lineWidth = 1.5;
      
      ctx.beginPath();
      ctx.arc(x, y, cellSize, 0, Math.PI * 2);
      ctx.fill();
      ctx.stroke();
      
      // Small nucleus
      ctx.fillStyle = '#4169E1';
      ctx.beginPath();
      ctx.arc(x, y, cellSize / 4, 0, Math.PI * 2);
      ctx.fill();
    }
    
    // Inner cell mass
    ctx.fillStyle = '#FFB6C1';
    ctx.strokeStyle = '#8B4513';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.arc(centerX + radius / 3, centerY - radius / 3, radius / 4, 0, Math.PI * 2);
    ctx.fill();
    ctx.stroke();
  }

  static drawGastrulationStage(ctx, width, height) {
    const centerX = width / 2;
    const centerY = height / 2;
    const size = Math.min(width, height) / 2;
    
    // Three germ layers
    const layers = [
      { name: 'Ectoderm', color: '#4169E1', y: -size / 3 },
      { name: 'Mesoderm', color: '#DC143C', y: 0 },
      { name: 'Endoderm', color: '#FFD700', y: size / 3 }
    ];
    
    // Draw cross-section showing layers
    ctx.strokeStyle = '#000000';
    ctx.lineWidth = 2;
    
    layers.forEach((layer, index) => {
      const gradient = ctx.createLinearGradient(centerX - size, centerY + layer.y, 
                                                 centerX + size, centerY + layer.y);
      gradient.addColorStop(0, layer.color);
      gradient.addColorStop(0.5, this.lightenColor(layer.color, 30));
      gradient.addColorStop(1, layer.color);
      
      ctx.fillStyle = gradient;
      
      // Wave-like layer
      ctx.beginPath();
      ctx.moveTo(centerX - size, centerY + layer.y - 20);
      
      for(let x = -size; x <= size; x += 10) {
        const wave = Math.sin(x / 20) * 5;
        ctx.lineTo(centerX + x, centerY + layer.y - 20 + wave);
      }
      
      for(let x = size; x >= -size; x -= 10) {
        const wave = Math.sin(x / 20) * 5;
        ctx.lineTo(centerX + x, centerY + layer.y + 20 + wave);
      }
      
      ctx.closePath();
      ctx.fill();
      ctx.stroke();
      
      // Label
      ctx.fillStyle = '#000000';
      ctx.font = 'bold 14px Arial';
      ctx.textAlign = 'right';
      ctx.fillText(layer.name, centerX - size - 10, centerY + layer.y + 5);
    });
    
    // Archenteron (primitive gut)
    ctx.fillStyle = 'rgba(255, 215, 0, 0.3)';
    ctx.strokeStyle = '#DAA520';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.ellipse(centerX, centerY, size / 4, size / 2, 0, 0, Math.PI * 2);
    ctx.fill();
    ctx.stroke();
  }

  static drawOrganogenesisStage(ctx, width, height, week) {
    const centerX = width / 2;
    const centerY = height / 2;
    
    // Embryo body outline
    ctx.fillStyle = '#FFE4E1';
    ctx.strokeStyle = '#8B4513';
    ctx.lineWidth = 2;
    
    // C-shaped embryo
    ctx.beginPath();
    ctx.arc(centerX, centerY, 80, 0.5, Math.PI * 1.5);
    ctx.arc(centerX - 20, centerY + 60, 40, Math.PI * 1.5, 0);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();
    
    // Neural tube (developing brain and spinal cord)
    ctx.fillStyle = '#9370DB';
    ctx.strokeStyle = '#4B0082';
    ctx.lineWidth = 1.5;
    ctx.beginPath();
    ctx.ellipse(centerX, centerY - 40, 25, 15, 0, 0, Math.PI * 2);
    ctx.fill();
    ctx.stroke();
    
    // Spinal cord
    ctx.beginPath();
    ctx.moveTo(centerX, centerY - 25);
    ctx.quadraticCurveTo(centerX + 10, centerY + 20, centerX - 10, centerY + 60);
    ctx.lineWidth = 8;
    ctx.stroke();
    
    // Heart primordium
    ctx.fillStyle = '#DC143C';
    ctx.beginPath();
    ctx.arc(centerX - 15, centerY + 10, 12, 0, Math.PI * 2);
    ctx.fill();
    
    // Somites (segmented blocks)
    for(let i = 0; i < 8; i++) {
      ctx.fillStyle = '#F4A460';
      ctx.strokeStyle = '#8B4513';
      ctx.lineWidth = 1;
      const y = centerY - 20 + (i * 10);
      ctx.fillRect(centerX + 15, y, 20, 8);
      ctx.strokeRect(centerX + 15, y, 20, 8);
    }
    
    // Limb buds (if week >= 4)
    if(week === 'week4' || week === 'week8' || week === 'week12') {
      ctx.fillStyle = '#FFB6C1';
      // Upper limb bud
      ctx.beginPath();
      ctx.ellipse(centerX + 35, centerY + 20, 15, 8, Math.PI / 4, 0, Math.PI * 2);
      ctx.fill();
      ctx.stroke();
      
      // Lower limb bud
      ctx.beginPath();
      ctx.ellipse(centerX - 5, centerY + 55, 15, 8, -Math.PI / 6, 0, Math.PI * 2);
      ctx.fill();
      ctx.stroke();
    }
  }

  static drawFetalStage(ctx, width, height, week) {
    const centerX = width / 2;
    const centerY = height / 2;
    
    // Fetal proportions based on week
    let headSize = 60;
    let bodyLength = 100;
    
    if(week === 'week12' || week === 'trimester1') {
      headSize = 50;
      bodyLength = 90;
    } else if(week === 'trimester2') {
      headSize = 55;
      bodyLength = 140;
    } else if(week === 'trimester3') {
      headSize = 60;
      bodyLength = 180;
    }
    
    // Head
    const headGradient = ctx.createRadialGradient(centerX - 10, centerY - bodyLength/2 - 10, 0, 
                                                   centerX, centerY - bodyLength/2, headSize);
    headGradient.addColorStop(0, '#FFE4E1');
    headGradient.addColorStop(1, '#FFB6C1');
    
    ctx.fillStyle = headGradient;
    ctx.strokeStyle = '#8B4513';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.arc(centerX, centerY - bodyLength/2, headSize, 0, Math.PI * 2);
    ctx.fill();
    ctx.stroke();
    
    // Body (curved fetal position)
    ctx.fillStyle = '#FFE4E1';
    ctx.beginPath();
    ctx.moveTo(centerX, centerY - bodyLength/2 + headSize);
    ctx.bezierCurveTo(
      centerX - 30, centerY - bodyLength/4,
      centerX - 35, centerY + bodyLength/4,
      centerX - 20, centerY + bodyLength/2
    );
    ctx.bezierCurveTo(
      centerX - 20, centerY + bodyLength/2,
      centerX + 20, centerY + bodyLength/2,
      centerX + 20, centerY + bodyLength/2
    );
    ctx.bezierCurveTo(
      centerX + 35, centerY + bodyLength/4,
      centerX + 30, centerY - bodyLength/4,
      centerX, centerY - bodyLength/2 + headSize
    );
    ctx.closePath();
    ctx.fill();
    ctx.stroke();
    
    // Umbilical cord
    ctx.strokeStyle = '#B0C4DE';
    ctx.lineWidth = 6;
    ctx.beginPath();
    ctx.moveTo(centerX, centerY);
    ctx.bezierCurveTo(
      centerX + 40, centerY + 20,
      centerX + 60, centerY + 40,
      centerX + 80, centerY + 60
    );
    ctx.stroke();
    
    // Eyes (closed)
    ctx.fillStyle = '#000000';
    ctx.beginPath();
    ctx.arc(centerX - 15, centerY - bodyLength/2 - 5, 3, 0, Math.PI * 2);
    ctx.fill();
    ctx.beginPath();
    ctx.arc(centerX + 15, centerY - bodyLength/2 - 5, 3, 0, Math.PI * 2);
    ctx.fill();
    
    // Limbs (more developed in later stages)
    if(week === 'trimester2' || week === 'trimester3') {
      // Arms
      ctx.strokeStyle = '#FFB6C1';
      ctx.lineWidth = 8;
      ctx.beginPath();
      ctx.moveTo(centerX - 25, centerY - 10);
      ctx.lineTo(centerX - 45, centerY + 20);
      ctx.stroke();
      
      ctx.beginPath();
      ctx.moveTo(centerX + 25, centerY - 10);
      ctx.lineTo(centerX + 45, centerY + 20);
      ctx.stroke();
      
      // Legs (curled)
      ctx.beginPath();
      ctx.moveTo(centerX - 15, centerY + bodyLength/2 - 20);
      ctx.quadraticCurveTo(centerX - 30, centerY + bodyLength/2, centerX - 25, centerY + bodyLength/2 + 20);
      ctx.stroke();
      
      ctx.beginPath();
      ctx.moveTo(centerX + 15, centerY + bodyLength/2 - 20);
      ctx.quadraticCurveTo(centerX + 30, centerY + bodyLength/2, centerX + 25, centerY + bodyLength/2 + 20);
      ctx.stroke();
    }
  }

  // ===== MENSTRUAL CYCLE DIAGRAMS =====
  
  static drawMenstrualCycle(ctx, x, y, width, height, phase, hormone) {
    ctx.save();
    ctx.translate(x, y);
    
    if(phase === 'complete') {
      this.drawCompleteMenstrualCycle(ctx, width, height, hormone);
    } else {
      this.drawMenstrualPhase(ctx, width, height, phase, hormone);
    }
    
    ctx.restore();
  }

  static drawCompleteMenstrualCycle(ctx, width, height, hormone) {
    const dayWidth = width / 28;
    const phases = [
      { name: 'Menstrual', days: 5, color: '#DC143C' },
      { name: 'Follicular', days: 9, color: '#FFB6C1' },
      { name: 'Ovulation', days: 1, color: '#FFD700' },
      { name: 'Luteal', days: 13, color: '#DDA0DD' }
    ];
    
    let currentDay = 0;
    
    // Draw phase bars
    phases.forEach(phase => {
      ctx.fillStyle = phase.color;
      ctx.fillRect(currentDay * dayWidth, height - 100, phase.days * dayWidth, 60);
      
      ctx.strokeStyle = '#000000';
      ctx.lineWidth = 2;
      ctx.strokeRect(currentDay * dayWidth, height - 100, phase.days * dayWidth, 60);
      
      ctx.fillStyle = '#000000';
      ctx.font = 'bold 12px Arial';
      ctx.textAlign = 'center';
      ctx.fillText(phase.name, (currentDay + phase.days / 2) * dayWidth, height - 65);
      
      currentDay += phase.days;
    });
    
    // Draw hormone levels if requested
    if(hormone === 'all' || hormone !== 'none') {
      this.drawHormoneLevels(ctx, width, height - 150, hormone);
    }
    
    // Draw endometrium thickness
    ctx.strokeStyle = '#8B4513';
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.moveTo(0, height - 180);
    
    for(let day = 0; day <= 28; day++) {
      const x = day * dayWidth;
      let thickness;
      
      if(day < 5) { // Menstruation - shedding
        thickness = 20 - (day * 3);
      } else if(day < 14) { // Proliferative - growing
        thickness = 5 + ((day - 5) * 4);
      } else { // Secretory - thickest
        thickness = 45 - ((day - 14) * 2);
      }
      
      ctx.lineTo(x, height - 180 - thickness);
    }
    
    ctx.stroke();
    
    // Day markers
    ctx.strokeStyle = '#CCCCCC';
    ctx.lineWidth = 1;
    for(let day = 0; day <= 28; day += 7) {
      ctx.beginPath();
      ctx.moveTo(day * dayWidth, 0);
      ctx.lineTo(day * dayWidth, height);
      ctx.stroke();
      
      ctx.fillStyle = '#666666';
      ctx.font = '10px Arial';
      ctx.fillText(`Day ${day}`, day * dayWidth + 5, 15);
    }
  }

  static drawHormoneLevels(ctx, width, height, hormone) {
    const hormones = {
      'fsh': { color: '#4169E1', label: 'FSH' },
      'lh': { color: '#DC143C', label: 'LH' },
      'estrogen': { color: '#9370DB', label: 'Estrogen' },
      'progesterone': { color: '#228B22', label: 'Progesterone' }
    };
    
    const drawHormone = (name, data) => {
      const dayWidth = width / 28;
      ctx.strokeStyle = data.color;
      ctx.lineWidth = 2.5;
      ctx.beginPath();
      
      for(let day = 0; day <= 28; day++) {
        const x = day * dayWidth;
        let level = 0;
        
        if(name === 'fsh') {
          level = day < 14 ? 30 - (day * 1.5) : 15;
        } else if(name === 'lh') {
          level = day === 14 ? 80 : (day < 14 ? 10 + day : 25 - (day - 14));
        } else if(name === 'estrogen') {
          level = day < 14 ? day * 4 : 60 - ((day - 14) * 3);
        } else if(name === 'progesterone') {
          level = day < 14 ? 5 : (day < 21 ? (day - 14) * 6 : 70 - ((day - 21) * 8));
        }
        
        if(day === 0) {
          ctx.moveTo(x, height - level);
        } else {
          ctx.lineTo(x, height - level);
        }
      }
      
      ctx.stroke();
    };
    
    if(hormone === 'all') {
      Object.keys(hormones).forEach(h => drawHormone(h, hormones[h]));
      
      // Legend
      let legendY = 20;
      Object.entries(hormones).forEach(([name, data]) => {
        ctx.fillStyle = data.color;
        ctx.fillRect(width - 100, legendY, 15, 15);
        ctx.fillStyle = '#000000';
        ctx.font = '11px Arial';
        ctx.textAlign = 'left';
        ctx.fillText(data.label, width - 80, legendY + 12);
        legendY += 20;
      });
    } else if(hormones[hormone]) {
      drawHormone(hormone, hormones[hormone]);
    }
  }

  static drawMenstrualPhase(ctx, width, height, phase, hormone) {
    const centerX = width / 2;
    const centerY = height / 2;
    
    // Draw ovary and uterus based on phase
    if(phase === 'menstrual') {
      // Menstruation
      ctx.fillStyle = '#DC143C';
      this.drawUterus(ctx, centerX, centerY, 100, 120);
      
      // Blood flow
      ctx.fillStyle = 'rgba(220, 20, 60, 0.6)';
      for(let i = 0; i < 10; i++) {
        ctx.beginPath();
        ctx.arc(centerX - 20 + Math.random() * 40, centerY + 80 + i * 8, 3, 0, Math.PI * 2);
        ctx.fill();
      }
    } else if(phase === 'follicular') {
      // Developing follicles
      this.drawOvary(ctx, centerX - 80, centerY, 60, true);
      this.drawUterus(ctx, centerX + 60, centerY, 100, 120);
    } else if(phase === 'ovulation') {
      // Egg release
      this.drawOvary(ctx, centerX - 80, centerY, 60, false);
      
      // Released egg
      ctx.fillStyle = '#FFD700';
      ctx.strokeStyle = '#DAA520';
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.arc(centerX - 20, centerY, 15, 0, Math.PI * 2);
      ctx.fill();
      ctx.stroke();
      
      this.drawUterus(ctx, centerX + 60, centerY, 100, 120);
    } else if(phase === 'luteal') {
      // Corpus luteum
      this.drawOvary(ctx, centerX - 80, centerY, 60, false, true);
      this.drawUterus(ctx, centerX + 60, centerY, 100, 120, true);
    }
  }

  static drawOvary(ctx, x, y, size, showFollicles = false, showCorpusLuteum = false) {
    // Ovary body
    const gradient = ctx.createRadialGradient(x - 5, y - 5, 0, x, y, size);
    gradient.addColorStop(0, '#FFE4E1');
    gradient.addColorStop(1, '#FFB6C1');
    
    ctx.fillStyle = gradient;
    ctx.strokeStyle = '#8B4513';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.ellipse(x, y, size, size * 0.7, 0, 0, Math.PI * 2);
    ctx.fill();
    ctx.stroke();
    
    if(showFollicles) {
      // Developing follicles
      const folliclePositions = [
        [x - 20, y - 15], [x + 15, y - 10], [x - 15, y + 15], [x + 20, y + 10]
      ];
      
      folliclePositions.forEach(([fx, fy], i) => {
        const follicleSize = 8 + (i * 2);
        ctx.fillStyle = '#E0F7FF';
        ctx.strokeStyle = '#4682B4';
        ctx.lineWidth = 1.5;
        ctx.beginPath();
        ctx.arc(fx, fy, follicleSize, 0, Math.PI * 2);
        ctx.fill();
        ctx.stroke();
        
        // Oocyte inside
        ctx.fillStyle = '#FFD700';
        ctx.beginPath();
        ctx.arc(fx, fy, follicleSize / 3, 0, Math.PI * 2);
        ctx.fill();
      });
    }
    
    if(showCorpusLuteum) {
      // Corpus luteum (yellow body)
      ctx.fillStyle = '#FFD700';
      ctx.strokeStyle = '#DAA520';
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.arc(x + 10, y, 18, 0, Math.PI * 2);
      ctx.fill();
      ctx.stroke();
    }
  }

  static drawUterus(ctx, x, y, width, height, thickEndometrium = false) {
    // Uterus body
    ctx.fillStyle = '#FFE4E1';
    ctx.strokeStyle = '#8B4513';
    ctx.lineWidth = 2;
    
    ctx.beginPath();
    ctx.moveTo(x - width/2, y - height/2);
    ctx.lineTo(x + width/2, y - height/2);
    ctx.bezierCurveTo(x + width/2, y + height/3, x + width/3, y + height/2, x, y + height/2);
    ctx.bezierCurveTo(x - width/3, y + height/2, x - width/2, y + height/3, x - width/2, y - height/2);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();
    
    // Endometrium
    if(thickEndometrium) {
      ctx.fillStyle = '#DC143C';
      ctx.beginPath();
      ctx.moveTo(x - width/2 + 10, y - height/2 + 10);
      ctx.lineTo(x + width/2 - 10, y - height/2 + 10);
      ctx.bezierCurveTo(x + width/2 - 10, y + height/3, x + width/3, y + height/2 - 10, x, y + height/2 - 10);
      ctx.bezierCurveTo(x - width/3, y + height/2 - 10, x - width/2 + 10, y + height/3, x - width/2 + 10, y - height/2 + 10);
      ctx.closePath();
      ctx.fill();
    }
    
    // Cervix
    ctx.strokeStyle = '#8B4513';
    ctx.lineWidth = 8;
    ctx.beginPath();
    ctx.moveTo(x, y + height/2);
    ctx.lineTo(x, y + height/2 + 20);
    ctx.stroke();
  }

  // ===== FERTILIZATION DIAGRAMS =====
  
  static drawFertilization(ctx, x, y, width, height, stage) {
    ctx.save();
    ctx.translate(x, y);
    
    switch(stage) {
      case 'complete':
        this.drawCompleteFertilization(ctx, width, height);
        break;
      case 'sperm-approach':
        this.drawSpermApproach(ctx, width, height);
        break;
      case 'acrosome-reaction':
        this.drawAcrosomeReaction(ctx, width, height);
        break;
      case 'membrane-fusion':
        this.drawMembraneFusion(ctx, width, height);
        break;
      case 'pronuclei-fusion':
        this.drawPronucleiFusion(ctx, width, height);
        break;
    }
    
    ctx.restore();
  }

  static drawCompleteFertilization(ctx, width, height) {
    const stages = [
      { name: 'Approach', x: 0.15 },
      { name: 'Binding', x: 0.35 },
      { name: 'Fusion', x: 0.55 },
      { name: 'Zygote', x: 0.80 }
    ];
    
    stages.forEach((stage, i) => {
      const x = width * stage.x;
      const y = height / 2;
      
      // Egg
      this.drawEgg(ctx, x, y, 60);
      
      // Sperm at different positions
      if(i === 0) {
        this.drawSperm(ctx, x - 80, y - 40, -45);
        this.drawSperm(ctx, x - 70, y + 30, -30);
      } else if(i === 1) {
        // Sperm bound to zona pellucida
        this.drawSperm(ctx, x - 40, y - 30, 0);
      } else if(i === 2) {
        // Sperm fusing
        this.drawSperm(ctx, x - 25, y, 0, true);
      } else if(i === 3) {
        // Two pronuclei inside
        ctx.fillStyle = '#4169E1';
        ctx.beginPath();
        ctx.arc(x - 15, y, 12, 0, Math.PI * 2);
        ctx.fill();
        ctx.beginPath();
        ctx.arc(x + 15, y, 12, 0, Math.PI * 2);
        ctx.fill();
      }
      
      // Label
      ctx.fillStyle = '#000000';
      ctx.font = '12px Arial';
      ctx.textAlign = 'center';
      ctx.fillText(stage.name, x, y + 90);
      
      // Arrow to next stage
      if(i < stages.length - 1) {
        const nextX = width * stages[i + 1].x;
        ctx.strokeStyle = '#666666';
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(x + 70, y);
        ctx.lineTo(nextX - 70, y);
        ctx.stroke();
        
        // Arrowhead
        ctx.beginPath();
        ctx.moveTo(nextX - 70, y);
        ctx.lineTo(nextX - 80, y - 5);
        ctx.lineTo(nextX - 80, y + 5);
        ctx.closePath();
        ctx.fill();
      }
    });
  }

  static drawSpermApproach(ctx, width, height) {
    const centerX = width / 2;
    const centerY = height / 2;
    
    // Large egg
    this.drawEgg(ctx, centerX, centerY, 120);
    
    // Multiple sperm approaching from different angles
    const spermPositions = [
      [centerX - 180, centerY - 80, -30],
      [centerX - 160, centerY + 60, -45],
      [centerX + 140, centerY - 100, 210],
      [centerX + 160, centerY + 40, 150],
      [centerX - 100, centerY - 140, -60],
      [centerX + 80, centerY + 130, 120]
    ];
    
    spermPositions.forEach(([x, y, angle]) => {
      this.drawSperm(ctx, x, y, angle);
      
      // Motion trail
      ctx.strokeStyle = 'rgba(70, 130, 180, 0.3)';
      ctx.lineWidth = 2;
      ctx.setLineDash([5, 5]);
      ctx.beginPath();
      ctx.moveTo(x, y);
      const rad = angle * Math.PI / 180;
      ctx.lineTo(x - Math.cos(rad) * 40, y - Math.sin(rad) * 40);
      ctx.stroke();
      ctx.setLineDash([]);
    });
  }

  static drawAcrosomeReaction(ctx, width, height) {
    const centerX = width / 2;
    const centerY = height / 2;
    
    // Egg with zona pellucida detail
    this.drawEgg(ctx, centerX, centerY, 100);
    
    // Sperm head close-up
    const spermX = centerX - 60;
    const spermY = centerY;
    
    // Sperm head enlarged
    ctx.fillStyle = '#4682B4';
    ctx.strokeStyle = '#2F4F4F';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.ellipse(spermX, spermY, 25, 35, 0, 0, Math.PI * 2);
    ctx.fill();
    ctx.stroke();
    
    // Acrosome (cap)
    ctx.fillStyle = '#87CEEB';
    ctx.beginPath();
    ctx.arc(spermX, spermY - 15, 18, Math.PI, 0, true);
    ctx.fill();
    ctx.stroke();
    
    // Acrosomal enzymes being released
    for(let i = 0; i < 8; i++) {
      const angle = (Math.PI * i) / 7 + Math.PI * 0.8;
      const dist = 35 + Math.random() * 15;
      const ex = spermX + Math.cos(angle) * dist;
      const ey = spermY + Math.sin(angle) * dist;
      
      ctx.fillStyle = 'rgba(255, 215, 0, 0.7)';
      ctx.beginPath();
      ctx.arc(ex, ey, 3, 0, Math.PI * 2);
      ctx.fill();
    }
    
    // Zona pellucida being digested
    ctx.strokeStyle = '#DAA520';
    ctx.lineWidth = 3;
    ctx.setLineDash([8, 4]);
    ctx.beginPath();
    ctx.arc(centerX, centerY, 102, Math.PI * 0.7, Math.PI * 1.3);
    ctx.stroke();
    ctx.setLineDash([]);
    
    // Labels
    ctx.fillStyle = '#000000';
    ctx.font = 'bold 11px Arial';
    ctx.textAlign = 'center';
    ctx.fillText('Acrosome', spermX, spermY - 50);
    ctx.fillText('Enzymes', spermX, spermY + 60);
    ctx.fillText('Zona Pellucida', centerX + 80, centerY - 80);
  }

  static drawMembraneFusion(ctx, width, height) {
    const centerX = width / 2;
    const centerY = height / 2;
    
    // Egg
    this.drawEgg(ctx, centerX, centerY, 100);
    
    // Sperm penetrating
    const spermX = centerX - 30;
    const spermY = centerY - 20;
    
    // Sperm head
    ctx.fillStyle = '#4682B4';
    ctx.strokeStyle = '#2F4F4F';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.ellipse(spermX, spermY, 15, 20, 0.3, 0, Math.PI * 2);
    ctx.fill();
    ctx.stroke();
    
    // Nucleus
    ctx.fillStyle = '#000080';
    ctx.beginPath();
    ctx.arc(spermX, spermY, 8, 0, Math.PI * 2);
    ctx.fill();
    
    // Membrane fusion point
    ctx.fillStyle = 'rgba(255, 215, 0, 0.8)';
    ctx.strokeStyle = '#FFD700';
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.arc(spermX + 12, spermY + 10, 12, 0, Math.PI * 2);
    ctx.fill();
    ctx.stroke();
    
    // Fusion rays
    for(let i = 0; i < 12; i++) {
      const angle = (Math.PI * 2 * i) / 12;
      ctx.strokeStyle = 'rgba(255, 215, 0, 0.6)';
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(spermX + 12, spermY + 10);
      ctx.lineTo(
        spermX + 12 + Math.cos(angle) * 20,
        spermY + 10 + Math.sin(angle) * 20
      );
      ctx.stroke();
    }
    
    // Cortical granules releasing
    for(let i = 0; i < 15; i++) {
      const angle = Math.random() * Math.PI * 2;
      const dist = 105 + Math.random() * 10;
      const gx = centerX + Math.cos(angle) * dist;
      const gy = centerY + Math.sin(angle) * dist;
      
      ctx.fillStyle = 'rgba(138, 43, 226, 0.6)';
      ctx.beginPath();
      ctx.arc(gx, gy, 4, 0, Math.PI * 2);
      ctx.fill();
    }
    
    // Labels
    ctx.fillStyle = '#000000';
    ctx.font = 'bold 11px Arial';
    ctx.fillText('Fusion Site', spermX + 40, spermY - 10);
    ctx.fillText('Cortical Reaction', centerX + 60, centerY + 100);
  }

  static drawPronucleiFusion(ctx, width, height) {
    const centerX = width / 2;
    const centerY = height / 2;
    
    // Egg outline
    ctx.fillStyle = '#FFE4E1';
    ctx.strokeStyle = '#8B4513';
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.arc(centerX, centerY, 100, 0, Math.PI * 2);
    ctx.fill();
    ctx.stroke();
    
    // Sperm tail remnant
    ctx.strokeStyle = '#4682B4';
    ctx.lineWidth = 4;
    ctx.beginPath();
    ctx.moveTo(centerX + 90, centerY);
    ctx.quadraticCurveTo(centerX + 120, centerY - 20, centerX + 140, centerY - 10);
    ctx.stroke();
    
    // Two pronuclei approaching each other
    const pronucleus1X = centerX - 25;
    const pronucleus2X = centerX + 25;
    
    // Male pronucleus (from sperm)
    const gradient1 = ctx.createRadialGradient(pronucleus1X - 5, centerY - 5, 0, 
                                                pronucleus1X, centerY, 28);
    gradient1.addColorStop(0, '#6495ED');
    gradient1.addColorStop(1, '#4169E1');
    
    ctx.fillStyle = gradient1;
    ctx.strokeStyle = '#000080';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.arc(pronucleus1X, centerY, 28, 0, Math.PI * 2);
    ctx.fill();
    ctx.stroke();
    
    // Female pronucleus (from egg)
    const gradient2 = ctx.createRadialGradient(pronucleus2X - 5, centerY - 5, 0, 
                                                pronucleus2X, centerY, 28);
    gradient2.addColorStop(0, '#FF69B4');
    gradient2.addColorStop(1, '#DC143C');
    
    ctx.fillStyle = gradient2;
    ctx.strokeStyle = '#8B0000';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.arc(pronucleus2X, centerY, 28, 0, Math.PI * 2);
    ctx.fill();
    ctx.stroke();
    
    // Chromatin inside pronuclei
    for(let i = 0; i < 23; i++) {
      const angle = (Math.PI * 2 * i) / 23;
      
      // In male pronucleus
      const x1 = pronucleus1X + Math.cos(angle) * 15;
      const y1 = centerY + Math.sin(angle) * 15;
      ctx.fillStyle = '#000080';
      ctx.fillRect(x1 - 1, y1 - 3, 2, 6);
      
      // In female pronucleus
      const x2 = pronucleus2X + Math.cos(angle) * 15;
      const y2 = centerY + Math.sin(angle) * 15;
      ctx.fillStyle = '#8B0000';
      ctx.fillRect(x2 - 1, y2 - 3, 2, 6);
    }
    
    // Arrows showing movement
    ctx.strokeStyle = '#666666';
    ctx.fillStyle = '#666666';
    ctx.lineWidth = 2;
    
    // Left arrow
    ctx.beginPath();
    ctx.moveTo(pronucleus1X + 30, centerY);
    ctx.lineTo(pronucleus1X + 40, centerY);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(pronucleus1X + 40, centerY);
    ctx.lineTo(pronucleus1X + 35, centerY - 4);
    ctx.lineTo(pronucleus1X + 35, centerY + 4);
    ctx.closePath();
    ctx.fill();
    
    // Right arrow
    ctx.beginPath();
    ctx.moveTo(pronucleus2X - 30, centerY);
    ctx.lineTo(pronucleus2X - 40, centerY);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(pronucleus2X - 40, centerY);
    ctx.lineTo(pronucleus2X - 35, centerY - 4);
    ctx.lineTo(pronucleus2X - 35, centerY + 4);
    ctx.closePath();
    ctx.fill();
    
    // Labels
    ctx.fillStyle = '#000000';
    ctx.font = 'bold 12px Arial';
    ctx.textAlign = 'center';
    ctx.fillText('♂ Pronucleus', pronucleus1X, centerY - 45);
    ctx.fillText('♀ Pronucleus', pronucleus2X, centerY - 45);
    ctx.fillText('23 chromosomes each', centerX, centerY + 70);
  }

  static drawEgg(ctx, x, y, radius) {
    // Zona pellucida (outer layer)
    ctx.strokeStyle = '#DEB887';
    ctx.lineWidth = 8;
    ctx.beginPath();
    ctx.arc(x, y, radius + 8, 0, Math.PI * 2);
    ctx.stroke();
    
    // Plasma membrane
    const gradient = ctx.createRadialGradient(x - 20, y - 20, 0, x, y, radius);
    gradient.addColorStop(0, '#FFE4E1');
    gradient.addColorStop(0.7, '#FFB6C1');
    gradient.addColorStop(1, '#FF69B4');
    
    ctx.fillStyle = gradient;
    ctx.strokeStyle = '#8B4513';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, Math.PI * 2);
    ctx.fill();
    ctx.stroke();
    
    // Nucleus
    ctx.fillStyle = 'rgba(65, 105, 225, 0.5)';
    ctx.strokeStyle = '#4169E1';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.arc(x + 10, y + 10, radius / 3, 0, Math.PI * 2);
    ctx.fill();
    ctx.stroke();
  }

  static drawSperm(ctx, x, y, angle, partial = false) {
    ctx.save();
    ctx.translate(x, y);
    ctx.rotate(angle * Math.PI / 180);
    
    if(!partial) {
      // Head
      ctx.fillStyle = '#4682B4';
      ctx.strokeStyle = '#2F4F4F';
      ctx.lineWidth = 1.5;
      ctx.beginPath();
      ctx.ellipse(0, 0, 8, 12, 0, 0, Math.PI * 2);
      ctx.fill();
      ctx.stroke();
      
      // Nucleus
      ctx.fillStyle = '#000080';
      ctx.beginPath();
      ctx.arc(0, 0, 4, 0, Math.PI * 2);
      ctx.fill();
      
      // Midpiece
      ctx.fillStyle = '#87CEEB';
      ctx.fillRect(-2, 12, 4, 15);
      ctx.strokeRect(-2, 12, 4, 15);
      
      // Tail
      ctx.strokeStyle = '#4682B4';
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(0, 27);
      
      // Wavy tail
      for(let i = 0; i < 50; i += 5) {
        const wave = Math.sin(i / 5) * 3;
        ctx.lineTo(wave, 27 + i);
      }
      ctx.stroke();
    } else {
      // Partial sperm (just head entering)
      ctx.fillStyle = '#4682B4';
      ctx.strokeStyle = '#2F4F4F';
      ctx.lineWidth = 1.5;
      ctx.beginPath();
      ctx.ellipse(0, 0, 6, 10, 0, 0, Math.PI * 2);
      ctx.fill();
      ctx.stroke();
    }
    
    ctx.restore();
  }

  // ===== GAMETOGENESIS DIAGRAMS =====
  
  static drawGametogenesis(ctx, x, y, width, height, type, stage) {
    ctx.save();
    ctx.translate(x, y);
    
    if(type === 'both') {
      this.drawBothGametogenesis(ctx, width, height, stage);
    } else if(type === 'spermatogenesis') {
      this.drawSpermatogenesis(ctx, width / 2, height, stage);
    } else if(type === 'oogenesis') {
      this.drawOogenesis(ctx, width / 2, height, stage);
    }
    
    ctx.restore();
  }

  static drawBothGametogenesis(ctx, width, height, stage) {
    // Divide canvas in half
    const halfWidth = width / 2;
    
    // Left side - Spermatogenesis
    ctx.save();
    this.drawSpermatogenesis(ctx, halfWidth - 20, height, stage);
    ctx.restore();
    
    // Dividing line
    ctx.strokeStyle = '#000000';
    ctx.lineWidth = 2;
    ctx.setLineDash([10, 5]);
    ctx.beginPath();
    ctx.moveTo(halfWidth, 0);
    ctx.lineTo(halfWidth, height);
    ctx.stroke();
    ctx.setLineDash([]);
    
    // Right side - Oogenesis
    ctx.save();
    ctx.translate(halfWidth + 20, 0);
    this.drawOogenesis(ctx, halfWidth - 20, height, stage);
    ctx.restore();
    
    // Titles
    ctx.fillStyle = '#000000';
    ctx.font = 'bold 16px Arial';
    ctx.textAlign = 'center';
    ctx.fillText('Spermatogenesis', halfWidth / 2, 25);
    ctx.fillText('Oogenesis', halfWidth + (halfWidth / 2), 25);
  }

  static drawSpermatogenesis(ctx, width, height, stage) {
    const centerX = width / 2;
    const stages = [
      { name: 'Spermatogonium', y: 0.15, size: 30, n: '2n', color: '#87CEEB' },
      { name: 'Primary Spermatocyte', y: 0.30, size: 35, n: '2n', color: '#4682B4' },
      { name: 'Secondary Spermatocyte', y: 0.50, size: 25, n: 'n', color: '#6495ED', count: 2 },
      { name: 'Spermatid', y: 0.70, size: 20, n: 'n', color: '#4169E1', count: 4 },
      { name: 'Sperm', y: 0.90, size: 15, n: 'n', color: '#000080', count: 4 }
    ];
    
    stages.forEach((s, index) => {
      const y = height * s.y;
      
      if(stage === 'complete' || this.shouldDrawStage(stage, index)) {
        if(s.count > 1) {
          // Draw multiple cells
          const spacing = width / (s.count + 1);
          for(let i = 0; i < s.count; i++) {
            const x = spacing * (i + 1);
            
            if(s.name === 'Sperm') {
              this.drawSperm(ctx, x, y, 270);
            } else {
              this.drawGermCell(ctx, x, y, s.size, s.color, s.n);
            }
          }
        } else {
          this.drawGermCell(ctx, centerX, y, s.size, s.color, s.n);
        }
        
        // Label
        ctx.fillStyle = '#000000';
        ctx.font = '11px Arial';
        ctx.textAlign = 'left';
        ctx.fillText(s.name, width + 10, y + 5);
        
        // Process labels
        if(index === 1 && (stage === 'complete' || stage === 'meiosis-I')) {
          ctx.fillStyle = '#666666';
          ctx.font = 'italic 10px Arial';
          ctx.fillText('Meiosis I', width + 10, y + 25);
        } else if(index === 2 && (stage === 'complete' || stage === 'meiosis-II')) {
          ctx.fillText('Meiosis II', width + 10, y + 25);
        } else if(index === 4 && (stage === 'complete' || stage === 'maturation')) {
          ctx.fillText('Maturation', width + 10, y + 20);
        }
        
        // Arrows between stages
        if(index < stages.length - 1 && stage === 'complete') {
          const nextY = height * stages[index + 1].y;
          this.drawArrow(ctx, centerX, y + s.size + 10, centerX, nextY - stages[index + 1].size - 10);
        }
      }
    });
  }

  static drawOogenesis(ctx, width, height, stage) {
    const centerX = width / 2;
    const stages = [
      { name: 'Oogonium', y: 0.15, size: 30, n: '2n', color: '#FFB6C1' },
      { name: 'Primary Oocyte', y: 0.30, size: 40, n: '2n', color: '#FF69B4' },
      { name: 'Secondary Oocyte', y: 0.55, size: 35, n: 'n', color: '#FF1493' },
      { name: 'Ovum', y: 0.85, size: 40, n: 'n', color: '#DC143C' }
    ];
    
    stages.forEach((s, index) => {
      const y = height * s.y;
      
      if(stage === 'complete' || this.shouldDrawStage(stage, index)) {
        this.drawGermCell(ctx, centerX, y, s.size, s.color, s.n);
        
        // Draw polar bodies
        if(index === 2) {
          // First polar body
          this.drawPolarBody(ctx, centerX + s.size + 15, y - 15, 8);
        } else if(index === 3) {
          // First polar body
          this.drawPolarBody(ctx, centerX + s.size + 15, y - 20, 8);
          // Second polar body
          this.drawPolarBody(ctx, centerX + s.size + 15, y + 20, 8);
        }
        
        // Label
        ctx.fillStyle = '#000000';
        ctx.font = '11px Arial';
        ctx.textAlign = 'left';
        ctx.fillText(s.name, width + 10, y + 5);
        
        // Process labels
        if(index === 1 && (stage === 'complete' || stage === 'meiosis-I')) {
          ctx.fillStyle = '#666666';
          ctx.font = 'italic 10px Arial';
          ctx.fillText('Meiosis I', width + 10, y + 25);
        } else if(index === 2 && (stage === 'complete' || stage === 'meiosis-II')) {
          ctx.fillText('Meiosis II (at fertilization)', width + 10, y + 25);
        }
        
        // Arrows
        if(index < stages.length - 1 && stage === 'complete') {
          const nextY = height * stages[index + 1].y;
          this.drawArrow(ctx, centerX, y + s.size + 10, centerX, nextY - stages[index + 1].size - 10);
        }
      }
    });
  }

  static drawGermCell(ctx, x, y, size, color, ploidy) {
    // Cell membrane
    const gradient = ctx.createRadialGradient(x - size/3, y - size/3, 0, x, y, size);
    gradient.addColorStop(0, this.lightenColor(color, 40));
    gradient.addColorStop(1, color);
    
    ctx.fillStyle = gradient;
    ctx.strokeStyle = this.darkenColor(color, 30);
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.arc(x, y, size, 0, Math.PI * 2);
    ctx.fill();
    ctx.stroke();
    
    // Nucleus
    ctx.fillStyle = 'rgba(65, 105, 225, 0.4)';
    ctx.strokeStyle = '#4169E1';
    ctx.lineWidth = 1.5;
    ctx.beginPath();
    ctx.arc(x, y, size / 2, 0, Math.PI * 2);
    ctx.fill();
    ctx.stroke();
    
    // Chromosomes representation
    const chromatinCount = ploidy === '2n' ? 46 : 23;
    for(let i = 0; i < chromatinCount / 4; i++) {
      ctx.strokeStyle = '#000080';
      ctx.lineWidth = 2;
      ctx.beginPath();
      const angle = (Math.PI * 2 * i) / (chromatinCount / 4);
      const r = size / 3;
      ctx.moveTo(x + Math.cos(angle) * (r - 5), y + Math.sin(angle) * (r - 5));
      ctx.lineTo(x + Math.cos(angle) * (r + 5), y + Math.sin(angle) * (r + 5));
      ctx.stroke();
    }
    
    // Ploidy label
    ctx.fillStyle = '#000000';
    ctx.font = 'bold 10px Arial';
    ctx.textAlign = 'center';
    ctx.fillText(ploidy, x, y + size + 15);
  }

  static drawPolarBody(ctx, x, y, size) {
    ctx.fillStyle = '#D3D3D3';
    ctx.strokeStyle = '#808080';
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.arc(x, y, size, 0, Math.PI * 2);
    ctx.fill();
    ctx.stroke();
    
    ctx.fillStyle = '#A9A9A9';
    ctx.beginPath();
    ctx.arc(x, y, size / 2, 0, Math.PI * 2);
    ctx.fill();
  }

  static shouldDrawStage(stage, index) {
    const stageMap = {
      'mitosis': [0],
      'meiosis-I': [0, 1],
      'meiosis-II': [0, 1, 2],
      'maturation': [0, 1, 2, 3]
    };
    return stageMap[stage] && stageMap[stage].includes(index);
  }

  // ===== PLACENTA DIAGRAMS =====
  
  static drawPlacenta(ctx, x, y, width, height, component, functionType) {
    ctx.save();
    ctx.translate(x, y);
    
    switch(component) {
      case 'complete':
        this.drawCompletePlacenta(ctx, width, height, functionType);
        break;
      case 'maternal-side':
        this.drawMaternalSide(ctx, width, height);
        break;
      case 'fetal-side':
        this.drawFetalSide(ctx, width, height);
        break;
      case 'umbilical-cord':
        this.drawUmbilicalCord(ctx, width, height);
        break;
      case 'chorionic-villi':
        this.drawChorionicVilli(ctx, width, height);
        break;
    }
    
    ctx.restore();
  }

  static drawCompletePlacenta(ctx, width, height, functionType) {
    const centerX = width / 2;
    
    // Maternal decidua basalis
    ctx.fillStyle = '#CD5C5C';
    ctx.fillRect(0, 0, width, height * 0.3);
    
    ctx.fillStyle = '#000000';
    ctx.font = 'bold 12px Arial';
    ctx.textAlign = 'left';
    ctx.fillText('Maternal Side', 10, 20);
    
    // Placental barrier zone
    ctx.fillStyle = '#FFE4E1';
    ctx.fillRect(0, height * 0.3, width, height * 0.4);
    
    // Chorionic villi
    for(let i = 0; i < 15; i++) {
      const x = (width / 16) * (i + 1);
      this.drawSimpleVillus(ctx, x, height * 0.3, height * 0.4);
    }
    
    // Intervillous space label
    ctx.fillStyle = '#8B0000';
    ctx.font = '11px Arial';
    ctx.fillText('Intervillous Space (Maternal Blood)', width / 3, height * 0.5);
    
    // Chorionic plate (fetal side)
    ctx.fillStyle = '#FFB6C1';
    ctx.fillRect(0, height * 0.7, width, height * 0.3);
    
    ctx.fillStyle = '#000000';
    ctx.font = 'bold 12px Arial';
    ctx.fillText('Fetal Side', 10, height * 0.75);
    
    // Umbilical cord
    this.drawSimpleUmbilicalCord(ctx, centerX, height * 0.7, 80, height * 0.3);
    
    // Blood vessels in chorionic plate
    ctx.strokeStyle = '#DC143C';
    ctx.lineWidth = 4;
    ctx.beginPath();
    ctx.moveTo(centerX, height * 0.7);
    ctx.lineTo(centerX - 60, height * 0.85);
    ctx.stroke();
    
    ctx.beginPath();
    ctx.moveTo(centerX, height * 0.7);
    ctx.lineTo(centerX + 60, height * 0.85);
    ctx.stroke();
    
    // Maternal blood flow arrows
    ctx.fillStyle = '#DC143C';
    for(let i = 0; i < 5; i++) {
      const x = (width / 6) * (i + 1);
      this.drawArrow(ctx, x, height * 0.15, x, height * 0.25, '#DC143C');
    }
    
    // Function indicators
    if(functionType !== 'structure') {
      this.drawPlacentalFunction(ctx, width, height, functionType);
    }
  }

  static drawSimpleVillus(ctx, x, y, height) {
    // Main trunk
    ctx.strokeStyle = '#FFB6C1';
    ctx.lineWidth = 6;
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineTo(x, y + height);
    ctx.stroke();
    
    // Branches
    ctx.lineWidth = 3;
    for(let i = 0; i < 3; i++) {
      const branchY = y + (height / 4) * (i + 1);
      ctx.beginPath();
      ctx.moveTo(x, branchY);
      ctx.lineTo(x - 15, branchY + 15);
      ctx.stroke();
      
      ctx.beginPath();
      ctx.moveTo(x, branchY);
      ctx.lineTo(x + 15, branchY + 15);
      ctx.stroke();
    }
    
    // Fetal capillaries (red)
    ctx.strokeStyle = '#DC143C';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(x, y + 10);
    ctx.lineTo(x, y + height - 10);
    ctx.stroke();
  }

  static drawMaternalSide(ctx, width, height) {
    const centerX = width / 2;
    const centerY = height / 2;
    
    // Decidua basalis
    ctx.fillStyle = '#CD5C5C';
    ctx.fillRect(0, 0, width, height * 0.4);
    
    // Texture
    ctx.strokeStyle = 'rgba(139, 0, 0, 0.3)';
    ctx.lineWidth = 1;
    for(let i = 0; i < 20; i++) {
      ctx.beginPath();
      ctx.moveTo(0, i * 15);
      ctx.lineTo(width, i * 15 + 10);
      ctx.stroke();
    }
    
    // Spiral arteries
    const arteryCount = 5;
    for(let i = 0; i < arteryCount; i++) {
      const x = (width / (arteryCount + 1)) * (i + 1);
      
      ctx.strokeStyle = '#DC143C';
      ctx.lineWidth = 8;
      ctx.beginPath();
      ctx.moveTo(x, 0);
      
      // Spiral pattern
      for(let y = 0; y < height * 0.4; y += 5) {
        const spiral = Math.sin(y / 10) * 10;
        ctx.lineTo(x + spiral, y);
      }
      ctx.stroke();
      
      // Arrowhead
      ctx.fillStyle = '#DC143C';
      ctx.beginPath();
      ctx.moveTo(x, height * 0.4);
      ctx.lineTo(x - 5, height * 0.4 - 10);
      ctx.lineTo(x + 5, height * 0.4 - 10);
      ctx.closePath();
      ctx.fill();
    }
    
    // Intervillous space
    ctx.fillStyle = '#8B0000';
    ctx.globalAlpha = 0.3;
    ctx.fillRect(0, height * 0.4, width, height * 0.4);
    ctx.globalAlpha = 1.0;
    
    // Maternal blood cells
    for(let i = 0; i < 30; i++) {
      const x = Math.random() * width;
      const y = height * 0.4 + Math.random() * height * 0.4;
      
      ctx.fillStyle = '#DC143C';
      ctx.beginPath();
      ctx.arc(x, y, 3, 0, Math.PI * 2);
      ctx.fill();
    }
    
    // Endometrial veins (drainage)
    for(let i = 0; i < 4; i++) {
      const x = (width / 5) * (i + 1);
      
      ctx.strokeStyle = '#8B0000';
      ctx.lineWidth = 10;
      ctx.beginPath();
      ctx.moveTo(x, height * 0.8);
      ctx.lineTo(x, height);
      ctx.stroke();
      
      // Arrow pointing up (blood leaving)
      ctx.fillStyle = '#8B0000';
      ctx.beginPath();
      ctx.moveTo(x, height);
      ctx.lineTo(x - 6, height - 12);
      ctx.lineTo(x + 6, height - 12);
      ctx.closePath();
      ctx.fill();
    }
    
    // Labels
    ctx.fillStyle = '#000000';
    ctx.font = 'bold 14px Arial';
    ctx.textAlign = 'center';
    ctx.fillText('Maternal Decidua Basalis', centerX, 30);
    
    ctx.font = '12px Arial';
    ctx.fillText('Spiral Arteries', centerX, height * 0.25);
    ctx.fillText('(Oxygenated Blood In)', centerX, height * 0.25 + 15);
    
    ctx.fillText('Intervillous Space', centerX, height * 0.6);
    
    ctx.fillText('Endometrial Veins', centerX, height * 0.95);
    ctx.fillText('(Deoxygenated Blood Out)', centerX, height * 0.95 + 15);
  }

  static drawFetalSide(ctx, width, height) {
    const centerX = width / 2;
    const centerY = height / 2;
    
    // Chorionic plate
    ctx.fillStyle = '#FFB6C1';
    ctx.fillRect(0, 0, width, height * 0.25);
    
    ctx.strokeStyle = '#8B4513';
    ctx.lineWidth = 2;
    ctx.strokeRect(0, 0, width, height * 0.25);
    
    // Amnion (inner membrane)
    ctx.fillStyle = 'rgba(173, 216, 230, 0.5)';
    ctx.fillRect(0, height * 0.05, width, height * 0.15);
    
    // Umbilical cord attachment
    const cordX = centerX;
    const cordY = height * 0.25;
    
    // Umbilical vessels branching
    const branches = [
      { angle: -60, length: 120, color: '#DC143C' }, // Artery
      { angle: -30, length: 140, color: '#DC143C' }, // Artery
      { angle: 0, length: 150, color: '#4169E1' },   // Vein (oxygenated - paradox)
      { angle: 30, length: 140, color: '#DC143C' },  // Artery
      { angle: 60, length: 120, color: '#DC143C' }   // Artery
    ];
    
    branches.forEach(branch => {
      const rad = branch.angle * Math.PI / 180;
      const endX = cordX + Math.cos(rad + Math.PI / 2) * branch.length;
      const endY = cordY + Math.sin(rad + Math.PI / 2) * branch.length;
      
      ctx.strokeStyle = branch.color;
      ctx.lineWidth = 6;
      ctx.beginPath();
      ctx.moveTo(cordX, cordY);
      ctx.quadraticCurveTo(
        cordX + Math.cos(rad + Math.PI / 2) * branch.length / 2,
        cordY + Math.sin(rad + Math.PI / 2) * branch.length / 2 - 20,
        endX,
        endY
      );
      ctx.stroke();
      
      // Secondary branches
      for(let i = 0; i < 3; i++) {
        const t = 0.3 + (i * 0.2);
        const bx = cordX + Math.cos(rad + Math.PI / 2) * branch.length * t;
        const by = cordY + Math.sin(rad + Math.PI / 2) * branch.length * t - 20 * t;
        
        ctx.lineWidth = 3;
        ctx.beginPath();
        ctx.moveTo(bx, by);
        ctx.lineTo(bx + Math.cos(rad) * 30, by + Math.sin(rad) * 30);
        ctx.stroke();
      }
    });
    
    // Chorionic villi (detailed)
    for(let i = 0; i < 12; i++) {
      const x = (width / 13) * (i + 1);
      const y = height * 0.3;
      
      // Villus tree
      this.drawDetailedVillus(ctx, x, y, height * 0.6);
    }
    
    // Labels
    ctx.fillStyle = '#000000';
    ctx.font = 'bold 14px Arial';
    ctx.textAlign = 'center';
    ctx.fillText('Chorionic Plate', centerX, 20);
    
    ctx.font = '11px Arial';
    ctx.fillText('Amnion', 50, height * 0.12);
    
    ctx.fillText('Chorionic Villi', centerX, height * 0.95);
    ctx.fillText('(Fetal Capillaries)', centerX, height * 0.95 + 14);
    
    // Legend for vessels
    ctx.fillStyle = '#DC143C';
    ctx.fillRect(20, height - 60, 20, 10);
    ctx.fillStyle = '#000000';
    ctx.font = '10px Arial';
    ctx.textAlign = 'left';
    ctx.fillText('Umbilical Arteries (deoxygenated)', 45, height - 52);
    
    ctx.fillStyle = '#4169E1';
    ctx.fillRect(20, height - 40, 20, 10);
    ctx.fillStyle = '#000000';
    ctx.fillText('Umbilical Vein (oxygenated)', 45, height - 32);
  }

  static drawDetailedVillus(ctx, x, y, height) {
    // Main villus trunk
    ctx.strokeStyle = '#FFB6C1';
    ctx.lineWidth = 8;
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineTo(x, y + height);
    ctx.stroke();
    
    // Syncytiotrophoblast (outer layer)
    ctx.strokeStyle = '#FF69B4';
    ctx.lineWidth = 10;
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineTo(x, y + height);
    ctx.stroke();
    
    // Fetal capillary (inside)
    ctx.strokeStyle = '#DC143C';
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.moveTo(x, y + 10);
    ctx.lineTo(x, y + height - 10);
    ctx.stroke();
    
    // Terminal villi branches
    const branchLevels = 4;
    for(let level = 1; level <= branchLevels; level++) {
      const branchY = y + (height / (branchLevels + 1)) * level;
      const branchLength = 20 - (level * 3);
      
      // Left branch
      ctx.strokeStyle = '#FFB6C1';
      ctx.lineWidth = 6 - level;
      ctx.beginPath();
      ctx.moveTo(x, branchY);
      ctx.lineTo(x - branchLength, branchY + branchLength);
      ctx.stroke();
      
      // Capillary in branch
      ctx.strokeStyle = '#DC143C';
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(x, branchY);
      ctx.lineTo(x - branchLength, branchY + branchLength);
      ctx.stroke();
      
      // Right branch
      ctx.strokeStyle = '#FFB6C1';
      ctx.lineWidth = 6 - level;
      ctx.beginPath();
      ctx.moveTo(x, branchY);
      ctx.lineTo(x + branchLength, branchY + branchLength);
      ctx.stroke();
      
      // Capillary in branch
      ctx.strokeStyle = '#DC143C';
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(x, branchY);
      ctx.lineTo(x + branchLength, branchY + branchLength);
      ctx.stroke();
    }
  }

  static drawUmbilicalCord(ctx, width, height) {
    const centerX = width / 2;
    const cordLength = height * 0.8;
    const cordWidth = 80;
    
    // Wharton's jelly (cord substance)
    const gradient = ctx.createLinearGradient(centerX - cordWidth/2, 0, centerX + cordWidth/2, 0);
    gradient.addColorStop(0, '#E0E0E0');
    gradient.addColorStop(0.5, '#F5F5F5');
    gradient.addColorStop(1, '#E0E0E0');
    
    ctx.fillStyle = gradient;
    ctx.strokeStyle = '#A9A9A9';
    ctx.lineWidth = 3;
    
    // Draw twisted cord
    ctx.beginPath();
    ctx.moveTo(centerX - cordWidth/2, 0);
    
    for(let y = 0; y < cordLength; y += 10) {
      const twist = Math.sin(y / 30) * 15;
      ctx.lineTo(centerX - cordWidth/2 + twist, y);
    }
    
    for(let y = cordLength; y >= 0; y -= 10) {
      const twist = Math.sin(y / 30) * 15;
      ctx.lineTo(centerX + cordWidth/2 + twist, y);
    }
    
    ctx.closePath();
    ctx.fill();
    ctx.stroke();
    
    // Two umbilical arteries (helical pattern)
    for(let arteryNum = 0; arteryNum < 2; arteryNum++) {
      const offset = arteryNum === 0 ? -15 : 15;
      
      ctx.strokeStyle = '#DC143C';
      ctx.lineWidth = 12;
      ctx.beginPath();
      
      for(let y = 0; y < cordLength; y += 5) {
        const helixX = centerX + offset + Math.cos(y / 40 + arteryNum * Math.PI) * 20;
        const helixY = y;
        
        if(y === 0) {
          ctx.moveTo(helixX, helixY);
        } else {
          ctx.lineTo(helixX, helixY);
        }
      }
      ctx.stroke();
      
      // Lumen (hollow center)
      ctx.strokeStyle = '#8B0000';
      ctx.lineWidth = 4;
      ctx.stroke();
    }
    
    // One umbilical vein (straight in center, larger)
    ctx.strokeStyle = '#4169E1';
    ctx.lineWidth = 16;
    ctx.beginPath();
    ctx.moveTo(centerX, 0);
    
    for(let y = 0; y < cordLength; y += 5) {
      const waveX = centerX + Math.sin(y / 50) * 8;
      ctx.lineTo(waveX, y);
    }
    ctx.stroke();
    
    // Vein lumen
    ctx.strokeStyle = '#000080';
    ctx.lineWidth = 6;
    ctx.stroke();
    
    // Cross-section view (inset)
    const insetX = width - 100;
    const insetY = 100;
    const insetRadius = 60;
    
    // Cross-section background
    ctx.fillStyle = '#F5F5F5';
    ctx.strokeStyle = '#A9A9A9';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.arc(insetX, insetY, insetRadius, 0, Math.PI * 2);
    ctx.fill();
    ctx.stroke();
    
    // Umbilical vein (larger, at top)
    ctx.fillStyle = '#4169E1';
    ctx.strokeStyle = '#000080';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.arc(insetX, insetY - 15, 18, 0, Math.PI * 2);
    ctx.fill();
    ctx.stroke();
    
    // Two umbilical arteries (smaller, at bottom)
    ctx.fillStyle = '#DC143C';
    ctx.strokeStyle = '#8B0000';
    ctx.beginPath();
    ctx.arc(insetX - 20, insetY + 15, 12, 0, Math.PI * 2);
    ctx.fill();
    ctx.stroke();
    
    ctx.beginPath();
    ctx.arc(insetX + 20, insetY + 15, 12, 0, Math.PI * 2);
    ctx.fill();
    ctx.stroke();
    
    // Labels
    ctx.fillStyle = '#000000';
    ctx.font = 'bold 14px Arial';
    ctx.textAlign = 'center';
    ctx.fillText('Umbilical Cord', centerX, 30);
    
    ctx.font = '11px Arial';
    ctx.fillText('Cross-Section', insetX, insetY + insetRadius + 20);
    
    ctx.font = '10px Arial';
    ctx.textAlign = 'left';
    
    ctx.fillStyle = '#4169E1';
    ctx.fillRect(20, height - 80, 15, 15);
    ctx.fillStyle = '#000000';
    ctx.fillText('Umbilical Vein (1)', 40, height - 68);
    ctx.fillText('(Oxygenated blood to fetus)', 40, height - 56);
    
    ctx.fillStyle = '#DC143C';
    ctx.fillRect(20, height - 40, 15, 15);
    ctx.fillStyle = '#000000';
    ctx.fillText('Umbilical Arteries (2)', 40, height - 28);
    ctx.fillText('(Deoxygenated blood to placenta)', 40, height - 16);
  }

  static drawChorionicVilli(ctx, width, height) {
    const centerX = width / 2;
    
    // Detailed view of villus structure
    const villusX = centerX;
    const villusY = height * 0.1;
    const villusHeight = height * 0.7;
    
    // Main villus stem
    ctx.fillStyle = '#FFE4E1';
    ctx.strokeStyle = '#8B4513';
    ctx.lineWidth = 2;
    
    // Draw main trunk as elongated shape
    ctx.beginPath();
    ctx.moveTo(villusX - 30, villusY);
    ctx.lineTo(villusX - 35, villusY + villusHeight);
    ctx.lineTo(villusX + 35, villusY + villusHeight);
    ctx.lineTo(villusX + 30, villusY);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();
    
    // Layers (from outside to inside)
    
    // 1. Syncytiotrophoblast (outer layer)
    ctx.fillStyle = 'rgba(255, 105, 180, 0.6)';
    ctx.fillRect(villusX - 40, villusY + 50, 10, villusHeight - 100);
    ctx.fillRect(villusX + 30, villusY + 50, 10, villusHeight - 100);
    
    // Microvilli
    for(let i = 0; i < 20; i++) {
      const y = villusY + 50 + (i * ((villusHeight - 100) / 20));
      ctx.strokeStyle = '#FF1493';
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(villusX - 40, y);
      ctx.lineTo(villusX - 48, y);
      ctx.stroke();
      
      ctx.beginPath();
      ctx.moveTo(villusX + 40, y);
      ctx.lineTo(villusX + 48, y);
      ctx.stroke();
    }
    
    // 2. Cytotrophoblast (Langerhans cells)
    ctx.fillStyle = '#FFB6C1';
    for(let i = 0; i < 8; i++) {
      const y = villusY + 70 + (i * 60);
      ctx.beginPath();
      ctx.arc(villusX - 28, y, 8, 0, Math.PI * 2);
      ctx.fill();
      ctx.stroke();
      
      ctx.beginPath();
      ctx.arc(villusX + 28, y, 8, 0, Math.PI * 2);
      ctx.fill();
      ctx.stroke();
    }
    
    // 3. Basement membrane
    ctx.strokeStyle = '#DAA520';
    ctx.lineWidth = 2;
    ctx.setLineDash([4, 2]);
    ctx.beginPath();
    ctx.moveTo(villusX - 20, villusY + 50);
    ctx.lineTo(villusX - 20, villusY + villusHeight - 50);
    ctx.stroke();
    
    ctx.beginPath();
    ctx.moveTo(villusX + 20, villusY + 50);
    ctx.lineTo(villusX + 20, villusY + villusHeight - 50);
    ctx.stroke();
    ctx.setLineDash([]);
    
    // 4. Connective tissue (mesenchyme)
    ctx.fillStyle = 'rgba(245, 222, 179, 0.5)';
    ctx.fillRect(villusX - 18, villusY + 50, 36, villusHeight - 100);
    
    // 5. Fetal capillaries
    ctx.strokeStyle = '#DC143C';
    ctx.lineWidth = 8;
    ctx.beginPath();
    ctx.moveTo(villusX - 8, villusY + 60);
    
    for(let y = villusY + 60; y < villusY + villusHeight - 60; y += 5) {
      const wave = Math.sin((y - villusY) / 30) * 5;
      ctx.lineTo(villusX - 8 + wave, y);
    }
    ctx.stroke();
    
    ctx.beginPath();
    ctx.moveTo(villusX + 8, villusY + 60);
    for(let y = villusY + 60; y < villusY + villusHeight - 60; y += 5) {
      const wave = Math.sin((y - villusY) / 30 + Math.PI) * 5;
      ctx.lineTo(villusX + 8 + wave, y);
    }
    ctx.stroke();
    
    // Red blood cells in capillaries
    ctx.fillStyle = '#8B0000';
    for(let i = 0; i < 15; i++) {
      const y = villusY + 70 + (i * 30);
      ctx.beginPath();
      ctx.arc(villusX - 8, y, 3, 0, Math.PI * 2);
      ctx.fill();
      
      ctx.beginPath();
      ctx.arc(villusX + 8, y, 3, 0, Math.PI * 2);
      ctx.fill();
    }
    
    // Maternal blood space (surrounding)
    ctx.fillStyle = 'rgba(139, 0, 0, 0.2)';
    ctx.fillRect(0, villusY, villusX - 60, villusHeight);
    ctx.fillRect(villusX + 60, villusY, width - villusX - 60, villusHeight);
    
    // Maternal blood cells
    for(let i = 0; i < 40; i++) {
      const side = i % 2 === 0 ? -1 : 1;
      const x = side < 0 ? 
        Math.random() * (villusX - 80) : 
        villusX + 60 + Math.random() * (width - villusX - 80);
      const y = villusY + Math.random() * villusHeight;
      
      ctx.fillStyle = '#DC143C';
      ctx.beginPath();
      ctx.arc(x, y, 4, 0, Math.PI * 2);
      ctx.fill();
    }
    
    // Labels with leader lines
    const labels = [
      { text: 'Syncytiotrophoblast', x: 60, y: villusY + 100, lineToX: villusX - 45, lineToY: villusY + 100 },
      { text: '(Microvilli)', x: 60, y: villusY + 115, lineToX: villusX - 50, lineToY: villusY + 115 },
      { text: 'Cytotrophoblast', x: 60, y: villusY + 200, lineToX: villusX - 28, lineToY: villusY + 200 },
      { text: 'Fetal Capillaries', x: width - 150, y: villusY + 250, lineToX: villusX + 15, lineToY: villusY + 250 },
      { text: 'Connective Tissue', x: width - 150, y: villusY + 350, lineToX: villusX, lineToY: villusY + 350 },
      { text: 'Maternal Blood', x: 60, y: villusY + 450, lineToX: 80, lineToY: villusY + 400 }
    ];
    
    ctx.font = '11px Arial';
    ctx.strokeStyle = '#666666';
    ctx.lineWidth = 1;
    
    labels.forEach(label => {
      // Leader line
      ctx.beginPath();
      ctx.moveTo(label.x, label.y);
      ctx.lineTo(label.lineToX, label.lineToY);
      ctx.stroke();
      
      // Text
      ctx.fillStyle = '#000000';
      ctx.textAlign = label.x < centerX ? 'left' : 'right';
      ctx.fillText(label.text, label.x, label.y - 5);
    });
    
    // Title
    ctx.fillStyle = '#000000';
    ctx.font = 'bold 16px Arial';
    ctx.textAlign = 'center';
    ctx.fillText('Chorionic Villus Structure', centerX, 30);
    
    // Exchange arrows
    ctx.strokeStyle = '#4169E1';
    ctx.fillStyle = '#4169E1';
    ctx.lineWidth = 2;
    
    // O2 and nutrients to fetus
    this.drawArrow(ctx, villusX - 60, villusY + 150, villusX - 25, villusY + 150, '#4169E1');
    ctx.font = 'bold 10px Arial';
    ctx.textAlign = 'center';
    ctx.fillText('O₂, Nutrients', villusX - 42, villusY + 145);
    
    // CO2 and waste to maternal blood
    this.drawArrow(ctx, villusX + 25, villusY + 300, villusX + 60, villusY + 300, '#DC143C');
    ctx.fillStyle = '#DC143C';
    ctx.fillText('CO₂, Waste', villusX + 42, villusY + 295);
  }

  static drawSimpleUmbilicalCord(ctx, x, y, width, height) {
    // Simplified cord for the complete placenta view
    ctx.fillStyle = '#E0E0E0';
    ctx.strokeStyle = '#A9A9A9';
    ctx.lineWidth = 2;
    
    ctx.fillRect(x - width/2, y, width, height);
    ctx.strokeRect(x - width/2, y, width, height);
    
    // Vessels inside
    ctx.fillStyle = '#DC143C';
    ctx.fillRect(x - 15, y, 8, height);
    ctx.fillRect(x + 7, y, 8, height);
    
    ctx.fillStyle = '#4169E1';
    ctx.fillRect(x - 4, y, 8, height);
  }

  static drawPlacentalFunction(ctx, width, height, functionType) {
    // Draw function-specific indicators
    const centerY = height * 0.5;
    
    if(functionType === 'gas-exchange') {
      // O2 molecules going to fetus
      ctx.fillStyle = '#4169E1';
      ctx.font = 'bold 12px Arial';
      for(let i = 0; i < 5; i++) {
        const x = (width / 6) * (i + 1);
        ctx.fillText('O₂', x, centerY - 20);
        this.drawArrow(ctx, x, centerY - 10, x, centerY + 30, '#4169E1');
      }
      
      // CO2 molecules leaving fetus
      ctx.fillStyle = '#DC143C';
      for(let i = 0; i < 5; i++) {
        const x = (width / 6) * (i + 1) + width / 12;
        ctx.fillText('CO₂', x, centerY + 60);
        this.drawArrow(ctx, x, centerY + 30, x, centerY - 10, '#DC143C');
      }
    } else if(functionType === 'nutrient-transfer') {
      // Glucose, amino acids, etc.
      const nutrients = ['Glucose', 'Amino Acids', 'Vitamins', 'Minerals'];
      nutrients.forEach((nutrient, i) => {
        const x = (width / 5) * (i + 1);
        ctx.fillStyle = '#228B22';
        ctx.font = '10px Arial';
        ctx.textAlign = 'center';
        ctx.fillText(nutrient, x, centerY);
        this.drawArrow(ctx, x, centerY + 10, x, centerY + 50, '#228B22');
      });
    } else if(functionType === 'hormone-production') {
      // Placental hormones
      const hormones = ['hCG', 'Progesterone', 'Estrogen', 'hPL'];
      hormones.forEach((hormone, i) => {
        const x = (width / 5) * (i + 1);
        ctx.fillStyle = '#9370DB';
        ctx.font = 'bold 11px Arial';
        ctx.textAlign = 'center';
        ctx.fillText(hormone, x, centerY);
        
        // Radiating arrows showing hormone secretion
        for(let j = 0; j < 3; j++) {
          const angle = (j - 1) * 30;
          const rad = angle * Math.PI / 180;
          const endX = x + Math.cos(rad + Math.PI / 2) * 40;
          const endY = centerY + Math.sin(rad + Math.PI / 2) * 40;
          this.drawArrow(ctx, x, centerY + 10, endX, endY, '#9370DB');
        }
      });
    }
  }

  // ===== UTILITY FUNCTIONS =====
  
  static drawArrow(ctx, x1, y1, x2, y2, color = '#666666') {
    ctx.strokeStyle = color;
    ctx.fillStyle = color;
    ctx.lineWidth = 2;
    
    // Line
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.stroke();
    
    // Arrowhead
    const angle = Math.atan2(y2 - y1, x2 - x1);
    const headLength = 10;
    
    ctx.beginPath();
    ctx.moveTo(x2, y2);
    ctx.lineTo(
      x2 - headLength * Math.cos(angle - Math.PI / 6),
      y2 - headLength * Math.sin(angle - Math.PI / 6)
    );
    ctx.lineTo(
      x2 - headLength * Math.cos(angle + Math.PI / 6),
      y2 - headLength * Math.sin(angle + Math.PI / 6)
    );
    ctx.closePath();
    ctx.fill();
  }

  static lightenColor(color, percent) {
    // Convert hex to RGB
    const num = parseInt(color.replace('#', ''), 16);
    const r = Math.min(255, ((num >> 16) & 255) + percent);
    const g = Math.min(255, ((num >> 8) & 255) + percent);
    const b = Math.min(255, (num & 255) + percent);
    
    return `rgb(${r}, ${g}, ${b})`;
  }

  static darkenColor(color, percent) {
    const num = parseInt(color.replace('#', ''), 16);
    const r = Math.max(0, ((num >> 16) & 255) - percent);
    const g = Math.max(0, ((num >> 8) & 255) - percent);
    const b = Math.max(0, (num & 255) - percent);
    
    return `rgb(${r}, ${g}, ${b})`;
  }
}


