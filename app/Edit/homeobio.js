import { createCanvas } from '@napi-rs/canvas'; import
ExcelJS from 'exceljs'; import fs from 'fs'; import os
from 'os'; import path from 'path'; import readline from
'readline'; import * as math from 'mathjs'; import
GIFEncoder from 'gifencoder'; import { PassThrough }
from 'stream';


class AnatomicalShapes {

// ========= Homeostasis Diagrams ===========================


  // ===== NEGATIVE FEEDBACK LOOP DIAGRAMS =====
  static drawNegativeFeedback(ctx, x, y, width, height, system, variable) {
    ctx.save();
    ctx.translate(x, y);
    
    switch(system) {
      case 'general':
        this.drawGeneralNegativeFeedback(ctx, width, height, variable);
        break;
      case 'temperature':
        this.drawTemperatureNegativeFeedback(ctx, width, height, variable);
        break;
      case 'glucose':
        this.drawGlucoseNegativeFeedback(ctx, width, height, variable);
        break;
      case 'blood-pressure':
        this.drawBloodPressureNegativeFeedback(ctx, width, height, variable);
        break;
      case 'calcium':
        this.drawCalciumNegativeFeedback(ctx, width, height, variable);
        break;
      case 'thyroid':
        this.drawThyroidNegativeFeedback(ctx, width, height, variable);
        break;
    }
    
    ctx.restore();
  }

  static drawGeneralNegativeFeedback(ctx, w, h, variable) {
    const centerX = w / 2;
    const centerY = h / 2;
    const radius = Math.min(w, h) * 0.35;

    // Draw circular feedback loop
    ctx.strokeStyle = '#2C3E50';
    ctx.lineWidth = 3;
    ctx.setLineDash([]);
    
    // Main circle
    ctx.beginPath();
    ctx.arc(centerX, centerY, radius, 0, Math.PI * 2);
    ctx.stroke();

    // Component boxes
    const components = [
      { label: 'Stimulus', angle: 0, color: '#E74C3C' },
      { label: 'Sensor', angle: Math.PI / 2, color: '#3498DB' },
      { label: 'Control Center', angle: Math.PI, color: '#9B59B6' },
      { label: 'Effector', angle: 3 * Math.PI / 2, color: '#27AE60' }
    ];

    components.forEach(comp => {
      const x = centerX + Math.cos(comp.angle) * radius;
      const y = centerY + Math.sin(comp.angle) * radius;
      
      // Highlight if this is the selected variable
      const isHighlighted = variable === comp.label.toLowerCase().replace(' ', '-');
      
      // Draw box
      ctx.fillStyle = isHighlighted ? comp.color : '#ECF0F1';
      ctx.strokeStyle = comp.color;
      ctx.lineWidth = isHighlighted ? 4 : 2;
      
      const boxW = 100;
      const boxH = 60;
      ctx.fillRect(x - boxW/2, y - boxH/2, boxW, boxH);
      ctx.strokeRect(x - boxW/2, y - boxH/2, boxW, boxH);
      
      // Label
      ctx.fillStyle = isHighlighted ? '#FFFFFF' : '#2C3E50';
      ctx.font = 'bold 14px Arial';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText(comp.label, x, y);
    });

    // Arrows showing direction of feedback
    ctx.strokeStyle = '#34495E';
    ctx.fillStyle = '#34495E';
    ctx.lineWidth = 2;
    this.drawCircularArrows(ctx, centerX, centerY, radius * 0.85, 4);

    // Set point indicator in center
    ctx.fillStyle = '#F39C12';
    ctx.beginPath();
    ctx.arc(centerX, centerY, 30, 0, Math.PI * 2);
    ctx.fill();
    ctx.strokeStyle = '#D68910';
    ctx.lineWidth = 2;
    ctx.stroke();
    
    ctx.fillStyle = '#FFFFFF';
    ctx.font = 'bold 12px Arial';
    ctx.textAlign = 'center';
    ctx.fillText('Set', centerX, centerY - 8);
    ctx.fillText('Point', centerX, centerY + 8);
  }

