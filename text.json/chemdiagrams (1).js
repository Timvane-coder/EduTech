import { createCanvas } from '@napi-rs/canvas';
import ExcelJS from 'exceljs';
import fs from 'fs';
import os from 'os';
import path from 'path';
import readline from 'readline';
import * as math from 'mathjs';
import GIFEncoder from 'gifencoder';
import { PassThrough } from 'stream';

import { ChemistryDiagramsRegistry} from './ChemistryDiagrams.js';






class ChemistryDiagramRenderer {
    constructor(canvas) {
        this.canvas = canvas;
        this.ctx = canvas ? canvas.getContext('2d') : null;
    }

    renderDiagram(diagramKey, x, y, width, height, options = {}) {
        const diagram = ChemistryDiagramsRegistry.getDiagram(diagramKey);
        if (!diagram) {
            throw new Error(`Chemistry diagram '${diagramKey}' not found`);
        }

        const mergedOptions = { ...diagram.defaultOptions, ...options };
        
        this.ctx.save();
        this.ctx.translate(x, y);

        this.ctx.fillStyle = '#ffffff';
        this.ctx.fillRect(0, 0, width, height);

        this.drawTitle(mergedOptions.title, width / 2, 30);

        const centerX = width / 2;
        const centerY = height / 2 + 30;

        try {
            switch (diagram.type) {
                // ===== ATOMIC STRUCTURE =====
                case 'bohrModelCarbon':
                    this.renderBohrModel(diagram, centerX, centerY, Math.min(width, height) * 0.4, mergedOptions);
                    break;
                case 'nuclearStructure':
                    this.renderNuclearStructure(diagram, centerX, centerY, Math.min(width, height) * 0.35, mergedOptions);
                    break;
                case 'orbitalShapes':
                    this.renderOrbitalShapes(diagram, centerX, centerY, width * 0.8, height * 0.7, mergedOptions);
                    break;
                case 'electronConfiguration':
                    this.renderElectronConfiguration(diagram, centerX, centerY, width * 0.85, height * 0.7, mergedOptions);
                    break;
                case 'periodic_trends':
                    this.renderPeriodicTrends(diagram, centerX, centerY, width * 0.9, height * 0.75, mergedOptions);
                    break;
                // ===== CHEMICAL BONDING =====
                case 'lewis_structure':
                    this.renderLewisStructure(diagram, centerX, centerY, width * 0.6, mergedOptions);
                    break;
                case 'vsepr_geometry':
                    this.renderVSEPRGeometry(diagram, centerX, centerY, Math.min(width, height) * 0.4, mergedOptions);
                    break;
                case 'polar_bonds':
                    this.renderPolarBonds(diagram, centerX, centerY, width * 0.7, mergedOptions);
                    break;
                case 'hybridization':
                    this.renderHybridization(diagram, centerX, centerY, width * 0.8, height * 0.7, mergedOptions);
                    break;
                case 'sigma_pi_bonds':
                    this.renderSigmaPiBonds(diagram, centerX, centerY, width * 0.7, mergedOptions);
                    break;
                case 'resonance':
                    this.renderResonance(diagram, 50, centerY, width * 0.9, mergedOptions);
                    break;
                // ===== ORGANIC CHEMISTRY =====
                case 'structural_formula':
                case 'skeletal_formula':
                    this.renderOrganicFormula(diagram, centerX, centerY, width * 0.7, mergedOptions);
                    break;
                case 'reaction_mechanism':
                    this.renderReactionMechanism(diagram, 50, centerY, width * 0.9, mergedOptions);
                    break;
                case 'functional_groups':
                    this.renderFunctionalGroups(diagram, 50, 80, width * 0.95, height * 0.85, mergedOptions);
                    break;
                case 'isomers':
                    this.renderIsomers(diagram, 50, centerY, width * 0.9, mergedOptions);
                    break;
                case 'polymerization':
                    this.renderPolymerization(diagram, 50, centerY, width * 0.9, mergedOptions);
                    break;
                case 'aromatic':
                    this.renderAromatic(diagram, centerX, centerY, width * 0.5, mergedOptions);
                    break;
                // ===== STATES OF MATTER =====
                case 'particle_states':
                    this.renderParticleStates(diagram, 50, centerY, width * 0.9, height * 0.6, mergedOptions);
                    break;
                case 'diffusion':
                case 'brownian_motion':
                    this.renderParticleMotion(diagram, centerX, centerY, width * 0.8, height * 0.7, mergedOptions);
                    break;
                case 'heating_curve':
                case 'cooling_curve':
                    this.renderHeatingCoolingCurve(diagram, centerX, centerY, width * 0.85, height * 0.7, mergedOptions);
                    break;
                case 'intermolecular_forces':
                    this.renderIntermolecularForces(diagram, 50, 80, width * 0.9, height * 0.8, mergedOptions);
                    break;
                // ===== REACTIONS & ENERGY =====
                case 'energy_profile':
                case 'catalyst_effect':
                    this.renderEnergyProfile(diagram, centerX, centerY, width * 0.85, height * 0.7, mergedOptions);
                    break;
                case 'collision_theory':
                    this.renderCollisionTheory(diagram, centerX, centerY, width * 0.8, height * 0.7, mergedOptions);
                    break;
                case 'enthalpy_change':
                case 'enthalpy_levels':
                    this.renderEnthalpyDiagram(diagram, centerX, centerY, width * 0.7, height * 0.7, mergedOptions);
                    break;
                // ===== SOLUTIONS & ACIDS =====
                case 'dissociation':
                    this.renderDissociation(diagram, centerX, centerY, width * 0.8, mergedOptions);
                    break;
                case 'ion_hydration':
                    this.renderIonHydration(diagram, centerX, centerY, width * 0.6, mergedOptions);
                    break;
                case 'ph_scale':
                    this.renderPHScale(diagram, centerX, centerY, width * 0.9, height * 0.4, mergedOptions);
                    break;
                case 'titration_curve':
                    this.renderTitrationCurve(diagram, centerX, centerY, width * 0.85, height * 0.7, mergedOptions);
                    break;
                case 'solubility_curve':
                    this.renderSolubilityCurve(diagram, centerX, centerY, width * 0.85, height * 0.7, mergedOptions);
                    break;
                case 'indicator_chart':
                    this.renderIndicatorChart(diagram, 50, 80, width * 0.9, height * 0.75, mergedOptions);
                    break;
                // ===== ELECTROCHEMISTRY =====
                case 'galvanicCell':
                case 'electrolyticCell':
                    this.renderElectrochemicalCell(diagram, centerX, centerY, width * 0.85, height * 0.75, mergedOptions);
                    break;
                case 'electrodeProcesses':
                    this.renderElectrodeProcesses(diagram, centerX, centerY, width * 0.8, height * 0.7, mergedOptions);
                    break;
                case 'electrochemicalSeries':
                    this.renderElectrochemicalSeries(diagram, centerX, centerY, width * 0.7, height * 0.8, mergedOptions);
                    break;
                // ===== THERMOCHEMISTRY =====
                case 'phase_diagram':
                    this.renderPhaseDiagram(diagram, centerX, centerY, width * 0.85, height * 0.75, mergedOptions);
                    break;
                case 'hess_cycle':
                    this.renderHessCycle(diagram, centerX, centerY, width * 0.85, height * 0.7, mergedOptions);
                    break;
                case 'enthalpy_levels':
                    this.renderEnthalpyDiagram(diagram, centerX, centerY, width * 0.7, height * 0.7, mergedOptions);
                    break;
                case 'calorimeter':
                    this.renderCalorimeter(diagram, centerX, centerY, width * 0.6, height * 0.75, mergedOptions);
                    break;
                case 'energy_bar_chart':
                    this.renderEnergyBarChart(diagram, centerX, centerY, width * 0.8, height * 0.7, mergedOptions);
                    break;
                // ===== KINETICS =====
                case 'maxwell_boltzmann':
                    this.renderMaxwellBoltzmann(diagram, centerX, centerY, width * 0.85, height * 0.7, mergedOptions);
                    break;
                case 'catalyst_curve':
                    this.renderCatalystCurve(diagram, centerX, centerY, width * 0.85, height * 0.7, mergedOptions);
                    break;
                case 'concentration_rate':
                    this.renderConcentrationRate(diagram, centerX, centerY, width * 0.85, height * 0.7, mergedOptions);
                    break;
                case 'temperature_rate':
                    this.renderTemperatureRate(diagram, centerX, centerY, width * 0.85, height * 0.7, mergedOptions);
                    break;
                case 'surface_area':
                    this.renderSurfaceArea(diagram, centerX, centerY, width * 0.85, height * 0.65, mergedOptions);
                    break;
                // ===== EQUILIBRIUM =====
                case 'equilibrium_time':
                    this.renderEquilibriumTime(diagram, centerX, centerY, width * 0.85, height * 0.7, mergedOptions);
                    break;
                case 'le_chatelier':
                    this.renderLeChatelier(diagram, centerX, centerY, width * 0.85, height * 0.7, mergedOptions);
                    break;
                case 'ice_table':
                    this.renderICETable(diagram, centerX, centerY, width * 0.8, height * 0.5, mergedOptions);
                    break;
                case 'equilibrium_graph':
                    this.renderEquilibriumGraph(diagram, centerX, centerY, width * 0.85, height * 0.7, mergedOptions);
                    break;
                // ===== LABORATORY =====
                case 'lab_apparatus':
                    this.renderLabApparatus(diagram, centerX, centerY, width * 0.7, height * 0.75, mergedOptions);
                    break;
                case 'hazard_symbols':
                    this.renderHazardSymbols(diagram, centerX, centerY, width * 0.9, height * 0.8, mergedOptions);
                    break;
                case 'glassware_collection':
                    this.renderGlasswareCollection(diagram, centerX, centerY, width * 0.9, height * 0.75, mergedOptions);
                    break;
                case 'safety_equipment':
                    this.renderSafetyEquipment(diagram, centerX, centerY, width * 0.9, height * 0.75, mergedOptions);
                    break;
                // ===== STOICHIOMETRY =====
                case 'mole_triangle':
                case 'gas_triangle':
                case 'particle_triangle':
                    this.renderTriangle(diagram, centerX, centerY, Math.min(width, height) * 0.55, mergedOptions);
                    break;
                case 'conversion_map':
                    this.renderConversionMap(diagram, centerX, centerY, width * 0.85, height * 0.7, mergedOptions);
                    break;
                case 'stoichiometric_ratio':
                    this.renderStoichiometricRatio(diagram, centerX, centerY, width * 0.8, height * 0.6, mergedOptions);
                    break;
                case 'limiting_reagent':
                    this.renderLimitingReagent(diagram, centerX, centerY, width * 0.85, height * 0.7, mergedOptions);
                    break;
                case 'limiting_bar':
                    this.renderLimitingBar(diagram, centerX, centerY, width * 0.8, height * 0.65, mergedOptions);
                    break;
                case 'yield_diagram':
                    this.renderYieldDiagram(diagram, centerX, centerY, width * 0.75, height * 0.65, mergedOptions);
                    break;
                case 'empirical_formula':
                    this.renderEmpiricalFormula(diagram, centerX, centerY, width * 0.8, height * 0.7, mergedOptions);
                    break;
                case 'composition_pie':
                    this.renderCompositionPie(diagram, centerX, centerY, Math.min(width, height) * 0.4, mergedOptions);
                    break;
                case 'molarity':
                    this.renderMolarity(diagram, centerX, centerY, width * 0.6, height * 0.7, mergedOptions);
                    break;
                case 'dilution':
                    this.renderDilution(diagram, centerX, centerY, width * 0.85, height * 0.65, mergedOptions);
                    break;
                case 'gas_laws':
                    this.renderGasLaws(diagram, centerX, centerY, width * 0.8, height * 0.7, mergedOptions);
                    break;
                case 'titration_stoichiometry':
                    this.renderTitrationStoichiometry(diagram, centerX, centerY, width * 0.85, height * 0.75, mergedOptions);
                    break;
                case 'avogadro':
                    this.renderAvogadro(diagram, centerX, centerY, width * 0.8, height * 0.7, mergedOptions);
                    break;
                case 'molar_mass':
                    this.renderMolarMass(diagram, centerX, centerY, width * 0.8, height * 0.65, mergedOptions);
                    break;
                case 'stoichiometry_roadmap':
                    this.renderStoichiometryRoadmap(diagram, centerX, centerY, width * 0.85, height * 0.7, mergedOptions);
                    break;
                case 'balancing_equations':
                    this.renderBalancingEquations(diagram, centerX, centerY, width * 0.85, height * 0.65, mergedOptions);
                    break;
                default:
                    this.renderPlaceholder(diagram, centerX, centerY, width * 0.7, height * 0.5);
            }

            this.drawDiagramInfo(diagram, 20, height - 60, mergedOptions);

        } catch (error) {
            console.error(`Error rendering ${diagramKey}:`, error);
            this.renderError(diagram, centerX, centerY, width * 0.7, height * 0.5, error.message);
        }

        this.ctx.restore();
    }

    // ========== PLACEHOLDER AND UTILITY METHODS ==========

    renderPlaceholder(diagram, x, y, width, height) {
        this.ctx.strokeStyle = '#555555';
        this.ctx.lineWidth = 2;
        this.ctx.setLineDash([10, 5]);
        this.ctx.strokeRect(x - width / 2, y - height / 2, width, height);
        this.ctx.setLineDash([]);

        this.ctx.fillStyle = '#f0f0f0';
        this.ctx.fillRect(x - width / 2, y - height / 2, width, height);

        this.ctx.fillStyle = '#333333';
        this.ctx.font = 'bold 16px Arial';
        this.ctx.textAlign = 'center';
        this.ctx.textBaseline = 'middle';
        this.ctx.fillText(`${diagram.name}`, x, y - 10);

        this.ctx.font = '13px Arial';
        this.ctx.fillStyle = '#666666';
        this.ctx.fillText('(Renderer in development)', x, y + 15);
    }

    renderError(diagram, x, y, width, height, errorMsg) {
        this.ctx.fillStyle = '#f5f5f5';
        this.ctx.fillRect(x - width / 2, y - height / 2, width, height);

        this.ctx.strokeStyle = '#333333';
        this.ctx.lineWidth = 2;
        this.ctx.strokeRect(x - width / 2, y - height / 2, width, height);

        this.ctx.fillStyle = '#333333';
        this.ctx.font = 'bold 40px Arial';
        this.ctx.textAlign = 'center';
        this.ctx.textBaseline = 'middle';
        this.ctx.fillText('!', x, y - 30);

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
        this.ctx.fillStyle = '#000000';
        this.ctx.font = 'bold 22px Arial';
        this.ctx.textAlign = 'center';
        this.ctx.textBaseline = 'top';
        this.ctx.fillText(title, x, y);
    }

    drawDiagramInfo(diagram, x, y, options) {
        this.ctx.strokeStyle = '#555555';
        this.ctx.lineWidth = 1.5;
        this.ctx.beginPath();
        this.ctx.roundRect(x, y, 350, 55, 4);
        this.ctx.stroke();

        this.ctx.fillStyle = '#f8f8f8';
        this.ctx.fill();

        this.ctx.fillStyle = '#000000';
        this.ctx.font = 'bold 12px Arial';
        this.ctx.textAlign = 'left';

        const category = diagram.category || 'Chemistry';
        const type = diagram.type || 'diagram';

        this.ctx.fillText(`Category: ${category}`, x + 12, y + 12);
        this.ctx.fillText(`Type: ${type.replace(/_/g, ' ')}`, x + 12, y + 28);

        if (diagram.formula) {
            this.ctx.fillText(`Formula: ${diagram.formula}`, x + 12, y + 44);
        }
    }

    drawAxes(x, y, size) {
        this.ctx.strokeStyle = '#666666';
        this.ctx.lineWidth = 1.5;
        this.ctx.setLineDash([5, 5]);

        this.ctx.beginPath();
        this.ctx.moveTo(x - size, y);
        this.ctx.lineTo(x + size, y);
        this.ctx.stroke();

        this.ctx.beginPath();
        this.ctx.moveTo(x, y - size);
        this.ctx.lineTo(x, y + size);
        this.ctx.stroke();

        this.ctx.beginPath();
        this.ctx.moveTo(x - size * 0.7, y + size * 0.7);
        this.ctx.lineTo(x + size * 0.7, y - size * 0.7);
        this.ctx.stroke();

        this.ctx.setLineDash([]);

        this.ctx.fillStyle = '#333333';
        this.ctx.font = 'italic 12px Arial';
        this.ctx.textAlign = 'center';
        this.ctx.fillText('x', x + size + 15, y);
        this.ctx.fillText('y', x, y - size - 10);
        this.ctx.fillText('z', x + size * 0.7 + 15, y - size * 0.7);
    }

    // ========== ATOMIC STRUCTURE RENDERERS ==========

    renderBohrModel(diagram, x, y, size, options) {
        const { element, shells } = diagram;
        const nucleusRadius = size * 0.1;

        // Nucleus
        this.ctx.beginPath();
        this.ctx.arc(x, y, nucleusRadius, 0, Math.PI * 2);
        this.ctx.fillStyle = '#222222';
        this.ctx.fill();
        this.ctx.strokeStyle = '#000000';
        this.ctx.lineWidth = 2;
        this.ctx.stroke();

        if (options.showNucleus) {
            this.ctx.fillStyle = '#ffffff';
            this.ctx.font = `bold ${Math.max(10, nucleusRadius * 0.9)}px Arial`;
            this.ctx.textAlign = 'center';
            this.ctx.textBaseline = 'middle';
            this.ctx.fillText(element, x, y);
        }

        shells.forEach((electronCount, shellIndex) => {
            const shellRadius = nucleusRadius * 2 + (shellIndex + 1) * (size * 0.18);

            // Shell orbit (dashed)
            this.ctx.strokeStyle = '#555555';
            this.ctx.lineWidth = 1;
            this.ctx.setLineDash([6, 4]);
            this.ctx.beginPath();
            this.ctx.arc(x, y, shellRadius, 0, Math.PI * 2);
            this.ctx.stroke();
            this.ctx.setLineDash([]);

            if (options.showLabels) {
                this.ctx.fillStyle = '#333333';
                this.ctx.font = '11px Arial';
                this.ctx.textAlign = 'left';
                this.ctx.textBaseline = 'middle';
                this.ctx.fillText(`n=${shellIndex + 1}`, x + shellRadius + 8, y);
            }

            if (options.showElectrons) {
                for (let i = 0; i < electronCount; i++) {
                    const angle = (i / electronCount) * Math.PI * 2;
                    const ex = x + shellRadius * Math.cos(angle);
                    const ey = y + shellRadius * Math.sin(angle);

                    this.ctx.beginPath();
                    this.ctx.arc(ex, ey, 7, 0, Math.PI * 2);
                    this.ctx.fillStyle = '#ffffff';
                    this.ctx.fill();
                    this.ctx.strokeStyle = '#000000';
                    this.ctx.lineWidth = 2;
                    this.ctx.stroke();

                    this.ctx.fillStyle = '#000000';
                    this.ctx.font = 'bold 8px Arial';
                    this.ctx.textAlign = 'center';
                    this.ctx.textBaseline = 'middle';
                    this.ctx.fillText('e⁻', ex, ey);
                }
            }
        });
    }

    renderNuclearStructure(diagram, x, y, size, options) {
        const { protons, neutrons } = diagram;
        const particleRadius = size * 0.09;
        const totalParticles = protons + neutrons;
        const gridSize = Math.ceil(Math.sqrt(totalParticles));

        // Nucleus outline
        const nucleusW = gridSize * particleRadius * 2.4;
        this.ctx.strokeStyle = '#000000';
        this.ctx.lineWidth = 2;
        this.ctx.beginPath();
        this.ctx.arc(x, y, nucleusW * 0.6, 0, Math.PI * 2);
        this.ctx.stroke();

        let particleIndex = 0;
        for (let row = 0; row < gridSize && particleIndex < totalParticles; row++) {
            for (let col = 0; col < gridSize && particleIndex < totalParticles; col++) {
                const px = x + (col - gridSize / 2 + 0.5) * particleRadius * 2.3;
                const py = y + (row - gridSize / 2 + 0.5) * particleRadius * 2.3;
                const isProton = particleIndex < protons;

                this.ctx.beginPath();
                this.ctx.arc(px, py, particleRadius, 0, Math.PI * 2);
                this.ctx.fillStyle = isProton ? '#333333' : '#aaaaaa';
                this.ctx.fill();
                this.ctx.strokeStyle = '#000000';
                this.ctx.lineWidth = 1.5;
                this.ctx.stroke();

                if (options.showLabels) {
                    this.ctx.fillStyle = '#ffffff';
                    this.ctx.font = `bold ${Math.max(7, particleRadius * 0.75)}px Arial`;
                    this.ctx.textAlign = 'center';
                    this.ctx.textBaseline = 'middle';
                    this.ctx.fillText(isProton ? 'p+' : 'n', px, py);
                }

                particleIndex++;
            }
        }

        if (options.showLegend) {
            const legendY = y + size + 50;

            this.ctx.beginPath();
            this.ctx.arc(x - 70, legendY, 10, 0, Math.PI * 2);
            this.ctx.fillStyle = '#333333';
            this.ctx.fill();
            this.ctx.strokeStyle = '#000000';
            this.ctx.lineWidth = 1.5;
            this.ctx.stroke();
            this.ctx.fillStyle = '#000000';
            this.ctx.font = '13px Arial';
            this.ctx.textAlign = 'left';
            this.ctx.textBaseline = 'middle';
            this.ctx.fillText(`Protons: ${protons}`, x - 55, legendY);

            this.ctx.beginPath();
            this.ctx.arc(x - 70, legendY + 28, 10, 0, Math.PI * 2);
            this.ctx.fillStyle = '#aaaaaa';
            this.ctx.fill();
            this.ctx.stroke();
            this.ctx.fillStyle = '#000000';
            this.ctx.fillText(`Neutrons: ${neutrons}`, x - 55, legendY + 28);
        }
    }

    renderOrbitalShapes(diagram, x, y, width, height, options) {
        const { orbitals } = diagram;
        const orbitalWidth = width / orbitals.length;

        orbitals.forEach((orbital, index) => {
            const ox = x + (index - orbitals.length / 2 + 0.5) * orbitalWidth;
            const oy = y;
            const size = orbitalWidth * 0.65;

            this.ctx.save();
            this.ctx.translate(ox, oy);

            if (orbital === 's') {
                // Spherical s orbital
                this.ctx.beginPath();
                this.ctx.arc(0, 0, size / 2, 0, Math.PI * 2);
                this.ctx.fillStyle = 'rgba(100,100,100,0.15)';
                this.ctx.fill();
                this.ctx.strokeStyle = '#000000';
                this.ctx.lineWidth = 2.5;
                this.ctx.stroke();
            } else if (orbital.startsWith('p')) {
                const direction = orbital.slice(1);
                if (direction === 'x' || !direction) {
                    this.drawPOrbitalBW(0, 0, size / 2, 0);
                } else if (direction === 'y') {
                    this.drawPOrbitalBW(0, 0, size / 2, Math.PI / 2);
                } else if (direction === 'z') {
                    this.drawPOrbitalBW(0, 0, size / 2.5, 0, true);
                }
            }

            if (options.showLabels !== false) {
                this.ctx.fillStyle = '#000000';
                this.ctx.font = 'bold 16px Arial';
                this.ctx.textAlign = 'center';
                this.ctx.textBaseline = 'top';
                this.ctx.fillText(orbital, 0, size / 2 + 12);
            }

            this.ctx.restore();
        });

        if (options.showAxes) {
            this.drawAxes(x, y, Math.min(width, height) * 0.28);
        }
    }

    drawPOrbitalBW(x, y, size, rotation, is3D = false) {
        this.ctx.save();
        this.ctx.rotate(rotation);

        if (is3D) {
            // Upper lobe (darker fill)
            this.ctx.beginPath();
            this.ctx.ellipse(0, -size * 0.6, size * 0.3, size * 0.42, 0, 0, Math.PI * 2);
            this.ctx.fillStyle = 'rgba(80,80,80,0.25)';
            this.ctx.fill();
            this.ctx.strokeStyle = '#000000';
            this.ctx.lineWidth = 2;
            this.ctx.stroke();

            // Lower lobe (lighter fill)
            this.ctx.beginPath();
            this.ctx.ellipse(0, size * 0.6, size * 0.3, size * 0.42, 0, 0, Math.PI * 2);
            this.ctx.fillStyle = 'rgba(180,180,180,0.25)';
            this.ctx.fill();
            this.ctx.strokeStyle = '#000000';
            this.ctx.lineWidth = 2;
            this.ctx.setLineDash([4, 3]);
            this.ctx.stroke();
            this.ctx.setLineDash([]);
        } else {
            // Left lobe (dark)
            this.ctx.beginPath();
            this.ctx.ellipse(-size * 0.6, 0, size * 0.42, size * 0.3, 0, 0, Math.PI * 2);
            this.ctx.fillStyle = 'rgba(60,60,60,0.25)';
            this.ctx.fill();
            this.ctx.strokeStyle = '#000000';
            this.ctx.lineWidth = 2.5;
            this.ctx.stroke();

            // Right lobe (light)
            this.ctx.beginPath();
            this.ctx.ellipse(size * 0.6, 0, size * 0.42, size * 0.3, 0, 0, Math.PI * 2);
            this.ctx.fillStyle = 'rgba(200,200,200,0.25)';
            this.ctx.fill();
            this.ctx.strokeStyle = '#000000';
            this.ctx.lineWidth = 2.5;
            this.ctx.setLineDash([4, 3]);
            this.ctx.stroke();
            this.ctx.setLineDash([]);
        }

        this.ctx.restore();
    }

    renderElectronConfiguration(diagram, x, y, width, height, options) {
        const { configuration } = diagram;
        const orbitals = this.parseElectronConfig(configuration);

        const boxWidth = 48;
        const boxHeight = 32;
        const spacing = 8;
        const rowHeight = boxHeight + spacing + 25;

        let currentX = x - width / 2 + 80;
        let currentY = y - height / 2 + 20;

        // Group orbitals by energy level
        const groups = {};
        orbitals.forEach(orb => {
            const level = orb.label[0];
            if (!groups[level]) groups[level] = [];
            groups[level].push(orb);
        });

        Object.entries(groups).forEach(([level, orbList], groupIdx) => {
            currentX = x - width / 2 + 80;
            currentY = y - height / 2 + 20 + groupIdx * rowHeight;

            // Energy level label
            this.ctx.fillStyle = '#000000';
            this.ctx.font = 'bold 13px Arial';
            this.ctx.textAlign = 'right';
            this.ctx.textBaseline = 'middle';
            this.ctx.fillText(`n=${level}`, currentX - 15, currentY + boxHeight / 2);

            orbList.forEach(orbital => {
                const { label, electrons } = orbital;
                const maxElectrons = label.includes('s') ? 2 : (label.includes('p') ? 6 : (label.includes('d') ? 10 : 14));
                const numBoxes = maxElectrons / 2;

                // Sub-level label
                this.ctx.fillStyle = '#000000';
                this.ctx.font = '12px Arial';
                this.ctx.textAlign = 'right';
                this.ctx.fillText(label, currentX - 2, currentY + boxHeight / 2);

                for (let box = 0; box < numBoxes; box++) {
                    const bx = currentX + box * (boxWidth + 4);

                    this.ctx.strokeStyle = '#000000';
                    this.ctx.lineWidth = 2;
                    this.ctx.fillStyle = '#ffffff';
                    this.ctx.fillRect(bx, currentY, boxWidth, boxHeight);
                    this.ctx.strokeRect(bx, currentY, boxWidth, boxHeight);

                    const electronsInBox = Math.max(0, Math.min(2, electrons - box * 2));

                    if (options.showArrows && electronsInBox >= 1) {
                        this.drawArrow(bx + boxWidth / 2 - 8, currentY + boxHeight / 2, 'up', '#000000');
                    }
                    if (options.showArrows && electronsInBox >= 2) {
                        this.drawArrow(bx + boxWidth / 2 + 8, currentY + boxHeight / 2, 'down', '#000000');
                    }
                }

                currentX += numBoxes * (boxWidth + 4) + 25;
            });
        });

        // Configuration string
        this.ctx.fillStyle = '#000000';
        this.ctx.font = '14px Arial';
        this.ctx.textAlign = 'center';
        this.ctx.textBaseline = 'top';
        this.ctx.fillText(configuration, x, y + height / 2 - 30);
    }

    parseElectronConfig(config) {
        const orbitals = [];
        const parts = config.split(/\s+/);
        parts.forEach(part => {
            const match = part.match(/(\d[spdf])([\u2070-\u2079\u00B9\u00B2\u00B3]+|\d+)/);
            if (match) {
                const label = match[1];
                const supStr = match[2];
                const electrons = this.parseSuperscriptOrNum(supStr);
                orbitals.push({ label, electrons });
            }
        });
        return orbitals;
    }

    parseSuperscriptOrNum(str) {
        const map = { '⁰':0,'¹':1,'²':2,'³':3,'⁴':4,'⁵':5,'⁶':6,'⁷':7,'⁸':8,'⁹':9 };
        const mapped = str.split('').map(c => (map[c] !== undefined ? map[c] : c)).join('');
        return parseInt(mapped) || 0;
    }

    parseSuperscript(sup) {
        const map = { '⁰':0,'¹':1,'²':2,'³':3,'⁴':4,'⁵':5,'⁶':6,'⁷':7,'⁸':8,'⁹':9 };
        return parseInt(sup.split('').map(c => map[c] !== undefined ? map[c] : c).join('')) || 0;
    }

    drawArrow(x, y, direction, color) {
        this.ctx.save();
        this.ctx.strokeStyle = color;
        this.ctx.fillStyle = color;
        this.ctx.lineWidth = 2;

        if (direction === 'up') {
            this.ctx.beginPath();
            this.ctx.moveTo(x, y + 9);
            this.ctx.lineTo(x, y - 9);
            this.ctx.stroke();
            this.ctx.beginPath();
            this.ctx.moveTo(x, y - 9);
            this.ctx.lineTo(x - 4, y - 3);
            this.ctx.lineTo(x + 4, y - 3);
            this.ctx.closePath();
            this.ctx.fill();
        } else {
            this.ctx.beginPath();
            this.ctx.moveTo(x, y - 9);
            this.ctx.lineTo(x, y + 9);
            this.ctx.stroke();
            this.ctx.beginPath();
            this.ctx.moveTo(x, y + 9);
            this.ctx.lineTo(x - 4, y + 3);
            this.ctx.lineTo(x + 4, y + 3);
            this.ctx.closePath();
            this.ctx.fill();
        }
        this.ctx.restore();
    }

    renderPeriodicTrends(diagram, x, y, width, height, options) {
        const cellSize = 36;
        const rows = 7;
        const cols = 18;
        const startX = x - (cols * cellSize) / 2;
        const startY = y - (rows * cellSize) / 2;

        // Shading gradients using grey scale
        for (let row = 0; row < rows; row++) {
            for (let col = 0; col < cols; col++) {
                const cx = startX + col * cellSize;
                const cy = startY + row * cellSize;
                const trendValue = (cols - col + rows - row) / (cols + rows);
                const shade = Math.floor(220 - trendValue * 160);
                this.ctx.fillStyle = `rgb(${shade},${shade},${shade})`;
                this.ctx.fillRect(cx, cy, cellSize - 2, cellSize - 2);
                this.ctx.strokeStyle = '#999999';
                this.ctx.lineWidth = 0.5;
                this.ctx.strokeRect(cx, cy, cellSize - 2, cellSize - 2);
            }
        }

        if (options.showArrows) {
            // Atomic radius increases down-left
            this.drawTrendArrowBW(startX + cols * cellSize + 30, startY + 20, 'down', 'At. Radius ↑');
            this.drawTrendArrowBW(startX - 30, startY - 20, 'left', 'At. Radius ↑');
            // EN / IE increases up-right
            this.drawTrendArrowBW(startX + 20, startY + rows * cellSize + 30, 'right', 'EN / IE ↑');
            this.drawTrendArrowBW(startX + cols * cellSize + 60, startY + rows * cellSize - 20, 'up', 'EN / IE ↑');
        }

        // Legend box
        const lx = x - 120;
        const ly = y + rows * cellSize / 2 + 25;
        this.ctx.strokeStyle = '#000000';
        this.ctx.lineWidth = 1;
        this.ctx.strokeRect(lx, ly, 240, 30);
        const grad = this.ctx.createLinearGradient(lx, 0, lx + 240, 0);
        grad.addColorStop(0, '#dddddd');
        grad.addColorStop(1, '#333333');
        this.ctx.fillStyle = grad;
        this.ctx.fillRect(lx, ly, 240, 30);
        this.ctx.fillStyle = '#000000';
        this.ctx.font = '11px Arial';
        this.ctx.textAlign = 'left';
        this.ctx.textBaseline = 'bottom';
        this.ctx.fillText('Lighter = Smaller/Less', lx + 4, ly + 28);
        this.ctx.textAlign = 'right';
        this.ctx.fillText('Darker = Larger/More', lx + 236, ly + 28);
    }

    drawTrendArrowBW(x, y, direction, label) {
        this.ctx.save();
        this.ctx.strokeStyle = '#000000';
        this.ctx.fillStyle = '#000000';
        this.ctx.lineWidth = 2.5;
        const L = 55;

        switch (direction) {
            case 'up':
                this.ctx.beginPath(); this.ctx.moveTo(x, y); this.ctx.lineTo(x, y - L); this.ctx.stroke();
                this.ctx.beginPath(); this.ctx.moveTo(x, y - L); this.ctx.lineTo(x - 5, y - L + 10); this.ctx.lineTo(x + 5, y - L + 10); this.ctx.closePath(); this.ctx.fill();
                this.ctx.font = '11px Arial'; this.ctx.textAlign = 'center'; this.ctx.fillText(label, x, y - L - 8);
                break;
            case 'down':
                this.ctx.beginPath(); this.ctx.moveTo(x, y); this.ctx.lineTo(x, y + L); this.ctx.stroke();
                this.ctx.beginPath(); this.ctx.moveTo(x, y + L); this.ctx.lineTo(x - 5, y + L - 10); this.ctx.lineTo(x + 5, y + L - 10); this.ctx.closePath(); this.ctx.fill();
                this.ctx.font = '11px Arial'; this.ctx.textAlign = 'center'; this.ctx.fillText(label, x, y + L + 14);
                break;
            case 'left':
                this.ctx.beginPath(); this.ctx.moveTo(x, y); this.ctx.lineTo(x - L, y); this.ctx.stroke();
                this.ctx.beginPath(); this.ctx.moveTo(x - L, y); this.ctx.lineTo(x - L + 10, y - 5); this.ctx.lineTo(x - L + 10, y + 5); this.ctx.closePath(); this.ctx.fill();
                this.ctx.font = '11px Arial'; this.ctx.textAlign = 'right'; this.ctx.fillText(label, x - L - 6, y - 5);
                break;
            case 'right':
                this.ctx.beginPath(); this.ctx.moveTo(x, y); this.ctx.lineTo(x + L, y); this.ctx.stroke();
                this.ctx.beginPath(); this.ctx.moveTo(x + L, y); this.ctx.lineTo(x + L - 10, y - 5); this.ctx.lineTo(x + L - 10, y + 5); this.ctx.closePath(); this.ctx.fill();
                this.ctx.font = '11px Arial'; this.ctx.textAlign = 'left'; this.ctx.fillText(label, x + L + 6, y - 5);
                break;
        }
        this.ctx.restore();
    }

    // ========== CHEMICAL BONDING RENDERERS ==========

