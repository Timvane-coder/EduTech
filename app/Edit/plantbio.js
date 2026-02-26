import { createCanvas } from '@napi-rs/canvas'; import
ExcelJS from 'exceljs'; import fs from 'fs'; import os
from 'os'; import path from 'path'; import readline from
'readline'; import * as math from 'mathjs'; import
GIFEncoder from 'gifencoder'; import { PassThrough }
from 'stream';


class AnatomicalShapes {
  
  // ===== LEAF CROSS-SECTION =====
  static drawLeafCrossSection(ctx, x, y, width, height, layer, process) {
    ctx.save();
    ctx.translate(x, y);
    
    switch(layer) {
      case 'complete':
        this.drawCompleteLeaf(ctx, width, height, process);
        break;
      case 'cuticle':
        this.drawCuticleLayer(ctx, width, height);
        break;
      case 'epidermis':
        this.drawEpidermisLayer(ctx, width, height);
        break;
      case 'palisade':
        this.drawPalisadeLayer(ctx, width, height);
        break;
      case 'spongy':
        this.drawSpongyLayer(ctx, width, height);
        break;
      case 'vascular':
        this.drawVascularBundle(ctx, width, height);
        break;
    }
    
    ctx.restore();
  }

  static drawCompleteLeaf(ctx, w, h, process) {
    // Upper cuticle
    ctx.fillStyle = '#F0E68C';
    ctx.fillRect(0, 0, w, h * 0.05);
    
    // Upper epidermis
    ctx.fillStyle = '#E8DDA0';
    ctx.fillRect(0, h * 0.05, w, h * 0.08);
    
    // Palisade mesophyll
    const palisadeGradient = ctx.createLinearGradient(0, h * 0.13, 0, h * 0.38);
    palisadeGradient.addColorStop(0, '#2D5016');
    palisadeGradient.addColorStop(1, '#3D6B1F');
    ctx.fillStyle = palisadeGradient;
    ctx.fillRect(0, h * 0.13, w, h * 0.25);
    
    // Draw chloroplasts in palisade
    ctx.fillStyle = '#1A3D0A';
    for(let i = 0; i < 15; i++) {
      for(let j = 0; j < 3; j++) {
        ctx.beginPath();
        ctx.ellipse(
          (i / 14) * w,
          h * 0.15 + (j / 2) * (h * 0.23),
          w * 0.015,
          h * 0.02,
          0, 0, Math.PI * 2
        );
        ctx.fill();
      }
    }
    
    // Spongy mesophyll
    ctx.fillStyle = '#6B8E4E';
    ctx.fillRect(0, h * 0.38, w, h * 0.32);
    
    // Air spaces in spongy layer
    ctx.fillStyle = '#FFFFFF';
    for(let i = 0; i < 12; i++) {
      for(let j = 0; j < 4; j++) {
        ctx.beginPath();
        ctx.arc(
          (i / 11) * w + (j % 2 ? w * 0.03 : 0),
          h * 0.4 + (j / 3) * (h * 0.28),
          w * 0.02,
          0, Math.PI * 2
        );
        ctx.fill();
      }
    }
    
    // Vascular bundle (xylem and phloem)
    const vascularX = w * 0.5;
    const vascularY = h * 0.5;
    
    // Xylem (bottom, larger cells)
    ctx.fillStyle = '#8B4513';
    ctx.beginPath();
    ctx.ellipse(vascularX, vascularY + h * 0.05, w * 0.06, h * 0.08, 0, 0, Math.PI * 2);
    ctx.fill();
    
    // Individual xylem vessels
    ctx.fillStyle = '#A0522D';
    for(let i = 0; i < 3; i++) {
      ctx.beginPath();
      ctx.arc(vascularX - w * 0.03 + i * w * 0.03, vascularY + h * 0.05, w * 0.015, 0, Math.PI * 2);
      ctx.fill();
    }
    
    // Phloem (top, smaller cells)
    ctx.fillStyle = '#228B22';
    ctx.beginPath();
    ctx.ellipse(vascularX, vascularY - h * 0.03, w * 0.05, h * 0.05, 0, 0, Math.PI * 2);
    ctx.fill();
    
    // Lower epidermis
    ctx.fillStyle = '#E8DDA0';
    ctx.fillRect(0, h * 0.7, w, h * 0.08);
    
    // Stomata in lower epidermis
    this.drawStomata(ctx, w * 0.3, h * 0.74, w * 0.08, h * 0.04, true);
    this.drawStomata(ctx, w * 0.7, h * 0.74, w * 0.08, h * 0.04, true);
    
    // Lower cuticle
    ctx.fillStyle = '#F0E68C';
    ctx.fillRect(0, h * 0.78, w, h * 0.05);
    
    // Process-specific highlighting
    if(process === 'photosynthesis') {
      // Highlight palisade layer
      ctx.strokeStyle = '#FFFF00';
      ctx.lineWidth = 3;
      ctx.strokeRect(0, h * 0.13, w, h * 0.25);
      
      // Light arrows
      ctx.fillStyle = '#FFD700';
      for(let i = 0; i < 5; i++) {
        ctx.beginPath();
        ctx.moveTo((i / 4) * w, 0);
        ctx.lineTo((i / 4) * w - w * 0.01, h * 0.1);
        ctx.lineTo((i / 4) * w + w * 0.01, h * 0.1);
        ctx.fill();
      }
    } else if(process === 'transpiration') {
      // Highlight stomata
      ctx.strokeStyle = '#00BFFF';
      ctx.lineWidth = 3;
      ctx.beginPath();
      ctx.ellipse(w * 0.3, h * 0.74, w * 0.05, h * 0.03, 0, 0, Math.PI * 2);
      ctx.stroke();
      
      // Water vapor arrows
      ctx.fillStyle = '#87CEEB';
      for(let i = 0; i < 3; i++) {
        const arrowX = w * 0.3 - w * 0.02 + i * w * 0.02;
        ctx.beginPath();
        ctx.moveTo(arrowX, h * 0.8);
        ctx.lineTo(arrowX - w * 0.008, h * 0.88);
        ctx.lineTo(arrowX + w * 0.008, h * 0.88);
        ctx.fill();
      }
    } else if(process === 'gas-exchange') {
      // CO2 in, O2 out arrows
      ctx.font = `${h * 0.04}px Arial`;
      ctx.fillStyle = '#FF6347';
      ctx.fillText('CO₂', w * 0.15, h * 0.65);
      
      ctx.fillStyle = '#32CD32';
      ctx.fillText('O₂', w * 0.75, h * 0.85);
    }
    
    // Outline
    ctx.strokeStyle = '#000000';
    ctx.lineWidth = 2;
    ctx.strokeRect(0, 0, w, h * 0.83);
  }

  static drawCuticleLayer(ctx, w, h) {
    // Waxy cuticle - waterproof layer
    const gradient = ctx.createLinearGradient(0, 0, 0, h);
    gradient.addColorStop(0, '#F5F5DC');
    gradient.addColorStop(0.5, '#F0E68C');
    gradient.addColorStop(1, '#E6D480');
    
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, w, h);
    
