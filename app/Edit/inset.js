







// ============================================================================
// INSET DRAWING METHODS
// ============================================================================

drawInset(x, y, width, height, insetType, options = {}) {
    this.ctx.save();
    this.ctx.translate(x, y);

    // Draw inset border
    this.ctx.strokeStyle = '#34495E';
    this.ctx.lineWidth = 3;
    this.ctx.fillStyle = '#FFFFFF';
    this.ctx.shadowColor = 'rgba(0, 0, 0, 0.2)';
    this.ctx.shadowBlur = 10;
    this.ctx.shadowOffsetX = 3;
    this.ctx.shadowOffsetY = 3;
    
    this.ctx.beginPath();
    this.ctx.roundRect(0, 0, width, height, 8);
    this.ctx.fill();
    this.ctx.stroke();
    
    this.ctx.shadowBlur = 0;
    this.ctx.shadowOffsetX = 0;
    this.ctx.shadowOffsetY = 0;

    // Route to specific inset renderer
    switch(insetType) {
        // Cell Biology Insets
        case 'atp-production':
            this.drawATPProductionInset(width, height);
            break;
        case 'protein-synthesis':
            this.drawProteinSynthesisInset(width, height);
            break;
        case 'vesicle-transport':
            this.drawVesicleTransportInset(width, height);
            break;
        case 'photosynthesis-detail':
            this.drawPhotosynthesisDetailInset(width, height);
            break;
        case 'active-transport':
            this.drawActiveTransportInset(width, height);
            break;
        case 'passive-transport':
            this.drawPassiveTransportInset(width, height);
            break;
        case 'endocytosis':
            this.drawEndocytosisInset(width, height);
            break;
        case 'chromosome-condensation':
            this.drawChromosomeCondensationInset(width, height);
            break;
        case 'spindle-formation':
            this.drawSpindleFormationInset(width, height);
            break;
        case 'crossing-over':
            this.drawCrossingOverInset(width, height);
            break;
        
        // Genetics & Molecular Biology Insets
        case 'base-pairing-rules':
            this.drawBasePairingRulesInset(width, height);
            break;
        case 'dna-packaging':
            this.drawDNAPackagingInset(width, height);
            break;
        case 'replication-fork':
            this.drawReplicationForkInset(width, height);
            break;
        case 'okazaki-fragments':
            this.drawOkazakiFragmentsInset(width, height);
            break;
        case 'rna-splicing':
            this.drawRNASplicingInset(width, height);
            break;
        case 'codon-anticodon':
            this.drawCodonAnticodonInset(width, height);
            break;
        case 'peptide-bond-formation':
            this.drawPeptideBondFormationInset(width, height);
            break;
        
        // Cardiovascular Insets
        case 'cardiac-cycle':
            this.drawCardiacCycleInset(width, height);
            break;
        case 'conduction-system':
            this.drawConductionSystemInset(width, height);
            break;
        case 'coronary-circulation':
            this.drawCoronaryCirculationInset(width, height);
            break;
        
        // Respiratory Insets
        case 'gas-exchange':
            this.drawGasExchangeInset(width * 0.05, height * 0.1, width * 0.9, height * 0.85);
            break;
        case 'alveolar-structure':
            this.drawAlveolarStructureInset(width, height);
            break;
        case 'surfactant-function':
            this.drawSurfactantFunctionInset(width, height);
            break;
        case 'oxygen-hemoglobin':
            this.drawOxygenHemoglobinInset(width, height);
            break;
        
        // Digestive Insets
        case 'villi-structure':
            this.drawVilliStructureInset(width, height);
            break;
        case 'enzyme-action':
            this.drawEnzymeActionInset(width, height);
            break;
        case 'peristalsis':
            this.drawPeristalsisInset(width, height);
            break;
        
        // Nervous System Insets
        case 'action-potential':
            this.drawActionPotentialInset(width, height);
            break;
        case 'saltatory-conduction':
            this.drawSaltatatoryConductionInset(width, height);
            break;
        case 'neurotransmitter-release':
            this.drawNeurotransmitterReleaseInset(width, height);
            break;
        
        // Skeletal/Muscular Insets
        case 'bone-structure':
            this.drawBoneStructureInset(width, height);
            break;
        case 'sarcomere':
            this.drawSarcomereInset(width, height);
            break;
        case 'sliding-filament':
            this.drawSlidingFilamentInset(width, height);
            break;
        case 'neuromuscular-junction':
            this.drawNeuromuscularJunctionInset(width, height);
            break;
        
        // Urinary Insets
        case 'nephron-detail':
            this.drawNephronInset(width * 0.05, height * 0.1, width * 0.9, height * 0.85);
            break;
        case 'glomerular-filtration':
            this.drawGlomerularFiltrationInset(width, height);
            break;
        case 'countercurrent':
            this.drawCountercurrentInset(width, height);
            break;
        
        // Immune System Insets
        case 'antibody-production':
            this.drawAntibodyProductionInset(width, height);
            break;
        case 'phagocytosis':
            this.drawPhagocytosisInset(width, height);
            break;
        case 'clonal-selection':
            this.drawClonalSelectionInset(width, height);
            break;
        
        // Homeostasis Insets
        case 'insulin-signaling':
            this.drawInsulinSignalingInset(width, height);
            break;
        case 'hormone-feedback':
            this.drawHormoneFeedbackInset(width, height);
            break;
        
        // Energy Metabolism Insets
        case 'atp-yield':
            this.drawATPYieldInset(width, height);
            break;
        case 'chemiosmosis':
            this.drawChemiosmosisInset(width, height);
            break;
        case 'z-scheme':
            this.drawZSchemeInset(width, height);
            break;
        
        // Ecology Insets
        case 'energy-pyramid':
            this.drawEnergyPyramidInset(width, height);
            break;
        case 'greenhouse-effect':
            this.drawGreenhouseEffectInset(width, height);
            break;
        
        // Biotechnology Insets
        case 'dna-migration':
            this.drawDNAMigrationInset(width, height);
            break;
        case 'guide-rna-design':
            this.drawGuideRNADesignInset(width, height);
            break;
        
        default:
            this.drawPlaceholderInset(width, height, insetType);
    }

    this.ctx.restore();
}

// ============================================================================
// SPECIFIC INSET IMPLEMENTATIONS
// ============================================================================

drawATPProductionInset(width, height) {
    // Title
    this.ctx.font = 'bold 14px Arial';
    this.ctx.fillStyle = '#2C3E50';
    this.ctx.textAlign = 'center';
    this.ctx.fillText('ATP Production in Mitochondria', width / 2, 20);

    // Draw simplified mitochondrion
    const mitoX = width * 0.5;
    const mitoY = height * 0.5;
    const mitoW = width * 0.7;
    const mitoH = height * 0.6;

    // Outer membrane
    this.ctx.strokeStyle = '#8B4513';
    this.ctx.lineWidth = 3;
    this.ctx.fillStyle = 'rgba(139, 69, 19, 0.1)';
    this.ctx.beginPath();
    this.ctx.ellipse(mitoX, mitoY, mitoW / 2, mitoH / 2, 0, 0, Math.PI * 2);
    this.ctx.fill();
    this.ctx.stroke();

    // Cristae (inner membrane folds)
    this.ctx.strokeStyle = '#A0522D';
    this.ctx.lineWidth = 2;
    for(let i = 0; i < 5; i++) {
        this.ctx.beginPath();
        const y = mitoY - mitoH * 0.3 + i * (mitoH * 0.15);
        this.ctx.moveTo(mitoX - mitoW * 0.3, y);
        this.ctx.quadraticCurveTo(mitoX - mitoW * 0.1, y + 10, mitoX + mitoW * 0.1, y);
        this.ctx.stroke();
    }

    // ATP molecules
    this.ctx.fillStyle = '#FFD700';
    this.ctx.font = 'bold 16px Arial';
    for(let i = 0; i < 4; i++) {
        const angle = (i / 4) * Math.PI * 2;
        const atpX = mitoX + Math.cos(angle) * mitoW * 0.25;
        const atpY = mitoY + Math.sin(angle) * mitoH * 0.25;
        this.ctx.fillText('ATP', atpX, atpY);
    }

    // Labels
    this.ctx.font = '11px Arial';
    this.ctx.fillStyle = '#7F8C8D';
    this.ctx.textAlign = 'left';
    this.ctx.fillText('• Glucose → 30-32 ATP', width * 0.05, height * 0.85);
    this.ctx.fillText('• Electron Transport Chain', width * 0.05, height * 0.92);
}

drawGasExchangeInset(x, y, width, height) {
    // (Keep existing implementation or enhance it)
    this.ctx.save();
    this.ctx.translate(x, y);

    // Title
    this.ctx.font = 'bold 13px Arial';
    this.ctx.fillStyle = '#2C3E50';
    this.ctx.textAlign = 'center';
    this.ctx.fillText('Gas Exchange in Alveoli', width / 2, 20);

    // Alveolus (air sac)
    this.ctx.strokeStyle = '#FFB6D9';
    this.ctx.fillStyle = 'rgba(255, 182, 217, 0.2)';
    this.ctx.lineWidth = 2;
    this.ctx.beginPath();
    this.ctx.arc(width * 0.3, height * 0.55, width * 0.2, 0, Math.PI * 2);
    this.ctx.fill();
    this.ctx.stroke();

    // Capillary (blood vessel) wrapping around alveolus
    this.ctx.strokeStyle = '#E74C3C';
    this.ctx.lineWidth = 5;
    this.ctx.beginPath();
    this.ctx.arc(width * 0.3, height * 0.55, width * 0.24, 0, Math.PI * 2);
    this.ctx.stroke();

    // O2 molecules (blue) entering blood
    this.ctx.fillStyle = '#3498DB';
    this.ctx.font = 'bold 12px Arial';
    this.ctx.textAlign = 'center';
    this.ctx.fillText('O₂', width * 0.25, height * 0.45);
    this.drawArrow(width * 0.25, height * 0.47, width * 0.25, height * 0.57, '#3498DB', '', 6);

    // CO2 molecules (orange) leaving blood
    this.ctx.fillStyle = '#E67E22';
    this.ctx.fillText('CO₂', width * 0.35, height * 0.67);
    this.drawArrow(width * 0.35, height * 0.64, width * 0.35, height * 0.54, '#E67E22', '', 6);

    // Red blood cell
    this.ctx.fillStyle = '#C0392B';
    this.ctx.strokeStyle = '#A93226';
    this.ctx.lineWidth = 1;
    this.ctx.beginPath();
    this.ctx.ellipse(width * 0.5, height * 0.55, 10, 6, 0, 0, Math.PI * 2);
    this.ctx.fill();
    this.ctx.stroke();
    // Biconcave indent
    this.ctx.fillStyle = '#E74C3C';
    this.ctx.beginPath();
    this.ctx.ellipse(width * 0.5, height * 0.55, 4, 2, 0, 0, Math.PI * 2);
    this.ctx.fill();

    // Labels
    this.ctx.font = '10px Arial';
    this.ctx.fillStyle = '#7F8C8D';
    this.ctx.textAlign = 'left';
    this.ctx.fillText('Alveolus', width * 0.55, height * 0.35);
    this.ctx.fillText('(Air)', width * 0.55, height * 0.42);
    this.ctx.fillText('Capillary', width * 0.55, height * 0.65);
    this.ctx.fillText('(Blood)', width * 0.55, height * 0.72);
    this.ctx.fillText('Red Blood', width * 0.55, height * 0.52);
    this.ctx.fillText('Cell', width * 0.55, height * 0.59);

    // Process description
    this.ctx.font = '9px Arial';
    this.ctx.fillStyle = '#34495E';
    this.ctx.text

// ============================================================================
// SPECIFIC INSET IMPLEMENTATIONS (Continued)
// ============================================================================

// Continue from the gas exchange inset...
    this.ctx.fillText('Diffusion of O₂ into blood', width * 0.05, height * 0.92);
    this.ctx.fillText('Diffusion of CO₂ out of blood', width * 0.05, height * 0.97);

    this.ctx.restore();
}

drawAlveolarStructureInset(width, height) {
    // Title
    this.ctx.font = 'bold 13px Arial';
    this.ctx.fillStyle = '#2C3E50';
    this.ctx.textAlign = 'center';
    this.ctx.fillText('Alveolar Structure', width / 2, 20);

    // Multiple alveoli
    const alveoli = [
        { x: width * 0.25, y: height * 0.4, r: width * 0.12 },
        { x: width * 0.5, y: height * 0.5, r: width * 0.15 },
        { x: width * 0.7, y: height * 0.4, r: width * 0.1 }
    ];

    alveoli.forEach(alv => {
        // Alveolus wall
        this.ctx.strokeStyle = '#FFB6D9';
        this.ctx.fillStyle = 'rgba(255, 182, 217, 0.1)';
        this.ctx.lineWidth = 2;
        this.ctx.beginPath();
        this.ctx.arc(alv.x, alv.y, alv.r, 0, Math.PI * 2);
        this.ctx.fill();
        this.ctx.stroke();

        // Type I pneumocytes (thin cells for gas exchange)
        this.ctx.fillStyle = 'rgba(255, 182, 217, 0.5)';
        for(let i = 0; i < 6; i++) {
            const angle = (i / 6) * Math.PI * 2;
            const px = alv.x + Math.cos(angle) * alv.r;
            const py = alv.y + Math.sin(angle) * alv.r;
            this.ctx.beginPath();
            this.ctx.arc(px, py, 3, 0, Math.PI * 2);
            this.ctx.fill();
        }
    });

    // Type II pneumocyte (surfactant production)
    this.ctx.fillStyle = '#9B59B6';
    this.ctx.beginPath();
    this.ctx.arc(width * 0.5, height * 0.42, 6, 0, Math.PI * 2);
    this.ctx.fill();

    // Surfactant layer
    this.ctx.strokeStyle = '#3498DB';
    this.ctx.setLineDash([2, 2]);
    this.ctx.lineWidth = 1.5;
    this.ctx.beginPath();
    this.ctx.arc(width * 0.5, height * 0.5, width * 0.17, 0, Math.PI * 2);
    this.ctx.stroke();
    this.ctx.setLineDash([]);

    // Capillary network
    this.ctx.strokeStyle = '#E74C3C';
    this.ctx.lineWidth = 3;
    this.ctx.beginPath();
    this.ctx.moveTo(width * 0.1, height * 0.4);
    this.ctx.quadraticCurveTo(width * 0.3, height * 0.35, width * 0.5, height * 0.3);
    this.ctx.quadraticCurveTo(width * 0.7, height * 0.35, width * 0.9, height * 0.4);
    this.ctx.stroke();

    // Labels
    this.ctx.font = '10px Arial';
    this.ctx.fillStyle = '#7F8C8D';
    this.ctx.textAlign = 'left';
    this.ctx.fillText('Type I Pneumocyte', width * 0.05, height * 0.75);
    this.ctx.fillText('Type II Pneumocyte', width * 0.05, height * 0.82);
    this.ctx.fillText('(produces surfactant)', width * 0.05, height * 0.88);
    this.ctx.fillText('Surfactant Layer', width * 0.05, height * 0.94);
}

drawSurfactantFunctionInset(width, height) {
    this.ctx.font = 'bold 13px Arial';
    this.ctx.fillStyle = '#2C3E50';
    this.ctx.textAlign = 'center';
    this.ctx.fillText('Surfactant Function', width / 2, 20);

    // Without surfactant (collapsed)
    this.ctx.font = 'bold 11px Arial';
    this.ctx.fillText('Without Surfactant', width * 0.25, 45);
    
    this.ctx.strokeStyle = '#E74C3C';
    this.ctx.fillStyle = 'rgba(231, 76, 60, 0.2)';
    this.ctx.lineWidth = 2;
    this.ctx.beginPath();
    this.ctx.arc(width * 0.25, height * 0.5, width * 0.12, 0, Math.PI * 2);
    this.ctx.fill();
    this.ctx.stroke();
    
    // High surface tension arrows
    for(let i = 0; i < 8; i++) {
        const angle = (i / 8) * Math.PI * 2;
        const x1 = width * 0.25 + Math.cos(angle) * width * 0.15;
        const y1 = height * 0.5 + Math.sin(angle) * width * 0.15;
        const x2 = width * 0.25 + Math.cos(angle) * width * 0.09;
        const y2 = height * 0.5 + Math.sin(angle) * width * 0.09;
        this.drawArrow(x1, y1, x2, y2, '#E74C3C', '', 4);
    }

    // With surfactant (expanded)
    this.ctx.fillText('With Surfactant', width * 0.7, 45);
    
    this.ctx.strokeStyle = '#27AE60';
    this.ctx.fillStyle = 'rgba(39, 174, 96, 0.2)';
    this.ctx.beginPath();
    this.ctx.arc(width * 0.7, height * 0.5, width * 0.18, 0, Math.PI * 2);
    this.ctx.fill();
    this.ctx.stroke();

    // Surfactant molecules
    this.ctx.strokeStyle = '#3498DB';
    this.ctx.setLineDash([2, 2]);
    this.ctx.lineWidth = 1.5;
    this.ctx.beginPath();
    this.ctx.arc(width * 0.7, height * 0.5, width * 0.19, 0, Math.PI * 2);
    this.ctx.stroke();
    this.ctx.setLineDash([]);

    // Reduced surface tension arrows
    for(let i = 0; i < 8; i++) {
        const angle = (i / 8) * Math.PI * 2;
        const x1 = width * 0.7 + Math.cos(angle) * width * 0.22;
        const y1 = height * 0.5 + Math.sin(angle) * width * 0.22;
        const x2 = width * 0.7 + Math.cos(angle) * width * 0.19;
        const y2 = height * 0.5 + Math.sin(angle) * width * 0.19;
        this.drawArrow(x1, y1, x2, y2, '#27AE60', '', 3);
    }

    // Explanation
    this.ctx.font = '9px Arial';
    this.ctx.fillStyle = '#7F8C8D';
    this.ctx.textAlign = 'center';
    this.ctx.fillText('Surfactant reduces surface tension,', width / 2, height * 0.8);
    this.ctx.fillText('preventing alveolar collapse', width / 2, height * 0.87);
}

