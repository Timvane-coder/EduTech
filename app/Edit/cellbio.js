import { createCanvas } from '@napi-rs/canvas'; import
ExcelJS from 'exceljs'; import fs from 'fs'; import os
from 'os'; import path from 'path'; import readline from
'readline'; import * as math from 'mathjs'; import
GIFEncoder from 'gifencoder'; import { PassThrough }
from 'stream';


class AnatomicalShapes {
  
  // ANIMAL CELL METHODS
  static drawAnimalCell(ctx, x, y, width, height, view, organelleHighlight) {
    ctx.save();
    ctx.translate(x, y);
    
    const colors = {
      membrane: { base: '#E8D4B8', dark: '#C9A97C' },
      cytoplasm: { base: '#F5E6D3', light: '#FFF8F0' },
      nucleus: { base: '#7B68A6', light: '#9B88C6', dark: '#5B4886' },
      mitochondria: { base: '#E67E73', light: '#FF9E93', dark: '#C65E53' },
      er: { base: '#8BC6EC', light: '#ABE6FF', dark: '#6BA6CC' },
      golgi: { base: '#F4A460', light: '#FFC480', dark: '#D48440' },
      lysosome: { base: '#9ACD32', light: '#BAED52', dark: '#7AAD12' },
      ribosome: { base: '#8B7D6B', light: '#AB9D8B', dark: '#6B5D4B' }
    };
    
    switch(view) {
      case 'complete':
        this.drawCompleteAnimalCell(ctx, colors, width, height, organelleHighlight);
        break;
      case 'nucleus':
        this.drawNucleus(ctx, colors.nucleus, width, height);
        break;
      case 'mitochondria':
        this.drawMitochondria(ctx, colors.mitochondria, width, height);
        break;
      case 'endoplasmicReticulum':
        this.drawEndoplasmicReticulum(ctx, colors.er, width, height);
        break;
      case 'golgiApparatus':
        this.drawGolgiApparatus(ctx, colors.golgi, width, height);
        break;
      case 'lysosome':
        this.drawLysosome(ctx, colors.lysosome, width, height);
        break;
      case 'ribosome':
        this.drawRibosome(ctx, colors.ribosome, width, height);
        break;
    }
    
    ctx.restore();
  }

  static drawCompleteAnimalCell(ctx, colors, width, height, highlight) {
    const w = width, h = height;
    const centerX = w / 2, centerY = h / 2;
    
    // Cell membrane
    const membraneGradient = ctx.createRadialGradient(centerX, centerY, w * 0.1, centerX, centerY, w * 0.48);
    membraneGradient.addColorStop(0, colors.cytoplasm.light);
    membraneGradient.addColorStop(0.7, colors.cytoplasm.base);
    membraneGradient.addColorStop(1, colors.membrane.base);
    
    ctx.fillStyle = membraneGradient;
    ctx.beginPath();
    ctx.arc(centerX, centerY, w * 0.45, 0, Math.PI * 2);
    ctx.fill();
    
    ctx.strokeStyle = colors.membrane.dark;
    ctx.lineWidth = 4;
    ctx.stroke();
    
    // Nucleus (center)
    const nucHighlight = highlight === 'nucleus' || highlight === 'all';
    ctx.fillStyle = nucHighlight ? colors.nucleus.light : colors.nucleus.base;
    ctx.beginPath();
    ctx.arc(centerX, centerY, w * 0.15, 0, Math.PI * 2);
    ctx.fill();
    ctx.strokeStyle = colors.nucleus.dark;
    ctx.lineWidth = nucHighlight ? 4 : 2;
    ctx.stroke();
    
    // Nucleolus
    ctx.fillStyle = colors.nucleus.dark;
    ctx.beginPath();
    ctx.arc(centerX + w * 0.03, centerY - h * 0.02, w * 0.04, 0, Math.PI * 2);
    ctx.fill();
    
    // Mitochondria (3-4 scattered)
    const mitoHighlight = highlight === 'mitochondria' || highlight === 'all';
    const mitoPositions = [
      [centerX + w * 0.2, centerY - h * 0.15],
      [centerX - w * 0.22, centerY + h * 0.1],
      [centerX + w * 0.05, centerY + h * 0.25],
      [centerX - w * 0.15, centerY - h * 0.2]
    ];
    
    mitoPositions.forEach(([x, y]) => {
      ctx.save();
      ctx.translate(x, y);
      ctx.fillStyle = mitoHighlight ? colors.mitochondria.light : colors.mitochondria.base;
      ctx.beginPath();
      ctx.ellipse(0, 0, w * 0.06, w * 0.03, Math.random() * Math.PI, 0, Math.PI * 2);
      ctx.fill();
      ctx.strokeStyle = colors.mitochondria.dark;
      ctx.lineWidth = mitoHighlight ? 3 : 1.5;
      ctx.stroke();
      
      // Cristae
      ctx.strokeStyle = colors.mitochondria.dark;
      ctx.lineWidth = 0.5;
      for(let i = 0; i < 3; i++) {
        ctx.beginPath();
        ctx.moveTo(-w * 0.04, -w * 0.015 + i * w * 0.015);
        ctx.lineTo(w * 0.04, -w * 0.015 + i * w * 0.015);
        ctx.stroke();
      }
      ctx.restore();
    });
    
    // Endoplasmic Reticulum (network around nucleus)
    const erHighlight = highlight === 'er' || highlight === 'all';
    ctx.strokeStyle = erHighlight ? colors.er.light : colors.er.base;
    ctx.lineWidth = erHighlight ? 4 : 2;
    for(let i = 0; i < 8; i++) {
      const angle = (i / 8) * Math.PI * 2;
      const startR = w * 0.18;
      const endR = w * 0.35;
      ctx.beginPath();
      ctx.moveTo(centerX + Math.cos(angle) * startR, centerY + Math.sin(angle) * startR);
      ctx.quadraticCurveTo(
        centerX + Math.cos(angle + 0.3) * (startR + endR) / 2,
        centerY + Math.sin(angle + 0.3) * (startR + endR) / 2,
        centerX + Math.cos(angle) * endR,
        centerY + Math.sin(angle) * endR
      );
      ctx.stroke();
    }
    
    // Golgi Apparatus (stacked membranes)
    const golgiHighlight = highlight === 'golgi' || highlight === 'all';
    ctx.save();
    ctx.translate(centerX + w * 0.25, centerY + h * 0.15);
    ctx.strokeStyle = golgiHighlight ? colors.golgi.light : colors.golgi.base;
    ctx.lineWidth = golgiHighlight ? 3 : 2;
    for(let i = 0; i < 5; i++) {
      ctx.beginPath();
      ctx.arc(0, i * h * 0.015, w * 0.08, Math.PI * 0.2, Math.PI * 0.8);
      ctx.stroke();
    }
    ctx.restore();
    
    // Lysosomes (small circles)
    const lysoHighlight = highlight === 'lysosome' || highlight === 'all';
    const lysoPositions = [
      [centerX - w * 0.1, centerY + h * 0.2],
      [centerX + w * 0.3, centerY - h * 0.05],
      [centerX - w * 0.25, centerY - h * 0.1]
    ];
    
    lysoPositions.forEach(([x, y]) => {
      ctx.fillStyle = lysoHighlight ? colors.lysosome.light : colors.lysosome.base;
      ctx.beginPath();
      ctx.arc(x, y, w * 0.025, 0, Math.PI * 2);
      ctx.fill();
      ctx.strokeStyle = colors.lysosome.dark;
      ctx.lineWidth = lysoHighlight ? 2 : 1;
      ctx.stroke();
    });
    
    // Ribosomes (tiny dots)
    const riboHighlight = highlight === 'ribosome' || highlight === 'all';
    ctx.fillStyle = riboHighlight ? colors.ribosome.light : colors.ribosome.base;
    for(let i = 0; i < 20; i++) {
      const angle = Math.random() * Math.PI * 2;
      const radius = w * 0.2 + Math.random() * w * 0.2;
      const x = centerX + Math.cos(angle) * radius;
      const y = centerY + Math.sin(angle) * radius;
      ctx.beginPath();
      ctx.arc(x, y, w * 0.008, 0, Math.PI * 2);
      ctx.fill();
    }
  }

  static drawNucleus(ctx, color, width, height) {
    const w = width, h = height;
    const centerX = w / 2, centerY = h / 2;
    
    // Nuclear envelope (double membrane)
    const gradient = ctx.createRadialGradient(centerX, centerY, 0, centerX, centerY, w * 0.4);
    gradient.addColorStop(0, color.light);
    gradient.addColorStop(0.7, color.base);
    gradient.addColorStop(1, color.dark);
    
    ctx.fillStyle = gradient;
    ctx.beginPath();
    ctx.arc(centerX, centerY, w * 0.4, 0, Math.PI * 2);
    ctx.fill();
    
    // Outer membrane
    ctx.strokeStyle = color.dark;
    ctx.lineWidth = 3;
    ctx.stroke();
    
    // Inner membrane
    ctx.beginPath();
    ctx.arc(centerX, centerY, w * 0.38, 0, Math.PI * 2);
    ctx.strokeStyle = color.dark;
    ctx.lineWidth = 2;
    ctx.stroke();
    
    // Nuclear pores
    ctx.fillStyle = '#000000';
    for(let i = 0; i < 12; i++) {
      const angle = (i / 12) * Math.PI * 2;
      const x = centerX + Math.cos(angle) * w * 0.39;
      const y = centerY + Math.sin(angle) * w * 0.39;
      ctx.beginPath();
      ctx.arc(x, y, w * 0.015, 0, Math.PI * 2);
      ctx.fill();
    }
    
    // Nucleolus (darker region)
    ctx.fillStyle = color.dark;
    ctx.beginPath();
    ctx.arc(centerX + w * 0.1, centerY - h * 0.05, w * 0.12, 0, Math.PI * 2);
    ctx.fill();
    
    // Chromatin (DNA threads)
    ctx.strokeStyle = 'rgba(0, 0, 0, 0.3)';
    ctx.lineWidth = 1;
    for(let i = 0; i < 15; i++) {
      ctx.beginPath();
      const startAngle = Math.random() * Math.PI * 2;
      const startR = Math.random() * w * 0.15;
      ctx.moveTo(
        centerX + Math.cos(startAngle) * startR,
        centerY + Math.sin(startAngle) * startR
      );
      for(let j = 0; j < 5; j++) {
        const angle = startAngle + (j * 0.5);
        const r = startR + j * w * 0.05;
        ctx.lineTo(
          centerX + Math.cos(angle) * r,
          centerY + Math.sin(angle) * r
        );
      }
      ctx.stroke();
    }
  }

