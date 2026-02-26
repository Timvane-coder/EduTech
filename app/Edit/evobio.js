import { createCanvas } from '@napi-rs/canvas'; import
ExcelJS from 'exceljs'; import fs from 'fs'; import os
from 'os'; import path from 'path'; import readline from
'readline'; import * as math from 'mathjs'; import
GIFEncoder from 'gifencoder'; import { PassThrough }
from 'stream';


class AnatomicalShapes {


  // ===== NATURAL SELECTION =====
  static drawNaturalSelection(ctx, x, y, width, height, stage, example) {
    ctx.save();
    ctx.translate(x, y);
    
    const stages = {
      variation: this.drawVariationStage,
      selection: this.drawSelectionStage,
      reproduction: this.drawReproductionStage,
      adaptation: this.drawAdaptationStage,
      complete: this.drawCompleteSelection
    };
    
    const drawFunction = stages[stage] || stages.complete;
    drawFunction.call(this, ctx, width, height, example);
    
    ctx.restore();
  }

  static drawVariationStage(ctx, w, h, example) {
    const examples = {
      'peppered-moth': ['#F5F5DC', '#8B7355', '#4A4A4A'],
      'antibiotic-resistance': ['#FFB6C1', '#FF69B4', '#C71585'],
      'galapagos-finches': ['#D2691E', '#8B4513', '#654321'],
      'giraffe-neck': ['#F4A460', '#D2691E', '#8B4513'],
      'general': ['#87CEEB', '#4682B4', '#1E90FF']
    };
    
    const colors = examples[example] || examples.general;
    const organisms = 12;
    
    for(let i = 0; i < organisms; i++) {
      const col = i % 4;
      const row = Math.floor(i / 4);
      const orgX = w * (0.15 + col * 0.22);
      const orgY = h * (0.2 + row * 0.28);
      
      const colorIdx = Math.floor(Math.random() * colors.length);
      ctx.fillStyle = colors[colorIdx];
      
      ctx.beginPath();
      ctx.ellipse(orgX, orgY, w * 0.06, h * 0.08, 0, 0, Math.PI * 2);
      ctx.fill();
      ctx.strokeStyle = '#000';
      ctx.lineWidth = 2;
      ctx.stroke();
    }
    
    ctx.fillStyle = '#000';
    ctx.font = `${h * 0.06}px Arial`;
    ctx.textAlign = 'center';
    ctx.fillText('VARIATION IN POPULATION', w * 0.5, h * 0.92);
  }

  static drawSelectionStage(ctx, w, h, example) {
    const advantaged = '#228B22';
    const disadvantaged = '#DC143C';
    
    for(let i = 0; i < 6; i++) {
      const orgX = w * (0.15 + (i % 3) * 0.35);
      const orgY = h * (0.25 + Math.floor(i / 3) * 0.35);
      
      ctx.fillStyle = i < 4 ? advantaged : disadvantaged;
      ctx.globalAlpha = i < 4 ? 1.0 : 0.3;
      
      ctx.beginPath();
      ctx.ellipse(orgX, orgY, w * 0.08, h * 0.1, 0, 0, Math.PI * 2);
      ctx.fill();
      
      if(i >= 4) {
        ctx.strokeStyle = '#000';
        ctx.lineWidth = 3;
        ctx.beginPath();
        ctx.moveTo(orgX - w * 0.1, orgY - h * 0.12);
        ctx.lineTo(orgX + w * 0.1, orgY + h * 0.12);
        ctx.moveTo(orgX + w * 0.1, orgY - h * 0.12);
        ctx.lineTo(orgX - w * 0.1, orgY + h * 0.12);
        ctx.stroke();
      }
    }
    
    ctx.globalAlpha = 1.0;
    ctx.fillStyle = '#000';
    ctx.font = `${h * 0.06}px Arial`;
    ctx.textAlign = 'center';
    ctx.fillText('SELECTION PRESSURE', w * 0.5, h * 0.92);
  }