drawOxygenHemoglobinInset(width, height) {
    this.ctx.font = 'bold 13px Arial';
    this.ctx.fillStyle = '#2C3E50';
    this.ctx.textAlign = 'center';
    this.ctx.fillText('Oxygen-Hemoglobin Binding', width / 2, 20);

    // Hemoglobin molecule (4 subunits)
    const hbX = width * 0.3;
    const hbY = height * 0.5;
    const subunitR = width * 0.06;

    this.ctx.fillStyle = '#C0392B';
    this.ctx.strokeStyle = '#A93226';
    this.ctx.lineWidth = 2;

    // 4 subunits arranged in square
    const positions = [
        [-1, -1], [1, -1], [-1, 1], [1, 1]
    ];

    positions.forEach(([dx, dy], i) => {
        const sx = hbX + dx * subunitR * 0.8;
        const sy = hbY + dy * subunitR * 0.8;
        
        this.ctx.beginPath();
        this.ctx.arc(sx, sy, subunitR, 0, Math.PI * 2);
        this.ctx.fill();
        this.ctx.stroke();

        // Heme group (iron center)
        this.ctx.fillStyle = '#8B4513';
        this.ctx.beginPath();
        this.ctx.arc(sx, sy, subunitR * 0.3, 0, Math.PI * 2);
        this.ctx.fill();

        // O2 binding
        if(i < 3) {
            this.ctx.fillStyle = '#3498DB';
            this.ctx.font = 'bold 10px Arial';
            this.ctx.textAlign = 'center';
            this.ctx.fillText('O₂', sx + subunitR * 0.5, sy - subunitR * 0.7);
        }
        
        this.ctx.fillStyle = '#C0392B';
    });

    // Cooperative binding curve
    this.ctx.strokeStyle = '#2980B9';
    this.ctx.lineWidth = 2;
    this.ctx.beginPath();
    
    const curveStartX = width * 0.55;
    const curveStartY = height * 0.7;
    const curveWidth = width * 0.35;
    const curveHeight = height * 0.4;

    for(let i = 0; i <= 20; i++) {
        const t = i / 20;
        const x = curveStartX + t * curveWidth;
        // S-shaped curve (sigmoid)
        const saturation = Math.pow(t, 2.8) / (Math.pow(t, 2.8) + Math.pow(0.5, 2.8));
        const y = curveStartY - saturation * curveHeight;
        
        if(i === 0) this.ctx.moveTo(x, y);
        else this.ctx.lineTo(x, y);
    }
    this.ctx.stroke();

    // Axes
    this.ctx.strokeStyle = '#34495E';
    this.ctx.lineWidth = 1;
    this.ctx.beginPath();
    this.ctx.moveTo(curveStartX, curveStartY);
    this.ctx.lineTo(curveStartX + curveWidth, curveStartY);
    this.ctx.moveTo(curveStartX, curveStartY);
    this.ctx.lineTo(curveStartX, curveStartY - curveHeight);
    this.ctx.stroke();

    // Labels
    this.ctx.font = '9px Arial';
    this.ctx.fillStyle = '#7F8C8D';
    this.ctx.textAlign = 'center';
    this.ctx.fillText('O₂ Pressure', curveStartX + curveWidth / 2, curveStartY + 15);
    this.ctx.save();
    this.ctx.translate(curveStartX - 15, curveStartY - curveHeight / 2);
    this.ctx.rotate(-Math.PI / 2);
    this.ctx.fillText('% Saturation', 0, 0);
    this.ctx.restore();

    this.ctx.font = '10px Arial';
    this.ctx.textAlign = 'left';
    this.ctx.fillText('4 O₂ bind cooperatively', width * 0.05, height * 0.92);
}

drawVilliStructureInset(width, height) {
    this.ctx.font = 'bold 13px Arial';
    this.ctx.fillStyle = '#2C3E50';
    this.ctx.textAlign = 'center';
    this.ctx.fillText('Intestinal Villus Structure', width / 2, 20);

    // Single villus
    const villusX = width * 0.5;
    const villusY = height * 0.35;
    const villusW = width * 0.2;
    const villusH = height * 0.4;

    // Villus outline
    this.ctx.strokeStyle = '#E67E22';
    this.ctx.fillStyle = 'rgba(230, 126, 34, 0.2)';
    this.ctx.lineWidth = 2;
    this.ctx.beginPath();
    this.ctx.moveTo(villusX, villusY);
    this.ctx.lineTo(villusX - villusW / 2, villusY + villusH * 0.3);
    this.ctx.lineTo(villusX - villusW / 2, villusY + villusH * 0.8);
    this.ctx.quadraticCurveTo(villusX, villusY + villusH, villusX + villusW / 2, villusY + villusH * 0.8);
    this.ctx.lineTo(villusX + villusW / 2, villusY + villusH * 0.3);
    this.ctx.closePath();
    this.ctx.fill();
    this.ctx.stroke();

    // Epithelial cells
    this.ctx.fillStyle = '#F39C12';
    const cellCount = 8;
    for(let i = 0; i < cellCount; i++) {
        const t = i / cellCount;
        const side = i % 2 === 0 ? -1 : 1;
        const x = villusX + side * villusW * 0.4;
        const y = villusY + villusH * 0.3 + t * villusH * 0.5;
        
        this.ctx.fillRect(x - 4, y - 3, 8, 6);
    }

    // Microvilli (brush border)
    this.ctx.strokeStyle = '#D35400';
    this.ctx.lineWidth = 1;
    for(let i = 0; i < 12; i++) {
        const t = i / 12;
        const x1 = villusX - villusW * 0.4 + t * villusW * 0.8;
        const y1 = villusY + villusH * 0.3 + t * villusH * 0.5;
        
        this.ctx.beginPath();
        this.ctx.moveTo(x1, y1);
        this.ctx.lineTo(x1 - 3, y1 - 5);
        this.ctx.stroke();
    }

    // Lacteal (lymph vessel)
    this.ctx.strokeStyle = '#F7DC6F';
    this.ctx.fillStyle = 'rgba(247, 220, 111, 0.3)';
    this.ctx.lineWidth = 2;
    this.ctx.beginPath();
    this.ctx.ellipse(villusX, villusY + villusH * 0.6, villusW * 0.15, villusH * 0.25, 0, 0, Math.PI * 2);
    this.ctx.fill();
    this.ctx.stroke();

    // Capillary network
    this.ctx.strokeStyle = '#E74C3C';
    this.ctx.lineWidth = 2;
    for(let i = 0; i < 3; i++) {
        this.ctx.beginPath();
        this.ctx.arc(villusX, villusY + villusH * (0.4 + i * 0.15), villusW * 0.25, 0, Math.PI * 2);
        this.ctx.stroke();
    }

    // Labels
    this.ctx.font = '9px Arial';
    this.ctx.fillStyle = '#7F8C8D';
    this.ctx.textAlign = 'left';
    this.ctx.fillText('Microvilli', width * 0.7, height * 0.4);
    this.ctx.fillText('Epithelium', width * 0.7, height * 0.5);
    this.ctx.fillText('Lacteal', width * 0.7, height * 0.65);
    this.ctx.fillText('Capillaries', width * 0.7, height * 0.75);
    
    this.ctx.textAlign = 'center';
    this.ctx.fillText('Surface area ↑ 20-40x', width / 2, height * 0.92);
}

drawEnzymeActionInset(width, height) {
    this.ctx.font = 'bold 13px Arial';
    this.ctx.fillStyle = '#2C3E50';
    this.ctx.textAlign = 'center';
    this.ctx.fillText('Enzyme-Substrate Complex', width / 2, 20);

    const stageWidth = width * 0.28;
    const stageY = height * 0.5;

    // Stage 1: Enzyme + Substrate
    let x = width * 0.1;
    this.ctx.font = 'bold 10px Arial';
    this.ctx.fillText('1. Enzyme', x + stageWidth / 2, 45);

    // Enzyme
    this.ctx.fillStyle = '#9B59B6';
    this.ctx.strokeStyle = '#8E44AD';
    this.ctx.lineWidth = 2;
    this.ctx.beginPath();
    this.ctx.arc(x + stageWidth * 0.3, stageY, 25, 0, Math.PI * 2);
    this.ctx.fill();
    this.ctx.stroke();

    // Active site
    this.ctx.fillStyle = '#E8DAEF';
    this.ctx.beginPath();
    this.ctx.arc(x + stageWidth * 0.3 + 15, stageY, 8, 0, Math.PI * 2);
    this.ctx.fill();

    // Substrate
    this.ctx.fillStyle = '#3498DB';
    this.ctx.strokeStyle = '#2980B9';
    this.ctx.beginPath();
    this.ctx.roundRect(x + stageWidth * 0.65, stageY - 10, 20, 20, 3);
    this.ctx.fill();
    this.ctx.stroke();

    // Stage 2: Binding
    x = width * 0.38;
    this.ctx.fillStyle = '#2C3E50';
    this.ctx.fillText('2. Binding', x + stageWidth / 2, 45);

    this.ctx.fillStyle = '#9B59B6';
    this.ctx.strokeStyle = '#8E44AD';
    this.ctx.lineWidth = 2;
    this.ctx.beginPath();
    this.ctx.arc(x + stageWidth * 0.4, stageY, 25, 0, Math.PI * 2);
    this.ctx.fill();
    this.ctx.stroke();

    // Substrate in active site
    this.ctx.fillStyle = '#3498DB';
    this.ctx.beginPath();
    this.ctx.arc(x + stageWidth * 0.4 + 18, stageY, 10, 0, Math.PI * 2);
    this.ctx.fill();

    // Stage 3: Products
    x = width * 0.66;
    this.ctx.fillStyle = '#2C3E50';
    this.ctx.fillText('3. Products', x + stageWidth / 2, 45);

    // Enzyme (unchanged)
    this.ctx.fillStyle = '#9B59B6';
    this.ctx.strokeStyle = '#8E44AD';
    this.ctx.beginPath();
    this.ctx.arc(x + stageWidth * 0.3, stageY, 25, 0, Math.PI * 2);
    this.ctx.fill();
    this.ctx.stroke();

    this.ctx.fillStyle = '#E8DAEF';
    this.ctx.beginPath();
    this.ctx.arc(x + stageWidth * 0.3 + 15, stageY, 8, 0, Math.PI * 2);
    this.ctx.fill();

    // Products (split)
    this.ctx.fillStyle = '#27AE60';
    this.ctx.strokeStyle = '#229954';
    this.ctx.lineWidth = 2;
    this.ctx.beginPath();
    this.ctx.roundRect(x + stageWidth * 0.6, stageY - 15, 12, 12, 2);
    this.ctx.fill();
    this.ctx.stroke();

    this.ctx.beginPath();
    this.ctx.roundRect(x + stageWidth * 0.75, stageY + 5, 12, 12, 2);
    this.ctx.fill();
    this.ctx.stroke();

    // Arrows between stages
    this.ctx.strokeStyle = '#E74C3C';
    this.ctx.fillStyle = '#E74C3C';
    this.drawArrow(width * 0.22, height * 0.35, width * 0.35, height * 0.35, '#E74C3C', '', 6);
    this.drawArrow(width * 0.52, height * 0.35, width * 0.65, height * 0.35, '#E74C3C', '', 6);

    // Note
    this.ctx.font = '9px Arial';
    this.ctx.fillStyle = '#7F8C8D';
    this.ctx.textAlign = 'center';
    this.ctx.fillText('Enzyme is reusable and unchanged', width / 2, height * 0.85);
}

drawPeristalsisInset(width, height) {
    this.ctx.font = 'bold 13px Arial';
    this.ctx.fillStyle = '#2C3E50';
    this.ctx.textAlign = 'center';
    this.ctx.fillText('Peristalsis Wave', width / 2, 20);

    // Intestinal tube with peristaltic wave
    const tubeY = height * 0.5;
    const tubeH = height * 0.3;
    
    // Tube walls
    this.ctx.strokeStyle = '#E67E22';
    this.ctx.fillStyle = 'rgba(230, 126, 34, 0.1)';
    this.ctx.lineWidth = 3;

    // Upper wall
    this.ctx.beginPath();
    this.ctx.moveTo(width * 0.1, tubeY - tubeH / 2);
    for(let i = 0; i <= 20; i++) {
        const x = width * 0.1 + (i / 20) * width * 0.8;
        const wave = Math.sin(i / 3) * 15;
        const y = tubeY - tubeH / 2 + wave;
        this.ctx.lineTo(x, y);
    }
    this.ctx.stroke();

    // Lower wall
    this.ctx.beginPath();
    this.ctx.moveTo(width * 0.1, tubeY + tubeH / 2);
    for(let i = 0; i <= 20; i++) {
        const x = width * 0.1 + (i / 20) * width * 0.8;
        const wave = Math.sin(i / 3) * 15;
        const y = tubeY + tubeH / 2 + wave;
        this.ctx.lineTo(x, y);
    }
    this.ctx.stroke();

    // Circular muscle contraction
    this.ctx.strokeStyle = '#C0392B';
    this.ctx.lineWidth = 4;
    const contractionX = width * 0.45;
    this.ctx.beginPath();
    this.ctx.moveTo(contractionX, tubeY - tubeH * 0.3);
    this.ctx.lineTo(contractionX, tubeY + tubeH * 0.3);
    this.ctx.stroke();

    // Longitudinal muscle
    for(let i = 0; i < 3; i++) {
        this.ctx.strokeStyle = '#E74C3C';
        this.ctx.lineWidth = 2;
        const y = tubeY - tubeH * 0.4 + i * tubeH * 0.4;
        this.ctx.beginPath();
        this.ctx.moveTo(width * 0.1, y);
        this.ctx.lineTo(width * 0.9, y);
        this.ctx.stroke();
    }

    // Food bolus
    this.ctx.fillStyle = '#8B4513';
    this.ctx.strokeStyle = '#654321';
    this.ctx.lineWidth = 2;
    this.ctx.beginPath();
    this.ctx.ellipse(width * 0.3, tubeY, 20, 15, 0, 0, Math.PI * 2);
    this.ctx.fill();
    this.ctx.stroke();

    // Movement arrow
    this.drawArrow(width * 0.35, tubeY - tubeH * 0.6, width * 0.7, tubeY - tubeH * 0.6, '#27AE60', 'Direction', 8);

    // Labels
    this.ctx.font = '9px Arial';
    this.ctx.fillStyle = '#7F8C8D';
    this.ctx.textAlign = 'left';
    this.ctx.fillText('Contraction', width * 0.05, height * 0.75);
    this.ctx.fillText('Relaxation', width * 0.65, height * 0.75);
    this.ctx.fillText('Food bolus', width * 0.25, height * 0.65);
}

drawActionPotentialInset(width, height) {
    this.ctx.font = 'bold 13px Arial';
    this.ctx.fillStyle = '#2C3E50';
    this.ctx.textAlign = 'center';
    this.ctx.fillText('Action Potential', width / 2, 20);

    // Graph axes
    const graphX = width * 0.15;
    const graphY = height * 0.7;
    const graphW = width * 0.7;
    const graphH = height * 0.4;

    this.ctx.strokeStyle = '#34495E';
    this.ctx.lineWidth = 2;
    this.ctx.beginPath();
    this.ctx.moveTo(graphX, graphY - graphH);
    this.ctx.lineTo(graphX, graphY);
    this.ctx.lineTo(graphX + graphW, graphY);
    this.ctx.stroke();

    // Action potential curve
    this.ctx.strokeStyle = '#E74C3C';
    this.ctx.lineWidth = 3;
    this.ctx.beginPath();

    const points = [
        [0, 0.5],      // Resting
        [0.2, 0.5],    // Threshold
        [0.3, 0.1],    // Depolarization
        [0.4, 0.05],   // Peak
        [0.5, 0.7],    // Repolarization
        [0.6, 0.75],   // Hyperpolarization
        [0.7, 0.5],    // Return to resting
        [1, 0.5]
    ];

    points.forEach(([tx, ty], i) => {
        const x = graphX + tx * graphW;
        const y = graphY - ty * graphH;
        if(i === 0) this.ctx.moveTo(x, y);
        else this.ctx.lineTo(x, y);
    });
    this.ctx.stroke();

    // Threshold line
    this.ctx.strokeStyle = '#F39C12';
    this.ctx.setLineDash([5, 5]);
    this.ctx.lineWidth = 1;
    this.ctx.beginPath();
    this.ctx.moveTo(graphX, graphY - graphH * 0.45);
    this.ctx.lineTo(graphX + graphW, graphY - graphH * 0.45);
    this.ctx.stroke();
    this.ctx.setLineDash([]);

    // Labels
    this.ctx.font = '9px Arial';
    this.ctx.fillStyle = '#7F8C8D';
    this.ctx.textAlign = 'center';
    
    // Phases
    this.ctx.fillText('Rest', graphX + graphW * 0.1, graphY + 15);
    this.ctx.fillText('Depol.', graphX + graphW * 0.35, graphY + 15);
    this.ctx.fillText('Repol.', graphX + graphW * 0.55, graphY + 15);
    this.ctx.fillText('Hyper.', graphX + graphW * 0.65, graphY + 15);

    // Voltage labels
    this.ctx.textAlign = 'right';
    this.ctx.fillText('+40mV', graphX - 5, graphY - graphH * 0.95);
    this.ctx.fillText('0mV', graphX - 5, graphY - graphH * 0.5);
    this.ctx.fillText('-70mV', graphX - 5, graphY - graphH * 0.05);
    
    // Threshold label
    this.ctx.fillStyle = '#F39C12';
    this.ctx.fillText('Threshold', graphX - 5, graphY - graphH * 0.45);

    // Time axis
    this.ctx.fillStyle = '#7F8C8D';
    this.ctx.textAlign = 'center';
    this.ctx.fillText('Time (ms)', graphX + graphW / 2, graphY + 30);

    // Ion movements
    this.ctx.font = 'bold 10px Arial';
    this.ctx.fillStyle = '#3498DB';
    this.ctx.fillText('Na⁺ in', graphX + graphW * 0.35, graphY - graphH * 0.2);
    this.ctx.fillStyle = '#E74C3C';
    this.ctx.fillText('K⁺ out', graphX + graphW * 0.55, graphY - graphH * 0.6);
}