  static drawMitochondria(ctx, color, width, height) {
    const w = width, h = height;
    const centerX = w / 2, centerY = h / 2;
    
    // Outer membrane
    const gradient = ctx.createLinearGradient(0, 0, w, h);
    gradient.addColorStop(0, color.light);
    gradient.addColorStop(0.5, color.base);
    gradient.addColorStop(1, color.dark);
    
    ctx.fillStyle = gradient;
    ctx.beginPath();
    ctx.ellipse(centerX, centerY, w * 0.35, h * 0.2, 0, 0, Math.PI * 2);
    ctx.fill();
    
    ctx.strokeStyle = color.dark;
    ctx.lineWidth = 3;
    ctx.stroke();
    
    // Inner membrane space
    ctx.fillStyle = color.base;
    ctx.beginPath();
    ctx.ellipse(centerX, centerY, w * 0.32, h * 0.17, 0, 0, Math.PI * 2);
    ctx.fill();
    
    // Cristae (folded inner membrane)
    ctx.strokeStyle = color.dark;
    ctx.lineWidth = 2;
    const cristaCount = 8;
    for(let i = 0; i < cristaCount; i++) {
      const x = centerX - w * 0.25 + (i / (cristaCount - 1)) * w * 0.5;
      ctx.beginPath();
      ctx.moveTo(x, centerY - h * 0.15);
      ctx.quadraticCurveTo(x, centerY, x, centerY + h * 0.15);
      ctx.stroke();
      
      // Crista folds
      ctx.beginPath();
      ctx.moveTo(x, centerY - h * 0.15);
      ctx.quadraticCurveTo(x + w * 0.03, centerY - h * 0.1, x, centerY - h * 0.05);
      ctx.quadraticCurveTo(x + w * 0.03, centerY, x, centerY + h * 0.05);
      ctx.quadraticCurveTo(x + w * 0.03, centerY + h * 0.1, x, centerY + h * 0.15);
      ctx.stroke();
    }
    
    // Matrix (inner space)
    ctx.fillStyle = 'rgba(0, 0, 0, 0.1)';
    for(let i = 0; i < 30; i++) {
      const angle = Math.random() * Math.PI * 2;
      const r = Math.random() * w * 0.25;
      const x = centerX + Math.cos(angle) * r;
      const y = centerY + Math.sin(angle) * r * 0.6;
      ctx.beginPath();
      ctx.arc(x, y, 1, 0, Math.PI * 2);
      ctx.fill();
    }
    
    // Label ATP production
    ctx.fillStyle = '#000000';
    ctx.font = `${w * 0.05}px Arial`;
    ctx.textAlign = 'center';
    ctx.fillText('ATP', centerX, centerY + h * 0.35);
  }

  static drawEndoplasmicReticulum(ctx, color, width, height) {
    const w = width, h = height;
    const centerX = w / 2, centerY = h / 2;
    
    // Rough ER (with ribosomes)
    ctx.fillStyle = color.base;
    ctx.strokeStyle = color.dark;
    ctx.lineWidth = 2;
    
    // Draw interconnected tubules
    for(let i = 0; i < 6; i++) {
      const y = centerY - h * 0.3 + (i / 5) * h * 0.6;
      ctx.beginPath();
      ctx.moveTo(centerX - w * 0.4, y);
      for(let j = 0; j < 8; j++) {
        const x = centerX - w * 0.4 + (j / 7) * w * 0.8;
        const offset = Math.sin(j * 0.8) * h * 0.05;
        ctx.lineTo(x, y + offset);
      }
      ctx.stroke();
      
      // Fill the tubule
      ctx.beginPath();
      ctx.moveTo(centerX - w * 0.4, y - h * 0.02);
      for(let j = 0; j < 8; j++) {
        const x = centerX - w * 0.4 + (j / 7) * w * 0.8;
        const offset = Math.sin(j * 0.8) * h * 0.05;
        ctx.lineTo(x, y + offset - h * 0.02);
      }
      for(let j = 7; j >= 0; j--) {
        const x = centerX - w * 0.4 + (j / 7) * w * 0.8;
        const offset = Math.sin(j * 0.8) * h * 0.05;
        ctx.lineTo(x, y + offset + h * 0.02);
      }
      ctx.closePath();
      ctx.fill();
      ctx.stroke();
    }
    
    // Ribosomes on rough ER
    ctx.fillStyle = '#8B7D6B';
    for(let i = 0; i < 6; i++) {
      const y = centerY - h * 0.3 + (i / 5) * h * 0.6;
      for(let j = 0; j < 15; j++) {
        const x = centerX - w * 0.4 + Math.random() * w * 0.8;
        const offset = Math.sin((x - centerX + w * 0.4) / w * 8 * 0.8) * h * 0.05;
        ctx.beginPath();
        ctx.arc(x, y + offset - h * 0.025, w * 0.008, 0, Math.PI * 2);
        ctx.fill();
      }
    }
    
    // Smooth ER section (bottom)
    ctx.strokeStyle = color.light;
    for(let i = 0; i < 3; i++) {
      const y = centerY + h * 0.25 + i * h * 0.05;
      ctx.beginPath();
      ctx.moveTo(centerX - w * 0.3, y);
      ctx.quadraticCurveTo(centerX, y + h * 0.03, centerX + w * 0.3, y);
      ctx.stroke();
    }
  }

  static drawGolgiApparatus(ctx, color, width, height) {
    const w = width, h = height;
    const centerX = w / 2, centerY = h / 2;
    
    // Stacked cisternae (flattened sacs)
    const stackCount = 6;
    const gradient = ctx.createLinearGradient(0, centerY - h * 0.15, 0, centerY + h * 0.15);
    gradient.addColorStop(0, color.light);
    gradient.addColorStop(0.5, color.base);
    gradient.addColorStop(1, color.dark);
    
    for(let i = 0; i < stackCount; i++) {
      const y = centerY - h * 0.15 + (i / (stackCount - 1)) * h * 0.3;
      const curve = 0.05 - (i * 0.01); // Decreasing curve
      
      // Fill cisterna
      ctx.fillStyle = gradient;
      ctx.beginPath();
      ctx.moveTo(centerX - w * 0.3, y);
      ctx.quadraticCurveTo(centerX, y - h * curve, centerX + w * 0.3, y);
      ctx.quadraticCurveTo(centerX, y + h * 0.02, centerX - w * 0.3, y);
      ctx.closePath();
      ctx.fill();
      
      // Outline cisterna
      ctx.strokeStyle = color.dark;
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(centerX - w * 0.3, y);
      ctx.quadraticCurveTo(centerX, y - h * curve, centerX + w * 0.3, y);
      ctx.stroke();
      
      ctx.beginPath();
      ctx.moveTo(centerX - w * 0.3, y);
      ctx.quadraticCurveTo(centerX, y + h * 0.02, centerX + w * 0.3, y);
      ctx.stroke();
    }
    
    // Cis face (receiving side) - vesicles arriving
    ctx.fillStyle = color.light;
    for(let i = 0; i < 3; i++) {
      const x = centerX - w * 0.35 - i * w * 0.04;
      const y = centerY - h * 0.15 + i * h * 0.03;
      ctx.beginPath();
      ctx.arc(x, y, w * 0.02, 0, Math.PI * 2);
      ctx.fill();
      ctx.strokeStyle = color.dark;
      ctx.lineWidth = 1;
      ctx.stroke();
      
      // Arrow showing direction
      ctx.strokeStyle = '#000000';
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.moveTo(x + w * 0.02, y);
      ctx.lineTo(x + w * 0.06, y);
      ctx.lineTo(x + w * 0.05, y - h * 0.01);
      ctx.moveTo(x + w * 0.06, y);
      ctx.lineTo(x + w * 0.05, y + h * 0.01);
      ctx.stroke();
    }
    
    // Trans face (shipping side) - vesicles departing
    for(let i = 0; i < 4; i++) {
      const x = centerX + w * 0.35 + i * w * 0.04;
      const y = centerY + h * 0.15 - i * h * 0.03;
      ctx.fillStyle = color.dark;
      ctx.beginPath();
      ctx.arc(x, y, w * 0.02, 0, Math.PI * 2);
      ctx.fill();
      ctx.strokeStyle = '#000000';
      ctx.lineWidth = 1;
      ctx.stroke();
      
      // Arrow showing direction
      ctx.beginPath();
      ctx.moveTo(x - w * 0.02, y);
      ctx.lineTo(x - w * 0.06, y);
      ctx.lineTo(x - w * 0.05, y - h * 0.01);
      ctx.moveTo(x - w * 0.06, y);
      ctx.lineTo(x - w * 0.05, y + h * 0.01);
      ctx.stroke();
    }
    
    // Labels
    ctx.fillStyle = '#000000';
    ctx.font = `${w * 0.04}px Arial`;
    ctx.textAlign = 'right';
    ctx.fillText('Cis face', centerX - w * 0.35, centerY - h * 0.25);
    ctx.textAlign = 'left';
    ctx.fillText('Trans face', centerX + w * 0.35, centerY + h * 0.25);
  }