    renderLewisStructure(diagram, x, y, size, options) {
        const { centralAtom, bonds, lonePairs } = diagram;

        this.ctx.fillStyle = '#000000';
        this.ctx.font = 'bold 22px Arial';
        this.ctx.textAlign = 'center';
        this.ctx.textBaseline = 'middle';
        this.ctx.fillText(centralAtom, x, y);

        const bondLength = size * 0.32;
        const angles = [0, Math.PI / 2, Math.PI, (3 * Math.PI) / 2];

        bonds.forEach((bond, index) => {
            const angle = angles[index % angles.length];
            const endX = x + bondLength * Math.cos(angle);
            const endY = y + bondLength * Math.sin(angle);

            this.ctx.strokeStyle = '#000000';
            this.ctx.lineWidth = 2.5;

            if (bond.type === 'single') {
                this.ctx.beginPath();
                this.ctx.moveTo(x + 12 * Math.cos(angle), y + 12 * Math.sin(angle));
                this.ctx.lineTo(endX - 12 * Math.cos(angle), endY - 12 * Math.sin(angle));
                this.ctx.stroke();
            } else if (bond.type === 'double') {
                const px = -Math.sin(angle) * 4, py = Math.cos(angle) * 4;
                this.ctx.beginPath();
                this.ctx.moveTo(x + px + 12 * Math.cos(angle), y + py + 12 * Math.sin(angle));
                this.ctx.lineTo(endX + px - 12 * Math.cos(angle), endY + py - 12 * Math.sin(angle));
                this.ctx.stroke();
                this.ctx.beginPath();
                this.ctx.moveTo(x - px + 12 * Math.cos(angle), y - py + 12 * Math.sin(angle));
                this.ctx.lineTo(endX - px - 12 * Math.cos(angle), endY - py - 12 * Math.sin(angle));
                this.ctx.stroke();
            } else if (bond.type === 'triple') {
                const px = -Math.sin(angle) * 5, py = Math.cos(angle) * 5;
                for (const m of [-1, 0, 1]) {
                    this.ctx.beginPath();
                    this.ctx.moveTo(x + m * px + 12 * Math.cos(angle), y + m * py + 12 * Math.sin(angle));
                    this.ctx.lineTo(endX + m * px - 12 * Math.cos(angle), endY + m * py - 12 * Math.sin(angle));
                    this.ctx.stroke();
                }
            }

            this.ctx.fillStyle = '#000000';
            this.ctx.font = 'bold 20px Arial';
            this.ctx.textAlign = 'center';
            this.ctx.textBaseline = 'middle';
            this.ctx.fillText(bond.atom2, endX, endY);

            if (options.showLonePairs) {
                this.drawElectronDotsBW(endX, endY, 2, angle + Math.PI);
            }
        });

        if (options.showLonePairs && lonePairs && lonePairs[centralAtom]) {
            const lpCount = lonePairs[centralAtom];
            const usedAngles = bonds.map((_, i) => angles[i % angles.length]);
            const availableAngles = angles.filter(a => !usedAngles.some(ua => Math.abs(ua - a) < 0.01));
            for (let i = 0; i < Math.min(lpCount, availableAngles.length); i++) {
                this.drawElectronDotsBW(x, y, 2, availableAngles[i]);
            }
        }
    }

    drawElectronDotsBW(x, y, pairCount, angle) {
        const distance = 28;
        const dotRadius = 3;
        for (let i = 0; i < pairCount; i++) {
            const offset = (i - pairCount / 2 + 0.5) * 9;
            const perpAngle = angle + Math.PI / 2;
            const dx = x + distance * Math.cos(angle) + offset * Math.cos(perpAngle);
            const dy = y + distance * Math.sin(angle) + offset * Math.sin(perpAngle);
            this.ctx.fillStyle = '#000000';
            this.ctx.beginPath();
            this.ctx.arc(dx, dy, dotRadius, 0, Math.PI * 2);
            this.ctx.fill();
        }
    }

    renderVSEPRGeometry(diagram, x, y, size, options) {
        const { geometry, molecule } = diagram;

        this.drawAtomBW('C', x, y, 30);

        const bondLength = size * 0.8;
        let positions = [];

        switch (geometry) {
            case 'linear':
                positions = [[bondLength, 0, 0], [-bondLength, 0, 0]];
                break;
            case 'trigonal_planar':
                positions = [0, 1, 2].map(i => [
                    bondLength * Math.cos((i / 3) * Math.PI * 2),
                    bondLength * Math.sin((i / 3) * Math.PI * 2), 0
                ]);
                break;
            case 'tetrahedral':
                positions = [
                    [0, bondLength, 0],
                    [bondLength * 0.94, -bondLength * 0.33, 0],
                    [-bondLength * 0.47, -bondLength * 0.33, bondLength * 0.82],
                    [-bondLength * 0.47, -bondLength * 0.33, -bondLength * 0.82]
                ];
                break;
            case 'trigonal_pyramidal':
                positions = [
                    [0, bondLength * 0.8, 0],
                    [bondLength * 0.7, -bondLength * 0.4, 0],
                    [-bondLength * 0.7, -bondLength * 0.4, 0]
                ];
                break;
            case 'bent':
                positions = [
                    [bondLength * 0.7, bondLength * 0.5, 0],
                    [-bondLength * 0.7, bondLength * 0.5, 0]
                ];
                break;
        }

        if (options.show3D) {
            const rotX = ((options.rotationX || 20) * Math.PI) / 180;
            const rotY = ((options.rotationY || 30) * Math.PI) / 180;
            positions = positions.map(pos => this.rotatePoint3D(pos, rotX, rotY, 0));
        }

        const projected = positions.map(pos => this.projectTo2D(pos, x, y));

        projected.forEach(pos => {
            this.ctx.strokeStyle = '#000000';
            this.ctx.lineWidth = 3;
            this.ctx.beginPath();
            this.ctx.moveTo(x, y);
            this.ctx.lineTo(pos[0], pos[1]);
            this.ctx.stroke();
            this.drawAtomBW('H', pos[0], pos[1], 20);
        });

        if (options.showBondAngles && projected.length >= 2) {
            const angle = this.calculateAngle(projected[0], [x, y], projected[1]);
            this.ctx.strokeStyle = '#333333';
            this.ctx.lineWidth = 1.5;
            this.ctx.setLineDash([3, 3]);
            this.ctx.beginPath();
            this.ctx.arc(x, y, 44,
                Math.atan2(projected[0][1] - y, projected[0][0] - x),
                Math.atan2(projected[1][1] - y, projected[1][0] - x)
            );
            this.ctx.stroke();
            this.ctx.setLineDash([]);
            this.ctx.fillStyle = '#000000';
            this.ctx.font = 'bold 13px Arial';
            this.ctx.textAlign = 'center';
            this.ctx.fillText(`${angle.toFixed(1)}°`, x, y + 65);
        }

        // Geometry label
        this.ctx.fillStyle = '#000000';
        this.ctx.font = 'bold 14px Arial';
        this.ctx.textAlign = 'center';
        this.ctx.textBaseline = 'bottom';
        this.ctx.fillText(`Geometry: ${geometry.replace('_', ' ')}`, x, y - size - 10);
    }

    drawAtomBW(element, x, y, radius) {
        this.ctx.beginPath();
        this.ctx.arc(x, y, radius, 0, Math.PI * 2);
        this.ctx.fillStyle = '#ffffff';
        this.ctx.fill();
        this.ctx.strokeStyle = '#000000';
        this.ctx.lineWidth = 2.5;
        this.ctx.stroke();
        this.ctx.fillStyle = '#000000';
        this.ctx.font = `bold ${Math.max(10, Math.floor(radius * 0.8))}px Arial`;
        this.ctx.textAlign = 'center';
        this.ctx.textBaseline = 'middle';
        this.ctx.fillText(element, x, y);
    }

    rotatePoint3D(point, rotX, rotY, rotZ) {
        let [x, y, z] = point;
        let y1 = y * Math.cos(rotX) - z * Math.sin(rotX);
        let z1 = y * Math.sin(rotX) + z * Math.cos(rotX);
        y = y1; z = z1;
        let x1 = x * Math.cos(rotY) + z * Math.sin(rotY);
        z1 = -x * Math.sin(rotY) + z * Math.cos(rotY);
        x = x1; z = z1;
        return [x, y, z];
    }

    projectTo2D(point3D, centerX, centerY) {
        const [x, y, z] = point3D;
        const perspective = 500;
        const scale = perspective / (perspective + z);
        return [centerX + x * scale, centerY - y * scale];
    }

    calculateAngle(p1, center, p2) {
        const a1 = Math.atan2(p1[1] - center[1], p1[0] - center[0]);
        const a2 = Math.atan2(p2[1] - center[1], p2[0] - center[0]);
        let diff = Math.abs(a1 - a2) * 180 / Math.PI;
        if (diff > 180) diff = 360 - diff;
        return diff;
    }

    renderPolarBonds(diagram, x, y, size, options) {
        const { molecule, electronegativity } = diagram;
        const bondLength = size * 0.75;
        const atoms = Object.keys(electronegativity);

        this.ctx.strokeStyle = '#000000';
        this.ctx.lineWidth = 5;
        this.ctx.beginPath();
        this.ctx.moveTo(x - bondLength / 2, y);
        this.ctx.lineTo(x + bondLength / 2, y);
        this.ctx.stroke();

        this.drawAtomBW(atoms[0], x - bondLength / 2, y, 30);
        this.drawAtomBW(atoms[1], x + bondLength / 2, y, 30);

        if (options.showDelta) {
            const delta = electronegativity[atoms[1]] - electronegativity[atoms[0]];
            const sign1 = delta > 0 ? 'δ+' : 'δ−';
            const sign2 = delta > 0 ? 'δ−' : 'δ+';
            this.ctx.fillStyle = '#000000';
            this.ctx.font = 'bold 16px Arial';
            this.ctx.textAlign = 'center';
            this.ctx.fillText(sign1, x - bondLength / 2, y - 48);
            this.ctx.fillText(sign2, x + bondLength / 2, y - 48);
        }

        if (options.showDipole) {
            const delta = electronegativity[atoms[1]] - electronegativity[atoms[0]];
            const dir = delta > 0 ? 1 : -1;
            const arrowY = y + 65;
            const aStart = x - dir * bondLength * 0.35;
            const aEnd = x + dir * bondLength * 0.35;

            this.ctx.strokeStyle = '#000000';
            this.ctx.fillStyle = '#000000';
            this.ctx.lineWidth = 2.5;
            this.ctx.beginPath();
            this.ctx.moveTo(aStart, arrowY);
            this.ctx.lineTo(aEnd, arrowY);
            this.ctx.stroke();

            this.ctx.beginPath();
            this.ctx.moveTo(aEnd, arrowY);
            this.ctx.lineTo(aEnd - dir * 10, arrowY - 5);
            this.ctx.lineTo(aEnd - dir * 10, arrowY + 5);
            this.ctx.closePath();
            this.ctx.fill();

            // Cross-bar at start for plus
            this.ctx.lineWidth = 2;
            this.ctx.beginPath();
            this.ctx.moveTo(aStart, arrowY - 7);
            this.ctx.lineTo(aStart, arrowY + 7);
            this.ctx.stroke();

            this.ctx.font = 'bold 13px Arial';
            this.ctx.textAlign = 'center';
            this.ctx.fillText('Dipole moment (μ)', x, arrowY + 20);
        }

        if (options.showElectronegativity) {
            this.ctx.fillStyle = '#333333';
            this.ctx.font = '13px Arial';
            this.ctx.textAlign = 'center';
            this.ctx.fillText(`EN: ${electronegativity[atoms[0]]}`, x - bondLength / 2, y + 48);
            this.ctx.fillText(`EN: ${electronegativity[atoms[1]]}`, x + bondLength / 2, y + 48);
        }
    }

    renderHybridization(diagram, x, y, width, height, options) {
        const { hybridType, atom } = diagram;

        let numHybrid = hybridType === 'sp' ? 2 : hybridType === 'sp2' ? 3 : 4;

        const bxW = 45, bxH = 30, gap = 8;
        const atomicX = x - width / 3;
        const hybridX = x + width / 4;
        const levelY = y - height / 3;

        // Left: atomic orbitals
        this.ctx.fillStyle = '#000000';
        this.ctx.font = 'bold 14px Arial';
        this.ctx.textAlign = 'center';
        this.ctx.fillText('Atomic Orbitals', atomicX, levelY - 50);

        // 2s box
        this.drawOrbitalBoxBW(atomicX - bxW / 2, levelY, bxW, bxH, '2s', true);
        // 2p boxes
        const pStart = atomicX - (1.5 * (bxW + gap));
        for (let i = 0; i < 3; i++) {
            this.drawOrbitalBoxBW(pStart + i * (bxW + gap), levelY - bxH - 20, bxW, bxH, i === 0 ? '2p' : '', false);
        }

        // Arrow
        this.ctx.strokeStyle = '#000000';
        this.ctx.fillStyle = '#000000';
        this.ctx.lineWidth = 2.5;
        const arrowMidY = levelY - bxH / 2;
        this.ctx.beginPath();
        this.ctx.moveTo(atomicX + 80, arrowMidY);
        this.ctx.lineTo(hybridX - 80, arrowMidY);
        this.ctx.stroke();
        this.ctx.beginPath();
        this.ctx.moveTo(hybridX - 80, arrowMidY);
        this.ctx.lineTo(hybridX - 90, arrowMidY - 5);
        this.ctx.lineTo(hybridX - 90, arrowMidY + 5);
        this.ctx.closePath();
        this.ctx.fill();
        this.ctx.font = '13px Arial';
        this.ctx.textAlign = 'center';
        this.ctx.fillText('hybridize', (atomicX + hybridX) / 2, arrowMidY - 12);

        // Right: hybrid orbitals
        this.ctx.font = 'bold 14px Arial';
        this.ctx.fillText(`${hybridType.toUpperCase()} Hybrid Orbitals`, hybridX, levelY - 50);

        const hybStart = hybridX - ((numHybrid - 1) * (bxW + gap)) / 2;
        for (let i = 0; i < numHybrid; i++) {
            this.drawOrbitalBoxBW(hybStart + i * (bxW + gap) - bxW / 2, levelY - bxH / 2, bxW, bxH,
                i === 0 ? hybridType : '', true);
        }

        // Remaining p orbitals (for sp and sp2)
        if (numHybrid < 4) {
            const remaining = 4 - numHybrid;
            this.ctx.font = 'bold 13px Arial';
            this.ctx.fillText(`+ ${remaining} unhybridized p orbital(s)`, hybridX, levelY - bxH - 30);
        }

        // Shape diagram
        if (options.showOrbitals) {
            const shapeY = y + height / 4;
            this.ctx.font = 'bold 13px Arial';
            this.ctx.textAlign = 'center';
            this.ctx.fillText('Orbital Arrangement', x, shapeY - 40);

            for (let i = 0; i < numHybrid; i++) {
                const angle = (i / numHybrid) * Math.PI * 2 - Math.PI / 2;
                const r = 65;
                const ox = x + Math.cos(angle) * r;
                const oy = shapeY + Math.sin(angle) * r;

                // Lobe shape
                this.ctx.beginPath();
                this.ctx.ellipse(ox + Math.cos(angle) * 15, oy + Math.sin(angle) * 15, 28, 18, angle, 0, Math.PI * 2);
                this.ctx.fillStyle = i % 2 === 0 ? 'rgba(0,0,0,0.12)' : 'rgba(0,0,0,0.04)';
                this.ctx.fill();
                this.ctx.strokeStyle = '#000000';
                this.ctx.lineWidth = 2;
                this.ctx.stroke();
            }

            // Central atom
            this.ctx.beginPath();
            this.ctx.arc(x, shapeY, 12, 0, Math.PI * 2);
            this.ctx.fillStyle = '#333333';
            this.ctx.fill();
            this.ctx.fillStyle = '#ffffff';
            this.ctx.font = 'bold 10px Arial';
            this.ctx.fillText(atom, x, shapeY);
        }
    }

    drawOrbitalBoxBW(x, y, w, h, label, filled) {
        this.ctx.fillStyle = filled ? '#eeeeee' : '#ffffff';
        this.ctx.fillRect(x, y, w, h);
        this.ctx.strokeStyle = '#000000';
        this.ctx.lineWidth = 2;
        this.ctx.strokeRect(x, y, w, h);

        if (label) {
            this.ctx.fillStyle = '#000000';
            this.ctx.font = 'bold 11px Arial';
            this.ctx.textAlign = 'left';
            this.ctx.textBaseline = 'bottom';
            this.ctx.fillText(label, x + 3, y - 3);
        }

        if (filled) {
            this.drawArrow(x + w / 2 - 7, y + h / 2, 'up', '#000000');
            this.drawArrow(x + w / 2 + 7, y + h / 2, 'down', '#000000');
        }
    }

    renderSigmaPiBonds(diagram, x, y, size, options) {
        const bondLength = size * 0.5;

        this.drawAtomBW('C', x - bondLength / 2, y, 35);
        this.drawAtomBW('C', x + bondLength / 2, y, 35);

        // Sigma bond
        this.ctx.strokeStyle = '#000000';
        this.ctx.lineWidth = 5;
        this.ctx.beginPath();
        this.ctx.moveTo(x - bondLength / 2 + 35, y);
        this.ctx.lineTo(x + bondLength / 2 - 35, y);
        this.ctx.stroke();

        this.ctx.fillStyle = '#000000';
        this.ctx.font = 'bold 14px Arial';
        this.ctx.textAlign = 'center';
        this.ctx.fillText('σ bond (head-on overlap)', x, y - 55);

        // Pi bond lobes (above and below, shown with dashed outline)
        if (options.show3D) {
            for (const sign of [-1, 1]) {
                this.ctx.beginPath();
                this.ctx.ellipse(x, y + sign * 45, bondLength / 2 - 25, 22, 0, 0, Math.PI * 2);
                this.ctx.fillStyle = sign === -1 ? 'rgba(0,0,0,0.12)' : 'rgba(0,0,0,0.04)';
                this.ctx.fill();
                this.ctx.strokeStyle = '#000000';
                this.ctx.lineWidth = 2;
                this.ctx.setLineDash(sign === 1 ? [4, 3] : []);
                this.ctx.stroke();
                this.ctx.setLineDash([]);
            }
            this.ctx.fillStyle = '#000000';
            this.ctx.font = 'bold 13px Arial';
            this.ctx.fillText('π bond (side-on overlap)', x, y + 85);
        }

        // H atoms
        const hPositions = [
            [x - bondLength / 2 - 65, y - 45],
            [x - bondLength / 2 - 65, y + 45],
            [x + bondLength / 2 + 65, y - 45],
            [x + bondLength / 2 + 65, y + 45]
        ];
        hPositions.forEach(([hx, hy]) => {
            this.drawAtomBW('H', hx, hy, 22);
        });

        // C-H bonds
        this.ctx.strokeStyle = '#333333';
        this.ctx.lineWidth = 2;
        [
            [x - bondLength / 2, y, x - bondLength / 2 - 45, y - 45],
            [x - bondLength / 2, y, x - bondLength / 2 - 45, y + 45],
            [x + bondLength / 2, y, x + bondLength / 2 + 45, y - 45],
            [x + bondLength / 2, y, x + bondLength / 2 + 45, y + 45],
        ].forEach(([x1, y1, x2, y2]) => {
            this.ctx.beginPath();
            this.ctx.moveTo(x1, y1);
            this.ctx.lineTo(x2, y2);
            this.ctx.stroke();
        });

        if (options.showOverlap) {
            this.ctx.font = '12px Arial';
            this.ctx.textAlign = 'center';
            this.ctx.fillText('σ: sp² + sp²  |  π: p + p (above & below)', x, y + (options.show3D ? 110 : 75));
        }
    }

    renderResonance(diagram, x, y, width, options) {
        const { structures } = diagram;
        const structureWidth = width / (structures + 0.3);

        for (let i = 0; i < structures; i++) {
            const sx = x + i * structureWidth + structureWidth / 2;
            const center = { x: sx, y };
            const radius = 60;

            this.ctx.fillStyle = '#000000';
            this.ctx.font = 'bold 18px Arial';
            this.ctx.textAlign = 'center';
            this.ctx.textBaseline = 'middle';
            this.ctx.fillText('C', center.x, center.y);

            for (let j = 0; j < 3; j++) {
                const angle = (j / 3) * Math.PI * 2 - Math.PI / 2;
                const ox = center.x + radius * Math.cos(angle);
                const oy = center.y + radius * Math.sin(angle);
                this.ctx.fillText('O', ox, oy);

                const isDouble = j === i % 3;
                this.ctx.strokeStyle = '#000000';
                this.ctx.lineWidth = 2.5;

                if (isDouble) {
                    const pa = angle + Math.PI / 2;
                    const off = 4;
                    for (const s of [-1, 1]) {
                        this.ctx.beginPath();
                        this.ctx.moveTo(center.x + s * off * Math.cos(pa) + 12 * Math.cos(angle),
                            center.y + s * off * Math.sin(pa) + 12 * Math.sin(angle));
                        this.ctx.lineTo(ox + s * off * Math.cos(pa) - 12 * Math.cos(angle),
                            oy + s * off * Math.sin(pa) - 12 * Math.sin(angle));
                        this.ctx.stroke();
                    }
                } else {
                    this.ctx.beginPath();
                    this.ctx.moveTo(center.x + 12 * Math.cos(angle), center.y + 12 * Math.sin(angle));
                    this.ctx.lineTo(ox - 12 * Math.cos(angle), oy - 12 * Math.sin(angle));
                    this.ctx.stroke();
                    // Negative charge
                    this.ctx.font = 'bold 14px Arial';
                    this.ctx.fillText('−', ox + 18 * Math.cos(angle), oy + 18 * Math.sin(angle));
                }
            }

            // Overall 2- charge
            this.ctx.font = 'bold 14px Arial';
            this.ctx.textAlign = 'left';
            this.ctx.fillText('2−', center.x + radius + 12, center.y - radius + 8);

            // Resonance double-headed arrow
            if (options.showArrows && i < structures - 1) {
                const arrowX = sx + structureWidth / 2;
                this.ctx.strokeStyle = '#000000';
                this.ctx.fillStyle = '#000000';
                this.ctx.lineWidth = 2;
                this.ctx.beginPath();
                this.ctx.moveTo(arrowX - 22, y);
                this.ctx.lineTo(arrowX + 22, y);
                this.ctx.stroke();
                for (const dir of [-1, 1]) {
                    const ax = dir === -1 ? arrowX - 22 : arrowX + 22;
                    this.ctx.beginPath();
                    this.ctx.moveTo(ax, y);
                    this.ctx.lineTo(ax + dir * -8, y - 5);
                    this.ctx.lineTo(ax + dir * -8, y + 5);
                    this.ctx.closePath();
                    this.ctx.fill();
                }
            }
        }

        // Resonance hybrid
        if (options.showHybrid) {
            const hybridY = y + 160;
            this.ctx.fillStyle = '#000000';
            this.ctx.font = 'bold 14px Arial';
            this.ctx.textAlign = 'center';
            this.ctx.fillText('Resonance Hybrid:', x + width / 2, hybridY - 75);

            const center = { x: x + width / 2, y: hybridY };
            const radius = 60;

            this.ctx.font = 'bold 18px Arial';
            this.ctx.textBaseline = 'middle';
            this.ctx.fillText('C', center.x, center.y);

            for (let j = 0; j < 3; j++) {
                const angle = (j / 3) * Math.PI * 2 - Math.PI / 2;
                const ox = center.x + radius * Math.cos(angle);
                const oy = center.y + radius * Math.sin(angle);
                this.ctx.fillText('O', ox, oy);

                this.ctx.strokeStyle = '#000000';
                this.ctx.lineWidth = 2.5;
                this.ctx.setLineDash([5, 3]);
                this.ctx.beginPath();
                this.ctx.moveTo(center.x + 12 * Math.cos(angle), center.y + 12 * Math.sin(angle));
                this.ctx.lineTo(ox - 12 * Math.cos(angle), oy - 12 * Math.sin(angle));
                this.ctx.stroke();
                this.ctx.setLineDash([]);

                this.ctx.font = '11px Arial';
                this.ctx.fillText('⅔−', ox + 20 * Math.cos(angle), oy + 20 * Math.sin(angle));
            }
            this.ctx.font = 'bold 14px Arial';
            this.ctx.textAlign = 'left';
            this.ctx.fillText('2−', center.x + radius + 12, center.y - radius + 8);
        }
    }

    // ========== ORGANIC CHEMISTRY RENDERERS ==========

    renderOrganicFormula(diagram, x, y, size, options) {
        const { type, molecule, formula, carbons } = diagram;

        if (type === 'skeletal_formula') {
            this.renderSkeletalFormula(diagram, x, y, size, options);
        } else {
            this.renderStructuralFormula(diagram, x, y, size, options);
        }
    }

    renderStructuralFormula(diagram, x, y, size, options) {
        const { molecule, formula } = diagram;
        // Ethanol: C2H5OH
        const bondLen = 55;
        const atoms = [
            { el: 'C', x: x - bondLen, y },
            { el: 'C', x, y },
            { el: 'O', x: x + bondLen, y },
            { el: 'H', x: x + bondLen * 2, y }
        ];

        // C-C-O-H horizontal chain
        this.ctx.strokeStyle = '#000000';
        this.ctx.lineWidth = 2.5;
        for (let i = 0; i < atoms.length - 1; i++) {
            this.ctx.beginPath();
            this.ctx.moveTo(atoms[i].x + 18, atoms[i].y);
            this.ctx.lineTo(atoms[i + 1].x - 18, atoms[i + 1].y);
            this.ctx.stroke();
        }

        atoms.forEach(a => this.drawAtomBW(a.el, a.x, a.y, 18));

        // H atoms on first C (3H)
        const c1 = atoms[0];
        const hOffsets = [[0, -45], [-35, 20], [35, 20]];
        hOffsets.forEach(([dx, dy]) => {
            this.ctx.beginPath();
            this.ctx.moveTo(c1.x + (dx > 0 ? 12 : dx < 0 ? -12 : 0), c1.y + (dy !== 0 ? (dy > 0 ? 12 : -12) : 0));
            this.ctx.lineTo(c1.x + dx, c1.y + dy);
            this.ctx.stroke();
            this.drawAtomBW('H', c1.x + dx, c1.y + dy, 14);
        });

        // H atoms on second C (2H)
        const c2 = atoms[1];
        [[-45, 0], [0, -45]].forEach(([dx, dy]) => {
            this.ctx.beginPath();
            this.ctx.moveTo(c2.x + (dx > 0 ? 12 : dx < 0 ? -12 : 0), c2.y + (dy < 0 ? -12 : 0));
            this.ctx.lineTo(c2.x + dx, c2.y + dy);
            this.ctx.stroke();
            this.drawAtomBW('H', c2.x + dx, c2.y + dy, 14);
        });

        // Labels
        this.ctx.fillStyle = '#000000';
        this.ctx.font = 'bold 15px Arial';
        this.ctx.textAlign = 'center';
        this.ctx.fillText(formula || 'C₂H₅OH', x, y + 90);
        this.ctx.font = '13px Arial';
        this.ctx.fillText(molecule || 'Ethanol', x, y + 110);
    }

    renderSkeletalFormula(diagram, x, y, size, options) {
        const { carbons } = diagram;
        const n = carbons || 6;
        const bondLen = Math.min(60, size / (n * 0.8));
        const startX = x - (n - 1) * bondLen / 2;

        this.ctx.strokeStyle = '#000000';
        this.ctx.lineWidth = 3;
        this.ctx.lineJoin = 'round';
        this.ctx.beginPath();

        let px = startX, py = y;
        this.ctx.moveTo(px, py);

        for (let i = 1; i < n; i++) {
            const nx = px + bondLen;
            const ny = i % 2 === 1 ? py - 35 : py;
            this.ctx.lineTo(nx, ny);
            px = nx; py = ny;
        }
        this.ctx.stroke();

        // Endpoints label (first and last carbon implicitly shown)
        this.ctx.fillStyle = '#000000';
        this.ctx.font = 'bold 14px Arial';
        this.ctx.textAlign = 'center';
        this.ctx.textBaseline = 'top';
        this.ctx.fillText(`Hexane (C${n}H${2 * n + 2}) — Skeletal Formula`, x, y + 55);
        this.ctx.font = '12px Arial';
        this.ctx.fillStyle = '#555555';
        this.ctx.fillText('Each vertex/end = Carbon atom + implicit H atoms', x, y + 72);
    }

    renderReactionMechanism(diagram, x, y, width, options) {
        const { mechanism, reactants, product } = diagram;
        const cx = x + width / 2;

        // SN2 shown as: Nu: → [C-X] → Nu-C + X-
        const spacing = width * 0.28;

        // Nucleophile
        this.ctx.fillStyle = '#000000';
        this.ctx.font = 'bold 16px Arial';
        this.ctx.textAlign = 'center';
        this.ctx.textBaseline = 'middle';
        this.ctx.fillText('HO⁻', cx - spacing, y);
        this.ctx.font = '12px Arial';
        this.ctx.fillText('(Nucleophile)', cx - spacing, y + 30);

        // Substrate
        this.drawAtomBW('C', cx, y, 28);
        this.ctx.font = '12px Arial';
        this.ctx.fillText('CH₃Br', cx, y + 50);
        this.ctx.fillText('(Substrate)', cx, y + 65);

        // Arrow from Nu to C (curved)
        this.ctx.strokeStyle = '#000000';
        this.ctx.fillStyle = '#000000';
        this.ctx.lineWidth = 2.5;
        this.ctx.beginPath();
        this.ctx.moveTo(cx - spacing + 25, y - 10);
        this.ctx.quadraticCurveTo(cx - spacing / 2, y - 55, cx - 30, y - 5);
        this.ctx.stroke();
        // Arrowhead
        this.ctx.beginPath();
        this.ctx.moveTo(cx - 30, y - 5);
        this.ctx.lineTo(cx - 38, y - 18);
        this.ctx.lineTo(cx - 18, y - 15);
        this.ctx.closePath();
        this.ctx.fill();

        // Arrow from C-Br bond to Br leaving
        this.ctx.beginPath();
        this.ctx.moveTo(cx + 30, y + 5);
        this.ctx.quadraticCurveTo(cx + spacing / 2, y + 55, cx + spacing - 25, y + 10);
        this.ctx.stroke();
        this.ctx.beginPath();
        this.ctx.moveTo(cx + spacing - 25, y + 10);
        this.ctx.lineTo(cx + spacing - 12, y + 22);
        this.ctx.lineTo(cx + spacing - 15, y + 5);
        this.ctx.closePath();
        this.ctx.fill();

        // Product
        this.ctx.font = 'bold 16px Arial';
        this.ctx.fillText('HO-CH₃', cx + spacing, y - 15);
        this.ctx.font = '12px Arial';
        this.ctx.fillText('(Product)', cx + spacing, y + 10);

        // Leaving group
        this.ctx.font = 'bold 16px Arial';
        this.ctx.fillText('Br⁻', cx + spacing, y + 35);
        this.ctx.font = '12px Arial';
        this.ctx.fillText('(Leaving group)', cx + spacing, y + 52);

        // Transition state
        if (options.showTransitionState) {
            this.ctx.font = '13px Arial';
            this.ctx.textAlign = 'center';
            this.ctx.fillText('[HO---C---Br]‡', cx, y - 85);
            this.ctx.fillText('Transition State', cx, y - 68);
        }

        // Mechanism label
        this.ctx.font = 'bold 15px Arial';
        this.ctx.fillText(`${mechanism} Mechanism`, cx, y + 110);
        this.ctx.font = '12px Arial';
        this.ctx.fillStyle = '#444444';
        this.ctx.fillText('Back-side attack — inversion of configuration', cx, y + 130);
    }

    renderFunctionalGroups(diagram, x, y, width, height, options) {
        const { groups } = diagram;
        const cols = 4;
        const rows = Math.ceil(groups.length / cols);
        const cellW = width / cols;
        const cellH = height / rows;

        const groupData = {
            alcohol:        { formula: '-OH', name: 'Alcohol', example: 'CH₃OH' },
            aldehyde:       { formula: '-CHO', name: 'Aldehyde', example: 'HCHO' },
            ketone:         { formula: '>C=O', name: 'Ketone', example: 'CH₃COCH₃' },
            carboxylicAcid: { formula: '-COOH', name: 'Carboxylic Acid', example: 'CH₃COOH' },
            ester:          { formula: '-COO-', name: 'Ester', example: 'CH₃COOC₂H₅' },
            amine:          { formula: '-NH₂', name: 'Amine', example: 'CH₃NH₂' },
            amide:          { formula: '-CONH₂', name: 'Amide', example: 'CH₃CONH₂' }
        };

        groups.forEach((group, index) => {
            const col = index % cols;
            const row = Math.floor(index / cols);
            const cx = x + col * cellW + cellW / 2;
            const cy = y + row * cellH + cellH / 2;
            const data = groupData[group] || { formula: '?', name: group, example: '' };

            // Cell border
            this.ctx.strokeStyle = '#000000';
            this.ctx.lineWidth = 1.5;
            this.ctx.strokeRect(x + col * cellW + 8, y + row * cellH + 8, cellW - 16, cellH - 16);

            // Alternating fill
            this.ctx.fillStyle = index % 2 === 0 ? '#f5f5f5' : '#ffffff';
            this.ctx.fillRect(x + col * cellW + 9, y + row * cellH + 9, cellW - 17, cellH - 17);

            this.ctx.fillStyle = '#000000';
            this.ctx.font = 'bold 18px Arial';
            this.ctx.textAlign = 'center';
            this.ctx.textBaseline = 'top';
            this.ctx.fillText(data.formula, cx, cy - cellH / 2 + 18);

            if (options.showNames) {
                this.ctx.font = 'bold 13px Arial';
                this.ctx.fillText(data.name, cx, cy - 5);
            }

            if (options.showExamples) {
                this.ctx.font = '12px Arial';
                this.ctx.fillStyle = '#444444';
                this.ctx.fillText(data.example, cx, cy + 15);
            }
        });
    }

    renderIsomers(diagram, x, y, width, options) {
        const { formula, isomerType } = diagram;
        // Show butane (C4H10) structural isomers
        const isomers = [
            { name: 'n-Butane', labels: ['CH₃', 'CH₂', 'CH₂', 'CH₃'], type: 'chain' },
            { name: '2-Methylpropane\n(isobutane)', labels: ['CH₃', 'CH(CH₃)', 'CH₃'], type: 'branched' }
        ];

        const isoW = width / isomers.length;
        const bondLen = 55;

        isomers.forEach((iso, idx) => {
            const bx = x + idx * isoW + isoW / 2;

            // Name
            this.ctx.fillStyle = '#000000';
            this.ctx.font = 'bold 14px Arial';
            this.ctx.textAlign = 'center';
            this.ctx.textBaseline = 'top';
            iso.name.split('\n').forEach((line, li) => {
                this.ctx.fillText(line, bx, y - 120 + li * 18);
            });

            this.ctx.strokeStyle = '#000000';
            this.ctx.lineWidth = 2.5;

            if (iso.type === 'chain') {
                // Draw n-butane chain
                const startX = bx - bondLen * 1.5;
                for (let i = 0; i < 3; i++) {
                    this.ctx.beginPath();
                    this.ctx.moveTo(startX + i * bondLen + 22, y);
                    this.ctx.lineTo(startX + (i + 1) * bondLen - 22, y);
                    this.ctx.stroke();
                }
                iso.labels.forEach((lbl, i) => {
                    this.drawAtomBW(lbl.slice(0, 1), startX + i * bondLen, y, 22);
                    this.ctx.font = '11px Arial';
                    this.ctx.fillText(lbl, startX + i * bondLen, y + 32);
                });
            } else {
                // Draw 2-methylpropane: central C with 3 CH3 groups
                this.drawAtomBW('C', bx, y, 22);
                const branches = [[bx - bondLen, y], [bx + bondLen, y], [bx, y - bondLen]];
                branches.forEach(([bx2, by2]) => {
                    this.ctx.beginPath();
                    this.ctx.moveTo(bx + (bx2 > bx ? 22 : bx2 < bx ? -22 : 0), y + (by2 < y ? -22 : 0));
                    this.ctx.lineTo(bx2 + (bx2 > bx ? -22 : bx2 < bx ? 22 : 0), by2 + (by2 < y ? 22 : 0));
                    this.ctx.stroke();
                    this.drawAtomBW('C', bx2, by2, 22);
                    this.ctx.font = '11px Arial';
                    this.ctx.fillText('CH₃', bx2, by2 + 35);
                });
                // Bottom CH3
                this.ctx.beginPath();
                this.ctx.moveTo(bx, y + 22);
                this.ctx.lineTo(bx, y + bondLen - 22);
                this.ctx.stroke();
                this.drawAtomBW('C', bx, y + bondLen, 22);
                this.ctx.font = '11px Arial';
                this.ctx.fillText('CH₃', bx, y + bondLen + 35);
            }
        });

        this.ctx.fillStyle = '#000000';
        this.ctx.font = 'bold 14px Arial';
        this.ctx.textAlign = 'center';
        this.ctx.fillText(`Structural Isomers of ${formula}`, x + width / 2, y + 120);
        this.ctx.font = '12px Arial';
        this.ctx.fillStyle = '#444444';
        this.ctx.fillText('Same molecular formula, different structural arrangement', x + width / 2, y + 138);
    }