drawSaltatatoryConductionInset(width, height) {
    this.ctx.font = 'bold 13px Arial';
    this.ctx.fillStyle = '#2C3E50';
    this.ctx.textAlign = 'center';
    this.ctx.fillText('Saltatory Conduction', width / 2, 20);

    // Myelinated axon
    const axonY = height * 0.5;
    const nodeCount = 4;
    const segmentW = width * 0.2;

    for(let i = 0; i < nodeCount; i++) {
        const x = width * 0.1 + i * segmentW;
        
        // Myelin sheath
        this.ctx.fillStyle = '#F7DC6F';
        this.ctx.strokeStyle = '#F39C12';
        this.ctx.lineWidth = 2;
        this.ctx.fillRect(x, axonY - 20, segmentW * 0.7, 40);
        this.ctx.strokeRect(x, axonY - 20, segmentW * 0.7, 40);

        // Node of Ranvier
        this.ctx.fillStyle = '#E8B4B8';
        this.ctx.strokeStyle = '#C0392B';
        this.ctx.fillRect(x + segmentW * 0.7, axonY - 15, segmentW * 0.3, 30);
        this.ctx.strokeRect(x + segmentW * 0.7, axonY - 15, segmentW * 0.3, 30);

        // Action potential jumping
        if(i < nodeCount - 1) {
            const nodeX = x + segmentW * 0.85;
            this.ctx.strokeStyle = '#E74C3C';
            this.ctx.fillStyle = '#E74C3C';
            this.ctx.lineWidth = 2;
            
            // Lightning bolt symbol
            this.ctx.beginPath();
            this.ctx.moveTo(nodeX, axonY - 30);
            this.ctx.lineTo(nodeX + 5, axonY - 35);
            this.ctx.lineTo(nodeX, axonY - 40);
            this.ctx.stroke();
            
            // Jumping arrow
            const arcX1 = nodeX;
            const arcX2 = x + segmentW + segmentW * 0.85;
            this.ctx.beginPath();
            this.ctx.moveTo(arcX1, axonY - 35);
            this.ctx.quadraticCurveTo(
                (arcX1 + arcX2) / 2, axonY - 60,
                arcX2, axonY - 35
            );
            this.ctx.stroke();

            // Arrowhead
            this.ctx.beginPath();
            this.ctx.moveTo(arcX2, axonY - 35);
            this.ctx.lineTo(arcX2 - 5, axonY - 38);
            this.ctx.lineTo(arcX2 - 5, axonY - 32);
            this.ctx.closePath();
            this.ctx.fill();
        }
    }

    // Labels
    this.ctx.font = '9px Arial';
    this.ctx.fillStyle = '#7F8C8D;
    this.ctx.textAlign = 'left';
    this.ctx.fillText('Myelin Sheath', width * 0.05, height * 0.7);
    this.ctx.fillText('(insulation)', width * 0.05, height * 0.77);
    this.ctx.fillText('Node of Ranvier', width * 0.05, height * 0.84);
    this.ctx.fillText('(signal regeneration)', width * 0.05, height * 0.91);
    
    this.ctx.textAlign = 'center';
    this.ctx.fillText('Signal "jumps" between nodes → faster conduction', width / 2, height * 0.97);
}

drawNeurotransmitterReleaseInset(width, height) {
    this.ctx.font = 'bold 13px Arial';
    this.ctx.fillStyle = '#2C3E50';
    this.ctx.textAlign = 'center';
    this.ctx.fillText('Neurotransmitter Release', width / 2, 20);

    // Presynaptic terminal
    this.ctx.fillStyle = 'rgba(245, 183, 177, 0.5)';
    this.ctx.strokeStyle = '#E74C3C';
    this.ctx.lineWidth = 2;
    this.ctx.beginPath();
    this.ctx.roundRect(width * 0.1, height * 0.25, width * 0.35, height * 0.3, 10);
    this.ctx.fill();
    this.ctx.stroke();

    // Voltage-gated Ca²⁺ channels
    for(let i = 0; i < 3; i++) {
        const cx = width * 0.25 + i * width * 0.08;
        const cy = height * 0.55;
        
        this.ctx.fillStyle = '#9B59B6';
        this.ctx.fillRect(cx - 3, cy - 15, 6, 30);
        this.ctx.strokeStyle = '#8E44AD';
        this.ctx.strokeRect(cx - 3, cy - 15, 6, 30);

        // Ca²⁺ ions
        this.ctx.fillStyle = '#F39C12';
        this.ctx.font = 'bold 9px Arial';
        this.ctx.textAlign = 'center';
        this.ctx.fillText('Ca²⁺', cx, cy + 25);
        
        // Arrow showing influx
        this.drawArrow(cx, cy + 20, cx, cy + 10, '#F39C12', '', 4);
    }

    // Synaptic vesicles
    const vesicles = [
        [0.15, 0.3], [0.22, 0.32], [0.18, 0.38],
        [0.28, 0.35], [0.32, 0.4], [0.38, 0.33]
    ];

    vesicles.forEach(([vx, vy], i) => {
        this.ctx.fillStyle = '#FF6B6B';
        this.ctx.strokeStyle = '#C0392B';
        this.ctx.lineWidth = 1.5;
        this.ctx.beginPath();
        this.ctx.arc(width * vx, height * vy, 8, 0, Math.PI * 2);
        this.ctx.fill();
        this.ctx.stroke();

        // Neurotransmitter molecules inside
        this.ctx.fillStyle = '#F39C12';
        for(let j = 0; j < 3; j++) {
            const angle = (j / 3) * Math.PI * 2;
            const mx = width * vx + Math.cos(angle) * 3;
            const my = height * vy + Math.sin(angle) * 3;
            this.ctx.fillRect(mx - 1, my - 1, 2, 2);
        }

        // Vesicle docking/fusion (last two vesicles)
        if(i >= 4) {
            this.ctx.strokeStyle = '#E74C3C';
            this.ctx.lineWidth = 2;
            this.ctx.beginPath();
            this.ctx.moveTo(width * vx, height * vy + 8);
            this.ctx.lineTo(width * vx, height * 0.55);
            this.ctx.stroke();
        }
    });

    // Synaptic cleft
    this.ctx.fillStyle = 'rgba(189, 195, 199, 0.3)';
    this.ctx.fillRect(width * 0.45, height * 0.2, width * 0.1, height * 0.45);
    
    this.ctx.strokeStyle = '#7F8C8D';
    this.ctx.setLineDash([3, 3]);
    this.ctx.lineWidth = 1;
    this.ctx.strokeRect(width * 0.45, height * 0.2, width * 0.1, height * 0.45);
    this.ctx.setLineDash([]);

    // Released neurotransmitters
    this.ctx.fillStyle = '#F39C12';
    for(let i = 0; i < 12; i++) {
        const rx = width * 0.46 + Math.random() * width * 0.08;
        const ry = height * 0.25 + Math.random() * height * 0.35;
        this.ctx.fillRect(rx - 2, ry - 2, 4, 4);
    }

    // Postsynaptic membrane with receptors
    this.ctx.fillStyle = 'rgba(174, 214, 241, 0.5)';
    this.ctx.strokeStyle = '#3498DB';
    this.ctx.lineWidth = 2;
    this.ctx.beginPath();
    this.ctx.roundRect(width * 0.55, height * 0.25, width * 0.35, height * 0.3, 10);
    this.ctx.fill();
    this.ctx.stroke();

    // Receptors
    for(let i = 0; i < 5; i++) {
        const rx = width * 0.56 + i * width * 0.07;
        const ry = height * 0.25;
        
        this.ctx.fillStyle = '#5DADE2';
        this.ctx.fillRect(rx - 3, ry, 6, 15);
        this.ctx.strokeStyle = '#2980B9';
        this.ctx.strokeRect(rx - 3, ry, 6, 15);

        // Binding site
        this.ctx.fillStyle = '#F39C12';
        this.ctx.beginPath();
        this.ctx.arc(rx, ry + 5, 3, 0, Math.PI * 2);
        this.ctx.fill();
    }

    // Labels
    this.ctx.font = '9px Arial';
    this.ctx.fillStyle = '#7F8C8D';
    this.ctx.textAlign = 'left';
    this.ctx.fillText('1. Ca²⁺ enters', width * 0.05, height * 0.7);
    this.ctx.fillText('2. Vesicles fuse', width * 0.05, height * 0.77);
    this.ctx.fillText('3. NT released', width * 0.05, height * 0.84);
    this.ctx.fillText('4. Receptors bind', width * 0.05, height * 0.91);
}

drawBoneStructureInset(width, height) {
    this.ctx.font = 'bold 13px Arial';
    this.ctx.fillStyle = '#2C3E50';
    this.ctx.textAlign = 'center';
    this.ctx.fillText('Bone Tissue Layers', width / 2, 20);

    // Cross-section of long bone
    const centerX = width * 0.5;
    const centerY = height * 0.5;

    // Medullary cavity (innermost)
    this.ctx.fillStyle = '#FFE4C4';
    this.ctx.strokeStyle = '#DEB887';
    this.ctx.lineWidth = 2;
    this.ctx.beginPath();
    this.ctx.arc(centerX, centerY, width * 0.15, 0, Math.PI * 2);
    this.ctx.fill();
    this.ctx.stroke();

    // Yellow marrow
    this.ctx.fillStyle = '#FFEFD5';
    for(let i = 0; i < 6; i++) {
        const angle = (i / 6) * Math.PI * 2;
        const mx = centerX + Math.cos(angle) * width * 0.08;
        const my = centerY + Math.sin(angle) * width * 0.08;
        this.ctx.beginPath();
        this.ctx.arc(mx, my, 5, 0, Math.PI * 2);
        this.ctx.fill();
    }

    // Compact bone (middle layer)
    this.ctx.fillStyle = '#F5F5DC';
    this.ctx.strokeStyle = '#D3D3C0';
    this.ctx.lineWidth = 3;
    this.ctx.beginPath();
    this.ctx.arc(centerX, centerY, width * 0.28, 0, Math.PI * 2);
    this.ctx.fill();
    this.ctx.stroke();

    // Haversian systems (osteons)
    for(let i = 0; i < 8; i++) {
        const angle = (i / 8) * Math.PI * 2;
        const hx = centerX + Math.cos(angle) * width * 0.22;
        const hy = centerY + Math.sin(angle) * width * 0.22;
        
        // Central canal
        this.ctx.fillStyle = '#FFB6C1';
        this.ctx.beginPath();
        this.ctx.arc(hx, hy, 3, 0, Math.PI * 2);
        this.ctx.fill();
        
        // Concentric lamellae
        for(let r = 1; r <= 3; r++) {
            this.ctx.strokeStyle = 'rgba(139, 69, 19, 0.2)';
            this.ctx.lineWidth = 1;
            this.ctx.beginPath();
            this.ctx.arc(hx, hy, 3 + r * 4, 0, Math.PI * 2);
            this.ctx.stroke();
        }
    }

    // Periosteum (outer layer)
    this.ctx.strokeStyle = '#CD853F';
    this.ctx.lineWidth = 4;
    this.ctx.beginPath();
    this.ctx.arc(centerX, centerY, width * 0.32, 0, Math.PI * 2);
    this.ctx.stroke();

    // Blood vessels
    this.ctx.strokeStyle = '#E74C3C';
    this.ctx.lineWidth = 2;
    this.ctx.beginPath();
    this.ctx.moveTo(centerX - width * 0.32, centerY);
    this.ctx.lineTo(centerX - width * 0.15, centerY);
    this.ctx.stroke();

    // Labels with leader lines
    this.ctx.font = '9px Arial';
    this.ctx.fillStyle = '#7F8C8D';
    this.ctx.textAlign = 'left';

    // Periosteum
    this.ctx.strokeStyle = '#7F8C8D';
    this.ctx.lineWidth = 1;
    this.ctx.beginPath();
    this.ctx.moveTo(centerX + width * 0.32, centerY - width * 0.1);
    this.ctx.lineTo(centerX + width * 0.38, centerY - width * 0.15);
    this.ctx.stroke();
    this.ctx.fillText('Periosteum', centerX + width * 0.4, centerY - width * 0.13);

    // Compact bone
    this.ctx.beginPath();
    this.ctx.moveTo(centerX + width * 0.25, centerY + width * 0.05);
    this.ctx.lineTo(centerX + width * 0.38, centerY + width * 0.1);
    this.ctx.stroke();
    this.ctx.fillText('Compact Bone', centerX + width * 0.4, centerY + width * 0.12);

    // Medullary cavity
    this.ctx.beginPath();
    this.ctx.moveTo(centerX, centerY + width * 0.15);
    this.ctx.lineTo(centerX + width * 0.15, centerY + width * 0.25);
    this.ctx.stroke();
    this.ctx.fillText('Marrow Cavity', centerX + width * 0.17, centerY + width * 0.27);

    // Haversian system
    this.ctx.beginPath();
    this.ctx.moveTo(centerX + width * 0.15, centerY - width * 0.15);
    this.ctx.lineTo(centerX + width * 0.25, centerY - width * 0.22);
    this.ctx.stroke();
    this.ctx.fillText('Osteon', centerX + width * 0.27, centerY - width * 0.2);
}

