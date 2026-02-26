import { createCanvas } from '@napi-rs/canvas'; import
ExcelJS from 'exceljs'; import fs from 'fs'; import os
from 'os'; import path from 'path'; import readline from
'readline'; import * as math from 'mathjs'; import
GIFEncoder from 'gifencoder'; import { PassThrough }
from 'stream';



class AnatomicalShapes {



  // ===== FOOD WEB DIAGRAMS =====
  static drawFoodWeb(ctx, x, y, width, height, trophicLevel, ecosystem = 'terrestrial') {
    ctx.save();
    ctx.translate(x, y);
    
    const colors = {
      producer: { base: '#2ECC40', light: '#3EFC50', dark: '#1E8C30' },
      primaryConsumer: { base: '#FF851B', light: '#FFA54B', dark: '#C86500' },
      secondaryConsumer: { base: '#0074D9', light: '#3094F9', dark: '#005099' },
      tertiaryConsumer: { base: '#B10DC9', light: '#D13DE9', dark: '#810DA9' },
      decomposer: { base: '#85144b', light: '#A5345b', dark: '#65042b' }
    };
    
    switch(trophicLevel) {
      case 'complete':
        this.drawCompleteFoodWeb(ctx, colors, width, height, ecosystem);
        break;
      case 'producers':
        this.drawProducers(ctx, colors.producer, width, height, ecosystem);
        break;
      case 'primary-consumers':
        this.drawPrimaryConsumers(ctx, colors.primaryConsumer, width, height, ecosystem);
        break;
      case 'secondary-consumers':
        this.drawSecondaryConsumers(ctx, colors.secondaryConsumer, width, height, ecosystem);
        break;
      case 'tertiary-consumers':
        this.drawTertiaryConsumers(ctx, colors.tertiaryConsumer, width, height, ecosystem);
        break;
      case 'decomposers':
        this.drawDecomposers(ctx, colors.decomposer, width, height, ecosystem);
        break;
    }
    
    ctx.restore();
  }

  static drawCompleteFoodWeb(ctx, colors, w, h, ecosystem) {
    // Draw all trophic levels connected
    const levels = [
      { y: 0.85, color: colors.decomposer, organisms: ['Bacteria', 'Fungi', 'Earthworms'] },
      { y: 0.15, color: colors.producer, organisms: ['Grass', 'Trees', 'Algae'] },
      { y: 0.35, color: colors.primaryConsumer, organisms: ['Rabbit', 'Deer', 'Grasshopper'] },
      { y: 0.55, color: colors.secondaryConsumer, organisms: ['Snake', 'Fox', 'Bird'] },
      { y: 0.75, color: colors.tertiaryConsumer, organisms: ['Hawk', 'Wolf'] }
    ];

    // Draw connections first (arrows showing energy flow)
    ctx.strokeStyle = 'rgba(100, 100, 100, 0.4)';
    ctx.lineWidth = 2;
    ctx.setLineDash([5, 5]);
    
    // Producers to primary consumers
    for(let i = 0; i < 3; i++) {
      for(let j = 0; j < 3; j++) {
        this.drawArrow(ctx, w * (0.2 + i * 0.3), h * 0.15, w * (0.2 + j * 0.3), h * 0.35);
      }
    }
    
    // Primary to secondary consumers
    for(let i = 0; i < 3; i++) {
      for(let j = 0; j < 3; j++) {
        if(Math.random() > 0.3) {
          this.drawArrow(ctx, w * (0.2 + i * 0.3), h * 0.35, w * (0.2 + j * 0.3), h * 0.55);
        }
      }
    }
    
    // Secondary to tertiary consumers
    for(let i = 0; i < 3; i++) {
      for(let j = 0; j < 2; j++) {
        if(Math.random() > 0.4) {
          this.drawArrow(ctx, w * (0.2 + i * 0.3), h * 0.55, w * (0.3 + j * 0.4), h * 0.75);
        }
      }
    }
    
    // All levels to decomposers
    [0.15, 0.35, 0.55, 0.75].forEach(yPos => {
      this.drawArrow(ctx, w * 0.5, h * yPos, w * 0.5, h * 0.85, true);
    });
    
    ctx.setLineDash([]);

    // Draw organisms at each level
    levels.forEach(level => {
      level.organisms.forEach((org, idx) => {
        const xPos = w * (0.2 + idx * 0.3);
        const yPos = h * level.y;
        
        this.drawOrganism(ctx, xPos, yPos, w * 0.12, h * 0.08, org, level.color);
      });
    });
  }

  static drawProducers(ctx, color, w, h, ecosystem) {
    const producers = ecosystem === 'aquatic' ? 
      ['Phytoplankton', 'Algae', 'Kelp'] : 
      ['Grass', 'Trees', 'Shrubs'];
    
    producers.forEach((producer, idx) => {
      const x = w * (0.2 + idx * 0.3);
      const y = h * 0.5;
      
      // Draw plant-like shapes
      const gradient = ctx.createLinearGradient(x - w * 0.08, y, x + w * 0.08, y);
      gradient.addColorStop(0, color.light);
      gradient.addColorStop(0.5, color.base);
      gradient.addColorStop(1, color.dark);
      
      ctx.fillStyle = gradient;
      
      // Draw leaves/fronds
      for(let i = 0; i < 5; i++) {
        const angle = (i / 5) * Math.PI * 2;
        const leafX = x + Math.cos(angle) * w * 0.05;
        const leafY = y + Math.sin(angle) * h * 0.04;
        
        ctx.beginPath();
        ctx.ellipse(leafX, leafY, w * 0.03, h * 0.025, angle, 0, Math.PI * 2);
        ctx.fill();
      }
      
      // Center
      ctx.fillStyle = color.dark;
      ctx.beginPath();
      ctx.arc(x, y, w * 0.02, 0, Math.PI * 2);
      ctx.fill();
      
      // Label
      ctx.fillStyle = '#000';
      ctx.font = `${h * 0.025}px Arial`;
      ctx.textAlign = 'center';
      ctx.fillText(producer, x, y + h * 0.08);
    });
    
    // Sun for photosynthesis
    ctx.fillStyle = '#FFD700';
    ctx.beginPath();
    ctx.arc(w * 0.9, h * 0.1, w * 0.05, 0, Math.PI * 2);
    ctx.fill();
    
    // Sun rays
    for(let i = 0; i < 8; i++) {
      const angle = (i / 8) * Math.PI * 2;
      ctx.beginPath();
      ctx.moveTo(w * 0.9, h * 0.1);
      ctx.lineTo(w * 0.9 + Math.cos(angle) * w * 0.08, h * 0.1 + Math.sin(angle) * h * 0.06);
      ctx.strokeStyle = '#FFD700';
      ctx.lineWidth = 2;
      ctx.stroke();
    }
  }

  static drawPrimaryConsumers(ctx, color, w, h, ecosystem) {
    const consumers = ecosystem === 'aquatic' ? 
      ['Zooplankton', 'Small Fish', 'Shrimp'] : 
      ['Rabbit', 'Deer', 'Grasshopper'];
    
    consumers.forEach((consumer, idx) => {
      const x = w * (0.2 + idx * 0.3);
      const y = h * 0.5;
      
      // Draw herbivore body
      const gradient = ctx.createRadialGradient(x, y, 0, x, y, w * 0.06);
      gradient.addColorStop(0, color.light);
      gradient.addColorStop(0.7, color.base);
      gradient.addColorStop(1, color.dark);
      
      ctx.fillStyle = gradient;
      
      // Body
      ctx.beginPath();
      ctx.ellipse(x, y, w * 0.05, h * 0.04, 0, 0, Math.PI * 2);
      ctx.fill();
      
      // Head
      ctx.beginPath();
      ctx.arc(x + w * 0.04, y - h * 0.02, w * 0.025, 0, Math.PI * 2);
      ctx.fill();
      
      // Legs
      ctx.strokeStyle = color.dark;
      ctx.lineWidth = 2;
      for(let i = 0; i < 4; i++) {
        const legX = x - w * 0.03 + i * w * 0.02;
        ctx.beginPath();
        ctx.moveTo(legX, y + h * 0.02);
        ctx.lineTo(legX, y + h * 0.05);
        ctx.stroke();
      }
      
      // Label
      ctx.fillStyle = '#000';
      ctx.font = `${h * 0.025}px Arial`;
      ctx.textAlign = 'center';
      ctx.fillText(consumer, x, y + h * 0.1);
    });
  }

  static drawSecondaryConsumers(ctx, color, w, h, ecosystem) {
    const consumers = ecosystem === 'aquatic' ? 
      ['Medium Fish', 'Squid', 'Seal'] : 
      ['Snake', 'Fox', 'Bird'];
    
    consumers.forEach((consumer, idx) => {
      const x = w * (0.2 + idx * 0.3);
      const y = h * 0.5;
      
      const gradient = ctx.createRadialGradient(x, y, 0, x, y, w * 0.07);
      gradient.addColorStop(0, color.light);
      gradient.addColorStop(0.7, color.base);
      gradient.addColorStop(1, color.dark);
      
      ctx.fillStyle = gradient;
      
      // Carnivore body (more angular)
      ctx.beginPath();
      ctx.moveTo(x - w * 0.05, y);
      ctx.quadraticCurveTo(x, y - h * 0.04, x + w * 0.05, y);
      ctx.quadraticCurveTo(x, y + h * 0.04, x - w * 0.05, y);
      ctx.fill();
      
      // Sharp head
      ctx.beginPath();
      ctx.moveTo(x + w * 0.05, y);
      ctx.lineTo(x + w * 0.08, y - h * 0.01);
      ctx.lineTo(x + w * 0.08, y + h * 0.01);
      ctx.closePath();
      ctx.fill();
      
      // Eyes
      ctx.fillStyle = '#000';
      ctx.beginPath();
      ctx.arc(x + w * 0.06, y - h * 0.005, w * 0.005, 0, Math.PI * 2);
      ctx.fill();
      
      // Label
      ctx.font = `${h * 0.025}px Arial`;
      ctx.textAlign = 'center';
      ctx.fillText(consumer, x, y + h * 0.08);
    });
  }

  static drawTertiaryConsumers(ctx, color, w, h, ecosystem) {
    const consumers = ecosystem === 'aquatic' ? 
      ['Shark', 'Killer Whale'] : 
      ['Hawk', 'Wolf'];
    
    consumers.forEach((consumer, idx) => {
      const x = w * (0.3 + idx * 0.4);
      const y = h * 0.5;
      
      const gradient = ctx.createRadialGradient(x, y, 0, x, y, w * 0.09);
      gradient.addColorStop(0, color.light);
      gradient.addColorStop(0.6, color.base);
      gradient.addColorStop(1, color.dark);
      
      ctx.fillStyle = gradient;
      
      // Apex predator (larger, more imposing)
      ctx.beginPath();
      ctx.ellipse(x, y, w * 0.08, h * 0.06, 0, 0, Math.PI * 2);
      ctx.fill();
      
      // Head with teeth
      ctx.beginPath();
      ctx.arc(x + w * 0.06, y, w * 0.04, 0, Math.PI * 2);
      ctx.fill();
      
      // Teeth/beak
      ctx.fillStyle = '#FFF';
      ctx.beginPath();
      ctx.moveTo(x + w * 0.09, y);
      ctx.lineTo(x + w * 0.11, y - h * 0.01);
      ctx.lineTo(x + w * 0.11, y + h * 0.01);
      ctx.closePath();
      ctx.fill();
      
      // Wings/fins
      ctx.fillStyle = color.dark;
      ctx.beginPath();
      ctx.ellipse(x - w * 0.02, y - h * 0.05, w * 0.04, h * 0.02, -Math.PI / 4, 0, Math.PI * 2);
      ctx.fill();
      
      // Label
      ctx.fillStyle = '#000';
      ctx.font = `${h * 0.03}px Arial`;
      ctx.textAlign = 'center';
      ctx.fillText(consumer, x, y + h * 0.12);
    });
  }

  static drawDecomposers(ctx, color, w, h, ecosystem) {
    const decomposers = ['Bacteria', 'Fungi', 'Earthworms'];
    
    decomposers.forEach((decomposer, idx) => {
      const x = w * (0.2 + idx * 0.3);
      const y = h * 0.5;
      
      const gradient = ctx.createRadialGradient(x, y, 0, x, y, w * 0.06);
      gradient.addColorStop(0, color.light);
      gradient.addColorStop(0.7, color.base);
      gradient.addColorStop(1, color.dark);
      
      if(decomposer === 'Bacteria') {
        // Draw bacterial colonies
        for(let i = 0; i < 8; i++) {
          const bx = x + (Math.random() - 0.5) * w * 0.08;
          const by = y + (Math.random() - 0.5) * h * 0.06;
          ctx.fillStyle = gradient;
          ctx.beginPath();
          ctx.arc(bx, by, w * 0.008, 0, Math.PI * 2);
          ctx.fill();
        }
      } else if(decomposer === 'Fungi') {
        // Draw mushroom
        ctx.fillStyle = gradient;
        // Cap
        ctx.beginPath();
        ctx.ellipse(x, y - h * 0.02, w * 0.04, h * 0.02, 0, Math.PI, 0);
        ctx.fill();
        // Stem
        ctx.fillRect(x - w * 0.008, y - h * 0.02, w * 0.016, h * 0.04);
      } else {
        // Draw worm
        ctx.strokeStyle = color.base;
        ctx.lineWidth = w * 0.008;
        ctx.beginPath();
        ctx.moveTo(x - w * 0.04, y);
        for(let i = 0; i < 5; i++) {
          ctx.quadraticCurveTo(
            x - w * 0.04 + i * w * 0.02, 
            y + (i % 2 === 0 ? h * 0.02 : -h * 0.02),
            x - w * 0.04 + (i + 1) * w * 0.02,
            y
          );
        }
        ctx.stroke();
      }
      
      // Label
      ctx.fillStyle = '#000';
      ctx.font = `${h * 0.025}px Arial`;
      ctx.textAlign = 'center';
      ctx.fillText(decomposer, x, y + h * 0.08);
    });
    
    // Dead organic matter
    ctx.fillStyle = '#8B4513';
    ctx.fillRect(w * 0.1, h * 0.7, w * 0.8, h * 0.05);
    ctx.fillStyle = '#000';
    ctx.font = `${h * 0.02}px Arial`;
    ctx.textAlign = 'center';
    ctx.fillText('Dead Organic Matter', w * 0.5, h * 0.8);
  }

  static drawOrganism(ctx, x, y, width, height, name, color) {
    const gradient = ctx.createRadialGradient(x, y, 0, x, y, width / 2);
    gradient.addColorStop(0, color.light);
    gradient.addColorStop(0.7, color.base);
    gradient.addColorStop(1, color.dark);
    
    ctx.fillStyle = gradient;
    ctx.beginPath();
    ctx.ellipse(x, y, width / 2, height / 2, 0, 0, Math.PI * 2);
    ctx.fill();
    
    ctx.strokeStyle = color.dark;
    ctx.lineWidth = 2;
    ctx.stroke();
    
    ctx.fillStyle = '#000';
    ctx.font = `${height * 0.25}px Arial`;
    ctx.textAlign = 'center';
    ctx.fillText(name, x, y + height * 0.7);
  }

  static drawArrow(ctx, x1, y1, x2, y2, dashed = false) {
    if(dashed) ctx.setLineDash([5, 5]);
    
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.stroke();
    
    // Arrowhead
    const angle = Math.atan2(y2 - y1, x2 - x1);
    const headlen = 10;
    ctx.beginPath();
    ctx.moveTo(x2, y2);
    ctx.lineTo(x2 - headlen * Math.cos(angle - Math.PI / 6), y2 - headlen * Math.sin(angle - Math.PI / 6));
    ctx.moveTo(x2, y2);
    ctx.lineTo(x2 - headlen * Math.cos(angle + Math.PI / 6), y2 - headlen * Math.sin(angle + Math.PI / 6));
    ctx.stroke();
    
    if(dashed) ctx.setLineDash([]);
  }

  // ===== CARBON CYCLE DIAGRAMS =====
  static drawCarbonCycle(ctx, x, y, width, height, process, reservoir) {
    ctx.save();
    ctx.translate(x, y);
    
    switch(process) {
      case 'complete':
        this.drawCompleteCarbonCycle(ctx, width, height, reservoir);
        break;
      case 'photosynthesis':
        this.drawPhotosynthesis(ctx, width, height);
        break;
      case 'respiration':
        this.drawRespiration(ctx, width, height);
        break;
      case 'decomposition':
        this.drawDecomposition(ctx, width, height);
        break;
      case 'combustion':
        this.drawCombustion(ctx, width, height);
        break;
      case 'ocean-absorption':
        this.drawOceanAbsorption(ctx, width, height);
        break;
    }
    
    ctx.restore();
  }