  static drawLysosome(ctx, color, width, height) {
    const w = width, h = height;
    const centerX = w / 2, centerY = h / 2;
    
    // Lysosomal membrane
    const gradient = ctx.createRadialGradient(centerX, centerY, 0, centerX, centerY, w * 0.3);
    gradient.addColorStop(0, color.light);
    gradient.addColorStop(0.6, color.base);
    gradient.addColorStop(1, color.dark);
    
    ctx.fillStyle = gradient;
    ctx.beginPath();
    ctx.arc(centerX, centerY, w * 0.3, 0, Math.PI * 2);
    ctx.fill();
    
    ctx.strokeStyle = color.dark;
    ctx.lineWidth = 3;
    ctx.stroke();
    
    // Digestive enzymes (represented as various shapes inside)
    ctx.fillStyle = 'rgba(255, 255, 0, 0.6)';
    for(let i = 0; i < 8; i++) {
      const angle = (i / 8) * Math.PI * 2;
      const r = w * 0.15;
      const x = centerX + Math.cos(angle) * r;
      const y = centerY + Math.sin(angle) * r;
      
      // Y-shaped enzymes
      ctx.strokeStyle = 'rgba(255, 200, 0, 0.8)';
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(x, y - h * 0.03);
      ctx.lineTo(x, y);
      ctx.lineTo(x - w * 0.015, y + h * 0.02);
      ctx.moveTo(x, y);
      ctx.lineTo(x + w * 0.015, y + h * 0.02);
      ctx.stroke();
    }
    
    // Acidic interior (pH ~4.5-5)
    ctx.fillStyle = 'rgba(255, 255, 0, 0.2)';
    ctx.beginPath();
    ctx.arc(centerX, centerY, w * 0.25, 0, Math.PI * 2);
    ctx.fill();
    
    // Material being digested
    ctx.fillStyle = 'rgba(100, 100, 100, 0.5)';
    for(let i = 0; i < 5; i++) {
      const angle = Math.random() * Math.PI * 2;
      const r = Math.random() * w * 0.15;
      const x = centerX + Math.cos(angle) * r;
      const y = centerY + Math.sin(angle) * r;
      ctx.beginPath();
      ctx.arc(x, y, w * 0.02, 0, Math.PI * 2);
      ctx.fill();
    }
    
    // pH indicator
    ctx.fillStyle = '#000000';
    ctx.font = `${w * 0.06}px Arial`;
    ctx.textAlign = 'center';
    ctx.fillText('pH ~5', centerX, centerY + h * 0.4);
  }

  static drawRibosome(ctx, color, width, height) {
    const w = width, h = height;
    const centerX = w / 2, centerY = h / 2;
    
    // Large subunit (60S in eukaryotes)
    const largeGradient = ctx.createRadialGradient(centerX, centerY - h * 0.1, 0, centerX, centerY - h * 0.1, w * 0.25);
    largeGradient.addColorStop(0, color.light);
    largeGradient.addColorStop(0.7, color.base);
    largeGradient.addColorStop(1, color.dark);
    
    ctx.fillStyle = largeGradient;
    ctx.beginPath();
    ctx.ellipse(centerX, centerY - h * 0.1, w * 0.25, h * 0.15, 0, 0, Math.PI * 2);
    ctx.fill();
    
    ctx.strokeStyle = color.dark;
    ctx.lineWidth = 2;
    ctx.stroke();
    
    // Small subunit (40S in eukaryotes)
    const smallGradient = ctx.createRadialGradient(centerX, centerY + h * 0.15, 0, centerX, centerY + h * 0.15, w * 0.2);
    smallGradient.addColorStop(0, color.light);
    smallGradient.addColorStop(0.7, color.base);
    smallGradient.addColorStop(1, color.dark);
    
    ctx.fillStyle = smallGradient;
    ctx.beginPath();
    ctx.ellipse(centerX, centerY + h * 0.15, w * 0.2, h * 0.12, 0, 0, Math.PI * 2);
    ctx.fill();
    
    ctx.strokeStyle = color.dark;
    ctx.lineWidth = 2;
    ctx.stroke();
    
    // mRNA thread passing through
    ctx.strokeStyle = '#4169E1';
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.moveTo(centerX - w * 0.4, centerY + h * 0.15);
    ctx.lineTo(centerX + w * 0.4, centerY + h * 0.15);
    ctx.stroke();
    
    // tRNA in A and P sites
    const drawTRNA = (x, y, angle) => {
      ctx.save();
      ctx.translate(x, y);
      ctx.rotate(angle);
      
      // Cloverleaf structure (simplified)
      ctx.strokeStyle = '#228B22';
      ctx.lineWidth = 2;
      ctx.fillStyle = 'rgba(34, 139, 34, 0.3)';
      
      // Anticodon loop
      ctx.beginPath();
      ctx.arc(0, h * 0.08, w * 0.04, 0, Math.PI * 2);
      ctx.fill();
      ctx.stroke();
      
      // Acceptor stem
      ctx.beginPath();
      ctx.moveTo(0, 0);
      ctx.lineTo(0, h * 0.04);
      ctx.stroke();
      
      // Amino acid
      ctx.fillStyle = '#FF6347';
      ctx.beginPath();
      ctx.arc(0, -h * 0.02, w * 0.015, 0, Math.PI * 2);
      ctx.fill();
      
      ctx.restore();
    };
    
    // P site (peptidyl)
    drawTRNA(centerX - w * 0.08, centerY + h * 0.05, 0);
    
    // A site (aminoacyl)
    drawTRNA(centerX + w * 0.08, centerY + h * 0.05, 0);
    
    // Growing polypeptide chain
    ctx.strokeStyle = '#FF1493';
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.moveTo(centerX - w * 0.08, centerY - h * 0.02);
    for(let i = 0; i < 8; i++) {
      const x = centerX - w * 0.08 - i * w * 0.03;
      const y = centerY - h * 0.02 - i * h * 0.02;
      ctx.lineTo(x, y);
      
      // Amino acid beads
      ctx.fillStyle = '#FF1493';
      ctx.beginPath();
      ctx.arc(x, y, w * 0.01, 0, Math.PI * 2);
      ctx.fill();
    }
    ctx.stroke();
    
    // Labels
    ctx.fillStyle = '#000000';
    ctx.font = `${w * 0.04}px Arial`;
    ctx.textAlign = 'center';
    ctx.fillText('Large (60S)', centerX, centerY - h * 0.25);
    ctx.fillText('Small (40S)', centerX, centerY + h * 0.35);
  }

  // PLANT CELL METHODS
  static drawPlantCell(ctx, x, y, width, height, view, processHighlight) {
    ctx.save();
    ctx.translate(x, y);
    
    const colors = {
      cellWall: { base: '#8FBC8F', dark: '#6B8E6B', light: '#AFDCAF' },
      membrane: { base: '#E8D4B8', dark: '#C9A97C' },
      cytoplasm: { base: '#F5F5DC', light: '#FFFEF0' },
      chloroplast: { base: '#228B22', light: '#32CD32', dark: '#006400' },
      vacuole: { base: '#87CEEB', light: '#B0E0E6', dark: '#4682B4' },
      nucleus: { base: '#7B68A6', light: '#9B88C6', dark: '#5B4886' }
    };
    
    switch(view) {
      case 'complete':
        this.drawCompletePlantCell(ctx, colors, width, height, processHighlight);
        break;
      case 'cellWall':
        this.drawCellWall(ctx, colors.cellWall, width, height);
        break;
      case 'chloroplast':
        this.drawChloroplast(ctx, colors.chloroplast, width, height);
        break;
      case 'vacuole':
        this.drawVacuole(ctx, colors.vacuole, width, height);
        break;
      case 'plasmodesmata':
        this.drawPlasmodesmata(ctx, colors, width, height);
        break;
    }
    
    ctx.restore();
  }

