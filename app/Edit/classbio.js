import { createCanvas } from '@napi-rs/canvas'; import
ExcelJS from 'exceljs'; import fs from 'fs'; import os
from 'os'; import path from 'path'; import readline from
'readline'; import * as math from 'mathjs'; import
GIFEncoder from 'gifencoder'; import { PassThrough }
from 'stream';


class AnatomicalShapes {

====================   ClassificationShapes   ========================

  // ===== PHYLOGENETIC TREE DIAGRAMS =====
  
  static drawPhylogeneticTree(ctx, x, y, width, height, group, timeScale) {
    ctx.save();
    ctx.translate(x, y);
    
    const trees = {
      life: () => this.drawLifeTree(ctx, width, height, timeScale),
      animals: () => this.drawAnimalTree(ctx, width, height, timeScale),
      plants: () => this.drawPlantTree(ctx, width, height, timeScale),
      vertebrates: () => this.drawVertebrateTree(ctx, width, height, timeScale),
      mammals: () => this.drawMammalTree(ctx, width, height, timeScale),
      primates: () => this.drawPrimateTree(ctx, width, height, timeScale),
      custom: () => this.drawCustomTree(ctx, width, height, timeScale)
    };
    
    if (trees[group]) {
      trees[group]();
    }
    
    ctx.restore();
  }

  static drawLifeTree(ctx, width, height, timeScale) {
    const w = width, h = height;
    
    // Draw time axis
    this.drawTimeAxis(ctx, w, h, timeScale);
    
    // Draw main trunk
    ctx.strokeStyle = '#4A4A4A';
    ctx.lineWidth = 4;
    ctx.beginPath();
    ctx.moveTo(w * 0.5, h * 0.95);
    ctx.lineTo(w * 0.5, h * 0.5);
    ctx.stroke();
    
    // Three domains branching
    const branches = [
      { x: 0.2, label: 'Bacteria', color: '#3498DB' },
      { x: 0.5, label: 'Archaea', color: '#E74C3C' },
      { x: 0.8, label: 'Eukarya', color: '#2ECC71' }
    ];
    
    branches.forEach(branch => {
      // Branch line
      ctx.strokeStyle = branch.color;
      ctx.lineWidth = 3;
      ctx.beginPath();
      ctx.moveTo(w * 0.5, h * 0.5);
      ctx.quadraticCurveTo(w * 0.5, h * 0.3, w * branch.x, h * 0.1);
      ctx.stroke();
      
      // Label
      ctx.fillStyle = '#000000';
      ctx.font = 'bold 16px Arial';
      ctx.textAlign = 'center';
      ctx.fillText(branch.label, w * branch.x, h * 0.05);
    });
    
    // Add nodes
    ctx.fillStyle = '#FFD700';
    ctx.beginPath();
    ctx.arc(w * 0.5, h * 0.5, 8, 0, Math.PI * 2);
    ctx.fill();
    ctx.strokeStyle = '#000000';
    ctx.lineWidth = 2;
    ctx.stroke();
  }

  static drawAnimalTree(ctx, width, height, timeScale) {
    const w = width, h = height;
    
    this.drawTimeAxis(ctx, w, h, timeScale);
    
    const phyla = [
      { x: 0.15, y: 0.1, label: 'Porifera\n(Sponges)', split: 0.85 },
      { x: 0.25, y: 0.15, label: 'Cnidaria\n(Jellyfish)', split: 0.75 },
      { x: 0.35, y: 0.2, label: 'Platyhelminthes\n(Flatworms)', split: 0.65 },
      { x: 0.50, y: 0.12, label: 'Mollusca\n(Mollusks)', split: 0.55 },
      { x: 0.65, y: 0.18, label: 'Annelida\n(Worms)', split: 0.50 },
      { x: 0.75, y: 0.15, label: 'Arthropoda\n(Insects)', split: 0.45 },
      { x: 0.88, y: 0.1, label: 'Chordata\n(Vertebrates)', split: 0.35 }
    ];
    
    // Main trunk
    ctx.strokeStyle = '#654321';
    ctx.lineWidth = 5;
    ctx.beginPath();
    ctx.moveTo(w * 0.1, h * 0.95);
    ctx.lineTo(w * 0.1, h * 0.3);
    ctx.stroke();
    
    // Draw branches
    phyla.forEach(phylum => {
      ctx.strokeStyle = '#2C5F2D';
      ctx.lineWidth = 3;
      ctx.beginPath();
      ctx.moveTo(w * 0.1, h * phylum.split);
      ctx.quadraticCurveTo(w * 0.3, h * phylum.split * 0.5, w * phylum.x, h * phylum.y);
      ctx.stroke();
      
      // End node
      ctx.fillStyle = '#FF6B6B';
      ctx.beginPath();
      ctx.arc(w * phylum.x, h * phylum.y, 6, 0, Math.PI * 2);
      ctx.fill();
      
      // Label
      ctx.fillStyle = '#000000';
      ctx.font = '12px Arial';
      ctx.textAlign = 'center';
      const lines = phylum.label.split('\n');
      lines.forEach((line, i) => {
        ctx.fillText(line, w * phylum.x, h * phylum.y - 10 - (lines.length - 1 - i) * 14);
      });
    });
  }