    renderPolymerization(diagram, x, y, width, options) {
        const { monomer, polymer } = diagram;
        const bondLen = 50;

        // Monomer box
        const mBox = { x: x + 30, y: y - 80, w: 130, h: 70 };
        this.ctx.strokeStyle = '#000000';
        this.ctx.lineWidth = 2;
        this.ctx.strokeRect(mBox.x, mBox.y, mBox.w, mBox.h);
        this.ctx.fillStyle = '#f5f5f5';
        this.ctx.fillRect(mBox.x + 1, mBox.y + 1, mBox.w - 2, mBox.h - 2);

        this.ctx.fillStyle = '#000000';
        this.ctx.font = 'bold 14px Arial';
        this.ctx.textAlign = 'center';
        this.ctx.fillText('Monomer', mBox.x + mBox.w / 2, mBox.y + 22);
        this.ctx.font = '16px Arial';
        this.ctx.fillText('CH₂=CH₂', mBox.x + mBox.w / 2, mBox.y + 48);

        // Arrow
        this.ctx.strokeStyle = '#000000';
        this.ctx.fillStyle = '#000000';
        this.ctx.lineWidth = 2.5;
        this.ctx.beginPath();
        this.ctx.moveTo(mBox.x + mBox.w / 2, mBox.y + mBox.h);
        this.ctx.lineTo(mBox.x + mBox.w / 2, mBox.y + mBox.h + 40);
        this.ctx.stroke();
        this.ctx.beginPath();
        this.ctx.moveTo(mBox.x + mBox.w / 2, mBox.y + mBox.h + 40);
        this.ctx.lineTo(mBox.x + mBox.w / 2 - 7, mBox.y + mBox.h + 28);
        this.ctx.lineTo(mBox.x + mBox.w / 2 + 7, mBox.y + mBox.h + 28);
        this.ctx.closePath();
        this.ctx.fill();
        this.ctx.font = '12px Arial';
        this.ctx.textAlign = 'left';
        this.ctx.fillText('n molecules', mBox.x + mBox.w / 2 + 10, mBox.y + mBox.h + 22);
        this.ctx.fillText('polymerize', mBox.x + mBox.w / 2 + 10, mBox.y + mBox.h + 36);

        // Polymer chain
        const pY = y + 60;
        const pStartX = x + 30;
        const units = 4;
        const unitW = 70;

        this.ctx.font = 'bold 13px Arial';
        this.ctx.textAlign = 'center';
        this.ctx.fillText('Polymer Chain', pStartX + (units * unitW) / 2, pY - 25);

        for (let i = 0; i < units; i++) {
            const ux = pStartX + i * unitW;
            // Bracket
            this.ctx.strokeStyle = '#000000';
            this.ctx.lineWidth = 2;
            this.ctx.beginPath();
            this.ctx.moveTo(ux + 5, pY - 15);
            this.ctx.lineTo(ux, pY - 15);
            this.ctx.lineTo(ux, pY + 15);
            this.ctx.lineTo(ux + 5, pY + 15);
            this.ctx.stroke();
            this.ctx.beginPath();
            this.ctx.moveTo(ux + unitW - 5, pY - 15);
            this.ctx.lineTo(ux + unitW, pY - 15);
            this.ctx.lineTo(ux + unitW, pY + 15);
            this.ctx.lineTo(ux + unitW - 5, pY + 15);
            this.ctx.stroke();

            this.ctx.font = '12px Arial';
            this.ctx.textAlign = 'center';
            this.ctx.fillText('—CH₂—', ux + unitW / 2, pY - 2);
            this.ctx.fillText('—CH₂—', ux + unitW / 2, pY + 12);

            // Bond between units
            if (i < units - 1) {
                this.ctx.beginPath();
                this.ctx.moveTo(ux + unitW, pY);
                this.ctx.lineTo(ux + unitW + 2, pY);
                this.ctx.stroke();
            }
        }

        // Subscript n
        this.ctx.font = 'bold 16px Arial';
        this.ctx.textAlign = 'left';
        this.ctx.fillText('n', pStartX + units * unitW + 8, pY + 8);

        this.ctx.font = '13px Arial';
        this.ctx.textAlign = 'center';
        this.ctx.fillText(`Polyethylene (${polymer})`, pStartX + (units * unitW) / 2, pY + 40);
    }

    renderAromatic(diagram, x, y, size, options) {
        const r = size * 0.35;
        const sides = 6;

        // Hexagon vertices
        const pts = [];
        for (let i = 0; i < sides; i++) {
            const a = (i / sides) * Math.PI * 2 - Math.PI / 2;
            pts.push([x + r * Math.cos(a), y + r * Math.sin(a)]);
        }

        // Draw two resonance forms side by side if requested
        if (options.showResonance) {
            for (let form = 0; form < 2; form++) {
                const ox = x + (form === 0 ? -size * 0.5 : size * 0.5);

                const fpts = pts.map(([px, py]) => [px + (form === 0 ? -size * 0.5 : size * 0.5), py]);

                // All sides
                this.ctx.strokeStyle = '#000000';
                this.ctx.lineWidth = 2.5;
                this.ctx.beginPath();
                fpts.forEach(([px, py], i) => i === 0 ? this.ctx.moveTo(px, py) : this.ctx.lineTo(px, py));
                this.ctx.closePath();
                this.ctx.stroke();

                // Alternating double bonds
                for (let i = 0; i < sides; i++) {
                    if (i % 2 === form % 2) {
                        const [x1, y1] = fpts[i];
                        const [x2, y2] = fpts[(i + 1) % sides];
                        const mx = (x1 + x2) / 2, my = (y1 + y2) / 2;
                        const dx = x2 - x1, dy = y2 - y1;
                        const len = Math.sqrt(dx * dx + dy * dy);
                        const px2 = -dy / len * 5, py2 = dx / len * 5;

                        this.ctx.strokeStyle = '#000000';
                        this.ctx.lineWidth = 2.5;
                        this.ctx.beginPath();
                        this.ctx.moveTo(x1 + px2, y1 + py2);
                        this.ctx.lineTo(x2 + px2, y2 + py2);
                        this.ctx.stroke();
                    }
                }
            }

            // Double arrow between
            this.ctx.strokeStyle = '#000000';
            this.ctx.fillStyle = '#000000';
            this.ctx.lineWidth = 2;
            this.ctx.beginPath();
            this.ctx.moveTo(x - 22, y);
            this.ctx.lineTo(x + 22, y);
            this.ctx.stroke();
            for (const d of [-1, 1]) {
                const ax = d === -1 ? x - 22 : x + 22;
                this.ctx.beginPath();
                this.ctx.moveTo(ax, y);
                this.ctx.lineTo(ax - d * 8, y - 5);
                this.ctx.lineTo(ax - d * 8, y + 5);
                this.ctx.closePath();
                this.ctx.fill();
            }
        }

        // Hybrid representation: circle inside hexagon
        const repX = options.showResonance ? x : x;
        const repY = options.showResonance ? y + size * 0.75 : y;
        const rpts = pts.map(([px, py]) => [px + repX - x, py + repY - y]);

        this.ctx.strokeStyle = '#000000';
        this.ctx.lineWidth = 2.5;
        this.ctx.beginPath();
        rpts.forEach(([px, py], i) => i === 0 ? this.ctx.moveTo(px, py) : this.ctx.lineTo(px, py));
        this.ctx.closePath();
        this.ctx.stroke();

        if (options.showElectronCloud) {
            this.ctx.strokeStyle = '#000000';
            this.ctx.lineWidth = 2;
            this.ctx.setLineDash([]);
            this.ctx.beginPath();
            this.ctx.arc(repX, repY, r * 0.55, 0, Math.PI * 2);
            this.ctx.stroke();
        }

        const lbl = options.showResonance ? 'Resonance Hybrid' : 'Benzene';
        this.ctx.fillStyle = '#000000';
        this.ctx.font = 'bold 14px Arial';
        this.ctx.textAlign = 'center';
        this.ctx.fillText(lbl, repX, repY + r + 25);
        this.ctx.font = '12px Arial';
        this.ctx.fillText('Aromatic — 6 delocalized π electrons', repX, repY + r + 42);
    }

    // ========== STATES OF MATTER RENDERERS ==========

    renderParticleStates(diagram, x, y, width, height, options) {
        const { states } = diagram;
        const stateWidth = width / states.length;
        const boxH = height * 0.78;

        states.forEach((state, index) => {
            const bx = x + index * stateWidth;
            const by = y - boxH / 2;

            this.ctx.strokeStyle = '#000000';
            this.ctx.lineWidth = 2.5;
            this.ctx.fillStyle = '#ffffff';
            this.ctx.fillRect(bx + 10, by, stateWidth - 20, boxH);
            this.ctx.strokeRect(bx + 10, by, stateWidth - 20, boxH);

            this.ctx.fillStyle = '#000000';
            this.ctx.font = 'bold 15px Arial';
            this.ctx.textAlign = 'center';
            this.ctx.textBaseline = 'bottom';
            this.ctx.fillText(state.charAt(0).toUpperCase() + state.slice(1), bx + stateWidth / 2, by - 6);

            const particleR = 7;
            const innerW = stateWidth - 40;
            const innerH = boxH - 20;
            const innerX = bx + 20;
            const innerY = by + 10;

            if (state === 'solid') {
                const cols = 5, rows = 6;
                for (let r = 0; r < rows; r++) {
                    for (let c = 0; c < cols; c++) {
                        const px = innerX + (c + 0.5) * innerW / cols;
                        const py = innerY + (r + 0.5) * innerH / rows;
                        this.ctx.beginPath();
                        this.ctx.arc(px, py, particleR, 0, Math.PI * 2);
                        this.ctx.fillStyle = '#333333';
                        this.ctx.fill();
                        this.ctx.strokeStyle = '#000000';
                        this.ctx.lineWidth = 1.5;
                        this.ctx.stroke();
                    }
                }
            } else if (state === 'liquid') {
                // Loosely packed, slight randomness, bottom-biased
                const positions = [];
                let attempts = 0;
                while (positions.length < 22 && attempts < 500) {
                    const px = innerX + particleR * 2 + Math.random() * (innerW - particleR * 4);
                    const py = innerY + innerH * 0.2 + Math.random() * (innerH * 0.75);
                    const ok = positions.every(([ppx, ppy]) =>
                        Math.hypot(px - ppx, py - ppy) > particleR * 2.4);
                    if (ok) positions.push([px, py]);
                    attempts++;
                }
                positions.forEach(([px, py]) => {
                    this.ctx.beginPath();
                    this.ctx.arc(px, py, particleR, 0, Math.PI * 2);
                    this.ctx.fillStyle = '#888888';
                    this.ctx.fill();
                    this.ctx.strokeStyle = '#000000';
                    this.ctx.lineWidth = 1.5;
                    this.ctx.stroke();
                });
            } else {
                // Gas - sparse and random
                for (let i = 0; i < 9; i++) {
                    const px = innerX + particleR * 2 + Math.random() * (innerW - particleR * 4);
                    const py = innerY + particleR * 2 + Math.random() * (innerH - particleR * 4);
                    this.ctx.beginPath();
                    this.ctx.arc(px, py, particleR, 0, Math.PI * 2);
                    this.ctx.fillStyle = '#bbbbbb';
                    this.ctx.fill();
                    this.ctx.strokeStyle = '#000000';
                    this.ctx.lineWidth = 1.5;
                    this.ctx.stroke();
                    // Motion lines
                    const angle = Math.random() * Math.PI * 2;
                    this.ctx.strokeStyle = '#555555';
                    this.ctx.lineWidth = 1;
                    this.ctx.beginPath();
                    this.ctx.moveTo(px, py);
                    this.ctx.lineTo(px + Math.cos(angle) * 12, py + Math.sin(angle) * 12);
                    this.ctx.stroke();
                }
            }

            if (options.showLabels) {
                const props = {
                    solid: ['Fixed shape', 'Fixed volume', 'Vibrate only'],
                    liquid: ['No fixed shape', 'Fixed volume', 'Flow freely'],
                    gas: ['No fixed shape', 'No fixed volume', 'Move rapidly']
                };
                this.ctx.fillStyle = '#333333';
                this.ctx.font = '11px Arial';
                this.ctx.textAlign = 'center';
                this.ctx.textBaseline = 'top';
                props[state].forEach((p, pi) => {
                    this.ctx.fillText(p, bx + stateWidth / 2, by + boxH + 8 + pi * 14);
                });
            }
        });
    }

    renderParticleMotion(diagram, x, y, width, height, options) {
        const { type, particleCount } = diagram;

        this.ctx.strokeStyle = '#000000';
        this.ctx.lineWidth = 2.5;
        this.ctx.fillStyle = '#ffffff';
        this.ctx.fillRect(x - width / 2, y - height / 2, width, height);
        this.ctx.strokeRect(x - width / 2, y - height / 2, width, height);

        if (type === 'diffusion') {
            // Divider
            this.ctx.strokeStyle = '#555555';
            this.ctx.lineWidth = 1.5;
            this.ctx.setLineDash([8, 6]);
            this.ctx.beginPath();
            this.ctx.moveTo(x, y - height / 2);
            this.ctx.lineTo(x, y + height / 2);
            this.ctx.stroke();
            this.ctx.setLineDash([]);

            // Left: concentrated particles
            for (let i = 0; i < 18; i++) {
                const px = x - width / 2 + 15 + Math.random() * (width / 2 - 30);
                const py = y - height / 2 + 15 + Math.random() * (height - 30);
                this.ctx.beginPath();
                this.ctx.arc(px, py, 6, 0, Math.PI * 2);
                this.ctx.fillStyle = '#333333';
                this.ctx.fill();
                this.ctx.strokeStyle = '#000000';
                this.ctx.lineWidth = 1.5;
                this.ctx.stroke();
            }

            // Right: sparse particles
            for (let i = 0; i < 5; i++) {
                const px = x + 15 + Math.random() * (width / 2 - 30);
                const py = y - height / 2 + 15 + Math.random() * (height - 30);
                this.ctx.beginPath();
                this.ctx.arc(px, py, 6, 0, Math.PI * 2);
                this.ctx.fillStyle = '#888888';
                this.ctx.fill();
                this.ctx.strokeStyle = '#000000';
                this.ctx.lineWidth = 1.5;
                this.ctx.stroke();
            }

            // Diffusion arrows
            this.ctx.strokeStyle = '#000000';
            this.ctx.fillStyle = '#000000';
            this.ctx.lineWidth = 2;
            for (let i = 0; i < 4; i++) {
                const ay = y - height / 3 + i * (height / 6);
                this.ctx.beginPath();
                this.ctx.moveTo(x - 15, ay);
                this.ctx.lineTo(x + 15, ay);
                this.ctx.stroke();
                this.ctx.beginPath();
                this.ctx.moveTo(x + 15, ay);
                this.ctx.lineTo(x + 8, ay - 4);
                this.ctx.lineTo(x + 8, ay + 4);
                this.ctx.closePath();
                this.ctx.fill();
            }

            this.ctx.fillStyle = '#000000';
            this.ctx.font = 'bold 13px Arial';
            this.ctx.textAlign = 'center';
            this.ctx.fillText('High conc.', x - width / 4, y - height / 2 + 20);
            this.ctx.fillText('Low conc.', x + width / 4, y - height / 2 + 20);
            this.ctx.fillText('Net diffusion →', x, y + height / 2 - 12);

        } else {
            // Brownian motion
            // Small background particles
            for (let i = 0; i < (particleCount || 25); i++) {
                const px = x - width / 2 + 20 + Math.random() * (width - 40);
                const py = y - height / 2 + 20 + Math.random() * (height - 40);
                this.ctx.beginPath();
                this.ctx.arc(px, py, 3, 0, Math.PI * 2);
                this.ctx.fillStyle = '#aaaaaa';
                this.ctx.fill();
            }

            // Random path
            if (options.showPaths) {
                this.ctx.strokeStyle = '#555555';
                this.ctx.lineWidth = 1.5;
                this.ctx.setLineDash([3, 3]);
                this.ctx.beginPath();
                let cx2 = x, cy2 = y;
                this.ctx.moveTo(cx2, cy2);
                for (let i = 0; i < 18; i++) {
                    cx2 = Math.max(x - width / 2 + 30, Math.min(x + width / 2 - 30, cx2 + (Math.random() - 0.5) * 35));
                    cy2 = Math.max(y - height / 2 + 30, Math.min(y + height / 2 - 30, cy2 + (Math.random() - 0.5) * 35));
                    this.ctx.lineTo(cx2, cy2);
                }
                this.ctx.stroke();
                this.ctx.setLineDash([]);
            }

            // Large central particle
            this.ctx.beginPath();
            this.ctx.arc(x, y, 18, 0, Math.PI * 2);
            this.ctx.fillStyle = '#333333';
            this.ctx.fill();
            this.ctx.strokeStyle = '#000000';
            this.ctx.lineWidth = 2.5;
            this.ctx.stroke();
            this.ctx.fillStyle = '#ffffff';
            this.ctx.font = 'bold 10px Arial';
            this.ctx.textAlign = 'center';
            this.ctx.textBaseline = 'middle';
            this.ctx.fillText('P', x, y);

            // Collision arrows
            if (options.showCollisions) {
                this.ctx.strokeStyle = '#000000';
                this.ctx.fillStyle = '#000000';
                this.ctx.lineWidth = 2;
                for (let i = 0; i < 6; i++) {
                    const angle = (i / 6) * Math.PI * 2;
                    const r1 = 25, r2 = 40;
                    this.ctx.beginPath();
                    this.ctx.moveTo(x + Math.cos(angle) * r1, y + Math.sin(angle) * r1);
                    this.ctx.lineTo(x + Math.cos(angle) * r2, y + Math.sin(angle) * r2);
                    this.ctx.stroke();
                    this.ctx.beginPath();
                    this.ctx.moveTo(x + Math.cos(angle) * r2, y + Math.sin(angle) * r2);
                    this.ctx.lineTo(x + Math.cos(angle + 0.4) * (r2 - 8), y + Math.sin(angle + 0.4) * (r2 - 8));
                    this.ctx.lineTo(x + Math.cos(angle - 0.4) * (r2 - 8), y + Math.sin(angle - 0.4) * (r2 - 8));
                    this.ctx.closePath();
                    this.ctx.fill();
                }
            }

            this.ctx.fillStyle = '#000000';
            this.ctx.font = 'bold 13px Arial';
            this.ctx.textAlign = 'center';
            this.ctx.textBaseline = 'top';
            this.ctx.fillText('Random collisions cause erratic movement', x, y + height / 2 - 25);
        }
    }

    renderHeatingCoolingCurve(diagram, x, y, width, height, options) {
        const { type, substance } = diagram;

        // Axes
        this.ctx.strokeStyle = '#000000';
        this.ctx.lineWidth = 2.5;
        this.ctx.beginPath();
        this.ctx.moveTo(x - width / 2, y - height / 2);
        this.ctx.lineTo(x - width / 2, y + height / 2);
        this.ctx.lineTo(x + width / 2, y + height / 2);
        this.ctx.stroke();

        // Arrow heads on axes
        this.ctx.fillStyle = '#000000';
        this.ctx.beginPath();
        this.ctx.moveTo(x - width / 2, y - height / 2);
        this.ctx.lineTo(x - width / 2 - 5, y - height / 2 + 10);
        this.ctx.lineTo(x - width / 2 + 5, y - height / 2 + 10);
        this.ctx.closePath();
        this.ctx.fill();
        this.ctx.beginPath();
        this.ctx.moveTo(x + width / 2, y + height / 2);
        this.ctx.lineTo(x + width / 2 - 10, y + height / 2 - 5);
        this.ctx.lineTo(x + width / 2 - 10, y + height / 2 + 5);
        this.ctx.closePath();
        this.ctx.fill();

        // Axis labels
        this.ctx.fillStyle = '#000000';
        this.ctx.font = 'bold 13px Arial';
        this.ctx.textAlign = 'center';
        this.ctx.save();
        this.ctx.translate(x - width / 2 - 40, y);
        this.ctx.rotate(-Math.PI / 2);
        this.ctx.fillText('Temperature (°C)', 0, 0);
        this.ctx.restore();
        this.ctx.fillText('Time / Heat Added', x, y + height / 2 + 30);

        // Curve segments
        const isHeating = type !== 'cooling_curve';

        const segs = isHeating ? [
            // [startT_frac, endT_frac, startX_frac, endX_frac, phase]
            [0.05, 0.35, 0.0, 0.18, 'Solid'],
            [0.35, 0.35, 0.18, 0.32, 'Melting'],
            [0.35, 0.65, 0.32, 0.60, 'Liquid'],
            [0.65, 0.65, 0.60, 0.74, 'Boiling'],
            [0.65, 0.95, 0.74, 1.00, 'Gas']
        ] : [
            [0.95, 0.65, 0.0, 0.18, 'Gas'],
            [0.65, 0.65, 0.18, 0.32, 'Condensing'],
            [0.65, 0.35, 0.32, 0.60, 'Liquid'],
            [0.35, 0.35, 0.60, 0.74, 'Freezing'],
            [0.35, 0.05, 0.74, 1.00, 'Solid']
        ];

        const toCanvasX = f => x - width / 2 + f * width * 0.95;
        const toCanvasY = f => y + height / 2 - f * height * 0.9;

        // Draw curve
        this.ctx.strokeStyle = '#000000';
        this.ctx.lineWidth = 3;
        this.ctx.beginPath();
        segs.forEach((seg, i) => {
            const cx1 = toCanvasX(seg[2]), cy1 = toCanvasY(seg[0]);
            const cx2 = toCanvasX(seg[3]), cy2 = toCanvasY(seg[1]);
            if (i === 0) this.ctx.moveTo(cx1, cy1);
            this.ctx.lineTo(cx2, cy2);
        });
        this.ctx.stroke();

        // Phase labels and plateau highlights
        segs.forEach(seg => {
            const cx1 = toCanvasX(seg[2]), cy1 = toCanvasY(seg[0]);
            const cx2 = toCanvasX(seg[3]), cy2 = toCanvasY(seg[1]);
            const isPlat = Math.abs(cy1 - cy2) < 2;
            const midX = (cx1 + cx2) / 2;
            const midY = (cy1 + cy2) / 2;

            if (isPlat && options.showPlateaus) {
                this.ctx.fillStyle = 'rgba(0,0,0,0.07)';
                this.ctx.fillRect(cx1, cy1 - 12, cx2 - cx1, 24);
                this.ctx.strokeStyle = '#555555';
                this.ctx.lineWidth = 1;
                this.ctx.setLineDash([4, 3]);
                this.ctx.beginPath();
                this.ctx.moveTo(x - width / 2, midY);
                this.ctx.lineTo(cx1, midY);
                this.ctx.stroke();
                this.ctx.setLineDash([]);
                this.ctx.fillStyle = '#000000';
                this.ctx.font = '11px Arial';
                this.ctx.textAlign = 'right';
                this.ctx.textBaseline = 'middle';
                const tempLabel = seg[0] > 0.6 ? (substance === 'water' ? '100°C' : 'Boiling Pt') : (substance === 'water' ? '0°C' : 'Melting Pt');
                this.ctx.fillText(tempLabel, x - width / 2 - 5, midY);
            }

            if (options.showPhases) {
                this.ctx.fillStyle = '#000000';
                this.ctx.font = 'bold 12px Arial';
                this.ctx.textAlign = 'center';
                this.ctx.textBaseline = isPlat ? 'bottom' : 'top';
                this.ctx.fillText(seg[4], midX, isPlat ? midY - 14 : midY - (isHeating ? 20 : -20));
            }
        });
    }

    renderIntermolecularForces(diagram, x, y, width, height, options) {
        const { forces } = diagram;
        const forceHeight = height / forces.length;

        const forceData = {
            london: { name: 'London Dispersion Forces', strength: 'Weakest', desc: 'Temporary induced dipoles', example: 'CH₄, I₂, noble gases' },
            dipole: { name: 'Dipole-Dipole Forces', strength: 'Medium', desc: 'Permanent dipole attraction', example: 'HCl, CH₃Cl, SO₂' },
            hydrogen: { name: 'Hydrogen Bonding', strength: 'Strongest IMF', desc: 'H bonded to N, O, or F', example: 'H₂O, NH₃, HF, alcohols' }
        };

        forces.forEach((force, index) => {
            const data = forceData[force] || { name: force, strength: '', desc: '', example: '' };
            const fy = y - height / 2 + index * forceHeight;
            const fh = forceHeight - 8;

            // Row
            this.ctx.fillStyle = index % 2 === 0 ? '#f5f5f5' : '#ffffff';
            this.ctx.fillRect(x, fy + 4, width, fh);
            this.ctx.strokeStyle = '#000000';
            this.ctx.lineWidth = 1.5;
            this.ctx.strokeRect(x, fy + 4, width, fh);

            const cy = fy + 4 + fh / 2;

            // Force name
            this.ctx.fillStyle = '#000000';
            this.ctx.font = 'bold 15px Arial';
            this.ctx.textAlign = 'left';
            this.ctx.textBaseline = 'middle';
            this.ctx.fillText(data.name, x + 15, cy - 16);

            this.ctx.font = '12px Arial';
            this.ctx.fillStyle = '#333333';
            this.ctx.fillText(data.desc, x + 15, cy + 2);

            if (options.showExamples) {
                this.ctx.font = '11px Arial';
                this.ctx.fillStyle = '#555555';
                this.ctx.fillText(`e.g. ${data.example}`, x + 15, cy + 18);
            }

            // Strength indicator (bar)
            if (options.showStrength) {
                const barX = x + width * 0.55;
                const barMaxW = width * 0.35;
                const strFraction = force === 'london' ? 0.25 : force === 'dipole' ? 0.55 : 0.95;
                this.ctx.fillStyle = '#eeeeee';
                this.ctx.fillRect(barX, cy - 8, barMaxW, 16);
                this.ctx.fillStyle = force === 'london' ? '#bbbbbb' : force === 'dipole' ? '#777777' : '#222222';
                this.ctx.fillRect(barX, cy - 8, barMaxW * strFraction, 16);
                this.ctx.strokeStyle = '#000000';
                this.ctx.lineWidth = 1.5;
                this.ctx.strokeRect(barX, cy - 8, barMaxW, 16);
                this.ctx.fillStyle = '#000000';
                this.ctx.font = 'bold 11px Arial';
                this.ctx.textAlign = 'left';
                this.ctx.fillText(data.strength, barX + barMaxW + 8, cy + 4);
            }
        });

        // Label
        this.ctx.fillStyle = '#000000';
        this.ctx.font = 'bold 13px Arial';
        this.ctx.textAlign = 'center';
        this.ctx.textBaseline = 'top';
        this.ctx.fillText('Strength: London < Dipole-Dipole < Hydrogen Bonding', x + width / 2, y + height / 2 + 10);
    }

    // ========== REACTIONS & ENERGY RENDERERS ==========

    renderEnergyProfile(diagram, x, y, width, height, options) {
        const { reactionType, activationEnergy, deltaH, type } = diagram;

        // Axes
        this.ctx.strokeStyle = '#000000';
        this.ctx.lineWidth = 2.5;
        this.ctx.beginPath();
        this.ctx.moveTo(x - width / 2, y - height / 2);
        this.ctx.lineTo(x - width / 2, y + height / 2);
        this.ctx.lineTo(x + width / 2, y + height / 2);
        this.ctx.stroke();

        this.ctx.fillStyle = '#000000';
        this.ctx.font = 'bold 13px Arial';
        this.ctx.textAlign = 'center';
        this.ctx.save();
        this.ctx.translate(x - width / 2 - 42, y);
        this.ctx.rotate(-Math.PI / 2);
        this.ctx.fillText('Potential Energy', 0, 0);
        this.ctx.restore();
        this.ctx.fillText('Reaction Progress →', x, y + height / 2 + 30);

        // Energy levels
        const isExo = reactionType !== 'endothermic';
        const reactantsY = isExo ? y + height * 0.12 : y + height * 0.22;
        const productsY = isExo ? y + height * 0.28 : y - height * 0.08;
        const transitionY = y - height * 0.3;

        const aX = x - width / 2 + 40;
        const bX = x - width / 10;
        const cX = x + width / 10;
        const dX = x + width / 2 - 40;

        // Reactants level
        this.ctx.strokeStyle = '#000000';
        this.ctx.lineWidth = 3;
        this.ctx.beginPath();
        this.ctx.moveTo(aX, reactantsY);
        this.ctx.lineTo(bX, reactantsY);
        this.ctx.stroke();

        // Curve up to transition state then down to products
        this.ctx.lineWidth = 3;
        this.ctx.beginPath();
        this.ctx.moveTo(bX, reactantsY);
        this.ctx.bezierCurveTo(bX + (cX - bX) * 0.4, reactantsY, bX + (cX - bX) * 0.5, transitionY, (bX + cX) / 2, transitionY);
        this.ctx.bezierCurveTo(cX - (cX - bX) * 0.5, transitionY, cX, productsY, cX, productsY);
        this.ctx.stroke();

        // Products level
        this.ctx.beginPath();
        this.ctx.moveTo(cX, productsY);
        this.ctx.lineTo(dX, productsY);
        this.ctx.stroke();

        // Labels
        this.ctx.fillStyle = '#000000';
        this.ctx.font = 'bold 13px Arial';
        this.ctx.textAlign = 'center';
        this.ctx.fillText('Reactants', (aX + bX) / 2, reactantsY + 20);
        this.ctx.fillText('Products', (cX + dX) / 2, productsY + 20);

        // Transition state
        this.ctx.beginPath();
        this.ctx.arc((bX + cX) / 2, transitionY, 5, 0, Math.PI * 2);
        this.ctx.fillStyle = '#555555';
        this.ctx.fill();
        this.ctx.font = '12px Arial';
        this.ctx.fillStyle = '#000000';
        this.ctx.fillText('Transition State ‡', (bX + cX) / 2, transitionY - 16);

        // Activation energy arrow
        if (options.showActivationEnergy) {
            const ax = x - width / 4;
            this.ctx.strokeStyle = '#000000';
            this.ctx.fillStyle = '#000000';
            this.ctx.lineWidth = 1.5;
            this.ctx.setLineDash([5, 3]);
            this.ctx.beginPath();
            this.ctx.moveTo(ax, reactantsY);
            this.ctx.lineTo(ax, transitionY);
            this.ctx.stroke();
            this.ctx.setLineDash([]);
            this.ctx.font = 'bold 12px Arial';
            this.ctx.textAlign = 'right';
            this.ctx.fillText('Eₐ', ax - 5, (reactantsY + transitionY) / 2 + 4);
        }

        // ΔH arrow
        if (options.showDeltaH) {
            const dhX = x + width / 2 - 60;
            this.ctx.strokeStyle = '#000000';
            this.ctx.fillStyle = '#000000';
            this.ctx.lineWidth = 1.5;
            this.ctx.setLineDash([5, 3]);
            this.ctx.beginPath();
            this.ctx.moveTo(dhX, reactantsY);
            this.ctx.lineTo(dhX, productsY);
            this.ctx.stroke();
            this.ctx.setLineDash([]);
            const sign = isExo ? '−' : '+';
            this.ctx.font = 'bold 12px Arial';
            this.ctx.textAlign = 'left';
            this.ctx.fillText(`ΔH ${sign}`, dhX + 5, (reactantsY + productsY) / 2 + 4);
            this.ctx.font = '11px Arial';
            this.ctx.fillText(isExo ? 'Exothermic' : 'Endothermic', dhX + 5, (reactantsY + productsY) / 2 + 20);
        }

        // Catalyst pathway
        if (type === 'catalyst_effect') {
            const catTransY = y - height * 0.12;
            this.ctx.strokeStyle = '#333333';
            this.ctx.lineWidth = 2;
            this.ctx.setLineDash([5, 4]);
            this.ctx.beginPath();
            this.ctx.moveTo(bX, reactantsY);
            this.ctx.bezierCurveTo(bX + (cX - bX) * 0.4, reactantsY, bX + (cX - bX) * 0.5, catTransY, (bX + cX) / 2, catTransY);
            this.ctx.bezierCurveTo(cX - (cX - bX) * 0.5, catTransY, cX, productsY, cX, productsY);
            this.ctx.stroke();
            this.ctx.setLineDash([]);
            this.ctx.font = '12px Arial';
            this.ctx.textAlign = 'center';
            this.ctx.fillText('Catalysed pathway (lower Eₐ)', (bX + cX) / 2, catTransY - 16);
        }
    }

    renderCollisionTheory(diagram, x, y, width, height, options) {
        const halfW = width / 2;

        // Left: unsuccessful
        const lx = x - halfW / 2;
        this.ctx.fillStyle = '#000000';
        this.ctx.font = 'bold 14px Arial';
        this.ctx.textAlign = 'center';
        this.ctx.fillText('Unsuccessful Collision', lx, y - height / 2 + 28);

        this.drawAtomBW('A', lx - 55, y, 24);
        this.drawAtomBW('B', lx + 55, y, 24);

        // Arrows
        this.ctx.strokeStyle = '#000000';
        this.ctx.fillStyle = '#000000';
        this.ctx.lineWidth = 2;
        this.drawMotionArrowBW(lx - 30, y, 20, 0);
        this.drawMotionArrowBW(lx + 30, y, 20, Math.PI);

        // X mark
        this.ctx.strokeStyle = '#000000';
        this.ctx.lineWidth = 3;
        for (const [dx, dy] of [[-8, -8], [8, -8]]) {
            this.ctx.beginPath();
            this.ctx.moveTo(lx + dx, y + 65);
            this.ctx.lineTo(lx - dx, y + 82);
            this.ctx.stroke();
        }
        this.ctx.font = '12px Arial';
        this.ctx.fillStyle = '#333333';
        this.ctx.fillText('Wrong orientation or E < Eₐ', lx, y + 100);

        // Right: successful
        const rx = x + halfW / 2;
        this.ctx.fillStyle = '#000000';
        this.ctx.font = 'bold 14px Arial';
        this.ctx.fillText('Successful Collision', rx, y - height / 2 + 28);

        this.drawAtomBW('A', rx - 55, y, 24);
        this.drawAtomBW('B', rx + 55, y, 24);

        // Faster arrows
        this.ctx.lineWidth = 3;
        this.drawMotionArrowBW(rx - 30, y, 28, 0);
        this.drawMotionArrowBW(rx + 30, y, 28, Math.PI);

        // Check mark
        this.ctx.strokeStyle = '#000000';
        this.ctx.lineWidth = 3;
        this.ctx.lineCap = 'round';
        this.ctx.beginPath();
        this.ctx.moveTo(rx - 14, y + 70);
        this.ctx.lineTo(rx - 4, y + 82);
        this.ctx.lineTo(rx + 18, y + 58);
        this.ctx.stroke();
        this.ctx.lineCap = 'butt';

        this.ctx.font = '12px Arial';
        this.ctx.fillStyle = '#333333';
        this.ctx.fillText('Correct orientation & E ≥ Eₐ', rx, y + 100);

        // Product
        if (options.showEnergy) {
            this.drawAtomBW('AB', rx, y - 55, 28);
            this.ctx.font = '11px Arial';
            this.ctx.fillText('Product formed', rx, y - 90);
        }

        // Divider
        this.ctx.strokeStyle = '#888888';
        this.ctx.lineWidth = 1.5;
        this.ctx.setLineDash([8, 5]);
        this.ctx.beginPath();
        this.ctx.moveTo(x, y - height / 2 + 50);
        this.ctx.lineTo(x, y + height / 2 - 50);
        this.ctx.stroke();
        this.ctx.setLineDash([]);

        // Requirements box
        this.ctx.strokeStyle = '#000000';
        this.ctx.lineWidth = 1.5;
        this.ctx.strokeRect(x - halfW + 10, y + height / 2 - 52, halfW * 2 - 20, 44);
        this.ctx.fillStyle = '#f5f5f5';
        this.ctx.fillRect(x - halfW + 11, y + height / 2 - 51, halfW * 2 - 22, 42);
        this.ctx.fillStyle = '#000000';
        this.ctx.font = 'bold 13px Arial';
        this.ctx.textAlign = 'center';
        this.ctx.fillText('Conditions for Reaction: (1) Sufficient energy  AND  (2) Correct orientation', x, y + height / 2 - 28);
    }

    drawMotionArrowBW(x, y, length, angle) {
        this.ctx.save();
        this.ctx.translate(x, y);
        this.ctx.rotate(angle);
        this.ctx.strokeStyle = '#000000';
        this.ctx.fillStyle = '#000000';
        this.ctx.beginPath();
        this.ctx.moveTo(0, 0);
        this.ctx.lineTo(length, 0);
        this.ctx.stroke();
        this.ctx.beginPath();
        this.ctx.moveTo(length, 0);
        this.ctx.lineTo(length - 6, -4);
        this.ctx.lineTo(length - 6, 4);
        this.ctx.closePath();
        this.ctx.fill();
        this.ctx.restore();
    }

