import { createCanvas } from '@napi-rs/canvas'; import
ExcelJS from 'exceljs'; import fs from 'fs'; import os
from 'os'; import path from 'path'; import readline from
'readline'; import * as math from 'mathjs'; import
GIFEncoder from 'gifencoder'; import { PassThrough }
from 'stream';


class AnatomicalShapes {


  
  // ===== BACTERIA STRUCTURE =====
  
  static drawBacteriaStructure(ctx, x, y, width, height, type, structure) {
    ctx.save();
    ctx.translate(x, y);
    
    const colors = {
      'gram-positive': { wall: '#9B59B6', membrane: '#E74C3C', cytoplasm: '#F9E79F' },
      'gram-negative': { wall: '#E91E63', membrane: '#E74C3C', cytoplasm: '#F9E79F', outer: '#C2185B' },
      'archaea': { wall: '#3498DB', membrane: '#2980B9', cytoplasm: '#AED6F1' }
    };
    
    const color = colors[type] || colors['gram-positive'];
    
    switch(structure) {
      case 'complete':
        this.drawCompleteBacteriaStructure(ctx, color, width, height, type);
        break;
      case 'cell-wall':
        this.drawCellWall(ctx, color, width, height, type);
        break;
      case 'membrane':
        this.drawMembrane(ctx, color, width, height);
        break;
      case 'nucleoid':
        this.drawNucleoid(ctx, color, width, height);
        break;
      case 'plasmids':
        this.drawPlasmids(ctx, color, width, height);
        break;
      case 'flagella':
        this.drawFlagella(ctx, color, width, height);
        break;
      case 'pili':
        this.drawPili(ctx, color, width, height);
        break;
    }
    
    ctx.restore();
  }
  
  static drawCompleteBacteriaStructure(ctx, color, w, h, type) {
    // Cell body (rod-shaped bacterium)
    const gradient = ctx.createRadialGradient(w * 0.5, h * 0.5, 0, w * 0.5, h * 0.5, w * 0.4);
    gradient.addColorStop(0, color.cytoplasm);
    gradient.addColorStop(1, this.darken(color.cytoplasm, 0.8));
    
    ctx.fillStyle = gradient;
    ctx.beginPath();
    ctx.ellipse(w * 0.5, h * 0.5, w * 0.35, h * 0.15, 0, 0, Math.PI * 2);
    ctx.fill();
    
    // Outer membrane (for gram-negative)
    if (type === 'gram-negative' && color.outer) {
      ctx.strokeStyle = color.outer;
      ctx.lineWidth = 6;
      ctx.beginPath();
      ctx.ellipse(w * 0.5, h * 0.5, w * 0.37, h * 0.17, 0, 0, Math.PI * 2);
      ctx.stroke();
    }
    
    // Peptidoglycan layer (cell wall)
    ctx.strokeStyle = color.wall;
    ctx.lineWidth = type === 'gram-positive' ? 8 : 3;
    ctx.beginPath();
    ctx.ellipse(w * 0.5, h * 0.5, w * 0.36, h * 0.16, 0, 0, Math.PI * 2);
    ctx.stroke();
    
    // Cell membrane
    ctx.strokeStyle = color.membrane;
    ctx.lineWidth = 2;
    ctx.setLineDash([5, 3]);
    ctx.beginPath();
    ctx.ellipse(w * 0.5, h * 0.5, w * 0.34, h * 0.14, 0, 0, Math.PI * 2);
    ctx.stroke();
    ctx.setLineDash([]);
    
    // Nucleoid (DNA region)
    ctx.fillStyle = '#5DADE2';
    ctx.globalAlpha = 0.6;
    ctx.beginPath();
    ctx.ellipse(w * 0.5, h * 0.5, w * 0.15, h * 0.08, 0, 0, Math.PI * 2);
    ctx.fill();
    ctx.globalAlpha = 1;
    
    // Plasmids
    for (let i = 0; i < 3; i++) {
      const angle = (i * Math.PI * 2) / 3;
      const px = w * 0.5 + Math.cos(angle) * w * 0.2;
      const py = h * 0.5 + Math.sin(angle) * h * 0.08;
      
      ctx.strokeStyle = '#27AE60';
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.arc(px, py, w * 0.03, 0, Math.PI * 2);
      ctx.stroke();
    }
    
    // Ribosomes (small dots)
    ctx.fillStyle = '#34495E';
    for (let i = 0; i < 20; i++) {
      const rx = w * 0.3 + Math.random() * w * 0.4;
      const ry = h * 0.4 + Math.random() * h * 0.2;
      ctx.beginPath();
      ctx.arc(rx, ry, 1, 0, Math.PI * 2);
      ctx.fill();
    }
    
    // Flagella
    this.drawFlagellaOnCell(ctx, w, h, w * 0.15, h * 0.5, 'right');
    this.drawFlagellaOnCell(ctx, w, h, w * 0.85, h * 0.5, 'left');
    
    // Pili (hair-like structures)
    for (let i = 0; i < 8; i++) {
      const angle = (i * Math.PI) / 4;
      const startX = w * 0.5 + Math.cos(angle) * w * 0.35;
      const startY = h * 0.5 + Math.sin(angle) * h * 0.15;
      const endX = startX + Math.cos(angle) * w * 0.08;
      const endY = startY + Math.sin(angle) * h * 0.05;
      
      ctx.strokeStyle = '#95A5A6';
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.moveTo(startX, startY);
      ctx.lineTo(endX, endY);
      ctx.stroke();
    }
  }
  
  static drawCellWall(ctx, color, w, h, type) {
    // Focus on cell wall structure
    ctx.fillStyle = '#F8F9FA';
    ctx.fillRect(0, 0, w, h);
    
    if (type === 'gram-positive') {
      // Thick peptidoglycan layer
      ctx.fillStyle = color.wall;
      ctx.fillRect(w * 0.2, h * 0.3, w * 0.6, h * 0.15);
      
      // Multiple layers
      for (let i = 0; i < 5; i++) {
        ctx.strokeStyle = this.darken(color.wall, 0.9 - i * 0.1);
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(w * 0.2, h * 0.3 + i * h * 0.03);
        ctx.lineTo(w * 0.8, h * 0.3 + i * h * 0.03);
        ctx.stroke();
      }
      
      // Teichoic acids
      ctx.strokeStyle = '#E67E22';
      ctx.lineWidth = 3;
      for (let i = 0; i < 6; i++) {
        ctx.beginPath();
        ctx.moveTo(w * 0.25 + i * w * 0.1, h * 0.3);
        ctx.lineTo(w * 0.25 + i * w * 0.1, h * 0.2);
        ctx.stroke();
      }
    } else if (type === 'gram-negative') {
      // Outer membrane
      ctx.fillStyle = color.outer;
      ctx.fillRect(w * 0.2, h * 0.25, w * 0.6, h * 0.08);
      
      // Thin peptidoglycan
      ctx.fillStyle = color.wall;
      ctx.fillRect(w * 0.2, h * 0.38, w * 0.6, h * 0.03);
      
      // Periplasmic space
      ctx.fillStyle = '#ECF0F1';
      ctx.fillRect(w * 0.2, h * 0.33, w * 0.6, h * 0.05);
      
      // LPS molecules
      ctx.fillStyle = '#C0392B';
      for (let i = 0; i < 10; i++) {
        ctx.beginPath();
        ctx.arc(w * 0.22 + i * w * 0.06, h * 0.25, w * 0.015, 0, Math.PI * 2);
        ctx.fill();
      }
    }
    
    // Cell membrane
    ctx.fillStyle = color.membrane;
    ctx.fillRect(w * 0.2, h * 0.5, w * 0.6, h * 0.05);
    
    // Phospholipid bilayer detail
    ctx.fillStyle = '#E74C3C';
    for (let i = 0; i < 15; i++) {
      ctx.beginPath();
      ctx.arc(w * 0.2 + i * w * 0.04, h * 0.5, w * 0.01, 0, Math.PI * 2);
      ctx.fill();
      ctx.beginPath();
      ctx.arc(w * 0.2 + i * w * 0.04, h * 0.55, w * 0.01, 0, Math.PI * 2);
      ctx.fill();
    }
  }
  
  static drawMembrane(ctx, color, w, h) {
    // Phospholipid bilayer close-up
    ctx.fillStyle = '#F8F9FA';
    ctx.fillRect(0, 0, w, h);
    
    // Draw phospholipid bilayer
    const lipidCount = 12;
    const lipidWidth = w / lipidCount;
    
    for (let i = 0; i < lipidCount; i++) {
      const x = i * lipidWidth + lipidWidth / 2;
      
      // Top layer (heads up)
      ctx.fillStyle = '#E74C3C';
      ctx.beginPath();
      ctx.arc(x, h * 0.35, lipidWidth * 0.3, 0, Math.PI * 2);
      ctx.fill();
      
      // Tails
      ctx.strokeStyle = '#F39C12';
      ctx.lineWidth = 3;
      ctx.beginPath();
      ctx.moveTo(x - lipidWidth * 0.15, h * 0.35);
      ctx.lineTo(x - lipidWidth * 0.15, h * 0.5);
      ctx.stroke();
      
      ctx.beginPath();
      ctx.moveTo(x + lipidWidth * 0.15, h * 0.35);
      ctx.lineTo(x + lipidWidth * 0.15, h * 0.5);
      ctx.stroke();
      
      // Bottom layer (heads down)
      ctx.fillStyle = '#E74C3C';
      ctx.beginPath();
      ctx.arc(x, h * 0.65, lipidWidth * 0.3, 0, Math.PI * 2);
      ctx.fill();
      
      // Tails
      ctx.strokeStyle = '#F39C12';
      ctx.beginPath();
      ctx.moveTo(x - lipidWidth * 0.15, h * 0.65);
      ctx.lineTo(x - lipidWidth * 0.15, h * 0.5);
      ctx.stroke();
      
      ctx.beginPath();
      ctx.moveTo(x + lipidWidth * 0.15, h * 0.65);
      ctx.lineTo(x + lipidWidth * 0.15, h * 0.5);
      ctx.stroke();
    }
    
    // Membrane proteins
    // Integral protein (channel)
    ctx.fillStyle = '#9B59B6';
    ctx.fillRect(w * 0.3, h * 0.35, w * 0.08, h * 0.3);
    
    // Peripheral protein
    ctx.fillStyle = '#3498DB';
    ctx.beginPath();
    ctx.ellipse(w * 0.65, h * 0.35, w * 0.06, h * 0.05, 0, 0, Math.PI * 2);
    ctx.fill();
    
    // Glycoproteins (carbohydrate chains)
    ctx.strokeStyle = '#27AE60';
    ctx.lineWidth = 3;
    for (let i = 0; i < 3; i++) {
      const x = w * 0.5 + i * w * 0.1;
      ctx.beginPath();
      ctx.moveTo(x, h * 0.35);
      ctx.quadraticCurveTo(x + w * 0.02, h * 0.25, x, h * 0.15);
      ctx.stroke();
    }
  }
  