  static drawReproductionStage(ctx, w, h, example) {
    const advantaged = '#228B22';
    
    for(let i = 0; i < 3; i++) {
      const parentX = w * (0.2 + i * 0.3);
      const parentY = h * 0.25;
      
      ctx.fillStyle = advantaged;
      ctx.beginPath();
      ctx.ellipse(parentX, parentY, w * 0.08, h * 0.1, 0, 0, Math.PI * 2);
      ctx.fill();
      ctx.strokeStyle = '#000';
      ctx.lineWidth = 2;
      ctx.stroke();
      
      for(let j = 0; j < 3; j++) {
        const offspringX = parentX + (j - 1) * w * 0.12;
        const offspringY = h * 0.65;
        
        ctx.strokeStyle = advantaged;
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(parentX, parentY + h * 0.1);
        ctx.lineTo(offspringX, offspringY - h * 0.08);
        ctx.stroke();
        
        ctx.fillStyle = advantaged;
        ctx.beginPath();
        ctx.ellipse(offspringX, offspringY, w * 0.05, h * 0.06, 0, 0, Math.PI * 2);
        ctx.fill();
        ctx.strokeStyle = '#000';
        ctx.lineWidth = 1.5;
        ctx.stroke();
      }
    }
    
    ctx.fillStyle = '#000';
    ctx.font = `${h * 0.06}px Arial`;
    ctx.textAlign = 'center';
    ctx.fillText('DIFFERENTIAL REPRODUCTION', w * 0.5, h * 0.92);
  }

  static drawAdaptationStage(ctx, w, h, example) {
    const adapted = '#FFD700';
    
    for(let i = 0; i < 10; i++) {
      const col = i % 5;
      const row = Math.floor(i / 5);
      const orgX = w * (0.15 + col * 0.18);
      const orgY = h * (0.3 + row * 0.35);
      
      ctx.fillStyle = adapted;
      ctx.beginPath();
      ctx.ellipse(orgX, orgY, w * 0.07, h * 0.09, 0, 0, Math.PI * 2);
      ctx.fill();
      ctx.strokeStyle = '#000';
      ctx.lineWidth = 2;
      ctx.stroke();
    }
    
    ctx.fillStyle = '#000';
    ctx.font = `${h * 0.06}px Arial`;
    ctx.textAlign = 'center';
    ctx.fillText('ADAPTED POPULATION', w * 0.5, h * 0.92);
  }

  static drawCompleteSelection(ctx, w, h, example) {
    const stageWidth = w * 0.22;
    const stageHeight = h * 0.85;
    
    ctx.fillStyle = '#000';
    ctx.font = `${h * 0.04}px Arial`;
    ctx.textAlign = 'center';
    
    const stages = ['Variation', 'Selection', 'Reproduction', 'Adaptation'];
    stages.forEach((stage, i) => {
      const stageX = w * (0.08 + i * 0.24);
      
      ctx.strokeStyle = '#666';
      ctx.lineWidth = 2;
      ctx.strokeRect(stageX, h * 0.1, stageWidth, stageHeight * 0.7);
      
      ctx.fillText(stage, stageX + stageWidth * 0.5, h * 0.92);
      
      if(i < 3) {
        ctx.fillStyle = '#000';
        ctx.beginPath();
        ctx.moveTo(stageX + stageWidth + w * 0.01, h * 0.45);
        ctx.lineTo(stageX + stageWidth + w * 0.06, h * 0.45);
        ctx.lineTo(stageX + stageWidth + w * 0.04, h * 0.42);
        ctx.moveTo(stageX + stageWidth + w * 0.06, h * 0.45);
        ctx.lineTo(stageX + stageWidth + w * 0.04, h * 0.48);
        ctx.stroke();
      }
    });
  }

  // ===== DARWIN'S FINCHES =====
  static drawDarwinsFinches(ctx, x, y, width, height, species, adaptation) {
    ctx.save();
    ctx.translate(x, y);
    
    const speciesData = {
      'ground-finch': { beakSize: 'large', beakShape: 'thick', color: '#8B4513', food: 'seeds' },
      'tree-finch': { beakSize: 'medium', beakShape: 'curved', color: '#D2691E', food: 'insects' },
      'warbler-finch': { beakSize: 'small', beakShape: 'thin', color: '#CD853F', food: 'insects' },
      'vegetarian-finch': { beakSize: 'medium', beakShape: 'stout', color: '#A0522D', food: 'buds' }
    };
    
    if(species === 'all') {
      this.drawAllFinches(ctx, width, height, speciesData, adaptation);
    } else {
      this.drawSingleFinch(ctx, width, height, speciesData[species], adaptation);
    }
    
    ctx.restore();
  }