    renderEnthalpyDiagram(diagram, x, y, width, height, options) {
        const { reactionType, deltaH } = diagram;
        const isEndo = reactionType === 'endothermic';
        const levelWidth = width * 0.45;

        const reactantsY = isEndo ? y + height * 0.25 : y - height * 0.05;
        const productsY = isEndo ? y - height * 0.15 : y + height * 0.25;

        // Reactants level
        this.ctx.strokeStyle = '#000000';
        this.ctx.lineWidth = 3.5;
        this.ctx.beginPath();
        this.ctx.moveTo(x - levelWidth * 1.1, reactantsY);
        this.ctx.lineTo(x - 10, reactantsY);
        this.ctx.stroke();

        // Products level
        this.ctx.beginPath();
        this.ctx.moveTo(x + 10, productsY);
        this.ctx.lineTo(x + levelWidth * 1.1, productsY);
        this.ctx.stroke();

        this.ctx.fillStyle = '#000000';
        this.ctx.font = 'bold 15px Arial';
        this.ctx.textAlign = 'center';
        this.ctx.textBaseline = 'middle';
        this.ctx.fillText('Reactants', x - levelWidth * 0.55, reactantsY + (isEndo ? 20 : -20));
        this.ctx.fillText('Products', x + levelWidth * 0.55, productsY + (isEndo ? -20 : 20));

        // ΔH arrow
        if (options.showDeltaH) {
            const arrowX = x;
            this.ctx.strokeStyle = '#000000';
            this.ctx.fillStyle = '#000000';
            this.ctx.lineWidth = 2.5;
            this.ctx.beginPath();
            this.ctx.moveTo(arrowX, reactantsY);
            this.ctx.lineTo(arrowX, productsY);
            this.ctx.stroke();

            const arrowAtY = isEndo ? productsY : reactantsY;
            const dir = isEndo ? -1 : 1;
            this.ctx.beginPath();
            this.ctx.moveTo(arrowX, arrowAtY);
            this.ctx.lineTo(arrowX - 6, arrowAtY + dir * 12);
            this.ctx.lineTo(arrowX + 6, arrowAtY + dir * 12);
            this.ctx.closePath();
            this.ctx.fill();

            const sign = isEndo ? '+' : '−';
            this.ctx.font = 'bold 14px Arial';
            this.ctx.textAlign = 'left';
            this.ctx.fillText(`ΔH ${sign}`, arrowX + 12, (reactantsY + productsY) / 2 + 4);
            this.ctx.font = '12px Arial';
            this.ctx.fillText(isEndo ? '(Endothermic)' : '(Exothermic)', arrowX + 12, (reactantsY + productsY) / 2 + 22);
        }

        // Y axis
        if (options.showArrows) {
            const axX = x - levelWidth * 1.2;
            this.ctx.strokeStyle = '#555555';
            this.ctx.lineWidth = 1.5;
            this.ctx.beginPath();
            this.ctx.moveTo(axX, y + height / 2 - 20);
            this.ctx.lineTo(axX, y - height / 2 + 20);
            this.ctx.stroke();
            this.ctx.fillStyle = '#555555';
            this.ctx.beginPath();
            this.ctx.moveTo(axX, y - height / 2 + 20);
            this.ctx.lineTo(axX - 5, y - height / 2 + 32);
            this.ctx.lineTo(axX + 5, y - height / 2 + 32);
            this.ctx.closePath();
            this.ctx.fill();

            this.ctx.font = '12px Arial';
            this.ctx.save();
            this.ctx.translate(axX - 18, y);
            this.ctx.rotate(-Math.PI / 2);
            this.ctx.textAlign = 'center';
            this.ctx.fillText('Enthalpy H', 0, 0);
            this.ctx.restore();
        }

        if (deltaH) {
            this.ctx.fillStyle = '#000000';
            this.ctx.font = '14px Arial';
            this.ctx.textAlign = 'center';
            this.ctx.fillText(`ΔH = ${deltaH} kJ mol⁻¹`, x, y + height / 2 - 15);
        }
    }

    // ========== SOLUTIONS & ACIDS RENDERERS ==========

    renderDissociation(diagram, x, y, size, options) {
        const { compound } = diagram;

        // Title sections
        this.ctx.fillStyle = '#000000';
        this.ctx.font = 'bold 14px Arial';
        this.ctx.textAlign = 'center';
        this.ctx.fillText('Solid Crystal', x - size / 2, y - size / 2 - 20);
        this.ctx.fillText('Aqueous Solution', x + size / 2, y - size / 2 - 20);

        // Crystal lattice
        const bx = x - size / 2;
        const spacing = 28;
        for (let r = 0; r < 3; r++) {
            for (let c = 0; c < 3; c++) {
                const isNa = (r + c) % 2 === 0;
                const px = bx - spacing + c * spacing;
                const py = y - spacing + r * spacing;
                this.ctx.beginPath();
                this.ctx.arc(px, py, 12, 0, Math.PI * 2);
                this.ctx.fillStyle = isNa ? '#444444' : '#aaaaaa';
                this.ctx.fill();
                this.ctx.strokeStyle = '#000000';
                this.ctx.lineWidth = 1.5;
                this.ctx.stroke();
                this.ctx.fillStyle = '#ffffff';
                this.ctx.font = 'bold 9px Arial';
                this.ctx.textAlign = 'center';
                this.ctx.textBaseline = 'middle';
                this.ctx.fillText(isNa ? 'Na⁺' : 'Cl⁻', px, py);
            }
        }

        // Arrow
        this.ctx.strokeStyle = '#000000';
        this.ctx.fillStyle = '#000000';
        this.ctx.lineWidth = 2.5;
        const arrowY = y;
        this.ctx.beginPath();
        this.ctx.moveTo(bx + 55, arrowY);
        this.ctx.lineTo(bx + 115, arrowY);
        this.ctx.stroke();
        this.ctx.beginPath();
        this.ctx.moveTo(bx + 115, arrowY);
        this.ctx.lineTo(bx + 108, arrowY - 5);
        this.ctx.lineTo(bx + 108, arrowY + 5);
        this.ctx.closePath();
        this.ctx.fill();
        this.ctx.font = '12px Arial';
        this.ctx.fillText('H₂O', bx + 85, arrowY - 12);

        // Hydrated ions
        if (options.showWater) {
            const naX = x + size / 2 - 60;
            const clX = x + size / 2 + 60;

            for (const [ionX, label, fill] of [[naX, 'Na⁺', '#333333'], [clX, 'Cl⁻', '#888888']]) {
                // Central ion
                this.ctx.beginPath();
                this.ctx.arc(ionX, y, 20, 0, Math.PI * 2);
                this.ctx.fillStyle = fill;
                this.ctx.fill();
                this.ctx.strokeStyle = '#000000';
                this.ctx.lineWidth = 2;
                this.ctx.stroke();
                this.ctx.fillStyle = '#ffffff';
                this.ctx.font = 'bold 12px Arial';
                this.ctx.textAlign = 'center';
                this.ctx.textBaseline = 'middle';
                this.ctx.fillText(label, ionX, y);

                // Water molecules around
                for (let i = 0; i < 4; i++) {
                    const ang = (i / 4) * Math.PI * 2;
                    const wx = ionX + Math.cos(ang) * 42;
                    const wy = y + Math.sin(ang) * 42;
                    this.ctx.beginPath();
                    this.ctx.arc(wx, wy, 12, 0, Math.PI * 2);
                    this.ctx.fillStyle = '#eeeeee';
                    this.ctx.fill();
                    this.ctx.strokeStyle = '#000000';
                    this.ctx.lineWidth = 1.5;
                    this.ctx.setLineDash([2, 2]);
                    this.ctx.stroke();
                    this.ctx.setLineDash([]);
                    this.ctx.fillStyle = '#000000';
                    this.ctx.font = '9px Arial';
                    this.ctx.fillText('H₂O', wx, wy);
                }
            }
        }

        if (options.showIons) {
            this.ctx.fillStyle = '#000000';
            this.ctx.font = '14px Arial';
            this.ctx.textAlign = 'center';
            this.ctx.textBaseline = 'top';
            this.ctx.fillText('NaCl(s)  →  Na⁺(aq)  +  Cl⁻(aq)', x, y + size / 2 + 15);
        }
    }

    renderIonHydration(diagram, x, y, size, options) {
        const { ion } = diagram;
        const isPositive = ion.includes('+');

        // Central ion
        this.ctx.beginPath();
        this.ctx.arc(x, y, 28, 0, Math.PI * 2);
        this.ctx.fillStyle = isPositive ? '#333333' : '#888888';
        this.ctx.fill();
        this.ctx.strokeStyle = '#000000';
        this.ctx.lineWidth = 3;
        this.ctx.stroke();
        this.ctx.fillStyle = '#ffffff';
        this.ctx.font = 'bold 15px Arial';
        this.ctx.textAlign = 'center';
        this.ctx.textBaseline = 'middle';
        this.ctx.fillText(ion, x, y);

        // Water molecules
        const wCount = 6;
        const wDist = size * 0.32;

        for (let i = 0; i < wCount; i++) {
            const angle = (i / wCount) * Math.PI * 2;
            const wx = x + Math.cos(angle) * wDist;
            const wy = y + Math.sin(angle) * wDist;

            // Dashed line (H-bond / electrostatic)
            if (options.showWaterDipoles) {
                this.ctx.strokeStyle = '#555555';
                this.ctx.lineWidth = 1.5;
                this.ctx.setLineDash([4, 3]);
                this.ctx.beginPath();
                this.ctx.moveTo(x + Math.cos(angle) * 30, y + Math.sin(angle) * 30);
                this.ctx.lineTo(wx - Math.cos(angle) * 18, wy - Math.sin(angle) * 18);
                this.ctx.stroke();
                this.ctx.setLineDash([]);
            }

            // Water O
            this.ctx.beginPath();
            this.ctx.arc(wx, wy, 15, 0, Math.PI * 2);
            this.ctx.fillStyle = '#eeeeee';
            this.ctx.fill();
            this.ctx.strokeStyle = '#000000';
            this.ctx.lineWidth = 2;
            this.ctx.stroke();
            this.ctx.fillStyle = '#000000';
            this.ctx.font = '10px Arial';
            this.ctx.textAlign = 'center';
            this.ctx.textBaseline = 'middle';
            this.ctx.fillText('H₂O', wx, wy);

            // δ labels
            if (options.showWaterDipoles) {
                const nearSide = isPositive ? 'O' : 'H';
                this.ctx.font = '9px Arial';
                this.ctx.fillText(isPositive ? 'δ−→' : 'δ+→', wx + Math.cos(angle + Math.PI) * 22, wy + Math.sin(angle + Math.PI) * 22);
            }
        }

        // Hydration shell ring
        this.ctx.strokeStyle = '#555555';
        this.ctx.lineWidth = 1.5;
        this.ctx.setLineDash([6, 4]);
        this.ctx.beginPath();
        this.ctx.arc(x, y, wDist + 22, 0, Math.PI * 2);
        this.ctx.stroke();
        this.ctx.setLineDash([]);

        this.ctx.fillStyle = '#000000';
        this.ctx.font = 'bold 12px Arial';
        this.ctx.textAlign = 'center';
        this.ctx.textBaseline = 'top';
        this.ctx.fillText('Hydration Shell', x, y + wDist + 30);
        this.ctx.font = '11px Arial';
        this.ctx.fillText(isPositive ? 'O (δ−) oriented toward cation' : 'H (δ+) oriented toward anion', x, y + wDist + 46);
    }

    renderPHScale(diagram, x, y, width, height, options) {
        const { range } = diagram;
        const scaleW = width * 0.9;
        const scaleH = height * 0.45;
        const numVals = range[1] - range[0] + 1;
        const cellW = scaleW / numVals;

        // Draw gradient bar using grayscale
        for (let i = range[0]; i <= range[1]; i++) {
            const cx = x - scaleW / 2 + (i - range[0]) * cellW;
            // Acid: dark, neutral: medium, base: light
            const shade = Math.floor(40 + (i / 14) * 190);
            this.ctx.fillStyle = `rgb(${shade},${shade},${shade})`;
            this.ctx.fillRect(cx, y - scaleH / 2, cellW, scaleH);
            this.ctx.strokeStyle = '#ffffff';
            this.ctx.lineWidth = 1;
            this.ctx.strokeRect(cx, y - scaleH / 2, cellW, scaleH);

            // pH number
            this.ctx.fillStyle = shade > 140 ? '#000000' : '#ffffff';
            this.ctx.font = 'bold 14px Arial';
            this.ctx.textAlign = 'center';
            this.ctx.textBaseline = 'middle';
            this.ctx.fillText(i.toString(), cx + cellW / 2, y);
        }

        // Outer border
        this.ctx.strokeStyle = '#000000';
        this.ctx.lineWidth = 2;
        this.ctx.strokeRect(x - scaleW / 2, y - scaleH / 2, scaleW, scaleH);

        // Section labels
        this.ctx.fillStyle = '#000000';
        this.ctx.font = 'bold 13px Arial';
        this.ctx.textAlign = 'center';
        this.ctx.textBaseline = 'top';
        const labelY = y + scaleH / 2 + 8;
        this.ctx.fillText('ACIDIC (pH < 7)', x - scaleW / 3.5, labelY);
        this.ctx.fillText('NEUTRAL (pH = 7)', x, labelY);
        this.ctx.fillText('ALKALINE (pH > 7)', x + scaleW / 3.5, labelY);

        // [H+] and [OH-] labels
        this.ctx.font = '12px Arial';
        this.ctx.textBaseline = 'bottom';
        this.ctx.fillText('[H⁺] increases ←', x - scaleW / 4, y - scaleH / 2 - 5);
        this.ctx.fillText('→ [OH⁻] increases', x + scaleW / 4, y - scaleH / 2 - 5);

        // Examples
        if (options.showExamples) {
            const examples = [
                { pH: 1, name: 'HCl / Battery acid' },
                { pH: 4, name: 'Tomato juice' },
                { pH: 7, name: 'Pure water' },
                { pH: 10, name: 'Antacid' },
                { pH: 13, name: 'NaOH solution' }
            ];
            examples.forEach((ex, i) => {
                const exX = x - scaleW / 2 + (ex.pH - range[0] + 0.5) * cellW;
                const above = i % 2 === 0;
                const baseY = above ? y - scaleH / 2 - 8 : y + scaleH / 2 + labelY - y + 10;
                this.ctx.fillStyle = '#333333';
                this.ctx.font = '10px Arial';
                this.ctx.textAlign = 'center';
                this.ctx.textBaseline = above ? 'bottom' : 'top';
                this.ctx.fillText(ex.name, exX, above ? y - scaleH / 2 - 30 : y + scaleH / 2 + 32);
                this.ctx.strokeStyle = '#888888';
                this.ctx.lineWidth = 1;
                this.ctx.setLineDash([2, 2]);
                this.ctx.beginPath();
                this.ctx.moveTo(exX, above ? y - scaleH / 2 - 28 : y + scaleH / 2 + 30);
                this.ctx.lineTo(exX, above ? y - scaleH / 2 : y + scaleH / 2);
                this.ctx.stroke();
                this.ctx.setLineDash([]);
            });
        }
    }

    renderTitrationCurve(diagram, x, y, width, height, options) {
        const { titration } = diagram;

        // Axes
        this.ctx.strokeStyle = '#000000';
        this.ctx.lineWidth = 2.5;
        this.ctx.beginPath();
        this.ctx.moveTo(x - width / 2, y - height / 2);
        this.ctx.lineTo(x - width / 2, y + height / 2);
        this.ctx.lineTo(x + width / 2, y + height / 2);
        this.ctx.stroke();

        this.ctx.fillStyle = '#000000';
        this.ctx.font = 'bold 13px Arial';
        this.ctx.textAlign = 'center';
        this.ctx.save();
        this.ctx.translate(x - width / 2 - 38, y);
        this.ctx.rotate(-Math.PI / 2);
        this.ctx.fillText('pH', 0, 0);
        this.ctx.restore();
        this.ctx.fillText('Volume of Base Added (mL)', x, y + height / 2 + 30);

        // Y axis pH scale
        for (let pH = 0; pH <= 14; pH += 2) {
            const py = y + height / 2 - (pH / 14) * height * 0.92;
            this.ctx.fillStyle = '#333333';
            this.ctx.font = '11px Arial';
            this.ctx.textAlign = 'right';
            this.ctx.textBaseline = 'middle';
            this.ctx.fillText(pH.toString(), x - width / 2 - 8, py);
            this.ctx.strokeStyle = '#dddddd';
            this.ctx.lineWidth = 1;
            this.ctx.beginPath();
            this.ctx.moveTo(x - width / 2, py);
            this.ctx.lineTo(x + width / 2, py);
            this.ctx.stroke();
        }

        // Generate S-curve points
        const pts = [];
        for (let vol = 0; vol <= 50; vol++) {
            let pH;
            if (vol < 24) pH = 1 + vol * 0.1;
            else if (vol < 26) pH = 3 + (vol - 24) * 4;
            else pH = 11 + (vol - 26) * 0.1;
            pH = Math.min(14, Math.max(0, pH));
            pts.push([
                x - width / 2 + (vol / 50) * width * 0.92,
                y + height / 2 - (pH / 14) * height * 0.92,
                pH
            ]);
        }

        // Draw curve
        this.ctx.strokeStyle = '#000000';
        this.ctx.lineWidth = 3;
        this.ctx.beginPath();
        pts.forEach(([px, py], i) => i === 0 ? this.ctx.moveTo(px, py) : this.ctx.lineTo(px, py));
        this.ctx.stroke();

        // Equivalence point
        if (options.showEquivalencePoint) {
            const ep = pts[25];
            this.ctx.fillStyle = '#000000';
            this.ctx.beginPath();
            this.ctx.arc(ep[0], ep[1], 6, 0, Math.PI * 2);
            this.ctx.fill();
            this.ctx.strokeStyle = '#555555';
            this.ctx.lineWidth = 1.5;
            this.ctx.setLineDash([4, 3]);
            this.ctx.beginPath();
            this.ctx.moveTo(ep[0], y + height / 2);
            this.ctx.lineTo(ep[0], ep[1]);
            this.ctx.moveTo(x - width / 2, ep[1]);
            this.ctx.lineTo(ep[0], ep[1]);
            this.ctx.stroke();
            this.ctx.setLineDash([]);
            this.ctx.fillStyle = '#000000';
            this.ctx.font = 'bold 12px Arial';
            this.ctx.textAlign = 'left';
            this.ctx.fillText(`Equivalence Point (pH ≈ ${ep[2].toFixed(1)})`, ep[0] + 10, ep[1] - 5);
        }
    }

    renderSolubilityCurve(diagram, x, y, width, height, options) {
        const { compounds } = diagram;

        // Axes
        this.ctx.strokeStyle = '#000000';
        this.ctx.lineWidth = 2.5;
        this.ctx.beginPath();
        this.ctx.moveTo(x - width / 2, y - height / 2);
        this.ctx.lineTo(x - width / 2, y + height / 2);
        this.ctx.lineTo(x + width / 2, y + height / 2);
        this.ctx.stroke();

        this.ctx.fillStyle = '#000000';
        this.ctx.font = 'bold 13px Arial';
        this.ctx.textAlign = 'center';
        this.ctx.save();
        this.ctx.translate(x - width / 2 - 48, y);
        this.ctx.rotate(-Math.PI / 2);
        this.ctx.fillText('Solubility (g / 100 g H₂O)', 0, 0);
        this.ctx.restore();
        this.ctx.fillText('Temperature (°C)', x, y + height / 2 + 30);

        // Grid
        for (let t = 0; t <= 100; t += 20) {
            const gx = x - width / 2 + (t / 100) * width * 0.92;
            this.ctx.strokeStyle = '#eeeeee';
            this.ctx.lineWidth = 1;
            this.ctx.beginPath();
            this.ctx.moveTo(gx, y - height / 2);
            this.ctx.lineTo(gx, y + height / 2);
            this.ctx.stroke();
            this.ctx.fillStyle = '#555555';
            this.ctx.font = '11px Arial';
            this.ctx.textAlign = 'center';
            this.ctx.fillText(t, gx, y + height / 2 + 15);
        }

        // Curves with different dash patterns
        const styles = [
            { dash: [], label: 'KNO₃ (steep)' },
            { dash: [6, 4], label: 'NaCl (flat)' },
            { dash: [2, 3], label: 'Ce₂(SO₄)₃ (inverse)' }
        ];

        const curveTypes = { 'KNO3': 'steep', 'NaCl': 'flat', 'Ce2(SO4)3': 'inverse' };

        compounds.forEach((compound, idx) => {
            const curveType = curveTypes[compound] || 'steep';
            const pts = [];
            for (let t = 0; t <= 100; t += 5) {
                let s;
                if (curveType === 'steep') s = 12 + t * 1.8;
                else if (curveType === 'flat') s = 35 + t * 0.08;
                else s = 55 - t * 0.45;
                pts.push([
                    x - width / 2 + (t / 100) * width * 0.92,
                    y + height / 2 - (s / 200) * height * 0.9
                ]);
            }

            this.ctx.strokeStyle = '#000000';
            this.ctx.lineWidth = 2.5;
            this.ctx.setLineDash(styles[idx % 3].dash);
            this.ctx.beginPath();
            pts.forEach(([px, py], i) => i === 0 ? this.ctx.moveTo(px, py) : this.ctx.lineTo(px, py));
            this.ctx.stroke();
            this.ctx.setLineDash([]);

            // Label
            if (options.showLabels) {
                const lp = pts[Math.floor(pts.length * 0.65)];
                this.ctx.fillStyle = '#000000';
                this.ctx.font = '12px Arial';
                this.ctx.textAlign = 'left';
                this.ctx.fillText(compound, lp[0] + 8, lp[1] - 5);
            }
        });

        // Legend
        const lx = x + width / 2 - 190;
        const ly = y - height / 2 + 10;
        this.ctx.strokeStyle = '#000000';
        this.ctx.lineWidth = 1.5;
        this.ctx.strokeRect(lx, ly, 180, compounds.length * 22 + 12);
        this.ctx.fillStyle = '#ffffff';
        this.ctx.fillRect(lx + 1, ly + 1, 178, compounds.length * 22 + 10);

        compounds.forEach((c, i) => {
            const ldy = ly + 16 + i * 22;
            this.ctx.strokeStyle = '#000000';
            this.ctx.lineWidth = 2.5;
            this.ctx.setLineDash(styles[i % 3].dash);
            this.ctx.beginPath();
            this.ctx.moveTo(lx + 10, ldy);
            this.ctx.lineTo(lx + 45, ldy);
            this.ctx.stroke();
            this.ctx.setLineDash([]);
            this.ctx.fillStyle = '#000000';
            this.ctx.font = '12px Arial';
            this.ctx.textAlign = 'left';
            this.ctx.fillText(c, lx + 52, ldy + 4);
        });
    }

    renderIndicatorChart(diagram, x, y, width, height, options) {
        const { indicators } = diagram;
        const rowH = height / indicators.length;

        const data = {
            phenolphthalein: { range: [8.2, 10.0], acidLabel: 'Colourless', baseLabel: 'Pink/Red', name: 'Phenolphthalein' },
            methylOrange: { range: [3.1, 4.4], acidLabel: 'Red', baseLabel: 'Yellow', name: 'Methyl Orange' },
            bromothymolBlue: { range: [6.0, 7.6], acidLabel: 'Yellow', baseLabel: 'Blue', name: 'Bromothymol Blue' }
        };

        indicators.forEach((ind, idx) => {
            const d = data[ind];
            if (!d) return;
            const ry = y - height / 2 + idx * rowH;
            const cy = ry + rowH / 2;

            this.ctx.fillStyle = idx % 2 === 0 ? '#f8f8f8' : '#ffffff';
            this.ctx.fillRect(x, ry + 4, width - 4, rowH - 8);
            this.ctx.strokeStyle = '#000000';
            this.ctx.lineWidth = 1.5;
            this.ctx.strokeRect(x, ry + 4, width - 4, rowH - 8);

            // Name
            this.ctx.fillStyle = '#000000';
            this.ctx.font = 'bold 14px Arial';
            this.ctx.textAlign = 'left';
            this.ctx.textBaseline = 'middle';
            this.ctx.fillText(d.name, x + 12, cy - 12);

            // pH range
            this.ctx.font = '12px Arial';
            this.ctx.fillText(`Transition: pH ${d.range[0]}–${d.range[1]}`, x + 12, cy + 8);

            // Acid colour swatch (hatched to indicate)
            if (options.showColorChange) {
                const sw = 30, sh = 20;
                const s1x = x + 280, s2x = x + 350;

                // Acid: light swatch
                this.ctx.fillStyle = '#eeeeee';
                this.ctx.fillRect(s1x, cy - sh / 2, sw, sh);
                this.ctx.strokeStyle = '#000000';
                this.ctx.lineWidth = 1.5;
                this.ctx.strokeRect(s1x, cy - sh / 2, sw, sh);
                this.ctx.font = '9px Arial';
                this.ctx.textAlign = 'center';
                this.ctx.fillStyle = '#000000';
                this.ctx.fillText(d.acidLabel, s1x + sw / 2, cy + sh / 2 + 10);

                // Arrow
                this.ctx.strokeStyle = '#000000';
                this.ctx.fillStyle = '#000000';
                this.ctx.lineWidth = 2;
                this.ctx.beginPath();
                this.ctx.moveTo(s1x + sw + 4, cy);
                this.ctx.lineTo(s2x - 4, cy);
                this.ctx.stroke();
                this.ctx.beginPath();
                this.ctx.moveTo(s2x - 4, cy);
                this.ctx.lineTo(s2x - 10, cy - 4);
                this.ctx.lineTo(s2x - 10, cy + 4);
                this.ctx.closePath();
                this.ctx.fill();

                // Base: dark swatch
                this.ctx.fillStyle = '#444444';
                this.ctx.fillRect(s2x, cy - sh / 2, sw, sh);
                this.ctx.strokeStyle = '#000000';
                this.ctx.lineWidth = 1.5;
                this.ctx.strokeRect(s2x, cy - sh / 2, sw, sh);
                this.ctx.fillStyle = '#ffffff';
                this.ctx.font = '9px Arial';
                this.ctx.fillText(d.baseLabel, s2x + sw / 2, cy + sh / 2 + 10);
            }

            // pH range bar
            if (options.showpHRange) {
                const barX = x + width - 220;
                const barW = 190;
                this.ctx.fillStyle = '#dddddd';
                this.ctx.fillRect(barX, cy - 8, barW, 16);
                const startF = d.range[0] / 14;
                const endF = d.range[1] / 14;
                this.ctx.fillStyle = '#555555';
                this.ctx.fillRect(barX + startF * barW, cy - 8, (endF - startF) * barW, 16);
                this.ctx.strokeStyle = '#000000';
                this.ctx.lineWidth = 1.5;
                this.ctx.strokeRect(barX, cy - 8, barW, 16);
                this.ctx.fillStyle = '#000000';
                this.ctx.font = '10px Arial';
                this.ctx.textAlign = 'left';
                this.ctx.fillText('0', barX, cy + 18);
                this.ctx.textAlign = 'right';
                this.ctx.fillText('14', barX + barW, cy + 18);
                this.ctx.textAlign = 'center';
                this.ctx.fillText('pH', barX + barW / 2, cy + 18);
            }
        });
    }

    // ========== ELECTROCHEMISTRY RENDERERS ==========

    renderElectrochemicalCell(diagram, x, y, width, height, options) {
        const { type, anode, cathode } = diagram;
        const isGalvanic = type === 'galvanic_cell';

        const bW = width * 0.35, bH = height * 0.58;
        const lx = x - width / 4, rx = x + width / 4;
        const beakerTop = y - bH / 2;
        const beakerBot = y + bH / 2;

        // Draw beaker outline (U-shape)
        const drawBeaker = (cx) => {
            this.ctx.strokeStyle = '#000000';
            this.ctx.lineWidth = 3;
            this.ctx.beginPath();
            this.ctx.moveTo(cx - bW / 2, beakerTop);
            this.ctx.lineTo(cx - bW / 2, beakerBot);
            this.ctx.lineTo(cx + bW / 2, beakerBot);
            this.ctx.lineTo(cx + bW / 2, beakerTop);
            this.ctx.stroke();
            // Solution fill indicator
            this.ctx.fillStyle = '#f0f0f0';
            this.ctx.fillRect(cx - bW / 2 + 4, beakerTop + 30, bW - 8, bH - 34);
        };

        drawBeaker(lx);
        drawBeaker(rx);

        // Electrodes
        const eW = 12, eH = bH * 0.75;
        const eTop = y - eH / 2;

        // Left electrode
        const leftEl = isGalvanic ? anode : cathode;
        this.ctx.fillStyle = '#555555';
        this.ctx.fillRect(lx - eW / 2, eTop, eW, eH);
        this.ctx.strokeStyle = '#000000';
        this.ctx.lineWidth = 2;
        this.ctx.strokeRect(lx - eW / 2, eTop, eW, eH);

        // Right electrode
        const rightEl = isGalvanic ? cathode : anode;
        this.ctx.fillStyle = '#888888';
        this.ctx.fillRect(rx - eW / 2, eTop, eW, eH);
        this.ctx.strokeStyle = '#000000';
        this.ctx.lineWidth = 2;
        this.ctx.strokeRect(rx - eW / 2, eTop, eW, eH);

        // Labels
        this.ctx.fillStyle = '#000000';
        this.ctx.font = 'bold 13px Arial';
        this.ctx.textAlign = 'center';
        this.ctx.textBaseline = 'bottom';
        this.ctx.fillText(isGalvanic ? `Anode (−)\n${leftEl}` : `Cathode (+)\n${leftEl}`, lx, beakerTop - 8);
        this.ctx.fillText(isGalvanic ? `Cathode (+)\n${rightEl}` : `Anode (−)\n${rightEl}`, rx, beakerTop - 8);

        this.ctx.font = '12px Arial';
        this.ctx.textBaseline = 'top';
        this.ctx.fillText(`${leftEl}SO₄(aq)`, lx, beakerBot + 8);
        this.ctx.fillText(`${rightEl}SO₄(aq)`, rx, beakerBot + 8);

        // Wire
        const wireY = beakerTop - 55;
        this.ctx.strokeStyle = '#000000';
        this.ctx.lineWidth = 3;
        this.ctx.beginPath();
        this.ctx.moveTo(lx, eTop);
        this.ctx.lineTo(lx, wireY);
        this.ctx.lineTo(rx, wireY);
        this.ctx.lineTo(rx, eTop);
        this.ctx.stroke();

        // Device (voltmeter or power source)
        const devR = 22;
        this.ctx.beginPath();
        this.ctx.arc(x, wireY, devR, 0, Math.PI * 2);
        this.ctx.fillStyle = '#ffffff';
        this.ctx.fill();
        this.ctx.strokeStyle = '#000000';
        this.ctx.lineWidth = 2.5;
        this.ctx.stroke();
        this.ctx.fillStyle = '#000000';
        this.ctx.font = 'bold 14px Arial';
        this.ctx.textAlign = 'center';
        this.ctx.textBaseline = 'middle';
        this.ctx.fillText(isGalvanic ? 'V' : '⚡', x, wireY);
        this.ctx.font = '11px Arial';
        this.ctx.textBaseline = 'top';
        this.ctx.fillText(isGalvanic ? 'Voltmeter' : 'Power Source', x, wireY + devR + 4);

        // Electron flow arrows on wire
        if (options.showElectronFlow) {
            const eDir = isGalvanic ? 1 : -1;
            this.ctx.strokeStyle = '#000000';
            this.ctx.fillStyle = '#000000';
            this.ctx.lineWidth = 2;
            for (const ox of [-60, 60]) {
                const ax = x + eDir * ox;
                this.ctx.beginPath();
                this.ctx.moveTo(ax, wireY - 8);
                this.ctx.lineTo(ax + eDir * 14, wireY - 8);
                this.ctx.stroke();
                this.ctx.beginPath();
                this.ctx.moveTo(ax + eDir * 14, wireY - 8);
                this.ctx.lineTo(ax + eDir * 8, wireY - 13);
                this.ctx.lineTo(ax + eDir * 8, wireY - 3);
                this.ctx.closePath();
                this.ctx.fill();
            }
            this.ctx.font = '11px Arial';
            this.ctx.fillText('e⁻', x, wireY - 22);
        }

        // Salt bridge
        if (options.showSaltBridge) {
            const sbY = y + bH * 0.1;
            const sbH = 18;
            this.ctx.fillStyle = '#cccccc';
            this.ctx.fillRect(lx + bW / 2, sbY - sbH / 2, rx - lx - bW, sbH);
            this.ctx.strokeStyle = '#000000';
            this.ctx.lineWidth = 2;
            this.ctx.strokeRect(lx + bW / 2, sbY - sbH / 2, rx - lx - bW, sbH);
            this.ctx.fillStyle = '#000000';
            this.ctx.font = '11px Arial';
            this.ctx.textAlign = 'center';
            this.ctx.textBaseline = 'top';
            this.ctx.fillText('Salt Bridge', x, sbY + sbH / 2 + 4);

            // Ion movement arrows
            if (options.showIonFlow) {
                this.ctx.font = '11px Arial';
                this.ctx.fillText('K⁺ →', x - 25, sbY - 5);
                this.ctx.fillText('← Cl⁻', x + 20, sbY - 5);
            }
        }
    }

    renderElectrodeProcesses(diagram, x, y, width, height, options) {
        const halfW = width / 2;

        // Anode (left)
        const lx = x - halfW / 2;
        this.ctx.fillStyle = '#000000';
        this.ctx.font = 'bold 15px Arial';
        this.ctx.textAlign = 'center';
        this.ctx.textBaseline = 'top';
        this.ctx.fillText('OXIDATION (Anode)', lx, y - height / 2 + 10);

        // Electrode bar
        this.ctx.fillStyle = '#555555';
        this.ctx.fillRect(lx - 8, y - 90, 16, 180);
        this.ctx.strokeStyle = '#000000';
        this.ctx.lineWidth = 2;
        this.ctx.strokeRect(lx - 8, y - 90, 16, 180);

        // Metal atom on electrode
        this.drawAtomBW('M', lx, y - 40, 18);

        // Arrow: metal → ion (loses e-)
        this.ctx.strokeStyle = '#000000';
        this.ctx.fillStyle = '#000000';
        this.ctx.lineWidth = 2.5;
        this.ctx.beginPath();
        this.ctx.moveTo(lx + 22, y - 40);
        this.ctx.lineTo(lx + 65, y - 40);
        this.ctx.stroke();
        this.ctx.beginPath();
        this.ctx.moveTo(lx + 65, y - 40);
        this.ctx.lineTo(lx + 59, y - 46);
        this.ctx.lineTo(lx + 59, y - 34);
        this.ctx.closePath();
        this.ctx.fill();

        // Ion
        this.drawAtomBW('Mⁿ⁺', lx + 88, y - 40, 20);

        // Electrons leaving
        if (options.showElectrons) {
            for (let i = 0; i < 3; i++) {
                this.ctx.beginPath();
                this.ctx.arc(lx - 20 - i * 18, y - 100 - i * 10, 6, 0, Math.PI * 2);
                this.ctx.fillStyle = '#555555';
                this.ctx.fill();
                this.ctx.strokeStyle = '#000000';
                this.ctx.lineWidth = 1.5;
                this.ctx.stroke();
                this.ctx.fillStyle = '#ffffff';
                this.ctx.font = '8px Arial';
                this.ctx.textAlign = 'center';
                this.ctx.textBaseline = 'middle';
                this.ctx.fillText('e⁻', lx - 20 - i * 18, y - 100 - i * 10);
            }
            this.ctx.strokeStyle = '#555555';
            this.ctx.lineWidth = 1.5;
            this.ctx.setLineDash([3, 3]);
            this.ctx.beginPath();
            this.ctx.moveTo(lx, y - 90);
            this.ctx.lineTo(lx, y - 130);
            this.ctx.stroke();
            this.ctx.setLineDash([]);
        }

        if (options.showHalfReactions) {
            this.ctx.fillStyle = '#000000';
            this.ctx.font = '13px Arial';
            this.ctx.textAlign = 'center';
            this.ctx.textBaseline = 'top';
            this.ctx.fillText('M(s) → Mⁿ⁺(aq) + ne⁻', lx, y + 100);
            this.ctx.font = 'italic 11px Arial';
            this.ctx.fillStyle = '#444444';
            this.ctx.fillText('(Loss of electrons)', lx, y + 118);
        }

        // Cathode (right)
        const rx = x + halfW / 2;
        this.ctx.fillStyle = '#000000';
        this.ctx.font = 'bold 15px Arial';
        this.ctx.textAlign = 'center';
        this.ctx.textBaseline = 'top';
        this.ctx.fillText('REDUCTION (Cathode)', rx, y - height / 2 + 10);

        this.ctx.fillStyle = '#888888';
        this.ctx.fillRect(rx - 8, y - 90, 16, 180);
        this.ctx.strokeStyle = '#000000';
        this.ctx.lineWidth = 2;
        this.ctx.strokeRect(rx - 8, y - 90, 16, 180);

        // Ion approaching
        this.drawAtomBW('Mⁿ⁺', rx - 88, y - 40, 20);

        this.ctx.strokeStyle = '#000000';
        this.ctx.fillStyle = '#000000';
        this.ctx.lineWidth = 2.5;
        this.ctx.beginPath();
        this.ctx.moveTo(rx - 65, y - 40);
        this.ctx.lineTo(rx - 22, y - 40);
        this.ctx.stroke();
        this.ctx.beginPath();
        this.ctx.moveTo(rx - 22, y - 40);
        this.ctx.lineTo(rx - 28, y - 46);
        this.ctx.lineTo(rx - 28, y - 34);
        this.ctx.closePath();
        this.ctx.fill();

        // Metal atom deposited
        this.drawAtomBW('M', rx, y - 40, 18);

        if (options.showElectrons) {
            for (let i = 0; i < 3; i++) {
                this.ctx.beginPath();
                this.ctx.arc(rx + 20 + i * 18, y - 100 - i * 10, 6, 0, Math.PI * 2);
                this.ctx.fillStyle = '#555555';
                this.ctx.fill();
                this.ctx.strokeStyle = '#000000';
                this.ctx.lineWidth = 1.5;
                this.ctx.stroke();
                this.ctx.fillStyle = '#ffffff';
                this.ctx.font = '8px Arial';
                this.ctx.textAlign = 'center';
                this.ctx.textBaseline = 'middle';
                this.ctx.fillText('e⁻', rx + 20 + i * 18, y - 100 - i * 10);
            }
            this.ctx.strokeStyle = '#555555';
            this.ctx.lineWidth = 1.5;
            this.ctx.setLineDash([3, 3]);
            this.ctx.beginPath();
            this.ctx.moveTo(rx, y - 130);
            this.ctx.lineTo(rx, y - 90);
            this.ctx.stroke();
            this.ctx.setLineDash([]);
        }

        if (options.showHalfReactions) {
            this.ctx.fillStyle = '#000000';
            this.ctx.font = '13px Arial';
            this.ctx.textAlign = 'center';
            this.ctx.textBaseline = 'top';
            this.ctx.fillText('Mⁿ⁺(aq) + ne⁻ → M(s)', rx, y + 100);
            this.ctx.font = 'italic 11px Arial';
            this.ctx.fillStyle = '#444444';
            this.ctx.fillText('(Gain of electrons)', rx, y + 118);
        }

        // Divider
        this.ctx.strokeStyle = '#bbbbbb';
        this.ctx.lineWidth = 1.5;
        this.ctx.setLineDash([8, 5]);
        this.ctx.beginPath();
        this.ctx.moveTo(x, y - height / 2 + 50);
        this.ctx.lineTo(x, y + height / 2 - 50);
        this.ctx.stroke();
        this.ctx.setLineDash([]);
    }