  static drawPlantTree(ctx, width, height, timeScale) {
    const w = width, h = height;
    
    this.drawTimeAxis(ctx, w, h, timeScale);
    
    const groups = [
      { x: 0.2, y: 0.15, label: 'Bryophytes\n(Mosses)', color: '#90EE90' },
      { x: 0.35, y: 0.2, label: 'Ferns', color: '#228B22' },
      { x: 0.5, y: 0.12, label: 'Gymnosperms\n(Conifers)', color: '#006400' },
      { x: 0.75, y: 0.1, label: 'Angiosperms\n(Flowering)', color: '#FF69B4' }
    ];
    
    // Trunk
    ctx.strokeStyle = '#8B4513';
    ctx.lineWidth = 6;
    ctx.beginPath();
    ctx.moveTo(w * 0.5, h * 0.95);
    ctx.lineTo(w * 0.5, h * 0.4);
    ctx.stroke();
    
    groups.forEach((group, i) => {
      const splitY = 0.4 + (i * 0.1);
      
      ctx.strokeStyle = group.color;
      ctx.lineWidth = 4;
      ctx.beginPath();
      ctx.moveTo(w * 0.5, h * splitY);
      ctx.quadraticCurveTo(w * 0.5, h * 0.3, w * group.x, h * group.y);
      ctx.stroke();
      
      ctx.fillStyle = group.color;
      ctx.beginPath();
      ctx.arc(w * group.x, h * group.y, 7, 0, Math.PI * 2);
      ctx.fill();
      
      ctx.fillStyle = '#000000';
      ctx.font = 'bold 13px Arial';
      ctx.textAlign = 'center';
      const lines = group.label.split('\n');
      lines.forEach((line, idx) => {
        ctx.fillText(line, w * group.x, h * group.y - 12 - (lines.length - 1 - idx) * 15);
      });
    });
  }

  static drawVertebrateTree(ctx, width, height, timeScale) {
    const w = width, h = height;
    
    this.drawTimeAxis(ctx, w, h, timeScale);
    
    const classes = [
      { x: 0.15, y: 0.15, label: 'Fish', color: '#4169E1' },
      { x: 0.3, y: 0.2, label: 'Amphibians', color: '#32CD32' },
      { x: 0.5, y: 0.12, label: 'Reptiles', color: '#8B4513' },
      { x: 0.7, y: 0.18, label: 'Birds', color: '#FFD700' },
      { x: 0.85, y: 0.1, label: 'Mammals', color: '#FF6347' }
    ];
    
    ctx.strokeStyle = '#2F4F4F';
    ctx.lineWidth = 5;
    ctx.beginPath();
    ctx.moveTo(w * 0.5, h * 0.95);
    ctx.lineTo(w * 0.5, h * 0.45);
    ctx.stroke();
    
    classes.forEach((cls, i) => {
      const branchY = 0.45 + (i * 0.08);
      
      ctx.strokeStyle = cls.color;
      ctx.lineWidth = 3;
      ctx.beginPath();
      ctx.moveTo(w * 0.5, h * branchY);
      ctx.bezierCurveTo(w * 0.5, h * 0.3, w * cls.x, h * 0.3, w * cls.x, h * cls.y);
      ctx.stroke();
      
      ctx.fillStyle = cls.color;
      ctx.beginPath();
      ctx.arc(w * cls.x, h * cls.y, 8, 0, Math.PI * 2);
      ctx.fill();
      ctx.strokeStyle = '#000000';
      ctx.lineWidth = 2;
      ctx.stroke();
      
      ctx.fillStyle = '#000000';
      ctx.font = 'bold 14px Arial';
      ctx.textAlign = 'center';
      ctx.fillText(cls.label, w * cls.x, h * cls.y - 15);
    });
  }

  static drawMammalTree(ctx, width, height, timeScale) {
    const w = width, h = height;
    
    this.drawTimeAxis(ctx, w, h, timeScale);
    
    const orders = [
      { x: 0.12, y: 0.12, label: 'Monotremes' },
      { x: 0.24, y: 0.18, label: 'Marsupials' },
      { x: 0.38, y: 0.15, label: 'Rodents' },
      { x: 0.5, y: 0.1, label: 'Carnivores' },
      { x: 0.62, y: 0.14, label: 'Ungulates' },
      { x: 0.75, y: 0.12, label: 'Cetaceans' },
      { x: 0.88, y: 0.08, label: 'Primates' }
    ];
    
    ctx.strokeStyle = '#8B4513';
    ctx.lineWidth = 6;
    ctx.beginPath();
    ctx.moveTo(w * 0.5, h * 0.95);
    ctx.lineTo(w * 0.5, h * 0.5);
    ctx.stroke();
    
    orders.forEach(order => {
      ctx.strokeStyle = '#CD853F';
      ctx.lineWidth = 3;
      ctx.beginPath();
      ctx.moveTo(w * 0.5, h * 0.5);
      ctx.quadraticCurveTo(w * 0.5, h * 0.25, w * order.x, h * order.y);
      ctx.stroke();
      
      ctx.fillStyle = '#DEB887';
      ctx.beginPath();
      ctx.arc(w * order.x, h * order.y, 7, 0, Math.PI * 2);
      ctx.fill();
      ctx.strokeStyle = '#000000';
      ctx.lineWidth = 2;
      ctx.stroke();
      
      ctx.fillStyle = '#000000';
      ctx.font = '12px Arial';
      ctx.textAlign = 'center';
      ctx.fillText(order.label, w * order.x, h * order.y - 12);
    });
  }

