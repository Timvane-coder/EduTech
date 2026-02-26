import { createCanvas } from '@napi-rs/canvas'; import
ExcelJS from 'exceljs'; import fs from 'fs'; import os
from 'os'; import path from 'path'; import readline from
'readline'; import * as math from 'mathjs'; import
GIFEncoder from 'gifencoder'; import { PassThrough }
from 'stream';



class AnatomicalShapes {



  // ===== HEART ANATOMY (Already implemented) =====
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
      case 'septum':
        this.drawSeptum(ctx, color, width, height);
        break;
      case 'wholeheart':
        this.drawWholeHeart(ctx, color, width, height);
        break;
    }
    
    ctx.restore();
  }

  static drawRightAtrium(ctx, color, width, height) {
    const w = width, h = height;
    
    const gradient = ctx.createLinearGradient(0, 0, w, h);
    gradient.addColorStop(0, color.light);
    gradient.addColorStop(0.5, color.base);
    gradient.addColorStop(1, color.dark);
    
    ctx.fillStyle = gradient;
    
    ctx.beginPath();
    ctx.moveTo(w * 0.2, h * 0.1);
    ctx.bezierCurveTo(w * 0.1, h * 0.05, w * 0.05, h * 0.15, w * 0.1, h * 0.3);
    ctx.bezierCurveTo(w * 0.15, h * 0.45, w * 0.25, h * 0.55, w * 0.4, h * 0.6);
    ctx.lineTo(w * 0.7, h * 0.6);
    ctx.bezierCurveTo(w * 0.85, h * 0.55, w * 0.95, h * 0.45, w * 0.9, h * 0.3);
    ctx.bezierCurveTo(w * 0.85, h * 0.15, w * 0.75, h * 0.05, w * 0.6, h * 0.1);
    ctx.closePath();
    ctx.fill();
    
    ctx.fillStyle = 'rgba(255, 255, 255, 0.2)';
    ctx.beginPath();
    ctx.ellipse(w * 0.35, h * 0.25, w * 0.15, h * 0.1, 0, 0, Math.PI * 2);
    ctx.fill();
    
    ctx.strokeStyle = 'rgba(0, 0, 0, 0.1)';
    ctx.lineWidth = 1;
    for(let i = 0; i < 5; i++) {
      ctx.beginPath();
      ctx.moveTo(w * 0.2, h * (0.2 + i * 0.1));
      ctx.lineTo(w * 0.7, h * (0.25 + i * 0.08));
      ctx.stroke();
    }
    
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
    
    ctx.beginPath();
    ctx.moveTo(w * 0.3, h * 0.1);
    ctx.bezierCurveTo(w * 0.15, h * 0.2, w * 0.1, h * 0.35, w * 0.15, h * 0.55);
    ctx.bezierCurveTo(w * 0.2, h * 0.75, w * 0.3, h * 0.9, w * 0.45, h * 0.95);
    ctx.bezierCurveTo(w * 0.55, h * 0.97, w * 0.65, h * 0.95, w * 0.7, h * 0.85);
    ctx.bezierCurveTo(w * 0.8, h * 0.65, w * 0.85, h * 0.45, w * 0.8, h * 0.25);
    ctx.bezierCurveTo(w * 0.75, h * 0.15, w * 0.65, h * 0.08, w * 0.5, h * 0.1);
    ctx.closePath();
    ctx.fill();
    
    ctx.strokeStyle = 'rgba(0, 0, 0, 0.15)';
    ctx.lineWidth = 1.5;
    for(let i = 0; i < 8; i++) {
      ctx.beginPath();
      const startY = h * (0.2 + i * 0.1);
      ctx.moveTo(w * 0.25, startY);
      ctx.quadraticCurveTo(w * 0.45, startY + h * 0.05, w * 0.65, startY);
      ctx.stroke();
    }
    
    ctx.fillStyle = color.dark;
    ctx.beginPath();
    ctx.moveTo(w * 0.35, h * 0.85);
    ctx.lineTo(w * 0.45, h * 0.95);
    ctx.lineTo(w * 0.55, h * 0.85);
    ctx.fill();
    
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
    
    ctx.beginPath();
    ctx.moveTo(w * 0.25, h * 0.15);
    ctx.bezierCurveTo(w * 0.15, h * 0.1, w * 0.08, h * 0.2, w * 0.12, h * 0.35);
    ctx.bezierCurveTo(w * 0.18, h * 0.48, w * 0.28, h * 0.58, w * 0.42, h * 0.62);
    ctx.lineTo(w * 0.68, h * 0.62);
    ctx.bezierCurveTo(w * 0.82, h * 0.58, w * 0.92, h * 0.48, w * 0.88, h * 0.35);
    ctx.bezierCurveTo(w * 0.84, h * 0.2, w * 0.75, h * 0.1, w * 0.62, h * 0.15);
    ctx.closePath();
    ctx.fill();
    
    ctx.fillStyle = color.dark;
    const veinPositions = [[0.15, 0.25], [0.25, 0.18], [0.65, 0.18], [0.75, 0.25]];
    veinPositions.forEach(([px, py]) => {
      ctx.beginPath();
      ctx.ellipse(w * px, h * py, w * 0.04, h * 0.03, 0, 0, Math.PI * 2);
      ctx.fill();
    });
    
    ctx.fillStyle = 'rgba(255, 255, 255, 0.25)';
    ctx.beginPath();
    ctx.ellipse(w * 0.4, h * 0.3, w * 0.12, h * 0.08, 0, 0, Math.PI * 2);
    ctx.fill();
    
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
    
    ctx.beginPath();
    ctx.moveTo(w * 0.35, h * 0.08);
    ctx.bezierCurveTo(w * 0.2, h * 0.15, w * 0.12, h * 0.3, w * 0.15, h * 0.5);
    ctx.bezierCurveTo(w * 0.18, h * 0.68, w * 0.28, h * 0.85, w * 0.43, h * 0.95);
    ctx.lineTo(w * 0.57, h * 0.95);
    ctx.bezierCurveTo(w * 0.72, h * 0.85, w * 0.82, h * 0.68, w * 0.85, h * 0.5);
    ctx.bezierCurveTo(w * 0.88, h * 0.3, w * 0.8, h * 0.15, w * 0.65, h * 0.08);
    ctx.closePath();
    ctx.fill();
    
    ctx.strokeStyle = 'rgba(0, 0, 0, 0.2)';
    ctx.lineWidth = 2;
    for(let i = 0; i < 10; i++) {
      ctx.beginPath();
      const startY = h * (0.15 + i * 0.08);
      ctx.moveTo(w * 0.22, startY);
      ctx.quadraticCurveTo(w * 0.5, startY + h * 0.04, w * 0.78, startY);
      ctx.stroke();
    }
    
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
    
    ctx.fillStyle = color.dark;
    ctx.beginPath();
    ctx.moveTo(w * 0.43, h * 0.92);
    ctx.lineTo(w * 0.5, h * 0.98);
    ctx.lineTo(w * 0.57, h * 0.92);
    ctx.fill();
    
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

  static drawSeptum(ctx, color, width, height) {
    const w = width, h = height;
    
    // Draw the interventricular septum (wall between ventricles)
    const gradient = ctx.createLinearGradient(w * 0.3, 0, w * 0.7, 0);
    gradient.addColorStop(0, color.light);
    gradient.addColorStop(0.5, color.base);
    gradient.addColorStop(1, color.dark);
    
    ctx.fillStyle = gradient;
    
    // Thick muscular wall
    ctx.beginPath();
    ctx.moveTo(w * 0.45, h * 0.1);
    ctx.lineTo(w * 0.55, h * 0.1);
    ctx.lineTo(w * 0.55, h * 0.9);
    ctx.lineTo(w * 0.45, h * 0.9);
    ctx.closePath();
    ctx.fill();
    
    // Muscle fiber texture
    ctx.strokeStyle = 'rgba(0, 0, 0, 0.15)';
    ctx.lineWidth = 1;
    for(let i = 0; i < 15; i++) {
      ctx.beginPath();
      ctx.moveTo(w * 0.45, h * (0.1 + i * 0.05));
      ctx.lineTo(w * 0.55, h * (0.12 + i * 0.05));
      ctx.stroke();
    }
    
    // Outline
    ctx.strokeStyle = color.dark;
    ctx.lineWidth = 2;
    ctx.strokeRect(w * 0.45, h * 0.1, w * 0.1, h * 0.8);
  }

  static drawWholeHeart(ctx, color, width, height) {
    const w = width, h = height;
    ctx.save();

    const heartCenterX = w * 0.5;
    const heartCenterY = h * 0.4;
    
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

    const gradient = ctx.createLinearGradient(heartCenterX - w * 0.4, 0, heartCenterX + w * 0.4, h);
    gradient.addColorStop(0, '#FF6B6B');
    gradient.addColorStop(0.5, '#E74C3C');
    gradient.addColorStop(1, '#C0392B');
    ctx.fillStyle = gradient;
    ctx.fill();

    const rightColor = { base: '#8B4789', light: '#A569A0', dark: '#6B3569' };
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

    const leftColor = { base: '#E74C3C', light: '#FF6B6B', dark: '#C0392B' };
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

    ctx.strokeStyle = '#000000';
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.moveTo(heartCenterX, heartCenterY - h * 0.15);
    ctx.lineTo(heartCenterX, heartCenterY + h * 0.45);
    ctx.stroke();

    ctx.strokeStyle = '#000000';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(heartCenterX - w * 0.25, heartCenterY + h * 0.05);
    ctx.lineTo(heartCenterX + w * 0.25, heartCenterY + h * 0.05);
    ctx.stroke();

    ctx.strokeStyle = leftColor.base;
    ctx.lineWidth = 8;
    ctx.beginPath();
    ctx.moveTo(heartCenterX - w * 0.1, heartCenterY - h * 0.2);
    ctx.lineTo(heartCenterX - w * 0.1, heartCenterY - h * 0.4);
    ctx.stroke();

    ctx.strokeStyle = rightColor.base;
    ctx.lineWidth = 8;
    ctx.beginPath();
    ctx.moveTo(heartCenterX + w * 0.1, heartCenterY - h * 0.2);
    ctx.lineTo(heartCenterX + w * 0.1, heartCenterY - h * 0.4);
    ctx.stroke();

    ctx.strokeStyle = rightColor.dark;
    ctx.lineWidth = 7;
    ctx.beginPath();
    ctx.moveTo(heartCenterX + w * 0.25, heartCenterY - h * 0.1);
    ctx.lineTo(heartCenterX + w * 0.35, heartCenterY - h * 0.25);
    ctx.stroke();

    ctx.strokeStyle = leftColor.base;
    ctx.lineWidth = 6;
    ctx.beginPath();
    ctx.moveTo(heartCenterX - w * 0.25, heartCenterY - h * 0.1);
    ctx.lineTo(heartCenterX - w * 0.35, heartCenterY - h * 0.25);
    ctx.stroke();

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

  // ===== RESPIRATORY SYSTEM =====
  // dataRequired: ['component', 'process']
  // componentOptions: ['complete', 'trachea', 'bronchi', 'bronchioles', 'leftLung', 'rightLung', 'alveoli', 'diaphragm']
  
  static drawRespiratorySystem(ctx, x, y, width, height, component, process = 'structure') {
    ctx.save();
    ctx.translate(x, y);
    
    const color = { base: '#FF9999', light: '#FFCCCC', dark: '#CC6666' };
    
    switch(component) {
      case 'complete':
        this.drawCompleteRespiratory(ctx, color, width, height, process);
        break;
      case 'trachea':
        this.drawTrachea(ctx, color, width, height);
        break;
      case 'bronchi':
        this.drawBronchi(ctx, color, width, height);
        break;
      case 'bronchioles':
        this.drawBronchioles(ctx, color, width, height);
        break;
      case 'leftLung':
        this.drawLeftLung(ctx, color, width, height);
        break;
      case 'rightLung':
        this.drawRightLung(ctx, color, width, height);
        break;
      case 'alveoli':
        this.drawAlveoli(ctx, color, width, height);
        break;
      case 'diaphragm':
        this.drawDiaphragm(ctx, color, width, height);
        break;
    }
    
    ctx.restore();
  }

  static drawCompleteRespiratory(ctx, color, w, h, process) {
    // Trachea
    ctx.fillStyle = color.light;
    ctx.fillRect(w * 0.47, h * 0.05, w * 0.06, h * 0.15);
    
    // Cartilage rings
    ctx.strokeStyle = color.dark;
    ctx.lineWidth = 2;
    for(let i = 0; i < 5; i++) {
      ctx.beginPath();
      ctx.arc(w * 0.5, h * (0.08 + i * 0.03), w * 0.04, Math.PI, 0);
      ctx.stroke();
    }
    
    // Bronchi
    ctx.strokeStyle = color.base;
    ctx.lineWidth = 8;
    ctx.beginPath();
    ctx.moveTo(w * 0.5, h * 0.2);
    ctx.lineTo(w * 0.3, h * 0.35);
    ctx.stroke();
    
    ctx.beginPath();
    ctx.moveTo(w * 0.5, h * 0.2);
    ctx.lineTo(w * 0.7, h * 0.35);
    ctx.stroke();
    
    // Left lung (2 lobes)
    this.drawLeftLung(ctx, color, w * 0.5, h * 0.8);
    
    // Right lung (3 lobes)
    ctx.save();
    ctx.translate(w * 0.5, 0);
    this.drawRightLung(ctx, color, w * 0.5, h * 0.8);
    ctx.restore();
    
    // Diaphragm
    ctx.strokeStyle = color.dark;
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.moveTo(w * 0.1, h * 0.85);
    ctx.quadraticCurveTo(w * 0.5, h * 0.95, w * 0.9, h * 0.85);
    ctx.stroke();
  }

  static drawTrachea(ctx, color, w, h) {
    // Main tracheal tube
    const gradient = ctx.createLinearGradient(0, 0, w, 0);
    gradient.addColorStop(0, color.light);
    gradient.addColorStop(0.5, color.base);
    gradient.addColorStop(1, color.dark);
    
    ctx.fillStyle = gradient;
    ctx.fillRect(w * 0.4, h * 0.1, w * 0.2, h * 0.7);
    
    // C-shaped cartilage rings
    ctx.strokeStyle = color.dark;
    ctx.lineWidth = 3;
    for(let i = 0; i < 12; i++) {
      ctx.beginPath();
      const yPos = h * (0.15 + i * 0.05);
      ctx.arc(w * 0.5, yPos, w * 0.12, Math.PI * 0.8, Math.PI * 2.2);
      ctx.stroke();
    }
    
    // Membranous posterior wall
    ctx.fillStyle = color.light;
    ctx.fillRect(w * 0.58, h * 0.1, w * 0.04, h * 0.7);
    
    // Inner lumen
    ctx.fillStyle = 'rgba(255, 255, 255, 0.3)';
    ctx.fillRect(w * 0.45, h * 0.1, w * 0.1, h * 0.7);
  }

  static drawBronchi(ctx, color, w, h) {
    // Right main bronchus (wider, more vertical)
    const gradient1 = ctx.createLinearGradient(w * 0.5, h * 0.1, w * 0.8, h * 0.5);
    gradient1.addColorStop(0, color.light);
    gradient1.addColorStop(1, color.dark);
    
    ctx.strokeStyle = gradient1;
    ctx.lineWidth = w * 0.08;
    ctx.beginPath();
    ctx.moveTo(w * 0.5, h * 0.1);
    ctx.lineTo(w * 0.75, h * 0.5);
    ctx.stroke();
    
    // Left main bronchus (narrower, more horizontal)
    const gradient2 = ctx.createLinearGradient(w * 0.5, h * 0.1, w * 0.2, h * 0.5);
    gradient2.addColorStop(0, color.light);
    gradient2.addColorStop(1, color.dark);
    
    ctx.strokeStyle = gradient2;
    ctx.lineWidth = w * 0.06;
    ctx.beginPath();
    ctx.moveTo(w * 0.5, h * 0.1);
    ctx.lineTo(w * 0.25, h * 0.5);
    ctx.stroke();
    
    // Secondary bronchi
    ctx.lineWidth = w * 0.04;
    
    // Right secondary bronchi (3)
    for(let i = 0; i < 3; i++) {
      ctx.beginPath();
      ctx.moveTo(w * 0.75, h * 0.5);
      ctx.lineTo(w * 0.85, h * (0.4 + i * 0.15));
      ctx.stroke();
    }
    
    // Left secondary bronchi (2)
    for(let i = 0; i < 2; i++) {
      ctx.beginPath();
      ctx.moveTo(w * 0.25, h * 0.5);
      ctx.lineTo(w * 0.15, h * (0.45 + i * 0.15));
      ctx.stroke();
    }
  }

  static drawBronchioles(ctx, color, w, h) {
    // Terminal bronchioles - branching tree structure
    const drawBranch = (x, y, angle, length, depth) => {
      if(depth === 0) return;
      
      const endX = x + Math.cos(angle) * length;
      const endY = y + Math.sin(angle) * length;
      
      ctx.strokeStyle = color.base;
      ctx.lineWidth = depth;
      ctx.beginPath();
      ctx.moveTo(x, y);
      ctx.lineTo(endX, endY);
      ctx.stroke();
      
      drawBranch(endX, endY, angle - 0.3, length * 0.7, depth - 0.5);
      drawBranch(endX, endY, angle + 0.3, length * 0.7, depth - 0.5);
    };
    
    // Left bronchiole tree
    drawBranch(w * 0.3, h * 0.3, Math.PI / 4, h * 0.15, 6);
    
    // Right bronchiole tree
    drawBranch(w * 0.7, h * 0.3, Math.PI * 3 / 4, h * 0.15, 6);
    
    // Add alveolar sacs at endpoints
    ctx.fillStyle = color.light;
    for(let i = 0; i < 20; i++) {
      const angle = (Math.PI / 10) * i;
      ctx.beginPath();
      ctx.arc(
        w * 0.3 + Math.cos(angle) * w * 0.15,
        h * 0.5 + Math.sin(angle) * h * 0.2,
        w * 0.02,
        0, Math.PI * 2
      );
      ctx.fill();
      
      ctx.beginPath();
      ctx.arc(
        w * 0.7 + Math.cos(angle) * w * 0.15,
        h * 0.5 + Math.sin(angle) * h * 0.2,
        w * 0.02,
        0, Math.PI * 2
      );
      ctx.fill();
    }
  }

  static drawLeftLung(ctx, color, w, h) {
    // Left lung has 2 lobes (superior and inferior)
    const gradient = ctx.createRadialGradient(w * 0.25, h * 0.4, 0, w * 0.25, h * 0.4, w * 0.3);
    gradient.addColorStop(0, color.light);
    gradient.addColorStop(0.5, color.base);
    gradient.addColorStop(1, color.dark);
    
    ctx.fillStyle = gradient;
    
    // Superior lobe
    ctx.beginPath();
    ctx.moveTo(w * 0.1, h * 0.3);
    ctx.bezierCurveTo(w * 0.05, h * 0.25, w * 0.05, h * 0.4, w * 0.1, h * 0.5);
    ctx.bezierCurveTo(w * 0.15, h * 0.55, w * 0.25, h * 0.53, w * 0.3, h * 0.48);
    ctx.lineTo(w * 0.3, h * 0.35);
    ctx.bezierCurveTo(w * 0.25, h * 0.3, w * 0.15, h * 0.28, w * 0.1, h * 0.3);
    ctx.fill();
    
    // Inferior lobe
    ctx.beginPath();
    ctx.moveTo(w * 0.3, h * 0.48);
    ctx.bezierCurveTo(w * 0.35, h * 0.52, w * 0.35, h * 0.65, w * 0.3, h * 0.75);
    ctx.bezierCurveTo(w * 0.2, h * 0.78, w * 0.1, h * 0.75, w * 0.08, h * 0.65);
    ctx.bezierCurveTo(w * 0.06, h * 0.55, w * 0.08, h * 0.5, w * 0.1, h * 0.5);
    ctx.lineTo(w * 0.3, h * 0.48);
    ctx.fill();
    
    // Cardiac notch
    ctx.fillStyle = color.dark;
    ctx.beginPath();
    ctx.moveTo(w * 0.25, h * 0.55);
    ctx.quadraticCurveTo(w * 0.3, h * 0.58, w * 0.28, h * 0.65);
    ctx.lineTo(w * 0.25, h * 0.65);
    ctx.closePath();
    ctx.fill();
    
    // Outline
    ctx.strokeStyle = color.dark;
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(w * 0.1, h * 0.3);
    ctx.bezierCurveTo(w * 0.05, h * 0.25, w * 0.05, h * 0.7, w * 0.3, h * 0.75);
    ctx.bezierCurveTo(w * 0.35, h * 0.7, w * 0.35, h * 0.35, w * 0.3, h * 0.35);
    ctx.closePath();
    ctx.stroke();
  }

  static drawRightLung(ctx, color, w, h) {
    // Right lung has 3 lobes (superior, middle, inferior)
    const gradient = ctx.createRadialGradient(w * 0.75, h * 0.45, 0, w * 0.75, h * 0.45, w * 0.3);
    gradient.addColorStop(0, color.light);
    gradient.addColorStop(0.5, color.base);
    gradient.addColorStop(1, color.dark);
    
    ctx.fillStyle = gradient;
    
    // Superior lobe
    ctx.beginPath();
    ctx.moveTo(w * 0.7, h * 0.3);
    ctx.bezierCurveTo(w * 0.75, h * 0.28, w * 0.85, h * 0.28, w * 0.9, h * 0.32);
    ctx.bezierCurveTo(w * 0.93, h * 0.38, w * 0.92, h * 0.42, w * 0.88, h * 0.45);
    ctx.lineTo(w * 0.7, h * 0.43);
    ctx.closePath();
    ctx.fill();
    
    // Middle lobe
    ctx.beginPath();
    ctx.moveTo(w * 0.7, h * 0.43);
    ctx.lineTo(w * 0.88, h * 0.45);
    ctx.bezierCurveTo(w * 0.9, h * 0.48, w * 0.9, h * 0.55, w * 0.87, h * 0.58);
    ctx.lineTo(w * 0.7, h * 0.56);
    ctx.closePath();
    ctx.fill();
    
    // Inferior lobe
    ctx.beginPath();
    ctx.moveTo(w * 0.7, h * 0.56);
    ctx.lineTo(w * 0.87, h * 0.58);
    ctx.bezierCurveTo(w * 0.92, h * 0.65, w * 0.9, h * 0.73, w * 0.82, h * 0.76);
    ctx.bezierCurveTo(w * 0.75, h * 0.78, w * 0.7, h * 0.75, w * 0.68, h * 0.7);
    ctx.lineTo(w * 0.7, h * 0.56);
    ctx.fill();
    
    // Horizontal fissure
    ctx.strokeStyle = color.dark;
    ctx.lineWidth = 1.5;
    ctx.beginPath();
    ctx.moveTo(w * 0.7, h * 0.43);
    ctx.lineTo(w * 0.88, h * 0.45);
    ctx.stroke();
    
    // Oblique fissure
    ctx.beginPath();
    ctx.moveTo(w * 0.7, h * 0.56);
    ctx.lineTo(w * 0.87, h * 0.58);
    ctx.stroke();
    
    // Outline
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(w * 0.7, h * 0.3);
    ctx.bezierCurveTo(w * 0.95, h * 0.28, w * 0.95, h * 0.75, w * 0.7, h * 0.75);
    ctx.closePath();
    ctx.stroke();
  }

  static drawAlveoli(ctx, color, w, h) {
    // Alveolar sacs - grape-like clusters
    const drawAlveolus = (x, y, radius) => {
      const gradient = ctx.createRadialGradient(x, y, 0, x, y, radius);
      gradient.addColorStop(0, color.light);
      gradient.addColorStop(0.7, color.base);
      gradient.addColorStop(1, color.dark);
      
      ctx.fillStyle = gradient;
      ctx.beginPath();
      ctx.arc(x, y, radius, 0, Math.PI * 2);
      ctx.fill();
      
      // Capillary network
      ctx.strokeStyle = '#C0392B';
      ctx.lineWidth = 0.5;
      ctx.beginPath();
      ctx.arc(x, y, radius * 0.8, 0, Math.PI * 2);
      ctx.stroke();
    };
    
    // Central bronchiole
    ctx.strokeStyle = color.base;
    ctx.lineWidth = w * 0.03;
    ctx.beginPath();
    ctx.moveTo(w * 0.5, h * 0.1);
    ctx.lineTo(w * 0.5, h * 0.4);
    ctx.stroke();
    
    // Alveolar sacs clustered around bronchiole
    const positions = [
      [0.35, 0.3], [0.42, 0.35], [0.35, 0.4], [0.42, 0.45],
      [0.65, 0.3], [0.58, 0.35], [0.65, 0.4], [0.58, 0.45],
      [0.5, 0.5], [0.43, 0.55], [0.57, 0.55], [0.5, 0.6],
      [0.38, 0.62], [0.62, 0.62], [0.45, 0.68], [0.55, 0.68]
    ];
    
    positions.forEach(([px, py]) => {
      drawAlveolus(w * px, h * py, w * 0.05);
    });
    
    // Alveolar ducts
    ctx.strokeStyle = color.base;
    ctx.lineWidth = 2;
    positions.forEach(([px, py]) => {
      ctx.beginPath();
      ctx.moveTo(w * 0.5, h * 0.4);
      ctx.lineTo(w * px, h * py);
      ctx.stroke();
    });
  }

  static drawDiaphragm(ctx, color, w, h) {
    // Dome-shaped muscle
    const gradient = ctx.createLinearGradient(0, h * 0.3, 0, h * 0.7);
    gradient.addColorStop(0, color.light);
    gradient.addColorStop(0.5, color.base);
    gradient.addColorStop(1, color.dark);
    
    ctx.fillStyle = gradient;
    
    // Relaxed position (dome)
    ctx.beginPath();
    ctx.moveTo(w * 0.1, h * 0.5);
    ctx.quadraticCurveTo(w * 0.5, h * 0.2, w * 0.9, h * 0.5);
    ctx.lineTo(w * 0.9, h * 0.55);
    ctx.quadraticCurveTo(w * 0.5, h * 0.25, w * 0.1, h * 0.55);
    ctx.closePath();
    ctx.fill();
    
    // Muscle fiber striations
    ctx.strokeStyle = 'rgba(0, 0, 0, 0.2)';
    ctx.lineWidth = 1;
    for(let i = 0; i < 15; i++) {
      const t = i / 15;
      const x = w * (0.1 + t * 0.8);
      const y1 = h * (0.5 - 0.3 * Math.sin(t * Math.PI));
      const y2 = y1 + h * 0.05;
      ctx.beginPath();
      ctx.moveTo(x, y1);
      ctx.lineTo(x, y2);
      ctx.stroke();
    }
    
    // Central tendon
    ctx.fillStyle = '#FFFFFF';
    ctx.globalAlpha = 0.3;
    ctx.beginPath();
    ctx.ellipse(w * 0.5, h * 0.25, w * 0.15, h * 0.05, 0, 0, Math.PI * 2);
    ctx.fill();
    ctx.globalAlpha = 1.0;
    
    // Outline
    ctx.strokeStyle = color.dark;
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(w * 0.1, h * 0.5);
    ctx.quadraticCurveTo(w * 0.5, h * 0.2, w * 0.9, h * 0.5);
    ctx.stroke();
  }

  // ===== DIGESTIVE SYSTEM =====
  // dataRequired: ['component', 'process']
  // componentOptions: ['complete', 'mouth', 'esophagus', 'stomach', 'small-intestine', 'large-intestine', 'liver', 'pancreas', 'gallbladder']
  
  static drawDigestiveSystem(ctx, x, y, width, height, component, process = 'anatomy') {
    ctx.save();
    ctx.translate(x, y);
    
    const color = { base: '#F4A460', light: '#FFD7A8', dark: '#CD853F' };
    
    switch(component) {
      case 'complete':
        this.drawCompleteDigestive(ctx, color, width, height);
        break;
      case 'mouth':
        this.drawMouth(ctx, color, width, height);
        break;
      case 'esophagus':
        this.drawEsophagus(ctx, color, width, height);
        break;
      case 'stomach':
        this.drawStomach(ctx, color, width, height);
        break;
      case 'small-intestine':
        this.drawSmallIntestine(ctx, color, width, height);
        break;
      case 'large-intestine':
        this.drawLargeIntestine(ctx, color, width, height);
        break;
      case 'liver':
        this.drawLiverDigestive(ctx, color, width, height);
        break;
      case 'pancreas':
        this.drawPancreas(ctx, color, width, height);
        break;
      case 'gallbladder':
        this.drawGallbladder(ctx, color, width, height);
        break;
    }
    
    ctx.restore();
  }

  static drawCompleteDigestive(ctx, color, w, h) {
    // Mouth
    ctx.fillStyle = color.light;
    ctx.beginPath();
    ctx.arc(w * 0.5, h * 0.05, w * 0.04, 0, Math.PI * 2);
    ctx.fill();
    
    // Esophagus
    ctx.strokeStyle = color.base;
    ctx.lineWidth = w * 0.03;
    ctx.beginPath();
    ctx.moveTo(w * 0.5, h * 0.09);
    ctx.lineTo(w * 0.5, h * 0.25);
    ctx.stroke();
    
    // Stomach
    const gradient = ctx.createRadialGradient(w * 0.4, h * 0.35, 0, w * 0.4, h * 0.35, w * 0.15);
    gradient.addColorStop(0, color.light);
    gradient.addColorStop(1, color.base);
    ctx.fillStyle = gradient;
    ctx.beginPath();
    ctx.ellipse(w * 0.4, h * 0.35, w * 0.12, h * 0.08, -0.3, 0, Math.PI * 2);
    ctx.fill();
    
    // Small intestine (convoluted)
    ctx.strokeStyle = color.base;
    ctx.lineWidth = w * 0.025;
    ctx.beginPath();
    ctx.moveTo(w * 0.48, h * 0.42);
    for(let i = 0; i < 8; i++) {
      const x = w * (0.3 + (i % 2) * 0.3);
      const y = h * (0.45 + i * 0.05);
      ctx.lineTo(x, y);
    }
    ctx.stroke();
    
    // Large intestine (frame around small intestine)
    ctx.lineWidth = w * 0.04;
    ctx.strokeStyle = color.dark;
    ctx.beginPath();
    ctx.moveTo(w * 0.6, h * 0.45);
    ctx.lineTo(w * 0.75, h * 0.45);
    ctx.lineTo(w * 0.75, h * 0.8);
    ctx.lineTo(w * 0.25, h * 0.8);
    ctx.lineTo(w * 0.25, h * 0.45);
    ctx.lineTo(w * 0.4, h * 0.45);
    ctx.stroke();
    
    // Liver (top right)
    ctx.fillStyle = '#8B4513';
    ctx.beginPath();
    ctx.moveTo(w * 0.55, h * 0.22);
    ctx.bezierCurveTo(w * 0.7, h * 0.2, w * 0.8, h * 0.28, w * 0.75, h * 0.35);
    ctx.bezierCurveTo(w * 0.7, h * 0.38, w * 0.6, h * 0.36, w * 0.55, h * 0.32);
    ctx.closePath();
    ctx.fill();
    
    // Pancreas
    ctx.fillStyle = '#DDA15E';
    ctx.beginPath();
    ctx.ellipse(w * 0.45, h * 0.38, w * 0.08, h * 0.02, 0.1, 0, Math.PI * 2);
    ctx.fill();
  }

  static drawMouth(ctx, color, w, h) {
    // Oral cavity
    ctx.fillStyle = color.light;
    ctx.beginPath();
    ctx.ellipse(w * 0.5, h * 0.5, w * 0.35, h * 0.4, 0, 0, Math.PI * 2);
    ctx.fill();
    
    // Teeth (upper)
    ctx.fillStyle = '#FFFFFF';
    for(let i = 0; i < 12; i++) {
      const angle = (Math.PI / 13) * (i + 1);
      const x = w * 0.5 + Math.cos(angle + Math.PI) * w * 0.3;
      const y = h * 0.3 + Math.sin(angle + Math.PI) * h * 0.15;
      ctx.fillRect(x - w * 0.015, y, w * 0.03, h * 0.08);
    }
    
    // Teeth (lower)
    for(let i = 0; i < 12; i++) {
      const angle = (Math.PI / 13) * (i + 1);
      const x = w * 0.5 + Math.cos(angle) * w * 0.3;
      const y = h * 0.7 + Math.sin(angle) * h * 0.15;
      ctx.fillRect(x - w * 0.015, y - h * 0.08, w * 0.03, h * 0.08);
    }
    
    // Tongue
    ctx.fillStyle = '#FF6B9D';
    ctx.beginPath();
    ctx.ellipse(w * 0.5, h * 0.6, w * 0.2, h * 0.15, 0, 0, Math.PI * 2);
    ctx.fill();
    
    // Palate
    ctx.strokeStyle = color.base;
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.arc(w * 0.5, h * 0.3, w * 0.3, Math.PI * 0.9, Math.PI * 2.1);
    ctx.stroke();
    
    // Salivary glands (indicated)
    ctx.fillStyle = color.dark;
    ctx.beginPath();
    ctx.arc(w * 0.2, h * 0.4, w * 0.05, 0, Math.PI * 2);
    ctx.fill();
    ctx.beginPath();
    ctx.arc(w * 0.8, h * 0.4, w * 0.05, 0, Math.PI * 2);
    ctx.fill();
  }

  static drawEsophagus(ctx, color, w, h) {
    // Muscular tube
    const gradient = ctx.createLinearGradient(w * 0.3, 0, w * 0.7, 0);
    gradient.addColorStop(0, color.dark);
    gradient.addColorStop(0.5, color.base);
    gradient.addColorStop(1, color.dark);
    
    ctx.fillStyle = gradient;
    ctx.fillRect(w * 0.4, h * 0.1, w * 0.2, h * 0.8);
    
    // Muscular layers (circular and longitudinal)
    ctx.strokeStyle = 'rgba(0, 0, 0, 0.3)';
    ctx.lineWidth = 2;
    
    // Circular muscle
    for(let i = 0; i < 15; i++) {
      ctx.beginPath();
      ctx.moveTo(w * 0.4, h * (0.1 + i * 0.05));
      ctx.lineTo(w * 0.6, h * (0.1 + i * 0.05));
      ctx.stroke();
    }
    
    // Lumen (inner space)
    ctx.fillStyle = color.light;
    ctx.fillRect(w * 0.45, h * 0.1, w * 0.1, h * 0.8);
    
    // Peristaltic wave
    ctx.fillStyle = 'rgba(255, 255, 255, 0.4)';
    ctx.beginPath();
    ctx.ellipse(w * 0.5, h * 0.5, w * 0.12, h * 0.08, 0, 0, Math.PI * 2);
    ctx.fill();
    
    // Outline
    ctx.strokeStyle = color.dark;
    ctx.lineWidth = 3;
    ctx.strokeRect(w * 0.4, h * 0.1, w * 0.2, h * 0.8);
  }

  static drawStomach(ctx, color, w, h) {
    // J-shaped stomach
    const gradient = ctx.createRadialGradient(w * 0.4, h * 0.4, 0, w * 0.5, h * 0.5, w * 0.4);
    gradient.addColorStop(0, color.light);
    gradient.addColorStop(0.6, color.base);
    gradient.addColorStop(1, color.dark);
    
    ctx.fillStyle = gradient;
    
    // Main body
    ctx.beginPath();
    ctx.moveTo(w * 0.3, h * 0.2);
    ctx.bezierCurveTo(w * 0.2, h * 0.2, w * 0.15, h * 0.3, w * 0.15, h * 0.45);
    ctx.bezierCurveTo(w * 0.15, h * 0.6, w * 0.2, h * 0.7, w * 0.35, h * 0.75);
    ctx.bezierCurveTo(w * 0.5, h * 0.8, w * 0.65, h * 0.75, w * 0.7, h * 0.65);
    ctx.bezierCurveTo(w * 0.75, h * 0.55, w * 0.73, h * 0.45, w * 0.68, h * 0.35);
    ctx.bezierCurveTo(w * 0.63, h * 0.25, w * 0.55, h * 0.2, w * 0.45, h * 0.2);
    ctx.closePath();
    ctx.fill();
    
    // Gastric rugae (folds)
    ctx.strokeStyle = color.dark;
    ctx.lineWidth = 2;
    for(let i = 0; i < 6; i++) {
      ctx.beginPath();
      ctx.moveTo(w * (0.25 + i * 0.05), h * 0.3);
      ctx.quadraticCurveTo(w * (0.27 + i * 0.05), h * 0.5, w * (0.3 + i * 0.05), h * 0.7);
      ctx.stroke();
    }
    
    // Esophageal sphincter (top)
    ctx.fillStyle = color.dark;
    ctx.beginPath();
    ctx.arc(w * 0.38, h * 0.2, w * 0.03, 0, Math.PI * 2);
    ctx.fill();
    
    // Pyloric sphincter (bottom right)
    ctx.beginPath();
    ctx.arc(w * 0.7, h * 0.65, w * 0.03, 0, Math.PI * 2);
    ctx.fill();
    
    // Outline
    ctx.strokeStyle = color.dark;
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.moveTo(w * 0.3, h * 0.2);
    ctx.bezierCurveTo(w * 0.2, h * 0.2, w * 0.15, h * 0.3, w * 0.15, h * 0.45);
    ctx.bezierCurveTo(w * 0.15, h * 0.6, w * 0.2, h * 0.7, w * 0.35, h * 0.75);
    ctx.bezierCurveTo(w * 0.5, h * 0.8, w * 0.65, h * 0.75, w * 0.7, h * 0.65);
    ctx.bezierCurveTo(w * 0.75, h * 0.55, w * 0.73, h * 0.45, w * 0.68, h * 0.35);
    ctx.bezierCurveTo(w * 0.63, h * 0.25, w * 0.55, h * 0.2, w * 0.45, h * 0.2);
    ctx.closePath();
    ctx.stroke();
  }

  static drawSmallIntestine(ctx, color, w, h) {
    // Highly convoluted tube with villi
    const gradient = ctx.createLinearGradient(0, 0, w, h);
    gradient.addColorStop(0, color.light);
    gradient.addColorStop(0.5, color.base);
    gradient.addColorStop(1, color.dark);
    
    ctx.strokeStyle = gradient;
    ctx.lineWidth = w * 0.06;
    ctx.lineCap = 'round';
    
    // Duodenum (C-shaped first part)
    ctx.beginPath();
    ctx.arc(w * 0.3, h * 0.2, w * 0.1, 0, Math.PI * 1.5);
    ctx.stroke();
    
    // Jejunum and Ileum (highly coiled)
    let x = w * 0.2, y = h * 0.3;
    ctx.beginPath();
    ctx.moveTo(x, y);
    
    for(let i = 0; i < 12; i++) {
      const direction = i % 2 === 0 ? 1 : -1;
      x += w * 0.15 * direction;
      y += h * 0.05;
      ctx.lineTo(x, y);
    }
    ctx.stroke();
    
    // Villi detail (magnified section)
    ctx.save();
    ctx.translate(w * 0.65, h * 0.3);
    
    // Intestinal wall cross-section
    ctx.fillStyle = color.base;
    ctx.fillRect(0, 0, w * 0.3, h * 0.4);
    
    // Villi (finger-like projections)
    ctx.fillStyle = color.light;
    for(let i = 0; i < 8; i++) {
      const vx = w * (0.02 + i * 0.035);
      ctx.beginPath();
      ctx.moveTo(vx, h * 0.4);
      ctx.lineTo(vx - w * 0.01, h * 0.25);
      ctx.quadraticCurveTo(vx, h * 0.2, vx + w * 0.01, h * 0.25);
      ctx.lineTo(vx, h * 0.4);
      ctx.fill();
      
      // Capillary in villus
      ctx.strokeStyle = '#C0392B';
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.moveTo(vx, h * 0.38);
      ctx.lineTo(vx, h * 0.22);
      ctx.stroke();
    }
    
    ctx.restore();
    
    // Peyer's patches (lymphoid tissue)
    ctx.fillStyle = '#E8D5B7';
    for(let i = 0; i < 5; i++) {
      ctx.beginPath();
      ctx.arc(w * (0.15 + i * 0.15), h * (0.35 + (i % 2) * 0.2), w * 0.02, 0, Math.PI * 2);
      ctx.fill();
    }
  }

  static drawLargeIntestine(ctx, color, w, h) {
    // Frames the abdomen - ascending, transverse, descending, sigmoid
    const gradient = ctx.createLinearGradient(0, 0, w, 0);
    gradient.addColorStop(0, color.dark);
    gradient.addColorStop(0.5, color.base);
    gradient.addColorStop(1, color.dark);
    
    ctx.strokeStyle = gradient;
    ctx.lineWidth = w * 0.08;
    ctx.lineCap = 'round';
    
    // Cecum with appendix
    ctx.beginPath();
    ctx.arc(w * 0.7, h * 0.55, w * 0.05, 0, Math.PI * 2);
    ctx.fill();
    
    // Appendix
    ctx.lineWidth = w * 0.02;
    ctx.beginPath();
    ctx.moveTo(w * 0.72, h * 0.6);
    ctx.lineTo(w * 0.75, h * 0.7);
    ctx.stroke();
    
    ctx.lineWidth = w * 0.08;
    
    // Ascending colon (right side, going up)
    ctx.beginPath();
    ctx.moveTo(w * 0.7, h * 0.55);
    ctx.lineTo(w * 0.7, h * 0.25);
    ctx.stroke();
    
    // Hepatic flexure (bend)
    ctx.beginPath();
    ctx.arc(w * 0.7, h * 0.25, w * 0.05, Math.PI * 1.5, 0, true);
    ctx.stroke();
    
    // Transverse colon (across top)
    ctx.beginPath();
    ctx.moveTo(w * 0.65, h * 0.25);
    ctx.lineTo(w * 0.35, h * 0.25);
    ctx.stroke();
    
    // Splenic flexure (bend)
    ctx.beginPath();
    ctx.arc(w * 0.3, h * 0.25, w * 0.05, 0, Math.PI * 0.5);
    ctx.stroke();
    
    // Descending colon (left side, going down)
    ctx.beginPath();
    ctx.moveTo(w * 0.3, h * 0.3);
    ctx.lineTo(w * 0.3, h * 0.6);
    ctx.stroke();
    
    // Sigmoid colon (S-shaped)
    ctx.beginPath();
    ctx.moveTo(w * 0.3, h * 0.6);
    ctx.bezierCurveTo(w * 0.35, h * 0.65, w * 0.4, h * 0.65, w * 0.45, h * 0.7);
    ctx.bezierCurveTo(w * 0.48, h * 0.73, w * 0.5, h * 0.75, w * 0.52, h * 0.78);
    ctx.stroke();
    
    // Haustra (pouches)
    ctx.strokeStyle = color.dark;
    ctx.lineWidth = 2;
    
    // Along ascending colon
    for(let i = 0; i < 5; i++) {
      ctx.beginPath();
      ctx.arc(w * 0.7, h * (0.3 + i * 0.05), w * 0.04, Math.PI * 0.5, Math.PI * 1.5);
      ctx.stroke();
    }
    
    // Along transverse colon
    for(let i = 0; i < 6; i++) {
      ctx.beginPath();
      ctx.arc(w * (0.35 + i * 0.05), h * 0.25, w * 0.04, 0, Math.PI);
      ctx.stroke();
    }
    
    // Along descending colon
    for(let i = 0; i < 5; i++) {
      ctx.beginPath();
      ctx.arc(w * 0.3, h * (0.35 + i * 0.05), w * 0.04, Math.PI * 1.5, Math.PI * 0.5);
      ctx.stroke();
    }
  }

  static drawLiverDigestive(ctx, color, w, h) {
    // Large organ with lobes
    const liverColor = { base: '#8B4513', light: '#A0522D', dark: '#654321' };
    
    const gradient = ctx.createRadialGradient(w * 0.5, h * 0.4, 0, w * 0.5, h * 0.4, w * 0.4);
    gradient.addColorStop(0, liverColor.light);
    gradient.addColorStop(0.6, liverColor.base);
    gradient.addColorStop(1, liverColor.dark);
    
    ctx.fillStyle = gradient;
    
    // Right lobe (larger)
    ctx.beginPath();
    ctx.moveTo(w * 0.45, h * 0.2);
    ctx.bezierCurveTo(w * 0.6, h * 0.15, w * 0.8, h * 0.25, w * 0.85, h * 0.4);
    ctx.bezierCurveTo(w * 0.88, h * 0.55, w * 0.8, h * 0.65, w * 0.65, h * 0.68);
    ctx.lineTo(w * 0.5, h * 0.65);
    ctx.closePath();
    ctx.fill();
    
    // Left lobe (smaller)
    ctx.beginPath();
    ctx.moveTo(w * 0.45, h * 0.2);
    ctx.bezierCurveTo(w * 0.3, h * 0.18, w * 0.2, h * 0.28, w * 0.18, h * 0.42);
    ctx.bezierCurveTo(w * 0.17, h * 0.55, w * 0.25, h * 0.63, w * 0.38, h * 0.65);
    ctx.lineTo(w * 0.5, h * 0.65);
    ctx.closePath();
    ctx.fill();
    
    // Falciform ligament (dividing line)
    ctx.strokeStyle = liverColor.dark;
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(w * 0.48, h * 0.2);
    ctx.lineTo(w * 0.5, h * 0.65);
    ctx.stroke();
    
    // Gallbladder (underneath)
    ctx.fillStyle = '#6B8E23';
    ctx.beginPath();
    ctx.ellipse(w * 0.62, h * 0.68, w * 0.04, h * 0.06, 0, 0, Math.PI * 2);
    ctx.fill();
    
    // Bile duct
    ctx.strokeStyle = '#6B8E23';
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.moveTo(w * 0.62, h * 0.74);
    ctx.lineTo(w * 0.58, h * 0.82);
    ctx.stroke();
    
    // Portal vein
    ctx.strokeStyle = '#4A0E0E';
    ctx.lineWidth = 4;
    ctx.beginPath();
    ctx.moveTo(w * 0.5, h * 0.7);
    ctx.lineTo(w * 0.5, h * 0.82);
    ctx.stroke();
    
    // Hepatic artery
    ctx.strokeStyle = '#C0392B';
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.moveTo(w * 0.45, h * 0.7);
    ctx.lineTo(w * 0.42, h * 0.82);
    ctx.stroke();
    
    // Outline
    ctx.strokeStyle = liverColor.dark;
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.moveTo(w * 0.45, h * 0.2);
    ctx.bezierCurveTo(w * 0.6, h * 0.15, w * 0.8, h * 0.25, w * 0.85, h * 0.4);
    ctx.bezierCurveTo(w * 0.88, h * 0.55, w * 0.8, h * 0.65, w * 0.65, h * 0.68);
    ctx.lineTo(w * 0.38, h * 0.65);
    ctx.bezierCurveTo(w * 0.25, h * 0.63, w * 0.17, h * 0.55, w * 0.18, h * 0.42);
    ctx.bezierCurveTo(w * 0.2, h * 0.28, w * 0.3, h * 0.18, w * 0.45, h * 0.2);
    ctx.stroke();
  }

  static drawPancreas(ctx, color, w, h) {
    // Elongated gland behind stomach
    const pancreasColor = { base: '#DDA15E', light: '#F4D19B', dark: '#BC6C25' };
    
    const gradient = ctx.createLinearGradient(w * 0.1, h * 0.5, w * 0.9, h * 0.5);
    gradient.addColorStop(0, pancreasColor.light);
    gradient.addColorStop(0.5, pancreasColor.base);
    gradient.addColorStop(1, pancreasColor.dark);
    
    ctx.fillStyle = gradient;
    
    // Head (right, near duodenum)
    ctx.beginPath();
    ctx.arc(w * 0.7, h * 0.5, w * 0.08, 0, Math.PI * 2);
    ctx.fill();
    
    // Body (middle)
    ctx.beginPath();
    ctx.ellipse(w * 0.5, h * 0.48, w * 0.15, h * 0.05, -0.1, 0, Math.PI * 2);
    ctx.fill();
    
    // Tail (left, near spleen)
    ctx.beginPath();
    ctx.ellipse(w * 0.25, h * 0.45, w * 0.06, h * 0.04, -0.3, 0, Math.PI * 2);
    ctx.fill();
    
    // Pancreatic duct
    ctx.strokeStyle = pancreasColor.dark;
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(w * 0.25, h * 0.45);
    ctx.lineTo(w * 0.7, h * 0.5);
    ctx.stroke();
    
    // Islets of Langerhans (endocrine cells)
    ctx.fillStyle = '#FFD700';
    const isletPositions = [[0.3, 0.46], [0.45, 0.48], [0.6, 0.49], [0.68, 0.5]];
    isletPositions.forEach(([px, py]) => {
      ctx.beginPath();
      ctx.arc(w * px, h * py, w * 0.015, 0, Math.PI * 2);
      ctx.fill();
    });
    
    // Acini (enzyme-producing cells) - texture
    ctx.fillStyle = 'rgba(0, 0, 0, 0.1)';
    for(let i = 0; i < 30; i++) {
      const x = w * (0.2 + Math.random() * 0.5);
      const y = h * (0.42 + Math.random() * 0.12);
      ctx.beginPath();
      ctx.arc(x, y, w * 0.008, 0, Math.PI * 2);
      ctx.fill();
    }
    
    // Common bile duct connection
    ctx.strokeStyle = '#6B8E23';
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.moveTo(w * 0.7, h * 0.42);
    ctx.lineTo(w * 0.7, h * 0.5);
    ctx.stroke();
    
    // Outline
    ctx.strokeStyle = pancreasColor.dark;
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(w * 0.2, h * 0.45);
    ctx.bezierCurveTo(w * 0.35, h * 0.43, w * 0.5, h * 0.43, w * 0.62, h * 0.47);
    ctx.bezierCurveTo(w * 0.68, h * 0.42, w * 0.78, h * 0.42, w * 0.78, h * 0.5);
    ctx.bezierCurveTo(w * 0.78, h * 0.58, w * 0.68, h * 0.58, w * 0.62, h * 0.53);
    ctx.bezierCurveTo(w * 0.5, h * 0.53, w * 0.35, h * 0.51, w * 0.2, h * 0.45);
    ctx.stroke();
  }

  static drawGallbladder(ctx, color, w, h) {
    // Pear-shaped sac
    const gbColor = { base: '#6B8E23', light: '#9ACD32', dark: '#556B2F' };
    
    const gradient = ctx.createRadialGradient(w * 0.5, h * 0.3, 0, w * 0.5, h * 0.5, w * 0.3);
    gradient.addColorStop(0, gbColor.light);
    gradient.addColorStop(0.6, gbColor.base);
    gradient.addColorStop(1, gbColor.dark);
    
    ctx.fillStyle = gradient;
    
    // Fundus (bottom, wide part)
    ctx.beginPath();
    ctx.arc(w * 0.5, h * 0.6, w * 0.15, 0, Math.PI * 2);
    ctx.fill();
    
    // Body (middle)
    ctx.beginPath();
    ctx.ellipse(w * 0.5, h * 0.4, w * 0.12, h * 0.18, 0, 0, Math.PI * 2);
    ctx.fill();
    
    // Neck (narrow top)
    ctx.beginPath();
    ctx.moveTo(w * 0.44, h * 0.23);
    ctx.quadraticCurveTo(w * 0.5, h * 0.2, w * 0.56, h * 0.23);
    ctx.lineTo(w * 0.54, h * 0.35);
    ctx.lineTo(w * 0.46, h * 0.35);
    ctx.closePath();
    ctx.fill();
    
    // Cystic duct
    ctx.strokeStyle = gbColor.dark;
    ctx.lineWidth = 4;
    ctx.beginPath();
    ctx.moveTo(w * 0.5, h * 0.2);
    ctx.lineTo(w * 0.5, h * 0.05);
    ctx.stroke();
    
    // Spiral valve of Heister
    ctx.strokeStyle = 'rgba(0, 0, 0, 0.3)';
    ctx.lineWidth = 2;
    for(let i = 0; i < 4; i++) {
      ctx.beginPath();
      ctx.arc(w * 0.5, h * (0.18 - i * 0.03), w * 0.03, 0, Math.PI * 2);
      ctx.stroke();
    }
    
    // Bile inside
    ctx.fillStyle = 'rgba(154, 205, 50, 0.5)';
    ctx.beginPath();
    ctx.ellipse(w * 0.5, h * 0.5, w * 0.1, h * 0.15, 0, 0, Math.PI * 2);
    ctx.fill();
    
    // Gallstones (optional pathology)
    ctx.fillStyle = '#8B7355';
    ctx.beginPath();
    ctx.arc(w * 0.48, h * 0.55, w * 0.02, 0, Math.PI * 2);
    ctx.fill();
    ctx.beginPath();
    ctx.arc(w * 0.53, h * 0.5, w * 0.015, 0, Math.PI * 2);
    ctx.fill();
    
    // Outline
    ctx.strokeStyle = gbColor.dark;
    ctx.lineWidth = 2.5;
    ctx.beginPath();
    ctx.moveTo(w * 0.44, h * 0.23);
    ctx.lineTo(w * 0.38, h * 0.4);
    ctx.bezierCurveTo(w * 0.35, h * 0.55, w * 0.35, h * 0.65, w * 0.5, h * 0.75);
    ctx.bezierCurveTo(w * 0.65, h * 0.65, w * 0.65, h * 0.55, w * 0.62, h * 0.4);
    ctx.lineTo(w * 0.56, h * 0.23);
    ctx.stroke();
  }

  // ===== NERVOUS SYSTEM =====
  // dataRequired: ['component', 'division']
  // componentOptions: ['complete', 'brain', 'spinal-cord', 'cranial-nerves', 'spinal-nerves', 'autonomic']
  
  static drawNervousSystem(ctx, x, y, width, height, component, division = 'both') {
    ctx.save();
    ctx.translate(x, y);
    
    const color = { base: '#F0E68C', light: '#FFFACD', dark: '#BDB76B' };
    
    switch(component) {
      case 'complete':
        this.drawCompleteNervous(ctx, color, width, height, division);
        break;
      case 'brain':
        this.drawBrain(ctx, color, width, height);
        break;
      case 'spinal-cord':
        this.drawSpinalCord(ctx, color, width, height);
        break;
      case 'cranial-nerves':
        this.drawCranialNerves(ctx, color, width, height);
        break;
      case 'spinal-nerves':
        this.drawSpinalNerves(ctx, color, width, height);
        break;
      case 'autonomic':
        this.drawAutonomicNervous(ctx, color, width, height);
        break;
    }
    
    ctx.restore();
  }

  static drawCompleteNervous(ctx, color, w, h, division) {
    // Brain
    ctx.fillStyle = color.base;
    ctx.beginPath();
    ctx.ellipse(w * 0.5, h * 0.1, w * 0.12, h * 0.08, 0, 0, Math.PI * 2);
    ctx.fill();
    
    // Spinal cord
    ctx.fillStyle = color.light;
    ctx.fillRect(w * 0.48, h * 0.18, w * 0.04, h * 0.5);
    
    // Spinal nerves (paired, exiting from cord)
    ctx.strokeStyle = color.base;
    ctx.lineWidth = 2;
    
    for(let i = 0; i < 15; i++) {
      const y = h * (0.2 + i * 0.032);
      
      // Left nerve
      ctx.beginPath();
      ctx.moveTo(w * 0.48, y);
      ctx.lineTo(w * 0.2, y + h * 0.05);
      ctx.stroke();
      
      // Right nerve
      ctx.beginPath();
      ctx.moveTo(w * 0.52, y);
      ctx.lineTo(w * 0.8, y + h * 0.05);
      ctx.stroke();
    }
    
    // Peripheral nerve branches
    ctx.lineWidth = 1;
    ctx.strokeStyle = color.dark;
    
    for(let i = 0; i < 15; i++) {
      const y = h * (0.2 + i * 0.032);
      
      // Left branches
      ctx.beginPath();
      ctx.moveTo(w * 0.2, y + h * 0.05);
      ctx.lineTo(w * 0.05, y + h * 0.1);
      ctx.stroke();
      
      // Right branches
      ctx.beginPath();
      ctx.moveTo(w * 0.8, y + h * 0.05);
      ctx.lineTo(w * 0.95, y + h * 0.1);
      ctx.stroke();
    }
    
    // Cauda equina (horse's tail at bottom)
    ctx.lineWidth = 2;
    for(let i = 0; i < 8; i++) {
      ctx.beginPath();
      ctx.moveTo(w * 0.5, h * 0.68);
      const angle = (Math.PI / 9) * (i - 4);
      ctx.lineTo(
        w * 0.5 + Math.sin(angle) * w * 0.1,
        h * 0.85 + Math.cos(angle) * h * 0.1
      );
      ctx.stroke();
    }
  }

  static drawBrain(ctx, color, w, h) {
    // Cerebrum (large, wrinkled hemispheres)
    const brainColor = { base: '#F0E68C', light: '#FFFACD', dark: '#BDB76B' };
    
    const gradient = ctx.createRadialGradient(w * 0.5, h * 0.35, 0, w * 0.5, h * 0.35, w * 0.4);
    gradient.addColorStop(0, brainColor.light);
    gradient.addColorStop(0.6, brainColor.base);
    gradient.addColorStop(1, brainColor.dark);
    
    ctx.fillStyle = gradient;
    
    // Left hemisphere
    ctx.beginPath();
    ctx.arc(w * 0.35, h * 0.35, w * 0.25, 0, Math.PI * 2);
    ctx.fill();
    
    // Right hemisphere
    ctx.beginPath();
    ctx.arc(w * 0.65, h * 0.35, w * 0.25, 0, Math.PI * 2);
    ctx.fill();
    
    // Longitudinal fissure (between hemispheres)
    ctx.strokeStyle = brainColor.dark;
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.moveTo(w * 0.5, h * 0.15);
    ctx.lineTo(w * 0.5, h * 0.55);
    ctx.stroke();
    
    // Gyri and sulci (folds)
    ctx.lineWidth = 2;
    
    // Left hemisphere folds
    for(let i = 0; i < 8; i++) {
      ctx.beginPath();
      const startAngle = (Math.PI / 9) * i;
      const x = w * 0.35 + Math.cos(startAngle) * w * 0.15;
      const y = h * 0.35 + Math.sin(startAngle) * h * 0.15;
      ctx.moveTo(x, y);
      ctx.lineTo(
        w * 0.35 + Math.cos(startAngle) * w * 0.22,
        h * 0.35 + Math.sin(startAngle) * h * 0.22
      );
      ctx.stroke();
    }
    
    // Right hemisphere folds
    for(let i = 0; i < 8; i++) {
      ctx.beginPath();
      const startAngle = (Math.PI / 9) * i;
      const x = w * 0.65 + Math.cos(startAngle) * w * 0.15;
      const y = h * 0.35 + Math.sin(startAngle) * h * 0.15;
      ctx.moveTo(x, y);
      ctx.lineTo(
        w * 0.65 + Math.cos(startAngle) * w * 0.22,
        h * 0.35 + Math.sin(startAngle) * h * 0.22
      );
      ctx.stroke();
    }
    
    // Cerebellum (back, bottom)
    ctx.fillStyle = brainColor.base;
    ctx.beginPath();
    ctx.ellipse(w * 0.5, h * 0.65, w * 0.18, h * 0.12, 0, 0, Math.PI * 2);
    ctx.fill();
    
    // Cerebellar folia (horizontal lines)
    ctx.strokeStyle = brainColor.dark;
    ctx.lineWidth = 1;
    for(let i = 0; i < 8; i++) {
      ctx.beginPath();
      ctx.moveTo(w * 0.35, h * (0.6 + i * 0.015));
      ctx.lineTo(w * 0.65, h * (0.6 + i * 0.015));
      ctx.stroke();
    }
    
    // Brainstem
    ctx.fillStyle = brainColor.light;
    ctx.fillRect(w * 0.47, h * 0.7, w * 0.06, h * 0.15);
    
    // Medulla, pons, midbrain segments
    ctx.strokeStyle = brainColor.dark;
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(w * 0.47, h * 0.75);
    ctx.lineTo(w * 0.53, h * 0.75);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(w * 0.47, h * 0.8);
    ctx.lineTo(w * 0.53, h * 0.8);
    ctx.stroke();
  }

  static drawSpinalCord(ctx, color, w, h) {
    // Cross-section and longitudinal view
    
    // Longitudinal view (left side)
    const gradient = ctx.createLinearGradient(0, 0, 0, h);
    gradient.addColorStop(0, color.light);
    gradient.addColorStop(0.5, color.base);
    gradient.addColorStop(1, color.dark);
    
    ctx.fillStyle = gradient;
    ctx.fillRect(w * 0.1, h * 0.1, w * 0.08, h * 0.8);
    
    // Spinal nerves exiting
    ctx.strokeStyle = color.base;
    ctx.lineWidth = 2;
    
    for(let i = 0; i < 20; i++) {
      const y = h * (0.12 + i * 0.038);
      
      // Dorsal root (sensory)
      ctx.beginPath();
      ctx.moveTo(w * 0.14, y);
      ctx.lineTo(w * 0.25, y - h * 0.015);
      ctx.stroke();
      
      // Ventral root (motor)
      ctx.beginPath();
      ctx.moveTo(w * 0.14, y + h * 0.01);
      ctx.lineTo(w * 0.25, y + h * 0.025);
      ctx.stroke();
      
      // Dorsal root ganglion
      ctx.fillStyle = color.dark;
      ctx.beginPath();
      ctx.arc(w * 0.21, y - h * 0.01, w * 0.015, 0, Math.PI * 2);
      ctx.fill();
    }
    
    // Cross-section view (right side)
    ctx.save();
    ctx.translate(w * 0.6, h * 0.4);
    
    // White matter (outer)
    ctx.fillStyle = color.light;
    ctx.beginPath();
    ctx.ellipse(0, 0, w * 0.15, h * 0.2, 0, 0, Math.PI * 2);
    ctx.fill();
    
    // Gray matter (H or butterfly shape in center)
    ctx.fillStyle = '#A9A9A9';
    
    // Dorsal horns (top)
    ctx.beginPath();
    ctx.ellipse(-w * 0.04, -h * 0.08, w * 0.05, h * 0.06, 0, 0, Math.PI * 2);
    ctx.fill();
    ctx.beginPath();
    ctx.ellipse(w * 0.04, -h * 0.08, w * 0.05, h * 0.06, 0, 0, Math.PI * 2);
    ctx.fill();
    
    // Ventral horns (bottom)
    ctx.beginPath();
    ctx.ellipse(-w * 0.05, h * 0.08, w * 0.06, h * 0.07, 0, 0, Math.PI * 2);
    ctx.fill();
    ctx.beginPath();
    ctx.ellipse(w * 0.05, h * 0.08, w * 0.06, h * 0.07, 0, 0, Math.PI * 2);
    ctx.fill();
    
    // Central canal
    ctx.fillStyle = '#E0FFFF';
    ctx.beginPath();
    ctx.arc(0, 0, w * 0.01, 0, Math.PI * 2);
    ctx.fill();
    
    // Connecting gray commissure
    ctx.fillStyle = '#A9A9A9';
    ctx.fillRect(-w * 0.015, -h * 0.02, w * 0.03, h * 0.04);
    
    // Outline
    ctx.strokeStyle = color.dark;
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.ellipse(0, 0, w * 0.15, h * 0.2, 0, 0, Math.PI * 2);
    ctx.stroke();
    
    ctx.restore();
    
    // Meninges layers (protective coverings)
    ctx.strokeStyle = color.dark;
    ctx.lineWidth = 1;
    
    // Dura mater (outermost)
    ctx.beginPath();
    ctx.arc(w * 0.6, h * 0.4, w * 0.18, 0, Math.PI * 2);
    ctx.stroke();
    
    // Arachnoid mater
    ctx.beginPath();
    ctx.arc(w * 0.6, h * 0.4, w * 0.17, 0, Math.PI * 2);
    ctx.stroke();
  }

  static drawCranialNerves(ctx, color, w, h) {
    // 12 pairs of cranial nerves
    
    // Brain outline
    ctx.fillStyle = color.light;
    ctx.beginPath();
    ctx.ellipse(w * 0.5, h * 0.2, w * 0.2, h * 0.15, 0, 0, Math.PI * 2);
    ctx.fill();
    
    // Brainstem
    ctx.fillRect(w * 0.47, h * 0.35, w * 0.06, h * 0.2);
    
    const nerves = [
      { name: 'I - Olfactory', x: 0.45, y: 0.15, angle: -Math.PI/2 },
      { name: 'II - Optic', x: 0.55, y: 0.15, angle: -Math.PI/2 },
      { name: 'III - Oculomotor', x: 0.4, y: 0.38, angle: -Math.PI/3 },
      { name: 'IV - Trochlear', x: 0.6, y: 0.38, angle: -Math.PI*2/3 },
      { name: 'V - Trigeminal', x: 0.35, y: 0.45, angle: -Math.PI/4 },
      { name: 'VI - Abducens', x: 0.65, y: 0.45, angle: -Math.PI*3/4 },
      { name: 'VII - Facial', x: 0.32, y: 0.5, angle: -Math.PI/6 },
      { name: 'VIII - Vestibulocochlear', x: 0.68, y: 0.5, angle: -Math.PI*5/6 },
      { name: 'IX - Glossopharyngeal', x: 0.38, y: 0.55, angle: -Math.PI/8 },
      { name: 'X - Vagus', x: 0.62, y: 0.55, angle: -Math.PI*7/8 },
      { name: 'XI - Accessory', x: 0.42, y: 0.58, angle: -Math.PI/10 },
      { name: 'XII - Hypoglossal', x: 0.58, y: 0.58, angle: -Math.PI*9/10 }
    ];
    
    ctx.strokeStyle = color.base;
    ctx.lineWidth = 3;
    
    nerves.forEach((nerve, i) => {
      const startX = w * nerve.x;
      const startY = h * nerve.y;
      const endX = startX + Math.cos(nerve.angle) * w * 0.15;
      const endY = startY + Math.sin(nerve.angle) * h * 0.15;
      
      ctx.beginPath();
      ctx.moveTo(startX, startY);
      ctx.lineTo(endX, endY);
      ctx.stroke();
      
      // Nerve ganglion
      ctx.fillStyle = color.dark;
      ctx.beginPath();
      ctx.arc(endX, endY, w * 0.015, 0, Math.PI * 2);
      ctx.fill();
    });
    
    // Labels
    ctx.fillStyle = '#000000';
    ctx.font = `${w * 0.02}px Arial`;
    ctx.fillText('12 Cranial Nerves', w * 0.35, h * 0.75);
  }

  static drawSpinalNerves(ctx, color, w, h) {
    // Spinal cord center
    ctx.fillStyle = color.light;
    ctx.fillRect(w * 0.45, h * 0.1, w * 0.1, h * 0.8);
    
    // 31 pairs of spinal nerves
    const regions = [
      { name: 'Cervical (C1-C8)', count: 8, start: 0.1, color: '#FFB6C1' },
      { name: 'Thoracic (T1-T12)', count: 12, start: 0.28, color: '#87CEEB' },
      { name: 'Lumbar (L1-L5)', count: 5, start: 0.58, color: '#98FB98' },
      { name: 'Sacral (S1-S5)', count: 5, start: 0.73, color: '#DDA0DD' },
      { name: 'Coccygeal (Co1)', count: 1, start: 0.88, color: '#F0E68C' }
    ];
    
    let currentY = h * 0.12;
    
    regions.forEach(region => {
      const spacing = h * 0.45 / 31;
      
      for(let i = 0; i < region.count; i++) {
        // Dorsal root (sensory)
        ctx.strokeStyle = region.color;
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(w * 0.5, currentY);
        ctx.lineTo(w * 0.3, currentY - h * 0.01);
        ctx.stroke();
        
        // Ventral root (motor)
        ctx.beginPath();
        ctx.moveTo(w * 0.5, currentY);
        ctx.lineTo(w * 0.3, currentY + h * 0.01);
        ctx.stroke();
        
        // Dorsal root ganglion
        ctx.fillStyle = color.dark;
        ctx.beginPath();
        ctx.arc(w * 0.35, currentY, w * 0.01, 0, Math.PI * 2);
        ctx.fill();
        
        // Spinal nerve (combined)
        ctx.strokeStyle = color.base;
        ctx.lineWidth = 3;
        ctx.beginPath();
        ctx.moveTo(w * 0.3, currentY);
        ctx.lineTo(w * 0.15, currentY);
        ctx.stroke();
        
        // Right side (mirror)
        ctx.strokeStyle = region.color;
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(w * 0.5, currentY);
        ctx.lineTo(w * 0.7, currentY - h * 0.01);
        ctx.stroke();
        
        ctx.beginPath();
        ctx.moveTo(w * 0.5, currentY);
        ctx.lineTo(w * 0.7, currentY + h * 0.01);
        ctx.stroke();
        
        ctx.fillStyle = color.dark;
        ctx.beginPath();
        ctx.arc(w * 0.65, currentY, w * 0.01, 0, Math.PI * 2);
        ctx.fill();
        
        ctx.strokeStyle = color.base;
        ctx.lineWidth = 3;
        ctx.beginPath();
        ctx.moveTo(w * 0.7, currentY);
        ctx.lineTo(w * 0.85, currentY);
        ctx.stroke();
        
        currentY += spacing * region.count / region.count;
      }
    });
    
    // Region labels
    ctx.fillStyle = '#000000';
    ctx.font = `${w * 0.025}px Arial`;
    ctx.fillText('Cervical', w * 0.05, h * 0.2);
    ctx.fillText('Thoracic', w * 0.05, h * 0.45);
    ctx.fillText('Lumbar', w * 0.05, h * 0.65);
    ctx.fillText('Sacral', w * 0.05, h * 0.8);
  }

  static drawAutonomicNervous(ctx, color, w, h) {
    // Sympathetic (left) vs Parasympathetic (right)
    
    // Sympathetic division (thoracolumbar)
    ctx.fillStyle = '#FF6B6B';
    ctx.globalAlpha = 0.3;
    ctx.fillRect(w * 0.05, h * 0.3, w * 0.4, h * 0.5);
    ctx.globalAlpha = 1.0;
    
    // Spinal cord (sympathetic)
    ctx.fillStyle = color.light;
    ctx.fillRect(w * 0.15, h * 0.25, w * 0.05, h * 0.6);
    
    // Sympathetic chain ganglia
    ctx.fillStyle = '#FF6B6B';
    for(let i = 0; i < 12; i++) {
      const y = h * (0.28 + i * 0.045);
      ctx.beginPath();
      ctx.arc(w * 0.25, y, w * 0.015, 0, Math.PI * 2);
      ctx.fill();
      
      // Pre-ganglionic fibers
      ctx.strokeStyle = '#FF6B6B';
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(w * 0.2, y);
      ctx.lineTo(w * 0.25, y);
      ctx.stroke();
      
      // Post-ganglionic fibers to organs
      ctx.setLineDash([5, 5]);
      ctx.beginPath();
      ctx.moveTo(w * 0.25, y);
      ctx.lineTo(w * 0.4, y + h * 0.05);
      ctx.stroke();
      ctx.setLineDash([]);
    }
    
    // Target organs (sympathetic)
    const sympatheticOrgans = [
      { name: 'Eyes', y: 0.3 },
      { name: 'Heart', y: 0.4 },
      { name: 'Lungs', y: 0.5 },
      { name: 'Liver', y: 0.6 },
      { name: 'Intestines', y: 0.7 }
    ];
    
    ctx.fillStyle = '#FF6B6B';
    sympatheticOrgans.forEach(organ => {
      ctx.beginPath();
      ctx.arc(w * 0.42, h * organ.y, w * 0.02, 0, Math.PI * 2);
      ctx.fill();
    });
    
    // Parasympathetic division (craniosacral)
    ctx.fillStyle = '#6B8EFF';
    ctx.globalAlpha = 0.3;
    ctx.fillRect(w * 0.55, h * 0.1, w * 0.4, h * 0.8);
    ctx.globalAlpha = 1.0;
    
    // Cranial nerves (parasympathetic)
    ctx.strokeStyle = '#6B8EFF';
    ctx.lineWidth = 3;
    
    // Vagus nerve (CN X) - main parasympathetic
    ctx.beginPath();
    ctx.moveTo(w * 0.65, h * 0.15);
    ctx.bezierCurveTo(w * 0.7, h * 0.3, w * 0.7, h * 0.5, w * 0.68, h * 0.7);
    ctx.stroke();
    
    // Parasympathetic ganglia near organs
    const parasympatheticOrgans = [
      { name: 'Eyes', y: 0.2 },
      { name: 'Salivary', y: 0.25 },
      { name: 'Heart', y: 0.4 },
      { name: 'Lungs', y: 0.5 },
      { name: 'Stomach', y: 0.6 },
      { name: 'Intestines', y: 0.7 }
    ];
    
    ctx.fillStyle = '#6B8EFF';
    parasympatheticOrgans.forEach(organ => {
      // Terminal ganglion near organ
      ctx.beginPath();
      ctx.arc(w * 0.75, h * organ.y, w * 0.015, 0, Math.PI * 2);
      ctx.fill();
      
      // Pre-ganglionic fiber
      ctx.strokeStyle = '#6B8EFF';
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(w * 0.68, h * organ.y);
      ctx.lineTo(w * 0.75, h * organ.y);
      ctx.stroke();
      
      // Post-ganglionic fiber (short)
      ctx.setLineDash([3, 3]);
      ctx.beginPath();
      ctx.moveTo(w * 0.75, h * organ.y);
      ctx.lineTo(w * 0.82, h * organ.y);
      ctx.stroke();
      ctx.setLineDash([]);
      
      // Target organ
      ctx.beginPath();
      ctx.arc(w * 0.85, h * organ.y, w * 0.02, 0, Math.PI * 2);
      ctx.fill();
    });
    
    // Sacral parasympathetic
    ctx.fillStyle = color.light;
    ctx.fillRect(w * 0.63, h * 0.75, w * 0.04, h * 0.15);
    
    ctx.strokeStyle = '#6B8EFF';
    ctx.lineWidth = 2;
    for(let i = 0; i < 3; i++) {
      ctx.beginPath();
      ctx.moveTo(w * 0.67, h * (0.78 + i * 0.03));
      ctx.lineTo(w * 0.8, h * (0.82 + i * 0.02));
      ctx.stroke();
    }
    
    // Labels
    ctx.fillStyle = '#000000';
    ctx.font = `${w * 0.03}px Arial`;
    ctx.fillText('Sympathetic', w * 0.1, h * 0.2);
    ctx.fillText('(Fight or Flight)', w * 0.08, h * 0.24);
    ctx.fillText('Parasympathetic', w * 0.58, h * 0.05);
    ctx.fillText('(Rest & Digest)', w * 0.6, h * 0.09);
  }

  // ===== NEURON STRUCTURE =====
  // dataRequired: ['component', 'state']
  // componentOptions: ['complete', 'dendrites', 'soma', 'axon', 'myelin', 'terminals', 'nodes-of-ranvier']
  
  static drawNeuronStructure(ctx, x, y, width, height, component, state = 'resting') {
    ctx.save();
    ctx.translate(x, y);
    
    const color = { base: '#F0E68C', light: '#FFFACD', dark: '#BDB76B' };
    
    switch(component) {
      case 'complete':
        this.drawCompleteNeuron(ctx, color, width, height, state);
        break;
      case 'dendrites':
        this.drawDendrites(ctx, color, width, height);
        break;
      case 'soma':
        this.drawSoma(ctx, color, width, height);
        break;
      case 'axon':
        this.drawAxon(ctx, color, width, height);
        break;
      case 'myelin':
        this.drawMyelinSheath(ctx, color, width, height);
        break;
      case 'terminals':
        this.drawAxonTerminals(ctx, color, width, height);
        break;
      case 'nodes-of-ranvier':
        this.drawNodesOfRanvier(ctx, color, width, height);
        break;
    }
    
    ctx.restore();
  }

  static drawCompleteNeuron(ctx, color, w, h, state) {
    // Dendrites (receiving end)
    ctx.strokeStyle = color.base;
    ctx.lineWidth = 2;
    
    const drawDendriteBranch = (x, y, angle, length, depth) => {
      if(depth === 0) return;
      
      const endX = x + Math.cos(angle) * length;
      const endY = y + Math.sin(angle) * length;
      
      ctx.beginPath();
      ctx.moveTo(x, y);
      ctx.lineTo(endX, endY);
      ctx.stroke();
      
      // Dendritic spines
      if(depth <= 2) {
        for(let i = 0; i < 3; i++) {
          const spineAngle = angle + (Math.random() - 0.5);
          const spineX = x + (endX - x) * (i / 3);
          const spineY = y + (endY - y) * (i / 3);
          ctx.beginPath();
          ctx.arc(
            spineX + Math.cos(spineAngle) * w * 0.01,
            spineY + Math.sin(spineAngle) * h * 0.01,
            w * 0.005,
            0, Math.PI * 2
          );
          ctx.fill();
        }
      }
      
      drawDendriteBranch(endX, endY, angle - 0.4, length * 0.7, depth - 1);
      drawDendriteBranch(endX, endY, angle + 0.4, length * 0.7, depth - 1);
    };
    
    // Draw dendritic tree
    for(let i = 0; i < 5; i++) {
      const angle = (Math.PI / 6) * (i - 2) + Math.PI;
      drawDendriteBranch(w * 0.25, h * 0.3, angle, w * 0.08, 3);
    }
    
    // Soma (cell body)
    const gradient = ctx.createRadialGradient(w * 0.25, h * 0.3, 0, w * 0.25, h * 0.3, w * 0.08);
    gradient.addColorStop(0, color.light);
    gradient.addColorStop(0.7, color.base);
    gradient.addColorStop(1, color.dark);
    
    ctx.fillStyle = gradient;
    ctx.beginPath();
    ctx.arc(w * 0.25, h * 0.3, w * 0.06, 0, Math.PI * 2);
    ctx.fill();
    
    // Nucleus
    ctx.fillStyle = '#8B7355';
    ctx.beginPath();
    ctx.arc(w * 0.25, h * 0.3, w * 0.03, 0, Math.PI * 2);
    ctx.fill();
    
    // Nucleolus
    ctx.fillStyle = '#654321';
    ctx.beginPath();
    ctx.arc(w * 0.25, h * 0.3, w * 0.015, 0, Math.PI * 2);
    ctx.fill();
    
    // Nissl bodies (rough ER)
    ctx.fillStyle = 'rgba(0, 0, 255, 0.3)';
    for(let i = 0; i < 8; i++) {
      const angle = (Math.PI * 2 / 8) * i;
      ctx.beginPath();
      ctx.arc(
        w * 0.25 + Math.cos(angle) * w * 0.04,
        h * 0.3 + Math.sin(angle) * h * 0.04,
        w * 0.008,
        0, Math.PI * 2
      );
      ctx.fill();
    }
    
    // Axon hillock
    ctx.fillStyle = color.base;
    ctx.beginPath();
    ctx.moveTo(w * 0.31, h * 0.3);
    ctx.lineTo(w * 0.35, h * 0.28);
    ctx.lineTo(w * 0.35, h * 0.32);
    ctx.closePath();
    ctx.fill();
    
    // Axon with myelin sheaths
    const myelinColor = '#FFFFFF';
    const nodeColor = color.base;
    
    let axonX = w * 0.35;
    for(let i = 0; i < 6; i++) {
      // Myelin sheath
      ctx.fillStyle = myelinColor;
      ctx.fillRect(axonX, h * 0.28, w * 0.08, h * 0.04);
      
      // Nucleus of Schwann cell
      ctx.fillStyle = '#D3D3D3';
      ctx.beginPath();
      ctx.ellipse(axonX + w * 0.04, h * 0.27, w * 0.015, h * 0.008, 0, 0, Math.PI * 2);
      ctx.fill();
      
      axonX += w * 0.08;
      
      // Node of Ranvier
      if(i < 5) {
        ctx.fillStyle = nodeColor;
        ctx.fillRect(axonX, h * 0.29, w * 0.01, h * 0.02);
        
        // Action potential indicator
        if(state === 'action-potential' && i === 2) {
          ctx.strokeStyle = '#FFD700';
          ctx.lineWidth = 3;
          ctx.beginPath();
          ctx.arc(axonX + w * 0.005, h * 0.3, w * 0.025, 0, Math.PI * 2);
          ctx.stroke();
        }
        
        axonX += w * 0.01;
      }
    }
    
    // Axon terminals (telodendria)
    ctx.strokeStyle = color.base;
    ctx.lineWidth = 2;
    
    for(let i = 0; i < 4; i++) {
      const angle = (Math.PI / 5) * (i - 1.5);
      ctx.beginPath();
      ctx.moveTo(axonX, h * 0.3);
      ctx.lineTo(
        axonX + Math.cos(angle) * w * 0.08,
        h * 0.3 + Math.sin(angle) * h * 0.15
      );
      ctx.stroke();
      
      // Synaptic boutons
      ctx.fillStyle = color.dark;
      ctx.beginPath();
      ctx.arc(
        axonX + Math.cos(angle) * w * 0.08,
        h * 0.3 + Math.sin(angle) * h * 0.15,
        w * 0.012,
        0, Math.PI * 2
      );
      ctx.fill();
      
      // Synaptic vesicles
      ctx.fillStyle = '#FF69B4';
      for(let j = 0; j < 5; j++) {
        const vAngle = (Math.PI * 2 / 5) * j;
        ctx.beginPath();
        ctx.arc(
          axonX + Math.cos(angle) * w * 0.08 + Math.cos(vAngle) * w * 0.006,
          h * 0.3 + Math.sin(angle) * h * 0.15 + Math.sin(vAngle) * w * 0.006,
          w * 0.003,
          0, Math.PI * 2
        );
        ctx.fill();
      }
    }
    
    // Direction of impulse arrow
    ctx.fillStyle = '#FF0000';
    ctx.beginPath();
    ctx.moveTo(w * 0.6, h * 0.15);
    ctx.lineTo(w * 0.65, h * 0.15);
    ctx.lineTo(w * 0.625, h * 0.12);
    ctx.closePath();
    ctx.fill();
    ctx.fillText('Direction of impulse', w * 0.52, h * 0.1);
  }

  static drawDendrites(ctx, color, w, h) {
    // Highly branched dendritic tree
    ctx.strokeStyle = color.base;
    ctx.lineWidth = 3;
    
    const drawBranch = (x, y, angle, length, width, depth) => {
      if(depth === 0 || length < w * 0.01) return;
      
      const endX = x + Math.cos(angle) * length;
      const endY = y + Math.sin(angle) * length;
      
      ctx.lineWidth = width;
      ctx.beginPath();
      ctx.moveTo(x, y);
      ctx.lineTo(endX, endY);
      ctx.stroke();
      
      // Dendritic spines (sites of synaptic contact)
      const spineCount = Math.floor(length / (w * 0.02));
      ctx.fillStyle = color.light;
      for(let i = 0; i < spineCount; i++) {
        const t = i / spineCount;
        const spineX = x + (endX - x) * t;
        const spineY = y + (endY - y) * t;
        const spineAngle = angle + Math.PI / 2 + (Math.random() - 0.5);
        
        // Spine head
        ctx.beginPath();
        ctx.arc(
          spineX + Math.cos(spineAngle) * w * 0.015,
          spineY + Math.sin(spineAngle) * h * 0.015,
          w * 0.006,
          0, Math.PI * 2
        );
        ctx.fill();
        
        // Spine neck
        ctx.strokeStyle = color.base;
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(spineX, spineY);
        ctx.lineTo(
          spineX + Math.cos(spineAngle) * w * 0.015,
          spineY + Math.sin(spineAngle) * h * 0.015
        );
        ctx.stroke();
      }
      
      ctx.strokeStyle = color.base;
      
      // Branch recursively
      const branchCount = depth > 2 ? 2 : 3;
      for(let i = 0; i < branchCount; i++) {
        const newAngle = angle + (Math.random() - 0.5) * Math.PI / 2;
        drawBranch(endX, endY, newAngle, length * 0.7, width * 0.7, depth - 1);
      }
    };
    
    // Primary dendrites from soma
    for(let i = 0; i < 6; i++) {
      const angle = (Math.PI * 2 / 6) * i;
      drawBranch(w * 0.5, h * 0.5, angle, w * 0.15, 4, 4);
    }
    
    // Soma outline
    ctx.strokeStyle = color.dark;
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.arc(w * 0.5, h * 0.5, w * 0.05, 0, Math.PI * 2);
    ctx.stroke();
  }

  static drawSoma(ctx, color, w, h) {
    // Cell body with organelles
    const gradient = ctx.createRadialGradient(w * 0.5, h * 0.5, 0, w * 0.5, h * 0.5, w * 0.3);
    gradient.addColorStop(0, color.light);
    gradient.addColorStop(0.7, color.base);
    gradient.addColorStop(1, color.dark);
    
    ctx.fillStyle = gradient;
    ctx.beginPath();
    ctx.arc(w * 0.5, h * 0.5, w * 0.3, 0, Math.PI * 2);
    ctx.fill();
    
    // Nucleus (large)
    const nucleusGradient = ctx.createRadialGradient(w * 0.5, h * 0.5, 0, w * 0.5, h * 0.5, w * 0.15);
    nucleusGradient.addColorStop(0, '#B8A49D');
    nucleusGradient.addColorStop(1, '#8B7355');
    
    ctx.fillStyle = nucleusGradient;
    ctx.beginPath();
    ctx.arc(w * 0.5, h * 0.5, w * 0.15, 0, Math.PI * 2);
    ctx.fill();
    
    // Nuclear envelope (double membrane)
    ctx.strokeStyle = '#654321';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.arc(w * 0.5, h * 0.5, w * 0.15, 0, Math.PI * 2);
    ctx.stroke();
    
    ctx.beginPath();
    ctx.arc(w * 0.5, h * 0.5, w * 0.155, 0, Math.PI * 2);
    ctx.stroke();
    
    // Nuclear pores
    ctx.fillStyle = '#654321';
    for(let i = 0; i < 12; i++) {
      const angle = (Math.PI * 2 / 12) * i;
      ctx.beginPath();
      ctx.arc(
        w * 0.5 + Math.cos(angle) * w * 0.15,
        h * 0.5 + Math.sin(angle) * h * 0.15,
        w * 0.005,
        0, Math.PI * 2
      );
      ctx.fill();
    }
    
    // Nucleolus (dark spot)
    ctx.fillStyle = '#654321';
    ctx.beginPath();
    ctx.arc(w * 0.52, h * 0.48, w * 0.04, 0, Math.PI * 2);
    ctx.fill();
    
    // Chromatin
    ctx.strokeStyle = 'rgba(101, 67, 33, 0.3)';
    ctx.lineWidth = 1;
    for(let i = 0; i < 15; i++) {
      const angle1 = Math.random() * Math.PI * 2;
      const angle2 = Math.random() * Math.PI * 2;
      const r1 = Math.random() * w * 0.12;
      const r2 = Math.random() * w * 0.12;
      
      ctx.beginPath();
      ctx.moveTo(w * 0.5 + Math.cos(angle1) * r1, h * 0.5 + Math.sin(angle1) * r1);
      ctx.lineTo(w * 0.5 + Math.cos(angle2) * r2, h * 0.5 + Math.sin(angle2) * r2);
      ctx.stroke();
    }
    
    // Nissl bodies (rough ER with ribosomes)
    ctx.fillStyle = '#6B8FCD';
    const nisslPositions = [
      [0.35, 0.35], [0.65, 0.35], [0.35, 0.65], [0.65, 0.65],
      [0.3, 0.5], [0.7, 0.5], [0.5, 0.3], [0.5, 0.7]
    ];
    
    nisslPositions.forEach(([px, py]) => {
      ctx.beginPath();
      ctx.ellipse(w * px, h * py, w * 0.03, h * 0.02, Math.random() * Math.PI, 0, Math.PI * 2);
      ctx.fill();
      
      // Ribosomes on ER
      ctx.fillStyle = 'rgba(0, 0, 0, 0.5)';
      for(let i = 0; i < 8; i++) {
        ctx.beginPath();
        ctx.arc(
          w * px + (Math.random() - 0.5) * w * 0.04,
          h * py + (Math.random() - 0.5) * h * 0.03,
          w * 0.002,
          0, Math.PI * 2
        );
        ctx.fill();
      }
      ctx.fillStyle = '#6B8FCD';
    });
    
    // Mitochondria
    ctx.fillStyle = '#CD5C5C';
    const mitoPositions = [[0.4, 0.4], [0.6, 0.4], [0.4, 0.6], [0.6, 0.6]];
    
    mitoPositions.forEach(([px, py]) => {
      ctx.beginPath();
      ctx.ellipse(w * px, h * py, w * 0.025, h * 0.015, Math.random() * Math.PI, 0, Math.PI * 2);
      ctx.fill();
      
      // Cristae (inner folds)
      ctx.strokeStyle = '#8B0000';
      ctx.lineWidth = 1;
      for(let i = 0; i < 4; i++) {
        ctx.beginPath();
        ctx.moveTo(w * px - w * 0.02, h * py - h * 0.01 + i * h * 0.007);
        ctx.lineTo(w * px + w * 0.02, h * py - h * 0.01 + i * h * 0.007);
        ctx.stroke();
      }
    });
    
    // Golgi apparatus
    ctx.strokeStyle = '#FFD700';
    ctx.lineWidth = 2;
    for(let i = 0; i < 5; i++) {
      ctx.beginPath();
      ctx.arc(w * 0.55, h * 0.55 + i * h * 0.015, w * 0.04, Math.PI, 0);
      ctx.stroke();
    }
    
    // Lysosomes
    ctx.fillStyle = '#9370DB';
    for(let i = 0; i < 6; i++) {
      const angle = (Math.PI * 2 / 6) * i;
      ctx.beginPath();
      ctx.arc(
        w * 0.5 + Math.cos(angle) * w * 0.22,
        h * 0.5 + Math.sin(angle) * h * 0.22,
        w * 0.01,
        0, Math.PI * 2
      );
      ctx.fill();
    }
    
    // Cell membrane
    ctx.strokeStyle = color.dark;
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.arc(w * 0.5, h * 0.5, w * 0.3, 0, Math.PI * 2);
    ctx.stroke();
  }

  static drawAxon(ctx, color, w, h) {
    // Long axon with initial segment
    const gradient = ctx.createLinearGradient(0, 0, w, 0);
    gradient.addColorStop(0, color.light);
    gradient.addColorStop(0.5, color.base);
    gradient.addColorStop(1, color.dark);
    
    // Axon hillock (tapered beginning)
    ctx.fillStyle = gradient;
    ctx.beginPath();
    ctx.moveTo(w * 0.05, h * 0.45);
    ctx.lineTo(w * 0.15, h * 0.48);
    ctx.lineTo(w * 0.15, h * 0.52);
    ctx.lineTo(w * 0.05, h * 0.55);
    ctx.closePath();
    ctx.fill();
    
    // Initial segment (unmyelinated)
    ctx.fillStyle = color.base;
    ctx.fillRect(w * 0.15, h * 0.48, w * 0.1, h * 0.04);
    
    // Axoplasm (cytoplasm inside axon)
    ctx.fillStyle = color.light;
    ctx.fillRect(w * 0.16, h * 0.49, w * 0.08, h * 0.02);
    
    // Microtubules (structural support)
    ctx.strokeStyle = '#708090';
    ctx.lineWidth = 1;
    for(let i = 0; i < 3; i++) {
      ctx.beginPath();
      ctx.moveTo(w * 0.15, h * (0.49 + i * 0.01));
      ctx.lineTo(w * 0.9, h * (0.49 + i * 0.01));
      ctx.stroke();
    }
    
    // Neurofilaments
    ctx.strokeStyle = '#A9A9A9';
    ctx.lineWidth = 0.5;
    for(let i = 0; i < 20; i++) {
      ctx.beginPath();
      ctx.moveTo(w * (0.15 + i * 0.04), h * 0.485);
      ctx.lineTo(w * (0.15 + i * 0.04), h * 0.515);
      ctx.stroke();
    }
    
    // Mitochondria along axon (for energy)
    ctx.fillStyle = '#CD5C5C';
    for(let i = 0; i < 8; i++) {
      ctx.beginPath();
      ctx.ellipse(w * (0.2 + i * 0.09), h * 0.5, w * 0.015, h * 0.008, 0, 0, Math.PI * 2);
      ctx.fill();
    }
    
    // Vesicles being transported
    ctx.fillStyle = '#FF69B4';
    for(let i = 0; i < 12; i++) {
      ctx.beginPath();
      ctx.arc(w * (0.18 + i * 0.06), h * (0.49 + Math.random() * 0.02), w * 0.008, 0, Math.PI * 2);
      ctx.fill();
    }
    
    // Transport direction arrows
    ctx.fillStyle = '#FF0000';
    for(let i = 0; i < 5; i++) {
      const x = w * (0.3 + i * 0.12);
      ctx.beginPath();
      ctx.moveTo(x, h * 0.45);
      ctx.lineTo(x + w * 0.02, h * 0.45);
      ctx.lineTo(x + w * 0.01, h * 0.43);
      ctx.closePath();
      ctx.fill();
    }
    
    // Axon membrane
    ctx.strokeStyle = color.dark;
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(w * 0.15, h * 0.48);
    ctx.lineTo(w * 0.9, h * 0.48);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(w * 0.15, h * 0.52);
    ctx.lineTo(w * 0.9, h * 0.52);
    ctx.stroke();
  }

  static drawMyelinSheath(ctx, color, w, h) {
    // Myelin wrapped around axon
    
    // Axon core
    ctx.fillStyle = color.base;
    ctx.fillRect(w * 0.1, h * 0.45, w * 0.8, h * 0.1);
    
    // Multiple myelin segments
    for(let i = 0; i < 5; i++) {
      const x = w * (0.1 + i * 0.16);
      
      // Myelin sheath (multiple wraps)
      for(let layer = 0; layer < 6; layer++) {
        const thickness = h * (0.02 + layer * 0.015);
        const yTop = h * (0.5 - thickness / 2);
        
        ctx.fillStyle = layer % 2 === 0 ? '#FFFFFF' : '#F0F0F0';
        ctx.fillRect(x, yTop, w * 0.14, thickness);
      }
      
      // Schwann cell nucleus
      ctx.fillStyle = '#D3D3D3';
      ctx.beginPath();
      ctx.ellipse(x + w * 0.07, h * 0.38, w * 0.02, h * 0.015, 0, 0, Math.PI * 2);
      ctx.fill();
      
      // Schwann cell cytoplasm
      ctx.fillStyle = 'rgba(211, 211, 211, 0.5)';
      ctx.beginPath();
      ctx.ellipse(x + w * 0.07, h * 0.35, w * 0.03, h * 0.02, 0, 0, Math.PI * 2);
      ctx.fill();
      
      // Myelin outline
      ctx.strokeStyle = '#C0C0C0';
      ctx.lineWidth = 2;
      const outerThickness = h * 0.17;
      ctx.strokeRect(x, h * (0.5 - outerThickness / 2), w * 0.14, outerThickness);
      
      // Node of Ranvier (gap between myelin)
      if(i < 4) {
        const nodeX = x + w * 0.14;
        ctx.fillStyle = color.light;
        ctx.fillRect(nodeX, h * 0.46, w * 0.02, h * 0.08);
        
        // Sodium channels at node
        ctx.fillStyle = '#FFD700';
        for(let j = 0; j < 5; j++) {
          ctx.beginPath();
          ctx.arc(nodeX + w * 0.01, h * (0.47 + j * 0.015), w * 0.003, 0, Math.PI * 2);
          ctx.fill();
        }
      }
    }
    
    // Compact myelin layers (detail view)
    ctx.save();
    ctx.translate(w * 0.75, h * 0.7);
    
    // Zoomed myelin layers
    for(let i = 0; i < 10; i++) {
      ctx.strokeStyle = i % 2 === 0 ? '#000000' : '#808080';
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.arc(0, 0, w * (0.03 + i * 0.008), 0, Math.PI * 2);
      ctx.stroke();
    }
    
    ctx.fillStyle = '#000000';
    ctx.font = `${w * 0.02}px Arial`;
    ctx.fillText('Myelin layers', w * 0.05, h * 0.05);
    
    ctx.restore();
  }

  static drawAxonTerminals(ctx, color, w, h) {
    // Telodendria and synaptic boutons
    
    // Main axon
    ctx.strokeStyle = color.base;
    ctx.lineWidth = 8;
    ctx.beginPath();
    ctx.moveTo(w * 0.1, h * 0.5);
    ctx.lineTo(w * 0.4, h * 0.5);
    ctx.stroke();
    
    // Terminal branches
    const branches = [
      { angle: -Math.PI / 4, length: 0.2 },
      { angle: -Math.PI / 6, length: 0.18 },
      { angle: 0, length: 0.22 },
      { angle: Math.PI / 6, length: 0.18 },
      { angle: Math.PI / 4, length: 0.2 }
    ];
    
    ctx.lineWidth = 4;
    branches.forEach(branch => {
      const endX = w * 0.4 + Math.cos(branch.angle) * w * branch.length;
      const endY = h * 0.5 + Math.sin(branch.angle) * h * branch.length;
      
      ctx.beginPath();
      ctx.moveTo(w * 0.4, h * 0.5);
      ctx.lineTo(endX, endY);
      ctx.stroke();
      
      // Synaptic bouton (terminal button)
      const boutonGradient = ctx.createRadialGradient(endX, endY, 0, endX, endY, w * 0.04);
      boutonGradient.addColorStop(0, color.light);
      boutonGradient.addColorStop(1, color.dark);
      
      ctx.fillStyle = boutonGradient;
      ctx.beginPath();
      ctx.arc(endX, endY, w * 0.04, 0, Math.PI * 2);
      ctx.fill();
      
      // Synaptic vesicles (neurotransmitter storage)
      ctx.fillStyle = '#FF69B4';
      for(let i = 0; i < 15; i++) {
        const vAngle = (Math.PI * 2 / 15) * i;
        const vRadius = w * 0.025;
        ctx.beginPath();
        ctx.arc(
          endX + Math.cos(vAngle) * vRadius,
          endY + Math.sin(vAngle) * vRadius,
          w * 0.006,
          0, Math.PI * 2
        );
        ctx.fill();
      }
      
      // Mitochondria (energy for neurotransmitter release)
      ctx.fillStyle = '#CD5C5C';
      ctx.beginPath();
      ctx.ellipse(endX - w * 0.015, endY, w * 0.012, h * 0.008, 0, 0, Math.PI * 2);
      ctx.fill();
      
      // Active zone (release site)
      ctx.fillStyle = '#FFD700';
      ctx.fillRect(endX - w * 0.015, endY + h * 0.035, w * 0.03, h * 0.005);
      
      // Synaptic cleft
      ctx.fillStyle = '#E0FFFF';
      ctx.fillRect(endX - w * 0.02, endY + h * 0.04, w * 0.04, h * 0.01);
      
      // Postsynaptic membrane (receiving neuron)
      ctx.strokeStyle = '#8B4789';
      ctx.lineWidth = 3;
      ctx.beginPath();
      ctx.moveTo(endX - w * 0.02, endY + h * 0.05);
      ctx.lineTo(endX + w * 0.02, endY + h * 0.05);
      ctx.stroke();
      
      // Receptors on postsynaptic membrane
      ctx.fillStyle = '#9370DB';
      for(let i = 0; i < 6; i++) {
        ctx.fillRect(
          endX - w * 0.015 + i * w * 0.006,
          endY + h * 0.048,
          w * 0.004,
          h * 0.008
        );
      }
    });
    
    // Label
    ctx.fillStyle = '#000000';
    ctx.font = `${w * 0.025}px Arial`;
    ctx.fillText('Synaptic Boutons', w * 0.05, h * 0.15);
  }

  static drawNodesOfRanvier(ctx, color, w, h) {
    // Detailed view of nodes between myelin segments
    
    // Myelinated segments
    for(let i = 0; i < 3; i++) {
      const x = w * (0.05 + i * 0.3);
      
      // Myelin sheath
      ctx.fillStyle = '#FFFFFF';
      ctx.fillRect(x, h * 0.35, w * 0.24, h * 0.3);
      
      // Myelin layers
      for(let layer = 0; layer < 8; layer++) {
        ctx.strokeStyle = layer % 2 === 0 ? '#E0E0E0' : '#F5F5F5';
        ctx.lineWidth = 2;
        const offset = layer * 2;
        ctx.strokeRect(
          x + offset,
          h * 0.35 + offset,
          w * 0.24 - offset * 2,
          h * 0.3 - offset * 2
        );
      }
      
      // Schwann cell nucleus
      ctx.fillStyle = '#B0B0B0';
      ctx.beginPath();
      ctx.ellipse(x + w * 0.12, h * 0.32, w * 0.025, h * 0.02, 0, 0, Math.PI * 2);
      ctx.fill();
      
      // Node of Ranvier (if not last segment)
      if(i < 2) {
        const nodeX = x + w * 0.24;
        
        // Exposed axon at node
        ctx.fillStyle = color.base;
        ctx.fillRect(nodeX, h * 0.45, w * 0.06, h * 0.1);
        
        // Axolemma (cell membrane)
        ctx.strokeStyle = color.dark;
        ctx.lineWidth = 2;
        ctx.strokeRect(nodeX, h * 0.45, w * 0.06, h * 0.1);
        
        // High concentration of sodium channels
        ctx.fillStyle = '#FFD700';
        for(let row = 0; row < 3; row++) {
          for(let col = 0; col < 4; col++) {
            ctx.beginPath();
            ctx.arc(
              nodeX + w * (0.012 + col * 0.015),
              h * (0.47 + row * 0.03),
              w * 0.005,
              0, Math.PI * 2
            );
            ctx.fill();
          }
        }
        
        // Potassium channels (fewer)
        ctx.fillStyle = '#87CEEB';
        for(let j = 0; j < 6; j++) {
          ctx.beginPath();
          ctx.arc(
            nodeX + w * (0.01 + j * 0.01),
            h * (0.46 + (j % 2) * 0.06),
            w * 0.004,
            0, Math.PI * 2
          );
          ctx.fill();
        }
        
        // Paranodal regions (myelin loops)
        ctx.fillStyle = 'rgba(255, 255, 255, 0.7)';
        
        // Left paranode
        ctx.beginPath();
        ctx.moveTo(nodeX, h * 0.45);
        ctx.lineTo(nodeX - w * 0.02, h * 0.42);
        ctx.lineTo(nodeX - w * 0.02, h * 0.58);
        ctx.lineTo(nodeX, h * 0.55);
        ctx.closePath();
        ctx.fill();
        
        // Right paranode
        ctx.beginPath();
        ctx.moveTo(nodeX + w * 0.06, h * 0.45);
        ctx.lineTo(nodeX + w * 0.08, h * 0.42);
        ctx.lineTo(nodeX + w * 0.08, h * 0.58);
        ctx.lineTo(nodeX + w * 0.06, h * 0.55);
        ctx.closePath();
        ctx.fill();
        
        // Action potential wave (optional)
        ctx.strokeStyle = '#FF0000';
        ctx.lineWidth = 3;
        ctx.globalAlpha = 0.6;
        ctx.beginPath();
        ctx.arc(nodeX + w * 0.03, h * 0.5, w * 0.08, 0, Math.PI * 2);
        ctx.stroke();
        ctx.globalAlpha = 1.0;
      }
    }
    
    // Saltatory conduction arrows
    ctx.fillStyle = '#FF0000';
    ctx.beginPath();
    ctx.moveTo(w * 0.32, h * 0.25);
    ctx.lineTo(w * 0.37, h * 0.25);
    ctx.lineTo(w * 0.345, h * 0.22);
    ctx.closePath();
    ctx.fill();
    
    ctx.beginPath();
    ctx.moveTo(w * 0.62, h * 0.25);
    ctx.lineTo(w * 0.67, h * 0.25);
    ctx.lineTo(w * 0.645, h * 0.22);
    ctx.closePath();
    ctx.fill();
    
    // Labels
    ctx.fillStyle = '#000000';
    ctx.font = `${w * 0.02}px Arial`;
    ctx.fillText('Node of Ranvier', w * 0.35, h * 0.75);
    ctx.fillText('Myelin Sheath', w * 0.08, h * 0.75);
    ctx.fillText('Saltatory Conduction', w * 0.3, h * 0.2);
  }

  // ===== SKELETAL SYSTEM =====
  // dataRequired: ['region', 'view']
  // regionOptions: ['complete', 'axial', 'appendicular', 'skull', 'ribcage', 'spine', 'pelvis', 'upper-limb', 'lower-limb']
  
  static drawSkeletalSystem(ctx, x, y, width, height, region, view = 'anterior') {
    ctx.save();
    ctx.translate(x, y);
    
    const color = { base: '#F5F5DC', light: '#FFFAF0', dark: '#D2B48C' };
    
    switch(region) {
      case 'complete':
        this.drawCompleteSkeleton(ctx, color, width, height, view);
        break;
      case 'axial':
        this.drawAxialSkeleton(ctx, color, width, height);
        break;
      case 'appendicular':
        this.drawAppendicularSkeleton(ctx, color, width, height);
        break;
      case 'skull':
        this.drawSkull(ctx, color, width, height, view);
        break;
      case 'ribcage':
        this.drawRibcage(ctx, color, width, height, view);
        break;
      case 'spine':
        this.drawSpine(ctx, color, width, height, view);
        break;
      case 'pelvis':
        this.drawPelvis(ctx, color, width, height, view);
        break;
      case 'upper-limb':
        this.drawUpperLimb(ctx, color, width, height);
        break;
      case 'lower-limb':
        this.drawLowerLimb(ctx, color, width, height);
        break;
    }
    
    ctx.restore();
  }

  static drawCompleteSkeleton(ctx, color, w, h, view) {
    // Full skeleton anterior view
    
    // Skull
    this.drawSkullSimple(ctx, color, w * 0.5, h * 0.08, w * 0.12, h * 0.1);
    
    // Cervical spine (neck)
    ctx.strokeStyle = color.base;
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.moveTo(w * 0.5, h * 0.18);
    ctx.lineTo(w * 0.5, h * 0.24);
    ctx.stroke();
    
    // Clavicles (collarbones)
    ctx.lineWidth = 4;
    ctx.beginPath();
    ctx.moveTo(w * 0.5, h * 0.24);
    ctx.lineTo(w * 0.35, h * 0.26);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(w * 0.5, h * 0.24);
    ctx.lineTo(w * 0.65, h * 0.26);
    ctx.stroke();
    
    // Scapulae (shoulder blades) - hint
    ctx.fillStyle = color.light;
    ctx.beginPath();
    ctx.ellipse(w * 0.35, h * 0.3, w * 0.04, h * 0.06, -0.3, 0, Math.PI * 2);
    ctx.fill();
    ctx.beginPath();
    ctx.ellipse(w * 0.65, h * 0.3, w * 0.04, h * 0.06, 0.3, 0, Math.PI * 2);
    ctx.fill();
    
    // Humerus (upper arm)
    ctx.strokeStyle = color.base;
    ctx.lineWidth = 5;
    ctx.beginPath();
    ctx.moveTo(w * 0.35, h * 0.26);
    ctx.lineTo(w * 0.32, h * 0.45);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(w * 0.65, h * 0.26);
    ctx.lineTo(w * 0.68, h * 0.45);
    ctx.stroke();
    
    // Radius and ulna (forearm)
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.moveTo(w * 0.32, h * 0.45);
    ctx.lineTo(w * 0.3, h * 0.62);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(w * 0.68, h * 0.45);
    ctx.lineTo(w * 0.7, h * 0.62);
    ctx.stroke();
    
    // Hands
    ctx.lineWidth = 2;
    for(let i = 0; i < 5; i++) {
      ctx.beginPath();
      ctx.moveTo(w * (0.28 + i * 0.01), h * 0.62);
      ctx.lineTo(w * (0.27 + i * 0.01), h * 0.68);
      ctx.stroke();
      
      ctx.beginPath();
      ctx.moveTo(w * (0.70 + i * 0.01), h * 0.62);
      ctx.lineTo(w * (0.71 + i * 0.01), h * 0.68);
      ctx.stroke();
    }
    
    // Sternum and ribs
    ctx.strokeStyle = color.base;
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.moveTo(w * 0.5, h * 0.24);
    ctx.lineTo(w * 0.5, h * 0.45);
    ctx.stroke();
    
    // Ribs
    ctx.lineWidth = 2;
    for(let i = 0; i < 10; i++) {
      const y = h * (0.26 + i * 0.02);
      const curve = Math.min(i * 0.01, 0.08);
      
      ctx.beginPath();
      ctx.moveTo(w * 0.5, y);
      ctx.bezierCurveTo(w * (0.5 - curve), y + h * 0.015, w * (0.5 - curve), y + h * 0.015, w * (0.5 - curve * 0.7), y);
      ctx.stroke();
      
      ctx.beginPath();
      ctx.moveTo(w * 0.5, y);
      ctx.bezierCurveTo(w * (0.5 + curve), y + h * 0.015, w * (0.5 + curve), y + h * 0.015, w * (0.5 + curve * 0.7), y);
      ctx.stroke();
    }
    
    // Lumbar spine
    ctx.lineWidth = 4;
    ctx.beginPath();
    ctx.moveTo(w * 0.5, h * 0.45);
    ctx.lineTo(w * 0.5, h * 0.58);
    ctx.stroke();
    
    // Pelvis
    ctx.fillStyle = color.light;
    ctx.beginPath();
    ctx.ellipse(w * 0.5, h * 0.58, w * 0.12, h * 0.08, 0, 0, Math.PI * 2);
    ctx.fill();
    
    ctx.strokeStyle = color.dark;
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.ellipse(w * 0.5, h * 0.58, w * 0.12, h * 0.08, 0, 0, Math.PI * 2);
    ctx.stroke();
    
    // Obturator foramen (hip holes)
    ctx.fillStyle = '#FFFFFF';
    ctx.beginPath();
    ctx.ellipse(w * 0.43, h * 0.6, w * 0.02, h * 0.03, 0, 0, Math.PI * 2);
    ctx.fill();
    ctx.beginPath();
    ctx.ellipse(w * 0.57, h * 0.6, w * 0.02, h * 0.03, 0, 0, Math.PI * 2);
    ctx.fill();
    
    // Femur (thigh bone)
    ctx.strokeStyle = color.base;
    ctx.lineWidth = 6;
    ctx.beginPath();
    ctx.moveTo(w * 0.42, h * 0.62);
    ctx.lineTo(w * 0.44, h * 0.82);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(w * 0.58, h * 0.62);
    ctx.lineTo(w * 0.56, h * 0.82);
    ctx.stroke();
    
    // Patella (kneecap)
    ctx.fillStyle = color.base;
    ctx.beginPath();
    ctx.ellipse(w * 0.44, h * 0.82, w * 0.015, h * 0.02, 0, 0, Math.PI * 2);
    ctx.fill();
    ctx.beginPath();
    ctx.ellipse(w * 0.56, h * 0.82, w * 0.015, h * 0.02, 0, 0, Math.PI * 2);
    ctx.fill();
    
    // Tibia and fibula (lower leg)
    ctx.strokeStyle = color.base;
    ctx.lineWidth = 5;
    ctx.beginPath();
    ctx.moveTo(w * 0.44, h * 0.84);
    ctx.lineTo(w * 0.44, h * 0.96);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(w * 0.56, h * 0.84);
    ctx.lineTo(w * 0.56, h * 0.96);
    ctx.stroke();
    
    // Feet
    ctx.fillStyle = color.light;
    ctx.fillRect(w * 0.42, h * 0.96, w * 0.04, h * 0.03);
    ctx.fillRect(w * 0.54, h * 0.96, w * 0.04, h * 0.03);
    
    // Toes
    ctx.lineWidth = 1.5;
    for(let i = 0; i < 5; i++) {
      ctx.strokeRect(w * (0.422 + i * 0.007), h * 0.99, w * 0.006, h * 0.01);
      ctx.strokeRect(w * (0.542 + i * 0.007), h * 0.99, w * 0.006, h * 0.01);
    }
  }

  static drawAxialSkeleton(ctx, color, w, h) {
    // Skull, vertebral column, ribs, sternum
    
    // Skull
    this.drawSkullSimple(ctx, color, w * 0.5, h * 0.12, w * 0.15, h * 0.12);
    
    // Vertebral column
    ctx.strokeStyle = color.base;
    ctx.lineWidth = 6;
    ctx.beginPath();
    ctx.moveTo(w * 0.5, h * 0.24);
    ctx.lineTo(w * 0.5, h * 0.75);
    ctx.stroke();
    
    // Vertebrae (individual)
    ctx.fillStyle = color.light;
    for(let i = 0; i < 24; i++) {
      const y = h * (0.25 + i * 0.02);
      ctx.beginPath();
      ctx.ellipse(w * 0.5, y, w * 0.025, h * 0.015, 0, 0, Math.PI * 2);
      ctx.fill();
      ctx.strokeStyle = color.dark;
      ctx.lineWidth = 1;
      ctx.stroke();
      
      // Spinous process
      ctx.fillStyle = color.base;
      ctx.beginPath();
      ctx.moveTo(w * 0.5, y);
      ctx.lineTo(w * 0.53, y + h * 0.01);
      ctx.lineTo(w * 0.5, y + h * 0.012);
      ctx.closePath();
      ctx.fill();
    }
    
    // Sternum
    ctx.fillStyle = color.light;
    ctx.fillRect(w * 0.47, h * 0.3, w * 0.06, h * 0.2);
    ctx.strokeStyle = color.dark;
    ctx.lineWidth = 2;
    ctx.strokeRect(w * 0.47, h * 0.3, w * 0.06, h * 0.2);
    
    // Ribs (12 pairs)
    ctx.strokeStyle = color.base;
    ctx.lineWidth = 3;
    for(let i = 0; i < 12; i++) {
      const y = h * (0.31 + i * 0.03);
      const width = Math.min(0.15 + i * 0.01, 0.22);
      
      // Left rib
      ctx.beginPath();
      ctx.moveTo(w * 0.5, y);
      ctx.bezierCurveTo(
        w * (0.5 - width * 0.7), y - h * 0.02,
        w * (0.5 - width * 0.7), y + h * 0.02,
        w * (0.5 - width * 0.5), y
      );
      ctx.stroke();
      
      // Right rib
      ctx.beginPath();
      ctx.moveTo(w * 0.5, y);
      ctx.bezierCurveTo(
        w * (0.5 + width * 0.7), y - h * 0.02,
        w * (0.5 + width * 0.7), y + h * 0.02,
        w * (0.5 + width * 0.5), y
      );
      ctx.stroke();
    }
    
    // Sacrum
    ctx.fillStyle = color.light;
    ctx.beginPath();
    ctx.moveTo(w * 0.5, h * 0.75);
    ctx.lineTo(w * 0.42, h * 0.82);
    ctx.lineTo(w * 0.45, h * 0.88);
    ctx.lineTo(w * 0.55, h * 0.88);
    ctx.lineTo(w * 0.58, h * 0.82);
    ctx.closePath();
    ctx.fill();
    ctx.strokeStyle = color.dark;
    ctx.lineWidth = 2;
    ctx.stroke();
  }

  static drawAppendicularSkeleton(ctx, color, w, h) {
    // Limbs and girdles only
    
    // Pectoral girdle
    // Clavicles
    ctx.strokeStyle = color.base;
    ctx.lineWidth = 5;
    ctx.beginPath();
    ctx.moveTo(w * 0.5, h * 0.15);
    ctx.lineTo(w * 0.3, h * 0.18);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(w * 0.5, h * 0.15);
    ctx.lineTo(w * 0.7, h * 0.18);
    ctx.stroke();
    
    // Scapulae
    ctx.fillStyle = color.light;
    ctx.beginPath();
    ctx.moveTo(w * 0.28, h * 0.2);
    ctx.lineTo(w * 0.24, h * 0.25);
    ctx.lineTo(w * 0.26, h * 0.35);
    ctx.lineTo(w * 0.32, h * 0.32);
    ctx.closePath();
    ctx.fill();
    
    ctx.beginPath();
    ctx.moveTo(w * 0.72, h * 0.2);
    ctx.lineTo(w * 0.76, h * 0.25);
    ctx.lineTo(w * 0.74, h * 0.35);
    ctx.lineTo(w * 0.68, h * 0.32);
    ctx.closePath();
    ctx.fill();
    
    // Upper limbs
    // Humerus
    ctx.strokeStyle = color.base;
    ctx.lineWidth = 6;
    ctx.beginPath();
    ctx.moveTo(w * 0.3, h * 0.18);
    ctx.lineTo(w * 0.25, h * 0.45);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(w * 0.7, h * 0.18);
    ctx.lineTo(w * 0.75, h * 0.45);
    ctx.stroke();
    
    // Radius and ulna
    ctx.lineWidth = 4;
    ctx.beginPath();
    ctx.moveTo(w * 0.25, h * 0.45);
    ctx.lineTo(w * 0.22, h * 0.65);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(w * 0.75, h * 0.45);
    ctx.lineTo(w * 0.78, h * 0.65);
    ctx.stroke();
    
    // Carpals, metacarpals, phalanges (hands)
    ctx.fillStyle = color.light;
    ctx.fillRect(w * 0.2, h * 0.65, w * 0.04, h * 0.03);
    ctx.fillRect(w * 0.76, h * 0.65, w * 0.04, h * 0.03);
    
    ctx.lineWidth = 2;
    for(let i = 0; i < 5; i++) {
      // Left hand fingers
      ctx.beginPath();
      ctx.moveTo(w * (0.202 + i * 0.008), h * 0.68);
      ctx.lineTo(w * (0.202 + i * 0.008), h * 0.75);
      ctx.stroke();
      
      // Right hand fingers
      ctx.beginPath();
      ctx.moveTo(w * (0.762 + i * 0.008), h * 0.68);
      ctx.lineTo(w * (0.762 + i * 0.008), h * 0.75);
      ctx.stroke();
    }
    
    // Pelvic girdle
    ctx.fillStyle = color.light;
    ctx.beginPath();
    ctx.ellipse(w * 0.5, h * 0.5, w * 0.15, h * 0.1, 0, 0, Math.PI * 2);
    ctx.fill();
    ctx.strokeStyle = color.dark;
    ctx.lineWidth = 3;
    ctx.stroke();
    
    // Acetabulum (hip socket)
    ctx.fillStyle = '#FFFFFF';
    ctx.beginPath();
    ctx.arc(w * 0.38, h * 0.52, w * 0.02, 0, Math.PI * 2);
    ctx.fill();
    ctx.beginPath();
    ctx.arc(w * 0.62, h * 0.52, w * 0.02, 0, Math.PI * 2);
    ctx.fill();
    
    // Lower limbs
    // Femur
    ctx.strokeStyle = color.base;
    ctx.lineWidth = 7;
    ctx.beginPath();
    ctx.moveTo(w * 0.38, h * 0.52);
    ctx.lineTo(w * 0.4, h * 0.78);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(w * 0.62, h * 0.52);
    ctx.lineTo(w * 0.6, h * 0.78);
    ctx.stroke();
    
    // Patella
    ctx.fillStyle = color.base;
    ctx.beginPath();
    ctx.ellipse(w * 0.4, h * 0.78, w * 0.018, h * 0.025, 0, 0, Math.PI * 2);
    ctx.fill();
    ctx.beginPath();
    ctx.ellipse(w * 0.6, h * 0.78, w * 0.018, h * 0.025, 0, 0, Math.PI * 2);
    ctx.fill();
    
    // Tibia and fibula
    ctx.strokeStyle = color.base;
    ctx.lineWidth = 6;
    ctx.beginPath();
    ctx.moveTo(w * 0.4, h * 0.8);
    ctx.lineTo(w * 0.4, h * 0.95);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(w * 0.6, h * 0.8);
    ctx.lineTo(w * 0.6, h * 0.95);
    ctx.stroke();
    
    // Tarsals, metatarsals, phalanges (feet)
    ctx.fillStyle = color.light;
    ctx.fillRect(w * 0.38, h * 0.95, w * 0.05, h * 0.04);
    ctx.fillRect(w * 0.58, h * 0.95, w * 0.05, h * 0.04);
    
    ctx.strokeStyle = color.base;
    ctx.lineWidth = 2;
    for(let i = 0; i < 5; i++) {
      ctx.strokeRect(w * (0.382 + i * 0.009), h * 0.99, w * 0.008, h * 0.01);
      ctx.strokeRect(w * (0.582 + i * 0.009), h * 0.99, w * 0.008, h * 0.01);
    }
  }

  static drawSkullSimple(ctx, color, centerX, centerY, width, height) {
    // Simplified skull for complete skeleton
    const gradient = ctx.createRadialGradient(centerX, centerY, 0, centerX, centerY, width);
    gradient.addColorStop(0, color.light);
    gradient.addColorStop(1, color.base);
    
    ctx.fillStyle = gradient;
    
    // Cranium
    ctx.beginPath();
    ctx.ellipse(centerX, centerY - height * 0.1, width * 0.9, height * 0.8, 0, 0, Math.PI * 2);
    ctx.fill();
    
    // Mandible (jaw)
    ctx.beginPath();
    ctx.moveTo(centerX - width * 0.5, centerY + height * 0.3);
    ctx.quadraticCurveTo(centerX, centerY + height * 0.7, centerX + width * 0.5, centerY + height * 0.3);
    ctx.lineTo(centerX + width * 0.5, centerY + height * 0.2);
    ctx.lineTo(centerX - width * 0.5, centerY + height * 0.2);
    ctx.closePath();
    ctx.fill();
    
    // Eye sockets
    ctx.fillStyle = '#000000';
    ctx.beginPath();
    ctx.ellipse(centerX - width * 0.3, centerY, width * 0.2, height * 0.25, 0, 0, Math.PI * 2);
    ctx.fill();
    ctx.beginPath();
    ctx.ellipse(centerX + width * 0.3, centerY, width * 0.2, height * 0.25, 0, 0, Math.PI * 2);
    ctx.fill();
    
    // Nasal cavity
    ctx.beginPath();
    ctx.moveTo(centerX, centerY + height * 0.15);
    ctx.lineTo(centerX - width * 0.1, centerY + height * 0.35);
    ctx.lineTo(centerX + width * 0.1, centerY + height * 0.35);
    ctx.closePath();
    ctx.fill();
    
    // Outline
    ctx.strokeStyle = color.dark;
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.ellipse(centerX, centerY - height * 0.1, width * 0.9, height * 0.8, 0, 0, Math.PI * 2);
    ctx.stroke();
  }

  static drawSkull(ctx, color, w, h, view) {
    // Detailed skull
    const gradient = ctx.createRadialGradient(w * 0.5, h * 0.4, 0, w * 0.5, h * 0.4, w * 0.4);
    gradient.addColorStop(0, color.light);
    gradient.addColorStop(0.7, color.base);
    gradient.addColorStop(1, color.dark);
    
    ctx.fillStyle = gradient;
    
    if(view === 'anterior') {
      // Front view
      // Cranium (braincase)
      ctx.beginPath();
      ctx.ellipse(w * 0.5, h * 0.35, w * 0.35, h * 0.32, 0, 0, Math.PI * 2);
      ctx.fill();
      
      // Frontal bone prominence
      ctx.fillStyle = color.light;
      ctx.beginPath();
      ctx.ellipse(w * 0.5, h * 0.22, w * 0.25, h * 0.15, 0, 0, Math.PI);
      ctx.fill();
      
      // Orbital cavities (eye sockets)
      ctx.fillStyle = '#000000';
      ctx.beginPath();
      ctx.ellipse(w * 0.35, h * 0.4, w * 0.08, h * 0.1, -0.2, 0, Math.PI * 2);
      ctx.fill();
      ctx.beginPath();
      ctx.ellipse(w * 0.65, h * 0.4, w * 0.08, h * 0.1, 0.2, 0, Math.PI * 2);
      ctx.fill();
      
      // Supraorbital margins (eyebrow ridges)
      ctx.strokeStyle = color.dark;
      ctx.lineWidth = 3;
      ctx.beginPath();
      ctx.arc(w * 0.35, h * 0.38, w * 0.09, Math.PI * 1.2, Math.PI * 1.8);
      ctx.stroke();
      ctx.beginPath();
      ctx.arc(w * 0.65, h * 0.38, w * 0.09, Math.PI * 1.2, Math.PI * 1.8);
      ctx.stroke();
      
      // Nasal cavity
      ctx.fillStyle = '#000000';
      ctx.beginPath();
      ctx.moveTo(w * 0.5, h * 0.48);
      ctx.lineTo(w * 0.45, h * 0.58);
      ctx.quadraticCurveTo(w * 0.5, h * 0.6, w * 0.55, h * 0.58);
      ctx.closePath();
      ctx.fill();
      
      // Nasal bone
      ctx.strokeStyle = color.dark;
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(w * 0.48, h * 0.45);
      ctx.lineTo(w * 0.48, h * 0.52);
      ctx.stroke();
      ctx.beginPath();
      ctx.moveTo(w * 0.52, h * 0.45);
      ctx.lineTo(w * 0.52, h * 0.52);
      ctx.stroke();
      
      // Zygomatic bones (cheekbones)
      ctx.fillStyle = color.base;
      ctx.beginPath();
      ctx.ellipse(w * 0.3, h * 0.5, w * 0.06, h * 0.08, -0.3, 0, Math.PI * 2);
      ctx.fill();
      ctx.beginPath();
      ctx.ellipse(w * 0.7, h * 0.5, w * 0.06, h * 0.08, 0.3, 0, Math.PI * 2);
      ctx.fill();
      
      // Maxilla (upper jaw with teeth)
      ctx.fillStyle = gradient;
      ctx.beginPath();
      ctx.moveTo(w * 0.35, h * 0.6);
      ctx.lineTo(w * 0.3, h * 0.68);
      ctx.quadraticCurveTo(w * 0.5, h * 0.72, w * 0.7, h * 0.68);
      ctx.lineTo(w * 0.65, h * 0.6);
      ctx.closePath();
      ctx.fill();
      
      // Upper teeth
      ctx.fillStyle = '#FFFFFF';
      for(let i = 0; i < 12; i++) {
        const x = w * (0.35 + i * 0.025);
        const y = h * 0.68;
        ctx.fillRect(x, y, w * 0.02, h * 0.03);
      }
      
      // Mandible (lower jaw)
      ctx.fillStyle = gradient;
      ctx.beginPath();
      ctx.moveTo(w * 0.25, h * 0.72);
      ctx.lineTo(w * 0.22, h * 0.78);
      ctx.quadraticCurveTo(w * 0.3, h * 0.85, w * 0.4, h * 0.88);
      ctx.lineTo(w * 0.6, h * 0.88);
      ctx.quadraticCurveTo(w * 0.7, h * 0.85, w * 0.78, h * 0.78);
      ctx.lineTo(w * 0.75, h * 0.72);
      ctx.quadraticCurveTo(w * 0.5, h * 0.76, w * 0.25, h * 0.72);
      ctx.fill();
      
      // Lower teeth
      ctx.fillStyle = '#FFFFFF';
      for(let i = 0; i < 12; i++) {
        const x = w * (0.35 + i * 0.025);
        const y = h * 0.72;
        ctx.fillRect(x, y, w * 0.02, h * 0.03);
      }
      
      // Mental protuberance (chin)
      ctx.fillStyle = color.light;
      ctx.beginPath();
      ctx.ellipse(w * 0.5, h * 0.88, w * 0.08, h * 0.04, 0, 0, Math.PI);
      ctx.fill();
      
      // Sutures (cranial joints)
      ctx.strokeStyle = 'rgba(0, 0, 0, 0.3)';
      ctx.lineWidth = 1.5;
      ctx.setLineDash([5, 5]);
      
      // Coronal suture
      ctx.beginPath();
      ctx.moveTo(w * 0.15, h * 0.3);
      ctx.quadraticCurveTo(w * 0.5, h * 0.25, w * 0.85, h * 0.3);
      ctx.stroke();
      
      // Sagittal suture
      ctx.beginPath();
      ctx.moveTo(w * 0.5, h * 0.1);
      ctx.lineTo(w * 0.5, h * 0.35);
      ctx.stroke();
      
      ctx.setLineDash([]);
      
    } else if(view === 'lateral') {
      // Side view
      // Cranium profile
      ctx.beginPath();
      ctx.moveTo(w * 0.3, h * 0.4);
      ctx.bezierCurveTo(w * 0.25, h * 0.2, w * 0.4, h * 0.1, w * 0.6, h * 0.15);
      ctx.bezierCurveTo(w * 0.75, h * 0.2, w * 0.8, h * 0.35, w * 0.75, h * 0.5);
      ctx.lineTo(w * 0.7, h * 0.6);
      ctx.lineTo(w * 0.3, h * 0.6);
      ctx.closePath();
      ctx.fill();
      
      // Orbital cavity (side)
      ctx.fillStyle = '#000000';
      ctx.beginPath();
      ctx.ellipse(w * 0.55, h * 0.35, w * 0.08, h * 0.1, 0, 0, Math.PI * 2);
      ctx.fill();
      
      // Temporal bone
      ctx.strokeStyle = color.dark;
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.arc(w * 0.35, h * 0.5, w * 0.06, 0, Math.PI * 2);
      ctx.stroke();
      
      // External acoustic meatus (ear hole)
      ctx.fillStyle = '#000000';
      ctx.beginPath();
      ctx.arc(w * 0.35, h * 0.5, w * 0.025, 0, Math.PI * 2);
      ctx.fill();
      
      // Zygomatic arch (cheekbone)
      ctx.strokeStyle = color.base;
      ctx.lineWidth = 4;
      ctx.beginPath();
      ctx.moveTo(w * 0.55, h * 0.45);
      ctx.lineTo(w * 0.4, h * 0.52);
      ctx.stroke();
      
      // Mandible (jaw) profile
      ctx.fillStyle = gradient;
      ctx.beginPath();
      ctx.moveTo(w * 0.3, h * 0.6);
      ctx.lineTo(w * 0.32, h * 0.75);
      ctx.quadraticCurveTo(w * 0.45, h * 0.82, w * 0.65, h * 0.78);
      ctx.lineTo(w * 0.68, h * 0.65);
      ctx.lineTo(w * 0.7, h * 0.6);
      ctx.closePath();
      ctx.fill();
      
      // Teeth (side view)
      ctx.fillStyle = '#FFFFFF';
      for(let i = 0; i < 8; i++) {
        ctx.fillRect(w * (0.52 + i * 0.02), h * 0.65, w * 0.015, h * 0.03);
        ctx.fillRect(w * (0.52 + i * 0.02), h * 0.7, w * 0.015, h * 0.03);
      }
      
      // Mastoid process
      ctx.fillStyle = color.base;
      ctx.beginPath();
      ctx.ellipse(w * 0.32, h * 0.58, w * 0.03, h * 0.05, 0, 0, Math.PI * 2);
      ctx.fill();
    }
    
    // Outline
    ctx.strokeStyle = color.dark;
    ctx.lineWidth = 3;
    ctx.globalCompositeOperation = 'source-over';
    if(view === 'anterior') {
      ctx.beginPath();
      ctx.ellipse(w * 0.5, h * 0.35, w * 0.35, h * 0.32, 0, 0, Math.PI * 2);
      ctx.stroke();
    }
  }

  static drawRibcage(ctx, color, w, h, view) {
    // Thoracic cage
    
    if(view === 'anterior') {
      // Sternum (breastbone)
      ctx.fillStyle = color.light;
      
      // Manubrium
      ctx.fillRect(w * 0.46, h * 0.15, w * 0.08, h * 0.08);
      
      // Body of sternum
      ctx.fillRect(w * 0.47, h * 0.23, w * 0.06, h * 0.25);
      
      // Xiphoid process
      ctx.beginPath();
      ctx.moveTo(w * 0.47, h * 0.48);
      ctx.lineTo(w * 0.5, h * 0.53);
      ctx.lineTo(w * 0.53, h * 0.48);
      ctx.closePath();
      ctx.fill();
      
      // Ribs (12 pairs)
      ctx.strokeStyle = color.base;
      ctx.lineCap = 'round';
      
      for(let i = 0; i < 12; i++) {
        const y = h * (0.18 + i * 0.03);
        const width = Math.min(0.12 + i * 0.015, 0.22);
        const height = h * 0.04;
        
        // Rib curvature increases with each rib
        ctx.lineWidth = i < 2 ? 4 : i < 7 ? 3.5 : 3;
        
        // Left rib
        ctx.beginPath();
        ctx.moveTo(w * 0.5, y);
        ctx.bezierCurveTo(
          w * (0.5 - width * 0.6), y - height * 0.5,
          w * (0.5 - width * 0.8), y + height * 0.3,
          w * (0.5 - width), y + height * 0.1
        );
        ctx.stroke();
        
        // Right rib
        ctx.beginPath();
        ctx.moveTo(w * 0.5, y);
        ctx.bezierCurveTo(
          w * (0.5 + width * 0.6), y - height * 0.5,
          w * (0.5 + width * 0.8), y + height * 0.3,
          w * (0.5 + width), y + height * 0.1
        );
        ctx.stroke();
        
        // Costal cartilage (lighter color connecting to sternum)
        if(i < 7) {
          ctx.strokeStyle = '#D3D3D3';
          ctx.lineWidth = 3;
          
          // Left costal cartilage
          ctx.beginPath();
          ctx.moveTo(w * (0.5 - width), y + height * 0.1);
          ctx.lineTo(w * 0.47, y + height * 0.05);
          ctx.stroke();
          
          // Right costal cartilage
          ctx.beginPath();
          ctx.moveTo(w * (0.5 + width), y + height * 0.1);
          ctx.lineTo(w * 0.53, y + height * 0.05);
          ctx.stroke();
          
          ctx.strokeStyle = color.base;
        } else if(i >= 7 && i < 10) {
          // False ribs (connect to cartilage above)
          ctx.strokeStyle = '#D3D3D3';
          ctx.lineWidth = 2;
          
          ctx.beginPath();
          ctx.moveTo(w * (0.5 - width), y + height * 0.1);
          ctx.quadraticCurveTo(
            w * (0.5 - width * 0.5), y - height * 0.2,
            w * 0.47, y - height * 0.5
          );
          ctx.stroke();
          
          ctx.beginPath();
          ctx.moveTo(w * (0.5 + width), y + height * 0.1);
          ctx.quadraticCurveTo(
            w * (0.5 + width * 0.5), y - height * 0.2,
            w * 0.53, y - height * 0.5
          );
          ctx.stroke();
          
          ctx.strokeStyle = color.base;
        }
        // Ribs 11-12 are floating ribs (no anterior attachment)
      }
      
      // Thoracic vertebrae (behind ribs)
      ctx.fillStyle = color.dark;
      for(let i = 0; i < 12; i++) {
        ctx.beginPath();
        ctx.arc(w * 0.5, h * (0.18 + i * 0.03), w * 0.015, 0, Math.PI * 2);
        ctx.fill();
      }
      
      // Clavicles (collarbones)
      ctx.strokeStyle = color.base;
      ctx.lineWidth = 5;
      ctx.beginPath();
      ctx.moveTo(w * 0.5, h * 0.15);
      ctx.quadraticCurveTo(w * 0.35, h * 0.13, w * 0.25, h * 0.16);
      ctx.stroke();
      ctx.beginPath();
      ctx.moveTo(w * 0.5, h * 0.15);
      ctx.quadraticCurveTo(w * 0.65, h * 0.13, w * 0.75, h * 0.16);
      ctx.stroke();
      
    } else if(view === 'lateral') {
      // Side view of ribcage
      
      // Sternum (side)
      ctx.fillStyle = color.light;
      ctx.fillRect(w * 0.6, h * 0.2, w * 0.04, h * 0.35);
      
      // Ribs in profile
      ctx.strokeStyle = color.base;
      for(let i = 0; i < 12; i++) {
        const y = h * (0.22 + i * 0.03);
        const depth = Math.min(0.25 + i * 0.02, 0.38);
        
        ctx.lineWidth = i < 2 ? 4 : 3;
        
        // Rib arc (side view)
        ctx.beginPath();
        ctx.arc(w * 0.4, y, w * depth, -Math.PI * 0.3, Math.PI * 0.3);
        ctx.stroke();
      }
      
      // Thoracic vertebrae
      ctx.fillStyle = color.base;
      for(let i = 0; i < 12; i++) {
        ctx.fillRect(w * 0.15, h * (0.2 + i * 0.03), w * 0.05, h * 0.02);
      }
    }
  }

  static drawSpine(ctx, color, w, h, view) {
    if(view === 'lateral') {
      // Side view showing curvatures
      
      // Cervical curve (neck) - lordotic (inward)
      ctx.strokeStyle = color.base;
      ctx.lineWidth = 8;
      ctx.beginPath();
      ctx.moveTo(w * 0.5, h * 0.05);
      ctx.bezierCurveTo(w * 0.55, h * 0.1, w * 0.55, h * 0.15, w * 0.5, h * 0.2);
      ctx.stroke();
      
      // Cervical vertebrae
      ctx.fillStyle = color.light;
      for(let i = 0; i < 7; i++) {
        const y = h * (0.06 + i * 0.02);
        const x = w * (0.5 + Math.sin(i * 0.5) * 0.03);
        
        // Vertebral body
        ctx.fillRect(x - w * 0.02, y, w * 0.04, h * 0.015);
        
        // Spinous process
        ctx.beginPath();
        ctx.moveTo(x, y + h * 0.007);
        ctx.lineTo(x + w * 0.04, y + h * 0.012);
        ctx.lineTo(x, y + h * 0.017);
        ctx.closePath();
        ctx.fill();
      }
      
      // Thoracic curve (upper back) - kyphotic (outward)
      ctx.strokeStyle = color.base;
      ctx.lineWidth = 8;
      ctx.beginPath();
      ctx.moveTo(w * 0.5, h * 0.2);
      ctx.bezierCurveTo(w * 0.45, h * 0.3, w * 0.45, h * 0.45, w * 0.5, h * 0.55);
      ctx.stroke();
      
      // Thoracic vertebrae
      ctx.fillStyle = color.light;
      for(let i = 0; i < 12; i++) {
        const y = h * (0.21 + i * 0.028);
        const x = w * (0.5 - Math.sin(i * 0.4) * 0.03);
        
        ctx.fillRect(x - w * 0.022, y, w * 0.044, h * 0.02);
        
        // Longer spinous processes
        ctx.beginPath();
        ctx.moveTo(x, y + h * 0.01);
        ctx.lineTo(x + w * 0.05, y + h * 0.025);
        ctx.lineTo(x, y + h * 0.022);
        ctx.closePath();
        ctx.fill();
      }
      
      // Lumbar curve (lower back) - lordotic (inward)
      ctx.strokeStyle = color.base;
      ctx.lineWidth = 10;
      ctx.beginPath();
      ctx.moveTo(w * 0.5, h * 0.55);
      ctx.bezierCurveTo(w * 0.55, h * 0.63, w * 0.55, h * 0.68, w * 0.5, h * 0.73);
      ctx.stroke();
      
      // Lumbar vertebrae (larger)
      ctx.fillStyle = color.light;
      for(let i = 0; i < 5; i++) {
        const y = h * (0.56 + i * 0.034);
        const x = w * (0.5 + Math.sin(i * 0.5) * 0.035);
        
        ctx.fillRect(x - w * 0.025, y, w * 0.05, h * 0.025);
        
        // Short, thick spinous processes
        ctx.beginPath();
        ctx.moveTo(x, y + h * 0.0125);
        ctx.lineTo(x + w * 0.045, y + h * 0.02);
        ctx.lineTo(x, y + h * 0.025);
        ctx.closePath();
        ctx.fill();
      }
      
      // Sacral curve - kyphotic (outward)
      ctx.strokeStyle = color.base;
      ctx.lineWidth = 12;
      ctx.beginPath();
      ctx.moveTo(w * 0.5, h * 0.73);
      ctx.bezierCurveTo(w * 0.47, h * 0.78, w * 0.47, h * 0.85, w * 0.5, h * 0.9);
      ctx.stroke();
      
      // Sacrum (fused vertebrae)
      ctx.fillStyle = color.light;
      ctx.beginPath();
      ctx.moveTo(w * 0.48, h * 0.73);
      ctx.quadraticCurveTo(w * 0.44, h * 0.81, w * 0.48, h * 0.88);
      ctx.lineTo(w * 0.52, h * 0.88);
      ctx.quadraticCurveTo(w * 0.56, h * 0.81, w * 0.52, h * 0.73);
      ctx.closePath();
      ctx.fill();
      
      // Coccyx (tailbone)
      ctx.fillStyle = color.base;
      ctx.beginPath();
      ctx.moveTo(w * 0.5, h * 0.88);
      ctx.lineTo(w * 0.48, h * 0.92);
      ctx.lineTo(w * 0.52, h * 0.92);
      ctx.closePath();
      ctx.fill();
      
      // Intervertebral discs
      ctx.fillStyle = '#87CEEB';
      ctx.globalAlpha = 0.6;
      for(let i = 0; i < 23; i++) {
        let y;
        if(i < 6) y = h * (0.08 + i * 0.02);
        else if(i < 18) y = h * (0.23 + (i - 6) * 0.028);
        else y = h * (0.59 + (i - 18) * 0.034);
        
        ctx.fillRect(w * 0.48, y - h * 0.005, w * 0.04, h * 0.008);
      }
      ctx.globalAlpha = 1.0;
      
      // Labels for curves
      ctx.fillStyle = '#000000';
      ctx.font = `${w * 0.025}px Arial`;
      ctx.fillText('Cervical', w * 0.65, h * 0.12);
      ctx.fillText('Thoracic', w * 0.65, h * 0.38);
      ctx.fillText('Lumbar', w * 0.65, h * 0.64);
      ctx.fillText('Sacral', w * 0.65, h * 0.82);
      
    } else if(view === 'anterior') {
      // Front/back view
      
      // Straight line from front
      ctx.strokeStyle = color.base;
      ctx.lineWidth = 10;
      ctx.beginPath();
      ctx.moveTo(w * 0.5, h * 0.05);
      ctx.lineTo(w * 0.5, h * 0.9);
      ctx.stroke();
      
      // All vertebrae
      ctx.fillStyle = color.light;
      
      // Cervical (7)
      for(let i = 0; i < 7; i++) {
        const y = h * (0.06 + i * 0.025);
        ctx.beginPath();
        ctx.ellipse(w * 0.5, y, w * 0.03, h * 0.018, 0, 0, Math.PI * 2);
        ctx.fill();
        ctx.strokeStyle = color.dark;
        ctx.lineWidth = 1;
        ctx.stroke();
      }
      
      // Thoracic (12)
      for(let i = 0; i < 12; i++) {
        const y = h * (0.24 + i * 0.032);
        ctx.beginPath();
        ctx.ellipse(w * 0.5, y, w * 0.035, h * 0.022, 0, 0, Math.PI * 2);
        ctx.fill();
        ctx.strokeStyle = color.dark;
        ctx.lineWidth = 1;
        ctx.stroke();
        
        // Rib attachments
        ctx.fillStyle = color.dark;
        ctx.beginPath();
        ctx.arc(w * 0.47, y, w * 0.008, 0, Math.PI * 2);
        ctx.fill();
        ctx.beginPath();
        ctx.arc(w * 0.53, y, w * 0.008, 0, Math.PI * 2);
        ctx.fill();
        ctx.fillStyle = color.light;
      }
      
      // Lumbar (5) - larger
      for(let i = 0; i < 5; i++) {
        const y = h * (0.63 + i * 0.042);
        ctx.beginPath();
        ctx.ellipse(w * 0.5, y, w * 0.04, h * 0.028, 0, 0, Math.PI * 2);
        ctx.fill();
        ctx.strokeStyle = color.dark;
        ctx.lineWidth = 1;
        ctx.stroke();
      }
      
      // Sacrum
      ctx.fillStyle = color.light;
      ctx.beginPath();
      ctx.moveTo(w * 0.46, h * 0.85);
      ctx.lineTo(w * 0.42, h * 0.92);
      ctx.lineTo(w * 0.58, h * 0.92);
      ctx.lineTo(w * 0.54, h * 0.85);
      ctx.closePath();
      ctx.fill();
      
      // Sacral foramina
      ctx.fillStyle = '#000000';
      for(let i = 0; i < 4; i++) {
        ctx.beginPath();
        ctx.arc(w * 0.46, h * (0.87 + i * 0.015), w * 0.005, 0, Math.PI * 2);
        ctx.fill();
        ctx.beginPath();
        ctx.arc(w * 0.54, h * (0.87 + i * 0.015), w * 0.005, 0, Math.PI * 2);
        ctx.fill();
      }
      
      // Coccyx
      ctx.fillStyle = color.base;
      ctx.beginPath();
      ctx.moveTo(w * 0.48, h * 0.92);
      ctx.lineTo(w * 0.5, h * 0.96);
      ctx.lineTo(w * 0.52, h * 0.92);
      ctx.closePath();
      ctx.fill();
    }
  }

  static drawPelvis(ctx, color, w, h, view) {
    const gradient = ctx.createRadialGradient(w * 0.5, h * 0.5, 0, w * 0.5, h * 0.5, w * 0.4);
    gradient.addColorStop(0, color.light);
    gradient.addColorStop(0.7, color.base);
    gradient.addColorStop(1, color.dark);
    
    if(view === 'anterior') {
      // Front view
      ctx.fillStyle = gradient;
      
      // Iliac crests (hip bones)
      ctx.beginPath();
      ctx.moveTo(w * 0.5, h * 0.2);
      ctx.bezierCurveTo(w * 0.3, h * 0.15, w * 0.15, h * 0.3, w * 0.2, h * 0.5);
      ctx.lineTo(w * 0.3, h * 0.7);
      ctx.lineTo(w * 0.35, h * 0.55);
      ctx.lineTo(w * 0.4, h * 0.35);
      ctx.lineTo(w * 0.5, h * 0.3);
      ctx.closePath();
      ctx.fill();
      
      ctx.beginPath();
      ctx.moveTo(w * 0.5, h * 0.2);
      ctx.bezierCurveTo(w * 0.7, h * 0.15, w * 0.85, h * 0.3, w * 0.8, h * 0.5);
      ctx.lineTo(w * 0.7, h * 0.7);
      ctx.lineTo(w * 0.65, h * 0.55);
      ctx.lineTo(w * 0.6, h * 0.35);
      ctx.lineTo(w * 0.5, h * 0.3);
      ctx.closePath();
      ctx.fill();
      
      // Sacrum (center)
      ctx.fillStyle = color.light;
      ctx.beginPath();
      ctx.moveTo(w * 0.48, h * 0.3);
      ctx.lineTo(w * 0.45, h * 0.55);
      ctx.lineTo(w * 0.48, h * 0.65);
      ctx.lineTo(w * 0.52, h * 0.65);
      ctx.lineTo(w * 0.55, h * 0.55);
      ctx.lineTo(w * 0.52, h * 0.3);
      ctx.closePath();
      ctx.fill();
      
      // Pubic symphysis (joint)
      ctx.strokeStyle = color.dark;
      ctx.lineWidth = 3;
      ctx.beginPath();
      ctx.moveTo(w * 0.48, h * 0.65);
      ctx.lineTo(w * 0.48, h * 0.72);
      ctx.stroke();
      ctx.beginPath();
      ctx.moveTo(w * 0.52, h * 0.65);
      ctx.lineTo(w * 0.52, h * 0.72);
      ctx.stroke();
      
      // Pubic bones
      ctx.fillStyle = gradient;
      ctx.beginPath();
      ctx.moveTo(w * 0.48, h * 0.72);
      ctx.lineTo(w * 0.42, h * 0.8);
      ctx.lineTo(w * 0.38, h * 0.75);
      ctx.lineTo(w * 0.35, h * 0.7);
      ctx.lineTo(w * 0.45, h * 0.65);
      ctx.closePath();
      ctx.fill();
      
      ctx.beginPath();
      ctx.moveTo(w * 0.52, h * 0.72);
      ctx.lineTo(w * 0.58, h * 0.8);
      ctx.lineTo(w * 0.62, h * 0.75);
      ctx.lineTo(w * 0.65, h * 0.7);
      ctx.lineTo(w * 0.55, h * 0.65);
      ctx.closePath();
      ctx.fill();
      
      // Obturator foramen (holes)
      ctx.fillStyle = '#000000';
      ctx.beginPath();
      ctx.ellipse(w * 0.4, h * 0.7, w * 0.04, h * 0.06, -0.3, 0, Math.PI * 2);
      ctx.fill();
      ctx.beginPath();
      ctx.ellipse(w * 0.6, h * 0.7, w * 0.04, h * 0.06, 0.3, 0, Math.PI * 2);
      ctx.fill();
      
      // Acetabulum (hip socket)
      ctx.strokeStyle = color.dark;
      ctx.lineWidth = 4;
      ctx.beginPath();
      ctx.arc(w * 0.35, h * 0.55, w * 0.035, 0, Math.PI * 2);
      ctx.stroke();
      ctx.beginPath();
      ctx.arc(w * 0.65, h * 0.55, w * 0.035, 0, Math.PI * 2);
      ctx.stroke();
      
      // Iliac spines (bony landmarks)
      ctx.fillStyle = color.dark;
      ctx.beginPath();
      ctx.arc(w * 0.25, h * 0.35, w * 0.015, 0, Math.PI * 2);
      ctx.fill();
      ctx.beginPath();
      ctx.arc(w * 0.75, h * 0.35, w * 0.015, 0, Math.PI * 2);
      ctx.fill();
      
    } else if(view === 'lateral') {
      // Side view
      ctx.fillStyle = gradient;
      
      // Ilium (large wing-like portion)
      ctx.beginPath();
      ctx.moveTo(w * 0.4, h * 0.25);
      ctx.bezierCurveTo(w * 0.3, h * 0.2, w * 0.25, h * 0.35, w * 0.3, h * 0.5);
      ctx.lineTo(w * 0.4, h * 0.6);
      ctx.lineTo(w * 0.5, h * 0.55);
      ctx.lineTo(w * 0.55, h * 0.4);
      ctx.lineTo(w * 0.5, h * 0.3);
      ctx.closePath();
      ctx.fill();
      
      // Ischium (sits bone)
      ctx.beginPath();
      ctx.moveTo(w * 0.4, h * 0.6);
      ctx.lineTo(w * 0.35, h * 0.75);
      ctx.lineTo(w * 0.4, h * 0.8);
      ctx.lineTo(w * 0.45, h * 0.75);
      ctx.lineTo(w * 0.45, h * 0.65);
      ctx.closePath();
      ctx.fill();
      
      // Pubis
      ctx.beginPath();
      ctx.moveTo(w * 0.4, h * 0.6);
      ctx.lineTo(w * 0.45, h * 0.65);
      ctx.lineTo(w * 0.52, h * 0.7);
      ctx.lineTo(w * 0.48, h * 0.65);
      ctx.closePath();
      ctx.fill();
      
      // Sacrum (back)
      ctx.fillStyle = color.light;
      ctx.beginPath();
      ctx.moveTo(w * 0.5, h * 0.3);
      ctx.quadraticCurveTo(w * 0.45, h * 0.45, w * 0.5, h * 0.6);
      ctx.lineTo(w * 0.54, h * 0.6);
      ctx.quadraticCurveTo(w * 0.58, h * 0.45, w * 0.54, h * 0.3);
      ctx.closePath();
      ctx.fill();
      
      // Acetabulum (hip socket)
      ctx.strokeStyle = color.dark;
      ctx.lineWidth = 5;
      ctx.beginPath();
      ctx.arc(w * 0.42, h * 0.58, w * 0.045, Math.PI * 0.3, Math.PI * 1.2);
      ctx.stroke();
      
      // Greater sciatic notch
      ctx.beginPath();
      ctx.arc(w * 0.48, h * 0.52, w * 0.06, Math.PI * 0.8, Math.PI * 1.3);
      ctx.stroke();
      
      // Obturator foramen
      ctx.fillStyle = '#000000';
      ctx.beginPath();
      ctx.ellipse(w * 0.43, h * 0.68, w * 0.035, h * 0.05, -0.5, 0, Math.PI * 2);
      ctx.fill();
    }
    
    // Outline
    ctx.strokeStyle = color.dark;
    ctx.lineWidth = 3;
    ctx.globalCompositeOperation = 'source-over';
    ctx.stroke();
  }

  static drawUpperLimb(ctx, color, w, h) {
    // Arm bones: humerus, radius, ulna, carpals, metacarpals, phalanges
    
    // Humerus (upper arm bone)
    const humerusGradient = ctx.createLinearGradient(w * 0.3, h * 0.1, w * 0.3, h * 0.5);
    humerusGradient.addColorStop(0, color.light);
    humerusGradient.addColorStop(0.5, color.base);
    humerusGradient.addColorStop(1, color.dark);
    
    ctx.fillStyle = humerusGradient;
    
    // Proximal end (head)
    ctx.beginPath();
    ctx.arc(w * 0.3, h * 0.12, w * 0.04, 0, Math.PI * 2);
    ctx.fill();
    
    // Shaft
    ctx.fillRect(w * 0.28, h * 0.12, w * 0.04, h * 0.35);
    
    // Deltoid tuberosity
    ctx.fillStyle = color.dark;
    ctx.fillRect(w * 0.27, h * 0.25, w * 0.06, h * 0.03);
    
    // Distal end (condyles)
    ctx.fillStyle = color.light;
    ctx.beginPath();
    ctx.ellipse(w * 0.3, h * 0.47, w * 0.045, h * 0.03, 0, 0, Math.PI * 2);
    ctx.fill();
    
    // Radius (lateral forearm bone)
    const radiusGradient = ctx.createLinearGradient(w * 0.32, h * 0.5, w * 0.34, h * 0.8);
    radiusGradient.addColorStop(0, color.light);
    radiusGradient.addColorStop(1, color.base);
    
    ctx.fillStyle = radiusGradient;
    
    // Proximal end (head)
    ctx.beginPath();
    ctx.arc(w * 0.32, h * 0.5, w * 0.02, 0, Math.PI * 2);
    ctx.fill();
    
    // Shaft (slightly curved)
    ctx.beginPath();
    ctx.moveTo(w * 0.32, h * 0.52);
    ctx.quadraticCurveTo(w * 0.33, h * 0.65, w * 0.34, h * 0.78);
    ctx.lineTo(w * 0.36, h * 0.78);
    ctx.quadraticCurveTo(w * 0.35, h * 0.65, w * 0.34, h * 0.52);
    ctx.closePath();
    ctx.fill();
    
    // Distal end (styloid process)
    ctx.fillStyle = color.light;
    ctx.beginPath();
    ctx.ellipse(w * 0.35, h * 0.8, w * 0.025, h * 0.02, 0, 0, Math.PI * 2);
    ctx.fill();
    
    // Ulna (medial forearm bone)
    ctx.fillStyle = radiusGradient;
    
    // Olecranon (elbow point)
    ctx.fillStyle = color.dark;
    ctx.beginPath();
    ctx.arc(w * 0.28, h * 0.48, w * 0.025, 0, Math.PI * 2);
    ctx.fill();
    
    // Shaft
    ctx.fillStyle = radiusGradient;
    ctx.fillRect(w * 0.26, h * 0.5, w * 0.03, h * 0.28);
    
    // Distal end (head)
    ctx.fillStyle = color.light;
    ctx.beginPath();
    ctx.arc(w * 0.275, h * 0.8, w * 0.02, 0, Math.PI * 2);
    ctx.fill();
    
    // Hand bones
    // Carpals (wrist bones - 8 small bones)
    ctx.fillStyle = color.base;
    const carpalPositions = [
      [0.28, 0.82], [0.31, 0.82], [0.34, 0.82], [0.37, 0.82],
      [0.28, 0.85], [0.31, 0.85], [0.34, 0.85], [0.37, 0.85]
    ];
    
    carpalPositions.forEach(([px, py]) => {
      ctx.fillRect(w * px, h * py, w * 0.022, h * 0.02);
    });
    
    // Metacarpals (palm bones - 5)
    ctx.fillStyle = color.light;
    for(let i = 0; i < 5; i++) {
      const x = w * (0.285 + i * 0.022);
      ctx.fillRect(x, h * 0.87, w * 0.018, h * 0.08);
    }
    
    // Phalanges (finger bones - 14 total)
    for(let finger = 0; finger < 5; finger++) {
      const x = w * (0.285 + finger * 0.022);
      const phalanxCount = finger === 0 ? 2 : 3; // Thumb has 2, others have 3
      
      for(let phalanx = 0; phalanx < phalanxCount; phalanx++) {
        const y = h * (0.95 + phalanx * 0.025);
        const length = phalanx === phalanxCount - 1 ? h * 0.02 : h * 0.025;
        ctx.fillRect(x, y, w * 0.018, length);
      }
    }
    
    // Outlines
    ctx.strokeStyle = color.dark;
    ctx.lineWidth = 2;
    
    // Humerus outline
    ctx.beginPath();
    ctx.arc(w * 0.3, h * 0.12, w * 0.04, 0, Math.PI * 2);
    ctx.stroke();
    ctx.strokeRect(w * 0.28, h * 0.12, w * 0.04, h * 0.35);
    
    // Elbow joint
    ctx.beginPath();
    ctx.arc(w * 0.3, h * 0.49, w * 0.03, 0, Math.PI * 2);
    ctx.stroke();
    
    // Wrist joint
    ctx.beginPath();
    ctx.moveTo(w * 0.26, h * 0.81);
    ctx.lineTo(w * 0.38, h * 0.81);
    ctx.stroke();
  }

  static drawLowerLimb(ctx, color, w, h) {
    // Leg bones: femur, patella, tibia, fibula, tarsals, metatarsals, phalanges
    
    // Femur (thigh bone - longest bone in body)
    const femurGradient = ctx.createLinearGradient(w * 0.4, h * 0.1, w * 0.42, h * 0.55);
    femurGradient.addColorStop(0, color.light);
    femurGradient.addColorStop(0.5, color.base);
    femurGradient.addColorStop(1, color.dark);
    
    ctx.fillStyle = femurGradient;
    
    // Proximal end (head and neck)
    // Head (ball that fits in hip socket)
    ctx.beginPath();
    ctx.arc(w * 0.35, h * 0.12, w * 0.035, 0, Math.PI * 2);
    ctx.fill();
    
    // Neck
    ctx.beginPath();
    ctx.moveTo(w * 0.37, h * 0.14);
    ctx.lineTo(w * 0.39, h * 0.18);
    ctx.lineTo(w * 0.41, h * 0.18);
    ctx.lineTo(w * 0.385, h * 0.14);
    ctx.closePath();
    ctx.fill();
    
    // Greater trochanter
    ctx.fillStyle = color.dark;
    ctx.beginPath();
    ctx.arc(w * 0.42, h * 0.18, w * 0.025, 0, Math.PI * 2);
    ctx.fill();
    
    // Lesser trochanter
    ctx.beginPath();
    ctx.arc(w * 0.39, h * 0.21, w * 0.015, 0, Math.PI * 2);
    ctx.fill();
    
    // Shaft (slightly bowed)
    ctx.fillStyle = femurGradient;
    ctx.beginPath();
    ctx.moveTo(w * 0.4, h * 0.2);
    ctx.quadraticCurveTo(w * 0.405, h * 0.35, w * 0.42, h * 0.5);
    ctx.lineTo(w * 0.46, h * 0.5);
    ctx.quadraticCurveTo(w * 0.445, h * 0.35, w * 0.44, h * 0.2);
    ctx.closePath();
    ctx.fill();
    
    // Distal end (condyles)
    ctx.fillStyle = color.light;
    ctx.beginPath();
    ctx.ellipse(w * 0.41, h * 0.52, w * 0.03, h * 0.025, 0, 0, Math.PI * 2);
    ctx.fill();
    ctx.beginPath();
    ctx.ellipse(w * 0.47, h * 0.52, w * 0.03, h * 0.025, 0, 0, Math.PI * 2);
    ctx.fill();
    
    // Intercondylar notch
    ctx.fillStyle = color.dark;
    ctx.fillRect(w * 0.42, h * 0.51, w * 0.04, h * 0.02);
    
    // Patella (kneecap - sesamoid bone)
    ctx.fillStyle = color.light;
    ctx.beginPath();
    ctx.ellipse(w * 0.44, h * 0.54, w * 0.025, h * 0.035, 0, 0, Math.PI * 2);
    ctx.fill();
    
    ctx.strokeStyle = color.dark;
    ctx.lineWidth = 2;
    ctx.stroke();
    
    // Patellar ligament
    ctx.strokeStyle = '#D3D3D3';
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.moveTo(w * 0.44, h * 0.575);
    ctx.lineTo(w * 0.44, h * 0.6);
    ctx.stroke();
    
    // Tibia (shin bone - medial/larger)
    const tibiaGradient = ctx.createLinearGradient(w * 0.42, h * 0.56, w * 0.44, h * 0.88);
    tibiaGradient.addColorStop(0, color.light);
    tibiaGradient.addColorStop(1, color.base);
    
    ctx.fillStyle = tibiaGradient;
    
    // Proximal end (plateau)
    ctx.fillStyle = color.light;
    ctx.fillRect(w * 0.4, h * 0.56, w * 0.08, h * 0.03);
    
    // Tibial tuberosity (bump below knee)
    ctx.fillStyle = color.dark;
    ctx.beginPath();
    ctx.arc(w * 0.44, h * 0.6, w * 0.02, 0, Math.PI * 2);
    ctx.fill();
    
    // Shaft (triangular in cross-section)
    ctx.fillStyle = tibiaGradient;
    ctx.beginPath();
    ctx.moveTo(w * 0.42, h * 0.59);
    ctx.lineTo(w * 0.43, h * 0.86);
    ctx.lineTo(w * 0.47, h * 0.86);
    ctx.lineTo(w * 0.46, h * 0.59);
    ctx.closePath();
    ctx.fill();
    
    // Medial malleolus (inner ankle)
    ctx.fillStyle = color.light;
    ctx.beginPath();
    ctx.arc(w * 0.43, h * 0.88, w * 0.025, 0, Math.PI * 2);
    ctx.fill();
    
    // Fibula (lateral/smaller leg bone)
    ctx.fillStyle = tibiaGradient;
    
    // Proximal end (head)
    ctx.beginPath();
    ctx.arc(w * 0.48, h * 0.58, w * 0.018, 0, Math.PI * 2);
    ctx.fill();
    
    // Shaft (thin)
    ctx.fillRect(w * 0.475, h * 0.6, w * 0.015, h * 0.26);
    
    // Lateral malleolus (outer ankle)
    ctx.fillStyle = color.light;
    ctx.beginPath();
    ctx.arc(w * 0.485, h * 0.88, w * 0.022, 0, Math.PI * 2);
    ctx.fill();
    
    // Foot bones
    // Tarsals (ankle bones - 7)
    ctx.fillStyle = color.base;
    
    // Calcaneus (heel bone - largest tarsal)
    ctx.fillRect(w * 0.38, h * 0.89, w * 0.06, h * 0.04);
    
    // Talus (sits on calcaneus, articulates with tibia)
    ctx.fillRect(w * 0.42, h * 0.87, w * 0.04, h * 0.03);
    
    // Other tarsals (navicular, cuboid, cuneiforms)
    ctx.fillRect(w * 0.44, h * 0.9, w * 0.025, h * 0.025);
    ctx.fillRect(w * 0.465, h * 0.9, w * 0.025, h * 0.025);
    ctx.fillRect(w * 0.49, h * 0.9, w * 0.025, h * 0.025);
    ctx.fillRect(w * 0.42, h * 0.92, w * 0.025, h * 0.02);
    
    // Metatarsals (foot bones - 5)
    ctx.fillStyle = color.light;
    for(let i = 0; i < 5; i++) {
      const x = w * (0.44 + i * 0.025);
      ctx.fillRect(x, h * 0.925, w * 0.02, h * 0.05);
    }
    
    // Phalanges (toe bones - 14 total)
    for(let toe = 0; toe < 5; toe++) {
      const x = w * (0.44 + toe * 0.025);
      const phalanxCount = toe === 0 ? 2 : 3; // Big toe has 2, others have 3
      
      for(let phalanx = 0; phalanx < phalanxCount; phalanx++) {
        const y = h * (0.975 + phalanx * 0.015);
        const length = phalanx === phalanxCount - 1 ? h * 0.01 : h * 0.015;
        ctx.fillRect(x, y, w * 0.02, length);
      }
    }
    
    // Outlines and details
    ctx.strokeStyle = color.dark;
    ctx.lineWidth = 2;
    
    // Femur outline
    ctx.beginPath();
    ctx.arc(w * 0.35, h * 0.12, w * 0.035, 0, Math.PI * 2);
    ctx.stroke();
    
    // Knee joint
    ctx.beginPath();
    ctx.arc(w * 0.44, h * 0.53, w * 0.04, 0, Math.PI * 2);
    ctx.stroke();
    
    // Ankle joint
    ctx.beginPath();
    ctx.moveTo(w * 0.41, h * 0.87);
    ctx.lineTo(w * 0.5, h * 0.87);
    ctx.stroke();
    
    // Arch of foot
    ctx.strokeStyle = color.base;
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(w * 0.4, h * 0.93);
    ctx.quadraticCurveTo(w * 0.47, h * 0.91, w * 0.56, h * 0.975);
    ctx.stroke();
  }

  // ===== MUSCULAR SYSTEM =====
  // dataRequired: ['type', 'region']
  // typeOptions: ['skeletal', 'cardiac', 'smooth']
  // regionOptions: ['complete', 'head-neck', 'trunk', 'upper-limb', 'lower-limb']
  
  static drawMuscularSystem(ctx, x, y, width, height, type, region = 'complete') {
    ctx.save();
    ctx.translate(x, y);
    
    const color = { base: '#CD5C5C', light: '#F08080', dark: '#8B0000' };
    
    if(type === 'skeletal') {
      switch(region) {
        case 'complete':
          this.drawCompleteMuscularSystem(ctx, color, width, height);
          break;
        case 'head-neck':
          this.drawHeadNeckMuscles(ctx, color, width, height);
          break;
        case 'trunk':
          this.drawTrunkMuscles(ctx, color, width, height);
          break;
        case 'upper-limb':
          this.drawUpperLimbMuscles(ctx, color, width, height);
          break;
        case 'lower-limb':
          this.drawLowerLimbMuscles(ctx, color, width, height);
          break;
      }
    } else if(type === 'cardiac') {
      this.drawCardiacMuscle(ctx, color, width, height);
    } else if(type === 'smooth') {
      this.drawSmoothMuscle(ctx, color, width, height);
    }
    
    ctx.restore();
  }

  static drawCompleteMuscularSystem(ctx, color, w, h) {
    // Full body muscular system (anterior view)
    
    // Head/neck muscles
    // Sternocleidomastoid
    ctx.fillStyle = color.base;
    ctx.beginPath();
    ctx.moveTo(w * 0.48, h * 0.15);
    ctx.lineTo(w * 0.45, h * 0.22);
    ctx.lineTo(w * 0.47, h * 0.22);
    ctx.closePath();
    ctx.fill();
    ctx.beginPath();
    ctx.moveTo(w * 0.52, h * 0.15);
    ctx.lineTo(w * 0.55, h * 0.22);
    ctx.lineTo(w * 0.53, h * 0.22);
    ctx.closePath();
    ctx.fill();
    
    // Chest muscles
    // Pectoralis major
    const pectoralisGradient = ctx.createRadialGradient(w * 0.4, h * 0.28, 0, w * 0.4, h * 0.28, w * 0.12);
    pectoralisGradient.addColorStop(0, color.light);
    pectoralisGradient.addColorStop(1, color.dark);
    
    ctx.fillStyle = pectoralisGradient;
    ctx.beginPath();
    ctx.moveTo(w * 0.5, h * 0.24);
    ctx.bezierCurveTo(w * 0.42, h * 0.24, w * 0.35, h * 0.28, w * 0.32, h * 0.33);
    ctx.lineTo(w * 0.35, h * 0.36);
    ctx.bezierCurveTo(w * 0.4, h * 0.34, w * 0.45, h * 0.32, w * 0.5, h * 0.32);
    ctx.closePath();
    ctx.fill();
    
    ctx.beginPath();
    ctx.moveTo(w * 0.5, h * 0.24);
    ctx.bezierCurveTo(w * 0.58, h * 0.24, w * 0.65, h * 0.28, w * 0.68, h * 0.33);
    ctx.lineTo(w * 0.65, h * 0.36);
    ctx.bezierCurveTo(w * 0.6, h * 0.34, w * 0.55, h * 0.32, w * 0.5, h * 0.32);
    ctx.closePath();
    ctx.fill();
    
    // Rectus abdominis (six-pack)
    ctx.fillStyle = color.base;
    for(let row = 0; row < 3; row++) {
      for(let col = 0; col < 2; col++) {
        const x = w * (0.45 + col * 0.1);
        const y = h * (0.38 + row * 0.08);
        ctx.fillRect(x, y, w * 0.045, h * 0.06);
      }
    }
    
    // Obliques
    ctx.fillStyle = color.dark;
    ctx.beginPath();
    ctx.moveTo(w * 0.4, h * 0.38);
    ctx.lineTo(w * 0.35, h * 0.5);
    ctx.lineTo(w * 0.38, h * 0.52);
    ctx.lineTo(w * 0.43, h * 0.4);
    ctx.closePath();
    ctx.fill();
    
    ctx.beginPath();
    ctx.moveTo(w * 0.6, h * 0.38);
    ctx.lineTo(w * 0.65, h * 0.5);
    ctx.lineTo(w * 0.62, h * 0.52);
    ctx.lineTo(w * 0.57, h * 0.4);
    ctx.closePath();
    ctx.fill();
    
    // Arm muscles
    // Deltoid (shoulder)
    ctx.fillStyle = color.light;
    ctx.beginPath();
    ctx.arc(w * 0.3, h * 0.26, w * 0.04, 0, Math.PI * 2);
    ctx.fill();
    ctx.beginPath();
    ctx.arc(w * 0.7, h * 0.26, w * 0.04, 0, Math.PI * 2);
    ctx.fill();
    
    // Biceps
    ctx.fillStyle = color.base;
    ctx.beginPath();
    ctx.ellipse(w * 0.3, h * 0.36, w * 0.03, h * 0.08, 0, 0, Math.PI * 2);
    ctx.fill();
    ctx.beginPath();
    ctx.ellipse(w * 0.7, h * 0.36, w * 0.03, h * 0.08, 0, 0, Math.PI * 2);
    ctx.fill();
    
    // Forearm muscles
    ctx.fillStyle = color.dark;
    ctx.fillRect(w * 0.28, h * 0.45, w * 0.025, h * 0.15);
    ctx.fillRect(w * 0.695, h * 0.45, w * 0.025, h * 0.15);
    
    // Leg muscles
    // Quadriceps
    ctx.fillStyle = color.base;
    
    // Rectus femoris
    ctx.fillRect(w * 0.42, h * 0.58, w * 0.03, h * 0.22);
    ctx.fillRect(w * 0.55, h * 0.58, w * 0.03, h * 0.22);
    
    // Vastus lateralis
    ctx.fillRect(w * 0.39, h * 0.6, w * 0.025, h * 0.2);
    ctx.fillRect(w * 0.585, h * 0.6, w * 0.025, h * 0.2);
    
    // Vastus medialis
    ctx.fillRect(w * 0.45, h * 0.65, w * 0.025, h * 0.15);
    ctx.fillRect(w * 0.525, h * 0.65, w * 0.025, h * 0.15);
    
    // Tibialis anterior (shin)
    ctx.fillStyle = color.dark;
    ctx.fillRect(w * 0.43, h * 0.82, w * 0.02, h * 0.15);
    ctx.fillRect(w * 0.555, h * 0.82, w * 0.02, h * 0.15);
    
    // Gastrocnemius (calf)
    ctx.fillStyle = color.light;
    ctx.beginPath();
    ctx.ellipse(w * 0.44, h * 0.88, w * 0.025, h * 0.06, 0, 0, Math.PI * 2);
    ctx.fill();
    ctx.beginPath();
    ctx.ellipse(w * 0.56, h * 0.88, w * 0.025, h * 0.06, 0, 0, Math.PI * 2);
    ctx.fill();
    
    // Muscle fiber striations (detail)
    ctx.strokeStyle = 'rgba(0, 0, 0, 0.2)';
    ctx.lineWidth = 1;
    for(let i = 0; i < 6; i++) {
      ctx.beginPath();
      ctx.moveTo(w * 0.45, h * (0.4 + i * 0.02));
      ctx.lineTo(w * 0.55, h * (0.4 + i * 0.02));
      ctx.stroke();
    }
  }

  static drawHeadNeckMuscles(ctx, color, w, h) {
    // Facial and neck muscles
    
    // Frontalis (forehead)
    ctx.fillStyle = color.light;
    ctx.fillRect(w * 0.35, h * 0.15, w * 0.3, h * 0.08);
    
    // Orbicularis oculi (around eyes)
    ctx.strokeStyle = color.base;
    ctx.lineWidth = 4;
    ctx.beginPath();
    ctx.arc(w * 0.4, h * 0.28, w * 0.05, 0, Math.PI * 2);
    ctx.stroke();
    ctx.beginPath();
    ctx.arc(w * 0.6, h * 0.28, w * 0.05, 0, Math.PI * 2);
    ctx.stroke();
    
    // Orbicularis oris (around mouth)
    ctx.beginPath();
    ctx.ellipse(w * 0.5, h * 0.45, w * 0.06, h * 0.04, 0, 0, Math.PI * 2);
    ctx.stroke();
    
    // Masseter (jaw muscle)
    ctx.fillStyle = color.base;
    ctx.fillRect(w * 0.35, h * 0.42, w * 0.08, h * 0.12);
    ctx.fillRect(w * 0.57, h * 0.42, w * 0.08, h * 0.12);
    
    // Sternocleidomastoid
    const gradient = ctx.createLinearGradient(w * 0.4, h * 0.55, w * 0.4, h * 0.75);
    gradient.addColorStop(0, color.light);
    gradient.addColorStop(1, color.dark);
    
    ctx.fillStyle = gradient;
    ctx.beginPath();
    ctx.moveTo(w * 0.48, h * 0.55);
    ctx.lineTo(w * 0.42, h * 0.75);
    ctx.lineTo(w * 0.45, h * 0.76);
    ctx.lineTo(w * 0.5, h * 0.57);
    ctx.closePath();
    ctx.fill();
    
    ctx.beginPath();
    ctx.moveTo(w * 0.52, h * 0.55);
    ctx.lineTo(w * 0.58, h * 0.75);
    ctx.lineTo(w * 0.55, h * 0.76);
    ctx.lineTo(w * 0.5, h * 0.57);
    ctx.closePath();
    ctx.fill();
    
    // Trapezius (upper back/neck)
    ctx.fillStyle = color.base;
    ctx.beginPath();
    ctx.moveTo(w * 0.5, h * 0.58);
    ctx.lineTo(w * 0.3, h * 0.7);
    ctx.lineTo(w * 0.35, h * 0.75);
    ctx.lineTo(w * 0.5, h * 0.65);
    ctx.closePath();
    ctx.fill();
    
    ctx.beginPath();
    ctx.moveTo(w * 0.5, h * 0.58);
    ctx.lineTo(w * 0.7, h * 0.7);
    ctx.lineTo(w * 0.65, h * 0.75);
    ctx.lineTo(w * 0.5, h * 0.65);
    ctx.closePath();
    ctx.fill();
  }

  static drawTrunkMuscles(ctx, color, w, h) {
    // Torso muscles
    
    // Pectoralis major
    const pectoralisGradient = ctx.createRadialGradient(w * 0.35, h * 0.25, 0, w * 0.35, h * 0.25, w * 0.15);
    pectoralisGradient.addColorStop(0, color.light);
    pectoralisGradient.addColorStop(1, color.dark);
    
    ctx.fillStyle = pectoralisGradient;
    ctx.beginPath();
    ctx.moveTo(w * 0.5, h * 0.18);
    ctx.bezierCurveTo(w * 0.4, h * 0.18, w * 0.25, h * 0.25, w * 0.22, h * 0.35);
    ctx.lineTo(w * 0.28, h * 0.38);
    ctx.bezierCurveTo(w * 0.35, h * 0.32, w * 0.42, h * 0.28, w * 0.5, h * 0.26);
    ctx.closePath();
    ctx.fill();
    
    ctx.beginPath();
    ctx.moveTo(w * 0.5, h * 0.18);
    ctx.bezierCurveTo(w * 0.6, h * 0.18, w * 0.75, h * 0.25, w * 0.78, h * 0.35);
    ctx.lineTo(w * 0.72, h * 0.38);
    ctx.bezierCurveTo(w * 0.65, h * 0.32, w * 0.58, h * 0.28, w * 0.5, h * 0.26);
    ctx.closePath();
    ctx.fill();
    
    // Serratus anterior (ribs)
    ctx.fillStyle = color.dark;
    for(let i = 0; i < 6; i++) {
      ctx.fillRect(w * 0.25, h * (0.3 + i * 0.04), w * 0.08, h * 0.025);
      ctx.fillRect(w * 0.67, h * (0.3 + i * 0.04), w * 0.08, h * 0.025);
    }
    
    // Rectus abdominis (six-pack abs)
    ctx.fillStyle = color.base;
    ctx.strokeStyle = color.dark;
    ctx.lineWidth = 2;
    
    for(let row = 0; row < 4; row++) {
      for(let col = 0; col < 2; col++) {
        const x = w * (0.42 + col * 0.16);
        const y = h * (0.4 + row * 0.09);
        
        ctx.fillRect(x, y, w * 0.08, h * 0.07);
        ctx.strokeRect(x, y, w * 0.08, h * 0.07);
      }
    }
    
    // Linea alba (center line)
    ctx.strokeStyle = color.dark;
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.moveTo(w * 0.5, h * 0.4);
    ctx.lineTo(w * 0.5, h * 0.76);
    ctx.stroke();
    
    // External obliques
    const obliqueGradient = ctx.createLinearGradient(w * 0.35, h * 0.4, w * 0.3, h * 0.7);
    obliqueGradient.addColorStop(0, color.light);
    obliqueGradient.addColorStop(1, color.dark);
    
    ctx.fillStyle = obliqueGradient;
    ctx.beginPath();
    ctx.moveTo(w * 0.33, h * 0.4);
    ctx.lineTo(w * 0.28, h * 0.65);
    ctx.lineTo(w * 0.32, h * 0.68);
    ctx.lineTo(w * 0.37, h * 0.43);
    ctx.closePath();
    ctx.fill();
    
    ctx.beginPath();
    ctx.moveTo(w * 0.67, h * 0.4);
    ctx.lineTo(w * 0.72, h * 0.65);
    ctx.lineTo(w * 0.68, h * 0.68);
    ctx.lineTo(w * 0.63, h * 0.43);
    ctx.closePath();
    ctx.fill();
  }

  static drawUpperLimbMuscles(ctx, color, w, h) {
    // Arm and forearm muscles
    
    // Deltoid (shoulder cap)
    const deltoidGradient = ctx.createRadialGradient(w * 0.3, h * 0.2, 0, w * 0.3, h * 0.2, w * 0.08);
    deltoidGradient.addColorStop(0, color.light);
    deltoidGradient.addColorStop(1, color.dark);
    
    ctx.fillStyle = deltoidGradient;
    ctx.beginPath();
    ctx.arc(w * 0.3, h * 0.2, w * 0.07, 0, Math.PI * 2);
    ctx.fill();
    
    // Biceps brachii (two heads)
    ctx.fillStyle = color.base;
    
    // Long head
    ctx.beginPath();
    ctx.ellipse(w * 0.28, h * 0.35, w * 0.035, h * 0.12, -0.2, 0, Math.PI * 2);
    ctx.fill();
    
    // Short head
    ctx.beginPath();
    ctx.ellipse(w * 0.32, h * 0.35, w * 0.035, h * 0.12, 0.2, 0, Math.PI * 2);
    ctx.fill();
    
    // Brachialis (under biceps)
    ctx.fillStyle = color.dark;
    ctx.fillRect(w * 0.285, h * 0.42, w * 0.03, h * 0.08);
    
    // Triceps brachii (back of arm - three heads)
    ctx.fillStyle = color.base;
    
    // Long head
    ctx.fillRect(w * 0.65, h * 0.25, w * 0.04, h * 0.22);
    
    // Lateral head
    ctx.fillRect(w * 0.7, h * 0.28, w * 0.035, h * 0.18);
    
    // Medial head
    ctx.fillStyle = color.light;
    ctx.fillRect(w * 0.66, h * 0.35, w * 0.03, h * 0.12);
    
    // Brachioradialis (forearm)
    ctx.fillStyle = color.base;
    ctx.beginPath();
    ctx.moveTo(w * 0.29, h * 0.48);
    ctx.lineTo(w * 0.25, h * 0.68);
    ctx.lineTo(w * 0.28, h * 0.69);
    ctx.lineTo(w * 0.32, h * 0.49);
    ctx.closePath();
    ctx.fill();
    
    // Flexor carpi radialis
    ctx.fillRect(w * 0.26, h * 0.52, w * 0.025, h * 0.18);
    
    // Extensor carpi radialis
    ctx.fillStyle = color.dark;
    ctx.fillRect(w * 0.68, h * 0.5, w * 0.025, h * 0.18);
    
    // Extensor digitorum
    ctx.fillRect(w * 0.71, h * 0.52, w * 0.025, h * 0.16);
    
    // Muscle striations (detail)
    ctx.strokeStyle = 'rgba(0, 0, 0, 0.3)';
    ctx.lineWidth = 1;
    for(let i = 0; i < 8; i++) {
      ctx.beginPath();
      ctx.moveTo(w * 0.26, h * (0.3 + i * 0.02));
      ctx.lineTo(w * 0.34, h * (0.3 + i * 0.02));
      ctx.stroke();
    }
  }

  static drawLowerLimbMuscles(ctx, color, w, h) {
    // Thigh and leg muscles
    
    // Quadriceps femoris (four muscles)
    const quadGradient = ctx.createLinearGradient(w * 0.4, h * 0.2, w * 0.4, h * 0.5);
    quadGradient.addColorStop(0, color.light);
    quadGradient.addColorStop(0.5, color.base);
    quadGradient.addColorStop(1, color.dark);
    
    ctx.fillStyle = quadGradient;
    
    // Rectus femoris (center)
    ctx.fillRect(w * 0.42, h * 0.25, w * 0.04, h * 0.28);
    
    // Vastus lateralis (outer)
    ctx.fillRect(w * 0.38, h * 0.28, w * 0.035, h * 0.25);
    
    // Vastus medialis (inner, teardrop shape)
    ctx.beginPath();
    ctx.ellipse(w * 0.465, h * 0.45, w * 0.03, h * 0.08, 0, 0, Math.PI * 2);
    ctx.fill();
    
    // Vastus intermedius (deep, barely visible)
    ctx.fillStyle = color.dark;
    ctx.globalAlpha = 0.5;
    ctx.fillRect(w * 0.41, h * 0.32, w * 0.05, h * 0.15);
    ctx.globalAlpha = 1.0;
    
    // Hamstrings (back of thigh)
    ctx.fillStyle = color.base;
    
    // Biceps femoris
    ctx.fillRect(w * 0.65, h * 0.28, w * 0.04, h * 0.24);
    
    // Semitendinosus
    ctx.fillRect(w * 0.7, h * 0.3, w * 0.035, h * 0.22);
    
    // Semimembranosus
    ctx.fillStyle = color.light;
    ctx.fillRect(w * 0.68, h * 0.32, w * 0.03, h * 0.18);
    
    // Adductors (inner thigh)
    ctx.fillStyle = color.dark;
    ctx.beginPath();
    ctx.moveTo(w * 0.47, h * 0.3);
    ctx.lineTo(w * 0.5, h * 0.48);
    ctx.lineTo(w * 0.48, h * 0.5);
    ctx.lineTo(w * 0.46, h * 0.32);
    ctx.closePath();
    ctx.fill();
    
    // Sartorius (longest muscle, diagonal)
    ctx.strokeStyle = color.base;
    ctx.lineWidth = 6;
    ctx.beginPath();
    ctx.moveTo(w * 0.47, h * 0.26);
    ctx.bezierCurveTo(w * 0.45, h * 0.35, w * 0.44, h * 0.45, w * 0.465, h * 0.53);
    ctx.stroke();
    
    // Gastrocnemius (calf, two heads)
    const calfGradient = ctx.createRadialGradient(w * 0.43, h * 0.65, 0, w * 0.43, h * 0.65, w * 0.06);
    calfGradient.addColorStop(0, color.light);
    calfGradient.addColorStop(1, color.dark);
    
    ctx.fillStyle = calfGradient;
    
    // Medial head
    ctx.beginPath();
    ctx.ellipse(w * 0.42, h * 0.65, w * 0.03, h * 0.08, 0, 0, Math.PI * 2);
    ctx.fill();
    
    // Lateral head
    ctx.beginPath();
    ctx.ellipse(w * 0.45, h * 0.66, w * 0.028, h * 0.075, 0, 0, Math.PI * 2);
    ctx.fill();
    
    // Soleus (deep to gastrocnemius)
    ctx.fillStyle = color.base;
    ctx.globalAlpha = 0.6;
    ctx.fillRect(w * 0.41, h * 0.68, w * 0.05, h * 0.1);
    ctx.globalAlpha = 1.0;
    
    // Tibialis anterior (shin)
    ctx.fillStyle = color.dark;
    ctx.fillRect(w * 0.44, h * 0.56, w * 0.025, h * 0.22);
    
    // Peroneus longus (lateral leg)
    ctx.fillRect(w * 0.47, h * 0.58, w * 0.02, h * 0.18);
    
    // Achilles tendon
    ctx.fillStyle = '#D3D3D3';
    ctx.fillRect(w * 0.425, h * 0.78, w * 0.03, h * 0.08);
    
    // Muscle fiber striations
    ctx.strokeStyle = 'rgba(0, 0, 0, 0.2)';
    ctx.lineWidth = 1;
    for(let i = 0; i < 15; i++) {
      ctx.beginPath();
      ctx.moveTo(w * 0.39, h * (0.3 + i * 0.015));
      ctx.lineTo(w * 0.47, h * (0.3 + i * 0.015));
      ctx.stroke();
    }
  }

  static drawCardiacMuscle(ctx, color, w, h) {
    // Cardiac muscle structure (microscopic view)
    
    // Background
    ctx.fillStyle = '#FFE4E1';
    ctx.fillRect(0, 0, w, h);
    
    // Cardiac muscle cells (cardiomyocytes)
    ctx.fillStyle = color.light;
    ctx.strokeStyle = color.dark;
    ctx.lineWidth = 2;
    
    // Branching pattern
    const cells = [
      { x: 0.2, y: 0.3, width: 0.15, height: 0.08, angle: 0 },
      { x: 0.35, y: 0.32, width: 0.12, height: 0.08, angle: 0.1 },
      { x: 0.45, y: 0.35, width: 0.14, height: 0.08, angle: -0.1 },
      { x: 0.25, y: 0.45, width: 0.13, height: 0.08, angle: 0.2 },
      { x: 0.4, y: 0.48, width: 0.16, height: 0.08, angle: -0.05 },
      { x: 0.55, y: 0.5, width: 0.12, height: 0.08, angle: 0.15 },
      { x: 0.3, y: 0.6, width: 0.14, height: 0.08, angle: 0 },
      { x: 0.5, y: 0.63, width: 0.15, height: 0.08, angle: -0.1 }
    ];
    
    cells.forEach(cell => {
      ctx.save();
      ctx.translate(w * cell.x, h * cell.y);
      ctx.rotate(cell.angle);
      
      // Cell body
      ctx.fillRect(0, 0, w * cell.width, h * cell.height);
      ctx.strokeRect(0, 0, w * cell.width, h * cell.height);
      
      // Nucleus (centrally located)
      ctx.fillStyle = '#8B7355';
      ctx.beginPath();
      ctx.ellipse(w * cell.width * 0.5, h * cell.height * 0.5, w * 0.02, h * 0.025, 0, 0, Math.PI * 2);
      ctx.fill();
      
      // Striations (less organized than skeletal)
      ctx.strokeStyle = 'rgba(0, 0, 0, 0.3)';
      ctx.lineWidth = 1;
      for(let i = 0; i < 8; i++) {
        ctx.beginPath();
        ctx.moveTo(w * cell.width * 0.1, h * cell.height * (0.15 + i * 0.1));
        ctx.lineTo(w * cell.width * 0.9, h * cell.height * (0.15 + i * 0.1));
        ctx.stroke();
      }
      
      // Intercalated discs (specialized junctions)
      ctx.strokeStyle = color.dark;
      ctx.lineWidth = 3;
      ctx.setLineDash([2, 2]);
      ctx.beginPath();
      ctx.moveTo(w * cell.width, h * cell.height * 0.2);
      ctx.lineTo(w * cell.width, h * cell.height * 0.8);
      ctx.stroke();
      ctx.setLineDash([]);
      
      ctx.restore();
    });
    
    // Mitochondria (abundant in cardiac muscle)
    ctx.fillStyle = '#CD5C5C';
    for(let i = 0; i < 30; i++) {
      const x = w * (0.2 + Math.random() * 0.5);
      const y = h * (0.3 + Math.random() * 0.4);
      ctx.beginPath();
      ctx.ellipse(x, y, w * 0.008, h * 0.006, Math.random() * Math.PI, 0, Math.PI * 2);
      ctx.fill();
    }
    
    // Labels
    ctx.fillStyle = '#000000';
    ctx.font = `${w * 0.025}px Arial`;
    ctx.fillText('Cardiac Muscle Cells', w * 0.05, h * 0.1);
    ctx.fillText('(Branched & Striated)', w * 0.05, h * 0.15);
    ctx.fillText('Intercalated Disc', w * 0.7, h * 0.3);
    ctx.fillText('Nucleus', w * 0.7, h * 0.5);
  }

  static drawSmoothMuscle(ctx, color, w, h) {
    // Smooth muscle structure (microscopic view)
    
    // Background
    ctx.fillStyle = '#FFF5EE';
    ctx.fillRect(0, 0, w, h);
    
    // Smooth muscle cells (spindle-shaped)
    ctx.fillStyle = color.light;
    ctx.strokeStyle = color.dark;
    ctx.lineWidth = 2;
    
    // Layered arrangement
    for(let layer = 0; layer < 3; layer++) {
      const yOffset = h * (0.2 + layer * 0.25);
      const angle = layer % 2 === 0 ? 0 : Math.PI / 2;
      
      for(let i = 0; i < 8; i++) {
        const xOffset = w * (0.1 + i * 0.11);
        
        ctx.save();
        ctx.translate(xOffset, yOffset);
        ctx.rotate(angle);
        
        // Spindle-shaped cell
        ctx.beginPath();
        ctx.moveTo(0, h * 0.04);
        ctx.bezierCurveTo(w * 0.02, h * 0.02, w * 0.06, h * 0.02, w * 0.08, h * 0.04);
        ctx.bezierCurveTo(w * 0.06, h * 0.06, w * 0.02, h * 0.06, 0, h * 0.04);
        ctx.closePath();
        ctx.fill();
        ctx.stroke();
        
        // Single central nucleus
        ctx.fillStyle = '#8B7355';
        ctx.beginPath();
        ctx.ellipse(w * 0.04, h * 0.04, w * 0.012, h * 0.015, 0, 0, Math.PI * 2);
        ctx.fill();
        
        // Dense bodies (attachment points)
        ctx.fillStyle = '#000000';
        for(let j = 0; j < 4; j++) {
          ctx.beginPath();
          ctx.arc(w * (0.015 + j * 0.022), h * 0.04, w * 0.003, 0, Math.PI * 2);
          ctx.fill();
        }
        
        ctx.restore();
      }
    }
    
    // Gap junctions (for coordinated contraction)
    ctx.strokeStyle = '#FFD700';
    ctx.lineWidth = 2;
    for(let i = 0; i < 15; i++) {
      const x1 = w * (0.15 + Math.random() * 0.7);
      const y1 = h * (0.25 + Math.random() * 0.5);
      const x2 = x1 + w * 0.05;
      const y2 = y1;
      
      ctx.beginPath();
      ctx.moveTo(x1, y1);
      ctx.lineTo(x2, y2);
      ctx.stroke();
    }
    
    // Labels
    ctx.fillStyle = '#000000';
    ctx.font = `${w * 0.025}px Arial`;
    ctx.fillText('Smooth Muscle Cells', w * 0.05, h * 0.1);
    ctx.fillText('(Spindle-shaped, Non-striated)', w * 0.05, h * 0.15);
    ctx.fillText('Central Nucleus', w * 0.7, h * 0.3);
    ctx.fillText('Dense Bodies', w * 0.7, h * 0.5);
    ctx.fillText('Gap Junctions', w * 0.7, h * 0.7);
  }

  // ===== EYE ANATOMY =====
  // dataRequired: ['component', 'process']
  // componentOptions: ['complete', 'cornea', 'lens', 'retina', 'optic-nerve', 'iris', 'ciliary-body']
  
  static drawEyeAnatomy(ctx, x, y, width, height, component, process = 'structure') {
    ctx.save();
    ctx.translate(x, y);
    
    const color = { base: '#F5F5DC', light: '#FFFAF0', dark: '#D2B48C' };
    
    switch(component) {
      case 'complete':
        this.drawCompleteEye(ctx, color, width, height, process);
        break;
      case 'cornea':
        this.drawCornea(ctx, color, width, height);
        break;
      case 'lens':
        this.drawLens(ctx, color, width, height);
        break;
      case 'retina':
        this.drawRetina(ctx, color, width, height);
        break;
      case 'optic-nerve':
        this.drawOpticNerve(ctx, color, width, height);
        break;
      case 'iris':
        this.drawIris(ctx, color, width, height);
        break;
      case 'ciliary-body':
        this.drawCiliaryBody(ctx, color, width, height);
        break;
    }
    
    ctx.restore();
  }

  static drawCompleteEye(ctx, color, w, h, process) {
    // Cross-section of complete eye
    
    // Sclera (white outer layer)
    const scleraGradient = ctx.createRadialGradient(w * 0.5, h * 0.5, 0, w * 0.5, h * 0.5, w * 0.45);
    scleraGradient.addColorStop(0, '#FFFFFF');
    scleraGradient.addColorStop(1, '#F0F0F0');
    
    ctx.fillStyle = scleraGradient;
    ctx.beginPath();
    ctx.arc(w * 0.5, h * 0.5, w * 0.4, 0, Math.PI * 2);
    ctx.fill();
    
    // Choroid (vascular layer)
    ctx.fillStyle = '#8B4513';
    ctx.beginPath();
    ctx.arc(w * 0.5, h * 0.5, w * 0.38, 0, Math.PI * 2);
    ctx.fill();
    
    // Retina (inner neural layer)
    ctx.fillStyle = '#FFE4B5';
    ctx.beginPath();
    ctx.arc(w * 0.5, h * 0.5, w * 0.36, 0, Math.PI * 2);
    ctx.fill();
    
    // Vitreous humor (gel filling)
    ctx.fillStyle = 'rgba(173, 216, 230, 0.3)';
    ctx.beginPath();
    ctx.arc(w * 0.5, h * 0.5, w * 0.35, 0, Math.PI * 2);
    ctx.fill();
    
    // Cornea (transparent front)
    const corneaGradient = ctx.createRadialGradient(w * 0.2, h * 0.5, 0, w * 0.2, h * 0.5, w * 0.15);
    corneaGradient.addColorStop(0, 'rgba(200, 230, 255, 0.5)');
    corneaGradient.addColorStop(1, 'rgba(150, 200, 230, 0.3)');
    
    ctx.fillStyle = corneaGradient;
    ctx.beginPath();
    ctx.arc(w * 0.2, h * 0.5, w * 0.12, -Math.PI / 2, Math.PI / 2);
    ctx.lineTo(w * 0.2, h * 0.62);
    ctx.arc(w * 0.5, h * 0.5, w * 0.4, Math.PI * 0.7, Math.PI * 1.3);
    ctx.closePath();
    ctx.fill();
    
    // Anterior chamber (aqueous humor)
    ctx.fillStyle = 'rgba(173, 216, 230, 0.4)';
    ctx.beginPath();
    ctx.arc(w * 0.2, h * 0.5, w * 0.1, -Math.PI / 2, Math.PI / 2);
    ctx.lineTo(w * 0.28, h * 0.62);
    ctx.lineTo(w * 0.28, h * 0.38);
    ctx.closePath();
    ctx.fill();
    
    // Iris (colored part)
    const irisColor = '#4682B4'; // Blue iris
    ctx.fillStyle = irisColor;
    ctx.beginPath();
    ctx.arc(w * 0.3, h * 0.5, w * 0.08, 0, Math.PI * 2);
    ctx.fill();
    
    // Iris detail (radial lines)
    ctx.strokeStyle = 'rgba(0, 0, 0, 0.3)';
    ctx.lineWidth = 1;
    for(let i = 0; i < 24; i++) {
      const angle = (Math.PI * 2 / 24) * i;
      ctx.beginPath();
      ctx.moveTo(
        w * 0.3 + Math.cos(angle) * w * 0.03,
        h * 0.5 + Math.sin(angle) * h * 0.03
      );
      ctx.lineTo(
        w * 0.3 + Math.cos(angle) * w * 0.08,
        h * 0.5 + Math.sin(angle) * h * 0.08
      );
      ctx.stroke();
    }
    
    // Pupil (opening)
    ctx.fillStyle = '#000000';
    ctx.beginPath();
    ctx.arc(w * 0.3, h * 0.5, w * 0.03, 0, Math.PI * 2);
    ctx.fill();
    
    // Lens (crystalline lens)
    ctx.fillStyle = 'rgba(255, 255, 200, 0.7)';
    ctx.beginPath();
    ctx.ellipse(w * 0.35, h * 0.5, w * 0.05, h * 0.08, 0, 0, Math.PI * 2);
    ctx.fill();
    
    ctx.strokeStyle = 'rgba(200, 200, 150, 0.8)';
    ctx.lineWidth = 2;
    ctx.stroke();
    
    // Ciliary body and suspensory ligaments
    ctx.strokeStyle = '#D2B48C';
    ctx.lineWidth = 1;
    for(let i = 0; i < 12; i++) {
      const angle = (Math.PI / 12) * i - Math.PI / 2;
      ctx.beginPath();
      ctx.moveTo(
        w * 0.35 + Math.cos(angle) * w * 0.05,
        h * 0.5 + Math.sin(angle) * h * 0.08
      );
      ctx.lineTo(
        w * 0.35 + Math.cos(angle) * w * 0.12,
        h * 0.5 + Math.sin(angle) * h * 0.15
      );
      ctx.stroke();
    }
    
    // Ciliary body
    ctx.fillStyle = '#BC8F8F';
    ctx.beginPath();
    ctx.arc(w * 0.32, h * 0.5, w * 0.1, Math.PI * 0.7, Math.PI * 1.3);
    ctx.lineWidth = 8;
    ctx.stroke();
    
    // Optic disc (blind spot)
    ctx.fillStyle = '#FFE4C4';
    ctx.beginPath();
    ctx.arc(w * 0.75, h * 0.5, w * 0.04, 0, Math.PI * 2);
    ctx.fill();
    
    // Optic nerve
    ctx.fillStyle = '#F0E68C';
    ctx.fillRect(w * 0.77, h * 0.48, w * 0.15, h * 0.04);
    
    // Blood vessels on retina
    ctx.strokeStyle = '#8B0000';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(w * 0.75, h * 0.5);
    ctx.bezierCurveTo(w * 0.7, h * 0.4, w * 0.6, h * 0.35, w * 0.5, h * 0.3);
    ctx.stroke();
    
    ctx.beginPath();
    ctx.moveTo(w * 0.75, h * 0.5);
    ctx.bezierCurveTo(w * 0.7, h * 0.6, w * 0.6, h * 0.65, w * 0.5, h * 0.7);
    ctx.stroke();
    
    // Fovea (area of sharpest vision)
    ctx.fillStyle = '#FFD700';
    ctx.beginPath();
    ctx.arc(w * 0.65, h * 0.5, w * 0.025, 0, Math.PI * 2);
    ctx.fill();
    
    // Macula (surrounding fovea)
    ctx.strokeStyle = '#DAA520';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.arc(w * 0.65, h * 0.5, w * 0.05, 0, Math.PI * 2);
    ctx.stroke();
    
    // Outline
    ctx.strokeStyle = color.dark;
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.arc(w * 0.5, h * 0.5, w * 0.4, 0, Math.PI * 2);
    ctx.stroke();
    
    // Light rays (if showing refraction)
    if(process === 'light-refraction') {
      ctx.strokeStyle = '#FFD700';
      ctx.lineWidth = 2;
      ctx.globalAlpha = 0.7;
      
      // Parallel rays entering
      for(let i = -1; i <= 1; i++) {
        ctx.beginPath();
        ctx.moveTo(0, h * (0.5 + i * 0.1));
        ctx.lineTo(w * 0.08, h * (0.5 + i * 0.08));
        ctx.stroke();
        
        // Refracted through cornea
        ctx.beginPath();
        ctx.moveTo(w * 0.08, h * (0.5 + i * 0.08));
        ctx.lineTo(w * 0.25, h * (0.5 + i * 0.04));
        ctx.stroke();
        
        // Through lens to focal point
        ctx.beginPath();
        ctx.moveTo(w * 0.25, h * (0.5 + i * 0.04));
        ctx.lineTo(w * 0.65, h * 0.5);
        ctx.stroke();
      }
      
      ctx.globalAlpha = 1.0;
    }
  }

  static drawCornea(ctx, color, w, h) {
    // Detailed cornea layers
    
    // Corneal layers (5 layers)
    const layers = [
      { name: 'Epithelium', thickness: 0.1, color: '#E6F3FF' },
      { name: "Bowman's Layer", thickness: 0.05, color: '#C8E4FF' },
      { name: 'Stroma', thickness: 0.6, color: '#AAD5FF' },
      { name: "Descemet's Membrane", thickness: 0.05, color: '#8CC6FF' },
      { name: 'Endothelium', thickness: 0.1, color: '#6EB7FF' }
    ];
    
    let currentY = h * 0.1;
    
    layers.forEach((layer, index) => {
      const layerHeight = h * layer.thickness;
      
      ctx.fillStyle = layer.color;
      ctx.fillRect(w * 0.2, currentY, w * 0.6, layerHeight);
      
      ctx.strokeStyle = '#4682B4';
      ctx.lineWidth = 2;
      ctx.strokeRect(w * 0.2, currentY, w * 0.6, layerHeight);
      
      // Layer label
      ctx.fillStyle = '#000000';
      ctx.font = `${w * 0.02}px Arial`;
      ctx.fillText(layer.name, w * 0.85, currentY + layerHeight / 2);
      
      // Cell details
      if(layer.name === 'Epithelium') {
        // Squamous cells
        ctx.fillStyle = 'rgba(0, 0, 0, 0.2)';
        for(let i = 0; i < 15; i++) {
          ctx.fillRect(
            w * (0.22 + (i % 5) * 0.11),
            currentY + Math.floor(i / 5) * layerHeight / 3,
            w * 0.1,
            layerHeight / 3
          );
        }
      } else if(layer.name === 'Stroma') {
        // Collagen fibrils
        ctx.strokeStyle = 'rgba(255, 255, 255, 0.5)';
        ctx.lineWidth = 1;
        for(let i = 0; i < 40; i++) {
          ctx.beginPath();
          ctx.moveTo(w * 0.2, currentY + Math.random() * layerHeight);
          ctx.lineTo(w * 0.8, currentY + Math.random() * layerHeight);
          ctx.stroke();
        }
      }
      
      currentY += layerHeight;
    });
    
    // Curvature indication
    ctx.strokeStyle = '#4682B4';
    ctx.lineWidth = 4;
    ctx.beginPath();
    ctx.arc(w * 0.5, h * 0.5, w * 0.35, -Math.PI / 3, Math.PI / 3);
    ctx.stroke();
  }

  static drawLens(ctx, color, w, h) {
    // Crystalline lens structure
    
    // Lens capsule
    ctx.strokeStyle = '#FFE4B5';
    ctx.lineWidth = 4;
    ctx.beginPath();
    ctx.ellipse(w * 0.5, h * 0.5, w * 0.25, h * 0.35, 0, 0, Math.PI * 2);
    ctx.stroke();
    
    // Lens substance
    const lensGradient = ctx.createRadialGradient(w * 0.5, h * 0.5, 0, w * 0.5, h * 0.5, w * 0.25);
    lensGradient.addColorStop(0, 'rgba(255, 255, 220, 0.9)');
    lensGradient.addColorStop(0.7, 'rgba(255, 250, 200, 0.7)');
    lensGradient.addColorStop(1, 'rgba(250, 240, 180, 0.5)');
    
    ctx.fillStyle = lensGradient;
    ctx.beginPath();
    ctx.ellipse(w * 0.5, h * 0.5, w * 0.24, h * 0.34, 0, 0, Math.PI * 2);
    ctx.fill();
    
    // Lens nucleus (harder center)
    ctx.fillStyle = 'rgba(240, 230, 170, 0.8)';
    ctx.beginPath();
    ctx.ellipse(w * 0.5, h * 0.5, w * 0.12, h * 0.17, 0, 0, Math.PI * 2);
    ctx.fill();
    
    // Lens fibers (concentric layers)
    ctx.strokeStyle = 'rgba(200, 190, 150, 0.4)';
    ctx.lineWidth = 1;
    for(let i = 0; i < 8; i++) {
      const radiusX = w * (0.14 + i * 0.013);
      const radiusY = h * (0.2 + i * 0.018);
      ctx.beginPath();
      ctx.ellipse(w * 0.5, h * 0.5, radiusX, radiusY, 0, 0, Math.PI * 2);
      ctx.stroke();
    }
    
    // Lens sutures (Y-shaped patterns)
    ctx.strokeStyle = 'rgba(180, 170, 140, 0.6)';
    ctx.lineWidth = 2;
    
    // Anterior Y suture
    for(let i = 0; i < 3; i++) {
      const angle = (Math.PI * 2 / 3) * i - Math.PI / 2;
      ctx.beginPath();
      ctx.moveTo(w * 0.5, h * 0.5);
      ctx.lineTo(
        w * 0.5 + Math.cos(angle) * w * 0.15,
        h * 0.5 + Math.sin(angle) * h * 0.22
      );
      ctx.stroke();
    }
    
    // Zonular fibers (suspensory ligaments)
    ctx.strokeStyle = '#D2B48C';
    ctx.lineWidth = 2;
    ctx.setLineDash([3, 3]);
    
    for(let i = 0; i < 16; i++) {
      const angle = (Math.PI * 2 / 16) * i;
      ctx.beginPath();
      ctx.moveTo(
        w * 0.5 + Math.cos(angle) * w * 0.25,
        h * 0.5 + Math.sin(angle) * h * 0.35
      );
      ctx.lineTo(
        w * 0.5 + Math.cos(angle) * w * 0.35,
        h * 0.5 + Math.sin(angle) * h * 0.45
      );
      ctx.stroke();
    }
    
    ctx.setLineDash([]);
    
    // Ciliary processes (attachment points)
    ctx.fillStyle = '#BC8F8F';
    for(let i = 0; i < 16; i++) {
      const angle = (Math.PI * 2 / 16) * i;
      ctx.beginPath();
      ctx.arc(
        w * 0.5 + Math.cos(angle) * w * 0.35,
        h * 0.5 + Math.sin(angle) * h * 0.45,
        w * 0.02,
        0, Math.PI * 2
      );
      ctx.fill();
    }
    
    // Labels
    ctx.fillStyle = '#000000';
    ctx.font = `${w * 0.025}px Arial`;
    ctx.fillText('Lens Capsule', w * 0.05, h * 0.2);
    ctx.fillText('Lens Cortex', w * 0.05, h * 0.4);
    ctx.fillText('Lens Nucleus', w * 0.05, h * 0.5);
    ctx.fillText('Zonular Fibers', w * 0.7, h * 0.2);
  }

  static drawRetina(ctx, color, w, h) {
    // Retinal layers (10 layers)
    
    const layers = [
      { name: 'Inner Limiting Membrane', height: 0.03, color: '#FFE4E1' },
      { name: 'Nerve Fiber Layer', height: 0.08, color: '#F0E68C' },
      { name: 'Ganglion Cell Layer', height: 0.08, color: '#DEB887' },
      { name: 'Inner Plexiform Layer', height: 0.12, color: '#D2B48C' },
      { name: 'Inner Nuclear Layer', height: 0.1, color: '#BC8F8F' },
      { name: 'Outer Plexiform Layer', height: 0.08, color: '#CD853F' },
      { name: 'Outer Nuclear Layer', height: 0.12, color: '#D2691E' },
      { name: 'External Limiting Membrane', height: 0.03, color: '#A0522D' },
      { name: 'Photoreceptor Layer', height: 0.25, color: '#8B4513' },
      { name: 'Retinal Pigment Epithelium', height: 0.05, color: '#654321' }
    ];
    
    let currentY = h * 0.05;
    
    layers.forEach((layer, index) => {
      const layerHeight = h * layer.height;
      
      // Layer fill
      ctx.fillStyle = layer.color;
      ctx.fillRect(w * 0.15, currentY, w * 0.7, layerHeight);
      
      // Layer outline
      ctx.strokeStyle = '#000000';
      ctx.lineWidth = 1;
      ctx.strokeRect(w * 0.15, currentY, w * 0.7, layerHeight);
      
      // Layer label
      ctx.fillStyle = '#000000';
      ctx.font = `${w * 0.018}px Arial`;
      ctx.fillText(layer.name, w * 0.02, currentY + layerHeight / 2);
      
      // Add cellular details
      if(layer.name === 'Ganglion Cell Layer') {
        // Ganglion cells
        ctx.fillStyle = '#8B0000';
        for(let i = 0; i < 10; i++) {
          ctx.beginPath();
          ctx.arc(
            w * (0.2 + i * 0.06),
            currentY + layerHeight / 2,
            w * 0.015,
            0, Math.PI * 2
          );
          ctx.fill();
        }
      } else if(layer.name === 'Inner Nuclear Layer') {
        // Bipolar, horizontal, amacrine cells
        ctx.fillStyle = '#4B0082';
        for(let i = 0; i < 15; i++) {
          ctx.beginPath();
          ctx.arc(
            w * (0.18 + (i % 8) * 0.08),
            currentY + Math.floor(i / 8) * layerHeight / 2 + layerHeight / 4,
            w * 0.01,
            0, Math.PI * 2
          );
          ctx.fill();
        }
      } else if(layer.name === 'Outer Nuclear Layer') {
        // Rod and cone nuclei
        ctx.fillStyle = '#191970';
        for(let i = 0; i < 20; i++) {
          ctx.fillRect(
            w * (0.17 + (i % 10) * 0.06),
            currentY + Math.floor(i / 10) * layerHeight / 2 + layerHeight / 4,
            w * 0.015,
            layerHeight / 3
          );
        }
      } else if(layer.name === 'Photoreceptor Layer') {
        // Rods and cones
        
        // Cones (fewer, color vision)
        ctx.fillStyle = '#FF6347';
        for(let i = 0; i < 8; i++) {
          // Cone shape
          ctx.beginPath();
          ctx.moveTo(w * (0.2 + i * 0.08), currentY);
          ctx.lineTo(w * (0.19 + i * 0.08), currentY + layerHeight * 0.7);
          ctx.lineTo(w * (0.21 + i * 0.08), currentY + layerHeight * 0.7);
          ctx.closePath();
          ctx.fill();
          
          // Outer segment
          ctx.fillStyle = '#DC143C';
          ctx.fillRect(
            w * (0.195 + i * 0.08),
            currentY + layerHeight * 0.7,
            w * 0.01,
            layerHeight * 0.3
          );
          ctx.fillStyle = '#FF6347';
        }
        
        // Rods (more numerous, low light vision)
        ctx.fillStyle = '#4169E1';
        for(let i = 0; i < 15; i++) {
          // Rod shape
          ctx.fillRect(
            w * (0.16 + i * 0.045),
            currentY,
            w * 0.008,
            layerHeight * 0.7
          );
          
          // Outer segment
          ctx.fillStyle = '#0000CD';
          ctx.fillRect(
            w * (0.16 + i * 0.045),
            currentY + layerHeight * 0.7,
            w * 0.008,
            layerHeight * 0.3
          );
          ctx.fillStyle = '#4169E1';
        }
      }
      
      currentY += layerHeight;
    });
    
    // Light direction arrow
    ctx.fillStyle = '#FFD700';
    ctx.beginPath();
    ctx.moveTo(w * 0.9, h * 0.1);
    ctx.lineTo(w * 0.9, h * 0.9);
    ctx.lineTo(w * 0.88, h * 0.85);
    ctx.moveTo(w * 0.9, h * 0.9);
    ctx.lineTo(w * 0.92, h * 0.85);
    ctx.stroke();
    
    ctx.fillText('Light →', w * 0.87, h * 0.05);
    
    // Title
    ctx.fillStyle = '#000000';
    ctx.font = `${w * 0.03}px Arial`;
    ctx.fillText('Retinal Layers (Light enters from top)', w * 0.2, h * 0.02);
  }

  static drawOpticNerve(ctx, color, w, h) {
    // Optic nerve structure
    
    // Optic disc (where nerve exits eye)
    ctx.fillStyle = '#FFE4C4';
    ctx.beginPath();
    ctx.arc(w * 0.25, h * 0.5, w * 0.1, 0, Math.PI * 2);
    ctx.fill();
    
    ctx.strokeStyle = color.dark;
    ctx.lineWidth = 3;
    ctx.stroke();
    
    // Optic cup (depression)
    ctx.fillStyle = '#F5DEB3';
    ctx.beginPath();
    ctx.arc(w * 0.25, h * 0.5, w * 0.05, 0, Math.PI * 2);
    ctx.fill();
    
    // Nerve fiber bundles
    ctx.fillStyle = color.base;
    ctx.fillRect(w * 0.3, h * 0.45, w * 0.5, h * 0.1);
    
    // Individual nerve fibers (axons)
    ctx.strokeStyle = '#F0E68C';
    ctx.lineWidth = 2;
    for(let i = 0; i < 20; i++) {
      const yOffset = h * (0.46 + i * 0.004);
      ctx.beginPath();
      ctx.moveTo(w * 0.25, yOffset);
      ctx.lineTo(w * 0.8, yOffset);
      ctx.stroke();
    }
    
    // Myelin sheath (white matter)
    ctx.fillStyle = 'rgba(255, 255, 255, 0.5)';
    ctx.fillRect(w * 0.35, h * 0.46, w * 0.4, h * 0.08);
    
    // Central retinal artery and vein
    ctx.strokeStyle = '#DC143C';
    ctx.lineWidth = 4;
    ctx.beginPath();
    ctx.moveTo(w * 0.25, h * 0.48);
    ctx.lineTo(w * 0.8, h * 0.48);
    ctx.stroke();
    
    ctx.strokeStyle = '#8B0000';
    ctx.beginPath();
    ctx.moveTo(w * 0.25, h * 0.52);
    ctx.lineTo(w * 0.8, h * 0.52);
    ctx.stroke();
    
    // Meninges (protective coverings)
    const meninges = [
      { name: 'Dura mater', offset: -0.15, color: '#D2B48C' },
      { name: 'Arachnoid', offset: -0.12, color: '#DEB887' },
      { name: 'Pia mater', offset: -0.1, color: '#F5DEB3' }
    ];
    
    meninges.forEach(layer => {
      ctx.strokeStyle = layer.color;
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(w * 0.3, h * (0.5 + layer.offset));
      ctx.lineTo(w * 0.8, h * (0.5 + layer.offset));
      ctx.stroke();
      
      ctx.beginPath();
      ctx.moveTo(w * 0.3, h * (0.5 - layer.offset));
      ctx.lineTo(w * 0.8, h * (0.5 - layer.offset));
      ctx.stroke();
    });
    
    // Optic chiasm (where nerves cross)
    ctx.save();
    ctx.translate(w * 0.85, h * 0.5);
    
    ctx.fillStyle = color.light;
    ctx.beginPath();
    ctx.moveTo(-w * 0.05, -h * 0.08);
    ctx.bezierCurveTo(0, -h * 0.05, 0, h * 0.05, -w * 0.05, h * 0.08);
    ctx.lineTo(w * 0.05, h * 0.08);
    ctx.bezierCurveTo(0, h * 0.05, 0, -h * 0.05, w * 0.05, -h * 0.08);
    ctx.closePath();
    ctx.fill();
    
    ctx.strokeStyle = color.dark;
    ctx.lineWidth = 2;
    ctx.stroke();
    
    ctx.restore();
    
    // Labels
    ctx.fillStyle = '#000000';
    ctx.font = `${w * 0.025}px Arial`;
    ctx.fillText('Optic Disc', w * 0.1, h * 0.3);
    ctx.fillText('Nerve Fibers', w * 0.45, h * 0.4);
    ctx.fillText('Central Artery', w * 0.5, h * 0.46);
    ctx.fillText('Central Vein', w * 0.5, h * 0.56);
    ctx.fillText('Optic Chiasm', w * 0.78, h * 0.35);
  }

  static drawIris(ctx, color, w, h) {
    // Iris structure (colored part of eye)
    
    // Iris base
    const irisGradient = ctx.createRadialGradient(w * 0.5, h * 0.5, 0, w * 0.5, h * 0.5, w * 0.35);
    irisGradient.addColorStop(0, '#87CEEB');
    irisGradient.addColorStop(0.3, '#4682B4');
    irisGradient.addColorStop(0.7, '#4169E1');
    irisGradient.addColorStop(1, '#191970');
    
    ctx.fillStyle = irisGradient;
    ctx.beginPath();
    ctx.arc(w * 0.5, h * 0.5, w * 0.35, 0, Math.PI * 2);
    ctx.fill();
    
    // Pupil (central opening)
    ctx.fillStyle = '#000000';
    ctx.beginPath();
    ctx.arc(w * 0.5, h * 0.5, w * 0.12, 0, Math.PI * 2);
    ctx.fill();
    
    // Pupillary margin (edge of pupil)
    ctx.strokeStyle = '#8B4513';
    ctx.lineWidth = 3;
    ctx.stroke();
    
    // Radial furrows (collagenous strands)
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.3)';
    ctx.lineWidth = 2;
    
    for(let i = 0; i < 36; i++) {
      const angle = (Math.PI * 2 / 36) * i;
      ctx.beginPath();
      ctx.moveTo(
        w * 0.5 + Math.cos(angle) * w * 0.13,
        h * 0.5 + Math.sin(angle) * h * 0.13
      );
      ctx.lineTo(
        w * 0.5 + Math.cos(angle) * w * 0.35,
        h * 0.5 + Math.sin(angle) * h * 0.35
      );
      ctx.stroke();
    }
    
    // Circular contraction furrows
    ctx.strokeStyle = 'rgba(0, 0, 0, 0.4)';
    ctx.lineWidth = 1.5;
    
    for(let i = 0; i < 5; i++) {
      const radius = w * (0.18 + i * 0.035);
      ctx.beginPath();
      ctx.arc(w * 0.5, h * 0.5, radius, 0, Math.PI * 2);
      ctx.stroke();
    }
    
    // Crypts of Fuchs (depressions)
    ctx.fillStyle = 'rgba(0, 0, 0, 0.5)';
    const cryptPositions = [
      [0.6, 0.4], [0.65, 0.55], [0.4, 0.6], [0.35, 0.45],
      [0.55, 0.35], [0.45, 0.65], [0.6, 0.6], [0.4, 0.4]
    ];
    
    cryptPositions.forEach(([px, py]) => {
      ctx.beginPath();
      ctx.arc(w * px, h * py, w * 0.015, 0, Math.PI * 2);
      ctx.fill();
    });
    
    // Collarette (thickened region)
    ctx.strokeStyle = 'rgba(139, 69, 19, 0.6)';
    ctx.lineWidth = 4;
    ctx.beginPath();
    ctx.arc(w * 0.5, h * 0.5, w * 0.2, 0, Math.PI * 2);
    ctx.stroke();
    
    // Pigment spots
    ctx.fillStyle = 'rgba(101, 67, 33, 0.7)';
    for(let i = 0; i < 15; i++) {
      const angle = Math.random() * Math.PI * 2;
      const radius = w * (0.22 + Math.random() * 0.1);
      ctx.beginPath();
      ctx.arc(
        w * 0.5 + Math.cos(angle) * radius,
        h * 0.5 + Math.sin(angle) * radius,
        w * 0.008,
        0, Math.PI * 2
      );
      ctx.fill();
    }
    
    // Sphincter pupillae muscle (circular)
    ctx.strokeStyle = 'rgba(139, 0, 0, 0.4)';
    ctx.lineWidth = 6;
    ctx.beginPath();
    ctx.arc(w * 0.5, h * 0.5, w * 0.14, 0, Math.PI * 2);
    ctx.stroke();
    
    // Dilator pupillae muscle (radial)
    ctx.strokeStyle = 'rgba(178, 34, 34, 0.3)';
    ctx.lineWidth = 2;
    for(let i = 0; i < 24; i++) {
      const angle = (Math.PI * 2 / 24) * i;
      ctx.beginPath();
      ctx.moveTo(
        w * 0.5 + Math.cos(angle) * w * 0.15,
        h * 0.5 + Math.sin(angle) * h * 0.15
      );
      ctx.lineTo(
        w * 0.5 + Math.cos(angle) * w * 0.32,
        h * 0.5 + Math.sin(angle) * h * 0.32
      );
      ctx.stroke();
    }
    
    // Iris outline
    ctx.strokeStyle = '#191970';
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.arc(w * 0.5, h * 0.5, w * 0.35, 0, Math.PI * 2);
    ctx.stroke();
    
    // Labels
    ctx.fillStyle = '#000000';
    ctx.font = `${w * 0.025}px Arial`;
    ctx.fillText('Pupil', w * 0.1, h * 0.5);
    ctx.fillText('Collarette', w * 0.75, h * 0.4);
    ctx.fillText('Crypts', w * 0.75, h * 0.6);
    ctx.fillText('Radial Furrows', w * 0.05, h * 0.2);
  }

  static drawCiliaryBody(ctx, color, w, h) {
    // Ciliary body structure
    
    // Ciliary body ring
    ctx.fillStyle = color.base;
    ctx.beginPath();
    ctx.arc(w * 0.5, h * 0.5, w * 0.35, 0, Math.PI * 2);
    ctx.fill();
    
    // Inner opening
    ctx.fillStyle = '#F5F5DC';
    ctx.beginPath();
    ctx.arc(w * 0.5, h * 0.5, w * 0.2, 0, Math.PI * 2);
    ctx.fill();
    
    // Ciliary processes (70-80 radial ridges)
    for(let i = 0; i < 72; i++) {
      const angle = (Math.PI * 2 / 72) * i;
      
      // Process gradient
      const processGradient = ctx.createLinearGradient(
        w * 0.5,
        h * 0.5,
        w * 0.5 + Math.cos(angle) * w * 0.35,
        h * 0.5 + Math.sin(angle) * h * 0.35
      );
      processGradient.addColorStop(0, color.light);
      processGradient.addColorStop(1, color.dark);
      
      ctx.fillStyle = processGradient;
      ctx.beginPath();
      ctx.moveTo(w * 0.5, h * 0.5);
      ctx.lineTo(
        w * 0.5 + Math.cos(angle - 0.02) * w * 0.35,
        h * 0.5 + Math.sin(angle - 0.02) * h * 0.35
      );
      ctx.lineTo(
        w * 0.5 + Math.cos(angle + 0.02) * w * 0.35,
        h * 0.5 + Math.sin(angle + 0.02) * h * 0.35
      );
      ctx.closePath();
      ctx.fill();
      
      // Ridge at tip
      ctx.fillStyle = color.dark;
      ctx.beginPath();
      ctx.arc(
        w * 0.5 + Math.cos(angle) * w * 0.35,
        h * 0.5 + Math.sin(angle) * h * 0.35,
        w * 0.015,
        0, Math.PI * 2
      );
      ctx.fill();
    }
    
    // Ciliary muscle layers
    // Longitudinal muscle
    ctx.strokeStyle = '#8B0000';
    ctx.lineWidth = 3;
    for(let i = 0; i < 24; i++) {
      const angle = (Math.PI * 2 / 24) * i;
      ctx.beginPath();
      ctx.moveTo(
        w * 0.5 + Math.cos(angle) * w * 0.2,
        h * 0.5 + Math.sin(angle) * h * 0.2
      );
      ctx.lineTo(
        w * 0.5 + Math.cos(angle) * w * 0.32,
        h * 0.5 + Math.sin(angle) * h * 0.32
      );
      ctx.stroke();
    }
    
    // Circular muscle
    ctx.strokeStyle = '#DC143C';
    ctx.lineWidth = 4;
    for(let i = 0; i < 3; i++) {
      ctx.beginPath();
      ctx.arc(w * 0.5, h * 0.5, w * (0.22 + i * 0.03), 0, Math.PI * 2);
      ctx.stroke();
    }
    
    // Zonular fibers attachment
    ctx.strokeStyle = '#D2B48C';
    ctx.lineWidth = 1;
    ctx.setLineDash([2, 2]);
    
    for(let i = 0; i < 36; i++) {
      const angle = (Math.PI * 2 / 36) * i;
      ctx.beginPath();
      ctx.moveTo(
        w * 0.5 + Math.cos(angle) * w * 0.3,
        h * 0.5 + Math.sin(angle) * h * 0.3
      );
      ctx.lineTo(
        w * 0.5 + Math.cos(angle) * w * 0.15,
        h * 0.5 + Math.sin(angle) * h * 0.15
      );
      ctx.stroke();
    }
    
    ctx.setLineDash([]);
    
    // Lens (center)
    ctx.fillStyle = 'rgba(255, 255, 220, 0.7)';
    ctx.beginPath();
    ctx.ellipse(w * 0.5, h * 0.5, w * 0.1, h * 0.12, 0, 0, Math.PI * 2);
    ctx.fill();
    
    ctx.strokeStyle = 'rgba(200, 200, 150, 0.8)';
    ctx.lineWidth = 2;
    ctx.stroke();
    
    // Blood vessels
    ctx.strokeStyle = '#8B0000';
    ctx.lineWidth = 2;
    for(let i = 0; i < 12; i++) {
      const angle = (Math.PI * 2 / 12) * i;
      ctx.beginPath();
      ctx.moveTo(
        w * 0.5 + Math.cos(angle) * w * 0.35,
        h * 0.5 + Math.sin(angle) * h * 0.35
      );
      ctx.bezierCurveTo(
        w * 0.5 + Math.cos(angle) * w * 0.3,
        h * 0.5 + Math.sin(angle) * h * 0.25,
        w * 0.5 + Math.cos(angle) * w * 0.25,
        h * 0.5 + Math.sin(angle) * h * 0.3,
        w * 0.5 + Math.cos(angle) * w * 0.2,
        h * 0.5 + Math.sin(angle) * h * 0.2
      );
      ctx.stroke();
    }
    
    // Labels
    ctx.fillStyle = '#000000';
    ctx.font = `${w * 0.025}px Arial`;
    ctx.fillText('Ciliary Processes', w * 0.05, h * 0.15);
    ctx.fillText('Ciliary Muscle', w * 0.05, h * 0.85);
    ctx.fillText('Zonular Fibers', w * 0.7, h * 0.3);
    ctx.fillText('Lens', w * 0.7, h * 0.5);
  }

}
