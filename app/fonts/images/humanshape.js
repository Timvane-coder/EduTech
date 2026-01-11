import { createCanvas } from '@napi-rs/canvas';






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