  static drawCompleteCarbonCycle(ctx, w, h, reservoir) {
    // Atmosphere
    ctx.fillStyle = 'rgba(135, 206, 250, 0.3)';
    ctx.fillRect(0, 0, w, h * 0.3);
    ctx.fillStyle = '#000';
    ctx.font = `${h * 0.03}px Arial`;
    ctx.fillText('Atmosphere (CO₂)', w * 0.45, h * 0.15);
    
    // Draw CO2 molecules
    for(let i = 0; i < 10; i++) {
      const x = w * (0.1 + Math.random() * 0.8);
      const y = h * (0.05 + Math.random() * 0.2);
      this.drawCO2Molecule(ctx, x, y, w * 0.02);
    }
    
    // Plants (photosynthesis)
    ctx.fillStyle = '#2ECC40';
    ctx.beginPath();
    ctx.ellipse(w * 0.2, h * 0.5, w * 0.08, h * 0.15, 0, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = '#000';
    ctx.fillText('Plants', w * 0.2, h * 0.7);
    
    // Animals (respiration)
    ctx.fillStyle = '#FF851B';
    ctx.beginPath();
    ctx.ellipse(w * 0.5, h * 0.5, w * 0.08, h * 0.12, 0, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = '#000';
    ctx.fillText('Animals', w * 0.5, h * 0.7);
    
    // Soil/Decomposers
    ctx.fillStyle = '#8B4513';
    ctx.fillRect(0, h * 0.75, w, h * 0.25);
    ctx.fillStyle = '#FFF';
    ctx.fillText('Soil & Decomposers', w * 0.4, h * 0.85);
    
    // Fossil Fuels
    ctx.fillStyle = '#333';
    ctx.fillRect(w * 0.7, h * 0.6, w * 0.15, h * 0.15);
    ctx.fillStyle = '#FFF';
    ctx.font = `${h * 0.02}px Arial`;
    ctx.fillText('Fossil', w * 0.775, h * 0.67);
    ctx.fillText('Fuels', w * 0.775, h * 0.7);
    
    // Ocean
    ctx.fillStyle = 'rgba(0, 116, 217, 0.4)';
    ctx.fillRect(w * 0.75, h * 0.3, w * 0.2, h * 0.25);
    ctx.fillStyle = '#000';
    ctx.fillText('Ocean', w * 0.85, h * 0.45);
    
    // Arrows showing carbon flow
    ctx.strokeStyle = '#000';
    ctx.lineWidth = 3;
    
    // Photosynthesis (atmosphere to plants)
    this.drawArrow(ctx, w * 0.2, h * 0.3, w * 0.2, h * 0.35);
    ctx.fillText('Photosynthesis', w * 0.25, h * 0.32);
    
    // Respiration (plants/animals to atmosphere)
    this.drawArrow(ctx, w * 0.5, h * 0.38, w * 0.5, h * 0.3);
    ctx.fillText('Respiration', w * 0.55, h * 0.34);
    
    // Decomposition
    this.drawArrow(ctx, w * 0.3, h * 0.65, w * 0.3, h * 0.75);
    ctx.fillText('Decomposition', w * 0.35, h * 0.72);
    
    // Combustion
    this.drawArrow(ctx, w * 0.7, h * 0.65, w * 0.6, h * 0.3);
    ctx.fillText('Combustion', w * 0.65, h * 0.48);
    
    // Ocean absorption
    this.drawArrow(ctx, w * 0.75, h * 0.2, w * 0.8, h * 0.3);
    ctx.fillText('Absorption', w * 0.9, h * 0.25);
  }

  static drawPhotosynthesis(ctx, w, h) {
    // Sun
    ctx.fillStyle = '#FFD700';
    ctx.beginPath();
    ctx.arc(w * 0.8, h * 0.2, w * 0.06, 0, Math.PI * 2);
    ctx.fill();
    
    // Plant
    ctx.fillStyle = '#2ECC40';
    ctx.fillRect(w * 0.4, h * 0.5, w * 0.05, h * 0.3);
    ctx.beginPath();
    ctx.arc(w * 0.425, h * 0.45, w * 0.1, 0, Math.PI * 2);
    ctx.fill();
    
    // CO2 going in
    ctx.fillStyle = '#000';
    ctx.font = `${h * 0.04}px Arial`;
    ctx.fillText('6 CO₂', w * 0.2, h * 0.4);
    this.drawArrow(ctx, w * 0.28, h * 0.4, w * 0.38, h * 0.5);
    
    // H2O going in
    ctx.fillText('6 H₂O', w * 0.2, h * 0.6);
    this.drawArrow(ctx, w * 0.28, h * 0.6, w * 0.38, h * 0.55);
    
    // Light energy
    ctx.fillText('Light Energy', w * 0.6, h * 0.25);
    this.drawArrow(ctx, w * 0.75, h * 0.25, w * 0.5, h * 0.45);
    
    // O2 and Glucose out
    ctx.fillText('C₆H₁₂O₆', w * 0.6, h * 0.5);
    this.drawArrow(ctx, w * 0.5, h * 0.55, w * 0.58, h * 0.52);
    
    ctx.fillText('6 O₂', w * 0.6, h * 0.65);
    this.drawArrow(ctx, w * 0.5, h * 0.65, w * 0.58, h * 0.65);
  }

  static drawRespiration(ctx, w, h) {
    // Animal/cell
    ctx.fillStyle = '#FF851B';
    ctx.beginPath();
    ctx.arc(w * 0.5, h * 0.5, w * 0.12, 0, Math.PI * 2);
    ctx.fill();
    
    // Mitochondria inside
    ctx.fillStyle = '#C86500';
    for(let i = 0; i < 3; i++) {
      const angle = (i / 3) * Math.PI * 2;
      const mx = w * 0.5 + Math.cos(angle) * w * 0.05;
      const my = h * 0.5 + Math.sin(angle) * h * 0.04;
      ctx.beginPath();
      ctx.ellipse(mx, my, w * 0.02, h * 0.015, angle, 0, Math.PI * 2);
      ctx.fill();
    }
    
    ctx.fillStyle = '#000';
    ctx.font = `${h * 0.04}px Arial`;
    
    // Inputs
    ctx.fillText('C₆H₁₂O₆', w * 0.15, h * 0.4);
    this.drawArrow(ctx, w * 0.28, h * 0.42, w * 0.38, h * 0.48);
    
    ctx.fillText('6 O₂', w * 0.15, h * 0.6);
    this.drawArrow(ctx, w * 0.22, h * 0.6, w * 0.38, h * 0.55);
    
    // Outputs
    ctx.fillText('6 CO₂', w * 0.7, h * 0.4);
    this.drawArrow(ctx, w * 0.62, h * 0.48, w * 0.68, h * 0.42);
    
    ctx.fillText('6 H₂O', w * 0.7, h * 0.6);
    this.drawArrow(ctx, w * 0.62, h * 0.55, w * 0.68, h * 0.6);
    
    ctx.fillText('ATP (Energy)', w * 0.65, h * 0.75);
    this.drawArrow(ctx, w * 0.5, h * 0.62, w * 0.62, h * 0.73);
  }

  static drawDecomposition(ctx, w, h) {
    // Dead organism
    ctx.fillStyle = '#8B4513';
    ctx.fillRect(w * 0.3, h * 0.3, w * 0.15, h * 0.1);
    ctx.fillStyle = '#000';
    ctx.font = `${h * 0.03}px Arial`;
    ctx.fillText('Dead Organic Matter', w * 0.25, h * 0.25);
    
    // Decomposers
    ctx.fillStyle = '#85144b';
    for(let i = 0; i < 6; i++) {
      const x = w * (0.3 + Math.random() * 0.15);
      const y = h * (0.5 + Math.random() * 0.1);
      ctx.beginPath();
      ctx.arc(x, y, w * 0.01, 0, Math.PI * 2);
      ctx.fill();
    }
    ctx.fillStyle = '#000';
    ctx.fillText('Decomposers (Bacteria, Fungi)', w * 0.22, h * 0.7);
    
    // CO2 release
    for(let i = 0; i < 5; i++) {
      this.drawCO2Molecule(ctx, w * (0.5 + i * 0.08), h * (0.2 - i * 0.02), w * 0.02);
      if(i < 3) {
        this.drawArrow(ctx, w * (0.35 + i * 0.05), h * 0.4, w * (0.5 + i * 0.08), h * 0.25);
      }
    }
    ctx.fillText('CO₂ Released', w * 0.65, h * 0.15);
    
    // Nutrients to soil
    ctx.fillStyle = '#654321';
    ctx.fillRect(0, h * 0.8, w, h * 0.2);
    ctx.fillStyle = '#FFF';
    ctx.fillText('Nutrients Return to Soil', w * 0.35, h * 0.9);
    this.drawArrow(ctx, w * 0.37, h * 0.6, w * 0.37, h * 0.78);
  }

  static drawCombustion(ctx, w, h) {
    // Fossil fuel
    ctx.fillStyle = '#333';
    ctx.fillRect(w * 0.2, h * 0.5, w * 0.15, h * 0.15);
    ctx.fillStyle = '#FFF';
    ctx.font = `${h * 0.025}px Arial`;
    ctx.fillText('Fossil Fuels', w * 0.22, h * 0.58);
    ctx.fillText('(Coal, Oil, Gas)', w * 0.2, h * 0.62);
    
    // Fire
    ctx.fillStyle = '#FF4500';
    ctx.beginPath();
    ctx.moveTo(w * 0.5, h * 0.5);
    ctx.lineTo(w * 0.48, h * 0.35);
    ctx.lineTo(w * 0.5, h * 0.4);
    ctx.lineTo(w * 0.52, h * 0.35);
    ctx.closePath();
    ctx.fill();
    
    ctx.fillStyle = '#FFD700';
    ctx.beginPath();
    ctx.moveTo(w * 0.5, h * 0.5);
    ctx.lineTo(w * 0.49, h * 0.4);
    ctx.lineTo(w * 0.5, h * 0.43);
    ctx.lineTo(w * 0.51, h * 0.4);
    ctx.closePath();
    ctx.fill();
    
    ctx.fillStyle = '#000';
    ctx.font = `${h * 0.03}px Arial`;
    ctx.fillText('Combustion', w * 0.45, h * 0.3);
    
    // O2 input
    ctx.fillText('O₂', w * 0.35, h * 0.45);
    this.drawArrow(ctx, w * 0.38, h * 0.46, w * 0.47, h * 0.5);
    
    // CO2 output
    for(let i = 0; i < 8; i++) {
      this.drawCO2Molecule(ctx, w * (0.55 + i * 0.05), h * (0.15 + Math.random() * 0.1), w * 0.015);
    }
    this.drawArrow(ctx, w * 0.52, h * 0.4, w * 0.6, h * 0.22);
    ctx.fillText('CO₂ Emissions', w * 0.65, h * 0.18);
    
    // Energy output
    ctx.fillStyle = '#FFD700';
    for(let i = 0; i < 5; i++) {
      ctx.beginPath();
      ctx.arc(w * (0.6 + i * 0.04), h * 0.55, w * 0.015, 0, Math.PI * 2);
      ctx.fill();
    }
    ctx.fillStyle = '#000';
    ctx.fillText('Energy (Heat, Electricity)', w * 0.62, h * 0.65);
  }

  static drawOceanAbsorption(ctx, w, h) {
    // Atmosphere
    ctx.fillStyle = 'rgba(135, 206, 250, 0.3)';
    ctx.fillRect(0, 0, w, h * 0.4);
    
    // CO2 in atmosphere
    ctx.fillStyle = '#000';
    ctx.font = `${h * 0.03}px Arial`;
    ctx.fillText('Atmospheric CO₂', w * 0.4, h * 0.15);
    for(let i = 0; i < 12; i++) {
      this.drawCO2Molecule(ctx, w * (0.1 + Math.random() * 0.8), h * (0.05 + Math.random() * 0.25), w * 0.015);
    }
    
    // Ocean surface
    ctx.fillStyle = 'rgba(0, 116, 217, 0.6)';
    ctx.fillRect(0, h * 0.4, w, h * 0.6);
    
    // Water line
    ctx.strokeStyle = '#0074D9';
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.moveTo(0, h * 0.4);
    for(let i = 0; i < 10; i++) {
      ctx.lineTo(i * w / 10, h * 0.4 + Math.sin(i) * h * 0.02);
    }
    ctx.stroke();
    
    // Absorption arrows
    for(let i = 0; i < 5; i++) {
      this.drawArrow(ctx, w * (0.2 + i * 0.15), h * 0.35, w * (0.2 + i * 0.15), h * 0.48);
    }
    ctx.fillStyle = '#FFF';
    ctx.fillText('CO₂ Dissolution', w * 0.4, h * 0.52);
    
    // Dissolved CO2
    ctx.fillStyle = 'rgba(255, 255, 255, 0.7)';
    for(let i = 0; i < 15; i++) {
      const x = w * (0.1 + Math.random() * 0.8);
      const y = h * (0.5 + Math.random() * 0.4);
      this.drawCO2Molecule(ctx, x, y, w * 0.012);
    }
    
    // Phytoplankton
    ctx.fillStyle = '#2ECC40';
    for(let i = 0; i < 8; i++) {
      const x = w * (0.15 + i * 0.1);
      const y = h * (0.55 + Math.random() * 0.15);
      ctx.beginPath();
      ctx.arc(x, y, w * 0.01, 0, Math.PI * 2);
      ctx.fill();
    }
    ctx.fillStyle = '#FFF';
    ctx.fillText('Phytoplankton (Photosynthesis)', w * 0.32, h * 0.75);
    
    // Deep ocean storage
    ctx.fillStyle = 'rgba(0, 50, 100, 0.8)';
    ctx.fillRect(0, h * 0.85, w, h * 0.15);
    ctx.fillStyle = '#FFF';
    ctx.font = `${h * 0.025}px Arial`;
    ctx.fillText('Deep Ocean Carbon Storage', w * 0.35, h * 0.93);
  }

  static drawCO2Molecule(ctx, x, y, size) {
    // Carbon atom (center)
    ctx.fillStyle = '#333';
    ctx.beginPath();
    ctx.arc(x, y, size, 0, Math.PI * 2);
    ctx.fill();
    
    // Oxygen atoms
    ctx.fillStyle = '#E74C3C';
    ctx.beginPath();
    ctx.arc(x - size * 2, y, size * 0.8, 0, Math.PI * 2);
    ctx.fill();
    
    ctx.beginPath();
    ctx.arc(x + size * 2, y, size * 0.8, 0, Math.PI * 2);
    ctx.fill();
    
    // Bonds
    ctx.strokeStyle = '#000';
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(x - size, y);
    ctx.lineTo(x - size * 1.2, y);
    ctx.moveTo(x + size, y);
    ctx.lineTo(x + size * 1.2, y);
    ctx.stroke();
  }

  // ===== FOOD CHAIN DIAGRAMS =====
  static drawFoodChain(ctx, x, y, width, height, ecosystem, length) {
    ctx.save();
    ctx.translate(x, y);
    
    switch(length) {
      case 'simple':
        this.drawSimpleFoodChain(ctx, width, height, ecosystem);
        break;
      case 'extended':
        this.drawExtendedFoodChain(ctx, width, height, ecosystem);
        break;
      case 'detrital':
        this.drawDetritalFoodChain(ctx, width, height, ecosystem);
        break;
    }
    
    ctx.restore();
  }

  static drawSimpleFoodChain(ctx, w, h, ecosystem) {
    const chain = ecosystem === 'aquatic' ? 
      ['Phytoplankton', 'Zooplankton', 'Small Fish', 'Large Fish'] :
      ['Grass', 'Grasshopper', 'Frog', 'Snake'];
    
    const colors = ['#2ECC40', '#FF851B', '#0074D9', '#B10DC9'];
    const energyValues = ['10,000 kJ', '1,000 kJ', '100 kJ', '10 kJ'];
    
    chain.forEach((organism, idx) => {
      const y = h * (0.15 + idx * 0.2);
      
      // Organism box
      const gradient = ctx.createLinearGradient(w * 0.2, y, w * 0.8, y);
      gradient.addColorStop(0, colors[idx]);
      gradient.addColorStop(1, this.darkenColor(colors[idx]));
      
      ctx.fillStyle = gradient;
      ctx.fillRect(w * 0.2, y - h * 0.06, w * 0.6, h * 0.12);
      
      ctx.strokeStyle = '#000';
      ctx.lineWidth = 2;
      ctx.strokeRect(w * 0.2, y - h * 0.06, w * 0.6, h * 0.12);
      
      // Label
      ctx.fillStyle = '#000';
      ctx.font = `bold ${h * 0.035}px Arial`;
      ctx.textAlign = 'center';
      ctx.fillText(organism, w * 0.5, y);
      
      // Energy value
      ctx.font = `${h * 0.025}px Arial`;
      ctx.fillText(energyValues[idx], w * 0.5, y + h * 0.04);
      
      // Arrow to next level
      if(idx < chain.length - 1) {
        ctx.strokeStyle = '#000';
        ctx.fillStyle = '#000';
        ctx.lineWidth = 3;
        const arrowY = y + h * 0.08;
        const nextY = h * (0.15 + (idx + 1) * 0.2) - h * 0.08;
        
        ctx.beginPath();
        ctx.moveTo(w * 0.5, arrowY);
        ctx.lineTo(w * 0.5, nextY);
        ctx.stroke();
        
        // Arrowhead
        ctx.beginPath();
        ctx.moveTo(w * 0.5, nextY);
        ctx.lineTo(w * 0.48, nextY - h * 0.02);
        ctx.lineTo(w * 0.52, nextY - h * 0.02);
        ctx.closePath();
        ctx.fill();
        
        // 10% rule label
        ctx.font = `${h * 0.02}px Arial`;
        ctx.fillText('10%', w * 0.55, (arrowY + nextY) / 2);
      }
    });
    
    // Sun
    ctx.fillStyle = '#FFD700';
    ctx.beginPath();
    ctx.arc(w * 0.1, h * 0.05, w * 0.04, 0, Math.PI * 2);
    ctx.fill();
    
    // Sun rays to producer
    ctx.strokeStyle = '#FFD700';
    ctx.lineWidth = 2;
    for(let i = 0; i < 3; i++) {
      ctx.beginPath();
      ctx.moveTo(w * 0.1, h * 0.05);
      ctx.lineTo(w * (0.15 + i * 0.05), h * 0.13);
      ctx.stroke();
    }
  }

  static drawExtendedFoodChain(ctx, w, h, ecosystem) {
    const chain = ecosystem === 'marine' ? 
      ['Phytoplankton', 'Krill', 'Small Fish', 'Medium Fish', 'Large Fish', 'Shark'] :
      ['Plants', 'Caterpillar', 'Mouse', 'Snake', 'Hawk', 'Eagle'];
    
    const colors = ['#2ECC40', '#FFDC00', '#FF851B', '#0074D9', '#B10DC9', '#85144b'];
    
    chain.forEach((organism, idx) => {
      const y = h * (0.1 + idx * 0.14);
      
      const gradient = ctx.createRadialGradient(w * 0.5, y, 0, w * 0.5, y, w * 0.15);
      gradient.addColorStop(0, colors[idx]);
      gradient.addColorStop(1, this.darkenColor(colors[idx]));
      
      ctx.fillStyle = gradient;
      ctx.beginPath();
      ctx.ellipse(w * 0.5, y, w * 0.12, h * 0.06, 0, 0, Math.PI * 2);
      ctx.fill();
      
      ctx.strokeStyle = '#000';
      ctx.lineWidth = 2;
      ctx.stroke();
      
      ctx.fillStyle = '#000';
      ctx.font = `${h * 0.03}px Arial`;
      ctx.textAlign = 'center';
      ctx.fillText(organism, w * 0.5, y + h * 0.01);
      
      // Trophic level label
      const levels = ['Producer', 'Primary Consumer', 'Secondary Consumer', 'Tertiary Consumer', 'Quaternary Consumer', 'Apex Predator'];
      ctx.font = `${h * 0.02}px Arial`;
      ctx.fillText(levels[idx], w * 0.5, y - h * 0.05);
      
      // Arrow
      if(idx < chain.length - 1) {
        this.drawArrow(ctx, w * 0.5, y + h * 0.07, w * 0.5, h * (0.1 + (idx + 1) * 0.14) - h * 0.07);
      }
    });
  }

  static drawDetritalFoodChain(ctx, w, h, ecosystem) {
    // Dead organic matter at top
    ctx.fillStyle = '#8B4513';
    ctx.fillRect(w * 0.3, h * 0.1, w * 0.4, h * 0.08);
    ctx.strokeStyle = '#000';
    ctx.lineWidth = 2;
    ctx.strokeRect(w * 0.3, h * 0.1, w * 0.4, h * 0.08);
    ctx.fillStyle = '#000';
    ctx.font = `${h * 0.03}px Arial`;
    ctx.textAlign = 'center';
    ctx.fillText('Dead Organic Matter (Detritus)', w * 0.5, h * 0.15);
    
    const chain = ['Detritivores', 'Predators', 'Top Predators'];
    const organisms = [
      'Earthworms, Millipedes',
      'Beetles, Centipedes',
      'Birds, Small Mammals'
    ];
    const colors = ['#A0522D', '#FF6347', '#8B008B'];
    
    chain.forEach((level, idx) => {
      const y = h * (0.35 + idx * 0.25);
      
      ctx.fillStyle = colors[idx];
      ctx.fillRect(w * 0.25, y - h * 0.08, w * 0.5, h * 0.16);
      ctx.strokeStyle = '#000';
      ctx.lineWidth = 2;
      ctx.strokeRect(w * 0.25, y - h * 0.08, w * 0.5, h * 0.16);
      
      ctx.fillStyle = '#FFF';
      ctx.font = `bold ${h * 0.035}px Arial`;
      ctx.fillText(level, w * 0.5, y - h * 0.02);
      ctx.font = `${h * 0.025}px Arial`;
      ctx.fillText(organisms[idx], w * 0.5, y + h * 0.03);
      
      // Arrow from detritus to first level
      if(idx === 0) {
        this.drawArrow(ctx, w * 0.5, h * 0.2, w * 0.5, h * 0.25);
      }
      
      // Arrows between levels
      if(idx < chain.length - 1) {
        this.drawArrow(ctx, w * 0.5, y + h * 0.1, w * 0.5, h * (0.35 + (idx + 1) * 0.25) - h * 0.1);
      }
    });
    
    // Decomposers returning nutrients
    ctx.fillStyle = '#85144b';
    ctx.beginPath();
    ctx.ellipse(w * 0.15, h * 0.55, w * 0.08, h * 0.08, 0, 0, Math.PI * 2);
    ctx.fill();
    ctx.strokeStyle = '#000';
    ctx.lineWidth = 2;
    ctx.stroke();
    
    ctx.fillStyle = '#FFF';
    ctx.font = `${h * 0.025}px Arial`;
    ctx.textAlign = 'center';
    ctx.fillText('Decomposers', w * 0.15, h * 0.55);
    
    // Arrow from decomposers back to detritus
    ctx.strokeStyle = '#000';
    ctx.setLineDash([5, 5]);
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(w * 0.15, h * 0.47);
    ctx.quadraticCurveTo(w * 0.08, h * 0.3, w * 0.28, h * 0.18);
    ctx.stroke();
    ctx.setLineDash([]);
  }

  static darkenColor(color) {
    const hex = color.replace('#', '');
    const r = Math.max(0, parseInt(hex.substr(0, 2), 16) - 40);
    const g = Math.max(0, parseInt(hex.substr(2, 2), 16) - 40);
    const b = Math.max(0, parseInt(hex.substr(4, 2), 16) - 40);
    return `#${r.toString(16).padStart(2, '0')}${g.toString(16).padStart(2, '0')}${b.toString(16).padStart(2, '0')}`;
  }

  // ===== ENERGY PYRAMID DIAGRAMS =====
  static drawEnergyPyramid(ctx, x, y, width, height, type, ecosystem) {
    ctx.save();
    ctx.translate(x, y);
    
    switch(type) {
      case 'energy':
        this.drawEnergyPyramidDiagram(ctx, width, height, ecosystem);
        break;
      case 'biomass':
        this.drawBiomassPyramid(ctx, width, height, ecosystem);
        break;
      case 'numbers':
        this.drawNumbersPyramid(ctx, width, height, ecosystem);
        break;
    }
    
    ctx.restore();
  }

  static drawEnergyPyramidDiagram(ctx, w, h, ecosystem) {
    const levels = [
      { name: 'Producers', energy: '10,000', percent: '100%', color: '#2ECC40', width: 0.8 },
      { name: 'Primary Consumers', energy: '1,000', percent: '10%', color: '#FF851B', width: 0.6 },
      { name: 'Secondary Consumers', energy: '100', percent: '1%', color: '#0074D9', width: 0.4 },
      { name: 'Tertiary Consumers', energy: '10', percent: '0.1%', color: '#B10DC9', width: 0.2 }
    ];
    
    levels.forEach((level, idx) => {
      const yPos = h * (0.7 - idx * 0.2);
      const levelWidth = w * level.width;
      const levelHeight = h * 0.18;
      const xPos = (w - levelWidth) / 2;
      
      // Create gradient for 3D effect
      const gradient = ctx.createLinearGradient(xPos, yPos, xPos + levelWidth, yPos);
      gradient.addColorStop(0, level.color);
      gradient.addColorStop(0.5, this.lightenColor(level.color));
      gradient.addColorStop(1, level.color);
      
      ctx.fillStyle = gradient;
      ctx.fillRect(xPos, yPos, levelWidth, levelHeight);
      
      // Border
      ctx.strokeStyle = this.darkenColor(level.color);
      ctx.lineWidth = 3;
      ctx.strokeRect(xPos, yPos, levelWidth, levelHeight);
      
      // 3D effect - side faces
      ctx.fillStyle = this.darkenColor(level.color);
      ctx.beginPath();
      ctx.moveTo(xPos + levelWidth, yPos);
      ctx.lineTo(xPos + levelWidth + w * 0.03, yPos - h * 0.03);
      ctx.lineTo(xPos + levelWidth + w * 0.03, yPos + levelHeight - h * 0.03);
      ctx.lineTo(xPos + levelWidth, yPos + levelHeight);
      ctx.closePath();
      ctx.fill();
      ctx.stroke();
      
      // Top face
      ctx.fillStyle = this.lightenColor(level.color);
      ctx.beginPath();
      ctx.moveTo(xPos, yPos);
      ctx.lineTo(xPos + w * 0.03, yPos - h * 0.03);
      ctx.lineTo(xPos + levelWidth + w * 0.03, yPos - h * 0.03);
      ctx.lineTo(xPos + levelWidth, yPos);
      ctx.closePath();
      ctx.fill();
      ctx.stroke();
      
      // Text
      ctx.fillStyle = '#000';
      ctx.font = `bold ${h * 0.03}px Arial`;
      ctx.textAlign = 'center';
      ctx.fillText(level.name, w / 2, yPos + levelHeight / 2 - h * 0.01);
      
      ctx.font = `${h * 0.025}px Arial`;
      ctx.fillText(`${level.energy} kJ (${level.percent})`, w / 2, yPos + levelHeight / 2 + h * 0.025);
    });
    
    // Title
    ctx.fillStyle = '#000';
    ctx.font = `bold ${h * 0.04}px Arial`;
    ctx.textAlign = 'center';
    ctx.fillText('Energy Pyramid (10% Rule)', w / 2, h * 0.05);
    
    // Energy loss labels
    for(let i = 0; i < 3; i++) {
      const yPos = h * (0.6 - i * 0.2);
      ctx.fillStyle = '#E74C3C';
      ctx.font = `italic ${h * 0.02}px Arial`;
      ctx.textAlign = 'left';
      ctx.fillText('90% lost as heat', w * 0.85, yPos);
    }
  }

  static drawBiomassPyramid(ctx, w, h, ecosystem) {
    const levels = [
      { name: 'Producers', biomass: '10,000 kg', color: '#2ECC40', width: 0.8 },
      { name: 'Herbivores', biomass: '1,000 kg', color: '#FF851B', width: 0.6 },
      { name: 'Small Carnivores', biomass: '100 kg', color: '#0074D9', width: 0.4 },
      { name: 'Large Carnivores', biomass: '10 kg', color: '#B10DC9', width: 0.2 }
    ];
    
    levels.forEach((level, idx) => {
      const yPos = h * (0.7 - idx * 0.2);
      const levelWidth = w * level.width;
      const levelHeight = h * 0.18;
      const xPos = (w - levelWidth) / 2;
      
      ctx.fillStyle = level.color;
      ctx.fillRect(xPos, yPos, levelWidth, levelHeight);
      
      ctx.strokeStyle = '#000';
      ctx.lineWidth = 2;
      ctx.strokeRect(xPos, yPos, levelWidth, levelHeight);
      
      ctx.fillStyle = '#FFF';
      ctx.font = `bold ${h * 0.028}px Arial`;
      ctx.textAlign = 'center';
      ctx.fillText(level.name, w / 2, yPos + levelHeight / 2 - h * 0.01);
      ctx.font = `${h * 0.023}px Arial`;
      ctx.fillText(level.biomass, w / 2, yPos + levelHeight / 2 + h * 0.02);
    });
    
    ctx.fillStyle = '#000';
    ctx.font = `bold ${h * 0.04}px Arial`;
    ctx.fillText('Biomass Pyramid', w / 2, h * 0.05);
  }

  static drawNumbersPyramid(ctx, w, h, ecosystem) {
    const levels = [
      { name: 'Grass Plants', count: '1,000,000', color: '#2ECC40', width: 0.8 },
      { name: 'Grasshoppers', count: '10,000', color: '#FF851B', width: 0.6 },
      { name: 'Frogs', count: '100', color: '#0074D9', width: 0.4 },
      { name: 'Snakes', count: '10', color: '#B10DC9', width: 0.25 },
      { name: 'Hawks', count: '1', color: '#85144b', width: 0.12 }
    ];
    
    levels.forEach((level, idx) => {
      const yPos = h * (0.75 - idx * 0.16);
      const levelWidth = w * level.width;
      const levelHeight = h * 0.14;
      const xPos = (w - levelWidth) / 2;
      
      const gradient = ctx.createLinearGradient(xPos, yPos, xPos, yPos + levelHeight);
      gradient.addColorStop(0, this.lightenColor(level.color));
      gradient.addColorStop(1, level.color);
      
      ctx.fillStyle = gradient;
      ctx.fillRect(xPos, yPos, levelWidth, levelHeight);
      
      ctx.strokeStyle = this.darkenColor(level.color);
      ctx.lineWidth = 2;
      ctx.strokeRect(xPos, yPos, levelWidth, levelHeight);
      
      ctx.fillStyle = '#000';
      ctx.font = `bold ${h * 0.025}px Arial`;
      ctx.textAlign = 'center';
      ctx.fillText(level.name, w / 2, yPos + levelHeight / 2 - h * 0.008);
      ctx.font = `${h * 0.022}px Arial`;
      ctx.fillText(level.count + ' individuals', w / 2, yPos + levelHeight / 2 + h * 0.018);
    });
    
    ctx.fillStyle = '#000';
    ctx.font = `bold ${h * 0.04}px Arial`;
    ctx.fillText('Pyramid of Numbers', w / 2, h * 0.05);
  }

  static lightenColor(color) {
    const hex = color.replace('#', '');
    const r = Math.min(255, parseInt(hex.substr(0, 2), 16) + 40);
    const g = Math.min(255, parseInt(hex.substr(2, 2), 16) + 40);
    const b = Math.min(255, parseInt(hex.substr(4, 2), 16) + 40);
    return `#${r.toString(16).padStart(2, '0')}${g.toString(16).padStart(2, '0')}${b.toString(16).padStart(2, '0')}`;
  }

  // ===== NITROGEN CYCLE DIAGRAMS =====
  static drawNitrogenCycle(ctx, x, y, width, height, process, organism) {
    ctx.save();
    ctx.translate(x, y);
    
    switch(process) {
      case 'complete':
        this.drawCompleteNitrogenCycle(ctx, width, height, organism);
        break;
      case 'fixation':
        this.drawNitrogenFixation(ctx, width, height);
        break;
      case 'nitrification':
        this.drawNitrification(ctx, width, height);
        break;
      case 'assimilation':
        this.drawAssimilation(ctx, width, height);
        break;
      case 'denitrification':
        this.drawDenitrification(ctx, width, height);
        break;
    }
    
    ctx.restore();
  }

  static drawCompleteNitrogenCycle(ctx, w, h, organism) {
    // Atmosphere
    ctx.fillStyle = 'rgba(135, 206, 250, 0.3)';
    ctx.fillRect(0, 0, w, h * 0.35);
    ctx.fillStyle = '#000';
    ctx.font = `${h * 0.035}px Arial`;
    ctx.textAlign = 'center';
    ctx.fillText('Atmosphere', w * 0.5, h * 0.08);
    ctx.font = `bold ${h * 0.045}px Arial`;
    ctx.fillText('N₂ (78%)', w * 0.5, h * 0.18);
    
    // Central soil area
    ctx.fillStyle = 'rgba(139, 69, 19, 0.3)';
    ctx.fillRect(0, h * 0.35, w, h * 0.65);
    
    // Key nitrogen forms in soil
    const nitrogenForms = [
      { x: 0.25, y: 0.5, label: 'NH₃\nAmmonia', color: '#FF6B6B' },
      { x: 0.5, y: 0.5, label: 'NO₂⁻\nNitrite', color: '#4ECDC4' },
      { x: 0.75, y: 0.5, label: 'NO₃⁻\nNitrate', color: '#95E1D3' },
      { x: 0.5, y: 0.7, label: 'Organic N\n(Proteins)', color: '#2ECC40' }
    ];
    
    nitrogenForms.forEach(form => {
      ctx.fillStyle = form.color;
      ctx.beginPath();
      ctx.arc(w * form.x, h * form.y, w * 0.06, 0, Math.PI * 2);
      ctx.fill();
      ctx.strokeStyle = '#000';
      ctx.lineWidth = 2;
      ctx.stroke();
      
      ctx.fillStyle = '#000';
      ctx.font = `bold ${h * 0.022}px Arial`;
      ctx.textAlign = 'center';
      const lines = form.label.split('\n');
      lines.forEach((line, idx) => {
        ctx.fillText(line, w * form.x, h * form.y - h * 0.01 + idx * h * 0.025);
      });
    });
    
    // Process 1: Nitrogen Fixation
    ctx.strokeStyle = '#0074D9';
    ctx.lineWidth = 4;
    this.drawCurvedArrow(ctx, w * 0.3, h * 0.35, w * 0.25, h * 0.44);
    ctx.fillStyle = '#0074D9';
    ctx.font = `bold ${h * 0.02}px Arial`;
    ctx.fillText('Nitrogen Fixation', w * 0.15, h * 0.4);
    
    // Nitrogen-fixing bacteria
    ctx.fillStyle = '#8B008B';
    for(let i = 0; i < 5; i++) {
      ctx.beginPath();
      ctx.arc(w * (0.28 + Math.random() * 0.06), h * (0.38 + Math.random() * 0.04), w * 0.006, 0, Math.PI * 2);
      ctx.fill();
    }
    ctx.fillStyle = '#000';
    ctx.font = `italic ${h * 0.018}px Arial`;
    ctx.fillText('(Bacteria)', w * 0.15, h * 0.43);
    
    // Process 2: Nitrification (NH3 -> NO2 -> NO3)
    ctx.strokeStyle = '#FF6347';
    ctx.lineWidth = 4;
    this.drawCurvedArrow(ctx, w * 0.31, h * 0.5, w * 0.44, h * 0.5);
    this.drawCurvedArrow(ctx, w * 0.56, h * 0.5, w * 0.69, h * 0.5);
    
    ctx.fillStyle = '#FF6347';
    ctx.font = `bold ${h * 0.02}px Arial`;
    ctx.fillText('Nitrification', w * 0.37, h * 0.45);
    
    // Nitrifying bacteria
    ctx.fillStyle = '#8B008B';
    for(let i = 0; i < 4; i++) {
      ctx.beginPath();
      ctx.arc(w * (0.36 + i * 0.015), h * 0.48, w * 0.005, 0, Math.PI * 2);
      ctx.fill();
    }
    ctx.fillStyle = '#000';
    ctx.font = `italic ${h * 0.016}px Arial`;
    ctx.fillText('Nitrosomonas', w * 0.37, h * 0.54);
    ctx.fillText('Nitrobacter', w * 0.63, h * 0.54);
    
    // Process 3: Assimilation (plants uptake)
    ctx.strokeStyle = '#2ECC40';
    ctx.lineWidth = 4;
    this.drawCurvedArrow(ctx, w * 0.75, h * 0.56, w * 0.5, h * 0.64);
    
    ctx.fillStyle = '#2ECC40';
    ctx.font = `bold ${h * 0.02}px Arial`;
    ctx.fillText('Plant Uptake', w * 0.65, h * 0.6);
    ctx.fillText('(Assimilation)', w * 0.65, h * 0.63);
    
    // Plants
    ctx.fillStyle = '#2ECC40';
    ctx.fillRect(w * 0.45, h * 0.7, w * 0.02, h * 0.08);
    ctx.beginPath();
    ctx.arc(w * 0.46, h * 0.68, w * 0.03, 0, Math.PI * 2);
    ctx.fill();
    
    // Process 4: Ammonification (decomposition)
    ctx.strokeStyle = '#A0522D';
    ctx.lineWidth = 4;
    this.drawCurvedArrow(ctx, w * 0.44, h * 0.7, w * 0.25, h * 0.56);
    
    ctx.fillStyle = '#A0522D';
    ctx.font = `bold ${h * 0.02}px Arial`;
    ctx.fillText('Ammonification', w * 0.32, h * 0.65);
    ctx.fillStyle = '#000';
    ctx.font = `italic ${h * 0.016}px Arial`;
    ctx.fillText('(Decomposers)', w * 0.32, h * 0.68);
    
    // Process 5: Denitrification (back to atmosphere)
    ctx.strokeStyle = '#E74C3C';
    ctx.lineWidth = 4;
    this.drawCurvedArrow(ctx, w * 0.75, h * 0.44, w * 0.7, h * 0.35);
    
    ctx.fillStyle = '#E74C3C';
    ctx.font = `bold ${h * 0.02}px Arial`;
    ctx.fillText('Denitrification', w * 0.8, h * 0.4);
    
    // Denitrifying bacteria
    ctx.fillStyle = '#8B008B';
    for(let i = 0; i < 5; i++) {
      ctx.beginPath();
      ctx.arc(w * (0.72 + Math.random() * 0.05), h * (0.38 + Math.random() * 0.04), w * 0.006, 0, Math.PI * 2);
      ctx.fill();
    }
    
    // Legend
    ctx.fillStyle = '#000';
    ctx.font = `bold ${h * 0.025}px Arial`;
    ctx.textAlign = 'left';
    ctx.fillText('Key:', w * 0.02, h * 0.88);
    ctx.font = `${h * 0.02}px Arial`;
    ctx.fillText('• Purple dots = Bacteria', w * 0.02, h * 0.92);
    ctx.fillText('• Arrows show nitrogen transformation', w * 0.02, h * 0.96);
  }

  static drawNitrogenFixation(ctx, w, h) {
    // Atmospheric N2
    ctx.fillStyle = 'rgba(135, 206, 250, 0.5)';
    ctx.fillRect(0, 0, w, h * 0.4);
    
    ctx.fillStyle = '#000';
    ctx.font = `bold ${h * 0.05}px Arial`;
    ctx.textAlign = 'center';
    ctx.fillText('N₂ (Atmospheric Nitrogen)', w * 0.5, h * 0.2);
    
    // Draw N2 molecules
    for(let i = 0; i < 8; i++) {
      const x = w * (0.2 + Math.random() * 0.6);
      const y = h * (0.05 + Math.random() * 0.25);
      this.drawN2Molecule(ctx, x, y, w * 0.025);
    }
    
    // Lightning (atmospheric fixation)
    ctx.strokeStyle = '#FFD700';
    ctx.lineWidth = 4;
    ctx.beginPath();
    ctx.moveTo(w * 0.2, h * 0.1);
    ctx.lineTo(w * 0.18, h * 0.25);
    ctx.lineTo(w * 0.22, h * 0.25);
    ctx.lineTo(w * 0.19, h * 0.4);
    ctx.stroke();
    
    ctx.fillStyle = '#000';
    ctx.font = `${h * 0.025}px Arial`;
    ctx.fillText('Lightning', w * 0.2, h * 0.45);
    
    // Nitrogen-fixing bacteria in soil
    ctx.fillStyle = 'rgba(139, 69, 19, 0.4)';
    ctx.fillRect(0, h * 0.5, w, h * 0.5);
    
    // Root nodules with bacteria
    ctx.fillStyle = '#2ECC40';
    ctx.fillRect(w * 0.45, h * 0.5, w * 0.04, h * 0.15);
    
    // Draw root nodules
    for(let i = 0; i < 4; i++) {
      const noduleX = w * (0.43 + Math.random() * 0.08);
      const noduleY = h * (0.6 + i * 0.06);
      
      ctx.fillStyle = '#FFA07A';
      ctx.beginPath();
      ctx.ellipse(noduleX, noduleY, w * 0.02, h * 0.025, 0, 0, Math.PI * 2);
      ctx.fill();
      
      ctx.strokeStyle = '#000';
      ctx.lineWidth = 1;
      ctx.stroke();
      
      // Rhizobium bacteria inside
      ctx.fillStyle = '#8B008B';
      for(let j = 0; j < 3; j++) {
        ctx.beginPath();
        ctx.arc(
          noduleX + (Math.random() - 0.5) * w * 0.015,
          noduleY + (Math.random() - 0.5) * h * 0.015,
          w * 0.003,
          0,
          Math.PI * 2
        );
        ctx.fill();
      }
    }
    
    ctx.fillStyle = '#000';
    ctx.font = `bold ${h * 0.03}px Arial`;
    ctx.textAlign = 'center';
    ctx.fillText('Root Nodules', w * 0.47, h * 0.92);
    ctx.font = `${h * 0.025}px Arial`;
    ctx.fillText('(Rhizobium bacteria)', w * 0.47, h * 0.96);
    
    // Free-living bacteria
    ctx.fillStyle = '#8B008B';
    for(let i = 0; i < 12; i++) {
      ctx.beginPath();
      ctx.arc(
        w * (0.65 + Math.random() * 0.25),
        h * (0.55 + Math.random() * 0.35),
        w * 0.008,
        0,
        Math.PI * 2
      );
      ctx.fill();
    }
    
    ctx.fillStyle = '#000';
    ctx.font = `${h * 0.025}px Arial`;
    ctx.fillText('Free-living bacteria', w * 0.77, h * 0.7);
    ctx.font = `${h * 0.02}px Arial`;
    ctx.fillText('(Azotobacter, Cyanobacteria)', w * 0.77, h * 0.74);
    
    // Arrow showing conversion
    ctx.strokeStyle = '#0074D9';
    ctx.lineWidth = 5;
    this.drawCurvedArrow(ctx, w * 0.5, h * 0.42, w * 0.5, h * 0.52);
    
    ctx.fillStyle = '#0074D9';
    ctx.font = `bold ${h * 0.028}px Arial`;
    ctx.fillText('N₂ → NH₃ (Ammonia)', w * 0.6, h * 0.48);
    
    // Ammonia in soil
    ctx.fillStyle = '#FF6B6B';
    ctx.beginPath();
    ctx.arc(w * 0.5, h * 0.8, w * 0.08, 0, Math.PI * 2);
    ctx.fill();
    ctx.strokeStyle = '#000';
    ctx.lineWidth = 2;
    ctx.stroke();
    
    ctx.fillStyle = '#000';
    ctx.font = `bold ${h * 0.035}px Arial`;
    ctx.fillText('NH₃', w * 0.5, h * 0.805);
  }

  static drawNitrification(ctx, w, h) {
    // Step 1: Ammonia to Nitrite
    ctx.fillStyle = '#FF6B6B';
    ctx.beginPath();
    ctx.arc(w * 0.2, h * 0.3, w * 0.1, 0, Math.PI * 2);
    ctx.fill();
    ctx.strokeStyle = '#000';
    ctx.lineWidth = 3;
    ctx.stroke();
    
    ctx.fillStyle = '#000';
    ctx.font = `bold ${h * 0.05}px Arial`;
    ctx.textAlign = 'center';
    ctx.fillText('NH₃', w * 0.2, h * 0.31);
    ctx.font = `${h * 0.025}px Arial`;
    ctx.fillText('Ammonia', w * 0.2, h * 0.42);
    
    // Nitrosomonas bacteria
    ctx.fillStyle = '#8B008B';
    for(let i = 0; i < 8; i++) {
      const angle = (i / 8) * Math.PI * 2;
      const bx = w * 0.4 + Math.cos(angle) * w * 0.08;
      const by = h * 0.3 + Math.sin(angle) * h * 0.06;
      ctx.beginPath();
      ctx.arc(bx, by, w * 0.012, 0, Math.PI * 2);
      ctx.fill();
    }
    
    ctx.fillStyle = '#000';
    ctx.font = `italic bold ${h * 0.028}px Arial`;
    ctx.fillText('Nitrosomonas', w * 0.4, h * 0.3);
    ctx.font = `${h * 0.02}px Arial`;
    ctx.fillText('(bacteria)', w * 0.4, h * 0.33);
    
    // Arrow 1
    ctx.strokeStyle = '#FF6347';
    ctx.lineWidth = 6;
    this.drawArrow(ctx, w * 0.3, h * 0.3, w * 0.5, h * 0.3);
    
    ctx.fillStyle = '#FF6347';
    ctx.font = `${h * 0.022}px Arial`;
    ctx.fillText('+ O₂', w * 0.4, h * 0.25);
    
    // Step 2: Nitrite
    ctx.fillStyle = '#4ECDC4';
    ctx.beginPath();
    ctx.arc(w * 0.6, h * 0.3, w * 0.1, 0, Math.PI * 2);
    ctx.fill();
    ctx.strokeStyle = '#000';
    ctx.lineWidth = 3;
    ctx.stroke();
    
    ctx.fillStyle = '#000';
    ctx.font = `bold ${h * 0.05}px Arial`;
    ctx.fillText('NO₂⁻', w * 0.6, h * 0.31);
    ctx.font = `${h * 0.025}px Arial`;
    ctx.fillText('Nitrite', w * 0.6, h * 0.42);
    
    // Nitrobacter bacteria
    ctx.fillStyle = '#8B008B';
    for(let i = 0; i < 8; i++) {
      const angle = (i / 8) * Math.PI * 2;
      const bx = w * 0.6 + Math.cos(angle) * w * 0.08;
      const by = h * 0.6 + Math.sin(angle) * h * 0.06;
      ctx.beginPath();
      ctx.arc(bx, by, w * 0.012, 0, Math.PI * 2);
      ctx.fill();
    }
    
    ctx.fillStyle = '#000';
    ctx.font = `italic bold ${h * 0.028}px Arial`;
    ctx.fillText('Nitrobacter', w * 0.6, h * 0.6);
    ctx.font = `${h * 0.02}px Arial`;
    ctx.fillText('(bacteria)', w * 0.6, h * 0.63);
    
    // Arrow 2
    ctx.strokeStyle = '#FF6347';
    ctx.lineWidth = 6;
    this.drawArrow(ctx, w * 0.6, h * 0.4, w * 0.6, h * 0.7);
    
    ctx.fillStyle = '#FF6347';
    ctx.font = `${h * 0.022}px Arial`;
    ctx.fillText('+ O₂', w * 0.68, h * 0.55);
    
    // Step 3: Nitrate
    ctx.fillStyle = '#95E1D3';
    ctx.beginPath();
    ctx.arc(w * 0.6, h * 0.85, w * 0.1, 0, Math.PI * 2);
    ctx.fill();
    ctx.strokeStyle = '#000';
    ctx.lineWidth = 3;
    ctx.stroke();
    
    ctx.fillStyle = '#000';
    ctx.font = `bold ${h * 0.05}px Arial`;
    ctx.fillText('NO₃⁻', w * 0.6, h * 0.86);
    ctx.font = `${h * 0.025}px Arial`;
    ctx.fillText('Nitrate', w * 0.6, h * 0.97);
    ctx.font = `${h * 0.02}px Arial`;
    ctx.fillText('(Usable by plants)', w * 0.6, h * 1.0);
    
    // Title
    ctx.fillStyle = '#000';
    ctx.font = `bold ${h * 0.04}px Arial`;
    ctx.fillText('Nitrification Process', w * 0.5, h * 0.08);
    
    // Energy note
    ctx.fillStyle = '#FFD700';
    ctx.font = `${h * 0.022}px Arial`;
    ctx.fillText('⚡ Energy released at each step', w * 0.2, h * 0.65);
  }

  static drawAssimilation(ctx, w, h) {
    // Soil with nitrate
    ctx.fillStyle = 'rgba(139, 69, 19, 0.4)';
    ctx.fillRect(0, h * 0.6, w, h * 0.4);
    
    // Nitrate ions in soil
    ctx.fillStyle = '#95E1D3';
    for(let i = 0; i < 12; i++) {
      const x = w * (0.1 + Math.random() * 0.8);
      const y = h * (0.65 + Math.random() * 0.25);
      ctx.beginPath();
      ctx.arc(x, y, w * 0.015, 0, Math.PI * 2);
      ctx.fill();
      
      ctx.fillStyle = '#000';
      ctx.font = `${h * 0.018}px Arial`;
      ctx.textAlign = 'center';
      ctx.fillText('NO₃⁻', x, y + h * 0.005);
      ctx.fillStyle = '#95E1D3';
    }
    
    ctx.fillStyle = '#000';
    ctx.font = `bold ${h * 0.03}px Arial`;
    ctx.textAlign = 'center';
    ctx.fillText('Soil Nitrate Pool', w * 0.5, h * 0.95);
    
    // Plant roots
    ctx.fillStyle = '#8B4513';
    ctx.lineWidth = 3;
    
    for(let i = 0; i < 5; i++) {
      ctx.beginPath();
      ctx.moveTo(w * (0.45 + i * 0.02), h * 0.5);
      ctx.quadraticCurveTo(
        w * (0.45 + i * 0.02), h * 0.65,
        w * (0.43 + i * 0.025), h * 0.75
      );
      ctx.stroke();
    }
    
    // Root hairs
    ctx.lineWidth = 1;
    for(let i = 0; i < 15; i++) {
      const rootX = w * (0.43 + Math.random() * 0.1);
      const rootY = h * (0.65 + Math.random() * 0.15);
      ctx.beginPath();
      ctx.moveTo(rootX, rootY);
      ctx.lineTo(rootX + w * 0.02, rootY + h * 0.03);
      ctx.stroke();
    }
    
    // Plant stem and leaves
    ctx.fillStyle = '#2ECC40';
    ctx.fillRect(w * 0.45, h * 0.2, w * 0.04, h * 0.3);
    
    // Leaves
    for(let i = 0; i < 3; i++) {
      ctx.beginPath();
      ctx.ellipse(
        w * (0.4 + i * 0.05),
        h * (0.25 + i * 0.08),
        w * 0.06,
        h * 0.04,
        -Math.PI / 6,
        0,
        Math.PI * 2
      );
      ctx.fill();
    }
    
    // Uptake arrows
    ctx.strokeStyle = '#0074D9';
    ctx.fillStyle = '#0074D9';
    ctx.lineWidth = 4;
    
    for(let i = 0; i < 3; i++) {
      const x = w * (0.42 + i * 0.03);
      this.drawArrow(ctx, x, h * 0.7, x, h * 0.58);
    }
    
    ctx.fillStyle = '#0074D9';
    ctx.font = `bold ${h * 0.025}px Arial`;
    ctx.textAlign = 'left';
    ctx.fillText('Uptake by roots', w * 0.55, h * 0.65);
    
    // Conversion inside plant
    ctx.fillStyle = '#2ECC40';
    ctx.beginPath();
    ctx.arc(w * 0.47, h * 0.35, w * 0.08, 0, Math.PI * 2);
    ctx.fill();
    ctx.strokeStyle = '#000';
    ctx.lineWidth = 2;
    ctx.stroke();
    
    ctx.fillStyle = '#000';
    ctx.font = `bold ${h * 0.022}px Arial`;
    ctx.textAlign = 'center';
    ctx.fillText('NO₃⁻ →', w * 0.47, h * 0.33);
    ctx.fillText('Amino Acids →', w * 0.47, h * 0.36);
    ctx.fillText('Proteins', w * 0.47, h * 0.39);
    
    // Title
    ctx.font = `bold ${h * 0.045}px Arial`;
    ctx.fillText('Nitrogen Assimilation', w * 0.5, h * 0.08);
    
    // Animals eating plants
    ctx.fillStyle = '#FF851B';
    ctx.beginPath();
    ctx.ellipse(w * 0.75, h * 0.35, w * 0.06, h * 0.05, 0, 0, Math.PI * 2);
    ctx.fill();
    ctx.strokeStyle = '#000';
    ctx.lineWidth = 2;
    ctx.stroke();
    
    ctx.fillStyle = '#000';
    ctx.font = `${h * 0.022}px Arial`;
    ctx.fillText('Herbivore', w * 0.75, h * 0.45);
    
    // Arrow from plant to animal
    ctx.strokeStyle = '#000';
    ctx.lineWidth = 3;
    this.drawArrow(ctx, w * 0.55, h * 0.28, w * 0.69, h * 0.33);
    
    ctx.fillStyle = '#000';
    ctx.font = `${h * 0.02}px Arial`;
    ctx.fillText('Consumption', w * 0.62, h * 0.28);
  }

  static drawDenitrification(ctx, w, h) {
    // Soil environment
    ctx.fillStyle = 'rgba(139, 69, 19, 0.5)';
    ctx.fillRect(0, h * 0.4, w, h * 0.6);
    
    ctx.fillStyle = '#000';
    ctx.font = `bold ${h * 0.03}px Arial`;
    ctx.textAlign = 'center';
    ctx.fillText('Anaerobic Soil Conditions', w * 0.5, h * 0.95);
    ctx.font = `${h * 0.022}px Arial`;
    ctx.fillText('(Waterlogged, low oxygen)', w * 0.5, h * 0.99);
    
    // Nitrate in soil
    ctx.fillStyle = '#95E1D3';
    ctx.beginPath();
    ctx.arc(w * 0.2, h * 0.6, w * 0.08, 0, Math.PI * 2);
    ctx.fill();
    ctx.strokeStyle = '#000';
    ctx.lineWidth = 3;
    ctx.stroke();
    
    ctx.fillStyle = '#000';
    ctx.font = `bold ${h * 0.045}px Arial`;
    ctx.fillText('NO₃⁻', w * 0.2, h * 0.61);
    ctx.font = `${h * 0.025}px Arial`;
    ctx.fillText('Nitrate', w * 0.2, h * 0.72);
    
    // Denitrifying bacteria
    ctx.fillStyle = '#8B008B';
    for(let i = 0; i < 10; i++) {
      const angle = (i / 10) * Math.PI * 2;
      const bx = w * 0.45 + Math.cos(angle) * w * 0.1;
      const by = h * 0.6 + Math.sin(angle) * h * 0.08;
      
      // Bacterial cell
      ctx.beginPath();
      ctx.ellipse(bx, by, w * 0.015, h * 0.01, angle, 0, Math.PI * 2);
      ctx.fill();
      
      // Flagella
      ctx.strokeStyle = '#8B008B';
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.moveTo(bx, by);
      ctx.quadraticCurveTo(
        bx + Math.cos(angle) * w * 0.02,
        by + Math.sin(angle) * h * 0.02,
        bx + Math.cos(angle) * w * 0.03,
        by + Math.sin(angle) * h * 0.025
      );
      ctx.stroke();
    }
    
    ctx.fillStyle = '#000';
    ctx.font = `italic bold ${h * 0.03}px Arial`;
    ctx.fillText('Denitrifying Bacteria', w * 0.45, h * 0.6);
    ctx.font = `${h * 0.02}px Arial`;
    ctx.fillText('(Pseudomonas, Clostridium)', w * 0.45, h * 0.64);
    
    // Intermediate steps
    const steps = [
      { x: 0.3, compound: 'NO₃⁻', name: 'Nitrate' },
      { x: 0.4, compound: 'NO₂⁻', name: 'Nitrite' },
      { x: 0.5, compound: 'NO', name: 'Nitric oxide' },
      { x: 0.6, compound: 'N₂O', name: 'Nitrous oxide' }
    ];
    
    steps.forEach((step, idx) => {
      ctx.fillStyle = 'rgba(255, 99, 71, 0.6)';
      ctx.beginPath();
      ctx.arc(w * step.x, h * 0.75, w * 0.045, 0, Math.PI * 2);
      ctx.fill();
      ctx.strokeStyle = '#000';
      ctx.lineWidth = 1.5;
      ctx.stroke();
      
      ctx.fillStyle = '#000';
      ctx.font = `bold ${h * 0.025}px Arial`;
      ctx.textAlign = 'center';
      ctx.fillText(step.compound, w * step.x, h * 0.755);
      ctx.font = `${h * 0.018}px Arial`;
      ctx.fillText(step.name, w * step.x, h * 0.82);
      
      if(idx < steps.length - 1) {
        ctx.strokeStyle = '#E74C3C';
        ctx.lineWidth = 3;
        this.drawArrow(ctx, w * step.x + w * 0.05, h * 0.75, w * steps[idx + 1].x - w * 0.05, h * 0.75);
      }
    });
    
    // Final product - N2 gas
    ctx.fillStyle = 'rgba(135, 206, 250, 0.4)';
    ctx.fillRect(0, 0, w, h * 0.4);
    
    ctx.fillStyle = '#0074D9';
    ctx.beginPath();
    ctx.arc(w * 0.7, h * 0.2, w * 0.1, 0, Math.PI * 2);
    ctx.fill();
    ctx.strokeStyle = '#000';
    ctx.lineWidth = 3;
    ctx.stroke();
    
    ctx.fillStyle = '#FFF';
    ctx.font = `bold ${h * 0.06}px Arial`;
    ctx.textAlign = 'center';
    ctx.fillText('N₂', w * 0.7, h * 0.22);
    
    ctx.fillStyle = '#000';
    ctx.font = `${h * 0.025}px Arial`;
    ctx.fillText('Nitrogen Gas', w * 0.7, h * 0.35);
    ctx.fillText('(Returns to atmosphere)', w * 0.7, h * 0.38);
    
    // Arrow from soil to atmosphere
    ctx.strokeStyle = '#E74C3C';
    ctx.lineWidth = 6;
    this.drawCurvedArrow(ctx, w * 0.62, h * 0.73, w * 0.68, h * 0.32);
    
    // N2 molecules escaping
    for(let i = 0; i < 6; i++) {
      const x = w * (0.65 + Math.random() * 0.15);
      const y = h * (0.05 + Math.random() * 0.3);
      this.drawN2Molecule(ctx, x, y, w * 0.02);
    }
    
    // Title
    ctx.fillStyle = '#000';
    ctx.font = `bold ${h * 0.045}px Arial`;
    ctx.fillText('Denitrification Process', w * 0.5, h * 0.08);
    
    // Process note
    ctx.font = `${h * 0.022}px Arial`;
    ctx.fillText('Bacteria use nitrate as oxygen source in anaerobic conditions', w * 0.5, h * 0.13);
  }

  static drawN2Molecule(ctx, x, y, size) {
    // Two nitrogen atoms bonded
    ctx.fillStyle = '#0074D9';
    ctx.beginPath();
    ctx.arc(x - size, y, size, 0, Math.PI * 2);
    ctx.fill();
    
    ctx.beginPath();
    ctx.arc(x + size, y, size, 0, Math.PI * 2);
    ctx.fill();
    
    // Triple bond
    ctx.strokeStyle = '#000';
    ctx.lineWidth = 2;
    for(let i = -1; i <= 1; i++) {
      ctx.beginPath();
      ctx.moveTo(x - size * 0.5, y + i * size * 0.3);
      ctx.lineTo(x + size * 0.5, y + i * size * 0.3);
      ctx.stroke();
    }
  }

  static drawCurvedArrow(ctx, x1, y1, x2, y2) {
    const cpx = (x1 + x2) / 2;
    const cpy = Math.min(y1, y2) - Math.abs(y2 - y1) * 0.3;
    
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.quadraticCurveTo(cpx, cpy, x2, y2);
    ctx.stroke();
    
    // Arrowhead
    const angle = Math.atan2(y2 - cpy, x2 - cpx);
    const headlen = 12;
    ctx.beginPath();
    ctx.moveTo(x2, y2);
    ctx.lineTo(x2 - headlen * Math.cos(angle - Math.PI / 6), y2 - headlen * Math.sin(angle - Math.PI / 6));
    ctx.moveTo(x2, y2);
    ctx.lineTo(x2 - headlen * Math.cos(angle + Math.PI / 6), y2 - headlen * Math.sin(angle + Math.PI / 6));
    ctx.stroke();
  }

  // ===== WATER CYCLE DIAGRAMS =====
  static drawWaterCycle(ctx, x, y, width, height, process, scale) {
    ctx.save();
    ctx.translate(x, y);
    
    switch(process) {
      case 'complete':
        this.drawCompleteWaterCycle(ctx, width, height, scale);
        break;
      case 'evaporation':
        this.drawEvaporation(ctx, width, height);
        break;
      case 'condensation':
        this.drawCondensation(ctx, width, height);
        break;
      case 'precipitation':
        this.drawPrecipitation(ctx, width, height);
        break;
      case 'infiltration':
        this.drawInfiltration(ctx, width, height);
        break;
      case 'runoff':
        this.drawRunoff(ctx, width, height);
        break;
    }
    
    ctx.restore();
  }

  static drawCompleteWaterCycle(ctx, w, h, scale) {
    // Sky
    const skyGradient = ctx.createLinearGradient(0, 0, 0, h * 0.5);
    skyGradient.addColorStop(0, '#87CEEB');
    skyGradient.addColorStop(1, '#E0F6FF');
    ctx.fillStyle = skyGradient;
    ctx.fillRect(0, 0, w, h * 0.5);
    
    // Ocean
    const oceanGradient = ctx.createLinearGradient(0, h * 0.6, 0, h);
    oceanGradient.addColorStop(0, '#4A90E2');
    oceanGradient.addColorStop(1, '#2E5C8A');
    ctx.fillStyle = oceanGradient;
    ctx.fillRect(0, h * 0.6, w * 0.4, h * 0.4);
    
    // Waves
    ctx.strokeStyle = '#FFF';
    ctx.lineWidth = 2;
    for(let i = 0; i < 5; i++) {
      ctx.beginPath();
      ctx.moveTo(0, h * (0.6 + i * 0.08));
      for(let x = 0; x < w * 0.4; x += 20) {
        ctx.lineTo(x, h * (0.6 + i * 0.08) + Math.sin(x / 10) * 3);
      }
      ctx.stroke();
    }
    
    // Land/Mountains
    ctx.fillStyle = '#8B7355';
    ctx.beginPath();
    ctx.moveTo(w * 0.4, h * 0.6);
    ctx.lineTo(w * 0.5, h * 0.4);
    ctx.lineTo(w * 0.6, h * 0.45);
    ctx.lineTo(w * 0.7, h * 0.35);
    ctx.lineTo(w * 0.8, h * 0.5);
    ctx.lineTo(w, h * 0.55);
    ctx.lineTo(w, h);
    ctx.lineTo(w * 0.4, h);
    ctx.closePath();
    ctx.fill();
    
    // Snow caps
    ctx.fillStyle = '#FFF';
    ctx.beginPath();
    ctx.moveTo(w * 0.68, h * 0.38);
    ctx.lineTo(w * 0.7, h * 0.35);
    ctx.lineTo(w * 0.72, h * 0.38);
    ctx.closePath();
    ctx.fill();
    
    // Vegetation
    ctx.fillStyle = '#2ECC40';
    for(let i = 0; i < 8; i++) {
      const tx = w * (0.5 + Math.random() * 0.3);
      const ty = h * (0.5 + Math.random() * 0.15);
      ctx.beginPath();
      ctx.arc(tx, ty, w * 0.015, 0, Math.PI * 2);
      ctx.fill();
    }
    
    // Sun
    ctx.fillStyle = '#FFD700';
    ctx.beginPath();
    ctx.arc(w * 0.85, h * 0.15, w * 0.06, 0, Math.PI * 2);
    ctx.fill();
    
    // Sun rays
    for(let i = 0; i < 12; i++) {
      const angle = (i / 12) * Math.PI * 2;
      ctx.beginPath();
      ctx.moveTo(w * 0.85, h * 0.15);
      ctx.lineTo(
        w * 0.85 + Math.cos(angle) * w * 0.09,
        h * 0.15 + Math.sin(angle) * h * 0.07
      );
      ctx.strokeStyle = '#FFD700';
      ctx.lineWidth = 3;
      ctx.stroke();
    }
    
    // Process 1: Evaporation
    ctx.strokeStyle = '#FF6B6B';
    ctx.setLineDash([5, 5]);
    ctx.lineWidth = 3;
    for(let i = 0; i < 5; i++) {
      const startX = w * (0.05 + i * 0.07);
      this.drawCurvedArrow(ctx, startX, h * 0.6, startX + w * 0.05, h * 0.35);
    }
    ctx.setLineDash([]);
    
    ctx.fillStyle = '#FF6B6B';
    ctx.font = `bold ${h * 0.025}px Arial`;
    ctx.textAlign = 'center';
    ctx.fillText('Evaporation', w * 0.2, h * 0.48);
    
    // Process 2: Transpiration
    ctx.strokeStyle = '#2ECC40';
    ctx.setLineDash([5, 5]);
    for(let i = 0; i < 3; i++) {
      const startX = w * (0.55 + i * 0.08);
      this.drawCurvedArrow(ctx, startX, h * 0.55, startX, h * 0.35);
    }
    ctx.setLineDash([]);
    
    ctx.fillStyle = '#2ECC40';
    ctx.fillText('Transpiration', w * 0.62, h * 0.48);
    
    // Clouds
    for(let i = 0; i < 3; i++) {
      this.drawCloud(ctx, w * (0.3 + i * 0.2), h * (0.25 + Math.random() * 0.05), w * 0.12, h * 0.06);
    }
    
    // Process 3: Condensation
    ctx.fillStyle = '#4A90E2';
    ctx.font = `bold ${h * 0.025}px Arial`;
    ctx.fillText('Condensation', w * 0.5, h * 0.2);
    
    // Process 4: Precipitation
    ctx.strokeStyle = '#4A90E2';
    ctx.lineWidth = 2;
    for(let i = 0; i < 20; i++) {
      const rx = w * (0.25 + Math.random() * 0.5);
      const ry = h * (0.32 + Math.random() * 0.15);
      ctx.beginPath();
      ctx.moveTo(rx, ry);
      ctx.lineTo(rx, ry + h * 0.03);
      ctx.stroke();
    }
    
    ctx.fillStyle = '#4A90E2';
    ctx.fillText('Precipitation', w * 0.5, h * 0.55);
    
    // Process 5: Runoff
    ctx.strokeStyle = '#4A90E2';
    ctx.lineWidth = 4;
    ctx.beginPath();
    ctx.moveTo(w * 0.7, h * 0.5);
    ctx.quadraticCurveTo(w * 0.6, h * 0.55, w * 0.5, h * 0.6);
    ctx.quadraticCurveTo(w * 0.45, h * 0.62, w * 0.4, h * 0.63);
    ctx.stroke();
    
    ctx.fillStyle = '#4A90E2';
    ctx.font = `bold ${h * 0.022}px Arial`;
    ctx.fillText('Runoff', w * 0.55, h * 0.64);
    
    // Process 6: Infiltration
    ctx.strokeStyle = '#8B4513';
    ctx.setLineDash([5, 5]);
    ctx.lineWidth = 3;
    for(let i = 0; i < 4; i++) {
      const ix = w * (0.5 + i * 0.08);
      ctx.beginPath();
      ctx.moveTo(ix, h * 0.62);
      ctx.lineTo(ix, h * 0.75);
      ctx.stroke();
    }
    ctx.setLineDash([]);
    
    ctx.fillStyle = '#8B4513';
    ctx.fillText('Infiltration', w * 0.62, h * 0.7);
    
    // Groundwater
    ctx.fillStyle = 'rgba(74, 144, 226, 0.3)';
    ctx.fillRect(w * 0.4, h * 0.75, w * 0.6, h * 0.25);
    
    ctx.fillStyle = '#4A90E2';
    ctx.font = `bold ${h * 0.025}px Arial`;
    ctx.fillText('Groundwater', w * 0.7, h * 0.88);
    
    // Groundwater flow to ocean
    ctx.strokeStyle = '#4A90E2';
    ctx.lineWidth = 3;
    ctx.setLineDash([5, 5]);
    ctx.beginPath();
    ctx.moveTo(w * 0.4, h * 0.85);
    ctx.lineTo(w * 0.25, h * 0.75);
    ctx.stroke();
    ctx.setLineDash([]);
  }

  static drawCloud(ctx, x, y, w, h) {
    ctx.fillStyle = '#FFF';
    ctx.beginPath();
    ctx.arc(x - w * 0.25, y, h * 0.6, 0, Math.PI * 2);
    ctx.arc(x, y - h * 0.2, h * 0.8, 0, Math.PI * 2);
    ctx.arc(x + w * 0.25, y, h * 0.6, 0, Math.PI * 2);
    ctx.fill();
    
    ctx.strokeStyle = '#CCC';
    ctx.lineWidth = 2;
    ctx.stroke();
  }

  static drawEvaporation(ctx, w, h) {
    // Water body
    const waterGradient = ctx.createLinearGradient(0, h * 0.5, 0, h);
    waterGradient.addColorStop(0, '#4A90E2');
    waterGradient.addColorStop(1, '#2E5C8A');
    ctx.fillStyle = waterGradient;
    ctx.fillRect(0, h * 0.5, w, h * 0.5);
    
    // Water surface
    ctx.strokeStyle = '#FFF';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(0, h * 0.5);
    for(let x = 0; x < w; x += 15) {
      ctx.lineTo(x, h * 0.5 + Math.sin(x / 20) * 5);
    }
    ctx.stroke();
    
    // Sun
    ctx.fillStyle = '#FFD700';
    ctx.beginPath();
    ctx.arc(w * 0.8, h * 0.15, w * 0.08, 0, Math.PI * 2);
    ctx.fill();
    
    // Sun rays hitting water
    ctx.strokeStyle = '#FFD700';
    ctx.lineWidth = 4;
    for(let i = 0; i < 8; i++) {
      const angle = Math.PI * 0.3 + (i * Math.PI * 0.4) / 8;
      ctx.beginPath();
      ctx.moveTo(w * 0.8, h * 0.15);
      ctx.lineTo(
        w * 0.8 + Math.cos(angle) * w * 0.3,
        h * 0.15 + Math.sin(angle) * h * 0.35
      );
      ctx.stroke();
    }
    
    // Water vapor molecules rising
    ctx.fillStyle = 'rgba(255, 255, 255, 0.7)';
    for(let i = 0; i < 25; i++) {
      const vx = w * (0.1 + Math.random() * 0.8);
      const vy = h * (0.5 - Math.random() * 0.4);
      const size = w * (0.008 + Math.random() * 0.008);
      
      ctx.beginPath();
      ctx.arc(vx, vy, size, 0, Math.PI * 2);
      ctx.fill();
      
      // H2O label on some
      if(i % 5 === 0) {
        ctx.fillStyle = '#000';
        ctx.font = `${h * 0.015}px Arial`;
        ctx.textAlign = 'center';
        ctx.fillText('H₂O', vx, vy);
        ctx.fillStyle = 'rgba(255, 255, 255, 0.7)';
      }
    }
    
    // Upward arrows
    ctx.strokeStyle = '#FF6B6B';
    ctx.fillStyle = '#FF6B6B';
    ctx.lineWidth = 3;
    for(let i = 0; i < 6; i++) {
      const ax = w * (0.15 + i * 0.13);
      this.drawArrow(ctx, ax, h * 0.48, ax, h * 0.25);
    }
    
    // Labels
    ctx.fillStyle = '#000';
    ctx.font = `bold ${h * 0.05}px Arial`;
    ctx.textAlign = 'center';
    ctx.fillText('Evaporation', w * 0.5, h * 0.08);
    
    ctx.font = `${h * 0.025}px Arial`;
    ctx.fillText('Liquid → Gas', w * 0.5, h * 0.14);
    ctx.fillText('Heat energy from sun converts water to vapor', w * 0.5, h * 0.92);
    
    // Temperature indicator
    ctx.fillStyle = '#FF6B6B';
    ctx.font = `bold ${h * 0.03}px Arial`;
    ctx.fillText('HEAT ☀', w * 0.2, h * 0.35);
  }

  static drawCondensation(ctx, w, h) {
    // Sky background
    ctx.fillStyle = '#87CEEB';
    ctx.fillRect(0, 0, w, h);
    
    // Rising warm air
    ctx.fillStyle = 'rgba(255, 107, 107, 0.2)';
    for(let i = 0; i < 5; i++) {
      const x = w * (0.2 + i * 0.15);
      ctx.beginPath();
      ctx.moveTo(x, h);
      ctx.lineTo(x - w * 0.05, h * 0.5);
      ctx.lineTo(x + w * 0.05, h * 0.5);
      ctx.closePath();
      ctx.fill();
    }
    
    ctx.fillStyle = '#000';
    ctx.font = `${h * 0.022}px Arial`;
    ctx.textAlign = 'center';
    ctx.fillText('Warm, moist air rises', w * 0.5, h * 0.9);
    
    // Water vapor molecules
    ctx.fillStyle = 'rgba(255, 255, 255, 0.8)';
    for(let i = 0; i < 20; i++) {
      const vx = w * (0.2 + Math.random() * 0.6);
      const vy = h * (0.5 + Math.random() * 0.3);
      ctx.beginPath();
      ctx.arc(vx, vy, w * 0.01, 0, Math.PI * 2);
      ctx.fill();
    }
    
    // Cooling zone
    ctx.fillStyle = 'rgba(135, 206, 235, 0.3)';
    ctx.fillRect(0, 0, w, h * 0.4);
    
    ctx.fillStyle = '#4A90E2';
    ctx.font = `bold ${h * 0.025}px Arial`;
    ctx.fillText('COOLING ZONE', w * 0.5, h * 0.35);
    ctx.font = `${h * 0.02}px Arial`;
    ctx.fillText('Temperature decreases with altitude', w * 0.5, h * 0.39);
    
    // Forming cloud
    this.drawCloud(ctx, w * 0.5, h * 0.2, w * 0.25, h * 0.08);
    
    // Water droplets forming
    ctx.fillStyle = '#4A90E2';
    for(let i = 0; i < 30; i++) {
      const dx = w * (0.35 + Math.random() * 0.3);
      const dy = h * (0.15 + Math.random() * 0.15);
      ctx.beginPath();
      ctx.arc(dx, dy, w * 0.006, 0, Math.PI * 2);
      ctx.fill();
    }
    
    // Process arrows
    ctx.strokeStyle = '#0074D9';
    ctx.fillStyle = '#0074D9';
    ctx.lineWidth = 4;
    for(let i = 0; i < 4; i++) {
      const ax = w * (0.25 + i * 0.15);
      this.drawArrow(ctx, ax, h * 0.7, ax, h * 0.4);
    }
    
    // Labels
    ctx.fillStyle = '#000';
    ctx.font = `bold ${h * 0.05}px Arial`;
    ctx.fillText('Condensation', w * 0.5, h * 0.08);
    
    ctx.font = `${h * 0.025}px Arial`;
    ctx.fillText('Gas → Liquid', w * 0.5, h * 0.13);
    
    // Dew point
    ctx.fillStyle = '#4A90E2';
    ctx.font = `bold ${h * 0.022}px Arial`;
    ctx.fillText('Dew Point Reached', w * 0.5, h * 0.5);
    
    // Cloud formation note
    ctx.fillStyle = '#000';
    ctx.font = `${h * 0.022}px Arial`;
    ctx.fillText('Water vapor condenses into tiny droplets → Cloud forms', w * 0.5, h * 0.95);
  }

  static drawPrecipitation(ctx, w, h) {
    // Sky with clouds
    ctx.fillStyle = '#708090';
    ctx.fillRect(0, 0, w, h * 0.5);
    
    // Dark storm clouds
    for(let i = 0; i < 4; i++) {
      ctx.fillStyle = `rgba(105, 105, 105, ${0.7 + Math.random() * 0.3})`;
      const cx = w * (0.1 + i * 0.25);
      const cy = h * (0.15 + Math.random() * 0.1);
      
      ctx.beginPath();
      ctx.arc(cx - w * 0.08, cy, h * 0.08, 0, Math.PI * 2);
      ctx.arc(cx, cy - h * 0.03, h * 0.1, 0, Math.PI * 2);
      ctx.arc(cx + w * 0.08, cy, h * 0.08, 0, Math.PI * 2);
      ctx.fill();
    }
    
    // Ground
    ctx.fillStyle = '#8B7355';
    ctx.fillRect(0, h * 0.7, w, h * 0.3);
    
    ctx.fillStyle = '#2ECC40';
    for(let i = 0; i < 10; i++) {
      const gx = w * (0.1 + Math.random() * 0.8);
      ctx.fillRect(gx, h * 0.7, w * 0.01, h * 0.05);
    }
    
    // Different types of precipitation
    // Rain
    ctx.strokeStyle = '#4A90E2';
    ctx.lineWidth = 2;
    for(let i = 0; i < 30; i++) {
      const rx = w * (0.05 + Math.random() * 0.25);
      const ry = h * (0.3 + Math.random() * 0.4);
      ctx.beginPath();
      ctx.moveTo(rx, ry);
      ctx.lineTo(rx - w * 0.005, ry + h * 0.04);
      ctx.stroke();
    }
    ctx.fillStyle = '#000';
    ctx.font = `bold ${h * 0.025}px Arial`;
    ctx.textAlign = 'center';
    ctx.fillText('Rain', w * 0.15, h * 0.75);
    
    // Snow
    ctx.fillStyle = '#FFF';
    for(let i = 0; i < 25; i++) {
      const sx = w * (0.3 + Math.random() * 0.2);
      const sy = h * (0.3 + Math.random() * 0.4);
      this.drawSnowflake(ctx, sx, sy, w * 0.01);
    }
    ctx.fillStyle = '#000';
    ctx.fillText('Snow', w * 0.4, h * 0.75);
    
    // Sleet
    ctx.strokeStyle = '#B0C4DE';
    ctx.fillStyle = '#B0C4DE';
    for(let i = 0; i < 20; i++) {
      const slx = w * (0.55 + Math.random() * 0.15);
      const sly = h * (0.3 + Math.random() * 0.4);
      ctx.beginPath();
      ctx.arc(slx, sly, w * 0.004, 0, Math.PI * 2);
      ctx.fill();
      ctx.beginPath();
      ctx.moveTo(slx, sly);
      ctx.lineTo(slx, sly + h * 0.02);
      ctx.stroke();
    }
    ctx.fillStyle = '#000';
    ctx.fillText('Sleet', w * 0.625, h * 0.75);
    
    // Hail
    ctx.fillStyle = '#E0E0E0';
    for(let i = 0; i < 15; i++) {
      const hx = w * (0.75 + Math.random() * 0.2);
      const hy = h * (0.3 + Math.random() * 0.4);
      ctx.beginPath();
      ctx.arc(hx, hy, w * 0.008, 0, Math.PI * 2);
      ctx.fill();
      ctx.strokeStyle = '#999';
      ctx.lineWidth = 1;
      ctx.stroke();
    }
    ctx.fillStyle = '#000';
    ctx.fillText('Hail', w * 0.85, h * 0.75);
    
    // Title
    ctx.font = `bold ${h * 0.05}px Arial`;
    ctx.fillText('Precipitation', w * 0.5, h * 0.08);
    
    ctx.font = `${h * 0.022}px Arial`;
    ctx.fillText('Water falls from clouds to Earth\'s surface', w * 0.5, h * 0.88);
    
    // Puddles forming
    ctx.fillStyle = 'rgba(74, 144, 226, 0.5)';
    for(let i = 0; i < 5; i++) {
      const px = w * (0.1 + i * 0.18);
      ctx.beginPath();
      ctx.ellipse(px, h * 0.95, w * 0.06, h * 0.02, 0, 0, Math.PI * 2);
      ctx.fill();
    }
  }

  static drawSnowflake(ctx, x, y, size) {
    ctx.strokeStyle = '#FFF';
    ctx.lineWidth = 1;
    
    for(let i = 0; i < 6; i++) {
      const angle = (i / 6) * Math.PI * 2;
      ctx.beginPath();
      ctx.moveTo(x, y);
      ctx.lineTo(x + Math.cos(angle) * size, y + Math.sin(angle) * size);
      ctx.stroke();
      
      // Branches
      const branchX = x + Math.cos(angle) * size * 0.6;
      const branchY = y + Math.sin(angle) * size * 0.6;
      ctx.beginPath();
      ctx.moveTo(branchX, branchY);
      ctx.lineTo(
        branchX + Math.cos(angle + Math.PI / 3) * size * 0.3,
        branchY + Math.sin(angle + Math.PI / 3) * size * 0.3
      );
      ctx.stroke();
      
      ctx.beginPath();
      ctx.moveTo(branchX, branchY);
      ctx.lineTo(
        branchX + Math.cos(angle - Math.PI / 3) * size * 0.3,
        branchY + Math.sin(angle - Math.PI / 3) * size * 0.3
      );
      ctx.stroke();
    }
  }

  static drawInfiltration(ctx, w, h) {
    // Surface
    ctx.fillStyle = '#8B7355';
    ctx.fillRect(0, 0, w, h * 0.3);
    
    // Grass
    ctx.fillStyle = '#2ECC40';
    for(let i = 0; i < 30; i++) {
      const gx = w * (Math.random());
      ctx.fillRect(gx, h * 0.28, w * 0.008, h * 0.03);
    }
    
    // Soil layers
    const layers = [
      { y: 0.3, height: 0.2, color: '#A0522D', name: 'Topsoil' },
      { y: 0.5, height: 0.2, color: '#8B4513', name: 'Subsoil' },
      { y: 0.7, height: 0.15, color: '#654321', name: 'Weathered Rock' },
      { y: 0.85, height: 0.15, color: '#4A4A4A', name: 'Bedrock' }
    ];
    
    layers.forEach(layer => {
      ctx.fillStyle = layer.color;
      ctx.fillRect(0, h * layer.y, w, h * layer.height);
      
      ctx.strokeStyle = '#000';
      ctx.lineWidth = 2;
      ctx.strokeRect(0, h * layer.y, w, h * layer.height);
      
      ctx.fillStyle = '#FFF';
      ctx.font = `bold ${h * 0.025}px Arial`;
      ctx.textAlign = 'left';
      ctx.fillText(layer.name, w * 0.05, h * (layer.y + layer.height / 2));
    });
    
    // Water droplets infiltrating
    ctx.fillStyle = '#4A90E2';
    ctx.strokeStyle = '#4A90E2';
    ctx.lineWidth = 3;
    
    for(let i = 0; i < 8; i++) {
      const wx = w * (0.15 + i * 0.1);
      
      // Droplet at surface
      ctx.beginPath();
      ctx.arc(wx, h * 0.28, w * 0.01, 0, Math.PI * 2);
      ctx.fill();
      
      // Infiltration path
      ctx.setLineDash([5, 5]);
      ctx.beginPath();
      ctx.moveTo(wx, h * 0.3);
      
      // Zigzag path through soil
      const pathPoints = [
        { x: wx, y: 0.4 },
        { x: wx + w * 0.02, y: 0.5 },
        { x: wx - w * 0.01, y: 0.6 },
        { x: wx + w * 0.015, y: 0.7 },
        { x: wx, y: 0.8 }
      ];
      
      pathPoints.forEach(point => {
        ctx.lineTo(point.x, h * point.y);
      });
      
      ctx.stroke();
      ctx.setLineDash([]);
      
      // Arrows along path
      for(let j = 0; j < 4; j++) {
        const arrowY = h * (0.35 + j * 0.15);
        ctx.fillStyle = '#4A90E2';
        ctx.beginPath();
        ctx.moveTo(wx, arrowY);
        ctx.lineTo(wx - w * 0.008, arrowY - h * 0.015);
        ctx.lineTo(wx + w * 0.008, arrowY - h * 0.015);
        ctx.closePath();
        ctx.fill();
      }
    }
    
    // Groundwater table
    ctx.fillStyle = 'rgba(74, 144, 226, 0.4)';
    ctx.fillRect(0, h * 0.75, w, h * 0.25);
    
    ctx.fillStyle = '#4A90E2';
    ctx.font = `bold ${h * 0.03}px Arial`;
    ctx.textAlign = 'center';
    ctx.fillText('Groundwater Table', w * 0.5, h * 0.77);
    
    // Pore spaces
    ctx.fillStyle = 'rgba(255, 255, 255, 0.3)';
    for(let i = 0; i < 40; i++) {
      const px = w * Math.random();
      const py = h * (0.3 + Math.random() * 0.45);
      ctx.beginPath();
      ctx.arc(px, py, w * 0.005, 0, Math.PI * 2);
      ctx.fill();
    }
    
    // Title
    ctx.fillStyle = '#000';
    ctx.font = `bold ${h * 0.05}px Arial`;
    ctx.fillText('Infiltration', w * 0.5, h * 0.12);
    
    ctx.font = `${h * 0.022}px Arial`;
    ctx.fillText('Water seeps through soil into ground', w * 0.5, h * 0.18);
    
    // Rate factors
    ctx.textAlign = 'right';
    ctx.font = `${h * 0.02}px Arial`;
    ctx.fillText('Factors affecting rate:', w * 0.95, h * 0.35);
    ctx.fillText('• Soil porosity', w * 0.95, h * 0.39);
    ctx.fillText('• Soil saturation', w * 0.95, h * 0.43);
    ctx.fillText('• Vegetation cover', w * 0.95, h * 0.47);
    ctx.fillText('• Slope', w * 0.95, h * 0.51);
  }

  static drawRunoff(ctx, w, h) {
    // Rain clouds
    ctx.fillStyle = '#708090';
    ctx.fillRect(0, 0, w, h * 0.25);
    
    for(let i = 0; i < 3; i++) {
      this.drawCloud(ctx, w * (0.2 + i * 0.3), h * 0.15, w * 0.15, h * 0.06);
    }
    
    // Heavy rain
    ctx.strokeStyle = '#4A90E2';
    ctx.lineWidth = 2;
    for(let i = 0; i < 50; i++) {
      const rx = w * Math.random();
      const ry = h * (0.2 + Math.random() * 0.2);
      ctx.beginPath();
      ctx.moveTo(rx, ry);
      ctx.lineTo(rx - w * 0.005, ry + h * 0.03);
      ctx.stroke();
    }
    
    // Sloped landscape
    ctx.fillStyle = '#8B7355';
    ctx.beginPath();
    ctx.moveTo(0, h * 0.4);
    ctx.lineTo(w, h * 0.7);
    ctx.lineTo(w, h);
    ctx.lineTo(0, h);
    ctx.closePath();
    ctx.fill();
    
    // Vegetation
    ctx.fillStyle = '#2ECC40';
    for(let i = 0; i < 15; i++) {
      const vx = w * (0.1 + Math.random() * 0.8);
      const vy = h * (0.45 + (vx / w) * 0.25);
      ctx.beginPath();
      ctx.arc(vx, vy, w * 0.015, 0, Math.PI * 2);
      ctx.fill();
    }
    
    // Stream/river at bottom
    const riverGradient = ctx.createLinearGradient(0, h * 0.8, 0, h);
    riverGradient.addColorStop(0, '#4A90E2');
    riverGradient.addColorStop(1, '#2E5C8A');
    ctx.fillStyle = riverGradient;
    ctx.fillRect(0, h * 0.85, w, h * 0.15);
    
    // River flow lines
    ctx.strokeStyle = '#FFF';
    ctx.lineWidth = 2;
    for(let i = 0; i < 3; i++) {
      ctx.beginPath();
      ctx.moveTo(0, h * (0.87 + i * 0.04));
      for(let x = 0; x < w; x += 20) {
        ctx.lineTo(x, h * (0.87 + i * 0.04) + Math.sin(x / 15) * 2);
      }
      ctx.stroke();
    }
    
    // Runoff water paths
    ctx.strokeStyle = '#4A90E2';
    ctx.lineWidth = 4;
    
    // Surface runoff paths
    for(let i = 0; i < 6; i++) {
      const startX = w * (0.1 + i * 0.15);
      const startY = h * (0.42 + (startX / w) * 0.25);
      const endX = startX - w * 0.05;
      const endY = h * 0.85;
      
      ctx.beginPath();
      ctx.moveTo(startX, startY);
      
      // Create winding path downhill
      const steps = 5;
      for(let j = 1; j <= steps; j++) {
        const progress = j / steps;
        const x = startX + (endX - startX) * progress + (Math.random() - 0.5) * w * 0.03;
        const y = startY + (endY - startY) * progress;
        ctx.lineTo(x, y);
      }
      
      ctx.stroke();
      
      // Arrow at end
      const lastX = endX + (Math.random() - 0.5) * w * 0.03;
      ctx.fillStyle = '#4A90E2';
      ctx.beginPath();
      ctx.moveTo(lastX, endY - h * 0.02);
      ctx.lineTo(lastX - w * 0.01, endY - h * 0.04);
      ctx.lineTo(lastX + w * 0.01, endY - h * 0.04);
      ctx.closePath();
      ctx.fill();
    }
    
    // Gullies/erosion channels
    ctx.strokeStyle = '#654321';
    ctx.lineWidth = 6;
    ctx.beginPath();
    ctx.moveTo(w * 0.6, h * 0.55);
    ctx.quadraticCurveTo(w * 0.5, h * 0.65, w * 0.4, h * 0.75);
    ctx.lineTo(w * 0.35, h * 0.85);
    ctx.stroke();
    
    // Sediment
    ctx.fillStyle = 'rgba(139, 69, 19, 0.5)';
    for(let i = 0; i < 20; i++) {
      const sx = w * (0.35 + Math.random() * 0.15);
      const sy = h * (0.85 + Math.random() * 0.1);
      ctx.beginPath();
      ctx.arc(sx, sy, w * 0.005, 0, Math.PI * 2);
      ctx.fill();
    }
    
    // Labels
    ctx.fillStyle = '#000';
    ctx.font = `bold ${h * 0.05}px Arial`;
    ctx.textAlign = 'center';
    ctx.fillText('Surface Runoff', w * 0.5, h * 0.08);
    
    ctx.font = `${h * 0.025}px Arial`;
    ctx.fillText('Water flows over land surface to streams/rivers', w * 0.5, h * 0.14);
    
    // Annotations
    ctx.font = `bold ${h * 0.022}px Arial`;
    ctx.fillStyle = '#4A90E2';
    ctx.textAlign = 'left';
    ctx.fillText('→ Overland Flow', w * 0.65, h * 0.5);
    
    ctx.fillStyle = '#654321';
    ctx.fillText('Erosion', w * 0.65, h * 0.68);
    
    ctx.fillStyle = '#2E5C8A';
    ctx.fillText('River/Stream', w * 0.1, h * 0.95);
    
    // Imperviousness note
    ctx.fillStyle = '#E74C3C';
    ctx.font = `${h * 0.02}px Arial`;
    ctx.textAlign = 'right';
    ctx.fillText('Saturated soil', w * 0.95, h * 0.58);
    ctx.fillText('prevents infiltration', w * 0.95, h * 0.62);
  }

  // ===== POPULATION GROWTH DIAGRAMS =====
  static drawPopulationGrowth(ctx, x, y, width, height, curveType, phase) {
    ctx.save();
    ctx.translate(x, y);
    
    switch(curveType) {
      case 'both':
        this.drawBothGrowthCurves(ctx, width, height, phase);
        break;
      case 'exponential':
        this.drawExponentialGrowth(ctx, width, height, phase);
        break;
      case 'logistic':
        this.drawLogisticGrowth(ctx, width, height, phase);
        break;
    }
    
    ctx.restore();
  }

  static drawBothGrowthCurves(ctx, w, h, phase) {
    // Axes
    ctx.strokeStyle = '#000';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(w * 0.1, h * 0.1);
    ctx.lineTo(w * 0.1, h * 0.8);
    ctx.lineTo(w * 0.9, h * 0.8);
    ctx.stroke();
    
    // Axis labels
    ctx.fillStyle = '#000';
    ctx.font = `bold ${h * 0.025}px Arial`;
    ctx.textAlign = 'center';
    ctx.save();
    ctx.translate(w * 0.03, h * 0.45);
    ctx.rotate(-Math.PI / 2);
    ctx.fillText('Population Size', 0, 0);
    ctx.restore();
    
    ctx.fillText('Time', w * 0.5, h * 0.88);
    
    // Carrying capacity line (for logistic)
    ctx.strokeStyle = '#E74C3C';
    ctx.setLineDash([10, 5]);
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(w * 0.1, h * 0.25);
    ctx.lineTo(w * 0.9, h * 0.25);
    ctx.stroke();
    ctx.setLineDash([]);
    
    ctx.fillStyle = '#E74C3C';
    ctx.font = `${h * 0.022}px Arial`;
    ctx.textAlign = 'left';
    ctx.fillText('Carrying Capacity (K)', w * 0.65, h * 0.22);
    
    // Exponential curve
    ctx.strokeStyle = '#FF6B6B';
    ctx.lineWidth = 4;
    ctx.beginPath();
    ctx.moveTo(w * 0.1, h * 0.78);
    
    for(let x = 0; x <= 0.8; x += 0.01) {
      const t = x / 0.8;
      const expValue = Math.exp(3 * t) - 1;
      const normValue = expValue / (Math.exp(3) - 1);
      const plotY = h * (0.78 - normValue * 0.68);
      
      ctx.lineTo(w * (0.1 + x), plotY);
    }
    ctx.stroke();
    
    // Logistic curve
    ctx.strokeStyle = '#4A90E2';
    ctx.lineWidth = 4;
    ctx.beginPath();
    ctx.moveTo(w * 0.1, h * 0.78);
    
    for(let x = 0; x <= 0.8; x += 0.01) {
      const t = x / 0.8;
      const K = 0.53; // Distance from bottom to carrying capacity line
      const r = 5; // Growth rate
      const logisticValue = K / (1 + Math.exp(-r * (t - 0.5)));
      const plotY = h * (0.78 - logisticValue);
      
      ctx.lineTo(w * (0.1 + x), plotY);
    }
    ctx.stroke();
    
    // Legend
    ctx.fillStyle = '#FF6B6B';
    ctx.fillRect(w * 0.7, h * 0.12, w * 0.04, h * 0.02);
    ctx.fillStyle = '#000';
    ctx.font = `${h * 0.022}px Arial`;
    ctx.textAlign = 'left';
    ctx.fillText('Exponential Growth (J-curve)', w * 0.75, h * 0.135);
    
    ctx.fillStyle = '#4A90E2';
    ctx.fillRect(w * 0.7, h * 0.16, w * 0.04, h * 0.02);
    ctx.fillStyle = '#000';
    ctx.fillText('Logistic Growth (S-curve)', w * 0.75, h * 0.175);
    
    // Title
    ctx.fillStyle = '#000';
    ctx.font = `bold ${h * 0.04}px Arial`;
    ctx.textAlign = 'center';
    ctx.fillText('Population Growth Models', w * 0.5, h * 0.05);
    
    // Phase annotations
    if(phase === 'complete') {
      // Lag phase
      ctx.fillStyle = '#666';
      ctx.font = `italic ${h * 0.018}px Arial`;
      ctx.fillText('Lag', w * 0.2, h * 0.85);
      
      // Exponential phase
      ctx.fillText('Exponential', w * 0.4, h * 0.6);
      
      // Plateau
      ctx.fillText('Plateau', w * 0.75, h * 0.28);
    }
  }

  static drawExponentialGrowth(ctx, w, h, phase) {
    // Axes
    ctx.strokeStyle = '#000';
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.moveTo(w * 0.15, h * 0.1);
    ctx.lineTo(w * 0.15, h * 0.75);
    ctx.lineTo(w * 0.9, h * 0.75);
    ctx.stroke();
    
    // Grid lines
    ctx.strokeStyle = '#E0E0E0';
    ctx.lineWidth = 1;
    for(let i = 1; i <= 5; i++) {
      ctx.beginPath();
      ctx.moveTo(w * 0.15, h * (0.75 - i * 0.13));
      ctx.lineTo(w * 0.9, h * (0.75 - i * 0.13));
      ctx.stroke();
    }
    
    // Exponential curve
    ctx.strokeStyle = '#FF6B6B';
    ctx.lineWidth = 5;
    ctx.beginPath();
    ctx.moveTo(w * 0.15, h * 0.73);
    
    for(let x = 0; x <= 0.75; x += 0.01) {
      const t = x / 0.75;
      const expValue = Math.exp(4 * t) - 1;
      const normValue = expValue / (Math.exp(4) - 1);
      const plotY = h * (0.73 - normValue * 0.63);
      
      ctx.lineTo(w * (0.15 + x), plotY);
    }
    ctx.stroke();
    
    // Doubling time markers
    ctx.setLineDash([5, 5]);
    ctx.strokeStyle = '#999';
    ctx.lineWidth = 2;
    
    const doublingPoints = [0.25, 0.4, 0.5, 0.58];
    doublingPoints.forEach(xPos => {
      ctx.beginPath();
      ctx.moveTo(w * (0.15 + xPos * 0.75), h * 0.75);
      const t = xPos;
      const expValue = Math.exp(4 * t) - 1;
      const normValue = expValue / (Math.exp(4) - 1);
      const yPos = h * (0.73 - normValue * 0.63);
      ctx.lineTo(w * (0.15 + xPos * 0.75), yPos);
      ctx.stroke();
    });
    ctx.setLineDash([]);
    
    // Labels
    ctx.fillStyle = '#000';
    ctx.font = `bold ${h * 0.045}px Arial`;
    ctx.textAlign = 'center';
    ctx.fillText('Exponential Growth (J-Curve)', w * 0.5, h * 0.05);
    
    ctx.font = `bold ${h * 0.025}px Arial`;
    ctx.save();
    ctx.translate(w * 0.05, h * 0.45);
    ctx.rotate(-Math.PI / 2);
    ctx.fillText('Population Size (N)', 0, 0);
    ctx.restore();
    
    ctx.fillText('Time (t)', w * 0.5, h * 0.85);
    
    // Equation
    ctx.fillStyle = '#FF6B6B';
    ctx.font = `bold ${h * 0.03}px Arial`;
    ctx.fillText('dN/dt = rN', w * 0.75, h * 0.15);
    
    ctx.font = `${h * 0.02}px Arial`;
    ctx.fillStyle = '#000';
    ctx.textAlign = 'left';
    ctx.fillText('r = intrinsic growth rate', w * 0.65, h * 0.2);
    ctx.fillText('N = population size', w * 0.65, h * 0.24);
    
    // Characteristics
    ctx.font = `bold ${h * 0.022}px Arial`;
    ctx.fillText('Characteristics:', w * 0.15, h * 0.92);
    ctx.font = `${h * 0.02}px Arial`;
    ctx.fillText('• Unlimited resources', w * 0.15, h * 0.96);
    ctx.fillText('• No competition', w * 0.4, h * 0.96);
    ctx.fillText('• Constant growth rate', w * 0.62, h * 0.96);
  }

  static drawLogisticGrowth(ctx, w, h, phase) {
    // Axes
    ctx.strokeStyle = '#000';
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.moveTo(w * 0.15, h * 0.15);
    ctx.lineTo(w * 0.15, h * 0.75);
    ctx.lineTo(w * 0.9, h * 0.75);
    ctx.stroke();
    
    // Carrying capacity
    const K_y = h * 0.25;
    ctx.strokeStyle = '#E74C3C';
    ctx.setLineDash([8, 4]);
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.moveTo(w * 0.15, K_y);
    ctx.lineTo(w * 0.9, K_y);
    ctx.stroke();
    ctx.setLineDash([]);
    
    ctx.fillStyle = '#E74C3C';
    ctx.font = `bold ${h * 0.025}px Arial`;
    ctx.textAlign = 'right';
    ctx.fillText('K', w * 0.13, K_y + h * 0.01);
    ctx.textAlign = 'left';
    ctx.fillText('Carrying Capacity', w * 0.65, K_y - h * 0.02);
    
    // Logistic S-curve
    ctx.strokeStyle = '#4A90E2';
    ctx.lineWidth = 5;
    ctx.beginPath();
    ctx.moveTo(w * 0.15, h * 0.73);
    
    const K = 0.48; // Carrying capacity (distance from bottom to K line)
    const r = 6;    // Growth rate
    
    for(let x = 0; x <= 0.75; x += 0.005) {
      const t = x / 0.75;
      const logisticValue = K / (1 + Math.exp(-r * (t - 0.5)));
      const plotY = h * (0.75 - logisticValue);
      
      ctx.lineTo(w * (0.15 + x), plotY);
    }
    ctx.stroke();
    
    // Phase labels
    ctx.fillStyle = '#666';
    ctx.font = `italic bold ${h * 0.022}px Arial`;
    ctx.textAlign = 'center';
    
    // Lag phase
    ctx.fillStyle = 'rgba(255, 200, 100, 0.3)';
    ctx.fillRect(w * 0.15, h * 0.15, w * 0.15, h * 0.6);
    ctx.fillStyle = '#000';
    ctx.fillText('Lag Phase', w * 0.225, h * 0.82);
    
    // Exponential phase
    ctx.fillStyle = 'rgba(100, 200, 255, 0.3)';
    ctx.fillRect(w * 0.3, h * 0.15, w * 0.25, h * 0.6);
    ctx.fillStyle = '#000';
    ctx.fillText('Exponential Phase', w * 0.425, h * 0.82);
    
    // Transition phase
    ctx.fillStyle = 'rgba(200, 150, 255, 0.3)';
    ctx.fillRect(w * 0.55, h * 0.15, w * 0.15, h * 0.6);
    ctx.fillStyle = '#000';
    ctx.fillText('Transition', w * 0.625, h * 0.82);
    
    // Plateau
    ctx.fillStyle = 'rgba(150, 255, 150, 0.3)';
    ctx.fillRect(w * 0.7, h * 0.15, w * 0.2, h * 0.6);
    ctx.fillStyle = '#000';
    ctx.fillText('Plateau', w * 0.8, h * 0.82);
    
    // Title
    ctx.fillStyle = '#000';
    ctx.font = `bold ${h * 0.045}px Arial`;
    ctx.textAlign = 'center';
    ctx.fillText('Logistic Growth (S-Curve)', w * 0.5, h * 0.08);
    
    // Axis labels
    ctx.font = `bold ${h * 0.025}px Arial`;
    ctx.save();
    ctx.translate(w * 0.05, h * 0.45);
    ctx.rotate(-Math.PI / 2);
    ctx.fillText('Population Size (N)', 0, 0);
    ctx.restore();
    
    ctx.fillText('Time (t)', w * 0.5, h * 0.88);
    
    // Equation
    ctx.fillStyle = '#4A90E2';
    ctx.font = `bold ${h * 0.028}px Arial`;
    ctx.textAlign = 'left';
    ctx.fillText('dN/dt = rN(K-N)/K', w * 0.15, h * 0.12);
    
    // K/2 line (maximum growth rate)
    const K2_y = h * (0.75 - K / 2);
    ctx.strokeStyle = '#FFA500';
    ctx.setLineDash([4, 4]);
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(w * 0.15, K2_y);
    ctx.lineTo(w * 0.9, K2_y);
    ctx.stroke();
    ctx.setLineDash([]);
    
    ctx.fillStyle = '#FFA500';
    ctx.font = `${h * 0.02}px Arial`;
    ctx.textAlign = 'right';
    ctx.fillText('K/2 (max growth rate)', w * 0.88, K2_y - h * 0.01);
    
    // Characteristics
    ctx.fillStyle = '#000';
    ctx.font = `${h * 0.019}px Arial`;
    ctx.textAlign = 'left';
    ctx.fillText('Limited resources → Growth slows → Reaches carrying capacity', w * 0.15, h * 0.96);
  }

  // ===== ECOSYSTEM DIAGRAMS =====
  static drawEcosystem(ctx, x, y, width, height, ecosystemType, component) {
    ctx.save();
    ctx.translate(x, y);
    
    switch(component) {
      case 'complete':
        this.drawCompleteEcosystem(ctx, width, height, ecosystemType);
        break;
      case 'biotic':
        this.drawBioticFactors(ctx, width, height, ecosystemType);
        break;
      case 'abiotic':
        this.drawAbioticFactors(ctx, width, height, ecosystemType);
        break;
      case 'producers':
        this.drawProducers(ctx, { base: '#2ECC40', light: '#3EFC50', dark: '#1E8C30' }, width, height, ecosystemType);
        break;
      case 'consumers':
        this.drawConsumersEcosystem(ctx, width, height, ecosystemType);
        break;
      case 'decomposers':
        this.drawDecomposers(ctx, { base: '#85144b', light: '#A5345b', dark: '#65042b' }, width, height, ecosystemType);
        break;
    }
    
    ctx.restore();
  }

  static drawCompleteEcosystem(ctx, w, h, type) {
    // Background based on ecosystem type
    switch(type) {
      case 'forest':
        ctx.fillStyle = '#87CEEB';
        ctx.fillRect(0, 0, w, h * 0.6);
        ctx.fillStyle = '#8B4513';
        ctx.fillRect(0, h * 0.7, w, h * 0.3);
        break;
      case 'aquatic':
        const aquaGradient = ctx.createLinearGradient(0, 0, 0, h);
        aquaGradient.addColorStop(0, '#87CEEB');
        aquaGradient.addColorStop(0.3, '#4A90E2');
        aquaGradient.addColorStop(1, '#2E5C8A');
        ctx.fillStyle = aquaGradient;
        ctx.fillRect(0, 0, w, h);
        break;
      case 'grassland':
        ctx.fillStyle = '#87CEEB';
        ctx.fillRect(0, 0, w, h * 0.5);
        ctx.fillStyle = '#9ACD32';
        ctx.fillRect(0, h * 0.5, w, h * 0.5);
        break;
      case 'desert':
        ctx.fillStyle = '#FFD700';
        ctx.fillRect(0, 0, w, h * 0.4);
        ctx.fillStyle = '#DEB887';
        ctx.fillRect(0, h * 0.4, w, h * 0.6);
        break;
    }
    
    // Title
    ctx.fillStyle = '#000';
    ctx.font = `bold ${h * 0.04}px Arial`;
    ctx.textAlign = 'center';
    ctx.fillText(`${type.charAt(0).toUpperCase() + type.slice(1)} Ecosystem`, w / 2, h * 0.06);
    
    // Abiotic factors box
    ctx.fillStyle = 'rgba(255, 255, 255, 0.8)';
    ctx.fillRect(w * 0.02, h * 0.12, w * 0.25, h * 0.25);
    ctx.strokeStyle = '#0074D9';
    ctx.lineWidth = 3;
    ctx.strokeRect(w * 0.02, h * 0.12, w * 0.25, h * 0.25);
    
    ctx.fillStyle = '#0074D9';
    ctx.font = `bold ${h * 0.025}px Arial`;
    ctx.textAlign = 'left';
    ctx.fillText('Abiotic Factors', w * 0.04, h * 0.16);
    
    ctx.fillStyle = '#000';
    ctx.font = `${h * 0.018}px Arial`;
    const abioticFactors = ['☀ Sunlight', '💧 Water', '🌡 Temperature', '🌬 Air', '🪨 Soil/Rocks'];
    abioticFactors.forEach((factor, idx) => {
      ctx.fillText(factor, w * 0.04, h * (0.19 + idx * 0.03));
    });
    
    // Biotic factors box
    ctx.fillStyle = 'rgba(255, 255, 255, 0.8)';
    ctx.fillRect(w * 0.73, h * 0.12, w * 0.25, h * 0.35);
    ctx.strokeStyle = '#2ECC40';
    ctx.lineWidth = 3;
    ctx.strokeRect(w * 0.73, h * 0.12, w * 0.25, h * 0.35);
    
    ctx.fillStyle = '#2ECC40';
    ctx.font = `bold ${h * 0.025}px Arial`;
    ctx.fillText('Biotic Factors', w * 0.75, h * 0.16);
    
    ctx.fillStyle = '#000';
    ctx.font = `${h * 0.018}px Arial`;
    const bioticFactors = [
      '🌱 Producers',
      '  (Plants, Algae)',
      '🦌 Consumers',
      '  Primary (Herbivores)',
      '  Secondary (Carnivores)',
      '  Tertiary (Top predators)',
      '🍄 Decomposers',
      '  (Bacteria, Fungi)'
    ];
    bioticFactors.forEach((factor, idx) => {
      ctx.fillText(factor, w * 0.75, h * (0.19 + idx * 0.03));
    });
    
    // Draw ecosystem-specific organisms
    this.drawEcosystemOrganisms(ctx, w, h, type);
    
    // Energy flow arrow
    ctx.strokeStyle = '#FFD700';
    ctx.fillStyle = '#FFD700';
    ctx.lineWidth = 5;
    this.drawArrow(ctx, w * 0.1, h * 0.45, w * 0.5, h * 0.6);
    ctx.font = `bold ${h * 0.022}px Arial`;
    ctx.textAlign = 'center';
    ctx.fillText('Energy Flow', w * 0.3, h * 0.5);
    
    // Nutrient cycle arrow
    ctx.strokeStyle = '#8B4513';
    ctx.fillStyle = '#8B4513';
    ctx.setLineDash([10, 5]);
    this.drawCurvedArrow(ctx, w * 0.7, h * 0.7, w * 0.4, h * 0.5);
    ctx.setLineDash([]);
    ctx.fillText('Nutrient Cycling', w * 0.55, h * 0.65);
  }

  static drawEcosystemOrganisms(ctx, w, h, type) {
    switch(type) {
      case 'forest':
        // Trees
        ctx.fillStyle = '#654321';
        ctx.fillRect(w * 0.3, h * 0.5, w * 0.03, h * 0.2);
        ctx.fillRect(w * 0.5, h * 0.45, w * 0.03, h * 0.25);
        ctx.fillStyle = '#2ECC40';
        ctx.beginPath();
        ctx.arc(w * 0.315, h * 0.45, w * 0.06, 0, Math.PI * 2);
        ctx.fill();
        ctx.beginPath();
        ctx.arc(w * 0.515, h * 0.4, w * 0.07, 0, Math.PI * 2);
        ctx.fill();
        
        // Deer
        ctx.fillStyle = '#A0522D';
        ctx.beginPath();
        ctx.ellipse(w * 0.4, h * 0.65, w * 0.04, h * 0.03, 0, 0, Math.PI * 2);
        ctx.fill();
        
        // Wolf
        ctx.fillStyle = '#696969';
        ctx.beginPath();
        ctx.ellipse(w * 0.6, h * 0.67, w * 0.035, h * 0.025, 0, 0, Math.PI * 2);
        ctx.fill();
        break;
        
      case 'aquatic':
        // Algae
        ctx.fillStyle = '#2ECC40';
        for(let i = 0; i < 15; i++) {
          ctx.beginPath();
          ctx.arc(w * (0.2 + Math.random() * 0.6), h * (0.3 + Math.random() * 0.2), w * 0.008, 0, Math.PI * 2);
          ctx.fill();
        }
        
        // Small fish
        ctx.fillStyle = '#FF851B';
        for(let i = 0; i < 5; i++) {
          const fx = w * (0.25 + i * 0.1);
          const fy = h * (0.5 + Math.sin(i) * 0.1);
          ctx.beginPath();
          ctx.ellipse(fx, fy, w * 0.025, h * 0.015, 0, 0, Math.PI * 2);
          ctx.fill();
          // Tail
          ctx.beginPath();
          ctx.moveTo(fx - w * 0.025, fy);
          ctx.lineTo(fx - w * 0.04, fy - h * 0.01);
          ctx.lineTo(fx - w * 0.04, fy + h * 0.01);
          ctx.closePath();
          ctx.fill();
        }
        
        // Large fish
        ctx.fillStyle = '#0074D9';
        ctx.beginPath();
        ctx.ellipse(w * 0.65, h * 0.55, w * 0.05, h * 0.03, 0, 0, Math.PI * 2);
        ctx.fill();
        break;
        
      case 'grassland':
        // Grass
        ctx.fillStyle = '#2ECC40';
        for(let i = 0; i < 30; i++) {
          const gx = w * (0.1 + Math.random() * 0.8);
          ctx.fillRect(gx, h * 0.5, w * 0.005, h * 0.08);
        }
        
        // Grasshopper
        ctx.fillStyle = '#7FFF00';
        ctx.beginPath();
        ctx.ellipse(w * 0.35, h * 0.55, w * 0.02, h * 0.015, 0, 0, Math.PI * 2);
        ctx.fill();
        
        // Rabbit
        ctx.fillStyle = '#D2B48C';
        ctx.beginPath();
        ctx.ellipse(w * 0.5, h * 0.56, w * 0.03, h * 0.025, 0, 0, Math.PI * 2);
        ctx.fill();
        
        // Hawk
        ctx.fillStyle = '#8B4513';
        ctx.beginPath();
        ctx.arc(w * 0.7, h * 0.3, w * 0.025, 0, Math.PI * 2);
        ctx.fill();
        // Wings
        ctx.beginPath();
        ctx.ellipse(w * 0.67, h * 0.3, w * 0.04, h * 0.015, -Math.PI / 4, 0, Math.PI * 2);
        ctx.fill();
        ctx.beginPath();
        ctx.ellipse(w * 0.73, h * 0.3, w * 0.04, h * 0.015, Math.PI / 4, 0, Math.PI * 2);
        ctx.fill();
        break;
        
      case 'desert':
        // Cactus
        ctx.fillStyle = '#2ECC40';
        ctx.fillRect(w * 0.25, h * 0.5, w * 0.03, h * 0.15);
        ctx.fillRect(w * 0.22, h * 0.55, w * 0.03, h * 0.08);
        ctx.fillRect(w * 0.28, h * 0.58, w * 0.03, h * 0.06);
        
        // Lizard
        ctx.fillStyle = '#CD853F';
        ctx.beginPath();
        ctx.ellipse(w * 0.45, h * 0.62, w * 0.025, h * 0.012, 0, 0, Math.PI * 2);
        ctx.fill();
        
        // Snake
        ctx.strokeStyle = '#8B7355';
        ctx.lineWidth = w * 0.015;
        ctx.beginPath();
        ctx.moveTo(w * 0.6, h * 0.63);
        for(let i = 0; i < 6; i++) {
          ctx.quadraticCurveTo(
            w * (0.61 + i * 0.02), 
            h * (0.63 + (i % 2 === 0 ? 0.02 : -0.02)),
            w * (0.62 + i * 0.02),
            h * 0.63
          );
        }
        ctx.stroke();
        break;
    }
  }

  static drawBioticFactors(ctx, w, h, type) {
    ctx.fillStyle = '#F0F8FF';
    ctx.fillRect(0, 0, w, h);
    
    ctx.fillStyle = '#000';
    ctx.font = `bold ${h * 0.045}px Arial`;
    ctx.textAlign = 'center';
    ctx.fillText('Biotic Factors (Living Components)', w / 2, h * 0.06);
    
    const categories = [
      { name: 'Producers', y: 0.2, color: '#2ECC40', examples: ['Plants', 'Algae', 'Phytoplankton', 'Trees'] },
      { name: 'Consumers', y: 0.4, color: '#FF851B', examples: ['Herbivores', 'Carnivores', 'Omnivores', 'Parasites'] },
      { name: 'Decomposers', y: 0.6, color: '#85144b', examples: ['Bacteria', 'Fungi', 'Earthworms', 'Insects'] }
    ];
    
    categories.forEach(cat => {
      // Category box
      ctx.fillStyle = cat.color;
      ctx.fillRect(w * 0.1, h * cat.y, w * 0.25, h * 0.15);
      ctx.strokeStyle = '#000';
      ctx.lineWidth = 3;
      ctx.strokeRect(w * 0.1, h * cat.y, w * 0.25, h * 0.15);
      
      ctx.fillStyle = '#FFF';
      ctx.font = `bold ${h * 0.03}px Arial`;
      ctx.textAlign = 'center';
      ctx.fillText(cat.name, w * 0.225, h * (cat.y + 0.05));
      
      // Examples
      ctx.fillStyle = '#000';
      ctx.font = `${h * 0.02}px Arial`;
      ctx.textAlign = 'left';
      cat.examples.forEach((example, idx) => {
        ctx.fillText(`• ${example}`, w * 0.4, h * (cat.y + 0.04 + idx * 0.03));
      });
    });
    
    // Interactions
    ctx.strokeStyle = '#0074D9';
    ctx.lineWidth = 4;
    this.drawArrow(ctx, w * 0.225, h * 0.35, w * 0.225, h * 0.4);
    ctx.fillStyle = '#0074D9';
    ctx.font = `${h * 0.02}px Arial`;
    ctx.textAlign = 'left';
    ctx.fillText('Eaten by', w * 0.25, h * 0.38);
    
    this.drawArrow(ctx, w * 0.225, h * 0.55, w * 0.225, h * 0.6);
    ctx.fillText('Eaten by', w * 0.25, h * 0.58);
    
    // Decomposition arrow
    ctx.setLineDash([5, 5]);
    this.drawCurvedArrow(ctx, w * 0.225, h * 0.75, w * 0.15, h * 0.35);
    ctx.setLineDash([]);
    ctx.fillText('Decompose', w * 0.05, h * 0.55);
    
    // Note
    ctx.fillStyle = '#000';
    ctx.font = `${h * 0.022}px Arial`;
    ctx.textAlign = 'center';
    ctx.fillText('All living organisms in an ecosystem', w / 2, h * 0.85);
    ctx.fillText('They interact with each other and the environment', w / 2, h * 0.89);
  }

  static drawAbioticFactors(ctx, w, h, type) {
    ctx.fillStyle = '#FFFACD';
    ctx.fillRect(0, 0, w, h);
    
    ctx.fillStyle = '#000';
    ctx.font = `bold ${h * 0.045}px Arial`;
    ctx.textAlign = 'center';
    ctx.fillText('Abiotic Factors (Non-Living Components)', w / 2, h * 0.06);
    
    const factors = [
      { 
        name: 'Sunlight', 
        x: 0.15, y: 0.15, 
        color: '#FFD700',
        description: 'Energy source for photosynthesis',
        icon: '☀'
      },
      { 
        name: 'Water', 
        x: 0.45, y: 0.15, 
        color: '#4A90E2',
        description: 'Essential for all life processes',
        icon: '💧'
      },
      { 
        name: 'Temperature', 
        x: 0.75, y: 0.15, 
        color: '#FF6347',
        description: 'Affects metabolic rates',
        icon: '🌡'
      },
      { 
        name: 'Air/Oxygen', 
        x: 0.15, y: 0.45, 
        color: '#87CEEB',
        description: 'Needed for respiration',
        icon: '🌬'
      },
      { 
        name: 'Soil', 
        x: 0.45, y: 0.45, 
        color: '#8B4513',
        description: 'Provides nutrients and support',
        icon: '🪨'
      },
      { 
        name: 'pH', 
        x: 0.75, y: 0.45, 
        color: '#9370DB',
        description: 'Acidity/alkalinity affects life',
        icon: '⚗'
      }
    ];
    
    factors.forEach(factor => {
      // Circle
      ctx.fillStyle = factor.color;
      ctx.beginPath();
      ctx.arc(w * factor.x, h * factor.y, w * 0.08, 0, Math.PI * 2);
      ctx.fill();
      ctx.strokeStyle = '#000';
      ctx.lineWidth = 3;
      ctx.stroke();
      
      // Icon
      ctx.fillStyle = '#FFF';
      ctx.font = `${h * 0.06}px Arial`;
      ctx.textAlign = 'center';
      ctx.fillText(factor.icon, w * factor.x, h * (factor.y + 0.02));
      
      // Name
      ctx.fillStyle = '#000';
      ctx.font = `bold ${h * 0.025}px Arial`;
      ctx.fillText(factor.name, w * factor.x, h * (factor.y + 0.12));
      
      // Description
      ctx.font = `${h * 0.018}px Arial`;
      ctx.fillText(factor.description, w * factor.x, h * (factor.y + 0.15));
    });
    
    // Bottom note
    ctx.fillStyle = '#000';
    ctx.font = `${h * 0.024}px Arial`;
    ctx.fillText('These physical and chemical factors influence', w / 2, h * 0.75);
    ctx.fillText('which organisms can survive in an ecosystem', w / 2, h * 0.79);
    
    // Additional factors list
    ctx.font = `${h * 0.02}px Arial`;
    ctx.fillText('Other factors: Humidity, Wind, Salinity, Light intensity, Nutrients, Precipitation', w / 2, h * 0.85);
  }

  static drawConsumersEcosystem(ctx, w, h, type) {
    ctx.fillStyle = '#FFF5EE';
    ctx.fillRect(0, 0, w, h);
    
    ctx.fillStyle = '#000';
    ctx.font = `bold ${h * 0.045}px Arial`;
    ctx.textAlign = 'center';
    ctx.fillText('Consumers in Ecosystems', w / 2, h * 0.06);
    
    const consumerTypes = [
      {
        name: 'Herbivores',
        subtitle: '(Primary Consumers)',
        color: '#FF851B',
        y: 0.18,
        examples: ['Deer', 'Rabbit', 'Cow', 'Grasshopper'],
        diet: 'Eat plants only'
      },
      {
        name: 'Carnivores',
        subtitle: '(Secondary/Tertiary Consumers)',
        color: '#E74C3C',
        y: 0.38,
        examples: ['Lion', 'Shark', 'Hawk', 'Snake'],
        diet: 'Eat other animals only'
      },
      {
        name: 'Omnivores',
        subtitle: '(Various levels)',
        color: '#9B59B6',
        y: 0.58,
        examples: ['Bear', 'Human', 'Raccoon', 'Pig'],
        diet: 'Eat plants and animals'
      },
      {
        name: 'Scavengers',
        subtitle: '(Opportunistic)',
        color: '#7F8C8D',
        y: 0.78,
        examples: ['Vulture', 'Hyena', 'Crab', 'Crow'],
        diet: 'Eat dead organisms'
      }
    ];
    
    consumerTypes.forEach(consumer => {
      // Box
      ctx.fillStyle = consumer.color;
      ctx.fillRect(w * 0.05, h * consumer.y, w * 0.35, h * 0.15);
      ctx.strokeStyle = '#000';
      ctx.lineWidth = 2;
      ctx.strokeRect(w * 0.05, h * consumer.y, w * 0.35, h * 0.15);
      
      // Title
      ctx.fillStyle = '#FFF';
      ctx.font = `bold ${h * 0.028}px Arial`;
      ctx.textAlign = 'left';
      ctx.fillText(consumer.name, w * 0.07, h * (consumer.y + 0.04));
      ctx.font = `${h * 0.018}px Arial`;
      ctx.fillText(consumer.subtitle, w * 0.07, h * (consumer.y + 0.07));
      
      // Diet
      ctx.fillStyle = '#000';
      ctx.font = `italic ${h * 0.02}px Arial`;
      ctx.fillText(consumer.diet, w * 0.07, h * (consumer.y + 0.11));
      
      // Examples
      ctx.font = `${h * 0.018}px Arial`;
      ctx.textAlign = 'right';
      const examplesList = consumer.examples.join(', ');
      ctx.fillText(examplesList, w * 0.38, h * (consumer.y + 0.14));
    });
    
    // Visual representations
    const visualX = 0.55;
    
    // Herbivore illustration
    ctx.fillStyle = '#2ECC40';
    ctx.fillRect(w * 0.48, h * 0.23, w * 0.04, h * 0.06);
    ctx.font = `${h * 0.04}px Arial`;
    ctx.textAlign = 'center';
    ctx.fillText('🌱', w * 0.5, h * 0.27);
    
    ctx.strokeStyle = '#FF851B';
    ctx.fillStyle = '#FF851B';
    ctx.lineWidth = 3;
    this.drawArrow(ctx, w * 0.52, h * 0.26, w * 0.58, h * 0.26);
    
    ctx.fillText('🦌', w * 0.62, h * 0.27);
    
    // Carnivore illustration
    ctx.fillStyle = '#FF851B';
    ctx.fillText('🐰', w * 0.5, h * 0.47);
    
    ctx.strokeStyle = '#E74C3C';
    ctx.fillStyle = '#E74C3C';
    this.drawArrow(ctx, w * 0.52, h * 0.46, w * 0.58, h * 0.46);
    
    ctx.fillText('🦁', w * 0.62, h * 0.47);
    
    // Omnivore illustration
    ctx.fillStyle = '#2ECC40';
    ctx.fillText('🌾', w * 0.48, h * 0.67);
    ctx.fillStyle = '#FF851B';
    ctx.fillText('🐟', w * 0.53, h * 0.67);
    
    ctx.strokeStyle = '#9B59B6';
    ctx.fillStyle = '#9B59B6';
    this.drawArrow(ctx, w * 0.55, h * 0.66, w * 0.59, h * 0.66);
    
    ctx.fillText('🐻', w * 0.62, h * 0.67);
    
    // Scavenger illustration
    ctx.fillStyle = '#8B4513';
    ctx.fillText('💀', w * 0.5, h * 0.87);
    
    ctx.strokeStyle = '#7F8C8D';
    ctx.fillStyle = '#7F8C8D';
    this.drawArrow(ctx, w * 0.52, h * 0.86, w * 0.58, h * 0.86);
    
    ctx.fillText('🦅', w * 0.62, h * 0.87);
    
    // Note
    ctx.fillStyle = '#000';
    ctx.font = `${h * 0.02}px Arial`;
    ctx.textAlign = 'center';
    ctx.fillText('Consumers obtain energy by eating other organisms', w * 0.7, h * 0.35);
  }

  // ===== BIOMES DIAGRAM =====
  static drawBiomes(ctx, x, y, width, height, biome, characteristic) {
    ctx.save();
    ctx.translate(x, y);
    
    if(biome === 'all') {
      this.drawAllBiomes(ctx, width, height, characteristic);
    } else {
      this.drawSingleBiome(ctx, width, height, biome, characteristic);
    }
    
    ctx.restore();
  }

  static drawAllBiomes(ctx, w, h, characteristic) {
    ctx.fillStyle = '#F0F8FF';
    ctx.fillRect(0, 0, w, h);
    
    ctx.fillStyle = '#000';
    ctx.font = `bold ${h * 0.04}px Arial`;
    ctx.textAlign = 'center';
    ctx.fillText('Major World Biomes', w / 2, h * 0.05);
    
    const biomes = [
      { name: 'Tropical Rainforest', color: '#228B22', temp: 'Hot', precip: 'Very High', x: 0.15, y: 0.2 },
      { name: 'Desert', color: '#DEB887', temp: 'Hot/Cold', precip: 'Very Low', x: 0.45, y: 0.2 },
      { name: 'Tundra', color: '#E0FFFF', temp: 'Very Cold', precip: 'Low', x: 0.75, y: 0.2 },
      { name: 'Taiga', color: '#2F4F2F', temp: 'Cold', precip: 'Moderate', x: 0.15, y: 0.5 },
      { name: 'Temperate Forest', color: '#6B8E23', temp: 'Moderate', precip: 'Moderate', x: 0.45, y: 0.5 },
      { name: 'Grassland', color: '#9ACD32', temp: 'Moderate', precip: 'Low-Moderate', x: 0.75, y: 0.5 },
      { name: 'Savanna', color: '#DAA520', temp: 'Warm', precip: 'Seasonal', x: 0.3, y: 0.8 },
      { name: 'Marine', color: '#1E90FF', temp: 'Varies', precip: 'N/A', x: 0.7, y: 0.8 }
    ];
    
    biomes.forEach(biome => {
      // Biome box
      ctx.fillStyle = biome.color;
      ctx.fillRect(w * (biome.x - 0.12), h * (biome.y - 0.05), w * 0.24, h * 0.2);
      ctx.strokeStyle = '#000';
      ctx.lineWidth = 2;
      ctx.strokeRect(w * (biome.x - 0.12), h * (biome.y - 0.05), w * 0.24, h * 0.2);
      
      // Name
      ctx.fillStyle = '#FFF';
      ctx.strokeStyle = '#000';
      ctx.lineWidth = 3;
      ctx.font = `bold ${h * 0.022}px Arial`;
      ctx.textAlign = 'center';
      ctx.strokeText(biome.name, w * biome.x, h * biome.y);
      ctx.fillText(biome.name, w * biome.x, h * biome.y);
      
      // Climate info
      ctx.fillStyle = '#000';
      ctx.fillStyle = 'rgba(255, 255, 255, 0.9)';
      ctx.fillRect(w * (biome.x - 0.11), h * (biome.y + 0.02), w * 0.22, h * 0.1);
      
      ctx.fillStyle = '#000';
      ctx.font = `${h * 0.016}px Arial`;
      ctx.fillText(`Temp: ${biome.temp}`, w * biome.x, h * (biome.y + 0.05));
      ctx.fillText(`Precip: ${biome.precip}`, w * biome.x, h * (biome.y + 0.08));
    });
  }

  static drawSingleBiome(ctx, w, h, biome, characteristic) {
    // Implementation for detailed single biome view
    ctx.fillStyle = '#F5F5DC';
    ctx.fillRect(0, 0, w, h);
    
    ctx.fillStyle = '#000';
    ctx.font = `bold ${h * 0.045}px Arial`;
    ctx.textAlign = 'center';
    const biomeName = biome.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
    ctx.fillText(`${biomeName} Biome`, w / 2, h * 0.06);
    
    // Draw based on characteristic
    // This would contain detailed implementations for each biome type
    ctx.font = `${h * 0.025}px Arial`;
    ctx.fillText(`Characteristic: ${characteristic}`, w / 2, h * 0.12);
  }

  // ===== PREDATOR-PREY GRAPH =====
  static drawPredatorPrey(ctx, x, y, width, height, display, phase) {
    ctx.save();
    ctx.translate(x, y);
    
    switch(display) {
      case 'time-series':
        this.drawPredatorPreyTimeSeries(ctx, width, height, phase);
        break;
      case 'phase-plot':
        this.drawPredatorPreyPhasePlot(ctx, width, height, phase);
        break;
      case 'both':
        this.drawPredatorPreyBoth(ctx, width, height, phase);
        break;
    }
    
    ctx.restore();
  }

  static drawPredatorPreyTimeSeries(ctx, w, h, phase) {
    // Background
    ctx.fillStyle = '#FFF';
    ctx.fillRect(0, 0, w, h);
    
    // Title
    ctx.fillStyle = '#000';
    ctx.font = `bold ${h * 0.04}px Arial`;
    ctx.textAlign = 'center';
    ctx.fillText('Predator-Prey Population Dynamics', w / 2, h * 0.05);
    
    // Axes
    ctx.strokeStyle = '#000';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(w * 0.1, h * 0.15);
    ctx.lineTo(w * 0.1, h * 0.75);
    ctx.lineTo(w * 0.9, h * 0.75);
    ctx.stroke();
    
    // Axis labels
    ctx.font = `bold ${h * 0.025}px Arial`;
    ctx.save();
    ctx.translate(w * 0.03, h * 0.45);
    ctx.rotate(-Math.PI / 2);
    ctx.fillText('Population Size', 0, 0);
    ctx.restore();
    
    ctx.fillText('Time', w / 2, h * 0.82);
    
    // Generate oscillating populations
    const points = 200;
    const preyData = [];
    const predatorData = [];
    
    for(let i = 0; i < points; i++) {
      const t = (i / points) * 4 * Math.PI; // 2 complete cycles
      const prey = 50 + 40 * Math.sin(t);
      const predator = 30 + 25 * Math.sin(t - Math.PI / 2); // Lag behind prey
      
      preyData.push({ x: w * (0.1 + (i / points) * 0.8), y: h * (0.75 - (prey / 100) * 0.6) });
      predatorData.push({ x: w * (0.1 + (i / points) * 0.8), y: h * (0.75 - (predator / 100) * 0.6) });
    }
    
    // Draw prey population (rabbits - green)
    ctx.strokeStyle = '#2ECC40';
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.moveTo(preyData[0].x, preyData[0].y);
    preyData.forEach(point => ctx.lineTo(point.x, point.y));
    ctx.stroke();
    
    // Draw predator population (foxes - red)
    ctx.strokeStyle = '#E74C3C';
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.moveTo(predatorData[0].x, predatorData[0].y);
    predatorData.forEach(point => ctx.lineTo(point.x, point.y));
    ctx.stroke();
    
    // Legend
    ctx.fillStyle = '#2ECC40';
    ctx.fillRect(w * 0.7, h * 0.12, w * 0.04, h * 0.02);
    ctx.fillStyle = '#000';
    ctx.font = `${h * 0.022}px Arial`;
    ctx.textAlign = 'left';
    ctx.fillText('Prey Population (Rabbits)', w * 0.75, h * 0.135);
    
    ctx.fillStyle = '#E74C3C';
    ctx.fillRect(w * 0.7, h * 0.16, w * 0.04, h * 0.02);
    ctx.fillStyle = '#000';
    ctx.fillText('Predator Population (Foxes)', w * 0.75, h * 0.175);
    
    // Key observations
    ctx.font = `${h * 0.02}px Arial`;
    ctx.fillText('Key Observations:', w * 0.12, h * 0.88);
    ctx.font = `${h * 0.018}px Arial`;
    ctx.fillText('• Prey population peaks first', w * 0.12, h * 0.92);
    ctx.fillText('• Predator population follows with a lag', w * 0.12, h * 0.96);
    
    // Annotations on graph
    if(phase === 'complete') {
      // Peak annotations
      ctx.fillStyle = '#2ECC40';
      ctx.font = `${h * 0.018}px Arial`;
      ctx.textAlign = 'center';
      ctx.fillText('Prey peak', w * 0.3, h * 0.22);
      ctx.beginPath();
      ctx.arc(w * 0.3, h * 0.24, w * 0.008, 0, Math.PI * 2);
      ctx.fill();
      
      ctx.fillStyle = '#E74C3C';
      ctx.fillText('Predator peak', w * 0.42, h * 0.32);
      ctx.beginPath();
      ctx.arc(w * 0.42, h * 0.34, w * 0.008, 0, Math.PI * 2);
      ctx.fill();
    }
  }

  static drawPredatorPreyPhasePlot(ctx, w, h, phase) {
    ctx.fillStyle = '#FFF';
    ctx.fillRect(0, 0, w, h);
    
    // Title
    ctx.fillStyle = '#000';
    ctx.font = `bold ${h * 0.04}px Arial`;
    ctx.textAlign = 'center';
    ctx.fillText('Predator-Prey Phase Plot', w / 2, h * 0.05);
    
    // Axes
    ctx.strokeStyle = '#000';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(w * 0.15, h * 0.15);
    ctx.lineTo(w * 0.15, h * 0.8);
    ctx.lineTo(w * 0.9, h * 0.8);
    ctx.stroke();
    
    // Labels
    ctx.font = `bold ${h * 0.025}px Arial`;
    ctx.fillText('Prey Population', w / 2, h * 0.88);
    
    ctx.save();
    ctx.translate(w * 0.05, h * 0.5);
    ctx.rotate(-Math.PI / 2);
    ctx.fillText('Predator Population', 0, 0);
    ctx.restore();
    
    // Draw spiral/cycle
    ctx.strokeStyle = '#0074D9';
    ctx.lineWidth = 3;
    ctx.beginPath();
    
    const centerX = w * 0.5;
    const centerY = h * 0.5;
    const cycles = 3;
    
    for(let i = 0; i <= 200; i++) {
      const t = (i / 200) * cycles * 2 * Math.PI;
      const radius = w * (0.15 + 0.1 * (1 - i / 200)); // Spiral inward
      const x = centerX + radius * Math.cos(t);
      const y = centerY + radius * Math.sin(t);
      
      if(i === 0) {
        ctx.moveTo(x, y);
      } else {
        ctx.lineTo(x, y);
      }
    }
    ctx.stroke();
    
    // Equilibrium point
    ctx.fillStyle = '#E74C3C';
    ctx.beginPath();
    ctx.arc(centerX, centerY, w * 0.012, 0, Math.PI * 2);
    ctx.fill();
    ctx.strokeStyle = '#000';
    ctx.lineWidth = 2;
    ctx.stroke();
    
    ctx.fillStyle = '#000';
    ctx.font = `${h * 0.02}px Arial`;
    ctx.textAlign = 'left';
    ctx.fillText('Equilibrium', centerX + w * 0.02, centerY);
    
    // Direction arrows
    ctx.fillStyle = '#0074D9';
    ctx.font = `${h * 0.025}px Arial`;
    ctx.textAlign = 'center';
    ctx.fillText('→', w * 0.65, h * 0.35);
    
    // Explanation
    ctx.fillStyle = '#000';
    ctx.font = `${h * 0.018}px Arial`;
    ctx.fillText('Populations cycle around equilibrium point', w / 2, h * 0.95);
  }

  static drawPredatorPreyBoth(ctx, w, h, phase) {
    // Left side: Time series
    ctx.save();
    this.drawPredatorPreyTimeSeries(ctx, w * 0.48, h, phase);
    ctx.restore();
    
    // Divider
    ctx.strokeStyle = '#CCC';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(w * 0.5, h * 0.1);
    ctx.lineTo(w * 0.5, h * 0.9);
    ctx.stroke();
    
    // Right side: Phase plot
    ctx.save();
    ctx.translate(w * 0.52, 0);
    this.drawPredatorPreyPhasePlot(ctx, w * 0.48, h, phase);
    ctx.restore();
  }
}