    renderElectrochemicalSeries(diagram, x, y, width, height, options) {
        const { elements } = diagram;
        const potentials = {
            'Li': -3.04, 'K': -2.93, 'Ca': -2.87, 'Na': -2.71, 'Mg': -2.37,
            'Al': -1.66, 'Zn': -0.76, 'Fe': -0.44, 'Pb': -0.13, 'H': 0.00,
            'Cu': +0.34, 'Ag': +0.80, 'Au': +1.50
        };
        const rowH = height / (elements.length + 1);

        // Header
        this.ctx.fillStyle = '#222222';
        this.ctx.fillRect(x - width / 2, y - height / 2, width, rowH * 0.9);
        this.ctx.fillStyle = '#ffffff';
        this.ctx.font = 'bold 13px Arial';
        this.ctx.textAlign = 'left';
        this.ctx.textBaseline = 'middle';
        this.ctx.fillText('Element', x - width / 2 + 20, y - height / 2 + rowH * 0.45);
        this.ctx.fillText('Half-Reaction', x - width / 2 + 120, y - height / 2 + rowH * 0.45);
        this.ctx.textAlign = 'right';
        this.ctx.fillText('E° (V)', x + width / 2 - 20, y - height / 2 + rowH * 0.45);

        elements.forEach((el, i) => {
            const ry = y - height / 2 + (i + 1) * rowH;
            const pot = potentials[el] !== undefined ? potentials[el] : 0;

            this.ctx.fillStyle = i % 2 === 0 ? '#f5f5f5' : '#ffffff';
            this.ctx.fillRect(x - width / 2, ry, width, rowH * 0.9);
            this.ctx.strokeStyle = '#cccccc';
            this.ctx.lineWidth = 1;
            this.ctx.strokeRect(x - width / 2, ry, width, rowH * 0.9);

            this.ctx.fillStyle = '#000000';
            this.ctx.font = 'bold 14px Arial';
            this.ctx.textAlign = 'center';
            this.ctx.textBaseline = 'middle';
            this.ctx.fillText(el, x - width / 2 + 50, ry + rowH * 0.45);

            this.ctx.font = '12px Arial';
            this.ctx.textAlign = 'left';
            const reaction = el === 'H' ? '2H⁺ + 2e⁻ → H₂' : `${el}²⁺ + 2e⁻ → ${el}`;
            this.ctx.fillText(reaction, x - width / 2 + 120, ry + rowH * 0.45);

            // Potential with bold for positive
            this.ctx.font = pot >= 0 ? 'bold 13px Arial' : '13px Arial';
            this.ctx.textAlign = 'right';
            this.ctx.fillText(`${pot >= 0 ? '+' : ''}${pot.toFixed(2)}`, x + width / 2 - 20, ry + rowH * 0.45);
        });

        if (options.showArrow) {
            const ax = x + width / 2 + 55;
            const atop = y - height / 2 + 20;
            const abot = y + height / 2 - 20;
            this.ctx.strokeStyle = '#000000';
            this.ctx.fillStyle = '#000000';
            this.ctx.lineWidth = 2.5;
            this.ctx.beginPath();
            this.ctx.moveTo(ax, atop);
            this.ctx.lineTo(ax, abot);
            this.ctx.stroke();
            this.ctx.beginPath();
            this.ctx.moveTo(ax, atop);
            this.ctx.lineTo(ax - 5, atop + 12);
            this.ctx.lineTo(ax + 5, atop + 12);
            this.ctx.closePath();
            this.ctx.fill();
            this.ctx.font = '11px Arial';
            this.ctx.textAlign = 'left';
            this.ctx.textBaseline = 'top';
            this.ctx.fillText('Stronger', ax + 8, atop + 5);
            this.ctx.fillText('Oxidising', ax + 8, atop + 18);
            this.ctx.fillText('Agent', ax + 8, atop + 31);
            this.ctx.textBaseline = 'bottom';
            this.ctx.fillText('Stronger', ax + 8, abot - 30);
            this.ctx.fillText('Reducing', ax + 8, abot - 17);
            this.ctx.fillText('Agent', ax + 8, abot - 4);
        }
    }

    // ========== THERMOCHEMISTRY RENDERERS ==========

    renderPhaseDiagram(diagram, x, y, width, height, options) {
        const { substance } = diagram;

        // Axes
        this.ctx.strokeStyle = '#000000';
        this.ctx.lineWidth = 2.5;
        this.ctx.beginPath();
        this.ctx.moveTo(x - width / 2, y - height / 2);
        this.ctx.lineTo(x - width / 2, y + height / 2);
        this.ctx.lineTo(x + width / 2, y + height / 2);
        this.ctx.stroke();

        this.ctx.fillStyle = '#000000';
        this.ctx.font = 'bold 13px Arial';
        this.ctx.textAlign = 'center';
        this.ctx.save();
        this.ctx.translate(x - width / 2 - 42, y);
        this.ctx.rotate(-Math.PI / 2);
        this.ctx.fillText('Pressure (atm)', 0, 0);
        this.ctx.restore();
        this.ctx.fillText('Temperature (°C)', x, y + height / 2 + 30);

        // Region coordinates
        const tp = { x: x - width * 0.1, y: y + height * 0.15 }; // triple point
        const cp = { x: x + width * 0.3, y: y - height * 0.05 }; // critical point

        // Shade regions
        // Solid region
        this.ctx.fillStyle = 'rgba(0,0,0,0.08)';
        this.ctx.beginPath();
        this.ctx.moveTo(x - width / 2, y - height / 2);
        this.ctx.lineTo(x - width / 2, y + height / 2);
        this.ctx.lineTo(tp.x, tp.y);
        this.ctx.lineTo(tp.x, y - height / 2);
        this.ctx.closePath();
        this.ctx.fill();

        // Liquid region
        this.ctx.fillStyle = 'rgba(0,0,0,0.04)';
        this.ctx.beginPath();
        this.ctx.moveTo(tp.x, tp.y);
        this.ctx.lineTo(cp.x, cp.y);
        this.ctx.lineTo(cp.x, y - height / 2);
        this.ctx.lineTo(tp.x, y - height / 2);
        this.ctx.closePath();
        this.ctx.fill();

        // Phase boundary lines
        this.ctx.strokeStyle = '#000000';
        this.ctx.lineWidth = 2.5;

        // Solid-liquid boundary (nearly vertical, slight backward lean for water)
        this.ctx.beginPath();
        this.ctx.moveTo(tp.x, tp.y);
        this.ctx.lineTo(tp.x - 10, y - height / 2);
        this.ctx.stroke();

        // Liquid-gas boundary
        this.ctx.beginPath();
        this.ctx.moveTo(tp.x, tp.y);
        this.ctx.quadraticCurveTo(x + width * 0.1, y + height * 0.1, cp.x, cp.y);
        this.ctx.stroke();

        // Solid-gas boundary
        this.ctx.beginPath();
        this.ctx.moveTo(tp.x, tp.y);
        this.ctx.lineTo(x - width / 2 + 5, y + height / 2 - 5);
        this.ctx.stroke();

        // Region labels
        this.ctx.fillStyle = '#000000';
        this.ctx.font = 'bold 16px Arial';
        this.ctx.textAlign = 'center';
        this.ctx.fillText('SOLID', x - width * 0.28, y - height * 0.08);
        this.ctx.fillText('LIQUID', x + width * 0.1, y - height * 0.15);
        this.ctx.fillText('GAS', x + width * 0.35, y + height * 0.3);

        // Triple point
        if (options.showTriplePoint) {
            this.ctx.beginPath();
            this.ctx.arc(tp.x, tp.y, 6, 0, Math.PI * 2);
            this.ctx.fillStyle = '#333333';
            this.ctx.fill();
            this.ctx.font = 'bold 11px Arial';
            this.ctx.textAlign = 'left';
            this.ctx.fillText('Triple Point', tp.x + 10, tp.y - 5);
            if (substance === 'water') {
                this.ctx.font = '10px Arial';
                this.ctx.fillText('(0.01°C, 611 Pa)', tp.x + 10, tp.y + 8);
            }
        }

        // Critical point
        if (options.showCriticalPoint) {
            this.ctx.beginPath();
            this.ctx.arc(cp.x, cp.y, 6, 0, Math.PI * 2);
            this.ctx.fillStyle = '#333333';
            this.ctx.fill();
            this.ctx.font = 'bold 11px Arial';
            this.ctx.textAlign = 'right';
            this.ctx.fillText('Critical Point', cp.x - 10, cp.y - 5);
            if (substance === 'water') {
                this.ctx.font = '10px Arial';
                this.ctx.fillText('(374°C, 218 atm)', cp.x - 10, cp.y + 8);
            }
        }
    }

    renderHessCycle(diagram, x, y, width, height, options) {
        // Hess's Law: C + O2 → CO2 via two routes
        const boxW = 140, boxH = 40;
        const top = { x, y: y - height * 0.3 };
        const botL = { x: x - width * 0.3, y: y + height * 0.25 };
        const botR = { x: x + width * 0.3, y: y + height * 0.25 };

        const drawBox = (cx, cy, label) => {
            this.ctx.fillStyle = '#f5f5f5';
            this.ctx.fillRect(cx - boxW / 2, cy - boxH / 2, boxW, boxH);
            this.ctx.strokeStyle = '#000000';
            this.ctx.lineWidth = 2;
            this.ctx.strokeRect(cx - boxW / 2, cy - boxH / 2, boxW, boxH);
            this.ctx.fillStyle = '#000000';
            this.ctx.font = 'bold 13px Arial';
            this.ctx.textAlign = 'center';
            this.ctx.textBaseline = 'middle';
            this.ctx.fillText(label, cx, cy);
        };

        drawBox(top.x, top.y, 'C(s) + O₂(g)');
        drawBox(botL.x, botL.y, 'CO(g) + ½O₂(g)');
        drawBox(botR.x, botR.y, 'CO₂(g)');

        // Arrow: top → botR (direct route)
        this.drawLabelledArrow(
            top.x + boxW / 2, top.y + boxH / 2,
            botR.x - boxW / 2, botR.y - boxH / 2,
            'Route 1: ΔH₁ = −394 kJ', 'right'
        );

        // Arrow: top → botL
        this.drawLabelledArrow(
            top.x - boxW / 2, top.y + boxH / 2,
            botL.x + boxW * 0.1, botL.y - boxH / 2,
            'ΔH₂ = −111 kJ', 'left'
        );

        // Arrow: botL → botR
        this.drawLabelledArrow(
            botL.x + boxW / 2, botL.y,
            botR.x - boxW / 2, botR.y,
            'ΔH₃ = −283 kJ', 'bottom'
        );

        // Hess's law statement
        this.ctx.fillStyle = '#000000';
        this.ctx.font = 'bold 13px Arial';
        this.ctx.textAlign = 'center';
        this.ctx.textBaseline = 'top';
        this.ctx.fillText("Hess's Law: ΔH₁ = ΔH₂ + ΔH₃", x, y + height * 0.45);
        this.ctx.font = '12px Arial';
        this.ctx.fillStyle = '#444444';
        this.ctx.fillText('−394 = −111 + (−283) kJ mol⁻¹ ✓', x, y + height * 0.45 + 18);
        this.ctx.fillText('Enthalpy change is independent of route taken.', x, y + height * 0.45 + 34);
    }

    drawLabelledArrow(x1, y1, x2, y2, label, side) {
        this.ctx.strokeStyle = '#000000';
        this.ctx.fillStyle = '#000000';
        this.ctx.lineWidth = 2;
        this.ctx.beginPath();
        this.ctx.moveTo(x1, y1);
        this.ctx.lineTo(x2, y2);
        this.ctx.stroke();

        const angle = Math.atan2(y2 - y1, x2 - x1);
        this.ctx.beginPath();
        this.ctx.moveTo(x2, y2);
        this.ctx.lineTo(x2 - 12 * Math.cos(angle - 0.4), y2 - 12 * Math.sin(angle - 0.4));
        this.ctx.lineTo(x2 - 12 * Math.cos(angle + 0.4), y2 - 12 * Math.sin(angle + 0.4));
        this.ctx.closePath();
        this.ctx.fill();

        const mx = (x1 + x2) / 2, my = (y1 + y2) / 2;
        this.ctx.font = '12px Arial';
        this.ctx.textAlign = side === 'left' ? 'right' : side === 'right' ? 'left' : 'center';
        this.ctx.textBaseline = side === 'bottom' ? 'top' : 'middle';
        const ox = side === 'left' ? -10 : side === 'right' ? 10 : 0;
        const oy = side === 'bottom' ? 8 : -12;
        this.ctx.fillText(label, mx + ox, my + oy);
    }

    renderCalorimeter(diagram, x, y, width, height, options) {
        const { calorimeterType } = diagram;

        if (calorimeterType === 'coffee_cup') {
            // Outer cup
            this.ctx.strokeStyle = '#000000';
            this.ctx.lineWidth = 3;
            this.ctx.fillStyle = '#f5f5f5';
            const cupW = width * 0.55, cupH = height * 0.6;
            this.ctx.fillRect(x - cupW / 2, y - cupH / 2, cupW, cupH);
            this.ctx.strokeRect(x - cupW / 2, y - cupH / 2, cupW, cupH);

            // Inner cup
            this.ctx.fillStyle = '#ffffff';
            this.ctx.fillRect(x - cupW / 2 + 10, y - cupH / 2 + 10, cupW - 20, cupH - 20);
            this.ctx.strokeStyle = '#555555';
            this.ctx.lineWidth = 1.5;
            this.ctx.strokeRect(x - cupW / 2 + 10, y - cupH / 2 + 10, cupW - 20, cupH - 20);

            // Lid
            this.ctx.fillStyle = '#dddddd';
            this.ctx.fillRect(x - cupW / 2 - 8, y - cupH / 2 - 15, cupW + 16, 15);
            this.ctx.strokeStyle = '#000000';
            this.ctx.lineWidth = 2;
            this.ctx.strokeRect(x - cupW / 2 - 8, y - cupH / 2 - 15, cupW + 16, 15);

            // Thermometer
            if (options.showThermometer) {
                const thX = x + cupW * 0.2;
                this.ctx.fillStyle = '#cccccc';
                this.ctx.fillRect(thX - 4, y - cupH / 2 - 50, 8, cupH * 0.55);
                this.ctx.strokeStyle = '#000000';
                this.ctx.lineWidth = 1.5;
                this.ctx.strokeRect(thX - 4, y - cupH / 2 - 50, 8, cupH * 0.55);
                this.ctx.beginPath();
                this.ctx.arc(thX, y, 10, 0, Math.PI * 2);
                this.ctx.fillStyle = '#333333';
                this.ctx.fill();
                this.ctx.stroke();
            }

            // Solution label
            this.ctx.fillStyle = '#000000';
            this.ctx.font = '12px Arial';
            this.ctx.textAlign = 'center';
            this.ctx.textBaseline = 'middle';
            this.ctx.fillText('Reaction', x - 20, y + 10);
            this.ctx.fillText('mixture', x - 20, y + 25);

            if (options.showLabels) {
                this.ctx.font = '12px Arial';
                this.ctx.textAlign = 'left';
                this.ctx.textBaseline = 'top';
                const lbls = [
                    [x + cupW / 2 + 12, y - cupH / 2 - 40, 'Thermometer'],
                    [x + cupW / 2 + 12, y - cupH / 2 - 5, 'Lid (insulating)'],
                    [x + cupW / 2 + 12, y + 10, 'Nested cups'],
                    [x + cupW / 2 + 12, y + cupH / 2 - 20, 'Aqueous solution']
                ];
                lbls.forEach(([lx2, ly, txt]) => {
                    this.ctx.fillText(txt, lx2, ly);
                    this.ctx.strokeStyle = '#888888';
                    this.ctx.lineWidth = 1;
                    this.ctx.setLineDash([2, 2]);
                    this.ctx.beginPath();
                    this.ctx.moveTo(x + cupW / 2, ly + 6);
                    this.ctx.lineTo(lx2 - 4, ly + 6);
                    this.ctx.stroke();
                    this.ctx.setLineDash([]);
                });
            }

        } else {
            // Bomb calorimeter
            const bW = width * 0.6, bH = height * 0.7;
            this.ctx.fillStyle = '#eeeeee';
            this.ctx.fillRect(x - bW / 2, y - bH / 2, bW, bH);
            this.ctx.strokeStyle = '#000000';
            this.ctx.lineWidth = 3;
            this.ctx.strokeRect(x - bW / 2, y - bH / 2, bW, bH);

            // Inner bomb
            this.ctx.fillStyle = '#cccccc';
            this.ctx.beginPath();
            this.ctx.ellipse(x, y + bH * 0.05, bW * 0.28, bH * 0.35, 0, 0, Math.PI * 2);
            this.ctx.fill();
            this.ctx.strokeStyle = '#000000';
            this.ctx.lineWidth = 2;
            this.ctx.stroke();
            this.ctx.fillStyle = '#000000';
            this.ctx.font = '11px Arial';
            this.ctx.textAlign = 'center';
            this.ctx.textBaseline = 'middle';
            this.ctx.fillText('Steel bomb', x, y + bH * 0.05);
            this.ctx.fillText('(sample inside)', x, y + bH * 0.05 + 14);

            this.ctx.fillText('Water bath', x, y - bH * 0.3);
            this.ctx.fillText('(measures ΔT)', x, y - bH * 0.3 + 14);
        }

        this.ctx.fillStyle = '#000000';
        this.ctx.font = 'bold 14px Arial';
        this.ctx.textAlign = 'center';
        this.ctx.textBaseline = 'bottom';
        this.ctx.fillText(calorimeterType === 'coffee_cup' ? 'Coffee-Cup Calorimeter' : 'Bomb Calorimeter', x, y - height / 2 - 5);
        this.ctx.font = '12px Arial';
        this.ctx.fillStyle = '#444444';
        this.ctx.textBaseline = 'top';
        this.ctx.fillText('q = mcΔT', x, y + height / 2 + 10);
    }

    renderEnergyBarChart(diagram, x, y, width, height, options) {
        const { values, labels } = diagram;
        const maxVal = Math.max(...values);
        const barW = (width * 0.7) / values.length;
        const maxH = height * 0.7;
        const baseY = y + height * 0.35;

        // Grid lines
        if (options.showGrid) {
            this.ctx.strokeStyle = '#dddddd';
            this.ctx.lineWidth = 1;
            for (let i = 0; i <= 4; i++) {
                const gy = baseY - (i / 4) * maxH;
                this.ctx.beginPath();
                this.ctx.moveTo(x - width / 2 + 60, gy);
                this.ctx.lineTo(x + width / 2, gy);
                this.ctx.stroke();
                this.ctx.fillStyle = '#666666';
                this.ctx.font = '11px Arial';
                this.ctx.textAlign = 'right';
                this.ctx.textBaseline = 'middle';
                this.ctx.fillText(Math.round((i / 4) * maxVal), x - width / 2 + 55, gy);
            }
        }

        // Bars
        values.forEach((val, i) => {
            const bx = x - width * 0.35 + i * (barW + 15);
            const bh = (val / maxVal) * maxH;
            const by = baseY - bh;

            // Hatch pattern for distinction
            this.ctx.fillStyle = i % 2 === 0 ? '#444444' : '#aaaaaa';
            this.ctx.fillRect(bx, by, barW, bh);
            this.ctx.strokeStyle = '#000000';
            this.ctx.lineWidth = 2;
            this.ctx.strokeRect(bx, by, barW, bh);

            // Value label
            if (options.showValues) {
                this.ctx.fillStyle = '#000000';
                this.ctx.font = 'bold 13px Arial';
                this.ctx.textAlign = 'center';
                this.ctx.textBaseline = 'bottom';
                this.ctx.fillText(val, bx + barW / 2, by - 4);
            }

            // X label
            this.ctx.font = '12px Arial';
            this.ctx.textBaseline = 'top';
            this.ctx.fillText(labels[i] || `Bar ${i + 1}`, bx + barW / 2, baseY + 8);
        });

        // Axes
        this.ctx.strokeStyle = '#000000';
        this.ctx.lineWidth = 2.5;
        this.ctx.beginPath();
        this.ctx.moveTo(x - width / 2 + 60, y - height * 0.35);
        this.ctx.lineTo(x - width / 2 + 60, baseY);
        this.ctx.lineTo(x + width / 2, baseY);
        this.ctx.stroke();

        this.ctx.font = 'bold 13px Arial';
        this.ctx.textAlign = 'center';
        this.ctx.textBaseline = 'top';
        this.ctx.fillText('Energy (kJ mol⁻¹)', x, baseY + 38);
    }

    // ========== KINETICS RENDERERS ==========

    renderMaxwellBoltzmann(diagram, x, y, width, height, options) {
        const { temperature } = diagram;

        // Axes
        this.ctx.strokeStyle = '#000000';
        this.ctx.lineWidth = 2.5;
        this.ctx.beginPath();
        this.ctx.moveTo(x - width / 2, y - height / 2);
        this.ctx.lineTo(x - width / 2, y + height / 2);
        this.ctx.lineTo(x + width / 2, y + height / 2);
        this.ctx.stroke();

        this.ctx.fillStyle = '#000000';
        this.ctx.font = 'bold 13px Arial';
        this.ctx.textAlign = 'center';
        this.ctx.save();
        this.ctx.translate(x - width / 2 - 42, y);
        this.ctx.rotate(-Math.PI / 2);
        this.ctx.fillText('Number of Particles', 0, 0);
        this.ctx.restore();
        this.ctx.fillText('Kinetic Energy / Speed →', x, y + height / 2 + 28);

        // Generate MB distribution points
        const pts = [];
        const steps = 100;
        for (let i = 0; i <= steps; i++) {
            const ex = i / steps;
            // Maxwell-Boltzmann shape: x² * exp(-x²)
            const nx = ex * 3.5;
            const ny = nx * nx * Math.exp(-nx * nx * 0.6);
            pts.push([
                x - width / 2 + ex * width * 0.92,
                y + height / 2 - ny * height * 0.85
            ]);
        }

        // Activation energy threshold
        const EaX = x - width / 2 + width * 0.62;

        // Fill area to the right of Ea (particles with enough energy)
        if (options.showArea) {
            this.ctx.fillStyle = 'rgba(0,0,0,0.12)';
            this.ctx.beginPath();
            const rightPts = pts.filter(p => p[0] >= EaX);
            if (rightPts.length > 0) {
                this.ctx.moveTo(EaX, y + height / 2);
                this.ctx.lineTo(rightPts[0][0], rightPts[0][1]);
                rightPts.forEach(p => this.ctx.lineTo(p[0], p[1]));
                this.ctx.lineTo(pts[pts.length - 1][0], y + height / 2);
                this.ctx.closePath();
                this.ctx.fill();
            }
        }

        // Main curve
        this.ctx.strokeStyle = '#000000';
        this.ctx.lineWidth = 3;
        this.ctx.beginPath();
        pts.forEach(([px, py], i) => i === 0 ? this.ctx.moveTo(px, py) : this.ctx.lineTo(px, py));
        this.ctx.stroke();

        // Most probable speed marker
        const peakIdx = pts.reduce((mi, p, i) => p[1] < pts[mi][1] ? i : mi, 0);
        this.ctx.strokeStyle = '#555555';
        this.ctx.lineWidth = 1.5;
        this.ctx.setLineDash([4, 3]);
        this.ctx.beginPath();
        this.ctx.moveTo(pts[peakIdx][0], pts[peakIdx][1]);
        this.ctx.lineTo(pts[peakIdx][0], y + height / 2);
        this.ctx.stroke();
        this.ctx.setLineDash([]);
        this.ctx.font = '11px Arial';
        this.ctx.textAlign = 'center';
        this.ctx.fillText('Most probable', pts[peakIdx][0], y + height / 2 + 14);

        // Activation energy line
        if (options.showActivationEnergy) {
            this.ctx.strokeStyle = '#000000';
            this.ctx.lineWidth = 2;
            this.ctx.setLineDash([6, 4]);
            this.ctx.beginPath();
            this.ctx.moveTo(EaX, y - height / 2 + 20);
            this.ctx.lineTo(EaX, y + height / 2);
            this.ctx.stroke();
            this.ctx.setLineDash([]);
            this.ctx.font = 'bold 12px Arial';
            this.ctx.textAlign = 'center';
            this.ctx.fillText('Eₐ', EaX, y - height / 2 + 10);
            this.ctx.font = '11px Arial';
            this.ctx.fillText('← Particles with E ≥ Eₐ', EaX + 45, y - height / 2 + 30);
        }

        this.ctx.fillStyle = '#000000';
        this.ctx.font = '12px Arial';
        this.ctx.textAlign = 'left';
        this.ctx.textBaseline = 'top';
        this.ctx.fillText(`T = ${temperature} K`, x - width / 2 + 10, y - height / 2 + 15);
    }

    renderCatalystCurve(diagram, x, y, width, height, options) {
        const { EaNoCat, EaCat } = diagram;

        // Axes
        this.ctx.strokeStyle = '#000000';
        this.ctx.lineWidth = 2.5;
        this.ctx.beginPath();
        this.ctx.moveTo(x - width / 2, y - height / 2);
        this.ctx.lineTo(x - width / 2, y + height / 2);
        this.ctx.lineTo(x + width / 2, y + height / 2);
        this.ctx.stroke();

        this.ctx.fillStyle = '#000000';
        this.ctx.font = 'bold 13px Arial';
        this.ctx.textAlign = 'center';
        this.ctx.save();
        this.ctx.translate(x - width / 2 - 42, y);
        this.ctx.rotate(-Math.PI / 2);
        this.ctx.fillText('Number of Particles', 0, 0);
        this.ctx.restore();
        this.ctx.fillText('Kinetic Energy →', x, y + height / 2 + 28);

        // Generate distribution
        const pts = [];
        for (let i = 0; i <= 100; i++) {
            const ex = i / 100;
            const nx = ex * 3.5;
            const ny = nx * nx * Math.exp(-nx * nx * 0.6);
            pts.push([x - width / 2 + ex * width * 0.92, y + height / 2 - ny * height * 0.85]);
        }

        this.ctx.strokeStyle = '#000000';
        this.ctx.lineWidth = 3;
        this.ctx.beginPath();
        pts.forEach(([px, py], i) => i === 0 ? this.ctx.moveTo(px, py) : this.ctx.lineTo(px, py));
        this.ctx.stroke();

        // Two Ea lines
        const eaNX = x - width / 2 + (EaNoCat / 160) * width * 0.92;
        const eaCX = x - width / 2 + (EaCat / 160) * width * 0.92;

        // Uncatalysed Ea
        this.ctx.strokeStyle = '#000000';
        this.ctx.lineWidth = 2.5;
        this.ctx.beginPath();
        this.ctx.moveTo(eaNX, y - height / 2 + 25);
        this.ctx.lineTo(eaNX, y + height / 2);
        this.ctx.stroke();
        this.ctx.font = 'bold 12px Arial';
        this.ctx.textAlign = 'center';
        this.ctx.fillText('Eₐ (uncatalysed)', eaNX, y - height / 2 + 15);

        // Catalysed Ea (dashed)
        this.ctx.strokeStyle = '#000000';
        this.ctx.lineWidth = 2;
        this.ctx.setLineDash([6, 4]);
        this.ctx.beginPath();
        this.ctx.moveTo(eaCX, y - height / 2 + 55);
        this.ctx.lineTo(eaCX, y + height / 2);
        this.ctx.stroke();
        this.ctx.setLineDash([]);
        this.ctx.font = '12px Arial';
        this.ctx.fillText('Eₐ (catalysed)', eaCX, y - height / 2 + 45);

        // Shaded areas
        const fillArea = (fromX, color) => {
            this.ctx.fillStyle = color;
            this.ctx.beginPath();
            const rpts = pts.filter(p => p[0] >= fromX);
            if (rpts.length === 0) return;
            this.ctx.moveTo(fromX, y + height / 2);
            this.ctx.lineTo(rpts[0][0], rpts[0][1]);
            rpts.forEach(p => this.ctx.lineTo(p[0], p[1]));
            this.ctx.lineTo(pts[pts.length - 1][0], y + height / 2);
            this.ctx.closePath();
            this.ctx.fill();
        };
        fillArea(eaNX, 'rgba(0,0,0,0.06)');
        fillArea(eaCX, 'rgba(0,0,0,0.10)');

        this.ctx.fillStyle = '#000000';
        this.ctx.font = '12px Arial';
        this.ctx.textAlign = 'center';
        this.ctx.textBaseline = 'top';
        this.ctx.fillText('Darker shading = more particles with E ≥ Eₐ (catalyst increases rate)', x, y + height / 2 + 12);
    }

    renderConcentrationRate(diagram, x, y, width, height, options) {
        const { order } = diagram;

        // Axes
        this.ctx.strokeStyle = '#000000';
        this.ctx.lineWidth = 2.5;
        this.ctx.beginPath();
        this.ctx.moveTo(x - width / 2, y - height / 2);
        this.ctx.lineTo(x - width / 2, y + height / 2);
        this.ctx.lineTo(x + width / 2, y + height / 2);
        this.ctx.stroke();

        this.ctx.fillStyle = '#000000';
        this.ctx.font = 'bold 13px Arial';
        this.ctx.textAlign = 'center';
        this.ctx.save();
        this.ctx.translate(x - width / 2 - 42, y);
        this.ctx.rotate(-Math.PI / 2);
        this.ctx.fillText('Rate of Reaction', 0, 0);
        this.ctx.restore();
        this.ctx.fillText('[Concentration] (mol dm⁻³)', x, y + height / 2 + 28);

        const pts = [];
        for (let i = 0; i <= 50; i++) {
            const conc = i / 50;
            let rate;
            if (order === 0) rate = 0.6;
            else if (order === 1) rate = conc;
            else rate = conc * conc;
            pts.push([x - width / 2 + conc * width * 0.92, y + height / 2 - rate * height * 0.85]);
        }

        this.ctx.strokeStyle = '#000000';
        this.ctx.lineWidth = 3;
        this.ctx.beginPath();
        pts.forEach(([px, py], i) => i === 0 ? this.ctx.moveTo(px, py) : this.ctx.lineTo(px, py));
        this.ctx.stroke();

        if (options.showEquation) {
            const eqText = order === 0 ? 'Rate = k  (zero order)' :
                order === 1 ? 'Rate = k[A]  (first order)' : 'Rate = k[A]²  (second order)';
            this.ctx.font = 'bold 13px Arial';
            this.ctx.textAlign = 'left';
            this.ctx.fillText(eqText, x - width / 2 + 10, y - height / 2 + 20);
        }

        if (options.showTrendline && order === 1) {
            this.ctx.strokeStyle = '#555555';
            this.ctx.lineWidth = 1.5;
            this.ctx.setLineDash([4, 3]);
            this.ctx.beginPath();
            this.ctx.moveTo(x - width / 2, y + height / 2);
            this.ctx.lineTo(x + width / 2 - 5, pts[50][1]);
            this.ctx.stroke();
            this.ctx.setLineDash([]);
        }
    }

    renderTemperatureRate(diagram, x, y, width, height, options) {
        // Axes
        this.ctx.strokeStyle = '#000000';
        this.ctx.lineWidth = 2.5;
        this.ctx.beginPath();
        this.ctx.moveTo(x - width / 2, y - height / 2);
        this.ctx.lineTo(x - width / 2, y + height / 2);
        this.ctx.lineTo(x + width / 2, y + height / 2);
        this.ctx.stroke();

        this.ctx.fillStyle = '#000000';
        this.ctx.font = 'bold 13px Arial';
        this.ctx.textAlign = 'center';
        this.ctx.save();
        this.ctx.translate(x - width / 2 - 42, y);
        this.ctx.rotate(-Math.PI / 2);
        this.ctx.fillText('Rate of Reaction', 0, 0);
        this.ctx.restore();
        this.ctx.fillText('Temperature (K)', x, y + height / 2 + 28);

        // Arrhenius exponential curve
        const pts = [];
        for (let i = 0; i <= 60; i++) {
            const t = i / 60;
            const rate = Math.exp(t * 3.5) / Math.exp(3.5);
            pts.push([x - width / 2 + t * width * 0.92, y + height / 2 - rate * height * 0.82]);
        }

        this.ctx.strokeStyle = '#000000';
        this.ctx.lineWidth = 3;
        this.ctx.beginPath();
        pts.forEach(([px, py], i) => i === 0 ? this.ctx.moveTo(px, py) : this.ctx.lineTo(px, py));
        this.ctx.stroke();

        if (options.showExponential) {
            this.ctx.font = 'bold 13px Arial';
            this.ctx.textAlign = 'left';
            this.ctx.fillText('k = Ae^(−Eₐ/RT)', x - width / 2 + 10, y - height / 2 + 20);
            this.ctx.font = '12px Arial';
            this.ctx.fillStyle = '#444444';
            this.ctx.fillText('(Arrhenius equation)', x - width / 2 + 10, y - height / 2 + 36);
        }

        // ~doubling note
        this.ctx.fillStyle = '#333333';
        this.ctx.font = '12px Arial';
        this.ctx.textAlign = 'center';
        this.ctx.textBaseline = 'top';
        this.ctx.fillText('Rate roughly doubles per 10°C rise (rule of thumb)', x, y + height / 2 + 12);
    }

    renderSurfaceArea(diagram, x, y, width, height, options) {
        const { particleSizes } = diagram;
        const colW = width / particleSizes.length;

        particleSizes.forEach((size, i) => {
            const cx = x - width / 2 + i * colW + colW / 2;

            // Label
            this.ctx.fillStyle = '#000000';
            this.ctx.font = 'bold 13px Arial';
            this.ctx.textAlign = 'center';
            this.ctx.textBaseline = 'bottom';
            this.ctx.fillText(size.charAt(0).toUpperCase() + size.slice(1), cx, y - height / 2 + 20);

            const r = size === 'large' ? 50 : size === 'medium' ? 30 : 15;

            if (size === 'large') {
                this.ctx.beginPath();
                this.ctx.arc(cx, y, r, 0, Math.PI * 2);
                this.ctx.fillStyle = '#dddddd';
                this.ctx.fill();
                this.ctx.strokeStyle = '#000000';
                this.ctx.lineWidth = 2.5;
                this.ctx.stroke();
            } else if (size === 'medium') {
                // 4 medium circles
                const positions = [[-30, -25], [25, -25], [-30, 25], [25, 25]];
                positions.forEach(([dx, dy]) => {
                    this.ctx.beginPath();
                    this.ctx.arc(cx + dx, y + dy, r, 0, Math.PI * 2);
                    this.ctx.fillStyle = '#dddddd';
                    this.ctx.fill();
                    this.ctx.strokeStyle = '#000000';
                    this.ctx.lineWidth = 2;
                    this.ctx.stroke();
                });
            } else {
                // Many small particles
                for (let j = 0; j < 12; j++) {
                    const row = Math.floor(j / 4), col = j % 4;
                    const px = cx - 28 + col * 20;
                    const py = y - 20 + row * 20;
                    this.ctx.beginPath();
                    this.ctx.arc(px, py, r, 0, Math.PI * 2);
                    this.ctx.fillStyle = '#dddddd';
                    this.ctx.fill();
                    this.ctx.strokeStyle = '#000000';
                    this.ctx.lineWidth = 1.5;
                    this.ctx.stroke();
                }
            }

            const saLabel = size === 'large' ? 'Low SA\nSlow rate' : size === 'medium' ? 'Medium SA\nFaster rate' : 'High SA\nFastest rate';
            this.ctx.fillStyle = '#000000';
            this.ctx.font = '12px Arial';
            this.ctx.textAlign = 'center';
            this.ctx.textBaseline = 'top';
            saLabel.split('\n').forEach((line, li) => {
                this.ctx.fillText(line, cx, y + height * 0.35 + li * 16);
            });
        });

        this.ctx.font = 'bold 13px Arial';
        this.ctx.textAlign = 'center';
        this.ctx.textBaseline = 'top';
        this.ctx.fillText('↑ Surface Area  =  ↑ Collision frequency  =  ↑ Reaction rate', x, y + height / 2 - 20);
    }

