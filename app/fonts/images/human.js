import { createCanvas } from '@napi-rs/canvas';
import ExcelJS from 'exceljs';
import fs from 'fs';
import os from 'os';
import path from 'path';
import readline from 'readline';
import * as math from 'mathjs';
import GIFEncoder from 'gifencoder';
import { PassThrough } from 'stream';





// ============================================================================
// ANATOMICAL SHAPES LIBRARY
// ============================================================================
class AnatomicalShapes {

// Add these methods to the AnatomicalShapes class:

// Add these methods to the AnatomicalShapes class:
// Add these methods to the AnatomicalShapes class:

// ============================================================================
// CLASSIFICATION & TAXONOMY SHAPES
// ============================================================================







static drawDigestiveSystem(ctx, x, y, width, height, showPath = true) {
  ctx.save();
  ctx.translate(x, y);
  
  // Mouth and esophagus
  ctx.fillStyle = '#F5CBA7';
  ctx.fillRect(width * 0.45, 0, width * 0.1, height * 0.15);
  
  // Stomach
  ctx.beginPath();
  ctx.ellipse(width * 0.4, height * 0.25, width * 0.15, height * 0.1, 0, 0, Math.PI * 2);
  ctx.fillStyle = '#F8B195';
  ctx.fill();
  ctx.strokeStyle = '#C0392B';
  ctx.lineWidth = 2;
  ctx.stroke();
  
  // Small intestine (coiled)
  ctx.strokeStyle = '#F39C12';
  ctx.lineWidth = 8;
  ctx.beginPath();
  for(let i = 0; i < 5; i++) {
    const yPos = height * 0.4 + i * height * 0.08;
    if(i % 2 === 0) {
      ctx.arc(width * 0.4, yPos, width * 0.15, 0, Math.PI);
    } else {
      ctx.arc(width * 0.6, yPos, width * 0.15, Math.PI, 0);
    }
  }
  ctx.stroke();
  
  // Large intestine (frame)
  ctx.strokeStyle = '#E67E22';
  ctx.lineWidth = 12;
  ctx.beginPath();
  ctx.moveTo(width * 0.25, height * 0.35);
  ctx.lineTo(width * 0.25, height * 0.85);
  ctx.lineTo(width * 0.75, height * 0.85);
  ctx.lineTo(width * 0.75, height * 0.35);
  ctx.stroke();
  
  // Liver
  ctx.fillStyle = '#8B4513';
  ctx.beginPath();
  ctx.ellipse(width * 0.6, height * 0.18, width * 0.15, height * 0.06, 0, 0, Math.PI * 2);
  ctx.fill();
  
  // Pancreas
  ctx.fillStyle = '#DDA0DD';
  ctx.fillRect(width * 0.5, height * 0.28, width * 0.12, height * 0.03);
  
  // Rectum
  ctx.fillStyle = '#D35400';
  ctx.fillRect(width * 0.45, height * 0.88, width * 0.1, height * 0.1);
  
  if(showPath) {
    // Food pathway arrow
    ctx.strokeStyle = '#E74C3C';
    ctx.lineWidth = 2;
    ctx.setLineDash([5, 5]);
    ctx.beginPath();
    ctx.moveTo(width * 0.5, height * 0.02);
    ctx.lineTo(width * 0.5, height * 0.96);
    ctx.stroke();
    ctx.setLineDash([]);
  }
  
  ctx.restore();
}

static drawNervousSystem(ctx, x, y, width, height, showSignal = false) {
  ctx.save();
  ctx.translate(x, y);
  
  // Brain
  ctx.fillStyle = '#F5B7B1';
  ctx.beginPath();
  ctx.ellipse(width * 0.5, height * 0.08, width * 0.12, height * 0.08, 0, 0, Math.PI * 2);
  ctx.fill();
  ctx.strokeStyle = '#C0392B';
  ctx.lineWidth = 2;
  ctx.stroke();
  
  // Brain folds
  ctx.strokeStyle = '#922B21';
  ctx.lineWidth = 1;
  for(let i = 0; i < 4; i++) {
    ctx.beginPath();
    ctx.arc(width * 0.5 + i * width * 0.02, height * 0.08, width * 0.03, Math.PI, 0);
    ctx.stroke();
  }
  
  // Spinal cord
  ctx.fillStyle = '#FAD7A0';
  ctx.fillRect(width * 0.48, height * 0.15, width * 0.04, height * 0.45);
  ctx.strokeStyle = '#E67E22';
  ctx.lineWidth = 2;
  ctx.strokeRect(width * 0.48, height * 0.15, width * 0.04, height * 0.45);
  
  // Spinal nerves (left and right)
  ctx.strokeStyle = '#F39C12';
  ctx.lineWidth = 2;
  for(let i = 0; i < 12; i++) {
    const yPos = height * 0.2 + i * height * 0.03;
    // Left nerves
    ctx.beginPath();
    ctx.moveTo(width * 0.48, yPos);
    ctx.lineTo(width * 0.25, yPos + height * 0.15);
    ctx.stroke();
    
    // Right nerves
    ctx.beginPath();
    ctx.moveTo(width * 0.52, yPos);
    ctx.lineTo(width * 0.75, yPos + height * 0.15);
    ctx.stroke();
  }
  
  // Peripheral nerves to limbs
  ctx.strokeStyle = '#F7DC6F';
  ctx.lineWidth = 1.5;
  
  // Arms
  ctx.beginPath();
  ctx.moveTo(width * 0.25, height * 0.3);
  ctx.lineTo(width * 0.1, height * 0.5);
  ctx.stroke();
  
  ctx.beginPath();
  ctx.moveTo(width * 0.75, height * 0.3);
  ctx.lineTo(width * 0.9, height * 0.5);
  ctx.stroke();
  
  // Legs
  ctx.beginPath();
  ctx.moveTo(width * 0.48, height * 0.6);
  ctx.lineTo(width * 0.3, height * 0.95);
  ctx.stroke();
  
  ctx.beginPath();
  ctx.moveTo(width * 0.52, height * 0.6);
  ctx.lineTo(width * 0.7, height * 0.95);
  ctx.stroke();
  
  if(showSignal) {
    // Animated signal traveling
    const signalY = height * 0.3;
    ctx.fillStyle = '#FF6B6B';
    ctx.beginPath();
    ctx.arc(width * 0.5, signalY, 5, 0, Math.PI * 2);
    ctx.fill();
  }
  
  ctx.restore();
}

static drawEndocrineSystem(ctx, x, y, width, height) {
  ctx.save();
  ctx.translate(x, y);
  
  const glands = [
    { name: 'Pineal', x: 0.5, y: 0.08, w: 0.03, h: 0.02, color: '#BB8FCE' },
    { name: 'Pituitary', x: 0.5, y: 0.12, w: 0.04, h: 0.03, color: '#E59866' },
    { name: 'Thyroid', x: 0.5, y: 0.18, w: 0.08, h: 0.04, color: '#76D7C4' },
    { name: 'Thymus', x: 0.5, y: 0.3, w: 0.1, h: 0.08, color: '#F7DC6F' },
    { name: 'Adrenal (L)', x: 0.35, y: 0.42, w: 0.05, h: 0.04, color: '#F8B195' },
    { name: 'Adrenal (R)', x: 0.65, y: 0.42, w: 0.05, h: 0.04, color: '#F8B195' },
    { name: 'Pancreas', x: 0.5, y: 0.5, w: 0.15, h: 0.04, color: '#DDA0DD' },
    { name: 'Ovaries/Testes', x: 0.5, y: 0.7, w: 0.12, h: 0.06, color: '#AED6F1' }
  ];
  
  glands.forEach(gland => {
    ctx.fillStyle = gland.color;
    ctx.beginPath();
    ctx.ellipse(
      width * gland.x, 
      height * gland.y, 
      width * gland.w, 
      height * gland.h, 
      0, 0, Math.PI * 2
    );
    ctx.fill();
    ctx.strokeStyle = '#2C3E50';
    ctx.lineWidth = 1.5;
    ctx.stroke();
  });
  
  // Body outline
  ctx.strokeStyle = '#BDC3C7';
  ctx.lineWidth = 2;
  ctx.setLineDash([5, 5]);
  ctx.beginPath();
  ctx.ellipse(width * 0.5, height * 0.5, width * 0.25, height * 0.45, 0, 0, Math.PI * 2);
  ctx.stroke();
  ctx.setLineDash([]);
  
  ctx.restore();
}

static drawReproductiveSystem(ctx, x, y, width, height, sex = 'both') {
  ctx.save();
  ctx.translate(x, y);
  
  if(sex === 'male' || sex === 'both') {
    const xOffset = sex === 'both' ? 0 : width * 0.25;
    
    // Testes
    ctx.fillStyle = '#AED6F1';
    ctx.beginPath();
    ctx.ellipse(xOffset + width * 0.2, height * 0.7, width * 0.06, height * 0.08, 0, 0, Math.PI * 2);
    ctx.fill();
    ctx.beginPath();
    ctx.ellipse(xOffset + width * 0.35, height * 0.7, width * 0.06, height * 0.08, 0, 0, Math.PI * 2);
    ctx.fill();
    
    // Vas deferens
    ctx.strokeStyle = '#5DADE2';
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.moveTo(xOffset + width * 0.2, height * 0.65);
    ctx.lineTo(xOffset + width * 0.25, height * 0.4);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(xOffset + width * 0.35, height * 0.65);
    ctx.lineTo(xOffset + width * 0.3, height * 0.4);
    ctx.stroke();
    
    // Prostate
    ctx.fillStyle = '#85C1E2';
    ctx.fillRect(xOffset + width * 0.22, height * 0.35, width * 0.11, height * 0.08);
    
    // Penis
    ctx.fillStyle = '#D7BDE2';
    ctx.fillRect(xOffset + width * 0.24, height * 0.43, width * 0.07, height * 0.2);
  }
  
  if(sex === 'female' || sex === 'both') {
    const xOffset = sex === 'both' ? width * 0.5 : width * 0.25;
    
    // Ovaries
    ctx.fillStyle = '#F8B195';
    ctx.beginPath();
    ctx.ellipse(xOffset + width * 0.15, height * 0.4, width * 0.05, height * 0.06, 0, 0, Math.PI * 2);
    ctx.fill();
    ctx.beginPath();
    ctx.ellipse(xOffset + width * 0.35, height * 0.4, width * 0.05, height * 0.06, 0, 0, Math.PI * 2);
    ctx.fill();
    
    // Fallopian tubes
    ctx.strokeStyle = '#F5B7B1';
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.arc(xOffset + width * 0.25, height * 0.35, width * 0.12, Math.PI, 0);
    ctx.stroke();
    
    // Uterus
    ctx.fillStyle = '#FAD7A0';
    ctx.beginPath();
    ctx.moveTo(xOffset + width * 0.2, height * 0.45);
    ctx.lineTo(xOffset + width * 0.3, height * 0.45);
    ctx.lineTo(xOffset + width * 0.28, height * 0.65);
    ctx.lineTo(xOffset + width * 0.22, height * 0.65);
    ctx.closePath();
    ctx.fill();
    ctx.strokeStyle = '#E67E22';
    ctx.lineWidth = 2;
    ctx.stroke();
    
    // Vagina
    ctx.fillStyle = '#F0B27A';
    ctx.fillRect(xOffset + width * 0.23, height * 0.65, width * 0.04, height * 0.15);
  }
  
  ctx.restore();
}

static drawImmuneSystem(ctx, x, y, width, height) {
  ctx.save();
  ctx.translate(x, y);
  
  // Body outline
  ctx.strokeStyle = '#BDC3C7';
  ctx.lineWidth = 2;
  ctx.setLineDash([5, 5]);
  ctx.beginPath();
  ctx.ellipse(width * 0.5, height * 0.5, width * 0.25, height * 0.45, 0, 0, Math.PI * 2);
  ctx.stroke();
  ctx.setLineDash([]);
  
  // Thymus
  ctx.fillStyle = '#F7DC6F';
  ctx.beginPath();
  ctx.ellipse(width * 0.5, height * 0.25, width * 0.08, height * 0.06, 0, 0, Math.PI * 2);
  ctx.fill();
  ctx.strokeStyle = '#F39C12';
  ctx.lineWidth = 2;
  ctx.stroke();
  
  // Spleen
  ctx.fillStyle = '#8B4513';
  ctx.beginPath();
  ctx.ellipse(width * 0.35, height * 0.45, width * 0.06, height * 0.08, -0.3, 0, Math.PI * 2);
  ctx.fill();
  ctx.strokeStyle = '#6E2C00';
  ctx.stroke();
  
  // Bone marrow (in bones)
  ctx.fillStyle = '#E8DAEF';
  ctx.fillRect(width * 0.2, height * 0.55, width * 0.05, height * 0.15);
  ctx.fillRect(width * 0.75, height * 0.55, width * 0.05, height * 0.15);
  ctx.strokeStyle = '#9B59B6';
  ctx.lineWidth = 2;
  ctx.strokeRect(width * 0.2, height * 0.55, width * 0.05, height * 0.15);
  ctx.strokeRect(width * 0.75, height * 0.55, width * 0.05, height * 0.15);
  
  // Lymph nodes (multiple small circles)
  ctx.fillStyle = '#AED6F1';
  const nodes = [
    [0.3, 0.3], [0.7, 0.3], [0.25, 0.5], [0.75, 0.5],
    [0.35, 0.65], [0.65, 0.65], [0.4, 0.8], [0.6, 0.8]
  ];
  
  nodes.forEach(([nx, ny]) => {
    ctx.beginPath();
    ctx.arc(width * nx, height * ny, width * 0.02, 0, Math.PI * 2);
    ctx.fill();
    ctx.strokeStyle = '#3498DB';
    ctx.lineWidth = 1;
    ctx.stroke();
  });
  
  // Lymphatic vessels (connecting lines)
  ctx.strokeStyle = '#85C1E2';
  ctx.lineWidth = 1.5;
  ctx.setLineDash([3, 3]);
  for(let i = 0; i < nodes.length - 1; i++) {
    ctx.beginPath();
    ctx.moveTo(width * nodes[i][0], height * nodes[i][1]);
    ctx.lineTo(width * nodes[i + 1][0], height * nodes[i + 1][1]);
    ctx.stroke();
  }
  ctx.setLineDash([]);
  
  ctx.restore();
}

static drawSynapse(ctx, x, y, width, height) {
  ctx.save();
  ctx.translate(x, y);
  
  // Presynaptic neuron terminal
  ctx.fillStyle = '#F5B7B1';
  ctx.beginPath();
  ctx.ellipse(width * 0.3, height * 0.3, width * 0.15, height * 0.2, 0, 0, Math.PI * 2);
  ctx.fill();
  ctx.strokeStyle = '#C0392B';
  ctx.lineWidth = 2;
  ctx.stroke();
  
  // Axon coming in
  ctx.strokeStyle = '#E8B4B8';
  ctx.lineWidth = 8;
  ctx.beginPath();
  ctx.moveTo(0, height * 0.3);
  ctx.lineTo(width * 0.15, height * 0.3);
  ctx.stroke();
  
  // Synaptic vesicles
  ctx.fillStyle = '#FF6B6B';
  for(let i = 0; i < 8; i++) {
    const vx = width * 0.25 + (i % 4) * width * 0.03;
    const vy = height * 0.25 + Math.floor(i / 4) * height * 0.08;
    ctx.beginPath();
    ctx.arc(vx, vy, width * 0.015, 0, Math.PI * 2);
    ctx.fill();
  }
  
  // Synaptic cleft
  ctx.fillStyle = 'rgba(189, 195, 199, 0.3)';
  ctx.fillRect(width * 0.43, height * 0.1, width * 0.14, height * 0.4);
  
  // Neurotransmitters in cleft
  ctx.fillStyle = '#F39C12';
  for(let i = 0; i < 12; i++) {
    const ntx = width * 0.45 + Math.random() * width * 0.1;
    const nty = height * 0.15 + Math.random() * height * 0.3;
    ctx.beginPath();
    ctx.arc(ntx, nty, width * 0.008, 0, Math.PI * 2);
    ctx.fill();
  }
  
  // Postsynaptic neuron
  ctx.fillStyle = '#AED6F1';
  ctx.beginPath();
  ctx.ellipse(width * 0.7, height * 0.3, width * 0.15, height * 0.2, 0, 0, Math.PI * 2);
  ctx.fill();
  ctx.strokeStyle = '#3498DB';
  ctx.lineWidth = 2;
  ctx.stroke();
  
  // Receptors on postsynaptic membrane
  ctx.fillStyle = '#5DADE2';
  for(let i = 0; i < 6; i++) {
    const ry = height * 0.15 + i * height * 0.06;
    ctx.fillRect(width * 0.555, ry, width * 0.02, height * 0.04);
  }
  
  // Dendrite continuing
  ctx.strokeStyle = '#D6EAF8';
  ctx.lineWidth = 8;
  ctx.beginPath();
  ctx.moveTo(width * 0.85, height * 0.3);
  ctx.lineTo(width, height * 0.3);
  ctx.stroke();
  
  ctx.restore();
}