drawSarcomereInset(width, height) {
    this.ctx.font = 'bold 13px Arial';
    this.ctx.fillStyle = '#2C3E50';
    this.ctx.textAlign = 'center';
    this.ctx.fillText('Sarcomere Structure', width / 2, 20);

    const sarcoX = width * 0.5;
    const sarcoY = height * 0.5;
    const sarcoW = width * 0.7;
    const sarcoH = height * 0.4;

    // Z-lines
    this.ctx.strokeStyle = '#2C3E50';
    this.ctx.lineWidth = 3;
    this.ctx.beginPath();
    this.ctx.moveTo(sarcoX - sarcoW / 2, sarcoY - sarcoH / 2);
    this.ctx.lineTo(sarcoX - sarcoW / 2, sarcoY + sarcoH / 2);
    this.ctx.stroke();
    this.ctx.beginPath();
    this.ctx.moveTo(sarcoX + sarcoW / 2, sarcoY - sarcoH / 2);
    this.ctx.lineTo(sarcoX + sarcoW / 2, sarcoY + sarcoH / 2);
    this.ctx.stroke();

    // M-line
    this.ctx.beginPath();
    this.ctx.moveTo(sarcoX, sarcoY - sarcoH * 0.3);
    this.ctx.lineTo(sarcoX, sarcoY + sarcoH * 0.3);
    this.ctx.stroke();

    // Thin filaments (actin) - red
    this.ctx.strokeStyle = '#E74C3C';
    this.ctx.lineWidth = 3;
    for(let i = 0; i < 6; i++) {
        const y = sarcoY - sarcoH * 0.35 + i * (sarcoH * 0.14);
        
        // From left Z-line
        this.ctx.beginPath();
        this.ctx.moveTo(sarcoX - sarcoW / 2, y);
        this.ctx.lineTo(sarcoX - sarcoW * 0.15, y);
        this.ctx.stroke();
        
        // From right Z-line
        this.ctx.beginPath();
        this.ctx.moveTo(sarcoX + sarcoW / 2, y);
        this.ctx.lineTo(sarcoX + sarcoW * 0.15, y);
        this.ctx.stroke();
    }

    // Thick filaments (myosin) - blue
    this.ctx.strokeStyle = '#3498DB';
    this.ctx.lineWidth = 4;
    for(let i = 0; i < 5; i++) {
        const y = sarcoY - sarcoH * 0.3 + i * (sarcoH * 0.15);
        
        this.ctx.beginPath();
        this.ctx.moveTo(sarcoX - sarcoW * 0.25, y);
        this.ctx.lineTo(sarcoX + sarcoW * 0.25, y);
        this.ctx.stroke();
        
        // Myosin heads
        this.ctx.fillStyle = '#2980B9';
        for(let j = -3; j <= 3; j++) {
            if(j === 0) continue; // Skip center (M-line)
            const headX = sarcoX + j * sarcoW * 0.07;
            this.ctx.beginPath();
            this.ctx.arc(headX, y - 3, 2, 0, Math.PI * 2);
            this.ctx.fill();
            this.ctx.beginPath();
            this.ctx.arc(headX, y + 3, 2, 0, Math.PI * 2);
            this.ctx.fill();
        }
    }

    // Bands labels
    this.ctx.font = 'bold 10px Arial';
    this.ctx.fillStyle = '#7F8C8D';
    this.ctx.textAlign = 'center';

    // I-band (light)
    this.ctx.fillStyle = 'rgba(231, 76, 60, 0.1)';
    this.ctx.fillRect(sarcoX - sarcoW / 2, sarcoY - sarcoH / 2, sarcoW * 0.2, sarcoH);
    this.ctx.fillRect(sarcoX + sarcoW * 0.3, sarcoY - sarcoH / 2, sarcoW * 0.2, sarcoH);
    
    this.ctx.fillStyle = '#7F8C8D';
    this.ctx.fillText('I', sarcoX - sarcoW * 0.4, sarcoY - sarcoH * 0.55);

    // A-band (dark)
    this.ctx.fillStyle = 'rgba(52, 152, 219, 0.1)';
    this.ctx.fillRect(sarcoX - sarcoW * 0.3, sarcoY - sarcoH / 2, sarcoW * 0.6, sarcoH);
    
    this.ctx.fillStyle = '#7F8C8D';
    this.ctx.fillText('A', sarcoX, sarcoY - sarcoH * 0.55);

    // H-zone
    this.ctx.fillStyle = 'rgba(52, 152, 219, 0.05)';
    this.ctx.fillRect(sarcoX - sarcoW * 0.15, sarcoY - sarcoH / 2, sarcoW * 0.3, sarcoH);
    
    this.ctx.fillStyle = '#7F8C8D';
    this.ctx.fillText('H', sarcoX, sarcoY + sarcoH * 0.6);

    // Z, M labels
    this.ctx.fillText('Z', sarcoX - sarcoW / 2, sarcoY + sarcoH * 0.6);
    this.ctx.fillText('M', sarcoX, sarcoY - sarcoH * 0.4);
    this.ctx.fillText('Z', sarcoX + sarcoW / 2, sarcoY + sarcoH * 0.6);

    // Legend
    this.ctx.font = '9px Arial';
    this.ctx.textAlign = 'left';
    this.ctx.fillStyle = '#E74C3C';
    this.ctx.fillText('— Actin (thin)', width * 0.05, height * 0.85);
    this.ctx.fillStyle = '#3498DB';
    this.ctx.fillText('— Myosin (thick)', width * 0.05, height * 0.92);
}

drawSlidingFilamentInset(width, height) {
    this.ctx.font = 'bold 13px Arial';
    this.ctx.fillStyle = '#2C3E50';
    this.ctx.textAlign = 'center';
    this.ctx.fillText('Sliding Filament Model', width / 2, 20);

    const yTop = height * 0.3;
    const yBot = height * 0.7;
    const sarcoW = width * 0.7;

    // RELAXED state (top)
    this.ctx.font = 'bold 11px Arial';
    this.ctx.fillText('RELAXED', width * 0.15, yTop - 15);

    const relaxX = width * 0.5;
    
    // Z-lines
    this.ctx.strokeStyle = '#2C3E50';
    this.ctx.lineWidth = 2;
    this.ctx.beginPath();
    this.ctx.moveTo(relaxX - sarcoW * 0.4, yTop - 20);
    this.ctx.lineTo(relaxX - sarcoW * 0.4, yTop + 20);
    this.ctx.stroke();
    this.ctx.beginPath();
    this.ctx.moveTo(relaxX + sarcoW * 0.4, yTop - 20);
    this.ctx.lineTo(relaxX + sarcoW * 0.4, yTop + 20);
    this.ctx.stroke();

    // Thin filaments
    this.ctx.strokeStyle = '#E74C3C';
    this.ctx.lineWidth = 2;
    for(let i = 0; i < 3; i++) {
        const y = yTop - 10 + i * 10;
        this.ctx.beginPath();
        this.ctx.moveTo(relaxX - sarcoW * 0.4, y);
        this.ctx.lineTo(relaxX - sarcoW * 0.1, y);
        this.ctx.stroke();
        this.ctx.beginPath();
        this.ctx.moveTo(relaxX + sarcoW * 0.4, y);
        this.ctx.lineTo(relaxX + sarcoW * 0.1, y);
        this.ctx.stroke();
    }

    // Thick filaments
    this.ctx.strokeStyle = '#3498DB';
    this.ctx.lineWidth = 3;
    for(let i = 0; i < 2; i++) {
        const y = yTop - 5 + i * 10;
        this.ctx.beginPath();
        this.ctx.moveTo(relaxX - sarcoW * 0.2, y);
        this.ctx.lineTo(relaxX + sarcoW * 0.2, y);
        this.ctx.stroke();
    }

    // Sarcomere length
    this.ctx.strokeStyle = '#7F8C8D';
    this.ctx.setLineDash([2, 2]);
    this.ctx.beginPath();
    this.ctx.moveTo(relaxX - sarcoW * 0.4, yTop + 30);
    this.ctx.lineTo(relaxX + sarcoW * 0.4, yTop + 30);
    this.ctx.stroke();
    this.ctx.setLineDash([]);
    
    this.ctx.font = '9px Arial';
    this.ctx.fillStyle = '#7F8C8D';
    this.ctx.fillText('Long sarcomere', relaxX, yTop + 42);

    // CONTRACTED state (bottom)
    this.ctx.font = 'bold 11px Arial';
    this.ctx.fillStyle = '#2C3E50';
    this.ctx.fillText('CONTRACTED', width * 0.15, yBot - 15);

    const contractX = width * 0.5;
    
    // Z-lines (closer together)
    this.ctx.strokeStyle = '#2C3E50';
    this.ctx.lineWidth = 2;
    this.ctx.beginPath();
    this.ctx.moveTo(contractX - sarcoW * 0.25, yBot - 20);
    this.ctx.lineTo(contractX - sarcoW * 0.25, yBot + 20);
    this.ctx.stroke();
    this.ctx.beginPath();
    this.ctx.moveTo(contractX + sarcoW * 0.25, yBot - 20);
    this.ctx.lineTo(contractX + sarcoW * 0.25, yBot + 20);
    this.ctx.stroke();

    // Thin filaments (overlapping more)
    this.ctx.strokeStyle = '#E74C3C';
    this.ctx.lineWidth = 2;
    for(let i = 0; i < 3; i++) {
        const y = yBot - 10 + i * 10;
        this.ctx.beginPath();
        this.ctx.moveTo(contractX - sarcoW * 0.25, y);
        this.ctx.lineTo(contractX + sarcoW * 0.05, y);
        this.ctx.stroke();
        this.ctx.beginPath();
        this.ctx.moveTo(contractX + sarcoW * 0.25, y);
        this.ctx.lineTo(contractX - sarcoW * 0.05, y);
        this.ctx.stroke();
    }

    // Thick filaments (same length)
    this.ctx.strokeStyle = '#3498DB';
    this.ctx.lineWidth = 3;
    for(let i = 0; i < 2; i++) {
        const y = yBot - 5 + i * 10;
        this.ctx.beginPath();
        this.ctx.moveTo(contractX - sarcoW * 0.2, y);
        this.ctx.lineTo(contractX + sarcoW * 0.2, y);
        this.ctx.stroke();
    }

    // Sarcomere length
    this.ctx.strokeStyle = '#7F8C8D';
    this.ctx.setLineDash([2, 2]);
    this.ctx.beginPath();
    this.ctx.moveTo(contractX - sarcoW * 0.25, yBot + 30);
    this.ctx.lineTo(contractX + sarcoW * 0.25, yBot + 30);
    this.ctx.stroke();
    this.ctx.setLineDash([]);
    
    this.ctx.font = '9px Arial';
    this.ctx.fillStyle = '#7F8C8D';
    this.ctx.fillText('Short sarcomere', contractX, yBot + 42);

    // Arrow showing movement
    this.ctx.strokeStyle = '#27AE60';
    this.ctx.fillStyle = '#27AE60';
    this.ctx.lineWidth = 3;
    this.drawArrow(width * 0.85, yTop + 20, width * 0.85, yBot - 20, '#27AE60', '', 8);
}

drawNeuromuscularJunctionInset(width, height) {
    this.ctx.font = 'bold 13px Arial';
    this.ctx.fillStyle = '#2C3E50';
    this.ctx.textAlign = 'center';
    this.ctx.fillText('Neuromuscular Junction', width / 2, 20);

    // Motor neuron terminal
    this.ctx.fillStyle = 'rgba(255, 220, 127, 0.5)';
    this.ctx.strokeStyle = '#F39C12';
    this.ctx.lineWidth = 2;
    this.ctx.beginPath();
    this.ctx.ellipse(width * 0.5, height * 0.35, width * 0.25, height * 0.15, 0, 0, Math.PI * 2);
    this.ctx.fill();
    this.ctx.stroke();

    // Axon
    this.ctx.fillStyle = '#F7DC6F';
    this.ctx.fillRect(width * 0.45, height * 0.1, width * 0.1, height * 0.2);
    this.ctx.strokeRect(width * 0.45, height * 0.1, width * 0.1, height * 0.2);

    // Synaptic vesicles with ACh
    for(let i = 0; i < 8; i++) {
        const angle = (i / 8) * Math.PI * 2;
        const vx = width * 0.5 + Math.cos(angle) * width * 0.12;
        const vy = height * 0.35 + Math.sin(angle) * height * 0.08;
        
        this.ctx.fillStyle = '#E74C3C';
        this.ctx.strokeStyle = '#C0392B';
        this.ctx.lineWidth = 1.5;
        this.ctx.beginPath();
        this.ctx.arc(vx, vy, 6, 0, Math.PI * 2);
        this.ctx.fill();
        this.ctx.stroke();
    }

    // Synaptic cleft
    this.ctx.fillStyle = 'rgba(189, 195, 199, 0.3)';
    this.ctx.fillRect(width * 0.15, height * 0.48, width * 0.7, height * 0.08);
    this.ctx.strokeStyle = '#95A5A6';
    this.ctx.setLineDash([3, 3]);
    this.ctx.strokeRect(width * 0.15, height * 0.48, width * 0.7, height * 0.08);
    this.ctx.setLineDash([]);

    // ACh molecules in cleft
    this.ctx.fillStyle = '#E74C3C';
    this.ctx.font = 'bold 8px Arial';
    for(let i = 0; i < 10; i++) {
        const ax = width * 0.2 + Math.random() * width * 0.6;
        const ay = height * 0.5 + Math.random() * height * 0.04;
        this.ctx.fillText('ACh', ax, ay);
    }

    // Muscle fiber (motor end plate)
    this.ctx.fillStyle = 'rgba(220, 20, 60, 0.3)';
    this.ctx.strokeStyle = '#DC143C';
    this.ctx.lineWidth = 2;
    this.ctx.fillRect(width * 0.1, height * 0.56, width * 0.8, height * 0.3);
    this.ctx.strokeRect(width * 0.1, height * 0.56, width * 0.8, height * 0.3);

    // Junctional folds
    for(let i = 0; i < 8; i++) {
        const fx = width * 0.15 + i * width * 0.09;
        this.ctx.strokeStyle = '#A52A2A';
        this.ctx.lineWidth = 2;
        this.ctx.beginPath();
        this.ctx.moveTo(fx, height * 0.56);
        this.ctx.lineTo(fx, height * 0.64);
        this.ctx.lineTo(fx + width * 0.03, height * 0.64);
        this.ctx.lineTo(fx + width * 0.03, height * 0.56);
        this.ctx.stroke();
    }

    // ACh receptors
    for(let i = 0; i < 12; i++) {
        const rx = width * 0.15 + i * width * 0.06;
        this.ctx.fillStyle = '#5DADE2';
        this.ctx.fillRect(rx, height * 0.54, 4, 8);
    }

    // Labels
    this.ctx.font = '9px Arial';
    this.ctx.fillStyle = '#7F8C8D';
    this.ctx.textAlign = 'left';
    this.ctx.fillText('Motor neuron', width * 0.05, height * 0.25);
    this.ctx.fillText('ACh vesicles', width * 0.05, height * 0.38);
    this.ctx.fillText('Synaptic cleft', width * 0.05, height * 0.52);
    this.ctx.fillText('Muscle fiber', width * 0.05, height * 0.7);
    this.ctx.fillText('ACh receptors', width * 0.05, height * 0.62);
}

drawGlomerularFiltrationInset(width, height) {
    this.ctx.font = 'bold 13px Arial';
    this.ctx.fillStyle = '#2C3E50';
    this.ctx.textAlign = 'center';
    this.ctx.fillText('Glomerular Filtration Barrier', width / 2, 20);

    // Three-layer filtration barrier
    const layerY = height * 0.45;
    const layerH = height * 0.35;

    // Blood side (left)
    this.ctx.fillStyle = 'rgba(231, 76, 60, 0.2)';
    this.ctx.fillRect(width * 0.05, layerY - layerH / 2, width * 0.2, layerH);
    
    this.ctx.font = 'bold 10px Arial';
    this.ctx.fillStyle = '#E74C3C';
    this.ctx.textAlign = 'center';
    this.ctx.fillText('BLOOD', width * 0.15, layerY - layerH * 0.6);

    // Layer 1: Fenestrated endothelium
    this.ctx.strokeStyle = '#E74C3C';
    this.ctx.lineWidth = 3;
    this.ctx.setLineDash([5, 3]);
    this.ctx.beginPath();
    this.ctx.moveTo(width * 0.25, layerY - layerH / 2);
    this.ctx.lineTo(width * 0.25, layerY + layerH / 2);
    this.ctx.stroke();
    this.ctx.setLineDash([]);

    // Fenestrations (pores)
    this.ctx.fillStyle = '#E74C3C';
    for(let i = 0; i < 8; i++) {
        const py = layerY - layerH * 0.4 + i * (layerH * 0.1);
        this.ctx.beginPath();
        this.ctx.arc(width * 0.25, py, 3, 0, Math.PI * 2);
        this.ctx.fill();
    }

    // Layer 2: Basement membrane
    this.ctx.fillStyle = 'rgba(155, 89, 182, 0.3)';
    this.ctx.fillRect(width * 0.28, layerY - layerH / 2, width * 0.15, layerH);
    this.ctx.strokeStyle = '#9B59B6';
    this.ctx.lineWidth = 2;
    this.ctx.strokeRect(width * 0.28, layerY - layerH / 2, width * 0.15, layerH);

    // Mesh network
    this.ctx.strokeStyle = '#8E44AD';
    this.ctx.lineWidth = 1;
    for(let i = 0; i < 6; i++) {
        for(let j = 0; j < 4; j++) {
            this.ctx.strokeRect(
                width * 0.29 + j * width * 0.035,
                layerY - layerH * 0.45 + i * (layerH * 0.15),
                width * 0.03,
                layerH * 0.12
            );
        }
    }

    // Layer 3: Podocyte filtration slits
    this.ctx.strokeStyle = '#3498DB';
    this.ctx.lineWidth = 3;
    this.ctx.beginPath();
    this.ctx.moveTo(width * 0.43, layerY - layerH / 2);
    this.ctx.lineTo(width * 0.43, layerY + layerH / 2);
    this.ctx.stroke();

    // Podocyte foot processes
    for(let i = 0; i < 10; i++) {
        const fy = layerY - layerH * 0.45 + i * (layerH * 0.1);
        this.ctx.fillStyle = '#5DADE2';
        this.ctx.fillRect(width * 0.44, fy, width * 0.03, layerH * 0.06);
        this.ctx.fillRect(width * 0.48, fy + layerH * 0.03, width * 0.03, layerH * 0.06);
    }

    // Filtrate side (right)
    this.ctx.fillStyle = 'rgba(241, 196, 15, 0.2)';
    this.ctx.fillRect(width * 0.55, layerY - layerH / 2, width * 0.2, layerH);
    
    this.ctx.font = 'bold 10px Arial';
    this.ctx.fillStyle = '#F39C12';
    this.ctx.textAlign = 'center';
    this.ctx.fillText('FILTRATE', width * 0.65, layerY - layerH * 0.6);

    // Size-based filtration
    const particles = [
        { size: 3, name: 'Water', color: '#3498DB', filtered: true },
        { size: 4, name: 'Glucose', color: '#F39C12', filtered: true },
        { size: 5, name: 'Urea', color: '#E67E22', filtered: true },
        { size: 10, name: 'Protein', color: '#E74C3C', filtered: false }
    ];

    particles.forEach((p, i) => {
        const startX = width * 0.15;
        const startY = layerY - layerH * 0.3 + i * (layerH * 0.2);

        this.ctx.fillStyle = p.color;
        this.ctx.strokeStyle = p.color;
        this.ctx.lineWidth = 1;

        // Particle on blood side
        this.ctx.beginPath();
        this.ctx.arc(startX, startY, p.size, 0, Math.PI * 2);
        this.ctx.fill();
        this.ctx.stroke();

        if(p.filtered) {
            // Arrow through barrier
            this.drawArrow(startX + 10, startY, width * 0.55, startY, p.color, '', 4);
            
            // Particle on filtrate side
            this.ctx.beginPath();
            this.ctx.arc(width * 0.6, startY, p.size, 0, Math.PI * 2);
            this.ctx.fill();
        } else {
            // Blocked symbol
            this.ctx.strokeStyle = '#E74C3C';
            this.ctx.lineWidth = 3;
            this.ctx.beginPath();
            this.ctx.moveTo(width * 0.23, startY - 8);
            this.ctx.lineTo(width * 0.27, startY + 8);
            this.ctx.stroke();
        }
    });

    // Labels
    this.ctx.font = '8px Arial';
    this.ctx.fillStyle = '#7F8C8D';
    this.ctx.textAlign = 'left';
    this.ctx.fillText('1. Endothelium', width * 0.05, height * 0.82);
    this.ctx.fillText('2. Basement membrane', width * 0.05, height * 0.88);
    this.ctx.fillText('3. Podocyte slits', width * 0.05, height * 0.94);
}