    // ========== EQUILIBRIUM RENDERERS ==========

    renderEquilibriumTime(diagram, x, y, width, height, options) {
        const { reaction } = diagram;

        // Axes
        this.ctx.strokeStyle = '#000000';
        this.ctx.lineWidth = 2.5;
        this.ctx.beginPath();
        this.ctx.moveTo(x - width / 2, y - height / 2);
        this.ctx.lineTo(x - width / 2, y + height / 2);
        this.ctx.lineTo(x + width / 2, y + height / 2);
        this.ctx.stroke();

        this.ctx.fillStyle = '#000000';
        this.ctx.font = 'bold 13px Arial';
        this.ctx.textAlign = 'center';
        this.ctx.save();
        this.ctx.translate(x - width / 2 - 42, y);
        this.ctx.rotate(-Math.PI / 2);
        this.ctx.fillText('Concentration (mol dm⁻³)', 0, 0);
        this.ctx.restore();
        this.ctx.fillText('Time →', x, y + height / 2 + 28);

        // Equilibrium position (65% across)
        const eqX = x - width / 2 + width * 0.65;

        // Reactant curve: starts high, decreases to equilibrium
        const reactantPts = [];
        for (let i = 0; i <= 80; i++) {
            const t = i / 80;
            const conc = t < 0.65 ? 0.8 - 0.45 * (1 - Math.exp(-t * 6)) : 0.35;
            reactantPts.push([x - width / 2 + t * width * 0.92, y + height / 2 - conc * height * 0.85]);
        }

        // Product curve: starts low, increases to equilibrium
        const productPts = [];
        for (let i = 0; i <= 80; i++) {
            const t = i / 80;
            const conc = t < 0.65 ? 0.5 * (1 - Math.exp(-t * 6)) : 0.5;
            productPts.push([x - width / 2 + t * width * 0.92, y + height / 2 - conc * height * 0.85]);
        }

        // Draw curves with different styles
        const drawCurve = (pts, dash) => {
            this.ctx.strokeStyle = '#000000';
            this.ctx.lineWidth = 2.5;
            this.ctx.setLineDash(dash);
            this.ctx.beginPath();
            pts.forEach(([px, py], i) => i === 0 ? this.ctx.moveTo(px, py) : this.ctx.lineTo(px, py));
            this.ctx.stroke();
            this.ctx.setLineDash([]);
        };

        drawCurve(reactantPts, []);
        drawCurve(productPts, [6, 4]);

        // Equilibrium line
        this.ctx.strokeStyle = '#555555';
        this.ctx.lineWidth = 1.5;
        this.ctx.setLineDash([3, 3]);
        this.ctx.beginPath();
        this.ctx.moveTo(eqX, y - height / 2 + 20);
        this.ctx.lineTo(eqX, y + height / 2);
        this.ctx.stroke();
        this.ctx.setLineDash([]);
        this.ctx.fillStyle = '#000000';
        this.ctx.font = 'bold 12px Arial';
        this.ctx.textAlign = 'center';
        this.ctx.fillText('Equilibrium reached', eqX, y - height / 2 + 12);

        // Legend
        this.ctx.fillStyle = '#000000';
        this.ctx.font = '12px Arial';
        this.ctx.textAlign = 'left';
        this.ctx.fillText('—— Reactants', x - width / 2 + 10, y - height / 2 + 35);
        this.ctx.setLineDash([6, 4]);
        this.ctx.strokeStyle = '#000000';
        this.ctx.lineWidth = 2;
        this.ctx.beginPath();
        this.ctx.moveTo(x - width / 2 + 10, y - height / 2 + 52);
        this.ctx.lineTo(x - width / 2 + 52, y - height / 2 + 52);
        this.ctx.stroke();
        this.ctx.setLineDash([]);
        this.ctx.fillText(' Products', x - width / 2 + 55, y - height / 2 + 56);

        if (reaction) {
            this.ctx.font = '13px Arial';
            this.ctx.textAlign = 'center';
            this.ctx.textBaseline = 'top';
            this.ctx.fillText(reaction, x, y + height / 2 + 12);
        }
    }

    renderLeChatelier(diagram, x, y, width, height, options) {
        const { stress, direction } = diagram;

        // Three boxes: Before stress → Stress applied → After shift
        const bxW = width * 0.26, bxH = height * 0.55;
        const positions = [x - width * 0.33, x, x + width * 0.33];
        const labels = ['Equilibrium', `Stress:\n${stress}`, `New\nEquilibrium`];

        positions.forEach((bx, i) => {
            this.ctx.fillStyle = i === 1 ? '#f0f0f0' : '#fafafa';
            this.ctx.fillRect(bx - bxW / 2, y - bxH / 2, bxW, bxH);
            this.ctx.strokeStyle = '#000000';
            this.ctx.lineWidth = i === 1 ? 2.5 : 2;
            this.ctx.strokeRect(bx - bxW / 2, y - bxH / 2, bxW, bxH);

            // Label
            this.ctx.fillStyle = '#000000';
            this.ctx.font = 'bold 13px Arial';
            this.ctx.textAlign = 'center';
            this.ctx.textBaseline = 'top';
            labels[i].split('\n').forEach((line, li) => {
                this.ctx.fillText(line, bx, y - bxH / 2 + 8 + li * 16);
            });

            // Simple bar chart inside box showing reactant/product ratio
            const barH = bxH * 0.45;
            const barY = y - bxH / 2 + bxH * 0.4;
            const rFrac = i === 0 ? 0.5 : i === 1 ? 0.5 : (direction === 'forward' ? 0.35 : 0.65);
            const pFrac = 1 - rFrac;

            const halfW = bxW * 0.35;
            // Reactant bar
            this.ctx.fillStyle = '#444444';
            this.ctx.fillRect(bx - halfW - 5, barY + (1 - rFrac) * barH, halfW, rFrac * barH);
            this.ctx.strokeStyle = '#000000';
            this.ctx.lineWidth = 1.5;
            this.ctx.strokeRect(bx - halfW - 5, barY, halfW, barH);

            // Product bar
            this.ctx.fillStyle = '#aaaaaa';
            this.ctx.fillRect(bx + 5, barY + (1 - pFrac) * barH, halfW, pFrac * barH);
            this.ctx.strokeRect(bx + 5, barY, halfW, barH);

            this.ctx.font = '10px Arial';
            this.ctx.textBaseline = 'top';
            this.ctx.fillText('R', bx - halfW / 2 - 5, barY + barH + 3);
            this.ctx.fillText('P', bx + halfW / 2 + 5, barY + barH + 3);
        });

        // Arrows between boxes
        for (const [ax, ay] of [[x - width * 0.33 + bxW / 2 + 5, y], [x + bxW / 2 + 5, y]]) {
            const arrW = width * 0.07;
            this.ctx.strokeStyle = '#000000';
            this.ctx.fillStyle = '#000000';
            this.ctx.lineWidth = 2.5;
            this.ctx.beginPath();
            this.ctx.moveTo(ax, ay);
            this.ctx.lineTo(ax + arrW, ay);
            this.ctx.stroke();
            this.ctx.beginPath();
            this.ctx.moveTo(ax + arrW, ay);
            this.ctx.lineTo(ax + arrW - 8, ay - 5);
            this.ctx.lineTo(ax + arrW - 8, ay + 5);
            this.ctx.closePath();
            this.ctx.fill();
        }

        // Shift direction label
        this.ctx.fillStyle = '#000000';
        this.ctx.font = 'bold 14px Arial';
        this.ctx.textAlign = 'center';
        this.ctx.textBaseline = 'top';
        const shiftText = direction === 'forward' ? '→ Equilibrium shifts FORWARD (right)' : '← Equilibrium shifts BACKWARD (left)';
        this.ctx.fillText(shiftText, x, y + bxH / 2 + 15);
        this.ctx.font = '12px Arial';
        this.ctx.fillStyle = '#444444';
        this.ctx.fillText(`Stress applied: ${stress}`, x, y + bxH / 2 + 32);
    }

    renderICETable(diagram, x, y, width, height, options) {
    const { reaction } = diagram;

    // Parse species from reaction string (skip operators)
    const allCols = ['H₂', '+', 'I₂', '⇌', '2HI'];
    const speciesCols = ['H₂', 'I₂', '2HI'];
    const operators = ['+', '⇌'];

    // ICE values
    const iceData = {
        'H₂':  { initial: 'a',   change: '−x',   equil: 'a − x' },
        'I₂':  { initial: 'b',   change: '−x',   equil: 'b − x' },
        '2HI': { initial: '0',   change: '+2x',  equil: '2x'    }
    };

    const rowLabels = ['I  (Initial)', 'C  (Change)', 'E  (Equilibrium)'];
    const numRows = 3;

    // Layout dimensions
    const labelColW = 130;
    const operatorColW = 30;
    const speciesColW = (width - labelColW - operatorColW * 2) / 3;
    const rowH = 48;
    const headerH = 44;
    const totalRows = numRows + 1; // header + 3 ICE rows
    const tableW = width;
    const tableH = headerH + numRows * rowH;

    const tableX = x - width / 2;
    const tableY = y - tableH / 2 - 20;

    // ── Helper: get left-edge X of a column by index in allCols ──
    const getColX = (colIdx) => {
        let cx = tableX + labelColW;
        for (let i = 0; i < colIdx; i++) {
            if (operators.includes(allCols[i])) {
                cx += operatorColW;
            } else {
                cx += speciesColW;
            }
        }
        return cx;
    };

    const getColW = (colIdx) => {
        return operators.includes(allCols[colIdx]) ? operatorColW : speciesColW;
    };

    // ── Draw header row ──
    this.ctx.fillStyle = '#1a1a1a';
    this.ctx.fillRect(tableX, tableY, tableW, headerH);

    // Header: label cell
    this.ctx.fillStyle = '#ffffff';
    this.ctx.font = 'bold 13px Arial';
    this.ctx.textAlign = 'center';
    this.ctx.textBaseline = 'middle';
    this.ctx.fillText('Species', tableX + labelColW / 2, tableY + headerH / 2);

    // Vertical divider after label col in header
    this.ctx.strokeStyle = '#555555';
    this.ctx.lineWidth = 1;
    this.ctx.beginPath();
    this.ctx.moveTo(tableX + labelColW, tableY);
    this.ctx.lineTo(tableX + labelColW, tableY + headerH);
    this.ctx.stroke();

    // Header: each column
    allCols.forEach((col, ci) => {
        const cx = getColX(ci);
        const cw = getColW(ci);
        const midX = cx + cw / 2;

        this.ctx.fillStyle = '#ffffff';
        this.ctx.font = operators.includes(col) ? '16px Arial' : 'bold 15px Arial';
        this.ctx.textAlign = 'center';
        this.ctx.textBaseline = 'middle';
        this.ctx.fillText(col, midX, tableY + headerH / 2);

        // Divider after each col (skip last)
        if (ci < allCols.length - 1) {
            this.ctx.strokeStyle = '#555555';
            this.ctx.lineWidth = 1;
            this.ctx.beginPath();
            this.ctx.moveTo(cx + cw, tableY);
            this.ctx.lineTo(cx + cw, tableY + headerH);
            this.ctx.stroke();
        }
    });

    // ── Draw ICE rows ──
    const rowKeys = ['initial', 'change', 'equil'];
    const rowBg = ['#ffffff', '#f0f0f0', '#e6e6e6'];
    const rowStripeBg = ['#fafafa', '#ebebeb', '#dedede'];

    rowLabels.forEach((rowLabel, ri) => {
        const ry = tableY + headerH + ri * rowH;

        // Row background
        this.ctx.fillStyle = ri % 2 === 0 ? rowBg[ri] : rowStripeBg[ri];
        this.ctx.fillRect(tableX, ry, tableW, rowH);

        // Label cell background (slightly darker)
        this.ctx.fillStyle = '#2a2a2a';
        this.ctx.fillRect(tableX, ry, labelColW, rowH);

        // Row label text
        this.ctx.fillStyle = '#ffffff';
        this.ctx.font = 'bold 12px Arial';
        this.ctx.textAlign = 'center';
        this.ctx.textBaseline = 'middle';
        this.ctx.fillText(rowLabel, tableX + labelColW / 2, ry + rowH / 2);

        // Vertical divider after label col
        this.ctx.strokeStyle = '#333333';
        this.ctx.lineWidth = 2;
        this.ctx.beginPath();
        this.ctx.moveTo(tableX + labelColW, ry);
        this.ctx.lineTo(tableX + labelColW, ry + rowH);
        this.ctx.stroke();

        // Fill each column cell
        allCols.forEach((col, ci) => {
            const cx = getColX(ci);
            const cw = getColW(ci);
            const midX = cx + cw / 2;
            const midY = ry + rowH / 2;

            if (operators.includes(col)) {
                // Operator symbol
                this.ctx.fillStyle = '#444444';
                this.ctx.font = '15px Arial';
                this.ctx.textAlign = 'center';
                this.ctx.textBaseline = 'middle';
                this.ctx.fillText(col, midX, midY);
            } else {
                // Species value
                const speciesKey = col;
                const val = iceData[speciesKey]?.[rowKeys[ri]] ?? '—';

                // Style change row differently (italic, slightly smaller)
                let fontStyle = 'bold 14px Arial';
                let textColor = '#111111';
                if (ri === 1) {
                    fontStyle = 'bold italic 14px Arial';
                    textColor = '#2a2a2a';
                } else if (ri === 2) {
                    fontStyle = 'bold 13px Arial';
                    textColor = '#000000';
                }

                // Cell fill for species cells
                this.ctx.fillStyle = ri === 0 ? '#fafafa' : ri === 1 ? '#eeeeee' : '#e0e0e0';
                this.ctx.fillRect(cx, ry, cw, rowH);

                this.ctx.fillStyle = textColor;
                this.ctx.font = fontStyle;
                this.ctx.textAlign = 'center';
                this.ctx.textBaseline = 'middle';
                this.ctx.fillText(val, midX, midY);
            }

            // Vertical divider after each col (except last)
            if (ci < allCols.length - 1) {
                this.ctx.strokeStyle = '#bbbbbb';
                this.ctx.lineWidth = 1;
                this.ctx.beginPath();
                this.ctx.moveTo(cx + cw, ry);
                this.ctx.lineTo(cx + cw, ry + rowH);
                this.ctx.stroke();
            }
        });

        // Horizontal divider below row (except last)
        if (ri < numRows - 1) {
            this.ctx.strokeStyle = '#888888';
            this.ctx.lineWidth = 1;
            this.ctx.beginPath();
            this.ctx.moveTo(tableX, ry + rowH);
            this.ctx.lineTo(tableX + tableW, ry + rowH);
            this.ctx.stroke();
        }
    });

    // ── Outer border (drawn last so it's on top) ──
    this.ctx.strokeStyle = '#000000';
    this.ctx.lineWidth = 3;
    this.ctx.strokeRect(tableX, tableY, tableW, tableH);

    // ── Thick divider between header and first ICE row ──
    this.ctx.strokeStyle = '#000000';
    this.ctx.lineWidth = 2.5;
    this.ctx.beginPath();
    this.ctx.moveTo(tableX, tableY + headerH);
    this.ctx.lineTo(tableX + tableW, tableY + headerH);
    this.ctx.stroke();

    // ── Reaction label above table ──
    if (reaction) {
        this.ctx.fillStyle = '#000000';
        this.ctx.font = 'bold 15px Arial';
        this.ctx.textAlign = 'center';
        this.ctx.textBaseline = 'bottom';
        this.ctx.fillText(reaction, x, tableY - 14);
    }

    // ── Ke expression below table ──
    const bottomY = tableY + tableH;

    if (options.showCalculations) {
        this.ctx.fillStyle = '#000000';
        this.ctx.font = 'bold 13px Arial';
        this.ctx.textAlign = 'center';
        this.ctx.textBaseline = 'top';
        this.ctx.fillText(
            'Kc = [HI]² / ([H₂][I₂])  =  (2x)² / ((a − x)(b − x))',
            x, bottomY + 12
        );
    }

    // ── Legend below Kc ──
    const legendY = bottomY + (options.showCalculations ? 36 : 12);
    const legendItems = [
        { label: 'I = Initial concentration (before reaction)', shade: '#fafafa' },
        { label: 'C = Change in concentration (x = extent of reaction)', shade: '#eeeeee' },
        { label: 'E = Equilibrium concentration', shade: '#e0e0e0' }
    ];

    const legendBoxH = 22;
    const legendW = width;
    const legendX = tableX;

    legendItems.forEach((item, li) => {
        const ly = legendY + li * legendBoxH;
        this.ctx.fillStyle = item.shade;
        this.ctx.fillRect(legendX, ly, legendW, legendBoxH);
        this.ctx.strokeStyle = '#cccccc';
        this.ctx.lineWidth = 1;
        this.ctx.strokeRect(legendX, ly, legendW, legendBoxH);

        // Colour swatch
        this.ctx.fillStyle = '#333333';
        this.ctx.fillRect(legendX + 8, ly + 5, 14, 12);
        this.ctx.strokeStyle = '#000000';
        this.ctx.lineWidth = 1;
        this.ctx.strokeRect(legendX + 8, ly + 5, 14, 12);

        this.ctx.fillStyle = '#111111';
        this.ctx.font = '11px Arial';
        this.ctx.textAlign = 'left';
        this.ctx.textBaseline = 'middle';
        this.ctx.fillText(item.label, legendX + 30, ly + legendBoxH / 2);
    });

    // Outer border for legend block
    this.ctx.strokeStyle = '#000000';
    this.ctx.lineWidth = 1.5;
    this.ctx.strokeRect(legendX, legendY, legendW, legendItems.length * legendBoxH);
}

    renderEquilibriumGraph(diagram, x, y, width, height, options) {
        // Axes
        this.ctx.strokeStyle = '#000000';
        this.ctx.lineWidth = 2.5;
        this.ctx.beginPath();
        this.ctx.moveTo(x - width / 2, y - height / 2);
        this.ctx.lineTo(x - width / 2, y + height / 2);
        this.ctx.lineTo(x + width / 2, y + height / 2);
        this.ctx.stroke();

        this.ctx.fillStyle = '#000000';
        this.ctx.font = 'bold 13px Arial';
        this.ctx.textAlign = 'center';
        this.ctx.save();
        this.ctx.translate(x - width / 2 - 42, y);
        this.ctx.rotate(-Math.PI / 2);
        this.ctx.fillText('Rate of Reaction', 0, 0);
        this.ctx.restore();
        this.ctx.fillText('Time →', x, y + height / 2 + 28);

        // Equilibrium reached at ~60% across
        const eqX = x - width / 2 + width * 0.62;

        // Forward rate: starts high, decreases to equilibrium rate
        const fwdPts = [];
        for (let i = 0; i <= 80; i++) {
            const t = i / 80;
            const rate = t < 0.62 ? 0.85 * Math.exp(-t * 4.5) + 0.2 : 0.2;
            fwdPts.push([x - width / 2 + t * width * 0.92, y + height / 2 - rate * height * 0.85]);
        }

        // Reverse rate: starts low, increases to equilibrium rate
        const revPts = [];
        for (let i = 0; i <= 80; i++) {
            const t = i / 80;
            const rate = t < 0.62 ? 0.2 * (1 - Math.exp(-t * 4.5)) + 0.0 : 0.2;
            revPts.push([x - width / 2 + t * width * 0.92, y + height / 2 - rate * height * 0.85]);
        }

        // Draw forward rate (solid)
        this.ctx.strokeStyle = '#000000';
        this.ctx.lineWidth = 3;
        this.ctx.beginPath();
        fwdPts.forEach(([px, py], i) => i === 0 ? this.ctx.moveTo(px, py) : this.ctx.lineTo(px, py));
        this.ctx.stroke();

        // Draw reverse rate (dashed)
        this.ctx.setLineDash([7, 4]);
        this.ctx.beginPath();
        revPts.forEach(([px, py], i) => i === 0 ? this.ctx.moveTo(px, py) : this.ctx.lineTo(px, py));
        this.ctx.stroke();
        this.ctx.setLineDash([]);

        // Intersection marker
        if (options.showIntersection) {
            const intY = y + height / 2 - 0.2 * height * 0.85;
            this.ctx.fillStyle = '#333333';
            this.ctx.beginPath();
            this.ctx.arc(eqX, intY, 7, 0, Math.PI * 2);
            this.ctx.fill();
            this.ctx.strokeStyle = '#000000';
            this.ctx.lineWidth = 2;
            this.ctx.stroke();

            this.ctx.strokeStyle = '#666666';
            this.ctx.lineWidth = 1.5;
            this.ctx.setLineDash([4, 3]);
            this.ctx.beginPath();
            this.ctx.moveTo(eqX, intY);
            this.ctx.lineTo(eqX, y + height / 2);
            this.ctx.stroke();
            this.ctx.setLineDash([]);

            this.ctx.fillStyle = '#000000';
            this.ctx.font = 'bold 12px Arial';
            this.ctx.textAlign = 'center';
            this.ctx.fillText('Rate fwd = Rate rev', eqX, intY - 20);
            this.ctx.fillText('(Equilibrium)', eqX, intY - 5);
        }

        // Legend
        this.ctx.fillStyle = '#000000';
        this.ctx.font = '12px Arial';
        this.ctx.textAlign = 'left';
        this.ctx.textBaseline = 'top';
        this.ctx.fillText('—— Forward rate', x - width / 2 + 10, y - height / 2 + 15);
        this.ctx.setLineDash([7, 4]);
        this.ctx.strokeStyle = '#000000';
        this.ctx.lineWidth = 2;
        this.ctx.beginPath();
        this.ctx.moveTo(x - width / 2 + 10, y - height / 2 + 36);
        this.ctx.lineTo(x - width / 2 + 55, y - height / 2 + 36);
        this.ctx.stroke();
        this.ctx.setLineDash([]);
        this.ctx.fillText(' Reverse rate', x - width / 2 + 58, y - height / 2 + 32);
    }

    // ========== LABORATORY RENDERERS ==========

    renderLabApparatus(diagram, x, y, width, height, options) {
        const { apparatus } = diagram;

        switch (apparatus) {
            case 'filtration':
                this.renderFiltration(x, y, width, height, options);
                break;
            case 'distillation':
                this.renderDistillation(x, y, width, height, options);
                break;
            case 'fractional_distillation':
                this.renderFractionalDistillation(x, y, width, height, options);
                break;
            case 'separating_funnel':
                this.renderSeparatingFunnel(x, y, width, height, options);
                break;
            case 'titration':
                this.renderTitrationSetup(x, y, width, height, options);
                break;
            case 'reflux':
                this.renderReflux(x, y, width, height, options);
                break;
            case 'gas_collection':
                this.renderGasCollection(x, y, width, height, options);
                break;
            default:
                this.ctx.fillStyle = '#000000';
                this.ctx.font = '14px Arial';
                this.ctx.textAlign = 'center';
                this.ctx.textBaseline = 'middle';
                this.ctx.fillText(`Apparatus: ${apparatus}`, x, y);
        }
    }

    renderFiltration(x, y, width, height, options) {
        const ctx = this.ctx;
        ctx.strokeStyle = '#000000';
        ctx.lineWidth = 2.5;

        // Funnel
        const fTopW = 80, fBotW = 12, fTopY = y - height * 0.3, fBotY = y;
        ctx.beginPath();
        ctx.moveTo(x - fTopW, fTopY);
        ctx.lineTo(x - fBotW / 2, fBotY);
        ctx.lineTo(x + fBotW / 2, fBotY);
        ctx.lineTo(x + fTopW, fTopY);
        ctx.stroke();
        // Funnel top rim
        ctx.beginPath();
        ctx.moveTo(x - fTopW - 5, fTopY);
        ctx.lineTo(x + fTopW + 5, fTopY);
        ctx.stroke();

        // Filter paper (dashed semicircle inside funnel)
        ctx.setLineDash([4, 3]);
        ctx.beginPath();
        ctx.arc(x, fTopY + 30, 55, 0.15, Math.PI - 0.15);
        ctx.stroke();
        ctx.setLineDash([]);

        // Stem
        ctx.beginPath();
        ctx.moveTo(x - fBotW / 2, fBotY);
        ctx.lineTo(x - fBotW / 2, fBotY + 50);
        ctx.lineTo(x + fBotW / 2, fBotY + 50);
        ctx.lineTo(x + fBotW / 2, fBotY);
        ctx.stroke();

        // Conical flask below
        const flaskY = fBotY + 55;
        const flaskW = 60, flaskH = 70;
        ctx.beginPath();
        ctx.moveTo(x - 15, flaskY);
        ctx.lineTo(x - flaskW, flaskY + flaskH);
        ctx.lineTo(x + flaskW, flaskY + flaskH);
        ctx.lineTo(x + 15, flaskY);
        ctx.stroke();
        ctx.beginPath();
        ctx.moveTo(x - 15, flaskY);
        ctx.lineTo(x + 15, flaskY);
        ctx.stroke();

        // Filtrate inside flask
        ctx.fillStyle = '#eeeeee';
        ctx.fillRect(x - flaskW + 10, flaskY + flaskH - 30, (flaskW - 10) * 2, 25);

        // Stand/ring (simplified)
        ctx.strokeStyle = '#555555';
        ctx.lineWidth = 1.5;
        ctx.setLineDash([3, 3]);
        ctx.beginPath();
        ctx.moveTo(x + fTopW + 20, fTopY + 5);
        ctx.lineTo(x + fTopW + 60, fTopY + 5);
        ctx.stroke();
        ctx.setLineDash([]);

        if (options.showLabels) {
            const lbls = [
                [x + fTopW + 15, fTopY - 8, 'Funnel'],
                [x + fTopW + 15, fTopY + 32, 'Filter paper'],
                [x + fTopW + 15, fBotY + 25, 'Stem'],
                [x + flaskW + 12, flaskY + 35, 'Conical flask'],
                [x + flaskW + 12, flaskY + flaskH - 20, 'Filtrate']
            ];
            ctx.fillStyle = '#000000';
            ctx.font = '12px Arial';
            ctx.textAlign = 'left';
            ctx.textBaseline = 'middle';
            lbls.forEach(([lx, ly, txt]) => {
                ctx.fillText(txt, lx, ly);
                ctx.strokeStyle = '#aaaaaa';
                ctx.lineWidth = 1;
                ctx.beginPath();
                ctx.moveTo(lx - 3, ly);
                ctx.lineTo(x + fTopW + 8, ly);
                ctx.stroke();
            });
        }

        if (options.showProcess) {
            ctx.fillStyle = '#333333';
            ctx.font = 'bold 14px Arial';
            ctx.textAlign = 'center';
            ctx.textBaseline = 'top';
            ctx.fillText('Mixture → solid residue on paper,', x, fBotY + 130);
            ctx.fillText('liquid filtrate passes through.', x, fBotY + 147);
        }
    }

    renderDistillation(x, y, width, height, options) {
        const ctx = this.ctx;
        ctx.strokeStyle = '#000000';
        ctx.lineWidth = 2.5;

        // Round-bottom flask (left)
        const rbX = x - width * 0.35, rbY = y + height * 0.1;
        const rbR = 50;
        ctx.beginPath();
        ctx.arc(rbX, rbY, rbR, 0, Math.PI * 2);
        ctx.fillStyle = '#f8f8f8';
        ctx.fill();
        ctx.strokeStyle = '#000000';
        ctx.lineWidth = 2.5;
        ctx.stroke();

        // Neck of flask
        ctx.beginPath();
        ctx.moveTo(rbX - 15, rbY - rbR);
        ctx.lineTo(rbX - 15, rbY - rbR - 35);
        ctx.lineTo(rbX + 15, rbY - rbR - 35);
        ctx.lineTo(rbX + 15, rbY - rbR);
        ctx.stroke();

        // Heat source
        if (options.showHeatSource) {
            ctx.fillStyle = '#333333';
            ctx.font = '20px Arial';
            ctx.textAlign = 'center';
            ctx.fillText('🔥', rbX, rbY + rbR + 20);
            ctx.font = '11px Arial';
            ctx.fillText('Heat source', rbX, rbY + rbR + 38);
        }

        // Still head / Liebig condenser going diagonally right
        const condStartX = rbX + 20, condStartY = rbY - rbR - 20;
        const condEndX = x + width * 0.25, condEndY = y + height * 0.05;

        // Outer condenser jacket
        const angle = Math.atan2(condEndY - condStartY, condEndX - condStartX);
        const perpX = Math.sin(angle) * 12, perpY = -Math.cos(angle) * 12;

        ctx.fillStyle = '#eeeeee';
        ctx.beginPath();
        ctx.moveTo(condStartX + perpX, condStartY + perpY);
        ctx.lineTo(condEndX + perpX, condEndY + perpY);
        ctx.lineTo(condEndX - perpX, condEndY - perpY);
        ctx.lineTo(condStartX - perpX, condStartY - perpY);
        ctx.closePath();
        ctx.fill();
        ctx.strokeStyle = '#000000';
        ctx.lineWidth = 2;
        ctx.stroke();

        // Inner tube
        const innerPerp = 5;
        ctx.strokeStyle = '#555555';
        ctx.lineWidth = 1.5;
        ctx.beginPath();
        ctx.moveTo(condStartX + Math.sin(angle) * innerPerp, condStartY - Math.cos(angle) * innerPerp);
        ctx.lineTo(condEndX + Math.sin(angle) * innerPerp, condEndY - Math.cos(angle) * innerPerp);
        ctx.stroke();
        ctx.beginPath();
        ctx.moveTo(condStartX - Math.sin(angle) * innerPerp, condStartY + Math.cos(angle) * innerPerp);
        ctx.lineTo(condEndX - Math.sin(angle) * innerPerp, condEndY + Math.cos(angle) * innerPerp);
        ctx.stroke();

        // Water in/out labels
        ctx.fillStyle = '#000000';
        ctx.font = '11px Arial';
        ctx.textAlign = 'center';
        const midCX = (condStartX + condEndX) / 2, midCY = (condStartY + condEndY) / 2;
        ctx.fillText('Water in', midCX - 40, midCY + 25);
        ctx.fillText('Water out', midCX + 40, midCY - 20);

        // Collection flask (right)
        const cfX = condEndX + 10, cfY = condEndY + 60;
        ctx.strokeStyle = '#000000';
        ctx.lineWidth = 2.5;
        ctx.beginPath();
        ctx.moveTo(cfX - 8, cfY);
        ctx.lineTo(cfX - 35, cfY + 55);
        ctx.lineTo(cfX + 35, cfY + 55);
        ctx.lineTo(cfX + 8, cfY);
        ctx.stroke();
        ctx.beginPath();
        ctx.moveTo(cfX - 8, cfY);
        ctx.lineTo(cfX + 8, cfY);
        ctx.stroke();

        // Distillate
        ctx.fillStyle = '#dddddd';
        ctx.fillRect(cfX - 28, cfY + 35, 56, 16);

        // Thermometer
        ctx.strokeStyle = '#333333';
        ctx.lineWidth = 1.5;
        ctx.beginPath();
        ctx.moveTo(rbX - 5, rbY - rbR - 35);
        ctx.lineTo(rbX - 5, rbY - rbR - 80);
        ctx.stroke();
        ctx.beginPath();
        ctx.arc(rbX - 5, rbY - rbR - 80, 5, 0, Math.PI * 2);
        ctx.fillStyle = '#333333';
        ctx.fill();

        if (options.showLabels) {
            ctx.fillStyle = '#000000';
            ctx.font = '12px Arial';
            ctx.textAlign = 'center';
            ctx.textBaseline = 'top';
            ctx.fillText('Round-bottom flask', rbX, rbY + rbR + 45);
            ctx.fillText('Liebig condenser', midCX, midCY - 35);
            ctx.fillText('Distillate', cfX, cfY + 60);
        }
    }

    renderFractionalDistillation(x, y, width, height, options) {
        const ctx = this.ctx;

        // Flask
        const rbX = x - width * 0.15, rbY = y + height * 0.25;
        const rbR = 45;
        ctx.beginPath();
        ctx.arc(rbX, rbY, rbR, 0, Math.PI * 2);
        ctx.fillStyle = '#f8f8f8';
        ctx.fill();
        ctx.strokeStyle = '#000000';
        ctx.lineWidth = 2.5;
        ctx.stroke();

        // Fractionating column
        const colX1 = rbX - 10, colX2 = rbX + 10;
        const colBotY = rbY - rbR, colTopY = y - height * 0.4;
        ctx.fillStyle = '#eeeeee';
        ctx.fillRect(colX1, colTopY, colX2 - colX1, colBotY - colTopY);
        ctx.strokeStyle = '#000000';
        ctx.lineWidth = 2.5;
        ctx.strokeRect(colX1, colTopY, colX2 - colX1, colBotY - colTopY);

        // Glass beads / fractionating packing (if showColumn)
        if (options.showColumn) {
            ctx.strokeStyle = '#888888';
            ctx.lineWidth = 1;
            for (let i = 0; i < 6; i++) {
                const py = colBotY - 20 - i * 25;
                for (let j = 0; j < 2; j++) {
                    ctx.beginPath();
                    ctx.arc(colX1 + 10 + j * 8, py, 4, 0, Math.PI * 2);
                    ctx.stroke();
                }
            }
        }

        // Temperature labels on column
        const temps = ['bp₁ (lowest)', 'bp₂', 'bp₃ (highest)'];
        ctx.fillStyle = '#000000';
        ctx.font = '10px Arial';
        ctx.textAlign = 'left';
        ctx.textBaseline = 'middle';
        temps.forEach((t, i) => {
            const ty = colTopY + (i + 0.5) * (colBotY - colTopY) / 3;
            ctx.fillText(t, colX2 + 8, ty);
            ctx.strokeStyle = '#aaaaaa';
            ctx.lineWidth = 1;
            ctx.setLineDash([2, 2]);
            ctx.beginPath();
            ctx.moveTo(colX2, ty);
            ctx.lineTo(colX2 + 6, ty);
            ctx.stroke();
            ctx.setLineDash([]);
        });

        // Condenser (horizontal at top)
        const condY = colTopY - 8;
        ctx.fillStyle = '#dddddd';
        ctx.fillRect(colX2, condY - 8, 100, 16);
        ctx.strokeStyle = '#000000';
        ctx.lineWidth = 2;
        ctx.strokeRect(colX2, condY - 8, 100, 16);

        // Collection flask
        const cfX = colX2 + 115, cfY = condY;
        ctx.strokeStyle = '#000000';
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(cfX - 6, cfY - 5);
        ctx.lineTo(cfX - 25, cfY + 40);
        ctx.lineTo(cfX + 25, cfY + 40);
        ctx.lineTo(cfX + 6, cfY - 5);
        ctx.stroke();
        ctx.beginPath();
        ctx.moveTo(cfX - 6, cfY - 5);
        ctx.lineTo(cfX + 6, cfY - 5);
        ctx.stroke();

        // Heat
        ctx.fillStyle = '#333333';
        ctx.font = '18px Arial';
        ctx.textAlign = 'center';
        ctx.fillText('🔥', rbX, rbY + rbR + 18);

        if (options.showLabels) {
            ctx.font = '12px Arial';
            ctx.fillText('Flask with mixture', rbX, rbY + rbR + 35);
            ctx.fillText('Fractionating column', colX2 + 65, (colTopY + colBotY) / 2 + 30);
            ctx.fillText('Distillate', cfX, cfY + 50);
        }
    }

