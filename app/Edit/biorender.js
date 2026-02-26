


// ============================================================================
// ANATOMICAL DIAGRAM RENDERER CLASS - UPDATED
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
                    this.renderAnimalCellDiagram(centerX, centerY, width, height, mergedOptions);
                    break;
                case 'plantCell':
                    this.renderPlantCellDiagram(centerX, centerY, width, height, mergedOptions);
                    break;
                case 'prokaryoticVsEukaryotic':
                    this.renderProkaryoticVsEukaryoticDiagram(centerX, centerY, width, height, mergedOptions);
                    break;
                case 'cellMembrane':
                    this.renderCellMembraneDiagram(centerX, centerY, width, height, mergedOptions);
                    break;
                case 'osmosisDiffusion':
                    this.renderOsmosisDiffusionDiagram(centerX, centerY, width, height, mergedOptions);
                    break;
                case 'activePassiveTransport':
                    this.renderActivePassiveTransportDiagram(centerX, centerY, width, height, mergedOptions);
                    break;
                case 'mitosis':
                    this.renderMitosisDiagram(centerX, centerY, width, height, mergedOptions);
                    break;
                case 'meiosis':
                    this.renderMeiosisDiagram(centerX, centerY, width, height, mergedOptions);
                    break;
                case 'organelles':
                    this.renderOrganellesDiagram(centerX, centerY, width, height, mergedOptions);
                    break;
                case 'cellCycle':
                    this.renderCellCycleDiagram(centerX, centerY, width, height, mergedOptions);
                    break;
                case 'enzymeAction':
                    this.renderEnzymeActionDiagram(centerX, centerY, width, height, mergedOptions);
                    break;

                // ===== GENETICS & MOLECULAR BIOLOGY =====
                case 'dnaStructure':
                    this.renderDNAStructureDiagram(centerX, centerY, width, height, mergedOptions);
                    break;
                case 'rnaStructure':
                    this.renderRNAStructureDiagram(centerX, centerY, width, height, mergedOptions);
                    break;
                case 'dnaReplication':
                    this.renderDNAReplicationDiagram(centerX, centerY, width, height, mergedOptions);
                    break;
                case 'transcription':
                    this.renderTranscriptionDiagram(centerX, centerY, width, height, mergedOptions);
                    break;
                case 'translation':
                    this.renderTranslationDiagram(centerX, centerY, width, height, mergedOptions);
                    break;
                case 'codonChart':
                    this.renderCodonChartDiagram(centerX, centerY, width, height, mergedOptions);
                    break;
                case 'geneExpression':
                    this.renderGeneExpressionDiagram(centerX, centerY, width, height, mergedOptions);
                    break;
                case 'punnettSquare':
                    this.renderPunnettSquareDiagram(centerX, centerY, width, height, mergedOptions);
                    break;
                case 'chromosomes':
                    this.renderChromosomesDiagram(centerX, centerY, width, height, mergedOptions);
                    break;
                case 'crossingOver':
                    this.renderCrossingOverDiagram(centerX, centerY, width, height, mergedOptions);
                    break;
                case 'mutations':
                    this.renderMutationsDiagram(centerX, centerY, width, height, mergedOptions);
                    break;
                case 'recombinantDNA':
                    this.renderRecombinantDNADiagram(centerX, centerY, width, height, mergedOptions);
                    break;
                case 'pcrCycle':
                    this.renderPCRCycleDiagram(centerX, centerY, width, height, mergedOptions);
                    break;

                // ===== HUMAN ANATOMY & PHYSIOLOGY =====
                case 'heartAnatomy':
                    this.renderHeartAnatomyDiagram(0, 0, width, height, mergedOptions);
                    break;
                case 'respiratorySystem':
                    this.renderRespiratorySystemDiagram(centerX, centerY, width, height, mergedOptions);
                    break;
                case 'digestiveSystem':
                    this.renderCompleteDigestiveSystemDiagram(centerX, centerY, width, height, mergedOptions);
                    break;
                case 'circulatorySystem':
                    this.renderCirculatorySystemDiagram(centerX, centerY, width, height, mergedOptions);
                    break;
                case 'nervousSystem':
                    this.renderCompleteNervousSystemDiagram(centerX, centerY, width, height, mergedOptions);
                    break;
                case 'neuronStructure':
                    this.renderNeuronDiagram(centerX, centerY, width, height, mergedOptions);
                    break;
                case 'synapse':
                    this.renderSynapseDiagram(centerX, centerY, width, height, mergedOptions);
                    break;
                case 'skeletalSystem':
                    this.renderSkeletalSystemDiagram(centerX, centerY, width, height, mergedOptions);
                    break;
                case 'muscularSystem':
                    this.renderMuscularSystemDiagram(centerX, centerY, width, height, mergedOptions);
                    break;
                case 'urinarySystem':
                    this.renderUrinarySystemDiagram(centerX, centerY, width, height, mergedOptions);
                    break;
                case 'endocrineSystem':
                    this.renderEndocrineSystemDiagram(centerX, centerY, width, height, mergedOptions);
                    break;
                case 'reproductiveSystem':
                    this.renderReproductiveSystemDiagram(centerX, centerY, width, height, mergedOptions);
                    break;
                case 'immuneSystem':
                    this.renderImmuneSystemDiagram(centerX, centerY, width, height, mergedOptions);
                    break;
                case 'skinStructure':
                    this.renderSkinDiagram(centerX, centerY, width, height, mergedOptions);
                    break;
                case 'eyeAnatomy':
                    this.renderEyeDiagram(centerX, centerY, width, height, mergedOptions);
                    break;

                // ===== PLANTS (BOTANY) =====
                case 'leafCrossSection':
                    this.renderLeafCrossSectionDiagram(centerX, centerY, width, height, mergedOptions);
                    break;
                case 'photosynthesis':
                    this.renderPhotosynthesisDiagram(centerX, centerY, width, height, mergedOptions);
                    break;
                case 'stomata':
                    this.renderStomataDiagram(centerX, centerY, width, height, mergedOptions);
                    break;
                case 'xylemPhloem':
                    this.renderXylemPhloemDiagram(centerX, centerY, width, height, mergedOptions);
                    break;
                case 'flowerStructure':
                    this.renderFlowerStructureDiagram(centerX, centerY, width, height, mergedOptions);
                    break;
                case 'seedGermination':
                    this.renderSeedGerminationDiagram(centerX, centerY, width, height, mergedOptions);
                    break;
                case 'tropisms':
                    this.renderTropismsDiagram(centerX, centerY, width, height, mergedOptions);
                    break;

                // ===== MICROBIOLOGY =====
                case 'bacteriaStructure':
                    this.renderBacteriaStructureDiagram(centerX, centerY, width, height, mergedOptions);
                    break;
                case 'virusStructure':
                    this.renderVirusStructureDiagram(centerX, centerY, width, height, mergedOptions);
                    break;
                case 'fungalCell':
                    this.renderFungalCellDiagram(centerX, centerY, width, height, mergedOptions);
                    break;
                case 'protists':
                    this.renderProtistsDiagram(centerX, centerY, width, height, mergedOptions);
                    break;
                case 'bacterialGrowthCurve':
                    this.renderBacterialGrowthCurveDiagram(centerX, centerY, width, height, mergedOptions);
                    break;
                case 'viralReplication':
                    this.renderViralReplicationDiagram(centerX, centerY, width, height, mergedOptions);
                    break;
                case 'microscopy':
                    this.renderMicroscopyDiagram(centerX, centerY, width, height, mergedOptions);
                    break;

                // Continue with ALL other diagram cases...
                // (I'll show the pattern for remaining categories)

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

        this.ctx.beginPath();
        this.ctx.moveTo(x1, y1);
        this.ctx.lineTo(x2, y2);
        this.ctx.stroke();

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

        const midX = (x1 + x2) / 2;
        const midY = (y1 + y2) / 2;
        const dx = x2 - x1;
        const dy = y2 - y1;
        const ctrlX = midX - dy * 0.3;
        const ctrlY = midY + dx * 0.3;

        this.ctx.beginPath();
        this.ctx.moveTo(x1, y1);
        this.ctx.quadraticCurveTo(ctrlX, ctrlY, x2, y2);
        this.ctx.stroke();

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

            this.ctx.fillStyle = item.color;
            this.ctx.fillRect(0, yPos, boxSize, boxSize);
            this.ctx.strokeStyle = '#2C3E50';
            this.ctx.lineWidth = 1;
            this.ctx.strokeRect(0, yPos, boxSize, boxSize);

            this.ctx.font = '11px Arial';
            this.ctx.fillStyle = '#2C3E50';
            this.ctx.textAlign = 'left';
            this.ctx.fillText(item.label, boxSize + 5, yPos + boxSize - 2);
        });

        this.ctx.restore();
    }

    // ============================================================================
    // CELL BIOLOGY DIAGRAMS - UPDATED WITH COMPONENT OPTIONS & INSETS
    // ============================================================================

    renderAnimalCellDiagram(x, y, width, height, options = {}) {
        const { 
            showLabels = true, 
            view = 'complete',
            organelleHighlight = 'none',
            showInset = false,
            insetType = 'atp-production'
        } = options;

        this.ctx.save();
        this.ctx.translate(x - width/2, y - height/2);

        // Draw based on view option
        if(view === 'complete') {
            // Draw complete animal cell
            AnatomicalShapes.drawCell(this.ctx, width * 0.1, height * 0.1, width * 0.8, height * 0.8, 'animal');
            
            if(showLabels) {
                this.addLabel('Cell Membrane', width * 0.05, height * 0.5, '#2C3E50', 'left');
                this.addLabel('Nucleus', width * 0.5, height * 0.45, '#9370DB');
                this.addLabel('Mitochondria', width * 0.3, height * 0.6, '#FF6347', 'left');
                this.addLabel('Endoplasmic\nReticulum', width * 0.75, height * 0.65, '#4682B4', 'right');
                this.addLabel('Golgi Apparatus', width * 0.75, height * 0.5, '#DAA520', 'right');
                this.addLabel('Ribosomes', width * 0.35, height * 0.3, '#8B4513', 'left');
                this.addLabel('Lysosomes', width * 0.65, height * 0.7, '#9932CC', 'right');
            }
        } else if(view === 'nucleus') {
            // Draw focused nucleus view
            AnatomicalShapes.drawNucleus(this.ctx, width * 0.2, height * 0.2, width * 0.6, height * 0.6);
            if(showLabels) {
                this.addLabel('Nuclear Envelope', width * 0.15, height * 0.5, '#9370DB', 'left');
                this.addLabel('Nucleolus', width * 0.5, height * 0.5, '#4B0082');
                this.addLabel('Chromatin', width * 0.6, height * 0.4, '#8A2BE2', 'left');
                this.addLabel('Nuclear Pores', width * 0.85, height * 0.3, '#9370DB', 'right');
            }
        } else if(view === 'mitochondria') {
            // Draw focused mitochondria view
            AnatomicalShapes.drawMitochondrion(this.ctx, width * 0.2, height * 0.25, width * 0.6, height * 0.5);
            if(showLabels) {
                this.addLabel('Outer Membrane', width * 0.15, height * 0.5, '#FF6347', 'left');
                this.addLabel('Inner Membrane', width * 0.25, height * 0.6, '#DC143C', 'left');
                this.addLabel('Cristae', width * 0.5, height * 0.55, '#8B0000');
                this.addLabel('Matrix', width * 0.5, height * 0.45, '#CD5C5C');
            }
        }
        // Add more view options for other organelles...

        // Draw inset if requested
        if(showInset) {
            this.drawInset(width * 0.55, height * 0.05, width * 0.4, height * 0.3, insetType);
        }

        this.ctx.restore();
    }

    renderPlantCellDiagram(x, y, width, height, options = {}) {
        const { 
            showLabels = true, 
            view = 'complete',
            processHighlight = 'none',
            showInset = false,
            insetType = 'photosynthesis-detail'
        } = options;

        this.ctx.save();
        this.ctx.translate(x - width/2, y - height/2);

        if(view === 'complete') {
            // Draw complete plant cell
            AnatomicalShapes.drawCell(this.ctx, width * 0.1, height * 0.1, width * 0.8, height * 0.8, 'plant');
            
            if(showLabels) {
                this.addLabel('Cell Wall', width * 0.05, height * 0.5, '#228B22', 'left');
                this.addLabel('Cell Membrane', width * 0.12, height * 0.5, '#2E7D32', 'left');
                this.addLabel('Chloroplast', width * 0.3, height * 0.25, '#4CAF50', 'left');
                this.addLabel('Central Vacuole', width * 0.5, height * 0.5, '#4682B4');
                this.addLabel('Nucleus', width * 0.35, height * 0.3, '#9370DB', 'left');
                this.addLabel('Mitochondria', width * 0.7, height * 0.4, '#FF6347', 'right');
            }
        } else if(view === 'chloroplast') {
            // Focused chloroplast view
            AnatomicalShapes.drawChloroplast(this.ctx, width * 0.2, height * 0.25, width * 0.6, height * 0.5);
            if(showLabels) {
                this.addLabel('Outer Membrane', width * 0.15, height * 0.5, '#2E7D32', 'left');
                this.addLabel('Thylakoid', width * 0.4, height * 0.4, '#4CAF50', 'left');
                this.addLabel('Grana', width * 0.5, height * 0.5, '#66BB6A');
                this.addLabel('Stroma', width * 0.6, height * 0.6, '#81C784', 'right');
            }
        } else if(view === 'cellWall') {
            // Cell wall structure
            AnatomicalShapes.drawCellWall(this.ctx, width * 0.1, height * 0.1, width * 0.8, height * 0.8);
            if(showLabels) {
                this.addLabel('Primary Wall', width * 0.05, height * 0.3, '#228B22', 'left');
                this.addLabel('Middle Lamella', width * 0.05, height * 0.5, '#2E7D32', 'left');
                this.addLabel('Plasmodesmata', width * 0.5, height * 0.5, '#4CAF50');
            }
        }

        if(showInset) {
            this.drawInset(width * 0.55, height * 0.05, width * 0.4, height * 0.3, insetType);
        }

        this.ctx.restore();
    }

    renderProkaryoticVsEukaryoticDiagram(x, y, width, height, options = {}) {
        const { 
            showLabels = true, 
            view = 'side-by-side',
            feature = 'complete',
            showInset = false,
            insetType = 'evolutionary-timeline'
        } = options;

        this.ctx.save();
        this.ctx.translate(x - width/2, y - height/2);

        if(view === 'side-by-side') {
            // Prokaryotic cell (left)
            const prokWidth = width * 0.35;
            const prokHeight = height * 0.6;
            AnatomicalShapes.drawBacteriaStructure(this.ctx, width * 0.05, height * 0.2, prokWidth, prokHeight);
            
            // Eukaryotic cell (right)
            const eukWidth = width * 0.35;
            const eukHeight = height * 0.6;
            AnatomicalShapes.drawCell(this.ctx, width * 0.55, height * 0.2, eukWidth, eukHeight, 'animal');
            
            if(showLabels) {
                this.ctx.font = 'bold 16px Arial';
                this.ctx.fillStyle = '#2C3E50';
                this.ctx.textAlign = 'center';
                this.ctx.fillText('PROKARYOTIC', width * 0.225, height * 0.15);
                this.ctx.fillText('EUKARYOTIC', width * 0.725, height * 0.15);
                
                this.ctx.font = '12px Arial';
                this.ctx.fillStyle = '#7F8C8D';
                this.ctx.fillText('No nucleus', width * 0.225, height * 0.85);
                this.ctx.fillText('No organelles', width * 0.225, height * 0.88);
                this.ctx.fillText('Smaller (1-10 μm)', width * 0.225, height * 0.91);
                
                this.ctx.fillText('Has nucleus', width * 0.725, height * 0.85);
                this.ctx.fillText('Membrane-bound organelles', width * 0.725, height * 0.88);
                this.ctx.fillText('Larger (10-100 μm)', width * 0.725, height * 0.91);
            }
        } else if(view === 'prokaryotic') {
            AnatomicalShapes.drawBacteriaStructure(this.ctx, width * 0.15, height * 0.15, width * 0.7, height * 0.7);
            if(showLabels) {
                this.addLabel('Prokaryotic Cell', width * 0.5, height * 0.08, '#2C3E50');
                this.addLabel('Nucleoid (DNA)', width * 0.5, height * 0.5, '#FF6F00');
                this.addLabel('Cell Wall', width * 0.15, height * 0.35, '#7B1FA2', 'left');
                this.addLabel('Ribosomes', width * 0.35, height * 0.6, '#1976D2', 'left');
            }
        } else if(view === 'eukaryotic') {
            AnatomicalShapes.drawCell(this.ctx, width * 0.1, height * 0.1, width * 0.8, height * 0.8, 'animal');
            if(showLabels) {
                this.addLabel('Eukaryotic Cell', width * 0.5, height * 0.08, '#2C3E50');
                this.addLabel('Nucleus', width * 0.5, height * 0.45, '#9370DB');
                this.addLabel('Mitochondria', width * 0.3, height * 0.6, '#FF6347', 'left');
                this.addLabel('ER', width * 0.75, height * 0.65, '#4682B4', 'right');
            }
        }

        if(showInset) {
            this.drawInset(width * 0.55, height * 0.02, width * 0.42, height * 0.25, insetType);
        }

        this.ctx.restore();
    }

    renderCellMembraneDiagram(x, y, width, height, options = {}) {
        const { 
            showLabels = true, 
            view = 'fluidMosaic',
            componentHighlight = 'none',
            showInset = false,
            insetType = 'active-transport'
        } = options;

        this.ctx.save();
        this.ctx.translate(x - width/2, y - height/2);

        if(view === 'fluidMosaic') {
            AnatomicalShapes.drawCellMembrane(this.ctx, width * 0.05, height * 0.3, width * 0.9, height * 0.4);
            
            if(showLabels) {
                this.addLabel('Phospholipid\nBilayer', width * 0.05, height * 0.5, '#FFB6C1', 'left');
                this.addLabel('Integral\nProteins', width * 0.3, height * 0.2, '#4169E1', 'left');
                this.addLabel('Peripheral\nProteins', width * 0.6, height * 0.2, '#1E90FF', 'left');
                this.addLabel('Cholesterol', width * 0.75, height * 0.5, '#FFD700', 'right');
                this.addLabel('Glycoproteins', width * 0.9, height * 0.15, '#9370DB', 'right');
                this.addLabel('Carbohydrate\nChains', width * 0.85, height * 0.1, '#DA70D6', 'right');
            }
        } else if(view === 'phospholipidBilayer') {
            AnatomicalShapes.drawPhospholipidBilayer(this.ctx, width * 0.1, height * 0.25, width * 0.8, height * 0.5);
            if(showLabels) {
                this.addLabel('Hydrophilic Head', width * 0.5, height * 0.2, '#FF69B4');
                this.addLabel('Hydrophobic Tail', width * 0.5, height * 0.5, '#FFB6C1');
            }
        } else if(view === 'proteins') {
            AnatomicalShapes.drawMembraneProteins(this.ctx, width * 0.1, height * 0.2, width * 0.8, height * 0.6);
            if(showLabels) {
                this.addLabel('Channel Protein', width * 0.25, height * 0.15, '#4169E1', 'left');
                this.addLabel('Carrier Protein', width * 0.5, height * 0.15, '#1E90FF');
                this.addLabel('Receptor Protein', width * 0.75, height * 0.15, '#00BFFF', 'right');
            }
        }

        if(showInset) {
            this.drawInset(width * 0.55, height * 0.05, width * 0.4, height * 0.28, insetType);
        }

        this.ctx.restore();
    }

    renderOsmosisDiffusionDiagram(x, y, width, height, options = {}) {
        const { 
            showLabels = true, 
            process = 'both',
            scenario = 'isotonic',
            showInset = false,
            insetType = 'water-potential'
        } = options;

        this.ctx.save();
        this.ctx.translate(x - width/2, y - height/2);

        if(process === 'both') {
            // Diffusion (top)
            AnatomicalShapes.drawDiffusion(this.ctx, width * 0.1, height * 0.1, width * 0.8, height * 0.35);
            if(showLabels) {
                this.ctx.font = 'bold 14px Arial';
                this.ctx.fillStyle = '#2C3E50';
                this.ctx.textAlign = 'center';
                this.ctx.fillText('DIFFUSION', width * 0.5, height * 0.08);
                this.addLabel('High\nConcentration', width * 0.15, height * 0.25, '#E74C3C', 'left');
                this.addLabel('Low\nConcentration', width * 0.85, height * 0.25, '#3498DB', 'right');
            }
            
            // Osmosis (bottom)
            AnatomicalShapes.drawOsmosis(this.ctx, width * 0.1, height * 0.55, width * 0.8, height * 0.35, scenario);
            if(showLabels) {
                this.ctx.font = 'bold 14px Arial';
                this.ctx.fillStyle = '#2C3E50';
                this.ctx.textAlign = 'center';
                this.ctx.fillText('OSMOSIS', width * 0.5, height * 0.53);
                this.addLabel('Semi-permeable\nMembrane', width * 0.5, height * 0.72, '#9370DB');
            }
        } else if(process === 'osmosis') {
            AnatomicalShapes.drawOsmosis(this.ctx, width * 0.1, height * 0.2, width * 0.8, height * 0.6, scenario);
            if(showLabels) {
                this.addLabel(`Osmosis - ${scenario}`, width * 0.5, height * 0.15, '#2C3E50');
            }
        } else if(process === 'diffusion') {
            AnatomicalShapes.drawDiffusion(this.ctx, width * 0.1, height * 0.2, width * 0.8, height * 0.6);
            if(showLabels) {
                this.addLabel('Diffusion', width * 0.5, height * 0.15, '#2C3E50');
            }
        }

        if(showInset) {
            this.drawInset(width * 0.55, height * 0.02, width * 0.42, height * 0.25, insetType);
        }

        this.ctx.restore();
    }

    renderActivePassiveTransportDiagram(x, y, width, height, options = {}) {
        const { 
            showLabels = true, 
            transportType = 'comparison',
            example = 'general',
            showInset = false,
            insetType = 'energy-requirement'
        } = options;

        this.ctx.save();
        this.ctx.translate(x - width/2, y - height/2);

        if(transportType === 'comparison') {
            // Passive transport (left)
            AnatomicalShapes.drawPassiveTransport(this.ctx, width * 0.05, height * 0.2, width * 0.4, height * 0.6);
            if(showLabels) {
                this.ctx.font = 'bold 14px Arial';
                this.ctx.fillStyle = '#2C3E50';
                this.ctx.textAlign = 'center';
                this.ctx.fillText('PASSIVE TRANSPORT', width * 0.25, height * 0.15);
                this.ctx.font = '11px Arial';
                this.ctx.fillStyle = '#7F8C8D';
                this.ctx.fillText('No energy required', width * 0.25, height * 0.85);
                this.ctx.fillText('Down concentration gradient', width * 0.25, height * 0.88);
            }
            
            // Active transport (right)
            AnatomicalShapes.drawActiveTransport(this.ctx, width * 0.55, height * 0.2, width * 0.4, height * 0.6);
            if(showLabels) {
                this.ctx.font = 'bold 14px Arial';
                this.ctx.fillStyle = '#2C3E50';
                this.ctx.textAlign = 'center';
                this.ctx.fillText('ACTIVE TRANSPORT', width * 0.75, height * 0.15);
                this.ctx.font = '11px Arial';
                this.ctx.fillStyle = '#7F8C8D';
                this.ctx.fillText('Requires ATP energy', width * 0.75, height * 0.85);
                this.ctx.fillText('Against concentration gradient', width * 0.75, height * 0.88);
            }
        } else if(transportType === 'passive') {
            AnatomicalShapes.drawPassiveTransport(this.ctx, width * 0.15, height * 0.15, width * 0.7, height * 0.7);
            if(showLabels) {
                this.addLabel('Passive Transport', width * 0.5, height * 0.1, '#2C3E50');
                this.addLabel('High → Low', width * 0.5, height * 0.9, '#3498DB');
            }
        } else if(transportType === 'active') {
            AnatomicalShapes.drawActiveTransport(this.ctx, width * 0.15, height * 0.15, width * 0.7, height * 0.7);
            if(showLabels) {
                this.addLabel('Active Transport', width * 0.5, height * 0.1, '#2C3E50');
                this.addLabel('Low → High + ATP', width * 0.5, height * 0.9, '#E74C3C');
            }
        }

        if(showInset) {
            this.drawInset(width * 0.55, height * 0.02, width * 0.42, height * 0.25, insetType);
        }

        this.ctx.restore();
    }

    renderMitosisDiagram(x, y, width, height, options = {}) {
        const { 
            showLabels = true, 
            stage = 'complete',
            detail = 'overview',
            showInset = false,
            insetType = 'chromosome-condensation'
        } = options;

        this.ctx.save();
        this.ctx.translate(x - width/2, y - height/2);

        if(stage === 'complete') {
            const stages = ['interphase', 'prophase', 'metaphase', 'anaphase', 'telophase', 'cytokinesis'];
            const stageNames = ['Interphase', 'Prophase', 'Metaphase', 'Anaphase', 'Telophase', 'Cytokinesis'];
            const cellWidth = width / 3 - 20;
            const cellHeight = height / 2 - 40;
            
            stages.forEach((stageName, idx) => {
                const col = idx % 3;
                const row = Math.floor(idx / 3);
                const cellX = col * (width / 3) + 10;
                const cellY = row * (height / 2) + 20;
                
                AnatomicalShapes.drawMitosis(this.ctx, cellX, cellY, cellWidth, cellHeight, stageName);
                
                if(showLabels) {
                    this.ctx.font = 'bold 13px Arial';
                    this.ctx.fillStyle = '#2C3E50';
                    this.ctx.textAlign = 'center';
                    this.ctx.fillText(stageNames[idx], cellX + cellWidth / 2, cellY + cellHeight + 18);
                }
            });
        } else {
            // Individual stage view
            AnatomicalShapes.drawMitosis(this.ctx, width * 0.2, height * 0.2, width * 0.6, height * 0.6, stage);
            if(showLabels) {
                const stageMap = {
                    'interphase': 'Interphase',
                    'prophase': 'Prophase',
                    'metaphase': 'Metaphase',
                    'anaphase': 'Anaphase',
                    'telophase': 'Telophase',
                    'cytokinesis': 'Cytokinesis'
                };
                this.addLabel(stageMap[stage], width * 0.5, height * 0.12, '#2C3E50');
            }
        }

        if(showInset) {
            this.drawInset(width * 0.55, height * 0.02, width * 0.42, height * 0.25, insetType);
        }

        this.ctx.restore();
    }

    renderMeiosisDiagram(x, y, width, height, options = {}) {
        const { 
            showLabels = true, 
            stage = 'complete',
            division = 'both',
            showInset = false,
            insetType = 'crossing-over'
        } = options;

        this.ctx.save();
        this.ctx.translate(x - width/2, y - height/2);

        if(stage === 'complete') {
            const stages = [
                { stage: 'meiosis1_prophase', name: 'Meiosis I\nProphase I' },
                { stage: 'meiosis1_metaphase', name: 'Meiosis I\nMetaphase I' },
                { stage: 'meiosis1_end', name: 'End of\nMeiosis I' },
                { stage: 'meiosis2_prophase', name: 'Meiosis II\nProphase II' },
                { stage: 'meiosis2_metaphase', name: 'Meiosis II\nMetaphase II' },
                { stage: 'meiosis2_end', name: 'End of\nMeiosis II' }
            ];
            
            const cellWidth = width / 3 - 20;
            const cellHeight = height / 2 - 40;
            
            stages.forEach((stageInfo, idx) => {
                const col = idx % 3;
                const row = Math.floor(idx / 3);
                const cellX = col * (width / 3) + 10;
                const cellY = row * (height / 2) + 20;
                
                AnatomicalShapes.drawMeiosis(this.ctx, cellX, cellY, cellWidth, cellHeight, stageInfo.stage);
                
                if(showLabels) {
                    this.ctx.font = 'bold 12px Arial';
                    this.ctx.fillStyle = '#2C3E50';
                    this.ctx.textAlign = 'center';
                    const lines = stageInfo.name.split('\n');
                    lines.forEach((line, lineIdx) => {
                        this.ctx.fillText(line, cellX + cellWidth / 2, cellY + cellHeight + 18 + lineIdx * 14);
                    });
                }
            });
        } else {
            // Individual stage view
            AnatomicalShapes.drawMeiosis(this.ctx, width * 0.2, height * 0.2, width * 0.6, height * 0.6, stage);
            if(showLabels) {
                this.addLabel(stage.replace('_', ' ').toUpperCase(), width * 0.5, height * 0.12, '#2C3E50');
            }
        }

        if(showInset) {
            this.drawInset(width * 0.55, height * 0.02, width * 0.42, height * 0.25, insetType);
        }

        this.ctx.restore();
    }

    renderOrganellesDiagram(x, y, width, height, options = {}) {
        const { 
            showLabels = true, 
            organelleType = 'mitochondria',
            detail = 'structure',
            showInset = false,
            insetType = 'atp-production'
        } = options;

        this.ctx.save();
        this.ctx.translate(x - width/2, y - height/2);

        if(organelleType === 'nucleus') {
            AnatomicalShapes.drawNucleus(this.ctx, width * 0.2, height * 0.2, width * 0.6, height * 0.6);
            if(showLabels) {
                this.addLabel('Nucleus', width * 0.5, height * 0.12, '#2C3E50');
                this.addLabel('Nuclear Envelope', width * 0.15, height * 0.5, '#9370DB', 'left');
                this.addLabel('Nucleolus', width * 0.5, height * 0.5, '#4B0082');
                this.addLabel('Chromatin', width * 0.7, height * 0.4, '#8A2BE2', 'left');
            }
        } else if(organelleType === 'mitochondria') {
            AnatomicalShapes.drawMitochondrion(this.ctx, width * 0.2, height * 0.25, width * 0.6, height * 0.5);
            if(showLabels) {
                this.addLabel('Mitochondrion', width * 0.5, height * 0.15, '#2C3E50');
                this.addLabel('Outer Membrane', width * 0.15, height * 0.5, '#FF6347', 'left');
                this.addLabel('Inner Membrane', width * 0.25, height * 0.6, '#DC143C', 'left');
                this.addLabel('Cristae', width * 0.5, height * 0.55, '#8B0000');
                this.addLabel('Matrix', width * 0.5, height * 0.45, '#CD5C5C');
            }
        } else if(organelleType === 'endoplasmicReticulum') {
            AnatomicalShapes.drawER(this.ctx, width * 0.15, height * 0.2, width * 0.7, height * 0.6);
            if(showLabels) {
                this.addLabel('Endoplasmic Reticulum', width * 0.5, height * 0.12, '#2C3E50');
                this.addLabel('Rough ER\n(with ribosomes)', width * 0.25, height * 0.5, '#4682B4', 'left');
                this.addLabel('Smooth ER\n(no ribosomes)', width * 0.75, height * 0.5, '#5F9EA0', 'right');
            }
        } else if(organelleType === 'golgiApparatus') {
            AnatomicalShapes.drawGolgiApparatus(this.ctx, width * 0.25, height * 0.25, width * 0.5, height * 0.5);
            if(showLabels) {
                this.addLabel('Golgi Apparatus', width * 0.5, height * 0.15, '#2C3E50');
                this.addLabel('Cis Face\n(receiving)', width * 0.2, height * 0.5, '#DAA520', 'left');
                this.addLabel('Trans Face\n(shipping)', width * 0.8, height * 0.5, '#B8860B', 'right');
            }
        } else if(organelleType === 'lysosome') {
            AnatomicalShapes.drawLysosome(this.ctx, width * 0.35, height * 0.35, width * 0.3, height * 0.3);
            if(showLabels) {
                this.addLabel('Lysosome', width * 0.5, height * 0.25, '#2C3E50');
                this.addLabel('Digestive Enzymes', width * 0.5, height * 0.5, '#9932CC');
                this.addLabel('Membrane', width * 0.75, height * 0.5, '#8B008B', 'right');
            }
        }

        if(showInset) {
            const insetMap = {
                'nucleus': 'dna-packaging',
                'mitochondria': 'atp-production',
                'endoplasmicReticulum': 'protein-synthesis',
                'golgiApparatus': 'vesicle-transport',
                'lysosome': 'enzyme-action'
            };
            this.drawInset(width * 0.55, height * 0.05, width * 0.4, height * 0.28, insetMap[organelleType] || insetType);
        }

        this.ctx.restore();
    }

    renderCellCycleDiagram(x, y, width, height, options = {}) {
        const { 
            showLabels = true, 
            phase = 'complete',
            regulation = 'overview',
            showInset = false,
            insetType = 'checkpoint-control'
        } = options;

        this.ctx.save();
        this.ctx.translate(x - width/2, y - height/2);

        const centerX = width * 0.5;
        const centerY = height * 0.5;
        const radius = Math.min(width, height) * 0.35;

        // Draw cell cycle circle
        const phases = [
            { name: 'G1', angle: 0, span: Math.PI * 0.5, color: '#3498DB' },
            { name: 'S', angle: Math.PI * 0.5, span: Math.PI * 0.5, color: '#9B59B6' },
            { name: 'G2', angle: Math.PI, span: Math.PI * 0.4, color: '#E74C3C' },
            { name: 'M', angle: Math.PI * 1.4, span: Math.PI * 0.6, color: '#F39C12' }
        ];

        phases.forEach(phaseInfo => {
            this.ctx.fillStyle = phase === 'complete' || phase === phaseInfo.name.toLowerCase() ? phaseInfo.color : `${phaseInfo.color}40`;
            this.ctx.beginPath();
            this.ctx.moveTo(centerX, centerY);
            this.ctx.arc(centerX, centerY, radius, phaseInfo.angle, phaseInfo.angle + phaseInfo.span);
            this.ctx.closePath();
            this.ctx.fill();
            
            this.ctx.strokeStyle = '#2C3E50';
            this.ctx.lineWidth = 2;
            this.ctx.stroke();
            
            if(showLabels) {
                const labelAngle = phaseInfo.angle + phaseInfo.span / 2;
                const labelX = centerX + Math.cos(labelAngle) * radius * 0.7;
                const labelY = centerY + Math.sin(labelAngle) * radius * 0.7;
                this.ctx.font = 'bold 18px Arial';
                this.ctx.fillStyle = '#FFFFFF';
                this.ctx.textAlign = 'center';
                this.ctx.fillText(phaseInfo.name, labelX, labelY);
            }
        });

        // Center circle for interphase
        this.ctx.fillStyle = '#ECF0F1';
        this.ctx.beginPath();
        this.ctx.arc(centerX, centerY, radius * 0.3, 0, Math.PI * 2);
        this.ctx.fill();
        this.ctx.strokeStyle = '#2C3E50';
        this.ctx.lineWidth = 2;
        this.ctx.stroke();

        if(showLabels) {
            this.ctx.font = 'bold 14px Arial';
            this.ctx.fillStyle = '#2C3E50';
            this.ctx.textAlign = 'center';
            this.ctx.fillText('Interphase', centerX, centerY - 5);
            this.ctx.font = '12px Arial';
            this.ctx.fillText('(G1, S, G2)', centerX, centerY + 10);
            
            // Phase descriptions
            this.ctx.font = '11px Arial';
            this.ctx.fillStyle = '#7F8C8D';
            this.ctx.fillText('G1: Cell Growth', width * 0.5, height * 0.92);
            this.ctx.fillText('S: DNA Replication', width * 0.5, height * 0.95);
            this.ctx.fillText('G2: Prepare for Mitosis', width * 0.5, height * 0.98);
        }

        if(showInset) {
            this.drawInset(width * 0.02, height * 0.02, width * 0.35, height * 0.25, insetType);
        }

        this.ctx.restore();
    }

    renderEnzymeActionDiagram(x, y, width, height, options = {}) {
        const { 
            showLabels = true, 
            model = 'both',
            stage = 'complete',
            showInset = false,
            insetType = 'active-site'
        } = options;

        this.ctx.save();
        this.ctx.translate(x - width/2, y - height/2);

        if(model === 'both') {
            // Lock and Key (left)
            AnatomicalShapes.drawEnzyme(this.ctx, width * 0.05, height * 0.2, width * 0.4, height * 0.6, 'lock-and-key');
            if(showLabels) {
                this.ctx.font = 'bold 14px Arial';
                this.ctx.fillStyle = '#2C3E50';
                this.ctx.textAlign = 'center';
                this.ctx.fillText('LOCK AND KEY MODEL', width * 0.25, height * 0.15);
                this.addLabel('Rigid\nActive Site', width * 0.25, height * 0.85, '#9370DB');
            }
            
            // Induced Fit (right)
            AnatomicalShapes.drawEnzyme(this.ctx, width * 0.55, height * 0.2, width * 0.4, height * 0.6, 'induced-fit');
            if(showLabels) {
                this.ctx.font = 'bold 14px Arial';
                this.ctx.fillStyle = '#2C3E50';
                this.ctx.textAlign = 'center';
                this.ctx.fillText('INDUCED FIT MODEL', width * 0.75, height * 0.15);
                this.addLabel('Flexible\nActive Site', width * 0.75, height * 0.85, '#FF6347');
            }
        } else {
            AnatomicalShapes.drawEnzyme(this.ctx, width * 0.15, height * 0.15, width * 0.7, height * 0.7, model);
            if(showLabels) {
                const modelName = model === 'lockAndKey' ? 'Lock and Key Model' : 'Induced Fit Model';
                this.addLabel(modelName, width * 0.5, height * 0.1, '#2C3E50');
            }
        }

        if(showInset) {
            this.drawInset(width * 0.55, height * 0.02, width * 0.42, height * 0.25, insetType);
        }

        this.ctx.restore();
    }

    // ============================================================================
    // GENETICS & MOLECULAR BIOLOGY DIAGRAMS
    // ============================================================================

    renderDNAStructureDiagram(x, y, width, height, options = { }) {
        const { 
            showLabels = true, 
            view = 'doubleHelix',
            componentFocus = 'complete',
            showInset = false,
            insetType = 'base-pairing-rules'
        } = options;

        this.ctx.save();
        this.ctx.translate(x - width/2, y - height/2);

        if(view === 'doubleHelix') {
            AnatomicalShapes.drawDNA(this.ctx, width * 0.3, height * 0.1, width * 0.4, height * 0.8);
            
            if(showLabels) {
                this.addLabel('Sugar-Phosphate\nBackbone', width * 0.15, height * 0.5, '#4169E1', 'left');
                this.addLabel('Base Pairs', width * 0.5, height * 0.3, '#808080');
                this.addLabel('Hydrogen\nBonds', width * 0.85, height * 0.4, '#95A5A6', 'right');
                
                // Base pair color legend
                this.ctx.font = '11px Arial';
                this.ctx.fillStyle = '#FF6B6B';
                this.ctx.fillText('A-T', width * 0.5, height * 0.92);
                this.ctx.fillStyle = '#FFD93D';
                this.ctx.fillText('G-C', width * 0.5, height * 0.95);
            }
        } else if(view === 'basePairs') {
            AnatomicalShapes.drawBasePairs(this.ctx, width * 0.2, height * 0.2, width * 0.6, height * 0.6);
            if(showLabels) {
                this.addLabel('Adenine (A)', width * 0.25, height * 0.3, '#FF6B6B', 'left');
                this.addLabel('Thymine (T)', width * 0.75, height * 0.3, '#4ECDC4', 'right');
                this.addLabel('Guanine (G)', width * 0.25, height * 0.6, '#FFD93D', 'left');
                this.addLabel('Cytosine (C)', width * 0.75, height * 0.6, '#95E1D3', 'right');
            }
        } else if(view === 'sugarPhosphate') {
            AnatomicalShapes.drawSugarPhosphateBackbone(this.ctx, width * 0.2, height * 0.15, width * 0.6, height * 0.7);
            if(showLabels) {
                this.addLabel('Phosphate Group', width * 0.15, height * 0.3, '#FFA500', 'left');
                this.addLabel('Deoxyribose Sugar', width * 0.5, height * 0.5, '#87CEEB');
                this.addLabel('5\' to 3\' Direction', width * 0.85, height * 0.7, '#2C3E50', 'right');
            }
        } else if(view === 'nucleotide') {
            AnatomicalShapes.drawNucleotide(this.ctx, width * 0.25, height * 0.2, width * 0.5, height * 0.6);
            if(showLabels) {
                this.addLabel('Nucleotide', width * 0.5, height * 0.12, '#2C3E50');
                this.addLabel('Phosphate', width * 0.3, height * 0.3, '#FFA500', 'left');
                this.addLabel('Sugar', width * 0.5, height * 0.5, '#87CEEB');
                this.addLabel('Nitrogenous\nBase', width * 0.7, height * 0.7, '#FF6B6B', 'right');
            }
        }

        if(showInset) {
            this.drawInset(width * 0.6, height * 0.05, width * 0.38, height * 0.25, insetType);
        }

        this.ctx.restore();
    }

    renderRNAStructureDiagram(x, y, width, height, options = {}) {
        const { 
            showLabels = true, 
            rnaType = 'mRNA',
            feature = 'structure',
            showInset = false,
            insetType = 'rna-bases'
        } = options;

        this.ctx.save();
        this.ctx.translate(x - width/2, y - height/2);

        if(rnaType === 'mRNA') {
            AnatomicalShapes.drawRNA(this.ctx, width * 0.15, height * 0.15, width * 0.7, height * 0.7, 'mRNA');
            if(showLabels) {
                this.addLabel('mRNA (Messenger RNA)', width * 0.5, height * 0.1, '#2C3E50');
                this.addLabel('5\' Cap', width * 0.15, height * 0.25, '#FFD700', 'left');
                this.addLabel('Coding Region', width * 0.5, height * 0.5, '#4169E1');
                this.addLabel('3\' Poly-A Tail', width * 0.85, height * 0.75, '#32CD32', 'right');
            }
        } else if(rnaType === 'tRNA') {
            AnatomicalShapes.drawRNA(this.ctx, width * 0.25, height * 0.15, width * 0.5, height * 0.7, 'tRNA');
            if(showLabels) {
                this.addLabel('tRNA (Transfer RNA)', width * 0.5, height * 0.1, '#2C3E50');
                this.addLabel('Amino Acid\nAttachment Site', width * 0.5, height * 0.2, '#FF6347');
                this.addLabel('Anticodon', width * 0.5, height * 0.85, '#9370DB');
                this.addLabel('Cloverleaf\nStructure', width * 0.85, height * 0.5, '#4682B4', 'right');
            }
        } else if(rnaType === 'rRNA') {
            AnatomicalShapes.drawRNA(this.ctx, width * 0.2, height * 0.2, width * 0.6, height * 0.6, 'rRNA');
            if(showLabels) {
                this.addLabel('rRNA (Ribosomal RNA)', width * 0.5, height * 0.12, '#2C3E50');
                this.addLabel('Complex\nSecondary Structure', width * 0.5, height * 0.5, '#20B2AA');
                this.addLabel('Part of\nRibosome', width * 0.85, height * 0.7, '#2E8B57', 'right');
            }
        } else if(rnaType === 'comparison') {
            // Show all three types
            const types = ['mRNA', 'tRNA', 'rRNA'];
            const names = ['mRNA', 'tRNA', 'rRNA'];
            const cellWidth = width / 3 - 15;
            
            types.forEach((type, idx) => {
                const cellX = idx * (width / 3) + 10;
                AnatomicalShapes.drawRNA(this.ctx, cellX, height * 0.2, cellWidth, height * 0.6, type);
                
                if(showLabels) {
                    this.ctx.font = 'bold 13px Arial';
                    this.ctx.fillStyle = '#2C3E50';
                    this.ctx.textAlign = 'center';
                    this.ctx.fillText(names[idx], cellX + cellWidth / 2, height * 0.15);
                }
            });
        }

        if(showInset) {
            this.drawInset(width * 0.55, height * 0.02, width * 0.42, height * 0.25, insetType);
        }

        this.ctx.restore();
    }

    renderDNAReplicationDiagram(x, y, width, height, options = {}) {
        const { 
            showLabels = true, 
            stage = 'complete',
            enzymeHighlight = 'all',
            showInset = false,
            insetType = 'okazaki-fragments'
        } = options;

        this.ctx.save();
        this.ctx.translate(x - width/2, y - height/2);

        if(stage === 'complete') {
            AnatomicalShapes.drawDNAReplication(this.ctx, width * 0.15, height * 0.15, width * 0.7, height * 0.7);
            
            if(showLabels) {
                this.addLabel('Helicase', width * 0.5, height * 0.25, '#FF6347');
                this.addLabel('Leading Strand', width * 0.3, height * 0.5, '#3498DB', 'left');
                this.addLabel('Lagging Strand', width * 0.7, height * 0.5, '#9B59B6', 'right');
                this.addLabel('DNA Polymerase', width * 0.5, height * 0.6, '#F39C12');
                this.addLabel('Primase', width * 0.65, height * 0.4, '#E74C3C', 'left');
                this.addLabel('Ligase', width * 0.75, height * 0.65, '#1ABC9C', 'right');
                this.addLabel('Okazaki\nFragments', width * 0.8, height * 0.55, '#8E44AD', 'right');
            }
        } else if(stage === 'initiation') {
            AnatomicalShapes.drawReplicationInitiation(this.ctx, width * 0.2, height * 0.25, width * 0.6, height * 0.5);
            if(showLabels) {
                this.addLabel('Origin of Replication', width * 0.5, height * 0.2, '#2C3E50');
                this.addLabel('Helicase Unwinds DNA', width * 0.5, height * 0.5, '#FF6347');
            }
        } else if(stage === 'elongation') {
            AnatomicalShapes.drawReplicationElongation(this.ctx, width * 0.15, height * 0.2, width * 0.7, height * 0.6);
            if(showLabels) {
                this.addLabel('Continuous Synthesis →', width * 0.3, height * 0.35, '#3498DB', 'left');
                this.addLabel('Discontinuous Synthesis ←', width * 0.7, height * 0.65, '#9B59B6', 'right');
            }
        }

        if(showInset) {
            this.drawInset(width * 0.55, height * 0.02, width * 0.42, height * 0.25, insetType);
        }

        this.ctx.restore();
    }

    renderTranscriptionDiagram(x, y, width, height, options = {}) {
        const { 
            showLabels = true, 
            stage = 'complete',
            detail = 'overview',
            showInset = false,
            insetType = 'rna-splicing'
        } = options;

        this.ctx.save();
        this.ctx.translate(x - width/2, y - height/2);

        if(stage === 'complete') {
            AnatomicalShapes.drawTranscription(this.ctx, width * 0.1, height * 0.2, width * 0.8, height * 0.6);
            
            if(showLabels) {
                this.addLabel('DNA Template', width * 0.25, height * 0.35, '#4169E1', 'left');
                this.addLabel('RNA Polymerase', width * 0.5, height * 0.25, '#E74C3C');
                this.addLabel('mRNA Strand', width * 0.65, height * 0.5, '#32CD32', 'left');
                this.addLabel('Promoter', width * 0.15, height * 0.45, '#FFD700', 'left');
                this.addLabel('Terminator', width * 0.85, height * 0.55, '#FF6347', 'right');
                
                // Direction arrows
                this.ctx.font = '14px Arial';
                this.ctx.fillStyle = '#2C3E50';
                this.ctx.fillText('5\' → 3\'', width * 0.5, height * 0.85);
            }
        } else if(stage === 'initiation') {
            AnatomicalShapes.drawTranscriptionInitiation(this.ctx, width * 0.15, height * 0.25, width * 0.7, height * 0.5);
            if(showLabels) {
                this.addLabel('Transcription Factors', width * 0.3, height * 0.2, '#9370DB', 'left');
                this.addLabel('Promoter Region', width * 0.5, height * 0.5, '#FFD700');
                this.addLabel('RNA Polymerase Binding', width * 0.7, height * 0.35, '#E74C3C', 'right');
            }
        } else if(stage === 'elongation') {
            AnatomicalShapes.drawTranscriptionElongation(this.ctx, width * 0.1, height * 0.2, width * 0.8, height * 0.6);
            if(showLabels) {
                this.addLabel('RNA Polymerase moves →', width * 0.5, height * 0.15, '#E74C3C');
                this.addLabel('RNA strand growing', width * 0.65, height * 0.55, '#32CD32', 'left');
            }
        } else if(stage === 'termination') {
            AnatomicalShapes.drawTranscriptionTermination(this.ctx, width * 0.15, height * 0.25, width * 0.7, height * 0.5);
            if(showLabels) {
                this.addLabel('Termination Signal', width * 0.7, height * 0.45, '#FF6347', 'right');
                this.addLabel('mRNA Released', width * 0.5, height * 0.6, '#32CD32');
            }
        } else if(stage === 'rna-processing') {
            AnatomicalShapes.drawRNAProcessing(this.ctx, width * 0.1, height * 0.2, width * 0.8, height * 0.6);
            if(showLabels) {
                this.addLabel('5\' Capping', width * 0.15, height * 0.3, '#FFD700', 'left');
                this.addLabel('Splicing (Remove Introns)', width * 0.5, height * 0.45, '#9370DB');
                this.addLabel('3\' Poly-A Tail', width * 0.85, height * 0.6, '#32CD32', 'right');
            }
        }

        if(showInset) {
            this.drawInset(width * 0.55, height * 0.02, width * 0.42, height * 0.25, insetType);
        }

        this.ctx.restore();
    }

    renderTranslationDiagram(x, y, width, height, options = {}) {
        const { 
            showLabels = true, 
            stage = 'complete',
            componentFocus = 'complete',
            showInset = false,
            insetType = 'codon-anticodon'
        } = options;

        this.ctx.save();
        this.ctx.translate(x - width/2, y - height/2);

        if(stage === 'complete') {
            AnatomicalShapes.drawTranslation(this.ctx, width * 0.1, height * 0.2, width * 0.8, height * 0.6);
            
            if(showLabels) {
                this.addLabel('Ribosome', width * 0.4, height * 0.15, '#8B4513');
                this.addLabel('mRNA', width * 0.5, height * 0.45, '#32CD32');
                this.addLabel('tRNA', width * 0.25, height * 0.6, '#9370DB', 'left');
                this.addLabel('Amino Acid', width * 0.3, height * 0.3, '#FF6347', 'left');
                this.addLabel('Growing Polypeptide', width * 0.15, height * 0.35, '#FFD700', 'left');
                this.addLabel('A Site', width * 0.45, height * 0.55, '#4169E1', 'left');
                this.addLabel('P Site', width * 0.55, height * 0.55, '#DC143C', 'right');
                this.addLabel('E Site', width * 0.65, height * 0.55, '#32CD32', 'right');
            }
        } else if(stage === 'initiation') {
            AnatomicalShapes.drawTranslationInitiation(this.ctx, width * 0.15, height * 0.25, width * 0.7, height * 0.5);
            if(showLabels) {
                this.addLabel('Start Codon (AUG)', width * 0.5, height * 0.5, '#E74C3C');
                this.addLabel('Ribosome Assembly', width * 0.5, height * 0.2, '#8B4513');
                this.addLabel('Initiator tRNA', width * 0.6, height * 0.6, '#9370DB', 'left');
            }
        } else if(stage === 'elongation') {
            AnatomicalShapes.drawTranslationElongation(this.ctx, width * 0.1, height * 0.2, width * 0.8, height * 0.6);
            if(showLabels) {
                this.addLabel('Peptide Bond Formation', width * 0.3, height * 0.35, '#FFD700', 'left');
                this.addLabel('Ribosome moves →', width * 0.5, height * 0.15, '#8B4513');
            }
        } else if(stage === 'termination') {
            AnatomicalShapes.drawTranslationTermination(this.ctx, width * 0.15, height * 0.25, width * 0.7, height * 0.5);
            if(showLabels) {
                this.addLabel('Stop Codon', width * 0.5, height * 0.5, '#FF6347');
                this.addLabel('Release Factor', width * 0.6, height * 0.35, '#9370DB', 'left');
                this.addLabel('Polypeptide Released', width * 0.3, height * 0.3, '#FFD700', 'left');
            }
        }

        if(showInset) {
            this.drawInset(width * 0.55, height * 0.02, width * 0.42, height * 0.25, insetType);
        }

        this.ctx.restore();
    }

    renderCodonChartDiagram(x, y, width, height, options = {}) {
        const { 
            showLabels = true, 
            display = 'table',
            feature = 'standard',
            showInset = false,
            insetType = 'universal-code'
        } = options;

        this.ctx.save();
        this.ctx.translate(x - width/2, y - height/2);

        if(display === 'table') {
            AnatomicalShapes.drawCodonTable(this.ctx, width * 0.1, height * 0.15, width * 0.8, height * 0.7);
            
            if(showLabels) {
                this.ctx.font = '11px Arial';
                this.ctx.fillStyle = '#2C3E50';
                this.ctx.textAlign = 'center';
                
                // Legend
                this.ctx.fillStyle = '#E74C3C';
                this.ctx.fillRect(width * 0.1, height * 0.88, 12, 12);
                this.ctx.fillStyle = '#7F8C8D';
                this.ctx.textAlign = 'left';
                this.ctx.fillText('Start Codon (AUG)', width * 0.13, height * 0.895);
                
                this.ctx.fillStyle = '#95A5A6';
                this.ctx.fillRect(width * 0.35, height * 0.88, 12, 12);
                this.ctx.fillText('Stop Codons (UAA, UAG, UGA)', width * 0.38, height * 0.895);
            }
        } else if(display === 'circular') {
            AnatomicalShapes.drawCodonWheel(this.ctx, width * 0.5, height * 0.5, Math.min(width, height) * 0.4);
            
            if(showLabels) {
                this.addLabel('Genetic Code Wheel', width * 0.5, height * 0.1, '#2C3E50');
                this.addLabel('Read from center outward', width * 0.5, height * 0.92, '#7F8C8D');
            }
        }

        if(showInset) {
            this.drawInset(width * 0.55, height * 0.02, width * 0.42, height * 0.25, insetType);
        }

        this.ctx.restore();
    }

    renderGeneExpressionDiagram(x, y, width, height, options = {}) {
        const { 
            showLabels = true, 
            stage = 'complete',
            regulation = 'overview',
            showInset = false,
            insetType = 'central-dogma'
        } = options;

        this.ctx.save();
        this.ctx.translate(x - width/2, y - height/2);

        if(stage === 'complete') {
            // DNA → RNA → Protein flow
            const flowY = height * 0.4;
            
            // DNA
            AnatomicalShapes.drawDNA(this.ctx, width * 0.05, flowY - 50, width * 0.15, 100);
            if(showLabels) {
                this.addLabel('DNA', width * 0.125, flowY - 70, '#4169E1');
            }
            
            // Transcription arrow
            this.drawArrow(width * 0.22, flowY, width * 0.33, flowY, '#E74C3C', 'Transcription');
            
            // RNA
            AnatomicalShapes.drawRNA(this.ctx, width * 0.35, flowY - 40, width * 0.12, 80, 'mRNA');
            if(showLabels) {
                this.addLabel('mRNA', width * 0.41, flowY - 60, '#32CD32');
            }
            
            // Translation arrow
            this.drawArrow(width * 0.49, flowY, width * 0.60, flowY, '#9B59B6', 'Translation');
            
            // Protein
            AnatomicalShapes.drawProtein(this.ctx, width * 0.63, flowY - 45, width * 0.25, 90);
            if(showLabels) {
                this.addLabel('Protein', width * 0.755, flowY - 65, '#FFD700');
            }
            
            if(showLabels) {
                this.ctx.font = 'bold 18px Arial';
                this.ctx.fillStyle = '#2C3E50';
                this.ctx.textAlign = 'center';
                this.ctx.fillText('Central Dogma of Molecular Biology', width * 0.5, height * 0.15);
            }
        }

        if(showInset) {
            this.drawInset(width * 0.55, height * 0.6, width * 0.42, height * 0.35, insetType);
        }

        this.ctx.restore();
    }

    renderPunnettSquareDiagram(x, y, width, height, options = {}) {
        const { 
            showLabels = true, 
            crossType = 'monohybrid',
            trait = 'simple',
            showInset = false,
            insetType = 'genotype-phenotype'
        } = options;

        this.ctx.save();
        this.ctx.translate(x - width/2, y - height/2);

        if(crossType === 'monohybrid') {
            const squareSize = Math.min(width, height) * 0.6;
            const startX = (width - squareSize) / 2;
            const startY = (height - squareSize) / 2;
            
            AnatomicalShapes.drawPunnettSquare(this.ctx, startX, startY, squareSize, squareSize, 'monohybrid');
            
            if(showLabels) {
                this.addLabel('Monohybrid Cross', width * 0.5, startY - 20, '#2C3E50');
                this.addLabel('P1 Gametes', startX - 30, startY + squareSize / 2, '#7F8C8D', 'right');
                this.addLabel('P2 Gametes', startX + squareSize / 2, startY - 10, '#7F8C8D');
                
                // Phenotypic ratio
                this.ctx.font = '12px Arial';
                this.ctx.fillStyle = '#7F8C8D';
                this.ctx.textAlign = 'center';
                this.ctx.fillText('Phenotypic Ratio: 3:1', width * 0.5, startY + squareSize + 25);
                this.ctx.fillText('Genotypic Ratio: 1:2:1', width * 0.5, startY + squareSize + 40);
            }
        } else if(crossType === 'dihybrid') {
            const squareSize = Math.min(width, height) * 0.7;
            const startX = (width - squareSize) / 2;
            const startY = (height - squareSize) / 2 + 20;
            
            AnatomicalShapes.drawPunnettSquare(this.ctx, startX, startY, squareSize, squareSize, 'dihybrid');
            
            if(showLabels) {
                this.addLabel('Dihybrid Cross', width * 0.5, startY - 25, '#2C3E50');
                this.ctx.font = '12px Arial';
                this.ctx.fillStyle = '#7F8C8D';
                this.ctx.textAlign = 'center';
                this.ctx.fillText('Phenotypic Ratio: 9:3:3:1', width * 0.5, startY + squareSize + 20);
            }
        }

        if(showInset) {
            this.drawInset(width * 0.02, height * 0.02, width * 0.35, height * 0.25, insetType);
        }

        this.ctx.restore();
    }

    renderChromosomesDiagram(x, y, width, height, options = {}) {
        const { 
            showLabels = true, 
            view = 'single',
            stage = 'metaphase',
            showInset = false,
            insetType = 'chromatin-packaging'
        } = options;

        this.ctx.save();
        this.ctx.translate(x - width/2, y - height/2);

        if(view === 'single') {
            AnatomicalShapes.drawChromosome(this.ctx, width * 0.3, height * 0.15, width * 0.4, height * 0.7);
            
            if(showLabels) {
                this.addLabel('Chromosome', width * 0.5, height * 0.1, '#2C3E50');
                this.addLabel('Chromatid', width * 0.35, height * 0.5, '#9370DB', 'left');
                this.addLabel('Centromere', width * 0.5, height * 0.5, '#E74C3C');
                this.addLabel('Sister Chromatid', width * 0.65, height * 0.5, '#9370DB', 'right');
                this.addLabel('Telomere', width * 0.5, height * 0.2, '#FFD700');
                this.addLabel('Telomere', width * 0.5, height * 0.8, '#FFD700');
            }
        } else if(view === 'homologous-pair') {
            AnatomicalShapes.drawHomologousPair(this.ctx, width * 0.2, height * 0.15, width * 0.6, height * 0.7);
            
            if(showLabels) {
                this.addLabel('Homologous Chromosomes', width * 0.5, height * 0.1, '#2C3E50');
                this.addLabel('Maternal', width * 0.35, height * 0.5, '#FF69B4', 'left');
                this.addLabel('Paternal', width * 0.65, height * 0.5, '#4169E1', 'right');
                this.addLabel('Same genes,\ndifferent alleles', width * 0.5, height * 0.9, '#7F8C8D');
            }
        } else if(view === 'karyotype') {
            AnatomicalShapes.drawKaryotype(this.ctx, width * 0.05, height * 0.15, width * 0.9, height * 0.7);
            
            if(showLabels) {
                this.addLabel('Human Karyotype (46 Chromosomes)', width * 0.5, height * 0.1, '#2C3E50');
                this.addLabel('22 pairs of autosomes + XX or XY', width * 0.5, height * 0.9, '#7F8C8D');
            }
        }

        if(showInset) {
            this.drawInset(width * 0.55, height * 0.02, width * 0.42, height * 0.25, insetType);
        }

        this.ctx.restore();
    }

    
/**

continue genetics
*/


// ============================================================>
// ANATOMICAL DIAGRAM RENDERER CLASS - CONTINUED IMPLEMENTATIONS
// =====================================================================================

// ===== HUMAN ANATOMY & PHYSIOLOGY DIAGRAMS =====

    renderHeartAnatomyDiagram(x, y, width, height, options = {}) {
        const {
            showLabels = true,
            showBloodFlow = true,
            animate = false,
            chamber = 'wholeheart',
            view = 'internal',
            showInset = false,
            insetType = 'cardiac-cycle'
        } = options;

        this.ctx.save();
        this.ctx.translate(x, y);

        // Title
        if(showLabels) {
            this.ctx.font = 'bold 24px Arial';
            this.ctx.fillStyle = '#2C3E50';
            this.ctx.textAlign = 'center';
            this.ctx.fillText('Human Heart Anatomy', width / 2, 20);
        }

        const heartCenterX = width / 2;
        const heartCenterY = height / 2;

        // Draw heart based on chamber selection
        if(chamber === 'wholeheart') {
            AnatomicalShapes.drawHeart(this.ctx, heartCenterX - width * 0.25, heartCenterY - height * 0.3, 
                width * 0.5, height * 0.6, 'wholeheart');
            
            if(showLabels) {
                this.addLabel('Superior\nVena Cava', width * 0.75, height * 0.25, '#8B4789', 'left');
                this.addLabel('Aorta', width * 0.35, height * 0.2, '#E74C3C', 'right');
                this.addLabel('Pulmonary\nArtery', width * 0.55, height * 0.22, '#8B4789', 'center');
                this.addLabel('Pulmonary\nVeins', width * 0.25, height * 0.28, '#E74C3C', 'right');
                this.addLabel('Right Atrium', width * 0.65, height * 0.4, '#A569A0');
                this.addLabel('Right Ventricle', width * 0.65, height * 0.6, '#8B4789');
                this.addLabel('Left Atrium', width * 0.35, height * 0.4, '#FF6B6B');
                this.addLabel('Left Ventricle', width * 0.35, height * 0.6, '#E74C3C');
                this.addLabel('Septum', width * 0.5, height * 0.55, '#5D4E60');
                this.addLabel('Inferior\nVena Cava', width * 0.7, height * 0.75, '#8B4789', 'left');
            }

            // Blood flow arrows
            if(showBloodFlow) {
                // Deoxygenated blood from body to right atrium
                this.drawArrow(width * 0.78, height * 0.3, width * 0.7, height * 0.38, '#8B4789', 'From Body');
                
                // To lungs from right ventricle
                this.drawArrow(width * 0.6, height * 0.52, width * 0.65, height * 0.28, '#8B4789', 'To Lungs');
                
                // Oxygenated blood from lungs to left atrium
                this.drawArrow(width * 0.22, height * 0.32, width * 0.32, height * 0.38, '#E74C3C', 'From Lungs');
                
                // To body from left ventricle
                this.drawArrow(width * 0.38, height * 0.52, width * 0.32, height * 0.25, '#E74C3C', 'To Body');
            }
        } else {
            // Individual chamber view
            const state = chamber.includes('Atrium') ? 'neutral' : 
                         chamber.includes('right') ? 'deoxygenated' : 'oxygenated';
            AnatomicalShapes.drawHeart(this.ctx, heartCenterX - width * 0.35, heartCenterY - height * 0.35, 
                width * 0.7, height * 0.7, chamber, state);
            
            if(showLabels) {
                const chamberNames = {
                    'rightAtrium': 'Right Atrium',
                    'rightVentricle': 'Right Ventricle',
                    'leftAtrium': 'Left Atrium',
                    'leftVentricle': 'Left Ventricle',
                    'septum': 'Interventricular Septum'
                };
                this.addLabel(chamberNames[chamber], width / 2, height * 0.12, '#2C3E50');
                
                // Chamber-specific labels
                if(chamber === 'rightAtrium') {
                    this.addLabel('Tricuspid Valve', width * 0.5, height * 0.7, '#FFD700');
                    this.addLabel('SVC Opening', width * 0.3, height * 0.3, '#8B4789', 'right');
                    this.addLabel('IVC Opening', width * 0.3, height * 0.6, '#8B4789', 'right');
                } else if(chamber === 'rightVentricle') {
                    this.addLabel('Tricuspid Valve', width * 0.5, height * 0.3, '#FFD700');
                    this.addLabel('Pulmonary Valve', width * 0.5, height * 0.25, '#20B2AA');
                    this.addLabel('Papillary Muscles', width * 0.35, height * 0.6, '#8B0000', 'right');
                    this.addLabel('Chordae Tendineae', width * 0.45, height * 0.5, '#CD853F');
                } else if(chamber === 'leftAtrium') {
                    this.addLabel('Mitral Valve', width * 0.5, height * 0.7, '#FFD700');
                    this.addLabel('Pulmonary Vein\nOpenings', width * 0.3, height * 0.4, '#E74C3C', 'right');
                } else if(chamber === 'leftVentricle') {
                    this.addLabel('Mitral Valve', width * 0.5, height * 0.3, '#FFD700');
                    this.addLabel('Aortic Valve', width * 0.5, height * 0.25, '#20B2AA');
                    this.addLabel('Papillary Muscles', width * 0.35, height * 0.6, '#8B0000', 'right');
                    this.addLabel('Thick Myocardium', width * 0.75, height * 0.5, '#C0392B', 'left');
                }
            }
        }

        // Animation for heartbeat
        if(animate) {
            const scale = 1 + Math.sin(this.currentFrame * 0.1) * 0.05;
            this.ctx.scale(scale, scale);
        }

        // Legend
        if(showBloodFlow && chamber === 'wholeheart') {
            this.drawLegend(width * 0.02, height * 0.85, [
                { color: '#E74C3C', label: 'Oxygenated Blood' },
                { color: '#8B4789', label: 'Deoxygenated Blood' }
            ]);
        }

        if(showInset) {
            this.drawInset(width * 0.6, height * 0.02, width * 0.38, height * 0.25, insetType);
        }

        this.ctx.restore();
    }

    renderRespiratorySystemDiagram(x, y, width, height, options = {}) {
        const { 
            showLabels = true, 
            component = 'complete',
            process = 'structure',
            showGasExchange = true,
            showInset = false,
            insetType = 'gas-exchange'
        } = options;

        this.ctx.save();
        this.ctx.translate(x - width/2, y - height/2);

        if(component === 'complete') {
            // Nasal cavity
            AnatomicalShapes.drawNasalCavity(this.ctx, width * 0.45, height * 0.05, width * 0.1, height * 0.05);
            
            // Pharynx and larynx
            this.ctx.fillStyle = '#FFB6D9';
            this.ctx.fillRect(width * 0.47, height * 0.1, width * 0.06, height * 0.08);
            
            // Trachea
            const tracheaWidth = width * 0.08;
            const tracheaHeight = height * 0.25;
            this.ctx.fillStyle = '#FFB6D9';
            this.ctx.strokeStyle = '#FF8FB6';
            this.ctx.lineWidth = 2;
            this.ctx.beginPath();
            this.ctx.roundRect(width * 0.46, height * 0.18, tracheaWidth, tracheaHeight, 5);
            this.ctx.fill();
            this.ctx.stroke();

            // Tracheal rings
            for(let i = 0; i < 8; i++) {
                this.ctx.strokeStyle = '#FF8FB6';
                this.ctx.lineWidth = 2;
                this.ctx.beginPath();
                const ringY = height * (0.2 + i * 0.03);
                this.ctx.arc(width * 0.5, ringY, tracheaWidth * 0.5, Math.PI, 0);
                this.ctx.stroke();
            }

            // Bronchi
            this.ctx.strokeStyle = '#FFB6D9';
            this.ctx.lineWidth = 6;
            // Left bronchus
            this.ctx.beginPath();
            this.ctx.moveTo(width * 0.48, height * 0.43);
            this.ctx.quadraticCurveTo(width * 0.35, height * 0.48, width * 0.25, height * 0.55);
            this.ctx.stroke();
            // Right bronchus
            this.ctx.beginPath();
            this.ctx.moveTo(width * 0.52, height * 0.43);
            this.ctx.quadraticCurveTo(width * 0.65, height * 0.48, width * 0.75, height * 0.55);
            this.ctx.stroke();

            // Lungs
            const lungWidth = width * 0.3;
            const lungHeight = height * 0.45;
            AnatomicalShapes.drawLung(this.ctx, width * 0.05, height * 0.5, lungWidth, lungHeight, 'left');
            AnatomicalShapes.drawLung(this.ctx, width * 0.65, height * 0.5, lungWidth, lungHeight, 'right');

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
                this.addLabel('Nasal Cavity', width * 0.5, height * 0.02, '#2C3E50');
                this.addLabel('Pharynx', width * 0.6, height * 0.14, '#2C3E50', 'left');
                this.addLabel('Larynx\n(Voice Box)', width * 0.35, height * 0.16, '#2C3E50', 'right');
                this.addLabel('Trachea\n(Windpipe)', width * 0.35, height * 0.3, '#2C3E50', 'right');
                this.addLabel('Bronchi', width * 0.5, height * 0.48, '#2C3E50');
                this.addLabel('Left Lung\n(2 lobes)', width * 0.12, height * 0.48, '#2C3E50', 'left');
                this.addLabel('Right Lung\n(3 lobes)', width * 0.88, height * 0.48, '#2C3E50', 'right');
                this.addLabel('Diaphragm', width * 0.5, height * 0.98, '#DC143C');
            }

            if(process === 'inhalation') {
                this.drawArrow(width * 0.5, height * 0.02, width * 0.5, height * 0.12, '#3498DB', 'Air In');
                this.addLabel('Diaphragm\nContracts', width * 0.7, height * 0.95, '#E74C3C');
            } else if(process === 'exhalation') {
                this.drawArrow(width * 0.5, height * 0.12, width * 0.5, height * 0.02, '#E74C3C', 'Air Out');
                this.addLabel('Diaphragm\nRelaxes', width * 0.7, height * 0.95, '#3498DB');
            }

        } else {
            // Individual component view
            const componentMap = {
                'trachea': { draw: 'drawTrachea', label: 'Trachea (Windpipe)' },
                'bronchi': { draw: 'drawBronchi', label: 'Bronchi' },
                'bronchioles': { draw: 'drawBronchioles', label: 'Bronchioles' },
                'leftLung': { draw: 'drawLung', params: ['left'], label: 'Left Lung' },
                'rightLung': { draw: 'drawLung', params: ['right'], label: 'Right Lung' },
                'alveoli': { draw: 'drawAlveoli', label: 'Alveoli' },
                'diaphragm': { draw: 'drawDiaphragm', label: 'Diaphragm' }
            };

            if(componentMap[component]) {
                const comp = componentMap[component];
                if(comp.draw === 'drawLung') {
                    AnatomicalShapes.drawLung(this.ctx, width * 0.2, height * 0.15, 
                        width * 0.6, height * 0.7, comp.params[0]);
                }
                
                if(showLabels) {
                    this.addLabel(comp.label, width * 0.5, height * 0.08, '#2C3E50');
                }
            }
        }

        // Gas exchange inset
        if(showGasExchange && component === 'complete') {
            this.drawGasExchangeInset(width * 0.65, height * 0.05, width * 0.3, height * 0.25);
        }

        if(showInset && !showGasExchange) {
            this.drawInset(width * 0.65, height * 0.05, width * 0.3, height * 0.25, insetType);
        }

        this.ctx.restore();
    }

    renderCompleteDigestiveSystemDiagram(x, y, width, height, options = {}) {
        const { 
            showLabels = true, 
            component = 'complete',
            process = 'anatomy',
            showPath = true,
            showInset = false,
            insetType = 'villi-structure'
        } = options;

        this.ctx.save();
        this.ctx.translate(x - width/2, y - height/2);

        AnatomicalShapes.drawDigestiveSystem(this.ctx, 0, 0, width, height, showPath);

        if(showLabels) {
            this.addLabel('Mouth\n(Oral Cavity)', width * 0.5, height * 0.03, '#8B4513');
            this.addLabel('Salivary\nGlands', width * 0.7, height * 0.05, '#DDA0DD', 'left');
            this.addLabel('Esophagus', width * 0.65, height * 0.12, '#A0522D', 'left');
            this.addLabel('Liver', width * 0.78, height * 0.18, '#654321', 'left');
            this.addLabel('Gallbladder', width * 0.75, height * 0.22, '#9ACD32', 'left');
            this.addLabel('Stomach', width * 0.2, height * 0.25, '#FFA07A', 'right');
            this.addLabel('Pancreas', width * 0.7, height * 0.28, '#FFDAB9', 'left');
            this.addLabel('Small Intestine\n(Duodenum,\nJejunum, Ileum)', width * 0.88, height * 0.55, '#FFB6C1', 'left');
            this.addLabel('Large Intestine\n(Colon)', width * 0.05, height * 0.6, '#E6A8B8', 'left');
            this.addLabel('Appendix', width * 0.65, height * 0.72, '#CD5C5C', 'left');
            this.addLabel('Rectum', width * 0.5, height * 0.96, '#B8860B');
            this.addLabel('Anus', width * 0.5, height * 0.99, '#8B4513');
        }

        if(process !== 'anatomy') {
            const processLabels = {
                'mechanical-digestion': [
                    { text: 'Chewing', x: 0.5, y: 0.05, color: '#E74C3C' },
                    { text: 'Churning', x: 0.2, y: 0.28, color: '#E74C3C' },
                    { text: 'Segmentation', x: 0.85, y: 0.55, color: '#E74C3C' }
                ],
                'chemical-digestion': [
                    { text: 'Saliva', x: 0.7, y: 0.08, color: '#3498DB' },
                    { text: 'Gastric Juice', x: 0.15, y: 0.28, color: '#3498DB' },
                    { text: 'Bile', x: 0.72, y: 0.22, color: '#3498DB' },
                    { text: 'Enzymes', x: 0.68, y: 0.3, color: '#3498DB' }
                ],
                'absorption': [
                    { text: 'Nutrients →', x: 0.85, y: 0.6, color: '#2ECC71' }
                ]
            };

            if(processLabels[process]) {
                processLabels[process].forEach(label => {
                    this.addLabel(label.text, width * label.x, height * label.y, label.color);
                });
            }
        }

        if(showInset) {
            this.drawInset(width * 0.02, height * 0.72, width * 0.35, height * 0.26, insetType);
        }

        this.ctx.restore();
    }

    renderCirculatorySystemDiagram(x, y, width, height, options = {}) {
        const { 
            showLabels = true, 
            showOxygenation = true,
            component = 'complete',
            showInset = false,
            insetType = 'blood-pressure'
        } = options;

        this.ctx.save();
        this.ctx.translate(x - width/2, y - height/2);

        // Body outline
        this.ctx.strokeStyle = '#BDC3C7';
        this.ctx.lineWidth = 2;
        this.ctx.setLineDash([5, 5]);
        this.ctx.beginPath();
        this.ctx.ellipse(width * 0.5, height * 0.5, width * 0.25, height * 0.45, 0, 0, Math.PI * 2);
        this.ctx.stroke();
        this.ctx.setLineDash([]);

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

        // Body tissues representation
        this.ctx.strokeStyle = '#95A5A6';
        this.ctx.lineWidth = 3;
        this.ctx.fillStyle = '#ECF0F1';
        this.ctx.beginPath();
        this.ctx.roundRect(width * 0.35, height * 0.65, width * 0.3, height * 0.3, 10);
        this.ctx.fill();
        this.ctx.stroke();

        // Blood vessels - Pulmonary circulation
        // Right ventricle to lungs (deoxygenated)
        this.drawCurvedArrow(
            heartX + heartWidth * 0.7, heartY + heartHeight * 0.5,
            width * 0.25, height * 0.25,
            '#8B4789', 'Pulmonary\nArtery'
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
            '#E74C3C', 'Pulmonary\nVein'
        );
        this.drawCurvedArrow(
            width * 0.7, height * 0.32,
            heartX + heartWidth * 0.3, heartY + heartHeight * 0.3,
            '#E74C3C', ''
        );

        // Systemic circulation
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
            this.addLabel('Body\nTissues', width * 0.5, height * 0.8, '#2C3E50');
            
            this.ctx.font = '11px Arial';
            this.ctx.fillStyle = '#7F8C8D';
            this.ctx.textAlign = 'center';
            this.ctx.fillText('Gas Exchange', width * 0.45, height * 0.18);
            this.ctx.fillText('Nutrient & Waste Exchange', width * 0.5, height * 0.6);
        }

        // Legend
        if(showOxygenation) {
            this.drawLegend(width * 0.02, height * 0.85, [
                { color: '#E74C3C', label: 'Oxygenated Blood' },
                { color: '#8B4789', label: 'Deoxygenated Blood' }
            ]);
        }

        if(showInset) {
            this.drawInset(width * 0.6, height * 0.02, width * 0.38, height * 0.25, insetType);
        }

        this.ctx.restore();
    }

    renderCompleteNervousSystemDiagram(x, y, width, height, options = {}) {
        const { 
            showLabels = true, 
            component = 'complete',
            division = 'both',
            showSignal = false,
            showInset = false,
            insetType = 'neuron-structure'
        } = options;

        this.ctx.save();
        this.ctx.translate(x - width/2, y - height/2);

        AnatomicalShapes.drawNervousSystem(this.ctx, 0, 0, width, height, showSignal);

        if(showLabels) {
            this.addLabel('Brain', width * 0.7, height * 0.08, '#C0392B');
            this.addLabel('Cerebrum', width * 0.75, height * 0.12, '#E74C3C', 'left');
            this.addLabel('Cerebellum', width * 0.75, height * 0.18, '#C44569', 'left');
            this.addLabel('Brain Stem', width * 0.75, height * 0.22, '#A93226', 'left');
            
            this.addLabel('Spinal Cord', width * 0.7, height * 0.35, '#E67E22');
            this.addLabel('Cervical', width * 0.75, height * 0.28, '#F39C12', 'left');
            this.addLabel('Thoracic', width * 0.75, height * 0.4, '#F39C12', 'left');
            this.addLabel('Lumbar', width * 0.75, height * 0.52, '#F39C12', 'left');
            this.addLabel('Sacral', width * 0.75, height * 0.6, '#F39C12', 'left');
            
            this.addLabel('Peripheral\nNerves', width * 0.1, height * 0.4, '#F7DC6F', 'left');
            this.addLabel('Motor\nNeurons', width * 0.9, height * 0.65, '#FFD700', 'left');
            
            if(division === 'both' || division === 'central') {
                this.ctx.font = 'bold 14px Arial';
                this.ctx.fillStyle = '#2C3E50';
                this.ctx.textAlign = 'right';
                this.ctx.fillText('Central Nervous System (CNS)', width * 0.95, height * 0.25);
            }
            
            if(division === 'both' || division === 'peripheral') {
                this.ctx.font = 'bold 14px Arial';
                this.ctx.fillStyle = '#2C3E50';
                this.ctx.textAlign = 'left';
                this.ctx.fillText('Peripheral Nervous System (PNS)', width * 0.05, height * 0.55);
            }
        }

        if(showInset) {
            this.drawInset(width * 0.02, height * 0.02, width * 0.35, height * 0.22, insetType);
        }

        this.ctx.restore();
    }

    renderNeuronDiagram(x, y, width, height, options = {}) {
        const { 
            showLabels = true, 
            component = 'complete',
            state = 'resting',
            showSignal = false,
            showInset = false,
            insetType = 'action-potential'
        } = options;

        this.ctx.save();
        this.ctx.translate(x - width/2, y - height/2);

        // Draw neuron
        AnatomicalShapes.drawNeuron(this.ctx, 0, 0, width, height, state);

        if(showLabels) {
            // Dendrites
            this.ctx.strokeStyle = '#2C3E50';
            this.ctx.lineWidth = 1;
            this.ctx.beginPath();
            this.ctx.moveTo(width * 0.25, height * 0.3);
            this.ctx.lineTo(width * 0.1, height * 0.25);
            this.ctx.stroke();
            this.addLabel('Dendrites\n(receive signals)', width * 0.02, height * 0.23, '#2C3E50', 'left');

            // Cell body
            this.ctx.beginPath();
            this.ctx.moveTo(width * 0.65, height * 0.5);
            this.ctx.lineTo(width * 0.8, height * 0.5);
            this.ctx.stroke();
            this.addLabel('Cell Body\n(Soma)', width * 0.82, height * 0.48, '#2C3E50', 'left');

            // Nucleus
            this.ctx.beginPath();
            this.ctx.moveTo(width * 0.55, height * 0.5);
            this.ctx.lineTo(width * 0.7, height * 0.6);
            this.ctx.stroke();
            this.addLabel('Nucleus', width * 0.72, height * 0.58, '#4B0082', 'left');

            // Axon hillock
            this.ctx.beginPath();
            this.ctx.moveTo(width * 0.5, height * 0.62);
            this.ctx.lineTo(width * 0.35, height * 0.68);
            this.ctx.stroke();
            this.addLabel('Axon Hillock', width * 0.33, height * 0.66, '#2C3E50', 'right');

            // Axon
            this.ctx.beginPath();
            this.ctx.moveTo(width * 0.65, height * 0.8);
            this.ctx.lineTo(width * 0.8, height * 0.8);
            this.ctx.stroke();
            this.addLabel('Axon\n(transmits signals)', width * 0.82, height * 0.78, '#2C3E50', 'left');

            // Myelin sheath
            this.ctx.beginPath();
            this.ctx.moveTo(width * 0.55, height * 0.68);
            this.ctx.lineTo(width * 0.7, height * 0.65);
            this.ctx.stroke();
            this.addLabel('Myelin Sheath\n(insulation)', width * 0.72, height * 0.63, '#F5DEB3', 'left');

            // Node of Ranvier
            this.ctx.beginPath();
            this.ctx.moveTo(width * 0.52, height * 0.75);
            this.ctx.lineTo(width * 0.65, height * 0.7);
            this.ctx.stroke();
            this.addLabel('Node of\nRanvier', width * 0.67, height * 0.68, '#FF6B6B', 'left');

            // Schwann cell
            this.ctx.beginPath();
            this.ctx.moveTo(width * 0.48, height * 0.72);
            this.ctx.lineTo(width * 0.33, height * 0.75);
            this.ctx.stroke();
            this.addLabel('Schwann Cell', width * 0.31, height * 0.73, '#DEB887', 'right');

            // Axon terminals
            this.ctx.beginPath();
            this.ctx.moveTo(width * 0.45, height * 0.98);
            this.ctx.lineTo(width * 0.3, height * 0.95);
            this.ctx.stroke();
            this.addLabel('Axon Terminals\n(Synaptic Buttons)', width * 0.02, height * 0.93, '#9370DB', 'left');

            // Direction indicator
            this.drawArrow(width * 0.5, height * 0.35, width * 0.5, height * 0.92, '#E74C3C', 'Signal Direction');
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

        if(showInset) {
            this.drawInset(width * 0.02, height * 0.02, width * 0.35, height * 0.25, insetType);
        }

        this.ctx.restore();
    }

    renderSkeletalSystemDiagram(x, y, width, height, options = {}) {
        const { 
            showLabels = true, 
            region = 'complete',
            view = 'anterior',
            showInset = false,
            insetType = 'bone-structure'
        } = options;

        this.ctx.save();
        this.ctx.translate(x - width/2, y - height/2);

        AnatomicalShapes.drawSkeletalSystem(this.ctx, width * 0.2, height * 0.05, 
            width * 0.6, height * 0.9, region, view);

        if(showLabels && region === 'complete') {
            // Skull
            this.addLabel('Skull\n(Cranium)', width * 0.5, height * 0.08, '#F5DEB3');
            
            // Vertebral column
            this.addLabel('Cervical\nVertebrae (7)', width * 0.7, height * 0.15, '#DEB887', 'left');
            this.addLabel('Thoracic\nVertebrae (12)', width * 0.7, height * 0.3, '#DEB887', 'left');
            this.addLabel('Lumbar\nVertebrae (5)', width * 0.7, height * 0.45, '#DEB887', 'left');
            this.addLabel('Sacrum', width * 0.7, height * 0.55, '#CD853F', 'left');
            this.addLabel('Coccyx', width * 0.7, height * 0.6, '#CD853F', 'left');
            
            // Upper body
            this.addLabel('Clavicle\n(Collarbone)', width * 0.35, height * 0.18, '#F5DEB3', 'right');
            this.addLabel('Scapula\n(Shoulder Blade)', width * 0.2, height * 0.22, '#DEB887', 'right');
            this.addLabel('Sternum\n(Breastbone)', width * 0.5, height * 0.25, '#F5DEB3');
            this.addLabel('Ribs (12 pairs)', width * 0.35, height * 0.3, '#DEB887', 'right');
            this.addLabel('Humerus', width * 0.25, height * 0.35, '#F5DEB3', 'right');
            this.addLabel('Radius', width * 0.2, height * 0.48, '#DEB887', 'right');
            this.addLabel('Ulna', width * 0.28, height * 0.48, '#DEB887', 'left');
            this.addLabel('Carpals\n(Wrist)', width * 0.15, height * 0.55, '#CD853F', 'right');
            this.addLabel('Metacarpals\n(Hand)', width * 0.12, height * 0.6, '#D2B48C', 'right');
            this.addLabel('Phalanges\n(Fingers)', width * 0.1, height * 0.68, '#DEB887', 'right');
            
            // Pelvis and lower body
            this.addLabel('Pelvis\n(Hip Bone)', width * 0.5, height * 0.5, '#F5DEB3');
            this.addLabel('Femur\n(Thigh Bone)', width * 0.4, height * 0.7, '#F5DEB3', 'right');
            this.addLabel('Patella\n(Kneecap)', width * 0.42, height * 0.72, '#CD853F', 'right');
            this.addLabel('Tibia\n(Shin)', width * 0.45, height * 0.82, '#DEB887', 'right');
            this.addLabel('Fibula', width * 0.38, height * 0.82, '#D2B48C', 'right');
            this.addLabel('Tarsals\n(Ankle)', width * 0.45, height * 0.9, '#CD853F', 'right');
            this.addLabel('Metatarsals\n(Foot)', width * 0.45, height * 0.94, '#DEB887', 'right');
            this.addLabel('Phalanges\n(Toes)', width * 0.45, height * 0.98, '#D2B48C', 'right');
            
            // Bone count
            this.ctx.font = '12px Arial';
            this.ctx.fillStyle = '#7F8C8D';
            this.ctx.textAlign = 'center';
            this.ctx.fillText('Adult: 206 bones', width * 0.5, height * 0.03);
        }

        if(showInset) {
            this.drawInset(width * 0.02, height * 0.02, width * 0.35, height * 0.25, insetType);
        }

        this.ctx.restore();
    }

    renderMuscularSystemDiagram(x, y, width, height, options = {}) {
        const { 
            showLabels = true, 
            type = 'skeletal',
            region = 'complete',
            view = 'anterior',
            showInset = false,
            insetType = 'sarcomere'
        } = options;

        this.ctx.save();
        this.ctx.translate(x - width/2, y - height/2);

        AnatomicalShapes.drawMuscularSystem(this.ctx, width * 0.2, height * 0.05, 
            width * 0.6, height * 0.9, type, region, view);

        if(showLabels && region === 'complete' && type === 'skeletal') {
            // Head and neck
            this.addLabel('Frontalis\n(Forehead)', width * 0.5, height * 0.08, '#DC143C');
            this.addLabel('Orbicularis Oculi\n(Eye)', width * 0.4, height * 0.1, '#C0392B', 'right');
            this.addLabel('Masseter\n(Jaw)', width * 0.4, height * 0.13, '#A93226', 'right');
            this.addLabel('Sternocleidomastoid\n(Neck)', width * 0.45, height * 0.17, '#8B0000', 'right');
            
            // Chest and shoulders
            this.addLabel('Deltoid\n(Shoulder)', width * 0.25, height * 0.2, '#DC143C', 'right');
            this.addLabel('Pectoralis Major\n(Chest)', width * 0.5, height * 0.25, '#C0392B');
            this.addLabel('Serratus Anterior', width * 0.4, height * 0.3, '#A93226', 'right');
            
            // Arms
            this.addLabel('Biceps Brachii\n(Upper Arm)', width * 0.25, height * 0.32, '#DC143C', 'right');
            this.addLabel('Triceps Brachii\n(Back of Arm)', width * 0.75, height * 0.32, '#C0392B', 'left');
            this.addLabel('Brachioradialis\n(Forearm)', width * 0.2, height * 0.45, '#A93226', 'right');
            this.addLabel('Flexor Carpi\n(Wrist)', width * 0.15, height * 0.52, '#8B0000', 'right');
            
            // Abdomen
            this.addLabel('Rectus Abdominis\n(Six-pack)', width * 0.5, height * 0.38, '#DC143C');
            this.addLabel('External Oblique\n(Side)', width * 0.4, height * 0.42, '#C0392B', 'right');
            this.addLabel('Internal Oblique', width * 0.6, height * 0.44, '#A93226', 'left');
            
            // Legs
            this.addLabel('Iliopsoas\n(Hip Flexor)', width * 0.5, height * 0.52, '#8B0000');
            this.addLabel('Quadriceps\n(Thigh)', width * 0.45, height * 0.65, '#DC143C', 'right');
            this.addLabel('Hamstrings\n(Back Thigh)', width * 0.75, height * 0.68, '#C0392B', 'left');
            this.addLabel('Tibialis Anterior\n(Shin)', width * 0.45, height * 0.82, '#A93226', 'right');
            this.addLabel('Gastrocnemius\n(Calf)', width * 0.75, height * 0.85, '#DC143C', 'left');
            this.addLabel('Soleus\n(Deep Calf)', width * 0.75, height * 0.9, '#8B0000', 'left');
            
            // Function note
            this.ctx.font = '12px Arial';
            this.ctx.fillStyle = '#7F8C8D';
            this.ctx.textAlign = 'center';
            this.ctx.fillText('Over 600 skeletal muscles', width * 0.5, height * 0.03);
        }

        if(showInset) {
            this.drawInset(width * 0.65, height * 0.02, width * 0.33, height * 0.25, insetType);
        }

        this.ctx.restore();
    }

    renderUrinarySystemDiagram(x, y, width, height, options = {}) {
        const { 
            showLabels = true, 
            component = 'complete',
            process = 'anatomy',
            showInset = false,
            insetType = 'nephron-detail'
        } = options;

        this.ctx.save();
        this.ctx.translate(x - width/2, y - height/2);

        // Kidneys
        const kidneyWidth = width * 0.2;
        const kidneyHeight = height * 0.35;
        AnatomicalShapes.drawKidney(this.ctx, width * 0.15, height * 0.15, kidneyWidth, kidneyHeight, 'left');
        AnatomicalShapes.drawKidney(this.ctx, width * 0.65, height * 0.15, kidneyWidth, kidneyHeight, 'right');

        // Adrenal glands (on top of kidneys)
        this.ctx.fillStyle = '#FFD700';
        this.ctx.beginPath();
        this.ctx.ellipse(width * 0.25, height * 0.13, width * 0.04, height * 0.03, 0, 0, Math.PI * 2);
        this.ctx.fill();
        this.ctx.beginPath();
        this.ctx.ellipse(width * 0.75, height * 0.13, width * 0.04, height * 0.03, 0, 0, Math.PI * 2);
        this.ctx.fill();

        // Renal arteries and veins
        this.ctx.strokeStyle = '#E74C3C';
        this.ctx.lineWidth = 4;
        this.ctx.beginPath();
        this.ctx.moveTo(width * 0.32, height * 0.3);
        this.ctx.lineTo(width * 0.5, height * 0.3);
        this.ctx.stroke();
        this.ctx.beginPath();
        this.ctx.moveTo(width * 0.68, height * 0.3);
        this.ctx.lineTo(width * 0.5, height * 0.3);
        this.ctx.stroke();

        this.ctx.strokeStyle = '#8B4789';
        this.ctx.beginPath();
        this.ctx.moveTo(width * 0.32, height * 0.35);
        this.ctx.lineTo(width * 0.5, height * 0.35);
        this.ctx.stroke();
        this.ctx.beginPath();
        this.ctx.moveTo(width * 0.68, height * 0.35);
        this.ctx.lineTo(width * 0.5, height * 0.35);
        this.ctx.stroke();

        // Ureters
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

        // Bladder
        const bladderWidth = width * 0.25;
        const bladderHeight = height * 0.3;
        AnatomicalShapes.drawBladder(this.ctx, width * 0.375, height * 0.6, bladderWidth, bladderHeight, 0.6);

        // Urethra
        this.ctx.strokeStyle = '#FFD700';
        this.ctx.lineWidth = 4;
        this.ctx.beginPath();
        this.ctx.moveTo(width * 0.5, height * 0.9);
        this.ctx.lineTo(width * 0.5, height * 0.98);
        this.ctx.stroke();

        if(showLabels) {
            this.addLabel('Adrenal Glands', width * 0.25, height * 0.1, '#FFD700');
            this.addLabel('Left Kidney', width * 0.05, height * 0.32, '#8B0000', 'left');
            this.addLabel('Right Kidney', width * 0.95, height * 0.32, '#8B0000', 'right');
            this.addLabel('Renal Artery', width * 0.4, height * 0.28, '#E74C3C', 'center');
            this.addLabel('Renal Vein', width * 0.4, height * 0.33, '#8B4789', 'center');
            this.addLabel('Ureters', width * 0.38, height * 0.55, '#FFD700');
            this.addLabel('Urinary\nBladder', width * 0.5, height * 0.75, '#FFD700');
            this.addLabel('Urethra', width * 0.55, height * 0.94, '#FFD700');
            
            // Function annotations
            if(process !== 'anatomy') {
                this.ctx.font = '11px Arial';
                this.ctx.fillStyle = '#7F8C8D';
                this.ctx.textAlign = 'center';
                
                if(process === 'filtration') {
                    this.ctx.fillText('Filters blood', width * 0.25, height * 0.25);
                    this.ctx.fillText('Removes waste', width * 0.75, height * 0.25);
                } else if(process === 'concentration') {
                    this.ctx.fillText('Concentrates urine', width * 0.5, height * 0.72);
                } else if(process === 'secretion') {
                    this.ctx.fillText('Stores urine', width * 0.5, height * 0.78);
                    this.ctx.fillText('until elimination', width * 0.5, height * 0.81);
                }
            }
            
            this.ctx.font = '12px Arial';
            this.ctx.fillStyle = '#7F8C8D';
            this.ctx.textAlign = 'center';
            this.ctx.fillText('Filters ~180L blood/day', width * 0.5, height * 0.05);
            this.ctx.fillText('Produces ~1.5L urine/day', width * 0.5, height * 0.08);
        }

        if(showInset) {
            this.drawInset(width * 0.02, height * 0.55, width * 0.35, height * 0.43, insetType);
        }

        this.ctx.restore();
    }

    renderEndocrineSystemDiagram(x, y, width, height, options = {}) {
        const { 
            showLabels = true, 
            gland = 'complete',
            hormone = 'overview',
            showInset = false,
            insetType = 'feedback-loop'
        } = options;

        this.ctx.save();
        this.ctx.translate(x - width/2, y - height/2);

        AnatomicalShapes.drawEndocrineSystem(this.ctx, 0, 0, width, height);

        if(showLabels) {
            this.addLabel('Pineal Gland\n(Melatonin)', width * 0.7, height * 0.08, '#BB8FCE', 'left');
            this.addLabel('Hypothalamus\n(Releasing Hormones)', width * 0.7, height * 0.1, '#E59866', 'left');
            this.addLabel('Pituitary Gland\n(Master Gland)', width * 0.7, height * 0.12, '#E67E22', 'left');
            this.addLabel('Thyroid\n(T3, T4, Calcitonin)', width * 0.7, height * 0.18, '#76D7C4', 'left');
            this.addLabel('Parathyroid\n(PTH)', width * 0.25, height * 0.19, '#45B39D', 'right');
            this.addLabel('Thymus\n(Thymosin)', width * 0.7, height * 0.3, '#F7DC6F', 'left');
            this.addLabel('Adrenal Glands\n(Cortisol, Adrenaline)', width * 0.2, height * 0.42, '#F8B195', 'right');
            this.addLabel('Pancreas\n(Insulin, Glucagon)', width * 0.7, height * 0.5, '#DDA0DD', 'left');
            this.addLabel('Ovaries/Testes\n(Sex Hormones)', width * 0.7, height * 0.7, '#AED6F1', 'left');
            
            this.ctx.font = '12px Arial';
            this.ctx.fillStyle = '#7F8C8D';
            this.ctx.textAlign = 'center';
            this.ctx.fillText('Endocrine glands secrete hormones directly into bloodstream', 
                width * 0.5, height * 0.03);
        }

        // Hormone connections
        if(hormone !== 'overview') {
            this.ctx.strokeStyle = '#E74C3C';
            this.ctx.lineWidth = 2;
            this.ctx.setLineDash([3, 3]);
            
            const hormoneConnections = {
                'growth': [[0.5, 0.12], [0.5, 0.9]],
                'metabolism': [[0.5, 0.18], [0.5, 0.5], [0.5, 0.42]],
                'reproduction': [[0.5, 0.12], [0.5, 0.7]],
                'stress': [[0.5, 0.12], [0.35, 0.42]],
                'calcium': [[0.5, 0.18], [0.45, 0.19]]
            };
            
            if(hormoneConnections[hormone]) {
                this.ctx.beginPath();
                hormoneConnections[hormone].forEach((point, index) => {
                    if(index === 0) {
                        this.ctx.moveTo(width * point[0], height * point[1]);
                    } else {
                        this.ctx.lineTo(width * point[0], height * point[1]);
                    }
                });
                this.ctx.stroke();
            }
            
            this.ctx.setLineDash([]);
        }

        if(showInset) {
            this.drawInset(width * 0.02, height * 0.02, width * 0.35, height * 0.25, insetType);
        }

        this.ctx.restore();
    }

    renderReproductiveSystemDiagram(x, y, width, height, options = {}) {
        const { 
            showLabels = true, 
            sex = 'both',
            component = 'complete',
            showInset = false,
            insetType = 'fertilization'
        } = options;

        this.ctx.save();
        this.ctx.translate(x - width/2, y - height/2);

        AnatomicalShapes.drawReproductiveSystem(this.ctx, 0, 0, width, height, sex);

        if(showLabels) {
            if(sex === 'male' || sex === 'both') {
                const xOffset = sex === 'both' ? 0 : width * 0.25;
                this.addLabel('MALE', xOffset + width * 0.275, height * 0.05, '#2C3E50');
                this.addLabel('Testes\n(Sperm Production)', xOffset + width * 0.1, height * 0.78, '#AED6F1', 'left');
                this.addLabel('Epididymis\n(Sperm Maturation)', xOffset + width * 0.35, height * 0.75, '#85C1E2', 'left');
                this.addLabel('Vas Deferens\n(Sperm Duct)', xOffset + width * 0.15, height * 0.5, '#5DADE2', 'left');
                this.addLabel('Seminal Vesicle', xOffset + width * 0.35, height * 0.35, '#3498DB', 'left');
                this.addLabel('Prostate Gland\n(Seminal Fluid)', xOffset + width * 0.35, height * 0.39, '#2874A6', 'left');
                this.addLabel('Urethra', xOffset + width * 0.27, height * 0.55, '#1F618D', 'center');
                this.addLabel('Penis', xOffset + width * 0.27, height * 0.65, '#D7BDE2', 'center');
            }
            
            if(sex === 'female' || sex === 'both') {
                const xOffset = sex === 'both' ? width * 0.5 : width * 0.25;
                this.addLabel('FEMALE', xOffset + width * 0.275, height * 0.05, '#2C3E50');
                this.addLabel('Ovaries\n(Egg Production)', xOffset + width * 0.05, height * 0.4, '#F8B195', 'left');
                this.addLabel('Fallopian Tubes\n(Fertilization Site)', xOffset + width * 0.15, height * 0.3, '#F5B7B1', 'left');
                this.addLabel('Fimbria', xOffset + width * 0.12, height * 0.38, '#E59866', 'left');
                this.addLabel('Uterus\n(Womb)', xOffset + width * 0.35, height * 0.55, '#FAD7A0', 'left');
                this.addLabel('Endometrium\n(Lining)', xOffset + width * 0.28, height * 0.58, '#F39C12', 'center');
                this.addLabel('Cervix', xOffset + width * 0.27, height * 0.68, '#E67E22', 'center');
                this.addLabel('Vagina', xOffset + width * 0.27, height * 0.75, '#F0B27A', 'center');
            }
        }

        if(showInset) {
            const insetX = sex === 'both' ? width * 0.35 : width * 0.55;
            this.drawInset(insetX, height * 0.02, width * 0.3, height * 0.22, insetType);
        }

        this.ctx.restore();
    }

    renderImmuneSystemDiagram(x, y, width, height, options = {}) {
        const { 
            showLabels = true, 
            component = 'complete',
            response = 'overview',
            showInset = false,
            insetType = 'antibody-production'
        } = options;

        this.ctx.save();
        this.ctx.translate(x - width/2, y - height/2);

        AnatomicalShapes.drawImmuneSystem(this.ctx, 0, 0, width, height);

        if(showLabels) {
            this.addLabel('Thymus\n(T-cell Maturation)', width * 0.7, height * 0.25, '#F39C12', 'left');
            this.addLabel('Spleen\n(Filters Blood)', width * 0.15, height * 0.45, '#8B4513', 'right');
            this.addLabel('Lymph Nodes\n(Immune Response)', width * 0.15, height * 0.35, '#3498DB', 'right');
            this.addLabel('Bone Marrow\n(Cell Production)', width * 0.05, height * 0.62, '#9B59B6', 'left');
            this.addLabel('Lymphatic Vessels\n(Transport)', width * 0.9, height * 0.7, '#85C1E2', 'left');
            this.addLabel('Tonsils', width * 0.7, height * 0.12, '#E8DAEF', 'left');
            this.addLabel('Appendix', width * 0.7, height * 0.6, '#D7BDE2', 'left');
            this.addLabel('Peyer\'s Patches\n(Intestinal)', width * 0.7, height * 0.55, '#C39BD3', 'left');
            
            this.ctx.font = '12px Arial';
            this.ctx.fillStyle = '#7F8C8D';
            this.ctx.textAlign = 'center';
            this.ctx.fillText('Lymphatic system: network of vessels, tissues, and organs', 
                width * 0.5, height * 0.03);
        }

        if(response !== 'overview') {
            // Show immune response pathway
            this.ctx.strokeStyle = '#E74C3C';
            this.ctx.lineWidth = 3;
            this.ctx.setLineDash([5, 5]);
            
            if(response === 'innate') {
                // Quick response pathway
                this.drawArrow(width * 0.2, height * 0.3, width * 0.35, height * 0.45, '#E74C3C', 'Innate');
            } else if(response === 'adaptive') {
                // Lymph node to bone marrow pathway
                this.drawArrow(width * 0.3, height * 0.35, width * 0.25, height * 0.6, '#3498DB', 'Adaptive');
            }
            
            this.ctx.setLineDash([]);
        }

        if(showInset) {
            this.drawInset(width * 0.02, height * 0.72, width * 0.35, height * 0.26, insetType);
        }

        this.ctx.restore();
    }

    renderSkinDiagram(x, y, width, height, options = {}) {
        const { 
            showLabels = true, 
            layer = 'complete',
            structure = 'overview',
            showInset = false,
            insetType = 'melanocyte-function'
        } = options;

        this.ctx.save();
        this.ctx.translate(x - width/2, y - height/2);

        AnatomicalShapes.drawSkin(this.ctx, 0, 0, width, height, 'cross-section');

        if(showLabels) {
            // Epidermis layers
            this.addLabel('EPIDERMIS', width * 0.88, height * 0.12, '#2C3E50', 'left');
            this.addLabel('Stratum Corneum\n(Dead Cells)', width * 0.88, height * 0.05, '#F5D0C5', 'left');
            this.addLabel('Stratum Lucidum', width * 0.88, height * 0.08, '#F0C4B9', 'left');
            this.addLabel('Stratum Granulosum', width * 0.88, height * 0.1, '#EBB8AD', 'left');
            this.addLabel('Stratum Spinosum', width * 0.88, height * 0.12, '#E6ACA1', 'left');
            this.addLabel('Stratum Basale\n(Basal Layer)', width * 0.88, height * 0.15, '#E1A095', 'left');
            
            // Dermis
            this.addLabel('DERMIS', width * 0.88, height * 0.45, '#2C3E50', 'left');
            this.addLabel('Papillary Layer', width * 0.88, height * 0.25, '#E8B4A8', 'left');
            this.addLabel('Reticular Layer', width * 0.88, height * 0.55, '#DDA89C', 'left');
            
            // Hypodermis
            this.addLabel('HYPODERMIS', width * 0.88, height * 0.85, '#2C3E50', 'left');
            this.addLabel('(Subcutaneous Fat)', width * 0.88, height * 0.88, '#FFE4B5', 'left');
            
            // Structures
            this.addLabel('Hair Shaft', width * 0.32, height * 0.02, '#8B4513', 'center');
            this.addLabel('Hair Follicle', width * 0.1, height * 0.35, '#8B4513', 'left');
            this.addLabel('Arrector Pili\nMuscle', width * 0.25, height * 0.28, '#DC143C', 'right');
            this.addLabel('Sebaceous Gland\n(Oil)', width * 0.5, height * 0.18, '#F0E68C', 'left');
            this.addLabel('Sweat Gland', width * 0.82, height * 0.6, '#87CEEB', 'left');
            this.addLabel('Sweat Pore', width * 0.7, height * 0.02, '#4682B4', 'center');
            this.addLabel('Blood Vessels', width * 0.62, height * 0.35, '#E74C3C', 'left');
            this.addLabel('Capillaries', width * 0.55, height * 0.23, '#FF6B6B', 'right');
            this.addLabel('Nerve Endings\n(Sensory)', width * 0.05, height * 0.2, '#FFD700', 'left');
            this.addLabel('Pacinian\nCorpuscle\n(Pressure)', width * 0.15, height * 0.75, '#FFA500', 'left');
            this.addLabel('Meissner\'s\nCorpuscle\n(Touch)', width * 0.15, height * 0.18, '#FF8C00', 'left');
            this.addLabel('Adipose\nTissue\n(Fat Cells)', width * 0.5, height * 0.88, '#FFE4B5', 'center');
        }

        if(showInset) {
            this.drawInset(width * 0.02, height * 0.02, width * 0.35, height * 0.25, insetType);
        }

        this.ctx.restore();
    }

    renderEyeDiagram(x, y, width, height, options = {}) {
        const { 
            showLabels = true, 
            component = 'complete',
            process = 'structure',
            pupilDilation = 0.3,
            showInset = false,
            insetType = 'retinal-layers'
        } = options;

        this.ctx.save();
        this.ctx.translate(x - width/2, y - height/2);

        AnatomicalShapes.drawEye(this.ctx, width * 0.2, height * 0.2, width * 0.6, height * 0.6, pupilDilation);

        if(showLabels) {
            // External structures
            this.addLabel('Sclera\n(White of Eye)', width * 0.88, height * 0.35, '#FFFFFF', 'left');
            this.addLabel('Cornea\n(Clear Front)', width * 0.72, height * 0.25, '#E0F7FA', 'left');
            
            // Anterior chamber
            this.addLabel('Anterior Chamber\n(Aqueous Humor)', width * 0.65, height * 0.42, '#B2EBF2', 'left');
            this.addLabel('Iris\n(Colored Part)', width * 0.82, height * 0.5, '#8B7355', 'left');
            this.addLabel('Pupil\n(Opening)', width * 0.25, height * 0.5, '#000000', 'right');
            
            // Lens and focus
            this.addLabel('Lens\n(Focuses Light)', width * 0.72, height * 0.7, '#E8F5E9', 'left');
            this.addLabel('Ciliary Body\n(Lens Support)', width * 0.75, height * 0.62, '#81C784', 'left');
            this.addLabel('Suspensory\nLigaments', width * 0.65, height * 0.58, '#66BB6A', 'left');
            
            // Posterior chamber
            this.addLabel('Vitreous Humor\n(Gel)', width * 0.6, height * 0.55, '#B3E5FC', 'center');
            
            // Retina and back of eye
            this.addLabel('Retina\n(Light Receptors)', width * 0.88, height * 0.55, '#FFCCBC', 'left');
            this.addLabel('Macula\n(Central Vision)', width * 0.75, height * 0.52, '#FF9800', 'right');
            this.addLabel('Fovea\n(Sharpest Vision)', width * 0.72, height * 0.54, '#F57C00', 'right');
            this.addLabel('Optic Disc\n(Blind Spot)', width * 0.6, height * 0.48, '#FFB74D', 'right');
            
            // Optic nerve
            this.addLabel('Optic Nerve\n(To Brain)', width * 0.25, height * 0.8, '#FFD700', 'right');
            
            // Blood vessels
            this.addLabel('Retinal Blood\nVessels', width * 0.88, height * 0.6, '#E74C3C', 'left');
            
            // Muscles
            this.addLabel('Extraocular\nMuscles', width * 0.12, height * 0.35, '#DC143C', 'left');
            
            // Layers
            this.addLabel('Choroid\n(Blood Supply)', width * 0.88, height * 0.7, '#8D6E63', 'left');
            
            // Function notes
            if(process !== 'structure') {
                this.ctx.font = '11px Arial';
                this.ctx.fillStyle = '#E74C3C';
                this.ctx.textAlign = 'center';
                
                if(process === 'light-refraction') {
                    // Draw light rays
                    this.drawArrow(width * 0.05, height * 0.5, width * 0.65, height * 0.52, '#FFD700', 'Light');
                    this.addLabel('Refraction', width * 0.58, height * 0.68, '#E74C3C');
                } else if(process === 'accommodation') {
                    this.addLabel('Lens changes\nshape to focus', width * 0.6, height * 0.72, '#E74C3C');
                } else if(process === 'phototransduction') {
                    this.addLabel('Rods & Cones\nconvert light', width * 0.75, height * 0.58, '#E74C3C');
                }
            }
        }

        if(showInset) {
            this.drawInset(width * 0.02, height * 0.02, width * 0.35, height * 0.28, insetType);
        }

        this.ctx.restore();
    }

    // ===== BOTANY CONTINUATION =====

    renderXylemPhloemDiagram(x, y, width, height, options = {}) {
        const { 
            showLabels = true,
            component = 'both',
            showInset = false,
            insetType = 'transpiration-pull'
        } = options;

        this.ctx.save();
        this.ctx.translate(x - width/2, y - height/2);

        AnatomicalShapes.drawXylemPhloem(this.ctx, width * 0.2, height * 0.15, width * 0.6, height * 0.7, component);

        if(showLabels) {
            if(component === 'both' || component === 'xylem') {
                this.addLabel('XYLEM', width * 0.3, height * 0.1, '#8B4513');
                this.addLabel('(Water & Minerals)', width * 0.3, height * 0.13, '#7F8C8D');
                this.addLabel('Dead Cells', width * 0.15, height * 0.3, '#A0522D', 'left');
                this.addLabel('Thick\nLignified Walls', width * 0.15, height * 0.5, '#8B4513', 'left');
                this.addLabel('Tracheids', width * 0.25, height * 0.6, '#CD853F', 'center');
                this.addLabel('Vessel\nElements', width * 0.35, height * 0.6, '#DEB887', 'center');
                this.drawArrow(width * 0.3, height * 0.8, width * 0.3, height * 0.2, '#3498DB', 'Upward Flow');
            }
            
            if(component === 'both' || component === 'phloem') {
                this.addLabel('PHLOEM', width * 0.7, height * 0.1, '#228B22');
                this.addLabel('(Sugars & Nutrients)', width * 0.7, height * 0.13, '#7F8C8D');
                this.addLabel('Living Cells', width * 0.85, height * 0.3, '#32CD32', 'right');
                this.addLabel('Sieve Tube\nElements', width * 0.65, height * 0.5, '#90EE90', 'center');
                this.addLabel('Companion\nCells', width * 0.75, height * 0.5, '#00FF00', 'center');
                this.addLabel('Sieve Plates', width * 0.85, height * 0.6, '#228B22', 'right');
                this.drawArrow(width * 0.7, height * 0.2, width * 0.7, height * 0.8, '#2ECC71', 'Bidirectional');
                this.drawArrow(width * 0.7, height * 0.8, width * 0.7, height * 0.2, '#2ECC71', '');
            }
        }

        if(showInset) {
            this.drawInset(width * 0.02, height * 0.02, width * 0.35, height * 0.25, insetType);
        }

        this.ctx.restore();
    }

    renderFlowerStructureDiagram(x, y, width, height, options = {}) {
        const { 
            showLabels = true,
            component = 'complete',
            stage = 'mature',
            showInset = false,
            insetType = 'double-fertilization'
        } = options;

        this.ctx.save();
        this.ctx.translate(x - width/2, y - height/2);

        AnatomicalShapes.drawFlowerStructure(this.ctx, width * 0.25, height * 0.15, 
            width * 0.5, height * 0.7, component, stage);

        if(showLabels) {
            // Female parts (Pistil/Carpel)
            this.addLabel('PISTIL (♀)', width * 0.5, height * 0.1, '#E74C3C');
            this.addLabel('Stigma\n(Pollen Landing)', width * 0.65, height * 0.2, '#FF69B4', 'left');
            this.addLabel('Style\n(Pollen Tube)', width * 0.65, height * 0.35, '#FF1493', 'left');
            this.addLabel('Ovary\n(Contains Ovules)', width * 0.65, height * 0.5, '#C71585', 'left');
            this.addLabel('Ovule\n(Egg Cell)', width * 0.55, height * 0.52, '#DB7093', 'center');
            
            // Male parts (Stamen)
            this.addLabel('STAMEN (♂)', width * 0.85, height * 0.3, '#3498DB', 'left');
            this.addLabel('Anther\n(Pollen Production)', width * 0.85, height * 0.38, '#4169E1', 'left');
            this.addLabel('Filament\n(Stalk)', width * 0.85, height * 0.48, '#5B9BD5', 'left');
            this.addLabel('Pollen Grains', width * 0.75, height * 0.35, '#87CEEB', 'right');
            
            // Accessory parts
            this.addLabel('Petals\n(Corolla)', width * 0.15, height * 0.4, '#FFB6C1', 'left');
            this.addLabel('Sepals\n(Calyx)', width * 0.15, height * 0.6, '#90EE90', 'left');
            this.addLabel('Receptacle', width * 0.5, height * 0.65, '#8B7355', 'center');
            this.addLabel('Pedicel\n(Flower Stalk)', width * 0.5, height * 0.85, '#8B4513', 'center');
            
            if(stage === 'pollination') {
                this.drawArrow(width * 0.7, height * 0.38, width * 0.52, height * 0.2, '#FFD700', 'Pollen');
            }
        }

        if(showInset) {
            this.drawInset(width * 0.02, height * 0.02, width * 0.35, height * 0.25, insetType);
        }

        this.ctx.restore();
    }

    renderSeedGerminationDiagram(x, y, width, height, options = {}) {
        const { 
            showLabels = true,
            showInset = false,
            insetType = 'embryo-development'
        } = options;

        this.ctx.save();
        this.ctx.translate(x - width/2, y - height/2);

        const stages = [
            { name: 'Seed', stage: 'seed' },
            { name: 'Imbibition', stage: 'imbibition' },
            { name: 'Radicle Emerges', stage: 'radicle' },
            { name: 'Seedling', stage: 'seedling' }
        ];

        const stageWidth = width / 4 - 10;
        const stageHeight = height * 0.7;

        stages.forEach((stageInfo, index) => {
            const stageX = width * 0.05 + index * (width / 4);
            AnatomicalShapes.drawSeedGermination(
                this.ctx, stageX, height * 0.2, stageWidth, stageHeight, stageInfo.stage
            );

            if(showLabels) {
                this.addLabel(stageInfo.name, stageX + stageWidth/2, height * 0.15, '#2C3E50');
                
                if(stageInfo.stage === 'seed') {
                    this.addLabel('Seed Coat', stageX + stageWidth/2, height * 0.35, '#8B4513', 'center');
                    this.addLabel('Embryo', stageX + stageWidth/2, height * 0.5, '#90EE90', 'center');
                    this.addLabel('Cotyledons\n(Food Storage)', stageX + stageWidth/2, height * 0.65, '#FFD700', 'center');
                } else if(stageInfo.stage === 'imbibition') {
                    this.addLabel('Water\nAbsorption', stageX + stageWidth/2, height * 0.4, '#3498DB', 'center');
                    this.addLabel('Swelling', stageX + stageWidth/2, height * 0.6, '#7F8C8D', 'center');
                } else if(stageInfo.stage === 'radicle') {
                    this.addLabel('Radicle\n(Primary Root)', stageX + stageWidth/2, height * 0.8, '#8B4513', 'center');
                    this.addLabel('Plumule\n(Shoot)', stageX + stageWidth/2, height * 0.3, '#32CD32', 'center');
                } else if(stageInfo.stage === 'seedling') {
                    this.addLabel('True Leaves', stageX + stageWidth/2, height * 0.25, '#228B22', 'center');
                    this.addLabel('Stem', stageX + stageWidth/2, height * 0.5, '#90EE90', 'center');
                    this.addLabel('Root\nSystem', stageX + stageWidth/2, height * 0.85, '#8B4513', 'center');
                }
            }
        });

        if(showInset) {
            this.drawInset(width * 0.65, height * 0.02, width * 0.33, height * 0.25, insetType);
        }

        this.ctx.restore();
    }

    renderTropismsDiagram(x, y, width, height, options = {}) {
        const { 
            showLabels = true,
            tropismTypes = ['phototropism', 'geotropism', 'thigmotropism'],
            showInset = false,
            insetType = 'auxin-mechanism'
        } = options;

        this.ctx.save();
        this.ctx.translate(x - width/2, y - height/2);

        const tropismWidth = width / tropismTypes.length - 20;
        const tropismHeight = height * 0.7;

        tropismTypes.forEach((tropismType, index) => {
            const tropismX = width * 0.05 + index * (width / tropismTypes.length);
            AnatomicalShapes.drawTropism(
                this.ctx, tropismX, height * 0.2, tropismWidth, tropismHeight, tropismType
            );

            if(showLabels) {
                const tropismLabels = {
                    'phototropism': 'Phototropism\n(Response to Light)',
                    'geotropism': 'Gravitropism\n(Response to Gravity)',
                    'thigmotropism': 'Thigmotropism\n(Response to Touch)',
                    'hydrotropism': 'Hydrotropism\n(Response to Water)',
                    'chemotropism': 'Chemotropism\n(Response to Chemicals)'
                };
                
                this.addLabel(tropismLabels[tropismType], tropismX + tropismWidth/2, height * 0.12, '#2C3E50');
                
                if(tropismType === 'phototropism') {
                    this.addLabel('Light Source', tropismX + tropismWidth * 0.8, height * 0.3, '#FFD700', 'left');
                    this.addLabel('Bends toward\nlight', tropismX + tropismWidth/2, height * 0.88, '#7F8C8D');
                } else if(tropismType === 'geotropism') {
                    this.addLabel('Gravity', tropismX + tropismWidth/2, height * 0.95, '#E74C3C');
                    this.addLabel('Roots grow\ndownward', tropismX + tropismWidth/2, height * 0.88, '#7F8C8D');
                    this.addLabel('Shoots grow\nupward', tropismX + tropismWidth/2, height * 0.15, '#7F8C8D');
                } else if(tropismType === 'thigmotropism') {
                    this.addLabel('Support', tropismX + tropismWidth * 0.7, height * 0.5, '#8B4513', 'left');
                    this.addLabel('Tendrils coil\naround support', tropismX + tropismWidth/2, height * 0.88, '#7F8C8D');
                }
            }
        });

        if(showInset) {
            this.drawInset(width * 0.65, height * 0.02, width * 0.33, height * 0.25, insetType);
        }

        this.ctx.restore();
    }

    // ===== MICROBIOLOGY DIAGRAMS =====

    renderBacteriaStructureDiagram(x, y, width, height, options = {}) {
        const { 
            showLabels = true,
            type = 'gram-positive',
            structure = 'complete',
            showInset = false,
            insetType = 'peptidoglycan-layer'
        } = options;

        this.ctx.save();
        this.ctx.translate(x - width/2, y - height/2);

        AnatomicalShapes.drawBacteriaStructure(this.ctx, width * 0.25, height * 0.2, 
            width * 0.5, height * 0.6, type, structure);

        if(showLabels) {
            const typeLabel = type === 'gram-positive' ? 'Gram-Positive Bacterium' :
                            type === 'gram-negative' ? 'Gram-Negative Bacterium' : 'Archaeon';
            this.addLabel(typeLabel, width * 0.5, height * 0.12, '#2C3E50');
            
            // Common structures
            this.addLabel('Capsule\n(Protective Layer)', width * 0.15, height * 0.25, '#E8DAEF', 'left');
            this.addLabel('Cell Wall\n(Peptidoglycan)', width * 0.15, height * 0.4, '#8B4513', 'left');
            this.addLabel('Cell Membrane', width * 0.15, height * 0.5, '#FF69B4', 'left');
            this.addLabel('Cytoplasm', width * 0.5, height * 0.5, '#87CEEB', 'center');
            this.addLabel('Nucleoid\n(DNA Region)', width * 0.5, height * 0.45, '#9370DB', 'center');
            this.addLabel('Ribosomes\n(70S)', width * 0.6, height * 0.55, '#4169E1', 'left');
            this.addLabel('Plasmid\n(Extra DNA)', width * 0.42, height * 0.6, '#BA55D3', 'right');
            this.addLabel('Flagellum\n(Movement)', width * 0.8, height * 0.35, '#FFD700', 'left');
            this.addLabel('Pili\n(Attachment)', width * 0.75, height * 0.25, '#FFA500', 'left');
            
            if(type === 'gram-negative') {
                this.addLabel('Outer\nMembrane', width * 0.12, height * 0.35, '#E74C3C', 'left');
                this.addLabel('Periplasmic\nSpace', width * 0.15, height * 0.45, '#3498DB', 'left');
            }
        }

        if(showInset) {
            this.drawInset(width * 0.6, height * 0.02, width * 0.38, height * 0.25, insetType);
        }

        this.ctx.restore();
    }

    renderVirusStructureDiagram(x, y, width, height, options = {}) {
        const { 
            showLabels = true,
            type = 'bacteriophage',
            component = 'complete',
            showInset = false,
            insetType = 'viral-replication'
        } = options;

        this.ctx.save();
        this.ctx.translate(x - width/2, y - height/2);

        AnatomicalShapes.drawVirusStructure(this.ctx, width * 0.3, height * 0.2, 
            width * 0.4, height * 0.6, type, component);

        if(showLabels) {
            const typeLabels = {
                'bacteriophage': 'Bacteriophage (Phage)',
                'enveloped': 'Enveloped Virus',
                'non-enveloped': 'Non-Enveloped Virus',
                'retrovirus': 'Retrovirus'
            };
            
            this.addLabel(typeLabels[type], width * 0.5, height * 0.12, '#2C3E50');
            
            if(type === 'bacteriophage') {
                this.addLabel('Head\n(Capsid)', width * 0.5, height * 0.25, '#9370DB', 'center');
                this.addLabel('DNA', width * 0.5, height * 0.3, '#FFD700', 'center');
                this.addLabel('Collar', width * 0.65, height * 0.38, '#8B4789', 'left');
                this.addLabel('Sheath\n(Contractile)', width * 0.65, height * 0.5, '#BA55D3', 'left');
                this.addLabel('Base Plate', width * 0.5, height * 0.65, '#9B59B6', 'center');
                this.addLabel('Tail Fibers\n(Attachment)', width * 0.65, height * 0.75, '#DDA0DD', 'left');
            } else if(type === 'enveloped') {
                this.addLabel('Envelope\n(Lipid Bilayer)', width * 0.15, height * 0.4, '#FF69B4', 'left');
                this.addLabel('Spike Proteins', width * 0.15, height * 0.3, '#E74C3C', 'left');
                this.addLabel('Capsid\n(Protein Coat)', width * 0.7, height * 0.35, '#9370DB', 'left');
                this.addLabel('Nucleic Acid\n(RNA/DNA)', width * 0.5, height * 0.5, '#FFD700', 'center');
                this.addLabel('Matrix Protein', width * 0.7, height * 0.5, '#8B4789', 'left');
            }
            
            this.ctx.font = '11px Arial';
            this.ctx.fillStyle = '#7F8C8D';
            this.ctx.textAlign = 'center';
            this.ctx.fillText('Not living - requires host cell to replicate', width * 0.5, height * 0.92);
        }

        if(showInset) {
            this.drawInset(width * 0.02, height * 0.02, width * 0.35, height * 0.25, insetType);
        }

        this.ctx.restore();
    }

      // ===== MICROBIOLOGY DIAGRAMS CONTINUATION =====

    renderFungalCellDiagram(x, y, width, height, options = {}) {
        const { 
            showLabels = true,
            type = 'yeast',
            showHyphae = true,
            showInset = false,
            insetType = 'spore-formation'
        } = options;

        this.ctx.save();
        this.ctx.translate(x - width/2, y - height/2);

        AnatomicalShapes.drawFungalCell(this.ctx, width * 0.25, height * 0.2, 
            width * 0.5, height * 0.6, type, showHyphae);

        if(showLabels) {
            this.addLabel('Fungal Cell', width * 0.5, height * 0.12, '#2C3E50');
            this.addLabel('Cell Wall\n(Chitin)', width * 0.15, height * 0.35, '#8B4513', 'left');
            this.addLabel('Cell Membrane', width * 0.15, height * 0.45, '#FF69B4', 'left');
            this.addLabel('Nucleus\n(Eukaryotic)', width * 0.5, height * 0.45, '#9370DB', 'center');
            this.addLabel('Vacuole', width * 0.6, height * 0.55, '#87CEEB', 'left');
            this.addLabel('Mitochondria', width * 0.4, height * 0.6, '#FF6347', 'left');
            this.addLabel('Endoplasmic\nReticulum', width * 0.7, height * 0.4, '#20B2AA', 'left');
            
            if(showHyphae) {
                this.addLabel('Hyphae\n(Filaments)', width * 0.85, height * 0.7, '#CD853F', 'left');
                this.addLabel('Septa\n(Cross Walls)', width * 0.85, height * 0.8, '#8B7355', 'left');
            }
            
            if(type === 'yeast') {
                this.addLabel('Budding', width * 0.7, height * 0.3, '#DDA0DD', 'left');
            }
        }

        if(showInset) {
            this.drawInset(width * 0.6, height * 0.02, width * 0.38, height * 0.25, insetType);
        }

        this.ctx.restore();
    }

    renderProtistsDiagram(x, y, width, height, options = {}) {
        const { 
            showLabels = true,
            protistTypes = ['amoeba', 'paramecium', 'euglena'],
            showInset = false,
            insetType = 'contractile-vacuole'
        } = options;

        this.ctx.save();
        this.ctx.translate(x - width/2, y - height/2);

        const protistWidth = width / protistTypes.length - 20;
        const protistHeight = height * 0.7;

        protistTypes.forEach((protistType, index) => {
            const protistX = width * 0.05 + index * (width / protistTypes.length);
            AnatomicalShapes.drawProtist(this.ctx, protistX, height * 0.2, 
                protistWidth, protistHeight, protistType);

            if(showLabels) {
                const protistNames = {
                    'amoeba': 'Amoeba',
                    'paramecium': 'Paramecium',
                    'euglena': 'Euglena',
                    'plasmodium': 'Plasmodium',
                    'volvox': 'Volvox'
                };
                
                this.addLabel(protistNames[protistType], protistX + protistWidth/2, height * 0.12, '#2C3E50');
                
                if(protistType === 'amoeba') {
                    this.addLabel('Pseudopods\n(False Feet)', protistX + protistWidth * 0.2, height * 0.4, '#FF69B4', 'left');
                    this.addLabel('Food Vacuole', protistX + protistWidth/2, height * 0.5, '#FFD700', 'center');
                    this.addLabel('Nucleus', protistX + protistWidth/2, height * 0.45, '#9370DB', 'center');
                    this.addLabel('Contractile\nVacuole', protistX + protistWidth * 0.7, height * 0.6, '#87CEEB', 'left');
                } else if(protistType === 'paramecium') {
                    this.addLabel('Cilia\n(Movement)', protistX + protistWidth * 0.1, height * 0.35, '#4169E1', 'left');
                    this.addLabel('Oral Groove', protistX + protistWidth/2, height * 0.4, '#E74C3C', 'center');
                    this.addLabel('Macronucleus', protistX + protistWidth/2, height * 0.5, '#9370DB', 'center');
                    this.addLabel('Micronucleus', protistX + protistWidth * 0.6, height * 0.52, '#BA55D3', 'left');
                    this.addLabel('Contractile\nVacuole', protistX + protistWidth * 0.8, height * 0.45, '#87CEEB', 'left');
                } else if(protistType === 'euglena') {
                    this.addLabel('Flagellum', protistX + protistWidth/2, height * 0.15, '#FFD700', 'center');
                    this.addLabel('Eyespot\n(Light Detection)', protistX + protistWidth * 0.3, height * 0.3, '#E74C3C', 'left');
                    this.addLabel('Chloroplasts', protistX + protistWidth/2, height * 0.5, '#228B22', 'center');
                    this.addLabel('Nucleus', protistX + protistWidth/2, height * 0.6, '#9370DB', 'center');
                    this.addLabel('Pellicle\n(Flexible)', protistX + protistWidth * 0.8, height * 0.4, '#8B4789', 'left');
                }
            }
        });

        if(showInset) {
            this.drawInset(width * 0.02, height * 0.02, width * 0.3, height * 0.25, insetType);
        }

        this.ctx.restore();
    }

    renderBacterialGrowthCurveDiagram(x, y, width, height, options = {}) {
        const { 
            showLabels = true,
            showInset = false,
            insetType = 'binary-fission'
        } = options;

        this.ctx.save();
        this.ctx.translate(x - width/2, y - height/2);

        // Draw growth curve
        AnatomicalShapes.drawBacterialGrowthCurve(this.ctx, width * 0.1, height * 0.15, 
            width * 0.8, height * 0.7);

        if(showLabels) {
            this.addLabel('Bacterial Growth Curve', width * 0.5, height * 0.08, '#2C3E50');
            
            // Phase labels
            this.addLabel('Lag\nPhase', width * 0.2, height * 0.7, '#3498DB');
            this.addLabel('Log/Exponential\nPhase', width * 0.4, height * 0.35, '#2ECC71');
            this.addLabel('Stationary\nPhase', width * 0.65, height * 0.25, '#F39C12');
            this.addLabel('Death\nPhase', width * 0.85, height * 0.5, '#E74C3C');
            
            // Axes labels
            this.ctx.font = '12px Arial';
            this.ctx.fillStyle = '#7F8C8D';
            this.ctx.textAlign = 'center';
            this.ctx.save();
            this.ctx.translate(width * 0.05, height * 0.5);
            this.ctx.rotate(-Math.PI / 2);
            this.ctx.fillText('Log Cell Number', 0, 0);
            this.ctx.restore();
            
            this.ctx.fillText('Time', width * 0.5, height * 0.92);
            
            // Phase descriptions
            this.ctx.font = '10px Arial';
            this.ctx.textAlign = 'left';
            this.ctx.fillText('Adaptation', width * 0.15, height * 0.88);
            this.ctx.fillText('Rapid division', width * 0.35, height * 0.88);
            this.ctx.fillText('Growth = Death', width * 0.58, height * 0.88);
            this.ctx.fillText('Death > Growth', width * 0.78, height * 0.88);
        }

        if(showInset) {
            this.drawInset(width * 0.6, height * 0.02, width * 0.38, height * 0.28, insetType);
        }

        this.ctx.restore();
    }

    renderViralReplicationDiagram(x, y, width, height, options = {}) {
        const { 
            showLabels = true,
            cycleType = 'both',
            showInset = false,
            insetType = 'host-specificity'
        } = options;

        this.ctx.save();
        this.ctx.translate(x - width/2, y - height/2);

        if(cycleType === 'both') {
            // Lytic cycle (left)
            AnatomicalShapes.drawViralReplicationCycle(this.ctx, width * 0.05, height * 0.15, 
                width * 0.4, height * 0.7, 'lytic');
            
            if(showLabels) {
                this.addLabel('LYTIC CYCLE', width * 0.25, height * 0.1, '#E74C3C');
                this.addLabel('1. Attachment', width * 0.15, height * 0.25, '#2C3E50', 'left');
                this.addLabel('2. Injection', width * 0.15, height * 0.35, '#2C3E50', 'left');
                this.addLabel('3. Replication', width * 0.15, height * 0.5, '#2C3E50', 'left');
                this.addLabel('4. Assembly', width * 0.15, height * 0.65, '#2C3E50', 'left');
                this.addLabel('5. Lysis', width * 0.15, height * 0.8, '#E74C3C', 'left');
                this.addLabel('Cell destroyed', width * 0.25, height * 0.88, '#7F8C8D');
            }
            
            // Lysogenic cycle (right)
            AnatomicalShapes.drawViralReplicationCycle(this.ctx, width * 0.55, height * 0.15, 
                width * 0.4, height * 0.7, 'lysogenic');
            
            if(showLabels) {
                this.addLabel('LYSOGENIC CYCLE', width * 0.75, height * 0.1, '#3498DB');
                this.addLabel('1. Attachment', width * 0.65, height * 0.25, '#2C3E50', 'left');
                this.addLabel('2. Injection', width * 0.65, height * 0.35, '#2C3E50', 'left');
                this.addLabel('3. Integration', width * 0.65, height * 0.5, '#3498DB', 'left');
                this.addLabel('4. Prophage', width * 0.65, height * 0.65, '#3498DB', 'left');
                this.addLabel('5. Cell Division', width * 0.65, height * 0.8, '#2ECC71', 'left');
                this.addLabel('Cell survives', width * 0.75, height * 0.88, '#7F8C8D');
            }
        } else {
            AnatomicalShapes.drawViralReplicationCycle(this.ctx, width * 0.2, height * 0.15, 
                width * 0.6, height * 0.7, cycleType);
        }

        if(showInset) {
            this.drawInset(width * 0.02, height * 0.02, width * 0.35, height * 0.22, insetType);
        }

        this.ctx.restore();
    }

    renderMicroscopyDiagram(x, y, width, height, options = {}) {
        const { 
            showLabels = true,
            showInset = false,
            insetType = 'magnification-calculation'
        } = options;

        this.ctx.save();
        this.ctx.translate(x - width/2, y - height/2);

        // Light microscope (left)
        AnatomicalShapes.drawMicroscope(this.ctx, width * 0.1, height * 0.15, 
            width * 0.35, height * 0.7, 'light');
        
        if(showLabels) {
            this.addLabel('LIGHT MICROSCOPE', width * 0.275, height * 0.1, '#2C3E50');
            this.addLabel('Eyepiece\n(Ocular)', width * 0.05, height * 0.2, '#3498DB', 'left');
            this.addLabel('Objective\nLenses', width * 0.05, height * 0.5, '#E74C3C', 'left');
            this.addLabel('Stage', width * 0.35, height * 0.6, '#95A5A6', 'left');
            this.addLabel('Light\nSource', width * 0.35, height * 0.8, '#FFD700', 'left');
            this.addLabel('Condenser', width * 0.05, height * 0.7, '#9B59B6', 'left');
            
            this.ctx.font = '10px Arial';
            this.ctx.fillStyle = '#7F8C8D';
            this.ctx.textAlign = 'center';
            this.ctx.fillText('Max: ~1000x', width * 0.275, height * 0.88);
            this.ctx.fillText('Resolution: ~200nm', width * 0.275, height * 0.91);
        }
        
        // Electron microscope (right)
        AnatomicalShapes.drawMicroscope(this.ctx, width * 0.55, height * 0.15, 
            width * 0.35, height * 0.7, 'electron');
        
        if(showLabels) {
            this.addLabel('ELECTRON MICROSCOPE', width * 0.725, height * 0.1, '#2C3E50');
            this.addLabel('Electron\nGun', width * 0.5, height * 0.2, '#E74C3C', 'left');
            this.addLabel('Magnetic\nLenses', width * 0.5, height * 0.4, '#3498DB', 'left');
            this.addLabel('Specimen', width * 0.85, height * 0.55, '#95A5A6', 'left');
            this.addLabel('Detector/\nScreen', width * 0.85, height * 0.75, '#2ECC71', 'left');
            this.addLabel('Vacuum\nChamber', width * 0.5, height * 0.6, '#9B59B6', 'left');
            
            this.ctx.font = '10px Arial';
            this.ctx.fillStyle = '#7F8C8D';
            this.ctx.textAlign = 'center';
            this.ctx.fillText('Max: ~1,000,000x', width * 0.725, height * 0.88);
            this.ctx.fillText('Resolution: ~0.1nm', width * 0.725, height * 0.91);
        }

        // Comparison table
        if(showLabels) {
            this.ctx.font = 'bold 11px Arial';
            this.ctx.fillStyle = '#2C3E50';
            this.ctx.textAlign = 'center';
            this.ctx.fillText('Comparison', width * 0.5, height * 0.03);
        }

        if(showInset) {
            this.drawInset(width * 0.35, height * 0.02, width * 0.3, height * 0.2, insetType);
        }

        this.ctx.restore();
    }

    // ===== HEALTH, DISEASE & IMMUNOLOGY DIAGRAMS =====

    renderImmuneResponseDiagram(x, y, width, height, options = {}) {
        const { 
            showLabels = true,
            responseType = 'both',
            pathogen = 'bacteria',
            showInset = false,
            insetType = 'antigen-presentation'
        } = options;

        this.ctx.save();
        this.ctx.translate(x - width/2, y - height/2);

        if(responseType === 'both') {
            // Innate immune response (left)
            AnatomicalShapes.drawImmuneResponse(this.ctx, width * 0.05, height * 0.15, 
                width * 0.4, height * 0.7, 'innate');
            
            if(showLabels) {
                this.addLabel('INNATE IMMUNITY', width * 0.25, height * 0.1, '#E74C3C');
                this.addLabel('(Non-Specific)', width * 0.25, height * 0.13, '#7F8C8D');
                this.addLabel('Barriers', width * 0.15, height * 0.25, '#2C3E50', 'left');
                this.addLabel('• Skin', width * 0.18, height * 0.28, '#8B4513', 'left');
                this.addLabel('• Mucus', width * 0.18, height * 0.31, '#90EE90', 'left');
                this.addLabel('• Stomach Acid', width * 0.18, height * 0.34, '#FFD700', 'left');
                
                this.addLabel('Phagocytes', width * 0.15, height * 0.45, '#2C3E50', 'left');
                this.addLabel('• Macrophages', width * 0.18, height * 0.48, '#FF69B4', 'left');
                this.addLabel('• Neutrophils', width * 0.18, height * 0.51, '#9370DB', 'left');
                this.addLabel('• Dendritic Cells', width * 0.18, height * 0.54, '#20B2AA', 'left');
                
                this.addLabel('Inflammation', width * 0.15, height * 0.65, '#E74C3C', 'left');
                this.addLabel('Complement', width * 0.15, height * 0.75, '#3498DB', 'left');
                
                this.ctx.font = '10px Arial';
                this.ctx.fillStyle = '#7F8C8D';
                this.ctx.textAlign = 'center';
                this.ctx.fillText('Fast (Minutes-Hours)', width * 0.25, height * 0.88);
            }
            
            // Adaptive immune response (right)
            AnatomicalShapes.drawImmuneResponse(this.ctx, width * 0.55, height * 0.15, 
                width * 0.4, height * 0.7, 'adaptive');
            
            if(showLabels) {
                this.addLabel('ADAPTIVE IMMUNITY', width * 0.75, height * 0.1, '#3498DB');
                this.addLabel('(Specific)', width * 0.75, height * 0.13, '#7F8C8D');
                
                this.addLabel('Cell-Mediated', width * 0.65, height * 0.25, '#2C3E50', 'left');
                this.addLabel('• T Helper Cells', width * 0.68, height * 0.28, '#FF6B6B', 'left');
                this.addLabel('• Cytotoxic T Cells', width * 0.68, height * 0.31, '#E74C3C', 'left');
                this.addLabel('• Regulatory T Cells', width * 0.68, height * 0.34, '#C0392B', 'left');
                
                this.addLabel('Humoral', width * 0.65, height * 0.45, '#2C3E50', 'left');
                this.addLabel('• B Cells', width * 0.68, height * 0.48, '#4169E1', 'left');
                this.addLabel('• Plasma Cells', width * 0.68, height * 0.51, '#3498DB', 'left');
                this.addLabel('• Antibodies', width * 0.68, height * 0.54, '#5DADE2', 'left');
                
                this.addLabel('Memory Cells', width * 0.65, height * 0.65, '#9B59B6', 'left');
                this.addLabel('• T Memory', width * 0.68, height * 0.68, '#BA55D3', 'left');
                this.addLabel('• B Memory', width * 0.68, height * 0.71, '#DDA0DD', 'left');
                
                this.ctx.font = '10px Arial';
                this.ctx.fillStyle = '#7F8C8D';
                this.ctx.textAlign = 'center';
                this.ctx.fillText('Slow (Days-Weeks)', width * 0.75, height * 0.88);
                this.ctx.fillText('Immunological Memory', width * 0.75, height * 0.91);
            }
        } else {
            AnatomicalShapes.drawImmuneResponse(this.ctx, width * 0.2, height * 0.15, 
                width * 0.6, height * 0.7, responseType);
        }

        if(showInset) {
            this.drawInset(width * 0.02, height * 0.02, width * 0.35, height * 0.25, insetType);
        }

        this.ctx.restore();
    }

    renderAntibodyStructureDiagram(x, y, width, height, options = {}) {
        const { 
            showLabels = true,
            detail = 'complete',
            showInset = false,
            insetType = 'antigen-binding'
        } = options;

        this.ctx.save();
        this.ctx.translate(x - width/2, y - height/2);

        AnatomicalShapes.drawAntibodyStructure(this.ctx, width * 0.25, height * 0.15, 
            width * 0.5, height * 0.7, detail);

        if(showLabels) {
            this.addLabel('Antibody (Immunoglobulin) Structure', width * 0.5, height * 0.08, '#2C3E50');
            
            // Y-shaped structure labels
            this.addLabel('Antigen Binding\nSites', width * 0.3, height * 0.2, '#E74C3C', 'center');
            this.addLabel('Antigen Binding\nSites', width * 0.7, height * 0.2, '#E74C3C', 'center');
            
            this.addLabel('Heavy Chain', width * 0.35, height * 0.45, '#3498DB', 'right');
            this.addLabel('Heavy Chain', width * 0.65, height * 0.45, '#3498DB', 'left');
            
            this.addLabel('Light Chain', width * 0.25, height * 0.4, '#2ECC71', 'right');
            this.addLabel('Light Chain', width * 0.75, height * 0.4, '#2ECC71', 'left');
            
            this.addLabel('Variable\nRegion (V)', width * 0.15, height * 0.25, '#FF6B6B', 'left');
            this.addLabel('Constant\nRegion (C)', width * 0.15, height * 0.6, '#95A5A6', 'left');
            
            this.addLabel('Hinge Region', width * 0.5, height * 0.5, '#F39C12', 'center');
            
            this.addLabel('Fc Region\n(Constant Fragment)', width * 0.5, height * 0.75, '#9B59B6', 'center');
            this.addLabel('Binds to\nphagocytes', width * 0.7, height * 0.78, '#7F8C8D', 'left');
            
            this.addLabel('Fab Region\n(Fragment Antigen Binding)', width * 0.3, height * 0.35, '#E67E22', 'center');
            
            // Disulfide bonds
            this.ctx.strokeStyle = '#FFD700';
            this.ctx.lineWidth = 2;
            this.ctx.setLineDash([2, 2]);
            this.ctx.beginPath();
            this.ctx.moveTo(width * 0.45, height * 0.48);
            this.ctx.lineTo(width * 0.55, height * 0.48);
            this.ctx.stroke();
            this.ctx.setLineDash([]);
            
            this.addLabel('Disulfide\nBonds', width * 0.85, height * 0.5, '#FFD700', 'left');
        }

        if(showInset) {
            this.drawInset(width * 0.6, height * 0.02, width * 0.38, height * 0.25, insetType);
        }

        this.ctx.restore();
    }

    renderPathogenTypesDiagram(x, y, width, height, options = {}) {
        const { 
            showLabels = true,
            showInset = false,
            insetType = 'koch-postulates'
        } = options;

        this.ctx.save();
        this.ctx.translate(x - width/2, y - height/2);

        const pathogens = [
            { type: 'bacteria', name: 'Bacteria', color: '#3498DB' },
            { type: 'virus', name: 'Viruses', color: '#E74C3C' },
            { type: 'fungi', name: 'Fungi', color: '#F39C12' },
            { type: 'protozoa', name: 'Protozoa', color: '#9B59B6' }
        ];

        const pathogenWidth = width / 2 - 20;
        const pathogenHeight = height / 2 - 20;

        pathogens.forEach((pathogen, index) => {
            const row = Math.floor(index / 2);
            const col = index % 2;
            const pathX = width * 0.05 + col * (width / 2);
            const pathY = height * 0.15 + row * (height / 2);

            AnatomicalShapes.drawPathogenType(this.ctx, pathX, pathY, 
                pathogenWidth, pathogenHeight, pathogen.type);

            if(showLabels) {
                this.addLabel(pathogen.name, pathX + pathogenWidth/2, pathY - 10, pathogen.color);
                
                const examples = {
                    'bacteria': ['Streptococcus', 'E. coli', 'Tuberculosis'],
                    'virus': ['Influenza', 'HIV', 'COVID-19'],
                    'fungi': ['Candida', 'Ringworm', 'Athlete\'s Foot'],
                    'protozoa': ['Malaria', 'Giardia', 'Amoeba']
                };
                
                this.ctx.font = '10px Arial';
                this.ctx.fillStyle = '#7F8C8D';
                this.ctx.textAlign = 'center';
                examples[pathogen.type].forEach((example, i) => {
                    this.ctx.fillText(example, pathX + pathogenWidth/2, pathY + pathogenHeight + 15 + i * 12);
                });
            }
        });

        if(showLabels) {
            this.addLabel('Types of Pathogens', width * 0.5, height * 0.05, '#2C3E50');
        }

        if(showInset) {
            this.drawInset(width * 0.6, height * 0.02, width * 0.38, height * 0.25, insetType);
        }

        this.ctx.restore();
    }

    renderVaccinationDiagram(x, y, width, height, options = {}) {
        const { 
            showLabels = true,
            stage = 'complete',
            showInset = false,
            insetType = 'herd-immunity'
        } = options;

        this.ctx.save();
        this.ctx.translate(x - width/2, y - height/2);

        if(stage === 'complete') {
            const stages = [
                'Vaccine Administration',
                'Immune Recognition',
                'Memory Cell Formation',
                'Secondary Exposure',
                'Rapid Response'
            ];

            const stageHeight = height / (stages.length + 1);

            stages.forEach((stageName, index) => {
                const yPos = stageHeight * (index + 1);
                AnatomicalShapes.drawVaccinationStage(this.ctx, width * 0.1, yPos - 30, 
                    width * 0.8, 60, index);

                if(showLabels) {
                    this.addLabel(`${index + 1}. ${stageName}`, width * 0.05, yPos, '#2C3E50', 'left');
                }
            });

            // Add arrows between stages
            this.ctx.strokeStyle = '#3498DB';
            this.ctx.fillStyle = '#3498DB';
            this.ctx.lineWidth = 3;
            stages.slice(0, -1).forEach((_, index) => {
                const y1 = stageHeight * (index + 1) + 35;
                const y2 = stageHeight * (index + 2) - 35;
                this.drawArrow(width * 0.5, y1, width * 0.5, y2, '#3498DB', '', 8);
            });

        } else {
            AnatomicalShapes.drawVaccinationStage(this.ctx, width * 0.15, height * 0.25, 
                width * 0.7, height * 0.5, parseInt(stage));
        }

        if(showLabels) {
            this.addLabel('How Vaccines Work', width * 0.5, height * 0.05, '#2C3E50');
            
            this.ctx.font = '11px Arial';
            this.ctx.fillStyle = '#7F8C8D';
            this.ctx.textAlign = 'center';
            this.ctx.fillText('Vaccines train immune system without causing disease', 
                width * 0.5, height * 0.92);
        }

        if(showInset) {
            this.drawInset(width * 0.02, height * 0.02, width * 0.35, height * 0.25, insetType);
        }

        this.ctx.restore();
    }

    renderInflammationDiagram(x, y, width, height, options = {}) {
        const { 
            showLabels = true,
            showInset = false,
            insetType = 'inflammatory-mediators'
        } = options;

        this.ctx.save();
        this.ctx.translate(x - width/2, y - height/2);

        const steps = [
            { name: 'Tissue Injury', step: 'injury' },
            { name: 'Chemical Signals', step: 'signals' },
            { name: 'Vasodilation', step: 'vasodilation' },
            { name: 'Phagocyte Migration', step: 'migration' },
            { name: 'Phagocytosis & Healing', step: 'healing' }
        ];

        const stepWidth = width / 5 - 10;
        const stepHeight = height * 0.6;

        steps.forEach((stepInfo, index) => {
            const stepX = width * 0.05 + index * (width / 5);
            AnatomicalShapes.drawInflammationStep(this.ctx, stepX, height * 0.2, 
                stepWidth, stepHeight, stepInfo.step);

            if(showLabels) {
                this.addLabel(stepInfo.name, stepX + stepWidth/2, height * 0.15, '#2C3E50');
            }
        });

        // Classic signs of inflammation
        if(showLabels) {
            this.addLabel('Cardinal Signs of Inflammation', width * 0.5, height * 0.88, '#E74C3C');
            
            const signs = [
                '• Rubor (Redness)',
                '• Calor (Heat)',
                '• Tumor (Swelling)',
                '• Dolor (Pain)',
                '• Functio Laesa (Loss of Function)'
            ];
            
            this.ctx.font = '11px Arial';
            this.ctx.fillStyle = '#2C3E50';
            this.ctx.textAlign = 'center';
            signs.forEach((sign, i) => {
                this.ctx.fillText(sign, width * 0.5, height * 0.92 + i * 14);
            });
        }

        if(showInset) {
            this.drawInset(width * 0.65, height * 0.02, width * 0.33, height * 0.25, insetType);
        }

        this.ctx.restore();
    }

    renderDiseaseTransmissionDiagram(x, y, width, height, options = {}) {
        const { 
            showLabels = true,
            diseaseType = 'malaria',
            showInset = false,
            insetType = 'vector-control'
        } = options;

        this.ctx.save();
        this.ctx.translate(x - width/2, y - height/2);

        AnatomicalShapes.drawDiseaseTransmissionCycle(this.ctx, width * 0.15, height * 0.15, 
            width * 0.7, height * 0.7, diseaseType);

        if(showLabels) {
            const diseaseNames = {
                'malaria': 'Malaria Transmission Cycle',
                'dengue': 'Dengue Fever Transmission',
                'lyme': 'Lyme Disease Transmission',
                'zika': 'Zika Virus Transmission'
            };
            
            this.addLabel(diseaseNames[diseaseType], width * 0.5, height * 0.08, '#2C3E50');
            
            if(diseaseType === 'malaria') {
                this.addLabel('Mosquito\n(Vector)', width * 0.5, height * 0.25, '#8B4513');
                this.addLabel('Human Host', width * 0.25, height * 0.6, '#FFB6C1');
                this.addLabel('Plasmodium\n(Parasite)', width * 0.75, height * 0.6, '#E74C3C');
                
                // Cycle arrows
                this.drawCurvedArrow(width * 0.45, height * 0.35, width * 0.3, height * 0.55, 
                    '#E74C3C', 'Bite');
                this.drawCurvedArrow(width * 0.35, height * 0.65, width * 0.5, height * 0.8, 
                    '#3498DB', 'Infection');
                this.drawCurvedArrow(width * 0.65, height * 0.75, width * 0.7, height * 0.65, 
                    '#2ECC71', 'Development');
                this.drawCurvedArrow(width * 0.75, height * 0.55, width * 0.55, height * 0.35, 
                    '#F39C12', 'Transmission');
            } else if(diseaseType === 'lyme') {
                this.addLabel('Tick\n(Vector)', width * 0.5, height * 0.3, '#8B4513');
                this.addLabel('Deer/Mouse\n(Reservoir)', width * 0.25, height * 0.7, '#CD853F');
                this.addLabel('Human', width * 0.75, height * 0.7, '#FFB6C1');
                this.addLabel('Borrelia\n(Bacteria)', width * 0.5, height * 0.55, '#3498DB');
            }
            
            this.ctx.font = '11px Arial';
            this.ctx.fillStyle = '#7F8C8D';
            this.ctx.textAlign = 'center';
            this.ctx.fillText('Vector-borne disease requires intermediate host', 
                width * 0.5, height * 0.92);
        }

        if(showInset) {
            this.drawInset(width * 0.02, height * 0.02, width * 0.35, height * 0.25, insetType);
        }

        this.ctx.restore();
    }

    renderBloodCellsDiagram(x, y, width, height, options = {}) {
        const { 
            showLabels = true,
            cellType = 'all',
            showInset = false,
            insetType = 'hematopoiesis'
        } = options;

        this.ctx.save();
        this.ctx.translate(x - width/2, y - height/2);

        if(cellType === 'all') {
            // Red Blood Cells
            const rbcX = width * 0.15;
            const rbcY = height * 0.3;
            AnatomicalShapes.drawRedBloodCell(this.ctx, rbcX, rbcY, 35);
            
            if(showLabels) {
                this.addLabel('Red Blood Cells\n(Erythrocytes)', rbcX, rbcY + 60, '#E74C3C');
                this.ctx.font = '10px Arial';
                this.ctx.fillStyle = '#7F8C8D';
                this.ctx.textAlign = 'center';
                this.ctx.fillText('No nucleus', rbcX, rbcY + 80);
                this.ctx.fillText('Hemoglobin', rbcX, rbcY + 92);
                this.ctx.fillText('O₂ transport', rbcX, rbcY + 104);
                this.ctx.fillText('~5 million/μL', rbcX, rbcY + 116);
            }

            // White Blood Cells
            const wbcTypes = [
                { type: 'neutrophil', x: 0.4, y: 0.25, name: 'Neutrophil' },
                { type: 'lymphocyte', x: 0.55, y: 0.25, name: 'Lymphocyte' },
                { type: 'monocyte', x: 0.7, y: 0.25, name: 'Monocyte' },
                { type: 'eosinophil', x: 0.85, y: 0.25, name: 'Eosinophil' }
            ];

            wbcTypes.forEach(wbc => {
                const wbcX = width * wbc.x;
                const wbcY = height * wbc.y;
                AnatomicalShapes.drawWhiteBloodCell(this.ctx, wbcX, wbcY, 30, wbc.type);
                
                if(showLabels) {
                    this.addLabel(wbc.name, wbcX, wbcY + 50, '#D0D0F8');
                    
                    this.ctx.font = '9px Arial';
                    this.ctx.fillStyle = '#7F8C8D';
                    this.ctx.textAlign = 'center';
                    
                    const functions = {
                        'neutrophil': ['Phagocytosis', 'Bacteria'],
                        'lymphocyte': ['Immunity', 'Antibodies'],
                        'monocyte': ['Phagocytosis', 'Macrophages'],
                        'eosinophil': ['Parasites', 'Allergies']
                    };
                    
                    functions[wbc.type].forEach((func, i) => {
                        this.ctx.fillText(func, wbcX, wbcY + 65 + i * 11);
                    });
                }
            });

            // Platelets
            const plateletY = height * 0.7;
            for(let i = 0; i < 6; i++) {
                const px = width * (0.35 + i * 0.06);
                AnatomicalShapes.drawPlatelet(this.ctx, px, plateletY, 10);
            }
            
            if(showLabels) {
                this.addLabel('Platelets (Thrombocytes)', width * 0.5, plateletY + 35, '#DDA0DD');
                this.ctx.font = '10px Arial';
                this.ctx.fillStyle = '#7F8C8D';
                this.ctx.textAlign = 'center';
                this.ctx.fillText('Blood clotting', width * 0.5, plateletY + 50);
                this.ctx.fillText('No nucleus', width * 0.5, plateletY + 62);
                this.ctx.fillText('~250,000/μL', width * 0.5, plateletY + 74);
            }

            // White blood cells label
            if(showLabels) {
                this.ctx.font = 'bold 12px Arial';
                this.ctx.fillStyle = '#2C3E50';
                this.ctx.textAlign = 'center';
                this.ctx.fillText('White Blood Cells (Leukocytes)', width * 0.625, height * 0.15);
                this.ctx.font = '10px Arial';
                this.ctx.fillStyle = '#7F8C8D';
                this.ctx.fillText('~7,000/μL', width * 0.625, height * 0.18);
            }

        } else {
            // Individual cell type
            AnatomicalShapes.drawBloodCell(this.ctx, width * 0.5, height * 0.4, 50, cellType);
        }

        if(showInset) {
            this.drawInset(width * 0.02, height * 0.02, width * 0.3, height * 0.22, insetType);
        }

        this.ctx.restore();
    }

    // ===== ECOLOGY DIAGRAMS =====

    renderFoodChainDiagram(x, y, width, height, options = {}) {
        const { 
            showLabels = true,
            ecosystem = 'terrestrial',
            showInset = false,
            insetType = 'energy-transfer'
        } = options;

        this.ctx.save();
        this.ctx.translate(x - width/2, y - height/2);

        AnatomicalShapes.drawFoodChain(this.ctx, width * 0.2, height * 0.15, 
            width * 0.6, height * 0.7, ecosystem);

        if(showLabels) {
            this.addLabel('Food Chain', width * 0.5, height * 0.08, '#2C3E50');
            
            // Trophic levels with energy transfer
            const levels = [
                { name: 'Producers\n(Plants)', y: 0.25, color: '#2ECC71', energy: '100%' },
                { name: 'Primary Consumers\n(Herbivores)', y: 0.4, color: '#3498DB', energy: '10%' },
                { name: 'Secondary Consumers\n(Carnivores)', y: 0.55, color: '#E67E22', energy: '1%' },
                { name: 'Tertiary Consumers\n(Top Predators)', y: 0.7, color: '#E74C3C', energy: '0.1%' }
            ];

            levels.forEach((level, index) => {
                this.addLabel(level.name, width * 0.5, height * level.y, level.color);
                
                // Energy percentage
                this.ctx.font = 'bold 11px Arial';
                this.ctx.fillStyle = '#7F8C8D';
                this.ctx.textAlign = 'left';
                this.ctx.fillText(`Energy: ${level.energy}`, width * 0.75, height * level.y);
                
                // Arrow to next level
                if(index < levels.length - 1) {
                    this.drawArrow(width * 0.5, height * level.y + 25, 
                        width * 0.5, height * levels[index + 1].y - 25, 
                        '#2C3E50', '', 8);
                }
            });

            // Decomposers
            this.addLabel('Decomposers\n(Bacteria, Fungi)', width * 0.15, height * 0.85, '#8B4513', 'left');
            this.drawArrow(width * 0.5, height * 0.75, width * 0.25, height * 0.85, '#8B4513', 'Waste');

            // 10% Rule
            this.ctx.font = 'bold 12px Arial';
            this.ctx.fillStyle = '#E74C3C';
            this.ctx.textAlign = 'center';
            this.ctx.fillText('10% Energy Transfer Rule', width * 0.5, height * 0.92);
        }

        if(showInset) {
            this.drawInset(width * 0.65, height * 0.02, width * 0.33, height * 0.25, insetType);
        }

        this.ctx.restore();
    }

    renderFoodWebDiagram(x, y, width, height, options = {}) {
        const { 
            showLabels = true,
            ecosystem = 'terrestrial',
            trophicLevel = 'complete',
            showInset = false,
            insetType = 'energy-pyramid'
        } = options;

        this.ctx.save();
        this.ctx.translate(x - width/2, y - height/2);

        AnatomicalShapes.drawFoodWeb(this.ctx, width * 0.1, height * 0.15, 
            width * 0.8, height * 0.7, ecosystem);

        if(showLabels) {
            this.addLabel('Food Web - Interconnected Feeding Relationships', width * 0.5, height * 0.08, '#2C3E50');
            
            if(ecosystem === 'terrestrial') {
                // Producers
                this.addLabel('Grass', width * 0.2, height * 0.8, '#2ECC71');
                this.addLabel('Shrubs', width * 0.4, height * 0.85, '#27AE60');
                this.addLabel('Trees', width * 0.6, height * 0.82, '#229954');
                
                // Primary consumers
                this.addLabel('Rabbit', width * 0.25, height * 0.6, '#3498DB');
                this.addLabel('Mouse', width * 0.45, height * 0.65, '#5DADE2');
                this.addLabel('Deer', width * 0.65, height * 0.62, '#85C1E2');
                this.addLabel('Grasshopper', width * 0.35, height * 0.7, '#AED6F1');
                
                // Secondary consumers
                this.addLabel('Snake', width * 0.3, height * 0.45, '#E67E22');
                this.addLabel('Fox', width * 0.55, height * 0.42, '#F39C12');
                this.addLabel('Bird', width * 0.75, height * 0.48, '#F8B500');
                
                // Tertiary consumers
                this.addLabel('Hawk', width * 0.5, height * 0.25, '#E74C3C');
                this.addLabel('Wolf', width * 0.7, height * 0.28, '#C0392B');
                
                // Decomposers
                this.addLabel('Decomposers', width * 0.15, height * 0.92, '#8B4513');
                
            } else if(ecosystem === 'aquatic') {
                // Producers
                this.addLabel('Phytoplankton', width * 0.3, height * 0.8, '#2ECC71');
                this.addLabel('Algae', width * 0.6, height * 0.85, '#27AE60');
                
                // Primary consumers
                this.addLabel('Zooplankton', width * 0.25, height * 0.65, '#3498DB');
                this.addLabel('Small Fish', width * 0.55, height * 0.6, '#5DADE2');
                
                // Secondary consumers
                this.addLabel('Medium Fish', width * 0.4, height * 0.45, '#E67E22');
                this.addLabel('Squid', width * 0.65, height * 0.42, '#F39C12');
                
                // Tertiary consumers
                this.addLabel('Shark', width * 0.5, height * 0.25, '#E74C3C');
                this.addLabel('Dolphin', width * 0.7, height * 0.28, '#C0392B');
            }

            // Legend
            this.ctx.font = '11px Arial';
            this.ctx.fillStyle = '#7F8C8D';
            this.ctx.textAlign = 'center';
            this.ctx.fillText('Arrows show energy flow direction', width * 0.5, height * 0.95);
        }

        if(showInset) {
            this.drawInset(width * 0.02, height * 0.02, width * 0.35, height * 0.3, insetType);
        }

        this.ctx.restore();
    }

    renderEnergyPyramidDiagram(x, y, width, height, options = {}) {
        const { 
            showLabels = true,
            showInset = false,
            insetType = 'trophic-efficiency'
        } = options;

        this.ctx.save();
        this.ctx.translate(x - width/2, y - height/2);

        AnatomicalShapes.drawEnergyPyramid(this.ctx, width * 0.15, height * 0.15, 
            width * 0.7, height * 0.7);

        if(showLabels) {
            this.addLabel('Energy Pyramid (Biomass)', width * 0.5, height * 0.08, '#2C3E50');
            
            // Pyramid levels with energy values
            const levels = [
                { name: 'Producers', energy: '10,000 kcal', biomass: '10,000 kg', y: 0.75, width: 0.7, color: '#2ECC71' },
                { name: 'Primary Consumers', energy: '1,000 kcal', biomass: '1,000 kg', y: 0.6, width: 0.55, color: '#3498DB' },
                { name: 'Secondary Consumers', energy: '100 kcal', biomass: '100 kg', y: 0.45, width: 0.4, color: '#E67E22' },
                { name: 'Tertiary Consumers', energy: '10 kcal', biomass: '10 kg', y: 0.3, width: 0.25, color: '#E74C3C' }
            ];

            levels.forEach(level => {
                this.addLabel(level.name, width * 0.5, height * level.y, level.color);
                
                this.ctx.font = '10px Arial';
                this.ctx.fillStyle = '#2C3E50';
                this.ctx.textAlign = 'center';
                this.ctx.fillText(level.energy, width * 0.5, height * level.y + 15);
                this.ctx.fillText(level.biomass, width * 0.5, height * level.y + 27);
            });

            // 10% rule annotation
            this.ctx.strokeStyle = '#E74C3C';
            this.ctx.fillStyle = '#E74C3C';
            this.ctx.lineWidth = 2;
            this.ctx.setLineDash([5, 5]);
            
            for(let i = 0; i < levels.length - 1; i++) {
                const y1 = height * levels[i].y - 35;
                const y2 = height * levels[i + 1].y + 35;
                this.drawArrow(width * 0.85, y1, width * 0.85, y2, '#E74C3C', '10%', 6);
            }
            
            this.ctx.setLineDash([]);

            // Energy loss explanation
            this.ctx.font = '11px Arial';
            this.ctx.fillStyle = '#7F8C8D';
            this.ctx.textAlign = 'left';
            this.ctx.fillText('90% energy lost as:', width * 0.02, height * 0.88);
            this.ctx.fillText('• Heat (metabolism)', width * 0.05, height * 0.91);
            this.ctx.fillText('• Waste products', width * 0.05, height * 0.94);
            this.ctx.fillText('• Incomplete digestion', width * 0.05, height * 0.97);
        }

        if(showInset) {
            this.drawInset(width * 0.55, height * 0.02, width * 0.43, height * 0.25, insetType);
        }

        this.ctx.restore();
    }

    renderCarbonCycleDiagram(x, y, width, height, options = {}) {
        const { 
            showLabels = true,
            process = 'complete',
            reservoir = 'all',
            showInset = false,
            insetType = 'greenhouse-effect'
        } = options;

        this.ctx.save();
        this.ctx.translate(x - width/2, y - height/2);

        AnatomicalShapes.drawCarbonCycle(this.ctx, width * 0.1, height * 0.1, 
            width * 0.8, height * 0.8, process);

        if(showLabels) {
            this.addLabel('Carbon Cycle', width * 0.5, height * 0.05, '#2C3E50');
            
            // Atmosphere
            this.addLabel('Atmosphere\nCO₂', width * 0.5, height * 0.15, '#87CEEB');
            
            // Photosynthesis
            this.drawArrow(width * 0.5, height * 0.2, width * 0.3, height * 0.35, '#2ECC71', 'Photosynthesis');
            
            // Plants
            this.addLabel('Plants\n(Producers)', width * 0.25, height * 0.4, '#2ECC71');
            
            // Respiration (plants to atmosphere)
            this.drawArrow(width * 0.3, height * 0.35, width * 0.45, height * 0.22, '#E67E22', 'Respiration');
            
            // Feeding
            this.drawArrow(width * 0.3, height * 0.45, width * 0.5, height * 0.55, '#3498DB', 'Consumption');
            
            // Animals
            this.addLabel('Animals\n(Consumers)', width * 0.55, height * 0.6, '#3498DB');
            
            // Respiration (animals to atmosphere)
            this.drawArrow(width * 0.55, height * 0.55, width * 0.52, height * 0.25, '#E67E22', 'Respiration');
            
            // Death and decay
            this.drawArrow(width * 0.25, height * 0.5, width * 0.35, height * 0.7, '#8B4513', 'Death');
            this.drawArrow(width * 0.58, height * 0.65, width * 0.45, height * 0.75, '#8B4513', 'Death');
            
            // Decomposers
            this.addLabel('Decomposers\n(Bacteria/Fungi)', width * 0.4, height * 0.78, '#8B4513');
            
            // Decomposition to atmosphere
            this.drawArrow(width * 0.42, height * 0.75, width * 0.48, height * 0.28, '#E67E22', 'Decomposition');
            
            // Fossilization
            this.drawArrow(width * 0.38, height * 0.82, width * 0.25, height * 0.9, '#2C3E50', 'Fossilization\n(millions of years)');
            
            // Fossil fuels
            this.addLabel('Fossil Fuels\n(Coal, Oil, Gas)', width * 0.2, height * 0.93, '#2C3E50');
            
            // Combustion
            this.drawArrow(width * 0.25, height * 0.9, width * 0.48, height * 0.3, '#E74C3C', 'Combustion');
            
            // Ocean absorption
            this.drawArrow(width * 0.6, height * 0.2, width * 0.75, height * 0.4, '#1F618D', 'Diffusion');
            
            // Ocean
            this.addLabel('Ocean\nDissolved CO₂', width * 0.78, height * 0.45, '#1F618D');
            
            // Marine organisms
            this.addLabel('Marine\nOrganisms', width * 0.75, height * 0.65, '#5DADE2');
            this.drawArrow(width * 0.77, height * 0.5, width * 0.76, height * 0.6, '#3498DB', '');
            
            // Sedimentation
            this.drawArrow(width * 0.73, height * 0.7, width * 0.68, height * 0.88, '#95A5A6', 'Sedimentation');
            
            // Sediments/Rocks
            this.addLabel('Sediments\n(Limestone)', width * 0.65, height * 0.93, '#95A5A6');

            // Time scales
            this.ctx.font = '10px Arial';
            this.ctx.fillStyle = '#7F8C8D';
            this.ctx.textAlign = 'left';
            this.ctx.fillText('Fast processes: years to decades', width * 0.02, height * 0.97);
            this.ctx.fillText('Slow processes: millions of years', width * 0.55, height * 0.97);
        }

        if(showInset) {
            this.drawInset(width * 0.02, height * 0.02, width * 0.35, height * 0.22, insetType);
        }

        this.ctx.restore();
    }

    renderNitrogenCycleDiagram(x, y, width, height, options = {}) {
        const { 
            showLabels = true,
            process = 'complete',
            showInset = false,
            insetType = 'nitrogen-fixation'
        } = options;

        this.ctx.save();
        this.ctx.translate(x - width/2, y - height/2);

        AnatomicalShapes.drawNitrogenCycle(this.ctx, width * 0.1, height * 0.1, 
            width * 0.8, height * 0.8);

        if(showLabels) {
            this.addLabel('Nitrogen Cycle', width * 0.5, height * 0.05, '#2C3E50');
            
            // Atmosphere
            this.addLabel('Atmospheric N₂\n(78%)', width * 0.5, height * 0.12, '#87CEEB');
            
            // Nitrogen fixation
            this.drawArrow(width * 0.48, height * 0.17, width * 0.3, height * 0.35, '#3498DB', 'N₂ Fixation');
            
            // Nitrogen-fixing bacteria
            this.addLabel('N-Fixing Bacteria\n(Rhizobium)', width * 0.25, height * 0.38, '#9B59B6');
            
            // Ammonia/Ammonium
            this.addLabel('NH₃/NH₄⁺\n(Ammonia)', width * 0.3, height * 0.5, '#FFD700');
            
            // Nitrification
            this.drawArrow(width * 0.35, height * 0.52, width * 0.5, height * 0.6, '#2ECC71', 'Nitrification\n(Nitrosomonas)');
            
            // Nitrites
            this.addLabel('NO₂⁻\n(Nitrite)', width * 0.55, height * 0.62, '#F39C12');
            
            // Further nitrification
            this.drawArrow(width * 0.58, height * 0.65, width * 0.65, height * 0.72, '#27AE60', 'Nitrification\n(Nitrobacter)');
            
            // Nitrates
            this.addLabel('NO₃⁻\n(Nitrate)', width * 0.68, height * 0.75, '#E67E22');
            
            // Plant uptake
            this.drawArrow(width * 0.65, height * 0.72, width * 0.55, height * 0.82, '#2ECC71', 'Assimilation');
            
            // Plants
            this.addLabel('Plants\n(Proteins)', width * 0.5, height * 0.85, '#2ECC71');
            
            // Animal consumption
            this.drawArrow(width * 0.52, height * 0.82, width * 0.7, height * 0.85, '#3498DB', 'Consumption');
            
            // Animals
            this.addLabel('Animals\n(Proteins)', width * 0.75, height * 0.87, '#3498DB');
            
            // Decomposition
            this.drawArrow(width * 0.48, height * 0.88, width * 0.35, height * 0.55, '#8B4513', 'Decomposition');
            this.drawArrow(width * 0.73, height * 0.9, width * 0.38, height * 0.58, '#8B4513', 'Decomposition');
            
            // Decomposers
            this.addLabel('Decomposers', width * 0.15, height * 0.6, '#8B4513');
            
            // Denitrification
            this.drawArrow(width * 0.32, height * 0.48, width * 0.48, height * 0.2, '#E74C3C', 'Denitrification\n(Bacteria)');
            
            // Lightning fixation
            this.ctx.strokeStyle = '#FFD700';
            this.ctx.lineWidth = 3;
            this.ctx.setLineDash([2, 2]);
            this.drawArrow(width * 0.6, height * 0.15, width * 0.7, height * 0.7, '#FFD700', 'Lightning');
            this.ctx.setLineDash([]);

            // Industrial fixation (Haber process)
            this.ctx.strokeStyle = '#95A5A6';
            this.ctx.lineWidth = 2;
            this.drawArrow(width * 0.7, height * 0.15, width * 0.72, height * 0.72, '#95A5A6', 'Industrial');
            
            // Key bacteria note
            this.ctx.font = '10px Arial';
            this.ctx.fillStyle = '#7F8C8D';
            this.ctx.textAlign = 'left';
            this.ctx.fillText('Key bacteria:', width * 0.02, height * 0.94);
            this.ctx.fillText('• Fixation: Rhizobium, Azotobacter', width * 0.05, height * 0.97);
            this.ctx.fillText('• Nitrification: Nitrosomonas, Nitrobacter', width * 0.4, height * 0.97);
            this.ctx.fillText('• Denitrification: Pseudomonas', width * 0.75, height * 0.97);
        }

        if(showInset) {
            this.drawInset(width * 0.65, height * 0.02, width * 0.33, height * 0.25, insetType);
        }

        this.ctx.restore();
    }

    renderWaterCycleDiagram(x, y, width, height, options = {}) {
        const { 
            showLabels = true,
            showInset = false,
            insetType = 'groundwater-flow'
        } = options;

        this.ctx.save();
        this.ctx.translate(x - width/2, y - height/2);

        AnatomicalShapes.drawWaterCycle(this.ctx, width * 0.05, height * 0.1, 
            width * 0.9, height * 0.8);

        if(showLabels) {
            this.addLabel('Water Cycle (Hydrological Cycle)', width * 0.5, height * 0.05, '#2C3E50');
            
            // Sun
            this.addLabel('☀ Sun\n(Energy Source)', width * 0.15, height * 0.15, '#FFD700');
            
            // Evaporation from ocean
            this.drawArrow(width * 0.75, height * 0.7, width * 0.65, height * 0.4, '#3498DB', 'Evaporation');
            
            // Ocean/Water bodies
            this.addLabel('Ocean\n(97% of water)', width * 0.8, height * 0.75, '#1F618D');
            
            // Transpiration from plants
            this.drawArrow(width * 0.25, height * 0.65, width * 0.35, height * 0.45, '#2ECC71', 'Transpiration');
            
            // Plants
            this.addLabel('Plants', width * 0.2, height * 0.7, '#2ECC71');
            
            // Condensation
            this.addLabel('Condensation', width * 0.5, height * 0.25, '#95A5A6');
            
            // Clouds
            this.addLabel('☁ Clouds', width * 0.5, height * 0.3, '#BDC3C7');
            
            // Precipitation over land
            this.drawArrow(width * 0.42, height * 0.35, width * 0.3, height * 0.6, '#3498DB', 'Precipitation\n(Rain/Snow)');
            
            // Precipitation over ocean
            this.drawArrow(width * 0.58, height * 0.35, width * 0.72, height * 0.65, '#3498DB', 'Precipitation');
            
            // Surface runoff
            this.drawArrow(width * 0.28, height * 0.68, width * 0.7, height * 0.72, '#5DADE2', 'Surface Runoff');
            
            // Infiltration/Percolation
            this.drawArrow(width * 0.25, height * 0.72, width * 0.25, height * 0.85, '#1F618D', 'Infiltration');
            
            // Groundwater
            this.addLabel('Groundwater', width * 0.3, height * 0.88, '#34495E');
            
            // Groundwater flow to ocean
            this.drawArrow(width * 0.35, height * 0.88, width * 0.7, height * 0.78, '#2C3E50', 'Groundwater Flow');
            
            // Rivers/Streams
            this.addLabel('Rivers', width * 0.5, height * 0.72, '#5DADE2');
            
            // Ice/Snow
            this.addLabel('Ice/Snow\n(2% of water)', width * 0.1, height * 0.55, '#E8F8F5');
            
            // Sublimation
            this.ctx.strokeStyle = '#AED6F1';
            this.ctx.lineWidth = 2;
            this.ctx.setLineDash([3, 3]);
            this.drawArrow(width * 0.12, height * 0.58, width * 0.25, height * 0.4, '#AED6F1', 'Sublimation');
            this.ctx.setLineDash([]);

            // Water distribution
            this.ctx.font = '10px Arial';
            this.ctx.fillStyle = '#7F8C8D';
            this.ctx.textAlign = 'left';
            this.ctx.fillText('Freshwater: ~3% (most in ice caps)', width * 0.02, height * 0.97);
        }

        if(showInset) {
            this.drawInset(width * 0.02, height * 0.02, width * 0.3, height * 0.2, insetType);
        }

        this.ctx.restore();
    }

    renderPopulationGrowthDiagram(x, y, width, height, options = {}) {
        const { 
            showLabels = true,
            showBoth = true,
            showInset = false,
            insetType = 'carrying-capacity'
        } = options;

        this.ctx.save();
        this.ctx.translate(x - width/2, y - height/2);

        AnatomicalShapes.drawPopulationGrowthCurves(this.ctx, width * 0.15, height * 0.15, 
            width * 0.7, height * 0.7, showBoth);

        if(showLabels) {
            this.addLabel('Population Growth Curves', width * 0.5, height * 0.08, '#2C3E50');
            
            // Axes labels
            this.ctx.font = '12px Arial';
            this.ctx.fillStyle = '#7F8C8D';
            this.ctx.textAlign = 'center';
            
            this.ctx.save();
            this.ctx.translate(width * 0.08, height * 0.5);
            this.ctx.rotate(-Math.PI / 2);
            this.ctx.fillText('Population Size', 0, 0);
            this.ctx.restore();
            
            this.ctx.fillText('Time', width * 0.5, height * 0.92);
            
            // Exponential growth (J-curve)
            this.addLabel('Exponential Growth\n(J-Curve)', width * 0.75, height * 0.25, '#E74C3C');
            this.ctx.font = '10px Arial';
            this.ctx.fillStyle = '#7F8C8D';
            this.ctx.textAlign = 'left';
            this.ctx.fillText('• Unlimited resources', width * 0.77, height * 0.32);
            this.ctx.fillText('• No limiting factors', width * 0.77, height * 0.35);
            this.ctx.fillText('• Ideal conditions', width * 0.77, height * 0.38);
            this.ctx.fillText('• Rarely sustained', width * 0.77, height * 0.41);
            
            // Logistic growth (S-curve)
            this.addLabel('Logistic Growth\n(S-Curve)', width * 0.75, height * 0.5, '#2ECC71');
            this.ctx.fillText('• Limited resources', width * 0.77, height * 0.57);
            this.ctx.fillText('• Competition', width * 0.77, height * 0.6);
            this.ctx.fillText('• Carrying capacity (K)', width * 0.77, height * 0.63);
            this.ctx.fillText('• More realistic', width * 0.77, height * 0.66);
            
            // Carrying capacity line
            this.ctx.strokeStyle = '#3498DB';
            this.ctx.lineWidth = 2;
            this.ctx.setLineDash([5, 5]);
            this.ctx.beginPath();
            this.ctx.moveTo(width * 0.15, height * 0.45);
            this.ctx.lineTo(width * 0.85, height * 0.45);
            this.ctx.stroke();
            this.ctx.setLineDash([]);
            
            this.addLabel('Carrying Capacity (K)', width * 0.25, height * 0.42, '#3498DB', 'left');

            // Growth phases
            this.ctx.font = '11px Arial';
            this.ctx.fillStyle = '#2C3E50';
            this.ctx.textAlign = 'center';
            this.ctx.fillText('Lag', width * 0.25, height * 0.82);
            this.ctx.fillText('Exponential', width * 0.4, height * 0.65);
            this.ctx.fillText('Deceleration', width * 0.6, height * 0.52);
            this.ctx.fillText('Plateau', width * 0.75, height * 0.46);
        }

        if(showInset) {
            this.drawInset(width * 0.02, height * 0.02, width * 0.35, height * 0.25, insetType);
        }

        this.ctx.restore();
    }

    
// ============================================================================
// ANATOMICAL DIAGRAM RENDERER CLASS - CONTINUED IMPLEMENTATIONS
// ============================================================================

// ========== CARDIOVASCULAR SYSTEM ==========

renderCirculatorySystemDiagram(x, y, width, height, options = {}) {
    const {
        showLabels = true,
        circuit = 'complete',
        component = 'overview',
        showOxygenation = true,
        showInset = false,
        insetType = 'capillary-exchange'
    } = options;

    this.ctx.save();
    this.ctx.translate(x - width/2, y - height/2);

    if(circuit === 'complete') {
        // Draw complete circulatory system
        AnatomicalShapes.drawHeart(this.ctx, width * 0.4, height * 0.3, width * 0.2, height * 0.25, 'wholeheart');
        
        // Systemic circulation (red)
        this.ctx.strokeStyle = '#E74C3C';
        this.ctx.lineWidth = 4;
        this.ctx.beginPath();
        this.ctx.moveTo(width * 0.4, height * 0.4);
        this.ctx.lineTo(width * 0.2, height * 0.5);
        this.ctx.lineTo(width * 0.15, height * 0.7);
        this.ctx.stroke();

        // Pulmonary circulation (blue)
        this.ctx.strokeStyle = '#8B4789';
        this.ctx.beginPath();
        this.ctx.moveTo(width * 0.6, height * 0.35);
        this.ctx.lineTo(width * 0.75, height * 0.25);
        this.ctx.lineTo(width * 0.8, height * 0.3);
        this.ctx.stroke();

        // Lungs
        AnatomicalShapes.drawLung(this.ctx, width * 0.7, height * 0.15, width * 0.12, height * 0.2, 'left');
        AnatomicalShapes.drawLung(this.ctx, width * 0.85, height * 0.15, width * 0.12, height * 0.2, 'right');

        if(showLabels) {
            this.addLabel('Pulmonary\nCirculation', width * 0.75, height * 0.15, '#8B4789');
            this.addLabel('Systemic\nCirculation', width * 0.2, height * 0.6, '#E74C3C');
            this.addLabel('Heart', width * 0.5, height * 0.25, '#2C3E50');
        }
    } else if(circuit === 'systemic') {
        // Systemic circulation only
        AnatomicalShapes.drawHeart(this.ctx, width * 0.35, height * 0.2, width * 0.3, height * 0.3, 'wholeheart');
        
        this.ctx.strokeStyle = '#E74C3C';
        this.ctx.lineWidth = 6;
        // Arteries
        this.ctx.beginPath();
        this.ctx.moveTo(width * 0.5, height * 0.35);
        this.ctx.bezierCurveTo(width * 0.3, height * 0.5, width * 0.2, height * 0.7, width * 0.25, height * 0.9);
        this.ctx.stroke();

        // Veins (blue)
        this.ctx.strokeStyle = '#8B4789';
        this.ctx.beginPath();
        this.ctx.moveTo(width * 0.75, height * 0.9);
        this.ctx.bezierCurveTo(width * 0.8, height * 0.7, width * 0.7, height * 0.5, width * 0.5, height * 0.35);
        this.ctx.stroke();

        if(showLabels) {
            this.addLabel('Arteries\n(Oxygenated)', width * 0.15, height * 0.7, '#E74C3C', 'left');
            this.addLabel('Veins\n(Deoxygenated)', width * 0.85, height * 0.7, '#8B4789', 'right');
        }
    } else if(circuit === 'pulmonary') {
        // Pulmonary circulation
        AnatomicalShapes.drawHeart(this.ctx, width * 0.35, height * 0.5, width * 0.3, height * 0.3, 'wholeheart');
        AnatomicalShapes.drawLung(this.ctx, width * 0.15, height * 0.1, width * 0.15, height * 0.25, 'left');
        AnatomicalShapes.drawLung(this.ctx, width * 0.8, height * 0.1, width * 0.15, height * 0.25, 'right');

        // Pulmonary arteries (blue - deoxygenated)
        this.ctx.strokeStyle = '#8B4789';
        this.ctx.lineWidth = 5;
        this.ctx.beginPath();
        this.ctx.moveTo(width * 0.5, height * 0.5);
        this.ctx.lineTo(width * 0.25, height * 0.2);
        this.ctx.stroke();
        this.ctx.beginPath();
        this.ctx.moveTo(width * 0.5, height * 0.5);
        this.ctx.lineTo(width * 0.85, height * 0.2);
        this.ctx.stroke();

        // Pulmonary veins (red - oxygenated)
        this.ctx.strokeStyle = '#E74C3C';
        this.ctx.beginPath();
        this.ctx.moveTo(width * 0.2, height * 0.35);
        this.ctx.lineTo(width * 0.4, height * 0.55);
        this.ctx.stroke();
        this.ctx.beginPath();
        this.ctx.moveTo(width * 0.9, height * 0.35);
        this.ctx.lineTo(width * 0.6, height * 0.55);
        this.ctx.stroke();

        if(showLabels) {
            this.addLabel('Pulmonary\nArteries', width * 0.5, height * 0.35, '#8B4789');
            this.addLabel('Pulmonary\nVeins', width * 0.5, height * 0.7, '#E74C3C');
        }
    }

    if(showInset) {
        this.drawInset(width * 0.55, height * 0.05, width * 0.4, height * 0.3, insetType);
    }

    this.ctx.restore();
}

renderBloodVesselComparison(x, y, width, height, options = {}) {
    const {
        showLabels = true,
        vesselType = 'all',
        layer = 'complete',
        showInset = false,
        insetType = 'pressure-gradient'
    } = options;

    this.ctx.save();
    this.ctx.translate(x - width/2, y - height/2);

    if(vesselType === 'all') {
        // Draw all three vessel types
        const vesselWidth = width * 0.25;
        
        // Artery
        this.drawVesselCrossSection(width * 0.15, height * 0.5, vesselWidth, 'artery', layer);
        if(showLabels) {
            this.addLabel('Artery', width * 0.15, height * 0.85, '#E74C3C');
            this.addLabel('Thick walls\nHigh pressure', width * 0.15, height * 0.92, '#7F8C8D', 'center');
        }

        // Vein
        this.drawVesselCrossSection(width * 0.5, height * 0.5, vesselWidth, 'vein', layer);
        if(showLabels) {
            this.addLabel('Vein', width * 0.5, height * 0.85, '#8B4789');
            this.addLabel('Thin walls\nValves\nLow pressure', width * 0.5, height * 0.92, '#7F8C8D', 'center');
        }

        // Capillary
        this.drawVesselCrossSection(width * 0.85, height * 0.5, vesselWidth * 0.6, 'capillary', layer);
        if(showLabels) {
            this.addLabel('Capillary', width * 0.85, height * 0.85, '#FF6347');
            this.addLabel('One cell thick\nGas exchange', width * 0.85, height * 0.92, '#7F8C8D', 'center');
        }
    } else {
        // Single vessel type
        this.drawVesselCrossSection(width * 0.5, height * 0.5, width * 0.6, vesselType, layer);
        
        if(showLabels) {
            const vesselNames = {
                'artery': 'Artery',
                'vein': 'Vein',
                'capillary': 'Capillary',
                'arteriole': 'Arteriole',
                'venule': 'Venule'
            };
            this.addLabel(vesselNames[vesselType], width * 0.5, height * 0.15, '#2C3E50');
        }
    }

    if(showInset) {
        this.drawInset(width * 0.55, height * 0.05, width * 0.4, height * 0.3, insetType);
    }

    this.ctx.restore();
}

drawVesselCrossSection(x, y, size, type, layer) {
    this.ctx.save();
    this.ctx.translate(x, y);

    const colors = {
        'artery': { outer: '#C0392B', middle: '#E74C3C', inner: '#EC7063' },
        'vein': { outer: '#6C3483', middle: '#8B4789', inner: '#A569BD' },
        'capillary': { outer: '#C0392B', middle: '#E74C3C', inner: '#EC7063' }
    };

    const color = colors[type] || colors['artery'];

    if(type === 'capillary') {
        // Single layer
        this.ctx.strokeStyle = color.outer;
        this.ctx.lineWidth = 3;
        this.ctx.beginPath();
        this.ctx.arc(0, 0, size * 0.3, 0, Math.PI * 2);
        this.ctx.stroke();

        this.ctx.fillStyle = '#FFF5F5';
        this.ctx.fill();
    } else {
        // Three layers
        if(layer === 'complete' || layer === 'tunica-externa') {
            this.ctx.fillStyle = color.outer;
            this.ctx.beginPath();
            this.ctx.arc(0, 0, size * 0.5, 0, Math.PI * 2);
            this.ctx.fill();
        }

        if(layer === 'complete' || layer === 'tunica-media') {
            const mediaThickness = type === 'artery' ? 0.4 : 0.45;
            this.ctx.fillStyle = color.middle;
            this.ctx.beginPath();
            this.ctx.arc(0, 0, size * mediaThickness, 0, Math.PI * 2);
            this.ctx.fill();
        }

        if(layer === 'complete' || layer === 'tunica-intima') {
            this.ctx.fillStyle = color.inner;
            this.ctx.beginPath();
            this.ctx.arc(0, 0, size * 0.25, 0, Math.PI * 2);
            this.ctx.fill();
        }

        // Lumen
        this.ctx.fillStyle = type === 'artery' ? '#FFEBEE' : '#F3E5F5';
        this.ctx.beginPath();
        this.ctx.arc(0, 0, size * 0.2, 0, Math.PI * 2);
        this.ctx.fill();

        // Valve for vein
        if(type === 'vein' && layer === 'complete') {
            this.ctx.strokeStyle = '#6C3483';
            this.ctx.lineWidth = 2;
            this.ctx.beginPath();
            this.ctx.moveTo(-size * 0.15, 0);
            this.ctx.quadraticCurveTo(0, -size * 0.1, size * 0.15, 0);
            this.ctx.stroke();
        }
    }

    this.ctx.restore();
}

renderHeartValvesDiagram(x, y, width, height, options = {}) {
    const {
        showLabels = true,
        valve = 'all',
        state = 'both',
        showInset = false,
        insetType = 'valve-mechanism'
    } = options;

    this.ctx.save();
    this.ctx.translate(x - width/2, y - height/2);

    if(valve === 'all') {
        // Draw all four valves
        const valveSize = width * 0.18;
        const spacing = width * 0.25;

        // Tricuspid
        this.drawValve(width * 0.2, height * 0.3, valveSize, 'tricuspid', state === 'both' ? 'open' : state);
        if(showLabels) this.addLabel('Tricuspid\nValve', width * 0.2, height * 0.5, '#8B4789');

        // Pulmonary
        this.drawValve(width * 0.5, height * 0.3, valveSize, 'pulmonary', state === 'both' ? 'closed' : state);
        if(showLabels) this.addLabel('Pulmonary\nValve', width * 0.5, height * 0.5, '#5DADE2');

        // Mitral
        this.drawValve(width * 0.2, height * 0.7, valveSize, 'mitral', state === 'both' ? 'open' : state);
        if(showLabels) this.addLabel('Mitral\nValve', width * 0.2, height * 0.9, '#E74C3C');

        // Aortic
        this.drawValve(width * 0.5, height * 0.7, valveSize, 'aortic', state === 'both' ? 'closed' : state);
        if(showLabels) this.addLabel('Aortic\nValve', width * 0.5, height * 0.9, '#C0392B');

        // Legend
        if(state === 'both') {
            this.drawLegend(width * 0.65, height * 0.4, [
                { color: '#4CAF50', label: 'Open' },
                { color: '#E74C3C', label: 'Closed' }
            ]);
        }
    } else {
        // Single valve view
        this.drawValve(width * 0.5, height * 0.5, width * 0.4, valve, state === 'both' ? 'open' : state);
        
        if(state === 'both') {
            this.drawValve(width * 0.25, height * 0.5, width * 0.3, valve, 'open');
            this.drawValve(width * 0.75, height * 0.5, width * 0.3, valve, 'closed');
            if(showLabels) {
                this.addLabel('Open', width * 0.25, height * 0.85, '#4CAF50');
                this.addLabel('Closed', width * 0.75, height * 0.85, '#E74C3C');
            }
        }
    }

    if(showInset) {
        this.drawInset(width * 0.55, height * 0.05, width * 0.4, height * 0.3, insetType);
    }

    this.ctx.restore();
}

drawValve(x, y, size, type, state) {
    this.ctx.save();
    this.ctx.translate(x, y);

    const cusps = type === 'tricuspid' ? 3 : type === 'mitral' ? 2 : 3;
    const isOpen = state === 'open';

    // Valve ring
    this.ctx.strokeStyle = '#34495E';
    this.ctx.lineWidth = 3;
    this.ctx.beginPath();
    this.ctx.arc(0, 0, size * 0.5, 0, Math.PI * 2);
    this.ctx.stroke();

    // Cusps/leaflets
    this.ctx.fillStyle = isOpen ? 'rgba(76, 175, 80, 0.6)' : 'rgba(231, 76, 60, 0.6)';
    this.ctx.strokeStyle = isOpen ? '#4CAF50' : '#E74C3C';
    this.ctx.lineWidth = 2;

    for(let i = 0; i < cusps; i++) {
        const angle = (Math.PI * 2 / cusps) * i;
        const startX = Math.cos(angle) * size * 0.5;
        const startY = Math.sin(angle) * size * 0.5;
        const endX = Math.cos(angle + Math.PI * 2 / cusps) * size * 0.5;
        const endY = Math.sin(angle + Math.PI * 2 / cusps) * size * 0.5;

        this.ctx.beginPath();
        if(isOpen) {
            // Flat against wall
            this.ctx.moveTo(startX, startY);
            this.ctx.lineTo(endX, endY);
            this.ctx.lineTo(endX * 0.9, endY * 0.9);
            this.ctx.lineTo(startX * 0.9, startY * 0.9);
        } else {
            // Closed in center
            this.ctx.moveTo(startX, startY);
            this.ctx.quadraticCurveTo(0, 0, endX, endY);
            this.ctx.lineTo(endX * 0.7, endY * 0.7);
            this.ctx.quadraticCurveTo(0, 0, startX * 0.7, startY * 0.7);
        }
        this.ctx.closePath();
        this.ctx.fill();
        this.ctx.stroke();
    }

    this.ctx.restore();
}

// ========== DIGESTIVE SYSTEM ==========

renderCompleteDigestiveSystemDiagram(x, y, width, height, options = {}) {
    const {
        showLabels = true,
        region = 'complete',
        process = 'anatomy',
        showPath = true,
        showInset = false,
        insetType = 'enzyme-breakdown'
    } = options;

    this.ctx.save();
    this.ctx.translate(x - width/2, y - height/2);

    if(region === 'complete') {
        // Mouth
        this.ctx.fillStyle = '#FFE4E1';
        this.ctx.beginPath();
        this.ctx.arc(width * 0.5, height * 0.05, width * 0.08, 0, Math.PI * 2);
        this.ctx.fill();
        this.ctx.strokeStyle = '#FF6B6B';
        this.ctx.lineWidth = 2;
        this.ctx.stroke();

        // Esophagus
        this.ctx.fillStyle = '#FFB6C1';
        this.ctx.fillRect(width * 0.45, height * 0.1, width * 0.1, height * 0.15);

        // Stomach
        AnatomicalShapes.drawStomach(this.ctx, width * 0.35, height * 0.25, width * 0.3, height * 0.15);

        // Small intestine
        this.drawSmallIntestine(width * 0.2, height * 0.45, width * 0.6, height * 0.25);

        // Large intestine
        this.drawLargeIntestine(width * 0.15, height * 0.4, width * 0.7, height * 0.5);

        // Liver
        this.ctx.fillStyle = '#8B4513';
        this.ctx.fillRect(width * 0.6, height * 0.2, width * 0.25, height * 0.15);
        
        // Pancreas
        this.ctx.fillStyle = '#DEB887';
        this.ctx.fillRect(width * 0.55, height * 0.35, width * 0.15, height * 0.05);

        if(showLabels) {
            this.addLabel('Mouth', width * 0.5, height * 0.02, '#2C3E50');
            this.addLabel('Esophagus', width * 0.35, height * 0.17, '#2C3E50', 'right');
            this.addLabel('Stomach', width * 0.2, height * 0.32, '#2C3E50', 'right');
            this.addLabel('Liver', width * 0.72, height * 0.15, '#2C3E50');
            this.addLabel('Pancreas', width * 0.62, height * 0.33, '#2C3E50', 'center');
            this.addLabel('Small\nIntestine', width * 0.15, height * 0.57, '#2C3E50', 'right');
            this.addLabel('Large\nIntestine', width * 0.1, height * 0.65, '#2C3E50', 'right');
        }

        if(showPath) {
            this.drawArrow(width * 0.5, height * 0.13, width * 0.5, height * 0.23, '#FF6B6B', '1', 6);
            this.drawArrow(width * 0.5, height * 0.4, width * 0.5, height * 0.45, '#FF6B6B', '2', 6);
        }
    } else if(region === 'upper-gi') {
        // Mouth, esophagus, stomach
        this.ctx.fillStyle = '#FFE4E1';
        this.ctx.beginPath();
        this.ctx.arc(width * 0.5, height * 0.1, width * 0.1, 0, Math.PI * 2);
        this.ctx.fill();

        this.ctx.fillStyle = '#FFB6C1';
        this.ctx.fillRect(width * 0.45, height * 0.2, width * 0.1, height * 0.25);

        AnatomicalShapes.drawStomach(this.ctx, width * 0.25, height * 0.5, width * 0.5, height * 0.35);

        if(showLabels) {
            this.addLabel('Oral Cavity', width * 0.5, height * 0.05, '#2C3E50');
            this.addLabel('Esophagus', width * 0.3, height * 0.32, '#2C3E50', 'right');
            this.addLabel('Stomach', width * 0.5, height * 0.9, '#2C3E50');
        }
    }

    if(showInset) {
        this.drawInset(width * 0.55, height * 0.05, width * 0.4, height * 0.3, insetType);
    }

    this.ctx.restore();
}

drawSmallIntestine(x, y, width, height) {
    this.ctx.save();
    this.ctx.fillStyle = '#FFA07A';
    this.ctx.strokeStyle = '#FF6347';
    this.ctx.lineWidth = 2;

    // Coiled appearance
    const loops = 8;
    const loopHeight = height / loops;
    
    for(let i = 0; i < loops; i++) {
        const yPos = y + i * loopHeight;
        const direction = i % 2 === 0 ? 1 : -1;
        
        this.ctx.beginPath();
        this.ctx.moveTo(x, yPos);
        this.ctx.bezierCurveTo(
            x + direction * width * 0.3, yPos + loopHeight * 0.3,
            x + direction * width * 0.3, yPos + loopHeight * 0.7,
            x, yPos + loopHeight
        );
        this.ctx.stroke();
    }

    this.ctx.restore();
}

drawLargeIntestine(x, y, width, height) {
    this.ctx.save();
    this.ctx.strokeStyle = '#CD853F';
    this.ctx.lineWidth = 15;
    this.ctx.lineCap = 'round';
    this.ctx.lineJoin = 'round';

    this.ctx.beginPath();
    // Ascending colon
    this.ctx.moveTo(x + width * 0.7, y + height * 0.3);
    this.ctx.lineTo(x + width * 0.7, y);
    // Transverse colon
    this.ctx.lineTo(x + width * 0.3, y);
    // Descending colon
    this.ctx.lineTo(x + width * 0.3, y + height * 0.8);
    // Sigmoid colon
    this.ctx.quadraticCurveTo(x + width * 0.4, y + height, x + width * 0.5, y + height * 0.9);
    this.ctx.stroke();

    this.ctx.restore();
}

renderDigestiveOrganComparison(x, y, width, height, options = {}) {
    const {
        showLabels = true,
        organ = 'all',
        function: organFunction = 'structure',
        showInset = false,
        insetType = 'gastric-glands'
    } = options;

    this.ctx.save();
    this.ctx.translate(x - width/2, y - height/2);

    if(organ === 'all') {
        // Stomach
        AnatomicalShapes.drawStomach(this.ctx, width * 0.15, height * 0.2, width * 0.25, height * 0.2);
        if(showLabels) this.addLabel('Stomach\n(Churning)', width * 0.27, height * 0.45, '#FF6B6B');

        // Liver
        this.ctx.fillStyle = '#8B4513';
        this.ctx.fillRect(width * 0.45, height * 0.15, width * 0.2, height * 0.15);
        if(showLabels) this.addLabel('Liver\n(Bile)', width * 0.55, height * 0.35, '#8B4513');

        // Pancreas
        this.ctx.fillStyle = '#DEB887';
        this.ctx.beginPath();
        this.ctx.ellipse(width * 0.25, height * 0.6, width * 0.15, height * 0.08, 0, 0, Math.PI * 2);
        this.ctx.fill();
        if(showLabels) this.addLabel('Pancreas\n(Enzymes)', width * 0.25, height * 0.75, '#DEB887');

        // Small intestine section
        this.ctx.fillStyle = '#FFA07A';
        this.ctx.fillRect(width * 0.55, height * 0.5, width * 0.3, height * 0.15);
        // Villi
        for(let i = 0; i < 5; i++) {
            this.ctx.fillStyle = '#FF8C69';
            const vx = width * 0.58 + i * width * 0.05;
            this.ctx.fillRect(vx, height * 0.5, width * 0.02, height * 0.15);
        }
        if(showLabels) this.addLabel('Small Intestine\n(Absorption)', width * 0.7, height * 0.7, '#FF6347');
    } else {
        // Single organ view
        if(organ === 'stomach') {
            AnatomicalShapes.drawStomach(this.ctx, width * 0.2, height * 0.2, width * 0.6, height * 0.5);
            if(organFunction === 'secretion') {
                // Show gastric glands
                for(let i = 0; i < 6; i++) {
                    this.ctx.fillStyle = '#FF6B6B';
                    this.ctx.fillRect(width * 0.3 + i * width * 0.08, height * 0.4, width * 0.02, height * 0.15);
                }
            }
        }
    }

    if(showInset) {
        this.drawInset(width * 0.55, height * 0.05, width * 0.4, height * 0.3, insetType);
    }

    this.ctx.restore();
}

// ========== RESPIRATORY SYSTEM ==========

renderRespiratorySystemDiagram(x, y, width, height, options = {}) {
    const {
        showLabels = true,
        component = 'complete',
        process = 'structure',
        showGasExchange = true,
        showInset = false,
        insetType = 'gas-exchange'
    } = options;

    this.ctx.save();
    this.ctx.translate(x - width/2, y - height/2);

    if(component === 'complete') {
        // Trachea
        this.ctx.fillStyle = '#D3D3D3';
        this.ctx.fillRect(width * 0.45, height * 0.05, width * 0.1, height * 0.25);
        
        // Tracheal rings
        this.ctx.strokeStyle = '#808080';
        this.ctx.lineWidth = 2;
        for(let i = 0; i < 5; i++) {
            this.ctx.beginPath();
            this.ctx.arc(width * 0.5, height * 0.08 + i * height * 0.05, width * 0.06, Math.PI, 0);
            this.ctx.stroke();
        }

        // Bronchi
        this.ctx.strokeStyle = '#A9A9A9';
        this.ctx.lineWidth = 8;
        this.ctx.beginPath();
        this.ctx.moveTo(width * 0.5, height * 0.3);
        this.ctx.lineTo(width * 0.3, height * 0.4);
        this.ctx.stroke();
        this.ctx.beginPath();
        this.ctx.moveTo(width * 0.5, height * 0.3);
        this.ctx.lineTo(width * 0.7, height * 0.4);
        this.ctx.stroke();

        // Lungs
        AnatomicalShapes.drawLung(this.ctx, width * 0.1, height * 0.35, width * 0.35, height * 0.5, 'left');
        AnatomicalShapes.drawLung(this.ctx, width *0.55, height * 0.35, width * 0.35, height * 0.5, 'right');

        // Diaphragm
        this.ctx.strokeStyle = '#C44569';
        this.ctx.lineWidth = 4;
        this.ctx.beginPath();
        this.ctx.moveTo(width * 0.1, height * 0.9);
        this.ctx.quadraticCurveTo(width * 0.5, height * 0.95, width * 0.9, height * 0.9);
        this.ctx.stroke();

        if(showLabels) {
            this.addLabel('Trachea', width * 0.6, height * 0.15, '#2C3E50', 'left');
            this.addLabel('Left Bronchus', width * 0.25, height * 0.37, '#2C3E50', 'left');
            this.addLabel('Right Bronchus', width * 0.75, height * 0.37, '#2C3E50', 'right');
            this.addLabel('Left Lung', width * 0.27, height * 0.55, '#2C3E50');
            this.addLabel('Right Lung', width * 0.72, height * 0.55, '#2C3E50');
            this.addLabel('Diaphragm', width * 0.5, height * 0.95, '#C44569');
        }

        if(process === 'inhalation') {
            // Show diaphragm flattened
            this.ctx.strokeStyle = 'rgba(196, 69, 105, 0.5)';
            this.ctx.setLineDash([5, 5]);
            this.ctx.beginPath();
            this.ctx.moveTo(width * 0.1, height * 0.95);
            this.ctx.lineTo(width * 0.9, height * 0.95);
            this.ctx.stroke();
            this.ctx.setLineDash([]);
            
            this.drawArrow(width * 0.5, height * 0.02, width * 0.5, height * 0.1, '#4A90E2', 'Air In', 8);
        } else if(process === 'exhalation') {
            this.drawArrow(width * 0.5, height * 0.1, width * 0.5, height * 0.02, '#E74C3C', 'Air Out', 8);
        }

        if(showGasExchange) {
            // Small arrows showing O2 and CO2 exchange
            this.ctx.font = '10px Arial';
            this.ctx.fillStyle = '#4A90E2';
            this.ctx.fillText('O₂', width * 0.2, height * 0.6);
            this.ctx.fillStyle = '#E74C3C';
            this.ctx.fillText('CO₂', width * 0.35, height * 0.6);
        }

    } else if(component === 'trachea') {
        // Detailed trachea view
        this.ctx.fillStyle = '#D3D3D3';
        this.ctx.fillRect(width * 0.35, height * 0.1, width * 0.3, height * 0.7);
        
        // C-shaped cartilage rings
        this.ctx.strokeStyle = '#808080';
        this.ctx.lineWidth = 4;
        for(let i = 0; i < 12; i++) {
            this.ctx.beginPath();
            this.ctx.arc(width * 0.5, height * 0.12 + i * height * 0.06, width * 0.15, Math.PI, 0);
            this.ctx.stroke();
        }

        if(showLabels) {
            this.addLabel('Cartilage Rings', width * 0.75, height * 0.3, '#2C3E50', 'left');
            this.addLabel('Posterior Wall', width * 0.2, height * 0.5, '#2C3E50', 'right');
        }

    } else if(component === 'bronchi') {
        // Bronchial tree
        this.ctx.strokeStyle = '#A9A9A9';
        this.ctx.lineWidth = 10;
        AnatomicalShapes.drawBronchialTree(this.ctx, width * 0.5, height * 0.1, width * 0.4, height * 0.7, 4);

        if(showLabels) {
            this.addLabel('Primary Bronchi', width * 0.5, height * 0.15, '#2C3E50');
            this.addLabel('Secondary Bronchi', width * 0.3, height * 0.35, '#2C3E50', 'right');
            this.addLabel('Tertiary Bronchi', width * 0.2, height * 0.55, '#2C3E50', 'right');
        }

    } else if(component === 'bronchioles') {
        // Bronchioles branching to alveoli
        this.ctx.strokeStyle = '#C0C0C0';
        this.ctx.lineWidth = 3;
        
        const centerX = width * 0.5;
        const centerY = height * 0.3;
        
        for(let i = 0; i < 6; i++) {
            const angle = (Math.PI / 3) * i;
            const endX = centerX + Math.cos(angle) * width * 0.2;
            const endY = centerY + Math.sin(angle) * height * 0.2;
            
            this.ctx.beginPath();
            this.ctx.moveTo(centerX, centerY);
            this.ctx.lineTo(endX, endY);
            this.ctx.stroke();
            
            // Alveoli clusters at ends
            for(let j = 0; j < 3; j++) {
                this.ctx.fillStyle = '#FFB6D9';
                this.ctx.beginPath();
                this.ctx.arc(endX + (Math.random() - 0.5) * 20, endY + (Math.random() - 0.5) * 20, 8, 0, Math.PI * 2);
                this.ctx.fill();
            }
        }

        if(showLabels) {
            this.addLabel('Terminal\nBronchioles', width * 0.5, height * 0.2, '#2C3E50');
            this.addLabel('Alveolar\nSacs', width * 0.75, height * 0.5, '#2C3E50', 'left');
        }

    } else if(component === 'leftLung') {
        AnatomicalShapes.drawLung(this.ctx, width * 0.2, height * 0.2, width * 0.6, height * 0.6, 'left');
        
        if(showLabels) {
            this.addLabel('Left Lung\n(2 lobes)', width * 0.5, height * 0.1, '#2C3E50');
            this.addLabel('Superior Lobe', width * 0.5, height * 0.35, '#2C3E50');
            this.addLabel('Inferior Lobe', width * 0.5, height * 0.65, '#2C3E50');
        }

    } else if(component === 'rightLung') {
        AnatomicalShapes.drawLung(this.ctx, width * 0.2, height * 0.2, width * 0.6, height * 0.6, 'right');
        
        if(showLabels) {
            this.addLabel('Right Lung\n(3 lobes)', width * 0.5, height * 0.1, '#2C3E50');
            this.addLabel('Superior Lobe', width * 0.5, height * 0.3, '#2C3E50');
            this.addLabel('Middle Lobe', width * 0.5, height * 0.5, '#2C3E50');
            this.addLabel('Inferior Lobe', width * 0.5, height * 0.7, '#2C3E50');
        }

    } else if(component === 'alveoli') {
        // Detailed alveoli view
        const alveolarSac = {
            x: width * 0.5,
            y: height * 0.4,
            radius: width * 0.15
        };

        // Draw cluster of alveoli
        for(let i = 0; i < 12; i++) {
            const angle = (Math.PI * 2 / 12) * i;
            const ax = alveolarSac.x + Math.cos(angle) * alveolarSac.radius;
            const ay = alveolarSac.y + Math.sin(angle) * alveolarSac.radius;
            
            this.ctx.fillStyle = '#FFB6D9';
            this.ctx.strokeStyle = '#FF8FB6';
            this.ctx.lineWidth = 2;
            this.ctx.beginPath();
            this.ctx.arc(ax, ay, width * 0.06, 0, Math.PI * 2);
            this.ctx.fill();
            this.ctx.stroke();
            
            // Capillaries around alveoli
            this.ctx.strokeStyle = '#E74C3C';
            this.ctx.lineWidth = 1;
            this.ctx.beginPath();
            this.ctx.arc(ax, ay, width * 0.065, 0, Math.PI * 2);
            this.ctx.stroke();
        }

        if(showLabels) {
            this.addLabel('Alveoli', width * 0.5, height * 0.15, '#2C3E50');
            this.addLabel('Capillary\nNetwork', width * 0.8, height * 0.4, '#E74C3C', 'left');
        }

        if(showGasExchange) {
            this.drawArrow(width * 0.2, height * 0.5, width * 0.35, height * 0.45, '#4A90E2', 'O₂', 6);
            this.drawArrow(width * 0.35, height * 0.35, width * 0.2, height * 0.3, '#E74C3C', 'CO₂', 6);
        }

    } else if(component === 'diaphragm') {
        // Diaphragm detail
        this.ctx.fillStyle = '#C44569';
        this.ctx.beginPath();
        this.ctx.moveTo(width * 0.1, height * 0.5);
        this.ctx.quadraticCurveTo(width * 0.5, height * 0.55, width * 0.9, height * 0.5);
        this.ctx.lineTo(width * 0.9, height * 0.6);
        this.ctx.quadraticCurveTo(width * 0.5, height * 0.65, width * 0.1, height * 0.6);
        this.ctx.closePath();
        this.ctx.fill();

        // Muscle fibers
        this.ctx.strokeStyle = '#8B2252';
        this.ctx.lineWidth = 2;
        for(let i = 0; i < 10; i++) {
            const x1 = width * (0.15 + i * 0.07);
            this.ctx.beginPath();
            this.ctx.moveTo(x1, height * 0.5);
            this.ctx.lineTo(x1, height * 0.6);
            this.ctx.stroke();
        }

        if(showLabels) {
            this.addLabel('Diaphragm Muscle', width * 0.5, height * 0.45, '#2C3E50');
            this.addLabel('Relaxed Position', width * 0.5, height * 0.7, '#7F8C8D');
        }
    }

    if(showInset) {
        this.drawInset(width * 0.55, height * 0.05, width * 0.4, height * 0.3, insetType);
    }

    this.ctx.restore();
}

// ========== NERVOUS SYSTEM ==========

renderCompleteNervousSystemDiagram(x, y, width, height, options = {}) {
    const {
        showLabels = true,
        system = 'complete',
        pathway = 'overview',
        showSignal = false,
        showInset = false,
        insetType = 'gray-white-matter'
    } = options;

    this.ctx.save();
    this.ctx.translate(x - width/2, y - height/2);

    if(system === 'complete' || system === 'cns') {
        // Brain
        this.ctx.fillStyle = '#E8B4B8';
        this.ctx.beginPath();
        this.ctx.ellipse(width * 0.5, height * 0.15, width * 0.15, height * 0.1, 0, 0, Math.PI * 2);
        this.ctx.fill();
        this.ctx.strokeStyle = '#C48793';
        this.ctx.lineWidth = 2;
        this.ctx.stroke();

        // Spinal cord
        this.ctx.fillStyle = '#F5DEB3';
        this.ctx.fillRect(width * 0.45, height * 0.25, width * 0.1, height * 0.6);
        this.ctx.strokeStyle = '#D2B48C';
        this.ctx.lineWidth = 2;
        this.ctx.strokeRect(width * 0.45, height * 0.25, width * 0.1, height * 0.6);

        // Vertebrae outline
        this.ctx.strokeStyle = '#8B7355';
        this.ctx.lineWidth = 1;
        for(let i = 0; i < 12; i++) {
            const y = height * 0.25 + i * height * 0.05;
            this.ctx.beginPath();
            this.ctx.arc(width * 0.5, y, width * 0.08, 0, Math.PI * 2);
            this.ctx.stroke();
        }

        if(showLabels && system === 'complete') {
            this.addLabel('Brain', width * 0.5, height * 0.08, '#2C3E50');
            this.addLabel('Spinal Cord', width * 0.3, height * 0.55, '#2C3E50', 'right');
        }
    }

    if(system === 'complete' || system === 'pns') {
        // Peripheral nerves
        this.ctx.strokeStyle = '#FFD700';
        this.ctx.lineWidth = 2;

        // Cervical nerves
        for(let i = 0; i < 4; i++) {
            const y = height * 0.3 + i * height * 0.05;
            this.ctx.beginPath();
            this.ctx.moveTo(width * 0.45, y);
            this.ctx.lineTo(width * 0.2, y - height * 0.02);
            this.ctx.stroke();
            this.ctx.beginPath();
            this.ctx.moveTo(width * 0.55, y);
            this.ctx.lineTo(width * 0.8, y - height * 0.02);
            this.ctx.stroke();
        }

        // Lumbar nerves
        for(let i = 0; i < 5; i++) {
            const y = height * 0.55 + i * height * 0.06;
            this.ctx.beginPath();
            this.ctx.moveTo(width * 0.45, y);
            this.ctx.lineTo(width * 0.15, y + height * 0.05);
            this.ctx.stroke();
            this.ctx.beginPath();
            this.ctx.moveTo(width * 0.55, y);
            this.ctx.lineTo(width * 0.85, y + height * 0.05);
            this.ctx.stroke();
        }

        if(showLabels && system === 'pns') {
            this.addLabel('Peripheral\nNerves', width * 0.15, height * 0.4, '#FFD700', 'right');
        }
    }

    if(system === 'somatic') {
        // Somatic nervous system - voluntary
        this.ctx.strokeStyle = '#4A90E2';
        this.ctx.lineWidth = 3;
        
        for(let i = 0; i < 6; i++) {
            const y = height * 0.3 + i * height * 0.1;
            this.ctx.beginPath();
            this.ctx.moveTo(width * 0.5, y);
            this.ctx.lineTo(width * 0.8, y);
            this.ctx.stroke();
            
            // Muscle endpoint
            this.ctx.fillStyle = '#C44569';
            this.ctx.fillRect(width * 0.78, y - 5, 30, 10);
        }

        if(showLabels) {
            this.addLabel('Somatic\n(Voluntary)', width * 0.5, height * 0.15, '#4A90E2');
            this.addLabel('Skeletal\nMuscles', width * 0.85, height * 0.5, '#C44569', 'left');
        }

    } else if(system === 'autonomic') {
        // Autonomic nervous system
        const organs = [
            { name: 'Heart', y: 0.35, color: '#E74C3C' },
            { name: 'Lungs', y: 0.45, color: '#FFB6D9' },
            { name: 'Stomach', y: 0.55, color: '#FF6B6B' },
            { name: 'Intestines', y: 0.7, color: '#FFA07A' }
        ];

        organs.forEach(organ => {
            // Sympathetic (left side, red)
            this.ctx.strokeStyle = '#E74C3C';
            this.ctx.lineWidth = 2;
            this.ctx.beginPath();
            this.ctx.moveTo(width * 0.5, height * organ.y);
            this.ctx.lineTo(width * 0.25, height * organ.y);
            this.ctx.stroke();

            // Parasympathetic (right side, blue)
            this.ctx.strokeStyle = '#4A90E2';
            this.ctx.beginPath();
            this.ctx.moveTo(width * 0.5, height * organ.y);
            this.ctx.lineTo(width * 0.75, height * organ.y);
            this.ctx.stroke();

            // Organ
            this.ctx.fillStyle = organ.color;
            this.ctx.beginPath();
            this.ctx.arc(width * 0.5, height * organ.y, 15, 0, Math.PI * 2);
            this.ctx.fill();

            if(showLabels) {
                this.addLabel(organ.name, width * 0.5, height * organ.y - 25, '#2C3E50');
            }
        });

        if(showLabels) {
            this.addLabel('Sympathetic\n(Fight/Flight)', width * 0.15, height * 0.2, '#E74C3C');
            this.addLabel('Parasympathetic\n(Rest/Digest)', width * 0.85, height * 0.2, '#4A90E2', 'right');
        }
    }

    if(showSignal) {
        // Animated signal
        const signalY = height * 0.4 + Math.sin(this.currentFrame * 0.1) * height * 0.3;
        this.ctx.fillStyle = '#FFD700';
        this.ctx.beginPath();
        this.ctx.arc(width * 0.5, signalY, 5, 0, Math.PI * 2);
        this.ctx.fill();
    }

    if(showInset) {
        this.drawInset(width * 0.55, height * 0.05, width * 0.4, height * 0.3, insetType);
    }

    this.ctx.restore();
}

renderNeuronDiagram(x, y, width, height, options = {}) {
    const {
        showLabels = true,
        component = 'complete',
        state = 'resting',
        showSignal = false,
        showInset = false,
        insetType = 'action-potential'
    } = options;

    this.ctx.save();
    this.ctx.translate(x - width/2, y - height/2);

    if(component === 'complete') {
        const neuronWidth = width * 0.7;
        const neuronHeight = height * 0.6;
        const startX = width * 0.15;
        const startY = height * 0.5;

        // Dendrites
        this.ctx.strokeStyle = '#8B7355';
        this.ctx.lineWidth = 2;
        for(let i = 0; i < 5; i++) {
            const angle = -Math.PI/2 + (i - 2) * 0.3;
            const length = 40 + Math.random() * 30;
            this.ctx.beginPath();
            this.ctx.moveTo(startX, startY);
            this.ctx.lineTo(
                startX + Math.cos(angle) * length,
                startY + Math.sin(angle) * length
            );
            this.ctx.stroke();

            // Dendritic branches
            for(let j = 0; j < 2; j++) {
                const branchAngle = angle + (j === 0 ? 0.3 : -0.3);
                const branchLength = 20;
                this.ctx.beginPath();
                this.ctx.moveTo(
                    startX + Math.cos(angle) * length,
                    startY + Math.sin(angle) * length
                );
                this.ctx.lineTo(
                    startX + Math.cos(angle) * length + Math.cos(branchAngle) * branchLength,
                    startY + Math.sin(angle) * length + Math.sin(branchAngle) * branchLength
                );
                this.ctx.stroke();
            }
        }

        // Soma (cell body)
        this.ctx.fillStyle = '#E8B4B8';
        this.ctx.strokeStyle = '#C48793';
        this.ctx.lineWidth = 3;
        this.ctx.beginPath();
        this.ctx.arc(startX, startY, 30, 0, Math.PI * 2);
        this.ctx.fill();
        this.ctx.stroke();

        // Nucleus
        this.ctx.fillStyle = '#9370DB';
        this.ctx.beginPath();
        this.ctx.arc(startX, startY, 15, 0, Math.PI * 2);
        this.ctx.fill();

        // Axon
        const axonLength = neuronWidth * 0.6;
        this.ctx.strokeStyle = '#DEB887';
        this.ctx.lineWidth = 8;
        this.ctx.beginPath();
        this.ctx.moveTo(startX + 30, startY);
        this.ctx.lineTo(startX + 30 + axonLength, startY);
        this.ctx.stroke();

        // Myelin sheath
        this.ctx.fillStyle = '#FFFFFF';
        this.ctx.strokeStyle = '#D2B48C';
        this.ctx.lineWidth = 2;
        const numNodes = 4;
        const nodeSpacing = axonLength / (numNodes + 1);
        
        for(let i = 0; i < numNodes; i++) {
            const nodeX = startX + 30 + (i + 1) * nodeSpacing;
            
            // Myelin segment
            if(component !== 'nodes-of-ranvier') {
                this.ctx.fillRect(nodeX - nodeSpacing * 0.4, startY - 12, nodeSpacing * 0.35, 24);
                this.ctx.strokeRect(nodeX - nodeSpacing * 0.4, startY - 12, nodeSpacing * 0.35, 24);
            }
            
            // Node of Ranvier (gap)
            if(i < numNodes - 1) {
                this.ctx.fillStyle = '#FFD700';
                this.ctx.fillRect(nodeX - 5, startY - 5, 10, 10);
            }
        }

        // Axon terminals
        const terminalX = startX + 30 + axonLength;
        for(let i = 0; i < 3; i++) {
            const angle = -0.3 + i * 0.3;
            const termLength = 40;
            this.ctx.strokeStyle = '#8B7355';
            this.ctx.lineWidth = 3;
            this.ctx.beginPath();
            this.ctx.moveTo(terminalX, startY);
            this.ctx.lineTo(
                terminalX + Math.cos(angle) * termLength,
                startY + Math.sin(angle) * termLength
            );
            this.ctx.stroke();

            // Synaptic terminal (button)
            this.ctx.fillStyle = '#FF6B6B';
            this.ctx.beginPath();
            this.ctx.arc(
                terminalX + Math.cos(angle) * termLength,
                startY + Math.sin(angle) * termLength,
                8, 0, Math.PI * 2
            );
            this.ctx.fill();
        }

        if(showLabels) {
            this.addLabel('Dendrites', startX - 60, startY - 50, '#8B7355', 'right');
            this.addLabel('Soma', startX - 40, startY, '#2C3E50', 'right');
            this.addLabel('Nucleus', startX, startY + 25, '#9370DB');
            this.addLabel('Axon', startX + axonLength * 0.5, startY - 20, '#DEB887');
            this.addLabel('Myelin Sheath', startX + axonLength * 0.3, startY + 25, '#D2B48C');
            this.addLabel('Node of\nRanvier', startX + axonLength * 0.5, startY + 30, '#FFD700');
            this.addLabel('Axon\nTerminals', terminalX + 50, startY, '#FF6B6B', 'left');
        }

        if(showSignal) {
            // Action potential traveling along axon
            const signalX = startX + 30 + (this.currentFrame % 100) / 100 * axonLength;
            this.ctx.fillStyle = '#FFD700';
            this.ctx.shadowColor = '#FFD700';
            this.ctx.shadowBlur = 15;
            this.ctx.beginPath();
            this.ctx.arc(signalX, startY, 10, 0, Math.PI * 2);
            this.ctx.fill();
            this.ctx.shadowBlur = 0;
        }

    } else if(component === 'dendrites') {
        // Detailed dendrite view
        const baseX = width * 0.5;
        const baseY = height * 0.7;
        
        this.ctx.strokeStyle = '#8B7355';
        this.ctx.lineWidth = 4;
        this.drawDendriticTree(baseX, baseY, 0, -1, 5, 60);

        if(showLabels) {
            this.addLabel('Dendritic Tree', width * 0.5, height * 0.1, '#2C3E50');
            this.addLabel('Dendritic\nSpines', width * 0.75, height * 0.4, '#8B7355', 'left');
        }

    } else if(component === 'soma') {
        // Cell body detail
        const somaX = width * 0.5;
        const somaY = height * 0.5;
        const somaRadius = width * 0.15;

        this.ctx.fillStyle = '#E8B4B8';
        this.ctx.strokeStyle = '#C48793';
        this.ctx.lineWidth = 4;
        this.ctx.beginPath();
        this.ctx.arc(somaX, somaY, somaRadius, 0, Math.PI * 2);
        this.ctx.fill();
        this.ctx.stroke();

        // Nucleus
        this.ctx.fillStyle = '#9370DB';
        this.ctx.beginPath();
        this.ctx.arc(somaX, somaY, somaRadius * 0.5, 0, Math.PI * 2);
        this.ctx.fill();

        // Nucleolus
        this.ctx.fillStyle = '#6A5ACD';
        this.ctx.beginPath();
        this.ctx.arc(somaX, somaY, somaRadius * 0.25, 0, Math.PI * 2);
        this.ctx.fill();

        // Organelles
        for(let i = 0; i < 5; i++) {
            const angle = (Math.PI * 2 / 5) * i;
            const distance = somaRadius * 0.7;
            const orgX = somaX + Math.cos(angle) * distance;
            const orgY = somaY + Math.sin(angle) * distance;
            
            this.ctx.fillStyle = '#FF6347';
            this.ctx.beginPath();
            this.ctx.arc(orgX, orgY, 8, 0, Math.PI * 2);
            this.ctx.fill();
        }

        if(showLabels) {
            this.addLabel('Cell Membrane', somaX + somaRadius + 20, somaY, '#C48793', 'left');
            this.addLabel('Nucleus', somaX, somaY - somaRadius * 0.7, '#9370DB');
            this.addLabel('Mitochondria', somaX + somaRadius * 0.8, somaY + somaRadius * 0.5, '#FF6347', 'left');
        }

    } else if(component === 'axon') {
        // Detailed axon view
        const axonY = height * 0.5;
        
        this.ctx.strokeStyle = '#DEB887';
        this.ctx.lineWidth = 20;
        this.ctx.beginPath();
        this.ctx.moveTo(width * 0.1, axonY);
        this.ctx.lineTo(width * 0.9, axonY);
        this.ctx.stroke();

        // Myelin segments
        this.ctx.fillStyle = '#FFFFFF';
        this.ctx.strokeStyle = '#D2B48C';
        this.ctx.lineWidth = 2;
        
        for(let i = 0; i < 4; i++) {
            const segmentX = width * (0.15 + i * 0.2);
            this.ctx.fillRect(segmentX, axonY - 30, width * 0.15, 60);
            this.ctx.strokeRect(segmentX, axonY - 30, width * 0.15, 60);
            
            // Myelin layers
            for(let j = 0; j < 3; j++) {
                this.ctx.strokeStyle = '#E8D4B8';
                this.ctx.beginPath();
                this.ctx.arc(segmentX + width * 0.075, axonY, 15 + j * 5, 0, Math.PI * 2);
                this.ctx.stroke();
            }
        }

        if(showLabels) {
            this.addLabel('Axoplasm', width * 0.5, axonY - 40, '#DEB887');
            this.addLabel('Myelin Sheath', width * 0.25, axonY + 50, '#FFFFFF');
        }

    } else if(component === 'myelin') {
        // Myelin sheath cross-section
        const centerX = width * 0.5;
        const centerY = height * 0.5;
        
        // Axon core
        this.ctx.fillStyle = '#DEB887';
        this.ctx.beginPath();
        this.ctx.arc(centerX, centerY, 30, 0, Math.PI * 2);
        this.ctx.fill();

        // Myelin layers (spiraled)
        for(let i = 0; i < 8; i++) {
            this.ctx.strokeStyle = i % 2 === 0 ? '#FFFFFF' : '#F0E68C';
            this.ctx.lineWidth = 8;
            this.ctx.beginPath();
            this.ctx.arc(centerX, centerY, 40 + i * 10, 0, Math.PI * 2);
            this.ctx.stroke();
        }

        if(showLabels) {
            this.addLabel('Axon', centerX, centerY, '#2C3E50');
            this.addLabel('Myelin\nLayers', centerX + 120, centerY, '#F0E68C', 'left');
        }

    } else if(component === 'terminals') {
        // Axon terminals detail
        for(let i = 0; i < 5; i++) {
            const termX = width * (0.2 + i * 0.15);
            const termY = height * 0.5;
            
            // Terminal button
            this.ctx.fillStyle = '#FF6B6B';
            this.ctx.strokeStyle = '#C44569';
            this.ctx.lineWidth = 2;
            this.ctx.beginPath();
            this.ctx.arc(termX, termY, 25, 0, Math.PI * 2);
            this.ctx.fill();
            this.ctx.stroke();

            // Synaptic vesicles
            for(let j = 0; j < 6; j++) {
                const vx = termX + (Math.random() - 0.5) * 30;
                const vy = termY + (Math.random() - 0.5) * 30;
                this.ctx.fillStyle = '#FFD700';
                this.ctx.beginPath();
                this.ctx.arc(vx, vy, 4, 0, Math.PI * 2);
                this.ctx.fill();
            }

            // Synaptic cleft
            this.ctx.strokeStyle = '#95A5A6';
            this.ctx.lineWidth = 3;
            this.ctx.setLineDash([5, 3]);
            this.ctx.beginPath();
            this.ctx.moveTo(termX - 30, termY + 35);
            this.ctx.lineTo(termX + 30, termY + 35);
            this.ctx.stroke();
            this.ctx.setLineDash([]);
        }

        if(showLabels) {
            this.addLabel('Synaptic Vesicles', width * 0.5, height * 0.3, '#FFD700');
            this.addLabel('Synaptic Cleft', width * 0.5, height * 0.65, '#95A5A6');
        }
    }

    if(state === 'action-potential') {
        // Show voltage-gated channels
        const channelPositions = [0.3, 0.5, 0.7];
        channelPositions.forEach(pos => {
            this.ctx.fillStyle = '#4A90E2';
            this.ctx.fillRect(width * pos - 5, height * 0.48, 10, 20);
            
            // Ions flowing
            for(let i = 0; i < 3; i++) {
                this.ctx.fillStyle = '#FFD700';
                this.ctx.beginPath();
                this.ctx.arc(width * pos, height * 0.48 + i * 8, 3, 0, Math.PI * 2);
                this.ctx.fill();
            }
        });
    }

    if(showInset) {
        this.drawInset(width * 0.55, height * 0.05, width * 0.4, height * 0.3, insetType);
    }

    this.ctx.restore();
}

drawDendriticTree(x, y, angle, direction, depth, length) {
    if(depth === 0 || length < 10) return;

    const endX = x + Math.cos(angle) * length;
    const endY = y + Math.sin(angle) * length;

    this.ctx.beginPath();
    this.ctx.moveTo(x, y);
    this.ctx.lineTo(endX, endY);
    this.ctx.stroke();

    if(depth > 1) {
        // Dendritic spines
        if(depth < 4) {
            for(let i = 0; i < 3; i++) {
                const spinePos = i / 3;
                const spineX = x + (endX - x) * spinePos;
                const spineY = y + (endY - y) * spinePos;
                const spineAngle = angle + (Math.random() - 0.5) * Math.PI / 2;
                
                this.ctx.beginPath();
                this.ctx.moveTo(spineX, spineY);
                this.ctx.lineTo(spineX + Math.cos(spineAngle) * 10, spineY + Math.sin(spineAngle) * 10);
                this.ctx.stroke();
                
                this.ctx.fillStyle = '#FFB6D9';
                this.ctx.beginPath();
                this.ctx.arc(spineX + Math.cos(spineAngle) * 10, spineY + Math.sin(spineAngle) * 10, 3, 0, Math.PI * 2);
                this.ctx.fill();
            }
        }

        // Branch
        const branchAngleLeft = angle - 0.4;
        const branchAngleRight = angle + 0.4;
        this.drawDendriticTree(endX, endY, branchAngleLeft, -1, depth - 1, length * 0.7);
        this.drawDendriticTree(endX, endY, branchAngleRight, 1, depth - 1, length * 0.7);
    }
}

renderSynapseDiagram(x, y, width, height, options = {}) {
    const {
        showLabels = true,
        type = 'chemical',
        stage = 'vesicle-release',
        showInset = false,
        insetType = 'vesicle-cycle'
    } = options;

    this.ctx.save();
    this.ctx.translate(x - width/2, y - height/2);

    // Presynaptic terminal
    const preX = width * 0.3;
    const preY = height * 0.35;
    const preWidth = width * 0.35;
    const preHeight = height * 0.25;

    this.ctx.fillStyle = '#FF6B6B';
    this.ctx.strokeStyle = '#C44569';
    this.ctx.lineWidth = 3;
    this.ctx.beginPath();
    this.ctx.roundRect(preX, preY, preWidth, preHeight, 10);
    this.ctx.fill();
    this.ctx.stroke();

    // Postsynaptic terminal
    const postX = preX;
    const postY = preY + preHeight + height * 0.1;
    const postWidth = preWidth;
    const postHeight = preHeight;

    this.ctx.fillStyle = '#9370DB';
    this.ctx.strokeStyle = '#6A5ACD';
    this.ctx.beginPath();
    this.ctx.roundRect(postX, postY, postWidth, postHeight, 10);
    this.ctx.fill();
    this.ctx.stroke();

    // Synaptic cleft
    const cleftY = preY + preHeight;
    this.ctx.fillStyle = '#E8F4F8';
    this.ctx.fillRect(preX, cleftY, preWidth, postY - cleftY);
    this.ctx.strokeStyle = '#95A5A6';
    this.ctx.lineWidth = 2;
    this.ctx.setLineDash([5, 3]);
    this.ctx.strokeRect(preX, cleftY, preWidth, postY - cleftY);
    this.ctx.setLineDash([]);

    if(type === 'chemical') {
        if(stage === 'vesicle-release' || stage === 'resting') {
            // Synaptic vesicles
            const vesiclePositions = [
                [0.4, 0.5], [0.5, 0.5], [0.6, 0.5],
                [0.45, 0.65], [0.55, 0.65],
                [0.5, 0.8]
            ];

            vesiclePositions.forEach(([xRatio, yRatio]) => {
                const vx = preX + preWidth * xRatio;
                const vy = preY + preHeight * yRatio;
                
                this.ctx.fillStyle = '#FFD700';
                this.ctx.strokeStyle = '#FFA500';
                this.ctx.lineWidth = 2;
                this.ctx.beginPath();
                this.ctx.arc(vx, vy, 8, 0, Math.PI * 2);
                this.ctx.fill();
                this.ctx.stroke();
            });
        }

        if(stage === 'vesicle-release' || stage === 'receptor-binding') {
            // Released neurotransmitters
            for(let i = 0; i < 8; i++) {
                const ntX = preX + preWidth * (0.3 + Math.random() * 0.4);
                const ntY = cleftY + (postY - cleftY) * (0.2 + Math.random() * 0.6);
                
                this.ctx.fillStyle = '#00CED1';
                this.ctx.beginPath();
                this.ctx.arc(ntX, ntY, 5, 0, Math.PI * 2);
                this.ctx.fill();
            }
        }

        // Receptors on postsynaptic membrane
        for(let i = 0; i < 6; i++) {
            const recX = postX + preWidth * (0.25 + i * 0.1);
            const recY = postY;
            
            this.ctx.fillStyle = '#32CD32';
            this.ctx.strokeStyle = '#228B22';
            this.ctx.lineWidth = 2;
            this.ctx.beginPath();
            this.ctx.rect(recX - 5, recY - 8, 10, 8);
            this.ctx.fill();
            this.ctx.stroke();
            
            // Receptor binding site
            this.ctx.fillStyle = '#90EE90';
            this.ctx.beginPath();
            this.ctx.arc(recX, recY - 4, 3, 0, Math.PI * 2);
            this.ctx.fill();
        }

        // Voltage-gated calcium channels
        if(stage === 'depolarization' || stage === 'vesicle-release') {
            const channelX = preX + preWidth * 0.2;
            const channelY = preY + preHeight;
            
            this.ctx.fillStyle = '#4A90E2';
            this.ctx.fillRect(channelX - 6, channelY - 15, 12, 15);
            
            // Calcium ions
            for(let i = 0; i < 3; i++) {
                this.ctx.fillStyle = '#FF6347';
                this.ctx.beginPath();
                this.ctx.arc(channelX, channelY - 20 - i * 10, 4, 0, Math.PI * 2);
                this.ctx.fill();
            }
        }

    } else if(type === 'electrical') {
        // Gap junction
        const junctionWidth = 15;
        const junctionSpacing = preWidth / 5;
        
        for(let i = 0; i < 4; i++) {
            const jx = preX + preWidth * 0.3 + i * junctionSpacing * 0.3;
            
            // Connexons
            this.ctx.fillStyle = '#FFD700';
            this.ctx.fillRect(jx - junctionWidth/2, preY + preHeight - 5, junctionWidth, 10);
            this.ctx.fillRect(jx - junctionWidth/2, postY - 5, junctionWidth, 10);
            
            // Channel
            this.ctx.strokeStyle = '#FFA500';
            this.ctx.lineWidth = 2;
            this.ctx.beginPath();
            this.ctx.moveTo(jx, preY + preHeight);
            this.ctx.lineTo(jx, postY);
            this.ctx.stroke();
        }

        if(showLabels) {
            this.addLabel('Gap Junction', width * 0.75, height * 0.5, '#FFD700', 'left');
        }
    }

    if(showLabels) {
        this.addLabel('Presynaptic\nTerminal', preX + preWidth + 10, preY + preHeight/2, '#C44569', 'left');
        this.addLabel('Postsynaptic\nTerminal', postX + postWidth + 10, postY + postHeight/2, '#6A5ACD', 'left');
        this.addLabel('Synaptic\nCleft', postX + postWidth + 10, cleftY + (postY - cleftY)/2, '#95A5A6', 'left');
        
        if(type === 'chemical') {
            this.addLabel('Vesicles', preX - 10, preY + preHeight * 0.6, '#FFD700', 'right');
            this.addLabel('Neurotransmitters', width * 0.75, cleftY + 20, '#00CED1', 'left');
            this.addLabel('Receptors', postX - 10, postY + 5, '#32CD32', 'right');
        }
    }

    if(showInset) {
        this.drawInset(width * 0.55, height * 0.05, width * 0.4, height * 0.3, insetType);
    }

    this.ctx.restore();
}

renderBrainDiagram(x, y, width, height, options = {}) {
    const {
        showLabels = true,
        region = 'whole',
        section = 'sagittal',
        showInset = false,
        insetType = 'cortical-layers'
    } = options;

    this.ctx.save();
    this.ctx.translate(x - width/2, y - height/2);

    if(section === 'sagittal') {
        // Sagittal (side) view
        
        // Cerebrum
        this.ctx.fillStyle = '#E8B4B8';
        this.ctx.strokeStyle = '#C48793';
        this.ctx.lineWidth = 3;
        this.ctx.beginPath();
        this.ctx.ellipse(width * 0.5, height * 0.35, width * 0.35, height * 0.3, 0, 0, Math.PI * 2);
        this.ctx.fill();
        this.ctx.stroke();

        // Cerebellum
        this.ctx.fillStyle = '#DDA0A4';
        this.ctx.beginPath();
        this.ctx.arc(width * 0.25, height * 0.65, width * 0.15, 0, Math.PI * 2);
        this.ctx.fill();
        this.ctx.stroke();

        // Brainstem
        this.ctx.fillStyle = '#F5DEB3';
        this.ctx.fillRect(width * 0.35, height * 0.6, width * 0.1, height * 0.25);
        this.ctx.strokeRect(width * 0.35, height * 0.6, width * 0.1, height * 0.25);

        // Corpus callosum
        this.ctx.fillStyle = '#FFFFFF';
        this.ctx.beginPath();
        this.ctx.ellipse(width * 0.5, height * 0.4, width * 0.2, height * 0.05, 0, 0, Math.PI * 2);
        this.ctx.fill();
        this.ctx.stroke();

        // Thalamus
        this.ctx.fillStyle = '#B8A8D8';
        this.ctx.beginPath();
        this.ctx.ellipse(width * 0.45, height * 0.45, width * 0.08, height * 0.08, 0, 0, Math.PI * 2);
        this.ctx.fill();

        // Hypothalamus
        this.ctx.fillStyle = '#D8B8D8';
        this.ctx.beginPath();
        this.ctx.arc(width * 0.48, height * 0.53, width * 0.05, 0, Math.PI * 2);
        this.ctx.fill();

        // Pituitary gland
        this.ctx.fillStyle = '#FFB6D9';
        this.ctx.beginPath();
        this.ctx.arc(width * 0.48, height * 0.58, width * 0.03, 0, Math.PI * 2);
        this.ctx.fill();

        // Ventricles
        this.ctx.fillStyle = '#ADD8E6';
        this.ctx.globalAlpha = 0.6;
        this.ctx.beginPath();
        this.ctx.ellipse(width * 0.5, height * 0.35, width * 0.15, height * 0.08, 0, 0, Math.PI * 2);
        this.ctx.fill();
        this.ctx.globalAlpha = 1.0;

        if(showLabels) {
            this.addLabel('Cerebrum', width * 0.7, height * 0.25, '#2C3E50', 'left');
            this.addLabel('Corpus\nCallosum', width * 0.65, height * 0.4, '#2C3E50', 'left');
            this.addLabel('Thalamus', width * 0.35, height * 0.45, '#2C3E50', 'right');
            this.addLabel('Hypothalamus', width * 0.35, height * 0.53, '#2C3E50', 'right');
            this.addLabel('Pituitary', width * 0.55, height * 0.6, '#2C3E50', 'left');
            this.addLabel('Cerebellum', width * 0.15, height * 0.65, '#2C3E50', 'right');
            this.addLabel('Brainstem', width * 0.3, height * 0.75, '#2C3E50', 'right');
        }

    } else if(section === 'external') {
        // External view showing lobes
        
        this.ctx.fillStyle = '#E8B4B8';
        this.ctx.strokeStyle = '#C48793';
        this.ctx.lineWidth = 3;
        this.ctx.beginPath();
        this.ctx.ellipse(width * 0.5, height * 0.5, width * 0.4, height * 0.35, 0, 0, Math.PI * 2);
        this.ctx.fill();
        this.ctx.stroke();

        // Sulci (grooves)
        this.ctx.strokeStyle = '#A8788C';
        this.ctx.lineWidth = 2;
        
        // Central sulcus
        this.ctx.beginPath();
        this.ctx.moveTo(width * 0.5, height * 0.2);
        this.ctx.lineTo(width * 0.55, height * 0.7);
        this.ctx.stroke();

        // Lateral sulcus
        this.ctx.beginPath();
        this.ctx.moveTo(width * 0.2, height * 0.5);
        this.ctx.quadraticCurveTo(width * 0.4, height * 0.6, width * 0.7, height * 0.65);
        this.ctx.stroke();

        if(showLabels) {
            this.addLabel('Frontal\nLobe', width * 0.35, height * 0.35, '#2C3E50');
            this.addLabel('Parietal\nLobe', width * 0.6, height * 0.35, '#2C3E50');
            this.addLabel('Temporal\nLobe', width * 0.35, height * 0.7, '#2C3E50');
            this.addLabel('Occipital\nLobe', width * 0.7, height * 0.6, '#2C3E50');
        }
    }

    if(showInset) {
        this.drawInset(width * 0.55, height * 0.05, width * 0.4, height * 0.3, insetType);
    }

    this.ctx.restore();
}

// ========== SKELETAL SYSTEM ==========

renderSkeletalSystemDiagram(x, y, width, height, options = {}) {
    const {
        showLabels = true,
        region = 'complete',
        view = 'anterior',
        showInset = false,
        insetType = 'bone-structure'
    } = options;

    this.ctx.save();
    this.ctx.translate(x - width/2, y - height/2);

    if(region === 'complete') {
        const boneColor = '#F5DEB3';
        const boneOutline = '#D2B48C';

        // Skull
        this.ctx.fillStyle = boneColor;
        this.ctx.strokeStyle = boneOutline;
        this.ctx.lineWidth = 2;
        this.ctx.beginPath();
        this.ctx.ellipse(width * 0.5, height * 0.08, width * 0.12, height * 0.07, 0, 0, Math.PI * 2);
        this.ctx.fill();
        this.ctx.stroke();

        // Spine
        for(let i = 0; i < 15; i++) {
            const y = height * (0.15 + i * 0.04);
            this.ctx.fillStyle = boneColor;
            this.ctx.fillRect(width * 0.47, y, width * 0.06, height * 0.03);
            this.ctx.strokeRect(width * 0.47, y, width * 0.06, height * 0.03);
        }

        // Ribcage
        for(let i = 0; i < 7; i++) {
            const ribY = height * (0.2 + i * 0.05);
            
            // Left rib
            this.ctx.beginPath();
            this.ctx.moveTo(width * 0.5, ribY);
            this.ctx.bezierCurveTo(
                width * 0.4, ribY,
                width * 0.35, ribY + height * 0.03,
                width * 0.4, ribY + height * 0.04
            );
            this.ctx.stroke();

            // Right rib
            this.ctx.beginPath();
            this.ctx.moveTo(width * 0.5, ribY);
            this.ctx.bezierCurveTo(
                width * 0.6, ribY,
                width * 0.65, ribY + height * 0.03,
                width * 0.6, ribY + height * 0.04
            );
            this.ctx.stroke();
        }

        // Pelvis
        this.ctx.fillStyle = boneColor;
        this.ctx.beginPath();
        this.ctx.ellipse(width * 0.5, height * 0.55, width * 0.15, height * 0.08, 0, 0, Math.PI * 2);
        this.ctx.fill();
        this.ctx.stroke();

        // Arms
        // Left humerus
        this.ctx.fillRect(width * 0.25, height * 0.22, width * 0.05, height * 0.2);
        this.ctx.strokeRect(width * 0.25, height * 0.22, width * 0.05, height * 0.2);
        
        // Left radius/ulna
        this.ctx.fillRect(width * 0.24, height * 0.42, width * 0.03, height * 0.15);
        this.ctx.fillRect(width * 0.27, height * 0.42, width * 0.03, height * 0.15);

        // Right humerus
        this.ctx.fillRect(width * 0.7, height * 0.22, width * 0.05, height * 0.2);
        this.ctx.strokeRect(width * 0.7, height * 0.22, width * 0.05, height * 0.2);
        
        // Right radius/ulna
        this.ctx.fillRect(width * 0.70, height * 0.42, width * 0.03, height * 0.15);
        this.ctx.fillRect(width * 0.73, height * 0.42, width * 0.03, height * 0.15);

        // Legs
        // Left femur
        this.ctx.fillRect(width * 0.38, height * 0.58, width * 0.06, height * 0.25);
        this.ctx.strokeRect(width * 0.38, height * 0.58, width * 0.06, height * 0.25);
        
        // Left tibia/fibula
        this.ctx.fillRect(width * 0.37, height * 0.83, width * 0.04, height * 0.15);
        this.ctx.fillRect(width * 0.41, height * 0.83, width * 0.03, height * 0.15);

        // Right femur
        this.ctx.fillRect(width * 0.56, height * 0.58, width * 0.06, height * 0.25);
        this.ctx.strokeRect(width * 0.56, height * 0.58, width * 0.06, height * 0.25);
        
        // Right tibia/fibula
        this.ctx.fillRect(width * 0.56, height * 0.83, width * 0.04, height * 0.15);
        this.ctx.fillRect(width * 0.60, height * 0.83, width * 0.03, height * 0.15);

        if(showLabels) {
            this.addLabel('Skull', width * 0.5, height * 0.02, '#2C3E50');
            this.addLabel('Clavicle', width * 0.65, height * 0.18, '#2C3E50', 'left');
            this.addLabel('Ribs', width * 0.35, height * 0.3, '#2C3E50', 'right');
            this.addLabel('Spine', width * 0.6, height * 0.4, '#2C3E50', 'left');
            this.addLabel('Pelvis', width * 0.5, height * 0.65, '#2C3E50');
            this.addLabel('Femur', width * 0.65, height * 0.7, '#2C3E50', 'left');
            this.addLabel('Tibia', width * 0.65, height * 0.9, '#2C3E50', 'left');
        }

    } else if(region === 'axial') {
        // Axial skeleton (skull, spine, ribs)
        // Similar to complete but without appendicular
        
    } else if(region === 'appendicular') {
        // Appendicular skeleton (limbs and girdles)
    }

    if(showInset) {
        this.drawInset(width * 0.55, height * 0.05, width * 0.4, height * 0.3, insetType);
    }

    this.ctx.restore();
}

renderSkullDiagram(x, y, width, height, options = {}) {
    const {
        showLabels = true,
        view = 'anterior',
        bone = 'all',
        showInset = false,
        insetType = 'sutures'
    } = options;

    this.ctx.save();
    this.ctx.translate(x - width/2, y - height/2);

    const boneColor = '#F5DEB3';
    const sutureColor = '#8B7355';

    if(view === 'anterior') {
        // Front view of skull
        
        // Cranium
        this.ctx.fillStyle = boneColor;
        this.ctx.strokeStyle = '#D2B48C';
        this.ctx.lineWidth = 3;
        this.ctx.beginPath();
        this.ctx.ellipse(width * 0.5, height * 0.35, width * 0.35, height * 0.3, 0, 0, Math.PI * 2);
        this.ctx.fill();
        this.ctx.stroke();

        // Orbits (eye sockets)
        this.ctx.fillStyle = '#2C3E50';
        this.ctx.beginPath();
        this.ctx.ellipse(width * 0.35, height * 0.45, width * 0.08, height * 0.1, 0, 0, Math.PI * 2);
        this.ctx.fill();
        this.ctx.beginPath();
        this.ctx.ellipse(width * 0.65, height * 0.45, width * 0.08, height * 0.1, 0, 0, Math.PI * 2);
        this.ctx.fill();

        // Nasal cavity
        this.ctx.fillStyle = '#2C3E50';
        this.ctx.beginPath();
        this.ctx.moveTo(width * 0.5, height * 0.5);
        this.ctx.lineTo(width * 0.45, height * 0.62);
        this.ctx.lineTo(width * 0.55, height * 0.62);
        this.ctx.closePath();
        this.ctx.fill();

        // Maxilla (upper jaw)
        this.ctx.fillStyle = boneColor;
        this.ctx.fillRect(width * 0.3, height * 0.62, width * 0.4, height * 0.12);
        this.ctx.strokeRect(width * 0.3, height * 0.62, width * 0.4, height * 0.12);

        // Mandible (lower jaw)
        this.ctx.beginPath();
        this.ctx.moveTo(width * 0.3, height * 0.74);
        this.ctx.quadraticCurveTo(width * 0.5, height * 0.85, width * 0.7, height * 0.74);
        this.ctx.lineTo(width * 0.7, height * 0.78);
        this.ctx.quadraticCurveTo(width * 0.5, height * 0.88, width * 0.3, height * 0.78);
        this.ctx.closePath();
        this.ctx.fill();
        this.ctx.stroke();

        // Teeth
        this.ctx.fillStyle = '#FFFFFF';
        for(let i = 0; i < 8; i++) {
            const toothX = width * (0.33 + i * 0.05);
            // Upper teeth
            this.ctx.fillRect(toothX, height * 0.72, width * 0.03, height * 0.04);
            // Lower teeth
            this.ctx.fillRect(toothX, height * 0.76, width * 0.03, height * 0.04);
        }

        // Sutures
        if(bone === 'all') {
            this.ctx.strokeStyle = sutureColor;
            this.ctx.lineWidth = 2;
            this.ctx.setLineDash([5, 3]);
            
            // Coronal suture
            this.ctx.beginPath();
            this.ctx.moveTo(width * 0.2, height * 0.3);
            this.ctx.quadraticCurveTo(width * 0.5, height * 0.25, width * 0.8, height * 0.3);
            this.ctx.stroke();

            // Sagittal suture
            this.ctx.beginPath();
            this.ctx.moveTo(width * 0.5, height * 0.1);
            this.ctx.lineTo(width * 0.5, height * 0.4);
            this.ctx.stroke();
            
            this.ctx.setLineDash([]);
        }

        if(showLabels) {
            this.addLabel('Frontal Bone', width * 0.5, height * 0.2, '#2C3E50');
            this.addLabel('Parietal Bone', width * 0.75, height * 0.25, '#2C3E50', 'left');
            this.addLabel('Orbit', width * 0.25, height * 0.45, '#2C3E50', 'right');
            this.addLabel('Nasal Cavity', width * 0.5, height * 0.56, '#2C3E50');
            this.addLabel('Maxilla', width * 0.2, height * 0.68, '#2C3E50', 'right');
            this.addLabel('Mandible', width * 0.2, height * 0.82, '#2C3E50', 'right');
        }

    } else if(view === 'lateral') {
        // Side view
        this.ctx.fillStyle = boneColor;
        this.ctx.strokeStyle = '#D2B48C';
        this.ctx.lineWidth = 3;
        
        // Cranium outline
        this.ctx.beginPath();
        this.ctx.arc(width * 0.4, height * 0.35, width * 0.25, 0, Math.PI);
        this.ctx.lineTo(width * 0.15, height * 0.6);
        this.ctx.lineTo(width * 0.45, height * 0.65);
        this.ctx.closePath();
        this.ctx.fill();
        this.ctx.stroke();

        // Face
        this.ctx.beginPath();
        this.ctx.moveTo(width * 0.65, height * 0.35);
        this.ctx.lineTo(width * 0.7, height * 0.5);
        this.ctx.lineTo(width * 0.55, height * 0.65);
        this.ctx.lineTo(width * 0.45, height * 0.65);
        this.ctx.closePath();
        this.ctx.fill();
        this.ctx.stroke();

        // Mandible
        this.ctx.beginPath();
        this.ctx.moveTo(width * 0.45, height * 0.65);
        this.ctx.quadraticCurveTo(width * 0.35, height * 0.75, width * 0.15, height * 0.7);
        this.ctx.lineTo(width * 0.15, height * 0.65);
        this.ctx.closePath();
        this.ctx.fill();
        this.ctx.stroke();

        if(showLabels) {
            this.addLabel('Frontal', width * 0.65, height * 0.25, '#2C3E50', 'left');
            this.addLabel('Parietal', width * 0.4, height * 0.2, '#2C3E50');
            this.addLabel('Occipital', width * 0.2, height * 0.35, '#2C3E50', 'right');
            this.addLabel('Temporal', width * 0.3, height * 0.5, '#2C3E50', 'right');
            this.addLabel('Zygomatic', width * 0.65, height * 0.5, '#2C3E50', 'left');
        }
    }

    if(showInset) {
        this.drawInset(width * 0.55, height * 0.05, width * 0.4, height * 0.3, insetType);
    }

    this.ctx.restore();
}

renderBoneStructureDiagram(x, y, width, height, options = {}) {
    const {
        showLabels = true,
        boneType = 'long-bone',
        tissue = 'complete',
        showInset = false,
        insetType = 'haversian-system'
    } = options;

    this.ctx.save();
    this.ctx.translate(x - width/2, y - height/2);

    if(boneType === 'long-bone') {
        const boneWidth = width * 0.3;
        const boneHeight = height * 0.7;
        const boneX = width * 0.35;
        const boneY = height * 0.15;

        // Epiphysis (top)
        this.ctx.fillStyle = '#F5DEB3';
        this.ctx.strokeStyle = '#D2B48C';
        this.ctx.lineWidth = 3;
        this.ctx.beginPath();
        this.ctx.ellipse(boneX + boneWidth/2, boneY, boneWidth * 0.7, boneWidth * 0.4, 0, 0, Math.PI * 2);
        this.ctx.fill();
        this.ctx.stroke();

        // Diaphysis (shaft)
        this.ctx.fillRect(boneX, boneY + boneWidth * 0.3, boneWidth, boneHeight * 0.5);
        this.ctx.strokeRect(boneX, boneY + boneWidth * 0.3, boneWidth, boneHeight * 0.5);

        // Epiphysis (bottom)
        this.ctx.beginPath();
        this.ctx.ellipse(boneX + boneWidth/2, boneY + boneHeight, boneWidth * 0.7, boneWidth * 0.4, 0, 0, Math.PI * 2);
        this.ctx.fill();
        this.ctx.stroke();

        if(tissue === 'complete' || tissue === 'compact') {
            // Compact bone (outer layer)
            this.ctx.strokeStyle = '#8B7355';
            this.ctx.lineWidth = 8;
            this.ctx.strokeRect(boneX, boneY + boneWidth * 0.3, boneWidth, boneHeight * 0.5);
        }

        if(tissue === 'complete' || tissue === 'spongy') {
            // Spongy bone texture at ends
            this.ctx.strokeStyle = '#D2B48C';
            this.ctx.lineWidth = 2;
            
            // Top epiphysis
            for(let i = 0; i < 10; i++) {
                const sx = boneX + boneWidth * (0.2 + Math.random() * 0.6);
                const sy = boneY - boneWidth * 0.2 + Math.random() * boneWidth * 0.4;
                const ex = sx + (Math.random() - 0.5) * 20;
                const ey = sy + (Math.random() - 0.5) * 20;
                this.ctx.beginPath();
                this.ctx.moveTo(sx, sy);
                this.ctx.lineTo(ex, ey);
                this.ctx.stroke();
            }

            // Bottom epiphysis
            for(let i = 0; i < 10; i++) {
                const sx = boneX + boneWidth * (0.2 + Math.random() * 0.6);
                const sy = boneY + boneHeight - boneWidth * 0.2 + Math.random() * boneWidth * 0.4;
                const ex = sx + (Math.random() - 0.5) * 20;
                const ey = sy + (Math.random() - 0.5) * 20;
                this.ctx.beginPath();
                this.ctx.moveTo(sx, sy);
                this.ctx.lineTo(ex, ey);
                this.ctx.stroke();
            }
        }

        if(tissue === 'complete' || tissue === 'marrow') {
            // Medullary cavity (yellow marrow)
            this.ctx.fillStyle = '#FFD700';
            const cavityWidth = boneWidth * 0.6;
            const cavityX = boneX + (boneWidth - cavityWidth) / 2;
            this.ctx.fillRect(cavityX, boneY + boneWidth * 0.4, cavityWidth, boneHeight * 0.4);
        }

        if(tissue === 'complete' || tissue === 'periosteum') {
            // Periosteum (outer membrane)
            this.ctx.strokeStyle = '#FF6347';
            this.ctx.lineWidth = 2;
            this.ctx.setLineDash([3, 3]);
            this.ctx.strokeRect(boneX - 2, boneY + boneWidth * 0.3, boneWidth + 4, boneHeight * 0.5);
            this.ctx.setLineDash([]);
        }

        // Articular cartilage
        this.ctx.fillStyle = '#ADD8E6';
        this.ctx.globalAlpha = 0.7;
        this.ctx.beginPath();
        this.ctx.ellipse(boneX + boneWidth/2, boneY - 5, boneWidth * 0.7, boneWidth * 0.15, 0, 0, Math.PI * 2);
        this.ctx.fill();
        this.ctx.beginPath();
        this.ctx.ellipse(boneX + boneWidth/2, boneY + boneHeight + 5, boneWidth * 0.7, boneWidth * 0.15, 0, 0, Math.PI * 2);
        this.ctx.fill();
        this.ctx.globalAlpha = 1.0;

        if(showLabels) {
            this.addLabel('Proximal\nEpiphysis', boneX - 10, boneY, '#2C3E50', 'right');
            this.addLabel('Diaphysis\n(Shaft)', boneX - 10, boneY + boneHeight/2, '#2C3E50', 'right');
            this.addLabel('Distal\nEpiphysis', boneX - 10, boneY + boneHeight, '#2C3E50', 'right');
            this.addLabel('Compact\nBone', boneX + boneWidth + 10, boneY + boneHeight * 0.4, '#8B7355', 'left');
            this.addLabel('Medullary\nCavity', boneX + boneWidth + 10, boneY + boneHeight * 0.55, '#FFD700', 'left');
            this.addLabel('Spongy\nBone', boneX + boneWidth + 10, boneY + 20, '#D2B48C', 'left');
            this.addLabel('Articular\nCartilage', boneX + boneWidth + 10, boneY - 10, '#ADD8E6', 'left');
        }
    }

    if(showInset) {
        this.drawInset(width * 0.55, height * 0.05, width * 0.4, height * 0.3, insetType);
    }

    this.ctx.restore();
}

// ========== MUSCULAR SYSTEM ==========

renderMuscularSystemDiagram(x, y, width, height, options = {}) {
    const {
        showLabels = true,
        type = 'skeletal',
        region = 'complete',
        view = 'anterior',
        showInset = false,
        insetType = 'sarcomere'
    } = options;

    this.ctx.save();
    this.ctx.translate(x - width/2, y - height/2);

    const muscleColor = '#C44569';
    const muscleOutline = '#8B2252';

    if(region === 'complete' && view === 'anterior') {
        // Major muscle groups - anterior view

        // Head/Neck
        // Sternocleidomastoid
        this.ctx.fillStyle = muscleColor;
        this.ctx.strokeStyle = muscleOutline;
        this.ctx.lineWidth = 2;
        this.ctx.fillRect(width * 0.43, height * 0.12, width * 0.04, height * 0.08);
        this.ctx.fillRect(width * 0.53, height * 0.12, width * 0.04, height * 0.08);

        // Chest
        // Pectoralis major
        this.ctx.beginPath();
        this.ctx.moveTo(width * 0.35, height * 0.2);
        this.ctx.quadraticCurveTo(width * 0.3, height * 0.25, width * 0.35, height * 0.3);
        this.ctx.lineTo(width * 0.45, height * 0.3);
        this.ctx.lineTo(width * 0.45, height * 0.2);
        this.ctx.closePath();
        this.ctx.fill();
        this.ctx.stroke();

        this.ctx.beginPath();
        this.ctx.moveTo(width * 0.65, height * 0.2);
        this.ctx.quadraticCurveTo(width * 0.7, height * 0.25, width * 0.65, height * 0.3);
        this.ctx.lineTo(width * 0.55, height * 0.3);
        this.ctx.lineTo(width * 0.55, height * 0.2);
        this.ctx.closePath();
        this.ctx.fill();
        this.ctx.stroke();

        // Abdomen
        // Rectus abdominis (six-pack)
        for(let row = 0; row < 3; row++) {
            for(let col = 0; col < 2; col++) {
                const absX = width * (0.44 + col * 0.06);
                const absY = height * (0.35 + row * 0.08);
                this.ctx.fillRect(absX, absY, width * 0.05, height * 0.06);
                this.ctx.strokeRect(absX, absY, width * 0.05, height * 0.06);
            }
        }

        // Arms
        // Biceps
        this.ctx.fillRect(width * 0.23, height * 0.25, width * 0.06, height * 0.15);
        this.ctx.strokeRect(width * 0.23, height * 0.25, width * 0.06, height * 0.15);
        this.ctx.fillRect(width * 0.71, height * 0.25, width * 0.06, height * 0.15);
        this.ctx.strokeRect(width * 0.71, height * 0.25, width * 0.06, height * 0.15);

        // Forearms
        this.ctx.fillRect(width * 0.21, height * 0.42, width * 0.05, height * 0.18);
        this.ctx.fillRect(width * 0.74, height * 0.42, width * 0.05, height * 0.18);

        // Legs
        // Quadriceps
        for(let i = 0; i < 2; i++) {
            const legX = width * (0.35 + i * 0.2);
            
            // Vastus lateralis
            this.ctx.fillRect(legX, height * 0.6, width * 0.05, height * 0.28);
            this.ctx.strokeRect(legX, height * 0.6, width * 0.05, height * 0.28);
            
            // Vastus medialis
            this.ctx.fillRect(legX + width * 0.05, height * 0.62, width * 0.05, height * 0.26);
            this.ctx.strokeRect(legX + width * 0.05, height * 0.62, width * 0.05, height * 0.26);
            
            // Rectus femoris
            this.ctx.fillRect(legX + width * 0.025, height * 0.58, width * 0.05, height * 0.3);
            this.ctx.strokeRect(legX + width * 0.025, height * 0.58, width * 0.05, height * 0.3);
        }

        // Calves
        // Tibialis anterior
        this.ctx.fillRect(width * 0.36, height * 0.88, width * 0.04, height * 0.1);
        this.ctx.fillRect(width * 0.56, height * 0.88, width * 0.04, height * 0.1);

        if(showLabels) {
            this.addLabel('Sternocleidomastoid', width * 0.15, height * 0.15, '#2C3E50', 'right');
            this.addLabel('Pectoralis\nMajor', width * 0.2, height * 0.25, '#2C3E50', 'right');
            this.addLabel('Rectus\nAbdominis', width * 0.35, height * 0.45, '#2C3E50', 'right');
            this.addLabel('Biceps\nBrachii', width * 0.15, height * 0.32, '#2C3E50', 'right');
            this.addLabel('Quadriceps\nFemoris', width * 0.25, height * 0.7, '#2C3E50', 'right');
            this.addLabel('Tibialis\nAnterior', width * 0.25, height * 0.92, '#2C3E50', 'right');
        }

    } else if(region === 'complete' && view === 'posterior') {
        // Posterior view
        
        // Trapezius
        this.ctx.fillStyle = muscleColor;
        this.ctx.strokeStyle = muscleOutline;
        this.ctx.lineWidth = 2;
        this.ctx.beginPath();
        this.ctx.moveTo(width * 0.5, height * 0.15);
        this.ctx.lineTo(width * 0.3, height * 0.2);
        this.ctx.lineTo(width * 0.35, height * 0.35);
        this.ctx.lineTo(width * 0.5, height * 0.3);
        this.ctx.closePath();
        this.ctx.fill();
        this.ctx.stroke();

        this.ctx.beginPath();
        this.ctx.moveTo(width * 0.5, height * 0.15);
        this.ctx.lineTo(width * 0.7, height * 0.2);
        this.ctx.lineTo(width * 0.65, height * 0.35);
        this.ctx.lineTo(width * 0.5, height * 0.3);
        this.ctx.closePath();
        this.ctx.fill();
        this.ctx.stroke();

        // Latissimus dorsi
        this.ctx.beginPath();
        this.ctx.moveTo(width * 0.35, height * 0.35);
        this.ctx.lineTo(width * 0.25, height * 0.4);
        this.ctx.lineTo(width * 0.3, height * 0.55);
        this.ctx.lineTo(width * 0.4, height * 0.5);
        this.ctx.closePath();
        this.ctx.fill();
        this.ctx.stroke();

        this.ctx.beginPath();
        this.ctx.moveTo(width * 0.65, height * 0.35);
        this.ctx.lineTo(width * 0.75, height * 0.4);
        this.ctx.lineTo(width * 0.7, height * 0.55);
        this.ctx.lineTo(width * 0.6, height * 0.5);
        this.ctx.closePath();
        this.ctx.fill();
        this.ctx.stroke();

        // Triceps
        this.ctx.fillRect(width * 0.23, height * 0.25, width * 0.06, height * 0.15);
        this.ctx.fillRect(width * 0.71, height * 0.25, width * 0.06, height * 0.15);

        // Gluteus maximus
        this.ctx.beginPath();
        this.ctx.ellipse(width * 0.4, height * 0.57, width * 0.08, height * 0.08, 0, 0, Math.PI * 2);
        this.ctx.fill();
        this.ctx.stroke();

        this.ctx.beginPath();
        this.ctx.ellipse(width * 0.6, height * 0.57, width * 0.08, height * 0.08, 0, 0, Math.PI * 2);
        this.ctx.fill();
        this.ctx.stroke();

        // Hamstrings
        this.ctx.fillRect(width * 0.35, height * 0.63, width * 0.08, height * 0.25);
        this.ctx.fillRect(width * 0.57, height * 0.63, width * 0.08, height * 0.25);

        // Gastrocnemius (calves)
        this.ctx.beginPath();
        this.ctx.ellipse(width * 0.39, height * 0.92, width * 0.04, height * 0.08, 0, 0, Math.PI * 2);
        this.ctx.fill();
        this.ctx.stroke();

        this.ctx.beginPath();
        this.ctx.ellipse(width * 0.61, height * 0.92, width * 0.04, height * 0.08, 0, 0, Math.PI * 2);
        this.ctx.fill();
        this.ctx.stroke();

        if(showLabels) {
            this.addLabel('Trapezius', width * 0.5, height * 0.22, '#2C3E50');
            this.addLabel('Latissimus\nDorsi', width * 0.2, height * 0.45, '#2C3E50', 'right');
            this.addLabel('Triceps', width * 0.15, height * 0.32, '#2C3E50', 'right');
            this.addLabel('Gluteus\nMaximus', width * 0.7, height * 0.57, '#2C3E50', 'left');
            this.addLabel('Hamstrings', width * 0.7, height * 0.75, '#2C3E50', 'left');
            this.addLabel('Gastrocnemius', width * 0.7, height * 0.92, '#2C3E50', 'left');
        }
    }

    if(showInset) {
        this.drawInset(width * 0.55, height * 0.05, width * 0.4, height * 0.3, insetType);
    }

    this.ctx.restore();
}

renderSkeletalMuscleDiagram(x, y, width, height, options = {}) {
    const {
        showLabels = true,
        level = 'complete',
        component = 'overview',
        showInset = false,
        insetType = 'fiber-types'
    } = options;

    this.ctx.save();
    this.ctx.translate(x - width/2, y - height/2);

    if(level === 'complete') {
        // Whole muscle to myofibril hierarchy
        
        const levels = [
            { y: 0.15, label: 'Whole Muscle', width: 0.6 },
            { y: 0.35, label: 'Fascicle', width: 0.45 },
            { y: 0.55, label: 'Muscle Fiber', width: 0.3 },
            { y: 0.75, label: 'Myofibril', width: 0.15 }
        ];

        levels.forEach((lvl, index) => {
            const levelX = width * 0.2;
            const levelY = height * lvl.y;
            const levelWidth = width * lvl.width;
            const levelHeight = height * 0.12;

            // Draw structure
            this.ctx.fillStyle = index === 0 ? '#C44569' : index === 1 ? '#D5527A' : index === 2 ? '#E55F8B' : '#F56C9C';
            this.ctx.strokeStyle = '#8B2252';
            this.ctx.lineWidth = 2;
            
            if(index < 3) {
                // Bundle appearance
                this.ctx.fillRect(levelX, levelY, levelWidth, levelHeight);
                this.ctx.strokeRect(levelX, levelY, levelWidth, levelHeight);
                
                // Internal fibers
                this.ctx.strokeStyle = '#A8366F';
                this.ctx.lineWidth = 1;
                for(let i = 1; i < (index + 2) * 3; i++) {
                    this.ctx.beginPath();
                    this.ctx.moveTo(levelX + (levelWidth / ((index + 2) * 3)) * i, levelY);
                    this.ctx.lineTo(levelX + (levelWidth / ((index + 2) * 3)) * i, levelY + levelHeight);
                    this.ctx.stroke();
                }
            } else {
                // Myofibril with sarcomere pattern
                for(let i = 0; i < 10; i++) {
                    const sarX = levelX + i * levelWidth * 0.1;
                    this.ctx.fillStyle = i % 2 === 0 ? '#F56C9C' : '#FFB6D9';
                    this.ctx.fillRect(sarX, levelY, levelWidth * 0.1, levelHeight);
                    this.ctx.strokeRect(sarX, levelY, levelWidth * 0.1, levelHeight);
                }
            }

            if(showLabels) {
                this.addLabel(lvl.label, levelX + levelWidth + 10, levelY + levelHeight/2, '#2C3E50', 'left');
            }

            // Zoom indicator
            if(index < 3) {
                this.drawArrow(
                    levelX + levelWidth/2, levelY + levelHeight + 5,
                    levelX + width * levels[index + 1].width / 2, height * levels[index + 1].y - 5,
                    '#7F8C8D', '', 6
                );
            }
        });

        // Connective tissue labels
        if(component === 'overview' || component === 'connective-tissue') {
            this.ctx.font = '11px Arial';
            this.ctx.fillStyle = '#95A5A6';
            this.ctx.textAlign = 'right';
            this.ctx.fillText('Epimysium', width * 0.18, height * 0.21);
            this.ctx.fillText('Perimysium', width * 0.18, height * 0.41);
            this.ctx.fillText('Endomysium', width * 0.18, height * 0.61);
        }

    } else if(level === 'sarcomere') {
        // Detailed sarcomere
        const sarcomereCount = 5;
        const sarcomereWidth = width * 0.15;
        const startX = width * 0.125;
        const centerY = height * 0.5;
        const bandHeight = height * 0.2;

        for(let i = 0; i < sarcomereCount; i++) {
            const sarX = startX + i * sarcomereWidth;
            
            // Z-lines
            this.ctx.strokeStyle = '#2C3E50';
            this.ctx.lineWidth = 3;
            this.ctx.beginPath();
            this.ctx.moveTo(sarX, centerY - bandHeight/2);
            this.ctx.lineTo(sarX, centerY + bandHeight/2);
            this.ctx.stroke();

            // I-band (light)
            this.ctx.fillStyle = '#FFE4E8';
            this.ctx.fillRect(sarX, centerY - bandHeight/2, sarcomereWidth * 0.15, bandHeight);

            // A-band (dark)
            this.ctx.fillStyle = '#FFB6D9';
            this.ctx.fillRect(sarX + sarcomereWidth * 0.15, centerY - bandHeight/2, sarcomereWidth * 0.7, bandHeight);

            // H-zone (lighter center of A-band)
            this.ctx.fillStyle = '#FFDDE6';
            this.ctx.fillRect(sarX + sarcomereWidth * 0.4, centerY - bandHeight/3, sarcomereWidth * 0.2, bandHeight * 0.66);

            // M-line
            this.ctx.strokeStyle = '#8B2252';
            this.ctx.lineWidth = 2;
            this.ctx.beginPath();
            this.ctx.moveTo(sarX + sarcomereWidth * 0.5, centerY - bandHeight/3);
            this.ctx.lineTo(sarX + sarcomereWidth * 0.5, centerY + bandHeight/3);
            this.ctx.stroke();

            // Actin (thin filaments)
            this.ctx.strokeStyle = '#4A90E2';
            this.ctx.lineWidth = 2;
            for(let j = 0; j < 3; j++) {
                const actinY = centerY - bandHeight/4 + j * bandHeight/4;
                this.ctx.beginPath();
                this.ctx.moveTo(sarX, actinY);
                this.ctx.lineTo(sarX + sarcomereWidth * 0.8, actinY);
                this.ctx.stroke();
            }

            // Myosin (thick filaments)
            this.ctx.strokeStyle = '#E74C3C';
            this.ctx.lineWidth = 3;
            for(let j = 0; j < 2; j++) {
                const myosinY = centerY - bandHeight/6 + j * bandHeight/3;
                this.ctx.beginPath();
                this.ctx.moveTo(sarX + sarcomereWidth * 0.2, myosinY);
                this.ctx.lineTo(sarX + sarcomereWidth * 0.8, myosinY);
                this.ctx.stroke();

                // Myosin heads
                for(let k = 0; k < 5; k++) {
                    const headX = sarX + sarcomereWidth * (0.25 + k * 0.11);
                    this.ctx.fillStyle = '#C0392B';
                    this.ctx.beginPath();
                    this.ctx.arc(headX, myosinY - 5, 3, 0, Math.PI * 2);
                    this.ctx.fill();
                    this.ctx.beginPath();
                    this.ctx.arc(headX, myosinY + 5, 3, 0, Math.PI * 2);
                    this.ctx.fill();
                }
            }
        }

        if(showLabels) {
            this.addLabel('Z-line', startX, centerY - bandHeight/2 - 10, '#2C3E50');
            this.addLabel('I-band', startX + sarcomereWidth * 0.075, centerY + bandHeight/2 + 15, '#2C3E50');
            this.addLabel('A-band', startX + sarcomereWidth * 0.5, centerY + bandHeight/2 + 15, '#2C3E50');
            this.addLabel('H-zone', startX + sarcomereWidth * 0.5, centerY - bandHeight/2 - 10, '#2C3E50');
            this.addLabel('M-line', startX + sarcomereWidth * 0.5, centerY, '#8B2252');
            this.addLabel('Actin\n(thin)', startX + sarcomereWidth * 0.9, centerY - bandHeight/4, '#4A90E2', 'left');
            this.addLabel('Myosin\n(thick)', startX + sarcomereWidth * 0.9, centerY + bandHeight/6, '#E74C3C', 'left');
        }
    }

    if(showInset) {
        this.drawInset(width * 0.55, height * 0.05, width * 0.4, height * 0.3, insetType);
    }

    this.ctx.restore();
}

renderMuscleContractionDiagram(x, y, width, height, options = {}) {
    const {
        showLabels = true,
        state = 'comparison',
        mechanism = 'sliding-filament',
        showInset = false,
        insetType = 'calcium-release'
    } = options;

    this.ctx.save();
    this.ctx.translate(x - width/2, y - height/2);

    if(state === 'comparison') {
        // Show relaxed and contracted side by side
        
        // Relaxed sarcomere
        this.drawSarcomere(width * 0.15, height * 0.3, width * 0.35, height * 0.25, 'relaxed');
        if(showLabels) {
            this.addLabel('Relaxed State', width * 0.325, height * 0.2, '#2C3E50');
        }

        // Contracted sarcomere
        this.drawSarcomere(width * 0.55, height * 0.3, width * 0.35, height * 0.25, 'contracted');
        if(showLabels) {
            this.addLabel('Contracted State', width * 0.725, height * 0.2, '#2C3E50');
        }

        // Double-headed arrow showing difference
        this.ctx.strokeStyle = '#7F8C8D';
        this.ctx.lineWidth = 2;
        this.ctx.setLineDash([5, 5]);
        this.ctx.beginPath();
        this.ctx.moveTo(width * 0.15, height * 0.65);
        this.ctx.lineTo(width * 0.5, height * 0.65);
        this.ctx.stroke();
        this.ctx.beginPath();
        this.ctx.moveTo(width * 0.55, height * 0.65);
        this.ctx.lineTo(width * 0.75, height * 0.65);
        this.ctx.stroke();
        this.ctx.setLineDash([]);

        if(showLabels) {
            this.addLabel('Sarcomere Shortens', width * 0.5, height * 0.7, '#7F8C8D');
        }

    } else if(state === 'relaxed') {
        this.drawSarcomere(width * 0.2, height * 0.35, width * 0.6, height * 0.3, 'relaxed');
        
    } else if(state === 'contracted') {
        this.drawSarcomere(width * 0.2, height * 0.35, width * 0.6, height * 0.3, 'contracted');
    } else if(state === 'cycle') {
        // Cross-bridge cycle stages
        const stages = [
            { name: 'ATP Binding', y: 0.2 },
            { name: 'Detachment', y: 0.35 },
            { name: 'Cocking', y: 0.5 },
            { name: 'Cross-bridge', y: 0.65 },
            { name: 'Power Stroke', y: 0.8 }
        ];

        stages.forEach((stage, index) => {
            const stageX = width * 0.2;
            const stageY = height * stage.y;
            const stageWidth = width * 0.6;
            const stageHeight = height * 0.1;

            // Draw simplified cross-bridge
            // Actin
            this.ctx.strokeStyle = '#4A90E2';
            this.ctx.lineWidth = 4;
            this.ctx.beginPath();
            this.ctx.moveTo(stageX, stageY);
            this.ctx.lineTo(stageX + stageWidth, stageY);
            this.ctx.stroke();

            // Myosin
            this.ctx.strokeStyle = '#E74C3C';
            this.ctx.beginPath();
            this.ctx.moveTo(stageX, stageY + 30);
            this.ctx.lineTo(stageX + stageWidth, stageY + 30);
            this.ctx.stroke();

            // Myosin head position based on stage
            let headX, headAngle;
            if(index === 0) {
                headX = stageX + stageWidth * 0.3;
                headAngle = Math.PI / 4;
            } else if(index === 1) {
                headX = stageX + stageWidth * 0.4;
                headAngle = -Math.PI / 6;
            } else if(index === 2) {
                headX = stageX + stageWidth * 0.5;
                headAngle = -Math.PI / 4;
            } else if(index === 3) {
                headX = stageX + stageWidth * 0.5;
                headAngle = 0;
            } else {
                headX = stageX + stageWidth * 0.6;
                headAngle = Math.PI / 6;
            }

            // Draw myosin head
            this.ctx.save();
            this.ctx.translate(headX, stageY + 30);
            this.ctx.rotate(headAngle);
            this.ctx.strokeStyle = '#C0392B';
            this.ctx.lineWidth = 3;
            this.ctx.beginPath();
            this.ctx.moveTo(0, 0);
            this.ctx.lineTo(0, -25);
            this.ctx.stroke();
            
            this.ctx.fillStyle = '#C0392B';
            this.ctx.beginPath();
            this.ctx.arc(0, -25, 5, 0, Math.PI * 2);
            this.ctx.fill();
            this.ctx.restore();

            // ATP/ADP indicator
            if(index === 0 || index === 1) {
                this.ctx.fillStyle = '#FFD700';
                this.ctx.font = 'bold 10px Arial';
                this.ctx.fillText('ATP', headX + 10, stageY + 20);
            } else if(index === 2) {
                this.ctx.fillStyle = '#FFA500';
                this.ctx.fillText('ADP+Pi', headX + 10, stageY + 20);
            }

            if(showLabels) {
                this.addLabel(stage.name, stageX - 10, stageY + 15, '#2C3E50', 'right');
            }
        });
    }

    if(mechanism === 'sliding-filament' && state === 'comparison') {
        // Show filament overlap
        const arrowY = height * 0.58;
        this.drawArrow(width * 0.2, arrowY, width * 0.45, arrowY, '#4A90E2', 'Actin slides', 6);
        this.drawArrow(width * 0.8, arrowY, width * 0.65, arrowY, '#4A90E2', '', 6);
    }

    if(showInset) {
        this.drawInset(width * 0.55, height * 0.05, width * 0.4, height * 0.3, insetType);
    }

    this.ctx.restore();
}

drawSarcomere(x, y, width, height, state) {
    const sarcomereWidth = state === 'relaxed' ? width : width * 0.7;
    const centerX = x + width / 2;
    const centerY = y + height / 2;
    const halfWidth = sarcomereWidth / 2;

    // Z-lines
    this.ctx.strokeStyle = '#2C3E50';
    this.ctx.lineWidth = 4;
    this.ctx.beginPath();
    this.ctx.moveTo(centerX - halfWidth, centerY - height/2);
    this.ctx.lineTo(centerX - halfWidth, centerY + height/2);
    this.ctx.stroke();
    this.ctx.beginPath();
    this.ctx.moveTo(centerX + halfWidth, centerY - height/2);
    this.ctx.lineTo(centerX + halfWidth, centerY + height/2);
    this.ctx.stroke();

    // Actin (thin filaments)
    this.ctx.strokeStyle = '#4A90E2';
    this.ctx.lineWidth = 3;
    const actinOverlap = state === 'relaxed' ? 0.4 : 0.7;
    
    for(let i = 0; i < 4; i++) {
        const actinY = centerY - height/3 + i * height/5;
        
        // Left actin
        this.ctx.beginPath();
        this.ctx.moveTo(centerX - halfWidth, actinY);
        this.ctx.lineTo(centerX - halfWidth + sarcomereWidth * actinOverlap, actinY);
        this.ctx.stroke();
        
        // Right actin
        this.ctx.beginPath();
        this.ctx.moveTo(centerX + halfWidth, actinY);
        this.ctx.lineTo(centerX + halfWidth - sarcomereWidth * actinOverlap, actinY);
        this.ctx.stroke();
    }

    // Myosin (thick filaments)
    this.ctx.strokeStyle = '#E74C3C';
    this.ctx.lineWidth = 4;
    const myosinWidth = sarcomereWidth * 0.6;
    
    for(let i = 0; i < 3; i++) {
        const myosinY = centerY - height/4 + i * height/4;
        this.ctx.beginPath();
        this.ctx.moveTo(centerX - myosinWidth/2, myosinY);
        this.ctx.lineTo(centerX + myosinWidth/2, myosinY);
        this.ctx.stroke();
        
        // Myosin heads
        if(state === 'contracted') {
            for(let j = 0; j < 6; j++) {
                const headX = centerX - myosinWidth/2 + (j + 1) * myosinWidth/7;
                this.ctx.fillStyle = '#C0392B';
                this.ctx.beginPath();
                this.ctx.arc(headX, myosinY - 6, 3, 0, Math.PI * 2);
                this.ctx.fill();
                this.ctx.beginPath();
                this.ctx.arc(headX, myosinY + 6, 3, 0, Math.PI * 2);
                this.ctx.fill();
            }
        }
    }

    // M-line
    this.ctx.strokeStyle = '#8B2252';
    this.ctx.lineWidth = 2;
    this.ctx.beginPath();
    this.ctx.moveTo(centerX, centerY - height/3);
    this.ctx.lineTo(centerX, centerY + height/3);
    this.ctx.stroke();
}

// ========== PLANT BIOLOGY ==========

renderLeafCrossSectionDiagram(x, y, width, height, options = {}) {
    const {
        showLabels = true,
        layer = 'complete',
        process = 'structure',
        showInset = false,
        insetType = 'stomata-mechanism'
    } = options;

    this.ctx.save();
    this.ctx.translate(x - width/2, y - height/2);

    const leafWidth = width * 0.7;
    const leafHeight = height * 0.6;
    const leafX = width * 0.15;
    const leafY = height * 0.2;

    if(layer === 'complete') {
        // Upper cuticle
        this.ctx.fillStyle = '#FFFFFF';
        this.ctx.globalAlpha = 0.3;
        this.ctx.fillRect(leafX, leafY, leafWidth, height * 0.02);
        this.ctx.globalAlpha = 1.0;

        // Upper epidermis
        this.ctx.fillStyle = '#D0E8D0';
        this.ctx.strokeStyle = '#90C090';
        this.ctx.lineWidth = 1;
        this.ctx.fillRect(leafX, leafY + height * 0.02, leafWidth, height * 0.05);
        this.ctx.strokeRect(leafX, leafY + height * 0.02, leafWidth, height * 0.05);

        // Palisade mesophyll
        this.ctx.fillStyle = '#4CAF50';
        this.ctx.fillRect(leafX, leafY + height * 0.07, leafWidth, height * 0.18);
        
        // Draw palisade cells
        for(let i = 0; i < 15; i++) {
            const cellX = leafX + (i * leafWidth / 15);
            this.ctx.strokeStyle = '#2E7D32';
            this.ctx.lineWidth = 1;
            this.ctx.strokeRect(cellX, leafY + height * 0.07, leafWidth / 15, height * 0.18);
            
            // Chloroplasts
            for(let j = 0; j < 4; j++) {
                this.ctx.fillStyle = '#1B5E20';
                this.ctx.beginPath();
                this.ctx.arc(
                    cellX + (leafWidth / 30),
                    leafY + height * 0.08 + j * height * 0.04,
                    3, 0, Math.PI * 2
                );
                this.ctx.fill();
            }
        }

        // Spongy mesophyll
        this.ctx.fillStyle = '#81C784';
        this.ctx.fillRect(leafX, leafY + height * 0.25, leafWidth, height * 0.25);
        
        // Draw irregular spongy cells with air spaces
        for(let i = 0; i < 20; i++) {
            const cellX = leafX + Math.random() * leafWidth;
            const cellY = leafY + height * 0.26 + Math.random() * height * 0.22;
            const cellSize = 10 + Math.random() * 15;
            
            this.ctx.fillStyle = '#66BB6A';
            this.ctx.strokeStyle = '#43A047';
            this.ctx.lineWidth = 1;
            this.ctx.beginPath();
            this.ctx.arc(cellX, cellY, cellSize, 0, Math.PI * 2);
            this.ctx.fill();
            this.ctx.stroke();
            
            // Chloroplasts (fewer than palisade)
            for(let j = 0; j < 2; j++) {
                this.ctx.fillStyle = '#2E7D32';
                this.ctx.beginPath();
                this.ctx.arc(
                    cellX + (Math.random() - 0.5) * cellSize * 0.5,
                    cellY + (Math.random() - 0.5) * cellSize * 0.5,
                    2, 0, Math.PI * 2
                );
                this.ctx.fill();
            }
        }

        // Vascular bundle (xylem and phloem)
        const veinX = leafX + leafWidth * 0.5;
        const veinY = leafY + height * 0.3;
        
        // Xylem
        this.ctx.fillStyle = '#8B4513';
        this.ctx.fillRect(veinX - 10, veinY, 8, height * 0.15);
        this.ctx.strokeStyle = '#654321';
        this.ctx.lineWidth = 1;
        this.ctx.strokeRect(veinX - 10, veinY, 8, height * 0.15);
        
        // Phloem
        this.ctx.fillStyle = '#DEB887';
        this.ctx.fillRect(veinX + 2, veinY, 8, height * 0.15);
        this.ctx.strokeRect(veinX + 2, veinY, 8, height * 0.15);

        // Lower epidermis
        this.ctx.fillStyle = '#D0E8D0';
        this.ctx.fillRect(leafX, leafY + height * 0.5, leafWidth, height * 0.05);
        this.ctx.strokeRect(leafX, leafY + height * 0.5, leafWidth, height * 0.05);

        // Stomata
        for(let i = 0; i < 8; i++) {
            const stomaX = leafX + (i + 1) * leafWidth / 9;
            const stomaY = leafY + height * 0.525;
            
            // Guard cells
            this.ctx.fillStyle = '#4CAF50';
            this.ctx.beginPath();
            this.ctx.ellipse(stomaX - 5, stomaY, 4, 8, 0, 0, Math.PI * 2);
            this.ctx.fill();
            this.ctx.beginPath();
            this.ctx.ellipse(stomaX + 5, stomaY, 4, 8, 0, 0, Math.PI * 2);
            this.ctx.fill();
            
            // Stoma opening
            this.ctx.fillStyle = '#FFFFFF';
            this.ctx.fillRect(stomaX - 2, stomaY - 4, 4, 8);
        }

        // Lower cuticle
        this.ctx.fillStyle = '#FFFFFF';
        this.ctx.globalAlpha = 0.3;
        this.ctx.fillRect(leafX, leafY + height * 0.55, leafWidth, height * 0.02);
        this.ctx.globalAlpha = 1.0;

        if(showLabels) {
            this.addLabel('Upper Cuticle', leafX - 10, leafY + height * 0.01, '#7F8C8D', 'right');
            this.addLabel('Upper Epidermis', leafX - 10, leafY + height * 0.045, '#2C3E50', 'right');
            this.addLabel('Palisade\nMesophyll', leafX - 10, leafY + height * 0.16, '#2C3E50', 'right');
            this.addLabel('Spongy\nMesophyll', leafX - 10, leafY + height * 0.37, '#2C3E50', 'right');
            this.addLabel('Lower Epidermis', leafX - 10, leafY + height * 0.525, '#2C3E50', 'right');
            this.addLabel('Xylem', veinX - 20, veinY + height * 0.075, '#8B4513', 'right');
            this.addLabel('Phloem', veinX + 20, veinY + height * 0.075, '#DEB887', 'left');
            this.addLabel('Stoma', leafX + leafWidth / 9 - 15, leafY + height * 0.545, '#4CAF50', 'right');
        }

        if(process === 'photosynthesis') {
            // Show light arrows and CO2/O2
            this.drawArrow(width * 0.5, height * 0.05, width * 0.5, leafY, '#FFD700', 'Light', 8);
            this.drawArrow(leafX + leafWidth / 3, height * 0.65, leafX + leafWidth / 3, leafY + height * 0.53, '#4A90E2', 'CO₂', 6);
            this.drawArrow(leafX + 2 * leafWidth / 3, leafY + height * 0.53, leafX + 2 * leafWidth / 3, height * 0.65, '#E74C3C', 'O₂', 6);
        } else if(process === 'transpiration') {
            // Water movement
            this.drawArrow(veinX, veinY + height * 0.15, veinX, veinY, '#4A90E2', 'H₂O', 6);
            // Water vapor out
            for(let i = 0; i < 4; i++) {
                const stomaX = leafX + (i * 2 + 1) * leafWidth / 9;
                this.drawArrow(stomaX, leafY + height * 0.53, stomaX, height * 0.65, '#ADD8E6', 'H₂O', 5);
            }
        }

    } else if(layer === 'palisade') {
        // Detailed palisade cells
        for(let i = 0; i < 10; i++) {
            const cellX = leafX + i * leafWidth / 10;
            const cellY = leafY + height * 0.2;
            const cellWidth = leafWidth / 10;
            const cellHeight = height * 0.5;
            
            this.ctx.fillStyle = '#4CAF50';
            this.ctx.strokeStyle = '#2E7D32';
            this.ctx.lineWidth = 2;
            this.ctx.fillRect(cellX, cellY, cellWidth, cellHeight);
            this.ctx.strokeRect(cellX, cellY, cellWidth, cellHeight);
            
            // Nucleus
            this.ctx.fillStyle = '#9370DB';
            this.ctx.beginPath();
            this.ctx.arc(cellX + cellWidth/2, cellY + cellHeight * 0.7, 8, 0, Math.PI * 2);
            this.ctx.fill();
            
            // Many chloroplasts
            for(let j = 0; j < 12; j++) {
                this.ctx.fillStyle = '#1B5E20';
                this.ctx.beginPath();
                this.ctx.arc(
                    cellX + cellWidth * (0.2 + Math.random() * 0.6),
                    cellY + cellHeight * (0.1 + Math.random() * 0.5),
                    4, 0, Math.PI * 2
                );
                this.ctx.fill();
            }
        }

        if(showLabels) {
            this.addLabel('Palisade Cell', leafX + leafWidth / 20, leafY + height * 0.15, '#2C3E50');
            this.addLabel('Chloroplasts', leafX + leafWidth / 20, leafY + height * 0.3, '#1B5E20');
            this.addLabel('Nucleus', leafX + leafWidth / 20, leafY + height * 0.65, '#9370DB');
        }
    }

    if(showInset) {
        this.drawInset(width * 0.55, height * 0.05, width * 0.4, height * 0.3, insetType);
    }

    this.ctx.restore();
}

renderPhotosynthesisDiagram(x, y, width, height, options = {}) {
    const {
        showLabels = true,
        stage = 'complete',
        detail = 'overview',
        showEquation = true,
        showInset = false,
        insetType = 'z-scheme'
    } = options;

    this.ctx.save();
    this.ctx.translate(x - width/2, y - height/2);

    if(stage === 'complete') {
        // Chloroplast
        const chloroX = width * 0.3;
        const chloroY = height * 0.35;
        const chloroWidth = width * 0.4;
        const chloroHeight = height * 0.4;
        
        AnatomicalShapes.drawChloroplast(this.ctx, chloroX, chloroY, chloroWidth, chloroHeight);

        // Light reactions (thylakoid)
        const thylaX = chloroX + chloroWidth * 0.25;
        const thylaY = chloroY + chloroHeight * 0.3;
        
        this.ctx.fillStyle = '#2E7D32';
        this.ctx.strokeStyle = '#1B5E20';
        this.ctx.lineWidth = 2;
        this.ctx.fillRect(thylaX, thylaY, chloroWidth * 0.5, chloroHeight * 0.15);
        this.ctx.strokeRect(thylaX, thylaY, chloroWidth * 0.5, chloroHeight * 0.15);

        // Light arrows
        for(let i = 0; i < 5; i++) {
            const lightX = thylaX + i * chloroWidth * 0.1 + 20;
            this.drawArrow(lightX, height * 0.15, lightX, thylaY, '#FFD700', '', 6);
        }

        // H2O input
        this.drawArrow(chloroX - 30, thylaY + chloroHeight * 0.075, thylaX, thylaY + chloroHeight * 0.075, '#4A90E2', 'H₂O', 6);
        
        // O2 output
        this.drawArrow(thylaX + chloroWidth * 0.5, thylaY + chloroHeight * 0.075, chloroX + chloroWidth + 30, thylaY + chloroHeight * 0.075, '#E74C3C', 'O₂', 6);

        // ATP and NADPH
        this.ctx.fillStyle = '#FFD700';
        this.ctx.font = 'bold 12px Arial';
        this.ctx.fillText('ATP', thylaX + chloroWidth * 0.25, thylaY + chloroHeight * 0.25);
        this.ctx.fillText('NADPH', thylaX + chloroWidth * 0.35, thylaY + chloroHeight * 0.25);

        // Calvin Cycle (stroma)
        const calvinX = chloroX + chloroWidth * 0.3;
        const calvinY = chloroY + chloroHeight * 0.6;
        const calvinRadius = chloroWidth * 0.2;
        
        this.ctx.strokeStyle = '#81C784';
        this.ctx.lineWidth = 3;
        this.ctx.setLineDash([5, 5]);
        this.ctx.beginPath();
        this.ctx.arc(calvinX, calvinY, calvinRadius, 0, Math.PI * 2);
        this.ctx.stroke();
        this.ctx.setLineDash([]);

        // CO2 input
        this.drawArrow(chloroX - 30, calvinY, calvinX - calvinRadius, calvinY, '#4A90E2', 'CO₂', 6);
        
        // Glucose output
        this.drawArrow(calvinX + calvinRadius, calvinY, chloroX + chloroWidth + 30, calvinY, '#FFA500', 'C₆H₁₂O₆', 6);

        // Arrow from light reactions to Calvin cycle
        this.drawArrow(thylaX + chloroWidth * 0.25, thylaY + chloroHeight * 0.15, calvinX, calvinY - calvinRadius, '#FFD700', 'ATP\nNADPH', 6);

        if(showLabels) {
            this.addLabel('Light\nReactions', thylaX - 10, thylaY + chloroHeight * 0.075, '#2C3E50', 'right');
            this.addLabel('Calvin\nCycle', calvinX, calvinY, '#2C3E50');
            this.addLabel('Thylakoid', thylaX + chloroWidth * 0.5 + 10, thylaY + chloroHeight * 0.075, '#2E7D32', 'left');
            this.addLabel('Stroma', chloroX + 10, chloroY + chloroHeight * 0.8, '#66BB6A', 'left');
        }

        if(showEquation) {
            this.ctx.font = '14px Arial';
            this.ctx.fillStyle = '#2C3E50';
            this.ctx.textAlign = 'center';
            const eqY = height * 0.85;
            this.ctx.fillText('6CO₂ + 6H₂O + Light Energy → C₆H₁₂O₆ + 6O₂', width * 0.5, eqY);
        }

    } else if(stage === 'light-reactions') {
        // Detailed light reactions in thylakoid membrane
        // This would show photosystems I and II, electron transport chain, etc.
        
    } else if(stage === 'calvin-cycle') {
        // Detailed Calvin cycle
    }

    if(showInset) {
        this.drawInset(width * 0.55, height * 0.05, width * 0.4, height * 0.3, insetType);
    }

    this.ctx.restore();
}

// Continue with more plant biology diagrams...
renderStomataDiagram(x, y, width, height, options = {}) {
    const {
        showLabels = true,
        state = 'both',
        view = 'cross-section',
        showInset = false,
        insetType = 'turgor-pressure'
    } = options;

    this.ctx.save();
    this.ctx.translate(x - width/2, y - height/2);

    if(state === 'both') {
        // Show open and closed side by side
        this.drawStoma(width * 0.25, height * 0.5, width * 0.3, height * 0.4, 'open', view);
        this.drawStoma(width * 0.75, height * 0.5, width * 0.3, height * 0.4, 'closed', view);

        if(showLabels) {
            this.addLabel('Open Stoma', width * 0.25, height * 0.2, '#2C3E50');
            this.addLabel('Closed Stoma', width * 0.75, height * 0.2, '#2C3E50');
            this.addLabel('(Day / High Water)', width * 0.25, height * 0.85, '#7F8C8D');
            this.addLabel('(Night / Low Water)', width * 0.75, height * 0.85, '#7F8C8D');
        }
    } else {
        // Single state view
        this.drawStoma(width * 0.5, height * 0.5, width * 0.6, height * 0.6, state, view);
        
        if(showLabels) {
            const stateName = state === 'open' ? 'Open Stoma' : 'Closed Stoma';
            this.addLabel(stateName, width * 0.5, height * 0.15, '#2C3E50');
        }
    }

    if(showInset) {
        this.drawInset(width * 0.55, height * 0.05, width * 0.4, height * 0.3, insetType);
    }

    this.ctx.restore();
}

drawStoma(x, y, width, height, state, view) {
    this.ctx.save();
    this.ctx.translate(x, y);

    if(view === 'cross-section') {
        // Guard cells
        const guardWidth = width * 0.15;
        const guardHeight = height * 0.4;
        const poreWidth = state === 'open' ? width * 0.12 : width * 0.02;

        // Left guard cell
        this.ctx.fillStyle = state === 'open' ? '#4CAF50' : '#81C784';
        this.ctx.strokeStyle = '#2E7D32';
        this.ctx.lineWidth = 2;
        
        this.ctx.beginPath();
        if(state === 'open') {
            // Curved outward (turgid)
            this.ctx.moveTo(-poreWidth/2 - guardWidth, -guardHeight/2);
            this.ctx.quadraticCurveTo(-poreWidth/2 - guardWidth * 1.5, 0, -poreWidth/2 - guardWidth, guardHeight/2);
            this.ctx.lineTo(-poreWidth/2, guardHeight/2);
            this.ctx.quadraticCurveTo(-poreWidth/2 - guardWidth * 0.3, 0, -poreWidth/2, -guardHeight/2);
            this.ctx.closePath();
        } else {
            // Straight (flaccid)
            this.ctx.roundRect(-poreWidth/2 - guardWidth, -guardHeight/2, guardWidth, guardHeight, 5);
        }
        this.ctx.fill();
        this.ctx.stroke();

        // Chloroplasts in left guard cell
        for(let i = 0; i < 4; i++) {
            this.ctx.fillStyle = '#1B5E20';
            this.ctx.beginPath();
            this.ctx.arc(
                -poreWidth/2 - guardWidth * 0.6,
                -guardHeight/3 + i * guardHeight/5,
                3, 0, Math.PI * 2
            );
            this.ctx.fill();
        }

        // Right guard cell
        this.ctx.fillStyle = state === 'open' ? '#4CAF50' : '#81C784';
        this.ctx.beginPath();
        if(state === 'open') {
            this.ctx.moveTo(poreWidth/2 + guardWidth, -guardHeight/2);
            this.ctx.quadraticCurveTo(poreWidth/2 + guardWidth * 1.5, 0, poreWidth/2 + guardWidth, guardHeight/2);
            this.ctx.lineTo(poreWidth/2, guardHeight/2);
            this.ctx.quadraticCurveTo(poreWidth/2 + guardWidth * 0.3, 0, poreWidth/2, -guardHeight/2);
            this.ctx.closePath();
        } else {
            this.ctx.roundRect(poreWidth/2, -guardHeight/2, guardWidth, guardHeight, 5);
        }
        this.ctx.fill();
        this.ctx.stroke();

        // Chloroplasts in right guard cell
        for(let i = 0; i < 4; i++) {
            this.ctx.fillStyle = '#1B5E20';
            this.ctx.beginPath();
            this.ctx.arc(
                poreWidth/2 + guardWidth * 0.6,
                -guardHeight/3 + i * guardHeight/5,
                3, 0, Math.PI * 2
            );
            this.ctx.fill();
        }

        // Pore
        this.ctx.fillStyle = '#FFFFFF';
        this.ctx.fillRect(-poreWidth/2, -guardHeight/2, poreWidth, guardHeight);
        
        // Subsidiary cells
        this.ctx.fillStyle = '#C8E6C9';
        this.ctx.strokeStyle = '#81C784';
        this.ctx.lineWidth = 1;
        this.ctx.fillRect(-poreWidth/2 - guardWidth * 2, -guardHeight/2 - 10, guardWidth * 0.8, guardHeight + 20);
        this.ctx.strokeRect(-poreWidth/2 - guardWidth * 2, -guardHeight/2 - 10, guardWidth * 0.8, guardHeight + 20);
        this.ctx.fillRect(poreWidth/2 + guardWidth * 1.2, -guardHeight/2 - 10, guardWidth * 0.8, guardHeight + 20);
        this.ctx.strokeRect(poreWidth/2 + guardWidth * 1.2, -guardHeight/2 - 10, guardWidth * 0.8, guardHeight + 20);

        // Gas exchange arrows
        if(state === 'open') {
            this.ctx.strokeStyle = '#4A90E2';
            this.ctx.lineWidth = 2;
            this.ctx.fillStyle = '#4A90E2';
            
            // CO2 in
            this.drawArrow(0, -guardHeight, 0, -guardHeight/2 - 5, '#4A90E2', 'CO₂', 6);
            // H2O and O2 out
            this.drawArrow(0, guardHeight/2 + 5, 0, guardHeight, '#E74C3C', 'O₂/H₂O', 6);
        }

    } else if(view === 'surface') {
        // Surface view
        const stomaLength = width * 0.3;
        const stomaWidth = state === 'open' ? width * 0.12 : width * 0.04;

        // Left guard cell
        this.ctx.fillStyle = state === 'open' ? '#4CAF50' : '#81C784';
        this.ctx.strokeStyle = '#2E7D32';
        this.ctx.lineWidth = 2;
        this.ctx.beginPath();
        this.ctx.ellipse(-stomaWidth/2 - width * 0.05, 0, width * 0.05, stomaLength/2, 0, 0, Math.PI * 2);
        this.ctx.fill();
        this.ctx.stroke();

        // Right guard cell
        this.ctx.beginPath();
        this.ctx.ellipse(stomaWidth/2 + width * 0.05, 0, width * 0.05, stomaLength/2, 0, 0, Math.PI * 2);
        this.ctx.fill();
        this.ctx.stroke();

        // Pore
        this.ctx.fillStyle = '#2C3E50';
        this.ctx.fillRect(-stomaWidth/2, -stomaLength/2, stomaWidth, stomaLength);
    }

    this.ctx.restore();
}

renderFlowerStructureDiagram(x, y, width, height, options = {}) {
    const {
        showLabels = true,
        component = 'complete',
        stage = 'mature',
        showInset = false,
        insetType = 'double-fertilization'
    } = options;

    this.ctx.save();
    this.ctx.translate(x - width/2, y - height/2);

    const flowerSize = Math.min(width, height) * 0.6;
    const centerX = width * 0.5;
    const centerY = height * 0.5;

    if(component === 'complete') {
        // Receptacle
        this.ctx.fillStyle = '#8BC34A';
        this.ctx.strokeStyle = '#689F38';
        this.ctx.lineWidth = 2;
        this.ctx.beginPath();
        this.ctx.arc(centerX, centerY + flowerSize * 0.3, flowerSize * 0.15, 0, Math.PI * 2);
        this.ctx.fill();
        this.ctx.stroke();

        // Sepals (4)
        this.ctx.fillStyle = '#7CB342';
        for(let i = 0; i < 4; i++) {
            const angle = (Math.PI / 2) * i + Math.PI / 4;
            this.ctx.save();
            this.ctx.translate(centerX, centerY);
            this.ctx.rotate(angle);
            this.ctx.beginPath();
            this.ctx.ellipse(0, -flowerSize * 0.35, flowerSize * 0.08, flowerSize * 0.15, 0, 0, Math.PI * 2);
            this.ctx.fill();
            this.ctx.stroke();
            this.ctx.restore();
        }

        // Petals (5)
        this.ctx.fillStyle = '#FF69B4';
        this.ctx.strokeStyle = '#FF1493';
        for(let i = 0; i < 5; i++) {
            const angle = (Math.PI * 2 / 5) * i - Math.PI / 2;
            this.ctx.save();
            this.ctx.translate(centerX, centerY);
            this.ctx.rotate(angle);
            this.ctx.beginPath();
            this.ctx.ellipse(0, -flowerSize * 0.28, flowerSize * 0.12, flowerSize * 0.2, 0, 0, Math.PI * 2);
            this.ctx.fill();
            this.ctx.stroke();
            this.ctx.restore();
        }

        // Stamens (6)
        this.ctx.strokeStyle = '#FFD700';
        this.ctx.lineWidth = 2;
        for(let i = 0; i < 6; i++) {
            const angle = (Math.PI * 2 / 6) * i;
            const stamenX = centerX + Math.cos(angle) * flowerSize * 0.12;
            const stamenY = centerY + Math.sin(angle) * flowerSize * 0.12;
            
            // Filament
            this.ctx.beginPath();
            this.ctx.moveTo(centerX, centerY);
            this.ctx.lineTo(stamenX, stamenY);
            this.ctx.stroke();
            
            // Anther
            this.ctx.fillStyle = '#FFA500';
            this.ctx.fillRect(stamenX - 4, stamenY - 6, 8, 12);
            this.ctx.strokeRect(stamenX - 4, stamenY - 6, 8, 12);
            
            // Pollen
            if(stage === 'pollination' || stage === 'mature') {
                for(let j = 0; j < 3; j++) {
                    this.ctx.fillStyle = '#FFFF00';
                    this.ctx.beginPath();
                    this.ctx.arc(stamenX + (Math.random() - 0.5) * 15, stamenY + (Math.random() - 0.5) * 15, 2, 0, Math.PI * 2);
                    this.ctx.fill();
                }
            }
        }

        // Pistil (carpel)
        // Ovary
        this.ctx.fillStyle = '#90EE90';
        this.ctx.strokeStyle = '#228B22';
        this.ctx.lineWidth = 2;
        this.ctx.beginPath();
        this.ctx.ellipse(centerX, centerY + flowerSize * 0.05, flowerSize * 0.08, flowerSize * 0.12, 0, 0, Math.PI * 2);
        this.ctx.fill();
        this.ctx.stroke();

        // Ovules inside ovary
        for(let i = 0; i < 4; i++) {
            this.ctx.fillStyle = '#FFFFFF';
            this.ctx.beginPath();
            this.ctx.arc(
                centerX + (i % 2 === 0 ? -1 : 1) * flowerSize * 0.03,
                centerY + flowerSize * 0.02 + Math.floor(i / 2) * flowerSize * 0.06,
                flowerSize * 0.02, 0, Math.PI * 2
            );
            this.ctx.fill();
        }

        // Style
        this.ctx.strokeStyle = '#32CD32';
        this.ctx.lineWidth = 4;
        this.ctx.beginPath();
        this.ctx.moveTo(centerX, centerY - flowerSize * 0.07);
        this.ctx.lineTo(centerX, centerY - flowerSize * 0.2);
        this.ctx.stroke();

        // Stigma
        this.ctx.fillStyle = '#FFD700';
        this.ctx.beginPath();
        this.ctx.arc(centerX, centerY - flowerSize * 0.2, flowerSize * 0.05, 0, Math.PI * 2);
        this.ctx.fill();
        this.ctx.stroke();

        // Pollen on stigma
        if(stage === 'pollination' || stage === 'fertilization') {
            for(let i = 0; i < 5; i++) {
                this.ctx.fillStyle = '#FFFF00';
                this.ctx.beginPath();
                this.ctx.arc(
                    centerX + (Math.random() - 0.5) * flowerSize * 0.08,
                    centerY - flowerSize * 0.2 + (Math.random() - 0.5) * flowerSize * 0.08,
                    3, 0, Math.PI * 2
                );
                this.ctx.fill();
            }
        }

        // Pollen tube
        if(stage === 'fertilization') {
            this.ctx.strokeStyle = '#FFA500';
            this.ctx.lineWidth = 2;
            this.ctx.setLineDash([3, 3]);
            this.ctx.beginPath();
            this.ctx.moveTo(centerX, centerY - flowerSize * 0.2);
            this.ctx.lineTo(centerX, centerY + flowerSize * 0.05);
            this.ctx.stroke();
            this.ctx.setLineDash([]);
        }

        if(showLabels) {
            this.addLabel('Stigma', centerX + flowerSize * 0.15, centerY - flowerSize * 0.2, '#FFD700', 'left');
            this.addLabel('Style', centerX + flowerSize * 0.15, centerY - flowerSize * 0.13, '#32CD32', 'left');
            this.addLabel('Ovary', centerX + flowerSize * 0.15, centerY + flowerSize * 0.05, '#90EE90', 'left');
            this.addLabel('Anther', centerX + flowerSize * 0.2, centerY - flowerSize * 0.05, '#FFA500', 'left');
            this.addLabel('Filament', centerX + flowerSize * 0.15, centerY + flowerSize * 0.02, '#FFD700', 'left');
            this.addLabel('Petal', centerX + flowerSize * 0.25, centerY - flowerSize * 0.25, '#FF69B4', 'left');
            this.addLabel('Sepal', centerX - flowerSize * 0.25, centerY - flowerSize * 0.25, '#7CB342', 'right');
            this.addLabel('Receptacle', centerX, centerY + flowerSize * 0.4, '#8BC34A');
        }

    } else if(component === 'stamen') {
        // Detailed stamen
        const stamenX = centerX;
        const stamenY = centerY + height * 0.2;

        // Filament
        this.ctx.strokeStyle = '#FFD700';
        this.ctx.lineWidth = 8;
        this.ctx.beginPath();
        this.ctx.moveTo(stamenX, stamenY);
        this.ctx.lineTo(stamenX, stamenY - height * 0.4);
        this.ctx.stroke();

        // Anther (two lobes)
        this.ctx.fillStyle = '#FFA500';
        this.ctx.strokeStyle = '#FF8C00';
        this.ctx.lineWidth = 2;
        this.ctx.fillRect(stamenX - 25, stamenY - height * 0.5, 20, height * 0.08);
        this.ctx.strokeRect(stamenX - 25, stamenY - height * 0.5, 20, height * 0.08);
        this.ctx.fillRect(stamenX + 5, stamenY - height * 0.5, 20, height * 0.08);
        this.ctx.strokeRect(stamenX + 5, stamenY - height * 0.5, 20, height * 0.08);

        // Pollen grains
        for(let i = 0; i < 20; i++) {
            this.ctx.fillStyle = '#FFFF00';
            this.ctx.strokeStyle = '#FFD700';
            this.ctx.lineWidth = 1;
            this.ctx.beginPath();
            this.ctx.arc(
                stamenX + (Math.random() - 0.5) * 60,
                stamenY - height * 0.46 + (Math.random() - 0.5) * height * 0.08,
                4, 0, Math.PI * 2
            );
            this.ctx.fill();
            this.ctx.stroke();
        }

        if(showLabels) {
            this.addLabel('Anther\n(Pollen Production)', stamenX + 40, stamenY - height * 0.46, '#2C3E50', 'left');
            this.addLabel('Filament', stamenX + 20, stamenY - height * 0.2, '#2C3E50', 'left');
        }

    } else if(component === 'pistil') {
        // Detailed pistil cross-section
        const pistilX = centerX;
        const pistilY = centerY + height * 0.1;

        // Ovary (cross-section)
        this.ctx.fillStyle = '#90EE90';
        this.ctx.strokeStyle = '#228B22';
        this.ctx.lineWidth = 3;
        this.ctx.beginPath();
        this.ctx.ellipse(pistilX, pistilY, width * 0.2, height * 0.25, 0, 0, Math.PI * 2);
        this.ctx.fill();
        this.ctx.stroke();

        // Ovules with embryo sacs
        const ovulePositions = [
            [0.5, 0.3], [0.5, 0.5], [0.5, 0.7],
            [0.3, 0.4], [0.7, 0.4], [0.3, 0.6], [0.7, 0.6]
        ];

        ovulePositions.forEach(([xRatio, yRatio]) => {
            const ovuleX = pistilX + (xRatio - 0.5) * width * 0.3;
            const ovuleY = pistilY + (yRatio - 0.5) * height * 0.4;
            
            // Ovule
            this.ctx.fillStyle = '#FFFFFF';
            this.ctx.strokeStyle = '#32CD32';
            this.ctx.lineWidth = 2;
            this.ctx.beginPath();
            this.ctx.ellipse(ovuleX, ovuleY, width * 0.04, height * 0.05, 0, 0, Math.PI * 2);
            this.ctx.fill();
            this.ctx.stroke();

            // Embryo sac (inside ovule)
            this.ctx.fillStyle = '#FFE4E1';
            this.ctx.beginPath();
            this.ctx.arc(ovuleX, ovuleY, width * 0.02, 0, Math.PI * 2);
            this.ctx.fill();

            // Egg cell
            this.ctx.fillStyle = '#FF69B4';
            this.ctx.beginPath();
            this.ctx.arc(ovuleX, ovuleY, width * 0.01, 0, Math.PI * 2);
            this.ctx.fill();
        });

        // Style
        this.ctx.strokeStyle = '#32CD32';
        this.ctx.lineWidth = 10;
        this.ctx.beginPath();
        this.ctx.moveTo(pistilX, pistilY - height * 0.25);
        this.ctx.lineTo(pistilX, pistilY - height * 0.5);
        this.ctx.stroke();

        // Stigma
        this.ctx.fillStyle = '#FFD700';
        this.ctx.strokeStyle = '#FFA500';
        this.ctx.lineWidth = 2;
        this.ctx.beginPath();
        this.ctx.arc(pistilX, pistilY - height * 0.5, width * 0.08, 0, Math.PI * 2);
        this.ctx.fill();
        this.ctx.stroke();

        if(showLabels) {
            this.addLabel('Stigma', pistilX + width * 0.15, pistilY - height * 0.5, '#FFD700', 'left');
            this.addLabel('Style', pistilX + width * 0.15, pistilY - height * 0.37, '#32CD32', 'left');
            this.addLabel('Ovary', pistilX + width * 0.25, pistilY, '#90EE90', 'left');
            this.addLabel('Ovules', pistilX + width * 0.25, pistilY + height * 0.15, '#FFFFFF', 'left');
        }
    }

    if(showInset) {
        this.drawInset(width * 0.55, height * 0.05, width * 0.4, height * 0.3, insetType);
    }

    this.ctx.restore();
}

// ========== MICROBIOLOGY ==========

renderBacterialCellDiagram(x, y, width, height, options = {}) {
    const {
        showLabels = true,
        type = 'gram-positive',
        structure = 'complete',
        showInset = false,
        insetType = 'peptidoglycan-layer'
    } = options;

    this.ctx.save();
    this.ctx.translate(x - width/2, y - height/2);

    const cellWidth = width * 0.5;
    const cellHeight = height * 0.3;
    const cellX = width * 0.25;
    const cellY = height * 0.4;

    if(structure === 'complete') {
        // Draw bacterial cell based on type
        
        // Cell wall and membrane layers
        if(type === 'gram-positive') {
            // Thick peptidoglycan layer
            this.ctx.fillStyle = '#9370DB';
            this.ctx.strokeStyle = '#6A5ACD';
            this.ctx.lineWidth = 8;
            this.ctx.beginPath();
            this.ctx.ellipse(cellX + cellWidth/2, cellY, cellWidth/2, cellHeight/2, 0, 0, Math.PI * 2);
            this.ctx.fill();
            this.ctx.stroke();

            // Cell membrane (inner)
            this.ctx.strokeStyle = '#FFB6D9';
            this.ctx.lineWidth = 3;
            this.ctx.beginPath();
            this.ctx.ellipse(cellX + cellWidth/2, cellY, cellWidth/2 - 8, cellHeight/2 - 8, 0, 0, Math.PI * 2);
            this.ctx.stroke();

        } else if(type === 'gram-negative') {
            // Outer membrane
            this.ctx.strokeStyle = '#E74C3C';
            this.ctx.lineWidth = 3;
            this.ctx.beginPath();
            this.ctx.ellipse(cellX + cellWidth/2, cellY, cellWidth/2, cellHeight/2, 0, 0, Math.PI * 2);
            this.ctx.stroke();

            // Thin peptidoglycan layer
            this.ctx.strokeStyle = '#9370DB';
            this.ctx.lineWidth = 2;
            this.ctx.beginPath();
            this.ctx.ellipse(cellX + cellWidth/2, cellY, cellWidth/2 - 5, cellHeight/2 - 5, 0, 0, Math.PI * 2);
            this.ctx.stroke();

            // Inner membrane
            this.ctx.strokeStyle = '#FFB6D9';
            this.ctx.lineWidth = 3;
            this.ctx.beginPath();
            this.ctx.ellipse(cellX + cellWidth/2, cellY, cellWidth/2 - 10, cellHeight/2 - 10, 0, 0, Math.PI * 2);
            this.ctx.stroke();

            // Periplasmic space
            this.ctx.fillStyle = 'rgba(255, 182, 217, 0.2)';
            this.ctx.fill();
        }

        // Cytoplasm
        this.ctx.fillStyle = '#FFE4E8';
        this.ctx.beginPath();
        this.ctx.ellipse(cellX + cellWidth/2, cellY, cellWidth/2 - 15, cellHeight/2 - 15, 0, 0, Math.PI * 2);
        this.ctx.fill();

        // Nucleoid (irregular DNA region)
        this.ctx.strokeStyle = '#4A90E2';
        this.ctx.lineWidth = 2;
        this.ctx.fillStyle = 'rgba(74, 144, 226, 0.3)';
        this.ctx.beginPath();
        this.ctx.ellipse(cellX + cellWidth/2, cellY, cellWidth * 0.25, cellHeight * 0.2, Math.PI/6, 0, Math.PI * 2);
        this.ctx.fill();
        this.ctx.stroke();

        // DNA strands in nucleoid
        for(let i = 0; i < 5; i++) {
            this.ctx.strokeStyle = '#1E88E5';
            this.ctx.lineWidth = 1;
            this.ctx.beginPath();
            const startAngle = Math.random() * Math.PI * 2;
            const radius = cellWidth * 0.15;
            for(let j = 0; j < 20; j++) {
                const angle = startAngle + j * 0.3;
                const x = cellX + cellWidth/2 + Math.cos(angle) * radius * (0.5 + Math.random() * 0.5);
                const y = cellY + Math.sin(angle) * radius * (0.3 + Math.random() * 0.3);
                if(j === 0) this.ctx.moveTo(x, y);
                else this.ctx.lineTo(x, y);
            }
            this.ctx.stroke();
        }

        // Ribosomes (small dots)
        this.ctx.fillStyle = '#8B4513';
        for(let i = 0; i < 25; i++) {
            const angle = Math.random() * Math.PI * 2;
            const distance = Math.random() * cellWidth * 0.35;
            const rx = cellX + cellWidth/2 + Math.cos(angle) * distance;
            const ry = cellY + Math.sin(angle) * distance * 0.6;
            this.ctx.beginPath();
            this.ctx.arc(rx, ry, 2, 0, Math.PI * 2);
            this.ctx.fill();
        }

        // Plasmids (small circular DNA)
        for(let i = 0; i < 3; i++) {
            const angle = Math.random() * Math.PI * 2;
            const distance = cellWidth * 0.3;
            const px = cellX + cellWidth/2 + Math.cos(angle) * distance;
            const py = cellY + Math.sin(angle) * distance * 0.6;
            
            this.ctx.strokeStyle = '#4A90E2';
            this.ctx.lineWidth = 1.5;
            this.ctx.beginPath();
            this.ctx.arc(px, py, 6, 0, Math.PI * 2);
            this.ctx.stroke();
        }

        // Flagella (if showing)
        if(structure === 'complete' || structure === 'flagella') {
            this.ctx.strokeStyle = '#654321';
            this.ctx.lineWidth = 2;
            
            // Draw wavy flagellum
            this.ctx.beginPath();
            this.ctx.moveTo(cellX + cellWidth, cellY);
            for(let i = 0; i < 8; i++) {
                const fx = cellX + cellWidth + i * 15;
                const fy = cellY + Math.sin(i * 0.8) * 15;
                this.ctx.lineTo(fx, fy);
            }
            this.ctx.stroke();
        }

        // Pili (hair-like structures)
        if(structure === 'complete' || structure === 'pili') {
            this.ctx.strokeStyle = '#A0522D';
            this.ctx.lineWidth = 1;
            
            for(let i = 0; i < 8; i++) {
                const angle = (Math.PI * 2 / 8) * i;
                const startX = cellX + cellWidth/2 + Math.cos(angle) * cellWidth/2;
                const startY = cellY + Math.sin(angle) * cellHeight/2;
                const endX = startX + Math.cos(angle) * 20;
                const endY = startY + Math.sin(angle) * 20;
                
                this.ctx.beginPath();
                this.ctx.moveTo(startX, startY);
                this.ctx.lineTo(endX, endY);
                this.ctx.stroke();
            }
        }

        if(showLabels) {
            this.addLabel('Cell Wall', cellX - 10, cellY - cellHeight/2 - 10, '#9370DB', 'right');
            this.addLabel('Cell Membrane', cellX - 10, cellY - cellHeight/2 + 10, '#FFB6D9', 'right');
            this.addLabel('Nucleoid\n(DNA)', cellX + cellWidth/2 - 40, cellY - 5, '#4A90E2', 'right');
            this.addLabel('Ribosomes', cellX + cellWidth + 10, cellY + cellHeight/4, '#8B4513', 'left');
            this.addLabel('Plasmid', cellX + cellWidth + 10, cellY - cellHeight/4, '#4A90E2', 'left');
            this.addLabel('Flagellum', cellX + cellWidth + 80, cellY, '#654321', 'left');
            this.addLabel('Pili', cellX + cellWidth/2, cellY - cellHeight/2 - 30, '#A0522D');
        }

    } else if(structure === 'cell-wall') {
        // Detailed cell wall structure
        const layerHeight = height * 0.12;
        const startY = height * 0.3;

        if(type === 'gram-positive') {
            // Thick peptidoglycan (multiple layers)
            this.ctx.fillStyle = '#9370DB';
            this.ctx.strokeStyle = '#6A5ACD';
            this.ctx.lineWidth = 2;
            
            for(let i = 0; i < 5; i++) {
                const layerY = startY + i * layerHeight * 0.2;
                this.ctx.fillRect(width * 0.2, layerY, width * 0.6, layerHeight * 0.18);
                this.ctx.strokeRect(width * 0.2, layerY, width * 0.6, layerHeight * 0.18);
            }

            if(showLabels) {
                this.addLabel('Peptidoglycan\nLayers (Thick)', width * 0.85, startY + layerHeight * 0.5, '#9370DB', 'left');
            }

        } else if(type === 'gram-negative') {
            // Outer membrane
            this.ctx.fillStyle = '#E74C3C';
            this.ctx.fillRect(width * 0.2, startY, width * 0.6, layerHeight * 0.3);
            this.ctx.strokeRect(width * 0.2, startY, width * 0.6, layerHeight * 0.3);

            // Periplasmic space
            this.ctx.fillStyle = '#FFE4E8';
            this.ctx.fillRect(width * 0.2, startY + layerHeight * 0.3, width * 0.6, layerHeight * 0.5);

            // Thin peptidoglycan
            this.ctx.fillStyle = '#9370DB';
            this.ctx.fillRect(width * 0.2, startY + layerHeight * 0.8, width * 0.6, layerHeight * 0.1);
            this.ctx.strokeRect(width * 0.2, startY + layerHeight * 0.8, width * 0.6, layerHeight * 0.1);

            // Inner membrane
            this.ctx.fillStyle = '#FFB6D9';
            this.ctx.fillRect(width * 0.2, startY + layerHeight * 0.9, width * 0.6, layerHeight * 0.3);
            this.ctx.strokeRect(width * 0.2, startY + layerHeight * 0.9, width * 0.6, layerHeight * 0.3);

            if(showLabels) {
                this.addLabel('Outer Membrane', width * 0.15, startY + layerHeight * 0.15, '#E74C3C', 'right');
                this.addLabel('Periplasmic Space', width * 0.15, startY + layerHeight * 0.55, '#2C3E50', 'right');
                this.addLabel('Peptidoglycan (Thin)', width * 0.15, startY + layerHeight * 0.85, '#9370DB', 'right');
                this.addLabel('Inner Membrane', width * 0.15, startY + layerHeight * 1.05, '#FFB6D9', 'right');
            }
        }
    }

    if(showInset) {
        this.drawInset(width * 0.55, height * 0.05, width * 0.4, height * 0.3, insetType);
    }

    this.ctx.restore();
}

renderVirusStructureDiagram(x, y, width, height, options = {}) {
    const {
        showLabels = true,
        type = 'bacteriophage',
        component = 'complete',
        showInset = false,
        insetType = 'lytic-cycle'
    } = options;

    this.ctx.save();
    this.ctx.translate(x - width/2, y - height/2);

    const virusSize = Math.min(width, height) * 0.5;
    const centerX = width * 0.5;
    const centerY = height * 0.45;

    if(type === 'bacteriophage') {
        // Icosahedral head
        this.ctx.fillStyle = '#4A90E2';
        this.ctx.strokeStyle = '#1E88E5';
        this.ctx.lineWidth = 3;
        
        // Draw hexagonal head
        this.ctx.beginPath();
        for(let i = 0; i < 6; i++) {
            const angle = (Math.PI / 3) * i;
            const hx = centerX + Math.cos(angle) * virusSize * 0.3;
            const hy = centerY - virusSize * 0.2 + Math.sin(angle) * virusSize * 0.3;
            if(i === 0) this.ctx.moveTo(hx, hy);
            else this.ctx.lineTo(hx, hy);
        }
        this.ctx.closePath();
        this.ctx.fill();
        this.ctx.stroke();

        // DNA inside head
        this.ctx.strokeStyle = '#FFD700';
        this.ctx.lineWidth = 2;
        for(let i = 0; i < 4; i++) {
            this.ctx.beginPath();
            this.ctx.arc(centerX + (i - 1.5) * 8, centerY - virusSize * 0.2, virusSize * 0.15, 0, Math.PI * 2);
            this.ctx.stroke();
        }

        // Collar/neck
        this.ctx.fillStyle = '#5DADE2';
        this.ctx.fillRect(centerX - virusSize * 0.08, centerY + virusSize * 0.1, virusSize * 0.16, virusSize * 0.1);
        this.ctx.strokeRect(centerX - virusSize * 0.08, centerY + virusSize * 0.1, virusSize * 0.16, virusSize * 0.1);

        // Tail sheath
        this.ctx.fillStyle = '#85C1E9';
        this.ctx.fillRect(centerX - virusSize * 0.06, centerY + virusSize * 0.2, virusSize * 0.12, virusSize * 0.35);
        this.ctx.strokeRect(centerX - virusSize * 0.06, centerY + virusSize * 0.2, virusSize * 0.12, virusSize * 0.35);

        // Tail fibers
        this.ctx.strokeStyle = '#1E88E5';
        this.ctx.lineWidth = 2;
        
        for(let i = 0; i < 6; i++) {
            const angle = (Math.PI / 3) * i;
            const baseX = centerX + Math.cos(angle) * virusSize * 0.06;
            const baseY = centerY + virusSize * 0.55;
            const endX = centerX + Math.cos(angle) * virusSize * 0.25;
            const endY = centerY + virusSize * 0.7;
            
            this.ctx.beginPath();
            this.ctx.moveTo(baseX, baseY);
            this.ctx.lineTo(endX, endY);
            this.ctx.stroke();
        }

        // Base plate
        this.ctx.fillStyle = '#2E86C1';
        this.ctx.beginPath();
        this.ctx.arc(centerX, centerY + virusSize * 0.55, virusSize * 0.08, 0, Math.PI * 2);
        this.ctx.fill();
        this.ctx.stroke();

        if(showLabels) {
            this.addLabel('Capsid\n(Head)', centerX + virusSize * 0.35, centerY - virusSize * 0.2, '#4A90E2', 'left');
            this.addLabel('DNA', centerX - virusSize * 0.35, centerY - virusSize * 0.2, '#FFD700', 'right');
            this.addLabel('Collar', centerX + virusSize * 0.15, centerY + virusSize * 0.15, '#5DADE2', 'left');
            this.addLabel('Tail Sheath', centerX + virusSize * 0.15, centerY + virusSize * 0.37, '#85C1E9', 'left');
            this.addLabel('Tail Fibers', centerX + virusSize * 0.3, centerY + virusSize * 0.65, '#1E88E5', 'left');
            this.addLabel('Base Plate', centerX - virusSize * 0.15, centerY + virusSize * 0.55, '#2E86C1', 'right');
        }

    } else if(type === 'enveloped') {
        // Enveloped virus (like influenza)
        
        // Envelope (lipid bilayer)
        this.ctx.strokeStyle = '#FFB6D9';
        this.ctx.lineWidth = 8;
        this.ctx.beginPath();
        this.ctx.arc(centerX, centerY, virusSize * 0.4, 0, Math.PI * 2);
        this.ctx.stroke();

        // Spike proteins
        for(let i = 0; i < 12; i++) {
            const angle = (Math.PI * 2 / 12) * i;
            const baseX = centerX + Math.cos(angle) * virusSize * 0.4;
            const baseY = centerY + Math.sin(angle) * virusSize * 0.4;
            const tipX = centerX + Math.cos(angle) * virusSize * 0.5;
            const tipY = centerY + Math.sin(angle) * virusSize * 0.5;
            
            this.ctx.strokeStyle = '#E74C3C';
            this.ctx.lineWidth = 4;
            this.ctx.beginPath();
            this.ctx.moveTo(baseX, baseY);
            this.ctx.lineTo(tipX, tipY);
            this.ctx.stroke();
            
            // Spike head
            this.ctx.fillStyle = '#C0392B';
            this.ctx.beginPath();
            this.ctx.arc(tipX, tipY, 5, 0, Math.PI * 2);
            this.ctx.fill();
        }

        // Capsid
        this.ctx.fillStyle = '#9370DB';
        this.ctx.strokeStyle = '#6A5ACD';
        this.ctx.lineWidth = 3;
        this.ctx.beginPath();
        this.ctx.arc(centerX, centerY, virusSize * 0.3, 0, Math.PI * 2);
        this.ctx.fill();
        this.ctx.stroke();

        // RNA segments
        this.ctx.strokeStyle = '#FFD700';
        this.ctx.lineWidth = 3;
        for(let i = 0; i < 8; i++) {
            const angle = (Math.PI * 2 / 8) * i;
            const distance = virusSize * 0.15;
            const rx = centerX + Math.cos(angle) * distance;
            const ry = centerY + Math.sin(angle) * distance;
            
            this.ctx.beginPath();
            this.ctx.moveTo(rx - 8, ry - 8);
            this.ctx.lineTo(rx + 8, ry + 8);
            this.ctx.stroke();
        }

        if(showLabels) {
            this.addLabel('Envelope', centerX + virusSize * 0.45, centerY - virusSize * 0.3, '#FFB6D9', 'left');
            this.addLabel('Spike\nProteins', centerX + virusSize * 0.55, centerY, '#E74C3C', 'left');
            this.addLabel('Capsid', centerX - virusSize * 0.45, centerY - virusSize * 0.2, '#9370DB', 'right');
            this.addLabel('RNA\nSegments', centerX, centerY + virusSize * 0.05, '#FFD700');
        }

    } else if(type === 'non-enveloped') {
        // Non-enveloped virus (like adenovirus)
        
        // Icosahedral capsid
        this.ctx.fillStyle = '#4A90E2';
        this.ctx.strokeStyle = '#1E88E5';
        this.ctx.lineWidth = 3;
        
        // Draw icosahedron approximation
        const numSides = 20;
        for(let i = 0; i < numSides; i++) {
            const angle1 = (Math.PI * 2 / numSides) * i;
            const angle2 = (Math.PI * 2 / numSides) * (i + 1);
            
            this.ctx.beginPath();
            this.ctx.moveTo(centerX, centerY);
            this.ctx.lineTo(
                centerX + Math.cos(angle1) * virusSize * 0.35,
                centerY + Math.sin(angle1) * virusSize * 0.35
            );
            this.ctx.lineTo(
                centerX + Math.cos(angle2) * virusSize * 0.35,
                centerY + Math.sin(angle2) * virusSize * 0.35
            );
            this.ctx.closePath();
            this.ctx.fill();
            this.ctx.stroke();
        }

        // Capsomeres (protein subunits)
        for(let ring = 0; ring < 3; ring++) {
            const numCapsomeres = 6 + ring * 6;
            const radius = virusSize * (0.1 + ring * 0.1);
            
            for(let i = 0; i < numCapsomeres; i++) {
                const angle = (Math.PI * 2 / numCapsomeres) * i;
                const cx = centerX + Math.cos(angle) * radius;
                const cy = centerY + Math.sin(angle) * radius;
                
                this.ctx.fillStyle = '#5DADE2';
                this.ctx.strokeStyle = '#2E86C1';
                this.ctx.lineWidth = 1;
                this.ctx.beginPath();
                this.ctx.arc(cx, cy, 4, 0, Math.PI * 2);
                this.ctx.fill();
                this.ctx.stroke();
            }
        }

        // DNA/RNA inside
        this.ctx.strokeStyle = '#FFD700';
        this.ctx.lineWidth = 2;
        this.ctx.setLineDash([3, 3]);
        for(let i = 0; i < 3; i++) {
            this.ctx.beginPath();
            this.ctx.arc(centerX, centerY, virusSize * (0.05 + i * 0.05), 0, Math.PI * 2);
            this.ctx.stroke();
        }
        this.ctx.setLineDash([]);

        if(showLabels) {
            this.addLabel('Capsid', centerX + virusSize * 0.4, centerY - virusSize * 0.2, '#4A90E2', 'left');
            this.addLabel('Capsomeres', centerX - virusSize * 0.4, centerY + virusSize * 0.1, '#5DADE2', 'right');
            this.addLabel('Nucleic\nAcid', centerX, centerY, '#FFD700');
        }
    }

    if(showInset) {
        this.drawInset(width * 0.55, height * 0.05, width * 0.4, height * 0.3, insetType);
    }

    this.ctx.restore();
}


}