  static drawCompletePlantCell(ctx, colors, width, height, highlight) {
    const w = width, h = height;
    
    // Cell wall (outermost, rectangular)
    const wallHighlight = highlight === 'cellWallFormation' || highlight === 'turgorPressure';
    ctx.fillStyle = wallHighlight ? colors.cellWall.light : colors.cellWall.base;
    ctx.fillRect(w * 0.05, h * 0.05, w * 0.9, h * 0.9);
    
    ctx.strokeStyle = colors.cellWall.dark;
    ctx.lineWidth = wallHighlight ? 5 : 3;
    ctx.strokeRect(w * 0.05, h * 0.05, w * 0.9, h * 0.9);
    
    // Cell wall texture (cellulose fibers)
    ctx.strokeStyle = 'rgba(107, 142, 107, 0.3)';
    ctx.lineWidth = 1;
    for(let i = 0; i < 20; i++) {
      const x = w * 0.05 + Math.random() * w * 0.9;
      const y = h * 0.05;
      ctx.beginPath();
      ctx.moveTo(x, y);
      ctx.lineTo(x + w * 0.02, h * 0.95);
      ctx.stroke();
    }
    
    // Cell membrane (inside cell wall)
    ctx.strokeStyle = colors.membrane.dark;
    ctx.lineWidth = 2;
    ctx.strokeRect(w * 0.08, h * 0.08, w * 0.84, h * 0.84);
    
    // Large central vacuole
    const vacHighlight = highlight === 'turgorPressure';
    const vacGradient = ctx.createRadialGradient(w * 0.5, h * 0.5, 0, w * 0.5, h * 0.5, w * 0.35);
    vacGradient.addColorStop(0, vacHighlight ? colors.vacuole.light : colors.vacuole.base);
    vacGradient.addColorStop(1, colors.vacuole.dark);
    
    ctx.fillStyle = vacGradient;
    ctx.fillRect(w * 0.15, h * 0.15, w * 0.7, h * 0.7);
    
    ctx.strokeStyle = colors.vacuole.dark;
    ctx.lineWidth = vacHighlight ? 3 : 2;
    ctx.strokeRect(w * 0.15, h * 0.15, w * 0.7, h * 0.7);
    
    // Cytoplasm (thin layer around vacuole)
    ctx.fillStyle = colors.cytoplasm.base;
    ctx.fillRect(w * 0.08, h * 0.08, w * 0.07, h * 0.84); // left
    ctx.fillRect(w * 0.85, h * 0.08, w * 0.07, h * 0.84); // right
    ctx.fillRect(w * 0.08, h * 0.08, w * 0.84, h * 0.07); // top
    ctx.fillRect(w * 0.08, h * 0.85, w * 0.84, h * 0.07); // bottom
    
    // Nucleus (in cytoplasm)
    ctx.fillStyle = colors.nucleus.base;
    ctx.beginPath();
    ctx.arc(w * 0.2, h * 0.2, w * 0.08, 0, Math.PI * 2);
    ctx.fill();
    ctx.strokeStyle = colors.nucleus.dark;
    ctx.lineWidth = 2;
    ctx.stroke();
    
    // Chloroplasts (scattered in cytoplasm)
    const chloroHighlight = highlight === 'photosynthesis';
    const chloroPositions = [
      [w * 0.12, h * 0.5],
      [w * 0.88, h * 0.3],
      [w * 0.88, h * 0.7],
      [w * 0.5, h * 0.12],
      [w * 0.3, h * 0.88],
      [w * 0.7, h * 0.88]
    ];
    
    chloroPositions.forEach(([x, y]) => {
      ctx.fillStyle = chloroHighlight ? colors.chloroplast.light : colors.chloroplast.base;
      ctx.beginPath();
      ctx.ellipse(x, y, w * 0.04, w * 0.025, Math.random() * Math.PI, 0, Math.PI * 2);
      ctx.fill();
      ctx.strokeStyle = colors.chloroplast.dark;
      ctx.lineWidth = chloroHighlight ? 2 : 1;
      ctx.stroke();
    });
    
    // Plasmodesmata (connections through cell wall)
    ctx.fillStyle = colors.membrane.dark;
    const plasmoPositions = [
      [w * 0.05, h * 0.3],
      [w * 0.05, h * 0.7],
      [w * 0.95, h * 0.4],
      [w * 0.95, h * 0.6]
    ];
    
    plasmoPositions.forEach(([x, y]) => {
      ctx.beginPath();
      ctx.arc(x, y, w * 0.01, 0, Math.PI * 2);
      ctx.fill();
    });
  }

  static drawCellWall(ctx, color, width, height) {
    const w = width, h = height;
    
    // Primary cell wall
    ctx.fillStyle = color.base;
    ctx.fillRect(w * 0.1, h * 0.1, w * 0.8, h * 0.8);
    
    // Cellulose microfibrils (layered structure)
    ctx.strokeStyle = color.dark;
    ctx.lineWidth = 2;
    
    // Layer 1 - vertical fibers
    for(let i = 0; i < 15; i++) {
      const x = w * 0.1 + (i / 14) * w * 0.8;
      ctx.beginPath();
      ctx.moveTo(x, h * 0.1);
      ctx.lineTo(x, h * 0.9);
      ctx.stroke();
    }
    
    // Layer 2 - horizontal fibers (with transparency)
    ctx.globalAlpha = 0.6;
    ctx.strokeStyle = color.light;
    for(let i = 0; i < 15; i++) {
      const y = h * 0.1 + (i / 14) * h * 0.8;
      ctx.beginPath();
      ctx.moveTo(w * 0.1, y);
      ctx.lineTo(w * 0.9, y);
      ctx.stroke();
    }
    ctx.globalAlpha = 1.0;
    
    // Layer 3 - diagonal fibers
    ctx.strokeStyle = 'rgba(107, 142, 107, 0.4)';
    for(let i = 0; i < 10; i++) {
      ctx.beginPath();
      ctx.moveTo(w * 0.1 + (i / 10) * w * 0.8, h * 0.1);
      ctx.lineTo(w * 0.1, h * 0.1 + (i / 10) * h * 0.8);
      ctx.stroke();
      
      ctx.beginPath();
      ctx.moveTo(w * 0.9, h * 0.1 + (i / 10) * h * 0.8);
      ctx.lineTo(w * 0.9 - (i / 10) * w * 0.8, h * 0.9);
      ctx.stroke();
    }
    
    // Middle lamella (between adjacent cells)
    ctx.fillStyle = 'rgba(139, 69, 19, 0.3)';
    ctx.fillRect(w * 0.08, h * 0.1, w * 0.04, h * 0.8);
    
    // Pectin deposits
    ctx.fillStyle = 'rgba(160, 82, 45, 0.5)';
    for(let i = 0; i < 10; i++) {
      const y = h * 0.1 + (i / 9) * h * 0.8;
      ctx.beginPath();
      ctx.arc(w * 0.1, y, w * 0.015, 0, Math.PI * 2);
      ctx.fill();
    }
    
    // Plasmodesmata channels
    ctx.fillStyle = '#000000';
    for(let i = 0; i < 5; i++) {
      const y = h * 0.2 + (i / 4) * h * 0.6;
      ctx.beginPath();
      ctx.ellipse(w * 0.1, y, w * 0.01, h * 0.02, 0, 0, Math.PI * 2);
      ctx.fill();
    }
    
    // Border
    ctx.strokeStyle = color.dark;
    ctx.lineWidth = 4;
    ctx.strokeRect(w * 0.1, h * 0.1, w * 0.8, h * 0.8);
    
    // Labels
    ctx.fillStyle = '#000000';
    ctx.font = `${w * 0.04}px Arial`;
    ctx.textAlign = 'center';
    ctx.fillText('Cellulose Microfibrils', w * 0.5, h * 0.05);
    ctx.fillText('Middle Lamella', w * 0.05, h * 0.5);
  }

  static drawChloroplast(ctx, color, width, height) {
    const w = width, h = height;
    const centerX = w / 2, centerY = h / 2;
    
    // Outer membrane
    const outerGradient = ctx.createRadialGradient(centerX, centerY, 0, centerX, centerY, w * 0.4);
    outerGradient.addColorStop(0, color.light);
    outerGradient.addColorStop(0.7, color.base);
    outerGradient.addColorStop(1, color.dark);
    
    ctx.fillStyle = outerGradient;
    ctx.beginPath();
    ctx.ellipse(centerX, centerY, w * 0.4, h * 0.25, 0, 0, Math.PI * 2);
    ctx.fill();
    
    ctx.strokeStyle = color.dark;
    ctx.lineWidth = 3;
    ctx.stroke();
    
    // Inner membrane
    ctx.beginPath();
    ctx.ellipse(centerX, centerY, w * 0.38, h * 0.23, 0, 0, Math.PI * 2);
    ctx.strokeStyle = color.dark;
    ctx.lineWidth = 2;
    ctx.stroke();
    
    // Stroma (inner fluid)
    ctx.fillStyle = 'rgba(34, 139, 34, 0.3)';
    ctx.beginPath();
    ctx.ellipse(centerX, centerY, w * 0.36, h * 0.21, 0, 0, Math.PI * 2);
    ctx.fill();
    
    // Thylakoids (stacked grana)
    ctx.fillStyle = color.dark;
    ctx.strokeStyle = '#004000';
    ctx.lineWidth = 1;
    
    // Draw 4 grana stacks
    const granaPositions = [
      [centerX - w * 0.2, centerY - h * 0.08],
      [centerX + w * 0.15, centerY - h * 0.05],
      [centerX - w * 0.1, centerY + h * 0.08],
      [centerX + w * 0.2, centerY + h * 0.1]
    ];
    
    granaPositions.forEach(([x, y]) => {
      // Stack of thylakoid discs
      for(let i = 0; i < 6; i++) {
        const discY = y + i * h * 0.012;
        ctx.fillStyle = i % 2 === 0 ? color.dark : 'rgba(0, 100, 0, 0.8)';
        ctx.beginPath();
        ctx.ellipse(x, discY, w * 0.06, h * 0.008, 0, 0, Math.PI * 2);
        ctx.fill();
        ctx.stroke();
      }
    });
    
    // Stroma lamellae (connecting thylakoids)
    ctx.strokeStyle = 'rgba(0, 100, 0, 0.6)';
    ctx.lineWidth = 2;
    for(let i = 0; i < 3; i++) {
      const fromGrana = granaPositions[i];
      const toGrana = granaPositions[i + 1];
      if(toGrana) {
        ctx.beginPath();
        ctx.moveTo(fromGrana[0] + w * 0.06, fromGrana[1] + h * 0.03);
        ctx.lineTo(toGrana[0] - w * 0.06, toGrana[1] + h * 0.03);
        ctx.stroke();
      }
    }
    
    // Starch granules
    ctx.fillStyle = 'rgba(255, 255, 255, 0.7)';
    for(let i = 0; i < 4; i++) {
      const angle = (i / 4) * Math.PI * 2;
      const r = w * 0.25;
      const x = centerX + Math.cos(angle) * r;
      const y = centerY + Math.sin(angle) * r * 0.6;
      ctx.beginPath();
      ctx.arc(x, y, w * 0.03, 0, Math.PI * 2);
      ctx.fill();
      ctx.strokeStyle = 'rgba(200, 200, 200, 0.8)';
      ctx.stroke();
    }
    
    // DNA (chloroplast genome)
    ctx.strokeStyle = 'rgba(255, 255, 0, 0.5)';
    ctx.lineWidth = 1.5;
    ctx.beginPath();
    ctx.arc(centerX, centerY, w * 0.15, 0, Math.PI * 2);
    ctx.stroke();
    
    // Labels
    ctx.fillStyle = '#000000';
    ctx.font = `${w * 0.035}px Arial`;
    ctx.textAlign = 'center';
    ctx.fillText('Grana (Thylakoids)', centerX, centerY - h * 0.35);
    ctx.fillText('Stroma', centerX, centerY + h * 0.35);
  }