drawCountercurrentInset(width, height) {
    this.ctx.font = 'bold 13px Arial';
    this.ctx.fillStyle = '#2C3E50';
    this.ctx.textAlign = 'center';
    this.ctx.fillText('Countercurrent Multiplier', width / 2, 20);

    // Loop of Henle
    const loopX = width * 0.4;
    const loopTop = height * 0.15;
    const loopBottom = height * 0.75;
    const loopWidth = width * 0.25;

    // Descending limb
    this.ctx.strokeStyle = '#3498DB';
    this.ctx.fillStyle = 'rgba(52, 152, 219, 0.2)';
    this.ctx.lineWidth = 4;
    this.ctx.beginPath();
    this.ctx.moveTo(loopX, loopTop);
    this.ctx.lineTo(loopX, loopBottom);
    this.ctx.lineTo(loopX + loopWidth, loopBottom);
    this.ctx.stroke();

    // Ascending limb
    this.ctx.strokeStyle = '#E74C3C';
    this.ctx.lineWidth = 4;
    this.ctx.beginPath();
    this.ctx.moveTo(loopX + loopWidth, loopBottom);
    this.ctx.lineTo(loopX + loopWidth, loopTop);
    this.ctx.stroke();

    // Osmolarity gradient labels
    const osmolarities = [300, 400, 600, 800, 1000, 1200];
    this.ctx.font = 'bold 10px Arial';
    this.ctx.fillStyle = '#7F8C8D';
    this.ctx.textAlign = 'right';

    osmolarities.forEach((osm, i) => {
        const y = loopTop + (i / (osmolarities.length - 1)) * (loopBottom - loopTop);
        this.ctx.fillText(`${osm}`, loopX - 10, y + 5);
        
        // Concentration gradient in tissue
        this.ctx.fillStyle = `rgba(241, 196, 15, ${0.1 + i * 0.15})`;
        const segHeight = (loopBottom - loopTop) / (osmolarities.length - 1);
        if(i < osmolarities.length - 1) {
            this.ctx.fillRect(loopX - 50, y, 40, segHeight);
        }
        this.ctx.fillStyle = '#7F8C8D';
    });

    // Water movement (out of descending)
    for(let i = 0; i < 5; i++) {
        const y = loopTop + 60 + i * 80;
        this.ctx.strokeStyle = '#3498DB';
        this.ctx.fillStyle = '#3498DB';
        this.drawArrow(loopX - 3, y, loopX - 25, y, '#3498DB', '', 4);
        
        this.ctx.font = '9px Arial';
        this.ctx.textAlign = 'center';
        this.ctx.fillText('H₂O', loopX - 35, y + 4);
    }

    // Salt movement (out of ascending)
    for(let i = 0; i < 5; i++) {
        const y = loopTop + 100 + i * 80;
        this.ctx.strokeStyle = '#E74C3C';
        this.ctx.fillStyle = '#E74C3C';
        this.drawArrow(loopX + loopWidth + 3, y, loopX + loopWidth + 25, y, '#E74C3C', '', 4);
        
        this.ctx.font = '9px Arial';
        this.ctx.textAlign = 'center';
        this.ctx.fillText('NaCl', loopX + loopWidth + 35, y + 4);
    }

    // Flow direction arrows
    this.ctx.font = 'bold 11px Arial';
    this.ctx.fillStyle = '#2C3E50';
    this.ctx.textAlign = 'center';
    
    // Down
    this.ctx.fillText('↓', loopX, loopTop + (loopBottom - loopTop) / 2);
    this.ctx.fillText('Descending', loopX - 70, loopTop + 30);
    
    // Up
    this.ctx.fillText('↑', loopX + loopWidth, loopTop + (loopBottom - loopTop) / 2);
    this.ctx.fillText('Ascending', loopX + loopWidth + 70, loopTop + 30);

    // Interstitial space label
    this.ctx.font = '9px Arial';
    this.ctx.fillStyle = '#7F8C8D';
    this.ctx.textAlign = 'left';
    this.ctx.fillText('Interstitial', width * 0.05, height * 0.45);
    this.ctx.fillText('Space', width * 0.05, height * 0.52);
    this.ctx.fillText('(gradient)', width * 0.05, height * 0.59);
}

drawAntibodyProductionInset(width, height) {
    this.ctx.font = 'bold 13px Arial';
    this.ctx.fillStyle = '#2C3E50';
    this.ctx.textAlign = 'center';
    this.ctx.fillText('Antibody Production', width / 2, 20);

    // B cell activation pathway
    const stageW = width * 0.28;
    const stageY = height * 0.5;

    // Stage 1: B cell encounters antigen
    let x = width * 0.05;
    this.ctx.font = 'bold 10px Arial';
    this.ctx.fillText('1. Recognition', x + stageW / 2, 45);

    // B cell
    this.ctx.fillStyle = '#AED6F1';
    this.ctx.strokeStyle = '#3498DB';
    this.ctx.lineWidth = 2;
    this.ctx.beginPath();
    this.ctx.arc(x + stageW * 0.3, stageY, 25, 0, Math.PI * 2);
    this.ctx.fill();
    this.ctx.stroke();

    // B cell receptors
    for(let i = 0; i < 6; i++) {
        const angle = (i / 6) * Math.PI * 2;
        const rx = x + stageW * 0.3 + Math.cos(angle) * 25;
        const ry = stageY + Math.sin(angle) * 25;
        
        this.ctx.strokeStyle = '#2980B9';
        this.ctx.lineWidth = 2;
        this.ctx.beginPath();
        this.ctx.moveTo(rx, ry);
        this.ctx.lineTo(rx + Math.cos(angle) * 10, ry + Math.sin(angle) * 10);
        this.ctx.stroke();
    }

    // Antigen
    this.ctx.fillStyle = '#E74C3C';
    this.ctx.strokeStyle = '#C0392B';
    this.ctx.lineWidth = 2;
    this.ctx.beginPath();
    this.ctx.arc(x + stageW * 0.7, stageY, 15, 0, Math.PI * 2);
    this.ctx.fill();
    this.ctx.stroke();

    // Stage 2: Activation and proliferation
    x = width * 0.36;
    this.ctx.fillStyle = '#2C3E50';
    this.ctx.fillText('2. Activation', x + stageW / 2, 45);

    // Activated B cell (larger)
    this.ctx.fillStyle = '#85C1E2';
    this.ctx.strokeStyle = '#2980B9';
    this.ctx.lineWidth = 2;
    this.ctx.beginPath();
    this.ctx.arc(x + stageW * 0.5, stageY, 30, 0, Math.PI * 2);
    this.ctx.fill();
    this.ctx.stroke();

    // Cell division indicators
    this.ctx.strokeStyle = '#2C3E50';
    this.ctx.lineWidth = 2;
    this.ctx.beginPath();
    this.ctx.moveTo(x + stageW * 0.5 - 15, stageY);
    this.ctx.lineTo(x + stageW * 0.5 + 15, stageY);
    this.ctx.stroke();
    this.ctx.beginPath();
    this.ctx.moveTo(x + stageW * 0.5, stageY - 15);
    this.ctx.lineTo(x + stageW * 0.5, stageY + 15);
    this.ctx.stroke();

    // Stage 3: Plasma cells and antibodies
    x = width * 0.67;
    this.ctx.fillStyle = '#2C3E50';
    this.ctx.fillText('3. Production', x + stageW / 2, 45);

    // Plasma cell
    this.ctx.fillStyle = '#D6EAF8';
    this.ctx.strokeStyle = '#3498DB';
    this.ctx.lineWidth = 2;
    this.ctx.beginPath();
    this.ctx.arc(x + stageW * 0.3, stageY, 28, 0, Math.PI * 2);
    this.ctx.fill();
    this.ctx.stroke();

    // Rough ER (antibody factory)
    this.ctx.fillStyle = '#5DADE2';
    for(let i = 0; i < 4; i++) {
        const angle = (i / 4) * Math.PI * 2;
        const erx = x + stageW * 0.3 + Math.cos(angle) * 12;
        const ery = stageY + Math.sin(angle) * 12;
        this.ctx.fillRect(erx - 3, ery - 2, 6, 4);
    }

    // Antibodies being secreted
    for(let i = 0; i < 4; i++) {
        const aby = stageY - 35 + i * 20;
        const abx = x + stageW * 0.6 + i * 8;
        
        // Y-shaped antibody
        this.ctx.strokeStyle = '#9B59B6';
        this.ctx.lineWidth = 2;
        this.ctx.beginPath();
        this.ctx.moveTo(abx, aby + 8);
        this.ctx.lineTo(abx, aby);
        this.ctx.lineTo(abx - 4, aby - 6);
        this.ctx.stroke();
        this.ctx.beginPath();
        this.ctx.moveTo(abx, aby);
        this.ctx.lineTo(abx + 4, aby - 6);
        this.ctx.stroke();
    }

    // Arrows between stages
    this.ctx.strokeStyle = '#27AE60';
    this.ctx.fillStyle = '#27AE60';
    this.drawArrow(width * 0.23, height * 0.35, width * 0.33, height * 0.35, '#27AE60', '', 6);
    this.drawArrow(width * 0.54, height * 0.35, width * 0.64, height * 0.35, '#27AE60', '', 6);

    // Note
    this.ctx.font = '9px Arial';
    this.ctx.fillStyle = '#7F8C8D';
    this.ctx.textAlign = 'center';
    this.ctx.fillText('Plasma cells produce ~2000 antibodies/second', width / 2, height * 0.85);
}

drawPhagocytosisInset(width, height) {
    this.ctx.font = 'bold 13px Arial';
    this.ctx.fillStyle = '#2C3E50';
    this.ctx.textAlign = 'center';
    this.ctx.fillText('Phagocytosis Process', width / 2, 20);

    const stageW = width * 0.22;
    const stageY = height * 0.5;

    // Stage 1: Recognition
    let x = width * 0.05;
    this.ctx.font = 'bold 9px Arial';
    this.ctx.fillText('1. Recognition', x + stageW / 2, 40);

    // Phagocyte
    this.ctx.fillStyle = '#D6EAF8';
    this.ctx.strokeStyle = '#3498DB';
    this.ctx.lineWidth = 2;
    this.ctx.beginPath();
    this.ctx.arc(x + stageW * 0.4, stageY, 30, 0, Math.PI * 2);
    this.ctx.fill();
    this.ctx.stroke();

    // Pathogen
    this.ctx.fillStyle = '#E74C3C';
    this.ctx.strokeStyle = '#C0392B';
    this.ctx.beginPath();
    this.ctx.arc(x + stageW * 0.75, stageY, 12, 0, Math.PI * 2);
    this.ctx.fill();
    this.ctx.stroke();

    // Receptors
    for(let i = 0; i < 3; i++) {
        const angle = -Math.PI / 4 + i * (Math.PI / 6);
        const rx = x + stageW * 0.4 + Math.cos(angle) * 30;
        const ry = stageY + Math.sin(angle) * 30;
        
        this.ctx.fillStyle = '#5DADE2';
        this.ctx.fillRect(rx - 2, ry - 4, 4, 8);
    }

    // Stage 2: Engulfment
    x = width * 0.28;
    this.ctx.fillText('2. Engulfment', x + stageW / 2, 40);

    this.ctx.fillStyle = '#D6EAF8';
    this.ctx.strokeStyle = '#3498DB';
    this.ctx.lineWidth = 2;
    this.ctx.beginPath();
    this.ctx.arc(x + stageW * 0.5, stageY, 32, 0, Math.PI * 2);
    this.ctx.fill();
    this.ctx.stroke();

    // Pseudopods extending
    this.ctx.fillStyle = '#AED6F1';
    this.ctx.beginPath();
    this.ctx.arc(x + stageW * 0.75, stageY - 10, 15, 0, Math.PI);
    this.ctx.fill();
    this.ctx.beginPath();
    this.ctx.arc(x + stageW * 0.75, stageY + 10, 15, Math.PI, 0);
    this.ctx.fill();

    // Pathogen being surrounded
    this.ctx.fillStyle = '#E74C3C';
    this.ctx.beginPath();
    this.ctx.arc(x + stageW * 0.75, stageY, 12, 0, Math.PI * 2);
    this.ctx.fill();

    // Stage 3: Phagosome formation
    x = width * 0.51;
    this.ctx.fillText('3. Phagosome', x + stageW / 2, 40);

    this.ctx.fillStyle = '#D6EAF8';
    this.ctx.strokeStyle = '#3498DB';
    this.ctx.lineWidth = 2;
    this.ctx.beginPath();
    this.ctx.arc(x + stageW * 0.5, stageY, 32, 0, Math.PI * 2);
    this.ctx.fill();
    this.ctx.stroke();

    // Phagosome (vesicle with pathogen)
    this.ctx.fillStyle = 'rgba(174, 214, 241, 0.5)';
    this.ctx.strokeStyle = '#5DADE2';
    this.ctx.lineWidth = 2;
    this.ctx.beginPath();
    this.ctx.arc(x + stageW * 0.5, stageY, 18, 0, Math.PI * 2);
    this.ctx.fill();
    this.ctx.stroke();

    // Pathogen inside
    this.ctx.fillStyle = '#E74C3C';
    this.ctx.beginPath();
    this.ctx.arc(x + stageW * 0.5, stageY, 10, 0, Math.PI * 2);
    this.ctx.fill();

    // Stage 4: Digestion
    x = width * 0.74;
    this.ctx.fillText('4. Digestion', x + stageW / 2, 40);

    this.ctx.fillStyle = '#D6EAF8';
    this.ctx.strokeStyle = '#3498DB';
    this.ctx.lineWidth = 2;
    this.ctx.beginPath();
    this.ctx.arc(x + stageW * 0.5, stageY, 32, 0, Math.PI * 2);
    this.ctx.fill();
    this.ctx.stroke();

    // Phagolysosome
    this.ctx.fillStyle = 'rgba(155, 89, 182, 0.3)';
    this.ctx.strokeStyle = '#9B59B6';
    this.ctx.lineWidth = 2;
    this.ctx.beginPath();
    this.ctx.arc(x + stageW * 0.5, stageY, 18, 0, Math.PI * 2);
    this.ctx.fill();
    this.ctx.stroke();

    // Degraded pathogen (fragments)
    this.ctx.fillStyle = '#E67E22';
    for(let i = 0; i < 6; i++) {
        const angle = (i / 6) * Math.PI * 2;
        const fx = x + stageW * 0.5 + Math.cos(angle) * 8;
        const fy = stageY + Math.sin(angle) * 8;
        this.ctx.fillRect(fx - 2, fy - 2, 4, 4);
    }

    // Arrows
    this.ctx.strokeStyle = '#27AE60';
    this.ctx.fillStyle = '#27AE60';
    for(let i = 0; i < 3; i++) {
        const arrowX1 = width * (0.17 + i * 0.23);
        const arrowX2 = width * (0.25 + i * 0.23);
        this.drawArrow(arrowX1, height * 0.35, arrowX2, height * 0.35, '#27AE60', '', 5);
    }
}