  static drawPrimateTree(ctx, width, height, timeScale) {
    const w = width, h = height;
    
    this.drawTimeAxis(ctx, w, h, timeScale);
    
    const primates = [
      { x: 0.15, y: 0.2, label: 'Lemurs', split: 0.7 },
      { x: 0.3, y: 0.25, label: 'Tarsiers', split: 0.65 },
      { x: 0.45, y: 0.18, label: 'New World\nMonkeys', split: 0.58 },
      { x: 0.6, y: 0.22, label: 'Old World\nMonkeys', split: 0.5 },
      { x: 0.75, y: 0.15, label: 'Apes', split: 0.42 },
      { x: 0.9, y: 0.08, label: 'Humans', split: 0.38 }
    ];
    
    ctx.strokeStyle = '#654321';
    ctx.lineWidth = 5;
    ctx.beginPath();
    ctx.moveTo(w * 0.1, h * 0.95);
    ctx.lineTo(w * 0.1, h * 0.35);
    ctx.stroke();
    
    primates.forEach(primate => {
      ctx.strokeStyle = '#8B6914';
      ctx.lineWidth = 2.5;
      ctx.beginPath();
      ctx.moveTo(w * 0.1, h * primate.split);
      ctx.quadraticCurveTo(w * 0.4, h * primate.split * 0.6, w * primate.x, h * primate.y);
      ctx.stroke();
      
      ctx.fillStyle = '#FFE4B5';
      ctx.beginPath();
      ctx.arc(w * primate.x, h * primate.y, 6, 0, Math.PI * 2);
      ctx.fill();
      ctx.strokeStyle = '#000000';
      ctx.lineWidth = 1.5;
      ctx.stroke();
      
      ctx.fillStyle = '#000000';
      ctx.font = '11px Arial';
      ctx.textAlign = 'center';
      const lines = primate.label.split('\n');
      lines.forEach((line, i) => {
        ctx.fillText(line, w * primate.x, h * primate.y - 10 - (lines.length - 1 - i) * 12);
      });
    });
  }

  static drawCustomTree(ctx, width, height, timeScale) {
    // Generic phylogenetic tree template
    this.drawVertebrateTree(ctx, width, height, timeScale);
  }

  static drawTimeAxis(ctx, width, height, timeScale) {
    const w = width, h = height;
    
    ctx.strokeStyle = '#CCCCCC';
    ctx.lineWidth = 1;
    ctx.setLineDash([5, 5]);
    
    const scales = {
      'recent': ['Present', '10 years', '100 years', '1000 years'],
      'millions-years': ['Present', '100 MYA', '300 MYA', '500 MYA'],
      'geological-eras': ['Cenozoic', 'Mesozoic', 'Paleozoic', 'Precambrian']
    };
    
    const labels = scales[timeScale] || scales['millions-years'];
    
    labels.forEach((label, i) => {
      const y = h * (0.2 + i * 0.25);
      ctx.beginPath();
      ctx.moveTo(0, y);
      ctx.lineTo(w, y);
      ctx.stroke();
      
      ctx.fillStyle = '#666666';
      ctx.font = '10px Arial';
      ctx.textAlign = 'right';
      ctx.fillText(label, w - 5, y - 3);
    });
    
    ctx.setLineDash([]);
  }

  // ===== FIVE KINGDOMS =====
  
  static drawFiveKingdoms(ctx, x, y, width, height, kingdom, characteristic) {
    ctx.save();
    ctx.translate(x, y);
    
    if (kingdom === 'all') {
      this.drawAllKingdoms(ctx, width, height, characteristic);
    } else {
      this.drawSingleKingdom(ctx, width, height, kingdom, characteristic);
    }
    
    ctx.restore();
  }

  static drawAllKingdoms(ctx, width, height, characteristic) {
    const w = width, h = height;
    
    const kingdoms = [
      { name: 'Monera', color: '#3498DB', x: 0.2, y: 0.3 },
      { name: 'Protista', color: '#2ECC71', x: 0.5, y: 0.2 },
      { name: 'Fungi', color: '#E67E22', x: 0.8, y: 0.3 },
      { name: 'Plantae', color: '#27AE60', x: 0.35, y: 0.7 },
      { name: 'Animalia', color: '#E74C3C', x: 0.65, y: 0.7 }
    ];
    
    // Title
    ctx.fillStyle = '#000000';
    ctx.font = 'bold 20px Arial';
    ctx.textAlign = 'center';
    ctx.fillText('Five Kingdom Classification', w * 0.5, 30);
    
    kingdoms.forEach(kingdom => {
      // Kingdom circle
      const radius = w * 0.12;
      const gradient = ctx.createRadialGradient(
        w * kingdom.x, h * kingdom.y, 0,
        w * kingdom.x, h * kingdom.y, radius
      );
      gradient.addColorStop(0, this.lightenColor(kingdom.color, 40));
      gradient.addColorStop(1, kingdom.color);
      
      ctx.fillStyle = gradient;
      ctx.beginPath();
      ctx.arc(w * kingdom.x, h * kingdom.y, radius, 0, Math.PI * 2);
      ctx.fill();
      
      ctx.strokeStyle = this.darkenColor(kingdom.color, 20);
      ctx.lineWidth = 3;
      ctx.stroke();
      
      // Kingdom name
      ctx.fillStyle = '#FFFFFF';
      ctx.font = 'bold 16px Arial';
      ctx.textAlign = 'center';
      ctx.fillText(kingdom.name, w * kingdom.x, h * kingdom.y + 5);
      
      // Characteristic info
      if (characteristic !== 'overview') {
        ctx.fillStyle = '#000000';
        ctx.font = '11px Arial';
        const info = this.getKingdomInfo(kingdom.name.toLowerCase(), characteristic);
        ctx.fillText(info, w * kingdom.x, h * kingdom.y + radius + 20);
      }
    });
  }