  static drawAllFinches(ctx, w, h, speciesData, adaptation) {
    const finches = Object.keys(speciesData);
    const cols = 2;
    const rows = 2;
    
    finches.forEach((species, i) => {
      const col = i % cols;
      const row = Math.floor(i / cols);
      const finchX = w * (0.25 + col * 0.5);
      const finchY = h * (0.25 + row * 0.45);
      
      this.drawFinchBody(ctx, finchX, finchY, w * 0.15, h * 0.2, speciesData[species]);
      
      ctx.fillStyle = '#000';
      ctx.font = `${h * 0.04}px Arial`;
      ctx.textAlign = 'center';
      ctx.fillText(species.replace('-', ' ').toUpperCase(), finchX, finchY + h * 0.18);
    });
  }

  static drawSingleFinch(ctx, w, h, finchData, adaptation) {
    const centerX = w * 0.5;
    const centerY = h * 0.4;
    
    this.drawFinchBody(ctx, centerX, centerY, w * 0.25, h * 0.3, finchData);
    
    ctx.fillStyle = '#000';
    ctx.font = `${h * 0.05}px Arial`;
    ctx.textAlign = 'center';
    ctx.fillText(`Adaptation: ${adaptation.replace('-', ' ').toUpperCase()}`, w * 0.5, h * 0.85);
    ctx.fillText(`Food Source: ${finchData.food.toUpperCase()}`, w * 0.5, h * 0.92);
  }

  static drawFinchBody(ctx, x, y, w, h, data) {
    ctx.fillStyle = data.color;
    
    ctx.beginPath();
    ctx.ellipse(x, y, w * 0.6, h * 0.5, 0, 0, Math.PI * 2);
    ctx.fill();
    ctx.strokeStyle = '#000';
    ctx.lineWidth = 2;
    ctx.stroke();
    
    ctx.beginPath();
    ctx.ellipse(x - w * 0.25, y - h * 0.3, w * 0.4, h * 0.35, 0, 0, Math.PI * 2);
    ctx.fill();
    ctx.stroke();
    
    this.drawBeak(ctx, x, y, w, h, data.beakSize, data.beakShape);
    
    ctx.fillStyle = '#000';
    ctx.beginPath();
    ctx.arc(x - w * 0.35, y - h * 0.35, w * 0.08, 0, Math.PI * 2);
    ctx.fill();
  }

  static drawBeak(ctx, x, y, w, h, size, shape) {
    const beakSizes = { small: 0.15, medium: 0.25, large: 0.35 };
    const beakLength = w * (beakSizes[size] || 0.25);
    
    ctx.fillStyle = '#FFD700';
    ctx.beginPath();
    
    if(shape === 'thick') {
      ctx.moveTo(x - w * 0.5, y - h * 0.1);
      ctx.lineTo(x - w * 0.5 - beakLength, y);
      ctx.lineTo(x - w * 0.5, y + h * 0.1);
    } else if(shape === 'thin') {
      ctx.moveTo(x - w * 0.5, y - h * 0.05);
      ctx.lineTo(x - w * 0.5 - beakLength, y);
      ctx.lineTo(x - w * 0.5, y + h * 0.05);
    } else if(shape === 'curved') {
      ctx.moveTo(x - w * 0.5, y - h * 0.08);
      ctx.quadraticCurveTo(x - w * 0.5 - beakLength, y - h * 0.15, x - w * 0.5 - beakLength, y);
      ctx.lineTo(x - w * 0.5, y + h * 0.08);
    } else {
      ctx.moveTo(x - w * 0.5, y - h * 0.12);
      ctx.lineTo(x - w * 0.5 - beakLength, y);
      ctx.lineTo(x - w * 0.5, y + h * 0.08);
    }
    
    ctx.closePath();
    ctx.fill();
    ctx.strokeStyle = '#000';
    ctx.lineWidth = 1.5;
    ctx.stroke();
  }