drawClonalSelectionInset(width, height) {
    this.ctx.font = 'bold 13px Arial';
    this.ctx.fillStyle = '#2C3E50';
    this.ctx.textAlign = 'center';
    this.ctx.fillText('Clonal Selection', width / 2, 20);

    // Diverse B cell population (top)
    this.ctx.font = 'bold 10px Arial';
    this.ctx.fillText('Diverse B Cells', width * 0.5, 45);

    const colors = ['#3498DB', '#9B59B6', '#E74C3C', '#F39C12', '#27AE60', '#E67E22'];
    
    for(let i = 0; i < 6; i++) {
        const bx = width * 0.15 + i * width * 0.12;
        const by = height * 0.2;
        
        this.ctx.fillStyle = colors[i];
        this.ctx.strokeStyle = colors[i];
        this.ctx.lineWidth = 2;
        this.ctx.beginPath();
        this.ctx.arc(bx, by, 12, 0, Math.PI * 2);
        this.ctx.fill();
        
        // Unique receptors
        for(let j = 0; j < 3; j++) {
            const angle = (j / 3) * Math.PI * 2;
            const rx = bx + Math.cos(angle) * 12;
            const ry = by + Math.sin(angle) * 12;
            this.ctx.beginPath();
            this.ctx.moveTo(rx, ry);
            this.ctx.lineTo(rx + Math.cos(angle) * 6, ry + Math.sin(angle) * 6);
            this.ctx.stroke();
        }
    }

    // Antigen
    const agX = width * 0.5;
    const agY = height * 0.35;
    
    this.ctx.fillStyle = '#E74C3C';
    this.ctx.strokeStyle = '#C0392B';
    this.ctx.lineWidth = 2;
    this.ctx.beginPath();
    this.ctx.arc(agX, agY, 18, 0, Math.PI * 2);
    this.ctx.fill();
    this.ctx.stroke();
    
    this.ctx.fillStyle = '#2C3E50';
    this.ctx.font = 'bold 9px Arial';
    this.ctx.textAlign = 'center';
    this.ctx.fillText('ANTIGEN', agX, agY + 4);

    // Selected B cell (matching)
    const selX = width * 0.51; // 3rd cell matches
    const selY = height * 0.52;
    
    this.ctx.strokeStyle = '#27AE60';
    this.ctx.lineWidth = 3;
    this.ctx.setLineDash([5, 3]);
    this.ctx.beginPath();
    this.ctx.arc(selX, selY, 20, 0, Math.PI * 2);
    this.ctx.stroke();
    this.ctx.setLineDash([]);
    
    this.ctx.fillStyle = '#E74C3C';
    this.ctx.strokeStyle = '#C0392B';
    this.ctx.lineWidth = 2;
    this.ctx.beginPath();
    this.ctx.arc(selX, selY, 15, 0, Math.PI * 2);
    this.ctx.fill();
    this.ctx.stroke();

    // Arrow showing selection
    this.drawArrow(agX, agY + 22, selX, selY - 22, '#27AE60', 'Binds', 6);

    // Clonal expansion (bottom)
    this.ctx.font = 'bold 10px Arial';
    this.ctx.fillStyle = '#2C3E50';
    this.ctx.fillText('Clonal Expansion', width * 0.5, height * 0.68);

    for(let i = 0; i < 8; i++) {
        const cloneX = width * 0.15 + i * width * 0.1;
        const cloneY = height * 0.8;
        
        this.ctx.fillStyle = '#E74C3C';
        this.ctx.strokeStyle = '#C0392B';
        this.ctx.lineWidth = 2;
        this.ctx.beginPath();
        this.ctx.arc(cloneX, cloneY, 12, 0, Math.PI * 2);
        this.ctx.fill();
        this.ctx.stroke();
        
        // Identical receptors
        for(let j = 0; j < 3; j++) {
            const angle = (j / 3) * Math.PI * 2;
            const rx = cloneX + Math.cos(angle) * 12;
            const ry = cloneY + Math.sin(angle) * 12;
            this.ctx.strokeStyle = '#C0392B';
            this.ctx.beginPath();
            this.ctx.moveTo(rx, ry);
            this.ctx.lineTo(rx + Math.cos(angle) * 6, ry + Math.sin(angle) * 6);
            this.ctx.stroke();
            
        }
    }

    // Labels
    this.ctx.font = '9px Arial';
    this.ctx.fillStyle = '#7F8C8D';
    this.ctx.textAlign = 'center';
    this.ctx.fillText('Only matching B cell is activated and proliferates', width / 2, height * 0.95);
}

drawInsulinSignalingInset(width, height) {
    this.ctx.font = 'bold 13px Arial';
    this.ctx.fillStyle = '#2C3E50';
    this.ctx.textAlign = 'center';
    this.ctx.fillText('Insulin Signaling Cascade', width / 2, 20);

    // Cell membrane
    this.ctx.strokeStyle = '#34495E';
    this.ctx.lineWidth = 3;
    this.ctx.setLineDash([8, 4]);
    this.ctx.beginPath();
    this.ctx.moveTo(width * 0.05, height * 0.4);
    this.ctx.lineTo(width * 0.95, height * 0.4);
    this.ctx.stroke();
    this.ctx.setLineDash([]);

    this.ctx.font = 'bold 10px Arial';
    this.ctx.fillStyle = '#7F8C8D';
    this.ctx.textAlign = 'left';
    this.ctx.fillText('Extracellular', width * 0.05, height * 0.35);
    this.ctx.fillText('Intracellular', width * 0.05, height * 0.48);

    // Step 1: Insulin binding
    const ins1X = width * 0.2;
    const ins1Y = height * 0.25;
    
    // Insulin
    this.ctx.fillStyle = '#9B59B6';
    this.ctx.strokeStyle = '#8E44AD';
    this.ctx.lineWidth = 2;
    this.ctx.beginPath();
    this.ctx.arc(ins1X, ins1Y, 10, 0, Math.PI * 2);
    this.ctx.fill();
    this.ctx.stroke();
    
    this.ctx.font = 'bold 8px Arial';
    this.ctx.fillStyle = '#FFFFFF';
    this.ctx.textAlign = 'center';
    this.ctx.fillText('I', ins1X, ins1Y + 3);

    // Insulin receptor
    this.ctx.strokeStyle = '#E74C3C';
    this.ctx.lineWidth = 3;
    this.ctx.beginPath();
    this.ctx.moveTo(ins1X, ins1Y + 12);
    this.ctx.lineTo(ins1X, height * 0.55);
    this.ctx.stroke();

    // Receptor domains
    this.ctx.fillStyle = '#E74C3C';
    this.ctx.fillRect(ins1X - 8, ins1Y + 10, 16, 12);
    this.ctx.fillRect(ins1X - 6, height * 0.42, 12, 10);

    // Step 2: Receptor activation
    const rec2X = width * 0.4;
    
    this.ctx.fillStyle = '#F39C12';
    this.ctx.font = 'bold 9px Arial';
    this.ctx.textAlign = 'center';
    this.ctx.fillText('P', rec2X - 10, height * 0.48);
    this.ctx.fillText('P', rec2X + 10, height * 0.48);
    
    // Phosphorylation symbols
    this.ctx.fillStyle = '#F39C12';
    this.ctx.beginPath();
    this.ctx.arc(rec2X - 10, height * 0.5, 4, 0, Math.PI * 2);
    this.ctx.fill();
    this.ctx.beginPath();
    this.ctx.arc(rec2X + 10, height * 0.5, 4, 0, Math.PI * 2);
    this.ctx.fill();

    // Step 3: Signal cascade
    const cascade = [
        { name: 'IRS', y: 0.58, color: '#3498DB' },
        { name: 'PI3K', y: 0.66, color: '#27AE60' },
        { name: 'AKT', y: 0.74, color: '#E67E22' }
    ];

    cascade.forEach((step, i) => {
        const stepX = width * 0.5;
        const stepY = height * step.y;
        
        this.ctx.fillStyle = step.color;
        this.ctx.strokeStyle = step.color;
        this.ctx.lineWidth = 2;
        this.ctx.fillRect(stepX - 20, stepY - 8, 40, 16);
        this.ctx.strokeRect(stepX - 20, stepY - 8, 40, 16);
        
        this.ctx.fillStyle = '#FFFFFF';
        this.ctx.font = 'bold 9px Arial';
        this.ctx.textAlign = 'center';
        this.ctx.fillText(step.name, stepX, stepY + 3);
        
        // Arrows between steps
        if(i < cascade.length - 1) {
            this.drawArrow(stepX, stepY + 10, stepX, height * cascade[i + 1].y - 10, '#2C3E50', '', 5);
        }
    });

    // Step 4: GLUT4 translocation
    const glut4X = width * 0.7;
    
    // Vesicle with GLUT4
    this.ctx.fillStyle = 'rgba(155, 89, 182, 0.3)';
    this.ctx.strokeStyle = '#9B59B6';
    this.ctx.lineWidth = 2;
    this.ctx.beginPath();
    this.ctx.arc(glut4X, height * 0.6, 20, 0, Math.PI * 2);
    this.ctx.fill();
    this.ctx.stroke();
    
    // GLUT4 protein
    this.ctx.fillStyle = '#E74C3C';
    this.ctx.fillRect(glut4X - 10, height * 0.6 - 5, 20, 10);
    this.ctx.strokeRect(glut4X - 10, height * 0.6 - 5, 20, 10);
    
    this.ctx.fillStyle = '#FFFFFF';
    this.ctx.font = 'bold 7px Arial';
    this.ctx.textAlign = 'center';
    this.ctx.fillText('GLUT4', glut4X, height * 0.6 + 2);

    // Arrow to membrane
    this.drawArrow(glut4X, height * 0.6 - 22, glut4X, height * 0.4 - 5, '#9B59B6', '', 5);

    // GLUT4 in membrane
    this.ctx.fillStyle = '#E74C3C';
    this.ctx.fillRect(glut4X - 6, height * 0.38, 12, 15);
    this.ctx.strokeRect(glut4X - 6, height * 0.38, 12, 15);

    // Glucose transport
    this.ctx.fillStyle = '#F39C12';
    this.ctx.font = 'bold 10px Arial';
    this.ctx.fillText('Glucose', glut4X + 30, height * 0.3);
    this.drawArrow(glut4X + 25, height * 0.32, glut4X + 8, height * 0.4, '#F39C12', '', 5);
    
    this.ctx.fillText('Glucose', glut4X + 30, height * 0.55);
    this.drawArrow(glut4X + 8, height * 0.48, glut4X + 25, height * 0.53, '#F39C12', '', 5);

    // Summary
    this.ctx.font = '9px Arial';
    this.ctx.fillStyle = '#7F8C8D';
    this.ctx.textAlign = 'center';
    this.ctx.fillText('Result: Increased glucose uptake into cell', width / 2, height * 0.92);
}

drawHormoneFeedbackInset(width, height) {
    this.ctx.font = 'bold 13px Arial';
    this.ctx.fillStyle = '#2C3E50';
    this.ctx.textAlign = 'center';
    this.ctx.fillText('Negative Feedback: Thyroid Hormones', width / 2, 20);

    const centerX = width * 0.5;
    const spacing = height * 0.22;

    // Hypothalamus
    const hypoY = height * 0.15;
    this.ctx.fillStyle = '#BB8FCE';
    this.ctx.strokeStyle = '#9B59B6';
    this.ctx.lineWidth = 2;
    this.ctx.beginPath();
    this.ctx.arc(centerX, hypoY, 30, 0, Math.PI * 2);
    this.ctx.fill();
    this.ctx.stroke();
    
    this.ctx.fillStyle = '#FFFFFF';
    this.ctx.font = 'bold 10px Arial';
    this.ctx.textAlign = 'center';
    this.ctx.fillText('Hypothalamus', centerX, hypoY + 3);

    // Anterior Pituitary
    const pitY = hypoY + spacing;
    this.ctx.fillStyle = '#F8B195';
    this.ctx.strokeStyle = '#E67E22';
    this.ctx.lineWidth = 2;
    this.ctx.beginPath();
    this.ctx.arc(centerX, pitY, 30, 0, Math.PI * 2);
    this.ctx.fill();
    this.ctx.stroke();
    
    this.ctx.fillStyle = '#FFFFFF';
    this.ctx.fillText('Anterior', centerX, pitY - 3);
    this.ctx.fillText('Pituitary', centerX, pitY + 8);

    // Thyroid Gland
    const thyY = pitY + spacing;
    this.ctx.fillStyle = '#76D7C4';
    this.ctx.strokeStyle = '#16A085';
    this.ctx.lineWidth = 2;
    this.ctx.beginPath();
    this.ctx.arc(centerX, thyY, 30, 0, Math.PI * 2);
    this.ctx.fill();
    this.ctx.stroke();
    
    this.ctx.fillStyle = '#FFFFFF';
    this.ctx.fillText('Thyroid', centerX, thyY + 3);

    // Target Tissues
    const targY = thyY + spacing;
    this.ctx.fillStyle = '#F7DC6F';
    this.ctx.strokeStyle = '#F39C12';
    this.ctx.lineWidth = 2;
    this.ctx.beginPath();
    this.ctx.roundRect(centerX - 35, targY - 20, 70, 40, 5);
    this.ctx.fill();
    this.ctx.stroke();
    
    this.ctx.fillStyle = '#2C3E50';
    this.ctx.fillText('Target Tissues', centerX, targY - 5);
    this.ctx.font = '9px Arial';
    this.ctx.fillText('(metabolism ↑)', centerX, targY + 8);

    // Forward arrows with hormones
    this.ctx.strokeStyle = '#27AE60';
    this.ctx.fillStyle = '#27AE60';
    this.ctx.lineWidth = 3;
    
    // TRH
    this.drawArrow(centerX, hypoY + 32, centerX, pitY - 32, '#27AE60', '', 6);
    this.ctx.font = 'bold 9px Arial';
    this.ctx.fillText('TRH', centerX + 25, hypoY + spacing / 2);
    
    // TSH
    this.drawArrow(centerX, pitY + 32, centerX, thyY - 32, '#27AE60', '', 6);
    this.ctx.fillText('TSH', centerX + 25, pitY + spacing / 2);
    
    // T3/T4
    this.drawArrow(centerX, thyY + 32, centerX, targY - 22, '#27AE60', '', 6);
    this.ctx.fillText('T₃/T₄', centerX + 30, thyY + spacing / 2);

    // Negative feedback arrows (red, curved)
    this.ctx.strokeStyle = '#E74C3C';
    this.ctx.fillStyle = '#E74C3C';
    this.ctx.lineWidth = 2.5;
    
    // To pituitary
    this.ctx.beginPath();
    this.ctx.moveTo(centerX + 35, thyY);
    this.ctx.quadraticCurveTo(centerX + 80, thyY - spacing / 2, centerX + 35, pitY);
    this.ctx.stroke();
    this.drawArrow(centerX + 40, pitY + 5, centerX + 35, pitY, '#E74C3C', '', 5);
    
    this.ctx.font = 'bold 9px Arial';
    this.ctx.fillText('⊖', centerX + 85, pitY + spacing / 2);

    // To hypothalamus
    this.ctx.beginPath();
    this.ctx.moveTo(centerX + 35, thyY);
    this.ctx.quadraticCurveTo(centerX + 100, thyY - spacing * 1.5, centerX + 35, hypoY);
    this.ctx.stroke();
    this.drawArrow(centerX + 40, hypoY + 5, centerX + 35, hypoY, '#E74C3C', '', 5);
    
    this.ctx.fillText('⊖', centerX + 105, hypoY + spacing);

    // Legend
    this.ctx.font = '9px Arial';
    this.ctx.fillStyle = '#7F8C8D';
    this.ctx.textAlign = 'left';
    this.ctx.fillText('→ Stimulation', width * 0.05, height * 0.92);
    this.ctx.fillStyle = '#E74C3C';
    this.ctx.fillText('⊖ Inhibition', width * 0.35, height * 0.92);
}

drawATPYieldInset(width, height) {
    this.ctx.font = 'bold 13px Arial';
    this.ctx.fillStyle = '#2C3E50';
    this.ctx.textAlign = 'center';
    this.ctx.fillText('ATP Yield from Glucose', width / 2, 20);

    const stages = [
        { name: 'Glycolysis', atp: 2, nadh: 2, color: '#3498DB', y: 0.2 },
        { name: 'Pyruvate → Acetyl-CoA', atp: 0, nadh: 2, color: '#9B59B6', y: 0.35 },
        { name: 'Krebs Cycle', atp: 2, nadh: 6, fadh2: 2, color: '#E67E22', y: 0.5 },
        { name: 'Electron Transport', atp: 28, nadh: 0, color: '#27AE60', y: 0.65 }
    ];

    let totalATP = 0;

    stages.forEach((stage, i) => {
        const boxY = height * stage.y;
        const boxH = height * 0.1;
        
        // Stage box
        this.ctx.fillStyle = stage.color;
        this.ctx.strokeStyle = stage.color;
        this.ctx.lineWidth = 2;
        this.ctx.fillRect(width * 0.1, boxY, width * 0.4, boxH);
        this.ctx.strokeRect(width * 0.1, boxY, width * 0.4, boxH);
        
        this.ctx.fillStyle = '#FFFFFF';
        this.ctx.font = 'bold 11px Arial';
        this.ctx.textAlign = 'center';
        this.ctx.fillText(stage.name, width * 0.3, boxY + boxH / 2 + 4);

        // Products
        this.ctx.fillStyle = '#2C3E50';
        this.ctx.font = '10px Arial';
        this.ctx.textAlign = 'left';
        let productX = width * 0.55;
        
        if(stage.atp > 0) {
            this.ctx.fillText(`${stage.atp} ATP`, productX, boxY + boxH / 3);
        }
        if(stage.nadh > 0) {
            this.ctx.fillText(`${stage.nadh} NADH`, productX, boxY + boxH * 0.55);
        }
        if(stage.fadh2) {
            this.ctx.fillText(`${stage.fadh2} FADH₂`, productX, boxY + boxH * 0.75);
        }

        // ATP contribution
        let stageATP = stage.atp;
        if(i < 3) { // Not ETC
            stageATP += stage.nadh * 2.5; // NADH → ~2.5 ATP
            if(stage.fadh2) stageATP += stage.fadh2 * 1.5; // FADH2 → ~1.5 ATP
        }
        
        totalATP += stageATP;
        
        // Running total
        this.ctx.fillStyle = '#E74C3C';
        this.ctx.font = 'bold 10px Arial';
        this.ctx.textAlign = 'right';
        this.ctx.fillText(`≈${Math.round(stageATP)} ATP`, width * 0.9, boxY + boxH / 2 + 4);
    });

    // Total ATP
    const totalY = height * 0.82;
    this.ctx.fillStyle = '#F39C12';
    this.ctx.strokeStyle = '#F39C12';
    this.ctx.lineWidth = 3;
    this.ctx.fillRect(width * 0.1, totalY, width * 0.8, height * 0.12);
    this.ctx.strokeRect(width * 0.1, totalY, width * 0.8, height * 0.12);
    
    this.ctx.fillStyle = '#FFFFFF';
    this.ctx.font = 'bold 16px Arial';
    this.ctx.textAlign = 'center';
    this.ctx.fillText(`TOTAL: ≈${Math.round(totalATP)} ATP per Glucose`, width * 0.5, totalY + height * 0.07);

    // Note
    this.ctx.font = '8px Arial';
    this.ctx.fillStyle = '#7F8C8D';
    this.ctx.fillText('(Actual yield: 30-32 ATP depending on efficiency)', width * 0.5, height * 0.97);
}