  static drawVacuole(ctx, color, width, height) {
    const w = width, h = height;
    const centerX = w / 2, centerY = h / 2;
    
    // Tonoplast (vacuolar membrane)
    const gradient = ctx.createRadialGradient(centerX, centerY, 0, centerX, centerY, w * 0.45);
    gradient.addColorStop(0, color.light);
    gradient.addColorStop(0.5, color.base);
    gradient.addColorStop(1, color.dark);
    
    ctx.fillStyle = gradient;
    ctx.beginPath();
    ctx.arc(centerX, centerY, w * 0.45, 0, Math.PI * 2);
    ctx.fill();
    
    ctx.strokeStyle = color.dark;
    ctx.lineWidth = 3;
    ctx.stroke();
    
    // Cell sap (water + dissolved substances)
    ctx.fillStyle = 'rgba(135, 206, 235, 0.4)';
    ctx.beginPath();
    ctx.arc(centerX, centerY, w * 0.42, 0, Math.PI * 2);
    ctx.fill();
    
    // Dissolved pigments (anthocyanins)
    ctx.fillStyle = 'rgba(138, 43, 226, 0.3)';
    for(let i = 0; i < 10; i++) {
      const angle = (i / 10) * Math.PI * 2;
      const r = w * 0.2 + Math.random() * w * 0.15;
      const x = centerX + Math.cos(angle) * r;
      const y = centerY + Math.sin(angle) * r;
      ctx.beginPath();
      ctx.arc(x, y, w * 0.02, 0, Math.PI * 2);
      ctx.fill();
    }
    
    // Sugars and salts (represented as crystals)
    ctx.fillStyle = 'rgba(255, 255, 255, 0.6)';
    for(let i = 0; i < 15; i++) {
      const angle = Math.random() * Math.PI * 2;
      const r = Math.random() * w * 0.35;
      const x = centerX + Math.cos(angle) * r;
      const y = centerY + Math.sin(angle) * r;
      
      // Crystal shape
      ctx.save();
      ctx.translate(x, y);
      ctx.rotate(Math.random() * Math.PI);
      ctx.beginPath();
      ctx.moveTo(0, -w * 0.015);
      ctx.lineTo(w * 0.01, 0);
      ctx.lineTo(0, w * 0.015);
      ctx.lineTo(-w * 0.01, 0);
      ctx.closePath();
      ctx.fill();
      ctx.strokeStyle = 'rgba(200, 200, 200, 0.8)';
      ctx.lineWidth = 0.5;
      ctx.stroke();
      ctx.restore();
    }
    
    // Organic acids
    ctx.strokeStyle = 'rgba(255, 255, 0, 0.4)';
    ctx.lineWidth = 2;
    for(let i = 0; i < 8; i++) {
      const angle = Math.random() * Math.PI * 2;
      const r = Math.random() * w * 0.3;
      const x = centerX + Math.cos(angle) * r;
      const y = centerY + Math.sin(angle) * r;
      
      ctx.beginPath();
      ctx.moveTo(x, y);
      ctx.lineTo(x + w * 0.03, y + h * 0.02);
      ctx.stroke();
    }
    
    // Turgor pressure arrows (showing pressure against cell wall)
    ctx.strokeStyle = '#FF0000';
    ctx.fillStyle = '#FF0000';
    ctx.lineWidth = 2;
    
    const arrowPositions = [
      [centerX, centerY - h * 0.35, 0, -1],      // up
      [centerX, centerY + h * 0.35, 0, 1],       // down
      [centerX - w * 0.35, centerY, -1, 0],      // left
      [centerX + w * 0.35, centerY, 1, 0]        // right
    ];
    
    arrowPositions.forEach(([x, y, dx, dy]) => {
      // Arrow line
      ctx.beginPath();
      ctx.moveTo(x - dx * w * 0.05, y - dy * h * 0.05);
      ctx.lineTo(x + dx * w * 0.05, y + dy * h * 0.05);
      ctx.stroke();
      
      // Arrow head
      ctx.beginPath();
      ctx.moveTo(x + dx * w * 0.05, y + dy * h * 0.05);
      ctx.lineTo(x + dx * w * 0.03 - dy * w * 0.01, y + dy * h * 0.03 - dx * h * 0.01);
      ctx.lineTo(x + dx * w * 0.03 + dy * w * 0.01, y + dy * h * 0.03 + dx * h * 0.01);
      ctx.closePath();
      ctx.fill();
    });
    
    // Labels
    ctx.fillStyle = '#000000';
    ctx.font = `${w * 0.04}px Arial`;
    ctx.textAlign = 'center';
    ctx.fillText('Tonoplast', centerX, centerY - h * 0.48);
    ctx.fillText('Cell Sap', centerX, centerY);
    ctx.font = `${w * 0.035}px Arial`;
    ctx.fillText('(Water, Sugars, Salts, Pigments)', centerX, centerY + h * 0.48);
  }

  static drawPlasmodesmata(ctx, colors, width, height) {
    const w = width, h = height;
    
    // Two adjacent cell walls
    ctx.fillStyle = colors.cellWall.base;
    ctx.fillRect(w * 0.1, h * 0.1, w * 0.35, h * 0.8);  // Left cell wall
    ctx.fillRect(w * 0.55, h * 0.1, w * 0.35, h * 0.8); // Right cell wall
    
    ctx.strokeStyle = colors.cellWall.dark;
    ctx.lineWidth = 3;
    ctx.strokeRect(w * 0.1, h * 0.1, w * 0.35, h * 0.8);
    ctx.strokeRect(w * 0.55, h * 0.1, w * 0.35, h * 0.8);
    
    // Cell membranes
    ctx.strokeStyle = colors.membrane.dark;
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(w * 0.15, h * 0.1);
    ctx.lineTo(w * 0.15, h * 0.9);
    ctx.stroke();
    
    ctx.beginPath();
    ctx.moveTo(w * 0.85, h * 0.1);
    ctx.lineTo(w * 0.85, h * 0.9);
    ctx.stroke();
    
    // Cytoplasm
    ctx.fillStyle = colors.cytoplasm.base;
    ctx.fillRect(w * 0.15, h * 0.1, w * 0.3, h * 0.8);  // Left cell
    ctx.fillRect(w * 0.55, h * 0.1, w * 0.3, h * 0.8);  // Right cell
    
    // Middle lamella (between walls)
    ctx.fillStyle = 'rgba(139, 69, 19, 0.4)';
    ctx.fillRect(w * 0.45, h * 0.1, w * 0.1, h * 0.8);
    
    // Plasmodesmata channel (enlarged view in center)
    const channelCenterX = w * 0.5;
    const channelCenterY = h * 0.5;
    
    // Channel outline
    ctx.strokeStyle = colors.membrane.dark;
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.moveTo(w * 0.15, channelCenterY - h * 0.08);
    ctx.lineTo(w * 0.85, channelCenterY - h * 0.08);
    ctx.stroke();
    
    ctx.beginPath();
    ctx.moveTo(w * 0.15, channelCenterY + h * 0.08);
    ctx.lineTo(w * 0.85, channelCenterY + h * 0.08);
    ctx.stroke();
    
    // Desmotubule (ER connection through center)
    ctx.strokeStyle = '#8BC6EC';
    ctx.lineWidth = 4;
    ctx.beginPath();
    ctx.moveTo(w * 0.15, channelCenterY);
    ctx.lineTo(w * 0.85, channelCenterY);
    ctx.stroke();
    
    // Cytoplasmic sleeve (space around desmotubule)
    ctx.fillStyle = 'rgba(245, 230, 211, 0.6)';
    ctx.fillRect(w * 0.15, channelCenterY - h * 0.06, w * 0.7, h * 0.03);
    ctx.fillRect(w * 0.15, channelCenterY + h * 0.03, w * 0.7, h * 0.03);
    
    // Molecules passing through
    const moleculeColors = ['#FF6347', '#4169E1', '#32CD32', '#FFD700'];
    for(let i = 0; i < 8; i++) {
      const x = w * 0.15 + (i / 7) * w * 0.7;
      const y = channelCenterY + (Math.random() - 0.5) * h * 0.1;
      ctx.fillStyle = moleculeColors[i % moleculeColors.length];
      ctx.beginPath();
      ctx.arc(x, y, w * 0.012, 0, Math.PI * 2);
      ctx.fill();
    }
    
    // Additional plasmodesmata channels (smaller, scattered)
    const additionalChannels = [
      [h * 0.25],
      [h * 0.75]
    ];
    
    additionalChannels.forEach(([y]) => {
      ctx.strokeStyle = colors.membrane.dark;
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(w * 0.15, y);
      ctx.lineTo(w * 0.85, y);
      ctx.stroke();
      
      // Desmotubule
      ctx.strokeStyle = '#8BC6EC';
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(w * 0.15, y);
      ctx.lineTo(w * 0.85, y);
      ctx.stroke();
    });
    
    // Labels
    ctx.fillStyle = '#000000';
    ctx.font = `${w * 0.03}px Arial`;
    ctx.textAlign = 'center';
    ctx.fillText('Cell Wall', w * 0.275, h * 0.05);
    ctx.fillText('Cell Wall', w * 0.725, h * 0.05);
    ctx.fillText('Plasma Membrane', w * 0.15, h * 0.95);
    ctx.fillText('Plasma Membrane', w * 0.85, h * 0.95);
    ctx.fillText('Desmotubule (ER)', channelCenterX, channelCenterY - h * 0.12);
    ctx.fillText('Cytoplasmic Sleeve', channelCenterX, channelCenterY + h * 0.15);
  }