    renderSeparatingFunnel(x, y, width, height, options) {
        const ctx = this.ctx;
        ctx.strokeStyle = '#000000';
        ctx.lineWidth = 2.5;

        // Pear-shaped funnel body
        const funW = 60, funH = 110;
        const topY = y - funH / 2 - 20, botY = y + funH / 2 - 20;

        ctx.fillStyle = '#f8f8f8';
        ctx.beginPath();
        ctx.moveTo(x - 15, topY);
        ctx.lineTo(x - funW, topY + funH * 0.5);
        ctx.lineTo(x - 12, botY);
        ctx.lineTo(x + 12, botY);
        ctx.lineTo(x + funW, topY + funH * 0.5);
        ctx.lineTo(x + 15, topY);
        ctx.closePath();
        ctx.fill();
        ctx.stroke();

        // Top neck
        ctx.fillStyle = '#f0f0f0';
        ctx.fillRect(x - 10, topY - 25, 20, 30);
        ctx.strokeRect(x - 10, topY - 25, 20, 30);

        // Stopper
        ctx.fillStyle = '#888888';
        ctx.fillRect(x - 12, topY - 30, 24, 10);
        ctx.strokeRect(x - 12, topY - 30, 24, 10);

        // Two liquid layers inside
        if (options.showLayers) {
            // Upper layer (less dense - lighter shade)
            ctx.fillStyle = '#cccccc';
            ctx.beginPath();
            ctx.moveTo(x - funW + 10, topY + funH * 0.25);
            ctx.lineTo(x - funW + 5, topY + funH * 0.45);
            ctx.lineTo(x + funW - 5, topY + funH * 0.45);
            ctx.lineTo(x + funW - 10, topY + funH * 0.25);
            ctx.closePath();
            ctx.fill();

            // Lower layer (more dense - darker shade)
            ctx.fillStyle = '#888888';
            ctx.beginPath();
            ctx.moveTo(x - funW + 5, topY + funH * 0.45);
            ctx.lineTo(x - 18, botY - 5);
            ctx.lineTo(x + 18, botY - 5);
            ctx.lineTo(x + funW - 5, topY + funH * 0.45);
            ctx.closePath();
            ctx.fill();

            // Interface line
            ctx.strokeStyle = '#000000';
            ctx.lineWidth = 1.5;
            ctx.beginPath();
            ctx.moveTo(x - funW + 5, topY + funH * 0.45);
            ctx.lineTo(x + funW - 5, topY + funH * 0.45);
            ctx.stroke();
        }

        // Stopcock
        const tapY = botY + 8;
        ctx.fillStyle = '#555555';
        ctx.fillRect(x - 14, tapY, 28, 12);
        ctx.strokeStyle = '#000000';
        ctx.lineWidth = 1.5;
        ctx.strokeRect(x - 14, tapY, 28, 12);

        // Stem below stopcock
        ctx.strokeStyle = '#000000';
        ctx.lineWidth = 2.5;
        ctx.beginPath();
        ctx.moveTo(x - 8, tapY + 12);
        ctx.lineTo(x - 8, tapY + 45);
        ctx.lineTo(x + 8, tapY + 45);
        ctx.lineTo(x + 8, tapY + 12);
        ctx.stroke();

        if (options.showLabels) {
            ctx.fillStyle = '#000000';
            ctx.font = '12px Arial';
            ctx.textAlign = 'left';
            ctx.textBaseline = 'middle';
            ctx.fillText('Stopper', x + 18, topY - 25);
            ctx.fillText('Upper layer (less dense)', x + funW + 8, topY + funH * 0.35);
            ctx.fillText('Lower layer (more dense)', x + funW + 8, botY - 15);
            ctx.fillText('Stopcock', x + 20, tapY + 6);
        }
    }

    renderTitrationSetup(x, y, width, height, options) {
        const ctx = this.ctx;
        ctx.strokeStyle = '#000000';
        ctx.lineWidth = 2.5;

        // Burette (tall, narrow)
        const burX = x - 30;
        const burTopY = y - height * 0.42;
        const burBotY = y + height * 0.15;
        const burW = 16;

        if (options.showBurette) {
            ctx.fillStyle = '#f0f0f0';
            ctx.fillRect(burX - burW / 2, burTopY, burW, burBotY - burTopY);
            ctx.strokeRect(burX - burW / 2, burTopY, burW, burBotY - burTopY);

            // Liquid inside burette
            ctx.fillStyle = '#cccccc';
            ctx.fillRect(burX - burW / 2 + 2, burTopY + 10, burW - 4, (burBotY - burTopY) * 0.6);

            // Graduation marks
            ctx.strokeStyle = '#555555';
            ctx.lineWidth = 1;
            for (let i = 0; i <= 5; i++) {
                const my = burTopY + 10 + i * ((burBotY - burTopY - 20) / 5);
                ctx.beginPath();
                ctx.moveTo(burX + burW / 2, my);
                ctx.lineTo(burX + burW / 2 + 6, my);
                ctx.stroke();
                ctx.fillStyle = '#333333';
                ctx.font = '9px Arial';
                ctx.textAlign = 'left';
                ctx.fillText(`${i * 10}`, burX + burW / 2 + 8, my + 3);
            }

            // Stopcock
            ctx.fillStyle = '#555555';
            ctx.fillRect(burX - 12, burBotY, 24, 10);
            ctx.strokeStyle = '#000000';
            ctx.lineWidth = 1.5;
            ctx.strokeRect(burX - 12, burBotY, 24, 10);

            // Tip
            ctx.lineWidth = 2;
            ctx.beginPath();
            ctx.moveTo(burX - 4, burBotY + 10);
            ctx.lineTo(burX - 2, burBotY + 35);
            ctx.lineTo(burX + 2, burBotY + 35);
            ctx.lineTo(burX + 4, burBotY + 10);
            ctx.stroke();

            ctx.fillStyle = '#000000';
            ctx.font = '12px Arial';
            ctx.textAlign = 'center';
            ctx.fillText('Burette', burX, burTopY - 12);
        }

        // Conical flask below
        if (options.showFlask) {
            const flX = x + 10, flTopY = burBotY + 45, flH = 80, flW = 60;
            ctx.strokeStyle = '#000000';
            ctx.lineWidth = 2.5;
            ctx.fillStyle = '#ffffff';
            ctx.beginPath();
            ctx.moveTo(flX - 15, flTopY);
            ctx.lineTo(flX - flW, flTopY + flH);
            ctx.lineTo(flX + flW, flTopY + flH);
            ctx.lineTo(flX + 15, flTopY);
            ctx.closePath();
            ctx.fill();
            ctx.stroke();

            // Neck
            ctx.beginPath();
            ctx.moveTo(flX - 15, flTopY);
            ctx.lineTo(flX + 15, flTopY);
            ctx.stroke();

            // Solution inside
            ctx.fillStyle = '#e0e0e0';
            ctx.fillRect(flX - flW + 8, flTopY + flH - 35, (flW - 8) * 2, 30);

            ctx.fillStyle = '#000000';
            ctx.font = '12px Arial';
            ctx.textAlign = 'center';
            ctx.fillText('Conical flask', flX, flTopY + flH + 15);
            ctx.font = '11px Arial';
            ctx.fillStyle = '#444444';
            ctx.fillText('(analyte + indicator)', flX, flTopY + flH + 28);
        }

        // Stand
        ctx.strokeStyle = '#555555';
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(x + 60, y - height * 0.42);
        ctx.lineTo(x + 60, y + height * 0.45);
        ctx.stroke();
        ctx.beginPath();
        ctx.moveTo(x + 20, y - height * 0.42);
        ctx.lineTo(x + 80, y - height * 0.42);
        ctx.stroke();
        // Clamp
        ctx.beginPath();
        ctx.moveTo(x + 60, burTopY + 20);
        ctx.lineTo(burX + burW / 2, burTopY + 20);
        ctx.stroke();

        if (options.showLabels) {
            ctx.fillStyle = '#000000';
            ctx.font = '12px Arial';
            ctx.textAlign = 'left';
            ctx.fillText('Clamp and stand', x + 65, burTopY + 20);
            ctx.fillText('Stopcock', burX + 15, burBotY + 5);
        }
    }

    renderReflux(x, y, width, height, options) {
        const ctx = this.ctx;
        ctx.strokeStyle = '#000000';
        ctx.lineWidth = 2.5;

        // Round-bottom flask
        const rbY = y + height * 0.2;
        const rbR = 50;
        ctx.beginPath();
        ctx.arc(x, rbY, rbR, 0, Math.PI * 2);
        ctx.fillStyle = '#f8f8f8';
        ctx.fill();
        ctx.stroke();

        // Flask neck
        ctx.fillStyle = '#f0f0f0';
        ctx.fillRect(x - 12, rbY - rbR, 24, 35);
        ctx.strokeStyle = '#000000';
        ctx.lineWidth = 2.5;
        ctx.strokeRect(x - 12, rbY - rbR, 24, 35);

        // Liebig condenser (vertical)
        const condBotY = rbY - rbR + 15;
        const condTopY = y - height * 0.42;
        if (options.showCondenser) {
            // Outer jacket
            ctx.fillStyle = '#eeeeee';
            ctx.fillRect(x - 18, condTopY, 36, condBotY - condTopY);
            ctx.strokeStyle = '#000000';
            ctx.lineWidth = 2;
            ctx.strokeRect(x - 18, condTopY, 36, condBotY - condTopY);

            // Inner tube
            ctx.strokeStyle = '#777777';
            ctx.lineWidth = 1.5;
            ctx.strokeRect(x - 8, condTopY + 5, 16, condBotY - condTopY - 10);

            // Water in/out
            ctx.fillStyle = '#000000';
            ctx.font = '11px Arial';
            ctx.textAlign = 'left';
            ctx.fillText('Water out →', x + 22, condTopY + 30);
            ctx.fillText('← Water in', x + 22, condBotY - 30);
        }

        // Heat source
        ctx.font = '20px Arial';
        ctx.textAlign = 'center';
        ctx.fillText('🔥', x, rbY + rbR + 20);

        // Vapour up arrow inside condenser
        ctx.strokeStyle = '#555555';
        ctx.lineWidth = 1.5;
        ctx.setLineDash([3, 3]);
        ctx.beginPath();
        ctx.moveTo(x, rbY - rbR + 5);
        ctx.lineTo(x, condTopY + 20);
        ctx.stroke();
        ctx.setLineDash([]);
        ctx.fillStyle = '#555555';
        ctx.beginPath();
        ctx.moveTo(x, condTopY + 20);
        ctx.lineTo(x - 4, condTopY + 30);
        ctx.lineTo(x + 4, condTopY + 30);
        ctx.closePath();
        ctx.fill();

        ctx.fillStyle = '#000000';
        ctx.font = '11px Arial';
        ctx.textAlign = 'right';
        ctx.fillText('Vapour rises,', x - 22, condTopY + 45);
        ctx.fillText('condenses,', x - 22, condTopY + 58);
        ctx.fillText('returns to flask', x - 22, condTopY + 71);

        if (options.showLabels) {
            ctx.font = '12px Arial';
            ctx.textAlign = 'center';
            ctx.fillText('Round-bottom flask', x, rbY + rbR + 38);
            ctx.fillText('Vertical condenser', x + 80, (condTopY + condBotY) / 2);
        }
    }

    renderGasCollection(x, y, width, height, options) {
        const ctx = this.ctx;
        ctx.strokeStyle = '#000000';
        ctx.lineWidth = 2.5;

        // Trough of water
        const troughY = y + height * 0.15, troughW = width * 0.8, troughH = 60;
        ctx.fillStyle = '#dddddd';
        ctx.fillRect(x - troughW / 2, troughY, troughW, troughH);
        ctx.strokeRect(x - troughW / 2, troughY, troughW, troughH);

        // Water label
        ctx.fillStyle = '#000000';
        ctx.font = '12px Arial';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText('Water', x, troughY + troughH / 2);

        // Inverted test tube / gas jar
        const tubeX = x + 80, tubeW = 30, tubeH = 100;
        const tubeBotY = troughY + 8;
        const tubeTopY = tubeBotY - tubeH;

        ctx.fillStyle = '#f5f5f5';
        ctx.fillRect(tubeX - tubeW / 2, tubeTopY, tubeW, tubeH);
        ctx.strokeRect(tubeX - tubeW / 2, tubeTopY, tubeW, tubeH);

        // Round bottom (closed top, inverted = at top visually)
        ctx.beginPath();
        ctx.arc(tubeX, tubeTopY, tubeW / 2, Math.PI, 0);
        ctx.fill();
        ctx.stroke();

        // Gas collected inside (top portion)
        if (options.showGas) {
            ctx.fillStyle = '#f0f0f0';
            ctx.fillRect(tubeX - tubeW / 2 + 2, tubeTopY, tubeW - 4, tubeH * 0.5);
        }

        // Water level inside tube
        if (options.showWater) {
            ctx.fillStyle = '#cccccc';
            ctx.fillRect(tubeX - tubeW / 2 + 2, tubeTopY + tubeH * 0.5, tubeW - 4, tubeH * 0.45);
        }

        // Delivery tube from generator flask
        const genX = x - width * 0.3, genY = troughY - 30;
        ctx.beginPath();
        ctx.arc(genX, genY, 35, 0, Math.PI * 2);
        ctx.fillStyle = '#f8f8f8';
        ctx.fill();
        ctx.stroke();

        // Rubber delivery tube
        ctx.strokeStyle = '#333333';
        ctx.lineWidth = 3;
        ctx.beginPath();
        ctx.moveTo(genX + 30, genY - 10);
        ctx.quadraticCurveTo(x, troughY - 30, tubeX - tubeW / 2, troughY + 20);
        ctx.stroke();

        ctx.fillStyle = '#000000';
        ctx.font = '11px Arial';
        ctx.textAlign = 'center';
        ctx.fillText('Generator flask', genX, genY + 50);
        ctx.fillText('Delivery tube', x - 20, troughY - 38);
        ctx.fillText('Inverted tube', tubeX, tubeTopY - 12);

        if (options.showLabels) {
            ctx.font = 'bold 13px Arial';
            ctx.fillText('Collecting gas by water displacement', x, troughY + troughH + 20);
        }
    }

    renderHazardSymbols(diagram, x, y, width, height, options) {
        const { symbols } = diagram;
        const cols = 3, rows = Math.ceil(symbols.length / cols);
        const cellW = width / cols, cellH = height / rows;

        const symbolData = {
            flammable:  { label: 'Flammable',  icon: '🔥', desc: 'Keep away from flames' },
            corrosive:  { label: 'Corrosive',  icon: '⚗',  desc: 'Causes burns to skin' },
            toxic:      { label: 'Toxic',      icon: '☠',  desc: 'Harmful if inhaled/ingested' },
            oxidizing:  { label: 'Oxidising',  icon: '◎',  desc: 'Can cause fire/explosion' },
            explosive:  { label: 'Explosive',  icon: '💥', desc: 'Danger of explosion' },
            harmful:    { label: 'Harmful',    icon: '⚠',  desc: 'Irritant or harmful' }
        };

        symbols.forEach((sym, i) => {
            const col = i % cols, row = Math.floor(i / cols);
            const cx = x - width / 2 + col * cellW + cellW / 2;
            const cy = y - height / 2 + row * cellH + cellH / 2;
            const data = symbolData[sym] || { label: sym, icon: '?', desc: '' };

            // Diamond shape
            const dSize = Math.min(cellW, cellH) * 0.32;
            ctx2 = this.ctx;
            ctx2.save();
            ctx2.translate(cx, cy - 15);
            ctx2.rotate(Math.PI / 4);
            ctx2.fillStyle = '#f5f5f5';
            ctx2.fillRect(-dSize, -dSize, dSize * 2, dSize * 2);
            ctx2.strokeStyle = '#000000';
            ctx2.lineWidth = 2.5;
            ctx2.strokeRect(-dSize, -dSize, dSize * 2, dSize * 2);
            ctx2.restore();

            // Icon
            this.ctx.font = `${Math.min(28, dSize)}px Arial`;
            this.ctx.textAlign = 'center';
            this.ctx.textBaseline = 'middle';
            this.ctx.fillText(data.icon, cx, cy - 15);

            // Label
            this.ctx.fillStyle = '#000000';
            this.ctx.font = 'bold 12px Arial';
            this.ctx.fillText(data.label, cx, cy + 22);

            if (options.showDescriptions) {
                this.ctx.font = '10px Arial';
                this.ctx.fillStyle = '#444444';
                this.ctx.fillText(data.desc, cx, cy + 37);
            }

            // Cell border
            this.ctx.strokeStyle = '#cccccc';
            this.ctx.lineWidth = 1;
            this.ctx.strokeRect(x - width / 2 + col * cellW + 4, y - height / 2 + row * cellH + 4, cellW - 8, cellH - 8);
        });
    }

    renderGlasswareCollection(diagram, x, y, width, height, options) {
        const { items } = diagram;
        const colW = width / items.length;

        items.forEach((item, i) => {
            const cx = x - width / 2 + i * colW + colW / 2;
            const itemH = height * 0.6;
            const baseY = y + height * 0.3;

            this.ctx.strokeStyle = '#000000';
            this.ctx.lineWidth = 2;
            this.ctx.fillStyle = '#f8f8f8';

            switch (item) {
                case 'beaker':
                    this.ctx.fillRect(cx - 22, baseY - 65, 44, 65);
                    this.ctx.strokeRect(cx - 22, baseY - 65, 44, 65);
                    // Spout
                    this.ctx.beginPath();
                    this.ctx.moveTo(cx + 22, baseY - 65);
                    this.ctx.lineTo(cx + 28, baseY - 72);
                    this.ctx.stroke();
                    break;
                case 'flask':
                    this.ctx.beginPath();
                    this.ctx.moveTo(cx - 8, baseY - 75);
                    this.ctx.lineTo(cx - 30, baseY - 20);
                    this.ctx.lineTo(cx - 30, baseY);
                    this.ctx.lineTo(cx + 30, baseY);
                    this.ctx.lineTo(cx + 30, baseY - 20);
                    this.ctx.lineTo(cx + 8, baseY - 75);
                    this.ctx.closePath();
                    this.ctx.fill();
                    this.ctx.stroke();
                    this.ctx.beginPath();
                    this.ctx.moveTo(cx - 8, baseY - 75);
                    this.ctx.lineTo(cx + 8, baseY - 75);
                    this.ctx.stroke();
                    break;
                case 'cylinder':
                    this.ctx.fillRect(cx - 12, baseY - 80, 24, 80);
                    this.ctx.strokeRect(cx - 12, baseY - 80, 24, 80);
                    // Graduation lines
                    for (let g = 1; g < 4; g++) {
                        this.ctx.strokeStyle = '#888888';
                        this.ctx.lineWidth = 0.8;
                        this.ctx.beginPath();
                        this.ctx.moveTo(cx - 12, baseY - 20 * g);
                        this.ctx.lineTo(cx - 5, baseY - 20 * g);
                        this.ctx.stroke();
                    }
                    this.ctx.strokeStyle = '#000000';
                    this.ctx.lineWidth = 2;
                    break;
                case 'burette':
                    this.ctx.fillRect(cx - 7, baseY - 90, 14, 85);
                    this.ctx.strokeRect(cx - 7, baseY - 90, 14, 85);
                    // Stopcock
                    this.ctx.fillStyle = '#555555';
                    this.ctx.fillRect(cx - 10, baseY - 10, 20, 8);
                    this.ctx.strokeRect(cx - 10, baseY - 10, 20, 8);
                    // Tip
                    this.ctx.fillStyle = '#f8f8f8';
                    this.ctx.strokeStyle = '#000000';
                    this.ctx.beginPath();
                    this.ctx.moveTo(cx - 3, baseY - 2);
                    this.ctx.lineTo(cx - 2, baseY + 18);
                    this.ctx.lineTo(cx + 2, baseY + 18);
                    this.ctx.lineTo(cx + 3, baseY - 2);
                    this.ctx.stroke();
                    break;
                case 'pipette':
                    this.ctx.beginPath();
                    this.ctx.ellipse(cx, baseY - 70, 12, 18, 0, 0, Math.PI * 2);
                    this.ctx.fill();
                    this.ctx.stroke();
                    this.ctx.beginPath();
                    this.ctx.moveTo(cx - 5, baseY - 52);
                    this.ctx.lineTo(cx - 2, baseY);
                    this.ctx.lineTo(cx + 2, baseY);
                    this.ctx.lineTo(cx + 5, baseY - 52);
                    this.ctx.stroke();
                    break;
                case 'test_tube':
                    this.ctx.fillRect(cx - 10, baseY - 70, 20, 55);
                    this.ctx.strokeRect(cx - 10, baseY - 70, 20, 55);
                    this.ctx.beginPath();
                    this.ctx.arc(cx, baseY - 15, 10, 0, Math.PI);
                    this.ctx.fill();
                    this.ctx.stroke();
                    break;
            }

            if (options.showLabels) {
                this.ctx.fillStyle = '#000000';
                this.ctx.font = '11px Arial';
                this.ctx.textAlign = 'center';
                this.ctx.textBaseline = 'top';
                this.ctx.fillText(item.replace('_', ' ').replace(/^\w/, c => c.toUpperCase()), cx, baseY + 10);
            }

            if (options.showVolumes) {
                const vols = { beaker: '250 mL', flask: '250 mL', cylinder: '100 mL', burette: '50 mL', pipette: '25 mL', test_tube: '20 mL' };
                this.ctx.fillStyle = '#555555';
                this.ctx.font = '10px Arial';
                this.ctx.fillText(vols[item] || '', cx, baseY + 23);
            }
        });
    }

    renderSafetyEquipment(diagram, x, y, width, height, options) {
        const { items } = diagram;
        const cols = 3, rows = Math.ceil(items.length / cols);
        const cellW = width / cols, cellH = height / rows;

        const safetyData = {
            goggles:          { icon: '🥽', name: 'Safety Goggles',      usage: 'Protect eyes from splashes' },
            gloves:           { icon: '🧤', name: 'Gloves',              usage: 'Protect hands from chemicals' },
            lab_coat:         { icon: '🥼', name: 'Lab Coat',            usage: 'Protect skin and clothing' },
            fire_extinguisher:{ icon: '🧯', name: 'Fire Extinguisher',   usage: 'Extinguish fires' },
            eye_wash:         { icon: '👁',  name: 'Eye Wash Station',   usage: 'Flush eyes with water' },
            fume_hood:        { icon: '🏭', name: 'Fume Hood',           usage: 'Remove harmful vapours' }
        };

        items.forEach((item, i) => {
            const col = i % cols, row = Math.floor(i / cols);
            const cx = x - width / 2 + col * cellW + cellW / 2;
            const cy = y - height / 2 + row * cellH + cellH / 2;
            const data = safetyData[item] || { icon: '?', name: item, usage: '' };

            // Cell
            this.ctx.fillStyle = i % 2 === 0 ? '#f5f5f5' : '#ffffff';
            this.ctx.fillRect(x - width / 2 + col * cellW + 5, y - height / 2 + row * cellH + 5, cellW - 10, cellH - 10);
            this.ctx.strokeStyle = '#000000';
            this.ctx.lineWidth = 1.5;
            this.ctx.strokeRect(x - width / 2 + col * cellW + 5, y - height / 2 + row * cellH + 5, cellW - 10, cellH - 10);

            // Icon
            this.ctx.font = '32px Arial';
            this.ctx.textAlign = 'center';
            this.ctx.textBaseline = 'middle';
            this.ctx.fillText(data.icon, cx, cy - 18);

            // Name
            this.ctx.fillStyle = '#000000';
            this.ctx.font = 'bold 12px Arial';
            this.ctx.fillText(data.name, cx, cy + 12);

            // Usage
            if (options.showUsage) {
                this.ctx.font = '10px Arial';
                this.ctx.fillStyle = '#444444';
                this.ctx.fillText(data.usage, cx, cy + 27);
            }
        });
    }

    // ========== STOICHIOMETRY RENDERERS ==========

    renderTriangle(diagram, x, y, size, options) {
        const { type, variables } = diagram;

        // Large equilateral triangle
        const h = size * Math.sqrt(3) / 2;
        const pts = [
            [x, y - h * 0.67],
            [x - size / 2, y + h * 0.33],
            [x + size / 2, y + h * 0.33]
        ];

        // Draw filled sections with division line
        this.ctx.strokeStyle = '#000000';
        this.ctx.lineWidth = 3;
        this.ctx.fillStyle = '#f5f5f5';
        this.ctx.beginPath();
        pts.forEach(([px, py], i) => i === 0 ? this.ctx.moveTo(px, py) : this.ctx.lineTo(px, py));
        this.ctx.closePath();
        this.ctx.fill();
        this.ctx.stroke();

        // Horizontal dividing line (top third = top variable, bottom = two side variables)
        const divY = y + h * 0.33 - h * 0.5;
        this.ctx.strokeStyle = '#000000';
        this.ctx.lineWidth = 2.5;
        this.ctx.beginPath();
        const leftX = x - size * 0.25;
        const rightX = x + size * 0.25;
        this.ctx.moveTo(leftX, divY);
        this.ctx.lineTo(rightX, divY);
        this.ctx.stroke();

        // Vertical dividing line (bottom half)
        this.ctx.beginPath();
        this.ctx.moveTo(x, divY);
        this.ctx.lineTo(x, y + h * 0.33);
        this.ctx.stroke();

        // Variable labels
        const labels = variables || ['?', '?', '?'];
        const topLabel = labels[0], leftLabel = labels[1], rightLabel = labels[2];

        this.ctx.fillStyle = '#000000';
        this.ctx.font = 'bold 18px Arial';
        this.ctx.textAlign = 'center';
        this.ctx.textBaseline = 'middle';
        this.ctx.fillText(topLabel, x, (pts[0][1] + divY) / 2);
        this.ctx.fillText(leftLabel, (pts[1][0] + x) / 2, (divY + pts[1][1]) / 2);
        this.ctx.fillText(rightLabel, (pts[2][0] + x) / 2, (divY + pts[2][1]) / 2);

        // Formulas
        if (options.showFormulas) {
            this.ctx.font = '12px Arial';
            this.ctx.fillStyle = '#333333';
            this.ctx.textBaseline = 'top';

            let f1, f2, f3;
            if (type === 'mole_triangle') {
                f1 = 'moles = mass ÷ Mᵣ';
                f2 = 'mass = moles × Mᵣ';
                f3 = 'Mᵣ = mass ÷ moles';
            } else if (type === 'gas_triangle') {
                f1 = 'moles = vol ÷ 24';
                f2 = 'vol = moles × 24';
                f3 = '24 dm³ mol⁻¹';
            } else {
                f1 = 'moles = particles ÷ Nₐ';
                f2 = 'particles = moles × Nₐ';
                f3 = 'Nₐ = 6.022 × 10²³';
            }
            this.ctx.fillText(f1, x - size / 2, y + h * 0.33 + 20);
            this.ctx.fillText(f2, x - size / 2, y + h * 0.33 + 36);
            this.ctx.fillText(f3, x - size / 2, y + h * 0.33 + 52);
        }

        // Cover to use instructions
        this.ctx.fillStyle = '#000000';
        this.ctx.font = 'italic 12px Arial';
        this.ctx.textAlign = 'center';
        this.ctx.textBaseline = 'top';
        this.ctx.fillText('Cover the quantity you want → formula appears', x, y + h * 0.33 + 72);
    }

    renderConversionMap(diagram, x, y, width, height, options) {
        const { units } = diagram;

        // Central "moles" box
        const boxW = 100, boxH = 40;
        const centerX = x, centerY = y;

        const drawBox = (bx, by, label) => {
            this.ctx.fillStyle = '#f0f0f0';
            this.ctx.fillRect(bx - boxW / 2, by - boxH / 2, boxW, boxH);
            this.ctx.strokeStyle = '#000000';
            this.ctx.lineWidth = 2;
            this.ctx.strokeRect(bx - boxW / 2, by - boxH / 2, boxW, boxH);
            this.ctx.fillStyle = '#000000';
            this.ctx.font = 'bold 14px Arial';
            this.ctx.textAlign = 'center';
            this.ctx.textBaseline = 'middle';
            this.ctx.fillText(label, bx, by);
        };

        // Surrounding boxes
        const positions = {
            mass:      [centerX - width * 0.35, centerY - height * 0.28],
            moles:     [centerX, centerY],
            volume:    [centerX + width * 0.35, centerY - height * 0.28],
            particles: [centerX, centerY + height * 0.38]
        };

        // Draw conversion arrows first
        const conversions = [
            { from: 'mass', to: 'moles', fwd: '÷ Mᵣ', rev: '× Mᵣ' },
            { from: 'moles', to: 'volume', fwd: '× 24', rev: '÷ 24' },
            { from: 'moles', to: 'particles', fwd: '× Nₐ', rev: '÷ Nₐ' }
        ];

        conversions.forEach(conv => {
            const [x1, y1] = positions[conv.from];
            const [x2, y2] = positions[conv.to];
            const mx = (x1 + x2) / 2, my = (y1 + y2) / 2;

            // Forward arrow
            this.ctx.strokeStyle = '#000000';
            this.ctx.fillStyle = '#000000';
            this.ctx.lineWidth = 2;
            this.ctx.beginPath();
            this.ctx.moveTo(x1, y1);
            this.ctx.lineTo(x2, y2);
            this.ctx.stroke();

            const angle = Math.atan2(y2 - y1, x2 - x1);
            this.ctx.beginPath();
            this.ctx.moveTo(x2, y2);
            this.ctx.lineTo(x2 - 12 * Math.cos(angle - 0.35), y2 - 12 * Math.sin(angle - 0.35));
            this.ctx.lineTo(x2 - 12 * Math.cos(angle + 0.35), y2 - 12 * Math.sin(angle + 0.35));
            this.ctx.closePath();
            this.ctx.fill();

            // Labels
            const perpX = -Math.sin(angle) * 18, perpY = Math.cos(angle) * 18;
            this.ctx.font = '11px Arial';
            this.ctx.textAlign = 'center';
            this.ctx.textBaseline = 'middle';
            this.ctx.fillText(conv.fwd, mx + perpX, my + perpY);
            this.ctx.fillStyle = '#666666';
            this.ctx.fillText(conv.rev, mx - perpX, my - perpY);
            this.ctx.fillStyle = '#000000';
        });

        // Draw boxes on top
        Object.entries(positions).forEach(([name, [bx, by]]) => {
            drawBox(bx, by, name.charAt(0).toUpperCase() + name.slice(1));
        });

        // Title note
        this.ctx.fillStyle = '#000000';
        this.ctx.font = 'bold 13px Arial';
        this.ctx.textAlign = 'center';
        this.ctx.textBaseline = 'top';
        this.ctx.fillText('Stoichiometry Conversion Map', x, y + height * 0.48);
    }

    renderStoichiometricRatio(diagram, x, y, width, height, options) {
        const { equation } = diagram;

        // Balanced equation display
        this.ctx.fillStyle = '#000000';
        this.ctx.font = 'bold 16px Arial';
        this.ctx.textAlign = 'center';
        this.ctx.textBaseline = 'top';
        this.ctx.fillText(equation, x, y - height / 2 + 10);

        // Table
        const species = ['2H₂', 'O₂', '2H₂O'];
        const ratios = ['2', '1', '2'];
        const moles = ['2 mol', '1 mol', '2 mol'];
        const colW = width / species.length;
        const rowH = 40;
        const tableY = y - height / 2 + 50;

        const headers = ['Species', 'Coefficient', 'Mole Ratio'];

        headers.forEach((hdr, ri) => {
            const ry = tableY + ri * rowH;
            this.ctx.fillStyle = ri === 0 ? '#222222' : (ri % 2 === 0 ? '#f5f5f5' : '#ffffff');
            this.ctx.fillRect(x - width / 2, ry, width, rowH);
            this.ctx.strokeStyle = '#000000';
            this.ctx.lineWidth = 1.5;
            this.ctx.strokeRect(x - width / 2, ry, width, rowH);

            // Row header
            this.ctx.fillStyle = ri === 0 ? '#ffffff' : '#000000';
            this.ctx.font = ri === 0 ? 'bold 13px Arial' : '13px Arial';
            this.ctx.textAlign = 'left';
            this.ctx.textBaseline = 'middle';
            this.ctx.fillText(hdr, x - width / 2 + 12, ry + rowH / 2);

            // Data cells
            const data = ri === 0 ? species : ri === 1 ? ratios : moles;
            data.forEach((val, ci) => {
                const cx2 = x - width / 2 + (ci + 0.5) * (width * 0.75 / species.length) + width * 0.25;
                this.ctx.textAlign = 'center';
                this.ctx.fillText(val, cx2, ry + rowH / 2);
            });
        });

        // Outer border
        this.ctx.strokeStyle = '#000000';
        this.ctx.lineWidth = 2.5;
        this.ctx.strokeRect(x - width / 2, tableY, width, headers.length * rowH);

        // Note
        this.ctx.fillStyle = '#333333';
        this.ctx.font = '12px Arial';
        this.ctx.textAlign = 'center';
        this.ctx.textBaseline = 'top';
        this.ctx.fillText('Mole ratio reflects coefficients in balanced equation.', x, tableY + headers.length * rowH + 12);
    }

    renderLimitingReagent(diagram, x, y, width, height, options) {
        const { reaction, H2_amount, Cl2_amount } = diagram;

        this.ctx.fillStyle = '#000000';
        this.ctx.font = 'bold 14px Arial';
        this.ctx.textAlign = 'center';
        this.ctx.textBaseline = 'top';
        this.ctx.fillText(reaction, x, y - height / 2 + 5);

        // Particle grid: show H2 and Cl2 molecules
        const particleR = 14;
        const startY = y - height / 2 + 45;

        // H2 section
        this.ctx.fillStyle = '#000000';
        this.ctx.font = 'bold 13px Arial';
        this.ctx.textAlign = 'left';
        this.ctx.fillText('H₂ molecules:', x - width / 2 + 10, startY);
        for (let i = 0; i < (H2_amount || 3); i++) {
            const px = x - width / 2 + 30 + i * (particleR * 2 + 10);
            const py = startY + 28;
            this.ctx.beginPath();
            this.ctx.arc(px, py, particleR, 0, Math.PI * 2);
            this.ctx.fillStyle = '#ffffff';
            this.ctx.fill();
            this.ctx.strokeStyle = '#000000';
            this.ctx.lineWidth = 2;
            this.ctx.stroke();
            this.ctx.fillStyle = '#000000';
            this.ctx.font = 'bold 10px Arial';
            this.ctx.textAlign = 'center';
            this.ctx.textBaseline = 'middle';
            this.ctx.fillText('H₂', px, py);
        }

        // Cl2 section
        this.ctx.font = 'bold 13px Arial';
        this.ctx.textAlign = 'left';
        this.ctx.fillText('Cl₂ molecules:', x - width / 2 + 10, startY + 65);
        for (let i = 0; i < (Cl2_amount || 5); i++) {
            const px = x - width / 2 + 30 + i * (particleR * 2 + 10);
            const py = startY + 93;
            this.ctx.beginPath();
            this.ctx.arc(px, py, particleR, 0, Math.PI * 2);
            this.ctx.fillStyle = '#dddddd';
            this.ctx.fill();
            this.ctx.strokeStyle = '#000000';
            this.ctx.lineWidth = 2;
            this.ctx.stroke();
            this.ctx.fillStyle = '#000000';
            this.ctx.font = 'bold 10px Arial';
            this.ctx.textAlign = 'center';
            this.ctx.textBaseline = 'middle';
            this.ctx.fillText('Cl₂', px, py);
        }

        // Limiting reagent annotation
        this.ctx.fillStyle = '#000000';
        this.ctx.font = 'bold 13px Arial';
        this.ctx.textAlign = 'left';
        this.ctx.textBaseline = 'top';
        this.ctx.fillText('Limiting reagent: H₂ (only 3 mol available)', x - width / 2 + 10, startY + 120);
        this.ctx.font = '12px Arial';
        this.ctx.fillStyle = '#333333';
        this.ctx.fillText('Excess reagent: Cl₂ (2 mol remain unreacted)', x - width / 2 + 10, startY + 138);

        if (options.showCalculations) {
            this.ctx.fillText('3 mol H₂ + 3 mol Cl₂ → 6 mol HCl  (2 mol Cl₂ in excess)', x - width / 2 + 10, startY + 158);
        }
    }