    // Waxy texture
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.3)';
    ctx.lineWidth = 2;
    for(let i = 0; i < 8; i++) {
      ctx.beginPath();
      ctx.moveTo(0, h * (0.1 + i * 0.12));
      ctx.lineTo(w, h * (0.1 + i * 0.12));
      ctx.stroke();
    }
    
    // Shine effect
    ctx.fillStyle = 'rgba(255, 255, 255, 0.5)';
    ctx.beginPath();
    ctx.ellipse(w * 0.3, h * 0.3, w * 0.2, h * 0.15, 0.3, 0, Math.PI * 2);
    ctx.fill();
    
    // Labels
    ctx.fillStyle = '#000000';
    ctx.font = `bold ${h * 0.08}px Arial`;
    ctx.fillText('Waxy Cuticle Layer', w * 0.05, h * 0.5);
    ctx.font = `${h * 0.05}px Arial`;
    ctx.fillText('(Waterproof protection)', w * 0.05, h * 0.65);
    
    ctx.strokeStyle = '#000000';
    ctx.lineWidth = 3;
    ctx.strokeRect(0, 0, w, h);
  }

  static drawEpidermisLayer(ctx, w, h) {
    // Upper epidermis cells
    ctx.fillStyle = '#E8DDA0';
    
    const cellWidth = w / 8;
    const cellHeight = h * 0.4;
    
    // Draw rectangular epidermal cells
    for(let i = 0; i < 8; i++) {
      ctx.strokeStyle = '#8B7355';
      ctx.lineWidth = 2;
      ctx.strokeRect(i * cellWidth, 0, cellWidth, cellHeight);
      
      // Cell membrane
      ctx.fillStyle = '#D4C4A0';
      ctx.fillRect(i * cellWidth + 2, 2, cellWidth - 4, cellHeight - 4);
    }
    
    // Lower epidermis with stomata
    for(let i = 0; i < 8; i++) {
      ctx.strokeStyle = '#8B7355';
      ctx.lineWidth = 2;
      ctx.strokeRect(i * cellWidth, h * 0.6, cellWidth, cellHeight);
      
      ctx.fillStyle = '#D4C4A0';
      ctx.fillRect(i * cellWidth + 2, h * 0.6 + 2, cellWidth - 4, cellHeight - 4);
    }
    
    // Guard cells and stomata
    this.drawStomata(ctx, w * 0.25, h * 0.7, w * 0.12, h * 0.15, true);
    this.drawStomata(ctx, w * 0.65, h * 0.7, w * 0.12, h * 0.15, false);
    
    // Labels
    ctx.fillStyle = '#000000';
    ctx.font = `bold ${h * 0.06}px Arial`;
    ctx.fillText('Upper Epidermis', w * 0.05, h * 0.25);
    ctx.fillText('Lower Epidermis', w * 0.05, h * 0.55);
    
    ctx.font = `${h * 0.045}px Arial`;
    ctx.fillText('(with stomata)', w * 0.05, h * 0.95);
  }

  static drawPalisadeLayer(ctx, w, h) {
    // Palisade mesophyll - columnar cells packed with chloroplasts
    const cellWidth = w / 10;
    const cellHeight = h * 0.9;
    
    for(let i = 0; i < 10; i++) {
      // Cell outline
      ctx.strokeStyle = '#2D5016';
      ctx.lineWidth = 2;
      ctx.fillStyle = '#4A7C2B';
      
      ctx.beginPath();
      ctx.roundRect(i * cellWidth + cellWidth * 0.1, h * 0.05, cellWidth * 0.8, cellHeight, cellWidth * 0.15);
      ctx.fill();
      ctx.stroke();
      
      // Chloroplasts (many per cell)
      ctx.fillStyle = '#1A3D0A';
      for(let j = 0; j < 8; j++) {
        ctx.beginPath();
        ctx.ellipse(
          i * cellWidth + cellWidth * 0.5,
          h * 0.1 + j * (cellHeight / 8),
          cellWidth * 0.15,
          h * 0.04,
          0, 0, Math.PI * 2
        );
        ctx.fill();
      }
      
      // Nucleus
      ctx.fillStyle = '#8B4513';
      ctx.beginPath();
      ctx.arc(i * cellWidth + cellWidth * 0.5, h * 0.5, cellWidth * 0.12, 0, Math.PI * 2);
      ctx.fill();
    }
    
    // Light arrows showing photosynthesis
    ctx.fillStyle = '#FFD700';
    for(let i = 0; i < 5; i++) {
      ctx.beginPath();
      ctx.moveTo((i * 2 + 1) * cellWidth, 0);
      ctx.lineTo((i * 2 + 1) * cellWidth - cellWidth * 0.2, h * 0.15);
      ctx.lineTo((i * 2 + 1) * cellWidth + cellWidth * 0.2, h * 0.15);
      ctx.fill();
    }
    
    // Labels
    ctx.fillStyle = '#FFFFFF';
    ctx.font = `bold ${h * 0.06}px Arial`;
    ctx.fillText('Palisade Mesophyll', w * 0.25, h * 0.5);
    ctx.font = `${h * 0.04}px Arial`;
    ctx.fillText('(Primary photosynthesis site)', w * 0.22, h * 0.57);
  }

  static drawSpongyLayer(ctx, w, h) {
    // Spongy mesophyll - irregular cells with large air spaces
    ctx.fillStyle = '#6B8E4E';
    ctx.fillRect(0, 0, w, h);
    
    // Irregular spongy cells
    const cells = [
      {x: 0.15, y: 0.2, w: 0.15, h: 0.25},
      {x: 0.35, y: 0.15, w: 0.18, h: 0.3},
      {x: 0.6, y: 0.25, w: 0.2, h: 0.28},
      {x: 0.1, y: 0.55, w: 0.16, h: 0.22},
      {x: 0.4, y: 0.5, w: 0.19, h: 0.27},
      {x: 0.65, y: 0.6, w: 0.17, h: 0.25},
    ];
    
    cells.forEach(cell => {
      // Cell body
      ctx.fillStyle = '#5A7D3E';
      ctx.strokeStyle = '#3D5A28';
      ctx.lineWidth = 2;
      
      ctx.beginPath();
      ctx.ellipse(cell.x * w, cell.y * h, cell.w * w, cell.h * h, 0, 0, Math.PI * 2);
      ctx.fill();
      ctx.stroke();
      
      // Chloroplasts (fewer than palisade)
      ctx.fillStyle = '#2D4A1A';
      for(let i = 0; i < 4; i++) {
        const angle = (i / 4) * Math.PI * 2;
        ctx.beginPath();
        ctx.arc(
          cell.x * w + Math.cos(angle) * cell.w * w * 0.4,
          cell.y * h + Math.sin(angle) * cell.h * h * 0.4,
          w * 0.015,
          0, Math.PI * 2
        );
        ctx.fill();
      }
      
      // Nucleus
      ctx.fillStyle = '#8B4513';
      ctx.beginPath();
      ctx.arc(cell.x * w, cell.y * h, w * 0.02, 0, Math.PI * 2);
      ctx.fill();
    });
    
    // Air spaces (white/light areas)
    ctx.fillStyle = 'rgba(255, 255, 255, 0.7)';
    const airSpaces = [
      {x: 0.08, y: 0.35, r: 0.08},
      {x: 0.28, y: 0.4, r: 0.1},
      {x: 0.52, y: 0.38, r: 0.09},
      {x: 0.78, y: 0.45, r: 0.11},
      {x: 0.2, y: 0.75, r: 0.07},
      {x: 0.5, y: 0.82, r: 0.08},
      {x: 0.75, y: 0.85, r: 0.09},
    ];
    
    airSpaces.forEach(space => {
      ctx.beginPath();
      ctx.arc(space.x * w, space.y * h, space.r * w, 0, Math.PI * 2);
      ctx.fill();
    });
    
    // Gas exchange arrows
    ctx.strokeStyle = '#00BFFF';
    ctx.lineWidth = 3;
    ctx.setLineDash([5, 5]);
    
    // CO2 pathways
    ctx.beginPath();
    ctx.moveTo(w * 0.1, h * 0.95);
    ctx.lineTo(w * 0.15, h * 0.7);
    ctx.stroke();
    
    ctx.beginPath();
    ctx.moveTo(w * 0.5, h * 0.95);
    ctx.lineTo(w * 0.52, h * 0.6);
    ctx.stroke();
    
    ctx.setLineDash([]);
    
    // Labels
    ctx.fillStyle = '#FFFFFF';
    ctx.font = `bold ${h * 0.06}px Arial`;
    ctx.fillText('Spongy Mesophyll', w * 0.28, h * 0.12);
    
    ctx.fillStyle = '#000000';
    ctx.font = `${h * 0.04}px Arial`;
    ctx.fillText('Air Spaces', w * 0.05, h * 0.5);
    ctx.fillText('(Gas Exchange)', w * 0.05, h * 0.56);
  }

  static drawVascularBundle(ctx, w, h) {
    const centerX = w * 0.5;
    const centerY = h * 0.5;
    
    // Bundle sheath
    ctx.fillStyle = '#D2B48C';
    ctx.strokeStyle = '#8B7355';
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.ellipse(centerX, centerY, w * 0.35, h * 0.4, 0, 0, Math.PI * 2);
    ctx.fill();
    ctx.stroke();
    
    // Phloem (top half) - smaller cells
    ctx.fillStyle = '#228B22';
    ctx.strokeStyle = '#1A6B1A';
    ctx.lineWidth = 2;
    
    // Sieve tube elements
    const phloemCells = 6;
    const phloemRadius = w * 0.25;
    
    for(let i = 0; i < phloemCells; i++) {
      const angle = (i / phloemCells) * Math.PI - Math.PI / 2;
      const x = centerX + Math.cos(angle) * phloemRadius * 0.5;
      const y = centerY - h * 0.15 + Math.sin(angle) * h * 0.1;
      
      ctx.beginPath();
      ctx.arc(x, y, w * 0.04, 0, Math.PI * 2);
      ctx.fill();
      ctx.stroke();
      
      // Sieve plates
      ctx.strokeStyle = '#FFD700';
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.moveTo(x - w * 0.03, y);
      ctx.lineTo(x + w * 0.03, y);
      ctx.stroke();
      
      ctx.strokeStyle = '#1A6B1A';
      ctx.lineWidth = 2;
    }
    
    // Companion cells
    ctx.fillStyle = '#32CD32';
    for(let i = 0; i < 4; i++) {
      const angle = (i / 4) * Math.PI - Math.PI / 2;
      const x = centerX + Math.cos(angle) * phloemRadius * 0.8;
      const y = centerY - h * 0.15 + Math.sin(angle) * h * 0.12;
      
      ctx.beginPath();
      ctx.arc(x, y, w * 0.025, 0, Math.PI * 2);
      ctx.fill();
      ctx.stroke();
    }
    
    // Cambium (dividing line)
    ctx.strokeStyle = '#8B4513';
    ctx.lineWidth = 2;
    ctx.setLineDash([5, 3]);
    ctx.beginPath();
    ctx.moveTo(centerX - w * 0.3, centerY);
    ctx.lineTo(centerX + w * 0.3, centerY);
    ctx.stroke();
    ctx.setLineDash([]);
    
    // Xylem (bottom half) - larger, thicker-walled cells
    ctx.fillStyle = '#A0522D';
    ctx.strokeStyle = '#654321';
    ctx.lineWidth = 3;
    
    // Vessel elements
    const xylemCells = 5;
    for(let i = 0; i < xylemCells; i++) {
      const x = centerX - w * 0.2 + (i / (xylemCells - 1)) * w * 0.4;
      const y = centerY + h * 0.15;
      
      ctx.beginPath();
      ctx.arc(x, y, w * 0.055, 0, Math.PI * 2);
      ctx.fill();
      ctx.stroke();
      
      // Lignin rings (secondary cell wall thickening)
      ctx.strokeStyle = '#8B4513';
      ctx.lineWidth = 2;
      for(let j = 0; j < 3; j++) {
        ctx.beginPath();
        ctx.arc(x, y, w * 0.055 - j * w * 0.012, 0, Math.PI * 2);
        ctx.stroke();
      }
      
      // Hollow center (lumen)
      ctx.fillStyle = '#FFFFFF';
      ctx.beginPath();
      ctx.arc(x, y, w * 0.025, 0, Math.PI * 2);
      ctx.fill();
      
      ctx.fillStyle = '#A0522D';
      ctx.strokeStyle = '#654321';
      ctx.lineWidth = 3;
    }
    
    // Flow direction arrows
    // Phloem - bidirectional (sugar transport)
    ctx.fillStyle = '#90EE90';
    ctx.beginPath();
    ctx.moveTo(w * 0.1, centerY - h * 0.2);
    ctx.lineTo(w * 0.05, centerY - h * 0.15);
    ctx.lineTo(w * 0.05, centerY - h * 0.25);
    ctx.fill();
    
    ctx.beginPath();
    ctx.moveTo(w * 0.9, centerY - h * 0.2);
    ctx.lineTo(w * 0.95, centerY - h * 0.15);
    ctx.lineTo(w * 0.95, centerY - h * 0.25);
    ctx.fill();
    
    // Xylem - upward (water transport)
    ctx.fillStyle = '#87CEEB';
    for(let i = 0; i < 3; i++) {
      ctx.beginPath();
      const arrowX = w * 0.3 + i * w * 0.2;
      ctx.moveTo(arrowX, centerY + h * 0.35);
      ctx.lineTo(arrowX - w * 0.02, centerY + h * 0.3);
      ctx.lineTo(arrowX + w * 0.02, centerY + h * 0.3);
      ctx.fill();
    }
    
    // Labels
    ctx.fillStyle = '#000000';
    ctx.font = `bold ${h * 0.05}px Arial`;
    ctx.fillText('Phloem', w * 0.42, centerY - h * 0.28);
    ctx.font = `${h * 0.035}px Arial`;
    ctx.fillText('(Sugar transport)', w * 0.36, centerY - h * 0.23);
    
    ctx.font = `bold ${h * 0.05}px Arial`;
    ctx.fillText('Xylem', w * 0.44, centerY + h * 0.38);
    ctx.font = `${h * 0.035}px Arial`;
    ctx.fillText('(Water transport)', w * 0.36, centerY + h * 0.43);
  }

  static drawStomata(ctx, x, y, w, h, isOpen) {
    ctx.save();
    ctx.translate(x, y);
    
    if(isOpen) {
      // Open stomata - guard cells curved, pore visible
      // Left guard cell
      ctx.fillStyle = '#90EE90';
      ctx.strokeStyle = '#228B22';
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.ellipse(-w * 0.25, 0, w * 0.2, h * 0.4, -0.3, 0, Math.PI * 2);
      ctx.fill();
      ctx.stroke();
      
      // Right guard cell
      ctx.beginPath();
      ctx.ellipse(w * 0.25, 0, w * 0.2, h * 0.4, 0.3, 0, Math.PI * 2);
      ctx.fill();
      ctx.stroke();
      
      // Stomatal pore (opening)
      ctx.fillStyle = '#000000';
      ctx.beginPath();
      ctx.ellipse(0, 0, w * 0.15, h * 0.25, 0, 0, Math.PI * 2);
      ctx.fill();
      
      // Water/gas indicators
      ctx.fillStyle = 'rgba(135, 206, 235, 0.5)';
      for(let i = 0; i < 3; i++) {
        ctx.beginPath();
        ctx.arc(-w * 0.1 + i * w * 0.1, h * 0.6 + i * h * 0.1, w * 0.03, 0, Math.PI * 2);
        ctx.fill();
      }
    } else {
      // Closed stomata - guard cells straight, no pore
      // Left guard cell
      ctx.fillStyle = '#98FB98';
      ctx.strokeStyle = '#228B22';
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.ellipse(-w * 0.15, 0, w * 0.15, h * 0.45, 0, 0, Math.PI * 2);
      ctx.fill();
      ctx.stroke();
      
      // Right guard cell
      ctx.beginPath();
      ctx.ellipse(w * 0.15, 0, w * 0.15, h * 0.45, 0, 0, Math.PI * 2);
      ctx.fill();
      ctx.stroke();
      
      // No pore visible - cells touching
      ctx.strokeStyle = '#006400';
      ctx.lineWidth = 3;
      ctx.beginPath();
      ctx.moveTo(0, -h * 0.4);
      ctx.lineTo(0, h * 0.4);
      ctx.stroke();
    }
    
    ctx.restore();
  }

  // ===== PHOTOSYNTHESIS =====
  static drawPhotosynthesis(ctx, x, y, width, height, stage, detail) {
    ctx.save();
    ctx.translate(x, y);
    
    switch(stage) {
      case 'complete':
        this.drawCompletePhotosynthesis(ctx, width, height);
        break;
      case 'light-reactions':
        this.drawLightReactions(ctx, width, height, detail);
        break;
      case 'calvin-cycle':
        this.drawCalvinCycle(ctx, width, height, detail);
        break;
      case 'electron-transport':
        this.drawElectronTransport(ctx, width, height);
        break;
    }
    
    ctx.restore();
  }

  static drawCompletePhotosynthesis(ctx, w, h) {
    // Chloroplast outline
    ctx.fillStyle = '#E8F5E9';
    ctx.strokeStyle = '#2E7D32';
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.ellipse(w * 0.5, h * 0.5, w * 0.45, h * 0.4, 0, 0, Math.PI * 2);
    ctx.fill();
    ctx.stroke();
    
    // Thylakoid membrane (left side - light reactions)
    const thylakoidX = w * 0.3;
    const thylakoidY = h * 0.5;
    
    // Granum stack
    for(let i = 0; i < 5; i++) {
      const gradient = ctx.createLinearGradient(
        thylakoidX - w * 0.15, 
        thylakoidY - h * 0.15 + i * h * 0.08,
        thylakoidX + w * 0.15,
        thylakoidY - h * 0.15 + i * h * 0.08
      );
      gradient.addColorStop(0, '#1B5E20');
      gradient.addColorStop(0.5, '#2E7D32');
      gradient.addColorStop(1, '#1B5E20');
      
      ctx.fillStyle = gradient;
      ctx.fillRect(
        thylakoidX - w * 0.15,
        thylakoidY - h * 0.15 + i * h * 0.08,
        w * 0.3,
        h * 0.05
      );
      
      ctx.strokeStyle = '#0D3818';
      ctx.lineWidth = 1;
      ctx.strokeRect(
        thylakoidX - w * 0.15,
        thylakoidY - h * 0.15 + i * h * 0.08,
        w * 0.3,
        h * 0.05
      );
    }
    
    // Light energy arrows
    ctx.fillStyle = '#FFD700';
    for(let i = 0; i < 4; i++) {
      ctx.beginPath();
      ctx.moveTo(thylakoidX - w * 0.08 + i * w * 0.05, h * 0.05);
      ctx.lineTo(thylakoidX - w * 0.1 + i * w * 0.05, h * 0.2);
      ctx.lineTo(thylakoidX - w * 0.06 + i * w * 0.05, h * 0.2);
      ctx.fill();
    }
    
    // Light label
    ctx.fillStyle = '#FF6F00';
    ctx.font = `bold ${h * 0.05}px Arial`;
    ctx.fillText('LIGHT', thylakoidX - w * 0.08, h * 0.12);
    
    // Stroma (right side - Calvin cycle)
    const stromaX = w * 0.7;
    const stromaY = h * 0.5;
    
    // Calvin cycle circle
    ctx.strokeStyle = '#388E3C';
    ctx.lineWidth = 4;
    ctx.beginPath();
    ctx.arc(stromaX, stromaY, w * 0.15, 0, Math.PI * 2);
    ctx.stroke();
    
    // Cycle arrows
    for(let i = 0; i < 3; i++) {
      const angle = (i / 3) * Math.PI * 2 - Math.PI / 2;
      const arrowX = stromaX + Math.cos(angle) * w * 0.15;
      const arrowY = stromaY + Math.sin(angle) * w * 0.15;
      
      ctx.fillStyle = '#66BB6A';
      ctx.beginPath();
      ctx.arc(arrowX, arrowY, w * 0.02, 0, Math.PI * 2);
      ctx.fill();
      
      // Arrow head
      const nextAngle = angle + Math.PI / 6;
      ctx.fillStyle = '#388E3C';
      ctx.beginPath();
      ctx.moveTo(
        arrowX + Math.cos(nextAngle) * w * 0.03,
        arrowY + Math.sin(nextAngle) * w * 0.03
      );
      ctx.lineTo(
        arrowX + Math.cos(nextAngle - 0.5) * w * 0.04,
        arrowY + Math.sin(nextAngle - 0.5) * w * 0.04
      );
      ctx.lineTo(
        arrowX + Math.cos(nextAngle + 0.5) * w * 0.04,
        arrowY + Math.sin(nextAngle + 0.5) * w * 0.04
      );
      ctx.fill();
    }
    
    // Inputs/Outputs
    // Water (H2O) input
    ctx.fillStyle = '#2196F3';
    ctx.font = `bold ${h * 0.045}px Arial`;
    ctx.fillText('H₂O', w * 0.05, h * 0.3);
    
    ctx.strokeStyle = '#2196F3';
    ctx.lineWidth = 3;
    ctx.setLineDash([5, 5]);
    ctx.beginPath();
    ctx.moveTo(w * 0.1, h * 0.32);
    ctx.lineTo(thylakoidX - w * 0.1, thylakoidY);
    ctx.stroke();
    
    // CO2 input
    ctx.fillStyle = '#FF5722';
    ctx.fillText('CO₂', w * 0.5, h * 0.1);
    
    ctx.strokeStyle = '#FF5722';
    ctx.beginPath();
    ctx.moveTo(w * 0.55, h * 0.12);
    ctx.lineTo(stromaX, stromaY - w * 0.15);
    ctx.stroke();
    
    // O2 output
    ctx.fillStyle = '#4CAF50';
    ctx.fillText('O₂', w * 0.1, h * 0.7);
    
    ctx.strokeStyle = '#4CAF50';
    ctx.beginPath();
    ctx.moveTo(thylakoidX, thylakoidY + h * 0.15);
    ctx.lineTo(w * 0.15, h * 0.68);
    ctx.stroke();
    
    // Glucose output
    ctx.fillStyle = '#FF9800';
    ctx.fillText('C₆H₁₂O₆', w * 0.8, h * 0.85);
    ctx.font = `${h * 0.035}px Arial`;
    ctx.fillText('(Glucose)', w * 0.8, h * 0.9);
    
    ctx.strokeStyle = '#FF9800';
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.moveTo(stromaX, stromaY + w * 0.15);
    ctx.lineTo(w * 0.8, h * 0.82);
    ctx.stroke();
    
    ctx.setLineDash([]);
    
    // ATP/NADPH connection
    ctx.strokeStyle = '#9C27B0';
    ctx.lineWidth = 4;
    ctx.beginPath();
    ctx.moveTo(thylakoidX + w * 0.12, stromaY);
    ctx.lineTo(stromaX - w * 0.18, stromaY);
    ctx.stroke();
    
    // Arrow on connection
    ctx.fillStyle = '#9C27B0';
    ctx.beginPath();
    ctx.moveTo(stromaX - w * 0.18, stromaY);
    ctx.lineTo(stromaX - w * 0.21, stromaY - h * 0.02);
    ctx.lineTo(stromaX - w * 0.21, stromaY + h * 0.02);
    ctx.fill();
    
    ctx.font = `${h * 0.035}px Arial`;
    ctx.fillText('ATP', w * 0.45, stromaY - h * 0.05);
    ctx.fillText('NADPH', w * 0.45, stromaY + h * 0.08);
    
    // Main labels
    ctx.fillStyle = '#1B5E20';
    ctx.font = `bold ${h * 0.055}px Arial`;
    ctx.fillText('Light Reactions', thylakoidX - w * 0.1, h * 0.85);
    ctx.fillText('Calvin Cycle', stromaX - w * 0.08, h * 0.85);
    
    // Overall equation at top
    ctx.fillStyle = '#000000';
    ctx.font = `bold ${h * 0.04}px Arial`;
    ctx.fillText('6CO₂ + 6H₂O + Light Energy → C₆H₁₂O₆ + 6O₂', w * 0.15, h * 0.95);
  }

  static drawLightReactions(ctx, w, h, detail) {
    // Thylakoid membrane
    ctx.fillStyle = '#C8E6C9';
    ctx.strokeStyle = '#2E7D32';
    ctx.lineWidth = 3;
    ctx.fillRect(0, h * 0.3, w, h * 0.4);
    ctx.strokeRect(0, h * 0.3, w, h * 0.4);
    
    // Thylakoid lumen (inside)
    ctx.fillStyle = '#E8F5E9';
    ctx.fillRect(0, h * 0.35, w, h * 0.1);
    
    // Stroma (outside)
    ctx.fillStyle = '#F1F8E9';
    ctx.fillRect(0, 0, w, h * 0.3);
    ctx.fillRect(0, h * 0.7, w, h * 0.3);
    
    // Photosystem II (left)
    const psIIX = w * 0.2;
    const psIIY = h * 0.5;
    
    ctx.fillStyle = '#4CAF50';
    ctx.strokeStyle = '#1B5E20';
    ctx.lineWidth = 2;
    ctx.fillRect(psIIX - w * 0.06, psIIY - h * 0.15, w * 0.12, h * 0.3);
    ctx.strokeRect(psIIX - w * 0.06, psIIY - h * 0.15, w * 0.12, h * 0.3);
    
    ctx.fillStyle = '#FFFFFF';
    ctx.font = `bold ${h * 0.04}px Arial`;
    ctx.fillText('PSII', psIIX - w * 0.03, psIIY);
    
    // Light hitting PSII
    ctx.fillStyle = '#FFD700';
    for(let i = 0; i < 3; i++) {
      ctx.beginPath();
      ctx.moveTo(psIIX - w * 0.02 + i * w * 0.02, h * 0.05);
      ctx.lineTo(psIIX - w * 0.025 + i * w * 0.02, psIIY - h * 0.17);
      ctx.lineTo(psIIX + w * 0.025 + i * w * 0.02, psIIY - h * 0.17);
      ctx.fill();
    }
    
    // Water splitting
    ctx.fillStyle = '#2196F3';
    ctx.font = `${h * 0.035}px Arial`;
    ctx.fillText('2H₂O', psIIX - w * 0.04, psIIY + h * 0.22);
    
    ctx.strokeStyle = '#2196F3';
    ctx.lineWidth = 2;
    ctx.setLineDash([3, 3]);
    ctx.beginPath();
    ctx.moveTo(psIIX, psIIY + h * 0.2);
    ctx.lineTo(psIIX, psIIY + h * 0.15);
    ctx.stroke();
    
    // Oxygen release
    ctx.fillStyle = '#4CAF50';
    ctx.fillText('O₂', psIIX + w * 0.08, psIIY + h * 0.22);
    
    ctx.strokeStyle = '#4CAF50';
    ctx.beginPath();
    ctx.moveTo(psIIX, psIIY + h * 0.15);
    ctx.lineTo(psIIX + w * 0.06, psIIY + h * 0.2);
    ctx.stroke();
    
    // Protons into lumen
    ctx.fillStyle = '#FF5722';
    ctx.fillText('4H⁺', psIIX - w * 0.03, h * 0.42);
    
    ctx.setLineDash([]);
    
    // Electron transport chain
    const etcPoints = [
      {x: 0.35, y: 0.5, label: 'Pq'},
      {x: 0.5, y: 0.5, label: 'Cyt b₆f'},
      {x: 0.65, y: 0.5, label: 'Pc'}
    ];
    
    etcPoints.forEach((point, i) => {
      ctx.fillStyle = '#FF9800';
      ctx.strokeStyle = '#E65100';
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.arc(point.x * w, point.y * h, w * 0.04, 0, Math.PI * 2);
      ctx.fill();
      ctx.stroke();
      
      ctx.fillStyle = '#000000';
      ctx.font = `${h * 0.03}px Arial`;
      ctx.fillText(point.label, point.x * w - w * 0.02, point.y * h + h * 0.08);
      
      // Electron flow arrows
      if(i < etcPoints.length - 1) {
        ctx.strokeStyle = '#1976D2';
        ctx.lineWidth = 3;
        ctx.beginPath();
        ctx.moveTo(point.x * w + w * 0.04, point.y * h);
        ctx.lineTo(etcPoints[i + 1].x * w - w * 0.04, etcPoints[i + 1].y * h);
        ctx.stroke();
        
        // Electron markers
        ctx.fillStyle = '#1976D2';
        ctx.beginPath();
        ctx.arc((point.x + etcPoints[i + 1].x) * w / 2, point.y * h, w * 0.01, 0, Math.PI * 2);
        ctx.fill();
        
        ctx.fillStyle = '#FFFFFF';
        ctx.font = `bold ${h * 0.025}px Arial`;
        ctx.fillText('e⁻', (point.x + etcPoints[i + 1].x) * w / 2 - w * 0.008, point.y * h + h * 0.008);
      }
    });
    
    // Cytochrome b6f pumping protons
    ctx.fillStyle = '#FF5722';
    ctx.font = `${h * 0.03}px Arial`;
    ctx.fillText('H⁺', w * 0.48, h * 0.42);
    
    ctx.strokeStyle = '#FF5722';
    ctx.lineWidth = 2;
    ctx.setLineDash([3, 3]);
    ctx.beginPath();
    ctx.moveTo(w * 0.5, h * 0.54);
    ctx.lineTo(w * 0.5, h * 0.45);
    ctx.stroke();
    ctx.setLineDash([]);
    
    // Photosystem I (right)
    const psIX = w * 0.8;
    const psIY = h * 0.5;
    
    ctx.fillStyle = '#66BB6A';
    ctx.strokeStyle = '#1B5E20';
    ctx.lineWidth = 2;
    ctx.fillRect(psIX - w * 0.06, psIY - h * 0.15, w * 0.12, h * 0.3);
    ctx.strokeRect(psIX - w * 0.06, psIY - h * 0.15, w * 0.12, h * 0.3);
    
    ctx.fillStyle = '#FFFFFF';
    ctx.font = `bold ${h * 0.04}px Arial`;
    ctx.fillText('PSI', psIX - w * 0.025, psIY);
    
    // Light hitting PSI
    ctx.fillStyle = '#FFD700';
    for(let i = 0; i < 3; i++) {
      ctx.beginPath();
      ctx.moveTo(psIX - w * 0.02 + i * w * 0.02, h * 0.05);
      ctx.lineTo(psIX - w * 0.025 + i * w * 0.02, psIY - h * 0.17);
      ctx.lineTo(psIX + w * 0.025 + i * w * 0.02, psIY - h * 0.17);
      ctx.fill();
    }
    
    // Electron from PSI to NADP+
    ctx.strokeStyle = '#1976D2';
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.moveTo(psIX, psIY - h * 0.15);
    ctx.lineTo(psIX, h * 0.25);
    ctx.stroke();
    
    // NADP+ reduction
    ctx.fillStyle = '#9C27B0';
    ctx.font = `bold ${h * 0.035}px Arial`;
    ctx.fillText('NADP⁺ + H⁺', psIX - w * 0.06, h * 0.2);
    
    ctx.fillStyle = '#7B1FA2';
    ctx.beginPath();
    ctx.moveTo(psIX, h * 0.22);
    ctx.lineTo(psIX - w * 0.015, h * 0.25);
    ctx.lineTo(psIX + w * 0.015, h * 0.25);
    ctx.fill();
    
    ctx.fillStyle = '#9C27B0';
    ctx.font = `bold ${h * 0.04}px Arial`;
    ctx.fillText('NADPH', psIX - w * 0.04, h * 0.12);
    
    // ATP Synthase
    const atpX = w * 0.5;
    const atpTopY = h * 0.7;
    
    // Head (F1)
    ctx.fillStyle = '#FFC107';
    ctx.strokeStyle = '#F57C00';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.arc(atpX, atpTopY, w * 0.05, 0, Math.PI * 2);
    ctx.fill();
    ctx.stroke();
    
    // Stalk
    ctx.fillRect(atpX - w * 0.01, atpTopY, w * 0.02, h * 0.1);
    
    // Base (F0)
    ctx.beginPath();
    ctx.ellipse(atpX, h * 0.5, w * 0.04, h * 0.08, 0, 0, Math.PI * 2);
    ctx.fill();
    ctx.stroke();
    
    // Rotation arrow
    ctx.strokeStyle = '#F57C00';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.arc(atpX, atpTopY, w * 0.035, 0, Math.PI * 1.5);
    ctx.stroke();
    
    ctx.fillStyle = '#F57C00';
    ctx.beginPath();
    ctx.moveTo(atpX + w * 0.025, atpTopY - w * 0.025);
    ctx.lineTo(atpX + w * 0.035, atpTopY - w * 0.015);
    ctx.lineTo(atpX + w * 0.025, atpTopY - w * 0.005);
    ctx.fill();
    
    // Proton flow through ATP synthase
    ctx.fillStyle = '#FF5722';
    ctx.font = `${h * 0.03}px Arial`;
    ctx.fillText('H⁺', atpX - w * 0.08, h * 0.48);
    
    ctx.strokeStyle = '#FF5722';
    ctx.lineWidth = 2;
    ctx.setLineDash([3, 3]);
    ctx.beginPath();
    ctx.moveTo(atpX - w * 0.06, h * 0.5);
    ctx.lineTo(atpX + w * 0.06, atpTopY + h * 0.05);
    ctx.stroke();
    ctx.setLineDash([]);
    
    // ATP production
    ctx.fillStyle = '#FFC107';
    ctx.font = `bold ${h * 0.035}px Arial`;
    ctx.fillText('ADP + Pi', atpX - w * 0.05, atpTopY + h * 0.15);
    
    ctx.fillStyle = '#FF6F00';
    ctx.font = `bold ${h * 0.04}px Arial`;
    ctx.fillText('ATP', atpX + w * 0.08, atpTopY);
    
    // Labels
    ctx.fillStyle = '#000000';
    ctx.font = `bold ${h * 0.045}px Arial`;
    ctx.fillText('Thylakoid Lumen', w * 0.35, h * 0.4);
    ctx.fillText('Stroma', w * 0.05, h * 0.15);
    
    // Title
    ctx.font = `bold ${h * 0.06}px Arial`;
    ctx.fillText('Light-Dependent Reactions (Z-Scheme)', w * 0.15, h * 0.95);
  }

  static drawCalvinCycle(ctx, w, h, detail) {
    const centerX = w * 0.5;
    const centerY = h * 0.5;
    const radius = w * 0.35;
    
    // Stroma background
    ctx.fillStyle = '#F1F8E9';
    ctx.fillRect(0, 0, w, h);
    
    // Main cycle circle
    ctx.strokeStyle = '#388E3C';
    ctx.lineWidth = 5;
    ctx.setLineDash([10, 5]);
    ctx.beginPath();
    ctx.arc(centerX, centerY, radius, 0, Math.PI * 2);
    ctx.stroke();
    ctx.setLineDash([]);
    
    // Three phases with positions
    const phases = [
      {
        angle: -Math.PI / 2,
        name: 'Carbon Fixation',
        color: '#E53935',
        molecule: 'RuBP',
        enzyme: 'RuBisCO'
      },
      {
        angle: Math.PI / 6,
        name: 'Reduction',
        color: '#1E88E5',
        molecule: '3-PGA',
        product: 'G3P'
      },
      {
        angle: Math.PI * 5 / 6,
        name: 'Regeneration',
        color: '#43A047',
        molecule: 'G3P',
        regenerate: 'RuBP'
      }
    ];
    
    phases.forEach((phase, i) => {
      const x = centerX + Math.cos(phase.angle) * radius;
      const y = centerY + Math.sin(phase.angle) * radius;
      
      // Phase circle
      ctx.fillStyle = phase.color;
      ctx.strokeStyle = '#000000';
      ctx.lineWidth = 3;
      ctx.beginPath();
      ctx.arc(x, y, w * 0.08, 0, Math.PI * 2);
      ctx.fill();
      ctx.stroke();
      
      // Phase number
      ctx.fillStyle = '#FFFFFF';
      ctx.font = `bold ${h * 0.06}px Arial`;
      ctx.fillText((i + 1).toString(), x - w * 0.015, y + h * 0.02);
      
      // Phase name
      ctx.fillStyle = '#000000';
      ctx.font = `bold ${h * 0.04}px Arial`;
      const labelX = centerX + Math.cos(phase.angle) * (radius + w * 0.15);
      const labelY = centerY + Math.sin(phase.angle) * (radius + h * 0.15);
      ctx.fillText(phase.name, labelX - w * 0.08, labelY);
      
      // Arrow to next phase
      const nextAngle = i < phases.length - 1 ? phases[i + 1].angle : phases[0].angle;
      const arrowStartAngle = phase.angle + (nextAngle - phase.angle) * 0.3;
      const arrowEndAngle = phase.angle + (nextAngle - phase.angle) * 0.7;
      
      ctx.strokeStyle = '#388E3C';
      ctx.lineWidth = 4;
      ctx.beginPath();
      ctx.arc(centerX, centerY, radius, arrowStartAngle, arrowEndAngle);
      ctx.stroke();
      
      // Arrow head
      const arrowX = centerX + Math.cos(arrowEndAngle) * radius;
      const arrowY = centerY + Math.sin(arrowEndAngle) * radius;
      
      ctx.fillStyle = '#388E3C';
      ctx.beginPath();
      ctx.moveTo(arrowX, arrowY);
      ctx.lineTo(
        arrowX - Math.cos(arrowEndAngle - 0.3) * w * 0.03,
        arrowY - Math.sin(arrowEndAngle - 0.3) * w * 0.03
      );
      ctx.lineTo(
        arrowX - Math.cos(arrowEndAngle + 0.3) * w * 0.03,
        arrowY - Math.sin(arrowEndAngle + 0.3) * w * 0.03
      );
      ctx.fill();
    });
    
    // Phase 1 details - Carbon Fixation
    const phase1X = centerX + Math.cos(-Math.PI / 2) * radius;
    const phase1Y = centerY + Math.sin(-Math.PI / 2) * radius;
    
    // CO2 input
    ctx.fillStyle = '#FF5722';
    ctx.font = `bold ${h * 0.045}px Arial`;
    ctx.fillText('CO₂', phase1X - w * 0.15, phase1Y - h * 0.1);
    
    ctx.strokeStyle = '#FF5722';
    ctx.lineWidth = 3;
    ctx.setLineDash([5, 5]);
    ctx.beginPath();
    ctx.moveTo(phase1X - w * 0.1, phase1Y - h * 0.08);
    ctx.lineTo(phase1X - w * 0.05, phase1Y - h * 0.05);
    ctx.stroke();
    ctx.setLineDash([]);
    
    // RuBP (5C) + CO2 (1C) = 3-PGA (3C) x 2
    ctx.fillStyle = '#000000';
    ctx.font = `${h * 0.03}px Arial`;
    ctx.fillText('RuBP (5C)', phase1X + w * 0.1, phase1Y - h * 0.08);
    ctx.fillText('→ 2 × 3-PGA (3C)', phase1X + w * 0.1, phase1Y - h * 0.03);
    
    // RuBisCO enzyme
    ctx.fillStyle = '#D32F2F';
    ctx.font = `italic ${h * 0.025}px Arial`;
    ctx.fillText('(RuBisCO)', phase1X + w * 0.1, phase1Y + h * 0.02);
    
    // Phase 2 details - Reduction
    const phase2X = centerX + Math.cos(Math.PI / 6) * radius;
    const phase2Y = centerY + Math.sin(Math.PI / 6) * radius;
    
    // ATP and NADPH input
    ctx.fillStyle = '#FFC107';
    ctx.font = `bold ${h * 0.035}px Arial`;
    ctx.fillText('ATP', phase2X + w * 0.1, phase2Y + h * 0.05);
    
    ctx.fillStyle = '#9C27B0';
    ctx.fillText('NADPH', phase2X + w * 0.1, phase2Y + h * 0.1);
    
    ctx.strokeStyle = '#9C27B0';
    ctx.lineWidth = 2;
    ctx.setLineDash([3, 3]);
    ctx.beginPath();
    ctx.moveTo(phase2X + w * 0.15, phase2Y + h * 0.08);
    ctx.lineTo(phase2X + w * 0.08, phase2Y + h * 0.03);
    ctx.stroke();
    ctx.setLineDash([]);
    
    // Conversion
    ctx.fillStyle = '#000000';
    ctx.font = `${h * 0.03}px Arial`;
    ctx.fillText('3-PGA → G3P', phase2X - w * 0.12, phase2Y + h * 0.12);
    
    // Phase 3 details - Regeneration
    const phase3X = centerX + Math.cos(Math.PI * 5 / 6) * radius;
    const phase3Y = centerY + Math.sin(Math.PI * 5 / 6) * radius;
    
    // ATP input for regeneration
    ctx.fillStyle = '#FFC107';
    ctx.font = `bold ${h * 0.035}px Arial`;
    ctx.fillText('ATP', phase3X - w * 0.18, phase3Y + h * 0.05);
    
    ctx.strokeStyle = '#FFC107';
    ctx.lineWidth = 2;
    ctx.setLineDash([3, 3]);
    ctx.beginPath();
    ctx.moveTo(phase3X - w * 0.14, phase3Y + h * 0.03);
    ctx.lineTo(phase3X - w * 0.08, phase3Y);
    ctx.stroke();
    ctx.setLineDash([]);
    
    // Regeneration process
    ctx.fillStyle = '#000000';
    ctx.font = `${h * 0.03}px Arial`;
    ctx.fillText('5 × G3P (3C)', phase3X - w * 0.12, phase3Y - h * 0.08);
    ctx.fillText('→ 3 × RuBP (5C)', phase3X - w * 0.12, phase3Y - h * 0.03);
    
    // G3P output (glucose synthesis)
    const outputX = centerX;
    const outputY = centerY + radius + h * 0.2;
    
    ctx.fillStyle = '#FF9800';
    ctx.strokeStyle = '#E65100';
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.roundRect(outputX - w * 0.1, outputY - h * 0.05, w * 0.2, h * 0.08, w * 0.02);
    ctx.fill();
    ctx.stroke();
    
    ctx.fillStyle = '#FFFFFF';
    ctx.font = `bold ${h * 0.045}px Arial`;
    ctx.fillText('G3P Output', outputX - w * 0.065, outputY);
    
    ctx.fillStyle = '#FF9800';
    ctx.font = `${h * 0.03}px Arial`;
    ctx.fillText('(→ Glucose)', outputX - w * 0.05, outputY + h * 0.08);
    
    // Arrow from cycle to output
    ctx.strokeStyle = '#FF9800';
    ctx.lineWidth = 4;
    ctx.beginPath();
    ctx.moveTo(phase2X, phase2Y + h * 0.1);
    ctx.lineTo(outputX, outputY - h * 0.05);
    ctx.stroke();
    
    // Cycle stoichiometry in center
    ctx.fillStyle = '#000000';
    ctx.font = `bold ${h * 0.035}px Arial`;
    ctx.fillText('3 CO₂', centerX - w * 0.04, centerY - h * 0.05);
    ctx.fillText('9 ATP', centerX - w * 0.04, centerY);
    ctx.fillText('6 NADPH', centerX - w * 0.05, centerY + h * 0.05);
    ctx.fillText('↓', centerX - w * 0.01, centerY + h * 0.1);
    ctx.fillText('1 G3P', centerX - w * 0.035, centerY + h * 0.15);
    
    // Title
    ctx.fillStyle = '#1B5E20';
    ctx.font = `bold ${h * 0.06}px Arial`;
    ctx.fillText('Calvin Cycle (Light-Independent Reactions)', w * 0.12, h * 0.95);
  }

  static drawElectronTransport(ctx, w, h) {
    // Energy diagram background
    ctx.fillStyle = '#E3F2FD';
    ctx.fillRect(0, 0, w, h);
    
    // Y-axis (energy level)
    ctx.strokeStyle = '#000000';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(w * 0.1, h * 0.1);
    ctx.lineTo(w * 0.1, h * 0.85);
    ctx.stroke();
    
    // Y-axis label
    ctx.save();
    ctx.translate(w * 0.05, h * 0.5);
    ctx.rotate(-Math.PI / 2);
    ctx.fillStyle = '#000000';
    ctx.font = `bold ${h * 0.04}px Arial`;
    ctx.fillText('Energy Level', -w * 0.1, 0);
    ctx.restore();
    
    // X-axis
    ctx.beginPath();
    ctx.moveTo(w * 0.1, h * 0.85);
    ctx.lineTo(w * 0.95, h * 0.85);
    ctx.stroke();
    
    // Ground state reference line
    ctx.strokeStyle = '#BDBDBD';
    ctx.lineWidth = 1;
    ctx.setLineDash([5, 5]);
    ctx.beginPath();
    ctx.moveTo(w * 0.1, h * 0.7);
    ctx.lineTo(w * 0.95, h * 0.7);
    ctx.stroke();
    ctx.setLineDash([]);
    
    ctx.fillStyle = '#757575';
    ctx.font = `${h * 0.03}px Arial`;
    ctx.fillText('Ground state', w * 0.02, h * 0.72);
    
    // PSII components
    const psIIX = w * 0.25;
    
    // P680 ground state
    ctx.fillStyle = '#4CAF50';
    ctx.beginPath();
    ctx.arc(psIIX, h * 0.7, w * 0.02, 0, Math.PI * 2);
    ctx.fill();
    
    ctx.fillStyle = '#000000';
    ctx.font = `bold ${h * 0.035}px Arial`;
    ctx.fillText('P680', psIIX - w * 0.025, h * 0.75);
    
    // Light excitation (PSII)
    ctx.strokeStyle = '#FFD700';
    ctx.lineWidth = 4;
    ctx.beginPath();
    ctx.moveTo(psIIX, h * 0.7);
    ctx.lineTo(psIIX, h * 0.2);
    ctx.stroke();
    
    // Light arrow
    for(let i = 0; i < 3; i++) {
      ctx.fillStyle = '#FFD700';
      ctx.beginPath();
      ctx.moveTo(psIIX - w * 0.05 + i * w * 0.025, h * 0.1);
      ctx.lineTo(psIIX - w * 0.055 + i * w * 0.025, h * 0.18);
      ctx.lineTo(psIIX - w * 0.045 + i * w * 0.025, h * 0.18);
      ctx.fill();
    }
    
    // P680* excited state
    ctx.fillStyle = '#81C784';
    ctx.beginPath();
    ctx.arc(psIIX, h * 0.2, w * 0.02, 0, Math.PI * 2);
    ctx.fill();
    
    ctx.fillStyle = '#000000';
    ctx.font = `bold ${h * 0.035}px Arial`;
    ctx.fillText('P680*', psIIX - w * 0.03, h * 0.16);
    
    // Electron transport chain points
    const etcPoints = [
      {x: 0.35, y: 0.35, label: 'Pheophytin'},
      {x: 0.43, y: 0.45, label: 'PQA'},
      {x: 0.51, y: 0.5, label: 'PQB'},
      {x: 0.59, y: 0.52, label: 'Cyt b₆f'},
      {x: 0.67, y: 0.54, label: 'Plastocyanin'}
    ];
    
    // Draw ETC path
    ctx.strokeStyle = '#1976D2';
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.moveTo(psIIX, h * 0.2);
    etcPoints.forEach(point => {
      ctx.lineTo(point.x * w, point.y * h);
    });
    ctx.stroke();
    
    // Draw ETC components
    etcPoints.forEach((point, i) => {
      // Component circle
      ctx.fillStyle = '#2196F3';
      ctx.strokeStyle = '#0D47A1';
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.arc(point.x * w, point.y * h, w * 0.025, 0, Math.PI * 2);
      ctx.fill();
      ctx.stroke();
      
      // Label
      ctx.fillStyle = '#000000';
      ctx.font = `${h * 0.028}px Arial`;
      ctx.fillText(point.label, point.x * w - w * 0.035, point.y * h + h * 0.06);
      
      // Electron marker
      if(i > 0) {
        const prevPoint = i === 0 ? {x: psIIX / w, y: 0.2} : etcPoints[i - 1];
        const midX = (prevPoint.x + point.x) * w / 2;
        const midY = (prevPoint.y + point.y) * h / 2;
        
        ctx.fillStyle = '#FFEB3B';
        ctx.strokeStyle = '#F57F17';
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.arc(midX, midY, w * 0.015, 0, Math.PI * 2);
        ctx.fill();
        ctx.stroke();
        
        ctx.fillStyle = '#000000';
        ctx.font = `bold ${h * 0.025}px Arial`;
        ctx.fillText('e⁻', midX - w * 0.008, midY + h * 0.008);
      }
    });
    
    // PSI components
    const psIX = w * 0.77;
    
    // P700 ground state
    ctx.fillStyle = '#66BB6A';
    ctx.beginPath();
    ctx.arc(psIX, h * 0.65, w * 0.02, 0, Math.PI * 2);
    ctx.fill();
    
    ctx.fillStyle = '#000000';
    ctx.font = `bold ${h * 0.035}px Arial`;
    ctx.fillText('P700', psIX - w * 0.025, h * 0.7);
    
    // Electron from plastocyanin to P700
    ctx.strokeStyle = '#1976D2';
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.moveTo(etcPoints[etcPoints.length - 1].x * w, etcPoints[etcPoints.length - 1].y * h);
    ctx.lineTo(psIX, h * 0.65);
    ctx.stroke();
    
    // Light excitation (PSI)
    ctx.strokeStyle = '#FFD700';
    ctx.lineWidth = 4;
    ctx.beginPath();
    ctx.moveTo(psIX, h * 0.65);
    ctx.lineTo(psIX, h * 0.15);
    ctx.stroke();
    
    // Light arrow
    for(let i = 0; i < 3; i++) {
      ctx.fillStyle = '#FFD700';
      ctx.beginPath();
      ctx.moveTo(psIX - w * 0.05 + i * w * 0.025, h * 0.08);
      ctx.lineTo(psIX - w * 0.055 + i * w * 0.025, h * 0.13);
      ctx.lineTo(psIX - w * 0.045 + i * w * 0.025, h * 0.13);
      ctx.fill();
    }
    
    // P700* excited state
    ctx.fillStyle = '#A5D6A7';
    ctx.beginPath();
    ctx.arc(psIX, h * 0.15, w * 0.02, 0, Math.PI * 2);
    ctx.fill();
    
    ctx.fillStyle = '#000000';
    ctx.font = `bold ${h * 0.035}px Arial`;
    ctx.fillText('P700*', psIX - w * 0.03, h * 0.11);
    
    // Ferredoxin and NADP+ reduction
    const fdX = w * 0.87;
    const fdY = h * 0.25;
    
    // Electron to Ferredoxin
    ctx.strokeStyle = '#1976D2';
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.moveTo(psIX, h * 0.15);
    ctx.lineTo(fdX, fdY);
    ctx.stroke();
    
    // Ferredoxin
    ctx.fillStyle = '#FF9800';
    ctx.strokeStyle = '#E65100';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.arc(fdX, fdY, w * 0.025, 0, Math.PI * 2);
    ctx.fill();
    ctx.stroke();
    
    ctx.fillStyle = '#000000';
    ctx.font = `${h * 0.03}px Arial`;
    ctx.fillText('Fd', fdX - w * 0.015, fdY + h * 0.06);
    
    // NADP+ reduction
    const nadpX = w * 0.9;
    const nadpY = h * 0.4;
    
    ctx.strokeStyle = '#1976D2';
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.moveTo(fdX, fdY);
    ctx.lineTo(nadpX, nadpY);
    ctx.stroke();
    
    // NADP+ → NADPH
    ctx.fillStyle = '#9C27B0';
    ctx.strokeStyle = '#4A148C';
    ctx.lineWidth = 2;
    ctx.fillRect(nadpX - w * 0.05, nadpY - h * 0.04, w * 0.1, h * 0.08);
    ctx.strokeRect(nadpX - w * 0.05, nadpY - h * 0.04, w * 0.1, h * 0.08);
    
    ctx.fillStyle = '#FFFFFF';
    ctx.font = `bold ${h * 0.03}px Arial`;
    ctx.fillText('NADP⁺', nadpX - w * 0.035, nadpY - h * 0.01);
    ctx.fillText('↓', nadpX - w * 0.008, nadpY + h * 0.01);
    ctx.fillText('NADPH', nadpX - w * 0.035, nadpY + h * 0.03);
    
    // Water oxidation
    const h2oX = w * 0.15;
    const h2oY = h * 0.7;
    
    ctx.fillStyle = '#2196F3';
    ctx.font = `bold ${h * 0.04}px Arial`;
    ctx.fillText('2H₂O', h2oX, h2oY);
    
    ctx.strokeStyle = '#2196F3';
    ctx.lineWidth = 3;
    ctx.setLineDash([5, 5]);
    ctx.beginPath();
    ctx.moveTo(h2oX + w * 0.04, h2oY - h * 0.02);
    ctx.lineTo(psIIX - w * 0.03, h * 0.68);
    ctx.stroke();
    ctx.setLineDash([]);
    
    ctx.fillStyle = '#000000';
    ctx.font = `${h * 0.035}px Arial`;
    ctx.fillText('→ O₂ + 4H⁺ + 4e⁻', h2oX, h2oY + h * 0.05);
    
    // Proton gradient
    ctx.fillStyle = '#FF5722';
    ctx.font = `bold ${h * 0.035}px Arial`;
    ctx.fillText('H⁺ gradient', w * 0.45, h * 0.92);
    ctx.fillText('(powers ATP synthase)', w * 0.4, h * 0.97);
    
    // Energy levels
    ctx.fillStyle = '#757575';
    ctx.font = `${h * 0.025}px Arial`;
    ctx.fillText('High', w * 0.02, h * 0.15);
    ctx.fillText('Energy', w * 0.02, h * 0.19);
    
    ctx.fillText('Low', w * 0.02, h * 0.8);
    ctx.fillText('Energy', w * 0.02, h * 0.84);
    
    // Title
    ctx.fillStyle = '#1B5E20';
    ctx.font = `bold ${h * 0.05}px Arial`;
    ctx.fillText('Electron Transport Chain (Z-Scheme)', w * 0.2, h * 0.05);
  }

  // ===== FLOWER STRUCTURE =====
  static drawFlowerStructure(ctx, x, y, width, height, component, stage) {
    ctx.save();
    ctx.translate(x, y);
    
    if(component === 'complete') {
      this.drawCompleteFlower(ctx, width, height, stage);
    } else {
      this.drawFlowerComponent(ctx, width, height, component, stage);
    }
    
    ctx.restore();
  }

  static drawCompleteFlower(ctx, w, h, stage) {
    const centerX = w * 0.5;
    const centerY = h * 0.55;
    
    // Stem
    ctx.fillStyle = '#4CAF50';
    ctx.fillRect(centerX - w * 0.02, centerY + h * 0.15, w * 0.04, h * 0.3);
    
    // Receptacle (base of flower)
    ctx.fillStyle = '#8BC34A';
    ctx.beginPath();
    ctx.ellipse(centerX, centerY + h * 0.15, w * 0.08, h * 0.05, 0, 0, Math.PI * 2);
    ctx.fill();
    
    // Sepals (green, underneath)
    for(let i = 0; i < 5; i++) {
      const angle = (i / 5) * Math.PI * 2 - Math.PI / 2;
      ctx.fillStyle = '#689F38';
      ctx.strokeStyle = '#33691E';
      ctx.lineWidth = 2;
      
      ctx.save();
      ctx.translate(centerX, centerY);
      ctx.rotate(angle);
      
      ctx.beginPath();
      ctx.moveTo(0, h * 0.1);
      ctx.quadraticCurveTo(-w * 0.04, h * 0.15, -w * 0.05, h * 0.22);
      ctx.quadraticCurveTo(-w * 0.03, h * 0.25, 0, h * 0.23);
      ctx.quadraticCurveTo(w * 0.03, h * 0.25, w * 0.05, h * 0.22);
      ctx.quadraticCurveTo(w * 0.04, h * 0.15, 0, h * 0.1);
      ctx.fill();
      ctx.stroke();
      
      ctx.restore();
    }
    
    // Petals (colorful)
    for(let i = 0; i < 5; i++) {
      const angle = (i / 5) * Math.PI * 2 - Math.PI / 2 + Math.PI / 10;
      
      const gradient = ctx.createRadialGradient(centerX, centerY, 0, centerX, centerY, w * 0.15);
      gradient.addColorStop(0, '#FFE082');
      gradient.addColorStop(0.5, '#FFC107');
      gradient.addColorStop(1, '#FF6F00');
      
      ctx.fillStyle = gradient;
      ctx.strokeStyle = '#E65100';
      ctx.lineWidth = 2;
      
      ctx.save();
      ctx.translate(centerX, centerY);
      ctx.rotate(angle);
      
      // Petal shape
      ctx.beginPath();
      ctx.moveTo(0, 0);
      ctx.quadraticCurveTo(-w * 0.06, h * 0.05, -w * 0.07, h * 0.12);
      ctx.quadraticCurveTo(-w * 0.05, h * 0.18, 0, h * 0.2);
      ctx.quadraticCurveTo(w * 0.05, h * 0.18, w * 0.07, h * 0.12);
      ctx.quadraticCurveTo(w * 0.06, h * 0.05, 0, 0);
      ctx.fill();
      ctx.stroke();
      
      // Petal veins
      ctx.strokeStyle = 'rgba(230, 81, 0, 0.3)';
      ctx.lineWidth = 1;
      for(let j = -1; j <= 1; j++) {
        ctx.beginPath();
        ctx.moveTo(0, 0);
        ctx.lineTo(j * w * 0.02, h * 0.18);
        ctx.stroke();
      }
      
      ctx.restore();
    }
    
    // Stamens (male parts - around the outside of center)
    for(let i = 0; i < 6; i++) {
      const angle = (i / 6) * Math.PI * 2;
      const stamenX = centerX + Math.cos(angle) * w * 0.08;
      const stamenY = centerY + Math.sin(angle) * w * 0.08;
      
      // Filament
      ctx.strokeStyle = '#FFEB3B';
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(centerX, centerY);
      ctx.lineTo(stamenX, stamenY);
      ctx.stroke();
      
      // Anther (pollen sacs)
      ctx.fillStyle = '#F57C00';
      ctx.strokeStyle = '#E65100';
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.ellipse(stamenX, stamenY, w * 0.015, h * 0.025, angle, 0, Math.PI * 2);
      ctx.fill();
      ctx.stroke();
      
      // Pollen grains (if mature stage)
      if(stage === 'mature' || stage === 'pollination') {
        ctx.fillStyle = '#FFD54F';
        for(let j = 0; j < 3; j++) {
          ctx.beginPath();
          ctx.arc(
            stamenX + (Math.random() - 0.5) * w * 0.02,
            stamenY + (Math.random() - 0.5) * h * 0.03,
            w * 0.004,
            0, Math.PI * 2
          );
          ctx.fill();
        }
      }
    }
    
    // Pistil (female part - center)
    // Ovary (base)
    ctx.fillStyle = '#8BC34A';
    ctx.strokeStyle = '#558B2F';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.ellipse(centerX, centerY, w * 0.04, h * 0.06, 0, 0, Math.PI * 2);
    ctx.fill();
    ctx.stroke();
    
    // Ovules inside ovary
    ctx.fillStyle = '#FFFFFF';
    for(let i = 0; i < 4; i++) {
      const ovuleAngle = (i / 4) * Math.PI * 2;
      ctx.beginPath();
      ctx.arc(
        centerX + Math.cos(ovuleAngle) * w * 0.02,
        centerY + Math.sin(ovuleAngle) * h * 0.03,
        w * 0.008,
        0, Math.PI * 2
      );
      ctx.fill();
    }
    
    // Style (stalk)
    ctx.fillStyle = '#9CCC65';
    ctx.fillRect(centerX - w * 0.008, centerY - h * 0.1, w * 0.016, h * 0.1);
    
    // Stigma (top)
    ctx.fillStyle = '#FDD835';
    ctx.strokeStyle = '#F9A825';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.arc(centerX, centerY - h * 0.1, w * 0.02, 0, Math.PI * 2);
    ctx.fill();
    ctx.stroke();
    
    // Stigma surface texture (sticky for pollen)
    ctx.fillStyle = 'rgba(253, 216, 53, 0.5)';
    for(let i = 0; i < 8; i++) {
      const angle = (i / 8) * Math.PI * 2;
      ctx.beginPath();
      ctx.arc(
        centerX + Math.cos(angle) * w * 0.015,
        centerY - h * 0.1 + Math.sin(angle) * w * 0.015,
        w * 0.005,
        0, Math.PI * 2
      );
      ctx.fill();
    }
    
    // Stage-specific features
    if(stage === 'pollination') {
      // Pollen on stigma
      ctx.fillStyle = '#FF6F00';
      for(let i = 0; i < 8; i++) {
        ctx.beginPath();
        ctx.arc(
          centerX + (Math.random() - 0.5) * w * 0.03,
          centerY - h * 0.1 + (Math.random() - 0.5) * h * 0.03,
          w * 0.004,
          0, Math.PI * 2
        );
        ctx.fill();
      }
      
      // Pollinator (bee/butterfly silhouette)
      const pollinatorX = w * 0.8;
      const pollinatorY = h * 0.3;
      
      ctx.fillStyle = '#FFD54F';
      ctx.strokeStyle = '#000000';
      ctx.lineWidth = 2;
      
      // Bee body
      ctx.beginPath();
      ctx.ellipse(pollinatorX, pollinatorY, w * 0.03, h * 0.04, 0, 0, Math.PI * 2);
      ctx.fill();
      ctx.stroke();
      
      // Stripes
      ctx.strokeStyle = '#000000';
      ctx.lineWidth = 1.5;
      for(let i = 0; i < 3; i++) {
        ctx.beginPath();
        ctx.moveTo(pollinatorX - w * 0.025, pollinatorY - h * 0.03 + i * h * 0.025);
        ctx.lineTo(pollinatorX + w * 0.025, pollinatorY - h * 0.03 + i * h * 0.025);
        ctx.stroke();
      }
      
      // Wings
      ctx.fillStyle = 'rgba(255, 255, 255, 0.7)';
      ctx.strokeStyle = '#000000';
      ctx.lineWidth = 1;
      for(let i = -1; i <= 1; i += 2) {
        ctx.beginPath();
        ctx.ellipse(
          pollinatorX + i * w * 0.02,
          pollinatorY - h * 0.02,
          w * 0.025,
          h * 0.035,
          i * 0.3,
          0, Math.PI * 2
        );
        ctx.fill();
        ctx.stroke();
      }
    } else if(stage === 'fertilization') {
      // Pollen tube growing down style
      ctx.strokeStyle = '#FF9800';
      ctx.lineWidth = 3;
      ctx.setLineDash([5, 5]);
      ctx.beginPath();
      ctx.moveTo(centerX, centerY - h * 0.09);
      ctx.lineTo(centerX + w * 0.005, centerY - h * 0.05);
      ctx.lineTo(centerX - w * 0.005, centerY);
      ctx.stroke();
      ctx.setLineDash([]);
      
      // Pollen tube tip
      ctx.fillStyle = '#FF6F00';
      ctx.beginPath();
      ctx.arc(centerX - w * 0.005, centerY, w * 0.008, 0, Math.PI * 2);
      ctx.fill();
      
      // Label
      ctx.fillStyle = '#000000';
      ctx.font = `${h * 0.03}px Arial`;
      ctx.fillText('Pollen tube', centerX + w * 0.02, centerY - h * 0.05);
    } else if(stage === 'seed-development') {
      // Developing seeds in ovary
      ctx.fillStyle = '#795548';
      for(let i = 0; i < 4; i++) {
        const seedAngle = (i / 4) * Math.PI * 2;
        ctx.beginPath();
        ctx.ellipse(
          centerX + Math.cos(seedAngle) * w * 0.02,
          centerY + Math.sin(seedAngle) * h * 0.03,
          w * 0.012,
          h * 0.018,
          seedAngle,
          0, Math.PI * 2
        );
        ctx.fill();
      }
      
      // Ovary enlarging
      ctx.strokeStyle = '#558B2F';
      ctx.lineWidth = 3;
      ctx.beginPath();
      ctx.ellipse(centerX, centerY, w * 0.05, h * 0.08, 0, 0, Math.PI * 2);
      ctx.stroke();
    }
    
    // Labels
    ctx.fillStyle = '#000000';
    ctx.font = `bold ${h * 0.035}px Arial`;
    
    if(stage === 'mature') {
      ctx.fillText('Stigma', centerX + w * 0.05, centerY - h * 0.1);
      ctx.fillText('Style', centerX + w * 0.05, centerY - h * 0.05);
      ctx.fillText('Ovary', centerX + w * 0.05, centerY);
      ctx.fillText('Anther', centerX + w * 0.12, centerY - h * 0.08);
      ctx.fillText('Filament', centerX + w * 0.12, centerY - h * 0.03);
      ctx.fillText('Petal', centerX - w * 0.25, centerY - h * 0.15);
      ctx.fillText('Sepal', centerX - w * 0.25, centerY + h * 0.2);
      
      // Arrows
      ctx.strokeStyle = '#000000';
      ctx.lineWidth = 1;
      ctx.setLineDash([2, 2]);
      
      ctx.beginPath();
      ctx.moveTo(centerX + w * 0.048, centerY - h * 0.098);
      ctx.lineTo(centerX + w * 0.025, centerY - h * 0.1);
      ctx.stroke();
      
      ctx.beginPath();
      ctx.moveTo(centerX + w * 0.048, centerY - h * 0.048);
      ctx.lineTo(centerX + w * 0.01, centerY - h * 0.05);
      ctx.stroke();
      
      ctx.setLineDash([]);
    }
    
    // Title
    ctx.fillStyle = '#1B5E20';
    ctx.font = `bold ${h * 0.05}px Arial`;
    const stageText = stage === 'mature' ? 'Mature Flower' :
                      stage === 'pollination' ? 'Pollination' :
                      stage === 'fertilization' ? 'Fertilization' :
                      'Seed Development';
    ctx.fillText(`Flower Anatomy - ${stageText}`, w * 0.2, h * 0.05);
  }

  static drawFlowerComponent(ctx, w, h, component, stage) {
    const centerX = w * 0.5;
    const centerY = h * 0.5;
    
    switch(component) {
      case 'petals':
        // Single petal detail
        const gradient = ctx.createRadialGradient(centerX, centerY - h * 0.2, 0, centerX, centerY, h * 0.4);
        gradient.addColorStop(0, '#FFF9C4');
        gradient.addColorStop(0.3, '#FFD54F');
        gradient.addColorStop(0.7, '#FFC107');
        gradient.addColorStop(1, '#FF6F00');
        
        ctx.fillStyle = gradient;
        ctx.strokeStyle = '#E65100';
        ctx.lineWidth = 3;
        
        ctx.beginPath();
        ctx.moveTo(centerX, centerY - h * 0.3);
        ctx.bezierCurveTo(
          centerX - w * 0.2, centerY - h * 0.2,
          centerX - w * 0.25, centerY + h * 0.1,
          centerX - w * 0.15, centerY + h * 0.3
        );
        ctx.bezierCurveTo(
          centerX - w * 0.1, centerY + h * 0.35,
          centerX + w * 0.1, centerY + h * 0.35,
          centerX + w * 0.15, centerY + h * 0.3
        );
        ctx.bezierCurveTo(
          centerX + w * 0.25, centerY + h * 0.1,
          centerX + w * 0.2, centerY - h * 0.2,
          centerX, centerY - h * 0.3
        );
        ctx.fill();
        ctx.stroke();
        // Petal veins
        ctx.strokeStyle = 'rgba(230, 81, 0, 0.4)';
        ctx.lineWidth = 2;
        for(let i = -3; i <= 3; i++) {
          ctx.beginPath();
          ctx.moveTo(centerX, centerY - h * 0.28);
          ctx.quadraticCurveTo(
            centerX + i * w * 0.04,
            centerY,
            centerX + i * w * 0.025,
            centerY + h * 0.28
          );
          ctx.stroke();
        }
        
        // Nectar guide (UV pattern)
        ctx.strokeStyle = 'rgba(156, 39, 176, 0.3)';
        ctx.lineWidth = 1;
        for(let i = 0; i < 5; i++) {
          ctx.beginPath();
          ctx.arc(centerX, centerY, h * 0.05 + i * h * 0.04, 0, Math.PI * 2);
          ctx.stroke();
        }
        
        ctx.fillStyle = '#000000';
        ctx.font = `bold ${h * 0.05}px Arial`;
        ctx.fillText('Petal Structure', w * 0.3, h * 0.9);
        break;
        
      case 'sepals':
        // Sepal detail
        ctx.fillStyle = '#689F38';
        ctx.strokeStyle = '#33691E';
        ctx.lineWidth = 4;
        
        ctx.beginPath();
        ctx.moveTo(centerX, centerY - h * 0.35);
        ctx.bezierCurveTo(
          centerX - w * 0.15, centerY - h * 0.25,
          centerX - w * 0.18, centerY + h * 0.1,
          centerX - w * 0.12, centerY + h * 0.35
        );
        ctx.lineTo(centerX + w * 0.12, centerY + h * 0.35);
        ctx.bezierCurveTo(
          centerX + w * 0.18, centerY + h * 0.1,
          centerX + w * 0.15, centerY - h * 0.25,
          centerX, centerY - h * 0.35
        );
        ctx.fill();
        ctx.stroke();
        
        // Midrib
        ctx.strokeStyle = '#1B5E20';
        ctx.lineWidth = 3;
        ctx.beginPath();
        ctx.moveTo(centerX, centerY - h * 0.33);
        ctx.lineTo(centerX, centerY + h * 0.33);
        ctx.stroke();
        
        // Side veins
        ctx.lineWidth = 1.5;
        for(let i = -4; i <= 4; i++) {
          const y = centerY - h * 0.2 + i * h * 0.1;
          ctx.beginPath();
          ctx.moveTo(centerX, y);
          ctx.lineTo(centerX - w * 0.1, y + h * 0.03);
          ctx.stroke();
          
          ctx.beginPath();
          ctx.moveTo(centerX, y);
          ctx.lineTo(centerX + w * 0.1, y + h * 0.03);
          ctx.stroke();
        }
        
        ctx.fillStyle = '#000000';
        ctx.font = `bold ${h * 0.05}px Arial`;
        ctx.fillText('Sepal Structure', w * 0.3, h * 0.9);
        break;
        
      case 'stamen':
        // Detailed stamen
        // Filament
        ctx.fillStyle = '#FFF59D';
        ctx.strokeStyle = '#F9A825';
        ctx.lineWidth = 3;
        ctx.fillRect(centerX - w * 0.02, centerY, w * 0.04, h * 0.4);
        ctx.strokeRect(centerX - w * 0.02, centerY, w * 0.04, h * 0.4);
        
        // Anther (two lobes)
        const antherGradient = ctx.createLinearGradient(
          centerX - w * 0.08, centerY - h * 0.15,
          centerX + w * 0.08, centerY - h * 0.15
        );
        antherGradient.addColorStop(0, '#F57C00');
        antherGradient.addColorStop(0.5, '#FF6F00');
        antherGradient.addColorStop(1, '#F57C00');
        
        ctx.fillStyle = antherGradient;
        ctx.strokeStyle = '#E65100';
        ctx.lineWidth = 3;
        
        // Left anther lobe
        ctx.beginPath();
        ctx.ellipse(centerX - w * 0.04, centerY - h * 0.1, w * 0.035, h * 0.12, 0, 0, Math.PI * 2);
        ctx.fill();
        ctx.stroke();
        
        // Right anther lobe
        ctx.beginPath();
        ctx.ellipse(centerX + w * 0.04, centerY - h * 0.1, w * 0.035, h * 0.12, 0, 0, Math.PI * 2);
        ctx.fill();
        ctx.stroke();
        
        // Pollen sacs (microsporangia)
        ctx.fillStyle = '#FFD54F';
        for(let side = -1; side <= 1; side += 2) {
          for(let i = 0; i < 2; i++) {
            ctx.beginPath();
            ctx.ellipse(
              centerX + side * w * 0.04,
              centerY - h * 0.15 + i * h * 0.1,
              w * 0.025,
              h * 0.04,
              0, 0, Math.PI * 2
            );
            ctx.fill();
          }
        }
        
        // Pollen grains
        ctx.fillStyle = '#FFEB3B';
        for(let i = 0; i < 30; i++) {
          const x = centerX + (Math.random() - 0.5) * w * 0.15;
          const y = centerY - h * 0.1 + (Math.random() - 0.5) * h * 0.2;
          ctx.beginPath();
          ctx.arc(x, y, w * 0.005, 0, Math.PI * 2);
          ctx.fill();
          
          // Pollen detail (spiky surface)
          ctx.strokeStyle = '#F9A825';
          ctx.lineWidth = 0.5;
          for(let j = 0; j < 6; j++) {
            const angle = (j / 6) * Math.PI * 2;
            ctx.beginPath();
            ctx.moveTo(x, y);
            ctx.lineTo(x + Math.cos(angle) * w * 0.008, y + Math.sin(angle) * w * 0.008);
            ctx.stroke();
          }
        }
        
        // Connective tissue
        ctx.strokeStyle = '#BF360C';
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(centerX, centerY - h * 0.2);
        ctx.lineTo(centerX, centerY - h * 0.02);
        ctx.stroke();
        
        // Labels
        ctx.fillStyle = '#000000';
        ctx.font = `bold ${h * 0.04}px Arial`;
        ctx.fillText('Anther', centerX + w * 0.1, centerY - h * 0.1);
        ctx.fillText('Filament', centerX + w * 0.05, centerY + h * 0.2);
        ctx.fillText('Pollen', centerX - w * 0.25, centerY - h * 0.15);
        
        ctx.font = `bold ${h * 0.05}px Arial`;
        ctx.fillText('Stamen (Male)', w * 0.3, h * 0.9);
        break;
        
      case 'pistil':
        // Detailed pistil
        // Ovary (base)
        const ovaryGradient = ctx.createRadialGradient(centerX, centerY + h * 0.2, 0, centerX, centerY + h * 0.2, w * 0.15);
        ovaryGradient.addColorStop(0, '#AED581');
        ovaryGradient.addColorStop(0.5, '#8BC34A');
        ovaryGradient.addColorStop(1, '#689F38');
        
        ctx.fillStyle = ovaryGradient;
        ctx.strokeStyle = '#558B2F';
        ctx.lineWidth = 3;
        ctx.beginPath();
        ctx.ellipse(centerX, centerY + h * 0.2, w * 0.12, h * 0.15, 0, 0, Math.PI * 2);
        ctx.fill();
        ctx.stroke();
        
        // Ovary wall (cross-section)
        ctx.strokeStyle = '#33691E';
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.arc(centerX, centerY + h * 0.2, w * 0.11, 0, Math.PI * 2);
        ctx.stroke();
        
        // Ovules inside ovary
        const ovulePositions = [
          {x: 0, y: -0.08},
          {x: -0.06, y: 0},
          {x: 0.06, y: 0},
          {x: -0.04, y: 0.08},
          {x: 0.04, y: 0.08}
        ];
        
        ovulePositions.forEach(pos => {
          // Ovule
          ctx.fillStyle = '#FFF9C4';
          ctx.strokeStyle = '#F9A825';
          ctx.lineWidth = 2;
          ctx.beginPath();
          ctx.ellipse(
            centerX + pos.x * w,
            centerY + h * 0.2 + pos.y * h,
            w * 0.025,
            h * 0.035,
            0, 0, Math.PI * 2
          );
          ctx.fill();
          ctx.stroke();
          
          // Embryo sac
          ctx.fillStyle = '#FFE082';
          ctx.beginPath();
          ctx.ellipse(
            centerX + pos.x * w,
            centerY + h * 0.2 + pos.y * h,
            w * 0.015,
            h * 0.02,
            0, 0, Math.PI * 2
          );
          ctx.fill();
          
          // Egg cell
          ctx.fillStyle = '#FF6F00';
          ctx.beginPath();
          ctx.arc(
            centerX + pos.x * w,
            centerY + h * 0.2 + pos.y * h,
            w * 0.008,
            0, Math.PI * 2
          );
          ctx.fill();
        });
        
        // Placenta (attachment)
        ctx.strokeStyle = '#7CB342';
        ctx.lineWidth = 2;
        ovulePositions.forEach(pos => {
          ctx.beginPath();
          ctx.moveTo(centerX, centerY + h * 0.2);
          ctx.lineTo(centerX + pos.x * w, centerY + h * 0.2 + pos.y * h);
          ctx.stroke();
        });
        
        // Style
        ctx.fillStyle = '#9CCC65';
        ctx.strokeStyle = '#689F38';
        ctx.lineWidth = 3;
        ctx.fillRect(centerX - w * 0.025, centerY - h * 0.15, w * 0.05, h * 0.35);
        ctx.strokeRect(centerX - w * 0.025, centerY - h * 0.15, w * 0.05, h * 0.35);
        
        // Vascular tissue in style
        ctx.strokeStyle = '#33691E';
        ctx.lineWidth = 1.5;
        ctx.setLineDash([3, 3]);
        ctx.beginPath();
        ctx.moveTo(centerX, centerY - h * 0.14);
        ctx.lineTo(centerX, centerY + h * 0.18);
        ctx.stroke();
        ctx.setLineDash([]);
        
        // Stigma
        const stigmaGradient = ctx.createRadialGradient(centerX, centerY - h * 0.15, 0, centerX, centerY - h * 0.15, w * 0.08);
        stigmaGradient.addColorStop(0, '#FFEB3B');
        stigmaGradient.addColorStop(0.6, '#FDD835');
        stigmaGradient.addColorStop(1, '#F9A825');
        
        ctx.fillStyle = stigmaGradient;
        ctx.strokeStyle = '#F57F17';
        ctx.lineWidth = 3;
        ctx.beginPath();
        ctx.arc(centerX, centerY - h * 0.15, w * 0.06, 0, Math.PI * 2);
        ctx.fill();
        ctx.stroke();
        
        // Stigmatic papillae (sticky surface)
        ctx.fillStyle = 'rgba(253, 216, 53, 0.6)';
        for(let i = 0; i < 12; i++) {
          const angle = (i / 12) * Math.PI * 2;
          ctx.beginPath();
          ctx.moveTo(centerX, centerY - h * 0.15);
          ctx.lineTo(
            centerX + Math.cos(angle) * w * 0.05,
            centerY - h * 0.15 + Math.sin(angle) * w * 0.05
          );
          ctx.lineTo(
            centerX + Math.cos(angle) * w * 0.07,
            centerY - h * 0.15 + Math.sin(angle) * w * 0.07
          );
          ctx.fill();
        }
        
        // Labels
        ctx.fillStyle = '#000000';
        ctx.font = `bold ${h * 0.04}px Arial`;
        ctx.fillText('Stigma', centerX + w * 0.1, centerY - h * 0.15);
        ctx.fillText('Style', centerX + w * 0.08, centerY + h * 0.05);
        ctx.fillText('Ovary', centerX + w * 0.15, centerY + h * 0.2);
        ctx.fillText('Ovules', centerX - w * 0.25, centerY + h * 0.15);
        
        ctx.font = `bold ${h * 0.05}px Arial`;
        ctx.fillText('Pistil (Female)', w * 0.3, h * 0.9);
        break;
        
      case 'ovary':
        // Cross-section of ovary
        ctx.fillStyle = '#C8E6C9';
        ctx.strokeStyle = '#388E3C';
        ctx.lineWidth = 4;
        ctx.beginPath();
        ctx.arc(centerX, centerY, w * 0.35, 0, Math.PI * 2);
        ctx.fill();
        ctx.stroke();
        
        // Ovary wall layers
        const wallLayers = [
          {r: 0.33, color: '#66BB6A', label: 'Outer wall'},
          {r: 0.30, color: '#81C784', label: 'Middle layer'},
          {r: 0.27, color: '#A5D6A7', label: 'Inner wall'}
        ];
        
        wallLayers.forEach(layer => {
          ctx.strokeStyle = layer.color;
          ctx.lineWidth = 2;
          ctx.beginPath();
          ctx.arc(centerX, centerY, w * layer.r, 0, Math.PI * 2);
          ctx.stroke();
        });
        
        // Locules (chambers)
        const locules = 3;
        for(let i = 0; i < locules; i++) {
          const angle = (i / locules) * Math.PI * 2 - Math.PI / 2;
          const loculeX = centerX + Math.cos(angle) * w * 0.15;
          const loculeY = centerY + Math.sin(angle) * w * 0.15;
          
          // Locule cavity
          ctx.fillStyle = '#FFFFFF';
          ctx.strokeStyle = '#558B2F';
          ctx.lineWidth = 2;
          ctx.beginPath();
          ctx.ellipse(loculeX, loculeY, w * 0.08, h * 0.1, angle, 0, Math.PI * 2);
          ctx.fill();
          ctx.stroke();
          
          // Ovules in each locule
          for(let j = 0; j < 3; j++) {
            const ovuleAngle = angle + (j - 1) * 0.3;
            const ovuleX = loculeX + Math.cos(ovuleAngle) * w * 0.04;
            const ovuleY = loculeY + Math.sin(ovuleAngle) * h * 0.05;
            
            // Ovule
            ctx.fillStyle = '#FFE082';
            ctx.strokeStyle = '#F9A825';
            ctx.lineWidth = 1.5;
            ctx.beginPath();
            ctx.ellipse(ovuleX, ovuleY, w * 0.02, h * 0.03, ovuleAngle, 0, Math.PI * 2);
            ctx.fill();
            ctx.stroke();
            
            // Nucellus
            ctx.fillStyle = '#FFD54F';
            ctx.beginPath();
            ctx.ellipse(ovuleX, ovuleY, w * 0.012, h * 0.018, ovuleAngle, 0, Math.PI * 2);
            ctx.fill();
            
            // Embryo sac
            ctx.fillStyle = '#FFC107';
            ctx.beginPath();
            ctx.arc(ovuleX, ovuleY, w * 0.008, 0, Math.PI * 2);
            ctx.fill();
            
            // Funiculus (stalk)
            ctx.strokeStyle = '#689F38';
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(loculeX, loculeY);
            ctx.lineTo(ovuleX, ovuleY);
            ctx.stroke();
          }
        }
        
        // Central axis (placenta)
        ctx.fillStyle = '#7CB342';
        ctx.strokeStyle = '#558B2F';
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.arc(centerX, centerY, w * 0.05, 0, Math.PI * 2);
        ctx.fill();
        ctx.stroke();
        
        // Vascular bundles
        for(let i = 0; i < locules; i++) {
          const angle = (i / locules) * Math.PI * 2 - Math.PI / 2;
          ctx.strokeStyle = '#33691E';
          ctx.lineWidth = 3;
          ctx.beginPath();
          ctx.moveTo(centerX, centerY);
          ctx.lineTo(
            centerX + Math.cos(angle) * w * 0.25,
            centerY + Math.sin(angle) * w * 0.25
          );
          ctx.stroke();
        }
        
        ctx.fillStyle = '#000000';
        ctx.font = `bold ${h * 0.05}px Arial`;
        ctx.fillText('Ovary Cross-Section', w * 0.25, h * 0.9);
        break;
        
      case 'anther':
        // Detailed anther cross-section
        // Anther outline
        ctx.fillStyle = '#FFCC80';
        ctx.strokeStyle = '#E65100';
        ctx.lineWidth = 3;
        ctx.fillRect(centerX - w * 0.3, centerY - h * 0.3, w * 0.6, h * 0.6);
        ctx.strokeRect(centerX - w * 0.3, centerY - h * 0.3, w * 0.6, h * 0.6);
        
        // Four pollen sacs (microsporangia)
        const pollenSacs = [
          {x: -0.15, y: -0.15, label: 'Pollen sac 1'},
          {x: 0.15, y: -0.15, label: 'Pollen sac 2'},
          {x: -0.15, y: 0.15, label: 'Pollen sac 3'},
          {x: 0.15, y: 0.15, label: 'Pollen sac 4'}
        ];
        
        pollenSacs.forEach(sac => {
          // Pollen sac wall
          ctx.strokeStyle = '#BF360C';
          ctx.lineWidth = 2;
          ctx.beginPath();
          ctx.arc(centerX + sac.x * w, centerY + sac.y * h, w * 0.12, 0, Math.PI * 2);
          ctx.stroke();
          
          // Tapetum (nutritive layer)
          ctx.strokeStyle = '#FF6F00';
          ctx.lineWidth = 1.5;
          ctx.setLineDash([3, 3]);
          ctx.beginPath();
          ctx.arc(centerX + sac.x * w, centerY + sac.y * h, w * 0.10, 0, Math.PI * 2);
          ctx.stroke();
          ctx.setLineDash([]);
          
          // Pollen grains inside
          ctx.fillStyle = '#FFEB3B';
          for(let i = 0; i < 20; i++) {
            const angle = (i / 20) * Math.PI * 2;
            const r = Math.random() * w * 0.08;
            const pollenX = centerX + sac.x * w + Math.cos(angle) * r;
            const pollenY = centerY + sac.y * h + Math.sin(angle) * r;
            
            ctx.beginPath();
            ctx.arc(pollenX, pollenY, w * 0.008, 0, Math.PI * 2);
            ctx.fill();
            
            // Pollen spikes
            ctx.strokeStyle = '#F9A825';
            ctx.lineWidth = 0.5;
            for(let j = 0; j < 4; j++) {
              const spikeAngle = (j / 4) * Math.PI * 2;
              ctx.beginPath();
              ctx.moveTo(pollenX, pollenY);
              ctx.lineTo(
                pollenX + Math.cos(spikeAngle) * w * 0.012,
                pollenY + Math.sin(spikeAngle) * w * 0.012
              );
              ctx.stroke();
            }
          }
        });
        
        // Connective tissue (central)
        ctx.fillStyle = '#A1887F';
        ctx.strokeStyle = '#5D4037';
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(centerX, centerY - h * 0.35);
        ctx.lineTo(centerX - w * 0.05, centerY - h * 0.3);
        ctx.lineTo(centerX - w * 0.05, centerY + h * 0.3);
        ctx.lineTo(centerX, centerY + h * 0.35);
        ctx.lineTo(centerX + w * 0.05, centerY + h * 0.3);
        ctx.lineTo(centerX + w * 0.05, centerY - h * 0.3);
        ctx.closePath();
        ctx.fill();
        ctx.stroke();
        
        // Vascular bundle in connective
        ctx.fillStyle = '#FF5722';
        ctx.beginPath();
        ctx.ellipse(centerX, centerY, w * 0.02, h * 0.25, 0, 0, Math.PI * 2);
        ctx.fill();
        
        // Stomium (opening line)
        ctx.strokeStyle = '#D84315';
        ctx.lineWidth = 3;
        ctx.setLineDash([10, 5]);
        
        ctx.beginPath();
        ctx.moveTo(centerX - w * 0.3, centerY);
        ctx.lineTo(centerX - w * 0.05, centerY);
        ctx.stroke();
        
        ctx.beginPath();
        ctx.moveTo(centerX + w * 0.05, centerY);
        ctx.lineTo(centerX + w * 0.3, centerY);
        ctx.stroke();
        
        ctx.setLineDash([]);
        
        ctx.fillStyle = '#000000';
        ctx.font = `${h * 0.03}px Arial`;
        ctx.fillText('Stomium', centerX + w * 0.32, centerY + h * 0.02);
        ctx.fillText('(dehiscence line)', centerX + w * 0.32, centerY + h * 0.06);
        
        ctx.font = `bold ${h * 0.05}px Arial`;
        ctx.fillText('Anther Cross-Section', w * 0.2, h * 0.92);
        break;
    }
  }

  // ===== STOMATA =====
  static drawStomataStructure(ctx, x, y, width, height, state, view) {
    ctx.save();
    ctx.translate(x, y);
    
    if(state === 'both') {
      // Show both open and closed side by side
      ctx.font = `bold ${height * 0.05}px Arial`;
      ctx.fillStyle = '#000000';
      ctx.fillText('Open Stomata', width * 0.12, height * 0.05);
      ctx.fillText('Closed Stomata', width * 0.6, height * 0.05);
      
      this.drawSingleStomata(ctx, width * 0.25, height * 0.5, width * 0.35, height * 0.7, true, view);
      this.drawSingleStomata(ctx, width * 0.75, height * 0.5, width * 0.35, height * 0.7, false, view);
    } else {
      const isOpen = state === 'open';
      this.drawSingleStomata(ctx, width * 0.5, height * 0.5, width * 0.7, height * 0.8, isOpen, view);
    }
    
    ctx.restore();
  }

  static drawSingleStomata(ctx, centerX, centerY, w, h, isOpen, view) {
    if(view === 'surface') {
      // Surface view (top-down)
      // Surrounding epidermal cells
      const epidermisGradient = ctx.createRadialGradient(centerX, centerY, 0, centerX, centerY, w * 0.5);
      epidermisGradient.addColorStop(0, '#C5E1A5');
      epidermisGradient.addColorStop(1, '#9CCC65');
      
      ctx.fillStyle = epidermisGradient;
      ctx.strokeStyle = '#558B2F';
      ctx.lineWidth = 2;
      
      // Draw irregular epidermal cells
      for(let i = 0; i < 6; i++) {
        const angle = (i / 6) * Math.PI * 2;
        ctx.beginPath();
        ctx.moveTo(centerX, centerY);
        ctx.lineTo(
          centerX + Math.cos(angle) * w * 0.5,
          centerY + Math.sin(angle) * h * 0.5
        );
        ctx.lineTo(
          centerX + Math.cos(angle + Math.PI / 3) * w * 0.5,
          centerY + Math.sin(angle + Math.PI / 3) * h * 0.5
        );
        ctx.closePath();
        ctx.stroke();
      }
      
      if(isOpen) {
        // Open guard cells (kidney-shaped, curved away)
        // Left guard cell
        ctx.fillStyle = '#66BB6A';
        ctx.strokeStyle = '#2E7D32';
        ctx.lineWidth = 3;
        
        ctx.beginPath();
        ctx.ellipse(centerX - w * 0.15, centerY, w * 0.12, h * 0.25, -0.4, 0, Math.PI * 2);
        ctx.fill();
        ctx.stroke();
        
        // Right guard cell
        ctx.beginPath();
        ctx.ellipse(centerX + w * 0.15, centerY, w * 0.12, h * 0.25, 0.4, 0, Math.PI * 2);
        ctx.fill();
        ctx.stroke();
        
        // Stomatal pore (opening)
        ctx.fillStyle = '#000000';
        ctx.beginPath();
        ctx.ellipse(centerX, centerY, w * 0.08, h * 0.18, 0, 0, Math.PI * 2);
        ctx.fill();
        
        // Chloroplasts in guard cells
        ctx.fillStyle = '#1B5E20';
        for(let i = 0; i < 8; i++) {
          const angle = (i / 8) * Math.PI * 2;
          const isLeft = i < 4;
          const cellX = centerX + (isLeft ? -w * 0.15 : w * 0.15);
          
          ctx.beginPath();
          ctx.arc(
            cellX + Math.cos(angle) * w * 0.06,
            centerY + Math.sin(angle) * h * 0.12,
            w * 0.015,
            0, Math.PI * 2
          );
          ctx.fill();
        }
      } else {
        // Closed guard cells (straight, touching)
        ctx.fillStyle = '#81C784';
        ctx.strokeStyle = '#2E7D32';
        ctx.lineWidth = 3;
        
        // Left guard cell
        ctx.beginPath();
        ctx.ellipse(centerX - w * 0.08, centerY, w * 0.08, h * 0.25, 0, 0, Math.PI * 2);
        ctx.fill();
        ctx.stroke();
        
        // Right guard cell
        ctx.beginPath();
        ctx.ellipse(centerX + w * 0.08, centerY, w * 0.08, h * 0.25, 0, 0, Math.PI * 2);
        ctx.fill();
        ctx.stroke();
        
        // Contact line (no pore visible)
        ctx.strokeStyle = '#1B5E20';
        ctx.lineWidth = 4;
        ctx.beginPath();
        ctx.moveTo(centerX, centerY - h * 0.25);
        ctx.lineTo(centerX, centerY + h * 0.25);
        ctx.stroke();
        
        // Chloroplasts in guard cells
        ctx.fillStyle = '#1B5E20';
        for(let i = 0; i < 6; i++) {
          const angle = (i / 6) * Math.PI * 2;
          const isLeft = i < 3;
          const cellX = centerX + (isLeft ? -w * 0.08 : w * 0.08);
          
          ctx.beginPath();
          ctx.arc(
            cellX + Math.cos(angle) * w * 0.04,
            centerY + Math.sin(angle) * h * 0.12,
            w * 0.012,
            0, Math.PI * 2
          );
          ctx.fill();
        }
      }
      
      // Subsidiary cells
      ctx.fillStyle = '#AED581';
      ctx.strokeStyle = '#689F38';
      ctx.lineWidth = 2;
      
      // Top subsidiary cell
      ctx.beginPath();
      ctx.ellipse(centerX, centerY - h * 0.35, w * 0.15, h * 0.08, 0, 0, Math.PI * 2);
      ctx.fill();
      ctx.stroke();
      
      // Bottom subsidiary cell
      ctx.beginPath();
      ctx.ellipse(centerX, centerY + h * 0.35, w * 0.15, h * 0.08, 0, 0, Math.PI * 2);
      ctx.fill();
      ctx.stroke();
      
    } else if(view === 'cross-section') {
      // Cross-sectional view
      const topY = centerY - h * 0.4;
      const bottomY = centerY + h * 0.4;
      
      // Upper epidermis
      ctx.fillStyle = '#C5E1A5';
      ctx.fillRect(centerX - w * 0.5, topY, w, h * 0.1);
      
      ctx.strokeStyle = '#558B2F';
      ctx.lineWidth = 2;
      ctx.strokeRect(centerX - w * 0.5, topY, w, h * 0.1);
      
      // Lower epidermis
      ctx.fillRect(centerX - w * 0.5, bottomY - h * 0.1, w, h * 0.1);
      ctx.strokeRect(centerX - w * 0.5, bottomY - h * 0.1, w, h * 0.1);
      
      // Mesophyll cells (background)
      ctx.fillStyle = '#A5D6A7';
      ctx.fillRect(centerX - w * 0.5, topY + h * 0.1, w, h * 0.7);
      
      // Guard cells
      if(isOpen) {
        // Open guard cells - curved outward
        const guardGradient = ctx.createLinearGradient(centerX - w * 0.15, centerY, centerX + w * 0.15, centerY);
        guardGradient.addColorStop(0, '#43A047');
        guardGradient.addColorStop(0.5, '#66BB6A');
        guardGradient.addColorStop(1, '#43A047');
        
        ctx.fillStyle = guardGradient;
        ctx.strokeStyle = '#1B5E20';
        ctx.lineWidth = 3;
        
        // Left guard cell (kidney shape)
        ctx.beginPath();
        ctx.moveTo(centerX - w * 0.15, bottomY - h * 0.1);
        ctx.bezierCurveTo(
          centerX - w * 0.2, bottomY - h * 0.15,
          centerX - w * 0.2, centerY - h * 0.15,
          centerX - w * 0.15, centerY - h * 0.1
        );
        ctx.bezierCurveTo(
          centerX - w * 0.12, centerY - h * 0.05,
          centerX - w * 0.08, centerY,
          centerX - w * 0.05, centerY + h * 0.05
        );
        ctx.lineTo(centerX - w * 0.05, bottomY - h * 0.05);
        ctx.bezierCurveTo(
          centerX - w * 0.08, bottomY - h * 0.08,
          centerX - w * 0.12, bottomY - h * 0.09,
          centerX - w * 0.15, bottomY - h * 0.1
        );
        ctx.fill();
        ctx.stroke();
        
        // Right guard cell
        ctx.beginPath();
        ctx.moveTo(centerX + w * 0.15, bottomY - h * 0.1);
        ctx.bezierCurveTo(
          centerX + w * 0.2, bottomY - h * 0.15,
          centerX + w * 0.2, centerY - h * 0.15,
          centerX + w * 0.15, centerY - h * 0.1
        );
        ctx.bezierCurveTo(
          centerX + w * 0.12, centerY - h * 0.05,
          centerX + w * 0.08, centerY,
          centerX + w * 0.05, centerY + h * 0.05
        );
        ctx.lineTo(centerX + w * 0.05, bottomY - h * 0.05);
        ctx.bezierCurveTo(
          centerX + w * 0.08, bottomY - h * 0.08,
          centerX + w * 0.12, bottomY - h * 0.09,
          centerX + w * 0.15, bottomY - h * 0.1
        );
        ctx.fill();
        ctx.stroke();
        
        // Stomatal pore (air space)
        ctx.fillStyle = '#E3F2FD';
        ctx.strokeStyle = '#1976D2';
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(centerX - w * 0.05, centerY + h * 0.05);
        ctx.lineTo(centerX - w * 0.05, bottomY - h * 0.05);
        ctx.lineTo(centerX + w * 0.05, bottomY - h * 0.05);
        ctx.lineTo(centerX + w * 0.05, centerY + h * 0.05);
        ctx.closePath();
        ctx.fill();
        ctx.stroke();
        
        // Water vapor escaping
        ctx.fillStyle = '#90CAF9';
        for(let i = 0; i < 5; i++) {
          const vaporY = bottomY + i * h * 0.08;
          ctx.beginPath();
          ctx.arc(centerX - w * 0.02 + (i % 2) * w * 0.04, vaporY, w * 0.015, 0, Math.PI * 2);
          ctx.fill();
        }
        
        // H2O label
        ctx.fillStyle = '#1976D2';
        ctx.font = `${h * 0.04}px Arial`;
        ctx.fillText('H₂O', centerX + w * 0.08, bottomY + h * 0.15);
        
      } else {
        // Closed guard cells - straight
        ctx.fillStyle = '#66BB6A';
        ctx.strokeStyle = '#1B5E20';
        ctx.lineWidth = 3;
        
        // Left guard cell
        ctx.beginPath();
        ctx.moveTo(centerX - w * 0.12, bottomY - h * 0.1);
        ctx.lineTo(centerX - w * 0.12, centerY - h * 0.1);
        ctx.bezierCurveTo(
          centerX - w * 0.12, centerY - h * 0.05,
          centerX - w * 0.08, centerY,
          centerX - w * 0.02, centerY
        );
        ctx.lineTo(centerX - w * 0.02, bottomY - h * 0.1);
        ctx.closePath();
        ctx.fill();
        ctx.stroke();
        
        // Right guard cell
        ctx.beginPath();
        ctx.moveTo(centerX + w * 0.12, bottomY - h * 0.1);
        ctx.lineTo(centerX + w * 0.12, centerY - h * 0.1);
        ctx.bezierCurveTo(
          centerX + w * 0.12, centerY - h * 0.05,
          centerX + w * 0.08, centerY,
          centerX + w * 0.02, centerY
        );
        ctx.lineTo(centerX + w * 0.02, bottomY - h * 0.1);
        ctx.closePath();
        ctx.fill();
        ctx.stroke();
        
        // No pore - cells touching
        ctx.strokeStyle = '#1B5E20';
        ctx.lineWidth = 4;
        ctx.beginPath();
        ctx.moveTo(centerX, centerY);
        ctx.lineTo(centerX, bottomY - h * 0.1);
        ctx.stroke();
      }
      
      // Cell wall thickening (ventral wall - thicker)
      ctx.strokeStyle = '#0D47A1';
      ctx.lineWidth = 4;
      
      // Left guard cell inner wall
      ctx.beginPath();
      ctx.moveTo(centerX - w * 0.05, centerY);
      ctx.lineTo(centerX - w * 0.05, bottomY - h * 0.1);
      ctx.stroke();
      
      // Right guard cell inner wall
      ctx.beginPath();
      ctx.moveTo(centerX + w * 0.05, centerY);
      ctx.lineTo(centerX + w * 0.05, bottomY - h * 0.1);
      ctx.stroke();
      
      // Chloroplasts in guard cells
      ctx.fillStyle = '#1B5E20';
      const chloroplastCount = 6;
      for(let i = 0; i < chloroplastCount; i++) {
        // Left guard cell
        ctx.beginPath();
        ctx.ellipse(
          centerX - w * 0.08,
          centerY + (i / chloroplastCount) * (bottomY - centerY - h * 0.15),
          w * 0.015,
          h * 0.02,
          0, 0, Math.PI * 2
        );
        ctx.fill();
        
        // Right guard cell
        ctx.beginPath();
        ctx.ellipse(
          centerX + w * 0.08,
          centerY + (i / chloroplastCount) * (bottomY - centerY - h * 0.15),
          w * 0.015,
          h * 0.02,
          0, 0, Math.PI * 2
        );
        ctx.fill();
      }
      
      // Nucleus in each guard cell
      ctx.fillStyle = '#8D6E63';
      ctx.strokeStyle = '#4E342E';
      ctx.lineWidth = 1;
      
      ctx.beginPath();
      ctx.arc(centerX - w * 0.08, centerY + h * 0.1, w * 0.02, 0, Math.PI * 2);
      ctx.fill();
      ctx.stroke();
      
      ctx.beginPath();
      ctx.arc(centerX + w * 0.08, centerY + h * 0.1, w * 0.02, 0, Math.PI * 2);
      ctx.fill();
      ctx.stroke();
      
      // Substomatal chamber (air space below)
      ctx.fillStyle = 'rgba(227, 242, 253, 0.5)';
      ctx.strokeStyle = '#64B5F6';
      ctx.lineWidth = 2;
      ctx.setLineDash([5, 5]);
      ctx.beginPath();
      ctx.ellipse(centerX, centerY + h * 0.2, w * 0.2, h * 0.15, 0, 0, Math.PI * 2);
      ctx.fill();
      ctx.stroke();
      ctx.setLineDash([]);
      
      // Labels
      ctx.fillStyle = '#000000';
      ctx.font = `${h * 0.035}px Arial`;
      ctx.fillText('Guard cells', centerX + w * 0.22, centerY + h * 0.05);
      ctx.fillText('Substomatal', centerX + w * 0.22, centerY + h * 0.2);
      ctx.fillText('chamber', centerX + w * 0.22, centerY + h * 0.25);
      
    } else if(view === 'mechanism') {
      // Mechanism view showing turgor pressure changes
      const leftX = centerX - w * 0.25;
      const rightX = centerX + w * 0.25;
      
      // Show side-by-side comparison
      ctx.fillStyle = '#000000';
      ctx.font = `bold ${h * 0.04}px Arial`;
      ctx.fillText('Low Turgor (Closed)', leftX - w * 0.15, centerY - h * 0.42);
      ctx.fillText('High Turgor (Open)', rightX - w * 0.15, centerY - h * 0.42);
      
      // Closed mechanism (left)
      ctx.fillStyle = '#A5D6A7';
      ctx.strokeStyle = '#2E7D32';
      ctx.lineWidth = 3;
      
      ctx.beginPath();
      ctx.ellipse(leftX - w * 0.06, centerY, w * 0.06, h * 0.25, 0, 0, Math.PI * 2);
      ctx.fill();
      ctx.stroke();
      
      ctx.beginPath();
      ctx.ellipse(leftX + w * 0.06, centerY, w * 0.06, h * 0.25, 0, 0, Math.PI * 2);
      ctx.fill();
      ctx.stroke();
      
      // Water molecules (few)
      ctx.fillStyle = '#2196F3';
      for(let i = 0; i < 3; i++) {
        ctx.beginPath();
        ctx.arc(leftX - w * 0.06, centerY - h * 0.15 + i * h * 0.15, w * 0.012, 0, Math.PI * 2);
        ctx.fill();
        
        ctx.beginPath();
        ctx.arc(leftX + w * 0.06, centerY - h * 0.15 + i * h * 0.15, w * 0.012, 0, Math.PI * 2);
        ctx.fill();
      }
      
      // Pressure arrows (small)
      ctx.strokeStyle = '#F44336';
      ctx.lineWidth = 2;
      for(let i = -1; i <= 1; i += 2) {
        ctx.beginPath();
        ctx.moveTo(leftX + i * w * 0.06, centerY);
        ctx.lineTo(leftX + i * w * 0.08, centerY);
        ctx.stroke();
      }
      
      // Open mechanism (right)
      ctx.fillStyle = '#66BB6A';
      ctx.strokeStyle = '#1B5E20';
      ctx.lineWidth = 3;
      
      // Curved guard cells
      ctx.beginPath();
      ctx.ellipse(rightX - w * 0.12, centerY, w * 0.08, h * 0.28, -0.3, 0, Math.PI * 2);
      ctx.fill();
      ctx.stroke();
      
      ctx.beginPath();
      ctx.ellipse(rightX + w * 0.12, centerY, w * 0.08, h * 0.28, 0.3, 0, Math.PI * 2);
      ctx.fill();
      ctx.stroke();
      
      // Water molecules (many)
      ctx.fillStyle = '#2196F3';
      for(let i = 0; i < 8; i++) {
        const angle = (i / 8) * Math.PI * 2;
        ctx.beginPath();
        ctx.arc(
          rightX - w * 0.12 + Math.cos(angle) * w * 0.04,
          centerY + Math.sin(angle) * h * 0.15,
          w * 0.012,
          0, Math.PI * 2
        );
        ctx.fill();
        
        ctx.beginPath();
        ctx.arc(
          rightX + w * 0.12 + Math.cos(angle) * w * 0.04,
          centerY + Math.sin(angle) * h * 0.15,
          w * 0.012,
          0, Math.PI * 2
        );
        ctx.fill();
      }
      
      // Pressure arrows (large)
      ctx.strokeStyle = '#F44336';
      ctx.lineWidth = 3;
      for(let i = -1; i <= 1; i += 2) {
        ctx.beginPath();
        ctx.moveTo(rightX + i * w * 0.1, centerY);
        ctx.lineTo(rightX + i * w * 0.18, centerY);
        ctx.stroke();
        
        // Arrow head
        ctx.fillStyle = '#F44336';
        ctx.beginPath();
        ctx.moveTo(rightX + i * w * 0.18, centerY);
        ctx.lineTo(rightX + i * w * 0.16, centerY - h * 0.02);
        ctx.lineTo(rightX + i * w * 0.16, centerY + h * 0.02);
        ctx.fill();
      }
      
      // Pore
      ctx.fillStyle = '#000000';
      ctx.beginPath();
      ctx.ellipse(rightX, centerY, w * 0.04, h * 0.15, 0, 0, Math.PI * 2);
      ctx.fill();
      
      // Process explanation below
      ctx.fillStyle = '#000000';
      ctx.font = `${h * 0.03}px Arial`;
      
      // Left explanation
      ctx.fillText('K⁺ ions out', leftX - w * 0.08, centerY + h * 0.38);
      ctx.fillText('Water exits', leftX - w * 0.08, centerY + h * 0.43);
      ctx.fillText('Low pressure', leftX - w * 0.08, centerY + h * 0.48);
      
      // Right explanation
      ctx.fillText('K⁺ ions in', rightX - w * 0.08, centerY + h * 0.38);
      ctx.fillText('Water enters', rightX - w * 0.08, centerY + h * 0.43);
      ctx.fillText('High pressure', rightX - w * 0.08, centerY + h * 0.48);
      
      // Ion movement arrows
      ctx.strokeStyle = '#9C27B0';
      ctx.lineWidth = 2;
      ctx.setLineDash([5, 5]);
      
      // K+ out (left)
      for(let i = 0; i < 3; i++) {
        ctx.beginPath();
        ctx.moveTo(leftX, centerY - h * 0.3 + i * h * 0.15);
        ctx.lineTo(leftX - w * 0.15, centerY - h * 0.35 + i * h * 0.15);
        ctx.stroke();
      }
      
      // K+ in (right)
      for(let i = 0; i < 3; i++) {
        ctx.beginPath();
        ctx.moveTo(rightX + w * 0.2, centerY - h * 0.3 + i * h * 0.15);
        ctx.lineTo(rightX, centerY - h * 0.28 + i * h * 0.15);
        ctx.stroke();
      }
      
      ctx.setLineDash([]);
      
      // K+ ion labels
      ctx.fillStyle = '#9C27B0';
      ctx.font = `bold ${h * 0.025}px Arial`;
      ctx.fillText('K⁺', leftX - w * 0.18, centerY - h * 0.3);
      ctx.fillText('K⁺', rightX + w * 0.2, centerY - h * 0.3);
    }
  }

  // ===== XYLEM & PHLOEM =====
  static drawXylemPhloem(ctx, x, y, width, height, tissue, transport) {
    ctx.save();
    ctx.translate(x, y);
    
    if(tissue === 'both') {
      this.drawVascularBundle(ctx, width, height);
    } else if(tissue === 'xylem') {
      this.drawXylemDetail(ctx, width, height, transport);
    } else if(tissue === 'phloem') {
      this.drawPhloemDetail(ctx, width, height, transport);
    }
    
    ctx.restore();
  }

  static drawXylemDetail(ctx, w, h, transport) {
    const centerX = w * 0.5;
    const centerY = h * 0.5;
    
    // Title
    ctx.fillStyle = '#000000';
    ctx.font = `bold ${h * 0.05}px Arial`;
    ctx.fillText('Xylem - Water Transport', w * 0.25, h * 0.05);
    
    // Vessel elements (large, hollow)
    const vessels = 5;
    for(let i = 0; i < vessels; i++) {
      const y = h * 0.15 + (i / (vessels - 1)) * h * 0.7;
      
      // Vessel cell wall
      ctx.fillStyle = '#A0522D';
      ctx.strokeStyle = '#654321';
      ctx.lineWidth = 4;
      ctx.beginPath();
      ctx.rect(centerX - w * 0.15, y - h * 0.08, w * 0.3, h * 0.16);
      ctx.fill();
      ctx.stroke();
      
      // Lignin thickening patterns
      ctx.strokeStyle = '#8B4513';
      ctx.lineWidth = 3;
      
      if(i % 3 === 0) {
        // Spiral thickening
        for(let j = 0; j < 6; j++) {
          ctx.beginPath();
          ctx.moveTo(centerX - w * 0.13, y - h * 0.06 + j * h * 0.02);
          ctx.lineTo(centerX + w * 0.13, y - h * 0.05 + j * h * 0.02);
          ctx.stroke();
        }
      } else if(i % 3 === 1) {
        // Annular (ring) thickening
        for(let j = 0; j < 4; j++) {
          ctx.beginPath();
          ctx.rect(
            centerX - w * 0.13,
            y - h * 0.06 + j * h * 0.04,
            w * 0.26,
            h * 0.015
          );
          ctx.stroke();
        }
      } else {
        // Reticulate (network) thickening
        for(let j = 0; j < 3; j++) {
          ctx.beginPath();
          ctx.moveTo(centerX - w * 0.13, y - h * 0.06 + j * h * 0.04);
          ctx.lineTo(centerX + w * 0.13, y - h * 0.04 + j * 0.04);
          ctx.stroke();
        }
        for(let j = 0; j < 5; j++) {
          ctx.beginPath();
          ctx.moveTo(centerX - w * 0.12 + j * w * 0.06, y - h * 0.07);
          ctx.lineTo(centerX - w * 0.12 + j * w * 0.06, y + h * 0.07);
          ctx.stroke();
        }
      }
      
      // Hollow lumen (center)
      ctx.fillStyle = '#FFFFFF';
      ctx.fillRect(centerX - w * 0.1, y - h * 0.06, w * 0.2, h * 0.12);
      
      // Perforation plate (end wall)
      if(i < vessels - 1) {
        ctx.strokeStyle = '#D2691E';
        ctx.lineWidth = 2;
        ctx.setLineDash([5, 5]);
        ctx.beginPath();
        ctx.moveTo(centerX - w * 0.1, y + h * 0.08);
        ctx.lineTo(centerX + w * 0.1, y + h * 0.08);
        ctx.stroke();
        ctx.setLineDash([]);
      }
    }
    
    // Water molecules if showing transport
    if(transport === 'water-movement' || transport === 'structure') {
      ctx.fillStyle = '#2196F3';
      for(let i = 0; i < 15; i++) {
        const y = h * 0.2 + (i / 14) * h * 0.6;
        ctx.beginPath();
        ctx.arc(
          centerX + (Math.random() - 0.5) * w * 0.15,
          y,
          w * 0.012,
          0, Math.PI * 2
        );
        ctx.fill();
      }
      
      // Upward flow arrows
      ctx.fillStyle = '#1976D2';
      for(let i = 0; i < 4; i++) {
        const y = h * 0.3 + i * h * 0.2;
        ctx.beginPath();
        ctx.moveTo(centerX + w * 0.18, y);
        ctx.lineTo(centerX + w * 0.16, y + h * 0.05);
        ctx.lineTo(centerX + w * 0.2, y + h * 0.05);
        ctx.fill();
      }
      
      ctx.fillStyle = '#1976D2';
      ctx.font = `bold ${h * 0.04}px Arial`;
      ctx.fillText('Water flow ↑', centerX + w * 0.22, centerY);
    }
    
    // Tracheids (smaller, tapered cells)
    for(let i = 0; i < 3; i++) {
      const y = h * 0.2 + i * h * 0.3;
      const x = centerX + w * 0.25;
      
      ctx.fillStyle = '#CD853F';
      ctx.strokeStyle = '#8B4513';
      ctx.lineWidth = 2;
      
      ctx.beginPath();
      ctx.moveTo(x, y);
      ctx.lineTo(x + w * 0.04, y + h * 0.05);
      ctx.lineTo(x + w * 0.04, y + h * 0.2);
      ctx.lineTo(x, y + h * 0.25);
      ctx.lineTo(x - w * 0.04, y + h * 0.2);
      ctx.lineTo(x - w * 0.04, y + h * 0.05);
      ctx.closePath();
      ctx.fill();
      ctx.stroke();
      
      // Pits (for lateral water movement)
      ctx.fillStyle = '#FFFFFF';
      for(let j = 0; j < 3; j++) {
        ctx.beginPath();
        ctx.arc(x - w * 0.03, y + h * 0.08 + j * h * 0.05, w * 0.008, 0, Math.PI * 2);
        ctx.fill();
        
        ctx.beginPath();
        ctx.arc(x + w * 0.03, y + h * 0.08 + j * h * 0.05, w * 0.008, 0, Math.PI * 2);
        ctx.fill();
      }
    }
    
    // Labels
    ctx.fillStyle = '#000000';
    ctx.font = `${h * 0.035}px Arial`;
    ctx.fillText('Vessel elements', w * 0.05, h * 0.25);
    ctx.fillText('(wide, hollow)', w * 0.05, h * 0.3);
    ctx.fillText('Tracheids', w * 0.68, h * 0.35);
    ctx.fillText('(narrow, tapered)', w * 0.68, h * 0.4);
    
    // Cohesion-tension theory if applicable
    if(transport === 'water-movement') {
      ctx.fillStyle = '#0D47A1';
      ctx.font = `bold ${h * 0.03}px Arial`;
      ctx.fillText('Cohesion-Tension Theory:', w * 0.05, h * 0.92);
      ctx.font = `${h * 0.025}px Arial`;
      ctx.fillText('• Transpiration pull from leaves', w * 0.05, h * 0.96);
      ctx.fillText('• Water cohesion in xylem', w * 0.4, h * 0.96);
      ctx.fillText('• Root pressure assistance', w * 0.7, h * 0.96);
    }
  }

  static drawPhloemDetail(ctx, w, h, transport) {
    const centerX = w * 0.5;
    const centerY = h * 0.5;
    
    // Title
    ctx.fillStyle = '#000000';
    ctx.font = `bold ${h * 0.05}px Arial`;
    ctx.fillText('Phloem - Sugar Transport', w * 0.23, h * 0.05);
    
    // Sieve tube elements
    const sieveElements = 5;
    for(let i = 0; i < sieveElements; i++) {
      const y = h * 0.15 + (i / (sieveElements - 1)) * h * 0.7;
      
      // Sieve tube cell
      ctx.fillStyle = '#90EE90';
      ctx.strokeStyle = '#228B22';
      ctx.lineWidth = 3;
      ctx.beginPath();
      ctx.rect(centerX - w * 0.12, y - h * 0.07, w * 0.24, h * 0.14);
      ctx.fill();
      ctx.stroke();
      
      // Cytoplasm (thin layer)
      ctx.strokeStyle = '#32CD32';
      ctx.lineWidth = 2;
      ctx.strokeRect(centerX - w * 0.11, y - h * 0.06, w * 0.22, h * 0.12);
      
      // Sieve plate (end wall with pores)
      if(i < sieveElements - 1) {
        ctx.strokeStyle = '#1B5E20';
        ctx.lineWidth = 4;
        ctx.beginPath();
        ctx.moveTo(centerX - w * 0.12, y + h * 0.07);
        ctx.lineTo(centerX + w * 0.12, y + h * 0.07);
        ctx.stroke();
        
        // Pores in sieve plate
        ctx.fillStyle = '#FFEB3B';
        for(let j = -2; j <= 2; j++) {
          ctx.beginPath();
          ctx.arc(centerX + j * w * 0.05, y + h * 0.07, w * 0.01, 0, Math.PI * 2);
          ctx.fill();
        }
        
        ctx.strokeStyle = '#F57F17';
        ctx.lineWidth = 1;
        for(let j = -2; j <= 2; j++) {
          ctx.beginPath();
          ctx.arc(centerX + j * w * 0.05, y + h * 0.07, w * 0.01, 0, Math.PI * 2);
          ctx.stroke();
        }
      }
      
      // P-protein bodies (if showing structure)
      if(transport === 'structure' || transport === 'sugar-movement') {
        ctx.fillStyle = '#FF9800';
        for(let j = 0; j < 4; j++) {
          ctx.beginPath();
          ctx.arc(
            centerX - w * 0.08 + j * w * 0.05,
            y,
            w * 0.008,
            0, Math.PI * 2
          );
          ctx.fill();
        }
      }
      
      // No nucleus (characteristic of mature sieve tubes)
      ctx.fillStyle = 'rgba(0, 0, 0, 0.1)';
      ctx.font = `italic ${h * 0.02}px Arial`;
      if(i === 2) {
        ctx.fillText('(no nucleus)', centerX - w * 0.06, y);
      }
    }
    
    // Companion cells (adjacent to sieve tubes)
    for(let i = 0; i < sieveElements; i++) {
      const y = h * 0.15 + (i / (sieveElements - 1)) * h * 0.7;
      const x = centerX + w * 0.18;
      
      // Companion cell body
      ctx.fillStyle = '#98FB98';
      ctx.strokeStyle = '#2E7D32';
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.rect(x - w * 0.04, y - h * 0.07, w * 0.08, h * 0.14);
      ctx.fill();
      ctx.stroke();
      
      // Dense cytoplasm
      ctx.fillStyle = '#7CB342';
      ctx.fillRect(x - w * 0.035, y - h * 0.06, w * 0.07, h * 0.12);
      
      // Nucleus (prominent)
      ctx.fillStyle = '#5D4037';
      ctx.strokeStyle = '#3E2723';
      ctx.lineWidth = 1.5;
      ctx.beginPath();
      ctx.arc(x, y, w * 0.02, 0, Math.PI * 2);
      ctx.fill();
      ctx.stroke();
      
      // Mitochondria (many)
      ctx.fillStyle = '#D32F2F';
      for(let j = 0; j < 6; j++) {
        const angle = (j / 6) * Math.PI * 2;
        ctx.beginPath();
        ctx.ellipse(
          x + Math.cos(angle) * w * 0.025,
          y + Math.sin(angle) * h * 0.04,
          w * 0.008,
          h * 0.012,
          angle,
          0, Math.PI * 2
        );
        ctx.fill();
      }
      
      // Plasmodesmata connections to sieve tube
      ctx.strokeStyle = '#FFD700';
      ctx.lineWidth = 2;
      ctx.setLineDash([2, 2]);
      for(let j = -1; j <= 1; j++) {
        ctx.beginPath();
        ctx.moveTo(x - w * 0.04, y + j * h * 0.04);
        ctx.lineTo(centerX + w * 0.12, y + j * h * 0.04);
        ctx.stroke();
      }
      ctx.setLineDash([]);
    }
    
    // Sugar molecules if showing transport
    if(transport === 'sugar-movement' || transport === 'pressure-flow') {
      ctx.fillStyle = '#FF9800';
      for(let i = 0; i < 20; i++) {
        const y = h * 0.2 + (i / 19) * h * 0.6;
        ctx.beginPath();
        ctx.arc(
          centerX + (Math.random() - 0.5) * w * 0.18,
          y,
          w * 0.01,
          0, Math.PI * 2
        );
        ctx.fill();
      }
    }
    
    // Bidirectional flow arrows
    if(transport === 'sugar-movement' || transport === 'pressure-flow') {
      // Downward flow (source to sink)
      ctx.fillStyle = '#F57C00';
      for(let i = 0; i < 3; i++) {
        const y = h * 0.25 + i * h * 0.25;
        ctx.beginPath();
        ctx.moveTo(centerX - w * 0.18, y);
        ctx.lineTo(centerX - w * 0.16, y - h * 0.05);
        ctx.lineTo(centerX - w * 0.2, y - h * 0.05);
        ctx.fill();
      }
      
      // Upward flow possible
      ctx.fillStyle = 'rgba(245, 124, 0, 0.4)';
      for(let i = 0; i < 2; i++) {
        const y = h * 0.4 + i * h * 0.25;
        ctx.beginPath();
        ctx.moveTo(centerX - w * 0.18, y);
        ctx.lineTo(centerX - w * 0.16, y + h * 0.05);
        ctx.lineTo(centerX - w * 0.2, y + h * 0.05);
        ctx.fill();
      }
      
      ctx.fillStyle = '#F57C00';
      ctx.font = `bold ${h * 0.035}px Arial`;
      ctx.fillText('Bidirectional', centerX - w * 0.42, centerY - h * 0.1);
      ctx.fillText('flow', centerX - w * 0.42, centerY - h * 0.05);
    }
    
    // Pressure-Flow hypothesis diagram
    if(transport === 'pressure-flow') {
      // Source (leaf - sugar loading)
      ctx.fillStyle = '#C8E6C9';
      ctx.strokeStyle = '#388E3C';
      ctx.lineWidth = 3;
      ctx.fillRect(w * 0.65, h * 0.1, w * 0.3, h * 0.15);
      ctx.strokeRect(w * 0.65, h * 0.1, w * 0.3, h * 0.15);
      
      ctx.fillStyle = '#1B5E20';
      ctx.font = `bold ${h * 0.035}px Arial`;
      ctx.fillText('SOURCE', w * 0.72, h * 0.15);
      ctx.font = `${h * 0.025}px Arial`;
      ctx.fillText('(Leaf)', w * 0.75, h * 0.19);
      ctx.fillText('High sugar', w * 0.7, h * 0.23);
      
      // Loading arrows
      ctx.fillStyle = '#FF9800';
      ctx.beginPath();
      ctx.moveTo(w * 0.8, h * 0.26);
      ctx.lineTo(w * 0.78, h * 0.3);
      ctx.lineTo(w * 0.82, h * 0.3);
      ctx.fill();
      
      // Sink (root - sugar unloading)
      ctx.fillStyle = '#FFCCBC';
      ctx.strokeStyle = '#BF360C';
      ctx.lineWidth = 3;
      ctx.fillRect(w * 0.65, h * 0.75, w * 0.3, h * 0.15);
      ctx.strokeRect(w * 0.65, h * 0.75, w * 0.3, h * 0.15);
      
      ctx.fillStyle = '#BF360C';
      ctx.font = `bold ${h * 0.035}px Arial`;
      ctx.fillText('SINK', w * 0.75, h * 0.8);
      ctx.font = `${h * 0.025}px Arial`;
      ctx.fillText('(Root/Fruit)', w * 0.7, h * 0.84);
      ctx.fillText('Low sugar', w * 0.7, h * 0.88);
      
      // Unloading arrows
      ctx.fillStyle = '#FF9800';
      ctx.beginPath();
      ctx.moveTo(w * 0.8, h * 0.74);
      ctx.lineTo(w * 0.78, h * 0.7);
      ctx.lineTo(w * 0.82, h * 0.7);
      ctx.fill();
      
      // Connecting flow
      ctx.strokeStyle = '#4CAF50';
      ctx.lineWidth = 4;
      ctx.beginPath();
      ctx.moveTo(w * 0.8, h * 0.3);
      ctx.lineTo(w * 0.8, h * 0.7);
      ctx.stroke();
      
      // Pressure gradient
      ctx.fillStyle = '#1976D2';
      ctx.font = `${h * 0.025}px Arial`;
      ctx.fillText('High pressure', w * 0.82, h * 0.35);
      ctx.fillText('▼', w * 0.84, h * 0.5);
      ctx.fillText('Low pressure', w * 0.82, h * 0.65);
    }
    
    // Labels
    ctx.fillStyle = '#000000';
    ctx.font = `${h * 0.035}px Arial`;
    ctx.fillText('Sieve tube', w * 0.05, h * 0.25);
    ctx.fillText('elements', w * 0.05, h * 0.3);
    ctx.fillText('Companion', centerX + w * 0.28, h * 0.35);
    ctx.fillText('cells', centerX + w * 0.28, h * 0.4);
    
    // Sieve plate label
    ctx.fillText('Sieve plate', w * 0.05, h * 0.55);
    ctx.fillText('(with pores)', w * 0.05, h * 0.6);
    
    // Bottom explanation
    if(transport === 'pressure-flow') {
      ctx.fillStyle = '#0D47A1';
      ctx.font = `bold ${h * 0.03}px Arial`;
      ctx.fillText('Pressure-Flow Hypothesis (Mass Flow):', w * 0.05, h * 0.95);
    }
  }

  // ===== SEED GERMINATION =====
  static drawSeedGermination(ctx, x, y, width, height, stage, seedType) {
    ctx.save();
    ctx.translate(x, y);
    
    if(stage === 'complete') {
      this.drawGerminationSequence(ctx, width, height, seedType);
    } else {
      this.drawGerminationStage(ctx, width, height, stage, seedType);
    }
    
    ctx.restore();
  }

  static drawGerminationSequence(ctx, w, h, seedType) {
    const stages = [
      {name: 'Dry Seed', x: 0.12, y: 0.5},
      {name: 'Imbibition', x: 0.28, y: 0.5},
      {name: 'Radicle', x: 0.44, y: 0.5},
      {name: 'Shoot', x: 0.6, y: 0.5},
      {name: 'Seedling', x: 0.8, y: 0.5}
    ];
    
    // Title
    ctx.fillStyle = '#000000';
    ctx.font = `bold ${h * 0.05}px Arial`;
    const typeText = seedType === 'dicot' ? 'Dicot' : 'Monocot';
    ctx.fillText(`${typeText} Seed Germination Stages`, w * 0.25, h * 0.08);
    
    // Soil line
    ctx.strokeStyle = '#8D6E63';
    ctx.lineWidth = 3;
    ctx.fillStyle = '#A1887F';
    ctx.fillRect(0, h * 0.55, w, h * 0.45);
    ctx.beginPath();
    ctx.moveTo(0, h * 0.55);
    ctx.lineTo(w, h * 0.55);
    ctx.stroke();
    
    // Soil texture
    ctx.fillStyle = '#6D4C41';
    for(let i = 0; i < 50; i++) {
      ctx.beginPath();
      ctx.arc(
        Math.random() * w,
        h * 0.55 + Math.random() * h * 0.45,
        w * 0.003,
        0, Math.PI * 2
      );
      ctx.fill();
    }
    
    stages.forEach((stageInfo, index) => {
      const stageX = stageInfo.x * w;
      const stageY = stageInfo.y * h;
      
      // Stage label
      ctx.fillStyle = '#000000';
      ctx.font = `bold ${h * 0.03}px Arial`;
      ctx.fillText(stageInfo.name, stageX - w * 0.05, h * 0.15);
      
      // Draw stage
      switch(index) {
        case 0: // Dry seed
          this.drawDrySeed(ctx, stageX, stageY, w * 0.08, h * 0.12, seedType);
          break;
        case 1: // Imbibition
          this.drawImbibition(ctx, stageX, stageY, w * 0.1, h * 0.14, seedType);
          break;
        case 2: // Radicle emergence
          this.drawRadicleEmergence(ctx, stageX, stageY, w * 0.1, h * 0.2, seedType);
          break;
        case 3: // Shoot emergence
          this.drawShootEmergence(ctx, stageX, stageY, w * 0.12, h * 0.3, seedType);
          break;
        case 4: // Young seedling
          this.drawYoungSeedling(ctx, stageX, stageY, w * 0.15, h * 0.4, seedType);
          break;
      }
      
      // Arrow to next stage
      if(index < stages.length - 1) {
        ctx.fillStyle = '#4CAF50';
        ctx.beginPath();
        ctx.moveTo(stageX + w * 0.06, stageY - h * 0.02);
        ctx.lineTo(stageX + w * 0.1, stageY - h * 0.04);
        ctx.lineTo(stageX + w * 0.1, stageY);
        ctx.fill();
      }
    });
    
    // Timeline
    ctx.strokeStyle = '#757575';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(w * 0.08, h * 0.92);
    ctx.lineTo(w * 0.92, h * 0.92);
    ctx.stroke();
    
    ctx.fillStyle = '#757575';
    ctx.font = `${h * 0.025}px Arial`;
    ctx.fillText('0-24 hrs', w * 0.08, h * 0.97);
    ctx.fillText('24-48 hrs', w * 0.24, h * 0.97);
    ctx.fillText('2-3 days', w * 0.4, h * 0.97);
    ctx.fillText('3-5 days', w * 0.56, h * 0.97);
    ctx.fillText('5-7 days', w * 0.75, h * 0.97);
  }

  static drawDrySeed(ctx, x, y, w, h, seedType) {
    // Seed coat
    ctx.fillStyle = '#8D6E63';
    ctx.strokeStyle = '#5D4037';
    ctx.lineWidth = 2;
    
    if(seedType === 'dicot') {
      // Bean-shaped
      ctx.beginPath();
      ctx.ellipse(x, y, w, h, 0, 0, Math.PI * 2);
      ctx.fill();
      ctx.stroke();
      
      // Hilum (scar)
      ctx.fillStyle = '#4E342E';
      ctx.beginPath();
      ctx.ellipse(x - w * 0.6, y, w * 0.15, h * 0.08, 0, 0, Math.PI * 2);
      ctx.fill();
      
      // Micropyle
      ctx.beginPath();
      ctx.arc(x - w * 0.7, y + h * 0.2, w * 0.08, 0, Math.PI * 2);
      ctx.fill();
    } else {
      // Corn-shaped (elongated)
      ctx.beginPath();
      ctx.ellipse(x, y, w * 0.6, h, 0, 0, Math.PI * 2);
      ctx.fill();
      ctx.stroke();
    }
  }

  static drawImbibition(ctx, x, y, w, h, seedType) {
    // Swollen seed
    ctx.fillStyle = '#A1887F';
    ctx.strokeStyle = '#6D4C41';
    ctx.lineWidth = 2;
    
    if(seedType === 'dicot') {
      ctx.beginPath();
      ctx.ellipse(x, y, w * 1.2, h * 1.2, 0, 0, Math.PI * 2);
      ctx.fill();
      ctx.stroke();
      
      // Seed coat cracking
      ctx.strokeStyle = '#4E342E';
      ctx.lineWidth = 1.5;
      ctx.setLineDash([3, 3]);
      ctx.beginPath();
      ctx.moveTo(x + w * 0.8, y - h * 0.6);
      ctx.lineTo(x + w * 1.1, y);
      ctx.stroke();
      ctx.setLineDash([]);
    } else {
      ctx.beginPath();
      ctx.ellipse(x, y, w * 0.8, h * 1.15, 0, 0, Math.PI * 2);
      ctx.fill();
      ctx.stroke();
    }
    
    // Water droplets
    ctx.fillStyle = '#2196F3';
    for(let i = 0; i < 6; i++) {
      const angle = (i / 6) * Math.PI * 2;
      ctx.beginPath();
      ctx.arc(
        x + Math.cos(angle) * w * 1.3,
        y + Math.sin(angle) * h * 1.3,
        w * 0.12,
        0, Math.PI * 2
      );
      ctx.fill();
    }
  }

  static drawRadicleEmergence(ctx, x, y, w, h, seedType) {
    // Seed
    ctx.fillStyle = '#BCAAA4';
    ctx.strokeStyle = '#6D4C41';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.ellipse(x, y - h * 0.2, w, h * 0.7, 0, 0, Math.PI * 2);
    ctx.fill();
    ctx.stroke();
    
    // Radicle (primary root) emerging
    ctx.fillStyle = '#FFFDE7';
    ctx.strokeStyle = '#F9A825';
    ctx.lineWidth = 2;
    
    ctx.beginPath();
    ctx.moveTo(x - w * 0.3, y + h * 0.3);
    ctx.quadraticCurveTo(x, y + h * 0.5, x + w * 0.1, y + h * 0.8);
    ctx.lineTo(x - w * 0.1, y + h * 0.8);
    ctx.quadraticCurveTo(x - w * 0.15, y + h * 0.5, x - w * 0.5, y + h * 0.3);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();
    
    // Root cap
    ctx.fillStyle = '#FDD835';
    ctx.beginPath();
    ctx.arc(x, y + h * 0.8, w * 0.15, 0, Math.PI * 2);
    ctx.fill();
    
    // Root hairs starting
    ctx.strokeStyle = '#FFFDE7';
    ctx.lineWidth = 1;
    for(let i = 0; i < 4; i++) {
      ctx.beginPath();
      ctx.moveTo(x - w * 0.2, y + h * 0.5 + i * h * 0.08);
      ctx.lineTo(x - w * 0.4, y + h * 0.52 + i * h * 0.08);
      ctx.stroke();
      
      ctx.beginPath();
      ctx.moveTo(x + w * 0.05, y + h * 0.5 + i * h * 0.08);
      ctx.lineTo(x + w * 0.25, y + h * 0.52 + i * h * 0.08);
      ctx.stroke();
    }
  }

  static drawShootEmergence(ctx, x, y, w, h, seedType) {
    // Seed/cotyledons
    if(seedType === 'dicot') {
      // Cotyledons opening (epigeal)
      ctx.fillStyle = '#AED581';
      ctx.strokeStyle = '#558B2F';
      ctx.lineWidth = 2;
      
      // Left cotyledon
      ctx.beginPath();
      ctx.ellipse(x - w * 0.4, y - h * 0.1, w * 0.5, h * 0.25, -0.3, 0, Math.PI * 2);
      ctx.fill();
      ctx.stroke();
      
      // Right cotyledon
      ctx.beginPath();
      ctx.ellipse(x + w * 0.4, y - h * 0.1, w * 0.5, h * 0.25, 0.3, 0, Math.PI * 2);
      ctx.fill();
      ctx.stroke();
    } else {
      // Cotyledon stays in soil (hypogeal)
      ctx.fillStyle = '#BCAAA4';
      ctx.strokeStyle = '#6D4C41';
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.ellipse(x, y + h * 0.2, w * 0.8, h * 0.3, 0, 0, Math.PI * 2);
      ctx.fill();
      ctx.stroke();
    }
    
    // Hypocotyl/epicotyl (stem)
    ctx.fillStyle = '#C5E1A5';
    ctx.strokeStyle = '#7CB342';
    ctx.lineWidth = 2;
    ctx.fillRect(x - w * 0.12, y - h * 0.4, w * 0.24, h * 0.5);
    ctx.strokeRect(x - w * 0.12, y - h * 0.4, w * 0.24, h * 0.5);
    
    // First true leaves
    ctx.fillStyle = '#66BB6A';
    ctx.strokeStyle = '#2E7D32';
    ctx.lineWidth = 2;
    
    // Left leaf
    ctx.beginPath();
    ctx.ellipse(x - w * 0.5, y - h * 0.45, w * 0.4, h * 0.15, -0.5, 0, Math.PI * 2);
    ctx.fill();
    ctx.stroke();
    
    // Right leaf
    ctx.beginPath();
    ctx.ellipse(x + w * 0.5, y - h * 0.45, w * 0.4, h * 0.15, 0.5, 0, Math.PI * 2);
    ctx.fill();
    ctx.stroke();
    
    // Leaf veins
    ctx.strokeStyle = '#1B5E20';
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(x - w * 0.5, y - h * 0.45);
    ctx.lineTo(x - w * 0.15, y - h * 0.42);
    ctx.stroke();
    
    ctx.beginPath();
    ctx.moveTo(x + w * 0.5, y - h * 0.45);
    ctx.lineTo(x + w * 0.15, y - h * 0.42);
    ctx.stroke();
    
    // Root system
    ctx.strokeStyle = '#FDD835';
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.moveTo(x, y + h * 0.1);
    ctx.lineTo(x, y + h * 0.8);
    ctx.stroke();
    
    // Lateral roots
    ctx.lineWidth = 2;
    for(let i = 0; i < 4; i++) {
      const rootY = y + h * 0.3 + i * h * 0.13;
      ctx.beginPath();
      ctx.moveTo(x, rootY);
      ctx.lineTo(x - w * 0.3, rootY + h * 0.08);
      ctx.stroke();
      
      ctx.beginPath();
      ctx.moveTo(x, rootY);
      ctx.lineTo(x + w * 0.3, rootY + h * 0.08);
      ctx.stroke();
    }
  }

  static drawYoungSeedling(ctx, x, y, w, h, seedType) {
    // Well-developed root system
    ctx.strokeStyle = '#F9A825';
    ctx.lineWidth = 4;
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineTo(x, y + h * 0.7);
    ctx.stroke();
    
    // Extensive lateral roots
    ctx.lineWidth = 2.5;
    for(let i = 0; i < 6; i++) {
      const rootY = y + h * 0.15 + i * h * 0.1;
      const angle = (i % 2 === 0 ? -0.4 : 0.4);
      
      ctx.beginPath();
      ctx.moveTo(x, rootY);
      ctx.quadraticCurveTo(
        x + (i % 2 === 0 ? -w * 0.3 : w * 0.3),
        rootY + h * 0.05,
        x + (i % 2 === 0 ? -w * 0.5 : w * 0.5),
        rootY + h * 0.12
      );
      ctx.stroke();
      
      // Root hairs
      ctx.lineWidth = 1;
      for(let j = 0; j < 3; j++) {
        const hairX = x + (i % 2 === 0 ? -w * 0.2 : w * 0.2) - j * w * 0.1;
        const hairY = rootY + h * 0.04 + j * h * 0.03;
        ctx.beginPath();
        ctx.moveTo(hairX, hairY);
        ctx.lineTo(hairX + (i % 2 === 0 ? -w * 0.15 : w * 0.15), hairY + h * 0.02);
        ctx.stroke();
      }
      ctx.lineWidth = 2.5;
    }
    
    // Stem
    ctx.fillStyle = '#7CB342';
    ctx.strokeStyle = '#558B2F';
    ctx.lineWidth = 3;
    ctx.fillRect(x - w * 0.08, y - h * 0.5, w * 0.16, h * 0.5);
    ctx.strokeRect(x - w * 0.08, y - h * 0.5, w * 0.16, h * 0.5);
    
    if(seedType === 'dicot') {
      // Multiple pairs of true leaves
      const leafPairs = [
        {y: -0.45, size: 0.8},
        {y: -0.35, size: 0.9},
        {y: -0.25, size: 1.0}
      ];
      
      leafPairs.forEach(pair => {
        ctx.fillStyle = '#43A047';
        ctx.strokeStyle = '#1B5E20';
        ctx.lineWidth = 2;
        
        // Left leaf
        ctx.beginPath();
        ctx.ellipse(
          x - w * 0.6 * pair.size,
          y + h * pair.y,
          w * 0.5 * pair.size,
          h * 0.15 * pair.size,
          -0.6,
          0, Math.PI * 2
        );
        ctx.fill();
        ctx.stroke();
        
        // Right leaf
        ctx.beginPath();
        ctx.ellipse(
          x + w * 0.6 * pair.size,
          y + h * pair.y,
          w * 0.5 * pair.size,
          h * 0.15 * pair.size,
          0.6,
          0, Math.PI * 2
        );
        ctx.fill();
        ctx.stroke();
        
        // Veins
        ctx.strokeStyle = '#2E7D32';
        ctx.lineWidth = 1;
        for(let i = -1; i <= 1; i++) {
          ctx.beginPath();
          ctx.moveTo(x - w * 0.12, y + h * pair.y);
          ctx.lineTo(x - w * 0.5 * pair.size, y + h * pair.y + i * h * 0.05 * pair.size);
          ctx.stroke();
          
          ctx.beginPath();
          ctx.moveTo(x + w * 0.12, y + h * pair.y);
          ctx.lineTo(x + w * 0.5 * pair.size, y + h * pair.y + i * h * 0.05 * pair.size);
          ctx.stroke();
        }
      });
      
      // Cotyledons withering
      ctx.fillStyle = 'rgba(139, 69, 19, 0.5)';
      ctx.strokeStyle = '#5D4037';
      ctx.lineWidth = 1.5;
      ctx.setLineDash([3, 3]);
      
      ctx.beginPath();
      ctx.ellipse(x - w * 0.3, y - h * 0.05, w * 0.25, h * 0.1, -0.3, 0, Math.PI * 2);
      ctx.fill();
      ctx.stroke();
      
      ctx.beginPath();
      ctx.ellipse(x + w * 0.3, y - h * 0.05, w * 0.25, h * 0.1, 0.3, 0, Math.PI * 2);
      ctx.fill();
      ctx.stroke();
      
      ctx.setLineDash([]);
    } else {
      // Monocot - parallel-veined leaves
      for(let i = 0; i < 3; i++) {
        const leafY = y + h * (-0.4 + i * 0.08);
        const leafSize = 0.8 + i * 0.1;
        ctx.fillStyle = '#4CAF50';
        ctx.strokeStyle = '#2E7D32';
        ctx.lineWidth = 2;
        
        // Elongated grass-like leaf
        ctx.beginPath();
        ctx.moveTo(x, leafY);
        ctx.quadraticCurveTo(
          x - w * 0.4 * leafSize,
          leafY - h * 0.08,
          x - w * 0.6 * leafSize,
          leafY - h * 0.15
        );
        ctx.quadraticCurveTo(
          x - w * 0.55 * leafSize,
          leafY - h * 0.12,
          x, leafY
        );
        ctx.fill();
        ctx.stroke();
        
        // Parallel veins
        ctx.strokeStyle = '#1B5E20';
        ctx.lineWidth = 0.5;
        for(let j = -2; j <= 2; j++) {
          ctx.beginPath();
          ctx.moveTo(x, leafY);
          ctx.quadraticCurveTo(
            x - w * 0.3 * leafSize + j * w * 0.05,
            leafY - h * 0.08,
            x - w * 0.6 * leafSize,
            leafY - h * 0.15
          );
          ctx.stroke();
        }
      }
    }
  }

  static drawGerminationStage(ctx, w, h, stage, seedType) {
    const centerX = w * 0.5;
    const centerY = h * 0.5;
    
    // Title
    ctx.fillStyle = '#000000';
    ctx.font = `bold ${h * 0.05}px Arial`;
    const stageNames = {
      'imbibition': 'Imbibition (Water Uptake)',
      'activation': 'Metabolic Activation',
      'radicle-emergence': 'Radicle Emergence',
      'shoot-emergence': 'Shoot Emergence',
      'seedling': 'Young Seedling'
    };
    ctx.fillText(stageNames[stage] || stage, w * 0.2, h * 0.08);
    
    // Draw detailed view based on stage
    switch(stage) {
      case 'imbibition':
        this.drawImbibitionDetail(ctx, centerX, centerY, w * 0.6, h * 0.7, seedType);
        break;
      case 'activation':
        this.drawActivationDetail(ctx, centerX, centerY, w * 0.6, h * 0.7, seedType);
        break;
      case 'radicle-emergence':
        this.drawRadicleEmergence(ctx, centerX, centerY, w * 0.35, h * 0.6, seedType);
        break;
      case 'shoot-emergence':
        this.drawShootEmergence(ctx, centerX, centerY, w * 0.4, h * 0.7, seedType);
        break;
      case 'seedling':
        this.drawYoungSeedling(ctx, centerX, centerY, w * 0.5, h * 0.8, seedType);
        break;
    }
  }

  static drawImbibitionDetail(ctx, x, y, w, h, seedType) {
    // Before (dry seed)
    ctx.fillStyle = '#000000';
    ctx.font = `bold ${h * 0.04}px Arial`;
    ctx.fillText('Before', x - w * 0.45, y - h * 0.45);
    
    ctx.fillStyle = '#8D6E63';
    ctx.strokeStyle = '#5D4037';
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.ellipse(x - w * 0.25, y - h * 0.25, w * 0.15, h * 0.2, 0, 0, Math.PI * 2);
    ctx.fill();
    ctx.stroke();
    
    // After (swollen seed)
    ctx.fillStyle = '#000000';
    ctx.font = `bold ${h * 0.04}px Arial`;
    ctx.fillText('After (24 hrs)', x + w * 0.15, y - h * 0.45);
    
    ctx.fillStyle = '#A1887F';
    ctx.strokeStyle = '#6D4C41';
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.ellipse(x + w * 0.25, y - h * 0.25, w * 0.22, h * 0.28, 0, 0, Math.PI * 2);
    ctx.fill();
    ctx.stroke();
    
    // Water molecules entering
    ctx.fillStyle = '#2196F3';
    for(let i = 0; i < 12; i++) {
      const angle = (i / 12) * Math.PI * 2;
      ctx.beginPath();
      ctx.arc(
        x + w * 0.25 + Math.cos(angle) * w * 0.3,
        y - h * 0.25 + Math.sin(angle) * h * 0.35,
        w * 0.015,
        0, Math.PI * 2
      );
      ctx.fill();
      
      // Arrow showing inward movement
      if(i % 3 === 0) {
        ctx.fillStyle = '#1976D2';
        ctx.beginPath();
        ctx.moveTo(
          x + w * 0.25 + Math.cos(angle) * w * 0.3,
          y - h * 0.25 + Math.sin(angle) * h * 0.35
        );
        ctx.lineTo(
          x + w * 0.25 + Math.cos(angle) * w * 0.26,
          y - h * 0.25 + Math.sin(angle) * h * 0.31 - h * 0.02
        );
        ctx.lineTo(
          x + w * 0.25 + Math.cos(angle) * w * 0.26,
          y - h * 0.25 + Math.sin(angle) * h * 0.31 + h * 0.02
        );
        ctx.fill();
        ctx.fillStyle = '#2196F3';
      }
    }
    
    // Seed coat detail (bottom)
    ctx.fillStyle = '#000000';
    ctx.font = `bold ${h * 0.035}px Arial`;
    ctx.fillText('Seed Coat Cross-Section', x - w * 0.3, y + h * 0.15);
    
    // Dry seed coat layers
    const dryX = x - w * 0.25;
    const dryY = y + h * 0.3;
    
    ctx.fillStyle = '#8D6E63';
    ctx.strokeStyle = '#5D4037';
    ctx.lineWidth = 2;
    ctx.fillRect(dryX - w * 0.15, dryY - h * 0.08, w * 0.3, h * 0.16);
    ctx.strokeRect(dryX - w * 0.15, dryY - h * 0.08, w * 0.3, h * 0.16);
    
    ctx.fillStyle = '#6D4C41';
    ctx.fillRect(dryX - w * 0.12, dryY - h * 0.05, w * 0.24, h * 0.1);
    
    ctx.fillStyle = '#000000';
    ctx.font = `${h * 0.025}px Arial`;
    ctx.fillText('Compact', dryX - w * 0.1, dryY - h * 0.12);
    
    // Swollen seed coat
    const swollenX = x + w * 0.25;
    const swollenY = y + h * 0.3;
    
    ctx.fillStyle = '#A1887F';
    ctx.strokeStyle = '#6D4C41';
    ctx.lineWidth = 2;
    ctx.fillRect(swollenX - w * 0.18, swollenY - h * 0.1, w * 0.36, h * 0.2);
    ctx.strokeRect(swollenX - w * 0.18, swollenY - h * 0.1, w * 0.36, h * 0.2);
    
    // Water between cells
    ctx.fillStyle = '#90CAF9';
    for(let i = 0; i < 8; i++) {
      ctx.beginPath();
      ctx.arc(
        swollenX - w * 0.15 + (i % 4) * w * 0.1,
        swollenY - h * 0.06 + Math.floor(i / 4) * h * 0.12,
        w * 0.012,
        0, Math.PI * 2
      );
      ctx.fill();
    }
    
    ctx.fillStyle = '#000000';
    ctx.font = `${h * 0.025}px Arial`;
    ctx.fillText('Expanded', swollenX - w * 0.08, swollenY - h * 0.14);
    
    // Percentage increase
    ctx.fillStyle = '#1976D2';
    ctx.font = `bold ${h * 0.03}px Arial`;
    ctx.fillText('Volume increase: 200-300%', x - w * 0.25, y + h * 0.5);
  }

  static drawActivationDetail(ctx, x, y, w, h, seedType) {
    // Seed outline
    ctx.fillStyle = '#BCAAA4';
    ctx.strokeStyle = '#6D4C41';
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.ellipse(x, y - h * 0.1, w * 0.35, h * 0.45, 0, 0, Math.PI * 2);
    ctx.fill();
    ctx.stroke();
    
    // Internal structures
    // Embryo
    ctx.fillStyle = '#FFF9C4';
    ctx.strokeStyle = '#F57F17';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.ellipse(x, y - h * 0.1, w * 0.2, h * 0.3, 0, 0, Math.PI * 2);
    ctx.fill();
    ctx.stroke();
    
    // Embryonic axis
    ctx.fillStyle = '#C5E1A5';
    ctx.fillRect(x - w * 0.03, y - h * 0.3, w * 0.06, h * 0.4);
    
    // Radicle
    ctx.fillStyle = '#FFEB3B';
    ctx.beginPath();
    ctx.moveTo(x - w * 0.025, y + h * 0.1);
    ctx.lineTo(x + w * 0.025, y + h * 0.1);
    ctx.lineTo(x, y + h * 0.2);
    ctx.fill();
    
    // Plumule
    ctx.fillStyle = '#66BB6A';
    ctx.beginPath();
    ctx.moveTo(x - w * 0.025, y - h * 0.3);
    ctx.lineTo(x + w * 0.025, y - h * 0.3);
    ctx.lineTo(x, y - h * 0.4);
    ctx.fill();
    
    // Cotyledons
    ctx.fillStyle = '#AED581';
    ctx.strokeStyle = '#558B2F';
    ctx.lineWidth = 2;
    
    ctx.beginPath();
    ctx.ellipse(x - w * 0.15, y - h * 0.1, w * 0.12, h * 0.2, -0.3, 0, Math.PI * 2);
    ctx.fill();
    ctx.stroke();
    
    ctx.beginPath();
    ctx.ellipse(x + w * 0.15, y - h * 0.1, w * 0.12, h * 0.2, 0.3, 0, Math.PI * 2);
    ctx.fill();
    ctx.stroke();
    
    // Endosperm (if monocot)
    if(seedType === 'monocot') {
      ctx.fillStyle = 'rgba(255, 235, 59, 0.5)';
      ctx.beginPath();
      ctx.ellipse(x, y - h * 0.1, w * 0.28, h * 0.38, 0, 0, Math.PI * 2);
      ctx.fill();
    }
    
    // Metabolic processes (right side)
    const processX = x + w * 0.5;
    const processY = y - h * 0.2;
    
    ctx.fillStyle = '#000000';
    ctx.font = `bold ${h * 0.035}px Arial`;
    ctx.fillText('Metabolic Changes:', processX, processY);
    
    const processes = [
      {icon: '🔥', text: 'Respiration increases', color: '#F44336'},
      {icon: '⚡', text: 'Enzymes activated', color: '#FF9800'},
      {icon: '🧬', text: 'DNA/RNA synthesis', color: '#9C27B0'},
      {icon: '🔨', text: 'Protein synthesis', color: '#2196F3'},
      {icon: '💧', text: 'Hydrolysis of reserves', color: '#4CAF50'}
    ];
    
    ctx.font = `${h * 0.028}px Arial`;
    processes.forEach((proc, i) => {
      ctx.fillStyle = proc.color;
      ctx.fillText(`${proc.icon} ${proc.text}`, processX, processY + h * 0.08 + i * h * 0.08);
    });
    
    // Energy molecule (ATP)
    ctx.fillStyle = '#FFC107';
    ctx.strokeStyle = '#F57C00';
    ctx.lineWidth = 2;
    
    for(let i = 0; i < 3; i++) {
      ctx.beginPath();
      ctx.arc(x - w * 0.4, y + h * 0.35 + i * h * 0.08, w * 0.03, 0, Math.PI * 2);
      ctx.fill();
      ctx.stroke();
      
      ctx.fillStyle = '#000000';
      ctx.font = `bold ${h * 0.02}px Arial`;
      ctx.fillText('ATP', x - w * 0.42, y + h * 0.36 + i * h * 0.08);
      ctx.fillStyle = '#FFC107';
    }
    
    ctx.fillStyle = '#000000';
    ctx.font = `${h * 0.025}px Arial`;
    ctx.fillText('Energy production', x - w * 0.48, y + h * 0.52);
  }

  // ===== TROPISMS =====
  static drawTropisms(ctx, x, y, width, height, tropismType, mechanism) {
    ctx.save();
    ctx.translate(x, y);
    
    if(tropismType === 'all') {
      this.drawAllTropisms(ctx, width, height);
    } else {
      this.drawSingleTropism(ctx, width, height, tropismType, mechanism);
    }
    
    ctx.restore();
  }

  static drawAllTropisms(ctx, w, h) {
    // Title
    ctx.fillStyle = '#000000';
    ctx.font = `bold ${h * 0.05}px Arial`;
    ctx.fillText('Plant Tropisms - Growth Responses', w * 0.22, h * 0.06);
    
    const tropisms = [
      {
        type: 'phototropism',
        x: 0.25,
        y: 0.35,
        title: 'Phototropism',
        subtitle: '(Light response)'
      },
      {
        type: 'gravitropism',
        x: 0.75,
        y: 0.35,
        title: 'Gravitropism',
        subtitle: '(Gravity response)'
      },
      {
        type: 'thigmotropism',
        x: 0.5,
        y: 0.75,
        title: 'Thigmotropism',
        subtitle: '(Touch response)'
      }
    ];
    
    tropisms.forEach(tropism => {
      const centerX = tropism.x * w;
      const centerY = tropism.y * h;
      
      // Title for each
      ctx.fillStyle = '#1B5E20';
      ctx.font = `bold ${h * 0.04}px Arial`;
      ctx.fillText(tropism.title, centerX - w * 0.1, centerY - h * 0.25);
      
      ctx.fillStyle = '#000000';
      ctx.font = `${h * 0.025}px Arial`;
      ctx.fillText(tropism.subtitle, centerX - w * 0.08, centerY - h * 0.21);
      
      // Draw small version
      switch(tropism.type) {
        case 'phototropism':
          this.drawPhototropismSmall(ctx, centerX, centerY, w * 0.2, h * 0.3);
          break;
        case 'gravitropism':
          this.drawGravitropismSmall(ctx, centerX, centerY, w * 0.2, h * 0.3);
          break;
        case 'thigmotropism':
          this.drawThigmotropismSmall(ctx, centerX, centerY, w * 0.2, h * 0.15);
          break;
      }
    });
  }

  static drawPhototropismSmall(ctx, x, y, w, h) {
    // Light source
    ctx.fillStyle = '#FFD700';
    ctx.strokeStyle = '#FF6F00';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.arc(x - w * 0.8, y - h * 0.6, w * 0.15, 0, Math.PI * 2);
    ctx.fill();
    ctx.stroke();
    
    // Light rays
    for(let i = 0; i < 8; i++) {
      const angle = (i / 8) * Math.PI * 2;
      ctx.strokeStyle = '#FFEB3B';
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(
        x - w * 0.8 + Math.cos(angle) * w * 0.15,
        y - h * 0.6 + Math.sin(angle) * w * 0.15
      );
      ctx.lineTo(
        x - w * 0.8 + Math.cos(angle) * w * 0.25,
        y - h * 0.6 + Math.sin(angle) * w * 0.25
      );
      ctx.stroke();
    }
    
    // Plant bending toward light
    ctx.strokeStyle = '#4CAF50';
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.moveTo(x, y + h * 0.5);
    ctx.quadraticCurveTo(x - w * 0.2, y + h * 0.2, x - w * 0.4, y - h * 0.3);
    ctx.stroke();
    
    // Leaves
    ctx.fillStyle = '#66BB6A';
    ctx.strokeStyle = '#2E7D32';
    ctx.lineWidth = 1.5;
    
    for(let i = 0; i < 3; i++) {
      const leafY = y + h * 0.3 - i * h * 0.3;
      const leafX = x - w * 0.15 - i * w * 0.08;
      
      ctx.beginPath();
      ctx.ellipse(leafX - w * 0.15, leafY, w * 0.12, h * 0.08, -0.5, 0, Math.PI * 2);
      ctx.fill();
      ctx.stroke();
    }
    
    // Arrow showing direction
    ctx.fillStyle = '#1976D2';
    ctx.beginPath();
    ctx.moveTo(x - w * 0.5, y);
    ctx.lineTo(x - w * 0.45, y - h * 0.05);
    ctx.lineTo(x - w * 0.45, y + h * 0.05);
    ctx.fill();
  }

  static drawGravitropismSmall(ctx, x, y, w, h) {
    // Soil line
    ctx.fillStyle = '#8D6E63';
    ctx.fillRect(x - w * 0.5, y, w, h * 0.05);
    
    // Shoot growing upward (negative gravitropism)
    ctx.strokeStyle = '#4CAF50';
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineTo(x, y - h * 0.8);
    ctx.stroke();
    
    // Leaves on shoot
    ctx.fillStyle = '#66BB6A';
    ctx.strokeStyle = '#2E7D32';
    ctx.lineWidth = 1.5;
    
    for(let i = 0; i < 3; i++) {
      const leafY = y - h * 0.3 - i * h * 0.2;
      
      ctx.beginPath();
      ctx.ellipse(x - w * 0.15, leafY, w * 0.12, h * 0.06, -0.3, 0, Math.PI * 2);
      ctx.fill();
      ctx.stroke();
      
      ctx.beginPath();
      ctx.ellipse(x + w * 0.15, leafY, w * 0.12, h * 0.06, 0.3, 0, Math.PI * 2);
      ctx.fill();
      ctx.stroke();
    }
    
    // Root growing downward (positive gravitropism)
    ctx.strokeStyle = '#F9A825';
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.moveTo(x, y + h * 0.05);
    ctx.lineTo(x, y + h * 0.8);
    ctx.stroke();
    
    // Root branches
    ctx.lineWidth = 2;
    for(let i = 0; i < 3; i++) {
      const rootY = y + h * 0.2 + i * h * 0.2;
      
      ctx.beginPath();
      ctx.moveTo(x, rootY);
      ctx.lineTo(x - w * 0.12, rootY + h * 0.08);
      ctx.stroke();
      
      ctx.beginPath();
      ctx.moveTo(x, rootY);
      ctx.lineTo(x + w * 0.12, rootY + h * 0.08);
      ctx.stroke();
    }
    
    // Gravity arrows
    ctx.fillStyle = '#F44336';
    ctx.font = `bold ${h * 0.08}px Arial`;
    ctx.fillText('⬇', x - w * 0.35, y + h * 0.4);
    ctx.font = `${h * 0.03}px Arial`;
    ctx.fillText('Gravity', x - w * 0.42, y + h * 0.5);
    
    // Direction labels
    ctx.fillStyle = '#1976D2';
    ctx.font = `${h * 0.035}px Arial`;
    ctx.fillText('Negative', x + w * 0.15, y - h * 0.5);
    ctx.fillText('Positive', x + w * 0.15, y + h * 0.5);
  }

  static drawThigmotropismSmall(ctx, x, y, w, h) {
    // Support structure (pole/trellis)
    ctx.strokeStyle = '#795548';
    ctx.lineWidth = 4;
    ctx.beginPath();
    ctx.moveTo(x, y - h);
    ctx.lineTo(x, y + h);
    ctx.stroke();
    
    // Tendril coiling around support
    ctx.strokeStyle = '#7CB342';
    ctx.lineWidth = 3;
    
    const coils = 6;
    ctx.beginPath();
    ctx.moveTo(x - w * 0.3, y - h * 0.8);
    
    for(let i = 0; i <= coils; i++) {
      const t = i / coils;
      const spiralY = y - h * 0.8 + t * h * 1.4;
      const spiralX = x + Math.sin(t * Math.PI * 2 * coils) * w * 0.12;
      ctx.lineTo(spiralX, spiralY);
    }
    ctx.stroke();
    
    // Main stem
    ctx.strokeStyle = '#4CAF50';
    ctx.lineWidth = 2.5;
    ctx.beginPath();
    ctx.moveTo(x - w * 0.3, y + h);
    ctx.lineTo(x - w * 0.3, y - h * 0.8);
    ctx.stroke();
    
    // Touch/contact points
    ctx.fillStyle = '#FF5722';
    for(let i = 0; i < 5; i++) {
      const t = i / 4;
      const spiralY = y - h * 0.5 + t * h * 0.8;
      ctx.beginPath();
      ctx.arc(x, spiralY, w * 0.025, 0, Math.PI * 2);
      ctx.fill();
    }
    
    // Arrow showing coiling direction
    ctx.strokeStyle = '#1976D2';
    ctx.lineWidth = 2;
    ctx.setLineDash([5, 5]);
    ctx.beginPath();
    ctx.arc(x, y, w * 0.2, -Math.PI / 2, Math.PI / 2, false);
    ctx.stroke();
    ctx.setLineDash([]);
    
    ctx.fillStyle = '#1976D2';
    ctx.beginPath();
    ctx.moveTo(x + w * 0.2, y);
    ctx.lineTo(x + w * 0.17, y - h * 0.05);
    ctx.lineTo(x + w * 0.17, y + h * 0.05);
    ctx.fill();
  }

  static drawSingleTropism(ctx, w, h, tropismType, mechanism) {
    // Draw detailed version based on type
    switch(tropismType) {
      case 'phototropism':
        this.drawPhototropismDetail(ctx, w, h, mechanism);
        break;
      case 'gravitropism':
        this.drawGravitropismDetail(ctx, w, h, mechanism);
        break;
      case 'thigmotropism':
        this.drawThigmotropismDetail(ctx, w, h, mechanism);
        break;
      case 'hydrotropism':
        this.drawHydrotropismDetail(ctx, w, h, mechanism);
        break;
    }
  }

  static drawPhototropismDetail(ctx, w, h, mechanism) {
    // Title
    ctx.fillStyle = '#000000';
    ctx.font = `bold ${h * 0.05}px Arial`;
    ctx.fillText('Phototropism - Growth Toward Light', w * 0.2, h * 0.06);
    
    // Light source (left side)
    const lightX = w * 0.15;
    const lightY = h * 0.3;
    
    ctx.fillStyle = '#FFD700';
    ctx.strokeStyle = '#FF6F00';
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.arc(lightX, lightY, w * 0.08, 0, Math.PI * 2);
    ctx.fill();
    ctx.stroke();
    
    // Light rays
    for(let i = 0; i < 12; i++) {
      const angle = (i / 12) * Math.PI * 2;
      ctx.strokeStyle = '#FFEB3B';
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(
        lightX + Math.cos(angle) * w * 0.08,
        lightY + Math.sin(angle) * w * 0.08
      );
      ctx.lineTo(
        lightX + Math.cos(angle) * w * 0.13,
        lightY + Math.sin(angle) * w * 0.13
      );
      ctx.stroke();
    }
    
    // Plant bending toward light
    const plantX = w * 0.5;
    const soilY = h * 0.7;
    
    // Soil
    ctx.fillStyle = '#8D6E63';
    ctx.fillRect(0, soilY, w, h * 0.3);
    
    // Root
    ctx.strokeStyle = '#F9A825';
    ctx.lineWidth = 4;
    ctx.beginPath();
    ctx.moveTo(plantX, soilY);
    ctx.lineTo(plantX, soilY + h * 0.2);
    ctx.stroke();
    
    // Stem curving toward light
    ctx.strokeStyle = '#4CAF50';
    ctx.lineWidth = 5;
    ctx.beginPath();
    ctx.moveTo(plantX, soilY);
    ctx.quadraticCurveTo(
      plantX - w * 0.1, soilY - h * 0.2,
      plantX - w * 0.25, soilY - h * 0.45
    );
    ctx.stroke();
    
    // Leaves
    ctx.fillStyle = '#66BB6A';
    ctx.strokeStyle = '#2E7D32';
    ctx.lineWidth = 2;
    
    const leafPositions = [
      {x: plantX - w * 0.05, y: soilY - h * 0.15},
      {x: plantX - w * 0.15, y: soilY - h * 0.3},
      {x: plantX - w * 0.25, y: soilY - h * 0.45}
    ];
    
    leafPositions.forEach(pos => {
      ctx.beginPath();
      ctx.ellipse(pos.x - w * 0.08, pos.y, w * 0.08, h * 0.06, -0.5, 0, Math.PI * 2);
      ctx.fill();
      ctx.stroke();
      
      ctx.beginPath();
      ctx.ellipse(pos.x + w * 0.08, pos.y, w * 0.08, h * 0.06, 0.5, 0, Math.PI * 2);
      ctx.fill();
      ctx.stroke();
    });
    
    // Auxin distribution (mechanism)
    if(mechanism === 'auxin-distribution' || mechanism === 'cell-elongation') {
      const auxinX = w * 0.75;
      const auxinY = h * 0.35;
      
      ctx.fillStyle = '#000000';
      ctx.font = `bold ${h * 0.04}px Arial`;
      ctx.fillText('Auxin Distribution:', auxinX, auxinY - h * 0.15);
      
      // Stem cross-section
      ctx.strokeStyle = '#2E7D32';
      ctx.lineWidth = 3;
      ctx.beginPath();
      ctx.arc(auxinX, auxinY, w * 0.08, 0, Math.PI * 2);
      ctx.stroke();
      
      // Shaded side (more auxin - away from light)
      ctx.fillStyle = '#9C27B0';
      ctx.beginPath();
      ctx.arc(auxinX, auxinY, w * 0.08, Math.PI / 2, Math.PI * 3 / 2);
      ctx.lineTo(auxinX, auxinY);
      ctx.closePath();
      ctx.fill();
      
      // Light side (less auxin)
      ctx.fillStyle = 'rgba(156, 39, 176, 0.3)';
      ctx.beginPath();
      ctx.arc(auxinX, auxinY, w * 0.08, -Math.PI / 2, Math.PI / 2);
      ctx.lineTo(auxinX, auxinY);
      ctx.closePath();
      ctx.fill();
      
      // Labels
      ctx.fillStyle = '#9C27B0';
      ctx.font = `bold ${h * 0.03}px Arial`;
      ctx.fillText('High auxin', auxinX + w * 0.1, auxinY);
      ctx.fillText('(Shaded side)', auxinX + w * 0.1, auxinY + h * 0.04);
      
      ctx.fillStyle = 'rgba(156, 39, 176, 0.6)';
      ctx.fillText('Low auxin', auxinX - w * 0.25, auxinY);
      ctx.fillText('(Light side)', auxinX - w * 0.25, auxinY + h * 0.04);
      
      // Cell elongation diagram
      ctx.fillStyle = '#000000';
      ctx.font = `bold ${h * 0.035}px Arial`;
      ctx.fillText('Cell Elongation:', auxinX - w * 0.1, auxinY + h * 0.2);
      
      // Shaded side cells (elongated)
      ctx.fillStyle = '#C5E1A5';
      ctx.strokeStyle = '#558B2F';
      ctx.lineWidth = 2;
      for(let i = 0; i < 3; i++) {
        ctx.fillRect(
          auxinX + w * 0.02,
          auxinY + h * 0.25 + i * h * 0.12,
          w * 0.06,
          h * 0.1
        );
        ctx.strokeRect(
          auxinX + w * 0.02,
          auxinY + h * 0.25 + i * h * 0.12,
          w * 0.06,
          h * 0.1
        );
      }
      
      // Light side cells (shorter)
      for(let i = 0; i < 4; i++) {
        ctx.fillRect(
          auxinX - w * 0.08,
          auxinY + h * 0.25 + i * h * 0.09,
          w * 0.06,
          h * 0.07
        );
        ctx.strokeRect(
          auxinX - w * 0.08,
          auxinY + h * 0.25 + i * h * 0.09,
          w * 0.06,
          h * 0.07
        );
      }
      
      // Bending arrow
      ctx.strokeStyle = '#F44336';
      ctx.lineWidth = 3;
      ctx.beginPath();
      ctx.arc(auxinX, auxinY + h * 0.35, w * 0.1, 0, Math.PI / 2);
      ctx.stroke();
      
      ctx.fillStyle = '#F44336';
      ctx.beginPath();
      ctx.moveTo(auxinX + w * 0.1, auxinY + h * 0.35);
      ctx.lineTo(auxinX + w * 0.08, auxinY + h * 0.32);
      ctx.lineTo(auxinX + w * 0.12, auxinY + h * 0.32);
      ctx.fill();
    }
    
    // Bottom explanation
    ctx.fillStyle = '#0D47A1';
    ctx.font = `bold ${h * 0.03}px Arial`;
    ctx.fillText('Mechanism: Auxin redistribution → Differential cell elongation → Bending', w * 0.05, h * 0.95);
  }

  static drawGravitropismDetail(ctx, w, h, mechanism) {
    // Title
    ctx.fillStyle = '#000000';
    ctx.font = `bold ${h * 0.05}px Arial`;
    ctx.fillText('Gravitropism - Growth Response to Gravity', w * 0.18, h * 0.06);
    
    const centerX = w * 0.35;
    const soilY = h * 0.5;
    
    // Soil
    ctx.fillStyle = '#8D6E63';
    ctx.fillRect(0, soilY, w * 0.7, h * 0.5);
    
    // Shoot (negative gravitropism - grows against gravity)
    ctx.strokeStyle = '#4CAF50';
    ctx.lineWidth = 5;
    ctx.beginPath();
    ctx.moveTo(centerX, soilY);
    ctx.lineTo(centerX, soilY - h * 0.4);
    ctx.stroke();
    
    // Leaves on shoot
    ctx.fillStyle = '#66BB6A';
    ctx.strokeStyle = '#2E7D32';
    ctx.lineWidth = 2;
    
    for(let i = 0; i < 4; i++) {
      const leafY = soilY - h * 0.12 - i * h * 0.09;
      
      ctx.beginPath();
      ctx.ellipse(centerX - w * 0.08, leafY, w * 0.07, h * 0.05, -0.4, 0, Math.PI * 2);
      ctx.fill();
      ctx.stroke();
      
      ctx.beginPath();
      ctx.ellipse(centerX + w * 0.08, leafY, w * 0.07, h * 0.05, 0.4, 0, Math.PI * 2);
      ctx.fill();
      ctx.stroke();
    }
    
    // Root (positive gravitropism - grows with gravity)
    ctx.strokeStyle = '#F9A825';
    ctx.lineWidth = 5;
    ctx.beginPath();
    ctx.moveTo(centerX, soilY);
    ctx.lineTo(centerX, soilY + h * 0.35);
    ctx.stroke();
    
    // Lateral roots
    ctx.lineWidth = 3;
    for(let i = 0; i < 4; i++) {
      const rootY = soilY + h * 0.1 + i * h * 0.08;
      
      ctx.beginPath();
      ctx.moveTo(centerX, rootY);
      ctx.lineTo(centerX - w * 0.08, rootY + h * 0.05);
      ctx.stroke();
      
      ctx.beginPath();
      ctx.moveTo(centerX, rootY);
      ctx.lineTo(centerX + w * 0.08, rootY + h * 0.05);
      ctx.stroke();
    }
    
    // Gravity indicator
    ctx.fillStyle = '#F44336';
    ctx.font = `bold ${h * 0.1}px Arial`;
    ctx.fillText('⬇', w * 0.05, h * 0.35);
    
    ctx.font = `bold ${h * 0.04}px Arial`;
    ctx.fillText('GRAVITY', w * 0.02, h * 0.45);
    
    // Direction arrows
    ctx.strokeStyle = '#1976D2';
    ctx.lineWidth = 4;
    
    // Upward arrow for shoot
    ctx.beginPath();
    ctx.moveTo(centerX + w * 0.12, soilY - h * 0.3);
    ctx.lineTo(centerX + w * 0.12, soilY - h * 0.15);
    ctx.stroke();
    
    ctx.fillStyle = '#1976D2';
    ctx.beginPath();
    ctx.moveTo(centerX + w * 0.12, soilY - h * 0.3);
    ctx.lineTo(centerX + w * 0.1, soilY - h * 0.27);
    ctx.lineTo(centerX + w * 0.14, soilY - h * 0.27);
    ctx.fill();
    
    ctx.fillStyle = '#1976D2';
    ctx.font = `bold ${h * 0.035}px Arial`;
    ctx.fillText('Negative', centerX + w * 0.16, soilY - h * 0.25);
    ctx.fillText('Gravitropism', centerX + w * 0.16, soilY - h * 0.21);
    
    // Downward arrow for root
    ctx.strokeStyle = '#1976D2';
    ctx.lineWidth = 4;
    ctx.beginPath();
    ctx.moveTo(centerX + w * 0.12, soilY + h * 0.15);
    ctx.lineTo(centerX + w * 0.12, soilY + h * 0.3);
    ctx.stroke();
    
    ctx.fillStyle = '#1976D2';
    ctx.beginPath();
    ctx.moveTo(centerX + w * 0.12, soilY + h * 0.3);
    ctx.lineTo(centerX + w * 0.1, soilY + h * 0.27);
    ctx.lineTo(centerX + w * 0.14, soilY + h * 0.27);
    ctx.fill();
    
    ctx.fillStyle = '#1976D2';
    ctx.font = `bold ${h * 0.035}px Arial`;
    ctx.fillText('Positive', centerX + w * 0.16, soilY + h * 0.2);
    ctx.fillText('Gravitropism', centerX + w * 0.16, soilY + h * 0.24);
    
    // Statoliths mechanism (if showing mechanism)
    if(mechanism === 'statoliths' || mechanism === 'auxin-mechanism') {
      const mechX = w * 0.75;
      const mechY = h * 0.3;
      
      ctx.fillStyle = '#000000';
      ctx.font = `bold ${h * 0.04}px Arial`;
      ctx.fillText('Gravity Sensing:', mechX - w * 0.08, mechY - h * 0.12);
      
      // Root cap cell (vertical)
      ctx.fillStyle = '#FFF9C4';
      ctx.strokeStyle = '#F57F17';
      ctx.lineWidth = 3;
      ctx.fillRect(mechX - w * 0.06, mechY - h * 0.08, w * 0.12, h * 0.16);
      ctx.strokeRect(mechX - w * 0.06, mechY - h * 0.08, w * 0.12, h * 0.16);
      
      // Statoliths (starch-filled plastids) at bottom
      ctx.fillStyle = '#7E57C2';
      for(let i = 0; i < 4; i++) {
        ctx.beginPath();
        ctx.arc(
          mechX - w * 0.04 + (i % 2) * w * 0.08,
          mechY + h * 0.04 + Math.floor(i / 2) * h * 0.03,
          w * 0.015,
          0, Math.PI * 2
        );
        ctx.fill();
      }
      
      ctx.fillStyle = '#673AB7';
      ctx.font = `${h * 0.025}px Arial`;
      ctx.fillText('Statoliths', mechX - w * 0.05, mechY + h * 0.12);
      ctx.fillText('(settle down)', mechX - w * 0.06, mechY + h * 0.16);
      
      // Root cap cell (tilted)
      const tiltX = mechX + w * 0.15;
      const tiltY = mechY + h * 0.3;
      
      ctx.save();
      ctx.translate(tiltX, tiltY);
      ctx.rotate(Math.PI / 4);
      
      ctx.fillStyle = '#FFF9C4';
      ctx.strokeStyle = '#F57F17';
      ctx.lineWidth = 3;
      ctx.fillRect(-w * 0.06, -h * 0.08, w * 0.12, h * 0.16);
      ctx.strokeRect(-w * 0.06, -h * 0.08, w * 0.12, h * 0.16);
      
      // Statoliths settling to lower side
      ctx.fillStyle = '#7E57C2';
      for(let i = 0; i < 4; i++) {
        ctx.beginPath();
        ctx.arc(
          w * 0.02 + (i % 2) * w * 0.03,
          h * 0.04 + Math.floor(i / 2) * h * 0.03,
          w * 0.015,
          0, Math.PI * 2
        );
        ctx.fill();
      }
      
      ctx.restore();
      
      ctx.fillStyle = '#673AB7';
      ctx.font = `${h * 0.025}px Arial`;
      ctx.fillText('Statoliths shift', tiltX - w * 0.05, tiltY + h * 0.12);
      ctx.fillText('to lower side', tiltX - w * 0.05, tiltY + h * 0.16);
      
      // Auxin redistribution arrow
      ctx.strokeStyle = '#9C27B0';
      ctx.lineWidth = 3;
      ctx.setLineDash([5, 5]);
      ctx.beginPath();
      ctx.moveTo(tiltX, tiltY + h * 0.18);
      ctx.lineTo(tiltX, tiltY + h * 0.28);
      ctx.stroke();
      ctx.setLineDash([]);
      
      ctx.fillStyle = '#9C27B0';
      ctx.beginPath();
      ctx.moveTo(tiltX, tiltY + h * 0.28);
      ctx.lineTo(tiltX - w * 0.015, tiltY + h * 0.26);
      ctx.lineTo(tiltX + w * 0.015, tiltY + h * 0.26);
      ctx.fill();
      
      ctx.font = `${h * 0.025}px Arial`;
      ctx.fillText('Auxin moves', tiltX + w * 0.03, tiltY + h * 0.22);
      ctx.fillText('to lower side', tiltX + w * 0.03, tiltY + h * 0.26);
    }
    
    // Bottom explanation
    ctx.fillStyle = '#0D47A1';
    ctx.font = `bold ${h * 0.028}px Arial`;
    ctx.fillText('Mechanism: Statoliths detect gravity → Signal transduction → Auxin redistribution → Differential growth', w * 0.02, h * 0.96);
  }

  static drawThigmotropismDetail(ctx, w, h, mechanism) {
    // Title
    ctx.fillStyle = '#000000';
    ctx.font = `bold ${h * 0.05}px Arial`;
    ctx.fillText('Thigmotropism - Growth Response to Touch', w * 0.18, h * 0.06);
    
    const supportX = w * 0.35;
    const soilY = h * 0.8;
    
    // Soil
    ctx.fillStyle = '#8D6E63';
    ctx.fillRect(0, soilY, w, h * 0.2);
    
    // Support structure (trellis/pole)
    ctx.strokeStyle = '#795548';
    ctx.lineWidth = 6;
    ctx.beginPath();
    ctx.moveTo(supportX, h * 0.15);
    ctx.lineTo(supportX, soilY);
    ctx.stroke();
    
    // Horizontal bars
    ctx.lineWidth = 4;
    for(let i = 0; i < 4; i++) {
      const barY = h * 0.25 + i * h * 0.13;
      ctx.beginPath();
      ctx.moveTo(supportX - w * 0.08, barY);
      ctx.lineTo(supportX + w * 0.08, barY);
      ctx.stroke();
    }
    
    // Main vine stem
    ctx.strokeStyle = '#558B2F';
    ctx.lineWidth = 4;
    ctx.beginPath();
    ctx.moveTo(supportX - w * 0.15, soilY);
    ctx.lineTo(supportX - w * 0.15, h * 0.2);
    ctx.stroke();
    
    // Tendrils coiling around support
    const tendrils = [
      {startY: 0.35, height: 0.15, coils: 4},
      {startY: 0.5, height: 0.12, coils: 3},
      {startY: 0.65, height: 0.1, coils: 3}
    ];
    
    tendrils.forEach(tendril => {
      ctx.strokeStyle = '#7CB342';
      ctx.lineWidth = 3;
      ctx.beginPath();
      
      const startY = tendril.startY * h;
      const steps = 50;
      
      ctx.moveTo(supportX - w * 0.15, startY);
      
      for(let i = 0; i <= steps; i++) {
        const t = i / steps;
        const angle = t * Math.PI * 2 * tendril.coils;
        const y = startY + t * tendril.height * h;
        const radius = w * 0.06 * (1 - t * 0.3); // Tighter coils toward tip
        const x = supportX + Math.sin(angle) * radius;
        
        ctx.lineTo(x, y);
      }
      
      ctx.stroke();
      
      // Tendril tip
      ctx.fillStyle = '#8BC34A';
      ctx.beginPath();
      const tipY = startY + tendril.height * h;
      ctx.arc(supportX, tipY, w * 0.015, 0, Math.PI * 2);
      ctx.fill();
    });
    
    // Leaves
    ctx.fillStyle = '#66BB6A';
    ctx.strokeStyle = '#2E7D32';
    ctx.lineWidth = 2;
    
    const leafPositions = [
      {y: 0.3}, {y: 0.45}, {y: 0.6}, {y: 0.75}
    ];
    
    leafPositions.forEach(pos => {
      ctx.beginPath();
      ctx.ellipse(
        supportX - w * 0.22,
        pos.y * h,
        w * 0.08,
        h * 0.06,
        -0.3,
        0, Math.PI * 2
      );
      ctx.fill();
      ctx.stroke();
    });
    
    // Contact points highlighted
    ctx.fillStyle = '#FF5722';
    ctx.strokeStyle = '#BF360C';
    ctx.lineWidth = 2;
    
    for(let i = 0; i < 8; i++) {
      const angle = (i / 8) * Math.PI * 2 * 4;
      const y = h * 0.35 + (i / 7) * h * 0.15;
      const x = supportX + Math.sin(angle) * w * 0.06;
      
      ctx.beginPath();
      ctx.arc(x, y, w * 0.012, 0, Math.PI * 2);
      ctx.fill();
      ctx.stroke();
    }
    
    // Mechanism detail (right side)
    if(mechanism === 'differential-growth' || mechanism === 'cell-elongation') {
      const mechX = w * 0.7;
      const mechY = h * 0.35;
      
      ctx.fillStyle = '#000000';
      ctx.font = `bold ${h * 0.04}px Arial`;
      ctx.fillText('Coiling Mechanism:', mechX - w * 0.08, mechY - h * 0.15);
      
      // Tendril cross-section stages
      const stages = [
        {label: '1. Initial Contact', y: mechY - h * 0.05},
        {label: '2. Cells Elongate', y: mechY + h * 0.08},
        {label: '3. Coiling Begins', y: mechY + h * 0.21}
      ];
      
      stages.forEach((stage, idx) => {
        ctx.fillStyle = '#000000';
        ctx.font = `bold ${h * 0.03}px Arial`;
        ctx.fillText(stage.label, mechX - w * 0.12, stage.y - h * 0.05);
        
        // Tendril cross-section
        ctx.strokeStyle = '#558B2F';
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.arc(mechX, stage.y, w * 0.04, 0, Math.PI * 2);
        ctx.stroke();
        
        if(idx === 0) {
          // Contact side marked
          ctx.fillStyle = '#FF5722';
          ctx.beginPath();
          ctx.arc(mechX + w * 0.04, stage.y, w * 0.008, 0, Math.PI * 2);
          ctx.fill();
          
          ctx.fillStyle = '#000000';
          ctx.font = `${h * 0.02}px Arial`;
          ctx.fillText('Touch', mechX + w * 0.06, stage.y + h * 0.01);
        } else if(idx === 1) {
          // Outer side cells elongated
          ctx.fillStyle = '#C5E1A5';
          ctx.beginPath();
          ctx.arc(mechX, stage.y, w * 0.04, Math.PI, 0);
          ctx.lineTo(mechX, stage.y);
          ctx.closePath();
          ctx.fill();
          
          // Inner side cells compressed
          ctx.fillStyle = '#7CB342';
          ctx.beginPath();
          ctx.arc(mechX, stage.y, w * 0.04, 0, Math.PI);
          ctx.lineTo(mechX, stage.y);
          ctx.closePath();
          ctx.fill();
          
          ctx.strokeStyle = '#558B2F';
          ctx.lineWidth = 2;
          ctx.beginPath();
          ctx.arc(mechX, stage.y, w * 0.04, 0, Math.PI * 2);
          ctx.stroke();
          
          // Labels
          ctx.fillStyle = '#000000';
          ctx.font = `${h * 0.018}px Arial`;
          ctx.fillText('Elongated', mechX - w * 0.055, stage.y - h * 0.05);
          ctx.fillText('Compressed', mechX - w * 0.06, stage.y + h * 0.06);
        } else {
          // Curved/coiling
          ctx.strokeStyle = '#558B2F';
          ctx.lineWidth = 2;
          ctx.beginPath();
          ctx.arc(mechX + w * 0.02, stage.y - h * 0.01, w * 0.04, 0, Math.PI * 2);
          ctx.stroke();
          
          // Coiling arrow
          ctx.strokeStyle = '#F44336';
          ctx.lineWidth = 2;
          ctx.beginPath();
          ctx.arc(mechX + w * 0.02, stage.y - h * 0.01, w * 0.05, -Math.PI / 4, Math.PI / 2);
          ctx.stroke();
          
          ctx.fillStyle = '#F44336';
          ctx.beginPath();
          ctx.moveTo(mechX + w * 0.02, stage.y + w * 0.04);
          ctx.lineTo(mechX, stage.y + w * 0.035);
          ctx.lineTo(mechX + w * 0.01, stage.y + w * 0.05);
          ctx.fill();
        }
      });
      
      // Time sequence
      ctx.fillStyle = '#757575';
      ctx.font = `${h * 0.025}px Arial`;
      ctx.fillText('Minutes', mechX + w * 0.08, mechY);
      ctx.fillText('Hours', mechX + w * 0.08, mechY + h * 0.13);
      ctx.fillText('Days', mechX + w * 0.08, mechY + h * 0.26);
    }
    
    // Bottom explanation
    ctx.fillStyle = '#0D47A1';
    ctx.font = `bold ${h * 0.028}px Arial`;
    ctx.fillText('Mechanism: Touch stimulus → Differential cell growth (outer side elongates) → Tendril coils around support', w * 0.05, h * 0.96);
  }

  static drawHydrotropismDetail(ctx, w, h, mechanism) {
    // Title
    ctx.fillStyle = '#000000';
    ctx.font = `bold ${h * 0.05}px Arial`;
    ctx.fillText('Hydrotropism - Growth Response to Water', w * 0.18, h * 0.06);
    
    const centerX = w * 0.4;
    const soilY = h * 0.4;
    
    // Soil layers
    ctx.fillStyle = '#D7CCC8';
    ctx.fillRect(0, soilY, w, h * 0.6);
    
    // Dry soil (left)
    ctx.fillStyle = '#BCAAA4';
    ctx.fillRect(0, soilY, centerX - w * 0.1, h * 0.6);
    
    // Moist soil (right)
    ctx.fillStyle = '#8D6E63';
    ctx.fillRect(centerX + w * 0.1, soilY, w, h * 0.6);
    
    // Labels
    ctx.fillStyle = '#000000';
    ctx.font = `bold ${h * 0.035}px Arial`;
    ctx.fillText('DRY SOIL', w * 0.08, soilY + h * 0.08);
    ctx.fillText('MOIST SOIL', w * 0.55, soilY + h * 0.08);
    
    // Plant
    ctx.strokeStyle = '#4CAF50';
    ctx.lineWidth = 4;
    ctx.beginPath();
    ctx.moveTo(centerX, soilY);
    ctx.lineTo(centerX, soilY - h * 0.3);
    ctx.stroke();
    
    // Leaves
    ctx.fillStyle = '#66BB6A';
    ctx.strokeStyle = '#2E7D32';
    ctx.lineWidth = 2;
    
    for(let i = 0; i < 3; i++) {
      const leafY = soilY - h * 0.1 - i * h * 0.08;
      
      ctx.beginPath();
      ctx.ellipse(centerX - w * 0.06, leafY, w * 0.06, h * 0.04, -0.3, 0, Math.PI * 2);
      ctx.fill();
      ctx.stroke();
      
      ctx.beginPath();
      ctx.ellipse(centerX + w * 0.06, leafY, w * 0.06, h * 0.04, 0.3, 0, Math.PI * 2);
      ctx.fill();
      ctx.stroke();
    }
    
    // Root system bending toward water
    ctx.strokeStyle = '#F9A825';
    ctx.lineWidth = 4;
    
    // Main root curving toward moist side
    ctx.beginPath();
    ctx.moveTo(centerX, soilY);
    ctx.quadraticCurveTo(
      centerX + w * 0.05,
      soilY + h * 0.15,
      centerX + w * 0.15,
      soilY + h * 0.35
    );
    ctx.stroke();
    
    // Lateral roots also bending toward water
    ctx.lineWidth = 3;
    
    const lateralRoots = [
      {startY: soilY + h * 0.08, curve: 0.08},
      {startY: soilY + h * 0.18, curve: 0.12},
      {startY: soilY + h * 0.28, curve: 0.1}
    ];
    
    lateralRoots.forEach(root => {
      ctx.beginPath();
      ctx.moveTo(centerX, root.startY);
      ctx.quadraticCurveTo(
        centerX + w * 0.08,
        root.startY + h * 0.05,
        centerX + w * root.curve,
        root.startY + h * 0.1
      );
      ctx.stroke();
      
      // Root hairs on moist side
      ctx.strokeStyle = '#FDD835';
      ctx.lineWidth = 1.5;
      for(let i = 0; i < 4; i++) {
        const hairX = centerX + w * root.curve * (0.3 + i * 0.2);
        const hairY = root.startY + h * (0.02 + i * 0.025);
        
        ctx.beginPath();
        ctx.moveTo(hairX, hairY);
        ctx.lineTo(hairX + w * 0.03, hairY + h * 0.015);
        ctx.stroke();
      }
      ctx.strokeStyle = '#F9A825';
      ctx.lineWidth = 3;
    });
    
    // Water gradient indicator
    ctx.fillStyle = '#2196F3';
    const waterDensity = 15;
    for(let i = 0; i < waterDensity; i++) {
      const xPos = centerX + w * 0.1 + (i / waterDensity) * w * 0.35;
      const density = (i / waterDensity);
      const drops = Math.floor(1 + density * 8);
      
      for(let j = 0; j < drops; j++) {
        ctx.beginPath();
        ctx.arc(
          xPos,
          soilY + h * 0.15 + Math.random() * h * 0.4,
          w * 0.008,
          0, Math.PI * 2
        );
        ctx.fill();
      }
    }
    
    // Water gradient arrow
    ctx.strokeStyle = '#1976D2';
    ctx.lineWidth = 4;
    ctx.beginPath();
    ctx.moveTo(centerX + w * 0.1, h * 0.35);
    ctx.lineTo(centerX + w * 0.45, h * 0.35);
    ctx.stroke();
    
    ctx.fillStyle = '#1976D2';
    ctx.beginPath();
    ctx.moveTo(centerX + w * 0.45, h * 0.35);
    ctx.lineTo(centerX + w * 0.42, h * 0.33);
    ctx.lineTo(centerX + w * 0.42, h * 0.37);
    ctx.fill();
    
    ctx.font = `bold ${h * 0.03}px Arial`;
    ctx.fillText('Water Gradient', centerX + w * 0.18, h * 0.33);
    
    // Mechanism detail
    if(mechanism === 'response' || mechanism === 'auxin-distribution') {
      const mechX = w * 0.75;
      const mechY = h * 0.5;
      
      ctx.fillStyle = '#000000';
      ctx.font = `bold ${h * 0.04}px Arial`;
      ctx.fillText('Root Tip Response:', mechX - w * 0.1, mechY - h * 0.15);
      
      // Root tip cross-section
      ctx.fillStyle = '#FFF9C4';
      ctx.strokeStyle = '#F57F17';
      ctx.lineWidth = 3;
      ctx.beginPath();
      ctx.arc(mechX, mechY, w * 0.08, 0, Math.PI * 2);
      ctx.fill();
      ctx.stroke();
      
      // Moisture sensors (left side - dry)
      ctx.fillStyle = '#FF5722';
      for(let i = 0; i < 3; i++) {
        const angle = Math.PI - 0.5 + i * 0.3;
        ctx.beginPath();
        ctx.arc(
          mechX + Math.cos(angle) * w * 0.07,
          mechY + Math.sin(angle) * w * 0.07,
          w * 0.008,
          0, Math.PI * 2
        );
        ctx.fill();
      }
      
      // Moisture sensors (right side - wet)
      ctx.fillStyle = '#2196F3';
      for(let i = 0; i < 3; i++) {
        const angle = -0.5 + i * 0.3;
        ctx.beginPath();
        ctx.arc(
          mechX + Math.cos(angle) * w * 0.07,
          mechY + Math.sin(angle) * w * 0.07,
          w * 0.008,
          0, Math.PI * 2
        );
        ctx.fill();
      }
      
      // Labels
      ctx.fillStyle = '#FF5722';
      ctx.font = `${h * 0.025}px Arial`;
      ctx.fillText('Low water', mechX - w * 0.18, mechY);
      
      ctx.fillStyle = '#2196F3';
      ctx.fillText('High water', mechX + w * 0.1, mechY);
      
      // Growth differential
      ctx.fillStyle = '#000000';
      ctx.font = `bold ${h * 0.03}px Arial`;
      ctx.fillText('Cell Growth:', mechX - w * 0.08, mechY + h * 0.15);
      
      // Dry side (more growth)
      ctx.fillStyle = '#C5E1A5';
      ctx.strokeStyle = '#558B2F';
      ctx.lineWidth = 2;
      for(let i = 0; i < 3; i++) {
        ctx.fillRect(
          mechX - w * 0.12,
          mechY + h * 0.18 + i * h * 0.11,
          w * 0.06,
          h * 0.09
        );
        ctx.strokeRect(
          mechX - w * 0.12,
          mechY + h * 0.18 + i * h * 0.11,
          w * 0.06,
          h * 0.09
        );
      }
      
      ctx.fillStyle = '#558B2F';
      ctx.font = `${h * 0.02}px Arial`;
      ctx.fillText('Elongated', mechX - w * 0.11, mechY + h * 0.48);
      
      // Wet side (less growth)
      ctx.fillStyle = '#A5D6A7';
      ctx.strokeStyle = '#558B2F';
      ctx.lineWidth = 2;
      for(let i = 0; i < 4; i++) {
        ctx.fillRect(
          mechX + w * 0.06,
          mechY + h * 0.18 + i * h * 0.08,
          w * 0.06,
          h * 0.06
        );
        ctx.strokeRect(
          mechX + w * 0.06,
          mechY + h * 0.18 + i * h * 0.08,
          w * 0.06,
          h * 0.06
        );
      }
      
      ctx.fillStyle = '#558B2F';
      ctx.font = `${h * 0.02}px Arial`;
      ctx.fillText('Shorter', mechX + w * 0.065, mechY + h * 0.48);
      
      // Bending arrow
      ctx.strokeStyle = '#F44336';
      ctx.lineWidth = 3;
      ctx.beginPath();
      ctx.arc(mechX, mechY + h * 0.35, w * 0.08, Math.PI, Math.PI / 2, true);
      ctx.stroke();
      
      ctx.fillStyle = '#F44336';
      ctx.beginPath();
      ctx.moveTo(mechX + w * 0.08, mechY + h * 0.35);
      ctx.lineTo(mechX + w * 0.06, mechY + h * 0.32);
      ctx.lineTo(mechX + w * 0.06, mechY + h * 0.38);
      ctx.fill();
      
      ctx.font = `${h * 0.025}px Arial`;
      ctx.fillText('Bends toward', mechX - w * 0.08, mechY + h * 0.54);
      ctx.fillText('moisture', mechX - w * 0.06, mechY + h * 0.58);
    }
    
    // Bottom explanation
    ctx.fillStyle = '#0D47A1';
    ctx.font = `bold ${h * 0.028}px Arial`;
    ctx.fillText('Mechanism: Moisture gradient detected → Differential cell elongation → Root bends toward water source', w * 0.05, h * 0.96);
  }
}