  // CELL MEMBRANE METHODS
  static drawCellMembrane(ctx, x, y, width, height, view, componentHighlight) {
    ctx.save();
    ctx.translate(x, y);
    
    const colors = {
      phospholipid: { head: '#FF6B9D', tail: '#FFD93D' },
      protein: { integral: '#4ECDC4', peripheral: '#95E1D3' },
      cholesterol: { base: '#F38181', dark: '#AA5353' },
      carbohydrate: { base: '#A8E6CF', dark: '#56C596' }
    };
    
    switch(view) {
      case 'fluidMosaic':
        this.drawFluidMosaicModel(ctx, colors, width, height, componentHighlight);
        break;
      case 'phospholipidBilayer':
        this.drawPhospholipidBilayer(ctx, colors, width, height);
        break;
      case 'proteins':
        this.drawMembraneProteins(ctx, colors, width, height);
        break;
      case 'transportMechanisms':
        this.drawTransportMechanisms(ctx, colors, width, height);
        break;
    }
    
    ctx.restore();
  }

  static drawFluidMosaicModel(ctx, colors, width, height, highlight) {
    const w = width, h = height;
    
    // Phospholipid bilayer background
    const bilayerTop = h * 0.3;
    const bilayerBottom = h * 0.7;
    const bilayerMiddle = h * 0.5;
    
    // Draw phospholipids
    const phosphoHighlight = highlight === 'phospholipids' || highlight === 'none';
    const lipidCount = 25;
    
    for(let i = 0; i < lipidCount; i++) {
      const x = (i / lipidCount) * w;
      
      // Top layer (heads facing out)
      ctx.fillStyle = phosphoHighlight ? colors.phospholipid.head : 'rgba(255, 107, 157, 0.5)';
      ctx.beginPath();
      ctx.arc(x, bilayerTop, w * 0.015, 0, Math.PI * 2);
      ctx.fill();
      
      // Tails pointing inward
      ctx.strokeStyle = colors.phospholipid.tail;
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(x, bilayerTop);
      ctx.lineTo(x - w * 0.005, bilayerMiddle);
      ctx.stroke();
      
      ctx.beginPath();
      ctx.moveTo(x, bilayerTop);
      ctx.lineTo(x + w * 0.005, bilayerMiddle);
      ctx.stroke();
      
      // Bottom layer (heads facing out)
      ctx.fillStyle = phosphoHighlight ? colors.phospholipid.head : 'rgba(255, 107, 157, 0.5)';
      ctx.beginPath();
      ctx.arc(x, bilayerBottom, w * 0.015, 0, Math.PI * 2);
      ctx.fill();
      
      // Tails pointing inward
      ctx.strokeStyle = colors.phospholipid.tail;
      ctx.beginPath();
      ctx.moveTo(x, bilayerBottom);
      ctx.lineTo(x - w * 0.005, bilayerMiddle);
      ctx.stroke();
      
      ctx.beginPath();
      ctx.moveTo(x, bilayerBottom);
      ctx.lineTo(x + w * 0.005, bilayerMiddle);
      ctx.stroke();
    }
    
    // Cholesterol molecules
    const cholHighlight = highlight === 'cholesterol';
    const cholPositions = [w * 0.15, w * 0.35, w * 0.55, w * 0.75, w * 0.9];
    
    cholPositions.forEach(x => {
      ctx.fillStyle = cholHighlight ? colors.cholesterol.base : 'rgba(243, 129, 129, 0.6)';
      
      // Ring structure (simplified)
      ctx.beginPath();
      ctx.arc(x, bilayerMiddle - h * 0.05, w * 0.012, 0, Math.PI * 2);
      ctx.fill();
      
      ctx.strokeStyle = colors.cholesterol.dark;
      ctx.lineWidth = cholHighlight ? 3 : 2;
      ctx.beginPath();
      ctx.moveTo(x, bilayerMiddle - h * 0.05);
      ctx.lineTo(x, bilayerTop + h * 0.02);
      ctx.stroke();
      
      // Hydroxyl group
      ctx.fillStyle = colors.cholesterol.dark;
      ctx.beginPath();
      ctx.arc(x, bilayerTop + h * 0.02, w * 0.008, 0, Math.PI * 2);
      ctx.fill();
    });
    
    // Integral proteins (transmembrane)
    const integralHighlight = highlight === 'integralProteins';
    const integralPositions = [w * 0.25, w * 0.65];
    
    integralPositions.forEach(x => {
      ctx.fillStyle = integralHighlight ? colors.protein.integral : 'rgba(78, 205, 196, 0.7)';
      
      // Protein spanning membrane
      ctx.beginPath();
      ctx.roundRect(x - w * 0.03, bilayerTop - h * 0.05, w * 0.06, h * 0.5, w * 0.01);
      ctx.fill();
      
      ctx.strokeStyle = '#2C7A7B';
      ctx.lineWidth = integralHighlight ? 3 : 2;
      ctx.stroke();
      
      // Channel/pore through center
      ctx.fillStyle = 'rgba(255, 255, 255, 0.5)';
      ctx.beginPath();
      ctx.ellipse(x, bilayerMiddle, w * 0.01, h * 0.15, 0, 0, Math.PI * 2);
      ctx.fill();
    });
    
    // Peripheral proteins
    const peripheralHighlight = highlight === 'peripheralProteins';
    
    // Top peripheral protein
    ctx.fillStyle = peripheralHighlight ? colors.protein.peripheral : 'rgba(149, 225, 211, 0.7)';
    ctx.beginPath();
    ctx.ellipse(w * 0.45, bilayerTop - h * 0.08, w * 0.05, h * 0.06, 0, 0, Math.PI * 2);
    ctx.fill();
    
    ctx.strokeStyle = '#66B2A3';
    ctx.lineWidth = peripheralHighlight ? 3 : 2;
    ctx.stroke();
    
    // Bottom peripheral protein
    ctx.fillStyle = peripheralHighlight ? colors.protein.peripheral : 'rgba(149, 225, 211, 0.7)';
    ctx.beginPath();
    ctx.ellipse(w * 0.8, bilayerBottom + h * 0.08, w * 0.05, h * 0.06, 0, 0, Math.PI * 2);
    ctx.fill();
    ctx.stroke();
    
    // Glycoproteins (carbohydrate chains on proteins)
    const glycoHighlight = highlight === 'glycoproteins';
    
    // Carbohydrate chain on integral protein
    ctx.strokeStyle = glycoHighlight ? colors.carbohydrate.base : 'rgba(168, 230, 207, 0.7)';
    ctx.lineWidth = glycoHighlight ? 3 : 2;
    
    const chainX = w * 0.25;
    const chainStartY = bilayerTop - h * 0.05;
    
    ctx.beginPath();
    ctx.moveTo(chainX, chainStartY);
    ctx.quadraticCurveTo(chainX + w * 0.03, chainStartY - h * 0.05, chainX + w * 0.04, chainStartY - h * 0.1);
    ctx.stroke();
    
    // Sugar molecules
    ctx.fillStyle = glycoHighlight ? colors.carbohydrate.dark : 'rgba(86, 197, 150, 0.7)';
    for(let i = 0; i < 4; i++) {
      const t = i / 3;
      const x = chainX + t * w * 0.04;
      const y = chainStartY - (t * t) * h * 0.1;
      ctx.beginPath();
      ctx.arc(x, y, w * 0.008, 0, Math.PI * 2);
      ctx.fill();
    }
    
    // Glycolipids (carbohydrate chains on lipids)
    const glycolipidPositions = [w * 0.5, w * 0.85];
    
    glycolipidPositions.forEach(x => {
      ctx.strokeStyle = glycoHighlight ? colors.carbohydrate.base : 'rgba(168, 230, 207, 0.7)';
      ctx.lineWidth = glycoHighlight ? 3 : 2;
      
      ctx.beginPath();
      ctx.moveTo(x, bilayerTop);
      ctx.lineTo(x, bilayerTop - h * 0.08);
      ctx.stroke();
      
      ctx.fillStyle = glycoHighlight ? colors.carbohydrate.dark : 'rgba(86, 197, 150, 0.7)';
      ctx.beginPath();
      ctx.arc(x, bilayerTop - h * 0.08, w * 0.008, 0, Math.PI * 2);
      ctx.fill();
    });
    
    // Environment labels
    ctx.fillStyle = '#000000';
    ctx.font = `${w * 0.035}px Arial`;
    ctx.textAlign = 'center';
    ctx.fillText('Extracellular Fluid', w * 0.5, h * 0.1);
    ctx.fillText('Cytoplasm', w * 0.5, h * 0.9);
  }

  static drawPhospholipidBilayer(ctx, colors, width, height) {
    const w = width, h = height;
    const bilayerMiddle = h * 0.5;
    
    // Draw detailed phospholipid molecules
    const lipidCount = 20;
    
    for(let i = 0; i < lipidCount; i++) {
      const x = w * 0.1 + (i / (lipidCount - 1)) * w * 0.8;
      
      // Top layer phospholipid
      this.drawPhospholipid(ctx, x, h * 0.25, w * 0.03, h * 0.25, true, colors);
      
      // Bottom layer phospholipid (flipped)
      this.drawPhospholipid(ctx, x, h * 0.75, w * 0.03, h * 0.25, false, colors);
    }
    
    // Hydrophobic interior label
    ctx.fillStyle = 'rgba(255, 217, 61, 0.2)';
    ctx.fillRect(w * 0.1, bilayerMiddle - h * 0.1, w * 0.8, h * 0.2);
    
    ctx.fillStyle = '#000000';
    ctx.font = `${w * 0.03}px Arial`;
    ctx.textAlign = 'center';
    ctx.fillText('Hydrophobic (water-repelling)', w * 0.5, bilayerMiddle - h * 0.02);
    ctx.fillText('Fatty acid tails', w * 0.5, bilayerMiddle + h * 0.02);
    
    // Hydrophilic exterior labels
    ctx.fillText('Hydrophilic (water-loving)', w * 0.5, h * 0.12);
    ctx.fillText('Phosphate heads', w * 0.5, h * 0.16);
    
    ctx.fillText('Hydrophilic (water-loving)', w * 0.5, h * 0.84);
    ctx.fillText('Phosphate heads', w * 0.5, h * 0.88);
    
    // Detailed phospholipid structure (enlarged view)
    const detailX = w * 0.75;
    const detailY = h * 0.5;
    
    // Draw one phospholipid in detail
    this.drawDetailedPhospholipid(ctx, detailX, detailY, w * 0.08, h * 0.35, colors);
  }