drawChemiosmosisInset(width, height) {
    this.ctx.font = 'bold 13px Arial';
    this.ctx.fillStyle = '#2C3E50';
    this.ctx.textAlign = 'center';
    this.ctx.fillText('Chemiosmosis & ATP Synthesis', width / 2, 20);

    // Inner mitochondrial membrane
    const memY = height * 0.5;
    this.ctx.strokeStyle = '#8B4513';
    this.ctx.lineWidth = 5;
    this.ctx.beginPath();
    this.ctx.moveTo(width * 0.05, memY);
    this.ctx.lineTo(width * 0.95, memY);
    this.ctx.stroke();

    // Labels
    this.ctx.font = 'bold 11px Arial';
    this.ctx.fillStyle = '#7F8C8D';
    this.ctx.textAlign = 'left';
    this.ctx.fillText('Intermembrane Space', width * 0.05, memY - height * 0.15);
    this.ctx.fillText('(High H⁺)', width * 0.05, memY - height * 0.1);
    this.ctx.fillText('Matrix', width * 0.05, memY + height * 0.15);
    this.ctx.fillText('(Low H⁺)', width * 0.05, memY + height * 0.2);

    // Electron transport chain complexes (left side)
    const complexes = [
        { x: 0.15, name: 'I' },
        { x: 0.25, name: 'III' },
        { x: 0.35, name: 'IV' }
    ];

    complexes.forEach(comp => {
        const cx = width * comp.x;
        
        // Complex
        this.ctx.fillStyle = '#E74C3C';
        this.ctx.strokeStyle = '#C0392B';
        this.ctx.lineWidth = 2;
        this.ctx.fillRect(cx - 15, memY - 25, 30, 50);
        this.ctx.strokeRect(cx - 15, memY - 25, 30, 50);
        
        this.ctx.fillStyle = '#FFFFFF';
        this.ctx.font = 'bold 12px Arial';
        this.ctx.textAlign = 'center';
        this.ctx.fillText(comp.name, cx, memY + 5);
        
        // H+ being pumped
        for(let i = 0; i < 3; i++) {
            const hy = memY - 30 - i * 12;
            this.ctx.fillStyle = '#F39C12';
            this.ctx.font = 'bold 10px Arial';
            this.ctx.fillText('H⁺', cx, hy);
            
            // Arrow
            this.drawArrow(cx, memY - 5, cx, hy + 8, '#F39C12', '', 4);
        }
    });

    // Proton gradient (concentration difference)
    this.ctx.fillStyle = 'rgba(241, 196, 15, 0.2)';
    this.ctx.fillRect(width * 0.05, memY - height * 0.35, width * 0.9, height * 0.3);
    
    // H+ symbols in intermembrane space
    this.ctx.fillStyle = '#F39C12';
    this.ctx.font = 'bold 9px Arial';
    for(let i = 0; i < 20; i++) {
        const hx = width * (0.1 + Math.random() * 0.8);
        const hy = memY - height * (0.05 + Math.random() * 0.25);
        this.ctx.fillText('H⁺', hx, hy);
    }

    // Few H+ in matrix
    for(let i = 0; i < 5; i++) {
        const hx = width * (0.1 + Math.random() * 0.8);
        const hy = memY + height * (0.05 + Math.random() * 0.2);
        this.ctx.fillStyle = '#E67E22';
        this.ctx.fillText('H⁺', hx, hy);
    }

    // ATP Synthase (right side)
    const synthX = width * 0.75;
    
    // F0 portion (in membrane)
    this.ctx.fillStyle = '#9B59B6';
    this.ctx.strokeStyle = '#8E44AD';
    this.ctx.lineWidth = 2;
    this.ctx.beginPath();
    this.ctx.arc(synthX, memY, 20, 0, Math.PI * 2);
    this.ctx.fill();
    this.ctx.stroke();
    
    // Rotation indicator
    this.ctx.strokeStyle = '#FFFFFF';
    this.ctx.lineWidth = 2;
    this.ctx.beginPath();
    this.ctx.arc(synthX, memY, 15, 0, Math.PI * 1.5);
    this.ctx.stroke();
    
    // Arrow showing rotation
    const arrowAngle = Math.PI * 1.5;
    const arrowX = synthX + Math.cos(arrowAngle) * 15;
    const arrowY = memY + Math.sin(arrowAngle) * 15;
    this.ctx.fillStyle = '#FFFFFF';
    this.ctx.beginPath();
    this.ctx.moveTo(arrowX, arrowY);
    this.ctx.lineTo(arrowX - 5, arrowY + 5);
    this.ctx.lineTo(arrowX + 3, arrowY + 2);
    this.ctx.closePath();
    this.ctx.fill();

    // F1 portion (in matrix)
    this.ctx.fillStyle = '#8E44AD';
    this.ctx.strokeStyle = '#6C3483';
    this.ctx.lineWidth = 2;
    this.ctx.beginPath();
    this.ctx.arc(synthX, memY + 35, 18, Math.PI, 0);
    this.ctx.fill();
    this.ctx.stroke();

    // H+ flowing through
    this.ctx.fillStyle = '#F39C12';
    this.ctx.font = 'bold 10px Arial';
    this.ctx.textAlign = 'center';
    for(let i = 0; i < 3; i++) {
        const hy = memY - 25 + i * 25;
        this.ctx.fillText('H⁺', synthX + 25, hy);
        this.drawArrow(synthX + 22, hy - 18, synthX + 5, hy - 3, '#F39C12', '', 4);
    }

    // ATP production
    this.ctx.fillStyle = '#FFD700';
    this.ctx.strokeStyle = '#F39C12';
    this.ctx.lineWidth = 2;
    
    // ADP + Pi
    this.ctx.font = 'bold 9px Arial';
    this.ctx.fillStyle = '#7F8C8D';
    this.ctx.fillText('ADP + Pi', synthX - 35, memY + 55);
    
    // Arrow
    this.drawArrow(synthX - 20, memY + 52, synthX + 20, memY + 52, '#27AE60', '', 5);
    
    // ATP
    this.ctx.fillStyle = '#FFD700';
    this.ctx.font = 'bold 11px Arial';
    this.ctx.fillText('ATP', synthX + 35, memY + 55);
    
    // ATP symbol
    this.ctx.beginPath();
    this.ctx.arc(synthX + 35, memY + 65, 8, 0, Math.PI * 2);
    this.ctx.fill();
    this.ctx.strokeStyle = '#F39C12';
    this.ctx.stroke();

    // Label ATP Synthase
    this.ctx.font = '10px Arial';
    this.ctx.fillStyle = '#2C3E50';
    this.ctx.textAlign = 'center';
    this.ctx.fillText('ATP Synthase', synthX, memY + 80);
}

drawZSchemeInset(width, height) {
    this.ctx.font = 'bold 13px Arial';
    this.ctx.fillStyle = '#2C3E50';
    this.ctx.textAlign = 'center';
    this.ctx.fillText('Z-Scheme (Light Reactions)', width / 2, 20);

    // Axes
    const graphX = width * 0.15;
    const graphY = height * 0.8;
    const graphW = width * 0.7;
    const graphH = height * 0.5;

    this.ctx.strokeStyle = '#34495E';
    this.ctx.lineWidth = 2;
    this.ctx.beginPath();
    this.ctx.moveTo(graphX, graphY - graphH);
    this.ctx.lineTo(graphX, graphY);
    this.ctx.lineTo(graphX + graphW, graphY);
    this.ctx.stroke();

    // Y-axis label
    this.ctx.save();
    this.ctx.translate(graphX - 25, graphY - graphH / 2);
    this.ctx.rotate(-Math.PI / 2);
    this.ctx.font = '10px Arial';
    this.ctx.fillStyle = '#7F8C8D';
    this.ctx.textAlign = 'center';
    this.ctx.fillText('Energy Level', 0, 0);
    this.ctx.restore();

    // Z-scheme path
    const points = [
        [0.05, 0.7],   // Ground state P680
        [0.15, 0.2],   // Excited P680*
        [0.25, 0.5],   // Electron transport
        [0.35, 0.45],  // Ground state P700
        [0.45, 0.15],  // Excited P700*
        [0.6, 0.55],   // Ferredoxin
        [0.75, 0.65]   // NADP+ → NADPH
    ];

    this.ctx.strokeStyle = '#E74C3C';
    this.ctx.lineWidth = 3;
    this.ctx.beginPath();
    points.forEach(([x, y], i) => {
        const px = graphX + x * graphW;
        const py = graphY - y * graphH;
        if(i === 0) this.ctx.moveTo(px, py);
        else this.ctx.lineTo(px, py);
    });
    this.ctx.stroke();

    // Photosystems
    // PS II
    const ps2X = graphX + 0.1 * graphW;
    const ps2Y = graphY - 0.45 * graphH;
    this.ctx.fillStyle = '#27AE60';
    this.ctx.strokeStyle = '#229954';
    this.ctx.lineWidth = 2;
    this.ctx.fillRect(ps2X - 25, ps2Y - 20, 50, 40);
    this.ctx.strokeRect(ps2X - 25, ps2Y - 20, 50, 40);
    
    this.ctx.fillStyle = '#FFFFFF';
    this.ctx.font = 'bold 10px Arial';
    this.ctx.textAlign = 'center';
    this.ctx.fillText('PS II', ps2X, ps2Y - 5);
    this.ctx.fillText('P680', ps2X, ps2Y + 8);

    // Light arrow to PS II
    this.ctx.strokeStyle = '#F39C12';
    this.ctx.fillStyle = '#F39C12';
    for(let i = 0; i < 3; i++) {
        const lx = ps2X - 10 + i * 10;
        this.drawArrow(lx, ps2Y - 40, lx, ps2Y - 22, '#F39C12', '', 4);
    }
    this.ctx.font = '9px Arial';
    this.ctx.fillText('Light', ps2X, ps2Y - 45);

    // PS I
    const ps1X = graphX + 0.4 * graphW;
    const ps1Y = graphY - 0.3 * graphH;
    this.ctx.fillStyle = '#3498DB';
    this.ctx.strokeStyle = '#2980B9';
    this.ctx.lineWidth = 2;
    this.ctx.fillRect(ps1X - 25, ps1Y - 20, 50, 40);
    this.strokeRect(ps1X - 25, ps1Y - 20, 50, 40);
    
    this.ctx.fillStyle = '#FFFFFF';
    this.ctx.font = 'bold 10px Arial';
    this.ctx.textAlign = 'center';
    this.ctx.fillText('PS I', ps1X, ps1Y - 5);
    this.ctx.fillText('P700', ps1X, ps1Y + 8);

    // Light arrow to PS I
    this.ctx.strokeStyle = '#F39C12';
    this.ctx.fillStyle = '#F39C12';
    for(let i = 0; i < 3; i++) {
        const lx = ps1X - 10 + i * 10;
        this.drawArrow(lx, ps1Y - 40, lx, ps1Y - 22, '#F39C12', '', 4);
    }
    this.ctx.font = '9px Arial';
    this.ctx.fillText('Light', ps1X, ps1Y - 45);

    // Key molecules
    // Water splitting
    this.ctx.font = 'bold 9px Arial';
    this.ctx.fillStyle = '#3498DB';
    this.ctx.textAlign = 'left';
    this.ctx.fillText('H₂O', graphX + 0.02 * graphW, graphY - 0.75 * graphH);
    this.drawArrow(
        graphX + 0.04 * graphW, graphY - 0.73 * graphH,
        graphX + 0.08 * graphW, graphY - 0.68 * graphH,
        '#3498DB', '', 4
    );
    this.ctx.fillText('½O₂ + 2H⁺', graphX + 0.01 * graphW, graphY - 0.85 * graphH);

    // Electron transport chain
    this.ctx.fillStyle = '#9B59B6';
    this.ctx.fillText('PQ', graphX + 0.2 * graphW, graphY - 0.55 * graphH);
    this.ctx.fillText('Cyt b₆f', graphX + 0.28 * graphW, graphY - 0.48 * graphH);
    this.ctx.fillText('PC', graphX + 0.35 * graphW, graphY - 0.42 * graphH);

    // NADPH formation
    this.ctx.fillStyle = '#E67E22';
    this.ctx.fillText('Fd', graphX + 0.55 * graphW, graphY - 0.6 * graphH);
    this.ctx.fillText('NADP⁺', graphX + 0.7 * graphW, graphY - 0.68 * graphH);
    this.drawArrow(
        graphX + 0.73 * graphW, graphY - 0.66 * graphH,
        graphX + 0.78 * graphW, graphY - 0.64 * graphH,
        '#E67E22', '', 4
    );
    this.ctx.fillText('NADPH', graphX + 0.8 * graphW, graphY - 0.62 * graphH);

    // ATP synthesis indication
    this.ctx.font = 'bold 10px Arial';
    this.ctx.fillStyle = '#F39C12';
    this.ctx.textAlign = 'center';
    this.ctx.fillText('ATP Synthesis', graphX + graphW / 2, graphY + 15);
    this.ctx.font = '8px Arial';
    this.ctx.fillText('(via chemiosmosis)', graphX + graphW / 2, graphY + 25);
}

drawEnergyPyramidInset(width, height) {
    this.ctx.font = 'bold 13px Arial';
    this.ctx.fillStyle = '#2C3E50';
    this.ctx.textAlign = 'center';
    this.ctx.fillText('10% Energy Transfer Rule', width / 2, 20);

    const levels = [
        { name: 'Tertiary\nConsumers', energy: 10, color: '#E74C3C' },
        { name: 'Secondary\nConsumers', energy: 100, color: '#E67E22' },
        { name: 'Primary\nConsumers', energy: 1000, color: '#F39C12' },
        { name: 'Producers', energy: 10000, color: '#27AE60' }
    ];

    const pyramidH = height * 0.65;
    const pyramidY = height * 0.25;

    levels.forEach((level, i) => {
        const levelH = pyramidH / levels.length;
        const y = pyramidY + i * levelH;
        const widthPercent = 0.2 + (levels.length - i) * 0.15;
        const levelW = width * widthPercent;
        const x = (width - levelW) / 2;

        // Level box
        this.ctx.fillStyle = level.color;
        this.ctx.strokeStyle = level.color;
        this.ctx.lineWidth = 2;
        this.ctx.fillRect(x, y, levelW, levelH);
        this.ctx.strokeRect(x, y, levelW, levelH);

        // Labels
        this.ctx.fillStyle = '#FFFFFF';
        this.ctx.font = 'bold 11px Arial';
        this.ctx.textAlign = 'center';
        const lines = level.name.split('\n');
        lines.forEach((line, j) => {
            this.ctx.fillText(line, width / 2, y + levelH / 2 - 5 + j * 12);
        });

        // Energy value
        this.ctx.fillStyle = '#2C3E50';
        this.ctx.font = 'bold 10px Arial';
        this.ctx.textAlign = 'left';
        this.ctx.fillText(`${level.energy} kcal`, x + levelW + 10, y + levelH / 2 + 4);

        // 10% arrow
        if(i < levels.length - 1) {
            this.ctx.strokeStyle = '#E74C3C';
            this.ctx.fillStyle = '#E74C3C';
            this.ctx.lineWidth = 2;
            
            const arrowX = width * 0.15;
            const arrowY1 = y + levelH;
            const arrowY2 = y + levelH + levelH * 0.5;
            
            this.drawArrow(arrowX, arrowY1, arrowX, arrowY2, '#E74C3C', '10%', 5);
        }
    });

    // Energy loss explanation
    this.ctx.font = '9px Arial';
    this.ctx.fillStyle = '#7F8C8D';
    this.ctx.textAlign = 'center';
    this.ctx.fillText('90% lost as heat, metabolism, incomplete consumption', width / 2, height * 0.95);
}