  // ===== ADAPTIVE RADIATION =====
  static drawAdaptiveRadiation(ctx, x, y, width, height, example, timescale) {
    ctx.save();
    ctx.translate(x, y);
    
    const centerX = width * 0.15;
    const centerY = height * 0.9;
    
    ctx.fillStyle = '#8B4513';
    ctx.beginPath();
    ctx.arc(centerX, centerY, width * 0.08, 0, Math.PI * 2);
    ctx.fill();
    ctx.strokeStyle = '#000';
    ctx.lineWidth = 3;
    ctx.stroke();
    
    ctx.fillStyle = '#000';
    ctx.font = `${height * 0.035}px Arial`;
    ctx.textAlign = 'center';
    ctx.fillText('Common Ancestor', centerX, centerY + height * 0.08);
    
    const branches = 8;
    const colors = ['#FF6B6B', '#4ECDC4', '#45B7D1', '#FFA07A', '#98D8C8', '#F7B731', '#5F27CD', '#00D2D3'];
    
    for(let i = 0; i < branches; i++) {
      const angle = (Math.PI / 2) + (i * Math.PI / (branches + 1));
      const branchLength = height * (0.6 + Math.random() * 0.2);
      
      const endX = centerX + Math.cos(angle) * branchLength;
      const endY = centerY - Math.sin(angle) * branchLength;
      
      const controlX = centerX + Math.cos(angle) * branchLength * 0.5;
      const controlY = centerY - Math.sin(angle) * branchLength * 0.3;
      
      ctx.strokeStyle = colors[i % colors.length];
      ctx.lineWidth = 4;
      ctx.beginPath();
      ctx.moveTo(centerX, centerY);
      ctx.quadraticCurveTo(controlX, controlY, endX, endY);
      ctx.stroke();
      
      ctx.fillStyle = colors[i % colors.length];
      ctx.beginPath();
      ctx.arc(endX, endY, width * 0.05, 0, Math.PI * 2);
      ctx.fill();
      ctx.strokeStyle = '#000';
      ctx.lineWidth = 2;
      ctx.stroke();
    }
    
    ctx.fillStyle = '#000';
    ctx.font = `${height * 0.05}px Arial`;
    ctx.textAlign = 'center';
    ctx.fillText('ADAPTIVE RADIATION', width * 0.5, height * 0.05);
    
    ctx.restore();
  }

  // ===== FOSSIL LAYERS =====
  static drawFossilLayers(ctx, x, y, width, height, era, layer) {
    ctx.save();
    ctx.translate(x, y);
    
    const layers = [
      { name: 'Cenozoic', color: '#FFE5B4', age: '66 Ma - Present', fossils: ['🦴', '🐚'] },
      { name: 'Mesozoic', color: '#D2B48C', age: '252 - 66 Ma', fossils: ['🦕', '🦴'] },
      { name: 'Paleozoic', color: '#BC8F8F', age: '541 - 252 Ma', fossils: ['🐚', '🌿'] },
      { name: 'Precambrian', color: '#8B7355', age: '4600 - 541 Ma', fossils: ['∿', '○'] }
    ];
    
    const layerHeight = height * 0.85 / layers.length;
    
    layers.forEach((l, i) => {
      const layerY = height * 0.1 + i * layerHeight;
      
      const gradient = ctx.createLinearGradient(0, layerY, 0, layerY + layerHeight);
      gradient.addColorStop(0, l.color);
      gradient.addColorStop(1, this.darkenColor(l.color, 0.8));
      
      ctx.fillStyle = gradient;
      ctx.fillRect(0, layerY, width, layerHeight);
      
      ctx.strokeStyle = '#000';
      ctx.lineWidth = 2;
      ctx.strokeRect(0, layerY, width, layerHeight);
      
      ctx.fillStyle = '#000';
      ctx.font = `bold ${height * 0.04}px Arial`;
      ctx.textAlign = 'left';
      ctx.fillText(l.name, width * 0.05, layerY + layerHeight * 0.3);
      
      ctx.font = `${height * 0.03}px Arial`;
      ctx.fillText(l.age, width * 0.05, layerY + layerHeight * 0.6);
      
      ctx.font = `${height * 0.06}px Arial`;
      l.fossils.forEach((fossil, fi) => {
        ctx.fillText(fossil, width * (0.6 + fi * 0.15), layerY + layerHeight * 0.5);
      });
    });
    
    ctx.restore();
  }

  // ===== HARDY-WEINBERG =====
  static drawHardyWeinberg(ctx, x, y, width, height, display, condition) {
    ctx.save();
    ctx.translate(x, y);
    
    if(display === 'graph' || display === 'both') {
      this.drawHWGraph(ctx, width, height * 0.6, condition);
    }
    
    if(display === 'equation' || display === 'both') {
      const equationY = display === 'both' ? height * 0.7 : height * 0.3;
      this.drawHWEquation(ctx, width, equationY, height * 0.25);
    }
    
    ctx.restore();
  }