  static drawHeart(ctx, x, y, width, height, chamber, state = 'neutral') {
    ctx.save();
    ctx.translate(x, y);
    
    const colors = {
      deoxygenated: { base: '#8B4789', light: '#A569A0', dark: '#6B3569' },
      oxygenated: { base: '#E74C3C', light: '#FF6B6B', dark: '#C0392B' },
      neutral: { base: '#E8B4B8', light: '#F5D7D9', dark: '#D19CA0' }
    };
    
    const color = colors[state] || colors.neutral;
    
    switch(chamber) {
      case 'rightAtrium':
        this.drawRightAtrium(ctx, color, width, height);
        break;
      case 'rightVentricle':
        this.drawRightVentricle(ctx, color, width, height);
        break;
      case 'leftAtrium':
        this.drawLeftAtrium(ctx, color, width, height);
        break;
      case 'leftVentricle':
        this.drawLeftVentricle(ctx, color, width, height);
        break;
      case 'wholeheart':
        this.drawWholeHeart(ctx, color, width, height);
        break;
    }
    
    ctx.restore();
  }

  static drawRightAtrium(ctx, color, width, height) {
    const w = width, h = height;
    
    // Create gradient for 3D effect
    const gradient = ctx.createLinearGradient(0, 0, w, h);
    gradient.addColorStop(0, color.light);
    gradient.addColorStop(0.5, color.base);
    gradient.addColorStop(1, color.dark);
    
    ctx.fillStyle = gradient;
    
    // Draw anatomically accurate right atrium shape
    ctx.beginPath();
    ctx.moveTo(w * 0.2, h * 0.1);
    ctx.bezierCurveTo(w * 0.1, h * 0.05, w * 0.05, h * 0.15, w * 0.1, h * 0.3);
    ctx.bezierCurveTo(w * 0.15, h * 0.45, w * 0.25, h * 0.55, w * 0.4, h * 0.6);
    ctx.lineTo(w * 0.7, h * 0.6);
    ctx.bezierCurveTo(w * 0.85, h * 0.55, w * 0.95, h * 0.45, w * 0.9, h * 0.3);
    ctx.bezierCurveTo(w * 0.85, h * 0.15, w * 0.75, h * 0.05, w * 0.6, h * 0.1);
    ctx.closePath();
    ctx.fill();
    
    // Add highlights
    ctx.fillStyle = 'rgba(255, 255, 255, 0.2)';
    ctx.beginPath();
    ctx.ellipse(w * 0.35, h * 0.25, w * 0.15, h * 0.1, 0, 0, Math.PI * 2);
    ctx.fill();
    
    // Add texture lines
    ctx.strokeStyle = 'rgba(0, 0, 0, 0.1)';
    ctx.lineWidth = 1;
    for(let i = 0; i < 5; i++) {
      ctx.beginPath();
      ctx.moveTo(w * 0.2, h * (0.2 + i * 0.1));
      ctx.lineTo(w * 0.7, h * (0.25 + i * 0.08));
      ctx.stroke();
    }
    
    // Outline
    ctx.strokeStyle = color.dark;
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(w * 0.2, h * 0.1);
    ctx.bezierCurveTo(w * 0.1, h * 0.05, w * 0.05, h * 0.15, w * 0.1, h * 0.3);
    ctx.bezierCurveTo(w * 0.15, h * 0.45, w * 0.25, h * 0.55, w * 0.4, h * 0.6);
    ctx.lineTo(w * 0.7, h * 0.6);
    ctx.bezierCurveTo(w * 0.85, h * 0.55, w * 0.95, h * 0.45, w * 0.9, h * 0.3);
    ctx.bezierCurveTo(w * 0.85, h * 0.15, w * 0.75, h * 0.05, w * 0.6, h * 0.1);
    ctx.closePath();
    ctx.stroke();
  }

  static drawRightVentricle(ctx, color, width, height) {
    const w = width, h = height;
    
    const gradient = ctx.createRadialGradient(w * 0.4, h * 0.3, 0, w * 0.5, h * 0.5, w * 0.6);
    gradient.addColorStop(0, color.light);
    gradient.addColorStop(0.5, color.base);
    gradient.addColorStop(1, color.dark);
    
    ctx.fillStyle = gradient;
    
    // Anatomically accurate right ventricle (triangular/crescent shape)
    ctx.beginPath();
    ctx.moveTo(w * 0.3, h * 0.1);
    ctx.bezierCurveTo(w * 0.15, h * 0.2, w * 0.1, h * 0.35, w * 0.15, h * 0.55);
    ctx.bezierCurveTo(w * 0.2, h * 0.75, w * 0.3, h * 0.9, w * 0.45, h * 0.95);
    ctx.bezierCurveTo(w * 0.55, h * 0.97, w * 0.65, h * 0.95, w * 0.7, h * 0.85);
    ctx.bezierCurveTo(w * 0.8, h * 0.65, w * 0.85, h * 0.45, w * 0.8, h * 0.25);
    ctx.bezierCurveTo(w * 0.75, h * 0.15, w * 0.65, h * 0.08, w * 0.5, h * 0.1);
    ctx.closePath();
    ctx.fill();
    
    // Muscle striations
    ctx.strokeStyle = 'rgba(0, 0, 0, 0.15)';
    ctx.lineWidth = 1.5;
    for(let i = 0; i < 8; i++) {
      ctx.beginPath();
      const startY = h * (0.2 + i * 0.1);
      ctx.moveTo(w * 0.25, startY);
      ctx.quadraticCurveTo(w * 0.45, startY + h * 0.05, w * 0.65, startY);
      ctx.stroke();
    }
    
    // Apex (pointed bottom)
    ctx.fillStyle = color.dark;
    ctx.beginPath();
    ctx.moveTo(w * 0.35, h * 0.85);
    ctx.lineTo(w * 0.45, h * 0.95);
    ctx.lineTo(w * 0.55, h * 0.85);
    ctx.fill();
    
    // Outline
    ctx.strokeStyle = color.dark;
    ctx.lineWidth = 2.5;
    ctx.beginPath();
    ctx.moveTo(w * 0.3, h * 0.1);
    ctx.bezierCurveTo(w * 0.15, h * 0.2, w * 0.1, h * 0.35, w * 0.15, h * 0.55);
    ctx.bezierCurveTo(w * 0.2, h * 0.75, w * 0.3, h * 0.9, w * 0.45, h * 0.95);
    ctx.bezierCurveTo(w * 0.55, h * 0.97, w * 0.65, h * 0.95, w * 0.7, h * 0.85);
    ctx.bezierCurveTo(w * 0.8, h * 0.65, w * 0.85, h * 0.45, w * 0.8, h * 0.25);
    ctx.bezierCurveTo(w * 0.75, h * 0.15, w * 0.65, h * 0.08, w * 0.5, h * 0.1);
    ctx.closePath();
    ctx.stroke();
  }

  static drawLeftAtrium(ctx, color, width, height) {
    const w = width, h = height;
    
    const gradient = ctx.createLinearGradient(0, 0, w, h);
    gradient.addColorStop(0, color.light);
    gradient.addColorStop(0.5, color.base);
    gradient.addColorStop(1, color.dark);
    
    ctx.fillStyle = gradient;
    
    // Left atrium - similar to right but slightly smaller
    ctx.beginPath();
    ctx.moveTo(w * 0.25, h * 0.15);
    ctx.bezierCurveTo(w * 0.15, h * 0.1, w * 0.08, h * 0.2, w * 0.12, h * 0.35);
    ctx.bezierCurveTo(w * 0.18, h * 0.48, w * 0.28, h * 0.58, w * 0.42, h * 0.62);
    ctx.lineTo(w * 0.68, h * 0.62);
    ctx.bezierCurveTo(w * 0.82, h * 0.58, w * 0.92, h * 0.48, w * 0.88, h * 0.35);
    ctx.bezierCurveTo(w * 0.84, h * 0.2, w * 0.75, h * 0.1, w * 0.62, h * 0.15);
    ctx.closePath();
    ctx.fill();
    
    // Pulmonary vein connections (4 openings)
    ctx.fillStyle = color.dark;
    const veinPositions = [[0.15, 0.25], [0.25, 0.18], [0.65, 0.18], [0.75, 0.25]];
    veinPositions.forEach(([px, py]) => {
      ctx.beginPath();
      ctx.ellipse(w * px, h * py, w * 0.04, h * 0.03, 0, 0, Math.PI * 2);
      ctx.fill();
    });
    
    // Highlight
    ctx.fillStyle = 'rgba(255, 255, 255, 0.25)';
    ctx.beginPath();
    ctx.ellipse(w * 0.4, h * 0.3, w * 0.12, h * 0.08, 0, 0, Math.PI * 2);
    ctx.fill();
    
    // Outline
    ctx.strokeStyle = color.dark;
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(w * 0.25, h * 0.15);
    ctx.bezierCurveTo(w * 0.15, h * 0.1, w * 0.08, h * 0.2, w * 0.12, h * 0.35);
    ctx.bezierCurveTo(w * 0.18, h * 0.48, w * 0.28, h * 0.58, w * 0.42, h * 0.62);
    ctx.lineTo(w * 0.68, h * 0.62);
    ctx.bezierCurveTo(w * 0.82, h * 0.58, w * 0.92, h * 0.48, w * 0.88, h * 0.35);
    ctx.bezierCurveTo(w * 0.84, h * 0.2, w * 0.75, h * 0.1, w * 0.62, h * 0.15);
    ctx.closePath();
    ctx.stroke();
  }

  static drawLeftVentricle(ctx, color, width, height) {
    const w = width, h = height;
    
    const gradient = ctx.createRadialGradient(w * 0.45, h * 0.35, 0, w * 0.5, h * 0.5, w * 0.7);
    gradient.addColorStop(0, color.light);
    gradient.addColorStop(0.4, color.base);
    gradient.addColorStop(1, color.dark);
    
    ctx.fillStyle = gradient;
    
    // Left ventricle - most muscular chamber (thicker walls)
    ctx.beginPath();
    ctx.moveTo(w * 0.35, h * 0.08);
    ctx.bezierCurveTo(w * 0.2, h * 0.15, w * 0.12, h * 0.3, w * 0.15, h * 0.5);
    ctx.bezierCurveTo(w * 0.18, h * 0.68, w * 0.28, h * 0.85, w * 0.43, h * 0.95);
    ctx.lineTo(w * 0.57, h * 0.95);
    ctx.bezierCurveTo(w * 0.72, h * 0.85, w * 0.82, h * 0.68, w * 0.85, h * 0.5);
    ctx.bezierCurveTo(w * 0.88, h * 0.3, w * 0.8, h * 0.15, w * 0.65, h * 0.08);
    ctx.closePath();
    ctx.fill();
    
    // Thick myocardium (heart muscle) texture
    ctx.strokeStyle = 'rgba(0, 0, 0, 0.2)';
    ctx.lineWidth = 2;
    for(let i = 0; i < 10; i++) {
      ctx.beginPath();
      const startY = h * (0.15 + i * 0.08);
      ctx.moveTo(w * 0.22, startY);
      ctx.quadraticCurveTo(w * 0.5, startY + h * 0.04, w * 0.78, startY);
      ctx.stroke();
    }
    
    // Papillary muscles (internal structures)
    ctx.fillStyle = color.dark;
    ctx.beginPath();
    ctx.moveTo(w * 0.3, h * 0.7);
    ctx.lineTo(w * 0.35, h * 0.85);
    ctx.lineTo(w * 0.4, h * 0.7);
    ctx.fill();
    
    ctx.beginPath();
    ctx.moveTo(w * 0.6, h * 0.7);
    ctx.lineTo(w * 0.65, h * 0.85);
    ctx.lineTo(w * 0.7, h * 0.7);
    ctx.fill();
    
    // Apex
    ctx.fillStyle = color.dark;
    ctx.beginPath();
    ctx.moveTo(w * 0.43, h * 0.92);
    ctx.lineTo(w * 0.5, h * 0.98);
    ctx.lineTo(w * 0.57, h * 0.92);
    ctx.fill();
    
    // Strong outline
    ctx.strokeStyle = color.dark;
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.moveTo(w * 0.35, h * 0.08);
    ctx.bezierCurveTo(w * 0.2, h * 0.15, w * 0.12, h * 0.3, w * 0.15, h * 0.5);
    ctx.bezierCurveTo(w * 0.18, h * 0.68, w * 0.28, h * 0.85, w * 0.43, h * 0.95);
    ctx.lineTo(w * 0.57, h * 0.95);
    ctx.bezierCurveTo(w * 0.72, h * 0.85, w * 0.82, h * 0.68, w * 0.85, h * 0.5);
    ctx.bezierCurveTo(w * 0.88, h * 0.3, w * 0.8, h * 0.15, w * 0.65, h * 0.08);
    ctx.closePath();
    ctx.stroke();
  }

  static drawWholeHeart(ctx, color, width, height) {
    const w = width, h = height;

    ctx.save();

    // Draw the classic heart shape outline
    const heartCenterX = w * 0.5;
    const heartCenterY = h * 0.4;
    
    // Create heart-shaped path
    ctx.beginPath();
    
    // Top left curve
    ctx.moveTo(heartCenterX, heartCenterY);
    ctx.bezierCurveTo(
        heartCenterX, heartCenterY - h * 0.3,
        heartCenterX - w * 0.4, heartCenterY - h * 0.3,
        heartCenterX - w * 0.4, heartCenterY
    );
    
    // Bottom left curve
    ctx.bezierCurveTo(
        heartCenterX - w * 0.4, heartCenterY + h * 0.15,
        heartCenterX - w * 0.25, heartCenterY + h * 0.3,
        heartCenterX, heartCenterY + h * 0.5
    );
    
    // Bottom right curve  
    ctx.bezierCurveTo(
        heartCenterX + w * 0.25, heartCenterY + h * 0.3,
        heartCenterX + w * 0.4, heartCenterY + h * 0.15,
        heartCenterX + w * 0.4, heartCenterY
    );
    
    // Top right curve
    ctx.bezierCurveTo(
        heartCenterX + w * 0.4, heartCenterY - h * 0.3,
        heartCenterX, heartCenterY - h * 0.3,
        heartCenterX, heartCenterY
    );
    
    ctx.closePath();

    // Fill with gradient
    const gradient = ctx.createLinearGradient(heartCenterX - w * 0.4, 0, heartCenterX + w * 0.4, h);
    gradient.addColorStop(0, '#FF6B6B');
    gradient.addColorStop(0.5, '#E74C3C');
    gradient.addColorStop(1, '#C0392B');
    ctx.fillStyle = gradient;
    ctx.fill();

    // Now draw chambers inside the heart shape
    // Right side (deoxygenated - purple)
    const rightColor = { base: '#8B4789', light: '#A569A0', dark: '#6B3569' };

    // Right atrium (top right)
    ctx.fillStyle = rightColor.base;
    ctx.globalAlpha = 0.7;
    ctx.beginPath();
    ctx.moveTo(heartCenterX, heartCenterY - h * 0.15);
    ctx.bezierCurveTo(
        heartCenterX + w * 0.15, heartCenterY - h * 0.15,
        heartCenterX + w * 0.25, heartCenterY - h * 0.05,
        heartCenterX + w * 0.25, heartCenterY + h * 0.05
    );
    ctx.lineTo(heartCenterX, heartCenterY + h * 0.05);
    ctx.closePath();
    ctx.fill();

    // Right ventricle (bottom right)
    ctx.beginPath();
    ctx.moveTo(heartCenterX, heartCenterY + h * 0.05);
    ctx.lineTo(heartCenterX + w * 0.25, heartCenterY + h * 0.05);
    ctx.bezierCurveTo(
        heartCenterX + w * 0.25, heartCenterY + h * 0.2,
        heartCenterX + w * 0.15, heartCenterY + h * 0.35,
        heartCenterX, heartCenterY + h * 0.45
    );
    ctx.closePath();
    ctx.fill();

    // Left side (oxygenated - red)
    const leftColor = { base: '#E74C3C', light: '#FF6B6B', dark: '#C0392B' };

    // Left atrium (top left)
    ctx.fillStyle = leftColor.base;
    ctx.beginPath();
    ctx.moveTo(heartCenterX, heartCenterY - h * 0.15);
    ctx.bezierCurveTo(
        heartCenterX - w * 0.15, heartCenterY - h * 0.15,
        heartCenterX - w * 0.25, heartCenterY - h * 0.05,
        heartCenterX - w * 0.25, heartCenterY + h * 0.05
    );
    ctx.lineTo(heartCenterX, heartCenterY + h * 0.05);
    ctx.closePath();
    ctx.fill();

    // Left ventricle (bottom left)
    ctx.beginPath();
    ctx.moveTo(heartCenterX, heartCenterY + h * 0.05);
    ctx.lineTo(heartCenterX - w * 0.25, heartCenterY + h * 0.05);
    ctx.bezierCurveTo(
        heartCenterX - w * 0.25, heartCenterY + h * 0.2,
        heartCenterX - w * 0.15, heartCenterY + h * 0.35,
        heartCenterX, heartCenterY + h * 0.45
    );
    ctx.closePath();
    ctx.fill();

    ctx.globalAlpha = 1.0;

    // Septum (dividing line)
    ctx.strokeStyle = '#000000';
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.moveTo(heartCenterX, heartCenterY - h * 0.15);
    ctx.lineTo(heartCenterX, heartCenterY + h * 0.45);
    ctx.stroke();

    // Horizontal dividing line between atria and ventricles
    ctx.strokeStyle = '#000000';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(heartCenterX - w * 0.25, heartCenterY + h * 0.05);
    ctx.lineTo(heartCenterX + w * 0.25, heartCenterY + h * 0.05);
    ctx.stroke();

    // Main vessels at top
    // Aorta (left)
    ctx.strokeStyle = leftColor.base;
    ctx.lineWidth = 8;
    ctx.beginPath();
    ctx.moveTo(heartCenterX - w * 0.1, heartCenterY - h * 0.2);
    ctx.lineTo(heartCenterX - w * 0.1, heartCenterY - h * 0.4);
    ctx.stroke();

    // Pulmonary artery (right)
    ctx.strokeStyle = rightColor.base;
    ctx.lineWidth = 8;
    ctx.beginPath();
    ctx.moveTo(heartCenterX + w * 0.1, heartCenterY - h * 0.2);
    ctx.lineTo(heartCenterX + w * 0.1, heartCenterY - h * 0.4);
    ctx.stroke();

    // Vena cava
    ctx.strokeStyle = rightColor.dark;
    ctx.lineWidth = 7;
    ctx.beginPath();
    ctx.moveTo(heartCenterX + w * 0.25, heartCenterY - h * 0.1);
    ctx.lineTo(heartCenterX + w * 0.35, heartCenterY - h * 0.25);
    ctx.stroke();

    // Pulmonary veins
    ctx.strokeStyle = leftColor.base;
    ctx.lineWidth = 6;
    ctx.beginPath();
    ctx.moveTo(heartCenterX - w * 0.25, heartCenterY - h * 0.1);
    ctx.lineTo(heartCenterX - w * 0.35, heartCenterY - h * 0.25);
    ctx.stroke();

    // Heart outline (stronger)
    ctx.strokeStyle = '#8B0000';
    ctx.lineWidth = 4;
    ctx.beginPath();
    ctx.moveTo(heartCenterX, heartCenterY);
    ctx.bezierCurveTo(
        heartCenterX, heartCenterY - h * 0.3,
        heartCenterX - w * 0.4, heartCenterY - h * 0.3,
        heartCenterX - w * 0.4, heartCenterY
    );
    ctx.bezierCurveTo(
        heartCenterX - w * 0.4, heartCenterY + h * 0.15,
        heartCenterX - w * 0.25, heartCenterY + h * 0.3,
        heartCenterX, heartCenterY + h * 0.5
    );
    ctx.bezierCurveTo(
        heartCenterX + w * 0.25, heartCenterY + h * 0.3,
        heartCenterX + w * 0.4, heartCenterY + h * 0.15,
        heartCenterX + w * 0.4, heartCenterY
    );
    ctx.bezierCurveTo(
        heartCenterX + w * 0.4, heartCenterY - h * 0.3,
        heartCenterX, heartCenterY - h * 0.3,
        heartCenterX, heartCenterY
    );
    ctx.closePath();
    ctx.stroke();

    ctx.restore();
  }

