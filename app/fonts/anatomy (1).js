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

static drawPlantCell(ctx, x, y, width, height) {
    ctx.save();
    ctx.translate(x, y);
    
    const color = { base: '#90EE90', light: '#B4F0B4', dark: '#6BC86B' };
    
    // Cell wall (rigid outer layer)
    ctx.strokeStyle = '#228B22';
    ctx.lineWidth = 4;
    ctx.strokeRect(0, 0, width, height);
    
    // Cell membrane (inside cell wall)
    ctx.strokeStyle = '#32CD32';
    ctx.lineWidth = 2;
    ctx.strokeRect(width * 0.03, height * 0.03, width * 0.94, height * 0.94);
    
    // Chloroplasts (green oval organelles)
    ctx.fillStyle = '#228B22';
    const chloroplastPositions = [
        [0.15, 0.2], [0.3, 0.15], [0.7, 0.2], [0.85, 0.35],
        [0.2, 0.7], [0.65, 0.75], [0.8, 0.65]
    ];
    chloroplastPositions.forEach(([px, py]) => {
        ctx.beginPath();
        ctx.ellipse(width * px, height * py, width * 0.04, height * 0.03, 0, 0, Math.PI * 2);
        ctx.fill();
        // Thylakoids
        ctx.strokeStyle = '#006400';
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(width * px - width * 0.03, height * py);
        ctx.lineTo(width * px + width * 0.03, height * py);
        ctx.stroke();
    });
    
    // Large central vacuole
    ctx.fillStyle = 'rgba(173, 216, 230, 0.3)';
    ctx.strokeStyle = '#4682B4';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.ellipse(width * 0.5, height * 0.5, width * 0.25, height * 0.25, 0, 0, Math.PI * 2);
    ctx.fill();
    ctx.stroke();
    
    // Nucleus (offset due to vacuole)
    ctx.fillStyle = '#DDA0DD';
    ctx.beginPath();
    ctx.ellipse(width * 0.3, height * 0.3, width * 0.08, height * 0.08, 0, 0, Math.PI * 2);
    ctx.fill();
    ctx.strokeStyle = '#9370DB';
    ctx.lineWidth = 2;
    ctx.stroke();
    
    // Nucleolus
    ctx.fillStyle = '#8B008B';
    ctx.beginPath();
    ctx.arc(width * 0.3, height * 0.3, width * 0.03, 0, Math.PI * 2);
    ctx.fill();
    
    // Mitochondria
    ctx.fillStyle = '#FFA07A';
    ctx.strokeStyle = '#FF6347';
    ctx.lineWidth = 1;
    [[0.7, 0.4], [0.65, 0.55]].forEach(([px, py]) => {
        ctx.beginPath();
        ctx.ellipse(width * px, height * py, width * 0.05, height * 0.025, Math.PI / 4, 0, Math.PI * 2);
        ctx.fill();
        ctx.stroke();
    });
    
    // Endoplasmic reticulum
    ctx.strokeStyle = '#DEB887';
    ctx.lineWidth = 2;
    for(let i = 0; i < 4; i++) {
        ctx.beginPath();
        ctx.moveTo(width * 0.35, height * (0.45 + i * 0.05));
        ctx.bezierCurveTo(
            width * 0.4, height * (0.46 + i * 0.05),
            width * 0.42, height * (0.44 + i * 0.05),
            width * 0.45, height * (0.45 + i * 0.05)
        );
        ctx.stroke();
    }
    
    // Golgi apparatus
    ctx.strokeStyle = '#DAA520';
    ctx.lineWidth = 2;
    for(let i = 0; i < 5; i++) {
        ctx.beginPath();
        ctx.arc(width * 0.75, height * 0.45, width * (0.04 + i * 0.008), Math.PI, Math.PI * 1.5);
        ctx.stroke();
    }
    
    ctx.restore();
}

static drawLeafCrossSection(ctx, x, y, width, height) {
    ctx.save();
    ctx.translate(x, y);
    
    // Upper epidermis
    ctx.fillStyle = '#C8E6C9';
    ctx.fillRect(0, 0, width, height * 0.1);
    
    // Cuticle (waxy layer)
    ctx.fillStyle = '#A5D6A7';
    ctx.fillRect(0, 0, width, height * 0.03);
    
    // Palisade mesophyll (tightly packed cells)
    ctx.fillStyle = '#66BB6A';
    for(let i = 0; i < 15; i++) {
        const cellX = (i / 15) * width;
        ctx.fillRect(cellX, height * 0.1, width / 16, height * 0.25);
    }
    
    // Spongy mesophyll (loosely packed with air spaces)
    ctx.fillStyle = '#81C784';
    for(let i = 0; i < 20; i++) {
        const cellX = (Math.random() * width);
        const cellY = height * (0.4 + Math.random() * 0.3);
        ctx.beginPath();
        ctx.arc(cellX, cellY, width * 0.02, 0, Math.PI * 2);
        ctx.fill();
    }
    
    // Air spaces (white)
    ctx.fillStyle = 'rgba(255, 255, 255, 0.7)';
    for(let i = 0; i < 10; i++) {
        const spaceX = (Math.random() * width);
        const spaceY = height * (0.45 + Math.random() * 0.25);
        ctx.beginPath();
        ctx.arc(spaceX, spaceY, width * 0.025, 0, Math.PI * 2);
        ctx.fill();
    }
    
    // Vascular bundle (vein)
    const veinX = width * 0.5;
    const veinY = height * 0.5;
    
    // Xylem (water transport - top)
    ctx.fillStyle = '#D32F2F';
    ctx.beginPath();
    ctx.arc(veinX, veinY - height * 0.05, width * 0.03, 0, Math.PI * 2);
    ctx.fill();
    
    // Phloem (sugar transport - bottom)
    ctx.fillStyle = '#1976D2';
    ctx.beginPath();
    ctx.arc(veinX, veinY + height * 0.05, width * 0.03, 0, Math.PI * 2);
    ctx.fill();
    
    // Bundle sheath
    ctx.strokeStyle = '#795548';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.arc(veinX, veinY, width * 0.05, 0, Math.PI * 2);
    ctx.stroke();
    
    // Lower epidermis
    ctx.fillStyle = '#C8E6C9';
    ctx.fillRect(0, height * 0.9, width, height * 0.1);
    
    // Stomata (pores for gas exchange)
    const stomataPositions = [0.2, 0.5, 0.8];
    stomataPositions.forEach(pos => {
        // Guard cells
        ctx.fillStyle = '#4CAF50';
        ctx.beginPath();
        ctx.ellipse(width * pos - width * 0.02, height * 0.92, width * 0.015, height * 0.04, 0, 0, Math.PI * 2);
        ctx.fill();
        ctx.beginPath();
        ctx.ellipse(width * pos + width * 0.02, height * 0.92, width * 0.015, height * 0.04, 0, 0, Math.PI * 2);
        ctx.fill();
        
        // Stoma opening (pore)
        ctx.fillStyle = '#000000';
        ctx.fillRect(width * pos - width * 0.01, height * 0.915, width * 0.02, height * 0.01);
    });
    
    // Outline
    ctx.strokeStyle = '#2E7D32';
    ctx.lineWidth = 3;
    ctx.strokeRect(0, 0, width, height);
    
    ctx.restore();
}

static drawPhotosynthesis(ctx, x, y, width, height) {
    ctx.save();
    ctx.translate(x, y);
    
    // Chloroplast
    ctx.fillStyle = '#81C784';
    ctx.strokeStyle = '#388E3C';
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.ellipse(width * 0.5, height * 0.5, width * 0.4, height * 0.3, 0, 0, Math.PI * 2);
    ctx.fill();
    ctx.stroke();
    
    // Outer membrane
    ctx.strokeStyle = '#2E7D32';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.ellipse(width * 0.5, height * 0.5, width * 0.38, height * 0.28, 0, 0, Math.PI * 2);
    ctx.stroke();
    
    // Thylakoid stacks (grana)
    ctx.fillStyle = '#1B5E20';
    const granaPositions = [[0.3, 0.4], [0.5, 0.35], [0.7, 0.45], [0.4, 0.6], [0.6, 0.6]];
    granaPositions.forEach(([px, py]) => {
        for(let i = 0; i < 5; i++) {
            ctx.beginPath();
            ctx.ellipse(width * px, height * (py + i * 0.02), width * 0.05, height * 0.01, 0, 0, Math.PI * 2);
            ctx.fill();
        }
    });
    
    // Light reactions (thylakoid)
    ctx.fillStyle = '#FFF59D';
    ctx.font = 'bold 14px Arial';
    ctx.textAlign = 'center';
    ctx.fillText('Light Reactions', width * 0.5, height * 0.3);
    ctx.font = '11px Arial';
    ctx.fillStyle = '#F57F17';
    ctx.fillText('(in thylakoid)', width * 0.5, height * 0.35);
    
    // Calvin Cycle (stroma)
    ctx.fillStyle = '#A5D6A7';
    ctx.font = 'bold 14px Arial';
    ctx.fillText('Calvin Cycle', width * 0.5, height * 0.75);
    ctx.font = '11px Arial';
    ctx.fillStyle = '#33691E';
    ctx.fillText('(in stroma)', width * 0.5, height * 0.8);
    
    // Inputs - Light
    ctx.strokeStyle = '#FDD835';
    ctx.lineWidth = 3;
    for(let i = 0; i < 8; i++) {
        const angle = (Math.PI * 2 * i) / 8;
        const startX = width * 0.5 + Math.cos(angle) * width * 0.5;
        const startY = height * 0.5 + Math.sin(angle) * height * 0.4;
        const endX = width * 0.5 + Math.cos(angle) * width * 0.42;
        const endY = height * 0.5 + Math.sin(angle) * height * 0.32;
        ctx.beginPath();
        ctx.moveTo(startX, startY);
        ctx.lineTo(endX, endY);
        ctx.stroke();
    }
    
    // H2O input
    ctx.fillStyle = '#2196F3';
    ctx.font = 'bold 13px Arial';
    ctx.textAlign = 'left';
    ctx.fillText('H₂O', width * 0.05, height * 0.5);
    this.drawArrow(ctx, width * 0.12, height * 0.5, width * 0.25, height * 0.45, '#2196F3', 2);
    
    // CO2 input
    ctx.fillStyle = '#757575';
    ctx.fillText('CO₂', width * 0.05, height * 0.65);
    this.drawArrow(ctx, width * 0.12, height * 0.65, width * 0.25, height * 0.6, '#757575', 2);
    
    // O2 output
    ctx.fillStyle = '#03A9F4';
    ctx.textAlign = 'right';
    ctx.fillText('O₂', width * 0.95, height * 0.45);
    this.drawArrow(ctx, width * 0.75, height * 0.45, width * 0.88, height * 0.45, '#03A9F4', 2);
    
    // Glucose output
    ctx.fillStyle = '#FF6F00';
    ctx.fillText('C₆H₁₂O₆', width * 0.95, height * 0.65);
    this.drawArrow(ctx, width * 0.75, height * 0.65, width * 0.83, height * 0.65, '#FF6F00', 2);
    
    ctx.restore();
}

static drawBacteriaStructure(ctx, x, y, width, height) {
    ctx.save();
    ctx.translate(x, y);
    
    // Capsule (outermost layer)
    const gradient = ctx.createRadialGradient(width * 0.5, height * 0.5, 0, width * 0.5, height * 0.5, width * 0.45);
    gradient.addColorStop(0, 'rgba(200, 200, 255, 0.3)');
    gradient.addColorStop(1, 'rgba(150, 150, 255, 0.5)');
    ctx.fillStyle = gradient;
    ctx.beginPath();
    ctx.ellipse(width * 0.5, height * 0.5, width * 0.45, height * 0.35, 0, 0, Math.PI * 2);
    ctx.fill();
    
    // Cell wall
    ctx.strokeStyle = '#7B1FA2';
    ctx.lineWidth = 4;
    ctx.beginPath();
    ctx.ellipse(width * 0.5, height * 0.5, width * 0.4, height * 0.3, 0, 0, Math.PI * 2);
    ctx.stroke();
    
    // Cell membrane
    ctx.strokeStyle = '#E91E63';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.ellipse(width * 0.5, height * 0.5, width * 0.38, height * 0.28, 0, 0, Math.PI * 2);
    ctx.stroke();
    
    // Cytoplasm
    const cytoGradient = ctx.createRadialGradient(width * 0.5, height * 0.5, 0, width * 0.5, height * 0.5, width * 0.38);
    cytoGradient.addColorStop(0, '#FFE0E0');
    cytoGradient.addColorStop(1, '#FFC0C0');
    ctx.fillStyle = cytoGradient;
    ctx.beginPath();
    ctx.ellipse(width * 0.5, height * 0.5, width * 0.37, height * 0.27, 0, 0, Math.PI * 2);
    ctx.fill();
    
    // Nucleoid (bacterial DNA)
    ctx.fillStyle = '#FF6F00';
    ctx.beginPath();
    ctx.moveTo(width * 0.4, height * 0.45);
    for(let i = 0; i < 20; i++) {
        const angle = (i / 20) * Math.PI * 2;
        const r = width * (0.08 + Math.random() * 0.04);
        const px = width * 0.5 + Math.cos(angle) * r;
        const py = height * 0.5 + Math.sin(angle) * r * 0.7;
        ctx.lineTo(px, py);
    }
    ctx.closePath();
    ctx.fill();
    
    // Ribosomes (small dots)
    ctx.fillStyle = '#1976D2';
    for(let i = 0; i < 30; i++) {
        const rx = width * (0.2 + Math.random() * 0.6);
        const ry = height * (0.25 + Math.random() * 0.5);
        ctx.beginPath();
        ctx.arc(rx, ry, 2, 0, Math.PI * 2);
        ctx.fill();
    }
    
    // Plasmid (small circular DNA)
    ctx.strokeStyle = '#FF9800';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.arc(width * 0.7, height * 0.6, width * 0.05, 0, Math.PI * 2);
    ctx.stroke();
    
    // Flagellum (tail)
    ctx.strokeStyle = '#424242';
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.moveTo(width * 0.9, height * 0.5);
    for(let i = 0; i < 10; i++) {
        const fx = width * (0.9 + i * 0.015);
        const fy = height * (0.5 + Math.sin(i * 0.8) * 0.05);
        ctx.lineTo(fx, fy);
    }
    ctx.stroke();
    
    // Pili (hair-like projections)
    ctx.strokeStyle = '#616161';
    ctx.lineWidth = 1;
    for(let i = 0; i < 8; i++) {
        const angle = (i / 8) * Math.PI * 2;
        const startX = width * 0.5 + Math.cos(angle) * width * 0.4;
        const startY = height * 0.5 + Math.sin(angle) * height * 0.3;
        const endX = startX + Math.cos(angle) * width * 0.08;
        const endY = startY + Math.sin(angle) * height * 0.06;
        ctx.beginPath();
        ctx.moveTo(startX, startY);
        ctx.lineTo(endX, endY);
        ctx.stroke();
    }
    
    ctx.restore();
}

static drawVirusStructure(ctx, x, y, width, height) {
    ctx.save();
    ctx.translate(x, y);
    
    // Capsid (protein coat) - icosahedral shape
    const centerX = width * 0.5;
    const centerY = height * 0.5;
    const radius = width * 0.3;
    
    // Draw hexagonal capsomeres
    ctx.fillStyle = '#E53935';
    ctx.strokeStyle = '#B71C1C';
    ctx.lineWidth = 2;
    
    for(let ring = 0; ring < 3; ring++) {
        const ringRadius = radius * (0.3 + ring * 0.35);
        const count = 6 + ring * 6;
        
        for(let i = 0; i < count; i++) {
            const angle = (i / count) * Math.PI * 2;
            const x = centerX + Math.cos(angle) * ringRadius;
            const y = centerY + Math.sin(angle) * ringRadius;
            
            ctx.beginPath();
            for(let j = 0; j < 6; j++) {
                const hexAngle = (j / 6) * Math.PI * 2;
                const hx = x + Math.cos(hexAngle) * width * 0.035;
                const hy = y + Math.sin(hexAngle) * width * 0.035;
                if(j === 0) ctx.moveTo(hx, hy);
                else ctx.lineTo(hx, hy);
            }
            ctx.closePath();
            ctx.fill();
            ctx.stroke();
        }
    }
    
    // Genetic material (RNA/DNA inside)
    ctx.strokeStyle = '#FFA000';
    ctx.lineWidth = 3;
    ctx.beginPath();
    for(let i = 0; i < 30; i++) {
        const angle = (i / 30) * Math.PI * 2;
        const r = radius * (0.15 + (i % 3) * 0.05);
        const px = centerX + Math.cos(angle) * r;
        const py = centerY + Math.sin(angle) * r;
        if(i === 0) ctx.moveTo(px, py);
        else ctx.lineTo(px, py);
    }
    ctx.stroke();
    
    // Envelope (for enveloped viruses)
    ctx.strokeStyle = '#8E24AA';
    ctx.lineWidth = 3;
    ctx.setLineDash([5, 5]);
    ctx.beginPath();
    ctx.arc(centerX, centerY, radius * 1.15, 0, Math.PI * 2);
    ctx.stroke();
    ctx.setLineDash([]);
    
    // Spike proteins (glycoproteins)
    ctx.fillStyle = '#5E35B1';
    ctx.strokeStyle = '#311B92';
    ctx.lineWidth = 1;
    
    for(let i = 0; i < 16; i++) {
        const angle = (i / 16) * Math.PI * 2;
        const baseX = centerX + Math.cos(angle) * radius * 1.15;
        const baseY = centerY + Math.sin(angle) * radius * 1.15;
        const tipX = centerX + Math.cos(angle) * radius * 1.35;
        const tipY = centerY + Math.sin(angle) * radius * 1.35;
        
        // Spike shaft
        ctx.beginPath();
        ctx.moveTo(baseX, baseY);
        ctx.lineTo(tipX, tipY);
        ctx.lineWidth = 4;
        ctx.strokeStyle = '#5E35B1';
        ctx.stroke();
        
        // Spike head
        ctx.beginPath();
        ctx.arc(tipX, tipY, width * 0.02, 0, Math.PI * 2);
        ctx.fillStyle = '#7E57C2';
        ctx.fill();
        ctx.strokeStyle = '#311B92';
        ctx.lineWidth = 1;
        ctx.stroke();
    }
    
    ctx.restore();
}

static drawMitosis(ctx, x, y, width, height, stage) {
    ctx.save();
    ctx.translate(x, y);
    
    const centerX = width * 0.5;
    const centerY = height * 0.5;
    const cellRadius = Math.min(width, height) * 0.4;
    
    // Cell membrane
    ctx.strokeStyle = '#E91E63';
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.arc(centerX, centerY, cellRadius, 0, Math.PI * 2);
    ctx.stroke();
    
    // Cytoplasm
    ctx.fillStyle = 'rgba(255, 240, 245, 0.5)';
    ctx.fill();
    
    switch(stage) {
        case 'interphase':
            // Nucleus
            ctx.fillStyle = 'rgba(200, 150, 255, 0.3)';
            ctx.beginPath();
            ctx.arc(centerX, centerY, cellRadius * 0.4, 0, Math.PI * 2);
            ctx.fill();
            ctx.strokeStyle = '#9C27B0';
            ctx.lineWidth = 2;
            ctx.stroke();
            
            // Chromatin (loosely packed DNA)
            ctx.fillStyle = '#7B1FA2';
            for(let i = 0; i < 15; i++) {
                const angle = Math.random() * Math.PI * 2;
                const r = Math.random() * cellRadius * 0.3;
                const cx = centerX + Math.cos(angle) * r;
                const cy = centerY + Math.sin(angle) * r;
                ctx.beginPath();
                ctx.arc(cx, cy, 3, 0, Math.PI * 2);
                ctx.fill();
            }
            
            // Nucleolus
            ctx.fillStyle = '#4A148C';
            ctx.beginPath();
            ctx.arc(centerX, centerY, cellRadius * 0.1, 0, Math.PI * 2);
            ctx.fill();
            break;
            
        case 'prophase':
            // Condensed chromosomes
            ctx.strokeStyle = '#1976D2';
            ctx.lineWidth = 6;
            ctx.lineCap = 'round';
            
            const chromPositions = [
                [0.4, 0.4], [0.6, 0.4], [0.4, 0.6], [0.6, 0.6]
            ];
            
            chromPositions.forEach(([px, py]) => {
                // Sister chromatids (X shape)
                ctx.beginPath();
                ctx.moveTo(width * px - 15, height * py - 15);
                ctx.lineTo(width * px + 15, height * py + 15);
                ctx.stroke();
                
                ctx.beginPath();
                ctx.moveTo(width * px + 15, height * py - 15);
                ctx.lineTo(width * px - 15, height * py + 15);
                ctx.stroke();
                
                // Centromere
                ctx.fillStyle = '#FF6F00';
                ctx.beginPath();
                ctx.arc(width * px, height * py, 4, 0, Math.PI * 2);
                ctx.fill();
            });
            
            // Centrioles
            ctx.fillStyle = '#4CAF50';
            ctx.fillRect(width * 0.2, height * 0.2, 10, 10);
            ctx.fillRect(width * 0.75, height * 0.75, 10, 10);
            break;
            
        case 'metaphase':
            // Metaphase plate (center line)
            ctx.strokeStyle = '#FFC107';
            ctx.lineWidth = 2;
            ctx.setLineDash([5, 5]);
            ctx.beginPath();
            ctx.moveTo(width * 0.1, centerY);
            ctx.lineTo(width * 0.9, centerY);
            ctx.stroke();
            ctx.setLineDash([]);
            
            // Aligned chromosomes
            ctx.strokeStyle = '#1976D2';
            ctx.lineWidth = 6;
            const chromCount = 4;
            for(let i = 0; i < chromCount; i++) {
                const cx = width * (0.3 + (i / (chromCount - 1)) * 0.4);
                
                ctx.beginPath();
                ctx.moveTo(cx - 12, centerY - 12);
                ctx.lineTo(cx + 12, centerY + 12);
                ctx.stroke();
                
                ctx.beginPath();
                ctx.moveTo(cx + 12, centerY - 12);
                ctx.lineTo(cx - 12, centerY + 12);
                ctx.stroke();
                
                ctx.fillStyle = '#FF6F00';
                ctx.beginPath();
                ctx.arc(cx, centerY, 4, 0, Math.PI * 2);
                ctx.fill();
            }
            
            // Spindle fibers
            ctx.strokeStyle = '#4CAF50';
            ctx.lineWidth = 1;
            for(let i = 0; i < chromCount; i++) {
                const cx = width * (0.3 + (i / (chromCount - 1)) * 0.4);
                
                ctx.beginPath();
                ctx.moveTo(width * 0.2, height * 0.1);
                ctx.lineTo(cx, centerY);
                ctx.stroke();
                
                ctx.beginPath();
                ctx.moveTo(width * 0.8, height * 0.9);
                ctx.lineTo(cx, centerY);
                ctx.stroke();
            }
            
            // Centrioles
            ctx.fillStyle = '#4CAF50';
            ctx.fillRect(width * 0.18, height * 0.08, 10, 10);
            ctx.fillRect(width * 0.78, height * 0.88, 10, 10);
            break;
            
        case 'anaphase':
            // Separating chromatids
            ctx.strokeStyle = '#1976D2';
            ctx.lineWidth = 5;
            
            // Top group (moving up)
            const topY = height * 0.3;
            for(let i = 0; i < 4; i++) {
                const cx = width * (0.3 + (i / 3) * 0.4);
                ctx.beginPath();
                ctx.moveTo(cx - 8, topY);
                ctx.lineTo(cx + 8, topY);
                ctx.stroke();
            }
            
            // Bottom group (moving down)
            const bottomY = height * 0.7;
            for(let i = 0; i < 4; i++) {
                const cx = width * (0.3 + (i / 3) * 0.4);
                ctx.beginPath();
                ctx.moveTo(cx - 8, bottomY);
                ctx.lineTo(cx + 8, bottomY);
                ctx.stroke();
            }
            
            // Spindle fibers
            ctx.strokeStyle = '#4CAF50';
            ctx.lineWidth = 1;
            for(let i = 0; i < 4; i++) {
                const cx = width * (0.3 + (i / 3) * 0.4);
                
                ctx.beginPath();
                ctx.moveTo(width * 0.2, height * 0.1);
                ctx.lineTo(cx, topY);
                ctx.stroke();
                
                ctx.beginPath();
                ctx.moveTo(width * 0.8, height * 0.9);
                ctx.lineTo(cx, bottomY);
                ctx.stroke();
            }
            break;
            
        case 'telophase':
             // Two forming nuclei
            ctx.fillStyle = 'rgba(200, 150, 255, 0.3)';
            ctx.strokeStyle = '#9C27B0';
            ctx.lineWidth = 2;
            
            // Top nucleus
            ctx.beginPath();
            ctx.arc(centerX, height * 0.3, cellRadius * 0.3, 0, Math.PI * 2);
            ctx.fill();
            ctx.stroke();
            
            // Bottom nucleus
            ctx.beginPath();
            ctx.arc(centerX, height * 0.7, cellRadius * 0.3, 0, Math.PI * 2);
            ctx.fill();
            ctx.stroke();
            
            // Decondensing chromosomes in each nucleus
            ctx.fillStyle = '#7B1FA2';
            for(let i = 0; i < 8; i++) {
                const angle = Math.random() * Math.PI * 2;
                const r = Math.random() * cellRadius * 0.2;
                const cx = centerX + Math.cos(angle) * r;
                const cy = height * 0.3 + Math.sin(angle) * r;
                ctx.beginPath();
                ctx.arc(cx, cy, 2, 0, Math.PI * 2);
                ctx.fill();
            }
            
            for(let i = 0; i < 8; i++) {
                const angle = Math.random() * Math.PI * 2;
                const r = Math.random() * cellRadius * 0.2;
                const cx = centerX + Math.cos(angle) * r;
                const cy = height * 0.7 + Math.sin(angle) * r;
                ctx.beginPath();
                ctx.arc(cx, cy, 2, 0, Math.PI * 2);
                ctx.fill();
            }
            
            // Cleavage furrow
            ctx.strokeStyle = '#E91E63';
            ctx.lineWidth = 4;
            ctx.beginPath();
            ctx.moveTo(width * 0.1, centerY);
            ctx.quadraticCurveTo(centerX - 20, centerY, centerX, centerY);
            ctx.quadraticCurveTo(centerX + 20, centerY, width * 0.9, centerY);
            ctx.stroke();
            break;
            
        case 'cytokinesis':
            // Two separate cells
            ctx.strokeStyle = '#E91E63';
            ctx.lineWidth = 3;
            
            // Top cell
            ctx.beginPath();
            ctx.arc(centerX, height * 0.3, cellRadius * 0.6, 0, Math.PI * 2);
            ctx.stroke();
            
            // Bottom cell
            ctx.beginPath();
            ctx.arc(centerX, height * 0.7, cellRadius * 0.6, 0, Math.PI * 2);
            ctx.stroke();
            
            // Nuclei
            ctx.fillStyle = 'rgba(200, 150, 255, 0.3)';
            ctx.strokeStyle = '#9C27B0';
            ctx.lineWidth = 2;
            
            ctx.beginPath();
            ctx.arc(centerX, height * 0.3, cellRadius * 0.25, 0, Math.PI * 2);
            ctx.fill();
            ctx.stroke();
            
            ctx.beginPath();
            ctx.arc(centerX, height * 0.7, cellRadius * 0.25, 0, Math.PI * 2);
            ctx.fill();
            ctx.stroke();
            break;
    }
    
    ctx.restore();
}

static drawMeiosis(ctx, x, y, width, height, stage) {
    ctx.save();
    ctx.translate(x, y);
    
    const centerX = width * 0.5;
    const centerY = height * 0.5;
    const cellRadius = Math.min(width, height) * 0.4;
    
    switch(stage) {
        case 'meiosis1_prophase':
            // Cell membrane
            ctx.strokeStyle = '#E91E63';
            ctx.lineWidth = 3;
            ctx.beginPath();
            ctx.arc(centerX, centerY, cellRadius, 0, Math.PI * 2);
            ctx.stroke();
            
            // Homologous pairs (tetrads)
            ctx.strokeStyle = '#1976D2';
            ctx.lineWidth = 5;
            
            // Pair 1 (blue and red)
            ctx.strokeStyle = '#1976D2';
            ctx.beginPath();
            ctx.moveTo(width * 0.35, height * 0.4);
            ctx.lineTo(width * 0.45, height * 0.4);
            ctx.stroke();
            
            ctx.strokeStyle = '#D32F2F';
            ctx.beginPath();
            ctx.moveTo(width * 0.35, height * 0.45);
            ctx.lineTo(width * 0.45, height * 0.45);
            ctx.stroke();
            
            // Crossing over point
            ctx.fillStyle = '#FFC107';
            ctx.beginPath();
            ctx.arc(width * 0.4, height * 0.425, 5, 0, Math.PI * 2);
            ctx.fill();
            
            // Pair 2
            ctx.strokeStyle = '#1976D2';
            ctx.beginPath();
            ctx.moveTo(width * 0.55, height * 0.55);
            ctx.lineTo(width * 0.65, height * 0.55);
            ctx.stroke();
            
            ctx.strokeStyle = '#D32F2F';
            ctx.beginPath();
            ctx.moveTo(width * 0.55, height * 0.6);
            ctx.lineTo(width * 0.65, height * 0.6);
            ctx.stroke();
            break;
            
        case 'meiosis1_end':
            // Two cells after meiosis I
            // Left cell
            ctx.strokeStyle = '#E91E63';
            ctx.lineWidth = 3;
            ctx.beginPath();
            ctx.arc(width * 0.3, centerY, cellRadius * 0.5, 0, Math.PI * 2);
            ctx.stroke();
            
            // Chromosomes (one from each pair)
            ctx.strokeStyle = '#1976D2';
            ctx.lineWidth = 4;
            ctx.beginPath();
            ctx.moveTo(width * 0.25, centerY - 10);
            ctx.lineTo(width * 0.35, centerY - 10);
            ctx.stroke();
            
            ctx.strokeStyle = '#D32F2F';
            ctx.beginPath();
            ctx.moveTo(width * 0.25, centerY + 10);
            ctx.lineTo(width * 0.35, centerY + 10);
            ctx.stroke();
            
            // Right cell
            ctx.strokeStyle = '#E91E63';
            ctx.lineWidth = 3;
            ctx.beginPath();
            ctx.arc(width * 0.7, centerY, cellRadius * 0.5, 0, Math.PI * 2);
            ctx.stroke();
            
            ctx.strokeStyle = '#1976D2';
            ctx.lineWidth = 4;
            ctx.beginPath();
            ctx.moveTo(width * 0.65, centerY - 10);
            ctx.lineTo(width * 0.75, centerY - 10);
            ctx.stroke();
            
            ctx.strokeStyle = '#D32F2F';
            ctx.beginPath();
            ctx.moveTo(width * 0.65, centerY + 10);
            ctx.lineTo(width * 0.75, centerY + 10);
            ctx.stroke();
            break;
            
        case 'meiosis2_end':
            // Four haploid cells
            const positions = [[0.25, 0.3], [0.75, 0.3], [0.25, 0.7], [0.75, 0.7]];
            const colors = ['#1976D2', '#D32F2F', '#1976D2', '#D32F2F'];
            
            positions.forEach(([px, py], idx) => {
                // Cell membrane
                ctx.strokeStyle = '#E91E63';
                ctx.lineWidth = 2;
                ctx.beginPath();
                ctx.arc(width * px, height * py, cellRadius * 0.35, 0, Math.PI * 2);
                ctx.stroke();
                
                // Single chromatid
                ctx.strokeStyle = colors[idx];
                ctx.lineWidth = 3;
                ctx.beginPath();
                ctx.moveTo(width * px - 15, height * py);
                ctx.lineTo(width * px + 15, height * py);
                ctx.stroke();
            });
            
            // Label
            ctx.fillStyle = '#2C3E50';
            ctx.font = 'bold 14px Arial';
            ctx.textAlign = 'center';
            ctx.fillText('Haploid Gametes', width * 0.5, height * 0.95);
            break;
    }
    
    ctx.restore();
}

static drawFoodChain(ctx, x, y, width, height) {
    ctx.save();
    ctx.translate(x, y);
    
    const levelHeight = height / 4;
    const levels = [
        { name: 'Sun', color: '#FDD835', y: 0 },
        { name: 'Producer\n(Plants)', color: '#4CAF50', y: levelHeight },
        { name: 'Primary Consumer\n(Herbivore)', color: '#FF9800', y: levelHeight * 2 },
        { name: 'Secondary Consumer\n(Carnivore)', color: '#F44336', y: levelHeight * 3 }
    ];
    
    levels.forEach((level, idx) => {
        const cy = level.y + levelHeight / 2;
        
        // Circle
        ctx.fillStyle = level.color;
        ctx.strokeStyle = '#2C3E50';
        ctx.lineWidth = 3;
        ctx.beginPath();
        ctx.arc(width * 0.5, cy, width * 0.15, 0, Math.PI * 2);
        ctx.fill();
        ctx.stroke();
        
        // Label
        ctx.fillStyle = '#FFFFFF';
        ctx.font = 'bold 14px Arial';
        ctx.textAlign = 'center';
        ctx.shadowColor = 'rgba(0,0,0,0.5)';
        ctx.shadowBlur = 3;
        const lines = level.name.split('\n');
        lines.forEach((line, i) => {
            ctx.fillText(line, width * 0.5, cy + (i - 0.5) * 16);
        });
        ctx.shadowBlur = 0;
        
        // Arrow to next level
        if(idx < levels.length - 1) {
            this.drawArrowStatic(
                ctx,
                width * 0.5,
                cy + width * 0.15,
                width * 0.5,
                levels[idx + 1].y + levelHeight / 2 - width * 0.15,
                '#2C3E50',
                3
            );
        }
    });
    
    ctx.restore();
}

static drawArrowStatic(ctx, x1, y1, x2, y2, color, lineWidth) {
    ctx.strokeStyle = color;
    ctx.fillStyle = color;
    ctx.lineWidth = lineWidth;
    
    // Line
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.stroke();
    
    // Arrowhead
    const angle = Math.atan2(y2 - y1, x2 - x1);
    const headLength = 15;
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

static drawEnergyPyramid(ctx, x, y, width, height) {
    ctx.save();
    ctx.translate(x, y);
    
    const levels = [
        { name: 'Tertiary Consumers', color: '#C62828', percentage: '0.1%', energy: '10 kcal' },
        { name: 'Secondary Consumers', color: '#F4511E', percentage: '1%', energy: '100 kcal' },
        { name: 'Primary Consumers', color: '#FF9800', percentage: '10%', energy: '1,000 kcal' },
        { name: 'Producers', color: '#7CB342', percentage: '100%', energy: '10,000 kcal' }
    ];
    
    levels.forEach((level, idx) => {
        const levelHeight = height / 4;
        const levelY = idx * levelHeight;
        const widthPercent = 0.2 + (levels.length - idx - 1) * 0.2;
        const levelWidth = width * widthPercent;
        const offsetX = (width - levelWidth) / 2;
        
        // Trapezoid/rectangle for level
        const gradient = ctx.createLinearGradient(0, levelY, 0, levelY + levelHeight);
        gradient.addColorStop(0, level.color);
        gradient.addColorStop(1, level.color + 'CC');
        ctx.fillStyle = gradient;
        ctx.strokeStyle = '#2C3E50';
        ctx.lineWidth = 2;
        
        ctx.beginPath();
        ctx.moveTo(offsetX, levelY);
        ctx.lineTo(offsetX + levelWidth, levelY);
        
        if(idx < levels.length - 1) {
            const nextWidthPercent = 0.2 + (levels.length - idx - 2) * 0.2;
            const nextLevelWidth = width * nextWidthPercent;
            const nextOffsetX = (width - nextLevelWidth) / 2;
            ctx.lineTo(nextOffsetX + nextLevelWidth, levelY + levelHeight);
            ctx.lineTo(nextOffsetX, levelY + levelHeight);
        } else {
            ctx.lineTo(offsetX + levelWidth, levelY + levelHeight);
            ctx.lineTo(offsetX, levelY + levelHeight);
        }
        ctx.closePath();
        ctx.fill();
        ctx.stroke();
        
        // Labels
        ctx.fillStyle = '#FFFFFF';
        ctx.font = 'bold 16px Arial';
        ctx.textAlign = 'center';
        ctx.shadowColor = 'rgba(0,0,0,0.7)';
        ctx.shadowBlur = 4;
        ctx.fillText(level.name, width * 0.5, levelY + levelHeight * 0.4);
        
        ctx.font = '13px Arial';
        ctx.fillText(level.energy, width * 0.5, levelY + levelHeight * 0.6);
        ctx.fillText(level.percentage, width * 0.5, levelY + levelHeight * 0.8);
        ctx.shadowBlur = 0;
    });
    
    // Title
    ctx.fillStyle = '#2C3E50';
    ctx.font = 'bold 18px Arial';
    ctx.textAlign = 'center';
    ctx.fillText('Energy Pyramid', width * 0.5, -10);
    
    // Note
    ctx.font = '11px Arial';
    ctx.fillStyle = '#7F8C8D';
    ctx.fillText('Only 10% of energy transfers to next level', width * 0.5, height + 20);
    
    ctx.restore();
}

static drawDNAReplication(ctx, x, y, width, height) {
    ctx.save();
    ctx.translate(x, y);
    
    const helixWidth = width * 0.25;
    const centerX = width * 0.5;
    
    // Original DNA strand (left)
    ctx.fillStyle = '#2C3E50';
    ctx.font = 'bold 14px Arial';
    ctx.textAlign = 'center';
    ctx.fillText('Original DNA', width * 0.25, 20);
    
    // Left strand backbone
    ctx.strokeStyle = '#1976D2';
    ctx.lineWidth = 4;
    ctx.beginPath();
    ctx.moveTo(width * 0.15, height * 0.2);
    for(let i = 0; i < 10; i++) {
        const py = height * (0.2 + i * 0.06);
        ctx.lineTo(width * 0.15 + Math.sin(i) * 5, py);
    }
    ctx.stroke();
    
    ctx.strokeStyle = '#D32F2F';
    ctx.beginPath();
    ctx.moveTo(width * 0.35, height * 0.2);
    for(let i = 0; i < 10; i++) {
        const py = height * (0.2 + i * 0.06);
        ctx.lineTo(width * 0.35 - Math.sin(i) * 5, py);
    }
    ctx.stroke();
    
    // Base pairs
    const basePairs = ['A-T', 'T-A', 'G-C', 'C-G', 'A-T', 'T-A', 'G-C', 'C-G', 'A-T'];
    ctx.font = 'bold 11px Arial';
    basePairs.forEach((pair, i) => {
        const py = height * (0.23 + i * 0.06);
        ctx.strokeStyle = '#95A5A6';
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(width * 0.15, py);
        ctx.lineTo(width * 0.35, py);
        ctx.stroke();
        
        ctx.fillStyle = '#FFA000';
        ctx.textAlign = 'center';
        ctx.fillText(pair, width * 0.25, py + 4);
    });
    
    // Helicase enzyme (unzipping)
    ctx.fillStyle = '#9C27B0';
    ctx.font = 'bold 12px Arial';
    ctx.textAlign = 'center';
    ctx.fillText('Helicase', width * 0.5, height * 0.35);
    ctx.beginPath();
    ctx.arc(width * 0.5, height * 0.4, 15, 0, Math.PI * 2);
    ctx.fillStyle = 'rgba(156, 39, 176, 0.3)';
    ctx.fill();
    ctx.strokeStyle = '#9C27B0';
    ctx.lineWidth = 2;
    ctx.stroke();
    
    // Separating strands
    ctx.strokeStyle = '#1976D2';
    ctx.lineWidth = 4;
    ctx.beginPath();
    ctx.moveTo(width * 0.15, height * 0.5);
    for(let i = 0; i < 5; i++) {
        const py = height * (0.5 + i * 0.08);
        ctx.lineTo(width * (0.15 - i * 0.03), py);
    }
    ctx.stroke();
    
    ctx.strokeStyle = '#D32F2F';
    ctx.beginPath();
    ctx.moveTo(width * 0.35, height * 0.5);
    for(let i = 0; i < 5; i++) {
        const py = height * (0.5 + i * 0.08);
        ctx.lineTo(width * (0.35 + i * 0.03), py);
    }
    ctx.stroke();
    
    // DNA Polymerase
    ctx.fillStyle = '#4CAF50';
    ctx.font = 'bold 11px Arial';
    ctx.textAlign = 'left';
    ctx.fillText('DNA Polymerase', width * 0.02, height * 0.75);
    
    // New complementary strands being synthesized
    ctx.strokeStyle = '#1E88E5';
    ctx.lineWidth = 3;
    ctx.setLineDash([5, 5]);
    ctx.beginPath();
    ctx.moveTo(width * 0.0, height * 0.6);
    ctx.lineTo(width * 0.0, height * 0.88);
    ctx.stroke();
    
    ctx.strokeStyle = '#E53935';
    ctx.beginPath();
    ctx.moveTo(width * 0.5, height * 0.6);
    ctx.lineTo(width * 0.5, height * 0.88);
    ctx.stroke();
    ctx.setLineDash([]);
    
    // Result label
    ctx.fillStyle = '#2C3E50';
    ctx.font = 'bold 14px Arial';
    ctx.textAlign = 'center';
    ctx.fillText('Two Identical DNA Molecules', width * 0.5, height * 0.97);
    
    ctx.restore();
}

static drawValve(ctx, x, y, width, height, type, state) {
    ctx.save();
    ctx.translate(x, y);
    
    const color = { base: '#F5F5DC', light: '#FFFACD', dark: '#D2B48C' };
    
    if(type === 'atrioventricular' || type === 'mitral') {
        // AV valves (tricuspid/mitral)
        const numCusps = type === 'mitral' ? 2 : 3;
        
        if(state === 'open') {
            // Cusps pushed to sides
            for(let i = 0; i < numCusps; i++) {
                const angle = (i / numCusps) * Math.PI - Math.PI / 2;
                const cx = width * 0.5 + Math.cos(angle) * width * 0.3;
                const cy = height * 0.2;
                
                ctx.fillStyle = color.base;
                ctx.strokeStyle = color.dark;
                ctx.lineWidth = 2;
                ctx.beginPath();
                ctx.ellipse(cx, cy, width * 0.08, height * 0.15, angle, 0, Math.PI * 2);
                ctx.fill();
                ctx.stroke();
            }
        } else {
            // Cusps closed (meeting in center)
            for(let i = 0; i < numCusps; i++) {
                const angle = (i / numCusps) * Math.PI * 2;
                
                ctx.fillStyle = color.base;
                ctx.strokeStyle = color.dark;
                ctx.lineWidth = 2;
                ctx.beginPath();
                ctx.moveTo(width * 0.5, height * 0.3);
                ctx.lineTo(
                    width * 0.5 + Math.cos(angle) * width * 0.2,
                    height * 0.3 + Math.sin(angle) * height * 0.15
                );
                ctx.lineTo(
                    width * 0.5 + Math.cos(angle + Math.PI * 2 / numCusps) * width * 0.2,
                    height * 0.3 + Math.sin(angle + Math.PI * 2 / numCusps) * height * 0.15
                );
                ctx.closePath();
                ctx.fill();
                ctx.stroke();
            }
        }
        
        // Chordae tendineae
        ctx.strokeStyle = '#CD853F';
        ctx.lineWidth = 2;
        for(let i = 0; i < numCusps * 2; i++) {
            const angle = (i / (numCusps * 2)) * Math.PI * 2;
            ctx.beginPath();
            ctx.moveTo(
                width * 0.5 + Math.cos(angle) * width * 0.15,
                height * 0.4
            );
            ctx.lineTo(
                width * 0.5 + Math.cos(angle) * width * 0.1,
                height * 0.8
            );
            ctx.stroke();
        }
        
        // Papillary muscles
        ctx.fillStyle = '#DC143C';
        ctx.beginPath();
        ctx.ellipse(width * 0.35, height * 0.85, width * 0.08, height * 0.1, 0, 0, Math.PI * 2);
        ctx.fill();
        ctx.beginPath();
        ctx.ellipse(width * 0.65, height * 0.85, width * 0.08, height * 0.1, 0, 0, Math.PI * 2);
        ctx.fill();
        
    } else if(type === 'semilunar') {
        // Semilunar valves (aortic/pulmonary)
        const numCusps = 3;
        
        if(state === 'open') {
            // Cusps pressed against walls
            for(let i = 0; i < numCusps; i++) {
                const angle = (i / numCusps) * Math.PI * 2 - Math.PI / 2;
                const cx = width * 0.5 + Math.cos(angle) * width * 0.35;
                const cy = height * 0.5 + Math.sin(angle) * height * 0.35;
                
                ctx.fillStyle = color.base;
                ctx.strokeStyle = color.dark;
                ctx.lineWidth = 2;
                ctx.beginPath();
                ctx.arc(cx, cy, width * 0.12, angle + Math.PI, angle + Math.PI * 2);
                ctx.lineTo(width * 0.5, height * 0.5);
                ctx.closePath();
                ctx.fill();
                ctx.stroke();
            }
        } else {
            // Cusps closed (forming Y shape)
            for(let i = 0; i < numCusps; i++) {
                const angle = (i / numCusps) * Math.PI * 2 - Math.PI / 2;
                
                ctx.fillStyle = color.base;
                ctx.strokeStyle = color.dark;
                ctx.lineWidth = 2;
                ctx.beginPath();
                ctx.moveTo(width * 0.5, height * 0.5);
                ctx.arc(
                    width * 0.5 + Math.cos(angle) * width * 0.05,
                    height * 0.5 + Math.sin(angle) * height * 0.05,
                    width * 0.15,
                    angle + Math.PI * 0.7,
                    angle + Math.PI * 1.3
                );
                ctx.closePath();
                ctx.fill();
                ctx.stroke();
            }
        }
        
        // Vessel wall
        ctx.strokeStyle = '#8B4513';
        ctx.lineWidth = 4;
        ctx.beginPath();
        ctx.arc(width * 0.5, height * 0.5, width * 0.45, 0, Math.PI * 2);
        ctx.stroke();
    }
    
    ctx.restore();
}

// Add static helper method for arrows used in drawPhotosynthesis
static drawArrow(ctx, x1, y1, x2, y2, color, lineWidth) {
    ctx.strokeStyle = color;
    ctx.fillStyle = color;
    ctx.lineWidth = lineWidth;
    
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.stroke();
    
    const angle = Math.atan2(y2 - y1, x2 - x1);
    const headLength = 8;
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



static drawFertilization(ctx, x, y, width, height) {
  ctx.save();
  ctx.translate(x, y);
  
  const stepHeight = height / 3;
  
  // Step 1: Sperm approaching egg
  ctx.fillStyle = '#2C3E50';
  ctx.font = 'bold 14px Arial';
  ctx.textAlign = 'center';
  ctx.fillText('1. Sperm Approach', width * 0.25, stepHeight * 0.2);
  
  // Egg (ovum)
  ctx.fillStyle = '#FFE4E1';
  ctx.strokeStyle = '#FF69B4';
  ctx.lineWidth = 4;
  ctx.beginPath();
  ctx.arc(width * 0.5, stepHeight * 0.5, width * 0.15, 0, Math.PI * 2);
  ctx.fill();
  ctx.stroke();
  
  // Zona pellucida (outer layer)
  ctx.strokeStyle = '#FFC0CB';
  ctx.lineWidth = 6;
  ctx.setLineDash([3, 3]);
  ctx.beginPath();
  ctx.arc(width * 0.5, stepHeight * 0.5, width * 0.18, 0, Math.PI * 2);
  ctx.stroke();
  ctx.setLineDash([]);
  
  // Corona radiata (outer cells)
  ctx.fillStyle = '#FFB6C1';
  for(let i = 0; i < 12; i++) {
    const angle = (i * Math.PI * 2) / 12;
    const crX = width * 0.5 + Math.cos(angle) * width * 0.2;
    const crY = stepHeight * 0.5 + Math.sin(angle) * width * 0.2;
    ctx.beginPath();
    ctx.arc(crX, crY, width * 0.015, 0, Math.PI * 2);
    ctx.fill();
  }
  
  // Nucleus (germinal vesicle)
  ctx.fillStyle = '#9370DB';
  ctx.beginPath();
  ctx.arc(width * 0.5, stepHeight * 0.5, width * 0.05, 0, Math.PI * 2);
  ctx.fill();
  
  // Polar body
  ctx.fillStyle = '#DDA0DD';
  ctx.strokeStyle = '#9370DB';
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.arc(width * 0.55, stepHeight * 0.38, width * 0.02, 0, Math.PI * 2);
  ctx.fill();
  ctx.stroke();
  
  // Multiple sperm approaching
  const spermPositions = [
    [0.25, 0.4], [0.2, 0.5], [0.25, 0.6],
    [0.75, 0.4], [0.8, 0.5], [0.75, 0.6]
  ];
  
  spermPositions.forEach(([sx, sy]) => {
    // Sperm head
    ctx.fillStyle = '#4682B4';
    ctx.strokeStyle = '#1E3A5F';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.ellipse(width * sx, stepHeight * sy, width * 0.015, width * 0.025, 0, 0, Math.PI * 2);
    ctx.fill();
    ctx.stroke();
    
    // Sperm tail (flagellum)
    ctx.strokeStyle = '#87CEEB';
    ctx.lineWidth = 2;
    ctx.beginPath();
    const tailDir = sx < 0.5 ? 1 : -1;
    ctx.moveTo(width * sx, stepHeight * sy);
    for(let i = 0; i < 8; i++) {
      const tailX = width * sx + tailDir * i * width * 0.015;
      const tailY = stepHeight * sy + Math.sin(i * 0.8) * height * 0.015;
      ctx.lineTo(tailX, tailY);
    }
    ctx.stroke();
    
    // Acrosome (cap)
    ctx.fillStyle = '#FFD700';
    ctx.beginPath();
    ctx.arc(width * sx, stepHeight * sy - width * 0.02, width * 0.01, 0, Math.PI);
    ctx.fill();
  });
  
  // Label
  ctx.fillStyle = '#2C3E50';
  ctx.font = '11px Arial';
  ctx.textAlign = 'center';
  ctx.fillText('Sperm', width * 0.15, stepHeight * 0.5);
  ctx.fillText('Egg (Ovum)', width * 0.5, stepHeight * 0.75);
  
  // Arrow
  this.drawArrow(ctx, width * 0.5, stepHeight * 0.8, width * 0.5, stepHeight * 1.1, '#555', 2);
  
  // Step 2: Sperm penetration
  ctx.fillStyle = '#2C3E50';
  ctx.font = 'bold 14px Arial';
  ctx.textAlign = 'center';
  ctx.fillText('2. Penetration', width * 0.25, stepHeight * 1.2);
  
  // Egg
  ctx.fillStyle = '#FFE4E1';
  ctx.strokeStyle = '#FF69B4';
  ctx.lineWidth = 4;
  ctx.beginPath();
  ctx.arc(width * 0.5, stepHeight * 1.5, width * 0.15, 0, Math.PI * 2);
  ctx.fill();
  ctx.stroke();
  
  // One sperm penetrating
  ctx.fillStyle = '#4682B4';
  ctx.strokeStyle = '#1E3A5F';
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.ellipse(width * 0.35, stepHeight * 1.5, width * 0.015, width * 0.025, 0.5, 0, Math.PI * 2);
  ctx.fill();
  ctx.stroke();
  
  // Penetration path
  ctx.strokeStyle = '#FFD700';
  ctx.lineWidth = 3;
  ctx.setLineDash([2, 2]);
  ctx.beginPath();
  ctx.moveTo(width * 0.35, stepHeight * 1.5);
  ctx.lineTo(width * 0.45, stepHeight * 1.5);
  ctx.stroke();
  ctx.setLineDash([]);
  
  // Acrosomal reaction (enzymes)
  ctx.fillStyle = '#FFD700';
  for(let i = 0; i < 5; i++) {
    ctx.beginPath();
    ctx.arc(
      width * (0.36 + i * 0.015),
      stepHeight * 1.5,
      width * 0.005,
      0, Math.PI * 2
    );
    ctx.fill();
  }
  
  // Block to polyspermy (other sperm blocked)
  ctx.strokeStyle = '#FF0000';
  ctx.lineWidth = 3;
  // X marks
  ctx.beginPath();
  ctx.moveTo(width * 0.28, stepHeight * 1.42);
  ctx.lineTo(width * 0.32, stepHeight * 1.46);
  ctx.moveTo(width * 0.32, stepHeight * 1.42);
  ctx.lineTo(width * 0.28, stepHeight * 1.46);
  ctx.stroke();
  
  ctx.beginPath();
  ctx.moveTo(width * 0.68, stepHeight * 1.54);
  ctx.lineTo(width * 0.72, stepHeight * 1.58);
  ctx.moveTo(width * 0.72, stepHeight * 1.54);
  ctx.lineTo(width * 0.68, stepHeight * 1.58);
  ctx.stroke();
  
  // Arrow
  this.drawArrow(ctx, width * 0.5, stepHeight * 1.75, width * 0.5, stepHeight * 2.1, '#555', 2);
  
  // Step 3: Fusion of nuclei
  ctx.fillStyle = '#2C3E50';
  ctx.font = 'bold 14px Arial';
  ctx.textAlign = 'center';
  ctx.fillText('3. Nuclear Fusion', width * 0.25, stepHeight * 2.2);
  
  // Fertilized egg (zygote)
  ctx.fillStyle = '#FFFACD';
  ctx.strokeStyle = '#FFD700';
  ctx.lineWidth = 4;
  ctx.beginPath();
  ctx.arc(width * 0.5, stepHeight * 2.5, width * 0.15, 0, Math.PI * 2);
  ctx.fill();
  ctx.stroke();
  
  // Fusing nuclei
  // Male pronucleus
  ctx.fillStyle = '#87CEEB';
  ctx.strokeStyle = '#4682B4';
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.arc(width * 0.47, stepHeight * 2.5, width * 0.04, 0, Math.PI * 2);
  ctx.fill();
  ctx.stroke();
  
  // Female pronucleus
  ctx.fillStyle = '#FFB6C1';
  ctx.strokeStyle = '#FF69B4';
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.arc(width * 0.53, stepHeight * 2.5, width * 0.04, 0, Math.PI * 2);
  ctx.fill();
  ctx.stroke();
  
  // Chromosomes mixing
  ctx.strokeStyle = '#9370DB';
  ctx.lineWidth = 1;
  for(let i = 0; i < 4; i++) {
    ctx.beginPath();
    ctx.moveTo(width * 0.48, stepHeight * (2.48 + i * 0.01));
    ctx.lineTo(width * 0.52, stepHeight * (2.48 + i * 0.01));
    ctx.stroke();
  }
  
  // Label
  ctx.fillStyle = '#2C3E50';
  ctx.font = 'bold 12px Arial';
  ctx.fillText('Zygote', width * 0.5, stepHeight * 2.75);
  ctx.font = '10px Arial';
  ctx.fillText('(2n = diploid)', width * 0.5, stepHeight * 2.8);
  
  // DNA content label
  ctx.fillStyle = '#4682B4';
  ctx.font = '9px Arial';
  ctx.textAlign = 'left';
  ctx.fillText('♂ DNA', width * 0.42, stepHeight * 2.47);
  
  ctx.fillStyle = '#FF69B4';
  ctx.fillText('♀ DNA', width * 0.54, stepHeight * 2.47);
  
  ctx.restore();
}

static drawEmbryoDevelopment(ctx, x, y, width, height) {
  ctx.save();
  ctx.translate(x, y);
  
  const stageWidth = width / 5;
  
  // Stage 1: Zygote
  ctx.fillStyle = '#2C3E50';
  ctx.font = 'bold 12px Arial';
  ctx.textAlign = 'center';
  ctx.fillText('Zygote', stageWidth * 0.5, height * 0.15);
  ctx.font = '10px Arial';
  ctx.fillText('(0-1 day)', stageWidth * 0.5, height * 0.18);
  
  ctx.fillStyle = '#FFFACD';
  ctx.strokeStyle = '#FFD700';
  ctx.lineWidth = 3;
  ctx.beginPath();
  ctx.arc(stageWidth * 0.5, height * 0.35, width * 0.06, 0, Math.PI * 2);
  ctx.fill();
  ctx.stroke();
  
  // Nucleus
  ctx.fillStyle = '#9370DB';
  ctx.beginPath();
  ctx.arc(stageWidth * 0.5, height * 0.35, width * 0.02, 0, Math.PI * 2);
  ctx.fill();
  
  // Arrow
  this.drawArrow(ctx, stageWidth * 0.7, height * 0.35, stageWidth * 0.9, height * 0.35, '#555', 2);
  
  // Stage 2: Cleavage (2-cell)
  ctx.fillStyle = '#2C3E50';
  ctx.font = 'bold 12px Arial';
  ctx.textAlign = 'center';
  ctx.fillText('2-Cell', stageWidth * 1.5, height * 0.15);
  ctx.font = '10px Arial';
  ctx.fillText('(1-2 days)', stageWidth * 1.5, height * 0.18);
  
  ctx.fillStyle = '#FFF8DC';
  ctx.strokeStyle = '#FFD700';
  ctx.lineWidth = 3;
  
  // Left cell
  ctx.beginPath();
  ctx.arc(stageWidth * 1.45, height * 0.35, width * 0.04, 0, Math.PI * 2);
  ctx.fill();
  ctx.stroke();
  
  // Right cell
  ctx.beginPath();
  ctx.arc(stageWidth * 1.55, height * 0.35, width * 0.04, 0, Math.PI * 2);
  ctx.fill();
  ctx.stroke();
  
  // Division line
  ctx.strokeStyle = '#B8860B';
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.moveTo(stageWidth * 1.5, height * 0.31);
  ctx.lineTo(stageWidth * 1.5, height * 0.39);
  ctx.stroke();
  
  // Arrow
  this.drawArrow(ctx, stageWidth * 1.7, height * 0.35, stageWidth * 1.9, height * 0.35, '#555', 2);
  
  // Stage 3: Morula (16-cell)
  ctx.fillStyle = '#2C3E50';
  ctx.font = 'bold 12px Arial';
  ctx.textAlign = 'center';
  ctx.fillText('Morula', stageWidth * 2.5, height * 0.15);
  ctx.font = '10px Arial';
  ctx.fillText('(3-4 days)', stageWidth * 2.5, height * 0.18);
  
  // Cluster of cells
  ctx.fillStyle = '#FFE4B5';
  ctx.strokeStyle = '#DEB887';
  ctx.lineWidth = 2;
  
  for(let i = 0; i < 4; i++) {
    for(let j = 0; j < 4; j++) {
      const cellX = stageWidth * (2.42 + i * 0.03);
      const cellY = height * (0.32 + j * 0.02);
      ctx.beginPath();
      ctx.arc(cellX, cellY, width * 0.012, 0, Math.PI * 2);
      ctx.fill();
      ctx.stroke();
    }
  }
  
  // Outer boundary
  ctx.strokeStyle = '#CD853F';
  ctx.lineWidth = 3;
  ctx.beginPath();
  ctx.arc(stageWidth * 2.5, height * 0.35, width * 0.065, 0, Math.PI * 2);
  ctx.stroke();
  
  // Arrow
  this.drawArrow(ctx, stageWidth * 2.7, height * 0.35, stageWidth * 2.9, height * 0.35, '#555', 2);
  
  // Stage 4: Blastocyst
  ctx.fillStyle = '#2C3E50';
  ctx.font = 'bold 12px Arial';
  ctx.textAlign = 'center';
  ctx.fillText('Blastocyst', stageWidth * 3.5, height * 0.15);
  ctx.font = '10px Arial';
  ctx.fillText('(5-6 days)', stageWidth * 3.5, height * 0.18);
  
  // Outer wall (trophoblast)
  ctx.strokeStyle = '#8B4513';
  ctx.lineWidth = 4;
  ctx.beginPath();
  ctx.arc(stageWidth * 3.5, height * 0.35, width * 0.07, 0, Math.PI * 2);
  ctx.stroke();
  
  // Blastocoel (fluid-filled cavity)
  ctx.fillStyle = '#E0F7FA';
  ctx.beginPath();
  ctx.arc(stageWidth * 3.5, height * 0.35, width * 0.06, 0, Math.PI * 2);
  ctx.fill();
  
  // Inner cell mass
  ctx.fillStyle = '#FF6B6B';
  for(let i = 0; i < 3; i++) {
    for(let j = 0; j < 2; j++) {
      ctx.beginPath();
      ctx.arc(
        stageWidth * (3.45 + i * 0.02),
        height * (0.33 + j * 0.02),
        width * 0.01,
        0, Math.PI * 2
      );
      ctx.fill();
    }
  }
  
  // Label
  ctx.fillStyle = '#2C3E50';
  ctx.font = '9px Arial';
  ctx.fillText('ICM', stageWidth * 3.45, height * 0.42);
  
  // Arrow
  this.drawArrow(ctx, stageWidth * 3.7, height * 0.35, stageWidth * 3.9, height * 0.35, '#555', 2);
  
  // Stage 5: Gastrula
  ctx.fillStyle = '#2C3E50';
  ctx.font = 'bold 12px Arial';
  ctx.textAlign = 'center';
  ctx.fillText('Gastrula', stageWidth * 4.5, height * 0.15);
  ctx.font = '10px Arial';
  ctx.fillText('(2-3 weeks)', stageWidth * 4.5, height * 0.18);
  
  // Three germ layers
  // Ectoderm (outer)
  ctx.fillStyle = '#FFE4E1';
  ctx.strokeStyle = '#CD5C5C';
  ctx.lineWidth = 3;
  ctx.beginPath();
  ctx.arc(stageWidth * 4.5, height * 0.35, width * 0.08, 0, Math.PI * 2);
  ctx.fill();
  ctx.stroke();
  
  // Mesoderm (middle)
  ctx.fillStyle = '#FFDAB9';
  ctx.strokeStyle = '#D2691E';
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.arc(stageWidth * 4.5, height * 0.35, width * 0.06, 0, Math.PI * 2);
  ctx.fill();
  ctx.stroke();
  
  // Endoderm (inner)
  ctx.fillStyle = '#F0E68C';
  ctx.strokeStyle = '#BDB76B';
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.arc(stageWidth * 4.5, height * 0.35, width * 0.04, 0, Math.PI * 2);
  ctx.fill();
  ctx.stroke();
  
  // Archenteron (primitive gut)
  ctx.fillStyle = '#FFFACD';
  ctx.beginPath();
  ctx.arc(stageWidth * 4.5, height * 0.35, width * 0.02, 0, Math.PI * 2);
  ctx.fill();
  
  // Labels for germ layers
  ctx.fillStyle = '#2C3E50';
  ctx.font = '9px Arial';
  ctx.textAlign = 'left';
  ctx.fillText('Ectoderm', stageWidth * 4.6, height * 0.3);
  ctx.fillText('Mesoderm', stageWidth * 4.6, height * 0.35);
  ctx.fillText('Endoderm', stageWidth * 4.6, height * 0.4);
  
  // Lower section: Fetal development stages
  ctx.fillStyle = '#2C3E50';
  ctx.font = 'bold 14px Arial';
  ctx.textAlign = 'center';
  ctx.fillText('Fetal Development', width * 0.5, height * 0.55);
  
  const fetalWidth = width / 4;
  
  // 4 weeks
  ctx.font = 'bold 11px Arial';
  ctx.fillText('4 Weeks', fetalWidth * 0.5, height * 0.65);
  
  ctx.strokeStyle = '#FF6B9D';
  ctx.lineWidth = 3;
  // Simple curved embryo
  ctx.beginPath();
  ctx.arc(fetalWidth * 0.5, height * 0.8, width * 0.04, Math.PI, 0);
  ctx.stroke();
  
  ctx.fillStyle = '#2C3E50';
  ctx.font = '9px Arial';
  ctx.fillText('~5mm', fetalWidth * 0.5, height * 0.92);
  
  // 8 weeks
  ctx.font = 'bold 11px Arial';
  ctx.fillText('8 Weeks', fetalWidth * 1.5, height * 0.65);
  
  // More defined embryo with limb buds
  ctx.fillStyle = '#FFB6C1';
  ctx.strokeStyle = '#FF69B4';
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.ellipse(fetalWidth * 1.5, height * 0.8, width * 0.035, height * 0.055, 0, 0, Math.PI * 2);
  ctx.fill();
  ctx.stroke();
  
  // Head
  ctx.beginPath();
  ctx.arc(fetalWidth * 1.5, height * 0.76, width * 0.02, 0, Math.PI * 2);
  ctx.fill();
  ctx.stroke();
  
  // Limb buds
  ctx.strokeStyle = '#FF69B4';
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.moveTo(fetalWidth * 1.47, height * 0.8);
  ctx.lineTo(fetalWidth * 1.44, height * 0.82);
  ctx.stroke();
  ctx.beginPath();
  ctx.moveTo(fetalWidth * 1.53, height * 0.8);
  ctx.lineTo(fetalWidth * 1.56, height * 0.82);
  ctx.stroke();
  
  ctx.fillStyle = '#2C3E50';
  ctx.font = '9px Arial';
  ctx.fillText('~16mm', fetalWidth * 1.5, height * 0.92);
  
  // 16 weeks
  ctx.font = 'bold 11px Arial';
  ctx.fillText('16 Weeks', fetalWidth * 2.5, height * 0.65);
  
  // Recognizable fetus
  ctx.fillStyle = '#FFC0CB';
  ctx.strokeStyle = '#FF1493';
  ctx.lineWidth = 2;
  
  // Body
  ctx.beginPath();
  ctx.ellipse(fetalWidth * 2.5, height * 0.82, width * 0.03, height * 0.05, 0, 0, Math.PI * 2);
  ctx.fill();
  ctx.stroke();
  
  // Head (larger proportion)
  ctx.beginPath();
  ctx.arc(fetalWidth * 2.5, height * 0.75, width * 0.025, 0, Math.PI * 2);
  ctx.fill();
  ctx.stroke();
  
  // Arms
  ctx.strokeStyle = '#FF1493';
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.moveTo(fetalWidth * 2.47, height * 0.8);
  ctx.lineTo(fetalWidth * 2.44, height * 0.85);
  ctx.stroke();
  ctx.beginPath();
  ctx.moveTo(fetalWidth * 2.53, height * 0.8);
  ctx.lineTo(fetalWidth * 2.56, height * 0.85);
  ctx.stroke();
  
  // Legs
  ctx.beginPath();
  ctx.moveTo(fetalWidth * 2.48, height * 0.87);
  ctx.lineTo(fetalWidth * 2.47, height * 0.91);
  ctx.stroke();
  ctx.beginPath();
  ctx.moveTo(fetalWidth * 2.52, height * 0.87);
  ctx.lineTo(fetalWidth * 2.53, height * 0.91);
  ctx.stroke();
  
  ctx.fillStyle = '#2C3E50';
  ctx.font = '9px Arial';
  ctx.fillText('~11cm', fetalWidth * 2.5, height * 0.95);
  
  // Full term
  ctx.font = 'bold 11px Arial';
  ctx.fillText('38-40 Weeks', fetalWidth * 3.5, height * 0.65);
  ctx.font = '10px Arial';
  ctx.fillText('(Full Term)', fetalWidth * 3.5, height * 0.68);
  
  // Full-size baby
  ctx.fillStyle = '#FFDAB9';
  ctx.strokeStyle = '#D2691E';
  ctx.lineWidth = 3;
  
  // Body
  ctx.beginPath();
  ctx.ellipse(fetalWidth * 3.5, height * 0.82, width * 0.04, height * 0.06, 0, 0, Math.PI * 2);
  ctx.fill();
  ctx.stroke();
  
  // Head
  ctx.beginPath();
  ctx.arc(fetalWidth * 3.5, height * 0.74, width * 0.03, 0, Math.PI * 2);
  ctx.fill();
  ctx.stroke();
  
  // Facial features
  ctx.fillStyle = '#8B4513';
  ctx.beginPath();
  ctx.arc(fetalWidth * 3.48, height * 0.74, width * 0.003, 0, Math.PI * 2);
  ctx.fill();
  ctx.beginPath();
  ctx.arc(fetalWidth * 3.52, height * 0.74, width * 0.003, 0, Math.PI * 2);
  ctx.fill();
  
  // Arms and legs
  ctx.strokeStyle = '#D2691E';
  ctx.lineWidth = 3;
  ctx.beginPath();
  ctx.moveTo(fetalWidth * 3.46, height * 0.8);
  ctx.lineTo(fetalWidth * 3.42, height * 0.88);
  ctx.stroke();
  ctx.beginPath();
  ctx.moveTo(fetalWidth * 3.54, height * 0.8);
  ctx.lineTo(fetalWidth * 3.58, height * 0.88);
  ctx.stroke();
  
  ctx.beginPath();
  ctx.moveTo(fetalWidth * 3.48, height * 0.88);
  ctx.lineTo(fetalWidth * 3.46, height * 0.95);
  ctx.stroke();
  ctx.beginPath();
  ctx.moveTo(fetalWidth * 3.52, height * 0.88);
  ctx.lineTo(fetalWidth * 3.54, height * 0.95);
  ctx.stroke();
  
  ctx.fillStyle = '#2C3E50';
  ctx.font = '9px Arial';
  ctx.fillText('~50cm', fetalWidth * 3.5, height * 0.98);
  ctx.fillText('~3.5kg', fetalWidth * 3.5, height * 1.01);
  
  ctx.restore();
}

static drawMenstrualCycle(ctx, x, y, width, height, showHormones = true) {
  ctx.save();
  ctx.translate(x, y);
  
  // Timeline (28 days)
  ctx.strokeStyle = '#2C3E50';
  ctx.lineWidth = 3;
  ctx.beginPath();
  ctx.moveTo(width * 0.1, height * 0.85);
  ctx.lineTo(width * 0.9, height * 0.85);
  ctx.stroke();
  
  // Day markers
  ctx.fillStyle = '#2C3E50';
  ctx.font = '10px Arial';
  ctx.textAlign = 'center';
  for(let i = 0; i <= 28; i += 7) {
    const dayX = width * (0.1 + (i / 28) * 0.8);
    ctx.beginPath();
    ctx.moveTo(dayX, height * 0.83);
    ctx.lineTo(dayX, height * 0.87);
    ctx.stroke();
    ctx.fillText(`Day ${i}`, dayX, height * 0.9);
  }
  
  // Phase labels
  ctx.font = 'bold 12px Arial';
  ctx.fillStyle = '#E74C3C';
  ctx.fillText('Menstruation', width * 0.2, height * 0.95);
  
  ctx.fillStyle = '#3498DB';
  ctx.fillText('Follicular Phase', width * 0.4, height * 0.95);
  
  ctx.fillStyle = '#F39C12';
  ctx.fillText('Ovulation', width * 0.55, height * 0.95);
  
  ctx.fillStyle = '#9B59B6';
  ctx.fillText('Luteal Phase', width * 0.75, height * 0.95);
  
  // Ovarian cycle (top section)
  ctx.fillStyle = '#2C3E50';
  ctx.font = 'bold 14px Arial';
  ctx.textAlign = 'center';
  ctx.fillText('Ovarian Cycle', width * 0.5, height * 0.08);
  
  // Follicle development
  const follicleStages = [
    { x: 0.15, size: 0.015, color: '#FFE4E1', label: 'Primary\nFollicle' },
    { x: 0.3, size: 0.025, color: '#FFC0CB', label: 'Secondary\nFollicle' },
    { x: 0.45, size: 0.035, color: '#FFB6C1', label: 'Mature\nFollicle' },
    { x: 0.55, size: 0.02, color: '#FFD700', label: 'Ovulation' },
    { x: 0.7, size: 0.03, color: '#FFA500', label: 'Corpus\nLuteum' },
    { x: 0.85, size: 0.015, color: '#D3D3D3', label: 'Corpus\nAlbicans' }
  ];
  
  follicleStages.forEach(stage => {
    ctx.fillStyle = stage.color;
    ctx.strokeStyle = '#8B4513';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.arc(width * stage.x, height * 0.2, width * stage.size, 0, Math.PI * 2);
    ctx.fill();
    ctx.stroke();
    
    // Oocyte inside (except for ovulation and corpus albicans)
    if(stage.x < 0.55 || (stage.x > 0.55 && stage.x < 0.85)) {
      ctx.fillStyle = '#9370DB';
      ctx.beginPath();
      ctx.arc(width * stage.x, height * 0.2, width * stage.size * 0.4, 0, Math.PI * 2);
      ctx.fill();
    }
    
    // Released egg at ovulation
    if(stage.x === 0.55) {
      ctx.fillStyle = '#9370DB';
      ctx.strokeStyle = '#FF1493';
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.arc(width * stage.x, height * 0.15, width * 0.015, 0, Math.PI * 2);
      ctx.fill();
      ctx.stroke();
      
      // Arrow showing release
      this.drawArrow(
        ctx,
        width * stage.x,
        height * 0.185,
        width * stage.x,
        height * 0.145,
        '#FF1493',
        2
      );
    }
    
    // Label
    ctx.fillStyle = '#2C3E50';
    ctx.font = '9px Arial';
    ctx.textAlign = 'center';
    const lines = stage.label.split('\n');
    lines.forEach((line, i) => {
      ctx.fillText(line, width * stage.x, height * (0.27 + i * 0.02));
    });
  });
  
  // Uterine cycle (middle section)
  ctx.fillStyle = '#2C3E50';
  ctx.font = 'bold 14px Arial';
  ctx.textAlign = 'center';
  ctx.fillText('Uterine (Endometrial) Cycle', width * 0.5, height * 0.38);
  
  // Uterine lining diagram
  ctx.strokeStyle = '#8B4513';
  ctx.lineWidth = 3;
  ctx.beginPath();
  ctx.moveTo(width * 0.1, height * 0.6);
  ctx.lineTo(width * 0.9, height * 0.6);
  ctx.stroke();
  
  // Endometrium thickness changes
  ctx.fillStyle = '#FFB6C1';
  ctx.strokeStyle = '#FF69B4';
  ctx.lineWidth = 2;
  
  ctx.beginPath();
  // Menstruation (days 1-5) - thin
  ctx.moveTo(width * 0.1, height * 0.6);
  ctx.lineTo(width * 0.24, height * 0.6);
  
  // Proliferative phase (days 6-14) - thickening
  ctx.quadraticCurveTo(width * 0.35, height * 0.5, width * 0.5, height * 0.45);
  
  // Secretory phase (days 15-28) - thick then breakdown
  ctx.quadraticCurveTo(width * 0.7, height * 0.44, width * 0.82, height * 0.5);
  ctx.lineTo(width * 0.9, height * 0.6);
  ctx.lineTo(width * 0.1, height * 0.6);
  ctx.closePath();
  ctx.fill();
  ctx.stroke();
  
  // Glands in endometrium
  ctx.strokeStyle = '#C71585';
  ctx.lineWidth = 1;
  for(let i = 0; i < 8; i++) {
    const glandX = width * (0.5 + i * 0.04);
    ctx.beginPath();
    ctx.moveTo(glandX, height * 0.6);
    ctx.quadraticCurveTo(
      glandX - width * 0.01,
      height * 0.52,
      glandX,
      height * 0.46
    );
    ctx.stroke();
  }
  
  // Blood vessels
  ctx.strokeStyle = '#DC143C';
  ctx.lineWidth = 1;
  for(let i = 0; i < 10; i++) {
    const vesselX = width * (0.15 + i * 0.07);
    ctx.beginPath();
    ctx.moveTo(vesselX, height * 0.6);
    ctx.lineTo(vesselX, height * 0.55);
    ctx.stroke();
  }
  
  // Menstrual flow indication
  ctx.fillStyle = '#8B0000';
  for(let i = 0; i < 8; i++) {
    ctx.beginPath();
    ctx.arc(
      width * (0.12 + i * 0.015),
      height * (0.62 + Math.random() * 0.03),
      width * 0.003,
      0, Math.PI * 2
    );
    ctx.fill();
  }
  
  ctx.fillStyle = '#2C3E50';
  ctx.font = '10px Arial';
  ctx.textAlign = 'center';
  ctx.fillText('Menstrual flow', width * 0.17, height * 0.68);
  ctx.fillText('Endometrium rebuilds', width * 0.4, height * 0.52);
  ctx.fillText('Thick, vascular', width * 0.7, height * 0.48);
  
  // Hormone levels (if enabled)
  if(showHormones) {
    ctx.fillStyle = '#2C3E50';
    ctx.font = 'bold 14px Arial';
    ctx.textAlign = 'center';
    ctx.fillText('Hormone Levels', width * 0.5, height * 0.03);
    
    // FSH (Follicle Stimulating Hormone)
    ctx.strokeStyle = '#3498DB';
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.moveTo(width * 0.1, height * 0.15);
    ctx.quadraticCurveTo(width * 0.25, height * 0.12, width * 0.4, height * 0.16);
    ctx.quadraticCurveTo(width * 0.6, height * 0.18, width * 0.9, height * 0.17);
    ctx.stroke();
    
    // LH (Luteinizing Hormone) - spike at ovulation
    ctx.strokeStyle = '#E74C3C';
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.moveTo(width * 0.1, height * 0.16);
    ctx.lineTo(width * 0.48, height * 0.16);
    ctx.lineTo(width * 0.5, height * 0.1); // LH surge
    ctx.lineTo(width * 0.52, height * 0.16);
    ctx.lineTo(width * 0.9, height * 0.17);
    ctx.stroke();
    
    // Estrogen
    ctx.strokeStyle = '#9B59B6';
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.moveTo(width * 0.1, height * 0.17);
    ctx.quadraticCurveTo(width * 0.35, height * 0.11, width * 0.5, height * 0.17);
    ctx.quadraticCurveTo(width * 0.65, height * 0.13, width * 0.9, height * 0.18);
    ctx.stroke();
    
    // Progesterone
    ctx.strokeStyle = '#F39C12';
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.moveTo(width * 0.1, height * 0.18);
    ctx.lineTo(width * 0.5, height * 0.18);
    ctx.quadraticCurveTo(width * 0.7, height * 0.12, width * 0.82, height * 0.17);
    ctx.lineTo(width * 0.9, height * 0.18);
    ctx.stroke();
    
    // Legend
    ctx.font = '10px Arial';
    ctx.textAlign = 'left';
    
    ctx.fillStyle = '#3498DB';
    ctx.fillText('FSH', width * 0.02, height * 0.12);
    
    ctx.fillStyle = '#E74C3C';
    ctx.fillText('LH', width * 0.02, height * 0.15);
    
    ctx.fillStyle = '#9B59B6';
    ctx.fillText('Estrogen', width * 0.02, height * 0.18);
    
    ctx.fillStyle = '#F39C12';
    ctx.fillText('Progesterone', width * 0.02, height * 0.21);
  }
  
  ctx.restore();
}

static drawGametogenesis(ctx, x, y, width, height, showBoth = true) {
  ctx.save();
  ctx.translate(x, y);
  
  if(showBoth) {
    const halfWidth = width / 2;
    
    // Spermatogenesis (left)
    this.drawSpermatogenesis(ctx, 0, 0, halfWidth, height);
    
    // Oogenesis (right)
    this.drawOogenesis(ctx, halfWidth, 0, halfWidth, height);
    
  } else {
    // Draw only one (would need parameter to specify which)
    this.drawSpermatogenesis(ctx, 0, 0, width, height);
  }
  
  ctx.restore();
}

static drawSpermatogenesis(ctx, x, y, width, height) {
  ctx.save();
  ctx.translate(x, y);
  
  // Title
  ctx.fillStyle = '#4682B4';
  ctx.font = 'bold 16px Arial';
  ctx.textAlign = 'center';
  ctx.fillText('Spermatogenesis', width * 0.5, height * 0.05);
  ctx.font = '11px Arial';
  ctx.fillText('(Male gamete production)', width * 0.5, height * 0.08);
  
  const stepHeight = height / 7;
  
  // Step 1: Spermatogonium (2n)
  ctx.fillStyle = '#E1F5FE';
  ctx.strokeStyle = '#0288D1';
  ctx.lineWidth = 3;
  ctx.beginPath();
  ctx.arc(width * 0.5, stepHeight * 1, width * 0.12, 0, Math.PI * 2);
  ctx.fill();
  ctx.stroke();
  
  // Chromosomes (diploid)
  ctx.strokeStyle = '#1976D2';
  ctx.lineWidth = 2;
  for(let i = 0; i < 4; i++) {
    const angle = (i * Math.PI * 2) / 4;
    ctx.beginPath();
    ctx.moveTo(
      width * 0.5 + Math.cos(angle) * width * 0.04,
      stepHeight * 1 + Math.sin(angle) * width * 0.04
    );
    ctx.lineTo(
      width * 0.5 + Math.cos(angle) * width * 0.08,
      stepHeight * 1 + Math.sin(angle) * width * 0.08
    );
    ctx.stroke();
  }
  
  ctx.fillStyle = '#2C3E50';
  ctx.font = 'bold 11px Arial';
  ctx.textAlign = 'center';
  ctx.fillText('Spermatogonium', width * 0.5, stepHeight * 1.2);
  ctx.font = '10px Arial';
  ctx.fillText('(2n = diploid)', width * 0.5, stepHeight * 1.25);
  
  // Arrow (mitosis)
  this.drawArrow(ctx, width * 0.5, stepHeight * 1.3, width * 0.5, stepHeight * 1.65, '#555', 2);
  ctx.fillStyle = '#2C3E50';
  ctx.font = '9px Arial';
  ctx.fillText('Mitosis', width * 0.6, stepHeight * 1.48);
  
  // Step 2: Primary spermatocyte (2n)
  ctx.fillStyle = '#B3E5FC';
  ctx.strokeStyle = '#0288D1';
  ctx.lineWidth = 3;
  ctx.beginPath();
  ctx.arc(width * 0.5, stepHeight * 2, width * 0.12, 0, Math.PI * 2);
  ctx.fill();
  ctx.stroke();
  
  // Paired chromosomes (homologous pairs)
  ctx.strokeStyle = '#1976D2';
  ctx.lineWidth = 3;
  for(let i = 0; i < 4; i++) {
    const angle = (i * Math.PI * 2) / 4;
    ctx.beginPath();
    ctx.moveTo(
      width * 0.5 + Math.cos(angle) * width * 0.05,
      stepHeight * 2 + Math.sin(angle) * width * 0.05
    );
    ctx.lineTo(
      width * 0.5 + Math.cos(angle) * width * 0.08,
      stepHeight * 2 + Math.sin(angle) * width * 0.08
    );
    ctx.stroke();
  }
  
  ctx.fillStyle = '#2C3E50';
  ctx.font = 'bold 11px Arial';
  ctx.textAlign = 'center';
  ctx.fillText('Primary Spermatocyte', width * 0.5, stepHeight * 2.2);
  ctx.font = '10px Arial';
  ctx.fillText('(2n)', width * 0.5, stepHeight * 2.25);
  
  // Arrow (meiosis I)
  this.drawArrow(ctx, width * 0.5, stepHeight * 2.3, width * 0.5, stepHeight * 2.65, '#555', 2);
  ctx.fillStyle = '#E74C3C';
  ctx.font = 'bold 9px Arial';
  ctx.fillText('Meiosis I', width * 0.6, stepHeight * 2.48);
  
  // Step 3: Secondary spermatocytes (n) - two cells
  for(let i = 0; i < 2; i++) {
    const cellX = width * (0.35 + i * 0.3);
    
    ctx.fillStyle = '#81D4FA';
    ctx.strokeStyle = '#0277BD';
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.arc(cellX, stepHeight * 3, width * 0.09, 0, Math.PI * 2);
    ctx.fill();
    ctx.stroke();
    
    // Chromosomes (haploid)
    ctx.strokeStyle = '#01579B';
    ctx.lineWidth = 2;
    for(let j = 0; j < 2; j++) {
      ctx.beginPath();
      ctx.moveTo(cellX - width * 0.02 + j * width * 0.04, stepHeight * 3);
      ctx.lineTo(cellX - width * 0.02 + j * width * 0.04, stepHeight * 3.05);
      ctx.stroke();
    }
  }
  
  ctx.fillStyle = '#2C3E50';
  ctx.font = 'bold 11px Arial';
  ctx.textAlign = 'center';
  ctx.fillText('Secondary Spermatocytes', width * 0.5, stepHeight * 3.2);
  ctx.font = '10px Arial';
  ctx.fillText('(n = haploid)', width * 0.5, stepHeight * 3.25);
  
  // Arrow (meiosis II)
  this.drawArrow(ctx, width * 0.5, stepHeight * 3.3, width * 0.5, stepHeight * 3.65, '#555', 2);
  ctx.fillStyle = '#E74C3C';
  ctx.font = 'bold 9px Arial';
  ctx.fillText('Meiosis II', width * 0.6, stepHeight * 3.48);
  
  // Step 4: Spermatids (n) - four cells
  for(let i = 0; i < 4; i++) {
    const cellX = width * (0.25 + i * 0.17);
    
    ctx.fillStyle = '#B3E5FC';
    ctx.strokeStyle = '#0288D1';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.arc(cellX, stepHeight * 4, width * 0.06, 0, Math.PI * 2);
    ctx.fill();
    ctx.stroke();
  }
  
  ctx.fillStyle = '#2C3E50';
  ctx.font = 'bold 11px Arial';
  ctx.textAlign = 'center';
  ctx.fillText('Spermatids (4)', width * 0.5, stepHeight * 4.2);
  ctx.font = '10px Arial';
  ctx.fillText('(n)', width * 0.5, stepHeight * 4.25);
  
  // Arrow (differentiation)
  this.drawArrow(ctx, width * 0.5, stepHeight * 4.3, width * 0.5, stepHeight * 4.65, '#555', 2);
  ctx.fillStyle = '#9C27B0';
  ctx.font = 'bold 9px Arial';
  ctx.fillText('Differentiation', width * 0.62, stepHeight * 4.48);
  
  // Step 5: Mature sperm (n) - four cells
  for(let i = 0; i < 4; i++) {
    const spermX = width * (0.25 + i * 0.17);
    
    // Sperm head
    ctx.fillStyle = '#1565C0';
    ctx.strokeStyle = '#0D47A1';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.ellipse(spermX, stepHeight * 5, width * 0.015, width * 0.025, 0, 0, Math.PI * 2);
    ctx.fill();
    ctx.stroke();
    
    // Acrosome
    ctx.fillStyle = '#FFD700';
    ctx.beginPath();
    ctx.arc(spermX, stepHeight * 5 - width * 0.02, width * 0.01, 0, Math.PI);
    ctx.fill();
    
    // Midpiece
    ctx.fillStyle = '#42A5F5';
    ctx.fillRect(spermX - width * 0.008, stepHeight * 5.02, width * 0.016, height * 0.02);
    
    // Tail
    ctx.strokeStyle = '#64B5F6';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(spermX, stepHeight * 5.04);
    for(let j = 0; j < 10; j++) {
      const tailY = stepHeight * (5.04 + j * 0.015);
      const tailX = spermX + Math.sin(j * 0.5) * width * 0.01;
      ctx.lineTo(tailX, tailY);
    }
    ctx.stroke();
  }
  
  ctx.fillStyle = '#2C3E50';
  ctx.font = 'bold 11px Arial';
  ctx.textAlign = 'center';
  ctx.fillText('Mature Sperm (4)', width * 0.5, stepHeight * 5.6);
  ctx.font = '10px Arial';
  ctx.fillText('(n = functional)', width * 0.5, stepHeight * 5.65);
  
  ctx.restore();
}

static drawOogenesis(ctx, x, y, width, height) {
  ctx.save();
  ctx.translate(x, y);
  
  // Title
  ctx.fillStyle = '#FF69B4';
  ctx.font = 'bold 16px Arial';
  ctx.textAlign = 'center';
  ctx.fillText('Oogenesis', width * 0.5, height * 0.05);
  ctx.font = '11px Arial';
  ctx.fillText('(Female gamete production)', width * 0.5, height * 0.08);
  
  const stepHeight = height / 7;
  
  // Step 1: Oogonium (2n)
  ctx.fillStyle = '#FFE4E1';
  ctx.strokeStyle = '#FF1493';
  ctx.lineWidth = 3;
  ctx.beginPath();
  ctx.arc(width * 0.5, stepHeight * 1, width * 0.12, 0, Math.PI * 2);
  ctx.fill();
  ctx.stroke();
  
  ctx.fillStyle = '#2C3E50';
  ctx.font = 'bold 11px Arial';
  ctx.textAlign = 'center';
  ctx.fillText('Oogonium', width * 0.5, stepHeight * 1.2);
  ctx.font = '10px Arial';
  ctx.fillText('(2n = diploid)', width * 0.5, stepHeight * 1.25);
  
  // Arrow
  this.drawArrow(ctx, width * 0.5, stepHeight * 1.3, width * 0.5, stepHeight * 1.65, '#555', 2);
  ctx.fillStyle = '#2C3E50';
  ctx.font = '9px Arial';
  ctx.fillText('Mitosis', width * 0.6, stepHeight * 1.48);
  
  // Step 2: Primary oocyte (2n)
  ctx.fillStyle = '#FFC0CB';
  ctx.strokeStyle = '#FF1493';
  ctx.lineWidth = 3;
  ctx.beginPath();
  ctx.arc(width * 0.5, stepHeight * 2, width * 0.13, 0, Math.PI * 2);
  ctx.fill();
  ctx.stroke();
  
  ctx.fillStyle = '#2C3E50';
  ctx.font = 'bold 11px Arial';
  ctx.textAlign = 'center';
  ctx.fillText('Primary Oocyte', width * 0.5, stepHeight * 2.2);
  ctx.font = '10px Arial';
  ctx.fillText('(2n)', width * 0.5, stepHeight * 2.25);
  ctx.font = '9px Arial';
  ctx.fillText('(arrested in prophase I)', width * 0.5, stepHeight * 2.29);
  
  // Arrow
  this.drawArrow(ctx, width * 0.5, stepHeight * 2.35, width * 0.5, stepHeight * 2.65, '#555', 2);
  ctx.fillStyle = '#E74C3C';
  ctx.font = 'bold 9px Arial';
  ctx.fillText('Meiosis I', width * 0.6, stepHeight * 2.5);
  ctx.fillStyle = '#2C3E50';
  ctx.font = '9px Arial';
  ctx.fillText('(at puberty)', width * 0.6, stepHeight * 2.54);
  
  // Step 3: Secondary oocyte (n) + 1st polar body
  // Secondary oocyte (large)
  ctx.fillStyle = '#FFB6C1';
  ctx.strokeStyle = '#FF1493';
  ctx.lineWidth = 3;
  ctx.beginPath();
  ctx.arc(width * 0.45, stepHeight * 3, width * 0.12, 0, Math.PI * 2);
  ctx.fill();
  ctx.stroke();
  
  // First polar body (small, degenerating)
  ctx.fillStyle = '#DDA0DD';
  ctx.strokeStyle = '#9370DB';
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.arc(width * 0.62, stepHeight * 2.95, width * 0.04, 0, Math.PI * 2);
  ctx.fill();
  ctx.stroke();
  
  // Degeneration mark
  ctx.strokeStyle = '#999';
  ctx.lineWidth = 2;
  ctx.setLineDash([2, 2]);
  ctx.beginPath();
  ctx.moveTo(width * 0.6, stepHeight * 2.93);
  ctx.lineTo(width * 0.64, stepHeight * 2.97);
  ctx.moveTo(width * 0.64, stepHeight * 2.93);
  ctx.lineTo(width * 0.6, stepHeight * 2.97);
  ctx.stroke();
  ctx.setLineDash([]);
  
  ctx.fillStyle = '#2C3E50';
  ctx.font = 'bold 11px Arial';
  ctx.textAlign = 'center';
  ctx.fillText('Secondary Oocyte', width * 0.45, stepHeight * 3.2);
  ctx.font = '10px Arial';
  ctx.fillText('(n = haploid)', width * 0.45, stepHeight * 3.25);
  
  ctx.font = '9px Arial';
  ctx.fillText('1st Polar', width * 0.7, stepHeight * 2.95);
  ctx.fillText('Body', width * 0.7, stepHeight * 2.99);
  ctx.fillText('(degenerates)', width * 0.7, stepHeight * 3.03);
  
  // Arrow
  this.drawArrow(ctx, width * 0.45, stepHeight * 3.3, width * 0.45, stepHeight * 3.65, '#555', 2);
  ctx.fillStyle = '#E74C3C';
  ctx.font = 'bold 9px Arial';
  ctx.fillText('Meiosis II', width * 0.58, stepHeight * 3.48);
  ctx.fillStyle = '#2C3E50';
  ctx.font = '9px Arial';
  ctx.fillText('(if fertilized)', width * 0.58, stepHeight * 3.52);
  
  // Step 4: Ovum (mature egg) + 2nd polar body
  // Mature ovum (large)
  ctx.fillStyle = '#FF69B4';
  ctx.strokeStyle = '#C71585';
  ctx.lineWidth = 3;
  ctx.beginPath();
  ctx.arc(width * 0.4, stepHeight * 4.5, width * 0.13, 0, Math.PI * 2);
  ctx.fill();
  ctx.stroke();
  
  // Zona pellucida
  ctx.strokeStyle = '#FFC0CB';
  ctx.lineWidth = 4;
  ctx.setLineDash([3, 3]);
  ctx.beginPath();
  ctx.arc(width * 0.4, stepHeight * 4.5, width * 0.16, 0, Math.PI * 2);
  ctx.stroke();
  ctx.setLineDash([]);
  
  // Second polar body
  ctx.fillStyle = '#DDA0DD';
  ctx.strokeStyle = '#9370DB';
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.arc(width * 0.58, stepHeight * 4.45, width * 0.035, 0, Math.PI * 2);
  ctx.fill();
  ctx.stroke();
  
  // Degeneration mark
  ctx.strokeStyle = '#999';
  ctx.lineWidth = 2;
  ctx.setLineDash([2, 2]);
  ctx.beginPath();
  ctx.moveTo(width * 0.57, stepHeight * 4.44);
  ctx.lineTo(width * 0.59, stepHeight * 4.46);
  ctx.moveTo(width * 0.59, stepHeight * 4.44);
  ctx.lineTo(width * 0.57, stepHeight * 4.46);
  ctx.stroke();
  ctx.setLineDash([]);
  
  ctx.fillStyle = '#2C3E50';
  ctx.font = 'bold 11px Arial';
  ctx.textAlign = 'center';
  ctx.fillText('Mature Ovum (1)', width * 0.4, stepHeight * 5.1);
  ctx.font = '10px Arial';
  ctx.fillText('(n = functional)', width * 0.4, stepHeight * 5.15);
  
  ctx.font = '9px Arial';
  ctx.fillText('2nd Polar', width * 0.7, stepHeight * 4.45);
  ctx.fillText('Body', width * 0.7, stepHeight * 4.49);
  ctx.fillText('(degenerates)', width * 0.7, stepHeight * 4.53);
  
  // Summary box
  ctx.fillStyle = 'rgba(255, 105, 180, 0.1)';
  ctx.fillRect(width * 0.1, stepHeight * 5.5, width * 0.8, stepHeight * 0.6);
  ctx.strokeStyle = '#FF69B4';
  ctx.lineWidth = 2;
  ctx.strokeRect(width * 0.1, stepHeight * 5.5, width * 0.8, stepHeight * 0.6);
  
  ctx.fillStyle = '#2C3E50';
  ctx.font = 'bold 10px Arial';
  ctx.textAlign = 'left';
  ctx.fillText('Key Differences:', width * 0.12, stepHeight * 5.65);
  ctx.font = '9px Arial';
  ctx.fillText('• Unequal division (1 large egg)', width * 0.12, stepHeight * 5.75);
  ctx.fillText('• 3 polar bodies degenerate', width * 0.12, stepHeight * 5.82);
  ctx.fillText('• Arrests at prophase I & metaphase II', width * 0.12, stepHeight * 5.89);
  ctx.fillText('• 1 functional gamete per cycle', width * 0.12, stepHeight * 5.96);
  
  ctx.restore();
}

static drawPlacenta(ctx, x, y, width, height) {
  ctx.save();
  ctx.translate(x, y);
  
  // Uterine wall (top)
  ctx.fillStyle = '#FFB6C1';
  ctx.fillRect(0, 0, width, height * 0.15);
  ctx.strokeStyle = '#FF69B4';
  ctx.lineWidth = 3;
  ctx.strokeRect(0, 0, width, height * 0.15);
  
  ctx.fillStyle = '#2C3E50';
  ctx.font = 'bold 12px Arial';
  ctx.textAlign = 'center';
  ctx.fillText('Maternal Uterine Wall', width * 0.5, height * 0.08);
  
  // Placenta (main structure)
  ctx.fillStyle = '#CD5C5C';
  ctx.strokeStyle = '#8B0000';
  ctx.lineWidth = 3;
  ctx.beginPath();
  ctx.ellipse(width * 0.5, height * 0.35, width * 0.35, height * 0.2, 0, 0, Math.PI * 2);
  ctx.fill();
  ctx.stroke();
  
  // Maternal blood spaces (intervillous spaces)
  ctx.fillStyle = '#DC143C';
  for(let i = 0; i < 20; i++) {
    const bsX = width * (0.2 + Math.random() * 0.6);
    const bsY = height * (0.2 + Math.random() * 0.3);
    ctx.beginPath();
    ctx.arc(bsX, bsY, width * 0.015, 0, Math.PI * 2);
    ctx.fill();
  }
  
  // Chorionic villi (finger-like projections)
  ctx.strokeStyle = '#8B4513';
  ctx.lineWidth = 3;
  for(let i = 0; i < 12; i++) {
    const villiX = width * (0.25 + i * 0.045);
    const villiY = height * 0.15;
    
    // Villus stem
    ctx.fillStyle = '#DEB887';
    ctx.beginPath();
    ctx.moveTo(villiX, villiY);
    ctx.lineTo(villiX - width * 0.01, villiY + height * 0.08);
    ctx.lineTo(villiX + width * 0.01, villiY + height * 0.08);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();
    
    // Fetal capillaries inside villi
    ctx.strokeStyle = '#FF69B4';
    ctx.lineWidth = 1.5;
    ctx.beginPath();
    ctx.moveTo(villiX, villiY + height * 0.02);
    ctx.lineTo(villiX, villiY + height * 0.07);
    ctx.stroke();
  }
  
  // Umbilical cord
  ctx.fillStyle = '#F5DEB3';
  ctx.strokeStyle = '#D2691E';
  ctx.lineWidth = 4;
  
  // Cord cylinder
  const cordWidth = width * 0.08;
  ctx.fillRect(width * 0.46, height * 0.52, cordWidth, height * 0.35);
  ctx.strokeRect(width * 0.46, height * 0.52, cordWidth, height * 0.35);
  
  // Umbilical arteries (2 - carrying deoxygenated blood TO placenta)
  ctx.strokeStyle = '#4169E1';
  ctx.lineWidth = 6;
  ctx.beginPath();
  ctx.moveTo(width * 0.48, height * 0.87);
  ctx.lineTo(width * 0.48, height * 0.55);
  ctx.stroke();
  
  ctx.beginPath();
  ctx.moveTo(width * 0.52, height * 0.87);
  ctx.lineTo(width * 0.52, height * 0.55);
  ctx.stroke();
  
  // Umbilical vein (1 - carrying oxygenated blood FROM placenta)
  ctx.strokeStyle = '#DC143C';
  ctx.lineWidth = 6;
  ctx.beginPath();
  ctx.moveTo(width * 0.5, height * 0.87);
  ctx.lineTo(width * 0.5, height * 0.55);
  ctx.stroke();
  
  // Wharton's jelly (protective gel)
  ctx.fillStyle = 'rgba(240, 230, 140, 0.3)';
  ctx.fillRect(width * 0.46, height * 0.52, cordWidth, height * 0.35);
  
  // Fetus (simplified)
  ctx.fillStyle = '#FFDAB9';
  ctx.strokeStyle = '#D2691E';
  ctx.lineWidth = 3;
  
  // Body
  ctx.beginPath();
  ctx.ellipse(width * 0.5, height * 0.93, width * 0.06, height * 0.04, 0, 0, Math.PI * 2);
  ctx.fill();
  ctx.stroke();
  
  // Head
  ctx.beginPath();
  ctx.arc(width * 0.5, height * 0.88, width * 0.04, 0, Math.PI * 2);
  ctx.fill();
  ctx.stroke();
  
  // Limbs (simplified)
  ctx.strokeStyle = '#D2691E';
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.moveTo(width * 0.44, height * 0.92);
  ctx.lineTo(width * 0.42, height * 0.96);
  ctx.stroke();
  ctx.beginPath();
  ctx.moveTo(width * 0.56, height * 0.92);
  ctx.lineTo(width * 0.58, height * 0.96);
  ctx.stroke();
  
  // Exchange arrows
  // Oxygen and nutrients TO fetus
  ctx.strokeStyle = '#4CAF50';
  ctx.lineWidth = 2;
  for(let i = 0; i < 3; i++) {
    this.drawArrow(
      ctx,
      width * (0.3 + i * 0.1),
      height * 0.35,
      width * (0.32 + i * 0.1),
      height * 0.45,
      '#4CAF50',
      2
    );
  }
  
  // Waste products FROM fetus
  ctx.strokeStyle = '#FF9800';
  ctx.lineWidth = 2;
  for(let i = 0; i < 3; i++) {
    this.drawArrow(
      ctx,
      width * (0.7 - i * 0.1),
      height * 0.45,
      width * (0.68 - i * 0.1),
      height * 0.35,
      '#FF9800',
      2
    );
  }
  
  // Labels
  ctx.fillStyle = '#2C3E50';
  ctx.font = 'bold 12px Arial';
  ctx.textAlign = 'center';
  ctx.fillText('PLACENTA', width * 0.5, height * 0.25);
  
  ctx.font = '10px Arial';
  ctx.textAlign = 'left';
  
  // Maternal side
  ctx.fillStyle = '#8B0000';
  ctx.fillText('Maternal Blood', width * 0.05, height * 0.3);
  ctx.fillText('(from mother)', width * 0.05, height * 0.33);
  
  // Exchange labels
  ctx.fillStyle = '#4CAF50';
  ctx.fillText('O₂, Nutrients →', width * 0.05, height * 0.42);
  
  ctx.fillStyle = '#FF9800';
  ctx.fillText('← CO₂, Wastes', width * 0.75, height * 0.42);
  
  // Umbilical cord label
  ctx.fillStyle = '#2C3E50';
  ctx.font = 'bold 11px Arial';
  ctx.textAlign = 'right';
  ctx.fillText('Umbilical Cord', width * 0.44, height * 0.7);
  
  // Blood vessel labels
  ctx.font = '9px Arial';
  ctx.fillStyle = '#DC143C';
  ctx.textAlign = 'left';
  ctx.fillText('Vein (O₂-rich)', width * 0.55, height * 0.7);
  
  ctx.fillStyle = '#4169E1';
  ctx.fillText('Arteries', width * 0.55, height * 0.75);
  ctx.fillText('(O₂-poor)', width * 0.55, height * 0.78);
  
  // Chorionic villi label
  ctx.fillStyle = '#8B4513';
  ctx.textAlign = 'right';
  ctx.fillText('Chorionic Villi', width * 0.22, height * 0.22);
  ctx.fillText('(fetal tissue)', width * 0.22, height * 0.25);
  
  // Fetus label
  ctx.fillStyle = '#2C3E50';
  ctx.font = 'bold 11px Arial';
  ctx.textAlign = 'center';
  ctx.fillText('Fetus', width * 0.5, height * 0.99);
  
  // Function box
  ctx.fillStyle = 'rgba(76, 175, 80, 0.1)';
  ctx.fillRect(width * 0.05, height * 0.55, width * 0.35, height * 0.2);
  ctx.strokeStyle = '#4CAF50';
  ctx.lineWidth = 2;
  ctx.strokeRect(width * 0.05, height * 0.55, width * 0.35, height * 0.2);
  
  ctx.fillStyle = '#2C3E50';
  ctx.font = 'bold 10px Arial';
  ctx.textAlign = 'left';
  ctx.fillText('Placental Functions:', width * 0.07, height * 0.58);
  ctx.font = '9px Arial';
  ctx.fillText('• Gas exchange (O₂/CO₂)', width * 0.07, height * 0.62);
  ctx.fillText('• Nutrient transfer', width * 0.07, height * 0.66);
  ctx.fillText('• Waste removal', width * 0.07, height * 0.7);
  ctx.fillText('• Hormone production', width * 0.07, height * 0.74);
  
  // Note box
  ctx.fillStyle = 'rgba(255, 152, 0, 0.1)';
  ctx.fillRect(width * 0.6, height * 0.55, width * 0.35, height * 0.15);
  ctx.strokeStyle = '#FF9800';
  ctx.lineWidth = 2;
  ctx.strokeRect(width * 0.6, height * 0.55, width * 0.35, height * 0.15);
  
  ctx.fillStyle = '#2C3E50';
  ctx.font = 'bold 10px Arial';
  ctx.textAlign = 'left';
  ctx.fillText('Important:', width * 0.62, height * 0.58);
  ctx.font = '9px Arial';
  ctx.fillText('• No direct blood mixing', width * 0.62, height * 0.62);
  ctx.fillText('• Barrier protects fetus', width * 0.62, height * 0.66);
  
  ctx.restore();
}

// Helper method for drawing arrows (if not already present)
static drawArrow(ctx, x1, y1, x2, y2, color, lineWidth) {
  ctx.save();
  ctx.strokeStyle = color;
  ctx.fillStyle = color;
  ctx.lineWidth = lineWidth;
  
  // Draw line
  ctx.beginPath();
  ctx.moveTo(x1, y1);
  ctx.lineTo(x2, y2);
  ctx.stroke();
  
  // Draw arrowhead
  const angle = Math.atan2(y2 - y1, x2 - x1);
  const arrowSize = lineWidth * 3;
  ctx.beginPath();
  ctx.moveTo(x2, y2);
  ctx.lineTo(
    x2 - arrowSize * Math.cos(angle - Math.PI / 6),
    y2 - arrowSize * Math.sin(angle - Math.PI / 6)
  );
  ctx.lineTo(
    x2 - arrowSize * Math.cos(angle + Math.PI / 6),
    y2 - arrowSize * Math.sin(angle + Math.PI / 6)
  );
  ctx.closePath();
  ctx.fill();
  
  ctx.restore();
}

static drawDNAFingerprint(ctx, x, y, width, height, showComparison = true) {
  ctx.save();
  ctx.translate(x, y);

  // Draw gel electrophoresis setup
  const gelX = 50;
  const gelY = 80;
  const gelWidth = width - 100;
  const gelHeight = height - 150;

  // Gel background
  ctx.fillStyle = '#E8EAF6';
  ctx.fillRect(gelX, gelY, gelWidth, gelHeight);
  ctx.strokeStyle = '#3F51B5';
  ctx.lineWidth = 2;
  ctx.strokeRect(gelX, gelY, gelWidth, gelHeight);

  // Negative electrode (top)
  ctx.fillStyle = '#E74C3C';
  ctx.fillRect(gelX - 10, gelY - 20, gelWidth + 20, 15);
  ctx.fillStyle = '#FFFFFF';
  ctx.font = 'bold 12px Arial';
  ctx.textAlign = 'center';
  ctx.fillText('(-) Negative Electrode', gelX + gelWidth / 2, gelY - 8);

  // Positive electrode (bottom)
  ctx.fillStyle = '#2ECC71';
  ctx.fillRect(gelX - 10, gelY + gelHeight + 5, gelWidth + 20, 15);
  ctx.fillStyle = '#FFFFFF';
  ctx.fillText('(+) Positive Electrode', gelX + gelWidth / 2, gelY + gelHeight + 17);

  // DNA samples - define band patterns
  const samples = showComparison ? [
    { label: 'Suspect 1', bands: [120, 180, 250, 320, 380], color: '#E74C3C' },
    { label: 'Suspect 2', bands: [100, 160, 220, 300, 360], color: '#9B59B6' },
    { label: 'Crime Scene', bands: [120, 180, 250, 320, 380], color: '#F39C12' },
    { label: 'Victim', bands: [110, 170, 240, 310, 370], color: '#3498DB' },
    { label: 'DNA Ladder', bands: [100, 140, 180, 220, 260, 300, 340, 380], color: '#7F8C8D' }
  ] : [
    { label: 'Sample 1', bands: [120, 180, 250, 320, 380], color: '#3498DB' },
    { label: 'Sample 2', bands: [110, 170, 240, 310, 370], color: '#2ECC71' },
    { label: 'Sample 3', bands: [100, 160, 220, 300, 360], color: '#9B59B6' },
    { label: 'DNA Ladder', bands: [100, 140, 180, 220, 260, 300, 340, 380], color: '#7F8C8D' }
  ];

  const laneWidth = gelWidth / (samples.length + 1);

  samples.forEach((sample, index) => {
    const laneX = gelX + (index + 1) * laneWidth;

    // Draw well at top
    ctx.fillStyle = '#5C6BC0';
    ctx.fillRect(laneX - 15, gelY + 10, 30, 20);
    ctx.strokeStyle = '#283593';
    ctx.lineWidth = 1;
    ctx.strokeRect(laneX - 15, gelY + 10, 30, 20);

    // Sample label above gel
    ctx.fillStyle = sample.color;
    ctx.font = 'bold 10px Arial';
    ctx.textAlign = 'center';
    ctx.save();
    ctx.translate(laneX, gelY - 25);
    ctx.rotate(-Math.PI / 6);
    ctx.fillText(sample.label, 0, 0);
    ctx.restore();

    // Draw DNA bands
    sample.bands.forEach(position => {
      const bandY = gelY + 40 + (position / 400) * (gelHeight - 60);
      const bandHeight = 8;

      // Band glow effect
      ctx.fillStyle = sample.color + '40';
      ctx.fillRect(laneX - 20, bandY - 2, 40, bandHeight + 4);

      // Band
      ctx.fillStyle = sample.color;
      ctx.fillRect(laneX - 18, bandY, 36, bandHeight);
      ctx.strokeStyle = sample.color;
      ctx.lineWidth = 1;
      ctx.strokeRect(laneX - 18, bandY, 36, bandHeight);
    });
  });

  // DNA ladder size markers (right side)
  ctx.fillStyle = '#2C3E50';
  ctx.font = '9px Arial';
  ctx.textAlign = 'left';
  const sizes = ['500 bp', '400 bp', '300 bp', '200 bp', '100 bp'];
  sizes.forEach((size, i) => {
    const markerY = gelY + 40 + (i * (gelHeight - 60) / (sizes.length - 1));
    ctx.fillText(size, gelX + gelWidth + 10, markerY + 4);
    
    // Marker line
    ctx.strokeStyle = '#BDC3C7';
    ctx.lineWidth = 1;
    ctx.setLineDash([3, 3]);
    ctx.beginPath();
    ctx.moveTo(gelX + gelWidth + 5, markerY);
    ctx.lineTo(gelX + gelWidth + 8, markerY);
    ctx.stroke();
    ctx.setLineDash([]);
  });

  // Match indicator (if comparison mode)
  if (showComparison) {
    // Highlight matching samples
    ctx.strokeStyle = '#27AE60';
    ctx.lineWidth = 3;
    ctx.setLineDash([10, 5]);
    
    // Box around Suspect 1
    ctx.strokeRect(gelX + laneWidth - 25, gelY + 5, 50, gelHeight);
    
    // Box around Crime Scene
    ctx.strokeRect(gelX + 3 * laneWidth - 25, gelY + 5, 50, gelHeight);
    ctx.setLineDash([]);

    // Match label
    ctx.fillStyle = '#27AE60';
    ctx.font = 'bold 14px Arial';
    ctx.textAlign = 'center';
    ctx.fillText('✓ MATCH', gelX + gelWidth / 2, gelY + gelHeight + 50);
  }

  // Direction arrow
  ctx.strokeStyle = '#34495E';
  ctx.fillStyle = '#34495E';
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.moveTo(20, gelY + 50);
  ctx.lineTo(20, gelY + gelHeight - 50);
  ctx.stroke();
  
  // Arrowhead
  ctx.beginPath();
  ctx.moveTo(20, gelY + gelHeight - 50);
  ctx.lineTo(15, gelY + gelHeight - 65);
  ctx.lineTo(25, gelY + gelHeight - 65);
  ctx.closePath();
  ctx.fill();

  ctx.fillStyle = '#34495E';
  ctx.font = 'bold 10px Arial';
  ctx.textAlign = 'center';
  ctx.save();
  ctx.translate(15, gelY + gelHeight / 2);
  ctx.rotate(-Math.PI / 2);
  ctx.fillText('DNA Migration', 0, 0);
  ctx.restore();

  ctx.restore();
}

static drawSTRAnalysis(ctx, x, y, width, height) {
  ctx.save();
  ctx.translate(x, y);

  const centerX = width / 2;

  // Title explanation
  ctx.fillStyle = '#2C3E50';
  ctx.font = 'bold 14px Arial';
  ctx.textAlign = 'center';
  ctx.fillText('Short Tandem Repeat (STR) Analysis', centerX, 20);
  
  ctx.font = '11px Arial';
  ctx.fillStyle = '#7F8C8D';
  ctx.fillText('Analyzes specific DNA regions where short sequences repeat', centerX, 40);

  // Draw DNA strand with STR regions
  const dnaY = 100;
  const dnaWidth = width - 100;
  const dnaHeight = 40;

  // DNA double helix background
  ctx.fillStyle = '#E3F2FD';
  ctx.fillRect(50, dnaY, dnaWidth, dnaHeight);
  ctx.strokeStyle = '#1976D2';
  ctx.lineWidth = 2;
  ctx.strokeRect(50, dnaY, dnaWidth, dnaHeight);

  // DNA helix lines
  for (let i = 0; i < dnaWidth; i += 20) {
    ctx.strokeStyle = '#64B5F6';
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(50 + i, dnaY + 10);
    ctx.lineTo(50 + i + 10, dnaY + 30);
    ctx.stroke();
  }

  // STR regions (highlighted)
  const strRegions = [
    { start: 120, width: 80, repeats: 8, label: 'STR Locus 1' },
    { start: 280, width: 100, repeats: 12, label: 'STR Locus 2' },
    { start: 480, width: 70, repeats: 6, label: 'STR Locus 3' }
  ];

  strRegions.forEach((region, index) => {
    const regionY = dnaY;
    
    // Highlight STR region
    ctx.fillStyle = '#FFF9C4';
    ctx.fillRect(region.start, regionY, region.width, dnaHeight);
    ctx.strokeStyle = '#F57F17';
    ctx.lineWidth = 2;
    ctx.strokeRect(region.start, regionY, region.width, dnaHeight);

    // Draw repeat units
    const unitWidth = region.width / region.repeats;
    for (let i = 0; i < region.repeats; i++) {
      ctx.strokeStyle = '#FF6F00';
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.moveTo(region.start + i * unitWidth, regionY);
      ctx.lineTo(region.start + i * unitWidth, regionY + dnaHeight);
      ctx.stroke();
    }

    // Label
    ctx.fillStyle = '#F57F17';
    ctx.font = 'bold 10px Arial';
    ctx.textAlign = 'center';
    ctx.fillText(region.label, region.start + region.width / 2, regionY - 10);
    ctx.fillText(`${region.repeats} repeats`, region.start + region.width / 2, regionY + dnaHeight + 15);
  });

  // Allele comparison table
  const tableY = 200;
  const tableHeight = height - tableY - 60;
  
  ctx.fillStyle = '#2C3E50';
  ctx.font = 'bold 13px Arial';
  ctx.textAlign = 'center';
  ctx.fillText('STR Profile Comparison', centerX, tableY - 10);

  // Table
  const colWidth = (width - 100) / 4;
  const rowHeight = 35;

  // Header
  ctx.fillStyle = '#34495E';
  ctx.fillRect(50, tableY, colWidth, rowHeight);
  ctx.fillRect(50 + colWidth, tableY, colWidth, rowHeight);
  ctx.fillRect(50 + 2 * colWidth, tableY, colWidth, rowHeight);
  ctx.fillRect(50 + 3 * colWidth, tableY, colWidth, rowHeight);

  ctx.fillStyle = '#FFFFFF';
  ctx.font = 'bold 11px Arial';
  ctx.textAlign = 'center';
  ctx.fillText('Sample', 50 + colWidth / 2, tableY + 22);
  ctx.fillText('Locus 1', 50 + colWidth * 1.5, tableY + 22);
  ctx.fillText('Locus 2', 50 + colWidth * 2.5, tableY + 22);
  ctx.fillText('Locus 3', 50 + colWidth * 3.5, tableY + 22);

  // Data rows
  const samples = [
    { name: 'Suspect 1', alleles: ['8, 10', '12, 14', '6, 8'], match: true },
    { name: 'Suspect 2', alleles: ['7, 9', '11, 13', '7, 9'], match: false },
    { name: 'Crime Scene', alleles: ['8, 10', '12, 14', '6, 8'], match: true }
  ];

  samples.forEach((sample, index) => {
    const rowY = tableY + rowHeight + index * rowHeight;
    
    // Row background
    ctx.fillStyle = sample.match ? '#E8F5E9' : '#FFFFFF';
    ctx.fillRect(50, rowY, colWidth * 4, rowHeight);
    
    // Row border
    ctx.strokeStyle = '#BDC3C7';
    ctx.lineWidth = 1;
    ctx.strokeRect(50, rowY, colWidth * 4, rowHeight);

    // Sample name
    ctx.fillStyle = sample.match ? '#27AE60' : '#2C3E50';
    ctx.font = sample.match ? 'bold 11px Arial' : '11px Arial';
    ctx.textAlign = 'center';
    ctx.fillText(sample.name, 50 + colWidth / 2, rowY + 22);

    // Alleles
    ctx.fillStyle = '#2C3E50';
    ctx.font = '11px Arial';
    sample.alleles.forEach((allele, i) => {
      ctx.fillText(allele, 50 + colWidth * (i + 1.5), rowY + 22);
    });

    // Match indicator
    if (sample.match && index !== 2) {
      ctx.fillStyle = '#27AE60';
      ctx.font = 'bold 16px Arial';
      ctx.fillText('✓', 50 + colWidth * 4 + 20, rowY + 24);
    }
  });

  // Vertical lines in table
  for (let i = 1; i < 4; i++) {
    ctx.strokeStyle = '#BDC3C7';
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(50 + i * colWidth, tableY);
    ctx.lineTo(50 + i * colWidth, tableY + rowHeight * 4);
    ctx.stroke();
  }

  // Probability calculation
  ctx.fillStyle = '#E3F2FD';
  ctx.fillRect(50, height - 50, width - 100, 40);
  ctx.strokeStyle = '#1976D2';
  ctx.lineWidth = 2;
  ctx.strokeRect(50, height - 50, width - 100, 40);

  ctx.fillStyle = '#1976D2';
  ctx.font = 'bold 12px Arial';
  ctx.textAlign = 'center';
  ctx.fillText('Match Probability: 1 in 1 trillion', centerX, height - 28);
  ctx.font = '10px Arial';
  ctx.fillText('(Based on 13 CODIS STR loci analysis)', centerX, height - 14);

  ctx.restore();
}

static drawForensicDNAComparison(ctx, x, y, width, height) {
  ctx.save();
  ctx.translate(x, y);

  // Process flow diagram
  const stepHeight = 100;
  const stepWidth = width / 2 - 60;
  const startY = 50;

  const steps = [
    {
      title: '1. Evidence Collection',
      icon: '🔬',
      details: ['Blood', 'Hair', 'Saliva', 'Skin cells'],
      color: '#E74C3C'
    },
    {
      title: '2. DNA Extraction',
      icon: '🧪',
      details: ['Cell lysis', 'Protein removal', 'DNA purification'],
      color: '#3498DB'
    },
    {
      title: '3. PCR Amplification',
      icon: '⚡',
      details: ['Amplify STR regions', 'Create millions of copies'],
      color: '#9B59B6'
    },
    {
      title: '4. Gel Electrophoresis',
      icon: '📊',
      details: ['Separate DNA fragments', 'Create band pattern'],
      color: '#2ECC71'
    },
    {
      title: '5. Analysis',
      icon: '🔍',
      details: ['Compare profiles', 'Calculate probability'],
      color: '#F39C12'
    },
    {
      title: '6. Match/No Match',
      icon: '✓/✗',
      details: ['Report findings', 'Court testimony'],
      color: '#E67E22'
    }
  ];

  steps.forEach((step, index) => {
    const row = Math.floor(index / 2);
    const col = index % 2;
    const stepX = 30 + col * (stepWidth + 120);
    const stepY = startY + row * (stepHeight + 40);

    // Step box
    ctx.fillStyle = step.color + '20';
    ctx.fillRect(stepX, stepY, stepWidth, stepHeight);
    ctx.strokeStyle = step.color;
    ctx.lineWidth = 3;
    ctx.strokeRect(stepX, stepY, stepWidth, stepHeight);

    // Icon
    ctx.font = '32px Arial';
    ctx.fillText(step.icon, stepX + 15, stepY + 40);

    // Title
    ctx.fillStyle = step.color;
    ctx.font = 'bold 13px Arial';
    ctx.textAlign = 'left';
    ctx.fillText(step.title, stepX + 60, stepY + 25);

    // Details
    ctx.fillStyle = '#2C3E50';
    ctx.font = '10px Arial';
    step.details.forEach((detail, i) => {
      ctx.fillText('• ' + detail, stepX + 60, stepY + 45 + i * 15);
    });

    // Arrow to next step
    if (index < steps.length - 1) {
      ctx.strokeStyle = '#7F8C8D';
      ctx.fillStyle = '#7F8C8D';
      ctx.lineWidth = 3;

      if (col === 0) {
        // Arrow to the right
        ctx.beginPath();
        ctx.moveTo(stepX + stepWidth, stepY + stepHeight / 2);
        ctx.lineTo(stepX + stepWidth + 100, stepY + stepHeight / 2);
        ctx.stroke();
        
        // Arrowhead
        ctx.beginPath();
        ctx.moveTo(stepX + stepWidth + 100, stepY + stepHeight / 2);
        ctx.lineTo(stepX + stepWidth + 90, stepY + stepHeight / 2 - 6);
        ctx.lineTo(stepX + stepWidth + 90, stepY + stepHeight / 2 + 6);
        ctx.closePath();
        ctx.fill();
      } else {
        // Arrow down to next row
        ctx.beginPath();
        ctx.moveTo(stepX + stepWidth / 2, stepY + stepHeight);
        ctx.lineTo(stepX + stepWidth / 2, stepY + stepHeight + 20);
        ctx.stroke();
        
        // Arrowhead
        ctx.beginPath();
        ctx.moveTo(stepX + stepWidth / 2, stepY + stepHeight + 20);
        ctx.lineTo(stepX + stepWidth / 2 - 6, stepY + stepHeight + 10);
        ctx.lineTo(stepX + stepWidth / 2 + 6, stepY + stepHeight + 10);
        ctx.closePath();
        ctx.fill();
      }
    }
  });

  // CODIS Database info
  const codisY = height - 90;
  ctx.fillStyle = '#2C3E50';
  ctx.font = 'bold 14px Arial';
  ctx.textAlign = 'center';
  ctx.fillText('CODIS Database', width / 2, codisY);

  ctx.fillStyle = '#ECF0F1';
  ctx.fillRect(50, codisY + 10, width - 100, 70);
  ctx.strokeStyle = '#34495E';
  ctx.lineWidth = 2;
  ctx.strokeRect(50, codisY + 10, width - 100, 70);

  ctx.fillStyle = '#2C3E50';
  ctx.font = '11px Arial';
  ctx.textAlign = 'left';
  const codisInfo = [
    'CODIS = Combined DNA Index System (FBI)',
    '• 13-20 core STR loci analyzed',
    '• National database of DNA profiles',
    '• Can link crimes and identify suspects'
  ];

  codisInfo.forEach((info, i) => {
    ctx.fillText(info, 60, codisY + 32 + i * 15);
  });

  ctx.restore();
}

static drawGelElectrophoresisForensic(ctx, x, y, width, height, showSamples = true) {
  ctx.save();
  ctx.translate(x, y);

  // Draw electrophoresis apparatus
  const apparatusWidth = width * 0.7;
  const apparatusHeight = height * 0.6;
  const apparatusX = (width - apparatusWidth) / 2;
  const apparatusY = 100;

  // Buffer chamber
  ctx.fillStyle = '#E3F2FD';
  ctx.fillRect(apparatusX - 20, apparatusY - 30, apparatusWidth + 40, apparatusHeight + 60);
  ctx.strokeStyle = '#1976D2';
  ctx.lineWidth = 3;
  ctx.strokeRect(apparatusX - 20, apparatusY - 30, apparatusWidth + 40, apparatusHeight + 60);

  // Gel matrix
  ctx.fillStyle = '#F5F5F5';
  ctx.fillRect(apparatusX, apparatusY, apparatusWidth, apparatusHeight);
  ctx.strokeStyle = '#9E9E9E';
  ctx.lineWidth = 2;
  ctx.strokeRect(apparatusX, apparatusY, apparatusWidth, apparatusHeight);

  // Grid pattern on gel
  ctx.strokeStyle = '#E0E0E0';
  ctx.lineWidth = 0.5;
  for (let i = 0; i < apparatusWidth; i += 20) {
    ctx.beginPath();
    ctx.moveTo(apparatusX + i, apparatusY);
    ctx.lineTo(apparatusX + i, apparatusY + apparatusHeight);
    ctx.stroke();
  }
  for (let i = 0; i < apparatusHeight; i += 20) {
    ctx.beginPath();
    ctx.moveTo(apparatusX, apparatusY + i);
    ctx.lineTo(apparatusX + apparatusWidth, apparatusY + i);
    ctx.stroke();
  }

  // Electrodes
  // Negative (cathode) - top
  ctx.fillStyle = '#000000';
  ctx.fillRect(apparatusX - 20, apparatusY - 40, apparatusWidth + 40, 10);
  ctx.fillStyle = '#E74C3C';
  ctx.font = 'bold 14px Arial';
  ctx.textAlign = 'center';
  ctx.fillText('(-) CATHODE', apparatusX + apparatusWidth / 2, apparatusY - 45);

  // Positive (anode) - bottom
  ctx.fillStyle = '#000000';
  ctx.fillRect(apparatusX - 20, apparatusY + apparatusHeight + 30, apparatusWidth + 40, 10);
  ctx.fillStyle = '#2ECC71';
  ctx.font = 'bold 14px Arial';
  ctx.fillText('(+) ANODE', apparatusX + apparatusWidth / 2, apparatusY + apparatusHeight + 55);

  // Power supply connection
  ctx.strokeStyle = '#E74C3C';
  ctx.lineWidth = 4;
  ctx.beginPath();
  ctx.moveTo(apparatusX - 30, apparatusY - 35);
  ctx.lineTo(apparatusX - 60, apparatusY - 60);
  ctx.stroke();

  ctx.strokeStyle = '#2ECC71';
  ctx.beginPath();
  ctx.moveTo(apparatusX - 30, apparatusY + apparatusHeight + 35);
  ctx.lineTo(apparatusX - 60, apparatusY + apparatusHeight + 60);
  ctx.stroke();

  // Power supply box
  ctx.fillStyle = '#34495E';
  ctx.fillRect(apparatusX - 120, apparatusY + apparatusHeight / 2 - 40, 50, 80);
  ctx.strokeStyle = '#2C3E50';
  ctx.lineWidth = 2;
  ctx.strokeRect(apparatusX - 120, apparatusY + apparatusHeight / 2 - 40, 50, 80);

  ctx.fillStyle = '#E74C3C';
  ctx.fillRect(apparatusX - 110, apparatusY + apparatusHeight / 2 - 25, 30, 10);
  ctx.fillStyle = '#2ECC71';
  ctx.fillRect(apparatusX - 110, apparatusY + apparatusHeight / 2 + 15, 30, 10);

  ctx.fillStyle = '#FFFFFF';
  ctx.font = 'bold 10px Arial';
  ctx.textAlign = 'center';
  ctx.fillText('POWER', apparatusX - 95, apparatusY + apparatusHeight / 2);

  if (showSamples) {
    // Sample wells and migration
    const samples = [
      { label: 'Evidence', color: '#F39C12', sizes: [50, 100, 150, 200] },
      { label: 'Suspect A', color: '#E74C3C', sizes: [50, 100, 150, 200] },
      { label: 'Suspect B', color: '#9B59B6', sizes: [60, 110, 180, 250] },
      { label: 'Victim', color: '#3498DB', sizes: [55, 105, 160, 210] },
      { label: 'Ladder', color: '#7F8C8D', sizes: [50, 100, 150, 200, 250, 300] }
    ];

    const laneWidth = apparatusWidth / (samples.length + 1);

    samples.forEach((sample, index) => {
      const laneX = apparatusX + (index + 1) * laneWidth;

      // Well
      ctx.fillStyle = '#5C6BC0';
      ctx.fillRect(laneX - 12, apparatusY + 15, 24, 15);
      ctx.strokeStyle = '#283593';
      ctx.lineWidth = 1;
      ctx.strokeRect(laneX - 12, apparatusY + 15, 24, 15);

      // Sample label
      ctx.fillStyle = sample.color;
      ctx.font = 'bold 9px Arial';
      ctx.textAlign = 'center';
      ctx.save();
      ctx.translate(laneX, apparatusY - 5);
      ctx.rotate(-Math.PI / 4);
      ctx.fillText(sample.label, 0, 0);
      ctx.restore();

      // DNA bands (migrated)
      sample.sizes.forEach(size => {
        // Calculate position based on size (smaller = further)
        const migrationDistance = (size / 300) * (apparatusHeight - 80);
        const bandY = apparatusY + 50 + migrationDistance;

        // Band with glow
        ctx.fillStyle = sample.color + '40';
        ctx.fillRect(laneX - 16, bandY - 2, 32, 8);

        ctx.fillStyle = sample.color;
        ctx.fillRect(laneX - 14, bandY, 28, 6);
      });
    });

    // Size markers (right side)
    ctx.fillStyle = '#2C3E50';
    ctx.font = '8px Arial';
    ctx.textAlign = 'left';
    const markers = ['50 bp', '100 bp', '150 bp', '200 bp', '250 bp', '300 bp'];
    markers.forEach((marker, i) => {
      const markerSize = parseInt(marker);
      const migrationDistance = (markerSize / 300) * (apparatusHeight - 80);
      const markerY = apparatusY + 50 + migrationDistance;
      
      ctx.fillText(marker, apparatusX + apparatusWidth + 10, markerY + 3);
      
      ctx.strokeStyle = '#BDC3C7';
      ctx.lineWidth = 0.5;
      ctx.setLineDash([2, 2]);
      ctx.beginPath();
      ctx.moveTo(apparatusX + apparatusWidth, markerY);
      ctx.lineTo(apparatusX + apparatusWidth + 8, markerY);
      ctx.stroke();
      ctx.setLineDash([]);
    });
  }

  // DNA migration direction arrow
  ctx.strokeStyle = '#E74C3C';
  ctx.fillStyle = '#E74C3C';
  ctx.lineWidth = 3;
  ctx.beginPath();
  ctx.moveTo(apparatusX + apparatusWidth + 60, apparatusY + 50);
  ctx.lineTo(apparatusX + apparatusWidth + 60, apparatusY + apparatusHeight - 50);
  ctx.stroke();

  // Arrowhead
  ctx.beginPath();
  ctx.moveTo(apparatusX + apparatusWidth + 60, apparatusY + apparatusHeight - 50);
  ctx.lineTo(apparatusX + apparatusWidth + 54, apparatusY + apparatusHeight - 65);
  ctx.lineTo(apparatusX + apparatusWidth + 66, apparatusY + apparatusHeight - 65);
  ctx.closePath();
  ctx.fill();

  ctx.fillStyle = '#E74C3C';
  ctx.font = 'bold 10px Arial';
  ctx.textAlign = 'center';
  ctx.save();
  ctx.translate(apparatusX + apparatusWidth + 75, apparatusY + apparatusHeight / 2);
  ctx.rotate(Math.PI / 2);
  ctx.fillText('DNA Migration', 0, 0);
  ctx.fillText('(- to +)', 0, 12);
  ctx.restore();
  // Title
  ctx.fillStyle = '#2C3E50';
  ctx.font = 'bold 18px Arial';
  ctx.textAlign = 'center';
  ctx.fillText('Gel Electrophoresis - DNA Separation', width / 2, 30);

  // Explanation box
  ctx.fillStyle = '#FFF9C4';
  ctx.fillRect(50, height - 70, width - 100, 60);
  ctx.strokeStyle = '#F57F17';
  ctx.lineWidth = 2;
  ctx.strokeRect(50, height - 70, width - 100, 60);

  ctx.fillStyle = '#2C3E50';
  ctx.font = 'bold 11px Arial';
  ctx.textAlign = 'left';
  ctx.fillText('How it works:', 60, height - 52);
  
  ctx.font = '10px Arial';
  const explanation = [
    '• DNA fragments are loaded into wells in agarose gel',
    '• Electric current applied: DNA (negatively charged) migrates toward positive electrode',
    '• Smaller fragments move faster and farther than larger fragments'
  ];
  
  explanation.forEach((line, i) => {
    ctx.fillText(line, 60, height - 35 + i * 13);
  });

  ctx.restore();
}


static drawATPStructure(ctx, x, y, width, height, showHydrolysis = true) {
  ctx.save();
  ctx.translate(x, y);

  const centerX = width / 2;
  const moleculeY = height * 0.3;

  // Draw Adenine (nitrogenous base)
  ctx.fillStyle = '#3498DB';
  ctx.beginPath();
  ctx.moveTo(centerX - 150, moleculeY);
  for (let i = 0; i < 6; i++) {
    const angle = (i * Math.PI * 2 / 6) - Math.PI / 2;
    ctx.lineTo(
      centerX - 150 + 30 * Math.cos(angle),
      moleculeY + 30 * Math.sin(angle)
    );
  }
  ctx.closePath();
  ctx.fill();
  ctx.strokeStyle = '#2C3E50';
  ctx.lineWidth = 2;
  ctx.stroke();

  ctx.fillStyle = '#FFFFFF';
  ctx.font = 'bold 14px Arial';
  ctx.textAlign = 'center';
  ctx.fillText('Adenine', centerX - 150, moleculeY + 5);

  // Draw Ribose (sugar)
  ctx.fillStyle = '#2ECC71';
  ctx.beginPath();
  ctx.moveTo(centerX - 80, moleculeY);
  for (let i = 0; i < 5; i++) {
    const angle = (i * Math.PI * 2 / 5) - Math.PI / 2;
    ctx.lineTo(
      centerX - 80 + 25 * Math.cos(angle),
      moleculeY + 25 * Math.sin(angle)
    );
  }
  ctx.closePath();
  ctx.fill();
  ctx.strokeStyle = '#2C3E50';
  ctx.lineWidth = 2;
  ctx.stroke();

  ctx.fillStyle = '#FFFFFF';
  ctx.font = 'bold 12px Arial';
  ctx.fillText('Ribose', centerX - 80, moleculeY + 5);

  // Connection between Adenine and Ribose
  ctx.strokeStyle = '#34495E';
  ctx.lineWidth = 3;
  ctx.beginPath();
  ctx.moveTo(centerX - 120, moleculeY);
  ctx.lineTo(centerX - 105, moleculeY);
  ctx.stroke();

  // Draw three phosphate groups
  const phosphates = [
    { x: centerX, label: 'P', color: '#E74C3C', name: 'Alpha' },
    { x: centerX + 70, label: 'P', color: '#E67E22', name: 'Beta' },
    { x: centerX + 140, label: 'P', color: '#F39C12', name: 'Gamma' }
  ];

  phosphates.forEach((phosphate, index) => {
    // Phosphate circle
    ctx.fillStyle = phosphate.color;
    ctx.beginPath();
    ctx.arc(phosphate.x, moleculeY, 28, 0, Math.PI * 2);
    ctx.fill();
    ctx.strokeStyle = '#2C3E50';
    ctx.lineWidth = 2;
    ctx.stroke();

    // P label
    ctx.fillStyle = '#FFFFFF';
    ctx.font = 'bold 18px Arial';
    ctx.textAlign = 'center';
    ctx.fillText(phosphate.label, phosphate.x, moleculeY + 7);

    // Phosphate name below
    ctx.fillStyle = phosphate.color;
    ctx.font = '10px Arial';
    ctx.fillText(phosphate.name, phosphate.x, moleculeY + 50);

    // High-energy bonds (wavy lines between phosphates)
    if (index < phosphates.length - 1) {
      ctx.strokeStyle = '#E74C3C';
      ctx.lineWidth = 3;
      ctx.beginPath();
      const startX = phosphate.x + 28;
      const endX = phosphates[index + 1].x - 28;
      const midX = (startX + endX) / 2;
      
      // Draw wavy line
      ctx.moveTo(startX, moleculeY);
      for (let i = 0; i <= 10; i++) {
        const progress = i / 10;
        const waveX = startX + (endX - startX) * progress;
        const waveY = moleculeY + Math.sin(progress * Math.PI * 4) * 5;
        ctx.lineTo(waveX, waveY);
      }
      ctx.stroke();

      // Energy label
      ctx.fillStyle = '#E74C3C';
      ctx.font = 'bold 10px Arial';
      ctx.fillText('~', midX, moleculeY - 15);
    }
  });

  // Connection between Ribose and first phosphate
  ctx.strokeStyle = '#34495E';
  ctx.lineWidth = 3;
  ctx.beginPath();
  ctx.moveTo(centerX - 55, moleculeY);
  ctx.lineTo(centerX - 28, moleculeY);
  ctx.stroke();

  // ATP label
  ctx.fillStyle = '#2C3E50';
  ctx.font = 'bold 20px Arial';
  ctx.textAlign = 'center';
  ctx.fillText('ATP (Adenosine Triphosphate)', centerX, 30);

  // Hydrolysis reaction (if enabled)
  if (showHydrolysis) {
    const reactionY = height * 0.65;
    
    // Arrow down
    ctx.strokeStyle = '#E74C3C';
    ctx.lineWidth = 4;
    ctx.beginPath();
    ctx.moveTo(centerX, moleculeY + 80);
    ctx.lineTo(centerX, reactionY - 40);
    ctx.stroke();

    // Arrowhead
    ctx.fillStyle = '#E74C3C';
    ctx.beginPath();
    ctx.moveTo(centerX, reactionY - 40);
    ctx.lineTo(centerX - 10, reactionY - 55);
    ctx.lineTo(centerX + 10, reactionY - 55);
    ctx.closePath();
    ctx.fill();

    // Hydrolysis equation
    ctx.font = 'bold 16px Arial';
    ctx.fillStyle = '#2C3E50';
    ctx.textAlign = 'center';
    ctx.fillText('+ H₂O', centerX + 60, reactionY - 70);
    ctx.fillText('(water)', centerX + 60, reactionY - 52);

    // Products
    ctx.fillStyle = '#E67E22';
    ctx.font = 'bold 18px Arial';
    ctx.fillText('ADP + Pi + Energy', centerX, reactionY);
    
    ctx.font = '12px Arial';
    ctx.fillStyle = '#7F8C8D';
    ctx.fillText('(Adenosine Diphosphate + Inorganic Phosphate)', centerX, reactionY + 25);

    // Energy release
    ctx.fillStyle = '#F39C12';
    ctx.font = 'bold 14px Arial';
    ctx.fillText('≈ 7.3 kcal/mol energy released', centerX, reactionY + 50);
  }

  ctx.restore();
}

static drawCellularRespiration(ctx, x, y, width, height, showStages = true) {
  ctx.save();
  ctx.translate(x, y);

  const stageWidth = width / 3 - 20;
  const stageHeight = height * 0.7;
  const startY = 80;

  // Overall equation at top
  ctx.fillStyle = '#2C3E50';
  ctx.font = 'bold 16px Arial';
  ctx.textAlign = 'center';
  ctx.fillText('C₆H₁₂O₆ + 6O₂ → 6CO₂ + 6H₂O + ATP', width / 2, 30);
  
  ctx.font = '12px Arial';
  ctx.fillStyle = '#7F8C8D';
  ctx.fillText('(Glucose + Oxygen → Carbon Dioxide + Water + Energy)', width / 2, 50);

  if (showStages) {
    // Stage 1: Glycolysis
    const glycX = 30;
    ctx.fillStyle = '#3498DB';
    ctx.fillRect(glycX, startY, stageWidth, stageHeight);
    ctx.strokeStyle = '#2C3E50';
    ctx.lineWidth = 3;
    ctx.strokeRect(glycX, startY, stageWidth, stageHeight);

    ctx.fillStyle = '#FFFFFF';
    ctx.font = 'bold 16px Arial';
    ctx.textAlign = 'center';
    ctx.fillText('Glycolysis', glycX + stageWidth / 2, startY + 30);
    
    ctx.font = '11px Arial';
    ctx.fillText('(Cytoplasm)', glycX + stageWidth / 2, startY + 50);

    const glycInfo = [
      'Glucose → 2 Pyruvate',
      '',
      'Products:',
      '• 2 ATP (net)',
      '• 2 NADH',
      '• 2 Pyruvate'
    ];

    ctx.textAlign = 'left';
    glycInfo.forEach((info, i) => {
      if (info.startsWith('Products:')) {
        ctx.font = 'bold 11px Arial';
      } else if (info.startsWith('•')) {
        ctx.font = '10px Arial';
      }
      ctx.fillText(info, glycX + 10, startY + 80 + i * 18);
    });

    // Stage 2: Krebs Cycle
    const krebsX = glycX + stageWidth + 20;
    ctx.fillStyle = '#2ECC71';
    ctx.fillRect(krebsX, startY, stageWidth, stageHeight);
    ctx.strokeStyle = '#2C3E50';
    ctx.lineWidth = 3;
    ctx.strokeRect(krebsX, startY, stageHeight);

    ctx.fillStyle = '#FFFFFF';
    ctx.font = 'bold 16px Arial';
    ctx.textAlign = 'center';
    ctx.fillText('Krebs Cycle', krebsX + stageWidth / 2, startY + 30);
    
    ctx.font = '11px Arial';
    ctx.fillText('(Mitochondrial Matrix)', krebsX + stageWidth / 2, startY + 50);

    const krebsInfo = [
      'Pyruvate → CO₂',
      '',
      'Products (per glucose):',
      '• 2 ATP',
      '• 6 NADH',
      '• 2 FADH₂',
      '• 4 CO₂'
    ];

    ctx.textAlign = 'left';
    krebsInfo.forEach((info, i) => {
      if (info.startsWith('Products:')) {
        ctx.font = 'bold 11px Arial';
      } else if (info.startsWith('•')) {
        ctx.font = '10px Arial';
      }
      ctx.fillText(info, krebsX + 10, startY + 80 + i * 18);
    });

    // Stage 3: Electron Transport Chain
    const etcX = krebsX + stageWidth + 20;
    ctx.fillStyle = '#E74C3C';
    ctx.fillRect(etcX, startY, stageWidth, stageHeight);
    ctx.strokeStyle = '#2C3E50';
    ctx.lineWidth = 3;
    ctx.strokeRect(etcX, startY, stageWidth, stageHeight);

    ctx.fillStyle = '#FFFFFF';
    ctx.font = 'bold 16px Arial';
    ctx.textAlign = 'center';
    ctx.fillText('Electron Transport', etcX + stageWidth / 2, startY + 23);
    ctx.fillText('Chain', etcX + stageWidth / 2, startY + 43);
    
    ctx.font = '11px Arial';
    ctx.fillText('(Inner Mitochondrial', etcX + stageWidth / 2, startY + 60);
    ctx.fillText('Membrane)', etcX + stageWidth / 2, startY + 75);

    const etcInfo = [
      '',
      'NADH/FADH₂ → ATP',
      '',
      'Products:',
      '• ~32-34 ATP',
      '• H₂O',
      '',
      'Uses O₂'
    ];

    ctx.textAlign = 'left';
    etcInfo.forEach((info, i) => {
      if (info.startsWith('Products:')) {
        ctx.font = 'bold 11px Arial';
      } else if (info.startsWith('•') || info.startsWith('Uses')) {
        ctx.font = '10px Arial';
      }
      ctx.fillText(info, etcX + 10, startY + 95 + i * 18);
    });

    // Arrows between stages
    ctx.strokeStyle = '#34495E';
    ctx.lineWidth = 4;
    ctx.fillStyle = '#34495E';

    // Arrow 1: Glycolysis to Krebs
    const arrow1X = glycX + stageWidth + 5;
    const arrow1Y = startY + stageHeight / 2;
    ctx.beginPath();
    ctx.moveTo(arrow1X, arrow1Y);
    ctx.lineTo(arrow1X + 10, arrow1Y);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(arrow1X + 10, arrow1Y);
    ctx.lineTo(arrow1X + 5, arrow1Y - 5);
    ctx.lineTo(arrow1X + 5, arrow1Y + 5);
    ctx.closePath();
    ctx.fill();

    // Arrow 2: Krebs to ETC
    const arrow2X = krebsX + stageWidth + 5;
    const arrow2Y = startY + stageHeight / 2;
    ctx.beginPath();
    ctx.moveTo(arrow2X, arrow2Y);
    ctx.lineTo(arrow2X + 10, arrow2Y);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(arrow2X + 10, arrow2Y);
    ctx.lineTo(arrow2X + 5, arrow2Y - 5);
    ctx.lineTo(arrow2X + 5, arrow2Y + 5);
    ctx.closePath();
    ctx.fill();

    // Total ATP at bottom
    ctx.fillStyle = '#F39C12';
    ctx.font = 'bold 18px Arial';
    ctx.textAlign = 'center';
    ctx.fillText('Total: ~36-38 ATP per glucose molecule', width / 2, height - 20);
  }

  ctx.restore();
}

static drawMitochondrion(ctx, x, y, width, height) {
  ctx.save();
  ctx.translate(x, y);

  const centerX = width / 2;
  const centerY = height / 2;
  const outerRadiusX = width * 0.4;
  const outerRadiusY = height * 0.35;

  // Outer membrane
  ctx.fillStyle = '#E8B4B8';
  ctx.beginPath();
  ctx.ellipse(centerX, centerY, outerRadiusX, outerRadiusY, 0, 0, Math.PI * 2);
  ctx.fill();
  ctx.strokeStyle = '#C0392B';
  ctx.lineWidth = 3;
  ctx.stroke();

  // Inner membrane (cristae - folded)
  ctx.strokeStyle = '#E74C3C';
  ctx.lineWidth = 2.5;
  
  // Draw cristae (folded inner membrane)
  for (let i = 0; i < 5; i++) {
    const cristaeY = centerY - outerRadiusY * 0.6 + (i * outerRadiusY * 0.3);
    const cristaeWidth = outerRadiusX * 0.7;
    
    ctx.beginPath();
    ctx.moveTo(centerX - cristaeWidth, cristaeY);
    
    // Create wavy cristae
    for (let x = 0; x <= cristaeWidth * 2; x += 10) {
      const waveX = centerX - cristaeWidth + x;
      const waveY = cristaeY + Math.sin(x * 0.3) * 15;
      ctx.lineTo(waveX, waveY);
    }
    ctx.stroke();
  }

  // Matrix (inner space)
  ctx.fillStyle = '#F8C9CC';
  ctx.globalAlpha = 0.3;
  ctx.beginPath();
  ctx.ellipse(centerX, centerY, outerRadiusX * 0.85, outerRadiusY * 0.75, 0, 0, Math.PI * 2);
  ctx.fill();
  ctx.globalAlpha = 1;

  // Intermembrane space (show as band)
  ctx.strokeStyle = '#FFF3E0';
  ctx.lineWidth = 8;
  ctx.beginPath();
  ctx.ellipse(centerX, centerY, outerRadiusX * 0.92, outerRadiusY * 0.82, 0, 0, Math.PI * 2);
  ctx.stroke();

  // DNA in matrix (small circles)
  ctx.fillStyle = '#3498DB';
  const dnaPositions = [
    { x: centerX - 50, y: centerY - 30 },
    { x: centerX + 40, y: centerY + 20 },
    { x: centerX - 30, y: centerY + 40 }
  ];

  dnaPositions.forEach(pos => {
    ctx.beginPath();
    ctx.arc(pos.x, pos.y, 6, 0, Math.PI * 2);
    ctx.fill();
  });

  // Ribosomes (tiny dots)
  ctx.fillStyle = '#9B59B6';
  for (let i = 0; i < 15; i++) {
    const angle = Math.random() * Math.PI * 2;
    const distance = Math.random() * outerRadiusX * 0.6;
    const ribX = centerX + Math.cos(angle) * distance;
    const ribY = centerY + Math.sin(angle) * distance * (outerRadiusY / outerRadiusX);
    
    ctx.beginPath();
    ctx.arc(ribX, ribY, 2, 0, Math.PI * 2);
    ctx.fill();
  }

  // Labels
  ctx.fillStyle = '#2C3E50';
  ctx.font = 'bold 12px Arial';
  ctx.textAlign = 'center';

  // Outer membrane label
  ctx.fillText('Outer Membrane', centerX, centerY - outerRadiusY - 15);

  // Inner membrane label
  ctx.fillText('Inner Membrane', centerX + outerRadiusX + 80, centerY - 50);
  ctx.strokeStyle = '#E74C3C';
  ctx.lineWidth = 1;
  ctx.beginPath();
  ctx.moveTo(centerX + outerRadiusX + 75, centerY - 45);
  ctx.lineTo(centerX + outerRadiusX * 0.5, centerY - 20);
  ctx.stroke();

  // Cristae label
  ctx.fillText('Cristae', centerX - outerRadiusX - 60, centerY);
  ctx.beginPath();
  ctx.moveTo(centerX - outerRadiusX - 55, centerY + 5);
  ctx.lineTo(centerX - outerRadiusX * 0.3, centerY + 10);
  ctx.stroke();

  // Matrix label
  ctx.fillText('Matrix', centerX, centerY + outerRadiusY + 25);

  // DNA label
  ctx.font = '10px Arial';
  ctx.fillStyle = '#3498DB';
  ctx.fillText('mtDNA', centerX - 50, centerY - 45);

  ctx.restore();
}

static drawElectronTransportChain(ctx, x, y, width, height) {
  ctx.save();
  ctx.translate(x, y);

  // Draw mitochondrial membrane
  const membraneY = height / 2;
  const membraneHeight = 60;

  // Inner mitochondrial membrane
  ctx.fillStyle = '#E8B4B8';
  ctx.fillRect(0, membraneY - membraneHeight / 2, width, membraneHeight);
  ctx.strokeStyle = '#C0392B';
  ctx.lineWidth = 3;
  ctx.strokeRect(0, membraneY - membraneHeight / 2, width, membraneHeight);

  // Labels for spaces
  ctx.fillStyle = '#2C3E50';
  ctx.font = 'bold 14px Arial';
  ctx.textAlign = 'center';
  ctx.fillText('Intermembrane Space', width / 2, membraneY - 80);
  ctx.fillText('Matrix', width / 2, membraneY + 100);

  // Draw protein complexes (I, II, III, IV)
  const complexes = [
    { name: 'Complex I', x: 100, color: '#3498DB' },
    { name: 'Complex II', x: 220, color: '#2ECC71' },
    { name: 'Complex III', x: 380, color: '#9B59B6' },
    { name: 'Complex IV', x: 540, color: '#E67E22' }
  ];

  complexes.forEach(complex => {
    // Complex shape (embedded in membrane)
    ctx.fillStyle = complex.color;
    ctx.fillRect(complex.x - 30, membraneY - 50, 60, 100);
    ctx.strokeStyle = '#2C3E50';
    ctx.lineWidth = 2;
    ctx.strokeRect(complex.x - 30, membraneY - 50, 60, 100);

    // Complex label
    ctx.fillStyle = '#FFFFFF';
    ctx.font = 'bold 10px Arial';
    ctx.textAlign = 'center';
    ctx.fillText(complex.name, complex.x, membraneY);

    // H+ pumps (if Complex I, III, or IV)
    if (complex.name !== 'Complex II') {
      // Draw H+ ions being pumped
      for (let i = 0; i < 3; i++) {
        ctx.fillStyle = '#E74C3C';
        ctx.font = 'bold 11px Arial';
        ctx.fillText('H⁺', complex.x - 15 + i * 15, membraneY - 65 - i * 8);
        
        // Upward arrow
        ctx.strokeStyle = '#E74C3C';
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(complex.x - 15 + i * 15, membraneY - 30);
        ctx.lineTo(complex.x - 15 + i * 15, membraneY - 55);
        ctx.stroke();
      }
    }
  });

  // Draw electron flow (arrows)
  ctx.strokeStyle = '#F39C12';
  ctx.fillStyle = '#F39C12';
  ctx.lineWidth = 3;

  const electronPath = [
    { x: 50, y: membraneY, label: 'NADH' },
    { x: 100, y: membraneY },
    { x: 180, y: membraneY, label: 'Q' },
    { x: 220, y: membraneY },
    { x: 300, y: membraneY, label: 'Q' },
    { x: 380, y: membraneY },
    { x: 460, y: membraneY, label: 'Cyt c' },
    { x: 540, y: membraneY },
    { x: 620, y: membraneY }
  ];

  for (let i = 0; i < electronPath.length - 1; i++) {
    const start = electronPath[i];
    const end = electronPath[i + 1];
    
    // Arrow
    ctx.beginPath();
    ctx.moveTo(start.x, start.y);
    ctx.lineTo(end.x, end.y);
    ctx.stroke();
    
    // Arrowhead
    ctx.beginPath();
    ctx.moveTo(end.x, end.y);
    ctx.lineTo(end.x - 8, end.y - 5);
    ctx.lineTo(end.x - 8, end.y + 5);
    ctx.closePath();
    ctx.fill();

    // Label electron carriers
    if (start.label) {
      ctx.font = 'bold 11px Arial';
      ctx.fillStyle = '#F39C12';
      ctx.textAlign = 'center';
      ctx.fillText(start.label, start.x, start.y + 25);
    }
  }

  // Final electron acceptor (O2 → H2O)
  ctx.fillStyle = '#3498DB';
  ctx.font = 'bold 13px Arial';
  ctx.textAlign = 'center';
  ctx.fillText('½O₂ + 2H⁺', 660, membraneY);
  
  ctx.strokeStyle = '#3498DB';
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.moveTo(670, membraneY - 5);
  ctx.lineTo(690, membraneY - 5);
  ctx.stroke();
  
  ctx.fillText('H₂O', 720, membraneY);

  // ATP Synthase (Complex V)
  const atpX = width - 150;
  
  // Draw ATP synthase shape
  ctx.fillStyle = '#27AE60';
  // F0 portion (in membrane)
  ctx.beginPath();
  ctx.arc(atpX, membraneY, 25, 0, Math.PI * 2);
  ctx.fill();
  ctx.strokeStyle = '#2C3E50';
  ctx.lineWidth = 2;
  ctx.stroke();
  
  // F1 portion (in matrix)
  ctx.fillStyle = '#2ECC71';
  ctx.beginPath();
  ctx.arc(atpX, membraneY + 50, 35, 0, Math.PI * 2);
  ctx.fill();
  ctx.stroke();
  
  // Stalk
  ctx.fillStyle = '#27AE60';
  ctx.fillRect(atpX - 8, membraneY, 16, 50);
  ctx.strokeRect(atpX - 8, membraneY, 16, 50);

  // ATP Synthase label
  ctx.fillStyle = '#FFFFFF';
  ctx.font = 'bold 10px Arial';
  ctx.textAlign = 'center';
  ctx.fillText('ATP', atpX, membraneY + 55);
  ctx.fillText('Synthase', atpX, membraneY + 68);

  // H+ flowing through ATP synthase
  for (let i = 0; i < 4; i++) {
    ctx.fillStyle = '#E74C3C';
    ctx.font = 'bold 10px Arial';
    ctx.fillText('H⁺', atpX + 40, membraneY - 50 + i * 25);
    
    // Downward arrow
    ctx.strokeStyle = '#E74C3C';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(atpX + 40, membraneY - 40 + i * 25);
    ctx.lineTo(atpX + 20, membraneY - 20 + i * 25);
    ctx.stroke();
  }

  // ATP production
  ctx.fillStyle = '#F39C12';
  ctx.font = 'bold 14px Arial';
  ctx.fillText('ADP + Pi → ATP', atpX, membraneY + 120);

  // H+ gradient label
  ctx.fillStyle = '#E74C3C';
  ctx.font = 'bold 12px Arial';
  ctx.textAlign = 'left';
  ctx.fillText('High [H⁺]', 20, membraneY - 70);
  ctx.fillText('Low [H⁺]', 20, membraneY + 110);

  // Chemiosmosis note
  ctx.fillStyle = '#7F8C8D';
  ctx.font = 'italic 11px Arial';
  ctx.textAlign = 'center';
  ctx.fillText('Chemiosmosis: H⁺ gradient drives ATP synthesis', width / 2, height - 20);

  ctx.restore();
}

static drawChloroplastStructure(ctx, x, y, width, height) {
  ctx.save();
  ctx.translate(x, y);

  const centerX = width / 2;
  const centerY = height / 2;
  const outerRadiusX = width * 0.4;
  const outerRadiusY = height * 0.35;

  // Outer membrane
  ctx.fillStyle = '#C8E6C9';
  ctx.beginPath();
  ctx.ellipse(centerX, centerY, outerRadiusX, outerRadiusY, 0, 0, Math.PI * 2);
  ctx.fill();
  ctx.strokeStyle = '#388E3C';
  ctx.lineWidth = 3;
  ctx.stroke();

  // Inner membrane
  ctx.strokeStyle = '#4CAF50';
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.ellipse(centerX, centerY, outerRadiusX * 0.93, outerRadiusY * 0.9, 0, 0, Math.PI * 2);
  ctx.stroke();

  // Stroma (interior fluid)
  ctx.fillStyle = '#A5D6A7';
  ctx.globalAlpha = 0.4;
  ctx.beginPath();
  ctx.ellipse(centerX, centerY, outerRadiusX * 0.85, outerRadiusY * 0.82, 0, 0, Math.PI * 2);
  ctx.fill();
  ctx.globalAlpha = 1;

  // Draw grana (stacks of thylakoids)
  const granaPositions = [
    { x: centerX - 80, y: centerY - 40 },
    { x: centerX + 60, y: centerY - 30 },
    { x: centerX - 30, y: centerY + 40 },
    { x: centerX + 80, y: centerY + 30 }
  ];

  granaPositions.forEach(pos => {
    // Draw stack of thylakoid discs
    for (let i = 0; i < 5; i++) {
      ctx.fillStyle = i % 2 === 0 ? '#1B5E20' : '#2E7D32';
      ctx.fillStyle = i % 2 === 0 ? '#1B5E20' : '#2E7D32';
      ctx.fillRect(pos.x - 25, pos.y + i * 6, 50, 5);
      ctx.strokeStyle = '#0D3B0D';
      ctx.lineWidth = 1;
      ctx.strokeRect(pos.x - 25, pos.y + i * 6, 50, 5);
    }
  });

  // Stromal lamellae (connections between grana)
  ctx.strokeStyle = '#2E7D32';
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.moveTo(granaPositions[0].x + 25, granaPositions[0].y + 15);
  ctx.lineTo(granaPositions[1].x - 25, granaPositions[1].y + 15);
  ctx.stroke();
  
  ctx.beginPath();
  ctx.moveTo(granaPositions[2].x + 25, granaPositions[2].y + 15);
  ctx.lineTo(granaPositions[3].x - 25, granaPositions[3].y + 15);
  ctx.stroke();

  // DNA (circular in stroma)
  ctx.strokeStyle = '#3498DB';
  ctx.lineWidth = 2;
  ctx.setLineDash([3, 3]);
  ctx.beginPath();
  ctx.arc(centerX + 20, centerY - 60, 15, 0, Math.PI * 2);
  ctx.stroke();
  ctx.setLineDash([]);

  // Ribosomes
  ctx.fillStyle = '#9B59B6';
  for (let i = 0; i < 12; i++) {
    const angle = Math.random() * Math.PI * 2;
    const distance = Math.random() * outerRadiusX * 0.7;
    const ribX = centerX + Math.cos(angle) * distance;
    const ribY = centerY + Math.sin(angle) * distance * (outerRadiusY / outerRadiusX);
    
    // Check if not inside grana
    let insideGrana = false;
    for (let grana of granaPositions) {
      if (Math.abs(ribX - grana.x) < 30 && Math.abs(ribY - grana.y) < 30) {
        insideGrana = true;
        break;
      }
    }
    
    if (!insideGrana) {
      ctx.beginPath();
      ctx.arc(ribX, ribY, 2, 0, Math.PI * 2);
      ctx.fill();
    }
  }

  // Starch granules
  ctx.fillStyle = '#FFF9C4';
  ctx.strokeStyle = '#F57F17';
  ctx.lineWidth = 1;
  const starchPositions = [
    { x: centerX - 60, y: centerY + 60 },
    { x: centerX + 40, y: centerY + 70 }
  ];

  starchPositions.forEach(pos => {
    ctx.beginPath();
    ctx.arc(pos.x, pos.y, 12, 0, Math.PI * 2);
    ctx.fill();
    ctx.stroke();
  });

  // Labels
  ctx.fillStyle = '#2C3E50';
  ctx.font = 'bold 12px Arial';
  ctx.textAlign = 'center';

  // Outer membrane
  ctx.fillText('Outer Membrane', centerX, centerY - outerRadiusY - 15);

  // Inner membrane
  ctx.fillText('Inner Membrane', centerX - outerRadiusX - 80, centerY - 80);
  ctx.strokeStyle = '#4CAF50';
  ctx.lineWidth = 1;
  ctx.beginPath();
  ctx.moveTo(centerX - outerRadiusX - 75, centerY - 75);
  ctx.lineTo(centerX - outerRadiusX * 0.7, centerY - 50);
  ctx.stroke();

  // Granum
  ctx.fillText('Granum', centerX - 80, centerY - 70);
  ctx.strokeStyle = '#1B5E20';
  ctx.beginPath();
  ctx.moveTo(centerX - 75, centerY - 65);
  ctx.lineTo(centerX - 80, centerY - 45);
  ctx.stroke();

  // Thylakoid
  ctx.font = '10px Arial';
  ctx.fillText('(Stack of Thylakoids)', centerX - 80, centerY - 55);

  // Stroma
  ctx.font = 'bold 12px Arial';
  ctx.fillText('Stroma', centerX + outerRadiusX + 60, centerY);
  ctx.strokeStyle = '#4CAF50';
  ctx.lineWidth = 1;
  ctx.beginPath();
  ctx.moveTo(centerX + outerRadiusX + 55, centerY + 5);
  ctx.lineTo(centerX + outerRadiusX * 0.5, centerY + 5);
  ctx.stroke();

  // DNA label
  ctx.font = '10px Arial';
  ctx.fillStyle = '#3498DB';
  ctx.fillText('cpDNA', centerX + 20, centerY - 80);

  // Starch granule label
  ctx.fillStyle = '#F57F17';
  ctx.fillText('Starch', centerX - 60, centerY + 85);

  ctx.restore();
}

static drawPhotosynthesisDetailed(ctx, x, y, width, height, showBothStages = true) {
  ctx.save();
  ctx.translate(x, y);

  const centerX = width / 2;

  // Overall equation at top
  ctx.fillStyle = '#2C3E50';
  ctx.font = 'bold 16px Arial';
  ctx.textAlign = 'center';
  ctx.fillText('6CO₂ + 6H₂O + Light Energy → C₆H₁₂O₆ + 6O₂', centerX, 30);
  
  ctx.font = '12px Arial';
  ctx.fillStyle = '#7F8C8D';
  ctx.fillText('(Carbon Dioxide + Water + Light → Glucose + Oxygen)', centerX, 50);

  if (showBothStages) {
    const stageWidth = width / 2 - 40;
    const stageHeight = height * 0.75;
    const startY = 90;

    // LIGHT-DEPENDENT REACTIONS (Left)
    const lightX = 30;
    
    // Draw thylakoid membrane
    ctx.fillStyle = '#1B5E20';
    ctx.fillRect(lightX, startY, stageWidth, stageHeight);
    ctx.strokeStyle = '#0D3B0D';
    ctx.lineWidth = 3;
    ctx.strokeRect(lightX, startY, stageWidth, stageHeight);

    ctx.fillStyle = '#FFFFFF';
    ctx.font = 'bold 16px Arial';
    ctx.textAlign = 'center';
    ctx.fillText('Light-Dependent', lightX + stageWidth / 2, startY + 25);
    ctx.fillText('Reactions', lightX + stageWidth / 2, startY + 45);
    
    ctx.font = '11px Arial';
    ctx.fillText('(Thylakoid Membrane)', lightX + stageWidth / 2, startY + 65);

    // Light reactions components
    ctx.textAlign = 'left';
    ctx.font = '11px Arial';
    const lightInfo = [
      'Location: Thylakoid',
      '',
      'Inputs:',
      '• Light (photons)',
      '• H₂O',
      '• ADP + Pi',
      '• NADP⁺',
      '',
      'Outputs:',
      '• O₂',
      '• ATP',
      '• NADPH'
    ];

    lightInfo.forEach((info, i) => {
      if (info.startsWith('Inputs:') || info.startsWith('Outputs:')) {
        ctx.font = 'bold 11px Arial';
        ctx.fillStyle = '#FFF59D';
      } else if (info.startsWith('•')) {
        ctx.font = '10px Arial';
        ctx.fillStyle = '#FFFFFF';
      } else {
        ctx.fillStyle = '#E0E0E0';
      }
      ctx.fillText(info, lightX + 15, startY + 95 + i * 18);
    });

    // Draw sun
    ctx.fillStyle = '#FFF176';
    ctx.beginPath();
    ctx.arc(lightX + stageWidth / 2, startY + 280, 30, 0, Math.PI * 2);
    ctx.fill();
    ctx.strokeStyle = '#F57F17';
    ctx.lineWidth = 2;
    ctx.stroke();

    // Sun rays
    for (let i = 0; i < 8; i++) {
      const angle = (i * Math.PI * 2) / 8;
      ctx.strokeStyle = '#FFEB3B';
      ctx.lineWidth = 3;
      ctx.beginPath();
      ctx.moveTo(
        lightX + stageWidth / 2 + Math.cos(angle) * 35,
        startY + 280 + Math.sin(angle) * 35
      );
      ctx.lineTo(
        lightX + stageWidth / 2 + Math.cos(angle) * 50,
        startY + 280 + Math.sin(angle) * 50
      );
      ctx.stroke();
    }

    ctx.fillStyle = '#F57F17';
    ctx.font = 'bold 12px Arial';
    ctx.textAlign = 'center';
    ctx.fillText('Light', lightX + stageWidth / 2, startY + 285);

    // Water splitting
    ctx.fillStyle = '#FFFFFF';
    ctx.font = '11px Arial';
    ctx.fillText('H₂O → H⁺ + O₂', lightX + stageWidth / 2, startY + 340);

    // LIGHT-INDEPENDENT REACTIONS / CALVIN CYCLE (Right)
    const darkX = lightX + stageWidth + 20;
    
    ctx.fillStyle = '#A5D6A7';
    ctx.fillRect(darkX, startY, stageWidth, stageHeight);
    ctx.strokeStyle = '#388E3C';
    ctx.lineWidth = 3;
    ctx.strokeRect(darkX, startY, stageWidth, stageHeight);

    ctx.fillStyle = '#2C3E50';
    ctx.font = 'bold 16px Arial';
    ctx.textAlign = 'center';
    ctx.fillText('Light-Independent', darkX + stageWidth / 2, startY + 25);
    ctx.fillText('Reactions', darkX + stageWidth / 2, startY + 45);
    
    ctx.font = '11px Arial';
    ctx.fillText('(Calvin Cycle - Stroma)', darkX + stageWidth / 2, startY + 65);

    // Calvin cycle components
    ctx.textAlign = 'left';
    ctx.font = '11px Arial';
    const darkInfo = [
      'Location: Stroma',
      '',
      'Inputs:',
      '• CO₂',
      '• ATP (from light rxn)',
      '• NADPH (from light rxn)',
      '',
      'Outputs:',
      '• Glucose (C₆H₁₂O₆)',
      '• ADP + Pi',
      '• NADP⁺'
    ];

    darkInfo.forEach((info, i) => {
      if (info.startsWith('Inputs:') || info.startsWith('Outputs:')) {
        ctx.font = 'bold 11px Arial';
        ctx.fillStyle = '#1B5E20';
      } else if (info.startsWith('•')) {
        ctx.font = '10px Arial';
        ctx.fillStyle = '#2C3E50';
      } else {
        ctx.fillStyle = '#424242';
      }
      ctx.fillText(info, darkX + 15, startY + 95 + i * 18);
    });

    // Draw Calvin Cycle diagram
    const cycleX = darkX + stageWidth / 2;
    const cycleY = startY + 300;
    const cycleRadius = 60;

    // Cycle circle
    ctx.strokeStyle = '#2E7D32';
    ctx.lineWidth = 4;
    ctx.setLineDash([10, 5]);
    ctx.beginPath();
    ctx.arc(cycleX, cycleY, cycleRadius, 0, Math.PI * 2);
    ctx.stroke();
    ctx.setLineDash([]);

    // Cycle stages
    ctx.fillStyle = '#1B5E20';
    ctx.font = 'bold 11px Arial';
    ctx.textAlign = 'center';
    ctx.fillText('Calvin', cycleX, cycleY - 5);
    ctx.fillText('Cycle', cycleX, cycleY + 10);

    // CO2 input
    ctx.fillStyle = '#E74C3C';
    ctx.font = 'bold 12px Arial';
    ctx.fillText('CO₂', cycleX, cycleY - cycleRadius - 20);
    
    // Arrow pointing in
    ctx.strokeStyle = '#E74C3C';
    ctx.fillStyle = '#E74C3C';
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.moveTo(cycleX, cycleY - cycleRadius - 15);
    ctx.lineTo(cycleX, cycleY - cycleRadius);
    ctx.stroke();

    // Glucose output
    ctx.fillStyle = '#F39C12';
    ctx.font = 'bold 12px Arial';
    ctx.fillText('Glucose', cycleX, cycleY + cycleRadius + 30);
    
    // Arrow pointing out
    ctx.strokeStyle = '#F39C12';
    ctx.fillStyle = '#F39C12';
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.moveTo(cycleX, cycleY + cycleRadius);
    ctx.lineTo(cycleX, cycleY + cycleRadius + 25);
    ctx.stroke();
    
    // Arrowhead
    ctx.beginPath();
    ctx.moveTo(cycleX, cycleY + cycleRadius + 25);
    ctx.lineTo(cycleX - 5, cycleY + cycleRadius + 18);
    ctx.lineTo(cycleX + 5, cycleY + cycleRadius + 18);
    ctx.closePath();
    ctx.fill();

    // Arrow connecting the two stages (ATP and NADPH transfer)
    ctx.strokeStyle = '#9C27B0';
    ctx.lineWidth = 4;
    ctx.beginPath();
    ctx.moveTo(lightX + stageWidth, startY + stageHeight / 2);
    ctx.lineTo(darkX, startY + stageHeight / 2);
    ctx.stroke();

    // Arrow labels
    ctx.fillStyle = '#9C27B0';
    ctx.font = 'bold 11px Arial';
    ctx.textAlign = 'center';
    ctx.fillText('ATP', lightX + stageWidth + 10, startY + stageHeight / 2 - 15);
    ctx.fillText('NADPH', lightX + stageWidth + 10, startY + stageHeight / 2 - 2);

    // Arrowhead
    ctx.fillStyle = '#9C27B0';
    ctx.beginPath();
    ctx.moveTo(darkX, startY + stageHeight / 2);
    ctx.lineTo(darkX - 10, startY + stageHeight / 2 - 6);
    ctx.lineTo(darkX - 10, startY + stageHeight / 2 + 6);
    ctx.closePath();
    ctx.fill();

    // Return arrow (ADP, NADP+ back to light reactions)
    ctx.strokeStyle = '#FF6F00';
    ctx.lineWidth = 3;
    ctx.setLineDash([5, 5]);
    ctx.beginPath();
    ctx.moveTo(darkX, startY + stageHeight / 2 + 30);
    ctx.lineTo(lightX + stageWidth, startY + stageHeight / 2 + 30);
    ctx.stroke();
    ctx.setLineDash([]);

    ctx.fillStyle = '#FF6F00';
    ctx.font = '10px Arial';
    ctx.fillText('ADP, NADP⁺', lightX + stageWidth + 10, startY + stageHeight / 2 + 42);
  }

  ctx.restore();
}



static drawNegativeFeedbackLoop(ctx, x, y, width, height, exampleType = 'general') {
  ctx.save();
  ctx.translate(x, y);

  const centerX = width / 2;
  const centerY = height / 2;
  const radius = Math.min(width, height) * 0.35;

  // Define feedback loop components based on example type
  const examples = {
    general: {
      components: ['Stimulus', 'Receptor', 'Control Center', 'Effector', 'Response'],
      colors: ['#E74C3C', '#3498DB', '#9B59B6', '#2ECC71', '#F39C12']
    },
    temperature: {
      components: ['Body Temp ↑', 'Thermoreceptors', 'Hypothalamus', 'Sweat Glands', 'Cooling'],
      colors: ['#E74C3C', '#3498DB', '#9B59B6', '#2ECC71', '#F39C12']
    },
    glucose: {
      components: ['Blood Glucose ↑', 'Pancreas Detects', 'Beta Cells', 'Insulin Release', 'Glucose ↓'],
      colors: ['#E74C3C', '#3498DB', '#9B59B6', '#2ECC71', '#F39C12']
    }
  };

  const example = examples[exampleType] || examples.general;
  const components = example.components;
  const colors = example.colors;
  const numComponents = components.length;

  // Draw circular feedback loop
  components.forEach((component, index) => {
    const angle = (index * 2 * Math.PI / numComponents) - Math.PI / 2;
    const nextAngle = ((index + 1) * 2 * Math.PI / numComponents) - Math.PI / 2;
    
    const compX = centerX + radius * Math.cos(angle);
    const compY = centerY + radius * Math.sin(angle);
    const nextX = centerX + radius * Math.cos(nextAngle);
    const nextY = centerY + radius * Math.sin(nextAngle);

    // Draw component box
    const boxWidth = 100;
    const boxHeight = 60;
    ctx.fillStyle = colors[index];
    ctx.fillRect(compX - boxWidth / 2, compY - boxHeight / 2, boxWidth, boxHeight);
    ctx.strokeStyle = '#2C3E50';
    ctx.lineWidth = 2;
    ctx.strokeRect(compX - boxWidth / 2, compY - boxHeight / 2, boxWidth, boxHeight);

    // Component text
    ctx.fillStyle = '#FFFFFF';
    ctx.font = 'bold 11px Arial';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    const lines = component.split(' ');
    lines.forEach((line, i) => {
      ctx.fillText(line, compX, compY - 10 + i * 14);
    });

    // Draw arrow to next component
    const arrowStartX = compX + (boxWidth / 2) * Math.cos(angle + Math.PI / numComponents);
    const arrowStartY = compY + (boxHeight / 2) * Math.sin(angle + Math.PI / numComponents);
    const arrowEndX = nextX - (boxWidth / 2) * Math.cos(nextAngle - Math.PI / numComponents);
    const arrowEndY = nextY - (boxHeight / 2) * Math.sin(nextAngle - Math.PI / numComponents);

    ctx.strokeStyle = '#34495E';
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.moveTo(arrowStartX, arrowStartY);
    
    // Curved arrow
    const midX = (arrowStartX + arrowEndX) / 2;
    const midY = (arrowStartY + arrowEndY) / 2;
    const ctrlX = centerX + (midX - centerX) * 1.3;
    const ctrlY = centerY + (midY - centerY) * 1.3;
    
    ctx.quadraticCurveTo(ctrlX, ctrlY, arrowEndX, arrowEndY);
    ctx.stroke();

    // Arrowhead
    const headAngle = Math.atan2(arrowEndY - ctrlY, arrowEndX - ctrlX);
    ctx.fillStyle = '#34495E';
    ctx.beginPath();
    ctx.moveTo(arrowEndX, arrowEndY);
    ctx.lineTo(
      arrowEndX - 12 * Math.cos(headAngle - Math.PI / 6),
      arrowEndY - 12 * Math.sin(headAngle - Math.PI / 6)
    );
    ctx.lineTo(
      arrowEndX - 12 * Math.cos(headAngle + Math.PI / 6),
      arrowEndY - 12 * Math.sin(headAngle + Math.PI / 6)
    );
    ctx.closePath();
    ctx.fill();
  });

  // Draw central "Negative Feedback" label
  ctx.fillStyle = '#2C3E50';
  ctx.font = 'bold 16px Arial';
  ctx.textAlign = 'center';
  ctx.fillText('Negative', centerX, centerY - 8);
  ctx.fillText('Feedback', centerX, centerY + 8);

  // Draw inhibition symbol
  ctx.strokeStyle = '#E74C3C';
  ctx.lineWidth = 3;
  ctx.beginPath();
  ctx.arc(centerX, centerY, 50, 0, Math.PI * 2);
  ctx.stroke();
  
  ctx.beginPath();
  ctx.moveTo(centerX - 35, centerY + 35);
  ctx.lineTo(centerX + 35, centerY - 35);
  ctx.stroke();

  ctx.restore();
}

static drawThermoregulation(ctx, x, y, width, height) {
  ctx.save();
  ctx.translate(x, y);

  const centerX = width / 2;
  const setPoint = height / 2;

  // Draw thermometer in center
  const thermWidth = 40;
  const thermHeight = height * 0.6;
  const thermX = centerX - thermWidth / 2;
  const thermY = (height - thermHeight) / 2;

  // Thermometer bulb
  ctx.fillStyle = '#E74C3C';
  ctx.beginPath();
  ctx.arc(centerX, thermY + thermHeight, 25, 0, Math.PI * 2);
  ctx.fill();
  ctx.strokeStyle = '#2C3E50';
  ctx.lineWidth = 2;
  ctx.stroke();

  // Thermometer tube
  ctx.fillStyle = '#ECF0F1';
  ctx.fillRect(thermX, thermY, thermWidth, thermHeight);
  ctx.strokeStyle = '#2C3E50';
  ctx.lineWidth = 2;
  ctx.strokeRect(thermX, thermY, thermWidth, thermHeight);

  // Temperature markings
  ctx.fillStyle = '#2C3E50';
  ctx.font = '11px Arial';
  for (let i = 0; i <= 4; i++) {
    const markY = thermY + (thermHeight * i / 4);
    ctx.beginPath();
    ctx.moveTo(thermX, markY);
    ctx.lineTo(thermX - 5, markY);
    ctx.stroke();
    
    const temp = 40 - (i * 2.5);
    ctx.textAlign = 'right';
    ctx.fillText(`${temp}°C`, thermX - 10, markY + 4);
  }

  // Set point line
  ctx.strokeStyle = '#27AE60';
  ctx.lineWidth = 2;
  ctx.setLineDash([5, 5]);
  ctx.beginPath();
  ctx.moveTo(thermX - 50, setPoint);
  ctx.lineTo(thermX + thermWidth + 50, setPoint);
  ctx.stroke();
  ctx.setLineDash([]);

  ctx.fillStyle = '#27AE60';
  ctx.font = 'bold 12px Arial';
  ctx.textAlign = 'left';
  ctx.fillText('Set Point: 37°C', thermX + thermWidth + 60, setPoint + 4);

  // TOO HOT response (top)
  const hotY = thermY - 20;
  ctx.fillStyle = '#E74C3C';
  ctx.font = 'bold 14px Arial';
  ctx.textAlign = 'center';
  ctx.fillText('TOO HOT', centerX, hotY);

  // Hot response mechanisms
  const hotResponses = [
    { icon: '💧', text: 'Sweating', x: centerX - 120, y: hotY + 40 },
    { icon: '🔴', text: 'Vasodilation', x: centerX + 120, y: hotY + 40 },
    { icon: '🌬️', text: 'Panting', x: centerX - 120, y: hotY + 90 }
  ];

  hotResponses.forEach(response => {
    ctx.font = '24px Arial';
    ctx.fillText(response.icon, response.x, response.y);
    ctx.font = '11px Arial';
    ctx.fillText(response.text, response.x, response.y + 20);
  });

  // TOO COLD response (bottom)
  const coldY = thermY + thermHeight + 80;
  ctx.fillStyle = '#3498DB';
  ctx.font = 'bold 14px Arial';
  ctx.textAlign = 'center';
  ctx.fillText('TOO COLD', centerX, coldY);

  // Cold response mechanisms
  const coldResponses = [
    { icon: '🥶', text: 'Shivering', x: centerX - 120, y: coldY + 40 },
    { icon: '🔵', text: 'Vasoconstriction', x: centerX + 120, y: coldY + 40 },
    { icon: '🦆', text: 'Goosebumps', x: centerX - 120, y: coldY + 90 }
  ];

  coldResponses.forEach(response => {
    ctx.font = '24px Arial';
    ctx.fillText(response.icon, response.x, response.y);
    ctx.font = '11px Arial';
    ctx.fillText(response.text, response.x, response.y + 20);
  });

  ctx.restore();
}

static drawBloodGlucoseRegulation(ctx, x, y, width, height) {
  ctx.save();
  ctx.translate(x, y);

  const centerX = width / 2;
  const centerY = height / 2;

  // Draw blood vessel with glucose
  ctx.fillStyle = '#FFEBEE';
  ctx.fillRect(centerX - 150, centerY - 30, 300, 60);
  ctx.strokeStyle = '#E74C3C';
  ctx.lineWidth = 2;
  ctx.strokeRect(centerX - 150, centerY - 30, 300, 60);

  // Draw glucose molecules
  for (let i = 0; i < 8; i++) {
    const glX = centerX - 120 + i * 30;
    ctx.fillStyle = '#FFC107';
    ctx.beginPath();
    ctx.arc(glX, centerY, 8, 0, Math.PI * 2);
    ctx.fill();
    ctx.strokeStyle = '#F57C00';
    ctx.stroke();
  }

  ctx.fillStyle = '#2C3E50';
  ctx.font = 'bold 14px Arial';
  ctx.textAlign = 'center';
  ctx.fillText('Blood Glucose Level', centerX, centerY - 50);

  // HIGH GLUCOSE pathway (top)
  const highY = centerY - 150;
  
  // Pancreas (beta cells)
  ctx.fillStyle = '#9B59B6';
  ctx.beginPath();
  ctx.arc(centerX, highY, 40, 0, Math.PI * 2);
  ctx.fill();
  ctx.strokeStyle = '#2C3E50';
  ctx.lineWidth = 2;
  ctx.stroke();

  ctx.fillStyle = '#FFFFFF';
  ctx.font = 'bold 11px Arial';
  ctx.fillText('Pancreas', centerX, highY - 8);
  ctx.fillText('(β cells)', centerX, highY + 8);

  // Arrow up to pancreas
  ctx.strokeStyle = '#E74C3C';
  ctx.lineWidth = 3;
  ctx.beginPath();
  ctx.moveTo(centerX, centerY - 30);
  ctx.lineTo(centerX, highY + 40);
  ctx.stroke();

  // Arrowhead
  ctx.fillStyle = '#E74C3C';
  ctx.beginPath();
  ctx.moveTo(centerX, highY + 40);
  ctx.lineTo(centerX - 8, highY + 55);
  ctx.lineTo(centerX + 8, highY + 55);
  ctx.closePath();
  ctx.fill();

  ctx.fillStyle = '#E74C3C';
  ctx.font = '12px Arial';
  ctx.fillText('High Glucose', centerX + 60, highY + 20);

  // Insulin release
  ctx.fillStyle = '#8E44AD';
  ctx.font = 'bold 13px Arial';
  ctx.fillText('Releases INSULIN', centerX - 120, highY);

  // Insulin effects (left side)
  const insulinEffects = [
    'Glucose → Cells',
    'Glucose → Glycogen',
    'Blood Glucose ↓'
  ];

  insulinEffects.forEach((effect, i) => {
    const effY = highY + 80 + i * 30;
    ctx.fillStyle = '#8E44AD';
    ctx.font = '11px Arial';
    ctx.textAlign = 'right';
    ctx.fillText(effect, centerX - 170, effY);
  });

  // LOW GLUCOSE pathway (bottom)
  const lowY = centerY + 150;
  
  // Pancreas (alpha cells)
  ctx.fillStyle = '#E67E22';
  ctx.beginPath();
  ctx.arc(centerX, lowY, 40, 0, Math.PI * 2);
  ctx.fill();
  ctx.strokeStyle = '#2C3E50';
  ctx.lineWidth = 2;
  ctx.stroke();

  ctx.fillStyle = '#FFFFFF';
  ctx.font = 'bold 11px Arial';
  ctx.textAlign = 'center';
  ctx.fillText('Pancreas', centerX, lowY - 8);
  ctx.fillText('(α cells)', centerX, lowY + 8);

  // Arrow down to pancreas
  ctx.strokeStyle = '#3498DB';
  ctx.lineWidth = 3;
  ctx.beginPath();
  ctx.moveTo(centerX, centerY + 30);
  ctx.lineTo(centerX, lowY - 40);
  ctx.stroke();

  // Arrowhead
  ctx.fillStyle = '#3498DB';
  ctx.beginPath();
  ctx.moveTo(centerX, lowY - 40);
  ctx.lineTo(centerX - 8, lowY - 55);
  ctx.lineTo(centerX + 8, lowY - 55);
  ctx.closePath();
  ctx.fill();

  ctx.fillStyle = '#3498DB';
  ctx.font = '12px Arial';
  ctx.textAlign = 'center';
  ctx.fillText('Low Glucose', centerX + 60, lowY - 20);

  // Glucagon release
  ctx.fillStyle = '#D35400';
  ctx.font = 'bold 13px Arial';
  ctx.fillText('Releases GLUCAGON', centerX + 130, lowY);

  // Glucagon effects (right side)
  const glucagonEffects = [
    'Glycogen → Glucose',
    'Liver releases glucose',
    'Blood Glucose ↑'
  ];

  glucagonEffects.forEach((effect, i) => {
    const effY = lowY - 80 - i * 30;
    ctx.fillStyle = '#D35400';
    ctx.font = '11px Arial';
    ctx.textAlign = 'left';
    ctx.fillText(effect, centerX + 170, effY);
  });

  ctx.restore();
}

static drawWaterBalance(ctx, x, y, width, height) {
  ctx.save();
  ctx.translate(x, y);

  const centerX = width / 2;

  // Draw hypothalamus at top
  ctx.fillStyle = '#9B59B6';
  ctx.beginPath();
  ctx.arc(centerX, 80, 50, 0, Math.PI * 2);
  ctx.fill();
  ctx.strokeStyle = '#2C3E50';
  ctx.lineWidth = 2;
  ctx.stroke();

  ctx.fillStyle = '#FFFFFF';
  ctx.font = 'bold 13px Arial';
  ctx.textAlign = 'center';
  ctx.fillText('Hypothalamus', centerX, 80);

  // Draw pituitary gland
  ctx.fillStyle = '#E67E22';
  ctx.beginPath();
  ctx.ellipse(centerX, 150, 30, 20, 0, 0, Math.PI * 2);
  ctx.fill();
  ctx.stroke();

  ctx.fillStyle = '#FFFFFF';
  ctx.font = 'bold 10px Arial';
  ctx.fillText('Pituitary', centerX, 150);

  // ADH pathway
  ctx.strokeStyle = '#3498DB';
  ctx.lineWidth = 3;
  ctx.beginPath();
  ctx.moveTo(centerX, 130);
  ctx.lineTo(centerX, 170);
  ctx.stroke();

  ctx.fillStyle = '#3498DB';
  ctx.font = 'italic 11px Arial';
  ctx.fillText('ADH', centerX + 25, 150);

  // Draw kidneys
  const kidneyY = 250;
  const leftKidneyX = centerX - 100;
  const rightKidneyX = centerX + 100;

  // Left kidney
  ctx.fillStyle = '#8B4513';
  ctx.beginPath();
  ctx.ellipse(leftKidneyX, kidneyY, 40, 60, 0, 0, Math.PI * 2);
  ctx.fill();
  ctx.strokeStyle = '#2C3E50';
  ctx.lineWidth = 2;
  ctx.stroke();

  // Right kidney
  ctx.beginPath();
  ctx.ellipse(rightKidneyX, kidneyY, 40, 60, 0, 0, Math.PI * 2);
  ctx.fill();
  ctx.stroke();

  ctx.fillStyle = '#FFFFFF';
  ctx.font = 'bold 12px Arial';
  ctx.textAlign = 'center';
  ctx.fillText('Kidney', leftKidneyX, kidneyY);
  ctx.fillText('Kidney', rightKidneyX, kidneyY);

  // Arrows to kidneys
  ctx.strokeStyle = '#3498DB';
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.moveTo(centerX, 170);
  ctx.lineTo(leftKidneyX, kidneyY - 60);
  ctx.stroke();
  ctx.beginPath();
  ctx.moveTo(centerX, 170);
  ctx.lineTo(rightKidneyX, kidneyY - 60);
  ctx.stroke();

  // TWO PATHWAYS: High blood osmolarity (left) and Low blood osmolarity (right)
  
  // LEFT: High osmolarity pathway
  ctx.fillStyle = '#E74C3C';
  ctx.font = 'bold 12px Arial';
  ctx.textAlign = 'center';
  ctx.fillText('High Blood Osmolarity', 150, 30);
  ctx.font = '10px Arial';
  ctx.fillText('(Dehydration)', 150, 45);

  const leftEffects = [
    '↑ ADH Release',
    '↑ Water Reabsorption',
    '↓ Urine Output',
    'Concentrated Urine'
  ];

  leftEffects.forEach((effect, i) => {
    ctx.fillStyle = '#E74C3C';
    ctx.font = '11px Arial';
    ctx.textAlign = 'left';
    ctx.fillText(effect, 20, 350 + i * 25);
  });

  // RIGHT: Low osmolarity pathway
  ctx.fillStyle = '#3498DB';
  ctx.font = 'bold 12px Arial';
  ctx.textAlign = 'center';
  ctx.fillText('Low Blood Osmolarity', width - 150, 30);
  ctx.font = '10px Arial';
  ctx.fillText('(Overhydration)', width - 150, 45);

  const rightEffects = [
    '↓ ADH Release',
    '↓ Water Reabsorption',
    '↑ Urine Output',
    'Dilute Urine'
  ];

  rightEffects.forEach((effect, i) => {
    ctx.fillStyle = '#3498DB';
    ctx.font = '11px Arial';
    ctx.textAlign = 'right';
    ctx.fillText(effect, width - 20, 350 + i * 25);
  });

  // Draw bladder at bottom
  ctx.fillStyle = '#F9E79F';
  ctx.beginPath();
  ctx.ellipse(centerX, height - 60, 50, 40, 0, 0, Math.PI * 2);
  ctx.fill();
  ctx.strokeStyle = '#2C3E50';
  ctx.lineWidth = 2;
  ctx.stroke();

  ctx.fillStyle = '#2C3E50';
  ctx.font = 'bold 11px Arial';
  ctx.textAlign = 'center';
  ctx.fillText('Bladder', centerX, height - 60);

  ctx.restore();
}

static drawNephron(ctx, x, y, width, height) {
  ctx.save();
  ctx.translate(x, y);

  const startX = 100;
  const startY = 50;

  // Glomerulus (ball of capillaries)
  ctx.fillStyle = '#E74C3C';
  ctx.beginPath();
  ctx.arc(startX, startY + 50, 30, 0, Math.PI * 2);
  ctx.fill();
  ctx.strokeStyle = '#C0392B';
  ctx.lineWidth = 2;
  ctx.stroke();

  // Draw capillaries inside glomerulus
  for (let i = 0; i < 8; i++) {
    const angle = (i * Math.PI * 2) / 8;
    ctx.strokeStyle = '#C0392B';
    ctx.lineWidth = 1.5;
    ctx.beginPath();
    ctx.moveTo(startX, startY + 50);
    ctx.lineTo(startX + 20 * Math.cos(angle), startY + 50 + 20 * Math.sin(angle));
    ctx.stroke();
  }

  // Bowman's Capsule
  ctx.strokeStyle = '#3498DB';
  ctx.lineWidth = 3;
  ctx.beginPath();
  ctx.arc(startX, startY + 50, 45, 0, Math.PI * 2);
  ctx.stroke();

  ctx.fillStyle = '#3498DB';
  ctx.font = 'bold 11px Arial';
  ctx.textAlign = 'center';
  ctx.fillText("Bowman's", startX, startY + 20);
  ctx.fillText('Capsule', startX, startY + 33);

  // Proximal Convoluted Tubule (PCT)
  const pctPath = [
    { x: startX + 45, y: startY + 50 },
    { x: startX + 80, y: startY + 30 },
    { x: startX + 120, y: startY + 50 },
    { x: startX + 140, y: startY + 80 }
  ];

  ctx.strokeStyle = '#2ECC71';
  ctx.lineWidth = 15;
  ctx.lineCap = 'round';
  ctx.lineJoin = 'round';
  ctx.beginPath();
  ctx.moveTo(pctPath[0].x, pctPath[0].y);
  for (let i = 1; i < pctPath.length; i++) {
    ctx.lineTo(pctPath[i].x, pctPath[i].y);
  }
  ctx.stroke();

  ctx.fillStyle = '#27AE60';
  ctx.font = 'bold 10px Arial';
  ctx.textAlign = 'center';
  ctx.fillText('PCT', startX + 110, startY + 25);

  // Loop of Henle
  const loopStartY = startY + 80;
  const loopBottomY = startY + 300;
  const descendingX = startX + 140;
  const ascendingX = startX + 200;

  // Descending limb
  ctx.strokeStyle = '#F39C12';
  ctx.lineWidth = 12;
  ctx.beginPath();
  ctx.moveTo(descendingX, loopStartY);
  ctx.lineTo(descendingX, loopBottomY);
  ctx.stroke();

  // Bottom curve
  ctx.beginPath();
  ctx.arc(descendingX + 30, loopBottomY, 30, Math.PI, 0);
  ctx.stroke();

  // Ascending limb
  ctx.strokeStyle = '#E67E22';
  ctx.lineWidth = 12;
  ctx.beginPath();
  ctx.moveTo(ascendingX, loopBottomY);
  ctx.lineTo(ascendingX, loopStartY);
  ctx.stroke();

  ctx.fillStyle = '#F39C12';
  ctx.font = 'bold 10px Arial';
  ctx.textAlign = 'center';
  ctx.save();
  ctx.translate(descendingX - 20, startY + 180);
  ctx.rotate(-Math.PI / 2);
  ctx.fillText('Descending', 0, 0);
  ctx.restore();

  ctx.fillStyle = '#E67E22';
  ctx.save();
  ctx.translate(ascendingX + 20, startY + 180);
  ctx.rotate(Math.PI / 2);
  ctx.fillText('Ascending', 0, 0);
  ctx.restore();

  ctx.fillStyle = '#2C3E50';
  ctx.font = 'bold 11px Arial';
  ctx.textAlign = 'center';
  ctx.fillText('Loop of Henle', descendingX + 30, loopBottomY + 50);

  // Distal Convoluted Tubule (DCT)
  const dctPath = [
    { x: ascendingX, y: loopStartY },
    { x: ascendingX + 40, y: loopStartY - 20 },
    { x: ascendingX + 80, y: loopStartY },
    { x: ascendingX + 100, y: loopStartY + 30 }
  ];

  ctx.strokeStyle = '#9B59B6';
  ctx.lineWidth = 15;
  ctx.beginPath();
  ctx.moveTo(dctPath[0].x, dctPath[0].y);
  for (let i = 1; i < dctPath.length; i++) {
    ctx.lineTo(dctPath[i].x, dctPath[i].y);
  }
  ctx.stroke();

  ctx.fillStyle = '#8E44AD';
  ctx.font = 'bold 10px Arial';
  ctx.textAlign = 'center';
  ctx.fillText('DCT', ascendingX + 60, loopStartY - 30);

  // Collecting Duct
  const collectingX = ascendingX + 100;
  ctx.strokeStyle = '#34495E';
  ctx.lineWidth = 15;
  ctx.beginPath();
  ctx.moveTo(collectingX, loopStartY + 30);
  ctx.lineTo(collectingX, loopBottomY + 80);
  ctx.stroke();

  ctx.fillStyle = '#2C3E50';
  ctx.font = 'bold 10px Arial';
  ctx.save();
  ctx.translate(collectingX + 25, startY + 200);
  ctx.rotate(Math.PI / 2);
  ctx.fillText('Collecting Duct', 0, 0);
  ctx.restore();

  // Afferent and Efferent arterioles
  ctx.strokeStyle = '#E74C3C';
  ctx.lineWidth = 4;
  ctx.beginPath();
  ctx.moveTo(20, startY + 50);
  ctx.lineTo(startX - 45, startY + 50);
  ctx.stroke();

  ctx.fillStyle = '#E74C3C';
  ctx.font = '10px Arial';
  ctx.textAlign = 'right';
  ctx.fillText('Afferent', startX - 50, startY + 45);
  ctx.fillText('arteriole', startX - 50, startY + 58);

  ctx.strokeStyle = '#C0392B';
  ctx.beginPath();
  ctx.moveTo(startX + 35, startY + 80);
  ctx.lineTo(startX + 35, startY + 120);
  ctx.stroke();

  ctx.fillStyle = '#C0392B';
  ctx.font = '10px Arial';
  ctx.textAlign = 'left';
  ctx.fillText('Efferent', startX + 40, startY + 100);
  ctx.fillText('arteriole', startX + 40, startY + 113);

  // Process labels with arrows
  const processes = [
    { text: 'Filtration', x: startX + 80, y: startY + 50, color: '#3498DB' },
    { text: 'Reabsorption', x: descendingX - 60, y: startY + 150, color: '#2ECC71' },
    { text: 'Secretion', x: ascendingX + 50, y: startY + 150, color: '#9B59B6' }
  ];

  processes.forEach(proc => {
    ctx.fillStyle = proc.color;
    ctx.font = 'bold 11px Arial';
    ctx.textAlign = 'center';
    ctx.fillText(proc.text, proc.x, proc.y);
  });

  ctx.restore();
}


static drawFiveKingdoms(ctx, x, y, width, height) {
  ctx.save();
  ctx.translate(x, y);

  const kingdoms = [
    { name: 'Monera', color: '#3498DB', examples: ['Bacteria', 'Blue-green algae'] },
    { name: 'Protista', color: '#2ECC71', examples: ['Amoeba', 'Paramecium'] },
    { name: 'Fungi', color: '#E67E22', examples: ['Mushrooms', 'Yeast'] },
    { name: 'Plantae', color: '#27AE60', examples: ['Trees', 'Flowers'] },
    { name: 'Animalia', color: '#E74C3C', examples: ['Humans', 'Birds'] }
  ];

  const boxWidth = width / 5 - 10;
  const boxHeight = height * 0.7;

  kingdoms.forEach((kingdom, index) => {
    const xPos = index * (boxWidth + 10);
    
    // Draw kingdom box
    ctx.fillStyle = kingdom.color;
    ctx.fillRect(xPos, 50, boxWidth, boxHeight);
    ctx.strokeStyle = '#2C3E50';
    ctx.lineWidth = 2;
    ctx.strokeRect(xPos, 50, boxWidth, boxHeight);

    // Kingdom name
    ctx.fillStyle = '#FFFFFF';
    ctx.font = 'bold 14px Arial';
    ctx.textAlign = 'center';
    ctx.fillText(kingdom.name, xPos + boxWidth / 2, 80);

    // Examples
    ctx.font = '11px Arial';
    kingdom.examples.forEach((example, i) => {
      ctx.fillText(example, xPos + boxWidth / 2, 110 + i * 20);
    });
  });

  ctx.restore();
}

static drawThreeDomains(ctx, x, y, width, height) {
  ctx.save();
  ctx.translate(x, y);

  const domains = [
    { name: 'Bacteria', color: '#3498DB', cell: 'Prokaryotic', features: ['No nucleus', 'Peptidoglycan wall'] },
    { name: 'Archaea', color: '#9B59B6', cell: 'Prokaryotic', features: ['No nucleus', 'Unique lipids'] },
    { name: 'Eukarya', color: '#E74C3C', cell: 'Eukaryotic', features: ['Nucleus present', 'Membrane organelles'] }
  ];

  const boxWidth = width / 3 - 20;
  const boxHeight = height * 0.8;

  domains.forEach((domain, index) => {
    const xPos = index * (boxWidth + 30);
    
    // Draw domain box
    ctx.fillStyle = domain.color;
    ctx.fillRect(xPos, 30, boxWidth, boxHeight);
    ctx.strokeStyle = '#2C3E50';
    ctx.lineWidth = 3;
    ctx.strokeRect(xPos, 30, boxWidth, boxHeight);

    // Domain name
    ctx.fillStyle = '#FFFFFF';
    ctx.font = 'bold 18px Arial';
    ctx.textAlign = 'center';
    ctx.fillText(domain.name, xPos + boxWidth / 2, 60);

    // Cell type
    ctx.font = 'italic 13px Arial';
    ctx.fillText(`(${domain.cell})`, xPos + boxWidth / 2, 85);

    // Features
    ctx.font = '12px Arial';
    domain.features.forEach((feature, i) => {
      ctx.fillText(feature, xPos + boxWidth / 2, 120 + i * 25);
    });
  });

  ctx.restore();
}

static drawTaxonomyHierarchy(ctx, x, y, width, height, showExample = true) {
  ctx.save();
  ctx.translate(x, y);

  const levels = [
    { name: 'Kingdom', example: 'Animalia', color: '#E74C3C' },
    { name: 'Phylum', example: 'Chordata', color: '#E67E22' },
    { name: 'Class', example: 'Mammalia', color: '#F39C12' },
    { name: 'Order', example: 'Carnivora', color: '#F1C40F' },
    { name: 'Family', example: 'Felidae', color: '#2ECC71' },
    { name: 'Genus', example: 'Panthera', color: '#3498DB' },
    { name: 'Species', example: 'leo', color: '#9B59B6' }
  ];

  const startWidth = width * 0.9;
  const levelHeight = height / levels.length - 5;

  levels.forEach((level, index) => {
    const levelWidth = startWidth - (index * startWidth / levels.length);
    const xPos = (width - levelWidth) / 2;
    const yPos = index * (levelHeight + 5);

    // Draw level box (trapezoid shape)
    ctx.fillStyle = level.color;
    ctx.beginPath();
    ctx.moveTo(xPos, yPos);
    ctx.lineTo(xPos + levelWidth, yPos);
    ctx.lineTo(xPos + levelWidth - 20, yPos + levelHeight);
    ctx.lineTo(xPos + 20, yPos + levelHeight);
    ctx.closePath();
    ctx.fill();
    ctx.strokeStyle = '#2C3E50';
    ctx.lineWidth = 2;
    ctx.stroke();

    // Level name
    ctx.fillStyle = '#FFFFFF';
    ctx.font = 'bold 14px Arial';
    ctx.textAlign = 'left';
    ctx.fillText(level.name, xPos + 30, yPos + levelHeight / 2 + 5);

    // Example (if enabled)
    if (showExample) {
      ctx.font = 'italic 12px Arial';
      ctx.textAlign = 'right';
      ctx.fillText(level.example, xPos + levelWidth - 30, yPos + levelHeight / 2 + 5);
    }
  });

  ctx.restore();
}

static drawDichotomousKey(ctx, x, y, width, height, keyType = 'leaves') {
  ctx.save();
  ctx.translate(x, y);

  const nodeRadius = 25;
  const verticalSpacing = height / 5;
  const horizontalSpacing = width / 4;

  // Draw key structure
  const drawNode = (text, x, y, isTerminal = false) => {
    ctx.fillStyle = isTerminal ? '#2ECC71' : '#3498DB';
    ctx.beginPath();
    ctx.arc(x, y, nodeRadius, 0, Math.PI * 2);
    ctx.fill();
    ctx.strokeStyle = '#2C3E50';
    ctx.lineWidth = 2;
    ctx.stroke();

    ctx.fillStyle = '#FFFFFF';
    ctx.font = 'bold 11px Arial';
    ctx.textAlign = 'center';
    ctx.fillText(text, x, y + 4);
  };

  const drawBranch = (x1, y1, x2, y2, label) => {
    ctx.strokeStyle = '#34495E';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.stroke();

    const midX = (x1 + x2) / 2;
    const midY = (y1 + y2) / 2;
    ctx.fillStyle = '#E67E22';
    ctx.font = '10px Arial';
    ctx.textAlign = 'center';
    ctx.fillText(label, midX, midY - 5);
  };

  // Root node
  drawNode('1', width / 2, verticalSpacing);

  // First level branches
  drawBranch(width / 2, verticalSpacing + nodeRadius, width / 4, verticalSpacing * 2 - nodeRadius, 
    keyType === 'leaves' ? 'Simple' : 'Wings present');
  drawBranch(width / 2, verticalSpacing + nodeRadius, width * 3/4, verticalSpacing * 2 - nodeRadius, 
    keyType === 'leaves' ? 'Compound' : 'No wings');

  drawNode('2', width / 4, verticalSpacing * 2);
  drawNode('3', width * 3/4, verticalSpacing * 2);

  // Second level branches
  drawBranch(width / 4, verticalSpacing * 2 + nodeRadius, width / 8, verticalSpacing * 3 - nodeRadius, 
    keyType === 'leaves' ? 'Smooth' : '4 legs');
  drawBranch(width / 4, verticalSpacing * 2 + nodeRadius, width * 3/8, verticalSpacing * 3 - nodeRadius, 
    keyType === 'leaves' ? 'Toothed' : '6+ legs');

  // Terminal nodes
  const terminals = keyType === 'leaves' 
    ? ['Oak', 'Maple', 'Ash', 'Locust']
    : ['Bird', 'Bat', 'Dog', 'Insect'];

  drawNode(terminals[0], width / 8, verticalSpacing * 3, true);
  drawNode(terminals[1], width * 3/8, verticalSpacing * 3, true);

  drawBranch(width * 3/4, verticalSpacing * 2 + nodeRadius, width * 5/8, verticalSpacing * 3 - nodeRadius, 
    keyType === 'leaves' ? 'Alternate' : 'Fur');
  drawBranch(width * 3/4, verticalSpacing * 2 + nodeRadius, width * 7/8, verticalSpacing * 3 - nodeRadius, 
    keyType === 'leaves' ? 'Opposite' : 'Exoskeleton');

  drawNode(terminals[2], width * 5/8, verticalSpacing * 3, true);
  drawNode(terminals[3], width * 7/8, verticalSpacing * 3, true);

  ctx.restore();
}

static drawCladogram(ctx, x, y, width, height) {
  ctx.save();
  ctx.translate(x, y);

  const species = [
    { name: 'Lancelet', traits: 0 },
    { name: 'Lamprey', traits: 1 },
    { name: 'Tuna', traits: 2 },
    { name: 'Salamander', traits: 3 },
    { name: 'Turtle', traits: 4 },
    { name: 'Leopard', traits: 5 }
  ];

  const traits = [
    'Vertebral column',
    'Jaws',
    'Lungs',
    'Claws/nails',
    'Fur'
  ];

  const baseY = height - 50;
  const spacing = width / (species.length + 1);
  const traitSpacing = (height - 100) / traits.length;

  // Draw horizontal timeline
  ctx.strokeStyle = '#34495E';
  ctx.lineWidth = 3;
  ctx.beginPath();
  ctx.moveTo(spacing, baseY);
  ctx.lineTo(width - spacing, baseY);
  ctx.stroke();

  // Draw species branches
  species.forEach((sp, index) => {
    const xPos = spacing * (index + 1);
    const branchHeight = sp.traits * traitSpacing;

    // Vertical branch
    ctx.strokeStyle = '#3498DB';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(xPos, baseY);
    ctx.lineTo(xPos, baseY - branchHeight);
    ctx.stroke();

    // Horizontal connection to main line
    if (sp.traits > 0) {
      ctx.beginPath();
      ctx.moveTo(xPos, baseY - branchHeight);
      ctx.lineTo(width - spacing, baseY - branchHeight);
      ctx.stroke();
    }

    // Species name
    ctx.fillStyle = '#2C3E50';
    ctx.font = 'bold 12px Arial';
    ctx.textAlign = 'center';
    ctx.save();
    ctx.translate(xPos, baseY + 15);
    ctx.rotate(-Math.PI / 4);
    ctx.fillText(sp.name, 0, 0);
    ctx.restore();

    // Species circle
    ctx.fillStyle = '#E74C3C';
    ctx.beginPath();
    ctx.arc(xPos, baseY, 5, 0, Math.PI * 2);
    ctx.fill();
  });

  // Draw trait markers
  traits.forEach((trait, index) => {
    const yPos = baseY - (index + 1) * traitSpacing;
    
    // Trait line
    ctx.strokeStyle = '#E67E22';
    ctx.lineWidth = 2;
    ctx.setLineDash([5, 5]);
    ctx.beginPath();
    ctx.moveTo(spacing, yPos);
    ctx.lineTo(width - spacing, yPos);
    ctx.stroke();
    ctx.setLineDash([]);

    // Trait label
    ctx.fillStyle = '#E67E22';
    ctx.font = '11px Arial';
    ctx.textAlign = 'right';
    ctx.fillText(trait, spacing - 10, yPos + 4);

    // Trait marker
    ctx.fillStyle = '#E67E22';
    ctx.beginPath();
    ctx.arc(spacing * (index + 2), yPos, 6, 0, Math.PI * 2);
    ctx.fill();
  });

  ctx.restore();
}






static drawGeneticEngineering(ctx, x, y, width, height) {
  ctx.save();
  ctx.translate(x, y);
  
  const stepHeight = height / 5;
  
  // Step 1: Source organism with desired gene
  ctx.fillStyle = '#E8F5E9';
  ctx.strokeStyle = '#4CAF50';
  ctx.lineWidth = 3;
  ctx.beginPath();
  ctx.ellipse(width * 0.15, stepHeight * 0.5, width * 0.08, height * 0.06, 0, 0, Math.PI * 2);
  ctx.fill();
  ctx.stroke();
  
  // DNA in source organism
  ctx.strokeStyle = '#2196F3';
  ctx.lineWidth = 3;
  ctx.beginPath();
  ctx.arc(width * 0.15, stepHeight * 0.5, width * 0.04, 0, Math.PI * 2);
  ctx.stroke();
  
  // Desired gene (highlighted)
  ctx.strokeStyle = '#FF5722';
  ctx.lineWidth = 4;
  ctx.beginPath();
  ctx.arc(width * 0.15, stepHeight * 0.5, width * 0.04, 0, Math.PI);
  ctx.stroke();
  
  // Label
  ctx.fillStyle = '#2C3E50';
  ctx.font = 'bold 12px Arial';
  ctx.textAlign = 'center';
  ctx.fillText('1. Source', width * 0.15, stepHeight * 0.75);
  ctx.font = '10px Arial';
  ctx.fillText('(Desired Gene)', width * 0.15, stepHeight * 0.8);
  
  // Arrow
  this.drawArrow(ctx, width * 0.23, stepHeight * 0.5, width * 0.32, stepHeight * 0.5, '#555', 2);
  
  // Step 2: Gene isolation using restriction enzymes
  ctx.fillStyle = '#FFF3E0';
  ctx.strokeStyle = '#FF9800';
  ctx.lineWidth = 2;
  ctx.fillRect(width * 0.35, stepHeight * 0.35, width * 0.15, stepHeight * 0.3);
  ctx.strokeRect(width * 0.35, stepHeight * 0.35, width * 0.15, stepHeight * 0.3);
  
  // Restriction enzyme (scissors symbol)
  ctx.strokeStyle = '#F44336';
  ctx.lineWidth = 3;
  // Scissors blade 1
  ctx.beginPath();
  ctx.moveTo(width * 0.38, stepHeight * 0.45);
  ctx.lineTo(width * 0.42, stepHeight * 0.5);
  ctx.stroke();
  // Scissors blade 2
  ctx.beginPath();
  ctx.moveTo(width * 0.38, stepHeight * 0.55);
  ctx.lineTo(width * 0.42, stepHeight * 0.5);
  ctx.stroke();
  
  // DNA strand being cut
  ctx.strokeStyle = '#2196F3';
  ctx.lineWidth = 3;
  ctx.beginPath();
  ctx.moveTo(width * 0.42, stepHeight * 0.5);
  ctx.lineTo(width * 0.48, stepHeight * 0.5);
  ctx.stroke();
  
  // Isolated gene
  ctx.strokeStyle = '#FF5722';
  ctx.lineWidth = 4;
  ctx.beginPath();
  ctx.moveTo(width * 0.42, stepHeight * 0.5);
  ctx.lineTo(width * 0.45, stepHeight * 0.5);
  ctx.stroke();
  
  // Label
  ctx.fillStyle = '#2C3E50';
  ctx.font = 'bold 12px Arial';
  ctx.textAlign = 'center';
  ctx.fillText('2. Isolation', width * 0.425, stepHeight * 0.7);
  ctx.font = '10px Arial';
  ctx.fillText('(Restriction Enzyme)', width * 0.425, stepHeight * 0.75);
  
  // Arrow
  this.drawArrow(ctx, width * 0.5, stepHeight * 0.5, width * 0.57, stepHeight * 1.5, '#555', 2);
  
  // Step 3: Plasmid vector
  ctx.fillStyle = '#E1F5FE';
  ctx.strokeStyle = '#03A9F4';
  ctx.lineWidth = 3;
  ctx.beginPath();
  ctx.arc(width * 0.65, stepHeight * 1.5, width * 0.06, 0, Math.PI * 2);
  ctx.fill();
  ctx.stroke();
  
  // Cut plasmid (opening)
  ctx.strokeStyle = '#F44336';
  ctx.lineWidth = 4;
  ctx.beginPath();
  ctx.arc(width * 0.65, stepHeight * 1.5, width * 0.06, -0.3, 0.3);
  ctx.stroke();
  
  // Label
  ctx.fillStyle = '#2C3E50';
  ctx.font = 'bold 12px Arial';
  ctx.textAlign = 'center';
  ctx.fillText('3. Plasmid Vector', width * 0.65, stepHeight * 1.8);
  ctx.font = '10px Arial';
  ctx.fillText('(Cut open)', width * 0.65, stepHeight * 1.85);
  
  // Arrow
  this.drawArrow(ctx, width * 0.58, stepHeight * 1.5, width * 0.52, stepHeight * 2.5, '#555', 2);
  
  // Step 4: Gene insertion (recombinant DNA)
  ctx.fillStyle = '#F3E5F5';
  ctx.strokeStyle = '#9C27B0';
  ctx.lineWidth = 2;
  ctx.fillRect(width * 0.35, stepHeight * 2.35, width * 0.15, stepHeight * 0.3);
  ctx.strokeRect(width * 0.35, stepHeight * 2.35, width * 0.15, stepHeight * 0.3);
  
  // DNA ligase (glue symbol)
  ctx.fillStyle = '#4CAF50';
  ctx.font = 'bold 14px Arial';
  ctx.textAlign = 'center';
  ctx.fillText('DNA', width * 0.425, stepHeight * 2.5);
  ctx.fillText('Ligase', width * 0.425, stepHeight * 2.55);
  
  // Recombinant plasmid
  ctx.strokeStyle = '#9C27B0';
  ctx.lineWidth = 3;
  ctx.beginPath();
  ctx.arc(width * 0.425, stepHeight * 2.65, width * 0.04, 0, Math.PI * 2);
  ctx.stroke();
  
  // Inserted gene (highlighted in plasmid)
  ctx.strokeStyle = '#FF5722';
  ctx.lineWidth = 4;
  ctx.beginPath();
  ctx.arc(width * 0.425, stepHeight * 2.65, width * 0.04, 0, Math.PI);
  ctx.stroke();
  
  // Label
  ctx.fillStyle = '#2C3E50';
  ctx.font = 'bold 12px Arial';
  ctx.textAlign = 'center';
  ctx.fillText('4. Insertion', width * 0.425, stepHeight * 2.85);
  ctx.font = '10px Arial';
  ctx.fillText('(Recombinant DNA)', width * 0.425, stepHeight * 2.9);
  
  // Arrow
  this.drawArrow(ctx, width * 0.35, stepHeight * 2.5, width * 0.28, stepHeight * 3.5, '#555', 2);
  
  // Step 5: Transformation into host cell
  ctx.fillStyle = '#FFF9C4';
  ctx.strokeStyle = '#FBC02D';
  ctx.lineWidth = 3;
  ctx.beginPath();
  ctx.ellipse(width * 0.15, stepHeight * 3.5, width * 0.08, height * 0.06, 0, 0, Math.PI * 2);
  ctx.fill();
  ctx.stroke();
  
  // Recombinant plasmid inside host
  ctx.strokeStyle = '#9C27B0';
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.arc(width * 0.15, stepHeight * 3.5, width * 0.03, 0, Math.PI * 2);
  ctx.stroke();
  
  // Inserted gene
  ctx.strokeStyle = '#FF5722';
  ctx.lineWidth = 3;
  ctx.beginPath();
  ctx.arc(width * 0.15, stepHeight * 3.5, width * 0.03, 0, Math.PI);
  ctx.stroke();
  
  // Label
  ctx.fillStyle = '#2C3E50';
  ctx.font = 'bold 12px Arial';
  ctx.textAlign = 'center';
  ctx.fillText('5. Transformation', width * 0.15, stepHeight * 3.8);
  ctx.font = '10px Arial';
  ctx.fillText('(into Host Cell)', width * 0.15, stepHeight * 3.85);
  
  // Arrow
  this.drawArrow(ctx, width * 0.23, stepHeight * 3.5, width * 0.32, stepHeight * 4.5, '#555', 2);
  
  // Step 6: Cloning/Expression
  // Multiple transformed cells
  ctx.fillStyle = '#FFF9C4';
  ctx.strokeStyle = '#FBC02D';
  ctx.lineWidth = 2;
  
  for(let i = 0; i < 3; i++) {
    for(let j = 0; j < 2; j++) {
      const cellX = width * (0.4 + i * 0.08);
      const cellY = stepHeight * (4.3 + j * 0.15);
      
      ctx.beginPath();
      ctx.ellipse(cellX, cellY, width * 0.035, height * 0.025, 0, 0, Math.PI * 2);
      ctx.fill();
      ctx.stroke();
      
      // Plasmid inside
      ctx.strokeStyle = '#9C27B0';
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.arc(cellX, cellY, width * 0.015, 0, Math.PI * 2);
      ctx.stroke();
      ctx.strokeStyle = '#FBC02D';
      ctx.lineWidth = 2;
    }
  }
  
  // Label
  ctx.fillStyle = '#2C3E50';
  ctx.font = 'bold 12px Arial';
  ctx.textAlign = 'center';
  ctx.fillText('6. Cloning/Expression', width * 0.48, stepHeight * 4.7);
  ctx.font = '10px Arial';
  ctx.fillText('(Produce desired protein)', width * 0.48, stepHeight * 4.75);
  
  // Product (protein molecules)
  ctx.fillStyle = '#4CAF50';
  for(let i = 0; i < 8; i++) {
    const proteinX = width * (0.7 + (i % 4) * 0.05);
    const proteinY = stepHeight * (4.3 + Math.floor(i / 4) * 0.15);
    ctx.beginPath();
    ctx.arc(proteinX, proteinY, width * 0.015, 0, Math.PI * 2);
    ctx.fill();
  }
  
  ctx.fillStyle = '#2C3E50';
  ctx.font = 'bold 11px Arial';
  ctx.fillText('Desired', width * 0.85, stepHeight * 4.4);
  ctx.fillText('Protein', width * 0.85, stepHeight * 4.45);
  
  ctx.restore();
}

static drawGelElectrophoresis(ctx, x, y, width, height, showBands = true) {
  ctx.save();
  ctx.translate(x, y);
  
  // Gel apparatus
  ctx.fillStyle = '#E8EAF6';
  ctx.strokeStyle = '#3F51B5';
  ctx.lineWidth = 3;
  ctx.fillRect(width * 0.2, height * 0.2, width * 0.6, height * 0.6);
  ctx.strokeRect(width * 0.2, height * 0.2, width * 0.6, height * 0.6);
  
  // Gel (lighter color)
  ctx.fillStyle = '#C5CAE9';
  ctx.fillRect(width * 0.22, height * 0.22, width * 0.56, height * 0.56);
  
  // Negative electrode (top - black)
  ctx.fillStyle = '#212121';
  ctx.fillRect(width * 0.15, height * 0.15, width * 0.7, height * 0.03);
  
  // Label
  ctx.fillStyle = '#FFFFFF';
  ctx.font = 'bold 12px Arial';
  ctx.textAlign = 'center';
  ctx.fillText('- (Negative)', width * 0.5, height * 0.165);
  
  // Positive electrode (bottom - red)
  ctx.fillStyle = '#D32F2F';
  ctx.fillRect(width * 0.15, height * 0.82, width * 0.7, height * 0.03);
  
  // Label
  ctx.fillStyle = '#FFFFFF';
  ctx.fillText('+ (Positive)', width * 0.5, height * 0.84);
  
  // Wells (loading wells at top)
  ctx.fillStyle = '#5C6BC0';
  const numWells = 6;
  for(let i = 0; i < numWells; i++) {
    const wellX = width * (0.25 + i * 0.1);
    ctx.fillRect(wellX, height * 0.24, width * 0.04, height * 0.04);
  }
  
  // Sample labels above wells
  ctx.fillStyle = '#2C3E50';
  ctx.font = '10px Arial';
  ctx.textAlign = 'center';
  const sampleLabels = ['Ladder', 'S1', 'S2', 'S3', 'S4', 'Control'];
  for(let i = 0; i < numWells; i++) {
    const wellX = width * (0.27 + i * 0.1);
    ctx.fillText(sampleLabels[i], wellX, height * 0.22);
  }
  
  if(showBands) {
    // DNA bands (different sizes migrate different distances)
    // Ladder (size standard)
    const ladderBands = [0.35, 0.45, 0.55, 0.65, 0.72];
    ctx.fillStyle = '#FF6B9D';
    ladderBands.forEach(pos => {
      ctx.fillRect(width * 0.25, height * pos, width * 0.04, height * 0.015);
    });
    
    // Sample 1
    ctx.fillStyle = '#4ECDC4';
    ctx.fillRect(width * 0.35, height * 0.55, width * 0.04, height * 0.02);
    ctx.fillRect(width * 0.35, height * 0.65, width * 0.04, height * 0.015);
    
    // Sample 2
    ctx.fillRect(width * 0.45, height * 0.45, width * 0.04, height * 0.02);
    ctx.fillRect(width * 0.45, height * 0.65, width * 0.04, height * 0.015);
    
    // Sample 3 (similar to Sample 1 - match)
    ctx.fillStyle = '#4ECDC4';
    ctx.fillRect(width * 0.55, height * 0.55, width * 0.04, height * 0.02);
    ctx.fillRect(width * 0.55, height * 0.65, width * 0.04, height * 0.015);
    
    // Sample 4
    ctx.fillRect(width * 0.65, height * 0.4, width * 0.04, height * 0.02);
    ctx.fillRect(width * 0.65, height * 0.72, width * 0.04, height * 0.015);
    
    // Control
    ctx.fillStyle = '#95A5A6';
    ctx.fillRect(width * 0.75, height * 0.6, width * 0.04, height * 0.02);
  }
  
  // Electric field arrows
  ctx.strokeStyle = '#FFC107';
  ctx.lineWidth = 2;
  for(let i = 0; i < 4; i++) {
    const arrowX = width * (0.1 + i * 0.02);
    this.drawArrow(ctx, arrowX, height * 0.3, arrowX, height * 0.7, '#FFC107', 2);
  }
  
  ctx.fillStyle = '#FFC107';
  ctx.font = 'bold 11px Arial';
  ctx.textAlign = 'left';
  ctx.fillText('DNA', width * 0.05, height * 0.45);
  ctx.fillText('Migration', width * 0.05, height * 0.5);
  
  // Size indication
  ctx.fillStyle = '#2C3E50';
  ctx.font = '10px Arial';
  ctx.textAlign = 'right';
  ctx.fillText('Larger', width * 0.95, height * 0.3);
  ctx.fillText('fragments', width * 0.95, height * 0.33);
  ctx.fillText('(slower)', width * 0.95, height * 0.36);
  
  ctx.fillText('Smaller', width * 0.95, height * 0.7);
  ctx.fillText('fragments', width * 0.95, height * 0.73);
  ctx.fillText('(faster)', width * 0.95, height * 0.76);
  
  ctx.restore();
}

static drawCloningProcess(ctx, x, y, width, height, cloningType = 'organismal') {
  ctx.save();
  ctx.translate(x, y);
  
  if(cloningType === 'organismal') {
    const stepHeight = height / 6;
    
    // Step 1: Donor organism
    ctx.fillStyle = '#F3E5F5';
    ctx.strokeStyle = '#9C27B0';
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.ellipse(width * 0.2, stepHeight * 0.5, width * 0.1, height * 0.08, 0, 0, Math.PI * 2);
    ctx.fill();
    ctx.stroke();
    
    // Nucleus in donor
    ctx.fillStyle = '#7B1FA2';
    ctx.beginPath();
    ctx.arc(width * 0.2, stepHeight * 0.5, width * 0.04, 0, Math.PI * 2);
    ctx.fill();
    
    // Label
    ctx.fillStyle = '#2C3E50';
    ctx.font = 'bold 12px Arial';
    ctx.textAlign = 'center';
    ctx.fillText('1. Donor Cell', width * 0.2, stepHeight * 0.75);
    
    // Arrow
    this.drawArrow(ctx, width * 0.3, stepHeight * 0.5, width * 0.4, stepHeight * 1.5, '#555', 2);
    
    // Step 2: Extract nucleus
    ctx.strokeStyle = '#E91E63';
    ctx.lineWidth = 3;
    ctx.fillStyle = '#7B1FA2';
    ctx.beginPath();
    ctx.arc(width * 0.5, stepHeight * 1.5, width * 0.04, 0, Math.PI * 2);
    ctx.fill();
    ctx.stroke();
    
    // Label
    ctx.fillStyle = '#2C3E50';
    ctx.font = 'bold 12px Arial';
    ctx.textAlign = 'center';
    ctx.fillText('2. Extract Nucleus', width * 0.5, stepHeight * 1.75);
    ctx.font = '10px Arial';
    ctx.fillText('(with complete DNA)', width * 0.5, stepHeight * 1.8);
    
    // Arrow
    this.drawArrow(ctx, width * 0.5, stepHeight * 1.6, width * 0.5, stepHeight * 2.3, '#555', 2);
    
    // Step 3: Egg cell (enucleated)
    ctx.fillStyle = '#FFF9C4';
    ctx.strokeStyle = '#F57C00';
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.arc(width * 0.2, stepHeight * 2.5, width * 0.08, 0, Math.PI * 2);
    ctx.fill();
    ctx.stroke();
    
    // Empty center (nucleus removed)
    ctx.fillStyle = '#FFFFFF';
    ctx.beginPath();
    ctx.arc(width * 0.2, stepHeight * 2.5, width * 0.03, 0, Math.PI * 2);
    ctx.fill();
    ctx.strokeStyle = '#F57C00';
    ctx.lineWidth = 2;
    ctx.setLineDash([2, 2]);
    ctx.stroke();
    ctx.setLineDash([]);
    
    // Label
    ctx.fillStyle = '#2C3E50';
    ctx.font = 'bold 12px Arial';
    ctx.textAlign = 'center';
    ctx.fillText('3. Egg Cell', width * 0.2, stepHeight * 2.8);
    ctx.font = '10px Arial';
    ctx.fillText('(nucleus removed)', width * 0.2, stepHeight * 2.85);
    
    // Arrow
    this.drawArrow(ctx, width * 0.28, stepHeight * 2.5, width * 0.42, stepHeight * 2.5, '#555', 2);
    
    // Step 4: Nuclear transfer
    ctx.fillStyle = '#E1F5FE';
    ctx.strokeStyle = '#0288D1';
    ctx.lineWidth = 2;
    ctx.fillRect(width * 0.45, stepHeight * 2.3, width * 0.15, stepHeight * 0.4);
    ctx.strokeRect(width * 0.45, stepHeight * 2.3, width * 0.15, stepHeight * 0.4);
    
    // Egg with inserted nucleus
    ctx.fillStyle = '#FFF9C4';
    ctx.strokeStyle = '#F57C00';
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.arc(width * 0.525, stepHeight * 2.5, width * 0.05, 0, Math.PI * 2);
    ctx.fill();
    ctx.stroke();
    
    // Donor nucleus inside
    ctx.fillStyle = '#7B1FA2';
    ctx.beginPath();
    ctx.arc(width * 0.525, stepHeight * 2.5, width * 0.02, 0, Math.PI * 2);
    ctx.fill();
    
    // Label
    ctx.fillStyle = '#2C3E50';
    ctx.font = 'bold 12px Arial';
    ctx.textAlign = 'center';
    ctx.fillText('4. Nuclear Transfer', width * 0.525, stepHeight * 2.8);
    
    // Arrow
    this.drawArrow(ctx, width * 0.525, stepHeight * 2.7, width * 0.525, stepHeight * 3.3, '#555', 2);
    
    // Step 5: Electric stimulation
    ctx.strokeStyle = '#FFEB3B';
    ctx.lineWidth = 4;
    // Lightning bolt
    ctx.beginPath();
    ctx.moveTo(width * 0.45, stepHeight * 3.5);
    ctx.lineTo(width * 0.5, stepHeight * 3.6);
    ctx.lineTo(width * 0.48, stepHeight * 3.7);
    ctx.lineTo(width * 0.53, stepHeight * 3.8);
    ctx.stroke();
    
    ctx.beginPath();
    ctx.moveTo(width * 0.6, stepHeight * 3.5);
    ctx.lineTo(width * 0.55, stepHeight * 3.6);
    ctx.lineTo(width * 0.57, stepHeight * 3.7);
    ctx.lineTo(width * 0.52, stepHeight * 3.8);
    ctx.stroke();
    
    // Embryo
    ctx.fillStyle = '#C8E6C9';
    ctx.strokeStyle = '#388E3C';
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.arc(width * 0.525, stepHeight * 3.65, width * 0.06, 0, Math.PI * 2);
    ctx.fill();
    ctx.stroke();
    
    // Cell division lines
    ctx.strokeStyle = '#2E7D32';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(width * 0.525, stepHeight * 3.59);
    ctx.lineTo(width * 0.525, stepHeight * 3.71);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(width * 0.465, stepHeight * 3.65);
    ctx.lineTo(width * 0.585, stepHeight * 3.65);
    ctx.stroke();
    
    // Label
    ctx.fillStyle = '#2C3E50';
    ctx.font = 'bold 12px Arial';
    ctx.textAlign = 'center';
    ctx.fillText('5. Stimulation', width * 0.525, stepHeight * 3.95);
    ctx.font = '10px Arial';
    ctx.fillText('(begins cell division)', width * 0.525, stepHeight * 4);
    
    // Arrow
    this.drawArrow(ctx, width * 0.525, stepHeight * 4.05, width * 0.525, stepHeight * 4.7, '#555', 2);
    
    // Step 6: Embryo development
    ctx.fillStyle = '#A5D6A7';
    ctx.strokeStyle = '#388E3C';
    ctx.lineWidth = 3;
    
    // Multiple cell stage
    for(let i = 0; i < 2; i++) {
      for(let j = 0; j < 2; j++) {
        ctx.beginPath();
        ctx.arc(
          width * (0.5 + i * 0.05),
          stepHeight * (4.8 + j * 0.06),
          width * 0.025,
          0, Math.PI * 2
        );
        ctx.fill();
        ctx.stroke();
      }
    }
    
    // Label
    ctx.fillStyle = '#2C3E50';
    ctx.font = 'bold 12px Arial';
    ctx.textAlign = 'center';
    ctx.fillText('6. Embryo', width * 0.525, stepHeight * 5.1);
    
    // Arrow
    this.drawArrow(ctx, width * 0.6, stepHeight * 4.9, width * 0.7, stepHeight * 5.5, '#555', 2);
    
    // Step 7: Clone organism
    ctx.fillStyle = '#F3E5F5';
    ctx.strokeStyle = '#9C27B0';
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.ellipse(width * 0.8, stepHeight * 5.5, width * 0.1, height * 0.08, 0, 0, Math.PI * 2);
    ctx.fill();

    ctx.stroke();
    
    // Nucleus
    ctx.fillStyle = '#7B1FA2';
    ctx.beginPath();
    ctx.arc(width * 0.8, stepHeight * 5.5, width * 0.04, 0, Math.PI * 2);
    ctx.fill();
    
    // Label
    ctx.fillStyle = '#2C3E50';
    ctx.font = 'bold 12px Arial';
    ctx.textAlign = 'center';
    ctx.fillText('7. Clone', width * 0.8, stepHeight * 5.75);
    ctx.font = '10px Arial';
    ctx.fillText('(Genetically identical)', width * 0.8, stepHeight * 5.8);
    
  }
  
  ctx.restore();
}

static drawCRISPR(ctx, x, y, width, height) {
  ctx.save();
  ctx.translate(x, y);
  
  const stepHeight = height / 5;
  
  // Step 1: Target DNA sequence
  ctx.fillStyle = '#2C3E50';
  ctx.font = 'bold 14px Arial';
  ctx.textAlign = 'left';
  ctx.fillText('1. Target DNA', width * 0.05, stepHeight * 0.3);
  
  // DNA double helix
  ctx.strokeStyle = '#3498DB';
  ctx.lineWidth = 4;
  ctx.beginPath();
  ctx.moveTo(width * 0.2, stepHeight * 0.5);
  ctx.lineTo(width * 0.8, stepHeight * 0.5);
  ctx.stroke();
  
  ctx.strokeStyle = '#E74C3C';
  ctx.beginPath();
  ctx.moveTo(width * 0.2, stepHeight * 0.55);
  ctx.lineTo(width * 0.8, stepHeight * 0.55);
  ctx.stroke();
  
  // Base pairs
  ctx.strokeStyle = '#95A5A6';
  ctx.lineWidth = 2;
  for(let i = 0; i < 10; i++) {
    const bpX = width * (0.25 + i * 0.055);
    ctx.beginPath();
    ctx.moveTo(bpX, stepHeight * 0.5);
    ctx.lineTo(bpX, stepHeight * 0.55);
    ctx.stroke();
  }
  
  // Target sequence (highlighted)
  ctx.fillStyle = 'rgba(255, 235, 59, 0.3)';
  ctx.fillRect(width * 0.45, stepHeight * 0.48, width * 0.2, stepHeight * 0.09);
  ctx.strokeStyle = '#FBC02D';
  ctx.lineWidth = 2;
  ctx.strokeRect(width * 0.45, stepHeight * 0.48, width * 0.2, stepHeight * 0.09);
  
  ctx.fillStyle = '#2C3E50';
  ctx.font = '10px Arial';
  ctx.textAlign = 'center';
  ctx.fillText('Target Gene', width * 0.55, stepHeight * 0.65);
  
  // Step 2: Guide RNA (gRNA) design
  ctx.fillStyle = '#2C3E50';
  ctx.font = 'bold 14px Arial';
  ctx.textAlign = 'left';
  ctx.fillText('2. Guide RNA (gRNA)', width * 0.05, stepHeight * 1.2);
  
  // Guide RNA strand
  ctx.strokeStyle = '#9C27B0';
  ctx.lineWidth = 4;
  ctx.beginPath();
  ctx.moveTo(width * 0.35, stepHeight * 1.5);
  ctx.lineTo(width * 0.65, stepHeight * 1.5);
  ctx.stroke();
  
  // RNA bases
  ctx.fillStyle = '#9C27B0';
  ctx.font = '12px Arial';
  ctx.textAlign = 'center';
  const rnaBases = ['A', 'U', 'G', 'C', 'U', 'A'];
  for(let i = 0; i < rnaBases.length; i++) {
    ctx.fillText(rnaBases[i], width * (0.38 + i * 0.045), stepHeight * 1.48);
  }
  
  // Complementary to target
  ctx.fillStyle = '#2C3E50';
  ctx.font = '9px Arial';
  ctx.fillText('(Complementary to target)', width * 0.5, stepHeight * 1.6);
  
  // Step 3: Cas9 enzyme
  ctx.fillStyle = '#2C3E50';
  ctx.font = 'bold 14px Arial';
  ctx.textAlign = 'left';
  ctx.fillText('3. Cas9 Protein', width * 0.05, stepHeight * 2.1);
  
  // Cas9 enzyme (pac-man shape)
  ctx.fillStyle = '#FF6B6B';
  ctx.strokeStyle = '#C92A2A';
  ctx.lineWidth = 3;
  ctx.beginPath();
  ctx.arc(width * 0.3, stepHeight * 2.4, width * 0.08, 0.3, -0.3);
  ctx.lineTo(width * 0.3, stepHeight * 2.4);
  ctx.closePath();
  ctx.fill();
  ctx.stroke();
  
  // gRNA attached to Cas9
  ctx.strokeStyle = '#9C27B0';
  ctx.lineWidth = 3;
  ctx.beginPath();
  ctx.moveTo(width * 0.32, stepHeight * 2.35);
  ctx.lineTo(width * 0.42, stepHeight * 2.35);
  ctx.stroke();
  
  // Label
  ctx.fillStyle = '#2C3E50';
  ctx.font = '10px Arial';
  ctx.textAlign = 'center';
  ctx.fillText('CRISPR-Cas9', width * 0.3, stepHeight * 2.6);
  ctx.fillText('Complex', width * 0.3, stepHeight * 2.65);
  
  // Arrow
  this.drawArrow(ctx, width * 0.4, stepHeight * 2.4, width * 0.5, stepHeight * 3, '#555', 2);
  
  // Step 4: DNA binding and cutting
  ctx.fillStyle = '#2C3E50';
  ctx.font = 'bold 14px Arial';
  ctx.textAlign = 'left';
  ctx.fillText('4. Binding & Cutting', width * 0.05, stepHeight * 3);
  
  // DNA with Cas9 bound
  ctx.strokeStyle = '#3498DB';
  ctx.lineWidth = 4;
  ctx.beginPath();
  ctx.moveTo(width * 0.2, stepHeight * 3.3);
  ctx.lineTo(width * 0.45, stepHeight * 3.3);
  ctx.stroke();
  
  // Cut site (gap in DNA)
  ctx.strokeStyle = '#E74C3C';
  ctx.beginPath();
  ctx.moveTo(width * 0.55, stepHeight * 3.3);
  ctx.lineTo(width * 0.8, stepHeight * 3.3);
  ctx.stroke();
  
  // Bottom strand
  ctx.strokeStyle = '#3498DB';
  ctx.beginPath();
  ctx.moveTo(width * 0.2, stepHeight * 3.35);
  ctx.lineTo(width * 0.45, stepHeight * 3.35);
  ctx.stroke();
  
  ctx.strokeStyle = '#E74C3C';
  ctx.beginPath();
  ctx.moveTo(width * 0.55, stepHeight * 3.35);
  ctx.lineTo(width * 0.8, stepHeight * 3.35);
  ctx.stroke();
  
  // Cut marks (scissors/break)
  ctx.strokeStyle = '#F44336';
  ctx.lineWidth = 3;
  ctx.beginPath();
  ctx.moveTo(width * 0.48, stepHeight * 3.25);
  ctx.lineTo(width * 0.52, stepHeight * 3.4);
  ctx.stroke();
  ctx.beginPath();
  ctx.moveTo(width * 0.52, stepHeight * 3.25);
  ctx.lineTo(width * 0.48, stepHeight * 3.4);
  ctx.stroke();
  
  // Cas9 at cut site
  ctx.fillStyle = '#FF6B6B';
  ctx.strokeStyle = '#C92A2A';
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.arc(width * 0.5, stepHeight * 3.2, width * 0.05, 0, Math.PI * 2);
  ctx.fill();
  ctx.stroke();
  
  // gRNA binding
  ctx.strokeStyle = '#9C27B0';
  ctx.lineWidth = 2;
  for(let i = 0; i < 5; i++) {
    const bindX = width * (0.45 + i * 0.02);
    ctx.beginPath();
    ctx.moveTo(bindX, stepHeight * 3.3);
    ctx.lineTo(bindX, stepHeight * 3.24);
    ctx.stroke();
  }
  
  // Label
  ctx.fillStyle = '#2C3E50';
  ctx.font = '10px Arial';
  ctx.textAlign = 'center';
  ctx.fillText('Double-strand break', width * 0.5, stepHeight * 3.5);
  
  // Step 5: DNA repair (two pathways)
  ctx.fillStyle = '#2C3E50';
  ctx.font = 'bold 14px Arial';
  ctx.textAlign = 'left';
  ctx.fillText('5. DNA Repair', width * 0.05, stepHeight * 3.9);
  
  // Pathway A: Gene knockout (left)
  ctx.save();
  ctx.translate(width * 0.25, stepHeight * 4.3);
  
  // Repaired DNA with deletion
  ctx.strokeStyle = '#E74C3C';
  ctx.lineWidth = 4;
  ctx.beginPath();
  ctx.moveTo(0, 0);
  ctx.lineTo(width * 0.15, 0);
  ctx.stroke();
  ctx.beginPath();
  ctx.moveTo(0, height * 0.02);
  ctx.lineTo(width * 0.15, height * 0.02);
  ctx.stroke();
  
  // Deletion mark
  ctx.strokeStyle = '#C92A2A';
  ctx.setLineDash([3, 3]);
  ctx.beginPath();
  ctx.moveTo(width * 0.05, -height * 0.02);
  ctx.lineTo(width * 0.1, height * 0.04);
  ctx.stroke();
  ctx.setLineDash([]);
  
  ctx.fillStyle = '#E74C3C';
  ctx.font = 'bold 11px Arial';
  ctx.textAlign = 'center';
  ctx.fillText('Gene Knockout', width * 0.075, height * 0.08);
  ctx.font = '9px Arial';
  ctx.fillText('(Gene disabled)', width * 0.075, height * 0.11);
  
  ctx.restore();
  
  // Pathway B: Gene insertion (right)
  ctx.save();
  ctx.translate(width * 0.6, stepHeight * 4.3);
  
  // Template DNA for insertion
  ctx.strokeStyle = '#4CAF50';
  ctx.lineWidth = 4;
  ctx.beginPath();
  ctx.moveTo(0, 0);
  ctx.lineTo(width * 0.05, 0);
  ctx.stroke();
  
  // New gene (colored differently)
  ctx.strokeStyle = '#FFC107';
  ctx.beginPath();
  ctx.moveTo(width * 0.05, 0);
  ctx.lineTo(width * 0.1, 0);
  ctx.stroke();
  
  ctx.strokeStyle = '#4CAF50';
  ctx.beginPath();
  ctx.moveTo(width * 0.1, 0);
  ctx.lineTo(width * 0.15, 0);
  ctx.stroke();
  
  // Bottom strand
  ctx.strokeStyle = '#4CAF50';
  ctx.beginPath();
  ctx.moveTo(0, height * 0.02);
  ctx.lineTo(width * 0.05, height * 0.02);
  ctx.stroke();
  
  ctx.strokeStyle = '#FFC107';
  ctx.beginPath();
  ctx.moveTo(width * 0.05, height * 0.02);
  ctx.lineTo(width * 0.1, height * 0.02);
  ctx.stroke();
  
  ctx.strokeStyle = '#4CAF50';
  ctx.beginPath();
  ctx.moveTo(width * 0.1, height * 0.02);
  ctx.lineTo(width * 0.15, height * 0.02);
  ctx.stroke();
  
  ctx.fillStyle = '#4CAF50';
  ctx.font = 'bold 11px Arial';
  ctx.textAlign = 'center';
  ctx.fillText('Gene Insertion', width * 0.075, height * 0.08);
  ctx.font = '9px Arial';
  ctx.fillText('(New gene added)', width * 0.075, height * 0.11);
  
  ctx.restore();
  
  ctx.restore();
}

static drawBioreactor(ctx, x, y, width, height) {
  ctx.save();
  ctx.translate(x, y);
  
  // Main vessel (cylindrical tank)
  ctx.fillStyle = '#E3F2FD';
  ctx.strokeStyle = '#1976D2';
  ctx.lineWidth = 4;
  
  // Top ellipse
  ctx.beginPath();
  ctx.ellipse(width * 0.5, height * 0.2, width * 0.25, height * 0.05, 0, 0, Math.PI * 2);
  ctx.fill();
  ctx.stroke();
  
  // Cylinder body
  ctx.fillStyle = '#BBDEFB';
  ctx.fillRect(width * 0.25, height * 0.2, width * 0.5, height * 0.5);
  ctx.strokeRect(width * 0.25, height * 0.2, width * 0.5, height * 0.5);
  
  // Bottom ellipse
  ctx.fillStyle = '#90CAF9';
  ctx.beginPath();
  ctx.ellipse(width * 0.5, height * 0.7, width * 0.25, height * 0.05, 0, 0, Math.PI * 2);
  ctx.fill();
  ctx.stroke();
  
  // Culture medium (liquid)
  ctx.fillStyle = 'rgba(255, 193, 7, 0.3)';
  ctx.fillRect(width * 0.25, height * 0.3, width * 0.5, height * 0.35);
  
  // Liquid surface
  ctx.strokeStyle = '#FFA000';
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.moveTo(width * 0.25, height * 0.3);
  ctx.lineTo(width * 0.75, height * 0.3);
  ctx.stroke();
  
  // Cells/organisms in culture (small dots)
  ctx.fillStyle = '#8B4789';
  for(let i = 0; i < 30; i++) {
    const cellX = width * (0.27 + Math.random() * 0.46);
    const cellY = height * (0.32 + Math.random() * 0.33);
    ctx.beginPath();
    ctx.arc(cellX, cellY, width * 0.008, 0, Math.PI * 2);
    ctx.fill();
  }
  
  // Impeller/stirrer (mixing blade)
  ctx.strokeStyle = '#424242';
  ctx.lineWidth = 3;
  
  // Shaft
  ctx.beginPath();
  ctx.moveTo(width * 0.5, height * 0.1);
  ctx.lineTo(width * 0.5, height * 0.6);
  ctx.stroke();
  
  // Blades
  for(let i = 0; i < 3; i++) {
    const bladeY = height * (0.35 + i * 0.1);
    ctx.beginPath();
    ctx.moveTo(width * 0.35, bladeY);
    ctx.lineTo(width * 0.65, bladeY);
    ctx.stroke();
  }
  
  // Motor on top
  ctx.fillStyle = '#757575';
  ctx.fillRect(width * 0.45, height * 0.05, width * 0.1, height * 0.05);
  ctx.strokeStyle = '#424242';
  ctx.lineWidth = 2;
  ctx.strokeRect(width * 0.45, height * 0.05, width * 0.1, height * 0.05);
  
  ctx.fillStyle = '#FFFFFF';
  ctx.font = '9px Arial';
  ctx.textAlign = 'center';
  ctx.fillText('MOTOR', width * 0.5, height * 0.08);
  
  // Temperature sensor
  ctx.strokeStyle = '#E53935';
  ctx.lineWidth = 3;
  ctx.beginPath();
  ctx.moveTo(width * 0.78, height * 0.25);
  ctx.lineTo(width * 0.85, height * 0.25);
  ctx.stroke();
  
  // Thermometer bulb
  ctx.fillStyle = '#E53935';
  ctx.beginPath();
  ctx.arc(width * 0.85, height * 0.25, width * 0.015, 0, Math.PI * 2);
  ctx.fill();
  
  // pH sensor
  ctx.strokeStyle = '#43A047';
  ctx.lineWidth = 3;
  ctx.beginPath();
  ctx.moveTo(width * 0.78, height * 0.35);
  ctx.lineTo(width * 0.85, height * 0.35);
  ctx.stroke();
  
  ctx.fillStyle = '#43A047';
  ctx.beginPath();
  ctx.arc(width * 0.85, height * 0.35, width * 0.015, 0, Math.PI * 2);
  ctx.fill();
  
  // Inlet port (nutrients)
  ctx.strokeStyle = '#1976D2';
  ctx.lineWidth = 3;
  ctx.beginPath();
  ctx.moveTo(width * 0.15, height * 0.28);
  ctx.lineTo(width * 0.25, height * 0.28);
  ctx.stroke();
  
  // Arrow
  this.drawArrow(ctx, width * 0.2, height * 0.28, width * 0.24, height * 0.28, '#1976D2', 2);
  
  ctx.fillStyle = '#1976D2';
  ctx.font = '10px Arial';
  ctx.textAlign = 'right';
  ctx.fillText('Nutrients', width * 0.14, height * 0.27);
  
  // Air/oxygen inlet
  ctx.strokeStyle = '#00BCD4';
  ctx.lineWidth = 3;
  ctx.beginPath();
  ctx.moveTo(width * 0.15, height * 0.6);
  ctx.lineTo(width * 0.25, height * 0.6);
  ctx.stroke();
  
  this.drawArrow(ctx, width * 0.2, height * 0.6, width * 0.24, height * 0.6, '#00BCD4', 2);
  
  // Bubbles
  ctx.fillStyle = 'rgba(255, 255, 255, 0.6)';
  for(let i = 0; i < 10; i++) {
    const bubbleX = width * (0.3 + Math.random() * 0.4);
    const bubbleY = height * (0.4 + Math.random() * 0.25);
    ctx.beginPath();
    ctx.arc(bubbleX, bubbleY, width * 0.01, 0, Math.PI * 2);
    ctx.fill();
  }
  
  ctx.fillStyle = '#00BCD4';
  ctx.font = '10px Arial';
  ctx.textAlign = 'right';
  ctx.fillText('O₂/Air', width * 0.14, height * 0.59);
  
  // Outlet port
  ctx.strokeStyle = '#F57C00';
  ctx.lineWidth = 3;
  ctx.beginPath();
  ctx.moveTo(width * 0.75, height * 0.68);
  ctx.lineTo(width * 0.85, height * 0.68);
  ctx.stroke();
  
  this.drawArrow(ctx, width * 0.76, height * 0.68, width * 0.8, height * 0.68, '#F57C00', 2);
  
  ctx.fillStyle = '#F57C00';
  ctx.font = '10px Arial';
  ctx.textAlign = 'left';
  ctx.fillText('Product', width * 0.86, height * 0.67);
  ctx.fillText('Harvest', width * 0.86, height * 0.7);
  
  // Control panel
  ctx.fillStyle = '#37474F';
  ctx.fillRect(width * 0.85, height * 0.4, width * 0.12, height * 0.15);
  ctx.strokeStyle = '#263238';
  ctx.lineWidth = 2;
  ctx.strokeRect(width * 0.85, height * 0.4, width * 0.12, height * 0.15);
  
  // Display screen
  ctx.fillStyle = '#00E676';
  ctx.fillRect(width * 0.87, height * 0.42, width * 0.08, height * 0.05);
  
  ctx.fillStyle = '#000000';
  ctx.font = '8px monospace';
  ctx.textAlign = 'center';
  ctx.fillText('37°C', width * 0.91, height * 0.45);
  ctx.fillText('pH 7.2', width * 0.91, height * 0.465);
  
  // Buttons
  ctx.fillStyle = '#FF5252';
  ctx.beginPath();
  ctx.arc(width * 0.88, height * 0.5, width * 0.01, 0, Math.PI * 2);
  ctx.fill();
  
  ctx.fillStyle = '#4CAF50';
  ctx.beginPath();
  ctx.arc(width * 0.94, height * 0.5, width * 0.01, 0, Math.PI * 2);
  ctx.fill();
  
  // Pipes/tubes
  ctx.strokeStyle = '#78909C';
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.moveTo(width * 0.85, height * 0.25);
  ctx.lineTo(width * 0.9, height * 0.25);
  ctx.lineTo(width * 0.9, height * 0.4);
  ctx.stroke();
  
  ctx.beginPath();
  ctx.moveTo(width * 0.85, height * 0.35);
  ctx.lineTo(width * 0.88, height * 0.35);
  ctx.lineTo(width * 0.88, height * 0.4);
  ctx.stroke();
  
  // Support stand
  ctx.fillStyle = '#616161';
  ctx.fillRect(width * 0.2, height * 0.72, width * 0.05, height * 0.15);
  ctx.fillRect(width * 0.75, height * 0.72, width * 0.05, height * 0.15);
  ctx.fillRect(width * 0.15, height * 0.87, width * 0.7, height * 0.03);
  
  ctx.restore();
}

static drawGMOProduction(ctx, x, y, width, height) {
  ctx.save();
  ctx.translate(x, y);
  
  const stepWidth = width / 3;
  const stepHeight = height / 2;
  
  // Title sections
  ctx.fillStyle = '#2C3E50';
  ctx.font = 'bold 14px Arial';
  ctx.textAlign = 'center';
  
  // Step 1: Identify desired trait
  ctx.fillText('1. Identify Trait', stepWidth * 0.5, stepHeight * 0.2);
  
  // Desired trait visualization
  ctx.fillStyle = '#4CAF50';
  ctx.strokeStyle = '#2E7D32';
  ctx.lineWidth = 3;
  ctx.beginPath();
  ctx.arc(stepWidth * 0.5, stepHeight * 0.4, width * 0.08, 0, Math.PI * 2);
  ctx.fill();
  ctx.stroke();
  
  // DNA symbol inside
  ctx.strokeStyle = '#1976D2';
  ctx.lineWidth = 2;
  ctx.beginPath();
  // Simple helix
  for(let i = 0; i < 6; i++) {
    const hx = stepWidth * 0.45 + i * width * 0.015;
    const hy1 = stepHeight * 0.37 + Math.sin(i) * height * 0.02;
    const hy2 = stepHeight * 0.43 - Math.sin(i) * height * 0.02;
    
    if(i === 0) {
      ctx.moveTo(hx, hy1);
    } else {
      ctx.lineTo(hx, hy1);
    }
  }
  ctx.stroke();
  
  ctx.fillStyle = '#2C3E50';
  ctx.font = '10px Arial';
  ctx.fillText('Pest', stepWidth * 0.5, stepHeight * 0.52);
  ctx.fillText('Resistance', stepWidth * 0.5, stepHeight * 0.56);
  
  // Arrow
  this.drawArrow(ctx, stepWidth * 0.65, stepHeight * 0.4, stepWidth * 0.9, stepHeight * 0.4, '#555', 2);
  
  // Step 2: Gene isolation
  ctx.fillStyle = '#2C3E50';
  ctx.font = 'bold 14px Arial';
  ctx.textAlign = 'center';
  ctx.fillText('2. Isolate Gene', stepWidth * 1.5, stepHeight * 0.2);
  
  // Source organism (bacteria)
  ctx.fillStyle = '#E1F5FE';
  ctx.strokeStyle = '#0288D1';
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.ellipse(stepWidth * 1.35, stepHeight * 0.4, width * 0.05, height * 0.03, 0, 0, Math.PI * 2);
  ctx.fill();
  ctx.stroke();
  
  // Extracted gene
  ctx.strokeStyle = '#FF5722';
  ctx.lineWidth = 4;
  ctx.beginPath();
  ctx.moveTo(stepWidth * 1.55, stepHeight * 0.38);
  ctx.lineTo(stepWidth * 1.65, stepHeight * 0.38);
  ctx.stroke();
  
  ctx.fillStyle = '#2C3E50';
  ctx.font = '9px Arial';
  ctx.fillText('Bt toxin', stepWidth * 1.35, stepHeight * 0.5);
  ctx.fillText('gene', stepWidth * 1.35, stepHeight * 0.53);
  
  // Arrow
  this.drawArrow(ctx, stepWidth * 1.7, stepHeight * 0.4, stepWidth * 1.95, stepHeight * 0.4, '#555', 2);
  
  // Step 3: Gene transfer
  ctx.fillStyle = '#2C3E50';
  ctx.font = 'bold 14px Arial';
  ctx.textAlign = 'center';
  ctx.fillText('3. Gene Transfer', stepWidth * 2.5, stepHeight * 0.2);
  
  // Plant cell
  ctx.fillStyle = '#C8E6C9';
  ctx.strokeStyle = '#388E3C';
  ctx.lineWidth = 3;
  ctx.beginPath();
  ctx.roundRect(stepWidth * 2.3, stepHeight * 0.32, width * 0.15, height * 0.16, height * 0.02);
  ctx.fill();
  ctx.stroke();
  
  // Cell wall
  ctx.strokeStyle = '#1B5E20';
  ctx.lineWidth = 4;
  ctx.beginPath();
  ctx.roundRect(stepWidth * 2.3, stepHeight * 0.32, width * 0.15, height * 0.16, height * 0.02);
  ctx.stroke();
  
  // Nucleus
  ctx.fillStyle = '#7E57C2';
  ctx.beginPath();
  ctx.arc(stepWidth * 2.375, stepHeight * 0.4, width * 0.03, 0, Math.PI * 2);
  ctx.fill();
  
  // Gene being inserted (arrow into cell)
  ctx.strokeStyle = '#FF5722';
  ctx.lineWidth = 3;
  this.drawArrow(
    ctx,
    stepWidth * 2.25,
    stepHeight * 0.38,
    stepWidth * 2.32,
    stepHeight * 0.4,
    '#FF5722',
    3
  );
  
  ctx.fillStyle = '#2C3E50';
  ctx.font = '9px Arial';
  ctx.fillText('Gene gun or', stepWidth * 2.15, stepHeight * 0.35);
  ctx.fillText('Agrobacterium', stepWidth * 2.15, stepHeight * 0.38);
  
  // Arrow down
  this.drawArrow(ctx, stepWidth * 0.5, stepHeight * 0.6, stepWidth * 0.5, stepHeight * 0.9, '#555', 2);
  
  // Step 4: Tissue culture
  ctx.fillStyle = '#2C3E50';
  ctx.font = 'bold 14px Arial';
  ctx.textAlign = 'center';
  ctx.fillText('4. Tissue Culture', stepWidth * 0.5, stepHeight * 1.1);
  
  // Petri dish
  ctx.fillStyle = '#FFFFFF';
  ctx.strokeStyle = '#90A4AE';
  ctx.lineWidth = 3;
  ctx.beginPath();
  ctx.ellipse(stepWidth * 0.5, stepHeight * 1.35, width * 0.12, height * 0.08, 0, 0, Math.PI * 2);
  ctx.fill();
  ctx.stroke();
  
  // Growth medium
  ctx.fillStyle = '#FFF59D';
  ctx.beginPath();
  ctx.ellipse(stepWidth * 0.5, stepHeight * 1.35, width * 0.11, height * 0.07, 0, 0, Math.PI * 2);
  ctx.fill();
  
  // Growing cells/callus
  ctx.fillStyle = '#81C784';
  for(let i = 0; i < 5; i++) {
    for(let j = 0; j < 3; j++) {
      const cX = stepWidth * (0.44 + i * 0.025);
      const cY = stepHeight * (1.3 + j * 0.03);
      ctx.beginPath();
      ctx.arc(cX, cY, width * 0.01, 0, Math.PI * 2);
      ctx.fill();
    }
  }
  
  // Arrow
  this.drawArrow(ctx, stepWidth * 0.7, stepHeight * 1.35, stepWidth * 1.2, stepHeight * 1.35, '#555', 2);
  
  // Step 5: Regeneration
  ctx.fillStyle = '#2C3E50';
  ctx.font = 'bold 14px Arial';
  ctx.textAlign = 'center';
  ctx.fillText('5. Regeneration', stepWidth * 1.5, stepHeight * 1.1);
  
  // Young plantlet
  ctx.strokeStyle = '#558B2F';
  ctx.lineWidth = 3;
  // Stem
  ctx.beginPath();
  ctx.moveTo(stepWidth * 1.5, stepHeight * 1.45);
  ctx.lineTo(stepWidth * 1.5, stepHeight * 1.25);
  ctx.stroke();
  
  // Leaves
  ctx.fillStyle = '#7CB342';
  // Left leaf
  ctx.beginPath();
  ctx.ellipse(stepWidth * 1.45, stepHeight * 1.3, width * 0.03, height * 0.04, -0.5, 0, Math.PI * 2);
  ctx.fill();
  // Right leaf
  ctx.beginPath();
  ctx.ellipse(stepWidth * 1.55, stepHeight * 1.3, width * 0.03, height * 0.04, 0.5, 0, Math.PI * 2);
  ctx.fill();
  
  // Roots
  ctx.strokeStyle = '#8D6E63';
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.moveTo(stepWidth * 1.5, stepHeight * 1.45);
  ctx.lineTo(stepWidth * 1.47, stepHeight * 1.5);
  ctx.stroke();
  ctx.beginPath();
  ctx.moveTo(stepWidth * 1.5, stepHeight * 1.45);
  ctx.lineTo(stepWidth * 1.53, stepHeight * 1.5);
  ctx.stroke();
  
  // Arrow
  this.drawArrow(ctx, stepWidth * 1.7, stepHeight * 1.35, stepWidth * 2.2, stepHeight * 1.35, '#555', 2);
  
  // Step 6: GMO crop
  ctx.fillStyle = '#2C3E50';
  ctx.font = 'bold 14px Arial';
  ctx.textAlign = 'center';
  ctx.fillText('6. GMO Crop', stepWidth * 2.5, stepHeight * 1.1);
  
  // Mature GMO plant
  ctx.strokeStyle = '#33691E';
  ctx.lineWidth = 4;
  // Main stem
  ctx.beginPath();
  ctx.moveTo(stepWidth * 2.5, stepHeight * 1.55);
  ctx.lineTo(stepWidth * 2.5, stepHeight * 1.2);
  ctx.stroke();
  
  // Leaves (larger)
  ctx.fillStyle = '#689F38';
  for(let i = 0; i < 4; i++) {
    const leafY = stepHeight * (1.25 + i * 0.08);
    const side = i % 2 === 0 ? -1 : 1;
    ctx.beginPath();
    ctx.ellipse(
      stepWidth * (2.5 + side * 0.06),
      leafY,
      width * 0.04,
      height * 0.05,
      side * 0.5,
      0, Math.PI * 2
    );
    ctx.fill();
  }
  
  // Fruit/crop
  ctx.fillStyle = '#FF9800';
  ctx.beginPath();
  ctx.arc(stepWidth * 2.5, stepHeight * 1.18, width * 0.025, 0, Math.PI * 2);
  ctx.fill();
  
  // GMO label/marker
  ctx.fillStyle = '#E91E63';
  ctx.strokeStyle = '#AD1457';
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.arc(stepWidth * 2.58, stepHeight * 1.25, width * 0.02, 0, Math.PI * 2);
  ctx.fill();
  ctx.stroke();
  
  ctx.fillStyle = '#FFFFFF';
  ctx.font = 'bold 8px Arial';
  ctx.fillText('GM', stepWidth * 2.58, stepHeight * 1.26);
  
  // Soil/ground line
  ctx.strokeStyle = '#5D4037';
  ctx.lineWidth = 3;
  ctx.beginPath();
  ctx.moveTo(stepWidth * 2.3, stepHeight * 1.55);
  ctx.lineTo(stepWidth * 2.7, stepHeight * 1.55);
  ctx.stroke();
  
  // Benefits label
  ctx.fillStyle = '#2C3E50';
  ctx.font = '9px Arial';
  ctx.fillText('✓ Pest resistant', stepWidth * 2.5, stepHeight * 1.62);
  ctx.fillText('✓ Higher yield', stepWidth * 2.5, stepHeight * 1.66);
  
  ctx.restore();
}

// Helper method for drawing arrows (if not already present)
static drawArrow(ctx, x1, y1, x2, y2, color, lineWidth) {
  ctx.save();
  ctx.strokeStyle = color;
  ctx.fillStyle = color;
  ctx.lineWidth = lineWidth;
  
  // Draw line
  ctx.beginPath();
  ctx.moveTo(x1, y1);
  ctx.lineTo(x2, y2);
  ctx.stroke();
  
  // Draw arrowhead
  const angle = Math.atan2(y2 - y1, x2 - x1);
  const arrowSize = lineWidth * 3;
  ctx.beginPath();
  ctx.moveTo(x2, y2);
  ctx.lineTo(
    x2 - arrowSize * Math.cos(angle - Math.PI / 6),
    y2 - arrowSize * Math.sin(angle - Math.PI / 6)
  );
  ctx.lineTo(
    x2 - arrowSize * Math.cos(angle + Math.PI / 6),
    y2 - arrowSize * Math.sin(angle + Math.PI / 6)
  );
  ctx.closePath();
  ctx.fill();
  
  ctx.restore();
}  


static drawBacterialCell(ctx, x, y, width, height) {
  ctx.save();
  ctx.translate(x, y);
  
  // Cell shape (rod-shaped bacterium - bacillus)
  ctx.fillStyle = '#E6F3FF';
  ctx.beginPath();
  ctx.roundRect(width * 0.25, height * 0.3, width * 0.5, height * 0.4, height * 0.2);
  ctx.fill();
  ctx.strokeStyle = '#4A90E2';
  ctx.lineWidth = 3;
  ctx.stroke();
  
  // Cell wall (outer layer)
  ctx.strokeStyle = '#2E5C8A';
  ctx.lineWidth = 5;
  ctx.beginPath();
  ctx.roundRect(width * 0.25, height * 0.3, width * 0.5, height * 0.4, height * 0.2);
  ctx.stroke();
  
  // Cell membrane (inner layer)
  ctx.strokeStyle = '#7FB3D5';
  ctx.lineWidth = 2;
  ctx.setLineDash([5, 3]);
  ctx.beginPath();
  ctx.roundRect(width * 0.27, height * 0.32, width * 0.46, height * 0.36, height * 0.18);
  ctx.stroke();
  ctx.setLineDash([]);
  
  // Cytoplasm
  ctx.fillStyle = 'rgba(173, 216, 230, 0.3)';
  ctx.beginPath();
  ctx.roundRect(width * 0.28, height * 0.33, width * 0.44, height * 0.34, height * 0.17);
  ctx.fill();
  
  // Nucleoid (DNA region - no membrane)
  ctx.fillStyle = '#FF6B9D';
  ctx.beginPath();
  // Irregular DNA coil shape
  for(let i = 0; i < 8; i++) {
    const angle = (i * Math.PI * 2) / 8;
    const radius = width * 0.08 + Math.sin(i * 3) * width * 0.02;
    const nx = width * 0.5 + Math.cos(angle) * radius;
    const ny = height * 0.5 + Math.sin(angle) * radius * 0.6;
    if(i === 0) ctx.moveTo(nx, ny);
    else ctx.lineTo(nx, ny);
  }
  ctx.closePath();
  ctx.fill();
  ctx.strokeStyle = '#C13584';
  ctx.lineWidth = 1;
  ctx.stroke();
  
  // Plasmids (small circular DNA)
  ctx.fillStyle = '#FF1493';
  const plasmidPositions = [[0.35, 0.42], [0.65, 0.58], [0.4, 0.6]];
  plasmidPositions.forEach(([px, py]) => {
    ctx.beginPath();
    ctx.arc(width * px, height * py, width * 0.015, 0, Math.PI * 2);
    ctx.fill();
  });
  
  // Ribosomes (small dots throughout cytoplasm)
  ctx.fillStyle = '#8B4789';
  for(let i = 0; i < 25; i++) {
    const rx = width * 0.3 + Math.random() * width * 0.4;
    const ry = height * 0.35 + Math.random() * height * 0.3;
    ctx.beginPath();
    ctx.arc(rx, ry, width * 0.005, 0, Math.PI * 2);
    ctx.fill();
  }
  
  // Flagella (tail for movement)
  ctx.strokeStyle = '#2C5F2D';
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.moveTo(width * 0.75, height * 0.5);
  // Wavy flagellum
  for(let i = 0; i < 20; i++) {
    const fx = width * 0.75 + i * width * 0.015;
    const fy = height * 0.5 + Math.sin(i * 0.8) * height * 0.08;
    ctx.lineTo(fx, fy);
  }
  ctx.stroke();
  
  // Pili (short hair-like structures)
  ctx.strokeStyle = '#97BE5A';
  ctx.lineWidth = 1;
  for(let i = 0; i < 8; i++) {
    const angle = (i * Math.PI * 2) / 8;
    const startX = width * 0.5 + Math.cos(angle) * width * 0.25;
    const startY = height * 0.5 + Math.sin(angle) * height * 0.2;
    const endX = startX + Math.cos(angle) * width * 0.05;
    const endY = startY + Math.sin(angle) * height * 0.05;
    ctx.beginPath();
    ctx.moveTo(startX, startY);
    ctx.lineTo(endX, endY);
    ctx.stroke();
  }
  
  // Capsule (outer protective layer)
  ctx.strokeStyle = '#B8E6B8';
  ctx.lineWidth = 4;
  ctx.setLineDash([3, 3]);
  ctx.beginPath();
  ctx.roundRect(width * 0.23, height * 0.28, width * 0.54, height * 0.44, height * 0.22);
  ctx.stroke();
  ctx.setLineDash([]);
  
  ctx.restore();
}

static drawVirusStructure(ctx, x, y, width, height) {
  ctx.save();
  ctx.translate(x, y);
  
  // Capsid (protein shell) - icosahedral shape
  ctx.fillStyle = '#FF6B6B';
  ctx.strokeStyle = '#C92A2A';
  ctx.lineWidth = 3;
  
  // Draw hexagonal capsid
  ctx.beginPath();
  for(let i = 0; i < 6; i++) {
    const angle = (i * Math.PI * 2) / 6;
    const vx = width * 0.5 + Math.cos(angle) * width * 0.25;
    const vy = height * 0.5 + Math.sin(angle) * height * 0.25;
    if(i === 0) ctx.moveTo(vx, vy);
    else ctx.lineTo(vx, vy);
  }
  ctx.closePath();
  ctx.fill();
  ctx.stroke();
  
  // Capsomeres (protein subunits)
  ctx.fillStyle = '#FA5252';
  for(let ring = 0; ring < 3; ring++) {
    const numCapsomeres = 6 + ring * 6;
    const radius = width * 0.08 + ring * width * 0.08;
    for(let i = 0; i < numCapsomeres; i++) {
      const angle = (i * Math.PI * 2) / numCapsomeres;
      const cx = width * 0.5 + Math.cos(angle) * radius;
      const cy = height * 0.5 + Math.sin(angle) * radius;
      ctx.beginPath();
      ctx.arc(cx, cy, width * 0.02, 0, Math.PI * 2);
      ctx.fill();
      ctx.strokeStyle = '#C92A2A';
      ctx.lineWidth = 1;
      ctx.stroke();
    }
  }
  
  // Central capsomere
  ctx.beginPath();
  ctx.arc(width * 0.5, height * 0.5, width * 0.02, 0, Math.PI * 2);
  ctx.fill();
  ctx.stroke();
  
  // Genetic material inside (RNA/DNA)
  ctx.strokeStyle = '#4ECDC4';
  ctx.lineWidth = 3;
  ctx.beginPath();
  // Coiled nucleic acid
  for(let i = 0; i < 20; i++) {
    const angle = (i * Math.PI * 2) / 5;
    const nx = width * 0.5 + Math.cos(angle) * (width * 0.03 + i * width * 0.005);
    const ny = height * 0.5 + Math.sin(angle) * (height * 0.03 + i * height * 0.005);
    if(i === 0) ctx.moveTo(nx, ny);
    else ctx.lineTo(nx, ny);
  }
  ctx.stroke();
  
  // Envelope (for enveloped viruses) - outer membrane
  ctx.strokeStyle = '#FFD93D';
  ctx.lineWidth = 4;
  ctx.setLineDash([5, 5]);
  ctx.beginPath();
  for(let i = 0; i < 6; i++) {
    const angle = (i * Math.PI * 2) / 6;
    const vx = width * 0.5 + Math.cos(angle) * width * 0.32;
    const vy = height * 0.5 + Math.sin(angle) * height * 0.32;
    if(i === 0) ctx.moveTo(vx, vy);
    else ctx.lineTo(vx, vy);
  }
  ctx.closePath();
  ctx.stroke();
  ctx.setLineDash([]);
  
  // Spike proteins (glycoproteins)
  ctx.fillStyle = '#FFA94D';
  ctx.strokeStyle = '#FF8C42';
  ctx.lineWidth = 2;
  for(let i = 0; i < 12; i++) {
    const angle = (i * Math.PI * 2) / 12;
    const baseX = width * 0.5 + Math.cos(angle) * width * 0.32;
    const baseY = height * 0.5 + Math.sin(angle) * height * 0.32;
    const tipX = baseX + Math.cos(angle) * width * 0.08;
    const tipY = baseY + Math.sin(angle) * height * 0.08;
    
    // Spike shape (mushroom-like)
    ctx.beginPath();
    ctx.moveTo(baseX, baseY);
    ctx.lineTo(tipX, tipY);
    ctx.stroke();
    
    // Spike head
    ctx.beginPath();
    ctx.arc(tipX, tipY, width * 0.02, 0, Math.PI * 2);
    ctx.fill();
    ctx.stroke();
  }
  
  ctx.restore();
}

static drawFungalCell(ctx, x, y, width, height, showHyphae = true) {
  ctx.save();
  ctx.translate(x, y);
  
  if(showHyphae) {
    // Hyphae network (branching filaments)
    ctx.strokeStyle = '#D4A373';
    ctx.lineWidth = 8;
    
    // Main hypha
    ctx.beginPath();
    ctx.moveTo(width * 0.1, height * 0.9);
    ctx.lineTo(width * 0.3, height * 0.6);
    ctx.lineTo(width * 0.5, height * 0.4);
    ctx.stroke();
    
    // Branch 1
    ctx.beginPath();
    ctx.moveTo(width * 0.3, height * 0.6);
    ctx.lineTo(width * 0.5, height * 0.7);
    ctx.stroke();
    
    // Branch 2
    ctx.beginPath();
    ctx.moveTo(width * 0.5, height * 0.4);
    ctx.lineTo(width * 0.7, height * 0.3);
    ctx.lineTo(width * 0.9, height * 0.2);
    ctx.stroke();
    
    // Septa (cross-walls in hyphae)
    ctx.strokeStyle = '#8B4513';
    ctx.lineWidth = 2;
    const septaPositions = [
      [0.2, 0.75], [0.4, 0.5], [0.6, 0.35], [0.8, 0.25]
    ];
    septaPositions.forEach(([sx, sy]) => {
      ctx.beginPath();
      ctx.moveTo(width * sx - width * 0.03, height * sy);
      ctx.lineTo(width * sx + width * 0.03, height * sy);
      ctx.stroke();
    });
  }
  
  // Individual fungal cell (zoomed in)
  const cellX = showHyphae ? width * 0.5 : width * 0.5;
  const cellY = showHyphae ? height * 0.3 : height * 0.5;
  const cellW = showHyphae ? width * 0.3 : width * 0.5;
  const cellH = showHyphae ? height * 0.2 : height * 0.4;
  
  // Cell wall (chitin-based, thicker than plant cells)
  ctx.fillStyle = '#C9A66B';
  ctx.beginPath();
  ctx.roundRect(cellX - cellW / 2, cellY - cellH / 2, cellW, cellH, cellH * 0.15);
  ctx.fill();
  ctx.strokeStyle = '#8B7355';
  ctx.lineWidth = 4;
  ctx.stroke();
  
  // Cell membrane
  ctx.strokeStyle = '#DEB887';
  ctx.lineWidth = 2;
  ctx.setLineDash([3, 3]);
  ctx.beginPath();
  ctx.roundRect(
    cellX - cellW / 2 + cellW * 0.05,
    cellY - cellH / 2 + cellH * 0.05,
    cellW * 0.9,
    cellH * 0.9,
    cellH * 0.13
  );
  ctx.stroke();
  ctx.setLineDash([]);
  
  // Cytoplasm
  ctx.fillStyle = 'rgba(222, 184, 135, 0.3)';
  ctx.beginPath();
  ctx.roundRect(
    cellX - cellW / 2 + cellW * 0.06,
    cellY - cellH / 2 + cellH * 0.06,
    cellW * 0.88,
    cellH * 0.88,
    cellH * 0.12
  );
  ctx.fill();
  
  // Nucleus (with nuclear membrane)
  ctx.fillStyle = '#E8B4F5';
  ctx.beginPath();
  ctx.ellipse(cellX, cellY, cellW * 0.15, cellH * 0.2, 0, 0, Math.PI * 2);
  ctx.fill();
  ctx.strokeStyle = '#9B59B6';
  ctx.lineWidth = 2;
  ctx.stroke();
  
  // Nucleolus
  ctx.fillStyle = '#8E44AD';
  ctx.beginPath();
  ctx.arc(cellX, cellY, cellW * 0.05, 0, Math.PI * 2);
  ctx.fill();
  
  // Mitochondria
  ctx.fillStyle = '#FFB6C1';
  ctx.strokeStyle = '#FF69B4';
  ctx.lineWidth = 1;
  const mitoPositions = [
    [-0.25, -0.15], [0.25, -0.2], [-0.2, 0.2], [0.22, 0.18]
  ];
  mitoPositions.forEach(([mx, my]) => {
    ctx.beginPath();
    ctx.ellipse(
      cellX + cellW * mx,
      cellY + cellH * my,
      cellW * 0.06,
      cellH * 0.08,
      Math.random() * Math.PI,
      0, Math.PI * 2
    );
    ctx.fill();
    ctx.stroke();
  });
  
  // Vacuole (large storage organelle)
  ctx.fillStyle = 'rgba(135, 206, 250, 0.4)';
  ctx.strokeStyle = '#4682B4';
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.ellipse(cellX + cellW * 0.15, cellY - cellH * 0.1, cellW * 0.12, cellH * 0.15, 0, 0, Math.PI * 2);
  ctx.fill();
  ctx.stroke();
  
  // Ribosomes (small dots)
  ctx.fillStyle = '#4A4A4A';
  for(let i = 0; i < 15; i++) {
    const rx = cellX - cellW * 0.35 + Math.random() * cellW * 0.7;
    const ry = cellY - cellH * 0.35 + Math.random() * cellH * 0.7;
    ctx.beginPath();
    ctx.arc(rx, ry, cellW * 0.008, 0, Math.PI * 2);
    ctx.fill();
  }
  
  // Endoplasmic reticulum
  ctx.strokeStyle = '#A9A9A9';
  ctx.lineWidth = 2;
  ctx.setLineDash([2, 2]);
  for(let i = 0; i < 3; i++) {
    ctx.beginPath();
    ctx.arc(cellX - cellW * 0.15, cellY + cellH * 0.05 + i * cellH * 0.08, cellW * 0.08, 0, Math.PI);
    ctx.stroke();
  }
  ctx.setLineDash([]);
  
  ctx.restore();
}

static drawProtists(ctx, x, y, width, height) {
  ctx.save();
  ctx.translate(x, y);
  
  const protistWidth = width / 3;
  
  // 1. AMOEBA (left)
  ctx.save();
  ctx.translate(0, 0);
  
  // Irregular amoeba shape with pseudopodia
  ctx.fillStyle = '#E8F5E9';
  ctx.strokeStyle = '#4CAF50';
  ctx.lineWidth = 3;
  ctx.beginPath();
  
  // Main body (irregular blob)
  const points = [
    [0.5, 0.3], [0.7, 0.35], [0.75, 0.5], [0.7, 0.65],
    [0.5, 0.7], [0.3, 0.65], [0.25, 0.5], [0.3, 0.35]
  ];
  
  points.forEach(([px, py], i) => {
    const cx = protistWidth * px;
    const cy = height * py;
    if(i === 0) ctx.moveTo(cx, cy);
    else ctx.lineTo(cx, cy);
  });
  ctx.closePath();
  ctx.fill();
  ctx.stroke();
  
  // Pseudopodia (extending "feet")
  ctx.fillStyle = '#C8E6C9';
  // Pseudopod 1
  ctx.beginPath();
  ctx.moveTo(protistWidth * 0.7, height * 0.35);
  ctx.lineTo(protistWidth * 0.85, height * 0.25);
  ctx.lineTo(protistWidth * 0.8, height * 0.35);
  ctx.closePath();
  ctx.fill();
  ctx.stroke();
  
  // Pseudopod 2
  ctx.beginPath();
  ctx.moveTo(protistWidth * 0.3, height * 0.65);
  ctx.lineTo(protistWidth * 0.15, height * 0.75);
  ctx.lineTo(protistWidth * 0.25, height * 0.7);
  ctx.closePath();
  ctx.fill();
  ctx.stroke();
  
  // Nucleus
  ctx.fillStyle = '#9C27B0';
  ctx.beginPath();
  ctx.arc(protistWidth * 0.5, height * 0.5, protistWidth * 0.08, 0, Math.PI * 2);
  ctx.fill();
  
  // Food vacuoles
  ctx.fillStyle = '#FFE082';
  ctx.beginPath();
  ctx.arc(protistWidth * 0.55, height * 0.42, protistWidth * 0.04, 0, Math.PI * 2);
  ctx.fill();
  ctx.beginPath();
  ctx.arc(protistWidth * 0.42, height * 0.58, protistWidth * 0.03, 0, Math.PI * 2);
  ctx.fill();
  
  // Contractile vacuole
  ctx.fillStyle = '#64B5F6';
  ctx.beginPath();
  ctx.arc(protistWidth * 0.62, height * 0.55, protistWidth * 0.045, 0, Math.PI * 2);
  ctx.fill();
  
  // Label
  ctx.fillStyle = '#2C3E50';
  ctx.font = 'bold 16px Arial';
  ctx.textAlign = 'center';
  ctx.fillText('Amoeba', protistWidth * 0.5, height * 0.15);
  
  ctx.restore();
  
  // 2. PARAMECIUM (center)
  ctx.save();
  ctx.translate(protistWidth, 0);
  
  // Slipper-shaped body
  ctx.fillStyle = '#E1F5FE';
  ctx.strokeStyle = '#0288D1';
  ctx.lineWidth = 3;
  ctx.beginPath();
  ctx.ellipse(protistWidth * 0.5, height * 0.5, protistWidth * 0.25, height * 0.25, 0, 0, Math.PI * 2);
  ctx.fill();
  ctx.stroke();
  
  // Cilia (hair-like structures all around)
  ctx.strokeStyle = '#4FC3F7';
  ctx.lineWidth = 1;
  for(let i = 0; i < 30; i++) {
    const angle = (i * Math.PI * 2) / 30;
    const baseX = protistWidth * 0.5 + Math.cos(angle) * protistWidth * 0.25;
    const baseY = height * 0.5 + Math.sin(angle) * height * 0.25;
    const tipX = baseX + Math.cos(angle) * protistWidth * 0.08;
    const tipY = baseY + Math.sin(angle) * height * 0.08;
    
    ctx.beginPath();
    ctx.moveTo(baseX, baseY);
    ctx.lineTo(tipX, tipY);
    ctx.stroke();
  }
  
  // Macronucleus (large, kidney-shaped)
  ctx.fillStyle = '#7E57C2';
  ctx.beginPath();
  ctx.ellipse(protistWidth * 0.5, height * 0.48, protistWidth * 0.12, height * 0.08, 0.3, 0, Math.PI * 2);
  ctx.fill();
  
  // Micronucleus (small)
  ctx.fillStyle = '#5E35B1';
  ctx.beginPath();
  ctx.arc(protistWidth * 0.55, height * 0.52, protistWidth * 0.03, 0, Math.PI * 2);
  ctx.fill();
  
  // Oral groove (feeding structure)
  ctx.strokeStyle = '#01579B';
  ctx.lineWidth = 3;
  ctx.beginPath();
  ctx.moveTo(protistWidth * 0.3, height * 0.4);
  ctx.quadraticCurveTo(protistWidth * 0.4, height * 0.48, protistWidth * 0.45, height * 0.52);
  ctx.stroke();
  
  // Contractile vacuoles
  ctx.fillStyle = '#81D4FA';
  ctx.beginPath();
  ctx.arc(protistWidth * 0.4, height * 0.6, protistWidth * 0.04, 0, Math.PI * 2);
  ctx.fill();
  ctx.beginPath();
  ctx.arc(protistWidth * 0.6, height * 0.4, protistWidth * 0.04, 0, Math.PI * 2);
  ctx.fill();
  
  // Food vacuoles
  ctx.fillStyle = '#FFEB3B';
  for(let i = 0; i < 4; i++) {
    const fvx = protistWidth * 0.45 + i * protistWidth * 0.05;
    const fvy = height * 0.55 + Math.sin(i) * height * 0.05;
    ctx.beginPath();
    ctx.arc(fvx, fvy, protistWidth * 0.025, 0, Math.PI * 2);
    ctx.fill();
  }
  
  // Label
  ctx.fillStyle = '#2C3E50';
  ctx.font = 'bold 16px Arial';
  ctx.textAlign = 'center';
  ctx.fillText('Paramecium', protistWidth * 0.5, height * 0.15);
  
  ctx.restore();
  
  // 3. EUGLENA (right)
  ctx.save();
  ctx.translate(protistWidth * 2, 0);
  
  // Elongated body
  ctx.fillStyle = '#F1F8E9';
  ctx.strokeStyle = '#689F38';
  ctx.lineWidth = 3;
  ctx.beginPath();
  ctx.ellipse(protistWidth * 0.5, height * 0.5, protistWidth * 0.15, height * 0.28, 0, 0, Math.PI * 2);
  ctx.fill();
  ctx.stroke();
  
  // Flagellum (whip-like tail)
  ctx.strokeStyle = '#558B2F';
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.moveTo(protistWidth * 0.5, height * 0.22);
  // Wavy flagellum
  for(let i = 0; i < 15; i++) {
    const fx = protistWidth * 0.5 + Math.sin(i * 0.5) * protistWidth * 0.08;
    const fy = height * 0.22 - i * height * 0.015;
    ctx.lineTo(fx, fy);
  }
  ctx.stroke();
  
  // Reservoir (base of flagellum)
  ctx.fillStyle = '#AED581';
  ctx.beginPath();
  ctx.arc(protistWidth * 0.5, height * 0.25, protistWidth * 0.04, 0, Math.PI * 2);
  ctx.fill();
  
  // Eyespot (photoreceptor)
  ctx.fillStyle = '#FF5722';
  ctx.beginPath();
  ctx.arc(protistWidth * 0.52, height * 0.32, protistWidth * 0.03, 0, Math.PI * 2);
  ctx.fill();
  
  // Nucleus
  ctx.fillStyle = '#8E24AA';
  ctx.beginPath();
  ctx.arc(protistWidth * 0.5, height * 0.5, protistWidth * 0.06, 0, Math.PI * 2);
  ctx.fill();
  
  // Chloroplasts (green organelles for photosynthesis)
  ctx.fillStyle = '#4CAF50';
  for(let i = 0; i < 8; i++) {
    const angle = (i * Math.PI * 2) / 8;
    const cx = protistWidth * 0.5 + Math.cos(angle) * protistWidth * 0.08;
    const cy = height * 0.5 + Math.sin(angle) * height * 0.15;
    ctx.beginPath();
    ctx.ellipse(cx, cy, protistWidth * 0.025, height * 0.04, angle, 0, Math.PI * 2);
    ctx.fill();
  }
  
  // Contractile vacuole
  ctx.fillStyle = '#29B6F6';
  ctx.beginPath();
  ctx.arc(protistWidth * 0.5, height * 0.68, protistWidth * 0.045, 0, Math.PI * 2);
  ctx.fill();
  
  // Pellicle (protein strips - surface pattern)
  ctx.strokeStyle = '#9CCC65';
  ctx.lineWidth = 1;
  ctx.setLineDash([3, 2]);
  for(let i = 0; i < 6; i++) {
    ctx.beginPath();
    ctx.ellipse(
      protistWidth * 0.5,
      height * 0.5,
      protistWidth * 0.15 - i * protistWidth * 0.02,
      height * 0.28 - i * height * 0.035,
      0, 0, Math.PI * 2
    );
    ctx.stroke();
  }
  ctx.setLineDash([]);
  
  // Label
  ctx.fillStyle = '#2C3E50';
  ctx.font = 'bold 16px Arial';
  ctx.textAlign = 'center';
  ctx.fillText('Euglena', protistWidth * 0.5, height * 0.15);
  
  ctx.restore();
  
  ctx.restore();
}

static drawBacterialGrowthCurve(ctx, x, y, width, height) {
  ctx.save();
  ctx.translate(x, y);
  
  // Axes
  ctx.strokeStyle = '#2C3E50';
  ctx.lineWidth = 3;
  ctx.beginPath();
  ctx.moveTo(width * 0.1, height * 0.1);
  ctx.lineTo(width * 0.1, height * 0.85);
  ctx.lineTo(width * 0.9, height * 0.85);
  ctx.stroke();
  
  // Axis labels
  ctx.fillStyle = '#2C3E50';
  ctx.font = 'bold 14px Arial';
  ctx.textAlign = 'center';
  
  // Y-axis label
  ctx.save();
  ctx.translate(width * 0.03, height * 0.45);
  ctx.rotate(-Math.PI / 2);
  ctx.fillText('Log Number of Cells', 0, 0);
  ctx.restore();
  
  // X-axis label
  ctx.fillText('Time', width * 0.5, height * 0.95);
  
  // Growth curve
  const phases = [
    { name: 'Lag', start: 0.15, end: 0.25, growth: 0 },
    { name: 'Log/Exponential', start: 0.25, end: 0.5, growth: 1 },
    { name: 'Stationary', start: 0.5, end: 0.7, growth: 0 },
    { name: 'Death', start: 0.7, end: 0.85, growth: -0.5 }
  ];
  
  ctx.strokeStyle = '#E74C3C';
  ctx.beginPath();
  
  let currentY = height * 0.75; // Start low
  ctx.moveTo(width * 0.1, currentY);
  
  // Lag phase (minimal growth)
  for(let i = 0; i <= 20; i++) {
    const t = i / 20;
    const px = width * (0.1 + t * 0.15);
    const py = currentY - height * 0.02 * t;
    ctx.lineTo(px, py);
  }
  currentY = height * 0.73;
  
  // Exponential/Log phase (rapid growth)
  for(let i = 0; i <= 30; i++) {
    const t = i / 30;
    const px = width * (0.25 + t * 0.25);
    const py = currentY - height * 0.5 * Math.pow(t, 1.5);
    ctx.lineTo(px, py);
  }
  currentY = height * 0.23;
  
  // Stationary phase (plateau)
  for(let i = 0; i <= 20; i++) {
    const t = i / 20;
    const px = width * (0.5 + t * 0.2);
    const py = currentY + height * 0.01 * Math.sin(t * Math.PI * 2);
    ctx.lineTo(px, py);
  }
  
  // Death phase (decline)
  for(let i = 0; i <= 20; i++) {
    const t = i / 20;
    const px = width * (0.7 + t * 0.15);
    const py = currentY + height * 0.25 * t;
    ctx.lineTo(px, py);
  }
  
  ctx.stroke();
  
  // Phase dividers and labels
  ctx.strokeStyle = '#95A5A6';
  ctx.lineWidth = 2;
  ctx.setLineDash([5, 5]);
  
  const phaseDividers = [0.25, 0.5, 0.7];
  phaseDividers.forEach(xPos => {
    ctx.beginPath();
    ctx.moveTo(width * xPos, height * 0.1);
    ctx.lineTo(width * xPos, height * 0.85);
    ctx.stroke();
  });
  ctx.setLineDash([]);
  
  // Phase labels and colors
  const phaseColors = ['#3498DB', '#2ECC71', '#F39C12', '#E74C3C'];
  ctx.font = 'bold 12px Arial';
  
  phases.forEach((phase, index) => {
    const midX = width * ((phase.start + phase.end) / 2);
    
    // Phase name
    ctx.fillStyle = phaseColors[index];
    ctx.textAlign = 'center';
    ctx.fillText(phase.name, midX, height * 0.05);
    ctx.font = '10px Arial';
    ctx.fillText('Phase', midX, height * 0.08);
    ctx.font = 'bold 12px Arial';
    
    // Highlight region
    ctx.fillStyle = `${phaseColors[index]}22`;
    ctx.fillRect(width * phase.start, height * 0.1, width * (phase.end - phase.start), height * 0.75);
  });
  
  // Bacterial cell representations in each phase
  ctx.fillStyle = '#8B4789';
  
  // Lag - few cells
  for(let i = 0; i < 3; i++) {
    ctx.beginPath();
    ctx.arc(width * (0.18 + i * 0.02), height * 0.78, 3, 0, Math.PI * 2);
    ctx.fill();
  }
  
  // Log - many cells
  for(let i = 0; i < 15; i++) {
    ctx.beginPath();
    ctx.arc(
      width * (0.32 + (i % 5) * 0.03),
      height * (0.55 - Math.floor(i / 5) * 0.08),
      3, 0, Math.PI * 2
    );
    ctx.fill();
  }
  
  // Stationary - crowded cells
  for(let i = 0; i < 12; i++) {
    ctx.beginPath();
    ctx.arc(
      width * (0.55 + (i % 4) * 0.03),
      height * (0.22 + Math.floor(i / 4) * 0.03),
      3, 0, Math.PI * 2
    );
    ctx.fill();
  }
  
  // Death - fewer cells, some dead
  ctx.fillStyle = '#8B4789';
  for(let i = 0; i < 5; i++) {
    ctx.beginPath();
    ctx.arc(width * (0.75 + i * 0.02), height * (0.35 + i * 0.05), 3, 0, Math.PI * 2);
    ctx.fill();
  }
  ctx.fillStyle = '#95A5A6'; // Dead cells
  for(let i = 0; i < 8; i++) {
    ctx.beginPath();
    ctx.arc(
      width * (0.76 + (i % 3) * 0.02),
      height * (0.45 + Math.floor(i / 3) * 0.04),
      2, 0, Math.PI * 2
    );
    ctx.fill();
  }
  
  ctx.restore();
}

static drawViralReplicationCycles(ctx, x, y, width, height, cycleType = 'both') {
  ctx.save();
  ctx.translate(x, y);
  
  if(cycleType === 'both') {
    // Draw both cycles side by side
    const halfWidth = width / 2;
    
    // Lytic cycle (left)
    this.drawLyticCycle(ctx, 0, 0, halfWidth, height);
    
    // Lysogenic cycle (right)
    this.drawLysogenicCycle(ctx, halfWidth, 0, halfWidth, height);
    
  } else if(cycleType === 'lytic') {
    this.drawLyticCycle(ctx, 0, 0, width, height);
  } else {
    this.drawLysogenicCycle(ctx, 0, 0, width, height);
  }
  
  ctx.restore();
}

static drawLyticCycle(ctx, x, y, width, height) {
  ctx.save();
  ctx.translate(x, y);
  
  // Title
  ctx.fillStyle = '#E74C3C';
  ctx.font = 'bold 16px Arial';
  ctx.textAlign = 'center';
  ctx.fillText('LYTIC CYCLE', width * 0.5, height * 0.05);
  ctx.font = '11px Arial';
  ctx.fillText('(Destroys host cell)', width * 0.5, height * 0.08);
  
  const stepSize = height * 0.18;
  
  // Step 1: Attachment
  ctx.fillStyle = '#3498DB';
  ctx.font = 'bold 11px Arial';
  ctx.textAlign = 'left';
  ctx.fillText('1. Attachment', width * 0.05, height * 0.15);
  
  // Bacterium
  ctx.fillStyle = '#E8F5E9';
  ctx.strokeStyle = '#4CAF50';
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.roundRect(width * 0.5, height * 0.18, width * 0.35, height * 0.1, height * 0.05);
  ctx.fill();
  ctx.stroke();
  
  // Virus attaching
  ctx.fillStyle = '#FF6B6B';
  ctx.beginPath();
  for(let i = 0; i < 6; i++) {
    const angle = (i * Math.PI * 2) / 6;
    const vx = width * 0.35 + Math.cos(angle) * width * 0.04;
    const vy = height * 0.23 + Math.sin(angle) * width * 0.04;
    if(i === 0) ctx.moveTo(vx, vy);
    else ctx.lineTo(vx, vy);
  }
  ctx.closePath();
  ctx.fill();
  ctx.strokeStyle = '#C92A2A';
  ctx.stroke();
  
  // Step 2: Injection
  ctx.fillStyle = '#3498DB';
  ctx.textAlign = 'left';
  ctx.fillText('2. Injection', width * 0.05, height * 0.33);
  
  // Virus injecting DNA
  ctx.fillStyle = '#FF6B6B';
  ctx.beginPath();
  for(let i = 0; i < 6; i++) {
    const angle = (i * Math.PI * 2) / 6;
    const vx = width * 0.35 + Math.cos(angle) * width * 0.04;
    const vy = height * 0.36 + Math.sin(angle) * width * 0.04;
    if(i === 0) ctx.moveTo(vx, vy);
    else ctx.lineTo(vx, vy);
  }
  ctx.closePath();
  ctx.fill();
  ctx.stroke();
  
  // Bacterium with DNA entering
  ctx.fillStyle = '#E8F5E9';
  ctx.strokeStyle = '#4CAF50';
  ctx.beginPath();
  ctx.roundRect(width * 0.5, height * 0.31, width * 0.35, height * 0.1, height * 0.05);
  ctx.fill();
  ctx.stroke();
  
  // Viral DNA inside
  ctx.strokeStyle = '#4ECDC4';
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.moveTo(width * 0.55, height * 0.36);
  ctx.lineTo(width * 0.65, height * 0.36);
  ctx.stroke();
  
  // Step 3: Replication
  ctx.fillStyle = '#3498DB';
  ctx.textAlign = 'left';
  ctx.fillText('3. Replication', width * 0.05, height * 0.48);
  
  // Bacterium with multiple viral components
  ctx.fillStyle = '#E8F5E9';
  ctx.strokeStyle = '#4CAF50';
  ctx.beginPath();
  ctx.roundRect(width * 0.5, height * 0.44, width * 0.35, height * 0.1, height * 0.05);
  ctx.fill();
  ctx.stroke();
  
  // Multiple DNA copies
  ctx.strokeStyle = '#4ECDC4';
  ctx.lineWidth = 1.5;
  for(let i = 0; i < 5; i++) {
    ctx.beginPath();
    ctx.moveTo(width * (0.52 + i * 0.04), height * 0.47);
    ctx.lineTo(width * (0.55 + i * 0.04), height * 0.47);
    ctx.stroke();
  }
  
  // Viral proteins
  ctx.fillStyle = '#FF6B6B';
  for(let i = 0; i < 6; i++) {
    ctx.beginPath();
    ctx.arc(width * (0.53 + (i % 3) * 0.05), height * (0.49 + Math.floor(i / 3) * 0.02), width * 0.015, 0, Math.PI * 2);
    ctx.fill();
  }
  
  // Step 4: Assembly
  ctx.fillStyle = '#3498DB';
  ctx.textAlign = 'left';
  ctx.fillText('4. Assembly', width * 0.05, height * 0.63);
  
  // Bacterium with assembled viruses
  ctx.fillStyle = '#E8F5E9';
  ctx.strokeStyle = '#4CAF50';
  ctx.beginPath();
  ctx.roundRect(width * 0.5, height * 0.57, width * 0.35, height * 0.1, height * 0.05);
  ctx.fill();
  ctx.stroke();
  
  // New viruses inside
  for(let i = 0; i < 6; i++) {
    const vx = width * (0.55 + (i % 3) * 0.08);
    const vy = height * (0.60 + Math.floor(i / 3) * 0.04);
    
    ctx.fillStyle = '#FF6B6B';
    ctx.beginPath();
    for(let j = 0; j < 6; j++) {
      const angle = (j * Math.PI * 2) / 6;
      const px = vx + Math.cos(angle) * width * 0.02;
      const py = vy + Math.sin(angle) * width * 0.02;
      if(j === 0) ctx.moveTo(px, py);
      else ctx.lineTo(px, py);
    }
    ctx.closePath();
    ctx.fill();
  }
  
  // Step 5: Lysis (cell bursts)
  ctx.fillStyle = '#3498DB';
  ctx.textAlign = 'left';
  ctx.fillText('5. Lysis', width * 0.05, height * 0.78);
  
  // Burst cell
  ctx.strokeStyle = '#E74C3C';
  ctx.lineWidth = 3;
  ctx.beginPath();
  // Broken cell membrane
  ctx.moveTo(width * 0.5, height * 0.75);
  ctx.lineTo(width * 0.55, height * 0.72);
  ctx.moveTo(width * 0.6, height * 0.73);
  ctx.lineTo(width * 0.65, height * 0.7);
  ctx.moveTo(width * 0.7, height * 0.74);
  ctx.lineTo(width * 0.75, height * 0.72);
  ctx.moveTo(width * 0.8, height * 0.75);
  ctx.lineTo(width * 0.85, height * 0.73);
  
  ctx.moveTo(width * 0.5, height * 0.81);
  ctx.lineTo(width * 0.55, height * 0.84);
  ctx.moveTo(width * 0.6, height * 0.83);
  ctx.lineTo(width * 0.65, height * 0.86);
  ctx.moveTo(width * 0.7, height * 0.82);
  ctx.lineTo(width * 0.75, height * 0.84);
  ctx.moveTo(width * 0.8, height * 0.81);
  ctx.lineTo(width * 0.85, height * 0.83);
  ctx.stroke();
  
  // Released viruses
  ctx.fillStyle = '#FF6B6B';
  for(let i = 0; i < 10; i++) {
    const angle = (i * Math.PI * 2) / 10;
    const radius = width * 0.15;
    const vx = width * 0.675 + Math.cos(angle) * radius;
    const vy = height * 0.78 + Math.sin(angle) * radius * 0.5;
    
    ctx.beginPath();
    for(let j = 0; j < 6; j++) {
      const vAngle = (j * Math.PI * 2) / 6;
      const px = vx + Math.cos(vAngle) * width * 0.02;
      const py = vy + Math.sin(vAngle) * width * 0.02;
      if(j === 0) ctx.moveTo(px, py);
      else ctx.lineTo(px, py);
    }
    ctx.closePath();
    ctx.fill();
  }
  
  ctx.restore();
}

static drawLysogenicCycle(ctx, x, y, width, height) {
  ctx.save();
  ctx.translate(x, y);
  
  // Title
  ctx.fillStyle = '#9B59B6';
  ctx.font = 'bold 16px Arial';
  ctx.textAlign = 'center';
  ctx.fillText('LYSOGENIC CYCLE', width * 0.5, height * 0.05);
  ctx.font = '11px Arial';
  ctx.fillText('(Dormant, no destruction)', width * 0.5, height * 0.08);
  
  // Step 1: Attachment
  ctx.fillStyle = '#3498DB';
  ctx.font = 'bold 11px Arial';
  ctx.textAlign = 'left';
  ctx.fillText('1. Attachment', width * 0.05, height * 0.15);
  
  // Bacterium
  ctx.fillStyle = '#E8F5E9';
  ctx.strokeStyle = '#4CAF50';
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.roundRect(width * 0.5, height * 0.18, width * 0.35, height * 0.1, height * 0.05);
  ctx.fill();
  ctx.stroke();
  
  // Virus
  ctx.fillStyle = '#9B59B6';
  ctx.beginPath();
  for(let i = 0; i < 6; i++) {
    const angle = (i * Math.PI * 2) / 6;
    const vx = width * 0.35 + Math.cos(angle) * width * 0.04;
    const vy = height * 0.23 + Math.sin(angle) * width * 0.04;
    if(i === 0) ctx.moveTo(vx, vy);
    else ctx.lineTo(vx, vy);
  }
  ctx.closePath();
  ctx.fill();
  ctx.strokeStyle = '#6C3483';
  ctx.stroke();
  
  // Step 2: Injection
  ctx.fillStyle = '#3498DB';
  ctx.textAlign = 'left';
  ctx.fillText('2. Injection', width * 0.05, height * 0.33);
  
  ctx.fillStyle = '#E8F5E9';
  ctx.strokeStyle = '#4CAF50';
  ctx.beginPath();
  ctx.roundRect(width * 0.5, height * 0.31, width * 0.35, height * 0.1, height * 0.05);
  ctx.fill();
  ctx.stroke();
  
  // Viral DNA
  ctx.strokeStyle = '#9B59B6';
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.moveTo(width * 0.55, height * 0.36);
  ctx.lineTo(width * 0.65, height * 0.36);
  ctx.stroke();
  
  // Step 3: Integration (prophage)
  ctx.fillStyle = '#3498DB';
  ctx.textAlign = 'left';
  ctx.fillText('3. Integration', width * 0.05, height * 0.48);
  ctx.font = '9px Arial';
  ctx.fillText('(becomes prophage)', width * 0.05, height * 0.51);
  ctx.font = 'bold 11px Arial';
  
  ctx.fillStyle = '#E8F5E9';
  ctx.strokeStyle = '#4CAF50';
  ctx.beginPath();
  ctx.roundRect(width * 0.5, height * 0.44, width * 0.35, height * 0.1, height * 0.05);
  ctx.fill();
  ctx.stroke();
  
  // Bacterial chromosome
  ctx.strokeStyle = '#4ECDC4';
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.arc(width * 0.675, height * 0.49, width * 0.08, 0, Math.PI * 2);
  ctx.stroke();
  
  // Integrated viral DNA
  ctx.strokeStyle = '#9B59B6';
  ctx.lineWidth = 3;
  ctx.beginPath();
  ctx.arc(width * 0.675, height * 0.49, width * 0.08, Math.PI * 0.3, Math.PI * 0.7);
  ctx.stroke();
  
  // Step 4: Cell division
  ctx.fillStyle = '#3498DB';
  ctx.textAlign = 'left';
  ctx.fillText('4. Cell Division', width * 0.05, height * 0.63);
  ctx.font = '9px Arial';
  ctx.fillText('(prophage replicates)', width * 0.05, height * 0.66);
  ctx.font = 'bold 11px Arial';
  
  // Two daughter cells
  ctx.fillStyle = '#E8F5E9';
  ctx.strokeStyle = '#4CAF50';
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.roundRect(width * 0.48, height * 0.68, width * 0.16, height * 0.08, height * 0.04);
  ctx.fill();
  ctx.stroke();
  
  ctx.beginPath();
  ctx.roundRect(width * 0.68, height * 0.68, width * 0.16, height * 0.08, height * 0.04);
  ctx.fill();
  ctx.stroke();
  
  // Prophage in both cells
  ctx.strokeStyle = '#4ECDC4';
  ctx.lineWidth = 1.5;
  ctx.beginPath();
  ctx.arc(width * 0.56, height * 0.72, width * 0.04, 0, Math.PI * 2);
  ctx.stroke();
  ctx.strokeStyle = '#9B59B6';
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.arc(width * 0.56, height * 0.72, width * 0.04, Math.PI * 0.3, Math.PI * 0.7);
  ctx.stroke();
  
  ctx.strokeStyle = '#4ECDC4';
  ctx.lineWidth = 1.5;
  ctx.beginPath();
  ctx.arc(width * 0.76, height * 0.72, width * 0.04, 0, Math.PI * 2);
  ctx.stroke();
  ctx.strokeStyle = '#9B59B6';
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.arc(width * 0.76, height * 0.72, width * 0.04, Math.PI * 0.3, Math.PI * 0.7);
  ctx.stroke();
  
  // Step 5: Induction (optional - can enter lytic)
  ctx.fillStyle = '#E74C3C';
  ctx.font = 'bold 11px Arial';
  ctx.textAlign = 'left';
  ctx.fillText('5. Induction', width * 0.05, height * 0.85);
  ctx.font = '9px Arial';
  ctx.fillText('(stress → lytic cycle)', width * 0.05, height * 0.88);
  
  // Arrow to lytic cycle
  ctx.strokeStyle = '#E74C3C';
  ctx.lineWidth = 2;
  this.drawArrow(ctx, width * 0.85, height * 0.72, width * 0.9, height * 0.9, '#E74C3C', 2);
  
  ctx.fillStyle = '#E74C3C';
  ctx.font = '10px Arial';
  ctx.textAlign = 'center';
  ctx.fillText('→ Lytic', width * 0.9, height * 0.95);
  
  ctx.restore();
}

static drawMicroscopyComparison(ctx, x, y, width, height) {
  ctx.save();
  ctx.translate(x, y);
  
  const halfWidth = width / 2;
  
  // Light Microscope (left)
  ctx.save();
  ctx.translate(0, 0);
  
  // Title
  ctx.fillStyle = '#3498DB';
  ctx.font = 'bold 18px Arial';
  ctx.textAlign = 'center';
  ctx.fillText('Light Microscope', halfWidth * 0.5, height * 0.05);
  
  // Microscope body
  ctx.fillStyle = '#7F8C8D';
  ctx.strokeStyle = '#2C3E50';
  ctx.lineWidth = 2;
  
  // Base
  ctx.fillRect(halfWidth * 0.2, height * 0.85, halfWidth * 0.6, height * 0.1);
  
  // Arm
  ctx.fillRect(halfWidth * 0.48, height * 0.3, halfWidth * 0.08, height * 0.55);
  
  // Head/body
  ctx.fillRect(halfWidth * 0.25, height * 0.25, halfWidth * 0.5, height * 0.1);
  
  // Eyepiece
  ctx.fillStyle = '#34495E';
  ctx.fillRect(halfWidth * 0.48, height * 0.15, halfWidth * 0.08, height * 0.1);
  
  // Lens
  ctx.fillStyle = '#85C1E2';
  ctx.beginPath();
  ctx.arc(halfWidth * 0.52, height * 0.18, halfWidth * 0.03, 0, Math.PI * 2);
  ctx.fill();
  
  // Objective lenses
  ctx.fillStyle = '#34495E';
  for(let i = 0; i < 3; i++) {
    ctx.fillRect(halfWidth * (0.3 + i * 0.15), height * 0.35, halfWidth * 0.08, height * 0.08);
    // Lens glass
    ctx.fillStyle = '#85C1E2';
    ctx.beginPath();
    ctx.arc(halfWidth * (0.34 + i * 0.15), height * 0.43, halfWidth * 0.025, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = '#34495E';
  }
  
  // Stage
  ctx.fillStyle = '#95A5A6';
  ctx.fillRect(halfWidth * 0.2, height * 0.5, halfWidth * 0.6, height * 0.05);
  
  // Slide
  ctx.fillStyle = '#E8F8F5';
  ctx.strokeStyle = '#16A085';
  ctx.lineWidth = 1;
  ctx.fillRect(halfWidth * 0.35, height * 0.48, halfWidth * 0.3, height * 0.02);
  ctx.strokeRect(halfWidth * 0.35, height * 0.48, halfWidth * 0.3, height * 0.02);
  
  // Light source
  ctx.fillStyle = '#F39C12';
  ctx.beginPath();
  ctx.arc(halfWidth * 0.52, height * 0.7, halfWidth * 0.05, 0, Math.PI * 2);
  ctx.fill();
  
  // Light rays
  ctx.strokeStyle = '#FFD93D';
  ctx.lineWidth = 2;
  for(let i = 0; i < 5; i++) {
    this.drawArrow(
      ctx,
      halfWidth * 0.52,
      height * 0.65,
      halfWidth * (0.48 + i * 0.02),
      height * 0.52,
      '#FFD93D',
      1
    );
  }
  
  // Specifications
  ctx.fillStyle = '#2C3E50';
  ctx.font = '11px Arial';
  ctx.textAlign = 'left';
  ctx.fillText('• Magnification: up to 1000x', halfWidth * 0.05, height * 0.92);
  ctx.fillText('• Uses visible light', halfWidth * 0.05, height * 0.96);
  
  ctx.restore();
  
  // Electron Microscope (right)
  ctx.save();
  ctx.translate(halfWidth, 0);
  
  // Title
  ctx.fillStyle = '#E74C3C';
  ctx.font = 'bold 18px Arial';
  ctx.textAlign = 'center';
  ctx.fillText('Electron Microscope', halfWidth * 0.5, height * 0.05);
  
  // Microscope column (tall and enclosed)
  ctx.fillStyle = '#34495E';
  ctx.strokeStyle = '#2C3E50';
  ctx.lineWidth = 3;
  ctx.fillRect(halfWidth * 0.3, height * 0.15, halfWidth * 0.4, height * 0.6);
  ctx.strokeRect(halfWidth * 0.3, height * 0.15, halfWidth * 0.4, height * 0.6);
  
  // Electron gun (top)
  ctx.fillStyle = '#E74C3C';
  ctx.fillRect(halfWidth * 0.42, height * 0.1, halfWidth * 0.16, height * 0.05);
  ctx.strokeRect(halfWidth * 0.42, height * 0.1, halfWidth * 0.16, height * 0.05);
  
  // Electron beam
  ctx.strokeStyle = '#3498DB';
  ctx.lineWidth = 3;
  ctx.setLineDash([2, 2]);
  ctx.beginPath();
  ctx.moveTo(halfWidth * 0.5, height * 0.15);
  ctx.lineTo(halfWidth * 0.5, height * 0.5);
  ctx.stroke();
  ctx.setLineDash([]);
  
  // Electromagnetic lenses (coils)
  ctx.strokeStyle = '#F39C12';
  ctx.lineWidth = 4;
  for(let i = 0; i < 3; i++) {
    const lensY = height * (0.25 + i * 0.12);
    ctx.beginPath();
    ctx.ellipse(halfWidth * 0.5, lensY, halfWidth * 0.15, height * 0.03, 0, 0, Math.PI * 2);
    ctx.stroke();
    
    // Coil lines
    ctx.lineWidth = 1;
    for(let j = 0; j < 5; j++) {
      ctx.beginPath();
      ctx.ellipse(
        halfWidth * 0.5,
        lensY - height * 0.02 + j * height * 0.01,
        halfWidth * 0.15,
        height * 0.005,
        0, 0, Math.PI * 2
      );
      ctx.stroke();
    }
    ctx.lineWidth = 4;
  }
  
  // Specimen chamber
  ctx.fillStyle = '#95A5A6';
  ctx.fillRect(halfWidth * 0.35, height * 0.52, halfWidth * 0.3, height * 0.05);
  ctx.strokeStyle = '#7F8C8D';
  ctx.lineWidth = 2;
  ctx.strokeRect(halfWidth * 0.35, height * 0.52, halfWidth * 0.3, height * 0.05);
  
  // Specimen
  ctx.fillStyle = '#16A085';
  ctx.fillStyle = '#16A085';
  ctx.fillRect(halfWidth * 0.45, height * 0.535, halfWidth * 0.1, height * 0.02);
  
  // Detector/Screen
  ctx.fillStyle = '#2ECC71';
  ctx.fillRect(halfWidth * 0.35, height * 0.6, halfWidth * 0.3, height * 0.12);
  ctx.strokeStyle = '#27AE60';
  ctx.lineWidth = 2;
  ctx.strokeRect(halfWidth * 0.35, height * 0.6, halfWidth * 0.3, height * 0.12);
  
  // Screen display (showing detailed cell image)
  ctx.fillStyle = '#000000';
  ctx.fillRect(halfWidth * 0.37, height * 0.62, halfWidth * 0.26, height * 0.08);
  
  // Simulated high-resolution image on screen
  ctx.fillStyle = '#00FF00';
  ctx.font = '8px Arial';
  ctx.fillText('High Resolution', halfWidth * 0.4, height * 0.66);
  ctx.fillText('Cell Structure', halfWidth * 0.4, height * 0.69);
  
  // Base/vacuum pump
  ctx.fillStyle = '#7F8C8D';
  ctx.fillRect(halfWidth * 0.2, height * 0.8, halfWidth * 0.6, height * 0.08);
  ctx.strokeStyle = '#2C3E50';
  ctx.lineWidth = 2;
  ctx.strokeRect(halfWidth * 0.2, height * 0.8, halfWidth * 0.6, height * 0.08);
  
  // Vacuum pump label
  ctx.fillStyle = '#FFFFFF';
  ctx.font = '10px Arial';
  ctx.textAlign = 'center';
  ctx.fillText('VACUUM PUMP', halfWidth * 0.5, height * 0.85);
  
  // Specifications
  ctx.fillStyle = '#2C3E50';
  ctx.font = '11px Arial';
  ctx.textAlign = 'left';
  ctx.fillText('• Magnification: up to 2,000,000x', halfWidth * 0.05, height * 0.92);
  ctx.fillText('• Uses electron beam', halfWidth * 0.05, height * 0.96);
  
  ctx.restore();
  
  // Comparison table at bottom
  ctx.fillStyle = '#2C3E50';
  ctx.font = 'bold 12px Arial';
  ctx.textAlign = 'center';
  ctx.fillText('Comparison', width * 0.5, height * 0.02);
  
  ctx.restore();
}

// Helper arrow function (if not already present in AnatomicalShapes)
static drawArrow(ctx, x1, y1, x2, y2, color, lineWidth) {
  ctx.save();
  ctx.strokeStyle = color;
  ctx.fillStyle = color;
  ctx.lineWidth = lineWidth;
  
  // Draw line
  ctx.beginPath();
  ctx.moveTo(x1, y1);
  ctx.lineTo(x2, y2);
  ctx.stroke();
  
  // Draw arrowhead
  const angle = Math.atan2(y2 - y1, x2 - x1);
  const arrowSize = lineWidth * 3;
  ctx.beginPath();
  ctx.moveTo(x2, y2);
  ctx.lineTo(
    x2 - arrowSize * Math.cos(angle - Math.PI / 6),
    y2 - arrowSize * Math.sin(angle - Math.PI / 6)
  );
  ctx.lineTo(
    x2 - arrowSize * Math.cos(angle + Math.PI / 6),
    y2 - arrowSize * Math.sin(angle + Math.PI / 6)
  );
  ctx.closePath();
  ctx.fill();
  
  ctx.restore();
}  


static drawLeafCrossSection(ctx, x, y, width, height) {
  ctx.save();
  ctx.translate(x, y);
  
  // Leaf outline (elliptical cross-section)
  ctx.fillStyle = '#90EE90';
  ctx.beginPath();
  ctx.ellipse(width * 0.5, height * 0.5, width * 0.4, height * 0.45, 0, 0, Math.PI * 2);
  ctx.fill();
  ctx.strokeStyle = '#228B22';
  ctx.lineWidth = 2;
  ctx.stroke();
  
  // Upper epidermis
  ctx.fillStyle = '#7CFC00';
  ctx.beginPath();
  ctx.ellipse(width * 0.5, height * 0.08, width * 0.38, height * 0.03, 0, 0, Math.PI, true);
  ctx.fill();
  ctx.strokeStyle = '#228B22';
  ctx.lineWidth = 1;
  ctx.stroke();
  
  // Cuticle (waxy layer)
  ctx.strokeStyle = '#FFD700';
  ctx.lineWidth = 3;
  ctx.beginPath();
  ctx.ellipse(width * 0.5, height * 0.05, width * 0.38, height * 0.02, 0, 0, Math.PI, true);
  ctx.stroke();
  
  // Palisade mesophyll (tall columnar cells)
  ctx.fillStyle = '#32CD32';
  for(let i = 0; i < 12; i++) {
    const cellX = width * 0.15 + i * width * 0.06;
    ctx.fillRect(cellX, height * 0.12, width * 0.05, height * 0.15);
    ctx.strokeStyle = '#228B22';
    ctx.lineWidth = 1;
    ctx.strokeRect(cellX, height * 0.12, width * 0.05, height * 0.15);
    
    // Chloroplasts in palisade cells
    ctx.fillStyle = '#006400';
    for(let j = 0; j < 4; j++) {
      ctx.beginPath();
      ctx.arc(cellX + width * 0.025, height * 0.14 + j * height * 0.03, width * 0.008, 0, Math.PI * 2);
      ctx.fill();
    }
    ctx.fillStyle = '#32CD32';
  }
  
  // Spongy mesophyll (irregular cells with air spaces)
  ctx.fillStyle = '#98FB98';
  const spongyCells = [
    [0.2, 0.35, 0.08, 0.1], [0.35, 0.38, 0.09, 0.09],
    [0.5, 0.36, 0.08, 0.11], [0.65, 0.39, 0.1, 0.08],
    [0.25, 0.5, 0.09, 0.1], [0.45, 0.52, 0.1, 0.09],
    [0.7, 0.51, 0.08, 0.1], [0.3, 0.65, 0.09, 0.09],
    [0.55, 0.67, 0.08, 0.1], [0.75, 0.65, 0.09, 0.08]
  ];
  
  spongyCells.forEach(([cx, cy, cw, ch]) => {
    ctx.beginPath();
    ctx.ellipse(width * cx, height * cy, width * cw, height * ch, 0, 0, Math.PI * 2);
    ctx.fill();
    ctx.strokeStyle = '#228B22';
    ctx.lineWidth = 1;
    ctx.stroke();
    
    // Chloroplasts (fewer than palisade)
    ctx.fillStyle = '#006400';
    ctx.beginPath();
    ctx.arc(width * cx, height * cy, width * 0.01, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = '#98FB98';
  });
  
  // Vascular bundle (vein) in center
  ctx.fillStyle = '#8B4513';
  ctx.beginPath();
  ctx.ellipse(width * 0.5, height * 0.5, width * 0.05, height * 0.08, 0, 0, Math.PI * 2);
  ctx.fill();
  ctx.strokeStyle = '#654321';
  ctx.lineWidth = 2;
  ctx.stroke();
  
  // Xylem (upper part - water transport)
  ctx.fillStyle = '#D2691E';
  ctx.beginPath();
  ctx.ellipse(width * 0.5, height * 0.46, width * 0.03, height * 0.03, 0, 0, Math.PI * 2);
  ctx.fill();
  
  // Phloem (lower part - sugar transport)
  ctx.fillStyle = '#DEB887';
  ctx.beginPath();
  ctx.ellipse(width * 0.5, height * 0.54, width * 0.03, height * 0.03, 0, 0, Math.PI * 2);
  ctx.fill();
  
  // Lower epidermis
  ctx.fillStyle = '#7CFC00';
  ctx.beginPath();
  ctx.ellipse(width * 0.5, height * 0.92, width * 0.38, height * 0.03, 0, Math.PI, 0, true);
  ctx.fill();
  ctx.strokeStyle = '#228B22';
  ctx.lineWidth = 1;
  ctx.stroke();
  
  // Stomata (guard cells with pore)
  const stomataPositions = [[0.3, 0.88], [0.5, 0.9], [0.7, 0.88]];
  stomataPositions.forEach(([sx, sy]) => {
    // Guard cells
    ctx.fillStyle = '#ADFF2F';
    ctx.beginPath();
    ctx.ellipse(width * (sx - 0.02), height * sy, width * 0.015, height * 0.025, -0.3, 0, Math.PI * 2);
    ctx.fill();
    ctx.beginPath();
    ctx.ellipse(width * (sx + 0.02), height * sy, width * 0.015, height * 0.025, 0.3, 0, Math.PI * 2);
    ctx.fill();
    
    // Stomatal pore
    ctx.fillStyle = '#FFFFFF';
    ctx.beginPath();
    ctx.ellipse(width * sx, height * sy, width * 0.008, height * 0.015, 0, 0, Math.PI * 2);
    ctx.fill();
    ctx.strokeStyle = '#228B22';
    ctx.lineWidth = 1;
    ctx.stroke();
  });
  
  ctx.restore();
}

static drawPhotosynthesisProcess(ctx, x, y, width, height, showEquation = true) {
  ctx.save();
  ctx.translate(x, y);
  
  // Chloroplast outline
  ctx.fillStyle = '#90EE90';
  ctx.beginPath();
  ctx.ellipse(width * 0.5, height * 0.5, width * 0.35, height * 0.2, 0, 0, Math.PI * 2);
  ctx.fill();
  ctx.strokeStyle = '#228B22';
  ctx.lineWidth = 3;
  ctx.stroke();
  
  // Inner membrane
  ctx.strokeStyle = '#32CD32';
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.ellipse(width * 0.5, height * 0.5, width * 0.33, height * 0.18, 0, 0, Math.PI * 2);
  ctx.stroke();
  
  // Thylakoid stacks (grana)
  ctx.fillStyle = '#006400';
  for(let i = 0; i < 5; i++) {
    const granaX = width * 0.25 + i * width * 0.12;
    for(let j = 0; j < 4; j++) {
      ctx.fillRect(granaX, height * 0.43 + j * height * 0.03, width * 0.06, height * 0.015);
    }
  }
  
  // Stroma (fluid)
  ctx.fillStyle = 'rgba(144, 238, 144, 0.3)';
  ctx.beginPath();
  ctx.ellipse(width * 0.5, height * 0.5, width * 0.3, height * 0.15, 0, 0, Math.PI * 2);
  ctx.fill();
  
  // Light reactions (left side - thylakoid)
  ctx.fillStyle = '#FFD700';
  ctx.font = 'bold 14px Arial';
  ctx.textAlign = 'center';
  ctx.fillText('Light Reactions', width * 0.3, height * 0.3);
  
  // Sun symbol
  ctx.fillStyle = '#FFA500';
  ctx.beginPath();
  ctx.arc(width * 0.15, height * 0.2, width * 0.04, 0, Math.PI * 2);
  ctx.fill();
  
  // Sun rays
  ctx.strokeStyle = '#FFD700';
  ctx.lineWidth = 2;
  for(let i = 0; i < 8; i++) {
    const angle = (i * Math.PI) / 4;
    ctx.beginPath();
    ctx.moveTo(
      width * 0.15 + Math.cos(angle) * width * 0.05,
      height * 0.2 + Math.sin(angle) * width * 0.05
    );
    ctx.lineTo(
      width * 0.15 + Math.cos(angle) * width * 0.08,
      height * 0.2 + Math.sin(angle) * width * 0.08
    );
    ctx.stroke();
  }
  
  // H2O input
  ctx.fillStyle = '#4169E1';
  ctx.font = '12px Arial';
  ctx.fillText('H₂O', width * 0.1, height * 0.45);
  this.drawArrow(ctx, width * 0.13, height * 0.46, width * 0.22, height * 0.5, '#4169E1', 2);
  
  // O2 output
  ctx.fillStyle = '#87CEEB';
  ctx.fillText('O₂', width * 0.1, height * 0.6);
  this.drawArrow(ctx, width * 0.22, height * 0.55, width * 0.13, height * 0.59, '#87CEEB', 2);
  
  // ATP and NADPH production
  ctx.fillStyle = '#FF6347';
  ctx.fillText('ATP', width * 0.35, height * 0.62);
  ctx.fillStyle = '#FF1493';
  ctx.fillText('NADPH', width * 0.45, height * 0.62);
  
  // Dark reactions / Calvin Cycle (right side - stroma)
  ctx.fillStyle = '#8B4513';
  ctx.font = 'bold 14px Arial';
  ctx.fillText('Calvin Cycle', width * 0.7, height * 0.3);
  ctx.font = '11px Arial';
  ctx.fillText('(Dark Reactions)', width * 0.7, height * 0.34);
  
  // CO2 input
  ctx.fillStyle = '#696969';
  ctx.font = '12px Arial';
  ctx.fillText('CO₂', width * 0.9, height * 0.45);
  this.drawArrow(ctx, width * 0.87, height * 0.46, width * 0.78, height * 0.5, '#696969', 2);
  
  // Glucose output
  ctx.fillStyle = '#FFD700';
  ctx.fillText('C₆H₁₂O₆', width * 0.88, height * 0.6);
  ctx.font = '10px Arial';
  ctx.fillText('(Glucose)', width * 0.88, height * 0.64);
  this.drawArrow(ctx, width * 0.78, height * 0.55, width * 0.84, height * 0.59, '#FFD700', 2);
  
  // Calvin Cycle circle
  ctx.strokeStyle = '#8B4513';
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.arc(width * 0.7, height * 0.5, width * 0.06, 0, Math.PI * 2);
  ctx.stroke();
  
  // Equation at bottom
  if(showEquation) {
    ctx.fillStyle = '#2C3E50';
    ctx.font = 'bold 13px Arial';
    ctx.textAlign = 'center';
    ctx.fillText('6CO₂ + 6H₂O + Light Energy → C₆H₁₂O₆ + 6O₂', width * 0.5, height * 0.85);
  }
  
  ctx.restore();
}

static drawStomata(ctx, x, y, width, height, state = 'both') {
  ctx.save();
  ctx.translate(x, y);
  
  const drawSingleStomata = (offsetX, isOpen) => {
    // Epidermal cells background
    ctx.fillStyle = '#ADFF2F';
    ctx.fillRect(offsetX, height * 0.2, width * 0.4, height * 0.6);
    
    // Guard cells
    ctx.fillStyle = isOpen ? '#32CD32' : '#228B22';
    
    // Left guard cell
    ctx.beginPath();
    if(isOpen) {
      ctx.ellipse(offsetX + width * 0.15, height * 0.5, width * 0.06, height * 0.15, -0.3, 0, Math.PI * 2);
    } else {
      ctx.ellipse(offsetX + width * 0.18, height * 0.5, width * 0.05, height * 0.12, -0.1, 0, Math.PI * 2);
    }
    ctx.fill();
    ctx.strokeStyle = '#006400';
    ctx.lineWidth = 2;
    ctx.stroke();
    
    // Right guard cell
    ctx.beginPath();
    if(isOpen) {
      ctx.ellipse(offsetX + width * 0.25, height * 0.5, width * 0.06, height * 0.15, 0.3, 0, Math.PI * 2);
    } else {
      ctx.ellipse(offsetX + width * 0.22, height * 0.5, width * 0.05, height * 0.12, 0.1, 0, Math.PI * 2);
    }
    ctx.fill();
    ctx.stroke();
    
    // Stomatal pore
    ctx.fillStyle = isOpen ? '#FFFFFF' : '#E0E0E0';
    ctx.beginPath();
    if(isOpen) {
      ctx.ellipse(offsetX + width * 0.2, height * 0.5, width * 0.025, height * 0.1, 0, 0, Math.PI * 2);
    } else {
      ctx.ellipse(offsetX + width * 0.2, height * 0.5, width * 0.01, height * 0.03, 0, 0, Math.PI * 2);
    }
    ctx.fill();
    ctx.strokeStyle = '#006400';
    ctx.stroke();
    
    // Nucleus in guard cells
    ctx.fillStyle = '#8B4513';
    ctx.beginPath();
    ctx.arc(offsetX + width * 0.15, height * 0.5, width * 0.015, 0, Math.PI * 2);
    ctx.fill();
    ctx.beginPath();
    ctx.arc(offsetX + width * 0.25, height * 0.5, width * 0.015, 0, Math.PI * 2);
    ctx.fill();
    
    // Chloroplasts in guard cells
    ctx.fillStyle = '#006400';
    for(let i = 0; i < 3; i++) {
      ctx.beginPath();
      ctx.arc(offsetX + width * 0.14, height * 0.4 + i * height * 0.06, width * 0.008, 0, Math.PI * 2);
      ctx.fill();
      ctx.beginPath();
      ctx.arc(offsetX + width * 0.26, height * 0.4 + i * height * 0.06, width * 0.008, 0, Math.PI * 2);
      ctx.fill();
    }
    
    // Water/gas arrows
    if(isOpen) {
      // Water vapor out
      ctx.strokeStyle = '#87CEEB';
      ctx.lineWidth = 2;
      for(let i = 0; i < 3; i++) {
        this.drawArrow(
          ctx,
          offsetX + width * 0.2 + i * width * 0.02,
          height * 0.5,
          offsetX + width * 0.2 + i * width * 0.02,
          height * 0.15,
          '#87CEEB',
          1
        );
      }
      
      // CO2 in
      ctx.strokeStyle = '#696969';
      for(let i = 0; i < 2; i++) {
        this.drawArrow(
          ctx,
          offsetX + width * 0.18 + i * width * 0.04,
          height * 0.85,
          offsetX + width * 0.18 + i * width * 0.04,
          height * 0.65,
          '#696969',
          1
        );
      }
    }
    
    // Label
    ctx.fillStyle = '#2C3E50';
    ctx.font = 'bold 16px Arial';
    ctx.textAlign = 'center';
    ctx.fillText(isOpen ? 'OPEN' : 'CLOSED', offsetX + width * 0.2, height * 0.1);
    
    // Condition labels
    ctx.font = '11px Arial';
    ctx.fillText(isOpen ? '(Day/High Water)' : '(Night/Low Water)', offsetX + width * 0.2, height * 0.95);
  };
  
  if(state === 'both') {
    drawSingleStomata(0, true);
    drawSingleStomata(width * 0.5, false);
  } else if(state === 'open') {
    drawSingleStomata(width * 0.3, true);
  } else {
    drawSingleStomata(width * 0.3, false);
  }
  
  ctx.restore();
}

static drawXylemPhloem(ctx, x, y, width, height) {
  ctx.save();
  ctx.translate(x, y);
  
  // Plant stem outline
  ctx.strokeStyle = '#8B4513';
  ctx.lineWidth = 3;
  ctx.strokeRect(width * 0.35, 0, width * 0.3, height);
  
  // Xylem (left side - water UP)
  ctx.fillStyle = '#8B4513';
  ctx.fillRect(width * 0.37, height * 0.1, width * 0.11, height * 0.8);
  
  // Xylem vessel cells (dead, hollow)
  ctx.strokeStyle = '#D2691E';
  ctx.lineWidth = 2;
  for(let i = 0; i < 10; i++) {
    const cellY = height * 0.1 + i * height * 0.08;
    ctx.strokeRect(width * 0.37, cellY, width * 0.11, height * 0.08);
    
    // Cell walls thickening (lignin)
    ctx.strokeStyle = '#654321';
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.moveTo(width * 0.37, cellY + height * 0.02);
    ctx.lineTo(width * 0.48, cellY + height * 0.02);
    ctx.moveTo(width * 0.37, cellY + height * 0.06);
    ctx.lineTo(width * 0.48, cellY + height * 0.06);
    ctx.stroke();
    ctx.strokeStyle = '#D2691E';
    ctx.lineWidth = 2;
  }
  
  // Water molecules moving UP in xylem
  ctx.fillStyle = '#4169E1';
  for(let i = 0; i < 8; i++) {
    const waterY = height * 0.85 - i * height * 0.1;
    ctx.beginPath();
    ctx.arc(width * 0.425, waterY, width * 0.015, 0, Math.PI * 2);
    ctx.fill();
  }
  
  // Upward arrow for xylem
  this.drawArrow(ctx, width * 0.3, height * 0.7, width * 0.3, height * 0.2, '#4169E1', 3);
  ctx.fillStyle = '#4169E1';
  ctx.font = 'bold 12px Arial';
  ctx.textAlign = 'center';
  ctx.fillText('H₂O ↑', width * 0.3, height * 0.15);
  ctx.font = '10px Arial';
  ctx.fillText('(from roots)', width * 0.3, height * 0.95);
  
  // Phloem (right side - sugar DOWN/UP)
  ctx.fillStyle = '#DEB887';
  ctx.fillRect(width * 0.52, height * 0.1, width * 0.11, height * 0.8);
  
  // Phloem sieve tube cells (living)
  ctx.strokeStyle = '#D2691E';
  ctx.lineWidth = 2;
  for(let i = 0; i < 10; i++) {
    const cellY = height * 0.1 + i * height * 0.08;
    ctx.strokeRect(width * 0.52, cellY, width * 0.11, height * 0.08);
    
    // Sieve plates (perforated end walls)
    ctx.strokeStyle = '#8B4513';
    ctx.lineWidth = 1;
    ctx.setLineDash([2, 2]);
    ctx.beginPath();
    ctx.moveTo(width * 0.52, cellY + height * 0.08);
    ctx.lineTo(width * 0.63, cellY + height * 0.08);
    ctx.stroke();
    ctx.setLineDash([]);
    
    // Companion cells (small cells beside)
    ctx.fillStyle = '#F4A460';
    ctx.fillRect(width * 0.52, cellY, width * 0.02, height * 0.08);
    ctx.strokeStyle = '#D2691E';
    ctx.lineWidth = 1;
    ctx.strokeRect(width * 0.52, cellY, width * 0.02, height * 0.08);
  }
  
  // Sugar molecules moving in phloem (bidirectional)
  ctx.fillStyle = '#FFD700';
  // Downward flow
  for(let i = 0; i < 5; i++) {
    const sugarY = height * 0.2 + i * height * 0.12;
    ctx.beginPath();
    ctx.arc(width * 0.575, sugarY, width * 0.015, 0, Math.PI * 2);
    ctx.fill();
  }
  
  // Bidirectional arrows for phloem
  this.drawArrow(ctx, width * 0.7, height * 0.3, width * 0.7, height * 0.6, '#FFD700', 3);
  this.drawArrow(ctx, width * 0.7, height * 0.6, width * 0.7, height * 0.3, '#FFD700', 3);
  
  ctx.fillStyle = '#FFD700';
  ctx.font = 'bold 12px Arial';
  ctx.textAlign = 'center';
  ctx.fillText('Sugars ↕', width * 0.7, height * 0.15);
  ctx.font = '10px Arial';
  ctx.fillText('(from leaves)', width * 0.7, height * 0.95);
  
  ctx.restore();
}

static drawFlowerStructure(ctx, x, y, width, height) {
  ctx.save();
  ctx.translate(x, y);
  
  // Receptacle (base)
  ctx.fillStyle = '#90EE90';
  ctx.beginPath();
  ctx.ellipse(width * 0.5, height * 0.85, width * 0.08, height * 0.05, 0, 0, Math.PI * 2);
  ctx.fill();
  ctx.strokeStyle = '#228B22';
  ctx.lineWidth = 2;
  ctx.stroke();
  
  // Pedicel (flower stalk)
  ctx.fillStyle = '#8FBC8F';
  ctx.fillRect(width * 0.47, height * 0.85, width * 0.06, height * 0.15);
  ctx.strokeStyle = '#228B22';
  ctx.strokeRect(width * 0.47, height * 0.85, width * 0.06, height * 0.15);
  
  // Sepals (outer green petals)
  ctx.fillStyle = '#7CFC00';
  for(let i = 0; i < 5; i++) {
    const angle = (i * Math.PI * 2) / 5 - Math.PI / 2;
    ctx.save();
    ctx.translate(width * 0.5, height * 0.5);
    ctx.rotate(angle);
    ctx.beginPath();
    ctx.ellipse(0, -height * 0.25, width * 0.08, height * 0.15, 0, 0, Math.PI * 2);
    ctx.fill();
    ctx.strokeStyle = '#228B22';
    ctx.lineWidth = 2;
    ctx.stroke();
    ctx.restore();
  }
  
  // Petals (colorful)
  ctx.fillStyle = '#FF69B4';
  for(let i = 0; i < 5; i++) {
    const angle = (i * Math.PI * 2) / 5 - Math.PI / 2 + Math.PI / 5;
    ctx.save();
    ctx.translate(width * 0.5, height * 0.5);
    ctx.rotate(angle);
    ctx.beginPath();
    ctx.ellipse(0, -height * 0.2, width * 0.1, height * 0.15, 0, 0, Math.PI * 2);
    ctx.fill();
    ctx.strokeStyle = '#C71585';
    ctx.lineWidth = 2;
    ctx.stroke();
    ctx.restore();
  }
  
  // Pistil (female part - center)
  // Stigma (top)
  ctx.fillStyle = '#FFD700';
  ctx.beginPath();
  ctx.arc(width * 0.5, height * 0.35, width * 0.025, 0, Math.PI * 2);
  ctx.fill();
  ctx.strokeStyle = '#DAA520';
  ctx.lineWidth = 1.5;
  ctx.stroke();
  
  // Style (middle tube)
  ctx.fillStyle = '#F0E68C';
  ctx.fillRect(width * 0.49, height * 0.35, width * 0.02, height * 0.15);
  ctx.strokeStyle = '#DAA520';
  ctx.strokeRect(width * 0.49, height * 0.35, width * 0.02, height * 0.15);
  
  // Ovary (bottom swollen part)
  ctx.fillStyle = '#ADFF2F';
  ctx.beginPath();
  ctx.ellipse(width * 0.5, height * 0.55, width * 0.045, height * 0.06, 0, 0, Math.PI * 2);
  ctx.fill();
  ctx.strokeStyle = '#9ACD32';
  ctx.lineWidth = 2;
  ctx.stroke();
  
  // Ovules inside ovary
  ctx.fillStyle = '#FFE4B5';
  for(let i = 0; i < 3; i++) {
    ctx.beginPath();
    ctx.arc(width * 0.5, height * 0.52 + i * height * 0.02, width * 0.012, 0, Math.PI * 2);
    ctx.fill();
  }
  
  // Stamens (male parts - surrounding pistil)
  ctx.fillStyle = '#FFA500';
  for(let i = 0; i < 6; i++) {
    const angle = (i * Math.PI * 2) / 6;
    const stamenX = width * 0.5 + Math.cos(angle) * width * 0.08;
    const stamenY = height * 0.5 + Math.sin(angle) * height * 0.08;
    
    // Anther (pollen sac)
    ctx.fillRect(stamenX - width * 0.015, stamenY - height * 0.03, width * 0.03, height * 0.025);
    ctx.strokeStyle = '#FF8C00';
    ctx.lineWidth = 1;
    ctx.strokeRect(stamenX - width * 0.015, stamenY - height * 0.03, width * 0.03, height * 0.025);
    
    // Pollen grains
    ctx.fillStyle = '#FFD700';
    for(let j = 0; j < 3; j++) {
      ctx.beginPath();
      ctx.arc(stamenX - width * 0.01 + j * width * 0.01, stamenY - height * 0.02, width * 0.003, 0, Math.PI * 2);
      ctx.fill();
    }
    
    // Filament (stalk)
    ctx.strokeStyle = '#FFDAB9';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(stamenX, stamenY);
    ctx.lineTo(stamenX, height * 0.6);
    ctx.stroke();
  }
  
  ctx.restore();
}

static drawSeedGermination(ctx, x, y, width, height) {
  ctx.save();
  ctx.translate(x, y);
  
  const stages = [
    { label: 'Seed', x: 0.15, y: 0.7 },
    { label: 'Imbibition', x: 0.35, y: 0.7 },
    { label: 'Radicle\nEmergence', x: 0.55, y: 0.7 },
    { label: 'Seedling', x: 0.75, y: 0.5 }
];
// Stage 1: Dormant seed
ctx.fillStyle = '#8B4513';
ctx.beginPath();
ctx.ellipse(width * 0.15, height * 0.7, width * 0.06, height * 0.08, 0, 0, Math.PI * 2);
ctx.fill();
ctx.strokeStyle = '#654321';
ctx.lineWidth = 2;
ctx.stroke();
// Seed coat
ctx.strokeStyle = '#A0522D';
ctx.lineWidth = 3;
ctx.beginPath();
ctx.ellipse(width * 0.15, height * 0.7, width * 0.06, height * 0.08, 0, 0, Math.PI * 2);
ctx.stroke();
// Embryo inside
ctx.fillStyle = '#F5DEB3';
ctx.beginPath();
ctx.ellipse(width * 0.15, height * 0.7, width * 0.04, height * 0.05, 0, 0, Math.PI * 2);
ctx.fill();
// Stage 2: Imbibition (water absorption)
ctx.fillStyle = '#A0522D';
ctx.beginPath();
ctx.ellipse(width * 0.35, height * 0.7, width * 0.07, height * 0.09, 0, 0, Math.PI * 2);
ctx.fill();
ctx.strokeStyle = '#654321';
ctx.lineWidth = 2;
ctx.stroke();
// Swollen appearance
ctx.fillStyle = '#DEB887';
ctx.beginPath();
ctx.ellipse(width * 0.35, height * 0.7, width * 0.05, height * 0.06, 0, 0, Math.PI * 2);
ctx.fill();
// Water droplets
ctx.fillStyle = '#4169E1';
for(let i = 0; i < 4; i++) {
const angle = (i * Math.PI * 2) / 4;
ctx.beginPath();
ctx.arc(
width * 0.35 + Math.cos(angle) * width * 0.08,
height * 0.7 + Math.sin(angle) * height * 0.1,
width * 0.01,
0, Math.PI * 2
);
ctx.fill();
}
// Stage 3: Radicle emergence (first root)
ctx.fillStyle = '#8B4513';
ctx.beginPath();
ctx.ellipse(width * 0.55, height * 0.65, width * 0.06, height * 0.08, 0, 0, Math.PI * 2);
ctx.fill();
ctx.strokeStyle = '#654321';
ctx.lineWidth = 2;
ctx.stroke();
// Split seed coat
ctx.strokeStyle = '#A0522D';
ctx.lineWidth = 2;
ctx.beginPath();
ctx.moveTo(width * 0.55, height * 0.58);
ctx.lineTo(width * 0.55, height * 0.73);
ctx.stroke();
// Radicle (primary root) emerging
ctx.fillStyle = '#F5DEB3';
ctx.fillRect(width * 0.545, height * 0.73, width * 0.01, height * 0.08);
// Root tip
ctx.fillStyle = '#D2691E';
ctx.beginPath();
ctx.moveTo(width * 0.545, height * 0.81);
ctx.lineTo(width * 0.55, height * 0.83);
ctx.lineTo(width * 0.555, height * 0.81);
ctx.closePath();
ctx.fill();
// Root hairs
ctx.strokeStyle = '#DEB887';
ctx.lineWidth = 1;
for(let i = 0; i < 5; i++) {
const rootY = height * 0.75 + i * height * 0.015;
ctx.beginPath();
ctx.moveTo(width * 0.545, rootY);
ctx.lineTo(width * 0.535, rootY);
ctx.stroke();
ctx.beginPath();
ctx.moveTo(width * 0.555, rootY);
ctx.lineTo(width * 0.565, rootY);
ctx.stroke();
}
// Stage 4: Young seedling
// Seed coat (cotyledons still attached)
ctx.fillStyle = '#8B4513';
ctx.beginPath();
ctx.ellipse(width * 0.75, height * 0.55, width * 0.04, height * 0.03, 0, 0, Math.PI * 2);
ctx.fill();
// Hypocotyl (stem below cotyledons)
ctx.fillStyle = '#90EE90';
ctx.fillRect(width * 0.745, height * 0.55, width * 0.01, height * 0.15);
ctx.strokeStyle = '#228B22';
ctx.lineWidth = 2;
ctx.strokeRect(width * 0.745, height * 0.55, width * 0.01, height * 0.15);
// Epicotyl (stem above cotyledons) with first leaves
ctx.fillStyle = '#32CD32';
ctx.fillRect(width * 0.745, height * 0.45, width * 0.01, height * 0.1);
// First true leaves
ctx.fillStyle = '#228B22';
// Left leaf
ctx.beginPath();
ctx.ellipse(width * 0.72, height * 0.42, width * 0.03, height * 0.05, -0.5, 0, Math.PI * 2);
ctx.fill();
ctx.strokeStyle = '#006400';
ctx.lineWidth = 1;
ctx.stroke();
// Right leaf
ctx.beginPath();
ctx.ellipse(width * 0.78, height * 0.42, width * 0.03, height * 0.05, 0.5, 0, Math.PI * 2);
ctx.fill();
ctx.stroke();
// Developed root system
ctx.fillStyle = '#D2691E';
ctx.fillRect(width * 0.745, height * 0.7, width * 0.01, height * 0.15);
// Lateral roots
ctx.strokeStyle = '#DEB887';
ctx.lineWidth = 1.5;
for(let i = 0; i < 4; i++) {
const rootY = height * 0.72 + i * height * 0.05;
ctx.beginPath();
ctx.moveTo(width * 0.745, rootY);
ctx.lineTo(width * 0.72, rootY + height * 0.03);
ctx.stroke();
ctx.beginPath();
ctx.moveTo(width * 0.755, rootY);
ctx.lineTo(width * 0.78, rootY + height * 0.03);
ctx.stroke();
}
// Soil line
ctx.strokeStyle = '#8B4513';
ctx.lineWidth = 2;
ctx.setLineDash([5, 5]);
ctx.beginPath();
ctx.moveTo(0, height * 0.7);
ctx.lineTo(width, height * 0.7);
ctx.stroke();
ctx.setLineDash([]);
// Stage labels
ctx.fillStyle = '#2C3E50';
ctx.font = 'bold 12px Arial';
ctx.textAlign = 'center';
stages.forEach(stage => {
ctx.fillText(stage.label, width * stage.x, height * stage.y + height * 0.2);
});
// Arrows between stages
ctx.strokeStyle = '#555';
ctx.lineWidth = 2;
this.drawArrow(ctx, width * 0.22, height * 0.85, width * 0.28, height * 0.85, '#555', 2);
this.drawArrow(ctx, width * 0.42, height * 0.85, width * 0.48, height * 0.85, '#555', 2);
this.drawArrow(ctx, width * 0.62, height * 0.85, width * 0.68, height * 0.85, '#555', 2);
ctx.restore();
}
static drawTropisms(ctx, x, y, width, height) {
ctx.save();
ctx.translate(x, y);
const tropismWidth = width / 3;
// 1. PHOTOTROPISM (light response)
ctx.save();
ctx.translate(0, 0);
// Sun
ctx.fillStyle = '#FFD700';
ctx.beginPath();
ctx.arc(tropismWidth * 0.8, height * 0.15, width * 0.04, 0, Math.PI * 2);
ctx.fill();
// Sun rays
ctx.strokeStyle = '#FFA500';
ctx.lineWidth = 2;
for(let i = 0; i < 8; i++) {
const angle = (i * Math.PI) / 4;
ctx.beginPath();
ctx.moveTo(
tropismWidth * 0.8 + Math.cos(angle) * width * 0.05,
height * 0.15 + Math.sin(angle) * width * 0.05
);
ctx.lineTo(
tropismWidth * 0.8 + Math.cos(angle) * width * 0.08,
height * 0.15 + Math.sin(angle) * width * 0.08
);
ctx.stroke();
}
// Light rays
ctx.strokeStyle = '#FFD700';
ctx.lineWidth = 1;
for(let i = 0; i < 3; i++) {
this.drawArrow(
ctx,
tropismWidth * 0.75 + i * width * 0.02,
height * 0.25,
tropismWidth * 0.55 + i * width * 0.02,
height * 0.4,
'#FFD700',
1
);
}
// Plant bending toward light
ctx.strokeStyle = '#228B22';
ctx.lineWidth = 4;
ctx.beginPath();
ctx.moveTo(tropismWidth * 0.3, height * 0.8);
ctx.quadraticCurveTo(tropismWidth * 0.4, height * 0.5, tropismWidth * 0.6, height * 0.3);
ctx.stroke();
// Leaves
ctx.fillStyle = '#32CD32';
ctx.beginPath();
ctx.ellipse(tropismWidth * 0.55, height * 0.35, width * 0.03, height * 0.04, -0.5, 0, Math.PI * 2);
ctx.fill();
ctx.beginPath();
ctx.ellipse(tropismWidth * 0.65, height * 0.32, width * 0.03, height * 0.04, 0.2, 0, Math.PI * 2);
ctx.fill();
// Pot
ctx.fillStyle = '#8B4513';
ctx.fillRect(tropismWidth * 0.15, height * 0.8, tropismWidth * 0.3, height * 0.15);
// Label
ctx.fillStyle = '#2C3E50';
ctx.font = 'bold 14px Arial';
ctx.textAlign = 'center';
ctx.fillText('Phototropism', tropismWidth * 0.5, height * 0.05);
ctx.font = '11px Arial';
ctx.fillText('(Response to light)', tropismWidth * 0.5, height * 0.98);
ctx.restore();
// 2. GEOTROPISM / GRAVITROPISM (gravity response)
ctx.save();
ctx.translate(tropismWidth, 0);
// Soil cross-section
ctx.fillStyle = '#8B4513';
ctx.fillRect(0, height * 0.4, tropismWidth, height * 0.6);
// Soil texture
ctx.fillStyle = '#A0522D';
for(let i = 0; i < 30; i++) {
ctx.beginPath();
ctx.arc(
Math.random() * tropismWidth,
height * 0.4 + Math.random() * height * 0.6,
width * 0.005,
0, Math.PI * 2
);
ctx.fill();
}
// Shoot growing UP
ctx.strokeStyle = '#32CD32';
ctx.lineWidth = 4;
ctx.beginPath();
ctx.moveTo(tropismWidth * 0.5, height * 0.4);
ctx.lineTo(tropismWidth * 0.5, height * 0.15);
ctx.stroke();
// Leaves on shoot
ctx.fillStyle = '#228B22';
for(let i = 0; i < 3; i++) {
const leafY = height * 0.35 - i * height * 0.08;
ctx.beginPath();
ctx.ellipse(tropismWidth * 0.45, leafY, width * 0.025, height * 0.03, -0.5, 0, Math.PI * 2);
ctx.fill();
ctx.beginPath();
ctx.ellipse(tropismWidth * 0.55, leafY, width * 0.025, height * 0.03, 0.5, 0, Math.PI * 2);
ctx.fill();
}
// Root growing DOWN
ctx.strokeStyle = '#D2691E';
ctx.lineWidth = 4;
ctx.beginPath();
ctx.moveTo(tropismWidth * 0.5, height * 0.4);
ctx.lineTo(tropismWidth * 0.5, height * 0.75);
ctx.stroke();
// Root branches
ctx.strokeStyle = '#DEB887';
ctx.lineWidth = 2;
for(let i = 0; i < 4; i++) {
const rootY = height * 0.5 + i * height * 0.08;
ctx.beginPath();
ctx.moveTo(tropismWidth * 0.5, rootY);
ctx.lineTo(tropismWidth * 0.4, rootY + height * 0.05);
ctx.stroke();
ctx.beginPath();
ctx.moveTo(tropismWidth * 0.5, rootY);
ctx.lineTo(tropismWidth * 0.6, rootY + height * 0.05);
ctx.stroke();
}
// Gravity arrows
ctx.strokeStyle = '#FF6347';
ctx.lineWidth = 2;
for(let i = 0; i < 3; i++) {
this.drawArrow(
ctx,
tropismWidth * 0.3 + i * tropismWidth * 0.2,
height * 0.1,
tropismWidth * 0.3 + i * tropismWidth * 0.2,
height * 0.3,
'#FF6347',
2
);
}
// Labels
ctx.fillStyle = '#2C3E50';
ctx.font = 'bold 14px Arial';
ctx.textAlign = 'center';
ctx.fillText('Gravitropism', tropismWidth * 0.5, height * 0.05);
ctx.font = '11px Arial';
ctx.fillText('(Response to gravity)', tropismWidth * 0.5, height * 0.98);
ctx.fillStyle = '#FFFFFF';
ctx.font = 'bold 11px Arial';
ctx.fillText('Shoot: Negative', tropismWidth * 0.7, height * 0.25);
ctx.fillText('Root: Positive', tropismWidth * 0.7, height * 0.6);
ctx.restore();
// 3. THIGMOTROPISM (touch response)
ctx.save();
ctx.translate(tropismWidth * 2, 0);
// Support stake
ctx.fillStyle = '#654321';
ctx.fillRect(tropismWidth * 0.6, height * 0.3, width * 0.015, height * 0.5);
// Climbing plant wrapped around stake
ctx.strokeStyle = '#228B22';
ctx.lineWidth = 3;
ctx.beginPath();
// Spiral pattern
for(let i = 0; i < 30; i++) {
const t = i / 30;
const spiralX = tropismWidth * 0.6 + Math.cos(t * Math.PI * 6) * width * 0.03;
const spiralY = height * 0.8 - t * height * 0.5;
if(i === 0) {
  ctx.moveTo(spiralX, spiralY);
} else {
  ctx.lineTo(spiralX, spiralY);
}
}
ctx.stroke();
// Tendrils wrapping
ctx.strokeStyle = '#90EE90';
ctx.lineWidth = 2;
for(let i = 0; i < 4; i++) {
const tendrilY = height * 0.7 - i * height * 0.15;
ctx.beginPath();
ctx.moveTo(tropismWidth * 0.6, tendrilY);
for(let j = 0; j < 10; j++) {
  const t = j / 10;
  const curlX = tropismWidth * 0.6 + Math.cos(t * Math.PI * 4) * width * 0.025;
  const curlY = tendrilY - t * height * 0.05;
  ctx.lineTo(curlX, curlY);
}
ctx.stroke();
}
// Leaves
ctx.fillStyle = '#32CD32';
for(let i = 0; i < 5; i++) {
const leafY = height * 0.75 - i * height * 0.12;
const leafX = tropismWidth * 0.6 + Math.cos(i * 2) * width * 0.04;
ctx.beginPath();
ctx.ellipse(leafX, leafY, width * 0.03, height * 0.04, i * 0.5, 0, Math.PI * 2);
ctx.fill();
}
// Pot
ctx.fillStyle = '#8B4513';
ctx.fillRect(tropismWidth * 0.45, height * 0.8, tropismWidth * 0.3, height * 0.15);
// Touch indication arrows
ctx.strokeStyle = '#FF69B4';
ctx.lineWidth = 2;
for(let i = 0; i < 3; i++) {
const arrowY = height * 0.5 - i * height * 0.1;
this.drawArrow(
ctx,
tropismWidth * 0.75,
arrowY,
tropismWidth * 0.63,
arrowY,
'#FF69B4',
1.5
);
}
// Labels
ctx.fillStyle = '#2C3E50';
ctx.font = 'bold 14px Arial';
ctx.textAlign = 'center';
ctx.fillText('Thigmotropism', tropismWidth * 0.5, height * 0.05);
ctx.font = '11px Arial';
ctx.fillText('(Response to touch)', tropismWidth * 0.5, height * 0.98);
ctx.fillStyle = '#FF69B4';
ctx.font = 'bold 10px Arial';
ctx.fillText('Touch', tropismWidth * 0.85, height * 0.45);
ctx.restore();
ctx.restore();
}
// Helper method for drawing arrows (add to AnatomicalShapes if not already present)
static drawArrow(ctx, x1, y1, x2, y2, color, lineWidth) {
ctx.save();
ctx.strokeStyle = color;
ctx.fillStyle = color;
ctx.lineWidth = lineWidth;
// Draw line
ctx.beginPath();
ctx.moveTo(x1, y1);
ctx.lineTo(x2, y2);
ctx.stroke();
// Draw arrowhead
const angle = Math.atan2(y2 - y1, x2 - x1);
const arrowSize = lineWidth * 3;
ctx.beginPath();
ctx.moveTo(x2, y2);
ctx.lineTo(
x2 - arrowSize * Math.cos(angle - Math.PI / 6),
y2 - arrowSize * Math.sin(angle - Math.PI / 6)
);
ctx.lineTo(
x2 - arrowSize * Math.cos(angle + Math.PI / 6),
y2 - arrowSize * Math.sin(angle + Math.PI / 6)
);
ctx.closePath();
ctx.fill();
ctx.restore();
}






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





static drawFoodWeb(ctx, x, y, width, height) {
    ctx.save();
    ctx.translate(x, y);
    
    // Organisms with positions
    const organisms = [
        // Producers (bottom)
        { name: 'Grass', type: 'producer', x: 0.15, y: 0.85, color: '#8BC34A' },
        { name: 'Flowers', type: 'producer', x: 0.4, y: 0.85, color: '#9CCC65' },
        { name: 'Shrubs', type: 'producer', x: 0.65, y: 0.85, color: '#7CB342' },
        { name: 'Tree', type: 'producer', x: 0.85, y: 0.85, color: '#689F38' },
        
        // Primary consumers (herbivores)
        { name: 'Grasshopper', type: 'herbivore', x: 0.25, y: 0.65, color: '#FFC107' },
        { name: 'Mouse', type: 'herbivore', x: 0.5, y: 0.65, color: '#FFB300' },
        { name: 'Rabbit', type: 'herbivore', x: 0.75, y: 0.65, color: '#FFA000' },
        
        // Secondary consumers (carnivores)
        { name: 'Frog', type: 'carnivore', x: 0.2, y: 0.45, color: '#66BB6A' },
        { name: 'Snake', type: 'carnivore', x: 0.5, y: 0.45, color: '#43A047' },
        { name: 'Fox', type: 'carnivore', x: 0.8, y: 0.45, color: '#388E3C' },
        
        // Tertiary consumers (top predators)
        { name: 'Hawk', type: 'predator', x: 0.35, y: 0.2, color: '#F44336' },
        { name: 'Eagle', type: 'predator', x: 0.65, y: 0.2, color: '#D32F2F' }
    ];
    
    // Connections (who eats whom)
    const connections = [
        // Herbivores eating plants
        ['Grass', 'Grasshopper'], ['Grass', 'Mouse'], ['Grass', 'Rabbit'],
        ['Flowers', 'Grasshopper'], ['Flowers', 'Mouse'],
        ['Shrubs', 'Rabbit'], ['Shrubs', 'Mouse'],
        ['Tree', 'Rabbit'],
        
        // Carnivores eating herbivores
        ['Grasshopper', 'Frog'], ['Mouse', 'Snake'], ['Mouse', 'Frog'],
        ['Rabbit', 'Fox'], ['Rabbit', 'Snake'],
        
        // Top predators
        ['Frog', 'Hawk'], ['Frog', 'Eagle'],
        ['Snake', 'Hawk'], ['Snake', 'Eagle'],
        ['Mouse', 'Hawk'], ['Fox', 'Eagle'],
        ['Rabbit', 'Eagle']
    ];
    
    // Draw connections first (behind organisms)
    connections.forEach(([prey, predator]) => {
        const preyOrg = organisms.find(o => o.name === prey);
        const predOrg = organisms.find(o => o.name === predator);
        
        if(preyOrg && predOrg) {
            ctx.strokeStyle = 'rgba(0, 0, 0, 0.2)';
            ctx.lineWidth = 2;
            ctx.beginPath();
            ctx.moveTo(width * preyOrg.x, height * preyOrg.y);
            ctx.lineTo(width * predOrg.x, height * predOrg.y);
            ctx.stroke();
            
            // Arrow
            const angle = Math.atan2(
                height * (predOrg.y - preyOrg.y),
                width * (predOrg.x - preyOrg.x)
            );
            const arrowX = width * predOrg.x - Math.cos(angle) * 25;
            const arrowY = height * predOrg.y - Math.sin(angle) * 25;
            
            ctx.fillStyle = 'rgba(0, 0, 0, 0.3)';
            ctx.beginPath();
            ctx.moveTo(arrowX, arrowY);
            ctx.lineTo(
                arrowX - 8 * Math.cos(angle - Math.PI / 6),
                arrowY - 8 * Math.sin(angle - Math.PI / 6)
            );
            ctx.lineTo(
                arrowX - 8 * Math.cos(angle + Math.PI / 6),
                arrowY - 8 * Math.sin(angle + Math.PI / 6)
            );
            ctx.closePath();
            ctx.fill();
        }
    });
    
    // Draw organisms
    organisms.forEach(org => {
        const ox = width * org.x;
        const oy = height * org.y;
        
        // Circle
        ctx.fillStyle = org.color;
        ctx.strokeStyle = '#2C3E50';
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.arc(ox, oy, 22, 0, Math.PI * 2);
        ctx.fill();
        ctx.stroke();
        
        // Label
        ctx.fillStyle = '#FFF';
        ctx.font = 'bold 9px Arial';
        ctx.textAlign = 'center';
        ctx.shadowColor = 'rgba(0,0,0,0.5)';
        ctx.shadowBlur = 2;
        ctx.fillText(org.name, ox, oy + 3);
        ctx.shadowBlur = 0;
    });
    
    // Legend
    const legendY = height * 0.05;
    const legendItems = [
        { label: 'Producers', color: '#8BC34A' },
        { label: 'Herbivores', color: '#FFC107' },
        { label: 'Carnivores', color: '#66BB6A' },
        { label: 'Top Predators', color: '#F44336' }
    ];
    
    legendItems.forEach((item, i) => {
        const lx = width * (0.15 + i * 0.2);
        
        ctx.fillStyle = item.color;
        ctx.strokeStyle = '#2C3E50';
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.arc(lx, legendY, 10, 0, Math.PI * 2);
        ctx.fill();
        ctx.stroke();
        
        ctx.fillStyle = '#2C3E50';
        ctx.font = '11px Arial';
        ctx.textAlign = 'left';
        ctx.fillText(item.label, lx + 15, legendY + 4);
    });
    
    ctx.restore();
}

static drawCarbonCycle(ctx, x, y, width, height) {
    ctx.save();
    ctx.translate(x, y);
    
    // Main components
    const components = [
        { name: 'Atmosphere\n(CO₂)', x: 0.5, y: 0.15, color: '#B3E5FC' },
        { name: 'Plants\n(Photosynthesis)', x: 0.2, y: 0.45, color: '#4CAF50' },
        { name: 'Animals\n(Respiration)', x: 0.8, y: 0.45, color: '#FF9800' },
        { name: 'Soil/Decomposers', x: 0.5, y: 0.75, color: '#795548' },
        { name: 'Fossil Fuels', x: 0.15, y: 0.85, color: '#424242' },
        { name: 'Ocean', x: 0.85, y: 0.85, color: '#2196F3' }
    ];
    
    // Draw components
    components.forEach(comp => {
        const cx = width * comp.x;
        const cy = height * comp.y;
        
        ctx.fillStyle = comp.color;
        ctx.strokeStyle = '#2C3E50';
        ctx.lineWidth = 3;
        ctx.beginPath();
        ctx.arc(cx, cy, 45, 0, Math.PI * 2);
        ctx.fill();
        ctx.stroke();
        
        // Label
        ctx.fillStyle = '#FFF';
        ctx.font = 'bold 11px Arial';
        ctx.textAlign = 'center';
        ctx.shadowColor = 'rgba(0,0,0,0.7)';
        ctx.shadowBlur = 3;
        
        const lines = comp.name.split('\n');
        lines.forEach((line, i) => {
            ctx.fillText(line, cx, cy + (i - 0.5) * 14);
        });
        ctx.shadowBlur = 0;
    });
    
    // Processes (arrows)
    const processes = [
        // Photosynthesis
        { from: 0, to: 1, label: 'Photosynthesis', curve: -0.15 },
        // Plant respiration back to atmosphere
        { from: 1, to: 0, label: 'Respiration', curve: 0.15 },
        // Animals eat plants
        { from: 1, to: 2, label: 'Consumption', curve: -0.1 },
        // Animal respiration
        { from: 2, to: 0, label: 'Respiration', curve: 0.15 },
        // Death/decay to soil
        { from: 1, to: 3, label: 'Death/Decay', curve: 0 },
        { from: 2, to: 3, label: 'Death/Decay', curve: 0 },
        // Decomposition to atmosphere
        { from: 3, to: 0, label: 'Decomposition', curve: 0 },
        // Fossil fuel formation
        { from: 3, to: 4, label: 'Fossilization\n(millions of years)', curve: 0 },
        // Burning fossil fuels
        { from: 4, to: 0, label: 'Combustion', curve: -0.2 },
        // Ocean absorption
        { from: 0, to: 5, label: 'Dissolution', curve: 0.2 },
        // Ocean release
        { from: 5, to: 0, label: 'Release', curve: -0.2 }
    ];
    
    processes.forEach(proc => {
        const from = components[proc.from];
        const to = components[proc.to];
        
        const x1 = width * from.x;
        const y1 = height * from.y;
        const x2 = width * to.x;
        const y2 = height * to.y;
        
        // Calculate control point for curve
        const midX = (x1 + x2) / 2;
        const midY = (y1 + y2) / 2;
        const dx = x2 - x1;
        const dy = y2 - y1;
        const ctrlX = midX - dy * proc.curve;
        const ctrlY = midY + dx * proc.curve;
        
        // Draw curved arrow
        ctx.strokeStyle = '#E74C3C';
        ctx.lineWidth = 3;
        ctx.beginPath();
        ctx.moveTo(x1, y1);
        ctx.quadraticCurveTo(ctrlX, ctrlY, x2, y2);
        ctx.stroke();
        
        // Arrowhead
        const angle = Math.atan2(y2 - ctrlY, x2 - ctrlX);
        const arrowX = x2 - Math.cos(angle) * 45;
        const arrowY = y2 - Math.sin(angle) * 45;
        
        ctx.fillStyle = '#E74C3C';
        ctx.beginPath();
        ctx.moveTo(arrowX, arrowY);
        ctx.lineTo(
            arrowX - 10 * Math.cos(angle - Math.PI / 6),
            arrowY - 10 * Math.sin(angle - Math.PI / 6)
        );
        ctx.lineTo(
            arrowX - 10 * Math.cos(angle + Math.PI / 6),
            arrowY - 10 * Math.sin(angle + Math.PI / 6)
        );
        ctx.closePath();
        ctx.fill();
        
        // Process label
        if(proc.label) {
            ctx.fillStyle = '#D32F2F';
            ctx.font = 'bold 9px Arial';
            ctx.textAlign = 'center';
            
            const labelLines = proc.label.split('\n');
            labelLines.forEach((line, i) => {
                ctx.fillText(line, ctrlX, ctrlY + i * 11);
            });
        }
    });
    
    ctx.restore();
}

static drawNitrogenCycle(ctx, x, y, width, height) {
    ctx.save();
    ctx.translate(x, y);
    
    // Main nitrogen reservoirs
    const reservoirs = [
        { name: 'Atmosphere\n(N₂ gas)', x: 0.5, y: 0.1, color: '#81D4FA' },
        { name: 'Plants\n(Proteins)', x: 0.25, y: 0.45, color: '#66BB6A' },
        { name: 'Animals\n(Proteins)', x: 0.75, y: 0.45, color: '#FFA726' },
        { name: 'Soil\n(NH₃/NH₄⁺)', x: 0.35, y: 0.75, color: '#8D6E63' },
        { name: 'Nitrates\n(NO₃⁻)', x: 0.65, y: 0.75, color: '#A1887F' }
    ];
    
    // Draw reservoirs
    reservoirs.forEach(res => {
        const rx = width * res.x;
        const ry = height * res.y;
        
        ctx.fillStyle = res.color;
        ctx.strokeStyle = '#2C3E50';
        ctx.lineWidth = 3;
        ctx.beginPath();
        ctx.arc(rx, ry, 40, 0, Math.PI * 2);
        ctx.fill();
        ctx.stroke();
        
        ctx.fillStyle = '#FFF';
        ctx.font = 'bold 10px Arial';
        ctx.textAlign = 'center';
        ctx.shadowColor = 'rgba(0,0,0,0.7)';
        ctx.shadowBlur = 3;
        
        const lines = res.name.split('\n');
        lines.forEach((line, i) => {
            ctx.fillText(line, rx, ry + (i - 0.5) * 13);
        });
        ctx.shadowBlur = 0;
    });
    
    // Nitrogen fixation (atmosphere to soil)
    ctx.strokeStyle = '#4CAF50';
    ctx.lineWidth = 4;
    ctx.setLineDash([5, 5]);
    ctx.beginPath();
    ctx.moveTo(width * 0.5, height * 0.15);
    ctx.lineTo(width * 0.35, height * 0.7);
    ctx.stroke();
    ctx.setLineDash([]);
    
    this.drawArrowStatic(ctx, width * 0.38, height * 0.6, width * 0.35, height * 0.7, '#4CAF50', 3);
    
    ctx.fillStyle = '#2E7D32';
    ctx.font = 'bold 10px Arial';
    ctx.textAlign = 'center';
    ctx.fillText('Nitrogen Fixation', width * 0.42, height * 0.4);
    ctx.font = '9px Arial';
    ctx.fillText('(Bacteria)', width * 0.42, height * 0.43 + 10);
    
    // Nitrification (ammonia to nitrates)
    this.drawArrowStatic(ctx, width * 0.38, height * 0.75, width * 0.62, height * 0.75, '#FF9800', 3);
    
    ctx.fillStyle = '#F57C00';
    ctx.font = 'bold 10px Arial';
    ctx.fillText('Nitrification', width * 0.5, height * 0.72);
    ctx.font = '9px Arial';
    ctx.fillText('(Bacteria)', width * 0.5, height * 0.85);
    
    // Plant uptake
    this.drawArrowStatic(ctx, width * 0.62, height * 0.72, width * 0.3, height * 0.5, '#66BB6A', 3);
    
    ctx.fillStyle = '#43A047';
    ctx.font = 'bold 9px Arial';
    ctx.fillText('Absorption', width * 0.45, height * 0.6);
    
    // Animals eat plants
    this.drawArrowStatic(ctx, width * 0.3, height * 0.45, width * 0.7, height * 0.45, '#FFA726', 3);
    
    ctx.fillStyle = '#FF6F00';
    ctx.font = 'bold 9px Arial';
    ctx.fillText('Consumption', width * 0.5, height * 0.42);
    
    // Death and decay back to soil
    ctx.strokeStyle = '#795548';
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.moveTo(width * 0.25, height * 0.5);
    ctx.lineTo(width * 0.32, height * 0.7);
    ctx.stroke();
    
    ctx.beginPath();
    ctx.moveTo(width * 0.75, height * 0.5);
    ctx.lineTo(width * 0.38, height * 0.73);
    ctx.stroke();
    
    this.drawArrowStatic(ctx, width * 0.28, height * 0.6, width * 0.32, height * 0.7, '#795548', 2);
    
    ctx.fillStyle = '#6D4C41';
    ctx.font = 'bold 9px Arial';
    ctx.fillText('Decomposition', width * 0.15, height * 0.6);
    
    // Denitrification (nitrates back to atmosphere)
    ctx.strokeStyle = '#E91E63';
    ctx.lineWidth = 4;
    ctx.setLineDash([5, 5]);
    ctx.beginPath();
    ctx.moveTo(width * 0.65, height * 0.7);
    ctx.lineTo(width * 0.55, height * 0.15);
    ctx.stroke();
    ctx.setLineDash([]);
    
    this.drawArrowStatic(ctx, width * 0.57, height * 0.25, width * 0.55, height * 0.15, '#E91E63', 3);
    
    ctx.fillStyle = '#C2185B';
    ctx.font = 'bold 10px Arial';
    ctx.textAlign = 'center';
    ctx.fillText('Denitrification', width * 0.62, height * 0.35);
    ctx.font = '9px Arial';
    ctx.fillText('(Bacteria)', width * 0.62, height * 0.38 + 10);
    
    ctx.restore();
}

static drawWaterCycle(ctx, x, y, width, height) {
    ctx.save();
    ctx.translate(x, y);
    
    // Sky
    ctx.fillStyle = '#E3F2FD';
    ctx.fillRect(0, 0, width, height * 0.4);
    
    // Ground
    ctx.fillStyle = '#A1887F';
    ctx.fillRect(0, height * 0.6, width, height * 0.4);
    
    // Ocean
    ctx.fillStyle = '#2196F3';
    ctx.beginPath();
    ctx.moveTo(0, height * 0.6);
    ctx.lineTo(width * 0.3, height * 0.6);
    ctx.lineTo(width * 0.3, height);
    ctx.lineTo(0, height);
    ctx.closePath();
    ctx.fill();
    
    // Waves
    ctx.strokeStyle = '#1976D2';
    ctx.lineWidth = 2;
    for(let i = 0; i < 5; i++) {
        ctx.beginPath();
        ctx.moveTo(0, height * (0.62 + i * 0.08));
        for(let x = 0; x <= width * 0.3; x += 20) {
            ctx.lineTo(x, height * (0.62 + i * 0.08 + Math.sin(x / 10) * 0.01));
        }
        ctx.stroke();
    }
    
    // Mountains
    ctx.fillStyle = '#5D4037';
    ctx.strokeStyle = '#3E2723';
    ctx.lineWidth = 2;
    
    ctx.beginPath();
    ctx.moveTo(width * 0.5, height * 0.6);
    ctx.lineTo(width * 0.6, height * 0.35);
    ctx.lineTo(width * 0.7, height * 0.6);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();
    
    // Snow cap
    ctx.fillStyle = '#FFF';
    ctx.beginPath();
    ctx.moveTo(width * 0.58, height * 0.4);
    ctx.lineTo(width * 0.6, height * 0.35);
    ctx.lineTo(width * 0.62, height * 0.4);
    ctx.closePath();
    ctx.fill();
    
    // Trees
    for(let i = 0; i < 3; i++) {
        const tx = width * (0.75 + i * 0.08);
        
        // Trunk
        ctx.fillStyle = '#795548';
        ctx.fillRect(tx - 5, height * 0.55, 10, height * 0.05);
        
        // Foliage
        ctx.fillStyle = '#4CAF50';
        ctx.beginPath();
        ctx.moveTo(tx - 15, height * 0.55);
        ctx.lineTo(tx, height * 0.48);
        ctx.lineTo(tx + 15, height * 0.55);
        ctx.closePath();
        ctx.fill();
    }
    
    // Sun
    ctx.fillStyle = '#FDD835';
    ctx.strokeStyle = '#F9A825';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.arc(width * 0.85, height * 0.12, 25, 0, Math.PI * 2);
    ctx.fill();
    ctx.stroke();
    
    // Sun rays
    for(let i = 0; i < 8; i++) {
        const angle = (i / 8) * Math.PI * 2;
        ctx.strokeStyle = '#FDD835';
        ctx.lineWidth = 3;
        ctx.beginPath();
        ctx.moveTo(
            width * 0.85 + Math.cos(angle) * 30,
            height * 0.12 + Math.sin(angle) * 30
        );
        ctx.lineTo(
            width * 0.85 + Math.cos(angle) * 40,
            height * 0.12 + Math.sin(angle) * 40
        );
        ctx.stroke();
    }
    
    // Clouds
    const drawCloud = (cx, cy, size) => {
        ctx.fillStyle = '#FFF';
        ctx.strokeStyle = '#B0BEC5';
        ctx.lineWidth = 2;
        
        ctx.beginPath();
        ctx.arc(cx - size * 0.3, cy, size * 0.4, 0, Math.PI * 2);
        ctx.arc(cx, cy - size * 0.2, size * 0.5, 0, Math.PI * 2);
        ctx.arc(cx + size * 0.3, cy, size * 0.4, 0, Math.PI * 2);
        ctx.fill();
        ctx.stroke();
    };
    
    drawCloud(width * 0.25, height * 0.15, 40);
    drawCloud(width * 0.65, height * 0.2, 35);
    
    // Evaporation (ocean to clouds)
    ctx.strokeStyle = '#03A9F4';
    ctx.lineWidth = 2;
    ctx.setLineDash([3, 3]);
    
    for(let i = 0; i < 5; i++) {
        const ex = width * (0.05 + i * 0.05);
        ctx.beginPath();
        ctx.moveTo(ex, height * 0.58);
        ctx.lineTo(ex + 10, height * 0.2);
        ctx.stroke();
        this.drawArrowStatic(ctx, ex + 8, height * 0.25, ex + 10, height * 0.2, '#03A9F4', 1.5);
    }
    ctx.setLineDash([]);
    
    ctx.fillStyle = '#0288D1';
    ctx.font = 'bold 11px Arial';
    ctx.textAlign = 'center';
    ctx.fillText('Evaporation', width * 0.15, height * 0.35);
    
    // Precipitation (clouds to ground)
    ctx.strokeStyle = '#1976D2';
    ctx.lineWidth = 2;
    
    for(let i = 0; i < 6; i++) {
        const px = width * (0.6 + i * 0.03);
        ctx.beginPath();
        ctx.moveTo(px, height * 0.25);
        ctx.lineTo(px, height * 0.55);
        ctx.stroke();
        
        // Raindrop
        ctx.fillStyle = '#2196F3';
        ctx.beginPath();
        ctx.arc(px, height * 0.55, 2, 0, Math.PI * 2);
        ctx.fill();
    }
    
    ctx.fillStyle = '#1565C0';
    ctx.font = 'bold 11px Arial';
    ctx.fillText('Precipitation', width * 0.65, height * 0.42);
    
    // Transpiration (trees to clouds)
    ctx.strokeStyle = '#66BB6A';
    ctx.lineWidth = 2;
    ctx.setLineDash([3, 3]);
    
    for(let i = 0; i < 3; i++) {
        const ttx = width * (0.77 + i * 0.08);
        ctx.beginPath();
        ctx.moveTo(ttx, height * 0.48);
        ctx.lineTo(ttx + 5, height * 0.25);
        ctx.stroke();
        this.drawArrowStatic(ctx, ttx + 4, height * 0.3, ttx + 5, height * 0.25, '#66BB6A', 1.5);
    }
    ctx.setLineDash([]);
    
    ctx.fillStyle = '#43A047';
    ctx.font = 'bold 11px Arial';
    ctx.fillText('Transpiration', width * 0.85, height * 0.35);
    
    // Runoff (ground to ocean)
    ctx.strokeStyle = '#0288D1';
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.moveTo(width * 0.7, height * 0.6);
    ctx.quadraticCurveTo(width * 0.5, height * 0.7, width * 0.3, height * 0.8);
    ctx.stroke();
    
    this.drawArrowStatic(ctx, width * 0.35, height * 0.78, width * 0.3, height * 0.8, '#0288D1', 2);
    
    ctx.fillStyle = '#01579B';
    ctx.font = 'bold 11px Arial';
    ctx.textAlign = 'center';
    ctx.fillText('Runoff', width * 0.5, height * 0.68);
    
    // Infiltration
    ctx.strokeStyle = '#0277BD';
    ctx.lineWidth = 2;
    ctx.setLineDash([3, 3]);
    
    for(let i = 0; i < 4; i++) {
        const ix = width * (0.35 + i * 0.08);
        ctx.beginPath();
        ctx.moveTo(ix, height * 0.6);
        ctx.lineTo(ix, height * 0.75);
        ctx.stroke();
        this.drawArrowStatic(ctx, ix, height * 0.7, ix, height * 0.75, '#0277BD', 1.5);
    }
    ctx.setLineDash([]);
    
    ctx.fillStyle = '#01579B';
    ctx.font = 'bold 10px Arial';
    ctx.fillText('Infiltration', width * 0.45, height * 0.85);
    
    ctx.restore();
}

static drawPopulationGrowth(ctx, x, y, width, height) {
    ctx.save();
    ctx.translate(x, y);
    
    // Axes
    const graphX = width * 0.15;
    const graphY = height * 0.1;
    const graphWidth = width * 0.75;
    const graphHeight = height * 0.7;
    
    ctx.strokeStyle = '#2C3E50';
    ctx.lineWidth = 2;
    
    // Y-axis
    ctx.beginPath();
    ctx.moveTo(graphX, graphY);
    ctx.lineTo(graphX, graphY + graphHeight);
    ctx.stroke();
    
    // X-axis
    ctx.beginPath();
    ctx.moveTo(graphX, graphY + graphHeight);
    ctx.lineTo(graphX + graphWidth, graphY + graphHeight);
    ctx.stroke();
    
    // Labels
    ctx.fillStyle = '#2C3E50';
    ctx.font = '13px Arial';
    ctx.textAlign = 'center';
    
    ctx.save();
    ctx.translate(graphX - 40, graphY + graphHeight / 2);
    ctx.rotate(-Math.PI / 2);
    ctx.fillText('Population Size', 0, 0);
    ctx.restore();
    
    ctx.fillText('Time', graphX + graphWidth / 2, graphY + graphHeight + 35);
    
    // Exponential growth curve (J-shaped)
    const points = 100;
    ctx.strokeStyle = '#E74C3C';
    ctx.lineWidth = 4;
    ctx.beginPath();
    
    for(let i = 0; i <= points; i++) {
        const t = i / points;
        const pop = Math.exp(t * 4) / Math.exp(4); // Normalize
        const px = graphX + t * graphWidth;
        const py = graphY + graphHeight - pop * graphHeight;
        
        if(i === 0) ctx.moveTo(px, py);
        else ctx.lineTo(px, py);
    }
    ctx.stroke();
    
    // Label exponential
    ctx.fillStyle = '#E74C3C';
    ctx.font = 'bold 14px Arial';
    ctx.textAlign = 'left';
    ctx.fillText('Exponential (J-curve)', graphX + graphWidth * 0.6, graphY + graphHeight * 0.2);
    ctx.font = '11px Arial';
    ctx.fillText('Unlimited resources', graphX + graphWidth * 0.6, graphY + graphHeight * 0.25 + 13);
    
    // Logistic growth curve (S-shaped)
    ctx.strokeStyle = '#2196F3';
    ctx.lineWidth = 4;
    ctx.beginPath();
    
    for(let i = 0; i <= points; i++) {
        const t = i / points;
        const K = 0.85; // Carrying capacity (as fraction of graph height)
        const r = 8; // Growth rate
        const pop = K / (1 + Math.exp(-r * (t - 0.5)));
        const px = graphX + t * graphWidth;
        const py = graphY + graphHeight - pop * graphHeight;
        
        if(i === 0) ctx.moveTo(px, py);
        else ctx.lineTo(px, py);
    }
    ctx.stroke();
    
    // Carrying capacity line
    const carryingY = graphY + graphHeight * (1 - 0.85);
    ctx.strokeStyle = '#4CAF50';
    ctx.lineWidth = 3;
    ctx.setLineDash([10, 5]);
    ctx.beginPath();
    ctx.moveTo(graphX, carryingY);
    ctx.lineTo(graphX + graphWidth, carryingY);
    ctx.stroke();
    ctx.setLineDash([]);
    
    ctx.fillStyle = '#4CAF50';
    ctx.font = 'bold 12px Arial';
    ctx.textAlign = 'right';
    ctx.fillText('Carrying Capacity (K)', graphX + graphWidth - 10, carryingY - 10);
    
    // Label logistic
    ctx.fillStyle = '#2196F3';
    ctx.font = 'bold 14px Arial';
    ctx.textAlign = 'left';
    ctx.fillText('Logistic (S-curve)', graphX + graphWidth * 0.35, graphY + graphHeight * 0.5);
    ctx.font = '11px Arial';
    ctx.fillText('Limited resources', graphX + graphWidth * 0.35, graphY + graphHeight * 0.55 + 13);
    
    // Growth phases for logistic
    ctx.fillStyle = '#7F8C8D';
    ctx.font = '10px Arial';
    ctx.textAlign = 'center';
    ctx.fillText('Lag', graphX + graphWidth * 0.15, graphY + graphHeight + 50);
    ctx.fillText('Exponential', graphX + graphWidth * 0.4, graphY + graphHeight + 50);
    ctx.fillText('Plateau', graphX + graphWidth * 0.75, graphY + graphHeight + 50);
    
    ctx.restore();
}

static drawEcosystem(ctx, x, y, width, height, ecosystemType) {
    ctx.save();
    ctx.translate(x, y);
    
    if(ecosystemType === 'forest') {
        // Sky
        ctx.fillStyle = '#87CEEB';
        ctx.fillRect(0, 0, width, height * 0.3);
        
        // Sun
        ctx.fillStyle = '#FFD700';
        ctx.beginPath();
        ctx.arc(width * 0.85, height * 0.08, 25, 0, Math.PI * 2);
        ctx.fill();
        
        // Clouds
        ctx.fillStyle = '#FFF';
        ctx.beginPath();
        ctx.arc(width * 0.2, height * 0.1, 20, 0, Math.PI * 2);
        ctx.arc(width * 0.25, height * 0.08, 25, 0, Math.PI * 2);
        ctx.arc(width * 0.3, height * 0.1, 20, 0, Math.PI * 2);
        ctx.fill();
        
        // Ground
        ctx.fillStyle = '#8D6E63';
        ctx.fillRect(0, height * 0.7, width, height * 0.3);
        
        // Grass layer
        ctx.fillStyle = '#4CAF50';
        ctx.fillRect(0, height * 0.65, width, height * 0.05);
        
        // Trees
        for(let i = 0; i < 6; i++) {
            const tx = width * (0.1 + i * 0.15);
            const treeHeight = height * (0.25 + Math.random() * 0.15);
            
            // Trunk
            ctx.fillStyle = '#795548';
            ctx.fillRect(tx - 8, height * 0.7 - treeHeight, 16, treeHeight);
            
            // Canopy
            ctx.fillStyle = i % 2 === 0 ? '#388E3C' : '#43A047';
            ctx.beginPath();
            ctx.arc(tx, height * 0.7 - treeHeight, 35, 0, Math.PI * 2);
            ctx.fill();
            
            // Leaves detail
            ctx.fillStyle = '#2E7D32';
            ctx.beginPath();
            ctx.arc(tx - 15, height * 0.7 - treeHeight - 10, 20, 0, Math.PI * 2);
            ctx.fill();
            ctx.beginPath();
            ctx.arc(tx + 15, height * 0.7 - treeHeight - 5, 18, 0, Math.PI * 2);
            ctx.fill();
        }
        
        // Shrubs
        for(let i = 0; i < 8; i++) {
            const sx = width * (0.05 + i * 0.12);
            ctx.fillStyle = '#66BB6A';
            ctx.beginPath();
            ctx.arc(sx, height * 0.68, 12, 0, Math.PI * 2);
            ctx.fill();
        }
        
        // Animals
        // Deer
        ctx.fillStyle = '#8D6E63';
        ctx.beginPath();
        ctx.ellipse(width * 0.3, height * 0.63, 15, 10, 0, 0, Math.PI * 2);
        ctx.fill();
        
        // Bird
        ctx.fillStyle = '#1976D2';
        ctx.beginPath();
        ctx.arc(width * 0.75, height * 0.15, 5, 0, Math.PI * 2);
        ctx.fill();
        
    } else if(ecosystemType === 'aquatic') {
        // Water layers
        const waterLayers = [
            { y: 0, height: 0.15, color: '#E1F5FE', name: 'Surface' },
            { y: 0.15, height: 0.25, color: '#81D4FA', name: 'Photic Zone' },
            { y: 0.4, height: 0.3, color: '#29B6F6', name: 'Aphotic Zone' },
            { y: 0.7, height: 0.3, color: '#0277BD', name: 'Benthic Zone' }
        ];
        
        waterLayers.forEach(layer => {
            ctx.fillStyle = layer.color;
            ctx.fillRect(0, height * layer.y, width, height * layer.height);
            
            // Label
            ctx.fillStyle = '#FFF';
            ctx.font = 'bold 12px Arial';
            ctx.textAlign = 'left';
            ctx.shadowColor = 'rgba(0,0,0,0.5)';
            ctx.shadowBlur = 3;
            ctx.fillText(layer.name, width * 0.05, height * (layer.y + layer.height / 2));
            ctx.shadowBlur = 0;
        });
        
        // Sun
        ctx.fillStyle = '#FFD700';
        ctx.beginPath();
        ctx.arc(width * 0.15, height * 0.08, 20, 0, Math.PI * 2);
        ctx.fill();
        
        // Light rays
        ctx.strokeStyle = '#FDD835';
        ctx.lineWidth = 3;
        ctx.globalAlpha = 0.5;
        for(let i = 0; i < 5; i++) {
            ctx.beginPath();
            ctx.moveTo(width * (0.15 + i * 0.05), height * 0.1);
            ctx.lineTo(width * (0.2 + i * 0.05), height * 0.45);
            ctx.stroke();
        }
        ctx.globalAlpha = 1;
        
        // Phytoplankton (surface)
        ctx.fillStyle = '#4CAF50';
        for(let i = 0; i < 20; i++) {
            ctx.beginPath();
            ctx.arc(
                width * Math.random(),
                height * (0.02 + Math.random() * 0.1),
                2,
                0,
                Math.PI * 2
            );
            ctx.fill();
        }
        
        // Fish (various depths)
        const drawFish = (fx, fy, size, color) => {
            ctx.fillStyle = color;
            ctx.beginPath();
            ctx.ellipse(fx, fy, size, size * 0.6, 0, 0, Math.PI * 2);
            ctx.fill();
            
            // Tail
            ctx.beginPath();
            ctx.moveTo(fx - size, fy);
            ctx.lineTo(fx - size * 1.5, fy - size * 0.5);
            ctx.lineTo(fx - size * 1.5, fy + size * 0.5);
            ctx.closePath();
            ctx.fill();
        };
        
        drawFish(width * 0.3, height * 0.25, 10, '#FF9800');
        drawFish(width * 0.6, height * 0.3, 12, '#2196F3');
        drawFish(width * 0.5, height * 0.5, 15, '#673AB7');
        drawFish(width * 0.7, height * 0.6, 18, '#00BCD4');
        
        // Seaweed
        ctx.strokeStyle = '#1B5E20';
        ctx.lineWidth = 4;
        for(let i = 0; i < 5; i++) {
            const wx = width * (0.2 + i * 0.15);
            ctx.beginPath();
            ctx.moveTo(wx, height);
            for(let j = 0; j < 10; j++) {
                const wy = height - (j / 10) * height * 0.3;
                ctx.lineTo(wx + Math.sin(j * 0.5) * 8, wy);
            }
            ctx.stroke();
        }
        
        // Bottom sediment
        ctx.fillStyle = '#5D4037';
        ctx.fillRect(0, height * 0.95, width, height * 0.05);
        
    } else if(ecosystemType === 'grassland') {
        // Sky
        ctx.fillStyle = '#87CEEB';
        ctx.fillRect(0, 0, width, height * 0.4);
        
        // Sun
        ctx.fillStyle = '#FFD700';
        ctx.beginPath();
        ctx.arc(width * 0.8, height * 0.15, 30, 0, Math.PI * 2);
        ctx.fill();
        
        // Ground
        ctx.fillStyle = '#D7CCC8';
        ctx.fillRect(0, height * 0.6, width, height * 0.4);
        
        // Grass (tall)
        ctx.strokeStyle = '#7CB342';
        ctx.lineWidth = 3;
        for(let i = 0; i < 40; i++) {
            const gx = width * Math.random();
            const gy = height * 0.6;
            const gh = height * (0.05 + Math.random() * 0.1);
            
            ctx.beginPath();
            ctx.moveTo(gx, gy);
            ctx.quadraticCurveTo(
                gx + (Math.random() - 0.5) * 10,
                gy - gh / 2,
                gx + (Math.random() - 0.5) * 15,
                gy - gh
            );
            ctx.stroke();
        }
        
        // Scattered trees
        for(let i = 0; i < 2; i++) {
            const tx = width * (0.2 + i * 0.5);
            
            ctx.fillStyle = '#6D4C41';
            ctx.fillRect(tx - 6, height * 0.45, 12, height * 0.15);
            
            ctx.fillStyle = '#558B2F';
            ctx.beginPath();
            ctx.arc(tx, height * 0.45, 25, 0, Math.PI * 2);
            ctx.fill();
        }
        
        // Grazing animals
        for(let i = 0; i < 3; i++) {
            const ax = width * (0.3 + i * 0.2);
            ctx.fillStyle = '#8D6E63';
            ctx.beginPath();
            ctx.ellipse(ax, height * 0.58, 18, 12, 0, 0, Math.PI * 2);
            ctx.fill();
            
            // Legs
            ctx.strokeStyle = '#6D4C41';
            ctx.lineWidth = 3;
            ctx.beginPath();
            ctx.moveTo(ax - 8, height * 0.62);
            ctx.lineTo(ax - 8, height * 0.68);
            ctx.stroke();
            ctx.beginPath();
            ctx.moveTo(ax + 8, height * 0.62);
            ctx.lineTo(ax + 8, height * 0.68);
            ctx.stroke();
        }
    }
    
    // Label components
    ctx.fillStyle = '#2C3E50';
    ctx.font = 'bold 11px Arial';
    ctx.textAlign = 'left';
    
    ctx.fillText('ABIOTIC:', width * 0.02, height * 0.92);
    ctx.font = '10px Arial';
    ctx.fillStyle = '#7F8C8D';
    ctx.fillText('Sunlight, Water, Soil, Air', width * 0.02, height * 0.95);
    
    ctx.fillStyle = '#2C3E50';
    ctx.font = 'bold 11px Arial';
    ctx.fillText('BIOTIC:', width * 0.5, height * 0.92);
    ctx.font = '10px Arial';
    ctx.fillStyle = '#7F8C8D';
    ctx.fillText('Plants, Animals, Decomposers', width * 0.5, height * 0.95);
    
    ctx.restore();
}

static drawPredatorPreyGraph(ctx, x, y, width, height) {
    ctx.save();
    ctx.translate(x, y);
    
    // Axes
    const graphX = width * 0.15;
    const graphY = height * 0.1;
    const graphWidth = width * 0.75;
    const graphHeight = height * 0.7;
    
    ctx.strokeStyle = '#2C3E50';
    ctx.lineWidth = 2;
    
    // Y-axis
    ctx.beginPath();
    ctx.moveTo(graphX, graphY);
    ctx.lineTo(graphX, graphY + graphHeight);
    ctx.stroke();
    
    // X-axis
    ctx.beginPath();
    ctx.moveTo(graphX, graphY + graphHeight);
    ctx.lineTo(graphX + graphWidth, graphY + graphHeight);
    ctx.stroke();
    
    // Labels
    ctx.fillStyle = '#2C3E50';
    ctx.font = '13px Arial';
    ctx.textAlign = 'center';
    
    ctx.save();
    ctx.translate(graphX - 40, graphY + graphHeight / 2);
    ctx.rotate(-Math.PI / 2);
    ctx.fillText('Population Size', 0, 0);
    ctx.restore();
    
    ctx.fillText('Time', graphX + graphWidth / 2, graphY + graphHeight + 35);
    
    // Prey population (oscillating)
    const points = 200;
    ctx.strokeStyle = '#2196F3';
    ctx.lineWidth = 3;
    ctx.beginPath();
    
    for(let i = 0; i <= points; i++) {
        const t = i / points;
        const cycles = 3;
        const amplitude = 0.35;
        const offset = 0.5;
        const pop = offset + amplitude * Math.sin(t * cycles * Math.PI * 2);
        
        const px = graphX + t * graphWidth;
        const py = graphY + graphHeight - pop * graphHeight;
        
        if(i === 0) ctx.moveTo(px, py);
        else ctx.lineTo(px, py);
    }
    ctx.stroke();
    
    // Predator population (oscillating with phase shift)
    ctx.strokeStyle = '#F44336';
    ctx.lineWidth = 3;
    ctx.beginPath();
    
    for(let i = 0; i <= points; i++) {
        const t = i / points;
        const cycles = 3;
        const amplitude = 0.25;
        const offset = 0.4;
        const phaseShift = 0.15; // Predators lag behind prey
        const pop = offset + amplitude * Math.sin((t - phaseShift) * cycles * Math.PI * 2);
        
        const px = graphX + t * graphWidth;
        const py = graphY + graphHeight - pop * graphHeight;
        
        if(i === 0) ctx.moveTo(px, py);
        else ctx.lineTo(px, py);
    }
    ctx.stroke();
    
    // Legend
    ctx.fillStyle = '#2196F3';
    ctx.fillRect(width * 0.65, height * 0.15, 30, 15);
    ctx.fillStyle = '#2C3E50';
    ctx.font = '12px Arial';
    ctx.textAlign = 'left';
    ctx.fillText('Prey (e.g., Rabbits)', width * 0.68, height * 0.165 + 10);
    
    ctx.fillStyle = '#F44336';
    ctx.fillRect(width * 0.65, height * 0.2, 30, 15);
    ctx.fillStyle = '#2C3E50';
    ctx.fillText('Predator (e.g., Lynx)', width * 0.68, height * 0.215 + 10);
    
    // Annotations
    ctx.fillStyle = '#7F8C8D';
    ctx.font = '10px Arial';
    ctx.textAlign = 'center';
    
    // Phase 1
    ctx.fillText('Prey ↑', graphX + graphWidth * 0.15, graphY + graphHeight * 0.3);
    ctx.fillText('Predator ↓', graphX + graphWidth * 0.15, graphY + graphHeight * 0.3 + 12);
    
    // Phase 2
    ctx.fillText('Both ↑', graphX + graphWidth * 0.35, graphY + graphHeight * 0.5);
    
    // Phase 3
    ctx.fillText('Prey ↓', graphX + graphWidth * 0.55, graphY + graphHeight * 0.65);
    ctx.fillText('Predator ↑', graphX + graphWidth * 0.55, graphY + graphHeight * 0.65 + 12);
    
    // Phase 4
    ctx.fillText('Both ↓', graphX + graphWidth * 0.75, graphY + graphHeight * 0.45);
    
    // Key principle
    ctx.fillStyle = '#2C3E50';
    ctx.font = 'italic 11px Arial';
    ctx.textAlign = 'center';
    ctx.fillText('Predator population follows prey with a time lag', width * 0.5, height * 0.93);
    
    ctx.restore();
}



static drawDarwinsFinches(ctx, x, y, width, height) {
    ctx.save();
    ctx.translate(x, y);
    
    const finchTypes = [
        { name: 'Ground Finch', beak: 'thick', diet: 'Seeds', x: 0.15, y: 0.25 },
        { name: 'Cactus Finch', beak: 'pointed', diet: 'Cactus', x: 0.5, y: 0.25 },
        { name: 'Warbler Finch', beak: 'thin', diet: 'Insects', x: 0.85, y: 0.25 },
        { name: 'Woodpecker Finch', beak: 'chisel', diet: 'Grubs', x: 0.15, y: 0.65 },
        { name: 'Vegetarian Finch', beak: 'curved', diet: 'Buds/Fruit', x: 0.5, y: 0.65 },
        { name: 'Tool-Using Finch', beak: 'tool', diet: 'Insects', x: 0.85, y: 0.65 }
    ];
    
    finchTypes.forEach(finch => {
        const fx = width * finch.x;
        const fy = height * finch.y;
        const birdSize = width * 0.12;
        
        // Bird body
        ctx.fillStyle = '#8D6E63';
        ctx.strokeStyle = '#5D4037';
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.ellipse(fx, fy, birdSize * 0.4, birdSize * 0.3, 0, 0, Math.PI * 2);
        ctx.fill();
        ctx.stroke();
        
        // Head
        ctx.beginPath();
        ctx.arc(fx - birdSize * 0.25, fy - birdSize * 0.15, birdSize * 0.25, 0, Math.PI * 2);
        ctx.fill();
        ctx.stroke();
        
        // Eye
        ctx.fillStyle = '#000';
        ctx.beginPath();
        ctx.arc(fx - birdSize * 0.3, fy - birdSize * 0.18, 3, 0, Math.PI * 2);
        ctx.fill();
        
        // Wing
        ctx.fillStyle = '#6D4C41';
        ctx.beginPath();
        ctx.ellipse(fx + birdSize * 0.1, fy, birdSize * 0.25, birdSize * 0.15, Math.PI / 6, 0, Math.PI * 2);
        ctx.fill();
        ctx.stroke();
        
        // Tail
        ctx.beginPath();
        ctx.moveTo(fx + birdSize * 0.35, fy);
        ctx.lineTo(fx + birdSize * 0.5, fy - birdSize * 0.1);
        ctx.lineTo(fx + birdSize * 0.5, fy + birdSize * 0.1);
        ctx.closePath();
        ctx.fill();
        ctx.stroke();
        
        // Different beak types
        ctx.fillStyle = '#FFA726';
        ctx.strokeStyle = '#F57C00';
        ctx.lineWidth = 1.5;
        
        switch(finch.beak) {
            case 'thick':
                // Large, thick beak for seeds
                ctx.beginPath();
                ctx.moveTo(fx - birdSize * 0.45, fy - birdSize * 0.1);
                ctx.lineTo(fx - birdSize * 0.6, fy - birdSize * 0.05);
                ctx.lineTo(fx - birdSize * 0.6, fy + birdSize * 0.05);
                ctx.lineTo(fx - birdSize * 0.45, fy + birdSize * 0.1);
                ctx.closePath();
                ctx.fill();
                ctx.stroke();
                break;
                
            case 'pointed':
                // Long, pointed beak for cactus
                ctx.beginPath();
                ctx.moveTo(fx - birdSize * 0.45, fy - birdSize * 0.05);
                ctx.lineTo(fx - birdSize * 0.65, fy);
                ctx.lineTo(fx - birdSize * 0.45, fy + birdSize * 0.05);
                ctx.closePath();
                ctx.fill();
                ctx.stroke();
                break;
                
            case 'thin':
                // Thin, delicate beak for insects
                ctx.beginPath();
                ctx.moveTo(fx - birdSize * 0.45, fy - birdSize * 0.02);
                ctx.lineTo(fx - birdSize * 0.6, fy);
                ctx.lineTo(fx - birdSize * 0.45, fy + birdSize * 0.02);
                ctx.closePath();
                ctx.fill();
                ctx.stroke();
                break;
                
            case 'chisel':
                // Chisel-like beak for wood
                ctx.beginPath();
                ctx.moveTo(fx - birdSize * 0.45, fy - birdSize * 0.06);
                ctx.lineTo(fx - birdSize * 0.58, fy - birdSize * 0.03);
                ctx.lineTo(fx - birdSize * 0.58, fy + birdSize * 0.03);
                ctx.lineTo(fx - birdSize * 0.45, fy + birdSize * 0.06);
                ctx.closePath();
                ctx.fill();
                ctx.stroke();
                break;
                
            case 'curved':
                // Curved beak for buds
                ctx.beginPath();
                ctx.moveTo(fx - birdSize * 0.45, fy - birdSize * 0.05);
                ctx.quadraticCurveTo(
                    fx - birdSize * 0.55, fy - birdSize * 0.08,
                    fx - birdSize * 0.6, fy
                );
                ctx.quadraticCurveTo(
                    fx - birdSize * 0.55, fy + birdSize * 0.08,
                    fx - birdSize * 0.45, fy + birdSize * 0.05
                );
                ctx.closePath();
                ctx.fill();
                ctx.stroke();
                break;
                
            case 'tool':
                // Medium beak with twig tool
                ctx.beginPath();
                ctx.moveTo(fx - birdSize * 0.45, fy - birdSize * 0.04);
                ctx.lineTo(fx - birdSize * 0.58, fy);
                ctx.lineTo(fx - birdSize * 0.45, fy + birdSize * 0.04);
                ctx.closePath();
                ctx.fill();
                ctx.stroke();
                
                // Twig
                ctx.strokeStyle = '#795548';
                ctx.lineWidth = 2;
                ctx.beginPath();
                ctx.moveTo(fx - birdSize * 0.58, fy);
                ctx.lineTo(fx - birdSize * 0.75, fy);
                ctx.stroke();
                break;
        }
        
        // Label
        ctx.fillStyle = '#2C3E50';
        ctx.font = 'bold 11px Arial';
        ctx.textAlign = 'center';
        ctx.fillText(finch.name, fx, fy + birdSize * 0.5);
        
        ctx.font = '10px Arial';
        ctx.fillStyle = '#7F8C8D';
        ctx.fillText('Diet: ' + finch.diet, fx, fy + birdSize * 0.5 + 13);
    });
    
    // Common ancestor indicator
    ctx.fillStyle = '#2C3E50';
    ctx.font = 'bold 14px Arial';
    ctx.textAlign = 'center';
    ctx.fillText('All evolved from common ancestor', width * 0.5, height * 0.95);
    
    ctx.restore();
}

static drawNaturalSelectionProcess(ctx, x, y, width, height) {
    ctx.save();
    ctx.translate(x, y);
    
    const stepHeight = height / 5;
    
    // Step 1: Variation
    ctx.fillStyle = '#2C3E50';
    ctx.font = 'bold 16px Arial';
    ctx.textAlign = 'center';
    ctx.fillText('1. VARIATION', width * 0.5, stepHeight * 0.3);
    
    ctx.font = '12px Arial';
    ctx.fillStyle = '#7F8C8D';
    ctx.fillText('Individuals in population differ', width * 0.5, stepHeight * 0.5);
    
    // Diverse beetles
    const colors = ['#8BC34A', '#CDDC39', '#4CAF50', '#689F38', '#9E9D24'];
    for(let i = 0; i < 10; i++) {
        const bx = width * (0.2 + i * 0.06);
        const by = stepHeight * 0.7;
        
        ctx.fillStyle = colors[i % colors.length];
        ctx.strokeStyle = '#2C3E50';
        ctx.lineWidth = 1.5;
        ctx.beginPath();
        ctx.ellipse(bx, by, 12, 8, 0, 0, Math.PI * 2);
        ctx.fill();
        ctx.stroke();
        
        // Spots
        ctx.fillStyle = '#000';
        ctx.beginPath();
        ctx.arc(bx - 4, by - 2, 2, 0, Math.PI * 2);
        ctx.fill();
        ctx.beginPath();
        ctx.arc(bx + 4, by - 2, 2, 0, Math.PI * 2);
        ctx.fill();
    }
    
    // Arrow
    this.drawArrowStatic(ctx, width * 0.5, stepHeight * 0.95, width * 0.5, stepHeight * 1.05, '#E74C3C', 3);
    
    // Step 2: Selection Pressure
    ctx.fillStyle = '#2C3E50';
    ctx.font = 'bold 16px Arial';
    ctx.fillText('2. SELECTION PRESSURE', width * 0.5, stepHeight * 1.3);
    
    ctx.font = '12px Arial';
    ctx.fillStyle = '#7F8C8D';
    ctx.fillText('Environmental challenge (predator)', width * 0.5, stepHeight * 1.5);
    
    // Bird predator
    ctx.fillStyle = '#D32F2F';
    ctx.strokeStyle = '#B71C1C';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.ellipse(width * 0.5, stepHeight * 1.7, 30, 20, 0, 0, Math.PI * 2);
    ctx.fill();
    ctx.stroke();
    
    // Bird eye
    ctx.fillStyle = '#FFF';
    ctx.beginPath();
    ctx.arc(width * 0.5, stepHeight * 1.7, 6, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = '#000';
    ctx.beginPath();
    ctx.arc(width * 0.5, stepHeight * 1.7, 3, 0, Math.PI * 2);
    ctx.fill();
    
    // Arrow
    this.drawArrowStatic(ctx, width * 0.5, stepHeight * 1.95, width * 0.5, stepHeight * 2.05, '#E74C3C', 3);
    
    // Step 3: Survival (Differential Reproduction)
    ctx.fillStyle = '#2C3E50';
    ctx.font = 'bold 16px Arial';
    ctx.fillText('3. DIFFERENTIAL SURVIVAL', width * 0.5, stepHeight * 2.3);
    
    ctx.font = '12px Arial';
    ctx.fillStyle = '#7F8C8D';
    ctx.fillText('Darker beetles survive better', width * 0.5, stepHeight * 2.5);
    
    // Fewer beetles, mostly dark
    const survivorColors = ['#4CAF50', '#689F38', '#4CAF50', '#33691E', '#689F38', '#4CAF50'];
    for(let i = 0; i < 6; i++) {
        const bx = width * (0.3 + i * 0.08);
        const by = stepHeight * 2.7;
        
        ctx.fillStyle = survivorColors[i];
        ctx.strokeStyle = '#2C3E50';
        ctx.lineWidth = 1.5;
        ctx.beginPath();
        ctx.ellipse(bx, by, 12, 8, 0, 0, Math.PI * 2);
        ctx.fill();
        ctx.stroke();
        
        ctx.fillStyle = '#000';
        ctx.beginPath();
        ctx.arc(bx - 4, by - 2, 2, 0, Math.PI * 2);
        ctx.fill();
        ctx.beginPath();
        ctx.arc(bx + 4, by - 2, 2, 0, Math.PI * 2);
        ctx.fill();
    }
    
    // Dead light beetles (X marks)
    ctx.strokeStyle = '#E74C3C';
    ctx.lineWidth = 2;
    for(let i = 0; i < 3; i++) {
        const dx = width * (0.15 + i * 0.1);
        const dy = stepHeight * 2.85;
        
        ctx.beginPath();
        ctx.moveTo(dx - 8, dy - 8);
        ctx.lineTo(dx + 8, dy + 8);
        ctx.stroke();
        ctx.beginPath();
        ctx.moveTo(dx + 8, dy - 8);
        ctx.lineTo(dx - 8, dy + 8);
        ctx.stroke();
    }
    
    // Arrow
    this.drawArrowStatic(ctx, width * 0.5, stepHeight * 2.95, width * 0.5, stepHeight * 3.05, '#E74C3C', 3);
    
    // Step 4: Reproduction
    ctx.fillStyle = '#2C3E50';
    ctx.font = 'bold 16px Arial';
    ctx.fillText('4. REPRODUCTION', width * 0.5, stepHeight * 3.3);
    
    ctx.font = '12px Arial';
    ctx.fillStyle = '#7F8C8D';
    ctx.fillText('Survivors pass traits to offspring', width * 0.5, stepHeight * 3.5);
    
    // Parent and offspring
    ctx.fillStyle = '#4CAF50';
    ctx.strokeStyle = '#2C3E50';
    ctx.lineWidth = 1.5;
    
    // Parent
    ctx.beginPath();
    ctx.ellipse(width * 0.4, stepHeight * 3.7, 14, 10, 0, 0, Math.PI * 2);
    ctx.fill();
    ctx.stroke();
    
    // Offspring
    for(let i = 0; i < 3; i++) {
        const ox = width * (0.5 + i * 0.05);
        ctx.beginPath();
        ctx.ellipse(ox, stepHeight * 3.7, 10, 7, 0, 0, Math.PI * 2);
        ctx.fill();
        ctx.stroke();
    }
    
    // Arrow
    this.drawArrowStatic(ctx, width * 0.5, stepHeight * 3.85, width * 0.5, stepHeight * 3.95, '#E74C3C', 3);
    
    // Step 5: Adaptation
    ctx.fillStyle = '#2C3E50';
    ctx.font = 'bold 16px Arial';
    ctx.fillText('5. ADAPTATION OVER TIME', width * 0.5, stepHeight * 4.2);
    
    ctx.font = '12px Arial';
    ctx.fillStyle = '#7F8C8D';
    ctx.fillText('Population shifts toward favorable trait', width * 0.5, stepHeight * 4.4);
    
    // Mostly dark beetles now
    for(let i = 0; i < 10; i++) {
        const bx = width * (0.2 + i * 0.06);
        const by = stepHeight * 4.6;
        
        ctx.fillStyle = i < 8 ? '#4CAF50' : '#689F38';
        ctx.strokeStyle = '#2C3E50';
        ctx.lineWidth = 1.5;
        ctx.beginPath();
        ctx.ellipse(bx, by, 12, 8, 0, 0, Math.PI * 2);
        ctx.fill();
        ctx.stroke();
        
        ctx.fillStyle = '#000';
        ctx.beginPath();
        ctx.arc(bx - 4, by - 2, 2, 0, Math.PI * 2);
        ctx.fill();
        ctx.beginPath();
        ctx.arc(bx + 4, by - 2, 2, 0, Math.PI * 2);
        ctx.fill();
    }
    
    ctx.restore();
}

static drawPhylogeneticTree(ctx, x, y, width, height) {
    ctx.save();
    ctx.translate(x, y);
    
    // Tree trunk (common ancestor)
    ctx.strokeStyle = '#8D6E63';
    ctx.lineWidth = 8;
    ctx.beginPath();
    ctx.moveTo(width * 0.5, height * 0.9);
    ctx.lineTo(width * 0.5, height * 0.7);
    ctx.stroke();
    
    // Main branches
    const species = [
        { name: 'Bacteria', x: 0.1, color: '#9C27B0', time: 0.3 },
        { name: 'Archaea', x: 0.25, color: '#673AB7', time: 0.3 },
        { name: 'Protists', x: 0.4, color: '#00BCD4', time: 0.4 },
        { name: 'Fungi', x: 0.55, color: '#FF9800', time: 0.5 },
        { name: 'Plants', x: 0.7, color: '#4CAF50', time: 0.5 },
        { name: 'Animals', x: 0.9, color: '#F44336', time: 0.5 }
    ];
    
    ctx.lineWidth = 5;
    
    // Draw branches
    species.forEach(sp => {
        const branchPoint = height * sp.time;
        
        ctx.strokeStyle = sp.color;
        ctx.beginPath();
        ctx.moveTo(width * 0.5, height * 0.7);
        ctx.lineTo(width * 0.5, branchPoint);
        ctx.lineTo(width * sp.x, height * 0.1);
        ctx.stroke();
        
        // Branch point node
        ctx.fillStyle = '#2C3E50';
        ctx.beginPath();
        ctx.arc(width * 0.5, branchPoint, 5, 0, Math.PI * 2);
        ctx.fill();
    });
    
    // Species labels and icons
    species.forEach(sp => {
        const sx = width * sp.x;
        const sy = height * 0.1;
        
        // Icon circle
        ctx.fillStyle = sp.color;
        ctx.strokeStyle = '#2C3E50';
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.arc(sx, sy, 20, 0, Math.PI * 2);
        ctx.fill();
        ctx.stroke();
        
        // Label
        ctx.fillStyle = '#2C3E50';
        ctx.font = 'bold 12px Arial';
        ctx.textAlign = 'center';
        ctx.fillText(sp.name, sx, sy - 30);
    });
    
    // Common ancestor label
    ctx.fillStyle = '#2C3E50';
    ctx.font = 'bold 14px Arial';
    ctx.textAlign = 'center';
    ctx.fillText('Common Ancestor', width * 0.5, height * 0.98);
    
    // Time axis
    ctx.strokeStyle = '#7F8C8D';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(width * 0.02, height * 0.9);
    ctx.lineTo(width * 0.02, height * 0.1);
    ctx.stroke();
    
    ctx.fillStyle = '#7F8C8D';
    ctx.font = '11px Arial';
    ctx.save();
    ctx.translate(width * 0.01, height * 0.5);
    ctx.rotate(-Math.PI / 2);
    ctx.fillText('Time (millions of years ago)', 0, 0);
    ctx.restore();
    
    // Divergence nodes
    ctx.fillStyle = '#2C3E50';
    ctx.font = '10px Arial';
    ctx.textAlign = 'right';
    ctx.fillText('3.5 billion', width * 0.48, height * 0.72);
    ctx.fillText('2 billion', width * 0.48, height * 0.52);
    ctx.fillText('500 million', width * 0.48, height * 0.32);
    
    ctx.restore();
}

static drawAdaptiveRadiation(ctx, x, y, width, height) {
    ctx.save();
    ctx.translate(x, y);
    
    // Central ancestor
    ctx.fillStyle = '#9E9E9E';
    ctx.strokeStyle = '#616161';
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.arc(width * 0.5, height * 0.7, 30, 0, Math.PI * 2);
    ctx.fill();
    ctx.stroke();
    
    ctx.fillStyle = '#FFF';
    ctx.font = 'bold 11px Arial';
    ctx.textAlign = 'center';
    ctx.fillText('Common', width * 0.5, height * 0.68);
    ctx.fillText('Ancestor', width * 0.5, height * 0.73 + 11);
    
    // Radiating species
    const adaptations = [
        { angle: -Math.PI * 0.7, name: 'Aquatic', trait: 'Fins/Flippers', color: '#2196F3' },
        { angle: -Math.PI * 0.5, name: 'Flying', trait: 'Wings', color: '#03A9F4' },
        { angle: -Math.PI * 0.3, name: 'Climbing', trait: 'Claws/Grip', color: '#4CAF50' },
        { angle: -Math.PI * 0.1, name: 'Burrowing', trait: 'Strong Limbs', color: '#795548' },
        { angle: Math.PI * 0.1, name: 'Running', trait: 'Long Legs', color: '#FF9800' },
        { angle: Math.PI * 0.3, name: 'Grazing', trait: 'Flat Teeth', color: '#8BC34A' },
        { angle: Math.PI * 0.5, name: 'Predator', trait: 'Sharp Teeth', color: '#F44336' },
        { angle: Math.PI * 0.7, name: 'Nocturnal', trait: 'Large Eyes', color: '#9C27B0' }
    ];
    
    const radius = Math.min(width, height) * 0.35;
    
    adaptations.forEach(adapt => {
        const ex = width * 0.5 + Math.cos(adapt.angle) * radius;
        const ey = height * 0.7 + Math.sin(adapt.angle) * radius;
        
        // Branch line
        ctx.strokeStyle = adapt.color;
        ctx.lineWidth = 3;
        ctx.beginPath();
        ctx.moveTo(width * 0.5, height * 0.7);
        ctx.lineTo(ex, ey);
        ctx.stroke();
        
        // Species circle
        ctx.fillStyle = adapt.color;
        ctx.strokeStyle = '#2C3E50';
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.arc(ex, ey, 25, 0, Math.PI * 2);
        ctx.fill();
        ctx.stroke();
        
        // Label
        ctx.fillStyle = '#2C3E50';
        ctx.font = 'bold 11px Arial';
        ctx.textAlign = 'center';
        
        const labelX = width * 0.5 + Math.cos(adapt.angle) * (radius + 45);
        const labelY = height * 0.7 + Math.sin(adapt.angle) * (radius + 45);
        
        ctx.fillText(adapt.name, labelX, labelY);
        ctx.font = '9px Arial';
        ctx.fillStyle = '#7F8C8D';
        ctx.fillText(adapt.trait, labelX, labelY + 12);
    });
    
    // Title
    ctx.fillStyle = '#2C3E50';
    ctx.font = 'bold 14px Arial';
    ctx.textAlign = 'center';
    ctx.fillText('Rapid Diversification', width * 0.5, height * 0.05);
    ctx.font = '11px Arial';
    ctx.fillStyle = '#7F8C8D';
    ctx.fillText('(e.g., after mass extinction or colonizing new habitat)', width * 0.5, height * 0.08 + 13);
    
    ctx.restore();
}

/**
static drawFossilLayers(ctx, x, y, width, height) {
    ctx.save();
    ctx.translate(x, y);
    
    const layers = [
        { name: 'Recent', age: '0-10k years', color: '#8D6E63', fossils: ['human', 'modern'] },
        { name: 'Pleistocene', age: '10k-2.5M years', color: '#A1887F', fossils: ['mammoth', 'tools'] },
        { name: 'Pliocene', age: '2.5-5M years', color: '#BCAAA4', fossils: ['early human'] },
        { name: 'Miocene', age: '5-23M years', color: '#D7CCC8', fossils: ['ape'] },
        { name: 'Cretaceous', age: '66-145M years', color: '#FFCCBC', fossils: ['dinosaur', 'ammonite'] },
        { name: 'Jurassic', age: '145-200M years', color: '#FFAB91', fossils: ['dinosaur', 'fern'] },
        { name: 'Triassic', age: '200-250M years', color: '#FF8A65', fossils: ['early dino'] },
        { name: 'Permian', age: '250-300M years', color: '#FF7043', fossils: ['reptile'] },
        { name: 'Cambrian', age: '500-550M years', color: '#FF5722', fossils: ['trilobite'] }
    ];
    
    const layerHeight = height / layers.length;
    
    layers.forEach((layer, index) => {
        const ly = index * layerHeight;
        
        // Layer
        ctx.fillStyle = layer.color;
        ctx.fillRect(0, ly, width, layerHeight);
        
        // Border
        ctx.strokeStyle = '#2C3E50';
        ctx.lineWidth = 1;
        ctx.strokeRect(0, ly, width, layerHeight);
        
        // Layer name
        ctx.fillStyle = '#2C3E50';
        ctx.font = 'bold 14px Arial';
        ctx.textAlign = 'left';
        ctx.fillText(layer.name, width * 0.05, ly + layerHeight * 0.4);
        
        // Age
        ctx.font = '11px Arial';
        ctx.fillStyle = '#424242';
        ctx.fillText(layer.age, width * 0.05, ly + layerHeight * 0.7);
        
        // Fossils
        layer.fossils.forEach((fossil, fi) => {
            const fx = width * (0.5 + fi * 0.2);
            const fy = ly + layerHeight * 0.5;
            
            // Simple fossil representation
            ctx.fillStyle = '#FFF';
            ctx.strokeStyle = '#2C3E50';
            ctx.lineWidth = 2;
            
            switch(fossil) {
                case 'trilobite':
                    ctx.beginPath();
                    ctx.ellipse(fx, fy, 15, 10, 0, 0, Math.PI * 2);
                    ctx.fill();
                    ctx.stroke();
                    for(let i = 0; i < 5; i++) {
                        ctx.beginPath();
                        ctx.moveTo(fx - 15, fy - 8 + i * 4);
                        ctx.lineTo(fx + 15, fy - 8 + i * 4);
                        ctx.stroke();
                    }
                    break;
                    
                case 'dinosaur':
                    // Dinosaur skull
                    ctx.beginPath();
                    ctx.moveTo(fx - 12, fy);
                    ctx.lineTo(fx - 5, fy - 8);
                    ctx.lineTo(fx + 8, fy - 5);
                    ctx.lineTo(fx + 12, fy + 5);
                    ctx.lineTo(fx, fy + 8);
                    ctx.closePath();
                    ctx.fill();
                    ctx.stroke();
                    break;
                    
                case 'ammonite':
                    // Spiral shell
                    ctx.beginPath();
                    ctx.arc(fx, fy, 12, 0, Math.PI * 2);
                    ctx.fill();
                    ctx.stroke();
                    ctx.beginPath();
                    ctx.arc(fx - 3, fy - 3, 8, 0, Math.PI * 2);
                    ctx.stroke();
                    ctx.beginPath();
                    ctx.arc(fx - 5, fy - 5, 5, 0, Math.PI * 2);
                    ctx.stroke();
                    break;
                    
                case 'human':
                    // Skull
                    ctx.beginPath();
                    ctx.arc(fx, fy, 10, 0, Math.PI * 2);
                    ctx.fill();
                    ctx.stroke();
                    ctx.fillStyle = '#000';
                    ctx.fillRect(fx - 3, fy + 2, 2, 4);
                    ctx.fillRect(fx + 1, fy + 2, 2, 4);
                    break;
                    default:
                    // Generic fossil
                    ctx.beginPath();
                    ctx.arc(fx, fy, 8, 0, Math.PI * 2);
                    ctx.fill();
                    ctx.stroke();
                    break;
            }
        });
    }
    
    // Time arrow
    ctx.strokeStyle = '#E74C3C';
    ctx.fillStyle = '#E74C3C';
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.moveTo(width * 0.95, height * 0.1);
    ctx.lineTo(width * 0.95, height * 0.9);
    ctx.stroke();
    
    // Arrow head
    ctx.beginPath();
    ctx.moveTo(width * 0.95, height * 0.9);
    ctx.lineTo(width * 0.93, height * 0.85);
    ctx.lineTo(width * 0.97, height * 0.85);
    ctx.closePath();
    ctx.fill();
    
    ctx.save();
    ctx.translate(width * 0.97, height * 0.5);
    ctx.rotate(Math.PI / 2);
    ctx.fillStyle = '#E74C3C';
    ctx.font = 'bold 12px Arial';
    ctx.textAlign = 'center';
    ctx.fillText('TIME →', 0, 0);
    ctx.fillText('(Oldest at bottom)', 0, 15);
    ctx.restore();
    
    ctx.restore();
}
*/

static drawHardyWeinberg(ctx, x, y, width, height) {
    ctx.save();
    ctx.translate(x, y);
    
    // Title and equation
    ctx.fillStyle = '#2C3E50';
    ctx.font = 'bold 18px Arial';
    ctx.textAlign = 'center';
    ctx.fillText('Hardy-Weinberg Equilibrium', width * 0.5, height * 0.08);
    
    ctx.font = 'bold 16px Arial';
    ctx.fillText('p² + 2pq + q² = 1', width * 0.5, height * 0.15);
    
    ctx.font = '12px Arial';
    ctx.fillStyle = '#7F8C8D';
    ctx.fillText('p + q = 1', width * 0.5, height * 0.2);
    
    // Graph axes
    const graphX = width * 0.15;
    const graphY = height * 0.3;
    const graphWidth = width * 0.7;
    const graphHeight = height * 0.5;
    
    // Y-axis
    ctx.strokeStyle = '#2C3E50';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(graphX, graphY);
    ctx.lineTo(graphX, graphY + graphHeight);
    ctx.stroke();
    
    // X-axis
    ctx.beginPath();
    ctx.moveTo(graphX, graphY + graphHeight);
    ctx.lineTo(graphX + graphWidth, graphY + graphHeight);
    ctx.stroke();
    
    // Y-axis label
    ctx.fillStyle = '#2C3E50';
    ctx.font = '12px Arial';
    ctx.textAlign = 'center';
    ctx.save();
    ctx.translate(graphX - 30, graphY + graphHeight / 2);
    ctx.rotate(-Math.PI / 2);
    ctx.fillText('Frequency', 0, 0);
    ctx.restore();
    
    // X-axis label
    ctx.fillText('Allele frequency (p)', graphX + graphWidth / 2, graphY + graphHeight + 30);
    
    // Plot three curves
    const points = 100;
    
    // p² curve (homozygous dominant)
    ctx.strokeStyle = '#2196F3';
    ctx.lineWidth = 3;
    ctx.beginPath();
    for(let i = 0; i <= points; i++) {
        const p = i / points;
        const freq = p * p;
        const px = graphX + (p * graphWidth);
        const py = graphY + graphHeight - (freq * graphHeight);
        if(i === 0) ctx.moveTo(px, py);
        else ctx.lineTo(px, py);
    }
    ctx.stroke();
    
    // 2pq curve (heterozygous)
    ctx.strokeStyle = '#4CAF50';
    ctx.beginPath();
    for(let i = 0; i <= points; i++) {
        const p = i / points;
        const q = 1 - p;
        const freq = 2 * p * q;
        const px = graphX + (p * graphWidth);
        const py = graphY + graphHeight - (freq * graphHeight);
        if(i === 0) ctx.moveTo(px, py);
        else ctx.lineTo(px, py);
    }
    ctx.stroke();
    
    // q² curve (homozygous recessive)
    ctx.strokeStyle = '#F44336';
    ctx.beginPath();
    for(let i = 0; i <= points; i++) {
        const p = i / points;
        const q = 1 - p;
        const freq = q * q;
        const px = graphX + (p * graphWidth);
        const py = graphY + graphHeight - (freq * graphHeight);
        if(i === 0) ctx.moveTo(px, py);
        else ctx.lineTo(px, py);
    }
    ctx.stroke();
    
    // Legend
    const legendX = width * 0.7;
    const legendY = height * 0.35;
    
    ctx.strokeStyle = '#2196F3';
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.moveTo(legendX, legendY);
    ctx.lineTo(legendX + 30, legendY);
    ctx.stroke();
    ctx.fillStyle = '#2C3E50';
    ctx.font = '12px Arial';
    ctx.textAlign = 'left';
    ctx.fillText('p² (AA)', legendX + 35, legendY + 4);
    
    ctx.strokeStyle = '#4CAF50';
    ctx.beginPath();
    ctx.moveTo(legendX, legendY + 20);
    ctx.lineTo(legendX + 30, legendY + 20);
    ctx.stroke();
    ctx.fillText('2pq (Aa)', legendX + 35, legendY + 24);
    
    ctx.strokeStyle = '#F44336';
    ctx.beginPath();
    ctx.moveTo(legendX, legendY + 40);
    ctx.lineTo(legendX + 30, legendY + 40);
    ctx.stroke();
    ctx.fillText('q² (aa)', legendX + 35, legendY + 44);
    
    // Conditions for equilibrium
    ctx.fillStyle = '#2C3E50';
    ctx.font = 'bold 11px Arial';
    ctx.textAlign = 'left';
    ctx.fillText('Conditions for Equilibrium:', width * 0.05, height * 0.88);
    
    ctx.font = '10px Arial';
    ctx.fillStyle = '#7F8C8D';
    const conditions = [
        '• No mutations',
        '• Random mating',
        '• No gene flow',
        '• Large population',
        '• No natural selection'
    ];
    
    conditions.forEach((cond, i) => {
        ctx.fillText(cond, width * 0.05, height * (0.91 + i * 0.02));
    });
    
    ctx.restore();
}

static drawSpeciation(ctx, x, y, width, height, type) {
    ctx.save();
    ctx.translate(x, y);
    
    if(type === 'allopatric') {
        // Geographic separation
        
        // Original population
        ctx.fillStyle = '#2C3E50';
        ctx.font = 'bold 14px Arial';
        ctx.textAlign = 'center';
        ctx.fillText('Original Population', width * 0.5, height * 0.12);
        
        // Single population
        ctx.fillStyle = '#9C27B0';
        ctx.strokeStyle = '#7B1FA2';
        ctx.lineWidth = 2;
        for(let i = 0; i < 20; i++) {
            const ox = width * (0.35 + Math.random() * 0.3);
            const oy = height * (0.18 + Math.random() * 0.12);
            ctx.beginPath();
            ctx.arc(ox, oy, 5, 0, Math.PI * 2);
            ctx.fill();
            ctx.stroke();
        }
        
        // Arrow down
        this.drawArrowStatic(ctx, width * 0.5, height * 0.32, width * 0.5, height * 0.38, '#E74C3C', 3);
        
        // Geographic barrier
        ctx.fillStyle = '#2C3E50';
        ctx.font = 'bold 14px Arial';
        ctx.fillText('Geographic Barrier Forms', width * 0.5, height * 0.44);
        
        // Mountain/river barrier
        ctx.fillStyle = '#795548';
        ctx.strokeStyle = '#5D4037';
        ctx.lineWidth = 3;
        
        // Mountains
        for(let i = 0; i < 5; i++) {
            const mx = width * (0.45 + i * 0.025);
            ctx.beginPath();
            ctx.moveTo(mx - 15, height * 0.6);
            ctx.lineTo(mx, height * 0.48);
            ctx.lineTo(mx + 15, height * 0.6);
            ctx.closePath();
            ctx.fill();
            ctx.stroke();
        }
        
        // Arrow down
        this.drawArrowStatic(ctx, width * 0.5, height * 0.62, width * 0.5, height * 0.68, '#E74C3C', 3);
        
        // Separated populations
        ctx.fillStyle = '#2C3E50';
        ctx.font = 'bold 14px Arial';
        ctx.fillText('Isolated Populations Diverge', width * 0.5, height * 0.74);
        
        // Left population (different color)
        ctx.fillStyle = '#2196F3';
        ctx.strokeStyle = '#1565C0';
        for(let i = 0; i < 15; i++) {
            const lx = width * (0.15 + Math.random() * 0.15);
            const ly = height * (0.78 + Math.random() * 0.12);
            ctx.beginPath();
            ctx.arc(lx, ly, 5, 0, Math.PI * 2);
            ctx.fill();
            ctx.stroke();
        }
        
        ctx.fillStyle = '#2196F3';
        ctx.font = '11px Arial';
        ctx.textAlign = 'center';
        ctx.fillText('Species A', width * 0.225, height * 0.93);
        
        // Right population (different color)
        ctx.fillStyle = '#FF9800';
        ctx.strokeStyle = '#F57C00';
        for(let i = 0; i < 15; i++) {
            const rx = width * (0.7 + Math.random() * 0.15);
            const ry = height * (0.78 + Math.random() * 0.12);
            ctx.beginPath();
            ctx.arc(rx, ry, 5, 0, Math.PI * 2);
            ctx.fill();
            ctx.stroke();
        }
        
        ctx.fillStyle = '#FF9800';
        ctx.font = '11px Arial';
        ctx.fillText('Species B', width * 0.775, height * 0.93);
        
    } else if(type === 'sympatric') {
        // Same location
        
        // Original population
        ctx.fillStyle = '#2C3E50';
        ctx.font = 'bold 14px Arial';
        ctx.textAlign = 'center';
        ctx.fillText('Original Population (Same Location)', width * 0.5, height * 0.12);
        
        // Single population
        ctx.fillStyle = '#9C27B0';
        ctx.strokeStyle = '#7B1FA2';
        ctx.lineWidth = 2;
        for(let i = 0; i < 25; i++) {
            const ox = width * (0.3 + Math.random() * 0.4);
            const oy = height * (0.18 + Math.random() * 0.15);
            ctx.beginPath();
            ctx.arc(ox, oy, 5, 0, Math.PI * 2);
            ctx.fill();
            ctx.stroke();
        }
        
        // Arrow down
        this.drawArrowStatic(ctx, width * 0.5, height * 0.35, width * 0.5, height * 0.41, '#E74C3C', 3);
        
        // Reproductive barrier
        ctx.fillStyle = '#2C3E50';
        ctx.font = 'bold 14px Arial';
        ctx.fillText('Reproductive Isolation', width * 0.5, height * 0.47);
        ctx.font = '11px Arial';
        ctx.fillStyle = '#7F8C8D';
        ctx.fillText('(behavioral, temporal, or genetic)', width * 0.5, height * 0.52);
        
        // Examples
        ctx.font = '10px Arial';
        ctx.textAlign = 'left';
        ctx.fillText('• Different mating seasons', width * 0.2, height * 0.58);
        ctx.fillText('• Different mating calls', width * 0.2, height * 0.62);
        ctx.fillText('• Polyploidy (plants)', width * 0.2, height * 0.66);
        
        // Arrow down
        this.drawArrowStatic(ctx, width * 0.5, height * 0.68, width * 0.5, height * 0.74, '#E74C3C', 3);
        
        // Diverged populations in same area
        ctx.fillStyle = '#2C3E50';
        ctx.font = 'bold 14px Arial';
        ctx.textAlign = 'center';
        ctx.fillText('Two Species (Same Location)', width * 0.5, height * 0.8);
        
        // Overlapping but distinct populations
        ctx.fillStyle = '#2196F3';
        ctx.strokeStyle = '#1565C0';
        ctx.lineWidth = 2;
        for(let i = 0; i < 15; i++) {
            const lx = width * (0.25 + Math.random() * 0.3);
            const ly = height * (0.84 + Math.random() * 0.12);
            ctx.beginPath();
            ctx.arc(lx, ly, 5, 0, Math.PI * 2);
            ctx.fill();
            ctx.stroke();
        }
        
        ctx.fillStyle = '#FF9800';
        ctx.strokeStyle = '#F57C00';
        for(let i = 0; i < 15; i++) {
            const rx = width * (0.45 + Math.random() * 0.3);
            const ry = height * (0.84 + Math.random() * 0.12);
            ctx.beginPath();
            ctx.arc(rx, ry, 5, 0, Math.PI * 2);
            ctx.fill();
            ctx.stroke();
        }
        
        // Labels
        ctx.fillStyle = '#2196F3';
        ctx.font = '11px Arial';
        ctx.fillText('Species A', width * 0.3, height * 0.98);
        
        ctx.fillStyle = '#FF9800';
        ctx.fillText('Species B', width * 0.7, height * 0.98);
    }
    
    ctx.restore();
}

static drawComparativeAnatomy(ctx, x, y, width, height) {
    ctx.save();
    ctx.translate(x, y);
    
    // Title
    ctx.fillStyle = '#2C3E50';
    ctx.font = 'bold 18px Arial';
    ctx.textAlign = 'center';
    ctx.fillText('Homologous vs Analogous Structures', width * 0.5, height * 0.08);
    
    const halfWidth = width / 2;
    
    // === HOMOLOGOUS STRUCTURES (Left) ===
    ctx.fillStyle = '#2C3E50';
    ctx.font = 'bold 16px Arial';
    ctx.fillText('Homologous Structures', halfWidth * 0.5, height * 0.18);
    
    ctx.font = '11px Arial';
    ctx.fillStyle = '#7F8C8D';
    ctx.textAlign = 'center';
    ctx.fillText('Same structure, different function', halfWidth * 0.5, height * 0.23);
    ctx.fillText('(Common ancestor)', halfWidth * 0.5, height * 0.26 + 11);
    
    // Human arm
    ctx.fillStyle = '#2C3E50';
    ctx.font = 'bold 12px Arial';
    ctx.fillText('Human Arm', halfWidth * 0.25, height * 0.38);
    
    ctx.strokeStyle = '#E91E63';
    ctx.lineWidth = 4;
    ctx.beginPath();
    ctx.moveTo(halfWidth * 0.1, height * 0.42);
    ctx.lineTo(halfWidth * 0.25, height * 0.52);
    ctx.lineTo(halfWidth * 0.35, height * 0.6);
    ctx.stroke();
    
    // Hand bones
    ctx.lineWidth = 2;
    for(let i = 0; i < 5; i++) {
        ctx.beginPath();
        ctx.moveTo(halfWidth * 0.35, height * 0.6);
        ctx.lineTo(halfWidth * (0.32 + i * 0.015), height * 0.68);
        ctx.stroke();
    }
    
    // Whale flipper
    ctx.fillStyle = '#2C3E50';
    ctx.font = 'bold 12px Arial';
    ctx.fillText('Whale Flipper', halfWidth * 0.75, height * 0.38);
    
    ctx.strokeStyle = '#2196F3';
    ctx.lineWidth = 4;
    ctx.beginPath();
    ctx.moveTo(halfWidth * 0.6, height * 0.42);
    ctx.lineTo(halfWidth * 0.75, height * 0.52);
    ctx.lineTo(halfWidth * 0.85, height * 0.6);
    ctx.stroke();
    
    // Flipper bones
    ctx.lineWidth = 2;
    for(let i = 0; i < 5; i++) {
        ctx.beginPath();
        ctx.moveTo(halfWidth * 0.85, height * 0.6);
        ctx.lineTo(halfWidth * (0.82 + i * 0.015), height * 0.68);
        ctx.stroke();
    }
    
    // Bone color coding
    const boneColors = ['#FF5722', '#FF9800', '#FFC107'];
    
    // Color code human arm
    ctx.strokeStyle = boneColors[0];
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.moveTo(halfWidth * 0.1, height * 0.42);
    ctx.lineTo(halfWidth * 0.25, height * 0.52);
    ctx.stroke();
    
    ctx.strokeStyle = boneColors[1];
    ctx.beginPath();
    ctx.moveTo(halfWidth * 0.25, height * 0.52);
    ctx.lineTo(halfWidth * 0.35, height * 0.6);
    ctx.stroke();
    
    // Color code whale flipper
    ctx.strokeStyle = boneColors[0];
    ctx.beginPath();
    ctx.moveTo(halfWidth * 0.6, height * 0.42);
    ctx.lineTo(halfWidth * 0.75, height * 0.52);
    ctx.stroke();
    
    ctx.strokeStyle = boneColors[1];
    ctx.beginPath();
    ctx.moveTo(halfWidth * 0.75, height * 0.52);
    ctx.lineTo(halfWidth * 0.85, height * 0.6);
    ctx.stroke();
    
    // Legend for homologous
    ctx.fillStyle = boneColors[0];
    ctx.fillRect(halfWidth * 0.1, height * 0.73, 15, 10);
    ctx.fillStyle = '#2C3E50';
    ctx.font = '10px Arial';
    ctx.textAlign = 'left';
    ctx.fillText('Humerus', halfWidth * 0.13, height * 0.74 + 8);
    
    ctx.fillStyle = boneColors[1];
    ctx.fillRect(halfWidth * 0.1, height * 0.76 + 10, 15, 10);
    ctx.fillStyle = '#2C3E50';
    ctx.fillText('Radius/Ulna', halfWidth * 0.13, height * 0.77 + 18);
    
    ctx.fillStyle = boneColors[2];
    ctx.fillRect(halfWidth * 0.1, height * 0.79 + 20, 15, 10);
    ctx.fillStyle = '#2C3E50';
    ctx.fillText('Hand/Digits', halfWidth * 0.13, height * 0.8 + 28);
    
    // === ANALOGOUS STRUCTURES (Right) ===
    ctx.fillStyle = '#2C3E50';
    ctx.font = 'bold 16px Arial';
    ctx.textAlign = 'center';
    ctx.fillText('Analogous Structures', halfWidth + halfWidth * 0.5, height * 0.18);
    
    ctx.font = '11px Arial';
    ctx.fillStyle = '#7F8C8D';
    ctx.fillText('Different structure, same function', halfWidth + halfWidth * 0.5, height * 0.23);
    ctx.fillText('(Convergent evolution)', halfWidth + halfWidth * 0.5, height * 0.26 + 11);
    
    // Bird wing
    ctx.fillStyle = '#2C3E50';
    ctx.font = 'bold 12px Arial';
    ctx.fillText('Bird Wing', halfWidth + halfWidth * 0.25, height * 0.38);
    
    // Wing outline
    ctx.fillStyle = 'rgba(76, 175, 80, 0.3)';
    ctx.strokeStyle = '#4CAF50';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(halfWidth + halfWidth * 0.15, height * 0.45);
    ctx.quadraticCurveTo(
        halfWidth + halfWidth * 0.25, height * 0.38,
        halfWidth + halfWidth * 0.4, height * 0.45
    );
    ctx.lineTo(halfWidth + halfWidth * 0.25, height * 0.55);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();
    
    // Bone structure
    ctx.strokeStyle = '#2E7D32';
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.moveTo(halfWidth + halfWidth * 0.15, height * 0.45);
    ctx.lineTo(halfWidth + halfWidth * 0.22, height * 0.48);
    ctx.lineTo(halfWidth + halfWidth * 0.3, height * 0.5);
    ctx.stroke();
    
    // Feathers
    for(let i = 0; i < 5; i++) {
        ctx.strokeStyle = '#4CAF50';
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(halfWidth + halfWidth * (0.25 + i * 0.03), height * 0.45);
        ctx.lineTo(halfWidth + halfWidth * (0.27 + i * 0.03), height * 0.38);
        ctx.stroke();
    }
    
    // Insect wing
    ctx.fillStyle = '#2C3E50';
    ctx.font = 'bold 12px Arial';
    ctx.fillText('Insect Wing', halfWidth + halfWidth * 0.75, height * 0.38);
    
    // Wing outline
    ctx.fillStyle = 'rgba(255, 152, 0, 0.3)';
    ctx.strokeStyle = '#FF9800';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(halfWidth + halfWidth * 0.65, height * 0.45);
    ctx.quadraticCurveTo(
        halfWidth + halfWidth * 0.75, height * 0.38,
        halfWidth + halfWidth * 0.9, height * 0.45
    );
    ctx.lineTo(halfWidth + halfWidth * 0.75, height * 0.55);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();
    
    // Veins (different structure)
    ctx.strokeStyle = '#F57C00';
    ctx.lineWidth = 1;
    for(let i = 0; i < 6; i++) {
        ctx.beginPath();
        ctx.moveTo(halfWidth + halfWidth * 0.65, height * 0.45);
        ctx.lineTo(halfWidth + halfWidth * (0.7 + i * 0.04), height * (0.42 + i * 0.02));
        ctx.stroke();
    }
    
    // Note
    ctx.fillStyle = '#2C3E50';
    ctx.font = 'italic 11px Arial';
    ctx.textAlign = 'center';
    ctx.fillText('Both fly, but evolved wings independently', halfWidth + halfWidth * 0.5, height * 0.73);
    
    ctx.restore();
}




static drawDNAHelix(ctx, x, y, width, height) {
    ctx.save();
    ctx.translate(x, y);
    
    const helixHeight = height * 0.8;
    const helixWidth = width * 0.3;
    const centerX = width * 0.5;
    const turns = 3;
    const pointsPerTurn = 20;
    
    // Backbone strands
    ctx.strokeStyle = '#1976D2';
    ctx.lineWidth = 4;
    ctx.beginPath();
    
    for(let i = 0; i <= turns * pointsPerTurn; i++) {
        const t = i / pointsPerTurn;
        const yPos = height * 0.1 + (helixHeight * t / turns);
        const angle = t * Math.PI * 2;
        const xOffset = Math.cos(angle) * helixWidth;
        
        if(i === 0) ctx.moveTo(centerX + xOffset, yPos);
        else ctx.lineTo(centerX + xOffset, yPos);
    }
    ctx.stroke();
    
    // Second strand
    ctx.strokeStyle = '#D32F2F';
    ctx.beginPath();
    
    for(let i = 0; i <= turns * pointsPerTurn; i++) {
        const t = i / pointsPerTurn;
        const yPos = height * 0.1 + (helixHeight * t / turns);
        const angle = t * Math.PI * 2 + Math.PI;
        const xOffset = Math.cos(angle) * helixWidth;
        
        if(i === 0) ctx.moveTo(centerX + xOffset, yPos);
        else ctx.lineTo(centerX + xOffset, yPos);
    }
    ctx.stroke();
    
    // Base pairs
    const basePairs = [
        { bases: ['A', 'T'], color1: '#4CAF50', color2: '#FFC107' },
        { bases: ['T', 'A'], color1: '#FFC107', color2: '#4CAF50' },
        { bases: ['G', 'C'], color1: '#FF5722', color2: '#2196F3' },
        { bases: ['C', 'G'], color1: '#2196F3', color2: '#FF5722' }
    ];
    
    for(let i = 0; i <= turns * pointsPerTurn; i += 2) {
        const t = i / pointsPerTurn;
        const yPos = height * 0.1 + (helixHeight * t / turns);
        const angle1 = t * Math.PI * 2;
        const angle2 = angle1 + Math.PI;
        const x1 = centerX + Math.cos(angle1) * helixWidth;
        const x2 = centerX + Math.cos(angle2) * helixWidth;
        
        // Draw connecting line
        ctx.strokeStyle = '#95A5A6';
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(x1, yPos);
        ctx.lineTo(x2, yPos);
        ctx.stroke();
        
        // Draw base pair
        const pair = basePairs[i % basePairs.length];
        
        // Base 1
        ctx.fillStyle = pair.color1;
        ctx.strokeStyle = '#2C3E50';
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.arc(x1, yPos, 8, 0, Math.PI * 2);
        ctx.fill();
        ctx.stroke();
        
        ctx.fillStyle = '#FFF';
        ctx.font = 'bold 10px Arial';
        ctx.textAlign = 'center';
        ctx.fillText(pair.bases[0], x1, yPos + 3);
        
        // Base 2
        ctx.fillStyle = pair.color2;
        ctx.strokeStyle = '#2C3E50';
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.arc(x2, yPos, 8, 0, Math.PI * 2);
        ctx.fill();
        ctx.stroke();
        
        ctx.fillStyle = '#FFF';
        ctx.font = 'bold 10px Arial';
        ctx.textAlign = 'center';
        ctx.fillText(pair.bases[1], x2, yPos + 3);
        
        // Hydrogen bonds
        const midX = (x1 + x2) / 2;
        const bondCount = (pair.bases[0] === 'A' || pair.bases[0] === 'T') ? 2 : 3;
        ctx.strokeStyle = 'rgba(255, 193, 7, 0.6)';
        ctx.lineWidth = 1;
        ctx.setLineDash([2, 2]);
        for(let b = 0; b < bondCount; b++) {
            const offset = (b - (bondCount - 1) / 2) * 3;
            ctx.beginPath();
            ctx.moveTo(x1 + 8, yPos + offset);
            ctx.lineTo(x2 - 8, yPos + offset);
            ctx.stroke();
        }
        ctx.setLineDash([]);
    }
    
    // Sugar-phosphate labels
    ctx.fillStyle = '#1976D2';
    ctx.font = '11px Arial';
    ctx.textAlign = 'right';
    ctx.fillText("5'", centerX - helixWidth - 15, height * 0.1);
    ctx.fillText("3'", centerX - helixWidth - 15, height * 0.9);
    
    ctx.fillStyle = '#D32F2F';
    ctx.textAlign = 'left';
    ctx.fillText("3'", centerX + helixWidth + 15, height * 0.1);
    ctx.fillText("5'", centerX + helixWidth + 15, height * 0.9);
    
    ctx.restore();
}

static drawRNAStructure(ctx, x, y, width, height, rnaType) {
    ctx.save();
    ctx.translate(x, y);
    
    switch(rnaType) {
        case 'mRNA':
            // Single strand with codons
            ctx.strokeStyle = '#E91E63';
            ctx.lineWidth = 6;
            ctx.beginPath();
            ctx.moveTo(width * 0.1, height * 0.5);
            ctx.lineTo(width * 0.9, height * 0.5);
            ctx.stroke();
            
            // Nucleotides
            const bases = ['A', 'U', 'G', 'C', 'A', 'U', 'G', 'C', 'A', 'U', 'G', 'C'];
            const colors = {
                'A': '#4CAF50', 'U': '#FFC107', 'G': '#FF5722', 'C': '#2196F3'
            };
            
            for(let i = 0; i < bases.length; i++) {
                const bx = width * (0.15 + i * 0.06);
                
                ctx.fillStyle = colors[bases[i]];
                ctx.strokeStyle = '#2C3E50';
                ctx.lineWidth = 1.5;
                ctx.beginPath();
                ctx.arc(bx, height * 0.5, 12, 0, Math.PI * 2);
                ctx.fill();
                ctx.stroke();
                
                ctx.fillStyle = '#FFF';
                ctx.font = 'bold 11px Arial';
                ctx.textAlign = 'center';
                ctx.fillText(bases[i], bx, height * 0.5 + 4);
            }
            
            // Codon brackets
            ctx.strokeStyle = '#7B1FA2';
            ctx.lineWidth = 2;
            for(let i = 0; i < 4; i++) {
                const startX = width * (0.15 + i * 0.18);
                ctx.beginPath();
                ctx.moveTo(startX - 15, height * 0.6);
                ctx.lineTo(startX - 15, height * 0.65);
                ctx.lineTo(startX + 15 * 2, height * 0.65);
                ctx.lineTo(startX + 15 * 2, height * 0.6);
                ctx.stroke();
                
                ctx.fillStyle = '#7B1FA2';
                ctx.font = '11px Arial';
                ctx.textAlign = 'center';
                ctx.fillText('Codon', startX + 15, height * 0.72);
            }
            
            // 5' and 3' ends
            ctx.fillStyle = '#E91E63';
            ctx.font = 'bold 14px Arial';
            ctx.textAlign = 'left';
            ctx.fillText("5'", width * 0.05, height * 0.52);
            ctx.textAlign = 'right';
            ctx.fillText("3'", width * 0.95, height * 0.52);
            break;
            
        case 'tRNA':
            // Cloverleaf structure
            ctx.strokeStyle = '#9C27B0';
            ctx.lineWidth = 5;
            
            // Acceptor stem (top)
            ctx.beginPath();
            ctx.moveTo(width * 0.5, height * 0.1);
            ctx.lineTo(width * 0.5, height * 0.25);
            ctx.stroke();
            
            // Amino acid attachment site
            ctx.fillStyle = '#FF6F00';
            ctx.strokeStyle = '#E65100';
            ctx.lineWidth = 2;
            ctx.beginPath();
            ctx.arc(width * 0.5, height * 0.08, 12, 0, Math.PI * 2);
            ctx.fill();
            ctx.stroke();
            
            ctx.fillStyle = '#FFF';
            ctx.font = 'bold 10px Arial';
            ctx.textAlign = 'center';
            ctx.fillText('AA', width * 0.5, height * 0.08 + 3);
            
            // D loop (left)
            ctx.strokeStyle = '#9C27B0';
            ctx.lineWidth = 5;
            ctx.beginPath();
            ctx.arc(width * 0.3, height * 0.4, 30, -Math.PI / 2, Math.PI, false);
            ctx.stroke();
            
            // Anticodon loop (bottom)
            ctx.beginPath();
            ctx.arc(width * 0.5, height * 0.6, 35, Math.PI, 0, false);
            ctx.stroke();
            
            // TψC loop (right)
            ctx.beginPath();
            ctx.arc(width * 0.7, height * 0.4, 30, -Math.PI / 2, 0, true);
            ctx.stroke();
            
            // Anticodon
            const anticodon = ['U', 'A', 'C'];
            for(let i = 0; i < 3; i++) {
                const ax = width * (0.42 + i * 0.08);
                
                ctx.fillStyle = colors[anticodon[i]];
                ctx.strokeStyle = '#2C3E50';
                ctx.lineWidth = 1.5;
                ctx.beginPath();
                ctx.arc(ax, height * 0.75, 10, 0, Math.PI * 2);
                ctx.fill();
                ctx.stroke();
                
                ctx.fillStyle = '#FFF';
                ctx.font = 'bold 10px Arial';
                ctx.textAlign = 'center';
                ctx.fillText(anticodon[i], ax, height * 0.75 + 3);
            }
            
            ctx.fillStyle = '#7B1FA2';
            ctx.font = '12px Arial';
            ctx.fillText('Anticodon', width * 0.5, height * 0.82);
            break;
            
        case 'rRNA':
            // Complex folded structure
            ctx.strokeStyle = '#00897B';
            ctx.lineWidth = 6;
            
            // Main body
            ctx.beginPath();
            ctx.moveTo(width * 0.2, height * 0.3);
            ctx.bezierCurveTo(width * 0.15, height * 0.5, width * 0.25, height * 0.7, width * 0.4, height * 0.75);
            ctx.bezierCurveTo(width * 0.55, height * 0.8, width * 0.7, height * 0.7, width * 0.75, height * 0.5);
            ctx.bezierCurveTo(width * 0.8, height * 0.3, width * 0.65, height * 0.2, width * 0.5, height * 0.25);
            ctx.bezierCurveTo(width * 0.35, height * 0.3, width * 0.25, height * 0.25, width * 0.2, height * 0.3);
            ctx.stroke();
            
            // Internal loops
            ctx.lineWidth = 4;
            ctx.beginPath();
            ctx.arc(width * 0.35, height * 0.45, 20, 0, Math.PI * 2);
            ctx.stroke();
            
            ctx.beginPath();
            ctx.arc(width * 0.6, height * 0.5, 25, 0, Math.PI * 2);
            ctx.stroke();
            
            // Binding site
            ctx.fillStyle = '#FF6F00';
            ctx.strokeStyle = '#E65100';
            ctx.lineWidth = 2;
            ctx.beginPath();
            ctx.arc(width * 0.5, height * 0.5, 15, 0, Math.PI * 2);
            ctx.fill();
            ctx.stroke();
            
            ctx.fillStyle = '#FFF';
            ctx.font = 'bold 11px Arial';
            ctx.textAlign = 'center';
            ctx.fillText('Binding', width * 0.5, height * 0.5 + 4);
            break;
    }
    
    ctx.restore();
}

static drawTranscription(ctx, x, y, width, height) {
    ctx.save();
    ctx.translate(x, y);
    
    const dnaY = height * 0.3;
    
    // DNA double helix (being opened)
    ctx.strokeStyle = '#1976D2';
    ctx.lineWidth = 4;
    
    // Left side - still together
    ctx.beginPath();
    ctx.moveTo(width * 0.1, dnaY);
    ctx.lineTo(width * 0.35, dnaY);
    ctx.stroke();
    
    ctx.strokeStyle = '#D32F2F';
    ctx.beginPath();
    ctx.moveTo(width * 0.1, dnaY + 15);
    ctx.lineTo(width * 0.35, dnaY + 15);
    ctx.stroke();
    
    // Template strand (separating)
    ctx.strokeStyle = '#1976D2';
    ctx.beginPath();
    ctx.moveTo(width * 0.35, dnaY);
    ctx.quadraticCurveTo(width * 0.45, dnaY - 20, width * 0.55, dnaY);
    ctx.stroke();
    
    // Coding strand
    ctx.strokeStyle = '#D32F2F';
    ctx.beginPath();
    ctx.moveTo(width * 0.35, dnaY + 15);
    ctx.quadraticCurveTo(width * 0.45, dnaY + 35, width * 0.55, dnaY + 15);
    ctx.stroke();
    
    // Right side - coming back together
    ctx.strokeStyle = '#1976D2';
    ctx.beginPath();
    ctx.moveTo(width * 0.55, dnaY);
    ctx.lineTo(width * 0.9, dnaY);
    ctx.stroke();
    
    ctx.strokeStyle = '#D32F2F';
    ctx.beginPath();
    ctx.moveTo(width * 0.55, dnaY + 15);
    ctx.lineTo(width * 0.9, dnaY + 15);
    ctx.stroke();
    
    // RNA polymerase
    ctx.fillStyle = '#9C27B0';
    ctx.strokeStyle = '#7B1FA2';
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.arc(width * 0.45, dnaY + 7.5, 25, 0, Math.PI * 2);
    ctx.fill();
    ctx.stroke();
    
    ctx.fillStyle = '#FFF';
    ctx.font = 'bold 11px Arial';
    ctx.textAlign = 'center';
    ctx.fillText('RNA', width * 0.45, dnaY + 5);
    ctx.fillText('Pol', width * 0.45, dnaY + 15);
    
    // DNA bases (template strand)
    const dnaBases = ['T', 'A', 'C', 'G', 'T', 'A'];
    const baseColors = {
        'A': '#4CAF50', 'T': '#FFC107', 'G': '#FF5722', 'C': '#2196F3'
    };
    
    for(let i = 0; i < dnaBases.length; i++) {
        const bx = width * (0.37 + i * 0.03);
        const by = dnaY - 5;
        
        ctx.fillStyle = baseColors[dnaBases[i]];
        ctx.strokeStyle = '#2C3E50';
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.arc(bx, by, 6, 0, Math.PI * 2);
        ctx.fill();
        ctx.stroke();
        
        ctx.fillStyle = '#000';
        ctx.font = 'bold 8px Arial';
        ctx.textAlign = 'center';
        ctx.fillText(dnaBases[i], bx, by + 3);
    }
    
    // Growing mRNA strand
    const rnaBases = ['A', 'U', 'G', 'C', 'A', 'U'];
    ctx.strokeStyle = '#E91E63';
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.moveTo(width * 0.37, dnaY - 20);
    ctx.lineTo(width * 0.55, dnaY - 20);
    ctx.stroke();
    
    for(let i = 0; i < rnaBases.length; i++) {
        const bx = width * (0.37 + i * 0.03);
        const by = dnaY - 20;
        
        ctx.fillStyle = baseColors[rnaBases[i]] || baseColors['T']; // U uses T color
        ctx.strokeStyle = '#2C3E50';
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.arc(bx, by, 6, 0, Math.PI * 2);
        ctx.fill();
        ctx.stroke();
        
        ctx.fillStyle = '#000';
        ctx.font = 'bold 8px Arial';
        ctx.textAlign = 'center';
        ctx.fillText(rnaBases[i], bx, by + 3);
    }
    
    // Labels
    ctx.fillStyle = '#1976D2';
    ctx.font = '12px Arial';
    ctx.textAlign = 'left';
    ctx.fillText('DNA Template Strand', width * 0.1, dnaY - 10);
    
    ctx.fillStyle = '#E91E63';
    ctx.fillText('mRNA (complementary)', width * 0.58, dnaY - 25);
    
    // Direction arrows
    ctx.strokeStyle = '#7F8C8D';
    ctx.fillStyle = '#7F8C8D';
    ctx.lineWidth = 2;
    this.drawArrowStatic(ctx, width * 0.08, dnaY - 25, width * 0.08, dnaY - 5, '#7F8C8D', 2);
    ctx.font = '11px Arial';
    ctx.textAlign = 'center';
    ctx.fillText("3'", width * 0.08, dnaY - 28);
    ctx.fillText("5'", width * 0.08, dnaY);
    
    ctx.restore();
}

static drawTranslation(ctx, x, y, width, height) {
    ctx.save();
    ctx.translate(x, y);
    
    // mRNA strand
    ctx.strokeStyle = '#E91E63';
    ctx.lineWidth = 5;
    ctx.beginPath();
    ctx.moveTo(width * 0.1, height * 0.5);
    ctx.lineTo(width * 0.9, height * 0.5);
    ctx.stroke();
    
    // Codons on mRNA
    const codons = [
        ['A', 'U', 'G'], ['G', 'C', 'U'], ['A', 'A', 'A'], ['U', 'A', 'G']
    ];
    const baseColors = {
        'A': '#4CAF50', 'U': '#FFC107', 'G': '#FF5722', 'C': '#2196F3'
    };
    
    for(let c = 0; c < codons.length; c++) {
        for(let b = 0; b < 3; b++) {
            const bx = width * (0.15 + c * 0.2 + b * 0.05);
            const by = height * 0.5;
            
            ctx.fillStyle = baseColors[codons[c][b]];
            ctx.strokeStyle = '#2C3E50';
            ctx.lineWidth = 1.5;
            ctx.beginPath();
            ctx.arc(bx, by, 8, 0, Math.PI * 2);
            ctx.fill();
            ctx.stroke();
            
            ctx.fillStyle = '#FFF';
            ctx.font = 'bold 9px Arial';
            ctx.textAlign = 'center';
            ctx.fillText(codons[c][b], bx, by + 3);
        }
    }
    
    // Ribosome
    const riboX = width * 0.35;
    const riboY = height * 0.5;
    
    // Large subunit
    ctx.fillStyle = '#546E7A';
    ctx.strokeStyle = '#37474F';
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.ellipse(riboX, riboY - 15, 60, 35, 0, 0, Math.PI * 2);
    ctx.fill();
    ctx.stroke();
    
    // Small subunit
    ctx.fillStyle = '#78909C';
    ctx.beginPath();
    ctx.ellipse(riboX, riboY + 20, 55, 30, 0, 0, Math.PI * 2);
    ctx.fill();
    ctx.stroke();
    
    // Binding sites
    ctx.fillStyle = '#FFC107';
    ctx.font = 'bold 12px Arial';
    ctx.textAlign = 'center';
    ctx.fillText('A', riboX - 25, riboY);
    ctx.fillText('P', riboX, riboY);
    ctx.fillText('E', riboX + 25, riboY);
    
    // tRNA at P site
    ctx.strokeStyle = '#9C27B0';
    ctx.lineWidth = 4;
    ctx.beginPath();
    ctx.moveTo(riboX, riboY - 35);
    ctx.lineTo(riboX, riboY - 50);
    ctx.stroke();
    
    // Amino acid on tRNA
    ctx.fillStyle = '#FF6F00';
    ctx.strokeStyle = '#E65100';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.arc(riboX, riboY - 53, 10, 0, Math.PI * 2);
    ctx.fill();
    ctx.stroke();
    
    ctx.fillStyle = '#FFF';
    ctx.font = 'bold 9px Arial';
    ctx.textAlign = 'center';
    ctx.fillText('Met', riboX, riboY - 50);
    
    // Anticodon on tRNA
    const anticodon = ['U', 'A', 'C'];
    for(let i = 0; i < 3; i++) {
        const ax = riboX + (i - 1) * 12;
        const ay = riboY + 10;
        
        ctx.fillStyle = baseColors[anticodon[i]];
        ctx.strokeStyle = '#2C3E50';
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.arc(ax, ay, 6, 0, Math.PI * 2);
        ctx.fill();
        ctx.stroke();
        
        ctx.fillStyle = '#FFF';
        ctx.font = 'bold 8px Arial';
        ctx.textAlign = 'center';
        ctx.fillText(anticodon[i], ax, ay + 3);
    }
    
    // Incoming tRNA at A site
    ctx.strokeStyle = '#9C27B0';
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.moveTo(riboX - 25, riboY - 25);
    ctx.lineTo(riboX - 25, riboY - 40);
    ctx.stroke();
    
    ctx.fillStyle = '#FF6F00';
    ctx.strokeStyle = '#E65100';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.arc(riboX - 25, riboY - 43, 10, 0, Math.PI * 2);
    ctx.fill();
    ctx.stroke();
    
    ctx.fillStyle = '#FFF';
    ctx.font = 'bold 9px Arial';
    ctx.fillText('Ala', riboX - 25, riboY - 40);
    
    // Growing polypeptide chain
    ctx.strokeStyle = '#FF6F00';
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.moveTo(riboX, riboY - 53);
    ctx.lineTo(riboX + 40, riboY - 70);
    ctx.stroke();
    
    const aminoAcids = ['Met', 'Ala', 'Gly', 'Leu'];
    for(let i = 0; i < aminoAcids.length; i++) {
        const aax = riboX + (i * 12) + 10;
        const aay = riboY - 65;
        
        ctx.fillStyle = '#FF6F00';
        ctx.strokeStyle = '#E65100';
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.arc(aax, aay, 10, 0, Math.PI * 2);
        ctx.fill();
        ctx.stroke();
        
        ctx.fillStyle = '#FFF';
        ctx.font = 'bold 8px Arial';
        ctx.textAlign = 'center';
        ctx.fillText(aminoAcids[i], aax, aay + 3);
    }
    
    // Labels
    ctx.fillStyle = '#2C3E50';
    ctx.font = '12px Arial';
    ctx.textAlign = 'left';
    ctx.fillText('mRNA', width * 0.1, height * 0.45);
    ctx.fillText('Ribosome', riboX + 70, riboY);
    ctx.fillText('tRNA', riboX + 10, riboY - 45);
    ctx.fillText('Growing Polypeptide', riboX + 50, aay - 15);
    
    // Direction
    ctx.strokeStyle = '#7F8C8D';
    ctx.fillStyle = '#7F8C8D';
    this.drawArrowStatic(ctx, width * 0.85, height * 0.5, width * 0.92, height * 0.5, '#7F8C8D', 2);
    ctx.font = '11px Arial';
    ctx.textAlign = 'center';
    ctx.fillText("5'", width * 0.08, height * 0.48);
    ctx.fillText("3'", width * 0.93, height * 0.48);
    
    ctx.restore();
}

static drawCodonChart(ctx, x, y, width, height) {
    ctx.save();
    ctx.translate(x, y);
    
    const codonTable = {
        'U': {
            'U': { 'U': 'Phe', 'C': 'Phe', 'A': 'Leu', 'G': 'Leu' },
            'C': { 'U': 'Ser', 'C': 'Ser', 'A': 'Ser', 'G': 'Ser' },
            'A': { 'U': 'Tyr', 'C': 'Tyr', 'A': 'STOP', 'G': 'STOP' },
            'G': { 'U': 'Cys', 'C': 'Cys', 'A': 'STOP', 'G': 'Trp' }
        },
        'C': {
            'U': { 'U': 'Leu', 'C': 'Leu', 'A': 'Leu', 'G': 'Leu' },
            'C': { 'U': 'Pro', 'C': 'Pro', 'A': 'Pro', 'G': 'Pro' },
            'A': { 'U': 'His', 'C': 'His', 'A': 'Gln', 'G': 'Gln' },
            'G': { 'U': 'Arg', 'C': 'Arg', 'A': 'Arg', 'G': 'Arg' }
        },
        'A': {
            'U': { 'U': 'Ile', 'C': 'Ile', 'A': 'Ile', 'G': 'Met' },
            'C': { 'U': 'Thr', 'C': 'Thr', 'A': 'Thr', 'G': 'Thr' },
            'A': { 'U': 'Asn', 'C': 'Asn', 'A': 'Lys', 'G': 'Lys' },
            'G': { 'U': 'Ser', 'C': 'Ser', 'A': 'Arg', 'G': 'Arg' }
        },
        'G': {
            'U': { 'U': 'Val', 'C': 'Val', 'A': 'Val', 'G': 'Val' },
            'C': { 'U': 'Ala', 'C': 'Ala', 'A': 'Ala', 'G': 'Ala' },
            'A': { 'U': 'Asp', 'C': 'Asp', 'A': 'Glu', 'G': 'Glu' },
            'G': { 'U': 'Gly', 'C': 'Gly', 'A': 'Gly', 'G': 'Gly' }
        }
    };
    
    const cellSize = Math.min(width, height) / 5;
    const bases = ['U', 'C', 'A', 'G'];
    const baseColors = {
        'U': '#FFC107', 'C': '#2196F3', 'A': '#4CAF50', 'G': '#FF5722'
    };
    
    // Draw grid
    ctx.strokeStyle = '#2C3E50';
    ctx.lineWidth = 2;
    
    for(let i = 0; i <= 4; i++) {
        ctx.beginPath();
        ctx.moveTo(cellSize, cellSize * (i + 1));
        ctx.lineTo(cellSize * 5, cellSize * (i + 1));
        ctx.stroke();
        
        ctx.beginPath();
        ctx.moveTo(cellSize * (i + 1), cellSize);
        ctx.lineTo(cellSize * (i + 1), cellSize * 5);
        ctx.stroke();
    }
    
    // First position labels (left side)
    ctx.font = 'bold 18px Arial';
    ctx.textAlign = 'center';
    for(let i = 0; i < 4; i++) {
        ctx.fillStyle = baseColors[bases[i]];
        ctx.fillText(bases[i], cellSize * 0.5, cellSize * (i + 1.6));
    }
    
    // Second position labels (top)
    for(let i = 0; i < 4; i++) {
        ctx.fillStyle = baseColors[bases[i]];
        ctx.fillText(bases[i], cellSize * (i + 1.5), cellSize * 0.7);
    }
    
    // Fill in codons
    ctx.font = 'bold 11px Arial';
    for(let row = 0; row < 4; row++) {
        for(let col = 0; col < 4; col++) {
            const firstBase = bases[row];
            const secondBase = bases[col];
            
            // Draw 4 cells for third position
            for(let third = 0; third < 4; third++) {
                const thirdBase = bases[third];
                const aminoAcid = codonTable[firstBase][secondBase][thirdBase];
                
                const cellX = cellSize * (col + 1);
                const cellY = cellSize * (row + 1);
                const subCellSize = cellSize / 2;
                const subX = cellX + (third % 2) * subCellSize;
                const subY = cellY + Math.floor(third / 2) * subCellSize;
                
                // Color based on amino acid type
                if(aminoAcid === 'STOP') {
                    ctx.fillStyle = '#E74C3C';
                } else if(aminoAcid === 'Met') {
                    ctx.fillStyle = '#27AE60';
                } else {
                    ctx.fillStyle = '#ECF0F1';
                }
                
                ctx.fillRect(subX, subY, subCellSize, subCellSize);
                
                // Draw codon
                ctx.fillStyle = '#2C3E50';
                ctx.textAlign = 'center';
                ctx.font = 'bold 9px Arial';
                ctx.fillText(
                    firstBase + secondBase + thirdBase,
                    subX + subCellSize / 2,
                    subY + subCellSize / 2 - 5
                );
                
                // Draw amino acid
                ctx.font = 'bold 10px Arial';
                if(aminoAcid === 'STOP') {
                    ctx.fillStyle = '#FFF';
                } else {
                    ctx.fillStyle = '#2C3E50';
                }
                ctx.fillText(
                    aminoAcid,
                    subX + subCellSize / 2,
                    subY + subCellSize / 2 + 8
                );
            }
        }
    }
    
    // Third position label (right side)
    ctx.fillStyle = '#2C3E50';
    ctx.font = 'bold 14px Arial';
    ctx.textAlign = 'center';
    ctx.fillText('3rd', cellSize * 5.5, cellSize * 3);
    
    for(let i = 0; i < 4; i++) {
        ctx.fillStyle = baseColors[bases[i]];
        ctx.font = 'bold 12px Arial';
        ctx.fillText(bases[i], cellSize * 5.5, cellSize * (1.3 + i * 0.25));
    }
    
    // Labels
    ctx.fillStyle = '#2C3E50';
    ctx.font = 'bold 14px Arial';
    ctx.fillText('1st Position', cellSize * 0.5, cellSize * 0.5);
    ctx.fillText('2nd Position', cellSize * 3, cellSize * 0.3);
    
    // Legend
    ctx.font = '11px Arial';
    ctx.textAlign = 'left';
    ctx.fillStyle = '#27AE60';
    ctx.fillRect(width * 0.05, height * 0.92, 15, 15);
    ctx.fillStyle = '#2C3E50';
    ctx.fillText('Start codon (Met)', width * 0.08, height * 0.93 + 11);
    
    ctx.fillStyle = '#E74C3C';
    ctx.fillRect(width * 0.35, height * 0.92, 15, 15);
    ctx.fillStyle = '#2C3E50';
    ctx.fillText('Stop codons', width * 0.38, height * 0.93 + 11);
    
    ctx.restore();
}

static drawPunnettSquare(ctx, x, y, width, height, crossType) {
    ctx.save();
    ctx.translate(x, y);
    
    if(crossType === 'monohybrid') {
        // Monohybrid cross (e.g., Tt x Tt)
        const cellSize = Math.min(width, height) / 3.5;
        const startX = width * 0.25;
        const startY = height * 0.25;
        
        // Draw grid
        ctx.strokeStyle = '#2C3E50';
        ctx.lineWidth = 3;
        ctx.strokeRect(startX, startY, cellSize * 2, cellSize * 2);
        ctx.strokeRect(startX + cellSize, startY, cellSize, cellSize * 2);
        ctx.strokeRect(startX, startY + cellSize, cellSize * 2, cellSize);
        
        // Parent gametes
        ctx.font = 'bold 20px Arial';
        ctx.fillStyle = '#E74C3C';
        ctx.textAlign = 'center';
        
        // Top (Parent 1)
        ctx.fillText('T', startX + cellSize * 0.5, startY - 15);
        ctx.fillText('t', startX + cellSize * 1.5, startY - 15);
        
        // Left (Parent 2)
        ctx.fillText('T', startX - 25, startY + cellSize * 0.6);
        ctx.fillText('t', startX - 25, startY + cellSize * 1.6);
        
        // Offspring genotypes
        const offspring = [
            ['TT', 'Tt'],
            ['Tt', 'tt']
        ];
        
        const phenotypes = [
            ['dominant', 'dominant'],
            ['dominant', 'recessive']
        ];
        
        ctx.font = 'bold 18px Arial';
        for(let row = 0; row < 2; row++) {
            for(let col = 0; col < 2; col++) {
                const cellX = startX + col * cellSize;
                const cellY = startY + row * cellSize;
                
                // Color by phenotype
                if(phenotypes[row][col] === 'dominant') {
                    ctx.fillStyle = 'rgba(76, 175, 80, 0.2)';
                } else {
                    ctx.fillStyle = 'rgba(255, 235, 59, 0.2)';
                }
                ctx.fillRect(cellX, cellY, cellSize, cellSize);
                
                // Draw genotype
                ctx.fillStyle = '#2C3E50';
                ctx.textAlign = 'center';
                ctx.fillText(
                    offspring[row][col],
                    cellX + cellSize / 2,
                    cellY + cellSize / 2 + 7
                );
            }
        }
        
        // Phenotype ratio
        ctx.fillStyle = '#2C3E50';
        ctx.font = 'bold 14px Arial';
        ctx.textAlign = 'center';
        ctx.fillText('Genotypic Ratio: 1:2:1', width * 0.5, height * 0.85);
        ctx.fillText('Phenotypic Ratio: 3:1', width * 0.5, height * 0.92);
        
        // Legend
        ctx.font = '12px Arial';
        ctx.textAlign = 'left';
        ctx.fillStyle = '#4CAF50';
        ctx.fillRect(width * 0.1, height * 0.05, 15, 15);
        ctx.fillStyle = '#2C3E50';
        ctx.fillText('Dominant phenotype', width * 0.13, height * 0.06 + 11);
        
        ctx.fillStyle = '#FFEB3B';
        ctx.fillRect(width * 0.55, height * 0.05, 15, 15);
        ctx.fillStyle = '#2C3E50';
        ctx.fillText('Recessive phenotype', width * 0.58, height * 0.06 + 11);
        
    } else if(crossType === 'dihybrid') {
        // Dihybrid cross (e.g., RrYy x RrYy)
        const cellSize = Math.min(width, height) / 5.5;
        const startX = width * 0.2;
        const startY = height * 0.2;
        
        // Draw grid
        ctx.strokeStyle = '#2C3E50';
        ctx.lineWidth = 2;
        
        for(let i = 0; i <= 4; i++) {
            ctx.beginPath();
            ctx.moveTo(startX, startY + i * cellSize);
            ctx.lineTo(startX + cellSize * 4, startY + i * cellSize);
            ctx.stroke();
            
            ctx.beginPath();
            ctx.moveTo(startX + i * cellSize, startY);
            ctx.lineTo(startX + i * cellSize, startY + cellSize * 4);
            ctx.stroke();
        }
        
        // Gametes
        const gametes = ['RY', 'Ry', 'rY', 'ry'];
        
        ctx.font = 'bold 14px Arial';
        ctx.fillStyle = '#E74C3C';
        ctx.textAlign = 'center';
        
        // Top gametes
        for(let i = 0; i < 4; i++) {
            ctx.fillText(gametes[i], startX + cellSize * (i + 0.5), startY - 10);
        }
        
        // Left gametes
        for(let i = 0; i < 4; i++) {
            ctx.fillText(gametes[i], startX - 25, startY + cellSize * (i + 0.6));
        }
        
        // Offspring
        ctx.font = 'bold 10px Arial';
        for(let row = 0; row < 4; row++) {
            for(let col = 0; col < 4; col++) {
                const genotype = this.combineGametes(gametes[row], gametes[col]);
                const phenotype = this.determinePhenotype(genotype);
                
                const cellX = startX + col * cellSize;
                const cellY = startY + row * cellSize;
                
                // Color by phenotype
                const phenotypeColors = {
                    'RY': 'rgba(76, 175, 80, 0.3)',    // Round Yellow
                    'Ry': 'rgba(139, 195, 74, 0.3)',   // Round green
                    'rY': 'rgba(255, 235, 59, 0.3)',   // wrinkled Yellow
                    'ry': 'rgba(255, 193, 7, 0.3)'     // wrinkled green
                };
                
                ctx.fillStyle = phenotypeColors[phenotype];
                ctx.fillRect(cellX, cellY, cellSize, cellSize);
                
                // Draw genotype
                ctx.fillStyle = '#2C3E50';
                ctx.textAlign = 'center';
                ctx.fillText(genotype, cellX + cellSize / 2, cellY + cellSize / 2 + 3);
            }
        }
        
        // Phenotypic ratio
        ctx.fillStyle = '#2C3E50';
        ctx.font = 'bold 12px Arial';
        ctx.textAlign = 'center';
        ctx.fillText('Phenotypic Ratio: 9:3:3:1', width * 0.5, height * 0.93);
    }
    
    ctx.restore();
}

static combineGametes(gamete1, gamete2) {
    // Simple combination for dihybrid
    const alleles = (gamete1 + gamete2).split('');
    const sorted = alleles.sort((a, b) => {
        if(a === b) return 0;
        if(a === a.toUpperCase() && b === b.toLowerCase()) return -1;
        if(a === a.toLowerCase() && b === b.toUpperCase()) return 1;
        return a.localeCompare(b);
    });
    return sorted[0] + sorted[1] + sorted[2] + sorted[3];
}

static determinePhenotype(genotype) {
    const hasR = genotype.includes('R');
    const hasY = genotype.includes('Y');
    
    if(hasR && hasY) return 'RY';
    if(hasR && !hasY) return 'Ry';
    if(!hasR && hasY) return 'rY';
    return 'ry';
}

static drawChromosome(ctx, x, y, width, height, showHomologous) {
    ctx.save();
    ctx.translate(x, y);
    
    if(showHomologous) {
        // Homologous pair
        const chromWidth = width * 0.15;
        const chromHeight = height * 0.7;
        
        // Maternal chromosome (left)
        ctx.fillStyle = '#E91E63';
        ctx.strokeStyle = '#C2185B';
        ctx.lineWidth = 3;
        
        // p arm (short arm)
        ctx.beginPath();
        ctx.roundRect(width * 0.3 - chromWidth / 2, height * 0.15, chromWidth, chromHeight * 0.3, 5);
        ctx.fill();
        ctx.stroke();
        
        // q arm (long arm)
        ctx.beginPath();
        ctx.roundRect(width * 0.3 - chromWidth / 2, height * 0.5, chromWidth, chromHeight * 0.5, 5);
        ctx.fill();
        ctx.stroke();
        
        // Centromere
        ctx.fillStyle = '#880E4F';
        ctx.beginPath();
        ctx.ellipse(width * 0.3, height * 0.48, chromWidth * 0.7, height * 0.04, 0, 0, Math.PI * 2);
        ctx.fill();
        ctx.stroke();
        
        // Banding pattern
        ctx.fillStyle = 'rgba(0, 0, 0, 0.3)';
        for(let i = 0; i < 5; i++) {
            const bandY = height * (0.2 + i * 0.1);
            ctx.fillRect(width * 0.3 - chromWidth / 2, bandY, chromWidth, height * 0.03);
        }
        for(let i = 0; i < 7; i++) {
            const bandY = height * (0.52 + i * 0.08);
            ctx.fillRect(width * 0.3 - chromWidth / 2, bandY, chromWidth, height * 0.03);
        }
        
        // Paternal chromosome (right)
        ctx.fillStyle = '#2196F3';
        ctx.strokeStyle = '#1565C0';
        ctx.lineWidth = 3;
        
        // p arm
        ctx.beginPath();
        ctx.roundRect(width * 0.7 - chromWidth / 2, height * 0.15, chromWidth, chromHeight * 0.3, 5);
        ctx.fill();
        ctx.stroke();
        
        // q arm
        ctx.beginPath();
        ctx.roundRect(width * 0.7 - chromWidth / 2, height * 0.5, chromWidth, chromHeight * 0.5, 5);
        ctx.fill();
        ctx.stroke();
        
        // Centromere
        ctx.fillStyle = '#0D47A1';
        ctx.beginPath();
        ctx.ellipse(width * 0.7, height * 0.48, chromWidth * 0.7, height * 0.04, 0, 0, Math.PI * 2);
        ctx.fill();
        ctx.stroke();
        
        // Banding pattern
        ctx.fillStyle = 'rgba(0, 0, 0, 0.3)';
        for(let i = 0; i < 5; i++) {
            const bandY = height * (0.2 + i * 0.1);
            ctx.fillRect(width * 0.7 - chromWidth / 2, bandY, chromWidth, height * 0.03);
        }
        for(let i = 0; i < 7; i++) {
            const bandY = height * (0.52 + i * 0.08);
            ctx.fillRect(width * 0.7 - chromWidth / 2, bandY, chromWidth, height * 0.03);
        }
        
        // Gene locations (alleles)
        ctx.fillStyle = '#4CAF50';
        ctx.beginPath();
        ctx.arc(width * 0.3, height * 0.35, 6, 0, Math.PI * 2);
        ctx.fill();
        
        ctx.fillStyle = '#FFEB3B';
        ctx.beginPath();
        ctx.arc(width * 0.7, height * 0.35, 6, 0, Math.PI * 2);
        ctx.fill();
        
        // Labels
        ctx.fillStyle = '#2C3E50';
        ctx.font = '12px Arial';
        ctx.textAlign = 'center';
        ctx.fillText('Maternal', width * 0.3, height * 0.05);
        ctx.fillText('Paternal', width * 0.7, height * 0.05);
        ctx.fillText('Homologous Pair', width * 0.5, height * 0.95);
        
    } else {
        // Single chromosome with sister chromatids
        const chromWidth = width * 0.12;
        const chromHeight = height * 0.7;
        const centerX = width * 0.5;
        
        // Left chromatid
        ctx.fillStyle = '#9C27B0';
        ctx.strokeStyle = '#7B1FA2';
        ctx.lineWidth = 3;
        
        ctx.beginPath();
        ctx.roundRect(centerX - chromWidth - 5, height * 0.15, chromWidth, chromHeight * 0.3, 5);
        ctx.fill();
        ctx.stroke();
        
        ctx.beginPath();
        ctx.roundRect(centerX - chromWidth - 5, height * 0.5, chromWidth, chromHeight * 0.5, 5);
        ctx.fill();
        ctx.stroke();
        
        // Right chromatid
        ctx.beginPath();
        ctx.roundRect(centerX + 5, height * 0.15, chromWidth, chromHeight * 0.3, 5);
        ctx.fill();
        ctx.stroke();
        
        ctx.beginPath();
        ctx.roundRect(centerX + 5, height * 0.5, chromWidth, chromHeight * 0.5, 5);
        ctx.fill();
        ctx.stroke();
        
        // Centromere connecting both
        ctx.fillStyle = '#4A148C';
        ctx.beginPath();
        ctx.ellipse(centerX, height * 0.48, chromWidth * 1.3, height * 0.05, 0, 0, Math.PI * 2);
        ctx.fill();
        ctx.stroke();
        
        // Labels
        ctx.fillStyle = '#2C3E50';
        ctx.font = '12px Arial';
        ctx.textAlign = 'center';
        ctx.fillText('Sister', centerX - chromWidth / 2 - 5, height * 0.05);
        ctx.fillText('Chromatids', centerX - chromWidth / 2 - 5, height * 0.08 + 12);
        
        ctx.fillText('Centromere', centerX + chromWidth + 30, height * 0.48);
        
        ctx.font = '11px Arial';
        ctx.fillText('p arm', centerX - chromWidth * 1.5, height * 0.3);
        ctx.fillText('(short)', centerX - chromWidth * 1.5, height * 0.33 + 11);
        
        ctx.fillText('q arm', centerX - chromWidth * 1.5, height * 0.7);
        ctx.fillText('(long)', centerX - chromWidth * 1.5, height * 0.73 + 11);
    }
    
    ctx.restore();
}

static drawCrossingOver(ctx, x, y, width, height) {
    ctx.save();
    ctx.translate(x, y);
    
    // Stage 1: Before crossing over
    ctx.fillStyle = '#2C3E50';
    ctx.font = 'bold 14px Arial';
    ctx.textAlign = 'center';
    ctx.fillText('Before Crossing Over', width * 0.25, height * 0.15);
    
    const chromWidth = width * 0.08;
    const chromHeight = height * 0.25;
    
    // Maternal chromosome (red)
    ctx.fillStyle = '#E91E63';
    ctx.strokeStyle = '#C2185B';
    ctx.lineWidth = 2;
    ctx.fillRect(width * 0.15, height * 0.2, chromWidth, chromHeight);
    ctx.stroke();
    ctx.fillRect(width * 0.15 + chromWidth + 5, height * 0.2, chromWidth, chromHeight);
    ctx.stroke();
    
    // Genes on maternal (uppercase)
    ctx.fillStyle = '#4CAF50';
    const maternalGenes = ['A', 'B', 'C'];
    for(let i = 0; i < 3; i++) {
        ctx.fillStyle = '#FFF';
        ctx.font = 'bold 11px Arial';
        ctx.fillText(maternalGenes[i], width * 0.15 + chromWidth / 2, height * (0.25 + i * 0.06));
        ctx.fillText(maternalGenes[i], width * 0.15 + chromWidth * 1.5 + 5, height * (0.25 + i * 0.06));
    }
    
    // Paternal chromosome (blue)
    ctx.fillStyle = '#2196F3';
    ctx.strokeStyle = '#1565C0';
    ctx.lineWidth = 2;
    ctx.fillRect(width * 0.30, height * 0.2, chromWidth, chromHeight);
    ctx.stroke();
    ctx.fillRect(width * 0.30 + chromWidth + 5, height * 0.2, chromWidth, chromHeight);
    ctx.stroke();
    
    // Genes on paternal (lowercase)
    const paternalGenes = ['a', 'b', 'c'];
    for(let i = 0; i < 3; i++) {
        ctx.fillStyle = '#FFF';
        ctx.font = 'bold 11px Arial';
        ctx.fillText(paternalGenes[i], width * 0.30 + chromWidth / 2, height * (0.25 + i * 0.06));
        ctx.fillText(paternalGenes[i], width * 0.30 + chromWidth * 1.5 + 5, height * (0.25 + i * 0.06));
    }
    
    // Arrow
    this.drawArrowStatic(ctx, width * 0.25, height * 0.5, width * 0.25, height * 0.55, '#7F8C8D', 2);
    
    // Stage 2: During crossing over
    ctx.fillStyle = '#2C3E50';
    ctx.font = 'bold 14px Arial';
    ctx.fillText('During Crossing Over', width * 0.25, height * 0.62);
    
    // Crossed chromosomes
    ctx.fillStyle = '#E91E63';
    ctx.strokeStyle = '#C2185B';
    ctx.lineWidth = 2;
    ctx.fillRect(width * 0.15, height * 0.67, chromWidth, chromHeight * 0.4);
    ctx.stroke();
    
    ctx.fillStyle = '#2196F3';
    ctx.fillRect(width * 0.15, height * 0.67 + chromHeight * 0.4, chromWidth, chromHeight * 0.6);
    ctx.stroke();
    
    // X marks crossing over point
    ctx.strokeStyle = '#FFC107';
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.moveTo(width * 0.14, height * 0.67 + chromHeight * 0.35);
    ctx.lineTo(width * 0.24, height * 0.67 + chromHeight * 0.45);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(width * 0.24, height * 0.67 + chromHeight * 0.35);
    ctx.lineTo(width * 0.14, height * 0.67 + chromHeight * 0.45);
    ctx.stroke();
    
    // Second chromatid crossed
    ctx.fillStyle = '#E91E63';
    ctx.strokeStyle = '#C2185B';
    ctx.lineWidth = 2;
    ctx.fillRect(width * 0.30, height * 0.67, chromWidth, chromHeight * 0.4);
    ctx.stroke();
    
    ctx.fillStyle = '#2196F3';
    ctx.fillRect(width * 0.30, height * 0.67 + chromHeight * 0.4, chromWidth, chromHeight * 0.6);
    ctx.stroke();
    
    // Arrow
    this.drawArrowStatic(ctx, width * 0.5, height * 0.4, width * 0.55, height * 0.4, '#7F8C8D', 2);
    
    // Stage 3: After crossing over
    ctx.fillStyle = '#2C3E50';
    ctx.font = 'bold 14px Arial';
    ctx.fillText('After Crossing Over', width * 0.75, height * 0.15);
    ctx.font = '11px Arial';
    ctx.fillStyle = '#7F8C8D';
    ctx.fillText('(Recombinant Chromatids)', width * 0.75, height * 0.18 + 13);
    
    // Four chromatids with recombinant DNA
    const chromPositions = [0.6, 0.7, 0.8, 0.9];
    const chromTypes = [
        { top: '#E91E63', bottom: '#E91E63', genes: ['A', 'B', 'C'] }, // Parental
        { top: '#E91E63', bottom: '#2196F3', genes: ['A', 'B', 'c'] }, // Recombinant
        { top: '#2196F3', bottom: '#E91E63', genes: ['a', 'b', 'C'] }, // Recombinant
        { top: '#2196F3', bottom: '#2196F3', genes: ['a', 'b', 'c'] }  // Parental
    ];
    
    for(let i = 0; i < 4; i++) {
        const cx = width * chromPositions[i];
        const type = chromTypes[i];
        
        // Top half
        ctx.fillStyle = type.top;
        ctx.strokeStyle = '#2C3E50';
        ctx.lineWidth = 2;
        ctx.fillRect(cx, height * 0.25, chromWidth * 0.6, chromHeight * 0.5);
        ctx.stroke();
        
        // Bottom half
        ctx.fillStyle = type.bottom;
        ctx.fillRect(cx, height * 0.25 + chromHeight * 0.5, chromWidth * 0.6, chromHeight * 0.5);
        ctx.stroke();
        
        // Genes
        for(let g = 0; g < 3; g++) {
            ctx.fillStyle = '#FFF';
            ctx.font = 'bold 9px Arial';
            ctx.textAlign = 'center';
            ctx.fillText(type.genes[g], cx + chromWidth * 0.3, height * (0.28 + g * 0.06));
        }
        
        // Label recombinants
        if(i === 1 || i === 2) {
            ctx.fillStyle = '#FF9800';
            ctx.font = 'bold 10px Arial';
            ctx.fillText('R', cx + chromWidth * 0.3, height * 0.52);
        }
    }
    
    // Note
    ctx.fillStyle = '#2C3E50';
    ctx.font = 'italic 11px Arial';
    ctx.textAlign = 'center';
    ctx.fillText('Increases genetic variation', width * 0.5, height * 0.97);
    
    ctx.restore();
}

static drawMutations(ctx, x, y, width, height) {
    ctx.save();
    ctx.translate(x, y);
    
    const sectionHeight = height / 3;
    
    // === POINT MUTATION ===
    ctx.fillStyle = '#2C3E50';
    ctx.font = 'bold 16px Arial';
    ctx.textAlign = 'left';
    ctx.fillText('Point Mutation (Substitution)', width * 0.05, sectionHeight * 0.2);
    
    // Original DNA
    const originalBases = ['A', 'T', 'G', 'C', 'A', 'T'];
    const baseColors = {
        'A': '#4CAF50', 'T': '#FFC107', 'G': '#FF5722', 'C': '#2196F3'
    };
    
    ctx.font = '11px Arial';
    ctx.fillStyle = '#7F8C8D';
    ctx.fillText('Original:', width * 0.05, sectionHeight * 0.35);
    
    for(let i = 0; i < originalBases.length; i++) {
        const bx = width * (0.2 + i * 0.08);
        
        ctx.fillStyle = baseColors[originalBases[i]];
        ctx.strokeStyle = '#2C3E50';
        ctx.lineWidth = 1.5;
        ctx.beginPath();
        ctx.arc(bx, sectionHeight * 0.33, 10, 0, Math.PI * 2);
        ctx.fill();
        ctx.stroke();
        
        ctx.fillStyle = '#FFF';
        ctx.font = 'bold 10px Arial';
        ctx.textAlign = 'center';
        ctx.fillText(originalBases[i], bx, sectionHeight * 0.33 + 3);
    }
    
    // Mutated DNA
    const mutatedBases = ['A', 'T', 'C', 'C', 'A', 'T']; // G → C
    ctx.font = '11px Arial';
    ctx.fillStyle = '#7F8C8D';
    ctx.textAlign = 'left';
    ctx.fillText('Mutated:', width * 0.05, sectionHeight * 0.55);
    
    for(let i = 0; i < mutatedBases.length; i++) {
        const bx = width * (0.2 + i * 0.08);
        
        ctx.fillStyle = baseColors[mutatedBases[i]];
        ctx.strokeStyle = '#2C3E50';
        ctx.lineWidth = 1.5;
        ctx.beginPath();
        ctx.arc(bx, sectionHeight * 0.53, 10, 0, Math.PI * 2);
        ctx.fill();
        ctx.stroke();
        
        ctx.fillStyle = '#FFF';
        ctx.font = 'bold 10px Arial';
        ctx.textAlign = 'center';
        ctx.fillText(mutatedBases[i], bx, sectionHeight * 0.53 + 3);
        
        // Highlight mutation
        if(i === 2) {
            ctx.strokeStyle = '#E74C3C';
            ctx.lineWidth = 3;
            ctx.beginPath();
            ctx.arc(bx, sectionHeight * 0.53, 14, 0, Math.PI * 2);
            ctx.stroke();
        }
    }
    
    ctx.fillStyle = '#E74C3C';
    ctx.font = 'bold 11px Arial';
    ctx.textAlign = 'center';
    ctx.fillText('One base changed', width * 0.7, sectionHeight * 0.45);
    
    // === INSERTION ===
    ctx.fillStyle = '#2C3E50';
    ctx.font = 'bold 16px Arial';
    ctx.textAlign = 'left';
    ctx.fillText('Insertion (Frameshift)', width * 0.05, sectionHeight * 1.2);
    
    // Original
    ctx.font = '11px Arial';
    ctx.fillStyle = '#7F8C8D';
    ctx.fillText('Original:', width * 0.05, sectionHeight * 1.35);
    
    const insertOriginal = ['A', 'T', 'G', 'C', 'A', 'T'];
    for(let i = 0; i < insertOriginal.length; i++) {
        const bx = width * (0.2 + i * 0.08);
        
        ctx.fillStyle = baseColors[insertOriginal[i]];
        ctx.strokeStyle = '#2C3E50';
        ctx.lineWidth = 1.5;
        ctx.beginPath();
        ctx.arc(bx, sectionHeight * 1.33, 10, 0, Math.PI * 2);
        ctx.fill();
        ctx.stroke();
        
        ctx.fillStyle = '#FFF';
        ctx.font = 'bold 10px Arial';
        ctx.textAlign = 'center';
        ctx.fillText(insertOriginal[i], bx, sectionHeight * 1.33 + 3);
    }
    
    // Reading frame boxes
    ctx.strokeStyle = '#9C27B0';
    ctx.lineWidth = 2;
    for(let i = 0; i < 2; i++) {
        ctx.strokeRect(width * (0.16 + i * 0.24), sectionHeight * 1.28, width * 0.24, 20);
    }
    
    // Inserted
    ctx.font = '11px Arial';
    ctx.fillStyle = '#7F8C8D';
    ctx.textAlign = 'left';
    ctx.fillText('Inserted:', width * 0.05, sectionHeight * 1.55);
    
    const insertMutated = ['A', 'T', 'C', 'G', 'C', 'A', 'T']; // C inserted
    for(let i = 0; i < insertMutated.length; i++) {
        const bx = width * (0.2 + i * 0.08);
        
        ctx.fillStyle = baseColors[insertMutated[i]];
        ctx.strokeStyle = '#2C3E50';
        ctx.lineWidth = 1.5;
        ctx.beginPath();
        ctx.arc(bx, sectionHeight * 1.53, 10, 0, Math.PI * 2);
        ctx.fill();
        ctx.stroke();
        
        ctx.fillStyle = '#FFF';
        ctx.font = 'bold 10px Arial';
        ctx.textAlign = 'center';
        ctx.fillText(insertMutated[i], bx, sectionHeight * 1.53 + 3);
        
        // Highlight insertion
        if(i === 2) {
            ctx.strokeStyle = '#4CAF50';
            ctx.lineWidth = 3;
            ctx.beginPath();
            ctx.arc(bx, sectionHeight * 1.53, 14, 0, Math.PI * 2);
            ctx.stroke();
        }
    }
    
    // Shifted reading frame
    ctx.strokeStyle = '#E74C3C';
    ctx.lineWidth = 2;
    ctx.setLineDash([5, 3]);
    for(let i = 0; i < 2; i++) {
        ctx.strokeRect(width * (0.16 + i * 0.24) + width * 0.08, sectionHeight * 1.48, width * 0.24, 20);
    }
    ctx.setLineDash([]);
    
    ctx.fillStyle = '#E74C3C';
    ctx.font = 'bold 11px Arial';
    ctx.textAlign = 'center';
    ctx.fillText('Reading frame shifted', width * 0.7, sectionHeight * 1.45);
    
    // === DELETION ===
    ctx.fillStyle = '#2C3E50';
    ctx.font = 'bold 16px Arial';
    ctx.textAlign = 'left';
    ctx.fillText('Deletion (Frameshift)', width * 0.05, sectionHeight * 2.2);
    
    // Original
    ctx.font = '11px Arial';
    ctx.fillStyle = '#7F8C8D';
    ctx.fillText('Original:', width * 0.05, sectionHeight * 2.35);
    
    const deleteOriginal = ['A', 'T', 'G', 'C', 'A', 'T'];
    for(let i = 0; i < deleteOriginal.length; i++) {
        const bx = width * (0.2 + i * 0.08);
        
        ctx.fillStyle = baseColors[deleteOriginal[i]];
        ctx.strokeStyle = '#2C3E50';
        ctx.lineWidth = 1.5;
        ctx.beginPath();
        ctx.arc(bx, sectionHeight * 2.33, 10, 0, Math.PI * 2);
        ctx.fill();
        ctx.stroke();
        
        ctx.fillStyle = '#FFF';
        ctx.font = 'bold 10px Arial';
        ctx.textAlign = 'center';
        ctx.fillText(deleteOriginal[i], bx, sectionHeight * 2.33 + 3);
    }
    
    // Reading frame boxes
    ctx.strokeStyle = '#9C27B0';
    ctx.lineWidth = 2;
    for(let i = 0; i < 2; i++) {
        ctx.strokeRect(width * (0.16 + i * 0.24), sectionHeight * 2.28, width * 0.24, 20);
    }
    
    // Deleted
    ctx.font = '11px Arial';
    ctx.fillStyle = '#7F8C8D';
    ctx.textAlign = 'left';
    ctx.fillText('Deleted:', width * 0.05, sectionHeight * 2.55);
    
    const deleteMutated = ['A', 'T', 'C', 'A', 'T']; // G deleted
    for(let i = 0; i < deleteMutated.length; i++) {
        const bx = width * (0.2 + i * 0.08);
        
        ctx.fillStyle = baseColors[deleteMutated[i]];
        ctx.strokeStyle = '#2C3E50';
        ctx.lineWidth = 1.5;
        ctx.beginPath();
        ctx.arc(bx, sectionHeight * 2.53, 10, 0, Math.PI * 2);
        ctx.fill();
        ctx.stroke();
        
        ctx.fillStyle = '#FFF';
        ctx.font = 'bold 10px Arial';
        ctx.textAlign = 'center';
        ctx.fillText(deleteMutated[i], bx, sectionHeight * 2.53 + 3);
    }
    
    // Show deletion with X
    ctx.strokeStyle = '#E74C3C';
    ctx.lineWidth = 3;
    const delX = width * 0.36;
    ctx.beginPath();
    ctx.moveTo(delX - 8, sectionHeight * 2.33 - 8);
    ctx.lineTo(delX + 8, sectionHeight * 2.33 + 8);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(delX + 8, sectionHeight * 2.33 - 8);
    ctx.lineTo(delX - 8, sectionHeight * 2.33 + 8);
    ctx.stroke();
    
    // Shifted reading frame
    ctx.strokeStyle = '#E74C3C';
    ctx.lineWidth = 2;
    ctx.setLineDash([5, 3]);
    for(let i = 0; i < 2; i++) {
        ctx.strokeRect(width * (0.16 + i * 0.24) - width * 0.08, sectionHeight * 2.48, width * 0.24, 20);
    }
    ctx.setLineDash([]);
    
    ctx.fillStyle = '#E74C3C';
    ctx.font = 'bold 11px Arial';
    ctx.textAlign = 'center';
    ctx.fillText('Reading frame shifted', width * 0.7, sectionHeight * 2.45);
    
    ctx.restore();
}

static drawRecombinantDNA(ctx, x, y, width, height) {
    ctx.save();
    ctx.translate(x, y);
    
    const stepHeight = height / 5;
    
    // Step 1: Source DNA with gene of interest
    ctx.fillStyle = '#2C3E50';
    ctx.font = 'bold 14px Arial';
    ctx.textAlign = 'center';
    ctx.fillText('1. Isolate Gene of Interest', width * 0.25, stepHeight * 0.3);
    
    // Source DNA
    ctx.strokeStyle = '#1976D2';
    ctx.lineWidth = 4;
    ctx.beginPath();
    ctx.moveTo(width * 0.1, stepHeight * 0.5);
    ctx.lineTo(width * 0.4, stepHeight * 0.5);
    ctx.stroke();
    
    // Gene of interest
    ctx.fillStyle = '#4CAF50';
    ctx.fillRect(width * 0.18, stepHeight * 0.48, width * 0.15, 4);
    
    ctx.fillStyle = '#4CAF50';
    ctx.font = '11px Arial';
    ctx.fillText('Target Gene', width * 0.25, stepHeight * 0.63);
    
    // Restriction enzyme
    ctx.fillStyle = '#9C27B0';
    ctx.strokeStyle = '#7B1FA2';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.arc(width * 0.17, stepHeight * 0.5, 8, 0, Math.PI * 2);
    ctx.fill();
    ctx.stroke();
    
    ctx.beginPath();
    ctx.arc(width * 0.33, stepHeight * 0.5, 8, 0, Math.PI * 2);
    ctx.fill();
    ctx.stroke();
    
    ctx.fillStyle = '#9C27B0';
    ctx.font = '10px Arial';
    ctx.textAlign = 'center';
    ctx.fillText('Enzyme', width * 0.45, stepHeight * 0.52);
    
    // Arrow down
    this.drawArrowStatic(ctx, width * 0.25, stepHeight * 0.7, width * 0.25, stepHeight * 0.85, '#7F8C8D', 2);
    
    // Step 2: Isolated gene
    ctx.fillStyle = '#2C3E50';
    ctx.font = 'bold 14px Arial';
    ctx.fillText('2. Cut Gene', width * 0.25, stepHeight * 1.1);
    
    ctx.fillStyle = '#4CAF50';
    ctx.strokeStyle = '#388E3C';
    ctx.lineWidth = 3;
    ctx.fillRect(width * 0.15, stepHeight * 1.25, width * 0.2, 6);
    ctx.strokeRect(width * 0.15, stepHeight * 1.25, width * 0.2, 6);
    
    // Sticky ends
    ctx.fillStyle = '#FFC107';
    ctx.fillRect(width * 0.14, stepHeight * 1.25, width * 0.02, 6);
    ctx.fillRect(width * 0.35, stepHeight * 1.25, width * 0.02, 6);
    
    // Arrow right
    this.drawArrowStatic(ctx, width * 0.4, stepHeight * 1.28, width * 0.48, stepHeight * 1.28, '#7F8C8D', 2);
    
    // Step 3: Plasmid vector
    ctx.fillStyle = '#2C3E50';
    ctx.font = 'bold 14px Arial';
    ctx.fillText('3. Insert into Plasmid', width * 0.75, stepHeight * 0.3);
    
    // Original plasmid
    ctx.strokeStyle = '#E91E63';
    ctx.lineWidth = 4;
    ctx.beginPath();
    ctx.arc(width * 0.65, stepHeight * 0.7, 40, 0, Math.PI * 2);
    ctx.stroke();
    
    ctx.fillStyle = '#E91E63';
    ctx.font = '11px Arial';
    ctx.fillText('Plasmid', width * 0.65, stepHeight * 0.72);
    
    // Restriction site
    ctx.fillStyle = '#9C27B0';
    ctx.beginPath();
    ctx.arc(width * 0.65, stepHeight * 0.58, 6, 0, Math.PI * 2);
    ctx.fill();
    
    // Cut plasmid
    ctx.strokeStyle = '#E91E63';
    ctx.lineWidth = 4;
    ctx.beginPath();
    ctx.arc(width * 0.85, stepHeight * 0.7, 40, -Math.PI * 0.8, Math.PI * 0.8);
    ctx.stroke();
    
    // Sticky ends on plasmid
    ctx.fillStyle = '#FFC107';
    ctx.beginPath();
    ctx.arc(width * 0.85 - 28, stepHeight * 0.58, 4, 0, Math.PI * 2);
    ctx.fill();
    ctx.beginPath();
    ctx.arc(width * 0.85 + 28, stepHeight * 0.58, 4, 0, Math.PI * 2);
    ctx.fill();
    
    // Arrow down
    this.drawArrowStatic(ctx, width * 0.75, stepHeight * 1.15, width * 0.75, stepHeight * 1.3, '#7F8C8D', 2);
    
    // Step 4: Recombinant plasmid
    ctx.fillStyle = '#2C3E50';
    ctx.font = 'bold 14px Arial';
    ctx.fillText('4. Recombinant Plasmid', width * 0.75, stepHeight * 1.55);
    
    // Plasmid with gene
    ctx.strokeStyle = '#E91E63';
    ctx.lineWidth = 4;
    ctx.beginPath();
    ctx.arc(width * 0.75, stepHeight * 2, 45, 0, Math.PI * 2);
    ctx.stroke();
    
    // Inserted gene
    ctx.strokeStyle = '#4CAF50';
    ctx.lineWidth = 5;
    ctx.beginPath();
    ctx.arc(width * 0.75, stepHeight * 2, 45, -Math.PI * 0.3, Math.PI * 0.3);
    ctx.stroke();
    
    ctx.fillStyle = '#4CAF50';
    ctx.font = '10px Arial';
    ctx.fillText('Gene', width * 0.82, stepHeight * 2 + 3);
    
    // Arrow down
    this.drawArrowStatic(ctx, width * 0.75, stepHeight * 2.5, width * 0.75, stepHeight * 2.65, '#7F8C8D', 2);
    
    // Step 5: Transform bacteria
    ctx.fillStyle = '#2C3E50';
    ctx.font = 'bold 14px Arial';
    ctx.fillText('5. Transform Bacteria', width * 0.75, stepHeight * 2.9);
    
    // Bacteria
    ctx.fillStyle = '#9575CD';
    ctx.strokeStyle = '#7E57C2';
    ctx.lineWidth = 2;
    for(let i = 0; i < 3; i++) {
        const bx = width * (0.65 + i * 0.1);
        ctx.beginPath();
        ctx.ellipse(bx, stepHeight * 3.3, 25, 15, 0, 0, Math.PI * 2);
        ctx.fill();
        ctx.stroke();
        
        // Plasmid inside
        ctx.strokeStyle = '#E91E63';
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.arc(bx, stepHeight * 3.3, 8, 0, Math.PI * 2);
        ctx.stroke();
        
        // Gene segment
        ctx.strokeStyle = '#4CAF50';
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.arc(bx, stepHeight * 3.3, 8, 0, Math.PI * 0.6);
        ctx.stroke();
    }
    
    // Arrow down
    this.drawArrowStatic(ctx, width * 0.75, stepHeight * 3.6, width * 0.75, stepHeight * 3.75, '#7F8C8D', 2);
    
    // Step 6: Clone and express
    ctx.fillStyle = '#2C3E50';
    ctx.font = 'bold 14px Arial';
    ctx.fillText('6. Clone & Express Protein', width * 0.75, stepHeight * 4);
    
    // Multiple bacteria (clones)
    for(let i = 0; i < 8; i++) {
        const bx = width * (0.55 + (i % 4) * 0.1);
        const by = stepHeight * (4.2 + Math.floor(i / 4) * 0.3);
        
        ctx.fillStyle = '#9575CD';
        ctx.strokeStyle = '#7E57C2';
        ctx.lineWidth = 1.5;
        ctx.beginPath();
        ctx.ellipse(bx, by, 18, 11, 0, 0, Math.PI * 2);
        ctx.fill();
        ctx.stroke();
    }
    
    // Protein products
    ctx.fillStyle = '#FF6F00';
    ctx.strokeStyle = '#E65100';
    ctx.lineWidth = 1.5;
    for(let i = 0; i < 5; i++) {
        const px = width * (0.58 + i * 0.08);
        ctx.beginPath();
        ctx.arc(px, stepHeight * 4.75, 6, 0, Math.PI * 2);
        ctx.fill();
        ctx.stroke();
    }
    
    ctx.fillStyle = '#FF6F00';
    ctx.font = '10px Arial';
    ctx.fillText('Desired Protein', width * 0.75, stepHeight * 4.9);
    
    ctx.restore();
}

static drawPCRCycle(ctx, x, y, width, height) {
    ctx.save();
    ctx.translate(x, y);
    
    const centerX = width * 0.5;
    const centerY = height * 0.5;
    const radius = Math.min(width, height) * 0.35;
    
    // Draw circular cycle
    ctx.strokeStyle = '#7F8C8D';
    ctx.lineWidth = 3;
    ctx.setLineDash([10, 5]);
    ctx.beginPath();
    ctx.arc(centerX, centerY, radius, 0, Math.PI * 2);
    ctx.stroke();
    ctx.setLineDash([]);
    
    // Step 1: Denaturation (top) - 95°C
    const step1Angle = -Math.PI / 2;
    const step1X = centerX + Math.cos(step1Angle) * radius;
    const step1Y = centerY + Math.sin(step1Angle) * radius;
    
    ctx.fillStyle = '#E74C3C';
    ctx.strokeStyle = '#C0392B';
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.arc(step1X, step1Y, 50, 0, Math.PI * 2);
    ctx.fill();
    ctx.stroke();
    
    // Double helix separating
    ctx.strokeStyle = '#1976D2';
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.moveTo(step1X - 15, step1Y);
    ctx.lineTo(step1X - 25, step1Y - 10);
    ctx.stroke();
    
    ctx.strokeStyle = '#D32F2F';
    ctx.beginPath();
    ctx.moveTo(step1X + 15, step1Y);
    ctx.lineTo(step1X + 25, step1Y - 10);
    ctx.stroke();
    
    ctx.fillStyle = '#FFF';
    ctx.font = 'bold 11px Arial';
    ctx.textAlign = 'center';
    ctx.fillText('95°C', step1X, step1Y + 15);
    
    ctx.fillStyle = '#2C3E50';
    ctx.font = 'bold 13px Arial';
    ctx.fillText('Denaturation', step1X, step1Y - 65);
    
    // Arrow to step 2
    this.drawArrowStatic(
        ctx,
        centerX + Math.cos(step1Angle + Math.PI / 3) * radius * 0.85,
        centerY + Math.sin(step1Angle + Math.PI / 3) * radius * 0.85,
        centerX + Math.cos(step1Angle + Math.PI / 2.5) * radius * 0.85,
        centerY + Math.sin(step1Angle + Math.PI / 2.5) * radius * 0.85,
        '#7F8C8D',
        2
    );
    
    // Step 2: Annealing (right) - 55°C
    const step2Angle = Math.PI / 6;
    const step2X = centerX + Math.cos(step2Angle) * radius;
    const step2Y = centerY + Math.sin(step2Angle) * radius;
    
    ctx.fillStyle = '#FFC107';
    ctx.strokeStyle = '#FFA000';
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.arc(step2X, step2Y, 50, 0, Math.PI * 2);
    ctx.fill();
    ctx.stroke();
    
    // Single strands with primers
    ctx.strokeStyle = '#1976D2';
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.moveTo(step2X - 25, step2Y - 5);
    ctx.lineTo(step2X + 25, step2Y - 5);
    ctx.stroke();
    
    // Primers
    ctx.fillStyle = '#9C27B0';
    ctx.fillRect(step2X - 25, step2Y - 7, 15, 4);
    ctx.fillRect(step2X + 10, step2Y - 7, 15, 4);
    
    ctx.strokeStyle = '#D32F2F';
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.moveTo(step2X - 25, step2Y + 5);
    ctx.lineTo(step2X + 25, step2Y + 5);
    ctx.stroke();
    
    ctx.fillStyle = '#9C27B0';
    ctx.fillRect(step2X - 25, step2Y + 3, 15, 4);
    ctx.fillRect(step2X + 10, step2Y + 3, 15, 4);
    
    ctx.fillStyle = '#FFF';
    ctx.font = 'bold 11px Arial';
    ctx.textAlign = 'center';
    ctx.fillText('55°C', step2X, step2Y + 20);
    
    ctx.fillStyle = '#2C3E50';
    ctx.font = 'bold 13px Arial';
    ctx.fillText('Annealing', step2X + 70, step2Y);
    ctx.font = '10px Arial';
    ctx.fillText('(Primers bind)', step2X + 70, step2Y + 15);
    
    // Arrow to step 3
    this.drawArrowStatic(
        ctx,
        centerX + Math.cos(step2Angle + Math.PI / 3) * radius * 0.85,
        centerY + Math.sin(step2Angle + Math.PI / 3) * radius * 0.85,
        centerX + Math.cos(step2Angle + Math.PI / 2.5) * radius * 0.85,
        centerY + Math.sin(step2Angle + Math.PI / 2.5) * radius * 0.85,
        '#7F8C8D',
        2
    );
    
    // Step 3: Extension (bottom) - 72°C
    const step3Angle = Math.PI * 5 / 6;
    const step3X = centerX + Math.cos(step3Angle) * radius;
    const step3Y = centerY + Math.sin(step3Angle) * radius;
    
    ctx.fillStyle = '#4CAF50';
    ctx.strokeStyle = '#388E3C';
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.arc(step3X, step3Y, 50, 0, Math.PI * 2);
    ctx.fill();
    ctx.stroke();
    
    // DNA polymerase extending
    ctx.strokeStyle = '#1976D2';
    ctx.lineWidth = 4;
    ctx.beginPath();
    ctx.moveTo(step3X - 25, step3Y - 5);
    ctx.lineTo(step3X + 25, step3Y - 5);
    ctx.stroke();
    
    ctx.strokeStyle = '#D32F2F';
    ctx.beginPath();
    ctx.moveTo(step3X - 25, step3Y + 5);
    ctx.lineTo(step3X + 25, step3Y + 5);
    ctx.stroke();
    
    // Taq polymerase
    ctx.fillStyle = '#FF6F00';
    ctx.strokeStyle = '#E65100';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.arc(step3X, step3Y, 12, 0, Math.PI * 2);
    ctx.fill();
    ctx.stroke();
    
    ctx.fillStyle = '#FFF';
    ctx.font = 'bold 8px Arial';
    ctx.textAlign = 'center';
    ctx.fillText('Taq', step3X, step3Y + 3);
    
    ctx.font = 'bold 11px Arial';
    ctx.fillText('72°C', step3X, step3Y + 25);
    
    ctx.fillStyle = '#2C3E50';
    ctx.font = 'bold 13px Arial';
    ctx.fillText('Extension', step3X - 70, step3Y);
    ctx.font = '10px Arial';
    ctx.fillText('(DNA synthesis)', step3X - 70, step3Y + 15);
    
    // Arrow back to step 1
    this.drawArrowStatic(
        ctx,
        centerX + Math.cos(step3Angle + Math.PI / 3) * radius * 0.85,
        centerY + Math.sin(step3Angle + Math.PI / 3) * radius * 0.85,
        centerX + Math.cos(step3Angle + Math.PI / 2.5) * radius * 0.85,
        centerY + Math.sin(step3Angle + Math.PI / 2.5) * radius * 0.85,
        '#7F8C8D',
        2
    );
    
    // Center label
    ctx.fillStyle = '#2C3E50';
    ctx.font = 'bold 16px Arial';
    ctx.textAlign = 'center';
    ctx.fillText('PCR Cycle', centerX, centerY - 10);
    ctx.font = '12px Arial';
    ctx.fillText('Repeats', centerX, centerY + 5);
    ctx.fillText('25-35 times', centerX, centerY + 20);
    
    // Amplification indicator
    ctx.font = 'bold 14px Arial';
    ctx.fillStyle = '#E74C3C';
    ctx.fillText('2ⁿ copies', centerX, centerY + 40);

    ctx.restore();

}





 static drawAnimalCell(ctx, x, y, width, height) {
    ctx.save();
    ctx.translate(x, y);
    
    // Cell membrane
    ctx.strokeStyle = '#E91E63';
    ctx.lineWidth = 3;
    ctx.fillStyle = 'rgba(255, 240, 245, 0.3)';
    ctx.beginPath();
    ctx.ellipse(width * 0.5, height * 0.5, width * 0.45, height * 0.45, 0, 0, Math.PI * 2);
    ctx.fill();
    ctx.stroke();
    
    // Cytoplasm
    ctx.fillStyle = 'rgba(255, 228, 225, 0.4)';
    ctx.beginPath();
    ctx.ellipse(width * 0.5, height * 0.5, width * 0.43, height * 0.43, 0, 0, Math.PI * 2);
    ctx.fill();
    
    // Nucleus (large, central)
    const gradient = ctx.createRadialGradient(width * 0.5, height * 0.45, 0, width * 0.5, height * 0.45, width * 0.15);
    gradient.addColorStop(0, '#E6D5F5');
    gradient.addColorStop(1, '#C8A2E0');
    ctx.fillStyle = gradient;
    ctx.beginPath();
    ctx.ellipse(width * 0.5, height * 0.45, width * 0.15, height * 0.15, 0, 0, Math.PI * 2);
    ctx.fill();
    ctx.strokeStyle = '#9C27B0';
    ctx.lineWidth = 2;
    ctx.stroke();
    
    // Nuclear envelope pores
    ctx.fillStyle = '#7B1FA2';
    for(let i = 0; i < 8; i++) {
        const angle = (i / 8) * Math.PI * 2;
        const px = width * 0.5 + Math.cos(angle) * width * 0.14;
        const py = height * 0.45 + Math.sin(angle) * height * 0.14;
        ctx.beginPath();
        ctx.arc(px, py, 2, 0, Math.PI * 2);
        ctx.fill();
    }
    
    // Nucleolus
    ctx.fillStyle = '#4A148C';
    ctx.beginPath();
    ctx.arc(width * 0.5, height * 0.45, width * 0.05, 0, Math.PI * 2);
    ctx.fill();
    
    // Chromatin
    ctx.fillStyle = 'rgba(123, 31, 162, 0.3)';
    for(let i = 0; i < 10; i++) {
        const angle = Math.random() * Math.PI * 2;
        const r = Math.random() * width * 0.1;
        const cx = width * 0.5 + Math.cos(angle) * r;
        const cy = height * 0.45 + Math.sin(angle) * r;
        ctx.beginPath();
        ctx.arc(cx, cy, 2 + Math.random() * 2, 0, Math.PI * 2);
        ctx.fill();
    }
    
    // Mitochondria (bean-shaped organelles)
    ctx.fillStyle = '#FFA07A';
    ctx.strokeStyle = '#FF6347';
    ctx.lineWidth = 1.5;
    const mitoPositions = [[0.25, 0.3], [0.7, 0.35], [0.3, 0.7], [0.75, 0.65]];
    mitoPositions.forEach(([px, py]) => {
        ctx.beginPath();
        ctx.ellipse(width * px, height * py, width * 0.06, height * 0.035, Math.PI / 4, 0, Math.PI * 2);
        ctx.fill();
        ctx.stroke();
        
        // Cristae (internal folds)
        ctx.strokeStyle = '#D32F2F';
        ctx.lineWidth = 1;
        for(let i = 0; i < 3; i++) {
            ctx.beginPath();
            ctx.moveTo(width * px - width * 0.04, height * py - height * 0.02 + i * height * 0.02);
            ctx.lineTo(width * px + width * 0.04, height * py - height * 0.02 + i * height * 0.02);
            ctx.stroke();
        }
        ctx.strokeStyle = '#FF6347';
    });
    
    // Endoplasmic Reticulum (rough)
    ctx.strokeStyle = '#8D6E63';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(width * 0.55, height * 0.55);
    ctx.bezierCurveTo(width * 0.6, height * 0.52, width * 0.65, height * 0.55, width * 0.7, height * 0.58);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(width * 0.55, height * 0.6);
    ctx.bezierCurveTo(width * 0.6, height * 0.57, width * 0.65, height * 0.6, width * 0.7, height * 0.63);
    ctx.stroke();
    
    // Ribosomes on ER
    ctx.fillStyle = '#5D4037';
    for(let i = 0; i < 12; i++) {
        const t = i / 12;
        const rx = width * (0.55 + t * 0.15);
        const ry = height * (0.55 + Math.sin(t * Math.PI) * 0.03);
        ctx.beginPath();
        ctx.arc(rx, ry, 1.5, 0, Math.PI * 2);
        ctx.fill();
    }
    
    // Golgi Apparatus (stacked sacs)
    ctx.strokeStyle = '#FFA726';
    ctx.lineWidth = 2;
    for(let i = 0; i < 5; i++) {
        ctx.beginPath();
        ctx.arc(width * 0.7, height * 0.25, width * (0.04 + i * 0.01), Math.PI * 0.3, Math.PI * 1.2);
        ctx.stroke();
    }
    
    // Lysosomes
    ctx.fillStyle = '#AB47BC';
    ctx.strokeStyle = '#7B1FA2';
    ctx.lineWidth = 1;
    [[0.2, 0.65], [0.35, 0.25], [0.8, 0.75]].forEach(([px, py]) => {
        ctx.beginPath();
        ctx.arc(width * px, height * py, width * 0.025, 0, Math.PI * 2);
        ctx.fill();
        ctx.stroke();
    });
    
    // Peroxisomes
    ctx.fillStyle = '#26A69A';
    ctx.strokeStyle = '#00897B';
    [[0.65, 0.75], [0.25, 0.55]].forEach(([px, py]) => {
        ctx.beginPath();
        ctx.arc(width * px, height * py, width * 0.02, 0, Math.PI * 2);
        ctx.fill();
        ctx.stroke();
    });
    
    // Centrioles (near nucleus)
    ctx.strokeStyle = '#4CAF50';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(width * 0.4, height * 0.3);
    ctx.lineTo(width * 0.38, height * 0.26);
    ctx.moveTo(width * 0.42, height * 0.3);
    ctx.lineTo(width * 0.44, height * 0.26);
    ctx.stroke();
    
    // Free ribosomes (scattered)
    ctx.fillStyle = '#3E2723';
    for(let i = 0; i < 30; i++) {
        const rx = width * (0.15 + Math.random() * 0.7);
        const ry = height * (0.15 + Math.random() * 0.7);
        // Don't place in nucleus
        const dx = rx - width * 0.5;
        const dy = ry - height * 0.45;
        if(dx * dx + dy * dy > (width * 0.15) * (width * 0.15)) {
            ctx.beginPath();
            ctx.arc(rx, ry, 1, 0, Math.PI * 2);
            ctx.fill();
        }
    }
    
    ctx.restore();
}

static drawProkaryoticVsEukaryotic(ctx, x, y, width, height) {
    ctx.save();
    ctx.translate(x, y);
    
    const cellWidth = width * 0.4;
    const prokaryoteX = width * 0.05;
    const eukaryoteX = width * 0.55;
    
    // Prokaryotic Cell (left)
    ctx.fillStyle = '#E3F2FD';
    ctx.strokeStyle = '#1976D2';
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.ellipse(prokaryoteX + cellWidth * 0.5, height * 0.5, cellWidth * 0.35, cellWidth * 0.25, 0, 0, Math.PI * 2);
    ctx.fill();
    ctx.stroke();
    
    // Nucleoid (no membrane)
    ctx.fillStyle = '#FF6F00';
    ctx.beginPath();
    for(let i = 0; i < 15; i++) {
        const angle = (i / 15) * Math.PI * 2;
        const r = cellWidth * (0.08 + Math.random() * 0.03);
        const px = prokaryoteX + cellWidth * 0.5 + Math.cos(angle) * r;
        const py = height * 0.5 + Math.sin(angle) * r * 0.7;
        if(i === 0) ctx.moveTo(px, py);
        else ctx.lineTo(px, py);
    }
    ctx.closePath();
    ctx.fill();
    
    // Ribosomes (small dots)
    ctx.fillStyle = '#1565C0';
    for(let i = 0; i < 20; i++) {
        const rx = prokaryoteX + cellWidth * (0.2 + Math.random() * 0.6);
        const ry = height * (0.35 + Math.random() * 0.3);
        ctx.beginPath();
        ctx.arc(rx, ry, 1.5, 0, Math.PI * 2);
        ctx.fill();
    }
    
    // Cell wall
    ctx.strokeStyle = '#4A148C';
    ctx.lineWidth = 4;
    ctx.beginPath();
    ctx.ellipse(prokaryoteX + cellWidth * 0.5, height * 0.5, cellWidth * 0.37, cellWidth * 0.27, 0, 0, Math.PI * 2);
    ctx.stroke();
    
    // Flagellum
    ctx.strokeStyle = '#424242';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(prokaryoteX + cellWidth * 0.85, height * 0.5);
    for(let i = 0; i < 8; i++) {
        const fx = prokaryoteX + cellWidth * (0.85 + i * 0.08);
        const fy = height * (0.5 + Math.sin(i * 0.8) * 0.04 * height);
        ctx.lineTo(fx, fy);
    }
    ctx.stroke();
    
    // Label
    ctx.fillStyle = '#1976D2';
    ctx.font = 'bold 16px Arial';
    ctx.textAlign = 'center';
    ctx.fillText('Prokaryotic Cell', prokaryoteX + cellWidth * 0.5, height * 0.15);
    ctx.font = '12px Arial';
    ctx.fillStyle = '#555';
    ctx.fillText('(No nucleus)', prokaryoteX + cellWidth * 0.5, height * 0.18 + 15);
    ctx.fillText('Simple, small', prokaryoteX + cellWidth * 0.5, height * 0.18 + 30);
    
    // Eukaryotic Cell (right)
    ctx.fillStyle = '#FFF3E0';
    ctx.strokeStyle = '#E65100';
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.ellipse(eukaryoteX + cellWidth * 0.5, height * 0.5, cellWidth * 0.45, cellWidth * 0.45, 0, 0, Math.PI * 2);
    ctx.fill();
    ctx.stroke();
    
    // Nucleus with membrane
    ctx.fillStyle = '#E1BEE7';
    ctx.strokeStyle = '#7B1FA2';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.arc(eukaryoteX + cellWidth * 0.5, height * 0.5, cellWidth * 0.15, 0, Math.PI * 2);
    ctx.fill();
    ctx.stroke();
    
    // Nucleolus
    ctx.fillStyle = '#4A148C';
    ctx.beginPath();
    ctx.arc(eukaryoteX + cellWidth * 0.5, height * 0.5, cellWidth * 0.05, 0, Math.PI * 2);
    ctx.fill();
    
    // Mitochondria
    ctx.fillStyle = '#FFCCBC';
    ctx.strokeStyle = '#D84315';
    ctx.lineWidth = 1.5;
    [[0.3, 0.35], [0.7, 0.4], [0.35, 0.7], [0.65, 0.65]].forEach(([px, py]) => {
        ctx.beginPath();
        ctx.ellipse(eukaryoteX + cellWidth * px, height * py, cellWidth * 0.06, cellWidth * 0.035, Math.PI / 6, 0, Math.PI * 2);
        ctx.fill();
        ctx.stroke();
    });
    
    // Endoplasmic Reticulum
    ctx.strokeStyle = '#8D6E63';
    ctx.lineWidth = 2;
    for(let i = 0; i < 3; i++) {
        ctx.beginPath();
        ctx.moveTo(eukaryoteX + cellWidth * 0.6, height * (0.52 + i * 0.08));
        ctx.bezierCurveTo(
            eukaryoteX + cellWidth * 0.7, height * (0.52 + i * 0.08),
            eukaryoteX + cellWidth * 0.75, height * (0.54 + i * 0.08),
            eukaryoteX + cellWidth * 0.8, height * (0.52 + i * 0.08)
        );
        ctx.stroke();
    }
    
    // Golgi
    ctx.strokeStyle = '#FF9800';
    ctx.lineWidth = 2;
    for(let i = 0; i < 4; i++) {
        ctx.beginPath();
        ctx.arc(eukaryoteX + cellWidth * 0.7, height * 0.3, cellWidth * (0.04 + i * 0.012), Math.PI * 0.2, Math.PI * 1.3);
        ctx.stroke();
    }
    
    // Lysosomes
    ctx.fillStyle = '#CE93D8';
    ctx.strokeStyle = '#8E24AA';
    ctx.lineWidth = 1;
    [[0.25, 0.65], [0.75, 0.75]].forEach(([px, py]) => {
        ctx.beginPath();
        ctx.arc(eukaryoteX + cellWidth * px, height * py, cellWidth * 0.03, 0, Math.PI * 2);
        ctx.fill();
        ctx.stroke();
    });
    
    // Label
    ctx.fillStyle = '#E65100';
    ctx.font = 'bold 16px Arial';
    ctx.textAlign = 'center';
    ctx.fillText('Eukaryotic Cell', eukaryoteX + cellWidth * 0.5, height * 0.15);
    ctx.font = '12px Arial';
    ctx.fillStyle = '#555';
    ctx.fillText('(Has nucleus)', eukaryoteX + cellWidth * 0.5, height * 0.18 + 15);
    ctx.fillText('Complex, large', eukaryoteX + cellWidth * 0.5, height * 0.18 + 30);
    
    ctx.restore();
}

static drawCellMembrane(ctx, x, y, width, height) {
    ctx.save();
    ctx.translate(x, y);
    
    // Extracellular space
    ctx.fillStyle = '#E3F2FD';
    ctx.fillRect(0, 0, width, height * 0.25);
    
    // Intracellular space
    ctx.fillStyle = '#FFF3E0';
    ctx.fillRect(0, height * 0.75, width, height * 0.25);
    
    // Phospholipid bilayer
    const lipidCount = 15;
    const lipidSpacing = width / lipidCount;
    
    // Outer layer (heads up)
    for(let i = 0; i < lipidCount; i++) {
        const lx = i * lipidSpacing + lipidSpacing / 2;
        
        // Hydrophilic head (phosphate)
        ctx.fillStyle = '#1976D2';
        ctx.beginPath();
        ctx.arc(lx, height * 0.35, 6, 0, Math.PI * 2);
        ctx.fill();
        
        // Hydrophobic tail (fatty acids)
        ctx.strokeStyle = '#FFA726';
        ctx.lineWidth = 3;
        ctx.beginPath();
        ctx.moveTo(lx - 3, height * 0.35);
        ctx.lineTo(lx - 3, height * 0.5);
        ctx.stroke();
        ctx.beginPath();
        ctx.moveTo(lx + 3, height * 0.35);
        ctx.lineTo(lx + 3, height * 0.5);
        ctx.stroke();
    }
    
    // Inner layer (heads down)
    for(let i = 0; i < lipidCount; i++) {
        const lx = i * lipidSpacing + lipidSpacing / 2;
        
        // Hydrophilic head
        ctx.fillStyle = '#1976D2';
        ctx.beginPath();
        ctx.arc(lx, height * 0.65, 6, 0, Math.PI * 2);
        ctx.fill();
        
        // Hydrophobic tail
        ctx.strokeStyle = '#FFA726';
        ctx.lineWidth = 3;
        ctx.beginPath();
        ctx.moveTo(lx - 3, height * 0.65);
        ctx.lineTo(lx - 3, height * 0.5);
        ctx.stroke();
        ctx.beginPath();
        ctx.moveTo(lx + 3, height * 0.65);
        ctx.lineTo(lx + 3, height * 0.5);
        ctx.stroke();
    }
    
    // Integral proteins (transmembrane)
    const proteinPositions = [0.2, 0.5, 0.8];
    proteinPositions.forEach(px => {
        ctx.fillStyle = '#7B1FA2';
        ctx.strokeStyle = '#4A148C';
        ctx.lineWidth = 2;
        
        // Protein spanning membrane
        ctx.beginPath();
        ctx.roundRect(width * px - 15, height * 0.3, 30, height * 0.4, 5);
        ctx.fill();
        ctx.stroke();
        
        // Alpha helix texture
        for(let i = 0; i < 5; i++) {
            ctx.strokeStyle = 'rgba(255, 255, 255, 0.3)';
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(width * px - 12, height * (0.32 + i * 0.08));
            ctx.lineTo(width * px + 12, height * (0.32 + i * 0.08));
            ctx.stroke();
        }
    });
    
    // Peripheral proteins
    ctx.fillStyle = '#E91E63';
    ctx.strokeStyle = '#C2185B';
    ctx.lineWidth = 2;
    [[0.35, 0.28], [0.65, 0.72]].forEach(([px, py]) => {
        ctx.beginPath();
        ctx.ellipse(width * px, height * py, 20, 15, 0, 0, Math.PI * 2);
        ctx.fill();
        ctx.stroke();
    });
    
    // Cholesterol molecules
    ctx.fillStyle = '#FFB74D';
    ctx.strokeStyle = '#F57C00';
    ctx.lineWidth = 1;
    [[0.15, 0.5], [0.4, 0.48], [0.6, 0.52], [0.85, 0.5]].forEach(([px, py]) => {
        ctx.beginPath();
        ctx.ellipse(width * px, height * py, 8, 20, Math.PI / 2, 0, Math.PI * 2);
        ctx.fill();
        ctx.stroke();
    });
    
    // Carbohydrate chains (glycoproteins)
    ctx.strokeStyle = '#4CAF50';
    ctx.lineWidth = 2;
    [[0.5, 0.25], [0.8, 0.22]].forEach(([px, py]) => {
        ctx.beginPath();
        ctx.moveTo(width * px, height * py);
        for(let i = 0; i < 5; i++) {
            const cy = height * (py - i * 0.03);
            ctx.lineTo(width * (px + (i % 2 === 0 ? 0.02 : -0.02)), cy);
        }
        ctx.stroke();
        
        // Sugar molecules
        ctx.fillStyle = '#66BB6A';
        for(let i = 0; i < 5; i++) {
            const cy = height * (py - i * 0.03);
            const cx = width * (px + (i % 2 === 0 ? 0.02 : -0.02));
            ctx.beginPath();
            ctx.arc(cx, cy, 4, 0, Math.PI * 2);
            ctx.fill();
        }
    });
    
    // Labels
    ctx.fillStyle = '#1976D2';
    ctx.font = '12px Arial';
    ctx.textAlign = 'left';
    ctx.fillText('Extracellular Space', 10, 20);
    
    ctx.fillText('Intracellular Space', 10, height - 10);
    
    ctx.restore();
}

static drawOsmosisDiffusion(ctx, x, y, width, height) {
    ctx.save();
    ctx.translate(x, y);
    
    const halfWidth = width / 2;
    
    // === DIFFUSION (Left side) ===
    ctx.fillStyle = '#2C3E50';
    ctx.font = 'bold 16px Arial';
    ctx.textAlign = 'center';
    ctx.fillText('DIFFUSION', halfWidth * 0.5, 25);
    
    // Before state (top)
    ctx.strokeStyle = '#95A5A6';
    ctx.lineWidth = 2;
    ctx.strokeRect(halfWidth * 0.1, height * 0.1, halfWidth * 0.8, height * 0.35);
    
    // High concentration (left)
    ctx.fillStyle = '#3498DB';
    for(let i = 0; i < 25; i++) {
        const px = halfWidth * (0.1 + Math.random() * 0.35);
        const py = height * (0.1 + Math.random() * 0.35);
        ctx.beginPath();
        ctx.arc(px, py, 4, 0, Math.PI * 2);
        ctx.fill();
    }
    
    // Low concentration (right)
    for(let i = 0; i < 5; i++) {
        const px = halfWidth * (0.5 + Math.random() * 0.35);
        const py = height * (0.1 + Math.random() * 0.35);
        ctx.beginPath();
        ctx.arc(px, py, 4, 0, Math.PI * 2);
        ctx.fill();
    }
    
    // Arrow down
    this.drawArrowStatic(ctx, halfWidth * 0.5, height * 0.48, halfWidth * 0.5, height * 0.52, '#E74C3C', 3);
    
    // After state (bottom) - equilibrium
    ctx.strokeRect(halfWidth * 0.1, height * 0.55, halfWidth * 0.8, height * 0.35);
    
    // Equal distribution
    for(let i = 0; i < 30; i++) {
        const px = halfWidth * (0.1 + Math.random() * 0.8);
        const py = height * (0.55 + Math.random() * 0.35);
        ctx.beginPath();
        ctx.arc(px, py, 4, 0, Math.PI * 2);
        ctx.fill();
    }
    
    ctx.fillStyle = '#7F8C8D';
    ctx.font = '11px Arial';
    ctx.fillText('Equilibrium', halfWidth * 0.5, height * 0.93);
    
    // === OSMOSIS (Right side) ===
    ctx.fillStyle = '#2C3E50';
    ctx.font = 'bold 16px Arial';
    ctx.fillText('OSMOSIS', halfWidth + halfWidth * 0.5, 25);
    
    // Container with semipermeable membrane
    const containerLeft = halfWidth + halfWidth * 0.1;
    const containerRight = halfWidth + halfWidth * 0.9;
    const containerTop = height * 0.1;
    const containerBottom = height * 0.45;
    
    // Left chamber (hypotonic - more water)
    ctx.strokeStyle = '#95A5A6';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(containerLeft, containerTop);
    ctx.lineTo(containerLeft, containerBottom);
    ctx.lineTo(halfWidth + halfWidth * 0.48, containerBottom);
    ctx.lineTo(halfWidth + halfWidth * 0.48, containerTop);
    ctx.closePath();
    ctx.stroke();
    
    // Right chamber (hypertonic - more solute)
    ctx.beginPath();
    ctx.moveTo(halfWidth + halfWidth * 0.52, containerTop);
    ctx.lineTo(halfWidth + halfWidth * 0.52, containerBottom);
    ctx.lineTo(containerRight, containerBottom);
    ctx.lineTo(containerRight, containerTop);
    ctx.closePath();
    ctx.stroke();
    
    // Semipermeable membrane
    ctx.strokeStyle = '#E67E22';
    ctx.lineWidth = 3;
    ctx.setLineDash([5, 5]);
    ctx.beginPath();
    ctx.moveTo(halfWidth + halfWidth * 0.5, containerTop);
    ctx.lineTo(halfWidth + halfWidth * 0.5, containerBottom);
    ctx.stroke();
    ctx.setLineDash([]);
    
    // Water molecules (small, blue)
    ctx.fillStyle = '#3498DB';
    for(let i = 0; i < 20; i++) {
        const px = containerLeft + Math.random() * (halfWidth * 0.38);
        const py = containerTop + Math.random() * (containerBottom - containerTop);
        ctx.beginPath();
        ctx.arc(px, py, 2, 0, Math.PI * 2);
        ctx.fill();
    }
    
    for(let i = 0; i < 15; i++) {
        const px = halfWidth + halfWidth * 0.52 + Math.random() * (halfWidth * 0.38);
        const py = containerTop + Math.random() * (containerBottom - containerTop);
        ctx.beginPath();
        ctx.arc(px, py, 2, 0, Math.PI * 2);
        ctx.fill();
    }
    
    // Solute molecules (large, red - can't pass membrane)
    ctx.fillStyle = '#E74C3C';
    for(let i = 0; i < 3; i++) {
        const px = containerLeft + Math.random() * (halfWidth * 0.38);
        const py = containerTop + Math.random() * (containerBottom - containerTop);
        ctx.beginPath();
        ctx.arc(px, py, 6, 0, Math.PI * 2);
        ctx.fill();
    }
    
    for(let i = 0; i < 10; i++) {
        const px = halfWidth + halfWidth * 0.52 + Math.random() * (halfWidth * 0.38);
        const py = containerTop + Math.random() * (containerBottom - containerTop);
        ctx.beginPath();
        ctx.arc(px, py, 6, 0, Math.PI * 2);
        ctx.fill();
    }
    
    // Water flow arrow
    ctx.strokeStyle = '#3498DB';
    ctx.fillStyle = '#3498DB';
    ctx.lineWidth = 3;
    this.drawArrowStatic(
        ctx,
        halfWidth + halfWidth * 0.45,
        height * 0.27,
        halfWidth + halfWidth * 0.55,
        height * 0.27,
        '#3498DB',
        3
    );
    
    ctx.fillStyle = '#7F8C8D';
    ctx.font = '11px Arial';
    ctx.fillText('Water moves to', halfWidth + halfWidth * 0.5, height * 0.5);
    ctx.fillText('higher solute concentration', halfWidth + halfWidth * 0.5, height * 0.52 + 12);
    
    ctx.restore();
}

static drawActivePassiveTransport(ctx, x, y, width, height) {
    ctx.save();
    ctx.translate(x, y);
    
    const halfWidth = width / 2;
    
    // === PASSIVE TRANSPORT (Left) ===
    ctx.fillStyle = '#27AE60';
    ctx.font = 'bold 18px Arial';
    ctx.textAlign = 'center';
    ctx.fillText('PASSIVE TRANSPORT', halfWidth * 0.5, 30);
    ctx.font = '12px Arial';
    ctx.fillStyle = '#7F8C8D';
    ctx.fillText('(No Energy Required)', halfWidth * 0.5, 50);
    
    // Membrane
    ctx.strokeStyle = '#34495E';
    ctx.lineWidth = 4;
    ctx.beginPath();
    ctx.moveTo(halfWidth * 0.1, height * 0.15);
    ctx.lineTo(halfWidth * 0.1, height * 0.85);
    ctx.stroke();
    
    // Phospholipid bilayer representation
    for(let i = 0; i < 10; i++) {
        ctx.fillStyle = '#3498DB';
        ctx.beginPath();
        ctx.arc(halfWidth * 0.1, height * (0.15 + i * 0.07), 4, 0, Math.PI * 2);
        ctx.fill();
    }
    
    // Channel protein
    ctx.fillStyle = '#9B59B6';
    ctx.strokeStyle = '#8E44AD';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.roundRect(halfWidth * 0.08, height * 0.4, halfWidth * 0.04, height * 0.2, 3);
    ctx.fill();
    ctx.stroke();
    
    // Channel opening
    ctx.fillStyle = '#ECF0F1';
    ctx.fillRect(halfWidth * 0.095, height * 0.45, halfWidth * 0.01, height * 0.1);
    
    // High concentration (left)
    ctx.fillStyle = '#E74C3C';
    for(let i = 0; i < 15; i++) {
        const px = halfWidth * (0.02 + Math.random() * 0.05);
        const py = height * (0.35 + Math.random() * 0.3);
        ctx.beginPath();
        ctx.arc(px, py, 5, 0, Math.PI * 2);
        ctx.fill();
    }
    
    // Low concentration (right)
    for(let i = 0; i < 5; i++) {
        const px = halfWidth * (0.13 + Math.random() * 0.3);
        const py = height * (0.35 + Math.random() * 0.3);
        ctx.beginPath();
        ctx.arc(px, py, 5, 0, Math.PI * 2);
        ctx.fill();
    }
    
    // Arrows showing movement down concentration gradient
    ctx.strokeStyle = '#27AE60';
    ctx.fillStyle = '#27AE60';
    ctx.lineWidth = 3;
    this.drawArrowStatic(ctx, halfWidth * 0.07, height * 0.5, halfWidth * 0.12, height * 0.5, '#27AE60', 3);
    
    // Label
    ctx.fillStyle = '#2C3E50';
    ctx.font = 'bold 14px Arial';
    ctx.fillText('Simple/Facilitated', halfWidth * 0.25, height * 0.25);
    ctx.font = '11px Arial';
    ctx.fillStyle = '#7F8C8D';
    ctx.fillText('Diffusion', halfWidth * 0.25, height * 0.27 + 15);
    ctx.fillText('High → Low', halfWidth * 0.25, height * 0.27 + 30);
    ctx.fillText('Concentration', halfWidth * 0.25, height * 0.27 + 45);
    
    // === ACTIVE TRANSPORT (Right) ===
    ctx.fillStyle = '#E74C3C';
    ctx.font = 'bold 18px Arial';
    ctx.textAlign = 'center';
    ctx.fillText('ACTIVE TRANSPORT', halfWidth + halfWidth * 0.5, 30);
    ctx.font = '12px Arial';
    ctx.fillStyle = '#7F8C8D';
    ctx.fillText('(Requires ATP Energy)', halfWidth + halfWidth * 0.5, 50);
    
    // Membrane
    ctx.strokeStyle = '#34495E';
    ctx.lineWidth = 4;
    ctx.beginPath();
    ctx.moveTo(halfWidth + halfWidth * 0.1, height * 0.15);
    ctx.lineTo(halfWidth + halfWidth * 0.1, height * 0.85);
    ctx.stroke();
    
    // Phospholipid bilayer
    for(let i = 0; i < 10; i++) {
        ctx.fillStyle = '#3498DB';
        ctx.beginPath();
        ctx.arc(halfWidth + halfWidth * 0.1, height * (0.15 + i * 0.07), 4, 0, Math.PI * 2);
        ctx.fill();
    }
    
    // Pump protein (carrier protein)
    ctx.fillStyle = '#9B59B6';
    ctx.strokeStyle = '#8E44AD';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.roundRect(halfWidth + halfWidth * 0.08, height * 0.4, halfWidth * 0.04, height * 0.2, 3);
    ctx.fill();
    ctx.stroke();
    
    // Binding site
    ctx.fillStyle = '#F39C12';
    ctx.beginPath();
    ctx.arc(halfWidth + halfWidth * 0.09, height * 0.5, 6, 0, Math.PI * 2);
    ctx.fill();
    
    // Low concentration (left)
    ctx.fillStyle = '#3498DB';
    for(let i = 0; i < 5; i++) {
        const px = halfWidth + halfWidth * (0.02 + Math.random() * 0.05);
        const py = height * (0.35 + Math.random() * 0.3);
        ctx.beginPath();
        ctx.arc(px, py, 5, 0, Math.PI * 2);
        ctx.fill();
    }
    
    // High concentration (right)
    for(let i = 0; i < 15; i++) {
        const px = halfWidth + halfWidth * (0.13 + Math.random() * 0.3);
        const py = height * (0.35 + Math.random() * 0.3);
        ctx.beginPath();
        ctx.arc(px, py, 5, 0, Math.PI * 2);
        ctx.fill();
    }
    
    // Arrow showing movement against gradient
    ctx.strokeStyle = '#E74C3C';
    ctx.fillStyle = '#E74C3C';
    ctx.lineWidth = 3;
    this.drawArrowStatic(
        ctx,
        halfWidth + halfWidth * 0.07,
        height * 0.5,
        halfWidth + halfWidth * 0.12,
        height * 0.5,
        '#E74C3C',
        3
    );
    
    // ATP molecule
    ctx.fillStyle = '#F39C12';
    ctx.strokeStyle = '#E67E22';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.arc(halfWidth + halfWidth * 0.06, height * 0.7, 15, 0, Math.PI * 2);
    ctx.fill();
    ctx.stroke();
    
    ctx.fillStyle = '#FFF';
    ctx.font = 'bold 11px Arial';
    ctx.textAlign = 'center';
    ctx.fillText('ATP', halfWidth + halfWidth * 0.06, height * 0.7 + 4);
    
    // ADP + Pi (used energy)
    ctx.fillStyle = '#95A5A6';
    ctx.strokeStyle = '#7F8C8D';
    ctx.beginPath();
    ctx.arc(halfWidth + halfWidth * 0.06, height * 0.8, 12, 0, Math.PI * 2);
    ctx.fill();
    ctx.stroke();
    
    ctx.fillStyle = '#FFF';
    ctx.font = '9px Arial';
    ctx.fillText('ADP', halfWidth + halfWidth * 0.06, height * 0.8 + 3);
    
    // Energy arrow
    ctx.strokeStyle = '#F39C12';
    ctx.lineWidth = 2;
    this.drawArrowStatic(
        ctx,
        halfWidth + halfWidth * 0.06,
        height * 0.72,
        halfWidth + halfWidth * 0.09,
        height * 0.58,
        '#F39C12',
        2
    );
    
    // Label
    ctx.fillStyle = '#2C3E50';
    ctx.font = 'bold 14px Arial';
    ctx.fillText('Sodium-Potassium', halfWidth + halfWidth * 0.75, height * 0.25);
    ctx.font = '11px Arial';
    ctx.fillStyle = '#7F8C8D';
    ctx.fillText('Pump', halfWidth + halfWidth * 0.75, height * 0.27 + 15);
    ctx.fillText('Low → High', halfWidth + halfWidth * 0.75, height * 0.27 + 30);
    ctx.fillText('Concentration', halfWidth + halfWidth * 0.75, height * 0.27 + 45);
    
    ctx.restore();
}

static drawOrganelle(ctx, x, y, width, height, organelleType) {
    ctx.save();
    ctx.translate(x, y);
    
    switch(organelleType) {
        case 'nucleus':
            // Nuclear envelope
            const gradient = ctx.createRadialGradient(width * 0.5, height * 0.5, 0, width * 0.5, height * 0.5, width * 0.4);
            gradient.addColorStop(0, '#E1BEE7');
            gradient.addColorStop(1, '#BA68C8');
            ctx.fillStyle = gradient;
            ctx.strokeStyle = '#7B1FA2';
            ctx.lineWidth = 3;
            ctx.beginPath();
            ctx.ellipse(width * 0.5, height * 0.5, width * 0.4, height * 0.4, 0, 0, Math.PI * 2);
            ctx.fill();
            ctx.stroke();
            
            // Nuclear pores
            ctx.fillStyle = '#4A148C';
            for(let i = 0; i < 12; i++) {
                const angle = (i / 12) * Math.PI * 2;
                const px = width * 0.5 + Math.cos(angle) * width * 0.38;
                const py = height * 0.5 + Math.sin(angle) * height * 0.38;
                ctx.beginPath();
                ctx.arc(px, py, 4, 0, Math.PI * 2);
                ctx.fill();
            }
            
            // Nucleolus
            ctx.fillStyle = '#4A148C';
            ctx.beginPath();
            ctx.arc(width * 0.5, height * 0.5, width * 0.12, 0, Math.PI * 2);
            ctx.fill();
            
            // Chromatin
            ctx.fillStyle = 'rgba(123, 31, 162, 0.4)';
            for(let i = 0; i < 15; i++) {
                const angle = Math.random() * Math.PI * 2;
                const r = Math.random() * width * 0.25;
                const cx = width * 0.5 + Math.cos(angle) * r;
                const cy = height * 0.5 + Math.sin(angle) * r;
                ctx.beginPath();
                ctx.arc(cx, cy, 3 + Math.random() * 3, 0, Math.PI * 2);
                ctx.fill();
            }
            break;
            
        case 'mitochondria':
            // Outer membrane
            ctx.fillStyle = '#FFCCBC';
            ctx.strokeStyle = '#D84315';
            ctx.lineWidth = 3;
            ctx.beginPath();
            ctx.ellipse(width * 0.5, height * 0.5, width * 0.4, height * 0.25, 0, 0, Math.PI * 2);
            ctx.fill();
            ctx.stroke();
            
            // Inner membrane (cristae)
            ctx.strokeStyle = '#BF360C';
            ctx.lineWidth = 2;
            for(let i = 0; i < 8; i++) {
                ctx.beginPath();
                const y = height * (0.32 + i * 0.048);
                ctx.moveTo(width * 0.15, y);
                ctx.quadraticCurveTo(width * 0.25, y + height * 0.02, width * 0.35, y);
                ctx.stroke();
            }
            
            // Matrix
            ctx.fillStyle = 'rgba(255, 152, 0, 0.3)';
            ctx.beginPath();
            ctx.ellipse(width * 0.5, height * 0.5, width * 0.35, height * 0.2, 0, 0, Math.PI * 2);
            ctx.fill();
            
            // ATP synthase particles
            ctx.fillStyle = '#F57C00';
            for(let i = 0; i < 10; i++) {
                const angle = Math.random() * Math.PI * 2;
                const r = Math.random() * width * 0.15 + width * 0.2;
                const px = width * 0.5 + Math.cos(angle) * r;
                const py = height * 0.5 + Math.sin(angle) * (r * 0.6);
                ctx.beginPath();
                ctx.arc(px, py, 2, 0, Math.PI * 2);
                ctx.fill();
            }
            break;
            
        case 'ribosome':
            // Small subunit
            ctx.fillStyle = '#78909C';
            ctx.strokeStyle = '#455A64';
            ctx.lineWidth = 2;
            ctx.beginPath();
            ctx.arc(width * 0.5, height * 0.4, width * 0.25, 0, Math.PI * 2);
            ctx.fill();
            ctx.stroke();
            
            // Large subunit
            ctx.fillStyle = '#546E7A';
            ctx.beginPath();
            ctx.arc(width * 0.5, height * 0.6, width * 0.35, 0, Math.PI * 2);
            ctx.fill();
            ctx.stroke();
            
            // Binding sites
            ctx.fillStyle = '#FFC107';
            ctx.beginPath();
            ctx.arc(width * 0.4, height * 0.55, width * 0.08, 0, Math.PI * 2);
            ctx.fill();
            
            ctx.fillStyle = '#FF9800';
            ctx.beginPath();
            ctx.arc(width * 0.6, height * 0.55, width * 0.08, 0, Math.PI * 2);
            ctx.fill();
            
            // mRNA strand
            ctx.strokeStyle = '#4CAF50';
            ctx.lineWidth = 4;
            ctx.beginPath();
            ctx.moveTo(width * 0.1, height * 0.5);
            ctx.lineTo(width * 0.9, height * 0.5);
            ctx.stroke();
            break;
            
        case 'endoplasmicReticulum':
            // Cisternae (flattened sacs)
            ctx.strokeStyle = '#8D6E63';
            ctx.lineWidth = 3;
            ctx.fillStyle = 'rgba(141, 110, 99, 0.1)';
            
            for(let i = 0; i < 5; i++) {
                ctx.beginPath();
                const y = height * (0.2 + i * 0.15);
                ctx.moveTo(width * 0.15, y);
                ctx.bezierCurveTo(
                    width * 0.3, y - height * 0.05,
                    width * 0.5, y + height * 0.05,
                    width * 0.7, y
                );
                ctx.bezierCurveTo(
                    width * 0.8, y,
                    width * 0.85, y + height * 0.03,
                    width * 0.85, y + height * 0.06
                );
                ctx.bezierCurveTo(
                    width * 0.85, y + height * 0.06,
                    width * 0.5, y + height * 0.11,
                    width * 0.15, y + height * 0.06
                );
                ctx.closePath();
                ctx.fill();
                ctx.stroke();
            }
            
            // Ribosomes on rough ER
            ctx.fillStyle = '#5D4037';
            for(let i = 0; i < 30; i++) {
                const rx = width * (0.2 + Math.random() * 0.6);
                const ry = height * (0.2 + Math.random() * 0.6);
                ctx.beginPath();
                ctx.arc(rx, ry, 2, 0, Math.PI * 2);
                ctx.fill();
            }
            break;
            
        case 'golgiApparatus':
            // Stacked cisternae
            ctx.fillStyle = '#FFE082';
            ctx.strokeStyle = '#FFA726';
            ctx.lineWidth = 2;
            
            for(let i = 0; i < 6; i++) {
                const curveAmount = (i - 2.5) * 0.05;
                ctx.beginPath();
                ctx.moveTo(width * 0.2, height * (0.3 + i * 0.08));
                ctx.quadraticCurveTo(
                    width * 0.5,
                    height * (0.3 + i * 0.08 + curveAmount),
                    width * 0.8,
                    height * (0.3 + i * 0.08)
                );
                ctx.quadraticCurveTo(
                    width * 0.5,
                    height * (0.35 + i * 0.08 + curveAmount),
                    width * 0.2,
                    height * (0.35 + i * 0.08)
                );
                ctx.closePath();
                ctx.fill();
                ctx.stroke();
            }
            
            // Vesicles budding off
            ctx.fillStyle = '#FF9800';
            ctx.strokeStyle = '#F57C00';
            [[0.15, 0.35], [0.85, 0.4], [0.15, 0.7], [0.85, 0.75]].forEach(([px, py]) => {
                ctx.beginPath();
                ctx.arc(width * px, height * py, width * 0.04, 0, Math.PI * 2);
                ctx.fill();
                ctx.stroke();
            });
            break;
            
        case 'lysosome':
            // Membrane
            ctx.fillStyle = '#CE93D8';
            ctx.strokeStyle = '#8E24AA';
            ctx.lineWidth = 3;
            ctx.beginPath();
            ctx.arc(width * 0.5, height * 0.5, width * 0.35, 0, Math.PI * 2);
            ctx.fill();
            ctx.stroke();
            
            // Digestive enzymes
            ctx.fillStyle = '#6A1B9A';
            for(let i = 0; i < 20; i++) {
                const angle = Math.random() * Math.PI * 2;
                const r = Math.random() * width * 0.25;
                const px = width * 0.5 + Math.cos(angle) * r;
                const py = height * 0.5 + Math.sin(angle) * r;
                
                // Y-shaped enzymes
                ctx.beginPath();
                ctx.moveTo(px, py);
                ctx.lineTo(px - 3, py - 5);
                ctx.moveTo(px, py);
                ctx.lineTo(px + 3, py - 5);
                ctx.moveTo(px, py);
                ctx.lineTo(px, py + 5);
                ctx.lineWidth = 2;
                ctx.stroke();
            }
            
            // Acidic pH indicator
            ctx.fillStyle = '#FFF';
            ctx.font = 'bold 16px Arial';
            ctx.textAlign = 'center';
            ctx.fillText('pH ~5', width * 0.5, height * 0.5 + 5);
            break;
            
        case 'peroxisome':
            // Membrane
            ctx.fillStyle = '#80CBC4';
            ctx.strokeStyle = '#00897B';
            ctx.lineWidth = 3;
            ctx.beginPath();
            ctx.arc(width * 0.5, height * 0.5, width * 0.35, 0, Math.PI * 2);
            ctx.fill();
            ctx.stroke();
            
            // Crystalline core
            ctx.fillStyle = '#004D40';
            ctx.strokeStyle = '#00251A';
            ctx.lineWidth = 2;
            ctx.beginPath();
            ctx.moveTo(width * 0.5, height * 0.35);
            ctx.lineTo(width * 0.6, height * 0.5);
            ctx.lineTo(width * 0.5, height * 0.65);
            ctx.lineTo(width * 0.4, height * 0.5);
            ctx.closePath();
            ctx.fill();
            ctx.stroke();
            
            // Catalase enzymes
            ctx.fillStyle = '#26A69A';
            for(let i = 0; i < 15; i++) {
                const angle = Math.random() * Math.PI * 2;
                const r = Math.random() * width * 0.15 + width * 0.15;
                const px = width * 0.5 + Math.cos(angle) * r;
                const py = height * 0.5 + Math.sin(angle) * r;
                ctx.beginPath();
                ctx.arc(px, py, 2, 0, Math.PI * 2);
                ctx.fill();
            }
            
            // H2O2 → H2O + O2
            ctx.fillStyle = '#FFF';
            ctx.font = '11px Arial';
            ctx.textAlign = 'center';
            ctx.fillText('H₂O₂', width * 0.3, height * 0.85);
            ctx.fillText('→', width * 0.5, height * 0.85);
            ctx.fillText('H₂O + O₂', width * 0.72, height * 0.85);
            break;
    }
    
    ctx.restore();
}

static drawEnzymeAction(ctx, x, y, width, height, model) {
    ctx.save();
    ctx.translate(x, y);
    
    if(model === 'lockAndKey' || model === 'both') {
        const modelY = model === 'both' ? 0 : height * 0.1;
        const modelHeight = model === 'both' ? height * 0.45 : height * 0.8;
        
        // Title
        ctx.fillStyle = '#2C3E50';
        ctx.font = 'bold 16px Arial';
        ctx.textAlign = 'center';
        ctx.fillText('Lock-and-Key Model', width * 0.5, modelY + 25);
        
        // Stage 1: Enzyme + Substrate
        const stage1X = width * 0.15;
        const stageY = modelY + modelHeight * 0.3;
        
        // Enzyme
        ctx.fillStyle = '#3498DB';
        ctx.strokeStyle = '#2980B9';
        ctx.lineWidth = 3;
        ctx.beginPath();
        ctx.arc(stage1X, stageY, 40, 0, Math.PI * 2);
        ctx.fill();
        ctx.stroke();
        
        // Active site (concave)
        ctx.fillStyle = '#ECF0F1';
        ctx.beginPath();
        ctx.arc(stage1X + 35, stageY, 15, Math.PI * 0.5, Math.PI * 1.5);
        ctx.fill();
        
        // Substrate (complementary shape)
        ctx.fillStyle = '#E74C3C';
        ctx.strokeStyle = '#C0392B';
        ctx.beginPath();
        ctx.arc(stage1X + 80, stageY, 15, 0, Math.PI * 2);
        ctx.fill();
        ctx.stroke();
        
        // Arrow
        this.drawArrowStatic(ctx, width * 0.3, stageY, width * 0.38, stageY, '#7F8C8D', 2);
        
        // Stage 2: Enzyme-Substrate Complex
        const stage2X = width * 0.5;
        
        // Enzyme
        ctx.fillStyle = '#3498DB';
        ctx.strokeStyle = '#2980B9';
        ctx.lineWidth = 3;
        ctx.beginPath();
        ctx.arc(stage2X, stageY, 40, 0, Math.PI * 2);
        ctx.fill();
        ctx.stroke();
        
        // Active site with substrate bound
        ctx.fillStyle = '#E74C3C';
        ctx.strokeStyle = '#C0392B';
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.arc(stage2X + 35, stageY, 15, Math.PI * 0.5, Math.PI * 1.5);
        ctx.fill();
        ctx.stroke();
        
        // Arrow
        this.drawArrowStatic(ctx, width * 0.62, stageY, width * 0.7, stageY, '#7F8C8D', 2);
        
        // Stage 3: Products released
        const stage3X = width * 0.85;
        
        // Enzyme (unchanged)
        ctx.fillStyle = '#3498DB';
        ctx.strokeStyle = '#2980B9';
        ctx.lineWidth = 3;
        ctx.beginPath();
        ctx.arc(stage3X - 40, stageY, 40, 0, Math.PI * 2);
        ctx.fill();
        ctx.stroke();
        
        // Active site (empty again)
        ctx.fillStyle = '#ECF0F1';
        ctx.beginPath();
        ctx.arc(stage3X - 5, stageY, 15, Math.PI * 0.5, Math.PI * 1.5);
        ctx.fill();
        
        // Products (changed substrate)
        ctx.fillStyle = '#27AE60';
        ctx.strokeStyle = '#229954';
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.arc(stage3X + 20, stageY - 10, 10, 0, Math.PI * 2);
        ctx.fill();
        ctx.stroke();
        
        ctx.beginPath();
        ctx.arc(stage3X + 20, stageY + 10, 10, 0, Math.PI * 2);
        ctx.fill();
        ctx.stroke();
        
        // Labels
        ctx.fillStyle = '#7F8C8D';
        ctx.font = '12px Arial';
        ctx.textAlign = 'center';
        ctx.fillText('Enzyme +', stage1X - 20, stageY + 60);
        ctx.fillText('Substrate', stage1X + 80, stageY + 20);
        ctx.fillText('E-S Complex', stage2X, stageY + 60);
        ctx.fillText('Enzyme +', stage3X - 40, stageY + 60);
        ctx.fillText('Products', stage3X + 20, stageY + 30);
        
        // Key feature note
        ctx.fillStyle = '#2C3E50';
        ctx.font = 'italic 11px Arial';
        ctx.fillText('Rigid, complementary fit', width * 0.5, modelY + modelHeight - 10);
    }
    
    if(model === 'inducedFit' || model === 'both') {
        const modelY = model === 'both' ? height * 0.55 : height * 0.1;
        const modelHeight = model === 'both' ? height * 0.45 : height * 0.8;
        
        // Title
        ctx.fillStyle = '#2C3E50';
        ctx.font = 'bold 16px Arial';
        ctx.textAlign = 'center';
        ctx.fillText('Induced Fit Model', width * 0.5, modelY + 25);
        
        // Stage 1: Enzyme + Substrate
        const stage1X = width * 0.15;
        const stageY = modelY + modelHeight * 0.3;
        
        // Enzyme (flexible active site)
        ctx.fillStyle = '#9B59B6';
        ctx.strokeStyle = '#8E44AD';
        ctx.lineWidth = 3;
        ctx.beginPath();
        ctx.arc(stage1X, stageY, 40, 0, Math.PI * 2);
        ctx.fill();
        ctx.stroke();
        
        // Active site (initially not perfectly complementary)
        ctx.fillStyle = '#ECF0F1';
        ctx.beginPath();
        ctx.moveTo(stage1X + 30, stageY - 15);
        ctx.quadraticCurveTo(stage1X + 40, stageY, stage1X + 30, stageY + 15);
        ctx.lineTo(stage1X + 30, stageY - 15);
        ctx.fill();
        
        // Substrate (doesn't quite fit)
        ctx.fillStyle = '#E67E22';
        ctx.strokeStyle = '#D35400';
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(stage1X + 70, stageY - 12);
        ctx.lineTo(stage1X + 85, stageY - 12);
        ctx.lineTo(stage1X + 85, stageY + 12);
        ctx.lineTo(stage1X + 70, stageY + 12);
        ctx.closePath();
        ctx.fill();
        ctx.stroke();
        
        // Arrow
        this.drawArrowStatic(ctx, width * 0.3, stageY, width * 0.38, stageY, '#7F8C8D', 2);
        
        // Stage 2: Enzyme changes shape
        const stage2X = width * 0.5;
        
        // Enzyme (conformational change)
        ctx.fillStyle = '#9B59B6';
        ctx.strokeStyle = '#8E44AD';
        ctx.lineWidth = 3;
        ctx.beginPath();
        ctx.arc(stage2X, stageY, 40, 0, Math.PI * 2);
        ctx.fill();
        ctx.stroke();
        
        // Active site morphs to fit substrate
        ctx.fillStyle = '#E67E22';
        ctx.strokeStyle = '#D35400';
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(stage2X + 30, stageY - 12);
        ctx.lineTo(stage2X + 40, stageY - 12);
        ctx.lineTo(stage2X + 40, stageY + 12);
        ctx.lineTo(stage2X + 30, stageY + 12);
        ctx.closePath();
        ctx.fill();
        ctx.stroke();
        
        // Conformational change arrows
        ctx.strokeStyle = '#F39C12';
        ctx.lineWidth = 2;
        ctx.setLineDash([3, 3]);
        ctx.beginPath();
        ctx.moveTo(stage2X + 20, stageY - 25);
        ctx.lineTo(stage2X + 30, stageY - 15);
        ctx.stroke();
        ctx.beginPath();
        ctx.moveTo(stage2X + 20, stageY + 25);
        ctx.lineTo(stage2X + 30, stageY + 15);
        ctx.stroke();
        ctx.setLineDash([]);
        
        // Arrow
        this.drawArrowStatic(ctx, width * 0.62, stageY, width * 0.7, stageY, '#7F8C8D', 2);
        
        // Stage 3: Products released, enzyme returns to original shape
        const stage3X = width * 0.85;
        
        // Enzyme (back to original shape)
        ctx.fillStyle = '#9B59B6';
        ctx.strokeStyle = '#8E44AD';
        ctx.lineWidth = 3;
        ctx.beginPath();
        ctx.arc(stage3X - 40, stageY, 40, 0, Math.PI * 2);
        ctx.fill();
        ctx.stroke();
        
        // Active site (original shape)
        ctx.fillStyle = '#ECF0F1';
        ctx.beginPath();
        ctx.moveTo(stage3X - 10, stageY - 15);
        ctx.quadraticCurveTo(stage3X, stageY, stage3X - 10, stageY + 15);
        ctx.lineTo(stage3X - 10, stageY - 15);
        ctx.fill();
        
        // Products
        ctx.fillStyle = '#16A085';
        ctx.strokeStyle = '#138D75';
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.arc(stage3X + 20, stageY - 10, 10, 0, Math.PI * 2);
        ctx.fill();
        ctx.stroke();
        
        ctx.beginPath();
        ctx.arc(stage3X + 20, stageY + 10, 10, 0, Math.PI * 2);
        ctx.fill();
        ctx.stroke();
        
        // Labels
        ctx.fillStyle = '#7F8C8D';
        ctx.font = '12px Arial';
        ctx.textAlign = 'center';
        ctx.fillText('Enzyme +', stage1X - 20, stageY + 60);
        ctx.fillText('Substrate', stage1X + 77, stageY + 20);
        ctx.fillText('Enzyme', stage2X, stageY + 50);
        ctx.fillText('changes shape', stage2X, stageY + 65);
        ctx.fillText('Enzyme +', stage3X - 40, stageY + 60);
        ctx.fillText('Products', stage3X + 20, stageY + 30);
        
        // Key feature note
        ctx.fillStyle = '#2C3E50';
        ctx.font = 'italic 11px Arial';
        ctx.fillText('Flexible, induced conformational change', width * 0.5, modelY + modelHeight - 10);
    }
    
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


class AnatomicalDiagramRenderer {
    constructor(canvas = null) {
        this.defaultFont = 'Arial, sans-serif';
        this.defaultFontSize = 12;
        this.canvas = canvas;
        this.ctx = canvas ? canvas.getContext('2d') : null;
        this.currentFrame = 0;
    }

    renderDiagram(diagramKey, x, y, width, height, options = {}) {
        const diagram = AnatomicalDiagramsRegistry.getDiagram(diagramKey);
        if (!diagram) {
            throw new Error(`Anatomical diagram '${diagramKey}' not found`);
        }

        const mergedOptions = { ...diagram.defaultOptions, ...options };
        
        this.ctx.save();
        this.ctx.translate(x, y);

        // Clear background
        this.ctx.fillStyle = mergedOptions.backgroundColor;
        this.ctx.fillRect(0, 0, width, height);

        // Title
        this.drawTitle(mergedOptions.title, width / 2, 30);

        // Route to specific renderer based on diagram key
        const centerX = width / 2;
        const centerY = height / 2 + 30;

        try {
            switch (diagramKey) {
                // ===== CELL BIOLOGY =====
                case 'animalCell':
                    this.renderAnimalCellDiagram(centerX, centerY, Math.min(width, height) * 0.7, mergedOptions);
                    break;
                case 'plantCell':
                    this.renderPlantCellDiagram(centerX, centerY, Math.min(width, height) * 0.7, mergedOptions);
                    break;
                case 'prokaryoticVsEukaryotic':
                    this.renderProkaryoticVsEukaryoticDiagram(centerX, centerY, width * 0.85, height * 0.7, mergedOptions);
                    break;
                case 'cellMembrane':
                    this.renderCellMembraneDiagram(centerX, centerY, width * 0.85, height * 0.6, mergedOptions);
                    break;
                case 'osmosisDiffusion':
                    this.renderOsmosisDiffusionDiagram(centerX, centerY, width * 0.85, height * 0.6, mergedOptions);
                    break;
                case 'activePassiveTransport':
                    this.renderActivePassiveTransportDiagram(centerX, centerY, width * 0.85, height * 0.6, mergedOptions);
                    break;
                case 'mitosis':
                    this.renderMitosisDiagram(centerX, centerY, width * 0.85, height * 0.6, mergedOptions);
                    break;
                case 'meiosis':
                    this.renderMeiosisDiagram(centerX, centerY, width * 0.85, height * 0.6, mergedOptions);
                    break;
                case 'organelles':
                    this.renderOrganellesDiagram(centerX, centerY, width * 0.7, height * 0.6, mergedOptions);
                    break;
                case 'cellCycle':
                    this.renderCellCycleDiagram(centerX, centerY, Math.min(width, height) * 0.6, mergedOptions);
                    break;
                case 'enzymeAction':
                    this.renderEnzymeActionDiagram(centerX, centerY, width * 0.85, height * 0.6, mergedOptions);
                    break;

                // ===== GENETICS & MOLECULAR BIOLOGY =====
                case 'dnaStructure':
                    this.renderDNAStructureDiagram(centerX, centerY, width * 0.5, height * 0.7, mergedOptions);
                    break;
                case 'rnaStructure':
                    this.renderRNAStructureDiagram(centerX, centerY, width * 0.6, height * 0.7, mergedOptions);
                    break;
                case 'dnaReplication':
                    this.renderDNAReplicationDiagram(centerX, centerY, width * 0.5, height * 0.7, mergedOptions);
                    break;
                case 'transcription':
                    this.renderTranscriptionDiagram(centerX, centerY, width * 0.8, height * 0.6, mergedOptions);
                    break;
                case 'translation':
                    this.renderTranslationDiagram(centerX, centerY, width * 0.8, height * 0.6, mergedOptions);
                    break;
                case 'codonChart':
                    this.renderCodonChartDiagram(centerX, centerY, Math.min(width, height) * 0.6, mergedOptions);
                    break;
                case 'geneExpression':
                    this.renderGeneExpressionDiagram(centerX, centerY, width * 0.8, height * 0.7, mergedOptions);
                    break;
                case 'punnettSquare':
                    this.renderPunnettSquareDiagram(centerX, centerY, Math.min(width, height) * 0.5, mergedOptions);
                    break;
                case 'chromosomes':
                    this.renderChromosomesDiagram(centerX, centerY, width * 0.8, height * 0.6, mergedOptions);
                    break;
                case 'crossingOver':
                    this.renderCrossingOverDiagram(centerX, centerY, width * 0.8, height * 0.6, mergedOptions);
                    break;
                case 'mutations':
                    this.renderMutationsDiagram(centerX, centerY, width * 0.85, height * 0.6, mergedOptions);
                    break;
                case 'recombinantDNA':
                    this.renderRecombinantDNADiagram(centerX, centerY, width * 0.8, height * 0.7, mergedOptions);
                    break;
                case 'pcrCycle':
                    this.renderPCRCycleDiagram(centerX, centerY, width * 0.8, height * 0.7, mergedOptions);
                    break;

                // ===== EVOLUTION & NATURAL SELECTION =====
                case 'darwinsFinches':
                    this.renderDarwinsFinchesDiagram(centerX, centerY, width * 0.85, height * 0.6, mergedOptions);
                    break;
                case 'naturalSelection':
                    this.renderNaturalSelectionDiagram(centerX, centerY, width * 0.85, height * 0.7, mergedOptions);
                    break;
                case 'phylogeneticTree':
                    this.renderPhylogeneticTreeDiagram(centerX, centerY, width * 0.8, height * 0.7, mergedOptions);
                    break;
                case 'adaptiveRadiation':
                    this.renderAdaptiveRadiationDiagram(centerX, centerY, width * 0.8, height * 0.7, mergedOptions);
                    break;
                case 'fossilLayers':
                    this.renderFossilLayersDiagram(centerX, centerY, width * 0.6, height * 0.8, mergedOptions);
                    break;
                case 'hardyWeinberg':
                    this.renderHardyWeinbergDiagram(centerX, centerY, width * 0.8, height * 0.6, mergedOptions);
                    break;
                case 'speciation':
                    this.renderSpeciationDiagram(centerX, centerY, width * 0.85, height * 0.6, mergedOptions);
                    break;
                case 'comparativeAnatomy':
                    this.renderComparativeAnatomyDiagram(centerX, centerY, width * 0.85, height * 0.6, mergedOptions);
                    break;

                // ===== ECOLOGY =====
                case 'foodChain':
                    this.renderFoodChainDiagram(centerX, centerY, width * 0.5, height * 0.7, mergedOptions);
                    break;
                case 'foodWeb':
                    this.renderFoodWebDiagram(centerX, centerY, width * 0.85, height * 0.7, mergedOptions);
                    break;
                case 'energyPyramid':
                    this.renderEnergyPyramidDiagram(centerX, centerY, width * 0.6, height * 0.6, mergedOptions);
                    break;
                case 'carbonCycle':
                    this.renderCarbonCycleDiagram(centerX, centerY, width * 0.85, height * 0.7, mergedOptions);
                    break;
                case 'nitrogenCycle':
                    this.renderNitrogenCycleDiagram(centerX, centerY, width * 0.85, height * 0.7, mergedOptions);
                    break;
                case 'waterCycle':
                    this.renderWaterCycleDiagram(centerX, centerY, width * 0.85, height * 0.7, mergedOptions);
                    break;
                case 'populationGrowth':
                    this.renderPopulationGrowthDiagram(centerX, centerY, width * 0.8, height * 0.6, mergedOptions);
                    break;
                case 'ecosystem':
                    this.renderEcosystemDiagram(centerX, centerY, width * 0.85, height * 0.7, mergedOptions);
                    break;
                case 'biomes':
                    this.renderBiomesDiagram(centerX, centerY, width * 0.9, height * 0.6, mergedOptions);
                    break;
                case 'predatorPrey':
                    this.renderPredatorPreyDiagram(centerX, centerY, width * 0.8, height * 0.6, mergedOptions);
                    break;

                // ===== HUMAN ANATOMY & PHYSIOLOGY =====
                case 'skeletalSystem':
                    this.renderSkeletalSystemDiagram(centerX, centerY, width * 0.5, height * 0.85, mergedOptions);
                    break;
                case 'muscularSystem':
                    this.renderMuscularSystemDiagram(centerX, centerY, width * 0.5, height * 0.85, mergedOptions);
                    break;
                case 'digestiveSystem':
                    this.renderCompleteDigestiveSystemDiagram(centerX, centerY, width * 0.5, height * 0.8, mergedOptions);
                    break;
                case 'respiratorySystem':
                    this.renderRespiratorySystemDiagram(centerX, centerY, width * 0.5, height * 0.7, mergedOptions);
                    break;
                case 'circulatorySystem':
                    this.renderCirculatorySystemDiagram(centerX, centerY, width * 0.5, height * 0.7, mergedOptions);
                    break;
                case 'excretorySystem':
                    this.renderUrinarySystemDiagram(centerX, centerY, width * 0.5, height * 0.7, mergedOptions);
                    break;
                case 'nervousSystem':
                    this.renderCompleteNervousSystemDiagram(centerX, centerY, width * 0.5, height * 0.8, mergedOptions);
                    break;
                case 'neuronStructure':
                    this.renderNeuronDiagram(centerX, centerY, width * 0.5, height * 0.7, mergedOptions);
                    break;
                case 'synapse':
                    this.renderSynapseDiagram(centerX, centerY, width * 0.8, height * 0.6, mergedOptions);
                    break;
                case 'endocrineSystem':
                    this.renderEndocrineSystemDiagram(centerX, centerY, width * 0.5, height * 0.8, mergedOptions);
                    break;
                case 'reproductiveSystem':
                    this.renderReproductiveSystemDiagram(centerX, centerY, width * 0.85, height * 0.7, mergedOptions);
                    break;
                case 'immuneSystem':
                    this.renderImmuneSystemDiagram(centerX, centerY, width * 0.6, height * 0.8, mergedOptions);
                    break;
                case 'skinStructure':
                    this.renderSkinDiagram(centerX, centerY, width * 0.8, height * 0.6, mergedOptions);
                    break;
                case 'eyeAnatomy':
                    this.renderEyeDiagram(centerX, centerY, width * 0.8, height * 0.6, mergedOptions);
                    break;

                // ===== PLANTS (BOTANY) =====
                case 'leafCrossSection':
                    this.renderLeafCrossSectionDiagram(centerX, centerY, width * 0.8, height * 0.6, mergedOptions);
                    break;
                case 'photosynthesis':
                    this.renderPhotosynthesisDiagram(centerX, centerY, width * 0.7, height * 0.6, mergedOptions);
                    break;
                case 'stomata':
                    this.renderStomataDiagram(centerX, centerY, width * 0.8, height * 0.6, mergedOptions);
                    break;
                case 'xylemPhloem':
                    this.renderXylemPhloemDiagram(centerX, centerY, width * 0.8, height * 0.7, mergedOptions);
                    break;
                case 'flowerStructure':
                    this.renderFlowerStructureDiagram(centerX, centerY, Math.min(width, height) * 0.6, mergedOptions);
                    break;
                case 'seedGermination':
                    this.renderSeedGerminationDiagram(centerX, centerY, width * 0.85, height * 0.6, mergedOptions);
                    break;
                case 'tropisms':
                    this.renderTropismsDiagram(centerX, centerY, width * 0.85, height * 0.6, mergedOptions);
                    break;

                // ===== MICROBIOLOGY =====
                case 'bacteriaStructure':
                    this.renderBacterialCellDiagram(centerX, centerY, width * 0.6, height * 0.6, mergedOptions);
                    break;
                case 'virusStructure':
                    this.renderVirusStructureDiagram(centerX, centerY, Math.min(width, height) * 0.6, mergedOptions);
                    break;
                case 'fungalCell':
                    this.renderFungalCellDiagram(centerX, centerY, width * 0.8, height * 0.6, mergedOptions);
                    break;
                case 'protists':
                    this.renderProtistsDiagram(centerX, centerY, width * 0.85, height * 0.6, mergedOptions);
                    break;
                case 'bacterialGrowthCurve':
                    this.renderBacterialGrowthCurveDiagram(centerX, centerY, width * 0.8, height * 0.6, mergedOptions);
                    break;
                case 'viralReplication':
                    this.renderViralReplicationDiagram(centerX, centerY, width * 0.85, height * 0.7, mergedOptions);
                    break;
                case 'microscopy':
                    this.renderMicroscopyDiagram(centerX, centerY, width * 0.85, height * 0.6, mergedOptions);
                    break;

                // ===== BIOTECHNOLOGY =====
                case 'geneticEngineering':
                    this.renderGeneticEngineeringDiagram(centerX, centerY, width * 0.85, height * 0.7, mergedOptions);
                    break;
                case 'gelElectrophoresis':
                    this.renderGelElectrophoresisDiagram(centerX, centerY, width * 0.8, height * 0.6, mergedOptions);
                    break;
                case 'cloning':
                    this.renderCloningProcessDiagram(centerX, centerY, width * 0.85, height * 0.7, mergedOptions);
                    break;
                case 'crispr':
                    this.renderCRISPRDiagram(centerX, centerY, width * 0.85, height * 0.7, mergedOptions);
                    break;
                case 'bioreactor':
                    this.renderBioreactorDiagram(centerX, centerY, width * 0.6, height * 0.8, mergedOptions);
                    break;
                case 'gmoProduction':
                    this.renderGMOProductionDiagram(centerX, centerY, width * 0.85, height * 0.7, mergedOptions);
                    break;

                // ===== REPRODUCTION & DEVELOPMENT =====
                case 'fertilization':
                    this.renderFertilizationDiagram(centerX, centerY, width * 0.8, height * 0.7, mergedOptions);
                    break;
                case 'embryoDevelopment':
                    this.renderEmbryoDevelopmentDiagram(centerX, centerY, width * 0.85, height * 0.7, mergedOptions);
                    break;
                case 'menstrualCycle':
                    this.renderMenstrualCycleDiagram(centerX, centerY, width * 0.85, height * 0.6, mergedOptions);
                    break;
                case 'gametogenesis':
                    this.renderGametogenesisDiagram(centerX, centerY, width * 0.85, height * 0.7, mergedOptions);
                    break;
                case 'placenta':
                    this.renderPlacentaDiagram(centerX, centerY, width * 0.8, height * 0.7, mergedOptions);
                    break;

                // ===== HEALTH, DISEASE & IMMUNOLOGY =====
                case 'immuneResponse':
                    this.renderImmuneResponseDiagram(centerX, centerY, width * 0.85, height * 0.7, mergedOptions);
                    break;
                case 'antibodyStructure':
                    this.renderAntibodyStructureDiagram(centerX, centerY, Math.min(width, height) * 0.6, mergedOptions);
                    break;
                case 'pathogenTypes':
                    this.renderPathogenTypesDiagram(centerX, centerY, width * 0.85, height * 0.6, mergedOptions);
                    break;
                case 'vaccination':
                    this.renderVaccinationDiagram(centerX, centerY, width * 0.85, height * 0.7, mergedOptions);
                    break;
                case 'inflammation':
                    this.renderInflammationDiagram(centerX, centerY, width * 0.85, height * 0.7, mergedOptions);
                    break;
                case 'diseaseTransmission':
                    this.renderDiseaseTransmissionDiagram(centerX, centerY, width * 0.8, height * 0.7, mergedOptions);
                    break;
                case 'bloodCells':
                    this.renderBloodCellsDiagram(centerX, centerY, width * 0.8, height * 0.6, mergedOptions);
                    break;

                // ===== CLASSIFICATION & TAXONOMY =====
                case 'fiveKingdoms':
                    this.renderFiveKingdomsDiagram(centerX, centerY, width * 0.85, height * 0.7, mergedOptions);
                    break;
                case 'threeDomains':
                    this.renderThreeDomainsDiagram(centerX, centerY, width * 0.8, height * 0.7, mergedOptions);
                    break;
                case 'taxonomyHierarchy':
                    this.renderTaxonomyHierarchyDiagram(centerX, centerY, width * 0.6, height * 0.8, mergedOptions);
                    break;
                case 'dichotomousKey':
                    this.renderDichotomousKeyDiagram(centerX, centerY, width * 0.8, height * 0.7, mergedOptions);
                    break;
                case 'cladogram':
                    this.renderCladogramDiagram(centerX, centerY, width * 0.8, height * 0.6, mergedOptions);
                    break;

                // ===== HOMEOSTASIS & REGULATION =====
                case 'negativeFeedback':
                    this.renderNegativeFeedbackDiagram(centerX, centerY, Math.min(width, height) * 0.6, mergedOptions);
                    break;
                case 'thermoregulation':
                    this.renderThermoregulationDiagram(centerX, centerY, width * 0.85, height * 0.6, mergedOptions);
                    break;
                case 'bloodGlucoseRegulation':
                    this.renderBloodGlucoseRegulationDiagram(centerX, centerY, width * 0.85, height * 0.7, mergedOptions);
                    break;
                case 'waterBalance':
                    this.renderWaterBalanceDiagram(centerX, centerY, width * 0.85, height * 0.7, mergedOptions);
                    break;
                case 'nephron':
                    this.renderNephronDiagram(centerX, centerY, width * 0.6, height * 0.8, mergedOptions);
                    break;

                // ===== ENERGY IN LIVING SYSTEMS =====
                case 'atpStructure':
                    this.renderATPStructureDiagram(centerX, centerY, width * 0.8, height * 0.6, mergedOptions);
                    break;
                case 'cellularRespiration':
                    this.renderCellularRespirationDiagram(centerX, centerY, width * 0.85, height * 0.7, mergedOptions);
                    break;
                case 'mitochondrion':
                    this.renderMitochondrionDiagram(centerX, centerY, width * 0.7, height * 0.6, mergedOptions);
                    break;
                case 'electronTransportChain':
                    this.renderElectronTransportChainDiagram(centerX, centerY, width * 0.85, height * 0.6, mergedOptions);
                    break;
                case 'chloroplastStructure':
                    this.renderChloroplastStructureDiagram(centerX, centerY, width * 0.7, height * 0.6, mergedOptions);
                    break;
                case 'photosynthesisDetailed':
                    this.renderPhotosynthesisDetailedDiagram(centerX, centerY, width * 0.85, height * 0.7, mergedOptions);
                    break;

                // ===== DNA TECHNOLOGY & FORENSICS =====
                case 'dnaFingerprinting':
                    this.renderDNAFingerprintingDiagram(centerX, centerY, width * 0.8, height * 0.6, mergedOptions);
                    break;
                case 'gelElectrophoresisForensic':
                    this.renderGelElectrophoresisForensicDiagram(centerX, centerY, width * 0.8, height * 0.6, mergedOptions);
                    break;
                case 'strAnalysis':
                    this.renderSTRAnalysisDiagram(centerX, centerY, width * 0.85, height * 0.6, mergedOptions);
                    break;
                case 'forensicComparison':
                    this.renderForensicDNAComparisonDiagram(centerX, centerY, width * 0.85, height * 0.7, mergedOptions);
                    break;

                // ===== EXISTING CARDIOVASCULAR, ETC. =====
                case 'heartAnatomy':
                    this.renderHeartAnatomyDiagram(0, 0, width, height, mergedOptions);
                    break;
                case 'bloodVesselComparison':
                    this.renderBloodVesselComparison(centerX, centerY, width * 0.7, height * 0.4, mergedOptions);
                    break;
                case 'heartValves':
                    this.renderHeartValvesDiagram(centerX, centerY, width * 0.8, height * 0.5, mergedOptions);
                    break;
                case 'digestiveOrgans':
                    this.renderDigestiveOrganComparison(centerX, centerY, width * 0.8, height * 0.6, mergedOptions);
                    break;
                case 'brain':
                    this.renderBrainDiagram(centerX, centerY, width * 0.5, height * 0.7, mergedOptions);
                    break;
                case 'liver':
                    this.renderLiverDiagram(centerX, centerY, width * 0.6, height * 0.6, mergedOptions);
                    break;
                case 'kidney':
                    this.renderKidneyDiagram(centerX, centerY, width * 0.5, height * 0.7, mergedOptions);
                    break;
                case 'kidneyDetail':
                    this.renderKidneyDetailDiagram(centerX, centerY, width * 0.7, height * 0.7, mergedOptions);
                    break;
                case 'eyeAnatomy':
                    this.renderEyeDiagram(centerX, centerY, width * 0.7, height * 0.6, mergedOptions);
                    break;
                case 'skull':
                    this.renderSkullDiagram(centerX, centerY, width * 0.4, height * 0.6, mergedOptions);
                    break;
                case 'femur':
                    this.renderFemurDiagram(centerX, centerY, width * 0.3, height * 0.7, mergedOptions);
                    break;
                case 'ribcage':
                    this.renderRibcageDiagram(centerX, centerY, width * 0.5, height * 0.7, mergedOptions);
                    break;
                case 'spine':
                    this.renderSpineDiagram(centerX, centerY, width * 0.3, height * 0.8, mergedOptions);
                    break;
                case 'boneStructure':
                    this.renderBoneStructureDiagram(centerX, centerY, width * 0.7, height * 0.6, mergedOptions);
                    break;
                case 'skeletalMuscle':
                    this.renderSkeletalMuscleDiagram(centerX, centerY, width * 0.5, height * 0.7, mergedOptions);
                    break;
                case 'muscleContraction':
                    this.renderMuscleContractionDiagram(centerX, centerY, width * 0.8, height * 0.6, mergedOptions);
                    break;
                case 'cellStructure':
                    this.renderCellDiagram(centerX, centerY, Math.min(width, height) * 0.7, mergedOptions);
                    break;

                default:
                    this.renderPlaceholder(diagram, centerX, centerY, width * 0.7, height * 0.5);
            }

            // Add category and info
            this.drawDiagramInfo(diagram, 20, height - 60, mergedOptions);

        } catch (error) {
            console.error(`Error rendering ${diagramKey}:`, error);
            this.renderError(diagram, centerX, centerY, width * 0.7, height * 0.5, error.message);
        }

        this.ctx.restore();
    }

    // ========== HELPER METHODS ==========

    drawTitle(title, x, y) {
        this.ctx.font = 'bold 24px Arial';
        this.ctx.fillStyle = '#2C3E50';
        this.ctx.textAlign = 'center';
        this.ctx.fillText(title, x, y);
    }

    drawDiagramInfo(diagram, x, y, options) {
        this.ctx.font = '12px Arial';
        this.ctx.fillStyle = '#7F8C8D';
        this.ctx.textAlign = 'left';
        this.ctx.fillText(`Category: ${diagram.category}`, x, y);
        this.ctx.fillText(`Description: ${diagram.description}`, x, y + 15);
    }

    renderPlaceholder(diagram, x, y, width, height) {
        this.ctx.fillStyle = '#ECF0F1';
        this.ctx.fillRect(x - width/2, y - height/2, width, height);
        this.ctx.strokeStyle = '#BDC3C7';
        this.ctx.lineWidth = 2;
        this.ctx.strokeRect(x - width/2, y - height/2, width, height);
        
        this.ctx.font = 'bold 18px Arial';
        this.ctx.fillStyle = '#7F8C8D';
        this.ctx.textAlign = 'center';
        this.ctx.fillText(`${diagram.name}`, x, y - 10);
        this.ctx.font = '14px Arial';
        this.ctx.fillText('(Renderer not yet implemented)', x, y + 15);
    }

    renderError(diagram, x, y, width, height, errorMessage) {
        this.ctx.fillStyle = '#FADBD8';
        this.ctx.fillRect(x - width/2, y - height/2, width, height);
        this.ctx.strokeStyle = '#E74C3C';
        this.ctx.lineWidth = 2;
        this.ctx.strokeRect(x - width/2, y - height/2, width, height);
        
        this.ctx.font = 'bold 18px Arial';
        this.ctx.fillStyle = '#C0392B';
        this.ctx.textAlign = 'center';
        this.ctx.fillText('Error Rendering Diagram', x, y - 10);
        this.ctx.font = '14px Arial';
        this.ctx.fillText(errorMessage, x, y + 15);
    }

    addLabel(text, x, y, color = '#2C3E50', align = 'center') {
        this.ctx.font = 'bold 13px Arial';
        this.ctx.fillStyle = color;
        this.ctx.textAlign = align;
        
        const lines = text.split('\n');
        lines.forEach((line, index) => {
            this.ctx.fillText(line, x, y + index * 15);
        });
    }

    drawArrow(x1, y1, x2, y2, color, label = '', arrowSize = 8) {
        this.ctx.save();
        
        this.ctx.strokeStyle = color;
        this.ctx.fillStyle = color;
        this.ctx.lineWidth = 2;

        // Draw line
        this.ctx.beginPath();
        this.ctx.moveTo(x1, y1);
        this.ctx.lineTo(x2, y2);
        this.ctx.stroke();

        // Draw arrowhead
        const angle = Math.atan2(y2 - y1, x2 - x1);
        this.ctx.beginPath();
        this.ctx.moveTo(x2, y2);
        this.ctx.lineTo(
            x2 - arrowSize * Math.cos(angle - Math.PI / 6),
            y2 - arrowSize * Math.sin(angle - Math.PI / 6)
        );
        this.ctx.lineTo(
            x2 - arrowSize * Math.cos(angle + Math.PI / 6),
            y2 - arrowSize * Math.sin(angle + Math.PI / 6)
        );
        this.ctx.closePath();
        this.ctx.fill();

        // Label
        if(label) {
            const midX = (x1 + x2) / 2;
            const midY = (y1 + y2) / 2;
            this.ctx.font = '11px Arial';
            this.ctx.fillStyle = color;
            this.ctx.textAlign = 'center';
            this.ctx.fillText(label, midX, midY - 5);
        }

        this.ctx.restore();
    }

    drawCurvedArrow(x1, y1, x2, y2, color, label = '') {
        this.ctx.save();
        
        this.ctx.strokeStyle = color;
        this.ctx.fillStyle = color;
        this.ctx.lineWidth = 3;

        // Calculate control point for curve
        const midX = (x1 + x2) / 2;
        const midY = (y1 + y2) / 2;
        const dx = x2 - x1;
        const dy = y2 - y1;
        const ctrlX = midX - dy * 0.3;
        const ctrlY = midY + dx * 0.3;

        // Draw curved line
        this.ctx.beginPath();
        this.ctx.moveTo(x1, y1);
        this.ctx.quadraticCurveTo(ctrlX, ctrlY, x2, y2);
        this.ctx.stroke();

        // Draw arrowhead
        const angle = Math.atan2(y2 - ctrlY, x2 - ctrlX);
        this.ctx.beginPath();
        this.ctx.moveTo(x2, y2);
        this.ctx.lineTo(
            x2 - 10 * Math.cos(angle - Math.PI / 6),
            y2 - 10 * Math.sin(angle - Math.PI / 6)
        );
        this.ctx.lineTo(
            x2 - 10 * Math.cos(angle + Math.PI / 6),
            y2 - 10 * Math.sin(angle + Math.PI / 6)
        );
        this.ctx.closePath();
        this.ctx.fill();

        // Label
        if(label) {
            this.ctx.font = '11px Arial';
            this.ctx.fillStyle = color;
            this.ctx.textAlign = 'center';
            this.ctx.fillText(label, ctrlX, ctrlY - 5);
        }

        this.ctx.restore();
    }

    drawLegend(x, y, items) {
        this.ctx.save();
        this.ctx.translate(x, y);

        const boxSize = 12;
        const spacing = 20;

        items.forEach((item, index) => {
            const yPos = index * spacing;

            // Color box
            this.ctx.fillStyle = item.color;
            this.ctx.fillRect(0, yPos, boxSize, boxSize);
            this.ctx.strokeStyle = '#2C3E50';
            this.ctx.lineWidth = 1;
            this.ctx.strokeRect(0, yPos, boxSize, boxSize);

            // Label
            this.ctx.font = '11px Arial';
            this.ctx.fillStyle = '#2C3E50';
            this.ctx.textAlign = 'left';
            this.ctx.fillText(item.label, boxSize + 5, yPos + boxSize - 2);
        });

        this.ctx.restore();
    }



renderPlantCellDiagram(x, y, width, height, options = {}) {
    const { showLabels = true } = options;
    
    this.ctx.save();
    this.ctx.translate(x, y);
    
    // Title
    this.ctx.font = 'bold 22px Arial';
    this.ctx.fillStyle = '#2C3E50';
    this.ctx.textAlign = 'center';
    this.ctx.fillText('Plant Cell Structure', width / 2, -20);
    
    // Draw plant cell
    AnatomicalShapes.drawPlantCell(this.ctx, width * 0.1, height * 0.1, width * 0.8, height * 0.8);
    
    if(showLabels) {
        this.addLabel('Cell Wall', width * 0.05, height * 0.5, '#228B22', 'left');
        this.addLabel('Chloroplast', width * 0.3, height * 0.25, '#228B22', 'left');
        this.addLabel('Central Vacuole', width * 0.5, height * 0.5, '#4682B4');
        this.addLabel('Nucleus', width * 0.35, height * 0.3, '#9370DB', 'left');
        this.addLabel('Mitochondria', width * 0.7, height * 0.4, '#FF6347', 'right');
        this.addLabel('Golgi Apparatus', width * 0.75, height * 0.5, '#DAA520', 'right');
    }
    
    this.ctx.restore();
}

renderLeafCrossSectionDiagram(x, y, width, height, options = {}) {
    const { showLabels = true } = options;
    
    this.ctx.save();
    this.ctx.translate(x, y);
    
    // Title
    this.ctx.font = 'bold 22px Arial';
    this.ctx.fillStyle = '#2C3E50';
    this.ctx.textAlign = 'center';
    this.ctx.fillText('Leaf Cross-Section', width / 2, -20);
    
    // Draw leaf structure
    AnatomicalShapes.drawLeafCrossSection(this.ctx, width * 0.1, height * 0.1, width * 0.8, height * 0.8);
    
    if(showLabels) {
        this.addLabel('Cuticle', width * 0.05, height * 0.13, '#2E7D32', 'left');
        this.addLabel('Upper Epidermis', width * 0.05, height * 0.18, '#2E7D32', 'left');
        this.addLabel('Palisade Mesophyll', width * 0.05, height * 0.25, '#2E7D32', 'left');
        this.addLabel('Spongy Mesophyll', width * 0.05, height * 0.55, '#2E7D32', 'left');
        this.addLabel('Vascular Bundle\n(Xylem & Phloem)', width * 0.5, height * 0.45, '#795548');
        this.addLabel('Lower Epidermis', width * 0.05, height * 0.93, '#2E7D32', 'left');
        this.addLabel('Stomata', width * 0.75, height * 0.93, '#4CAF50', 'right');
        
        // Draw arrows for gas exchange
        this.drawArrow(width * 0.95, height * 0.35, width * 0.92, height * 0.5, '#03A9F4', 'CO₂ in');
        this.drawArrow(width * 0.92, height * 0.55, width * 0.95, height * 0.7, '#4CAF50', 'O₂ out');
    }
    
    this.ctx.restore();
}

renderPhotosynthesisDiagram(x, y, width, height, options = {}) {
    const { showLabels = true, showEquation = true } = options;
    
    this.ctx.save();
    this.ctx.translate(x, y);
    
    // Title
    this.ctx.font = 'bold 24px Arial';
    this.ctx.fillStyle = '#2C3E50';
    this.ctx.textAlign = 'center';
    this.ctx.fillText('Photosynthesis', width / 2, -30);
    
    // Draw chloroplast with reactions
    AnatomicalShapes.drawPhotosynthesis(this.ctx, width * 0.1, height * 0.15, width * 0.8, height * 0.6);
    
    if(showEquation) {
        // Chemical equation
        this.ctx.font = 'bold 16px Arial';
        this.ctx.fillStyle = '#2C3E50';
        this.ctx.textAlign = 'center';
        
        const eqY = height * 0.85;
        this.ctx.fillStyle = '#2196F3';
        this.ctx.fillText('6CO₂', width * 0.15, eqY);
        
        this.ctx.fillStyle = '#2C3E50';
        this.ctx.fillText('+', width * 0.23, eqY);
        
        this.ctx.fillStyle = '#2196F3';
        this.ctx.fillText('6H₂O', width * 0.31, eqY);
        
        this.ctx.fillStyle = '#2C3E50';
        this.ctx.font = '20px Arial';
        this.ctx.fillText('→', width * 0.42, eqY);
        
        this.ctx.font = 'bold 16px Arial';
        this.ctx.fillStyle = '#FF6F00';
        this.ctx.fillText('C₆H₁₂O₆', width * 0.56, eqY);
        
        this.ctx.fillStyle = '#2C3E50';
        this.ctx.fillText('+', width * 0.69, eqY);
        
        this.ctx.fillStyle = '#4CAF50';
        this.ctx.fillText('6O₂', width * 0.77, eqY);
        
        // Light requirement
        this.ctx.fillStyle = '#FDD835';
        this.ctx.font = '13px Arial';
        this.ctx.fillText('Light Energy', width * 0.42, eqY - 15);
    }
    
    this.ctx.restore();
}

renderBacteriaStructureDiagram(x, y, width, height, options = {}) {
    const { showLabels = true } = options;
    
    this.ctx.save();
    this.ctx.translate(x, y);
    
    // Title
    this.ctx.font = 'bold 22px Arial';
    this.ctx.fillStyle = '#2C3E50';
    this.ctx.textAlign = 'center';
    this.ctx.fillText('Bacterial Cell Structure', width / 2, -20);
    
    // Draw bacteria
    AnatomicalShapes.drawBacteriaStructure(this.ctx, width * 0.15, height * 0.15, width * 0.7, height * 0.7);
    
    if(showLabels) {
        this.addLabel('Capsule', width * 0.12, height * 0.25, '#9C27B0', 'left');
        this.addLabel('Cell Wall', width * 0.15, height * 0.35, '#7B1FA2', 'left');
        this.addLabel('Cell Membrane', width * 0.17, height * 0.45, '#E91E63', 'left');
        this.addLabel('Nucleoid (DNA)', width * 0.5, height * 0.5, '#FF6F00');
        this.addLabel('Ribosomes', width * 0.35, height * 0.6, '#1976D2', 'left');
        this.addLabel('Plasmid', width * 0.75, height * 0.65, '#FF9800', 'right');
        this.addLabel('Flagellum', width * 0.92, height * 0.5, '#424242', 'right');
        this.addLabel('Pili', width * 0.85, height * 0.25, '#616161', 'right');
    }
    
    // Note
    this.ctx.font = '12px Arial';
    this.ctx.fillStyle = '#7F8C8D';
    this.ctx.textAlign = 'center';
    this.ctx.fillText('Prokaryotic Cell - No nucleus or membrane-bound organelles', width / 2, height * 0.95);
    
    this.ctx.restore();
}

renderVirusStructureDiagram(x, y, width, height, options = {}) {
    const { showLabels = true } = options;
    
    this.ctx.save();
    this.ctx.translate(x, y);
    
    // Title
    this.ctx.font = 'bold 22px Arial';
    this.ctx.fillStyle = '#2C3E50';
    this.ctx.textAlign = 'center';
    this.ctx.fillText('Virus Structure', width / 2, -20);
    
    // Draw virus
    AnatomicalShapes.drawVirusStructure(this.ctx, width * 0.1, height * 0.1, width * 0.8, height * 0.8);
    
    if(showLabels) {
        this.addLabel('Spike Proteins\n(Glycoproteins)', width * 0.85, height * 0.25, '#5E35B1', 'right');
        this.addLabel('Envelope', width * 0.82, height * 0.5, '#8E24AA', 'right');
        this.addLabel('Capsid\n(Protein Coat)', width * 0.75, height * 0.7, '#B71C1C', 'right');
        this.addLabel('Genetic Material\n(RNA or DNA)', width * 0.5, height * 0.5, '#FFA000');
    }
    
    // Note
    this.ctx.font = '12px Arial';
    this.ctx.fillStyle = '#7F8C8D';
    this.ctx.textAlign = 'center';
    this.ctx.fillText('Not a living cell - requires host to reproduce', width / 2, height * 0.95);
    
    this.ctx.restore();
}

renderMitosisDiagram(x, y, width, height, options = {}) {
    const { showLabels = true } = options;
    
    this.ctx.save();
    this.ctx.translate(x, y);
    
    // Title
    this.ctx.font = 'bold 24px Arial';
    this.ctx.fillStyle = '#2C3E50';
    this.ctx.textAlign = 'center';
    this.ctx.fillText('Mitosis - Cell Division', width / 2, -30);
    
    const stages = ['interphase', 'prophase', 'metaphase', 'anaphase', 'telophase', 'cytokinesis'];
    const stageNames = ['Interphase', 'Prophase', 'Metaphase', 'Anaphase', 'Telophase', 'Cytokinesis'];
    const cellWidth = width / 3 - 20;
    const cellHeight = height / 2 - 40;
    
    stages.forEach((stage, idx) => {
        const col = idx % 3;
        const row = Math.floor(idx / 3);
        const cellX = col * (width / 3) + 10;
        const cellY = row * (height / 2) + 20;
        
        // Draw stage
        AnatomicalShapes.drawMitosis(this.ctx, cellX, cellY, cellWidth, cellHeight, stage);
        
        // Label
        if(showLabels) {
            this.ctx.font = 'bold 14px Arial';
            this.ctx.fillStyle = '#2C3E50';
            this.ctx.textAlign = 'center';
            this.ctx.fillText(stageNames[idx], cellX + cellWidth / 2, cellY + cellHeight + 20);
        }
    });
    
    this.ctx.restore();
}

renderMeiosisDiagram(x, y, width, height, options = {}) {
    const { showLabels = true } = options;
    
    this.ctx.save();
    this.ctx.translate(x, y);
    
    // Title
    this.ctx.font = 'bold 24px Arial';
    this.ctx.fillStyle = '#2C3E50';
    this.ctx.textAlign = 'center';
    this.ctx.fillText('Meiosis - Formation of Gametes', width / 2, -30);
    
    const stages = [
        { stage: 'meiosis1_prophase', name: 'Meiosis I\nProphase I\n(Crossing Over)' },
        { stage: 'meiosis1_end', name: 'End of\nMeiosis I\n(2 cells)' },
        { stage: 'meiosis2_end', name: 'End of\nMeiosis II\n(4 haploid cells)' }
    ];
    
    const cellWidth = width / 3 - 30;
    const cellHeight = height * 0.7;
    
    stages.forEach((stageInfo, idx) => {
        const cellX = idx * (width / 3) + 20;
        const cellY = height * 0.1;
        
        // Draw stage
        AnatomicalShapes.drawMeiosis(this.ctx, cellX, cellY, cellWidth, cellHeight, stageInfo.stage);
        
        // Label
        if(showLabels) {
            this.ctx.font = 'bold 13px Arial';
            this.ctx.fillStyle = '#2C3E50';
            this.ctx.textAlign = 'center';
            const lines = stageInfo.name.split('\n');
            lines.forEach((line, lineIdx) => {
                this.ctx.fillText(line, cellX + cellWidth / 2, cellY + cellHeight + 25 + lineIdx * 16);
            });
        }
    });
    
    // Note
    this.ctx.font = '12px Arial';
    this.ctx.fillStyle = '#7F8C8D';
    this.ctx.textAlign = 'center';
    this.ctx.fillText('Produces 4 genetically unique haploid cells (gametes)', width / 2, height * 0.95);
    
    this.ctx.restore();
}

renderFoodChainDiagram(x, y, width, height, options = {}) {
    const { showLabels = true } = options;
    
    this.ctx.save();
    this.ctx.translate(x, y);
    
    // Title
    this.ctx.font = 'bold 24px Arial';
    this.ctx.fillStyle = '#2C3E50';
    this.ctx.textAlign = 'center';
    this.ctx.fillText('Food Chain', width / 2, -30);
    
    // Draw food chain
    AnatomicalShapes.drawFoodChain(this.ctx, 0, 0, width, height);
    
    // Energy flow label
    this.ctx.font = 'bold 14px Arial';
    this.ctx.fillStyle = '#E67E22';
    this.ctx.save();
    this.ctx.translate(width * 0.05, height / 2);
    this.ctx.rotate(-Math.PI / 2);
    this.ctx.fillText('Energy Flow →', 0, 0);
    this.ctx.restore();
    
    this.ctx.restore();
}

renderEnergyPyramidDiagram(x, y, width, height, options = {}) {
    const { showLabels = true } = options;
    
    this.ctx.save();
    this.ctx.translate(x, y);
    
    // Draw pyramid
    AnatomicalShapes.drawEnergyPyramid(this.ctx, width * 0.1, height * 0.05, width * 0.8, height * 0.85);
    
    this.ctx.restore();
}

renderDNAReplicationDiagram(x, y, width, height, options = {}) {
    const { showLabels = true } = options;
    
    this.ctx.save();
    this.ctx.translate(x, y);
    
    // Title
    this.ctx.font = 'bold 24px Arial';
    this.ctx.fillStyle = '#2C3E50';
    this.ctx.textAlign = 'center';
    this.ctx.fillText('DNA Replication', width / 2, -30);
    
    // Subtitle
    this.ctx.font = '14px Arial';
    this.ctx.fillStyle = '#7F8C8D';
    this.ctx.fillText('Semi-conservative replication process', width / 2, -10);
    
    // Draw replication
    AnatomicalShapes.drawDNAReplication(this.ctx, 0, 0, width, height);
    
    this.ctx.restore();
}

renderCellCycleDiagram(x, y, width, height, options = {}) {
    const { showLabels = true } = options;
    
    this.ctx.save();
    this.ctx.translate(x, y);
    
    // Title
    this.ctx.font = 'bold 24px Arial';
    this.ctx.fillStyle = '#2C3E50';
    this.ctx.textAlign = 'center';
    this.ctx.fillText('Cell Cycle', width / 2, -20);
    
    const centerX = width / 2;
    const centerY = height / 2;
    const radius = Math.min(width, height) * 0.35;
    
    // Phases with colors and percentages
    const phases = [
        { name: 'G₁\n(Growth)', angle: 0, sweep: Math.PI * 0.8, color: '#4CAF50' },
        { name: 'S\n(DNA Synthesis)', angle: Math.PI * 0.8, sweep: Math.PI * 0.6, color: '#2196F3' },
        { name: 'G₂\n(Growth)', angle: Math.PI * 1.4, sweep: Math.PI * 0.4, color: '#FFC107' },
        { name: 'M\n(Mitosis)', angle: Math.PI * 1.8, sweep: Math.PI * 0.2, color: '#E91E63' }
    ];
    
    // Draw phase segments
    phases.forEach(phase => {
        const gradient = this.ctx.createRadialGradient(centerX, centerY, 0, centerX, centerY, radius);
        gradient.addColorStop(0, phase.color);
        gradient.addColorStop(1, phase.color + 'AA');
        
        this.ctx.fillStyle = gradient;
        this.ctx.strokeStyle = '#2C3E50';
        this.ctx.lineWidth = 3;
        
        this.ctx.beginPath();
        this.ctx.moveTo(centerX, centerY);
        this.ctx.arc(centerX, centerY, radius, phase.angle, phase.angle + phase.sweep);
        this.ctx.closePath();
        this.ctx.fill();
        this.ctx.stroke();
        
        // Labels
        if(showLabels) {
            const labelAngle = phase.angle + phase.sweep / 2;
            const labelRadius = radius * 0.7;
            const labelX = centerX + Math.cos(labelAngle) * labelRadius;
            const labelY = centerY + Math.sin(labelAngle) * labelRadius;
            
            this.ctx.fillStyle = '#FFFFFF';
            this.ctx.font = 'bold 16px Arial';
            this.ctx.textAlign = 'center';
            this.ctx.shadowColor = 'rgba(0,0,0,0.5)';
            this.ctx.shadowBlur = 3;
            
            const lines = phase.name.split('\n');
            lines.forEach((line, i) => {
                this.ctx.fillText(line, labelX, labelY + (i - 0.5) * 18);
            });
            this.ctx.shadowBlur = 0;
        }
    });
    
    // Center label - Interphase
    this.ctx.fillStyle = '#ECF0F1';
    this.ctx.beginPath();
    this.ctx.arc(centerX, centerY, radius * 0.3, 0, Math.PI * 2);
    this.ctx.fill();
    this.ctx.strokeStyle = '#2C3E50';
    this.ctx.lineWidth = 2;
    this.ctx.stroke();
    
    this.ctx.fillStyle = '#2C3E50';
    this.ctx.font = 'bold 14px Arial';
    this.ctx.textAlign = 'center';
    this.ctx.fillText('Interphase', centerX, centerY - 5);
    this.ctx.font = '12px Arial';
    this.ctx.fillText('(G₁ + S + G₂)', centerX, centerY + 10);
    
    // Checkpoint labels
    if(showLabels) {
        this.ctx.font = '11px Arial';
        this.ctx.fillStyle = '#C0392B';
        
        // G1 checkpoint
        this.ctx.fillText('G₁ checkpoint', centerX + radius * 0.85, centerY - radius * 0.5);
        
        // G2 checkpoint
        this.ctx.fillText('G₂ checkpoint', centerX - radius * 0.6, centerY + radius * 0.7);
        
        // M checkpoint
        this.ctx.fillText('M checkpoint', centerX + radius * 0.2, centerY - radius * 0.9);
    }
    
    this.ctx.restore();
}


renderFertilizationDiagram(x, y, width, height, options = {}) {
  const { showLabels = true } = options;
  
  this.ctx.save();
  this.ctx.translate(x, y);
  
  if(showLabels) {
    this.ctx.font = 'bold 24px Arial';
    this.ctx.fillStyle = '#2C3E50';
    this.ctx.textAlign = 'center';
    this.ctx.fillText('Fertilization Process', width / 2, -20);
  }
  
  AnatomicalShapes.drawFertilization(this.ctx, 0, 0, width, height);
  
  this.ctx.restore();
}

renderEmbryoDevelopmentDiagram(x, y, width, height, options = {}) {
  const { showLabels = true } = options;
  
  this.ctx.save();
  this.ctx.translate(x, y);
  
  if(showLabels) {
    this.ctx.font = 'bold 24px Arial';
    this.ctx.fillStyle = '#2C3E50';
    this.ctx.textAlign = 'center';
    this.ctx.fillText('Embryo Development Stages', width / 2, -20);
  }
  
  AnatomicalShapes.drawEmbryoDevelopment(this.ctx, 0, 0, width, height);
  
  this.ctx.restore();
}

renderMenstrualCycleDiagram(x, y, width, height, options = {}) {
  const { showLabels = true, showHormones = true } = options;
  
  this.ctx.save();
  this.ctx.translate(x, y);
  
  if(showLabels) {
    this.ctx.font = 'bold 24px Arial';
    this.ctx.fillStyle = '#2C3E50';
    this.ctx.textAlign = 'center';
    this.ctx.fillText('Menstrual Cycle', width / 2, -20);
  }
  
  AnatomicalShapes.drawMenstrualCycle(this.ctx, 0, 0, width, height, showHormones);
  
  this.ctx.restore();
}

renderGametogenesisDiagram(x, y, width, height, options = {}) {
  const { showLabels = true, showBoth = true } = options;
  
  this.ctx.save();
  this.ctx.translate(x, y);
  
  if(showLabels) {
    this.ctx.font = 'bold 24px Arial';
    this.ctx.fillStyle = '#2C3E50';
    this.ctx.textAlign = 'center';
    const title = showBoth ? 'Gametogenesis - Sperm & Egg Formation' :
                  'Spermatogenesis';
    this.ctx.fillText(title, width / 2, -20);
  }
  
  AnatomicalShapes.drawGametogenesis(this.ctx, 0, 0, width, height, showBoth);
  
  this.ctx.restore();
}

renderPlacentaDiagram(x, y, width, height, options = {}) {
  const { showLabels = true } = options;
  
  this.ctx.save();
  this.ctx.translate(x, y);
  
  if(showLabels) {
    this.ctx.font = 'bold 24px Arial';
    this.ctx.fillStyle = '#2C3E50';
    this.ctx.textAlign = 'center';
    this.ctx.fillText('Placenta & Fetal Development', width / 2, -20);
  }
  
  AnatomicalShapes.drawPlacenta(this.ctx, 0, 0, width, height);
  
  this.ctx.restore();
}




renderDNAFingerprintingDiagram(x, y, width, height, options = {}) {
  const { showLabels = true, showComparison = true } = options;

  this.ctx.save();
  this.ctx.translate(x, y);

  // Title
  if (showLabels) {
    this.ctx.font = 'bold 24px Arial';
    this.ctx.fillStyle = '#2C3E50';
    this.ctx.textAlign = 'center';
    this.ctx.fillText('DNA Fingerprinting (RFLP Analysis)', width / 2, -20);
  }

  // Draw DNA fingerprint
  AnatomicalShapes.drawDNAFingerprint(this.ctx, 0, 0, width, height, showComparison);

  // Add description
  if (showLabels) {
    this.ctx.font = '12px Arial';
    this.ctx.fillStyle = '#7F8C8D';
    this.ctx.textAlign = 'center';
    this.ctx.fillText('Each person has a unique DNA band pattern - like a genetic barcode', 
      width / 2, height - 10);
  }

  this.ctx.restore();
}

renderSTRAnalysisDiagram(x, y, width, height, options = {}) {
  const { showLabels = true } = options;

  this.ctx.save();
  this.ctx.translate(x, y);

  // Title
  if (showLabels) {
    this.ctx.font = 'bold 24px Arial';
    this.ctx.fillStyle = '#2C3E50';
    this.ctx.textAlign = 'center';
    this.ctx.fillText('STR Analysis - DNA Profiling', width / 2, -20);
  }

  // Draw STR analysis
  AnatomicalShapes.drawSTRAnalysis(this.ctx, 0, 0, width, height);

  // Add key information
  if (showLabels) {
    // Info box
    this.ctx.fillStyle = '#E8F5E9';
    this.ctx.fillRect(width - 280, 50, 260, 110);
    this.ctx.strokeStyle = '#388E3C';
    this.ctx.lineWidth = 2;
    this.ctx.strokeRect(width - 280, 50, 260, 110);

    this.ctx.fillStyle = '#1B5E20';
    this.ctx.font = 'bold 12px Arial';
    this.ctx.textAlign = 'left';
    this.ctx.fillText('Why STR Analysis?', width - 270, 70);
    
    this.ctx.font = '10px Arial';
    this.ctx.fillStyle = '#2C3E50';
    const strInfo = [
      '• More sensitive than RFLP',
      '• Requires less DNA sample',
      '• Faster results (24-48 hours)',
      '• Can use degraded samples',
      '• CODIS uses 20 STR loci',
      '• Extremely discriminating',
      '• Industry standard since 1990s'
    ];
    
    strInfo.forEach((info, i) => {
      this.ctx.fillText(info, width - 270, 88 + i * 13);
    });
  }

  this.ctx.restore();
}

renderForensicDNAComparisonDiagram(x, y, width, height, options = {}) {
  const { showLabels = true } = options;

  this.ctx.save();
  this.ctx.translate(x, y);

  // Title
  if (showLabels) {
    this.ctx.font = 'bold 24px Arial';
    this.ctx.fillStyle = '#2C3E50';
    this.ctx.textAlign = 'center';
    this.ctx.fillText('Forensic DNA Analysis Workflow', width / 2, -20);
  }

  // Draw forensic comparison
  AnatomicalShapes.drawForensicDNAComparison(this.ctx, 0, 0, width, height);

  // Add legal considerations
  if (showLabels) {
    this.ctx.fillStyle = '#FCE4EC';
    this.ctx.fillRect(width - 250, 50, 230, 100);
    this.ctx.strokeStyle = '#C2185B';
    this.ctx.lineWidth = 2;
    this.ctx.strokeRect(width - 250, 50, 230, 100);

    this.ctx.fillStyle = '#C2185B';
    this.ctx.font = 'bold 11px Arial';
    this.ctx.textAlign = 'left';
    this.ctx.fillText('Legal Considerations:', width - 240, 68);
    
    this.ctx.font = '9px Arial';
    this.ctx.fillStyle = '#2C3E50';
    const legalInfo = [
      '• Chain of custody critical',
      '• Contamination prevention',
      '• Quality control standards',
      '• Expert witness testimony',
      '• Database privacy concerns',
      '• Familial searching ethics',
      '• Post-conviction review'
    ];
    
    legalInfo.forEach((info, i) => {
      this.ctx.fillText(info, width - 240, 83 + i * 12);
    });
  }

  this.ctx.restore();
}

renderGelElectrophoresisForensicDiagram(x, y, width, height, options = {}) {
  const { showLabels = true, showSamples = true } = options;

  this.ctx.save();
  this.ctx.translate(x, y);

  // Title
  if (showLabels) {
    this.ctx.font = 'bold 24px Arial';
    this.ctx.fillStyle = '#2C3E50';
    this.ctx.textAlign = 'center';
    this.ctx.fillText('Forensic Gel Electrophoresis', width / 2, -20);
  }

  // Draw gel electrophoresis
  AnatomicalShapes.drawGelElectrophoresisForensic(this.ctx, 0, 0, width, height, showSamples);

  // Add technical details
  if (showLabels) {
    // Technical info box
    this.ctx.fillStyle = '#F3E5F5';
    this.ctx.fillRect(20, 100, 180, 120);
    this.ctx.strokeStyle = '#7B1FA2';
    this.ctx.lineWidth = 2;
    this.ctx.strokeRect(20, 100, 180, 120);

    this.ctx.fillStyle = '#7B1FA2';
    this.ctx.font = 'bold 11px Arial';
    this.ctx.textAlign = 'left';
    this.ctx.fillText('Technical Details:', 30, 118);
    
    this.ctx.font = '9px Arial';
    this.ctx.fillStyle = '#2C3E50';
    const techInfo = [
      '• Gel: Agarose (0.8-2%)',
      '• Buffer: TAE or TBE',
      '• Voltage: 50-150V',
      '• Time: 30-90 minutes',
      '• Staining: EtBr or SYBR',
      '• UV visualization',
      '• Documentation required',
      '• Size standard (ladder)',
      '• Band analysis software'
    ];
    
    techInfo.forEach((info, i) => {
      this.ctx.fillText(info, 30, 133 + i * 11);
    });
  }

  // Add forensic applications
  if (showLabels) {
    this.ctx.fillStyle = '#E1F5FE';
    this.ctx.fillRect(width - 200, 100, 180, 100);
    this.ctx.strokeStyle = '#0277BD';
    this.ctx.lineWidth = 2;
    this.ctx.strokeRect(width - 200, 100, 180, 100);

    this.ctx.fillStyle = '#0277BD';
    this.ctx.font = 'bold 11px Arial';
    this.ctx.textAlign = 'left';
    this.ctx.fillText('Forensic Applications:', width - 190, 118);
    
    this.ctx.font = '9px Arial';
    this.ctx.fillStyle = '#2C3E50';
    const applications = [
      '• Criminal investigations',
      '• Paternity testing',
      '• Mass disaster ID',
      '• Missing persons',
      '• Sexual assault cases',
      '• Cold case reviews',
      '• Exoneration cases'
    ];
    
    applications.forEach((app, i) => {
      this.ctx.fillText(app, width - 190, 133 + i * 12);
    });
  }

  this.ctx.restore();
}



renderATPStructureDiagram(x, y, width, height, options = {}) {
  const { showLabels = true, showHydrolysis = true } = options;

  this.ctx.save();
  this.ctx.translate(x, y);

  // Title
  if (showLabels) {
    this.ctx.font = 'bold 24px Arial';
    this.ctx.fillStyle = '#2C3E50';
    this.ctx.textAlign = 'center';
    this.ctx.fillText('ATP Structure and Hydrolysis', width / 2, -20);
  }

  // Draw ATP
  AnatomicalShapes.drawATPStructure(this.ctx, 0, 0, width, height, showHydrolysis);

  // Add description
  if (showLabels) {
    this.ctx.font = '12px Arial';
    this.ctx.fillStyle = '#7F8C8D';
    this.ctx.textAlign = 'center';
    this.ctx.fillText('ATP is the primary energy currency of cells', width / 2, height - 10);
  }

  this.ctx.restore();
}

renderCellularRespirationDiagram(x, y, width, height, options = {}) {
  const { showLabels = true, showStages = true } = options;

  this.ctx.save();
  this.ctx.translate(x, y);

  // Title
  if (showLabels) {
    this.ctx.font = 'bold 24px Arial';
    this.ctx.fillStyle = '#2C3E50';
    this.ctx.textAlign = 'center';
    this.ctx.fillText('Cellular Respiration - Aerobic Pathway', width / 2, -20);
  }

  // Draw cellular respiration
  AnatomicalShapes.drawCellularRespiration(this.ctx, 0, 0, width, height, showStages);

  // Add key information
  if (showLabels && showStages) {
    // Location info box
    this.ctx.fillStyle = '#ECF0F1';
    this.ctx.fillRect(20, height - 90, 250, 70);
    this.ctx.strokeStyle = '#34495E';
    this.ctx.lineWidth = 2;
    this.ctx.strokeRect(20, height - 90, 250, 70);

    this.ctx.fillStyle = '#2C3E50';
    this.ctx.font = 'bold 12px Arial';
    this.ctx.textAlign = 'left';
    this.ctx.fillText('Key Points:', 30, height - 70);
    
    this.ctx.font = '10px Arial';
    const keyPoints = [
      '• Most ATP from ETC (oxidative phosphorylation)',
      '• Requires oxygen (aerobic)',
      '• Occurs in mitochondria (except glycolysis)'
    ];
    
    keyPoints.forEach((point, i) => {
      this.ctx.fillText(point, 30, height - 52 + i * 14);
    });
  }

  this.ctx.restore();
}

renderMitochondrionDiagram(x, y, width, height, options = {}) {
  const { showLabels = true } = options;

  this.ctx.save();
  this.ctx.translate(x, y);

  // Title
  if (showLabels) {
    this.ctx.font = 'bold 24px Arial';
    this.ctx.fillStyle = '#2C3E50';
    this.ctx.textAlign = 'center';
    this.ctx.fillText('Mitochondrion - The Powerhouse of the Cell', width / 2, -20);
  }

  // Draw mitochondrion
  AnatomicalShapes.drawMitochondrion(this.ctx, 0, 0, width, height);

  // Add function information
  if (showLabels) {
    this.ctx.fillStyle = '#FDECEA';
    this.ctx.fillRect(20, height - 110, 280, 90);
    this.ctx.strokeStyle = '#E74C3C';
    this.ctx.lineWidth = 2;
    this.ctx.strokeRect(20, height - 110, 280, 90);

    this.ctx.fillStyle = '#C0392B';
    this.ctx.font = 'bold 12px Arial';
    this.ctx.textAlign = 'left';
    this.ctx.fillText('Mitochondrial Functions:', 30, height - 90);
    
    this.ctx.font = '10px Arial';
    this.ctx.fillStyle = '#2C3E50';
    const functions = [
      '• ATP production via cellular respiration',
      '• Krebs cycle occurs in matrix',
      '• ETC located in inner membrane cristae',
      '• Contains own DNA and ribosomes',
      '• Thought to be ancient endosymbiotic bacteria'
    ];
    
    functions.forEach((func, i) => {
      this.ctx.fillText(func, 30, height - 72 + i * 13);
    });
  }

  this.ctx.restore();
}

renderElectronTransportChainDiagram(x, y, width, height, options = {}) {
  const { showLabels = true } = options;

  this.ctx.save();
  this.ctx.translate(x, y);

  // Title
  if (showLabels) {
    this.ctx.font = 'bold 24px Arial';
    this.ctx.fillStyle = '#2C3E50';
    this.ctx.textAlign = 'center';
    this.ctx.fillText('Electron Transport Chain & Chemiosmosis', width / 2, -20);
  }

  // Draw ETC
  AnatomicalShapes.drawElectronTransportChain(this.ctx, 0, 20, width, height - 40);

  // Add description
  if (showLabels) {
    this.ctx.font = '12px Arial';
    this.ctx.fillStyle = '#7F8C8D';
    this.ctx.textAlign = 'center';
    this.ctx.fillText('Produces ~32-34 ATP through oxidative phosphorylation', 
      width / 2, height - 5);
  }

  this.ctx.restore();
}

renderChloroplastStructureDiagram(x, y, width, height, options = {}) {
  const { showLabels = true } = options;

  this.ctx.save();
  this.ctx.translate(x, y);

  // Title
  if (showLabels) {
    this.ctx.font = 'bold 24px Arial';
    this.ctx.fillStyle = '#2C3E50';
    this.ctx.textAlign = 'center';
    this.ctx.fillText('Chloroplast Structure', width / 2, -20);
  }

  // Draw chloroplast
  AnatomicalShapes.drawChloroplastStructure(this.ctx, 0, 0, width, height);

  // Add function information
  if (showLabels) {
    this.ctx.fillStyle = '#E8F5E9';
    this.ctx.fillRect(20, height - 110, 300, 90);
    this.ctx.strokeStyle = '#388E3C';
    this.ctx.lineWidth = 2;
    this.ctx.strokeRect(20, height - 110, 300, 90);

    this.ctx.fillStyle = '#1B5E20';
    this.ctx.font = 'bold 12px Arial';
    this.ctx.textAlign = 'left';
    this.ctx.fillText('Chloroplast Functions:', 30, height - 90);
    
    this.ctx.font = '10px Arial';
    this.ctx.fillStyle = '#2C3E50';
    const functions = [
      '• Photosynthesis - converts light to chemical energy',
      '• Light reactions in thylakoid membranes',
      '• Calvin cycle in stroma',
      '• Contains own DNA and ribosomes',
      '• Found only in plant cells and some protists'
    ];
    
    functions.forEach((func, i) => {
      this.ctx.fillText(func, 30, height - 72 + i * 13);
    });
  }

  this.ctx.restore();
}

renderPhotosynthesisDetailedDiagram(x, y, width, height, options = {}) {
  const { showLabels = true, showBothStages = true } = options;

  this.ctx.save();
  this.ctx.translate(x, y);

  // Title
  if (showLabels) {
    this.ctx.font = 'bold 24px Arial';
    this.ctx.fillStyle = '#2C3E50';
    this.ctx.textAlign = 'center';
    this.ctx.fillText('Photosynthesis - Complete Process', width / 2, -20);
  }

  // Draw photosynthesis
  AnatomicalShapes.drawPhotosynthesisDetailed(this.ctx, 0, 0, width, height, showBothStages);

  // Add description
  if (showLabels) {
    this.ctx.font = '12px Arial';
    this.ctx.fillStyle = '#7F8C8D';
    this.ctx.textAlign = 'center';
    this.ctx.fillText('Converts light energy into chemical energy stored in glucose', 
      width / 2, height - 10);
  }

  this.ctx.restore();
}


renderNegativeFeedbackDiagram(x, y, width, height, options = {}) {
  const { showLabels = true, exampleType = 'general' } = options;

  this.ctx.save();
  this.ctx.translate(x, y);

  // Title
  if (showLabels) {
    this.ctx.font = 'bold 24px Arial';
    this.ctx.fillStyle = '#2C3E50';
    this.ctx.textAlign = 'center';
    
    const titles = {
      general: 'Negative Feedback Loop',
      temperature: 'Body Temperature Regulation',
      glucose: 'Blood Glucose Regulation'
    };
    
    this.ctx.fillText(titles[exampleType] || titles.general, width / 2, -20);
  }

  // Draw feedback loop
  AnatomicalShapes.drawNegativeFeedbackLoop(this.ctx, 0, 0, width, height, exampleType);

  // Add description
  if (showLabels) {
    this.ctx.font = '12px Arial';
    this.ctx.fillStyle = '#7F8C8D';
    this.ctx.textAlign = 'center';
    this.ctx.fillText('Maintains homeostasis by counteracting changes from set point', 
      width / 2, height - 10);
  }

  this.ctx.restore();
}

renderThermoregulationDiagram(x, y, width, height, options = {}) {
  const { showLabels = true } = options;

  this.ctx.save();
  this.ctx.translate(x, y);

  // Title
  if (showLabels) {
    this.ctx.font = 'bold 24px Arial';
    this.ctx.fillStyle = '#2C3E50';
    this.ctx.textAlign = 'center';
    this.ctx.fillText('Thermoregulation - Body Temperature Control', width / 2, -20);
  }

  // Draw thermoregulation
  AnatomicalShapes.drawThermoregulation(this.ctx, 0, 0, width, height);

  // Add key information
  if (showLabels) {
    // Control center info
    this.ctx.font = 'bold 11px Arial';
    this.ctx.fillStyle = '#2C3E50';
    this.ctx.textAlign = 'center';
    this.ctx.fillText('Control Center: Hypothalamus', width / 2, 20);
    
    // Set point info
    this.ctx.font = '12px Arial';
    this.ctx.fillStyle = '#7F8C8D';
    this.ctx.fillText('Normal human body temperature maintained at ~37°C (98.6°F)', 
      width / 2, height - 10);
  }

  this.ctx.restore();
}

renderBloodGlucoseRegulationDiagram(x, y, width, height, options = {}) {
  const { showLabels = true } = options;

  this.ctx.save();
  this.ctx.translate(x, y);

  // Title
  if (showLabels) {
    this.ctx.font = 'bold 24px Arial';
    this.ctx.fillStyle = '#2C3E50';
    this.ctx.textAlign = 'center';
    this.ctx.fillText('Blood Glucose Regulation', width / 2, -20);
  }

  // Draw regulation mechanism
  AnatomicalShapes.drawBloodGlucoseRegulation(this.ctx, 0, 0, width, height);

  // Add hormone legend
  if (showLabels) {
    this.drawLegend(width - 200, 50, [
      { color: '#8E44AD', label: 'Insulin (lowers glucose)' },
      { color: '#D35400', label: 'Glucagon (raises glucose)' }
    ]);
  }

  // Add description
  if (showLabels) {
    this.ctx.font = '12px Arial';
    this.ctx.fillStyle = '#7F8C8D';
    this.ctx.textAlign = 'center';
    this.ctx.fillText('Pancreatic hormones maintain blood glucose at ~90 mg/dL', 
      width / 2, height - 10);
  }

  this.ctx.restore();
}

renderWaterBalanceDiagram(x, y, width, height, options = {}) {
  const { showLabels = true } = options;

  this.ctx.save();
  this.ctx.translate(x, y);

  // Title
  if (showLabels) {
    this.ctx.font = 'bold 24px Arial';
    this.ctx.fillStyle = '#2C3E50';
    this.ctx.textAlign = 'center';
    this.ctx.fillText('Water Balance (Osmoregulation)', width / 2, -20);
  }

  // Draw water balance system
  AnatomicalShapes.drawWaterBalance(this.ctx, 0, 0, width, height);

  // Add key hormone info
  if (showLabels) {
    // ADH info box
    this.ctx.fillStyle = '#EBF5FB';
    this.ctx.fillRect(20, height - 120, 200, 100);
    this.ctx.strokeStyle = '#3498DB';
    this.ctx.lineWidth = 2;
    this.ctx.strokeRect(20, height - 120, 200, 100);

    this.ctx.fillStyle = '#3498DB';
    this.ctx.font = 'bold 12px Arial';
    this.ctx.textAlign = 'left';
    this.ctx.fillText('ADH (Antidiuretic Hormone)', 30, height - 100);
    
    this.ctx.font = '10px Arial';
    this.ctx.fillStyle = '#2C3E50';
    const adhInfo = [
      '• Also called Vasopressin',
      '• Produced by hypothalamus',
      '• Released by pituitary gland',
      '• Increases water reabsorption'
    ];
    
    adhInfo.forEach((info, i) => {
      this.ctx.fillText(info, 30, height - 80 + i * 15);
    });
  }

  // Add description
  if (showLabels) {
    this.ctx.font = '12px Arial';
    this.ctx.fillStyle = '#7F8C8D';
    this.ctx.textAlign = 'center';
    this.ctx.fillText('Kidneys regulate water balance in response to blood osmolarity changes', 
      width / 2, height - 10);
  }

  this.ctx.restore();
}

renderNephronDiagram(x, y, width, height, options = {}) {
  const { showLabels = true } = options;

  this.ctx.save();
  this.ctx.translate(x, y);

  // Title
  if (showLabels) {
    this.ctx.font = 'bold 24px Arial';
    this.ctx.fillStyle = '#2C3E50';
    this.ctx.textAlign = 'center';
    this.ctx.fillText('Kidney Nephron - Functional Unit', width / 2, -20);
  }

  // Draw nephron
  AnatomicalShapes.drawNephron(this.ctx, 0, 0, width, height);

  // Add process descriptions
  if (showLabels) {
    // Process info boxes
    const processes = [
      {
        title: 'Filtration',
        color: '#3498DB',
        x: width - 250,
        y: 50,
        points: [
          'Blood enters glomerulus',
          'Pressure filters small molecules',
          'Forms filtrate in Bowman\'s capsule'
        ]
      },
      {
        title: 'Reabsorption',
        color: '#2ECC71',
        x: width - 250,
        y: 170,
        points: [
          'Useful substances returned to blood',
          'Water, glucose, ions, amino acids',
          'Occurs in PCT, Loop, DCT'
        ]
      },
      {
        title: 'Secretion',
        color: '#9B59B6',
        x: width - 250,
        y: 290,
        points: [
          'Wastes added from blood to filtrate',
          'H+, K+, toxins, drugs',
          'Fine-tunes urine composition'
        ]
      }
    ];

    processes.forEach(proc => {
      // Box
      this.ctx.fillStyle = proc.color + '20';
      this.ctx.fillRect(proc.x, proc.y, 230, 80);
      this.ctx.strokeStyle = proc.color;
      this.ctx.lineWidth = 2;
      this.ctx.strokeRect(proc.x, proc.y, 230, 80);

      // Title
      this.ctx.fillStyle = proc.color;
      this.ctx.font = 'bold 12px Arial';
      this.ctx.textAlign = 'left';
      this.ctx.fillText(proc.title, proc.x + 10, proc.y + 20);

      // Points
      this.ctx.font = '10px Arial';
      this.ctx.fillStyle = '#2C3E50';
      proc.points.forEach((point, i) => {
        this.ctx.fillText('• ' + point, proc.x + 10, proc.y + 40 + i * 15);
      });
    });
  }

  // Add description
  if (showLabels) {
    this.ctx.font = '12px Arial';
    this.ctx.fillStyle = '#7F8C8D';
    this.ctx.textAlign = 'center';
    this.ctx.fillText('Each kidney contains ~1 million nephrons that filter blood and produce urine', 
      width / 2, height - 10);
  }

  // Add label callouts
  if (showLabels) {
    this.ctx.font = 'bold 11px Arial';
    this.ctx.fillStyle = '#E74C3C';
    this.ctx.textAlign = 'left';
    this.ctx.fillText('→ Urine to bladder', 320, height - 40);
  }

  this.ctx.restore();
}



renderFiveKingdomsDiagram(x, y, width, height, options = {}) {
  const { showLabels = true } = options;

  this.ctx.save();
  this.ctx.translate(x, y);

  // Title
  if (showLabels) {
    this.ctx.font = 'bold 24px Arial';
    this.ctx.fillStyle = '#2C3E50';
    this.ctx.textAlign = 'center';
    this.ctx.fillText('Five Kingdom Classification System', width / 2, -20);
  }

  // Draw kingdoms
  AnatomicalShapes.drawFiveKingdoms(this.ctx, 0, 0, width, height);

  // Add description
  if (showLabels) {
    this.ctx.font = '12px Arial';
    this.ctx.fillStyle = '#7F8C8D';
    this.ctx.textAlign = 'center';
    this.ctx.fillText('Traditional biological classification system', width / 2, height - 10);
  }

  this.ctx.restore();
}

renderThreeDomainsDiagram(x, y, width, height, options = {}) {
  const { showLabels = true } = options;

  this.ctx.save();
  this.ctx.translate(x, y);

  // Title
  if (showLabels) {
    this.ctx.font = 'bold 24px Arial';
    this.ctx.fillStyle = '#2C3E50';
    this.ctx.textAlign = 'center';
    this.ctx.fillText('Three Domain System', width / 2, -20);
  }

  // Draw domains
  AnatomicalShapes.drawThreeDomains(this.ctx, 0, 0, width, height);

  // Add description
  if (showLabels) {
    this.ctx.font = '12px Arial';
    this.ctx.fillStyle = '#7F8C8D';
    this.ctx.textAlign = 'center';
    this.ctx.fillText('Modern classification based on molecular and genetic evidence', width / 2, height - 10);
  }

  this.ctx.restore();
}

renderTaxonomyHierarchyDiagram(x, y, width, height, options = {}) {
  const { showLabels = true, showExample = true } = options;

  this.ctx.save();
  this.ctx.translate(x, y);

  // Title
  if (showLabels) {
    this.ctx.font = 'bold 24px Arial';
    this.ctx.fillStyle = '#2C3E50';
    this.ctx.textAlign = 'center';
    this.ctx.fillText('Taxonomic Hierarchy', width / 2, -20);
    
    if (showExample) {
      this.ctx.font = 'italic 14px Arial';
      this.ctx.fillStyle = '#7F8C8D';
      this.ctx.fillText('(Example: Lion - Panthera leo)', width / 2, 0);
    }
  }

  // Draw hierarchy
  AnatomicalShapes.drawTaxonomyHierarchy(this.ctx, 0, 30, width, height - 50, showExample);

  // Add mnemonic
  if (showLabels) {
    this.ctx.font = 'italic 11px Arial';
    this.ctx.fillStyle = '#95A5A6';
    this.ctx.textAlign = 'center';
    this.ctx.fillText('Mnemonic: King Philip Came Over For Good Soup', width / 2, height - 5);
  }

  this.ctx.restore();
}

renderDichotomousKeyDiagram(x, y, width, height, options = {}) {
  const { showLabels = true, keyType = 'leaves' } = options;

  this.ctx.save();
  this.ctx.translate(x, y);

  // Title
  if (showLabels) {
    this.ctx.font = 'bold 24px Arial';
    this.ctx.fillStyle = '#2C3E50';
    this.ctx.textAlign = 'center';
    const title = keyType === 'leaves' ? 'Dichotomous Key - Leaf Identification' : 
                  keyType === 'insects' ? 'Dichotomous Key - Insect Identification' :
                  'Dichotomous Key Example';
    this.ctx.fillText(title, width / 2, -20);
  }

  // Draw key
  AnatomicalShapes.drawDichotomousKey(this.ctx, 0, 20, width, height - 60, keyType);

  // Add legend
  if (showLabels) {
    this.drawLegend(20, height - 50, [
      { color: '#3498DB', label: 'Decision Node' },
      { color: '#2ECC71', label: 'Terminal (Identified Species)' }
    ]);
  }

  // Add description
  if (showLabels) {
    this.ctx.font = '11px Arial';
    this.ctx.fillStyle = '#7F8C8D';
    this.ctx.textAlign = 'center';
    this.ctx.fillText('Follow branches based on characteristics to identify organisms', 
      width / 2, height - 5);
  }

  this.ctx.restore();
}

renderCladogramDiagram(x, y, width, height, options = {}) {
  const { showLabels = true } = options;

  this.ctx.save();
  this.ctx.translate(x, y);

  // Title
  if (showLabels) {
    this.ctx.font = 'bold 24px Arial';
    this.ctx.fillStyle = '#2C3E50';
    this.ctx.textAlign = 'center';
    this.ctx.fillText('Cladogram - Vertebrate Evolution', width / 2, -20);
  }

  // Draw cladogram
  AnatomicalShapes.drawCladogram(this.ctx, 0, 20, width, height - 50);

  // Add description
  if (showLabels) {
    this.ctx.font = '12px Arial';
    this.ctx.fillStyle = '#7F8C8D';
    this.ctx.textAlign = 'center';
    this.ctx.fillText('Shows evolutionary relationships based on shared derived characteristics', 
      width / 2, height - 10);
  }

  this.ctx.restore();
}



renderGeneticEngineeringDiagram(x, y, width, height, options = {}) {
  const { showLabels = true } = options;
  
  this.ctx.save();
  this.ctx.translate(x, y);
  
  if(showLabels) {
    this.ctx.font = 'bold 24px Arial';
    this.ctx.fillStyle = '#2C3E50';
    this.ctx.textAlign = 'center';
    this.ctx.fillText('Genetic Engineering Process', width / 2, -20);
  }
  
  AnatomicalShapes.drawGeneticEngineering(this.ctx, 0, 0, width, height);
  
  this.ctx.restore();
}

renderGelElectrophoresisDiagram(x, y, width, height, options = {}) {
  const { showLabels = true, showBands = true } = options;
  
  this.ctx.save();
  this.ctx.translate(x, y);
  
  if(showLabels) {
    this.ctx.font = 'bold 24px Arial';
    this.ctx.fillStyle = '#2C3E50';
    this.ctx.textAlign = 'center';
    this.ctx.fillText('Gel Electrophoresis', width / 2, -20);
  }
  
  AnatomicalShapes.drawGelElectrophoresis(this.ctx, 0, 0, width, height, showBands);
  
  if(showLabels) {
    this.addLabel('Loading\nWells', width * 0.1, height * 0.26, '#5C6BC0');
    this.addLabel('Gel\nMatrix', width * 0.88, height * 0.5, '#C5CAE9');
    this.addLabel('DNA\nBands', width * 0.12, height * 0.6, '#4ECDC4');
  }
  
  this.ctx.restore();
}

renderCloningProcessDiagram(x, y, width, height, options = {}) {
  const { showLabels = true, cloningType = 'organismal' } = options;
  
  this.ctx.save();
  this.ctx.translate(x, y);
  
  if(showLabels) {
    this.ctx.font = 'bold 24px Arial';
    this.ctx.fillStyle = '#2C3E50';
    this.ctx.textAlign = 'center';
    const title = cloningType === 'organismal' ? 'Organismal Cloning Process' :
                  cloningType === 'gene' ? 'Gene Cloning' :
                  'Therapeutic Cloning';
    this.ctx.fillText(title, width / 2, -20);
  }
  
  AnatomicalShapes.drawCloningProcess(this.ctx, 0, 0, width, height, cloningType);
  
  this.ctx.restore();
}

renderCRISPRDiagram(x, y, width, height, options = {}) {
  const { showLabels = true } = options;
  
  this.ctx.save();
  this.ctx.translate(x, y);
  
  if(showLabels) {
    this.ctx.font = 'bold 24px Arial';
    this.ctx.fillStyle = '#2C3E50';
    this.ctx.textAlign = 'center';
    this.ctx.fillText('CRISPR-Cas9 Gene Editing', width / 2, -20);
  }
  
  AnatomicalShapes.drawCRISPR(this.ctx, 0, 0, width, height);
  
  this.ctx.restore();
}

renderBioreactorDiagram(x, y, width, height, options = {}) {
  const { showLabels = true } = options;
  
  this.ctx.save();
  this.ctx.translate(x, y);
  
  if(showLabels) {
    this.ctx.font = 'bold 24px Arial';
    this.ctx.fillStyle = '#2C3E50';
    this.ctx.textAlign = 'center';
    this.ctx.fillText('Bioreactor System', width / 2, -20);
  }
  
  AnatomicalShapes.drawBioreactor(this.ctx, 0, 0, width, height);
  
  if(showLabels) {
    this.addLabel('Culture\nVessel', width * 0.15, height * 0.45, '#1976D2');
    this.addLabel('Impeller\n(Stirrer)', width * 0.35, height * 0.35, '#424242');
    this.addLabel('Temp.\nSensor', width * 0.88, height * 0.22, '#E53935');
    this.addLabel('pH\nSensor', width * 0.88, height * 0.32, '#43A047');
    this.addLabel('Control\nPanel', width * 0.98, height * 0.475, '#37474F');
  }
  
  this.ctx.restore();
}

renderGMOProductionDiagram(x, y, width, height, options = {}) {
  const { showLabels = true } = options;
  
  this.ctx.save();
  this.ctx.translate(x, y);
  
  if(showLabels) {
    this.ctx.font = 'bold 24px Arial';
    this.ctx.fillStyle = '#2C3E50';
    this.ctx.textAlign = 'center';
    this.ctx.fillText('GMO Production Process', width / 2, -20);
  }
  
  AnatomicalShapes.drawGMOProduction(this.ctx, 0, 0, width, height);
  
  this.ctx.restore();
}

renderBacterialCellDiagram(x, y, width, height, options = {}) {
  const { showLabels = true } = options;
  
  this.ctx.save();
  this.ctx.translate(x, y);
  
  if(showLabels) {
    this.ctx.font = 'bold 24px Arial';
    this.ctx.fillStyle = '#2C3E50';
    this.ctx.textAlign = 'center';
    this.ctx.fillText('Bacterial Cell Structure', width / 2, -20);
  }
  
  AnatomicalShapes.drawBacterialCell(this.ctx, 0, 0, width, height);
  
  if(showLabels) {
    this.addLabel('Capsule', width * 0.15, height * 0.25, '#B8E6B8');
    this.addLabel('Cell Wall', width * 0.15, height * 0.35, '#2E5C8A');
    this.addLabel('Cell\nMembrane', width * 0.15, height * 0.45, '#7FB3D5');
    this.addLabel('Cytoplasm', width * 0.15, height * 0.55, '#ADD8E6');
    this.addLabel('Nucleoid\n(DNA)', width * 0.5, height * 0.65, '#FF6B9D');
    this.addLabel('Plasmid', width * 0.35, height * 0.75, '#FF1493');
    this.addLabel('Ribosomes', width * 0.65, height * 0.75, '#8B4789');
    this.addLabel('Flagellum', width * 0.85, height * 0.5, '#2C5F2D');
    this.addLabel('Pili', width * 0.25, height * 0.15, '#97BE5A');
  }
  
  this.ctx.restore();
}

renderVirusStructureDiagram(x, y, width, height, options = {}) {
  const { showLabels = true } = options;
  
  this.ctx.save();
  this.ctx.translate(x, y);
  
  if(showLabels) {
    this.ctx.font = 'bold 24px Arial';
    this.ctx.fillStyle = '#2C3E50';
    this.ctx.textAlign = 'center';
    this.ctx.fillText('Virus Structure', width / 2, -20);
  }
  
  AnatomicalShapes.drawVirusStructure(this.ctx, 0, 0, width, height);
  
  if(showLabels) {
    this.addLabel('Capsid\n(Protein Shell)', width * 0.15, height * 0.35, '#FF6B6B');
    this.addLabel('Capsomeres\n(Subunits)', width * 0.75, height * 0.3, '#FA5252');
    this.addLabel('Genetic Material\n(DNA/RNA)', width * 0.5, height * 0.65, '#4ECDC4');
    this.addLabel('Envelope\n(Lipid Layer)', width * 0.2, height * 0.65, '#FFD93D');
    this.addLabel('Spike\nProteins', width * 0.85, height * 0.5, '#FFA94D');
  }
  
  this.ctx.restore();
}

renderFungalCellDiagram(x, y, width, height, options = {}) {
  const { showLabels = true, showHyphae = true } = options;
  
  this.ctx.save();
  this.ctx.translate(x, y);
  
  if(showLabels) {
    this.ctx.font = 'bold 24px Arial';
    this.ctx.fillStyle = '#2C3E50';
    this.ctx.textAlign = 'center';
    const title = showHyphae ? 'Fungal Cell Structure & Hyphae' : 'Fungal Cell Structure';
    this.ctx.fillText(title, width / 2, -20);
  }
  
  AnatomicalShapes.drawFungalCell(this.ctx, 0, 0, width, height, showHyphae);
  
  if(showLabels) {
    if(showHyphae) {
      this.addLabel('Hyphae\n(Filaments)', width * 0.15, height * 0.5, '#D4A373');
      this.addLabel('Septa\n(Cross-walls)', width * 0.25, height * 0.7, '#8B4513');
    }
    
    const labelX = showHyphae ? width * 0.75 : width * 0.75;
    const labelY = showHyphae ? height * 0.3 : height * 0.5;
    
    this.addLabel('Cell Wall\n(Chitin)', labelX, labelY - height * 0.15, '#8B7355');
    this.addLabel('Nucleus', labelX, labelY, '#9B59B6');
    this.addLabel('Mitochondria', labelX, labelY + height * 0.12, '#FF69B4');
    this.addLabel('Vacuole', labelX, labelY + height * 0.22, '#4682B4');
  }
  
  this.ctx.restore();
}

renderProtistsDiagram(x, y, width, height, options = {}) {
  const { showLabels = true } = options;
  
  this.ctx.save();
  this.ctx.translate(x, y);
  
  if(showLabels) {
    this.ctx.font = 'bold 24px Arial';
    this.ctx.fillStyle = '#2C3E50';
    this.ctx.textAlign = 'center';
    this.ctx.fillText('Protist Diversity', width / 2, -20);
  }
  
  AnatomicalShapes.drawProtists(this.ctx, 0, 0, width, height);
  
  if(showLabels) {
    const protistWidth = width / 3;
    
    // Amoeba labels
    this.addLabel('Pseudopodia', protistWidth * 0.85, height * 0.28, '#4CAF50');
    this.addLabel('Nucleus', protistWidth * 0.5, height * 0.58, '#9C27B0');
    this.addLabel('Food\nVacuole', protistWidth * 0.65, height * 0.48, '#FFE082');
    this.addLabel('Contractile\nVacuole', protistWidth * 0.75, height * 0.6, '#64B5F6');
    
    // Paramecium labels
    this.addLabel('Cilia', protistWidth * 1.2, height * 0.38, '#4FC3F7');
    this.addLabel('Oral\nGroove', protistWidth * 1.3, height * 0.48, '#01579B');
    this.addLabel('Macro-\nnucleus', protistWidth * 1.65, height * 0.55, '#7E57C2');
    
    // Euglena labels
    this.addLabel('Flagellum', protistWidth * 2.65, height * 0.12, '#558B2F');
    this.addLabel('Eyespot', protistWidth * 2.65, height * 0.35, '#FF5722');
    this.addLabel('Chloro-\nplasts', protistWidth * 2.75, height * 0.55, '#4CAF50');
  }
  
  this.ctx.restore();
}

renderBacterialGrowthCurveDiagram(x, y, width, height, options = {}) {
  const { showLabels = true } = options;
  
  this.ctx.save();
  this.ctx.translate(x, y);
  
  if(showLabels) {
    this.ctx.font = 'bold 24px Arial';
    this.ctx.fillStyle = '#2C3E50';
    this.ctx.textAlign = 'center';
    this.ctx.fillText('Bacterial Growth Curve', width / 2, -20);
  }
  
  AnatomicalShapes.drawBacterialGrowthCurve(this.ctx, 0, 0, width, height);
  
  this.ctx.restore();
}

renderViralReplicationDiagram(x, y, width, height, options = {}) {
  const { showLabels = true, cycleType = 'both' } = options;
  
  this.ctx.save();
  this.ctx.translate(x, y);
  
  if(showLabels) {
    this.ctx.font = 'bold 24px Arial';
    this.ctx.fillStyle = '#2C3E50';
    this.ctx.textAlign = 'center';
    const title = cycleType === 'both' ? 'Viral Replication Cycles' :
                  cycleType === 'lytic' ? 'Lytic Cycle' :
                  'Lysogenic Cycle';
    this.ctx.fillText(title, width / 2, -20);
  }
  
  AnatomicalShapes.drawViralReplicationCycles(this.ctx, 0, 0, width, height, cycleType);
  
  this.ctx.restore();
}

renderMicroscopyDiagram(x, y, width, height, options = {}) {
  const { showLabels = true } = options;
  
  this.ctx.save();
  this.ctx.translate(x, y);
  
  if(showLabels) {
    this.ctx.font = 'bold 24px Arial';
    this.ctx.fillStyle = '#2C3E50';
    this.ctx.textAlign = 'center';
    this.ctx.fillText('Microscopy Types Comparison', width / 2, -20);
  }
  
  AnatomicalShapes.drawMicroscopyComparison(this.ctx, 0, 0, width, height);
  
  if(showLabels) {
    // Additional comparison info
    this.ctx.font = '11px Arial';
    this.ctx.fillStyle = '#2C3E50';
    this.ctx.textAlign = 'center';
    
    this.ctx.fillText('Resolution: ~200 nm', width * 0.25, height * 0.99);
    this.ctx.fillText('Live specimens: Yes', width * 0.25, height * 1.02);
    
    this.ctx.fillText('Resolution: ~0.1 nm', width * 0.75, height * 0.99);
    this.ctx.fillText('Live specimens: No (vacuum)', width * 0.75, height * 1.02);
  }
  
  this.ctx.restore();
}


renderLeafCrossSectionDiagram(x, y, width, height, options = {}) {
  const { showLabels = true } = options;
  
  this.ctx.save();
  this.ctx.translate(x, y);
  
  if(showLabels) {
    this.ctx.font = 'bold 24px Arial';
    this.ctx.fillStyle = '#2C3E50';
    this.ctx.textAlign = 'center';
    this.ctx.fillText('Leaf Cross-Section', width / 2, -20);
  }
  
  AnatomicalShapes.drawLeafCrossSection(this.ctx, 0, 0, width, height);
  
  if(showLabels) {
    this.addLabel('Cuticle', width * 0.85, height * 0.05, '#FFD700');
    this.addLabel('Upper\nEpidermis', width * 0.85, height * 0.1, '#228B22');
    this.addLabel('Palisade\nMesophyll', width * 0.05, height * 0.2, '#32CD32');
    this.addLabel('Spongy\nMesophyll', width * 0.05, height * 0.5, '#98FB98');
    this.addLabel('Vascular\nBundle', width * 0.65, height * 0.5, '#8B4513');
    this.addLabel('Xylem', width * 0.65, height * 0.46, '#D2691E');
    this.addLabel('Phloem', width * 0.65, height * 0.54, '#DEB887');
    this.addLabel('Lower\nEpidermis', width * 0.85, height * 0.92, '#228B22');
    this.addLabel('Stomata', width * 0.15, height * 0.9, '#ADFF2F');
    this.addLabel('Guard\nCells', width * 0.08, height * 0.88, '#ADFF2F');
  }
  
  this.ctx.restore();
}

renderPhotosynthesisDiagram(x, y, width, height, options = {}) {
  const { showLabels = true, showEquation = true } = options;
  
  this.ctx.save();
  this.ctx.translate(x, y);
  
  if(showLabels) {
    this.ctx.font = 'bold 24px Arial';
    this.ctx.fillStyle = '#2C3E50';
    this.ctx.textAlign = 'center';
    this.ctx.fillText('Photosynthesis Process', width / 2, -20);
  }
  
  AnatomicalShapes.drawPhotosynthesisProcess(this.ctx, 0, 0, width, height, showEquation);
  
  if(showLabels) {
    this.addLabel('Chloroplast', width * 0.5, height * 0.72, '#228B22');
    this.addLabel('Thylakoid\n(Grana)', width * 0.25, height * 0.52, '#006400');
    this.addLabel('Stroma', width * 0.75, height * 0.52, '#90EE90');
  }
  
  this.ctx.restore();
}

renderStomataDiagram(x, y, width, height, options = {}) {
  const { showLabels = true, state = 'both' } = options;
  
  this.ctx.save();
  this.ctx.translate(x, y);
  
  if(showLabels) {
    this.ctx.font = 'bold 24px Arial';
    this.ctx.fillStyle = '#2C3E50';
    this.ctx.textAlign = 'center';
    const title = state === 'both' ? 'Stomata Structure - Open vs Closed' :
                  state === 'open' ? 'Stomata - Open State' :
                  'Stomata - Closed State';
    this.ctx.fillText(title, width / 2, -20);
  }
  
  AnatomicalShapes.drawStomata(this.ctx, 0, 0, width, height, state);
  
  if(showLabels && state === 'both') {
    this.addLabel('Guard Cells', width * 0.2, height * 0.48, '#32CD32');
    this.addLabel('Stomatal\nPore', width * 0.2, height * 0.55, '#FFFFFF');
    this.addLabel('Epidermal\nCells', width * 0.05, height * 0.35, '#ADFF2F');
  }
  
  this.ctx.restore();
}

renderXylemPhloemDiagram(x, y, width, height, options = {}) {
  const { showLabels = true } = options;
  
  this.ctx.save();
  this.ctx.translate(x, y);
  
  if(showLabels) {
    this.ctx.font = 'bold 24px Arial';
    this.ctx.fillStyle = '#2C3E50';
    this.ctx.textAlign = 'center';
    this.ctx.fillText('Xylem & Phloem - Vascular Tissue', width / 2, -20);
  }
  
  AnatomicalShapes.drawXylemPhloem(this.ctx, 0, 0, width, height);
  
  if(showLabels) {
    this.addLabel('XYLEM', width * 0.425, height * 0.05, '#8B4513');
    this.addLabel('(Water Transport)', width * 0.425, height * 0.08, '#8B4513');
    this.addLabel('Vessel\nCells', width * 0.42, height * 0.5, '#D2691E');
    this.addLabel('PHLOEM', width * 0.575, height * 0.05, '#DEB887');
    this.addLabel('(Sugar Transport)', width * 0.575, height * 0.08, '#DEB887');
    this.addLabel('Sieve\nTube', width * 0.595, height * 0.5, '#D2691E');
    this.addLabel('Companion\nCells', width * 0.53, height * 0.5, '#F4A460');
  }
  
  this.ctx.restore();
}

renderFlowerStructureDiagram(x, y, width, height, options = {}) {
  const { showLabels = true } = options;
  
  this.ctx.save();
  this.ctx.translate(x, y);
  
  if(showLabels) {
    this.ctx.font = 'bold 24px Arial';
    this.ctx.fillStyle = '#2C3E50';
    this.ctx.textAlign = 'center';
    this.ctx.fillText('Flower Anatomy', width / 2, -20);
  }
  
  AnatomicalShapes.drawFlowerStructure(this.ctx, 0, 0, width, height);
  
  if(showLabels) {
    // Pistil (female parts)
    this.addLabel('Stigma', width * 0.55, height * 0.32, '#FFD700');
    this.addLabel('Style', width * 0.55, height * 0.42, '#F0E68C');
    this.addLabel('Ovary', width * 0.55, height * 0.6, '#ADFF2F');
    this.addLabel('Ovules', width * 0.55, height * 0.55, '#FFE4B5');
    
    // Stamens (male parts)
    this.addLabel('Anther', width * 0.65, height * 0.42, '#FFA500');
    this.addLabel('Filament', width * 0.7, height * 0.58, '#FFDAB9');
    this.addLabel('Pollen', width * 0.72, height * 0.38, '#FFD700');
    
    // Other parts
    this.addLabel('Petals', width * 0.25, height * 0.35, '#FF69B4');
    this.addLabel('Sepals', width * 0.2, height * 0.65, '#7CFC00');
    this.addLabel('Receptacle', width * 0.35, height * 0.85, '#90EE90');
    this.addLabel('Pedicel\n(stalk)', width * 0.35, height * 0.95, '#8FBC8F');
  }
  
  this.ctx.restore();
}

renderSeedGerminationDiagram(x, y, width, height, options = {}) {
  const { showLabels = true } = options;
  
  this.ctx.save();
  this.ctx.translate(x, y);
  
  if(showLabels) {
    this.ctx.font = 'bold 24px Arial';
    this.ctx.fillStyle = '#2C3E50';
    this.ctx.textAlign = 'center';
    this.ctx.fillText('Seed Germination Stages', width / 2, -20);
  }
  
  AnatomicalShapes.drawSeedGermination(this.ctx, 0, 0, width, height);
  
  this.ctx.restore();
}

renderTropismsDiagram(x, y, width, height, options = {}) {
  const { showLabels = true } = options;
  
  this.ctx.save();
  this.ctx.translate(x, y);
  
  if(showLabels) {
   this.ctx.font = 'bold 24px Arial';
    this.ctx.fillStyle = '#2C3E50';
    this.ctx.textAlign = 'center';
    this.ctx.fillText('Plant Tropisms', width / 2, -20);
  }
  
  AnatomicalShapes.drawTropisms(this.ctx, 0, 0, width, height);
  
  this.ctx.restore();
}



renderDigestiveSystemDiagram(x, y, width, height, options = {}) {
  const { showLabels = true, showPath = true } = options;
  
  this.ctx.save();
  this.ctx.translate(x, y);
  
  if(showLabels) {
    this.ctx.font = 'bold 24px Arial';
    this.ctx.fillStyle = '#2C3E50';
    this.ctx.textAlign = 'center';
    this.ctx.fillText('Human Digestive System', width / 2, -20);
  }
  
  AnatomicalShapes.drawDigestiveSystem(this.ctx, 0, 0, width, height, showPath);
  
  if(showLabels) {
    this.addLabel('Mouth', width * 0.5, height * 0.05, '#8B4513');
    this.addLabel('Esophagus', width * 0.58, height * 0.12, '#A0522D');
    this.addLabel('Liver', width * 0.72, height * 0.18, '#654321');
    this.addLabel('Stomach', width * 0.25, height * 0.25, '#E74C3C');
    this.addLabel('Pancreas', width * 0.65, height * 0.28, '#9B59B6');
    this.addLabel('Small\nIntestine', width * 0.85, height * 0.55, '#F39C12');
    this.addLabel('Large\nIntestine', width * 0.15, height * 0.6, '#E67E22');
    this.addLabel('Rectum', width * 0.5, height * 0.94, '#D35400');
  }
  
  this.ctx.restore();
}

renderNervousSystemDiagram(x, y, width, height, options = {}) {
  const { showLabels = true, showSignal = false } = options;
  
  this.ctx.save();
  this.ctx.translate(x, y);
  
  if(showLabels) {
    this.ctx.font = 'bold 24px Arial';
    this.ctx.fillStyle = '#2C3E50';
    this.ctx.textAlign = 'center';
    this.ctx.fillText('Human Nervous System', width / 2, -20);
  }
  
  AnatomicalShapes.drawNervousSystem(this.ctx, 0, 0, width, height, showSignal);
  
  if(showLabels) {
    this.addLabel('Brain (CNS)', width * 0.7, height * 0.08, '#C0392B');
    this.addLabel('Spinal Cord\n(CNS)', width * 0.65, height * 0.35, '#E67E22');
    this.addLabel('Peripheral\nNerves', width * 0.15, height * 0.4, '#F39C12');
    this.addLabel('Motor\nNeurons', width * 0.85, height * 0.65, '#F7DC6F');
  }
  
  this.ctx.restore();
}

renderEndocrineSystemDiagram(x, y, width, height, options = {}) {
  const { showLabels = true } = options;
  
  this.ctx.save();
  this.ctx.translate(x, y);
  
  if(showLabels) {
    this.ctx.font = 'bold 24px Arial';
    this.ctx.fillStyle = '#2C3E50';
    this.ctx.textAlign = 'center';
    this.ctx.fillText('Human Endocrine System', width / 2, -20);
  }
  
  AnatomicalShapes.drawEndocrineSystem(this.ctx, 0, 0, width, height);
  
  if(showLabels) {
    this.addLabel('Pineal Gland', width * 0.65, height * 0.08, '#9B59B6');
    this.addLabel('Pituitary\nGland', width * 0.7, height * 0.12, '#E67E22');
    this.addLabel('Thyroid', width * 0.7, height * 0.18, '#16A085');
    this.addLabel('Thymus', width * 0.7, height * 0.3, '#F39C12');
    this.addLabel('Adrenal\nGlands', width * 0.2, height * 0.42, '#E74C3C');
    this.addLabel('Pancreas', width * 0.7, height * 0.5, '#9B59B6');
    this.addLabel('Gonads', width * 0.7, height * 0.7, '#3498DB');
  }
  
  this.ctx.restore();
}

renderReproductiveSystemDiagram(x, y, width, height, options = {}) {
  const { showLabels = true, sex = 'both' } = options;
  
  this.ctx.save();
  this.ctx.translate(x, y);
  
  if(showLabels) {
    this.ctx.font = 'bold 24px Arial';
    this.ctx.fillStyle = '#2C3E50';
    this.ctx.textAlign = 'center';
    const title = sex === 'both' ? 'Human Reproductive Systems' :
                  sex === 'male' ? 'Male Reproductive System' :
                  'Female Reproductive System';
    this.ctx.fillText(title, width / 2, -20);
  }
  
  AnatomicalShapes.drawReproductiveSystem(this.ctx, 0, 0, width, height, sex);
  
  if(showLabels) {
    if(sex === 'male' || sex === 'both') {
      const xOffset = sex === 'both' ? 0 : width * 0.25;
      this.addLabel('Testes', xOffset + width * 0.27, height * 0.78, '#3498DB');
      this.addLabel('Vas\nDeferens', xOffset + width * 0.15, height * 0.5, '#5DADE2');
      this.addLabel('Prostate', xOffset + width * 0.35, height * 0.39, '#85C1E2');
    }
    
    if(sex === 'female' || sex === 'both') {
      const xOffset = sex === 'both' ? width * 0.5 : width * 0.25;
      this.addLabel('Ovaries', xOffset + width * 0.05, height * 0.4, '#E74C3C');
      this.addLabel('Fallopian\nTubes', xOffset + width * 0.25, height * 0.3, '#F5B7B1');
      this.addLabel('Uterus', xOffset + width * 0.35, height * 0.55, '#E67E22');
      this.addLabel('Vagina', xOffset + width * 0.35, height * 0.75, '#F0B27A');
    }
  }
  
  this.ctx.restore();
}

renderImmuneSystemDiagram(x, y, width, height, options = {}) {
  const { showLabels = true } = options;
  
  this.ctx.save();
  this.ctx.translate(x, y);
  
  if(showLabels) {
    this.ctx.font = 'bold 24px Arial';
    this.ctx.fillStyle = '#2C3E50';
    this.ctx.textAlign = 'center';
    this.ctx.fillText('Human Immune System', width / 2, -20);
  }
  
  AnatomicalShapes.drawImmuneSystem(this.ctx, 0, 0, width, height);
  
  if(showLabels) {
    this.addLabel('Thymus', width * 0.65, height * 0.25, '#F39C12');
    this.addLabel('Spleen', width * 0.2, height * 0.45, '#8B4513');
    this.addLabel('Bone\nMarrow', width * 0.1, height * 0.62, '#9B59B6');
    this.addLabel('Lymph\nNodes', width * 0.15, height * 0.35, '#3498DB');
    this.addLabel('Lymphatic\nVessels', width * 0.85, height * 0.7, '#85C1E2');
  }
  
  this.ctx.restore();
}

renderSynapseDiagram(x, y, width, height, options = {}) {
  const { showLabels = true } = options;
  
  this.ctx.save();
  this.ctx.translate(x, y);
  
  if(showLabels) {
    this.ctx.font = 'bold 24px Arial';
    this.ctx.fillStyle = '#2C3E50';
    this.ctx.textAlign = 'center';
    this.ctx.fillText('Synaptic Transmission', width / 2, -20);
  }
  
  AnatomicalShapes.drawSynapse(this.ctx, 0, 0, width, height);
  
  if(showLabels) {
    this.addLabel('Presynaptic\nTerminal', width * 0.3, height * 0.05, '#C0392B');
    this.addLabel('Synaptic\nVesicles', width * 0.25, height * 0.45, '#E74C3C');
    this.addLabel('Synaptic\nCleft', width * 0.5, height * 0.02, '#7F8C8D');
    this.addLabel('Neuro-\ntransmitters', width * 0.5, height * 0.55, '#F39C12');
    this.addLabel('Receptors', width * 0.6, height * 0.55, '#3498DB');
    this.addLabel('Postsynaptic\nMembrane', width * 0.7, height * 0.05, '#5DADE2');
  }
  this.ctx.restore();

}




renderFoodWebDiagram(x, y, width, height, options = {}) {
    const { showLabels = true } = options;
    
    this.ctx.save();
    this.ctx.translate(x, y);
    
    // Title
    this.ctx.font = 'bold 24px Arial';
    this.ctx.fillStyle = '#2C3E50';
    this.ctx.textAlign = 'center';
    this.ctx.fillText('Food Web', width / 2, -30);
    
    // Subtitle
    this.ctx.font = '14px Arial';
    this.ctx.fillStyle = '#7F8C8D';
    this.ctx.fillText('Complex feeding relationships in an ecosystem', width / 2, -10);
    
    // Draw food web
    AnatomicalShapes.drawFoodWeb(this.ctx, 0, 0, width, height);
    
    if(showLabels) {
        // Note
        this.ctx.fillStyle = '#2C3E50';
        this.ctx.font = 'italic 11px Arial';
        this.ctx.textAlign = 'center';
        this.ctx.fillText('Arrows show direction of energy flow', width * 0.5, height * 0.98);
    }
    
    this.ctx.restore();
}

renderCarbonCycleDiagram(x, y, width, height, options = {}) {
    const { showLabels = true } = options;
    
    this.ctx.save();
    this.ctx.translate(x, y);
    
    // Title
    this.ctx.font = 'bold 24px Arial';
    this.ctx.fillStyle = '#2C3E50';
    this.ctx.textAlign = 'center';
    this.ctx.fillText('Carbon Cycle', width / 2, -30);
    
    // Subtitle
    this.ctx.font = '14px Arial';
    this.ctx.fillStyle = '#7F8C8D';
    this.ctx.fillText('Movement of carbon through Earth\'s systems', width / 2, -10);
    
    // Draw carbon cycle
    AnatomicalShapes.drawCarbonCycle(this.ctx, 0, 0, width, height);
    
    if(showLabels) {
        // Human impact note
        this.ctx.strokeStyle = '#E74C3C';
        this.ctx.lineWidth = 2;
        this.ctx.strokeRect(width * 0.02, height * 0.92, width * 0.4, height * 0.06);
        
        this.ctx.fillStyle = '#E74C3C';
        this.ctx.font = 'bold 11px Arial';
        this.ctx.textAlign = 'left';
        this.ctx.fillText('Human Impact: Burning fossil fuels increases', width * 0.03, height * 0.955);
        this.ctx.fillText('atmospheric CO₂ (greenhouse effect)', width * 0.03, height * 0.97);
    }
    
    this.ctx.restore();
}

renderNitrogenCycleDiagram(x, y, width, height, options = {}) {
    const { showLabels = true } = options;
    
    this.ctx.save();
    this.ctx.translate(x, y);
    
    // Title
    this.ctx.font = 'bold 24px Arial';
    this.ctx.fillStyle = '#2C3E50';
    this.ctx.textAlign = 'center';
    this.ctx.fillText('Nitrogen Cycle', width / 2, -30);
    
    // Subtitle
    this.ctx.font = '14px Arial';
    this.ctx.fillStyle = '#7F8C8D';
    this.ctx.fillText('Nitrogen transformation through ecosystems', width / 2, -10);
    
    // Draw nitrogen cycle
    AnatomicalShapes.drawNitrogenCycle(this.ctx, 0, 0, width, height);
    
    if(showLabels) {
        // Bacteria role box
        this.ctx.strokeStyle = '#4CAF50';
        this.ctx.lineWidth = 2;
        this.ctx.strokeRect(width * 0.55, height * 0.02, width * 0.43, height * 0.08);
        
        this.ctx.fillStyle = '#2C3E50';
        this.ctx.font = 'bold 11px Arial';
        this.ctx.textAlign = 'left';
        this.ctx.fillText('Key Role of Bacteria:', width * 0.57, height * 0.045);
        
        this.ctx.font = '10px Arial';
        this.ctx.fillStyle = '#7F8C8D';
        this.ctx.fillText('• Nitrogen fixation (Rhizobium, Azotobacter)', width * 0.57, height * 0.06);
        this.ctx.fillText('• Nitrification (Nitrosomonas, Nitrobacter)', width * 0.57, height * 0.075);
        this.ctx.fillText('• Denitrification (Pseudomonas)', width * 0.57, height * 0.09);
    }
    
    this.ctx.restore();
}

renderWaterCycleDiagram(x, y, width, height, options = {}) {
    const { showLabels = true } = options;
    
    this.ctx.save();
    this.ctx.translate(x, y);
    
    // Title
    this.ctx.font = 'bold 24px Arial';
    this.ctx.fillStyle = '#2C3E50';
    this.ctx.textAlign = 'center';
    this.ctx.fillText('Water Cycle (Hydrological Cycle)', width / 2, -30);
    
    // Subtitle
    this.ctx.font = '14px Arial';
    this.ctx.fillStyle = '#7F8C8D';
    this.ctx.fillText('Continuous movement of water on, above, and below Earth\'s surface', width / 2, -10);
    
    // Draw water cycle
    AnatomicalShapes.drawWaterCycle(this.ctx, 0, 0, width, height);
    
    this.ctx.restore();
}

renderPopulationGrowthDiagram(x, y, width, height, options = {}) {
    const { showLabels = true, showBoth = true } = options;
    
    this.ctx.save();
    this.ctx.translate(x, y);
    
    // Title
    this.ctx.font = 'bold 24px Arial';
    this.ctx.fillStyle = '#2C3E50';
    this.ctx.textAlign = 'center';
    this.ctx.fillText('Population Growth Curves', width / 2, -30);
    
    // Subtitle
    this.ctx.font = '14px Arial';
    this.ctx.fillStyle = '#7F8C8D';
    this.ctx.fillText('Exponential vs Logistic Growth', width / 2, -10);
    
    // Draw growth curves
    AnatomicalShapes.drawPopulationGrowth(this.ctx, 0, 0, width, height);
    
    if(showLabels) {
        // Growth equations
        this.ctx.fillStyle = '#2C3E50';
        this.ctx.font = 'bold 12px Arial';
        this.ctx.textAlign = 'left';
        
        // Exponential
        this.ctx.fillStyle = '#E74C3C';
        this.ctx.fillText('Exponential: dN/dt = rN', width * 0.02, height * 0.88);
        
        // Logistic
        this.ctx.fillStyle = '#2196F3';
        this.ctx.fillText('Logistic: dN/dt = rN(1 - N/K)', width * 0.02, height * 0.92);
        
        this.ctx.font = '10px Arial';
        this.ctx.fillStyle = '#7F8C8D';
        this.ctx.fillText('r = growth rate, N = population size, K = carrying capacity', width * 0.02, height * 0.96);
    }
    
    this.ctx.restore();
}

renderEcosystemDiagram(x, y, width, height, options = {}) {
    const { showLabels = true, ecosystemType = 'forest' } = options;
    
    this.ctx.save();
    this.ctx.translate(x, y);
    
    // Title
    const titles = {
        'forest': 'Forest Ecosystem',
        'aquatic': 'Aquatic Ecosystem',
        'grassland': 'Grassland Ecosystem'
    };
    
    this.ctx.font = 'bold 24px Arial';
    this.ctx.fillStyle = '#2C3E50';
    this.ctx.textAlign = 'center';
    this.ctx.fillText(titles[ecosystemType], width / 2, -30);
    
    // Subtitle
    this.ctx.font = '14px Arial';
    this.ctx.fillStyle = '#7F8C8D';
    this.ctx.fillText('Biotic and abiotic components', width / 2, -10);
    
    // Draw ecosystem
    AnatomicalShapes.drawEcosystem(this.ctx, 0, 0, width, height, ecosystemType);
    
    this.ctx.restore();
}

renderPredatorPreyDiagram(x, y, width, height, options = {}) {
    const { showLabels = true } = options;
    
    this.ctx.save();
    this.ctx.translate(x, y);
    
    // Title
    this.ctx.font = 'bold 24px Arial';
    this.ctx.fillStyle = '#2C3E50';
    this.ctx.textAlign = 'center';
    this.ctx.fillText('Predator-Prey Dynamics', width / 2, -30);
    
    // Subtitle
    this.ctx.font = '14px Arial';
    this.ctx.fillStyle = '#7F8C8D';
    this.ctx.fillText('Lotka-Volterra Model', width / 2, -10);
    
    // Draw predator-prey graph
    AnatomicalShapes.drawPredatorPreyGraph(this.ctx, 0, 0, width, height);
    
    this.ctx.restore();
}


// Add these methods to AnatomicalDiagramRenderer class:
renderDarwinsFinchesDiagram(x, y, width, height, options = {}) {
    const { showLabels = true } = options;
    
    this.ctx.save();
    this.ctx.translate(x, y);
    
    // Title
    this.ctx.font = 'bold 24px Arial';
    this.ctx.fillStyle = '#2C3E50';
    this.ctx.textAlign = 'center';
    this.ctx.fillText("Darwin's Finches - Adaptive Radiation", width / 2, -30);
    
    // Subtitle
    this.ctx.font = '14px Arial';
    this.ctx.fillStyle = '#7F8C8D';
    this.ctx.fillText('Galapagos Islands - Beak adaptations for different food sources', width / 2, -10);
    
    // Draw finches
    AnatomicalShapes.drawDarwinsFinches(this.ctx, 0, 0, width, height);
    
    if(showLabels) {
        // Key concept box
        this.ctx.strokeStyle = '#4CAF50';
        this.ctx.lineWidth = 3;
        this.ctx.strokeRect(width * 0.02, height * 0.02, width * 0.35, height * 0.12);
        
        this.ctx.fillStyle = '#2C3E50';
        this.ctx.font = 'bold 12px Arial';
        this.ctx.textAlign = 'left';
        this.ctx.fillText('Natural Selection:', width * 0.04, height * 0.05);
        
        this.ctx.font = '10px Arial';
        this.ctx.fillStyle = '#7F8C8D';
        this.ctx.fillText('• Beak shape matches food source', width * 0.04, height * 0.08);
        this.ctx.fillText('• Better adapted birds survive', width * 0.04, height * 0.10);
        this.ctx.fillText('• Traits passed to offspring', width * 0.04, height * 0.12);
    }
    
    this.ctx.restore();
}

renderNaturalSelectionDiagram(x, y, width, height, options = {}) {
    const { showLabels = true } = options;
    
    this.ctx.save();
    this.ctx.translate(x, y);
    
    // Title
    this.ctx.font = 'bold 24px Arial';
    this.ctx.fillStyle = '#2C3E50';
    this.ctx.textAlign = 'center';
    this.ctx.fillText('Natural Selection Process', width / 2, -30);
    
    // Subtitle
    this.ctx.font = '14px Arial';
    this.ctx.fillStyle = '#7F8C8D';
    this.ctx.fillText('Mechanism of Evolution', width / 2, -10);
    
    // Draw process
    AnatomicalShapes.drawNaturalSelectionProcess(this.ctx, 0, 0, width, height);
    
    this.ctx.restore();
}

renderPhylogeneticTreeDiagram(x, y, width, height, options = {}) {
    const { showLabels = true } = options;
    
    this.ctx.save();
    this.ctx.translate(x, y);
    
    // Title
    this.ctx.font = 'bold 24px Arial';
    this.ctx.fillStyle = '#2C3E50';
    this.ctx.textAlign = 'center';
    this.ctx.fillText('Phylogenetic Tree - Tree of Life', width / 2, -30);
    
    // Subtitle
    this.ctx.font = '14px Arial';
    this.ctx.fillStyle = '#7F8C8D';
    this.ctx.fillText('Evolutionary relationships between major groups', width / 2, -10);
    
    // Draw tree
    AnatomicalShapes.drawPhylogeneticTree(this.ctx, 0, 0, width, height);
    
    if(showLabels) {
        // Key concept
        this.ctx.fillStyle = '#2C3E50';
        this.ctx.font = '11px Arial';
        this.ctx.textAlign = 'left';
        this.ctx.fillText('Branch points = common ancestors', width * 0.05, height * 0.05);
        this.ctx.fillText('Branch length = evolutionary time', width * 0.05, height * 0.08);
    }
    
    this.ctx.restore();
}

renderAdaptiveRadiationDiagram(x, y, width, height, options = {}) {
    const { showLabels = true } = options;
    
    this.ctx.save();
    this.ctx.translate(x, y);
    
    // Title
    this.ctx.font = 'bold 24px Arial';
    this.ctx.fillStyle = '#2C3E50';
    this.ctx.textAlign = 'center';
    this.ctx.fillText('Adaptive Radiation', width / 2, -30);
    
    // Subtitle
    this.ctx.font = '14px Arial';
    this.ctx.fillStyle = '#7F8C8D';
    this.ctx.fillText('Single ancestor diversifies into multiple species', width / 2, -10);
    
    // Draw radiation
    AnatomicalShapes.drawAdaptiveRadiation(this.ctx, 0, 0, width, height);
    
    if(showLabels) {
        // Conditions box
        this.ctx.strokeStyle = '#9C27B0';
        this.ctx.lineWidth = 2;
        this.ctx.strokeRect(width * 0.02, height * 0.88, width * 0.45, height * 0.1);
        
        this.ctx.fillStyle = '#2C3E50';
        this.ctx.font = 'bold 11px Arial';
        this.ctx.textAlign = 'left';
        this.ctx.fillText('Common Triggers:', width * 0.04, height * 0.91);
        
        this.ctx.font = '10px Arial';
        this.ctx.fillStyle = '#7F8C8D';
        this.ctx.fillText('• New habitat colonization', width * 0.04, height * 0.94);
        this.ctx.fillText('• Mass extinction event', width * 0.04, height * 0.96);
        this.ctx.fillText('• New ecological opportunity', width * 0.04, height * 0.98);
    }
    
    this.ctx.restore();
}


/**
renderFossilLayersDiagram(x, y, width, height, options = {}) {
    const { showLabels = true } = options;
    
    this.ctx.save();
    this.ctx.translate(x, y);
    
    // Title
    this.ctx.font = 'bold 24px Arial';
    this.ctx.fillStyle = '#2C3E50';
    this.ctx.textAlign = 'center';
    this.ctx.fillText('Fossil Record - Geological Time Scale', width / 2, -30);
    
    // Subtitle
    this.ctx.font = '14px Arial';
    this.ctx.fillStyle = '#7F8C8D';
    this.ctx.fillText('Evidence of evolution preserved in rock layers', width / 2, -10);
    
    // Draw fossil layers
    AnatomicalShapes.drawFossilLayers(this.ctx, width * 0.1, 0, width * 0.8, height);
    
    if(showLabels) {
        // Law of Superposition
        this.ctx.strokeStyle = '#FF5722';
        this.ctx.lineWidth = 2;
        this.ctx.strokeRect(width * 0.02, height * 0.02, width * 0.35, height * 0.08);
        
        this.ctx.fillStyle = '#2C3E50';
        this.ctx.font = 'bold 11px Arial';
        this.ctx.textAlign = 'left';
        this.ctx.fillText('Law of Superposition:', width * 0.04, height * 0.045);
        
        this.ctx.font = '10px Arial';
        this.ctx.fillStyle = '#7F8C8D';
        this.ctx.fillText('Older layers at bottom,', width * 0.04, height * 0.065);
        this.ctx.fillText('younger layers at top', width * 0.04, height * 0.08);
    }
    
    this.ctx.restore();
}
*/

renderHardyWeinbergDiagram(x, y, width, height, options = {}) {
    const { showLabels = true } = options;
    
    this.ctx.save();
    this.ctx.translate(x, y);
    
    // Draw Hardy-Weinberg
    AnatomicalShapes.drawHardyWeinberg(this.ctx, 0, 0, width, height);
    
    this.ctx.restore();
}

renderSpeciationDiagram(x, y, width, height, options = {}) {
    const { showLabels = true, speciationType = 'allopatric' } = options;
    
    this.ctx.save();
    this.ctx.translate(x, y);
    
    // Title
    const titles = {
        'allopatric': 'Allopatric Speciation',
        'sympatric': 'Sympatric Speciation'
    };
    
    this.ctx.font = 'bold 24px Arial';
    this.ctx.fillStyle = '#2C3E50';
    this.ctx.textAlign = 'center';
    this.ctx.fillText(titles[speciationType], width / 2, -30);
    
    // Subtitle
    this.ctx.font = '14px Arial';
    this.ctx.fillStyle = '#7F8C8D';
    const subtitles = {
        'allopatric': 'Geographic separation leads to new species',
        'sympatric': 'New species form in same location'
    };
    this.ctx.fillText(subtitles[speciationType], width / 2, -10);
    
    // Draw speciation
    AnatomicalShapes.drawSpeciation(this.ctx, 0, 0, width, height, speciationType);
    
    if(showLabels) {
        // Definition box
        const defX = width * 0.65;
        const defY = height * 0.02;
        
        this.ctx.strokeStyle = '#4CAF50';
        this.ctx.lineWidth = 2;
        this.ctx.strokeRect(defX, defY, width * 0.33, height * 0.12);
        
        this.ctx.fillStyle = '#2C3E50';
        this.ctx.font = 'bold 11px Arial';
        this.ctx.textAlign = 'left';
        this.ctx.fillText('Speciation:', defX + 5, defY + 15);
        
        this.ctx.font = '10px Arial';
        this.ctx.fillStyle = '#7F8C8D';
        
        if(speciationType === 'allopatric') {
            this.ctx.fillText('• Physical barrier separates', defX + 5, defY + 30);
            this.ctx.fillText('  populations', defX + 5, defY + 43);
            this.ctx.fillText('• Different selection pressures', defX + 5, defY + 56);
            this.ctx.fillText('• Cannot interbreed when reunited', defX + 5, defY + 69);
        } else {
            this.ctx.fillText('• No physical separation', defX + 5, defY + 30);
            this.ctx.fillText('• Behavioral/temporal isolation', defX + 5, defY + 43);
            this.ctx.fillText('• Polyploidy in plants', defX + 5, defY + 56);
            this.ctx.fillText('• Chromosomal changes', defX + 5, defY + 69);
        }
    }
    
    this.ctx.restore();
}

renderComparativeAnatomyDiagram(x, y, width, height, options = {}) {
    const { showLabels = true } = options;
    
    this.ctx.save();
    this.ctx.translate(x, y);
    
    // Title
    this.ctx.font = 'bold 24px Arial';
    this.ctx.fillStyle = '#2C3E50';
    this.ctx.textAlign = 'center';
    this.ctx.fillText('Comparative Anatomy - Evidence of Evolution', width / 2, -30);
    
    // Draw comparative anatomy
    AnatomicalShapes.drawComparativeAnatomy(this.ctx, 0, 0, width, height);
    
    if(showLabels) {
        // Key differences
        this.ctx.strokeStyle = '#2C3E50';
        this.ctx.lineWidth = 2;
        this.ctx.strokeRect(width * 0.25, height * 0.88, width * 0.5, height * 0.1);
        
        this.ctx.fillStyle = '#2C3E50';
        this.ctx.font = 'bold 11px Arial';
        this.ctx.textAlign = 'left';
        this.ctx.fillText('Homologous:', width * 0.27, height * 0.905);
        this.ctx.font = '10px Arial';
        this.ctx.fillStyle = '#7F8C8D';
        this.ctx.fillText('Evidence of common ancestry', width * 0.27, height * 0.925);
        this.ctx.fillText('(Divergent evolution)', width * 0.27, height * 0.94);
        
        this.ctx.fillStyle = '#2C3E50';
        this.ctx.font = 'bold 11px Arial';
        this.ctx.textAlign = 'left';
        this.ctx.fillText('Analogous:', width * 0.52, height * 0.905);
        this.ctx.font = '10px Arial';
        this.ctx.fillStyle = '#7F8C8D';
        this.ctx.fillText('Similar function, not ancestry', width * 0.52, height * 0.925);
        this.ctx.fillText('(Convergent evolution)', width * 0.52, height * 0.94);
    }
    
    this.ctx.restore();
}



renderDNAStructureDiagram(x, y, width, height, options = {}) {
    const { showLabels = true } = options;
    
    this.ctx.save();
    this.ctx.translate(x, y);
    
    // Title
    this.ctx.font = 'bold 24px Arial';
    this.ctx.fillStyle = '#2C3E50';
    this.ctx.textAlign = 'center';
    this.ctx.fillText('DNA Double Helix Structure', width / 2, -30);
    
    // Draw DNA
    AnatomicalShapes.drawDNAHelix(this.ctx, 0, 0, width, height);
    
    if(showLabels) {
        this.addLabel('Sugar-Phosphate\nBackbone', width * 0.15, height * 0.5, '#1976D2', 'left');
        this.addLabel('Base Pairs', width * 0.85, height * 0.4, '#2C3E50', 'right');
        this.addLabel('Adenine-Thymine\n(2 H-bonds)', width * 0.85, height * 0.55, '#4CAF50', 'right');
        this.addLabel('Guanine-Cytosine\n(3 H-bonds)', width * 0.85, height * 0.7, '#FF5722', 'right');
        
        // Antiparallel note
        this.ctx.font = 'italic 12px Arial';
        this.ctx.fillStyle = '#7F8C8D';
        this.ctx.fillText('Antiparallel strands', width * 0.5, height * 0.98);
    }
    
    this.ctx.restore();
}

renderRNAStructureDiagram(x, y, width, height, options = {}) {
    const { showLabels = true, rnaType = 'mRNA' } = options;
    
    this.ctx.save();
    this.ctx.translate(x, y);
    
    // Title
    const titles = {
        'mRNA': 'Messenger RNA (mRNA)',
        'tRNA': 'Transfer RNA (tRNA)',
        'rRNA': 'Ribosomal RNA (rRNA)'
    };
    
    this.ctx.font = 'bold 24px Arial';
    this.ctx.fillStyle = '#2C3E50';
    this.ctx.textAlign = 'center';
    this.ctx.fillText(titles[rnaType], width / 2, -30);
    
    // Draw RNA
    AnatomicalShapes.drawRNAStructure(this.ctx, 0, 0, width, height, rnaType);
    
    if(showLabels) {
        switch(rnaType) {
            case 'mRNA':
                this.addLabel('Single-stranded', width * 0.1, height * 0.35, '#E91E63', 'left');
                this.addLabel('Contains Uracil (U)\ninstead of Thymine (T)', width * 0.5, height * 0.15, '#FFC107');
                
                // Function
                this.ctx.font = '12px Arial';
                this.ctx.fillStyle = '#7F8C8D';
                this.ctx.fillText('Function: Carries genetic code from DNA to ribosomes', width * 0.5, height * 0.9);
                break;
            case 'tRNA':
                this.addLabel('Cloverleaf\nStructure', width * 0.15, height * 0.5, '#9C27B0', 'left');
                this.addLabel('Amino Acid\nAttachment', width * 0.5, height * 0.02, '#FF6F00');
                
                this.ctx.font = '12px Arial';
                this.ctx.fillStyle = '#7F8C8D';
                this.ctx.fillText('Function: Delivers amino acids to ribosome during translation', width * 0.5, height * 0.9);
                break;
            case 'rRNA':
                this.addLabel('Complex\nFolded Structure', width * 0.15, height * 0.4, '#00897B', 'left');
                
                this.ctx.font = '12px Arial';
                this.ctx.fillStyle = '#7F8C8D';
                this.ctx.fillText('Function: Structural and catalytic component of ribosomes', width * 0.5, height * 0.9);
                break;
        }
    }
    
    this.ctx.restore();
}

renderTranscriptionDiagram(x, y, width, height, options = {}) {
    const { showLabels = true } = options;
    
    this.ctx.save();
    this.ctx.translate(x, y);
    
    // Title
    this.ctx.font = 'bold 24px Arial';
    this.ctx.fillStyle = '#2C3E50';
    this.ctx.textAlign = 'center';
    this.ctx.fillText('Transcription: DNA → RNA', width / 2, -30);
    
    // Subtitle
    this.ctx.font = '14px Arial';
    this.ctx.fillStyle = '#7F8C8D';
    this.ctx.fillText('RNA polymerase synthesizes mRNA from DNA template', width / 2, -10);
    
    // Draw transcription
    AnatomicalShapes.drawTranscription(this.ctx, 0, 0, width, height);
    
    if(showLabels) {
        // Key steps
        const stepsY = height * 0.7;
        this.ctx.font = 'bold 13px Arial';
        this.ctx.fillStyle = '#2C3E50';
        this.ctx.textAlign = 'left';
        this.ctx.fillText('Key Steps:', width * 0.05, stepsY);
        
        this.ctx.font = '11px Arial';
        this.ctx.fillStyle = '#7F8C8D';
        this.ctx.fillText('1. DNA strands separate', width * 0.05, stepsY + 18);
        this.ctx.fillText('2. RNA polymerase binds to promoter', width * 0.05, stepsY + 33);
        this.ctx.fillText('3. Complementary RNA nucleotides added', width * 0.05, stepsY + 48);
        this.ctx.fillText('4. mRNA released at terminator', width * 0.05, stepsY + 63);
        
        // Base pairing rules
        this.ctx.font = 'bold 12px Arial';
        this.ctx.fillStyle = '#2C3E50';
        this.ctx.textAlign = 'right';
        this.ctx.fillText('Base Pairing:', width * 0.95, stepsY);
        
        this.ctx.font = '11px Arial';
        this.ctx.fillStyle = '#7F8C8D';
        this.ctx.fillText('DNA A → RNA U', width * 0.95, stepsY + 18);
        this.ctx.fillText('DNA T → RNA A', width * 0.95, stepsY + 33);
        this.ctx.fillText('DNA G → RNA C', width * 0.95, stepsY + 48);
        this.ctx.fillText('DNA C → RNA G', width * 0.95, stepsY + 63);
    }
    
    this.ctx.restore();
}

renderTranslationDiagram(x, y, width, height, options = {}) {
    const { showLabels = true } = options;
    
    this.ctx.save();
    this.ctx.translate(x, y);
    
    // Title
    this.ctx.font = 'bold 24px Arial';
    this.ctx.fillStyle = '#2C3E50';
    this.ctx.textAlign = 'center';
    this.ctx.fillText('Translation: RNA → Protein', width / 2, -30);
    
    // Subtitle
    this.ctx.font = '14px Arial';
    this.ctx.fillStyle = '#7F8C8D';
    this.ctx.fillText('Ribosomes decode mRNA to synthesize proteins', width / 2, -10);
    
    // Draw translation
    AnatomicalShapes.drawTranslation(this.ctx, 0, 0, width, height);
    
    if(showLabels) {
        // Key components
        const infoY = height * 0.75;
        this.ctx.font = 'bold 13px Arial';
        this.ctx.fillStyle = '#2C3E50';
        this.ctx.textAlign = 'left';
        this.ctx.fillText('Ribosome Binding Sites:', width * 0.05, infoY);
        
        this.ctx.font = '11px Arial';
        this.ctx.fillStyle = '#7F8C8D';
        this.ctx.fillText('A site: Aminoacyl (incoming tRNA)', width * 0.05, infoY + 18);
        this.ctx.fillText('P site: Peptidyl (growing chain)', width * 0.05, infoY + 33);
        this.ctx.fillText('E site: Exit (empty tRNA leaves)', width * 0.05, infoY + 48);
        
        // Process
        this.ctx.font = 'bold 13px Arial';
        this.ctx.fillStyle = '#2C3E50';
        this.ctx.textAlign = 'right';
        this.ctx.fillText('Process:', width * 0.95, infoY);
        
        this.ctx.font = '11px Arial';
        this.ctx.fillStyle = '#7F8C8D';
        this.ctx.fillText('1. tRNA brings amino acid', width * 0.95, infoY + 18);
        this.ctx.fillText('2. Anticodon pairs with codon', width * 0.95, infoY + 33);
        this.ctx.fillText('3. Peptide bond forms', width * 0.95, infoY + 48);
        this.ctx.fillText('4. Ribosome moves to next codon', width * 0.95, infoY + 63);
    }
    
    this.ctx.restore();
}

renderCodonChartDiagram(x, y, width, height, options = {}) {
    const { showLabels = true } = options;
    
    this.ctx.save();
    this.ctx.translate(x, y);
    
    // Title
    this.ctx.font = 'bold 24px Arial';
    this.ctx.fillStyle = '#2C3E50';
    this.ctx.textAlign = 'center';
    this.ctx.fillText('Genetic Code - Codon Chart', width / 2, -30);
    
    // Subtitle
    this.ctx.font = '14px Arial';
    this.ctx.fillStyle = '#7F8C8D';
    this.ctx.fillText('64 codons specify 20 amino acids + 3 stop signals', width / 2, -10);
    
    // Draw codon chart
    AnatomicalShapes.drawCodonChart(this.ctx, width * 0.05, height * 0.05, width * 0.9, height * 0.85);
    
    this.ctx.restore();
}

renderGeneExpressionDiagram(x, y, width, height, options = {}) {
    const { showLabels = true } = options;
    
    this.ctx.save();
    this.ctx.translate(x, y);
    
    // Title
    this.ctx.font = 'bold 24px Arial';
    this.ctx.fillStyle = '#2C3E50';
    this.ctx.textAlign = 'center';
    this.ctx.fillText('Central Dogma of Molecular Biology', width / 2, -30);
    
    const stepWidth = width / 3;
    const stepY = height * 0.4;
    
    // DNA
    this.ctx.fillStyle = '#1976D2';
    this.ctx.strokeStyle = '#0D47A1';
    this.ctx.lineWidth = 3;
    this.ctx.beginPath();
    this.ctx.roundRect(width * 0.05, stepY, stepWidth * 0.8, height * 0.2, 10);
    this.ctx.fill();
    this.ctx.stroke();
    
    this.ctx.fillStyle = '#FFF';
    this.ctx.font = 'bold 20px Arial';
    this.ctx.textAlign = 'center';
    this.ctx.fillText('DNA', width * 0.05 + stepWidth * 0.4, stepY + height * 0.11);
    
    // Transcription arrow
    this.drawArrow(
        width * 0.05 + stepWidth * 0.8,
        stepY + height * 0.1,
        width * 0.05 + stepWidth,
        stepY + height * 0.1,
        '#9C27B0',
        'Transcription'
    );
    
    // RNA
    this.ctx.fillStyle = '#E91E63';
    this.ctx.strokeStyle = '#C2185B';
    this.ctx.lineWidth = 3;
    this.ctx.beginPath();
    this.ctx.roundRect(width * 0.05 + stepWidth, stepY, stepWidth * 0.8, height * 0.2, 10);
    this.ctx.fill();
    this.ctx.stroke();
    
    this.ctx.fillStyle = '#FFF';
    this.ctx.font = 'bold 20px Arial';
    this.ctx.fillText('RNA', width * 0.05 + stepWidth + stepWidth * 0.4, stepY + height * 0.11);
    
    // Translation arrow
    this.drawArrow(
        width * 0.05 + stepWidth * 1.8,
        stepY + height * 0.1,
        width * 0.05 + stepWidth * 2,
        stepY + height * 0.1,
        '#4CAF50',
        'Translation'
    );
    
    // Protein
    this.ctx.fillStyle = '#FF6F00';
    this.ctx.strokeStyle = '#E65100';
    this.ctx.lineWidth = 3;
    this.ctx.beginPath();
    this.ctx.roundRect(width * 0.05 + stepWidth * 2, stepY, stepWidth * 0.8, height * 0.2, 10);
    this.ctx.fill();
    this.ctx.stroke();
    
    this.ctx.fillStyle = '#FFF';
    this.ctx.font = 'bold 20px Arial';
    this.ctx.fillText('PROTEIN', width * 0.05 + stepWidth * 2 + stepWidth * 0.4, stepY + height * 0.11);
    
    // Replication arrow (DNA to DNA)
    ctx.strokeStyle = '#2196F3';
    ctx.lineWidth = 3;
    ctx.setLineDash([5, 5]);
    ctx.beginPath();
    ctx.arc(width * 0.05 + stepWidth * 0.4, stepY - height * 0.1, height * 0.15, Math.PI * 0.7, Math.PI * 2.3);
    ctx.stroke();
    ctx.setLineDash([]);
    
    this.drawArrow(
        width * 0.05 + stepWidth * 0.55,
        stepY - height * 0.22,
        width * 0.05 + stepWidth * 0.4,
        stepY - height * 0.15,
        '#2196F3',
        'Replication',
        8
    );
    
    if(showLabels) {
        // Detailed information
        this.ctx.font = 'bold 14px Arial';
        this.ctx.fillStyle = '#2C3E50';
        this.ctx.textAlign = 'center';
        
        // DNA info
        this.ctx.fillText('Double helix', width * 0.05 + stepWidth * 0.4, stepY + height * 0.35);
        this.ctx.font = '11px Arial';
        this.ctx.fillStyle = '#7F8C8D';
        this.ctx.fillText('Deoxyribonucleotides', width * 0.05 + stepWidth * 0.4, stepY + height * 0.38 + 13);
        this.ctx.fillText('A, T, G, C', width * 0.05 + stepWidth * 0.4, stepY + height * 0.38 + 26);
        
        // RNA info
        this.ctx.fillStyle = '#2C3E50';
        this.ctx.font = 'bold 14px Arial';
        this.ctx.fillText('Single strand', width * 0.05 + stepWidth * 1.4, stepY + height * 0.35);
        this.ctx.font = '11px Arial';
        this.ctx.fillStyle = '#7F8C8D';
        this.ctx.fillText('Ribonucleotides', width * 0.05 + stepWidth * 1.4, stepY + height * 0.38 + 13);
        this.ctx.fillText('A, U, G, C', width * 0.05 + stepWidth * 1.4, stepY + height * 0.38 + 26);
        
        // Protein info
        this.ctx.fillStyle = '#2C3E50';
        this.ctx.font = 'bold 14px Arial';
        this.ctx.fillText('Polypeptide chain', width * 0.05 + stepWidth * 2.4, stepY + height * 0.35);
        this.ctx.font = '11px Arial';
        this.ctx.fillStyle = '#7F8C8D';
        this.ctx.fillText('Amino acids', width * 0.05 + stepWidth * 2.4, stepY + height * 0.38 + 13);
        this.ctx.fillText('20 types', width * 0.05 + stepWidth * 2.4, stepY + height * 0.38 + 26);
    }
    
    this.ctx.restore();
}

renderPunnettSquareDiagram(x, y, width, height, options = {}) {
    const { showLabels = true, crossType = 'monohybrid' } = options;
    
    this.ctx.save();
    this.ctx.translate(x, y);
    
    // Title
    const title = crossType === 'monohybrid' ? 
        'Monohybrid Cross (Tt × Tt)' : 
        'Dihybrid Cross (RrYy × RrYy)';
    
    this.ctx.font = 'bold 24px Arial';
    this.ctx.fillStyle = '#2C3E50';
    this.ctx.textAlign = 'center';
    this.ctx.fillText(title, width / 2, -30);
    
    // Subtitle
    this.ctx.font = '14px Arial';
    this.ctx.fillStyle = '#7F8C8D';
    const subtitle = crossType === 'monohybrid' ? 
        'One trait - Tall (T) vs short (t)' : 
        'Two traits - Round (R) vs wrinkled (r), Yellow (Y) vs green (y)';
    this.ctx.fillText(subtitle, width / 2, -10);
    
    // Draw Punnett square
    AnatomicalShapes.drawPunnettSquare(this.ctx, 0, 0, width, height, crossType);
    
    this.ctx.restore();
}

renderChromosomesDiagram(x, y, width, height, options = {}) {
    const { showLabels = true, showHomologousPairs = true } = options;
    
    this.ctx.save();
    this.ctx.translate(x, y);
    
    // Title
    const title = showHomologousPairs ? 
        'Homologous Chromosome Pair' : 
        'Replicated Chromosome';
    
    this.ctx.font = 'bold 24px Arial';
    this.ctx.fillStyle = '#2C3E50';
    this.ctx.textAlign = 'center';
    this.ctx.fillText(title, width / 2, -30);
    
    // Draw chromosome
    AnatomicalShapes.drawChromosome(this.ctx, 0, 0, width, height, showHomologousPairs);
    
    this.ctx.restore();
}

renderCrossingOverDiagram(x, y, width, height, options = {}) {
    const { showLabels = true } = options;
    
    this.ctx.save();
    this.ctx.translate(x, y);
    
    // Title
    this.ctx.font = 'bold 24px Arial';
    this.ctx.fillStyle = '#2C3E50';
    this.ctx.textAlign = 'center';
    this.ctx.fillText('Crossing Over (Genetic Recombination)', width / 2, -30);
    
    // Subtitle
    this.ctx.font = '14px Arial';
    this.ctx.fillStyle = '#7F8C8D';
    this.ctx.fillText('Occurs during Prophase I of Meiosis', width / 2, -10);
    
    // Draw crossing over
    AnatomicalShapes.drawCrossingOver(this.ctx, 0, 0, width, height);
    
    this.ctx.restore();
}

renderMutationsDiagram(x, y, width, height, options = {}) {
    const { showLabels = true } = options;
    
    this.ctx.save();
    this.ctx.translate(x, y);
    
    // Title
    this.ctx.font = 'bold 24px Arial';
    this.ctx.fillStyle = '#2C3E50';
    this.ctx.textAlign = 'center';
    this.ctx.fillText('Types of DNA Mutations', width / 2, -30);
    
    // Draw mutations
    AnatomicalShapes.drawMutations(this.ctx, 0, 0, width, height);
    
    this.ctx.restore();
}

renderRecombinantDNADiagram(x, y, width, height, options = {}) {
    const { showLabels = true } = options;
    
    this.ctx.save();
    this.ctx.translate(x, y);
    
    // Title
    this.ctx.font = 'bold 24px Arial';
    this.ctx.fillStyle = '#2C3E50';
    this.ctx.textAlign = 'center';
    this.ctx.fillText('Recombinant DNA Technology', width / 2, -30);
    
    // Subtitle
    this.ctx.font = '14px Arial';
    this.ctx.fillStyle = '#7F8C8D';
    this.ctx.fillText('Genetic Engineering Process', width / 2, -10);
    
    // Draw recombinant DNA process
    AnatomicalShapes.drawRecombinantDNA(this.ctx, 0, 0, width, height);
    
    this.ctx.restore();
}

renderPCRCycleDiagram(x, y, width, height, options = {}) {
    const { showLabels = true } = options;
    
    this.ctx.save();
    this.ctx.translate(x, y);
    
    // Title
    this.ctx.font = 'bold 24px Arial';
    this.ctx.fillStyle = '#2C3E50';
    this.ctx.textAlign = 'center';
    this.ctx.fillText('PCR (Polymerase Chain Reaction)', width / 2, -30);
    
    // Subtitle
    this.ctx.font = '14px Arial';
    this.ctx.fillStyle = '#7F8C8D';
    this.ctx.fillText('DNA Amplification Technique', width / 2, -10);
    
    // Draw PCR cycle
    AnatomicalShapes.drawPCRCycle(this.ctx, 0, 0, width, height);
    
    if(showLabels) {
        // Result box
        this.ctx.strokeStyle = '#2C3E50';
        this.ctx.lineWidth = 2;
        this.ctx.strokeRect(width * 0.02, height * 0.82, width * 0.25, height * 0.15);
        
        this.ctx.fillStyle = '#2C3E50';
        this.ctx.font = 'bold 12px Arial';
        this.ctx.textAlign = 'left';
        this.ctx.fillText('Result:', width * 0.04, height * 0.85);
        
        this.ctx.font = '11px Arial';
        this.ctx.fillStyle = '#7F8C8D';
        this.ctx.fillText('After 30 cycles:', width * 0.04, height * 0.88 + 13);
        this.ctx.fillText('~1 billion copies', width * 0.04, height * 0.88 + 26);
        this.ctx.fillText('of target DNA', width * 0.04, height * 0.88 + 39);
    }
    
    this.ctx.restore();
}


renderAnimalCellDiagram(x, y, width, height, options = {}) {
    const { showLabels = true } = options;
    
    this.ctx.save();
    this.ctx.translate(x, y);
    
    // Title
    this.ctx.font = 'bold 24px Arial';
    this.ctx.fillStyle = '#2C3E50';
    this.ctx.textAlign = 'center';
    this.ctx.fillText('Animal Cell Structure', width / 2, -30);
    
    // Draw cell
    AnatomicalShapes.drawAnimalCell(this.ctx, width * 0.1, height * 0.1, width * 0.8, height * 0.8);
    
    if(showLabels) {
        // Labels with leader lines
        this.addLabel('Cell Membrane', width * 0.05, height * 0.5, '#E91E63', 'left');
        this.addLabel('Nucleus', width * 0.5, height * 0.35, '#9C27B0');
        this.addLabel('Nucleolus', width * 0.5, height * 0.45, '#4A148C');
        this.addLabel('Mitochondria', width * 0.75, height * 0.35, '#FF6347', 'right');
        this.addLabel('Endoplasmic\nReticulum', width * 0.8, height * 0.6, '#8D6E63', 'right');
        this.addLabel('Golgi Apparatus', width * 0.85, height * 0.25, '#FFA726', 'right');
        this.addLabel('Lysosomes', width * 0.22, height * 0.65, '#AB47BC', 'left');
        this.addLabel('Ribosomes', width * 0.3, height * 0.75, '#3E2723', 'left');
        this.addLabel('Centrioles', width * 0.4, height * 0.22, '#4CAF50', 'left');
    }
    
    this.ctx.restore();
}

renderProkaryoticVsEukaryoticDiagram(x, y, width, height, options = {}) {
    const { showLabels = true } = options;
    
    this.ctx.save();
    this.ctx.translate(x, y);
    
    // Title
    this.ctx.font = 'bold 24px Arial';
    this.ctx.fillStyle = '#2C3E50';
    this.ctx.textAlign = 'center';
    this.ctx.fillText('Prokaryotic vs Eukaryotic Cells', width / 2, -30);
    
    // Draw comparison
    AnatomicalShapes.drawProkaryoticVsEukaryotic(this.ctx, 0, 0, width, height);
    
    if(showLabels) {
        // Key differences table at bottom
        const tableY = height * 0.92;
        this.ctx.font = 'bold 12px Arial';
        this.ctx.fillStyle = '#2C3E50';
        this.ctx.textAlign = 'left';
        
        this.ctx.fillText('Key Differences:', width * 0.1, tableY);
        this.ctx.font = '11px Arial';
        this.ctx.fillStyle = '#7F8C8D';
        this.ctx.fillText('• Prokaryotes: No membrane-bound organelles, 1-10 μm', width * 0.1, tableY + 15);
        this.ctx.fillText('• Eukaryotes: Membrane-bound organelles, 10-100 μm', width * 0.55, tableY + 15);
    }
    
    this.ctx.restore();
}

renderCellMembraneDiagram(x, y, width, height, options = {}) {
    const { showLabels = true } = options;
    
    this.ctx.save();
    this.ctx.translate(x, y);
    
    // Title
    this.ctx.font = 'bold 24px Arial';
    this.ctx.fillStyle = '#2C3E50';
    this.ctx.textAlign = 'center';
    this.ctx.fillText('Cell Membrane - Fluid Mosaic Model', width / 2, -30);
    
    // Draw membrane
    AnatomicalShapes.drawCellMembrane(this.ctx, width * 0.05, height * 0.15, width * 0.9, height * 0.7);
    
    if(showLabels) {
        this.addLabel('Phospholipid\nBilayer', width * 0.02, height * 0.5, '#1976D2', 'left');
        this.addLabel('Hydrophilic\nHead', width * 0.12, height * 0.35, '#1976D2', 'left');
        this.addLabel('Hydrophobic\nTail', width * 0.12, height * 0.5, '#FFA726', 'left');
        this.addLabel('Integral\nProtein', width * 0.52, height * 0.25, '#7B1FA2');
        this.addLabel('Peripheral\nProtein', width * 0.7, height * 0.2, '#E91E63', 'right');
        this.addLabel('Cholesterol', width * 0.88, height * 0.5, '#FFB74D', 'right');
        this.addLabel('Carbohydrate\nChain', width * 0.82, height * 0.15, '#4CAF50', 'right');
    }
    
    this.ctx.restore();
}

renderOsmosisDiffusionDiagram(x, y, width, height, options = {}) {
    const { showLabels = true } = options;
    
    this.ctx.save();
    this.ctx.translate(x, y);
    
    // Title
    this.ctx.font = 'bold 24px Arial';
    this.ctx.fillStyle = '#2C3E50';
    this.ctx.textAlign = 'center';
    this.ctx.fillText('Passive Transport: Osmosis & Diffusion', width / 2, -30);
    
    // Draw diagram
    AnatomicalShapes.drawOsmosisDiffusion(this.ctx, 0, 0, width, height);
    
    this.ctx.restore();
}

renderActivePassiveTransportDiagram(x, y, width, height, options = {}) {
    const { showLabels = true } = options;
    
    this.ctx.save();
    this.ctx.translate(x, y);
    
    // Title
    this.ctx.font = 'bold 24px Arial';
    this.ctx.fillStyle = '#2C3E50';
    this.ctx.textAlign = 'center';
    this.ctx.fillText('Active vs Passive Transport', width / 2, -30);
    
    // Draw comparison
    AnatomicalShapes.drawActivePassiveTransport(this.ctx, 0, 0, width, height);
    
    this.ctx.restore();
}

renderOrganellesDiagram(x, y, width, height, options = {}) {
    const { showLabels = true, organelleType = 'mitochondria' } = options;
    
    this.ctx.save();
    this.ctx.translate(x, y);
    
    // Title
    const organelleNames = {
        'nucleus': 'Nucleus - Control Center',
        'mitochondria': 'Mitochondrion - Powerhouse',
        'ribosome': 'Ribosome - Protein Factory',
        'endoplasmicReticulum': 'Endoplasmic Reticulum',
        'golgiApparatus': 'Golgi Apparatus',
        'lysosome': 'Lysosome - Digestive Organelle',
        'peroxisome': 'Peroxisome - Detoxification'
    };
    
    this.ctx.font = 'bold 22px Arial';
    this.ctx.fillStyle = '#2C3E50';
    this.ctx.textAlign = 'center';
    this.ctx.fillText(organelleNames[organelleType] || 'Cell Organelle', width / 2, -20);
    
    // Draw organelle
    AnatomicalShapes.drawOrganelle(this.ctx, width * 0.1, height * 0.1, width * 0.8, height * 0.8, organelleType);
    
    if(showLabels) {
        // Add specific labels based on organelle type
        switch(organelleType) {
            case 'nucleus':
                this.addLabel('Nuclear\nEnvelope', width * 0.15, height * 0.3, '#7B1FA2', 'left');
                this.addLabel('Nuclear Pore', width * 0.75, height * 0.25, '#4A148C', 'right');
                this.addLabel('Nucleolus', width * 0.5, height * 0.6, '#4A148C');
                this.addLabel('Chromatin', width * 0.35, height * 0.4, '#7B1FA2', 'left');
                break;
            case 'mitochondria':
                this.addLabel('Outer\nMembrane', width * 0.12, height * 0.5, '#D84315', 'left');
                this.addLabel('Inner\nMembrane', width * 0.25, height * 0.4, '#BF360C', 'left');
                this.addLabel('Cristae', width * 0.3, height * 0.5, '#BF360C', 'left');
                this.addLabel('Matrix', width * 0.5, height * 0.5, '#FF9800');
                break;
            case 'ribosome':
                this.addLabel('Small\nSubunit', width * 0.5, height * 0.25, '#78909C');
                this.addLabel('Large\nSubunit', width * 0.5, height * 0.7, '#546E7A');
                this.addLabel('mRNA', width * 0.15, height * 0.5, '#4CAF50', 'left');
                break;
        }
    }
    
    // Function description
    const functions = {
        'nucleus': 'Stores genetic material (DNA) and controls cell activities',
        'mitochondria': 'Produces ATP through cellular respiration',
        'ribosome': 'Synthesizes proteins from amino acids',
        'endoplasmicReticulum': 'Protein and lipid synthesis and transport',
        'golgiApparatus': 'Modifies, packages, and ships proteins',
        'lysosome': 'Breaks down waste materials and cellular debris',
        'peroxisome': 'Breaks down fatty acids and detoxifies harmful substances'
    };
    
    this.ctx.font = '12px Arial';
    this.ctx.fillStyle = '#7F8C8D';
    this.ctx.textAlign = 'center';
    this.ctx.fillText(functions[organelleType], width / 2, height * 0.95);
    
    this.ctx.restore();
}

renderEnzymeActionDiagram(x, y, width, height, options = {}) {
    const { showLabels = true, model = 'both' } = options;
    
    this.ctx.save();
    this.ctx.translate(x, y);
    
    // Title
    this.ctx.font = 'bold 24px Arial';
    this.ctx.fillStyle = '#2C3E50';
    this.ctx.textAlign = 'center';
    this.ctx.fillText('Enzyme Action Models', width / 2, -30);
    
    // Draw enzyme action
    AnatomicalShapes.drawEnzymeAction(this.ctx, 0, 0, width, height, model);
    
    if(showLabels && model === 'both') {
        // Dividing line
        this.ctx.strokeStyle = '#BDC3C7';
        this.ctx.lineWidth = 2;
        this.ctx.setLineDash([10, 5]);
        this.ctx.beginPath();
        this.ctx.moveTo(width * 0.05, height * 0.5);
        this.ctx.lineTo(width * 0.95, height * 0.5);
        this.ctx.stroke();
        this.ctx.setLineDash([]);
    }
    
    // Key concepts
    this.ctx.font = '11px Arial';
    this.ctx.fillStyle = '#7F8C8D';
    this.ctx.textAlign = 'center';
    this.ctx.fillText('Enzymes lower activation energy and are not consumed in reactions', width / 2, height * 0.98);
    
    this.ctx.restore();
}



  // ============================================================================
  // CARDIOVASCULAR SYSTEM DIAGRAMS
  // ============================================================================

 renderHeartAnatomyDiagram(x, y, width, height, options = {}) {
    const {
      showLabels = true,
      showBloodFlow = true,
      animate = false,
      chamber = 'wholeheart'
    } = options;

    this.ctx.save();
    this.ctx.translate(x, y);

    // Title
    if(showLabels) {
      this.ctx.font = 'bold 24px Arial';
      this.ctx.fillStyle = '#2C3E50';
      this.ctx.textAlign = 'center';
      this.ctx.fillText('Human Heart Anatomy', width / 2, -20);
    }

    // Draw heart
    if(chamber === 'wholeheart') {
      AnatomicalShapes.drawHeart(this.ctx, 0, 0, width, height, 'wholeheart');
      
      if(showLabels) {
        this.addLabel('Right Atrium', width * 0.7, height * 0.2, '#8B4789');
        this.addLabel('Right Ventricle', width * 0.7, height * 0.6, '#8B4789');
        this.addLabel('Left Atrium', width * 0.2, height * 0.2, '#E74C3C');
        this.addLabel('Left Ventricle', width * 0.2, height * 0.6, '#E74C3C');
        this.addLabel('Septum', width * 0.5, height * 0.5, '#5D4E60');
      }

      // Blood flow arrows
      if(showBloodFlow) {
        // Deoxygenated blood (blue/purple) from body to right atrium
        this.drawArrow(width * 0.85, height * 0.15, width * 0.75, height * 0.22, '#8B4789', 'From Body');
        
        // To lungs from right ventricle
        this.drawArrow(width * 0.75, height * 0.4, width * 0.85, height * 0.35, '#8B4789', 'To Lungs');
        
        // Oxygenated blood (red) from lungs to left atrium
        this.drawArrow(width * 0.15, height * 0.15, width * 0.25, height * 0.22, '#E74C3C', 'From Lungs');
        
        // To body from left ventricle
        this.drawArrow(width * 0.25, height * 0.4, width * 0.15, height * 0.35, '#E74C3C', 'To Body');
      }
    } else {
      // Individual chamber view
      const state = chamber.includes('Atrium') ? 'deoxygenated' : 
                   chamber.includes('right') ? 'deoxygenated' : 'oxygenated';
      AnatomicalShapes.drawHeart(this.ctx, 0, 0, width, height, chamber, state);
      
      if(showLabels) {
        const chamberNames = {
          'rightAtrium': 'Right Atrium',
          'rightVentricle': 'Right Ventricle',
          'leftAtrium': 'Left Atrium',
          'leftVentricle': 'Left Ventricle'
        };
        this.addLabel(chamberNames[chamber], width / 2, -10, '#2C3E50');
      }
    }

    // Animation for heartbeat
    if(animate) {
      const scale = 1 + Math.sin(this.currentFrame * 0.1) * 0.05;
      this.ctx.scale(scale, scale);
    }

    this.ctx.restore();
  }



  renderCirculatorySystemDiagram(x, y, width, height, options = {}) {
    const { showLabels = true, showOxygenation = true } = options;

    this.ctx.save();
    this.ctx.translate(x, y);

    // Title
    this.ctx.font = 'bold 22px Arial';
    this.ctx.fillStyle = '#2C3E50';
    this.ctx.textAlign = 'center';
    this.ctx.fillText('Circulatory System', width / 2, -20);

    // Heart in center
    const heartWidth = width * 0.2;
    const heartHeight = height * 0.25;
    const heartX = width * 0.4;
    const heartY = height * 0.35;
    AnatomicalShapes.drawHeart(this.ctx, heartX, heartY, heartWidth, heartHeight, 'wholeheart');

    // Lungs
    const lungWidth = width * 0.15;
    const lungHeight = height * 0.2;
    AnatomicalShapes.drawLung(this.ctx, width * 0.15, height * 0.1, lungWidth, lungHeight, 'left');
    AnatomicalShapes.drawLung(this.ctx, width * 0.65, height * 0.1, lungWidth, lungHeight, 'right');

    // Body representation (simplified)
    this.ctx.strokeStyle = '#95A5A6';
    this.ctx.lineWidth = 3;
    this.ctx.fillStyle = '#ECF0F1';
    this.ctx.beginPath();
    this.ctx.roundRect(width * 0.35, height * 0.65, width * 0.3, height * 0.3, 10);
    this.ctx.fill();
    this.ctx.stroke();

    // Blood vessels - Pulmonary circulation (heart to lungs)
    // Right ventricle to lungs (deoxygenated)
    this.drawCurvedArrow(
      heartX + heartWidth * 0.7, heartY + heartHeight * 0.5,
      width * 0.25, height * 0.25,
      '#8B4789', 'Pulmonary Artery'
    );
    this.drawCurvedArrow(
      heartX + heartWidth * 0.7, heartY + heartHeight * 0.5,
      width * 0.7, height * 0.25,
      '#8B4789', ''
    );

    // Lungs to left atrium (oxygenated)
    this.drawCurvedArrow(
      width * 0.25, height * 0.32,
      heartX + heartWidth * 0.3, heartY + heartHeight * 0.3,
      '#E74C3C', 'Pulmonary Vein'
    );
    this.drawCurvedArrow(
      width * 0.7, height * 0.32,
      heartX + heartWidth * 0.3, heartY + heartHeight * 0.3,
      '#E74C3C', ''
    );

    // Systemic circulation (heart to body)
    // Left ventricle to body (oxygenated)
    this.drawCurvedArrow(
      heartX + heartWidth * 0.3, heartY + heartHeight * 0.7,
      width * 0.5, height * 0.65,
      '#E74C3C', 'Aorta'
    );

    // Body to right atrium (deoxygenated)
    this.drawCurvedArrow(
      width * 0.5, height * 0.95,
      heartX + heartWidth * 0.7, heartY + heartHeight * 0.7,
      '#8B4789', 'Vena Cava'
    );

    if(showLabels) {
      this.addLabel('Lungs', width * 0.25, height * 0.08, '#2C3E50');
      this.addLabel('Lungs', width * 0.7, height * 0.08, '#2C3E50');
      this.addLabel('Heart', heartX + heartWidth / 2, heartY - 10, '#2C3E50');
      this.addLabel('Body Tissues', width * 0.5, height * 0.8, '#2C3E50');
    }

    // Legend
    if(showOxygenation) {
      this.drawLegend(width * 0.02, height * 0.85, [
        { color: '#E74C3C', label: 'Oxygenated Blood' },
        { color: '#8B4789', label: 'Deoxygenated Blood' }
      ]);
    }

    this.ctx.restore();
  }

  renderBloodVesselComparison(x, y, width, height, options = {}) {
    const { showLabels = true } = options;

    this.ctx.save();
    this.ctx.translate(x, y);

    // Title
    this.ctx.font = 'bold 22px Arial';
    this.ctx.fillStyle = '#2C3E50';
    this.ctx.textAlign = 'center';
    this.ctx.fillText('Blood Vessel Comparison', width / 2, -20);

    const vesselWidth = width * 0.15;
    const vesselHeight = height * 0.8;
    const spacing = width * 0.28;

    // Artery (oxygenated)
    AnatomicalShapes.drawBloodVessel(
      this.ctx,
      width * 0.1,
      height * 0.1,
      vesselWidth,
      vesselHeight,
      'artery',
      'oxygenated'
    );
    if(showLabels) {
      this.addLabel('Artery', width * 0.175, height * 0.05, '#E74C3C');
      this.ctx.font = '12px Arial';
      this.ctx.fillStyle = '#7F8C8D';
      this.ctx.textAlign = 'center';
      this.ctx.fillText('Thick walls', width * 0.175, height * 0.95);
      this.ctx.fillText('High pressure', width * 0.175, height * 0.98);
    }

    // Vein (deoxygenated)
    AnatomicalShapes.drawBloodVessel(
      this.ctx,
      width * 0.1 + spacing,
      height * 0.1,
      vesselWidth,
      vesselHeight,
      'vein',
      'deoxygenated'
    );
    if(showLabels) {
      this.addLabel('Vein', width * 0.175 + spacing, height * 0.05, '#8B4789');
      this.ctx.font = '12px Arial';
      this.ctx.fillStyle = '#7F8C8D';
      this.ctx.textAlign = 'center';
      this.ctx.fillText('Thin walls', width * 0.175 + spacing, height * 0.95);
      this.ctx.fillText('Has valves', width * 0.175 + spacing, height * 0.98);
    }

    // Capillary
    this.ctx.strokeStyle = '#E74C3C';
    this.ctx.lineWidth = 6;
    this.ctx.beginPath();
    this.ctx.moveTo(width * 0.1 + spacing * 2, height * 0.1);
    this.ctx.lineTo(width * 0.1 + spacing * 2, height * 0.9);
    this.ctx.stroke();

    // Capillary detail (single cell layer)
    this.ctx.strokeStyle = '#95A5A6';
    this.ctx.lineWidth = 2;
    for(let i = 0; i < 10; i++) {
      const cy = height * (0.15 + i * 0.075);
      this.ctx.beginPath();
      this.ctx.arc(width * 0.1 + spacing * 2, cy, 4, 0, Math.PI * 2);
      this.ctx.stroke();
    }

    if(showLabels) {
      this.addLabel('Capillary', width * 0.1 + spacing * 2, height * 0.05, '#E74C3C');
      this.ctx.font = '12px Arial';
      this.ctx.fillStyle = '#7F8C8D';
      this.ctx.textAlign = 'center';
      this.ctx.fillText('One cell thick', width * 0.1 + spacing * 2, height * 0.95);
      this.ctx.fillText('Gas exchange', width * 0.1 + spacing * 2, height * 0.98);
    }

    this.ctx.restore();
  }

  // ============================================================================
  // RESPIRATORY SYSTEM DIAGRAMS
  // ============================================================================

  renderRespiratorySystemDiagram(x, y, width, height, options = {}) {
    const { showLabels = true, showGasExchange = true } = options;

    this.ctx.save();
    this.ctx.translate(x, y);

    // Title
    this.ctx.font = 'bold 22px Arial';
    this.ctx.fillStyle = '#2C3E50';
    this.ctx.textAlign = 'center';
    this.ctx.fillText('Respiratory System', width / 2, -20);

    // Trachea
    const tracheaWidth = width * 0.08;
    const tracheaHeight = height * 0.25;
    this.ctx.fillStyle = '#FFB6D9';
    this.ctx.strokeStyle = '#FF8FB6';
    this.ctx.lineWidth = 2;
    this.ctx.beginPath();
    this.ctx.roundRect(width * 0.46, height * 0.05, tracheaWidth, tracheaHeight, 5);
    this.ctx.fill();
    this.ctx.stroke();

    // Tracheal rings
    for(let i = 0; i < 8; i++) {
      this.ctx.strokeStyle = '#FF8FB6';
      this.ctx.lineWidth = 2;
      this.ctx.beginPath();
      const ringY = height * (0.08 + i * 0.03);
      this.ctx.arc(width * 0.5, ringY, tracheaWidth * 0.5, Math.PI, 0);
      this.ctx.stroke();
    }

    // Bronchi (branching)
    this.ctx.strokeStyle = '#FFB6D9';
    this.ctx.lineWidth = 6;
    // Left bronchus
    this.ctx.beginPath();
    this.ctx.moveTo(width * 0.48, height * 0.3);
    this.ctx.quadraticCurveTo(width * 0.35, height * 0.35, width * 0.25, height * 0.42);
    this.ctx.stroke();
    // Right bronchus
    this.ctx.beginPath();
    this.ctx.moveTo(width * 0.52, height * 0.3);
    this.ctx.quadraticCurveTo(width * 0.65, height * 0.35, width * 0.75, height * 0.42);
    this.ctx.stroke();

    // Lungs
    const lungWidth = width * 0.3;
    const lungHeight = height * 0.55;
    AnatomicalShapes.drawLung(this.ctx, width * 0.05, height * 0.4, lungWidth, lungHeight, 'left');
    AnatomicalShapes.drawLung(this.ctx, width * 0.65, height * 0.4, lungWidth, lungHeight, 'right');

    // Diaphragm
    this.ctx.strokeStyle = '#DC143C';
    this.ctx.fillStyle = 'rgba(220, 20, 60, 0.2)';
    this.ctx.lineWidth = 3;
    this.ctx.beginPath();
    this.ctx.moveTo(width * 0.05, height * 0.95);
    this.ctx.quadraticCurveTo(width * 0.5, height * 1.05, width * 0.95, height * 0.95);
    this.ctx.fill();
    this.ctx.stroke();

    if(showLabels) {
      this.addLabel('Trachea', width * 0.5, height * 0.02, '#2C3E50');
      this.addLabel('Bronchi', width * 0.5, height * 0.35, '#2C3E50');
      this.addLabel('Left Lung', width * 0.2, height * 0.38, '#2C3E50');
      this.addLabel('Right Lung', width * 0.8, height * 0.38, '#2C3E50');
      this.addLabel('Diaphragm', width * 0.5, height * 0.98, '#2C3E50');
    }

    // Gas exchange inset
    if(showGasExchange) {
      this.drawGasExchangeInset(width * 0.65, height * 0.05, width * 0.3, height * 0.25);
    }

    this.ctx.restore();
  }

  drawGasExchangeInset(x, y, width, height) {
    this.ctx.save();
    this.ctx.translate(x, y);

    // Border
    this.ctx.strokeStyle = '#34495E';
    this.ctx.lineWidth = 2;
    this.ctx.fillStyle = '#ECF0F1';
    this.ctx.beginPath();
    this.ctx.roundRect(0, 0, width, height, 5);
    this.ctx.fill();
    this.ctx.stroke();

    // Title
    this.ctx.font = 'bold 12px Arial';
    this.ctx.fillStyle = '#2C3E50';
    this.ctx.textAlign = 'center';
    this.ctx.fillText('Gas Exchange in Alveoli', width / 2, 15);

    // Alveolus
    this.ctx.strokeStyle = '#FFB6D9';
    this.ctx.fillStyle = 'rgba(255, 182, 217, 0.3)';
    this.ctx.lineWidth = 2;
    this.ctx.beginPath();
    this.ctx.arc(width * 0.3, height * 0.55, width * 0.18, 0, Math.PI * 2);
    this.ctx.fill();
    this.ctx.stroke();

    // Capillary around alveolus
    this.ctx.strokeStyle = '#E74C3C';
    this.ctx.lineWidth = 4;
    this.ctx.beginPath();
    this.ctx.arc(width * 0.3, height * 0.55, width * 0.22, 0, Math.PI * 2);
    this.ctx.stroke();

    // O2 molecules entering blood
    this.ctx.fillStyle = '#3498DB';
    this.ctx.font = 'bold 14px Arial';
    this.ctx.fillText('O₂', width * 0.25, height * 0.45);
    this.drawArrow(width * 0.25, height * 0.48, width * 0.25, height * 0.58, '#3498DB');

    // CO2 molecules leaving blood
    this.ctx.fillStyle = '#E67E22';
    this.ctx.fillText('CO₂', width * 0.35, height * 0.65);
    this.drawArrow(width * 0.35, height * 0.62, width * 0.35, height * 0.52, '#E67E22');

    // Red blood cell
    AnatomicalShapes.drawRedBloodCell(this.ctx, width * 0.45, height * 0.55, 8);

    // Labels
    this.ctx.font = '10px Arial';
    this.ctx.fillStyle = '#7F8C8D';
    this.ctx.textAlign = 'left';
    this.ctx.fillText('Alveolus', width * 0.5, height * 0.4);
    this.ctx.fillText('Capillary', width * 0.5, height * 0.7);

    this.ctx.restore();
  }

  // ============================================================================
  // DIGESTIVE SYSTEM DIAGRAMS
  // ============================================================================

  renderDigestiveSystemDiagram(x, y, width, height, options = {}) {
    const { showLabels = true, showPath = true } = options;

    this.ctx.save();
    this.ctx.translate(x, y);

    // Title
    this.ctx.font = 'bold 22px Arial';
    this.ctx.fillStyle = '#2C3E50';
    this.ctx.textAlign = 'center';
    this.ctx.fillText('Digestive System', width / 2, -20);

    // Esophagus
    this.ctx.fillStyle = '#FFB6C1';
    this.ctx.fillRect(width * 0.45, 0, width * 0.1, height * 0.15);

    // Stomach
    AnatomicalShapes.drawStomach(this.ctx, width * 0.35, height * 0.14, width * 0.3, height * 0.2);

    // Liver (overlapping stomach area)
    AnatomicalShapes.drawLiver(this.ctx, width * 0.15, height * 0.08, width * 0.25, height * 0.18);

    // Pancreas (behind stomach)
    AnatomicalShapes.drawPancreas(this.ctx, width * 0.25, height * 0.24, width * 0.35, height * 0.08);

    // Small intestine
    AnatomicalShapes.drawIntestine(this.ctx, width * 0.25, height * 0.35, width * 0.5, height * 0.35, 'small');

    // Large intestine
    AnatomicalShapes.drawIntestine(this.ctx, width * 0.15, height * 0.3, width * 0.7, height * 0.65, 'large');

    if(showLabels) {
      this.addLabel('Esophagus', width * 0.5, -5, '#2C3E50');
      this.addLabel('Liver', width * 0.12, height * 0.12, '#8B4513');
      this.addLabel('Stomach', width * 0.35, height * 0.18, '#FFA07A');
      this.addLabel('Pancreas', width * 0.22, height * 0.28, '#FFDAB9');
      this.addLabel('Small\nIntestine', width * 0.5, height * 0.5, '#FFB6C1');
      this.addLabel('Large\nIntestine', width * 0.08, height * 0.55, '#E6A8B8');
    }

    // Digestive path arrow
    if(showPath) {
      this.ctx.strokeStyle = '#E74C3C';
      this.ctx.fillStyle = '#E74C3C';
      this.ctx.lineWidth = 2;
      this.ctx.setLineDash([5, 5]);
      
      this.ctx.beginPath();
      this.ctx.moveTo(width * 0.5, height * 0.01);
      this.ctx.lineTo(width * 0.5, height * 0.14);
      this.ctx.quadraticCurveTo(width * 0.45, height * 0.24, width * 0.55, height * 0.34);
      this.ctx.quadraticCurveTo(width * 0.4, height * 0.5, width * 0.6, height * 0.65);
      this.ctx.quadraticCurveTo(width * 0.3, height * 0.4, width * 0.85, height * 0.5);
      this.ctx.quadraticCurveTo(width * 0.7, height * 0.7, width * 0.7, height * 0.88);
      this.ctx.stroke();
      
      this.ctx.setLineDash([]);
    }

    this.ctx.restore();
  }

  renderDigestiveOrganComparison(x, y, width, height) {
    this.ctx.save();
    this.ctx.translate(x, y);

    // Title
    this.ctx.font = 'bold 22px Arial';
    this.ctx.fillStyle = '#2C3E50';
    this.ctx.textAlign = 'center';
    this.ctx.fillText('Digestive Organs', width / 2, -20);

    const organWidth = width * 0.22;
    const organHeight = height * 0.4;
    const spacing = width * 0.25;

    // Stomach
    AnatomicalShapes.drawStomach(this.ctx, width * 0.02, height * 0.1, organWidth, organHeight);
    this.addLabel('Stomach', width * 0.13, height * 0.05, '#FFA07A');
    this.ctx.font = '11px Arial';
    this.ctx.fillStyle = '#7F8C8D';
    this.ctx.textAlign = 'center';
    this.ctx.fillText('Digests proteins', width * 0.13, height * 0.55);
    this.ctx.fillText('Acidic environment', width * 0.13, height * 0.58);

    // Liver
    AnatomicalShapes.drawLiver(this.ctx, width * 0.02 + spacing, height * 0.1, organWidth, organHeight);
    this.addLabel('Liver', width * 0.13 + spacing, height * 0.05, '#8B4513');
    this.ctx.font = '11px Arial';
    this.ctx.fillStyle = '#7F8C8D';
    this.ctx.fillText('Produces bile', width * 0.13 + spacing, height * 0.55);
    this.ctx.fillText('Detoxifies blood', width * 0.13 + spacing, height * 0.58);

    // Pancreas
    AnatomicalShapes.drawPancreas(this.ctx, width * 0.02 + spacing * 2, height * 0.18, organWidth * 1.3, organHeight * 0.6);
    this.addLabel('Pancreas', width * 0.13 + spacing * 2.2, height * 0.05, '#FFDAB9');
    this.ctx.font = '11px Arial';
    this.ctx.fillStyle = '#7F8C8D';
    this.ctx.fillText('Digestive enzymes', width * 0.13 + spacing * 2.2, height * 0.55);
    this.ctx.fillText('Insulin production', width * 0.13 + spacing * 2.2, height * 0.58);

    // Small intestine cross-section
    this.ctx.strokeStyle = '#FFB6C1';
    this.ctx.fillStyle = '#FFD4E5';
    this.ctx.lineWidth = 3;
    this.ctx.beginPath();
    this.ctx.arc(width * 0.13, height * 0.78, organWidth * 0.4, 0, Math.PI * 2);
    this.ctx.fill();
    this.ctx.stroke();

    // Villi
    for(let i = 0; i < 12; i++) {
      const angle = (i / 12) * Math.PI * 2;
      const vx = width * 0.13 + Math.cos(angle) * organWidth * 0.25;
      const vy = height * 0.78 + Math.sin(angle) * organWidth * 0.25;
      this.ctx.fillStyle = '#FFA4B0';
      this.ctx.beginPath();
      this.ctx.moveTo(vx, vy);
      this.ctx.lineTo(vx + Math.cos(angle) * 8, vy + Math.sin(angle) * 8);
      this.ctx.lineTo(vx + Math.cos(angle + 0.3) * 5, vy + Math.sin(angle + 0.3) * 5);
      this.ctx.closePath();
      this.ctx.fill();
    }

    this.addLabel('Small Intestine', width * 0.13, height * 0.65, '#FFB6C1');
    this.ctx.font = '11px Arial';
    this.ctx.fillStyle = '#7F8C8D';
    this.ctx.textAlign = 'center';
    this.ctx.fillText('Nutrient absorption', width * 0.13, height * 0.92);
    this.ctx.fillText('Villi increase surface', width * 0.13, height * 0.95);

    this.ctx.restore();
  }

  // ============================================================================
  // NERVOUS SYSTEM DIAGRAMS
  // ============================================================================

  renderNervousSystemDiagram(x, y, width, height, options = {}) {
    const { showLabels = true, showSignal = false } = options;

    this.ctx.save();
    this.ctx.translate(x, y);

    // Title
    this.ctx.font = 'bold 22px Arial';
    this.ctx.fillStyle = '#2C3E50';
    this.ctx.textAlign = 'center';
    this.ctx.fillText('Central Nervous System', width / 2, -20);

    // Brain
    const brainWidth = width * 0.35;
    const brainHeight = height * 0.3;
    AnatomicalShapes.drawBrain(this.ctx, width * 0.32, height * 0.05, brainWidth, brainHeight);

    // Spinal cord
    const spineWidth = width * 0.12;
    const spineHeight = height * 0.6;
    AnatomicalShapes.drawSkeleton(this.ctx, width * 0.44, height * 0.35, spineWidth, spineHeight, 'spine');

    // Peripheral nerves
    this.ctx.strokeStyle = '#FFD700';
    this.ctx.lineWidth = 2;

    // Nerves branching from spinal cord
    for(let i = 0; i < 12; i++) {
      const ny = height * (0.4 + i * 0.045);
      
      // Left side
      this.ctx.beginPath();
      this.ctx.moveTo(width * 0.44, ny);
      this.ctx.quadraticCurveTo(width * 0.3, ny + height * 0.02, width * 0.15, ny + height * 0.05);
      this.ctx.stroke();

      // Right side
      this.ctx.beginPath();
      this.ctx.moveTo(width * 0.56, ny);
      this.ctx.quadraticCurveTo(width * 0.7, ny + height * 0.02, width * 0.85, ny + height * 0.05);
      this.ctx.stroke();
    }

    // Nerve signal animation
    if(showSignal) {
      const signalY = height * (0.4 + (this.currentFrame % 60) / 5);
      this.ctx.fillStyle = '#FFD700';
      this.ctx.beginPath();
      this.ctx.arc(width * 0.5, signalY, 5, 0, Math.PI * 2);
      this.ctx.fill();
    }

    if(showLabels) {
      this.addLabel('Brain', width * 0.5, height * 0.02, '#2C3E50');
      this.addLabel('Spinal Cord', width * 0.5, height * 0.33, '#2C3E50');
      this.addLabel('Peripheral\nNerves', width * 0.1, height * 0.5, '#FFD700');
    }

    this.ctx.restore();
  }

  renderNeuronDiagram(x, y, width, height, options = {}) {
    const { showLabels = true, showSignal = false } = options;

    this.ctx.save();
    this.ctx.translate(x, y);

    // Title
    this.ctx.font = 'bold 22px Arial';
    this.ctx.fillStyle = '#2C3E50';
    this.ctx.textAlign = 'center';
    this.ctx.fillText('Neuron Structure', width / 2, -20);

    // Draw neuron
    AnatomicalShapes.drawNeuron(this.ctx, 0, 0, width, height);

    if(showLabels) {
      // Dendrites label
      this.ctx.strokeStyle = '#2C3E50';
      this.ctx.lineWidth = 1;
      this.ctx.beginPath();
      this.ctx.moveTo(width * 0.25, height * 0.3);
      this.ctx.lineTo(width * 0.1, height * 0.25);
      this.ctx.stroke();
      this.addLabel('Dendrites\n(receive signals)', width * 0.02, height * 0.23, '#2C3E50', 'left');

      // Cell body label
      this.ctx.beginPath();
      this.ctx.moveTo(width * 0.65, height * 0.5);
      this.ctx.lineTo(width * 0.8, height * 0.5);
      this.ctx.stroke();
      this.addLabel('Cell Body\n(soma)', width * 0.82, height * 0.48, '#2C3E50', 'left');

      // Nucleus label
      this.ctx.beginPath();
      this.ctx.moveTo(width * 0.55, height * 0.5);
      this.ctx.lineTo(width * 0.7, height * 0.6);
      this.ctx.stroke();
      this.addLabel('Nucleus', width * 0.72, height * 0.58, '#2C3E50', 'left');

      // Axon label
      this.ctx.beginPath();
      this.ctx.moveTo(width * 0.65, height * 0.8);
      this.ctx.lineTo(width * 0.8, height * 0.8);
      this.ctx.stroke();
      this.addLabel('Axon\n(transmits signals)', width * 0.82, height * 0.78, '#2C3E50', 'left');

      // Myelin sheath label
      this.ctx.beginPath();
      this.ctx.moveTo(width * 0.55, height * 0.68);
      this.ctx.lineTo(width * 0.7, height * 0.65);
      this.ctx.stroke();
      this.addLabel('Myelin Sheath', width * 0.72, height * 0.63, '#2C3E50', 'left');

      // Axon terminals label
      this.ctx.beginPath();
      this.ctx.moveTo(width * 0.45, height * 0.98);
      this.ctx.lineTo(width * 0.3, height * 0.95);
      this.ctx.stroke();
      this.addLabel('Axon Terminals\n(synaptic buttons)', width * 0.02, height * 0.93, '#2C3E50', 'left');
    }

    // Signal animation
    if(showSignal) {
      const signalProgress = (this.currentFrame % 60) / 60;
      const signalY = height * (0.3 + signalProgress * 0.68);
      
      this.ctx.fillStyle = '#FFD700';
      this.ctx.shadowColor = '#FFD700';
      this.ctx.shadowBlur = 10;
      this.ctx.beginPath();
      this.ctx.arc(width * 0.5, signalY, 6, 0, Math.PI * 2);
      this.ctx.fill();
      this.ctx.shadowBlur = 0;
    }

    this.ctx.restore();
  }

  // ============================================================================
  // SKELETAL SYSTEM DIAGRAMS
  // ============================================================================

  renderSkeletalSystemDiagram(x, y, width, height, options = {}) {
    const { showLabels = true, bone = 'skull' } = options;

    this.ctx.save();
    this.ctx.translate(x, y);

    const boneNames = {
      'skull': 'Human Skull',
      'femur': 'Femur (Thigh Bone)',
      'ribcage': 'Ribcage',
      'spine': 'Vertebral Column'
    };

    // Title
    this.ctx.font = 'bold 22px Arial';
    this.ctx.fillStyle = '#2C3E50';
    this.ctx.textAlign = 'center';
    this.ctx.fillText(boneNames[bone] || 'Skeletal System', width / 2, -20);

    // Draw bone
    AnatomicalShapes.drawSkeleton(this.ctx, 0, 0, width, height, bone);

    if(showLabels) {
      switch(bone) {
        case 'skull':
          this.addLabel('Cranium', width * 0.5, height * 0.15, '#2C3E50');
          this.addLabel('Eye Socket', width * 0.35, height * 0.42, '#2C3E50');
          this.addLabel('Nasal Cavity', width * 0.5, height * 0.57, '#2C3E50');
          this.addLabel('Mandible', width * 0.5, height * 0.85, '#2C3E50');
          break;
        case 'femur':
          this.addLabel('Femoral Head', width * 0.3, height * 0.15, '#2C3E50');
          this.addLabel('Greater\nTrochanter', width * 0.7, height * 0.18, '#2C3E50');
          this.addLabel('Shaft', width * 0.7, height * 0.5, '#2C3E50');
          this.addLabel('Condyles', width * 0.5, height * 0.88, '#2C3E50');
          break;
        case 'ribcage':
          this.addLabel('Sternum', width * 0.5, height * 0.3, '#2C3E50');
          this.addLabel('Ribs', width * 0.15, height * 0.5, '#2C3E50');
          this.addLabel('Costal\nCartilage', width * 0.75, height * 0.35, '#2C3E50');
          break;
        case 'spine':
          this.addLabel('Cervical\nVertebrae', width * 0.7, height * 0.15, '#2C3E50');
          this.addLabel('Thoracic\nVertebrae', width * 0.7, height * 0.4, '#2C3E50');
          this.addLabel('Lumbar\nVertebrae', width * 0.7, height * 0.65, '#2C3E50');
          this.addLabel('Sacrum', width * 0.7, height * 0.85, '#2C3E50');
          break;
      }
    }

    this.ctx.restore();
  }

  renderBoneStructureDiagram(x, y, width, height) {
    this.ctx.save();
    this.ctx.translate(x, y);

    // Title
    this.ctx.font = 'bold 22px Arial';
    this.ctx.fillStyle = '#2C3E50';
    this.ctx.textAlign = 'center';
    this.ctx.fillText('Bone Structure (Cross-Section)', width / 2, -20);

    // Long bone cross-section
    const boneColor = { base: '#F5F5DC', light: '#FFFAF0', dark: '#D3D3C0' };

    // Compact bone (outer layer)
    const gradient = this.ctx.createLinearGradient(0, 0, width, 0);
    gradient.addColorStop(0, boneColor.light);
    gradient.addColorStop(0.5, boneColor.base);
    gradient.addColorStop(1, boneColor.dark);
    
    this.ctx.fillStyle = gradient;
    this.ctx.beginPath();
    this.ctx.roundRect(width * 0.2, height * 0.15, width * 0.6, height * 0.7, 10);
    this.ctx.fill();

    // Medullary cavity (marrow)
    this.ctx.fillStyle = '#FFE4C4';
    this.ctx.beginPath();
    this.ctx.roundRect(width * 0.35, height * 0.25, width * 0.3, height * 0.5, 5);
    this.ctx.fill();

    // Yellow marrow (fat)
    this.ctx.fillStyle = '#FFEFD5';
    for(let i = 0; i < 8; i++) {
      const mx = width * (0.4 + Math.random() * 0.2);
      const my = height * (0.3 + Math.random() * 0.4);
      this.ctx.beginPath();
      this.ctx.arc(mx, my, 8, 0, Math.PI * 2);
      this.ctx.fill();
    }

    // Periosteum (outer membrane)
    this.ctx.strokeStyle = '#CD853F';
    this.ctx.lineWidth = 3;
    this.ctx.beginPath();
    this.ctx.roundRect(width * 0.19, height * 0.14, width * 0.62, height * 0.72, 10);
    this.ctx.stroke();

    // Haversian canals (in compact bone)
    this.ctx.fillStyle = '#FFB6C1';
    for(let i = 0; i < 6; i++) {
      for(let j = 0; j < 3; j++) {
        const hx = width * (0.23 + j * 0.06);
        const hy = height * (0.2 + i * 0.1);
        this.ctx.beginPath();
        this.ctx.arc(hx, hy, 2, 0, Math.PI * 2);
        this.ctx.fill();

        // Concentric lamellae around canal
        for(let k = 1; k <= 2; k++) {
          this.ctx.strokeStyle = 'rgba(211, 211, 192, 0.5)';
          this.ctx.lineWidth = 1;
          this.ctx.beginPath();
          this.ctx.arc(hx, hy, 2 + k * 3, 0, Math.PI * 2);
          this.ctx.stroke();
        }
      }
    }

    // Spongy bone (at ends)
    this.ctx.strokeStyle = boneColor.dark;
    this.ctx.lineWidth = 2;
    // Top end
    for(let i = 0; i < 8; i++) {
      for(let j = 0; j < 3; j++) {
        const sx = width * (0.25 + i * 0.06);
        const sy = height * (0.05 + j * 0.03);
        this.ctx.beginPath();
        this.ctx.moveTo(sx, sy);
        this.ctx.lineTo(sx + 10, sy + 5);
        this.ctx.stroke();
      }
    }

    // Labels
    this.addLabel('Compact Bone', width * 0.05, height * 0.5, '#2C3E50', 'left');
    this.addLabel('Medullary Cavity\n(Bone Marrow)', width * 0.5, height * 0.5, '#2C3E50');
    this.addLabel('Periosteum', width * 0.15, height * 0.15, '#CD853F', 'left');
    this.addLabel('Haversian\nCanal', width * 0.23, height * 0.3, '#FFB6C1', 'center');
    this.addLabel('Spongy Bone', width * 0.5, height * 0.05, '#2C3E50');

    this.ctx.restore();
  }

  // ============================================================================
  // MUSCULAR SYSTEM DIAGRAMS
  // ============================================================================

  renderMuscularSystemDiagram(x, y, width, height, options = {}) {
    const { showLabels = true, type = 'skeletal' } = options;

    this.ctx.save();
    this.ctx.translate(x, y);

    const typeNames = {
      'skeletal': 'Skeletal Muscle',
      'cardiac': 'Cardiac Muscle',
      'smooth': 'Smooth Muscle'
    };

    // Title
    this.ctx.font = 'bold 22px Arial';
    this.ctx.fillStyle = '#2C3E50';
    this.ctx.textAlign = 'center';
    this.ctx.fillText(typeNames[type] || 'Muscle Types', width / 2, -20);

    if(type === 'skeletal') {
      // Draw bicep
      AnatomicalShapes.drawMuscle(this.ctx, width * 0.3, height * 0.1, width * 0.4, height * 0.8, 'bicep');

      if(showLabels) {
        this.addLabel('Origin\n(Tendon)', width * 0.5, height * 0.05, '#2C3E50');
        this.addLabel('Muscle Belly', width * 0.75, height * 0.5, '#DC143C');
        this.addLabel('Insertion\n(Tendon)', width * 0.5, height * 0.95, '#2C3E50');
        
        // Muscle fiber detail inset
        this.drawMuscleFiberInset(width * 0.02, height * 0.1, width * 0.25, height * 0.3);
      }
    } else if(type === 'cardiac') {
      AnatomicalShapes.drawMuscle(this.ctx, width * 0.25, height * 0.1, width * 0.5, height * 0.8, 'heart');

      if(showLabels) {
        this.addLabel('Branching\nFibers', width * 0.75, height * 0.3, '#DC143C');
        this.addLabel('Intercalated\nDiscs', width * 0.75, height * 0.5, '#A52A2A');
      }
    } else if(type === 'smooth') {
      AnatomicalShapes.drawMuscle(this.ctx, width * 0.25, height * 0.1, width * 0.5, height * 0.8, 'smooth');

      if(showLabels) {
        this.addLabel('Spindle-shaped\nCells', width * 0.75, height * 0.4, '#DC143C');
        this.addLabel('No Striations', width * 0.75, height * 0.6, '#A52A2A');
      }
    }

    this.ctx.restore();
  }

  drawMuscleFiberInset(x, y, width, height) {
    this.ctx.save();
    this.ctx.translate(x, y);

    // Border
    this.ctx.strokeStyle = '#34495E';
    this.ctx.lineWidth = 2;
    this.ctx.fillStyle = '#ECF0F1';
    this.ctx.beginPath();
    this.ctx.roundRect(0, 0, width, height, 5);
    this.ctx.fill();
    this.ctx.stroke();

    // Title
    this.ctx.font = 'bold 11px Arial';
    this.ctx.fillStyle = '#2C3E50';
    this.ctx.textAlign = 'center';
    this.ctx.fillText('Muscle Fiber Detail', width / 2, 12);

    // Muscle fiber
    this.ctx.fillStyle = '#DC143C';
    this.ctx.strokeStyle = '#A52A2A';
    this.ctx.lineWidth = 1;
    this.ctx.beginPath();
    this.ctx.roundRect(width * 0.15, height * 0.2, width * 0.7, height * 0.7, 3);
    this.ctx.fill();
    this.ctx.stroke();

    // Myofibrils (internal structures)
    for(let i = 0; i < 4; i++) {
      const fx = width * (0.25 + i * 0.15);
      this.ctx.strokeStyle = '#8B0000';
      this.ctx.lineWidth = 2;
      this.ctx.beginPath();
      this.ctx.moveTo(fx, height * 0.25);
      this.ctx.lineTo(fx, height * 0.85);
      this.ctx.stroke();
    }

    // Striations (Z-lines)
    this.ctx.strokeStyle = 'rgba(0, 0, 0, 0.3)';
    this.ctx.lineWidth = 1;
    for(let i = 0; i < 8; i++) {
      const fy = height * (0.3 + i * 0.08);
      this.ctx.beginPath();
      this.ctx.moveTo(width * 0.2, fy);
      this.ctx.lineTo(width * 0.8, fy);
      this.ctx.stroke();
    }

    // Nuclei
    this.ctx.fillStyle = '#4B0082';
    this.ctx.beginPath();
    this.ctx.ellipse(width * 0.3, height * 0.4, width * 0.05, height * 0.06, 0, 0, Math.PI * 2);
    this.ctx.fill();
    this.ctx.beginPath();
    this.ctx.ellipse(width * 0.6, height * 0.6, width * 0.05, height * 0.06, 0, 0, Math.PI * 2);
    this.ctx.fill();

    // Labels
    this.ctx.font = '9px Arial';
    this.ctx.fillStyle = '#7F8C8D';
    this.ctx.textAlign = 'left';
    this.ctx.fillText('Sarcomere', width * 0.05, height * 0.5);
    this.ctx.fillText('Nucleus', width * 0.87, height * 0.45);

    this.ctx.restore();
  }

  renderMuscleContractionDiagram(x, y, width, height) {
    this.ctx.save();
    this.ctx.translate(x, y);

    // Title
    this.ctx.font = 'bold 22px Arial';
    this.ctx.fillStyle = '#2C3E50';
    this.ctx.textAlign = 'center';
    this.ctx.fillText('Muscle Contraction (Sliding Filament)', width / 2, -20);

    const sarcomereHeight = height * 0.35;

    // Relaxed sarcomere
    this.ctx.font = 'bold 14px Arial';
    this.ctx.fillStyle = '#2C3E50';
    this.ctx.textAlign = 'left';
    this.ctx.fillText('RELAXED', width * 0.05, height * 0.15);

    this.drawSarcomere(width * 0.1, height * 0.18, width * 0.8, sarcomereHeight, false);

    // Contracted sarcomere
    this.ctx.fillText('CONTRACTED', width * 0.05, height * 0.6);
    this.drawSarcomere(width * 0.1, height * 0.63, width * 0.8, sarcomereHeight, true);

    // Arrows showing direction
    this.ctx.strokeStyle = '#E74C3C';
    this.ctx.fillStyle = '#E74C3C';
    this.ctx.lineWidth = 3;
    
    // Left arrow
    this.drawArrow(width * 0.15, height * 0.55, width * 0.35, height * 0.55, '#E74C3C', '', 10);
    // Right arrow
    this.drawArrow(width * 0.85, height * 0.55, width * 0.65, height * 0.55, '#E74C3C', '', 10);

    this.ctx.restore();
  }

  drawSarcomere(x, y, width, height, contracted = false) {
    this.ctx.save();
    this.ctx.translate(x, y);

    const overlapWidth = contracted ? width * 0.35 : width * 0.15;

    // Z-lines (boundaries)
    this.ctx.strokeStyle = '#2C3E50';
    this.ctx.lineWidth = 3;
    this.ctx.beginPath();
    this.ctx.moveTo(0, 0);
    this.ctx.lineTo(0, height);
    this.ctx.stroke();
    this.ctx.beginPath();
    this.ctx.moveTo(width, 0);
    this.ctx.lineTo(width, height);
    this.ctx.stroke();

    // M-line (center)
    this.ctx.beginPath();
    this.ctx.moveTo(width / 2, height * 0.3);
    this.ctx.lineTo(width / 2, height * 0.7);
    this.ctx.stroke();

    // Thin filaments (actin - red)
    this.ctx.strokeStyle = '#E74C3C';
    this.ctx.lineWidth = 4;
    for(let i = 0; i < 5; i++) {
      const yPos = height * (0.2 + i * 0.15);
      // From left Z-line
      this.ctx.beginPath();
      this.ctx.moveTo(5, yPos);
      this.ctx.lineTo(overlapWidth + width * 0.1, yPos);
      this.ctx.stroke();
      // From right Z-line
      this.ctx.beginPath();
      this.ctx.moveTo(width - 5, yPos);
      this.ctx.lineTo(width - overlapWidth - width * 0.1, yPos);
      this.ctx.stroke();
    }

    // Thick filaments (myosin - blue)
    this.ctx.strokeStyle = '#3498DB';
    this.ctx.lineWidth = 6;
    for(let i = 0; i < 4; i++) {
      const yPos = height * (0.25 + i * 0.17);
      this.ctx.beginPath();
      this.ctx.moveTo(width / 2 - width * 0.2, yPos);
      this.ctx.lineTo(width / 2 + width * 0.2, yPos);
      this.ctx.stroke();

      // Myosin heads
      this.ctx.fillStyle = '#2980B9';
      for(let j = 0; j < 6; j++) {
        const headX = width / 2 - width * 0.15 + j * width * 0.06;
        this.ctx.beginPath();
        this.ctx.arc(headX, yPos - 3, 3, 0, Math.PI * 2);
        this.ctx.fill();
        this.ctx.beginPath();
        this.ctx.arc(headX, yPos + 3, 3, 0, Math.PI * 2);
        this.ctx.fill();
      }
    }

    // Labels
    this.ctx.font = '10px Arial';
    this.ctx.fillStyle = '#7F8C8D';
    this.ctx.textAlign = 'center';
    this.ctx.fillText('Z', 0, -5);
    this.ctx.fillText('Z', width, -5);
    this.ctx.fillText('M', width / 2, -5);

    this.ctx.restore();
  }

  // ============================================================================
  // CELLULAR & MICROSCOPIC DIAGRAMS
  // ============================================================================

  renderCellDiagram(x, y, width, height, options = {}) {
    const { showLabels = true, type = 'generic' } = options;

    this.ctx.save();
    this.ctx.translate(x, y);

    // Title
    this.ctx.font = 'bold 22px Arial';
    this.ctx.fillStyle = '#2C3E50';
    this.ctx.textAlign = 'center';
    this.ctx.fillText('Animal Cell Structure', width / 2, -20);

    // Draw cell
    const cellSize = Math.min(width, height) * 0.4;
    AnatomicalShapes.drawCell(this.ctx, width / 2, height / 2, cellSize, type);

    if(showLabels) {
      // Cell membrane
      this.ctx.strokeStyle = '#2C3E50';
      this.ctx.lineWidth = 1;
      this.ctx.beginPath();
      this.ctx.moveTo(width * 0.75, height * 0.35);
      this.ctx.lineTo(width * 0.9, height * 0.3);
      this.ctx.stroke();
      this.addLabel('Cell Membrane', width * 0.92, height * 0.28, '#2C3E50', 'left');

      // Nucleus
      this.ctx.beginPath();
      this.ctx.moveTo(width * 0.55, height * 0.45);
      this.ctx.lineTo(width * 0.7, height * 0.15);
      this.ctx.stroke();
      this.addLabel('Nucleus', width * 0.72, height * 0.13, '#2C3E50', 'left');

      // Mitochondria
      this.ctx.beginPath();
      this.ctx.moveTo(width * 0.3, height * 0.6);
      this.ctx.lineTo(width * 0.1, height * 0.6);
      this.ctx.stroke();
      this.addLabel('Mitochondrion', width * 0.02, height * 0.58, '#2C3E50', 'left');

      // Endoplasmic reticulum
      this.ctx.beginPath();
      this.ctx.moveTo(width * 0.65, height * 0.65);
      this.ctx.lineTo(width * 0.9, height * 0.7);
      this.ctx.stroke();
      this.addLabel('Endoplasmic\nReticulum', width * 0.92, height * 0.68, '#2C3E50', 'left');

      // Golgi apparatus
      this.ctx.beginPath();
      this.ctx.moveTo(width * 0.3, height * 0.7);
      this.ctx.lineTo(width * 0.1, height * 0.8);
      this.ctx.stroke();
      this.addLabel('Golgi Apparatus', width * 0.02, height * 0.78, '#2C3E50', 'left');
    }

    this.ctx.restore();
  }

  renderBloodCellsDiagram(x, y, width, height, options = {}) {
    const { showLabels = true } = options;

    this.ctx.save();
    this.ctx.translate(x, y);

    // Title
    this.ctx.font = 'bold 22px Arial';
    this.ctx.fillStyle = '#2C3E50';
    this.ctx.textAlign = 'center';
    this.ctx.fillText('Blood Cells', width / 2, -20);

    const cellSpacing = width * 0.2;
    const startX = width * 0.15;
    const cellY = height * 0.4;

    // Red Blood Cell
    AnatomicalShapes.drawRedBloodCell(this.ctx, startX, cellY, 25);
    if(showLabels) {
      this.addLabel('Red Blood Cell\n(Erythrocyte)', startX, cellY + 50, '#E74C3C');
      this.ctx.font = '11px Arial';
      this.ctx.fillStyle = '#7F8C8D';
      this.ctx.textAlign = 'center';
      this.ctx.fillText('Carries oxygen', startX, cellY + 75);
    }

    // White Blood Cells
    const wbcTypes = ['neutrophil', 'lymphocyte', 'monocyte'];
    const wbcNames = ['Neutrophil', 'Lymphocyte', 'Monocyte'];
    
    for(let i = 0; i < 3; i++) {
      const cellX = startX + (i + 1) * cellSpacing;
      AnatomicalShapes.drawWhiteBloodCell(this.ctx, cellX, cellY, 25, wbcTypes[i]);
      if(showLabels) {
        this.addLabel(`${wbcNames[i]}\n(White Blood Cell)`, cellX, cellY + 50, '#D0D0F8');
        this.ctx.font = '11px Arial';
        this.ctx.fillStyle = '#7F8C8D';
        this.ctx.textAlign = 'center';
        const functions = ['Fights bacteria', 'Immune response', 'Phagocytosis'];
        this.ctx.fillText(functions[i], cellX, cellY + 75);
      }
    }

    // Platelets
    for(let i = 0; i < 5; i++) {
      const px = width * (0.3 + i * 0.08);
      const py = height * 0.8;
      AnatomicalShapes.drawPlatelet(this.ctx, px, py, 8);
    }
    if(showLabels) {
      this.addLabel('Platelets\n(Thrombocytes)', width * 0.5, height * 0.85, '#DDA0DD');
      this.ctx.font = '11px Arial';
      this.ctx.fillStyle = '#7F8C8D';
      this.ctx.textAlign = 'center';
      this.ctx.fillText('Blood clotting', width * 0.5, height * 0.92);
    }

    this.ctx.restore();
  }

  renderDNADiagram(x, y, width, height, options = {}) {
    const { showLabels = true } = options;

    this.ctx.save();
    this.ctx.translate(x, y);

    // Title
    this.ctx.font = 'bold 22px Arial';
    this.ctx.fillStyle = '#2C3E50';
    this.ctx.textAlign = 'center';
    this.ctx.fillText('DNA Double Helix', width / 2, -20);

    // Draw DNA
    AnatomicalShapes.drawDNA(this.ctx, 0, 0, width, height);

    if(showLabels) {
      // Sugar-phosphate backbone
      this.ctx.strokeStyle = '#2C3E50';
      this.ctx.lineWidth = 1;
      this.ctx.beginPath();
      this.ctx.moveTo(width * 0.25, height * 0.2);
      this.ctx.lineTo(width * 0.1, height * 0.2);
      this.ctx.stroke();
      this.addLabel('Sugar-Phosphate\nBackbone', width * 0.02, height * 0.18, '#4169E1', 'left');

      // Base pairs
      this.ctx.beginPath();
      this.ctx.moveTo(width * 0.5, height * 0.4);
      this.ctx.lineTo(width * 0.7, height * 0.4);
      this.ctx.stroke();
      this.addLabel('Base Pairs', width * 0.72, height * 0.38, '#808080', 'left');

      // Base pair legend
      this.drawLegend(width * 0.65, height * 0.65, [
        { color: '#FF6B6B', label: 'Adenine (A)' },
        { color: '#4ECDC4', label: 'Thymine (T)' },
        { color: '#FFD93D', label: 'Guanine (G)' },
        { color: '#95E1D3', label: 'Cytosine (C)' }
      ]);

      // Complementary base pairing note
      this.ctx.font = '12px Arial';
      this.ctx.fillStyle = '#7F8C8D';
      this.ctx.textAlign = 'left';
      this.ctx.fillText('A pairs with T', width * 0.65, height * 0.55);
      this.ctx.fillText('G pairs with C', width * 0.65, height * 0.58);
    }

    this.ctx.restore();
  }

  // ============================================================================
  // INTEGUMENTARY SYSTEM (SKIN) DIAGRAMS
  // ============================================================================

  renderSkinDiagram(x, y, width, height, options = {}) {
    const { showLabels = true } = options;

    this.ctx.save();
    this.ctx.translate(x, y);

    // Title
    this.ctx.font = 'bold 22px Arial';
    this.ctx.fillStyle = '#2C3E50';
    this.ctx.textAlign = 'center';
    this.ctx.fillText('Skin Structure (Cross-Section)', width / 2, -20);

    // Draw skin
    AnatomicalShapes.drawSkin(this.ctx, 0, 0, width, height, 'cross-section');

    if(showLabels) {
      // Layer labels
      this.addLabel('Epidermis', width * 0.85, height * 0.08, '#F5D0C5', 'left');
      this.addLabel('Dermis', width * 0.85, height * 0.45, '#E8B4A8', 'left');
      this.addLabel('Hypodermis\n(Subcutaneous)', width * 0.85, height * 0.85, '#FFE4B5', 'left');

      // Structure labels
      this.ctx.strokeStyle = '#2C3E50';
      this.ctx.lineWidth = 1;
      
      // Hair follicle
      this.ctx.beginPath();
      this.ctx.moveTo(width * 0.32, height * 0.3);
      this.ctx.lineTo(width * 0.15, height * 0.25);
      this.ctx.stroke();
      this.addLabel('Hair Follicle', width * 0.02, height * 0.23, '#8B4513', 'left');

      // Sebaceous gland
      this.ctx.beginPath();
      this.ctx.moveTo(width * 0.36, height * 0.22);
      this.ctx.lineTo(width * 0.45, height * 0.18);
      this.ctx.stroke();
      this.addLabel('Oil Gland', width * 0.47, height * 0.16, '#F0E68C', 'left');

      // Sweat gland
      this.ctx.beginPath();
      this.ctx.moveTo(width * 0.7, height * 0.6);
      this.ctx.lineTo(width * 0.8, height * 0.6);
      this.ctx.stroke();
      this.addLabel('Sweat Gland', width * 0.82, height * 0.58, '#87CEEB', 'left');

      // Blood vessels
      this.ctx.beginPath();
      this.ctx.moveTo(width * 0.5, height * 0.4);
      this.ctx.lineTo(width * 0.6, height * 0.35);
      this.ctx.stroke();
      this.addLabel('Blood Vessels', width * 0.62, height * 0.33, '#E74C3C', 'left');

      // Nerve endings
      this.ctx.beginPath();
      this.ctx.moveTo(width * 0.2, height * 0.2);
      this.ctx.lineTo(width * 0.1, height * 0.15);
      this.ctx.stroke();
      this.addLabel('Nerve Endings', width * 0.02, height * 0.13, '#FFD700', 'left');
    }

    this.ctx.restore();
  }

  // ============================================================================
  // URINARY SYSTEM DIAGRAMS
  // ============================================================================

  renderUrinarySystemDiagram(x, y, width, height, options = {}) {
    const { showLabels = true } = options;

    this.ctx.save();
    this.ctx.translate(x, y);

    // Title
    this.ctx.font = 'bold 22px Arial';
    this.ctx.fillStyle = '#2C3E50';
    this.ctx.textAlign = 'center';
    this.ctx.fillText('Urinary System', width / 2, -20);

    // Kidneys
    const kidneyWidth = width * 0.2;
    const kidneyHeight = height * 0.35;
    AnatomicalShapes.drawKidney(this.ctx, width * 0.15, height * 0.15, kidneyWidth, kidneyHeight, 'left');
    AnatomicalShapes.drawKidney(this.ctx, width * 0.65, height * 0.15, kidneyWidth, kidneyHeight, 'right');

    // Bladder
    const bladderWidth = width * 0.25;
    const bladderHeight = height * 0.3;
    AnatomicalShapes.drawBladder(this.ctx, width * 0.375, height * 0.6, bladderWidth, bladderHeight, 0.6);

    // Ureters connecting kidneys to bladder
    this.ctx.strokeStyle = '#FFD700';
    this.ctx.lineWidth = 4;
    // Left ureter
    this.ctx.beginPath();
    this.ctx.moveTo(width * 0.32, height * 0.48);
    this.ctx.quadraticCurveTo(width * 0.35, height * 0.55, width * 0.42, height * 0.65);
    this.ctx.stroke();
    // Right ureter
    this.ctx.beginPath();
    this.ctx.moveTo(width * 0.68, height * 0.48);
    this.ctx.quadraticCurveTo(width * 0.65, height * 0.55, width * 0.58, height * 0.65);
    this.ctx.stroke();

    // Urethra
    this.ctx.beginPath();
    this.ctx.moveTo(width * 0.5, height * 0.9);
    this.ctx.lineTo(width * 0.5, height * 0.98);
    this.ctx.stroke();

    if(showLabels) {
      this.addLabel('Kidneys', width * 0.5, height * 0.08, '#8B0000');
      this.addLabel('Ureters', width * 0.38, height * 0.55, '#FFD700');
      this.addLabel('Bladder', width * 0.5, height * 0.58, '#FFD700');
      this.addLabel('Urethra', width * 0.55, height * 0.94, '#FFD700');

      // Function notes
      this.ctx.font = '12px Arial';
      this.ctx.fillStyle = '#7F8C8D';
      this.ctx.textAlign = 'center';
      this.ctx.fillText('Filters blood', width * 0.25, height * 0.52);
      this.ctx.fillText('Stores urine', width * 0.5, height * 0.95);
    }

    this.ctx.restore();
  }

  renderKidneyDetailDiagram(x, y, width, height) {
    this.ctx.save();
    this.ctx.translate(x, y);

    // Title
    this.ctx.font = 'bold 22px Arial';
    this.ctx.fillStyle = '#2C3E50';
    this.ctx.textAlign = 'center';
    this.ctx.fillText('Kidney Internal Structure', width / 2, -20);

    // Draw kidney
    AnatomicalShapes.drawKidney(this.ctx, width * 0.2, height * 0.1, width * 0.6, height * 0.8, 'left');

    // Labels with leader lines
    this.ctx.strokeStyle = '#2C3E50';
    this.ctx.lineWidth = 1;

    // Renal cortex
    this.ctx.beginPath();
    this.ctx.moveTo(width * 0.35, height * 0.3);
    this.ctx.lineTo(width * 0.15, height * 0.25);
    this.ctx.stroke();
    this.addLabel('Renal Cortex', width * 0.02, height * 0.23, '#A52A2A', 'left');

    // Renal medulla
    this.ctx.beginPath();
    this.ctx.moveTo(width * 0.45, height * 0.45);
    this.ctx.lineTo(width * 0.15, height * 0.45);
    this.ctx.stroke();
    this.addLabel('Renal Medulla\n(Pyramids)', width * 0.02, height * 0.43, '#8B0000', 'left');

    // Renal pelvis
    this.ctx.beginPath();
    this.ctx.moveTo(width * 0.65, height * 0.5);
    this.ctx.lineTo(width * 0.85, height * 0.5);
    this.ctx.stroke();
    this.addLabel('Renal Pelvis', width * 0.87, height * 0.48, '#FFD700', 'left');

    // Ureter
    this.ctx.beginPath();
    this.ctx.moveTo(width * 0.68, height * 0.75);
    this.ctx.lineTo(width * 0.85, height * 0.8);
    this.ctx.stroke();
    this.addLabel('Ureter', width * 0.87, height * 0.78, '#FFD700', 'left');

    // Renal artery
    this.ctx.beginPath();
    this.ctx.moveTo(width * 0.7, height * 0.42);
    this.ctx.lineTo(width * 0.85, height * 0.35);
    this.ctx.stroke();
    this.addLabel('Renal Artery', width * 0.87, height * 0.33, '#E74C3C', 'left');

    // Renal vein
    this.ctx.beginPath();
    this.ctx.moveTo(width * 0.7, height * 0.58);
    this.ctx.lineTo(width * 0.85, height * 0.65);
    this.ctx.stroke();
    this.addLabel('Renal Vein', width * 0.87, height * 0.63, '#8B4789', 'left');

    // Nephron inset
    this.drawNephronInset(width * 0.02, height * 0.55, width * 0.3, height * 0.4);

    this.ctx.restore();
  }

  drawNephronInset(x, y, width, height) {
    this.ctx.save();
    this.ctx.translate(x, y);

    // Border
    this.ctx.strokeStyle = '#34495E';
    this.ctx.lineWidth = 2;
    this.ctx.fillStyle = '#ECF0F1';
    this.ctx.beginPath();
    this.ctx.roundRect(0, 0, width, height, 5);
    this.ctx.fill();
    this.ctx.stroke();

    // Title
    this.ctx.font = 'bold 11px Arial';
    this.ctx.fillStyle = '#2C3E50';
    this.ctx.textAlign = 'center';
    this.ctx.fillText('Nephron (Functional Unit)', width / 2, 12);

    // Glomerulus (ball of capillaries)
    this.ctx.fillStyle = '#E74C3C';
    this.ctx.strokeStyle = '#C0392B';
    this.ctx.lineWidth = 1;
    this.ctx.beginPath();
    this.ctx.arc(width * 0.3, height * 0.25, width * 0.08, 0, Math.PI * 2);
    this.ctx.fill();
    this.ctx.stroke();

    // Bowman's capsule
    this.ctx.strokeStyle = '#3498DB';
    this.ctx.lineWidth = 2;
    this.ctx.fillStyle = 'rgba(52, 152, 219, 0.2)';
    this.ctx.beginPath();
    this.ctx.arc(width * 0.3, height * 0.25, width * 0.12, 0, Math.PI * 2);
    this.ctx.fill();
    this.ctx.stroke();

    // Proximal convoluted tubule
    this.ctx.strokeStyle = '#F39C12';
    this.ctx.lineWidth = 3;
    this.ctx.beginPath();
    this.ctx.moveTo(width * 0.42, height * 0.25);
    for(let i = 0; i < 3; i++) {
      this.ctx.bezierCurveTo(
        width * (0.5 + i * 0.05), height * (0.3 + i * 0.03),
        width * (0.5 + i * 0.05), height * (0.35 + i * 0.03),
        width * (0.52 + i * 0.05), height * (0.37 + i * 0.03)
      );
    }
    this.ctx.stroke();

    // Loop of Henle
    this.ctx.strokeStyle = '#9B59B6';
    this.ctx.beginPath();
    this.ctx.moveTo(width * 0.67, height * 0.46);
    this.ctx.lineTo(width * 0.7, height * 0.65);
    this.ctx.lineTo(width * 0.6, height * 0.65);
    this.ctx.lineTo(width * 0.57, height * 0.46);
    this.ctx.stroke();

    // Distal convoluted tubule
    this.ctx.strokeStyle = '#1ABC9C';
    this.ctx.beginPath();
    this.ctx.moveTo(width * 0.57, height * 0.46);
    for(let i = 0; i < 2; i++) {
      this.ctx.bezierCurveTo(
        width * (0.5 - i * 0.08), height * (0.5 + i * 0.05),
        width * (0.5 - i * 0.08), height * (0.55 + i * 0.05),
        width * (0.45 - i * 0.08), height * (0.58 + i * 0.05)
      );
    }
    this.ctx.stroke();

    // Collecting duct
    this.ctx.strokeStyle = '#E67E22';
    this.ctx.lineWidth = 4;
    this.ctx.beginPath();
    this.ctx.moveTo(width * 0.29, height * 0.68);
    this.ctx.lineTo(width * 0.29, height * 0.9);
    this.ctx.stroke();

    // Labels
    this.ctx.font = '8px Arial';
    this.ctx.fillStyle = '#7F8C8D';
    this.ctx.textAlign = 'center';
    this.ctx.fillText('Glomerulus', width * 0.3, height * 0.15);
    this.ctx.fillText('Loop of Henle', width * 0.63, height * 0.75);
    this.ctx.fillText('Collecting\nDuct', width * 0.29, height * 0.95);

    this.ctx.restore();
  }

  // ============================================================================
  // SENSORY ORGAN DIAGRAMS
  // ============================================================================

  renderEyeDiagram(x, y, width, height, options = {}) {
    const { showLabels = true, pupilDilation = 0.3 } = options;

    this.ctx.save();
    this.ctx.translate(x, y);

    // Title
    this.ctx.font = 'bold 22px Arial';
    this.ctx.fillStyle = '#2C3E50';
    this.ctx.textAlign = 'center';
    this.ctx.fillText('Human Eye Anatomy', width / 2, -20);

    // Draw eye
    AnatomicalShapes.drawEye(this.ctx, width * 0.2, height * 0.2, width * 0.6, height * 0.6, pupilDilation);

    if(showLabels) {
      this.ctx.strokeStyle = '#2C3E50';
      this.ctx.lineWidth = 1;

      // Cornea
      this.ctx.beginPath();
      this.ctx.moveTo(width * 0.55, height * 0.35);
      this.ctx.lineTo(width * 0.7, height * 0.25);
      this.ctx.stroke();
      this.addLabel('Cornea', width * 0.72, height * 0.23, '#2C3E50', 'left');

      // Iris
      this.ctx.beginPath();
      this.ctx.moveTo(width * 0.6, height * 0.5);
      this.ctx.lineTo(width * 0.8, height * 0.5);
      this.ctx.stroke();
      this.addLabel('Iris', width * 0.82, height * 0.48, '#8B7355', 'left');

      // Pupil
      this.ctx.beginPath();
      this.ctx.moveTo(width * 0.5, height * 0.5);
      this.ctx.lineTo(width * 0.3, height * 0.5);
      this.ctx.stroke();
      this.addLabel('Pupil', width * 0.02, height * 0.48, '#000000', 'left');

      // Lens
      this.ctx.beginPath();
      this.ctx.moveTo(width * 0.53, height * 0.6);
      this.ctx.lineTo(width * 0.7, height * 0.7);
      this.ctx.stroke();
      this.addLabel('Lens', width * 0.72, height * 0.68, '#2C3E50', 'left');

      // Retina
      this.ctx.beginPath();
      this.ctx.moveTo(width * 0.73, height * 0.55);
      this.ctx.lineTo(width * 0.85, height * 0.6);
      this.ctx.stroke();
      this.addLabel('Retina', width * 0.87, height * 0.58, '#2C3E50', 'left');

      // Optic nerve
      this.ctx.strokeStyle = '#FFD700';
      this.ctx.lineWidth = 5;
      this.ctx.beginPath();
      this.ctx.moveTo(width * 0.5, height * 0.6);
      this.ctx.lineTo(width * 0.5, height * 0.85);
      this.ctx.stroke();
      
      this.ctx.strokeStyle = '#2C3E50';
      this.ctx.lineWidth = 1;
      this.ctx.beginPath();
      this.ctx.moveTo(width * 0.5, height * 0.75);
      this.ctx.lineTo(width * 0.3, height * 0.8);
      this.ctx.stroke();
      this.addLabel('Optic Nerve', width * 0.02, height * 0.78, '#FFD700', 'left');
    }

    this.ctx.restore();
  }

  // ============================================================================
  // VALVE DIAGRAMS
  // ============================================================================

  renderHeartValvesDiagram(x, y, width, height, options = {}) {
    const { showLabels = true } = options;

    this.ctx.save();
    this.ctx.translate(x, y);

    // Title
    this.ctx.font = 'bold 22px Arial';
    this.ctx.fillStyle = '#2C3E50';
    this.ctx.textAlign = 'center';
    this.ctx.fillText('Heart Valves', width / 2, -20);

    const valveSize = width * 0.18;
    const spacing = width * 0.25;

    // Atrioventricular valves
    this.ctx.font = 'bold 14px Arial';
    this.ctx.fillStyle = '#2C3E50';
    this.ctx.textAlign = 'center';
    this.ctx.fillText('AV Valves', width * 0.25, height * 0.15);

    // Tricuspid valve (closed)
    AnatomicalShapes.drawValve(
      this.ctx,
      width * 0.08,
      height * 0.2,
      valveSize,
      valveSize * 1.2,
      'atrioventricular',
      'closed'
    );
    this.addLabel('Tricuspid\n(Closed)', width * 0.17, height * 0.48, '#2C3E50');

    // Mitral valve (open)
    AnatomicalShapes.drawValve(
      this.ctx,
      width * 0.08 + spacing,
      height * 0.2,
      valveSize,
      valveSize * 1.2,
      'mitral',
      'open'
    );
    this.addLabel('Mitral\n(Open)', width * 0.17 + spacing, height * 0.48, '#2C3E50');

    // Semilunar valves
    this.ctx.font = 'bold 14px Arial';
    this.ctx.fillStyle = '#2C3E50';
    this.ctx.fillText('Semilunar Valves', width * 0.75, height * 0.15);

    // Pulmonary valve (open)
    AnatomicalShapes.drawValve(
      this.ctx,
      width * 0.58,
      height * 0.2,
      valveSize,
      valveSize * 1.2,
      'semilunar',
      'open'
    );
    this.addLabel('Pulmonary\n(Open)', width * 0.67, height * 0.48, '#2C3E50');

    // Aortic valve (closed)
    AnatomicalShapes.drawValve(
      this.ctx,
      width * 0.58 + spacing,
      height * 0.2,
      valveSize,
      valveSize * 1.2,
      'semilunar',
      'closed'
    );
    this.addLabel('Aortic\n(Closed)', width * 0.67 + spacing, height * 0.48, '#2C3E50');

    // Function description
    this.ctx.font = '12px Arial';
    this.ctx.fillStyle = '#7F8C8D';
    this.ctx.textAlign = 'center';
    this.ctx.fillText('Prevent backflow of blood through the heart', width / 2, height * 0.6);

    if(showLabels) {
      // Legend
      this.drawLegend(width * 0.3, height * 0.7, [
        { color: '#F5F5DC', label: 'Valve Leaflets' },
        { color: '#CD853F', label: 'Chordae Tendineae' },
        { color: '#DC143C', label: 'Papillary Muscle' }
      ]);
    }

    this.ctx.restore();
  }

  

  // ============================================================================
  // ANIMATION & RENDERING
  // ============================================================================

  animate() {
    this.currentFrame++;
    requestAnimationFrame(() => this.animate());
  }

  clear() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
  }

  saveAsPNG(filename = 'anatomical-diagram.png') {
    const link = document.createElement('a');
    link.download = filename;
    link.href = this.canvas.toDataURL();
    link.click();
  }
}

// ============================================================================
// ANATOMICAL DIAGRAMS REGISTRY - Comprehensive Anatomy Configuration System
// ============================================================================

class AnatomicalDiagramsRegistry {
    static diagrams = {
        // ===== 1. CELL BIOLOGY =====
        'animalCell': {
            name: 'Animal Cell',
            category: 'Cell Biology',
            description: 'Complete animal cell with all organelles',
            dataRequired: [],
            usage: 'Best for cell biology education',
            examples: ['Cell biology', 'Organelles', 'Cellular anatomy'],
            defaultOptions: {
                title: 'Animal Cell Structure',
                type: 'generic',
                showLabels: true,
                width: 700,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },

        'plantCell': {
            name: 'Plant Cell',
            category: 'Cell Biology',
            description: 'Plant cell with cell wall, chloroplasts, and large central vacuole',
            dataRequired: [],
            usage: 'Best for plant cell biology education',
            examples: ['Botany', 'Plant biology', 'Cell comparison'],
            defaultOptions: {
                title: 'Plant Cell Structure',
                showLabels: true,
                width: 700,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },

        'prokaryoticVsEukaryotic': {
            name: 'Prokaryotic vs Eukaryotic Cell',
            category: 'Cell Biology',
            description: 'Side-by-side comparison of prokaryotic and eukaryotic cells',
            dataRequired: [],
            usage: 'Best for comparing cell types',
            examples: ['Cell types', 'Evolution', 'Microbiology'],
            defaultOptions: {
                title: 'Prokaryotic vs Eukaryotic Cells',
                showLabels: true,
                width: 900,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'cellMembrane': {
            name: 'Cell Membrane (Phospholipid Bilayer)',
            category: 'Cell Biology',
            description: 'Fluid mosaic model showing phospholipids, proteins, and cholesterol',
            dataRequired: [],
            usage: 'Best for membrane structure education',
            examples: ['Cell membrane', 'Transport', 'Cellular biology'],
            defaultOptions: {
                title: 'Cell Membrane Structure',
                showLabels: true,
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'osmosisDiffusion': {
            name: 'Osmosis & Diffusion',
            category: 'Cell Biology',
            description: 'Passive transport mechanisms across membranes',
            dataRequired: [],
            usage: 'Best for transport mechanisms',
            examples: ['Passive transport', 'Osmosis', 'Diffusion'],
            defaultOptions: {
                title: 'Osmosis & Diffusion',
                showLabels: true,
                width: 900,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'activePassiveTransport': {
            name: 'Active vs Passive Transport',
            category: 'Cell Biology',
            description: 'Comparison of transport mechanisms requiring and not requiring energy',
            dataRequired: [],
            usage: 'Best for cellular transport education',
            examples: ['Cell transport', 'Membrane function', 'ATP usage'],
            defaultOptions: {
                title: 'Active vs Passive Transport',
                showLabels: true,
                width: 900,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'mitosis': {
            name: 'Mitosis',
            category: 'Cell Biology',
            description: 'All stages of mitotic cell division',
            dataRequired: [],
            usage: 'Best for cell division education',
            examples: ['Cell division', 'Growth', 'Reproduction'],
            defaultOptions: {
                title: 'Mitosis - Cell Division',
                showLabels: true,
                width: 900,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'meiosis': {
            name: 'Meiosis',
            category: 'Cell Biology',
            description: 'Meiotic division producing four haploid gametes',
            dataRequired: [],
            usage: 'Best for sexual reproduction and genetics',
            examples: ['Gamete formation', 'Sexual reproduction', 'Genetic variation'],
            defaultOptions: {
                title: 'Meiosis',
                showLabels: true,
                width: 900,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'organelles': {
            name: 'Cell Organelles',
            category: 'Cell Biology',
            description: 'Individual organelles with detailed structures',
            dataRequired: ['organelleType'],
            usage: 'Best for detailed organelle study',
            examples: ['Organelle function', 'Cell components', 'Cellular biology'],
            organelleTypes: ['nucleus', 'mitochondria', 'ribosome', 'endoplasmicReticulum', 'golgiApparatus', 'lysosome', 'peroxisome'],
            defaultOptions: {
                title: 'Cell Organelles',
                organelleType: 'mitochondria',
                showLabels: true,
                width: 700,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'cellCycle': {
            name: 'Cell Cycle',
            category: 'Cell Biology',
            description: 'Complete cell cycle with G1, S, G2, and M phases',
            dataRequired: [],
            usage: 'Best for cell division regulation',
            examples: ['Cell growth', 'Cell division', 'Cancer biology'],
            defaultOptions: {
                title: 'Cell Cycle',
                showLabels: true,
                width: 700,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },

        'enzymeAction': {
            name: 'Enzyme Action',
            category: 'Cell Biology',
            description: 'Lock-and-key and induced fit models of enzyme action',
            dataRequired: [],
            usage: 'Best for enzyme mechanism education',
            examples: ['Enzyme kinetics', 'Biochemistry', 'Metabolism'],
            defaultOptions: {
                title: 'Enzyme Action Mechanism',
                model: 'both', // 'lockAndKey', 'inducedFit', 'both'
                showLabels: true,
                width: 900,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        // ===== 2. GENETICS & MOLECULAR BIOLOGY =====
        'dnaStructure': {
            name: 'DNA Double Helix',
            category: 'Genetics & Molecular Biology',
            description: 'DNA structure with base pairs',
            dataRequired: [],
            usage: 'Best for genetics education',
            examples: ['Genetics', 'Molecular biology', 'DNA structure'],
            defaultOptions: {
                title: 'DNA Double Helix',
                showLabels: true,
                width: 600,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },

        'rnaStructure': {
            name: 'RNA Structure',
            category: 'Genetics & Molecular Biology',
            description: 'RNA single strand with different types (mRNA, tRNA, rRNA)',
            dataRequired: [],
            usage: 'Best for RNA education',
            examples: ['Molecular biology', 'Gene expression', 'Protein synthesis'],
            defaultOptions: {
                title: 'RNA Structure',
                rnaType: 'mRNA', // 'mRNA', 'tRNA', 'rRNA'
                showLabels: true,
                width: 700,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },

        'dnaReplication': {
            name: 'DNA Replication',
            category: 'Genetics & Molecular Biology',
            description: 'Semi-conservative DNA replication process',
            dataRequired: [],
            usage: 'Best for molecular biology and genetics',
            examples: ['DNA synthesis', 'Cell division prep', 'Molecular biology'],
            defaultOptions: {
                title: 'DNA Replication',
                showLabels: true,
                width: 600,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },

        'transcription': {
            name: 'Transcription',
            category: 'Genetics & Molecular Biology',
            description: 'DNA to RNA transcription process',
            dataRequired: [],
            usage: 'Best for gene expression education',
            examples: ['Gene expression', 'RNA synthesis', 'Molecular biology'],
            defaultOptions: {
                title: 'Transcription (DNA → RNA)',
                showLabels: true,
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'translation': {
            name: 'Translation',
            category: 'Genetics & Molecular Biology',
            description: 'RNA to protein translation at ribosome',
            dataRequired: [],
            usage: 'Best for protein synthesis education',
            examples: ['Protein synthesis', 'Ribosomes', 'Gene expression'],
            defaultOptions: {
                title: 'Translation (RNA → Protein)',
                showLabels: true,
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'codonChart': {
            name: 'Genetic Code (Codon Chart)',
            category: 'Genetics & Molecular Biology',
            description: 'Complete genetic code showing all 64 codons',
            dataRequired: [],
            usage: 'Best for understanding genetic code',
            examples: ['Genetics', 'Protein synthesis', 'Molecular biology'],
            defaultOptions: {
                title: 'Genetic Code - Codon Chart',
                showLabels: true,
                width: 700,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },

        'geneExpression': {
            name: 'Gene Expression Pathway',
            category: 'Genetics & Molecular Biology',
            description: 'Complete pathway from DNA to protein',
            dataRequired: [],
            usage: 'Best for central dogma education',
            examples: ['Gene expression', 'Central dogma', 'Molecular biology'],
            defaultOptions: {
                title: 'Gene Expression Pathway',
                showLabels: true,
                width: 800,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },

        'punnettSquare': {
            name: 'Punnett Square',
            category: 'Genetics & Molecular Biology',
            description: 'Genetic cross prediction tool',
            dataRequired: ['crossType'],
            usage: 'Best for genetics problems',
            examples: ['Mendelian genetics', 'Inheritance', 'Probability'],
            crossTypes: ['monohybrid', 'dihybrid'],
            defaultOptions: {
                title: 'Punnett Square',
                crossType: 'monohybrid',
                showLabels: true,
                width: 600,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'chromosomes': {
            name: 'Chromosome Structure',
            category: 'Genetics & Molecular Biology',
            description: 'Chromosome anatomy and homologous pairs',
            dataRequired: [],
            usage: 'Best for genetics and cell division',
            examples: ['Chromosomes', 'Karyotypes', 'Genetics'],
            defaultOptions: {
                title: 'Chromosome Structure',
                showHomologousPairs: true,
                showLabels: true,
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'crossingOver': {
            name: 'Crossing Over',
            category: 'Genetics & Molecular Biology',
            description: 'Genetic recombination during meiosis',
            dataRequired: [],
            usage: 'Best for genetic variation education',
            examples: ['Meiosis', 'Genetic variation', 'Recombination'],
            defaultOptions: {
                title: 'Crossing Over (Recombination)',
                showLabels: true,
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'mutations': {
            name: 'DNA Mutations',
            category: 'Genetics & Molecular Biology',
            description: 'Types of mutations: point, frameshift, etc.',
            dataRequired: [],
            usage: 'Best for mutation education',
            examples: ['Mutations', 'Genetic disorders', 'Evolution'],
            defaultOptions: {
                title: 'DNA Mutations',
                mutationTypes: ['point', 'frameshift', 'insertion', 'deletion'],
                showLabels: true,
                width: 900,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'recombinantDNA': {
            name: 'Recombinant DNA Technology',
            category: 'Genetics & Molecular Biology',
            description: 'Gene splicing and recombinant DNA creation',
            dataRequired: [],
            usage: 'Best for biotechnology education',
            examples: ['Genetic engineering', 'Biotechnology', 'GMOs'],
            defaultOptions: {
                title: 'Recombinant DNA Technology',
                showLabels: true,
                width: 800,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },

        'pcrCycle': {
            name: 'PCR (Polymerase Chain Reaction)',
            category: 'Genetics & Molecular Biology',
            description: 'DNA amplification cycle',
            dataRequired: [],
            usage: 'Best for molecular biology techniques',
            examples: ['PCR', 'DNA amplification', 'Molecular techniques'],
            defaultOptions: {
                title: 'PCR Cycle',
                showLabels: true,
                width: 800,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },

        // ===== 3. EVOLUTION & NATURAL SELECTION =====
        'darwinsFinches': {
            name: "Darwin's Finches",
            category: 'Evolution & Natural Selection',
            description: 'Beak adaptations in Galapagos finches',
            dataRequired: [],
            usage: 'Best for natural selection examples',
            examples: ['Natural selection', 'Adaptation', 'Evolution'],
            defaultOptions: {
                title: "Darwin's Finches - Beak Adaptations",
                showLabels: true,
                width: 900,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'naturalSelection': {
            name: 'Natural Selection Process',
            category: 'Evolution & Natural Selection',
            description: 'Step-by-step natural selection mechanism',
            dataRequired: [],
            usage: 'Best for evolution education',
            examples: ['Evolution', 'Selection pressure', 'Adaptation'],
            defaultOptions: {
                title: 'Natural Selection Process',
                showLabels: true,
                width: 900,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },

        'phylogeneticTree': {
            name: 'Phylogenetic Tree',
            category: 'Evolution & Natural Selection',
            description: 'Evolutionary relationships between species',
            dataRequired: [],
            usage: 'Best for evolutionary relationships',
            examples: ['Evolution', 'Taxonomy', 'Common ancestry'],
            defaultOptions: {
                title: 'Phylogenetic Tree',
                showLabels: true,
                width: 800,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },

        'adaptiveRadiation': {
            name: 'Adaptive Radiation',
            category: 'Evolution & Natural Selection',
            description: 'Divergent evolution from common ancestor',
            dataRequired: [],
            usage: 'Best for speciation education',
            examples: ['Speciation', 'Divergent evolution', 'Biodiversity'],
            defaultOptions: {
                title: 'Adaptive Radiation',
                showLabels: true,
                width: 800,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },

        'fossilLayers': {
            name: 'Fossil Layers (Stratigraphy)',
            category: 'Evolution & Natural Selection',
            description: 'Geological time and fossil record',
            dataRequired: [],
            usage: 'Best for fossil evidence of evolution',
            examples: ['Fossils', 'Geological time', 'Evolution evidence'],
            defaultOptions: {
                title: 'Fossil Layers',
                showLabels: true,
                width: 700,
                height: 800,
                backgroundColor: '#ffffff'
            }
        },

        'hardyWeinberg': {
            name: 'Hardy-Weinberg Equilibrium',
            category: 'Evolution & Natural Selection',
            description: 'Population genetics equilibrium graph',
            dataRequired: [],
            usage: 'Best for population genetics',
            examples: ['Population genetics', 'Allele frequency', 'Evolution'],
            defaultOptions: {
                title: 'Hardy-Weinberg Equilibrium',
                showLabels: true,
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'speciation': {
            name: 'Speciation',
            category: 'Evolution & Natural Selection',
            description: 'Formation of new species (allopatric, sympatric)',
            dataRequired: [],
            usage: 'Best for speciation mechanisms',
            examples: ['Speciation', 'Reproductive isolation', 'Evolution'],
            defaultOptions: {
                title: 'Speciation Mechanisms',
                speciationType: 'allopatric', // 'allopatric', 'sympatric'
                showLabels: true,
                width: 900,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'comparativeAnatomy': {
            name: 'Comparative Anatomy',
            category: 'Evolution & Natural Selection',
            description: 'Homologous and analogous structures',
            dataRequired: [],
            usage: 'Best for anatomical evidence of evolution',
            examples: ['Homologous structures', 'Analogous structures', 'Evolution'],
            defaultOptions: {
                title: 'Comparative Anatomy',
                showLabels: true,
                width: 900,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        // ===== 4. ECOLOGY =====
        'foodChain': {
            name: 'Food Chain',
            category: 'Ecology',
            description: 'Simple food chain showing energy flow',
            dataRequired: [],
            usage: 'Best for basic ecology education',
            examples: ['Energy flow', 'Trophic levels', 'Ecosystems'],
            defaultOptions: {
                title: 'Food Chain',
                showLabels: true,
                width: 600,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },

        'foodWeb': {
            name: 'Food Web',
            category: 'Ecology',
            description: 'Complex interconnected food relationships',
            dataRequired: [],
            usage: 'Best for ecosystem complexity',
            examples: ['Food webs', 'Ecosystem interactions', 'Energy flow'],
            defaultOptions: {
                title: 'Food Web',
                showLabels: true,
                width: 900,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },

        'energyPyramid': {
            name: 'Energy Pyramid',
            category: 'Ecology',
            description: 'Trophic pyramid showing 10% energy transfer rule',
            dataRequired: [],
            usage: 'Best for energy transfer in ecosystems',
            examples: ['Trophic levels', 'Energy efficiency', 'Biomass'],
            defaultOptions: {
                title: 'Energy Pyramid',
                showLabels: true,
                width: 700,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'carbonCycle': {
            name: 'Carbon Cycle',
            category: 'Ecology',
            description: 'Carbon movement through ecosystems',
            dataRequired: [],
            usage: 'Best for biogeochemical cycles',
            examples: ['Carbon cycle', 'Climate change', 'Biogeochemical cycles'],
            defaultOptions: {
                title: 'Carbon Cycle',
                showLabels: true,
                width: 900,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },

        'nitrogenCycle': {
            name: 'Nitrogen Cycle',
            category: 'Ecology',
            description: 'Nitrogen fixation and cycling',
            dataRequired: [],
            usage: 'Best for nutrient cycles',
            examples: ['Nitrogen cycle', 'Nutrient cycling', 'Bacteria'],
            defaultOptions: {
                title: 'Nitrogen Cycle',
                showLabels: true,
                width: 900,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },

        'waterCycle': {
            name: 'Water Cycle',
            category: 'Ecology',
            description: 'Hydrological cycle',
            dataRequired: [],
            usage: 'Best for water movement education',
            examples: ['Water cycle', 'Precipitation', 'Evaporation'],
            defaultOptions: {
                title: 'Water Cycle',
                showLabels: true,
                width: 900,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },

        'populationGrowth': {
            name: 'Population Growth Curves',
            category: 'Ecology',
            description: 'Exponential and logistic growth curves',
            dataRequired: [],
            usage: 'Best for population dynamics',
            examples: ['Population growth', 'Carrying capacity', 'Ecology'],
            defaultOptions: {
                title: 'Population Growth Curves',
                showBoth: true, // exponential and logistic
                showLabels: true,
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'ecosystem': {
            name: 'Ecosystem Diagram',
            category: 'Ecology',
            description: 'Biotic and abiotic components of ecosystem',
            dataRequired: [],
            usage: 'Best for ecosystem structure',
            examples: ['Ecosystems', 'Biotic factors', 'Abiotic factors'],
            defaultOptions: {
                title: 'Ecosystem Components',
                ecosystemType: 'forest', // 'forest', 'aquatic', 'grassland'
                showLabels: true,
                width: 900,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },

        'biomes': {
            name: 'World Biomes',
            category: 'Ecology',
            description: 'Distribution of major biomes',
            dataRequired: [],
            usage: 'Best for global ecology',
            examples: ['Biomes', 'Climate', 'Biodiversity'],
            defaultOptions: {
                title: 'World Biomes Distribution',
                showLabels: true,
                width: 1000,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'predatorPrey': {
            name: 'Predator-Prey Graph',
            category: 'Ecology',
            description: 'Lotka-Volterra predator-prey dynamics',
            dataRequired: [],
            usage: 'Best for population interactions',
            examples: ['Population dynamics', 'Predation', 'Ecology'],
            defaultOptions: {
                title: 'Predator-Prey Dynamics',
                showLabels: true,
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        // ===== 5. HUMAN ANATOMY & PHYSIOLOGY (existing ones) =====
        // Keep all existing cardiovascular, respiratory, etc.

        'skeletalSystem': {
            name: 'Skeletal System',
            category: 'Human Anatomy & Physiology',
            description: 'Complete human skeleton',
            dataRequired: [],
            usage: 'Best for skeletal anatomy overview',
            examples: ['Skeleton', 'Bones', 'Anatomy'],
            defaultOptions: {
                title: 'Human Skeletal System',
                view: 'anterior', // 'anterior', 'posterior'
                showLabels: true,
                width: 600,
                height: 900,
                backgroundColor: '#ffffff'
            }
        },

        'muscularSystem': {
            name: 'Muscular System',
            category: 'Human Anatomy & Physiology',
            description: 'Major muscle groups',
            dataRequired: [],
            usage: 'Best for muscle anatomy',
            examples: ['Muscles', 'Anatomy', 'Movement'],
            defaultOptions: {
                title: 'Human Muscular System',
                view: 'anterior',
                showLabels: true,
                width: 600,
                height: 900,
                backgroundColor: '#ffffff'
            }
        },

        'digestiveSystem': {
            name: 'Digestive System',
            category: 'Human Anatomy & Physiology',
            description: 'Complete digestive tract',
            dataRequired: [],
            usage: 'Best for digestion pathway',
            examples: ['Digestion', 'GI tract', 'Nutrition'],
            defaultOptions: {
                title: 'Digestive System',
                showLabels: true,
                showPath: true,
                width: 600,
                height: 800,
                backgroundColor: '#ffffff'
            }
        },

        'respiratorySystem': {
            name: 'Respiratory System',
            category: 'Human Anatomy & Physiology',
            description: 'Complete respiratory tract with gas exchange',
            dataRequired: [],
            usage: 'Best for breathing anatomy',
            examples: ['Lungs', 'Breathing', 'Gas exchange'],
            defaultOptions: {
                title: 'Respiratory System',
                showLabels: true,
                showGasExchange: true,
                width: 600,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },

        'circulatorySystem': {
            name: 'Circulatory System',
            category: 'Human Anatomy & Physiology',
            description: 'Heart and blood vessels',
            dataRequired: [],
            usage: 'Best for circulation education',
            examples: ['Heart', 'Blood vessels', 'Circulation'],
            defaultOptions: {
                title: 'Circulatory System',
                showLabels: true,
                showOxygenation: true,
                width: 600,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },

        'excretorySystem': {
            name: 'Excretory/Urinary System',
            category: 'Human Anatomy & Physiology',
            description: 'Kidneys and urinary tract',
            dataRequired: [],
            usage: 'Best for waste removal education',
            examples: ['Kidneys', 'Urinary system', 'Excretion'],
            defaultOptions: {
                title: 'Urinary System',
                showLabels: true,
                width: 600,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },

        'nervousSystem': {
            name: 'Nervous System',
            category: 'Human Anatomy & Physiology',
            description: 'Central and peripheral nervous system',
            dataRequired: [],
            usage: 'Best for nervous system overview',
            examples: ['Brain', 'Spinal cord', 'Nerves'],
            defaultOptions: {
                title: 'Nervous System',
                showLabels: true,
                showSignal: false,
                width: 600,
                height: 800,
                backgroundColor: '#ffffff'
            }
        },

        'neuronStructure': {
            name: 'Neuron Structure',
            category: 'Human Anatomy & Physiology',
            description: 'Detailed neuron anatomy',
            dataRequired: [],
            usage: 'Best for nerve cell structure',
            examples: ['Neurons', 'Synapses', 'Neural transmission'],
            defaultOptions: {
                title: 'Neuron Structure',
                showLabels: true,
                showSignal: false,
                width: 600,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },

        'synapse': {
            name: 'Synapse',
            category: 'Human Anatomy & Physiology',
            description: 'Synaptic transmission between neurons',
            dataRequired: [],
            usage: 'Best for neural communication',
            examples: ['Synapse', 'Neurotransmitters', 'Neural signaling'],
            defaultOptions: {
                title: 'Synaptic Transmission',
                showLabels: true,
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'endocrineSystem': {
            name: 'Endocrine System',
            category: 'Human Anatomy & Physiology',
            description: 'Hormone-producing glands',
            dataRequired: [],
            usage: 'Best for hormone education',
            examples: ['Hormones', 'Glands', 'Regulation'],
            defaultOptions: {
                title: 'Endocrine System',
                showLabels: true,
                width: 600,
                height: 800,
                backgroundColor: '#ffffff'
            }
        },

        'reproductiveSystem': {
            name: 'Reproductive System',
            category: 'Human Anatomy & Physiology',
            description: 'Male and female reproductive anatomy',
            dataRequired: ['sex'],
            usage: 'Best for reproductive anatomy',
            examples: ['Reproduction', 'Anatomy', 'Development'],
            defaultOptions: {
                title: 'Reproductive System',
                sex: 'both', // 'male', 'female', 'both'
                showLabels: true,
                width: 900,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },

        'immuneSystem': {
            name: 'Immune System',
            category: 'Human Anatomy & Physiology',
            description: 'Immune organs and cells',
            dataRequired: [],
            usage: 'Best for immunity education',
            examples: ['Immunity', 'White blood cells', 'Defense'],
            defaultOptions: {
                title: 'Immune System',
                showLabels: true,
                width: 700,
                height: 800,
                backgroundColor: '#ffffff'
            }
        },

        'skinStructure': {
            name: 'Skin Layers',
            category: 'Human Anatomy & Physiology',
            description: 'Cross-section of skin layers',
            dataRequired: [],
            usage: 'Best for dermatology education',
            examples: ['Skin', 'Integumentary system', 'Dermis'],
            defaultOptions: {
                title: 'Skin Structure',
                showLabels: true,
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        // ===== 6. PLANTS (BOTANY) =====
        'leafCrossSection': {
            name: 'Leaf Cross-Section',
            category: 'Plants (Botany)',
            description: 'Detailed leaf anatomy',
            dataRequired: [],
            usage: 'Best for photosynthesis and plant anatomy',
            examples: ['Leaf structure', 'Gas exchange', 'Photosynthesis'],
            defaultOptions: {
                title: 'Leaf Cross-Section',
                showLabels: true,
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'photosynthesis': {
            name: 'Photosynthesis',
            category: 'Plants (Botany)',
            description: 'Photosynthesis process in chloroplast',
            dataRequired: [],
            usage: 'Best for teaching photosynthesis mechanism',
            examples: ['Plant metabolism', 'Energy production', 'Biochemistry'],
            defaultOptions: {
                title: 'Photosynthesis',
                showLabels: true,
                showEquation: true,
                width: 700,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'stomata': {
            name: 'Stomata Structure',
            category: 'Plants (Botany)',
            description: 'Guard cells and stomatal pore',
            dataRequired: [],
            usage: 'Best for gas exchange in plants',
            examples: ['Stomata', 'Transpiration', 'Gas exchange'],
            defaultOptions: {
                title: 'Stomata Structure',
                state: 'both', // 'open', 'closed', 'both'
                showLabels: true,
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'xylemPhloem': {
            name: 'Xylem & Phloem',
            category: 'Plants (Botany)',
            description: 'Vascular tissue structure and function',
            dataRequired: [],
            usage: 'Best for plant transport systems',
            examples: ['Vascular tissue', 'Transport', 'Plant anatomy'],
            defaultOptions: {
                title: 'Xylem & Phloem - Vascular Tissue',
                showLabels: true,
                width: 800,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },

        'flowerStructure': {
            name: 'Flower Structure',
            category: 'Plants (Botany)',
            description: 'Reproductive parts of flowering plants',
            dataRequired: [],
            usage: 'Best for plant reproduction',
            examples: ['Flowers', 'Reproduction', 'Pollination'],
            defaultOptions: {
                title: 'Flower Anatomy',
                showLabels: true,
                width: 700,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },

        'seedGermination': {
            name: 'Seed Germination',
            category: 'Plants (Botany)',
            description: 'Stages of seed sprouting and growth',
            dataRequired: [],
            usage: 'Best for plant development',
            examples: ['Germination', 'Plant growth', 'Development'],
            defaultOptions: {
                title: 'Seed Germination Stages',
                showLabels: true,
                width: 900,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'tropisms': {
            name: 'Plant Tropisms',
            category: 'Plants (Botany)',
            description: 'Phototropism, geotropism, thigmotropism',
            dataRequired: [],
            usage: 'Best for plant responses to stimuli',
            examples: ['Tropisms', 'Plant behavior', 'Growth responses'],
            defaultOptions: {
                title: 'Plant Tropisms',
                tropismTypes: ['phototropism', 'geotropism', 'thigmotropism'],
                showLabels: true,
                width: 900,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        // ===== 7. MICROBIOLOGY =====
        'bacteriaStructure': {
            name: 'Bacterial Cell',
            category: 'Microbiology',
            description: 'Prokaryotic cell structure',
            dataRequired: [],
            usage: 'Best for microbiology education',
            examples: ['Bacteria', 'Prokaryotes', 'Microbiology'],
            defaultOptions: {
                title: 'Bacterial Cell Structure',
                showLabels: true,
                width: 700,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'virusStructure': {
            name: 'Virus Structure',
            category: 'Microbiology',
            description: 'Viral components and structure',
            dataRequired: [],
            usage: 'Best for virology education',
            examples: ['Viruses', 'Virology', 'Infectious disease'],
            defaultOptions: {
                title: 'Virus Structure',
                showLabels: true,
                width: 700,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },

        'fungalCell': {
            name: 'Fungal Cell Structure',
            category: 'Microbiology',
            description: 'Fungal cell with chitin wall and hyphae',
            dataRequired: [],
            usage: 'Best for mycology education',
            examples: ['Fungi', 'Mycology', 'Cell structure'],
            defaultOptions: {
                title: 'Fungal Cell Structure',
                showLabels: true,
                showHyphae: true,
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'protists': {
            name: 'Protist Examples',
            category: 'Microbiology',
            description: 'Various protist organisms (amoeba, paramecium, euglena)',
            dataRequired: [],
            usage: 'Best for protist diversity',
            examples: ['Protists', 'Microorganisms', 'Diversity'],
            defaultOptions: {
                title: 'Protist Diversity',
                protistTypes: ['amoeba', 'paramecium', 'euglena'],
                showLabels: true,
                width: 900,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'bacterialGrowthCurve': {
            name: 'Bacterial Growth Curve',
            category: 'Microbiology',
            description: 'Lag, log, stationary, death phases',
            dataRequired: [],
            usage: 'Best for microbial growth dynamics',
            examples: ['Bacterial growth', 'Microbiology', 'Population dynamics'],
            defaultOptions: {
                title: 'Bacterial Growth Curve',
                showLabels: true,
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'viralReplication': {
            name: 'Viral Replication Cycles',
            category: 'Microbiology',
            description: 'Lytic and lysogenic cycles',
            dataRequired: [],
            usage: 'Best for viral life cycles',
            examples: ['Viral replication', 'Lytic cycle', 'Lysogenic cycle'],
            defaultOptions: {
                title: 'Viral Replication Cycles',
                cycleType: 'both', // 'lytic', 'lysogenic', 'both'
                showLabels: true,
                width: 900,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },

        'microscopy': {
            name: 'Microscopy Types',
            category: 'Microbiology',
            description: 'Light microscope vs electron microscope',
            dataRequired: [],
            usage: 'Best for microscopy education',
            examples: ['Microscopy', 'Lab techniques', 'Visualization'],
            defaultOptions: {
                title: 'Microscopy Comparison',
                showLabels: true,
                width: 900,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        // ===== 8. BIOTECHNOLOGY =====
        'geneticEngineering': {
            name: 'Genetic Engineering',
            category: 'Biotechnology',
            description: 'Gene insertion and modification process',
            dataRequired: [],
            usage: 'Best for biotechnology overview',
            examples: ['Genetic engineering', 'GMOs', 'Biotechnology'],
            defaultOptions: {
                title: 'Genetic Engineering Process',
                showLabels: true,
                width: 900,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },

        'gelElectrophoresis': {
            name: 'Gel Electrophoresis',
            category: 'Biotechnology',
            description: 'DNA separation technique and band patterns',
            dataRequired: [],
            usage: 'Best for DNA analysis techniques',
            examples: ['DNA analysis', 'Lab techniques', 'Forensics'],
            defaultOptions: {
                title: 'Gel Electrophoresis',
                showLabels: true,
                showBands: true,
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'cloning': {
            name: 'Cloning Process',
            category: 'Biotechnology',
            description: 'Steps in organismal cloning',
            dataRequired: [],
            usage: 'Best for cloning technology',
            examples: ['Cloning', 'Biotechnology', 'Reproduction'],
            defaultOptions: {
                title: 'Cloning Steps',
                cloningType: 'organismal', // 'organismal', 'gene', 'therapeutic'
                showLabels: true,
                width: 900,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },

        'crispr': {
            name: 'CRISPR-Cas9',
            category: 'Biotechnology',
            description: 'Gene editing mechanism',
            dataRequired: [],
            usage: 'Best for modern gene editing',
            examples: ['CRISPR', 'Gene editing', 'Biotechnology'],
            defaultOptions: {
                title: 'CRISPR-Cas9 Gene Editing',
                showLabels: true,
                width: 900,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },

        'bioreactor': {
            name: 'Bioreactor',
            category: 'Biotechnology',
            description: 'Industrial biotechnology vessel',
            dataRequired: [],
            usage: 'Best for industrial biotechnology',
            examples: ['Bioreactor', 'Fermentation', 'Industrial biology'],
            defaultOptions: {
                title: 'Bioreactor System',
                showLabels: true,
                width: 700,
                height: 800,
                backgroundColor: '#ffffff'
            }
        },

        'gmoProduction': {
            name: 'GMO Production',
            category: 'Biotechnology',
            description: 'Creating genetically modified organisms',
            dataRequired: [],
            usage: 'Best for GMO education',
            examples: ['GMOs', 'Agricultural biotechnology', 'Genetic modification'],
            defaultOptions: {
                title: 'GMO Production Process',
                showLabels: true,
                width: 900,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },

        // ===== 9. REPRODUCTION & DEVELOPMENT =====
        'fertilization': {
            name: 'Fertilization',
            category: 'Reproduction & Development',
            description: 'Sperm-egg fusion process',
            dataRequired: [],
            usage: 'Best for reproduction education',
            examples: ['Fertilization', 'Conception', 'Reproduction'],
            defaultOptions: {
                title: 'Fertilization Process',
                showLabels: true,
                width: 800,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },

        'embryoDevelopment': {
            name: 'Embryo Development',
            category: 'Reproduction & Development',
            description: 'Stages from zygote to fetus',
            dataRequired: [],
            usage: 'Best for developmental biology',
            examples: ['Embryology', 'Development', 'Pregnancy'],
            defaultOptions: {
                title: 'Embryo Development Stages',
                showLabels: true,
                width: 900,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },

        'menstrualCycle': {
            name: 'Menstrual Cycle',
            category: 'Reproduction & Development',
            description: 'Hormonal cycle and uterine changes',
            dataRequired: [],
            usage: 'Best for reproductive physiology',
            examples: ['Menstrual cycle', 'Hormones', 'Reproduction'],
            defaultOptions: {
                title: 'Menstrual Cycle',
                showLabels: true,
                showHormones: true,
                width: 900,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'gametogenesis': {
            name: 'Gametogenesis',
            category: 'Reproduction & Development',
            description: 'Spermatogenesis and oogenesis',
            dataRequired: [],
            usage: 'Best for gamete formation',
            examples: ['Gametogenesis', 'Meiosis', 'Reproduction'],
            defaultOptions: {
                title: 'Gametogenesis',
                showBoth: true, // spermatogenesis and oogenesis
                showLabels: true,
                width: 900,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },

        'placenta': {
            name: 'Placenta & Fetal Development',
            category: 'Reproduction & Development',
            description: 'Placental structure and maternal-fetal exchange',
            dataRequired: [],
            usage: 'Best for pregnancy education',
            examples: ['Placenta', 'Pregnancy', 'Fetal development'],
            defaultOptions: {
                title: 'Placenta Structure',
                showLabels: true,
                width: 800,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },

        // ===== 10. HEALTH, DISEASE & IMMUNOLOGY =====
        'immuneResponse': {
            name: 'Immune Response',
            category: 'Health, Disease & Immunology',
            description: 'Innate and adaptive immune response flowchart',
            dataRequired: [],
            usage: 'Best for immunology education',
            examples: ['Immunity', 'Immune response', 'Defense'],
            defaultOptions: {
                title: 'Immune Response',
                responseType: 'both', // 'innate', 'adaptive', 'both'
                showLabels: true,
                width: 900,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },

        'antibodyStructure': {
            name: 'Antibody Structure',
            category: 'Health, Disease & Immunology',
            description: 'Y-shaped antibody with binding sites',
            dataRequired: [],
            usage: 'Best for antibody education',
            examples: ['Antibodies', 'Immunity', 'Proteins'],
            defaultOptions: {
                title: 'Antibody (Immunoglobulin) Structure',
                showLabels: true,
                width: 700,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },

        'pathogenTypes': {
            name: 'Pathogen Types',
            category: 'Health, Disease & Immunology',
            description: 'Bacteria, viruses, fungi, parasites comparison',
            dataRequired: [],
            usage: 'Best for infectious disease education',
            examples: ['Pathogens', 'Infectious disease', 'Microbiology'],
            defaultOptions: {
                title: 'Types of Pathogens',
                showLabels: true,
                width: 900,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'vaccination': {
            name: 'Vaccination Mechanism',
            category: 'Health, Disease & Immunology',
            description: 'How vaccines create immunity',
            dataRequired: [],
            usage: 'Best for vaccine education',
            examples: ['Vaccination', 'Immunization', 'Prevention'],
            defaultOptions: {
                title: 'How Vaccines Work',
                showLabels: true,
                width: 900,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },

        'inflammation': {
            name: 'Inflammation Pathway',
            category: 'Health, Disease & Immunology',
            description: 'Steps in inflammatory response',
            dataRequired: [],
            usage: 'Best for immune response education',
            examples: ['Inflammation', 'Innate immunity', 'Healing'],
            defaultOptions: {
                title: 'Inflammatory Response',
                showLabels: true,
                width: 900,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },

        'diseaseTransmission': {
            name: 'Disease Transmission Cycles',
            category: 'Health, Disease & Immunology',
            description: 'Vector-borne disease transmission (e.g., mosquito-human)',
            dataRequired: [],
            usage: 'Best for epidemiology education',
            examples: ['Disease transmission', 'Vectors', 'Epidemiology'],
            defaultOptions: {
                title: 'Disease Transmission Cycle',
                diseaseType: 'malaria', // 'malaria', 'dengue', 'lyme'
                showLabels: true,
                width: 800,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },

        'bloodCells': {
            name: 'Blood Cells',
            category: 'Health, Disease & Immunology',
            description: 'RBCs, WBCs, and platelets',
            dataRequired: [],
            usage: 'Best for hematology education',
            examples: ['Blood cells', 'Hematology', 'Immune cells'],
            defaultOptions: {
                title: 'Blood Cell Types',
                showLabels: true,
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        // ===== 11. CLASSIFICATION & TAXONOMY =====
        'fiveKingdoms': {
            name: 'Five Kingdom System',
            category: 'Classification & Taxonomy',
            description: 'Monera, Protista, Fungi, Plantae, Animalia',
            dataRequired: [],
            usage: 'Best for biological classification',
            examples: ['Classification', 'Taxonomy', 'Kingdoms'],
            defaultOptions: {
                title: 'Five Kingdom Classification',
                showLabels: true,
                width: 900,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },

        'threeDomains': {
            name: 'Three Domain System',
            category: 'Classification & Taxonomy',
            description: 'Bacteria, Archaea, Eukarya',
            dataRequired: [],
            usage: 'Best for modern classification',
            examples: ['Domains', 'Taxonomy', 'Evolution'],
            defaultOptions: {
                title: 'Three Domain System',
                showLabels: true,
                width: 800,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },

        'taxonomyHierarchy': {
            name: 'Taxonomy Hierarchy',
            category: 'Classification & Taxonomy',
            description: 'Kingdom to species classification levels',
            dataRequired: [],
            usage: 'Best for taxonomic ranks',
            examples: ['Taxonomy', 'Classification', 'Hierarchy'],
            defaultOptions: {
                title: 'Taxonomic Hierarchy',
                showExample: true,
                showLabels: true,
                width: 700,
                height: 800,
                backgroundColor: '#ffffff'
            }
        },

        'dichotomousKey': {
            name: 'Dichotomous Key',
            category: 'Classification & Taxonomy',
            description: 'Branching identification tool',
            dataRequired: [],
            usage: 'Best for species identification',
            examples: ['Identification', 'Classification', 'Keys'],
            defaultOptions: {
                title: 'Dichotomous Key Example',
                keyType: 'leaves', // 'leaves', 'insects', 'general'
                showLabels: true,
                width: 800,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },

        'cladogram': {
            name: 'Cladogram',
            category: 'Classification & Taxonomy',
            description: 'Evolutionary relationships diagram',
            dataRequired: [],
            usage: 'Best for phylogenetic relationships',
            examples: ['Cladistics', 'Evolution', 'Phylogeny'],
            defaultOptions: {
                title: 'Cladogram',
                showLabels: true,
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        // ===== 12. HOMEOSTASIS & REGULATION =====
        'negativeFeedback': {
            name: 'Negative Feedback Loop',
            category: 'Homeostasis & Regulation',
            description: 'Self-regulating homeostatic mechanism',
            dataRequired: [],
            usage: 'Best for homeostasis education',
            examples: ['Homeostasis', 'Regulation', 'Feedback'],
            defaultOptions: {
                title: 'Negative Feedback Loop',
                exampleType: 'general', // 'general', 'temperature', 'glucose'
                showLabels: true,
                width: 700,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },

        'thermoregulation': {
            name: 'Thermoregulation',
            category: 'Homeostasis & Regulation',
            description: 'Body temperature regulation mechanisms',
            dataRequired: [],
            usage: 'Best for temperature regulation',
            examples: ['Temperature control', 'Homeostasis', 'Physiology'],
            defaultOptions: {
                title: 'Thermoregulation',
                showLabels: true,
                width: 900,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'bloodGlucoseRegulation': {
            name: 'Blood Glucose Regulation',
            category: 'Homeostasis & Regulation',
            description: 'Insulin and glucagon balance',
            dataRequired: [],
            usage: 'Best for diabetes education',
            examples: ['Glucose regulation', 'Diabetes', 'Hormones'],
            defaultOptions: {
                title: 'Blood Glucose Regulation',
                showLabels: true,
                width: 900,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },

        'waterBalance': {
            name: 'Water Balance (Osmoregulation)',
            category: 'Homeostasis & Regulation',
            description: 'Kidney regulation of water and salt',
            dataRequired: [],
            usage: 'Best for osmoregulation education',
            examples: ['Osmoregulation', 'Kidneys', 'Water balance'],
            defaultOptions: {
                title: 'Water Balance Regulation',
                showLabels: true,
                width: 900,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },

        'nephron': {
            name: 'Kidney Nephron',
            category: 'Homeostasis & Regulation',
            description: 'Detailed nephron structure and function',
            dataRequired: [],
            usage: 'Best for kidney function',
            examples: ['Nephron', 'Filtration', 'Kidney function'],
            defaultOptions: {
                title: 'Nephron Structure',
                showLabels: true,
                width: 700,
                height: 800,
                backgroundColor: '#ffffff'
            }
        },

        // ===== 13. ENERGY IN LIVING SYSTEMS =====
        'atpStructure': {
            name: 'ATP Structure',
            category: 'Energy in Living Systems',
            description: 'Adenosine triphosphate molecular structure',
            dataRequired: [],
            usage: 'Best for cellular energy education',
            examples: ['ATP', 'Energy', 'Biochemistry'],
            defaultOptions: {
                title: 'ATP (Adenosine Triphosphate) Structure',
                showLabels: true,
                showHydrolysis: true,
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'cellularRespiration': {
            name: 'Cellular Respiration',
            category: 'Energy in Living Systems',
            description: 'Complete aerobic respiration pathway',
            dataRequired: [],
            usage: 'Best for energy metabolism',
            examples: ['Cellular respiration', 'Metabolism', 'Energy production'],
            defaultOptions: {
                title: 'Cellular Respiration',
                showLabels: true,
                showStages: true, // glycolysis, Krebs, ETC
                width: 900,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },

        'mitochondrion': {
            name: 'Mitochondrion Structure',
            category: 'Energy in Living Systems',
            description: 'Detailed mitochondrial anatomy',
            dataRequired: [],
            usage: 'Best for cellular energy organelles',
            examples: ['Mitochondria', 'Cell respiration', 'Organelles'],
            defaultOptions: {
                title: 'Mitochondrion Structure',
                showLabels: true,
                width: 700,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'electronTransportChain': {
            name: 'Electron Transport Chain',
            category: 'Energy in Living Systems',
            description: 'ETC and chemiosmosis in mitochondria',
            dataRequired: [],
            usage: 'Best for ATP synthesis education',
            examples: ['ETC', 'Chemiosmosis', 'ATP synthesis'],
            defaultOptions: {
                title: 'Electron Transport Chain',
                showLabels: true,
                width: 900,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'chloroplastStructure': {
            name: 'Chloroplast Structure',
            category: 'Energy in Living Systems',
            description: 'Chloroplast anatomy with thylakoids',
            dataRequired: [],
            usage: 'Best for photosynthesis organelle',
            examples: ['Chloroplast', 'Photosynthesis', 'Plant cells'],
            defaultOptions: {
                title: 'Chloroplast Structure',
                showLabels: true,
                width: 700,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'photosynthesisDetailed': {
            name: 'Photosynthesis (Light & Dark Reactions)',
            category: 'Energy in Living Systems',
            description: 'Complete photosynthesis with both reaction stages',
            dataRequired: [],
            usage: 'Best for detailed photosynthesis',
            examples: ['Light reactions', 'Calvin cycle', 'Photosynthesis'],
            defaultOptions: {
                title: 'Photosynthesis - Complete Process',
                showLabels: true,
                showBothStages: true,
                width: 900,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },

        // ===== 14. DNA TECHNOLOGY & FORENSICS =====
        'dnaFingerprinting': {
            name: 'DNA Fingerprinting',
            category: 'DNA Technology & Forensics',
            description: 'DNA profile patterns for identification',
            dataRequired: [],
            usage: 'Best for forensic science',
            examples: ['DNA fingerprinting', 'Forensics', 'Identification'],
            defaultOptions: {
                title: 'DNA Fingerprinting',
                showLabels: true,
                showComparison: true,
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'gelElectrophoresisForensic': {
            name: 'Gel Electrophoresis (Forensic)',
            category: 'DNA Technology & Forensics',
            description: 'Gel electrophoresis for DNA comparison',
            dataRequired: [],
            usage: 'Best for forensic DNA analysis',
            examples: ['Forensics', 'DNA analysis', 'Electrophoresis'],
            defaultOptions: {
                title: 'Forensic Gel Electrophoresis',
                showLabels: true,
                showSamples: true,
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'strAnalysis': {
            name: 'STR Analysis',
            category: 'DNA Technology & Forensics',
            description: 'Short tandem repeat analysis for identification',
            dataRequired: [],
            usage: 'Best for DNA profiling',
            examples: ['STR analysis', 'DNA profiling', 'Forensics'],
            defaultOptions: {
                title: 'STR (Short Tandem Repeat) Analysis',
                showLabels: true,
                width: 900,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'forensicComparison': {
            name: 'Forensic DNA Comparison',
            category: 'DNA Technology & Forensics',
            description: 'Comparing suspect and crime scene DNA',
            dataRequired: [],
            usage: 'Best for forensic matching',
            examples: ['Forensic comparison', 'DNA matching', 'Criminal justice'],
            defaultOptions: {
                title: 'Forensic DNA Comparison',
                showLabels: true,
                width: 900,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },

        // ===== EXISTING CARDIOVASCULAR, RESPIRATORY, ETC. =====
        // (Keep all the existing heart, circulatory, respiratory, skeletal, etc. diagrams)
        
        'heartAnatomy': {
            name: 'Heart Anatomy',
            category: 'Cardiovascular System',
            description: 'Complete heart structure with chambers and blood flow',
            dataRequired: ['chamber'],
            usage: 'Best for showing heart structure and chamber details',
            examples: ['Medical education', 'Patient briefings', 'Anatomy studies'],
            chamberOptions: ['wholeheart', 'rightAtrium', 'rightVentricle', 'leftAtrium', 'leftVentricle'],
            defaultOptions: {
                title: 'Heart Anatomy',
                chamber: 'wholeheart',
                showLabels: true,
                showBloodFlow: true,
                animate: false,
                width: 600,
                height: 500,
                backgroundColor: '#ffffff'
            }
        },

        'circulatorySystem': {
            name: 'Circulatory System',
            category: 'Cardiovascular System',
            description: 'Complete blood circulation pathway through body',
            dataRequired: [],
            usage: 'Best for showing systemic and pulmonary circulation',
            examples: ['Blood flow education', 'Circulatory teaching', 'Medical diagrams'],
            defaultOptions: {
                title: 'Circulatory System',
                showLabels: true,
                showOxygenation: true,
                width: 600,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },

        'bloodVesselComparison': {
            name: 'Blood Vessel Comparison',
            category: 'Cardiovascular System',
            description: 'Comparison of arteries, veins, and capillaries',
            dataRequired: [],
            usage: 'Best for comparing vessel structures',
            examples: ['Vessel anatomy', 'Blood transport', 'Vascular system'],
            defaultOptions: {
                title: 'Blood Vessel Comparison',
                showLabels: true,
                width: 700,
                height: 400,
                backgroundColor: '#ffffff'
            }
        },

        'heartValves': {
            name: 'Heart Valves',
            category: 'Cardiovascular System',
            description: 'All four heart valves showing structure and function',
            dataRequired: [],
            usage: 'Best for showing valve anatomy and operation',
            examples: ['Valve disorders', 'Cardiac anatomy', 'Heart function'],
            defaultOptions: {
                title: 'Heart Valves',
                showLabels: true,
                width: 800,
                height: 500,
                backgroundColor: '#ffffff'
            }
        },

        'respiratorySystem': {
            name: 'Respiratory System',
            category: 'Respiratory System',
            description: 'Complete respiratory tract with gas exchange',
            dataRequired: [],
            usage: 'Best for showing breathing anatomy',
            examples: ['Lung function', 'Breathing education', 'Respiratory health'],
            defaultOptions: {
                title: 'Respiratory System',
                showLabels: true,
                showGasExchange: true,
                width: 600,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },

        'digestiveOrgans': {
            name: 'Digestive Organs',
            category: 'Digestive System',
            description: 'Individual digestive organs with functions',
            dataRequired: [],
            usage: 'Best for comparing digestive organ structures',
            examples: ['Organ functions', 'Digestive process', 'Anatomy education'],
            defaultOptions: {
                title: 'Digestive Organs',
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'brain': {
            name: 'Brain Structure',
            category: 'Nervous System',
            description: 'Brain anatomy with major regions',
            dataRequired: [],
            usage: 'Best for neuroanatomy',
            examples: ['Brain anatomy', 'Neuroscience', 'CNS'],
            defaultOptions: {
                title: 'Brain Structure',
                section: 'whole',
                showLabels: true,
                width: 600,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },

        'liver': {
            name: 'Liver',
            category: 'Digestive System',
            description: 'Liver structure and lobes',
            dataRequired: [],
            usage: 'Best for hepatic anatomy',
            examples: ['Liver anatomy', 'Digestive system', 'Metabolism'],
            defaultOptions: {
                title: 'Liver Anatomy',
                showLabels: true,
                width: 700,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'kidney': {
            name: 'Kidney Structure',
            category: 'Urinary System',
            description: 'Kidney anatomy with internal structures',
            dataRequired: [],
            usage: 'Best for renal anatomy',
            examples: ['Kidney structure', 'Urinary system', 'Filtration'],
            defaultOptions: {
                title: 'Kidney Anatomy',
                side: 'left',
                showLabels: true,
                width: 600,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },

        'urinarySystem': {
            name: 'Urinary System',
            category: 'Urinary System',
            description: 'Kidneys, bladder, and urinary tract',
            dataRequired: [],
            usage: 'Best for renal anatomy',
            examples: ['Kidney function', 'Urinary health', 'Renal anatomy'],
            defaultOptions: {
                title: 'Urinary System',
                showLabels: true,
                width: 600,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },

        'kidneyDetail': {
            name: 'Kidney Internal Structure',
            category: 'Urinary System',
            description: 'Detailed kidney anatomy with nephron',
            dataRequired: [],
            usage: 'Best for renal physiology',
            examples: ['Kidney function', 'Filtration process', 'Nephron anatomy'],
            defaultOptions: {
                title: 'Kidney Internal Structure',
                width: 700,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },

        'eyeAnatomy': {
            name: 'Eye Anatomy',
            category: 'Sensory Organs',
            description: 'Complete eye structure with all components',
            dataRequired: [],
            usage: 'Best for ophthalmology education',
            examples: ['Vision anatomy', 'Eye structure', 'Ophthalmology'],
            defaultOptions: {
                title: 'Human Eye Anatomy',
                showLabels: true,
                pupilDilation: 0.3,
                width: 700,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'skull': {
            name: 'Human Skull',
            category: 'Skeletal System',
            description: 'Skull anatomy with cranium and facial bones',
            dataRequired: [],
            usage: 'Best for cranial anatomy education',
            examples: ['Skull anatomy', 'Cranial structure', 'Head bones'],
            defaultOptions: {
                title: 'Human Skull',
                bone: 'skull',
                showLabels: true,
                width: 500,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'femur': {
            name: 'Femur',
            category: 'Skeletal System',
            description: 'Thigh bone structure and features',
            dataRequired: [],
            usage: 'Best for long bone anatomy',
            examples: ['Bone structure', 'Orthopedics', 'Skeletal anatomy'],
            defaultOptions: {
                title: 'Femur (Thigh Bone)',
                bone: 'femur',
                showLabels: true,
                width: 400,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },

        'ribcage': {
            name: 'Ribcage',
            category: 'Skeletal System',
            description: 'Thoracic cage with ribs and sternum',
            dataRequired: [],
            usage: 'Best for thoracic anatomy',
            examples: ['Chest structure', 'Rib anatomy', 'Thoracic cage'],
            defaultOptions: {
                title: 'Ribcage',
                bone: 'ribcage',
                showLabels: true,
                width: 600,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },

        'spine': {
            name: 'Vertebral Column',
            category: 'Skeletal System',
            description: 'Spine with vertebrae and spinal cord',
            dataRequired: [],
            usage: 'Best for spinal anatomy',
            examples: ['Back pain education', 'Spinal structure', 'Vertebrae'],
            defaultOptions: {
                title: 'Vertebral Column',
                bone: 'spine',
                showLabels: true,
                width: 400,
                height: 800,
                backgroundColor: '#ffffff'
            }
        },

        'boneStructure': {
            name: 'Bone Structure',
            category: 'Skeletal System',
            description: 'Cross-section showing internal bone anatomy',
            dataRequired: [],
            usage: 'Best for showing bone composition',
            examples: ['Bone health', 'Osteoporosis education', 'Bone anatomy'],
            defaultOptions: {
                title: 'Bone Structure (Cross-Section)',
                width: 700,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'skeletalMuscle': {
            name: 'Skeletal Muscle',
            category: 'Muscular System',
            description: 'Voluntary muscle structure with fibers',
            dataRequired: [],
            usage: 'Best for muscle anatomy education',
            examples: ['Muscle structure', 'Exercise physiology', 'Athletic training'],
            defaultOptions: {
                title: 'Skeletal Muscle',
                type: 'skeletal',
                showLabels: true,
                width: 600,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },

        'muscleContraction': {
            name: 'Muscle Contraction',
            category: 'Muscular System',
            description: 'Sliding filament model of muscle contraction',
            dataRequired: [],
            usage: 'Best for showing muscle mechanics',
            examples: ['Exercise science', 'Physiology', 'Muscle function'],
            defaultOptions: {
                title: 'Muscle Contraction (Sliding Filament)',
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'cellStructure': {
            name: 'Animal Cell',
            category: 'Cellular & Microscopic',
            description: 'Complete cell with organelles',
            dataRequired: [],
            usage: 'Best for cell biology education',
            examples: ['Cell biology', 'Organelles', 'Cellular anatomy'],
            defaultOptions: {
                title: 'Animal Cell Structure',
                type: 'generic',
                showLabels: true,
                width: 700,
                height: 700,
                backgroundColor: '#ffffff'
            }
        }
    };

    // ===== HELPER METHODS =====
    
    static getDiagram(key) {
        return this.diagrams[key];
    }

    static getAllDiagrams() {
        return Object.keys(this.diagrams);
    }

    static getDiagramsByCategory(category) {
        return Object.entries(this.diagrams)
            .filter(([_, diagram]) => diagram.category === category)
            .reduce((acc, [key, diagram]) => {
                acc[key] = diagram;
                return acc;
            }, {});
    }

    static getAllCategories() {
        return [...new Set(Object.values(this.diagrams).map(d => d.category))];
    }

    static searchDiagrams(query) {
        const lowerQuery = query.toLowerCase();
        return Object.entries(this.diagrams)
            .filter(([key, diagram]) =>
                diagram.name.toLowerCase().includes(lowerQuery) ||
                diagram.description.toLowerCase().includes(lowerQuery) ||
                diagram.category.toLowerCase().includes(lowerQuery) ||
                key.toLowerCase().includes(lowerQuery) ||
                diagram.examples.some(ex => ex.toLowerCase().includes(lowerQuery))
            )
            .reduce((acc, [key, diagram]) => {
                acc[key] = diagram;
                return acc;
            }, {});
    }

    static getDiagramStats() {
        const stats = {};
        this.getAllCategories().forEach(category => {
            const diagrams = this.getDiagramsByCategory(category);
            stats[category] = {
                count: Object.keys(diagrams).length,
                diagrams: Object.keys(diagrams)
            };
        });
        return stats;
    }

    static getTotalDiagramCount() {
        return Object.keys(this.diagrams).length;
    }

    static getDiagramsByTopic(topic) {
        const topicMap = {
            'cellBiology': ['animalCell', 'plantCell', 'prokaryoticVsEukaryotic', 'cellMembrane', 'osmosisDiffusion', 'activePassiveTransport', 'mitosis', 'meiosis', 'organelles', 'cellCycle', 'enzymeAction'],
            'genetics': ['dnaStructure', 'rnaStructure', 'dnaReplication', 'transcription', 'translation', 'codonChart', 'geneExpression', 'punnettSquare', 'chromosomes', 'crossingOver', 'mutations', 'recombinantDNA', 'pcrCycle'],
            'evolution': ['darwinsFinches', 'naturalSelection', 'phylogeneticTree', 'adaptiveRadiation', 'fossilLayers', 'hardyWeinberg', 'speciation', 'comparativeAnatomy'],
            'ecology': ['foodChain', 'foodWeb', 'energyPyramid', 'carbonCycle', 'nitrogenCycle', 'waterCycle', 'populationGrowth', 'ecosystem', 'biomes', 'predatorPrey'],
            'anatomy': ['heartAnatomy', 'circulatorySystem', 'respiratorySystem', 'digestiveSystem', 'nervousSystem', 'skeletalSystem', 'muscularSystem', 'urinarySystem', 'endocrineSystem', 'reproductiveSystem', 'immuneSystem'],
            'botany': ['plantCell', 'leafCrossSection', 'photosynthesis', 'stomata', 'xylemPhloem', 'flowerStructure', 'seedGermination', 'tropisms'],
            'microbiology': ['bacteriaStructure', 'virusStructure', 'fungalCell', 'protists', 'bacterialGrowthCurve', 'viralReplication', 'microscopy'],
            'biotechnology': ['geneticEngineering', 'gelElectrophoresis', 'cloning', 'crispr', 'bioreactor', 'gmoProduction'],
            'development': ['fertilization', 'embryoDevelopment', 'menstrualCycle', 'gametogenesis', 'placenta'],
            'immunology': ['immuneResponse', 'antibodyStructure', 'pathogenTypes', 'vaccination', 'inflammation', 'diseaseTransmission', 'bloodCells'],
            'taxonomy': ['fiveKingdoms', 'threeDomains', 'taxonomyHierarchy', 'dichotomousKey', 'cladogram'],
            'homeostasis': ['negativeFeedback', 'thermoregulation', 'bloodGlucoseRegulation', 'waterBalance', 'nephron'],
            'energy': ['atpStructure', 'cellularRespiration', 'mitochondrion', 'electronTransportChain', 'chloroplastStructure', 'photosynthesisDetailed'],
            'forensics': ['dnaFingerprinting', 'gelElectrophoresisForensic', 'strAnalysis', 'forensicComparison']
        };
        
        return topicMap[topic] || [];
    }

    static printSummary() {
        console.log('=== ANATOMICAL DIAGRAMS REGISTRY SUMMARY ===');
        console.log(`Total Diagrams: ${this.getTotalDiagramCount()}`);
        console.log('\nBy Category:');
        const stats = this.getDiagramStats();
        Object.entries(stats).forEach(([category, data]) => {
            console.log(`  ${category}: ${data.count} diagrams`);
        });
        console.log('\nBy Topic:');
        const topics = ['cellBiology', 'genetics', 'evolution', 'ecology', 'anatomy', 'botany', 'microbiology', 'biotechnology', 'development', 'immunology', 'taxonomy', 'homeostasis', 'energy', 'forensics'];
        topics.forEach(topic => {
            const diagrams = this.getDiagramsByTopic(topic);
            console.log(`  ${topic}: ${diagrams.length} diagrams`);
        });
    }
}



export { AnatomicalDiagramsRegistry,AnatomicalShapes,AnatomicalDiagramRenderer};


// ============================================================================
// ADD THIS TO EnhancedSpreadsheetWorkbook CLASS
/**
export class EnhancedSpreadsheetWorkbook {
    constructor(options = {}) {
        this.width = options.width || 1600;
        this.height = options.height || 2000;
        this.theme = options.theme || 'professional';

        // Spreadsheet data
        this.data = [];
        this.headers = [];
        this.formulas = {};
        this.calculations = {};
        this.history = [];

        // Chart management
        this.charts = [];
        this.chartRenderer = new ChartCanvasRenderer();

        // Anatomical diagram management
        this.anatomicalDiagrams = [];
        this.diagramRenderer = new AnatomicalDiagramRenderer(null);

        // Cross-section diagram management
        this.crossSectionDiagrams = [];
        this.crossSectionRenderer = new CrossSectionDiagramRenderer(null);

        // Stereochemistry diagram management
        this.stereochemistryDiagrams = [];
        this.stereochemistryRenderer = new StereochemistryDiagramRenderer(null);

        // Graphing Calculator management
        this.graphingCalculator = null;

        // Statistical Workbook management
        this.statisticalWorkbook = null;
        this.statisticalAnalyses = [];

        // Unified diagram tracking (for convenience)
        this.allDiagrams = {
            anatomical: this.anatomicalDiagrams,
            crossSection: this.crossSectionDiagrams,
            stereochemistry: this.stereochemistryDiagrams
        };

        // Visual settings
        this.cellWidth = 150;
        this.cellHeight = 30;
        this.headerHeight = 35;
        this.fontSize = 11;
        this.headerFontSize = 12;

        // Metadata
        this.sheetName = options.sheetName || 'Sheet1';
        this.createdDate = new Date();
        this.lastModified = new Date();
        this.author = options.author || 'User';

        this.setThemeColors();
    }

    // ==================== THEME COLORS ====================
    setThemeColors() {
        const themes = {
            professional: {
                background: '#ffffff',
                gridColor: '#e0e0e0',
                headerBg: '#2c3e50',
                headerText: '#ffffff',
                cellBg: '#ffffff',
                cellText: '#000000',
                borderColor: '#c0c0c0'
            },
            dark: {
                background: '#1e1e1e',
                gridColor: '#404040',
                headerBg: '#0d47a1',
                headerText: '#ffffff',
                cellBg: '#2d2d2d',
                cellText: '#ffffff',
                borderColor: '#505050'
            },
            light: {
                background: '#f5f5f5',
                gridColor: '#d0d0d0',
                headerBg: '#4caf50',
                headerText: '#ffffff',
                cellBg: '#ffffff',
                cellText: '#000000',
                borderColor: '#bdbdbd'
            }
        };
        this.colors = themes[this.theme] || themes.professional;
    }

     


       // ========================================================================
    // ANATOMICAL DIAGRAM MANAGEMENT METHODS
    // ========================================================================

    // Get available anatomical diagrams
    getAvailableAnatomicalDiagrams() {
        const diagrams = {};
        const categories = AnatomicalDiagramsRegistry.getAllCategories();

        categories.forEach(category => {
            diagrams[category] = AnatomicalDiagramsRegistry.getDiagramsByCategory(category);
        });

        return diagrams;
    }

    // Get diagram suggestions based on context
    suggestAnatomicalDiagrams(context = null) {
        const suggestions = [];

        // Check headers for medical/anatomical keywords
        const hasCardiovascular = this.headers.some(h => 
            /heart|blood|artery|vein|circulation|cardiac/i.test(h)
        );
        
        const hasRespiratory = this.headers.some(h => 
            /lung|breath|respiratory|oxygen|co2/i.test(h)
        );
        
        const hasDigestive = this.headers.some(h => 
            /stomach|intestine|digest|food|nutrition/i.test(h)
        );

        const hasNervous = this.headers.some(h => 
            /brain|nerve|neural|neuron|spine/i.test(h)
        );

        const hasSkeletal = this.headers.some(h => 
            /bone|skeleton|skull|spine|fracture/i.test(h)
        );

        // Add suggestions based on context
        if (hasCardiovascular) {
            suggestions.push({
                key: 'heartAnatomy',
                priority: 10,
                reason: 'Cardiovascular data detected in headers'
            });
            suggestions.push({
                key: 'circulatorySystem',
                priority: 9,
                reason: 'Blood circulation context identified'
            });
        }

        if (hasRespiratory) {
            suggestions.push({
                key: 'respiratorySystem',
                priority: 10,
                reason: 'Respiratory data detected'
            });
        }

        if (hasDigestive) {
            suggestions.push({
                key: 'digestiveSystem',
                priority: 10,
                reason: 'Digestive system data detected'
            });
        }

        if (hasNervous) {
            suggestions.push({
                key: 'nervousSystem',
                priority: 10,
                reason: 'Nervous system data detected'
            });
            suggestions.push({
                key: 'neuronStructure',
                priority: 8,
                reason: 'Neural anatomy context'
            });
        }

        if (hasSkeletal) {
            suggestions.push({
                key: 'skull',
                priority: 9,
                reason: 'Skeletal data detected'
            });
            suggestions.push({
                key: 'boneStructure',
                priority: 8,
                reason: 'Bone anatomy context'
            });
        }

        // General suggestions if no specific context
        if (suggestions.length === 0) {
            suggestions.push(
                { key: 'heartAnatomy', priority: 7, reason: 'Popular anatomy diagram' },
                { key: 'cellStructure', priority: 6, reason: 'Fundamental biology' },
                { key: 'bloodCells', priority: 5, reason: 'Common medical reference' }
            );
        }

        return suggestions.sort((a, b) => b.priority - a.priority);
    }

    // Get diagram help
    getAnatomicalDiagramHelp(diagramKey) {
        const diagram = AnatomicalDiagramsRegistry.getDiagram(diagramKey);
        if (!diagram) {
            return { error: 'Diagram not found' };
        }

        return {
            name: diagram.name,
            category: diagram.category,
            description: diagram.description,
            usage: diagram.usage,
            examples: diagram.examples,
            dataRequired: diagram.dataRequired,
            defaultOptions: diagram.defaultOptions,
            chamberOptions: diagram.chamberOptions || null
        };
    }

    // Add anatomical diagram to workbook
    addAnatomicalDiagram(diagramConfig) {
        const {
            key,
            title = null,
            options = {},
            filename = null
        } = diagramConfig;

        // Validate diagram exists
        const diagram = AnatomicalDiagramsRegistry.getDiagram(key);
        if (!diagram) {
            throw new Error(`Anatomical diagram '${key}' not found`);
        }

        // Merge options
        const mergedOptions = { ...diagram.defaultOptions, ...options };
        if (title) mergedOptions.title = title;

        // Store diagram config
        const diagramObj = {
            id: `diagram_${this.anatomicalDiagrams.length + 1}`,
            key,
            title: mergedOptions.title,
            options: mergedOptions,
            filename: filename || `${this.sheetName}_${key}_${Date.now()}.png`,
            createdAt: new Date(),
            category: diagram.category
        };

        this.anatomicalDiagrams.push(diagramObj);
        this.addToHistory(`Added anatomical diagram: ${diagram.name}`);

        return diagramObj;
    }

    // Render anatomical diagram to PNG
    renderAnatomicalDiagramToPNG(diagramIndex) {
        if (diagramIndex < 0 || diagramIndex >= this.anatomicalDiagrams.length) {
            throw new Error(`Diagram index ${diagramIndex} out of range`);
        }

        const diagramConfig = this.anatomicalDiagrams[diagramIndex];
        
        
        const width = diagramConfig.options.width || 800;
        const height = diagramConfig.options.height || 600;
        const canvas = createCanvas(width, height);
        const ctx = canvas.getContext('2d');

        // Update renderer's canvas
        this.diagramRenderer.canvas = canvas;
        this.diagramRenderer.ctx = ctx;

        // Render the appropriate diagram
        this.renderSpecificDiagram(diagramConfig.key, diagramConfig.options);

        // Save to file
        const buffer = canvas.toBuffer('image/png');
        fs.writeFileSync(diagramConfig.filename, buffer);

        return {
            id: diagramConfig.id,
            filename: diagramConfig.filename,
            size: buffer.length,
            category: diagramConfig.category
        };
    }

    // Helper method to render specific diagram types
    renderSpecificDiagram(key, options) {
        const x = 0;
        const y = 0;
        const width = options.width || 800;
        const height = options.height || 600;

        switch (key) {
            case 'heartAnatomy':
                this.diagramRenderer.renderHeartAnatomyDiagram(x, y, width, height, options);
                break;
            case 'circulatorySystem':
                this.diagramRenderer.renderCirculatorySystemDiagram(x, y, width, height, options);
                break;
            case 'bloodVesselComparison':
                this.diagramRenderer.renderBloodVesselComparison(x, y, width, height, options);
                break;
            case 'heartValves':
                this.diagramRenderer.renderHeartValvesDiagram(x, y, width, height, options);
                break;
            case 'respiratorySystem':
                this.diagramRenderer.renderRespiratorySystemDiagram(x, y, width, height, options);
                break;
            case 'digestiveSystem':
                this.diagramRenderer.renderDigestiveSystemDiagram(x, y, width, height, options);
                break;
            case 'digestiveOrgans':
                this.diagramRenderer.renderDigestiveOrganComparison(x, y, width, height);
                break;
            case 'nervousSystem':
                this.diagramRenderer.renderNervousSystemDiagram(x, y, width, height, options);
                break;
            case 'neuronStructure':
                this.diagramRenderer.renderNeuronDiagram(x, y, width, height, options);
                break;
            case 'skull':
            case 'femur':
            case 'ribcage':
            case 'spine':
                this.diagramRenderer.renderSkeletalSystemDiagram(x, y, width, height, options);
                break;
            case 'boneStructure':
                this.diagramRenderer.renderBoneStructureDiagram(x, y, width, height);
                break;
            case 'skeletalMuscle':
                this.diagramRenderer.renderMuscularSystemDiagram(x, y, width, height, options);
                break;
            case 'muscleContraction':
                this.diagramRenderer.renderMuscleContractionDiagram(x, y, width, height);
                break;
            case 'cellStructure':
                this.diagramRenderer.renderCellDiagram(x, y, width, height, options);
                break;
            case 'bloodCells':
                this.diagramRenderer.renderBloodCellsDiagram(x, y, width, height, options);
                break;
            case 'dnaStructure':
                this.diagramRenderer.renderDNADiagram(x, y, width, height, options);
                break;
            case 'skinStructure':
                this.diagramRenderer.renderSkinDiagram(x, y, width, height, options);
                break;
            case 'urinarySystem':
                this.diagramRenderer.renderUrinarySystemDiagram(x, y, width, height, options);
                break;
            case 'kidneyDetail':
                this.diagramRenderer.renderKidneyDetailDiagram(x, y, width, height);
                break;
            case 'eyeAnatomy':
                this.diagramRenderer.renderEyeDiagram(x, y, width, height, options);
                break;
            default:
                throw new Error(`Rendering for diagram '${key}' not implemented`);
        }
    }


    // Helper method for rendering specific anatomical diagrams
renderSpecificAnatomicalDiagram(key, options) {
    const x = 0;
    const y = 0;
    const width = options.width || 800;
    const height = options.height || 600;

    switch (key) {
        case 'heartAnatomy':
            this.diagramRenderer.renderHeartAnatomyDiagram(x, y, width, height, options);
            break;
        case 'circulatorySystem':
            this.diagramRenderer.renderCirculatorySystemDiagram(x, y, width, height, options);
            break;
        case 'bloodVesselComparison':
            this.diagramRenderer.renderBloodVesselComparison(x, y, width, height, options);
            break;
        case 'heartValves':
            this.diagramRenderer.renderHeartValvesDiagram(x, y, width, height, options);
            break;
        case 'respiratorySystem':
            this.diagramRenderer.renderRespiratorySystemDiagram(x, y, width, height, options);
            break;
        case 'digestiveSystem':
            this.diagramRenderer.renderDigestiveSystemDiagram(x, y, width, height, options);
            break;
        case 'digestiveOrgans':
            this.diagramRenderer.renderDigestiveOrganComparison(x, y, width, height);
            break;
        case 'nervousSystem':
            this.diagramRenderer.renderNervousSystemDiagram(x, y, width, height, options);
            break;
        case 'neuronStructure':
            this.diagramRenderer.renderNeuronDiagram(x, y, width, height, options);
            break;
        case 'skull':
        case 'femur':
        case 'ribcage':
        case 'spine':
            this.diagramRenderer.renderSkeletalSystemDiagram(x, y, width, height, options);
            break;
        case 'boneStructure':
            this.diagramRenderer.renderBoneStructureDiagram(x, y, width, height);
            break;
        case 'skeletalMuscle':
            this.diagramRenderer.renderMuscularSystemDiagram(x, y, width, height, options);
            break;
        case 'muscleContraction':
            this.diagramRenderer.renderMuscleContractionDiagram(x, y, width, height);
            break;
        case 'cellStructure':
            this.diagramRenderer.renderCellDiagram(x, y, width, height, options);
            break;
        case 'bloodCells':
            this.diagramRenderer.renderBloodCellsDiagram(x, y, width, height, options);
            break;
        case 'dnaStructure':
            this.diagramRenderer.renderDNADiagram(x, y, width, height, options);
            break;
        case 'skinStructure':
            this.diagramRenderer.renderSkinDiagram(x, y, width, height, options);
            break;
        case 'urinarySystem':
            this.diagramRenderer.renderUrinarySystemDiagram(x, y, width, height, options);
            break;
        case 'kidneyDetail':
            this.diagramRenderer.renderKidneyDetailDiagram(x, y, width, height);
            break;
        case 'eyeAnatomy':
            this.diagramRenderer.renderEyeDiagram(x, y, width, height, options);
            break;
        default:
            throw new Error(`Rendering for anatomical diagram '${key}' not implemented`);
    }
}



    // Render all anatomical diagrams
    renderAllAnatomicalDiagrams() {
        const results = [];

        this.anatomicalDiagrams.forEach((_, index) => {
            try {
                const result = this.renderAnatomicalDiagramToPNG(index);
                results.push(result);
            } catch (error) {
                results.push({
                    error: error.message,
                    index
                });
            }
        });

        return results;
    }

    // Get anatomical diagram statistics
    getAnatomicalDiagramStatistics() {
        const stats = AnatomicalDiagramsRegistry.getDiagramStats();
        return {
            totalDiagrams: Object.values(stats).reduce((sum, cat) => sum + cat.count, 0),
            byCategory: stats,
            diagramsInWorkbook: this.anatomicalDiagrams.length
        };
    }

    // Search anatomical diagrams
    searchAnatomicalDiagrams(query) {
        return AnatomicalDiagramsRegistry.searchDiagrams(query);
    }

    // List all anatomical diagrams in workbook
    listAnatomicalDiagrams() {
        return this.anatomicalDiagrams.map((diagram, index) => ({
            index,
            id: diagram.id,
            name: diagram.title,
            type: AnatomicalDiagramsRegistry.getDiagram(diagram.key).name,
            category: diagram.category,
            filename: diagram.filename,
            created: diagram.createdAt
        }));
    }

    // Remove anatomical diagram
    removeAnatomicalDiagram(diagramIndex) {
        if (diagramIndex < 0 || diagramIndex >= this.anatomicalDiagrams.length) {
            throw new Error(`Diagram index ${diagramIndex} out of range`);
        }

        const removed = this.anatomicalDiagrams.splice(diagramIndex, 1);
        this.addToHistory(`Removed anatomical diagram: ${removed[0].title}`);
        return removed[0];
    }

    // Update anatomical diagram
    updateAnatomicalDiagram(diagramIndex, updates) {
        if (diagramIndex < 0 || diagramIndex >= this.anatomicalDiagrams.length) {
            throw new Error(`Diagram index ${diagramIndex} out of range`);
        }

        const diagram = this.anatomicalDiagrams[diagramIndex];
        
        if (updates.title) diagram.title = updates.title;
        if (updates.options) {
            diagram.options = { ...diagram.options, ...updates.options };
        }

        this.addToHistory(`Updated anatomical diagram: ${diagram.title}`);
        return diagram;
    }

    // Generate anatomical diagram guide
    generateAnatomicalDiagramGuide() {
        const guide = {
            title: 'Available Anatomical Diagrams',
            categories: {},
            totalDiagrams: 0,
            suggestions: []
        };

        const categories = AnatomicalDiagramsRegistry.getAllCategories();

        categories.forEach(category => {
            const diagrams = AnatomicalDiagramsRegistry.getDiagramsByCategory(category);
            guide.categories[category] = Object.entries(diagrams).map(([key, diagram]) => ({
                key,
                name: diagram.name,
                description: diagram.description,
                usage: diagram.usage,
                examples: diagram.examples
            }));
            guide.totalDiagrams += Object.keys(diagrams).length;
        });

        // Add suggestions based on workbook context
        guide.suggestions = this.suggestAnatomicalDiagrams();

        return guide;
    }

    // Batch add anatomical diagrams by category
    addAnatomicalDiagramsByCategory(category, options = {}) {
        const diagrams = AnatomicalDiagramsRegistry.getDiagramsByCategory(category);
        const results = [];

        Object.keys(diagrams).forEach(key => {
            try {
                const result = this.addAnatomicalDiagram({
                    key,
                    options,
                    filename: `${this.sheetName}_${key}_${Date.now()}.png`
                });
                results.push(result);
            } catch (error) {
                results.push({ key, error: error.message });
            }
        });

        return results;
    }

    // Export anatomical diagrams to a folder
    exportAnatomicalDiagramsToFolder(folderPath) {
        if (!fs.existsSync(folderPath)) {
            fs.mkdirSync(folderPath, { recursive: true });
        }

        const results = [];

        this.anatomicalDiagrams.forEach((diagram, index) => {
            try {
                const originalFilename = diagram.filename;
                diagram.filename = `${folderPath}/${diagram.filename}`;
                
                const result = this.renderAnatomicalDiagramToPNG(index);
                results.push(result);
                
                // Restore original filename
                diagram.filename = originalFilename;
            } catch (error) {
                results.push({
                    index,
                    error: error.message
                });
            }
        });

        return {
            folder: folderPath,
            results,
            totalExported: results.filter(r => !r.error).length
        };
    }

    // Generate combined report with charts and anatomical diagrams
    generateCombinedReport() {
        const baseReport = this.generateReport();
        
        return {
            ...baseReport,
            anatomicalDiagrams: this.listAnatomicalDiagrams(),
            anatomicalStats: this.getAnatomicalDiagramStatistics(),
            visualizations: {
                charts: this.charts.length,
                anatomicalDiagrams: this.anatomicalDiagrams.length,
                total: this.charts.length + this.anatomicalDiagrams.length
            }
        };
    }




// ============================================================================
// EXPORT REGISTRIES AND CLASSES
// ============================================================================

export { 
    AnatomicalDiagramsRegistry, 
    AnatomicalShapes,
    AnatomicalDiagramRenderer
};

*/