  static drawHWGraph(ctx, w, h, condition) {
    ctx.strokeStyle = '#000';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(w * 0.1, h * 0.9);
    ctx.lineTo(w * 0.9, h * 0.9);
    ctx.lineTo(w * 0.9, h * 0.1);
    ctx.stroke();
    
    ctx.fillStyle = '#4682B4';
    ctx.globalAlpha = 0.6;
    ctx.beginPath();
    ctx.moveTo(w * 0.1, h * 0.9);
    
    for(let i = 0; i <= 100; i++) {
      const p = i / 100;
      const q = 1 - p;
      const freq = p * p;
      const graphX = w * (0.1 + 0.8 * p);
      const graphY = h * (0.9 - 0.8 * freq);
      ctx.lineTo(graphX, graphY);
    }
    
    ctx.lineTo(w * 0.9, h * 0.9);
    ctx.closePath();
    ctx.fill();
    ctx.globalAlpha = 1.0;
    
    ctx.strokeStyle = '#4682B4';
    ctx.lineWidth = 3;
    ctx.stroke();
    
    ctx.fillStyle = '#000';
    ctx.font = `${h * 0.05}px Arial`;
    ctx.textAlign = 'center';
    ctx.fillText('Allele Frequency (p)', w * 0.5, h * 0.98);
    
    ctx.save();
    ctx.translate(w * 0.02, h * 0.5);
    ctx.rotate(-Math.PI / 2);
    ctx.fillText('Genotype Frequency (p²)', 0, 0);
    ctx.restore();
  }

  static drawHWEquation(ctx, w, y, h) {
    ctx.fillStyle = '#000';
    ctx.font = `bold ${h * 0.3}px Arial`;
    ctx.textAlign = 'center';
    ctx.fillText('p² + 2pq + q² = 1', w * 0.5, y);
    
    ctx.font = `${h * 0.2}px Arial`;
    ctx.fillText('p + q = 1', w * 0.5, y + h * 0.4);
    
    ctx.font = `${h * 0.15}px Arial`;
    ctx.textAlign = 'left';
    ctx.fillText('p² = homozygous dominant', w * 0.15, y + h * 0.7);
    ctx.fillText('2pq = heterozygous', w * 0.15, y + h * 0.9);
    ctx.fillText('q² = homozygous recessive', w * 0.15, y + h * 1.1);
  }

  // ===== SPECIATION =====
  static drawSpeciation(ctx, x, y, width, height, speciationType, stage) {
    ctx.save();
    ctx.translate(x, y);
    
    const types = {
      allopatric: this.drawAllopatricSpeciation,
      sympatric: this.drawSympatricSpeciation,
      parapatric: this.drawParapatricSpeciation,
      peripatric: this.drawPeripatricSpeciation
    };
    
    const drawFunction = types[speciationType] || types.allopatric;
    drawFunction.call(this, ctx, width, height, stage);
    
    ctx.restore();
  }

  static drawAllopatricSpeciation(ctx, w, h, stage) {
    ctx.fillStyle = '#90EE90';
    ctx.fillRect(0, h * 0.3, w * 0.4, h * 0.4);
    ctx.fillRect(w * 0.6, h * 0.3, w * 0.4, h * 0.4);
    
    ctx.fillStyle = '#87CEEB';
    ctx.fillRect(w * 0.4, h * 0.3, w * 0.2, h * 0.4);
    
    ctx.fillStyle = '#4682B4';
    for(let i = 0; i < 8; i++) {
      const popX = w * (i < 4 ? 0.2 : 0.8);
      const popY = h * (0.35 + (i % 4) * 0.08);
      ctx.beginPath();
      ctx.arc(popX, popY, w * 0.03, 0, Math.PI * 2);
      ctx.fill();
    }
    
    ctx.fillStyle = '#000';
    ctx.font = `${h * 0.05}px Arial`;
    ctx.textAlign = 'center';
    ctx.fillText('ALLOPATRIC SPECIATION', w * 0.5, h * 0.15);
    ctx.font = `${h * 0.035}px Arial`;
    ctx.fillText('Geographic Barrier', w * 0.5, h * 0.8);
  }

