// ============================================================================
// ECOLOGY DIAGRAMS REGISTRY - Comprehensive Ecology Configuration System
// ============================================================================

class EcologyDiagramsRegistry {
    static diagrams = {
        // ===== 1. ECOSYSTEMS & BIOMES =====
        
        'foodChain': {
            name: 'Food Chain',
            category: 'Ecosystems & Energy Flow',
            description: 'Simple linear energy transfer from producers to consumers',
            dataRequired: [],
            usage: 'Best for basic trophic level education',
            examples: ['Energy flow', 'Producers and consumers', 'Trophic levels'],
            defaultOptions: {
                title: 'Food Chain',
                ecosystem: 'terrestrial', // 'terrestrial', 'aquatic', 'marine'
                showLabels: true,
                showEnergyLoss: true,
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'foodWeb': {
            name: 'Food Web',
            category: 'Ecosystems & Energy Flow',
            description: 'Complex interconnected feeding relationships',
            dataRequired: [],
            usage: 'Best for showing ecosystem complexity',
            examples: ['Ecosystem interactions', 'Biodiversity', 'Interconnections'],
            defaultOptions: {
                title: 'Food Web',
                ecosystem: 'terrestrial',
                complexity: 'medium', // 'simple', 'medium', 'complex'
                showLabels: true,
                width: 900,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },

        'energyPyramid': {
            name: 'Energy Pyramid',
            category: 'Ecosystems & Energy Flow',
            description: 'Trophic levels showing energy distribution',
            dataRequired: [],
            usage: 'Best for illustrating 10% energy rule',
            examples: ['Energy transfer', 'Trophic efficiency', 'Biomass'],
            defaultOptions: {
                title: 'Energy Pyramid',
                showEnergy: true,
                showBiomass: true,
                showNumbers: true,
                showLabels: true,
                width: 700,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'biomassPyramid': {
            name: 'Biomass Pyramid',
            category: 'Ecosystems & Energy Flow',
            description: 'Distribution of living matter across trophic levels',
            dataRequired: [],
            usage: 'Best for showing organism mass relationships',
            examples: ['Biomass distribution', 'Trophic structure'],
            defaultOptions: {
                title: 'Biomass Pyramid',
                type: 'upright', // 'upright', 'inverted'
                showLabels: true,
                width: 700,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'carbonCycle': {
            name: 'Carbon Cycle',
            category: 'Biogeochemical Cycles',
            description: 'Movement of carbon through Earth systems',
            dataRequired: [],
            usage: 'Best for climate change and carbon sequestration education',
            examples: ['Greenhouse gases', 'Photosynthesis', 'Respiration'],
            defaultOptions: {
                title: 'The Carbon Cycle',
                showProcesses: true,
                showReservoirs: true,
                showLabels: true,
                width: 900,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },

        'nitrogenCycle': {
            name: 'Nitrogen Cycle',
            category: 'Biogeochemical Cycles',
            description: 'Nitrogen transformation and movement',
            dataRequired: [],
            usage: 'Best for nutrient cycling education',
            examples: ['Nitrogen fixation', 'Nitrification', 'Denitrification'],
            defaultOptions: {
                title: 'The Nitrogen Cycle',
                showProcesses: true,
                showBacteria: true,
                showLabels: true,
                width: 900,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },

        'waterCycle': {
            name: 'Water Cycle',
            category: 'Biogeochemical Cycles',
            description: 'Hydrological cycle through atmosphere, land, and ocean',
            dataRequired: [],
            usage: 'Best for hydrology and climate education',
            examples: ['Evaporation', 'Precipitation', 'Runoff'],
            defaultOptions: {
                title: 'The Water Cycle',
                showProcesses: true,
                showLabels: true,
                landscape: 'complete', // 'complete', 'ocean', 'land'
                width: 900,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },

        'phosphorusCycle': {
            name: 'Phosphorus Cycle',
            category: 'Biogeochemical Cycles',
            description: 'Phosphorus movement through lithosphere and biosphere',
            dataRequired: [],
            usage: 'Best for nutrient limitation and eutrophication',
            examples: ['Weathering', 'Mineralization', 'Sedimentation'],
            defaultOptions: {
                title: 'The Phosphorus Cycle',
                showProcesses: true,
                showLabels: true,
                width: 900,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },

        'forestEcosystem': {
            name: 'Forest Ecosystem',
            category: 'Ecosystem Types',
            description: 'Temperate or tropical forest structure and layers',
            dataRequired: [],
            usage: 'Best for forest ecology and stratification',
            examples: ['Canopy layers', 'Forest structure', 'Biodiversity'],
            defaultOptions: {
                title: 'Forest Ecosystem',
                forestType: 'temperate', // 'temperate', 'tropical', 'boreal'
                showLayers: true,
                showLabels: true,
                width: 800,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },

        'aquaticEcosystem': {
            name: 'Aquatic Ecosystem',
            category: 'Ecosystem Types',
            description: 'Lake or pond ecosystem zones',
            dataRequired: [],
            usage: 'Best for freshwater ecology',
            examples: ['Lake zones', 'Aquatic habitats', 'Depth gradients'],
            defaultOptions: {
                title: 'Aquatic Ecosystem',
                type: 'lake', // 'lake', 'pond', 'stream'
                showZones: true,
                showLabels: true,
                width: 800,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },

        'marineEcosystem': {
            name: 'Marine Ecosystem',
            category: 'Ecosystem Types',
            description: 'Ocean zones and marine life distribution',
            dataRequired: [],
            usage: 'Best for oceanography and marine biology',
            examples: ['Ocean zones', 'Pelagic life', 'Benthic organisms'],
            defaultOptions: {
                title: 'Marine Ecosystem',
                showZones: true,
                showOrganisms: true,
                showLabels: true,
                width: 800,
                height: 900,
                backgroundColor: '#ffffff'
            }
        },

        'desertEcosystem': {
            name: 'Desert Ecosystem',
            category: 'Ecosystem Types',
            description: 'Arid environment adaptations and life',
            dataRequired: [],
            usage: 'Best for adaptation and xerophyte biology',
            examples: ['Desert adaptations', 'Water conservation', 'Arid life'],
            defaultOptions: {
                title: 'Desert Ecosystem',
                showAdaptations: true,
                showLabels: true,
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'grasslandEcosystem': {
            name: 'Grassland Ecosystem',
            category: 'Ecosystem Types',
            description: 'Savanna or prairie ecosystem',
            dataRequired: [],
            usage: 'Best for grazer ecology',
            examples: ['Grasslands', 'Herbivores', 'Fire ecology'],
            defaultOptions: {
                title: 'Grassland Ecosystem',
                type: 'savanna', // 'savanna', 'prairie', 'steppe'
                showLabels: true,
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'tundraEcosystem': {
            name: 'Tundra Ecosystem',
            category: 'Ecosystem Types',
            description: 'Arctic or alpine tundra environment',
            dataRequired: [],
            usage: 'Best for cold climate adaptations',
            examples: ['Permafrost', 'Cold adaptations', 'Arctic life'],
            defaultOptions: {
                title: 'Tundra Ecosystem',
                type: 'arctic', // 'arctic', 'alpine'
                showPermafrost: true,
                showLabels: true,
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'coralReef': {
            name: 'Coral Reef Ecosystem',
            category: 'Ecosystem Types',
            description: 'Coral reef structure and biodiversity',
            dataRequired: [],
            usage: 'Best for marine biodiversity hotspots',
            examples: ['Reef structure', 'Symbiosis', 'Marine diversity'],
            defaultOptions: {
                title: 'Coral Reef Ecosystem',
                showZonation: true,
                showSymbiosis: true,
                showLabels: true,
                width: 900,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },

        'successionPrimary': {
            name: 'Primary Succession',
            category: 'Ecological Succession',
            description: 'Succession on bare substrate',
            dataRequired: [],
            usage: 'Best for colonization and community development',
            examples: ['Pioneer species', 'Climax community', 'Soil formation'],
            defaultOptions: {
                title: 'Primary Succession',
                stages: 5,
                showLabels: true,
                substrate: 'rock', // 'rock', 'lava', 'sand'
                width: 1000,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'successionSecondary': {
            name: 'Secondary Succession',
            category: 'Ecological Succession',
            description: 'Succession after disturbance',
            dataRequired: [],
            usage: 'Best for forest recovery and regeneration',
            examples: ['Abandoned farmland', 'After fire', 'Forest regrowth'],
            defaultOptions: {
                title: 'Secondary Succession',
                stages: 5,
                showLabels: true,
                disturbance: 'fire', // 'fire', 'agriculture', 'logging'
                width: 1000,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'populationGrowth': {
            name: 'Population Growth Curves',
            category: 'Population Ecology',
            description: 'Exponential and logistic growth models',
            dataRequired: [],
            usage: 'Best for population dynamics',
            examples: ['Carrying capacity', 'Growth rate', 'Overshoot'],
            defaultOptions: {
                title: 'Population Growth Curves',
                showExponential: true,
                showLogistic: true,
                showCarryingCapacity: true,
                showLabels: true,
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'agePyramid': {
            name: 'Age Structure Pyramid',
            category: 'Population Ecology',
            description: 'Population age distribution',
            dataRequired: [],
            usage: 'Best for demographic analysis',
            examples: ['Population structure', 'Demographics', 'Age classes'],
            defaultOptions: {
                title: 'Age Structure Pyramid',
                type: 'expanding', // 'expanding', 'stable', 'declining'
                showLabels: true,
                width: 600,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },

        'predatorPrey': {
            name: 'Predator-Prey Dynamics',
            category: 'Population Ecology',
            description: 'Cyclical population fluctuations',
            dataRequired: [],
            usage: 'Best for Lotka-Volterra dynamics',
            examples: ['Lynx and hare', 'Population cycles', 'Oscillations'],
            defaultOptions: {
                title: 'Predator-Prey Dynamics',
                showLabels: true,
                cycles: 3,
                width: 900,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'nicheDiagram': {
            name: 'Ecological Niche',
            category: 'Species Interactions',
            description: 'Fundamental vs realized niche',
            dataRequired: [],
            usage: 'Best for niche concept and competition',
            examples: ['Resource partitioning', 'Niche overlap', 'Competition'],
            defaultOptions: {
                title: 'Ecological Niche',
                showFundamental: true,
                showRealized: true,
                showLabels: true,
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'symbioticRelationships': {
            name: 'Symbiotic Relationships',
            category: 'Species Interactions',
            description: 'Mutualism, commensalism, and parasitism',
            dataRequired: [],
            usage: 'Best for interspecies interactions',
            examples: ['Mutualism', 'Commensalism', 'Parasitism'],
            defaultOptions: {
                title: 'Symbiotic Relationships',
                showAll: true,
                showLabels: true,
                width: 900,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },

        'competitionTypes': {
            name: 'Competition Types',
            category: 'Species Interactions',
            description: 'Interspecific and intraspecific competition',
            dataRequired: [],
            usage: 'Best for competitive exclusion and coexistence',
            examples: ['Resource competition', 'Interference', 'Exploitation'],
            defaultOptions: {
                title: 'Types of Competition',
                showLabels: true,
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'climateZones': {
            name: 'Climate Zones',
            category: 'Climate & Biomes',
            description: 'Global climate classification',
            dataRequired: [],
            usage: 'Best for climate geography',
            examples: ['Tropical', 'Temperate', 'Polar'],
            defaultOptions: {
                title: 'Climate Zones',
                showLatitude: true,
                showLabels: true,
                width: 900,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'biomeDistribution': {
            name: 'World Biomes',
            category: 'Climate & Biomes',
            description: 'Major terrestrial biomes',
            dataRequired: [],
            usage: 'Best for biome classification',
            examples: ['Biome types', 'Global distribution', 'Climate patterns'],
            defaultOptions: {
                title: 'World Biomes',
                showLabels: true,
                simplified: true,
                width: 1000,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'climateDiagram': {
            name: 'Climate Diagram',
            category: 'Climate & Biomes',
            description: 'Temperature and precipitation patterns',
            dataRequired: [],
            usage: 'Best for biome characterization',
            examples: ['Walter diagram', 'Climatograph', 'Weather patterns'],
            defaultOptions: {
                title: 'Climate Diagram',
                location: 'temperate',
                showLabels: true,
                width: 700,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'soilProfile': {
            name: 'Soil Profile',
            category: 'Soil & Decomposition',
            description: 'Soil horizons and layers',
            dataRequired: [],
            usage: 'Best for pedology and soil science',
            examples: ['O horizon', 'A horizon', 'Soil layers'],
            defaultOptions: {
                title: 'Soil Profile',
                soilType: 'forest', // 'forest', 'grassland', 'desert'
                showHorizons: true,
                showLabels: true,
                width: 700,
                height: 800,
                backgroundColor: '#ffffff'
            }
        },

        'decompositionProcess': {
            name: 'Decomposition Process',
            category: 'Soil & Decomposition',
            description: 'Breakdown of organic matter',
            dataRequired: [],
            usage: 'Best for nutrient cycling',
            examples: ['Detritivores', 'Decomposers', 'Nutrient release'],
            defaultOptions: {
                title: 'Decomposition Process',
                showStages: true,
                showOrganisms: true,
                showLabels: true,
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'biodiversityGradient': {
            name: 'Biodiversity Gradient',
            category: 'Biodiversity & Conservation',
            description: 'Species richness from poles to equator',
            dataRequired: [],
            usage: 'Best for latitudinal diversity gradient',
            examples: ['Species richness', 'Latitude', 'Tropical diversity'],
            defaultOptions: {
                title: 'Latitudinal Biodiversity Gradient',
                showLabels: true,
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'speciesAreaCurve': {
            name: 'Species-Area Curve',
            category: 'Biodiversity & Conservation',
            description: 'Relationship between area and species number',
            dataRequired: [],
            usage: 'Best for island biogeography',
            examples: ['Habitat size', 'Species richness', 'Conservation'],
            defaultOptions: {
                title: 'Species-Area Relationship',
                showLabels: true,
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'habitatFragmentation': {
            name: 'Habitat Fragmentation',
            category: 'Biodiversity & Conservation',
            description: 'Effects of habitat loss and isolation',
            dataRequired: [],
            usage: 'Best for conservation biology',
            examples: ['Edge effects', 'Corridors', 'Patch dynamics'],
            defaultOptions: {
                title: 'Habitat Fragmentation',
                stages: 4,
                showLabels: true,
                width: 1000,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'invasiveSpecies': {
            name: 'Invasive Species Impact',
            category: 'Human Impact',
            description: 'Effects of non-native species introduction',
            dataRequired: [],
            usage: 'Best for invasion biology',
            examples: ['Introduced species', 'Native displacement', 'Ecosystem change'],
            defaultOptions: {
                title: 'Invasive Species Impact',
                showTimeline: true,
                showLabels: true,
                width: 900,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'pollutionImpact': {
            name: 'Pollution Impact',
            category: 'Human Impact',
            description: 'Effects of pollution on ecosystems',
            dataRequired: [],
            usage: 'Best for environmental degradation',
            examples: ['Eutrophication', 'Acid rain', 'Bioaccumulation'],
            defaultOptions: {
                title: 'Pollution Impact on Ecosystems',
                type: 'water', // 'water', 'air', 'soil'
                showLabels: true,
                width: 800,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },

        'greenhouseEffect': {
            name: 'Greenhouse Effect',
            category: 'Climate Change',
            description: 'Atmospheric warming mechanism',
            dataRequired: [],
            usage: 'Best for climate science education',
            examples: ['Global warming', 'CO2', 'Heat retention'],
            defaultOptions: {
                title: 'The Greenhouse Effect',
                showNatural: true,
                showEnhanced: true,
                showLabels: true,
                width: 900,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'climateChangeImpacts': {
            name: 'Climate Change Impacts',
            category: 'Climate Change',
            description: 'Effects of global warming on ecosystems',
            dataRequired: [],
            usage: 'Best for climate change biology',
            examples: ['Range shifts', 'Phenology', 'Ecosystem disruption'],
            defaultOptions: {
                title: 'Climate Change Impacts',
                showMultiple: true,
                showLabels: true,
                width: 1000,
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

    static printSummary() {
        console.log('=== ECOLOGY DIAGRAMS REGISTRY SUMMARY ===');
        console.log(`Total Diagrams: ${this.getTotalDiagramCount()}`);
        console.log('\nBy Category:');
        const stats = this.getDiagramStats();
        Object.entries(stats).forEach(([category, data]) => {
            console.log(`  ${category}: ${data.count} diagrams`);
        });
    }
}

// ============================================================================
// ECOLOGY SHAPES LIBRARY
// ============================================================================

class EcologyShapes {
    
    // ===== ORGANISMS =====
    
    static drawPlant(ctx, x, y, size, type = 'generic') {
        ctx.save();
        ctx.translate(x, y);
        
        if (type === 'tree') {
            // Tree trunk
            ctx.fillStyle = '#8B4513';
            ctx.fillRect(-size * 0.1, -size * 0.3, size * 0.2, size * 0.6);
            
            // Tree crown
            ctx.fillStyle = '#228B22';
            ctx.beginPath();
            ctx.arc(0, -size * 0.5, size * 0.4, 0, Math.PI * 2);
            ctx.fill();
            ctx.beginPath();
            ctx.arc(-size * 0.2, -size * 0.4, size * 0.3, 0, Math.PI * 2);
            ctx.fill();
            ctx.beginPath();
            ctx.arc(size * 0.2, -size * 0.4, size * 0.3, 0, Math.PI * 2);
            ctx.fill();
        } else if (type === 'grass') {
            // Grass blades
            ctx.strokeStyle = '#90EE90';
            ctx.lineWidth = size * 0.05;
            ctx.lineCap = 'round';
            for (let i = -2; i <= 2; i++) {
                ctx.beginPath();
                ctx.moveTo(i * size * 0.1, 0);
                ctx.quadraticCurveTo(i * size * 0.1 + size * 0.05, -size * 0.3, i * size * 0.1, -size * 0.5);
                ctx.stroke();
            }
        } else if (type === 'shrub') {
            // Shrub
            ctx.fillStyle = '#3CB371';
            ctx.beginPath();
            ctx.arc(0, -size * 0.3, size * 0.25, 0, Math.PI * 2);
            ctx.fill();
            ctx.beginPath();
            ctx.arc(-size * 0.15, -size * 0.2, size * 0.2, 0, Math.PI * 2);
            ctx.fill();
            ctx.beginPath();
            ctx.arc(size * 0.15, -size * 0.2, size * 0.2, 0, Math.PI * 2);
            ctx.fill();
        } else {
            // Generic plant
            // Stem
            ctx.strokeStyle = '#228B22';
            ctx.lineWidth = size * 0.05;
            ctx.beginPath();
            ctx.moveTo(0, 0);
            ctx.lineTo(0, -size * 0.5);
            ctx.stroke();
            
            // Leaves
            ctx.fillStyle = '#32CD32';
            ctx.beginPath();
            ctx.ellipse(-size * 0.1, -size * 0.3, size * 0.15, size * 0.08, -0.5, 0, Math.PI * 2);
            ctx.fill();
            ctx.beginPath();
            ctx.ellipse(size * 0.1, -size * 0.35, size * 0.15, size * 0.08, 0.5, 0, Math.PI * 2);
            ctx.fill();
        }
        
        ctx.restore();
    }
    
    static drawAnimal(ctx, x, y, size, type = 'generic') {
        ctx.save();
        ctx.translate(x, y);
        
        if (type === 'herbivore') {
            // Deer-like herbivore
            ctx.fillStyle = '#D2691E';
            // Body
            ctx.beginPath();
            ctx.ellipse(0, 0, size * 0.3, size * 0.2, 0, 0, Math.PI * 2);
            ctx.fill();
            // Head
            ctx.beginPath();
            ctx.arc(-size * 0.25, -size * 0.15, size * 0.15, 0, Math.PI * 2);
            ctx.fill();
            // Legs
            ctx.strokeStyle = '#D2691E';
            ctx.lineWidth = size * 0.05;
            ctx.beginPath();
            ctx.moveTo(-size * 0.15, size * 0.15);
            ctx.lineTo(-size * 0.15, size * 0.35);
            ctx.stroke();
            ctx.beginPath();
            ctx.moveTo(size * 0.15, size * 0.15);
            ctx.lineTo(size * 0.15, size * 0.35);
            ctx.stroke();
        } else if (type === 'carnivore') {
            // Wolf-like carnivore
            ctx.fillStyle = '#696969';
            // Body
            ctx.beginPath();
            ctx.ellipse(0, 0, size * 0.35, size * 0.2, 0, 0, Math.PI * 2);
            ctx.fill();
            // Head
            ctx.beginPath();
            ctx.arc(-size * 0.3, -size * 0.1, size * 0.18, 0, Math.PI * 2);
            ctx.fill();
            // Snout
            ctx.beginPath();
            ctx.ellipse(-size * 0.42, -size * 0.1, size * 0.08, size * 0.06, 0, 0, Math.PI * 2);
            ctx.fill();
            // Ears
            ctx.beginPath();
            ctx.moveTo(-size * 0.35, -size * 0.25);
            ctx.lineTo(-size * 0.3, -size * 0.35);
            ctx.lineTo(-size * 0.25, -size * 0.25);
            ctx.fill();
        } else if (type === 'insect') {
            // Insect
            ctx.fillStyle = '#000000';
            // Body segments
            ctx.beginPath();
            ctx.arc(-size * 0.15, 0, size * 0.08, 0, Math.PI * 2);
            ctx.fill();
            ctx.beginPath();
            ctx.arc(0, 0, size * 0.1, 0, Math.PI * 2);
            ctx.fill();
            ctx.beginPath();
            ctx.arc(size * 0.15, 0, size * 0.08, 0, Math.PI * 2);
            ctx.fill();
            // Wings
            ctx.fillStyle = 'rgba(255, 255, 255, 0.6)';
            ctx.beginPath();
            ctx.ellipse(0, -size * 0.08, size * 0.15, size * 0.08, -0.3, 0, Math.PI * 2);
            ctx.fill();
            ctx.beginPath();
            ctx.ellipse(0, size * 0.08, size * 0.15, size * 0.08, 0.3, 0, Math.PI * 2);
            ctx.fill();
        } else if (type === 'bird') {
            // Bird
            ctx.fillStyle = '#4169E1';
            // Body
            ctx.beginPath();
            ctx.ellipse(0, 0, size * 0.2, size * 0.15, 0, 0, Math.PI * 2);
            ctx.fill();
            // Head
            ctx.beginPath();
            ctx.arc(-size * 0.18, -size * 0.08, size * 0.12, 0, Math.PI * 2);
            ctx.fill();
            // Beak
            ctx.fillStyle = '#FFA500';
            ctx.beginPath();
            ctx.moveTo(-size * 0.28, -size * 0.08);
            ctx.lineTo(-size * 0.38, -size * 0.08);
            ctx.lineTo(-size * 0.28, -size * 0.05);
            ctx.closePath();
            ctx.fill();
            // Wing
            ctx.fillStyle = '#4169E1';
            ctx.beginPath();
            ctx.ellipse(size * 0.05, 0, size * 0.25, size * 0.1, -0.3, 0, Math.PI * 2);
            ctx.fill();
        } else {
            // Generic animal
            ctx.fillStyle = '#A0522D';
            ctx.beginPath();
            ctx.arc(0, 0, size * 0.2, 0, Math.PI * 2);
            ctx.fill();
        }
        
        ctx.restore();
    }
    
    static drawMicroorganism(ctx, x, y, size, type = 'bacteria') {
        ctx.save();
        ctx.translate(x, y);
        
        if (type === 'bacteria') {
            ctx.fillStyle = '#9370DB';
            ctx.beginPath();
            ctx.ellipse(0, 0, size * 0.15, size * 0.08, 0, 0, Math.PI * 2);
            ctx.fill();
            // Flagella
            ctx.strokeStyle = '#9370DB';
            ctx.lineWidth = size * 0.02;
            ctx.beginPath();
            ctx.moveTo(size * 0.15, 0);
            ctx.quadraticCurveTo(size * 0.25, -size * 0.05, size * 0.3, 0);
            ctx.stroke();
        } else if (type === 'fungus') {
            // Mushroom
            ctx.fillStyle = '#CD853F';
            // Stem
            ctx.fillRect(-size * 0.05, -size * 0.15, size * 0.1, size * 0.3);
            // Cap
            ctx.fillStyle = '#DC143C';
            ctx.beginPath();
            ctx.arc(0, -size * 0.15, size * 0.15, 0, Math.PI, true);
            ctx.fill();
        } else if (type === 'algae') {
            ctx.strokeStyle = '#20B2AA';
            ctx.lineWidth = size * 0.03;
            ctx.beginPath();
            ctx.moveTo(0, 0);
            for (let i = 0; i < 5; i++) {
                ctx.lineTo(Math.cos(i * 0.4) * size * 0.15, -i * size * 0.08);
            }
            ctx.stroke();
        }
        
        ctx.restore();
    }
    
    // ===== ECOSYSTEM COMPONENTS =====
    
    static drawSun(ctx, x, y, radius) {
        ctx.save();
        ctx.translate(x, y);
        
        // Sun circle
        const gradient = ctx.createRadialGradient(0, 0, 0, 0, 0, radius);
        gradient.addColorStop(0, '#FFF700');
        gradient.addColorStop(0.5, '#FFD700');
        gradient.addColorStop(1, '#FFA500');
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(0, 0, radius, 0, Math.PI * 2);
        ctx.fill();
        
        // Sun rays
        ctx.strokeStyle = '#FFD700';
        ctx.lineWidth = radius * 0.1;
        ctx.lineCap = 'round';
        for (let i = 0; i < 12; i++) {
            const angle = (i / 12) * Math.PI * 2;
            ctx.beginPath();
            ctx.moveTo(Math.cos(angle) * radius * 1.2, Math.sin(angle) * radius * 1.2);
            ctx.lineTo(Math.cos(angle) * radius * 1.5, Math.sin(angle) * radius * 1.5);
            ctx.stroke();
        }
        
        ctx.restore();
    }
    
    static drawCloud(ctx, x, y, width, height) {
        ctx.save();
        ctx.translate(x, y);
        
        ctx.fillStyle = '#E0E0E0';
        ctx.beginPath();
        ctx.arc(-width * 0.3, 0, height * 0.5, 0, Math.PI * 2);
        ctx.arc(-width * 0.1, -height * 0.2, height * 0.6, 0, Math.PI * 2);
        ctx.arc(width * 0.1, -height * 0.1, height * 0.55, 0, Math.PI * 2);
        ctx.arc(width * 0.3, 0, height * 0.5, 0, Math.PI * 2);
        ctx.fill();
        
        ctx.restore();
    }
    
    static drawRain(ctx, x, y, width, height, density = 10) {
        ctx.save();
        ctx.translate(x, y);
        
        ctx.strokeStyle = '#4682B4';
        ctx.lineWidth = 2;
        ctx.lineCap = 'round';
        
        for (let i = 0; i < density; i++) {
            const rx = Math.random() * width - width / 2;
            const ry = Math.random() * height;
            ctx.beginPath();
            ctx.moveTo(rx, ry);
            ctx.lineTo(rx, ry + 10);
            ctx.stroke();
        }
        
        ctx.restore();
    }
    
    static drawMountain(ctx, x, y, width, height, snowCap = false) {
        ctx.save();
        ctx.translate(x, y);
        
        // Mountain body
        const gradient = ctx.createLinearGradient(0, 0, 0, height);
        gradient.addColorStop(0, '#8B7355');
        gradient.addColorStop(1, '#654321');
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.moveTo(-width / 2, height);
        ctx.lineTo(0, 0);
        ctx.lineTo(width / 2, height);
        ctx.closePath();
        ctx.fill();
        
        // Snow cap
        if (snowCap) {
            ctx.fillStyle = '#FFFFFF';
            ctx.beginPath();
            ctx.moveTo(-width * 0.2, height * 0.3);
            ctx.lineTo(0, 0);
            ctx.lineTo(width * 0.2, height * 0.3);
            ctx.closePath();
            ctx.fill();
        }
        
        ctx.restore();
    }
    
    static drawWater(ctx, x, y, width, height, type = 'lake') {
        ctx.save();
        ctx.translate(x, y);
        
        if (type === 'ocean') {
            // Deep blue gradient
            const gradient = ctx.createLinearGradient(0, 0, 0, height);
            gradient.addColorStop(0, '#4682B4');
            gradient.addColorStop(1, '#000080');
            ctx.fillStyle = gradient;
            ctx.fillRect(0, 0, width, height);
        } else if (type === 'lake') {
            ctx.fillStyle = '#4682B4';
            ctx.fillRect(0, 0, width, height);
        } else if (type === 'stream') {
            ctx.strokeStyle = '#4682B4';
            ctx.lineWidth = height;
            ctx.lineCap = 'round';
            ctx.beginPath();
            ctx.moveTo(0, height / 2);
            ctx.quadraticCurveTo(width * 0.3, 0, width * 0.6, height / 2);
            ctx.quadraticCurveTo(width * 0.8, height, width, height / 2);
            ctx.stroke();
        }
        
        // Waves
        if (type !== 'stream') {
            ctx.strokeStyle = '#87CEEB';
            ctx.lineWidth = 2;
            for (let i = 0; i < 5; i++) {
                ctx.beginPath();
                ctx.moveTo(0, i * height / 5);
                for (let x = 0; x < width; x += 20) {
                    ctx.lineTo(x, i * height / 5 + Math.sin(x / 10) * 3);
                }
                ctx.stroke();
            }
        }
        
        ctx.restore();
    }
    
    static drawSoilLayer(ctx, x, y, width, height, horizon) {
        ctx.save();
        ctx.translate(x, y);
        
        const colors = {
            'O': '#2F1B08', // Organic
            'A': '#3E2723', // Topsoil
            'B': '#8B4513', // Subsoil
            'C': '#D2691E', // Parent material
            'R': '#A0522D'  // Bedrock
        };
        
        ctx.fillStyle = colors[horizon] || '#8B4513';
        ctx.fillRect(0, 0, width, height);
        
        // Add texture
        ctx.fillStyle = 'rgba(0, 0, 0, 0.1)';
        for (let i = 0; i < 20; i++) {
            const px = Math.random() * width;
            const py = Math.random() * height;
            ctx.beginPath();
            ctx.arc(px, py, Math.random() * 3, 0, Math.PI * 2);
            ctx.fill();
        }
        
        ctx.restore();
    }
    
    static drawCoralFormation(ctx, x, y, size, type = 'branching') {
        ctx.save();
        ctx.translate(x, y);
        
        if (type === 'branching') {
            ctx.strokeStyle = '#FF6B9D';
            ctx.lineWidth = size * 0.05;
            ctx.lineCap = 'round';
            
            const drawBranch = (x, y, angle, depth) => {
                if (depth === 0) return;
                
                const length = size * 0.15;
                const endX = x + Math.cos(angle) * length;
                const endY = y + Math.sin(angle) * length;
                
                ctx.beginPath();
                ctx.moveTo(x, y);
                ctx.lineTo(endX, endY);
                ctx.stroke();
                
                drawBranch(endX, endY, angle - 0.5, depth - 1);
                drawBranch(endX, endY, angle + 0.5, depth - 1);
            };
            
            drawBranch(0, 0, -Math.PI / 2, 4);
        } else if (type === 'brain') {
            ctx.fillStyle = '#D2691E';
            ctx.strokeStyle = '#8B4513';
            ctx.lineWidth = 2;
            ctx.beginPath();
            ctx.arc(0, 0, size * 0.3, 0, Math.PI * 2);
            ctx.fill();
            ctx.stroke();
            
            // Brain-like ridges
            for (let i = 0; i < 6; i++) {
                ctx.beginPath();
                ctx.arc(0, 0, size * (0.15 + i * 0.03), 0, Math.PI * 2);
                ctx.stroke();
            }
        } else if (type === 'table') {
            ctx.fillStyle = '#DAA520';
            ctx.beginPath();
            ctx.ellipse(0, -size * 0.2, size * 0.4, size * 0.1, 0, 0, Math.PI * 2);
            ctx.fill();
            ctx.fillRect(-size * 0.1, -size * 0.2, size * 0.2, size * 0.3);
        }
        
        ctx.restore();
    }
    
    static drawIceberg(ctx, x, y, width, height) {
        ctx.save();
        ctx.translate(x, y);
        
        // Above water (20%)
        ctx.fillStyle = '#E0FFFF';
        ctx.beginPath();
        ctx.moveTo(-width * 0.3, 0);
        ctx.lineTo(-width * 0.2, -height * 0.2);
        ctx.lineTo(width * 0.2, -height * 0.2);
        ctx.lineTo(width * 0.3, 0);
        ctx.closePath();
        ctx.fill();
        ctx.strokeStyle = '#B0E0E6';
        ctx.lineWidth = 2;
        ctx.stroke();
        
        // Water line
        ctx.strokeStyle = '#4682B4';
        ctx.lineWidth = 3;
        ctx.beginPath();
        ctx.moveTo(-width, 0);
        ctx.lineTo(width, 0);
        ctx.stroke();
        
        // Below water (80%)
        ctx.fillStyle = '#B0E0E6';
        ctx.globalAlpha = 0.7;
        ctx.beginPath();
        ctx.moveTo(-width * 0.3, 0);
        ctx.lineTo(-width * 0.5, height * 0.5);
        ctx.lineTo(0, height * 0.8);
        ctx.lineTo(width * 0.5, height * 0.5);
        ctx.lineTo(width * 0.3, 0);
        ctx.closePath();
        ctx.fill();
        
        ctx.restore();
    }
    
    static drawArrow(ctx, x1, y1, x2, y2, color, label = '') {
        ctx.save();
        
        ctx.strokeStyle = color;
        ctx.fillStyle = color;
        ctx.lineWidth = 3;
        
        // Arrow line
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
        
        // Label
        if (label) {
            const midX = (x1 + x2) / 2;
            const midY = (y1 + y2) / 2;
            ctx.font = '12px Arial';
            ctx.fillStyle = color;
            ctx.textAlign = 'center';
            ctx.fillText(label, midX, midY - 5);
        }
        
        ctx.restore();
    }
    
    static drawCurvedArrow(ctx, x1, y1, x2, y2, color, label = '', curveAmount = 0.3) {
        ctx.save();
        
        ctx.strokeStyle = color;
        ctx.fillStyle = color;
        ctx.lineWidth = 3;
        
        // Calculate control point for curve
        const midX = (x1 + x2) / 2;
        const midY = (y1 + y2) / 2;
        const dx = x2 - x1;
        const dy = y2 - y1;
        const ctrlX = midX - dy * curveAmount;
        const ctrlY = midY + dx * curveAmount;
        
        // Curved line
        ctx.beginPath();
        ctx.moveTo(x1, y1);
        ctx.quadraticCurveTo(ctrlX, ctrlY, x2, y2);
        ctx.stroke();
        
        // Arrowhead
        const angle = Math.atan2(y2 - ctrlY, x2 - ctrlX);
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
        
        // Label
        if (label) {
            ctx.font = '12px Arial';
            ctx.fillStyle = color;
            ctx.textAlign = 'center';
            ctx.fillText(label, ctrlX, ctrlY - 5);
        }
        
        ctx.restore();
    }
}

// ============================================================================
// ECOLOGY DIAGRAM RENDERER CLASS
// ============================================================================

class EcologyDiagramRenderer {
    constructor(canvas = null) {
        this.defaultFont = 'Arial, sans-serif';
        this.defaultFontSize = 12;
        this.canvas = canvas;
        this.ctx = canvas ? canvas.getContext('2d') : null;
        this.currentFrame = 0;
    }
    
    renderDiagram(diagramKey, x, y, width, height, options = {}) {
        const diagram = EcologyDiagramsRegistry.getDiagram(diagramKey);
        if (!diagram) {
            throw new Error(`Ecology diagram '${diagramKey}' not found`);
        }
        
        const mergedOptions = { ...diagram.defaultOptions, ...options };
        
        this.ctx.save();
        this.ctx.translate(x, y);
        
        // Clear background
        this.ctx.fillStyle = mergedOptions.backgroundColor;
        this.ctx.fillRect(0, 0, width, height);
        
        // Title
        this.drawTitle(mergedOptions.title, width / 2, 30);
        
        const centerX = width / 2;
        const centerY = height / 2 + 30;
        
        try {
            switch (diagramKey) {
                // Energy Flow & Trophic Levels
                case 'foodChain':
                    this.renderFoodChainDiagram(centerX, centerY, width * 0.8, height * 0.6, mergedOptions);
                    break;
                case 'foodWeb':
                    this.renderFoodWebDiagram(centerX, centerY, width * 0.85, height * 0.7, mergedOptions);
                    break;
                case 'energyPyramid':
                    this.renderEnergyPyramidDiagram(centerX, centerY, width * 0.6, height * 0.6, mergedOptions);
                    break;
                case 'biomassPyramid':
                    this.renderBiomassPyramidDiagram(centerX, centerY, width * 0.6, height * 0.6, mergedOptions);
                    break;
                
                // Biogeochemical Cycles
                case 'carbonCycle':
                    this.renderCarbonCycleDiagram(centerX, centerY, width * 0.85, height * 0.7, mergedOptions);
                    break;
                case 'nitrogenCycle':
                    this.renderNitrogenCycleDiagram(centerX, centerY, width * 0.85, height * 0.7, mergedOptions);
                    break;
                case 'waterCycle':
                    this.renderWaterCycleDiagram(centerX, centerY, width * 0.85, height * 0.7, mergedOptions);
                    break;
                case 'phosphorusCycle':
                    this.renderPhosphorusCycleDiagram(centerX, centerY, width * 0.85, height * 0.7, mergedOptions);
                    break;
                
                // Ecosystem Types
                case 'forestEcosystem':
                    this.renderForestEcosystemDiagram(centerX, centerY, width * 0.8, height * 0.7, mergedOptions);
                    break;
                case 'aquaticEcosystem':
                    this.renderAquaticEcosystemDiagram(centerX, centerY, width * 0.8, height * 0.7, mergedOptions);
                    break;
                case 'marineEcosystem':
                    this.renderMarineEcosystemDiagram(centerX, centerY, width * 0.8, height * 0.8, mergedOptions);
                    break;
                case 'desertEcosystem':
                    this.renderDesertEcosystemDiagram(centerX, centerY, width * 0.8, height * 0.6, mergedOptions);
                    break;
                case 'grasslandEcosystem':
                    this.renderGrasslandEcosystemDiagram(centerX, centerY, width * 0.8, height * 0.6, mergedOptions);
                    break;
                case 'tundraEcosystem':
                    this.renderTundraEcosystemDiagram(centerX, centerY, width * 0.8, height * 0.6, mergedOptions);
                    break;
                case 'coralReef':
                    this.renderCoralReefDiagram(centerX, centerY, width * 0.85, height * 0.7, mergedOptions);
                    break;
                
                // Succession
                case 'successionPrimary':
                    this.renderPrimarySuccessionDiagram(centerX, centerY, width * 0.9, height * 0.6, mergedOptions);
                    break;
                case 'successionSecondary':
                    this.renderSecondarySuccessionDiagram(centerX, centerY, width * 0.9, height * 0.6, mergedOptions);
                    break;
                
                // Population Ecology
                case 'populationGrowth':
                    this.renderPopulationGrowthDiagram(centerX, centerY, width * 0.8, height * 0.6, mergedOptions);
                    break;
                case 'agePyramid':
                    this.renderAgePyramidDiagram(centerX, centerY, width * 0.5, height * 0.7, mergedOptions);
                    break;
                case 'predatorPrey':
                    this.renderPredatorPreyDiagram(centerX, centerY, width * 0.85, height * 0.6, mergedOptions);
                    break;
                
                // Species Interactions
                case 'nicheDiagram':
                    this.renderNicheDiagram(centerX, centerY, width * 0.8, height * 0.6, mergedOptions);
                    break;
                case 'symbioticRelationships':
                    this.renderSymbioticRelationshipsDiagram(centerX, centerY, width * 0.85, height * 0.7, mergedOptions);
                    break;
                case 'competitionTypes':
                    this.renderCompetitionTypesDiagram(centerX, centerY, width * 0.8, height * 0.6, mergedOptions);
                    break;
                
                // Climate & Biomes
                case 'climateZones':
                    this.renderClimateZonesDiagram(centerX, centerY, width * 0.85, height * 0.6, mergedOptions);
                    break;
                case 'biomeDistribution':
                    this.renderBiomeDistributionDiagram(centerX, centerY, width * 0.9, height * 0.6, mergedOptions);
                    break;
                case 'climateDiagram':
                    this.renderClimateDiagramDiagram(centerX, centerY, width * 0.7, height * 0.6, mergedOptions);
                    break;
                
                // Soil & Decomposition
                case 'soilProfile':
                    this.renderSoilProfileDiagram(centerX, centerY, width * 0.6, height * 0.8, mergedOptions);
                    break;
                case 'decompositionProcess':
                    this.renderDecompositionProcessDiagram(centerX, centerY, width * 0.8, height * 0.6, mergedOptions);
                    break;
                
                // Biodiversity & Conservation
                case 'biodiversityGradient':
                    this.renderBiodiversityGradientDiagram(centerX, centerY, width * 0.8, height * 0.6, mergedOptions);
                    break;
                case 'speciesAreaCurve':
                    this.renderSpeciesAreaCurveDiagram(centerX, centerY, width * 0.8, height * 0.6, mergedOptions);
                    break;
                case 'habitatFragmentation':
                    this.renderHabitatFragmentationDiagram(centerX, centerY, width * 0.9, height * 0.6, mergedOptions);
                    break;
                
                // Human Impact
                case 'invasiveSpecies':
                    this.renderInvasiveSpeciesDiagram(centerX, centerY, width * 0.85, height * 0.6, mergedOptions);
                    break;
                case 'pollutionImpact':
                    this.renderPollutionImpactDiagram(centerX, centerY, width * 0.8, height * 0.7, mergedOptions);
                    break;
                
                // Climate Change
                case 'greenhouseEffect':
                    this.renderGreenhouseEffectDiagram(centerX, centerY, width * 0.85, height * 0.6, mergedOptions);
                    break;
                case 'climateChangeImpacts':
                    this.renderClimateChangeImpactsDiagram(centerX, centerY, width * 0.9, height * 0.7, mergedOptions);
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
    
    // ========== FOOD CHAIN & FOOD WEB DIAGRAMS ==========
    
    renderFoodChainDiagram(x, y, width, height, options) {
        const { showLabels, showEnergyLoss, ecosystem } = options;
        
        this.ctx.save();
        this.ctx.translate(x - width / 2, y - height / 2);
        
        const levels = [
            { name: 'Producers', color: '#228B22', type: 'plant', y: height * 0.8 },
            { name: 'Primary Consumers', color: '#D2691E', type: 'herbivore', y: height * 0.6 },
            { name: 'Secondary Consumers', color: '#DC143C', type: 'carnivore', y: height * 0.4 },
            { name: 'Tertiary Consumers',color: '#8B0000', type: 'carnivore', y: height * 0.2 }
        ];
        
        const boxWidth = width * 0.25;
        const boxHeight = height * 0.12;
        
        // Draw sun
        EcologyShapes.drawSun(this.ctx, width * 0.1, height * 0.05, 30);
        if (showLabels) {
            this.addLabel('Solar Energy', width * 0.1, height * 0.12, '#FFA500');
        }
        
        // Draw each trophic level
        levels.forEach((level, index) => {
            const centerX = width / 2;
            const centerY = level.y;
            
            // Box
            this.ctx.fillStyle = level.color;
            this.ctx.fillRect(centerX - boxWidth / 2, centerY - boxHeight / 2, boxWidth, boxHeight);
            this.ctx.strokeStyle = '#2C3E50';
            this.ctx.lineWidth = 2;
            this.ctx.strokeRect(centerX - boxWidth / 2, centerY - boxHeight / 2, boxWidth, boxHeight);
            
            // Organism
            if (level.type === 'plant') {
                EcologyShapes.drawPlant(this.ctx, centerX, centerY, 40, 'generic');
            } else if (level.type === 'herbivore') {
                EcologyShapes.drawAnimal(this.ctx, centerX, centerY, 35, 'herbivore');
            } else if (level.type === 'carnivore') {
                EcologyShapes.drawAnimal(this.ctx, centerX, centerY, 35, index === 2 ? 'carnivore' : 'bird');
            }
            
            // Label
            if (showLabels) {
                this.ctx.fillStyle = '#FFFFFF';
                this.ctx.font = 'bold 12px Arial';
                this.ctx.textAlign = 'center';
                this.ctx.fillText(level.name, centerX, centerY - boxHeight / 2 + 12);
            }
            
            // Arrow to next level
            if (index < levels.length - 1) {
                EcologyShapes.drawArrow(
                    this.ctx,
                    centerX,
                    centerY - boxHeight / 2 - 5,
                    centerX,
                    levels[index + 1].y + boxHeight / 2 + 5,
                    '#34495E',
                    showEnergyLoss ? '10% Energy' : ''
                );
            }
        });
        
        // Energy loss to environment
        if (showEnergyLoss) {
            levels.forEach(level => {
                const centerX = width / 2;
                const centerY = level.y;
                EcologyShapes.drawArrow(
                    this.ctx,
                    centerX + boxWidth / 2 + 10,
                    centerY,
                    centerX + boxWidth / 2 + 70,
                    centerY - 20,
                    '#E74C3C',
                    '90% Heat'
                );
            });
        }
        
        this.ctx.restore();
    }
    
    renderFoodWebDiagram(x, y, width, height, options) {
        const { showLabels, complexity, ecosystem } = options;
        
        this.ctx.save();
        this.ctx.translate(x - width / 2, y - height / 2);
        
        // Define organisms at different trophic levels
        const organisms = {
            producers: [
                { name: 'Grass', x: width * 0.15, y: height * 0.85, type: 'grass' },
                { name: 'Shrub', x: width * 0.45, y: height * 0.85, type: 'shrub' },
                { name: 'Tree', x: width * 0.75, y: height * 0.85, type: 'tree' }
            ],
            herbivores: [
                { name: 'Rabbit', x: width * 0.25, y: height * 0.6, type: 'herbivore' },
                { name: 'Deer', x: width * 0.5, y: height * 0.6, type: 'herbivore' },
                { name: 'Insect', x: width * 0.75, y: height * 0.6, type: 'insect' }
            ],
            carnivores: [
                { name: 'Fox', x: width * 0.35, y: height * 0.35, type: 'carnivore' },
                { name: 'Hawk', x: width * 0.65, y: height * 0.35, type: 'bird' }
            ],
            apex: [
                { name: 'Wolf', x: width * 0.5, y: height * 0.15, type: 'carnivore' }
            ]
        };
        
        // Define feeding relationships
        const connections = [
            // Herbivores eating producers
            ['Grass', 'Rabbit'], ['Grass', 'Deer'], ['Shrub', 'Deer'],
            ['Shrub', 'Insect'], ['Tree', 'Insect'],
            // Carnivores eating herbivores
            ['Rabbit', 'Fox'], ['Rabbit', 'Hawk'], ['Deer', 'Wolf'],
            ['Insect', 'Hawk'],
            // Apex predators
            ['Fox', 'Wolf']
        ];
        
        // Draw connections first
        this.ctx.strokeStyle = 'rgba(52, 73, 94, 0.5)';
        this.ctx.lineWidth = 2;
        connections.forEach(([prey, predator]) => {
            let preyOrg = null, predOrg = null;
            Object.values(organisms).forEach(level => {
                level.forEach(org => {
                    if (org.name === prey) preyOrg = org;
                    if (org.name === predator) predOrg = org;
                });
            });
            
            if (preyOrg && predOrg) {
                EcologyShapes.drawArrow(
                    this.ctx,
                    preyOrg.x,
                    preyOrg.y - 15,
                    predOrg.x,
                    predOrg.y + 15,
                    'rgba(52, 73, 94, 0.5)'
                );
            }
        });
        
        // Draw organisms
        Object.values(organisms).forEach(level => {
            level.forEach(org => {
                // Circle background
                this.ctx.fillStyle = 'rgba(255, 255, 255, 0.9)';
                this.ctx.beginPath();
                this.ctx.arc(org.x, org.y, 25, 0, Math.PI * 2);
                this.ctx.fill();
                this.ctx.strokeStyle = '#2C3E50';
                this.ctx.lineWidth = 2;
                this.ctx.stroke();
                
                // Draw organism
                if (org.type === 'grass' || org.type === 'shrub' || org.type === 'tree') {
                    EcologyShapes.drawPlant(this.ctx, org.x, org.y, 35, org.type);
                } else {
                    EcologyShapes.drawAnimal(this.ctx, org.x, org.y, 30, org.type);
                }
                
                // Label
                if (showLabels) {
                    this.ctx.font = 'bold 10px Arial';
                    this.ctx.fillStyle = '#2C3E50';
                    this.ctx.textAlign = 'center';
                    this.ctx.fillText(org.name, org.x, org.y + 40);
                }
            });
        });
        
        // Legend for trophic levels
        if (showLabels) {
            this.drawLegend(width * 0.85, height * 0.05, [
                { color: '#228B22', label: 'Producers' },
                { color: '#D2691E', label: 'Herbivores' },
                { color: '#DC143C', label: 'Carnivores' },
                { color: '#8B0000', label: 'Apex Predators' }
            ]);
        }
        
        this.ctx.restore();
    }
    
    renderEnergyPyramidDiagram(x, y, width, height, options) {
        const { showLabels, showEnergy, showBiomass } = options;
        
        this.ctx.save();
        this.ctx.translate(x - width / 2, y - height / 2);
        
        const levels = [
            { name: 'Producers', color: '#228B22', energy: 10000, biomass: 1000, y: height * 0.8, width: width },
            { name: 'Primary Consumers', color: '#90EE90', energy: 1000, biomass: 100, y: height * 0.6, width: width * 0.75 },
            { name: 'Secondary Consumers', color: '#FFD700', energy: 100, biomass: 10, y: height * 0.4, width: width * 0.5 },
            { name: 'Tertiary Consumers', color: '#FF6347', energy: 10, biomass: 1, y: height * 0.2, width: width * 0.25 }
        ];
        
        const levelHeight = height * 0.15;
        
        // Draw pyramid levels
        levels.forEach((level, index) => {
            const centerX = width / 2;
            const levelWidth = level.width;
            
            // Draw trapezoid
            this.ctx.fillStyle = level.color;
            this.ctx.beginPath();
            this.ctx.moveTo(centerX - levelWidth / 2, level.y + levelHeight / 2);
            this.ctx.lineTo(centerX + levelWidth / 2, level.y + levelHeight / 2);
            
            if (index < levels.length - 1) {
                const nextWidth = levels[index + 1].width;
                this.ctx.lineTo(centerX + nextWidth / 2, level.y - levelHeight / 2);
                this.ctx.lineTo(centerX - nextWidth / 2, level.y - levelHeight / 2);
            } else {
                this.ctx.lineTo(centerX, level.y - levelHeight / 2);
            }
            this.ctx.closePath();
            this.ctx.fill();
            
            this.ctx.strokeStyle = '#2C3E50';
            this.ctx.lineWidth = 2;
            this.ctx.stroke();
            
            // Labels
            if (showLabels) {
                this.ctx.font = 'bold 14px Arial';
                this.ctx.fillStyle = '#FFFFFF';
                this.ctx.textAlign = 'center';
                this.ctx.fillText(level.name, centerX, level.y);
                
                if (showEnergy) {
                    this.ctx.font = '12px Arial';
                    this.ctx.fillText(`${level.energy} kcal/m²/yr`, centerX, level.y + 18);
                }
            }
        });
        
        // Sun
        EcologyShapes.drawSun(this.ctx, width * 0.1, height * 0.1, 35);
        
        // Energy flow annotation
        if (showLabels) {
            this.ctx.font = 'italic 11px Arial';
            this.ctx.fillStyle = '#E74C3C';
            this.ctx.textAlign = 'left';
            this.ctx.fillText('90% energy lost as heat', width * 0.75, height * 0.5);
            this.ctx.fillText('at each trophic level', width * 0.75, height * 0.52 + 12);
        }
        
        this.ctx.restore();
    }
    
    renderBiomassPyramidDiagram(x, y, width, height, options) {
        const { showLabels, type } = options;
        
        this.ctx.save();
        this.ctx.translate(x - width / 2, y - height / 2);
        
        let levels;
        
        if (type === 'upright') {
            levels = [
                { name: 'Producers', color: '#228B22', biomass: 1000, y: height * 0.8, width: width },
                { name: 'Herbivores', color: '#90EE90', biomass: 100, y: height * 0.6, width: width * 0.7 },
                { name: 'Carnivores', color: '#FFD700', biomass: 10, y: height * 0.4, width: width * 0.4 },
                { name: 'Top Carnivores', color: '#FF6347', biomass: 1, y: height * 0.2, width: width * 0.2 }
            ];
        } else {
            // Inverted (aquatic ecosystem)
            levels = [
                { name: 'Phytoplankton', color: '#228B22', biomass: 4, y: height * 0.8, width: width * 0.3 },
                { name: 'Zooplankton', color: '#90EE90', biomass: 21, y: height * 0.6, width: width * 0.5 },
                { name: 'Small Fish', color: '#FFD700', biomass: 50, y: height * 0.4, width: width * 0.75 },
                { name: 'Large Fish', color: '#FF6347', biomass: 100, y: height * 0.2, width: width }
            ];
        }
        
        const levelHeight = height * 0.15;
        
        // Draw pyramid
        levels.forEach((level, index) => {
            const centerX = width / 2;
            const levelWidth = level.width;
            
            this.ctx.fillStyle = level.color;
            this.ctx.fillRect(
                centerX - levelWidth / 2,
                level.y - levelHeight / 2,
                levelWidth,
                levelHeight
            );
            
            this.ctx.strokeStyle = '#2C3E50';
            this.ctx.lineWidth = 2;
            this.ctx.strokeRect(
                centerX - levelWidth / 2,
                level.y - levelHeight / 2,
                levelWidth,
                levelHeight
            );
            
            if (showLabels) {
                this.ctx.font = 'bold 13px Arial';
                this.ctx.fillStyle = '#FFFFFF';
                this.ctx.textAlign = 'center';
                this.ctx.fillText(level.name, centerX, level.y);
                this.ctx.font = '11px Arial';
                this.ctx.fillText(`${level.biomass} g/m²`, centerX, level.y + 15);
            }
        });
        
        // Title annotation
        if (showLabels) {
            this.ctx.font = 'italic 12px Arial';
            this.ctx.fillStyle = '#2C3E50';
            this.ctx.textAlign = 'center';
            this.ctx.fillText(
                type === 'upright' ? 'Terrestrial Ecosystem' : 'Aquatic Ecosystem',
                width / 2,
                height * 0.95
            );
        }
        
        this.ctx.restore();
    }
    
    // ========== BIOGEOCHEMICAL CYCLES ==========
    
    renderCarbonCycleDiagram(x, y, width, height, options) {
        const { showLabels, showProcesses } = options;
        
        this.ctx.save();
        this.ctx.translate(x - width / 2, y - height / 2);
        
        // Atmosphere
        this.ctx.fillStyle = '#87CEEB';
        this.ctx.globalAlpha = 0.3;
        this.ctx.fillRect(0, 0, width, height * 0.4);
        this.ctx.globalAlpha = 1;
        
        if (showLabels) {
            this.ctx.font = 'bold 16px Arial';
            this.ctx.fillStyle = '#2C3E50';
            this.ctx.textAlign = 'center';
            this.ctx.fillText('Atmosphere (CO₂)', width / 2, height * 0.1);
        }
        
        // Sun
        EcologyShapes.drawSun(this.ctx, width * 0.15, height * 0.15, 35);
        
        // Plants (terrestrial)
        EcologyShapes.drawPlant(this.ctx, width * 0.25, height * 0.55, 50, 'tree');
        EcologyShapes.drawPlant(this.ctx, width * 0.35, height * 0.55, 45, 'shrub');
        
        // Ocean
        EcologyShapes.drawWater(this.ctx, width * 0.55, height * 0.5, width * 0.4, height * 0.3, 'ocean');
        
        // Soil/Ground
        EcologyShapes.drawSoilLayer(this.ctx, 0, height * 0.65, width * 0.5, height * 0.15, 'A');
        
        // Fossil fuels
        this.ctx.fillStyle = '#2F4F4F';
        this.ctx.fillRect(width * 0.1, height * 0.85, width * 0.3, height * 0.1);
        if (showLabels) {
            this.ctx.fillStyle = '#FFFFFF';
            this.ctx.font = 'bold 12px Arial';
            this.ctx.textAlign = 'center';
            this.ctx.fillText('Fossil Fuels', width * 0.25, height * 0.91);
        }
        
        // Process arrows
        if (showProcesses) {
            // Photosynthesis
            EcologyShapes.drawCurvedArrow(
                this.ctx,
                width * 0.3, height * 0.35,
                width * 0.3, height * 0.48,
                '#228B22',
                'Photosynthesis'
            );
            
            // Respiration
            EcologyShapes.drawCurvedArrow(
                this.ctx,
                width * 0.35, height * 0.48,
                width * 0.35, height * 0.35,
                '#FF6347',
                'Respiration',
                -0.3
            );
            
            // Ocean absorption
            EcologyShapes.drawArrow(
                this.ctx,
                width * 0.7, height * 0.35,
                width * 0.7, height * 0.5,
                '#4682B4',
                'Dissolution'
            );
            
            // Ocean release
            EcologyShapes.drawArrow(
                this.ctx,
                width * 0.8, height * 0.5,
                width * 0.8, height * 0.35,
                '#4682B4',
                'Release'
            );
            
            // Decomposition
            EcologyShapes.drawArrow(
                this.ctx,
                width * 0.15, height * 0.65,
                width * 0.15, height * 0.35,
                '#8B4513',
                'Decomposition'
            );
            
            // Combustion
            EcologyShapes.drawArrow(
                this.ctx,
                width * 0.25, height * 0.82,
                width * 0.4, height * 0.35,
                '#FF4500',
                'Combustion'
            );
            
            // Burial/Fossilization
            EcologyShapes.drawArrow(
                this.ctx,
                width * 0.2, height * 0.75,
                width * 0.2, height * 0.83,
                '#654321',
                'Burial'
            );
        }
        
        this.ctx.restore();
    }
    
    renderNitrogenCycleDiagram(x, y, width, height, options) {
        const { showLabels, showProcesses, showBacteria } = options;
        
        this.ctx.save();
        this.ctx.translate(x - width / 2, y - height / 2);
        
        // Atmosphere
        this.ctx.fillStyle = '#87CEEB';
        this.ctx.globalAlpha = 0.3;
        this.ctx.fillRect(0, 0, width, height * 0.35);
        this.ctx.globalAlpha = 1;
        
        if (showLabels) {
            this.ctx.font = 'bold 16px Arial';
            this.ctx.fillStyle = '#2C3E50';
            this.ctx.textAlign = 'center';
            this.ctx.fillText('Atmosphere (N₂ - 78%)', width / 2, height * 0.1);
        }
        
        // Plants
        EcologyShapes.drawPlant(this.ctx, width * 0.3, height * 0.55, 50, 'tree');
        EcologyShapes.drawPlant(this.ctx, width * 0.4, height * 0.55, 45, 'generic');
        
        // Animals
        EcologyShapes.drawAnimal(this.ctx, width * 0.6, height * 0.5, 40, 'herbivore');
        
        // Soil layers
        EcologyShapes.drawSoilLayer(this.ctx, 0, height * 0.65, width, height * 0.15, 'A');
        EcologyShapes.drawSoilLayer(this.ctx, 0, height * 0.8, width, height * 0.2, 'B');
        
        // Bacteria/microorganisms
        if (showBacteria) {
            // Nitrogen-fixing bacteria
            for (let i = 0; i < 5; i++) {
                EcologyShapes.drawMicroorganism(
                    this.ctx,
                    width * (0.2 + i * 0.08),
                    height * 0.72,
                    15,
                    'bacteria'
                );
            }
            
            // Nitrifying bacteria
            for (let i = 0; i < 4; i++) {
                EcologyShapes.drawMicroorganism(
                    this.ctx,
                    width * (0.55 + i * 0.08),
                    height * 0.72,
                    15,
                    'bacteria'
                );
            }
        }
        
        // Process arrows and labels
        if (showProcesses) {
            // Nitrogen fixation
            EcologyShapes.drawArrow(
                this.ctx,
                width * 0.25, height * 0.35,
                width * 0.25, height * 0.65,
                '#9370DB',
                'Nitrogen Fixation'
            );
            
            // Plant uptake
            EcologyShapes.drawArrow(
                this.ctx,
                width * 0.35, height * 0.65,
                width * 0.35, height * 0.52,
                '#228B22',
                'Uptake (NO₃⁻)'
            );
            
            // Consumption
            EcologyShapes.drawArrow(
                this.ctx,
                width * 0.42, height * 0.5,
                width * 0.55, height * 0.5,
                '#D2691E',
                'Consumption'
            );
            
            // Excretion/Death
            EcologyShapes.drawArrow(
                this.ctx,
                width * 0.6, height * 0.55,
                width * 0.6, height * 0.7,
                '#8B4513',
                'Excretion'
            );
            
            // Ammonification
            EcologyShapes.drawCurvedArrow(
                this.ctx,
                width * 0.65, height * 0.72,
                width * 0.55, height * 0.85,
                '#A0522D',
                'Ammonification (NH₃)',
                0.2
            );
            
            // Nitrification
            EcologyShapes.drawCurvedArrow(
                this.ctx,
                width * 0.6, height * 0.85,
                width * 0.7, height * 0.72,
                '#FF6347',
                'Nitrification (NO₃⁻)',
                -0.2
            );
            
            // Denitrification
            EcologyShapes.drawArrow(
                this.ctx,
                width * 0.75, height * 0.7,
                width * 0.75, height * 0.35,
                '#4169E1',
                'Denitrification'
            );
        }
        
        // Legend
        if (showLabels && showBacteria) {
            this.drawLegend(width * 0.02, height * 0.4, [
                { color: '#9370DB', label: 'N₂ Fixing Bacteria' },
                { color: '#FF6347', label: 'Nitrifying Bacteria' },
                { color: '#4169E1', label: 'Denitrifying Bacteria' }
            ]);
        }
        
        this.ctx.restore();
    }
    
    renderWaterCycleDiagram(x, y, width, height, options) {
        const { showLabels, showProcesses, landscape } = options;
        
        this.ctx.save();
        this.ctx.translate(x - width / 2, y - height / 2);
        
        // Sky
        const skyGradient = this.ctx.createLinearGradient(0, 0, 0, height * 0.5);
        skyGradient.addColorStop(0, '#87CEEB');
        skyGradient.addColorStop(1, '#B0E0E6');
        this.ctx.fillStyle = skyGradient;
        this.ctx.fillRect(0, 0, width, height * 0.5);
        
        // Sun
        EcologyShapes.drawSun(this.ctx, width * 0.15, height * 0.1, 35);
        
        // Clouds
        EcologyShapes.drawCloud(this.ctx, width * 0.3, height * 0.15, 80, 30);
        EcologyShapes.drawCloud(this.ctx, width * 0.7, height * 0.2, 90, 35);
        
        // Rain
        EcologyShapes.drawRain(this.ctx, width * 0.7, height * 0.25, 60, 100, 15);
        
        // Mountains
        EcologyShapes.drawMountain(this.ctx, width * 0.25, height * 0.35, 150, 200, true);
        
        // Ocean
        EcologyShapes.drawWater(this.ctx, width * 0.6, height * 0.55, width * 0.4, height * 0.45, 'ocean');
        
        // Land
        this.ctx.fillStyle = '#8FBC8F';
        this.ctx.beginPath();
        this.ctx.moveTo(0, height * 0.55);
        this.ctx.lineTo(width * 0.6, height * 0.55);
        this.ctx.lineTo(width * 0.6, height);
        this.ctx.lineTo(0, height);
        this.ctx.closePath();
        this.ctx.fill();
        
        // Lake
        EcologyShapes.drawWater(this.ctx, width * 0.45, height * 0.6, 80, 40, 'lake');
        
        // Vegetation
        EcologyShapes.drawPlant(this.ctx, width * 0.15, height * 0.7, 40, 'tree');
        EcologyShapes.drawPlant(this.ctx, width * 0.25, height * 0.72, 35, 'shrub');
        
        // Underground water
        this.ctx.fillStyle = 'rgba(70, 130, 180, 0.3)';
        this.ctx.fillRect(0, height * 0.8, width * 0.6, height * 0.2);
        if (showLabels) {
            this.ctx.fillStyle = '#2C3E50';
            this.ctx.font = 'bold 12px Arial';
            this.ctx.textAlign = 'center';
            this.ctx.fillText('Groundwater', width * 0.3, height * 0.9);
        }
        
        // Process arrows
        if (showProcesses) {
            // Evaporation from ocean
            EcologyShapes.drawCurvedArrow(
                this.ctx,
                width * 0.75, height * 0.55,
                width * 0.7, height * 0.25,
                '#4169E1',
                'Evaporation',
                -0.2
            );
            
            // Evapotranspiration from plants
            EcologyShapes.drawCurvedArrow(
                this.ctx,
                width * 0.2, height * 0.65,
                width * 0.3, height * 0.25,
                '#228B22',
                'Transpiration',
                -0.3
            );
            
            // Precipitation
            if (showLabels) {
                this.ctx.font = 'bold 11px Arial';
                this.ctx.fillStyle = '#4682B4';
                this.ctx.textAlign = 'center';
                this.ctx.fillText('Precipitation', width * 0.7, height * 0.15);
            }
            
            // Runoff
            EcologyShapes.drawCurvedArrow(
                this.ctx,
                width * 0.35, height * 0.72,
                width * 0.48, height * 0.62,
                '#1E90FF',
                'Runoff',
                0.15
            );
            
            // Infiltration
            EcologyShapes.drawArrow(
                this.ctx,
                width * 0.4, height * 0.72,
                width * 0.4, height * 0.82,
                '#4682B4',
                'Infiltration'
            );
            
            // Groundwater flow
            EcologyShapes.drawArrow(
                this.ctx,
                width * 0.5, height * 0.9,
                width * 0.6, height * 0.9,
                '#5F9EA0',
                ''
            );
        }
        
        this.ctx.restore();
    }
    
    renderPhosphorusCycleDiagram(x, y, width, height, options) {
        const { showLabels, showProcesses } = options;
        
        this.ctx.save();
        this.ctx.translate(x - width / 2, y - height / 2);
        
        // Sky
        this.ctx.fillStyle = '#87CEEB';
        this.ctx.fillRect(0, 0, width, height * 0.3);
        
        // Mountains/Rocks
        EcologyShapes.drawMountain(this.ctx, width * 0.2, height * 0.3, 120, 150, false);
        
        // Land
        this.ctx.fillStyle = '#8FBC8F';
        this.ctx.fillRect(0, height * 0.48, width * 0.6,height * 0.25);
        
        // Soil
        EcologyShapes.drawSoilLayer(this.ctx, 0, height * 0.73, width * 0.6, height * 0.27, 'A');
        
        // Ocean
        EcologyShapes.drawWater(this.ctx, width * 0.6, height * 0.5, width * 0.4, height * 0.5, 'ocean');
        
        // Plants
        EcologyShapes.drawPlant(this.ctx, width * 0.35, height * 0.6, 45, 'tree');
        EcologyShapes.drawPlant(this.ctx, width * 0.45, height * 0.62, 40, 'generic');
        
        // Animals
        EcologyShapes.drawAnimal(this.ctx, width * 0.25, height * 0.65, 35, 'herbivore');
        
        // Sediments at ocean floor
        this.ctx.fillStyle = '#D2691E';
        this.ctx.fillRect(width * 0.6, height * 0.95, width * 0.4, height * 0.05);
        
        if (showLabels) {
            this.ctx.font = 'bold 14px Arial';
            this.ctx.fillStyle = '#2C3E50';
            this.ctx.textAlign = 'center';
            
            this.ctx.fillText('Rock Phosphates', width * 0.2, height * 0.4);
            this.ctx.fillText('Soil Phosphates', width * 0.15, height * 0.85);
            this.ctx.fillText('Marine Sediments', width * 0.8, height * 0.98);
        }
        
        // Process arrows
        if (showProcesses) {
            // Weathering
            EcologyShapes.drawArrow(
                this.ctx,
                width * 0.22, height * 0.48,
                width * 0.18, height * 0.73,
                '#8B4513',
                'Weathering'
            );
            
            // Plant uptake
            EcologyShapes.drawArrow(
                this.ctx,
                width * 0.38, height * 0.73,
                width * 0.38, height * 0.63,
                '#228B22',
                'Uptake'
            );
            
            // Consumption
            EcologyShapes.drawArrow(
                this.ctx,
                width * 0.32, height * 0.62,
                width * 0.28, height * 0.65,
                '#D2691E',
                'Consumption'
            );
            
            // Decomposition/Excretion
            EcologyShapes.drawCurvedArrow(
                this.ctx,
                width * 0.28, height * 0.7,
                width * 0.22, height * 0.78,
                '#8B4513',
                'Decomposition',
                0.2
            );
            
            // Runoff to ocean
            EcologyShapes.drawCurvedArrow(
                this.ctx,
                width * 0.5, height * 0.78,
                width * 0.65, height * 0.6,
                '#4682B4',
                'Runoff',
                -0.2
            );
            
            // Sedimentation
            EcologyShapes.drawArrow(
                this.ctx,
                width * 0.75, height * 0.7,
                width * 0.75, height * 0.93,
                '#A0522D',
                'Sedimentation'
            );
            
            // Uplift (geological time)
            EcologyShapes.drawCurvedArrow(
                this.ctx,
                width * 0.85, height * 0.95,
                width * 0.3, height * 0.45,
                '#654321',
                'Uplift (millions of years)',
                -0.4
            );
        }
        
        // Note about no atmospheric component
        if (showLabels) {
            this.ctx.font = 'italic 11px Arial';
            this.ctx.fillStyle = '#E74C3C';
            this.ctx.textAlign = 'left';
            this.ctx.fillText('Note: Phosphorus has no significant', width * 0.02, height * 0.15);
            this.ctx.fillText('atmospheric component', width * 0.02, height * 0.15 + 12);
        }
        
        this.ctx.restore();
    }
    
    // ========== ECOSYSTEM TYPES ==========
    
    renderForestEcosystemDiagram(x, y, width, height, options) {
        const { showLabels, showLayers, forestType } = options;
        
        this.ctx.save();
        this.ctx.translate(x - width / 2, y - height / 2);
        
        // Sky
        this.ctx.fillStyle = '#87CEEB';
        this.ctx.fillRect(0, 0, width, height * 0.2);
        
        // Canopy layer
        const canopyY = height * 0.35;
        this.ctx.fillStyle = 'rgba(34, 139, 34, 0.7)';
        this.ctx.fillRect(0, canopyY, width, height * 0.15);
        
        // Trees - Emergent and Canopy
        for (let i = 0; i < 5; i++) {
            const treeX = width * (0.15 + i * 0.18);
            const treeHeight = forestType === 'tropical' ? 80 + Math.random() * 40 : 70 + Math.random() * 30;
            EcologyShapes.drawPlant(this.ctx, treeX, canopyY + height * 0.05, treeHeight, 'tree');
        }
        
        // Understory layer
        const understoryY = height * 0.6;
        this.ctx.fillStyle = 'rgba(60, 179, 113, 0.5)';
        this.ctx.fillRect(0, understoryY, width, height * 0.1);
        
        // Understory vegetation
        for (let i = 0; i < 7; i++) {
            const shrubX = width * (0.1 + i * 0.13);
            EcologyShapes.drawPlant(this.ctx, shrubX, understoryY + 20, 45, 'shrub');
        }
        
        // Forest floor
        this.ctx.fillStyle = '#8B4513';
        this.ctx.fillRect(0, height * 0.75, width, height * 0.05);
        
        // Ground vegetation
        for (let i = 0; i < 15; i++) {
            const grassX = width * (0.05 + i * 0.065);
            EcologyShapes.drawPlant(this.ctx, grassX, height * 0.77, 25, 'grass');
        }
        
        // Soil layers
        EcologyShapes.drawSoilLayer(this.ctx, 0, height * 0.8, width, height * 0.1, 'O');
        EcologyShapes.drawSoilLayer(this.ctx, 0, height * 0.9, width, height * 0.1, 'A');
        
        // Animals
        EcologyShapes.drawAnimal(this.ctx, width * 0.7, height * 0.68, 30, 'herbivore');
        EcologyShapes.drawAnimal(this.ctx, width * 0.25, canopyY + 10, 25, 'bird');
        EcologyShapes.drawAnimal(this.ctx, width * 0.85, height * 0.65, 35, 'carnivore');
        
        // Decomposers
        for (let i = 0; i < 6; i++) {
            EcologyShapes.drawMicroorganism(
                this.ctx,
                width * (0.1 + i * 0.15),
                height * 0.82,
                12,
                'fungus'
            );
        }
        
        // Layer labels
        if (showLabels && showLayers) {
            this.ctx.font = 'bold 12px Arial';
            this.ctx.fillStyle = '#2C3E50';
            this.ctx.textAlign = 'left';
            
            // Draw label boxes
            const labels = [
                { text: 'Emergent Layer', y: height * 0.25 },
                { text: 'Canopy Layer', y: height * 0.42 },
                { text: 'Understory', y: height * 0.65 },
                { text: 'Forest Floor', y: height * 0.77 },
                { text: 'Soil & Roots', y: height * 0.85 }
            ];
            
            labels.forEach(label => {
                this.ctx.fillStyle = 'rgba(255, 255, 255, 0.8)';
                this.ctx.fillRect(width * 0.02, label.y - 12, 100, 18);
                this.ctx.strokeStyle = '#2C3E50';
                this.ctx.lineWidth = 1;
                this.ctx.strokeRect(width * 0.02, label.y - 12, 100, 18);
                
                this.ctx.fillStyle = '#2C3E50';
                this.ctx.fillText(label.text, width * 0.03, label.y);
            });
        }
        
        this.ctx.restore();
    }
    
    renderAquaticEcosystemDiagram(x, y, width, height, options) {
        const { showLabels, showZones, type } = options;
        
        this.ctx.save();
        this.ctx.translate(x - width / 2, y - height / 2);
        
        // Sky
        this.ctx.fillStyle = '#87CEEB';
        this.ctx.fillRect(0, 0, width, height * 0.15);
        
        // Sun
        EcologyShapes.drawSun(this.ctx, width * 0.1, height * 0.08, 25);
        
        // Water zones with depth gradient
        const waterGradient = this.ctx.createLinearGradient(0, height * 0.15, 0, height);
        waterGradient.addColorStop(0, '#87CEEB');
        waterGradient.addColorStop(0.3, '#4682B4');
        waterGradient.addColorStop(0.7, '#191970');
        waterGradient.addColorStop(1, '#000033');
        this.ctx.fillStyle = waterGradient;
        this.ctx.fillRect(0, height * 0.15, width, height * 0.85);
        
        // Shore/Littoral zone
        this.ctx.fillStyle = '#8FBC8F';
        this.ctx.beginPath();
        this.ctx.moveTo(0, height * 0.15);
        this.ctx.lineTo(width * 0.2, height * 0.25);
        this.ctx.lineTo(width * 0.2, height);
        this.ctx.lineTo(0, height);
        this.ctx.closePath();
        this.ctx.fill();
        
        // Vegetation in littoral zone
        for (let i = 0; i < 5; i++) {
            const plantX = width * (0.05 + i * 0.03);
            const plantY = height * 0.25 + i * 15;
            EcologyShapes.drawPlant(this.ctx, plantX, plantY, 40, 'grass');
        }
        
        // Phytoplankton (small green dots in euphotic zone)
        this.ctx.fillStyle = '#90EE90';
        for (let i = 0; i < 30; i++) {
            const px = width * (0.2 + Math.random() * 0.6);
            const py = height * (0.2 + Math.random() * 0.2);
            this.ctx.beginPath();
            this.ctx.arc(px, py, 2, 0, Math.PI * 2);
            this.ctx.fill();
        }
        
        // Zooplankton
        for (let i = 0; i < 15; i++) {
            const zx = width * (0.25 + Math.random() * 0.5);
            const zy = height * (0.25 + Math.random() * 0.25);
            EcologyShapes.drawMicroorganism(this.ctx, zx, zy, 8, 'algae');
        }
        
        // Fish at different depths
        EcologyShapes.drawAnimal(this.ctx, width * 0.4, height * 0.35, 25, 'insect'); // Small fish
        EcologyShapes.drawAnimal(this.ctx, width * 0.65, height * 0.45, 30, 'insect');
        EcologyShapes.drawAnimal(this.ctx, width * 0.5, height * 0.6, 35, 'carnivore'); // Larger fish
        
        // Benthic organisms
        for (let i = 0; i < 4; i++) {
            const bx = width * (0.3 + i * 0.15);
            EcologyShapes.drawMicroorganism(this.ctx, bx, height * 0.95, 15, 'bacteria');
        }
        
        // Sediment
        this.ctx.fillStyle = '#8B7355';
        this.ctx.fillRect(width * 0.2, height * 0.95, width * 0.8, height * 0.05);
        
        // Zone labels
        if (showLabels && showZones) {
            this.ctx.font = 'bold 12px Arial';
            this.ctx.textAlign = 'left';
            
            const zones = [
                { name: 'Littoral Zone', y: height * 0.3, color: '#228B22' },
                { name: 'Limnetic Zone\n(Open Water)', y: height * 0.45, color: '#4682B4' },
                { name: 'Profundal Zone\n(Deep Water)', y: height * 0.75, color: '#191970' },
                { name: 'Benthic Zone\n(Bottom)', y: height * 0.93, color: '#8B7355' }
            ];
            
            zones.forEach(zone => {
                this.ctx.fillStyle = 'rgba(255, 255, 255, 0.9)';
                const boxHeight = zone.name.includes('\n') ? 32 : 18;
                this.ctx.fillRect(width * 0.75, zone.y - 12, 120, boxHeight);
                this.ctx.strokeStyle = zone.color;
                this.ctx.lineWidth = 2;
                this.ctx.strokeRect(width * 0.75, zone.y - 12, 120, boxHeight);
                
                this.ctx.fillStyle = zone.color;
                const lines = zone.name.split('\n');
                lines.forEach((line, i) => {
                    this.ctx.fillText(line, width * 0.76, zone.y + i * 13);
                });
            });
            
            // Light penetration
            this.ctx.strokeStyle = '#FFD700';
            this.ctx.lineWidth = 2;
            this.ctx.setLineDash([5, 5]);
            this.ctx.beginPath();
            this.ctx.moveTo(width * 0.15, height * 0.15);
            this.ctx.lineTo(width * 0.25, height * 0.5);
            this.ctx.stroke();
            this.ctx.setLineDash([]);
            
            this.ctx.fillStyle = '#FFD700';
            this.ctx.fillText('Light Zone', width * 0.27, height * 0.35);
            this.ctx.fillText('(Euphotic)', width * 0.27, height * 0.35 + 13);
        }
        
        this.ctx.restore();
    }
    
    renderMarineEcosystemDiagram(x, y, width, height, options) {
        const { showLabels, showZones, showOrganisms } = options;
        
        this.ctx.save();
        this.ctx.translate(x - width / 2, y - height / 2);
        
        // Sky
        this.ctx.fillStyle = '#87CEEB';
        this.ctx.fillRect(0, 0, width, height * 0.1);
        
        // Ocean depth gradient
        const oceanGradient = this.ctx.createLinearGradient(0, height * 0.1, 0, height);
        oceanGradient.addColorStop(0, '#ADD8E6');
        oceanGradient.addColorStop(0.2, '#4682B4');
        oceanGradient.addColorStop(0.4, '#191970');
        oceanGradient.addColorStop(0.7, '#000033');
        oceanGradient.addColorStop(1, '#000000');
        this.ctx.fillStyle = oceanGradient;
        this.ctx.fillRect(0, height * 0.1, width, height * 0.9);
        
        // Waves at surface
        this.ctx.strokeStyle = '#FFFFFF';
        this.ctx.lineWidth = 2;
        this.ctx.beginPath();
        for (let x = 0; x < width; x += 20) {
            this.ctx.lineTo(x, height * 0.1 + Math.sin(x / 15) * 3);
        }
        this.ctx.stroke();
        
        // Continental shelf
        this.ctx.fillStyle = '#D2B48C';
        this.ctx.beginPath();
        this.ctx.moveTo(0, height * 0.45);
        this.ctx.lineTo(width * 0.3, height * 0.45);
        this.ctx.lineTo(width * 0.4, height * 0.65);
        this.ctx.lineTo(0, height * 0.65);
        this.ctx.closePath();
        this.ctx.fill();
        
        // Ocean floor
        this.ctx.fillStyle = '#8B7355';
        this.ctx.beginPath();
        this.ctx.moveTo(0, height * 0.95);
        this.ctx.lineTo(width * 0.4, height * 0.65);
        this.ctx.lineTo(width, height * 0.75);
        this.ctx.lineTo(width, height);
        this.ctx.lineTo(0, height);
        this.ctx.closePath();
        this.ctx.fill();
        
        if (showOrganisms) {
            // Phytoplankton in epipelagic zone
            this.ctx.fillStyle = '#90EE90';
            for (let i = 0; i < 40; i++) {
                const px = width * Math.random();
                const py = height * (0.15 + Math.random() * 0.15);
                this.ctx.beginPath();
                this.ctx.arc(px, py, 1.5, 0, Math.PI * 2);
                this.ctx.fill();
            }
            
            // Marine life at different zones
            EcologyShapes.drawAnimal(this.ctx, width * 0.25, height * 0.2, 30, 'insect'); // Surface fish
            EcologyShapes.drawAnimal(this.ctx, width * 0.6, height * 0.25, 28, 'bird'); // Flying fish
            EcologyShapes.drawAnimal(this.ctx, width * 0.4, height * 0.4, 35, 'carnivore'); // Medium fish
            EcologyShapes.drawAnimal(this.ctx, width * 0.7, height * 0.55, 40, 'carnivore'); // Large predator
            
            // Deep sea creatures
            this.ctx.fillStyle = '#FFD700';
            this.ctx.beginPath();
            this.ctx.arc(width * 0.5, height * 0.8, 8, 0, Math.PI * 2);
            this.ctx.fill();
            this.ctx.fillStyle = '#FFFFFF';
            this.ctx.font = '10px Arial';
            this.ctx.textAlign = 'center';
            this.ctx.fillText('Anglerfish', width * 0.5, height * 0.85);
            
            // Coral reef on shelf
            for (let i = 0; i < 4; i++) {
                const coralX = width * (0.1 + i * 0.05);
                const coralY = height * 0.43;
                EcologyShapes.drawCoralFormation(this.ctx, coralX, coralY, 25, i % 2 === 0 ? 'branching' : 'brain');
            }
            
            // Benthic organisms
            for (let i = 0; i < 5; i++) {
                EcologyShapes.drawMicroorganism(
                    this.ctx,
                    width * (0.5 + i * 0.08),
                    height * 0.74,
                    12,
                    'bacteria'
                );
            }
        }
        
        // Zone labels and depth markers
        if (showLabels && showZones) {
            const zones = [
                { name: 'Epipelagic', depth: '0-200m', y: height * 0.2, color: '#4682B4' },
                { name: 'Mesopelagic', depth: '200-1000m', y: height * 0.42, color: '#191970' },
                { name: 'Bathypelagic', depth: '1000-4000m', y: height * 0.65, color: '#000033' },
                { name: 'Abyssopelagic', depth: '4000-6000m', y: height * 0.85, color: '#000000' }
            ];
            
            zones.forEach(zone => {
                this.ctx.fillStyle = 'rgba(255, 255, 255, 0.85)';
                this.ctx.fillRect(width * 0.02, zone.y - 12, 110, 28);
                this.ctx.strokeStyle = zone.color;
                this.ctx.lineWidth = 2;
                this.ctx.strokeRect(width * 0.02, zone.y - 12, 110, 28);
                
                this.ctx.fillStyle = zone.color;
                this.ctx.font = 'bold 11px Arial';
                this.ctx.textAlign = 'left';
                this.ctx.fillText(zone.name, width * 0.03, zone.y);
                this.ctx.font = '10px Arial';
                this.ctx.fillText(zone.depth, width * 0.03, zone.y + 12);
            });
            
            // Light penetration
            this.ctx.fillStyle = 'rgba(255, 215, 0, 0.3)';
            this.ctx.fillRect(0, height * 0.1, width, height * 0.2);
            this.ctx.fillStyle = '#FFD700';
            this.ctx.font = 'bold 12px Arial';
            this.ctx.textAlign = 'center';
            this.ctx.fillText('Sunlight Zone', width * 0.5, height * 0.18);
        }
        
        this.ctx.restore();
    }
    
    renderDesertEcosystemDiagram(x, y, width, height, options) {
        const { showLabels, showAdaptations } = options;
        
        this.ctx.save();
        this.ctx.translate(x - width / 2, y - height / 2);
        
        // Sky
        const skyGradient = this.ctx.createLinearGradient(0, 0, 0, height * 0.4);
        skyGradient.addColorStop(0, '#87CEEB');
        skyGradient.addColorStop(1, '#F0E68C');
        this.ctx.fillStyle = skyGradient;
        this.ctx.fillRect(0, 0, width, height * 0.4);
        
        // Hot sun
        EcologyShapes.drawSun(this.ctx, width * 0.85, height * 0.1, 45);
        
        // Sand dunes
        this.ctx.fillStyle = '#F4A460';
        this.ctx.beginPath();
        this.ctx.moveTo(0, height * 0.7);
        for (let x = 0; x <= width; x += 100) {
            this.ctx.quadraticCurveTo(
                x + 50, height * (0.6 + Math.random() * 0.1),
                x + 100, height * 0.7
            );
        }
        this.ctx.lineTo(width, height);
        this.ctx.lineTo(0, height);
        this.ctx.closePath();
        this.ctx.fill();
        
        // Rock formations
        this.ctx.fillStyle = '#CD853F';
        this.ctx.fillRect(width * 0.1, height * 0.55, 60, 80);
        this.ctx.fillRect(width * 0.75, height * 0.6, 50, 60);
        
        // Desert plants (cacti and succulents)
        // Saguaro cactus
        this.ctx.fillStyle = '#2E8B57';
        this.ctx.fillRect(width * 0.3, height * 0.55, 15, 80);
        this.ctx.fillRect(width * 0.29, height * 0.65, 25, 12);
        this.ctx.fillRect(width * 0.34, height * 0.7, 25, 12);
        
        // Barrel cactus
        this.ctx.fillStyle = '#3CB371';
        this.ctx.beginPath();
        this.ctx.ellipse(width * 0.5, height * 0.75, 20, 25, 0, 0, Math.PI * 2);
        this.ctx.fill();
        // Spines
        for (let i = 0; i < 8; i++) {
            const angle = (i / 8) * Math.PI * 2;
            this.ctx.strokeStyle = '#FFD700';
            this.ctx.lineWidth = 1;
            this.ctx.beginPath();
            this.ctx.moveTo(width * 0.5, height * 0.75);
            ctx.lineTo(
                width * 0.5 + Math.cos(angle) * 22,
                height * 0.75 + Math.sin(angle) * 27
            );
            this.ctx.stroke();
        }
        
        // Prickly pear
        for (let i = 0; i < 3; i++) {
            this.ctx.fillStyle = '#90EE90';
            this.ctx.beginPath();
            this.ctx.ellipse(
                width * (0.65 + i * 0.04),
                height * (0.8 - i * 0.05),
                18, 25, 0.3 * i, 0, Math.PI * 2
            );
            this.ctx.fill();
        }
        
        // Desert animals
        EcologyShapes.drawAnimal(this.ctx, width * 0.25, height * 0.75, 30, 'herbivore'); // Desert rodent
        EcologyShapes.drawAnimal(this.ctx, width * 0.55, height * 0.68, 35, 'carnivore'); // Coyote
        EcologyShapes.drawAnimal(this.ctx, width * 0.8, height * 0.5, 25, 'bird'); // Desert bird
        
        // Lizard
        this.ctx.fillStyle = '#8B7355';
        this.ctx.fillRect(width * 0.42, height * 0.82, 25, 5);
        this.ctx.fillRect(width * 0.4, height * 0.8, 8, 8);
        
        // Scorpion
        this.ctx.strokeStyle = '#654321';
        this.ctx.lineWidth = 2;
        this.ctx.beginPath();
        this.ctx.moveTo(width * 0.18, height * 0.85);
        this.ctx.lineTo(width * 0.16, height * 0.83);
        this.ctx.lineTo(width * 0.15, height * 0.81);
        this.ctx.stroke();
        
        // Adaptation callouts
        if (showAdaptations) {
            const adaptations = [
                { x: width * 0.32, y: height * 0.5, text: 'Water storage\nin stems' },
                { x: width * 0.52, y: height * 0.65, text: 'Spines reduce\nwater loss' },
                { x: width * 0.7, y: height * 0.75, text: 'Flat pads for\nphotosynthesis' },
                { x: width * 0.27, y: height * 0.68, text: 'Nocturnal\nactivity' }
            ];
            
            adaptations.forEach(adapt => {
                this.ctx.fillStyle = 'rgba(255, 255, 255, 0.9)';
                this.ctx.fillRect(adapt.x - 45, adapt.y - 18, 90, 30);
                this.ctx.strokeStyle = '#8B4513';
                this.ctx.lineWidth = 1;
                this.ctx.strokeRect(adapt.x - 45, adapt.y - 18, 90, 30);
                
                this.ctx.fillStyle = '#2C3E50';
                this.ctx.font = '10px Arial';
                this.ctx.textAlign = 'center';
                const lines = adapt.text.split('\n');
                lines.forEach((line, i) => {
                    this.ctx.fillText(line, adapt.x, adapt.y - 5 + i * 12);
                });
            });
        }
        
        if (showLabels) {
            this.ctx.font = 'italic 11px Arial';
            this.ctx.fillStyle = '#8B4513';
            this.ctx.textAlign = 'center';
            this.ctx.fillText('High temperature, low precipitation', width * 0.5, height * 0.35);
            this.ctx.fillText('Extreme diurnal temperature variation', width * 0.5, height * 0.35 + 12);
        }
        
        this.ctx.restore();
    }
    
    renderGrasslandEcosystemDiagram(x, y, width, height, options) {
        const { showLabels, type } = options;
        
        this.ctx.save();
        this.ctx.translate(x - width / 2, y - height / 2);
        
        // Sky
        this.ctx.fillStyle = '#87CEEB';
        this.ctx.fillRect(0, 0, width, height * 0.3);
        
        // Sun
        EcologyShapes.drawSun(this.ctx, width * 0.85, height * 0.12, 35);
        
        // Scattered trees (savanna) or mostly grass (prairie)
        if (type === 'savanna') {
            // Acacia-like trees
            for (let i = 0; i < 3; i++) {
                const treeX = width * (0.2 + i * 0.3);
                EcologyShapes.drawPlant(this.ctx, treeX, height * 0.5, 70, 'tree');
            }
        }
        
        // Rolling grassland
        this.ctx.fillStyle = '#9ACD32';
        this.ctx.beginPath();
        this.ctx.moveTo(0, height * 0.6);
        for (let x = 0; x <= width; x += 50) {
            this.ctx.quadraticCurveTo(
                x + 25, height * (0.58 + Math.sin(x / 100) * 0.03),
                x + 50, height * 0.6
            );
        }
        this.ctx.lineTo(width, height);
        this.ctx.lineTo(0, height);
        this.ctx.closePath();
        this.ctx.fill();
        
        // Grass
        for (let i = 0; i < 40; i++) {
            const grassX = width * (i / 40);
            const grassY = height * (0.6 + Math.sin(i) * 0.02);
            EcologyShapes.drawPlant(this.ctx, grassX, grassY, 30, 'grass');
        }
        
        // Herbivores (large grazers)
        if (type === 'savanna') {
            // Herd of grazers
            for (let i = 0; i < 5; i++) {
                const herdX = width * (0.3 + i * 0.08);
                const herdY = height * 0.6 + (i % 2) * 10;
                EcologyShapes.drawAnimal(this.ctx, herdX, herdY, 35, 'herbivore');
            }
            
            // Predator
            EcologyShapes.drawAnimal(this.ctx, width * 0.75, height * 0.58, 40, 'carnivore');
        } else {
            // Prairie animals
            EcologyShapes.drawAnimal(this.ctx, width * 0.3, height * 0.62, 30, 'herbivore');
            EcologyShapes.drawAnimal(this.ctx, width * 0.6, height * 0.63, 32, 'herbivore');
        }
        
        // Birds
        EcologyShapes.drawAnimal(this.ctx, width * 0.5, height * 0.4, 25, 'bird');
        EcologyShapes.drawAnimal(this.ctx, width * 0.65, height * 0.35, 22, 'bird');
        
        // Soil
        this.ctx.fillStyle = '#8B7355';
        this.ctx.fillRect(0, height * 0.85, width, height * 0.15);
        
        // Root system
        this.ctx.strokeStyle = '#654321';
        this.ctx.lineWidth = 2;
        for (let i = 0; i < 10; i++) {
            const rootX = width * (0.1 + i * 0.09);
            this.ctx.beginPath();
            this.ctx.moveTo(rootX, height * 0.6);
            this.ctx.lineTo(rootX + 5, height * 0.75);
            this.ctx.lineTo(rootX - 3, height * 0.85);
            this.ctx.stroke();
        }
        
        if (showLabels) {
            this.ctx.font = 'bold 14px Arial';
            this.ctx.fillStyle = '#2C3E50';
            this.ctx.textAlign = 'center';
            
            if (type === 'savanna') {
                this.ctx.fillText('Savanna Grassland', width * 0.5, height * 0.05);
                this.ctx.font = 'italic 11px Arial';
                this.ctx.fillText('Scattered trees, seasonal rainfall, large herbivores', width * 0.5, height * 0.08);
            } else {
                this.ctx.fillText('Prairie/Steppe Grassland', width * 0.5, height * 0.05);
                this.ctx.font = 'italic 11px Arial';
                this.ctx.fillText('Treeless, deep soil, adapted to grazing and fire', width * 0.5, height * 0.08);
            }
            
            // Root depth annotation
            this.ctx.strokeStyle = '#2C3E50';
            this.ctx.lineWidth = 1;
            this.ctx.setLineDash([3, 3]);
            this.ctx.beginPath();
            this.ctx.moveTo(width * 0.05, height * 0.6);
            this.ctx.lineTo(width * 0.05, height * 0.85);
            this.ctx.stroke();
            this.ctx.setLineDash([]);
            
            this.ctx.fillStyle = '#654321';
            this.ctx.font = '10px Arial';
            this.ctx.textAlign = 'left';
            this.ctx.fillText('Deep roots', width * 0.06, height * 0.73);
            this.ctx.fillText('prevent erosion', width * 0.06, height * 0.73 + 10);
        }
        
        this.ctx.restore();
    }
    
    renderTundraEcosystemDiagram(x, y, width, height, options) {
        const { showLabels, showPermafrost, type } = options;
        
        this.ctx.save();
        this.ctx.translate(x - width / 2, y - height / 2);
        
        // Sky
        this.ctx.fillStyle = '#B0C4DE';
        this.ctx.fillRect(0, 0, width, height * 0.35);
        
        // Weak sun
        this.ctx.fillStyle = '#FFE4B5';
        this.ctx.beginPath();
        this.ctx.arc(width * 0.15, height * 0.12, 30, 0, Math.PI * 2);
        this.ctx.fill();
        this.ctx.strokeStyle = '#F0E68C';
        this.ctx.lineWidth = 2;
        this.ctx.stroke();
        
        // Snow/ice patches
        this.ctx.fillStyle = '#FFFFFF';
        this.ctx.globalAlpha = 0.7;
        for (let i = 0; i < 8; i++) {
            const snowX = width * (i / 8);
            const snowY = height * 0.6 + Math.random() * 20;
            this.ctx.beginPath();
            this.ctx.ellipse(snowX, snowY, 30 + Math.random() * 20, 10, 0, 0, Math.PI * 2);
            this.ctx.fill();
        }
        this.ctx.globalAlpha = 1;
        
        // Ground/tundra surface
        this.ctx.fillStyle = '#8B7D6B';
        this.ctx.fillRect(0, height * 0.6, width, height * 0.1);
        
        // Low vegetation (mosses, lichens, dwarf shrubs)
        // Mosses and lichens
        for (let i = 0; i < 20; i++) {
            this.ctx.fillStyle = i % 2 === 0 ? '#556B2F' : '#6B8E23';
            const mx = width * (i / 20);
            const my = height * 0.62;
            this.ctx.beginPath();
            this.ctx.arc(mx, my, 5 + Math.random() * 3, 0, Math.PI * 2);
            this.ctx.fill();
        }
        
        // Dwarf shrubs
        for (let i = 0; i < 8; i++) {
            const shrubX = width * (0.1 + i * 0.11);
            EcologyShapes.drawPlant(this.ctx, shrubX, height * 0.65, 20, 'shrub');
        }
        
        // Active layer (thaws in summer)
        this.ctx.fillStyle = '#A0826D';
        this.ctx.fillRect(0, height * 0.7, width, height * 0.1);
        
        if (showLabels) {
            this.ctx.fillStyle = '#2C3E50';
            this.ctx.font = 'bold 11px Arial';
            this.ctx.textAlign = 'left';
            this.ctx.fillText('Active Layer', width * 0.02, height * 0.75);
            this.ctx.font = '9px Arial';
            this.ctx.fillText('(thaws in summer)', width * 0.02, height * 0.75 + 10);
        }
        
        // Permafrost
        if (showPermafrost) {
            this.ctx.fillStyle = '#D3D3D3';
            this.ctx.fillRect(0, height * 0.8, width, height * 0.2);
            
            // Ice crystals pattern
            this.ctx.strokeStyle = '#E0FFFF';
            this.ctx.lineWidth = 1;
            for (let i = 0; i < 30; i++) {
                const ix = width * Math.random();
                const iy = height * (0.8 + Math.random() * 0.2);
                this.ctx.beginPath();
                this.ctx.moveTo(ix - 3, iy);
                this.ctx.lineTo(ix + 3, iy);
                this.ctx.stroke();
                this.ctx.beginPath();
                this.ctx.moveTo(ix, iy - 3);
                this.ctx.lineTo(ix, iy + 3);
                this.ctx.stroke();
            }
            
            if (showLabels) {
                this.ctx.fillStyle = '#2C3E50';
                this.ctx.font = 'bold 11px Arial';
                this.ctx.textAlign = 'left';
                this.ctx.fillText('Permafrost', width * 0.02, height * 0.85);
                this.ctx.font = '9px Arial';
                this.ctx.fillText('(permanently frozen)', width * 0.02, height * 0.85 + 10);
            }
        }
        
        // Tundra animals
        EcologyShapes.drawAnimal(this.ctx, width * 0.35, height * 0.63, 30, 'herbivore'); // Caribou/reindeer
        EcologyShapes.drawAnimal(this.ctx, width * 0.65, height * 0.62, 32, 'herbivore'); // Musk ox
        EcologyShapes.drawAnimal(this.ctx, width * 0.8, height * 0.61, 35, 'carnivore'); // Arctic fox
        EcologyShapes.drawAnimal(this.ctx, width * 0.5, height * 0.45, 28, 'bird'); // Migratory bird
        
        if (showLabels) {
            this.ctx.font = 'bold 14px Arial';
            this.ctx.fillStyle = '#2C3E50';
            this.ctx.textAlign = 'center';
            this.ctx.fillText(type === 'arctic' ? 'Arctic Tundra' : 'Alpine Tundra', width * 0.5, height * 0.05);
            
            this.ctx.font = 'italic 10px Arial';
            this.ctx.fillText('Short growing season, low temperatures', width * 0.5, height * 0.08);
            this.ctx.fillText('Limited plant diversity, permafrost', width * 0.5, height * 0.08 + 11);
        }
        
        this.ctx.restore();
    }
    
    renderCoralReefDiagram(x, y, width, height, options) {
        const { showLabels, showZonation, showSymbiosis } = options;
        
        this.ctx.save();
        this.ctx.translate(x - width / 2, y - height / 2);
        
        // Sky
        this.ctx.fillStyle = '#87CEEB';
        this.ctx.fillRect(0, 0, width, height * 0.1);
        
        // Water gradient
        const waterGradient = this.ctx.createLinearGradient(0, height * 0.1, 0, height);
        waterGradient.addColorStop(0, '#87CEEB');
        waterGradient.addColorStop(0.3, '#4682B4');
        waterGradient.addColorStop(1, '#1E90FF');
        this.ctx.fillStyle = waterGradient;
        this.ctx.fillRect(0, height * 0.1, width, height * 0.9);
        
        // Reef zones
        if (showZonation) {
            // Reef crest
            this.ctx.fillStyle = 'rgba(255, 215, 0, 0.2)';
            this.ctx.fillRect(width * 0.35, height * 0.3, width * 0.3, height * 0.1);
            
            // Fore reef
            this.ctx.fillStyle = 'rgba(70, 130, 180, 0.2)';
            this.ctx.fillRect(width * 0.65, height * 0.4, width * 0.35, height * 0.4);
            
            // Lagoon
            this.ctx.fillStyle = 'rgba(173, 216, 230, 0.2)';
            this.ctx.fillRect(0, height * 0.4, width * 0.35, height * 0.3);
        }
        
        // Coral formations (diverse types)
        const coralPositions = [
            { x: 0.15, y: 0.6, type: 'branching' },
            { x: 0.25, y: 0.65, type: 'brain' },
            { x: 0.42, y: 0.55, type: 'table' },
            { x: 0.52, y: 0.62, type: 'branching' },
            { x: 0.65, y: 0.58, type: 'brain' },
            { x: 0.75, y: 0.68, type: 'table' },
            { x: 0.85, y: 0.72, type: 'branching' }
        ];
        
        coralPositions.forEach(coral => {
            EcologyShapes.drawCoralFormation(
                this.ctx,
                width * coral.x,
                height * coral.y,
                35,
                coral.type
            );
        });
        
        // Marine life
        // Reef fish
        for (let i = 0; i < 12; i++) {
            const fishX = width * (0.2 + Math.random() * 0.6);
            const fishY = height * (0.3 + Math.random() * 0.4);
            this.ctx.fillStyle = ['#FFD700', '#FF6347', '#4169E1', '#00CED1'][i % 4];
            this.ctx.beginPath();
            this.ctx.ellipse(fishX, fishY, 8, 5, Math.random() * Math.PI, 0, Math.PI * 2);
            this.ctx.fill();
        }
        
        // Sea turtle
        this.ctx.fillStyle = '#2E8B57';
        this.ctx.beginPath();
        this.ctx.ellipse(width * 0.4, height * 0.35, 25, 18, -0.3, 0, Math.PI * 2);
        this.ctx.fill();
        
        // Shark
        this.ctx.fillStyle = '#708090';
        this.ctx.beginPath();
        this.ctx.ellipse(width * 0.7, height * 0.28, 35, 12, 0, 0, Math.PI * 2);
        this.ctx.fill();
        
        // Sea anemones
        for (let i = 0; i < 4; i++) {
            const anemX = width * (0.3 + i * 0.15);
            const anemY = height * 0.7;
            this.ctx.strokeStyle = '#FF69B4';
            this.ctx.lineWidth = 2;
            for (let j = 0; j < 8; j++) {
                const angle = (j / 8) * Math.PI * 2;
                this.ctx.beginPath();
                this.ctx.moveTo(anemX, anemY);
                this.ctx.lineTo(
                    anemX + Math.cos(angle) * 12,
                    anemY + Math.sin(angle) * 12 - 5
                );
                this.ctx.stroke();
            }
        }
        
        // Algae/seaweed
        this.ctx.strokeStyle = '#2E8B57';
        this.ctx.lineWidth = 3;
        for (let i = 0; i < 6; i++) {
            const algaeX = width * (0.1 + i * 0.15);
            this.ctx.beginPath();
            this.ctx.moveTo(algaeX, height * 0.75);
            for (let j = 0; j < 5; j++) {
                this.ctx.lineTo(
                    algaeX + Math.sin(j) * 5,
                    height * (0.75 - j * 0.05)
                );
            }
            this.ctx.stroke();
        }
        
        // Symbiosis callout
        if (showSymbiosis) {
            this.ctx.fillStyle = 'rgba(255, 255, 255, 0.95)';
            this.ctx.fillRect(width * 0.02, height * 0.15, 140, 55);
            this.ctx.strokeStyle = '#FF6B9D';
            this.ctx.lineWidth = 2;
            this.ctx.strokeRect(width * 0.02, height * 0.15, 140, 55);
            
            this.ctx.fillStyle = '#2C3E50';
            this.ctx.font = 'bold 11px Arial';
            this.ctx.textAlign = 'left';
            this.ctx.fillText('Coral-Algae Symbiosis:', width * 0.03, height * 0.17);
            this.ctx.font = '10px Arial';
            this.ctx.fillText('Zooxanthellae algae live', width * 0.03, height * 0.19);
            this.ctx.fillText('in coral tissue,', width * 0.03, height * 0.19 + 10);
            this.ctx.fillText('providing nutrients via', width * 0.03, height * 0.19 + 20);
            this.ctx.fillText('photosynthesis', width * 0.03, height * 0.19 + 30);
        }
        
        // Zone labels
        if (showLabels && showZonation) {
            this.ctx.font = 'bold 11px Arial';
            this.ctx.fillStyle = '#2C3E50';
            this.ctx.textAlign = 'center';
            
            this.ctx.fillText('Lagoon', width * 0.175, height * 0.45);
            this.ctx.fillText('Reef Crest', width * 0.5, height * 0.32);
            this.ctx.fillText('Fore Reef', width * 0.825, height * 0.5);
        }
        
        if (showLabels) {
            this.ctx.font = 'italic 10px Arial';
            this.ctx.fillStyle = '#FFD700';
            this.ctx.textAlign = 'center';
            this.ctx.fillText('High biodiversity - "Rainforests of the Sea"', width * 0.5, height * 0.95);
        }
        
        this.ctx.restore();
    }
    
    // ========== SUCCESSION DIAGRAMS ==========
    
    renderPrimarySuccessionDiagram(x, y, width, height, options) {
        const { showLabels, stages, substrate } = options;
        
        this.ctx.save();
        this.ctx.translate(x - width / 2, y - height / 2);
        
        const stageWidth = width / stages;
        
        const stageData = [
            { name: 'Bare Rock', organisms: 'none' },
            { name: 'Pioneer Species\n(Lichens)', organisms: 'lichen' },
            { name: 'Mosses &\nSmall Plants', organisms: 'moss' },
            { name: 'Grasses &\nHerbaceous', organisms: 'grass' },
            { name: 'Shrubs &\nSmall Trees', organisms: 'shrub' },
            { name: 'Climax Forest', organisms: 'forest' }
        ];
        
        for (let i = 0; i < Math.min(stages, stageData.length); i++) {
            const stage = stageData[i];
            const stageX = i * stageWidth;
            
            // Sky
            this.ctx.fillStyle = '#87CEEB';
            this.ctx.fillRect(stageX, 0, stageWidth, height * 0.3);
            
            // Ground/substrate
            let groundColor = '#808080'; // Rock
            if (i > 0) groundColor = '#A0826D'; // Developing soil
            if (i > 2) groundColor = '#8B7355'; // Established soil
            if (i > 3) groundColor = '#654321'; // Rich soil
            
            this.ctx.fillStyle = groundColor;
            this.ctx.fillRect(stageX, height * 0.6, stageWidth, height * 0.4);
            
            // Organisms
            const centerX = stageX + stageWidth / 2;
            
            if (stage.organisms === 'none') {
                // Bare rock texture
                this.ctx.fillStyle = '#696969';
                for (let j = 0; j < 5; j++) {
                    this.ctx.fillRect(
                        stageX + Math.random() * stageWidth,
                        height * (0.6 + Math.random() * 0.1),
                        10, 8
                    );
                }
            } else if (stage.organisms === 'lichen') {
                // Lichens on rock
                for (let j = 0; j < 6; j++) {
                    this.ctx.fillStyle = j % 2 === 0 ? '#9ACD32' : '#ADFF2F';
                    this.ctx.beginPath();
                    this.ctx.arc(
                        stageX + (j + 1) * (stageWidth / 7),
                        height * 0.63,
                        5, 0, Math.PI * 2
                    );
                    this.ctx.fill();
                }
            } else if (stage.organisms === 'moss') {
                // Mosses
                for (let j = 0; j < 8; j++) {
                    this.ctx.fillStyle = '#228B22';
                    this.ctx.fillRect(
                        stageX + j * (stageWidth / 8),
                        height * 0.57,
                        stageWidth / 10, height * 0.05
                    );
                }
            } else if (stage.organisms === 'grass') {
                // Grasses
                for (let j = 0; j < 10; j++) {
                    EcologyShapes.drawPlant(
                        this.ctx,
                        stageX + j * (stageWidth / 10),
                        height * 0.62,
                        25, 'grass'
                    );
                }
            } else if (stage.organisms === 'shrub') {
                // Shrubs and small plants
                EcologyShapes.drawPlant(this.ctx, centerX - 30, height * 0.58, 35, 'shrub');
                EcologyShapes.drawPlant(this.ctx, centerX + 20, height * 0.6, 40, 'shrub');
                for (let j = 0; j < 5; j++) {
                    EcologyShapes.drawPlant(
                        this.ctx,
                        stageX + j * (stageWidth / 5),
                        height * 0.64,
                        20, 'grass'
                    );
                }
            } else if (stage.organisms === 'forest') {
                // Mature forest
                EcologyShapes.drawPlant(this.ctx, centerX - 40, height * 0.55, 60, 'tree');
                EcologyShapes.drawPlant(this.ctx, centerX + 30, height * 0.57, 55, 'tree');
                EcologyShapes.drawPlant(this.ctx, centerX - 10, height * 0.63, 35, 'shrub');
            }
            
            // Stage label
            if (showLabels) {
                this.ctx.fillStyle = 'rgba(255, 255, 255, 0.9)';
                this.ctx.fillRect(stageX + 5, height * 0.05, stageWidth - 10, 32);
                this.ctx.strokeStyle = '#2C3E50';
                this.ctx.lineWidth = 1;
                this.ctx.strokeRect(stageX + 5, height * 0.05, stageWidth - 10, 32);
                
                this.ctx.fillStyle = '#2C3E50';
                this.ctx.font = 'bold 10px Arial';
                this.ctx.textAlign = 'center';
                const lines = stage.name.split('\n');
                lines.forEach((line, lineIndex) => {
                    this.ctx.fillText(line, centerX, height * 0.065 + lineIndex * 11);
                });
            }
            
            // Arrow to next stage
            if (i < stages - 1) {
                EcologyShapes.drawArrow(
                    this.ctx,
                    stageX + stageWidth - 10,
                    height * 0.5,
                    stageX + stageWidth + 10,
                    height * 0.5,
                    '#34495E',
                    ''
                );
            }
            
            // Divider
            if (i < stages - 1) {
                this.ctx.strokeStyle = '#BDC3C7';
                this.ctx.lineWidth = 2;
                this.ctx.setLineDash([5, 5]);
                this.ctx.beginPath();
                this.ctx.moveTo(stageX + stageWidth, height * 0.3);
                this.ctx.lineTo(stageX + stageWidth, height);
                this.ctx.stroke();
                this.ctx.setLineDash([]);
            }
        }
        
        // Time arrow at bottom
        if (showLabels) {
            EcologyShapes.drawArrow(
                this.ctx,
                width * 0.1,
                height * 0.95,
                width * 0.9,
                height * 0.95,
                '#E74C3C',
                'Time (hundreds to thousands of years)'
            );
        }
        
        this.ctx.restore();
    }
    
    renderSecondarySuccessionDiagram(x, y, width, height, options) {
        const { showLabels, stages, disturbance } = options;
        
        this.ctx.save();
        this.ctx.translate(x - width / 2, y - height / 2);
        
        const stageWidth = width / stages;
        
        const stageData = [
            { name: 'After Disturbance', organisms: 'bare' },
            { name: 'Annual Weeds', organisms: 'weeds' },
            { name: 'Perennial Grasses\n& Herbs', organisms: 'grass' },
            { name: 'Shrubs &\nSmall Trees', organisms: 'shrub' },
            { name: 'Young Forest', organisms: 'young_forest' },
            { name: 'Mature Forest', organisms: 'mature_forest' }
        ];
        
        for (let i = 0; i < Math.min(stages, stageData.length); i++) {
            const stage = stageData[i];
            const stageX = i * stageWidth;
            
            // Sky
            this.ctx.fillStyle = '#87CEEB';
            this.ctx.fillRect(stageX, 0, stageWidth, height * 0.3);
            
            // Soil (already present)
            this.ctx.fillStyle = i === 0 ? '#654321' : '#8B7355';
            this.ctx.fillRect(stageX, height * 0.65, stageWidth, height * 0.35);
            
            const centerX = stageX + stageWidth / 2;
            
            // Organisms based on stage
            if (stage.organisms === 'bare') {
                // Charred ground or bare soil
                if (disturbance === 'fire') {
                    this.ctx.fillStyle = '#2F4F4F';
                    this.ctx.fillRect(stageX, height * 0.6, stageWidth, height * 0.05);
                    // Dead tree stumps
                    this.ctx.fillStyle = '#000000';
                    this.ctx.fillRect(centerX - 20, height * 0.55, 8, 25);
                    this.ctx.fillRect(centerX + 15, height * 0.58, 7, 20);
                }
            } else if (stage.organisms === 'weeds') {
                // Pioneer weeds
                for (let j = 0; j < 12; j++) {
                    this.ctx.fillStyle = '#9ACD32';
                    const weedX = stageX + j * (stageWidth / 12);
                    this.ctx.fillRect(weedX, height * 0.6, 3, 20);
                    // Flower
                    this.ctx.fillStyle = '#FFD700';
                    this.ctx.beginPath();
                    this.ctx.arc(weedX + 1.5, height * 0.59, 3, 0, Math.PI * 2);
                    this.ctx.fill();
                }
            } else if (stage.organisms === 'grass') {
                // Perennial grasses
                for (let j = 0; j < 10; j++) {
                    EcologyShapes.drawPlant(
                        this.ctx,
                        stageX + j * (stageWidth / 10),
                        height * 0.64,
                        28, 'grass'
                    );
                }
            } else if (stage.organisms === 'shrub') {
                // Shrubs and saplings
                EcologyShapes.drawPlant(this.ctx, centerX - 35, height * 0.58, 40, 'shrub');
                EcologyShapes.drawPlant(this.ctx, centerX + 25, height * 0.6, 38, 'shrub');
                // Young tree
                this.ctx.fillStyle = '#8B4513';
                this.ctx.fillRect(centerX - 2, height * 0.5, 4, 40);
                this.ctx.fillStyle = '#228B22';
                this.ctx.beginPath();
                this.ctx.arc(centerX, height * 0.48, 15, 0, Math.PI * 2);
                this.ctx.fill();
            } else if (stage.organisms === 'young_forest') {
                // Young trees
                EcologyShapes.drawPlant(this.ctx, centerX - 30, height * 0.52, 50, 'tree');
                EcologyShapes.drawPlant(this.ctx, centerX + 25, height * 0.54, 48, 'tree');
                EcologyShapes.drawPlant(this.ctx, centerX, height * 0.62, 30, 'shrub');
            } else if (stage.organisms === 'mature_forest') {
                // Mature forest
                EcologyShapes.drawPlant(this.ctx, centerX - 40, height * 0.48, 65, 'tree');
                EcologyShapes.drawPlant(this.ctx, centerX + 30, height * 0.5, 62, 'tree');
                EcologyShapes.drawPlant(this.ctx, centerX - 10, height * 0.6, 38, 'shrub');
            }
            
            // Stage label
            if (showLabels) {
                this.ctx.fillStyle = 'rgba(255, 255, 255, 0.9)';
                this.ctx.fillRect(stageX + 5, height * 0.05, stageWidth - 10, 32);
                this.ctx.strokeStyle = '#2C3E50';
                this.ctx.lineWidth = 1;
                this.ctx.strokeRect(stageX + 5, height * 0.05, stageWidth - 10, 32);
                
                this.ctx.fillStyle = '#2C3E50';
                this.ctx.font = 'bold 10px Arial';
                this.ctx.textAlign = 'center';
                const lines = stage.name.split('\n');
                lines.forEach((line, lineIndex) => {
                    this.ctx.fillText(line, centerX, height * 0.065 + lineIndex * 11);
                });
            }
            
            // Arrow to next stage
            if (i < stages - 1) {
                EcologyShapes.drawArrow(
                    this.ctx,
                    stageX + stageWidth - 10,
                    height * 0.5,
                    stageX + stageWidth + 10,
                    height * 0.5,
                    '#34495E',
                    ''
                );
            }
            
            // Divider
            if (i < stages - 1) {
                this.ctx.strokeStyle = '#BDC3C7';
                this.ctx.lineWidth = 2;
                this.ctx.setLineDash([5, 5]);
                this.ctx.beginPath();
                this.ctx.moveTo(stageX + stageWidth, height * 0.3);
                this.ctx.lineTo(stageX + stageWidth, height);
                this.ctx.stroke();
                this.ctx.setLineDash([]);
            }
        }
        
        // Time arrow
        if (showLabels) {
            EcologyShapes.drawArrow(
                this.ctx,
                width * 0.1,
                height * 0.95,
                width * 0.9,
                height * 0.95,
                '#E74C3C',
                'Time (decades to centuries)'
            );
            
            // Disturbance note
            this.ctx.font = 'italic 11px Arial';
            this.ctx.fillStyle = '#E74C3C';
            this.ctx.textAlign = 'left';
            const disturbanceText = disturbance === 'fire' ? 'After Forest Fire' :
                                   disturbance === 'agriculture' ? 'Abandoned Farmland' :
                                   'After Logging';
            this.ctx.fillText(disturbanceText, width * 0.02, height * 0.02);
        }
        
        this.ctx.restore();
    }
    
    // ========== POPULATION ECOLOGY DIAGRAMS ==========
    
    renderPopulationGrowthDiagram(x, y, width, height, options) {
        const { showLabels, showExponential, showLogistic, showCarryingCapacity } = options;
        
        this.ctx.save();
        this.ctx.translate(x - width / 2, y - height / 2);
        
        // Axes
        this.ctx.strokeStyle = '#2C3E50';
        this.ctx.lineWidth = 2;
        this.ctx.beginPath();
        this.ctx.moveTo(width * 0.1, height * 0.1);
        this.ctx.lineTo(width * 0.1, height * 0.85);
        this.ctx.lineTo(width * 0.9, height * 0.85);
        this.ctx.stroke();
        
        // Axis labels
        if (showLabels) {
            this.ctx.font = 'bold 13px Arial';
            this.ctx.fillStyle = '#2C3E50';
            this.ctx.textAlign = 'center';
            
            // Y-axis
            this.ctx.save();
            this.ctx.translate(width * 0.04, height * 0.5);
            this.ctx.rotate(-Math.PI / 2);
            this.ctx.fillText('Population Size', 0, 0);
            this.ctx.restore();
            
            // X-axis
            this.ctx.fillText('Time', width * 0.5, height * 0.93);
        }
        
        const startX = width * 0.1;
        const startY = height * 0.85;
        const endX = width * 0.9;
        const endY = height * 0.1;
        const graphWidth = endX - startX;
        const graphHeight = startY - endY;
        
        // Carrying capacity line
        if (showCarryingCapacity && showLogistic) {
            const kY = startY - graphHeight * 0.75;
            this.ctx.strokeStyle = '#E74C3C';
            this.ctx.lineWidth = 2;
            this.ctx.setLineDash([10, 5]);
            this.ctx.beginPath();
            this.ctx.moveTo(startX, kY);
            this.ctx.lineTo(endX, kY);
            this.ctx.stroke();
            this.ctx.setLineDash([]);
            
            if (showLabels) {
                this.ctx.fillStyle = '#E74C3C';
                this.ctx.font = 'bold 12px Arial';
                this.ctx.textAlign = 'left';
                this.ctx.fillText('Carrying Capacity (K)', endX - 150, kY - 8);
            }
        }
        
        // Exponential growth curve
        if (showExponential) {
            this.ctx.strokeStyle = '#3498DB';
            this.ctx.lineWidth = 3;
            this.ctx.beginPath();
            
            for (let i = 0; i <= 100; i++) {
                const t = i / 100;
                const px = startX + t * graphWidth;
                // Exponential: N(t) = N0 * e^(rt)
                const py = startY - (Math.exp(4 * t) - 1) / (Math.exp(4) - 1) * graphHeight;
                
                if (i === 0) {
                    this.ctx.moveTo(px, py);
                } else {
                    this.ctx.lineTo(px, py);
                }
            }
            this.ctx.stroke();
            
            if (showLabels) {
                this.ctx.fillStyle = '#3498DB';
                this.ctx.font = 'bold 12px Arial';
                this.ctx.textAlign = 'left';
                this.ctx.fillText('Exponential Growth', width * 0.55, height * 0.25);
                this.ctx.font = '11px Arial';
                this.ctx.fillText('(unlimited resources)', width * 0.55, height * 0.25 + 13);
            }
        }
        
        // Logistic growth curve
        if (showLogistic) {
            this.ctx.strokeStyle = '#2ECC71';
            this.ctx.lineWidth = 3;
            this.ctx.beginPath();
            
            const K = graphHeight * 0.75; // Carrying capacity
            
            for (let i = 0; i <= 100; i++) {
                const t = i / 100;
                const px = startX + t * graphWidth;
                // Logistic: N(t) = K / (1 + ((K - N0) / N0) * e^(-rt))
                const logisticValue = K / (1 + 49 * Math.exp(-8 * t));
                const py = startY - logisticValue;
                
                if (i === 0) {
                    this.ctx.moveTo(px, py);
                } else {
                    this.ctx.lineTo(px, py);
                }
            }
            this.ctx.stroke();
            
            if (showLabels) {
                this.ctx.fillStyle = '#2ECC71';
                this.ctx.font = 'bold 12px Arial';
                this.ctx.textAlign = 'left';
                this.ctx.fillText('Logistic Growth', width * 0.55, height * 0.48);
                this.ctx.font = '11px Arial';
                this.ctx.fillText('(limited resources)', width * 0.55, height * 0.48 + 13);
            }
        }
        
        // Growth phases annotation for logistic
        if (showLogistic && showLabels) {
            this.ctx.font = '10px Arial';
            this.ctx.fillStyle = '#7F8C8D';
            this.ctx.textAlign = 'center';
            
            this.ctx.fillText('Lag', width * 0.2, height * 0.8);
            this.ctx.fillText('Exponential', width * 0.4, height * 0.55);
            this.ctx.fillText('Deceleration', width * 0.65, height * 0.35);
            this.ctx.fillText('Plateau', width * 0.82, height * 0.22);
        }
        
        this.ctx.restore();
    }
    
    renderAgePyramidDiagram(x, y, width, height, options) {
        const { showLabels, type } = options;
        
        this.ctx.save();
        this.ctx.translate(x - width / 2, y - height / 2);
        
        // Define age groups (youngest at bottom)
        const ageGroups = [
            '0-4', '5-9', '10-14', '15-19', '20-24', '25-29', '30-34', '35-39',
            '40-44', '45-49', '50-54', '55-59', '60-64', '65-69', '70-74', '75+'
        ];
        
        const barHeight = height * 0.85 / ageGroups.length;
        const centerX = width / 2;
        const maxBarWidth = width * 0.4;
        
        // Generate data based on pyramid type
        let maleData, femaleData;
        
        if (type === 'expanding') {
            // Developing country - wide base
            maleData = [0.95, 0.9, 0.85, 0.8, 0.73, 0.65, 0.57, 0.5, 0.43, 0.37, 0.31, 0.26, 0.21, 0.16, 0.11, 0.07];
            femaleData = [0.93, 0.88, 0.83, 0.78, 0.71, 0.63, 0.55, 0.48, 0.41, 0.35, 0.29, 0.24, 0.19, 0.15, 0.10, 0.06];
        } else if (type === 'stable') {
            // Developed country - relatively even
            maleData = [0.6, 0.62, 0.64, 0.66, 0.68, 0.7, 0.72, 0.73, 0.72, 0.7, 0.66, 0.6, 0.52, 0.42, 0.3, 0.18];
            femaleData = [0.58, 0.6, 0.62, 0.64, 0.66, 0.68, 0.7, 0.71, 0.7, 0.68, 0.64, 0.58, 0.5, 0.4, 0.28, 0.16];
        } else {
            // Declining - narrow base
            maleData = [0.45, 0.48, 0.52, 0.56, 0.6, 0.65, 0.7, 0.73, 0.75, 0.74, 0.7, 0.64, 0.56, 0.46, 0.34, 0.2];
            femaleData = [0.43, 0.46, 0.5, 0.54, 0.58, 0.63, 0.68, 0.71, 0.73, 0.72, 0.68, 0.62, 0.54, 0.44, 0.32, 0.18];
        }
        
        // Draw pyramid
        ageGroups.forEach((ageGroup, index) => {
            const yPos = height * 0.1 + index * barHeight;
            
            // Male (left side)
            const maleWidth = maleData[index] * maxBarWidth;
            this.ctx.fillStyle = '#4A90E2';
            this.ctx.fillRect(centerX - maleWidth, yPos, maleWidth, barHeight - 2);
            
            // Female (right side)
            const femaleWidth = femaleData[index] * maxBarWidth;
            this.ctx.fillStyle = '#E91E63';
            this.ctx.fillRect(centerX, yPos, femaleWidth, barHeight - 2);
            
            // Age group label
            if (showLabels) {
                this.ctx.fillStyle = '#2C3E50';
                this.ctx.font = '9px Arial';
                this.ctx.textAlign = 'center';
                this.ctx.fillText(ageGroup, centerX, yPos + barHeight / 2 + 3);
            }
        });
        
        // Center line
        this.ctx.strokeStyle = '#2C3E50';
        this.ctx.lineWidth = 2;
        this.ctx.beginPath();
        this.ctx.moveTo(centerX, height * 0.1);
        this.ctx.lineTo(centerX, height * 0.95);
        this.ctx.stroke();
        
        // Labels
        if (showLabels) {
            this.ctx.font = 'bold 13px Arial';
            this.ctx.fillStyle = '#4A90E2';
            this.ctx.textAlign = 'center';
            this.ctx.fillText('Male', centerX - maxBarWidth / 2, height * 0.05);
            
            this.ctx.fillStyle = '#E91E63';
            this.ctx.fillText('Female', centerX + maxBarWidth / 2, height * 0.05);
            
            // Type label
            this.ctx.fillStyle = '#2C3E50';
            this.ctx.font = 'bold 14px Arial';
            const typeLabels = {
                'expanding': 'Expanding (Rapid Growth)',
                'stable': 'Stable (Slow Growth)',
                'declining': 'Declining (Negative Growth)'
            };
            this.ctx.fillText(typeLabels[type], centerX, height * 0.98);
        }
        
        this.ctx.restore();
    }
    
    renderPredatorPreyDiagram(x, y, width, height, options) {
        const { showLabels, cycles } = options;
        
        this.ctx.save();
        this.ctx.translate(x - width / 2, y - height / 2);
        
        // Axes
        this.ctx.strokeStyle = '#2C3E50';
        this.ctx.lineWidth = 2;
        this.ctx.beginPath();
        this.ctx.moveTo(width * 0.1, height * 0.1);
        this.ctx.lineTo(width * 0.1, height * 0.8);
        this.ctx.lineTo(width * 0.9, height * 0.8);
        this.ctx.stroke();
        
        // Axis labels
        if (showLabels) {
            this.ctx.font = 'bold 13px Arial';
            this.ctx.fillStyle = '#2C3E50';
            this.ctx.textAlign = 'center';
            
            // Y-axis
            this.ctx.save();
            this.ctx.translate(width * 0.04, height * 0.45);
            this.ctx.rotate(-Math.PI / 2);
            this.ctx.fillText('Population Size', 0, 0);
            this.ctx.restore();
            
            // X-axis
            this.ctx.fillText('Time', width * 0.5, height * 0.88);
        }
        
        const startX = width * 0.1;
        const startY = height * 0.8;
        const endX = width * 0.9;
        const graphWidth = endX - startX;
        const graphHeight = height * 0.65;
        const midY = startY - graphHeight / 2;
        
        // Prey population (oscillates first)
        this.ctx.strokeStyle = '#2ECC71';
        this.ctx.lineWidth = 3;
        this.ctx.beginPath();
        
        for (let i = 0; i <= 100; i++) {
            const t = i / 100;
            const px = startX + t * graphWidth;
            const amplitude = graphHeight * 0.35;
            const py = midY - amplitude * Math.sin(cycles * 2 * Math.PI * t);
            
            if (i === 0) {
                this.ctx.moveTo(px, py);
            } else {
                this.ctx.lineTo(px, py);
            }
        }
        this.ctx.stroke();
        
        // Predator population (lags behind prey)
        this.ctx.strokeStyle = '#E74C3C';
        this.ctx.lineWidth = 3;
        this.ctx.beginPath();
        
        for (let i = 0; i <= 100; i++) {
            const t = i / 100;
            const px = startX + t * graphWidth;
            const amplitude = graphHeight * 0.25;
            // Phase shift to show lag
            const phase = Math.PI / 4;
            const py = midY - amplitude * Math.sin(cycles * 2 * Math.PI * t - phase);
            
            if (i === 0) {
                this.ctx.moveTo(px, py);
            } else {
                this.ctx.lineTo(px, py);
            }
        }
        this.ctx.stroke();
        
        // Legend
        if (showLabels) {
            this.drawLegend(width * 0.7, height * 0.15, [
                { color: '#2ECC71', label: 'Prey (e.g., Hare)' },
                { color: '#E74C3C', label: 'Predator (e.g., Lynx)' }
            ]);
            
            // Annotations
            this.ctx.font = '10px Arial';
            this.ctx.fillStyle = '#7F8C8D';
            this.ctx.textAlign = 'center';
            
            // Annotate key points
            this.ctx.fillText('Prey peak →', width * 0.25, height * 0.28);
            this.ctx.fillText('← Predator peak', width * 0.35, height * 0.35);
            this.ctx.fillText('(delayed)', width * 0.35, height * 0.35 + 10);
        }
        
        this.ctx.restore();
    }
    
    // ========== PLACEHOLDER FOR REMAINING RENDERERS ==========
    
    // ========== SPECIES INTERACTIONS DIAGRAMS ==========
    
    renderNicheDiagram(x, y, width, height, options) {
        const { showLabels, showFundamental, showRealized } = options;
        
        this.ctx.save();
        this.ctx.translate(x - width / 2, y - height / 2);
        
        // Axes
        this.ctx.strokeStyle = '#2C3E50';
        this.ctx.lineWidth = 2;
        this.ctx.beginPath();
        this.ctx.moveTo(width * 0.1, height * 0.1);
        this.ctx.lineTo(width * 0.1, height * 0.85);
        this.ctx.lineTo(width * 0.9, height * 0.85);
        this.ctx.stroke();
        
        // Axis labels
        if (showLabels) {
            this.ctx.font = 'bold 12px Arial';
            this.ctx.fillStyle = '#2C3E50';
            this.ctx.textAlign = 'center';
            
            // Y-axis
            this.ctx.save();
            this.ctx.translate(width * 0.04, height * 0.5);
            this.ctx.rotate(-Math.PI / 2);
            this.ctx.fillText('Resource B (e.g., Temperature)', 0, 0);
            this.ctx.restore();
            
            // X-axis
            this.ctx.fillText('Resource A (e.g., Food size)', width * 0.5, height * 0.92);
        }
        
        const centerX = width * 0.5;
        const centerY = height * 0.5;
        
        // Fundamental niche (larger ellipse)
        if (showFundamental) {
            this.ctx.fillStyle = 'rgba(52, 152, 219, 0.3)';
            this.ctx.strokeStyle = '#3498DB';
            this.ctx.lineWidth = 3;
            this.ctx.beginPath();
            this.ctx.ellipse(centerX - 50, centerY, width * 0.25, height * 0.3, 0, 0, Math.PI * 2);
            this.ctx.fill();
            this.ctx.stroke();
            
            if (showLabels) {
                this.ctx.fillStyle = '#3498DB';
                this.ctx.font = 'bold 13px Arial';
                this.ctx.textAlign = 'center';
                this.ctx.fillText('Fundamental Niche', centerX - 50, centerY - height * 0.35);
                this.ctx.font = '11px Arial';
                this.ctx.fillText('(without competition)', centerX - 50, centerY - height * 0.35 + 13);
            }
        }
        
        // Realized niche (smaller ellipse, shifted)
        if (showRealized) {
            this.ctx.fillStyle = 'rgba(46, 204, 113, 0.5)';
            this.ctx.strokeStyle = '#2ECC71';
            this.ctx.lineWidth = 3;
            this.ctx.beginPath();
            this.ctx.ellipse(centerX - 70, centerY + 20, width * 0.15, height * 0.18, 0, 0, Math.PI * 2);
            this.ctx.fill();
            this.ctx.stroke();
            
            if (showLabels) {
                this.ctx.fillStyle = '#2ECC71';
                this.ctx.font = 'bold 13px Arial';
                this.ctx.textAlign = 'center';
                this.ctx.fillText('Realized Niche', centerX - 70, centerY + height * 0.28);
                this.ctx.font = '11px Arial';
                this.ctx.fillText('(with competition)', centerX - 70, centerY + height * 0.28 + 13);
            }
        }
        
        // Competitor's niche (overlapping)
        this.ctx.fillStyle = 'rgba(231, 76, 60, 0.3)';
        this.ctx.strokeStyle = '#E74C3C';
        this.ctx.lineWidth = 3;
        this.ctx.beginPath();
        this.ctx.ellipse(centerX + 50, centerY, width * 0.2, height * 0.25, 0, 0, Math.PI * 2);
        this.ctx.fill();
        this.ctx.stroke();
        
        if (showLabels) {
            this.ctx.fillStyle = '#E74C3C';
            this.ctx.font = 'bold 13px Arial';
            this.ctx.textAlign = 'center';
            this.ctx.fillText('Competitor Species', centerX + 50, centerY + height * 0.32);
        }
        
        // Arrow showing niche compression
        if (showFundamental && showRealized) {
            EcologyShapes.drawArrow(
                this.ctx,
                centerX - 20, centerY - 40,
                centerX - 60, centerY + 10,
                '#9B59B6',
                'Competition\nreduces niche'
            );
        }
        
        this.ctx.restore();
    }
    
    renderSymbioticRelationshipsDiagram(x, y, width, height, options) {
        const { showLabels, showAll } = options;
        
        this.ctx.save();
        this.ctx.translate(x - width / 2, y - height / 2);
        
        const relationships = [
            {
                name: 'Mutualism',
                x: width * 0.25,
                y: height * 0.25,
                color: '#2ECC71',
                example: 'Bee & Flower',
                effect: '(+/+)',
                organism1: 'bee',
                organism2: 'flower'
            },
            {
                name: 'Commensalism',
                x: width * 0.75,
                y: height * 0.25,
                color: '#3498DB',
                example: 'Remora & Shark',
                effect: '(+/0)',
                organism1: 'fish',
                organism2: 'predator'
            },
            {
                name: 'Parasitism',
                x: width * 0.25,
                y: height * 0.7,
                color: '#E74C3C',
                example: 'Tick & Deer',
                effect: '(+/-)',
                organism1: 'parasite',
                organism2: 'host'
            }
        ];
        
        relationships.forEach(rel => {
            // Box
            const boxWidth = width * 0.35;
            const boxHeight = height * 0.3;
            
            this.ctx.fillStyle = 'rgba(255, 255, 255, 0.9)';
            this.ctx.fillRect(rel.x - boxWidth / 2, rel.y - boxHeight / 2, boxWidth, boxHeight);
            this.ctx.strokeStyle = rel.color;
            this.ctx.lineWidth = 3;
            this.ctx.strokeRect(rel.x - boxWidth / 2, rel.y - boxHeight / 2, boxWidth, boxHeight);
            
            // Title
            this.ctx.fillStyle = rel.color;
            this.ctx.font = 'bold 16px Arial';
            this.ctx.textAlign = 'center';
            this.ctx.fillText(rel.name, rel.x, rel.y - boxHeight / 2 + 25);
            
            if (showLabels) {
                // Effect
                this.ctx.font = 'bold 14px Arial';
                this.ctx.fillStyle = '#2C3E50';
                this.ctx.fillText(rel.effect, rel.x, rel.y - boxHeight / 2 + 45);
                
                // Example
                this.ctx.font = '12px Arial';
                this.ctx.fillText(rel.example, rel.x, rel.y + boxHeight / 2 - 15);
                
                // Visual representation
                if (rel.name === 'Mutualism') {
                    // Bee
                    EcologyShapes.drawAnimal(this.ctx, rel.x - 40, rel.y + 10, 25, 'insect');
                    // Flower
                    EcologyShapes.drawPlant(this.ctx, rel.x + 40, rel.y + 15, 30, 'generic');
                    // Double arrow
                    this.ctx.strokeStyle = '#2ECC71';
                    this.ctx.lineWidth = 2;
                    this.ctx.beginPath();
                    this.ctx.moveTo(rel.x - 25, rel.y + 10);
                    this.ctx.lineTo(rel.x + 25, rel.y + 10);
                    this.ctx.stroke();
                    // Arrowheads both directions
                    EcologyShapes.drawArrow(this.ctx, rel.x - 25, rel.y + 5, rel.x + 25, rel.y + 5, '#2ECC71', '');
                    EcologyShapes.drawArrow(this.ctx, rel.x + 25, rel.y + 15, rel.x - 25, rel.y + 15, '#2ECC71', '');
                    
                } else if (rel.name === 'Commensalism') {
                    // Remora
                    this.ctx.fillStyle = '#95A5A6';
                    this.ctx.beginPath();
                    this.ctx.ellipse(rel.x - 35, rel.y + 15, 15, 8, 0, 0, Math.PI * 2);
                    this.ctx.fill();
                    // Shark
                    this.ctx.fillStyle = '#7F8C8D';
                    this.ctx.beginPath();
                    this.ctx.ellipse(rel.x + 25, rel.y + 10, 30, 12, 0, 0, Math.PI * 2);
                    this.ctx.fill();
                    // One-way arrow
                    EcologyShapes.drawArrow(this.ctx, rel.x - 20, rel.y + 10, rel.x, rel.y + 10, '#3498DB', '+');
                    
                } else if (rel.name === 'Parasitism') {
                    // Tick (parasite)
                    this.ctx.fillStyle = '#8B0000';
                    this.ctx.beginPath();
                    this.ctx.arc(rel.x - 30, rel.y + 10, 6, 0, Math.PI * 2);
                    this.ctx.fill();
                    // Deer (host)
                    EcologyShapes.drawAnimal(this.ctx, rel.x + 35, rel.y + 10, 30, 'herbivore');
                    // Negative arrow
                    this.ctx.strokeStyle = '#E74C3C';
                    this.ctx.lineWidth = 2;
                    this.ctx.setLineDash([3, 3]);
                    EcologyShapes.drawArrow(this.ctx, rel.x - 15, rel.y + 10, rel.x + 15, rel.y + 10, '#E74C3C', '');
                    this.ctx.setLineDash([]);
                }
                
                // Description text
                this.ctx.font = '10px Arial';
                this.ctx.fillStyle = '#7F8C8D';
                const descriptions = {
                    'Mutualism': 'Both species benefit',
                    'Commensalism': 'One benefits, other unaffected',
                    'Parasitism': 'One benefits, other harmed'
                };
                this.ctx.fillText(descriptions[rel.name], rel.x, rel.y + boxHeight / 2 - 3);
            }
        });
        
        this.ctx.restore();
    }
    
    renderCompetitionTypesDiagram(x, y, width, height, options) {
        const { showLabels } = options;
        
        this.ctx.save();
        this.ctx.translate(x - width / 2, y - height / 2);
        
        // Split into two sections
        const leftX = width * 0.25;
        const rightX = width * 0.75;
        const boxWidth = width * 0.35;
        const boxHeight = height * 0.7;
        
        // Intraspecific Competition (within species)
        this.ctx.fillStyle = 'rgba(52, 152, 219, 0.1)';
        this.ctx.fillRect(leftX - boxWidth / 2, height * 0.15, boxWidth, boxHeight);
        this.ctx.strokeStyle = '#3498DB';
        this.ctx.lineWidth = 2;
        this.ctx.strokeRect(leftX - boxWidth / 2, height * 0.15, boxWidth, boxHeight);
        
        this.ctx.fillStyle = '#3498DB';
        this.ctx.font = 'bold 14px Arial';
        this.ctx.textAlign = 'center';
        this.ctx.fillText('Intraspecific', leftX, height * 0.12);
        this.ctx.font = '12px Arial';
        this.ctx.fillText('(Within Species)', leftX, height * 0.12 + 14);
        
        // Same species animals
        for (let i = 0; i < 4; i++) {
            EcologyShapes.drawAnimal(
                this.ctx,
                leftX - 50 + (i % 2) * 100,
                height * 0.35 + Math.floor(i / 2) * 80,
                30,
                'herbivore'
            );
        }
        
        // Competition arrows between them
        this.ctx.strokeStyle = '#E74C3C';
        this.ctx.lineWidth = 2;
        this.ctx.setLineDash([5, 5]);
        this.ctx.beginPath();
        this.ctx.moveTo(leftX - 40, height * 0.35);
        this.ctx.lineTo(leftX + 40, height * 0.35);
        this.ctx.stroke();
        this.ctx.beginPath();
        this.ctx.moveTo(leftX - 40, height * 0.42);
        this.ctx.lineTo(leftX - 40, height * 0.48);
        this.ctx.stroke();
        this.ctx.beginPath();
        this.ctx.moveTo(leftX + 40, height * 0.42);
        this.ctx.lineTo(leftX + 40, height * 0.48);
        this.ctx.stroke();
        this.ctx.setLineDash([]);
        
        if (showLabels) {
            this.ctx.fillStyle = '#2C3E50';
            this.ctx.font = '11px Arial';
            this.ctx.fillText('Competition for:', leftX, height * 0.62);
            this.ctx.fillText('• Food', leftX, height * 0.65);
            this.ctx.fillText('• Mates', leftX, height * 0.68);
            this.ctx.fillText('• Territory', leftX, height * 0.71);
            this.ctx.fillText('• Nesting sites', leftX, height * 0.74);
        }
        
        // Interspecific Competition (between species)
        this.ctx.fillStyle = 'rgba(230, 126, 34, 0.1)';
        this.ctx.fillRect(rightX - boxWidth / 2, height * 0.15, boxWidth, boxHeight);
        this.ctx.strokeStyle = '#E67E22';
        this.ctx.lineWidth = 2;
        this.ctx.strokeRect(rightX - boxWidth / 2, height * 0.15, boxWidth, boxHeight);
        
        this.ctx.fillStyle = '#E67E22';
        this.ctx.font = 'bold 14px Arial';
        this.ctx.textAlign = 'center';
        this.ctx.fillText('Interspecific', rightX, height * 0.12);
        this.ctx.font = '12px Arial';
        this.ctx.fillText('(Between Species)', rightX, height * 0.12 + 14);
        
        // Different species
        EcologyShapes.drawAnimal(this.ctx, rightX - 50, height * 0.35, 30, 'herbivore');
        EcologyShapes.drawAnimal(this.ctx, rightX + 50, height * 0.35, 30, 'carnivore');
        
        // Shared resource in middle
        this.ctx.fillStyle = '#F39C12';
        this.ctx.beginPath();
        this.ctx.arc(rightX, height * 0.5, 20, 0, Math.PI * 2);
        this.ctx.fill();
        this.ctx.fillStyle = '#FFFFFF';
        this.ctx.font = '10px Arial';
        this.ctx.fillText('Food', rightX, height * 0.505);
        
        // Arrows pointing to resource
        EcologyShapes.drawArrow(
            this.ctx,
            rightX - 35, height * 0.38,
            rightX - 18, height * 0.48,
            '#E74C3C', ''
        );
        EcologyShapes.drawArrow(
            this.ctx,
            rightX + 35, height * 0.38,
            rightX + 18, height * 0.48,
            '#E74C3C', ''
        );
        
        if (showLabels) {
            this.ctx.fillStyle = '#2C3E50';
            this.ctx.font = '11px Arial';
            this.ctx.fillText('Outcomes:', rightX, height * 0.62);
            this.ctx.fillText('• Competitive exclusion', rightX, height * 0.65);
            this.ctx.fillText('• Resource partitioning', rightX, height * 0.68);
            this.ctx.fillText('• Character displacement', rightX, height * 0.71);
            this.ctx.fillText('• Niche differentiation', rightX, height * 0.74);
        }
        
        this.ctx.restore();
    }
    
    // ========== CLIMATE & BIOMES DIAGRAMS ==========
    
    renderClimateZonesDiagram(x, y, width, height, options) {
        const { showLabels, showLatitude } = options;
        
        this.ctx.save();
        this.ctx.translate(x - width / 2, y - height / 2);
        
        // Draw Earth sphere
        const earthCenterY = height * 0.5;
        const earthRadius = height * 0.4;
        
        // Earth
        const earthGradient = this.ctx.createRadialGradient(
            width * 0.5, earthCenterY,
            0,
            width * 0.5, earthCenterY,
            earthRadius
        );
        earthGradient.addColorStop(0, '#4A90E2');
        earthGradient.addColorStop(1, '#2E5C8A');
        this.ctx.fillStyle = earthGradient;
        this.ctx.beginPath();
        this.ctx.arc(width * 0.5, earthCenterY, earthRadius, 0, Math.PI * 2);
        this.ctx.fill();
        
        // Climate zones as bands
        const zones = [
            { name: 'Polar', color: '#E0F7FF', start: -0.95, end: -0.65 },
            { name: 'Temperate', color: '#90EE90', start: -0.65, end: -0.25 },
            { name: 'Tropical', color: '#FFD700', start: -0.25, end: 0.25 },
            { name: 'Temperate', color: '#90EE90', start: 0.25, end: 0.65 },
            { name: 'Polar', color: '#E0F7FF', start: 0.65, end: 0.95 }
        ];
        
        zones.forEach((zone, index) => {
            const startY = earthCenterY + zone.start * earthRadius;
            const endY = earthCenterY + zone.end * earthRadius;
            const bandHeight = endY - startY;
            
            // Calculate band width at this latitude
            const midLat = (zone.start + zone.end) / 2;
            const bandWidth = Math.cos(midLat * Math.PI / 2) * earthRadius * 2;
            
            this.ctx.fillStyle = zone.color;
            this.ctx.globalAlpha = 0.6;
            this.ctx.fillRect(
                width * 0.5 - bandWidth / 2,
                startY,
                bandWidth,
                bandHeight
            );
            this.ctx.globalAlpha = 1;
            
            // Zone labels
            if (showLabels) {
                this.ctx.fillStyle = '#2C3E50';
                this.ctx.font = 'bold 12px Arial';
                this.ctx.textAlign = 'left';
                
                const labelX = width * 0.5 + earthRadius + 20;
                const labelY = (startY + endY) / 2;
                
                this.ctx.fillText(zone.name, labelX, labelY);
                
                // Latitude lines
                if (showLatitude) {
                    this.ctx.strokeStyle = '#2C3E50';
                    this.ctx.lineWidth = 1;
                    this.ctx.setLineDash([3, 3]);
                    this.ctx.beginPath();
                    this.ctx.moveTo(width * 0.5 - bandWidth / 2, startY);
                    this.ctx.lineTo(labelX - 5, startY);
                    this.ctx.stroke();
                    this.ctx.setLineDash([]);
                    
                    // Latitude value
                    const latDegrees = Math.round(Math.asin(zone.start) * 180 / Math.PI);
                    this.ctx.font = '10px Arial';
                    this.ctx.fillText(`${Math.abs(latDegrees)}°${latDegrees < 0 ? 'S' : 'N'}`, labelX, startY - 5);
                }
            }
        });
        
        // Equator line
        this.ctx.strokeStyle = '#E74C3C';
        this.ctx.lineWidth = 2;
        this.ctx.setLineDash([10, 5]);
        this.ctx.beginPath();
        this.ctx.moveTo(width * 0.5 - earthRadius, earthCenterY);
        this.ctx.lineTo(width * 0.5 + earthRadius, earthCenterY);
        this.ctx.stroke();
        this.ctx.setLineDash([]);
        
        if (showLabels) {
            this.ctx.fillStyle = '#E74C3C';
            this.ctx.font = 'bold 12px Arial';
            this.ctx.textAlign = 'center';
            this.ctx.fillText('Equator (0°)', width * 0.5, earthCenterY - 10);
        }
        
        // Sun rays (more direct at equator)
        this.ctx.strokeStyle = '#FFD700';
        this.ctx.lineWidth = 3;
        this.ctx.lineCap = 'round';
        
        // Direct rays at equator
        for (let i = 0; i < 5; i++) {
            const rayY = earthCenterY - 30 + i * 15;
            this.ctx.beginPath();
            this.ctx.moveTo(width * 0.05, rayY);
            this.ctx.lineTo(width * 0.15, rayY);
            this.ctx.stroke();
        }
        
        // Angled rays at poles
        this.ctx.save();
        this.ctx.translate(width * 0.1, earthCenterY - earthRadius * 0.8);
        this.ctx.rotate(-0.5);
        for (let i = 0; i < 3; i++) {
            this.ctx.beginPath();
            ctx.moveTo(0, i * 15);
            this.ctx.lineTo(50, i * 15);
            this.ctx.stroke();
        }
        this.ctx.restore();
        
        this.ctx.restore();
    }
    
    renderBiomeDistributionDiagram(x, y, width, height, options) {
        const { showLabels, simplified } = options;
        
        this.ctx.save();
        this.ctx.translate(x - width / 2, y - height / 2);
        
        // Simplified world map with biome colors
        const biomes = [
            { name: 'Tropical Rainforest', color: '#006400', regions: [[0.3, 0.48, 0.15, 0.08], [0.7, 0.5, 0.12, 0.06]] },
            { name: 'Desert', color: '#F4A460', regions: [[0.15, 0.4, 0.12, 0.1], [0.6, 0.42, 0.18, 0.12]] },
            { name: 'Grassland', color: '#9ACD32', regions: [[0.28, 0.52, 0.14, 0.08], [0.55, 0.55, 0.15, 0.09]] },
            { name: 'Temperate Forest', color: '#228B22', regions: [[0.1, 0.3, 0.12, 0.08], [0.65, 0.32, 0.15, 0.09]] },
            { name: 'Taiga', color: '#2F4F4F', regions: [[0.08, 0.2, 0.35, 0.08], [0.6, 0.22, 0.25, 0.07]] },
            { name: 'Tundra', color: '#B0C4DE', regions: [[0.05, 0.08, 0.4, 0.1], [0.55, 0.1, 0.35, 0.1]] }
        ];
        
        // Ocean background
        this.ctx.fillStyle = '#4682B4';
        this.ctx.fillRect(0, height * 0.15, width, height * 0.7);
        
        // Draw biome regions
        biomes.forEach(biome => {
            this.ctx.fillStyle = biome.color;
            biome.regions.forEach(([rx, ry, rw, rh]) => {
                this.ctx.fillRect(width * rx, height * ry, width * rw, height * rh);
            });
        });
        
        // Legend
        if (showLabels) {
            const legendX = width * 0.02;
            const legendY = height * 0.02;
            
            this.ctx.fillStyle = 'rgba(255, 255, 255, 0.95)';
            this.ctx.fillRect(legendX, legendY, 150, biomes.length * 20 + 25);
            this.ctx.strokeStyle = '#2C3E50';
            this.ctx.lineWidth = 2;
            this.ctx.strokeRect(legendX, legendY, 150, biomes.length * 20 + 25);
            
            this.ctx.fillStyle = '#2C3E50';
            this.ctx.font = 'bold 12px Arial';
            this.ctx.textAlign = 'left';
            this.ctx.fillText('Biomes:', legendX + 5, legendY + 15);
            
            biomes.forEach((biome, i) => {
                const itemY = legendY + 30 + i * 20;
                
                // Color box
                this.ctx.fillStyle = biome.color;
                this.ctx.fillRect(legendX + 5, itemY - 10, 15, 12);
                this.ctx.strokeStyle = '#2C3E50';
                this.ctx.lineWidth = 1;
                this.ctx.strokeRect(legendX + 5, itemY - 10, 15, 12);
                
                // Label
                this.ctx.fillStyle = '#2C3E50';
                this.ctx.font = '10px Arial';
                this.ctx.fillText(biome.name, legendX + 25, itemY);
            });
        }
        
        this.ctx.restore();
    }
    
    renderClimateDiagramDiagram(x, y, width, height, options) {
        const { showLabels, location } = options;
        
        this.ctx.save();
        this.ctx.translate(x - width / 2, y - height / 2);
        
        // Define climate data for different locations
        const climateData = {
            'temperate': {
                name: 'Temperate (London)',
                temp: [5, 5, 7, 9, 13, 16, 18, 18, 15, 11, 8, 6],
                precip: [55, 40, 42, 45, 49, 45, 44, 50, 49, 68, 59, 55]
            },
            'tropical': {
                name: 'Tropical (Singapore)',
                temp: [27, 27, 28, 28, 28, 28, 27, 27, 27, 27, 27, 27],
                precip: [240, 160, 185, 180, 170, 160, 160, 175, 170, 195, 255, 290]
            },
            'desert': {
                name: 'Desert (Phoenix)',
                temp: [13, 15, 18, 22, 27, 32, 35, 34, 31, 24, 17, 13],
                precip: [20, 20, 22, 8, 3, 2, 25, 30, 20, 18, 18, 25]
            }
        };
        
        const data = climateData[location] || climateData['temperate'];
        
        // Axes
        this.ctx.strokeStyle = '#2C3E50';
        this.ctx.lineWidth = 2;
        this.ctx.beginPath();
        this.ctx.moveTo(width * 0.15, height * 0.1);
        this.ctx.lineTo(width * 0.15, height * 0.8);
        this.ctx.lineTo(width * 0.9, height * 0.8);
        this.ctx.stroke();
        
        if (showLabels) {
            // Title
            this.ctx.font = 'bold 14px Arial';
            this.ctx.fillStyle = '#2C3E50';
            this.ctx.textAlign = 'center';
            this.ctx.fillText(data.name, width * 0.5, height * 0.05);
            
            // Y-axis labels
            this.ctx.font = '11px Arial';
            this.ctx.textAlign = 'right';
            
            // Temperature (left)
            this.ctx.fillStyle = '#E74C3C';
            this.ctx.fillText('Temperature (°C)', width * 0.13, height * 0.08);
            for (let i = 0; i <= 40; i += 10) {
                const yPos = height * (0.8 - (i / 40) * 0.7);
                this.ctx.fillText(i.toString(), width * 0.13, yPos + 4);
            }
            
            // Precipitation (right)
            this.ctx.fillStyle = '#3498DB';
            this.ctx.textAlign = 'left';
            this.ctx.fillText('Precipitation (mm)', width * 0.87, height * 0.08);
            for (let i = 0; i <= 300; i += 50) {
                const yPos = height * (0.8 - (i / 300) * 0.7);
                this.ctx.fillText(i.toString(), width * 0.92, yPos + 4);
            }
            
            // Month labels
            this.ctx.fillStyle = '#2C3E50';
            this.ctx.textAlign = 'center';
            const months = ['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'];
            for (let i = 0; i < 12; i++) {
                const xPos = width * (0.15 + (i + 0.5) * 0.75 / 12);
                this.ctx.fillText(months[i], xPos, height * 0.85);
            }
        }
        
        const graphWidth = width * 0.75;
        const graphHeight = height * 0.7;
        const barWidth = graphWidth / 12;
        
        // Precipitation bars
        this.ctx.fillStyle = '#3498DB';
        for (let i = 0; i < 12; i++) {
            const barHeight = (data.precip[i] / 300) * graphHeight;
            const xPos = width * 0.15 + i * barWidth;
            this.ctx.fillRect(
                xPos + barWidth * 0.1,
                height * 0.8 - barHeight,
                barWidth * 0.8,
                barHeight
            );
        }
        
        // Temperature line
        this.ctx.strokeStyle = '#E74C3C';
        this.ctx.lineWidth = 3;
        this.ctx.beginPath();
        for (let i = 0; i < 12; i++) {
            const xPos = width * (0.15 + (i + 0.5) * 0.75 / 12);
            const yPos = height * (0.8 - (data.temp[i] / 40) * 0.7);
            
            if (i === 0) {
                this.ctx.moveTo(xPos, yPos);
            } else {
                this.ctx.lineTo(xPos, yPos);
            }
            
            // Temperature points
            this.ctx.fillStyle = '#E74C3C';
            this.ctx.beginPath();
            this.ctx.arc(xPos, yPos, 4, 0, Math.PI * 2);
            this.ctx.fill();
        }
        this.ctx.stroke();
        
        // Legend
        if (showLabels) {
            this.drawLegend(width * 0.65, height * 0.15, [
                { color: '#E74C3C', label: 'Temperature' },
                { color: '#3498DB', label: 'Precipitation' }
            ]);
        }
        
        this.ctx.restore();
    }
    
    // ========== SOIL & DECOMPOSITION DIAGRAMS ==========
    
    renderSoilProfileDiagram(x, y, width, height, options) {
        const { showLabels, showHorizons, soilType } = options;
        
        this.ctx.save();
        this.ctx.translate(x - width / 2, y - height / 2);
        
        // Sky
        this.ctx.fillStyle = '#87CEEB';
        this.ctx.fillRect(0, height * 0.05, width, height * 0.1);
        
        // Vegetation
        for (let i = 0; i < 6; i++) {
            const plantX = width * (0.15 + i * 0.12);
            EcologyShapes.drawPlant(this.ctx, plantX, height * 0.18, 25, 'grass');
        }
        
        // Soil horizons
        const horizons = [
            { name: 'O Horizon', code: 'O', color: '#2F1B08', height: 0.08, description: 'Organic matter' },
            { name: 'A Horizon', code: 'A', color: '#3E2723', height: 0.15, description: 'Topsoil (humus)' },
            { name: 'B Horizon', code: 'B', color: '#8B4513', height: 0.2, description: 'Subsoil' },
            { name: 'C Horizon', code: 'C', color: '#D2691E', height: 0.25, description: 'Parent material' },
            { name: 'R Horizon', code: 'R', color: '#A0522D', height: 0.2, description: 'Bedrock' }
        ];
        
        let currentY = height * 0.2;
        
        horizons.forEach((horizon, index) => {
            const horizonHeight = height * horizon.height;
            
            // Draw horizon
            EcologyShapes.drawSoilLayer(this.ctx, 0, currentY, width, horizonHeight, horizon.code);
            
            // Add specific features
            if (horizon.code === 'O') {
                // Leaf litter
                this.ctx.fillStyle = '#8B4513';
                for (let i = 0; i < 10; i++) {
                    const lx = width * Math.random();
                    const ly = currentY + Math.random() * horizonHeight;
                    this.ctx.save();
                    this.ctx.translate(lx, ly);
                    this.ctx.rotate(Math.random() * Math.PI);
                    this.ctx.fillRect(-8, -3, 16, 6);
                    this.ctx.restore();
                }
            } else if (horizon.code === 'A') {
                // Roots
                this.ctx.strokeStyle = '#654321';
                this.ctx.lineWidth = 2;
                for (let i = 0; i < 8; i++) {
                    const rootX = width * (0.2 + i * 0.08);
                    this.ctx.beginPath();
                    this.ctx.moveTo(rootX, currentY);
                    this.ctx.lineTo(rootX + 10, currentY + horizonHeight * 0.7);
                    this.ctx.stroke();
                }
                
                // Earthworms
                this.ctx.strokeStyle = '#D2691E';
                this.ctx.lineWidth = 3;
                for (let i = 0; i < 3; i++) {
                    const wx = width * (0.3 + i * 0.2);
                    const wy = currentY + horizonHeight * 0.5;
                    this.ctx.beginPath();
                    this.ctx.moveTo(wx, wy);
                    this.ctx.quadraticCurveTo(wx + 10, wy + 5, wx + 20, wy);
                    this.ctx.stroke();
                }
            } else if (horizon.code === 'B') {
                // Clay accumulation (darker patches)
                this.ctx.fillStyle = '#654321';
                for (let i = 0; i < 15; i++) {
                    const cx = width * Math.random();
                    const cy = currentY + Math.random() * horizonHeight;
                    this.ctx.beginPath();
                    this.ctx.arc(cx, cy, 5, 0, Math.PI * 2);
                    this.ctx.fill();
                }
            } else if (horizon.code === 'R') {
                // Rock texture
                this.ctx.fillStyle = '#696969';
                for (let i = 0; i < 8; i++) {
                    const rx = width * (i / 8);
                    const ry = currentY + Math.random() * horizonHeight;
                    this.ctx.fillRect(rx, ry, 15, 12);
                }
            }
            
            // Labels
            if (showLabels && showHorizons) {
                // Horizon code
                this.ctx.fillStyle = 'rgba(255, 255, 255, 0.9)';
                this.ctx.fillRect(width * 0.02, currentY + 5, 25, 25);
                this.ctx.strokeStyle = '#2C3E50';
                this.ctx.lineWidth = 1;
                this.ctx.strokeRect(width * 0.02, currentY + 5, 25, 25);
                
                this.ctx.fillStyle = '#2C3E50';
                this.ctx.font = 'bold 16px Arial';
                this.ctx.textAlign = 'center';
                this.ctx.fillText(horizon.code, width * 0.02 + 12.5, currentY + 22);
                
                // Horizon name and description
                this.ctx.fillStyle = 'rgba(255, 255, 255, 0.85)';
                this.ctx.fillRect(width * 0.1, currentY + horizonHeight / 2 - 15, width * 0.3, 30);
                this.ctx.strokeStyle = '#2C3E50';
                this.ctx.strokeRect(width * 0.1, currentY + horizonHeight / 2 - 15, width * 0.3, 30);
                
                this.ctx.fillStyle = '#2C3E50';
                this.ctx.font = 'bold 11px Arial';
                this.ctx.textAlign = 'left';
                this.ctx.fillText(horizon.name, width * 0.12, currentY + horizonHeight / 2 - 3);
                this.ctx.font = '10px Arial';
                this.ctx.fillText(horizon.description, width * 0.12, currentY + horizonHeight / 2 + 10);
            }
            
            currentY += horizonHeight;
        });
        
        // Depth markers
        if (showLabels) {
            this.ctx.strokeStyle = '#2C3E50';
            this.ctx.lineWidth = 2;
            this.ctx.beginPath();
            this.ctx.moveTo(width * 0.92, height * 0.2);
            this.ctx.lineTo(width * 0.92, currentY);
            this.ctx.stroke();
            
            // Depth labels
            this.ctx.font = '10px Arial';
            this.ctx.fillStyle = '#2C3E50';
            this.ctx.textAlign = 'left';
            let depthY = height * 0.2;
            let depth = 0;
            this.ctx.fillText('0 cm', width * 0.93, depthY);
            
            horizons.forEach(horizon => {
                depthY += height * horizon.height;
                depth += horizon.height * 100; // Approximate depth in cm
                this.ctx.fillText(`~${Math.round(depth)} cm`, width * 0.93, depthY);
            });
        }
        
        this.ctx.restore();
    }
    
    renderDecompositionProcessDiagram(x, y, width, height, options) {
        const { showLabels, showStages, showOrganisms } = options;
        
        this.ctx.save();
        this.ctx.translate(x - width / 2, y - height / 2);
        
        const stages = [
            { name: 'Fresh Material', x: 0.15, organisms: ['none'], decomp: 0 },
            { name: 'Active Decay', x: 0.35, organisms: ['bacteria', 'fungi'], decomp: 0.4 },
            { name: 'Advanced Decay', x: 0.55, organisms: ['bacteria', 'fungi', 'insects'], decomp: 0.7 },
            { name: 'Humus Formation', x: 0.75, organisms: ['bacteria'], decomp: 1.0 }
        ];
        
        stages.forEach((stage, index) => {
            const centerX = width * stage.x;
            const centerY = height * 0.4;
            
            // Stage circle
            this.ctx.fillStyle = `rgba(139, 69, 19, ${0.3 + stage.decomp * 0.5})`;
            this.ctx.beginPath();
            this.ctx.arc(centerX, centerY, 60, 0, Math.PI * 2);
            this.ctx.fill();
            this.ctx.strokeStyle = '#654321';
            this.ctx.lineWidth = 2;
            this.ctx.stroke();
            
            // Organic matter representation
            if (stage.decomp === 0) {
                // Fresh leaf
                this.ctx.fillStyle = '#228B22';
                this.ctx.save();
                this.ctx.translate(centerX, centerY);
                this.ctx.rotate(0.3);
                this.ctx.fillRect(-20, -10, 40, 20);
                this.ctx.restore();
            } else if (stage.decomp < 0.7) {
                // Partially decomposed
                this.ctx.fillStyle = '#8B4513';
                for (let i = 0; i < 6; i++) {
                    const px = centerX - 20 + Math.random() * 40;
                    const py = centerY - 15 + Math.random() * 30;
                    this.ctx.fillRect(px, py, 8, 6);
                }
            } else {
                // Humus (dark, uniform)
                this.ctx.fillStyle = '#2F1B08';
                this.ctx.fillRect(centerX - 25, centerY - 10, 50, 20);
            }
            
            // Decomposer organisms
            if (showOrganisms && stage.organisms[0] !== 'none') {
                stage.organisms.forEach((org, orgIndex) => {
                    const orgX = centerX - 15 + orgIndex * 15;
                    const orgY = centerY + 35;
                    
                    if (org === 'bacteria') {
                        EcologyShapes.drawMicroorganism(this.ctx, orgX, orgY, 12, 'bacteria');
                    } else if (org === 'fungi') {
                        EcologyShapes.drawMicroorganism(this.ctx, orgX, orgY, 12, 'fungus');
                    } else if (org === 'insects') {
                        EcologyShapes.drawAnimal(this.ctx, orgX, orgY, 10, 'insect');
                    }
                });
            }
            
            // Stage label
            if (showLabels && showStages) {
                this.ctx.fillStyle = '#2C3E50';
                this.ctx.font = 'bold 11px Arial';
                this.ctx.textAlign = 'center';
                this.ctx.fillText(stage.name, centerX, centerY - 75);
                
                this.ctx.font = '10px Arial';
                this.ctx.fillText(`${Math.round(stage.decomp * 100)}% decomposed`, centerX, centerY - 62);
            }
            
            // Arrow to next stage
            if (index < stages.length - 1) {
                const nextX = width * stages[index + 1].x;
                EcologyShapes.drawArrow(
                    this.ctx,
                    centerX + 65, centerY,
                    nextX - 65, centerY,
                    '#654321',
                    ''
                );
            }
        });
        
        // Nutrients released (bottom)
        if (showLabels) {
            this.ctx.font = 'bold 12px Arial';
            this.ctx.fillStyle = '#2ECC71';
            this.ctx.textAlign = 'center';
            this.ctx.fillText('Nutrients Released:', width * 0.5, height * 0.68);
            
            this.ctx.font = '11px Arial';
            const nutrients = ['Nitrogen (N)', 'Phosphorus (P)', 'Potassium (K)', 'Carbon (C)'];
            nutrients.forEach((nutrient, i) => {
                this.ctx.fillText(nutrient, width * (0.22 + i * 0.19), height * 0.73);
                
                // Upward arrow
                EcologyShapes.drawArrow(
                    this.ctx,
                    width * (0.22 + i * 0.19), height * 0.63,
                    width * (0.22 + i * 0.19), height * 0.75,
                    '#2ECC71',
                    ''
                );
            });
            
            this.ctx.fillText('Available to plants', width * 0.5, height * 0.82);
        }
        
        // Time scale at bottom
        if (showLabels) {
            EcologyShapes.drawArrow(
                this.ctx,
                width * 0.1, height * 0.92,
                width * 0.9, height * 0.92,
                '#E74C3C',
                'Time (weeks to years)'
            );
        }
        
        this.ctx.restore();
    }
    
    // ========== BIODIVERSITY & CONSERVATION DIAGRAMS ==========
    
    renderBiodiversityGradientDiagram(x, y, width, height, options) {
        const { showLabels } = options;
        
        this.ctx.save();
        this.ctx.translate(x - width / 2, y - height / 2);
        
        // Draw curve showing species richness vs latitude
        // Axes
        this.ctx.strokeStyle = '#2C3E50';
        this.ctx.lineWidth = 2;
        this.ctx.beginPath();
        this.ctx.moveTo(width * 0.15, height * 0.1);
        this.ctx.lineTo(width * 0.15, height * 0.8);
        this.ctx.lineTo(width * 0.9, height * 0.8);
        this.ctx.stroke();
        
        if (showLabels) {
            // Y-axis label
            this.ctx.font = 'bold 12px Arial';
            this.ctx.fillStyle = '#2C3E50';
            this.ctx.save();
            this.ctx.translate(width * 0.05, height * 0.45);
            this.ctx.rotate(-Math.PI / 2);
            this.ctx.textAlign = 'center';
            this.ctx.fillText('Species Richness', 0, 0);
            this.ctx.restore();
            
            // X-axis label
            this.ctx.textAlign = 'center';
            this.ctx.fillText('Latitude', width * 0.5, height * 0.88);
            
            // Latitude markers
            this.ctx.font = '10px Arial';
            const latitudes = ['90°N\n(Pole)', '60°N', '30°N', '0°\n(Equator)', '30°S', '60°S', '90°S\n(Pole)'];
            latitudes.forEach((lat, i) => {
                const xPos = width * (0.15 + i * 0.75 / 6);
                const lines = lat.split('\n');
                lines.forEach((line, lineIndex) => {
                    this.ctx.fillText(line, xPos, height * 0.83 + lineIndex * 10);
                });
            });
        }
        
        // Draw gradient curve (peak at equator)
        this.ctx.strokeStyle = '#2ECC71';
        this.ctx.lineWidth = 4;
        this.ctx.beginPath();
        
        const graphWidth = width * 0.75;
        const graphHeight = height * 0.7;
        
        for (let i = 0; i <= 100; i++) {
            const t = i / 100;
            const xPos = width * 0.15 + t * graphWidth;
            
            // Latitude from -90 to 90 (scaled to -1 to 1)
            const lat = (t - 0.5) * 2;
            // Species richness peaks at equator (lat = 0)
            const richness = Math.exp(-5 * lat * lat);
            const yPos = height * 0.8 - richness * graphHeight;
            
            if (i === 0) {
                this.ctx.moveTo(xPos, yPos);
            } else {
                this.ctx.lineTo(xPos, yPos);
            }
        }
        this.ctx.stroke();
        
        // Fill under curve
        this.ctx.fillStyle = 'rgba(46, 204, 113, 0.2)';
        this.ctx.lineTo(width * 0.9, height * 0.8);
        this.ctx.lineTo(width * 0.15, height * 0.8);
        this.ctx.closePath();
        this.ctx.fill();
        
        // Annotations
        if (showLabels) {
            // Tropical peak
            this.ctx.fillStyle = '#27AE60';
            this.ctx.font = 'bold 11px Arial';
            this.ctx.textAlign = 'center';
            this.ctx.fillText('Tropical regions:', width * 0.5, height * 0.18);
            this.ctx.font = '10px Arial';
            this.ctx.fillText('Highest biodiversity', width * 0.5, height * 0.18 + 12);
            
            // Temperate
            this.ctx.fillStyle = '#7F8C8D';
            this.ctx.fillText('Temperate:', width * 0.28, height * 0.45);
            this.ctx.fillText('Moderate diversity', width * 0.28, height * 0.45 + 11);
            
            // Polar
            this.ctx.fillText('Polar:', width * 0.18, height * 0.72);
            this.ctx.fillText('Low diversity', width * 0.18, height * 0.72 + 11);
            
            // Explanatory factors
            this.ctx.fillStyle = '#2C3E50';
            this.ctx.font = 'italic 10px Arial';
            this.ctx.textAlign = 'left';
            this.ctx.fillText('Factors:', width * 0.65, height * 0.25);
            this.ctx.fillText('• Solar energy', width * 0.65, height * 0.28);
            this.ctx.fillText('• Productivity', width * 0.65, height * 0.31);
            this.ctx.fillText('• Evolutionary time', width * 0.65, height * 0.34);
            this.ctx.fillText('• Climate stability', width * 0.65, height * 0.37);
        }
        
        this.ctx.restore();
    }
    
    renderSpeciesAreaCurveDiagram(x, y, width, height, options) {
        const { showLabels } = options;
        
        this.ctx.save();
        this.ctx.translate(x - width / 2, y - height / 2);
        
        // Axes
        this.ctx.strokeStyle = '#2C3E50';
        this.ctx.lineWidth = 2;
        this.ctx.beginPath();
        this.ctx.moveTo(width * 0.15, height * 0.1);
        this.ctx.lineTo(width * 0.15, height * 0.8);
        this.ctx.lineTo(width * 0.9, height * 0.8);
        this.ctx.stroke();
        
        if (showLabels) {
            // Axis labels
            this.ctx.font = 'bold 12px Arial';
            this.ctx.fillStyle = '#2C3E50';
            this.ctx.textAlign = 'center';
            
            // Y-axis
            this.ctx.save();
            this.ctx.translate(width * 0.05, height * 0.45);
            this.ctx.rotate(-Math.PI / 2);
            this.ctx.fillText('Number of Species (log scale)', 0, 0);
            this.ctx.restore();
            
            // X-axis
            this.ctx.fillText('Area (log scale)', width * 0.5, height * 0.88);
        }
        
        // Species-area curve: S = cA^z
        // Log-log plot makes this linear
        this.ctx.strokeStyle = '#3498DB';
        this.ctx.lineWidth = 3;
        this.ctx.beginPath();
        
        const graphWidth = width * 0.75;
        const graphHeight = height * 0.7;
        
        for (let i = 0; i <= 100; i++) {
            const t = i / 100;
            const xPos = width * 0.15 + t * graphWidth;
            
            // Power law relationship: S ∝ A^0.25
            const area = Math.pow(10, t * 4); // Area from 1 to 10,000
            const species = 5 * Math.pow(area, 0.25);
            const logSpecies = Math.log10(species);
            
            const yPos = height * (0.8 - (logSpecies / 2.5) * graphHeight);
            
            if (i === 0) {
                this.ctx.moveTo(xPos, yPos);
            } else {
                this.ctx.lineTo(xPos, yPos);
            }
        }
        this.ctx.stroke();
        
        // Data points (islands)
        const islands = [
            { name: 'Small island', area: 10, species: 15, x: 0.25, y: 0.65 },
            { name: 'Medium island', area: 100, species: 25, x: 0.45, y: 0.52 },
            { name: 'Large island', area: 1000, species: 42, x: 0.65, y: 0.39 },
            { name: 'Continent', area: 10000, species: 70, x: 0.85, y: 0.26 }
        ];
        
        islands.forEach(island => {
            this.ctx.fillStyle = '#E74C3C';
            this.ctx.beginPath();
            this.ctx.arc(width * island.x, height * island.y, 5, 0, Math.PI * 2);
            this.ctx.fill();
            
            if (showLabels) {
                this.ctx.fillStyle = '#2C3E50';
                this.ctx.font = '9px Arial';
                this.ctx.textAlign = 'center';
                this.ctx.fillText(island.name, width * island.x, height * island.y - 10);
            }
        });
        
        // Equation
        if (showLabels) {
            this.ctx.fillStyle = '#3498DB';
            this.ctx.font = 'italic 12px Arial';
            this.ctx.textAlign = 'left';
            this.ctx.fillText('S = cA^z', width * 0.7, height * 0.15);
            this.ctx.font = '10px Arial';
            this.ctx.fillText('S = species', width * 0.7, height * 0.18);
            this.ctx.fillText('A = area', width * 0.7, height * 0.21);
            this.ctx.fillText('z ≈ 0.25', width * 0.7, height * 0.24);
        }
        
        this.ctx.restore();
    }
    
    renderHabitatFragmentationDiagram(x, y, width, height, options) {
        const { showLabels, stages } = options;
        
        this.ctx.save();
        this.ctx.translate(x - width / 2, y - height / 2);
        
        const stageWidth = width / stages;
        
        const fragmentationStages = [
            { name: 'Original Habitat', coverage: 1.0 },
            { name: 'Perforation', coverage: 0.85 },
            { name: 'Fragmentation', coverage: 0.6 },
            { name: 'Attrition', coverage: 0.3 }
        ];
        
        for (let i = 0; i < Math.min(stages, fragmentationStages.length); i++) {
            const stage = fragmentationStages[i];
            const stageX = i * stageWidth;
            const boxWidth = stageWidth * 0.9;
            const boxHeight = height * 0.7;
            const centerX = stageX + stageWidth / 2;
            
            // Background (represents overall landscape)
            this.ctx.fillStyle = '#F5DEB3';
            this.ctx.fillRect(stageX + stageWidth * 0.05, height * 0.15, boxWidth, boxHeight);
            
            // Forest habitat (green)
            this.ctx.fillStyle = '#228B22';
            
            if (i === 0) {
                // Original continuous habitat
                this.ctx.fillRect(
                    stageX + stageWidth * 0.1,
                    height * 0.2,
                    boxWidth * 0.8,
                    boxHeight * 0.8
                );
            } else if (i === 1) {
                // Perforation - holes appear
                this.ctx.fillRect(stageX + stageWidth * 0.1, height * 0.2, boxWidth * 0.8, boxHeight * 0.8);
                
                // Clear some holes
                this.ctx.fillStyle = '#F5DEB3';
                for (let j = 0; j < 3; j++) {
                    const holeX = stageX + stageWidth * (0.25 + j * 0.25);
                    const holeY = height * (0.35 + (j % 2) * 0.2);
                    this.ctx.fillRect(holeX, holeY, boxWidth * 0.15, boxHeight * 0.15);
                }
            } else if (i === 2) {
                // Fragmentation - separate patches
                const patches = [
                    [0.12, 0.22, 0.25, 0.3],
                    [0.45, 0.25, 0.2, 0.25],
                    [0.72, 0.3, 0.18, 0.2],
                    [0.15, 0.6, 0.22, 0.22],
                    [0.52, 0.62, 0.25, 0.18]
                ];
                
                patches.forEach(([px, py, pw, ph]) => {
                    this.ctx.fillStyle = '#228B22';
                    this.ctx.fillRect(
                        stageX + stageWidth * px,
                        height * py,
                        stageWidth * pw,
                        height * ph
                    );
                });
            } else if (i === 3) {
                // Attrition - small isolated patches
                const smallPatches = [
                    [0.15, 0.3, 0.15, 0.15],
                    [0.6, 0.35, 0.18, 0.12],
                    [0.25, 0.65, 0.12, 0.1]
                ];
                
                smallPatches.forEach(([px, py, pw, ph]) => {
                    this.ctx.fillStyle = '#228B22';
                    this.ctx.fillRect(
                        stageX + stageWidth * px,
                        height * py,
                        stageWidth * pw,
                        height * ph
                    );
                });
            }
            
            // Border
            this.ctx.strokeStyle = '#2C3E50';
            this.ctx.lineWidth = 2;
            this.ctx.strokeRect(stageX + stageWidth * 0.05, height * 0.15,boxWidth, boxHeight);
            
            // Stage label
            if (showLabels) {
                this.ctx.fillStyle = 'rgba(255, 255, 255, 0.9)';
                this.ctx.fillRect(stageX + stageWidth * 0.1, height * 0.02, boxWidth * 0.8, 30);
                this.ctx.strokeStyle = '#2C3E50';
                this.ctx.lineWidth = 1;
                this.ctx.strokeRect(stageX + stageWidth * 0.1, height * 0.02, boxWidth * 0.8, 30);
                
                this.ctx.fillStyle = '#2C3E50';
                this.ctx.font = 'bold 11px Arial';
                this.ctx.textAlign = 'center';
                this.ctx.fillText(stage.name, centerX, height * 0.04 + 8);
                this.ctx.font = '10px Arial';
                this.ctx.fillText(`${Math.round(stage.coverage * 100)}% habitat`, centerX, height * 0.04 + 20);
            }
            
            // Arrow to next stage
            if (i < stages - 1) {
                EcologyShapes.drawArrow(
                    this.ctx,
                    stageX + stageWidth - 10, height * 0.5,
                    stageX + stageWidth + 10, height * 0.5,
                    '#E74C3C',
                    ''
                );
            }
        }
        
        // Impact annotations
        if (showLabels) {
            this.ctx.fillStyle = '#2C3E50';
            this.ctx.font = 'bold 11px Arial';
            this.ctx.textAlign = 'left';
            this.ctx.fillText('Conservation Impacts:', width * 0.02, height * 0.9);
            
            this.ctx.font = '10px Arial';
            const impacts = [
                '• Reduced species diversity',
                '• Edge effects increase',
                '• Population isolation',
                '• Increased extinction risk'
            ];
            impacts.forEach((impact, i) => {
                this.ctx.fillText(impact, width * 0.02, height * 0.92 + i * 12);
            });
        }
        
        this.ctx.restore();
    }
    
    // ========== HUMAN IMPACT DIAGRAMS ==========
    
    renderInvasiveSpeciesDiagram(x, y, width, height, options) {
        const { showLabels, showTimeline } = options;
        
        this.ctx.save();
        this.ctx.translate(x - width / 2, y - height / 2);
        
        if (showTimeline) {
            const timeStages = [
                { time: 'Pre-invasion', native: 10, invasive: 0, x: 0.15 },
                { time: 'Introduction', native: 10, invasive: 2, x: 0.35 },
                { time: 'Establishment', native: 8, invasive: 6, x: 0.55 },
                { time: 'Spread', native: 5, invasive: 12, x: 0.75 }
            ];
            
            timeStages.forEach((stage, index) => {
                const centerX = width * stage.x;
                const boxWidth = width * 0.18;
                const boxHeight = height * 0.6;
                
                // Box
                this.ctx.fillStyle = 'rgba(255, 255, 255, 0.9)';
                this.ctx.fillRect(centerX - boxWidth / 2, height * 0.15, boxWidth, boxHeight);
                this.ctx.strokeStyle = '#2C3E50';
                this.ctx.lineWidth = 2;
                this.ctx.strokeRect(centerX - boxWidth / 2, height * 0.15, boxWidth, boxHeight);
                
                // Native species (blue)
                const nativeHeight = (stage.native / 12) * (boxHeight * 0.7);
                this.ctx.fillStyle = '#3498DB';
                this.ctx.fillRect(
                    centerX - boxWidth * 0.35,
                    height * 0.7 - nativeHeight,
                    boxWidth * 0.3,
                    nativeHeight
                );
                
                // Invasive species (red)
                const invasiveHeight = (stage.invasive / 12) * (boxHeight * 0.7);
                this.ctx.fillStyle = '#E74C3C';
                this.ctx.fillRect(
                    centerX + boxWidth * 0.05,
                    height * 0.7 - invasiveHeight,
                    boxWidth * 0.3,
                    invasiveHeight
                );
                
                if (showLabels) {
                    // Time label
                    this.ctx.fillStyle = '#2C3E50';
                    this.ctx.font = 'bold 11px Arial';
                    this.ctx.textAlign = 'center';
                    this.ctx.fillText(stage.time, centerX, height * 0.12);
                    
                    // Population numbers
                    this.ctx.font = '9px Arial';
                    this.ctx.fillStyle = '#3498DB';
                    this.ctx.fillText(stage.native.toString(), centerX - boxWidth * 0.2, height * 0.7 - nativeHeight - 5);
                    
                    this.ctx.fillStyle = '#E74C3C';
                    this.ctx.fillText(stage.invasive.toString(), centerX + boxWidth * 0.2, height * 0.7 - invasiveHeight - 5);
                }
                
                // Arrow to next stage
                if (index < timeStages.length - 1) {
                    EcologyShapes.drawArrow(
                        this.ctx,
                        centerX + boxWidth / 2 + 5, height * 0.45,
                        width * timeStages[index + 1].x - boxWidth / 2 - 5, height * 0.45,
                        '#7F8C8D',
                        ''
                    );
                }
            });
            
            // Legend
            if (showLabels) {
                this.drawLegend(width * 0.35, height * 0.8, [
                    { color: '#3498DB', label: 'Native Species' },
                    { color: '#E74C3C', label: 'Invasive Species' }
                ]);
            }
        }
        
        // Impact description
        if (showLabels) {
            this.ctx.fillStyle = '#2C3E50';
            this.ctx.font = 'bold 12px Arial';
            this.ctx.textAlign = 'left';
            this.ctx.fillText('Impacts of Invasive Species:', width * 0.02, height * 0.88);
            
            this.ctx.font = '10px Arial';
            const impacts = [
                '• Outcompete native species',
                '• Disrupt food webs',
                '• Alter ecosystem processes',
                '• Reduce biodiversity'
            ];
            impacts.forEach((impact, i) => {
                this.ctx.fillText(impact, width * 0.02, height * 0.90 + i * 11);
            });
        }
        
        this.ctx.restore();
    }
    
    renderPollutionImpactDiagram(x, y, width, height, options) {
        const { showLabels, type } = options;
        
        this.ctx.save();
        this.ctx.translate(x - width / 2, y - height / 2);
        
        if (type === 'water') {
            // Eutrophication process
            
            // Water body
            this.ctx.fillStyle = '#4682B4';
            this.ctx.fillRect(0, height * 0.3, width, height * 0.7);
            
            // Nutrient runoff from land
            this.ctx.fillStyle = '#8FBC8F';
            this.ctx.fillRect(0, height * 0.25, width * 0.3, height * 0.05);
            
            // Farm/fertilizer
            this.ctx.fillStyle = '#D2691E';
            this.ctx.fillRect(width * 0.05, height * 0.15, width * 0.15, height * 0.1);
            
            if (showLabels) {
                this.ctx.fillStyle = '#2C3E50';
                this.ctx.font = 'bold 10px Arial';
                this.ctx.textAlign = 'center';
                this.ctx.fillText('Fertilizer/Sewage', width * 0.125, height * 0.13);
            }
            
            // Runoff arrow
            EcologyShapes.drawArrow(
                this.ctx,
                width * 0.2, height * 0.27,
                width * 0.35, height * 0.32,
                '#E74C3C',
                'Nutrient\nRunoff'
            );
            
            // Algal bloom (green surface)
            this.ctx.fillStyle = '#00FF00';
            this.ctx.globalAlpha = 0.7;
            this.ctx.fillRect(width * 0.3, height * 0.3, width * 0.5, height * 0.08);
            this.ctx.globalAlpha = 1;
            
            if (showLabels) {
                this.ctx.fillStyle = '#006400';
                this.ctx.font = 'bold 11px Arial';
                this.ctx.fillText('Algal Bloom', width * 0.55, height * 0.27);
            }
            
            // Dead zone (darker water below)
            const deadZoneGradient = this.ctx.createLinearGradient(0, height * 0.5, 0, height);
            deadZoneGradient.addColorStop(0, '#4682B4');
            deadZoneGradient.addColorStop(1, '#2F4F4F');
            this.ctx.fillStyle = deadZoneGradient;
            this.ctx.fillRect(width * 0.3, height * 0.5, width * 0.6, height * 0.5);
            
            // Dead fish
            for (let i = 0; i < 5; i++) {
                this.ctx.fillStyle = '#696969';
                const fishX = width * (0.4 + i * 0.1);
                const fishY = height * (0.7 + Math.random() * 0.2);
                this.ctx.beginPath();
                this.ctx.ellipse(fishX, fishY, 12, 6, Math.PI / 4, 0, Math.PI * 2);
                this.ctx.fill();
            }
            
            if (showLabels) {
                this.ctx.fillStyle = '#FFFFFF';
                this.ctx.font = 'bold 11px Arial';
                this.ctx.textAlign = 'center';
                this.ctx.fillText('Oxygen Depleted Zone', width * 0.6, height * 0.65);
                this.ctx.font = '10px Arial';
                this.ctx.fillText('(Dead Zone)', width * 0.6, height * 0.65 + 12);
                
                // Process steps
                this.ctx.fillStyle = '#2C3E50';
                this.ctx.textAlign = 'left';
                this.ctx.font = '10px Arial';
                const steps = [
                    '1. Excess nutrients enter water',
                    '2. Algae multiply rapidly',
                    '3. Algae die and decompose',
                    '4. Decomposition depletes oxygen',
                    '5. Fish and organisms die'
                ];
                steps.forEach((step, i) => {
                    this.ctx.fillText(step, width * 0.02, height * 0.38 + i * 13);
                });
            }
            
        } else if (type === 'air') {
            // Acid rain
            
            // Sky
            this.ctx.fillStyle = '#B0C4DE';
            this.ctx.fillRect(0, 0, width, height * 0.4);
            
            // Factory
            this.ctx.fillStyle = '#696969';
            this.ctx.fillRect(width * 0.1, height * 0.3, width * 0.15, height * 0.15);
            
            // Smokestack
            this.ctx.fillRect(width * 0.14, height * 0.15, width * 0.03, height * 0.15);
            this.ctx.fillRect(width * 0.19, height * 0.15, width * 0.03, height * 0.15);
            
            // Smoke/emissions
            this.ctx.fillStyle = '#808080';
            this.ctx.globalAlpha = 0.6;
            for (let i = 0; i < 5; i++) {
                this.ctx.beginPath();
                this.ctx.arc(
                    width * (0.155 + i * 0.02),
                    height * (0.12 - i * 0.02),
                    10 + i * 3,
                    0, Math.PI * 2
                );
                this.ctx.fill();
            }
            this.ctx.globalAlpha = 1;
            
            if (showLabels) {
                this.ctx.fillStyle = '#E74C3C';
                this.ctx.font = '10px Arial';
                this.ctx.textAlign = 'center';
                this.ctx.fillText('SO₂, NOₓ', width * 0.2, height * 0.08);
            }
            
            // Cloud
            EcologyShapes.drawCloud(this.ctx, width * 0.5, height * 0.15, 80, 30);
            
            // Acid rain
            this.ctx.strokeStyle = '#FF6347';
            this.ctx.lineWidth = 2;
            for (let i = 0; i < 15; i++) {
                const rx = width * (0.4 + Math.random() * 0.3);
                const ry = height * (0.25 + Math.random() * 0.15);
                this.ctx.beginPath();
                this.ctx.moveTo(rx, ry);
                this.ctx.lineTo(rx, ry + 15);
                this.ctx.stroke();
            }
            
            if (showLabels) {
                this.ctx.fillStyle = '#FF6347';
                this.ctx.font = 'bold 11px Arial';
                this.ctx.fillText('Acid Rain (pH < 5.6)', width * 0.55, height * 0.23);
            }
            
            // Ground
            this.ctx.fillStyle = '#8FBC8F';
            this.ctx.fillRect(0, height * 0.45, width, height * 0.55);
            
            // Damaged forest
            for (let i = 0; i < 6; i++) {
                const treeX = width * (0.15 + i * 0.12);
                // Brown/dead trees
                this.ctx.fillStyle = '#8B4513';
                this.ctx.fillRect(treeX - 5, height * 0.35, 10, 40);
                this.ctx.fillStyle = '#A0522D';
                this.ctx.beginPath();
                this.ctx.arc(treeX, height * 0.33, 15, 0, Math.PI * 2);
                this.ctx.fill();
            }
            
            // Lake acidification
            this.ctx.fillStyle = '#87CEEB';
            this.ctx.fillRect(width * 0.65, height * 0.55, width * 0.3, height * 0.3);
            
            if (showLabels) {
                this.ctx.fillStyle = '#2C3E50';
                this.ctx.font = 'bold 10px Arial';
                this.ctx.textAlign = 'center';
                this.ctx.fillText('Forest Damage', width * 0.35, height * 0.5);
                this.ctx.fillText('Lake Acidification', width * 0.8, height * 0.53);
                
                // Effects list
                this.ctx.textAlign = 'left';
                this.ctx.font = '10px Arial';
                const effects = [
                    'Effects:',
                    '• Damages plant leaves',
                    '• Leaches soil nutrients',
                    '• Acidifies water bodies',
                    '• Harms aquatic life',
                    '• Corrodes buildings'
                ];
                effects.forEach((effect, i) => {
                    this.ctx.fillText(effect, width * 0.02, height * 0.88 + i * 12);
                });
            }
            
        } else if (type === 'soil') {
            // Soil pollution/contamination
            
            // Background
            this.ctx.fillStyle = '#87CEEB';
            this.ctx.fillRect(0, 0, width, height * 0.2);
            
            // Contamination source
            this.ctx.fillStyle = '#A9A9A9';
            this.ctx.fillRect(width * 0.35, height * 0.15, width * 0.3, height * 0.1);
            
            if (showLabels) {
                this.ctx.fillStyle = '#2C3E50';
                this.ctx.font = 'bold 10px Arial';
                this.ctx.textAlign = 'center';
                this.ctx.fillText('Industrial Waste/Landfill', width * 0.5, height * 0.13);
            }
            
            // Soil layers
            this.ctx.fillStyle = '#8B7355';
            this.ctx.fillRect(0, height * 0.25, width, height * 0.75);
            
            // Contamination plume
            this.ctx.fillStyle = 'rgba(139, 0, 0, 0.5)';
            this.ctx.beginPath();
            this.ctx.moveTo(width * 0.4, height * 0.25);
            this.ctx.quadraticCurveTo(width * 0.35, height * 0.5, width * 0.25, height * 0.7);
            this.ctx.lineTo(width * 0.75, height * 0.7);
            this.ctx.quadraticCurveTo(width * 0.65, height * 0.5, width * 0.6, height * 0.25);
            this.ctx.closePath();
            this.ctx.fill();
            
            if (showLabels) {
                this.ctx.fillStyle = '#8B0000';
                this.ctx.font = 'bold 11px Arial';
                this.ctx.textAlign = 'center';
                this.ctx.fillText('Contamination Plume', width * 0.5, height * 0.45);
            }
            
            // Groundwater
            this.ctx.fillStyle = 'rgba(70, 130, 180, 0.6)';
            this.ctx.fillRect(0, height * 0.75, width, height * 0.25);
            
            if (showLabels) {
                this.ctx.fillStyle = '#4682B4';
                this.ctx.font = 'bold 10px Arial';
                this.ctx.fillText('Groundwater Contamination', width * 0.5, height * 0.8);
                
                // Contaminants list
                this.ctx.fillStyle = '#2C3E50';
                this.ctx.textAlign = 'left';
                this.ctx.font = '10px Arial';
                const contaminants = [
                    'Common Contaminants:',
                    '• Heavy metals (Pb, Hg, Cd)',
                    '• Pesticides',
                    '• Petroleum products',
                    '• Industrial chemicals',
                    '• Radioactive materials'
                ];
                contaminants.forEach((item, i) => {
                    this.ctx.fillText(item, width * 0.02, height * 0.3 + i * 12);
                });
            }
        }
        
        this.ctx.restore();
    }
    
    // ========== CLIMATE CHANGE DIAGRAMS ==========
    
    renderGreenhouseEffectDiagram(x, y, width, height, options) {
        const { showLabels, showNatural, showEnhanced } = options;
        
        this.ctx.save();
        this.ctx.translate(x - width / 2, y - height / 2);
        
        // Split diagram if showing both
        const diagrams = [];
        if (showNatural) diagrams.push({ name: 'Natural', x: showEnhanced ? 0.25 : 0.5, enhanced: false });
        if (showEnhanced) diagrams.push({ name: 'Enhanced', x: showNatural ? 0.75 : 0.5, enhanced: true });
        
        diagrams.forEach(diagram => {
            const centerX = width * diagram.x;
            const diagramWidth = width / diagrams.length * 0.85;
            
            // Space (black)
            this.ctx.fillStyle = '#000033';
            this.ctx.fillRect(centerX - diagramWidth / 2, 0, diagramWidth, height * 0.25);
            
            // Atmosphere
            const atmGradient = this.ctx.createLinearGradient(0, height * 0.25, 0, height * 0.45);
            atmGradient.addColorStop(0, '#87CEEB');
            atmGradient.addColorStop(1, '#B0E0E6');
            this.ctx.fillStyle = atmGradient;
            this.ctx.fillRect(centerX - diagramWidth / 2, height * 0.25, diagramWidth, height * 0.2);
            
            // Earth surface
            this.ctx.fillStyle = '#8FBC8F';
            this.ctx.fillRect(centerX - diagramWidth / 2, height * 0.45, diagramWidth, height * 0.55);
            
            // Ocean
            this.ctx.fillStyle = '#4682B4';
            this.ctx.fillRect(centerX + diagramWidth * 0.1, height * 0.5, diagramWidth * 0.3, height * 0.4);
            
            // Sun
            EcologyShapes.drawSun(this.ctx, centerX - diagramWidth * 0.3, height * 0.08, 25);
            
            // Incoming solar radiation
            this.ctx.strokeStyle = '#FFD700';
            this.ctx.lineWidth = 3;
            for (let i = 0; i < 5; i++) {
                this.ctx.beginPath();
                this.ctx.moveTo(centerX - diagramWidth * 0.2 + i * 15, height * 0.05);
                this.ctx.lineTo(centerX - diagramWidth * 0.15 + i * 15, height * 0.45);
                this.ctx.stroke();
            }
            
            if (showLabels) {
                this.ctx.fillStyle = '#FFD700';
                this.ctx.font = '10px Arial';
                this.ctx.textAlign = 'center';
                this.ctx.fillText('Solar', centerX, height * 0.15);
                this.ctx.fillText('Radiation', centerX, height * 0.15 + 10);
            }
            
            // Reflected radiation
            this.ctx.strokeStyle = '#FFFF00';
            this.ctx.setLineDash([3, 3]);
            for (let i = 0; i < 2; i++) {
                this.ctx.beginPath();
                this.ctx.moveTo(centerX + diagramWidth * 0.15 + i * 20, height * 0.45);
                this.ctx.lineTo(centerX + diagramWidth * 0.2 + i * 20, height * 0.05);
                this.ctx.stroke();
            }
            this.ctx.setLineDash([]);
            
            // Infrared radiation from Earth
            this.ctx.strokeStyle = '#FF4500';
            this.ctx.lineWidth = 2;
            const irCount = diagram.enhanced ? 6 : 4;
            for (let i = 0; i < irCount; i++) {
                this.ctx.beginPath();
                this.ctx.moveTo(centerX - diagramWidth * 0.3 + i * 20, height * 0.45);
                
                if (diagram.enhanced && i < 4) {
                    // Most radiation trapped
                    this.ctx.lineTo(centerX - diagramWidth * 0.3 + i * 20, height * 0.35);
                    // Bounce back down
                    this.ctx.strokeStyle = '#FF6347';
                    this.ctx.stroke();
                    this.ctx.beginPath();
                    this.ctx.moveTo(centerX - diagramWidth * 0.3 + i * 20, height * 0.35);
                    this.ctx.lineTo(centerX - diagramWidth * 0.25 + i * 20, height * 0.5);
                    this.ctx.stroke();
                    this.ctx.strokeStyle = '#FF4500';
                } else {
                    // Some escapes
                    this.ctx.lineTo(centerX - diagramWidth * 0.28 + i * 20, height * 0.1);
                    this.ctx.stroke();
                }
            }
            
            // Greenhouse gas molecules
            if (diagram.enhanced) {
                this.ctx.fillStyle = 'rgba(255, 0, 0, 0.5)';
                for (let i = 0; i < 20; i++) {
                    const gx = centerX - diagramWidth * 0.4 + Math.random() * diagramWidth * 0.8;
                    const gy = height * (0.28 + Math.random() * 0.15);
                    this.ctx.beginPath();
                    this.ctx.arc(gx, gy, 3, 0, Math.PI * 2);
                    this.ctx.fill();
                }
            } else {
                this.ctx.fillStyle = 'rgba(255, 0, 0, 0.3)';
                for (let i = 0; i < 8; i++) {
                    const gx = centerX - diagramWidth * 0.4 + Math.random() * diagramWidth * 0.8;
                    const gy = height * (0.28 + Math.random() * 0.15);
                    this.ctx.beginPath();
                    this.ctx.arc(gx, gy, 3, 0, Math.PI * 2);
                    this.ctx.fill();
                }
            }
            
            // Labels
            if (showLabels) {
                this.ctx.fillStyle = '#2C3E50';
                this.ctx.font = 'bold 13px Arial';
                this.ctx.textAlign = 'center';
                this.ctx.fillText(diagram.name + ' Greenhouse Effect', centerX, height * 0.02);
                
                this.ctx.font = '10px Arial';
                this.ctx.fillStyle = '#FF4500';
                this.ctx.fillText('IR Radiation', centerX - diagramWidth * 0.35, height * 0.4);
                
                if (diagram.enhanced) {
                    this.ctx.fillStyle = '#E74C3C';
                    this.ctx.fillText('Excess CO₂, CH₄', centerX, height * 0.33);
                    this.ctx.fillText('More heat trapped', centerX, height * 0.56);
                } else {
                    this.ctx.fillText('Balanced system', centerX, height * 0.56);
                }
            }
        });
        
        this.ctx.restore();
    }
    
    renderClimateChangeImpactsDiagram(x, y, width, height, options) {
        const { showLabels, showMultiple } = options;
        
        this.ctx.save();
        this.ctx.translate(x - width / 2, y - height / 2);
        
        const impacts = [
            {
                name: 'Sea Level Rise',
                x: 0.2,
                y: 0.2,
                icon: 'water'
            },
            {
                name: 'Glacier Melting',
                x: 0.5,
                y: 0.2,
                icon: 'ice'
            },
            {
                name: 'Extreme Weather',
                x: 0.8,
                y: 0.2,
                icon: 'storm'
            },
            {
                name: 'Species Migration',
                x: 0.2,
                y: 0.6,
                icon: 'migration'
            },
            {
                name: 'Ocean Acidification',
                x: 0.5,
                y: 0.6,
                icon: 'coral'
            },
            {
                name: 'Habitat Loss',
                x: 0.8,
                y: 0.6,
                icon: 'forest'
            }
        ];
        
        impacts.forEach(impact => {
            const centerX = width * impact.x;
            const centerY = height * impact.y;
            const boxSize = width * 0.15;
            
            // Box
            this.ctx.fillStyle = 'rgba(255, 255, 255, 0.9)';
            this.ctx.fillRect(centerX - boxSize / 2, centerY - boxSize / 2, boxSize, boxSize);
            this.ctx.strokeStyle = '#E74C3C';
            this.ctx.lineWidth = 2;
            this.ctx.strokeRect(centerX - boxSize / 2, centerY - boxSize / 2, boxSize, boxSize);
            
            // Icon representation
            if (impact.icon === 'water') {
                // Rising water
                this.ctx.fillStyle = '#4682B4';
                this.ctx.fillRect(centerX - boxSize * 0.3, centerY, boxSize * 0.6, boxSize * 0.3);
                // Arrow up
                EcologyShapes.drawArrow(this.ctx, centerX, centerY + boxSize * 0.1, centerX, centerY - boxSize * 0.2, '#E74C3C', '');
                
            } else if (impact.icon === 'ice') {
                // Iceberg melting
                EcologyShapes.drawIceberg(this.ctx, centerX, centerY, boxSize * 0.4, boxSize * 0.3);
                
            } else if (impact.icon === 'storm') {
                // Storm cloud
                EcologyShapes.drawCloud(this.ctx, centerX, centerY - 10, boxSize * 0.4, 20);
                // Lightning
                this.ctx.strokeStyle = '#FFD700';
                this.ctx.lineWidth = 3;
                this.ctx.beginPath();
                this.ctx.moveTo(centerX, centerY);
                this.ctx.lineTo(centerX - 8, centerY + 15);
                this.ctx.lineTo(centerX + 5, centerY + 15);
                this.ctx.lineTo(centerX, centerY + 30);
                this.ctx.stroke();
                
            } else if (impact.icon === 'migration') {
                // Animal moving
                EcologyShapes.drawAnimal(this.ctx, centerX - 15, centerY, 20, 'bird');
                // Arrow showing movement
                this.ctx.strokeStyle = '#2ECC71';
                this.ctx.lineWidth = 2;
                this.ctx.beginPath();
                this.ctx.moveTo(centerX - 25, centerY + 10);
                this.ctx.lineTo(centerX + 20, centerY - 15);
                this.ctx.stroke();
                
            } else if (impact.icon === 'coral') {
                // Coral bleaching
                // Healthy coral
                this.ctx.fillStyle = '#FF6B9D';
                this.ctx.beginPath();
                this.ctx.arc(centerX - 15, centerY, 8, 0, Math.PI * 2);
                this.ctx.fill();
                // Arrow
                this.ctx.strokeStyle = '#E74C3C';
                this.ctx.lineWidth = 2;
                this.ctx.beginPath();
                this.ctx.moveTo(centerX - 5, centerY);
                this.ctx.lineTo(centerX + 5, centerY);
                this.ctx.stroke();
                // Bleached coral
                this.ctx.fillStyle = '#E0E0E0';
                this.ctx.beginPath();
                this.ctx.arc(centerX + 15, centerY, 8, 0, Math.PI * 2);
                this.ctx.fill();
                
            } else if (impact.icon === 'forest') {
                // Trees dying
                // Dead tree
                this.ctx.fillStyle = '#8B4513';
                this.ctx.fillRect(centerX - 20, centerY - 10, 5, 25);
                this.ctx.fillStyle = '#A0522D';
                this.ctx.beginPath();
                this.ctx.arc(centerX - 17, centerY - 12, 8, 0, Math.PI * 2);
                this.ctx.fill();
                // Arrow
                this.ctx.strokeStyle = '#E74C3C';
                this.ctx.lineWidth = 2;
                this.ctx.beginPath();
                this.ctx.moveTo(centerX - 5, centerY);
                this.ctx.lineTo(centerX + 5, centerY);
                this.ctx.stroke();
                // Fire
                this.ctx.fillStyle = '#FF4500';
                this.ctx.beginPath();
                this.ctx.moveTo(centerX + 15, centerY + 15);
                this.ctx.lineTo(centerX + 10, centerY - 5);
                this.ctx.lineTo(centerX + 20, centerY - 5);
                this.ctx.closePath();
                this.ctx.fill();
            }
            
            // Label
            if (showLabels) {
                this.ctx.fillStyle = '#2C3E50';
                this.ctx.font = 'bold 10px Arial';
                this.ctx.textAlign = 'center';
                const lines = impact.name.split(' ');
                lines.forEach((line, i) => {
                    this.ctx.fillText(line, centerX, centerY + boxSize / 2 + 15 + i * 11);
                });
            }
        });
        
        // Central "Climate Change" text
        if (showLabels) {
            this.ctx.fillStyle = 'rgba(231, 76, 60, 0.2)';
            this.ctx.beginPath();
            this.ctx.arc(width * 0.5, height * 0.4, 60, 0, Math.PI * 2);
            this.ctx.fill();
            
            this.ctx.fillStyle = '#E74C3C';
            this.ctx.font = 'bold 16px Arial';
            this.ctx.textAlign = 'center';
            this.ctx.fillText('Climate', width * 0.5, height * 0.38);
            this.ctx.fillText('Change', width * 0.5, height * 0.38 + 16);
            
            // Arrows connecting to impacts
            impacts.forEach(impact => {
                const startX = width * 0.5;
                const startY = height * 0.4;
                const endX = width * impact.x;
                const endY = height * impact.y;
                
                this.ctx.strokeStyle = '#E74C3C';
                this.ctx.lineWidth = 2;
                this.ctx.setLineDash([5, 5]);
                this.ctx.beginPath();
                this.ctx.moveTo(startX, startY);
                this.ctx.lineTo(endX, endY);
                this.ctx.stroke();
                this.ctx.setLineDash([]);
            });
        }
        
        this.ctx.restore();
    }
     // ========== ANIMATION & UTILITY METHODS ==========
    
    animate() {
        this.currentFrame++;
        requestAnimationFrame(() => this.animate());
    }
    
    clear() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }
    
    saveAsPNG(filename = 'ecology-diagram.png') {
        const link = document.createElement('a');
        link.download = filename;
        link.href = this.canvas.toDataURL();
        link.click();
    }
}

// ============================================================================
// EXPORT
// ============================================================================

export { EcologyDiagramsRegistry, EcologyShapes, EcologyDiagramRenderer };