  static drawBloodVessel(ctx, x, y, width, height, type = 'artery', state = 'oxygenated') {
    ctx.save();
    ctx.translate(x, y);
    
    const colors = {
      artery_oxygenated: { base: '#E74C3C', light: '#FF6B6B', dark: '#C0392B' },
      artery_deoxygenated: { base: '#8B4789', light: '#A569A0', dark: '#6B3569' },
      vein_oxygenated: { base: '#C0392B', light: '#E74C3C', dark: '#A93226' },
      vein_deoxygenated: { base: '#6B3569', light: '#8B4789', dark: '#5B2D59' }
    };
    
    const colorKey = `${type}_${state}`;
    const color = colors[colorKey] || colors.artery_oxygenated;
    
    // Vessel walls
    const gradient = ctx.createLinearGradient(0, 0, 0, height);
    gradient.addColorStop(0, color.dark);
    gradient.addColorStop(0.5, color.base);
    gradient.addColorStop(1, color.dark);
    
    ctx.fillStyle = gradient;
    
    if(type === 'artery') {
      // Thicker walls for arteries
      ctx.fillRect(0, 0, width, height);
      
      // Muscular layers
      ctx.strokeStyle = 'rgba(0, 0, 0, 0.2)';
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(width * 0.1, 0);
      ctx.lineTo(width * 0.1, height);
      ctx.stroke();
      
      ctx.beginPath();
      ctx.moveTo(width * 0.9, 0);
      ctx.lineTo(width * 0.9, height);
      ctx.stroke();
    } else {
      // Thinner walls for veins
      ctx.fillRect(0, 0, width, height);
      
      // Valves
      const valveCount = Math.floor(height / 60);
      ctx.fillStyle = color.dark;
      for(let i = 0; i < valveCount; i++) {
        const y = (i + 1) * (height / (valveCount + 1));
        ctx.beginPath();
        ctx.moveTo(width * 0.2, y);
        ctx.lineTo(width * 0.5, y - 10);
        ctx.lineTo(width * 0.8, y);
        ctx.lineTo(width * 0.5, y + 5);
        ctx.closePath();
        ctx.fill();
      }
    }
    
    // Lumen (inner space)
    ctx.fillStyle = color.light;
    ctx.fillRect(width * 0.25, height * 0.1, width * 0.5, height * 0.8);
    
    // Highlight
    ctx.fillStyle = 'rgba(255, 255, 255, 0.3)';
    ctx.fillRect(width * 0.3, height * 0.15, width * 0.15, height * 0.7);
    
    // Outline
    ctx.strokeStyle = color.dark;
    ctx.lineWidth = 2;
    ctx.strokeRect(0, 0, width, height);
    
    ctx.restore();
  }

  static drawBronchialTree(ctx, x, y, width, height, depth) {
    if (depth === 0 || height < 5) return; // Add height check to prevent issues

    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineTo(x, y + height * 0.3);
    ctx.stroke();

    if (depth > 1) {
        const branchY = y + height * 0.3;

        // Left branch
        const leftX = x - width * 0.2;
        const leftY = branchY + height * 0.2;
        ctx.beginPath();
        ctx.moveTo(x, branchY);
        ctx.lineTo(leftX, leftY);
        ctx.stroke();
        this.drawBronchialTree(ctx, leftX, leftY, width * 0.6, height * 0.5, depth - 1);

        // Right branch
        const rightX = x + width * 0.2;
        const rightY = branchY + height * 0.2;
        ctx.beginPath();
        ctx.moveTo(x, branchY);
        ctx.lineTo(rightX, rightY);
        ctx.stroke();
        this.drawBronchialTree(ctx, rightX, rightY, width * 0.6, height * 0.5, depth - 1);
    }
}

  static drawLung(ctx, x, y, width, height, side = 'left') {
    ctx.save();
    ctx.translate(x, y);
    
    const color = { base: '#FFB6D9', light: '#FFD4E8', dark: '#FF8FB6' };
    
    const gradient = ctx.createRadialGradient(width * 0.4, height * 0.4, 0, width * 0.5, height * 0.5, width * 0.6);
    gradient.addColorStop(0, color.light);
    gradient.addColorStop(0.5, color.base);
    gradient.addColorStop(1, color.dark);
    
    ctx.fillStyle = gradient;
    
    if(side === 'left') {
      // Left lung - 2 lobes
      // Superior lobe
      ctx.beginPath();
      ctx.moveTo(width * 0.2, height * 0.1);
      ctx.bezierCurveTo(width * 0.1, height * 0.15, width * 0.05, height * 0.25, width * 0.1, height * 0.4);
      ctx.lineTo(width * 0.8, height * 0.4);
      ctx.bezierCurveTo(width * 0.9, height * 0.3, width * 0.85, height * 0.15, width * 0.7, height * 0.1);
      ctx.closePath();
      ctx.fill();
      
      // Inferior lobe
      ctx.beginPath();
      ctx.moveTo(width * 0.1, height * 0.45);
      ctx.bezierCurveTo(width * 0.05, height * 0.6, width * 0.1, height * 0.8, width * 0.25, height * 0.9);
      ctx.bezierCurveTo(width * 0.4, height * 0.95, width * 0.6, height * 0.95, width * 0.75, height * 0.88);
      ctx.bezierCurveTo(width * 0.88, height * 0.75, width * 0.9, height * 0.6, width * 0.8, height * 0.45);
      ctx.closePath();
      ctx.fill();
    } else {
      // Right lung - 3 lobes
      // Superior lobe
      ctx.beginPath();
      ctx.moveTo(width * 0.2, height * 0.08);
      ctx.bezierCurveTo(width * 0.1, height * 0.12, width * 0.05, height * 0.2, width * 0.1, height * 0.32);
      ctx.lineTo(width * 0.8, height * 0.32);
      ctx.bezierCurveTo(width * 0.9, height * 0.25, width * 0.85, height * 0.12, width * 0.7, height * 0.08);
      ctx.closePath();
      ctx.fill();
      
      // Middle lobe
      ctx.beginPath();
      ctx.moveTo(width * 0.1, height * 0.36);
      ctx.lineTo(width * 0.8, height * 0.36);
      ctx.lineTo(width * 0.85, height * 0.52);
      ctx.lineTo(width * 0.15, height * 0.52);
      ctx.closePath();
      ctx.fill();
      
      // Inferior lobe
      ctx.beginPath();
      ctx.moveTo(width * 0.15, height * 0.56);
      ctx.bezierCurveTo(width * 0.08, height * 0.68, width * 0.1, height * 0.82, width * 0.25, height * 0.92);
      ctx.bezierCurveTo(width * 0.42, height * 0.98, width * 0.62, height * 0.96, width * 0.77, height * 0.88);
      ctx.bezierCurveTo(width * 0.9, height * 0.75, width * 0.92, height * 0.62, width * 0.85, height * 0.56);
      ctx.closePath();
      ctx.fill();
    }
    
    // Bronchial tree
    ctx.strokeStyle = '#C44569';
    ctx.lineWidth = 3;
    this.drawBronchialTree(ctx, width * 0.45, height * 0.05, width * 0.4, height * 0.8, 3);
    
    // Alveoli texture (small circles)
    ctx.fillStyle = 'rgba(255, 182, 217, 0.5)';
    for(let i = 0; i < 20; i++) {
      const ax = width * (0.2 + Math.random() * 0.6);
      const ay = height * (0.2 + Math.random() * 0.7);
      ctx.beginPath();
      ctx.arc(ax, ay, 2 + Math.random() * 3, 0, Math.PI * 2);
      ctx.fill();
    }
    
    // Outline
    ctx.strokeStyle = color.dark;
    ctx.lineWidth = 2.5;
    if(side === 'left') {
      ctx.beginPath();
      ctx.moveTo(width * 0.2, height * 0.1);
      ctx.bezierCurveTo(width * 0.1, height * 0.15, width * 0.05, height * 0.25, width * 0.1, height * 0.4);
      ctx.bezierCurveTo(width * 0.05, height * 0.6, width * 0.1, height * 0.8, width * 0.25, height * 0.9);
      ctx.bezierCurveTo(width * 0.4, height * 0.95, width * 0.6, height * 0.95, width * 0.75, height * 0.88);
      ctx.bezierCurveTo(width * 0.88, height * 0.75, width * 0.9, height * 0.6, width * 0.8, height * 0.45);
      ctx.lineTo(width * 0.8, height * 0.4);
      ctx.bezierCurveTo(width * 0.9, height * 0.3, width * 0.85, height * 0.15, width * 0.7, height * 0.1);
      ctx.closePath();
      ctx.stroke();
    }
    
    ctx.restore();
  }

  


  static drawBrain(ctx, x, y, width, height, section = 'whole') {
    ctx.save();
    ctx.translate(x, y);

    const color = { base: '#FFB8D1', light: '#FFD4E5', dark: '#FF9AB8' };
    const gray = { base: '#C8B8C8', light: '#E0D0E0', dark: '#A898A8' };

    const gradient = ctx.createRadialGradient(width * 0.5, height * 0.4, 0, width * 0.5, height * 0.5, width * 0.6);
    gradient.addColorStop(0, color.light);
    gradient.addColorStop(0.5, color.base);
    gradient.addColorStop(1, color.dark);

    ctx.fillStyle = gradient;

    // Main cerebrum shape
    ctx.beginPath();
    ctx.moveTo(width * 0.15, height * 0.3);
    ctx.bezierCurveTo(width * 0.05, height * 0.15, width * 0.2, height * 0.05, width * 0.5, height * 0.08);
    ctx.bezierCurveTo(width * 0.8, height * 0.05, width * 0.95, height * 0.15, width * 0.85, height * 0.3);
    ctx.bezierCurveTo(width * 0.92, height * 0.5, width * 0.88, height * 0.7, width * 0.7, height * 0.85);
    ctx.bezierCurveTo(width * 0.55, height * 0.92, width * 0.45, height * 0.92, width * 0.3, height * 0.85);
    ctx.bezierCurveTo(width * 0.12, height * 0.7, width * 0.08, height * 0.5, width * 0.15, height * 0.3);
    ctx.closePath();
    ctx.fill();

    // Cerebral gyri (folds)
    ctx.strokeStyle = color.dark;
    ctx.lineWidth = 2;
    
    // Left hemisphere gyri
    for(let i = 0; i < 6; i++) {
      ctx.beginPath();
      const startY = height * (0.2 + i * 0.1);
      ctx.moveTo(width * 0.15, startY);
      ctx.bezierCurveTo(
        width * (0.2 + Math.random() * 0.05), startY + height * 0.02,
        width * (0.3 + Math.random() * 0.05), startY - height * 0.02,
        width * 0.45, startY
      );
      ctx.stroke();
    }

    // Right hemisphere gyri
    for(let i = 0; i < 6; i++) {
      ctx.beginPath();
      const startY = height * (0.2 + i * 0.1);
      ctx.moveTo(width * 0.55, startY);
      ctx.bezierCurveTo(
        width * (0.65 + Math.random() * 0.05), startY - height * 0.02,
        width * (0.75 + Math.random() * 0.05), startY + height * 0.02,
        width * 0.85, startY
      );
      ctx.stroke();
    }

    // Longitudinal fissure (split between hemispheres)
    ctx.strokeStyle = color.dark;
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.moveTo(width * 0.5, height * 0.1);
    ctx.lineTo(width * 0.5, height * 0.7);
    ctx.stroke();

    // Cerebellum (back lower part)
    ctx.fillStyle = gray.base;
    ctx.beginPath();
    ctx.moveTo(width * 0.25, height * 0.75);
    ctx.bezierCurveTo(width * 0.2, height * 0.85, width * 0.3, height * 0.95, width * 0.5, height * 0.95);
    ctx.bezierCurveTo(width * 0.7, height * 0.95, width * 0.8, height * 0.85, width * 0.75, height * 0.75);
    ctx.closePath();
    ctx.fill();

    // Cerebellum folds
    ctx.strokeStyle = gray.dark;
    ctx.lineWidth = 1;
    for(let i = 0; i < 8; i++) {
      ctx.beginPath();
      const x1 = width * (0.3 + i * 0.05);
      ctx.moveTo(x1, height * 0.78);
      ctx.lineTo(x1, height * 0.92);
      ctx.stroke();
    }

    // Brain stem
    ctx.fillStyle = gray.light;
    ctx.fillRect(width * 0.45, height * 0.85, width * 0.1, height * 0.1);

    // Outline
    ctx.strokeStyle = color.dark;
    ctx.lineWidth = 2.5;
    ctx.beginPath();
    ctx.moveTo(width * 0.15, height * 0.3);
    ctx.bezierCurveTo(width * 0.05, height * 0.15, width * 0.2, height * 0.05, width * 0.5, height * 0.08);
    ctx.bezierCurveTo(width * 0.8, height * 0.05, width * 0.95, height * 0.15, width * 0.85, height * 0.3);
    ctx.bezierCurveTo(width * 0.92, height * 0.5, width * 0.88, height * 0.7, width * 0.7, height * 0.85);
    ctx.bezierCurveTo(width * 0.55, height * 0.92, width * 0.45, height * 0.92, width * 0.3, height * 0.85);
    ctx.bezierCurveTo(width * 0.12, height * 0.7, width * 0.08, height * 0.5, width * 0.15, height * 0.3);
    ctx.closePath();
    ctx.stroke();

    ctx.restore();
  }