  static drawSympatricSpeciation(ctx, w, h, stage) {
    ctx.fillStyle = '#90EE90';
    ctx.fillRect(0, h * 0.2, w, h * 0.6);
    
    const colors = ['#FF6B6B', '#4ECDC4', '#45B7D1', '#FFA07A'];
    
    for(let i = 0; i < 16; i++) {
      const popX = w * (0.2 + (i % 4) * 0.2);
      const popY = h * (0.3 + Math.floor(i / 4) * 0.15);
      
      ctx.fillStyle = colors[i % colors.length];
      ctx.beginPath();
      ctx.arc(popX, popY, w * 0.04, 0, Math.PI * 2);
      ctx.fill();
      ctx.strokeStyle = '#000';
      ctx.lineWidth = 2;
      ctx.stroke();
    }
    
    ctx.fillStyle = '#000';
    ctx.font = `${h * 0.05}px Arial`;
    ctx.textAlign = 'center';
    ctx.fillText('SYMPATRIC SPECIATION', w * 0.5, h * 0.12);
    ctx.font = `${h * 0.035}px Arial`;
    ctx.fillText('Same Geographic Area', w * 0.5, h * 0.9);
  }

  static drawParapatricSpeciation(ctx, w, h, stage) {
    const gradient = ctx.createLinearGradient(0, h * 0.3, w, h * 0.3);
    gradient.addColorStop(0, '#90EE90');
    gradient.addColorStop(0.5, '#F0E68C');
    gradient.addColorStop(1, '#D2691E');
    
    ctx.fillStyle = gradient;
    ctx.fillRect(0, h * 0.2, w, h * 0.6);
    
    for(let i = 0; i < 12; i++) {
      const popX = w * (0.1 + i * 0.08);
      const popY = h * 0.5;
      const hue = (i / 12) * 120;
      
      ctx.fillStyle = `hsl(${hue}, 70%, 60%)`;
      ctx.beginPath();
      ctx.arc(popX, popY, w * 0.03, 0, Math.PI * 2);
      ctx.fill();
    }
    
    ctx.fillStyle = '#000';
    ctx.font = `${h * 0.05}px Arial`;
    ctx.textAlign = 'center';
    ctx.fillText('PARAPATRIC SPECIATION', w * 0.5, h * 0.12);
    ctx.font = `${h * 0.035}px Arial`;
    ctx.fillText('Environmental Gradient', w * 0.5, h * 0.9);
  }

  static drawPeripatricSpeciation(ctx, w, h, stage) {
    ctx.fillStyle = '#90EE90';
    ctx.fillRect(0, h * 0.2, w * 0.7, h * 0.6);
    
    ctx.fillStyle = '#F0E68C';
    ctx.beginPath();
    ctx.arc(w * 0.85, h * 0.5, w * 0.12, 0, Math.PI * 2);
    ctx.fill();
    
    ctx.fillStyle = '#4682B4';
    for(let i = 0; i < 12; i++) {
      const popX = w * (0.15 + (i % 4) * 0.15);
      const popY = h * (0.3 + Math.floor(i / 4) * 0.15);
      ctx.beginPath();
      ctx.arc(popX, popY, w * 0.025, 0, Math.PI * 2);
      ctx.fill();
    }
    
    ctx.fillStyle = '#FF6B6B';
    for(let i = 0; i < 3; i++) {
      const angle = (i / 3) * Math.PI * 2;
      const popX = w * 0.85 + Math.cos(angle) * w * 0.06;
      const popY = h * 0.5 + Math.sin(angle) * h * 0.08;
      ctx.beginPath();
      ctx.arc(popX, popY, w * 0.02, 0, Math.PI * 2);
      ctx.fill();
    }
    
    ctx.fillStyle = '#000';
    ctx.font = `${h * 0.05}px Arial`;
    ctx.textAlign = 'center';
    ctx.fillText('PERIPATRIC SPECIATION', w * 0.5, h * 0.12);
    ctx.font = `${h * 0.035}px Arial`;
    ctx.fillText('Small Isolated Population', w * 0.5, h * 0.9);
  }

  // ===== COMPARATIVE ANATOMY =====
  static drawComparativeAnatomy(ctx, x, y, width, height, structureType, example) {
    ctx.save();
    ctx.translate(x, y);
    
    if(structureType === 'homologous' || structureType === 'both') {
      this.drawHomologousStructures(ctx, width, height * 0.45, example);
    }
    
    if(structureType === 'analogous' || structureType === 'both') {
      const analogY = structureType === 'both' ? height * 0.55 : 0;
      this.drawAnalogousStructures(ctx, 0, analogY, width, height * 0.45, example);
    }
    
    if(structureType === 'vestigial') {
      this.drawVestigialStructures(ctx, width, height, example);
    }
    
    ctx.restore();
  }