drawGreenhouseEffectInset(width, height) {
    this.ctx.font = 'bold 13px Arial';
    this.ctx.fillStyle = '#2C3E50';
    this.ctx.textAlign = 'center';
    this.ctx.fillText('Greenhouse Effect', width / 2, 20);

    // Sun
    const sunX = width * 0.15;
    const sunY = height * 0.2;
    this.ctx.fillStyle = '#F39C12';
    this.ctx.strokeStyle = '#E67E22';
    this.ctx.lineWidth = 2;
    this.ctx.beginPath();
    this.ctx.arc(sunX, sunY, 20, 0, Math.PI * 2);
    this.ctx.fill();
    this.ctx.stroke();

    // Sun rays
    for(let i = 0; i < 8; i++) {
        const angle = (i / 8) * Math.PI * 2;
        this.ctx.strokeStyle = '#F39C12';
        this.ctx.lineWidth = 2;
        this.ctx.beginPath();
        this.ctx.moveTo(sunX + Math.cos(angle) * 22, sunY + Math.sin(angle) * 22);
        this.ctx.lineTo(sunX + Math.cos(angle) * 32, sunY + Math.sin(angle) * 32);
        this.ctx.stroke();
    }

    // Incoming solar radiation
    for(let i = 0; i < 5; i++) {
        const x = width * 0.3 + i * width * 0.12;
        this.ctx.strokeStyle = '#F39C12';
        this.ctx.fillStyle = '#F39C12';
        this.drawArrow(x, height * 0.15, x, height * 0.35, '#F39C12', '', 5);
    }

    this.ctx.font = 'bold 10px Arial';
    this.ctx.fillStyle = '#F39C12';
    this.ctx.textAlign = 'left';
    this.ctx.fillText('Incoming Solar', width * 0.3, height * 0.12);
    this.ctx.fillText('Radiation', width * 0.3, height * 0.18);

    // Earth surface
    this.ctx.fillStyle = '#8B4513';
    this.ctx.strokeStyle = '#654321';
    this.ctx.lineWidth = 3;
    this.ctx.fillRect(width * 0.15, height * 0.65, width * 0.7, height * 0.08);
    this.ctx.strokeRect(width * 0.15, height * 0.65, width * 0.7, height * 0.08);

    this.ctx.fillStyle = '#27AE60';
    this.ctx.fillRect(width * 0.2, height * 0.63, width * 0.15, 0.02 * height);
    this.ctx.fillRect(width * 0.45, height * 0.63, width * 0.1, 0.02 * height);

    // Atmosphere layer with greenhouse gases
    this.ctx.fillStyle = 'rgba(189, 195, 199, 0.3)';
    this.ctx.fillRect(width * 0.1, height * 0.38, width * 0.8, height * 0.25);
    this.ctx.strokeStyle = '#7F8C8D';
    this.ctx.setLineDash([5, 5]);
    this.ctx.strokeRect(width * 0.1, height * 0.38, width * 0.8, height * 0.25);
    this.ctx.setLineDash([]);

    // Greenhouse gas molecules
    const gases = ['CO₂', 'CH₄', 'N₂O', 'H₂O'];
    this.ctx.font = 'bold 9px Arial';
    for(let i = 0; i < 15; i++) {
        const gx = width * (0.15 + Math.random() * 0.7);
        const gy = height * (0.4 + Math.random() * 0.2);
        
        this.ctx.fillStyle = 'rgba(231, 76, 60, 0.4)';
        this.ctx.strokeStyle = '#E74C3C';
        this.ctx.lineWidth = 1;
        this.ctx.beginPath();
        this.ctx.arc(gx, gy, 8, 0, Math.PI * 2);
        this.ctx.fill();
        this.ctx.stroke();
        
        this.ctx.fillStyle = '#2C3E50';
        this.ctx.textAlign = 'center';
        this.ctx.fillText(gases[Math.floor(Math.random() * gases.length)], gx, gy + 3);
    }

    // Reflected radiation (some escapes)
    for(let i = 0; i < 2; i++) {
        const x = width * (0.25 + i * 0.3);
        this.ctx.strokeStyle = '#E67E22';
        this.ctx.fillStyle = '#E67E22';
        this.drawArrow(x, height * 0.6, x, height * 0.3, '#E67E22', '', 4);
    }

    // Trapped/re-radiated heat
    for(let i = 0; i < 4; i++) {
        const x = width * (0.35 + i * 0.12);
        
        // Up from surface
        this.ctx.strokeStyle = '#E74C3C';
        this.ctx.fillStyle = '#E74C3C';
        this.drawArrow(x, height * 0.62, x, height * 0.48, '#E74C3C', '', 4);
        
        // Back down (trapped)
        const x2 = x + width * 0.05;
        this.drawArrow(x2, height * 0.5, x2, height * 0.62, '#C0392B', '', 4);
    }

    // Labels
    this.ctx.font = '9px Arial';
    this.ctx.fillStyle = '#7F8C8D';
    this.ctx.textAlign = 'left';
    this.ctx.fillText('Atmosphere with', width * 0.12, height * 0.42);
    this.ctx.fillText('Greenhouse Gases', width * 0.12, height * 0.47);

    this.ctx.fillStyle = '#E74C3C';
    this.ctx.fillText('Heat trapped by', width * 0.65, height * 0.52);
    this.ctx.fillText('greenhouse gases', width * 0.65, height * 0.57);

    // Bottom note
    this.ctx.font = '9px Arial';
    this.ctx.fillStyle = '#2C3E50';
    this.ctx.textAlign = 'center';
    this.ctx.fillText('Result: Earth\'s surface warms', width / 2, height * 0.85);
}

drawDNAMigrationInset(width, height) {
    this.ctx.font = 'bold 13px Arial';
    this.ctx.fillStyle = '#2C3E50';
    this.ctx.textAlign = 'center';
    this.ctx.fillText('DNA Migration in Gel', width / 2, 20);

    // Gel
    const gelX = width * 0.2;
    const gelY = height * 0.15;
    const gelW = width * 0.6;
    const gelH = height * 0.7;

    this.ctx.fillStyle = 'rgba(189, 195, 199, 0.3)';
    this.ctx.strokeStyle = '#7F8C8D';
    this.ctx.lineWidth = 2;
    this.ctx.fillRect(gelX, gelY, gelW, gelH);
    this.ctx.strokeRect(gelX, gelY, gelW, gelH);

    // Wells at top
    for(let i = 0; i < 5; i++) {
        const wellX = gelX + (i + 1) * (gelW / 6);
        this.ctx.fillStyle = '#34495E';
        this.ctx.fillRect(wellX - 10, gelY + 5, 20, 15);
    }

    // DNA fragments of different sizes
    const lanes = [
        [100, 200, 300, 500, 800],  // Ladder
        [450, 520],                  // Sample 1
        [300, 450, 520],            // Sample 2
        [200, 450],                 // Sample 3
        [450, 520]                  // Sample 4
    ];

    lanes.forEach((lane, laneIdx) => {
        const laneX = gelX + (laneIdx + 1) * (gelW / 6);
        
        lane.forEach(size => {
            // Migration distance inversely proportional to size
            const migrationPercent = 0.8 - (size / 1000) * 0.6;
            const bandY = gelY + gelH * migrationPercent;
            
            this.ctx.fillStyle = '#3498DB';
            this.ctx.fillRect(laneX - 12, bandY - 2, 24, 4);
        });
    });

    // Electrodes
    // Negative (top)
    this.ctx.fillStyle = '#E74C3C';
    this.ctx.fillRect(gelX - 30, gelY, 20, 10);
    this.ctx.font = 'bold 14px Arial';
    this.ctx.fillStyle = '#FFFFFF';
    this.ctx.textAlign = 'center';
    this.ctx.fillText('−', gelX - 20, gelY + 8);

    // Positive (bottom)
    this.ctx.fillStyle = '#27AE60';
    this.ctx.fillRect(gelX - 30, gelY + gelH - 10, 20, 10);
    this.ctx.fillStyle = '#FFFFFF';
    this.ctx.fillText('+', gelX - 20, gelY + gelH - 2);

    // Migration arrows
    for(let i = 0; i < 3; i++) {
        const arrowX = gelX + gelW + 15;
        const arrowY = gelY + gelH * (0.3 + i * 0.2);
        this.ctx.strokeStyle = '#E74C3C';
        this.ctx.fillStyle = '#E74C3C';
        this.drawArrow(arrowX, arrowY - 30, arrowX, arrowY + 30, '#E74C3C', '', 5);
    }

    // Labels
    this.ctx.font = '9px Arial';
    this.ctx.fillStyle = '#7F8C8D';
    this.ctx.textAlign = 'left';
    
    // Lane labels
    this.ctx.fillText('Ladder', gelX + gelW / 6 - 12, gelY - 5);
    this.ctx.fillText('S1', gelX + 2 * gelW / 6 - 5, gelY - 5);
    this.ctx.fillText('S2', gelX + 3 * gelW / 6 - 5, gelY - 5);
    this.ctx.fillText('S3', gelX + 4 * gelW / 6 - 5, gelY - 5);
    this.ctx.fillText('S4', gelX + 5 * gelW / 6 - 5, gelY - 5);

    // Size markers (ladder)
    const sizeMarkers = [100, 200, 300, 500, 800];
    sizeMarkers.forEach(size => {
        const migrationPercent = 0.8 - (size / 1000) * 0.6;
        const markerY = gelY + gelH * migrationPercent;
        
        this.ctx.fillStyle = '#2C3E50';
        this.ctx.textAlign = 'right';
        this.ctx.fillText(`${size} bp`, gelX - 5, markerY + 3);
    });

    // Explanation
    this.ctx.font = 'bold 9px Arial';
    this.ctx.fillStyle = '#E74C3C';
    this.ctx.textAlign = 'center';
    this.ctx.fillText('Smaller fragments migrate farther', width / 2, height * 0.92);
}

drawGuideRNADesignInset(width, height) {
    this.ctx.font = 'bold 13px Arial';
    this.ctx.fillStyle = '#2C3E50';
    this.ctx.textAlign = 'center';
    this.ctx.fillText('CRISPR Guide RNA Design', width / 2, 20);

    // Target DNA
    const dnaY = height * 0.25;
    const dnaW = width * 0.7;
    const dnaX = (width - dnaW) / 2;

    // DNA double helix (simplified)
    this.ctx.strokeStyle = '#3498DB';
    this.ctx.lineWidth = 4;
    this.ctx.beginPath();
    this.ctx.moveTo(dnaX, dnaY);
    this.ctx.lineTo(dnaX + dnaW, dnaY);
    this.ctx.stroke();

    this.ctx.strokeStyle = '#9B59B6';
    this.ctx.beginPath();
    this.ctx.moveTo(dnaX, dnaY + 20);
    this.ctx.lineTo(dnaX + dnaW, dnaY + 20);
    this.ctx.stroke();

    // Base pairs
    for(let i = 0; i < 20; i++) {
        const bx = dnaX + (i / 20) * dnaW;
        this.ctx.strokeStyle = '#95A5A6';
        this.ctx.lineWidth = 1;
        this.ctx.beginPath();
        this.ctx.moveTo(bx, dnaY);
        this.ctx.lineTo(bx, dnaY + 20);
        this.ctx.stroke();
    }

    // Target sequence highlight
    const targetStart = dnaX + dnaW * 0.3;
    const targetEnd = dnaX + dnaW * 0.6;
    this.ctx.fillStyle = 'rgba(231, 76, 60, 0.2)';
    this.ctx.fillRect(targetStart, dnaY - 5, targetEnd - targetStart, 30);
    this.ctx.strokeStyle = '#E74C3C';
    this.ctx.lineWidth = 2;
    this.ctx.strokeRect(targetStart, dnaY - 5, targetEnd - targetStart, 30);

    // PAM sequence
    const pamX = targetEnd + 5;
    this.ctx.fillStyle = '#F39C12';
    this.ctx.font = 'bold 10px Arial';
    this.ctx.textAlign = 'left';
    this.ctx.fillText('NGG', pamX, dnaY + 10);
    this.ctx.font = '8px Arial';
    this.ctx.fillText('(PAM)', pamX, dnaY + 20);

    // Guide RNA
    const grnaY = height * 0.45;
    
    // Scaffold
    this.ctx.strokeStyle = '#27AE60';
    this.ctx.lineWidth = 3;
    this.ctx.beginPath();
    this.ctx.moveTo(width * 0.2, grnaY);
    this.ctx.lineTo(width * 0.4, grnaY);
    this.ctx.quadraticCurveTo(width * 0.45, grnaY - 20, width * 0.5, grnaY);
    this.ctx.quadraticCurveTo(width * 0.55, grnaY + 20, width * 0.6, grnaY);
    this.ctx.stroke();

    this.ctx.fillStyle = '#27AE60';
    this.ctx.font = '9px Arial';
    this.ctx.textAlign = 'center';
    this.ctx.fillText('Scaffold RNA', width * 0.5, grnaY + 35);

    // Spacer sequence (complementary to target)
    this.ctx.strokeStyle = '#E74C3C';
    this.ctx.lineWidth = 3;
    this.ctx.beginPath();
    this.ctx.moveTo(width * 0.2, grnaY);
    this.ctx.lineTo(width * 0.35, grnaY);
    this.ctx.stroke();

    this.ctx.fillStyle = '#E74C3C';
    this.ctx.fillText('Spacer (20 nt)', width * 0.275, grnaY - 8);
    this.ctx.font = '8px Arial';
    this.ctx.fillText('(complementary to target)', width * 0.275, grnaY - 16);

    // Cas9 protein
    const cas9X = width * 0.7;
    const cas9Y = grnaY;
    
    this.ctx.fillStyle = 'rgba(155, 89, 182, 0.3)';
    this.ctx.strokeStyle = '#9B59B6';
    this.ctx.lineWidth = 2;
    this.ctx.beginPath();
    this.ctx.ellipse(cas9X, cas9Y, 40, 30, 0, 0, Math.PI * 2);
    this.ctx.fill();
    this.ctx.stroke();
    
    this.ctx.fillStyle = '#8E44AD';
    this.ctx.font = 'bold 11px Arial';
    this.ctx.textAlign = 'center';
    this.ctx.fillText('Cas9', cas9X, cas9Y + 4);

    // Complex binding to DNA
    const complexY = height * 0.65;
    
    // Show binding
    this.ctx.strokeStyle = '#2C3E50';
    this.ctx.setLineDash([3, 3]);
    this.ctx.lineWidth = 2;
    this.ctx.beginPath();
    this.ctx.moveTo(width * 0.5, grnaY + 25);
    this.ctx.lineTo(width * 0.5, complexY - 10);
    this.ctx.stroke();
    this.ctx.setLineDash([]);

    // RNA-DNA hybridization
    const hybridX = width * 0.35;
    this.ctx.strokeStyle = '#E74C3C';
    this.ctx.lineWidth = 2;
    this.ctx.beginPath();
    this.ctx.moveTo(hybridX, complexY);
    this.ctx.lineTo(hybridX + width * 0.2, complexY);
    this.ctx.stroke();

    this.ctx.strokeStyle = '#3498DB';
    this.ctx.beginPath();
    this.ctx.moveTo(hybridX, complexY + 8);
    this.ctx.lineTo(hybridX + width * 0.2, complexY + 8);
    this.ctx.stroke();

    // Hydrogen bonds
    for(let i = 0; i < 10; i++) {
        const hx = hybridX + (i / 10) * width * 0.2;
        this.ctx.strokeStyle = '#95A5A6';
        this.ctx.lineWidth = 1;
        this.ctx.setLineDash([2, 2]);
        this.ctx.beginPath();
        this.ctx.moveTo(hx, complexY);
        this.ctx.lineTo(hx, complexY + 8);
        this.ctx.stroke();
        this.ctx.setLineDash([]);
    }

    // Cut site
    const cutX = width * 0.45;
    this.ctx.strokeStyle = '#E74C3C';
    this.ctx.fillStyle = '#E74C3C';
    this.ctx.lineWidth = 3;
    this.ctx.beginPath();
    this.ctx.moveTo(cutX - 5, complexY - 10);
    this.ctx.lineTo(cutX + 5, complexY + 18);
    this.ctx.stroke();
    
    this.ctx.font = 'bold 10px Arial';
    this.ctx.fillText('✂', cutX, complexY + 4);
    
    this.ctx.font = '9px Arial';
    this.ctx.fillText('Cut site', cutX + 15, complexY + 4);

    // Design rules
    this.ctx.font = '9px Arial';
    this.ctx.fillStyle = '#7F8C8D';
    this.ctx.textAlign = 'left';
    this.ctx.fillText('Key requirements:', width * 0.05, height * 0.88);
    this.ctx.fillText('• 20 nt spacer complementary to target', width * 0.05, height * 0.93);
    this.ctx.fillText('• PAM sequence (NGG) must follow target', width * 0.5, height * 0.93);
}

drawPlaceholderInset(width, height, insetType) {
    this.ctx.fillStyle = '#ECF0F1';
    this.ctx.fillRect(width * 0.1, height * 0.2, width * 0.8, height * 0.6);
    this.ctx.strokeStyle = '#BDC3C7';
    this.ctx.lineWidth = 2;
    this.ctx.strokeRect(width * 0.1, height * 0.2, width * 0.8, height * 0.6);
    
    this.ctx.font = 'bold 14px Arial';
    this.ctx.fillStyle = '#7F8C8D';
    this.ctx.textAlign = 'center';
    this.ctx.fillText(`Inset: ${insetType}`, width / 2, height / 2 - 10);
    this.ctx.font = '12px Arial';
    this.ctx.fillText('(Implementation pending)', width / 2, height / 2 + 10);
}

// Export the renderer


const EndSection17 = "close"