    renderLimitingBar(diagram, x, y, width, height, options) {
        const { reactants, amounts, ratio } = diagram;
        const maxAmt = Math.max(...amounts);
        const barW = (width * 0.55) / reactants.length;
        const maxH = height * 0.65;
        const baseY = y + height * 0.3;

        reactants.forEach((reactant, i) => {
            const bx = x - width * 0.28 + i * (barW + 30);
            const avH = (amounts[i] / maxAmt) * maxH;
            const reqH = ratio ? ((ratio[i] / Math.max(...ratio)) * maxH * 0.8) : avH;

            // Available bar
            if (options.showAvailable) {
                this.ctx.fillStyle = '#888888';
                this.ctx.fillRect(bx, baseY - avH, barW, avH);
                this.ctx.strokeStyle = '#000000';
                this.ctx.lineWidth = 2;
                this.ctx.strokeRect(bx, baseY - avH, barW, avH);
                this.ctx.fillStyle = '#000000';
                this.ctx.font = 'bold 12px Arial';
                this.ctx.textAlign = 'center';
                this.ctx.textBaseline = 'bottom';
                this.ctx.fillText(`${amounts[i]}`, bx + barW / 2, baseY - avH - 3);
            }

            // Required bar (dashed border)
            if (options.showRequired && ratio) {
                this.ctx.strokeStyle = '#333333';
                this.ctx.lineWidth = 2;
                this.ctx.setLineDash([5, 4]);
                this.ctx.strokeRect(bx - barW * 0.15, baseY - reqH, barW * 1.3, reqH);
                this.ctx.setLineDash([]);
                this.ctx.font = '11px Arial';
                this.ctx.fillText(`req: ${ratio[i]}`, bx + barW / 2, baseY - reqH - 3);
            }

            // Label
            this.ctx.font = 'bold 13px Arial';
            this.ctx.textBaseline = 'top';
            this.ctx.fillText(reactant, bx + barW / 2, baseY + 6);
        });

        // Axes
        this.ctx.strokeStyle = '#000000';
        this.ctx.lineWidth = 2;
        this.ctx.beginPath();
        this.ctx.moveTo(x - width * 0.32, y - height * 0.35);
        this.ctx.lineTo(x - width * 0.32, baseY);
        this.ctx.lineTo(x + width * 0.4, baseY);
        this.ctx.stroke();

        // Legend
        this.ctx.fillStyle = '#444444';
        this.ctx.fillRect(x + width * 0.15, y - height * 0.3, 20, 14);
        this.ctx.fillStyle = '#000000';
        this.ctx.font = '11px Arial';
        this.ctx.textAlign = 'left';
        this.ctx.fillText('Available', x + width * 0.15 + 25, y - height * 0.3 + 10);

        this.ctx.strokeStyle = '#333333';
        this.ctx.lineWidth = 1.5;
        this.ctx.setLineDash([4, 3]);
        this.ctx.strokeRect(x + width * 0.15, y - height * 0.22, 20, 14);
        this.ctx.setLineDash([]);
        this.ctx.fillText('Required', x + width * 0.15 + 25, y - height * 0.22 + 10);
    }

    renderYieldDiagram(diagram, x, y, width, height, options) {
        const { theoretical, actual } = diagram;
        const pctYield = ((actual / theoretical) * 100).toFixed(1);
        const maxH = height * 0.6;
        const barW = width * 0.2;
        const baseY = y + height * 0.28;

        const bars = [
            { label: 'Theoretical\nYield', value: theoretical, fill: '#555555' },
            { label: 'Actual\nYield', value: actual, fill: '#aaaaaa' }
        ];

        bars.forEach((bar, i) => {
            const bx = x - width * 0.2 + i * (barW + width * 0.2);
            const bh = (bar.value / theoretical) * maxH;

            this.ctx.fillStyle = bar.fill;
            this.ctx.fillRect(bx - barW / 2, baseY - bh, barW, bh);
            this.ctx.strokeStyle = '#000000';
            this.ctx.lineWidth = 2;
            this.ctx.strokeRect(bx - barW / 2, baseY - bh, barW, bh);

            // Value
            this.ctx.fillStyle = '#000000';
            this.ctx.font = 'bold 14px Arial';
            this.ctx.textAlign = 'center';
            this.ctx.textBaseline = 'bottom';
            this.ctx.fillText(`${bar.value} g`, bx, baseY - bh - 4);

            // Label
            this.ctx.font = '12px Arial';
            this.ctx.textBaseline = 'top';
            bar.label.split('\n').forEach((l, li) => this.ctx.fillText(l, bx, baseY + 6 + li * 16));
        });

        // Axis
        this.ctx.strokeStyle = '#000000';
        this.ctx.lineWidth = 2;
        this.ctx.beginPath();
        this.ctx.moveTo(x - width * 0.35, baseY - maxH - 10);
        this.ctx.lineTo(x - width * 0.35, baseY);
        this.ctx.lineTo(x + width * 0.35, baseY);
        this.ctx.stroke();

        // % yield annotation
        if (options.showPercentage) {
            this.ctx.fillStyle = '#000000';
            this.ctx.font = 'bold 20px Arial';
            this.ctx.textAlign = 'center';
            this.ctx.textBaseline = 'top';
            this.ctx.fillText(`% Yield = ${pctYield}%`, x, baseY + 52);
            this.ctx.font = '13px Arial';
            this.ctx.fillStyle = '#444444';
            this.ctx.fillText(`= (${actual} ÷ ${theoretical}) × 100`, x, baseY + 76);
        }
    }

    renderEmpiricalFormula(diagram, x, y, width, height, options) {
        const { elements } = diagram;
        const entries = Object.entries(elements);
        const colW = width / entries.length;

        // Step headers
        const steps = ['% by mass', '÷ Mᵣ = moles', 'Divide by smallest', 'Ratio'];
        const rowH = 42;
        const tableY = y - height / 2 + 20;

        // Column headers (elements)
        entries.forEach(([el], ci) => {
            const cx = x - width / 2 + ci * colW + colW / 2;
            this.ctx.fillStyle = '#222222';
            this.ctx.fillRect(x - width / 2 + ci * colW, tableY - 30, colW, 28);
            this.ctx.fillStyle = '#ffffff';
            this.ctx.font = 'bold 14px Arial';
            this.ctx.textAlign = 'center';
            this.ctx.textBaseline = 'middle';
            this.ctx.fillText(el, cx, tableY - 16);
        });

        // Row labels
        steps.forEach((step, ri) => {
            const ry = tableY + ri * rowH;
            this.ctx.fillStyle = ri % 2 === 0 ? '#f5f5f5' : '#ffffff';
            this.ctx.fillRect(x - width / 2, ry, width, rowH);
            this.ctx.strokeStyle = '#cccccc';
            this.ctx.lineWidth = 1;
            this.ctx.strokeRect(x - width / 2, ry, width, rowH);

            this.ctx.fillStyle = '#555555';
            this.ctx.font = 'italic 11px Arial';
            this.ctx.textAlign = 'left';
            this.ctx.textBaseline = 'top';
            this.ctx.fillText(step, x - width / 2 + 4, ry + 4);

            entries.forEach(([el, pct], ci) => {
                const cx = x - width / 2 + ci * colW + colW / 2;
                const moles = pct / { C: 12, H: 1, O: 16, N: 14, S: 32, Cl: 35.5 }[el];
                const allMoles = entries.map(([e, p]) => p / ({ C: 12, H: 1, O: 16, N: 14, S: 32, Cl: 35.5 }[e] || 12));
                const minMoles = Math.min(...allMoles);

                let val = '';
                if (ri === 0) val = `${pct}%`;
                else if (ri === 1) val = moles.toFixed(2);
                else if (ri === 2) val = (moles / minMoles).toFixed(2);
                else val = Math.round(moles / minMoles).toString();

                this.ctx.fillStyle = '#000000';
                this.ctx.font = ri === 3 ? 'bold 16px Arial' : '13px Arial';
                this.ctx.textAlign = 'center';
                this.ctx.textBaseline = 'middle';
                this.ctx.fillText(val, cx, ry + rowH / 2);
            });
        });

        // Outer border
        this.ctx.strokeStyle = '#000000';
        this.ctx.lineWidth = 2.5;
        this.ctx.strokeRect(x - width / 2, tableY - 30, width, steps.length * rowH + 30);

        // Result
        const ratios = entries.map(([el, pct]) => {
            const moles = pct / ({ C: 12, H: 1, O: 16, N: 14, S: 32, Cl: 35.5 }[el] || 12);
            return moles;
        });
        const minR = Math.min(...ratios);
        const formula = entries.map(([el], i) => `${el}${Math.round(ratios[i] / minR) !== 1 ? Math.round(ratios[i] / minR) : ''}`).join('');

        this.ctx.fillStyle = '#000000';
        this.ctx.font = 'bold 16px Arial';
        this.ctx.textAlign = 'center';
        this.ctx.textBaseline = 'top';
        this.ctx.fillText(`Empirical Formula: ${formula}`, x, tableY + steps.length * rowH + 12);
    }

    renderCompositionPie(diagram, x, y, size, options) {
        const { compound, composition } = diagram;
        const entries = Object.entries(composition);

        let startAngle = -Math.PI / 2;
        const fills = ['#333333', '#aaaaaa', '#666666', '#bbbbbb'];
        const patterns = [];

        entries.forEach(([el, pct], i) => {
            const sliceAngle = (pct / 100) * Math.PI * 2;

            this.ctx.beginPath();
            this.ctx.moveTo(x, y);
            this.ctx.arc(x, y, size, startAngle, startAngle + sliceAngle);
            this.ctx.closePath();
            this.ctx.fillStyle = fills[i % fills.length];
            this.ctx.fill();
            this.ctx.strokeStyle = '#ffffff';
            this.ctx.lineWidth = 3;
            this.ctx.stroke();

            // Label inside slice
            const midAngle = startAngle + sliceAngle / 2;
            const lx = x + Math.cos(midAngle) * size * 0.65;
            const ly = y + Math.sin(midAngle) * size * 0.65;
            this.ctx.fillStyle = '#ffffff';
            this.ctx.font = 'bold 13px Arial';
            this.ctx.textAlign = 'center';
            this.ctx.textBaseline = 'middle';
            this.ctx.fillText(`${pct}%`, lx, ly);

            patterns.push({ el, pct, fill: fills[i % fills.length], midAngle, startAngle });
            startAngle += sliceAngle;
        });

        // Outer border
        this.ctx.strokeStyle = '#000000';
        this.ctx.lineWidth = 2.5;
        this.ctx.beginPath();
        this.ctx.arc(x, y, size, 0, Math.PI * 2);
        this.ctx.stroke();

        // Legend
        if (options.showLegend) {
            const legX = x + size + 20, legY = y - entries.length * 14;
            entries.forEach(([el, pct], i) => {
                this.ctx.fillStyle = fills[i % fills.length];
                this.ctx.fillRect(legX, legY + i * 28, 18, 18);
                this.ctx.strokeStyle = '#000000';
                this.ctx.lineWidth = 1;
                this.ctx.strokeRect(legX, legY + i * 28, 18, 18);
                this.ctx.fillStyle = '#000000';
                this.ctx.font = '13px Arial';
                this.ctx.textAlign = 'left';
                this.ctx.textBaseline = 'middle';
                this.ctx.fillText(`${el}: ${pct}%`, legX + 24, legY + i * 28 + 9);
            });
        }

        // Title
        this.ctx.fillStyle = '#000000';
        this.ctx.font = 'bold 14px Arial';
        this.ctx.textAlign = 'center';
        this.ctx.textBaseline = 'top';
        this.ctx.fillText(`% Composition of ${compound}`, x, y + size + 16);
    }

    renderMolarity(diagram, x, y, width, height, options) {
        const { moles, volume } = diagram;
        const molarity = moles / volume;

        // Beaker
        const bW = width * 0.55, bH = height * 0.6;
        this.ctx.fillStyle = '#f8f8f8';
        this.ctx.fillRect(x - bW / 2, y - bH / 2, bW, bH);
        this.ctx.strokeStyle = '#000000';
        this.ctx.lineWidth = 3;
        this.ctx.strokeRect(x - bW / 2, y - bH / 2, bW, bH);
        // Beaker spout
        this.ctx.lineWidth = 2.5;
        this.ctx.beginPath();
        this.ctx.moveTo(x + bW / 2, y - bH / 2);
        this.ctx.lineTo(x + bW / 2 + 8, y - bH / 2 - 8);
        this.ctx.stroke();

        // Solution fill
        this.ctx.fillStyle = '#dddddd';
        this.ctx.fillRect(x - bW / 2 + 4, y, bW - 8, bH / 2 - 4);

        // Particles (dots) representing solute
        if (options.showParticles) {
            for (let i = 0; i < moles * 8; i++) {
                const px = x - bW / 2 + 20 + Math.random() * (bW - 40);
                const py = y + 10 + Math.random() * (bH / 2 - 25);
                this.ctx.beginPath();
                this.ctx.arc(px, py, 4, 0, Math.PI * 2);
                this.ctx.fillStyle = '#333333';
                this.ctx.fill();
            }
        }

        // Volume label
        this.ctx.fillStyle = '#000000';
        this.ctx.font = '12px Arial';
        this.ctx.textAlign = 'right';
        this.ctx.textBaseline = 'middle';
        this.ctx.setLineDash([3, 3]);
        this.ctx.strokeStyle = '#555555';
        this.ctx.lineWidth = 1;
        this.ctx.beginPath();
        this.ctx.moveTo(x - bW / 2, y);
        this.ctx.lineTo(x - bW / 2 - 5, y);
        this.ctx.stroke();
        this.ctx.setLineDash([]);
        this.ctx.fillText(`${volume} L`, x - bW / 2 - 8, y);

        // Formula
        if (options.showFormula) {
            this.ctx.fillStyle = '#000000';
            this.ctx.font = 'bold 15px Arial';
            this.ctx.textAlign = 'center';
            this.ctx.textBaseline = 'top';
            this.ctx.fillText('M = moles ÷ volume', x, y + bH / 2 + 12);
            this.ctx.font = 'bold 17px Arial';
            this.ctx.fillText(`M = ${moles} ÷ ${volume} = ${molarity.toFixed(2)} mol dm⁻³`, x, y + bH / 2 + 30);
        }

        // Moles label above solution
        this.ctx.font = '13px Arial';
        this.ctx.textAlign = 'center';
        this.ctx.textBaseline = 'middle';
        this.ctx.fillText(`${moles} mol solute`, x, y + bH * 0.2);
    }

    renderDilution(diagram, x, y, width, height, options) {
        const { M1, V1, M2, V2 } = diagram;
        const beakerH = height * 0.5, beakerW = width * 0.28;

        const drawBeaker = (bx, by, fillFrac, label1, label2) => {
            this.ctx.fillStyle = '#f8f8f8';
            this.ctx.fillRect(bx - beakerW / 2, by - beakerH / 2, beakerW, beakerH);
            this.ctx.strokeStyle = '#000000';
            this.ctx.lineWidth = 2.5;
            this.ctx.strokeRect(bx - beakerW / 2, by - beakerH / 2, beakerW, beakerH);

            // Fill
            const fillH = beakerH * fillFrac;
            const shade = Math.floor(230 - fillFrac * 130);
            this.ctx.fillStyle = `rgb(${shade},${shade},${shade})`;
            this.ctx.fillRect(bx - beakerW / 2 + 3, by + beakerH / 2 - fillH - 3, beakerW - 6, fillH);

            this.ctx.fillStyle = '#000000';
            this.ctx.font = 'bold 13px Arial';
            this.ctx.textAlign = 'center';
            this.ctx.textBaseline = 'top';
            this.ctx.fillText(label1, bx, by + beakerH / 2 + 8);
            this.ctx.font = '12px Arial';
            this.ctx.fillText(label2, bx, by + beakerH / 2 + 24);
        };

        const leftX = x - width * 0.3, rightX = x + width * 0.3;
        drawBeaker(leftX, y, 0.7, `${M1} mol dm⁻³`, `${V1} mL`);
        drawBeaker(rightX, y, 0.4, `${M2} mol dm⁻³`, `${V2} mL`);

        // Arrow + "+ water"
        this.ctx.strokeStyle = '#000000';
        this.ctx.fillStyle = '#000000';
        this.ctx.lineWidth = 2.5;
        this.ctx.beginPath();
        this.ctx.moveTo(leftX + beakerW / 2 + 5, y);
        this.ctx.lineTo(rightX - beakerW / 2 - 5, y);
        this.ctx.stroke();
        this.ctx.beginPath();
        this.ctx.moveTo(rightX - beakerW / 2 - 5, y);
        this.ctx.lineTo(rightX - beakerW / 2 - 18, y - 6);
        this.ctx.lineTo(rightX - beakerW / 2 - 18, y + 6);
        this.ctx.closePath();
        this.ctx.fill();
        this.ctx.font = 'bold 13px Arial';
        this.ctx.textAlign = 'center';
        this.ctx.textBaseline = 'bottom';
        this.ctx.fillText('+ water', x, y - 12);
        this.ctx.font = '12px Arial';
        this.ctx.textBaseline = 'top';
        this.ctx.fillText('Dilute to', x, y + 6);
        this.ctx.fillText(`${V2} mL`, x, y + 21);

        // Formula
        this.ctx.font = 'bold 15px Arial';
        this.ctx.textAlign = 'center';
        this.ctx.textBaseline = 'top';
        this.ctx.fillText('M₁V₁ = M₂V₂', x, y + beakerH / 2 + 52);
        this.ctx.font = '13px Arial';
        this.ctx.fillText(`${M1} × ${V1} = ${M2} × ${V2}  →  ${M1 * V1} = ${M2 * V2} ✓`, x, y + beakerH / 2 + 72);
    }

    renderGasLaws(diagram, x, y, width, height, options) {
        const { law } = diagram;

        // Container piston diagram
        const contW = width * 0.55, contH = height * 0.5;
        const contX = x - contW / 2, contY = y - contH / 2;

        // Cylinder
        this.ctx.fillStyle = '#f0f0f0';
        this.ctx.fillRect(contX, contY, contW, contH);
        this.ctx.strokeStyle = '#000000';
        this.ctx.lineWidth = 3;
        this.ctx.strokeRect(contX, contY, contW, contH);

        // Piston
        const pistonX = contX + contW * 0.72;
        this.ctx.fillStyle = '#888888';
        this.ctx.fillRect(pistonX, contY + 5, 20, contH - 10);
        this.ctx.strokeStyle = '#000000';
        this.ctx.lineWidth = 2;
        this.ctx.strokeRect(pistonX, contY + 5, 20, contH - 10);

        // Piston rod
        this.ctx.beginPath();
        this.ctx.moveTo(pistonX + 20, y);
        this.ctx.lineTo(pistonX + 50, y);
        this.ctx.stroke();

        // Gas particles inside
        if (options.showContainer) {
            const seed = 12345;
            for (let i = 0; i < 15; i++) {
                const angle = (i * 137.5) * Math.PI / 180;
                const r = (i * 17) % 55;
                const px = x - contW * 0.12 + Math.cos(angle) * r;
                const py = y + Math.sin(angle) * r * 0.5;
                if (px > contX + 8 && px < pistonX - 8 && py > contY + 8 && py < contY + contH - 8) {
                    this.ctx.beginPath();
                    this.ctx.arc(px, py, 5, 0, Math.PI * 2);
                    this.ctx.fillStyle = '#555555';
                    this.ctx.fill();
                }
            }
        }

        // Variable labels
        if (options.showVariables) {
            const vars = [
                { label: 'P = Pressure', sub: '(Pa or atm)', x: x, y: contY - 40 },
                { label: 'V = Volume', sub: '(dm³ or L)', x: contX - 80, y: y },
                { label: 'n = moles', sub: '(mol)', x: contX - 80, y: y + 25 },
                { label: 'R = 8.314 J mol⁻¹ K⁻¹', sub: '', x: x, y: contY + contH + 30 },
                { label: 'T = Temperature', sub: '(K)', x: contX - 80, y: y + 50 }
            ];
            this.ctx.fillStyle = '#000000';
            this.ctx.font = '12px Arial';
            this.ctx.textAlign = 'center';
            vars.forEach(v => {
                this.ctx.fillText(v.label, v.x, v.y);
                if (v.sub) this.ctx.fillText(v.sub, v.x, v.y + 14);
            });
        }

        // Main equation
        this.ctx.fillStyle = '#000000';
        this.ctx.font = 'bold 20px Arial';
        this.ctx.textAlign = 'center';
        this.ctx.textBaseline = 'top';
        this.ctx.fillText('PV = nRT', x, contY + contH + 55);
        this.ctx.font = '12px Arial';
        this.ctx.fillStyle = '#444444';
        this.ctx.fillText('Ideal Gas Law — valid at low pressure, high temperature', x, contY + contH + 80);
    }

    renderTitrationStoichiometry(diagram, x, y, width, height, options) {
        const { acid, base } = diagram;

        // Flow chart style: known → moles known → moles unknown → concentration unknown
        const boxes = [
            { label: `Volume of ${acid}`, sub: 'e.g. 25.0 mL from pipette', x: x - width * 0.35, y: y - height * 0.3 },
            { label: `Moles of ${acid}`, sub: `n = C × V`, x: x - width * 0.35, y: y },
            { label: `Moles of ${base}`, sub: 'using mole ratio', x: x + width * 0.15, y: y },
            { label: `Concentration of ${base}`, sub: `C = n ÷ V`, x: x + width * 0.15, y: y + height * 0.3 }
        ];

        const extraBoxes = [
            { label: `Concentration of ${acid}`, sub: 'Known standard', x: x - width * 0.35, y: y - height * 0.6 },
            { label: 'Volume of base', sub: 'from burette reading', x: x + width * 0.15, y: y + height * 0.6 }
        ];

        const drawFlowBox = (bx, by, label, sub) => {
            const bW = width * 0.38, bH = 48;
            this.ctx.fillStyle = '#f5f5f5';
            this.ctx.fillRect(bx - bW / 2, by - bH / 2, bW, bH);
            this.ctx.strokeStyle = '#000000';
            this.ctx.lineWidth = 2;
            this.ctx.strokeRect(bx - bW / 2, by - bH / 2, bW, bH);
            this.ctx.fillStyle = '#000000';
            this.ctx.font = 'bold 13px Arial';
            this.ctx.textAlign = 'center';
            this.ctx.textBaseline = 'middle';
            this.ctx.fillText(label, bx, by - 8);
            this.ctx.font = '11px Arial';
            this.ctx.fillStyle = '#555555';
            this.ctx.fillText(sub, bx, by + 10);
        };

        [...boxes, ...extraBoxes].forEach(b => drawFlowBox(b.x, b.y, b.label, b.sub));

        // Connect arrows
        const arrowPairs = [
            [boxes[0], boxes[1]],
            [boxes[1], boxes[2]],
            [boxes[2], boxes[3]],
            [extraBoxes[0], boxes[0]],
            [boxes[3], extraBoxes[1]]
        ];

        arrowPairs.forEach(([from, to]) => {
            this.ctx.strokeStyle = '#000000';
            this.ctx.fillStyle = '#000000';
            this.ctx.lineWidth = 2;
            const fx = from.x, fy = from.y + 24;
            const tx = to.x, ty = to.y - 24;
            this.ctx.beginPath();
            this.ctx.moveTo(fx, fy);
            this.ctx.lineTo(tx, ty);
            this.ctx.stroke();
            const angle = Math.atan2(ty - fy, tx - fx);
            this.ctx.beginPath();
            this.ctx.moveTo(tx, ty);
            this.ctx.lineTo(tx - 10 * Math.cos(angle - 0.4), ty - 10 * Math.sin(angle - 0.4));
            this.ctx.lineTo(tx - 10 * Math.cos(angle + 0.4), ty - 10 * Math.sin(angle + 0.4));
            this.ctx.closePath();
            this.ctx.fill();
        });

        if (options.showEquation) {
            this.ctx.fillStyle = '#000000';
            this.ctx.font = 'bold 14px Arial';
            this.ctx.textAlign = 'center';
            this.ctx.textBaseline = 'bottom';
            this.ctx.fillText(`${acid}(aq)  +  ${base}(aq)  →  Salt + H₂O`, x, y - height / 2 - 5);
        }
    }

    renderAvogadro(diagram, x, y, width, height, options) {
        // Visual: scale comparison showing 1 mole = 6.022e23 particles
        const naNum = '6.022 × 10²³';

        this.ctx.fillStyle = '#000000';
        this.ctx.font = 'bold 22px Arial';
        this.ctx.textAlign = 'center';
        this.ctx.textBaseline = 'middle';
        this.ctx.fillText(`Nₐ = ${naNum} mol⁻¹`, x, y - height * 0.3);

        // Scale illustration: one large "1 mol" on left, cluster of dots on right
        const molesX = x - width * 0.28, dotX = x + width * 0.15;
        const midY = y + height * 0.05;

        // Mole container
        this.ctx.strokeStyle = '#000000';
        this.ctx.lineWidth = 2.5;
        this.ctx.fillStyle = '#f0f0f0';
        this.ctx.fillRect(molesX - 50, midY - 45, 100, 90);
        this.ctx.strokeRect(molesX - 50, midY - 45, 100, 90);
        this.ctx.font = 'bold 18px Arial';
        this.ctx.textAlign = 'center';
        this.ctx.textBaseline = 'middle';
        this.ctx.fillStyle = '#000000';
        this.ctx.fillText('1 mol', molesX, midY);

        // Equals
        this.ctx.font = 'bold 24px Arial';
        this.ctx.fillText('=', x - width * 0.05, midY);

        // Particle cluster (grid of tiny dots)
        const dotArea = 90;
        const dotR = 2.5;
        const dotsPerRow = 12;
        for (let r = 0; r < 8; r++) {
            for (let c = 0; c < dotsPerRow; c++) {
                this.ctx.beginPath();
                this.ctx.arc(dotX - dotArea / 2 + c * (dotArea / dotsPerRow) + 4,
                    midY - 35 + r * 9, dotR, 0, Math.PI * 2);
                this.ctx.fillStyle = '#333333';
                this.ctx.fill();
            }
        }

        this.ctx.fillStyle = '#000000';
        this.ctx.font = 'bold 14px Arial';
        this.ctx.fillText(`${naNum} particles`, dotX, midY + 50);

        // Comparison text
        if (options.showComparison) {
            this.ctx.font = '12px Arial';
            this.ctx.fillStyle = '#444444';
            const comparisons = [
                "If you stacked 6×10²³ pennies, the pile would reach the Moon 500 million times",
                "One mole of sand grains would cover Earth's land surface 120 m deep",
                "= 602,200,000,000,000,000,000,000 particles"
            ];
            comparisons.forEach((c, i) => {
                this.ctx.fillText(c, x, y + height * 0.38 + i * 18);
            });
        }
    }

    renderMolarMass(diagram, x, y, width, height, options) {
        const { compound } = diagram;

        // Breakdown table: compound → elements → Ar × count → total
        const breakdown = {
            'Ca(OH)2': [
                { el: 'Ca', count: 1, Ar: 40.1 },
                { el: 'O', count: 2, Ar: 16.0 },
                { el: 'H', count: 2, Ar: 1.0 }
            ]
        };
        const parts = breakdown[compound] || [{ el: 'X', count: 1, Ar: 12 }];
        const totalMr = parts.reduce((sum, p) => sum + p.count * p.Ar, 0);

        // Compound title
        this.ctx.fillStyle = '#000000';
        this.ctx.font = 'bold 22px Arial';
        this.ctx.textAlign = 'center';
        this.ctx.textBaseline = 'top';
        this.ctx.fillText(compound, x, y - height / 2 + 10);

        const rowH = 46;
        const tableY = y - height / 2 + 50;
        const cols = ['Element', 'Number of atoms', 'Ar', 'Contribution'];
        const colW = width / cols.length;

        // Header
        this.ctx.fillStyle = '#222222';
        this.ctx.fillRect(x - width / 2, tableY, width, rowH * 0.8);

        cols.forEach((col, ci) => {
            this.ctx.fillStyle = '#ffffff';
            this.ctx.font = 'bold 13px Arial';
            this.ctx.textAlign = 'center';
            this.ctx.textBaseline = 'middle';
            this.ctx.fillText(col, x - width / 2 + ci * colW + colW / 2, tableY + rowH * 0.4);
        });

        // Data rows
        parts.forEach((part, ri) => {
            const ry = tableY + rowH * 0.8 + ri * rowH;
            this.ctx.fillStyle = ri % 2 === 0 ? '#f5f5f5' : '#ffffff';
            this.ctx.fillRect(x - width / 2, ry, width, rowH);
            this.ctx.strokeStyle = '#cccccc';
            this.ctx.lineWidth = 1;
            this.ctx.strokeRect(x - width / 2, ry, width, rowH);

            const rowData = [part.el, part.count.toString(), part.Ar.toFixed(1), `${part.count} × ${part.Ar} = ${(part.count * part.Ar).toFixed(1)}`];
            rowData.forEach((val, ci) => {
                this.ctx.fillStyle = '#000000';
                this.ctx.font = ci === 0 ? 'bold 14px Arial' : '13px Arial';
                this.ctx.textAlign = 'center';
                this.ctx.textBaseline = 'middle';
                this.ctx.fillText(val, x - width / 2 + ci * colW + colW / 2, ry + rowH / 2);
            });
        });

        // Total row
        const totalY = tableY + rowH * 0.8 + parts.length * rowH;
        this.ctx.fillStyle = '#333333';
        this.ctx.fillRect(x - width / 2, totalY, width, rowH);
        this.ctx.fillStyle = '#ffffff';
        this.ctx.font = 'bold 15px Arial';
        this.ctx.textAlign = 'center';
        this.ctx.textBaseline = 'middle';
        this.ctx.fillText(`Molar Mass (Mᵣ) = ${totalMr.toFixed(1)} g mol⁻¹`, x, totalY + rowH / 2);

        // Outer border
        this.ctx.strokeStyle = '#000000';
        this.ctx.lineWidth = 2.5;
        this.ctx.strokeRect(x - width / 2, tableY, width, rowH * 0.8 + parts.length * rowH + rowH);
    }

    renderStoichiometryRoadmap(diagram, x, y, width, height, options) {
        const { steps } = diagram;

        const stepData = [
            { label: 'Given\nQuantity', sub: 'e.g. mass (g)', x: x - width * 0.4, y },
            { label: 'Convert to\nMoles', sub: '÷ Mᵣ  or  ÷ 24  or  ÷ Nₐ', x: x - width * 0.13, y },
            { label: 'Use Mole\nRatio', sub: 'from balanced equation', x: x + width * 0.13, y },
            { label: 'Convert to\nDesired Unit', sub: '× Mᵣ  or  × 24  or  × Nₐ', x: x + width * 0.4, y }
        ];

        const bW = width * 0.22, bH = 62;

        stepData.forEach((step, i) => {
            // Box
            this.ctx.fillStyle = i % 2 === 0 ? '#f0f0f0' : '#ffffff';
            this.ctx.fillRect(step.x - bW / 2, step.y - bH / 2, bW, bH);
            this.ctx.strokeStyle = '#000000';
            this.ctx.lineWidth = 2.5;
            this.ctx.strokeRect(step.x - bW / 2, step.y - bH / 2, bW, bH);

            // Step number
            this.ctx.fillStyle = '#000000';
            this.ctx.font = 'bold 11px Arial';
            this.ctx.textAlign = 'left';
            this.ctx.textBaseline = 'top';
            this.ctx.fillText(`Step ${i + 1}`, step.x - bW / 2 + 5, step.y - bH / 2 + 3);

            // Label
            this.ctx.font = 'bold 13px Arial';
            this.ctx.textAlign = 'center';
            this.ctx.textBaseline = 'middle';
            step.label.split('\n').forEach((line, li) => {
                this.ctx.fillText(line, step.x, step.y - 8 + li * 16);
            });

            // Sub
            this.ctx.font = '10px Arial';
            this.ctx.fillStyle = '#555555';
            this.ctx.fillText(step.sub, step.x, step.y + 22);

            // Arrow to next
            if (i < stepData.length - 1) {
                const next = stepData[i + 1];
                this.ctx.strokeStyle = '#000000';
                this.ctx.fillStyle = '#000000';
                this.ctx.lineWidth = 2.5;
                const ax1 = step.x + bW / 2 + 2, ax2 = next.x - bW / 2 - 2;
                this.ctx.beginPath();
                this.ctx.moveTo(ax1, y);
                this.ctx.lineTo(ax2, y);
                this.ctx.stroke();
                this.ctx.beginPath();
                this.ctx.moveTo(ax2, y);
                this.ctx.lineTo(ax2 - 10, y - 5);
                this.ctx.lineTo(ax2 - 10, y + 5);
                this.ctx.closePath();
                this.ctx.fill();
            }
        });

        // Note below
        this.ctx.fillStyle = '#000000';
        this.ctx.font = '12px Arial';
        this.ctx.textAlign = 'center';
        this.ctx.textBaseline = 'top';
        this.ctx.fillText('Always balance the equation first!  ·  Mole ratio = coefficients in balanced equation', x, y + bH / 2 + 18);

        // Example
        this.ctx.font = '12px Arial';
        this.ctx.fillStyle = '#555555';
        this.ctx.fillText('e.g.  12 g C  →  1 mol C  →  (×2) 2 mol CO₂  →  88 g CO₂', x, y + bH / 2 + 36);
    }

    renderBalancingEquations(diagram, x, y, width, height, options) {
        const { equation } = diagram;

        // Show H2 + O2 → H2O unbalanced and balanced
        const stages = [
            { label: 'Unbalanced:', eq: 'H₂  +  O₂  →  H₂O', note: 'O atoms: 2 left, 1 right ✗' },
            { label: 'Add coefficient:', eq: 'H₂  +  O₂  →  2H₂O', note: 'H atoms: 2 left, 4 right ✗' },
            { label: 'Balanced:', eq: '2H₂  +  O₂  →  2H₂O', note: 'H: 4=4 ✓   O: 2=2 ✓' }
        ];

        const rowH = height * 0.2;

        stages.forEach((stage, i) => {
            const sy = y - height * 0.25 + i * rowH * 1.1;

            // Row background
            this.ctx.fillStyle = i === 2 ? '#f0f0f0' : '#fafafa';
            this.ctx.fillRect(x - width / 2 + 10, sy - rowH / 2, width - 20, rowH);
            this.ctx.strokeStyle = i === 2 ? '#000000' : '#cccccc';
            this.ctx.lineWidth = i === 2 ? 2.5 : 1.5;
            this.ctx.strokeRect(x - width / 2 + 10, sy - rowH / 2, width - 20, rowH);

            // Step label
            this.ctx.fillStyle = '#000000';
            this.ctx.font = 'bold 13px Arial';
            this.ctx.textAlign = 'left';
            this.ctx.textBaseline = 'middle';
            this.ctx.fillText(stage.label, x - width / 2 + 20, sy - 10);

            // Equation
            this.ctx.font = i === 2 ? 'bold 17px Arial' : '16px Arial';
            this.ctx.textAlign = 'center';
            this.ctx.fillText(stage.eq, x, sy + 5);

            // Note
            this.ctx.font = '11px Arial';
            this.ctx.fillStyle = i === 2 ? '#000000' : '#666666';
            this.ctx.fillText(stage.note, x, sy + 22);
        });

        // Particle visual for balanced equation
        if (options.showParticles) {
            const pvY = y + height * 0.32;
            this.ctx.fillStyle = '#000000';
            this.ctx.font = 'bold 13px Arial';
            this.ctx.textAlign = 'center';
            this.ctx.fillText('Particle representation: 2H₂  +  O₂  →  2H₂O', x, pvY - 20);

            const molecules = [
                { label: 'H₂', x: x - width * 0.35, count: 2, fill: '#555555' },
                { label: '+', x: x - width * 0.18, count: 0, fill: '#000000' },
                { label: 'O₂', x: x - width * 0.05, count: 1, fill: '#aaaaaa' },
                { label: '→', x: x + width * 0.1, count: 0, fill: '#000000' },
                { label: 'H₂O', x: x + width * 0.27, count: 2, fill: '#666666' }
            ];

            molecules.forEach(mol => {
                if (mol.count === 0) {
                    this.ctx.fillStyle = '#000000';
                    this.ctx.font = 'bold 22px Arial';
                    this.ctx.textAlign = 'center';
                    this.ctx.textBaseline = 'middle';
                    this.ctx.fillText(mol.label, mol.x, pvY + 12);
                } else {
                    for (let i = 0; i < mol.count; i++) {
                        const mx = mol.x + (i - (mol.count - 1) / 2) * 30;
                        this.ctx.beginPath();
                        this.ctx.arc(mx, pvY + 12, 12, 0, Math.PI * 2);
                        this.ctx.fillStyle = mol.fill;
                        this.ctx.fill();
                        this.ctx.strokeStyle = '#000000';
                        this.ctx.lineWidth = 1.5;
                        this.ctx.stroke();
                        this.ctx.fillStyle = '#ffffff';
                        this.ctx.font = '9px Arial';
                        this.ctx.textAlign = 'center';
                        this.ctx.textBaseline = 'middle';
                        this.ctx.fillText(mol.label, mx, pvY + 12);
                    }
                }
            });
        }

        // Key rule
        this.ctx.fillStyle = '#000000';
        this.ctx.font = 'bold 12px Arial';
        this.ctx.textAlign = 'center';
        this.ctx.textBaseline = 'top';
        this.ctx.fillText('Rule: Change coefficients only — NEVER change subscripts!', x, y + height / 2 - 18);
    }
}


export { ChemistryDiagramsRegistry, ChemistryDiagramRenderer };