  static drawHomologousStructures(ctx, w, h, example) {
    ctx.fillStyle = '#000';
    ctx.font = `bold ${h * 0.1}px Arial`;
    ctx.textAlign = 'center';
    ctx.fillText('HOMOLOGOUS STRUCTURES', w * 0.5, h * 0.15);
    ctx.font = `${h * 0.06}px Arial`;
    ctx.fillText('(Same structure, different function)', w * 0.5, h * 0.25);
    
    const limbs = [
      { name: 'Human Arm', color: '#FFB6C1', segments: [0.3, 0.25, 0.15] },
      { name: 'Cat Leg', color: '#DDA0DD', segments: [0.25, 0.25, 0.2] },
      { name: 'Whale Flipper', color: '#87CEEB', segments: [0.35, 0.2, 0.15] },
      { name: 'Bird Wing', color: '#F0E68C', segments: [0.2, 0.3, 0.2] }
    ];
    
    limbs.forEach((limb, i) => {
      const limbX = w * (0.15 + i * 0.22);
      const limbY = h * 0.5;
      
      let currentX = limbX;
      let currentY = limbY;
      
      limb.segments.forEach((length, si) => {
        const segmentLength = h * length;
        const angle = -Math.PI / 6 - (si * Math.PI / 12);
        const endX = currentX + Math.cos(angle) * segmentLength;
        const endY = currentY + Math.sin(angle) * segmentLength;
        
        ctx.strokeStyle = limb.color;
        ctx.lineWidth = h * 0.08;
        ctx.lineCap = 'round';
        ctx.beginPath();
        ctx.moveTo(currentX, currentY);
        ctx.lineTo(endX, endY);
        ctx.stroke();
        
        ctx.fillStyle = '#000';
        ctx.beginPath();
        ctx.arc(currentX, currentY, h * 0.05, 0, Math.PI * 2);
        ctx.fill();
        
        currentX = endX;
        currentY = endY;
      });
      
      ctx.fillStyle = '#000';
      ctx.font = `${h * 0.07}px Arial`;
      ctx.textAlign = 'center';
      ctx.fillText(limb.name, limbX, h * 0.92);
    });
  }

  static drawAnalogousStructures(ctx, x, y, w, h, example) {
    ctx.save();
    ctx.translate(x, y);
    
    ctx.fillStyle = '#000';
    ctx.font = `bold ${h * 0.1}px Arial`;
    ctx.textAlign = 'center';
    ctx.fillText('ANALOGOUS STRUCTURES', w * 0.5, h * 0.15);
    ctx.font = `${h * 0.06}px Arial`;
    ctx.fillText('(Different structure, same function)', w * 0.5, h * 0.25);
    
    const wings = [
      { name: 'Bird Wing', color: '#F4A460', type: 'feathers' },
      { name: 'Bat Wing', color: '#8B7355', type: 'membrane' },
      { name: 'Insect Wing', color: '#98FB98', type: 'chitin' }
    ];
    
    wings.forEach((wing, i) => {
      const wingX = w * (0.2 + i * 0.3);
      const wingY = h * 0.55;
      
      if(wing.type === 'feathers') {
        this.drawBirdWing(ctx, wingX, wingY, w * 0.15, h * 0.25, wing.color);
      } else if(wing.type === 'membrane') {
        this.drawBatWing(ctx, wingX, wingY, w * 0.15, h * 0.25, wing.color);
      } else {
        this.drawInsectWing(ctx, wingX, wingY, w * 0.15, h * 0.25, wing.color);
      }
      
      ctx.fillStyle = '#000';
      ctx.font = `${h * 0.07}px Arial`;
      ctx.textAlign = 'center';
      ctx.fillText(wing.name, wingX, h * 0.92);
    });
    
    ctx.restore();
  }

  static drawBirdWing(ctx, x, y, w, h, color) {
    ctx.fillStyle = color;
    ctx.beginPath();
    ctx.ellipse(x, y, w, h, -Math.PI / 6, 0, Math.PI);
    ctx.fill();
    ctx.strokeStyle = '#000';
    ctx.lineWidth = 2;
    ctx.stroke();
    
    for(let i = 0; i < 5; i++) {
      const featherX = x + (i - 2) * w * 0.3;
      const featherY = y + h * 0.7;
      ctx.strokeStyle = '#000';
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(featherX, featherY);
      ctx.lineTo(featherX, featherY + h * 0.4);
      ctx.stroke();
    }
  }

