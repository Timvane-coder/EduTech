import { createCanvas } from '@napi-rs/canvas'; import
ExcelJS from 'exceljs'; import fs from 'fs'; import os
from 'os'; import path from 'path'; import readline from
'readline'; import * as math from 'mathjs'; import
GIFEncoder from 'gifencoder'; import { PassThrough }
from 'stream';




class AnatomicalShapes {

// ============ EnergySystemShapes =========================== 
  
  // ===== CELLULAR RESPIRATION =====
  
  static drawCellularRespiration(ctx, x, y, width, height, stage, location) {
    ctx.save();
    ctx.translate(x, y);
    
    switch(stage) {
      case 'complete':
        this.drawCompleteRespiration(ctx, width, height, location);
        break;
      case 'glycolysis':
        this.drawGlycolysis(ctx, width, height, location);
        break;
      case 'krebs-cycle':
        this.drawKrebsCycle(ctx, width, height, location);
        break;
      case 'electron-transport':
        this.drawElectronTransport(ctx, width, height, location);
        break;
      case 'oxidative-phosphorylation':
        this.drawOxidativePhosphorylation(ctx, width, height, location);
        break;
    }
    
    ctx.restore();
  }
  
  static drawCompleteRespiration(ctx, w, h, location) {
    // Draw cell outline
    ctx.strokeStyle = '#2C3E50';
    ctx.lineWidth = 3;
    ctx.strokeRect(0, 0, w, h);
    
    // Cytoplasm background
    const cytoGradient = ctx.createLinearGradient(0, 0, 0, h * 0.4);
    cytoGradient.addColorStop(0, '#E8F4F8');
    cytoGradient.addColorStop(1, '#D5E8EE');
    ctx.fillStyle = cytoGradient;
    ctx.fillRect(0, 0, w, h * 0.4);
    
    // Mitochondria background
    const mitoGradient = ctx.createLinearGradient(0, h * 0.4, 0, h);
    mitoGradient.addColorStop(0, '#FFF4E6');
    mitoGradient.addColorStop(1, '#FFE8CC');
    ctx.fillStyle = mitoGradient;
    ctx.fillRect(0, h * 0.4, w, h * 0.6);
    
    // Stage 1: Glycolysis (Cytoplasm)
    ctx.fillStyle = '#3498DB';
    ctx.font = 'bold 18px Arial';
    ctx.fillText('GLYCOLYSIS', w * 0.1, h * 0.08);
    
    // Glucose
    this.drawMolecule(ctx, w * 0.1, h * 0.15, 40, '#FF6B6B', 'Glucose\nC₆H₁₂O₆');
    
    // Arrow with ATP
    this.drawArrow(ctx, w * 0.15, h * 0.2, w * 0.25, h * 0.2, '#27AE60');
    ctx.fillStyle = '#27AE60';
    ctx.font = '12px Arial';
    ctx.fillText('2 ATP', w * 0.18, h * 0.18);
    
    // Pyruvate (2x)
    this.drawMolecule(ctx, w * 0.3, h * 0.15, 30, '#E74C3C', '2 Pyruvate');
    
    // Net products
    ctx.fillStyle = '#27AE60';
    ctx.font = 'bold 14px Arial';
    ctx.fillText('Net: 2 ATP, 2 NADH', w * 0.5, h * 0.2);
    
    // Dividing line
    ctx.strokeStyle = '#34495E';
    ctx.lineWidth = 2;
    ctx.setLineDash([5, 5]);
    ctx.beginPath();
    ctx.moveTo(0, h * 0.4);
    ctx.lineTo(w, h * 0.4);
    ctx.stroke();
    ctx.setLineDash([]);
    
    // Label mitochondrion
    ctx.fillStyle = '#E67E22';
    ctx.font = 'bold 16px Arial';
    ctx.fillText('MITOCHONDRION', w * 0.05, h * 0.45);
    
    // Stage 2: Krebs Cycle
    ctx.fillStyle = '#9B59B6';
    ctx.font = 'bold 18px Arial';
    ctx.fillText('KREBS CYCLE', w * 0.1, h * 0.55);
    
    // Circular pathway
    const centerX = w * 0.3;
    const centerY = h * 0.7;
    const radius = h * 0.12;
    
    ctx.strokeStyle = '#9B59B6';
    ctx.lineWidth = 4;
    ctx.beginPath();
    ctx.arc(centerX, centerY, radius, 0, Math.PI * 2);
    ctx.stroke();
    
    // Add cycle molecules
    this.drawMolecule(ctx, centerX, centerY - radius, 25, '#E74C3C', 'Acetyl-CoA');
    this.drawMolecule(ctx, centerX + radius, centerY, 25, '#3498DB', 'Citrate');
    this.drawMolecule(ctx, centerX, centerY + radius, 25, '#F39C12', 'α-Keto');
    this.drawMolecule(ctx, centerX - radius, centerY, 25, '#1ABC9C', 'Oxalo');
    
    // Products
    ctx.fillStyle = '#27AE60';
    ctx.font = 'bold 14px Arial';
    ctx.fillText('Per cycle:', w * 0.48, h * 0.65);
    ctx.font = '12px Arial';
    ctx.fillText('3 NADH, 1 FADH₂', w * 0.48, h * 0.68);
    ctx.fillText('1 ATP, 2 CO₂', w * 0.48, h * 0.71);
    
    // Stage 3: Electron Transport Chain
    ctx.fillStyle = '#E74C3C';
    ctx.font = 'bold 18px Arial';
    ctx.fillText('ELECTRON TRANSPORT CHAIN', w * 0.55, h * 0.52);
    
    // Inner membrane
    ctx.strokeStyle = '#C0392B';
    ctx.lineWidth = 6;
    ctx.beginPath();
    ctx.moveTo(w * 0.55, h * 0.58);
    ctx.lineTo(w * 0.92, h * 0.58);
    ctx.stroke();
    
    // Complexes I-IV
    const complexes = [
      {x: 0.58, label: 'I'},
      {x: 0.68, label: 'II'},
      {x: 0.78, label: 'III'},
      {x: 0.88, label: 'IV'}
    ];
    
    complexes.forEach(complex => {
      ctx.fillStyle = '#E74C3C';
      ctx.fillRect(w * complex.x - 15, h * 0.55, 30, 50);
      ctx.fillStyle = '#FFF';
      ctx.font = 'bold 16px Arial';
      ctx.fillText(complex.label, w * complex.x - 8, h * 0.59);
    });
    
    // Proton pumping (H+ arrows)
    ctx.fillStyle = '#F39C12';
    ctx.font = 'bold 14px Arial';
    [0.58, 0.78, 0.88].forEach(xPos => {
      this.drawArrow(ctx, w * xPos, h * 0.55, w * xPos, h * 0.50, '#F39C12');
      ctx.fillText('H⁺', w * xPos - 8, h * 0.49);
    });
    
    // ATP Synthase
    ctx.fillStyle = '#27AE60';
    ctx.beginPath();
    ctx.arc(w * 0.72, h * 0.58, 20, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = '#FFF';
    ctx.font = 'bold 12px Arial';
    ctx.fillText('ATP', w * 0.71, h * 0.60);
    ctx.fillText('Syn', w * 0.71, h * 0.63);
    
    // Final ATP yield
    ctx.fillStyle = '#27AE60';
    ctx.font = 'bold 20px Arial';
    ctx.fillText('~30-32 ATP', w * 0.65, h * 0.88);
    
    // O₂ and H₂O
    this.drawMolecule(ctx, w * 0.92, h * 0.70, 25, '#3498DB', 'O₂');
    this.drawArrow(ctx, w * 0.92, h * 0.73, w * 0.92, h * 0.80, '#3498DB');
    this.drawMolecule(ctx, w * 0.92, h * 0.85, 25, '#1ABC9C', 'H₂O');
  }
  
  static drawGlycolysis(ctx, w, h, location) {
    // Title
    ctx.fillStyle = '#2C3E50';
    ctx.font = 'bold 24px Arial';
    ctx.fillText('GLYCOLYSIS', w * 0.35, h * 0.08);
    
    // Subtitle
    ctx.font = '16px Arial';
    ctx.fillText('(Cytoplasm)', w * 0.38, h * 0.12);
    
    // Background
    ctx.fillStyle = '#ECF0F1';
    ctx.fillRect(w * 0.1, h * 0.15, w * 0.8, h * 0.75);
    
    const stepY = h * 0.2;
    const stepHeight = h * 0.08;
    
    // Step 1: Glucose
    this.drawMolecule(ctx, w * 0.2, stepY, 50, '#FF6B6B', 'Glucose');
    ctx.fillStyle = '#34495E';
    ctx.font = '14px Arial';
    ctx.fillText('C₆H₁₂O₆', w * 0.16, stepY + 60);
    
    // ATP investment
    this.drawArrow(ctx, w * 0.25, stepY + 30, w * 0.25, stepY + stepHeight, '#E74C3C');
    ctx.fillStyle = '#E74C3C';
    ctx.font = 'bold 12px Arial';
    ctx.fillText('ATP → ADP', w * 0.27, stepY + 50);
    
    // Step 2: Glucose-6-Phosphate
    this.drawMolecule(ctx, w * 0.2, stepY + stepHeight, 45, '#FF8C94', 'G6P');
    
    this.drawArrow(ctx, w * 0.25, stepY + stepHeight + 30, w * 0.25, stepY + stepHeight * 2, '#666');
    
    // Step 3: Fructose-6-Phosphate
    this.drawMolecule(ctx, w * 0.2, stepY + stepHeight * 2, 45, '#FFA07A', 'F6P');
    
    // ATP investment
    this.drawArrow(ctx, w * 0.25, stepY + stepHeight * 2 + 30, w * 0.25, stepY + stepHeight * 3, '#E74C3C');
    ctx.fillStyle = '#E74C3C';
    ctx.fillText('ATP → ADP', w * 0.27, stepY + stepHeight * 2 + 50);
    
    // Step 4: Fructose-1,6-Bisphosphate
    this.drawMolecule(ctx, w * 0.2, stepY + stepHeight * 3, 45, '#FFB6C1', 'F-1,6-BP');
    
    this.drawArrow(ctx, w * 0.25, stepY + stepHeight * 3 + 30, w * 0.25, stepY + stepHeight * 4, '#666');
    ctx.fillStyle = '#9B59B6';
    ctx.fillText('Split', w * 0.27, stepY + stepHeight * 3 + 50);
    
    // Split into two pathways
    const leftX = w * 0.15;
    const rightX = w * 0.35;
    const splitY = stepY + stepHeight * 4;
    
    // DHAP and G3P
    this.drawMolecule(ctx, leftX, splitY, 35, '#DDA0DD', 'DHAP');
    this.drawMolecule(ctx, rightX, splitY, 35, '#DA70D6', 'G3P');
    
    // Interconversion
    this.drawArrow(ctx, leftX + 25, splitY + 10, rightX - 25, splitY + 10, '#9B59B6');
    
    // Continue with G3P (x2)
    this.drawArrow(ctx, w * 0.25, splitY + 30, w * 0.25, splitY + stepHeight, '#666');
    
    // Step 5: 1,3-Bisphosphoglycerate (x2)
    this.drawMolecule(ctx, w * 0.2, splitY + stepHeight, 40, '#BA55D3', '1,3-BPG');
    ctx.fillStyle = '#34495E';
    ctx.fillText('(x2)', w * 0.26, splitY + stepHeight + 45);
    
    // First ATP generation
    this.drawArrow(ctx, w * 0.25, splitY + stepHeight + 30, w * 0.25, splitY + stepHeight * 2, '#27AE60');
    ctx.fillStyle = '#27AE60';
    ctx.font = 'bold 12px Arial';
    ctx.fillText('2 ATP', w * 0.27, splitY + stepHeight + 50);
    ctx.fillText('2 NADH', w * 0.27, splitY + stepHeight + 65);
    
    // Step 6: 3-Phosphoglycerate (x2)
    this.drawMolecule(ctx, w * 0.2, splitY + stepHeight * 2, 40, '#9370DB', '3-PG');
    
    this.drawArrow(ctx, w * 0.25, splitY + stepHeight * 2 + 30, w * 0.25, splitY + stepHeight * 3, '#666');
    
    // Step 7: 2-Phosphoglycerate (x2)
    this.drawMolecule(ctx, w * 0.2, splitY + stepHeight * 3, 40, '#8A2BE2', '2-PG');
    
    this.drawArrow(ctx, w * 0.25, splitY + stepHeight * 3 + 30, w * 0.25, splitY + stepHeight * 4, '#666');
    
    // Step 8: Phosphoenolpyruvate (x2)
    this.drawMolecule(ctx, w * 0.2, splitY + stepHeight * 4, 40, '#9400D3', 'PEP');
    
    // Final ATP generation
    this.drawArrow(ctx, w * 0.25, splitY + stepHeight * 4 + 30, w * 0.25, splitY + stepHeight * 5, '#27AE60');
    ctx.fillStyle = '#27AE60';
    ctx.fillText('2 ATP', w * 0.27, splitY + stepHeight * 4 + 50);
    
    // Final: Pyruvate (x2)
    this.drawMolecule(ctx, w * 0.2, splitY + stepHeight * 5, 45, '#E74C3C', 'Pyruvate');
    ctx.fillStyle = '#34495E';
    ctx.font = '14px Arial';
    ctx.fillText('(x2)', w * 0.24, splitY + stepHeight * 5 + 50);
    
    // Summary box
    ctx.fillStyle = '#27AE60';
    ctx.fillRect(w * 0.55, h * 0.3, w * 0.35, h * 0.35);
    ctx.fillStyle = '#FFF';
    ctx.font = 'bold 20px Arial';
    ctx.fillText('NET PRODUCTS', w * 0.58, h * 0.36);
    ctx.font = '18px Arial';
    ctx.fillText('Input: 1 Glucose', w * 0.58, h * 0.42);
    ctx.fillText('Output: 2 Pyruvate', w * 0.58, h * 0.48);
    ctx.fillText('Energy:', w * 0.58, h * 0.54);
    ctx.fillText('  • 2 ATP (net)', w * 0.58, h * 0.60);
    ctx.fillText('  • 2 NADH', w * 0.58, h * 0.66);
  }
  
  static drawKrebsCycle(ctx, w, h, location) {
    // Title
    ctx.fillStyle = '#2C3E50';
    ctx.font = 'bold 24px Arial';
    ctx.fillText('KREBS CYCLE (Citric Acid Cycle)', w * 0.22, h * 0.08);
    
    // Subtitle
    ctx.font = '16px Arial';
    ctx.fillText('(Mitochondrial Matrix)', w * 0.35, h * 0.12);
    
    // Central cycle
    const centerX = w * 0.4;
    const centerY = h * 0.5;
    const radius = h * 0.25;
    
    // Cycle background
    ctx.fillStyle = '#FFF9E6';
    ctx.beginPath();
    ctx.arc(centerX, centerY, radius + 40, 0, Math.PI * 2);
    ctx.fill();
    
    // Main cycle path
    ctx.strokeStyle = '#9B59B6';
    ctx.lineWidth = 6;
    ctx.beginPath();
    ctx.arc(centerX, centerY, radius, 0, Math.PI * 2);
    ctx.stroke();
    
    // 8 steps around the cycle
    const steps = [
      {angle: -90, name: 'Acetyl-CoA', color: '#E74C3C', product: ''},
      {angle: -45, name: 'Citrate', color: '#3498DB', product: ''},
      {angle: 0, name: 'Isocitrate', color: '#1ABC9C', product: 'NADH + CO₂'},
      {angle: 45, name: 'α-Ketoglutarate', color: '#F39C12', product: 'NADH + CO₂'},
      {angle: 90, name: 'Succinyl-CoA', color: '#E67E22', product: 'ATP'},
      {angle: 135, name: 'Succinate', color: '#95A5A6', product: 'FADH₂'},
      {angle: 180, name: 'Fumarate', color: '#34495E', product: ''},
      {angle: 225, name: 'Malate', color: '#16A085', product: 'NADH'}
    ];
    
    steps.forEach((step, i) => {
      const rad = (step.angle * Math.PI) / 180;
      const x = centerX + radius * Math.cos(rad);
      const y = centerY + radius * Math.sin(rad);
      
      // Molecule
      this.drawMolecule(ctx, x, y, 35, step.color, step.name);
      
      // Product if any
      if (step.product) {
        const productX = centerX + (radius + 80) * Math.cos(rad);
        const productY = centerY + (radius + 80) * Math.sin(rad);
        ctx.fillStyle = '#27AE60';
        ctx.font = 'bold 14px Arial';
        ctx.fillText(step.product, productX - 30, productY);
        
        // Arrow to product
        this.drawArrow(ctx, x, y, productX - 35, productY, '#27AE60', 2);
      }
      
      // Arrow to next step
      const nextStep = steps[(i + 1) % steps.length];
      const nextRad = (nextStep.angle * Math.PI) / 180;
      const nextX = centerX + radius * Math.cos(nextRad);
      const nextY = centerY + radius * Math.sin(nextRad);
      
      const midRad = ((step.angle + nextStep.angle) / 2 * Math.PI) / 180;
      const arcX = centerX + (radius + 15) * Math.cos(midRad);
      const arcY = centerY + (radius + 15) * Math.sin(midRad);
      
      this.drawCurvedArrow(ctx, x + 20 * Math.cos(rad), y + 20 * Math.sin(rad), 
                          nextX - 20 * Math.cos(nextRad), nextY - 20 * Math.sin(nextRad), '#9B59B6');
    });
    
    // Oxaloacetate at bottom (regeneration)
    const oaaX = centerX;
    const oaaY = centerY + radius;
    ctx.strokeStyle = '#C0392B';
    ctx.lineWidth = 3;
    ctx.setLineDash([5, 5]);
    ctx.beginPath();
    ctx.arc(oaaX, oaaY, 45, 0, Math.PI * 2);
    ctx.stroke();
    ctx.setLineDash([]);
    ctx.fillStyle = '#C0392B';
    ctx.font = 'bold 12px Arial';
    ctx.fillText('Oxaloacetate', oaaX - 40, oaaY + 60);
    ctx.fillText('(regenerated)', oaaX - 35, oaaY + 73);
    
    // Summary box
    ctx.fillStyle = '#27AE60';
    ctx.fillRect(w * 0.68, h * 0.25, w * 0.28, h * 0.5);
    ctx.fillStyle = '#FFF';
    ctx.font = 'bold 20px Arial';
    ctx.fillText('PER CYCLE', w * 0.71, h * 0.32);
    ctx.font = '16px Arial';
    ctx.fillText('Input:', w * 0.71, h * 0.38);
    ctx.fillText('  • 1 Acetyl-CoA', w * 0.71, h * 0.43);
    ctx.fillText('  • 3 NAD⁺', w * 0.71, h * 0.48);
    ctx.fillText('  • 1 FAD', w * 0.71, h * 0.53);
    ctx.fillText('  • 1 ADP + Pi', w * 0.71, h * 0.58);
    ctx.fillText('Output:', w * 0.71, h * 0.65);
    ctx.fillText('  • 3 NADH', w * 0.71, h * 0.70);
    ctx.fillText('  • 1 FADH₂', w * 0.71, h * 0.75);
    ctx.fillText('  • 1 ATP', w * 0.71, h * 0.80);
    ctx.fillText('  • 2 CO₂', w * 0.71, h * 0.85);
    
    // Note
    ctx.fillStyle = '#E74C3C';
    ctx.font = 'bold 14px Arial';
    ctx.fillText('× 2 per glucose molecule!', w * 0.7, h * 0.92);
  }
  
  static drawElectronTransport(ctx, w, h, location) {
    // Title
    ctx.fillStyle = '#2C3E50';
    ctx.font = 'bold 24px Arial';
    ctx.fillText('ELECTRON TRANSPORT CHAIN', w * 0.25, h * 0.08);
    
    // Subtitle
    ctx.font = '16px Arial';
    ctx.fillText('(Inner Mitochondrial Membrane)', w * 0.32, h * 0.12);
    
    // Intermembrane space (top)
    ctx.fillStyle = '#FFE5E5';
    ctx.fillRect(0, h * 0.15, w, h * 0.25);
    ctx.fillStyle = '#C0392B';
    ctx.font = 'bold 16px Arial';
    ctx.fillText('Intermembrane Space (High H⁺)', w * 0.05, h * 0.2);
    
    // Inner mitochondrial membrane
    ctx.fillStyle = '#E74C3C';
    ctx.fillRect(0, h * 0.4, w, h * 0.08);
    
    // Matrix (bottom)
    ctx.fillStyle = '#E8F4F8';
    ctx.fillRect(0, h * 0.48, w, h * 0.52);
    ctx.fillStyle = '#2980B9';
    ctx.font = 'bold 16px Arial';
    ctx.fillText('Mitochondrial Matrix (Low H⁺)', w * 0.05, h * 0.55);
    
    // Complex I
    const c1X = w * 0.15;
    ctx.fillStyle = '#3498DB';
    ctx.fillRect(c1X - 25, h * 0.28, 50, h * 0.2);
    ctx.fillStyle = '#FFF';
    ctx.font = 'bold 20px Arial';
    ctx.fillText('I', c1X - 8, h * 0.40);
    
    // NADH input
    this.drawMolecule(ctx, c1X - 60, h * 0.60, 30, '#F39C12', 'NADH');
    this.drawArrow(ctx, c1X - 45, h * 0.58, c1X - 20, h * 0.50, '#F39C12');
    
    // NAD+ output
    this.drawMolecule(ctx, c1X + 60, h * 0.60, 30, '#95A5A6', 'NAD⁺');
    this.drawArrow(ctx, c1X + 20, h * 0.50, c1X + 45, h * 0.58, '#95A5A6');
    
    // H+ pumping from Complex I
    for (let i = 0; i < 4; i++) {
      this.drawArrow(ctx, c1X - 15 + i * 10, h * 0.48, c1X - 15 + i * 10, h * 0.25, '#FF6B6B');
      ctx.fillStyle = '#C0392B';
      ctx.font = 'bold 12px Arial';
      ctx.fillText('H⁺', c1X - 18 + i * 10, h * 0.23);
    }
    
    // Complex II
    const c2X = w * 0.30;
    ctx.fillStyle = '#1ABC9C';
    ctx.fillRect(c2X - 25, h * 0.35, 50, h * 0.13);
    ctx.fillStyle = '#FFF';
    ctx.font = 'bold 20px Arial';
    ctx.fillText('II', c2X - 10, h * 0.44);
    
    // FADH2 input
    this.drawMolecule(ctx, c2X - 60, h * 0.60, 30, '#E67E22', 'FADH₂');
    this.drawArrow(ctx, c2X - 45, h * 0.58, c2X - 20, h * 0.50, '#E67E22');
    
    // Ubiquinone (Q) - electron carrier
    const qX = w * 0.38;
    ctx.fillStyle = '#F39C12';
    ctx.beginPath();
    ctx.arc(qX, h * 0.44, 20, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = '#FFF';
    ctx.font = 'bold 16px Arial';
    ctx.fillText('Q', qX - 7, h * 0.46);
    
    // Electron flow to Q
    this.drawArrow(ctx, c1X + 25, h * 0.44, qX - 20, h * 0.44, '#FFD700', 3);
    this.drawArrow(ctx, c2X + 25, h * 0.44, qX - 20, h * 0.44, '#FFD700', 3);
    ctx.fillStyle = '#F39C12';
    ctx.font = 'bold 14px Arial';
    ctx.fillText('e⁻', c1X + 40, h * 0.42);
    
    // Complex III
    const c3X = w * 0.52;
    ctx.fillStyle = '#9B59B6';
    ctx.fillRect(c3X - 25, h * 0.28, 50, h * 0.2);
    ctx.fillStyle = '#FFF';
    ctx.font = 'bold 20px Arial';
    ctx.fillText('III', c3X - 13, h * 0.40);
    
    // Electron flow from Q to Complex III
    this.drawArrow(ctx, qX + 20, h * 0.44, c3X - 25, h * 0.38, '#FFD700', 3);
    
    // H+ pumping from Complex III
    for (let i = 0; i < 4; i++) {
      this.drawArrow(ctx, c3X - 15 + i * 10, h * 0.48, c3X - 15 + i * 10, h * 0.25, '#FF6B6B');
      ctx.fillStyle = '#C0392B';
      ctx.font = 'bold 12px Arial';
      ctx.fillText('H⁺', c3X - 18 + i * 10, h * 0.23);
    }
    
    // Cytochrome c
    const cytX = w * 0.63;
    ctx.fillStyle = '#E74C3C';
    ctx.beginPath();
    ctx.arc(cytX, h * 0.38, 18, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = '#FFF';
    ctx.font = 'bold 14px Arial';
    ctx.fillText('c', cytX - 5, h * 0.40);
    
    // Electron flow to cytochrome c
    this.drawArrow(ctx, c3X + 25, h * 0.38, cytX - 18, h * 0.38, '#FFD700', 3);
    
    // Complex IV (continued)
    const c4X = w * 0.75;
    ctx.fillStyle = '#E67E22';
    ctx.fillRect(c4X - 25, h * 0.28, 50, h * 0.2);
    ctx.fillStyle = '#FFF';
    ctx.font = 'bold 20px Arial';
    ctx.fillText('IV', c4X - 12, h * 0.40);
    
    // Electron flow from cyt c to Complex IV
    this.drawArrow(ctx, cytX + 18, h * 0.38, c4X - 25, h * 0.38, '#FFD700', 3);
    
    // H+ pumping from Complex IV
    for (let i = 0; i < 2; i++) {
      this.drawArrow(ctx, c4X - 5 + i * 10, h * 0.48, c4X - 5 + i * 10, h * 0.25, '#FF6B6B');
      ctx.fillStyle = '#C0392B';
      ctx.font = 'bold 12px Arial';
      ctx.fillText('H⁺', c4X - 8 + i * 10, h * 0.23);
    }
    
    // O2 and H2O
    this.drawMolecule(ctx, c4X - 60, h * 0.65, 25, '#3498DB', 'O₂');
    this.drawArrow(ctx, c4X - 48, h * 0.63, c4X - 20, h * 0.52, '#3498DB');
    
    this.drawMolecule(ctx, c4X + 60, h * 0.65, 25, '#1ABC9C', 'H₂O');
    this.drawArrow(ctx, c4X + 20, h * 0.52, c4X + 48, h * 0.63, '#1ABC9C');
    
    ctx.fillStyle = '#27AE60';
    ctx.font = 'bold 12px Arial';
    ctx.fillText('+ 4H⁺ + 4e⁻', c4X - 10, h * 0.58);
    
    // ATP Synthase (Complex V)
    const atpX = w * 0.88;
    
    // F0 portion (in membrane)
    ctx.fillStyle = '#27AE60';
    ctx.beginPath();
    ctx.arc(atpX, h * 0.44, 25, 0, Math.PI * 2);
    ctx.fill();
    
    // F1 portion (in matrix)
    ctx.fillStyle = '#229954';
    ctx.beginPath();
    ctx.arc(atpX, h * 0.52, 30, 0, Math.PI * 2);
    ctx.fill();
    
    ctx.fillStyle = '#FFF';
    ctx.font = 'bold 14px Arial';
    ctx.fillText('ATP', atpX - 15, h * 0.52);
    ctx.fillText('Syn', atpX - 13, h * 0.56);
    
    // H+ flow through ATP synthase
    for (let i = 0; i < 3; i++) {
      this.drawArrow(ctx, atpX - 10 + i * 8, h * 0.25, atpX - 10 + i * 8, h * 0.38, '#FF6B6B', 2);
      ctx.fillStyle = '#C0392B';
      ctx.font = 'bold 10px Arial';
      ctx.fillText('H⁺', atpX - 12 + i * 8, h * 0.23);
    }
    
    // Rotation arrow
    ctx.strokeStyle = '#FFF';
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.arc(atpX, h * 0.44, 15, 0, Math.PI * 1.5);
    ctx.stroke();
    this.drawArrow(ctx, atpX + 10, h * 0.44 - 15, atpX + 15, h * 0.44 - 12, '#FFF', 2);
    
    // ADP + Pi -> ATP
    this.drawMolecule(ctx, atpX - 50, h * 0.70, 25, '#95A5A6', 'ADP+Pi');
    this.drawArrow(ctx, atpX - 35, h * 0.68, atpX - 15, h * 0.58, '#95A5A6');
    
    this.drawMolecule(ctx, atpX + 50, h * 0.70, 25, '#27AE60', 'ATP');
    this.drawArrow(ctx, atpX + 15, h * 0.58, atpX + 35, h * 0.68, '#27AE60');
    
    // Energy flow summary
    ctx.fillStyle = '#2C3E50';
    ctx.font = 'bold 18px Arial';
    ctx.fillText('Proton Gradient → Chemiosmosis → ATP', w * 0.15, h * 0.93);
    
    // ATP yield
    ctx.fillStyle = '#27AE60';
    ctx.font = 'bold 20px Arial';
    ctx.fillText('~26-28 ATP produced', w * 0.35, h * 0.98);
  }
  
  static drawOxidativePhosphorylation(ctx, w, h, location) {
    // Title
    ctx.fillStyle = '#2C3E50';
    ctx.font = 'bold 24px Arial';
    ctx.fillText('OXIDATIVE PHOSPHORYLATION', w * 0.25, h * 0.08);
    
    // Two main sections
    // Section 1: Electron Transport (left)
    ctx.fillStyle = '#3498DB';
    ctx.fillRect(w * 0.05, h * 0.15, w * 0.42, h * 0.38);
    ctx.fillStyle = '#FFF';
    ctx.font = 'bold 20px Arial';
    ctx.fillText('ELECTRON TRANSPORT', w * 0.12, h * 0.20);
    
    // Simplified ETC flow
    const etcY = h * 0.30;
    const complexes = [
      {x: 0.12, label: 'NADH', color: '#F39C12'},
      {x: 0.19, label: 'I', color: '#E74C3C'},
      {x: 0.26, label: 'Q', color: '#F39C12'},
      {x: 0.33, label: 'III', color: '#9B59B6'},
      {x: 0.40, label: 'IV', color: '#E67E22'}
    ];
    
    complexes.forEach((comp, i) => {
      if (comp.label === 'NADH' || comp.label === 'Q') {
        ctx.fillStyle = comp.color;
        ctx.beginPath();
        ctx.arc(w * comp.x, etcY, 20, 0, Math.PI * 2);
        ctx.fill();
      } else {
        ctx.fillStyle = comp.color;
        ctx.fillRect(w * comp.x - 15, etcY - 25, 30, 50);
      }
      
      ctx.fillStyle = '#FFF';
      ctx.font = 'bold 16px Arial';
      ctx.fillText(comp.label, w * comp.x - (comp.label.length > 1 ? 10 : 5), etcY + 5);
      
      if (i < complexes.length - 1) {
        this.drawArrow(ctx, w * comp.x + 20, etcY, w * complexes[i + 1].x - 20, etcY, '#FFD700', 3);
      }
    });
    
    // O2 to H2O
    this.drawMolecule(ctx, w * 0.43, etcY + 50, 22, '#3498DB', 'O₂');
    this.drawArrow(ctx, w * 0.40, etcY + 25, w * 0.43, etcY + 35, '#3498DB');
    this.drawMolecule(ctx, w * 0.43, etcY + 95, 22, '#1ABC9C', 'H₂O');
    this.drawArrow(ctx, w * 0.43, etcY + 65, w * 0.43, etcY + 82, '#1ABC9C');
    
    // H+ pumping visualization
    ctx.fillStyle = '#FFF';
    ctx.font = 'bold 14px Arial';
    ctx.fillText('H⁺ Pumped Out →', w * 0.12, h * 0.45);
    
    for (let i = 0; i < 10; i++) {
      this.drawArrow(ctx, w * (0.12 + i * 0.03), h * 0.47, w * (0.12 + i * 0.03), h * 0.42, '#FF6B6B', 2);
      ctx.fillStyle = '#C0392B';
      ctx.font = 'bold 10px Arial';
      ctx.fillText('H⁺', w * (0.115 + i * 0.03), h * 0.41);
    }
    
    // Section 2: Chemiosmosis (right)
    ctx.fillStyle = '#27AE60';
    ctx.fillRect(w * 0.52, h * 0.15, w * 0.43, h * 0.38);
    ctx.fillStyle = '#FFF';
    ctx.font = 'bold 20px Arial';
    ctx.fillText('CHEMIOSMOSIS', w * 0.62, h * 0.20);
    
    // ATP Synthase large diagram
    const synthX = w * 0.73;
    const synthY = h * 0.35;
    
    // Membrane representation
    ctx.fillStyle = '#E74C3C';
    ctx.fillRect(w * 0.52, synthY - 5, w * 0.43, 10);
    
    // F0 unit (rotor in membrane)
    ctx.fillStyle = '#229954';
    for (let i = 0; i < 8; i++) {
      const angle = (i / 8) * Math.PI * 2;
      const rx = synthX + 25 * Math.cos(angle);
      const ry = synthY + 25 * Math.sin(angle);
      ctx.beginPath();
      ctx.arc(rx, ry, 8, 0, Math.PI * 2);
      ctx.fill();
    }
    
    // Central rotor
    ctx.fillStyle = '#27AE60';
    ctx.fillRect(synthX - 8, synthY - 5, 16, 60);
    
    // F1 unit (catalytic head)
    ctx.fillStyle = '#27AE60';
    ctx.beginPath();
    ctx.arc(synthX, synthY + 60, 35, 0, Math.PI * 2);
    ctx.fill();
    
    ctx.fillStyle = '#FFF';
    ctx.font = 'bold 16px Arial';
    ctx.fillText('F₁', synthX - 10, synthY + 65);
    
    // Rotation arrows
    ctx.strokeStyle = '#FFF';
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.arc(synthX, synthY, 30, 0, Math.PI * 1.7);
    ctx.stroke();
    this.drawArrow(ctx, synthX - 21, synthY - 21, synthX - 25, synthY - 18, '#FFF', 2);
    
    // H+ flow
    for (let i = 0; i < 3; i++) {
      this.drawArrow(ctx, synthX - 40 + i * 15, synthY - 40, synthX - 40 + i * 15, synthY - 10, '#FF6B6B', 2);
      ctx.fillStyle = '#C0392B';
      ctx.font = 'bold 12px Arial';
      ctx.fillText('H⁺', synthX - 44 + i * 15, synthY - 42);
    }
    
    // ADP + Pi input
    this.drawMolecule(ctx, synthX - 70, synthY + 60, 25, '#95A5A6', 'ADP+Pi');
    this.drawArrow(ctx, synthX - 55, synthY + 60, synthX - 35, synthY + 60, '#95A5A6');
    
    // ATP output
    this.drawMolecule(ctx, synthX + 70, synthY + 60, 25, '#27AE60', 'ATP');
    this.drawArrow(ctx, synthX + 35, synthY + 60, synthX + 55, synthY + 60, '#27AE60');
    
    // Bottom explanation
    ctx.fillStyle = '#2C3E50';
    ctx.fillRect(w * 0.05, h * 0.58, w * 0.9, h * 0.37);
    
    ctx.fillStyle = '#FFF';
    ctx.font = 'bold 22px Arial';
    ctx.fillText('COUPLING OF ELECTRON TRANSPORT & ATP SYNTHESIS', w * 0.15, h * 0.65);
    
    ctx.font = '16px Arial';
    ctx.fillText('1. Electron Transport Chain:', w * 0.08, h * 0.72);
    ctx.fillText('   • NADH and FADH₂ donate electrons', w * 0.10, h * 0.76);
    ctx.fillText('   • Energy from electron flow pumps H⁺ across membrane', w * 0.10, h * 0.80);
    ctx.fillText('   • Creates electrochemical gradient (proton-motive force)', w * 0.10, h * 0.84);
    
    ctx.fillText('2. Chemiosmosis:', w * 0.08, h * 0.90);
    ctx.fillText('   • H⁺ flows back through ATP synthase', w * 0.10, h * 0.94);
    ctx.fillText('   • Drives rotation of F₀ unit', w * 0.10, h * 0.98);
    
    ctx.fillText('3. ATP Synthesis:', w * 0.52, h * 0.72);
    ctx.fillText('   • F₁ catalytic sites change conformation', w * 0.54, h * 0.76);
    ctx.fillText('   • ADP + Pi → ATP', w * 0.54, h * 0.80);
    ctx.fillText('   • ~3 H⁺ per ATP produced', w * 0.54, h * 0.84);
    
    ctx.fillStyle = '#27AE60';
    ctx.font = 'bold 20px Arial';
    ctx.fillText('Net: ~26-28 ATP per glucose', w * 0.54, h * 0.90);
  }
  
  // ===== ELECTRON TRANSPORT CHAIN =====
  
  static drawElectronTransportChain(ctx, x, y, width, height, complex, process) {
    ctx.save();
    ctx.translate(x, y);
    
    switch(complex) {
      case 'complete':
        this.drawCompleteETC(ctx, width, height, process);
        break;
      case 'complex-I':
        this.drawComplexI(ctx, width, height, process);
        break;
      case 'complex-II':
        this.drawComplexII(ctx, width, height, process);
        break;
      case 'complex-III':
        this.drawComplexIII(ctx, width, height, process);
        break;
      case 'complex-IV':
        this.drawComplexIV(ctx, width, height, process);
        break;
      case 'atp-synthase':
        this.drawATPSynthaseDetailed(ctx, width, height, process);
        break;
    }
    
    ctx.restore();
  }
  
  static drawCompleteETC(ctx, w, h, process) {
    // This can reuse the drawElectronTransport method
    this.drawElectronTransport(ctx, w, h, 'overview');
  }
  
  static drawComplexI(ctx, w, h, process) {
    // Title
    ctx.fillStyle = '#2C3E50';
    ctx.font = 'bold 24px Arial';
    ctx.fillText('COMPLEX I - NADH Dehydrogenase', w * 0.25, h * 0.08);
    
    // Membrane context
    ctx.fillStyle = '#FFE5E5';
    ctx.fillRect(0, h * 0.15, w, h * 0.25);
    ctx.fillStyle = '#E74C3C';
    ctx.fillRect(0, h * 0.4, w, h * 0.08);
    ctx.fillStyle = '#E8F4F8';
    ctx.fillRect(0, h * 0.48, w, h * 0.52);
    
    // Complex I structure (L-shaped)
    const baseX = w * 0.4;
    const baseY = h * 0.44;
    
    // Membrane arm
    ctx.fillStyle = '#3498DB';
    ctx.fillRect(baseX - 100, baseY - 30, 200, 60);
    
    // Matrix arm
    ctx.fillStyle = '#2980B9';
    ctx.fillRect(baseX - 30, baseY + 30, 60, 150);
    
    // Labels
    ctx.fillStyle = '#FFF';
    ctx.font = 'bold 20px Arial';
    ctx.fillText('Complex I', baseX - 40, baseY);
    
    // NADH binding site
    this.drawMolecule(ctx, baseX - 20, baseY + 200, 35, '#F39C12', 'NADH');
    this.drawArrow(ctx, baseX - 5, baseY + 185, baseX, baseY + 140, '#F39C12');
    
    ctx.fillStyle = '#34495E';
    ctx.font = '14px Arial';
    ctx.fillText('NADH', baseX - 80, baseY + 110);
    ctx.fillText('binding', baseX - 80, baseY + 125);
    ctx.fillText('site', baseX - 80, baseY + 140);
    
    // NAD+ output
    this.drawMolecule(ctx, baseX + 120, baseY + 200, 35, '#95A5A6', 'NAD⁺');
    this.drawArrow(ctx, baseX + 30, baseY + 140, baseX + 100, baseY + 185, '#95A5A6');
    
    // Electron flow
    ctx.strokeStyle = '#FFD700';
    ctx.lineWidth = 4;
    ctx.beginPath();
    ctx.moveTo(baseX, baseY + 120);
    ctx.lineTo(baseX, baseY + 60);
    ctx.lineTo(baseX - 50, baseY);
    ctx.stroke();
    
    ctx.fillStyle = '#F39C12';
    ctx.font = 'bold 16px Arial';
    ctx.fillText('2e⁻', baseX + 10, baseY + 90);
    
    // FMN (flavin mononucleotide)
    ctx.fillStyle = '#E67E22';
    ctx.beginPath();
    ctx.arc(baseX, baseY + 100, 20, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = '#FFF';
    ctx.font = 'bold 12px Arial';
    ctx.fillText('FMN', baseX - 15, baseY + 105);
    
    // Iron-sulfur clusters
    for (let i = 0; i < 4; i++) {
      ctx.fillStyle = '#C0392B';
      ctx.beginPath();
      ctx.arc(baseX - 10 + i * 10, baseY + 60, 8, 0, Math.PI * 2);
      ctx.fill();
      ctx.fillStyle = '#FFF';
      ctx.font = 'bold 10px Arial';
      ctx.fillText('Fe-S', baseX - 18 + i * 10, baseY + 63);
    }
    
    // Ubiquinone (Q) binding site
    ctx.fillStyle = '#F39C12';
    ctx.beginPath();
    ctx.arc(baseX - 80, baseY, 25, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = '#FFF';
    ctx.font = 'bold 16px Arial';
    ctx.fillText('Q', baseX - 87, baseY + 5);
    
    // H+ pumping
    for (let i = 0; i < 4; i++) {
      this.drawArrow(ctx, baseX - 60 + i * 30, baseY + 30, baseX - 60 + i * 30, h * 0.25, '#FF6B6B', 3);
      ctx.fillStyle = '#C0392B';
      ctx.font = 'bold 14px Arial';
      ctx.fillText('H⁺', baseX - 66 + i * 30, h * 0.23);
    }
    
    // Mechanism box
    ctx.fillStyle = '#ECF0F1';
    ctx.fillRect(w * 0.60, h * 0.30, w * 0.35, h * 0.50);
    ctx.fillStyle = '#2C3E50';
    ctx.font = 'bold 18px Arial';
    ctx.fillText('MECHANISM', w * 0.68, h * 0.36);
    
    ctx.font = '14px Arial';
    ctx.fillText('1. NADH binds and donates', w * 0.62, h * 0.42);
    ctx.fillText('   2 electrons to FMN', w * 0.62, h * 0.46);
    
    ctx.fillText('2. Electrons pass through', w * 0.62, h * 0.52);
    ctx.fillText('   Fe-S clusters', w * 0.62, h * 0.56);
    
    ctx.fillText('3. Electrons reduce', w * 0.62, h * 0.62);
    ctx.fillText('   ubiquinone to ubiquinol', w * 0.62, h * 0.66);
    
    ctx.fillText('4. Conformational changes', w * 0.62, h * 0.72);
    ctx.fillText('   pump 4 H⁺ across membrane', w * 0.62, h * 0.76);
    
    ctx.fillStyle = '#27AE60';
    ctx.font = 'bold 16px Arial';
    ctx.fillText('Energy: 4 H⁺ pumped', w * 0.65, h * 0.85);
  }
  
  static drawComplexII(ctx, w, h, process) {
    // Title
    ctx.fillStyle = '#2C3E50';
    ctx.font = 'bold 24px Arial';
    ctx.fillText('COMPLEX II - Succinate Dehydrogenase', w * 0.20, h * 0.08);
    
    // Membrane context
    ctx.fillStyle = '#E74C3C';
    ctx.fillRect(0, h * 0.40, w, h * 0.08);
    ctx.fillStyle = '#E8F4F8';
    ctx.fillRect(0, h * 0.48, w, h * 0.52);
    
    // Complex II structure (smaller, embedded in membrane)
    const centerX = w * 0.35;
    const centerY = h * 0.44;
    
    ctx.fillStyle = '#1ABC9C';
    ctx.fillRect(centerX - 60, centerY - 20, 120, 80);
    
    ctx.fillStyle = '#FFF';
    ctx.font = 'bold 20px Arial';
    ctx.fillText('Complex II', centerX - 50, centerY + 10);
    
    // Succinate input (from Krebs cycle)
    this.drawMolecule(ctx, centerX - 20, h * 0.70, 35, '#E67E22', 'Succinate');
    this.drawArrow(ctx, centerX - 5, h * 0.68, centerX, centerY + 45, '#E67E22');
    
    ctx.fillStyle = '#34495E';
    ctx.font = '14px Arial';
    ctx.fillText('From Krebs Cycle', centerX - 60, h * 0.75);
    
    // Fumarate output
    this.drawMolecule(ctx, centerX + 140, h * 0.70, 35, '#95A5A6', 'Fumarate');
    this.drawArrow(ctx, centerX + 60, centerY + 45, centerX + 125, h * 0.68, '#95A5A6');
    
    // FAD/FADH2
    ctx.fillStyle = '#F39C12';
    ctx.beginPath();
    ctx.arc(centerX, centerY + 25, 22, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = '#FFF';
    ctx.font = 'bold 14px Arial';
    ctx.fillText('FAD', centerX - 15, centerY + 30);
    
    // Iron-sulfur clusters
    for (let i = 0; i < 3; i++) {
      ctx.fillStyle = '#C0392B';
      ctx.beginPath();
      ctx.arc(centerX - 15 + i * 15, centerY - 5, 10, 0, Math.PI * 2);
      ctx.fill();
      ctx.fillStyle = '#FFF';
      ctx.font = 'bold 9px Arial';
      ctx.fillText('Fe-S', centerX - 22 + i * 15, centerY - 2);
    }
    
    // Ubiquinone (Q) binding
    ctx.fillStyle = '#F39C12';
    ctx.beginPath();
    ctx.arc(centerX + 80, centerY, 25, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = '#FFF';
    ctx.font = 'bold 16px Arial';
    ctx.fillText('Q', centerX + 73, centerY + 5);
    
    // Electron flow
    ctx.strokeStyle = '#FFD700';
    ctx.lineWidth = 4;
    ctx.beginPath();
    ctx.moveTo(centerX + 20, centerY + 15);
    ctx.lineTo(centerX + 60, centerY);
    ctx.stroke();
    
    ctx.fillStyle = '#F39C12';
    ctx.font = 'bold 16px Arial';
    ctx.fillText('2e⁻', centerX + 35, centerY + 5);
    
    // Important note: NO H+ pumping
    ctx.fillStyle = '#E74C3C';
    ctx.font = 'bold 18px Arial';
    ctx.fillText('⚠ NO H⁺ PUMPING', centerX + 20, h * 0.25);
    
    // Info box
    ctx.fillStyle = '#ECF0F1';
    ctx.fillRect(w * 0.55, h * 0.25, w * 0.40, h * 0.55);
    ctx.fillStyle = '#2C3E50';
    ctx.font = 'bold 18px Arial';
    ctx.fillText('UNIQUE FEATURES', w * 0.62, h * 0.32);
    
    ctx.font = '14px Arial';
    ctx.fillText('• Part of Krebs Cycle AND', w * 0.57, h * 0.38);
    ctx.fillText('  Electron Transport Chain', w * 0.57, h * 0.42);
    
    ctx.fillText('• Does NOT pump protons', w * 0.57, h * 0.48);
    ctx.fillText('  (no energy from succinate', w * 0.57, h * 0.52);
    ctx.fillText('  oxidation for pumping)', w * 0.57, h * 0.56);
    
    ctx.fillText('• FADH₂ electrons enter', w * 0.57, h * 0.62);
    ctx.fillText('  at lower energy level', w * 0.57, h * 0.66);
    ctx.fillText('  than NADH', w * 0.57, h * 0.70);
    
    ctx.fillText('• Contributes electrons to', w * 0.57, h * 0.76);
    ctx.fillText('  ubiquinone pool', w * 0.57, h * 0.80);
    
    ctx.fillStyle = '#16A085';
    ctx.font = 'bold 16px Arial';
    ctx.fillText('Result: Feeds electrons to', w * 0.58, h * 0.88);
    ctx.fillText('Complex III (bypasses Complex I)', w * 0.58, h * 0.93);
  }
  
  static drawComplexIII(ctx, w, h, process) {
    // Title
    ctx.fillStyle = '#2C3E50';
    ctx.font = 'bold 24px Arial';
    ctx.fillText('COMPLEX III - Cytochrome bc₁ Complex', w * 0.20, h * 0.08);
    
    // Membrane context
    ctx.fillStyle = '#FFE5E5';
    ctx.fillRect(0, h * 0.15, w, h * 0.25);
    ctx.fillStyle = '#E74C3C';
    ctx.fillRect(0, h * 0.4, w, h * 0.08);
    ctx.fillStyle = '#E8F4F8';
    ctx.fillRect(0, h * 0.48, w, h * 0.52);
    
    // Complex III structure
    const baseX = w * 0.35;
    const baseY = h * 0.44;
    
    ctx.fillStyle = '#9B59B6';
    ctx.fillRect(baseX - 70, baseY - 30, 140, 90);
    
    ctx.fillStyle = '#FFF';
    ctx.font = 'bold 20px Arial';
    ctx.fillText('Complex III', baseX - 50, baseY + 5);
    
    // Q cycle components
    // Ubiquinol (QH2) input
    this.drawMolecule(ctx, baseX - 120, baseY, 30, '#F39C12', 'QH₂');
    this.drawArrow(ctx, baseX - 100, baseY, baseX - 70, baseY, '#F39C12');
    
    // Ubiquinone (Q) output
    this.drawMolecule(ctx, baseX - 120, baseY + 100, 30, '#E67E22', 'Q');
    this.drawArrow(ctx, baseX - 70, baseY + 60, baseX - 100, baseY + 90, '#E67E22');
    // Rieske iron-sulfur protein
    ctx.fillStyle = '#C0392B';
    ctx.beginPath();
    ctx.arc(baseX - 30, baseY - 10, 18, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = '#FFF';
    ctx.font = 'bold 11px Arial';
    ctx.fillText('Rieske', baseX - 40, baseY - 8);
    ctx.fillText('Fe-S', baseX - 38, baseY + 2);
    
    // Cytochrome b (low and high potential)
    ctx.fillStyle = '#8E44AD';
    ctx.fillRect(baseX - 20, baseY + 15, 40, 35);
    ctx.fillStyle = '#FFF';
    ctx.font = 'bold 14px Arial';
    ctx.fillText('Cyt b', baseX - 12, baseY + 35);
    
    // Cytochrome c1
    ctx.fillStyle = '#9B59B6';
    ctx.beginPath();
    ctx.arc(baseX + 30, baseY - 10, 18, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = '#FFF';
    ctx.font = 'bold 11px Arial';
    ctx.fillText('Cyt c₁', baseX + 18, baseY - 7);
    
    // Cytochrome c (mobile carrier)
    this.drawMolecule(ctx, baseX + 110, baseY - 10, 25, '#E74C3C', 'Cyt c');
    this.drawArrow(ctx, baseX + 48, baseY - 10, baseX + 90, baseY - 10, '#E74C3C');
    
    ctx.fillStyle = '#34495E';
    ctx.font = '12px Arial';
    ctx.fillText('(mobile carrier)', baseX + 78, baseY + 10);
    
    // Q cycle electron flow
    ctx.strokeStyle = '#FFD700';
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.moveTo(baseX - 70, baseY);
    ctx.lineTo(baseX - 30, baseY - 10);
    ctx.lineTo(baseX + 30, baseY - 10);
    ctx.stroke();
    
    // Second electron path (Q cycle)
    ctx.strokeStyle = '#FFA500';
    ctx.lineWidth = 3;
    ctx.setLineDash([5, 5]);
    ctx.beginPath();
    ctx.moveTo(baseX - 70, baseY);
    ctx.lineTo(baseX, baseY + 25);
    ctx.lineTo(baseX + 40, baseY + 50);
    ctx.stroke();
    ctx.setLineDash([]);
    
    // H+ release into intermembrane space
    for (let i = 0; i < 4; i++) {
      this.drawArrow(ctx, baseX - 50 + i * 25, baseY - 30, baseX - 50 + i * 25, h * 0.25, '#FF6B6B', 3);
      ctx.fillStyle = '#C0392B';
      ctx.font = 'bold 14px Arial';
      ctx.fillText('H⁺', baseX - 56 + i * 25, h * 0.23);
    }
    
    // H+ uptake from matrix
    for (let i = 0; i < 2; i++) {
      this.drawArrow(ctx, baseX - 25 + i * 25, h * 0.60, baseX - 25 + i * 25, baseY + 60, '#3498DB', 2);
      ctx.fillStyle = '#2980B9';
      ctx.font = 'bold 12px Arial';
      ctx.fillText('H⁺', baseX - 30 + i * 25, h * 0.62);
    }
    
    // Q Cycle explanation box
    ctx.fillStyle = '#ECF0F1';
    ctx.fillRect(w * 0.52, h * 0.15, w * 0.43, h * 0.70);
    ctx.fillStyle = '#2C3E50';
    ctx.font = 'bold 20px Arial';
    ctx.fillText('Q CYCLE MECHANISM', w * 0.58, h * 0.22);
    
    ctx.font = '14px Arial';
    ctx.fillText('The Q Cycle:', w * 0.54, h * 0.28);
    
    ctx.font = '13px Arial';
    ctx.fillText('1. QH₂ binds at Qo site (matrix side)', w * 0.54, h * 0.34);
    ctx.fillText('   • Releases 2H⁺ to intermembrane', w * 0.56, h * 0.38);
    ctx.fillText('     space', w * 0.56, h * 0.42);
    
    ctx.fillText('2. First electron:', w * 0.54, h * 0.48);
    ctx.fillText('   • Goes to Rieske Fe-S protein', w * 0.56, h * 0.52);
    ctx.fillText('   • Then to Cyt c₁', w * 0.56, h * 0.56);
    ctx.fillText('   • Finally to Cyt c (mobile)', w * 0.56, h * 0.60);
    
    ctx.fillText('3. Second electron:', w * 0.54, h * 0.66);
    ctx.fillText('   • Goes to Cyt b (low potential)', w * 0.56, h * 0.70);
    ctx.fillText('   • Then to Cyt b (high potential)', w * 0.56, h * 0.74);
    ctx.fillText('   • Reduces Q at Qi site', w * 0.56, h * 0.78);
    
    ctx.fillText('4. Q at Qi site picks up 2H⁺', w * 0.54, h * 0.84);
    ctx.fillText('   from matrix → becomes QH₂', w * 0.56, h * 0.88);
    
    ctx.fillStyle = '#27AE60';
    ctx.font = 'bold 16px Arial';
    ctx.fillText('Net: 4 H⁺ translocated per', w * 0.56, h * 0.95);
    ctx.fillText('QH₂ oxidized (Q cycle)', w * 0.56, h * 1.00);
    
    // Summary at bottom
    ctx.fillStyle = '#9B59B6';
    ctx.fillRect(w * 0.05, h * 0.88, w * 0.43, h * 0.10);
    ctx.fillStyle = '#FFF';
    ctx.font = 'bold 14px Arial';
    ctx.fillText('Complex III transfers electrons from', w * 0.08, h * 0.92);
    ctx.fillText('ubiquinol to cytochrome c while pumping H⁺', w * 0.08, h * 0.96);
  }
  
  static drawComplexIV(ctx, w, h, process) {
    // Title
    ctx.fillStyle = '#2C3E50';
    ctx.font = 'bold 24px Arial';
    ctx.fillText('COMPLEX IV - Cytochrome c Oxidase', w * 0.22, h * 0.08);
    
    // Membrane context
    ctx.fillStyle = '#FFE5E5';
    ctx.fillRect(0, h * 0.15, w, h * 0.25);
    ctx.fillStyle = '#E74C3C';
    ctx.fillRect(0, h * 0.4, w, h * 0.08);
    ctx.fillStyle = '#E8F4F8';
    ctx.fillRect(0, h * 0.48, w, h * 0.52);
    
    // Complex IV structure
    const baseX = w * 0.35;
    const baseY = h * 0.44;
    
    ctx.fillStyle = '#E67E22';
    ctx.fillRect(baseX - 70, baseY - 30, 140, 90);
    
    ctx.fillStyle = '#FFF';
    ctx.font = 'bold 20px Arial';
    ctx.fillText('Complex IV', baseX - 48, baseY + 5);
    
    // Cytochrome c inputs (4 needed)
    for (let i = 0; i < 4; i++) {
      this.drawMolecule(ctx, baseX - 150, baseY - 20 + i * 25, 20, '#E74C3C', 'c');
      if (i === 0) {
        this.drawArrow(ctx, baseX - 135, baseY - 15, baseX - 70, baseY - 10, '#E74C3C', 2);
      }
    }
    
    ctx.fillStyle = '#C0392B';
    ctx.font = '12px Arial';
    ctx.fillText('4 Cyt c', baseX - 170, baseY + 70);
    ctx.fillText('(4e⁻ total)', baseX - 175, baseY + 83);
    
    // Copper centers (CuA and CuB)
    ctx.fillStyle = '#D35400';
    ctx.beginPath();
    ctx.arc(baseX - 35, baseY - 10, 16, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = '#FFF';
    ctx.font = 'bold 12px Arial';
    ctx.fillText('CuA', baseX - 44, baseY - 7);
    
    ctx.fillStyle = '#D35400';
    ctx.beginPath();
    ctx.arc(baseX + 20, baseY + 20, 16, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = '#FFF';
    ctx.fillText('CuB', baseX + 11, baseY + 23);
    
    // Heme groups (a and a3)
    ctx.fillStyle = '#C0392B';
    ctx.fillRect(baseX - 15, baseY + 5, 25, 25);
    ctx.fillStyle = '#FFF';
    ctx.font = 'bold 12px Arial';
    ctx.fillText('Heme', baseX - 12, baseY + 15);
    ctx.fillText('a', baseX - 3, baseY + 25);
    
    ctx.fillStyle = '#C0392B';
    ctx.fillRect(baseX + 25, baseY + 30, 25, 25);
    ctx.fillStyle = '#FFF';
    ctx.fillText('Heme', baseX + 28, baseY + 40);
    ctx.fillText('a₃', baseX + 34, baseY + 50);
    
    // Electron flow path
    ctx.strokeStyle = '#FFD700';
    ctx.lineWidth = 4;
    ctx.beginPath();
    ctx.moveTo(baseX - 70, baseY - 10);
    ctx.lineTo(baseX - 35, baseY - 10);
    ctx.lineTo(baseX - 5, baseY + 15);
    ctx.lineTo(baseX + 35, baseY + 40);
    ctx.stroke();
    
    ctx.fillStyle = '#F39C12';
    ctx.font = 'bold 14px Arial';
    ctx.fillText('4e⁻', baseX - 25, baseY + 2);
    
    // O2 binding and reduction
    this.drawMolecule(ctx, baseX + 90, baseY + 40, 28, '#3498DB', 'O₂');
    this.drawArrow(ctx, baseX + 68, baseY + 40, baseX + 50, baseY + 45, '#3498DB');
    
    // Active site (heme a3-CuB binuclear center)
    ctx.strokeStyle = '#E74C3C';
    ctx.lineWidth = 3;
    ctx.setLineDash([3, 3]);
    ctx.strokeRect(baseX + 15, baseY + 15, 40, 45);
    ctx.setLineDash([]);
    ctx.fillStyle = '#E74C3C';
    ctx.font = 'bold 11px Arial';
    ctx.fillText('Active Site', baseX + 18, baseY + 12);
    
    // H+ uptake from matrix
    for (let i = 0; i < 4; i++) {
      this.drawArrow(ctx, baseX - 40 + i * 20, h * 0.65, baseX - 40 + i * 20, baseY + 60, '#3498DB', 2);
      ctx.fillStyle = '#2980B9';
      ctx.font = 'bold 12px Arial';
      ctx.fillText('H⁺', baseX - 45 + i * 20, h * 0.67);
    }
    
    // H2O formation
    this.drawMolecule(ctx, baseX + 90, baseY + 95, 28, '#1ABC9C', 'H₂O');
    this.drawArrow(ctx, baseX + 40, baseY + 60, baseX + 70, baseY + 90, '#1ABC9C', 3);
    
    ctx.fillStyle = '#27AE60';
    ctx.font = 'bold 13px Arial';
    ctx.fillText('O₂ + 4H⁺ + 4e⁻', baseX + 50, baseY + 70);
    ctx.fillText('→ 2H₂O', baseX + 65, baseY + 83);
    
    // H+ pumping
    for (let i = 0; i < 2; i++) {
      this.drawArrow(ctx, baseX + 10 + i * 30, baseY - 30, baseX + 10 + i * 30, h * 0.25, '#FF6B6B', 3);
      ctx.fillStyle = '#C0392B';
      ctx.font = 'bold 14px Arial';
      ctx.fillText('H⁺', baseX + 4 + i * 30, h * 0.23);
    }
    
    // Mechanism box
    ctx.fillStyle = '#ECF0F1';
    ctx.fillRect(w * 0.52, h * 0.20, w * 0.43, h * 0.65);
    ctx.fillStyle = '#2C3E50';
    ctx.font = 'bold 20px Arial';
    ctx.fillText('MECHANISM & ROLE', w * 0.60, h * 0.27);
    
    ctx.font = '14px Arial';
    ctx.fillText('Terminal oxidase of ETC:', w * 0.54, h * 0.33);
    
    ctx.font = '13px Arial';
    ctx.fillText('1. Accepts electrons from 4 Cyt c', w * 0.54, h * 0.39);
    ctx.fillText('   molecules (one at a time)', w * 0.56, h * 0.43);
    
    ctx.fillText('2. Electron transfer pathway:', w * 0.54, h * 0.49);
    ctx.fillText('   Cyt c → CuA → Heme a', w * 0.56, h * 0.53);
    ctx.fillText('   → Heme a₃-CuB center', w * 0.56, h * 0.57);
    
    ctx.fillText('3. O₂ binds at a₃-CuB site:', w * 0.54, h * 0.63);
    ctx.fillText('   • O₂ + 4e⁻ + 4H⁺ → 2H₂O', w * 0.56, h * 0.67);
    ctx.fillText('   • 4 H⁺ taken from matrix', w * 0.56, h * 0.71);
    
    ctx.fillText('4. Energy from e⁻ transfer:', w * 0.54, h * 0.77);
    ctx.fillText('   • Pumps additional 2-4 H⁺', w * 0.56, h * 0.81);
    ctx.fillText('   • Exact mechanism debated', w * 0.56, h * 0.85);
    
    ctx.fillStyle = '#27AE60';
    ctx.font = 'bold 16px Arial';
    ctx.fillText('Critical: Final electron acceptor!', w * 0.55, h * 0.92);
    ctx.fillText('Without O₂, ETC stops completely', w * 0.55, h * 0.97);
    
    // Bottom note
    ctx.fillStyle = '#E67E22';
    ctx.fillRect(w * 0.05, h * 0.88, w * 0.43, h * 0.10);
    ctx.fillStyle = '#FFF';
    ctx.font = 'bold 14px Arial';
    ctx.fillText('O₂ is the FINAL electron acceptor -', w * 0.08, h * 0.92);
    ctx.fillText('enables entire respiratory chain!', w * 0.08, h * 0.96);
  }
  
  static drawATPSynthaseDetailed(ctx, w, h, process) {
    // Title
    ctx.fillStyle = '#2C3E50';
    ctx.font = 'bold 24px Arial';
    ctx.fillText('ATP SYNTHASE (Complex V)', w * 0.28, h * 0.08);
    
    // Membrane context
    ctx.fillStyle = '#FFE5E5';
    ctx.fillRect(0, h * 0.15, w, h * 0.25);
    ctx.fillStyle = '#C0392B';
    ctx.font = 'bold 14px Arial';
    ctx.fillText('Intermembrane Space (High [H⁺])', w * 0.05, h * 0.22);
    
    ctx.fillStyle = '#E74C3C';
    ctx.fillRect(0, h * 0.4, w, h * 0.08);
    
    ctx.fillStyle = '#E8F4F8';
    ctx.fillRect(0, h * 0.48, w, h * 0.52);
    ctx.fillStyle = '#2980B9';
    ctx.font = 'bold 14px Arial';
    ctx.fillText('Mitochondrial Matrix (Low [H⁺])', w * 0.05, h * 0.55);
    
    // Main ATP Synthase structure
    const centerX = w * 0.35;
    const membraneY = h * 0.44;
    
    // F0 portion (membrane-embedded rotor)
    // c-ring (rotor)
    const cRingRadius = 35;
    ctx.fillStyle = '#27AE60';
    
    for (let i = 0; i < 10; i++) {
      const angle = (i / 10) * Math.PI * 2;
      const x = centerX + cRingRadius * Math.cos(angle);
      const y = membraneY + cRingRadius * Math.sin(angle);
      
      ctx.beginPath();
      ctx.arc(x, y, 10, 0, Math.PI * 2);
      ctx.fill();
      
      if (i === 0) {
        ctx.fillStyle = '#FFF';
        ctx.font = 'bold 10px Arial';
        ctx.fillText('c', x - 3, y + 3);
        ctx.fillStyle = '#27AE60';
      }
    }
    
    // a subunit (stator)
    ctx.fillStyle = '#16A085';
    ctx.fillRect(centerX + cRingRadius + 10, membraneY - 25, 30, 50);
    ctx.fillStyle = '#FFF';
    ctx.font = 'bold 14px Arial';
    ctx.fillText('a', centerX + cRingRadius + 20, membraneY + 3);
    
    // H+ channel in a subunit
    ctx.strokeStyle = '#3498DB';
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.moveTo(centerX + cRingRadius + 15, membraneY - 25);
    ctx.lineTo(centerX + cRingRadius + 15, membraneY + 25);
    ctx.stroke();
    
    // Central stalk (gamma and epsilon subunits)
    ctx.fillStyle = '#229954';
    ctx.fillRect(centerX - 10, membraneY - 5, 20, 120);
    ctx.fillStyle = '#FFF';
    ctx.font = 'bold 12px Arial';
    ctx.fillText('γ', centerX - 5, membraneY + 40);
    
    // F1 portion (catalytic head in matrix)
    const f1Y = membraneY + 120;
    
    // Alpha and beta subunits (hexamer)
    for (let i = 0; i < 6; i++) {
      const angle = (i / 6) * Math.PI * 2;
      const radius = 45;
      const x = centerX + radius * Math.cos(angle);
      const y = f1Y + radius * Math.sin(angle);
      
      const isAlpha = i % 2 === 0;
      ctx.fillStyle = isAlpha ? '#27AE60' : '#229954';
      
      ctx.beginPath();
      ctx.arc(x, y, 22, 0, Math.PI * 2);
      ctx.fill();
      
      ctx.fillStyle = '#FFF';
      ctx.font = 'bold 12px Arial';
      ctx.fillText(isAlpha ? 'α' : 'β', x - 6, y + 4);
    }
    
    // Peripheral stalk (b and delta subunits - stator)
    ctx.strokeStyle = '#1ABC9C';
    ctx.lineWidth = 8;
    ctx.beginPath();
    ctx.moveTo(centerX + 65, membraneY - 15);
    ctx.lineTo(centerX + 75, membraneY - 15);
    ctx.lineTo(centerX + 75, f1Y + 40);
    ctx.lineTo(centerX + 55, f1Y + 40);
    ctx.stroke();
    
    ctx.fillStyle = '#16A085';
    ctx.font = 'bold 12px Arial';
    ctx.fillText('b₂δ', centerX + 70, membraneY + 30);
    ctx.fillText('(stator)', centerX + 65, membraneY + 43);
    
    // H+ flow arrows
    ctx.fillStyle = '#3498DB';
    ctx.font = 'bold 14px Arial';
    
    // H+ entering
    for (let i = 0; i < 3; i++) {
      this.drawArrow(ctx, centerX + cRingRadius + 20, h * 0.28 + i * 15, 
                     centerX + cRingRadius + 20, membraneY - 25, '#3498DB', 2);
      ctx.fillText('H⁺', centerX + cRingRadius + 10, h * 0.27 + i * 15);
    }
    
    // H+ exiting to matrix
    for (let i = 0; i < 3; i++) {
      this.drawArrow(ctx, centerX + cRingRadius + 20, membraneY + 25, 
                     centerX + cRingRadius + 20, h * 0.60 + i * 12, '#3498DB', 2);
      ctx.fillText('H⁺', centerX + cRingRadius + 10, h * 0.62 + i * 12);
    }
    
    // Rotation arrows
    ctx.strokeStyle = '#FFD700';
    ctx.lineWidth = 4;
    ctx.beginPath();
    ctx.arc(centerX, membraneY, cRingRadius + 15, -0.3, Math.PI * 1.5);
    ctx.stroke();
    
    this.drawArrow(ctx, centerX - cRingRadius - 5, membraneY - 12, 
                   centerX - cRingRadius - 10, membraneY - 8, '#FFD700', 3);
    
    ctx.fillStyle = '#F39C12';
    ctx.font = 'bold 16px Arial';
    ctx.fillText('⟲', centerX - 50, membraneY - 25);
    ctx.fillText('Rotation', centerX - 65, membraneY - 10);
    
    // ADP + Pi input
    this.drawMolecule(ctx, centerX - 100, f1Y, 30, '#95A5A6', 'ADP+Pi');
    this.drawArrow(ctx, centerX - 78, f1Y, centerX - 50, f1Y, '#95A5A6');
    
    // ATP output
    this.drawMolecule(ctx, centerX + 100, f1Y, 30, '#27AE60', 'ATP');
    this.drawArrow(ctx, centerX + 50, f1Y, centerX + 78, f1Y, '#27AE60');
    
    // Beta subunit states
    ctx.fillStyle = '#ECF0F1';
    ctx.fillRect(centerX - 15, f1Y - 70, 30, 60);
    ctx.fillStyle = '#2C3E50';
    ctx.font = 'bold 10px Arial';
    ctx.fillText('β states:', centerX - 12, f1Y - 60);
    ctx.font = '9px Arial';
    ctx.fillText('O: Open', centerX - 12, f1Y - 50);
    ctx.fillText('L: Loose', centerX - 12, f1Y - 40);
    ctx.fillText('T: Tight', centerX - 12, f1Y - 30);
    
    // Mechanism box
    ctx.fillStyle = '#ECF0F1';
    ctx.fillRect(w * 0.52, h * 0.15, w * 0.43, h * 0.75);
    ctx.fillStyle = '#2C3E50';
    ctx.font = 'bold 20px Arial';
    ctx.fillText('BINDING CHANGE MECHANISM', w * 0.55, h * 0.22);
    
    ctx.font = '14px Arial';
    ctx.fillText('Structure:', w * 0.54, h * 0.28);
    ctx.font = '12px Arial';
    ctx.fillText('• F₀: Proton channel & rotor (c-ring)', w * 0.54, h * 0.32);
    ctx.fillText('• F₁: Catalytic sites (3 β subunits)', w * 0.54, h * 0.36);
    ctx.fillText('• Stator: Prevents F₁ rotation', w * 0.54, h * 0.40);
    
    ctx.font = '14px Arial';
    ctx.fillText('Mechanism (Paul Boyer):', w * 0.54, h * 0.46);
    ctx.font = '12px Arial';
    ctx.fillText('1. H⁺ flow through F₀ c-ring', w * 0.54, h * 0.50);
    ctx.fillText('   causes rotation (~100 rev/sec)', w * 0.56, h * 0.54);
    
    ctx.fillText('2. γ subunit rotates with c-ring', w * 0.54, h * 0.59);
    ctx.fillText('   inside fixed α₃β₃ hexamer', w * 0.56, h * 0.63);
    
    ctx.fillText('3. Each 120° rotation changes', w * 0.54, h * 0.68);
    ctx.fillText('   β subunit conformations:', w * 0.56, h * 0.72);
    ctx.fillText('   O → L → T → O (cycling)', w * 0.56, h * 0.76);
    
    ctx.fillText('4. Binding change cycle:', w * 0.54, h * 0.81);
    ctx.fillText('   Open: Releases ATP', w * 0.56, h * 0.85);
    ctx.fillText('   Loose: Binds ADP + Pi', w * 0.56, h * 0.89);
    ctx.fillText('   Tight: Catalyzes ATP synthesis', w * 0.56, h * 0.93);
    
    ctx.fillStyle = '#27AE60';
    ctx.font = 'bold 16px Arial';
    ctx.fillText('~3 H⁺ per ATP', w * 0.60, h * 0.99);
    ctx.fillText('(~10 c subunits / 360°)', w * 0.58, h * 1.04);
    
    // Bottom summary
    ctx.fillStyle = '#27AE60';
    ctx.fillRect(w * 0.05, h * 0.92, w * 0.43, h * 0.06);
    ctx.fillStyle = '#FFF';
    ctx.font = 'bold 14px Arial';
    ctx.fillText('Chemiosmotic coupling: H⁺ gradient → Rotation → ATP', w * 0.07, h * 0.96);
  }
  
  // ===== PHOTOSYNTHESIS =====
  
  static drawPhotosynthesisDetailed(ctx, x, y, width, height, reaction, detail) {
    ctx.save();
    ctx.translate(x, y);
    
    switch(reaction) {
      case 'both':
        this.drawBothReactions(ctx, width, height, detail);
        break;
      case 'light-dependent':
        this.drawLightDependent(ctx, width, height, detail);
        break;
      case 'light-independent':
        this.drawLightIndependent(ctx, width, height, detail);
        break;
      case 'electron-transport':
        this.drawPhotosyntheticETC(ctx, width, height, detail);
        break;
      case 'carbon-fixation':
        this.drawCarbonFixation(ctx, width, height, detail);
        break;
    }
    
    ctx.restore();
  }
  
  static drawBothReactions(ctx, w, h, detail) {
    // Title
    ctx.fillStyle = '#2C3E50';
    ctx.font = 'bold 24px Arial';
    ctx.fillText('PHOTOSYNTHESIS - Complete Process', w * 0.28, h * 0.06);
    
    // Divide into two sections
    // Top: Light-dependent reactions
    ctx.fillStyle = '#FFF9E0';
    ctx.fillRect(0, h * 0.10, w, h * 0.42);
    
    ctx.fillStyle = '#F39C12';
    ctx.font = 'bold 20px Arial';
    ctx.fillText('LIGHT-DEPENDENT REACTIONS', w * 0.30, h * 0.15);
    ctx.font = '14px Arial';
    ctx.fillText('(Thylakoid Membrane)', w * 0.38, h * 0.19);
    
    // Simplified light reactions
    // Simplified light reactions
    const ly = h * 0.30;
    
    // Photosystem II
    ctx.fillStyle = '#3498DB';
    ctx.fillRect(w * 0.15, ly - 30, 60, 60);
    ctx.fillStyle = '#FFF';
    ctx.font = 'bold 16px Arial';
    ctx.fillText('PSII', w * 0.165, ly);
    
    // Water splitting
    this.drawMolecule(ctx, w * 0.12, ly + 50, 25, '#1ABC9C', 'H₂O');
    this.drawArrow(ctx, w * 0.13, ly + 40, w * 0.17, ly + 30, '#1ABC9C');
    
    ctx.fillStyle = '#27AE60';
    ctx.font = '12px Arial';
    ctx.fillText('→ O₂', w * 0.14, ly + 70);
    
    // Light energy
    for (let i = 0; i < 3; i++) {
      ctx.strokeStyle = '#F39C12';
      ctx.lineWidth = 3;
      ctx.beginPath();
      ctx.moveTo(w * 0.18 - i * 8, ly - 50);
      ctx.lineTo(w * 0.18 - i * 8, ly - 30);
      ctx.stroke();
    }
    ctx.fillStyle = '#F39C12';
    ctx.font = 'bold 14px Arial';
    ctx.fillText('Light', w * 0.15, ly - 55);
    
    // Electron transport chain
    this.drawArrow(ctx, w * 0.21, ly, w * 0.35, ly, '#FFD700', 4);
    ctx.fillStyle = '#E74C3C';
    ctx.font = 'bold 14px Arial';
    ctx.fillText('e⁻', w * 0.27, ly - 5);
    
    // Cytochrome b6f complex
    ctx.fillStyle = '#9B59B6';
    ctx.fillRect(w * 0.38, ly - 25, 50, 50);
    ctx.fillStyle = '#FFF';
    ctx.font = 'bold 12px Arial';
    ctx.fillText('Cyt b₆f', w * 0.395, ly + 3);
    
    // H+ pumping
    for (let i = 0; i < 3; i++) {
      this.drawArrow(ctx, w * 0.40 + i * 12, ly + 25, w * 0.40 + i * 12, ly + 45, '#FF6B6B', 2);
      ctx.fillStyle = '#C0392B';
      ctx.font = 'bold 11px Arial';
      ctx.fillText('H⁺', w * 0.395 + i * 12, ly + 50);
    }
    
    // Photosystem I
    ctx.fillStyle = '#27AE60';
    ctx.fillRect(w * 0.52, ly - 30, 60, 60);
    ctx.fillStyle = '#FFF';
    ctx.font = 'bold 16px Arial';
    ctx.fillText('PSI', w * 0.535, ly);
    
    // Light on PSI
    for (let i = 0; i < 3; i++) {
      ctx.strokeStyle = '#F39C12';
      ctx.lineWidth = 3;
      ctx.beginPath();
      ctx.moveTo(w * 0.55 - i * 8, ly - 50);
      ctx.lineTo(w * 0.55 - i * 8, ly - 30);
      ctx.stroke();
    }
    ctx.fillStyle = '#F39C12';
    ctx.font = 'bold 14px Arial';
    ctx.fillText('Light', w * 0.52, ly - 55);
    
    // Electron to NADP+
    this.drawArrow(ctx, w * 0.56, ly, w * 0.68, ly, '#FFD700', 4);
    
    // NADP+ to NADPH
    this.drawMolecule(ctx, w * 0.72, ly - 15, 28, '#95A5A6', 'NADP⁺');
    this.drawArrow(ctx, w * 0.72, ly + 5, w * 0.72, ly + 25, '#27AE60');
    this.drawMolecule(ctx, w * 0.72, ly + 45, 28, '#27AE60', 'NADPH');
    
    // ATP Synthase
    ctx.fillStyle = '#E67E22';
    ctx.beginPath();
    ctx.arc(w * 0.85, ly + 10, 25, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = '#FFF';
    ctx.font = 'bold 12px Arial';
    ctx.fillText('ATP', w * 0.835, ly + 10);
    ctx.fillText('Syn', w * 0.838, ly + 20);
    
    // H+ through synthase
    for (let i = 0; i < 2; i++) {
      this.drawArrow(ctx, w * 0.84 + i * 10, ly + 40, w * 0.84 + i * 10, ly + 25, '#FF6B6B', 2);
    }
    
    // ATP production
    ctx.fillStyle = '#27AE60';
    ctx.font = 'bold 14px Arial';
    ctx.fillText('ATP', w * 0.87, ly + 25);
    
    // Products summary
    ctx.fillStyle = '#27AE60';
    ctx.fillRect(w * 0.75, h * 0.42, w * 0.22, h * 0.08);
    ctx.fillStyle = '#FFF';
    ctx.font = 'bold 14px Arial';
    ctx.fillText('Products:', w * 0.77, h * 0.45);
    ctx.fillText('ATP + NADPH + O₂', w * 0.77, h * 0.48);
    
    // Bottom: Light-independent reactions (Calvin Cycle)
    ctx.fillStyle = '#E8F5E9';
    ctx.fillRect(0, h * 0.52, w, h * 0.48);
    
    ctx.fillStyle = '#27AE60';
    ctx.font = 'bold 20px Arial';
    ctx.fillText('LIGHT-INDEPENDENT REACTIONS (Calvin Cycle)', w * 0.22, h * 0.57);
    ctx.font = '14px Arial';
    ctx.fillText('(Stroma)', w * 0.44, h * 0.61);
    
    // Calvin Cycle simplified
    const cy = h * 0.75;
    const cRadius = h * 0.12;
    
    // Cycle circle
    ctx.strokeStyle = '#27AE60';
    ctx.lineWidth = 5;
    ctx.beginPath();
    ctx.arc(w * 0.35, cy, cRadius, 0, Math.PI * 2);
    ctx.stroke();
    
    // CO2 input
    this.drawMolecule(ctx, w * 0.35, cy - cRadius - 40, 30, '#95A5A6', 'CO₂');
    this.drawArrow(ctx, w * 0.35, cy - cRadius - 25, w * 0.35, cy - cRadius, '#95A5A6');
    ctx.fillStyle = '#34495E';
    ctx.font = 'bold 12px Arial';
    ctx.fillText('(6 CO₂)', w * 0.32, cy - cRadius - 45);
    
    // RuBP (5C)
    this.drawMolecule(ctx, w * 0.35, cy - cRadius + 10, 25, '#3498DB', 'RuBP');
    ctx.fillStyle = '#2980B9';
    ctx.font = '11px Arial';
    ctx.fillText('(6 × 5C)', w * 0.32, cy - cRadius + 35);
    
    // 3-PGA (3C)
    this.drawMolecule(ctx, w * 0.35 + cRadius, cy, 25, '#9B59B6', '3-PGA');
    ctx.fillStyle = '#8E44AD';
    ctx.font = '11px Arial';
    ctx.fillText('(12 × 3C)', w * 0.35 + cRadius - 20, cy + 25);
    
    // G3P (3C)
    this.drawMolecule(ctx, w * 0.35, cy + cRadius - 10, 25, '#E67E22', 'G3P');
    ctx.fillStyle = '#D35400';
    ctx.font = '11px Arial';
    ctx.fillText('(12 × 3C)', w * 0.32, cy + cRadius + 15);
    
    // RuBP regeneration
    this.drawMolecule(ctx, w * 0.35 - cRadius, cy, 25, '#1ABC9C', 'G3P');
    ctx.fillStyle = '#16A085';
    ctx.font = '11px Arial';
    ctx.fillText('(10 × 3C)', w * 0.35 - cRadius - 20, cy + 25);
    
    // Rubisco enzyme
    ctx.fillStyle = '#E74C3C';
    ctx.beginPath();
    ctx.arc(w * 0.35, cy - cRadius + 35, 15, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = '#FFF';
    ctx.font = 'bold 10px Arial';
    ctx.fillText('Rubisco', w * 0.35 - 20, cy - cRadius + 38);
    
    // ATP and NADPH usage arrows
    this.drawMolecule(ctx, w * 0.35 + cRadius + 50, cy - 20, 25, '#27AE60', 'ATP');
    this.drawArrow(ctx, w * 0.35 + cRadius + 35, cy - 15, w * 0.35 + cRadius + 10, cy - 5, '#27AE60', 2);
    
    this.drawMolecule(ctx, w * 0.35 + cRadius + 50, cy + 20, 25, '#27AE60', 'NADPH');
    this.drawArrow(ctx, w * 0.35 + cRadius + 35, cy + 15, w * 0.35 + cRadius + 10, cy + 5, '#27AE60', 2);
    
    ctx.fillStyle = '#27AE60';
    ctx.font = 'bold 12px Arial';
    ctx.fillText('Energy', w * 0.35 + cRadius + 15, cy + 35);
    ctx.fillText('Input', w * 0.35 + cRadius + 20, cy + 47);
    
    // Glucose output
    this.drawMolecule(ctx, w * 0.35, cy + cRadius + 50, 35, '#F39C12', 'Glucose');
    this.drawArrow(ctx, w * 0.35, cy + cRadius + 20, w * 0.35, cy + cRadius + 35, '#F39C12', 3);
    ctx.fillStyle = '#E67E22';
    ctx.font = 'bold 12px Arial';
    ctx.fillText('(1 × C₆H₁₂O₆)', w * 0.32, cy + cRadius + 75);
    
    // Summary box
    ctx.fillStyle = '#27AE60';
    ctx.fillRect(w * 0.60, h * 0.64, w * 0.37, h * 0.32);
    ctx.fillStyle = '#FFF';
    ctx.font = 'bold 18px Arial';
    ctx.fillText('CALVIN CYCLE SUMMARY', w * 0.63, h * 0.68);
    
    ctx.font = '13px Arial';
    ctx.fillText('For 1 Glucose (C₆H₁₂O₆):', w * 0.62, h * 0.73);
    ctx.fillText('Input:', w * 0.62, h * 0.78);
    ctx.fillText('  • 6 CO₂', w * 0.64, h * 0.82);
    ctx.fillText('  • 18 ATP', w * 0.64, h * 0.86);
    ctx.fillText('  • 12 NADPH', w * 0.64, h * 0.90);
    ctx.fillText('Output:', w * 0.62, h * 0.94);
    ctx.fillText('  • 1 Glucose', w * 0.64, h * 0.98);
    
    // Overall equation
    ctx.fillStyle = '#2C3E50';
    ctx.fillRect(0, h * 0.01, w, h * 0.04);
    ctx.fillStyle = '#FFF';
    ctx.font = 'bold 14px Arial';
    ctx.fillText('6 CO₂ + 6 H₂O + Light Energy → C₆H₁₂O₆ + 6 O₂', w * 0.25, h * 0.038);
  }
  
  static drawLightDependent(ctx, w, h, detail) {
    // Title
    ctx.fillStyle = '#2C3E50';
    ctx.font = 'bold 24px Arial';
    ctx.fillText('LIGHT-DEPENDENT REACTIONS', w * 0.28, h * 0.06);
    
    // Thylakoid context
    ctx.fillStyle = '#FFF9E0';
    ctx.fillRect(0, h * 0.12, w, h * 0.25);
    ctx.fillStyle = '#F39C12';
    ctx.font = 'bold 14px Arial';
    ctx.fillText('Thylakoid Lumen (High H⁺)', w * 0.05, h * 0.18);
    
    ctx.fillStyle = '#27AE60';
    ctx.fillRect(0, h * 0.37, w, h * 0.08);
    ctx.font = 'bold 16px Arial';
    ctx.fillText('THYLAKOID MEMBRANE', w * 0.38, h * 0.42);
    
    ctx.fillStyle = '#E8F5E9';
    ctx.fillRect(0, h * 0.45, w, h * 0.55);
    ctx.fillStyle = '#27AE60';
    ctx.font = 'bold 14px Arial';
    ctx.fillText('Stroma (Low H⁺)', w * 0.05, h * 0.52);
    
    // Photosystem II detailed
    const ps2X = w * 0.18;
    const memY = h * 0.41;
    
    ctx.fillStyle = '#3498DB';
    ctx.fillRect(ps2X - 50, memY - 40, 100, 90);
    ctx.fillStyle = '#FFF';
    ctx.font = 'bold 20px Arial';
    ctx.fillText('PSII', ps2X - 25, memY);
    ctx.font = '12px Arial';
    ctx.fillText('P680', ps2X - 20, memY + 15);
    
    // Light arrows
    for (let i = 0; i < 4; i++) {
      ctx.strokeStyle = '#F39C12';
      ctx.lineWidth = 3;
      ctx.beginPath();
      ctx.moveTo(ps2X - 30 + i * 15, h * 0.25);
      ctx.lineTo(ps2X - 30 + i * 15, memY - 40);
      ctx.stroke();
    }
    
    ctx.fillStyle = '#F39C12';
    ctx.font = 'bold 16px Arial';
    ctx.fillText('hν (Light)', ps2X - 35, h * 0.23);
    
    // Oxygen-evolving complex
    ctx.fillStyle = '#1ABC9C';
    ctx.fillRect(ps2X - 35, h * 0.20, 70, 30);
    ctx.fillStyle = '#FFF';
    ctx.font = 'bold 12px Arial';
    ctx.fillText('OEC', ps2X - 15, h * 0.235);
    ctx.font = '10px Arial';
    ctx.fillText('(Mn₄CaO₅)', ps2X - 25, h * 0.248);
    
    // Water splitting
    this.drawMolecule(ctx, ps2X - 80, h * 0.235, 22, '#1ABC9C', '2H₂O');
    this.drawArrow(ctx, ps2X - 65, h * 0.235, ps2X - 40, h * 0.235, '#1ABC9C');
    
    // O2, H+, electrons
    this.drawMolecule(ctx, ps2X + 80, h * 0.22, 22, '#3498DB', 'O₂');
    this.drawArrow(ctx, ps2X + 35, h * 0.235, ps2X + 65, h * 0.22, '#3498DB');
    
    ctx.fillStyle = '#C0392B';
    ctx.font = 'bold 12px Arial';
    ctx.fillText('4H⁺', ps2X + 70, h * 0.25);
    ctx.fillText('4e⁻', ps2X + 70, h * 0.26);
    
    // Plastoquinone (PQ)
    ctx.fillStyle = '#F39C12';
    ctx.beginPath();
    ctx.arc(ps2X + 60, memY, 22, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = '#FFF';
    ctx.font = 'bold 14px Arial';
    ctx.fillText('PQ', ps2X + 50, memY + 5);
    
    // Electron flow to PQ
    this.drawArrow(ctx, ps2X + 50, memY, ps2X + 40, memY, '#FFD700', 4);
    ctx.fillStyle = '#E74C3C';
    ctx.font = 'bold 14px Arial';
    ctx.fillText('e⁻', ps2X + 55, memY - 5);
    
    // Cytochrome b6f complex
    const cytX = w * 0.45;
    
    ctx.fillStyle = '#9B59B6';
    ctx.fillRect(cytX - 45, memY - 40, 90, 90);
    ctx.fillStyle = '#FFF';
    ctx.font = 'bold 18px Arial';
    ctx.fillText('Cyt b₆f', cytX - 35, memY);
    
    // PQ to Cyt b6f
    this.drawArrow(ctx, ps2X + 82, memY, cytX - 45, memY, '#FFD700', 4);
    
    // H+ pumping from Cyt b6f
    for (let i = 0; i < 4; i++) {
      this.drawArrow(ctx, cytX - 30 + i * 15, memY + 50, cytX - 30 + i * 15, h * 0.25, '#FF6B6B', 3);
      ctx.fillStyle = '#C0392B';
      ctx.font = 'bold 13px Arial';
      ctx.fillText('H⁺', cytX - 35 + i * 15, h * 0.23);
    }
    
    // Plastocyanin (PC)
    ctx.fillStyle = '#1ABC9C';
    ctx.beginPath();
    ctx.arc(cytX + 65, memY, 20, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = '#FFF';
    ctx.font = 'bold 13px Arial';
    ctx.fillText('PC', cytX + 56, memY + 5);
    
    // Electron to PC
    this.drawArrow(ctx, cytX + 45, memY, cytX + 47, memY, '#FFD700', 4);
    
    // Photosystem I
    const ps1X = w * 0.68;
    
    ctx.fillStyle = '#27AE60';
    ctx.fillRect(ps1X - 50, memY - 40, 100, 90);
    ctx.fillStyle = '#FFF';
    ctx.font = 'bold 20px Arial';
    ctx.fillText('PSI', ps1X - 20, memY);
    ctx.font = '12px Arial';
    ctx.fillText('P700', ps1X - 20, memY + 15);
    
    // Light on PSI
    for (let i = 0; i < 4; i++) {
      ctx.strokeStyle = '#F39C12';
      ctx.lineWidth = 3;
      ctx.beginPath();
      ctx.moveTo(ps1X - 30 + i * 15, h * 0.25);
      ctx.lineTo(ps1X - 30 + i * 15, memY - 40);
      ctx.stroke();
    }
    
    ctx.fillStyle = '#F39C12';
    ctx.font = 'bold 16px Arial';
    ctx.fillText('hν (Light)', ps1X - 35, h * 0.23);
    
    // PC to PSI
    this.drawArrow(ctx, cytX + 85, memY, ps1X - 50, memY, '#FFD700', 4);
    
    // Ferredoxin
    ctx.fillStyle = '#C0392B';
    ctx.beginPath();
    ctx.arc(ps1X, memY + 70, 22, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = '#FFF';
    ctx.font = 'bold 12px Arial';
    ctx.fillText('Fd', ps1X - 10, memY + 75);
    
    // Electron to Fd
    this.drawArrow(ctx, ps1X, memY + 50, ps1X, memY + 50, '#FFD700', 4);
    
    // FNR (Ferredoxin-NADP+ reductase)
    ctx.fillStyle = '#E67E22';
    ctx.fillRect(ps1X + 40, memY + 55, 60, 40);
    ctx.fillStyle = '#FFF';
    ctx.font = 'bold 12px Arial';
    ctx.fillText('FNR', ps1X + 55, memY + 78);
    
    // Fd to FNR
    this.drawArrow(ctx, ps1X + 22, memY + 70, ps1X + 40, memY + 70, '#FFD700', 3);
    
    // NADP+ to NADPH
    this.drawMolecule(ctx, ps1X + 70, memY + 115, 28, '#95A5A6', 'NADP⁺');
    this.drawArrow(ctx, ps1X + 70, memY + 100, ps1X + 70, memY + 95, '#95A5A6');
    
    this.drawMolecule(ctx, ps1X + 120, memY + 75, 28, '#27AE60', 'NADPH');
    this.drawArrow(ctx, ps1X + 100, memY + 75, ps1X + 98, memY + 75, '#27AE60');
    
    ctx.fillStyle = '#27AE60';
    ctx.font = 'bold 12px Arial';
    ctx.fillText('+ H⁺', ps1X + 105, memY + 90);
    
    // ATP Synthase
    const atpX = w * 0.88;
    
    // Simplified ATP synthase
    ctx.fillStyle = '#E67E22';
    ctx.beginPath();
    ctx.arc(atpX, memY, 30, 0, Math.PI * 2);
    ctx.fill();
    
    ctx.fillStyle = '#D35400';
    ctx.fillRect(atpX - 15, memY + 30, 30, 50);
    
    ctx.fillStyle = '#FFF';
    ctx.font = 'bold 14px Arial';
    ctx.fillText('ATP', atpX - 18, memY + 3);
    ctx.fillText('Syn', atpX - 15, memY + 15);
    
    // H+ flow through synthase
    for (let i = 0; i < 3; i++) {
      this.drawArrow(ctx, atpX - 12 + i * 10, h * 0.28, atpX - 12 + i * 10, memY - 30, '#FF6B6B', 3);
    }
    
    // ADP + Pi to ATP
    this.drawMolecule(ctx, atpX - 60, memY + 55, 25, '#95A5A6', 'ADP+Pi');
    this.drawArrow(ctx, atpX - 42, memY + 55, atpX - 15, memY + 55, '#95A5A6');
    
    this.drawMolecule(ctx, atpX + 60, memY + 55, 25, '#27AE60', 'ATP');
    this.drawArrow(ctx, atpX + 15, memY + 55, atpX + 42, memY + 55, '#27AE60');
    
    // Products summary
    ctx.fillStyle = '#27AE60';
    ctx.fillRect(w * 0.65, h * 0.82, w * 0.32, h * 0.15);
    ctx.fillStyle = '#FFF';
    ctx.font = 'bold 18px Arial';
    ctx.fillText('NET PRODUCTS', w * 0.72, h * 0.87);
    ctx.font = '15px Arial';
    ctx.fillText('• ATP', w * 0.68, h * 0.91);
    ctx.fillText('• NADPH', w * 0.68, h * 0.95);
    ctx.fillText('• O₂ (waste)', w * 0.68, h * 0.99);
  }
  
  static drawLightIndependent(ctx, w, h, detail) {
    // This can call drawCarbonFixation with appropriate detail level
    this.drawCarbonFixation(ctx, w, h, detail);
  }
  
  static drawPhotosyntheticETC(ctx, w, h, detail) {
    // Reuse the light-dependent drawing with focus on electron flow
    this.drawLightDependent(ctx, w, h, 'electron-transport');
  }
  
  static drawCarbonFixation(ctx, w, h, detail) {
    // Title
    ctx.fillStyle = '#2C3E50';
    ctx.font = 'bold 24px Arial';
    ctx.fillText('CALVIN CYCLE - Carbon Fixation', w * 0.28, h * 0.06);
    
    ctx.font = '16px Arial';
    ctx.fillText('(Light-Independent Reactions in Stroma)', w * 0.30, h * 0.10);
    
    // Background
    ctx.fillStyle = '#E8F5E9';
    ctx.fillRect(0, h * 0.14, w, h * 0.86);
    
    // Three phases
    const centerX = w * 0.35;
    const centerY = h * 0.50;
    const radius = h * 0.22;
    
    // Main cycle circle
    ctx.strokeStyle = '#27AE60';
    ctx.lineWidth = 6;
    ctx.beginPath();
    ctx.arc(centerX, centerY, radius, 0, Math.PI * 2);
    ctx.stroke();
    
    // Phase labels
    ctx.fillStyle = '#27AE60';
    ctx.font = 'bold 18px Arial';
    
    // Phase 1: Carbon Fixation (top)
    ctx.fillText('1. CARBON FIXATION', centerX - 90, centerY - radius - 15);
    
    // Phase 2: Reduction (right)
    ctx.fillText('2. REDUCTION', centerX + radius + 20, centerY);
    
    // Phase 3: Regeneration (bottom-left)
    ctx.fillText('3. REGENERATION', centerX - radius - 140, centerY + 30);
    
    // Step 1: CO2 + RuBP
    const step1X = centerX;
    const step1Y = centerY - radius + 30;
    
    // CO2 input
    this.drawMolecule(ctx, step1X, step1Y - 60, 30, '#95A5A6', 'CO₂');
    this.drawArrow(ctx, step1X, step1Y - 45, step1X, step1Y - 25, '#95A5A6', 3);
    ctx.fillStyle = '#34495E';
    ctx.font = 'bold 12px Arial';
    ctx.fillText('× 6', step1X + 15, step1Y - 50);
    
    // RuBP (ribulose bisphosphate)
    this.drawMolecule(ctx, step1X, step1Y, 32, '#3498DB', 'RuBP');
    ctx.fillStyle = '#2980B9';
    ctx.font = '11px Arial';
    ctx.fillText('(6 × C₅)', step1X - 20, step1Y + 25);
    
    // Rubisco enzyme
    ctx.fillStyle = '#E74C3C';
    ctx.beginPath();
    ctx.arc(step1X + 45, step1Y - 15, 18, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = '#FFF';
    ctx.font = 'bold 11px Arial';
    ctx.fillText('Rubisco', step1X + 30, step1Y - 12);
    
    // Unstable 6C intermediate (splits immediately)
    this.drawArrow(ctx, step1X, step1Y + 20, step1X + radius * 0.7, step1Y + radius * 0.4, '#666', 3);
    
    // Step 2: 3-Phosphoglycerate (3-PGA)
    const step2X = centerX + radius * 0.87;
    const step2Y = centerY;
    
    this.drawMolecule(ctx, step2X, step2Y, 30, '#9B59B6', '3-PGA');
    ctx.fillStyle = '#8E44AD';
    ctx.font = '11px Arial';
    ctx.fillText('(12 × C₃)', step2X - 22, step2Y + 25);
    
    // ATP input for reduction
    // ATP input for reduction
    this.drawMolecule(ctx, step2X + 70, step2Y - 40, 26, '#27AE60', 'ATP');
    this.drawArrow(ctx, step2X + 55, step2Y - 35, step2X + 30, step2Y - 15, '#27AE60', 2);
    
    ctx.fillStyle = '#27AE60';
    ctx.font = 'bold 11px Arial';
    ctx.fillText('× 12', step2X + 75, step2Y - 25);
    
    // NADPH input
    this.drawMolecule(ctx, step2X + 70, step2Y + 40, 26, '#27AE60', 'NADPH');
    this.drawArrow(ctx, step2X + 55, step2Y + 35, step2X + 30, step2Y + 15, '#27AE60', 2);
    
    ctx.fillStyle = '#27AE60';
    ctx.font = 'bold 11px Arial';
    ctx.fillText('× 12', step2X + 75, step2Y + 50);
    
    // Step 3: G3P (Glyceraldehyde 3-phosphate)
    const step3X = centerX + radius * 0.5;
    const step3Y = centerY + radius * 0.87;
    
    this.drawArrow(ctx, step2X - 15, step2Y + 25, step3X + 15, step3Y - 25, '#666', 3);
    
    this.drawMolecule(ctx, step3X, step3Y, 30, '#E67E22', 'G3P');
    ctx.fillStyle = '#D35400';
    ctx.font = '11px Arial';
    ctx.fillText('(12 × C₃)', step3X - 22, step3Y + 25);
    
    // G3P export (2 out of 12)
    this.drawMolecule(ctx, step3X + 90, step3Y, 28, '#F39C12', 'G3P');
    this.drawArrow(ctx, step3X + 30, step3Y, step3X + 68, step3Y, '#F39C12', 4);
    
    ctx.fillStyle = '#E67E22';
    ctx.font = 'bold 12px Arial';
    ctx.fillText('2 × G3P', step3X + 50, step3Y - 10);
    ctx.fillText('(Exit)', step3X + 55, step3Y - 22);
    
    // Arrow to glucose
    this.drawMolecule(ctx, step3X + 90, step3Y + 60, 35, '#F39C12', 'Glucose');
    this.drawArrow(ctx, step3X + 90, step3Y + 25, step3X + 90, step3Y + 38, '#F39C12', 3);
    
    ctx.fillStyle = '#E67E22';
    ctx.font = 'bold 11px Arial';
    ctx.fillText('C₆H₁₂O₆', step3X + 75, step3Y + 85);
    
    // Remaining 10 G3P continue in cycle
    ctx.fillStyle = '#D35400';
    ctx.font = '11px Arial';
    ctx.fillText('10 × G3P', step3X - 35, step3Y + 35);
    ctx.fillText('continue', step3X - 35, step3Y + 47);
    
    // Step 4: Back to RuBP (regeneration)
    const step4X = centerX - radius * 0.87;
    const step4Y = centerY;
    
    this.drawArrow(ctx, step3X - 25, step3Y, step4X + 25, step4Y + 20, '#666', 3);
    
    this.drawMolecule(ctx, step4X, step4Y, 28, '#1ABC9C', 'Various');
    ctx.fillStyle = '#16A085';
    ctx.font = '10px Arial';
    ctx.fillText('(C₃, C₄, C₅, C₆, C₇)', step4X - 42, step4Y + 20);
    ctx.fillText('intermediates', step4X - 35, step4Y + 32);
    
    // ATP for regeneration
    this.drawMolecule(ctx, step4X - 70, step4Y, 26, '#27AE60', 'ATP');
    this.drawArrow(ctx, step4X - 55, step4Y, step4X - 30, step4Y, '#27AE60', 2);
    
    ctx.fillStyle = '#27AE60';
    ctx.font = 'bold 11px Arial';
    ctx.fillText('× 6', step4X - 70, step4Y - 15);
    
    // Back to RuBP
    this.drawArrow(ctx, step4X, step4Y - 20, step1X - 25, step1Y, '#666', 3);
    
    ctx.fillStyle = '#16A085';
    ctx.font = 'bold 11px Arial';
    ctx.fillText('Regeneration', step4X - 25, step4Y - 30);
    
    // Info boxes
    ctx.fillStyle = '#ECF0F1';
    ctx.fillRect(w * 0.60, h * 0.18, w * 0.37, h * 0.75);
    
    ctx.fillStyle = '#2C3E50';
    ctx.font = 'bold 20px Arial';
    ctx.fillText('CALVIN CYCLE DETAILS', w * 0.63, h * 0.24);
    
    // Phase 1 box
    ctx.fillStyle = '#3498DB';
    ctx.fillRect(w * 0.62, h * 0.28, w * 0.33, h * 0.14);
    ctx.fillStyle = '#FFF';
    ctx.font = 'bold 16px Arial';
    ctx.fillText('PHASE 1: Carbon Fixation', w * 0.64, h * 0.32);
    ctx.font = '12px Arial';
    ctx.fillText('• 6 CO₂ + 6 RuBP (C₅)', w * 0.63, h * 0.36);
    ctx.fillText('• Rubisco catalyzes reaction', w * 0.63, h * 0.39);
    ctx.fillText('• Forms 12 × 3-PGA (C₃)', w * 0.63, h * 0.42);
    
    // Phase 2 box
    ctx.fillStyle = '#9B59B6';
    ctx.fillRect(w * 0.62, h * 0.44, w * 0.33, h * 0.17);
    ctx.fillStyle = '#FFF';
    ctx.font = 'bold 16px Arial';
    ctx.fillText('PHASE 2: Reduction', w * 0.64, h * 0.48);
    ctx.font = '12px Arial';
    ctx.fillText('• 12 × 3-PGA phosphorylated', w * 0.63, h * 0.52);
    ctx.fillText('  by 12 ATP', w * 0.63, h * 0.55);
    ctx.fillText('• Reduced by 12 NADPH', w * 0.63, h * 0.58);
    ctx.fillText('• Forms 12 × G3P (C₃)', w * 0.63, h * 0.61);
    
    // Phase 3 box
    ctx.fillStyle = '#1ABC9C';
    ctx.fillRect(w * 0.62, h * 0.63, w * 0.33, h * 0.18);
    ctx.fillStyle = '#FFF';
    ctx.font = 'bold 16px Arial';
    ctx.fillText('PHASE 3: Regeneration', w * 0.64, h * 0.67);
    ctx.font = '12px Arial';
    ctx.fillText('• 2 G3P exit (glucose)', w * 0.63, h * 0.71);
    ctx.fillText('• 10 G3P rearranged', w * 0.63, h * 0.74);
    ctx.fillText('• 6 ATP used', w * 0.63, h * 0.77);
    ctx.fillText('• Regenerates 6 RuBP (C₅)', w * 0.63, h * 0.80);
    
    // Summary box
    ctx.fillStyle = '#27AE60';
    ctx.fillRect(w * 0.62, h * 0.83, w * 0.33, h * 0.13);
    ctx.fillStyle = '#FFF';
    ctx.font = 'bold 14px Arial';
    ctx.fillText('NET EQUATION (1 Glucose):', w * 0.63, h * 0.87);
    ctx.font = '12px Arial';
    ctx.fillText('6 CO₂ + 18 ATP + 12 NADPH', w * 0.63, h * 0.90);
    ctx.fillText('→ C₆H₁₂O₆ + 18 ADP + 12 NADP⁺', w * 0.63, h * 0.93);
    
    // Rubisco info
    ctx.fillStyle = '#E74C3C';
    ctx.fillRect(w * 0.05, h * 0.82, w * 0.48, h * 0.12);
    ctx.fillStyle = '#FFF';
    ctx.font = 'bold 14px Arial';
    ctx.fillText('RUBISCO - Most abundant enzyme on Earth!', w * 0.08, h * 0.86);
    ctx.font = '12px Arial';
    ctx.fillText('• Catalyzes CO₂ fixation to RuBP', w * 0.08, h * 0.89);
    ctx.fillText('• Can also bind O₂ (photorespiration - wasteful!)', w * 0.08, h * 0.92);
  }
  
  // ===== ATP STRUCTURE =====
  
  static drawATPStructure(ctx, x, y, width, height, view, process) {
    ctx.save();
    ctx.translate(x, y);
    
    switch(view) {
      case 'structure':
        this.drawATPMolecule(ctx, width, height, process);
        break;
      case 'hydrolysis':
        this.drawATPHydrolysis(ctx, width, height, process);
        break;
      case 'synthesis':
        this.drawATPSynthesis(ctx, width, height, process);
        break;
      case 'cycle':
        this.drawATPADPCycle(ctx, width, height, process);
        break;
    }
    
    ctx.restore();
  }
  
  static drawATPMolecule(ctx, w, h, process) {
    // Title
    ctx.fillStyle = '#2C3E50';
    ctx.font = 'bold 24px Arial';
    ctx.fillText('ATP Structure - Adenosine Triphosphate', w * 0.22, h * 0.08);
    
    // Adenine (nitrogenous base)
    const adenineX = w * 0.25;
    const adenineY = h * 0.30;
    
    // Hexagon for adenine
    ctx.fillStyle = '#3498DB';
    ctx.beginPath();
    for (let i = 0; i < 6; i++) {
      const angle = (i / 6) * Math.PI * 2 - Math.PI / 2;
      const x = adenineX + 40 * Math.cos(angle);
      const y = adenineY + 40 * Math.sin(angle);
      if (i === 0) ctx.moveTo(x, y);
      else ctx.lineTo(x, y);
    }
    ctx.closePath();
    ctx.fill();
    
    // Pentagon attached
    ctx.fillStyle = '#2980B9';
    ctx.beginPath();
    for (let i = 0; i < 5; i++) {
      const angle = (i / 5) * Math.PI * 2 - Math.PI / 2;
      const x = adenineX + 25 + 25 * Math.cos(angle);
      const y = adenineY - 45 + 25 * Math.sin(angle);
      if (i === 0) ctx.moveTo(x, y);
      else ctx.lineTo(x, y);
    }
    ctx.closePath();
    ctx.fill();
    
    ctx.fillStyle = '#FFF';
    ctx.font = 'bold 18px Arial';
    ctx.fillText('Adenine', adenineX - 35, adenineY + 5);
    
    ctx.fillStyle = '#2C3E50';
    ctx.font = '12px Arial';
    ctx.fillText('(Nitrogenous Base)', adenineX - 50, adenineY + 80);
    
    // Ribose (sugar)
    const riboseX = w * 0.45;
    const riboseY = h * 0.30;
    
    ctx.fillStyle = '#E67E22';
    ctx.beginPath();
    for (let i = 0; i < 5; i++) {
      const angle = (i / 5) * Math.PI * 2 - Math.PI / 2;
      const x = riboseX + 35 * Math.cos(angle);
      const y = riboseY + 35 * Math.sin(angle);
      if (i === 0) ctx.moveTo(x, y);
      else ctx.lineTo(x, y);
    }
    ctx.closePath();
    ctx.fill();
    
    ctx.fillStyle = '#FFF';
    ctx.font = 'bold 16px Arial';
    ctx.fillText('Ribose', riboseX - 25, riboseY + 5);
    
    ctx.fillStyle = '#2C3E50';
    ctx.font = '12px Arial';
    ctx.fillText('(5-carbon sugar)', riboseX - 40, riboseY + 80);
    
    // Connection between adenine and ribose
    ctx.strokeStyle = '#34495E';
    ctx.lineWidth = 4;
    ctx.beginPath();
    ctx.moveTo(adenineX + 35, adenineY);
    ctx.lineTo(riboseX - 35, riboseY);
    ctx.stroke();
    
    // Three phosphate groups
    const phosphates = [
      {x: w * 0.60, label: 'α', color: '#27AE60', name: 'Alpha'},
      {x: w * 0.72, label: 'β', color: '#F39C12', name: 'Beta'},
      {x: w * 0.84, label: 'γ', color: '#E74C3C', name: 'Gamma'}
    ];
    
    phosphates.forEach((p, i) => {
      ctx.fillStyle = p.color;
      ctx.beginPath();
      ctx.arc(p.x, riboseY, 32, 0, Math.PI * 2);
      ctx.fill();
      
      ctx.fillStyle = '#FFF';
      ctx.font = 'bold 18px Arial';
      ctx.fillText('P', p.x - 8, riboseY - 5);
      ctx.font = 'bold 14px Arial';
      ctx.fillText(p.label, p.x + 5, riboseY + 8);
      
      ctx.fillStyle = '#2C3E50';
      ctx.font = '11px Arial';
      ctx.fillText(p.name + ' phosphate', p.x - 35, riboseY + 60);
      
      // High-energy bonds (squiggly lines)
      if (i > 0) {
        ctx.strokeStyle = '#E74C3C';
        ctx.lineWidth = 3;
        ctx.beginPath();
        const prevX = i === 1 ? phosphates[0].x : phosphates[1].x;
        const startX = prevX + 32;
        const endX = p.x - 32;
        const midX = (startX + endX) / 2;
        
        ctx.moveTo(startX, riboseY);
        for (let j = 0; j < 3; j++) {
          ctx.quadraticCurveTo(
            startX + (endX - startX) * (j + 0.5) / 3,
            riboseY + (j % 2 === 0 ? -8 : 8),
            startX + (endX - startX) * (j + 1) / 3,
            riboseY
          );
        }
        ctx.stroke();
        
        // Label high-energy bond
        ctx.fillStyle = '#E74C3C';
        ctx.font = 'bold 11px Arial';
        ctx.fillText('High energy', (prevX + p.x) / 2 - 25, riboseY - 20);
        ctx.fillText('bond (~', (prevX + p.x) / 2 - 15, riboseY - 8);
        ctx.fillText('7.3 kcal/mol)', (prevX + p.x) / 2 - 32, riboseY + 4);
      }
    });
    
    // Connection between ribose and first phosphate
    ctx.strokeStyle = '#34495E';
    ctx.lineWidth = 4;
    ctx.beginPath();
    ctx.moveTo(riboseX + 35, riboseY);
    ctx.lineTo(phosphates[0].x - 32, riboseY);
    ctx.stroke();
    
    // Labels
    ctx.fillStyle = '#2C3E50';
    ctx.font = 'bold 16px Arial';
    
    // Adenosine bracket
    ctx.strokeStyle = '#2C3E50';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(adenineX - 50, h * 0.45);
    ctx.lineTo(adenineX - 50, h * 0.50);
    ctx.lineTo(riboseX + 45, h * 0.50);
    ctx.lineTo(riboseX + 45, h * 0.45);
    ctx.stroke();
    ctx.fillText('Adenosine', adenineX + 20, h * 0.54);
    
    // AMP bracket
    ctx.beginPath();
    ctx.moveTo(adenineX - 50, h * 0.58);
    ctx.lineTo(adenineX - 50, h * 0.63);
    ctx.lineTo(phosphates[0].x + 35, h * 0.63);
    ctx.lineTo(phosphates[0].x + 35, h * 0.58);
    ctx.stroke();
    ctx.fillText('AMP (Adenosine Monophosphate)', adenineX + 25, h * 0.67);
    
    // ADP bracket
    ctx.beginPath();
    ctx.moveTo(adenineX - 50, h * 0.71);
    ctx.lineTo(adenineX - 50, h * 0.76);
    ctx.lineTo(phosphates[1].x + 35, h * 0.76);
    ctx.lineTo(phosphates[1].x + 35, h * 0.71);
    ctx.stroke();
    ctx.fillText('ADP (Adenosine Diphosphate)', adenineX + 60, h * 0.80);
    
    // ATP bracket
    ctx.beginPath();
    ctx.moveTo(adenineX - 50, h * 0.84);
    ctx.lineTo(adenineX - 50, h * 0.89);
    ctx.lineTo(phosphates[2].x + 35, h * 0.89);
    ctx.lineTo(phosphates[2].x + 35, h * 0.84);
    ctx.stroke();
    ctx.fillText('ATP (Adenosine Triphosphate)', adenineX + 90, h * 0.93);
    
    // Molecular formula
    ctx.fillStyle = '#27AE60';
    ctx.fillRect(w * 0.05, h * 0.10, w * 0.15, h * 0.08);
    ctx.fillStyle = '#FFF';
    ctx.font = 'bold 14px Arial';
    ctx.fillText('Formula:', w * 0.07, h * 0.14);
    ctx.fillText('C₁₀H₁₆N₅O₁₃P₃', w * 0.07, h * 0.17);
  }
  
  static drawATPHydrolysis(ctx, w, h, process) {
    // Title
    ctx.fillStyle = '#2C3E50';
    ctx.font = 'bold 24px Arial';
    ctx.fillText('ATP Hydrolysis - Energy Release', w * 0.28, h * 0.08);
    
    // ATP (left side)
    const atpX = w * 0.25;
    const atpY = h * 0.35;
    
    // Draw simplified ATP
    this.drawSimplifiedATP(ctx, atpX, atpY, 3, '#27AE60');
    
    ctx.fillStyle = '#27AE60';
    ctx.font = 'bold 20px Arial';
    ctx.fillText('ATP', atpX - 20, atpY + 80);
    
    // Water molecule
    const waterX = w * 0.42;
    const waterY = atpY;
    
    this.drawMolecule(ctx, waterX, waterY, 30, '#3498DB', 'H₂O');
    
    // Plus sign
    ctx.fillStyle = '#2C3E50';
    ctx.font = 'bold 30px Arial';
    ctx.fillText('+', w * 0.36, atpY + 10);
    
    // Arrow (hydrolysis)
    this.drawArrow(ctx, w * 0.48, atpY, w * 0.58, atpY, '#E74C3C', 6);
    
    ctx.fillStyle = '#E74C3C';
    ctx.font = 'bold 16px Arial';
    ctx.fillText('Hydrolysis', w * 0.49, atpY - 15);
    ctx.font = '12px Arial';
    ctx.fillText('(ATPase enzyme)', w * 0.48, atpY - 30);
    
    // Energy release indicator
    ctx.strokeStyle = '#F39C12';
    ctx.lineWidth = 3;
    for (let i = 0; i < 5; i++) {
      ctx.beginPath();
      ctx.moveTo(w * 0.53 - i * 4, atpY + 20 + i * 8);
      ctx.lineTo(w * 0.53 - i * 4, atpY + 30 + i * 8);
      ctx.stroke();
    }
    
    ctx.fillStyle = '#F39C12';
    ctx.font = 'bold 14px Arial';
    ctx.fillText('Energy', w * 0.51, atpY + 70);
    ctx.fillText('Released!', w * 0.50, atpY + 85);
    
    // ADP (right side)
    const adpX = w * 0.68;
    const adpY = atpY;
    
    this.drawSimplifiedATP(ctx, adpX, adpY, 2, '#E67E22');
    
    ctx.fillStyle = '#E67E22';
    ctx.font = 'bold 20px Arial';
    ctx.fillText('ADP', adpX - 20, adpY + 80);
    
    // Plus sign
    ctx.fillStyle = '#2C3E50';
    ctx.font = 'bold 30px Arial';
    ctx.fillText('+', w * 0.78, atpY + 10);
    
    // Inorganic phosphate
    const piX = w * 0.85;
    const piY = atpY;
    
    ctx.fillStyle = '#E74C3C';
    ctx.beginPath();
    ctx.arc(piX, piY, 28, 0, Math.PI * 2);
    ctx.fill();
    
    ctx.fillStyle = '#FFF';
    ctx.font = 'bold 16px Arial';
    ctx.fillText('Pi', piX - 10, piY + 6);
    
    ctx.fillStyle = '#C0392B';
    ctx.font = '14px Arial';
    ctx.fillText('Inorganic', piX - 28, piY + 60);
    ctx.fillText('Phosphate', piX - 30, piY + 75);
    
    // Equation box
    ctx.fillStyle = '#ECF0F1';
    ctx.fillRect(w * 0.10, h * 0.60, w * 0.80, h * 0.15);
    
    ctx.fillStyle = '#2C3E50';
    ctx.font = 'bold 18px Arial';
    ctx.fillText('HYDROLYSIS EQUATION:', w * 0.35, h * 0.66);
    
    ctx.font = '16px Arial';
    ctx.fillText('ATP + H₂O → ADP + Pi + Energy', w * 0.28, h * 0.71);
    
    // Energy info box
    ctx.fillStyle = '#F39C12';
    ctx.fillRect(w * 0.10, h * 0.78, w * 0.80, h * 0.18);
    
    ctx.fillStyle = '#FFF';
    ctx.font = 'bold 18px Arial';
    ctx.fillText('ENERGY RELEASED:', w * 0.38, h * 0.83);
    
    ctx.font = '15px Arial';
    ctx.fillText('ΔG° = -7.3 kcal/mol (-30.5 kJ/mol)', w * 0.28, h * 0.88);
    ctx.font = '13px Arial';
    ctx.fillText('Under cellular conditions: ΔG ≈ -12 kcal/mol', w * 0.27, h * 0.93);
    
    ctx.fillText('This energy is used for:', w * 0.12, h * 0.98);
    ctx.fillText('• Muscle contraction  • Active transport  • Biosynthesis  • Movement', w * 0.12, h * 1.02);
  }
  
  static drawATPSynthesis(ctx, w, h, process) {
    // This is essentially the reverse of hydrolysis
    // Title
    ctx.fillStyle = '#2C3E50';
    ctx.font = 'bold 24px Arial';
    ctx.fillText('ATP Synthesis - Energy Storage', w * 0.28, h * 0.08);
    
    const adpX = w * 0.20;
    const adpY = h * 0.35;
    
    // ADP (left)
    this.drawSimplifiedATP(ctx, adpX, adpY, 2, '#E67E22');
    ctx.fillStyle = '#E67E22';
    ctx.font = 'bold 20px Arial';
    ctx.fillText('ADP', adpX - 20, adpY + 80);
    
    // Plus
    ctx.fillStyle = '#2C3E50';
    ctx.font = 'bold 30px Arial';
    ctx.fillText('+', w * 0.32, adpY + 10);
    
    // Pi
    const piX = w * 0.40;
    ctx.fillStyle = '#E74C3C';
    ctx.beginPath();
    ctx.arc(piX, adpY, 28, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = '#FFF';
    ctx.font = 'bold 16px Arial';
    ctx.fillText('Pi', piX - 10, adpY + 6);
    
    // Plus
    ctx.fillStyle = '#2C3E50';
    ctx.font = 'bold 30px Arial';
    ctx.fillText('+', w * 0.46, adpY + 10);
    
    // Energy input
    ctx.fillStyle = '#F39C12';
    ctx.fillRect(w * 0.50, adpY - 20, w * 0.08, 40);
    ctx.fillStyle = '#FFF';
    ctx.font = 'bold 14px Arial';
    ctx.fillText('Energy', w * 0.51, adpY - 5);
    ctx.fillText('Input', w * 0.515, adpY + 10);
    
    // Arrow (synthesis)
    this.drawArrow(ctx, w * 0.60, adpY, w * 0.70, adpY, '#27AE60', 6);
    
    ctx.fillStyle = '#27AE60';
    ctx.font = 'bold 16px Arial';
    ctx.fillText('ATP Synthesis', w * 0.60, adpY - 15);
    ctx.font = '12px Arial';
    ctx.fillText('(ATP Synthase)', w * 0.61, adpY - 30);
    
    // ATP (right)
    const atpX = w * 0.80;
    this.drawSimplifiedATP(ctx, atpX, adpY, 3, '#27AE60');
    ctx.fillStyle = '#27AE60';
    ctx.font = 'bold 20px Arial';
    ctx.fillText('ATP', atpX - 20, adpY + 80);
    
    // Sources box
    ctx.fillStyle = '#ECF0F1';
    ctx.fillRect(w * 0.05, h * 0.60, w * 0.90, h * 0.35);
    
    ctx.fillStyle = '#2C3E50';
    ctx.font = 'bold 20px Arial';
    ctx.fillText('ENERGY SOURCES FOR ATP SYNTHESIS:', w * 0.28, h * 0.66);
    
    // Three pathways
    const pathways = [
      {name: 'Substrate-Level Phosphorylation', desc: 'Direct phosphate transfer\n(Glycolysis, Krebs Cycle)', color: '#3498DB'},
      {name: 'Oxidative Phosphorylation', desc: 'Electron transport chain\n(Mitochondria)', color: '#9B59B6'},
      {name: 'Photophosphorylation', desc: 'Light energy\n(Chloroplasts)', color: '#27AE60'}
    ];
    
    pathways.forEach((pathway, i) => {
      const boxX = w * (0.08 + i * 0.31);
      
      ctx.fillStyle = pathway.color;
      ctx.fillRect(boxX, h * 0.72, w * 0.28, h * 0.18);
      
      ctx.fillStyle = '#FFF';
      ctx.font = 'bold 14px Arial';
      ctx.fillText(pathway.name, boxX + w * 0.02, h * 0.76);
      
      ctx.font = '12px Arial';
      const lines = pathway.desc.split('\n');
      lines.forEach((line, j) => {
        ctx.fillText(line, boxX + w * 0.02, h * (0.80 + j * 0.04));
      });
    });
  }
  
  static drawATPADPCycle(ctx, w, h, process) {
    // Title
    ctx.fillStyle = '#2C3E50';
    ctx.font = 'bold 24px Arial';
    ctx.fillText('ATP-ADP Cycle - Energy Currency', w * 0.28, h * 0.08);
    
    const centerX = w * 0.5;
    const centerY = h * 0.45;
    const radius = w * 0.20;
    
    // Cycle circle
    ctx.strokeStyle = '#95A5A6';
    ctx.lineWidth = 4;
    ctx.setLineDash([10, 10]);
    ctx.beginPath();
    ctx.arc(centerX, centerY, radius, 0, Math.PI * 2);
    ctx.stroke();
    ctx.setLineDash([]);
    
    // ATP (top)
    const atpX = centerX;
    const atpY = centerY - radius;
    
    this.drawSimplifiedATP(ctx, atpX, atpY, 3, '#27AE60');
    ctx.fillStyle = '#27AE60';
    ctx.font = 'bold 24px Arial';
    ctx.fillText('ATP', atpX - 25, atpY - 30);
    ctx.font = '14px Arial';
    ctx.fillText('(Energy Stored)', atpX - 50, atpY - 45);
    
    // ADP (bottom)
    const adpX = centerX;
    const adpY = centerY + radius;
    
    this.drawSimplifiedATP(ctx, adpX, adpY, 2, '#E67E22');
    ctx.fillStyle = '#E67E22';
    ctx.font = 'bold 24px Arial';
    ctx.fillText('ADP + Pi', adpX - 40, adpY + 60);
    ctx.font = '14px Arial';
    ctx.fillText('(Lower Energy)', adpX - 50, adpY + 75);
    
    // Right side: Hydrolysis (energy release)
    const rightArcStartAngle = -Math.PI / 2;
    const rightArcEndAngle = Math.PI / 2;
    
    ctx.strokeStyle = '#E74C3C';
    ctx.lineWidth = 8;
    ctx.beginPath();
    ctx.arc(centerX, centerY, radius + 20, rightArcStartAngle, rightArcEndAngle);
    ctx.stroke();
    
    // Arrow for hydrolysis
    const arrowAngle1 = Math.PI / 3;
    const arrowX1 = centerX + (radius + 20) * Math.cos(arrowAngle1);
    const arrowY1 = centerY + (radius + 20) * Math.sin(arrowAngle1);
    this.drawArrow(ctx, arrowX1 - 20, arrowY1 - 10, arrowX1 - 5, arrowY1 + 5, '#E74C3C', 3);
    
    ctx.fillStyle = '#E74C3C';
    ctx.font = 'bold 18px Arial';
    ctx.fillText('HYDROLYSIS', centerX + radius + 40, centerY - 20);
    ctx.font = '14px Arial';
    ctx.fillText('Energy Released', centerX + radius + 40, centerY);
    ctx.fillText('for cellular work:', centerX + radius + 40, centerY + 15);
    
    ctx.font = '12px Arial';
    ctx.fillText('• Muscle contraction', centerX + radius + 45, centerY + 32);
    ctx.fillText('• Active transport', centerX + radius + 45, centerY + 45);
    ctx.fillText('• Biosynthesis', centerX + radius + 45, centerY + 58);
    ctx.fillText('• Nerve impulses', centerX + radius + 45, centerY + 71);
    
    // Left side: Synthesis (energy input)
    const leftArcStartAngle = Math.PI / 2;
    const leftArcEndAngle = Math.PI * 3 / 2;
    
    ctx.strokeStyle = '#27AE60';
    ctx.lineWidth = 8;
    ctx.beginPath();
    ctx.arc(centerX, centerY, radius + 20, leftArcStartAngle, leftArcEndAngle);
    ctx.stroke();
    
    // Arrow for synthesis
    const arrowAngle2 = Math.PI * 4 / 3;
    const arrowX2 = centerX + (radius + 20) * Math.cos(arrowAngle2);
    const arrowY2 = centerY + (radius + 20) * Math.sin(arrowAngle2);
    this.drawArrow(ctx, arrowX2 + 20, arrowY2 + 10, arrowX2 + 5, arrowY2 - 5, '#27AE60', 3);
    
    ctx.fillStyle = '#27AE60';
    ctx.font = 'bold 18px Arial';
    ctx.fillText('SYNTHESIS', centerX - radius - 140, centerY - 20);
    ctx.font = '14px Arial';
    ctx.fillText('Energy Input from:', centerX - radius - 140, centerY);
    
    ctx.font = '12px Arial';
    ctx.fillText('• Cellular respiration', centerX - radius - 145, centerY + 17);
    ctx.fillText('• Photosynthesis', centerX - radius - 145, centerY + 30);
    ctx.fillText('• Fermentation', centerX - radius - 145, centerY + 43);
    
    // Center label
    ctx.fillStyle = '#34495E';
    ctx.font = 'bold 16px Arial';
    ctx.fillText('Continuous', centerX - 42, centerY - 5);
    ctx.fillText('Cycling', centerX - 30, centerY + 12);
    
    // Bottom info box
    ctx.fillStyle = '#ECF0F1';
    ctx.fillRect(w * 0.15, h * 0.78, w * 0.70, h * 0.18);
    
    ctx.fillStyle = '#2C3E50';
    ctx.font = 'bold 18px Arial';
    ctx.fillText('ATP: THE ENERGY CURRENCY OF CELLS', w * 0.32, h * 0.84);
    
    ctx.font = '14px Arial';
    ctx.fillText('• Cells maintain ATP/ADP ratio (~1000:1 under normal conditions)', w * 0.17, h * 0.88);
    ctx.fillText('• Human body recycles its weight in ATP daily (~40 kg!)', w * 0.17, h * 0.92);
    ctx.fillText('• ATP is rapidly regenerated - turnover time ~1 minute', w * 0.17, h * 0.96);
  }
  
  // ===== MITOCHONDRION STRUCTURE =====
  
  static drawMitochondrion(ctx, x, y, width, height, view, component) {
    ctx.save();
    ctx.translate(x, y);
    
    switch(view) {
      case 'complete':
        this.drawCompleteMitochondrion(ctx, width, height, component);
        break;
      case 'outer-membrane':
        this.drawOuterMembrane(ctx, width, height, component);
        break;
      case 'inner-membrane':
        this.drawInnerMembrane(ctx, width, height, component);
        break;
      case 'matrix':
        this.drawMatrix(ctx, width, height, component);
        break;
      case 'cristae':
        this.drawCristae(ctx, width, height, component);
        break;
    }
    
    ctx.restore();
  }
  
  static drawCompleteMitochondrion(ctx, w, h, component) {
    // Title
    ctx.fillStyle = '#2C3E50';
    ctx.font = 'bold 24px Arial';
    ctx.fillText('Mitochondrion Structure', w * 0.35, h * 0.08);
    
    const centerX = w * 0.40;
    const centerY = h * 0.45;
    const outerWidth = w * 0.45;
    const outerHeight = h * 0.50;
    
    // Outer membrane (tan/beige)
    ctx.fillStyle = '#D4AF87';
    ctx.beginPath();
    ctx.ellipse(centerX, centerY, outerWidth, outerHeight, 0, 0, Math.PI * 2);
    ctx.fill();
    
    ctx.strokeStyle = '#8B7355';
    ctx.lineWidth = 3;
    ctx.stroke();
    
    // Intermembrane space (lighter)
    ctx.fillStyle = '#E8D4B8';
    ctx.beginPath();
    ctx.ellipse(centerX, centerY, outerWidth - 15, outerHeight - 15, 0, 0, Math.PI * 2);
    ctx.fill();
    
    // Inner membrane with cristae (darker)
    ctx.fillStyle = '#C19A6B';
    ctx.beginPath();
    ctx.ellipse(centerX, centerY, outerWidth - 25, outerHeight - 25, 0, 0, Math.PI * 2);
    ctx.fill();
    
    // Matrix (orange-brown)
    ctx.fillStyle = '#FFA07A';
    ctx.beginPath();
    ctx.ellipse(centerX, centerY, outerWidth - 35, outerHeight - 35, 0, 0, Math.PI * 2);
    ctx.fill();
    
    // Draw cristae (folded inner membrane)
    ctx.strokeStyle = '#8B6914';
    ctx.lineWidth = 4;
    
    for (let i = 0; i < 6; i++) {
      const y = centerY - outerHeight * 0.6 + i * (outerHeight * 1.2 / 6);
      const amplitude = (outerWidth - 60) * (1 - Math.abs(y - centerY) / outerHeight);
      
      ctx.beginPath();
      ctx.moveTo(centerX - amplitude, y);
      
      for (let x = -amplitude; x <= amplitude; x += 10) {
        const wave = Math.sin(x / 15) * 15;
        ctx.lineTo(centerX + x, y + wave);
      }
      
      ctx.stroke();
    }
    
    // Mitochondrial DNA (circular)
    ctx.fillStyle = '#E74C3C';
    ctx.beginPath();
    ctx.arc(centerX - 50, centerY + 30, 12, 0, Math.PI * 2);
    ctx.fill();
    
    ctx.strokeStyle = '#C0392B';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.arc(centerX - 50, centerY + 30, 8, 0, Math.PI * 2);
    ctx.stroke();
    
    // Ribosomes (small dots)
    ctx.fillStyle = '#3498DB';
    for (let i = 0; i < 15; i++) {
      const angle = Math.random() * Math.PI * 2;
      const distance = Math.random() * (outerWidth - 50);
      const rx = centerX + Math.cos(angle) * distance;
      const ry = centerY + Math.sin(angle) * distance * (outerHeight / outerWidth);
      
      if (Math.pow((rx - centerX) / (outerWidth - 35), 2) + 
          Math.pow((ry - centerY) / (outerHeight - 35), 2) < 1) {
        ctx.beginPath();
        ctx.arc(rx, ry, 3, 0, Math.PI * 2);
        ctx.fill();
      }
    }
    
    // Labels with arrows
    const labels = [
      {text: 'Outer Membrane', x: w * 0.15, y: h * 0.25, targetX: centerX - outerWidth + 10, targetY: centerY - outerHeight / 2},
      {text: 'Intermembrane Space', x: w * 0.08, y: h * 0.40, targetX: centerX - outerWidth + 20, targetY: centerY},
      {text: 'Inner Membrane', x: w * 0.15, y: h * 0.65, targetX: centerX - outerWidth + 35, targetY: centerY + outerHeight / 3},
      {text: 'Cristae', x: w * 0.20, y: h * 0.80, targetX: centerX - 30, targetY: centerY + 20},
      {text: 'Matrix', x: w * 0.35, y: h * 0.85, targetX: centerX, targetY: centerY},
      {text: 'Mitochondrial DNA', x: w * 0.05, y: h * 0.55, targetX: centerX - 50, targetY: centerY + 30},
      {text: 'Ribosomes', x: w * 0.68, y: h * 0.30, targetX: centerX + 40, targetY: centerY - 40}
    ];
    
    labels.forEach(label => {
      this.drawArrow(ctx, label.x + 80, label.y, label.targetX, label.targetY, '#2C3E50', 2);
      
      ctx.fillStyle = '#2C3E50';
      ctx.font = 'bold 14px Arial';
      ctx.fillText(label.text, label.x, label.y);
    });
    
    // Info box
    ctx.fillStyle = '#ECF0F1';
    ctx.fillRect(w * 0.65, h * 0.40, w * 0.32, h * 0.50);
    
    ctx.fillStyle = '#2C3E50';
    ctx.font = 'bold 16px Arial';
    ctx.fillText('KEY FEATURES', w * 0.70, h * 0.45);
    
    ctx.font = '12px Arial';
    ctx.fillText('Double Membrane:', w * 0.67, h * 0.50);
    ctx.fillText('  • Outer: porous', w * 0.67, h * 0.54);
    ctx.fillText('  • Inner: highly selective', w * 0.67, h * 0.58);
    
    ctx.fillText('Cristae:', w * 0.67, h * 0.64);
    ctx.fillText('  • Increase surface area', w * 0.67, h * 0.68);
    ctx.fillText('  • Site of ETC & ATP', w * 0.67, h * 0.72);
    ctx.fillText('    synthase', w * 0.67, h * 0.76);
    
    ctx.fillText('Matrix:', w * 0.67, h * 0.82);
    ctx.fillText('  • Contains enzymes', w * 0.67, h * 0.86);
    ctx.fillText('  • Krebs cycle occurs here', w * 0.67, h * 0.90);
    ctx.fillText('  • Contains own DNA', w * 0.67, h * 0.94);
    ctx.fillText('    and ribosomes', w * 0.67, h * 0.98);
    
    // Size reference
    ctx.fillStyle = '#95A5A6';
    ctx.fillRect(w * 0.02, h * 0.92, w * 0.15, h * 0.06);
    ctx.fillStyle = '#FFF';
    ctx.font = 'bold 12px Arial';
    ctx.fillText('Size: 0.5-1.0 μm', w * 0.03, h * 0.95);
    ctx.fillText('diameter', w * 0.03, h * 0.98);
  }
  
  static drawOuterMembrane(ctx, w, h, component) {
    // Focus on outer membrane structure
    ctx.fillStyle = '#2C3E50';
    ctx.font = 'bold 24px Arial';
    ctx.fillText('Outer Mitochondrial Membrane', w * 0.28, h * 0.08);
    
    // Cross-section view
    const memY = h * 0.40;
    
    // Phospholipid bilayer
    ctx.fillStyle = '#D4AF87';
    ctx.fillRect(w * 0.10, memY - 25, w * 0.80, 50);
    
    // Phospholipid heads and tails
    for (let i = 0; i < 20; i++) {
      const x = w * 0.12 + i * w * 0.04;
      
      // Top layer
      ctx.fillStyle = '#E67E22';
      ctx.beginPath();
      ctx.arc(x, memY - 25, 8, 0, Math.PI * 2);
      ctx.fill();
      
      ctx.strokeStyle = '#95A5A6';
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(x, memY - 17);
      ctx.lineTo(x, memY);
      ctx.stroke();
      
      // Bottom layer
      ctx.fillStyle = '#E67E22';
      ctx.beginPath();
      ctx.arc(x, memY + 25, 8, 0, Math.PI * 2);
      ctx.fill();
      
      ctx.strokeStyle = '#95A5A6';
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(x, memY + 17);
      ctx.lineTo(x, memY);
      ctx.stroke();
    }
    
    // Porins (voltage-dependent anion channels)
    const porinPositions = [0.25, 0.50, 0.75];
    
    porinPositions.forEach(pos => {
      const x = w * pos;
      
      // Porin protein
      ctx.fillStyle = '#3498DB';
      ctx.fillRect(x - 20, memY - 35, 40, 70);
      
      // Channel
      ctx.fillStyle = '#ECF0F1';
      ctx.fillRect(x - 12, memY - 28, 24, 56);
      
      // Beta barrel structure
      for (let i = 0; i < 8; i++) {
        ctx.strokeStyle = '#2980B9';
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(x - 12 + i * 3, memY - 28);
        ctx.lineTo(x - 12 + i * 3, memY + 28);
        ctx.stroke();
      }
      
      ctx.fillStyle = '#FFF';
      ctx.font = 'bold 10px Arial';
      ctx.fillText('VDAC', x - 15, memY + 3);
    });
    
    // Labels
    ctx.fillStyle = '#2C3E50';
    ctx.font = 'bold 14px Arial';
    ctx.fillText('Cytosol', w * 0.45, memY - 60);
    ctx.fillText('Intermembrane Space', w * 0.38, memY + 75);
    
    // Info
    ctx.fillStyle = '#ECF0F1';
    ctx.fillRect(w * 0.10, h * 0.60, w * 0.80, h * 0.35);
    
    ctx.fillStyle = '#2C3E50';
    ctx.font = 'bold 18px Arial';
    ctx.fillText('OUTER MEMBRANE PROPERTIES', w * 0.32, h * 0.66);
    
    ctx.font = '14px Arial';
    ctx.fillText('• Phospholipid bilayer with proteins (~50% protein by mass)', w * 0.12, h * 0.72);
    ctx.fillText('• Contains porins (VDAC - Voltage-Dependent Anion Channels)', w * 0.12, h * 0.77);
    ctx.fillText('• Permeable to molecules < 5,000 daltons', w * 0.12, h * 0.82);
    ctx.fillText('• Allows passage of: ions, ATP, ADP, NAD+, pyruvate, fatty acids', w * 0.12, h * 0.87);
    ctx.fillText('• Separates mitochondrion from cytosol', w * 0.12, h * 0.92);
  }
  
  static drawInnerMembrane(ctx, w, h, component) {
    ctx.fillStyle = '#2C3E50';
    ctx.font = 'bold 24px Arial';
    ctx.fillText('Inner Mitochondrial Membrane', w * 0.28, h * 0.08);
    
    // Show cristae structure
    const memY = h * 0.35;
    
    // Tightly packed membrane
    ctx.fillStyle = '#C19A6B';
    ctx.fillRect(w * 0.10, memY - 20, w * 0.80, 40);
    
    // Phospholipids (more tightly packed)
    for (let i = 0; i < 25; i++) {
      const x = w * 0.11 + i * w * 0.032;
      
      ctx.fillStyle = '#E67E22';
      ctx.beginPath();
      ctx.arc(x, memY - 20, 6, 0, Math.PI * 2);
      ctx.fill();
      
      ctx.strokeStyle = '#7F8C8D';
      ctx.lineWidth = 1.5;
      ctx.beginPath();
      ctx.moveTo(x, memY - 14);
      ctx.lineTo(x, memY);
      ctx.stroke();
      
      ctx.fillStyle = '#E67E22';
      ctx.beginPath();
      ctx.arc(x, memY + 20, 6, 0, Math.PI * 2);
      ctx.fill();
      
      ctx.strokeStyle = '#7F8C8D';
      ctx.lineWidth = 1.5;
      ctx.beginPath();
      ctx.moveTo(x, memY + 14);
      ctx.lineTo(x, memY);
      ctx.stroke();
    }
    
    // ETC complexes
    const complexes = [
      {x: 0.20, name: 'I', color: '#3498DB'},
      {x: 0.35, name: 'II', color: '#1ABC9C'},
      {x: 0.50, name: 'III', color: '#9B59B6'},
      {x: 0.65, name: 'IV', color: '#E67E22'},
      {x: 0.80, name: 'V', color: '#27AE60'}
    ];
    
    complexes.forEach(complex => {
      const x = w * complex.x;
      
      ctx.fillStyle = complex.color;
      ctx.fillRect(x - 15, memY - 30, 30, 60);
      
      ctx.fillStyle = '#FFF';
      ctx.font = 'bold 16px Arial';
      ctx.fillText(complex.name, x - 7, memY + 5);
      
      ctx.fillStyle = complex.color;
      ctx.font = '10px Arial';
      if (complex.name === 'V') {
        ctx.fillText('ATP Syn', x - 20, memY - 35);
      } else {
        ctx.fillText('Complex', x - 20, memY - 35);
      }
    });
    
    // Labels
    ctx.fillStyle = '#2C3E50';
    ctx.font = 'bold 14px Arial';
    ctx.fillText('Intermembrane Space', w * 0.38, memY - 55);
    ctx.fillText('Matrix', w * 0.45, memY + 65);
    
    // Cardiolipin note
    ctx.fillStyle = '#E74C3C';
    ctx.fillRect(w * 0.10, h * 0.55, w * 0.35, h * 0.12);
    ctx.fillStyle = '#FFF';
    ctx.font = 'bold 14px Arial';
    ctx.fillText('Special Lipid: CARDIOLIPIN', w * 0.12, h * 0.59);
    ctx.font = '12px Arial';
    ctx.fillText('• Unique to inner membrane', w * 0.12, h * 0.63);
    ctx.fillText('• Makes membrane impermeable', w * 0.12, h * 0.67);
    
    // Properties
    ctx.fillStyle = '#ECF0F1';
    ctx.fillRect(w * 0.48, h * 0.55, w * 0.42, h * 0.40);
    
    ctx.fillStyle = '#2C3E50';
    ctx.font = 'bold 16px Arial';
    ctx.fillText('INNER MEMBRANE FEATURES', w * 0.53, h * 0.60);
    
    ctx.font = '12px Arial';
    ctx.fillText('• Highly folded into cristae', w * 0.50, h * 0.65);
    ctx.fillText('  (increases surface area 5-10x)', w * 0.50, h * 0.69);
    
    ctx.fillText('• Impermeable to most molecules', w * 0.50, h * 0.74);
    ctx.fillText('  (including H+ ions!)', w * 0.50, h * 0.78);
    
    ctx.fillText('• Contains ETC complexes I-IV', w * 0.50, h * 0.83);
    ctx.fillText('• Contains ATP synthase (V)', w * 0.50, h * 0.87);
    
    ctx.fillText('• High protein content (~75%)', w * 0.50, h * 0.92);
  }
  
  static drawMatrix(ctx, w, h, component) {
    ctx.fillStyle = '#2C3E50';
    ctx.font = 'bold 24px Arial';
    ctx.fillText('Mitochondrial Matrix', w * 0.35, h * 0.08);
    
    // Matrix background
    ctx.fillStyle = '#FFA07A';
    ctx.fillRect(w * 0.05, h * 0.15, w * 0.90, h * 0.75);
    
    // Krebs cycle enzymes (large complexes)
    const enzymes = [
      {x: 0.15, y: 0.30, name: 'Citrate\nSynthase'},
      {x: 0.30, y: 0.25, name: 'Aconitase'},
      {x: 0.45, y: 0.30, name: 'Isocitrate\nDehydrog.'},
      {x: 0.60, y: 0.25, name: 'α-Keto\nDehydrog.'},
      {x: 0.75, y: 0.30, name: 'Succinyl-\nCoA Synt.'}
    ];
    
    enzymes.forEach(enz => {
      ctx.fillStyle = '#3498DB';
      ctx.beginPath();
      ctx.arc(w * enz.x, h * enz.y, 25, 0, Math.PI * 2);
      ctx.fill();
      
      ctx.fillStyle = '#FFF';
      ctx.font = '9px Arial';
      const lines = enz.name.split('\n');
      lines.forEach((line, i) => {
        ctx.fillText(line, w * enz.x - 20, h * enz.y - 5 + i * 10);
      });
    });
    
    // mtDNA (circular)
    ctx.fillStyle = '#E74C3C';
    ctx.strokeStyle = '#C0392B';
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.arc(w * 0.20, h * 0.55, 30, 0, Math.PI * 2);
    ctx.fill();
    ctx.stroke();
    
    // Inner circle for DNA
    ctx.strokeStyle = '#FFF';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.arc(w * 0.20, h * 0.55, 20, 0, Math.PI * 2);
    ctx.stroke();
    
    ctx.fillStyle = '#FFF';
    ctx.font = 'bold 12px Arial';
    ctx.fillText('mtDNA', w * 0.19 - 18, h * 0.55 + 4);
    
    // Ribosomes
    for (let i = 0; i < 25; i++) {
      const x = w * (0.08 + Math.random() * 0.84);
      const y = h * (0.18 + Math.random() * 0.68);
      
      ctx.fillStyle = '#9B59B6';
      ctx.beginPath();
      ctx.arc(x, y, 4, 0, Math.PI * 2);
      ctx.fill();
    }
    
    // Metabolites
    const metabolites = [
      {x: 0.40, y: 0.50, name: 'Pyruvate', color: '#F39C12'},
      {x: 0.55, y: 0.55, name: 'Acetyl-CoA', color: '#E67E22'},
      {x: 0.70, y: 0.50, name: 'NADH', color: '#27AE60'},
      {x: 0.40, y: 0.70, name: 'FADH₂', color: '#16A085'},
      {x: 0.60, y: 0.68, name: 'ATP', color: '#27AE60'}
    ];
    
    metabolites.forEach(met => {
      ctx.fillStyle = met.color;
      ctx.beginPath();
      ctx.arc(w * met.x, h * met.y, 18, 0, Math.PI * 2);
      ctx.fill();
      
      ctx.fillStyle = '#FFF';
      ctx.font = 'bold 10px Arial';
      ctx.fillText(met.name, w * met.x - 18, h * met.y + 3);
    });
    
    // Info box
    ctx.fillStyle = '#ECF0F1';
    ctx.fillRect(w * 0.60, h * 0.75, w * 0.35, h * 0.20);
    
    ctx.fillStyle = '#2C3E50';
    ctx.font = 'bold 14px Arial';
    ctx.fillText('MATRIX CONTENTS', w * 0.65, h * 0.79);
    
    ctx.font = '11px Arial';
    ctx.fillText('• Krebs cycle enzymes', w * 0.62, h * 0.83);
    ctx.fillText('• Mitochondrial DNA (mtDNA)', w * 0.62, h * 0.87);
    ctx.fillText('• 70S ribosomes', w * 0.62, h * 0.91);
    ctx.fillText('• Krebs cycle enzymes', w * 0.62, h * 0.83);
    ctx.fillText('• Mitochondrial DNA (mtDNA)', w * 0.62, h * 0.87);
    ctx.fillText('• 70S ribosomes', w * 0.62, h * 0.91);
    ctx.fillText('• Ions (Mg²⁺, Ca²⁺, K⁺, PO₄³⁻)', w * 0.62, h * 0.95);
  }
  
  static drawCristae(ctx, w, h, component) {
    ctx.fillStyle = '#2C3E50';
    ctx.font = 'bold 24px Arial';
    ctx.fillText('Cristae - Inner Membrane Folds', w * 0.30, h * 0.08);
    
    // Cross-section of cristae
    ctx.fillStyle = '#FFA07A';
    ctx.fillRect(0, 0, w, h);
    
    // Draw multiple cristae folds
    ctx.fillStyle = '#C19A6B';
    ctx.strokeStyle = '#8B6914';
    ctx.lineWidth = 3;
    
    for (let i = 0; i < 5; i++) {
      const y = h * (0.20 + i * 0.15);
      
      ctx.beginPath();
      ctx.moveTo(w * 0.10, y);
      ctx.quadraticCurveTo(w * 0.25, y + 40, w * 0.40, y);
      ctx.quadraticCurveTo(w * 0.55, y - 40, w * 0.70, y);
      ctx.quadraticCurveTo(w * 0.80, y + 30, w * 0.90, y);
      ctx.stroke();
      
      // Fill area below
      ctx.beginPath();
      ctx.moveTo(w * 0.10, y);
      ctx.quadraticCurveTo(w * 0.25, y + 40, w * 0.40, y);
      ctx.quadraticCurveTo(w * 0.55, y - 40, w * 0.70, y);
      ctx.quadraticCurveTo(w * 0.80, y + 30, w * 0.90, y);
      ctx.lineTo(w * 0.90, y + 5);
      ctx.quadraticCurveTo(w * 0.80, y + 35, w * 0.70, y + 5);
      ctx.quadraticCurveTo(w * 0.55, y - 35, w * 0.40, y + 5);
      ctx.quadraticCurveTo(w * 0.25, y + 45, w * 0.10, y + 5);
      ctx.closePath();
      ctx.fill();
      
      // ATP synthase particles on cristae
      for (let j = 0; j < 4; j++) {
        const x = w * (0.20 + j * 0.18);
        
        ctx.fillStyle = '#27AE60';
        ctx.beginPath();
        ctx.arc(x, y - 2, 8, 0, Math.PI * 2);
        ctx.fill();
        
        ctx.fillStyle = '#229954';
        ctx.fillRect(x - 4, y + 6, 8, 12);
      }
    }
    
    // Labels
    ctx.fillStyle = '#2C3E50';
    ctx.font = 'bold 14px Arial';
    ctx.fillText('Matrix', w * 0.45, h * 0.15);
    
    // Zoomed section
    ctx.fillStyle = '#ECF0F1';
    ctx.fillRect(w * 0.05, h * 0.70, w * 0.90, h * 0.25);
    
    ctx.fillStyle = '#2C3E50';
    ctx.font = 'bold 16px Arial';
    ctx.fillText('CRISTAE FUNCTION', w * 0.38, h * 0.75);
    
    ctx.font = '13px Arial';
    ctx.fillText('• Increase surface area of inner membrane by 5-10 fold', w * 0.07, h * 0.80);
    ctx.fillText('• Maximize space for ETC complexes and ATP synthase', w * 0.07, h * 0.84);
    ctx.fillText('• More cristae = more ATP production (heart & muscle have many!)', w * 0.07, h * 0.88);
    ctx.fillText('• Create compartments for efficient H⁺ gradient', w * 0.07, h * 0.92);
  }
  
  // ===== CHLOROPLAST STRUCTURE =====
  
  static drawChloroplastStructure(ctx, x, y, width, height, view, component) {
    ctx.save();
    ctx.translate(x, y);
    
    switch(view) {
      case 'complete':
        this.drawCompleteChloroplast(ctx, width, height, component);
        break;
      case 'outer-membrane':
        this.drawChloroplastOuterMembrane(ctx, width, height, component);
        break;
      case 'thylakoid':
        this.drawThylakoid(ctx, width, height, component);
        break;
      case 'stroma':
        this.drawStroma(ctx, width, height, component);
        break;
      case 'grana':
        this.drawGrana(ctx, width, height, component);
        break;
    }
    
    ctx.restore();
  }
  
  static drawCompleteChloroplast(ctx, w, h, component) {
    // Title
    ctx.fillStyle = '#2C3E50';
    ctx.font = 'bold 24px Arial';
    ctx.fillText('Chloroplast Structure', w * 0.35, h * 0.08);
    
    const centerX = w * 0.40;
    const centerY = h * 0.45;
    const outerWidth = w * 0.45;
    const outerHeight = h * 0.55;
    
    // Outer membrane (light green)
    ctx.fillStyle = '#A8D5BA';
    ctx.beginPath();
    ctx.ellipse(centerX, centerY, outerWidth, outerHeight, 0, 0, Math.PI * 2);
    ctx.fill();
    
    ctx.strokeStyle = '#78A083';
    ctx.lineWidth = 3;
    ctx.stroke();
    
    // Inner membrane
    ctx.fillStyle = '#90C695';
    ctx.beginPath();
    ctx.ellipse(centerX, centerY, outerWidth - 12, outerHeight - 12, 0, 0, Math.PI * 2);
    ctx.fill();
    
    // Stroma (light green-yellow background)
    ctx.fillStyle = '#C8E6C9';
    ctx.beginPath();
    ctx.ellipse(centerX, centerY, outerWidth - 20, outerHeight - 20, 0, 0, Math.PI * 2);
    ctx.fill();
    
    // Draw grana (stacks of thylakoids)
    const granaPositions = [
      {x: centerX - 80, y: centerY - 60},
      {x: centerX + 20, y: centerY - 80},
      {x: centerX + 80, y: centerY - 30},
      {x: centerX - 40, y: centerY + 20},
      {x: centerX + 50, y: centerY + 40},
      {x: centerX - 70, y: centerY + 70}
    ];
    
    granaPositions.forEach(pos => {
      this.drawGranum(ctx, pos.x, pos.y, 50, 6);
    });
    
    // Stroma lamellae (connecting thylakoids)
    ctx.strokeStyle = '#66BB6A';
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.moveTo(granaPositions[0].x + 25, granaPositions[0].y);
    ctx.lineTo(granaPositions[1].x - 25, granaPositions[1].y);
    ctx.stroke();
    
    ctx.beginPath();
    ctx.moveTo(granaPositions[1].x + 25, granaPositions[1].y);
    ctx.lineTo(granaPositions[2].x - 25, granaPositions[2].y);
    ctx.stroke();
    
    // Chloroplast DNA
    ctx.fillStyle = '#E74C3C';
    ctx.beginPath();
    ctx.arc(centerX - 90, centerY, 10, 0, Math.PI * 2);
    ctx.fill();
    
    ctx.strokeStyle = '#C0392B';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.arc(centerX - 90, centerY, 7, 0, Math.PI * 2);
    ctx.stroke();
    
    // Ribosomes
    ctx.fillStyle = '#3498DB';
    for (let i = 0; i < 20; i++) {
      const angle = Math.random() * Math.PI * 2;
      const distance = Math.random() * (outerWidth - 40);
      const rx = centerX + Math.cos(angle) * distance;
      const ry = centerY + Math.sin(angle) * distance * (outerHeight / outerWidth);
      
      if (Math.pow((rx - centerX) / (outerWidth - 25), 2) + 
          Math.pow((ry - centerY) / (outerHeight - 25), 2) < 1) {
        ctx.beginPath();
        ctx.arc(rx, ry, 3, 0, Math.PI * 2);
        ctx.fill();
      }
    }
    
    // Starch grains
    ctx.fillStyle = '#FFF';
    ctx.strokeStyle = '#BDC3C7';
    ctx.lineWidth = 2;
    for (let i = 0; i < 3; i++) {
      const angle = Math.random() * Math.PI * 2;
      const distance = Math.random() * (outerWidth - 60);
      const rx = centerX + Math.cos(angle) * distance;
      const ry = centerY + Math.sin(angle) * distance * (outerHeight / outerWidth);
      
      if (Math.pow((rx - centerX) / (outerWidth - 35), 2) + 
          Math.pow((ry - centerY) / (outerHeight - 35), 2) < 1) {
        ctx.beginPath();
        ctx.arc(rx, ry, 12, 0, Math.PI * 2);
        ctx.fill();
        ctx.stroke();
      }
    }
    
    // Labels
    const labels = [
      {text: 'Outer Membrane', x: w * 0.05, y: h * 0.20, targetX: centerX - outerWidth + 5, targetY: centerY - outerHeight / 2},
      {text: 'Inner Membrane', x: w * 0.05, y: h * 0.35, targetX: centerX - outerWidth + 18, targetY: centerY - outerHeight / 3},
      {text: 'Stroma', x: w * 0.05, y: h * 0.50, targetX: centerX - 100, targetY: centerY + 90},
      {text: 'Granum (stack)', x: w * 0.05, y: h * 0.65, targetX: granaPositions[3].x, targetY: granaPositions[3].y},
      {text: 'Thylakoid', x: w * 0.05, y: h * 0.80, targetX: granaPositions[4].x, targetY: granaPositions[4].y - 15},
      {text: 'Stroma Lamella', x: w * 0.70, y: h * 0.25, targetX: granaPositions[1].x, targetY: granaPositions[1].y + 20},
      {text: 'cpDNA', x: w * 0.70, y: h * 0.40, targetX: centerX - 90, targetY: centerY},
      {text: 'Starch Grain', x: w * 0.70, y: h * 0.55, targetX: centerX + 60, targetY: centerY - 60}
    ];
    
    labels.forEach(label => {
      this.drawArrow(ctx, label.x + 80, label.y, label.targetX, label.targetY, '#2C3E50', 2);
      
      ctx.fillStyle = '#2C3E50';
      ctx.font = 'bold 13px Arial';
      ctx.fillText(label.text, label.x, label.y);
    });
    
    // Info box
    ctx.fillStyle = '#ECF0F1';
    ctx.fillRect(w * 0.65, h * 0.60, w * 0.32, h * 0.35);
    
    ctx.fillStyle = '#2C3E50';
    ctx.font = 'bold 14px Arial';
    ctx.fillText('KEY FEATURES', w * 0.70, h * 0.65);
    
    ctx.font = '11px Arial';
    ctx.fillText('Triple Membrane:', w * 0.67, h * 0.70);
    ctx.fillText('  • 2 envelope membranes', w * 0.67, h * 0.74);
    ctx.fillText('  • Thylakoid membrane', w * 0.67, h * 0.78);
    
    ctx.fillText('Grana:', w * 0.67, h * 0.83);
    ctx.fillText('  • Stacks of thylakoids', w * 0.67, h * 0.87);
    ctx.fillText('  • Light reactions occur', w * 0.67, h * 0.91);
    
    ctx.fillText('Stroma:', w * 0.67, h * 0.96);
    ctx.fillText('  • Calvin cycle occurs', w * 0.67, h * 1.00);
    ctx.fillText('  • Contains DNA, enzymes', w * 0.67, h * 1.04);
  }
  
  static drawGranum(ctx, x, y, width, numThylakoids) {
    const thylakoidHeight = 8;
    const spacing = 2;
    
    for (let i = 0; i < numThylakoids; i++) {
      const ty = y - (numThylakoids * (thylakoidHeight + spacing)) / 2 + i * (thylakoidHeight + spacing);
      
      // Thylakoid membrane
      ctx.fillStyle = '#66BB6A';
      ctx.beginPath();
      ctx.ellipse(x, ty, width / 2, thylakoidHeight / 2, 0, 0, Math.PI * 2);
      ctx.fill();
      
      ctx.strokeStyle = '#43A047';
      ctx.lineWidth = 2;
      ctx.stroke();
      
      // Lumen (lighter interior)
      ctx.fillStyle = '#A5D6A7';
      ctx.beginPath();
      ctx.ellipse(x, ty, width / 2 - 3, thylakoidHeight / 2 - 2, 0, 0, Math.PI * 2);
      ctx.fill();
    }
  }
  
  static drawChloroplastOuterMembrane(ctx, w, h, component) {
    ctx.fillStyle = '#2C3E50';
    ctx.font = 'bold 24px Arial';
    ctx.fillText('Chloroplast Envelope Membranes', w * 0.25, h * 0.08);
    
    // Outer membrane
    const outerY = h * 0.30;
    ctx.fillStyle = '#A8D5BA';
    ctx.fillRect(w * 0.10, outerY - 15, w * 0.80, 30);
    
    ctx.fillStyle = '#2C3E50';
    ctx.font = 'bold 16px Arial';
    ctx.fillText('OUTER MEMBRANE', w * 0.38, outerY - 25);
    
    // Porins
    for (let i = 0; i < 4; i++) {
      const x = w * (0.20 + i * 0.15);
      ctx.fillStyle = '#3498DB';
      ctx.fillRect(x - 12, outerY - 20, 24, 40);
      
      ctx.fillStyle = '#FFF';
      ctx.font = 'bold 10px Arial';
      ctx.fillText('Porin', x - 15, outerY + 3);
    }
    
    // Intermembrane space
    ctx.fillStyle = '#E8F5E9';
    ctx.fillRect(w * 0.10, outerY + 15, w * 0.80, 30);
    
    ctx.fillStyle = '#27AE60';
    ctx.font = '14px Arial';
    ctx.fillText('Intermembrane Space (10-20 nm)', w * 0.32, outerY + 33);
    
    // Inner membrane
    const innerY = h * 0.50;
    ctx.fillStyle = '#90C695';
    ctx.fillRect(w * 0.10, innerY - 15, w * 0.80, 30);
    
    ctx.fillStyle = '#2C3E50';
    ctx.font = 'bold 16px Arial';
    ctx.fillText('INNER MEMBRANE', w * 0.38, innerY + 40);
    
    // Transporters
    for (let i = 0; i < 3; i++) {
      const x = w * (0.25 + i * 0.20);
      ctx.fillStyle = '#E67E22';
      ctx.fillRect(x - 15, innerY - 20, 30, 40);
      
      ctx.fillStyle = '#FFF';
      ctx.font = 'bold 9px Arial';
      ctx.fillText('Trans-', x - 15, innerY - 3);
      ctx.fillText('porter', x - 16, innerY + 7);
    }
    
    // Stroma
    ctx.fillStyle = '#C8E6C9';
    ctx.fillRect(w * 0.10, innerY + 15, w * 0.80, h * 0.25);
    
    ctx.fillStyle = '#27AE60';
    ctx.font = '14px Arial';
    ctx.fillText('STROMA', w * 0.45, innerY + 35);
    
    // Info box
    ctx.fillStyle = '#ECF0F1';
    ctx.fillRect(w * 0.10, h * 0.80, w * 0.80, h * 0.15);
    
    ctx.fillStyle = '#2C3E50';
    ctx.font = 'bold 14px Arial';
    ctx.fillText('MEMBRANE PROPERTIES', w * 0.38, h * 0.84);
    
    ctx.font = '12px Arial';
    ctx.fillText('Outer: Porous (like mitochondria)', w * 0.12, h * 0.88);
    ctx.fillText('Inner: Selective, contains specific transporters for metabolites', w * 0.12, h * 0.92);
  }
  
  static drawThylakoid(ctx, w, h, component) {
    ctx.fillStyle = '#2C3E50';
    ctx.font = 'bold 24px Arial';
    ctx.fillText('Thylakoid Membrane', w * 0.35, h * 0.08);
    
    // Cross-section of single thylakoid
    const memY = h * 0.35;
    
    // Thylakoid membrane
    ctx.fillStyle = '#66BB6A';
    ctx.fillRect(w * 0.10, memY - 25, w * 0.80, 50);
    
    // Lumen
    ctx.fillStyle = '#A5D6A7';
    ctx.fillRect(w * 0.10, memY - 18, w * 0.80, 36);
    
    // Photosystems and complexes
    const components = [
      {x: 0.18, name: 'PSII', color: '#3498DB'},
      {x: 0.35, name: 'Cyt b₆f', color: '#9B59B6'},
      {x: 0.52, name: 'PSI', color: '#27AE60'},
      {x: 0.72, name: 'ATP Syn', color: '#E67E22'}
    ];
    
    components.forEach(comp => {
      const x = w * comp.x;
      
      ctx.fillStyle = comp.color;
      ctx.fillRect(x - 25, memY - 35, 50, 70);
      
      ctx.fillStyle = '#FFF';
      ctx.font = 'bold 12px Arial';
      ctx.fillText(comp.name, x - 20, memY + 3);
    });
    
    // Labels
    ctx.fillStyle = '#2C3E50';
    ctx.font = 'bold 14px Arial';
    ctx.fillText('Thylakoid Lumen', w * 0.40, memY - 50);
    ctx.fillText('Stroma', w * 0.45, memY + 60);
    
    // H+ gradient indicators
    ctx.fillStyle = '#FF6B6B';
    ctx.font = 'bold 12px Arial';
    for (let i = 0; i < 10; i++) {
      ctx.fillText('H⁺', w * (0.12 + i * 0.07), memY - 5);
    }
    
    ctx.fillStyle = '#3498DB';
    for (let i = 0; i < 3; i++) {
      ctx.fillText('H⁺', w * (0.15 + i * 0.25), memY + 50);
    }
    
    // Info
    ctx.fillStyle = '#ECF0F1';
    ctx.fillRect(w * 0.10, h * 0.65, w * 0.80, h * 0.30);
    
    ctx.fillStyle = '#2C3E50';
    ctx.font = 'bold 16px Arial';
    ctx.fillText('THYLAKOID FUNCTION', w * 0.38, h * 0.70);
    
    ctx.font = '13px Arial';
    ctx.fillText('• Site of light-dependent reactions', w * 0.12, h * 0.75);
    ctx.fillText('• Contains photosystems II and I', w * 0.12, h * 0.80);
    ctx.fillText('• H⁺ pumped into lumen creates gradient', w * 0.12, h * 0.85);
    ctx.fillText('• ATP synthase uses gradient to make ATP', w * 0.12, h * 0.90);
  }
  
  static drawStroma(ctx, w, h, component) {
    ctx.fillStyle = '#2C3E50';
    ctx.font = 'bold 24px Arial';
    ctx.fillText('Stroma - Chloroplast Matrix', w * 0.32, h * 0.08);
    
    // Background
    ctx.fillStyle = '#C8E6C9';
    ctx.fillRect(w * 0.05, h * 0.15, w * 0.90, h * 0.70);
    
    // Calvin cycle enzymes
    const enzymes = [
      {x: 0.15, y: 0.30, name: 'Rubisco'},
      {x: 0.35, y: 0.25, name: 'PGA\nKinase'},
      {x: 0.55, y: 0.30, name: 'G3P\nDehydrog.'},
      {x: 0.75, y: 0.25, name: 'RuBP\nKinase'}
    ];
    
    enzymes.forEach(enz => {
      ctx.fillStyle = '#27AE60';
      ctx.beginPath();
      ctx.arc(w * enz.x, h * enz.y, 28, 0, Math.PI * 2);
      ctx.fill();
      
      ctx.fillStyle = '#FFF';
      ctx.font = '10px Arial';
      const lines = enz.name.split('\n');
      lines.forEach((line, i) => {
        ctx.fillText(line, w * enz.x - 20, h * enz.y - 5 + i * 11);
      });
    });
    
    // cpDNA
    ctx.fillStyle = '#E74C3C';
    ctx.strokeStyle = '#C0392B';
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.arc(w * 0.25, h * 0.55, 25, 0, Math.PI * 2);
    ctx.fill();
    ctx.stroke();
    
    ctx.strokeStyle = '#FFF';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.arc(w * 0.25, h * 0.55, 18, 0, Math.PI * 2);
    ctx.stroke();
    
    ctx.fillStyle = '#FFF';
    ctx.font = 'bold 11px Arial';
    ctx.fillText('cpDNA', w * 0.24 - 16, h * 0.55 + 4);
    
    // Ribosomes
    ctx.fillStyle = '#3498DB';
    for (let i = 0; i < 30; i++) {
      const x = w * (0.08 + Math.random() * 0.84);
      const y = h * (0.18 + Math.random() * 0.64);
      
      ctx.beginPath();
      ctx.arc(x, y, 3, 0, Math.PI * 2);
      ctx.fill();
    }
    
    // Starch grains
    for (let i = 0; i < 4; i++) {
      const x = w * (0.50 + (i % 2) * 0.20);
      const y = h * (0.50 + Math.floor(i / 2) * 0.20);
      
      ctx.fillStyle = '#FFF';
      ctx.strokeStyle = '#BDC3C7';
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.arc(x, y, 15, 0, Math.PI * 2);
      ctx.fill();
      ctx.stroke();
      
      ctx.fillStyle = '#95A5A6';
      ctx.font = '9px Arial';
      ctx.fillText('Starch', x - 15, y + 3);
    }
    
    // Info box
    ctx.fillStyle = '#ECF0F1';
    ctx.fillRect(w * 0.05, h * 0.87, w * 0.90, h * 0.10);
    
    ctx.fillStyle = '#2C3E50';
    ctx.font = 'bold 14px Arial';
    ctx.fillText('STROMA CONTENTS', w * 0.38, h * 0.91);
    
    ctx.font = '12px Arial';
    ctx.fillText('• Calvin cycle enzymes  • cpDNA (circular)  • 70S ribosomes  • Starch grains  • Lipid droplets', w * 0.08, h * 0.95);
  }
  
  static drawGrana(ctx, w, h, component) {
    ctx.fillStyle = '#2C3E50';
    ctx.font = 'bold 24px Arial';
    ctx.fillText('Grana - Thylakoid Stacks', w * 0.32, h * 0.08);
    
    // Background (stroma)
    ctx.fillStyle = '#C8E6C9';
    ctx.fillRect(0, 0, w, h);
    
    // Draw detailed granum
    const centerX = w * 0.35;
    const centerY = h * 0.50;
    const numThylakoids = 12;
    const thylakoidHeight = 15;
    const spacing = 3;
    
    for (let i = 0; i < numThylakoids; i++) {
      const ty = centerY - (numThylakoids * (thylakoidHeight + spacing)) / 2 + i * (thylakoidHeight + spacing);
      
      // Thylakoid membrane (darker green)
      ctx.fillStyle = '#66BB6A';
      ctx.beginPath();
      ctx.ellipse(centerX, ty, 120, thylakoidHeight / 2, 0, 0, Math.PI * 2);
      ctx.fill();
      
      ctx.strokeStyle = '#43A047';
      ctx.lineWidth = 3;
      ctx.stroke();
      
      // Lumen (lighter interior)
      ctx.fillStyle = '#A5D6A7';
      ctx.beginPath();
      ctx.ellipse(centerX, ty, 115, thylakoidHeight / 2 - 3, 0, 0, Math.PI * 2);
      ctx.fill();
      
      // Photosystem complexes
      if (i % 2 === 0) {
        // PSII
        ctx.fillStyle = '#3498DB';
        ctx.fillRect(centerX - 80, ty - 10, 20, 20);
        ctx.fillStyle = '#FFF';
        ctx.font = 'bold 8px Arial';
        ctx.fillText('PSII', centerX - 77, ty + 2);
        
        // PSI
        ctx.fillStyle = '#27AE60';
        ctx.fillRect(centerX + 60, ty - 10, 20, 20);
        ctx.fillStyle = '#FFF';
        ctx.fillText('PSI', centerX + 64, ty + 2);
      }
    }
    
    // Stroma lamella connecting to another granum
    ctx.strokeStyle = '#66BB6A';
    ctx.lineWidth = 8;
    ctx.beginPath();
    ctx.moveTo(centerX + 120, centerY);
    ctx.lineTo(w * 0.75, centerY);
    ctx.stroke();
    
    // Smaller granum on right
    this.drawGranum(ctx, w * 0.78, centerY, 80, 6);
    
    // Labels
    ctx.fillStyle = '#2C3E50';
    ctx.font = 'bold 14px Arial';
    ctx.fillText('Granum', centerX - 30, centerY - 140);
    ctx.fillText('(stack of thylakoids)', centerX - 60, centerY - 125);
    
    ctx.fillText('Stroma Lamella', w * 0.52, centerY - 15);
    ctx.fillText('(connects grana)', w * 0.52, centerY);
    
    // Info box
    ctx.fillStyle = '#ECF0F1';
    ctx.fillRect(w * 0.60, h * 0.65, w * 0.37, h * 0.30);
    
    ctx.fillStyle = '#2C3E50';
    ctx.font = 'bold 16px Arial';
    ctx.fillText('GRANA STRUCTURE', w * 0.67, h * 0.70);
    
    ctx.font = '12px Arial';
    ctx.fillText('• Stack of 10-20 thylakoids', w * 0.62, h * 0.75);
    ctx.fillText('• Stacked arrangement increases', w * 0.62, h * 0.79);
    ctx.fillText('  surface area for light capture', w * 0.62, h * 0.83);
    ctx.fillText('• PSII concentrated in grana', w * 0.62, h * 0.87);
    ctx.fillText('• PSI more in stroma lamellae', w * 0.62, h * 0.91);
    ctx.fillText('• Typical chloroplast has', w * 0.62, h * 0.95);
    ctx.fillText('  40-60 grana', w * 0.62, h * 0.99);
  }
  
  // ===== HELPER METHODS =====
  
  static drawMolecule(ctx, x, y, radius, color, label) {
    ctx.fillStyle = color;
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, Math.PI * 2);
    ctx.fill();
    
    ctx.strokeStyle = this.darkenColor(color, 20);
    ctx.lineWidth = 2;
    ctx.stroke();
    
    if (label) {
      ctx.fillStyle = '#FFF';
      ctx.font = 'bold 11px Arial';
      const lines = label.split('\n');
      lines.forEach((line, i) => {
        const metrics = ctx.measureText(line);
        ctx.fillText(line, x - metrics.width / 2, y - (lines.length - 1) * 5 + i * 12);
      });
    }
  }
  
  static drawSimplifiedATP(ctx, x, y, numPhosphates, color) {
    // Adenosine base
    ctx.fillStyle = color;
    ctx.beginPath();
    ctx.arc(x - 60, y, 25, 0, Math.PI * 2);
    ctx.fill();
    
    ctx.fillStyle = '#FFF';
    ctx.font = 'bold 12px Arial';
    ctx.fillText('A', x - 65, y + 5);
    
    // Ribose
    ctx.fillStyle = color;
    ctx.beginPath();
    ctx.arc(x - 20, y, 20, 0, Math.PI * 2);
    ctx.fill();
    
    ctx.fillStyle = '#FFF';
    ctx.font = 'bold 10px Arial';
    ctx.fillText('R', x - 25, y + 4);
    
    // Phosphates
    for (let i = 0; i < numPhosphates; i++) {
      const px = x + 20 + i * 35;
      
      ctx.fillStyle = i === numPhosphates - 1 ? '#E74C3C' : color;
      ctx.beginPath();
      ctx.arc(px, y, 18, 0, Math.PI * 2);
      ctx.fill();
      
      ctx.fillStyle = '#FFF';
      ctx.font = 'bold 11px Arial';
      ctx.fillText('P', px - 6, y + 4);
      
      // High-energy bond
      if (i > 0) {
        ctx.strokeStyle = '#E74C3C';
        ctx.lineWidth = 2;
        ctx.beginPath();
        const prevX = x + 20 + (i - 1) * 35 + 18;
        const currX = px - 18;
        ctx.moveTo(prevX, y);
        for (let j = 0; j < 3; j++) {
          ctx.quadraticCurveTo(
            prevX + (currX - prevX) * (j + 0.5) / 3,
            y + (j % 2 === 0 ? -5 : 5),
            prevX + (currX - prevX) * (j + 1) / 3,
            y
          );
        }
        ctx.stroke();
      }
    }
  }
  
  static drawArrow(ctx, x1, y1, x2, y2, color, lineWidth = 2) {
    const headLength = 10;
    const angle = Math.atan2(y2 - y1, x2 - x1);
    
    ctx.strokeStyle = color;
    ctx.fillStyle = color;
    ctx.lineWidth = lineWidth;
    
    // Draw line
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.stroke();
    
    // Draw arrowhead
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
  
  static drawCurvedArrow(ctx, x1, y1, x2, y2, color) {
    const midX = (x1 + x2) / 2;
    const midY = (y1 + y2) / 2;
    
    ctx.strokeStyle = color;
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.quadraticCurveTo(midX, midY, x2, y2);
    ctx.stroke();
    
    // Arrowhead
    const angle = Math.atan2(y2 - midY, x2 - midX);
    ctx.fillStyle = color;
    ctx.beginPath();
    ctx.moveTo(x2, y2);
    ctx.lineTo(
      x2 - 8 * Math.cos(angle - Math.PI / 6),
      y2 - 8 * Math.sin(angle - Math.PI / 6)
    );
    ctx.lineTo(
      x2 - 8 * Math.cos(angle + Math.PI / 6),
      y2 - 8 * Math.sin(angle + Math.PI / 6)
    );
    ctx.closePath();
    ctx.fill();
  }
  
  static darkenColor(color, percent) {
    // Simple color darkening
    const num = parseInt(color.replace("#",""), 16);
    const amt = Math.round(2.55 * percent);
    const R = (num >> 16) - amt;
    const G = (num >> 8 & 0x00FF) - amt;
    const B = (num & 0x0000FF) - amt;
    return "#" + (0x1000000 + (R < 255 ? R < 1 ? 0 : R : 255) * 0x10000 +
      (G < 255 ? G < 1 ? 0 : G : 255) * 0x100 +
      (B < 255 ? B < 1 ? 0 : B : 255))
      .toString(16).slice(1);
  }
}