  static drawLiver(ctx, x, y, width, height) {
    ctx.save();
    ctx.translate(x, y);

    const color = { base: '#8B4513', light: '#A0522D', dark: '#654321' };

    const gradient = ctx.createLinearGradient(0, 0, width, height);
    gradient.addColorStop(0, color.light);
    gradient.addColorStop(0.5, color.base);
    gradient.addColorStop(1, color.dark);

    ctx.fillStyle = gradient;

    // Liver shape (wedge-shaped with lobes)
    ctx.beginPath();
    // Right lobe (larger)
    ctx.moveTo(width * 0.4, height * 0.1);
    ctx.bezierCurveTo(width * 0.15, height * 0.15, width * 0.05, height * 0.3, width * 0.08, height * 0.6);
    ctx.bezierCurveTo(width * 0.12, height * 0.85, width * 0.25, height * 0.95, width * 0.45, height * 0.92);
    
    // Gallbladder notch
    ctx.lineTo(width * 0.52, height * 0.92);
    ctx.quadraticCurveTo(width * 0.54, height * 0.85, width * 0.56, height * 0.92);
    
    // Left lobe (smaller)
    ctx.lineTo(width * 0.7, height * 0.88);
    ctx.bezierCurveTo(width * 0.85, height * 0.82, width * 0.95, height * 0.65, width * 0.92, height * 0.45);
    ctx.bezierCurveTo(width * 0.88, height * 0.25, width * 0.75, height * 0.12, width * 0.55, height * 0.1);
    ctx.closePath();
    ctx.fill();

    // Lobules texture (hexagonal pattern)
    ctx.fillStyle = 'rgba(139, 69, 19, 0.3)';
    for(let row = 0; row < 6; row++) {
      for(let col = 0; col < 8; col++) {
        const lobX = width * (0.15 + col * 0.1);
        const lobY = height * (0.25 + row * 0.12);
        this.drawHexagon(ctx, lobX, lobY, 4);
      }
    }

    // Hepatic vessels
    ctx.strokeStyle = '#654321';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(width * 0.5, height * 0.15);
    ctx.lineTo(width * 0.3, height * 0.4);
    ctx.moveTo(width * 0.5, height * 0.15);
    ctx.lineTo(width * 0.7, height * 0.4);
    ctx.moveTo(width * 0.5, height * 0.15);
    ctx.lineTo(width * 0.5, height * 0.5);
    ctx.stroke();

    // Gallbladder
    ctx.fillStyle = '#9ACD32';
    ctx.beginPath();
    ctx.ellipse(width * 0.54, height * 0.78, width * 0.04, height * 0.08, 0, 0, Math.PI * 2);
    ctx.fill();
    ctx.strokeStyle = '#6B8E23';
    ctx.lineWidth = 1;
    ctx.stroke();

    // Falciform ligament
    ctx.strokeStyle = '#D2B48C';
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.moveTo(width * 0.48, height * 0.08);
    ctx.lineTo(width * 0.5, height * 0.6);
    ctx.stroke();

    // Outline
    ctx.strokeStyle = color.dark;
    ctx.lineWidth = 2.5;
    ctx.beginPath();
    ctx.moveTo(width * 0.4, height * 0.1);
    ctx.bezierCurveTo(width * 0.15, height * 0.15, width * 0.05, height * 0.3, width * 0.08, height * 0.6);
    ctx.bezierCurveTo(width * 0.12, height * 0.85, width * 0.25, height * 0.95, width * 0.45, height * 0.92);
    ctx.lineTo(width * 0.52, height * 0.92);
    ctx.quadraticCurveTo(width * 0.54, height * 0.85, width * 0.56, height * 0.92);
    ctx.lineTo(width * 0.7, height * 0.88);
    ctx.bezierCurveTo(width * 0.85, height * 0.82, width * 0.95, height * 0.65, width * 0.92, height * 0.45);
    ctx.bezierCurveTo(width * 0.88, height * 0.25, width * 0.75, height * 0.12, width * 0.55, height * 0.1);
    ctx.closePath();
    ctx.stroke();

    ctx.restore();
  }

  static drawHexagon(ctx, x, y, radius) {
    ctx.beginPath();
    for(let i = 0; i < 6; i++) {
      const angle = (Math.PI / 3) * i;
      const hx = x + radius * Math.cos(angle);
      const hy = y + radius * Math.sin(angle);
      if(i === 0) ctx.moveTo(hx, hy);
      else ctx.lineTo(hx, hy);
    }
    ctx.closePath();
    ctx.fill();
  }

  static drawKidney(ctx, x, y, width, height, side = 'left') {
    ctx.save();
    ctx.translate(x, y);

    const color = { base: '#8B0000', light: '#A52A2A', dark: '#660000' };

    const gradient = ctx.createRadialGradient(width * 0.4, height * 0.4, 0, width * 0.5, height * 0.5, width * 0.6);
    gradient.addColorStop(0, color.light);
    gradient.addColorStop(0.5, color.base);
    gradient.addColorStop(1, color.dark);

    ctx.fillStyle = gradient;

    // Kidney bean shape
    ctx.beginPath();
    if(side === 'left') {
      ctx.moveTo(width * 0.3, height * 0.1);
      ctx.bezierCurveTo(width * 0.1, height * 0.15, width * 0.05, height * 0.35, width * 0.1, height * 0.55);
      ctx.bezierCurveTo(width * 0.15, height * 0.75, width * 0.25, height * 0.9, width * 0.45, height * 0.92);
      ctx.bezierCurveTo(width * 0.65, height * 0.94, width * 0.82, height * 0.85, width * 0.88, height * 0.65);
      ctx.bezierCurveTo(width * 0.92, height * 0.5, width * 0.88, height * 0.35, width * 0.75, height * 0.25);
      // Hilum (indented area)
      ctx.bezierCurveTo(width * 0.68, height * 0.3, width * 0.62, height * 0.4, width * 0.65, height * 0.5);
      ctx.bezierCurveTo(width * 0.68, height * 0.6, width * 0.72, height * 0.68, width * 0.78, height * 0.72);
      ctx.bezierCurveTo(width * 0.7, height * 0.78, width * 0.58, height * 0.8, width * 0.45, height * 0.78);
      ctx.bezierCurveTo(width * 0.55, height * 0.6, width * 0.58, height * 0.4, width * 0.55, height * 0.2);
      ctx.bezierCurveTo(width * 0.48, height * 0.12, width * 0.38, height * 0.08, width * 0.3, height * 0.1);
    } else {
      // Mirror for right kidney
      ctx.moveTo(width * 0.7, height * 0.1);
      ctx.bezierCurveTo(width * 0.9, height * 0.15, width * 0.95, height * 0.35, width * 0.9, height * 0.55);
      ctx.bezierCurveTo(width * 0.85, height * 0.75, width * 0.75, height * 0.9, width * 0.55, height * 0.92);
      ctx.bezierCurveTo(width * 0.35, height * 0.94, width * 0.18, height * 0.85, width * 0.12, height * 0.65);
      ctx.bezierCurveTo(width * 0.08, height * 0.5, width * 0.12, height * 0.35, width * 0.25, height * 0.25);
      ctx.bezierCurveTo(width * 0.32, height * 0.3, width * 0.38, height * 0.4, width * 0.35, height * 0.5);
      ctx.bezierCurveTo(width * 0.32, height * 0.6, width * 0.28, height * 0.68, width * 0.22, height * 0.72);
      ctx.bezierCurveTo(width * 0.3, height * 0.78, width * 0.42, height * 0.8, width * 0.55, height * 0.78);
      ctx.bezierCurveTo(width * 0.45, height * 0.6, width * 0.42, height * 0.4, width * 0.45, height * 0.2);
      ctx.bezierCurveTo(width * 0.52, height * 0.12, width * 0.62, height * 0.08, width * 0.7, height * 0.1);
    }
    ctx.closePath();
    ctx.fill();

    // Renal cortex (outer layer)
    ctx.strokeStyle = color.light;
    ctx.lineWidth = 4;
    ctx.stroke();

    // Renal pyramids
    ctx.fillStyle = color.dark;
    const pyramidCount = 6;
    for(let i = 0; i < pyramidCount; i++) {
      const py = height * (0.2 + i * 0.12);
      const px = side === 'left' ? width * 0.35 : width * 0.65;
      ctx.beginPath();
      ctx.moveTo(px - 8, py);
      ctx.lineTo(px, py + 12);
      ctx.lineTo(px + 8, py);
      ctx.closePath();
      ctx.fill();
    }

    // Renal pelvis
    ctx.fillStyle = '#FFD700';
    ctx.beginPath();
    const pelvisX = side === 'left' ? width * 0.68 : width * 0.32;
    ctx.ellipse(pelvisX, height * 0.5, width * 0.08, height * 0.15, 0, 0, Math.PI * 2);
    ctx.fill();

    // Ureter
    ctx.strokeStyle = '#FFD700';
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.moveTo(pelvisX, height * 0.65);
    ctx.lineTo(pelvisX, height * 0.95);
    ctx.stroke();

    // Renal artery and vein
    ctx.strokeStyle = '#E74C3C'; // Artery
    ctx.lineWidth = 4;
    ctx.beginPath();
    ctx.moveTo(pelvisX, height * 0.45);
    ctx.lineTo(side === 'left' ? width * 0.95 : width * 0.05, height * 0.45);
    ctx.stroke();

    ctx.strokeStyle = '#8B4789'; // Vein
    ctx.beginPath();
    ctx.moveTo(pelvisX, height * 0.55);
    ctx.lineTo(side === 'left' ? width * 0.95 : width * 0.05, height * 0.55);
    ctx.stroke();

    // Outline
    ctx.strokeStyle = color.dark;
    ctx.lineWidth = 2.5;
    ctx.beginPath();
    if(side === 'left') {
      ctx.moveTo(width * 0.3, height * 0.1);
      ctx.bezierCurveTo(width * 0.1, height * 0.15, width * 0.05, height * 0.35, width * 0.1, height * 0.55);
      ctx.bezierCurveTo(width * 0.15, height * 0.75, width * 0.25, height * 0.9, width * 0.45, height * 0.92);
      ctx.bezierCurveTo(width * 0.65, height * 0.94, width * 0.82, height * 0.85, width * 0.88, height * 0.65);
      ctx.bezierCurveTo(width * 0.92, height * 0.5, width * 0.88, height * 0.35, width * 0.75, height * 0.25);
    } else {
      ctx.moveTo(width * 0.7, height * 0.1);
      ctx.bezierCurveTo(width * 0.9, height * 0.15, width * 0.95, height * 0.35, width * 0.9, height * 0.55);
      ctx.bezierCurveTo(width * 0.85, height * 0.75, width * 0.75, height * 0.9, width * 0.55, height * 0.92);
      ctx.bezierCurveTo(width * 0.35, height * 0.94, width * 0.18, height * 0.85, width * 0.12, height * 0.65);
      ctx.bezierCurveTo(width * 0.08, height * 0.5, width * 0.12, height * 0.35, width * 0.25, height * 0.25);
    }
    ctx.stroke();

    ctx.restore();
  }

  static drawStomach(ctx, x, y, width, height) {
    ctx.save();
    ctx.translate(x, y);

    const color = { base: '#FFA07A', light: '#FFB89A', dark: '#FF8866' };

    const gradient = ctx.createLinearGradient(0, 0, width, height);
    gradient.addColorStop(0, color.light);
    gradient.addColorStop(0.5, color.base);
    gradient.addColorStop(1, color.dark);

    ctx.fillStyle = gradient;

    // J-shaped stomach
    ctx.beginPath();
    // Fundus (top rounded part)
    ctx.moveTo(width * 0.4, height * 0.15);
    ctx.bezierCurveTo(width * 0.2, height * 0.1, width * 0.1, height * 0.2, width * 0.15, height * 0.35);
    
    // Greater curvature (left side)
    ctx.bezierCurveTo(width * 0.12, height * 0.5, width * 0.15, height * 0.65, width * 0.25, height * 0.78);
    ctx.bezierCurveTo(width * 0.35, height * 0.88, width * 0.5, height * 0.92, width * 0.65, height * 0.88);
    
    // Pylorus (outlet to small intestine)
    ctx.bezierCurveTo(width * 0.75, height * 0.85, width * 0.82, height * 0.78, width * 0.85, height * 0.68);
    
    // Lesser curvature (right side)
    ctx.bezierCurveTo(width * 0.88, height * 0.55, width * 0.85, height * 0.4, width * 0.78, height * 0.28);
    ctx.bezierCurveTo(width * 0.7, height * 0.18, width * 0.58, height * 0.13, width * 0.4, height * 0.15);
    ctx.closePath();
    ctx.fill();

    // Gastric rugae (folds)
    ctx.strokeStyle = color.dark;
    ctx.lineWidth = 2;
    for(let i = 0; i < 5; i++) {
      ctx.beginPath();
      const startY = height * (0.3 + i * 0.12);
      ctx.moveTo(width * 0.25, startY);
      ctx.bezierCurveTo(
        width * 0.35, startY - height * 0.02,
        width * 0.45, startY + height * 0.02,
        width * 0.6, startY
      );
      ctx.stroke();
    }

    // Esophageal opening (cardia)
    ctx.fillStyle = color.dark;
    ctx.beginPath();
    ctx.ellipse(width * 0.45, height * 0.15, width * 0.05, height * 0.03, -Math.PI / 6, 0, Math.PI * 2);
    ctx.fill();

    // Pyloric sphincter
    ctx.fillStyle = '#CD853F';
    ctx.beginPath();
    ctx.arc(width * 0.85, height * 0.68, width * 0.04, 0, Math.PI * 2);
    ctx.fill();

    // Mucosa texture
    ctx.fillStyle = 'rgba(255, 160, 122, 0.3)';
    for(let i = 0; i < 15; i++) {
      const dotX = width * (0.2 + Math.random() * 0.5);
      const dotY = height * (0.3 + Math.random() * 0.5);
      ctx.beginPath();
      ctx.arc(dotX, dotY, 1.5, 0, Math.PI * 2);
      ctx.fill();
    }

    // Outline
    ctx.strokeStyle = color.dark;
    ctx.lineWidth = 2.5;
    ctx.beginPath();
    ctx.moveTo(width * 0.4, height * 0.15);
    ctx.bezierCurveTo(width * 0.2, height * 0.1, width * 0.1, height * 0.2, width * 0.15, height * 0.35);
    ctx.bezierCurveTo(width * 0.12, height * 0.5, width * 0.15, height * 0.65, width * 0.25, height * 0.78);
    ctx.bezierCurveTo(width * 0.35, height * 0.88, width * 0.5, height * 0.92, width * 0.65, height * 0.88);
    ctx.bezierCurveTo(width * 0.75, height * 0.85, width * 0.82, height * 0.78, width * 0.85, height * 0.68);
    ctx.bezierCurveTo(width * 0.88, height * 0.55, width * 0.85, height * 0.4, width * 0.78, height * 0.28);
    ctx.bezierCurveTo(width * 0.7, height * 0.18, width * 0.58, height * 0.13, width * 0.4, height * 0.15);
    ctx.closePath();
    ctx.stroke();

    ctx.restore();
  }

  static drawIntestine(ctx, x, y, width, height, type = 'small') {
    ctx.save();
    ctx.translate(x, y);

    const smallColor = { base: '#FFB6C1', light: '#FFC8D3', dark: '#FFA4B0' };
    const largeColor = { base: '#E6A8B8', light: '#F0BAC8', dark: '#DC96A8' };
    const color = type === 'small' ? smallColor : largeColor;

    const gradient = ctx.createLinearGradient(0, 0, width, height);
    gradient.addColorStop(0, color.light);
    gradient.addColorStop(0.5, color.base);
    gradient.addColorStop(1, color.dark);

    if(type === 'small') {
      // Small intestine - coiled/folded appearance
      const coils = 6;
      const coilHeight = height / (coils + 1);
      
      ctx.fillStyle = gradient;
      ctx.strokeStyle = color.dark;
      ctx.lineWidth = 2;

      for(let i = 0; i < coils; i++) {
        const yPos = (i + 1) * coilHeight;
        const direction = i % 2 === 0 ? 1 : -1;
        
        ctx.beginPath();
        ctx.moveTo(width * 0.1, yPos);
        ctx.bezierCurveTo(
          width * (0.3 * direction + 0.5), yPos - coilHeight * 0.4,
          width * (0.3 * direction + 0.5), yPos + coilHeight * 0.4,
          width * 0.9, yPos + coilHeight * 0.2
        );
        ctx.lineWidth = width * 0.08;
        ctx.strokeStyle = color.base;
        ctx.stroke();
        
        // Villi (small projections)
        ctx.lineWidth = 1;
        ctx.strokeStyle = color.dark;
        for(let v = 0; v < 20; v++) {
          const vx = width * (0.2 + Math.random() * 0.6);
          const vy = yPos + (Math.random() - 0.5) * coilHeight * 0.8;
          ctx.beginPath();
          ctx.moveTo(vx, vy);
          ctx.lineTo(vx + 2, vy - 3);
          ctx.stroke();
        }
      }

      // Duodenum curve
      ctx.beginPath();
      ctx.strokeStyle = color.base;
      ctx.lineWidth = width * 0.09;
      ctx.moveTo(width * 0.5, 0);
      ctx.bezierCurveTo(width * 0.8, height * 0.05, width * 0.9, height * 0.15, width * 0.85, height * 0.25);
      ctx.stroke();

    } else {
      // Large intestine - frame shape (ascending, transverse, descending, sigmoid colon)
      ctx.fillStyle = color.base;
      ctx.strokeStyle = color.dark;
      ctx.lineWidth = width * 0.12;

      // Ascending colon (right side going up)
      ctx.beginPath();
      ctx.moveTo(width * 0.85, height * 0.9);
      ctx.lineTo(width * 0.85, height * 0.2);
      ctx.stroke();

      // Transverse colon (across top)
      ctx.beginPath();
      ctx.moveTo(width * 0.85, height * 0.2);
      ctx.lineTo(width * 0.15, height * 0.2);
      ctx.stroke();

      // Descending colon (left side going down)
      ctx.beginPath();
      ctx.moveTo(width * 0.15, height * 0.2);
      ctx.lineTo(width * 0.15, height * 0.65);
      ctx.stroke();

      // Sigmoid colon (S-shaped)
      ctx.beginPath();
      ctx.moveTo(width * 0.15, height * 0.65);
      ctx.bezierCurveTo(
        width * 0.2, height * 0.75,
        width * 0.3, height * 0.8,
        width * 0.4, height * 0.85
      );
      ctx.bezierCurveTo(
        width * 0.5, height * 0.9,
        width * 0.6, height * 0.92,
        width * 0.7, height * 0.88
      );
      ctx.stroke();

      // Haustra (pouches) - characteristic of large intestine
      const haustraCount = 8;
      ctx.lineWidth = 2;
      ctx.strokeStyle = color.dark;
      
      // Haustra on ascending colon
      for(let i = 0; i < 4; i++) {
        const hy = height * (0.3 + i * 0.15);
        ctx.beginPath();
        ctx.arc(width * 0.85, hy, width * 0.05, Math.PI * 0.5, Math.PI * 1.5);
        ctx.stroke();
      }

      // Haustra on transverse colon
      for(let i = 0; i < 4; i++) {
        const hx = width * (0.75 - i * 0.15);
        ctx.beginPath();
        ctx.arc(hx, height * 0.2, width * 0.05, 0, Math.PI);
        ctx.stroke();
      }

      // Haustra on descending colon
      for(let i = 0; i < 3; i++) {
        const hy = height * (0.3 + i * 0.15);
        ctx.beginPath();
        ctx.arc(width * 0.15, hy, width * 0.05, -Math.PI * 0.5, Math.PI * 0.5);
        ctx.stroke();
      }

      // Cecum (beginning of large intestine)
      ctx.fillStyle = color.light;
      ctx.beginPath();
      ctx.ellipse(width * 0.85, height * 0.85, width * 0.08, height * 0.08, 0, 0, Math.PI * 2);
      ctx.fill();
      ctx.stroke();

      // Appendix
      ctx.strokeStyle = color.base;
      ctx.lineWidth = 4;
      ctx.beginPath();
      ctx.moveTo(width * 0.82, height * 0.92);
      ctx.lineTo(width * 0.78, height * 0.98);
      ctx.stroke();

      // Rectum
      ctx.lineWidth = width * 0.1;
      ctx.strokeStyle = color.base;
      ctx.beginPath();
      ctx.moveTo(width * 0.7, height * 0.88);
      ctx.lineTo(width * 0.65, height * 0.98);
      ctx.stroke();
    }

    ctx.restore();
  }

