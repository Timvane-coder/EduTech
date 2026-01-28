
// ============================================================================
// PHYSICS DIAGRAM RENDERER
// ============================================================================

class PhysicsDiagramRenderer {
    constructor(canvas) {
        this.canvas = canvas;
        this.ctx = canvas ? canvas.getContext('2d') : null;
    }

    renderDiagram(diagramKey, x, y, width, height, options = {}) {
        const diagram = PhysicsDiagramsRegistry.getDiagram(diagramKey);
        if (!diagram) {
            throw new Error(`Physics diagram '${diagramKey}' not found`);
        }

        const mergedOptions = { ...diagram.defaultOptions, ...options };
        
        this.ctx.save();
        this.ctx.translate(x, y);

        // Clear background
        this.ctx.fillStyle = mergedOptions.backgroundColor;
        this.ctx.fillRect(0, 0, width, height);

        // Title
        this.drawTitle(mergedOptions.title, width / 2, 30);

        // Route to specific renderer based on type
        const centerX = width / 2;
        const centerY = height / 2 + 30;

        try {
            switch (diagram.type) {
                // Mechanics
                case 'free_body_diagram':
                    this.renderFreeBodyDiagram(diagram, centerX, centerY, Math.min(width, height) * 0.4, mergedOptions);
                    break;
                case 'vector_diagram':
                    this.renderVectorDiagram(diagram, centerX, centerY, Math.min(width, height) * 0.6, mergedOptions);
                    break;
                case 'motion_graphs':
                    this.renderMotionGraphs(diagram, centerX, centerY, width * 0.85, height * 0.7, mergedOptions);
                    break;
                case 'projectile_motion':
                    this.renderProjectileMotion(diagram, centerX, centerY, width * 0.85, height * 0.7, mergedOptions);
                    break;
                case 'inclined_plane':
                    this.renderInclinedPlane(diagram, centerX, centerY, width * 0.7, height * 0.6, mergedOptions);
                    break;
                case 'momentum_collision':
                    this.renderMomentumCollision(diagram, centerX, centerY, width * 0.85, height * 0.6, mergedOptions);
                    break;
                case 'circular_motion':
                    this.renderCircularMotion(diagram, centerX, centerY, Math.min(width, height) * 0.5, mergedOptions);
                    break;
                case 'work_energy_chart':
                    this.renderWorkEnergyChart(diagram, centerX, centerY, width * 0.8, height * 0.7, mergedOptions);
                    break;
                case 'spring_harmonic':
                    this.renderSpringHarmonic(diagram, centerX, centerY, width * 0.7, height * 0.7, mergedOptions);
                    break;
                case 'torque_lever':
                    this.renderTorqueLever(diagram, centerX, centerY, width * 0.85, height * 0.6, mergedOptions);
                    break;

                // Waves
                case 'wave_types':
                    this.renderWaveTypes(diagram, centerX, centerY, width * 0.85, height * 0.7, mergedOptions);
                    break;
                case 'wavefront':
                    this.renderWavefront(diagram, centerX, centerY, Math.min(width, height) * 0.6, mergedOptions);
                    break;
                case 'reflection_refraction':
                    this.renderReflectionRefraction(diagram, centerX, centerY, width * 0.7, height * 0.7, mergedOptions);
                    break;
                case 'wave_interference':
                    this.renderWaveInterference(diagram, centerX, centerY, width * 0.8, height * 0.7, mergedOptions);
                    break;
                case 'standing_waves':
                    this.renderStandingWaves(diagram, centerX, centerY, width * 0.85, height * 0.6, mergedOptions);
                    break;
                case 'doppler_effect':
                    this.renderDopplerEffect(diagram, centerX, centerY, width * 0.85, height * 0.7, mergedOptions);
                    break;
                case 'sound_pressure':
                    this.renderSoundPressure(diagram, centerX, centerY, width * 0.85, height * 0.7, mergedOptions);
                    break;
                case 'diffraction':
                    this.renderDiffraction(diagram, centerX, centerY, width * 0.85, height * 0.7, mergedOptions);
                    break;

                // Thermodynamics
                case 'heating_curve_physics':
                    this.renderHeatingCurvePhysics(diagram, centerX, centerY, width * 0.85, height * 0.7, mergedOptions);
                    break;
                case 'phase_diagram_physics':
                    this.renderPhaseDiagramPhysics(diagram, centerX, centerY, width * 0.85, height * 0.7, mergedOptions);
                    break;
                case 'pv_diagram':
                    this.renderPVDiagram(diagram, centerX, centerY, width * 0.8, height * 0.7, mergedOptions);
                    break;
                case 'carnot_cycle':
                    this.renderCarnotCycle(diagram, centerX, centerY, width * 0.85, height * 0.8, mergedOptions);
                    break;
                case 'heat_transfer':
                    this.renderHeatTransfer(diagram, 50, centerY, width * 0.9, height * 0.7, mergedOptions);
                    break;
                case 'kinetic_theory':
                    this.renderKineticTheory(diagram, centerX, centerY, Math.min(width, height) * 0.6, mergedOptions);
                    break;

                // Electricity & Magnetism
                case 'electric_field':
                    this.renderElectricField(diagram, centerX, centerY, width * 0.8, height * 0.7, mergedOptions);
                    break;
                case 'circuit_diagram':
                    this.renderCircuitDiagram(diagram, centerX, centerY, width * 0.8, height * 0.7, mergedOptions);
                    break;
                case 'series_parallel':
                    this.renderSeriesParallel(diagram, centerX, centerY, width * 0.9, height * 0.8, mergedOptions);
                    break;
                case 'potential_distance':
                    this.renderPotentialDistance(diagram, centerX, centerY, width * 0.85, height * 0.7, mergedOptions);
                    break;
                case 'magnetic_field':
                    this.renderMagneticField(diagram, centerX, centerY, width * 0.8, height * 0.7, mergedOptions);
                    break;
                case 'em_induction':
                    this.renderEMInduction(diagram, centerX, centerY, width * 0.8, height * 0.7, mergedOptions);
                    break;
                case 'transformer':
                    this.renderTransformer(diagram, centerX, centerY, width * 0.7, height * 0.7, mergedOptions);
                    break;
                case 'capacitor_curve':
                    this.renderCapacitorCurve(diagram, centerX, centerY, width * 0.85, height * 0.7, mergedOptions);
                    break;
                case 'lorentz_force':
                    this.renderLorentzForce(diagram, centerX, centerY, width * 0.7, height * 0.7, mergedOptions);
                    break;

                // Optics
                case 'mirror_ray_diagram':
                    this.renderMirrorRayDiagram(diagram, centerX, centerY, width * 0.85, height * 0.7, mergedOptions);
                    break;
                case 'lens_ray_diagram':
                    this.renderLensRayDiagram(diagram, centerX, centerY, width * 0.9, height * 0.7, mergedOptions);
                    break;
                case 'snells_law':
                    this.renderSnellsLaw(diagram, centerX, centerY, width * 0.7, height * 0.7, mergedOptions);
                    break;
                case 'total_internal_reflection':
                    this.renderTotalInternalReflection(diagram, centerX, centerY, width * 0.8, height * 0.7, mergedOptions);
                    break;
                case 'prism_dispersion':
                    this.renderPrismDispersion(diagram, centerX, centerY, width * 0.8, height * 0.7, mergedOptions);
                    break;
                case 'optical_fiber':
                    this.renderOpticalFiber(diagram, centerX, centerY, width * 0.85, height * 0.5, mergedOptions);
                    break;
                case 'optical_interference':
                    this.renderOpticalInterference(diagram, centerX, centerY, width * 0.85, height * 0.7, mergedOptions);
                    break;
                case 'polarization':
                    this.renderPolarization(diagram, centerX, centerY, width * 0.85, height * 0.6, mergedOptions);
                    break;

                // Modern Physics
                case 'photoelectric_effect':
                    this.renderPhotoelectricEffect(diagram, centerX, centerY, width * 0.8, height * 0.7, mergedOptions);
                    break;
                case 'emission_spectra':
                    this.renderEmissionSpectra(diagram, centerX, centerY, width * 0.85, height * 0.75, mergedOptions);
                    break;
                case 'blackbody_radiation':
                    this.renderBlackbodyRadiation(diagram, centerX, centerY, width * 0.85, height * 0.7, mergedOptions);
                    break;
                case 'quantum_tunneling':
                    this.renderQuantumTunneling(diagram, centerX, centerY, width * 0.85, height * 0.7, mergedOptions);
                    break;
                case 'electron_probability':
                    this.renderElectronProbability(diagram, centerX, centerY, Math.min(width, height) * 0.6, mergedOptions);
                    break;
                case 'wave_particle_duality':
                    this.renderWaveParticleDuality(diagram, centerX, centerY, width * 0.9, height * 0.7, mergedOptions);
                    break;
                case 'de_broglie':
                    this.renderDeBroglie(diagram, centerX, centerY, width * 0.85, height * 0.7, mergedOptions);
                    break;

                // Relativity
                case 'spacetime_diagram':
                    this.renderSpacetimeDiagram(diagram, centerX, centerY, width * 0.7, height * 0.7, mergedOptions);
                    break;
                case 'time_dilation':
                    this.renderTimeDilation(diagram, centerX, centerY, width * 0.85, height * 0.7, mergedOptions);
                    break;
                case 'length_contraction':
                    this.renderLengthContraction(diagram, centerX, centerY, width * 0.85, height * 0.6, mergedOptions);
                    break;
                case 'curved_spacetime':
                    this.renderCurvedSpacetime(diagram, centerX, centerY, width * 0.7, height * 0.7, mergedOptions);
                    break;
                case 'twin_paradox':
                    this.renderTwinParadox(diagram, centerX, centerY, width * 0.85, height * 0.8, mergedOptions);
                    break;
                case 'velocity_addition':
                    this.renderVelocityAddition(diagram, centerX, centerY, width * 0.85, height * 0.7, mergedOptions);
                    break;

                // Nuclear Physics
                case 'nuclear_structure_physics':
                    this.renderNuclearStructurePhysics(diagram, centerX, centerY, Math.min(width, height) * 0.5, mergedOptions);
                    break;
                case 'nuclear_decay_physics':
                    this.renderNuclearDecayPhysics(diagram, centerX, centerY, width * 0.85, height * 0.7, mergedOptions);
                    break;
                case 'half_life_graph':
                    this.renderHalfLifeGraph(diagram, centerX, centerY, width * 0.85, height * 0.7, mergedOptions);
                    break;
                case 'binding_energy_curve':
                    this.renderBindingEnergyCurve(diagram, centerX, centerY, width * 0.85, height * 0.7, mergedOptions);
                    break;
                case 'fission_diagram':
                    this.renderFissionDiagram(diagram, centerX, centerY, width * 0.9, height * 0.7, mergedOptions);
                    break;
                case 'fusion_diagram':
                    this.renderFusionDiagram(diagram, centerX, centerY, width * 0.9, height * 0.7, mergedOptions);
                    break;
                case 'chain_reaction_diagram':
                    this.renderChainReactionDiagram(diagram, centerX, centerY, width * 0.9, height * 0.8, mergedOptions);
                    break;
                case 'reactor_diagram':
                    this.renderReactorDiagram(diagram, centerX, centerY, width * 0.8, height * 0.75, mergedOptions);
                    break;
                case 'mass_defect':
                    this.renderMassDefect(diagram, centerX, centerY, width * 0.8, height * 0.7, mergedOptions);
                    break;
                case 'radiation_penetration':
                    this.renderRadiationPenetration(diagram, centerX, centerY, width * 0.9, height * 0.7, mergedOptions);
                    break;

                // Particle Physics
                case 'standard_model':
                    this.renderStandardModel(diagram, centerX, centerY, width * 0.9, height * 0.85, mergedOptions);
                    break;
                case 'feynman_diagram':
                    this.renderFeynmanDiagram(diagram, centerX, centerY, width * 0.7, height * 0.7, mergedOptions);
                    break;
                case 'quark_structure':
                    this.renderQuarkStructure(diagram, centerX, centerY, Math.min(width, height) * 0.5, mergedOptions);
                    break;
                case 'accelerator':
                    this.renderAccelerator(diagram, centerX, centerY, Math.min(width, height) * 0.7, mergedOptions);
                    break;
                case 'collision_tracks':
                    this.renderCollisionTracks(diagram, centerX, centerY, Math.min(width, height) * 0.7, mergedOptions);
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

    // ========== MECHANICS RENDERERS ==========

    renderFreeBodyDiagram(diagram, x, y, size, options) {
        // Draw object (box)
        const boxSize = size * 0.3;
        this.ctx.fillStyle = '#95A5A6';
        this.ctx.fillRect(x - boxSize/2, y - boxSize/2, boxSize, boxSize);
        this.ctx.strokeStyle = '#34495E';
        this.ctx.lineWidth = 2;
        this.ctx.strokeRect(x - boxSize/2, y - boxSize/2, boxSize, boxSize);

        // Draw center point
        this.ctx.fillStyle = '#E74C3C';
        this.ctx.beginPath();
        this.ctx.arc(x, y, 5, 0, Math.PI * 2);
        this.ctx.fill();

        // Draw force vectors
        const scale = size * 0.01; // Scale for force magnitudes
        diagram.forces.forEach(force => {
            const angleRad = (force.angle * Math.PI) / 180;
            const length = force.magnitude * scale;
            const endX = x + length * Math.cos(angleRad);
            const endY = y - length * Math.sin(angleRad); // Negative for canvas y-axis

            this.drawArrowVector(x, y, endX, endY, force.color, 3);

            if (options.showLabels) {
                const labelX = endX + 20 * Math.cos(angleRad);
                const labelY = endY - 20 * Math.sin(angleRad);
                this.ctx.fillStyle = force.color;
                this.ctx.font = 'bold 14px Arial';
                this.ctx.textAlign = 'center';
                this.ctx.fillText(force.name, labelX, labelY);

                if (options.showMagnitudes) {
                    this.ctx.font = '12px Arial';
                    this.ctx.fillText(`${force.magnitude}N`, labelX, labelY + 15);
                }
            }
        });

        // Draw coordinate axes
        this.drawCoordinateAxes(x + size * 0.6, y + size * 0.4, size * 0.15);
    }

    renderVectorDiagram(diagram, x, y, size, options) {
        const scale = size / 100;
        
        if (options.showGrid) {
            this.drawGrid(x - size/2, y - size/2, size, size, 20);
        }

        // Draw axes
        this.ctx.strokeStyle = '#2C3E50';
        this.ctx.lineWidth = 2;
        this.drawArrowVector(x - size/2, y, x + size/2, y, '#2C3E50', 2);
        this.drawArrowVector(x, y + size/2, x, y - size/2, '#2C3E50', 2);

        // Labels
        this.ctx.fillStyle = '#2C3E50';
        this.ctx.font = 'italic 14px Arial';
        this.ctx.fillText('x', x + size/2 + 15, y);
        this.ctx.fillText('y', x, y - size/2 - 10);

        let currentX = x;
        let currentY = y;

        // Draw vectors tip-to-tail
        diagram.vectors.forEach((vec, index) => {
            const endX = currentX + vec.x * scale;
            const endY = currentY - vec.y * scale; // Negative for canvas

            this.drawArrowVector(currentX, currentY, endX, endY, vec.color, 3);

            // Label
            const midX = (currentX + endX) / 2;
            const midY = (currentY + endY) / 2;
            this.ctx.fillStyle = vec.color;
            this.ctx.font = 'bold 16px Arial';
            this.ctx.fillText(vec.label, midX + 15, midY - 10);

            if (options.showComponents) {
                // Show component projections
                this.ctx.setLineDash([5, 5]);
                this.ctx.strokeStyle = this.lightenColor(vec.color, 40);
                this.ctx.lineWidth = 1;
                
                // X component
                this.ctx.beginPath();
                this.ctx.moveTo(currentX, currentY);
                this.ctx.lineTo(endX, currentY);
                this.ctx.stroke();
                
                // Y component
                this.ctx.beginPath();
                this.ctx.moveTo(endX, currentY);
                this.ctx.lineTo(endX, endY);
                this.ctx.stroke();
                
                this.ctx.setLineDash([]);
            }

            currentX = endX;
            currentY = endY;
        });

        // Draw resultant
        if (options.showResultant && diagram.showResultant) {
            this.drawArrowVector(x, y, currentX, currentY, '#27AE60', 4);
            
            const midX = (x + currentX) / 2;
            const midY = (y + currentY) / 2;
            this.ctx.fillStyle = '#27AE60';
            this.ctx.font = 'bold 16px Arial';
            this.ctx.fillText('R', midX + 15, midY - 10);
        }
    }

    renderMotionGraphs(diagram, x, y, width, height, options) {
        // Draw axes
        const margin = 50;
        const graphWidth = width - 2 * margin;
        const graphHeight = height - 2 * margin;

        this.ctx.strokeStyle = '#2C3E50';
        this.ctx.lineWidth = 2;

        // X-axis
        this.ctx.beginPath();
        this.ctx.moveTo(x - graphWidth/2, y + graphHeight/2);
        this.ctx.lineTo(x + graphWidth/2, y + graphHeight/2);
        this.ctx.stroke();

        // Y-axis
        this.ctx.beginPath();
        this.ctx.moveTo(x - graphWidth/2, y - graphHeight/2);
        this.ctx.lineTo(x - graphWidth/2, y + graphHeight/2);
        this.ctx.stroke();

        // Labels
        this.ctx.fillStyle = '#2C3E50';
        this.ctx.font = 'italic 14px Arial';
        this.ctx.textAlign = 'center';
        this.ctx.fillText('Time (s)', x, y + graphHeight/2 + 35);
        this.ctx.save();
        this.ctx.translate(x - graphWidth/2 - 35, y);
        this.ctx.rotate(-Math.PI/2);
        this.ctx.fillText('Velocity (m/s)', 0, 0);
        this.ctx.restore();

        if (options.showGrid) {
            this.drawGridLines(x - graphWidth/2, y - graphHeight/2, graphWidth, graphHeight, 10, 10);
        }

        // Plot data
        const segments = diagram.segments;
        const maxTime = Math.max(...segments.map(s => s.time));
        const maxValue = Math.max(...segments.map(s => Math.abs(s.value)));

        this.ctx.strokeStyle = '#E74C3C';
        this.ctx.lineWidth = 3;
        this.ctx.beginPath();

        segments.forEach((seg, index) => {
            const plotX = x - graphWidth/2 + (seg.time / maxTime) * graphWidth;
            const plotY = y + graphHeight/2 - (seg.value / (maxValue * 1.2)) * graphHeight;

            if (index === 0) {
                this.ctx.moveTo(plotX, plotY);
            } else {
                this.ctx.lineTo(plotX, plotY);
            }

            // Draw point
            this.ctx.fillStyle = '#C0392B';
            this.ctx.beginPath();
            this.ctx.arc(plotX, plotY, 4, 0, Math.PI * 2);
            this.ctx.fill();
        });

        this.ctx.stroke();

        // Show area under curve if requested
        if (options.showArea && diagram.graphType === 'velocity-time') {
            this.ctx.fillStyle = 'rgba(231, 76, 60, 0.2)';
            this.ctx.beginPath();
            this.ctx.moveTo(x - graphWidth/2, y + graphHeight/2);
            
            segments.forEach(seg => {
                const plotX = x - graphWidth/2 + (seg.time / maxTime) * graphWidth;
                const plotY = y + graphHeight/2 - (seg.value / (maxValue * 1.2)) * graphHeight;
                this.ctx.lineTo(plotX, plotY);
            });
            
            this.ctx.lineTo(x - graphWidth/2 + graphWidth, y + graphHeight/2);
            this.ctx.closePath();
            this.ctx.fill();

            // Label
            this.ctx.fillStyle = '#E74C3C';
            this.ctx.font = '12px Arial';
            this.ctx.fillText('Area = displacement', x, y + graphHeight/2 - 20);
        }
    }

    renderProjectileMotion(diagram, x, y, width, height, options) {
        const v0 = diagram.initialVelocity;
        const angle = (diagram.launchAngle * Math.PI) / 180;
        const g = 9.8;
        
        const v0x = v0 * Math.cos(angle);
        const v0y = v0 * Math.sin(angle);
        
        const timeOfFlight = (2 * v0y) / g;
        const range = v0x * timeOfFlight;
        const maxHeight = (v0y * v0y) / (2 * g);

        const scale = Math.min(width / (range * 1.2), height / (maxHeight * 2.5));

        // Ground line
        const groundY = y + height/2 - 50;
        this.ctx.strokeStyle = '#34495E';
        this.ctx.lineWidth = 2;
        this.ctx.beginPath();
        this.ctx.moveTo(x - width/2, groundY);
        this.ctx.lineTo(x + width/2, groundY);
        this.ctx.stroke();

        // Draw trajectory
        if (options.showTrajectory) {
            this.ctx.strokeStyle = '#3498DB';
            this.ctx.lineWidth = 3;
            this.ctx.beginPath();

            const steps = 50;
            for (let i = 0; i <= steps; i++) {
                const t = (i / steps) * timeOfFlight;
                const px = v0x * t;
                const py = v0y * t - 0.5 * g * t * t;

                const plotX = x - width/2 + 50 + px * scale;
                const plotY = groundY - py * scale;

                if (i === 0) {
                    this.ctx.moveTo(plotX, plotY);
                } else {
                    this.ctx.lineTo(plotX, plotY);
                }
            }
            this.ctx.stroke();
        }

        // Draw velocity vectors at key points
        if (options.showVelocityVectors) {
            const times = [0, timeOfFlight / 4, timeOfFlight / 2, 3 * timeOfFlight / 4];
            times.forEach(t => {
                const px = v0x * t;
                const py = v0y * t - 0.5 * g * t * t;
                const vx = v0x;
                const vy = v0y - g * t;

                const plotX = x - width/2 + 50 + px * scale;
                const plotY = groundY - py * scale;

                const vecScale = 3;
                this.drawArrowVector(
                    plotX, plotY,
                    plotX + vx * vecScale,
                    plotY - vy * vecScale,
                    '#E74C3C', 2
                );

                if (options.showComponents) {
                    // Horizontal component
                    this.drawArrowVector(
                        plotX, plotY,
                        plotX + vx * vecScale,
                        plotY,
                        '#27AE60', 1.5
                    );
                    
                    // Vertical component
                    this.drawArrowVector(
                        plotX, plotY,
                        plotX,
                        plotY - vy * vecScale,
                        '#9B59B6', 1.5
                    );
                }
            });
        }

        // Show range
        if (options.showRange) {
            const rangeX = x - width/2 + 50 + range * scale;
            
            this.ctx.setLineDash([5, 5]);
            this.ctx.strokeStyle = '#95A5A6';
            this.ctx.beginPath();
            this.ctx.moveTo(rangeX, groundY);
            this.ctx.lineTo(rangeX, groundY + 30);
            this.ctx.stroke();
            this.ctx.setLineDash([]);

            this.ctx.fillStyle = '#2C3E50';
            this.ctx.font = '12px Arial';
            this.ctx.textAlign = 'center';
            this.ctx.fillText(`Range: ${range.toFixed(1)}m`, x, groundY + 45);
        }
    }

    renderInclinedPlane(diagram, x, y, width, height, options) {
        const angle = (diagram.angle * Math.PI) / 180;
        const planeLength = width * 0.6;
        const planeHeight = planeLength * Math.sin(angle);
        
        // Draw incline
        this.ctx.strokeStyle = '#95A5A6';
        this.ctx.fillStyle = '#ECF0F1';
        this.ctx.lineWidth = 3;
        
        this.ctx.beginPath();
        this.ctx.moveTo(x - planeLength/2, y + height/3);
        this.ctx.lineTo(x + planeLength/2, y + height/3);
        this.ctx.lineTo(x + planeLength/2, y + height/3 - planeHeight);
        this.ctx.closePath();
        this.ctx.fill();
        this.ctx.stroke();

        // Draw object on incline
        const boxSize = 40;
        const boxCenterX = x;
        const boxCenterY = y + height/3 - (planeLength/2) * Math.sin(angle) - boxSize/2;

        this.ctx.save();
        this.ctx.translate(boxCenterX, boxCenterY);
        this.ctx.rotate(-angle);
        
        this.ctx.fillStyle = '#3498DB';
        this.ctx.fillRect(-boxSize/2, -boxSize/2, boxSize, boxSize);
        this.ctx.strokeStyle = '#2980B9';
        this.ctx.lineWidth = 2;
        this.ctx.strokeRect(-boxSize/2, -boxSize/2, boxSize, boxSize);
        
        this.ctx.restore();

        if (options.showForceComponents) {
            const mg = diagram.mass * 9.8;
            const scale = 2;

            // Weight (downward)
            this.drawArrowVector(
                boxCenterX, boxCenterY,
                boxCenterX, boxCenterY + mg * scale,
                '#E74C3C', 3
            );
            this.ctx.fillStyle = '#E74C3C';
            this.ctx.font = 'bold 12px Arial';
            this.ctx.fillText('mg', boxCenterX + 15, boxCenterY + mg * scale);

            // Component parallel to incline
            const mgSin = mg * Math.sin(angle);
            this.drawArrowVector(
                boxCenterX, boxCenterY,
                boxCenterX + mgSin * scale * Math.cos(angle),
                boxCenterY + mgSin * scale * Math.sin(angle),
                '#9B59B6', 2
            );

            // Component perpendicular to incline
            const mgCos = mg * Math.cos(angle);
            this.drawArrowVector(
                boxCenterX, boxCenterY,
                boxCenterX - mgCos * scale * Math.sin(angle),
                boxCenterY + mgCos * scale * Math.cos(angle),
                '#27AE60', 2
            );

            // Normal force
            this.drawArrowVector(
                boxCenterX, boxCenterY,
                boxCenterX + mgCos * scale * Math.sin(angle),
                boxCenterY - mgCos * scale * Math.cos(angle),
                '#F39C12', 2
            );

            if (options.showFriction && diagram.friction) {
                // Friction force
                const friction = 0.3 * mgCos; // Assume μ = 0.3
                this.drawArrowVector(
                    boxCenterX, boxCenterY,
                    boxCenterX - friction * scale * Math.cos(angle),
                    boxCenterY - friction * scale * Math.sin(angle),
                    '#E67E22', 2
                );
            }
        }

        // Show angle
        if (options.showAngles) {
            const arcRadius = 50;
            this.ctx.strokeStyle = '#34495E';
            this.ctx.lineWidth = 1.5;
            this.ctx.beginPath();
            this.ctx.arc(x + planeLength/2, y + height/3, arcRadius, Math.PI, Math.PI + angle, false);
            this.ctx.stroke();

            this.ctx.fillStyle = '#34495E';
            this.ctx.font = '14px Arial';
            this.ctx.fillText(`${diagram.angle}°`, x + planeLength/2 - 40, y + height/3 - 15);
        }
    }

    renderCircularMotion(diagram, x, y, size, options) {
        const radius = size;
        
        // Draw circular path
        this.ctx.strokeStyle = '#BDC3C7';
        this.ctx.lineWidth = 2;
        this.ctx.setLineDash([10, 5]);
        this.ctx.beginPath();
        this.ctx.arc(x, y, radius, 0, Math.PI * 2);
        this.ctx.stroke();
        this.ctx.setLineDash([]);

        // Center point
        this.ctx.fillStyle = '#34495E';
        this.ctx.beginPath();
        this.ctx.arc(x, y, 5, 0, Math.PI * 2);
        this.ctx.fill();

        // Draw object at top of circle
        const objX = x;
        const objY = y - radius;
        
        this.ctx.fillStyle = '#3498DB';
        this.ctx.beginPath();
        this.ctx.arc(objX, objY, 15, 0, Math.PI * 2);
        this.ctx.fill();
        this.ctx.strokeStyle = '#2980B9';
        this.ctx.lineWidth = 2;
        this.ctx.stroke();

        // Velocity vector (tangent)
        if (options.showVelocity) {
            const v = diagram.velocity;
            const scale = 3;
            this.drawArrowVector(objX, objY, objX + v * scale, objY, '#27AE60', 3);
            
            this.ctx.fillStyle = '#27AE60';
            this.ctx.font = 'bold 14px Arial';
            this.ctx.fillText('v', objX + v * scale + 15, objY);
        }

        // Centripetal acceleration (toward center)
        if (options.showAcceleration) {
            const ac = (diagram.velocity * diagram.velocity) / radius;
            const scale = 0.5;
            this.drawArrowVector(objX, objY, x, y, '#E74C3C', 3);
            
            this.ctx.fillStyle = '#E74C3C';
            this.ctx.font = 'bold 14px Arial';
            this.ctx.fillText('ac', x + 15, y - radius/2);
        }

        // Centripetal force
        if (options.showCentripetalForce) {
            this.drawArrowVector(objX, objY, x, y + 20, '#9B59B6', 3);
            
            this.ctx.fillStyle = '#9B59B6';
            this.ctx.font = 'bold 14px Arial';
            this.ctx.fillText('Fc', x - 25, y - radius/2);
        }

        // Radius line
        this.ctx.strokeStyle = '#7F8C8D';
        this.ctx.lineWidth = 1;
        this.ctx.setLineDash([3, 3]);
        this.ctx.beginPath();
        this.ctx.moveTo(x, y);
        this.ctx.lineTo(objX, objY);
        this.ctx.stroke();
        this.ctx.setLineDash([]);

        this.ctx.fillStyle = '#7F8C8D';
        this.ctx.font = '12px Arial';
        this.ctx.fillText('r', x + radius/3, y - radius/2);
    }

    // ========== PLACEHOLDER AND UTILITY METHODS ==========

    renderPlaceholder(diagram, x, y, width, height) {
        // Border
        this.ctx.strokeStyle = '#CCCCCC';
        this.ctx.lineWidth = 2;
        this.ctx.setLineDash([10, 5]);
        this.ctx.strokeRect(x - width / 2, y - height / 2, width, height);
        this.ctx.setLineDash([]);

        // Background
        this.ctx.fillStyle = '#F5F5F5';
        this.ctx.fillRect(x - width / 2, y - height / 2, width, height);

        // Text
        this.ctx.fillStyle = '#999999';
        this.ctx.font = 'bold 16px Arial';
        this.ctx.textAlign = 'center';
        this.ctx.textBaseline = 'middle';
        this.ctx.fillText(`${diagram.name}`, x, y - 10);
        
        this.ctx.font = '13px Arial';
        this.ctx.fillText('(Renderer in development)', x, y + 15);
    }

    renderError(diagram, x, y, width, height, errorMsg) {
        // Error box
        this.ctx.fillStyle = '#FFEBEE';
        this.ctx.fillRect(x - width / 2, y - height / 2, width, height);
        
        this.ctx.strokeStyle = '#E74C3C';
        this.ctx.lineWidth = 2;
        this.ctx.strokeRect(x - width / 2, y - height / 2, width, height);

        // Error icon
        this.ctx.fillStyle = '#E74C3C';
        this.ctx.font = 'bold 40px Arial';
        this.ctx.textAlign = 'center';
        this.ctx.textBaseline = 'middle';
        this.ctx.fillText('⚠', x, y - 30);

        // Error message
        this.ctx.fillStyle = '#C0392B';
        this.ctx.font = 'bold 14px Arial';
        this.ctx.fillText('Rendering Error', x, y + 10);
        
        this.ctx.font = '12px Arial';
        this.ctx.fillStyle = '#555555';
        const maxWidth = width * 0.9;
        this.wrapText(errorMsg, x, y + 35, maxWidth, 16);
    }

    wrapText(text, x, y, maxWidth, lineHeight) {
        const words = text.split(' ');
        let line = '';
        let currentY = y;

        words.forEach((word, index) => {
            const testLine = line + word + ' ';
            const metrics = this.ctx.measureText(testLine);
            
            if (metrics.width > maxWidth && index > 0) {
                this.ctx.fillText(line, x, currentY);
                line = word + ' ';
                currentY += lineHeight;
            } else {
                line = testLine;
            }
        });
        
        this.ctx.fillText(line, x, currentY);
    }

    drawTitle(title, x, y) {
        this.ctx.fillStyle = '#2C3E50';
        this.ctx.font = 'bold 22px Arial';
        this.ctx.textAlign = 'center';
        this.ctx.textBaseline = 'top';
        this.ctx.fillText(title, x, y);
    }

    drawDiagramInfo(diagram, x, y, options) {
        // Info box background
        this.ctx.fillStyle = 'rgba(236, 240, 241, 0.95)';
        this.ctx.strokeStyle = '#BDC3C7';
        this.ctx.lineWidth = 2;
        this.ctx.beginPath();
        this.ctx.roundRect(x, y, 350, 90, 8);
        this.ctx.fill();
        this.ctx.stroke();

        // Info text
        this.ctx.fillStyle = '#2C3E50';
        this.ctx.font = 'bold 13px Arial';
        this.ctx.textAlign = 'left';

        const category = diagram.category || 'Physics';
        const type = diagram.type || 'diagram';
        
        this.ctx.fillText(`Category: ${category}`, x + 15, y + 20);
        this.ctx.fillText(`Type: ${type.replace(/_/g, ' ')}`, x + 15, y + 40);

        // Analogy hint
        const analogies = PhysicsDiagramsRegistry.getAnalogies(diagram.name);
        if (analogies.length > 0) {
            this.ctx.fillStyle = '#7F8C8D';
            this.ctx.font = 'italic 11px Arial';
            this.ctx.fillText(`💡 Analogy: ${analogies[0]}`, x + 15, y + 65);
        }
    }

    drawArrowVector(x1, y1, x2, y2, color, lineWidth = 2) {
        const headLength = 12;
        const angle = Math.atan2(y2 - y1, x2 - x1);

        // Draw line
        this.ctx.strokeStyle = color;
        this.ctx.lineWidth = lineWidth;
        this.ctx.beginPath();
        this.ctx.moveTo(x1, y1);
        this.ctx.lineTo(x2, y2);
        this.ctx.stroke();

        // Draw arrowhead
        this.ctx.fillStyle = color;
        this.ctx.beginPath();
        this.ctx.moveTo(x2, y2);
        this.ctx.lineTo(
            x2 - headLength * Math.cos(angle - Math.PI / 6),
            y2 - headLength * Math.sin(angle - Math.PI / 6)
        );
        this.ctx.lineTo(
            x2 - headLength * Math.cos(angle + Math.PI / 6),
            y2 - headLength * Math.sin(angle + Math.PI / 6)
        );
        this.ctx.closePath();
        this.ctx.fill();
    }

    drawCoordinateAxes(x, y, size) {
        this.ctx.strokeStyle = '#7F8C8D';
        this.ctx.lineWidth = 1.5;

        // X axis
        this.drawArrowVector(x, y, x + size, y, '#7F8C8D', 1.5);
        
        // Y axis
        this.drawArrowVector(x, y, x, y - size, '#7F8C8D', 1.5);

        // Labels
        this.ctx.fillStyle = '#7F8C8D';
        this.ctx.font = 'italic 12px Arial';
        this.ctx.textAlign = 'center';
        this.ctx.fillText('x', x + size + 12, y + 5);
        this.ctx.fillText('y', x - 5, y - size - 8);
    }

    drawGrid(x, y, width, height, gridSize) {
        this.ctx.strokeStyle = '#E8E8E8';
        this.ctx.lineWidth = 0.5;

        // Vertical lines
        for (let i = 0; i <= width / gridSize; i++) {
            this.ctx.beginPath();
            this.ctx.moveTo(x + i * gridSize, y);
            this.ctx.lineTo(x + i * gridSize, y + height);
            this.ctx.stroke();
        }

        // Horizontal lines
        for (let i = 0; i <= height / gridSize; i++) {
            this.ctx.beginPath();
            this.ctx.moveTo(x, y + i * gridSize);
            this.ctx.lineTo(x + width, y + i * gridSize);
            this.ctx.stroke();
        }
    }

    drawGridLines(x, y, width, height, numX, numY) {
        this.ctx.strokeStyle = '#E8E8E8';
        this.ctx.lineWidth = 0.5;

        const dx = width / numX;
        const dy = height / numY;

        // Vertical lines
        for (let i = 0; i <= numX; i++) {
            this.ctx.beginPath();
            this.ctx.moveTo(x + i * dx, y);
            this.ctx.lineTo(x + i * dx, y + height);
            this.ctx.stroke();
        }

        // Horizontal lines
        for (let i = 0; i <= numY; i++) {
            this.ctx.beginPath();
            this.ctx.moveTo(x, y + i * dy);
            this.ctx.lineTo(x + width, y + i * dy);
            this.ctx.stroke();
        }
    }

    lightenColor(color, percent) {
        const num = parseInt(color.replace('#', ''), 16);
        const amt = Math.round(2.55 * percent);
        const R = Math.min(255, (num >> 16) + amt);
        const G = Math.min(255, ((num >> 8) & 0x00FF) + amt);
        const B = Math.min(255, (num & 0x0000FF) + amt);
        return `#${(0x1000000 + (R << 16) + (G << 8) + B).toString(16).slice(1)}`;
    }

    darkenColor(color, percent) {
        const num = parseInt(color.replace('#', ''), 16);
        const amt = Math.round(2.55 * percent);
        const R = Math.max(0, (num >> 16) - amt);
        const G = Math.max(0, ((num >> 8) & 0x00FF) - amt);
        const B = Math.max(0, (num & 0x0000FF) - amt);
        return `#${(0x1000000 + (R << 16) + (G << 8) + B).toString(16).slice(1)}`;
    }

// ========== MECHANICS RENDERERS (CONTINUED) ==========

    renderMomentumCollision(diagram, x, y, width, height, options) {
        const boxSize = 60;
        const spacing = width * 0.15;
        
        // Title regions
        const beforeY = y - height/3;
        const afterY = y + height/3;

        if (options.showBefore) {
            this.ctx.fillStyle = '#2C3E50';
            this.ctx.font = 'bold 16px Arial';
            this.ctx.textAlign = 'center';
            this.ctx.fillText('Before Collision', x, beforeY - 80);

            diagram.objects.forEach((obj, index) => {
                const objX = x + (index - 0.5) * spacing;
                
                // Draw object
                this.ctx.fillStyle = obj.color;
                this.ctx.fillRect(objX - boxSize/2, beforeY - boxSize/2, boxSize, boxSize);
                this.ctx.strokeStyle = this.darkenColor(obj.color, 20);
                this.ctx.lineWidth = 3;
                this.ctx.strokeRect(objX - boxSize/2, beforeY - boxSize/2, boxSize, boxSize);

                // Mass label
                this.ctx.fillStyle = '#2C3E50';
                this.ctx.font = 'bold 14px Arial';
                this.ctx.textAlign = 'center';
                this.ctx.fillText(`${obj.mass}kg`, objX, beforeY);

                // Velocity vector
                const vScale = 8;
                const vLength = obj.velocity * vScale;
                this.drawArrowVector(
                    objX + (obj.velocity > 0 ? boxSize/2 : -boxSize/2),
                    beforeY,
                    objX + (obj.velocity > 0 ? boxSize/2 : -boxSize/2) + vLength,
                    beforeY,
                    '#E74C3C',
                    3
                );

                this.ctx.fillStyle = '#E74C3C';
                this.ctx.font = '12px Arial';
                this.ctx.fillText(
                    `v=${obj.velocity}m/s`,
                    objX + (obj.velocity > 0 ? boxSize/2 : -boxSize/2) + vLength/2,
                    beforeY - 20
                );
            });

            // Show total momentum
            if (options.showMomentum) {
                const totalP = diagram.objects.reduce((sum, obj) => sum + obj.mass * obj.velocity, 0);
                this.ctx.fillStyle = '#16A085';
                this.ctx.font = 'bold 13px Arial';
                this.ctx.fillText(`Total p = ${totalP.toFixed(1)} kg⋅m/s`, x, beforeY + 60);
            }
        }

        if (options.showAfter) {
            this.ctx.fillStyle = '#2C3E50';
            this.ctx.font = 'bold 16px Arial';
            this.ctx.textAlign = 'center';
            this.ctx.fillText('After Collision', x, afterY - 80);

            // Calculate after velocities based on collision type
            let v1f, v2f;
            const m1 = diagram.objects[0].mass;
            const m2 = diagram.objects[1].mass;
            const v1i = diagram.objects[0].velocity;
            const v2i = diagram.objects[1].velocity;

            if (diagram.collisionType === 'elastic') {
                // Elastic collision formulas
                v1f = ((m1 - m2) * v1i + 2 * m2 * v2i) / (m1 + m2);
                v2f = ((m2 - m1) * v2i + 2 * m1 * v1i) / (m1 + m2);
            } else if (diagram.collisionType === 'perfectly_inelastic') {
                // Stick together
                v1f = v2f = (m1 * v1i + m2 * v2i) / (m1 + m2);
            } else {
                // Default inelastic
                v1f = ((m1 - 0.5 * m2) * v1i + 1.5 * m2 * v2i) / (m1 + m2);
                v2f = ((m2 - 0.5 * m1) * v2i + 1.5 * m1 * v1i) / (m1 + m2);
            }

            const finalVelocities = [v1f, v2f];

            diagram.objects.forEach((obj, index) => {
                const objX = x + (index - 0.5) * spacing;
                
                // Draw object
                this.ctx.fillStyle = obj.color;
                this.ctx.fillRect(objX - boxSize/2, afterY - boxSize/2, boxSize, boxSize);
                this.ctx.strokeStyle = this.darkenColor(obj.color, 20);
                this.ctx.lineWidth = 3;
                this.ctx.strokeRect(objX - boxSize/2, afterY - boxSize/2, boxSize, boxSize);

                // Mass label
                this.ctx.fillStyle = '#2C3E50';
                this.ctx.font = 'bold 14px Arial';
                this.ctx.textAlign = 'center';
                this.ctx.fillText(`${obj.mass}kg`, objX, afterY);

                // Velocity vector
                const vf = finalVelocities[index];
                const vScale = 8;
                const vLength = vf * vScale;
                this.drawArrowVector(
                    objX + (vf > 0 ? boxSize/2 : -boxSize/2),
                    afterY,
                    objX + (vf > 0 ? boxSize/2 : -boxSize/2) + vLength,
                    afterY,
                    '#9B59B6',
                    3
                );

                this.ctx.fillStyle = '#9B59B6';
                this.ctx.font = '12px Arial';
                this.ctx.fillText(
                    `v=${vf.toFixed(1)}m/s`,
                    objX + (vf > 0 ? boxSize/2 : -boxSize/2) + vLength/2,
                    afterY - 20
                );
            });

            // Show total momentum and energy
            if (options.showMomentum) {
                const totalP = m1 * v1f + m2 * v2f;
                this.ctx.fillStyle = '#16A085';
                this.ctx.font = 'bold 13px Arial';
                this.ctx.fillText(`Total p = ${totalP.toFixed(1)} kg⋅m/s`, x, afterY + 60);
            }

            if (options.showEnergy) {
                const KEi = 0.5 * m1 * v1i * v1i + 0.5 * m2 * v2i * v2i;
                const KEf = 0.5 * m1 * v1f * v1f + 0.5 * m2 * v2f * v2f;
                this.ctx.fillStyle = '#D35400';
                this.ctx.font = 'bold 13px Arial';
                this.ctx.fillText(`KE = ${KEf.toFixed(1)}J (was ${KEi.toFixed(1)}J)`, x, afterY + 80);
            }
        }
    }

    renderWorkEnergyChart(diagram, x, y, width, height, options) {
        const barWidth = 80;
        const maxEnergy = Math.max(
            diagram.initialKE + diagram.initialPE,
            diagram.finalKE + diagram.finalPE + Math.abs(diagram.workDone)
        ) * 1.2;
        const scale = (height * 0.6) / maxEnergy;

        const positions = [
            { label: 'Initial KE', value: diagram.initialKE, color: '#E74C3C', x: x - width/3 },
            { label: 'Initial PE', value: diagram.initialPE, color: '#3498DB', x: x - width/6 },
            { label: 'Work Done', value: Math.abs(diagram.workDone), color: diagram.workDone < 0 ? '#E67E22' : '#2ECC71', x: x },
            { label: 'Final KE', value: diagram.finalKE, color: '#C0392B', x: x + width/6 },
            { label: 'Final PE', value: diagram.finalPE, color: '#2980B9', x: x + width/3 }
        ];

        // Draw bars
        positions.forEach(pos => {
            const barHeight = pos.value * scale;
            const barY = y + height/2 - barHeight;

            // Bar
            this.ctx.fillStyle = pos.color;
            this.ctx.fillRect(pos.x - barWidth/2, barY, barWidth, barHeight);
            this.ctx.strokeStyle = this.darkenColor(pos.color, 20);
            this.ctx.lineWidth = 2;
            this.ctx.strokeRect(pos.x - barWidth/2, barY, barWidth, barHeight);

            // Value label
            if (options.showValues) {
                this.ctx.fillStyle = '#FFFFFF';
                this.ctx.font = 'bold 14px Arial';
                this.ctx.textAlign = 'center';
                this.ctx.fillText(`${pos.value}J`, pos.x, barY + barHeight/2 + 5);
            }

            // Category label
            this.ctx.fillStyle = '#2C3E50';
            this.ctx.font = '12px Arial';
            this.ctx.textAlign = 'center';
            this.wrapText(pos.label, pos.x, y + height/2 + 20, barWidth, 14);
        });

        // Ground line
        this.ctx.strokeStyle = '#34495E';
        this.ctx.lineWidth = 2;
        this.ctx.beginPath();
        this.ctx.moveTo(x - width/2, y + height/2);
        this.ctx.lineTo(x + width/2, y + height/2);
        this.ctx.stroke();

        // Show total energy conservation
        if (options.showTotal) {
            const initialTotal = diagram.initialKE + diagram.initialPE;
            const finalTotal = diagram.finalKE + diagram.finalPE;
            
            this.ctx.fillStyle = '#16A085';
            this.ctx.font = 'bold 14px Arial';
            this.ctx.textAlign = 'center';
            this.ctx.fillText(
                `Initial Total: ${initialTotal}J → Final Total: ${finalTotal}J`,
                x,
                y - height/2 + 20
            );
        }
    }

    renderSpringHarmonic(diagram, x, y, width, height, options) {
        const springRestLength = 150;
        const amplitude = diagram.amplitude;
        const wallX = x - width/3;
        
        // Draw wall
        this.ctx.fillStyle = '#7F8C8D';
        this.ctx.fillRect(wallX - 10, y - 100, 10, 200);
        
        // Hatching for wall
        this.ctx.strokeStyle = '#34495E';
        this.ctx.lineWidth = 2;
        for (let i = -100; i < 100; i += 10) {
            this.ctx.beginPath();
            this.ctx.moveTo(wallX - 10, y + i);
            this.ctx.lineTo(wallX - 20, y + i + 10);
            this.ctx.stroke();
        }

        // Draw spring at equilibrium position
        const springEndX = wallX + springRestLength;
        this.drawSpring(wallX, y, springEndX, y, 20, 15);

        // Draw mass at equilibrium
        const massSize = 50;
        this.ctx.fillStyle = '#3498DB';
        this.ctx.fillRect(springEndX - 5, y - massSize/2, massSize, massSize);
        this.ctx.strokeStyle = '#2980B9';
        this.ctx.lineWidth = 2;
        this.ctx.strokeRect(springEndX - 5, y - massSize/2, massSize, massSize);

        this.ctx.fillStyle = '#FFFFFF';
        this.ctx.font = 'bold 14px Arial';
        this.ctx.textAlign = 'center';
        this.ctx.fillText(`m=${diagram.mass}kg`, springEndX + massSize/2 - 5, y + 5);

        // Show displacement positions
        if (options.showDisplacement) {
            // Maximum compression
            const compressX = springEndX - amplitude;
            this.ctx.setLineDash([5, 5]);
            this.ctx.strokeStyle = '#E74C3C';
            this.ctx.lineWidth = 1;
            this.ctx.beginPath();
            this.ctx.moveTo(compressX, y - 80);
            this.ctx.lineTo(compressX, y + 80);
            this.ctx.stroke();

            // Maximum extension
            const extendX = springEndX + amplitude;
            this.ctx.beginPath();
            this.ctx.moveTo(extendX, y - 80);
            this.ctx.lineTo(extendX, y + 80);
            this.ctx.stroke();
            this.ctx.setLineDash([]);

            // Labels
            this.ctx.fillStyle = '#E74C3C';
            this.ctx.font = '12px Arial';
            this.ctx.textAlign = 'center';
            this.ctx.fillText('-A', compressX, y - 90);
            this.ctx.fillText('+A', extendX, y - 90);
            this.ctx.fillText('x=0', springEndX, y - 90);
        }

        // Show force arrow
        if (options.showForce) {
            const forceScale = 1.5;
            const forceLength = diagram.springConstant * amplitude * 0.1 * forceScale;
            
            // Force at max displacement
            this.drawArrowVector(
                springEndX + amplitude,
                y + 80,
                springEndX + amplitude - forceLength,
                y + 80,
                '#9B59B6',
                3
            );

            this.ctx.fillStyle = '#9B59B6';
            this.ctx.font = 'bold 12px Arial';
            this.ctx.textAlign = 'center';
            this.ctx.fillText('F = -kx', springEndX + amplitude - forceLength/2, y + 100);
        }

        // Show energy
        if (options.showEnergy) {
            const KEmax = 0.5 * diagram.mass * Math.pow(amplitude * Math.sqrt(diagram.springConstant / diagram.mass), 2);
            const PEmax = 0.5 * diagram.springConstant * amplitude * amplitude;
            
            this.ctx.fillStyle = '#16A085';
            this.ctx.font = 'bold 12px Arial';
            this.ctx.textAlign = 'left';
            this.ctx.fillText(`KE(max) = ${KEmax.toFixed(2)}J`, x - width/2 + 20, y + height/2 - 40);
            this.ctx.fillText(`PE(max) = ${PEmax.toFixed(2)}J`, x - width/2 + 20, y + height/2 - 20);
            this.ctx.fillText(`Total E = ${PEmax.toFixed(2)}J`, x - width/2 + 20, y + height/2);
        }
    }

    drawSpring(x1, y1, x2, y2, coils, amplitude) {
        const length = x2 - x1;
        const segmentLength = length / (coils * 4);
        
        this.ctx.strokeStyle = '#34495E';
        this.ctx.lineWidth = 2.5;
        this.ctx.beginPath();
        this.ctx.moveTo(x1, y1);

        for (let i = 0; i <= coils * 4; i++) {
            const x = x1 + i * segmentLength;
            let y = y1;
            
            if (i % 4 === 1) y = y1 - amplitude;
            else if (i % 4 === 3) y = y1 + amplitude;
            
            this.ctx.lineTo(x, y);
        }

        this.ctx.stroke();
    }

    renderTorqueLever(diagram, x, y, width, height, options) {
        const leverLength = diagram.leverLength;
        const fulcrumPos = diagram.fulcrumPosition; // 0 to 1
        const leverY = y;

        // Draw lever
        this.ctx.strokeStyle = '#95A5A6';
        this.ctx.fillStyle = '#BDC3C7';
        this.ctx.lineWidth = 8;
        this.ctx.lineCap = 'round';
        this.ctx.beginPath();
        this.ctx.moveTo(x - leverLength/2, leverY);
        this.ctx.lineTo(x + leverLength/2, leverY);
        this.ctx.stroke();

        // Draw fulcrum
        const fulcrumX = x - leverLength/2 + fulcrumPos * leverLength;
        this.drawTriangle(fulcrumX, leverY + 25, 40, 40, '#34495E');

        // Force 1 (left side)
        const force1X = x - leverLength/2 + leverLength * 0.2;
        const force1Length = diagram.force1 * 2;
        
        if (options.showForces) {
            this.drawArrowVector(
                force1X, leverY - 40,
                force1X, leverY - 40 - force1Length,
                '#E74C3C',
                3
            );

            this.ctx.fillStyle = '#E74C3C';
            this.ctx.font = 'bold 14px Arial';
            this.ctx.textAlign = 'center';
            this.ctx.fillText(`F₁ = ${diagram.force1}N`, force1X, leverY - 50 - force1Length);
        }

        // Force 2 (right side)
        const force2X = x + leverLength/2 - leverLength * 0.2;
        const force2Length = diagram.force2 * 2;
        
        if (options.showForces) {
            this.drawArrowVector(
                force2X, leverY - 40,
                force2X, leverY - 40 - force2Length,
                '#3498DB',
                3
            );

            this.ctx.fillStyle = '#3498DB';
            this.ctx.font = 'bold 14px Arial';
            this.ctx.textAlign = 'center';
            this.ctx.fillText(`F₂ = ${diagram.force2}N`, force2X, leverY - 50 - force2Length);
        }

        // Show moment arms
        if (options.showMomentArms) {
            const r1 = Math.abs(force1X - fulcrumX);
            const r2 = Math.abs(force2X - fulcrumX);

            // Left moment arm
            this.ctx.strokeStyle = '#E67E22';
            this.ctx.lineWidth = 2;
            this.ctx.setLineDash([5, 5]);
            this.ctx.beginPath();
            this.ctx.moveTo(fulcrumX, leverY + 50);
            this.ctx.lineTo(force1X, leverY + 50);
            this.ctx.stroke();

            // Right moment arm
            this.ctx.beginPath();
            this.ctx.moveTo(fulcrumX, leverY + 50);
            this.ctx.lineTo(force2X, leverY + 50);
            this.ctx.stroke();
            this.ctx.setLineDash([]);

            // Labels
            this.ctx.fillStyle = '#E67E22';
            this.ctx.font = '12px Arial';
            this.ctx.textAlign = 'center';
            this.ctx.fillText(`r₁ = ${r1.toFixed(0)}cm`, (fulcrumX + force1X)/2, leverY + 70);
            this.ctx.fillText(`r₂ = ${r2.toFixed(0)}cm`, (fulcrumX + force2X)/2, leverY + 70);

            // Torques
            const torque1 = diagram.force1 * r1;
            const torque2 = diagram.force2 * r2;
            
            this.ctx.fillStyle = '#16A085';
            this.ctx.font = 'bold 13px Arial';
            this.ctx.textAlign = 'center';
            this.ctx.fillText(`τ₁ = ${torque1.toFixed(0)} N⋅cm (CCW)`, x, y - height/2 + 30);
            this.ctx.fillText(`τ₂ = ${torque2.toFixed(0)} N⋅cm (CW)`, x, y - height/2 + 50);
        }

        // Show rotation direction
        if (options.showRotation) {
            const torque1 = diagram.force1 * Math.abs(force1X - fulcrumX);
            const torque2 = diagram.force2 * Math.abs(force2X - fulcrumX);
            
            if (Math.abs(torque1 - torque2) > 1) {
                const rotDir = torque1 > torque2 ? 'CCW' : 'CW';
                this.drawCurvedArrow(fulcrumX, leverY - 60, 30, rotDir === 'CCW', '#9B59B6');
                
                this.ctx.fillStyle = '#9B59B6';
                this.ctx.font = 'bold 12px Arial';
                this.ctx.textAlign = 'center';
                this.ctx.fillText(`Rotates ${rotDir}`, fulcrumX, leverY - 100);
            } else {
                this.ctx.fillStyle = '#27AE60';
                this.ctx.font = 'bold 12px Arial';
                this.ctx.textAlign = 'center';
                this.ctx.fillText('Equilibrium ✓', fulcrumX, leverY - 90);
            }
        }
    }

    drawTriangle(x, y, width, height, color) {
        this.ctx.fillStyle = color;
        this.ctx.beginPath();
        this.ctx.moveTo(x, y - height/2);
        this.ctx.lineTo(x - width/2, y + height/2);
        this.ctx.lineTo(x + width/2, y + height/2);
        this.ctx.closePath();
        this.ctx.fill();

        this.ctx.strokeStyle = this.darkenColor(color, 20);
        this.ctx.lineWidth = 2;
        this.ctx.stroke();
    }

    drawCurvedArrow(x, y, radius, counterClockwise, color) {
        this.ctx.strokeStyle = color;
        this.ctx.fillStyle = color;
        this.ctx.lineWidth = 2;

        const startAngle = counterClockwise ? 0 : Math.PI;
        const endAngle = counterClockwise ? Math.PI * 1.5 : Math.PI * 2.5;

        this.ctx.beginPath();
        this.ctx.arc(x, y, radius, startAngle, endAngle, counterClockwise);
        this.ctx.stroke();

        // Arrowhead
        const arrowX = x + radius * Math.cos(endAngle);
        const arrowY = y + radius * Math.sin(endAngle);
        const arrowAngle = endAngle + (counterClockwise ? Math.PI/2 : -Math.PI/2);

        this.ctx.beginPath();
        this.ctx.moveTo(arrowX, arrowY);
        this.ctx.lineTo(
            arrowX + 10 * Math.cos(arrowAngle - 0.4),
            arrowY + 10 * Math.sin(arrowAngle - 0.4)
        );
        this.ctx.lineTo(
            arrowX + 10 * Math.cos(arrowAngle + 0.4),
            arrowY + 10 * Math.sin(arrowAngle + 0.4)
        );
        this.ctx.closePath();
        this.ctx.fill();
    }

    // ========== WAVES & SOUND RENDERERS ==========

    renderWaveTypes(diagram, x, y, width, height, options) {
        const waveWidth = width * 0.9;
        const waveHeight = height * 0.35;
        const wavelength = diagram.wavelength;
        const amplitude = diagram.amplitude;

        // Transverse Wave
        const transY = y - height/4;
        
        this.ctx.fillStyle = '#2C3E50';
        this.ctx.font = 'bold 16px Arial';
        this.ctx.textAlign = 'left';
        this.ctx.fillText('Transverse Wave', x - width/2, transY - waveHeight/2 - 10);

        // Draw transverse wave
        this.ctx.strokeStyle = '#E74C3C';
        this.ctx.lineWidth = 3;
        this.ctx.beginPath();

        const numCycles = waveWidth / wavelength;
        for (let i = 0; i <= 100; i++) {
            const px = x - waveWidth/2 + (i / 100) * waveWidth;
            const phase = (i / 100) * numCycles * 2 * Math.PI;
            const py = transY + amplitude * Math.sin(phase);

            if (i === 0) {
                this.ctx.moveTo(px, py);
            } else {
                this.ctx.lineTo(px, py);
            }
        }
        this.ctx.stroke();

        // Show particle motion (perpendicular)
        if (options.showParticles) {
            for (let i = 0; i < 5; i++) {
                const px = x - waveWidth/2 + (i / 4) * waveWidth;
                const phase = (i / 4) * numCycles * 2 * Math.PI;
                const py = transY + amplitude * Math.sin(phase);

                this.ctx.fillStyle = '#3498DB';
                this.ctx.beginPath();
                this.ctx.arc(px, py, 6, 0, Math.PI * 2);
                this.ctx.fill();

                // Show motion direction
                this.drawArrowVector(px + 15, py, px + 15, py - 20, '#9B59B6', 2);
                this.drawArrowVector(px + 15, py, px + 15, py + 20, '#9B59B6', 2);
            }

            this.ctx.fillStyle = '#9B59B6';
            this.ctx.font = '11px Arial';
            this.ctx.fillText('Particle motion', x + waveWidth/2 + 10, transY);
            this.ctx.fillText('(perpendicular)', x + waveWidth/2 + 10, transY + 15);
        }

        // Longitudinal Wave
        const longY = y + height/4;
        
        this.ctx.fillStyle = '#2C3E50';
        this.ctx.font = 'bold 16px Arial';
        this.ctx.textAlign = 'left';
        this.ctx.fillText('Longitudinal Wave', x - width/2, longY - waveHeight/2 - 10);

        // Draw compressions and rarefactions with particles
        if (options.showParticles) {
            const particleRows = 5;
            const particlesPerWave = 40;
            
            for (let row = 0; row < particleRows; row++) {
                for (let i = 0; i < particlesPerWave; i++) {
                    const baseX = x - waveWidth/2 + (i / particlesPerWave) * waveWidth;
                    const phase = (i / particlesPerWave) * numCycles * 2 * Math.PI;
                    const displacement = amplitude * 0.3 * Math.sin(phase);
                    
                    const px = baseX + displacement;
                    const py = longY + (row - particleRows/2) * 8;

                    // Density visualization
                    const density = Math.abs(Math.cos(phase));
                    const particleSize = 3 + density * 2;

                    this.ctx.fillStyle = `rgba(52, 152, 219, ${0.5 + density * 0.5})`;
                    this.ctx.beginPath();
                    this.ctx.arc(px, py, particleSize, 0, Math.PI * 2);
                    this.ctx.fill();
                }
            }

            // Show compressions and rarefactions
            this.ctx.fillStyle = 'rgba(231, 76, 60, 0.1)';
            for (let i = 0; i < numCycles; i++) {
                const cx = x - waveWidth/2 + (i + 0.25) * wavelength;
                this.ctx.fillRect(cx, longY - waveHeight/2, wavelength/2, waveHeight);
            }

            // Labels
            this.ctx.fillStyle = '#E74C3C';
            this.ctx.font = '11px Arial';
            this.ctx.textAlign = 'center';
            this.ctx.fillText('C', x - waveWidth/2 + wavelength/2, longY + waveHeight/2 + 15);
            this.ctx.fillText('R', x - waveWidth/2 + wavelength, longY + waveHeight/2 + 15);
            
            // Legend
            this.ctx.fillText('C = Compression', x + waveWidth/2 + 80, longY - 10);
            this.ctx.fillText('R = Rarefaction', x + waveWidth/2 + 80, longY + 5);

            // Particle motion direction (parallel)
            this.drawArrowVector(x, longY + waveHeight/2 + 30, x + 30, longY + waveHeight/2 + 30, '#9B59B6', 2);
            this.drawArrowVector(x, longY + waveHeight/2 + 30, x - 30, longY + waveHeight/2 + 30, '#9B59B6', 2);
            
            this.ctx.fillStyle = '#9B59B6';
            this.ctx.font = '11px Arial';
            this.ctx.textAlign = 'center';
            this.ctx.fillText('Particle motion (parallel to wave)', x, longY + waveHeight/2 + 50);
        }

        // Wave properties labels
        if (options.showLabels) {
            // Wavelength indicator for transverse
            this.ctx.strokeStyle = '#16A085';
            this.ctx.lineWidth = 2;
            this.ctx.setLineDash([5, 5]);
            this.ctx.beginPath();
            this.ctx.moveTo(x - waveWidth/2, transY + amplitude + 20);
            this.ctx.lineTo(x - waveWidth/2 + wavelength, transY + amplitude + 20);
            this.ctx.stroke();
            this.ctx.setLineDash([]);
            this.drawArrowVector(x - waveWidth/2, transY + amplitude + 20, x - waveWidth/2 + 10, transY + amplitude + 20, '#16A085', 1.5);
            this.drawArrowVector(x - waveWidth/2 + wavelength, transY + amplitude + 20, x - waveWidth/2 + wavelength - 10, transY + amplitude + 20, '#16A085', 1.5);

            this.ctx.fillStyle = '#16A085';
            this.ctx.font = 'bold 12px Arial';
            this.ctx.textAlign = 'center';
            this.ctx.fillText('λ (wavelength)', x - waveWidth/2 + wavelength/2, transY + amplitude + 35);

            // Amplitude indicator
            this.ctx.strokeStyle = '#E67E22';
            this.ctx.lineWidth = 2;
            this.ctx.setLineDash([3, 3]);
            this.ctx.beginPath();
            this.ctx.moveTo(x - waveWidth/2 - 30, transY);
            this.ctx.lineTo(x - waveWidth/2 - 30, transY - amplitude);
            this.ctx.stroke();
            this.ctx.setLineDash([]);

            this.drawArrowVector(x - waveWidth/2 - 30, transY, x - waveWidth/2 - 30, transY - 10, '#E67E22', 1.5);
            this.drawArrowVector(x - waveWidth/2 - 30, transY - amplitude, x - waveWidth/2 - 30, transY - amplitude + 10, '#E67E22', 1.5);

            this.ctx.fillStyle = '#E67E22';
            this.ctx.font = 'bold 11px Arial';
            this.ctx.textAlign = 'right';
            this.ctx.fillText('A', x - waveWidth/2 - 35, transY - amplitude/2);
        }
    }

    renderWavefront(diagram, x, y, size, options) {
        const wavelength = diagram.wavelength;
        const numWavefronts = diagram.numWavefronts;

        // Draw source
        if (options.showSource) {
            this.ctx.fillStyle = '#E74C3C';
            this.ctx.beginPath();
            this.ctx.arc(x, y, 8, 0, Math.PI * 2);
            this.ctx.fill();

            this.ctx.fillStyle = '#2C3E50';
            this.ctx.font = 'bold 12px Arial';
            this.ctx.textAlign = 'center';
            this.ctx.fillText('Source', x, y - 15);
        }

        // Draw wavefronts (circles)
        this.ctx.strokeStyle = '#3498DB';
        this.ctx.lineWidth = 2;

        for (let i = 1; i <= numWavefronts; i++) {
            const radius = i * wavelength;
            
            if (radius < size) {
                this.ctx.beginPath();
                this.ctx.arc(x, y, radius, 0, Math.PI * 2);
                this.ctx.stroke();
            }
        }

        // Draw rays
        if (options.showRays) {
            this.ctx.strokeStyle = '#E67E22';
            this.ctx.lineWidth = 1.5;
            this.ctx.setLineDash([5, 5]);

            const numRays = 8;
            for (let i = 0; i < numRays; i++) {
                const angle = (i / numRays) * 2 * Math.PI;
                const endX = x + size * Math.cos(angle);
                const endY = y + size * Math.sin(angle);

                this.drawArrowVector(x, y, endX, endY, '#E67E22', 1.5);
            }

            this.ctx.setLineDash([]);
        }

        // Label wavelength
        this.ctx.strokeStyle = '#16A085';
        this.ctx.lineWidth = 2;
        this.ctx.setLineDash([3, 3]);
        this.ctx.beginPath();
        this.ctx.moveTo(x, y);
        this.ctx.lineTo(x + wavelength, y);
        this.ctx.stroke();
        this.ctx.setLineDash([]);

        this.drawArrowVector(x, y, x + 10, y, '#16A085', 1.5);
        this.drawArrowVector(x + wavelength, y, x + wavelength - 10, y, '#16A085', 1.5);

        this.ctx.fillStyle = '#16A085';
        this.ctx.font = 'bold 12px Arial';
        this.ctx.textAlign = 'center';
        this.ctx.fillText('λ', x + wavelength/2, y - 10);
    }

    renderReflectionRefraction(diagram, x, y, width, height, options) {
        const interfaceY = y;
        const incidentAngle = (diagram.incidentAngle * Math.PI) / 180;
        const n1 = diagram.n1;
        const n2 = diagram.n2;

        // Calculate refraction angle using Snell's law
        const sinTheta2 = (n1 / n2) * Math.sin(incidentAngle);
        const refractionAngle = Math.asin(Math.min(1, sinTheta2));

        // Draw interface
        this.ctx.strokeStyle = '#34495E';
        this.ctx.lineWidth = 3;
        this.ctx.beginPath();
        this.ctx.moveTo(x - width/2, interfaceY);
        this.ctx.lineTo(x + width/2, interfaceY);
        this.ctx.stroke();

        // Label media
        this.ctx.fillStyle = '#7F8C8D';
        this.ctx.font = '14px Arial';
        this.ctx.textAlign = 'right';
        this.ctx.fillText(`n₁ = ${n1}`, x - width/2 + 60, interfaceY - 20);
        this.ctx.fillText(`n₂ = ${n2}`, x - width/2 + 60, interfaceY + 35);

        // Different shading for different media
        this.ctx.fillStyle = 'rgba(52, 152, 219, 0.1)';
        this.ctx.fillRect(x - width/2, interfaceY, width, height/2 - 50);

        // Draw normal line
        if (options.showNormals) {
            this.ctx.strokeStyle = '#95A5A6';
            this.ctx.lineWidth = 1;
            this.ctx.setLineDash([5, 5]);
            this.ctx.beginPath();
            this.ctx.moveTo(x, interfaceY - height/2 + 50);
            this.ctx.lineTo(x, interfaceY + height/2 - 50);
            this.ctx.stroke();
            this.ctx.setLineDash([]);

            this.ctx.fillStyle = '#95A5A6';
            this.ctx.font = '11px Arial';
            this.ctx.textAlign = 'left';
            this.ctx.fillText('Normal', x + 5, interfaceY - height/2 + 65);
        }

        const rayLength = height * 0.35;

        // Incident ray
        const incidentEndX = x;
        const incidentEndY = interfaceY;
        const incidentStartX = x - rayLength * Math.sin(incidentAngle);
        const incidentStartY = interfaceY - rayLength * Math.cos(incidentAngle);

        this.drawArrowVector(incidentStartX, incidentStartY, incidentEndX, incidentEndY, '#E74C3C', 3);

        this.ctx.fillStyle = '#E74C3C';
        this.ctx.font = 'bold 12px Arial';
        this.ctx.textAlign = 'center';
        this.ctx.fillText('Incident', incidentStartX - 20, incidentStartY);

        // Reflected ray
        const reflectedEndX = x + rayLength * Math.sin(incidentAngle);
        const reflectedEndY = interfaceY - rayLength * Math.cos(incidentAngle);

        this.drawArrowVector(incidentEndX, incidentEndY, reflectedEndX, reflectedEndY, '#9B59B6', 3);

        this.ctx.fillStyle = '#9B59B6';
        this.ctx.fillText('Reflected', reflectedEndX + 20, reflectedEndY);

        // Refracted ray
        const refractedEndX = x + rayLength * Math.sin(refractionAngle);
        const refractedEndY = interfaceY + rayLength * Math.cos(refractionAngle);

        this.drawArrowVector(incidentEndX, incidentEndY, refractedEndX, refractedEndY, '#27AE60', 3);

        this.ctx.fillStyle = '#27AE60';
        this.ctx.fillText('Refracted', refractedEndX + 20, refractedEndY);

        // Show angles
        if (options.showAngles) {
            const arcRadius = 40;

            // Incident angle
            this.ctx.strokeStyle = '#E74C3C';
            this.ctx.lineWidth = 1.5;
            this.ctx.beginPath();
            this.ctx.arc(x, interfaceY, arcRadius, -Math.PI/2, -Math.PI/2 - incidentAngle, true);
            this.ctx.stroke();

            this.ctx.fillStyle = '#E74C3C';
            this.ctx.font = '12px Arial';
            this.ctx.textAlign = 'center';
            this.ctx.fillText(`θ₁ = ${diagram.incidentAngle}°`, x - 60, interfaceY - 25);

            // Refraction angle
            this.ctx.strokeStyle = '#27AE60';
            this.ctx.beginPath();
            this.ctx.arc(x, interfaceY, arcRadius, Math.PI/2, Math.PI/2 + refractionAngle, false);
            this.ctx.stroke();

            this.ctx.fillStyle = '#27AE60';
            this.ctx.fillText(`θ₂ = ${(refractionAngle * 180 / Math.PI).toFixed(1)}°`, x + 60, interfaceY + 40);
        }

        // Show Snell's Law equation
        if (options.showSnellsLaw) {
            this.ctx.fillStyle = '#2C3E50';
            this.ctx.font = 'bold 14px Arial';
            this.ctx.textAlign = 'center';
            this.ctx.fillText(`Snell's Law: n₁sin(θ₁) = n₂sin(θ₂)`, x, y - height/2 + 30);
        }
    }

    renderWaveInterference(diagram, x, y, width, height, options) {
        const separation = diagram.separation;
        const wavelength = diagram.wavelength;

        const source1X = x - separation/2;
        const source1Y = y;
        const source2X = x + separation/2;
        const source2Y = y;

        // Draw sources
        if (options.showSources) {
            this.ctx.fillStyle = '#E74C3C';
            this.ctx.beginPath();
            this.ctx.arc(source1X, source1Y, 10, 0, Math.PI * 2);
            this.ctx.fill();

            this.ctx.beginPath();
            this.ctx.arc(source2X, source2Y, 10, 0, Math.PI * 2);
            this.ctx.fill();

            this.ctx.fillStyle = '#2C3E50';
            this.ctx.font = 'bold 12px Arial';
            this.ctx.textAlign = 'center';
            this.ctx.fillText('S₁', source1X, source1Y - 15);
            this.ctx.fillText('S₂', source2X, source2Y - 15);
        }

        // Draw interference pattern (simplified)
        const gridSize = 5;
        const maxDist = Math.min(width, height) * 0.45;

        for (let px = x - maxDist; px < x + maxDist; px += gridSize) {
            for (let py = y - maxDist; py < y + maxDist; py += gridSize) {
                const d1 = Math.sqrt((px - source1X) ** 2 + (py - source1Y) ** 2);
                const d2 = Math.sqrt((px - source2X) ** 2 + (py - source2Y) ** 2);

                const pathDiff = Math.abs(d1 - d2);
                const phase = (pathDiff / wavelength) * 2 * Math.PI;

                // Constructive interference when path difference is multiple of wavelength
                const amplitude = Math.cos(phase);
                
                if (amplitude > 0.7) {
                    // Constructive
                    this.ctx.fillStyle = `rgba(46, 204, 113, ${amplitude * 0.6})`;
                    this.ctx.fillRect(px, py, gridSize, gridSize);
                } else if (amplitude < -0.7) {
                    // Destructive
                    this.ctx.fillStyle = `rgba(231, 76, 60, ${Math.abs(amplitude) * 0.4})`;
                    this.ctx.fillRect(px, py, gridSize, gridSize);
                }
            }
        }

        // Show nodal lines (destructive interference)
        if (options.showNodes) {
            this.ctx.strokeStyle = '#E74C3C';
            this.ctx.lineWidth = 2;
            this.ctx.setLineDash([5, 5]);

            // Approximate nodal lines
            const numNodes = 5;
            for (let n = 1; n <= numNodes; n++) {
                const angle = Math.asin((n - 0.5) * wavelength / separation);
                if (!isNaN(angle)) {
                    const lineLength = maxDist;
                    
                    // Upper nodal line
                    this.ctx.beginPath();
                    this.ctx.moveTo(x, y);
                    this.ctx.lineTo(x + lineLength * Math.cos(angle), y - lineLength * Math.sin(angle));
                    this.ctx.stroke();

                    // Lower nodal line
                    this.ctx.beginPath();
                    this.ctx.moveTo(x, y);
                    this.ctx.lineTo(x + lineLength * Math.cos(angle), y + lineLength * Math.sin(angle));
                    this.ctx.stroke();
                }
            }

            this.ctx.setLineDash([]);
        }

        // Show antinodal lines (constructive interference)
        if (options.showAntinodes) {
            this.ctx.strokeStyle = '#27AE60';
            this.ctx.lineWidth = 2;
            this.ctx.setLineDash([5, 5]);

            // Central maximum
            this.ctx.beginPath();
            this.ctx.moveTo(x, y);
            this.ctx.lineTo(x + maxDist, y);
            this.ctx.stroke();

            this.ctx.setLineDash([]);
        }

        // Legend
        this.ctx.fillStyle = '#2C3E50';
        this.ctx.font = '12px Arial';
        this.ctx.textAlign = 'left';
        
        const legendX = x - width/2 + 20;
        const legendY = y - height/2 + 40;

        this.ctx.fillStyle = 'rgba(46, 204, 113, 0.8)';
        this.ctx.fillRect(legendX, legendY, 15, 15);
        this.ctx.fillStyle = '#2C3E50';
        this.ctx.fillText('Constructive Interference', legendX + 20, legendY + 12);

        this.ctx.fillStyle = 'rgba(231, 76, 60, 0.6)';
        this.ctx.fillRect(legendX, legendY + 20, 15, 15);
        this.ctx.fillStyle = '#2C3E50';
        this.ctx.fillText('Destructive Interference', legendX + 20, legendY + 32);
    }

    renderStandingWaves(diagram, x, y, width, height, options) {
        const harmonic = diagram.harmonic;
        const length = diagram.length;
        const amplitude = diagram.amplitude;

        // Draw string endpoints
        this.ctx.fillStyle = '#34495E';
        this.ctx.beginPath();
        this.ctx.arc(x - length/2, y, 8, 0, Math.PI * 2);
        this.ctx.fill();
        this.ctx.beginPath();
        this.ctx.arc(x + length/2, y, 8, 0, Math.PI * 2);
        this.ctx.fill();

        // Draw standing wave
        this.ctx.strokeStyle = '#3498DB';
        this.ctx.lineWidth = 3;
        this.ctx.beginPath();

        for (let i = 0; i <= 100; i++) {
            const px = x - length/2 + (i / 100) * length;
            const position = (i / 100) * length;
            const py = y + amplitude * Math.sin((harmonic * Math.PI * position) / length);

            if (i === 0) {
                this.ctx.moveTo(px, py);
            } else {
                this.ctx.lineTo(px, py);
            }
        }
        this.ctx.stroke();

        // Show envelope (dashed)
        this.ctx.strokeStyle = '#E74C3C';
        this.ctx.lineWidth = 1.5;
        this.ctx.setLineDash([5, 5]);
        this.ctx.beginPath();

        for (let i = 0; i <= 100; i++) {
            const px = x - length/2 + (i / 100) * length;
            const position = (i / 100) * length;
            const py = y + amplitude * Math.sin((harmonic * Math.PI * position) / length);

            if (i === 0) {
                this.ctx.moveTo(px, py);
            } else {
                this.ctx.lineTo(px, py);
            }
        }
        this.ctx.stroke();

        // Lower envelope
        this.ctx.beginPath();
        for (let i = 0; i <= 100; i++) {
            const px = x - length/2 + (i / 100) * length;
            const position = (i / 100) * length;
            const py = y - amplitude * Math.sin((harmonic * Math.PI * position) / length);

            if (i === 0) {
                this.ctx.moveTo(px, py);
            } else {
                this.ctx.lineTo(px, py);
            }
        }
        this.ctx.stroke();
        this.ctx.setLineDash([]);

        // Mark nodes
        if (options.showNodes) {
            this.ctx.fillStyle = '#E74C3C';
            for (let n = 0; n <= harmonic; n++) {
                const nodeX = x - length/2 + (n / harmonic) * length;
                this.ctx.beginPath();
                this.ctx.arc(nodeX, y, 6, 0, Math.PI * 2);
                this.ctx.fill();

                this.ctx.fillStyle = '#E74C3C';
                this.ctx.font = 'bold 11px Arial';
                this.ctx.textAlign = 'center';
                this.ctx.fillText('N', nodeX, y + 25);
            }
        }

        // Mark antinodes
        if (options.showAntinodes) {
            this.ctx.fillStyle = '#27AE60';
            for (let n = 0; n < harmonic; n++) {
                const antinodeX = x - length/2 + ((n + 0.5) / harmonic) * length;
                this.ctx.beginPath();
                this.ctx.arc(antinodeX, y + amplitude, 6, 0, Math.PI * 2);
                this.ctx.fill();
                this.ctx.beginPath();
                this.ctx.arc(antinodeX, y - amplitude, 6, 0, Math.PI * 2);
                this.ctx.fill();

                this.ctx.fillStyle = '#27AE60';
                this.ctx.font = 'bold 11px Arial';
                this.ctx.textAlign = 'center';
                this.ctx.fillText('A', antinodeX, y + amplitude + 20);
            }
        }

        // Show wavelength
        const wavelength = (2 * length) / harmonic;
        this.ctx.strokeStyle = '#16A085';
        this.ctx.lineWidth = 2;
        this.ctx.setLineDash([3, 3]);
        this.ctx.beginPath();
        this.ctx.moveTo(x - length/2, y - amplitude - 30);
        this.ctx.lineTo(x - length/2 + wavelength, y - amplitude - 30);
        this.ctx.stroke();
        this.ctx.setLineDash([]);

        this.drawArrowVector(x - length/2, y - amplitude - 30, x - length/2 + 10, y - amplitude - 30, '#16A085', 1.5);
        this.drawArrowVector(x - length/2 + wavelength, y - amplitude - 30, x - length/2 + wavelength - 10, y - amplitude - 30, '#16A085', 1.5);

        this.ctx.fillStyle = '#16A085';
        this.ctx.font = 'bold 12px Arial';
        this.ctx.textAlign = 'center';
        this.ctx.fillText(`λ = ${wavelength.toFixed(1)}cm`, x - length/2 + wavelength/2, y - amplitude - 40);

        // Harmonic info
        this.ctx.fillStyle = '#2C3E50';
        this.ctx.font = 'bold 14px Arial';
        this.ctx.fillText(`${harmonic}${this.getOrdinal(harmonic)} Harmonic (n = ${harmonic})`, x, y - height/2 + 30);
    }

    getOrdinal(n) {
        const s = ["th", "st", "nd", "rd"];
        const v = n % 100;
        return s[(v - 20) % 10] || s[v] || s[0];
    }

    renderDopplerEffect(diagram, x, y, width, height, options) {
        const sourceX = x;
        const sourceY = y;
        const velocity = diagram.sourceVelocity; // Fraction of wave speed
        const wavelength = 40;
        const numWavefronts = 6;

        // Draw source (moving)
        if (options.showVelocity) {
            const vArrowLength = 80;
            const directionX = diagram.direction === 'right' ? 1 : (diagram.direction === 'left' ? -1 : 0);
            
            this.drawArrowVector(
                sourceX, sourceY - 60,
                sourceX + directionX * vArrowLength, sourceY - 60,
                '#E74C3C', 3
            );

            this.ctx.fillStyle = '#E74C3C';
            this.ctx.font = 'bold 12px Arial';
            this.ctx.textAlign = 'center';
            this.ctx.fillText('v (source)', sourceX + directionX * vArrowLength/2, sourceY - 70);
        }

        // Draw source
        this.ctx.fillStyle = '#3498DB';
        this.ctx.beginPath();
        this.ctx.arc(sourceX, sourceY, 12, 0, Math.PI * 2);
        this.ctx.fill();
        this.ctx.strokeStyle = '#2980B9';
        this.ctx.lineWidth = 2;
        this.ctx.stroke();

        // Draw wavefronts with Doppler shift
        const directionX = diagram.direction === 'right' ? 1 : (diagram.direction === 'left' ? -1 : 0);
        
        if (options.showWavefronts) {
            this.ctx.lineWidth = 2;

            for (let i = 1; i <= numWavefronts; i++) {
                // Center shifts in direction of motion
                const centerShift = velocity * wavelength * i * directionX;
                const centerX = sourceX + centerShift;

                const radius = i * wavelength;

                this.ctx.strokeStyle = `rgba(52, 152, 219, ${1 - i * 0.15})`;
                this.ctx.beginPath();
                this.ctx.arc(centerX, sourceY, radius, 0, Math.PI * 2);
                this.ctx.stroke();
            }
        }

        // Show compressed and stretched wavelengths
        if (options.showFrequencyChange) {
            // Ahead of source (compressed - higher frequency)
            const aheadX = sourceX + directionX * 150;
            const compressedWL = wavelength * (1 - velocity);
            
            this.ctx.fillStyle = '#E74C3C';
            this.ctx.font = 'bold 13px Arial';
            this.ctx.textAlign = 'center';
            this.ctx.fillText('Compressed', aheadX, sourceY - 100);
            this.ctx.fillText('(Higher frequency)', aheadX, sourceY - 85);
            this.ctx.font = '12px Arial';
            this.ctx.fillText(`λ' < λ`, aheadX, sourceY - 70);

            // Behind source (stretched - lower frequency)
            const behindX = sourceX - directionX * 150;
            const stretchedWL = wavelength * (1 + velocity);
            
            this.ctx.fillStyle = '#9B59B6';
            this.ctx.font = 'bold 13px Arial';
            this.ctx.fillText('Stretched', behindX, sourceY - 100);
            this.ctx.fillText('(Lower frequency)', behindX, sourceY - 85);
            this.ctx.font = '12px Arial';
            this.ctx.fillText(`λ' > λ`, behindX, sourceY - 70);

            // Observers
            this.drawObserver(aheadX, sourceY + 80, '#E74C3C');
            this.drawObserver(behindX, sourceY + 80, '#9B59B6');
        }
    }

    drawObserver(x, y, color) {
        // Head
        this.ctx.fillStyle = color;
        this.ctx.beginPath();
        this.ctx.arc(x, y - 15, 10, 0, Math.PI * 2);
        this.ctx.fill();

        // Body
        this.ctx.strokeStyle = color;
        this.ctx.lineWidth = 3;
        this.ctx.beginPath();
        this.ctx.moveTo(x, y - 5);
        this.ctx.lineTo(x, y + 15);
        this.ctx.stroke();

        // Arms
        this.ctx.beginPath();
        this.ctx.moveTo(x - 10, y);
        this.ctx.lineTo(x + 10, y);
        this.ctx.stroke();

        // Legs
        this.ctx.beginPath();
        this.ctx.moveTo(x, y + 15);
        this.ctx.lineTo(x - 8, y + 25);
        this.ctx.moveTo(x, y + 15);
        this.ctx.lineTo(x + 8, y + 25);
        this.ctx.stroke();
    }

    renderSoundPressure(diagram, x, y, width, height, options) {
        const frequency = diagram.frequency;
        const amplitude = diagram.amplitude;
        const wavelength = width / 3; // Approximately 3 wavelengths visible

        // Draw axes
        const axisY = y;
        this.ctx.strokeStyle = '#2C3E50';
        this.ctx.lineWidth = 2;
        this.ctx.beginPath();
        this.ctx.moveTo(x - width/2, axisY);
        this.ctx.lineTo(x + width/2, axisY);
        this.ctx.stroke();

        // Y-axis
        this.ctx.beginPath();
        this.ctx.moveTo(x - width/2, axisY - height/3);
        this.ctx.lineTo(x - width/2, axisY + height/3);
        this.ctx.stroke();

        // Labels
        this.ctx.fillStyle = '#2C3E50';
        this.ctx.font = 'italic 14px Arial';
        this.ctx.textAlign = 'center';
        this.ctx.fillText('Position', x, axisY + height/3 + 25);
        
        this.ctx.save();
        this.ctx.translate(x - width/2 - 30, axisY);
        this.ctx.rotate(-Math.PI/2);
        this.ctx.fillText('Pressure', 0, 0);
        this.ctx.restore();

        // Draw pressure wave
        this.ctx.strokeStyle = '#E74C3C';
        this.ctx.lineWidth = 3;
        this.ctx.beginPath();

        for (let i = 0; i <= 100; i++) {
            const px = x - width/2 + (i / 100) * width;
            const phase = (i / 100) * (width / wavelength) * 2 * Math.PI;
            const py = axisY - amplitude * Math.sin(phase);

            if (i === 0) {
                this.ctx.moveTo(px, py);
            } else {
                this.ctx.lineTo(px, py);
            }
        }
        this.ctx.stroke();

        // Show compressions and rarefactions
        if (options.showCompressions || options.showRarefactions) {
            const numCycles = Math.floor(width / wavelength);

            for (let n = 0; n < numCycles; n++) {
                const cycleX = x - width/2 + n * wavelength;

                // Compression (high pressure)
                if (options.showCompressions) {
                    this.ctx.fillStyle = 'rgba(231, 76, 60, 0.15)';
                    this.ctx.fillRect(cycleX, axisY - height/3, wavelength/2, 2 * height/3);

                    this.ctx.fillStyle = '#E74C3C';
                    this.ctx.font = 'bold 11px Arial';
                    this.ctx.textAlign = 'center';
                    this.ctx.fillText('C', cycleX + wavelength/4, axisY + height/3 + 12);
                }

                // Rarefaction (low pressure)
                if (options.showRarefactions) {
                    this.ctx.fillStyle = 'rgba(52, 152, 219, 0.15)';
                    this.ctx.fillRect(cycleX + wavelength/2, axisY - height/3, wavelength/2, 2 * height/3);

                    this.ctx.fillStyle = '#3498DB';
                    this.ctx.font = 'bold 11px Arial';
                    this.ctx.textAlign = 'center';
                    this.ctx.fillText('R', cycleX + 3 * wavelength/4, axisY + height/3 + 12);
                }
            }
        }


        this.ctx.strokeStyle = '#16A085';
        this.ctx.lineWidth = 2;
        this.ctx.setLineDash([5, 5]);
        this.ctx.beginPath();
        this.ctx.moveTo(x - width/2, axisY - height/3 - 20);
        this.ctx.lineTo(x - width/2 + wavelength, axisY - height/3 - 20);
        this.ctx.stroke();
        this.ctx.setLineDash([]);

        this.drawArrowVector(x - width/2, axisY - height/3 - 20, x - width/2 + 15, axisY - height/3 - 20, '#16A085', 1.5);
        this.drawArrowVector(x - width/2 + wavelength, axisY - height/3 - 20, x - width/2 + wavelength - 15, axisY - height/3 - 20, '#16A085', 1.5);

        this.ctx.fillStyle = '#16A085';
        this.ctx.font = 'bold 12px Arial';
        this.ctx.textAlign = 'center';
        this.ctx.fillText('λ', x - width/2 + wavelength/2, axisY - height/3 - 30);

        // Frequency info
        this.ctx.fillStyle = '#2C3E50';
        this.ctx.font = 'bold 13px Arial';
        this.ctx.textAlign = 'center';
        this.ctx.fillText(`Frequency: ${frequency} Hz`, x, y - height/2 + 30);
    }

    renderDiffraction(diagram, x, y, width, height, options) {
        const slitWidth = diagram.slitWidth;
        const slitSeparation = diagram.slitSeparation;
        const wavelength = diagram.wavelength;
        const screenDistance = width * 0.6;

        // Draw barrier with slits
        const barrierX = x - width/3;
        this.ctx.fillStyle = '#34495E';
        this.ctx.fillRect(barrierX - 5, y - height/2 + 50, 10, height - 100);

        // Draw slits
        if (diagram.slitType === 'double') {
            // Double slit
            const slit1Y = y - slitSeparation/2;
            const slit2Y = y + slitSeparation/2;

            this.ctx.clearRect(barrierX - 5, slit1Y - slitWidth/2, 10, slitWidth);
            this.ctx.clearRect(barrierX - 5, slit2Y - slitWidth/2, 10, slitWidth);

            // Outline slits
            this.ctx.strokeStyle = '#2C3E50';
            this.ctx.lineWidth = 2;
            this.ctx.strokeRect(barrierX - 5, slit1Y - slitWidth/2, 10, slitWidth);
            this.ctx.strokeRect(barrierX - 5, slit2Y - slitWidth/2, 10, slitWidth);
        } else {
            // Single slit
            this.ctx.clearRect(barrierX - 5, y - slitWidth/2, 10, slitWidth);
            this.ctx.strokeStyle = '#2C3E50';
            this.ctx.lineWidth = 2;
            this.ctx.strokeRect(barrierX - 5, y - slitWidth/2, 10, slitWidth);
        }

        // Draw incident wave
        this.ctx.strokeStyle = '#E74C3C';
        this.ctx.lineWidth = 2;
        for (let i = 0; i < 5; i++) {
            this.drawArrowVector(
                barrierX - 80 - i * 15,
                y,
                barrierX - 65 - i * 15,
                y,
                '#E74C3C',
                2
            );
        }

        // Draw screen
        const screenX = barrierX + screenDistance;
        this.ctx.fillStyle = '#ECF0F1';
        this.ctx.fillRect(screenX - 5, y - height/2 + 50, 10, height - 100);
        this.ctx.strokeStyle = '#95A5A6';
        this.ctx.lineWidth = 2;
        this.ctx.strokeRect(screenX - 5, y - height/2 + 50, 10, height - 100);

        // Draw diffraction pattern on screen
        if (options.showPattern) {
            const patternHeight = height - 100;
            const centralMaxIntensity = 255;

            for (let py = 0; py < patternHeight; py++) {
                const yPos = y - height/2 + 50 + py;
                const angle = Math.atan((yPos - y) / screenDistance);
                
                let intensity;
                if (diagram.slitType === 'double') {
                    // Double slit pattern
                    const beta = (Math.PI * slitSeparation * Math.sin(angle)) / wavelength;
                    intensity = Math.pow(Math.cos(beta), 2);
                } else {
                    // Single slit pattern
                    const alpha = (Math.PI * slitWidth * Math.sin(angle)) / wavelength;
                    if (Math.abs(alpha) < 0.001) {
                        intensity = 1;
                    } else {
                        intensity = Math.pow(Math.sin(alpha) / alpha, 2);
                    }
                }

                const color = Math.floor(intensity * centralMaxIntensity);
                this.ctx.fillStyle = `rgb(${color}, ${color}, ${color})`;
                this.ctx.fillRect(screenX + 10, yPos, 30, 2);
            }
        }

        // Show intensity graph
        if (options.showIntensity) {
            const graphX = screenX + 50;
            const graphWidth = 100;
            const graphHeight = height - 100;

            this.ctx.strokeStyle = '#2C3E50';
            this.ctx.lineWidth = 2;
            this.ctx.beginPath();

            for (let py = 0; py < graphHeight; py++) {
                const yPos = y - height/2 + 50 + py;
                const angle = Math.atan((yPos - y) / screenDistance);
                
                let intensity;
                if (diagram.slitType === 'double') {
                    const beta = (Math.PI * slitSeparation * Math.sin(angle)) / wavelength;
                    intensity = Math.pow(Math.cos(beta), 2);
                } else {
                    const alpha = (Math.PI * slitWidth * Math.sin(angle)) / wavelength;
                    if (Math.abs(alpha) < 0.001) {
                        intensity = 1;
                    } else {
                        intensity = Math.pow(Math.sin(alpha) / alpha, 2);
                    }
                }

                const plotX = graphX + intensity * graphWidth;
                
                if (py === 0) {
                    this.ctx.moveTo(plotX, yPos);
                } else {
                    this.ctx.lineTo(plotX, yPos);
                }
            }
            this.ctx.stroke();

            // Axis
            this.ctx.strokeStyle = '#95A5A6';
            this.ctx.lineWidth = 1;
            this.ctx.beginPath();
            this.ctx.moveTo(graphX, y - height/2 + 50);
            this.ctx.lineTo(graphX, y + height/2 - 50);
            this.ctx.stroke();

            this.ctx.fillStyle = '#2C3E50';
            this.ctx.font = '11px Arial';
            this.ctx.textAlign = 'center';
            this.ctx.fillText('Intensity', graphX + graphWidth/2, y + height/2 - 30);
        }

        // Labels
        this.ctx.fillStyle = '#2C3E50';
        this.ctx.font = 'bold 12px Arial';
        this.ctx.textAlign = 'center';
        this.ctx.fillText(diagram.slitType === 'double' ? 'Double Slit' : 'Single Slit', barrierX, y - height/2 + 30);
        this.ctx.fillText('Screen', screenX, y - height/2 + 30);
    }

    // ========== THERMODYNAMICS RENDERERS ==========

    renderHeatingCurvePhysics(diagram, x, y, width, height, options) {
        const graphWidth = width - 100;
        const graphHeight = height - 100;

        // Draw axes
        this.ctx.strokeStyle = '#2C3E50';
        this.ctx.lineWidth = 2;
        
        // X-axis
        this.ctx.beginPath();
        this.ctx.moveTo(x - graphWidth/2, y + graphHeight/2);
        this.ctx.lineTo(x + graphWidth/2, y + graphHeight/2);
        this.ctx.stroke();

        // Y-axis
        this.ctx.beginPath();
        this.ctx.moveTo(x - graphWidth/2, y - graphHeight/2);
        this.ctx.lineTo(x - graphWidth/2, y + graphHeight/2);
        this.ctx.stroke();

        // Labels
        this.ctx.fillStyle = '#2C3E50';
        this.ctx.font = 'italic 14px Arial';
        this.ctx.textAlign = 'center';
        this.ctx.fillText('Heat Added (Q)', x, y + graphHeight/2 + 35);

        this.ctx.save();
        this.ctx.translate(x - graphWidth/2 - 40, y);
        this.ctx.rotate(-Math.PI/2);
        this.ctx.fillText('Temperature (°C)', 0, 0);
        this.ctx.restore();

        // Define heating curve segments for water
        const segments = [
            { label: 'Ice warming', slope: 1, length: 0.15, phase: 'solid' },
            { label: 'Melting', slope: 0, length: 0.2, phase: 'melting', temp: 0 },
            { label: 'Water warming', slope: 1, length: 0.25, phase: 'liquid' },
            { label: 'Boiling', slope: 0, length: 0.2, phase: 'boiling', temp: 100 },
            { label: 'Steam warming', slope: 0.8, length: 0.2, phase: 'gas' }
        ];

        // Draw curve
        this.ctx.strokeStyle = '#E74C3C';
        this.ctx.lineWidth = 3;
        this.ctx.beginPath();

        let currentX = x - graphWidth/2;
        let currentY = y + graphHeight/2 - 50;
        this.ctx.moveTo(currentX, currentY);

        let segmentStartX = currentX;
        let segmentStartY = currentY;

        segments.forEach((seg, index) => {
            const segmentWidth = seg.length * graphWidth;
            const segmentHeight = seg.slope * 150;

            const endX = currentX + segmentWidth;
            const endY = currentY - segmentHeight;

            this.ctx.lineTo(endX, endY);

            // Store for labels
            if (options.showLabels) {
                const midX = (currentX + endX) / 2;
                const midY = (currentY + endY) / 2;

                this.ctx.fillStyle = '#2C3E50';
                this.ctx.font = '11px Arial';
                this.ctx.textAlign = 'center';
                this.ctx.fillText(seg.label, midX, midY - 15);

                if (seg.phase === 'melting' || seg.phase === 'boiling') {
                    this.ctx.fillStyle = '#E67E22';
                    this.ctx.font = 'bold 11px Arial';
                    this.ctx.fillText(`${seg.temp}°C`, midX, midY + 10);
                }
            }

            // Phase regions
            if (options.showPhases) {
                let phaseColor;
                let phaseName;

                switch (seg.phase) {
                    case 'solid':
                        phaseColor = 'rgba(52, 152, 219, 0.1)';
                        phaseName = 'SOLID';
                        break;
                    case 'liquid':
                        phaseColor = 'rgba(46, 204, 113, 0.1)';
                        phaseName = 'LIQUID';
                        break;
                    case 'gas':
                        phaseColor = 'rgba(231, 76, 60, 0.1)';
                        phaseName = 'GAS';
                        break;
                    default:
                        phaseColor = 'rgba(149, 165, 166, 0.1)';
                        phaseName = '';
                }

                this.ctx.fillStyle = phaseColor;
                this.ctx.fillRect(
                    currentX,
                    y - graphHeight/2,
                    segmentWidth,
                    graphHeight
                );

                if (phaseName) {
                    this.ctx.fillStyle = 'rgba(44, 62, 80, 0.4)';
                    this.ctx.font = 'bold 14px Arial';
                    this.ctx.textAlign = 'center';
                    this.ctx.fillText(phaseName, currentX + segmentWidth/2, y - graphHeight/2 + 30);
                }
            }

            // Plateaus
            if (options.showPlateaus && seg.slope === 0) {
                this.ctx.setLineDash([5, 5]);
                this.ctx.strokeStyle = '#E67E22';
                this.ctx.lineWidth = 2;
                this.ctx.beginPath();
                this.ctx.moveTo(currentX, currentY);
                this.ctx.lineTo(endX, endY);
                this.ctx.stroke();
                this.ctx.setLineDash([]);
                this.ctx.strokeStyle = '#E74C3C';
                this.ctx.lineWidth = 3;
            }

            currentX = endX;
            currentY = endY;
        });

        this.ctx.stroke();

        // Add note about plateaus
        if (options.showPlateaus) {
            this.ctx.fillStyle = '#E67E22';
            this.ctx.font = '12px Arial';
            this.ctx.textAlign = 'left';
            this.ctx.fillText('Plateaus = Phase changes (temperature constant)', x - graphWidth/2 + 20, y - graphHeight/2 - 20);
        }
    }

    renderPhaseDiagramPhysics(diagram, x, y, width, height, options) {
        const graphWidth = width - 100;
        const graphHeight = height - 100;

        // Draw axes
        this.ctx.strokeStyle = '#2C3E50';
        this.ctx.lineWidth = 2;
        
        // X-axis
        this.ctx.beginPath();
        this.ctx.moveTo(x - graphWidth/2, y + graphHeight/2);
        this.ctx.lineTo(x + graphWidth/2, y + graphHeight/2);
        this.ctx.stroke();

        // Y-axis
        this.ctx.beginPath();
        this.ctx.moveTo(x - graphWidth/2, y - graphHeight/2);
        this.ctx.lineTo(x - graphWidth/2, y + graphHeight/2);
        this.ctx.stroke();

        // Labels
        this.ctx.fillStyle = '#2C3E50';
        this.ctx.font = 'italic 14px Arial';
        this.ctx.textAlign = 'center';
        this.ctx.fillText('Temperature', x, y + graphHeight/2 + 35);

        this.ctx.save();
        this.ctx.translate(x - graphWidth/2 - 40, y);
        this.ctx.rotate(-Math.PI/2);
        this.ctx.fillText('Pressure', 0, 0);
        this.ctx.restore();

        // Define phase boundaries (simplified)
        const scale = { x: graphWidth / 100, y: graphHeight / 100 };

        // Solid-Liquid boundary (nearly vertical for water, slopes left)
        const solidLiquidLine = [
            { x: 48, y: 10 },
            { x: 47, y: 50 },
            { x: 46, y: 90 }
        ];

        // Liquid-Gas boundary (exponential-like curve)
        const liquidGasLine = [
            { x: 48, y: 10 },
            { x: 55, y: 30 },
            { x: 65, y: 50 },
            { x: 75, y: 65 },
            { x: 85, y: 75 }
        ];

        // Solid-Gas boundary (sublimation)
        const solidGasLine = [
            { x: 20, y: 5 },
            { x: 48, y: 10 }
        ];

        // Draw phase regions
        if (options.showPhaseRegions) {
            // Solid region
            this.ctx.fillStyle = 'rgba(52, 152, 219, 0.2)';
            this.ctx.beginPath();
            this.ctx.moveTo(x - graphWidth/2, y + graphHeight/2);
            solidLiquidLine.forEach(pt => {
                this.ctx.lineTo(x - graphWidth/2 + pt.x * scale.x, y + graphHeight/2 - pt.y * scale.y);
            });
            solidGasLine.reverse().forEach(pt => {
                this.ctx.lineTo(x - graphWidth/2 + pt.x * scale.x, y + graphHeight/2 - pt.y * scale.y);
            });
            solidGasLine.reverse();
            this.ctx.lineTo(x - graphWidth/2, y - graphHeight/2);
            this.ctx.closePath();
            this.ctx.fill();

            // Liquid region
            this.ctx.fillStyle = 'rgba(46, 204, 113, 0.2)';
            this.ctx.beginPath();
            this.ctx.moveTo(x - graphWidth/2 + solidLiquidLine[0].x * scale.x, y + graphHeight/2 - solidLiquidLine[0].y * scale.y);
            solidLiquidLine.forEach(pt => {
                this.ctx.lineTo(x - graphWidth/2 + pt.x * scale.x, y + graphHeight/2 - pt.y * scale.y);
            });
            this.ctx.lineTo(x - graphWidth/2 + solidLiquidLine[solidLiquidLine.length-1].x * scale.x, y - graphHeight/2);
            liquidGasLine.reverse().forEach(pt => {
                this.ctx.lineTo(x - graphWidth/2 + pt.x * scale.x, y + graphHeight/2 - pt.y * scale.y);
            });
            liquidGasLine.reverse();
            this.ctx.closePath();
            this.ctx.fill();

            // Gas region
            this.ctx.fillStyle = 'rgba(231, 76, 60, 0.2)';
            this.ctx.beginPath();
            this.ctx.moveTo(x - graphWidth/2 + liquidGasLine[0].x * scale.x, y + graphHeight/2 - liquidGasLine[0].y * scale.y);
            liquidGasLine.forEach(pt => {
                this.ctx.lineTo(x - graphWidth/2 + pt.x * scale.x, y + graphHeight/2 - pt.y * scale.y);
            });
            this.ctx.lineTo(x + graphWidth/2, y + graphHeight/2 - liquidGasLine[liquidGasLine.length-1].y * scale.y);
            this.ctx.lineTo(x + graphWidth/2, y + graphHeight/2);
            solidGasLine.forEach(pt => {
                this.ctx.lineTo(x - graphWidth/2 + pt.x * scale.x, y + graphHeight/2 - pt.y * scale.y);
            });
            this.ctx.closePath();
            this.ctx.fill();

            // Phase labels
            this.ctx.fillStyle = '#2C3E50';
            this.ctx.font = 'bold 16px Arial';
            this.ctx.textAlign = 'center';
            this.ctx.fillText('SOLID', x - graphWidth/4, y);
            this.ctx.fillText('LIQUID', x, y - graphHeight/4);
            this.ctx.fillText('GAS', x + graphWidth/4, y + graphHeight/4);
        }

        // Draw phase boundaries
        this.ctx.strokeStyle = '#2C3E50';
        this.ctx.lineWidth = 3;

        // Solid-Liquid
        this.ctx.beginPath();
        solidLiquidLine.forEach((pt, index) => {
            const px = x - graphWidth/2 + pt.x * scale.x;
            const py = y + graphHeight/2 - pt.y * scale.y;
            if (index === 0) {
                this.ctx.moveTo(px, py);
            } else {
                this.ctx.lineTo(px, py);
            }
        });
        this.ctx.stroke();

        // Liquid-Gas
        this.ctx.beginPath();
        liquidGasLine.forEach((pt, index) => {
            const px = x - graphWidth/2 + pt.x * scale.x;
            const py = y + graphHeight/2 - pt.y * scale.y;
            if (index === 0) {
                this.ctx.moveTo(px, py);
            } else {
                this.ctx.lineTo(px, py);
            }
        });
        this.ctx.stroke();

        // Solid-Gas
        this.ctx.beginPath();
        solidGasLine.forEach((pt, index) => {
            const px = x - graphWidth/2 + pt.x * scale.x;
            const py = y + graphHeight/2 - pt.y * scale.y;
            if (index === 0) {
                this.ctx.moveTo(px, py);
            } else {
                this.ctx.lineTo(px, py);
            }
        });
        this.ctx.stroke();

        // Triple point
        if (options.showTriplePoint) {
            const tpX = x - graphWidth/2 + solidLiquidLine[0].x * scale.x;
            const tpY = y + graphHeight/2 - solidLiquidLine[0].y * scale.y;

            this.ctx.fillStyle = '#E74C3C';
            this.ctx.beginPath();
            this.ctx.arc(tpX, tpY, 6, 0, Math.PI * 2);
            this.ctx.fill();

            this.ctx.fillStyle = '#E74C3C';
            this.ctx.font = 'bold 12px Arial';
            this.ctx.textAlign = 'left';
            this.ctx.fillText('Triple Point', tpX + 10, tpY - 10);
        }

        // Critical point
        if (options.showCriticalPoint) {
            const cpX = x - graphWidth/2 + liquidGasLine[liquidGasLine.length-1].x * scale.x;
            const cpY = y + graphHeight/2 - liquidGasLine[liquidGasLine.length-1].y * scale.y;

            this.ctx.fillStyle = '#9B59B6';
            this.ctx.beginPath();
            this.ctx.arc(cpX, cpY, 6, 0, Math.PI * 2);
            this.ctx.fill();

            this.ctx.fillStyle = '#9B59B6';
            this.ctx.font = 'bold 12px Arial';
            this.ctx.textAlign = 'right';
            this.ctx.fillText('Critical Point', cpX - 10, cpY - 10);
        }
    }

    /**renderPVDiagram(diagram, x, y, width, height, options) {
        const graphWidth = width - 100;
        const graphHeight = height - 100;

        // Draw axes
        this.ctx.strokeStyle = '#2C3E50';
        this.ctx.lineWidth = 2;
        
        // X-axis (Volume)
        this.ctx.beginPath();
        this.ctx.moveTo(x - graphWidth/2, y + graphHeight/2);
        this.ctx.lineTo(x + graphWidth/2, y + graphHeight/2);
        this.ctx.stroke();

        // Y-axis (Pressure)
        this.ctx.beginPath();
        this.ctx.moveTo(x - graphWidth/2, y - graphHeight/2);
        this.ctx.lineTo(x - graphWidth/2, y + graphHeight/2);
        this.ctx.stroke();

        // Labels
        this.ctx.fillStyle = '#2C3E50';
        this.ctx.font = 'italic 14px Arial';
        this.ctx.textAlign = 'center';
        this.ctx.fillText('Volume (V)', x, y + graphHeight/2 + 35);

        this.ctx.save();
        this.ctx.translate(x - graphWidth/2 - 40, y);
        this.ctx.rotate(-Math.PI/2);
        this.ctx.fillText('Pressure (P)', 0, 0);
        this.ctx.restore();

        const V1 = diagram.initialV;
        const V2 = diagram.finalV;
        const P1 = diagram.initialP;
        const processType = diagram.processType;

        // Calculate P2 based on process type
        let P2;
        if (processType === 'isothermal') {
            // PV = constant
            P2 = (P1 * V1) / V2;
        } else if (processType === 'isobaric') {
            // P = constant
            P2 = P1;
        } else if (processType === 'isochoric') {
            // V = constant (no volume change)
            V2 = V1;
            P2 = P1 * 1.5; // Arbitrary for display
        } else if (processType === 'adiabatic') {
            // PV^γ = constant, γ ≈ 1.4 for diatomic
            const gamma = 1.4;
            P2 = P1 * Math.pow(V1 / V2, gamma);
        }

        // Scale for plotting
        const maxV = Math.max(V1, V2) * 1.2;
        const maxP = Math.max(P1, P2) * 1.2;
        const scaleX = graphWidth / maxV;
        const scaleY = graphHeight / maxP;

        // Draw process curve
        if (options.showCurve) {
            this.ctx.strokeStyle = '#E74C3C';
            this.ctx.lineWidth = 3;
            this.ctx.beginPath();

            if (processType === 'isothermal') {
                // Hyperbolic curve
                for (let i = 0; i <= 100; i++) {
                    const V = V1 + (V2 - V1) * (i / 100);
                    const P = (P1 * V1) / V;
                    const px = x - graphWidth/2 + V * scaleX;
                    const py = y + graphHeight/2 - P * scaleY;

                    if (i === 0) {
                        this.ctx.moveTo(px, py);
                    } else {
                        this.ctx.lineTo(px, py);
                    }
                }
            } else if (processType === 'isobaric') {
                // Horizontal line
                const startX = x - graphWidth/2 + V1 * scaleX;
                const endX = x - graphWidth/2 + V2 * scaleX;
                const py = y + graphHeight/2 - P1 * scaleY;

                this.ctx.moveTo(startX, py);
                this.ctx.lineTo(endX, py);
            } else if (processType === 'isochoric') {
                // Vertical line
                const px = x - graphWidth/2 + V1 * scaleX;
                const startY = y + graphHeight/2 - P1 * scaleY;
                const endY = y + graphHeight/2 - P2 * scaleY;

                this.ctx.moveTo(px, startY);
                this.ctx.lineTo(px, endY);
            } else if (processType === 'adiabatic') {
                // Steeper curve
                const gamma = 1.4;
                for (let i = 0; i <= 100; i++) {
                    const V = V1 + (V2 - V1) * (i / 100);
                    const P = P1 * Math.pow(V1 / V, gamma);
                    const px = x - graphWidth/2 + V * scaleX;
                    const py = y + graphHeight/2 - P * scaleY;

                    if (i === 0) {
                        this.ctx.moveTo(px, py);
                    } else {
                        this.ctx.lineTo(px, py);
                    }
                }
            }

            this.ctx.stroke();
        }

        // Mark initial and final states
        const pt1X = x - graphWidth/2 + V1 * scaleX;
        const pt1Y = y + graphHeight/2 - P1 * scaleY;
        const pt2X = x - graphWidth/2 + V2 * scaleX;
        const pt2Y = y + graphHeight/2 - P2 * scaleY;

        this.ctx.fillStyle = '#27AE60';
        this.ctx.beginPath();
        this.ctx.arc(pt1X, pt1Y, 7, 0, Math.PI * 2);
        this.ctx.fill();

        this.ctx.fillStyle = '#E67E22';
        this.ctx.beginPath();
        this.ctx.arc(pt2X, pt2Y, 7, 0, Math.PI * 2);
        this.ctx.fill();

        if (options.showLabels) {
            this.ctx.fillStyle = '#27AE60';
            this.ctx.font = 'bold 13px Arial';
            this.ctx.textAlign = 'center';
            this.ctx.fillText('Initial', pt1X, pt1Y - 15);
            this.ctx.font = '11px Arial';
            this.ctx.fillText(`(${V1}, ${P1})`, pt1X, pt1Y - 30);

            this.ctx.fillStyle = '#E67E22';
            this.ctx.font = 'bold 13px Arial';
            this.ctx.fillText('Final', pt2X, pt2Y - 15);
            this.ctx.font = '11px Arial';
            this.ctx.fillText(`(${V2}, ${P2.toFixed(1)})`, pt2X, pt2Y - 30);
        }

        // Show work done (area under curve)
        if (options.showWork && processType !== 'isochoric') {
            this.ctx.fillStyle = 'rgba(52, 152, 219, 0.3)';
            this.ctx.beginPath();

            if (processType === 'isothermal') {
                this.ctx.moveTo(pt1X, y + graphHeight/2);
                for (let i = 0; i <= 100; i++) {
                    const V = V1 + (V2 - V1) * (i / 100);
                    const P = (P1 * V1) / V;
                    const px = x - graphWidth/2 + V * scaleX;
                    const py = y + graphHeight/2 - P * scaleY;
                    this.ctx.lineTo(px, py);
                }
                this.ctx.lineTo(pt2X, y + graphHeight/2);
            } else if (processType === 'isobaric') {
                this.ctx.moveTo(pt1X, y + graphHeight/2);
                this.ctx.lineTo(pt1X, pt1Y);
                this.ctx.lineTo(pt2X, pt2Y);
                this.ctx.lineTo(pt2X, y + graphHeight/2);
            } else if (processType === 'adiabatic') {
                const gamma = 1.4;
                this.ctx.moveTo(pt1X, y + graphHeight/2);
                for (let i = 0; i <= 100; i++) {
                    const V = V1 + (V2 - V1) * (i / 100);
                    const P = P1 * Math.pow(V1 / V, gamma);
                    const px = x - graphWidth/2 + V * scaleX;
                    const py = y + graphHeight/2 - P * scaleY;
                    this.ctx.lineTo(px, py);
                }
                this.ctx.lineTo(pt2X, y + graphHeight/2);
            }

            this.ctx.closePath();
            this.ctx.fill();

            // Work label
            this.ctx.fillStyle = '#2C3E50';
            this.ctx.font = 'bold 12px Arial';
            this.ctx.textAlign = 'center';
            this.ctx.fillText('W = Area under curve', x, y + graphHeight/2 + 60);
        }

        // Process type label
        this.ctx.fillStyle = '#2C3E50';
        this.ctx.font = 'bold 16px Arial';
        this.ctx.textAlign = 'center';
        const processName = processType.charAt(0).toUpperCase() + processType.slice(1);
        this.ctx.fillText(`${processName} Process`, x, y - graphHeight/2 - 20);
    }
    */

    renderCarnotCycle(diagram, x, y, width, height, options) {
        const graphWidth = width * 0.5;
        const graphHeight = height * 0.6;
        const pvX = x - width/4;
        const pvY = y;

        // Draw P-V diagram for Carnot cycle
        this.ctx.strokeStyle = '#2C3E50';
        this.ctx.lineWidth = 2;
        
        // Axes
        this.ctx.beginPath();
        this.ctx.moveTo(pvX - graphWidth/2, pvY + graphHeight/2);
        this.ctx.lineTo(pvX + graphWidth/2, pvY + graphHeight/2);
        this.ctx.stroke();

        this.ctx.beginPath();
        this.ctx.moveTo(pvX - graphWidth/2, pvY - graphHeight/2);
        this.ctx.lineTo(pvX - graphWidth/2, pvY + graphHeight/2);
        this.ctx.stroke();

        // Labels
        this.ctx.fillStyle = '#2C3E50';
        this.ctx.font = 'italic 12px Arial';
        this.ctx.textAlign = 'center';
        this.ctx.fillText('V', pvX, pvY + graphHeight/2 + 25);
        this.ctx.save();
        this.ctx.translate(pvX - graphWidth/2 - 25, pvY);
        this.ctx.rotate(-Math.PI/2);
        this.ctx.fillText('P', 0, 0);
        this.ctx.restore();

        if (options.showPVDiagram) {
            // Define Carnot cycle points (simplified)
            const points = [
                { V: 30, P: 80, label: 'A' },
                { V: 70, P: 50, label: 'B' },
                { V: 90, P: 25, label: 'C' },
                { V: 40, P: 40, label: 'D' }
            ];

            const scaleX = graphWidth / 120;
            const scaleY = graphHeight / 100;

            // Draw cycle
            this.ctx.strokeStyle = '#E74C3C';
            this.ctx.lineWidth = 3;

            // 1. Isothermal expansion (A to B) - Hot reservoir
            this.ctx.beginPath();
            for (let i = 0; i <= 20; i++) {
                const t = i / 20;
                const V = points[0].V + (points[1].V - points[0].V) * t;
                const P = (points[0].P * points[0].V) / V;
                const px = pvX - graphWidth/2 + V * scaleX;
                const py = pvY + graphHeight/2 - P * scaleY;
                if (i === 0) this.ctx.moveTo(px, py);
                else this.ctx.lineTo(px, py);
            }
            this.ctx.stroke();

            // 2. Adiabatic expansion (B to C)
            this.ctx.strokeStyle = '#3498DB';
            this.ctx.beginPath();
            for (let i = 0; i <= 20; i++) {
                const t = i / 20;
                const V = points[1].V + (points[2].V - points[1].V) * t;
                const gamma = 1.4;
                const P = points[1].P * Math.pow(points[1].V / V, gamma);
                const px = pvX - graphWidth/2 + V * scaleX;
                const py = pvY + graphHeight/2 - P * scaleY;
                if (i === 0) this.ctx.moveTo(px, py);
                else this.ctx.lineTo(px, py);
            }
            this.ctx.stroke();

            // 3. Isothermal compression (C to D) - Cold reservoir
            this.ctx.strokeStyle = '#9B59B6';
            this.ctx.beginPath();
            for (let i = 0; i <= 20; i++) {
                const t = i / 20;
                const V = points[2].V - (points[2].V - points[3].V) * t;
                const P = (points[2].P * points[2].V) / V;
                const px = pvX - graphWidth/2 + V * scaleX;
                const py = pvY + graphHeight/2 - P * scaleY;
                if (i === 0) this.ctx.moveTo(px, py);
                else this.ctx.lineTo(px, py);
            }
            this.ctx.stroke();

            // 4. Adiabatic compression (D to A)
            this.ctx.strokeStyle = '#27AE60';
            this.ctx.beginPath();
            for (let i = 0; i <= 20; i++) {
                const t = i / 20;
                const V = points[3].V - (points[3].V - points[0].V) * t;
                const gamma = 1.4;
                const P = points[3].P * Math.pow(points[3].V / V, gamma);
                const px = pvX - graphWidth/2 + V * scaleX;
                const py = pvY + graphHeight/2 - P * scaleY;
                if (i === 0) this.ctx.moveTo(px, py);
                else this.ctx.lineTo(px, py);
            }
            this.ctx.stroke();

            // Mark points
            points.forEach(pt => {
                const px = pvX - graphWidth/2 + pt.V * scaleX;
                const py = pvY + graphHeight/2 - pt.P * scaleY;

                this.ctx.fillStyle = '#2C3E50';
                this.ctx.beginPath();
                this.ctx.arc(px, py, 5, 0, Math.PI * 2);
                this.ctx.fill();

                this.ctx.fillStyle = '#2C3E50';
                this.ctx.font = 'bold 14px Arial';
                this.ctx.textAlign = 'center';
                this.ctx.fillText(pt.label, px, py - 15);
            });
        }

        // Show stages
        if (options.showStages) {
            const stageX = x + width/3;
            const stageY = y - height/3;
            const lineHeight = 35;

            this.ctx.fillStyle = '#2C3E50';
            this.ctx.font = 'bold 14px Arial';
            this.ctx.textAlign = 'left';
            this.ctx.fillText('Carnot Cycle Stages:', stageX, stageY);

            this.ctx.font = '12px Arial';

            this.ctx.fillStyle = '#E74C3C';
            this.ctx.fillText('1. Isothermal Expansion (A→B)', stageX, stageY + lineHeight);
            this.ctx.fillStyle = '#666';
            this.ctx.font = '11px Arial';
            this.ctx.fillText('Heat absorbed from hot reservoir', stageX + 10, stageY + lineHeight + 15);

            this.ctx.fillStyle = '#3498DB';
            this.ctx.font = '12px Arial';
            this.ctx.fillText('2. Adiabatic Expansion (B→C)', stageX, stageY + lineHeight * 2 + 15);
            this.ctx.fillStyle = '#666';
            this.ctx.font = '11px Arial';
            this.ctx.fillText('No heat exchange, temp drops', stageX + 10, stageY + lineHeight * 2 + 30);

            this.ctx.fillStyle = '#9B59B6';
            this.ctx.font = '12px Arial';
            this.ctx.fillText('3. Isothermal Compression (C→D)', stageX, stageY + lineHeight * 3 + 30);
            this.ctx.fillStyle = '#666';
            this.ctx.font = '11px Arial';
            this.ctx.fillText('Heat released to cold reservoir', stageX + 10, stageY + lineHeight * 3 + 45);

            this.ctx.fillStyle = '#27AE60';
            this.ctx.font = '12px Arial';
            this.ctx.fillText('4. Adiabatic Compression (D→A)', stageX, stageY + lineHeight * 4 + 45);
            this.ctx.fillStyle = '#666';
            this.ctx.font = '11px Arial';
            this.ctx.fillText('No heat exchange, temp rises', stageX + 10, stageY + lineHeight * 4 + 60);
        }

        // Show efficiency
        if (options.showEfficiency) {
            const Th = diagram.Th;
            const Tc = diagram.Tc;
            const efficiency = ((Th - Tc) / Th) * 100;

            this.ctx.fillStyle = '#16A085';
            this.ctx.font = 'bold 14px Arial';
            this.ctx.textAlign = 'center';
            this.ctx.fillText(`Carnot Efficiency = ${efficiency.toFixed(1)}%`, x, y + height/2 - 20);
            this.ctx.font = '12px Arial';
            this.ctx.fillText(`η = (Th - Tc) / Th = (${Th} - ${Tc}) / ${Th}`, x, y + height/2);
        }
    }

    renderHeatTransfer(diagram, x, y, width, height, options) {
        const sectionWidth = width / 3;

        // Conduction
        const condX = x - width/3;
        
        this.ctx.fillStyle = '#2C3E50';
        this.ctx.font = 'bold 16px Arial';
        this.ctx.textAlign = 'center';
        this.ctx.fillText('Conduction', condX, y - height/3);

        // Hot side
        this.ctx.fillStyle = '#E74C3C';
        this.ctx.fillRect(condX - 60, y - 50, 30, 100);
        
        // Rod
        this.ctx.fillStyle = '#95A5A6';
        this.ctx.fillRect(condX - 30, y - 20, 80, 40);

        // Cold side
        this.ctx.fillStyle = '#3498DB';
        this.ctx.fillRect(condX + 50, y - 50, 30, 100);

        // Heat flow arrows
        if (options.showArrows) {
            for (let i = 0; i < 3; i++) {
                this.drawArrowVector(
                    condX - 35 + i * 25,
                    y,
                    condX - 20 + i * 25,
                    y,
                    '#E67E22',
                    2
                );
            }
        }

        if (options.showLabels) {
            this.ctx.fillStyle = '#E74C3C';
            this.ctx.font = '11px Arial';
            this.ctx.fillText('Hot', condX - 45, y - 60);
            
            this.ctx.fillStyle = '#3498DB';
            this.ctx.fillText('Cold', condX + 65, y - 60);

            this.ctx.fillStyle = '#2C3E50';
            this.ctx.font = '11px Arial';
            this.ctx.textAlign = 'center';
            this.ctx.fillText('Direct contact', condX, y + 80);
            this.ctx.fillText('(e.g., metal rod)', condX, y + 95);
        }

        // Convection
        const convX = x;
        
        this.ctx.fillStyle = '#2C3E50';
        this.ctx.font = 'bold 16px Arial';
        this.ctx.textAlign = 'center';
        this.ctx.fillText('Convection', convX, y - height/3);

        // Container with fluid
        this.ctx.strokeStyle = '#34495E';
        this.ctx.lineWidth = 3;
        this.ctx.strokeRect(convX - 60, y - 60, 120, 120);

        // Fluid
        this.ctx.fillStyle = 'rgba(52, 152, 219, 0.3)';
        this.ctx.fillRect(convX - 58, y - 58, 116, 116);

        // Heat source at bottom
        this.ctx.fillStyle = '#E74C3C';
        this.ctx.fillRect(convX - 40, y + 62, 80, 15);

        // Convection currents
        if (options.showArrows) {
            // Rising hot fluid
            this.ctx.strokeStyle = '#E74C3C';
            this.ctx.lineWidth = 2;
            this.ctx.setLineDash([5, 5]);
            this.ctx.beginPath();
            this.ctx.moveTo(convX - 20, y + 50);
            this.ctx.lineTo(convX - 20, y - 40);
            this.ctx.lineTo(convX + 30, y - 40);
            this.ctx.stroke();

            // Falling cool fluid
            this.ctx.strokeStyle = '#3498DB';
            this.ctx.beginPath();
            this.ctx.moveTo(convX + 30, y - 40);
            this.ctx.lineTo(convX + 30, y + 50);
            this.ctx.lineTo(convX - 20, y + 50);
            this.ctx.stroke();
            this.ctx.setLineDash([]);

            // Arrows
            this.drawArrowVector(convX - 20, y + 20, convX - 20, y - 10, '#E74C3C', 2);
            this.drawArrowVector(convX + 30, y - 10, convX + 30, y + 20, '#3498DB', 2);
        }

        if (options.showLabels) {
            this.ctx.fillStyle = '#2C3E50';
            this.ctx.font = '11px Arial';
            this.ctx.textAlign = 'center';
            this.ctx.fillText('Fluid movement', convX, y + 95);
            this.ctx.fillText('(e.g., boiling water)', convX, y + 110);
        }

        // Radiation
        const radX = x + width/3;
        
        this.ctx.fillStyle = '#2C3E50';
        this.ctx.font = 'bold 16px Arial';
        this.ctx.textAlign = 'center';
        this.ctx.fillText('Radiation', radX, y - height/3);

        // Hot object (sun)
        this.ctx.fillStyle = '#F39C12';
        this.ctx.beginPath();
        this.ctx.arc(radX - 40, y, 25, 0, Math.PI * 2);
        this.ctx.fill();

        // Sun rays
        for (let i = 0; i < 8; i++) {
            const angle = (i / 8) * Math.PI * 2;
            const x1 = radX - 40 + Math.cos(angle) * 30;
            const y1 = y + Math.sin(angle) * 30;
            const x2 = radX - 40 + Math.cos(angle) * 40;
            const y2 = y + Math.sin(angle) * 40;

            this.ctx.strokeStyle = '#F39C12';
            this.ctx.lineWidth = 2;
            this.ctx.beginPath();
            this.ctx.moveTo(x1, y1);
            this.ctx.lineTo(x2, y2);
            this.ctx.stroke();
        }

        // EM waves
        if (options.showArrows) {
            for (let i = 0; i < 4; i++) {
                const waveY = y - 30 + i * 20;
                
                this.ctx.strokeStyle = '#E67E22';
                this.ctx.lineWidth = 2;
                this.ctx.beginPath();
                
                for (let j = 0; j < 30; j++) {
                    const waveX = radX - 10 + j * 2;
                    const waveAmp = 8 * Math.sin(j * 0.5);
                    
                    if (j === 0) {
                        this.ctx.moveTo(waveX, waveY + waveAmp);
                    } else {
                        this.ctx.lineTo(waveX, waveY + waveAmp);
                    }
                }
                this.ctx.stroke();

                // Arrow at end
                this.drawArrowVector(radX + 45, waveY, radX + 55, waveY, '#E67E22', 1.5);
            }
        }

        // Receiving object
        this.ctx.fillStyle = '#95A5A6';
        this.ctx.fillRect(radX + 50, y - 25, 30, 50);

        if (options.showLabels) {
            this.ctx.fillStyle = '#2C3E50';
            this.ctx.font = '11px Arial';
            this.ctx.textAlign = 'center';
            this.ctx.fillText('No medium needed', radX, y + 80);
            this.ctx.fillText('(e.g., Sun → Earth)', radX, y + 95);
        }
    }

    renderKineticTheory(diagram, x, y, size, options) {
        const containerSize = size * 0.9;
        
        // Draw container
        this.ctx.strokeStyle = '#34495E';
        this.ctx.lineWidth = 3;
        this.ctx.strokeRect(x - containerSize/2, y - containerSize/2, containerSize, containerSize);

        // Background
        this.ctx.fillStyle = 'rgba(236, 240, 241, 0.3)';
        this.ctx.fillRect(x - containerSize/2, y - containerSize/2, containerSize, containerSize);

        // Draw particles
        const numParticles = diagram.numParticles;
        const temperature = diagram.temperature;
        const speedFactor = Math.sqrt(temperature / 300); // Relative to room temp

        for (let i = 0; i < numParticles; i++) {
            // Random position
            const px = x - containerSize/2 + Math.random() * containerSize;
            const py = y - containerSize/2 + Math.random() * containerSize;

            // Draw particle
            this.ctx.fillStyle = '#3498DB';
            this.ctx.beginPath();
            this.ctx.arc(px, py, 5, 0, Math.PI * 2);
            this.ctx.fill();

            // Velocity vector
            if (options.showVelocityVectors) {
                const angle = Math.random() * Math.PI * 2;
                const speed = (10 + Math.random() * 15) * speedFactor;
                const vx = speed * Math.cos(angle);
                const vy = speed * Math.sin(angle);

                this.drawArrowVector(px, py, px + vx, py + vy, '#E74C3C', 1.5);
            }
        }

        // Temperature label
        this.ctx.fillStyle = '#2C3E50';
        this.ctx.font = 'bold 14px Arial';
        this.ctx.textAlign = 'center';
        this.ctx.fillText(`Temperature: ${temperature}K`, x, y - containerSize/2 - 20);

        // Info
        this.ctx.font = '12px Arial';
        this.ctx.fillText('Particles in random motion', x, y + containerSize/2 + 25);
        this.ctx.fillText('KE ∝ Temperature', x, y + containerSize/2 + 42);
    }

    // ========== ELECTRICITY & MAGNETISM RENDERERS ==========

    renderElectricField(diagram, x, y, width, height, options) {
        const charges = diagram.charges;

        // Draw field lines
        if (options.showFieldLines) {
            const numLines = options.numLines || 16;

            charges.forEach(charge => {
                const chargeX = x + charge.x;
                const chargeY = y + charge.y;
                const sign = charge.charge > 0 ? 1 : -1;

                for (let i = 0; i < numLines; i++) {
                    const angle = (i / numLines) * 2 * Math.PI;
                    
                    this.ctx.strokeStyle = sign > 0 ? '#E74C3C' : '#3498DB';
                    this.ctx.lineWidth = 1.5;
                    this.ctx.beginPath();

                    let currentX = chargeX + 15 * Math.cos(angle);
                    let currentY = chargeY + 15 * Math.sin(angle);
                    this.ctx.moveTo(currentX, currentY);

                    // Draw field line
                    for (let step = 0; step < 50; step++) {
                        // Calculate field direction at current point
                        let Ex = 0, Ey = 0;

                        charges.forEach(q => {
                            const qx = x + q.x;
                            const qy = y + q.y;
                            const dx = currentX - qx;
                            const dy = currentY - qy;
                            const r2 = dx * dx + dy * dy;
                            const r = Math.sqrt(r2);

                            if (r > 5) {
                                const E = q.charge / r2;
                                Ex += E * (dx / r);
                                Ey += E * (dy / r);
                            }
                        });

                        const Emag = Math.sqrt(Ex * Ex + Ey * Ey);
                        if (Emag > 0) {
                            const stepSize = 5;
                            currentX += (Ex / Emag) * stepSize * sign;
                            currentY += (Ey / Emag) * stepSize * sign;

                            // Check if out of bounds
                            if (Math.abs(currentX - x) > width/2 || Math.abs(currentY - y) > height/2) {
                                break;
                            }

                            // Check if too close to opposite charge
                            let tooClose = false;
                            charges.forEach(q => {
                                if (q.charge * sign < 0) {
                                    const dist = Math.sqrt((currentX - (x + q.x))**2 + (currentY - (y + q.y))**2);
                                    if (dist < 15) tooClose = true;
                                }
                            });

                            if (tooClose) break;

                            this.ctx.lineTo(currentX, currentY);
                        } else {
                            break;
                        }
                    }

                    this.ctx.stroke();

                    // Arrow at end
                    if (sign > 0) {
                        this.ctx.fillStyle = '#E74C3C';
                        this.ctx.beginPath();
                        this.ctx.arc(currentX, currentY, 3, 0, Math.PI * 2);
                        this.ctx.fill();
                    }
                }
            });
        }

        // Draw charges
        if (options.showCharges) {
            charges.forEach(charge => {
                const chargeX = x + charge.x;
                const chargeY = y + charge.y;
                const sign = charge.charge > 0 ? 1 : -1;

                // Charge circle
                const gradient = this.ctx.createRadialGradient(chargeX, chargeY, 0, chargeX, chargeY, 15);
                if (sign > 0) {
                    gradient.addColorStop(0, '#FFCCCC');
                    gradient.addColorStop(1, '#E74C3C');
                } else {
                    gradient.addColorStop(0, '#CCE5FF');
                    gradient.addColorStop(1, '#3498DB');
                }

                this.ctx.fillStyle = gradient;
                this.ctx.beginPath();
                this.ctx.arc(chargeX, chargeY, 15, 0, Math.PI * 2);
                this.ctx.fill();

                this.ctx.strokeStyle = sign > 0 ? '#C0392B' : '#2980B9';
                this.ctx.lineWidth = 2;
                this.ctx.stroke();

                // Sign
                this.ctx.fillStyle = '#FFFFFF';
                this.ctx.font = 'bold 18px Arial';
                this.ctx.textAlign = 'center';
                this.ctx.textBaseline = 'middle';
                this.ctx.fillText(sign > 0 ? '+' : '−', chargeX, chargeY);

                // Label
                if (charge.label) {
                    this.ctx.fillStyle = '#2C3E50';
                    this.ctx.font = 'bold 12px Arial';
                    this.ctx.fillText(charge.label, chargeX, chargeY - 25);
                }
            });
        }
    }

    renderCircuitDiagram(diagram, x, y, width, height, options) {
        const components = diagram.components;
        const config = diagram.configuration;

        if (config === 'series') {
            // Draw series circuit
            const spacing = width / (components.length + 1);
            const circuitY = y;

            // Top wire
            this.ctx.strokeStyle = '#2C3E50';
            this.ctx.lineWidth = 3;
            this.ctx.beginPath();
            this.ctx.moveTo(x - width/2, circuitY - 60);
            this.ctx.lineTo(x + width/2, circuitY - 60);
            this.ctx.stroke();

            // Bottom wire
            this.ctx.beginPath();
            this.ctx.moveTo(x - width/2, circuitY + 60);
            this.ctx.lineTo(x + width/2, circuitY + 60);
            this.ctx.stroke();

            // Components
            components.forEach((comp, index) => {
                const compX = x - width/2 + (index + 1) * spacing;

                // Connecting wires
                this.ctx.beginPath();
                this.ctx.moveTo(compX, circuitY - 60);
                this.ctx.lineTo(compX, circuitY - 30);
                this.ctx.stroke();

                this.ctx.beginPath();
                this.ctx.moveTo(compX, circuitY + 30);
                this.ctx.lineTo(compX, circuitY + 60);
                this.ctx.stroke();

                // Draw component symbol
                this.drawCircuitComponent(comp, compX, circuitY, options);
            });

            // Current direction
            if (options.showCurrent) {
                this.drawArrowVector(
                    x + width/2 - 40,
                    circuitY - 60,
                    x + width/2 - 10,
                    circuitY - 60,
                    '#E74C3C',
                    2
                );

                this.ctx.fillStyle = '#E74C3C';
                this.ctx.font = 'bold 12px Arial';
                this.ctx.textAlign = 'center';
                this.ctx.fillText('I', x + width/2 - 25, circuitY - 70);
            }
        }
    }

    drawCircuitComponent(component, x, y, options) {
        switch (component.type) {
            case 'battery':
                // Battery symbol
                this.ctx.strokeStyle = '#2C3E50';
                this.ctx.lineWidth = 3;

                // Positive terminal (longer line)
                this.ctx.beginPath();
                this.ctx.moveTo(x - 20, y - 10);
                this.ctx.lineTo(x + 20, y - 10);
                this.ctx.stroke();

                // Negative terminal (shorter line)
                this.ctx.lineWidth = 3;
                this.ctx.beginPath();
                this.ctx.moveTo(x - 12, y + 10);
                this.ctx.lineTo(x + 12, y + 10);
                this.ctx.stroke();

                // Connecting lines
                this.ctx.lineWidth = 3;
                this.ctx.beginPath();
                this.ctx.moveTo(x, y - 10);
                this.ctx.lineTo(x, y - 30);
                this.ctx.stroke();

                this.ctx.beginPath();
                this.ctx.moveTo(x, y + 10);
                this.ctx.lineTo(x, y + 30);
                this.ctx.stroke();

                // Labels
                if (options.showValues) {
                    this.ctx.fillStyle = '#E74C3C';
                    this.ctx.font = '14px Arial';
                    this.ctx.textAlign = 'left';
                    this.ctx.fillText('+', x + 25, y - 5);
                    
                    this.ctx.fillStyle = '#2C3E50';
                    this.ctx.font = '11px Arial';
                    this.ctx.textAlign = 'center';
                    this.ctx.fillText(`${component.voltage}V`, x + 40, y);
                }
                break;

            case 'resistor':
                // Resistor symbol (zigzag)
                this.ctx.strokeStyle = '#2C3E50';
                this.ctx.lineWidth = 3;

                this.ctx.beginPath();
                this.ctx.moveTo(x, y - 30);
                this.ctx.lineTo(x, y - 20);
                this.ctx.lineTo(x - 8, y - 15);
                this.ctx.lineTo(x + 8, y - 5);
                this.ctx.lineTo(x - 8, y + 5);
                this.ctx.lineTo(x + 8, y + 15);
                this.ctx.lineTo(x, y + 20);
                this.ctx.lineTo(x, y + 30);
                this.ctx.stroke();

                // Label
                if (options.showValues) {
                    this.ctx.fillStyle = '#2C3E50';
                    this.ctx.font = '11px Arial';
                    this.ctx.textAlign = 'left';
                    this.ctx.fillText(`${component.resistance}Ω`, x + 15, y);
                }
                break;

            case 'capacitor':
                // Capacitor symbol (two parallel lines)
                this.ctx.strokeStyle = '#2C3E50';
                this.ctx.lineWidth = 3;

                this.ctx.beginPath();
                this.ctx.moveTo(x, y - 30);
                this.ctx.lineTo(x, y - 5);
                this.ctx.stroke();

                this.ctx.beginPath();
                this.ctx.moveTo(x - 15, y - 5);
                this.ctx.lineTo(x + 15, y - 5);
                this.ctx.stroke();

                this.ctx.beginPath();
                this.ctx.moveTo(x - 15, y + 5);
                this.ctx.lineTo(x + 15, y + 5);
                this.ctx.stroke();

                this.ctx.beginPath();
                this.ctx.moveTo(x, y + 5);
                this.ctx.lineTo(x, y + 30);
                this.ctx.stroke();

                // Label
                if (options.showValues) {
                    this.ctx.fillStyle = '#2C3E50';
                    this.ctx.font = '11px Arial';
                    this.ctx.textAlign = 'left';
                    this.ctx.fillText(`${component.capacitance}μF`, x + 20, y);
                }
                break;

            case 'switch':
                // Switch symbol
                this.ctx.strokeStyle = '#2C3E50';
                this.ctx.lineWidth = 3;

                this.ctx.beginPath();
                this.ctx.moveTo(x, y - 30);
                this.ctx.lineTo(x, y - 10);
                this.ctx.stroke();

                // Switch lever
                if (component.state === 'closed') {
                    this.ctx.beginPath();
                    this.ctx.moveTo(x, y - 10);
                    this.ctx.lineTo(x, y + 10);
                    this.ctx.stroke();
                } else {
                    this.ctx.beginPath();
                    this.ctx.moveTo(x, y - 10);
                    this.ctx.lineTo(x + 15, y);
                    this.ctx.stroke();
                }

                this.ctx.beginPath();
                this.ctx.moveTo(x, y + 10);
                this.ctx.lineTo(x, y + 30);
                this.ctx.stroke();

                // Terminals
                this.ctx.fillStyle = '#2C3E50';
                this.ctx.beginPath();
                this.ctx.arc(x, y - 10, 3, 0, Math.PI * 2);
                this.ctx.fill();
                this.ctx.beginPath();
                this.ctx.arc(x, y + 10, 3, 0, Math.PI * 2);
                this.ctx.fill();

                // Label
                if (options.showValues) {
                    this.ctx.fillStyle = '#2C3E50';
                    this.ctx.font = '11px Arial';
                    this.ctx.textAlign = 'left';
                    this.ctx.fillText(component.state, x + 20, y);
                }
                break;
        }

        // Component name
        if (options.showSymbols) {
            this.ctx.fillStyle = '#7F8C8D';
            this.ctx.font = '10px Arial';
            this.ctx.textAlign = 'center';
            this.ctx.fillText(component.type, x, y + 50);
        }
    }

    renderSeriesParallel(diagram, x, y, width, height, options) {
        const voltage = diagram.voltage;
        const resistors = diagram.resistors;

        // Series circuit (top)
        const seriesY = y - height/4;
        
        this.ctx.fillStyle = '#2C3E50';
        this.ctx.font = 'bold 16px Arial';
        this.ctx.textAlign = 'center';
        this.ctx.fillText('Series Circuit', x, seriesY - 80);

        // Draw series circuit
        const seriesSpacing = (width * 0.6) / (resistors.length + 1);

        // Top wire
        this.ctx.strokeStyle = '#2C3E50';
        this.ctx.lineWidth = 3;
        this.ctx.beginPath();
        this.ctx.moveTo(x - width/3, seriesY);
        this.ctx.lineTo(x + width/3, seriesY);
        this.ctx.stroke();

        // Bottom wire
        this.ctx.beginPath();
        this.ctx.moveTo(x - width/3, seriesY + 60);
        this.ctx.lineTo(x + width/3, seriesY + 60);
        this.ctx.stroke();

        // Battery
        this.drawBatterySymbol(x - width/3, seriesY + 30, voltage, false);

        // Resistors
        resistors.forEach((R, index) => {
            const rx = x - width/3 + (index + 1) * seriesSpacing;
            this.drawResistorSymbol(rx, seriesY + 30, R, true);
        });

        // Calculations
        if (options.showCalculations) {
            const Rtotal = resistors.reduce((sum, R) => sum + R, 0);
            const I = voltage / Rtotal;

            this.ctx.fillStyle = '#16A085';
            this.ctx.font = '12px Arial';
            this.ctx.textAlign = 'left';
            this.ctx.fillText(`R_total = ${Rtotal}Ω`, x - width/2 + 20, seriesY + 90);
            this.ctx.fillText(`I = ${I.toFixed(2)}A (same everywhere)`, x - width/2 + 20, seriesY + 105);
        }

        // Parallel circuit (bottom)
        const parallelY = y + height/4;
        
        this.ctx.fillStyle = '#2C3E50';
        this.ctx.font = 'bold 16px Arial';
        this.ctx.textAlign = 'center';
        this.ctx.fillText('Parallel Circuit', x, parallelY - 80);

        // Main wires
        this.ctx.strokeStyle = '#2C3E50';
        this.ctx.lineWidth = 3;

        // Left vertical
        this.ctx.beginPath();
        this.ctx.moveTo(x - width/3, parallelY - 40);
        this.ctx.lineTo(x - width/3, parallelY + 40);
        this.ctx.stroke();

        // Top horizontal
        this.ctx.beginPath();
        this.ctx.moveTo(x - width/3, parallelY - 40);
        this.ctx.lineTo(x + width/3, parallelY - 40);
        this.ctx.stroke();

        // Bottom horizontal
        this.ctx.beginPath();
        this.ctx.moveTo(x - width/3, parallelY + 40);
        this.ctx.lineTo(x + width/3, parallelY + 40);
        this.ctx.stroke();

        // Right vertical
        this.ctx.beginPath();
        this.ctx.moveTo(x + width/3, parallelY - 40);
        this.ctx.lineTo(x + width/3, parallelY + 40);
        this.ctx.stroke();

        // Battery
        this.drawBatterySymbol(x - width/3 - 40, parallelY, voltage, true);

        // Parallel resistors
        const branchSpacing = 80 / (resistors.length + 1);
        resistors.forEach((R, index) => {
            const ry = parallelY - 40 + (index + 1) * branchSpacing;
            const rx = x;

            // Branch wires
            this.ctx.beginPath();
            this.ctx.moveTo(x - width/3, ry);
            this.ctx.lineTo(x - width/6, ry);
            this.ctx.stroke();

            this.ctx.beginPath();
            this.ctx.moveTo(x + width/6, ry);
            this.ctx.lineTo(x + width/3, ry);
            this.ctx.stroke();

            // Resistor
            this.drawResistorSymbolHorizontal(rx, ry, R);
        });

        // Calculations
        if (options.showCalculations) {
            const invRtotal = resistors.reduce((sum, R) => sum + 1/R, 0);
            const Rtotal = 1 / invRtotal;
            const Itotal = voltage / Rtotal;

            this.ctx.fillStyle = '#16A085';
            this.ctx.font = '12px Arial';
            this.ctx.textAlign = 'left';
            this.ctx.fillText(`R_total = ${Rtotal.toFixed(2)}Ω`, x - width/2 + 20, parallelY + 70);
            this.ctx.fillText(`I_total = ${Itotal.toFixed(2)}A`, x - width/2 + 20, parallelY + 85);
            this.ctx.fillText(`V = ${voltage}V (same across each)`, x - width/2 + 20, parallelY + 100);
        }
    }

    drawBatterySymbol(x, y, voltage, horizontal) {
        this.ctx.strokeStyle = '#2C3E50';
        this.ctx.lineWidth = 3;

        if (horizontal) {
            // Positive (longer)
            this.ctx.beginPath();
            this.ctx.moveTo(x - 15, y - 10);
            this.ctx.lineTo(x - 15, y + 10);
            this.ctx.stroke();

            // Negative (shorter)
            this.ctx.beginPath();
            this.ctx.moveTo(x + 15, y - 6);
            this.ctx.lineTo(x + 15, y + 6);
            this.ctx.stroke();

            // Connecting wires
            this.ctx.beginPath();
            this.ctx.moveTo(x - 25, y);
            this.ctx.lineTo(x - 15, y);
            this.ctx.stroke();

            this.ctx.beginPath();
            this.ctx.moveTo(x + 15, y);
            this.ctx.lineTo(x + 25, y);
            this.ctx.stroke();

            // Label
            this.ctx.fillStyle = '#2C3E50';
            this.ctx.font = '11px Arial';
            this.ctx.textAlign = 'center';
            this.ctx.fillText(`${voltage}V`, x, y - 20);
        } else {
            // Vertical battery
            this.ctx.beginPath();
            this.ctx.moveTo(x - 10, y - 15);
            this.ctx.lineTo(x + 10, y - 15);
            this.ctx.stroke();

            this.ctx.beginPath();
            this.ctx.moveTo(x - 6, y + 15);
            this.ctx.lineTo(x + 6, y + 15);
            this.ctx.stroke();

            this.ctx.beginPath();
            this.ctx.moveTo(x, y - 25);
            this.ctx.lineTo(x, y - 15);
            this.ctx.stroke();

            this.ctx.beginPath();
            this.ctx.moveTo(x, y + 15);
            this.ctx.lineTo(x, y + 25);
            this.ctx.stroke();

            this.ctx.fillStyle = '#2C3E50';
            this.ctx.font = '11px Arial';
            this.ctx.textAlign = 'left';
            this.ctx.fillText(`${voltage}V`, x + 15, y);
        }
    }

    drawResistorSymbol(x, y, resistance, vertical) {
        this.ctx.strokeStyle = '#2C3E50';
        this.ctx.lineWidth = 3;

        if (vertical) {
            this.ctx.beginPath();
            this.ctx.moveTo(x, y - 30);
            this.ctx.lineTo(x, y - 20);
            this.ctx.lineTo(x - 8, y - 15);
            this.ctx.lineTo(x + 8, y - 5);
            this.ctx.lineTo(x - 8, y + 5);
            this.ctx.lineTo(x + 8, y + 15);
            this.ctx.lineTo(x, y + 20);
            this.ctx.lineTo(x, y + 30);
            this.ctx.stroke();

            this.ctx.fillStyle = '#2C3E50';
            this.ctx.font = '11px Arial';
            this.ctx.textAlign = 'left';
            this.ctx.fillText(`${resistance}Ω`, x + 15, y);
        }
    }

    drawResistorSymbolHorizontal(x, y, resistance) {
        this.ctx.strokeStyle = '#2C3E50';
        this.ctx.lineWidth = 3;

        this.ctx.beginPath();
        this.ctx.moveTo(x - 30, y);
        this.ctx.lineTo(x - 20, y);
        this.ctx.lineTo(x - 15, y - 8);
        this.ctx.lineTo(x - 5, y + 8);
        this.ctx.lineTo(x + 5, y - 8);
        this.ctx.lineTo(x + 15, y + 8);
        this.ctx.lineTo(x + 20, y);
        this.ctx.lineTo(x + 30, y);
        this.ctx.stroke();

        this.ctx.fillStyle = '#2C3E50';
        this.ctx.font = '11px Arial';
        this.ctx.textAlign = 'center';
        this.ctx.fillText(`${resistance}Ω`, x, y - 15);
    }

    renderPotentialDistance(diagram, x, y, width, height, options) {
        const graphWidth = width - 100;
        const graphHeight = height - 100;

        // Draw axes
        this.ctx.strokeStyle = '#2C3E50';
        this.ctx.lineWidth = 2;
        
        this.ctx.beginPath();
        this.ctx.moveTo(x - graphWidth/2, y + graphHeight/2);
        this.ctx.lineTo(x + graphWidth/2, y + graphHeight/2);
        this.ctx.stroke();

        this.ctx.beginPath();
        this.ctx.moveTo(x - graphWidth/2, y - graphHeight/2);
        this.ctx.lineTo(x - graphWidth/2, y + graphHeight/2);
        this.ctx.stroke();

        // Labels
        this.ctx.fillStyle = '#2C3E50';
        this.ctx.font = 'italic 14px Arial';
        this.ctx.textAlign = 'center';
        this.ctx.fillText('Distance (r)', x, y + graphHeight/2 + 35);

        this.ctx.save();
        this.ctx.translate(x - graphWidth/2 - 40, y);
        this.ctx.rotate(-Math.PI/2);
        this.ctx.fillText('Electric Potential (V)', 0, 0);
        this.ctx.restore();

        const Q = diagram.chargeQ;
        const k = 9; // Simplified constant

        // Draw potential curve V = kQ/r
        this.ctx.strokeStyle = '#E74C3C';
        this.ctx.lineWidth = 3;
        this.ctx.beginPath();

        for (let i = 5; i <= 100; i++) {
            const r = i;
            const V = (k * Q) / r;
            
            const px = x - graphWidth/2 + (r / 100) * graphWidth;
            const py = y + graphHeight/2 - (V / 2); // Scale for display

            if (i === 5) {
                this.ctx.moveTo(px, py);
            } else {
                this.ctx.lineTo(px, py);
            }
        }
        this.ctx.stroke();

        // Show equation
        if (options.showEquation) {
            this.ctx.fillStyle = '#2C3E50';
            this.ctx.font = 'bold 14px Arial';
            this.ctx.textAlign = 'center';
            this.ctx.fillText('V = kQ/r', x, y - graphHeight/2 - 20);
        }

        // Show asymptote
        this.ctx.strokeStyle = '#95A5A6';
        this.ctx.lineWidth = 1;
        this.ctx.setLineDash([5, 5]);
        this.ctx.beginPath();
        this.ctx.moveTo(x - graphWidth/2, y + graphHeight/2);
        this.ctx.lineTo(x + graphWidth/2, y + graphHeight/2);
        this.ctx.stroke();
        this.ctx.setLineDash([]);

        this.ctx.fillStyle = '#7F8C8D';
        this.ctx.font = '11px Arial';
        this.ctx.textAlign = 'right';
        this.ctx.fillText('V → 0 as r → ∞', x + graphWidth/2 - 10, y + graphHeight/2 - 10);
    }

    renderMagneticField(diagram, x, y, width, height, options) {
        const sourceType = diagram.sourceType;

        if (sourceType === 'bar_magnet') {
            const magnetWidth = 120;
            const magnetHeight = 40;

            // Draw bar magnet
            // North pole (red)
            this.ctx.fillStyle = '#E74C3C';
            this.ctx.fillRect(x - magnetWidth/2, y - magnetHeight/2, magnetWidth/2, magnetHeight);
            this.ctx.strokeStyle = '#C0392B';
            this.ctx.lineWidth = 2;
            this.ctx.strokeRect(x - magnetWidth/2, y - magnetHeight/2, magnetWidth/2, magnetHeight);

            // South pole (blue)
            this.ctx.fillStyle = '#3498DB';
            this.ctx.fillRect(x, y - magnetHeight/2, magnetWidth/2, magnetHeight);
            this.ctx.strokeStyle = '#2980B9';
            this.ctx.strokeRect(x, y - magnetHeight/2, magnetWidth/2, magnetHeight);

            // Labels
            if (options.showPoles) {
                this.ctx.fillStyle = '#FFFFFF';
                this.ctx.font = 'bold 20px Arial';
                this.ctx.textAlign = 'center';
                this.ctx.textBaseline = 'middle';
                this.ctx.fillText('N', x - magnetWidth/4, y);
                this.ctx.fillText('S', x + magnetWidth/4, y);
            }

            // Draw field lines
            if (options.showFieldLines) {
                this.ctx.strokeStyle = '#2C3E50';
                this.ctx.lineWidth = 2;

                const numLines = 6;
                for (let i = 0; i < numLines; i++) {
                    const yOffset = (i - (numLines - 1) / 2) * 20;

                    // External field lines (N to S)
                    this.ctx.beginPath();
                    
                    // Start from North pole
                    const startX = x - magnetWidth/2;
                    const startY = y + yOffset;
                    this.ctx.moveTo(startX, startY);

                    // Curve around
                    const controlX1 = startX - 100;
                    const controlY1 = startY - 60 * Math.sign(yOffset || 1);
                    const controlX2 = x + magnetWidth/2 + 100;
                    const controlY2 = y + yOffset - 60 * Math.sign(yOffset || 1);
                    const endX = x + magnetWidth/2;
                    const endY = y + yOffset;

                    this.ctx.bezierCurveTo(
                        controlX1, controlY1,
                        controlX2, controlY2,
                        endX, endY
                    );
                    this.ctx.stroke();

                    // Arrow
                    const arrowX = (controlX1 + controlX2) / 2;
                    const arrowY = (controlY1 + controlY2) / 2;
                    this.drawArrowVector(arrowX - 10, arrowY, arrowX + 10, arrowY, '#2C3E50', 1.5);
                }

                // Internal field lines (S to N inside magnet)
                this.ctx.strokeStyle = '#7F8C8D';
                this.ctx.setLineDash([3, 3]);
                for (let i = 0; i < 3; i++) {
                    const yOffset = (i - 1) * 12;
                    this.drawArrowVector(
                        x + magnetWidth/4, y + yOffset,
                        x - magnetWidth/4, y + yOffset,
                        '#7F8C8D', 1.5
                    );
                }
                this.ctx.setLineDash([]);
            }

            // Compass needles
            if (options.showCompass) {
                const compassPositions = [
                    { x: x - 150, y: y - 80 },
                    { x: x, y: y - 100 },
                    { x: x + 150, y: y - 80 },
                    { x: x - 150, y: y + 80 },
                    { x: x, y: y + 100 },
                    { x: x + 150, y: y + 80 }
                ];

                compassPositions.forEach(pos => {
                    this.drawCompass(pos.x, pos.y, x, y);
                });
            }
        }
    }

    drawCompass(cx, cy, magnetX, magnetY) {
        // Compass circle
        this.ctx.fillStyle = '#ECF0F1';
        this.ctx.beginPath();
        this.ctx.arc(cx, cy, 12, 0, Math.PI * 2);
        this.ctx.fill();
        this.ctx.strokeStyle = '#95A5A6';
        this.ctx.lineWidth = 1;
        this.ctx.stroke();

        // Calculate field direction
        const angle = Math.atan2(cy - magnetY, cx - magnetX);

        // Needle
        this.ctx.save();
        this.ctx.translate(cx, cy);
        this.ctx.rotate(angle);

        // North end (red)
        this.ctx.fillStyle = '#E74C3C';
        this.ctx.beginPath();
        this.ctx.moveTo(10, 0);
        this.ctx.lineTo(0, -3);
        this.ctx.lineTo(0, 3);
        this.ctx.closePath();
        this.ctx.fill();

        // South end (blue)
        this.ctx.fillStyle = '#3498DB';
        this.ctx.beginPath();
        this.ctx.moveTo(-10, 0);
        this.ctx.lineTo(0, -3);
        this.ctx.lineTo(0, 3);
        this.ctx.closePath();
        this.ctx.fill();

        this.ctx.restore();
    }



// ========== ELECTRICITY & MAGNETISM RENDERERS (CONTINUED) ==========

    renderEMInduction(diagram, x, y, width, height, options) {
        const coilX = x + width/4;
        const coilY = y;
        const magnetX = x - width/4;
        const magnetY = y;

        // Draw coil
        if (options.showCoil) {
            const coilWidth = 80;
            const coilHeight = 120;
            const numTurns = diagram.coilTurns;

            this.ctx.strokeStyle = '#E67E22';
            this.ctx.lineWidth = 3;

            for (let i = 0; i < numTurns; i++) {
                const yOffset = (i - (numTurns - 1) / 2) * (coilHeight / numTurns);
                
                // Draw coil loop
                this.ctx.beginPath();
                this.ctx.ellipse(
                    coilX, 
                    coilY + yOffset, 
                    coilWidth / 2, 
                    coilHeight / (numTurns * 2), 
                    0, 
                    0, 
                    Math.PI * 2
                );
                this.ctx.stroke();
            }

            // Coil connections
            this.ctx.beginPath();
            this.ctx.moveTo(coilX - coilWidth/2, coilY - coilHeight/2);
            this.ctx.lineTo(coilX - coilWidth/2 - 30, coilY - coilHeight/2);
            this.ctx.stroke();

            this.ctx.beginPath();
            this.ctx.moveTo(coilX - coilWidth/2, coilY + coilHeight/2);
            this.ctx.lineTo(coilX - coilWidth/2 - 30, coilY + coilHeight/2);
            this.ctx.stroke();

            // Galvanometer/ammeter
            this.ctx.strokeStyle = '#2C3E50';
            this.ctx.lineWidth = 2;
            this.ctx.beginPath();
            this.ctx.arc(coilX - coilWidth/2 - 60, coilY, 25, 0, Math.PI * 2);
            this.ctx.stroke();

            this.ctx.fillStyle = '#2C3E50';
            this.ctx.font = 'bold 16px Arial';
            this.ctx.textAlign = 'center';
            this.ctx.fillText('G', coilX - coilWidth/2 - 60, coilY + 5);
        }

        // Draw magnet
        if (options.showMagnet) {
            const magnetWidth = 40;
            const magnetHeight = 100;

            // North pole
            this.ctx.fillStyle = '#E74C3C';
            this.ctx.fillRect(
                magnetX - magnetWidth/2, 
                magnetY - magnetHeight/2, 
                magnetWidth, 
                magnetHeight/2
            );
            this.ctx.strokeStyle = '#C0392B';
            this.ctx.lineWidth = 2;
            this.ctx.strokeRect(
                magnetX - magnetWidth/2, 
                magnetY - magnetHeight/2, 
                magnetWidth, 
                magnetHeight/2
            );

            // South pole
            this.ctx.fillStyle = '#3498DB';
            this.ctx.fillRect(
                magnetX - magnetWidth/2, 
                magnetY, 
                magnetWidth, 
                magnetHeight/2
            );
            this.ctx.strokeStyle = '#2980B9';
            this.ctx.strokeRect(
                magnetX - magnetWidth/2, 
                magnetY, 
                magnetWidth, 
                magnetHeight/2
            );

            // Labels
            this.ctx.fillStyle = '#FFFFFF';
            this.ctx.font = 'bold 20px Arial';
            this.ctx.textAlign = 'center';
            this.ctx.fillText('N', magnetX, magnetY - magnetHeight/4);
            this.ctx.fillText('S', magnetX, magnetY + magnetHeight/4);

            // Motion arrow
            if (diagram.magnetMoving) {
                this.drawArrowVector(
                    magnetX, magnetY - magnetHeight/2 - 20,
                    magnetX, magnetY - magnetHeight/2 - 60,
                    '#9B59B6', 3
                );

                this.ctx.fillStyle = '#9B59B6';
                this.ctx.font = 'bold 14px Arial';
                this.ctx.fillText('v', magnetX + 15, magnetY - magnetHeight/2 - 40);
            }
        }

        // Show magnetic field lines
        if (options.showFlux) {
            this.ctx.strokeStyle = 'rgba(231, 76, 60, 0.5)';
            this.ctx.lineWidth = 2;
            this.ctx.setLineDash([5, 5]);

            for (let i = -2; i <= 2; i++) {
                const yOffset = i * 20;
                this.ctx.beginPath();
                this.ctx.moveTo(magnetX + 30, magnetY + yOffset);
                this.ctx.lineTo(coilX - 50, magnetY + yOffset);
                this.ctx.stroke();

                // Field direction arrows
                this.drawArrowVector(
                    magnetX + 60, magnetY + yOffset,
                    magnetX + 75, magnetY + yOffset,
                    'rgba(231, 76, 60, 0.7)', 1.5
                );
            }

            this.ctx.setLineDash([]);
        }

        // Show induced current
        if (options.showCurrent && diagram.magnetMoving) {
            this.ctx.strokeStyle = '#27AE60';
            this.ctx.lineWidth = 2;

            // Current flow arrows in coil
            this.drawArrowVector(
                coilX - 50, coilY - 40,
                coilX - 35, coilY - 40,
                '#27AE60', 2
            );

            this.ctx.fillStyle = '#27AE60';
            this.ctx.font = 'bold 12px Arial';
            this.ctx.textAlign = 'center';
            this.ctx.fillText('Induced I', coilX, coilY - 80);
        }

        // Faraday's Law
        this.ctx.fillStyle = '#2C3E50';
        this.ctx.font = 'bold 14px Arial';
        this.ctx.textAlign = 'center';
        this.ctx.fillText("Faraday's Law: ε = -N(dΦ/dt)", x, y + height/2 - 20);
    }

    renderTransformer(diagram, x, y, width, height, options) {
        const coreWidth = 100;
        const coreHeight = 200;
        const coilWidth = 60;

        // Draw iron core
        if (options.showCore) {
            this.ctx.fillStyle = '#7F8C8D';
            this.ctx.fillRect(x - coreWidth/2, y - coreHeight/2, coreWidth, coreHeight);
            this.ctx.strokeStyle = '#5D6D7E';
            this.ctx.lineWidth = 3;
            this.ctx.strokeRect(x - coreWidth/2, y - coreHeight/2, coreWidth, coreHeight);

            // Laminations (lines)
            this.ctx.strokeStyle = '#95A5A6';
            this.ctx.lineWidth = 1;
            for (let i = 0; i < 10; i++) {
                const lineY = y - coreHeight/2 + (i * coreHeight / 10);
                this.ctx.beginPath();
                this.ctx.moveTo(x - coreWidth/2, lineY);
                this.ctx.lineTo(x + coreWidth/2, lineY);
                this.ctx.stroke();
            }
        }

        // Primary coil (left)
        const primaryX = x - coreWidth/2 - coilWidth/2;
        const primaryTurns = diagram.primaryTurns;

        if (options.showTurns) {
            this.ctx.strokeStyle = '#E74C3C';
            this.ctx.lineWidth = 3;

            const turnHeight = coreHeight / Math.max(primaryTurns, 10);
            for (let i = 0; i < Math.min(primaryTurns / 10, 10); i++) {
                const turnY = y - coreHeight/2 + (i + 0.5) * turnHeight * 10;
                
                // Draw coil representation
                this.ctx.beginPath();
                this.ctx.arc(primaryX, turnY - 10, 15, 0, Math.PI);
                this.ctx.stroke();
                this.ctx.beginPath();
                this.ctx.arc(primaryX, turnY + 10, 15, Math.PI, 0);
                this.ctx.stroke();
            }

            // Primary connections
            this.ctx.beginPath();
            this.ctx.moveTo(primaryX - 30, y - coreHeight/2 - 20);
            this.ctx.lineTo(primaryX, y - coreHeight/2 - 20);
            this.ctx.lineTo(primaryX, y - coreHeight/2);
            this.ctx.stroke();

            this.ctx.beginPath();
            this.ctx.moveTo(primaryX, y + coreHeight/2);
            this.ctx.lineTo(primaryX, y + coreHeight/2 + 20);
            this.ctx.lineTo(primaryX - 30, y + coreHeight/2 + 20);
            this.ctx.stroke();

            // AC source symbol
            this.ctx.strokeStyle = '#E74C3C';
            this.ctx.beginPath();
            this.ctx.arc(primaryX - 60, y, 25, 0, Math.PI * 2);
            this.ctx.stroke();

            // Sine wave inside
            this.ctx.beginPath();
            for (let i = 0; i <= 20; i++) {
                const angle = (i / 20) * Math.PI * 2;
                const sx = primaryX - 60 - 15 + (i / 20) * 30;
                const sy = y + 10 * Math.sin(angle);
                if (i === 0) this.ctx.moveTo(sx, sy);
                else this.ctx.lineTo(sx, sy);
            }
            this.ctx.stroke();
        }

        // Secondary coil (right)
        const secondaryX = x + coreWidth/2 + coilWidth/2;
        const secondaryTurns = diagram.secondaryTurns;

        if (options.showTurns) {
            this.ctx.strokeStyle = '#3498DB';
            this.ctx.lineWidth = 3;

            const turnHeight = coreHeight / Math.max(secondaryTurns, 10);
            for (let i = 0; i < Math.min(secondaryTurns / 10, 10); i++) {
                const turnY = y - coreHeight/2 + (i + 0.5) * turnHeight * 10;
                
                this.ctx.beginPath();
                this.ctx.arc(secondaryX, turnY - 10, 15, 0, Math.PI);
                this.ctx.stroke();
                this.ctx.beginPath();
                this.ctx.arc(secondaryX, turnY + 10, 15, Math.PI, 0);
                this.ctx.stroke();
            }

            // Secondary connections
            this.ctx.beginPath();
            this.ctx.moveTo(secondaryX, y - coreHeight/2);
            this.ctx.lineTo(secondaryX, y - coreHeight/2 - 20);
            this.ctx.lineTo(secondaryX + 30, y - coreHeight/2 - 20);
            this.ctx.stroke();

            this.ctx.beginPath();
            this.ctx.moveTo(secondaryX + 30, y + coreHeight/2 + 20);
            this.ctx.lineTo(secondaryX, y + coreHeight/2 + 20);
            this.ctx.lineTo(secondaryX, y + coreHeight/2);
            this.ctx.stroke();

            // Load resistor
            this.ctx.strokeStyle = '#3498DB';
            this.drawResistorSymbolHorizontal(secondaryX + 60, y, 100);
        }

        // Voltages
        if (options.showVoltages) {
            const Vp = diagram.inputVoltage;
            const Vs = (diagram.secondaryTurns / diagram.primaryTurns) * Vp;

            this.ctx.fillStyle = '#E74C3C';
            this.ctx.font = 'bold 14px Arial';
            this.ctx.textAlign = 'center';
            this.ctx.fillText(`Vp = ${Vp}V`, primaryX - 60, y - 50);
            this.ctx.font = '11px Arial';
            this.ctx.fillText(`Np = ${primaryTurns}`, primaryX - 60, y + 50);

            this.ctx.fillStyle = '#3498DB';
            this.ctx.font = 'bold 14px Arial';
            this.ctx.fillText(`Vs = ${Vs}V`, secondaryX + 60, y - 50);
            this.ctx.font = '11px Arial';
            this.ctx.fillText(`Ns = ${secondaryTurns}`, secondaryX + 60, y + 50);

            // Transformer equation
            this.ctx.fillStyle = '#2C3E50';
            this.ctx.font = 'bold 14px Arial';
            this.ctx.textAlign = 'center';
            this.ctx.fillText('Vs/Vp = Ns/Np', x, y + height/2 - 20);
        }

        // Labels
        this.ctx.fillStyle = '#2C3E50';
        this.ctx.font = 'bold 12px Arial';
        this.ctx.textAlign = 'center';
        this.ctx.fillText('Primary', primaryX, y - coreHeight/2 - 50);
        this.ctx.fillText('Secondary', secondaryX, y - coreHeight/2 - 50);
    }

    renderCapacitorCurve(diagram, x, y, width, height, options) {
        const graphWidth = width - 100;
        const graphHeight = height - 100;

        // Draw axes
        this.ctx.strokeStyle = '#2C3E50';
        this.ctx.lineWidth = 2;
        
        this.ctx.beginPath();
        this.ctx.moveTo(x - graphWidth/2, y + graphHeight/2);
        this.ctx.lineTo(x + graphWidth/2, y + graphHeight/2);
        this.ctx.stroke();

        this.ctx.beginPath();
        this.ctx.moveTo(x - graphWidth/2, y - graphHeight/2);
        this.ctx.lineTo(x - graphWidth/2, y + graphHeight/2);
        this.ctx.stroke();

        // Labels
        this.ctx.fillStyle = '#2C3E50';
        this.ctx.font = 'italic 14px Arial';
        this.ctx.textAlign = 'center';
        this.ctx.fillText('Time (s)', x, y + graphHeight/2 + 35);

        this.ctx.save();
        this.ctx.translate(x - graphWidth/2 - 40, y);
        this.ctx.rotate(-Math.PI/2);
        if (diagram.curveType === 'charging') {
            this.ctx.fillText('Voltage / Charge', 0, 0);
        } else {
            this.ctx.fillText('Voltage / Charge', 0, 0);
        }
        this.ctx.restore();

        const C = diagram.capacitance / 1000000; // Convert to F
        const R = diagram.resistance;
        const V0 = diagram.voltage;
        const tau = R * C; // Time constant

        // Draw curve
        this.ctx.strokeStyle = '#E74C3C';
        this.ctx.lineWidth = 3;
        this.ctx.beginPath();

        const maxTime = tau * 5; // Show 5 time constants

        for (let i = 0; i <= 100; i++) {
            const t = (i / 100) * maxTime;
            let V;

            if (diagram.curveType === 'charging') {
                V = V0 * (1 - Math.exp(-t / tau));
            } else {
                V = V0 * Math.exp(-t / tau);
            }

            const px = x - graphWidth/2 + (t / maxTime) * graphWidth;
            const py = y + graphHeight/2 - (V / V0) * graphHeight * 0.9;

            if (i === 0) {
                this.ctx.moveTo(px, py);
            } else {
                this.ctx.lineTo(px, py);
            }
        }
        this.ctx.stroke();

        // Show time constant
        if (options.showTimeConstant) {
            const tauX = x - graphWidth/2 + (tau / maxTime) * graphWidth;
            const tauV = diagram.curveType === 'charging' ? 
                V0 * (1 - Math.exp(-1)) : 
                V0 * Math.exp(-1);
            const tauY = y + graphHeight/2 - (tauV / V0) * graphHeight * 0.9;

            // Vertical line
            this.ctx.strokeStyle = '#9B59B6';
            this.ctx.lineWidth = 2;
            this.ctx.setLineDash([5, 5]);
            this.ctx.beginPath();
            this.ctx.moveTo(tauX, y + graphHeight/2);
            this.ctx.lineTo(tauX, tauY);
            this.ctx.stroke();

            // Horizontal line
            this.ctx.beginPath();
            this.ctx.moveTo(x - graphWidth/2, tauY);
            this.ctx.lineTo(tauX, tauY);
            this.ctx.stroke();
            this.ctx.setLineDash([]);

            // Labels
            this.ctx.fillStyle = '#9B59B6';
            this.ctx.font = 'bold 12px Arial';
            this.ctx.textAlign = 'center';
            this.ctx.fillText('τ = RC', tauX, y + graphHeight/2 + 20);

            const percentage = diagram.curveType === 'charging' ? '63%' : '37%';
            this.ctx.textAlign = 'right';
            this.ctx.fillText(percentage, x - graphWidth/2 - 10, tauY);
        }

        // Equation
        if (options.showEquation) {
            this.ctx.fillStyle = '#2C3E50';
            this.ctx.font = 'bold 14px Arial';
            this.ctx.textAlign = 'center';
            if (diagram.curveType === 'charging') {
                this.ctx.fillText('V(t) = V₀(1 - e^(-t/τ))', x, y - graphHeight/2 - 20);
            } else {
                this.ctx.fillText('V(t) = V₀e^(-t/τ)', x, y - graphHeight/2 - 20);
            }
        }

        // Asymptote
        const asymptoteY = diagram.curveType === 'charging' ? 
            y + graphHeight/2 - graphHeight * 0.9 : 
            y + graphHeight/2;

        this.ctx.strokeStyle = '#95A5A6';
        this.ctx.lineWidth = 1;
        this.ctx.setLineDash([3, 3]);
        this.ctx.beginPath();
        this.ctx.moveTo(x - graphWidth/2, asymptoteY);
        this.ctx.lineTo(x + graphWidth/2, asymptoteY);
        this.ctx.stroke();
        this.ctx.setLineDash([]);
    }

    renderLorentzForce(diagram, x, y, width, height, options) {
        // Particle
        const particleX = x;
        const particleY = y;

        this.ctx.fillStyle = '#E74C3C';
        this.ctx.beginPath();
        this.ctx.arc(particleX, particleY, 15, 0, Math.PI * 2);
        this.ctx.fill();
        this.ctx.strokeStyle = '#C0392B';
        this.ctx.lineWidth = 2;
        this.ctx.stroke();

        // Charge sign
        this.ctx.fillStyle = '#FFFFFF';
        this.ctx.font = 'bold 18px Arial';
        this.ctx.textAlign = 'center';
        this.ctx.textBaseline = 'middle';
        this.ctx.fillText(diagram.charge > 0 ? '+' : '−', particleX, particleY);

        // Velocity vector
        if (options.showVelocity) {
            const v = diagram.velocity;
            const vScale = 3;
            const vLength = Math.sqrt(v.x * v.x + v.y * v.y) * vScale;
            const vAngle = Math.atan2(-v.y, v.x);

            const vEndX = particleX + vLength * Math.cos(vAngle);
            const vEndY = particleY - vLength * Math.sin(vAngle);

            this.drawArrowVector(particleX + 20, particleY, vEndX + 20, vEndY, '#3498DB', 3);

            this.ctx.fillStyle = '#3498DB';
            this.ctx.font = 'bold 14px Arial';
            this.ctx.textAlign = 'center';
            this.ctx.fillText('v', vEndX + 30, vEndY - 10);
        }

        // Magnetic field
        if (options.showField) {
            const B = diagram.magneticField;
            
            if (B.direction === 'into_page') {
                // Crosses (field into page)
                const gridSize = 60;
                for (let gx = -2; gx <= 2; gx++) {
                    for (let gy = -2; gy <= 2; gy++) {
                        const fieldX = x + gx * gridSize;
                        const fieldY = y + gy * gridSize;

                        if (Math.abs(fieldX - particleX) > 30 || Math.abs(fieldY - particleY) > 30) {
                            this.ctx.strokeStyle = '#9B59B6';
                            this.ctx.lineWidth = 2;
                            
                            // X symbol
                            this.ctx.beginPath();
                            this.ctx.moveTo(fieldX - 8, fieldY - 8);
                            this.ctx.lineTo(fieldX + 8, fieldY + 8);
                            this.ctx.stroke();

                            this.ctx.beginPath();
                            this.ctx.moveTo(fieldX + 8, fieldY - 8);
                            this.ctx.lineTo(fieldX - 8, fieldY + 8);
                            this.ctx.stroke();
                        }
                    }
                }

                this.ctx.fillStyle = '#9B59B6';
                this.ctx.font = 'bold 14px Arial';
                this.ctx.textAlign = 'left';
                this.ctx.fillText('B (into page) ⊗', x + width/2 - 150, y - height/2 + 30);
            } else if (B.direction === 'out_of_page') {
                // Dots (field out of page)
                const gridSize = 60;
                for (let gx = -2; gx <= 2; gx++) {
                    for (let gy = -2; gy <= 2; gy++) {
                        const fieldX = x + gx * gridSize;
                        const fieldY = y + gy * gridSize;

                        if (Math.abs(fieldX - particleX) > 30 || Math.abs(fieldY - particleY) > 30) {
                            this.ctx.fillStyle = '#9B59B6';
                            this.ctx.beginPath();
                            this.ctx.arc(fieldX, fieldY, 5, 0, Math.PI * 2);
                            this.ctx.fill();

                            // Outer circle
                            this.ctx.strokeStyle = '#9B59B6';
                            this.ctx.lineWidth = 2;
                            this.ctx.beginPath();
                            this.ctx.arc(fieldX, fieldY, 8, 0, Math.PI * 2);
                            this.ctx.stroke();
                        }
                    }
                }

                this.ctx.fillStyle = '#9B59B6';
                this.ctx.font = 'bold 14px Arial';
                this.ctx.textAlign = 'left';
                this.ctx.fillText('B (out of page) ⊙', x + width/2 - 150, y - height/2 + 30);
            }
        }

        // Lorentz force
        if (options.showForce) {
            const v = diagram.velocity;
            const B = diagram.magneticField;
            const q = diagram.charge;

            // F = q(v × B)
            // For into page, force is perpendicular to velocity
            let forceAngle;
            const vAngle = Math.atan2(-v.y, v.x);

            if (B.direction === 'into_page') {
                forceAngle = q > 0 ? vAngle - Math.PI/2 : vAngle + Math.PI/2;
            } else {
                forceAngle = q > 0 ? vAngle + Math.PI/2 : vAngle - Math.PI/2;
            }

            const forceLength = 80;
            const forceEndX = particleX + forceLength * Math.cos(forceAngle);
            const forceEndY = particleY + forceLength * Math.sin(forceAngle);

            this.drawArrowVector(particleX, particleY, forceEndX, forceEndY, '#27AE60', 4);

            this.ctx.fillStyle = '#27AE60';
            this.ctx.font = 'bold 14px Arial';
            this.ctx.textAlign = 'center';
            this.ctx.fillText('F', forceEndX + 15 * Math.cos(forceAngle), forceEndY + 15 * Math.sin(forceAngle));
        }

        // Right-hand rule illustration
        if (options.showRightHandRule) {
            const rhrX = x - width/2 + 80;
            const rhrY = y + height/2 - 80;

            this.ctx.strokeStyle = '#34495E';
            this.ctx.fillStyle = '#ECF0F1';
            this.ctx.lineWidth = 2;
            this.ctx.beginPath();
            this.ctx.roundRect(rhrX - 70, rhrY - 50, 140, 80, 5);
            this.ctx.fill();
            this.ctx.stroke();

            this.ctx.fillStyle = '#2C3E50';
            this.ctx.font = 'bold 12px Arial';
            this.ctx.textAlign = 'center';
            this.ctx.fillText('Right-Hand Rule:', rhrX, rhrY - 30);
            this.ctx.font = '11px Arial';
            this.ctx.fillText('Fingers: v', rhrX, rhrY - 10);
            this.ctx.fillText('Palm: B', rhrX, rhrY + 5);
            this.ctx.fillText('Thumb: F (if q > 0)', rhrX, rhrY + 20);
        }

        // Lorentz force equation
        this.ctx.fillStyle = '#2C3E50';
        this.ctx.font = 'bold 16px Arial';
        this.ctx.textAlign = 'center';
        this.ctx.fillText('F = q(v × B)', x, y - height/2 + 30);
    }

    // ========== OPTICS RENDERERS ==========
    /**
    renderMirrorRayDiagram(diagram, x, y, width, height, options) {
        const mirrorType = diagram.mirrorType;
        const f = diagram.focalLength || 100;
        const objectDist = diagram.objectDistance;
        const objectHeight = diagram.objectHeight;

        const mirrorX = x;
        const axis Y = y;

        // Draw principal axis
        this.ctx.strokeStyle = '#95A5A6';
        this.ctx.lineWidth = 1;
        this.ctx.setLineDash([5, 5]);
        this.ctx.beginPath();
        this.ctx.moveTo(x - width/2, axisY);
        this.ctx.lineTo(x + width/2, axisY);
        this.ctx.stroke();
        this.ctx.setLineDash([]);

        // Draw mirror
        if (mirrorType === 'plane') {
            this.ctx.strokeStyle = '#2C3E50';
            this.ctx.lineWidth = 4;
            this.ctx.beginPath();
            this.ctx.moveTo(mirrorX, axisY - height/3);
            this.ctx.lineTo(mirrorX, axisY + height/3);
            this.ctx.stroke();

            // Shading behind mirror
            this.ctx.fillStyle = '#BDC3C7';
            this.ctx.fillRect(mirrorX, axisY - height/3, 10, 2*height/3);
        } else if (mirrorType === 'concave') {
            // Draw concave mirror
            this.ctx.strokeStyle = '#2C3E50';
            this.ctx.lineWidth = 4;
            this.ctx.beginPath();
            this.ctx.arc(mirrorX + 50, axisY, 150, Math.PI - 0.6, Math.PI + 0.6);
            this.ctx.stroke();

            // Reflective side indicator
            for (let i = 0; i < 5; i++) {
                const angle = Math.PI - 0.5 + (i * 1.0 / 4);
                const rx = mirrorX + 50 + 150 * Math.cos(angle);
                const ry = axisY + 150 * Math.sin(angle);
                this.ctx.beginPath();
                this.ctx.moveTo(rx, ry);
                this.ctx.lineTo(rx - 10 * Math.cos(angle), ry - 10 * Math.sin(angle));
                this.ctx.stroke();
            }
        } else if (mirrorType === 'convex') {
            // Draw convex mirror
            this.ctx.strokeStyle = '#2C3E50';
            this.ctx.lineWidth = 4;
            this.ctx.beginPath();
            this.ctx.arc(mirrorX - 50, axisY, 150, -0.6, 0.6);
            this.ctx.stroke();

            // Reflective side indicator
            for (let i = 0; i < 5; i++) {
                const angle = -0.5 + (i * 1.0 / 4);
                const rx = mirrorX - 50 + 150 * Math.cos(angle);
                const ry = axisY + 150 * Math.sin(angle);
                this.ctx.beginPath();
                this.ctx.moveTo(rx, ry);
                this.ctx.lineTo(rx + 10 * Math.cos(angle), ry + 10 * Math.sin(angle));
                this.ctx.stroke();
            }
        }

        // Draw object
        if (options.showObject) {
            const objX = mirrorX - objectDist;
            const objY = axisY;

            // Object arrow
            this.drawArrowVector(objX, objY, objX, objY - objectHeight, '#E74C3C', 3);

            this.ctx.fillStyle = '#E74C3C';
            this.ctx.font = 'bold 14px Arial';
            this.ctx.textAlign = 'center';
            this.ctx.fillText('Object', objX, objY + 30);
        }

        // Mark focal point and center
        if (mirrorType !== 'plane') {
            if (options.showFocalPoint) {
                const focalX = mirrorType === 'concave' ? mirrorX - Math.abs(f) : mirrorX - f;
                
                this.ctx.fillStyle = '#F39C12';
                this.ctx.beginPath();
                this.ctx.arc(focalX, axisY, 5, 0, Math.PI * 2);
                this.ctx.fill();

                this.ctx.fillStyle = '#F39C12';
                this.ctx.font = 'bold 12px Arial';
                this.ctx.textAlign = 'center';
                this.ctx.fillText('F', focalX, axisY + 20);
            }

            if (options.showCenter) {
                const centerX = mirrorType === 'concave' ? mirrorX - 2 * Math.abs(f) : mirrorX - 2 * f;
                
                this.ctx.fillStyle = '#9B59B6';
                this.ctx.beginPath();
                this.ctx.arc(centerX, axisY, 5, 0, Math.PI * 2);
                this.ctx.fill();

                this.ctx.fillStyle = '#9B59B6';
                this.ctx.font = 'bold 12px Arial';
                this.ctx.textAlign = 'center';
                this.ctx.fillText('C', centerX, axisY + 20);
            }
        }

        // Draw rays and image
        if (options.showRays && options.showImage) {
            const objX = mirrorX - objectDist;
            const objY = axisY - objectHeight;

            if (mirrorType === 'plane') {
                // Plane mirror - two rays
                this.ctx.strokeStyle = '#3498DB';
                this.ctx.lineWidth = 2;

                // Ray 1
                this.ctx.beginPath();
                this.ctx.moveTo(objX, objY);
                this.ctx.lineTo(mirrorX, axisY - objectHeight/2);
                this.ctx.stroke();

                // Reflected ray
                this.ctx.beginPath();
                this.ctx.moveTo(mirrorX, axisY - objectHeight/2);
                this.ctx.lineTo(mirrorX - (mirrorX - objX), axisY - objectHeight/2);
                this.ctx.stroke();

                // Virtual ray (dashed)
                this.ctx.setLineDash([5, 5]);
                this.ctx.strokeStyle = '#3498DB';
                this.ctx.beginPath();
                this.ctx.moveTo(mirrorX, axisY - objectHeight/2);
                this.ctx.lineTo(mirrorX + objectDist, axisY - objectHeight/2);
                this.ctx.stroke();
                this.ctx.setLineDash([]);

                // Virtual image
                const imgX = mirrorX + objectDist;
                this.ctx.setLineDash([5, 5]);
                this.drawArrowVector(imgX, axisY, imgX, objY, '#27AE60', 3);
                this.ctx.setLineDash([]);

                this.ctx.fillStyle = '#27AE60';
                this.ctx.font = 'bold 14px Arial';
                this.ctx.textAlign = 'center';
                this.ctx.fillText('Virtual Image', imgX, axisY + 30);

            } else if (mirrorType === 'concave') {
                // Calculate image position using mirror equation
                const u = -objectDist;
                const focal = -Math.abs(f);
                const v = (focal * u) / (u - focal);
                const magnification = -v / u;
                const imageHeight = magnification * objectHeight;

                const imgX = mirrorX - Math.abs(v);
                const imgY = axisY;

                // Ray 1: Parallel to axis, reflects through F
                this.ctx.strokeStyle = '#3498DB';
                this.ctx.lineWidth = 2;
                this.ctx.beginPath();
                this.ctx.moveTo(objX, objY);
                this.ctx.lineTo(mirrorX, objY);
                this.ctx.stroke();

                const focalX = mirrorX - Math.abs(f);
                this.ctx.beginPath();
                this.ctx.moveTo(mirrorX, objY);
                this.ctx.lineTo(imgX, imgY - imageHeight);
                this.ctx.stroke();

                // Ray 2: Through center, reflects back
                this.ctx.strokeStyle = '#E67E22';
                this.ctx.lineWidth = 2;
                this.ctx.beginPath();
                this.ctx.moveTo(objX, objY);
                const centerX = mirrorX - 2 * Math.abs(f);
                this.ctx.lineTo(imgX, imgY - imageHeight);
                this.ctx.stroke();

                // Ray 3: Through F, reflects parallel
                this.ctx.strokeStyle = '#9B59B6';
                this.ctx.lineWidth = 2;
                this.ctx.beginPath();
                this.ctx.moveTo(objX, objY);
                this.ctx.lineTo(focalX, axisY);
                this.ctx.stroke();
                this.ctx.beginPath();
                this.ctx.moveTo(focalX, axisY);
                this.ctx.lineTo(imgX, imgY - imageHeight);
                this.ctx.stroke();

                // Draw image
                if (v < 0) {
                    // Real image
                    this.drawArrowVector(imgX, imgY, imgX, imgY - imageHeight, '#27AE60', 3);
                    this.ctx.fillStyle = '#27AE60';
                    this.ctx.font = 'bold 14px Arial';
                    this.ctx.textAlign = 'center';
                    this.ctx.fillText(imageHeight < 0 ? 'Real, Inverted' : 'Real Image', imgX, imgY + 30);
                } else {
                    // Virtual image
                    this.ctx.setLineDash([5, 5]);
                    this.drawArrowVector(imgX, imgY, imgX, imgY - Math.abs(imageHeight), '#27AE60', 3);
                    this.ctx.setLineDash([]);
                    this.ctx.fillStyle = '#27AE60';
                    this.ctx.font = 'bold 14px Arial';
                    this.ctx.textAlign = 'center';
                    this.ctx.fillText('Virtual Image', imgX, imgY + 30);
                }
            } else if (mirrorType === 'convex') {
                // Convex mirror - always virtual, upright, diminished
                const u = -objectDist;
                const focal = Math.abs(f);
                const v = (focal * u) / (u + focal);
                const magnification = v / u;
                const imageHeight = magnification * objectHeight;

                const imgX = mirrorX - v;

                // Ray 1: Parallel to axis, appears to come from F
                this.ctx.strokeStyle = '#3498DB';
                this.ctx.lineWidth = 2;
                this.ctx.beginPath();
                this.ctx.moveTo(objX, objY);
                this.ctx.lineTo(mirrorX, objY);
                this.ctx.stroke();

                // Reflected ray
                const focalX = mirrorX - Math.abs(f);
                this.ctx.beginPath();
                this.ctx.moveTo(mirrorX, objY);
                this.ctx.lineTo(mirrorX + 100, objY + 50);
                this.ctx.stroke();

                // Virtual extension (dashed)
                this.ctx.setLineDash([5, 5]);
                this.ctx.beginPath();
                this.ctx.moveTo(mirrorX, objY);
                this.ctx.lineTo(imgX, axisY - imageHeight);
                this.ctx.stroke();
                this.ctx.setLineDash([]);

                // Ray 2: Toward center, reflects back
                this.ctx.strokeStyle = '#E67E22';
                this.ctx.lineWidth = 2;
                this.ctx.beginPath();
                this.ctx.moveTo(objX, objY);
                this.ctx.lineTo(mirrorX, axisY - objectHeight/2);
                this.ctx.stroke();

                this.ctx.beginPath();
                this.ctx.moveTo(mirrorX, axisY - objectHeight/2);
                this.ctx.lineTo(mirrorX + 100, axisY + objectHeight/2);
                this.ctx.stroke();

                // Virtual extension
                this.ctx.setLineDash([5, 5]);
                this.ctx.beginPath();
                this.ctx.moveTo(mirrorX, axisY - objectHeight/2);
                this.ctx.lineTo(imgX, axisY - imageHeight);
                this.ctx.stroke();
                this.ctx.setLineDash([]);

                // Virtual image
                this.ctx.setLineDash([5, 5]);
                this.drawArrowVector(imgX, axisY, imgX, axisY - imageHeight, '#27AE60', 3);
                this.ctx.setLineDash([]);

                this.ctx.fillStyle = '#27AE60';
                this.ctx.font = 'bold 14px Arial';
                this.ctx.textAlign = 'center';
                this.ctx.fillText('Virtual, Upright', imgX, axisY + 30);
            }
        }

        // Normals
        if (options.showNormals && mirrorType === 'plane') {
            this.ctx.strokeStyle = '#95A5A6';
            this.ctx.lineWidth = 1;
            this.ctx.setLineDash([3, 3]);
            this.ctx.beginPath();
            this.ctx.moveTo(mirrorX - 50, axisY - objectHeight/2);
            this.ctx.lineTo(mirrorX + 50, axisY - objectHeight/2);
            this.ctx.stroke();
            this.ctx.setLineDash([]);
        }
    }

    */


    /**
    renderLensRayDiagram(diagram, x, y, width, height, options) {
        const lensType = diagram.lensType;
        const f = diagram.focalLength;
        const objectDist = diagram.objectDistance;
        const objectHeight = diagram.objectHeight;

        const lensX = x;
        const axisY = y;

        // Draw principal axis
        this.ctx.strokeStyle = '#95A5A6';
        this.ctx.lineWidth = 1;
        this.ctx.setLineDash([5, 5]);
        this.ctx.beginPath();
        this.ctx.moveTo(x - width/2, axisY);
        this.ctx.lineTo(x + width/2, axisY);
        this.ctx.stroke();
        this.ctx.setLineDash([]);

        // Draw lens
        const lensHeight = height * 0.5;

        if (lensType === 'convex') {
            // Convex lens (converging)
            this.ctx.strokeStyle = '#2C3E50';
            this.ctx.lineWidth = 4;
            this.ctx.beginPath();
            this.ctx.arc(lensX - 20, axisY, lensHeight/2 + 20, -Math.PI/2 + 0.3, Math.PI/2 - 0.3);
            this.ctx.stroke();
            this.ctx.beginPath();
            this.ctx.arc(lensX + 20, axisY, lensHeight/2 + 20, Math.PI/2 + 0.3, -Math.PI/2 - 0.3);
            this.ctx.stroke();

            // Center line
            this.ctx.beginPath();
            this.ctx.moveTo(lensX, axisY - lensHeight/2);
            this.ctx.lineTo(lensX, axisY + lensHeight/2);
            this.ctx.stroke();

        } else {
            // Concave lens (diverging)
            this.ctx.strokeStyle = '#2C3E50';
            this.ctx.lineWidth = 4;
            this.ctx.beginPath();
            this.ctx.arc(lensX + 40, axisY, lensHeight/2 + 40, Math.PI/2 + 0.5, -Math.PI/2 - 0.5, true);
            this.ctx.stroke();
            this.ctx.beginPath();
            this.ctx.arc(lensX - 40, axisY, lensHeight/2 + 40, -Math.PI/2 + 0.5, Math.PI/2 - 0.5, true);
            this.ctx.stroke();

            // Center line
            this.ctx.beginPath();
            this.ctx.moveTo(lensX, axisY - lensHeight/2);
            this.ctx.lineTo(lensX, axisY + lensHeight/2);
            this.ctx.stroke();
        }

        // Draw object
        if (options.showObject) {
            const objX = lensX - objectDist;
            const objY = axisY;

            this.drawArrowVector(objX, objY, objX, objY - objectHeight, '#E74C3C', 3);

            this.ctx.fillStyle = '#E74C3C';
            this.ctx.font = 'bold 14px Arial';
            this.ctx.textAlign = 'center';
            this.ctx.fillText('Object', objX, objY + 30);
        }

        // Mark focal points
        if (options.showFocalPoints) {
            // Left focal point
            const focalLeftX = lensX - Math.abs(f);
            this.ctx.fillStyle = '#F39C12';
            this.ctx.beginPath();
            this.ctx.arc(focalLeftX, axisY, 5, 0, Math.PI * 2);
            this.ctx.fill();

            this.ctx.fillStyle = '#F39C12';
            this.ctx.font = 'bold 12px Arial';
            this.ctx.textAlign = 'center';
            this.ctx.fillText('F', focalLeftX, axisY + 20);

            // Right focal point
            const focalRightX = lensX + Math.abs(f);
            this.ctx.beginPath();
            this.ctx.arc(focalRightX, axisY, 5, 0, Math.PI * 2);
            this.ctx.fill();

            this.ctx.fillText('F', focalRightX, axisY + 20);

            // 2F points
            this.ctx.fillStyle = '#9B59B6';
            this.ctx.beginPath();
            this.ctx.arc(lensX - 2 * Math.abs(f), axisY, 5, 0, Math.PI * 2);
            this.ctx.fill();
            this.ctx.fillText('2F', lensX - 2 * Math.abs(f), axisY + 20);

            this.ctx.beginPath();
            this.ctx.arc(lensX + 2 * Math.abs(f), axisY, 5, 0, Math.PI * 2);
            this.ctx.fill();
            this.ctx.fillText('2F', lensX + 2 * Math.abs(f), axisY + 20);
        }

        // Draw principal rays and image
        if (options.showPrincipalRays && options.showImage) {
            const objX = lensX - objectDist;
            const objY = axisY - objectHeight;

            // Calculate image position using lens equation
            const u = -objectDist;
            const v = (f * u) / (u - f);
            const magnification = -v / u;
            const imageHeight = magnification * objectHeight;
            const imgX = lensX - v;

            if (lensType === 'convex') {
                // Ray 1: Parallel to axis, refracts through F
                this.ctx.strokeStyle = '#3498DB';
                this.ctx.lineWidth = 2;
                this.ctx.beginPath();
                this.ctx.moveTo(objX, objY);
                this.ctx.lineTo(lensX, objY);
                this.ctx.stroke();

                this.ctx.beginPath();
                this.ctx.moveTo(lensX, objY);
                this.ctx.lineTo(imgX, axisY - imageHeight);
                this.ctx.stroke();

                // Ray 2: Through optical center, straight through
                this.ctx.strokeStyle = '#E67E22';
                this.ctx.lineWidth = 2;
                this.ctx.beginPath();
                this.ctx.moveTo(objX, objY);
                this.ctx.lineTo(imgX, axisY - imageHeight);
                this.ctx.stroke();

                // Ray 3: Through F, refracts parallel
                this.ctx.strokeStyle = '#9B59B6';
                this.ctx.lineWidth = 2;
                const focalLeftX = lensX - Math.abs(f);
                this.ctx.beginPath();
                this.ctx.moveTo(objX, objY);
                this.ctx.lineTo(lensX, axisY - (objY - axisY) * (lensX - objX) / (focalLeftX - objX));
                this.ctx.stroke();

                this.ctx.beginPath();
                this.ctx.moveTo(lensX, axisY - (objY - axisY) * (lensX - objX) / (focalLeftX - objX));
                this.ctx.lineTo(imgX, axisY - imageHeight);
                this.ctx.stroke();

                // Draw image
                if (v < 0) {
                    // Real image
                    this.drawArrowVector(imgX, axisY, imgX, axisY - imageHeight, '#27AE60', 3);
                    this.ctx.fillStyle = '#27AE60';
                    this.ctx.font = 'bold 14px Arial';
                    this.ctx.textAlign = 'center';
                    const type = imageHeight > 0 ? 'Real, Inverted' : 'Real, Upright';
                    this.ctx.fillText(type, imgX, axisY + 30);
                } else {
                    // Virtual image
                    this.ctx.setLineDash([5, 5]);
                    this.drawArrowVector(imgX, axisY, imgX, axisY - Math.abs(imageHeight), '#27AE60', 3);
                    this.ctx.setLineDash([]);
                    this.ctx.fillStyle = '#27AE60';
                    this.ctx.font = 'bold 14px Arial';
                    this.ctx.textAlign = 'center';
                    this.ctx.fillText('Virtual, Upright', imgX, axisY + 30);
                }

            } else {
                // Concave lens - always virtual, upright, diminished
                const v = (f * u) / (u - f);
                const magnification = v / u;
                const imageHeight = magnification * objectHeight;
                const imgX = lensX - v;

                // Ray 1: Parallel to axis, appears to diverge from F
                this.ctx.strokeStyle = '#3498DB';
                this.ctx.lineWidth = 2;
                this.ctx.beginPath();
                this.ctx.moveTo(objX, objY);
                this.ctx.lineTo(lensX, objY);
                this.ctx.stroke();

                // Diverging ray
                this.ctx.beginPath();
                this.ctx.moveTo(lensX, objY);
                this.ctx.lineTo(lensX + 150, objY + 80);
                this.ctx.stroke();

                // Virtual extension
                this.ctx.setLineDash([5, 5]);
                this.ctx.beginPath();
                this.ctx.moveTo(lensX, objY);
                this.ctx.lineTo(imgX, axisY - imageHeight);
                this.ctx.stroke();
                this.ctx.setLineDash([]);

                // Ray 2: Through optical center
                this.ctx.strokeStyle = '#E67E22';
                this.ctx.lineWidth = 2;
                this.ctx.beginPath();
                this.ctx.moveTo(objX, objY);
                this.ctx.lineTo(imgX, axisY - imageHeight);
                this.ctx.stroke();

                // Virtual image
                this.ctx.setLineDash([5, 5]);
                this.drawArrowVector(imgX, axisY, imgX, axisY - imageHeight, '#27AE60', 3);
                this.ctx.setLineDash([]);

                this.ctx.fillStyle = '#27AE60';
                this.ctx.font = 'bold 14px Arial';
                this.ctx.textAlign = 'center';
                this.ctx.fillText('Virtual, Upright, Diminished', imgX, axisY + 30);
            }
        }
    }
    */
    
    renderSnellsLaw(diagram, x, y, width, height, options) {
        const n1 = diagram.n1;
        const n2 = diagram.n2;
        const incidentAngle = (diagram.incidentAngle * Math.PI) / 180;
        const refractionAngle = Math.asin((n1 / n2) * Math.sin(incidentAngle));

        const interfaceY = y;

        // Draw media boundary
        this.ctx.strokeStyle = '#34495E';
        this.ctx.lineWidth = 3;
        this.ctx.beginPath();
        this.ctx.moveTo(x - width/2, interfaceY);
        this.ctx.lineTo(x + width/2, interfaceY);
        this.ctx.stroke();

        // Shade different media
        this.ctx.fillStyle = 'rgba(236, 240, 241, 0.5)';
        this.ctx.fillRect(x - width/2, y - height/2, width, height/2);

        this.ctx.fillStyle = 'rgba(52, 152, 219, 0.2)';
        this.ctx.fillRect(x - width/2, interfaceY, width, height/2);

        // Labels
        this.ctx.fillStyle = '#2C3E50';
        this.ctx.font = '14px Arial';
        this.ctx.textAlign = 'left';
        this.ctx.fillText(`n₁ = ${n1}`, x - width/2 + 20, y - height/2 + 30);
        this.ctx.fillText(`n₂ = ${n2}`, x - width/2 + 20, interfaceY + 30);

        // Draw normal line
        if (options.showNormals) {
            this.ctx.strokeStyle = '#95A5A6';
            this.ctx.lineWidth = 1;
            this.ctx.setLineDash([5, 5]);
            this.ctx.beginPath();
            this.ctx.moveTo(x, y - height/2);
            this.ctx.lineTo(x, y + height/2);
            this.ctx.stroke();
            this.ctx.setLineDash([]);

            this.ctx.fillStyle = '#95A5A6';
            this.ctx.font = '11px Arial';
            this.ctx.textAlign = 'center';
            this.ctx.fillText('Normal', x + 10, y - height/2 + 20);
        }

        const rayLength = height * 0.35;

        // Incident ray
        const incidentStartX = x - rayLength * Math.sin(incidentAngle);
        const incidentStartY = interfaceY - rayLength * Math.cos(incidentAngle);

        this.drawArrowVector(incidentStartX, incidentStartY, x, interfaceY, '#E74C3C', 3);

        this.ctx.fillStyle = '#E74C3C';
        this.ctx.font = 'bold 12px Arial';
        this.ctx.textAlign = 'center';
        this.ctx.fillText('Incident', incidentStartX - 30, incidentStartY + 10);

        // Refracted ray
        const refractedEndX = x + rayLength * Math.sin(refractionAngle);
        const refractedEndY = interfaceY + rayLength * Math.cos(refractionAngle);

        this.drawArrowVector(x, interfaceY, refractedEndX, refractedEndY, '#27AE60', 3);

        this.ctx.fillStyle = '#27AE60';
        this.ctx.fillText('Refracted', refractedEndX + 30, refractedEndY - 10);

        // Show angles
        if (options.showAngles) {
            const arcRadius = 50;

            // Incident angle
            this.ctx.strokeStyle = '#E74C3C';
            this.ctx.lineWidth = 1.5;
            this.ctx.beginPath();
            this.ctx.arc(x, interfaceY, arcRadius, -Math.PI/2, -Math.PI/2 - incidentAngle, true);
            this.ctx.stroke();

            this.ctx.fillStyle = '#E74C3C';
            this.ctx.font = '12px Arial';
            this.ctx.textAlign = 'right';
            this.ctx.fillText(`θ₁ = ${diagram.incidentAngle}°`, x - arcRadius - 10, interfaceY - 10);

            // Refraction angle
            this.ctx.strokeStyle = '#27AE60';
            this.ctx.beginPath();
            this.ctx.arc(x, interfaceY, arcRadius, Math.PI/2, Math.PI/2 + refractionAngle, false);
            this.ctx.stroke();

            this.ctx.fillStyle = '#27AE60';
            this.ctx.textAlign = 'left';
            this.ctx.fillText(`θ₂ = ${(refractionAngle * 180 / Math.PI).toFixed(1)}°`, x + arcRadius + 10, interfaceY + 20);
        }

        // Snell's Law equation
        if (options.showEquation) {
            this.ctx.fillStyle = '#2C3E50';
            this.ctx.font = 'bold 16px Arial';
            this.ctx.textAlign = 'center';
            this.ctx.fillText('n₁ sin(θ₁) = n₂ sin(θ₂)', x, y - height/2 + 60);
            
            this.ctx.font = '12px Arial';
            const lhs = (n1 * Math.sin(incidentAngle)).toFixed(3);
            const rhs = (n2 * Math.sin(refractionAngle)).toFixed(3);
            this.ctx.fillText(`${lhs} = ${rhs}`, x, y - height/2 + 80);
        }
    }

    renderTotalInternalReflection(diagram, x, y, width, height, options) {
        const n1 = diagram.n1;
        const n2 = diagram.n2;
        const angle = (diagram.angle * Math.PI) / 180;
        const criticalAngle = Math.asin(n2 / n1);
        const interfaceY = y;

        // Draw media boundary
        this.ctx.strokeStyle = '#34495E';
        this.ctx.lineWidth = 3;
        this.ctx.beginPath();
        this.ctx.moveTo(x - width/2, interfaceY);
        this.ctx.lineTo(x + width/2, interfaceY);
        this.ctx.stroke();

        // Dense medium (bottom)
        this.ctx.fillStyle = 'rgba(52, 152, 219, 0.3)';
        this.ctx.fillRect(x - width/2, interfaceY, width, height/2);

        // Less dense medium (top)
        this.ctx.fillStyle = 'rgba(236, 240, 241, 0.4)';
        this.ctx.fillRect(x - width/2, y - height/2, width, height/2);

        // Labels
        this.ctx.fillStyle = '#2C3E50';
        this.ctx.font = '14px Arial';
        this.ctx.textAlign = 'left';
        this.ctx.fillText(`n₁ = ${n1} (dense)`, x - width/2 + 20, interfaceY + 30);
        this.ctx.fillText(`n₂ = ${n2} (less dense)`, x - width/2 + 20, y - height/2 + 30);

        // Normal line
        this.ctx.strokeStyle = '#95A5A6';
        this.ctx.lineWidth = 1;
        this.ctx.setLineDash([5, 5]);
        this.ctx.beginPath();
        this.ctx.moveTo(x, y - height/2);
        this.ctx.lineTo(x, y + height/2);
        this.ctx.stroke();
        this.ctx.setLineDash([]);

        if (options.showMultipleAngles) {
            // Show three cases: below critical, at critical, above critical
            const angles = [
                { angle: criticalAngle * 0.7, x: x - width/3, label: 'Below θc' },
                { angle: criticalAngle, x: x, label: 'At θc' },
                { angle: criticalAngle * 1.2, x: x + width/3, label: 'Above θc (TIR)' }
            ];

            angles.forEach(({ angle: a, x: px, label }) => {
                const rayLength = height * 0.3;

                // Incident ray
                const incidentStartX = px - rayLength * Math.sin(a);
                const incidentStartY = interfaceY + rayLength * Math.cos(a);

                this.ctx.strokeStyle = '#E74C3C';
                this.ctx.lineWidth = 2;
                this.drawArrowVector(incidentStartX, incidentStartY, px, interfaceY, '#E74C3C', 2);

                if (a < criticalAngle) {
                    // Refraction occurs
                    const refractionAngle = Math.asin((n1 / n2) * Math.sin(a));
                    const refractedEndX = px + rayLength * Math.sin(refractionAngle);
                    const refractedEndY = interfaceY - rayLength * Math.cos(refractionAngle);

                    this.drawArrowVector(px, interfaceY, refractedEndX, refractedEndY, '#27AE60', 2);
                } else if (Math.abs(a - criticalAngle) < 0.01) {
                    // Critical angle - grazes along surface
                    this.drawArrowVector(px, interfaceY, px + rayLength, interfaceY, '#F39C12', 2);
                } else {
                    // Total internal reflection
                    const reflectedEndX = px + rayLength * Math.sin(a);
                    const reflectedEndY = interfaceY + rayLength * Math.cos(a);

                    this.drawArrowVector(px, interfaceY, reflectedEndX, reflectedEndY, '#9B59B6', 2);
                }

                // Label
                this.ctx.fillStyle = '#2C3E50';
                this.ctx.font = '11px Arial';
                this.ctx.textAlign = 'center';
                this.ctx.fillText(label, px, y + height/2 - 20);
            });
        } else {
            // Single ray at given angle
            const rayLength = height * 0.35;
            const incidentStartX = x - rayLength * Math.sin(angle);
            const incidentStartY = interfaceY + rayLength * Math.cos(angle);

            this.drawArrowVector(incidentStartX, incidentStartY, x, interfaceY, '#E74C3C', 3);

            if (angle >= criticalAngle) {
                // Total internal reflection
                const reflectedEndX = x + rayLength * Math.sin(angle);
                const reflectedEndY = interfaceY + rayLength * Math.cos(angle);

                this.drawArrowVector(x, interfaceY, reflectedEndX, reflectedEndY, '#9B59B6', 3);

                this.ctx.fillStyle = '#9B59B6';
                this.ctx.font = 'bold 14px Arial';
                this.ctx.textAlign = 'center';
                this.ctx.fillText('Total Internal Reflection', x, y - height/2 + 60);
            } else {
                // Refraction
                const refractionAngle = Math.asin((n1 / n2) * Math.sin(angle));
                const refractedEndX = x + rayLength * Math.sin(refractionAngle);
                const refractedEndY = interfaceY - rayLength * Math.cos(refractionAngle);

                this.drawArrowVector(x, interfaceY, refractedEndX, refractedEndY, '#27AE60', 3);
            }
        }

        // Show critical angle
        if (options.showCriticalAngle) {
            this.ctx.fillStyle = '#F39C12';
            this.ctx.font = 'bold 14px Arial';
            this.ctx.textAlign = 'center';
            this.ctx.fillText(`Critical Angle θc = ${(criticalAngle * 180 / Math.PI).toFixed(1)}°`, x, y + height/2 - 50);
            
            this.ctx.font = '12px Arial';
            this.ctx.fillText(`sin(θc) = n₂/n₁ = ${n2}/${n1}`, x, y + height/2 - 30);
        }
    }

    renderPrismDispersion(diagram, x, y, width, height, options) {
        const prismAngle = (diagram.prismAngle * Math.PI) / 180;
        const prismSize = 150;

        // Draw prism
        this.ctx.fillStyle = 'rgba(52, 152, 219, 0.2)';
        this.ctx.strokeStyle = '#2C3E50';
        this.ctx.lineWidth = 3;

        this.ctx.beginPath();
        this.ctx.moveTo(x - prismSize/2, y + prismSize/3);
        this.ctx.lineTo(x + prismSize/2, y + prismSize/3);
        this.ctx.lineTo(x, y - prismSize/2);
        this.ctx.closePath();
        this.ctx.fill();
        this.ctx.stroke();

        // Incident white light
        const incidentX = x - prismSize/2 - 100;
        const incidentY = y;

        this.drawArrowVector(incidentX, incidentY, x - prismSize/2 + 20, incidentY, '#FFFFFF', 4);

        // Outline for white ray
        this.ctx.strokeStyle = '#2C3E50';
        this.ctx.lineWidth = 5;
        this.ctx.beginPath();
        this.ctx.moveTo(incidentX, incidentY);
        this.ctx.lineTo(x - prismSize/2 + 20, incidentY);
        this.ctx.stroke();

        this.ctx.fillStyle = '#2C3E50';
        this.ctx.font = 'bold 12px Arial';
        this.ctx.textAlign = 'center';
        this.ctx.fillText('White Light', incidentX, incidentY - 15);

        // Show spectrum
        if (options.showSpectrum) {
            const colors = [
                { name: 'Red', color: '#FF0000', angle: 0.05 },
                { name: 'Orange', color: '#FF7F00', angle: 0.08 },
                { name: 'Yellow', color: '#FFFF00', angle: 0.11 },
                { name: 'Green', color: '#00FF00', angle: 0.14 },
                { name: 'Blue', color: '#0000FF', angle: 0.17 },
                { name: 'Indigo', color: '#4B0082', angle: 0.20 },
                { name: 'Violet', color: '#9400D3', angle: 0.23 }
            ];

            const exitX = x + prismSize/2 - 20;
            const exitY = y + 20;

            colors.forEach((colorInfo, index) => {
                const angle = colorInfo.angle;
                const rayLength = 120;
                const endX = exitX + rayLength * Math.cos(angle);
                const endY = exitY + rayLength * Math.sin(angle);

                this.ctx.strokeStyle = colorInfo.color;
                this.ctx.lineWidth = 3;
                this.ctx.beginPath();
                this.ctx.moveTo(exitX, exitY);
                this.ctx.lineTo(endX, endY);
                this.ctx.stroke();

                // Arrow
                this.ctx.fillStyle = colorInfo.color;
                this.ctx.beginPath();
                const arrowSize = 8;
                const arrowAngle = angle;
                this.ctx.moveTo(endX, endY);
                this.ctx.lineTo(
                    endX - arrowSize * Math.cos(arrowAngle - 0.3),
                    endY - arrowSize * Math.sin(arrowAngle - 0.3)
                );
                this.ctx.lineTo(
                    endX - arrowSize * Math.cos(arrowAngle + 0.3),
                    endY - arrowSize * Math.sin(arrowAngle + 0.3)
                );
                this.ctx.closePath();
                this.ctx.fill();

                // Color labels
                if (index % 2 === 0) {
                    this.ctx.fillStyle = colorInfo.color;
                    this.ctx.font = 'bold 11px Arial';
                    this.ctx.textAlign = 'left';
                    this.ctx.fillText(colorInfo.name, endX + 10, endY + 5);
                }
            });
        }

        // Explanation
        this.ctx.fillStyle = '#2C3E50';
        this.ctx.font = 'bold 14px Arial';
        this.ctx.textAlign = 'center';
        this.ctx.fillText('Dispersion of White Light', x, y - height/2 + 30);
        
        this.ctx.font = '11px Arial';
        this.ctx.fillText('Different wavelengths refract at different angles', x, y - height/2 + 50);

        if (options.showAngles) {
            this.ctx.fillText('Violet bends most, Red bends least', x, y + height/2 - 20);
        }
    }

    renderOpticalFiber(diagram, x, y, width, height, options) {
        const fiberLength = diagram.fiberLength;
        const numReflections = diagram.numReflections;
        const fiberRadius = 30;

        // Draw fiber core
        if (options.showCore) {
            this.ctx.fillStyle = 'rgba(52, 152, 219, 0.3)';
            this.ctx.fillRect(x - fiberLength/2, y - fiberRadius, fiberLength, fiberRadius * 2);

            this.ctx.strokeStyle = '#3498DB';
            this.ctx.lineWidth = 2;
            this.ctx.strokeRect(x - fiberLength/2, y - fiberRadius, fiberLength, fiberRadius * 2);
        }

        // Draw cladding
        if (options.showCladding) {
            const claddingThickness = 8;
            
            this.ctx.fillStyle = 'rgba(149, 165, 166, 0.3)';
            this.ctx.fillRect(x - fiberLength/2, y - fiberRadius - claddingThickness, fiberLength, claddingThickness);
            this.ctx.fillRect(x - fiberLength/2, y + fiberRadius, fiberLength, claddingThickness);

            this.ctx.strokeStyle = '#95A5A6';
            this.ctx.lineWidth = 1;
            this.ctx.strokeRect(x - fiberLength/2, y - fiberRadius - claddingThickness, fiberLength, claddingThickness);
            this.ctx.strokeRect(x - fiberLength/2, y + fiberRadius, fiberLength, claddingThickness);

            // Labels
            this.ctx.fillStyle = '#2C3E50';
            this.ctx.font = '11px Arial';
            this.ctx.textAlign = 'left';
            this.ctx.fillText('Core (n₁)', x - fiberLength/2 + 10, y);
            this.ctx.fillText('Cladding (n₂)', x - fiberLength/2 + 10, y - fiberRadius - claddingThickness/2 + 4);
        }

        // Draw light ray with reflections
        if (options.showReflections) {
            this.ctx.strokeStyle = '#E74C3C';
            this.ctx.lineWidth = 2.5;

            const segmentLength = fiberLength / numReflections;
            const angle = Math.PI / 8; // Angle of propagation

            this.ctx.beginPath();
            let currentX = x - fiberLength/2;
            let currentY = y;
            let direction = 1; // 1 for down, -1 for up

            this.ctx.moveTo(currentX, currentY);

            for (let i = 0; i < numReflections; i++) {
                const nextX = currentX + segmentLength;
                const nextY = currentY + direction * fiberRadius * 1.8;

                this.ctx.lineTo(nextX, nextY);

                currentX = nextX;
                currentY = nextY;
                direction *= -1;
            }

            // Final segment to exit
            this.ctx.lineTo(x + fiberLength/2, y);
            this.ctx.stroke();

            // Reflection points
            currentX = x - fiberLength/2;
            currentY = y;
            direction = 1;

            for (let i = 0; i < numReflections; i++) {
                const nextX = currentX + segmentLength;
                const nextY = currentY + direction * fiberRadius * 1.8;

                this.ctx.fillStyle = '#F39C12';
                this.ctx.beginPath();
                this.ctx.arc(nextX, nextY, 4, 0, Math.PI * 2);
                this.ctx.fill();

                currentX = nextX;
                currentY = nextY;
                direction *= -1;
            }
        }

        // Input and output
        this.ctx.fillStyle = '#E74C3C';
        this.ctx.font = 'bold 12px Arial';
        this.ctx.textAlign = 'center';
        this.ctx.fillText('Input', x - fiberLength/2 - 40, y);
        this.ctx.fillText('Output', x + fiberLength/2 + 40, y);

        // Title
        this.ctx.fillStyle = '#2C3E50';
        this.ctx.font = 'bold 14px Arial';
        this.ctx.textAlign = 'center';
        this.ctx.fillText('Total Internal Reflection in Optical Fiber', x, y - fiberRadius - 50);
    }

    renderOpticalInterference(diagram, x, y, width, height, options) {
        const slitSeparation = diagram.slitSeparation;
        const wavelength = diagram.wavelength;
        const screenDistance = diagram.screenDistance;

        // Draw double slits
        const slitX = x - width/3;
        const slit1Y = y - slitSeparation/2;
        const slit2Y = y + slitSeparation/2;

        this.ctx.fillStyle = '#34495E';
        this.ctx.fillRect(slitX - 5, y - height/3, 10, height * 2/3);

        // Cut out slits
        this.ctx.clearRect(slitX - 5, slit1Y - 10, 10, 20);
        this.ctx.clearRect(slitX - 5, slit2Y - 10, 10, 20);

        this.ctx.strokeStyle = '#2C3E50';
        this.ctx.lineWidth = 2;
        this.ctx.strokeRect(slitX - 5, slit1Y - 10, 10, 20);
        this.ctx.strokeRect(slitX - 5, slit2Y - 10, 10, 20);

        // Labels
        this.ctx.fillStyle = '#2C3E50';
        this.ctx.font = 'bold 12px Arial';
        this.ctx.textAlign = 'center';
        this.ctx.fillText('S₁', slitX - 20, slit1Y);
        this.ctx.fillText('S₂', slitX - 20, slit2Y);

        // Screen
        const screenX = slitX + screenDistance;
        this.ctx.fillStyle = '#ECF0F1';
        this.ctx.fillRect(screenX - 5, y - height/3, 10, height * 2/3);
        this.ctx.strokeStyle = '#95A5A6';
        this.ctx.lineWidth = 2;
        this.ctx.strokeRect(screenX - 5, y - height/3, 10, height * 2/3);

        // Draw interference pattern
        if (options.showFringes) {
            const fringeHeight = height * 2/3;
            const numFringes = 15;

            for (let i = 0; i < fringeHeight; i++) {
                const screenY = y - height/3 + i;
                const angle = Math.atan((screenY - y) / screenDistance);
                
                // Path difference
                const pathDiff = slitSeparation * Math.sin(angle);
                const phase = (2 * Math.PI * pathDiff) / wavelength;
                
                // Intensity
                const intensity = Math.pow(Math.cos(phase / 2), 2);
                
                const brightness = Math.floor(255 * intensity);
                this.ctx.fillStyle = `rgb(${brightness}, ${brightness}, ${brightness})`;
                this.ctx.fillRect(screenX + 10, screenY, 30, 1);
            }
        }

        // Show intensity graph
        if (options.showIntensity) {
            const graphX = screenX + 50;
            const graphWidth = 80;
            const graphHeight = height * 2/3;

            this.ctx.strokeStyle = '#E74C3C';
            this.ctx.lineWidth = 2;
            this.ctx.beginPath();

            for (let i = 0; i < graphHeight; i++) {
                const screenY = y - height/3 + i;
                const angle = Math.atan((screenY - y) / screenDistance);
                const pathDiff = slitSeparation * Math.sin(angle);
                const phase = (2 * Math.PI * pathDiff) / wavelength;
                const intensity = Math.pow(Math.cos(phase / 2), 2);

                const plotX = graphX + intensity * graphWidth;

                if (i === 0) {
                    this.ctx.moveTo(plotX, screenY);
                } else {
                    this.ctx.lineTo(plotX, screenY);
                }
            }
            this.ctx.stroke();

            // Axis
            this.ctx.strokeStyle = '#95A5A6';
            this.ctx.lineWidth = 1;
            this.ctx.beginPath();
            this.ctx.moveTo(graphX, y - height/3);
            this.ctx.lineTo(graphX, y + height/3);
            this.ctx.stroke();

            this.ctx.fillStyle = '#2C3E50';
            this.ctx.font = '11px Arial';
            this.ctx.textAlign = 'center';
            this.ctx.fillText('Intensity', graphX + graphWidth/2, y + height/3 + 20);
        }

        // Show path difference at central maximum
        this.ctx.strokeStyle = '#9B59B6';
        this.ctx.lineWidth = 1.5;
        this.ctx.setLineDash([5, 5]);
        this.ctx.beginPath();
        this.ctx.moveTo(slitX, slit1Y);
        this.ctx.lineTo(screenX, y);
        this.ctx.stroke();

        this.ctx.beginPath();
        this.ctx.moveTo(slitX, slit2Y);
        this.ctx.lineTo(screenX, y);
        this.ctx.stroke();
        this.ctx.setLineDash([]);

        // Labels
        this.ctx.fillStyle = '#2C3E50';
        this.ctx.font = 'bold 12px Arial';
        this.ctx.textAlign = 'center';
        this.ctx.fillText('Central Maximum', screenX, y - height/3 - 20);
        
        this.ctx.font = '11px Arial';
        this.ctx.fillText('(constructive interference)', screenX, y - height/3 - 5);
    }

    renderPolarization(diagram, x, y, width, height, options) {
        const sectionWidth = width / 3;

        // Unpolarized light
        const unpolarizedX = x - width/3;

        if (options.showUnpolarized) {
            this.ctx.fillStyle = '#2C3E50';
            this.ctx.font = 'bold 14px Arial';
            this.ctx.textAlign = 'center';
            this.ctx.fillText('Unpolarized Light', unpolarizedX, y - height/3);

            // Draw multiple random orientations
            const numRays = 12;
            for (let i = 0; i < numRays; i++) {
                const angle = (i / numRays) * Math.PI;
                const length = 40;
                const rayX = unpolarizedX;
                const rayY = y;

                this.ctx.strokeStyle = '#E74C3C';
                this.ctx.lineWidth = 2;
                this.ctx.beginPath();
                this.ctx.moveTo(rayX - length * Math.cos(angle), rayY - length * Math.sin(angle));
                this.ctx.lineTo(rayX + length * Math.cos(angle), rayY + length * Math.sin(angle));
                this.ctx.stroke();
            }

            // Direction arrow
            this.drawArrowVector(unpolarizedX - 80, y, unpolarizedX - 60, y, '#2C3E50', 2);
        }

        // Polarizer
        const polarizerX = x;

        if (options.showPolarizer) {
            this.ctx.fillStyle = '#95A5A6';
            this.ctx.fillRect(polarizerX - 5, y - height/4, 10, height/2);
            this.ctx.strokeStyle = '#34495E';
            this.ctx.lineWidth = 2;
            this.ctx.strokeRect(polarizerX - 5, y - height/4, 10, height/2);

            // Polarization lines
            this.ctx.strokeStyle = '#2C3E50';
            this.ctx.lineWidth = 1;
            for (let i = 0; i < 10; i++) {
                const lineY = y - height/4 + (i / 9) * height/2;
                this.ctx.beginPath();
                this.ctx.moveTo(polarizerX - 15, lineY);
                this.ctx.lineTo(polarizerX + 15, lineY);
                this.ctx.stroke();
            }

            this.ctx.fillStyle = '#2C3E50';
            this.ctx.font = 'bold 12px Arial';
            this.ctx.textAlign = 'center';
            this.ctx.fillText('Polarizer', polarizerX, y - height/3 - 20);
            this.ctx.font = '10px Arial';
            this.ctx.fillText('(vertical axis)', polarizerX, y + height/4 + 20);
        }

        // Polarized light
        const polarizedX = x + width/3;

        if (options.showPolarized) {
            this.ctx.fillStyle = '#2C3E50';
            this.ctx.font = 'bold 14px Arial';
            this.ctx.textAlign = 'center';
            this.ctx.fillText('Polarized Light', polarizedX, y - height/3);

            // Draw vertical oscillations only
            const numWaves = 5;
            for (let i = 0; i < numWaves; i++) {
                const waveX = polarizedX - 60 + (i / numWaves) * 120;
                
                this.ctx.strokeStyle = '#27AE60';
                this.ctx.lineWidth = 2.5;
                this.ctx.beginPath();
                this.ctx.moveTo(waveX, y - 50);
                this.ctx.lineTo(waveX, y + 50);
                this.ctx.stroke();

                // Small arrows
                this.drawArrowVector(waveX, y - 30, waveX, y - 40, '#27AE60', 1.5);
            }

            // Direction arrow
            this.drawArrowVector(polarizedX + 60, y, polarizedX + 80, y, '#2C3E50', 2);
        }

        // Explanation
        this.ctx.fillStyle = '#2C3E50';
        this.ctx.font = '11px Arial';
        this.ctx.textAlign = 'center';
        this.ctx.fillText('Only vertical component passes through', x, y + height/3 + 20);
        this.ctx.fillText('Intensity reduced by ~50%', x, y + height/3 + 35);
    }

    // ========== MODERN PHYSICS RENDERERS ==========

    renderPhotoelectricEffect(diagram, x, y, width, height, options) {
        const workFunction = diagram.workFunction;
        const photonEnergy = diagram.photonEnergy;
        const metalWidth = 150;
        const metalHeight = 100;

        // Draw metal surface
        this.ctx.fillStyle = '#7F8C8D';
        this.ctx.fillRect(x - metalWidth/2, y, metalWidth, metalHeight);
        this.ctx.strokeStyle = '#5D6D7E';
        this.ctx.lineWidth = 3;
        this.ctx.strokeRect(x - metalWidth/2, y, metalWidth, metalHeight);

        // Metal label
        this.ctx.fillStyle = '#2C3E50';
        this.ctx.font = 'bold 14px Arial';
        this.ctx.textAlign = 'center';
        this.ctx.fillText('Metal Surface', x, y + metalHeight + 25);
        this.ctx.font = '12px Arial';
        this.ctx.fillText(`Work Function Φ = ${workFunction} eV`, x, y + metalHeight + 42);

        // Draw photons
        if (options.showPhotons) {
            const numPhotons = 3;
            for (let i = 0; i < numPhotons; i++) {
                const photonX = x - metalWidth/2 - 100 - i * 40;
                const photonY = y - 60 + i * 20;

                // Photon as wavy arrow
                this.ctx.strokeStyle = '#F39C12';
                this.ctx.lineWidth = 2.5;
                this.ctx.beginPath();
                for (let j = 0; j < 20; j++) {
                    const px = photonX + j * 5;
                    const py = photonY + 10 * Math.sin(j * 0.8);
                    if (j === 0) this.ctx.moveTo(px, py);
                    else this.ctx.lineTo(px, py);
                }
                this.ctx.stroke();

                this.drawArrowVector(photonX + 95, photonY, x - metalWidth/2 - 10, y + 20, '#F39C12', 2);

                if (i === 0) {
                    this.ctx.fillStyle = '#F39C12';
                    this.ctx.font = '11px Arial';
                    this.ctx.textAlign = 'center';
                    this.ctx.fillText(`E = ${photonEnergy} eV`, photonX + 50, photonY - 15);
                }
            }
        }

        // Draw ejected electrons
        if (options.showElectrons && photonEnergy > workFunction) {
            const numElectrons = 3;
            const kineticEnergy = photonEnergy - workFunction;

            for (let i = 0; i < numElectrons; i++) {
                const electronX = x - metalWidth/2 + 30 + i * 40;
                const electronY = y - 10;

                // Electron
                this.ctx.fillStyle = '#3498DB';
                this.ctx.beginPath();
                this.ctx.arc(electronX, electronY, 8, 0, Math.PI * 2);
                this.ctx.fill();
                this.ctx.strokeStyle = '#2980B9';
                this.ctx.lineWidth = 2;
                this.ctx.stroke();

                // Electron label
                this.ctx.fillStyle = '#FFFFFF';
                this.ctx.font = 'bold 12px Arial';
                this.ctx.textAlign = 'center';
                this.ctx.textBaseline = 'middle';
                this.ctx.fillText('e⁻', electronX, electronY);

                // Velocity arrow
                this.drawArrowVector(electronX, electronY - 15, electronX, electronY - 60, '#E74C3C', 2.5);

                if (i === 1) {
                    this.ctx.fillStyle = '#E74C3C';
                    this.ctx.font = '11px Arial';
                    this.ctx.textAlign = 'center';
                    this.ctx.fillText(`KE = ${kineticEnergy.toFixed(1)} eV`, electronX, electronY - 70);
                }
            }
        }

        // Energy level diagram
        if (options.showEnergyLevels) {
            const levelX = x + width/2 - 100;
            const levelY = y + metalHeight/2;
            const levelHeight = 100;

            // Draw energy levels
            this.ctx.strokeStyle = '#2C3E50';
            this.ctx.lineWidth = 2;

            // Fermi level
            this.ctx.beginPath();
            this.ctx.moveTo(levelX - 40, levelY);
            this.ctx.lineTo(levelX + 40, levelY);
            this.ctx.stroke();

            this.ctx.fillStyle = '#2C3E50';
            this.ctx.font = '11px Arial';
            this.ctx.textAlign = 'left';
            this.ctx.fillText('Fermi Level', levelX + 45, levelY + 4);

            // Vacuum level
            this.ctx.beginPath();
            this.ctx.moveTo(levelX - 40, levelY - levelHeight);
            this.ctx.lineTo(levelX + 40, levelY - levelHeight);
            this.ctx.stroke();

            this.ctx.fillText('Vacuum Level', levelX + 45, levelY - levelHeight + 4);

            // Work function arrow
            this.ctx.strokeStyle = '#9B59B6';
            this.ctx.lineWidth = 2;
            this.ctx.setLineDash([5, 5]);
            this.drawArrowVector(levelX, levelY, levelX, levelY - levelHeight, '#9B59B6', 2);
            this.ctx.setLineDash([]);

            this.ctx.fillStyle = '#9B59B6';
            this.ctx.textAlign = 'right';
            this.ctx.fillText(`Φ = ${workFunction} eV`, levelX - 10, levelY - levelHeight/2);
        }

        // Show equation
        if (options.showEquation) {
            this.ctx.fillStyle = '#2C3E50';
            this.ctx.font = 'bold 14px Arial';
            this.ctx.textAlign = 'center';
            this.ctx.fillText('Einstein\'s Photoelectric Equation:', x, y - height/2 + 30);
            this.ctx.font = 'bold 16px Arial';
            this.ctx.fillText('KE = hf - Φ', x, y - height/2 + 50);

            if (photonEnergy > workFunction) {
                this.ctx.font = '12px Arial';
                this.ctx.fillStyle = '#27AE60';
                this.ctx.fillText(`✓ Photons have enough energy (${photonEnergy} eV > ${workFunction} eV)`, x, y - height/2 + 70);
            } else {
                this.ctx.font = '12px Arial';
                this.ctx.fillStyle = '#E74C3C';
                this.ctx.fillText(`✗ Photons lack energy (${photonEnergy} eV < ${workFunction} eV)`, x, y - height/2 + 70);
            }
        }
    }


// ========== MODERN PHYSICS RENDERERS (CONTINUED) ==========

    renderEmissionSpectra(diagram, x, y, width, height, options) {
        const element = diagram.element;
        const transitions = diagram.transitions;

        // Draw energy level diagram
        if (options.showEnergyLevels) {
            const levelX = x - width/3;
            const levelWidth = 100;
            const levelSpacing = 50;

            this.ctx.fillStyle = '#2C3E50';
            this.ctx.font = 'bold 14px Arial';
            this.ctx.textAlign = 'center';
            this.ctx.fillText('Energy Levels', levelX, y - height/2 + 20);

            // Draw energy levels (simplified hydrogen)
            const levels = [
                { n: 1, energy: -13.6, y: y + height/3 },
                { n: 2, energy: -3.4, y: y + height/6 },
                { n: 3, energy: -1.5, y: y },
                { n: 4, energy: -0.85, y: y - height/6 },
                { n: 5, energy: -0.54, y: y - height/4 }
            ];

            levels.forEach(level => {
                // Energy level line
                this.ctx.strokeStyle = '#34495E';
                this.ctx.lineWidth = 3;
                this.ctx.beginPath();
                this.ctx.moveTo(levelX - levelWidth/2, level.y);
                this.ctx.lineTo(levelX + levelWidth/2, level.y);
                this.ctx.stroke();

                // Labels
                this.ctx.fillStyle = '#2C3E50';
                this.ctx.font = '12px Arial';
                this.ctx.textAlign = 'left';
                this.ctx.fillText(`n = ${level.n}`, levelX + levelWidth/2 + 10, level.y + 4);
                this.ctx.textAlign = 'right';
                this.ctx.fillText(`${level.energy} eV`, levelX - levelWidth/2 - 10, level.y + 4);
            });

            // Draw transitions
            if (options.showTransitions) {
                transitions.forEach((trans, index) => {
                    const fromLevel = levels.find(l => l.n === trans.n1);
                    const toLevel = levels.find(l => l.n === trans.n2);

                    if (fromLevel && toLevel) {
                        const colors = ['#E74C3C', '#F39C12', '#9B59B6', '#3498DB', '#27AE60'];
                        const color = colors[index % colors.length];

                        // Transition arrow
                        this.ctx.strokeStyle = color;
                        this.ctx.fillStyle = color;
                        this.ctx.lineWidth = 2;

                        const arrowX = levelX + (index - transitions.length/2 + 0.5) * 20;
                        this.drawArrowVector(arrowX, fromLevel.y, arrowX, toLevel.y, color, 2);

                        // Wavelength label
                        this.ctx.font = '10px Arial';
                        this.ctx.textAlign = 'center';
                        this.ctx.fillText(`${trans.wavelength}nm`, arrowX + 15, (fromLevel.y + toLevel.y) / 2);
                    }
                });
            }
        }

        // Draw emission spectrum
        if (options.showSpectrum) {
            const spectrumX = x + width/4;
            const spectrumY = y;
            const spectrumWidth = width * 0.4;
            const spectrumHeight = 60;

            // Black background
            this.ctx.fillStyle = '#000000';
            this.ctx.fillRect(spectrumX - spectrumWidth/2, spectrumY - spectrumHeight/2, spectrumWidth, spectrumHeight);
            this.ctx.strokeStyle = '#95A5A6';
            this.ctx.lineWidth = 2;
            this.ctx.strokeRect(spectrumX - spectrumWidth/2, spectrumY - spectrumHeight/2, spectrumWidth, spectrumHeight);

            // Draw spectral lines
            transitions.forEach(trans => {
                // Map wavelength to position (visible range ~400-700nm)
                const minWavelength = 400;
                const maxWavelength = 700;
                const position = (trans.wavelength - minWavelength) / (maxWavelength - minWavelength);

                if (position >= 0 && position <= 1) {
                    const lineX = spectrumX - spectrumWidth/2 + position * spectrumWidth;

                    // Color based on wavelength
                    const color = this.wavelengthToColor(trans.wavelength);

                    this.ctx.strokeStyle = color;
                    this.ctx.lineWidth = 4;
                    this.ctx.beginPath();
                    this.ctx.moveTo(lineX, spectrumY - spectrumHeight/2);
                    this.ctx.lineTo(lineX, spectrumY + spectrumHeight/2);
                    this.ctx.stroke();
                }
            });

            // Wavelength scale
            this.ctx.fillStyle = '#2C3E50';
            this.ctx.font = '10px Arial';
            this.ctx.textAlign = 'center';
            this.ctx.fillText('400nm', spectrumX - spectrumWidth/2, spectrumY + spectrumHeight/2 + 15);
            this.ctx.fillText('700nm', spectrumX + spectrumWidth/2, spectrumY + spectrumHeight/2 + 15);

            this.ctx.font = 'bold 12px Arial';
            this.ctx.fillText('Emission Spectrum', spectrumX, spectrumY - spectrumHeight/2 - 15);
        }

        // Title
        this.ctx.fillStyle = '#2C3E50';
        this.ctx.font = 'bold 16px Arial';
        this.ctx.textAlign = 'center';
        this.ctx.fillText(`${element} Emission Spectrum`, x, y - height/2 + 50);
    }

    wavelengthToColor(wavelength) {
        // Convert wavelength (nm) to RGB color
        let r = 0, g = 0, b = 0;

        if (wavelength >= 380 && wavelength < 440) {
            r = -(wavelength - 440) / (440 - 380);
            b = 1.0;
        } else if (wavelength >= 440 && wavelength < 490) {
            g = (wavelength - 440) / (490 - 440);
            b = 1.0;
        } else if (wavelength >= 490 && wavelength < 510) {
            g = 1.0;
            b = -(wavelength - 510) / (510 - 490);
        } else if (wavelength >= 510 && wavelength < 580) {
            r = (wavelength - 510) / (580 - 510);
            g = 1.0;
        } else if (wavelength >= 580 && wavelength < 645) {
            r = 1.0;
            g = -(wavelength - 645) / (645 - 580);
        } else if (wavelength >= 645 && wavelength <= 780) {
            r = 1.0;
        }

        r = Math.floor(r * 255);
        g = Math.floor(g * 255);
        b = Math.floor(b * 255);

        return `rgb(${r}, ${g}, ${b})`;
    }

    renderBlackbodyRadiation(diagram, x, y, width, height, options) {
        const temperatures = diagram.temperatures;
        const graphWidth = width - 100;
        const graphHeight = height - 100;

        // Draw axes
        this.ctx.strokeStyle = '#2C3E50';
        this.ctx.lineWidth = 2;
        
        this.ctx.beginPath();
        this.ctx.moveTo(x - graphWidth/2, y + graphHeight/2);
        this.ctx.lineTo(x + graphWidth/2, y + graphHeight/2);
        this.ctx.stroke();

        this.ctx.beginPath();
        this.ctx.moveTo(x - graphWidth/2, y - graphHeight/2);
        this.ctx.lineTo(x - graphWidth/2, y + graphHeight/2);
        this.ctx.stroke();

        // Labels
        this.ctx.fillStyle = '#2C3E50';
        this.ctx.font = 'italic 14px Arial';
        this.ctx.textAlign = 'center';
        this.ctx.fillText('Wavelength (nm)', x, y + graphHeight/2 + 35);

        this.ctx.save();
        this.ctx.translate(x - graphWidth/2 - 40, y);
        this.ctx.rotate(-Math.PI/2);
        this.ctx.fillText('Intensity', 0, 0);
        this.ctx.restore();

        // Draw curves for different temperatures
        const colors = ['#E74C3C', '#F39C12', '#F1C40F', '#3498DB'];

        temperatures.forEach((T, index) => {
            this.ctx.strokeStyle = colors[index % colors.length];
            this.ctx.lineWidth = 3;
            this.ctx.beginPath();

            let maxIntensity = 0;

            // Calculate max intensity for scaling
            for (let wavelength = 100; wavelength <= 3000; wavelength += 10) {
                const intensity = this.planckLaw(wavelength * 1e-9, T);
                if (intensity > maxIntensity) maxIntensity = intensity;
            }

            for (let i = 0; i <= 100; i++) {
                const wavelength = 100 + (i / 100) * 2900; // 100 to 3000 nm
                const intensity = this.planckLaw(wavelength * 1e-9, T);

                const px = x - graphWidth/2 + (i / 100) * graphWidth;
                const py = y + graphHeight/2 - (intensity / maxIntensity) * graphHeight * 0.9;

                if (i === 0) {
                    this.ctx.moveTo(px, py);
                } else {
                    this.ctx.lineTo(px, py);
                }
            }
            this.ctx.stroke();

            // Label
            this.ctx.fillStyle = colors[index % colors.length];
            this.ctx.font = 'bold 12px Arial';
            this.ctx.textAlign = 'left';
            this.ctx.fillText(`${T}K`, x + graphWidth/2 - 80, y - graphHeight/2 + 30 + index * 20);
        });

        // Show Wien's Law
        if (options.showWiensLaw) {
            temperatures.forEach((T, index) => {
                const peakWavelength = 2.898e-3 / T * 1e9; // nm

                if (peakWavelength >= 100 && peakWavelength <= 3000) {
                    const px = x - graphWidth/2 + ((peakWavelength - 100) / 2900) * graphWidth;

                    this.ctx.setLineDash([5, 5]);
                    this.ctx.strokeStyle = colors[index % colors.length];
                    this.ctx.lineWidth = 1.5;
                    this.ctx.beginPath();
                    this.ctx.moveTo(px, y + graphHeight/2);
                    this.ctx.lineTo(px, y - graphHeight/2);
                    this.ctx.stroke();
                    this.ctx.setLineDash([]);
                }
            });

            this.ctx.fillStyle = '#2C3E50';
            this.ctx.font = '12px Arial';
            this.ctx.textAlign = 'center';
            this.ctx.fillText("Wien's Law: λₘₐₓ = 2.898×10⁻³/T", x, y + graphHeight/2 + 60);
        }

        // Show peaks
        if (options.showPeaks) {
            temperatures.forEach((T, index) => {
                const peakWavelength = 2.898e-3 / T * 1e9;
                
                if (peakWavelength >= 100 && peakWavelength <= 3000) {
                    const px = x - graphWidth/2 + ((peakWavelength - 100) / 2900) * graphWidth;
                    const maxIntensity = this.planckLaw(peakWavelength * 1e-9, T);

                    // Calculate max for this curve
                    let curveMax = 0;
                    for (let wl = 100; wl <= 3000; wl += 10) {
                        const I = this.planckLaw(wl * 1e-9, T);
                        if (I > curveMax) curveMax = I;
                    }

                    const py = y + graphHeight/2 - (maxIntensity / curveMax) * graphHeight * 0.9;

                    this.ctx.fillStyle = colors[index % colors.length];
                    this.ctx.beginPath();
                    this.ctx.arc(px, py, 5, 0, Math.PI * 2);
                    this.ctx.fill();
                }
            });
        }
    }

    planckLaw(wavelength, temperature) {
        // Planck's law: I(λ,T) = (2hc²/λ⁵) / (e^(hc/λkT) - 1)
        const h = 6.626e-34; // Planck constant
        const c = 3e8;       // Speed of light
        const k = 1.381e-23; // Boltzmann constant

        const numerator = 2 * h * c * c / Math.pow(wavelength, 5);
        const exponent = (h * c) / (wavelength * k * temperature);
        const denominator = Math.exp(exponent) - 1;

        return numerator / denominator;
    }

    renderQuantumTunneling(diagram, x, y, width, height, options) {
        const barrierHeight = diagram.barrierHeight;
        const barrierWidth = diagram.barrierWidth;
        const particleEnergy = diagram.particleEnergy;

        const graphWidth = width - 100;
        const graphHeight = height - 100;

        // Draw axes
        this.ctx.strokeStyle = '#2C3E50';
        this.ctx.lineWidth = 2;
        
        this.ctx.beginPath();
        this.ctx.moveTo(x - graphWidth/2, y + graphHeight/2);
        this.ctx.lineTo(x + graphWidth/2, y + graphHeight/2);
        this.ctx.stroke();

        this.ctx.beginPath();
        this.ctx.moveTo(x - graphWidth/2, y - graphHeight/2);
        this.ctx.lineTo(x - graphWidth/2, y + graphHeight/2);
        this.ctx.stroke();

        // Labels
        this.ctx.fillStyle = '#2C3E50';
        this.ctx.font = 'italic 14px Arial';
        this.ctx.textAlign = 'center';
        this.ctx.fillText('Position', x, y + graphHeight/2 + 35);

        this.ctx.save();
        this.ctx.translate(x - graphWidth/2 - 40, y);
        this.ctx.rotate(-Math.PI/2);
        this.ctx.fillText('Potential Energy', 0, 0);
        this.ctx.restore();

        // Draw potential well
        if (options.showPotentialWell) {
            this.ctx.strokeStyle = '#34495E';
            this.ctx.fillStyle = 'rgba(149, 165, 166, 0.3)';
            this.ctx.lineWidth = 3;

            const barrierStartX = x - barrierWidth/2;
            const barrierEndX = x + barrierWidth/2;
            const barrierY = y + graphHeight/2 - (barrierHeight / 15) * graphHeight * 0.9;

            this.ctx.beginPath();
            this.ctx.moveTo(x - graphWidth/2, y + graphHeight/2);
            this.ctx.lineTo(barrierStartX, y + graphHeight/2);
            this.ctx.lineTo(barrierStartX, barrierY);
            this.ctx.lineTo(barrierEndX, barrierY);
            this.ctx.lineTo(barrierEndX, y + graphHeight/2);
            this.ctx.lineTo(x + graphWidth/2, y + graphHeight/2);
            this.ctx.stroke();

            // Fill barrier
            this.ctx.fillRect(barrierStartX, barrierY, barrierWidth, y + graphHeight/2 - barrierY);

            // Barrier label
            this.ctx.fillStyle = '#2C3E50';
            this.ctx.font = 'bold 12px Arial';
            this.ctx.textAlign = 'center';
            this.ctx.fillText('Potential Barrier', x, barrierY - 20);
            this.ctx.font = '11px Arial';
            this.ctx.fillText(`V₀ = ${barrierHeight} eV`, x, barrierY - 5);
        }

        // Particle energy level
        const energyY = y + graphHeight/2 - (particleEnergy / 15) * graphHeight * 0.9;

        this.ctx.strokeStyle = '#E74C3C';
        this.ctx.lineWidth = 2;
        this.ctx.setLineDash([5, 5]);
        this.ctx.beginPath();
        this.ctx.moveTo(x - graphWidth/2, energyY);
        this.ctx.lineTo(x + graphWidth/2, energyY);
        this.ctx.stroke();
        this.ctx.setLineDash([]);

        this.ctx.fillStyle = '#E74C3C';
        this.ctx.font = 'bold 12px Arial';
        this.ctx.textAlign = 'left';
        this.ctx.fillText(`Particle Energy E = ${particleEnergy} eV`, x - graphWidth/2 + 10, energyY - 10);

        // Draw wavefunction
        if (options.showWavefunction) {
            this.ctx.strokeStyle = '#3498DB';
            this.ctx.lineWidth = 2.5;
            this.ctx.beginPath();

            const wavelength = 30;
            let amplitude = 40;

            for (let i = 0; i <= 100; i++) {
                const px = x - graphWidth/2 + (i / 100) * graphWidth;
                const position = (i / 100) * graphWidth;

                // Exponential decay inside barrier
                if (px >= x - barrierWidth/2 && px <= x + barrierWidth/2) {
                    const distIntoBarrier = px - (x - barrierWidth/2);
                    const decayFactor = Math.exp(-distIntoBarrier / 20);
                    amplitude = 40 * decayFactor;
                } else if (px > x + barrierWidth/2) {
                    amplitude = 40 * Math.exp(-barrierWidth / 20);
                } else {
                    amplitude = 40;
                }

                const py = energyY + amplitude * Math.sin(position / wavelength * 2 * Math.PI);

                if (i === 0) {
                    this.ctx.moveTo(px, py);
                } else {
                    this.ctx.lineTo(px, py);
                }
            }
            this.ctx.stroke();

            this.ctx.fillStyle = '#3498DB';
            this.ctx.font = 'bold 11px Arial';
            this.ctx.textAlign = 'center';
            this.ctx.fillText('Wavefunction ψ(x)', x, y - graphHeight/2 + 20);
        }

        // Show probability
        if (options.showProbability) {
            const transmissionProb = Math.exp(-2 * barrierWidth / 20) * 100;

            this.ctx.fillStyle = '#27AE60';
            this.ctx.font = 'bold 14px Arial';
            this.ctx.textAlign = 'center';
            this.ctx.fillText(`Transmission Probability ≈ ${transmissionProb.toFixed(1)}%`, x, y + graphHeight/2 + 60);
        }

        // Classical vs Quantum
        this.ctx.fillStyle = '#2C3E50';
        this.ctx.font = '12px Arial';
        this.ctx.textAlign = 'center';
        if (particleEnergy < barrierHeight) {
            this.ctx.fillText('Classical: Particle reflects (E < V₀)', x - graphWidth/4, y + graphHeight/2 + 80);
            this.ctx.fillStyle = '#27AE60';
            this.ctx.fillText('Quantum: Particle can tunnel through!', x + graphWidth/4, y + graphHeight/2 + 80);
        }
    }

    renderElectronProbability(diagram, x, y, size, options) {
        const orbital = diagram.orbital;

        // Draw radial probability distribution
        if (options.showRadialDistribution) {
            const graphSize = size * 0.8;

            // Title
            this.ctx.fillStyle = '#2C3E50';
            this.ctx.font = 'bold 14px Arial';
            this.ctx.textAlign = 'center';
            this.ctx.fillText(`Radial Probability Distribution - ${orbital}`, x, y - size/2 - 20);

            // Draw axes
            this.ctx.strokeStyle = '#2C3E50';
            this.ctx.lineWidth = 2;
            
            this.ctx.beginPath();
            this.ctx.moveTo(x - graphSize/2, y);
            this.ctx.lineTo(x + graphSize/2, y);
            this.ctx.stroke();

            this.ctx.beginPath();
            this.ctx.moveTo(x - graphSize/2, y - graphSize/2);
            this.ctx.lineTo(x - graphSize/2, y);
            this.ctx.stroke();

            // Labels
            this.ctx.fillStyle = '#2C3E50';
            this.ctx.font = 'italic 12px Arial';
            this.ctx.textAlign = 'center';
            this.ctx.fillText('Distance from nucleus (r)', x, y + 25);

            this.ctx.save();
            this.ctx.translate(x - graphSize/2 - 30, y - graphSize/4);
            this.ctx.rotate(-Math.PI/2);
            this.ctx.fillText('P(r)', 0, 0);
            this.ctx.restore();

            // Draw probability curve
            this.ctx.strokeStyle = '#E74C3C';
            this.ctx.lineWidth = 3;
            this.ctx.beginPath();

            for (let i = 0; i <= 100; i++) {
                const r = (i / 100) * graphSize;
                let prob;

                // Simplified probability functions
                if (orbital === '1s') {
                    prob = Math.pow(r / 20, 2) * Math.exp(-r / 20);
                } else if (orbital === '2s') {
                    prob = Math.pow(r / 40, 2) * Math.pow(1 - r / 80, 2) * Math.exp(-r / 40);
                } else if (orbital === '2p') {
                    prob = Math.pow(r / 40, 4) * Math.exp(-r / 40);
                }

                const px = x - graphSize/2 + r;
                const py = y - prob * graphSize * 0.4;

                if (i === 0) {
                    this.ctx.moveTo(px, py);
                } else {
                    this.ctx.lineTo(px, py);
                }
            }
            this.ctx.stroke();

            // Mark most probable radius
            let maxProb = 0;
            let maxR = 0;
            for (let i = 0; i <= 100; i++) {
                const r = (i / 100) * graphSize;
                let prob;

                if (orbital === '1s') {
                    prob = Math.pow(r / 20, 2) * Math.exp(-r / 20);
                } else if (orbital === '2s') {
                    prob = Math.pow(r / 40, 2) * Math.pow(1 - r / 80, 2) * Math.exp(-r / 40);
                } else if (orbital === '2p') {
                    prob = Math.pow(r / 40, 4) * Math.exp(-r / 40);
                }

                if (prob > maxProb) {
                    maxProb = prob;
                    maxR = r;
                }
            }

            const peakX = x - graphSize/2 + maxR;
            const peakY = y - maxProb * graphSize * 0.4;

            this.ctx.fillStyle = '#F39C12';
            this.ctx.beginPath();
            this.ctx.arc(peakX, peakY, 5, 0, Math.PI * 2);
            this.ctx.fill();

            this.ctx.setLineDash([3, 3]);
            this.ctx.strokeStyle = '#F39C12';
            this.ctx.lineWidth = 1.5;
            this.ctx.beginPath();
            this.ctx.moveTo(peakX, y);
            this.ctx.lineTo(peakX, peakY);
            this.ctx.stroke();
            this.ctx.setLineDash([]);

            this.ctx.fillStyle = '#F39C12';
            this.ctx.font = '11px Arial';
            this.ctx.textAlign = 'center';
            this.ctx.fillText('Most probable', peakX, y + 15);
        }

        // Draw probability cloud
        if (options.showProbabilityCloud) {
            const cloudY = y + size/2 + 80;
            const cloudSize = size * 0.4;

            this.ctx.fillStyle = '#2C3E50';
            this.ctx.font = 'bold 12px Arial';
            this.ctx.textAlign = 'center';
            this.ctx.fillText('Electron Cloud', x, cloudY - cloudSize - 20);

            // Draw probability density as dots
            const numDots = 500;
            for (let i = 0; i < numDots; i++) {
                // Random angle
                const theta = Math.random() * Math.PI * 2;
                const phi = Math.random() * Math.PI;

                // Radial distribution
                let r;
                if (orbital === '1s') {
                    r = -Math.log(Math.random()) * cloudSize * 0.3;
                } else if (orbital === '2p') {
                    r = -Math.log(Math.random()) * cloudSize * 0.5;
                } else {
                    r = -Math.log(Math.random()) * cloudSize * 0.4;
                }

                // For p orbitals, add angular dependence
                if (orbital === '2p') {
                    if (Math.abs(Math.cos(phi)) < Math.random()) continue;
                }

                const dotX = x + r * Math.sin(phi) * Math.cos(theta);
                const dotY = cloudY + r * Math.cos(phi);

                this.ctx.fillStyle = `rgba(52, 152, 219, ${0.3 + Math.random() * 0.4})`;
                this.ctx.beginPath();
                this.ctx.arc(dotX, dotY, 2, 0, Math.PI * 2);
                this.ctx.fill();
            }
        }
    }

    renderWaveParticleDuality(diagram, x, y, width, height, options) {
        const particle = diagram.particle;
        const sectionWidth = width / 2;

        // Wave nature (left)
        const waveX = x - width/4;

        if (options.showWaveNature) {
            this.ctx.fillStyle = '#2C3E50';
            this.ctx.font = 'bold 16px Arial';
            this.ctx.textAlign = 'center';
            this.ctx.fillText('Wave Nature', waveX, y - height/3);

            // Draw wave
            this.ctx.strokeStyle = '#3498DB';
            this.ctx.lineWidth = 3;
            this.ctx.beginPath();

            const wavelength = 40;
            const amplitude = 50;
            const waveLength = sectionWidth * 0.8;

            for (let i = 0; i <= 100; i++) {
                const wx = waveX - waveLength/2 + (i / 100) * waveLength;
                const phase = (i / 100) * (waveLength / wavelength) * 2 * Math.PI;
                const wy = y + amplitude * Math.sin(phase);

                if (i === 0) {
                    this.ctx.moveTo(wx, wy);
                } else {
                    this.ctx.lineTo(wx, wy);
                }
            }
            this.ctx.stroke();

            // Wavelength indicator
            this.ctx.strokeStyle = '#16A085';
            this.ctx.lineWidth = 2;
            this.ctx.setLineDash([5, 5]);
            this.ctx.beginPath();
            this.ctx.moveTo(waveX - wavelength/2, y - amplitude - 20);
            this.ctx.lineTo(waveX + wavelength/2, y - amplitude - 20);
            this.ctx.stroke();
            this.ctx.setLineDash([]);

            this.drawArrowVector(waveX - wavelength/2, y - amplitude - 20, waveX - wavelength/2 + 10, y - amplitude - 20, '#16A085', 1.5);
            this.drawArrowVector(waveX + wavelength/2, y - amplitude - 20, waveX + wavelength/2 - 10, y - amplitude - 20, '#16A085', 1.5);

            this.ctx.fillStyle = '#16A085';
            this.ctx.font = '12px Arial';
            this.ctx.textAlign = 'center';
            this.ctx.fillText('λ', waveX, y - amplitude - 30);

            // Properties
            this.ctx.fillStyle = '#2C3E50';
            this.ctx.font = '11px Arial';
            this.ctx.textAlign = 'center';
            this.ctx.fillText('• Diffraction', waveX, y + height/4);
            this.ctx.fillText('• Interference', waveX, y + height/4 + 15);
            this.ctx.fillText('• Superposition', waveX, y + height/4 + 30);
        }

        // Particle nature (right)
        const particleX = x + width/4;

        if (options.showParticleNature) {
            this.ctx.fillStyle = '#2C3E50';
            this.ctx.font = 'bold 16px Arial';
            this.ctx.textAlign = 'center';
            this.ctx.fillText('Particle Nature', particleX, y - height/3);

            // Draw particle
            const particleSize = 25;
            this.ctx.fillStyle = '#E74C3C';
            this.ctx.beginPath();
            this.ctx.arc(particleX, y, particleSize, 0, Math.PI * 2);
            this.ctx.fill();
            this.ctx.strokeStyle = '#C0392B';
            this.ctx.lineWidth = 3;
            this.ctx.stroke();

            // Velocity arrow
            this.drawArrowVector(particleX + particleSize + 10, y, particleX + particleSize + 70, y, '#9B59B6', 3);

            this.ctx.fillStyle = '#9B59B6';
            this.ctx.font = 'bold 14px Arial';
            this.ctx.textAlign = 'center';
            this.ctx.fillText('v', particleX + particleSize + 90, y);

            // Properties
            this.ctx.fillStyle = '#2C3E50';
            this.ctx.font = '11px Arial';
            this.ctx.textAlign = 'center';
            this.ctx.fillText('• Localized', particleX, y + height/4);
            this.ctx.fillText('• Momentum', particleX, y + height/4 + 15);
            this.ctx.fillText('• Energy', particleX, y + height/4 + 30);
        }

        // Show experiment
        if (options.showExperiment) {
            const expY = y + height/3 + 60;

            this.ctx.fillStyle = '#2C3E50';
            this.ctx.font = 'bold 14px Arial';
            this.ctx.textAlign = 'center';
            this.ctx.fillText('Double-Slit Experiment', x, expY);

            // Simple double slit representation
            const slitX = x - 80;
            this.ctx.strokeStyle = '#34495E';
            this.ctx.lineWidth = 3;
            this.ctx.beginPath();
            this.ctx.moveTo(slitX, expY + 20);
            this.ctx.lineTo(slitX, expY + 30);
            this.ctx.moveTo(slitX, expY + 40);
            this.ctx.lineTo(slitX, expY + 50);
            this.ctx.stroke();

            // Interference pattern
            this.ctx.fillStyle = '#F39C12';
            for (let i = 0; i < 7; i++) {
                const barHeight = 20 - Math.abs(i - 3) * 3;
                this.ctx.fillRect(x + 20, expY + 20 + i * 5, 40, 3);
            }

            this.ctx.fillStyle = '#7F8C8D';
            this.ctx.font = '10px Arial';
            this.ctx.fillText('Particles sent', slitX, expY + 10);
            this.ctx.fillText('one at a time', slitX, expY + 65);
            this.ctx.fillText('Pattern emerges!', x + 40, expY + 60);
        }

        // de Broglie equation
        this.ctx.fillStyle = '#2C3E50';
        this.ctx.font = 'bold 14px Arial';
        this.ctx.textAlign = 'center';
        this.ctx.fillText('de Broglie: λ = h/p', x, y - height/2 + 30);
    }

    renderDeBroglie(diagram, x, y, width, height, options) {
        const particle = diagram.particle;
        const velocity = diagram.velocity;
        const mass = particle === 'electron' ? 9.11e-31 : 1.67e-27; // kg
        const h = 6.626e-34;
        const momentum = mass * velocity;
        const wavelength = h / momentum;

        const graphWidth = width - 100;
        const graphHeight = height - 100;

        // Title
        this.ctx.fillStyle = '#2C3E50';
        this.ctx.font = 'bold 16px Arial';
        this.ctx.textAlign = 'center';
        this.ctx.fillText(`de Broglie Wavelength - ${particle}`, x, y - height/2 + 30);

        // Show waveform
        if (options.showWaveform) {
            this.ctx.strokeStyle = '#3498DB';
            this.ctx.lineWidth = 3;
            this.ctx.beginPath();

            const displayWavelength = 50; // Scaled for display
            const amplitude = 60;

            for (let i = 0; i <= 100; i++) {
                const wx = x - graphWidth/2 + (i / 100) * graphWidth;
                const phase = (i / 100) * (graphWidth / displayWavelength) * 2 * Math.PI;
                const wy = y + amplitude * Math.sin(phase);

                if (i === 0) {
                    this.ctx.moveTo(wx, wy);
                } else {
                    this.ctx.lineTo(wx, wy);
                }
            }
            this.ctx.stroke();

            // Wavelength marker
            this.ctx.strokeStyle = '#16A085';
            this.ctx.lineWidth = 2;
            this.ctx.setLineDash([5, 5]);
            this.ctx.beginPath();
            this.ctx.moveTo(x - displayWavelength/2, y - amplitude - 30);
            this.ctx.lineTo(x + displayWavelength/2, y - amplitude - 30);
            this.ctx.stroke();
            this.ctx.setLineDash([]);

            this.drawArrowVector(x - displayWavelength/2, y - amplitude - 30, x - displayWavelength/2 + 10, y - amplitude - 30, '#16A085', 1.5);
            this.drawArrowVector(x + displayWavelength/2, y - amplitude - 30, x + displayWavelength/2 - 10, y - amplitude - 30, '#16A085', 1.5);

            this.ctx.fillStyle = '#16A085';
            this.ctx.font = 'bold 14px Arial';
            this.ctx.textAlign = 'center';
            this.ctx.fillText('λ', x, y - amplitude - 40);
        }

        // Show equation and calculation
        if (options.showEquation) {
            const calcY = y + height/4;

            this.ctx.fillStyle = '#2C3E50';
            this.ctx.font = 'bold 16px Arial';
            this.ctx.textAlign = 'center';
            this.ctx.fillText('λ = h / p = h / (mv)', x, calcY);

            this.ctx.font = '13px Arial';
            this.ctx.fillText(`λ = ${wavelength.toExponential(2)} m`, x, calcY + 25);

            this.ctx.font = '11px Arial';
            this.ctx.fillText(`h = 6.626×10⁻³⁴ J·s`, x - graphWidth/4, calcY + 50);
            this.ctx.fillText(`m = ${mass.toExponential(2)} kg`, x, calcY + 50);
            this.ctx.fillText(`v = ${velocity.toExponential(2)} m/s`, x + graphWidth/4, calcY + 50);
        }

        // Show comparison
        if (options.showComparison) {
            const compY = y + height/2 - 60;

            this.ctx.fillStyle = '#2C3E50';
            this.ctx.font = 'bold 12px Arial';
            this.ctx.textAlign = 'left';
            this.ctx.fillText('Comparison:', x - graphWidth/2, compY);

            this.ctx.font = '11px Arial';
            this.ctx.fillText('• Visible light: λ ≈ 500 nm', x - graphWidth/2, compY + 20);
            this.ctx.fillText(`• This ${particle}: λ ≈ ${(wavelength * 1e9).toExponential(2)} nm`, x - graphWidth/2, compY + 35);
            
            if (wavelength < 1e-10) {
                this.ctx.fillStyle = '#27AE60';
                this.ctx.fillText('✓ Wave nature significant at atomic scale', x - graphWidth/2, compY + 50);
            } else {
                this.ctx.fillStyle = '#E74C3C';
                this.ctx.fillText('Wavelength too small to observe easily', x - graphWidth/2, compY + 50);
            }
        }
    }

    // ========== RELATIVITY RENDERERS ==========

    renderSpacetimeDiagram(diagram, x, y, width, height, options) {
        const events = diagram.events;
        const graphWidth = width - 100;
        const graphHeight = height - 100;

        // Draw axes
        this.ctx.strokeStyle = '#2C3E50';
        this.ctx.lineWidth = 2;
        
        // Space axis (horizontal)
        this.ctx.beginPath();
        this.ctx.moveTo(x - graphWidth/2, y);
        this.ctx.lineTo(x + graphWidth/2, y);
        this.ctx.stroke();

        // Time axis (vertical)
        this.ctx.beginPath();
        this.ctx.moveTo(x, y - graphHeight/2);
        this.ctx.lineTo(x, y + graphHeight/2);
        this.ctx.stroke();

        // Labels
        this.ctx.fillStyle = '#2C3E50';
        this.ctx.font = 'italic 14px Arial';
        this.ctx.textAlign = 'center';
        this.ctx.fillText('Position (x)', x + graphWidth/2 + 30, y + 5);
        this.ctx.fillText('Time (t)', x - 10, y - graphHeight/2 - 10);

        // Show light cones
        if (options.showLightCones) {
            this.ctx.strokeStyle = 'rgba(241, 196, 15, 0.5)';
            this.ctx.lineWidth = 2;
            this.ctx.setLineDash([5, 5]);

            // Future light cone
            this.ctx.beginPath();
            this.ctx.moveTo(x, y);
            this.ctx.lineTo(x - graphWidth/2, y - graphHeight/2);
            this.ctx.stroke();

            this.ctx.beginPath();
            this.ctx.moveTo(x, y);
            this.ctx.lineTo(x + graphWidth/2, y - graphHeight/2);
            this.ctx.stroke();

            // Past light cone
            this.ctx.beginPath();
            this.ctx.moveTo(x, y);
            this.ctx.lineTo(x - graphWidth/2, y + graphHeight/2);
            this.ctx.stroke();

            this.ctx.beginPath();
            this.ctx.moveTo(x, y);
            this.ctx.lineTo(x + graphWidth/2, y + graphHeight/2);
            this.ctx.stroke();

            this.ctx.setLineDash([]);

            // Labels
            this.ctx.fillStyle = '#F39C12';
            this.ctx.font = '11px Arial';
            this.ctx.textAlign = 'center';
            this.ctx.fillText('Future', x, y - graphHeight/2 + 20);
            this.ctx.fillText('Past', x, y + graphHeight/2 - 10);
            this.ctx.fillText('Light cone (c)', x + graphWidth/3, y - graphHeight/3);
        }

        // Draw events
        events.forEach((event, index) => {
            const eventX = x + event.x;
            const eventY = y - event.t; // Negative because time increases upward

            // Event point
            const colors = ['#E74C3C', '#3498DB', '#2ECC71', '#9B59B6'];
            const color = colors[index % colors.length];

            this.ctx.fillStyle = color;
            this.ctx.beginPath();
            this.ctx.arc(eventX, eventY, 8, 0, Math.PI * 2);
            this.ctx.fill();
            this.ctx.strokeStyle = this.darkenColor(color, 20);
            this.ctx.lineWidth = 2;
            this.ctx.stroke();

            // Event label
            this.ctx.fillStyle = color;
            this.ctx.font = 'bold 14px Arial';
            this.ctx.textAlign = 'center';
            this.ctx.fillText(event.label, eventX, eventY - 15);
        });

        // Show worldlines
        if (options.showWorldlines) {
            // Worldline for stationary object
            this.ctx.strokeStyle = '#7F8C8D';
            this.ctx.lineWidth = 2;
            this.ctx.beginPath();
            this.ctx.moveTo(x, y + graphHeight/2);
            this.ctx.lineTo(x, y - graphHeight/2);
            this.ctx.stroke();

            this.ctx.fillStyle = '#7F8C8D';
            this.ctx.font = '11px Arial';
            this.ctx.textAlign = 'left';
            this.ctx.fillText('Stationary', x + 5, y);

            // Worldline for moving object
            this.ctx.strokeStyle = '#E67E22';
            this.ctx.lineWidth = 2;
            this.ctx.beginPath();
            this.ctx.moveTo(x - graphWidth/3, y + graphHeight/2);
            this.ctx.lineTo(x + graphWidth/3, y - graphHeight/2);
            this.ctx.stroke();

            this.ctx.fillStyle = '#E67E22';
            this.ctx.fillText('Moving', x + graphWidth/3 + 5, y - graphHeight/2 + 20);
        }

        // Show axes labels
        if (options.showAxes) {
            this.ctx.fillStyle = '#2C3E50';
            this.ctx.font = '11px Arial';
            this.ctx.textAlign = 'center';
            
            // Grid marks
            for (let i = -2; i <= 2; i++) {
                if (i !== 0) {
                    // Time marks
                    this.ctx.fillText(i.toString(), x - 20, y - i * (graphHeight/5));
                    // Space marks
                    this.ctx.fillText(i.toString(), x + i * (graphWidth/5), y + 20);
                }
            }
        }
    }

    renderTimeDilation(diagram, x, y, width, height, options) {
        const graphWidth = width - 100;
        const graphHeight = height - 100;

        // Draw axes
        this.ctx.strokeStyle = '#2C3E50';
        this.ctx.lineWidth = 2;
        
        this.ctx.beginPath();
        this.ctx.moveTo(x - graphWidth/2, y + graphHeight/2);
        this.ctx.lineTo(x + graphWidth/2, y + graphHeight/2);
        this.ctx.stroke();

        this.ctx.beginPath();
        this.ctx.moveTo(x - graphWidth/2, y - graphHeight/2);
        this.ctx.lineTo(x - graphWidth/2, y + graphHeight/2);
        this.ctx.stroke();

        // Labels
        this.ctx.fillStyle = '#2C3E50';
        this.ctx.font = 'italic 14px Arial';
        this.ctx.textAlign = 'center';
        this.ctx.fillText('Velocity (v/c)', x, y + graphHeight/2 + 35);

        this.ctx.save();
        this.ctx.translate(x - graphWidth/2 - 40, y);
        this.ctx.rotate(-Math.PI/2);
        this.ctx.fillText('Time Dilation Factor (γ)', 0, 0);
        this.ctx.restore();

        // Draw Lorentz factor curve
        if (options.showLorentzFactor) {
            this.ctx.strokeStyle = '#E74C3C';
            this.ctx.lineWidth = 3;
            this.ctx.beginPath();

            for (let i = 0; i <= 100; i++) {
                const v_c = i / 100; // v/c from 0 to 1
                const gamma = 1 / Math.sqrt(1 - v_c * v_c);

                // Limit gamma for display
                const displayGamma = Math.min(gamma, 10);

                const px = x - graphWidth/2 + (v_c) * graphWidth;
                const py = y + graphHeight/2 - (displayGamma / 10) * graphHeight * 0.9;

                if (i === 0) {
                    this.ctx.moveTo(px, py);
                } else {
                    this.ctx.lineTo(px, py);
                }
            }
            this.ctx.stroke();

            // Mark specific velocities
            const velocities = [0.5, 0.7, 0.9, 0.99];
            velocities.forEach(v_c => {
                const gamma = 1 / Math.sqrt(1 - v_c * v_c);
                const displayGamma = Math.min(gamma, 10);

                const px = x - graphWidth/2 + v_c * graphWidth;
                const py = y + graphHeight/2 - (displayGamma / 10) * graphHeight * 0.9;

                this.ctx.fillStyle = '#F39C12';
                this.ctx.beginPath();
                this.ctx.arc(px, py, 5, 0, Math.PI * 2);
                this.ctx.fill();

                this.ctx.fillStyle = '#F39C12';
                this.ctx.font = '10px Arial';
                this.ctx.textAlign = 'center';
                this.ctx.fillText(`${v_c}c`, px, y + graphHeight/2 + 15);
                this.ctx.fillText(`γ=${gamma.toFixed(2)}`, px, py - 15);
            });
        }

        // Show equation
        if (options.showEquation) {
            this.ctx.fillStyle = '#2C3E50';
            this.ctx.font = 'bold 16px Arial';
            this.ctx.textAlign = 'center';
            this.ctx.fillText('γ = 1 / √(1 - v²/c²)', x, y - graphHeight/2 - 20);

            this.ctx.font = '14px Arial';
            this.ctx.fillText('Δt = γ Δt₀', x, y - graphHeight/2 + 5);
        }

        // Show example
        if (options.showExample) {
            const exampleY = y + height/3;

            this.ctx.fillStyle = '#2C3E50';
            this.ctx.font = 'bold 13px Arial';
            this.ctx.textAlign = 'left';
            this.ctx.fillText('Example: Spaceship at v = 0.9c', x - graphWidth/2, exampleY);

            const gamma = 1 / Math.sqrt(1 - 0.9 * 0.9);

            this.ctx.font = '12px Arial';
            this.ctx.fillText(`γ = ${gamma.toFixed(2)}`, x - graphWidth/2, exampleY + 20);
            this.ctx.fillText('1 hour on spaceship = ' + (gamma).toFixed(2) + ' hours on Earth', x - graphWidth/2, exampleY + 37);
        }
    }

    renderLengthContraction(diagram, x, y, width, height, options) {
        const properLength = diagram.properLength;
        const velocity = diagram.velocity;
        const gamma = 1 / Math.sqrt(1 - velocity * velocity);
        const contractedLength = properLength / gamma;

        const scaleY = y;

        // Rest frame
        if (options.showRestFrame) {
            const restY = scaleY - height/4;

            this.ctx.fillStyle = '#2C3E50';
            this.ctx.font = 'bold 14px Arial';
            this.ctx.textAlign = 'center';
            this.ctx.fillText('Rest Frame (v = 0)', x, restY - 40);

            // Draw object at rest
            this.ctx.fillStyle = '#3498DB';
            this.ctx.fillRect(x - properLength/2, restY - 25, properLength, 50);
            this.ctx.strokeStyle = '#2980B9';
            this.ctx.lineWidth = 3;
            this.ctx.strokeRect(x - properLength/2, restY - 25, properLength, 50);

            // Length indicator
            this.ctx.strokeStyle = '#16A085';
            this.ctx.lineWidth = 2;
            this.ctx.setLineDash([5, 5]);
            this.ctx.beginPath();
            this.ctx.moveTo(x - properLength/2, restY + 40);
            this.ctx.lineTo(x + properLength/2, restY + 40);
            this.ctx.stroke();
            this.ctx.setLineDash([]);

            this.drawArrowVector(x - properLength/2, restY + 40, x - properLength/2 + 15, restY + 40, '#16A085', 1.5);
            this.drawArrowVector(x + properLength/2, restY + 40, x + properLength/2 - 15, restY + 40, '#16A085', 1.5);

            this.ctx.fillStyle = '#16A085';
            this.ctx.font = 'bold 12px Arial';
            this.ctx.textAlign = 'center';
            this.ctx.fillText(`L₀ = ${properLength} m`, x, restY + 55);
        }

        // Moving frame
        if (options.showMovingFrame) {
            const movingY = scaleY + height/4;

            this.ctx.fillStyle = '#2C3E50';
            this.ctx.font = 'bold 14px Arial';
            this.ctx.textAlign = 'center';
            this.ctx.fillText(`Moving Frame (v = ${velocity}c)`, x, movingY - 40);

            // Draw contracted object
            this.ctx.fillStyle = '#E74C3C';
            this.ctx.fillRect(x - contractedLength/2, movingY - 25, contractedLength, 50);
            this.ctx.strokeStyle = '#C0392B';
            this.ctx.lineWidth = 3;
            this.ctx.strokeRect(x - contractedLength/2, movingY - 25, contractedLength, 50);

            // Velocity arrow
            this.drawArrowVector(x + contractedLength/2 + 20, movingY, x + contractedLength/2 + 70, movingY, '#9B59B6', 3);
            this.ctx.fillStyle = '#9B59B6';
            this.ctx.font = 'bold 14px Arial';
            this.ctx.textAlign = 'center';
            this.ctx.fillText('v', x + contractedLength/2 + 80, movingY - 10);

            // Length indicator
            this.ctx.strokeStyle = '#E67E22';
            this.ctx.lineWidth = 2;
            this.ctx.setLineDash([5, 5]);
            this.ctx.beginPath();
            this.ctx.moveTo(x - contractedLength/2, movingY + 40);
            this.ctx.lineTo(x + contractedLength/2, movingY + 40);
            this.ctx.stroke();
            this.ctx.setLineDash([]);

            this.drawArrowVector(x - contractedLength/2, movingY + 40, x - contractedLength/2 + 15, movingY + 40, '#E67E22', 1.5);
            this.drawArrowVector(x + contractedLength/2, movingY + 40, x + contractedLength/2 - 15, movingY + 40, '#E67E22', 1.5);

            this.ctx.fillStyle = '#E67E22';
            this.ctx.font = 'bold 12px Arial';
            this.ctx.textAlign = 'center';
            this.ctx.fillText(`L = ${contractedLength.toFixed(1)} m`, x, movingY + 55);
        }

        // Show equation
        if (options.showEquation) {
            this.ctx.fillStyle = '#2C3E50';
            this.ctx.font = 'bold 16px Arial';
            this.ctx.textAlign = 'center';
            this.ctx.fillText('L = L₀ / γ = L₀ √(1 - v²/c²)', x, y - height/2 + 30);

            this.ctx.font = '13px Arial';
            const ratio = (contractedLength / properLength * 100).toFixed(1);
            this.ctx.fillText(`Contracted to ${ratio}% of original length`, x, y - height/2 + 55);
        }
    }

    renderCurvedSpacetime(diagram, x, y, width, height, options) {
        const mass = diagram.mass;
        const gridSize = 20;
        const gridWidth = width * 0.8;
        const gridHeight = height * 0.7;

        if (options.show3D) {
            // Draw curved grid to represent spacetime
            if (options.showGrid) {
                const rows = 15;
                const cols = 15;

                this.ctx.strokeStyle = '#3498DB';
                this.ctx.lineWidth = 1.5;

                // Horizontal grid lines (curved)
                for (let row = 0; row < rows; row++) {
                    this.ctx.beginPath();
                    for (let col = 0; col < cols; col++) {
                        const gx = x - gridWidth/2 + (col / cols) * gridWidth;
                        const gz = row / rows;

                        // Distance from center
                        const dx = gx - x;
                        const distFromCenter = Math.sqrt(dx * dx + (gz - 0.5) * (gz - 0.5) * gridHeight * gridHeight);

                        // Curvature based on mass and distance
                        const curvature = (mass / 100) * 200 / (1 + distFromCenter / 50);

                        const gy = y + (row - rows/2) * (gridHeight / rows) + curvature;

                        if (col === 0) {
                            this.ctx.moveTo(gx, gy);
                        } else {
                            this.ctx.lineTo(gx, gy);
                        }
                    }
                    this.ctx.stroke();
                }

                // Vertical grid lines (curved)
                for (let col = 0; col < cols; col++) {
                    this.ctx.beginPath();
                    for (let row = 0; row < rows; row++) {
                        const gx = x - gridWidth/2 + (col / cols) * gridWidth;
                        const gz = row / rows;

                        const dx = gx - x;
                        const distFromCenter = Math.sqrt(dx * dx + (gz - 0.5) * (gz - 0.5) * gridHeight * gridHeight);

                        const curvature = (mass / 100) * 200 / (1 + distFromCenter / 50);

                        const gy = y + (row - rows/2) * (gridHeight / rows) + curvature;

                        if (row === 0) {
                            this.ctx.moveTo(gx, gy);
                        } else {
                            this.ctx.lineTo(gx, gy);
                        }
                    }
                    this.ctx.stroke();
                }
            }

            // Draw mass at center
            if (options.showMass) {
                const massRadius = Math.sqrt(mass) * 2;

                const gradient = this.ctx.createRadialGradient(x, y + 100, 0, x, y + 100, massRadius);
                gradient.addColorStop(0, '#F39C12');
                gradient.addColorStop(1, '#E67E22');

                this.ctx.fillStyle = gradient;
                this.ctx.beginPath();
                this.ctx.arc(x, y + 100, massRadius, 0, Math.PI * 2);
                this.ctx.fill();

                this.ctx.strokeStyle = '#D35400';
                this.ctx.lineWidth = 2;
                this.ctx.stroke();

                this.ctx.fillStyle = '#2C3E50';
                this.ctx.font = 'bold 12px Arial';
                this.ctx.textAlign = 'center';
                this.ctx.fillText('Mass', x, y + 100 + massRadius + 20);
            }

            // Draw orbital paths
            if (options.showOrbits) {
                const orbitRadii = [80, 120, 160];
                orbitRadii.forEach((radius, index) => {
                    this.ctx.strokeStyle = `rgba(46, 204, 113, ${0.7 - index * 0.2})`;
                    this.ctx.lineWidth = 2;
                    this.ctx.setLineDash([5, 5]);
                    this.ctx.beginPath();
                    this.ctx.ellipse(x, y + 100, radius, radius * 0.3, 0, 0, Math.PI * 2);
                    this.ctx.stroke();
                    this.ctx.setLineDash([]);
                });

                // Small orbiting object
                this.ctx.fillStyle = '#ECF0F1';
                this.ctx.beginPath();
                this.ctx.arc(x + 80, y + 100, 6, 0, Math.PI * 2);
                this.ctx.fill();
                this.ctx.strokeStyle = '#BDC3C7';
                this.ctx.lineWidth = 1;
                this.ctx.stroke();
            }
        }

        // Explanation
        this.ctx.fillStyle = '#2C3E50';
        this.ctx.font = 'bold 14px Arial';
        this.ctx.textAlign = 'center';
        this.ctx.fillText('General Relativity: Mass Curves Spacetime', x, y - height/2 + 30);

        this.ctx.font = '11px Arial';
        this.ctx.fillText('"Matter tells spacetime how to curve,', x, y - height/2 + 50);
        this.ctx.fillText('spacetime tells matter how to move"', x, y - height/2 + 65);
    }

    renderTwinParadox(diagram, x, y, width, height, options) {
        const tripDuration = diagram.tripDuration;
        const velocity = diagram.velocity;
        const gamma = 1 / Math.sqrt(1 - velocity * velocity);
        const earthTime = tripDuration * gamma * 2; // Round trip
        const spaceshipTime = tripDuration * 2;

        // Draw spacetime paths
        if (options.showSpacetimePath) {
            const pathWidth = width * 0.6;
            const pathHeight = height * 0.7;

            // Axes
            this.ctx.strokeStyle = '#95A5A6';
            this.ctx.lineWidth = 1;
            this.ctx.setLineDash([3, 3]);
            this.ctx.beginPath();
            this.ctx.moveTo(x - pathWidth/2, y + pathHeight/2);
            this.ctx.lineTo(x + pathWidth/2, y + pathHeight/2);
            this.ctx.stroke();

            this.ctx.beginPath();
            this.ctx.moveTo(x - pathWidth/2, y - pathHeight/2);
            this.ctx.lineTo(x - pathWidth/2, y + pathHeight/2);
            this.ctx.stroke();
            this.ctx.setLineDash([]);

            // Labels
            this.ctx.fillStyle = '#2C3E50';
            this.ctx.font = '12px Arial';
            this.ctx.textAlign = 'center';
            this.ctx.fillText('Position', x, y + pathHeight/2 + 20);
            this.ctx.save();
            this.ctx.translate(x - pathWidth/2 - 30, y);
            this.ctx.rotate(-Math.PI/2);
            this.ctx.fillText('Time', 0, 0);
            this.ctx.restore();

            // Earth twin (stationary worldline)
            this.ctx.strokeStyle = '#3498DB';
            this.ctx.lineWidth = 3;
            this.ctx.beginPath();
            this.ctx.moveTo(x - pathWidth/2, y + pathHeight/2);
            this.ctx.lineTo(x - pathWidth/2, y - pathHeight/2);
            this.ctx.stroke();

            this.ctx.fillStyle = '#3498DB';
            this.ctx.font = 'bold 12px Arial';
            this.ctx.textAlign = 'left';
            this.ctx.fillText('Earth Twin', x - pathWidth/2 + 10, y);

            // Spaceship twin (moving worldline)
            this.ctx.strokeStyle = '#E74C3C';
            this.ctx.lineWidth = 3;

            // Outbound journey
            this.ctx.beginPath();
            this.ctx.moveTo(x - pathWidth/2, y + pathHeight/2);
            this.ctx.lineTo(x + pathWidth/2, y);
            this.ctx.stroke();

            // Return journey
            this.ctx.beginPath();
            this.ctx.moveTo(x + pathWidth/2, y);
            this.ctx.lineTo(x - pathWidth/2, y - pathHeight/2);
            this.ctx.stroke();

            this.ctx.fillStyle = '#E74C3C';
            this.ctx.textAlign = 'center';
            this.ctx.fillText('Spaceship Twin', x + pathWidth/3, y - 20);

            // Turnaround point
            this.ctx.fillStyle = '#F39C12';
            this.ctx.beginPath();
            this.ctx.arc(x + pathWidth/2, y, 8, 0, Math.PI * 2);
            this.ctx.fill();

            this.ctx.fillStyle = '#F39C12';
            this.ctx.font = '11px Arial';
            this.ctx.textAlign = 'left';
            this.ctx.fillText('Turnaround', x + pathWidth/2 + 12, y + 5);
        }

        // Show ages
        if (options.showAges) {
            const ageY = y + height/3;

            this.ctx.fillStyle = '#2C3E50';
            this.ctx.font = 'bold 14px Arial';
            this.ctx.textAlign = 'center';
            this.ctx.fillText('After the journey:', x, ageY);

            // Earth twin age
            this.ctx.fillStyle = '#3498DB';
            this.ctx.font = '13px Arial';
            this.ctx.textAlign = 'left';
            this.ctx.fillText(`Earth Twin: aged ${earthTime.toFixed(1)} years`, x - width/3, ageY + 25);

            // Spaceship twin age
            this.ctx.fillStyle = '#E74C3C';
            this.ctx.fillText(`Spaceship Twin: aged ${spaceshipTime.toFixed(1)} years`, x - width/3, ageY + 45);

            // Difference
            this.ctx.fillStyle = '#27AE60';
            this.ctx.font = 'bold 13px Arial';
            this.ctx.fillText(`Difference: ${(earthTime - spaceshipTime).toFixed(1)} years!`, x - width/3, ageY + 70);
        }

        // Show explanation
        if (options.showExplanation) {
            this.ctx.fillStyle = '#2C3E50';
            this.ctx.font = '11px Arial';
            this.ctx.textAlign = 'center';
            this.ctx.fillText('The spaceship twin experiences time dilation', x, y - height/2 + 50);
            this.ctx.fillText('due to traveling at high velocity', x, y - height/2 + 65);
            this.ctx.fillText(`(v = ${velocity}c, γ = ${gamma.toFixed(2)})`, x, y - height/2 + 80);
        }

        // Title
        this.ctx.fillStyle = '#2C3E50';
        this.ctx.font = 'bold 16px Arial';
        this.ctx.textAlign = 'center';
        this.ctx.fillText('Twin Paradox', x, y - height/2 + 25);
    }

    renderVelocityAddition(diagram, x, y, width, height, options) {
        const v1 = diagram.v1;
        const v2 = diagram.v2;
        const vClassical = v1 + v2;
        const vRelativistic = (v1 + v2) / (1 + v1 * v2);

        const barY = y;
        const barHeight = 50;
        const barMaxWidth = width * 0.6;

        // Classical addition
        if (options.showClassical) {
            const classicalY = barY - height/4;

            this.ctx.fillStyle = '#2C3E50';
            this.ctx.font = 'bold 14px Arial';
            this.ctx.textAlign = 'center';
            this.ctx.fillText('Classical Physics', x, classicalY - 40);

            // Bar for v1
            const v1Width = (v1 / 2) * barMaxWidth; // Divide by 2 for max scale
            this.ctx.fillStyle = '#3498DB';
            this.ctx.fillRect(x - barMaxWidth/2, classicalY, v1Width, barHeight);
            this.ctx.strokeStyle = '#2980B9';
            this.ctx.lineWidth = 2;
            this.ctx.strokeRect(x - barMaxWidth/2, classicalY, v1Width, barHeight);

            this.ctx.fillStyle = '#2C3E50';
            this.ctx.font = '12px Arial';
            this.ctx.textAlign = 'center';
            this.ctx.fillText(`v₁ = ${v1}c`, x - barMaxWidth/2 + v1Width/2, classicalY + barHeight/2 + 5);

            // Bar for v2
            const v2Width = (v2 / 2) * barMaxWidth;
            this.ctx.fillStyle = '#E74C3C';
            this.ctx.fillRect(x - barMaxWidth/2 + v1Width, classicalY, v2Width, barHeight);
            this.ctx.strokeStyle = '#C0392B';
            this.ctx.strokeRect(x - barMaxWidth/2 + v1Width, classicalY, v2Width, barHeight);

            this.ctx.fillStyle = '#2C3E50';
            this.ctx.fillText(`v₂ = ${v2}c`, x - barMaxWidth/2 + v1Width + v2Width/2, classicalY + barHeight/2 + 5);

            // Total
            this.ctx.fillStyle = '#2C3E50';
            this.ctx.font = 'bold 13px Arial';
            this.ctx.textAlign = 'left';
            this.ctx.fillText(`v = v₁ + v₂ = ${vClassical}c`, x - barMaxWidth/2, classicalY + barHeight + 25);

            // Warning if exceeds c
            if (vClassical >= 1) {
                this.ctx.fillStyle = '#E74C3C';
                this.ctx.font = 'bold 12px Arial';
                this.ctx.fillText('✗ Exceeds speed of light!', x - barMaxWidth/2, classicalY + barHeight + 45);
            }
        }

        // Relativistic addition
        if (options.showRelativistic) {
            const relativisticY = barY + height/4;

            this.ctx.fillStyle = '#2C3E50';
            this.ctx.font = 'bold 14px Arial';
            this.ctx.textAlign = 'center';
            this.ctx.fillText('Relativistic Physics', x, relativisticY - 40);

            // Combined velocity
            const vTotalWidth = (vRelativistic / 1) * barMaxWidth * 0.95; // Scale to fit
            this.ctx.fillStyle = '#9B59B6';
            this.ctx.fillRect(x - barMaxWidth/2, relativisticY, vTotalWidth, barHeight);
            this.ctx.strokeStyle = '#8E44AD';
            this.ctx.lineWidth = 2;
            this.ctx.strokeRect(x - barMaxWidth/2, relativisticY, vTotalWidth, barHeight);

            this.ctx.fillStyle = '#FFFFFF';
            this.ctx.font = 'bold 12px Arial';
            this.ctx.textAlign = 'center';
            this.ctx.fillText(`v = ${vRelativistic.toFixed(3)}c`, x - barMaxWidth/2 + vTotalWidth/2, relativisticY + barHeight/2 + 5);

            // Formula
            this.ctx.fillStyle = '#2C3E50';
            this.ctx.font = 'bold 13px Arial';
            this.ctx.textAlign = 'left';
            this.ctx.fillText('v = (v₁ + v₂) / (1 + v₁v₂/c²)', x - barMaxWidth/2, relativisticY + barHeight + 25);

            // Check mark
            this.ctx.fillStyle = '#27AE60';
            this.ctx.font = 'bold 12px Arial';
            this.ctx.fillText('✓ Always less than c', x - barMaxWidth/2, relativisticY + barHeight + 45);
        }

        // Speed of light reference
        const cLineX = x - barMaxWidth/2 + barMaxWidth * 0.95;
        this.ctx.strokeStyle = '#F39C12';
        this.ctx.lineWidth = 3;
        this.ctx.setLineDash([5, 5]);
        this.ctx.beginPath();
        this.ctx.moveTo(cLineX, y - height/2 + 50);
        this.ctx.lineTo(cLineX, y + height/2 - 50);
        this.ctx.stroke();
        this.ctx.setLineDash([]);

        this.ctx.fillStyle = '#F39C12';
        this.ctx.font = 'bold 14px Arial';
        this.ctx.textAlign = 'center';
        this.ctx.fillText('c', cLineX + 15, y);

        // Show comparison
        if (options.showComparison) {
            this.ctx.fillStyle = '#2C3E50';
            this.ctx.font = 'bold 14px Arial';
            this.ctx.textAlign = 'center';
            this.ctx.fillText('Comparison:', x, y + height/2 - 80);

            this.ctx.font = '12px Arial';
            this.ctx.fillText(`Classical: ${vClassical}c ${vClassical >= 1 ? '(impossible!)' : ''}`, x, y + height/2 - 60);
            this.ctx.fillText(`Relativistic: ${vRelativistic.toFixed(3)}c (always < c)`, x, y + height/2 - 40);
        }
    }

    // ========== NUCLEAR PHYSICS RENDERERS ==========

    renderNuclearStructurePhysics(diagram, x, y, size, options) {
        const protons = diagram.protons;
        const neutrons = diagram.neutrons;
        const particleRadius = size * 0.08;
        const totalParticles = protons + neutrons;
        const gridSize = Math.ceil(Math.sqrt(totalParticles));

        // Title
        this.ctx.fillStyle = '#2C3E50';
        this.ctx.font = 'bold 16px Arial';
        this.ctx.textAlign = 'center';
        this.ctx.fillText(`Nuclear Structure - ${diagram.element}`, x, y - size/2 - 20);

        let particleIndex = 0;
        for (let row = 0; row < gridSize; row++) {
            for (let col = 0; col < gridSize; col++) {
                if (particleIndex >= totalParticles) break;

                const px = x + (col - gridSize / 2) * particleRadius * 2.2;
                const py = y + (row - gridSize / 2) * particleRadius * 2.2;

                const isProton = particleIndex < protons;
                const color = isProton ? '#E74C3C' : '#3498DB';
                const label = isProton ? 'p' : 'n';

                // Particle
                const gradient = this.ctx.createRadialGradient(px - 3, py - 3, 0, px, py, particleRadius);
                gradient.addColorStop(0, this.lightenColor(color, 40));
                gradient.addColorStop(1, color);

                this.ctx.fillStyle = gradient;
                this.ctx.beginPath();
                this.ctx.arc(px, py, particleRadius, 0, Math.PI * 2);
                this.ctx.fill();

                this.ctx.strokeStyle = this.darkenColor(color, 20);
                this.ctx.lineWidth = 1.5;
                this.ctx.stroke();

                // Label
                if (options.showLabels) {
                    this.ctx.fillStyle = '#FFFFFF';
                    this.ctx.font = 'bold 10px Arial';
                    this.ctx.textAlign = 'center';
                    this.ctx.textBaseline = 'middle';
                    this.ctx.fillText(label, px, py);
                }

                particleIndex++;
            }
        }

        // Show forces
        if (options.showForces) {
            // Strong nuclear force (attractive, short range)
            this.ctx.strokeStyle = 'rgba(46, 204, 113, 0.4)';
            this.ctx.lineWidth = 2;

            for (let i = 0; i < 5; i++) {
                const angle = (i / 5) * Math.PI * 2;
                const r1 = size * 0.15;
                const r2 = size * 0.25;

                this.ctx.beginPath();
                this.ctx.moveTo(x + r1 * Math.cos(angle), y + r1 * Math.sin(angle));
                this.ctx.lineTo(x + r2 * Math.cos(angle), y + r2 * Math.sin(angle));
                this.ctx.stroke();
            }

            this.ctx.fillStyle = '#27AE60';
            this.ctx.font = '11px Arial';
            this.ctx.textAlign = 'center';
            this.ctx.fillText('Strong Nuclear Force', x, y + size/2 + 40);
        }

        // Legend
        const legendY = y + size/2 + 60;
        
        this.ctx.fillStyle = '#E74C3C';
        this.ctx.beginPath();
        this.ctx.arc(x - 80, legendY, 8, 0, Math.PI * 2);
        this.ctx.fill();
        this.ctx.fillStyle = '#2C3E50';
        this.ctx.font = '12px Arial';
        this.ctx.textAlign = 'left';
        this.ctx.fillText(`Protons: ${protons}`, x - 65, legendY + 4);

        this.ctx.fillStyle = '#3498DB';
        this.ctx.beginPath();
        this.ctx.arc(x - 80, legendY + 20, 8, 0, Math.PI * 2);
        this.ctx.fill();
        this.ctx.fillStyle = '#2C3E50';
        this.ctx.fillText(`Neutrons: ${neutrons}`, x - 65, legendY + 24);
    }

    renderNuclearDecayPhysics(diagram, x, y, width, height, options) {
        const decayType = diagram.decayType;
        const parentNucleus = diagram.parentNucleus;
        const daughterNucleus = diagram.daughterNucleus;

        const nucleusRadius = 40;
        const parentX = x - width/3;
        const daughterX = x + width/3;
        const nucleusY = y;

        // Parent nucleus
        if (options.showParent) {
            this.ctx.fillStyle = '#3498DB';
            this.ctx.beginPath();
            this.ctx.arc(parentX, nucleusY, nucleusRadius, 0, Math.PI * 2);
            this.ctx.fill();
            this.ctx.strokeStyle = '#2980B9';
            this.ctx.lineWidth = 3;
            this.ctx.stroke();

            this.ctx.fillStyle = '#FFFFFF';
            this.ctx.font = 'bold 14px Arial';
            this.ctx.textAlign = 'center';
            this.ctx.textBaseline = 'middle';
            this.ctx.fillText(parentNucleus.split('-')[0], parentX, nucleusY);

            this.ctx.fillStyle = '#2C3E50';
            this.ctx.font = 'bold 12px Arial';
            this.ctx.fillText('Parent', parentX, nucleusY - nucleusRadius - 15);
            this.ctx.font = '11px Arial';
            this.ctx.fillText(parentNucleus, parentX, nucleusY + nucleusRadius + 20);
        }

        // Arrow
        this.drawArrowVector(parentX + nucleusRadius + 20, nucleusY, daughterX - nucleusRadius - 20, nucleusY, '#95A5A6', 3);

        // Decay products
        if (options.showProducts) {
            // Daughter nucleus
            this.ctx.fillStyle = '#27AE60';
            this.ctx.beginPath();
            this.ctx.arc(daughterX, nucleusY, nucleusRadius * 0.9, 0, Math.PI * 2);
            this.ctx.fill();
            this.ctx.strokeStyle = '#229954';
            this.ctx.lineWidth = 3;
            this.ctx.stroke();

            this.ctx.fillStyle = '#FFFFFF';
            this.ctx.font = 'bold 14px Arial';
            this.ctx.textAlign = 'center';
            this.ctx.textBaseline = 'middle';
            this.ctx.fillText(daughterNucleus.split('-')[0], daughterX, nucleusY);

            this.ctx.fillStyle = '#2C3E50';
            this.ctx.font = 'bold 12px Arial';
            this.ctx.fillText('Daughter', daughterX, nucleusY - nucleusRadius - 15);
            this.ctx.font = '11px Arial';
            this.ctx.fillText(daughterNucleus, daughterX, nucleusY + nucleusRadius + 20);

            // Emitted particle
            if (decayType === 'alpha') {
                const particleX = daughterX + nucleusRadius + 60;
                const particleY = nucleusY - 40;

                // Alpha particle (Helium nucleus)
                this.ctx.fillStyle = '#E74C3C';
                this.ctx.beginPath();
                this.ctx.arc(particleX, particleY, 20, 0, Math.PI * 2);
                this.ctx.fill();
                this.ctx.strokeStyle = '#C0392B';
                this.ctx.lineWidth = 2;
                this.ctx.stroke();

                this.ctx.fillStyle = '#FFFFFF';
                this.ctx.font = 'bold 16px Arial';
                this.ctx.textAlign = 'center';
                this.ctx.textBaseline = 'middle';
                this.ctx.fillText('α', particleX, particleY);

                // Arrow showing emission
                this.drawArrowVector(daughterX + nucleusRadius + 10, nucleusY - 30, particleX - 25, particleY, '#E74C3C', 2);

                this.ctx.fillStyle = '#E74C3C';
                this.ctx.font = '11px Arial';
                this.ctx.fillText('⁴He²⁺', particleX, particleY + 30);

            } else if (decayType === 'beta') {
                const particleX = daughterX + nucleusRadius + 60;
                const particleY = nucleusY - 40;

                // Beta particle (electron)
                this.ctx.fillStyle = '#9B59B6';
                this.ctx.beginPath();
                this.ctx.arc(particleX, particleY, 12, 0, Math.PI * 2);
                this.ctx.fill();
                this.ctx.strokeStyle = '#8E44AD';
                this.ctx.lineWidth = 2;
                this.ctx.stroke();

                this.ctx.fillStyle = '#FFFFFF';
                this.ctx.font = 'bold 14px Arial';
                this.ctx.textAlign = 'center';
                this.ctx.textBaseline = 'middle';
                this.ctx.fillText('β⁻', particleX, particleY);

                // Arrow
                this.drawArrowVector(daughterX + nucleusRadius + 10, nucleusY - 30, particleX - 15, particleY, '#9B59B6', 2);

                this.ctx.fillStyle = '#9B59B6';
                this.ctx.font = '11px Arial';
                this.ctx.fillText('e⁻', particleX, particleY + 25);

                // Antineutrino
                if (options.showNeutrino) {
                    const neutrinoX = particleX + 40;
                    const neutrinoY = particleY + 20;

                    this.ctx.strokeStyle = '#95A5A6';
                    this.ctx.lineWidth = 2;
                    this.ctx.setLineDash([3, 3]);
                    this.ctx.beginPath();
                    this.ctx.arc(neutrinoX, neutrinoY, 10, 0, Math.PI * 2);
                    this.ctx.stroke();
                    this.ctx.setLineDash([]);

                    this.ctx.fillStyle = '#7F8C8D';
                    this.ctx.font = '11px Arial';
                    this.ctx.textAlign = 'center';
                    this.ctx.fillText('ν̄', neutrinoX, neutrinoY + 20);
                }

            } else if (decayType === 'gamma') {
                const particleX = daughterX + nucleusRadius + 60;
                const particleY = nucleusY - 40;

                // Gamma ray (wavy line)
                this.ctx.strokeStyle = '#F39C12';
                this.ctx.lineWidth = 3;
                this.ctx.beginPath();

                for (let i = 0; i < 20; i++) {
                    const px = daughterX + nucleusRadius + 10 + i * 3;
                    const py = nucleusY - 30 + 15 * Math.sin(i * 0.8);

                    if (i === 0) {
                        this.ctx.moveTo(px, py);
                    } else {
                        this.ctx.lineTo(px, py);
                    }
                }
                this.ctx.stroke();

                // Arrow
                this.drawArrowVector(daughterX + nucleusRadius + 10 + 57, nucleusY - 30, particleX, particleY, '#F39C12', 2);

                this.ctx.fillStyle = '#F39C12';
                this.ctx.font = 'bold 16px Arial';
                this.ctx.textAlign = 'center';
                this.ctx.fillText('γ', particleX, particleY);
            }
        }

        // Show equation
        if (options.showEquation) {
            let equation = '';
            if (decayType === 'alpha') {
                equation = `${parentNucleus} → ${daughterNucleus} + ⁴He`;
            } else if (decayType === 'beta') {
                equation = `${parentNucleus} → ${daughterNucleus} + e⁻ + ν̄`;
            } else if (decayType === 'gamma') {
                equation = `${parentNucleus}* → ${daughterNucleus} + γ`;
            }

            this.ctx.fillStyle = '#2C3E50';
            this.ctx.font = 'bold 14px Arial';
            this.ctx.textAlign = 'center';
            this.ctx.fillText(equation, x, y + height/2 - 40);
        }

        // Show energy
        if (options.showEnergy) {
            this.ctx.fillStyle = '#E67E22';
            this.ctx.font = '12px Arial';
            this.ctx.textAlign = 'center';
            this.ctx.fillText('Energy Released', x, y + height/2 - 20);
        }

        // Title
        this.ctx.fillStyle = '#2C3E50';
        this.ctx.font = 'bold 16px Arial';
        this.ctx.textAlign = 'center';
        const decayName = decayType.charAt(0).toUpperCase() + decayType.slice(1);
        this.ctx.fillText(`${decayName} Decay`, x, y - height/2 + 30);
    }

}


export {PhysicsDiagramsRegistry,PhysicsDiagramRenderer};