  static drawPhospholipid(ctx, x, y, width, height, topLayer, colors) {
    // Phosphate head (circle)
    ctx.fillStyle = colors.phospholipid.head;
    ctx.beginPath();
    ctx.arc(x, y, width * 0.5, 0, Math.PI * 2);
    ctx.fill();
    
    ctx.strokeStyle = '#CC5577';
    ctx.lineWidth = 1;
    ctx.stroke();
    
    // Glycerol backbone
    const backboneY = topLayer ? y + width * 0.5 : y - width * 0.5;
    ctx.fillStyle = '#8B7355';
    ctx.fillRect(x - width * 0.3, backboneY - width * 0.1, width * 0.6, width * 0.2);
    
    // Two fatty acid tails
    ctx.strokeStyle = colors.phospholipid.tail;
    ctx.lineWidth = width * 0.3;
    ctx.lineCap = 'round';
    
    const direction = topLayer ? 1 : -1;
    
    // Tail 1 (saturated - straight)
    ctx.beginPath();
    ctx.moveTo(x - width * 0.2, backboneY);
    ctx.lineTo(x - width * 0.2, backboneY + direction * height);
    ctx.stroke();
    
    // Tail 2 (unsaturated - kinked)
    ctx.beginPath();
    ctx.moveTo(x + width * 0.2, backboneY);
    ctx.lineTo(x + width * 0.2, backboneY + direction * height * 0.5);
    ctx.lineTo(x + width * 0.4, backboneY + direction * height * 0.7);
    ctx.lineTo(x + width * 0.4, backboneY + direction * height);
    ctx.stroke();
  }

  static drawDetailedPhospholipid(ctx, x, y, width, height, colors) {
    // Choline group
    ctx.fillStyle = '#9370DB';
    ctx.beginPath();
    ctx.arc(x, y - height * 0.4, width * 0.15, 0, Math.PI * 2);
    ctx.fill();
    
    ctx.fillStyle = '#000000';
    ctx.font = `${width * 0.12}px Arial`;
    ctx.textAlign = 'center';
    ctx.fillText('Choline', x + width * 0.5, y - height * 0.38);
    
    // Phosphate group
    ctx.fillStyle = colors.phospholipid.head;
    ctx.beginPath();
    ctx.arc(x, y - height * 0.25, width * 0.2, 0, Math.PI * 2);
    ctx.fill();
    
    ctx.fillStyle = '#000000';
    ctx.fillText('Phosphate', x + width * 0.5, y - height * 0.23);
    
    // Glycerol
    ctx.fillStyle = '#8B7355';
    ctx.fillRect(x - width * 0.25, y - height * 0.1, width * 0.5, width * 0.15);
    
    ctx.fillStyle = '#000000';
    ctx.fillText('Glycerol', x + width * 0.5, y - height * 0.02);
    
    // Fatty acid tails with labels
    ctx.strokeStyle = colors.phospholipid.tail;
    ctx.lineWidth = width * 0.15;
    
    ctx.beginPath();
    ctx.moveTo(x - width * 0.15, y);
    ctx.lineTo(x - width * 0.15, y + height * 0.4);
    ctx.stroke();
    
    ctx.fillStyle = '#000000';
    ctx.font = `${width * 0.1}px Arial`;
    ctx.fillText('Fatty acid', x + width * 0.3, y + height * 0.15);
    ctx.fillText('(saturated)', x + width * 0.3, y + height * 0.22);
    
    ctx.beginPath();
    ctx.moveTo(x + width * 0.15, y);
    ctx.lineTo(x + width * 0.15, y + height * 0.2);
    ctx.lineTo(x + width * 0.3, y + height * 0.25);
    ctx.lineTo(x + width * 0.3, y + height * 0.4);
    ctx.stroke();
    
    ctx.fillText('Fatty acid', x + width * 0.65, y + height * 0.3);
    ctx.fillText('(unsaturated)', x + width * 0.65, y + height * 0.37);
  }

  static drawMembraneProteins(ctx, colors, width, height) {
    const w = width, h = height;
    
    // Membrane background (simplified)
    ctx.fillStyle = 'rgba(255, 107, 157, 0.3)';
    ctx.fillRect(0, h * 0.35, w, h * 0.3);
    
    ctx.strokeStyle = '#CC5577';
    ctx.lineWidth = 2;
    ctx.strokeRect(0, h * 0.35, w, h * 0.3);
    
    // Integral protein (channel)
    ctx.fillStyle = colors.protein.integral;
    ctx.beginPath();
    ctx.roundRect(w * 0.15, h * 0.25, w * 0.15, h * 0.5, w * 0.02);
    ctx.fill();
    
    ctx.strokeStyle = '#2C7A7B';
    ctx.lineWidth = 3;
    ctx.stroke();
    
    // Channel pore
    ctx.fillStyle = 'rgba(255, 255, 255, 0.7)';
    ctx.beginPath();
    ctx.ellipse(w * 0.225, h * 0.5, w * 0.03, h * 0.2, 0, 0, Math.PI * 2);
    ctx.fill();
    
    // Ions passing through
    const ions = [
      { y: h * 0.4, color: '#FF0000', label: 'Na+' },
      { y: h * 0.5, color: '#0000FF', label: 'K+' },
      { y: h * 0.6, color: '#FF0000', label: 'Na+' }
    ];
    
    ions.forEach(ion => {
      ctx.fillStyle = ion.color;
      ctx.beginPath();
      ctx.arc(w * 0.225, ion.y, w * 0.015, 0, Math.PI * 2);
      ctx.fill();
      
      ctx.fillStyle = '#FFFFFF';
      ctx.font = `${w * 0.015}px Arial`;
      ctx.textAlign = 'center';
      ctx.fillText(ion.label, w * 0.225, ion.y + w * 0.005);
    });
    
    ctx.fillStyle = '#000000';
    ctx.font = `${w * 0.03}px Arial`;
    ctx.fillText('Channel Protein', w * 0.225, h * 0.15);
    
    // Carrier protein (with conformational change)
    const carrierX = w * 0.5;
    
    // State 1: Open to outside
    ctx.fillStyle = colors.protein.integral;
    ctx.beginPath();
    ctx.moveTo(carrierX - w * 0.06, h * 0.35);
    ctx.lineTo(carrierX - w * 0.06, h * 0.45);
    ctx.quadraticCurveTo(carrierX - w * 0.06, h * 0.5, carrierX, h * 0.5);
    ctx.quadraticCurveTo(carrierX + w * 0.06, h * 0.5, carrierX + w * 0.06, h * 0.45);
    ctx.lineTo(carrierX + w * 0.06, h * 0.35);
    ctx.lineTo(carrierX + w * 0.08, h * 0.3);
    ctx.lineTo(carrierX + w * 0.08, h * 0.25);
    ctx.lineTo(carrierX - w * 0.08, h * 0.25);
    ctx.lineTo(carrierX - w * 0.08, h * 0.3);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();
    
    // Glucose molecule
    ctx.fillStyle = '#FFD700';
    ctx.beginPath();
    ctx.arc(carrierX, h * 0.3, w * 0.02, 0, Math.PI * 2);
    ctx.fill();
    
    ctx.fillStyle = '#000000';
    ctx.font = `${w * 0.015}px Arial`;
    ctx.fillText('Glucose', carrierX, h * 0.22);
    
    // Arrow showing conformational change
    ctx.strokeStyle = '#000000';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(carrierX, h * 0.55);
    ctx.lineTo(carrierX, h * 0.6);
    ctx.stroke();
    
    ctx.fillStyle = '#000000';
    ctx.beginPath();
    ctx.moveTo(carrierX, h * 0.6);
    ctx.lineTo(carrierX - w * 0.01, h * 0.58);
    ctx.lineTo(carrierX + w * 0.01, h * 0.58);
    ctx.closePath();
    ctx.fill();
    
    // State 2: Open to inside
    ctx.fillStyle = colors.protein.integral;
    ctx.beginPath();
    ctx.moveTo(carrierX - w * 0.06, h * 0.65);
    ctx.lineTo(carrierX - w * 0.06, h * 0.55);
    ctx.quadraticCurveTo(carrierX - w * 0.06, h * 0.5, carrierX, h * 0.5);
    ctx.quadraticCurveTo(carrierX + w * 0.06, h * 0.5, carrierX + w * 0.06, h * 0.55);
    ctx.lineTo(carrierX + w * 0.06, h * 0.65);
    ctx.lineTo(carrierX + w * 0.08, h * 0.7);
    ctx.lineTo(carrierX + w * 0.08, h * 0.75);
    ctx.lineTo(carrierX - w * 0.08, h * 0.75);
    ctx.lineTo(carrierX - w * 0.08, h * 0.7);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();
    
    ctx.fillStyle = '#FFD700';
    ctx.beginPath();
    ctx.arc(carrierX, h * 0.7, w * 0.02, 0, Math.PI * 2);
    ctx.fill();
    
    ctx.fillStyle = '#000000';
    ctx.font = `${w * 0.03}px Arial`;
    ctx.fillText('Carrier Protein', carrierX, h * 0.15);
    
    // Peripheral protein
    ctx.fillStyle = colors.protein.peripheral;
    ctx.beginPath();
    ctx.ellipse(w * 0.8, h * 0.25, w * 0.08, h * 0.08, 0, 0, Math.PI * 2);
    ctx.fill();
    
    ctx.strokeStyle = '#66B2A3';
    ctx.lineWidth = 3;
    ctx.stroke();
    
    // Connection to membrane
    ctx.strokeStyle = '#66B2A3';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(w * 0.8, h * 0.33);
    ctx.lineTo(w * 0.8, h * 0.35);
    ctx.stroke();
    
    ctx.fillStyle = '#000000';
    ctx.font = `${w * 0.03}px Arial`;
    ctx.fillText('Peripheral Protein', w * 0.8, h * 0.15);
    
    // Environment labels
    ctx.font = `${w * 0.025}px Arial`;
    ctx.fillText('Extracellular', w * 0.5, h * 0.08);
    ctx.fillText('Intracellular', w * 0.5, h * 0.92);
  }