  static drawPancreas(ctx, x, y, width, height) {
    ctx.save();
    ctx.translate(x, y);

    const color = { base: '#FFDAB9', light: '#FFE4C4', dark: '#F4C2A0' };

    const gradient = ctx.createLinearGradient(0, 0, width, height);
    gradient.addColorStop(0, color.light);
    gradient.addColorStop(0.5, color.base);
    gradient.addColorStop(1, color.dark);

    ctx.fillStyle = gradient;

    // Pancreas shape (elongated with head, body, tail)
    ctx.beginPath();
    // Head (right, widest part)
    ctx.moveTo(width * 0.85, height * 0.35);
    ctx.bezierCurveTo(width * 0.95, height * 0.3, width * 0.98, height * 0.4, width * 0.95, height * 0.55);
    ctx.bezierCurveTo(width * 0.92, height * 0.68, width * 0.85, height * 0.75, width * 0.75, height * 0.72);
    
    // Body (middle)
    ctx.bezierCurveTo(width * 0.6, height * 0.7, width * 0.45, height * 0.65, width * 0.3, height * 0.58);
    
    // Tail (left, pointed)
    ctx.bezierCurveTo(width * 0.15, height * 0.52, width * 0.05, height * 0.45, width * 0.02, height * 0.38);
    ctx.bezierCurveTo(width * 0.0, height * 0.32, width * 0.02, height * 0.28, width * 0.08, height * 0.3);
    
    // Top curve back
    ctx.bezierCurveTo(width * 0.25, height * 0.35, width * 0.45, height * 0.32, width * 0.65, height * 0.3);
    ctx.bezierCurveTo(width * 0.75, height * 0.28, width * 0.82, height * 0.3, width * 0.85, height * 0.35);
    ctx.closePath();
    ctx.fill();

    // Lobules (grape-like clusters)
    ctx.fillStyle = color.dark;
    const lobuleCount = 12;
    for(let i = 0; i < lobuleCount; i++) {
      const lx = width * (0.15 + i * 0.06);
      const ly = height * (0.4 + (Math.random() - 0.5) * 0.15);
      ctx.beginPath();
      ctx.arc(lx, ly, 3, 0, Math.PI * 2);
      ctx.fill();
    }

    // Pancreatic duct (Wirsung duct)
    ctx.strokeStyle = '#8B7355';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(width * 0.88, height * 0.5);
    ctx.bezierCurveTo(width * 0.65, height * 0.48, width * 0.4, height * 0.45, width * 0.15, height * 0.4);
    ctx.stroke();

    // Islets of Langerhans (hormone-producing cells)
    ctx.fillStyle = '#FFE4B5';
    const isletCount = 8;
    for(let i = 0; i < isletCount; i++) {
      const ix = width * (0.2 + Math.random() * 0.6);
      const iy = height * (0.35 + Math.random() * 0.3);
      ctx.beginPath();
      ctx.arc(ix, iy, 2.5, 0, Math.PI * 2);
      ctx.fill();
    }

    // Outline
    ctx.strokeStyle = color.dark;
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(width * 0.85, height * 0.35);
    ctx.bezierCurveTo(width * 0.95, height * 0.3, width * 0.98, height * 0.4, width * 0.95, height * 0.55);
    ctx.bezierCurveTo(width * 0.92, height * 0.68, width * 0.85, height * 0.75, width * 0.75, height * 0.72);
    ctx.bezierCurveTo(width * 0.6, height * 0.7, width * 0.45, height * 0.65, width * 0.3, height * 0.58);
    ctx.bezierCurveTo(width * 0.15, height * 0.52, width * 0.05, height * 0.45, width * 0.02, height * 0.38);
    ctx.bezierCurveTo(width * 0.0, height * 0.32, width * 0.02, height * 0.28, width * 0.08, height * 0.3);
    ctx.bezierCurveTo(width * 0.25, height * 0.35, width * 0.45, height * 0.32, width * 0.65, height * 0.3);
    ctx.bezierCurveTo(width * 0.75, height * 0.28, width * 0.82, height * 0.3, width * 0.85, height * 0.35);
    ctx.closePath();
    ctx.stroke();

    ctx.restore();
  }

  static drawSpleen(ctx, x, y, width, height) {
    ctx.save();
    ctx.translate(x, y);

    const color = { base: '#800080', light: '#9370DB', dark: '#4B0082' };

    const gradient = ctx.createRadialGradient(width * 0.4, height * 0.4, 0, width * 0.5, height * 0.5, width * 0.6);
    gradient.addColorStop(0, color.light);
    gradient.addColorStop(0.5, color.base);
    gradient.addColorStop(1, color.dark);

    ctx.fillStyle = gradient;

    // Spleen shape (oval/football-shaped)
    ctx.beginPath();
    ctx.moveTo(width * 0.3, height * 0.15);
    ctx.bezierCurveTo(width * 0.15, height * 0.2, width * 0.08, height * 0.35, width * 0.12, height * 0.55);
    ctx.bezierCurveTo(width * 0.16, height * 0.75, width * 0.28, height * 0.9, width * 0.45, height * 0.92);
    ctx.bezierCurveTo(width * 0.62, height * 0.94, width * 0.78, height * 0.82, width * 0.85, height * 0.65);
    ctx.bezierCurveTo(width * 0.92, height * 0.48, width * 0.88, height * 0.28, width * 0.75, height * 0.18);
    ctx.bezierCurveTo(width * 0.62, height * 0.08, width * 0.45, height * 0.1, width * 0.3, height * 0.15);
    ctx.closePath();
    ctx.fill();

    // Hilum (indentation where vessels enter)
    ctx.strokeStyle = color.dark;
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.moveTo(width * 0.35, height * 0.4);
    ctx.bezierCurveTo(width * 0.4, height * 0.45, width * 0.4, height * 0.55, width * 0.35, height * 0.6);
    ctx.stroke();

    // Splenic pulp texture (red and white pulp)
    ctx.fillStyle = 'rgba(147, 112, 219, 0.4)'; // White pulp
    for(let i = 0; i < 15; i++) {
      const px = width * (0.2 + Math.random() * 0.5);
      const py = height * (0.2 + Math.random() * 0.6);
      ctx.beginPath();
      ctx.arc(px, py, 2 + Math.random() * 2, 0, Math.PI * 2);
      ctx.fill();
    }

    // Splenic artery
    ctx.strokeStyle = '#E74C3C';
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.moveTo(width * 0.95, height * 0.45);
    ctx.bezierCurveTo(width * 0.7, height * 0.42, width * 0.5, height * 0.45, width * 0.38, height * 0.48);
    ctx.stroke();

    // Splenic vein
    ctx.strokeStyle = '#8B4789';
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.moveTo(width * 0.38, height * 0.52);
    ctx.bezierCurveTo(width * 0.5, height * 0.55, width * 0.7, height * 0.58, width * 0.95, height * 0.55);
    ctx.stroke();

    // Outline
    ctx.strokeStyle = color.dark;
    ctx.lineWidth = 2.5;
    ctx.beginPath();
    ctx.moveTo(width * 0.3, height * 0.15);
    ctx.bezierCurveTo(width * 0.15, height * 0.2, width * 0.08, height * 0.35, width * 0.12, height * 0.55);
    ctx.bezierCurveTo(width * 0.16, height * 0.75, width * 0.28, height * 0.9, width * 0.45, height * 0.92);
    ctx.bezierCurveTo(width * 0.62, height * 0.94, width * 0.78, height * 0.82, width * 0.85, height * 0.65);
    ctx.bezierCurveTo(width * 0.92, height * 0.48, width * 0.88, height * 0.28, width * 0.75, height * 0.18);
    ctx.bezierCurveTo(width * 0.62, height * 0.08, width * 0.45, height * 0.1, width * 0.3, height * 0.15);
    ctx.closePath();
    ctx.stroke();

    ctx.restore();
  }

  static drawBladder(ctx, x, y, width, height, fillLevel = 0.5) {
    ctx.save();
    ctx.translate(x, y);

    const color = { base: '#FFD700', light: '#FFED4E', dark: '#D4AF37' };

    // Bladder wall
    const gradient = ctx.createRadialGradient(width * 0.5, height * 0.4, 0, width * 0.5, height * 0.5, width * 0.6);
    gradient.addColorStop(0, color.light);
    gradient.addColorStop(0.5, color.base);
    gradient.addColorStop(1, color.dark);

    ctx.fillStyle = gradient;

    // Bladder shape (balloon-like when full)
    const fullness = 0.3 + fillLevel * 0.6; // Scale from 0.3 to 0.9
    ctx.beginPath();
    ctx.moveTo(width * 0.5, height * 0.1);
    ctx.bezierCurveTo(
      width * (0.2 - fullness * 0.1), height * 0.15,
      width * (0.1 - fullness * 0.05), height * 0.4,
      width * 0.15, height * 0.65
    );
    ctx.bezierCurveTo(width * 0.2, height * 0.85, width * 0.35, height * 0.92, width * 0.5, height * 0.9);
    ctx.bezierCurveTo(width * 0.65, height * 0.92, width * 0.8, height * 0.85, width * 0.85, height * 0.65);
    ctx.bezierCurveTo(
      width * (0.9 + fullness * 0.05), height * 0.4,
      width * (0.8 + fullness * 0.1), height * 0.15,
      width * 0.5, height * 0.1
    );
    ctx.closePath();
    ctx.fill();

    // Urine (if present)
    if(fillLevel > 0.1) {
      ctx.fillStyle = 'rgba(255, 255, 150, 0.6)';
      ctx.beginPath();
      const urineTop = height * (0.9 - fillLevel * 0.7);
      ctx.moveTo(width * 0.2, urineTop);
      ctx.lineTo(width * 0.8, urineTop);
      ctx.bezierCurveTo(width * 0.8, height * 0.85, width * 0.65, height * 0.92, width * 0.5, height * 0.9);
      ctx.bezierCurveTo(width * 0.35, height * 0.92, width * 0.2, height * 0.85, width * 0.2, urineTop);
      ctx.closePath();
      ctx.fill();
    }

    // Detrusor muscle (bladder wall texture)
    ctx.strokeStyle = 'rgba(212, 175, 55, 0.3)';
    ctx.lineWidth = 1.5;
    for(let i = 0; i < 8; i++) {
      ctx.beginPath();
      const angle = (i * Math.PI) / 4;
      const x1 = width * 0.5 + Math.cos(angle) * width * 0.15;
      const y1 = height * 0.5 + Math.sin(angle) * height * 0.2;
      const x2 = width * 0.5 + Math.cos(angle) * width * 0.35;
      const y2 = height * 0.5 + Math.sin(angle) * height * 0.35;
      ctx.moveTo(x1, y1);
      ctx.lineTo(x2, y2);
      ctx.stroke();
    }

    // Ureters (tubes from kidneys)
    ctx.strokeStyle = color.base;
    ctx.lineWidth = 3;
    // Left ureter
    ctx.beginPath();
    ctx.moveTo(width * 0.3, height * 0.05);
    ctx.bezierCurveTo(width * 0.28, height * 0.08, width * 0.32, height * 0.12, width * 0.35, height * 0.15);
    ctx.stroke();
    // Right ureter
    ctx.beginPath();
    ctx.moveTo(width * 0.7, height * 0.05);
    ctx.bezierCurveTo(width * 0.72, height * 0.08, width * 0.68, height * 0.12, width * 0.65, height * 0.15);
    ctx.stroke();

    // Urethra (tube to outside)
    ctx.strokeStyle = color.dark;
    ctx.lineWidth = 4;
    ctx.beginPath();
    ctx.moveTo(width * 0.5, height * 0.9);
    ctx.lineTo(width * 0.5, height * 0.98);
    ctx.stroke();

    // Trigone (triangular area at base)
    ctx.strokeStyle = '#DAA520';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(width * 0.35, height * 0.75);
    ctx.lineTo(width * 0.65, height * 0.75);
    ctx.lineTo(width * 0.5, height * 0.85);
    ctx.closePath();
    ctx.stroke();

    // Outline
    ctx.strokeStyle = color.dark;
    ctx.lineWidth = 2.5;
    ctx.beginPath();
    ctx.moveTo(width * 0.5, height * 0.1);
    ctx.bezierCurveTo(
      width * (0.2 - fullness * 0.1), height * 0.15,
      width * (0.1 - fullness * 0.05), height * 0.4,
      width * 0.15, height * 0.65
    );
    ctx.bezierCurveTo(width * 0.2, height * 0.85, width * 0.35, height * 0.92, width * 0.5, height * 0.9);
    ctx.bezierCurveTo(width * 0.65, height * 0.92, width * 0.8, height * 0.85, width * 0.85, height * 0.65);
    ctx.bezierCurveTo(
      width * (0.9 + fullness * 0.05), height * 0.4,
      width * (0.8 + fullness * 0.1), height * 0.15,
      width * 0.5, height * 0.1
    );
    ctx.closePath();
    ctx.stroke();

    ctx.restore();
  }