  static drawSingleKingdom(ctx, width, height, kingdom, characteristic) {
    const w = width, h = height;
    
    const kingdomData = {
      monera: { color: '#3498DB', name: 'Monera' },
      protista: { color: '#2ECC71', name: 'Protista' },
      fungi: { color: '#E67E22', name: 'Fungi' },
      plantae: { color: '#27AE60', name: 'Plantae' },
      animalia: { color: '#E74C3C', name: 'Animalia' }
    };
    
    const data = kingdomData[kingdom];
    if (!data) return;
    
    // Large centered circle
    const centerX = w * 0.5;
    const centerY = h * 0.4;
    const radius = w * 0.25;
    
    const gradient = ctx.createRadialGradient(centerX, centerY, 0, centerX, centerY, radius);
    gradient.addColorStop(0, this.lightenColor(data.color, 40));
    gradient.addColorStop(1, data.color);
    
    ctx.fillStyle = gradient;
    ctx.beginPath();
    ctx.arc(centerX, centerY, radius, 0, Math.PI * 2);
    ctx.fill();
    
    ctx.strokeStyle = this.darkenColor(data.color, 20);
    ctx.lineWidth = 4;
    ctx.stroke();
    
    // Kingdom name
    ctx.fillStyle = '#FFFFFF';
    ctx.font = 'bold 32px Arial';
    ctx.textAlign = 'center';
    ctx.fillText(data.name, centerX, centerY);
    
    // Detailed characteristics
    const details = this.getDetailedKingdomInfo(kingdom, characteristic);
    ctx.fillStyle = '#000000';
    ctx.font = '14px Arial';
    details.forEach((detail, i) => {
      ctx.fillText(detail, centerX, h * 0.7 + i * 25);
    });
  }

  static getKingdomInfo(kingdom, characteristic) {
    const info = {
      monera: {
        'cell-type': 'Prokaryotic',
        'nutrition': 'Autotrophic/Heterotrophic',
        'organization': 'Unicellular',
        'examples': 'Bacteria, Cyanobacteria'
      },
      protista: {
        'cell-type': 'Eukaryotic',
        'nutrition': 'Varied',
        'organization': 'Mostly Unicellular',
        'examples': 'Amoeba, Paramecium'
      },
      fungi: {
        'cell-type': 'Eukaryotic',
        'nutrition': 'Heterotrophic (Absorptive)',
        'organization': 'Multicellular/Unicellular',
        'examples': 'Mushrooms, Yeast'
      },
      plantae: {
        'cell-type': 'Eukaryotic',
        'nutrition': 'Autotrophic',
        'organization': 'Multicellular',
        'examples': 'Trees, Flowers, Ferns'
      },
      animalia: {
        'cell-type': 'Eukaryotic',
        'nutrition': 'Heterotrophic (Ingestive)',
        'organization': 'Multicellular',
        'examples': 'Mammals, Birds, Fish'
      }
    };
    
    return info[kingdom]?.[characteristic] || '';
  }

  static getDetailedKingdomInfo(kingdom, characteristic) {
    // Returns array of detail strings
    const details = {
      monera: ['Prokaryotic cells', 'No nucleus', 'Cell wall present', 'Reproduce asexually'],
      protista: ['Eukaryotic cells', 'Diverse group', 'Aquatic organisms', 'Some photosynthetic'],
      fungi: ['Eukaryotic cells', 'Chitin cell walls', 'Decomposers', 'Spore reproduction'],
      plantae: ['Eukaryotic cells', 'Cellulose cell walls', 'Photosynthesis', 'Chloroplasts present'],
      animalia: ['Eukaryotic cells', 'No cell walls', 'Heterotrophs', 'Complex tissues']
    };
    
    return details[kingdom] || [];
  }

  // ===== THREE DOMAINS =====
  
  static drawThreeDomains(ctx, x, y, width, height, domain, basis) {
    ctx.save();
    ctx.translate(x, y);
    
    if (domain === 'all') {
      this.drawAllDomains(ctx, width, height, basis);
    } else {
      this.drawSingleDomain(ctx, width, height, domain, basis);
    }
    
    ctx.restore();
  }