  static drawTemperatureNegativeFeedback(ctx, w, h, variable) {
    const centerX = w / 2;
    const centerY = h / 2;

    // Draw thermometer icon
    ctx.fillStyle = '#E74C3C';
    ctx.fillRect(centerX - 15, centerY - 100, 30, 120);
    ctx.beginPath();
    ctx.arc(centerX, centerY + 30, 25, 0, Math.PI * 2);
    ctx.fill();

    // Temperature markings
    ctx.strokeStyle = '#FFFFFF';
    ctx.lineWidth = 2;
    for(let i = 0; i < 5; i++) {
      const y = centerY - 80 + i * 25;
      ctx.beginPath();
      ctx.moveTo(centerX + 15, y);
      ctx.lineTo(centerX + 25, y);
      ctx.stroke();
    }

    // Hypothalamus control
    ctx.fillStyle = '#9B59B6';
    ctx.beginPath();
    ctx.arc(centerX - 120, centerY - 100, 40, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = '#FFFFFF';
    ctx.font = 'bold 12px Arial';
    ctx.textAlign = 'center';
    ctx.fillText('Hypothalamus', centerX - 120, centerY - 100);

    // Effectors
    // Sweat glands (cooling)
    ctx.fillStyle = '#3498DB';
    ctx.fillRect(centerX + 80, centerY - 60, 80, 50);
    ctx.fillStyle = '#FFFFFF';
    ctx.fillText('Sweat', centerX + 120, centerY - 40);
    ctx.fillText('Glands', centerX + 120, centerY - 25);

    // Shivering (heating)
    ctx.fillStyle = '#E67E22';
    ctx.fillRect(centerX + 80, centerY + 20, 80, 50);
    ctx.fillStyle = '#FFFFFF';
    ctx.fillText('Muscle', centerX + 120, centerY + 40);
    ctx.fillText('Shivering', centerX + 120, centerY + 55);

    // Arrows
    this.drawArrow(ctx, centerX - 80, centerY - 100, centerX - 30, centerY - 80);
    this.drawArrow(ctx, centerX - 80, centerY - 80, centerX + 80, centerY - 35);
    this.drawArrow(ctx, centerX - 80, centerY - 80, centerX + 80, centerY + 45);

    // Set point line
    ctx.strokeStyle = '#27AE60';
    ctx.lineWidth = 3;
    ctx.setLineDash([5, 5]);
    ctx.beginPath();
    ctx.moveTo(centerX + 20, centerY - 50);
    ctx.lineTo(centerX + 70, centerY - 50);
    ctx.stroke();
    ctx.setLineDash([]);
    
    ctx.fillStyle = '#27AE60';
    ctx.font = 'bold 14px Arial';
    ctx.fillText('37°C', centerX + 45, centerY - 60);
  }

  static drawGlucoseNegativeFeedback(ctx, w, h, variable) {
    const centerX = w / 2;
    const centerY = h / 2;

    // Blood glucose level indicator
    ctx.fillStyle = '#E8F5E9';
    ctx.strokeStyle = '#4CAF50';
    ctx.lineWidth = 3;
    ctx.fillRect(centerX - 60, centerY - 150, 120, 80);
    ctx.strokeRect(centerX - 60, centerY - 150, 120, 80);
    
    ctx.fillStyle = '#2E7D32';
    ctx.font = 'bold 16px Arial';
    ctx.textAlign = 'center';
    ctx.fillText('Blood Glucose', centerX, centerY - 130);
    ctx.fillText('Level', centerX, centerY - 110);

    // Pancreas
    ctx.fillStyle = '#FF9800';
    ctx.beginPath();
    ctx.ellipse(centerX, centerY, 80, 50, 0, 0, Math.PI * 2);
    ctx.fill();
    ctx.strokeStyle = '#F57C00';
    ctx.lineWidth = 3;
    ctx.stroke();
    
    ctx.fillStyle = '#FFFFFF';
    ctx.font = 'bold 14px Arial';
    ctx.fillText('Pancreas', centerX, centerY);

    // Insulin pathway (left)
    ctx.fillStyle = '#2196F3';
    ctx.fillRect(centerX - 180, centerY + 80, 100, 60);
    ctx.strokeStyle = '#1976D2';
    ctx.lineWidth = 2;
    ctx.strokeRect(centerX - 180, centerY + 80, 100, 60);
    
    ctx.fillStyle = '#FFFFFF';
    ctx.font = 'bold 12px Arial';
    ctx.fillText('Insulin', centerX - 130, centerY + 100);
    ctx.fillText('Release', centerX - 130, centerY + 120);

    // Glucagon pathway (right)
    ctx.fillStyle = '#F44336';
    ctx.fillRect(centerX + 80, centerY + 80, 100, 60);
    ctx.strokeStyle = '#D32F2F';
    ctx.lineWidth = 2;
    ctx.strokeRect(centerX + 80, centerY + 80, 100, 60);
    
    ctx.fillStyle = '#FFFFFF';
    ctx.fillText('Glucagon', centerX + 130, centerY + 100);
    ctx.fillText('Release', centerX + 130, centerY + 120);

    // Arrows
    this.drawArrow(ctx, centerX, centerY - 70, centerX, centerY - 50);
    this.drawArrow(ctx, centerX - 60, centerY + 30, centerX - 130, centerY + 80);
    this.drawArrow(ctx, centerX + 60, centerY + 30, centerX + 130, centerY + 80);
    
    // Feedback arrows
    ctx.strokeStyle = '#4CAF50';
    ctx.setLineDash([5, 5]);
    this.drawCurvedArrow(ctx, centerX - 130, centerY + 140, centerX - 80, centerY - 100);
    this.drawCurvedArrow(ctx, centerX + 130, centerY + 140, centerX + 80, centerY - 100);
    ctx.setLineDash([]);
  }

  static drawBloodPressureNegativeFeedback(ctx, w, h, variable) {
    const centerX = w / 2;
    const centerY = h / 2;

    // Heart
    ctx.fillStyle = '#E74C3C';
    ctx.beginPath();
    ctx.arc(centerX - 40, centerY - 120, 30, 0, Math.PI * 2);
    ctx.arc(centerX + 40, centerY - 120, 30, 0, Math.PI * 2);
    ctx.fill();
    ctx.beginPath();
    ctx.moveTo(centerX - 70, centerY - 120);
    ctx.lineTo(centerX, centerY - 50);
    ctx.lineTo(centerX + 70, centerY - 120);
    ctx.fill();

    // Baroreceptors
    ctx.fillStyle = '#9B59B6';
    ctx.beginPath();
    ctx.arc(centerX - 120, centerY, 35, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = '#FFFFFF';
    ctx.font = 'bold 11px Arial';
    ctx.textAlign = 'center';
    ctx.fillText('Baro-', centerX - 120, centerY - 5);
    ctx.fillText('receptors', centerX - 120, centerY + 10);

    // Medulla oblongata
    ctx.fillStyle = '#3498DB';
    ctx.fillRect(centerX + 60, centerY - 40, 100, 80);
    ctx.strokeStyle = '#2980B9';
    ctx.lineWidth = 2;
    ctx.strokeRect(centerX + 60, centerY - 40, 100, 80);
    ctx.fillStyle = '#FFFFFF';
    ctx.font = 'bold 12px Arial';
    ctx.fillText('Medulla', centerX + 110, centerY - 10);
    ctx.fillText('Oblongata', centerX + 110, centerY + 10);

    // Blood vessels
    ctx.fillStyle = '#E67E22';
    ctx.fillRect(centerX - 60, centerY + 80, 120, 50);
    ctx.strokeStyle = '#D35400';
    ctx.lineWidth = 2;
    ctx.strokeRect(centerX - 60, centerY + 80, 120, 50);
    ctx.fillStyle = '#FFFFFF';
    ctx.fillText('Blood Vessels', centerX, centerY + 105);

    // Arrows showing feedback loop
    this.drawArrow(ctx, centerX - 85, centerY, centerX + 60, centerY);
    this.drawArrow(ctx, centerX + 110, centerY + 40, centerX, centerY + 80);
    this.drawArrow(ctx, centerX, centerY - 50, centerX - 50, centerY - 30);
    
    // Pressure indicator
    ctx.fillStyle = '#27AE60';
    ctx.font = 'bold 16px Arial';
    ctx.fillText('120/80', centerX + 110, centerY + 70);
    ctx.font = '12px Arial';
    ctx.fillText('mmHg', centerX + 110, centerY + 90);
  }

  static drawCalciumNegativeFeedback(ctx, w, h, variable) {
    const centerX = w / 2;
    const centerY = h / 2;

    // Blood calcium level
    ctx.fillStyle = '#FFF3E0';
    ctx.strokeStyle = '#FF9800';
    ctx.lineWidth = 3;
    ctx.fillRect(centerX - 70, centerY - 140, 140, 70);
    ctx.strokeRect(centerX - 70, centerY - 140, 140, 70);
    ctx.fillStyle = '#E65100';
    ctx.font = 'bold 14px Arial';
    ctx.textAlign = 'center';
    ctx.fillText('Blood Ca²⁺', centerX, centerY - 115);
    ctx.fillText('Level', centerX, centerY - 95);

    // Parathyroid glands
    ctx.fillStyle = '#9C27B0';
    ctx.beginPath();
    ctx.ellipse(centerX - 90, centerY, 50, 35, 0, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = '#FFFFFF';
    ctx.font = 'bold 11px Arial';
    ctx.fillText('Parathyroid', centerX - 90, centerY);

    // Thyroid gland
    ctx.fillStyle = '#673AB7';
    ctx.beginPath();
    ctx.ellipse(centerX + 90, centerY, 50, 35, 0, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = '#FFFFFF';
    ctx.fillText('Thyroid', centerX + 90, centerY);

    // PTH (Parathyroid hormone)
    ctx.fillStyle = '#E91E63';
    ctx.fillRect(centerX - 160, centerY + 70, 80, 50);
    ctx.fillStyle = '#FFFFFF';
    ctx.font = 'bold 12px Arial';
    ctx.fillText('PTH', centerX - 120, centerY + 90);
    ctx.fillText('(increases Ca²⁺)', centerX - 120, centerY + 105);

    // Calcitonin
    ctx.fillStyle = '#2196F3';
    ctx.fillRect(centerX + 80, centerY + 70, 80, 50);
    ctx.fillStyle = '#FFFFFF';
    ctx.fillText('Calcitonin', centerX + 120, centerY + 90);
    ctx.fillText('(decreases Ca²⁺)', centerX + 120, centerY + 105);

    // Arrows
    this.drawArrow(ctx, centerX - 40, centerY - 70, centerX - 60, centerY - 35);
    this.drawArrow(ctx, centerX + 40, centerY - 70, centerX + 60, centerY - 35);
    this.drawArrow(ctx, centerX - 90, centerY + 35, centerX - 120, centerY + 70);
    this.drawArrow(ctx, centerX + 90, centerY + 35, centerX + 120, centerY + 70);
    
    // Feedback arrows
    ctx.strokeStyle = '#4CAF50';
    ctx.setLineDash([5, 5]);
    this.drawCurvedArrow(ctx, centerX - 120, centerY + 120, centerX - 50, centerY - 70);
    this.drawCurvedArrow(ctx, centerX + 120, centerY + 120, centerX + 50, centerY - 70);
    ctx.setLineDash([]);
  }

  static drawThyroidNegativeFeedback(ctx, w, h, variable) {
    const centerX = w / 2;
    const centerY = h / 2;

    // Hypothalamus (top)
    ctx.fillStyle = '#9B59B6';
    ctx.beginPath();
    ctx.arc(centerX, centerY - 140, 45, 0, Math.PI * 2);
    ctx.fill();
    ctx.strokeStyle = '#7D3C98';
    ctx.lineWidth = 3;
    ctx.stroke();
    ctx.fillStyle = '#FFFFFF';
    ctx.font = 'bold 12px Arial';
    ctx.textAlign = 'center';
    ctx.fillText('Hypothalamus', centerX, centerY - 140);

    // TRH
    ctx.fillStyle = '#E8DAEF';
    ctx.fillRect(centerX - 35, centerY - 80, 70, 35);
    ctx.strokeStyle = '#9B59B6';
    ctx.lineWidth = 2;
    ctx.strokeRect(centerX - 35, centerY - 80, 70, 35);
    ctx.fillStyle = '#7D3C98';
    ctx.font = 'bold 11px Arial';
    ctx.fillText('TRH', centerX, centerY - 62);

    // Anterior pituitary (middle)
    ctx.fillStyle = '#3498DB';
    ctx.beginPath();
    ctx.arc(centerX, centerY - 10, 50, 0, Math.PI * 2);
    ctx.fill();
    ctx.strokeStyle = '#2980B9';
    ctx.lineWidth = 3;
    ctx.stroke();
    ctx.fillStyle = '#FFFFFF';
    ctx.font = 'bold 11px Arial';
    ctx.fillText('Anterior', centerX, centerY - 15);
    ctx.fillText('Pituitary', centerX, centerY);

    // TSH
    ctx.fillStyle = '#D6EAF8';
    ctx.fillRect(centerX - 35, centerY + 50, 70, 35);
    ctx.strokeStyle = '#3498DB';
    ctx.lineWidth = 2;
    ctx.strokeRect(centerX - 35, centerY + 50, 70, 35);
    ctx.fillStyle = '#2980B9';
    ctx.font = 'bold 11px Arial';
    ctx.fillText('TSH', centerX, centerY + 68);

    // Thyroid gland (bottom)
    ctx.fillStyle = '#E74C3C';
    ctx.beginPath();
    // Butterfly shape
    ctx.arc(centerX - 30, centerY + 140, 35, 0, Math.PI * 2);
    ctx.arc(centerX + 30, centerY + 140, 35, 0, Math.PI * 2);
    ctx.fill();
    ctx.strokeStyle = '#C0392B';
    ctx.lineWidth = 3;
    ctx.stroke();
    ctx.fillStyle = '#FFFFFF';
    ctx.font = 'bold 12px Arial';
    ctx.fillText('Thyroid', centerX, centerY + 140);

    // T3/T4
    ctx.fillStyle = '#FADBD8';
    ctx.fillRect(centerX - 40, centerY + 190, 80, 35);
    ctx.strokeStyle = '#E74C3C';
    ctx.lineWidth = 2;
    ctx.strokeRect(centerX - 40, centerY + 190, 80, 35);
    ctx.fillStyle = '#C0392B';
    ctx.font = 'bold 11px Arial';
    ctx.fillText('T3 / T4', centerX, centerY + 208);

    // Forward arrows
    this.drawArrow(ctx, centerX, centerY - 95, centerX, centerY - 80);
    this.drawArrow(ctx, centerX, centerY - 45, centerX, centerY - 60);
    this.drawArrow(ctx, centerX, centerY + 40, centerX, centerY + 50);
    this.drawArrow(ctx, centerX, centerY + 85, centerX, centerY + 105);
    this.drawArrow(ctx, centerX, centerY + 175, centerX, centerY + 190);

    // Negative feedback arrows (curved back)
    ctx.strokeStyle = '#E74C3C';
    ctx.lineWidth = 3;
    ctx.setLineDash([5, 5]);
    
    // To hypothalamus
    ctx.beginPath();
    ctx.moveTo(centerX + 40, centerY + 200);
    ctx.quadraticCurveTo(centerX + 120, centerY, centerX + 40, centerY - 120);
    ctx.stroke();
    this.drawArrowHead(ctx, centerX + 40, centerY - 120, Math.PI / 2);
    
    // To pituitary
    ctx.beginPath();
    ctx.moveTo(centerX - 40, centerY + 200);
    ctx.quadraticCurveTo(centerX - 100, centerY + 100, centerX - 45, centerY + 10);
    ctx.stroke();
    this.drawArrowHead(ctx, centerX - 45, centerY + 10, Math.PI / 2);
    
    ctx.setLineDash([]);

    // Labels for negative feedback
    ctx.fillStyle = '#E74C3C';
    ctx.font = 'bold 10px Arial';
    ctx.fillText('(−)', centerX + 80, centerY - 60);
    ctx.fillText('(−)', centerX - 70, centerY + 60);
  }

  // ===== BLOOD GLUCOSE REGULATION DIAGRAMS =====
  static drawBloodGlucoseRegulation(ctx, x, y, width, height, state, hormone) {
    ctx.save();
    ctx.translate(x, y);
    
    const systems = {
      homeostasis: () => this.drawGlucoseHomeostasis(ctx, width, height, hormone),
      hyperglycemia: () => this.drawHyperglycemia(ctx, width, height, hormone),
      hypoglycemia: () => this.drawHypoglycemia(ctx, width, height, hormone),
      postprandial: () => this.drawPostprandialGlucose(ctx, width, height, hormone),
      fasting: () => this.drawFastingGlucose(ctx, width, height, hormone)
    };
    
    if (systems[state]) {
      systems[state]();
    }
    
    ctx.restore();
  }

  static drawGlucoseHomeostasis(ctx, w, h, hormone) {
    const centerX = w / 2;
    const centerY = h / 2;

    // Normal glucose level indicator
    ctx.fillStyle = '#D4EDDA';
    ctx.strokeStyle = '#28A745';
    ctx.lineWidth = 4;
    ctx.fillRect(centerX - 100, 40, 200, 80);
    ctx.strokeRect(centerX - 100, 40, 200, 80);
    
    ctx.fillStyle = '#155724';
    ctx.font = 'bold 18px Arial';
    ctx.textAlign = 'center';
    ctx.fillText('Normal Blood Glucose', centerX, 70);
    ctx.fillText('70-100 mg/dL', centerX, 95);

    // Pancreas (center)
    this.drawPancreas(ctx, centerX, centerY, 100, 60);

    if (hormone === 'both' || hormone === 'insulin') {
      // Beta cells → Insulin
      ctx.fillStyle = '#007BFF';
      ctx.fillRect(centerX - 200, centerY + 100, 120, 70);
      ctx.strokeStyle = '#0056B3';
      ctx.lineWidth = 3;
      ctx.strokeRect(centerX - 200, centerY + 100, 120, 70);
      ctx.fillStyle = '#FFFFFF';
      ctx.font = 'bold 14px Arial';
      ctx.fillText('β-cells', centerX - 140, centerY + 125);
      ctx.fillText('Insulin', centerX - 140, centerY + 150);
      
      this.drawArrow(ctx, centerX - 50, centerY + 30, centerX - 140, centerY + 100);
    }

    if (hormone === 'both' || hormone === 'glucagon') {
      // Alpha cells → Glucagon
      ctx.fillStyle = '#DC3545';
      ctx.fillRect(centerX + 80, centerY + 100, 120, 70);
      ctx.strokeStyle = '#A71D2A';
      ctx.lineWidth = 3;
      ctx.strokeRect(centerX + 80, centerY + 100, 120, 70);
      ctx.fillStyle = '#FFFFFF';
      ctx.font = 'bold 14px Arial';
      ctx.fillText('α-cells', centerX + 140, centerY + 125);
      ctx.fillText('Glucagon', centerX + 140, centerY + 150);
      
      this.drawArrow(ctx, centerX + 50, centerY + 30, centerX + 140, centerY + 100);
    }

    // Balance scale in background
    ctx.strokeStyle = '#6C757D';
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.moveTo(centerX - 150, h - 100);
    ctx.lineTo(centerX + 150, h - 100);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(centerX, h - 100);
    ctx.lineTo(centerX, h - 150);
    ctx.stroke();
  }

  static drawHyperglycemia(ctx, w, h, hormone) {
    const centerX = w / 2;
    
    // High glucose warning
    ctx.fillStyle = '#F8D7DA';
    ctx.strokeStyle = '#DC3545';
    ctx.lineWidth = 4;
    ctx.fillRect(centerX - 100, 40, 200, 80);
    ctx.strokeRect(centerX - 100, 40, 200, 80);
    
    ctx.fillStyle = '#721C24';
    ctx.font = 'bold 18px Arial';
    ctx.textAlign = 'center';
    ctx.fillText('HIGH Blood Glucose', centerX, 70);
    ctx.fillText('> 125 mg/dL', centerX, 95);
    
    // Up arrow
    ctx.fillStyle = '#DC3545';
    ctx.beginPath();
    ctx.moveTo(centerX + 120, 60);
    ctx.lineTo(centerX + 140, 60);
    ctx.lineTo(centerX + 130, 40);
    ctx.fill();

    // Pancreas releases insulin
    this.drawPancreas(ctx, centerX, h/2, 100, 60);
    
    ctx.fillStyle = '#007BFF';
    ctx.font = 'bold 20px Arial';
    ctx.fillText('↓ INSULIN RELEASE', centerX, h/2 + 100);
    
    // Target tissues
    const targets = [
      { x: centerX - 200, y: h - 150, label: 'Liver\n(↓ glucose output)' },
      { x: centerX, y: h - 150, label: 'Muscle\n(↑ glucose uptake)' },
      { x: centerX + 200, y: h - 150, label: 'Fat\n(↑ glucose storage)' }
    ];
    
    targets.forEach(target => {
      ctx.fillStyle = '#E7F3FF';
      ctx.strokeStyle = '#007BFF';
      ctx.lineWidth = 2;
      ctx.fillRect(target.x - 60, target.y - 30, 120, 60);
      ctx.strokeRect(target.x - 60, target.y - 30, 120, 60);
      
      ctx.fillStyle = '#004085';
      ctx.font = '12px Arial';
      const lines = target.label.split('\n');
      lines.forEach((line, i) => {
        ctx.fillText(line, target.x, target.y - 10 + i * 20);
      });
      
      this.drawArrow(ctx, centerX, h/2 + 120, target.x, target.y - 30);
    });
  }

  static drawHypoglycemia(ctx, w, h, hormone) {
    const centerX = w / 2;
    
    // Low glucose warning
    ctx.fillStyle = '#FFF3CD';
    ctx.strokeStyle = '#FFC107';
    ctx.lineWidth = 4;
    ctx.fillRect(centerX - 100, 40, 200, 80);
    ctx.strokeRect(centerX - 100, 40, 200, 80);
    
    ctx.fillStyle = '#856404';
    ctx.font = 'bold 18px Arial';
    ctx.textAlign = 'center';
    ctx.fillText('LOW Blood Glucose', centerX, 70);
    ctx.fillText('< 70 mg/dL', centerX, 95);
    
    // Down arrow
    ctx.fillStyle = '#FFC107';
    ctx.beginPath();
    ctx.moveTo(centerX + 120, 60);
    ctx.lineTo(centerX + 140, 60);
    ctx.lineTo(centerX + 130, 80);
    ctx.fill();

    // Pancreas releases glucagon
    this.drawPancreas(ctx, centerX, h/2, 100, 60);
    
    ctx.fillStyle = '#DC3545';
    ctx.font = 'bold 20px Arial';
    ctx.fillText('↑ GLUCAGON RELEASE', centerX, h/2 + 100);
    
    // Target: primarily liver
    ctx.fillStyle = '#FFEBEE';
    ctx.strokeStyle = '#DC3545';
    ctx.lineWidth = 3;
    ctx.fillRect(centerX - 100, h - 180, 200, 100);
    ctx.strokeRect(centerX - 100, h - 180, 200, 100);
    
    ctx.fillStyle = '#721C24';
    ctx.font = 'bold 16px Arial';
    ctx.fillText('LIVER', centerX, h - 160);
    ctx.font = '14px Arial';
    ctx.fillText('Glycogenolysis', centerX, h - 135);
    ctx.fillText('Gluconeogenesis', centerX, h - 115);
    ctx.font = 'bold 14px Arial';
    ctx.fillText('↑ Glucose Release', centerX, h - 90);
    
    this.drawArrow(ctx, centerX, h/2 + 120, centerX, h - 180);
  }

  static drawPostprandialGlucose(ctx, w, h, hormone) {
    const centerX = w / 2;
    
    // After meal
    ctx.fillStyle = '#E8F5E9';
    ctx.strokeStyle = '#4CAF50';
    ctx.lineWidth = 3;
    ctx.fillRect(50, 40, 150, 70);
    ctx.strokeRect(50, 40, 150, 70);
    
    ctx.fillStyle = '#1B5E20';
    ctx.font = 'bold 14px Arial';
    ctx.textAlign = 'center';
    ctx.fillText('After Meal', 125, 65);
    ctx.font = '12px Arial';
    ctx.fillText('(Postprandial)', 125, 85);
    
    // Food icon
    ctx.fillStyle = '#FF9800';
    ctx.beginPath();
    ctx.arc(125, 140, 25, 0, Math.PI);
    ctx.fill();
    ctx.fillRect(100, 140, 50, 30);
    
    // Timeline
    const timePoints = [
      { time: '0 min', glucose: 90, x: 100 },
      { time: '30 min', glucose: 140, x: 250 },
      { time: '60 min', glucose: 120, x: 400 },
      { time: '90 min', glucose: 95, x: 550 },
      { time: '120 min', glucose: 85, x: 700 }
    ];
    
    // Graph background
    ctx.fillStyle = '#F5F5F5';
    ctx.fillRect(80, 200, 640, 250);
    ctx.strokeStyle = '#CCCCCC';
    ctx.lineWidth = 1;
    
    // Grid lines
    for (let i = 0; i <= 5; i++) {
      const y = 200 + i * 50;
      ctx.beginPath();
      ctx.moveTo(80, y);
      ctx.lineTo(720, y);
      ctx.stroke();
    }
    
    // Glucose curve
    ctx.strokeStyle = '#2196F3';
    ctx.lineWidth = 3;
    ctx.beginPath();
    timePoints.forEach((point, i) => {
      const x = point.x;
      const y = 450 - ((point.glucose - 60) * 3);
      
      if (i === 0) {
        ctx.moveTo(x, y);
      } else {
        ctx.lineTo(x, y);
      }
    });
    ctx.stroke();
    
    // Plot points
    ctx.fillStyle = '#2196F3';
    timePoints.forEach(point => {
      const x = point.x;
      const y = 450 - ((point.glucose - 60) * 3);
      ctx.beginPath();
      ctx.arc(x, y, 5, 0, Math.PI * 2);
      ctx.fill();
      
      // Labels
      ctx.fillStyle = '#000000';
      ctx.font = '11px Arial';
      ctx.fillText(point.time, x, 470);
      ctx.fillText(point.glucose + ' mg/dL', x - 20, y - 10);
    });
    
    // Normal range band
    ctx.fillStyle = 'rgba(76, 175, 80, 0.2)';
    ctx.fillRect(80, 450 - ((100 - 60) * 3), 640, ((100 - 70) * 3));
    
    // Insulin response curve
    ctx.strokeStyle = '#4CAF50';
    ctx.lineWidth = 2;
    ctx.setLineDash([5, 5]);
    ctx.beginPath();
    ctx.moveTo(100, 430);
    ctx.quadraticCurveTo(250, 350, 400, 420);
    ctx.lineTo(700, 430);
    ctx.stroke();
    ctx.setLineDash([]);
    
    ctx.fillStyle = '#4CAF50';
    ctx.font = 'bold 12px Arial';
    ctx.fillText('Insulin Response', 300, 340);
    
    ctx.fillStyle = '#2196F3';
    ctx.fillText('Glucose Level', 300, 220);
  }

  static drawFastingGlucose(ctx, w, h, hormone) {
    const centerX = w / 2;
    
    // Fasting state
    ctx.fillStyle = '#FFF9C4';
    ctx.strokeStyle = '#F57F17';
    ctx.lineWidth = 3;
    ctx.fillRect(50, 40, 150, 70);
    ctx.strokeRect(50, 40, 150, 70);
    
    ctx.fillStyle = '#F57F17';
    ctx.font = 'bold 14px Arial';
    ctx.textAlign = 'center';
    ctx.fillText('Fasting State', 125, 65);
    ctx.font = '12px Arial';
    ctx.fillText('(8-12 hours)', 125, 85);
    
    // Low insulin, high glucagon
    ctx.fillStyle = '#E3F2FD';
    ctx.strokeStyle = '#1976D2';
    ctx.lineWidth = 2;
    ctx.fillRect(50, 150, 150, 80);
    ctx.strokeRect(50, 150, 150, 80);
    
    ctx.fillStyle = '#1976D2';
    ctx.font = 'bold 14px Arial';
    ctx.fillText('Insulin', 125, 175);
    ctx.font = '20px Arial';
    ctx.fillText('↓ LOW', 125, 205);
    
    ctx.fillStyle = '#FFEBEE';
    ctx.strokeStyle = '#C62828';
    ctx.lineWidth = 2;
    ctx.fillRect(centerX + 150, 150, 150, 80);
    ctx.strokeRect(centerX + 150, 150, 150, 80);
    
    ctx.fillStyle = '#C62828';
    ctx.font = 'bold 14px Arial';
    ctx.fillText('Glucagon', centerX + 225, 175);
    ctx.font = '20px Arial';
    ctx.fillText('↑ HIGH', centerX + 225, 205);
    
    // Metabolic processes
    const processes = [
      { x: 150, y: 320, label: 'Glycogenolysis\n(Liver)', color: '#FF5722' },
      { x: centerX, y: 320, label: 'Gluconeogenesis\n(Liver/Kidney)', color: '#FF9800' },
      { x: w - 150, y: 320, label: 'Lipolysis\n(Fat tissue)', color: '#FFC107' }
    ];
    
    processes.forEach(proc => {
      ctx.fillStyle = proc.color + '33';
      ctx.strokeStyle = proc.color;
      ctx.lineWidth = 3;
      ctx.fillRect(proc.x - 80, proc.y - 40, 160, 80);
      ctx.strokeRect(proc.x - 80, proc.y - 40, 160, 80);
      
      ctx.fillStyle = proc.color;
      ctx.font = 'bold 13px Arial';
      const lines = proc.label.split('\n');
      lines.forEach((line, i) => {
        ctx.fillText(line, proc.x, proc.y - 10 + i * 20);
      });
      
      // Arrows from hormones
      this.drawArrow(ctx, centerX + 225, 230, proc.x, proc.y - 40);
    });
    
    // Result: Maintained blood glucose
    ctx.fillStyle = '#C8E6C9';
    ctx.strokeStyle = '#388E3C';
    ctx.lineWidth = 4;
    ctx.fillRect(centerX - 120, h - 100, 240, 70);
    ctx.strokeRect(centerX - 120, h - 100, 240, 70);
    
    ctx.fillStyle = '#1B5E20';
    ctx.font = 'bold 16px Arial';
    ctx.fillText('Blood Glucose Maintained', centerX, h - 70);
    ctx.font = 'bold 18px Arial';
    ctx.fillText('70-90 mg/dL', centerX, h - 45);
  }

  // ===== NEPHRON DIAGRAMS =====
  static drawNephron(ctx, x, y, width, height, component, process) {
    ctx.save();
    ctx.translate(x, y);
    
    const components = {
      complete: () => this.drawCompleteNephron(ctx, width, height, process),
      glomerulus: () => this.drawGlomerulus(ctx, width, height, process),
      'bowmans-capsule': () => this.drawBowmansCapsule(ctx, width, height, process),
      'proximal-tubule': () => this.drawProximalTubule(ctx, width, height, process),
      'loop-henle': () => this.drawLoopOfHenle(ctx, width, height, process),
      'distal-tubule': () => this.drawDistalTubule(ctx, width, height, process),
      'collecting-duct': () => this.drawCollectingDuct(ctx, width, height, process)
    };
    
    if (components[component]) {
      components[component]();
    }
    
    ctx.restore();
  }

  static drawCompleteNephron(ctx, w, h, process) {
    const startX = w * 0.2;
    const startY = h * 0.15;
    
    // Renal corpuscle (glomerulus + Bowman's capsule)
    ctx.fillStyle = '#E3F2FD';
    ctx.strokeStyle = '#1976D2';
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.arc(startX, startY, 40, 0, Math.PI * 2);
    ctx.fill();
    ctx.stroke();
    
    // Glomerulus (capillary ball)
    ctx.fillStyle = '#EF5350';
    ctx.beginPath();
    ctx.arc(startX, startY, 25, 0, Math.PI * 2);
    ctx.fill();
    
    // Afferent arteriole
    ctx.strokeStyle = '#C62828';
    ctx.lineWidth = 8;
    ctx.beginPath();
    ctx.moveTo(startX - 80, startY - 10);
    ctx.lineTo(startX - 40, startY - 10);
    ctx.stroke();
    
    // Efferent arteriole
    ctx.beginPath();
    ctx.moveTo(startX + 40, startY + 10);
    ctx.lineTo(startX + 80, startY + 10);
    ctx.stroke();
    
    // Proximal convoluted tubule (PCT)
    ctx.strokeStyle = '#FF9800';
    ctx.lineWidth = 15;
    ctx.beginPath();
    ctx.moveTo(startX, startY + 40);
    ctx.bezierCurveTo(startX + 30, startY + 80, startX - 30, startY + 120, startX, startY + 160);
    ctx.stroke();
    
    // Loop of Henle (descending and ascending)
    const loopX = w * 0.5;
    
    // Descending limb
    ctx.strokeStyle = '#AB47BC';
    ctx.lineWidth = 12;
    ctx.beginPath();
    ctx.moveTo(startX, startY + 160);
    ctx.lineTo(loopX, startY + 160);
    ctx.lineTo(loopX, h * 0.8);
    ctx.stroke();
    
    // Ascending limb (thicker)
    ctx.strokeStyle = '#7B1FA2';
    ctx.lineWidth = 15;
    ctx.beginPath();
    ctx.moveTo(loopX, h * 0.8);
    ctx.lineTo(loopX + 30, h * 0.8);
    ctx.lineTo(loopX + 30, startY + 160);
    ctx.stroke();
    
    // Distal convoluted tubule (DCT)
    ctx.strokeStyle = '#26A69A';
    ctx.lineWidth = 15;
    ctx.beginPath();
    ctx.moveTo(loopX + 30, startY + 160);
    ctx.bezierCurveTo(loopX + 60, startY + 120, loopX + 20, startY + 80, loopX + 50, startY + 40);
    ctx.stroke();
    
    // Collecting duct
    ctx.strokeStyle = '#5C6BC0';
    ctx.lineWidth = 18;
    ctx.beginPath();
    ctx.moveTo(loopX + 50, startY + 40);
    ctx.lineTo(w * 0.8, startY + 40);
    ctx.lineTo(w * 0.8, h * 0.9);
    ctx.stroke();
    
    // Labels
    ctx.fillStyle = '#000000';
    ctx.font = 'bold 14px Arial';
    ctx.textAlign = 'center';
    
    ctx.fillText('Glomerulus', startX, startY - 60);
    ctx.fillText('PCT', startX - 40, startY + 100);
    ctx.fillText('Loop of Henle', loopX + 15, h * 0.85);
    ctx.fillText('DCT', loopX + 60, startY + 100);
    ctx.fillText('Collecting\nDuct', w * 0.85, startY + 80);
    
    // Process indicators based on process type
    if (process === 'filtration') {
      ctx.fillStyle = 'rgba(25, 118, 210, 0.3)';
      ctx.beginPath();
      ctx.arc(startX, startY, 50, 0, Math.PI * 2);
      ctx.fill();
      
      ctx.fillStyle = '#1976D2';
      ctx.font = 'bold 12px Arial';
      ctx.fillText('FILTRATION', startX, startY + 80);
    } else if (process === 'reabsorption') {
      // Highlight PCT and Loop
      ctx.strokeStyle = 'rgba(255, 152, 0, 0.5)';
      ctx.lineWidth = 25;
      ctx.setLineDash([10, 10]);
      ctx.beginPath();
      ctx.moveTo(startX, startY + 40);
      ctx.bezierCurveTo(startX + 30, startY + 80, startX - 30, startY + 120, startX, startY + 160);
      ctx.stroke();
      ctx.setLineDash([]);
    }
    
    // Peritubular capillaries (dotted)
    ctx.strokeStyle = '#E57373';
    ctx.lineWidth = 2;
    ctx.setLineDash([3, 3]);
    ctx.beginPath();
    ctx.moveTo(startX + 80, startY + 10);
    ctx.bezierCurveTo(startX + 100, startY + 60, startX + 70, startY + 140, loopX - 20, startY + 180);
    ctx.stroke();
    ctx.setLineDash([]);
  }

  static drawGlomerulus(ctx, w, h, process) {
    const centerX = w / 2;
    const centerY = h / 2;
    
    // Bowman's capsule (outer)
    ctx.fillStyle = '#E3F2FD';
    ctx.strokeStyle = '#1976D2';
    ctx.lineWidth = 4;
    ctx.beginPath();
    ctx.arc(centerX, centerY, 120, 0, Math.PI * 2);
    ctx.fill();
    ctx.stroke();
    
    // Inner capsule space
    ctx.fillStyle = '#BBDEFB';
    ctx.beginPath();
    ctx.arc(centerX, centerY, 100, 0, Math.PI * 2);
    ctx.fill();
    
    // Glomerular capillaries (tangled ball)
    ctx.fillStyle = '#EF5350';
    ctx.strokeStyle = '#C62828';
    ctx.lineWidth = 2;
    
    // Draw interwoven capillary loops
    for (let i = 0; i < 8; i++) {
      const angle = (Math.PI * 2 * i) / 8;
      const x = centerX + Math.cos(angle) * 30;
      const y = centerY + Math.sin(angle) * 30;
      
      ctx.beginPath();
      ctx.arc(x, y, 20, 0, Math.PI * 2);
      ctx.fill();
      ctx.stroke();
    }
    
    // Central capillaries
    for (let i = 0; i < 5; i++) {
      const angle = (Math.PI * 2 * i) / 5 + Math.PI / 5;
      const x = centerX + Math.cos(angle) * 15;
      const y = centerY + Math.sin(angle) * 15;
      
      ctx.beginPath();
      ctx.arc(x, y, 12, 0, Math.PI * 2);
      ctx.fill();
      ctx.stroke();
    }
    
    // Afferent arteriole (incoming)
    ctx.strokeStyle = '#C62828';
    ctx.lineWidth = 20;
    ctx.beginPath();
    ctx.moveTo(centerX - 200, centerY - 30);
    ctx.lineTo(centerX - 120, centerY - 30);
    ctx.stroke();
    
    // Arrow
    ctx.fillStyle = '#C62828';
    ctx.beginPath();
    ctx.moveTo(centerX - 120, centerY - 30);
    ctx.lineTo(centerX - 140, centerY - 40);
    ctx.lineTo(centerX - 140, centerY - 20);
    ctx.fill();
    
    ctx.fillStyle = '#FFFFFF';
    ctx.font = 'bold 12px Arial';
    ctx.textAlign = 'center';
    ctx.fillText('Afferent', centerX - 160, centerY - 45);
    ctx.fillText('Arteriole', centerX - 160, centerY - 30);
    
    // Efferent arteriole (outgoing - narrower)
    ctx.strokeStyle = '#C62828';
    ctx.lineWidth = 15;
    ctx.beginPath();
    ctx.moveTo(centerX + 120, centerY + 30);
    ctx.lineTo(centerX + 200, centerY + 30);
    ctx.stroke();
    
    // Arrow
    ctx.fillStyle = '#C62828';
    ctx.beginPath();
    ctx.moveTo(centerX + 200, centerY + 30);
    ctx.lineTo(centerX + 180, centerY + 20);
    ctx.lineTo(centerX + 180, centerY + 40);
    ctx.fill();
    
    ctx.fillStyle = '#000000';
    ctx.font = 'bold 12px Arial';
    ctx.fillText('Efferent', centerX + 160, centerY + 20);
    ctx.fillText('Arteriole', centerX + 160, centerY + 35);
    
    // Filtrate arrow pointing down
    ctx.strokeStyle = '#1976D2';
    ctx.lineWidth = 15;
    ctx.beginPath();
    ctx.moveTo(centerX, centerY + 120);
    ctx.lineTo(centerX, centerY + 180);
    ctx.stroke();
    
    ctx.fillStyle = '#1976D2';
    ctx.beginPath();
    ctx.moveTo(centerX, centerY + 180);
    ctx.lineTo(centerX - 10, centerY + 160);
    ctx.lineTo(centerX + 10, centerY + 160);
    ctx.fill();
    
    ctx.fillStyle = '#000000';
    ctx.font = 'bold 14px Arial';
    ctx.fillText('Filtrate to PCT', centerX, centerY + 210);
    
    // Filtration membrane detail (inset)
    const insetX = w - 180;
    const insetY = 100;
    
    ctx.fillStyle = '#FFF8E1';
    ctx.strokeStyle = '#F57C00';
    ctx.lineWidth = 2;
    ctx.fillRect(insetX - 80, insetY - 60, 160, 140);
    ctx.strokeRect(insetX - 80, insetY - 60, 160, 140);
    
    ctx.fillStyle = '#E65100';
    ctx.font = 'bold 11px Arial';
    ctx.fillText('Filtration Barrier', insetX, insetY - 45);
    
    ctx.font = '10px Arial';
    ctx.textAlign = 'left';
    ctx.fillText('1. Fenestrated', insetX - 70, insetY - 20);
    ctx.fillText('   endothelium', insetX - 70, insetY - 8);
    ctx.fillText('2. Basement', insetX - 70, insetY + 10);
    ctx.fillText('   membrane', insetX - 70, insetY + 22);
    ctx.fillText('3. Podocyte', insetX - 70, insetY + 40);
    ctx.fillText('   filtration slits', insetX - 70, insetY + 52);
    
    // Labels
    ctx.fillStyle = '#000000';
    ctx.font = 'bold 16px Arial';
    ctx.textAlign = 'center';
    ctx.fillText('GLOMERULUS', centerX, 40);
    
    ctx.fillStyle = '#1976D2';
    ctx.font = 'bold 14px Arial';
    ctx.fillText("Bowman's Capsule", centerX, centerY - 140);
  }

  static drawBowmansCapsule(ctx, w, h, process) {
    const centerX = w / 2;
    const centerY = h / 2;
    
    // Outer capsule wall (parietal layer)
    ctx.strokeStyle = '#1976D2';
    ctx.lineWidth = 6;
    ctx.setLineDash([]);
    ctx.beginPath();
    ctx.arc(centerX, centerY, 150, 0, Math.PI * 2);
    ctx.stroke();
    
    // Inner capsule wall (visceral layer - podocytes)
    ctx.strokeStyle = '#0D47A1';
    ctx.lineWidth = 4;
    ctx.setLineDash([8, 4]);
    ctx.beginPath();
    ctx.arc(centerX, centerY, 110, 0, Math.PI * 2);
    ctx.stroke();
    ctx.setLineDash([]);
    
    // Capsular space (highlighted)
    ctx.fillStyle = 'rgba(187, 222, 251, 0.4)';
    ctx.beginPath();
    ctx.arc(centerX, centerY, 150, 0, Math.PI * 2);
    ctx.arc(centerX, centerY, 110, 0, Math.PI * 2, true);
    ctx.fill();
    
    // Glomerulus inside
    ctx.fillStyle = '#FFCDD2';
    ctx.beginPath();
    ctx.arc(centerX, centerY, 80, 0, Math.PI * 2);
    ctx.fill();
    
    // Capillary loops
    ctx.fillStyle = '#EF5350';
    ctx.strokeStyle = '#C62828';
    ctx.lineWidth = 2;
    for (let i = 0; i < 6; i++) {
      const angle = (Math.PI * 2 * i) / 6;
      const x = centerX + Math.cos(angle) * 35;
      const y = centerY + Math.sin(angle) * 35;
      
      ctx.beginPath();
      ctx.arc(x, y, 18, 0, Math.PI * 2);
      ctx.fill();
      ctx.stroke();
    }
    
    // Podocytes (special cells on visceral layer)
    ctx.fillStyle = '#4A148C';
    const podocytePositions = [0, Math.PI/3, 2*Math.PI/3, Math.PI, 4*Math.PI/3, 5*Math.PI/3];
    podocytePositions.forEach(angle => {
      const x = centerX + Math.cos(angle) * 110;
      const y = centerY + Math.sin(angle) * 110;
      
      // Cell body
      ctx.beginPath();
      ctx.arc(x, y, 8, 0, Math.PI * 2);
      ctx.fill();
      
      // Foot processes (pedicels)
      ctx.strokeStyle = '#4A148C';
      ctx.lineWidth = 2;
      for (let i = -2; i <= 2; i++) {
        const footAngle = angle + i * 0.15;
        const fx = x + Math.cos(footAngle) * 15;
        const fy = y + Math.sin(footAngle) * 15;
        ctx.beginPath();
        ctx.moveTo(x, y);
        ctx.lineTo(fx, fy);
        ctx.stroke();
      }
    });
    
    // Afferent and efferent arterioles
    ctx.strokeStyle = '#C62828';
    ctx.lineWidth = 18;
    ctx.beginPath();
    ctx.moveTo(centerX - 200, centerY - 20);
    ctx.lineTo(centerX - 150, centerY - 20);
    ctx.stroke();
    
    ctx.lineWidth = 14;
    ctx.beginPath();
    ctx.moveTo(centerX + 150, centerY + 20);
    ctx.lineTo(centerX + 200, centerY + 20);
    ctx.stroke();
    
    // Proximal tubule exit
    ctx.strokeStyle = '#FF9800';
    ctx.lineWidth = 16;
    ctx.beginPath();
    ctx.moveTo(centerX, centerY + 150);
    ctx.lineTo(centerX, centerY + 200);
    ctx.stroke();
    
    // Labels
    ctx.fillStyle = '#000000';
    ctx.font = 'bold 14px Arial';
    ctx.textAlign = 'center';
    
    ctx.fillText("BOWMAN'S CAPSULE", centerX, 40);
    
    ctx.font = '12px Arial';
    ctx.fillText('Parietal Layer', centerX + 100, centerY - 160);
    ctx.fillText('Visceral Layer', centerX + 100, centerY - 120);
    ctx.fillText('(Podocytes)', centerX + 100, centerY - 105);
    
    ctx.fillText('Capsular Space', centerX - 100, centerY);
    ctx.fillText('(filtrate)', centerX - 100, centerY + 15);
    
    ctx.fillText('Glomerular', centerX, centerY - 10);
    ctx.fillText('Capillaries', centerX, centerY + 5);
    
    ctx.fillText('To Proximal', centerX + 60, centerY + 175);
    ctx.fillText('Tubule', centerX + 60, centerY + 190);
  }

  static drawProximalTubule(ctx, w, h, process) {
    const centerX = w / 2;
    const startY = 100;
    
    // Tubule lumen
    ctx.fillStyle = '#FFF3E0';
    ctx.strokeStyle = '#FF9800';
    ctx.lineWidth = 6;
    
    // Draw convoluted path
    ctx.beginPath();
    ctx.moveTo(centerX - 100, startY);
    ctx.bezierCurveTo(centerX - 50, startY + 50, centerX + 50, startY + 50, centerX + 100, startY);
    ctx.bezierCurveTo(centerX + 150, startY - 50, centerX + 100, startY + 150, centerX, startY + 200);
    ctx.bezierCurveTo(centerX - 100, startY + 250, centerX - 150, startY + 150, centerX - 100, startY + 300);
    ctx.lineWidth = 40;
    ctx.stroke();
    
    // Epithelial cells with microvilli (brush border)
    const cellPositions = [
      { x: centerX - 60, y: startY + 40 },
      { x: centerX, y: startY + 30 },
      { x: centerX + 60, y: startY + 40 },
      { x: centerX + 70, y: startY + 120 },
      { x: centerX + 20, y: startY + 180 },
      { x: centerX - 50, y: startY + 220 }
    ];
    
    cellPositions.forEach(pos => {
      // Cell body
      ctx.fillStyle = '#FFE0B2';
      ctx.strokeStyle = '#F57C00';
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.arc(pos.x, pos.y, 25, 0, Math.PI * 2);
      ctx.fill();
      ctx.stroke();
      
      // Microvilli (brush border)
      ctx.strokeStyle = '#E65100';
      ctx.lineWidth = 2;
      for (let i = -3; i <= 3; i++) {
        ctx.beginPath();
        ctx.moveTo(pos.x + i * 5, pos.y - 25);
        ctx.lineTo(pos.x + i * 5, pos.y - 35);
        ctx.stroke();
      }
      
      // Nucleus
      ctx.fillStyle = '#6D4C41';
      ctx.beginPath();
      ctx.arc(pos.x, pos.y + 5, 6, 0, Math.PI * 2);
      ctx.fill();
    });
    
    // Peritubular capillaries
    ctx.strokeStyle = '#E57373';
    ctx.lineWidth = 4;
    ctx.setLineDash([5, 5]);
    ctx.beginPath();
    ctx.moveTo(centerX - 150, startY + 50);
    ctx.bezierCurveTo(centerX - 100, startY + 100, centerX, startY + 150, centerX + 50, startY + 200);
    ctx.stroke();
    
    ctx.beginPath();
    ctx.moveTo(centerX + 150, startY + 100);
    ctx.bezierCurveTo(centerX + 100, startY + 150, centerX, startY + 200, centerX - 50, startY + 250);
    ctx.stroke();
    ctx.setLineDash([]);
    
    // Reabsorption arrows
    ctx.fillStyle = '#4CAF50';
    ctx.strokeStyle = '#4CAF50';
    ctx.lineWidth = 3;
    
    const arrowPositions = [
      { from: { x: centerX - 40, y: startY + 60 }, to: { x: centerX - 120, y: startY + 70 } },
      { from: { x: centerX + 40, y: startY + 60 }, to: { x: centerX + 120, y: startY + 70 } },
      { from: { x: centerX + 50, y: startY + 150 }, to: { x: centerX + 120, y: startY + 150 } },
      { from: { x: centerX - 20, y: startY + 200 }, to: { x: centerX + 40, y: startY + 220 } }
    ];
    
    arrowPositions.forEach(arrow => {
      this.drawArrow(ctx, arrow.from.x, arrow.from.y, arrow.to.x, arrow.to.y);
    });
    
    // Reabsorption info box
    ctx.fillStyle = '#E8F5E9';
    ctx.strokeStyle = '#4CAF50';
    ctx.lineWidth = 3;
    ctx.fillRect(w - 280, 150, 250, 200);
    ctx.strokeRect(w - 280, 150, 250, 200);
    
    ctx.fillStyle = '#1B5E20';
    ctx.font = 'bold 14px Arial';
    ctx.textAlign = 'left';
    ctx.fillText('REABSORPTION:', w - 270, 175);
    
    ctx.font = '12px Arial';
    const reabsorptionItems = [
      '• 65% of filtered Na⁺',
      '• 65% of filtered H₂O',
      '• 100% of glucose',
      '• 100% of amino acids',
      '• Most bicarbonate (HCO₃⁻)',
      '• Phosphate, sulfate',
      '• Small proteins'
    ];
    
    reabsorptionItems.forEach((item, i) => {
      ctx.fillText(item, w - 265, 200 + i * 22);
    });
    
    // Title
    ctx.fillStyle = '#000000';
    ctx.font = 'bold 18px Arial';
    ctx.textAlign = 'center';
    ctx.fillText('PROXIMAL CONVOLUTED TUBULE', centerX, 50);
    
    ctx.font = '14px Arial';
    ctx.fillText('(Most reabsorption occurs here)', centerX, 75);
    
    // Microvilli detail
    ctx.fillStyle = '#FFFFFF';
    ctx.strokeStyle = '#F57C00';
    ctx.lineWidth = 2;
    ctx.fillRect(50, h - 120, 200, 100);
    ctx.strokeRect(50, h - 120, 200, 100);
    
    ctx.fillStyle = '#E65100';
    ctx.font = 'bold 11px Arial';
    ctx.textAlign = 'center';
    ctx.fillText('Brush Border', 150, h - 100);
    ctx.font = '10px Arial';
    ctx.fillText('(increases surface area', 150, h - 85);
    ctx.fillText('for reabsorption)', 150, h - 72);
    
    // Draw microvilli detail
    for (let i = 0; i < 10; i++) {
      ctx.strokeStyle = '#F57C00';
      ctx.lineWidth = 3;
      ctx.beginPath();
      ctx.moveTo(60 + i * 18, h - 50);
      ctx.lineTo(60 + i * 18, h - 35);
      ctx.stroke();
    }
  }

  static drawLoopOfHenle(ctx, w, h, process) {
    const leftX = w * 0.3;
    const rightX = w * 0.5;
    const topY = 100;
    const bottomY = h - 100;
    
    // Descending limb (thin)
    ctx.strokeStyle = '#AB47BC';
    ctx.lineWidth = 20;
    ctx.beginPath();
    ctx.moveTo(leftX, topY);
    ctx.lineTo(leftX, bottomY);
    ctx.stroke();
    
    // Bottom curve
    ctx.beginPath();
    ctx.arc((leftX + rightX) / 2, bottomY, (rightX - leftX) / 2, Math.PI, 0);
    ctx.stroke();
    
    // Ascending limb (thick)
    ctx.strokeStyle = '#7B1FA2';
    ctx.lineWidth = 25;
    ctx.beginPath();
    ctx.moveTo(rightX, bottomY);
    ctx.lineTo(rightX, topY);
    ctx.stroke();
    
    // Thin segment markers
    ctx.fillStyle = '#000000';
    ctx.font = 'bold 14px Arial';
    ctx.textAlign = 'center';
    
    // Descending limb label
    ctx.save();
    ctx.translate(leftX - 40, (topY + bottomY) / 2);
    ctx.rotate(-Math.PI / 2);
    ctx.fillStyle = '#FFFFFF';
    ctx.fillText('DESCENDING', 0, 0);
    ctx.fillText('(thin)', 0, 20);
    ctx.restore();
    
    // Ascending limb label
    ctx.save();
    ctx.translate(rightX + 40, (topY + bottomY) / 2);
    ctx.rotate(Math.PI / 2);
    ctx.fillStyle = '#FFFFFF';
    ctx.fillText('ASCENDING', 0, 0);
    ctx.fillText('(thick)', 0, 20);
    ctx.restore();
    
    // Water permeability indicators
    const waterSymbol = '💧';
    
    // Descending: water OUT (permeable)
    ctx.fillStyle = '#2196F3';
    ctx.font = '20px Arial';
    for (let i = 0; i < 5; i++) {
      const y = topY + 100 + i * 80;
      ctx.fillText('H₂O →', leftX + 35, y);
      
      // Arrow
      ctx.strokeStyle = '#2196F3';
      ctx.lineWidth = 3;
      this.drawArrow(ctx, leftX + 10, y - 5, leftX + 70, y - 5);
    }
    
    // Ascending: impermeable to water
    ctx.fillStyle = '#F44336';
    ctx.font = 'bold 16px Arial';
    for (let i = 0; i < 3; i++) {
      const y = topY + 150 + i * 100;
      ctx.fillText('H₂O ✗', rightX - 50, y);
    }
    
    // Solute transport (NaCl) in ascending
    ctx.fillStyle = '#FFC107';
    ctx.font = '16px Arial';
    for (let i = 0; i < 4; i++) {
      const y = bottomY - 100 - i * 80;
      ctx.fillText('← Na⁺Cl⁻', rightX - 70, y);
      
      // Arrow
      ctx.strokeStyle = '#FFC107';
      ctx.lineWidth = 3;
      this.drawArrow(ctx, rightX - 10, y - 5, rightX - 60, y - 5);
    }
    
    // Medullary interstitium (high osmolarity)
    ctx.fillStyle = 'rgba(255, 235, 59, 0.2)';
    ctx.fillRect(w * 0.6, topY, w * 0.35, bottomY - topY);
    
    ctx.fillStyle = '#F57F17';
    ctx.font = 'bold 14px Arial';
    ctx.textAlign = 'center';
    ctx.fillText('MEDULLARY', w * 0.775, topY + 40);
    ctx.fillText('INTERSTITIUM', w * 0.775, topY + 60);
    
    ctx.font = '12px Arial';
    ctx.fillText('High osmolarity', w * 0.775, topY + 90);
    ctx.fillText('(concentrated)', w * 0.775, topY + 110);
    
    // Osmolarity gradient
    const gradientY = [topY + 150, topY + 250, topY + 350, bottomY - 50];
    const osmolarities = ['300', '600', '900', '1200'];
    
    gradientY.forEach((y, i) => {
      ctx.fillStyle = '#F57F17';
      ctx.font = 'bold 13px Arial';
      ctx.fillText(osmolarities[i] + ' mOsm', w * 0.775, y);
      
      // Gradient line
      ctx.strokeStyle = '#F57F17';
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(w * 0.62, y);
      ctx.lineTo(w * 0.93, y);
      ctx.stroke();
    });
    
    // Countercurrent multiplier explanation
    ctx.fillStyle = '#FFF3E0';
    ctx.strokeStyle = '#FF6F00';
    ctx.lineWidth = 3;
    ctx.fillRect(50, topY, 220, 180);
    ctx.strokeRect(50, topY, 220, 180);
    
    ctx.fillStyle = '#E65100';
    ctx.font = 'bold 13px Arial';
    ctx.textAlign = 'left';
    ctx.fillText('COUNTERCURRENT', 60, topY + 25);
    ctx.fillText('MULTIPLIER', 60, topY + 45);
    
    ctx.font = '11px Arial';
    const explanation = [
      '• Descending: permeable',
      '  to H₂O (passive loss)',
      '• Ascending: impermeable',
      '  to H₂O',
      '• Ascending: actively',
      '  pumps out NaCl',
      '• Creates osmotic',
      '  gradient in medulla'
    ];
    
    explanation.forEach((line, i) => {
      ctx.fillText(line, 60, topY + 70 + i * 16);
    });
    
    // Title
    ctx.fillStyle = '#000000';
    ctx.font = 'bold 20px Arial';
    ctx.textAlign = 'center';
    ctx.fillText('LOOP OF HENLE', w / 2, 50);
    
    ctx.font = '14px Arial';
    ctx.fillText('(Concentrates urine)', w / 2, 75);
  }

  static drawDistalTubule(ctx, w, h, process) {
    const centerX = w / 2;
    const startY = 150;
    
    // DCT tubule
    ctx.fillStyle = '#E0F2F1';
    ctx.strokeStyle = '#26A69A';
    ctx.lineWidth = 6;
    
    // Convoluted path
    ctx.beginPath();
    ctx.moveTo(centerX + 100, startY);
    ctx.bezierCurveTo(centerX + 50, startY + 50, centerX - 50, startY + 50, centerX - 100, startY);
    ctx.bezierCurveTo(centerX - 150, startY - 50, centerX - 100, startY + 150, centerX, startY + 200);
    ctx.lineWidth = 35;
    ctx.stroke();
    
    // Epithelial cells (simpler than PCT, fewer microvilli)
    const cellPositions = [
      { x: centerX + 60, y: startY + 40 },
      { x: centerX, y: startY + 30 },
      { x: centerX - 60, y: startY + 40 },
      { x: centerX - 70, y: startY + 120 }
    ];
    
    cellPositions.forEach(pos => {
      // Cell body
      ctx.fillStyle = '#B2DFDB';
      ctx.strokeStyle = '#00897B';
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.arc(pos.x, pos.y, 22, 0, Math.PI * 2);
      ctx.fill();
      ctx.stroke();
      
      // Few short microvilli
      ctx.strokeStyle = '#004D40';
      ctx.lineWidth = 2;
      for (let i = -1; i <= 1; i++) {
        ctx.beginPath();
        ctx.moveTo(pos.x + i * 6, pos.y - 22);
        ctx.lineTo(pos.x + i * 6, pos.y - 28);
        ctx.stroke();
      }
      
      // Nucleus
      ctx.fillStyle = '#004D40';
      ctx.beginPath();
      ctx.arc(pos.x, pos.y + 4, 5, 0, Math.PI * 2);
      ctx.fill();
    });
    
    // Macula densa cells (special region)
    ctx.fillStyle = '#FFECB3';
    ctx.strokeStyle = '#FF6F00';
    ctx.lineWidth = 3;
    ctx.fillRect(centerX - 130, startY + 80, 80, 60);
    ctx.strokeRect(centerX - 130, startY + 80, 80, 60);
    
    ctx.fillStyle = '#E65100';
    ctx.font = 'bold 11px Arial';
    ctx.textAlign = 'center';
    ctx.fillText('Macula', centerX - 90, startY + 105);
    ctx.fillText('Densa', centerX - 90, startY + 120);
    
    // Juxtaglomerular apparatus connection
    ctx.strokeStyle = '#FF6F00';
    ctx.lineWidth = 3;
    ctx.setLineDash([5, 5]);
    ctx.beginPath();
    ctx.moveTo(centerX - 130, startY + 110);
    ctx.lineTo(50, startY + 110);
    ctx.stroke();
    ctx.setLineDash([]);
    
    // Hormone regulation
    ctx.fillStyle = '#FFF3E0';
    ctx.strokeStyle = '#F57C00';
    ctx.lineWidth = 3;
    ctx.fillRect(w - 300, 50, 280, 250);
    ctx.strokeRect(w - 300, 50, 280, 250);
    
    ctx.fillStyle = '#E65100';
    ctx.font = 'bold 14px Arial';
    ctx.textAlign = 'left';
    ctx.fillText('HORMONE REGULATION:', w - 290, 75);
    
    ctx.font = '12px Arial';
    
    // Aldosterone
    ctx.fillStyle = '#FF5722';
    ctx.fillText('ALDOSTERONE:', w - 290, 105);
    ctx.font = '11px Arial';
    ctx.fillStyle = '#000000';
    ctx.fillText('• Increases Na⁺ reabsorption', w - 285, 125);
    ctx.fillText('• Increases K⁺ secretion', w - 285, 142);
    ctx.fillText('• Increases H⁺ secretion', w - 285, 159);
    
    // ADH (Vasopressin)
    ctx.font = '12px Arial';
    ctx.fillStyle = '#2196F3';
    ctx.fillText('ADH (Vasopressin):', w - 290, 190);
    ctx.font = '11px Arial';
    ctx.fillStyle = '#000000';
    ctx.fillText('• Increases H₂O permeability', w - 285, 210);
    ctx.fillText('• Inserts aquaporin-2', w - 285, 227);
    ctx.fillText('• Concentrates urine', w - 285, 244);
    
    // Parathyroid hormone
    ctx.font = '12px Arial';
    ctx.fillStyle = '#9C27B0';
    ctx.fillText('PTH:', w - 290, 275);
    ctx.font = '11px Arial';
    ctx.fillStyle = '#000000';
    ctx.fillText('• Increases Ca²⁺ reabsorption', w - 285, 292);
    
    // Ion transport arrows
    ctx.font = '14px Arial';
    
    // Na+ reabsorption
    ctx.fillStyle = '#FF5722';
    ctx.fillText('Na⁺', centerX + 80, startY + 60);
    ctx.strokeStyle = '#FF5722';
    ctx.lineWidth = 3;
    this.drawArrow(ctx, centerX + 50, startY + 60, centerX + 120, startY + 60);
    
    // K+ secretion
    ctx.fillStyle = '#9C27B0';
    ctx.fillText('K⁺', centerX - 120, startY + 60);
    ctx.strokeStyle = '#9C27B0';
    this.drawArrow(ctx, centerX - 120, startY + 60, centerX - 50, startY + 60);
    
    // Ca2+ reabsorption
    ctx.fillStyle = '#FF9800';
    ctx.fillText('Ca²⁺', centerX + 40, startY + 140);
    ctx.strokeStyle = '#FF9800';
    this.drawArrow(ctx, centerX + 10, startY + 140, centerX + 70, startY + 140);
    
    // Title
    ctx.fillStyle = '#000000';
    ctx.font = 'bold 20px Arial';
    ctx.textAlign = 'center';
    ctx.fillText('DISTAL CONVOLUTED TUBULE', centerX, 50);
    
    ctx.font = '14px Arial';
    ctx.fillText('(Fine-tunes electrolyte balance)', centerX, 75);
  }

  static drawCollectingDuct(ctx, w, h, process) {
    const centerX = w / 2;
    const topY = 100;
    const bottomY = h - 80;
    
    // Collecting duct (wider tube)
    ctx.fillStyle = '#E8EAF6';
    ctx.strokeStyle = '#5C6BC0';
    ctx.lineWidth = 8;
    ctx.beginPath();
    ctx.moveTo(centerX - 40, topY);
    ctx.lineTo(centerX - 50, bottomY);
    ctx.lineTo(centerX + 50, bottomY);
    ctx.lineTo(centerX + 40, topY);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();
    
    // Principal cells
    const principalCells = [
      { x: centerX - 30, y: topY + 80 },
      { x: centerX + 25, y: topY + 80 },
      { x: centerX - 35, y: topY + 160 },
      { x: centerX + 30, y: topY + 160 },
      { x: centerX - 40, y: topY + 240 },
      { x: centerX + 35, y: topY + 240 }
    ];
    
    principalCells.forEach(pos => {
      ctx.fillStyle = '#C5CAE9';
      ctx.strokeStyle = '#3F51B5';
      ctx.lineWidth = 2;
      ctx.fillRect(pos.x - 20, pos.y - 25, 40, 50);
      ctx.strokeRect(pos.x - 20, pos.y - 25, 40, 50);
      
      // Nucleus
      ctx.fillStyle = '#1A237E';
      ctx.beginPath();
      ctx.arc(pos.x, pos.y + 5, 5, 0, Math.PI * 2);
      ctx.fill();
      
      // Label first one
      if (pos === principalCells[0]) {
        ctx.fillStyle = '#3F51B5';
        ctx.font = 'bold 10px Arial';
        ctx.textAlign = 'center';
        ctx.fillText('Principal', pos.x, pos.y - 35);
        ctx.fillText('Cell', pos.x, pos.y - 23);
      }
    });
    
    // Intercalated cells (fewer, darker)
    const intercalatedCells = [
      { x: centerX, y: topY + 120 },
      { x: centerX - 5, y: topY + 200 }
    ];
    
    intercalatedCells.forEach(pos => {
      ctx.fillStyle = '#FFCDD2';
      ctx.strokeStyle = '#D32F2F';
      ctx.lineWidth = 2;
      ctx.fillRect(pos.x - 18, pos.y - 22, 36, 44);
      ctx.strokeRect(pos.x - 18, pos.y - 22, 36, 44);
      
      // Nucleus
      ctx.fillStyle = '#B71C1C';
      ctx.beginPath();
      ctx.arc(pos.x, pos.y + 3, 5, 0, Math.PI * 2);
      ctx.fill();
      
      // Label first one
      if (pos === intercalatedCells[0]) {
        ctx.fillStyle = '#D32F2F';
        ctx.font = 'bold 9px Arial';
        ctx.textAlign = 'center';
        ctx.fillText('Intercalated', pos.x + 50, pos.y - 10);
        ctx.fillText('Cell', pos.x + 50, pos.y + 2);
      }
    });
    
    // ADH action (aquaporins)
    ctx.fillStyle = '#E1F5FE';
    ctx.strokeStyle = '#0288D1';
    ctx.lineWidth = 3;
    ctx.fillRect(w - 280, 100, 250, 180);
    ctx.strokeRect(w - 280, 100, 250, 180);
    
    ctx.fillStyle = '#01579B';
    ctx.font = 'bold 14px Arial';
    ctx.textAlign = 'left';
    ctx.fillText('ADH (ANTIDIURETIC', w - 270, 125);
    ctx.fillText('HORMONE) ACTION:', w - 270, 143);
    
    ctx.font = '12px Arial';
    ctx.fillStyle = '#000000';
    const adhText = [
      'Without ADH:',
      '• Aquaporin-2 in vesicles',
      '• Impermeable to H₂O',
      '• Dilute urine produced',
      '',
      'With ADH:',
      '• Aquaporin-2 → membrane',
      '• Permeable to H₂O',
      '• Concentrated urine'
    ];
    
    adhText.forEach((line, i) => {
      if (line.startsWith('Without') || line.startsWith('With')) {
        ctx.font = 'bold 12px Arial';
        ctx.fillStyle = '#0288D1';
      } else {
        ctx.font = '11px Arial';
        ctx.fillStyle = '#000000';
      }
      ctx.fillText(line, w - 265, 165 + i * 16);
    });
    
    // Water reabsorption arrows
    ctx.strokeStyle = '#2196F3';
    ctx.lineWidth = 4;
    ctx.fillStyle = '#2196F3';
    
    for (let i = 0; i < 4; i++) {
      const y = topY + 100 + i * 70;
      this.drawArrow(ctx, centerX + 50, y, centerX + 110, y);
      ctx.font = '16px Arial';
      ctx.textAlign = 'center';
      ctx.fillText('H₂O', centerX + 80, y - 10);
    }
    
    // Urine concentration gradient
    ctx.fillStyle = 'rgba(255, 235, 59, 0.3)';
    ctx.fillRect(w - 550, topY + 50, 150, bottomY - topY - 50);
    
    ctx.fillStyle = '#F57F17';
    ctx.font = 'bold 13px Arial';
    ctx.textAlign = 'center';
    const concentrations = [
      { y: topY + 90, text: '100 mOsm', label: '(dilute)' },
      { y: topY + 200, text: '400 mOsm', label: '' },
      { y: topY + 310, text: '800 mOsm', label: '' },
      { y: bottomY - 60, text: '1200 mOsm', label: '(concentrated)' }
    ];
    
    concentrations.forEach(conc => {
      ctx.fillText(conc.text, w - 475, conc.y);
      if (conc.label) {
        ctx.font = '11px Arial';
        ctx.fillText(conc.label, w - 475, conc.y + 15);
        ctx.font = 'bold 13px Arial';
      }
    });
    
    // Urine output
    ctx.fillStyle = '#FDD835';
    ctx.strokeStyle = '#F57F17';
    ctx.lineWidth = 10;
    ctx.beginPath();
    ctx.moveTo(centerX - 50, bottomY);
    ctx.lineTo(centerX - 50, bottomY + 40);
    ctx.lineTo(centerX - 40, h - 30);
    ctx.lineTo(centerX + 40, h - 30);
    ctx.lineTo(centerX + 50, bottomY + 40);
    ctx.lineTo(centerX + 50, bottomY);
    ctx.stroke();
    
    ctx.fillStyle = '#000000';
    ctx.font = 'bold 14px Arial';
    ctx.textAlign = 'center';
    ctx.fillText('URINE', centerX, h - 10);
    
    // Title
    ctx.fillStyle = '#000000';
    ctx.font = 'bold 20px Arial';
    ctx.fillText('COLLECTING DUCT', centerX, 50);
    
    ctx.font = '14px Arial';
    ctx.fillText('(Final concentration of urine)', centerX, 75);
  }

  // ===== THERMOREGULATION DIAGRAMS =====
  static drawThermoregulation(ctx, x, y, width, height, state, mechanism) {
    ctx.save();
    ctx.translate(x, y);
    
    const states = {
      homeostasis: () => this.drawThermoHomeostasis(ctx, width, height, mechanism),
      hypothermia: () => this.drawHypothermia(ctx, width, height, mechanism),
      hyperthermia: () => this.drawHyperthermia(ctx, width, height, mechanism),
      fever: () => this.drawFever(ctx, width, height, mechanism)
    };
    
    if (states[state]) {
      states[state]();
    }
    
    ctx.restore();
  }

  static drawThermoHomeostasis(ctx, w, h, mechanism) {
    const centerX = w / 2;
    const centerY = h / 2;
    
    // Body outline
    this.drawBodyOutline(ctx, centerX, centerY, 150, 300);
    
    // Hypothalamus (thermostat)
    ctx.fillStyle = '#9C27B0';
    ctx.beginPath();
    ctx.arc(centerX, centerY - 120, 35, 0, Math.PI * 2);
    ctx.fill();
    ctx.strokeStyle = '#7B1FA2';
    ctx.lineWidth = 3;
    ctx.stroke();
    
    ctx.fillStyle = '#FFFFFF';
    ctx.font = 'bold 12px Arial';
    ctx.textAlign = 'center';
    ctx.fillText('Hypothalamus', centerX, centerY - 120);
    
    // Set point indicator
    ctx.fillStyle = '#4CAF50';
    ctx.fillRect(centerX - 80, centerY - 180, 160, 45);
    ctx.strokeStyle = '#388E3C';
    ctx.lineWidth = 3;
    ctx.strokeRect(centerX - 80, centerY - 180, 160, 45);
    
    ctx.fillStyle = '#FFFFFF';
    ctx.font = 'bold 16px Arial';
    ctx.fillText('Set Point: 37°C', centerX, centerY - 153);
    
    // Balance indicators
    const mechanisms = [
      { x: centerX - 150, y: centerY, label: 'Heat Loss', icon: '❄️', color: '#2196F3' },
      { x: centerX + 150, y: centerY, label: 'Heat Production', icon: '🔥', color: '#FF5722' }
    ];
    
    mechanisms.forEach(mech => {
      ctx.fillStyle = mech.color + '33';
      ctx.strokeStyle = mech.color;
      ctx.lineWidth = 3;
      ctx.fillRect(mech.x - 70, mech.y - 50, 140, 100);
      ctx.strokeRect(mech.x - 70, mech.y - 50, 140, 100);
      
      ctx.font = '30px Arial';
      ctx.fillText(mech.icon, mech.x, mech.y - 10);
      
      ctx.fillStyle = mech.color;
      ctx.font = 'bold 14px Arial';
      ctx.fillText(mech.label, mech.x, mech.y + 30);
    });
    
    // Balance scale
    ctx.strokeStyle = '#424242';
    ctx.lineWidth = 4;
    ctx.beginPath();
    ctx.moveTo(centerX - 100, centerY + 120);
    ctx.lineTo(centerX + 100, centerY + 120);
    ctx.stroke();
    
    ctx.beginPath();
    ctx.moveTo(centerX, centerY + 80);
    ctx.lineTo(centerX, centerY + 120);
    ctx.stroke();
    
    // Triangle support
    ctx.fillStyle = '#424242';
    ctx.beginPath();
    ctx.moveTo(centerX, centerY + 80);
    ctx.lineTo(centerX - 15, centerY + 100);
    ctx.lineTo(centerX + 15, centerY + 100);
    ctx.fill();
    
    ctx.fillStyle = '#000000';
    ctx.font = 'bold 16px Arial';
    ctx.fillText('BALANCED', centerX, centerY + 155);
    
    // Title
    ctx.font = 'bold 20px Arial';
    ctx.fillText('THERMOREGULATION HOMEOSTASIS', centerX, 40);
  }

  static drawHypothermia(ctx, w, h, mechanism) {
    const centerX = w / 2;
    const centerY = h / 2;
    
    // Cold body outline (blue tint)
    this.drawBodyOutline(ctx, centerX, centerY, 150, 300, '#B3E5FC');
    
    // Temperature indicator
    ctx.fillStyle = '#E3F2FD';
    ctx.strokeStyle = '#0288D1';
    ctx.lineWidth = 4;
    ctx.fillRect(centerX - 100, 50, 200, 80);
    ctx.strokeRect(centerX - 100, 50, 200, 80);
    
    ctx.fillStyle = '#01579B';
    ctx.font = 'bold 18px Arial';
    ctx.textAlign = 'center';
    ctx.fillText('LOW Temperature', centerX, 80);
    ctx.font = 'bold 22px Arial';
    ctx.fillStyle = '#0277BD';
    ctx.fillText('< 35°C', centerX, 110);
    
    // Down arrow
    ctx.fillStyle = '#0288D1';
    ctx.beginPath();
    ctx.moveTo(centerX - 20, 130);
    ctx.lineTo(centerX + 20, 130);
    ctx.lineTo(centerX, 160);
    ctx.fill();
    
    // Hypothalamus activation
    ctx.fillStyle = '#FF6F00';
    ctx.beginPath();
    ctx.arc(centerX, centerY - 100, 40, 0, Math.PI * 2);
    ctx.fill();
    ctx.strokeStyle = '#E65100';
    ctx.lineWidth = 4;
    ctx.stroke();
    
    // Activation lines
    for (let i = 0; i < 8; i++) {
      const angle = (Math.PI * 2 * i) / 8;
      const x1 = centerX + Math.cos(angle) * 40;
      const y1 = centerY - 100 + Math.sin(angle) * 40;
      const x2 = centerX + Math.cos(angle) * 60;
      const y2 = centerY - 100 + Math.sin(angle) * 60;
      
      ctx.strokeStyle = '#FF6F00';
      ctx.lineWidth = 3;
      ctx.beginPath();
      ctx.moveTo(x1, y1);
      ctx.lineTo(x2, y2);
      ctx.stroke();
    }
    
    // Heat production mechanisms
    const heatMechanisms = [
      { x: w * 0.2, y: centerY, label: 'Shivering', detail: 'Muscle\ncontraction', color: '#F44336' },
      { x: centerX, y: centerY + 120, label: 'Vasoconstriction', detail: 'Reduce heat\nloss', color: '#E91E63' },
      { x: w * 0.8, y: centerY, label: 'Metabolism ↑', detail: 'Brown fat\nthermogenesis', color: '#FF5722' }
    ];
    
    heatMechanisms.forEach(mech => {
      ctx.fillStyle = mech.color + '33';
      ctx.strokeStyle = mech.color;
      ctx.lineWidth = 3;
      ctx.fillRect(mech.x - 75, mech.y - 45, 150, 90);
      ctx.strokeRect(mech.x - 75, mech.y - 45, 150, 90);
      
      ctx.fillStyle = mech.color;
      ctx.font = 'bold 14px Arial';
      ctx.textAlign = 'center';
      ctx.fillText(mech.label, mech.x, mech.y - 15);
      
      ctx.font = '11px Arial';
      const lines = mech.detail.split('\n');
      lines.forEach((line, i) => {
        ctx.fillText(line, mech.x, mech.y + 5 + i * 16);
      });
      
      // Arrow from hypothalamus
      this.drawArrow(ctx, centerX, centerY - 60, mech.x, mech.y - 45);
    });
    
    // Shivering illustration
    ctx.strokeStyle = '#F44336';
    ctx.lineWidth = 3;
    for (let i = 0; i < 5; i++) {
      const offset = (i % 2) * 5;
      ctx.beginPath();
      ctx.moveTo(w * 0.2 - 30 + offset, centerY - 30);
      ctx.lineTo(w * 0.2 - 30 + offset, centerY + 30);
      ctx.stroke();
    }
    
    // Behavioral responses
    ctx.fillStyle = '#FFF3E0';
    ctx.strokeStyle = '#F57C00';
    ctx.lineWidth = 2;
    ctx.fillRect(w - 220, h - 140, 200, 120);
    ctx.strokeRect(w - 220, h - 140, 200, 120);
    
    ctx.fillStyle = '#E65100';
    ctx.font = 'bold 13px Arial';
    ctx.textAlign = 'left';
    ctx.fillText('BEHAVIORAL:', w - 210, h - 120);
    
    ctx.font = '11px Arial';
    ctx.fillStyle = '#000000';
    const behaviors = [
      '• Put on warm clothes',
      '• Seek warm shelter',
      '• Curl up (reduce SA)',
      '• Hot beverages',
      '• Physical activity'
    ];
    
    behaviors.forEach((behavior, i) => {
      ctx.fillText(behavior, w - 205, h - 95 + i * 18);
    });
    
    // Title
    ctx.fillStyle = '#0288D1';
    ctx.font = 'bold 20px Arial';
    ctx.textAlign = 'center';
    ctx.fillText('HYPOTHERMIA RESPONSE', centerX, 30);
  }

  static drawHyperthermia(ctx, w, h, mechanism) {
    const centerX = w / 2;
    const centerY = h / 2;
    
    // Hot body outline (red tint)
    this.drawBodyOutline(ctx, centerX, centerY, 150, 300, '#FFCDD2');
    
    // Temperature indicator
    ctx.fillStyle = '#FFEBEE';
    ctx.strokeStyle = '#D32F2F';
    ctx.lineWidth = 4;
    ctx.fillRect(centerX - 100, 50, 200, 80);
    ctx.strokeRect(centerX - 100, 50, 200, 80);
    
    ctx.fillStyle = '#B71C1C';
    ctx.font = 'bold 18px Arial';
    ctx.textAlign = 'center';
    ctx.fillText('HIGH Temperature', centerX, 80);
    ctx.font = 'bold 22px Arial';
    ctx.fillStyle = '#C62828';
    ctx.fillText('> 38°C', centerX, 110);
    
    // Up arrow
    ctx.fillStyle = '#D32F2F';
    ctx.beginPath();
    ctx.moveTo(centerX - 20, 150);
    ctx.lineTo(centerX + 20, 150);
    ctx.lineTo(centerX, 130);
    ctx.fill();
    
    // Hypothalamus activation
    ctx.fillStyle = '#2196F3';
    ctx.beginPath();
    ctx.arc(centerX, centerY - 100, 40, 0, Math.PI * 2);
    ctx.fill();
    ctx.strokeStyle = '#1976D2';
    ctx.lineWidth = 4;
    ctx.stroke();
    
    // Cooling mechanisms
    const coolingMechanisms = [
      { x: w * 0.15, y: centerY - 20, label: 'Sweating', detail: 'Evaporative\ncooling', color: '#03A9F4', icon: '💧' },
      { x: w * 0.5, y: centerY + 100, label: 'Vasodilation', detail: 'Increase heat\nloss', color: '#00BCD4', icon: '🌡️' },
      { x: w * 0.85, y: centerY - 20, label: 'Metabolism ↓', detail: 'Reduce heat\nproduction', color: '#0097A7', icon: '📉' }
    ];
    
    coolingMechanisms.forEach(mech => {
      ctx.fillStyle = mech.color + '33';
      ctx.strokeStyle = mech.color;
      ctx.lineWidth = 3;
      ctx.fillRect(mech.x - 80, mech.y - 50, 160, 100);
      ctx.strokeRect(mech.x - 80, mech.y - 50, 160, 100);
      
      ctx.font = '25px Arial';
      ctx.fillText(mech.icon, mech.x, mech.y - 20);
      
      ctx.fillStyle = mech.color;
      ctx.font = 'bold 14px Arial';
      ctx.textAlign = 'center';
      ctx.fillText(mech.label, mech.x, mech.y + 10);
      
      ctx.font = '11px Arial';
      const lines = mech.detail.split('\n');
      lines.forEach((line, i) => {
        ctx.fillText(line, mech.x, mech.y + 28 + i * 16);
      });
      
      // Arrow from hypothalamus
      this.drawArrow(ctx, centerX, centerY - 60, mech.x, mech.y - 50);
    });
    
    // Sweat droplets illustration
    ctx.fillStyle = '#03A9F4';
    for (let i = 0; i < 6; i++) {
      const x = w * 0.15 - 30 + (i % 3) * 20;
      const y = centerY + 30 + Math.floor(i / 3) * 25;
      ctx.beginPath();
      ctx.arc(x, y, 5, 0, Math.PI * 2);
      ctx.fill();
      
      // Drop shape
      ctx.beginPath();
      ctx.moveTo(x, y);
      ctx.quadraticCurveTo(x - 3, y + 8, x, y + 12);
      ctx.quadraticCurveTo(x + 3, y + 8, x, y);
      ctx.fill();
    }
    
    // Blood vessels dilated
    ctx.strokeStyle = '#E57373';
    ctx.lineWidth = 8;
    ctx.beginPath();
    ctx.moveTo(w * 0.4, centerY + 100);
    ctx.bezierCurveTo(w * 0.42, centerY + 120, w * 0.48, centerY + 120, w * 0.5, centerY + 100);
    ctx.bezierCurveTo(w * 0.52, centerY + 120, w * 0.58, centerY + 120, w * 0.6, centerY + 100);
    ctx.stroke();
    
    // Behavioral responses
    ctx.fillStyle = '#E0F7FA';
    ctx.strokeStyle = '#0097A7';
    ctx.lineWidth = 2;
    ctx.fillRect(w - 220, h - 150, 200, 130);
    ctx.strokeRect(w - 220, h - 150, 200, 130);
    
    ctx.fillStyle = '#006064';
    ctx.font = 'bold 13px Arial';
    ctx.textAlign = 'left';
    ctx.fillText('BEHAVIORAL:', w - 210, h - 130);
    
    ctx.font = '11px Arial';
    ctx.fillStyle = '#000000';
    const behaviors = [
      '• Remove clothing',
      '• Seek shade/AC',
      '• Drink cold fluids',
      '• Reduce activity',
      '• Take cool shower',
      '• Use fan'
    ];
    
    behaviors.forEach((behavior, i) => {
      ctx.fillText(behavior, w - 205, h - 105 + i * 18);
    });
    
    // Title
    ctx.fillStyle = '#D32F2F';
    ctx.font = 'bold 20px Arial';
    ctx.textAlign = 'center';
    ctx.fillText('HYPERTHERMIA RESPONSE', centerX, 30);
  }

  static drawFever(ctx, w, h, mechanism) {
    const centerX = w / 2;
    const centerY = h / 2;
    
    // Body with infection indicator
    this.drawBodyOutline(ctx, centerX, centerY - 50, 150, 300, '#FFE0B2');
    
    // Pathogen
    ctx.fillStyle = '#4CAF50';
    ctx.strokeStyle = '#388E3C';
    ctx.lineWidth = 2;
    for (let i = 0; i < 3; i++) {
      const x = centerX - 100 + i * 40;
      const y = centerY + 100;
      ctx.beginPath();
      ctx.arc(x, y, 15, 0, Math.PI * 2);
      ctx.fill();
      ctx.stroke();
      
      // Spikes
      for (let j = 0; j < 8; j++) {
        const angle = (Math.PI * 2 * j) / 8;
        ctx.beginPath();
        ctx.moveTo(x + Math.cos(angle) * 15, y + Math.sin(angle) * 15);
        ctx.lineTo(x + Math.cos(angle) * 22, y + Math.sin(angle) * 22);
        ctx.stroke();
      }
    }
    
    ctx.fillStyle = '#000000';
    ctx.font = 'bold 12px Arial';
    ctx.textAlign = 'center';
    ctx.fillText('Pathogens', centerX - 60, centerY + 140);
    
    // Immune response - pyrogens
    ctx.fillStyle = '#FFCCBC';
    ctx.strokeStyle = '#FF5722';
    ctx.lineWidth = 3;
    ctx.fillRect(w * 0.15, centerY + 30, 140, 70);
    ctx.strokeRect(w * 0.15, centerY + 30, 140, 70);
    
    ctx.fillStyle = '#BF360C';
    ctx.font = 'bold 13px Arial';
    ctx.fillText('Pyrogens', w * 0.22, centerY + 55);
    ctx.font = '11px Arial';
    ctx.fillText('(IL-1, TNF-α)', w * 0.22, centerY + 72);
    ctx.fillText('Released', w * 0.22, centerY + 87);
    
    // Arrow to hypothalamus
    this.drawArrow(ctx, w * 0.25, centerY + 30, centerX, centerY - 130);
    
    // Hypothalamus - raised set point
    ctx.fillStyle = '#FF6F00';
    ctx.beginPath();
    ctx.arc(centerX, centerY - 160, 45, 0, Math.PI * 2);
    ctx.fill();
    ctx.strokeStyle = '#E65100';
    ctx.lineWidth = 4;
    ctx.stroke();
    
    ctx.fillStyle = '#FFFFFF';
    ctx.font = 'bold 12px Arial';
    ctx.fillText('Hypothalamus', centerX, centerY - 165);
    ctx.fillText('SET POINT ↑', centerX, centerY - 150);
    
    // Temperature comparison
    ctx.fillStyle = '#FFEBEE';
    ctx.strokeStyle = '#C62828';
    ctx.lineWidth = 3;
    ctx.fillRect(centerX + 120, 50, 200, 150);
    ctx.strokeRect(centerX + 120, 50, 200, 150);
    
    ctx.fillStyle = '#B71C1C';
    ctx.font = 'bold 14px Arial';
    ctx.textAlign = 'left';
    ctx.fillText('SET POINT ELEVATION:', centerX + 130, 75);
    
    ctx.font = '13px Arial';
    ctx.fillStyle = '#000000';
    ctx.fillText('Normal: 37°C', centerX + 140, 100);
    ctx.strokeStyle = '#4CAF50';
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.moveTo(centerX + 130, 105);
    ctx.lineTo(centerX + 240, 105);
    ctx.stroke();
    
    ctx.fillText('Fever: 39-40°C', centerX + 140, 130);
    ctx.strokeStyle = '#F44336';
    ctx.beginPath();
    ctx.moveTo(centerX + 130, 135);
    ctx.lineTo(centerX + 290, 135);
    ctx.stroke();
    
    ctx.font = '11px Arial';
    ctx.fillText('↑ Body tries to reach', centerX + 140, 160);
    ctx.fillText('new set point', centerX + 140, 175);
    
    // Fever phases
    const phases = [
      { x: 100, y: h - 180, label: 'ONSET', detail: 'Chills\nShivering\nVasoconstriction', color: '#2196F3' },
      { x: centerX, y: h - 180, label: 'FEVER', detail: 'Elevated temp\nKills pathogens\nEnhances immunity', color: '#FF5722' },
      { x: w - 100, y: h - 180, label: 'RESOLUTION', detail: 'Sweating\nVasodilation\nTemp drops', color: '#4CAF50' }
    ];
    
    phases.forEach((phase, i) => {
      ctx.fillStyle = phase.color + '22';
      ctx.strokeStyle = phase.color;
      ctx.lineWidth = 3;
      ctx.fillRect(phase.x - 70, phase.y - 40, 140, 110);
      ctx.strokeRect(phase.x - 70, phase.y - 40, 140, 110);
      
      ctx.fillStyle = phase.color;
      ctx.font = 'bold 14px Arial';
      ctx.textAlign = 'center';
      ctx.fillText(phase.label, phase.x, phase.y - 15);
      
      ctx.font = '11px Arial';
      ctx.fillStyle = '#000000';
      const lines = phase.detail.split('\n');
      lines.forEach((line, j) => {
        ctx.fillText(line, phase.x, phase.y + 5 + j * 17);
      });
      
      // Arrow to next phase
      if (i < phases.length - 1) {
        ctx.strokeStyle = '#757575';
        ctx.lineWidth = 3;
        this.drawArrow(ctx, phase.x + 70, phase.y, phases[i + 1].x - 70, phase.y);
      }
    });
    
    // Benefits of fever
    ctx.fillStyle = '#E8F5E9';
    ctx.strokeStyle = '#4CAF50';
    ctx.lineWidth = 2;
    ctx.fillRect(20, 50, 180, 140);
    ctx.strokeRect(20, 50, 180, 140);
    
    ctx.fillStyle = '#1B5E20';
    ctx.font = 'bold 12px Arial';
    ctx.textAlign = 'left';
    ctx.fillText('FEVER BENEFITS:', 30, 70);
    
    ctx.font = '11px Arial';
    ctx.fillStyle = '#000000';
    const benefits = [
      '• Inhibits pathogen',
      '  replication',
      '• Enhances immune',
      '  cell activity',
      '• Increases antibody',
      '  production',
      '• Denatures viral',
      '  proteins'
    ];
    
    benefits.forEach((benefit, i) => {
      ctx.fillText(benefit, 35, 90 + i * 16);
    });
    
    // Title
    ctx.fillStyle = '#FF5722';
    ctx.font = 'bold 20px Arial';
    ctx.textAlign = 'center';
    ctx.fillText('FEVER (Elevated Set Point)', centerX, 30);
  }

  // ===== WATER BALANCE (OSMOREGULATION) DIAGRAMS =====
  static drawWaterBalance(ctx, x, y, width, height, state, hormone) {
    ctx.save();
    ctx.translate(x, y);
    
    const states = {
      normal: () => this.drawNormalWaterBalance(ctx, width, height, hormone),
      dehydration: () => this.drawDehydration(ctx, width, height, hormone),
      overhydration: () => this.drawOverhydration(ctx, width, height, hormone),
      'salt-imbalance': () => this.drawSaltImbalance(ctx, width, height, hormone)
    };
    
    if (states[state]) {
      states[state]();
    }
    
    ctx.restore();
  }

  static drawNormalWaterBalance(ctx, w, h, hormone) {
    const centerX = w / 2;
    
    // Water balance indicator
    ctx.fillStyle = '#E1F5FE';
    ctx.strokeStyle = '#0288D1';
    ctx.lineWidth = 4;
    ctx.fillRect(centerX - 120, 40, 240, 80);
    ctx.strokeRect(centerX - 120, 40, 240, 80);
    
    ctx.fillStyle = '#01579B';
    ctx.font = 'bold 18px Arial';
    ctx.textAlign = 'center';
    ctx.fillText('NORMAL WATER BALANCE', centerX, 70);
    ctx.font = 'bold 16px Arial';
    ctx.fillText('Osmolality: 280-295 mOsm/kg', centerX, 100);
    
    // Kidney
    this.drawKidney(ctx, centerX, h / 2, 120, 180);
    
    // Hormone controls
    if (hormone === 'complete' || hormone === 'adh') {
      // ADH pathway
      ctx.fillStyle = '#E8EAF6';
      ctx.strokeStyle = '#5C6BC0';
      ctx.lineWidth = 3;
      ctx.fillRect(50, 180, 200, 180);
      ctx.strokeRect(50, 180, 200, 180);
      
      ctx.fillStyle = '#3F51B5';
      ctx.font = 'bold 14px Arial';
      ctx.textAlign = 'left';
      ctx.fillText('ADH (Vasopressin)', 65, 205);
      
      ctx.font = '12px Arial';
      ctx.fillStyle = '#000000';
      const adhInfo = [
        'Released from:',
        '  Posterior pituitary',
        '',
        'Action:',
        '  ↑ Water reabsorption',
        '  ↑ Aquaporin-2',
        '  Concentrates urine'
      ];
      
      adhInfo.forEach((line, i) => {
        if (line.includes(':')) {
          ctx.font = 'bold 12px Arial';
        } else {
          ctx.font = '11px Arial';
        }
        ctx.fillText(line, 70, 230 + i * 18);
      });
    }
    
    if (hormone === 'complete' || hormone === 'aldosterone') {
      // Aldosterone pathway
      ctx.fillStyle = '#FCE4EC';
      ctx.strokeStyle = '#E91E63';
      ctx.lineWidth = 3;
      ctx.fillRect(w - 250, 180, 200, 180);
      ctx.strokeRect(w - 250, 180, 200, 180);
      
      ctx.fillStyle = '#C2185B';
      ctx.font = 'bold 14px Arial';
      ctx.textAlign = 'left';
      ctx.fillText('Aldosterone', w - 235, 205);
      
      ctx.font = '12px Arial';
      ctx.fillStyle = '#000000';
      const aldoInfo = [
        'Released from:',
        '  Adrenal cortex',
        '',
        'Action:',
        '  ↑ Na⁺ reabsorption',
        '  ↑ K⁺ secretion',
        '  Water follows Na⁺'
      ];
      
      aldoInfo.forEach((line, i) => {
        if (line.includes(':')) {
          ctx.font = 'bold 12px Arial';
        } else {
          ctx.font = '11px Arial';
        }
        ctx.fillText(line, w - 230, 230 + i * 18);
      });
    }
    
    // Water input/output balance
    const inputX = w * 0.25;
    const outputX = w * 0.75;
    const balanceY = h - 160;
    
    // Input
    ctx.fillStyle = '#81D4FA';
    ctx.strokeStyle = '#0277BD';
    ctx.lineWidth = 3;
    ctx.fillRect(inputX - 80, balanceY - 50, 160, 120);
    ctx.strokeRect(inputX - 80, balanceY - 50, 160, 120);
    
    ctx.fillStyle = '#01579B';
    ctx.font = 'bold 14px Arial';
    ctx.textAlign = 'center';
    ctx.fillText('WATER IN', inputX, balanceY - 25);
    
    ctx.font = '12px Arial';
    ctx.fillStyle = '#000000';
    ctx.fillText('Drinking: 1500 ml', inputX, balanceY);
    ctx.fillText('Food: 750 ml', inputX, balanceY + 20);
    ctx.fillText('Metabolism: 250 ml', inputX, balanceY + 40);
    ctx.font = 'bold 13px Arial';
    ctx.fillText('Total: 2500 ml/day', inputX, balanceY + 60);
    
    // Output
    ctx.fillStyle = '#FFF9C4';
    ctx.strokeStyle = '#F57F17';
    ctx.lineWidth = 3;
    ctx.fillRect(outputX - 80, balanceY - 50, 160, 120);
    ctx.strokeRect(outputX - 80, balanceY - 50, 160, 120);
    
    ctx.fillStyle = '#F57F17';
    ctx.font = 'bold 14px Arial';
    ctx.fillText('WATER OUT', outputX, balanceY - 25);
    
    ctx.font = '12px Arial';
    ctx.fillStyle = '#000000';
    ctx.fillText('Urine: 1500 ml', outputX, balanceY);
    ctx.fillText('Insensible: 900 ml', outputX, balanceY + 20);
    ctx.fillText('Feces: 100 ml', outputX, balanceY + 40);
    ctx.font = 'bold 13px Arial';
    ctx.fillText('Total: 2500 ml/day', outputX, balanceY + 60);
    
    // Balance symbol
    ctx.strokeStyle = '#4CAF50';
    ctx.lineWidth = 4;
    ctx.beginPath();
    ctx.moveTo(inputX + 90, balanceY + 10);
    ctx.lineTo(outputX - 90, balanceY + 10);
    ctx.stroke();
    
    ctx.fillStyle = '#4CAF50';
    ctx.font = 'bold 16px Arial';
    ctx.fillText('=', centerX, balanceY + 15);
    ctx.fillText('BALANCED', centerX, h - 20);
  }

  static drawDehydration(ctx, w, h, hormone) {
    const centerX = w / 2;
    
    // Dehydration warning
    ctx.fillStyle = '#FFF3E0';
    ctx.strokeStyle = '#F57C00';
    ctx.lineWidth = 4;
    ctx.fillRect(centerX - 140, 40, 280, 90);
    ctx.strokeRect(centerX - 140, 40, 280, 90);
    
    ctx.fillStyle = '#E65100';
    ctx.font = 'bold 20px Arial';
    ctx.textAlign = 'center';
    ctx.fillText('DEHYDRATION', centerX, 70);
    ctx.font = 'bold 16px Arial';
    ctx.fillText('↑ Plasma Osmolality > 295 mOsm/kg', centerX, 100);
    
    // Trigger - osmoreceptors
    ctx.fillStyle = '#FFCCBC';
    ctx.strokeStyle = '#FF5722';
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.arc(centerX - 200, 200, 50, 0, Math.PI * 2);
    ctx.fill();
    ctx.stroke();
    
    ctx.fillStyle = '#BF360C';
    ctx.font = 'bold 12px Arial';
    ctx.fillText('Osmoreceptors', centerX - 200, 195);
    ctx.fillText('(Hypothalamus)', centerX - 200, 210);
    
    // Response pathways
    const responses = [
      { x: centerX - 200, y: 340, label: 'Thirst', action: 'Drink water', color: '#2196F3', icon: '🚰' },
      { x: centerX, y: 340, label: 'ADH Release', action: '↑ Water\nreabsorption', color: '#5C6BC0', icon: '💧' },
      { x: centerX + 200, y: 340, label: 'Kidney', action: 'Concentrate\nurine', color: '#FF9800', icon: '🔬' }
    ];
    
    responses.forEach(resp => {
      // Arrow from osmoreceptors
      this.drawArrow(ctx, centerX - 200, 250, resp.x, resp.y - 70);
      
      ctx.fillStyle = resp.color + '33';
      ctx.strokeStyle = resp.color;
      ctx.lineWidth = 3;
      ctx.fillRect(resp.x - 75, resp.y - 70, 150, 130);
      ctx.strokeRect(resp.x - 75, resp.y - 70, 150,
      ctx.strokeRect(resp.x - 75, resp.y - 70, 150, 130);
      
      ctx.font = '30px Arial';
      ctx.fillText(resp.icon, resp.x, resp.y - 30);
      
      ctx.fillStyle = resp.color;
      ctx.font = 'bold 14px Arial';
      ctx.fillText(resp.label, resp.x, resp.y);
      
      ctx.font = '12px Arial';
      ctx.fillStyle = '#000000';
      const lines = resp.action.split('\n');
      lines.forEach((line, i) => {
        ctx.fillText(line, resp.x, resp.y + 20 + i * 18);
      });
    });
    
    // Result
    ctx.fillStyle = '#C8E6C9';
    ctx.strokeStyle = '#388E3C';
    ctx.lineWidth = 4;
    ctx.fillRect(centerX - 150, h - 120, 300, 90);
    ctx.strokeRect(centerX - 150, h - 120, 300, 90);
    
    ctx.fillStyle = '#1B5E20';
    ctx.font = 'bold 16px Arial';
    ctx.fillText('RESULT:', centerX, h - 95);
    ctx.font = 'bold 18px Arial';
    ctx.fillText('Restore Normal Osmolality', centerX, h - 70);
    ctx.font = '14px Arial';
    ctx.fillText('280-295 mOsm/kg', centerX, h - 45);
    
    // Physiological signs
    ctx.fillStyle = '#FFEBEE';
    ctx.strokeStyle = '#D32F2F';
    ctx.lineWidth = 2;
    ctx.fillRect(20, 150, 200, 160);
    ctx.strokeRect(20, 150, 200, 160);
    
    ctx.fillStyle = '#C62828';
    ctx.font = 'bold 13px Arial';
    ctx.textAlign = 'left';
    ctx.fillText('SIGNS:', 35, 175);
    
    ctx.font = '11px Arial';
    ctx.fillStyle = '#000000';
    const signs = [
      '• Dry mouth/skin',
      '• Dark urine',
      '• Low urine output',
      '• Fatigue',
      '• Dizziness',
      '• ↑ Heart rate',
      '• ↓ Blood pressure'
    ];
    
    signs.forEach((sign, i) => {
      ctx.fillText(sign, 40, 195 + i * 18);
    });
    
    // ADH mechanism detail
    ctx.fillStyle = '#E8EAF6';
    ctx.strokeStyle = '#5C6BC0';
    ctx.lineWidth = 2;
    ctx.fillRect(w - 220, 150, 200, 160);
    ctx.strokeRect(w - 220, 150, 200, 160);
    
    ctx.fillStyle = '#3F51B5';
    ctx.font = 'bold 13px Arial';
    ctx.textAlign = 'left';
    ctx.fillText('ADH MECHANISM:', w - 210, 175);
    
    ctx.font = '11px Arial';
    ctx.fillStyle = '#000000';
    const mechanism = [
      '1. Posterior pituitary',
      '   releases ADH',
      '2. ADH → kidney',
      '   collecting ducts',
      '3. Insert aquaporin-2',
      '   channels',
      '4. ↑ Water permeability',
      '5. More water retained'
    ];
    
    mechanism.forEach((step, i) => {
      ctx.fillText(step, w - 205, 195 + i * 16);
    });
  }

  static drawOverhydration(ctx, w, h, hormone) {
    const centerX = w / 2;
    
    // Overhydration warning
    ctx.fillStyle = '#E0F7FA';
    ctx.strokeStyle = '#00ACC1';
    ctx.lineWidth = 4;
    ctx.fillRect(centerX - 140, 40, 280, 90);
    ctx.strokeRect(centerX - 140, 40, 280, 90);
    
    ctx.fillStyle = '#006064';
    ctx.font = 'bold 20px Arial';
    ctx.textAlign = 'center';
    ctx.fillText('OVERHYDRATION', centerX, 70);
    ctx.font = 'bold 16px Arial';
    ctx.fillText('↓ Plasma Osmolality < 280 mOsm/kg', centerX, 100);
    
    // Trigger - osmoreceptors
    ctx.fillStyle = '#B2EBF2';
    ctx.strokeStyle = '#00BCD4';
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.arc(centerX - 200, 200, 50, 0, Math.PI * 2);
    ctx.fill();
    ctx.stroke();
    
    ctx.fillStyle = '#006064';
    ctx.font = 'bold 12px Arial';
    ctx.fillText('Osmoreceptors', centerX - 200, 195);
    ctx.fillText('(Hypothalamus)', centerX - 200, 210);
    
    // Response pathways
    const responses = [
      { x: centerX - 180, y: 340, label: '↓ Thirst', action: 'Reduced\ndrinking', color: '#90CAF9', icon: '🚫' },
      { x: centerX, y: 340, label: '↓ ADH Release', action: 'Less water\nreabsorption', color: '#64B5F6', icon: '💧' },
      { x: centerX + 180, y: 340, label: 'Kidney', action: 'Dilute\nurine', color: '#42A5F5', icon: '🔬' }
    ];
    
    responses.forEach(resp => {
      // Arrow from osmoreceptors
      this.drawArrow(ctx, centerX - 200, 250, resp.x, resp.y - 70);
      
      ctx.fillStyle = resp.color + '33';
      ctx.strokeStyle = resp.color;
      ctx.lineWidth = 3;
      ctx.fillRect(resp.x - 75, resp.y - 70, 150, 130);
      ctx.strokeRect(resp.x - 75, resp.y - 70, 150, 130);
      
      ctx.font = '30px Arial';
      ctx.fillText(resp.icon, resp.x, resp.y - 30);
      
      ctx.fillStyle = resp.color;
      ctx.font = 'bold 14px Arial';
      ctx.textAlign = 'center';
      ctx.fillText(resp.label, resp.x, resp.y);
      
      ctx.font = '12px Arial';
      ctx.fillStyle = '#000000';
      const lines = resp.action.split('\n');
      lines.forEach((line, i) => {
        ctx.fillText(line, resp.x, resp.y + 20 + i * 18);
      });
    });
    
    // Result
    ctx.fillStyle = '#C8E6C9';
    ctx.strokeStyle = '#388E3C';
    ctx.lineWidth = 4;
    ctx.fillRect(centerX - 150, h - 120, 300, 90);
    ctx.strokeRect(centerX - 150, h - 120, 300, 90);
    
    ctx.fillStyle = '#1B5E20';
    ctx.font = 'bold 16px Arial';
    ctx.fillText('RESULT:', centerX, h - 95);
    ctx.font = 'bold 18px Arial';
    ctx.fillText('Restore Normal Osmolality', centerX, h - 70);
    ctx.font = '14px Arial';
    ctx.fillText('↑ Urine output (water diuresis)', centerX, h - 45);
    
    // Physiological effects
    ctx.fillStyle = '#FFF9C4';
    ctx.strokeStyle = '#F9A825';
    ctx.lineWidth = 2;
    ctx.fillRect(20, 150, 220, 180);
    ctx.strokeRect(20, 150, 220, 180);
    
    ctx.fillStyle = '#F57F17';
    ctx.font = 'bold 13px Arial';
    ctx.textAlign = 'left';
    ctx.fillText('EFFECTS:', 35, 175);
    
    ctx.font = '11px Arial';
    ctx.fillStyle = '#000000';
    const effects = [
      '• Dilute urine (clear)',
      '• High urine volume',
      '• ↓ Sodium (hyponatremia)',
      '• Cellular swelling',
      '• Headache',
      '• Confusion',
      '• Nausea',
      '• In severe cases:',
      '  Brain edema'
    ];
    
    effects.forEach((effect, i) => {
      ctx.fillText(effect, 40, 195 + i * 17);
    });
    
    // Low ADH state
    ctx.fillStyle = '#E8EAF6';
    ctx.strokeStyle = '#5C6BC0';
    ctx.lineWidth = 2;
    ctx.fillRect(w - 220, 150, 200, 140);
    ctx.strokeRect(w - 220, 150, 200, 140);
    
    ctx.fillStyle = '#3F51B5';
    ctx.font = 'bold 13px Arial';
    ctx.textAlign = 'left';
    ctx.fillText('LOW ADH STATE:', w - 210, 175);
    
    ctx.font = '11px Arial';
    ctx.fillStyle = '#000000';
    const lowADH = [
      '1. ↓ ADH release',
      '2. Few aquaporin-2',
      '   channels inserted',
      '3. ↓ Water permeability',
      '   in collecting duct',
      '4. More water excreted',
      '5. Large volume of',
      '   dilute urine'
    ];
    
    lowADH.forEach((step, i) => {
      ctx.fillText(step, w - 205, 195 + i * 16);
    });
  }

  static drawSaltImbalance(ctx, w, h, hormone) {
    const centerX = w / 2;
    
    // Title
    ctx.fillStyle = '#F3E5F5';
    ctx.strokeStyle = '#9C27B0';
    ctx.lineWidth = 4;
    ctx.fillRect(centerX - 140, 40, 280, 70);
    ctx.strokeRect(centerX - 140, 40, 280, 70);
    
    ctx.fillStyle = '#6A1B9A';
    ctx.font = 'bold 20px Arial';
    ctx.textAlign = 'center';
    ctx.fillText('SALT (Na⁺) IMBALANCE', centerX, 75);
    
    // Split into two conditions
    const leftX = w * 0.25;
    const rightX = w * 0.75;
    
    // HYPONATREMIA (low sodium)
    ctx.fillStyle = '#E3F2FD';
    ctx.strokeStyle = '#2196F3';
    ctx.lineWidth = 3;
    ctx.fillRect(leftX - 140, 140, 280, 220);
    ctx.strokeRect(leftX - 140, 140, 280, 220);
    
    ctx.fillStyle = '#1565C0';
    ctx.font = 'bold 16px Arial';
    ctx.fillText('HYPONATREMIA', leftX, 170);
    ctx.font = '14px Arial';
    ctx.fillText('(Low Sodium)', leftX, 190);
    ctx.font = 'bold 14px Arial';
    ctx.fillText('Na⁺ < 135 mEq/L', leftX, 210);
    
    ctx.font = '12px Arial';
    ctx.fillStyle = '#000000';
    ctx.textAlign = 'left';
    
    ctx.fillText('Causes:', leftX - 120, 235);
    ctx.font = '11px Arial';
    ctx.fillText('• Excess water intake', leftX - 115, 252);
    ctx.fillText('• SIADH (excess ADH)', leftX - 115, 268);
    ctx.fillText('• Diuretics', leftX - 115, 284);
    
    ctx.font = '12px Arial';
    ctx.fillText('Response:', leftX - 120, 310);
    ctx.font = '11px Arial';
    ctx.fillStyle = '#D32F2F';
    ctx.fillText('• ↓ ADH → excrete water', leftX - 115, 327);
    ctx.fillText('• ↓ Aldosterone → lose Na⁺', leftX - 115, 343);
    
    // HYPERNATREMIA (high sodium)
    ctx.fillStyle = '#FFEBEE';
    ctx.strokeStyle = '#F44336';
    ctx.lineWidth = 3;
    ctx.fillRect(rightX - 140, 140, 280, 220);
    ctx.strokeRect(rightX - 140, 140, 280, 220);
    
    ctx.fillStyle = '#C62828';
    ctx.font = 'bold 16px Arial';
    ctx.textAlign = 'center';
    ctx.fillText('HYPERNATREMIA', rightX, 170);
    ctx.font = '14px Arial';
    ctx.fillText('(High Sodium)', rightX, 190);
    ctx.font = 'bold 14px Arial';
    ctx.fillText('Na⁺ > 145 mEq/L', rightX, 210);
    
    ctx.font = '12px Arial';
    ctx.fillStyle = '#000000';
    ctx.textAlign = 'left';
    
    ctx.fillText('Causes:', rightX - 120, 235);
    ctx.font = '11px Arial';
    ctx.fillText('• Dehydration', rightX - 115, 252);
    ctx.fillText('• Excess salt intake', rightX - 115, 268);
    ctx.fillText('• Diabetes insipidus', rightX - 115, 284);
    
    ctx.font = '12px Arial';
    ctx.fillText('Response:', rightX - 120, 310);
    ctx.font = '11px Arial';
    ctx.fillStyle = '#2196F3';
    ctx.fillText('• ↑ ADH → retain water', rightX - 115, 327);
    ctx.fillText('• ↑ Aldosterone → retain Na⁺', rightX - 115, 343);
    
    // Renin-Angiotensin-Aldosterone System
    ctx.fillStyle = '#FFF3E0';
    ctx.strokeStyle = '#FF6F00';
    ctx.lineWidth = 3;
    ctx.fillRect(50, h - 240, w - 100, 210);
    ctx.strokeRect(50, h - 240, w - 100, 210);
    
    ctx.fillStyle = '#E65100';
    ctx.font = 'bold 16px Arial';
    ctx.textAlign = 'center';
    ctx.fillText('RENIN-ANGIOTENSIN-ALDOSTERONE SYSTEM (RAAS)', centerX, h - 210);
    
    // RAAS pathway
    const raasSteps = [
      { x: 150, label: 'Kidney\nRenin', color: '#FF5722' },
      { x: 350, label: 'Angiotensinogen\n→ Angiotensin I', color: '#FF7043' },
      { x: 550, label: 'ACE (Lung)\n→ Angiotensin II', color: '#FF8A65' },
      { x: 750, label: 'Aldosterone\n(Adrenal)', color: '#FFAB91' }
    ];
    
    raasSteps.forEach((step, i) => {
      ctx.fillStyle = step.color + '44';
      ctx.strokeStyle = step.color;
      ctx.lineWidth = 2;
      ctx.fillRect(step.x - 60, h - 160, 120, 70);
      ctx.strokeRect(step.x - 60, h - 160, 120, 70);
      
      ctx.fillStyle = step.color;
      ctx.font = 'bold 11px Arial';
      const lines = step.label.split('\n');
      lines.forEach((line, j) => {
        ctx.fillText(line, step.x, h - 140 + j * 16);
      });
      
      // Arrow to next step
      if (i < raasSteps.length - 1) {
        ctx.strokeStyle = '#E64A19';
        ctx.lineWidth = 3;
        this.drawArrow(ctx, step.x + 60, h - 125, raasSteps[i + 1].x - 60, h - 125);
      }
    });
    
    // Effects
    ctx.fillStyle = '#000000';
    ctx.font = 'bold 12px Arial';
    ctx.textAlign = 'left';
    ctx.fillText('Effects:', 70, h - 75);
    
    ctx.font = '11px Arial';
    const raasEffects = [
      '• ↑ Na⁺ reabsorption (kidney)',
      '• ↑ Water retention (follows Na⁺)',
      '• ↑ Blood volume',
      '• ↑ Blood pressure'
    ];
    
    raasEffects.forEach((effect, i) => {
      ctx.fillText(effect, 75, h - 55 + i * 16);
    });
    
    // Feedback loop
    ctx.strokeStyle = '#4CAF50';
    ctx.lineWidth = 3;
    ctx.setLineDash([5, 5]);
    ctx.beginPath();
    ctx.arc(centerX, h - 120, 200, 0, Math.PI);
    ctx.stroke();
    ctx.setLineDash([]);
    
    ctx.fillStyle = '#4CAF50';
    ctx.font = 'bold 11px Arial';
    ctx.textAlign = 'center';
    ctx.fillText('Negative Feedback (−)', centerX, h - 310);
  }

  // ===== HELPER METHODS =====
  
  static drawPancreas(ctx, x, y, w, h) {
    ctx.fillStyle = '#FF9800';
    ctx.strokeStyle = '#F57C00';
    ctx.lineWidth = 3;
    
    // Irregular pancreas shape
    ctx.beginPath();
    ctx.ellipse(x, y, w, h, 0, 0, Math.PI * 2);
    ctx.fill();
    ctx.stroke();
    
    // Texture
    ctx.fillStyle = '#FB8C00';
    for (let i = 0; i < 5; i++) {
      const angle = (Math.PI * 2 * i) / 5;
      const cx = x + Math.cos(angle) * w * 0.4;
      const cy = y + Math.sin(angle) * h * 0.4;
      ctx.beginPath();
      ctx.arc(cx, cy, 8, 0, Math.PI * 2);
      ctx.fill();
    }
    
    ctx.fillStyle = '#FFFFFF';
    ctx.font = 'bold 14px Arial';
    ctx.textAlign = 'center';
    ctx.fillText('Pancreas', x, y);
  }

  static drawKidney(ctx, x, y, w, h) {
    ctx.fillStyle = '#8D6E63';
    ctx.strokeStyle = '#5D4037';
    ctx.lineWidth = 3;
    
    // Bean shape
    ctx.beginPath();
    ctx.ellipse(x, y, w/2, h/2, 0, 0, Math.PI * 2);
    ctx.fill();
    
    // Indent (hilum)
    ctx.fillStyle = '#6D4C41';
    ctx.beginPath();
    ctx.ellipse(x + w/4, y, w/6, h/3, 0, 0, Math.PI * 2);
    ctx.fill();
    
    ctx.stroke();
    
    // Internal structure
    ctx.strokeStyle = '#4E342E';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.ellipse(x - 10, y, w/3, h/3, 0, 0, Math.PI * 2);
    ctx.stroke();
    
    ctx.fillStyle = '#FFFFFF';
    ctx.font = 'bold 12px Arial';
    ctx.textAlign = 'center';
    ctx.fillText('Kidney', x, y);
  }

  static drawBodyOutline(ctx, x, y, w, h, fillColor = '#FFE0B2') {
    ctx.fillStyle = fillColor;
    ctx.strokeStyle = '#D84315';
    ctx.lineWidth = 3;
    
    // Head
    ctx.beginPath();
    ctx.arc(x, y - h/2, w/3, 0, Math.PI * 2);
    ctx.fill();
    ctx.stroke();
    
    // Body (torso)
    ctx.beginPath();
    ctx.ellipse(x, y, w/2, h/2.5, 0, 0, Math.PI * 2);
    ctx.fill();
    ctx.stroke();
    
    // Arms
    ctx.strokeStyle = '#D84315';
    ctx.lineWidth = 15;
    ctx.beginPath();
    ctx.moveTo(x - w/2, y - h/8);
    ctx.lineTo(x - w*0.8, y + h/6);
    ctx.stroke();
    
    ctx.beginPath();
    ctx.moveTo(x + w/2, y - h/8);
    ctx.lineTo(x + w*0.8, y + h/6);
    ctx.stroke();
    
    // Legs
    ctx.beginPath();
    ctx.moveTo(x - w/6, y + h/2.5);
    ctx.lineTo(x - w/4, y + h/1.5);
    ctx.stroke();
    
    ctx.beginPath();
    ctx.moveTo(x + w/6, y + h/2.5);
    ctx.lineTo(x + w/4, y + h/1.5);
    ctx.stroke();
  }

  static drawArrow(ctx, x1, y1, x2, y2) {
    const headLength = 10;
    const angle = Math.atan2(y2 - y1, x2 - x1);
    
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.stroke();
    
    ctx.beginPath();
    ctx.moveTo(x2, y2);
    ctx.lineTo(x2 - headLength * Math.cos(angle - Math.PI / 6), y2 - headLength * Math.sin(angle - Math.PI / 6));
    ctx.lineTo(x2 - headLength * Math.cos(angle + Math.PI / 6), y2 - headLength * Math.sin(angle + Math.PI / 6));
    ctx.lineTo(x2, y2);
    ctx.fill();
  }

  static drawArrowHead(ctx, x, y, angle) {
    const size = 10;
    ctx.fillStyle = ctx.strokeStyle;
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineTo(x - size * Math.cos(angle - Math.PI / 6), y - size * Math.sin(angle - Math.PI / 6));
    ctx.lineTo(x - size * Math.cos(angle + Math.PI / 6), y - size * Math.sin(angle + Math.PI / 6));
    ctx.closePath();
    ctx.fill();
  }

  static drawCurvedArrow(ctx, x1, y1, x2, y2) {
    const midX = (x1 + x2) / 2;
    const midY = (y1 + y2) / 2;
    const cpX = midX + (y2 - y1) * 0.3;
    const cpY = midY - (x2 - x1) * 0.3;
    
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.quadraticCurveTo(cpX, cpY, x2, y2);
    ctx.stroke();
    
    const angle = Math.atan2(y2 - cpY, x2 - cpX);
    this.drawArrowHead(ctx, x2, y2, angle);
  }

  static drawCircularArrows(ctx, centerX, centerY, radius, count) {
    for (let i = 0; i < count; i++) {
      const startAngle = (Math.PI * 2 * i) / count;
      const endAngle = (Math.PI * 2 * (i + 0.8)) / count;
      
      ctx.beginPath();
      ctx.arc(centerX, centerY, radius, startAngle, endAngle);
      ctx.stroke();
      
      const arrowX = centerX + Math.cos(endAngle) * radius;
      const arrowY = centerY + Math.sin(endAngle) * radius;
      this.drawArrowHead(ctx, arrowX, arrowY, endAngle + Math.PI / 2);
    }
  }
}