  static drawEye(ctx, x, y, width, height, pupilDilation = 0.3) {
    ctx.save();
    ctx.translate(x, y);

    // Sclera (white of eye)
    ctx.fillStyle = '#FFFFFF';
    ctx.beginPath();
    ctx.ellipse(width * 0.5, height * 0.5, width * 0.45, height * 0.4, 0, 0, Math.PI * 2);
    ctx.fill();

    // Blood vessels
    ctx.strokeStyle = 'rgba(255, 100, 100, 0.3)';
    ctx.lineWidth = 0.5;
    for(let i = 0; i < 8; i++) {
      ctx.beginPath();
      const angle = (i * Math.PI) / 4;
      const startX = width * 0.5 + Math.cos(angle) * width * 0.25;
      const startY = height * 0.5 + Math.sin(angle) * height * 0.2;
      const endX = width * 0.5 + Math.cos(angle) * width * 0.42;
      const endY = height * 0.5 + Math.sin(angle) * height * 0.38;
      ctx.moveTo(startX, startY);
      ctx.quadraticCurveTo(
        startX + Math.random() * 10 - 5,
        startY + Math.random() * 10 - 5,
        endX,
        endY
      );
      ctx.stroke();
    }

    // Iris
    const irisGradient = ctx.createRadialGradient(
      width * 0.5, height * 0.5, 0,
      width * 0.5, height * 0.5, width * 0.25
    );
    irisGradient.addColorStop(0, '#8B7355');
    irisGradient.addColorStop(0.3, '#A0826D');
    irisGradient.addColorStop(0.7, '#654321');
    irisGradient.addColorStop(1, '#3E2723');
    ctx.fillStyle = irisGradient;
    ctx.beginPath();
    ctx.arc(width * 0.5, height * 0.5, width * 0.25, 0, Math.PI * 2);
    ctx.fill();

    // Iris texture (radial lines)
    ctx.strokeStyle = 'rgba(101, 67, 33, 0.3)';
    ctx.lineWidth = 1;
    for(let i = 0; i < 16; i++) {
      const angle = (i * Math.PI) / 8;
      ctx.beginPath();
      ctx.moveTo(
        width * 0.5 + Math.cos(angle) * width * 0.08,
        height * 0.5 + Math.sin(angle) * height * 0.08
      );
      ctx.lineTo(
        width * 0.5 + Math.cos(angle) * width * 0.24,
        height * 0.5 + Math.sin(angle) * height * 0.24
      );
      ctx.stroke();
    }

    // Pupil
    const pupilSize = width * (0.08 + pupilDilation * 0.12);
    ctx.fillStyle = '#000000';
    ctx.beginPath();
    ctx.arc(width * 0.5, height * 0.5, pupilSize, 0, Math.PI * 2);
    ctx.fill();

    // Reflection/highlight
    ctx.fillStyle = 'rgba(255, 255, 255, 0.8)';
    ctx.beginPath();
    ctx.arc(width * 0.55, height * 0.45, width * 0.05, 0, Math.PI * 2);
    ctx.fill();
    ctx.beginPath();
    ctx.arc(width * 0.42, height * 0.48, width * 0.02, 0, Math.PI * 2);
    ctx.fill();

    // Cornea outline
    ctx.strokeStyle = 'rgba(0, 0, 0, 0.2)';
    ctx.lineWidth = 1.5;
    ctx.beginPath();
    ctx.arc(width * 0.5, height * 0.5, width * 0.27, 0, Math.PI * 2);
    ctx.stroke();

    // Sclera outline
    ctx.strokeStyle = '#000000';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.ellipse(width * 0.5, height * 0.5, width * 0.45, height * 0.4, 0, 0, Math.PI * 2);
    ctx.stroke();

    ctx.restore();
  }

  static drawSkeleton(ctx, x, y, width, height, bone = 'skull') {
    ctx.save();
    ctx.translate(x, y);

    const boneColor = { base: '#F5F5DC', light: '#FFFAF0', dark: '#D3D3C0' };

    switch(bone) {
      case 'skull':
        this.drawSkull(ctx, boneColor, width, height);
        break;
      case 'femur':
        this.drawFemur(ctx, boneColor, width, height);
        break;
      case 'ribcage':
        this.drawRibcage(ctx, boneColor, width, height);
        break;
      case 'spine':
        this.drawSpine(ctx, boneColor, width, height);
        break;
    }

    ctx.restore();
  }

  static drawSkull(ctx, color, width, height) {
    const gradient = ctx.createRadialGradient(width * 0.5, height * 0.3, 0, width * 0.5, height * 0.4, width * 0.5);
    gradient.addColorStop(0, color.light);
    gradient.addColorStop(0.6, color.base);
    gradient.addColorStop(1, color.dark);

    ctx.fillStyle = gradient;

    // Cranium (brain case)
    ctx.beginPath();
    ctx.moveTo(width * 0.3, height * 0.35);
    ctx.bezierCurveTo(width * 0.15, height * 0.25, width * 0.1, height * 0.15, width * 0.2, height * 0.08);
    ctx.bezierCurveTo(width * 0.35, height * 0.02, width * 0.65, height * 0.02, width * 0.8, height * 0.08);
    ctx.bezierCurveTo(width * 0.9, height * 0.15, width * 0.85, height * 0.25, width * 0.7, height * 0.35);
    ctx.closePath();
    ctx.fill();

    // Face
    ctx.beginPath();
    ctx.moveTo(width * 0.3, height * 0.35);
    ctx.lineTo(width * 0.28, height * 0.55);
    ctx.lineTo(width * 0.35, height * 0.68);
    ctx.lineTo(width * 0.65, height * 0.68);
    ctx.lineTo(width * 0.72, height * 0.55);
    ctx.lineTo(width * 0.7, height * 0.35);
    ctx.closePath();
    ctx.fill();

    // Eye sockets
    ctx.fillStyle = '#000000';
    ctx.beginPath();
    ctx.ellipse(width * 0.35, height * 0.42, width * 0.08, height * 0.1, 0, 0, Math.PI * 2);
    ctx.fill();
    ctx.beginPath();
    ctx.ellipse(width * 0.65, height * 0.42, width * 0.08, height * 0.1, 0, 0, Math.PI * 2);
    ctx.fill();

    // Nasal cavity
    ctx.beginPath();
    ctx.moveTo(width * 0.45, height * 0.52);
    ctx.lineTo(width * 0.42, height * 0.62);
    ctx.lineTo(width * 0.5, height * 0.64);
    ctx.lineTo(width * 0.58, height * 0.62);
    ctx.lineTo(width * 0.55, height * 0.52);
    ctx.closePath();
    ctx.fill();

    // Teeth (upper jaw)
    ctx.fillStyle = color.light;
    for(let i = 0; i < 8; i++) {
      const tx = width * (0.38 + i * 0.03);
      ctx.fillRect(tx, height * 0.68, width * 0.025, height * 0.05);
    }

    // Mandible (lower jaw)
    ctx.fillStyle = gradient;
    ctx.beginPath();
    ctx.moveTo(width * 0.35, height * 0.68);
    ctx.lineTo(width * 0.28, height * 0.75);
    ctx.bezierCurveTo(width * 0.25, height * 0.85, width * 0.35, height * 0.92, width * 0.5, height * 0.94);
    ctx.bezierCurveTo(width * 0.65, height * 0.92, width * 0.75, height * 0.85, width * 0.72, height * 0.75);
    ctx.lineTo(width * 0.65, height * 0.68);
    ctx.closePath();
    ctx.fill();

    // Lower teeth
    ctx.fillStyle = color.light;
    for(let i = 0; i < 8; i++) {
      const tx = width * (0.38 + i * 0.03);
      ctx.fillRect(tx, height * 0.73, width * 0.025, height * 0.04);
    }
    // Cranial sutures (skull joints)
    ctx.strokeStyle = color.dark;
    ctx.lineWidth = 1.5;
    // Sagittal suture
    ctx.beginPath();
    ctx.moveTo(width * 0.5, height * 0.05);
    ctx.bezierCurveTo(width * 0.5, height * 0.15, width * 0.5, height * 0.25, width * 0.5, height * 0.35);
    ctx.stroke();
    // Coronal suture
    ctx.beginPath();
    ctx.moveTo(width * 0.22, height * 0.15);
    ctx.bezierCurveTo(width * 0.35, height * 0.12, width * 0.65, height * 0.12, width * 0.78, height * 0.15);
    ctx.stroke();

    // Temporal bone features
    ctx.beginPath();
    ctx.arc(width * 0.2, height * 0.4, width * 0.04, 0, Math.PI * 2);
    ctx.stroke();
    ctx.beginPath();
    ctx.arc(width * 0.8, height * 0.4, width * 0.04, 0, Math.PI * 2);
    ctx.stroke();

    // Outline
    ctx.strokeStyle = color.dark;
    ctx.lineWidth = 2.5;
    ctx.beginPath();
    ctx.moveTo(width * 0.3, height * 0.35);
    ctx.bezierCurveTo(width * 0.15, height * 0.25, width * 0.1, height * 0.15, width * 0.2, height * 0.08);
    ctx.bezierCurveTo(width * 0.35, height * 0.02, width * 0.65, height * 0.02, width * 0.8, height * 0.08);
    ctx.bezierCurveTo(width * 0.9, height * 0.15, width * 0.85, height * 0.25, width * 0.7, height * 0.35);
    ctx.stroke();
  }

  static drawFemur(ctx, color, width, height) {
    const gradient = ctx.createLinearGradient(0, 0, width, height);
    gradient.addColorStop(0, color.light);
    gradient.addColorStop(0.5, color.base);
    gradient.addColorStop(1, color.dark);

    ctx.fillStyle = gradient;

    // Femoral head (ball joint at hip)
    ctx.beginPath();
    ctx.arc(width * 0.3, height * 0.15, width * 0.15, 0, Math.PI * 2);
    ctx.fill();

    // Greater trochanter (bump on outside)
    ctx.beginPath();
    ctx.arc(width * 0.55, height * 0.18, width * 0.1, 0, Math.PI * 2);
    ctx.fill();

    // Neck
    ctx.beginPath();
    ctx.moveTo(width * 0.4, height * 0.2);
    ctx.lineTo(width * 0.48, height * 0.28);
    ctx.lineTo(width * 0.52, height * 0.28);
    ctx.lineTo(width * 0.43, height * 0.15);
    ctx.closePath();
    ctx.fill();

    // Shaft (main body of femur)
    ctx.beginPath();
    ctx.moveTo(width * 0.48, height * 0.28);
    ctx.lineTo(width * 0.45, height * 0.75);
    ctx.lineTo(width * 0.55, height * 0.75);
    ctx.lineTo(width * 0.52, height * 0.28);
    ctx.closePath();
    ctx.fill();

    // Medullary cavity (marrow cavity - hollow center)
    ctx.fillStyle = '#FFE4C4';
    ctx.beginPath();
    ctx.moveTo(width * 0.49, height * 0.35);
    ctx.lineTo(width * 0.47, height * 0.7);
    ctx.lineTo(width * 0.53, height * 0.7);
    ctx.lineTo(width * 0.51, height * 0.35);
    ctx.closePath();
    ctx.fill();

    // Lateral condyle (outer knuckle)
    ctx.fillStyle = gradient;
    ctx.beginPath();
    ctx.arc(width * 0.4, height * 0.88, width * 0.12, 0, Math.PI * 2);
    ctx.fill();

    // Medial condyle (inner knuckle)
    ctx.beginPath();
    ctx.arc(width * 0.6, height * 0.88, width * 0.12, 0, Math.PI * 2);
    ctx.fill();

    // Intercondylar notch (groove between condyles)
    ctx.fillStyle = color.dark;
    ctx.beginPath();
    ctx.moveTo(width * 0.48, height * 0.82);
    ctx.lineTo(width * 0.46, height * 0.92);
    ctx.lineTo(width * 0.54, height * 0.92);
    ctx.lineTo(width * 0.52, height * 0.82);
    ctx.closePath();
    ctx.fill();

    // Linea aspera (ridge on back of shaft)
    ctx.strokeStyle = color.dark;
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(width * 0.5, height * 0.32);
    ctx.lineTo(width * 0.5, height * 0.72);
    ctx.stroke();

    // Outline
    ctx.strokeStyle = color.dark;
    ctx.lineWidth = 2.5;
    ctx.beginPath();
    ctx.arc(width * 0.3, height * 0.15, width * 0.15, 0, Math.PI * 2);
    ctx.stroke();
    ctx.beginPath();
    ctx.arc(width * 0.55, height * 0.18, width * 0.1, 0, Math.PI * 2);
    ctx.stroke();
    ctx.beginPath();
    ctx.arc(width * 0.4, height * 0.88, width * 0.12, 0, Math.PI * 2);
    ctx.stroke();
    ctx.beginPath();
    ctx.arc(width * 0.6, height * 0.88, width * 0.12, 0, Math.PI * 2);
    ctx.stroke();
  }

  static drawRibcage(ctx, color, width, height) {
    const gradient = ctx.createRadialGradient(width * 0.5, height * 0.3, 0, width * 0.5, height * 0.5, width * 0.6);
    gradient.addColorStop(0, color.light);
    gradient.addColorStop(0.5, color.base);
    gradient.addColorStop(1, color.dark);

    ctx.fillStyle = gradient;

    // Sternum (breastbone)
    ctx.beginPath();
    ctx.moveTo(width * 0.48, height * 0.05);
    ctx.lineTo(width * 0.46, height * 0.55);
    ctx.lineTo(width * 0.54, height * 0.55);
    ctx.lineTo(width * 0.52, height * 0.05);
    ctx.closePath();
    ctx.fill();

    // Manubrium (top of sternum)
    ctx.beginPath();
    ctx.moveTo(width * 0.44, height * 0.05);
    ctx.lineTo(width * 0.42, height * 0.12);
    ctx.lineTo(width * 0.58, height * 0.12);
    ctx.lineTo(width * 0.56, height * 0.05);
    ctx.closePath();
    ctx.fill();

    // Xiphoid process (bottom of sternum)
    ctx.beginPath();
    ctx.moveTo(width * 0.48, height * 0.55);
    ctx.lineTo(width * 0.5, height * 0.62);
    ctx.lineTo(width * 0.52, height * 0.55);
    ctx.closePath();
    ctx.fill();

    // Ribs (12 pairs)
    ctx.strokeStyle = color.base;
    ctx.lineWidth = 3;
    ctx.fillStyle = gradient;

    const ribCount = 12;
    for(let i = 0; i < ribCount; i++) {
      const startY = height * (0.08 + i * 0.042);
      const ribWidth = width * (0.35 + (i < 7 ? i * 0.05 : (11 - i) * 0.03));
      const ribHeight = height * (0.08 + i * 0.01);

      // Right rib
      ctx.beginPath();
      ctx.moveTo(width * 0.52, startY);
      ctx.bezierCurveTo(
        width * (0.52 + ribWidth * 0.3), startY,
        width * (0.52 + ribWidth * 0.7), startY + ribHeight * 0.5,
        width * (0.52 + ribWidth), startY + ribHeight
      );
      if(i < 10) {
        // True and false ribs attach to sternum
        ctx.bezierCurveTo(
          width * (0.52 + ribWidth * 0.7), startY + ribHeight * 1.2,
          width * (0.52 + ribWidth * 0.3), startY + ribHeight * 0.8,
          width * 0.52, startY + ribHeight * 0.6
        );
      }
      ctx.stroke();

      // Left rib
      ctx.beginPath();
      ctx.moveTo(width * 0.48, startY);
      ctx.bezierCurveTo(
        width * (0.48 - ribWidth * 0.3), startY,
        width * (0.48 - ribWidth * 0.7), startY + ribHeight * 0.5,
        width * (0.48 - ribWidth), startY + ribHeight
      );
      if(i < 10) {
        ctx.bezierCurveTo(
          width * (0.48 - ribWidth * 0.7), startY + ribHeight * 1.2,
          width * (0.48 - ribWidth * 0.3), startY + ribHeight * 0.8,
          width * 0.48, startY + ribHeight * 0.6
        );
      }
      ctx.stroke();
    }

    // Costal cartilage (softer connection to sternum)
    ctx.strokeStyle = '#B0C4DE';
    ctx.lineWidth = 2;
    for(let i = 0; i < 7; i++) {
      const startY = height * (0.08 + i * 0.042);
      const cartY = startY + height * (0.05 + i * 0.008);
      ctx.beginPath();
      ctx.moveTo(width * 0.52, startY);
      ctx.lineTo(width * 0.65, cartY);
      ctx.stroke();
      ctx.beginPath();
      ctx.moveTo(width * 0.48, startY);
      ctx.lineTo(width * 0.35, cartY);
      ctx.stroke();
    }

    // Sternum outline
    ctx.strokeStyle = color.dark;
    ctx.lineWidth = 2.5;
    ctx.beginPath();
    ctx.moveTo(width * 0.44, height * 0.05);
    ctx.lineTo(width * 0.42, height * 0.12);
    ctx.lineTo(width * 0.46, height * 0.55);
    ctx.lineTo(width * 0.5, height * 0.62);
    ctx.lineTo(width * 0.54, height * 0.55);
    ctx.lineTo(width * 0.58, height * 0.12);
    ctx.lineTo(width * 0.56, height * 0.05);
    ctx.closePath();
    ctx.stroke();
  }