  static drawAllDomains(ctx, width, height, basis) {
    const w = width, h = height;
    
    const domains = [
      { name: 'Bacteria', color: '#3498DB', x: 0.25, y: 0.5 },
      { name: 'Archaea', color: '#E74C3C', x: 0.5, y: 0.3 },
      { name: 'Eukarya', color: '#2ECC71', x: 0.75, y: 0.5 }
    ];
    
    // Title
    ctx.fillStyle = '#000000';
    ctx.font = 'bold 22px Arial';
    ctx.textAlign = 'center';
    ctx.fillText('Three Domain System', w * 0.5, 35);
    
    // Draw common ancestor
    ctx.fillStyle = '#FFD700';
    ctx.beginPath();
    ctx.arc(w * 0.5, h * 0.85, 15, 0, Math.PI * 2);
    ctx.fill();
    ctx.strokeStyle = '#000000';
    ctx.lineWidth = 2;
    ctx.stroke();
    
    ctx.fillStyle = '#000000';
    ctx.font = '12px Arial';
    ctx.fillText('Common Ancestor', w * 0.5, h * 0.95);
    
    domains.forEach(domain => {
      // Branch from ancestor
      ctx.strokeStyle = domain.color;
      ctx.lineWidth = 4;
      ctx.beginPath();
      ctx.moveTo(w * 0.5, h * 0.85);
      ctx.quadraticCurveTo(w * 0.5, h * 0.6, w * domain.x, h * domain.y);
      ctx.stroke();
      
      // Domain circle
      const radius = w * 0.15;
      const gradient = ctx.createRadialGradient(
        w * domain.x, h * domain.y, 0,
        w * domain.x, h * domain.y, radius
      );
      gradient.addColorStop(0, this.lightenColor(domain.color, 30));
      gradient.addColorStop(1, domain.color);
      
      ctx.fillStyle = gradient;
      ctx.beginPath();
      ctx.arc(w * domain.x, h * domain.y, radius, 0, Math.PI * 2);
      ctx.fill();
      
      ctx.strokeStyle = '#000000';
      ctx.lineWidth = 3;
      ctx.stroke();
      
      // Domain name
      ctx.fillStyle = '#FFFFFF';
      ctx.font = 'bold 18px Arial';
      ctx.textAlign = 'center';
      ctx.fillText(domain.name, w * domain.x, h * domain.y + 5);
      
      // Basis info
      const basisInfo = this.getDomainBasisInfo(domain.name.toLowerCase(), basis);
      ctx.fillStyle = '#000000';
      ctx.font = '11px Arial';
      ctx.fillText(basisInfo, w * domain.x, h * domain.y + radius + 20);
    });
  }

  static drawSingleDomain(ctx, width, height, domain, basis) {
    const w = width, h = height;
    
    const domainData = {
      bacteria: { color: '#3498DB', name: 'Bacteria' },
      archaea: { color: '#E74C3C', name: 'Archaea' },
      eukarya: { color: '#2ECC71', name: 'Eukarya' }
    };
    
    const data = domainData[domain];
    if (!data) return;
    
    // Large centered display
    const centerX = w * 0.5;
    const centerY = h * 0.35;
    const radius = w * 0.28;
    
    const gradient = ctx.createRadialGradient(centerX, centerY, 0, centerX, centerY, radius);
    gradient.addColorStop(0, this.lightenColor(data.color, 40));
    gradient.addColorStop(1, data.color);
    
    ctx.fillStyle = gradient;
    ctx.beginPath();
    ctx.arc(centerX, centerY, radius, 0, Math.PI * 2);
    ctx.fill();
    
    ctx.strokeStyle = '#000000';
    ctx.lineWidth = 4;
    ctx.stroke();
    
    ctx.fillStyle = '#FFFFFF';
    ctx.font = 'bold 36px Arial';
    ctx.textAlign = 'center';
    ctx.fillText(data.name, centerX, centerY + 10);
    
    // Detailed basis information
    const details = this.getDetailedDomainInfo(domain, basis);
    ctx.fillStyle = '#000000';
    ctx.font = '15px Arial';
    details.forEach((detail, i) => {
      ctx.fillText(detail, centerX, h * 0.65 + i * 28);
    });
  }

  static getDomainBasisInfo(domain, basis) {
    const info = {
      bacteria: {
        molecular: 'Unique rRNA sequences',
        'ribosomal-rna': '16S rRNA distinct',
        'membrane-lipids': 'Ester-linked lipids',
        'cell-wall': 'Peptidoglycan present',
        phylogenetic: 'Ancient lineage'
      },
      archaea: {
        molecular: 'Distinct rRNA patterns',
        'ribosomal-rna': '16S rRNA unique',
        'membrane-lipids': 'Ether-linked lipids',
        'cell-wall': 'No peptidoglycan',
        phylogenetic: 'Extremophile adaptations'
      },
      eukarya: {
        molecular: 'Complex rRNA',
        'ribosomal-rna': '18S rRNA characteristic',
        'membrane-lipids': 'Ester-linked lipids',
        'cell-wall': 'Varied (cellulose/chitin)',
        phylogenetic: 'Membrane-bound organelles'
      }
    };
    
    return info[domain]?.[basis] || '';
  }

  static getDetailedDomainInfo(domain, basis) {
    const details = {
      bacteria: ['Prokaryotic organisms', 'Peptidoglycan cell walls', 'Single circular chromosome', 'Found everywhere'],
      archaea: ['Prokaryotic extremophiles', 'Unique membrane lipids', 'Live in harsh environments', 'Methanogens, halophiles'],
      eukarya: ['Eukaryotic organisms', 'Membrane-bound nucleus', 'Linear chromosomes', 'Animals, plants, fungi, protists']
    };
    
    return details[domain] || [];
  }

  // ===== TAXONOMY HIERARCHY =====
  