  static drawTransportMechanisms(ctx, colors, width, height) {
    const w = width, h = height;
    
    // Passive transport (left side)
    ctx.fillStyle = '#000000';
    ctx.font = `${w * 0.035}px Arial`;
    ctx.textAlign = 'center';
    ctx.fillText('PASSIVE TRANSPORT', w * 0.25, h * 0.08);
    ctx.font = `${w * 0.025}px Arial`;
    ctx.fillText('(No energy required)', w * 0.25, h * 0.12);
    
    // Simple diffusion
    this.drawSimpleDiffusion(ctx, w * 0.25, h * 0.35, w * 0.2, h * 0.25, colors);
    
    ctx.fillStyle = '#000000';
    ctx.font = `${w * 0.025}px Arial`;
    ctx.fillText('Simple Diffusion', w * 0.25, h * 0.65);
    
    // Active transport (right side)
    ctx.font = `${w * 0.035}px Arial`;
    ctx.fillText('ACTIVE TRANSPORT', w * 0.75, h * 0.08);
    ctx.font = `${w * 0.025}px Arial`;
    ctx.fillText('(Requires ATP energy)', w * 0.75, h * 0.12);
    
    // Sodium-potassium pump
    this.drawSodiumPotassiumPump(ctx, w * 0.75, h * 0.35, w * 0.2, h * 0.25, colors);
    
    ctx.fillStyle = '#000000';
    ctx.font = `${w * 0.025}px Arial`;
    ctx.fillText('Na+/K+ Pump', w * 0.75, h * 0.65);
  }

  static drawSimpleDiffusion(ctx, centerX, centerY, width, height, colors) {
    // Membrane
    ctx.fillStyle = 'rgba(255, 107, 157, 0.3)';
    ctx.fillRect(centerX - width * 0.5, centerY - height * 0.1, width, height * 0.2);
    
    ctx.strokeStyle = '#CC5577';
    ctx.lineWidth = 2;
    ctx.strokeRect(centerX - width * 0.5, centerY - height * 0.1, width, height * 0.2);
    
    // High concentration (top)
    ctx.fillStyle = '#4169E1';
    for(let i = 0; i < 15; i++) {
      const x = centerX - width * 0.4 + Math.random() * width * 0.8;
      const y = centerY - height * 0.5 + Math.random() * height * 0.3;
      ctx.beginPath();
      ctx.arc(x, y, width * 0.02, 0, Math.PI * 2);
      ctx.fill();
    }
    
    // Low concentration (bottom)
    for(let i = 0; i < 5; i++) {
      const x = centerX - width * 0.4 + Math.random() * width * 0.8;
      const y = centerY + height * 0.2 + Math.random() * height * 0.3;
      ctx.beginPath();
      ctx.arc(x, y, width * 0.02, 0, Math.PI * 2);
      ctx.fill();
    }
    
    // Molecules moving through membrane
    ctx.fillStyle = 'rgba(65, 105, 225, 0.7)';
    for(let i = 0; i < 3; i++) {
      const x = centerX - width * 0.2 + i * width * 0.2;
      ctx.beginPath();
      ctx.arc(x, centerY, width * 0.02, 0, Math.PI * 2);
      ctx.fill();
      
      // Arrow
      ctx.strokeStyle = '#000000';
      ctx.lineWidth = 1.5;
      ctx.beginPath();
      ctx.moveTo(x, centerY - height * 0.15);
      ctx.lineTo(x, centerY + height * 0.15);
      ctx.stroke();
      
      ctx.fillStyle = '#000000';
      ctx.beginPath();
      ctx.moveTo(x, centerY + height * 0.15);
      ctx.lineTo(x - width * 0.015, centerY + height * 0.13);
      ctx.lineTo(x + width * 0.015, centerY + height * 0.13);
      ctx.closePath();
      ctx.fill();
    }
    
    // Labels
    ctx.fillStyle = '#000000';
    ctx.font = `${width * 0.08}px Arial`;
    ctx.textAlign = 'center';
    ctx.fillText('High [C]', centerX, centerY - height * 0.55);
    ctx.fillText('Low [C]', centerX, centerY + height * 0.6);
  }

  static drawSodiumPotassiumPump(ctx, centerX, centerY, width, height, colors) {
    // Membrane
    ctx.fillStyle = 'rgba(255, 107, 157, 0.3)';
    ctx.fillRect(centerX - width * 0.5, centerY - height * 0.1, width, height * 0.2);
    
    ctx.strokeStyle = '#CC5577';
    ctx.lineWidth = 2;
    ctx.strokeRect(centerX - width * 0.5, centerY - height * 0.1, width, height * 0.2);
    
    // Pump protein
    ctx.fillStyle = colors.protein.integral;
    ctx.beginPath();
    ctx.roundRect(centerX - width * 0.15, centerY - height * 0.2, width * 0.3, height * 0.4, width * 0.02);
    ctx.fill();
    
    ctx.strokeStyle = '#2C7A7B';
    ctx.lineWidth = 3;
    ctx.stroke();
    
    // 3 Na+ ions moving out
    ctx.fillStyle = '#FF0000';
    for(let i = 0; i < 3; i++) {
      const x = centerX - width * 0.1 + i * width * 0.1;
      const y = centerY - height * 0.3;
      ctx.beginPath();
      ctx.arc(x, y, width * 0.025, 0, Math.PI * 2);
      ctx.fill();
      
      ctx.fillStyle = '#FFFFFF';
      ctx.font = `${width * 0.04}px Arial`;
      ctx.textAlign = 'center';
      ctx.fillText('Na+', x, y + width * 0.008);
      ctx.fillStyle = '#FF0000';
    }
    
    // 2 K+ ions moving in
    ctx.fillStyle = '#0000FF';
    for(let i = 0; i < 2; i++) {
      const x = centerX - width * 0.05 + i * width * 0.1;
      const y = centerY + height * 0.3;
      ctx.beginPath();
      ctx.arc(x, y, width * 0.025, 0, Math.PI * 2);
      ctx.fill();
      
      ctx.fillStyle = '#FFFFFF';
      ctx.font = `${width * 0.04}px Arial`;
      ctx.fillText('K+', x, y + width * 0.008);
      ctx.fillStyle = '#0000FF';
    }
    
    // ATP molecule
    ctx.fillStyle = '#FFD700';
    ctx.beginPath();
    ctx.arc(centerX + width * 0.25, centerY, width * 0.04, 0, Math.PI * 2);
    ctx.fill();
    
    ctx.fillStyle = '#000000';
    ctx.font = `${width * 0.05}px Arial`;
    ctx.textAlign = 'center';
    ctx.fillText('ATP', centerX + width * 0.25, centerY + width * 0.01);
    
    // Energy arrow
    ctx.strokeStyle = '#FFD700';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(centerX + width * 0.22, centerY);
    ctx.lineTo(centerX + width * 0.15, centerY);
    ctx.stroke();
    
    ctx.fillStyle = '#FFD700';
    ctx.beginPath();
    ctx.moveTo(centerX + width * 0.15, centerY);
    ctx.lineTo(centerX + width * 0.17, centerY - width * 0.015);
    ctx.lineTo(centerX + width * 0.17, centerY + width * 0.015);
    ctx.closePath();
    ctx.fill();
    
    // Direction arrows
    ctx.strokeStyle = '#000000';
    ctx.lineWidth = 2;
    
    // Na+ out
    ctx.beginPath();
    ctx.moveTo(centerX, centerY - height * 0.25);
    ctx.lineTo(centerX, centerY - height * 0.4);
    ctx.stroke();
    
    ctx.fillStyle = '#000000';
    ctx.beginPath();
    ctx.moveTo(centerX, centerY - height * 0.4);
    ctx.lineTo(centerX - width * 0.02, centerY - height * 0.38);
    ctx.lineTo(centerX + width * 0.02, centerY - height * 0.38);
    ctx.closePath();
    ctx.fill();
    
    // K+ in
    ctx.strokeStyle = '#000000';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(centerX, centerY + height * 0.25);
    ctx.lineTo(centerX, centerY + height * 0.4);
    ctx.stroke();
    
    ctx.fillStyle = '#000000';
    ctx.beginPath();
    ctx.moveTo(centerX, centerY + height * 0.25);
    ctx.lineTo(centerX - width * 0.02, centerY + height * 0.27);
    ctx.lineTo(centerX + width * 0.02, centerY + height * 0.27);
    ctx.closePath();
    ctx.fill();
    
    // Labels
    ctx.fillStyle = '#000000';
    ctx.font = `${width * 0.07}px Arial`;
    ctx.textAlign = 'center';
    ctx.fillText('3 Na+ out', centerX, centerY - height * 0.48);
    ctx.fillText('2 K+ in', centerX, centerY + height * 0.52);
  }
}