  static drawSpine(ctx, color, width, height) {
    const gradient = ctx.createLinearGradient(0, 0, width, height);
    gradient.addColorStop(0, color.light);
    gradient.addColorStop(0.5, color.base);
    gradient.addColorStop(1, color.dark);

    // Vertebrae (33 bones, draw representative sections)
    const vertebraCount = 24; // Draw 24 vertebrae
    const vertebraHeight = height / vertebraCount;

    for(let i = 0; i < vertebraCount; i++) {
      const y = i * vertebraHeight;
      const size = width * (0.15 - Math.abs(i - 12) * 0.002); // Vary size

      ctx.fillStyle = gradient;

      // Vertebral body (anterior/front)
      ctx.beginPath();
      ctx.roundRect(width * 0.35, y + vertebraHeight * 0.2, width * 0.3, vertebraHeight * 0.6, 2);
      ctx.fill();

      // Vertebral arch (posterior)
      ctx.beginPath();
      ctx.arc(width * 0.5, y + vertebraHeight * 0.5, width * 0.2, 0, Math.PI * 2);
      ctx.fill();

      // Spinous process (the bump you can feel on your back)
      ctx.beginPath();
      ctx.moveTo(width * 0.48, y + vertebraHeight * 0.5);
      ctx.lineTo(width * 0.45, y + vertebraHeight * 0.8);
      ctx.lineTo(width * 0.55, y + vertebraHeight * 0.8);
      ctx.lineTo(width * 0.52, y + vertebraHeight * 0.5);
      ctx.closePath();
      ctx.fill();

      // Transverse processes (side projections)
      ctx.fillRect(width * 0.2, y + vertebraHeight * 0.4, width * 0.1, vertebraHeight * 0.2);
      ctx.fillRect(width * 0.7, y + vertebraHeight * 0.4, width * 0.1, vertebraHeight * 0.2);

      // Outline vertebra
      ctx.strokeStyle = color.dark;
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.roundRect(width * 0.35, y + vertebraHeight * 0.2, width * 0.3, vertebraHeight * 0.6, 2);
      ctx.stroke();
    }

    // Intervertebral discs (between vertebrae)
    ctx.fillStyle = '#87CEEB';
    for(let i = 0; i < vertebraCount - 1; i++) {
      const y = (i + 1) * vertebraHeight - vertebraHeight * 0.15;
      ctx.beginPath();
      ctx.ellipse(width * 0.5, y, width * 0.18, vertebraHeight * 0.15, 0, 0, Math.PI * 2);
      ctx.fill();
    }

    // Spinal cord (inside vertebral canal)
    ctx.strokeStyle = '#FFD700';
    ctx.lineWidth = 4;
    ctx.beginPath();
    ctx.moveTo(width * 0.5, 0);
    ctx.lineTo(width * 0.5, height);
    ctx.stroke();

    // Spinal nerves (exiting on sides)
    ctx.strokeStyle = '#FFD700';
    ctx.lineWidth = 1.5;
    for(let i = 0; i < vertebraCount; i++) {
      const y = i * vertebraHeight + vertebraHeight * 0.5;
      ctx.beginPath();
      ctx.moveTo(width * 0.5, y);
      ctx.lineTo(width * 0.15, y + 5);
      ctx.stroke();
      ctx.beginPath();
      ctx.moveTo(width * 0.5, y);
      ctx.lineTo(width * 0.85, y + 5);
      ctx.stroke();
    }

    // Curvatures (natural curves of spine)
    ctx.strokeStyle = color.dark;
    ctx.lineWidth = 3;
    ctx.setLineDash([5, 5]);
    ctx.beginPath();
    ctx.moveTo(width * 0.5, 0);
    ctx.bezierCurveTo(
      width * 0.6, height * 0.15,
      width * 0.4, height * 0.4,
      width * 0.55, height * 0.65
    );
    ctx.bezierCurveTo(width * 0.6, height * 0.8, width * 0.5, height * 0.95, width * 0.5, height);
    ctx.stroke();
    ctx.setLineDash([]);
  }

  static drawMuscle(ctx, x, y, width, height, type = 'bicep') {
    ctx.save();
    ctx.translate(x, y);

    const muscleColor = { base: '#DC143C', light: '#FF6B7A', dark: '#A52A2A' };

    switch(type) {
      case 'bicep':
        this.drawBicep(ctx, muscleColor, width, height);
        break;
      case 'heart':
        // Already have heart muscle, use cardiac pattern
        this.drawCardiacMuscle(ctx, muscleColor, width, height);
        break;
      case 'smooth':
        this.drawSmoothMuscle(ctx, muscleColor, width, height);
        break;
    }

    ctx.restore();
  }

  static drawBicep(ctx, color, width, height) {
    const gradient = ctx.createLinearGradient(0, 0, width, height);
    gradient.addColorStop(0, color.dark);
    gradient.addColorStop(0.3, color.base);
    gradient.addColorStop(0.7, color.base);
    gradient.addColorStop(1, color.dark);

    ctx.fillStyle = gradient;

    // Bicep muscle belly
    ctx.beginPath();
    ctx.moveTo(width * 0.3, height * 0.1);
    ctx.bezierCurveTo(width * 0.15, height * 0.2, width * 0.1, height * 0.35, width * 0.15, height * 0.5);
    ctx.bezierCurveTo(width * 0.2, height * 0.65, width * 0.3, height * 0.75, width * 0.35, height * 0.85);
    ctx.lineTo(width * 0.65, height * 0.85);
    ctx.bezierCurveTo(width * 0.7, height * 0.75, width * 0.8, height * 0.65, width * 0.85, height * 0.5);
    ctx.bezierCurveTo(width * 0.9, height * 0.35, width * 0.85, height * 0.2, width * 0.7, height * 0.1);
    ctx.closePath();
    ctx.fill();

    // Muscle fibers (striations)
    ctx.strokeStyle = 'rgba(0, 0, 0, 0.15)';
    ctx.lineWidth = 1;
    for(let i = 0; i < 20; i++) {
      ctx.beginPath();
      const y = height * (0.15 + i * 0.035);
      ctx.moveTo(width * 0.2, y);
      ctx.lineTo(width * 0.8, y);
      ctx.stroke();
    }

    // Tendons
    ctx.fillStyle = '#F5DEB3';
    // Upper tendon
    ctx.fillRect(width * 0.4, height * 0.02, width * 0.2, height * 0.1);
    // Lower tendon
    ctx.fillRect(width * 0.42, height * 0.85, width * 0.16, height * 0.13);

    // Fascia (connective tissue covering)
    ctx.strokeStyle = 'rgba(245, 222, 179, 0.5)';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(width * 0.3, height * 0.1);
    ctx.bezierCurveTo(width * 0.15, height * 0.2, width * 0.1, height * 0.35, width * 0.15, height * 0.5);
    ctx.bezierCurveTo(width * 0.2, height * 0.65, width * 0.3, height * 0.75, width * 0.35, height * 0.85);
    ctx.stroke();

    // Outline
    ctx.strokeStyle = color.dark;
    ctx.lineWidth = 2.5;
    ctx.beginPath();
    ctx.moveTo(width * 0.3, height * 0.1);
    ctx.bezierCurveTo(width * 0.15, height * 0.2, width * 0.1, height * 0.35, width * 0.15, height * 0.5);
    ctx.bezierCurveTo(width * 0.2, height * 0.65, width * 0.3, height * 0.75, width * 0.35, height * 0.85);
    ctx.lineTo(width * 0.65, height * 0.85);
    ctx.bezierCurveTo(width * 0.7, height * 0.75, width * 0.8, height * 0.65, width * 0.85, height * 0.5);
    ctx.bezierCurveTo(width * 0.9, height * 0.35, width * 0.85, height * 0.2, width * 0.7, height * 0.1);
    ctx.closePath();
    ctx.stroke();
  }

  static drawCardiacMuscle(ctx, color, width, height) {
    // Cardiac muscle cells (interconnected)
    const gradient = ctx.createRadialGradient(width * 0.5, height * 0.5, 0, width * 0.5, height * 0.5, width * 0.6);
    gradient.addColorStop(0, color.light);
    gradient.addColorStop(0.5, color.base);
    gradient.addColorStop(1, color.dark);

    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, width, height);

    // Intercalated discs (connections between cells)
    ctx.strokeStyle = color.dark;
    ctx.lineWidth = 2;
    for(let i = 0; i < 10; i++) {
      const y = height * (i / 10);
      ctx.beginPath();
      ctx.moveTo(0, y);
      ctx.lineTo(width, y);
      ctx.stroke();
    }

    // Striations
    ctx.strokeStyle = 'rgba(0, 0, 0, 0.1)';
    ctx.lineWidth = 1;
    for(let i = 0; i < 30; i++) {
      const y = height * (i / 30);
      ctx.beginPath();
      ctx.moveTo(0, y);
      ctx.lineTo(width, y);
      ctx.stroke();
    }