  static drawTaxonomyHierarchy(ctx, x, y, width, height, level, example) {
    ctx.save();
    ctx.translate(x, y);
    const levels = [
      { name: 'Domain', color: '#8B0000', y: 0.08 },
      { name: 'Kingdom', color: '#B8860B', y: 0.18 },
      { name: 'Phylum', color: '#006400', y: 0.28 },
      { name: 'Class', color: '#00008B', y: 0.38 },
      { name: 'Order', color: '#8B008B', y: 0.48 },
      { name: 'Family', color: '#FF8C00', y: 0.58 },
      { name: 'Genus', color: '#DC143C', y: 0.68 },
      { name: 'Species', color: '#228B22', y: 0.78 }
    ];
    
    const w = width, h = height;
    
    // Title
    ctx.fillStyle = '#000000';
    ctx.font = 'bold 20px Arial';
    ctx.textAlign = 'center';
    ctx.fillText('Taxonomic Hierarchy', w * 0.5, 25);
    
    // Get example data
    const exampleData = this.getTaxonomyExample(example);
    
    levels.forEach((lvl, index) => {
      if (level !== 'complete' && lvl.name.toLowerCase() !== level) return;
      
      // Box width decreases as we go down
      const boxWidth = w * (0.9 - index * 0.08);
      const boxHeight = h * 0.08;
      const boxX = (w - boxWidth) / 2;
      const boxY = h * lvl.y;
      
      // Draw box with gradient
      const gradient = ctx.createLinearGradient(boxX, boxY, boxX + boxWidth, boxY);
      gradient.addColorStop(0, this.lightenColor(lvl.color, 30));
      gradient.addColorStop(1, lvl.color);
      
      ctx.fillStyle = gradient;
      ctx.fillRect(boxX, boxY, boxWidth, boxHeight);
      
      // Border
      ctx.strokeStyle = this.darkenColor(lvl.color, 20);
      ctx.lineWidth = 2;
      ctx.strokeRect(boxX, boxY, boxWidth, boxHeight);
      
      // Level name
      ctx.fillStyle = '#FFFFFF';
      ctx.font = 'bold 16px Arial';
      ctx.textAlign = 'left';
      ctx.fillText(lvl.name, boxX + 15, boxY + boxHeight / 2 + 6);
      
      // Example organism classification
      if (exampleData[lvl.name]) {
        ctx.fillStyle = '#FFFFFF';
        ctx.font = '14px Arial';
        ctx.textAlign = 'right';
        ctx.fillText(exampleData[lvl.name], boxX + boxWidth - 15, boxY + boxHeight / 2 + 6);
      }
      
      // Connection line to next level
      if (index < levels.length - 1) {
        ctx.strokeStyle = '#666666';
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(w * 0.5, boxY + boxHeight);
        ctx.lineTo(w * 0.5, h * levels[index + 1].y);
        ctx.stroke();
      }
    });
    
    ctx.restore();
  }

  static getTaxonomyExample(example) {
    const examples = {
      human: {
        Domain: 'Eukarya',
        Kingdom: 'Animalia',
        Phylum: 'Chordata',
        Class: 'Mammalia',
        Order: 'Primates',
        Family: 'Hominidae',
        Genus: 'Homo',
        Species: 'sapiens'
      },
      dog: {
        Domain: 'Eukarya',
        Kingdom: 'Animalia',
        Phylum: 'Chordata',
        Class: 'Mammalia',
        Order: 'Carnivora',
        Family: 'Canidae',
        Genus: 'Canis',
        Species: 'familiaris'
      },
      'oak-tree': {
        Domain: 'Eukarya',
        Kingdom: 'Plantae',
        Phylum: 'Anthophyta',
        Class: 'Magnoliopsida',
        Order: 'Fagales',
        Family: 'Fagaceae',
        Genus: 'Quercus',
        Species: 'robur'
      },
      'e-coli': {
        Domain: 'Bacteria',
        Kingdom: 'Eubacteria',
        Phylum: 'Proteobacteria',
        Class: 'Gammaproteobacteria',
        Order: 'Enterobacteriales',
        Family: 'Enterobacteriaceae',
        Genus: 'Escherichia',
        Species: 'coli'
      },
      custom: {
        Domain: 'Example Domain',
        Kingdom: 'Example Kingdom',
        Phylum: 'Example Phylum',
        Class: 'Example Class',
        Order: 'Example Order',
        Family: 'Example Family',
        Genus: 'Example Genus',
        Species: 'example species'
      }
    };
    
    return examples[example] || examples.human;
  }

  // ===== DICHOTOMOUS KEY =====
  
  static drawDichotomousKey(ctx, x, y, width, height, keyType, complexity) {
    ctx.save();
    ctx.translate(x, y);
    
    const w = width, h = height;
    
    // Title
    ctx.fillStyle = '#000000';
    ctx.font = 'bold 18px Arial';
    ctx.textAlign = 'center';
    ctx.fillText(`Dichotomous Key: ${keyType.charAt(0).toUpperCase() + keyType.slice(1)}`, w * 0.5, 25);
    
    const keyData = this.getDichotomousKeyData(keyType, complexity);
    this.drawKeyBranches(ctx, w, h, keyData, 0, w * 0.5, h * 0.1, 0);
    
    ctx.restore();
  }