  static drawBatWing(ctx, x, y, w, h, color) {
    ctx.fillStyle = color;
    ctx.globalAlpha = 0.7;
    ctx.beginPath();
    ctx.moveTo(x - w, y);
    for(let i = 0; i < 4; i++) {
      const fingerX = x - w + (i * w * 0.5);
      ctx.lineTo(fingerX, y + h);
      ctx.lineTo(fingerX + w * 0.25, y);
    }
    ctx.closePath();
    ctx.fill();
    ctx.globalAlpha = 1.0;
    
    ctx.strokeStyle = '#000';
    ctx.lineWidth = 2;
    ctx.stroke();
    
    for(let i = 0; i < 4; i++) {
      const fingerX = x - w + (i * w * 0.5);
      ctx.beginPath();
      ctx.moveTo(x, y);
      ctx.lineTo(fingerX, y + h);
      ctx.stroke();
    }
  }

  static drawInsectWing(ctx, x, y, w, h, color) {
    ctx.fillStyle = color;
    ctx.globalAlpha = 0.5;
    ctx.beginPath();
    ctx.ellipse(x, y, w, h, 0, 0, Math.PI * 2);
    ctx.fill();
    ctx.globalAlpha = 1.0;
    
    ctx.strokeStyle = '#000';
    ctx.lineWidth = 1.5;
    ctx.stroke();
    
    for(let i = 0; i < 4; i++) {
      ctx.beginPath();
      ctx.moveTo(x - w, y);
      ctx.lineTo(x + w, y + (i - 1.5) * h * 0.5);
      ctx.stroke();
    }
    
    for(let i = 0; i < 3; i++) {
      ctx.beginPath();
      ctx.ellipse(x, y, w * (0.3 + i * 0.35), h * (0.3 + i * 0.35), 0, 0, Math.PI * 2);
      ctx.stroke();
    }
  }

  static drawVestigialStructures(ctx, w, h, example) {
    ctx.fillStyle = '#000';
    ctx.font = `bold ${h * 0.08}px Arial`;
    ctx.textAlign = 'center';
    ctx.fillText('VESTIGIAL STRUCTURES', w * 0.5, h * 0.12);
    ctx.font = `${h * 0.05}px Arial`;
    ctx.fillText('(Reduced or non-functional remnants)', w * 0.5, h * 0.2);
    
    const structures = [
      { name: 'Human Tailbone', y: 0.35 },
      { name: 'Whale Hip Bones', y: 0.55 },
      { name: 'Snake Leg Remnants', y: 0.75 }
    ];
    
    structures.forEach(structure => {
      const structY = h * structure.y;
      
      ctx.fillStyle = '#FFB6C1';
      ctx.fillRect(w * 0.3, structY, w * 0.4, h * 0.12);
      ctx.strokeStyle = '#000';
      ctx.lineWidth = 2;
      ctx.strokeRect(w * 0.3, structY, w * 0.4, h * 0.12);
      
      ctx.fillStyle = '#DC143C';
      ctx.beginPath();
      ctx.arc(w * 0.5, structY + h * 0.06, w * 0.03, 0, Math.PI * 2);
      ctx.fill();
      
      ctx.fillStyle = '#000';
      ctx.font = `${h * 0.045}px Arial`;
      ctx.textAlign = 'center';
      ctx.fillText(structure.name, w * 0.5, structY - h * 0.02);
    });
  }

  // ===== UTILITY FUNCTIONS =====
  static darkenColor(color, factor) {
    const hex = color.replace('#', '');
    const r = parseInt(hex.substr(0, 2), 16);
    const g = parseInt(hex.substr(2, 2), 16);
    const b = parseInt(hex.substr(4, 2), 16);
    
    const newR = Math.floor(r * factor);
    const newG = Math.floor(g * factor);
    const newB = Math.floor(b * factor);
    
    return `#${newR.toString(16).padStart(2, '0')}${newG.toString(16).padStart(2, '0')}${newB.toString(16).padStart(2, '0')}`;
  }

  static lightenColor(color, factor) {
    const hex = color.replace('#', '');
    const r = parseInt(hex.substr(0, 2), 16);
    const g = parseInt(hex.substr(2, 2), 16);
    const b = parseInt(hex.substr(4, 2), 16);
    
    const newR = Math.floor(r + (255 - r) * factor);
    const newG = Math.floor(g + (255 - g) * factor);
    const newB = Math.floor(b + (255 - b) * factor);
    
    return `#${newR.toString(16).padStart(2, '0')}${newG.toString(16).padStart(2, '0')}${newB.toString(16).padStart(2, '0')}`;
  }
}