    // Branch points
    ctx.fillStyle = color.dark;
    for(let i = 0; i < 5; i++) {
      const x = width * (0.2 + Math.random() * 0.6);
      const y = height * (0.2 + Math.random() * 0.6);
      ctx.beginPath();
      ctx.arc(x, y, 3, 0, Math.PI * 2);
      ctx.fill();
    }
  }

  static drawSmoothMuscle(ctx, color, width, height) {
    // Smooth muscle (no striations, spindle-shaped cells)
    const gradient = ctx.createLinearGradient(0, 0, width, height);
    gradient.addColorStop(0, color.light);
    gradient.addColorStop(0.5, color.base);
    gradient.addColorStop(1, color.dark);

    // Draw spindle-shaped cells overlapping
    const cellCount = 15;
    for(let i = 0; i < cellCount; i++) {
      const cy = (i / cellCount) * height;
      const offset = (i % 2) * width * 0.1;

      ctx.fillStyle = gradient;
      ctx.beginPath();
      ctx.ellipse(width * 0.5 + offset, cy, width * 0.15, height * 0.08, Math.PI / 6, 0, Math.PI * 2);
      ctx.fill();

      // Nucleus
      ctx.fillStyle = '#4B0082';
      ctx.beginPath();
      ctx.ellipse(width * 0.5 + offset, cy, width * 0.04, height * 0.02, Math.PI / 6, 0, Math.PI * 2);
      ctx.fill();

      // Outline
      ctx.strokeStyle = color.dark;
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.ellipse(width * 0.5 + offset, cy, width * 0.15, height * 0.08, Math.PI / 6, 0, Math.PI * 2);
      ctx.stroke();
    }
  }

  static drawNeuron(ctx, x, y, width, height) {
    ctx.save();
    ctx.translate(x, y);

    const neuronColor = { base: '#FFD700', light: '#FFED4E', dark: '#DAA520' };

    // Cell body (soma)
    const gradient = ctx.createRadialGradient(width * 0.5, height * 0.5, 0, width * 0.5, height * 0.5, width * 0.15);
    gradient.addColorStop(0, neuronColor.light);
    gradient.addColorStop(0.7, neuronColor.base);
    gradient.addColorStop(1, neuronColor.dark);

    ctx.fillStyle = gradient;
    ctx.beginPath();
    ctx.arc(width * 0.5, height * 0.5, width * 0.15, 0, Math.PI * 2);
    ctx.fill();

    // Nucleus
    ctx.fillStyle = '#8B4513';
    ctx.beginPath();
    ctx.arc(width * 0.5, height * 0.5, width * 0.08, 0, Math.PI * 2);
    ctx.fill();

    // Nucleolus
    ctx.fillStyle = '#654321';
    ctx.beginPath();
    ctx.arc(width * 0.52, height * 0.48, width * 0.03, 0, Math.PI * 2);
    ctx.fill();

    // Dendrites (branching inputs)
    ctx.strokeStyle = neuronColor.base;
    ctx.lineWidth = 2;
    const dendriteCount = 6;
    for(let i = 0; i < dendriteCount; i++) {
      const angle = ((i / dendriteCount) * Math.PI * 2) - Math.PI / 2;
      if(Math.abs(angle) < Math.PI * 0.6) { // Don't draw on axon side
        this.drawDendrite(ctx, 
          width * 0.5 + Math.cos(angle) * width * 0.15,
          height * 0.5 + Math.sin(angle) * height * 0.15,
          angle, 3, width * 0.08
        );
      }
    }

    // Axon (long projection)
    ctx.strokeStyle = neuronColor.base;
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.moveTo(width * 0.5, height * 0.65);
    ctx.bezierCurveTo(
      width * 0.52, height * 0.75,
      width * 0.48, height * 0.85,
      width * 0.5, height * 0.95
    );
    ctx.stroke();

    // Myelin sheath (insulation on axon)
    ctx.fillStyle = '#FFFFFF';
    ctx.strokeStyle = neuronColor.dark;
    ctx.lineWidth = 1;
    const myelinSegments = 4;
    for(let i = 0; i < myelinSegments; i++) {
      const segY = height * (0.68 + i * 0.07);
      ctx.beginPath();
      ctx.ellipse(width * 0.5, segY, width * 0.04, height * 0.025, 0, 0, Math.PI * 2);
      ctx.fill();
      ctx.stroke();
    }

    // Nodes of Ranvier (gaps in myelin)
    ctx.fillStyle = neuronColor.base;
    for(let i = 0; i < myelinSegments - 1; i++) {
      const nodeY = height * (0.705 + i * 0.07);
      ctx.fillRect(width * 0.48, nodeY, width * 0.04, height * 0.01);
    }

    // Axon terminals (synaptic buttons)
    const terminalCount = 3;
    for(let i = 0; i < terminalCount; i++) {
      const tx = width * (0.4 + i * 0.1);
      ctx.fillStyle = neuronColor.light;
      ctx.beginPath();
      ctx.arc(tx, height * 0.98, width * 0.03, 0, Math.PI * 2);
      ctx.fill();
      ctx.strokeStyle = neuronColor.dark;
      ctx.stroke();

      // Synaptic vesicles
      ctx.fillStyle = '#FF69B4';
      for(let v = 0; v < 3; v++) {
        ctx.beginPath();
        ctx.arc(
          tx + (Math.random() - 0.5) * width * 0.02,
          height * 0.98 + (Math.random() - 0.5) * height * 0.02,
          1,
          0,
          Math.PI * 2
        );
        ctx.fill();
      }

      // Connection line to terminal
      ctx.strokeStyle = neuronColor.base;
      ctx.lineWidth = 1.5;
      ctx.beginPath();
      ctx.moveTo(width * 0.5, height * 0.95);
      ctx.lineTo(tx, height * 0.95);
      ctx.stroke();
    }

    // Cell body outline
    ctx.strokeStyle = neuronColor.dark;
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.arc(width * 0.5, height * 0.5, width * 0.15, 0, Math.PI * 2);
    ctx.stroke();

    ctx.restore();
  }

  static drawDendrite(ctx, x, y, angle, depth, length) {
    if(depth === 0 || length < 2) return;

    const endX = x + Math.cos(angle) * length;
    const endY = y + Math.sin(angle) * length;

    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineTo(endX, endY);
    ctx.stroke();

    // Branch into smaller dendrites
    if(depth > 1) {
      this.drawDendrite(ctx, endX, endY, angle - 0.4, depth - 1, length * 0.7);
      this.drawDendrite(ctx, endX, endY, angle + 0.4, depth - 1, length * 0.7);
    }
  }

  static drawSkin(ctx, x, y, width, height, section = 'cross-section') {
    ctx.save();
    ctx.translate(x, y);

    if(section === 'cross-section') {
      // Epidermis (outer layer)
      const epidermisgradient = ctx.createLinearGradient(0, 0, 0, height * 0.15);
      epidermisgradient.addColorStop(0, '#F5D0C5');
      epidermisgradient.addColorStop(1, '#E8B4A8');
      ctx.fillStyle = epidermisgradient;
      ctx.fillRect(0, 0, width, height * 0.15);

      // Stratum corneum (dead cell layer)
      ctx.fillStyle = '#FAEBD7';
      for(let i = 0; i < 20; i++) {
        const cellX = (i / 20) * width;
        ctx.fillRect(cellX, 0, width / 22, height * 0.03);
      }

      // Dermis (middle layer)
      const dermisGradient = ctx.createLinearGradient(0, height * 0.15, 0, height * 0.75);
      dermisGradient.addColorStop(0, '#E8B4A8');
      dermisGradient.addColorStop(0.5, '#D19A8E');
      dermisGradient.addColorStop(1, '#C08878');
      ctx.fillStyle = dermisGradient;
      ctx.fillRect(0, height * 0.15, width, height * 0.6);

      // Hypodermis (subcutaneous fat layer)
      ctx.fillStyle = '#FFE4B5';
      ctx.fillRect(0, height * 0.75, width, height * 0.25);

      // Fat cells
      ctx.fillStyle = '#FFEFD5';
      ctx.strokeStyle = '#DEB887';
      ctx.lineWidth = 1;
      for(let i = 0; i < 8; i++) {
        const fatX = width * (0.1 + (i % 4) * 0.22);
        const fatY = height * (0.77 + Math.floor(i / 4) * 0.12);
        ctx.beginPath();
        ctx.arc(fatX, fatY, width * 0.08, 0, Math.PI * 2);
        ctx.fill();
        ctx.stroke();
      }

      // Hair follicle
      ctx.fillStyle = '#8B4513';
      ctx.beginPath();
      ctx.moveTo(width * 0.3, height * 0.05);
      ctx.quadraticCurveTo(width * 0.32, height * 0.3, width * 0.35, height * 0.6);
      ctx.lineTo(width * 0.37, height * 0.6);
      ctx.quadraticCurveTo(width * 0.34, height * 0.3, width * 0.32, height * 0.05);
      ctx.closePath();
      ctx.fill();

      // Hair shaft (above skin)
      ctx.strokeStyle = '#654321';
      ctx.lineWidth = 3;
      ctx.beginPath();
      ctx.moveTo(width * 0.31, 0);
      ctx.lineTo(width * 0.31, height * 0.06);
      ctx.stroke();

      // Sebaceous gland (oil gland)
      ctx.fillStyle = '#F0E68C';
      ctx.beginPath();
      ctx.arc(width * 0.34, height * 0.22, width * 0.04, 0, Math.PI * 2);
      ctx.fill();
      ctx.strokeStyle = '#BDB76B';
      ctx.lineWidth = 1;
      ctx.stroke();

      // Sweat gland (coiled tube)
      ctx.strokeStyle = '#87CEEB';
      ctx.lineWidth = 2;
      ctx.beginPath();
      for(let i = 0; i < 5; i++) {
        const coilY = height * (0.5 + i * 0.04);
        ctx.arc(width * 0.7, coilY, width * 0.03, 0, Math.PI * 2);
      }
      ctx.stroke();

      // Sweat duct
      ctx.beginPath();
      ctx.moveTo(width * 0.7, height * 0.5);
      ctx.lineTo(width * 0.68, height * 0.15);
      ctx.lineTo(width * 0.67, 0);
      ctx.stroke();

      // Blood vessels (capillaries)
      ctx.strokeStyle = '#E74C3C';
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(0, height * 0.4);
      ctx.bezierCurveTo(width * 0.2, height * 0.42, width * 0.3, height * 0.38, width * 0.5, height * 0.4);
      ctx.bezierCurveTo(width * 0.7, height * 0.42, width * 0.8, height * 0.38, width, height * 0.4);
      ctx.stroke();

      // Nerve endings (Meissner's corpuscles)
      ctx.fillStyle = '#FFD700';
      ctx.strokeStyle = '#DAA520';
      ctx.lineWidth = 1;
      for(let i = 0; i < 3; i++) {
        const nerveX = width * (0.2 + i * 0.3);
        ctx.beginPath();
        ctx.ellipse(nerveX, height * 0.2, width * 0.02, height * 0.04, 0, 0, Math.PI * 2);
        ctx.fill();
        ctx.stroke();
      }

      // Pacinian corpuscle (pressure receptor, deeper)
      ctx.fillStyle = '#FFD700';
      ctx.beginPath();
      ctx.arc(width * 0.5, height * 0.65, width * 0.05, 0, Math.PI * 2);
      ctx.fill();
      // Layered appearance
      for(let i = 1; i <= 3; i++) {
        ctx.strokeStyle = '#DAA520';
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.arc(width * 0.5, height * 0.65, width * (0.05 - i * 0.012), 0, Math.PI * 2);
        ctx.stroke();
      }

      // Layer labels/boundaries
      ctx.strokeStyle = '#000000';
      ctx.lineWidth = 1;
      ctx.setLineDash([5, 5]);
      ctx.beginPath();
      ctx.moveTo(0, height * 0.15);
      ctx.lineTo(width, height * 0.15);
      ctx.stroke();
      ctx.beginPath();
      ctx.moveTo(0, height * 0.75);
      ctx.lineTo(width, height * 0.75);
      ctx.stroke();
      ctx.setLineDash([]);
    }

    ctx.restore();
  }

  static drawRedBloodCell(ctx, x, y, size) {
    ctx.save();
    ctx.translate(x, y);

    // Biconcave disc shape (side view creates characteristic dumbbell)
    const gradient = ctx.createRadialGradient(0, 0, 0, 0, 0, size);
    gradient.addColorStop(0, '#FF6B6B');
    gradient.addColorStop(0.5, '#E74C3C');
    gradient.addColorStop(1, '#C0392B');

    ctx.fillStyle = gradient;
    ctx.beginPath();
    ctx.arc(0, 0, size, 0, Math.PI * 2);
    ctx.fill();

    // Central pallor (lighter center due to biconcave shape)
    ctx.fillStyle = 'rgba(255, 182, 193, 0.6)';
    ctx.beginPath();
    ctx.arc(0, 0, size * 0.4, 0, Math.PI * 2);
    ctx.fill();

    // Outline
    ctx.strokeStyle = '#A52A2A';
    ctx.lineWidth = 0.5;
    ctx.beginPath();
    ctx.arc(0, 0, size, 0, Math.PI * 2);
    ctx.stroke();

    ctx.restore();
  }

  static drawWhiteBloodCell(ctx, x, y, size, type = 'neutrophil') {
    ctx.save();
    ctx.translate(x, y);

    const gradient = ctx.createRadialGradient(0, 0, 0, 0, 0, size);
    gradient.addColorStop(0, '#E8E8FF');
    gradient.addColorStop(0.6, '#D0D0F8');
    gradient.addColorStop(1, '#B8B8E8');

    ctx.fillStyle = gradient;
    ctx.beginPath();
    ctx.arc(0, 0, size, 0, Math.PI * 2);
    ctx.fill();

    switch(type) {
      case 'neutrophil':
        // Multi-lobed nucleus
        ctx.fillStyle = '#4B0082';
        for(let i = 0; i < 3; i++) {
          const angle = (i / 3) * Math.PI * 2;
          ctx.beginPath();
          ctx.arc(
            Math.cos(angle) * size * 0.3,
            Math.sin(angle) * size * 0.3,
            size * 0.25,
            0,
            Math.PI * 2
          );
          ctx.fill();
        }
        break;

      case 'lymphocyte':
        // Large round nucleus
        ctx.fillStyle = '#4B0082';
        ctx.beginPath();
        ctx.arc(0, 0, size * 0.65, 0, Math.PI * 2);
        ctx.fill();
        break;

      case 'monocyte':
        // Kidney-shaped nucleus
        ctx.fillStyle = '#4B0082';
        ctx.beginPath();
        ctx.ellipse(-size * 0.15, 0, size * 0.45, size * 0.6, 0, 0, Math.PI * 2);
        ctx.fill();
        break;

      case 'eosinophil':
        // Bi-lobed nucleus
        ctx.fillStyle = '#4B0082';
        ctx.beginPath();
        ctx.arc(-size * 0.25, 0, size * 0.35, 0, Math.PI * 2);
        ctx.fill();
        ctx.beginPath();
        ctx.arc(size * 0.25, 0, size * 0.35, 0, Math.PI * 2);
        ctx.fill();
        // Red granules
        ctx.fillStyle = '#FF6347';
        for(let i = 0; i < 6; i++) {
          const angle = (i / 6) * Math.PI * 2;
          ctx.beginPath();
          ctx.arc(
            Math.cos(angle) * size * 0.6,
            Math.sin(angle) * size * 0.6,
            size * 0.08,
            0,
            Math.PI * 2
          );
          ctx.fill();
        }
        break;

      case 'basophil':
        // Obscured nucleus with large granules
        ctx.fillStyle = '#4B0082';
        ctx.beginPath();
        ctx.arc(0, 0, size * 0.4, 0, Math.PI * 2);
        ctx.fill();
        // Large dark granules
        ctx.fillStyle = '#191970';
        for(let i = 0; i < 8; i++) {
          const angle = (i / 8) * Math.PI * 2;
          ctx.beginPath();
          ctx.arc(
            Math.cos(angle) * size * 0.5,
            Math.sin(angle) * size * 0.5,
            size * 0.12,
            0,
            Math.PI * 2
          );
          ctx.fill();
        }
        break;
    }

    // Outline
    ctx.strokeStyle = '#8888CC';
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.arc(0, 0, size, 0, Math.PI * 2);
    ctx.stroke();

    ctx.restore();
  }

  static drawPlatelet(ctx, x, y, size) {
    ctx.save();
    ctx.translate(x, y);

    // Small irregular disc
    ctx.fillStyle = '#DDA0DD';
    ctx.beginPath();
    for(let i = 0; i < 8; i++) {
      const angle = (i / 8) * Math.PI * 2;
      const radius = size * (0.8 + Math.random() * 0.4);
      const px = Math.cos(angle) * radius;
      const py = Math.sin(angle) * radius;
      if(i === 0) ctx.moveTo(px, py);
      else ctx.lineTo(px, py);
    }
    ctx.closePath();
    ctx.fill();

    // Granules
    ctx.fillStyle = '#8B008B';
    for(let i = 0; i < 3; i++) {
      ctx.beginPath();
      ctx.arc(
        (Math.random() - 0.5) * size * 0.5,
        (Math.random() - 0.5) * size * 0.5,
        size * 0.15,
        0,
        Math.PI * 2
      );
      ctx.fill();
    }

    ctx.strokeStyle = '#9370DB';
    ctx.lineWidth = 0.5;
    ctx.stroke();

    ctx.restore();
  }

  static drawCell(ctx, x, y, size, type = 'generic') {
    ctx.save();
    ctx.translate(x, y);

    const gradient = ctx.createRadialGradient(0, 0, 0, 0, 0, size);
    gradient.addColorStop(0, '#FFE4E1');
    gradient.addColorStop(0.6, '#FFD6D1');
    gradient.addColorStop(1, '#FFC8C1');

    // Cell membrane
    ctx.fillStyle = gradient;
    ctx.beginPath();
    ctx.arc(0, 0, size, 0, Math.PI * 2);
    ctx.fill();

    // Nucleus
    ctx.fillStyle = '#9370DB';
    ctx.beginPath();
    ctx.arc(size * 0.1, -size * 0.1, size * 0.35, 0, Math.PI * 2);
    ctx.fill();

    // Nucleolus
    ctx.fillStyle = '#4B0082';
    ctx.beginPath();
    ctx.arc(size * 0.15, -size * 0.05, size * 0.12, 0, Math.PI * 2);
    ctx.fill();

    // Mitochondria
    ctx.strokeStyle = '#FF6347';
    ctx.fillStyle = '#FF7F50';
    ctx.lineWidth = 1;
    for(let i = 0; i < 3; i++) {
      const mx = (Math.random() - 0.5) * size * 1.2;
      const my = (Math.random() - 0.5) * size * 1.2;
      ctx.beginPath();
      ctx.ellipse(mx, my, size * 0.15, size * 0.08, Math.random() * Math.PI, 0, Math.PI * 2);
      ctx.fill();
      ctx.stroke();
      // Cristae (inner folds)
      ctx.strokeStyle = '#DC143C';
      for(let j = 0; j < 3; j++) {
        ctx.beginPath();
        ctx.moveTo(mx - size * 0.1, my - size * 0.05 + j * size * 0.05);
        ctx.lineTo(mx + size * 0.1, my - size * 0.05 + j * size * 0.05);
        ctx.stroke();
      }
      ctx.strokeStyle = '#FF6347';
    }

    // Endoplasmic reticulum
    ctx.strokeStyle = '#8FBC8F';
    ctx.lineWidth = 1.5;
    ctx.beginPath();
    for(let i = 0; i < 5; i++) {
      const erAngle = (i / 5) * Math.PI * 2;
      const erX = Math.cos(erAngle) * size * 0.6;
      const erY = Math.sin(erAngle) * size * 0.6;
      if(i === 0) ctx.moveTo(erX, erY);
      else ctx.lineTo(erX, erY);
    }
    ctx.stroke();

    // Ribosomes (small dots on ER)
    ctx.fillStyle = '#556B2F';
    for(let i = 0; i < 10; i++) {
      const angle = Math.random() * Math.PI * 2;
      const radius = size * 0.6;
      ctx.beginPath();
      ctx.arc(
        Math.cos(angle) * radius,
        Math.sin(angle) * radius,
        1,
        0,
        Math.PI * 2
      );
      ctx.fill();
    }

    // Golgi apparatus
    ctx.strokeStyle = '#DAA520';
    ctx.lineWidth = 1.5;
    for(let i = 0; i < 4; i++) {
      ctx.beginPath();
      ctx.arc(-size * 0.4, size * 0.3, size * 0.15 + i * size * 0.03, Math.PI, Math.PI * 1.5);
      ctx.stroke();
    }

    // Lysosomes
    ctx.fillStyle = '#FF69B4';
    for(let i = 0; i < 3; i++) {
      const lx = (Math.random() - 0.5) * size * 1.2;
      const ly = (Math.random() - 0.5) * size * 1.2;
      ctx.beginPath();
      ctx.arc(lx, ly, size * 0.08, 0, Math.PI * 2);
      ctx.fill();
    }

    // Cell membrane outline
    ctx.strokeStyle = '#CD5C5C';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.arc(0, 0, size, 0, Math.PI * 2);
    ctx.stroke();

    // Membrane proteins (bumps on surface)
    ctx.fillStyle = '#F08080';
    for(let i = 0; i < 8; i++) {
      const angle = (i / 8) * Math.PI * 2;
      ctx.beginPath();
      ctx.arc(
        Math.cos(angle) * size * 1.05,
        Math.sin(angle) * size * 1.05,
        size * 0.08,
        0,
        Math.PI * 2
      );
      ctx.fill();
    }

    ctx.restore();
  }

  static drawDNA(ctx, x, y, width, height) {
    ctx.save();
    ctx.translate(x, y);

    const turns = 5;
    const pointsPerTurn = 20;
    const totalPoints = turns * pointsPerTurn;

    // Draw double helix
    for(let strand = 0; strand < 2; strand++) {
      ctx.strokeStyle = strand === 0 ? '#4169E1' : '#DC143C';
      ctx.lineWidth = 3;
      ctx.beginPath();

      for(let i = 0; i <= totalPoints; i++) {
        const t = i / totalPoints;
        const y_pos = t * height;
        const angle = t * turns * Math.PI * 2 + (strand * Math.PI);
        const x_pos = width * 0.5 + Math.cos(angle) * width * 0.3;

        if(i === 0) ctx.moveTo(x_pos, y_pos);
        else ctx.lineTo(x_pos, y_pos);
      }
      ctx.stroke();
    }

    // Base pairs (rungs of the ladder)
    ctx.strokeStyle = '#808080';
    ctx.lineWidth = 2;
    for(let i = 0; i < totalPoints; i += 2) {
      const t = i / totalPoints;
      const y_pos = t * height;
      const angle = t * turns * Math.PI * 2;
      
      const x1 = width * 0.5 + Math.cos(angle) * width * 0.3;
      const x2 = width * 0.5 + Math.cos(angle + Math.PI) * width * 0.3;

      ctx.beginPath();
      ctx.moveTo(x1, y_pos);
      ctx.lineTo(x2, y_pos);
      ctx.stroke();

      // Nucleotide bases (A-T, G-C)
      const bases = ['#FF6B6B', '#4ECDC4', '#FFD93D', '#95E1D3'];
      const baseColor = bases[i % 4];
      
      ctx.fillStyle = baseColor;
      ctx.beginPath();
      ctx.arc(x1, y_pos, 4, 0, Math.PI * 2);
      ctx.fill();
      ctx.beginPath();
      ctx.arc(x2, y_pos, 4, 0, Math.PI * 2);
      ctx.fill();
    }

    ctx.restore();
  }

  static drawValve(ctx, x, y, width, height, type = 'atrioventricular', state = 'closed') {
    ctx.save();
    ctx.translate(x, y);

    const color = { base: '#F5F5DC', light: '#FFFAF0', dark: '#D3D3C0' };

    if(type === 'atrioventricular') {
      // Mitral or tricuspid valve
      const leaflets = type === 'mitral' ? 2 : 3;
      
      for(let i = 0; i < leaflets; i++) {
        const angle = (i / leaflets) * Math.PI * 2 - Math.PI / 2;
        const openAngle = state === 'open' ? 0.6 : 0;
        
        ctx.fillStyle = color.base;
        ctx.strokeStyle = color.dark;
        ctx.lineWidth = 2;
        
        ctx.save();
        ctx.rotate(angle + openAngle);
        
        // Valve leaflet
        ctx.beginPath();
        ctx.moveTo(0, 0);
        ctx.bezierCurveTo(
          width * 0.2, height * 0.1,
          width * 0.3, height * 0.3,
          width * 0.25, height * 0.5
        );
        ctx.bezierCurveTo(
          width * 0.2, height * 0.4,
          width * 0.1, height * 0.2,
          0, 0
        );
        ctx.closePath();
        ctx.fill();
        ctx.stroke();
        
        // Chordae tendineae (tendon strings)
        ctx.strokeStyle = '#CD853F';
        ctx.lineWidth = 1.5;
        ctx.beginPath();
        ctx.moveTo(width * 0.25, height * 0.5);
        ctx.lineTo(width * 0.3, height * 0.8);
        ctx.stroke();
        
        ctx.restore();
      }
      
      // Papillary muscle attachment
      ctx.fillStyle = '#DC143C';
      ctx.beginPath();
      ctx.arc(0, height * 0.85, width * 0.15, 0, Math.PI * 2);
      ctx.fill();
      
    } else if(type === 'semilunar') {
      // Aortic or pulmonary valve (3 cusps)
      for(let i = 0; i < 3; i++) {
        const angle = (i / 3) * Math.PI * 2;
        const openAngle = state === 'open' ? 0.8 : 0;
        
        ctx.save();
        ctx.rotate(angle + openAngle);
        
        ctx.fillStyle = color.light;
        ctx.strokeStyle = color.dark;
        ctx.lineWidth = 2;
        
        // Semilunar cusp (pocket-like)
        ctx.beginPath();
        ctx.moveTo(0, 0);
        ctx.bezierCurveTo(
          width * 0.15, height * 0.05,
          width * 0.25, height * 0.15,
          width * 0.2, height * 0.3
        );
        ctx.bezierCurveTo(
          width * 0.15, height * 0.25,
          width * 0.05, height * 0.15,
          0, 0
        );
        ctx.closePath();
        ctx.fill();
        ctx.stroke();
        
        // Nodule of Arantius (thickening at tip)
        ctx.fillStyle = color.dark;
        ctx.beginPath();
        ctx.arc(width * 0.12, height * 0.18, 3, 0, Math.PI * 2);
        ctx.fill();
        
        ctx.restore();
      }
    }

    ctx.restore();
  }
}


// ============================================================================
// ANATOMICAL DIAGRAM RENDERER CLASS
// ============================================================================





export { AnatomicalDiagramsRegistry,AnatomicalShapes,AnatomicalDiagramRenderer};