  static getDichotomousKeyData(keyType, complexity) {
    const keys = {
      leaves: {
        simple: {
          question: 'Leaf arrangement?',
          optionA: { text: 'Alternate', result: 'Oak' },
          optionB: { text: 'Opposite', result: 'Maple' }
        },
        moderate: {
          question: 'Leaf margin?',
          optionA: {
            text: 'Smooth',
            question: 'Leaf shape?',
            optionA: { text: 'Round', result: 'Aspen' },
            optionB: { text: 'Oval', result: 'Magnolia' }
          },
          optionB: {
            text: 'Toothed',
            question: 'Venation?',
            optionA: { text: 'Parallel', result: 'Willow' },
            optionB: { text: 'Netted', result: 'Elm' }
          }
        },
        complex: {
          question: 'Compound or simple?',
          optionA: {
            text: 'Compound',
            question: 'Leaflet arrangement?',
            optionA: {
              text: 'Pinnate',
              question: 'Leaflet count?',
              optionA: { text: '3-5', result: 'Ash' },
              optionB: { text: '7+', result: 'Walnut' }
            },
            optionB: { text: 'Palmate', result: 'Horse Chestnut' }
          },
          optionB: {
            text: 'Simple',
            question: 'Leaf margin?',
            optionA: { text: 'Lobed', result: 'Oak' },
            optionB: {
              text: 'Entire',
              question: 'Texture?',
              optionA: { text: 'Waxy', result: 'Magnolia' },
              optionB: { text: 'Smooth', result: 'Beech' }
            }
          }
        }
      },
      insects: {
        simple: {
          question: 'Wings present?',
          optionA: { text: 'Yes', result: 'Butterfly' },
          optionB: { text: 'No', result: 'Ant' }
        },
        moderate: {
          question: 'Number of wings?',
          optionA: {
            text: '2 wings',
            question: 'Body type?',
            optionA: { text: 'Thick body', result: 'Fly' },
            optionB: { text: 'Thin body', result: 'Mosquito' }
          },
          optionB: {
            text: '4 wings',
            question: 'Wing type?',
            optionA: { text: 'Membranous', result: 'Dragonfly' },
            optionB: { text: 'Scaled', result: 'Butterfly' }
          }
        }
      },
      shells: {
        simple: {
          question: 'Shell shape?',
          optionA: { text: 'Spiral', result: 'Snail' },
          optionB: { text: 'Bivalve', result: 'Clam' }
        }
      }
    };
    
    return keys[keyType]?.[complexity] || keys.leaves.simple;
  }

  static drawKeyBranches(ctx, w, h, data, depth, x, y, maxDepth) {
    if (!data || depth > 4) return;
    
    const boxWidth = 180;
    const boxHeight = 50;
    const verticalSpacing = 100;
    const horizontalSpacing = 200;
    
    // Draw question/result box
    if (data.result) {
      // Terminal node (result)
      ctx.fillStyle = '#2ECC71';
      ctx.fillRect(x - boxWidth / 2, y, boxWidth, boxHeight);
      ctx.strokeStyle = '#27AE60';
      ctx.lineWidth = 2;
      ctx.strokeRect(x - boxWidth / 2, y, boxWidth, boxHeight);
      
      ctx.fillStyle = '#FFFFFF';
      ctx.font = 'bold 14px Arial';
      ctx.textAlign = 'center';
      ctx.fillText(data.result, x, y + boxHeight / 2 + 5);
    } else if (data.question) {
      // Question node
      ctx.fillStyle = '#3498DB';
      ctx.fillRect(x - boxWidth / 2, y, boxWidth, boxHeight);
      ctx.strokeStyle = '#2980B9';
      ctx.lineWidth = 2;
      ctx.strokeRect(x - boxWidth / 2, y, boxWidth, boxHeight);
      
      ctx.fillStyle = '#FFFFFF';
      ctx.font = 'bold 12px Arial';
      ctx.textAlign = 'center';
      ctx.fillText(data.question, x, y + boxHeight / 2 + 5);
      
      // Draw branches
      if (data.optionA) {
        const leftX = x - horizontalSpacing / (depth + 1);
        const nextY = y + verticalSpacing;
        
        // Line to left option
        ctx.strokeStyle = '#E74C3C';
        ctx.lineWidth = 3;
        ctx.beginPath();
        ctx.moveTo(x, y + boxHeight);
        ctx.lineTo(leftX, nextY);
        ctx.stroke();
        
        // Option label
        ctx.fillStyle = '#E74C3C';
        ctx.font = 'bold 11px Arial';
        ctx.textAlign = 'center';
        ctx.fillText(data.optionA.text, (x + leftX) / 2 - 20, (y + boxHeight + nextY) / 2);
        
        this.drawKeyBranches(ctx, w, h, data.optionA, depth + 1, leftX, nextY, maxDepth);
      }
      
      if (data.optionB) {
        const rightX = x + horizontalSpacing / (depth + 1);
        const nextY = y + verticalSpacing;
        
        // Line to right option
        ctx.strokeStyle = '#9B59B6';
        ctx.lineWidth = 3;
        ctx.beginPath();
        ctx.moveTo(x, y + boxHeight);
        ctx.lineTo(rightX, nextY);
        ctx.stroke();
        
        // Option label
        ctx.fillStyle = '#9B59B6';
        ctx.font = 'bold 11px Arial';
        ctx.textAlign = 'center';
        ctx.fillText(data.optionB.text, (x + rightX) / 2 + 20, (y + boxHeight + nextY) / 2);
        
        this.drawKeyBranches(ctx, w, h, data.optionB, depth + 1, rightX, nextY, maxDepth);
      }
    }
  }

  // ===== CLADOGRAM =====
  
  static drawCladogram(ctx, x, y, width, height, group, trait) {
    ctx.save();
    ctx.translate(x, y);
    
    const w = width, h = height;
    
    // Title
    ctx.fillStyle = '#000000';
    ctx.font = 'bold 18px Arial';
    ctx.textAlign = 'center';
    ctx.fillText(`Cladogram: ${group.charAt(0).toUpperCase() + group.slice(1)}`, w * 0.5, 25);
    
    const cladogramData = this.getCladogramData(group, trait);
    this.drawCladogramStructure(ctx, w, h, cladogramData);
    
    ctx.restore();
  }