  static drawNucleoid(ctx, color, w, h) {
    // Bacterial chromosome (nucleoid region)
    ctx.fillStyle = '#ECF0F1';
    ctx.fillRect(0, 0, w, h);
    
    // Cell outline
    ctx.strokeStyle = '#95A5A6';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.ellipse(w * 0.5, h * 0.5, w * 0.4, h * 0.35, 0, 0, Math.PI * 2);
    ctx.stroke();
    
    // Nucleoid region (irregular shape)
    ctx.fillStyle = 'rgba(93, 173, 226, 0.3)';
    ctx.beginPath();
    ctx.moveTo(w * 0.35, h * 0.4);
    ctx.bezierCurveTo(w * 0.3, h * 0.3, w * 0.4, h * 0.25, w * 0.5, h * 0.3);
    ctx.bezierCurveTo(w * 0.6, h * 0.25, w * 0.7, h * 0.3, w * 0.65, h * 0.4);
    ctx.bezierCurveTo(w * 0.7, h * 0.5, w * 0.65, h * 0.6, w * 0.55, h * 0.65);
    ctx.bezierCurveTo(w * 0.45, h * 0.7, w * 0.35, h * 0.65, w * 0.3, h * 0.55);
    ctx.bezierCurveTo(w * 0.25, h * 0.5, w * 0.3, h * 0.45, w * 0.35, h * 0.4);
    ctx.fill();
    
    // DNA strands (circular chromosome)
    ctx.strokeStyle = '#2980B9';
    ctx.lineWidth = 4;
    for (let loop = 0; loop < 3; loop++) {
      ctx.beginPath();
      for (let i = 0; i <= 100; i++) {
        const angle = (i / 100) * Math.PI * 2;
        const radius = w * (0.15 + loop * 0.05);
        const x = w * 0.5 + Math.cos(angle) * radius + Math.sin(i * 0.5) * w * 0.02;
        const y = h * 0.5 + Math.sin(angle) * radius * 0.7 + Math.cos(i * 0.5) * h * 0.02;
        
        if (i === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }
      ctx.closePath();
      ctx.stroke();
    }
    
    // Associated proteins
    ctx.fillStyle = '#E67E22';
    for (let i = 0; i < 15; i++) {
      const angle = Math.random() * Math.PI * 2;
      const radius = w * (0.15 + Math.random() * 0.15);
      const x = w * 0.5 + Math.cos(angle) * radius;
      const y = h * 0.5 + Math.sin(angle) * radius * 0.7;
      
      ctx.beginPath();
      ctx.arc(x, y, w * 0.015, 0, Math.PI * 2);
      ctx.fill();
    }
  }
  
  static drawPlasmids(ctx, color, w, h) {
    // Multiple plasmids
    ctx.fillStyle = '#ECF0F1';
    ctx.fillRect(0, 0, w, h);
    
    const plasmidPositions = [
      [0.25, 0.3, 0.08],
      [0.6, 0.35, 0.1],
      [0.4, 0.65, 0.07],
      [0.7, 0.7, 0.06]
    ];
    
    plasmidPositions.forEach(([px, py, size], index) => {
      // Plasmid circle
      ctx.strokeStyle = '#27AE60';
      ctx.lineWidth = 3;
      ctx.beginPath();
      ctx.arc(w * px, h * py, w * size, 0, Math.PI * 2);
      ctx.stroke();
      
      // Double helix representation
      ctx.strokeStyle = '#229954';
      ctx.lineWidth = 2;
      ctx.beginPath();
      for (let i = 0; i <= 50; i++) {
        const angle = (i / 50) * Math.PI * 2;
        const x = w * px + Math.cos(angle) * w * size * 0.9;
        const y = h * py + Math.sin(angle) * w * size * 0.9;
        
        if (i === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }
      ctx.stroke();
      
      // Genes (colored segments)
      const geneColors = ['#E74C3C', '#3498DB', '#F39C12', '#9B59B6'];
      for (let g = 0; g < 3; g++) {
        const startAngle = (g * Math.PI * 2) / 3;
        const endAngle = startAngle + Math.PI / 3;
        
        ctx.strokeStyle = geneColors[g % geneColors.length];
        ctx.lineWidth = 5;
        ctx.beginPath();
        ctx.arc(w * px, h * py, w * size, startAngle, endAngle);
        ctx.stroke();
      }
      
      // Origin of replication marker
      ctx.fillStyle = '#E74C3C';
      ctx.beginPath();
      ctx.arc(w * px + w * size, h * py, w * 0.015, 0, Math.PI * 2);
      ctx.fill();
    });
    
    // Label
    ctx.fillStyle = '#2C3E50';
    ctx.font = `${w * 0.04}px Arial`;
    ctx.fillText('Plasmids (Extrachromosomal DNA)', w * 0.1, h * 0.1);
  }
  
  static drawFlagella(ctx, color, w, h) {
    // Detailed flagellum structure
    ctx.fillStyle = '#F8F9FA';
    ctx.fillRect(0, 0, w, h);
    
    // Cell body (partial)
    ctx.fillStyle = '#E8DAEF';
    ctx.beginPath();
    ctx.ellipse(w * 0.15, h * 0.5, w * 0.12, h * 0.25, 0, -Math.PI / 2, Math.PI / 2);
    ctx.fill();
    
    ctx.strokeStyle = '#8E44AD';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.ellipse(w * 0.15, h * 0.5, w * 0.12, h * 0.25, 0, -Math.PI / 2, Math.PI / 2);
    ctx.stroke();
    
    // Flagellar structure components
    
    // Basal body (in cell membrane)
    ctx.fillStyle = '#34495E';
    ctx.fillRect(w * 0.15, h * 0.48, w * 0.05, h * 0.04);
    
    // Hook
    ctx.strokeStyle = '#E67E22';
    ctx.lineWidth = 4;
    ctx.beginPath();
    ctx.arc(w * 0.23, h * 0.5, w * 0.03, -Math.PI / 2, Math.PI / 2);
    ctx.stroke();
    
    // Filament (wavy)
    ctx.strokeStyle = '#95A5A6';
    ctx.lineWidth = 5;
    ctx.beginPath();
    ctx.moveTo(w * 0.26, h * 0.5);
    
    for (let i = 0; i <= 100; i++) {
      const x = w * 0.26 + (i / 100) * w * 0.6;
      const wave = Math.sin(i * 0.3) * h * 0.08;
      const y = h * 0.5 + wave;
      ctx.lineTo(x, y);
    }
    ctx.stroke();
    
    // Detailed basal body structure (inset)
    const insetX = w * 0.1;
    const insetY = h * 0.7;
    const insetW = w * 0.3;
    const insetH = h * 0.25;
    
    ctx.fillStyle = 'white';
    ctx.strokeStyle = '#2C3E50';
    ctx.lineWidth = 2;
    ctx.fillRect(insetX, insetY, insetW, insetH);
    ctx.strokeRect(insetX, insetY, insetW, insetH);
    
    // L ring
    ctx.strokeStyle = '#E74C3C';
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.arc(insetX + insetW * 0.3, insetY + insetH * 0.3, insetW * 0.08, 0, Math.PI * 2);
    ctx.stroke();
    
    // P ring
    ctx.strokeStyle = '#3498DB';
    ctx.beginPath();
    ctx.arc(insetX + insetW * 0.3, insetY + insetH * 0.5, insetW * 0.08, 0, Math.PI * 2);
    ctx.stroke();
    
    // MS ring and C ring
    ctx.strokeStyle = '#27AE60';
    ctx.beginPath();
    ctx.arc(insetX + insetW * 0.3, insetY + insetH * 0.7, insetW * 0.1, 0, Math.PI * 2);
    ctx.stroke();
    
    // Rod
    ctx.strokeStyle = '#95A5A6';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(insetX + insetW * 0.3, insetY + insetH * 0.2);
    ctx.lineTo(insetX + insetW * 0.3, insetY + insetH * 0.8);
    ctx.stroke();
    
    // Labels
    ctx.fillStyle = '#2C3E50';
    ctx.font = `${w * 0.025}px Arial`;
    ctx.fillText('Filament', w * 0.5, h * 0.35);
    ctx.fillText('Hook', w * 0.22, h * 0.4);
    ctx.fillText('Basal Body', w * 0.12, h * 0.65);
  }
  
  static drawPili(ctx, color, w, h) {
    // Multiple pili extending from cell surface
    ctx.fillStyle = '#ECF0F1';
    ctx.fillRect(0, 0, w, h);
    
    // Cell body
    const gradient = ctx.createRadialGradient(w * 0.3, h * 0.5, 0, w * 0.3, h * 0.5, w * 0.25);
    gradient.addColorStop(0, '#F9E79F');
    gradient.addColorStop(1, '#F4D03F');
    
    ctx.fillStyle = gradient;
    ctx.beginPath();
    ctx.ellipse(w * 0.3, h * 0.5, w * 0.2, h * 0.3, 0, 0, Math.PI * 2);
    ctx.fill();
    
    ctx.strokeStyle = '#8E44AD';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.ellipse(w * 0.3, h * 0.5, w * 0.2, h * 0.3, 0, 0, Math.PI * 2);
    ctx.stroke();
    
    // Draw many pili (hair-like structures)
    const piliCount = 20;
    ctx.strokeStyle = '#7F8C8D';
    ctx.lineWidth = 2;
    
    for (let i = 0; i < piliCount; i++) {
      const angle = (i / piliCount) * Math.PI * 2;
      const startX = w * 0.3 + Math.cos(angle) * w * 0.2;
      const startY = h * 0.5 + Math.sin(angle) * h * 0.3;
      
      const length = w * (0.15 + Math.random() * 0.1);
      const endX = startX + Math.cos(angle) * length;
      const endY = startY + Math.sin(angle) * length;
      
      // Slightly wavy pilus
      ctx.beginPath();
      ctx.moveTo(startX, startY);
      
      const segments = 5;
      for (let s = 1; s <= segments; s++) {
        const t = s / segments;
        const x = startX + (endX - startX) * t;
        const y = startY + (endY - startY) * t;
        const wave = Math.sin(s * 2) * w * 0.01;
        const perpX = -(endY - startY) / length;
        const perpY = (endX - startX) / length;
        
        ctx.lineTo(x + perpX * wave, y + perpY * wave);
      }
      ctx.stroke();
      
      // Adhesin tip
      ctx.fillStyle = '#E74C3C';
      ctx.beginPath();
      ctx.arc(endX, endY, w * 0.008, 0, Math.PI * 2);
      ctx.fill();
    }
    
    // Sex pilus (thicker, longer - for conjugation)
    ctx.strokeStyle = '#E67E22';
    ctx.lineWidth = 4;
    ctx.beginPath();
    ctx.moveTo(w * 0.5, h * 0.5);
    ctx.quadraticCurveTo(w * 0.65, h * 0.3, w * 0.8, h * 0.4);
    ctx.stroke();
    
    // Another cell being contacted
    ctx.fillStyle = 'rgba(241, 196, 15, 0.5)';
    ctx.beginPath();
    ctx.ellipse(w * 0.85, h * 0.4, w * 0.1, h * 0.15, 0, 0, Math.PI * 2);
    ctx.fill();
    
    ctx.strokeStyle = '#8E44AD';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.ellipse(w * 0.85, h * 0.4, w * 0.1, h * 0.15, 0, 0, Math.PI * 2);
    ctx.stroke();
    
    // Labels
    ctx.fillStyle = '#2C3E50';
    ctx.font = `${w * 0.03}px Arial`;
    ctx.fillText('Common Pili', w * 0.55, h * 0.75);
    ctx.fillText('(attachment)', w * 0.55, h * 0.8);
    
    ctx.fillText('Sex Pilus', w * 0.6, h * 0.25);
    ctx.fillText('(conjugation)', w * 0.6, h * 0.3);
  }
  
  static drawFlagellaOnCell(ctx, w, h, x, y, direction) {
    const length = w * 0.15;
    const sign = direction === 'right' ? 1 : -1;
    
    ctx.strokeStyle = '#95A5A6';
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.moveTo(x, y);
    
    for (let i = 0; i <= 20; i++) {
      const t = i / 20;
      const waveX = x + sign * t * length;
      const waveY = y + Math.sin(i * 0.8) * h * 0.03;
      
      if (i === 0) ctx.moveTo(waveX, waveY);
      else ctx.lineTo(waveX, waveY);
    }
    ctx.stroke();
  }
  
  // ===== VIRUS STRUCTURE =====
  
  static drawVirusStructure(ctx, x, y, width, height, type, component) {
    ctx.save();
    ctx.translate(x, y);
    
    const colors = {
      bacteriophage: { capsid: '#3498DB', tail: '#2980B9', fiber: '#1F618D' },
      enveloped: { capsid: '#E74C3C', envelope: '#C0392B', spike: '#A93226' },
      'non-enveloped': { capsid: '#27AE60', protein: '#229954' },
      retrovirus: { capsid: '#9B59B6', envelope: '#8E44AD', spike: '#7D3C98', rna: '#E74C3C' }
    };
    
    const color = colors[type] || colors.bacteriophage;
    
    switch(component) {
      case 'complete':
        this.drawCompleteVirus(ctx, color, width, height, type);
        break;
      case 'capsid':
        this.drawCapsid(ctx, color, width, height, type);
        break;
      case 'envelope':
        this.drawEnvelope(ctx, color, width, height);
        break;
      case 'spike-proteins':
        this.drawSpikeProteins(ctx, color, width, height);
        break;
      case 'nucleic-acid':
        this.drawNucleicAcid(ctx, color, width, height);
        break;
      case 'enzymes':
        this.drawViralEnzymes(ctx, color, width, height);
        break;
    }
    
    ctx.restore();
  }
  
  static drawCompleteVirus(ctx, color, w, h, type) {
    if (type === 'bacteriophage') {
      // Icosahedral head
      const headRadius = w * 0.15;
      const headY = h * 0.25;
      
      ctx.fillStyle = color.capsid;
      ctx.strokeStyle = this.darken(color.capsid, 0.8);
      ctx.lineWidth = 2;
      
      this.drawIcosahedron(ctx, w * 0.5, headY, headRadius);
      
      // DNA inside (coiled)
      ctx.strokeStyle = '#E74C3C';
      ctx.lineWidth = 2;
      for (let i = 0; i < 3; i++) {
        ctx.beginPath();
        ctx.arc(w * 0.5, headY, headRadius * (0.4 + i * 0.15), 0, Math.PI * 2);
        ctx.stroke();
      }
      
      // Collar
      ctx.fillStyle = color.tail;
      ctx.fillRect(w * 0.46, headY + headRadius, w * 0.08, h * 0.05);
      
      // Contractile tail sheath
      const tailTop = headY + headRadius + h * 0.05;
      const tailHeight = h * 0.35;
      
      const tailGradient = ctx.createLinearGradient(0, tailTop, 0, tailTop + tailHeight);
      tailGradient.addColorStop(0, color.tail);
      tailGradient.addColorStop(1, this.darken(color.tail, 0.7));
      
      ctx.fillStyle = tailGradient;
      ctx.fillRect(w * 0.47, tailTop, w * 0.06, tailHeight);
      
      // Tail striations (contractile rings)
      ctx.strokeStyle = this.darken(color.tail, 0.6);
      ctx.lineWidth = 1.5;
      for (let i = 0; i < 8; i++) {
        const y = tailTop + (i / 7) * tailHeight;
        ctx.beginPath();
        ctx.moveTo(w * 0.46, y);
        ctx.lineTo(w * 0.54, y);
        ctx.stroke();
      }
      
      // Baseplate
      ctx.fillStyle = color.fiber;
      ctx.beginPath();
      ctx.moveTo(w * 0.5, tailTop + tailHeight);
      ctx.lineTo(w * 0.4, tailTop + tailHeight + h * 0.03);
      ctx.lineTo(w * 0.6, tailTop + tailHeight + h * 0.03);
      ctx.closePath();
      ctx.fill();
      
      // Tail fibers (6 fibers)
      ctx.strokeStyle = color.fiber;
      ctx.lineWidth = 3;
      for (let i = 0; i < 6; i++) {
        const angle = (i / 6) * Math.PI * 2;
        const baseX = w * 0.5 + Math.cos(angle) * w * 0.08;
        const baseY = tailTop + tailHeight + h * 0.03;
        const endX = w * 0.5 + Math.cos(angle) * w * 0.2;
        const endY = baseY + h * 0.1;
        
        ctx.beginPath();
        ctx.moveTo(baseX, baseY);
        ctx.lineTo(endX, endY);
        ctx.stroke();
        
        // Fiber tip (for host recognition)
        ctx.fillStyle = '#E74C3C';
        ctx.beginPath();
        ctx.arc(endX, endY, w * 0.015, 0, Math.PI * 2);
        ctx.fill();
      }
      
      // Central tail tube
      ctx.strokeStyle = '#95A5A6';
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(w * 0.5, tailTop);
      ctx.lineTo(w * 0.5, tailTop + tailHeight);
      ctx.stroke();
      
    } else if (type === 'enveloped' || type === 'retrovirus') {
      // Spherical enveloped virus
      const radius = w * 0.25;
      
      // Lipid envelope
      const envelopeGradient = ctx.createRadialGradient(w * 0.5, h * 0.5, 0, w * 0.5, h * 0.5, radius);
      envelopeGradient.addColorStop(0, 'rgba(192, 57, 43, 0.3)');
      envelopeGradient.addColorStop(0.7, 'rgba(192, 57, 43, 0.5)');
      envelopeGradient.addColorStop(1, color.envelope);
      
      ctx.fillStyle = envelopeGradient;
      ctx.beginPath();
      ctx.arc(w * 0.5, h * 0.5, radius, 0, Math.PI * 2);
      ctx.fill();
      
      // Spike proteins (glycoproteins)
      for (let i = 0; i < 24; i++) {
        const angle = (i / 24) * Math.PI * 2;
        const spikeX = w * 0.5 + Math.cos(angle) * radius;
        const spikeY = h * 0.5 + Math.sin(angle) * radius;
        
        const spikeEndX = w * 0.5 + Math.cos(angle) * (radius + w * 0.05);
        const spikeEndY = h * 0.5 + Math.sin(angle) * (radius + h * 0.05);
        
        // Spike stem
        ctx.strokeStyle = color.spike;
        ctx.lineWidth = 3;
        ctx.beginPath();
        ctx.moveTo(spikeX, spikeY);
        ctx.lineTo(spikeEndX, spikeEndY);
        ctx.stroke();
        
        // Spike head
        ctx.fillStyle = color.spike;
        ctx.beginPath();
        ctx.arc(spikeEndX, spikeEndY, w * 0.012, 0, Math.PI * 2);
        ctx.fill();
      }
      
      // Capsid (inside envelope)
      ctx.fillStyle = color.capsid;
      ctx.globalAlpha = 0.7;
      ctx.beginPath();
      ctx.arc(w * 0.5, h * 0.5, radius * 0.7, 0, Math.PI * 2);
      ctx.fill();
      ctx.globalAlpha = 1;
      
      // RNA/DNA inside
      if (type === 'retrovirus') {
        // Two RNA strands
        ctx.strokeStyle = '#E74C3C';
        ctx.lineWidth = 3;
        for (let strand = 0; strand < 2; strand++) {
          ctx.beginPath();
          for (let i = 0; i <= 50; i++) {
            const angle = (i / 50) * Math.PI * 2;
            const r = radius * 0.4 + strand * radius * 0.1;
            const x = w * 0.5 + Math.cos(angle) * r + Math.sin(i * 0.5) * w * 0.02;
            const y = h * 0.5 + Math.sin(angle) * r + Math.cos(i * 0.5) * h * 0.02;
            
            if (i === 0) ctx.moveTo(x, y);
            else ctx.lineTo(x, y);
          }
          ctx.stroke();
        }
        
        // Reverse transcriptase enzymes
        ctx.fillStyle = '#F39C12';
        for (let i = 0; i < 6; i++) {
          const angle = (i / 6) * Math.PI * 2;
          const x = w * 0.5 + Math.cos(angle) * radius * 0.35;
          const y = h * 0.5 + Math.sin(angle) * radius * 0.35;
          
          ctx.beginPath();
          ctx.arc(x, y, w * 0.02, 0, Math.PI * 2);
          ctx.fill();
        }
        
        // Integrase
        ctx.fillStyle = '#9B59B6';
        ctx.beginPath();
        ctx.arc(w * 0.5, h * 0.5, w * 0.025, 0, Math.PI * 2);
        ctx.fill();
      } else {
        // Generic nucleic acid
        ctx.strokeStyle = '#E74C3C';
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.arc(w * 0.5, h * 0.5, radius * 0.4, 0, Math.PI * 2);
        ctx.stroke();
      }
      
      // Matrix proteins (between envelope and capsid)
      ctx.fillStyle = '#34495E';
      ctx.globalAlpha = 0.5;
      for (let i = 0; i < 12; i++) {
        const angle = (i / 12) * Math.PI * 2;
        const x = w * 0.5 + Math.cos(angle) * radius * 0.85;
        const y = h * 0.5 + Math.sin(angle) * radius * 0.85;
        
        ctx.beginPath();
        ctx.arc(x, y, w * 0.015, 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.globalAlpha = 1;
      
    } else if (type === 'non-enveloped') {
      // Icosahedral non-enveloped virus
      const radius = w * 0.25;
      
      this.drawIcosahedron(ctx, w * 0.5, h * 0.5, radius);
      
      // Capsomers (protein subunits)
      ctx.fillStyle = this.darken(color.capsid, 0.9);
      for (let i = 0; i < 20; i++) {
        const angle = (i / 20) * Math.PI * 2;
        const layer = Math.floor(i / 5);
        const r = radius * (0.7 + layer * 0.1);
        const x = w * 0.5 + Math.cos(angle) * r;
        const y = h * 0.5 + Math.sin(angle) * r;
        
        ctx.beginPath();
        this.drawPentagon(ctx, x, y, w * 0.025);
        ctx.fill();
        ctx.stroke();
      }
      
      // DNA/RNA inside
      ctx.strokeStyle = '#E74C3C';
      ctx.lineWidth = 3;
      ctx.globalAlpha = 0.6;
      
      for (let i = 0; i < 4; i++) {
        ctx.beginPath();
        ctx.arc(w * 0.5, h * 0.5, radius * (0.3 + i * 0.1), 0, Math.PI * 2);
        ctx.stroke();
      }
      ctx.globalAlpha = 1;
    }
  }
  
  static drawCapsid(ctx, color, w, h, type) {
    // Detailed capsid structure
    ctx.fillStyle = '#F8F9FA';
    ctx.fillRect(0, 0, w, h);
    
    const radius = w * 0.3;
    
    // Icosahedral capsid
    ctx.fillStyle = color.capsid;
    this.drawIcosahedron(ctx, w * 0.5, h * 0.45, radius);
    
    // Capsomers (hexons and pentons)
    // Pentons (at vertices) - 12 total
    ctx.fillStyle = '#E74C3C';
    ctx.strokeStyle = '#C0392B';
    ctx.lineWidth = 2;
    
    const pentonPositions = [
      [0.5, 0.15], [0.35, 0.25], [0.65, 0.25],
      [0.25, 0.45], [0.75, 0.45], [0.5, 0.45],
      [0.35, 0.65], [0.65, 0.65], [0.5, 0.75]
    ];
    
    pentonPositions.forEach(([px, py]) => {
      ctx.beginPath();
      this.drawPentagon(ctx, w * px, h * py, w * 0.04);
      ctx.fill();
      ctx.stroke();
    });
    
    // Hexons (on faces) - multiple
    ctx.fillStyle = '#3498DB';
    ctx.strokeStyle = '#2980B9';
    
    const hexonPositions = [
      [0.42, 0.3], [0.58, 0.3], [0.5, 0.35],
      [0.38, 0.45], [0.62, 0.45],
      [0.42, 0.6], [0.58, 0.6], [0.5, 0.55]
    ];
    
    hexonPositions.forEach(([px, py]) => {
      ctx.beginPath();
      this.drawHexagon(ctx, w * px, h * py, w * 0.035);
      ctx.fill();
      ctx.stroke();
    });
    
    // Legend
    ctx.fillStyle = '#2C3E50';
    ctx.font = `${w * 0.03}px Arial`;
    ctx.fillText('Capsid Structure', w * 0.05, h * 0.92);
    
    // Penton marker
    ctx.fillStyle = '#E74C3C';
    ctx.beginPath();
    this.drawPentagon(ctx, w * 0.1, h * 0.96, w * 0.02);
    ctx.fill();
    ctx.fillStyle = '#2C3E50';
    ctx.fillText('= Penton (12 total)', w * 0.14, h * 0.975);
    
    // Hexon marker
    ctx.fillStyle = '#3498DB';
    ctx.beginPath();
    this.drawHexagon(ctx, w * 0.4, h * 0.96, w * 0.02);
    ctx.fill();
    ctx.fillStyle = '#2C3E50';
    ctx.fillText('= Hexon (many)', w * 0.44, h * 0.975);
  }
  
  static drawEnvelope(ctx, color, w, h) {
    // Viral envelope (lipid bilayer)
    ctx.fillStyle = '#F8F9FA';
    ctx.fillRect(0, 0, w, h);
    
    // Cross-section of envelope
    const lipidCount = 15;
    const lipidWidth = w / lipidCount;
    
    // Outer leaflet
    for (let i = 0; i < lipidCount; i++) {
      const x = i * lipidWidth + lipidWidth / 2;
      
      // Phospholipid head (outer)
      ctx.fillStyle = '#E74C3C';
      ctx.beginPath();
      ctx.arc(x, h * 0.25, lipidWidth * 0.3, 0, Math.PI * 2);
      ctx.fill();
      
      // Fatty acid tails
      ctx.strokeStyle = '#F39C12';
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(x - lipidWidth * 0.15, h * 0.25);
      ctx.lineTo(x - lipidWidth * 0.15, h * 0.5);
      ctx.stroke();
      
      ctx.beginPath();
      ctx.moveTo(x + lipidWidth * 0.15, h * 0.25);
      ctx.lineTo(x + lipidWidth * 0.15, h * 0.5);
      ctx.stroke();
    }
    
    // Inner leaflet
    for (let i = 0; i < lipidCount; i++) {
      const x = i * lipidWidth + lipidWidth / 2;
      
      // Phospholipid head (inner)
      ctx.fillStyle = '#E74C3C';
      ctx.beginPath();
      ctx.arc(x, h * 0.75, lipidWidth * 0.3, 0, Math.PI * 2);
      ctx.fill();
      
      // Fatty acid tails
      ctx.strokeStyle = '#F39C12';
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(x - lipidWidth * 0.15, h * 0.75);
      ctx.lineTo(x - lipidWidth * 0.15, h * 0.5);
      ctx.stroke();
      
      ctx.beginPath();
      ctx.moveTo(x + lipidWidth * 0.15, h * 0.75);
      ctx.lineTo(x + lipidWidth * 0.15, h * 0.5);
      ctx.stroke();
    }
    
    // Spike proteins (transmembrane)
    for (let i = 0; i < 4; i++) {
      const x = w * (0.2 + i * 0.2);
      
      // Transmembrane domain
      ctx.fillStyle = '#9B59B6';
      ctx.fillRect(x - w * 0.02, h * 0.25, w * 0.04, h * 0.5);
      
      // Extracellular domain (spike)
      ctx.fillStyle = '#8E44AD';
      ctx.beginPath();
      ctx.moveTo(x, h * 0.25);
      ctx.lineTo(x - w * 0.03, h * 0.1);
      ctx.lineTo(x + w * 0.03, h * 0.1);
      ctx.closePath();
      ctx.fill();
      
      // Intracellular domain
      ctx.fillStyle = '#7D3C98';
      ctx.fillRect(x - w * 0.015, h * 0.75, w * 0.03, h * 0.08);
    }
    
    // Matrix proteins (below envelope)
    ctx.fillStyle = '#34495E';
    for (let i = 0; i < 10; i++) {
      const x = w * (0.1 + i * 0.08);
      ctx.beginPath();
      ctx.arc(x, h * 0.83, w * 0.015, 0, Math.PI * 2);
      ctx.fill();
    }
    
    // Labels
    ctx.fillStyle = '#2C3E50';
    ctx.font = `${w * 0.025}px Arial`;
    ctx.fillText('Viral Envelope (from host cell membrane)', w * 0.05, h * 0.05);
    ctx.fillText('Spike Proteins', w * 0.35, h * 0.15);
    ctx.fillText('Lipid Bilayer', w * 0.02, h * 0.5);
    ctx.fillText('Matrix Proteins', w * 0.7, h * 0.9);
  }
  
  static drawSpikeProteins(ctx, color, w, h) {
    // Detailed spike protein structure
    ctx.fillStyle = '#F8F9FA';
    ctx.fillRect(0, 0, w, h);
    
    // Membrane section
    ctx.fillStyle = '#E74C3C';
    ctx.fillRect(0, h * 0.6, w, h * 0.1);
    
    // Draw several spike proteins
    for (let i = 0; i < 5; i++) {
      const x = w * (0.15 + i * 0.17);
      
      // Transmembrane anchor
      ctx.fillStyle = '#9B59B6';
      ctx.fillRect(x - w * 0.015, h * 0.6, w * 0.03, h * 0.15);
      
      // Stem region
      ctx.fillStyle = '#8E44AD';
      ctx.fillRect(x - w * 0.02, h * 0.35, w * 0.04, h * 0.25);
      
      // Head/receptor binding domain
      ctx.fillStyle = '#7D3C98';
      ctx.beginPath();
      ctx.arc(x, h * 0.25, w * 0.04, 0, Math.PI * 2);
      ctx.fill();
      
      // Receptor binding site
      ctx.fillStyle = '#E74C3C';
      ctx.beginPath();
      ctx.arc(x, h * 0.25, w * 0.015, 0, Math.PI * 2);
      ctx.fill();
      
      // Glycosylation sites (sugar chains)
      ctx.strokeStyle = '#27AE60';
      ctx.lineWidth = 2;
      for (let g = 0; g < 3; g++) {
        const angle = (g / 3) * Math.PI * 2;
        const startX = x + Math.cos(angle) * w * 0.03;
        const startY = h * 0.35 + g * h * 0.08;
        
        ctx.beginPath();
        ctx.moveTo(startX, startY);
        ctx.quadraticCurveTo(startX + w * 0.02, startY - h * 0.03, startX + w * 0.04, startY);
        ctx.stroke();
        
        // Sugar molecules
        ctx.fillStyle = '#27AE60';
        ctx.beginPath();
        ctx.arc(startX + w * 0.04, startY, w * 0.008, 0, Math.PI * 2);
        ctx.fill();
      }
    }
    
    // Detailed view (inset)
    const insetX = w * 0.65;
    const insetY = h * 0.05;
    const insetW = w * 0.3;
    const insetH = h * 0.4;
    
    ctx.fillStyle = 'white';
    ctx.strokeStyle = '#2C3E50';
    ctx.lineWidth = 2;
    ctx.fillRect(insetX, insetY, insetW, insetH);
    ctx.strokeRect(insetX, insetY, insetW, insetH);
    
    // Single spike detail
    const spikeX = insetX + insetW / 2;
    
    // Receptor binding domain (detailed)
    ctx.fillStyle = '#7D3C98';
    ctx.beginPath();
    ctx.arc(spikeX, insetY + insetH * 0.2, insetW * 0.15, 0, Math.PI * 2);
    ctx.fill();
    
    // ACE2 receptor binding site
    ctx.fillStyle = '#E74C3C';
    ctx.beginPath();
    ctx.ellipse(spikeX, insetY + insetH * 0.2, insetW * 0.05, insetH * 0.06, 0, 0, Math.PI * 2);
    ctx.fill();
    
    // S1/S2 subunits
    ctx.strokeStyle = '#2C3E50';
    ctx.lineWidth = 2;
    ctx.setLineDash([5, 3]);
    ctx.beginPath();
    ctx.moveTo(insetX + insetW * 0.2, insetY + insetH * 0.35);
    ctx.lineTo(insetX + insetW * 0.8, insetY + insetH * 0.35);
    ctx.stroke();
    ctx.setLineDash([]);
    
    // Labels
    ctx.fillStyle = '#2C3E50';
    ctx.font = `${w * 0.022}px Arial`;
    ctx.fillText('S1 (binding)', insetX + insetW * 0.05, insetY + insetH * 0.15);
    ctx.fillText('S2 (fusion)', insetX + insetW * 0.05, insetY + insetH * 0.55);
    
    ctx.fillStyle = '#2C3E50';
    ctx.font = `${w * 0.028}px Arial`;
    ctx.fillText('Spike Proteins', w * 0.35, h * 0.92);
    ctx.fillText('(Viral Attachment & Entry)', w * 0.28, h * 0.97);
  }
  
  static drawNucleicAcid(ctx, color, w, h) {
    // Viral genome (DNA or RNA)
    ctx.fillStyle = '#F8F9FA';
    ctx.fillRect(0, 0, w, h);
    
    // Two panels: DNA virus and RNA virus
    
    // DNA virus (left)
    ctx.fillStyle = '#2C3E50';
    ctx.font = `${w * 0.032}px Arial`;
    ctx.fillText('DNA Virus', w * 0.15, h * 0.08);
    
    // Double helix
    ctx.strokeStyle = '#3498DB';
    ctx.lineWidth = 4;
    
    for (let strand = 0; strand < 2; strand++) {
      ctx.beginPath();
      for (let i = 0; i <= 100; i++) {
        const y = h * 0.15 + (i / 100) * h * 0.7;
        const angle = i * 0.3 + strand * Math.PI;
        const x = w * 0.25 + Math.sin(angle) * w * 0.08;
        
        if (i === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }
      ctx.stroke();
    }
    
    // Base pairs
    ctx.strokeStyle = '#E74C3C';
    ctx.lineWidth = 2;
    for (let i = 0; i <= 20; i++) {
      const y = h * 0.15 + (i / 20) * h * 0.7;
      const angle = i * 1.5;
      const x1 = w * 0.25 + Math.sin(angle) * w * 0.08;
      const x2 = w * 0.25 + Math.sin(angle + Math.PI) * w * 0.08;
      
      ctx.beginPath();
      ctx.moveTo(x1, y);
      ctx.lineTo(x2, y);
      ctx.stroke();
    }
    
    // RNA virus (right)
    ctx.fillStyle = '#2C3E50';
    ctx.font = `${w * 0.032}px Arial`;
    ctx.fillText('RNA Virus', w * 0.65, h * 0.08);
    
    // Single strand (wavy)
    ctx.strokeStyle = '#E74C3C';
    ctx.lineWidth = 5;
    ctx.beginPath();
    
    for (let i = 0; i <= 100; i++) {
      const y = h * 0.15 + (i / 100) * h * 0.7;
      const x = w * 0.75 + Math.sin(i * 0.4) * w * 0.08;
      
      if (i === 0) ctx.moveTo(x, y);
      else ctx.lineTo(x, y);
    }
    ctx.stroke();
    
    // Nucleotides
    const nucleotides = ['A', 'U', 'G', 'C'];
    ctx.fillStyle = '#27AE60';
    ctx.font = `${w * 0.025}px Arial`;
    
    for (let i = 0; i < 15; i++) {
      const y = h * 0.15 + (i / 14) * h * 0.7;
      const x = w * 0.75 + Math.sin(i * 0.4) * w * 0.08;
      const nucleotide = nucleotides[i % 4];
      
      ctx.fillText(nucleotide, x + w * 0.015, y + h * 0.01);
    }
    
    // Genome types
    ctx.fillStyle = '#2C3E50';
    ctx.font = `${w * 0.022}px Arial`;
    ctx.fillText('dsDNA (double-stranded)', w * 0.05, h * 0.92);
    ctx.fillText('ssDNA (single-stranded)', w * 0.05, h * 0.96);
    ctx.fillText('ssRNA+ (positive-sense)', w * 0.55, h * 0.92);
    ctx.fillText('ssRNA- (negative-sense)', w * 0.55, h * 0.96);
  }
  
  static drawViralEnzymes(ctx, color, w, h) {
    // Viral enzymes and proteins
    ctx.fillStyle = '#F8F9FA';
    ctx.fillRect(0, 0, w, h);
    
    const enzymes = [
      { name: 'Reverse Transcriptase', x: 0.2, y: 0.2, color: '#E74C3C', type: 'retrovirus' },
      { name: 'Protease', x: 0.5, y: 0.2, color: '#3498DB', type: 'cleavage' },
      { name: 'Integrase', x: 0.8, y: 0.2, color: '#9B59B6', type: 'integration' },
      { name: 'Polymerase', x: 0.2, y: 0.6, color: '#27AE60', type: 'replication' },
      { name: 'Neuraminidase', x: 0.5, y: 0.6, color: '#F39C12', type: 'release' },
      { name: 'Helicase', x: 0.8, y: 0.6, color: '#E67E22', type: 'unwinding' }
    ];
    
    enzymes.forEach(enzyme => {
      const ex = w * enzyme.x;
      const ey = h * enzyme.y;
      
      // Enzyme shape (protein blob)
      ctx.fillStyle = enzyme.color;
      ctx.globalAlpha = 0.7;
      ctx.beginPath();
      for (let i = 0; i <= 20; i++) {
        const angle = (i / 20) * Math.PI * 2;
        const radius = w * (0.06 + Math.sin(i * 3) * 0.01);
        const x = ex + Math.cos(angle) * radius;
        const y = ey + Math.sin(angle) * radius * 0.8;
        
        if (i === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }
      ctx.closePath();
      ctx.fill();
      ctx.globalAlpha = 1;
      
      // Active site
      ctx.fillStyle = '#E74C3C';
      ctx.beginPath();
      ctx.arc(ex, ey, w * 0.015, 0, Math.PI * 2);
      ctx.fill();
      
      // Outline
      ctx.strokeStyle = this.darken(enzyme.color, 0.7);
      ctx.lineWidth = 2;
      ctx.beginPath();
      for (let i = 0; i <= 20; i++) {
        const angle = (i / 20) * Math.PI * 2;
        const radius = w * (0.06 + Math.sin(i * 3) * 0.01);
        const x = ex + Math.cos(angle) * radius;
        const y = ey + Math.sin(angle) * radius * 0.8;
        
        if (i === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }
      ctx.closePath();
      ctx.stroke();
      
      // Label
      ctx.fillStyle = '#2C3E50';
      ctx.font = `${w * 0.02}px Arial`;
      ctx.textAlign = 'center';
      ctx.fillText(enzyme.name, ex, ey + h * 0.12);
      ctx.textAlign = 'left';
    });
    
    // Title
    ctx.fillStyle = '#2C3E50';
    ctx.font = `${w * 0.035}px Arial`;
    ctx.fillText('Viral Enzymes', w * 0.05, h * 0.95);
  }
  
  // ===== FUNGAL CELL =====
  
  static drawFungalCell(ctx, x, y, width, height, structure, form) {
    ctx.save();
    ctx.translate(x, y);
    
    const colors = {
      wall: '#8D6E63',
      membrane: '#E74C3C',
      cytoplasm: '#F9E79F',
      nucleus: '#9B59B6',
      vacuole: '#AED6F1'
    };
    
    switch(structure) {
      case 'cell':
        this.drawFungalCellStructure(ctx, colors, width, height, form);
        break;
      case 'hyphae':
        this.drawHyphae(ctx, colors, width, height);
        break;
      case 'mycelium':
        this.drawMycelium(ctx, colors, width, height);
        break;
      case 'fruiting-body':
        this.drawFruitingBody(ctx, colors, width, height);
        break;
    }
    
    ctx.restore();
  }
  
  static drawFungalCellStructure(ctx, color, w, h, form) {
    if (form === 'yeast') {
      // Yeast cell (round/oval)
      const gradient = ctx.createRadialGradient(w * 0.5, h * 0.5, 0, w * 0.5, h * 0.5, w * 0.35);
      gradient.addColorStop(0, color.cytoplasm);
      gradient.addColorStop(1, this.darken(color.cytoplasm, 0.8));
      
      ctx.fillStyle = gradient;
      ctx.beginPath();
      ctx.ellipse(w * 0.5, h * 0.5, w * 0.3, h * 0.35, 0, 0, Math.PI * 2);
      ctx.fill();
      
      // Chitin cell wall (thick)
      ctx.strokeStyle = color.wall;
      ctx.lineWidth = 6;
      ctx.beginPath();
      ctx.ellipse(w * 0.5, h * 0.5, w * 0.3, h * 0.35, 0, 0, Math.PI * 2);
      ctx.stroke();
      
      // Cell membrane
      ctx.strokeStyle = color.membrane;
      ctx.lineWidth = 2;
      ctx.setLineDash([4, 2]);
      ctx.beginPath();
      ctx.ellipse(w * 0.5, h * 0.5, w * 0.28, h * 0.33, 0, 0, Math.PI * 2);
      ctx.stroke();
      ctx.setLineDash([]);
      
      // Nucleus
      ctx.fillStyle = color.nucleus;
      ctx.globalAlpha = 0.6;
      ctx.beginPath();
      ctx.arc(w * 0.5, h * 0.45, w * 0.12, 0, Math.PI * 2);
      ctx.fill();
      ctx.globalAlpha = 1;
      
      // Nucleolus
      ctx.fillStyle = this.darken(color.nucleus, 0.7);
      ctx.beginPath();
      ctx.arc(w * 0.5, h * 0.45, w * 0.04, 0, Math.PI * 2);
      ctx.fill();
      
      // Vacuole
      ctx.fillStyle = color.vacuole;
      ctx.globalAlpha = 0.5;
      ctx.beginPath();
      ctx.arc(w * 0.6, h * 0.6, w * 0.08, 0, Math.PI * 2);
      ctx.fill();
      ctx.globalAlpha = 1;
      
      // Mitochondria
      ctx.fillStyle = '#E67E22';
      for (let i = 0; i < 4; i++) {
        const angle = (i / 4) * Math.PI * 2;
        const mx = w * 0.5 + Math.cos(angle) * w * 0.15;
        const my = h * 0.5 + Math.sin(angle) * h * 0.2;
        
        ctx.beginPath();
        ctx.ellipse(mx, my, w * 0.04, w * 0.02, angle, 0, Math.PI * 2);
        ctx.fill();
      }
      
      // Budding (asexual reproduction)
      ctx.fillStyle = this.darken(color.cytoplasm, 0.9);
      ctx.beginPath();
      ctx.arc(w * 0.75, h * 0.4, w * 0.12, 0, Math.PI * 2);
      ctx.fill();
      
      ctx.strokeStyle = color.wall;
      ctx.lineWidth = 4;
      ctx.beginPath();
      ctx.arc(w * 0.75, h * 0.4, w * 0.12, 0, Math.PI * 2);
      ctx.stroke();
      
      // Bud scar
      ctx.strokeStyle = this.darken(color.wall, 0.6);
      ctx.lineWidth = 3;
      ctx.beginPath();
      ctx.arc(w * 0.63, h * 0.5, w * 0.025, 0, Math.PI * 2);
      ctx.stroke();
      
    } else {
      // Mold/hyphal cell
      // Draw hyphal segment
      ctx.fillStyle = color.cytoplasm;
      ctx.fillRect(w * 0.1, h * 0.4, w * 0.8, h * 0.2);
      
      // Chitin walls
      ctx.strokeStyle = color.wall;
      ctx.lineWidth = 5;
      ctx.strokeRect(w * 0.1, h * 0.4, w * 0.8, h * 0.2);
      
      // Septa (cross walls)
      ctx.strokeStyle = this.darken(color.wall, 0.7);
      ctx.lineWidth = 4;
      for (let i = 1; i <= 3; i++) {
        const x = w * (0.1 + i * 0.2);
        ctx.beginPath();
        ctx.moveTo(x, h * 0.4);
        ctx.lineTo(x, h * 0.6);
        ctx.stroke();
      }
      
      // Nuclei (multinucleate)
      ctx.fillStyle = color.nucleus;
      ctx.globalAlpha = 0.6;
      for (let i = 0; i < 4; i++) {
        const nx = w * (0.2 + i * 0.2);
        ctx.beginPath();
        ctx.arc(nx, h * 0.5, w * 0.04, 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.globalAlpha = 1;
      
      // Organelles
      ctx.fillStyle = '#E67E22';
      for (let i = 0; i < 8; i++) {
        const ox = w * (0.15 + Math.random() * 0.7);
        const oy = h * (0.42 + Math.random() * 0.16);
        ctx.beginPath();
        ctx.arc(ox, oy, w * 0.015, 0, Math.PI * 2);
        ctx.fill();
      }
    }
  }
  
  static drawHyphae(ctx, color, w, h) {
    // Network of hyphae
    ctx.fillStyle = '#F8F9FA';
    ctx.fillRect(0, 0, w, h);
    
    // Draw multiple hyphal strands
    for (let strand = 0; strand < 5; strand++) {
      const startY = h * (0.2 + strand * 0.15);
      const segments = 6;
      
      for (let seg = 0; seg < segments; seg++) {
        const x = w * (0.1 + seg * 0.15);
        const y = startY + Math.sin(seg * 0.8) * h * 0.05;
        const segWidth = w * 0.14;
        const segHeight = h * 0.08;
        
        // Hyphal segment
        ctx.fillStyle = color.cytoplasm;
        ctx.fillRect(x, y - segHeight / 2, segWidth, segHeight);
        
        // Cell wall
        ctx.strokeStyle = color.wall;
        ctx.lineWidth = 3;
        ctx.strokeRect(x, y - segHeight / 2, segWidth, segHeight);
        
        // Septum
        if (seg < segments - 1) {
          ctx.strokeStyle = this.darken(color.wall, 0.7);
          ctx.lineWidth = 3;
          ctx.beginPath();
          ctx.moveTo(x + segWidth, y - segHeight / 2);
          ctx.lineTo(x + segWidth, y + segHeight / 2);
          ctx.stroke();
          
          // Septal pore
          ctx.fillStyle = 'white';
          ctx.beginPath();
          ctx.arc(x + segWidth, y, h * 0.01, 0, Math.PI * 2);
          ctx.fill();
        }
        
        // Nuclei
        ctx.fillStyle = color.nucleus;
        ctx.globalAlpha = 0.6;
        ctx.beginPath();
        ctx.arc(x + segWidth / 2, y, h * 0.02, 0, Math.PI * 2);
        ctx.fill();
        ctx.globalAlpha = 1;
      }
      
      // Branching
      if (strand % 2 === 0) {
        const branchX = w * 0.5;
        const branchY = startY;
        
        ctx.fillStyle = color.cytoplasm;
        ctx.fillRect(branchX, branchY, w * 0.12, h * 0.08);
        
        ctx.strokeStyle = color.wall;
        ctx.lineWidth = 3;
        ctx.strokeRect(branchX, branchY, w * 0.12, h * 0.08);
      }
    }
    
    // Labels
    ctx.fillStyle = '#2C3E50';
    ctx.font = `${w * 0.025}px Arial`;
    ctx.fillText('Hyphae (fungal filaments)', w * 0.05, h * 0.05);
    ctx.fillText('Septate (with cross-walls)', w * 0.05, h * 0.95);
  }
  
  static drawMycelium(ctx, color, w, h) {
    // Mycelium network
    ctx.fillStyle = '#F8F9FA';
    ctx.fillRect(0, 0, w, h);
    
    // Draw branching network
    const drawBranch = (startX, startY, angle, depth, maxDepth) => {
      if (depth > maxDepth) return;
      
      const length = w * (0.15 - depth * 0.03);
      const endX = startX + Math.cos(angle) * length;
      const endY = startY + Math.sin(angle) * length;
      
      // Hypha strand
      ctx.strokeStyle = color.wall;
      ctx.lineWidth = 4 - depth;
      ctx.beginPath();
      ctx.moveTo(startX, startY);
      ctx.lineTo(endX, endY);
      ctx.stroke();
      
      // Inner cytoplasm
      ctx.strokeStyle = color.cytoplasm;
      ctx.lineWidth = 2 - depth * 0.5;
      ctx.beginPath();
      ctx.moveTo(startX, startY);
      ctx.lineTo(endX, endY);
      ctx.stroke();
      
      // Branch
      if (depth < maxDepth) {
        drawBranch(endX, endY, angle - 0.5, depth + 1, maxDepth);
        drawBranch(endX, endY, angle + 0.5, depth + 1, maxDepth);
      }
    };
    
    // Create mycelial network from center
    const centerX = w * 0.5;
    const centerY = h * 0.5;
    
    for (let i = 0; i < 6; i++) {
      const angle = (i / 6) * Math.PI * 2;
      drawBranch(centerX, centerY, angle, 0, 3);
    }
    
    // Spore-bearing structures
    ctx.fillStyle = '#27AE60';
    for (let i = 0; i < 8; i++) {
      const angle = Math.random() * Math.PI * 2;
      const distance = w * (0.3 + Math.random() * 0.15);
      const sx = centerX + Math.cos(angle) * distance;
      const sy = centerY + Math.sin(angle) * distance;
      
      // Conidiophore
      ctx.strokeStyle = '#229954';
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(sx, sy);
      ctx.lineTo(sx, sy - h * 0.08);
      ctx.stroke();
      
      // Conidia (spores)
      for (let j = 0; j < 3; j++) {
        ctx.fillStyle = '#27AE60';
        ctx.beginPath();
        ctx.arc(sx, sy - h * (0.08 + j * 0.015), w * 0.01, 0, Math.PI * 2);
        ctx.fill();
      }
    }
    
    // Label
    ctx.fillStyle = '#2C3E50';
    ctx.font = `${w * 0.03}px Arial`;
    ctx.fillText('Mycelium Network', w * 0.35, h * 0.95);
  }
  
  static drawFruitingBody(ctx, color, w, h) {
    // Mushroom (fruiting body)
    ctx.fillStyle = '#E8F5E9';
    ctx.fillRect(0, 0, w, h);
    
    // Underground mycelium
    ctx.strokeStyle = color.wall;
    ctx.lineWidth = 2;
    for (let i = 0; i < 10; i++) {
      const x1 = w * (0.2 + Math.random() * 0.6);
      const y1 = h * 0.75;
      const x2 = x1 + (Math.random() - 0.5) * w * 0.2;
      const y2 = h * 0.95;
      
      ctx.beginPath();
      ctx.moveTo(x1, y1);
      ctx.quadraticCurveTo(x1 + (x2 - x1) * 0.5, y1 + h * 0.1, x2, y2);
      ctx.stroke();
    }
    
    // Stipe (stem)
    const stipeGradient = ctx.createLinearGradient(w * 0.4, 0, w * 0.6, 0);
    stipeGradient.addColorStop(0, '#E0E0E0');
    stipeGradient.addColorStop(0.5, '#FAFAFA');
    stipeGradient.addColorStop(1, '#E0E0E0');
    
    ctx.fillStyle = stipeGradient;
    ctx.fillRect(w * 0.45, h * 0.35, w * 0.1, h * 0.4);
    
    ctx.strokeStyle = '#BDBDBD';
    ctx.lineWidth = 2;
    ctx.strokeRect(w * 0.45, h * 0.35, w * 0.1, h * 0.4);
    
    // Internal structure (hyphae)
    ctx.strokeStyle = 'rgba(0, 0, 0, 0.1)';
    ctx.lineWidth = 1;
    for (let i = 0; i < 8; i++) {
      const y = h * (0.4 + i * 0.04);
      ctx.beginPath();
      ctx.moveTo(w * 0.45, y);
      ctx.lineTo(w * 0.55, y);
      ctx.stroke();
    }
    
    // Pileus (cap)
    const capGradient = ctx.createRadialGradient(w * 0.5, h * 0.25, 0, w * 0.5, h * 0.25, w * 0.25);
    capGradient.addColorStop(0, '#D32F2F');
    capGradient.addColorStop(0.5, '#E57373');
    capGradient.addColorStop(1, '#EF5350');
    
    ctx.fillStyle = capGradient;
    ctx.beginPath();
    ctx.ellipse(w * 0.5, h * 0.28, w * 0.25, h * 0.12, 0, 0, Math.PI, true);
    ctx.fill();
    
    // Cap outline
    ctx.strokeStyle = '#C62828';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.ellipse(w * 0.5, h * 0.28, w * 0.25, h * 0.12, 0, 0, Math.PI, true);
    ctx.stroke();
    
    // White spots (Amanita-style)
    ctx.fillStyle = 'white';
    const spots = [[0.35, 0.22], [0.45, 0.18], [0.55, 0.17], [0.65, 0.21], [0.5, 0.25]];
    spots.forEach(([sx, sy]) => {
      ctx.beginPath();
      ctx.arc(w * sx, h * sy, w * 0.02, 0, Math.PI * 2);
      ctx.fill();
    });
    
    // Gills (lamellae) - underside
    ctx.fillStyle = '#FFF3E0';
    ctx.beginPath();
    ctx.ellipse(w * 0.5, h * 0.35, w * 0.22, h * 0.08, 0, 0, Math.PI * 2);
    ctx.fill();
    
    // Individual gills
    ctx.strokeStyle = '#BCAAA4';
    ctx.lineWidth = 1;
    for (let i = 0; i < 20; i++) {
      const angle = Math.PI + (i / 19) * Math.PI;
      const x1 = w * 0.5 + Math.cos(angle) * w * 0.22;
      const y1 = h * 0.35 + Math.sin(angle) * h * 0.08;
      const x2 = w * 0.5 + Math.cos(angle) * w * 0.05;
      const y2 = h * 0.35;
      
      ctx.beginPath();
      ctx.moveTo(x1, y1);
      ctx.lineTo(x2, y2);
      ctx.stroke();
    }
    
    // Annulus (ring on stem)
    ctx.fillStyle = '#F5F5F5';
    ctx.fillRect(w * 0.43, h * 0.5, w * 0.14, h * 0.03);
    ctx.strokeStyle = '#E0E0E0';
    ctx.lineWidth = 1;
    ctx.strokeRect(w * 0.43, h * 0.5, w * 0.14, h * 0.03);
    
    // Spores (on gills)
    ctx.fillStyle = 'rgba(139, 69, 19, 0.3)';
    for (let i = 0; i < 30; i++) {
      const angle = Math.random() * Math.PI;
      const distance = w * (0.05 + Math.random() * 0.17);
      const sx = w * 0.5 + Math.cos(angle + Math.PI) * distance;
      const sy = h * 0.35 + Math.abs(Math.sin(angle + Math.PI)) * h * 0.08;
      
      ctx.beginPath();
      ctx.arc(sx, sy, w * 0.003, 0, Math.PI * 2);
      ctx.fill();
    }
    
    // Labels
    ctx.fillStyle = '#2C3E50';
    ctx.font = `${w * 0.022}px Arial`;
    ctx.fillText('Pileus (cap)', w * 0.65, h * 0.2);
    ctx.fillText('Gills', w * 0.65, h * 0.35);
    ctx.fillText('Annulus', w * 0.62, h * 0.52);
    ctx.fillText('Stipe', w * 0.62, h * 0.6);
    ctx.fillText('Mycelium', w * 0.05, h * 0.85);
  }
  
  // ===== PROTISTS =====
  
  static drawProtists(ctx, x, y, width, height, protistType, feature) {
    ctx.save();
    ctx.translate(x, y);
    
    switch(protistType) {
      case 'all':
        this.drawProtistDiversity(ctx, width, height);
        break;
      case 'amoeba':
        this.drawAmoeba(ctx, width, height, feature);
        break;
      case 'paramecium':
        this.drawParamecium(ctx, width, height, feature);
        break;
      case 'euglena':
        this.drawEuglena(ctx, width, height, feature);
        break;
      case 'volvox':
        this.drawVolvox(ctx, width, height, feature);
        break;
      case 'diatom':
        this.drawDiatom(ctx, width, height, feature);
        break;
      case 'plasmodium':
        this.drawPlasmodium(ctx, width, height, feature);
        break;
    }
    
    ctx.restore();
  }
  
  static drawProtistDiversity(ctx, w, h) {
    // Show multiple protists
    ctx.fillStyle = '#E3F2FD';
    ctx.fillRect(0, 0, w, h);
    
    // Amoeba (top left)
    ctx.save();
    ctx.translate(w * 0.2, h * 0.25);
    this.drawAmoeba(ctx, w * 0.25, h * 0.3, 'structure');
    ctx.restore();
    
    // Paramecium (top right)
    ctx.save();
    ctx.translate(w * 0.6, h * 0.25);
    this.drawParamecium(ctx, w * 0.25, h * 0.3, 'structure');
    ctx.restore();
    
    // Euglena (bottom left)
    ctx.save();
    ctx.translate(w * 0.2, h * 0.65);
    this.drawEuglena(ctx, w * 0.25, h * 0.3, 'structure');
    ctx.restore();
    
    // Diatom (bottom right)
    ctx.save();
    ctx.translate(w * 0.6, h * 0.65);
    this.drawDiatom(ctx, w * 0.25, h * 0.3, 'structure');
    ctx.restore();
    
    // Labels
    ctx.fillStyle = '#2C3E50';
    ctx.font = `${w * 0.022}px Arial`;
    ctx.fillText('Amoeba', w * 0.15, h * 0.48);
    ctx.fillText('Paramecium', w * 0.55, h * 0.48);
    ctx.fillText('Euglena', w * 0.16, h * 0.88);
    ctx.fillText('Diatom', w * 0.58, h * 0.88);
    
    // Title
    ctx.font = `${w * 0.035}px Arial`;
    ctx.fillText('Protist Diversity', w * 0.35, h * 0.05);
  }
  
  static drawAmoeba(ctx, w, h, feature) {
    // Amoeba with pseudopodia
    const centerX = w * 0.5;
    const centerY = h * 0.5;
    
    // Irregular cell body
    ctx.fillStyle = 'rgba(255, 228, 181, 0.8)';
    ctx.beginPath();
    
    const points = 12;
    for (let i = 0; i <= points; i++) {
      const angle = (i / points) * Math.PI * 2;
      const radiusVariation = 0.8 + Math.sin(i * 2.5) * 0.3;
      const radius = w * 0.15 * radiusVariation;
      const x = centerX + Math.cos(angle) * radius;
      const y = centerY + Math.sin(angle) * radius;
      
      if (i === 0) ctx.moveTo(x, y);
      else ctx.lineTo(x, y);
    }
    ctx.closePath();
    ctx.fill();
    
    ctx.strokeStyle = '#DAA520';
    ctx.lineWidth = 2;
    ctx.stroke();
    
    // Pseudopodia (extending)
    ctx.fillStyle = 'rgba(255, 228, 181, 0.6)';
    const pseudopods = [
      [0.2, -0.3], [0.4, 0.1], [-0.2, 0.3], [-0.4, -0.1]
    ];
    
    pseudopods.forEach(([dx, dy]) => {
      const baseX = centerX + dx * w * 0.15;
      const baseY = centerY + dy * h * 0.15;
      const tipX = baseX + dx * w * 0.2;
      const tipY = baseY + dy * h * 0.2;
      
      ctx.beginPath();
      ctx.moveTo(baseX, baseY);
      const cpX = baseX + dx * w * 0.15;
      const cpY = baseY + dy * h * 0.15;
      ctx.quadraticCurveTo(cpX + w * 0.02, cpY, tipX, tipY);
      ctx.quadraticCurveTo(cpX - w * 0.02, cpY, baseX, baseY);
      ctx.fill();
      ctx.stroke();
    });
    
    // Nucleus
    ctx.fillStyle = 'rgba(147, 112, 219, 0.7)';
    ctx.beginPath();
    ctx.arc(centerX, centerY, w * 0.06, 0, Math.PI * 2);
    ctx.fill();
    
    // Contractile vacuole
    ctx.fillStyle = 'rgba(173, 216, 230, 0.7)';
    ctx.beginPath();
    ctx.arc(centerX + w * 0.08, centerY - h * 0.05, w * 0.035, 0, Math.PI * 2);
    ctx.fill();
    
    // Food vacuoles
    ctx.fillStyle = 'rgba(34, 139, 34, 0.5)';
    ctx.beginPath();
    ctx.arc(centerX - w * 0.05, centerY + h * 0.04, w * 0.025, 0, Math.PI * 2);
    ctx.fill();
    
    ctx.beginPath();
    ctx.arc(centerX + w * 0.03, centerY + h * 0.06, w * 0.02, 0, Math.PI * 2);
    ctx.fill();
    
    // Endoplasm and ectoplasm distinction
    ctx.strokeStyle = 'rgba(218, 165, 32, 0.3)';
    ctx.lineWidth = 1;
    ctx.setLineDash([3, 2]);
    ctx.beginPath();
    ctx.arc(centerX, centerY, w * 0.1, 0, Math.PI * 2);
    ctx.stroke();
    ctx.setLineDash([]);
  }
  
  static drawParamecium(ctx, w, h, feature) {
    // Slipper-shaped paramecium
    const centerX = w * 0.5;
    const centerY = h * 0.5;
    
    // Cell body
    ctx.fillStyle = 'rgba(144, 238, 144, 0.8)';
    ctx.beginPath();
    ctx.ellipse(centerX, centerY, w * 0.12, h * 0.25, 0, 0, Math.PI * 2);
    ctx.fill();
    
    ctx.strokeStyle = '#2E8B57';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.ellipse(centerX, centerY, w * 0.12, h * 0.25, 0, 0, Math.PI * 2);
    ctx.stroke();
    
    // Cilia (around entire cell)
    ctx.strokeStyle = '#006400';
    ctx.lineWidth = 1;
    
    for (let i = 0; i < 40; i++) {
      const angle = (i / 40) * Math.PI * 2;
      const startX = centerX + Math.cos(angle) * w * 0.12;
      const startY = centerY + Math.sin(angle) * h * 0.25;
      const endX = startX + Math.cos(angle) * w * 0.04;
      const endY = startY + Math.sin(angle) * h * 0.04;
      
      ctx.beginPath();
      ctx.moveTo(startX, startY);
      ctx.lineTo(endX, endY);
      ctx.stroke();
    }
    
    // Oral groove
    ctx.fillStyle = 'rgba(0, 100, 0, 0.3)';
    ctx.beginPath();
    ctx.ellipse(centerX - w * 0.05, centerY - h * 0.08, w * 0.04, h * 0.12, -0.3, 0, Math.PI * 2);
    ctx.fill();
    
    // Macronucleus (large, kidney-shaped)
    ctx.fillStyle = 'rgba(147, 112, 219, 0.7)';
    ctx.beginPath();
    ctx.ellipse(centerX, centerY - h * 0.05, w * 0.07, h * 0.08, 0, 0, Math.PI * 2);
    ctx.fill();
    
    ctx.strokeStyle = '#663399';
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.ellipse(centerX, centerY - h * 0.05, w * 0.07, h * 0.08, 0, 0, Math.PI * 2);
    ctx.stroke();
    
    // Micronucleus (small)
    ctx.fillStyle = 'rgba(75, 0, 130, 0.8)';
    ctx.beginPath();
    ctx.arc(centerX + w * 0.05, centerY - h * 0.02, w * 0.02, 0, Math.PI * 2);
    ctx.fill();
    
    // Contractile vacuoles (2)
    ctx.fillStyle = 'rgba(173, 216, 230, 0.7)';
    ctx.beginPath();
    ctx.arc(centerX, centerY - h * 0.18, w * 0.03, 0, Math.PI * 2);
    ctx.fill();
    
    ctx.beginPath();
    ctx.arc(centerX, centerY + h * 0.18, w * 0.03, 0, Math.PI * 2);
    ctx.fill();
    
    // Radiating canals from contractile vacuoles
    ctx.strokeStyle = 'rgba(173, 216, 230, 0.5)';
    ctx.lineWidth = 1;
    for (let i = 0; i < 6; i++) {
      const angle = (i / 6) * Math.PI * 2;
      ctx.beginPath();
      ctx.moveTo(centerX, centerY - h * 0.18);
      ctx.lineTo(centerX + Math.cos(angle) * w * 0.05, centerY - h * 0.18 + Math.sin(angle) * h * 0.05);
      ctx.stroke();
    }
    
    // Food vacuoles
    ctx.fillStyle = 'rgba(139, 69, 19, 0.5)';
    for (let i = 0; i < 5; i++) {
      const fx = centerX + (Math.random() - 0.5) * w * 0.15;
      const fy = centerY + (Math.random() - 0.5) * h * 0.3;
      ctx.beginPath();
      ctx.arc(fx, fy, w * 0.015, 0, Math.PI * 2);
      ctx.fill();
    }
    
    // Pellicle pattern (surface structure)
    ctx.strokeStyle = 'rgba(46, 139, 87, 0.3)';
    ctx.lineWidth = 1;
    for (let i = 0; i < 8; i++) {
      const y = centerY - h * 0.2 + (i / 7) * h * 0.4;
      ctx.beginPath();
      ctx.ellipse(centerX, y, w * 0.11, h * 0.03, 0, 0, Math.PI * 2);
      ctx.stroke();
    }
    
    // Cytoproct (anal pore)
    ctx.fillStyle = '#2E8B57';
    ctx.beginPath();
    ctx.arc(centerX + w * 0.08, centerY + h * 0.2, w * 0.015, 0, Math.PI * 2);
    ctx.fill();
  }
  
  static drawEuglena(ctx, w, h, feature) {
    // Elongated euglena
    const centerX = w * 0.5;
    const centerY = h * 0.5;
    
    // Cell body
    ctx.fillStyle = 'rgba(152, 251, 152, 0.8)';
    ctx.beginPath();
    ctx.ellipse(centerX, centerY, w * 0.1, h * 0.22, 0, 0, Math.PI * 2);
    ctx.fill();
    
    ctx.strokeStyle = '#32CD32';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.ellipse(centerX, centerY, w * 0.1, h * 0.22, 0, 0, Math.PI * 2);
    ctx.stroke();
    
    // Pellicle (striations)
    ctx.strokeStyle = 'rgba(34, 139, 34, 0.4)';
    ctx.lineWidth = 1;
    for (let i = 0; i < 12; i++) {
      const y = centerY - h * 0.2 + (i / 11) * h * 0.4;
      ctx.beginPath();
      ctx.ellipse(centerX, y, w * 0.095, h * 0.025, 0, 0, Math.PI * 2);
      ctx.stroke();
    }
    
    // Flagellum (long)
    ctx.strokeStyle = '#228B22';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(centerX, centerY - h * 0.22);
    
    for (let i = 0; i <= 20; i++) {
      const t = i / 20;
      const x = centerX + Math.sin(i * 0.8) * w * 0.03;
      const y = centerY - h * 0.22 - t * h * 0.25;
      ctx.lineTo(x, y);
    }
    ctx.stroke();
    
    // Reservoir (anterior)
    ctx.fillStyle = 'rgba(173, 216, 230, 0.6)';
    ctx.beginPath();
    ctx.arc(centerX, centerY - h * 0.18, w * 0.03, 0, Math.PI * 2);
    ctx.fill();
    
    // Eyespot (stigma)
    ctx.fillStyle = '#FF4500';
    ctx.beginPath();
    ctx.arc(centerX + w * 0.04, centerY - h * 0.15, w * 0.025, 0, Math.PI * 2);
    ctx.fill();
    
    // Nucleus
    ctx.fillStyle = 'rgba(147, 112, 219, 0.7)';
    ctx.beginPath();
    ctx.arc(centerX, centerY, w * 0.05, 0, Math.PI * 2);
    ctx.fill();
    
    // Chloroplasts (numerous)
    ctx.fillStyle = 'rgba(0, 128, 0, 0.6)';
    for (let i = 0; i < 12; i++) {
      const angle = (i / 12) * Math.PI * 2;
      const radius = w * 0.07;
      const cx = centerX + Math.cos(angle) * radius;
      const cy = centerY + Math.sin(angle) * h * 0.15;
      
      ctx.beginPath();
      ctx.ellipse(cx, cy, w * 0.015, h * 0.03, angle, 0, Math.PI * 2);
      ctx.fill();
    }
    
    // Paramylon granules (storage)
    ctx.fillStyle = 'rgba(255, 255, 255, 0.7)';
    for (let i = 0; i < 6; i++) {
      const px = centerX + (Math.random() - 0.5) * w * 0.12;
      const py = centerY + (Math.random() - 0.5) * h * 0.3;
      ctx.beginPath();
      ctx.arc(px, py, w * 0.012, 0, Math.PI * 2);
      ctx.fill();
    }
    
    // Contractile vacuole
    ctx.fillStyle = 'rgba(173, 216, 230, 0.8)';
    ctx.beginPath();
    ctx.arc(centerX - w * 0.05, centerY - h * 0.1, w * 0.025, 0, Math.PI * 2);
    ctx.fill();
  }
  
  static drawVolvox(ctx, w, h, feature) {
    // Colonial volvox (sphere of cells)
    const centerX = w * 0.5;
    const centerY = h * 0.5;
    const radius = w * 0.22;
    
    // Gelatinous matrix
    ctx.fillStyle = 'rgba(173, 216, 230, 0.3)';
    ctx.beginPath();
    ctx.arc(centerX, centerY, radius, 0, Math.PI * 2);
    ctx.fill();
    
    ctx.strokeStyle = '#87CEEB';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.arc(centerX, centerY, radius, 0, Math.PI * 2);
    ctx.stroke();
    
    // Individual cells on surface
    const cellCount = 20;
    for (let i = 0; i < cellCount; i++) {
      const angle = (i / cellCount) * Math.PI * 2;
      const cellX = centerX + Math.cos(angle) * radius;
      const cellY = centerY + Math.sin(angle) * radius;
      
      // Cell body
      ctx.fillStyle = 'rgba(0, 128, 0, 0.7)';
      ctx.beginPath();
      ctx.arc(cellX, cellY, w * 0.025, 0, Math.PI * 2);
      ctx.fill();
      
      // Chloroplast
      ctx.fillStyle = 'rgba(0, 100, 0, 0.8)';
      ctx.beginPath();
      ctx.arc(cellX, cellY, w * 0.015, 0, Math.PI * 2);
      ctx.fill();
      
      // Flagella (2 per cell)
      ctx.strokeStyle = '#228B22';
      ctx.lineWidth = 1;
      for (let f = 0; f < 2; f++) {
        const flagAngle = angle + (f - 0.5) * 0.3;
        const endX = cellX + Math.cos(flagAngle) * w * 0.05;
        const endY = cellY + Math.sin(flagAngle) * h * 0.05;
        
        ctx.beginPath();
        ctx.moveTo(cellX, cellY);
        ctx.lineTo(endX, endY);
        ctx.stroke();
      }
      
      // Eyespot (in some cells)
      if (i % 4 === 0) {
        ctx.fillStyle = '#FF4500';
        ctx.beginPath();
        ctx.arc(cellX + Math.cos(angle) * w * 0.015, cellY + Math.sin(angle) * h * 0.015, w * 0.008, 0, Math.PI * 2);
        ctx.fill();
      }
    }
    
    // Protoplasmic strands connecting cells
    ctx.strokeStyle = 'rgba(0, 128, 0, 0.3)';
    ctx.lineWidth = 1;
    for (let i = 0; i < cellCount; i++) {
      const angle1 = (i / cellCount) * Math.PI * 2;
      const angle2 = ((i + 1) / cellCount) * Math.PI * 2;
      const x1 = centerX + Math.cos(angle1) * radius;
      const y1 = centerY + Math.sin(angle1) * radius;
      const x2 = centerX + Math.cos(angle2) * radius;
      const y2 = centerY + Math.sin(angle2) * radius;
      
      ctx.beginPath();
      ctx.moveTo(x1, y1);
      ctx.lineTo(x2, y2);
      ctx.stroke();
    }
    
    // Daughter colonies inside
    for (let d = 0; d < 3; d++) {
      const angle = (d / 3) * Math.PI * 2;
      const dRadius = radius * 0.5;
      const dx = centerX + Math.cos(angle) * dRadius;
      const dy = centerY + Math.sin(angle) * dRadius;
      
      ctx.fillStyle = 'rgba(144, 238, 144, 0.5)';
      ctx.beginPath();
      ctx.arc(dx, dy, w * 0.06, 0, Math.PI * 2);
      ctx.fill();
      
      ctx.strokeStyle = '#90EE90';
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.arc(dx, dy, w * 0.06, 0, Math.PI * 2);
      ctx.stroke();
    }
  }
  
  static drawDiatom(ctx, w, h, feature) {
    // Diatom with ornate silica shell
    const centerX = w * 0.5;
    const centerY = h * 0.5;
    
    // Frustule (silica shell) - pill box shape
    // Valve view (top half)
    ctx.fillStyle = 'rgba(218, 165, 32, 0.6)';
    ctx.strokeStyle = '#B8860B';
    ctx.lineWidth = 2;
    
    ctx.beginPath();
    ctx.ellipse(centerX, centerY, w * 0.2, h * 0.12, 0, 0, Math.PI * 2);
    ctx.fill();
    ctx.stroke();
    
    // Raphe (slit down the middle)
    ctx.strokeStyle = '#8B4513';
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.moveTo(centerX - w * 0.18, centerY);
    ctx.lineTo(centerX + w * 0.18, centerY);
    ctx.stroke();
    
    // Central nodule
    ctx.fillStyle = '#8B4513';
    ctx.beginPath();
    ctx.arc(centerX, centerY, w * 0.025, 0, Math.PI * 2);
    ctx.fill();
    
    // Polar nodules
    ctx.beginPath();
    ctx.arc(centerX - w * 0.15, centerY, w * 0.02, 0, Math.PI * 2);
    ctx.fill();
    
    ctx.beginPath();
    ctx.arc(centerX + w * 0.15, centerY, w * 0.02, 0, Math.PI * 2);
    ctx.fill();
    
    // Striae (ornate ridges)
    ctx.strokeStyle = 'rgba(139, 69, 19, 0.6)';
    ctx.lineWidth = 2;
    
    for (let i = -8; i <= 8; i++) {
      if (i === 0) continue; // Skip center
      
      const x = centerX + (i / 8) * w * 0.18;
      const length = h * (0.1 - Math.abs(i / 8) * 0.03);
      
      ctx.beginPath();
      ctx.moveTo(x, centerY - length);
      ctx.lineTo(x, centerY + length);
      ctx.stroke();
      
      // Cross-striae
      for (let j = -3; j <= 3; j++) {
        const y = centerY + (j / 3) * length * 0.8;
        ctx.strokeStyle = 'rgba(139, 69, 19, 0.3)';
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(x - w * 0.01, y);
        ctx.lineTo(x + w * 0.01, y);
        ctx.stroke();
      }
    }
    
    // Areolae (pores/chambers)
    ctx.fillStyle = 'rgba(139, 69, 19, 0.4)';
    for (let i = 0; i < 30; i++) {
      const angle = Math.random() * Math.PI * 2;
      const distance = Math.random() * w * 0.15;
      const ax = centerX + Math.cos(angle) * distance;
      const ay = centerY + Math.sin(angle) * distance * 0.6;
      
      // Only draw if within ellipse
      const normalizedX = (ax - centerX) / (w * 0.2);
      const normalizedY = (ay - centerY) / (h * 0.12);
      
      if (normalizedX * normalizedX + normalizedY * normalizedY < 0.8) {
        ctx.beginPath();
        ctx.arc(ax, ay, w * 0.008, 0, Math.PI * 2);
        ctx.fill();
      }
    }
    
    // Chloroplasts (golden-brown)
    ctx.fillStyle = 'rgba(184, 134, 11, 0.5)';
    ctx.globalAlpha = 0.6;
    
    ctx.beginPath();
    ctx.ellipse(centerX - w * 0.08, centerY, w * 0.06, h * 0.08, 0, 0, Math.PI * 2);
    ctx.fill();
    
    ctx.beginPath();
    ctx.ellipse(centerX + w * 0.08, centerY, w * 0.06, h * 0.08, 0, 0, Math.PI * 2);
    ctx.fill();
    
    ctx.globalAlpha = 1;
    
    // Nucleus (small, central)
    ctx.fillStyle = 'rgba(147, 112, 219, 0.6)';
    ctx.beginPath();
    ctx.arc(centerX, centerY, w * 0.02, 0, Math.PI * 2);
    ctx.fill();
    
    // Girdle bands (connecting the two halves)
    ctx.strokeStyle = 'rgba(184, 134, 11, 0.5)';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.ellipse(centerX, centerY, w * 0.2, h * 0.12, 0, 0, Math.PI * 2);
    ctx.stroke();
  }
  
  static drawPlasmodium(ctx, w, h, feature) {
    // Plasmodium (malaria parasite) - multiple life stages
    const stages = [
      { name: 'Sporozoite', x: 0.2, y: 0.25 },
      { name: 'Merozoite', x: 0.5, y: 0.25 },
      { name: 'Trophozoite', x: 0.8, y: 0.25 },
      { name: 'Schizont', x: 0.35, y: 0.7 },
      { name: 'Gametocyte', x: 0.65, y: 0.7 }
    ];
    
    stages.forEach(stage => {
      const sx = w * stage.x;
      const sy = h * stage.y;
      
      if (stage.name === 'Sporozoite') {
        // Elongated, crescent-shaped
        ctx.fillStyle = 'rgba(220, 20, 60, 0.7)';
        ctx.beginPath();
        ctx.ellipse(sx, sy, w * 0.08, h * 0.04, 0.3, 0, Math.PI * 2);
        ctx.fill();
        
        ctx.strokeStyle = '#8B0000';
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.ellipse(sx, sy, w * 0.08, h * 0.04, 0.3, 0, Math.PI * 2);
        ctx.stroke();
        
        // Apical complex
        ctx.fillStyle = '#4B0082';
        ctx.beginPath();
        ctx.arc(sx - w * 0.06, sy - h * 0.02, w * 0.015, 0, Math.PI * 2);
        ctx.fill();
        
      } else if (stage.name === 'Merozoite') {
        // Small, oval
        ctx.fillStyle = 'rgba(220, 20, 60, 0.7)';
        ctx.beginPath();
        ctx.ellipse(sx, sy, w * 0.04, h * 0.06, 0, 0, Math.PI * 2);
        ctx.fill();
        
        ctx.strokeStyle = '#8B0000';
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.ellipse(sx, sy, w * 0.04, h * 0.06, 0, 0, Math.PI * 2);
        ctx.stroke();
        
        // Nucleus
        ctx.fillStyle = '#4B0082';
        ctx.beginPath();
        ctx.arc(sx, sy, w * 0.015, 0, Math.PI * 2);
        ctx.fill();
        
      } else if (stage.name === 'Trophozoite') {
        // Ring stage in red blood cell
        // RBC
        ctx.fillStyle = 'rgba(255, 182, 193, 0.5)';
        ctx.beginPath();
        ctx.arc(sx, sy, w * 0.06, 0, Math.PI * 2);
        ctx.fill();
        
        ctx.strokeStyle = '#FFB6C1';
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.arc(sx, sy, w * 0.06, 0, Math.PI * 2);
        ctx.stroke();
        
        // Ring form
        ctx.strokeStyle = '#DC143C';
        ctx.lineWidth = 3;
        ctx.beginPath();
        ctx.arc(sx, sy, w * 0.03, 0, Math.PI * 2);
        ctx.stroke();
        
        // Nucleus (chromatin dot)
        ctx.fillStyle = '#8B0000';
        ctx.beginPath();
        ctx.arc(sx + w * 0.02, sy - h * 0.02, w * 0.01, 0, Math.PI * 2);
        ctx.fill();
        
        // Hemozoin (malaria pigment)
        ctx.fillStyle = '#654321';
        ctx.beginPath();
        ctx.arc(sx - w * 0.015, sy + h * 0.015, w * 0.008, 0, Math.PI * 2);
        ctx.fill();
        
      } else if (stage.name === 'Schizont') {
        // RBC
        ctx.fillStyle = 'rgba(255, 182, 193, 0.5)';
        ctx.beginPath();
        ctx.arc(sx, sy, w * 0.07, 0, Math.PI * 2);
        ctx.fill();
        
        ctx.strokeStyle = '#FFB6C1';
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.arc(sx, sy, w * 0.07, 0, Math.PI * 2);
        ctx.stroke();
        
        // Multiple merozoites
        for (let i = 0; i < 8; i++) {
          const angle = (i / 8) * Math.PI * 2;
          const mx = sx + Math.cos(angle) * w * 0.04;
          const my = sy + Math.sin(angle) * h * 0.04;
          
          ctx.fillStyle = 'rgba(220, 20, 60, 0.8)';
          ctx.beginPath();
          ctx.arc(mx, my, w * 0.012, 0, Math.PI * 2);
          ctx.fill();
          
          // Nucleus
          ctx.fillStyle = '#4B0082';
          ctx.beginPath();
          ctx.arc(mx, my, w * 0.006, 0, Math.PI * 2);
          ctx.fill();
        }
        
        // Hemozoin cluster
        ctx.fillStyle = '#654321';
        ctx.beginPath();
        ctx.arc(sx, sy, w * 0.015, 0, Math.PI * 2);
        ctx.fill();
        
      } else if (stage.name === 'Gametocyte') {
        // Crescent/banana shaped
        ctx.fillStyle = 'rgba(220, 20, 60, 0.7)';
        ctx.beginPath();
        ctx.moveTo(sx - w * 0.08, sy);
        ctx.quadraticCurveTo(sx - w * 0.06, sy - h * 0.05, sx, sy - h * 0.03);
        ctx.quadraticCurveTo(sx + w * 0.06, sy - h * 0.05, sx + w * 0.08, sy);
        ctx.quadraticCurveTo(sx + w * 0.06, sy + h * 0.05, sx, sy + h * 0.03);
        ctx.quadraticCurveTo(sx - w * 0.06, sy + h * 0.05, sx - w * 0.08, sy);
        ctx.fill();
        
        ctx.strokeStyle = '#8B0000';
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(sx - w * 0.08, sy);
        ctx.quadraticCurveTo(sx - w * 0.06, sy - h * 0.05, sx, sy - h * 0.03);
        ctx.quadraticCurveTo(sx + w * 0.06, sy - h * 0.05, sx + w * 0.08, sy);
        ctx.quadraticCurveTo(sx + w * 0.06, sy + h * 0.05, sx, sy + h * 0.03);
        ctx.quadraticCurveTo(sx - w * 0.06, sy + h * 0.05, sx - w * 0.08, sy);
        ctx.stroke();
        
        // Central hemozoin
        ctx.fillStyle = '#654321';
        for (let i = 0; i < 5; i++) {
          ctx.beginPath();
          ctx.arc(sx + (i - 2) * w * 0.02, sy, w * 0.008, 0, Math.PI * 2);
          ctx.fill();
        }
        
        // Nucleus
        ctx.fillStyle = '#4B0082';
        ctx.beginPath();
        ctx.arc(sx, sy, w * 0.015, 0, Math.PI * 2);
        ctx.fill();
      }
      
      // Label
      ctx.fillStyle = '#2C3E50';
      ctx.font = `${w * 0.02}px Arial`;
      ctx.textAlign = 'center';
      ctx.fillText(stage.name, sx, sy + h * 0.12);
    });
    
    // Title
    ctx.textAlign = 'left';
    ctx.font = `${w * 0.03}px Arial`;
    ctx.fillText('Plasmodium Life Stages', w * 0.05, h * 0.05);
  }
  
  // ===== HELPER METHODS =====
  
  static drawIcosahedron(ctx, cx, cy, radius) {
    // Simplified icosahedral representation
    ctx.fillStyle = ctx.fillStyle || '#3498DB';
    
    // Draw as a circle with pentagonal/hexagonal pattern
    ctx.beginPath();
    ctx.arc(cx, cy, radius, 0, Math.PI * 2);
    ctx.fill();
    
    // Add facets
    const facets = 20;
    ctx.strokeStyle = ctx.strokeStyle || this.darken(ctx.fillStyle, 0.8);
    ctx.lineWidth = 2;
    
    for (let i = 0; i < facets; i++) {
      const angle = (i / facets) * Math.PI * 2;
      const nextAngle = ((i + 1) / facets) * Math.PI * 2;
      
      ctx.beginPath();
      ctx.moveTo(cx, cy);
      ctx.lineTo(cx + Math.cos(angle) * radius, cy + Math.sin(angle) * radius);
      ctx.lineTo(cx + Math.cos(nextAngle) * radius, cy + Math.sin(nextAngle) * radius);
      ctx.closePath();
      ctx.stroke();
    }
  }
  
  static drawPentagon(ctx, cx, cy, radius) {
    ctx.beginPath();
    for (let i = 0; i < 5; i++) {
      const angle = (i / 5) * Math.PI * 2 - Math.PI / 2;
      const x = cx + Math.cos(angle) * radius;
      const y = cy + Math.sin(angle) * radius;
      
      if (i === 0) ctx.moveTo(x, y);
      else ctx.lineTo(x, y);
    }
    ctx.closePath();
  }
  
  static drawHexagon(ctx, cx, cy, radius) {
    ctx.beginPath();
    for (let i = 0; i < 6; i++) {
      const angle = (i / 6) * Math.PI * 2;
      const x = cx + Math.cos(angle) * radius;
      const y = cy + Math.sin(angle) * radius;
      
      if (i === 0) ctx.moveTo(x, y);
      else ctx.lineTo(x, y);
    }
    ctx.closePath();
  }
  
  static darken(color, factor) {
    // Simple color darkening
    if (color.startsWith('rgba')) {
      return color.replace(/[\d.]+\)$/,  `${factor})`);
    } else if (color.startsWith('#')) {
      const hex = color.replace('#', '');
      const r = parseInt(hex.substr(0, 2), 16);
      const g = parseInt(hex.substr(2, 2), 16);
      const b = parseInt(hex.substr(4, 2), 16);
      
      const newR = Math.floor(r * factor);
      const newG = Math.floor(g * factor);
      const newB = Math.floor(b * factor);
      
      return `#${newR.toString(16).padStart(2, '0')}${newG.toString(16).padStart(2, '0')}${newB.toString(16).padStart(2, '0')}`;
    }
    return color;
  }
}