  static getCladogramData(group, trait) {
    const cladograms = {
      vertebrates: {
        taxa: ['Lamprey', 'Shark', 'Salamander', 'Lizard', 'Bird', 'Mammal'],
        traits: [
          { name: 'Vertebrae', position: 0.1 },
          { name: 'Jaws', position: 0.25 },
          { name: 'Lungs', position: 0.4 },
          { name: 'Amniotic egg', position: 0.55 },
          { name: 'Feathers', position: 0.7 },
          { name: 'Hair', position: 0.85 }
        ]
      },
      primates: {
        taxa: ['Lemur', 'Tarsier', 'Monkey', 'Gibbon', 'Orangutan', 'Human'],
        traits: [
          { name: 'Grasping hands', position: 0.1 },
          { name: 'Forward eyes', position: 0.25 },
          { name: 'Opposable thumb', position: 0.4 },
          { name: 'No tail', position: 0.55 },
          { name: 'Large brain', position: 0.7 },
          { name: 'Bipedal', position: 0.85 }
        ]
      },
      plants: {
        taxa: ['Moss', 'Fern', 'Pine', 'Lily', 'Rose', 'Oak'],
        traits: [
          { name: 'Vascular tissue', position: 0.15 },
          { name: 'Seeds', position: 0.35 },
          { name: 'Flowers', position: 0.55 },
          { name: 'Monocot', position: 0.7 },
          { name: 'Dicot (woody)', position: 0.85 }
        ]
      },
      insects: {
        taxa: ['Silverfish', 'Dragonfly', 'Grasshopper', 'Beetle', 'Butterfly', 'Bee'],
        traits: [
          { name: 'Wings', position: 0.15 },
          { name: 'Folding wings', position: 0.35 },
          { name: 'Complete metamorphosis', position: 0.55 },
          { name: 'Scaled wings', position: 0.7 },
          { name: 'Social behavior', position: 0.85 }
        ]
      }
    };
    
    return cladograms[group] || cladograms.vertebrates;
  }

  static drawCladogramStructure(ctx, w, h, data) {
    const taxa = data.taxa;
    const traits = data.traits;
    
    const startX = w * 0.1;
    const endX = w * 0.9;
    const startY = h * 0.8;
    const topY = h * 0.15;
    
    // Main timeline (horizontal)
    ctx.strokeStyle = '#2C3E50';
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.moveTo(startX, startY);
    ctx.lineTo(endX, startY);
    ctx.stroke();
    
    // Draw branches for each taxon
    const spacing = (endX - startX) / (taxa.length - 1);
    
    taxa.forEach((taxon, i) => {
      const x = startX + i * spacing;
      const branchHeight = startY - topY - (i * 20);
      
      // Vertical branch
      ctx.strokeStyle = '#34495E';
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(x, startY);
      ctx.lineTo(x, startY - branchHeight);
      ctx.stroke();
      
      // Taxon label
      ctx.fillStyle = '#000000';
      ctx.font = 'bold 13px Arial';
      ctx.textAlign = 'center';
      ctx.save();
      ctx.translate(x, startY - branchHeight - 10);
      ctx.rotate(-Math.PI / 4);
      ctx.fillText(taxon, 0, 0);
      ctx.restore();
      
      // Node at branch point
      ctx.fillStyle = '#E74C3C';
      ctx.beginPath();
      ctx.arc(x, startY, 5, 0, Math.PI * 2);
      ctx.fill();
    });
    
    // Draw trait markers
    traits.forEach((trait, i) => {
      const traitX = startX + (endX - startX) * trait.position;
      
      // Trait line (perpendicular to timeline)
      ctx.strokeStyle = '#16A085';
      ctx.lineWidth = 2;
      ctx.setLineDash([5, 5]);
      ctx.beginPath();
      ctx.moveTo(traitX, startY);
      ctx.lineTo(traitX, startY + 30);
      ctx.stroke();
      ctx.setLineDash([]);
      
      // Trait label
      ctx.fillStyle = '#16A085';
      ctx.font = 'italic 11px Arial';
      ctx.textAlign = 'center';
      ctx.fillText(trait.name, traitX, startY + 45);
      
      // Trait marker
      ctx.fillStyle = '#16A085';
      ctx.beginPath();
      ctx.arc(traitX, startY, 4, 0, Math.PI * 2);
      ctx.fill();
    });
    
    // Legend
    ctx.fillStyle = '#000000';
    ctx.font = '12px Arial';
    ctx.textAlign = 'left';
    ctx.fillText('← Ancestral', startX, h * 0.95);
    ctx.textAlign = 'right';
    ctx.fillText('Derived →', endX, h * 0.95);
  }

  // ===== UTILITY FUNCTIONS =====
  
  static lightenColor(color, percent) {
    const num = parseInt(color.replace('#', ''), 16);
    const amt = Math.round(2.55 * percent);
    const R = Math.min(255, (num >> 16) + amt);
    const G = Math.min(255, ((num >> 8) & 0x00FF) + amt);
    const B = Math.min(255, (num & 0x0000FF) + amt);
    return '#' + (0x1000000 + R * 0x10000 + G * 0x100 + B).toString(16).slice(1);
  }

  static darkenColor(color, percent) {
    const num = parseInt(color.replace('#', ''), 16);
    const amt = Math.round(2.55 * percent);
    const R = Math.max(0, (num >> 16) - amt);
    const G = Math.max(0, ((num >> 8) & 0x00FF) - amt);
    const B = Math.max(0, (num & 0x0000FF) - amt);
    return '#' + (0x1000000 + R * 0x10000 + G * 0x100 + B).toString(16).slice(1);
  }
}


