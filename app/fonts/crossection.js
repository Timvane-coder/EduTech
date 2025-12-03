import { createCanvas } from '@napi-rs/canvas';
import ExcelJS from 'exceljs';
import fs from 'fs';
import os from 'os';
import path from 'path';
import readline from 'readline';
import * as math from 'mathjs';
import GIFEncoder from 'gifencoder';
import { PassThrough } from 'stream';




class CrossSectionDiagramsRegistry {
    static diagrams = {
        // ===== BIOLOGY - PLANT STRUCTURES =====
        'dicotLeafCrossSection': {
            name: 'Dicot Leaf Cross-Section',
            category: 'Biology - Plant Structures',
            description: 'Cross-section showing palisade and spongy mesophyll layers',
            dataRequired: [],
            usage: 'Best for plant anatomy and photosynthesis education',
            examples: ['Botany studies', 'Plant physiology', 'Photosynthesis'],
            defaultOptions: {
                title: 'Dicot Leaf Cross-Section',
                showLabels: true,
                showCellDetail: true,
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'monocotLeafCrossSection': {
            name: 'Monocot Leaf Cross-Section',
            category: 'Biology - Plant Structures',
            description: 'Cross-section showing parallel veins structure',
            dataRequired: [],
            usage: 'Best for comparing monocot vs dicot anatomy',
            examples: ['Grass anatomy', 'Monocot studies', 'Comparative botany'],
            defaultOptions: {
                title: 'Monocot Leaf Cross-Section',
                showLabels: true,
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'rootTipCrossSection': {
            name: 'Root Tip Cross-Section',
            category: 'Biology - Plant Structures',
            description: 'Shows meristematic zone and root cap',
            dataRequired: [],
            usage: 'Best for plant growth and development studies',
            examples: ['Root anatomy', 'Meristem studies', 'Plant growth'],
            defaultOptions: {
                title: 'Root Tip Cross-Section',
                showLabels: true,
                showZones: true,
                width: 600,
                height: 800,
                backgroundColor: '#ffffff'
            }
        },

        'dicotStemCrossSection': {
            name: 'Dicot Stem Cross-Section',
            category: 'Biology - Plant Structures',
            description: 'Vascular bundles arranged in a ring',
            dataRequired: [],
            usage: 'Best for stem anatomy education',
            examples: ['Vascular tissue', 'Plant transport', 'Stem structure'],
            defaultOptions: {
                title: 'Dicot Stem Cross-Section',
                showLabels: true,
                width: 700,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },

        'monocotStemCrossSection': {
            name: 'Monocot Stem Cross-Section',
            category: 'Biology - Plant Structures',
            description: 'Scattered vascular bundles pattern',
            dataRequired: [],
            usage: 'Best for comparing stem structures',
            examples: ['Corn stem', 'Grass anatomy', 'Vascular bundles'],
            defaultOptions: {
                title: 'Monocot Stem Cross-Section',
                showLabels: true,
                width: 700,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },

        'flowerOvaryCrossSection': {
            name: 'Flower Ovary Cross-Section',
            category: 'Biology - Plant Structures',
            description: 'Shows ovules and carpel structure',
            dataRequired: [],
            usage: 'Best for plant reproduction education',
            examples: ['Flower anatomy', 'Reproduction', 'Fruit development'],
            defaultOptions: {
                title: 'Flower Ovary Cross-Section',
                showLabels: true,
                width: 600,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'seedCrossSection': {
            name: 'Seed Cross-Section',
            category: 'Biology - Plant Structures',
            description: 'Shows embryo, endosperm, and seed coat',
            dataRequired: ['seedType'],
            usage: 'Best for seed anatomy and germination studies',
            examples: ['Bean seed', 'Maize seed', 'Seed germination'],
            seedTypeOptions: ['bean', 'maize', 'peanut'],
            defaultOptions: {
                title: 'Seed Cross-Section',
                seedType: 'bean',
                showLabels: true,
                width: 700,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'fruitCrossSection': {
            name: 'Fruit Cross-Section',
            category: 'Biology - Plant Structures',
            description: 'Shows pericarp layers and seed arrangement',
            dataRequired: ['fruitType'],
            usage: 'Best for fruit anatomy education',
            examples: ['Apple anatomy', 'Berry structure', 'Citrus fruit'],
            fruitTypeOptions: ['apple', 'orange', 'tomato', 'berry'],
            defaultOptions: {
                title: 'Fruit Cross-Section',
                fruitType: 'apple',
                showLabels: true,
                width: 700,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },

        // ===== BIOLOGY - ANIMAL ANATOMY =====
        'brainCrossSection': {
            name: 'Brain Cross-Section',
            category: 'Biology - Animal Anatomy',
            description: 'Shows cerebrum, cerebellum, and medulla',
            dataRequired: [],
            usage: 'Best for neuroanatomy education',
            examples: ['Brain structure', 'Neuroscience', 'CNS anatomy'],
            defaultOptions: {
                title: 'Brain Cross-Section',
                showLabels: true,
                plane: 'sagittal',
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'smallIntestineCrossSection': {
            name: 'Small Intestine Cross-Section',
            category: 'Biology - Animal Anatomy',
            description: 'Shows villi and muscle layers',
            dataRequired: [],
            usage: 'Best for digestive system anatomy',
            examples: ['Intestinal villi', 'Absorption', 'Digestive anatomy'],
            defaultOptions: {
                title: 'Small Intestine Cross-Section',
                showLabels: true,
                showVilli: true,
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'fishGillsCrossSection': {
            name: 'Fish Gills Cross-Section',
            category: 'Biology - Animal Anatomy',
            description: 'Shows lamellae and filaments for gas exchange',
            dataRequired: [],
            usage: 'Best for aquatic respiration education',
            examples: ['Fish anatomy', 'Respiration', 'Gas exchange'],
            defaultOptions: {
                title: 'Fish Gills Cross-Section',
                showLabels: true,
                width: 700,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'insectThoraxCrossSection': {
            name: 'Insect Thorax Cross-Section',
            category: 'Biology - Animal Anatomy',
            description: 'Shows tracheae, muscles, and exoskeleton',
            dataRequired: [],
            usage: 'Best for insect anatomy and respiration',
            examples: ['Insect anatomy', 'Tracheal system', 'Arthropod structure'],
            defaultOptions: {
                title: 'Insect Thorax Cross-Section',
                showLabels: true,
                width: 700,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'flowerBudCrossSection': {
            name: 'Flower Bud Cross-Section',
            category: 'Biology - Plant Structures',
            description: 'Shows developing petals and reproductive parts',
            dataRequired: [],
            usage: 'Best for flower development studies',
            examples: ['Flower development', 'Bud anatomy', 'Organogenesis'],
            defaultOptions: {
                title: 'Flower Bud Cross-Section',
                showLabels: true,
                width: 600,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        // ===== GEOGRAPHY - EARTH & LANDFORMS =====
        'earthCrossSection': {
            name: 'Earth Cross-Section',
            category: 'Geography - Earth & Landforms',
            description: 'Shows crust, mantle, outer core, and inner core',
            dataRequired: [],
            usage: 'Best for geology and earth science education',
            examples: ['Earth structure', 'Geology', 'Plate tectonics'],
            defaultOptions: {
                title: 'Earth Cross-Section',
                showLabels: true,
                showDepths: true,
                width: 800,
                height: 800,
                backgroundColor: '#ffffff'
            }
        },

        'volcanoCrossSection': {
            name: 'Volcano Cross-Section',
            category: 'Geography - Earth & Landforms',
            description: 'Shows magma chamber, vent, and crater',
            dataRequired: [],
            usage: 'Best for volcanic activity education',
            examples: ['Volcano structure', 'Volcanic eruptions', 'Magma flow'],
            defaultOptions: {
                title: 'Volcano Cross-Section',
                showLabels: true,
                showLavaFlow: true,
                width: 800,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },

        'foldMountainCrossSection': {
            name: 'Fold Mountain Cross-Section',
            category: 'Geography - Earth & Landforms',
            description: 'Shows anticlines and synclines formation',
            dataRequired: [],
            usage: 'Best for mountain formation and tectonics',
            examples: ['Mountain building', 'Rock folding', 'Tectonics'],
            defaultOptions: {
                title: 'Fold Mountain Cross-Section',
                showLabels: true,
                width: 900,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'faultLineCrossSection': {
            name: 'Fault Line Cross-Section',
            category: 'Geography - Earth & Landforms',
            description: 'Shows normal or reverse fault displacement',
            dataRequired: ['faultType'],
            usage: 'Best for earthquake and fault studies',
            examples: ['Fault types', 'Earthquakes', 'Plate boundaries'],
            faultTypeOptions: ['normal', 'reverse', 'strike-slip'],
            defaultOptions: {
                title: 'Fault Line Cross-Section',
                faultType: 'normal',
                showLabels: true,
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'riverValleyCrossSection': {
            name: 'River Valley Cross-Section',
            category: 'Geography - Earth & Landforms',
            description: 'Shows V-shaped or U-shaped valley profile',
            dataRequired: ['valleyType'],
            usage: 'Best for erosion and valley formation studies',
            examples: ['River erosion', 'Valley formation', 'Glacial valleys'],
            valleyTypeOptions: ['v-shaped', 'u-shaped'],
            defaultOptions: {
                title: 'River Valley Cross-Section',
                valleyType: 'v-shaped',
                showLabels: true,
                width: 900,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'riverMeanderCrossSection': {
            name: 'River Meander Cross-Section',
            category: 'Geography - Earth & Landforms',
            description: 'Shows erosion and deposition on meander bends',
            dataRequired: [],
            usage: 'Best for river processes education',
            examples: ['Meander formation', 'River erosion', 'Deposition'],
            defaultOptions: {
                title: 'River Meander Cross-Section',
                showLabels: true,
                width: 900,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'deltaCrossSection': {
            name: 'Delta Cross-Section',
            category: 'Geography - Earth & Landforms',
            description: 'Shows distributaries and sediment layers',
            dataRequired: [],
            usage: 'Best for delta formation and sedimentation studies',
            examples: ['Delta formation', 'Sediment deposition', 'River mouths'],
            defaultOptions: {
                title: 'Delta Cross-Section',
                showLabels: true,
                width: 900,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'coastalCliffCrossSection': {
            name: 'Coastal Cliff Cross-Section',
            category: 'Geography - Earth & Landforms',
            description: 'Shows wave-cut platform and notch',
            dataRequired: [],
            usage: 'Best for coastal erosion studies',
            examples: ['Coastal erosion', 'Wave action', 'Cliff retreat'],
            defaultOptions: {
                title: 'Coastal Cliff Cross-Section',
                showLabels: true,
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'coralReefCrossSection': {
            name: 'Coral Reef Cross-Section',
            category: 'Geography - Earth & Landforms',
            description: 'Shows fringing, barrier, or atoll reef structure',
            dataRequired: ['reefType'],
            usage: 'Best for marine ecosystem education',
            examples: ['Coral reefs', 'Marine ecosystems', 'Reef types'],
            reefTypeOptions: ['fringing', 'barrier', 'atoll'],
            defaultOptions: {
                title: 'Coral Reef Cross-Section',
                reefType: 'fringing',
                showLabels: true,
                width: 900,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'sandDuneCrossSection': {
            name: 'Sand Dune Cross-Section',
            category: 'Geography - Earth & Landforms',
            description: 'Shows windward and leeward slopes',
            dataRequired: [],
            usage: 'Best for wind erosion and deposition studies',
            examples: ['Dune formation', 'Wind erosion', 'Desert landscapes'],
            defaultOptions: {
                title: 'Sand Dune Cross-Section',
                showLabels: true,
                showWindDirection: true,
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'glacierCrossSection': {
            name: 'Glacier Cross-Section',
            category: 'Geography - Earth & Landforms',
            description: 'Shows ice layers, moraines, and bedrock',
            dataRequired: [],
            usage: 'Best for glacial processes education',
            examples: ['Glacier structure', 'Ice movement', 'Glacial deposits'],
            defaultOptions: {
                title: 'Glacier Cross-Section',
                showLabels: true,
                width: 900,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'karstCaveCrossSection': {
            name: 'Karst Cave Cross-Section',
            category: 'Geography - Earth & Landforms',
            description: 'Shows stalactites, stalagmites, and limestone dissolution',
            dataRequired: [],
            usage: 'Best for karst topography and cave formation',
            examples: ['Cave formation', 'Limestone dissolution', 'Karst features'],
            defaultOptions: {
                title: 'Karst Cave Cross-Section',
                showLabels: true,
                width: 800,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },

        'soilProfileCrossSection': {
            name: 'Soil Profile Cross-Section',
            category: 'Geography - Earth & Landforms',
            description: 'Shows O, A, B, C soil horizons',
            dataRequired: [],
            usage: 'Best for soil science and pedology',
            examples: ['Soil horizons', 'Soil formation', 'Pedology'],
            defaultOptions: {
                title: 'Soil Profile Cross-Section',
                showLabels: true,
                showHorizons: true,
                width: 600,
                height: 800,
                backgroundColor: '#ffffff'
            }
        },

        'urbanLandUseCrossSection': {
            name: 'Urban Land Use Cross-Section',
            category: 'Geography - Earth & Landforms',
            description: 'Shows CBD to suburbs transition',
            dataRequired: [],
            usage: 'Best for urban geography and planning',
            examples: ['Urban structure', 'Land use zones', 'City planning'],
            defaultOptions: {
                title: 'Urban Land Use Cross-Section',
                showLabels: true,
                width: 1000,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'tunnelCrossSection': {
            name: 'Transport Tunnel Cross-Section',
            category: 'Geography - Earth & Landforms',
            description: 'Shows subway or road tunnel structure',
            dataRequired: [],
            usage: 'Best for infrastructure and engineering geography',
            examples: ['Underground transport', 'Tunnel construction', 'Infrastructure'],
            defaultOptions: {
                title: 'Transport Tunnel Cross-Section',
                showLabels: true,
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        // ===== AGRICULTURE =====
        'seedGerminationCrossSection': {
            name: 'Seed Germination Cross-Section',
            category: 'Agriculture',
            description: 'Shows germination process stages',
            dataRequired: [],
            usage: 'Best for agricultural education and seed science',
            examples: ['Germination', 'Seed growth', 'Plant propagation'],
            defaultOptions: {
                title: 'Seed Germination Cross-Section',
                showLabels: true,
                showStages: true,
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'rootSystemSoilCrossSection': {
            name: 'Root System in Soil Cross-Section',
            category: 'Agriculture',
            description: 'Shows root growth in different soil types',
            dataRequired: ['soilType'],
            usage: 'Best for soil-plant interactions',
            examples: ['Root development', 'Soil types', 'Water uptake'],
            soilTypeOptions: ['sandy', 'clay', 'loam'],
            defaultOptions: {
                title: 'Root System in Soil',
                soilType: 'loam',
                showLabels: true,
                width: 700,
                height: 800,
                backgroundColor: '#ffffff'
            }
        },

        'cultivatedSoilProfileCrossSection': {
            name: 'Cultivated Soil Profile Cross-Section',
            category: 'Agriculture',
            description: 'Shows soil horizons under cultivation',
            dataRequired: [],
            usage: 'Best for agricultural soil management',
            examples: ['Soil cultivation', 'Tillage effects', 'Soil health'],
            defaultOptions: {
                title: 'Cultivated Soil Profile',
                showLabels: true,
                width: 600,
                height: 800,
                backgroundColor: '#ffffff'
            }
        },

        'terraceFarmCrossSection': {
            name: 'Terrace Farm Cross-Section',
            category: 'Agriculture',
            description: 'Shows terraced slopes with retaining walls',
            dataRequired: [],
            usage: 'Best for soil conservation education',
            examples: ['Terracing', 'Soil conservation', 'Hillside farming'],
            defaultOptions: {
                title: 'Terrace Farm Cross-Section',
                showLabels: true,
                width: 900,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },

        'drainageChannelCrossSection': {
            name: 'Drainage Channel Cross-Section',
            category: 'Agriculture',
            description: 'Shows slope and water flow management',
            dataRequired: [],
            usage: 'Best for irrigation and drainage planning',
            examples: ['Drainage systems', 'Water management', 'Field drainage'],
            defaultOptions: {
                title: 'Drainage Channel Cross-Section',
                showLabels: true,
                showWaterFlow: true,
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'contourBundCrossSection': {
            name: 'Contour Bund Cross-Section',
            category: 'Agriculture',
            description: 'Shows erosion control structure',
            dataRequired: [],
            usage: 'Best for soil conservation practices',
            examples: ['Contour farming', 'Erosion control', 'Water harvesting'],
            defaultOptions: {
                title: 'Contour Bund Cross-Section',
                showLabels: true,
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'greenhouseCrossSection': {
            name: 'Greenhouse Cross-Section',
            category: 'Agriculture',
            description: 'Shows structure with ventilation and irrigation',
            dataRequired: [],
            usage: 'Best for controlled environment agriculture',
            examples: ['Greenhouse farming', 'Protected cultivation', 'Climate control'],
            defaultOptions: {
                title: 'Greenhouse Cross-Section',
                showLabels: true,
                width: 900,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },

        'fishPondCrossSection': {
            name: 'Fish Pond Cross-Section',
            category: 'Agriculture',
            description: 'Shows inlet, outlet, and depth layers',
            dataRequired: [],
            usage: 'Best for aquaculture education',
            examples: ['Fish farming', 'Aquaculture', 'Pond management'],
            defaultOptions: {
                title: 'Fish Pond Cross-Section',
                showLabels: true,
                width: 900,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'compostPitCrossSection': {
            name: 'Compost Pit Cross-Section',
            category: 'Agriculture',
            description: 'Shows organic layers and air spaces',
            dataRequired: [],
            usage: 'Best for organic farming and composting',
            examples: ['Composting', 'Organic matter', 'Soil amendment'],
            defaultOptions: {
                title: 'Compost Pit Cross-Section',
                showLabels: true,
                width: 700,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },

        'irrigationCanalCrossSection': {
            name: 'Irrigation Canal Cross-Section',
            category: 'Agriculture',
            description: 'Shows canal lining and water flow',
            dataRequired: [],
            usage: 'Best for irrigation system design',
            examples: ['Irrigation', 'Water distribution', 'Canal design'],
            defaultOptions: {
                title: 'Irrigation Canal Cross-Section',
                showLabels: true,
                showWaterFlow: true,
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'cropFieldRootZoneCrossSection': {
            name: 'Crop Field Root Zone Cross-Section',
            category: 'Agriculture',
            description: 'Shows root zones and fertilizer placement',
            dataRequired: [],
            usage: 'Best for fertilizer management education',
            examples: ['Root zones', 'Fertilizer application', 'Nutrient uptake'],
            defaultOptions: {
                title: 'Crop Field Root Zone',
                showLabels: true,
                width: 800,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },

        'animalHousingCrossSection': {
            name: 'Animal Housing Cross-Section',
            category: 'Agriculture',
            description: 'Shows ventilation, drainage, and bedding',
            dataRequired: [],
            usage: 'Best for livestock management',
            examples: ['Animal housing', 'Barn design', 'Livestock welfare'],
            defaultOptions: {
                title: 'Animal Housing Cross-Section',
                showLabels: true,
                width: 900,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },

        'silagePitCrossSection': {
            name: 'Silage Pit Cross-Section',
            category: 'Agriculture',
            description: 'Shows storage structure for fodder preservation',
            dataRequired: [],
            usage: 'Best for fodder storage and livestock feeding',
            examples: ['Silage storage', 'Fodder preservation', 'Feed management'],
            defaultOptions: {
                title: 'Silage Pit Cross-Section',
                showLabels: true,
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'pastureLandCrossSection': {
            name: 'Pasture Land Cross-Section',
            category: 'Agriculture',
            description: 'Shows topsoil and root penetration',
            dataRequired: [],
            usage: 'Best for grassland management',
            examples: ['Pasture management', 'Grazing systems', 'Grass growth'],
            defaultOptions: {
                title: 'Pasture Land Cross-Section',
                showLabels: true,
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'hydroponicBedCrossSection': {
            name: 'Hydroponic Bed Cross-Section',
            category: 'Agriculture',
            description: 'Shows growth media layers and nutrient solution',
            dataRequired: [],
            usage: 'Best for soilless agriculture education',
            examples: ['Hydroponics', 'Soilless culture', 'Controlled agriculture'],
            defaultOptions: {
                title: 'Hydroponic Bed Cross-Section',
                showLabels: true,
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        }
    };

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
                key.toLowerCase().includes(lowerQuery)
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
}

// ============================================================================
// CROSS-SECTION SHAPES LIBRARY
// ============================================================================

class CrossSectionShapes {
    // ===== BIOLOGY - PLANT STRUCTURES =====
    
    static drawDicotLeaf(ctx, x, y, width, height, showCellDetail) {
        ctx.save();
        ctx.translate(x, y);

        // Upper epidermis
        ctx.fillStyle = '#C8E6C9';
        ctx.fillRect(0, 0, width, height * 0.08);
        
        // Cuticle
        ctx.fillStyle = '#A5D6A7';
        ctx.fillRect(0, 0, width, height * 0.03);

        // Palisade mesophyll (columnar cells)
        ctx.fillStyle = '#66BB6A';
        for(let i = 0; i < width / 15; i++) {
            const x = i * 15;
            ctx.fillRect(x, height * 0.08, 12, height * 0.25);
            if(showCellDetail) {
                // Chloroplasts
                ctx.fillStyle = '#2E7D32';
                for(let j = 0; j < 4; j++) {
                    ctx.fillRect(x + 3, height * (0.1 + j * 0.05), 3, 3);
                }
                ctx.fillStyle = '#66BB6A';
            }
        }

        // Spongy mesophyll (irregular cells with air spaces)
        ctx.fillStyle = '#81C784';
        for(let i = 0; i < 30; i++) {
            const cx = Math.random() * width;
            const cy = height * (0.35 + Math.random() * 0.3);
            const radius = 8 + Math.random() * 5;
            ctx.beginPath();
            ctx.arc(cx, cy, radius, 0, Math.PI * 2);
            ctx.fill();
        }

        // Vascular bundle (vein)
        const veinX = width / 2;
        const veinY = height * 0.4;
        
        // Xylem
        ctx.fillStyle = '#8D6E63';
        ctx.beginPath();
        ctx.ellipse(veinX, veinY, 15, 25, 0, 0, Math.PI * 2);
        ctx.fill();
        
        // Phloem
        ctx.fillStyle = '#BCAAA4';
        ctx.beginPath();
        ctx.ellipse(veinX, veinY + 30, 12, 20, 0, 0, Math.PI * 2);
        ctx.fill();

        // Lower epidermis
        ctx.fillStyle = '#C8E6C9';
        ctx.fillRect(0, height * 0.92, width, height * 0.08);

        // Stomata (pores)
        ctx.fillStyle = '#FFFFFF';
        for(let i = 0; i < 5; i++) {
            const sx = (i + 1) * (width / 6);
            ctx.beginPath();
            ctx.ellipse(sx, height * 0.94, 4, 2, 0, 0, Math.PI * 2);
            ctx.fill();
            
            // Guard cells
            ctx.strokeStyle = '#81C784';
            ctx.lineWidth = 2;
            ctx.beginPath();
            ctx.arc(sx - 4, height * 0.94, 3, 0, Math.PI);
            ctx.stroke();
            ctx.beginPath();
            ctx.arc(sx + 4, height * 0.94, 3, 0, Math.PI);
            ctx.stroke();
        }

        ctx.restore();
    }

    static drawMonocotLeaf(ctx, x, y, width, height) {
        ctx.save();
        ctx.translate(x, y);

        // Upper epidermis
        ctx.fillStyle = '#C8E6C9';
        ctx.fillRect(0, 0, width, height * 0.1);

        // Bulliform cells (large cells on upper epidermis)
        ctx.fillStyle = '#E8F5E9';
        for(let i = 0; i < width / 40; i++) {
            ctx.fillRect(i * 40 + 5, height * 0.02, 30, height * 0.08);
        }

        // Mesophyll (not differentiated into palisade and spongy)
        ctx.fillStyle = '#81C784';
        for(let i = 0; i < 40; i++) {
            const cx = Math.random() * width;
            const cy = height * (0.15 + Math.random() * 0.7);
            const radius = 6 + Math.random() * 4;
            ctx.beginPath();
            ctx.arc(cx, cy, radius, 0, Math.PI * 2);
            ctx.fill();
        }

        // Parallel vascular bundles
        const bundleCount = 5;
        for(let i = 0; i < bundleCount; i++) {
            const bx = (i + 1) * (width / (bundleCount + 1));
            const by = height * 0.5;
            
            // Bundle sheath
            ctx.strokeStyle = '#689F38';
            ctx.lineWidth = 3;
            ctx.beginPath();
            ctx.ellipse(bx, by, 18, 30, 0, 0, Math.PI * 2);
            ctx.stroke();
            
            // Xylem
            ctx.fillStyle = '#8D6E63';
            ctx.beginPath();
            ctx.ellipse(bx, by - 8, 8, 12, 0, 0, Math.PI * 2);
            ctx.fill();
            
            // Phloem
            ctx.fillStyle = '#BCAAA4';
            ctx.beginPath();
            ctx.ellipse(bx, by + 8, 6, 10, 0, 0, Math.PI * 2);
            ctx.fill();
        }

        // Lower epidermis
        ctx.fillStyle = '#C8E6C9';
        ctx.fillRect(0, height * 0.9, width, height * 0.1);

        // Stomata on both surfaces
        ctx.fillStyle = '#FFFFFF';
        for(let i = 0; i < 6; i++) {
            const sx = (i + 1) * (width / 7);
            ctx.beginPath();
            ctx.ellipse(sx, height * 0.93, 3, 1.5, 0, 0, Math.PI * 2);
            ctx.fill();
        }

        ctx.restore();
    }

    static drawRootTip(ctx, x, y, width, height, showZones) {
        ctx.save();
        ctx.translate(x, y);

        // Root cap
        ctx.fillStyle = '#8D6E63';
        ctx.beginPath();
        ctx.moveTo(width * 0.3, height * 0.98);
        ctx.quadraticCurveTo(width * 0.5, height, width * 0.7, height * 0.98);
        ctx.lineTo(width * 0.7, height * 0.92);
        ctx.lineTo(width * 0.3, height * 0.92);
        ctx.closePath();
        ctx.fill();

        if(showZones) {
            // Zone of cell division (meristematic zone)
            ctx.fillStyle = '#FF8A65';
            ctx.fillRect(width * 0.25, height * 0.75, width * 0.5, height * 0.17);
            
            // Draw small cells
            ctx.strokeStyle = '#D84315';
            ctx.lineWidth = 1;
            for(let row = 0; row < 8; row++) {
                for(let col = 0; col < 10; col++) {
                    ctx.strokeRect(
                        width * 0.25 + col * (width * 0.05),
                        height * 0.75 + row * (height * 0.02),
                        width * 0.05,
                        height * 0.02
                    );
                }
            }

            // Zone of elongation
            ctx.fillStyle = '#FFB74D';
            ctx.fillRect(width * 0.28, height * 0.5, width * 0.44, height * 0.25);
            
            // Elongated cells
            ctx.strokeStyle = '#F57C00';
            for(let row = 0; row < 10; row++) {
                for(let col = 0; col < 8; col++) {
                    ctx.strokeRect(
                        width * 0.28 + col * (width * 0.055),
                        height * 0.5 + row * (height * 0.025),
                        width * 0.055,
                        height * 0.025
                    );
                }
            }

            // Zone of maturation
            ctx.fillStyle = '#FFE082';
            ctx.fillRect(width * 0.3, height * 0.1, width * 0.4, height * 0.4);
            
            // Root hairs
            ctx.strokeStyle = '#FFA726';
            ctx.lineWidth = 2;
            for(let i = 0; i < 15; i++) {
                const hairY = height * (0.15 + Math.random() * 0.3);
                ctx.beginPath();
                ctx.moveTo(width * 0.3, hairY);
                ctx.lineTo(width * 0.15, hairY - 10);
                ctx.stroke();
                ctx.beginPath();
                ctx.moveTo(width * 0.7, hairY);
                ctx.lineTo(width * 0.85, hairY - 10);
                ctx.stroke();
            }

            // Vascular cylinder
            ctx.fillStyle = '#8D6E63';
            ctx.fillRect(width * 0.42, height * 0.1, width * 0.16, height * 0.65);
        }

        // Outline
        ctx.strokeStyle = '#5D4037';
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(width * 0.3, height * 0.92);
        ctx.lineTo(width * 0.3, height * 0.1);
        ctx.quadraticCurveTo(width * 0.3, height * 0.05, width * 0.35, height * 0.05);  
        ctx.lineTo(width * 0.65, height * 0.05);
        ctx.quadraticCurveTo(width * 0.7, height * 0.05, width * 0.7, height * 0.1);
        ctx.lineTo(width * 0.7, height * 0.92);
        ctx.stroke();

        ctx.restore();
    }

    static drawDicotStem(ctx, x, y, width, height) {
        ctx.save();
        ctx.translate(x, y);

        const centerX = width / 2;
        const centerY = height / 2;
        const radius = Math.min(width, height) * 0.45;

        // Epidermis
        ctx.fillStyle = '#D7CCC8';
        ctx.beginPath();
        ctx.arc(centerX, centerY, radius, 0, Math.PI * 2);
        ctx.fill();

        // Cortex
        ctx.fillStyle = '#E0E0E0';
        ctx.beginPath();
        ctx.arc(centerX, centerY, radius * 0.9, 0, Math.PI * 2);
        ctx.fill();

        // Vascular bundles in a ring
        const bundleCount = 8;
        const bundleRadius = radius * 0.7;
        
        for(let i = 0; i < bundleCount; i++) {
            const angle = (i / bundleCount) * Math.PI * 2;
            const bx = centerX + Math.cos(angle) * bundleRadius;
            const by = centerY + Math.sin(angle) * bundleRadius;
            
            // Vascular bundle
            ctx.fillStyle = '#A1887F';
            ctx.beginPath();
            ctx.ellipse(bx, by, radius * 0.12, radius * 0.15, angle, 0, Math.PI * 2);
            ctx.fill();
            
            // Xylem (inner, larger)
            ctx.fillStyle = '#8D6E63';
            ctx.beginPath();
            ctx.ellipse(
                bx + Math.cos(angle) * radius * 0.08,
                by + Math.sin(angle) * radius * 0.08,
                radius * 0.06,
                radius * 0.08,
                angle,
                0,
                Math.PI * 2
            );
            ctx.fill();
            
            // Phloem (outer, smaller)
            ctx.fillStyle = '#BCAAA4';
            ctx.beginPath();
            ctx.ellipse(
                bx - Math.cos(angle) * radius * 0.04,
                by - Math.sin(angle) * radius * 0.04,
                radius * 0.04,
                radius * 0.05,
                angle,
                0,
                Math.PI * 2
            );
            ctx.fill();
            
            // Cambium (thin layer between xylem and phloem)
            ctx.strokeStyle = '#FF6F00';
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.arc(bx, by, radius * 0.06, 0, Math.PI * 2);
            ctx.stroke();
        }

        // Pith (center)
        ctx.fillStyle = '#F5F5F5';
        ctx.beginPath();
        ctx.arc(centerX, centerY, radius * 0.4, 0, Math.PI * 2);
        ctx.fill();

        // Pith cells
        ctx.strokeStyle = '#E0E0E0';
        ctx.lineWidth = 1;
        for(let i = 0; i < 20; i++) {
            const angle = Math.random() * Math.PI * 2;
            const dist = Math.random() * radius * 0.35;
            const cx = centerX + Math.cos(angle) * dist;
            const cy = centerY + Math.sin(angle) * dist;
            ctx.beginPath();
            ctx.arc(cx, cy, 8, 0, Math.PI * 2);
            ctx.stroke();
        }

        // Outer outline
        ctx.strokeStyle = '#5D4037';
        ctx.lineWidth = 3;
        ctx.beginPath();
        ctx.arc(centerX, centerY, radius, 0, Math.PI * 2);
        ctx.stroke();

        ctx.restore();
    }

    static drawMonocotStem(ctx, x, y, width, height) {
        ctx.save();
        ctx.translate(x, y);

        const centerX = width / 2;
        const centerY = height / 2;
        const radius = Math.min(width, height) * 0.45;

        // Epidermis
        ctx.fillStyle = '#D7CCC8';
        ctx.beginPath();
        ctx.arc(centerX, centerY, radius, 0, Math.PI * 2);
        ctx.fill();

        // Ground tissue (no distinct cortex or pith)
        ctx.fillStyle = '#E8EAF6';
        ctx.beginPath();
        ctx.arc(centerX, centerY, radius * 0.95, 0, Math.PI * 2);
        ctx.fill();

        // Scattered vascular bundles
        const bundleCount = 20;
        
        for(let i = 0; i < bundleCount; i++) {
            const angle = Math.random() * Math.PI * 2;
            const dist = Math.random() * radius * 0.75;
            const bx = centerX + Math.cos(angle) * dist;
            const by = centerY + Math.sin(angle) * dist;
            const bundleSize = radius * (0.08 + Math.random() * 0.05);
            
            // Bundle sheath
            ctx.strokeStyle = '#9E9D24';
            ctx.lineWidth = 2;
            ctx.beginPath();
            ctx.arc(bx, by, bundleSize, 0, Math.PI * 2);
            ctx.stroke();
            
            // Xylem vessels (two large vessels forming a V or Y shape)
            ctx.fillStyle = '#6D4C41';
            ctx.beginPath();
            ctx.arc(bx - bundleSize * 0.3, by + bundleSize * 0.2, bundleSize * 0.25, 0, Math.PI * 2);
            ctx.fill();
            ctx.beginPath();
            ctx.arc(bx + bundleSize * 0.3, by + bundleSize * 0.2, bundleSize * 0.25, 0, Math.PI * 2);
            ctx.fill();
            
            // Phloem (small groups)
            ctx.fillStyle = '#A1887F';
            ctx.beginPath();
            ctx.arc(bx, by - bundleSize * 0.3, bundleSize * 0.2, 0, Math.PI * 2);
            ctx.fill();
        }

        // Outer outline
        ctx.strokeStyle = '#5D4037';
        ctx.lineWidth = 3;
        ctx.beginPath();
        ctx.arc(centerX, centerY, radius, 0, Math.PI * 2);
        ctx.stroke();

        ctx.restore();
    }

    static drawFlowerOvary(ctx, x, y, width, height) {
        ctx.save();
        ctx.translate(x, y);

        const centerX = width / 2;
        const centerY = height / 2;

        // Ovary wall
        ctx.fillStyle = '#E1BEE7';
        ctx.strokeStyle = '#8E24AA';
        ctx.lineWidth = 3;
        ctx.beginPath();
        ctx.ellipse(centerX, centerY, width * 0.4, height * 0.45, 0, 0, Math.PI * 2);
        ctx.fill();
        ctx.stroke();

        // Locules (chambers)
        const loculeCount = 3;
        for(let i = 0; i < loculeCount; i++) {
            const angle = (i / loculeCount) * Math.PI * 2 - Math.PI / 2;
            const lx = centerX + Math.cos(angle) * width * 0.15;
            const ly = centerY + Math.sin(angle) * height * 0.15;
            
            // Locule cavity
            ctx.fillStyle = '#F3E5F5';
            ctx.beginPath();
            ctx.ellipse(lx, ly, width * 0.12, height * 0.15, 0, 0, Math.PI * 2);
            ctx.fill();
            ctx.strokeStyle = '#9C27B0';
            ctx.lineWidth = 2;
            ctx.stroke();
            
            // Ovules in each locule
            const ovuleCount = 2;
            for(let j = 0; j < ovuleCount; j++) {
                const oy = ly - height * 0.08 + j * height * 0.08;
                
                // Ovule
                ctx.fillStyle = '#FFE082';
                ctx.beginPath();
                ctx.ellipse(lx, oy, width * 0.04, height * 0.05, 0, 0, Math.PI * 2);
                ctx.fill();
                
                // Funiculus (stalk)
                ctx.strokeStyle = '#FFA726';
                ctx.lineWidth = 1;
                ctx.beginPath();
                ctx.moveTo(lx, oy + height * 0.05);
                ctx.lineTo(lx, ly + height * 0.12);
                ctx.stroke();
            }
        }

        // Style (central column)
        ctx.fillStyle = '#CE93D8';
        ctx.fillRect(centerX - width * 0.02, 0, width * 0.04, height * 0.3);
        
        // Stigma
        ctx.fillStyle = '#AB47BC';
        ctx.beginPath();
        ctx.ellipse(centerX, height * 0.05, width * 0.06, height * 0.05, 0, 0, Math.PI * 2);
        ctx.fill();

        ctx.restore();
    }

    static drawSeed(ctx, x, y, width, height, seedType) {
        ctx.save();
        ctx.translate(x, y);

        if(seedType === 'bean') {
            // Bean seed (dicot)
            
            // Seed coat (testa)
            ctx.fillStyle = '#8D6E63';
            ctx.beginPath();
            ctx.ellipse(width / 2, height / 2, width * 0.45, height * 0.4, 0, 0, Math.PI * 2);
            ctx.fill();
            
            // Hilum (scar)
            ctx.fillStyle = '#5D4037';
            ctx.beginPath();
            ctx.ellipse(width * 0.2, height / 2, width * 0.05, height * 0.08, -Math.PI / 6, 0, Math.PI * 2);
            ctx.fill();
            
            // Two cotyledons
            ctx.fillStyle = '#FFF9C4';
            ctx.beginPath();
            ctx.ellipse(width * 0.35, height / 2, width * 0.25, height * 0.32, 0, 0, Math.PI * 2);
            ctx.fill();
            ctx.beginPath();
            ctx.ellipse(width * 0.65, height / 2, width * 0.25, height * 0.32, 0, 0, Math.PI * 2);
            ctx.fill();
            
            // Embryo axis
            ctx.fillStyle = '#AED581';
            ctx.fillRect(width * 0.48, height * 0.3, width * 0.04, height * 0.4);
            
            // Plumule (shoot)
            ctx.beginPath();
            ctx.moveTo(width * 0.5, height * 0.3);
            ctx.lineTo(width * 0.45, height * 0.25);
            ctx.lineTo(width * 0.5, height * 0.28);
            ctx.lineTo(width * 0.55, height * 0.25);
            ctx.closePath();
            ctx.fill();
            
            // Radicle (root)
            ctx.beginPath();
            ctx.moveTo(width * 0.5, height * 0.7);
            ctx.lineTo(width * 0.48, height * 0.75);
            ctx.lineTo(width * 0.5, height * 0.73);
            ctx.lineTo(width * 0.52, height * 0.75);
            ctx.closePath();
            ctx.fill();
            
        } else if(seedType === 'maize') {
            // Maize seed (monocot)
            
            // Seed coat + pericarp fused
            ctx.fillStyle = '#FFD54F';
            ctx.beginPath();
            ctx.ellipse(width / 2, height / 2, width * 0.4, height * 0.45, 0, 0, Math.PI * 2);
            ctx.fill();
            
            // Endosperm (large, starchy)
            ctx.fillStyle = '#FFF59D';
            ctx.beginPath();
            ctx.ellipse(width * 0.55, height / 2, width * 0.32, height * 0.38, 0, 0, Math.PI * 2);
            ctx.fill();
            
            // Single cotyledon (scutellum)
            ctx.fillStyle = '#FFEB3B';
            ctx.beginPath();
            ctx.ellipse(width * 0.32, height / 2, width * 0.15, height * 0.25, 0, 0, Math.PI * 2);
            ctx.fill();
            
            // Embryo
            ctx.fillStyle = '#C5E1A5';
            ctx.fillRect(width * 0.25, height * 0.4, width * 0.08, height * 0.2);
            
            // Coleoptile (shoot sheath)
            ctx.strokeStyle = '#9CCC65';
            ctx.lineWidth = 3;
            ctx.beginPath();
            ctx.moveTo(width * 0.29, height * 0.4);
            ctx.lineTo(width * 0.29, height * 0.3);
            ctx.stroke();
            
            // Radicle
            ctx.beginPath();
            ctx.moveTo(width * 0.29, height * 0.6);
            ctx.lineTo(width * 0.29, height * 0.7);
            ctx.stroke();
            
        } else if(seedType === 'peanut') {
            // Peanut seed
            
            // Seed coat (papery)
            ctx.fillStyle = '#D7CCC8';
            ctx.beginPath();
            ctx.ellipse(width / 2, height / 2, width * 0.42, height * 0.35, 0, 0, Math.PI * 2);
            ctx.fill();
            
            // Two large cotyledons
            ctx.fillStyle = '#FFECB3';
            ctx.beginPath();
            ctx.ellipse(width * 0.38, height / 2, width * 0.28, height * 0.28, 0, 0, Math.PI * 2);
            ctx.fill();
            ctx.beginPath();
            ctx.ellipse(width * 0.62, height / 2, width * 0.28, height * 0.28, 0, 0, Math.PI * 2);
            ctx.fill();
            
            // Embryo
            ctx.fillStyle = '#DCEDC8';
            ctx.fillRect(width * 0.48, height * 0.35, width * 0.04, height * 0.3);
        }

        // Outline
        ctx.strokeStyle = '#3E2723';
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.ellipse(width / 2, height / 2, width * 0.45, height * 0.4, 0, 0, Math.PI * 2);
        ctx.stroke();

        ctx.restore();
    }

    static drawFruit(ctx, x, y, width, height, fruitType) {
        ctx.save();
        ctx.translate(x, y);

        const centerX = width / 2;
        const centerY = height / 2;

        if(fruitType === 'apple') {
            // Apple cross-section
            
            // Exocarp (skin)
            ctx.fillStyle = '#EF5350';
            ctx.beginPath();
            ctx.arc(centerX, centerY, width * 0.45, 0, Math.PI * 2);
            ctx.fill();
            
            // Mesocarp (flesh)
            ctx.fillStyle = '#FFF9C4';
            ctx.beginPath();
            ctx.arc(centerX, centerY, width * 0.4, 0, Math.PI * 2);
            ctx.fill();
            
            // Endocarp (core)
            ctx.fillStyle = '#F0F4C3';
            ctx.beginPath();
            ctx.moveTo(centerX, centerY - height * 0.15);
            for(let i = 0; i < 5; i++) {
                const angle = (i / 5) * Math.PI * 2 - Math.PI / 2;
                const r = i % 2 === 0 ? width * 0.15 : width * 0.08;
                ctx.lineTo(
                    centerX + Math.cos(angle) * r,
                    centerY + Math.sin(angle) * r
                );
            }
            ctx.closePath();
            ctx.fill();
            
            // Seeds in locules
            for(let i = 0; i < 5; i++) {
                const angle = (i / 5) * Math.PI * 2 - Math.PI / 2;
                const sx = centerX + Math.cos(angle) * width * 0.12;
                const sy = centerY + Math.sin(angle) * width * 0.12;
                ctx.fillStyle = '#6D4C41';
                ctx.beginPath();
                ctx.ellipse(sx, sy, width * 0.02, width * 0.03, angle, 0, Math.PI * 2);
                ctx.fill();
            }
            
            // Vascular bundles
            for(let i = 0; i < 10; i++) {
                const angle = (i / 10) * Math.PI * 2;
                ctx.strokeStyle = '#CDDC39';
                ctx.lineWidth = 1;
                ctx.beginPath();
                ctx.moveTo(centerX, centerY);
                ctx.lineTo(
                    centerX + Math.cos(angle) * width * 0.35,
                    centerY + Math.sin(angle) * width * 0.35
                );
                ctx.stroke();
            }
            
            // Stem
            ctx.fillStyle = '#8D6E63';
            ctx.fillRect(centerX - width * 0.02, 0, width * 0.04, height * 0.15);
            
        } else if(fruitType === 'orange') {
            // Orange cross-section
            
            // Exocarp (peel)
            ctx.fillStyle = '#FF9800';
            ctx.beginPath();
            ctx.arc(centerX, centerY, width * 0.45, 0, Math.PI * 2);
            ctx.fill();
            
            // Mesocarp (pith)
            ctx.fillStyle = '#FFF3E0';
            ctx.beginPath();
            ctx.arc(centerX, centerY, width * 0.38, 0, Math.PI * 2);
            ctx.fill();
            
            // Segments (carpels)
            const segmentCount = 10;
            for(let i = 0; i < segmentCount; i++) {
                const angle1 = (i / segmentCount) * Math.PI * 2;
                const angle2 = ((i + 1) / segmentCount) * Math.PI * 2;
                
                ctx.fillStyle = '#FFB74D';
                ctx.beginPath();
                ctx.moveTo(centerX, centerY);
                ctx.arc(centerX, centerY, width * 0.35, angle1, angle2);
                ctx.closePath();
                ctx.fill();
                
                // Segment membrane
                ctx.strokeStyle = '#FFF3E0';
                ctx.lineWidth = 2;
                ctx.stroke();
                
                // Juice vesicles
                for(let j = 0; j < 3; j++) {
                    const r = width * (0.15 + j * 0.08);
                    const vx = centerX + Math.cos((angle1 + angle2) / 2) * r;
                    const vy = centerY + Math.sin((angle1 + angle2) / 2) * r;
                    ctx.fillStyle = '#FFCC80';
                    ctx.beginPath();
                    ctx.ellipse(vx, vy, width * 0.02, width * 0.03, (angle1 + angle2) / 2, 0, Math.PI * 2);
                    ctx.fill();
                }
            }
            
        } else if(fruitType === 'tomato') {
            // Tomato cross-section
            
            // Exocarp (skin)
            ctx.fillStyle = '#F44336';
            ctx.beginPath();
            ctx.arc(centerX, centerY, width * 0.45, 0, Math.PI * 2);
            ctx.fill();
            
            // Mesocarp (flesh)
            ctx.fillStyle = '#FFCDD2';
            ctx.beginPath();
            ctx.arc(centerX, centerY, width * 0.42, 0, Math.PI * 2);
            ctx.fill();
            
            // Locular cavities (chambers with seeds)
            const locules = 4;
            for(let i = 0; i < locules; i++) {
                const angle = (i / locules) * Math.PI * 2 - Math.PI / 4;
                const lx = centerX + Math.cos(angle) * width * 0.2;
                const ly = centerY + Math.sin(angle) * width * 0.2;
                
                // Cavity
                ctx.fillStyle = '#FFEBEE';
                ctx.beginPath();
                ctx.ellipse(lx, ly, width * 0.12, width * 0.15, angle, 0, Math.PI * 2);
                ctx.fill();
                
                // Seeds in gel
                for(let j = 0; j < 8; j++) {
                    const sa = Math.random() * Math.PI * 2;
                    const sr = Math.random() * width * 0.08;
                    const sx = lx + Math.cos(sa) * sr;
                    const sy = ly + Math.sin(sa) * sr;
                    ctx.fillStyle = '#FFF59D';
                    ctx.beginPath();
                    ctx.ellipse(sx, sy, width * 0.015, width * 0.02, sa, 0, Math.PI * 2);
                    ctx.fill();
                }
            }
            
            // Central columella
            ctx.fillStyle = '#FFCDD2';
            ctx.beginPath();
            ctx.arc(centerX, centerY, width * 0.08, 0, Math.PI * 2);
            ctx.fill();
            
        } else if(fruitType === 'berry') {
            // Generic berry cross-section
            
            // Exocarp
            ctx.fillStyle = '#7B1FA2';
            ctx.beginPath();
            ctx.arc(centerX, centerY, width * 0.4, 0, Math.PI * 2);
            ctx.fill();
            
            // Mesocarp
            ctx.fillStyle = '#CE93D8';
            ctx.beginPath();
            ctx.arc(centerX, centerY, width * 0.35, 0, Math.PI * 2);
            ctx.fill();
            
            // Endocarp
            ctx.fillStyle = '#E1BEE7';
            ctx.beginPath();
            ctx.arc(centerX, centerY, width * 0.25, 0, Math.PI * 2);
            ctx.fill();
            
            // Seeds scattered throughout
            for(let i = 0; i < 15; i++) {
                const angle = Math.random() * Math.PI * 2;
                const dist = Math.random() * width * 0.22;
                const sx = centerX + Math.cos(angle) * dist;
                const sy = centerY + Math.sin(angle) * dist;
                ctx.fillStyle = '#4A148C';
                ctx.beginPath();
                ctx.ellipse(sx, sy, width * 0.02, width * 0.025, angle, 0, Math.PI * 2);
                ctx.fill();
            }
        }

        // Outer outline
        ctx.strokeStyle = '#212121';
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.arc(centerX, centerY, width * 0.45, 0, Math.PI * 2);
        ctx.stroke();

        ctx.restore();
    }

    // ===== BIOLOGY - ANIMAL ANATOMY =====

    static drawBrain(ctx, x, y, width, height, plane) {
        ctx.save();
        ctx.translate(x, y);

        if(plane === 'sagittal') {
            // Sagittal (side view) brain cross-section
            
            // Cerebrum
            ctx.fillStyle = '#FFCCBC';
            ctx.beginPath();
            ctx.moveTo(width * 0.3, height * 0.15);
            ctx.bezierCurveTo(width * 0.1, height * 0.1, width * 0.05, height * 0.3, width * 0.15, height * 0.5);
            ctx.bezierCurveTo(width * 0.2, height * 0.6, width * 0.3, height * 0.65, width * 0.45, height * 0.65);
            ctx.lineTo(width * 0.55, height * 0.65);
            ctx.bezierCurveTo(width * 0.7, height * 0.65, width * 0.85, height * 0.55, width * 0.9, height * 0.4);
            ctx.bezierCurveTo(width * 0.95, height * 0.25, width * 0.85, height * 0.1, width * 0.65, height * 0.15);
            ctx.closePath();
            ctx.fill();

            // Corpus callosum
            ctx.fillStyle = '#FFFFFF';
            ctx.beginPath();
            ctx.ellipse(width * 0.5, height * 0.4, width * 0.15, height * 0.05, 0, 0, Math.PI * 2);
            ctx.fill();

            // Thalamus
            ctx.fillStyle = '#F8BBD0';
            ctx.beginPath();
            ctx.ellipse(width * 0.48, height * 0.45, width * 0.06, height * 0.08, 0, 0, Math.PI * 2);
            ctx.fill();

            // Hypothalamus
            ctx.fillStyle = '#F48FB1';
            ctx.beginPath();
            ctx.ellipse(width * 0.45, height * 0.52, width * 0.04, height * 0.05, 0, 0, Math.PI * 2);
            ctx.fill();

            // Midbrain
            ctx.fillStyle = '#CE93D8';
            ctx.beginPath();
            ctx.ellipse(width * 0.48, height * 0.58, width * 0.05, height * 0.06, 0, 0, Math.PI * 2);
            ctx.fill();

            // Pons
            ctx.fillStyle = '#B39DDB';
            ctx.beginPath();
            ctx.rect(width * 0.42, height * 0.62, width * 0.12, height * 0.06);
            ctx.fill();

            // Medulla oblongata
            ctx.fillStyle = '#9575CD';
            ctx.beginPath();
            ctx.moveTo(width * 0.45, height * 0.68);
            ctx.lineTo(width * 0.42, height * 0.78);
            ctx.lineTo(width * 0.48, height * 0.78);
            ctx.lineTo(width * 0.52, height * 0.78);
            ctx.lineTo(width * 0.58, height * 0.78);
            ctx.lineTo(width * 0.55, height * 0.68);
            ctx.closePath();
            ctx.fill();

            // Cerebellum
            ctx.fillStyle = '#FFAB91';
            ctx.beginPath();
            ctx.ellipse(width * 0.35, height * 0.72, width * 0.12, height * 0.15, 0, 0, Math.PI * 2);
            ctx.fill();
            
            // Cerebellar folia (folds)
            ctx.strokeStyle = '#FF8A65';
            ctx.lineWidth = 1;
            for(let i = 0; i < 8; i++) {
                ctx.beginPath();
                ctx.moveTo(width * (0.25 + i * 0.025), height * 0.65);
                ctx.lineTo(width * (0.25 + i * 0.025), height * 0.8);
                ctx.stroke();
            }

            // Ventricles
            ctx.fillStyle = '#B3E5FC';
            ctx.beginPath();
            ctx.ellipse(width * 0.52, height * 0.35, width * 0.08, height * 0.06, 0, 0, Math.PI * 2);
            ctx.fill();

            // Cerebral cortex (gray matter folds)
            ctx.strokeStyle = '#D84315';
            ctx.lineWidth = 2;
            ctx.beginPath();
            ctx.moveTo(width * 0.3, height * 0.15);
            ctx.bezierCurveTo(width * 0.1, height * 0.1, width * 0.05, height * 0.3, width * 0.15, height * 0.5);
            ctx.bezierCurveTo(width * 0.2, height * 0.6, width * 0.3, height * 0.65, width * 0.45, height * 0.65);
            ctx.stroke();

            ctx.beginPath();
            ctx.moveTo(width * 0.65, height * 0.15);
            ctx.bezierCurveTo(width * 0.85, height * 0.1, width * 0.95, height * 0.25, width * 0.9, height * 0.4);
            ctx.bezierCurveTo(width * 0.85, height * 0.55, width * 0.7, height * 0.65, width * 0.55, height * 0.65);
            ctx.stroke();

            // Sulci (grooves)
            for(let i = 0; i < 5; i++) {
                ctx.beginPath();
                ctx.moveTo(width * (0.35 + i * 0.08), height * 0.2);
                ctx.quadraticCurveTo(
                    width * (0.37 + i * 0.08), height * 0.25,
                    width * (0.35 + i * 0.08), height * 0.3
                );
                ctx.stroke();
            }
        }

        ctx.restore();
    }

    static drawSmallIntestine(ctx, x, y, width, height, showVilli) {
        ctx.save();
        ctx.translate(x, y);

        // Serosa (outer layer)
        ctx.fillStyle = '#FFF9C4';
        ctx.fillRect(0, 0, width, height);

        // Longitudinal muscle layer
        ctx.fillStyle = '#FFCCBC';
        ctx.fillRect(width * 0.05, height * 0.05, width * 0.9, height * 0.1);
        
        // Muscle fibers
        ctx.strokeStyle = '#FF8A65';
        ctx.lineWidth = 1;
        for(let i = 0; i < 15; i++) {
            ctx.beginPath();
            ctx.moveTo(width * (0.1 + i * 0.06), height * 0.05);
            ctx.lineTo(width * (0.1 + i * 0.06), height * 0.15);
            ctx.stroke();
        }

        // Circular muscle layer
        ctx.fillStyle = '#FFAB91';
        ctx.fillRect(width * 0.05, height * 0.15, width * 0.9, height * 0.12);
        
        // Circular patterns
        for(let i = 0; i < 8; i++) {
            ctx.strokeStyle = '#FF7043';
            ctx.lineWidth = 2;
            ctx.beginPath();
            ctx.ellipse(
                width * (0.15 + i * 0.1), 
                height * 0.21, 
                width * 0.04, 
                height * 0.05, 
                0, 0, Math.PI * 2
            );
            ctx.stroke();
        }

        // Submucosa
        ctx.fillStyle = '#FFE0B2';
        ctx.fillRect(width * 0.05, height * 0.27, width * 0.9, height * 0.15);
        
        // Blood vessels in submucosa
        ctx.strokeStyle = '#E53935';
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(width * 0.1, height * 0.34);
        for(let i = 0; i < 10; i++) {
            ctx.quadraticCurveTo(
                width * (0.1 + i * 0.08), height * (0.32 + (i % 2) * 0.04),
                width * (0.18 + i * 0.08), height * 0.34
            );
        }
        ctx.stroke();

        // Mucosa
        ctx.fillStyle = '#FFF3E0';
        ctx.fillRect(width * 0.05, height * 0.42, width * 0.9, height * 0.2);

        if(showVilli) {
            // Intestinal villi
            const villiCount = 12;
            for(let i = 0; i < villiCount; i++) {
                const vx = width * (0.1 + i * 0.075);
                const vy = height * 0.42;
                const vHeight = height * 0.18;
                
                // Villus shape
                ctx.fillStyle = '#FFEBEE';
                ctx.beginPath();
                ctx.moveTo(vx, vy);
                ctx.bezierCurveTo(
                    vx - width * 0.02, vy + vHeight * 0.3,
                    vx - width * 0.015, vy + vHeight * 0.7,
                    vx, vy + vHeight
                );
                ctx.bezierCurveTo(
                    vx + width * 0.015, vy + vHeight * 0.7,
                    vx + width * 0.02, vy + vHeight * 0.3,
                    vx, vy
                );
                ctx.closePath();
                ctx.fill();
                
                // Capillary network
                ctx.strokeStyle = '#EF5350';
                ctx.lineWidth = 1;
                ctx.beginPath();
                ctx.moveTo(vx, vy + vHeight * 0.2);
                ctx.lineTo(vx, vy + vHeight * 0.9);
                ctx.stroke();
                
                // Lacteal (central lymph vessel)
                ctx.strokeStyle = '#FFF59D';
                ctx.lineWidth = 2;
                ctx.beginPath();
                ctx.moveTo(vx, vy + vHeight * 0.15);
                ctx.lineTo(vx, vy + vHeight * 0.85);
                ctx.stroke();
                
                // Microvilli (brush border)
                ctx.strokeStyle = '#F48FB1';
                ctx.lineWidth = 0.5;
                for(let j = -3; j <= 3; j++) {
                    ctx.beginPath();
                    ctx.moveTo(vx + j * 1.5, vy + vHeight);
                    ctx.lineTo(vx + j * 1.5, vy + vHeight + 5);
                    ctx.stroke();
                }
            }
        }

        // Crypts of Lieberkühn (intestinal glands)
        ctx.fillStyle = '#FFF9C4';
        for(let i = 0; i < 8; i++) {
            ctx.fillRect(
                width * (0.12 + i * 0.1), 
                height * 0.62, 
                width * 0.03, 
                height * 0.1
            );
        }

        // Lumen (inner space)
        ctx.fillStyle = '#E3F2FD';
        ctx.fillRect(width * 0.05, height * 0.72, width * 0.9, height * 0.23);

        // Outline
        ctx.strokeStyle = '#6D4C41';
        ctx.lineWidth = 2;
        ctx.strokeRect(0, 0, width, height);

        ctx.restore();
    }

    static drawFishGills(ctx, x, y, width, height) {
        ctx.save();
        ctx.translate(x, y);

        // Gill arch (cartilaginous support)
        ctx.fillStyle = '#E0E0E0';
        ctx.fillRect(width * 0.1, 0, width * 0.15, height);
        
        // Gill rakers (filter feeders)
        ctx.strokeStyle = '#BDBDBD';
        ctx.lineWidth = 2;
        for(let i = 0; i < 12; i++) {
            ctx.beginPath();
            ctx.moveTo(width * 0.1, height * (0.05 + i * 0.08));
            ctx.lineTo(width * 0.05, height * (0.05 + i * 0.08));
            ctx.stroke();
        }

        // Gill filaments (primary lamellae)
        const filamentCount = 15;
        for(let i = 0; i < filamentCount; i++) {
            const fy = height * (0.05 + i * 0.06);
            
            // Filament
            ctx.fillStyle = '#EF5350';
            ctx.fillRect(width * 0.25, fy, width * 0.5, height * 0.04);
            
            // Secondary lamellae (gas exchange surfaces)
            const lamellaeCount = 20;
            for(let j = 0; j < lamellaeCount; j++) {
                const lx = width * (0.27 + j * 0.023);
                
                // Upper lamella
                ctx.fillStyle = '#FFCDD2';
                ctx.beginPath();
                ctx.moveTo(lx, fy);
                ctx.lineTo(lx - 3, fy - 8);
                ctx.lineTo(lx + 3, fy - 8);
                ctx.closePath();
                ctx.fill();
                
                // Lower lamella
                ctx.beginPath();
                ctx.moveTo(lx, fy + height * 0.04);
                ctx.lineTo(lx - 3, fy + height * 0.04 + 8);
                ctx.lineTo(lx + 3, fy + height * 0.04 + 8);
                ctx.closePath();
                ctx.fill();
                
                // Capillaries in lamellae
                ctx.strokeStyle = '#D32F2F';
                ctx.lineWidth = 0.5;
                ctx.beginPath();
                ctx.moveTo(lx, fy - 7);
                ctx.lineTo(lx, fy - 3);
                ctx.stroke();
                ctx.beginPath();
                ctx.moveTo(lx, fy + height * 0.04 + 3);
                ctx.lineTo(lx, fy + height * 0.04 + 7);
                ctx.stroke();
            }
            
            // Afferent and efferent blood vessels
            ctx.strokeStyle = '#C62828';
            ctx.lineWidth = 3;
            // Afferent (brings deoxygenated blood)
            ctx.beginPath();
            ctx.moveTo(width * 0.25, fy + height * 0.02);
            ctx.lineTo(width * 0.27, fy + height * 0.02);
            ctx.stroke();
            // Efferent (carries oxygenated blood)
            ctx.strokeStyle = '#E53935';
            ctx.beginPath();
            ctx.moveTo(width * 0.73, fy + height * 0.02);
            ctx.lineTo(width * 0.75, fy + height * 0.02);
            ctx.stroke();
        }

        // Water flow arrows
        ctx.fillStyle = '#64B5F6';
        ctx.font = 'bold 16px Arial';
        ctx.fillText('H₂O →', width * 0.78, height * 0.3);
        ctx.fillText('O₂ rich', width * 0.78, height * 0.5);

        ctx.restore();
    }

    static drawInsectThorax(ctx, x, y, width, height) {
        ctx.save();
        ctx.translate(x, y);

        const centerX = width / 2;
        const centerY = height / 2;

        // Exoskeleton (cuticle)
        ctx.strokeStyle = '#8D6E63';
        ctx.lineWidth = 8;
        ctx.fillStyle = '#D7CCC8';
        ctx.beginPath();
        ctx.ellipse(centerX, centerY, width * 0.45, height * 0.4, 0, 0, Math.PI * 2);
        ctx.fill();
        ctx.stroke();

        // Epidermis (beneath cuticle)
        ctx.fillStyle = '#BCAAA4';
        ctx.beginPath();
        ctx.ellipse(centerX, centerY, width * 0.42, height * 0.37, 0, 0, Math.PI * 2);
        ctx.fill();

        // Body cavity (hemocoel)
        ctx.fillStyle = '#FFF9C4';
        ctx.beginPath();
        ctx.ellipse(centerX, centerY, width * 0.38, height * 0.33, 0, 0, Math.PI * 2);
        ctx.fill();

        // Flight muscles (dorsoventral and longitudinal)
        ctx.fillStyle = '#FFAB91';
        
        // Dorsoventral muscles (vertical)
        for(let i = 0; i < 4; i++) {
            ctx.fillRect(
                width * (0.3 + i * 0.15),
                height * 0.22,
                width * 0.08,
                height * 0.56
            );
        }
        
        // Longitudinal muscles (horizontal)
        ctx.fillStyle = '#FF8A65';
        ctx.fillRect(width * 0.15, height * 0.35, width * 0.7, height * 0.08);
        ctx.fillRect(width * 0.15, height * 0.57, width * 0.7, height * 0.08);

        // Tracheal system (respiratory tubes)
        ctx.strokeStyle = '#B3E5FC';
        ctx.lineWidth = 3;
        
        // Main tracheal trunks
        ctx.beginPath();
        ctx.moveTo(width * 0.05, centerY);
        ctx.lineTo(width * 0.95, centerY);
        ctx.stroke();
        
        // Lateral tracheae
        for(let i = 0; i < 5; i++) {
            const tx = width * (0.2 + i * 0.15);
            ctx.beginPath();
            ctx.moveTo(tx, centerY);
            ctx.lineTo(tx, height * 0.15);
            ctx.stroke();
            ctx.beginPath();
            ctx.moveTo(tx, centerY);
            ctx.lineTo(tx, height * 0.85);
            ctx.stroke();
        }
        
        // Tracheoles (fine branches)
        ctx.lineWidth = 1;
        for(let i = 0; i < 20; i++) {
            const angle = Math.random() * Math.PI * 2;
            const r1 = width * 0.15;
            const r2 = width * 0.3;
            ctx.beginPath();
            ctx.moveTo(
                centerX + Math.cos(angle) * r1,
                centerY + Math.sin(angle) * r1
            );
            ctx.lineTo(
                centerX + Math.cos(angle) * r2,
                centerY + Math.sin(angle) * r2
            );
            ctx.stroke();
        }

        // Spiracles (breathing pores)
        ctx.fillStyle = '#212121';
        for(let i = 0; i < 2; i++) {
            const side = i === 0 ? 0.08 : 0.92;
            ctx.beginPath();
            ctx.ellipse(width * side, centerY, width * 0.02, height * 0.04, 0, 0, Math.PI * 2);
            ctx.fill();
        }

        // Heart (dorsal vessel)
        ctx.fillStyle = '#F48FB1';
        ctx.fillRect(width * 0.35, height * 0.12, width * 0.3, height * 0.04);
        
        // Ostia (heart openings)
        ctx.fillStyle = '#E91E63';
        for(let i = 0; i < 4; i++) {
            ctx.beginPath();
            ctx.arc(width * (0.4 + i * 0.08), height * 0.14, 2, 0, Math.PI * 2);
            ctx.fill();
        }

        // Nerve cord (ventral)
        ctx.strokeStyle = '#FDD835';
        ctx.lineWidth = 4;
        ctx.beginPath();
        ctx.moveTo(width * 0.2, height * 0.82);
        ctx.lineTo(width * 0.8, height * 0.82);
        ctx.stroke();
        
        // Ganglia
        ctx.fillStyle = '#F9A825';
        for(let i = 0; i < 3; i++) {
            ctx.beginPath();
            ctx.arc(width * (0.35 + i * 0.15), height * 0.82, 6, 0, Math.PI * 2);
            ctx.fill();
        }

        // Digestive system (gut)
        ctx.strokeStyle = '#AED581';
        ctx.lineWidth = 5;
        ctx.beginPath();
        ctx.moveTo(width * 0.15, height * 0.68);
        ctx.quadraticCurveTo(centerX, height * 0.62, width * 0.85, height * 0.68);
        ctx.stroke();

        ctx.restore();
    }

    static drawFlowerBud(ctx, x, y, width, height) {
        ctx.save();
        ctx.translate(x, y);

        const centerX = width / 2;
        const centerY = height / 2;

        // Receptacle (base)
        ctx.fillStyle = '#C5E1A5';
        ctx.beginPath();
        ctx.ellipse(centerX, height * 0.85, width * 0.15, height * 0.1, 0, 0, Math.PI * 2);
        ctx.fill();

        // Developing sepals (outermost)
        ctx.fillStyle = '#9CCC65';
        for(let i = 0; i < 4; i++) {
            const angle = (i / 4) * Math.PI * 2 - Math.PI / 2;
            ctx.save();
            ctx.translate(centerX, centerY);
            ctx.rotate(angle);
            ctx.beginPath();
            ctx.ellipse(0, -height * 0.3, width * 0.12, height * 0.25, 0, 0, Math.PI * 2);
            ctx.fill();
            ctx.restore();
        }

        // Developing petals
        ctx.fillStyle = '#FFB74D';
        for(let i = 0; i < 5; i++) {
            const angle = (i / 5) * Math.PI * 2 - Math.PI / 2;
            ctx.save();
            ctx.translate(centerX, centerY);
            ctx.rotate(angle);
            ctx.beginPath();
            ctx.ellipse(0, -height * 0.22, width * 0.1, height * 0.18, 0, 0, Math.PI * 2);
            ctx.fill();
            ctx.restore();
        }

        // Developing stamens
        ctx.fillStyle = '#FFE082';
        ctx.strokeStyle = '#FFA726';
        ctx.lineWidth = 2;
        for(let i = 0; i < 6; i++) {
            const angle = (i / 6) * Math.PI * 2;
            const sx = centerX + Math.cos(angle) * width * 0.08;
            const sy = centerY + Math.sin(angle) * height * 0.08;
            
            // Filament
            ctx.beginPath();
            ctx.moveTo(centerX, centerY);
            ctx.lineTo(sx, sy);
            ctx.stroke();
            
            // Developing anther
            ctx.fillStyle = '#FDD835';
            ctx.beginPath();
            ctx.ellipse(sx, sy, width * 0.02, height * 0.03, angle, 0, Math.PI * 2);
            ctx.fill();
        }

        // Developing carpel (center)
        ctx.fillStyle = '#E1BEE7';
        ctx.beginPath();
        ctx.ellipse(centerX, centerY, width * 0.06, height * 0.1, 0, 0, Math.PI * 2);
        ctx.fill();

        // Stigma (top of carpel)
        ctx.fillStyle = '#CE93D8';
        ctx.beginPath();
        ctx.ellipse(centerX, centerY - height * 0.08, width * 0.03, height * 0.03, 0, 0, Math.PI * 2);
        ctx.fill();

        // Developing ovules
        ctx.fillStyle = '#FFF9C4';
        for(let i = 0; i < 3; i++) {
            ctx.beginPath();
            ctx.arc(
                centerX + (i - 1) * width * 0.02,
                centerY + height * 0.05,
                width * 0.015,
                0, Math.PI * 2
            );
            ctx.fill();
        }

        ctx.restore();
    }

    // ===== GEOGRAPHY - EARTH & LANDFORMS =====

    static drawEarth(ctx, x, y, width, height, showDepths) {
        ctx.save();
        ctx.translate(x, y);

        const centerX = width / 2;
        const centerY = height / 2;
        const radius = Math.min(width, height) * 0.45;

        // Inner core (solid iron-nickel)
        ctx.fillStyle = '#FFEB3B';
        ctx.beginPath();
        ctx.arc(centerX, centerY, radius * 0.2, 0, Math.PI * 2);
        ctx.fill();

        // Outer core (liquid iron-nickel)
        ctx.fillStyle = '#FF9800';
        ctx.beginPath();
        ctx.arc(centerX, centerY, radius * 0.35, 0, Math.PI * 2);
        ctx.fill();

        // Lower mantle
        ctx.fillStyle = '#FF5722';
        ctx.beginPath();
        ctx.arc(centerX, centerY, radius * 0.6, 0, Math.PI * 2);
        ctx.fill();

        // Upper mantle
        ctx.fillStyle = '#F44336';
        ctx.beginPath();
        ctx.arc(centerX, centerY, radius * 0.85, 0, Math.PI * 2);
        ctx.fill();

        // Asthenosphere (partially molten layer)
        ctx.fillStyle = '#EF5350';
        ctx.beginPath();
        ctx.arc(centerX, centerY, radius * 0.92, 0, Math.PI * 2);
        ctx.fill();

        // Lithosphere (crust + upper mantle)
        ctx.fillStyle = '#8D6E63';
        ctx.beginPath();
        ctx.arc(centerX, centerY, radius * 0.97, 0, Math.PI * 2);
        ctx.fill();

        // Crust
        ctx.fillStyle = '#A1887F';
        ctx.beginPath();
        ctx.arc(centerX, centerY, radius, 0, Math.PI * 2);
        ctx.fill();

        // Continental crust (thicker)
        ctx.fillStyle = '#BCAAA4';
        ctx.beginPath();
        ctx.arc(centerX + radius * 0.3, centerY - radius * 0.85, radius * 0.15, 0, Math.PI);
        ctx.fill();

        // Oceanic crust (thinner)
        ctx.fillStyle = '#90A4AE';
        ctx.beginPath();
        ctx.arc(centerX - radius * 0.4, centerY - radius * 0.9, radius * 0.08, 0, Math.PI);
        ctx.fill();

        if(showDepths) {
            // Depth labels
            ctx.fillStyle = '#FFFFFF';
            ctx.font = '12px Arial';
            ctx.textAlign = 'center';
            ctx.fillText('Inner Core', centerX, centerY);
            ctx.fillText('1220 km', centerX, centerY + 15);
            
            ctx.fillText('Outer Core', centerX + radius * 0.28, centerY);
            ctx.fillText('2260 km', centerX + radius * 0.28, centerY + 15);
            
            ctx.fillText('Mantle', centerX + radius * 0.7, centerY);
            ctx.fillText('2900 km', centerX + radius * 0.7, centerY + 15);
            
            ctx.fillStyle = '#000000';
            ctx.fillText('Crust', centerX, centerY - radius * 0.9);
            ctx.fillText('5-70 km', centerX, centerY - radius * 0.85);
        }

        // Layer boundaries
        ctx.strokeStyle = '#FFFFFF';
        ctx.lineWidth = 2;
        ctx.setLineDash([5, 5]);
        
        [0.2, 0.35, 0.6, 0.85, 0.92, 0.97].forEach(r => {
            ctx.beginPath();
            ctx.arc(centerX, centerY, radius * r, 0, Math.PI * 2);
            ctx.stroke();
        });
        
        ctx.setLineDash([]);

        // Outer boundary
        ctx.strokeStyle = '#212121';
        ctx.lineWidth = 3;
        ctx.beginPath();
        ctx.arc(centerX, centerY, radius, 0, Math.PI * 2);
        ctx.stroke();

        ctx.restore();
    }

    static drawVolcano(ctx, x, y, width, height, showLavaFlow) {
        ctx.save();
        ctx.translate(x, y);

        // Magma chamber
        ctx.fillStyle = '#FF5722';
        ctx.beginPath();
        ctx.ellipse(width * 0.5, height * 0.85, width * 0.25, height * 0.12, 0, 0, Math.PI * 2);
        ctx.fill();

        // Conduit (main vent)
        ctx.fillStyle = '#FF6F00';
        ctx.fillRect(width * 0.47, height * 0.3, width * 0.06, height * 0.44);

        // Volcanic cone
        ctx.fillStyle = '#6D4C41';
        ctx.beginPath();
        ctx.moveTo(width * 0.1, height * 0.7);
        ctx.lineTo(width * 0.45, height * 0.25);
        ctx.lineTo(width * 0.55, height * 0.25);
        ctx.lineTo(width * 0.9, height * 0.7);
        ctx.closePath();
        ctx.fill();

        // Volcanic layers (strata)
        ctx.strokeStyle = '#5D4037';
        ctx.lineWidth = 2;
        for(let i = 0; i < 6; i++) {
            const layerY = height * (0.35 + i * 0.06);
            const layerWidth = width * (0.3 - i * 0.04);
            ctx.beginPath();
            ctx.moveTo(width * 0.5 - layerWidth, layerY);
            ctx.lineTo(width * 0.5 + layerWidth, layerY);
            ctx.stroke();
        }

        // Crater
        ctx.fillStyle = '#424242';
        ctx.beginPath();
        ctx.moveTo(width * 0.45, height * 0.25);
        ctx.lineTo(width * 0.42, height * 0.2);
        ctx.lineTo(width * 0.58, height * 0.2);
        ctx.lineTo(width * 0.55, height * 0.25);
        ctx.closePath();
        ctx.fill();

        if(showLavaFlow) {
            // Erupting lava
            ctx.fillStyle = '#FF6F00';
            ctx.beginPath();
            ctx.moveTo(width * 0.48, height * 0.2);
            ctx.lineTo(width * 0.45, height * 0.05);
            ctx.lineTo(width * 0.5, height * 0.02);
            ctx.lineTo(width * 0.55, height * 0.05);
            ctx.lineTo(width * 0.52, height * 0.2);
            ctx.closePath();
            ctx.fill();

            // Lava flow down slope
            ctx.fillStyle = '#FF5722';
            ctx.beginPath();
            ctx.moveTo(width * 0.55, height * 0.25);
            ctx.quadraticCurveTo(width * 0.6, height * 0.4, width * 0.7, height * 0.7);
            ctx.lineTo(width * 0.75, height * 0.7);
            ctx.quadraticCurveTo(width * 0.65, height * 0.42, width * 0.58, height * 0.25);
            ctx.closePath();
            ctx.fill();

            // Pyroclastic material
            ctx.fillStyle = '#B71C1C';
            for(let i = 0; i < 10; i++) {
                const px = width * (0.3 + Math.random() * 0.4);
                const py = height * (0.05 + Math.random() * 0.15);
                ctx.beginPath();
                ctx.arc(px, py, 2 + Math.random() * 3, 0, Math.PI * 2);
                ctx.fill();
            }

            // Volcanic ash cloud
            ctx.fillStyle = 'rgba(97, 97, 97, 0.5)';
            ctx.beginPath();
            ctx.ellipse(width * 0.5, height * 0.08, width * 0.2, height * 0.08, 0, 0, Math.PI * 2);
            ctx.fill();
        }

        // Side vents
        ctx.fillStyle = '#D84315';
        ctx.fillRect(width * 0.3, height * 0.5, width * 0.04, height * 0.15);
        ctx.fillRect(width * 0.66, height * 0.55, width * 0.04, height * 0.1);

        // Dike (intrusive feature)
        ctx.fillStyle = '#FF7043';
        ctx.save();
        ctx.translate(width * 0.3, height * 0.7);
        ctx.rotate(-Math.PI / 6);
        ctx.fillRect(0, 0, width * 0.15, height * 0.03);
        ctx.restore();

        // Sill (horizontal intrusion)
        ctx.fillStyle = '#FF8A65';
        ctx.fillRect(width * 0.2, height * 0.6, width * 0.25, height * 0.02);

        // Ground surface
        ctx.fillStyle = '#4E342E';
        ctx.fillRect(0, height * 0.7, width, height * 0.3);

        ctx.restore();
    }

    static drawFoldMountain(ctx, x, y, width, height) {
        ctx.save();
        ctx.translate(x, y);

        const colors = ['#8D6E63', '#A1887F', '#BCAAA4', '#D7CCC8', '#EFEBE9'];

        // Draw rock layers with folds
        const layers = 5;
        for(let layer = 0; layer < layers; layer++) {
            ctx.fillStyle = colors[layer];
            ctx.strokeStyle = '#5D4037';
            ctx.lineWidth = 1;

            ctx.beginPath();
            const baseY = height * 0.9 - layer * height * 0.15;

            // Create folded pattern
            ctx.moveTo(0, baseY);

            // Syncline (downfold)
            ctx.quadraticCurveTo(
                width * 0.15, baseY - height * 0.05,
                width * 0.25, baseY
            );

            // Anticline (upfold)
            ctx.quadraticCurveTo(
                width * 0.35, baseY + height * 0.15,
                width * 0.45, baseY + height * 0.25
            );

            // Peak
            ctx.quadraticCurveTo(
                width * 0.5, baseY + height * 0.28,
                width * 0.55, baseY + height * 0.25
            );

            // Descending anticline
            ctx.quadraticCurveTo(
                width * 0.65, baseY + height * 0.15,
                width * 0.75, baseY
            );

            // Final syncline
            ctx.quadraticCurveTo(
                width * 0.85, baseY - height * 0.05,
                width, baseY
            );

            // Close the layer
            ctx.lineTo(width, height);
            ctx.lineTo(0, height);
            ctx.closePath();
            ctx.fill();
            ctx.stroke();
        }

        // Add compression arrows
        ctx.strokeStyle = '#E53935';
        ctx.fillStyle = '#E53935';
        ctx.lineWidth = 3;

        // Left arrow
        ctx.beginPath();
        ctx.moveTo(width * 0.05, height * 0.5);
        ctx.lineTo(width * 0.15, height * 0.5);
        ctx.stroke();
        ctx.beginPath();
        ctx.moveTo(width * 0.15, height * 0.5);
        ctx.lineTo(width * 0.12, height * 0.47);
        ctx.lineTo(width * 0.12, height * 0.53);
        ctx.closePath();
        ctx.fill();

        // Right arrow
        ctx.beginPath();
        ctx.moveTo(width * 0.95, height * 0.5);
        ctx.lineTo(width * 0.85, height * 0.5);
        ctx.stroke();
        ctx.beginPath();
        ctx.moveTo(width * 0.85, height * 0.5);
        ctx.lineTo(width * 0.88, height * 0.47);
        ctx.lineTo(width * 0.88, height * 0.53);
        ctx.closePath();
        ctx.fill();

        // Label features
        ctx.fillStyle = '#000000';
        ctx.font = '12px Arial';
        ctx.textAlign = 'center';
        ctx.fillText('Syncline', width * 0.25, height * 0.95);
        ctx.fillText('Anticline', width * 0.5, height * 0.3);
        ctx.fillText('Syncline', width * 0.75, height * 0.95);

        ctx.restore();
    }

    static drawFaultLine(ctx, x, y, width, height, faultType) {
        ctx.save();
        ctx.translate(x, y);

        const colors = ['#8D6E63', '#A1887F', '#BCAAA4', '#D7CCC8'];

        // Draw rock layers
        for(let i = 0; i < 4; i++) {
            ctx.fillStyle = colors[i];
            ctx.strokeStyle = '#5D4037';
            ctx.lineWidth = 1;

            const layerY = height * (0.2 + i * 0.2);
            const layerHeight = height * 0.2;

            if(faultType === 'normal') {
                // Normal fault (tension - hanging wall moves down)
                // Left block (footwall - stationary)
                ctx.fillRect(0, layerY, width * 0.45, layerHeight);
                ctx.strokeRect(0, layerY, width * 0.45, layerHeight);

                // Right block (hanging wall - dropped)
                const drop = height * 0.15;
                ctx.fillRect(width * 0.55, layerY + drop, width * 0.45, layerHeight);
                ctx.strokeRect(width * 0.55, layerY + drop, width * 0.45, layerHeight);

            } else if(faultType === 'reverse') {
                // Reverse/thrust fault (compression - hanging wall moves up)
                // Left block (footwall)
                ctx.fillRect(0, layerY, width * 0.45, layerHeight);
                ctx.strokeRect(0, layerY, width * 0.45, layerHeight);

                // Right block (hanging wall - pushed up)
                const uplift = height * 0.15;
                ctx.fillRect(width * 0.55, layerY - uplift, width * 0.45, layerHeight);
                ctx.strokeRect(width * 0.55, layerY - uplift, width * 0.45, layerHeight);

            } else if(faultType === 'strike-slip') {
                // Strike-slip fault (lateral movement)
                // Left block
                ctx.fillRect(0, layerY, width * 0.48, layerHeight);
                ctx.strokeRect(0, layerY, width * 0.48, layerHeight);

                // Right block (shifted)
                const shift = i * height * 0.05;
                ctx.fillRect(width * 0.52, layerY + shift, width * 0.48, layerHeight);
                ctx.strokeRect(width * 0.52, layerY + shift, width * 0.48, layerHeight);
            }
        }

        // Draw fault plane
        ctx.strokeStyle = '#D32F2F';
        ctx.lineWidth = 4;
        ctx.setLineDash([10, 5]);

        if(faultType === 'normal') {
            ctx.beginPath();
            ctx.moveTo(width * 0.45, height * 0.1);
            ctx.lineTo(width * 0.55, height * 0.9);
            ctx.stroke();
        } else if(faultType === 'reverse') {
            ctx.beginPath();
            ctx.moveTo(width * 0.55, height * 0.1);
            ctx.lineTo(width * 0.45, height * 0.9);
            ctx.stroke();
        } else if(faultType === 'strike-slip') {
            ctx.beginPath();
            ctx.moveTo(width * 0.5, 0);
            ctx.lineTo(width * 0.5, height);
            ctx.stroke();
        }

        ctx.setLineDash([]);

        // Movement arrows
        ctx.strokeStyle = '#1976D2';
        ctx.fillStyle = '#1976D2';
        ctx.lineWidth = 3;

        if(faultType === 'normal') {
            // Hanging wall down
            this.drawArrow(ctx, width * 0.7, height * 0.3, width * 0.7, height * 0.5);
        } else if(faultType === 'reverse') {
            // Hanging wall up
            this.drawArrow(ctx, width * 0.7, height * 0.5, width * 0.7, height * 0.3);
        } else if(faultType === 'strike-slip') {
            // Lateral movement
            this.drawArrow(ctx, width * 0.7, height * 0.5, width * 0.8, height * 0.5);
        }

        ctx.restore();
    }

    static drawArrow(ctx, x1, y1, x2, y2) {
        const angle = Math.atan2(y2 - y1, x2 - x1);
        
        ctx.beginPath();
        ctx.moveTo(x1, y1);
        ctx.lineTo(x2, y2);
        ctx.stroke();

        // Arrowhead
        ctx.beginPath();
        ctx.moveTo(x2, y2);
        ctx.lineTo(
            x2 - 10 * Math.cos(angle - Math.PI / 6),
            y2 - 10 * Math.sin(angle - Math.PI / 6)
        );
        ctx.lineTo(
            x2 - 10 * Math.cos(angle + Math.PI / 6),
            y2 - 10 * Math.sin(angle + Math.PI / 6)
        );
        ctx.closePath();
        ctx.fill();
    }

    static drawRiverValley(ctx, x, y, width, height, valleyType) {
        ctx.save();
        ctx.translate(x, y);

        if(valleyType === 'v-shaped') {
            // V-shaped valley (formed by river erosion)
            ctx.fillStyle = '#8D6E63';
            ctx.beginPath();
            ctx.moveTo(0, height * 0.3);
            ctx.lineTo(width * 0.5, height * 0.9);
            ctx.lineTo(width, height * 0.3);
            ctx.lineTo(width, 0);
            ctx.lineTo(0, 0);
            ctx.closePath();
            ctx.fill();

            // Steep valley sides
            ctx.strokeStyle = '#5D4037';
            ctx.lineWidth = 2;
            for(let i = 0; i < 10; i++) {
                ctx.beginPath();
                ctx.moveTo(i * (width * 0.05), height * 0.3);
                ctx.lineTo(width * 0.5 - (10 - i) * (width * 0.05), height * 0.9);
                ctx.stroke();
            }

            // River at bottom
            ctx.fillStyle = '#2196F3';
            ctx.beginPath();
            ctx.moveTo(width * 0.48, height * 0.9);
            ctx.lineTo(width * 0.48, height);
            ctx.lineTo(width * 0.52, height);
            ctx.lineTo(width * 0.52, height * 0.9);
            ctx.closePath();
            ctx.fill();

        } else if(valleyType === 'u-shaped') {
            // U-shaped valley (formed by glacial erosion)
            ctx.fillStyle = '#8D6E63';
            ctx.beginPath();
            ctx.moveTo(0, height * 0.2);
            ctx.quadraticCurveTo(width * 0.25, height * 0.9, width * 0.5, height * 0.95);
            ctx.quadraticCurveTo(width * 0.75, height * 0.9, width, height * 0.2);
            ctx.lineTo(width, 0);
            ctx.lineTo(0, 0);
            ctx.closePath();
            ctx.fill();

            // Flat valley floor
            ctx.fillStyle = '#BCAAA4';
            ctx.beginPath();
            ctx.moveTo(width * 0.35, height * 0.92);
            ctx.quadraticCurveTo(width * 0.5, height * 0.95, width * 0.65, height * 0.92);
            ctx.lineTo(width * 0.65, height);
            ctx.lineTo(width * 0.35, height);
            ctx.closePath();
            ctx.fill();

            // River
            ctx.fillStyle = '#2196F3';
            ctx.fillRect(width * 0.47, height * 0.93, width * 0.06, height * 0.07);

            // Hanging valleys (tributaries)
            ctx.fillStyle = '#A1887F';
            ctx.beginPath();
            ctx.moveTo(width * 0.15, height * 0.5);
            ctx.quadraticCurveTo(width * 0.2, height * 0.6, width * 0.25, height * 0.7);
            ctx.lineTo(width * 0.28, height * 0.7);
            ctx.quadraticCurveTo(width * 0.23, height * 0.6, width * 0.18, height * 0.5);
            ctx.closePath();
            ctx.fill();

            // Waterfall from hanging valley
            ctx.strokeStyle = '#81D4FA';
            ctx.lineWidth = 2;
            ctx.setLineDash([2, 2]);
            ctx.beginPath();
            ctx.moveTo(width * 0.265, height * 0.7);
            ctx.lineTo(width * 0.265, height * 0.88);
            ctx.stroke();
            ctx.setLineDash([]);
        }

        ctx.restore();
    }

    // Continue with more geography shapes...
    static drawRiverMeander(ctx, x, y, width, height) {
        ctx.save();
        ctx.translate(x, y);

        // River channel
        ctx.fillStyle = '#2196F3';
        ctx.beginPath();
        ctx.moveTo(width * 0.1, 0);
        
        // Meander curves
        ctx.bezierCurveTo(
            width * 0.2, height * 0.15,
            width * 0.3, height * 0.25,
            width * 0.4, height * 0.35
        );
        ctx.bezierCurveTo(
            width * 0.5, height * 0.45,
            width * 0.6, height * 0.5,
            width * 0.7, height * 0.55
        );
        ctx.bezierCurveTo(
            width * 0.8, height * 0.6,
            width * 0.9, height * 0.7,
            width * 0.9, height
        );
        
        // Width of river
        ctx.lineTo(width * 0.95, height);
        ctx.bezierCurveTo(
            width * 0.95, height * 0.7,
            width * 0.85, height * 0.6,
            width * 0.75, height * 0.55
        );
        ctx.bezierCurveTo(
            width * 0.65, height * 0.5,
            width * 0.55, height * 0.45,
            width * 0.45, height * 0.35
        );
        ctx.bezierCurveTo(
            width * 0.35, height * 0.25,
            width * 0.25, height * 0.15,
            width * 0.15, 0
        );
        ctx.closePath();
        ctx.fill();

        // Erosion bank (outer bend - faster flow)
        ctx.fillStyle = '#F44336';
        ctx.globalAlpha = 0.3;
        
        // Left outer bend
        ctx.beginPath();
        ctx.moveTo(width * 0.15, height * 0.05);
        ctx.bezierCurveTo(
            width * 0.25, height * 0.2,
            width * 0.32, height * 0.28,
            width * 0.38, height * 0.35
        );
        ctx.lineTo(width * 0.3, height * 0.38);
        ctx.bezierCurveTo(
            width * 0.24, height * 0.3,
            width * 0.18, height * 0.2,
            width * 0.1, height * 0.05
        );
        ctx.closePath();
        ctx.fill();

        // Right outer bend
        ctx.beginPath();
        ctx.moveTo(width * 0.72, height * 0.52);
        ctx.bezierCurveTo(
            width * 0.82, height * 0.58,
            width * 0.92, height * 0.68,
            width * 0.95, height * 0.95
        );
        ctx.lineTo(width * 0.9, height * 0.95);
        ctx.bezierCurveTo(
            width * 0.88, height * 0.7,
            width * 0.78, height * 0.6,
            width * 0.68, height * 0.54
        );
        ctx.closePath();
        ctx.fill();

        ctx.globalAlpha = 1;

        // Deposition bank (inner bend - slower flow)
        ctx.fillStyle = '#FDD835';
        ctx.globalAlpha = 0.4;
        
        // Right inner bend (point bar)
        ctx.beginPath();
        ctx.moveTo(width * 0.42, height * 0.32);
        ctx.bezierCurveTo(
            width * 0.5, height * 0.4,
            width * 0.58, height * 0.45,
            width * 0.65, height * 0.5
        );
        ctx.lineTo(width * 0.7, height * 0.47);
        ctx.bezierCurveTo(
            width * 0.62, height * 0.42,
            width * 0.52, height * 0.37,
            width * 0.44, height * 0.29
        );
        ctx.closePath();
        ctx.fill();

        ctx.globalAlpha = 1;

        // Flow direction arrows
        ctx.strokeStyle = '#FFFFFF';
        ctx.fillStyle = '#FFFFFF';
        ctx.lineWidth = 2;
        
        // Faster flow on outer bend
        this.drawArrow(ctx, width * 0.25, height * 0.15, width * 0.3, height * 0.22);
        
        // Slower flow on inner bend
        this.drawArrow(ctx, width * 0.55, height * 0.42, width * 0.6, height * 0.47);

        ctx.restore();
    }

    // Due to length, I'll provide a few more key agriculture diagrams

    static drawSeedGermination(ctx, x, y, width, height, showStages) {
        ctx.save();
        ctx.translate(x, y);

        if(showStages) {
            const stageWidth = width / 4;

            // Stage 1: Imbibition
            ctx.fillStyle = '#8D6E63';
            ctx.beginPath();
            ctx.ellipse(stageWidth * 0.5, height * 0.7, 15, 12, 0, 0, Math.PI * 2);
            ctx.fill();
            ctx.fillStyle = '#000000';
            ctx.font = '11px Arial';
            ctx.textAlign = 'center';
            ctx.fillText('Water absorption', stageWidth * 0.5, height * 0.9);

            // Stage 2: Radicle emergence
            ctx.fillStyle = '#8D6E63';
            ctx.beginPath();
            ctx.ellipse(stageWidth * 1.5, height * 0.65, 16, 13, 0, 0, Math.PI * 2);
            ctx.fill();
            ctx.fillStyle = '#AED581';
            ctx.fillRect(stageWidth * 1.5 - 2, height * 0.78, 4, 15);
            ctx.fillText('Radicle emerges', stageWidth * 1.5, height * 0.9);

            // Stage 3: Root and shoot
            ctx.fillStyle = '#8D6E63';
            ctx.beginPath();
            ctx.ellipse(stageWidth * 2.5, height * 0.6, 14, 11, 0, 0, Math.PI * 2);
            ctx.fill();
            // Root
            ctx.fillStyle = '#9CCC65';
            ctx.fillRect(stageWidth * 2.5 - 2, height * 0.71, 4, 20);
            // Shoot
            ctx.fillRect(stageWidth * 2.5 - 2, height * 0.4, 4, 20);
            ctx.fillText('Root & shoot', stageWidth * 2.5, height * 0.9);

            // Stage 4: Seedling
            // Root
            ctx.fillStyle = '#7CB342';
            ctx.fillRect(stageWidth * 3.5 - 2, height * 0.65, 4, 30);
            // Stem
            ctx.fillStyle = '#AED581';
            ctx.fillRect(stageWidth * 3.5 - 2, height * 0.35, 4, 30);
            // First leaves
            ctx.fillStyle = '#4CAF50';
            ctx.beginPath();
            ctx.ellipse(stageWidth * 3.5 - 15, height * 0.4, 12, 8, -Math.PI / 6, 0, Math.PI * 2);
            ctx.fill();
            ctx.beginPath();
            ctx.ellipse(stageWidth * 3.5 + 15, height * 0.4, 12, 8, Math.PI / 6, 0, Math.PI * 2);
            ctx.fill();
            ctx.fillStyle = '#000000';
            ctx.fillText('Seedling', stageWidth * 3.5, height * 0.9);

            // Soil line
            ctx.strokeStyle = '#5D4037';
            ctx.lineWidth = 3;
            ctx.beginPath();
            ctx.moveTo(0, height * 0.75);
            ctx.lineTo(width, height * 0.75);
            ctx.stroke();
        }

        ctx.restore();
    }

    static drawGreenhouseCrossSection(ctx, x, y, width, height) {
        ctx.save();
        ctx.translate(x, y);

        // Foundation
        ctx.fillStyle = '#757575';
        ctx.fillRect(width * 0.05, height * 0.85, width * 0.9, height * 0.15);

        // Floor
        ctx.fillStyle = '#A1887F';
        ctx.fillRect(width * 0.1, height * 0.8, width * 0.8, height * 0.05);

        // Frame structure
        ctx.strokeStyle = '#616161';
        ctx.lineWidth = 4;

        // Walls
        ctx.beginPath();
        ctx.moveTo(width * 0.1, height * 0.8);
        ctx.lineTo(width * 0.1, height * 0.3);
        ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(width * 0.9, height * 0.8);
        ctx.lineTo(width * 0.9, height * 0.3);
        ctx.stroke();

        // Roof structure (arched)
        ctx.beginPath();
        ctx.moveTo(width * 0.1, height * 0.3);
        ctx.quadraticCurveTo(width * 0.5, height * 0.05, width * 0.9, height * 0.3);
        ctx.stroke();

        // Glass/plastic covering
        ctx.fillStyle = 'rgba(173, 216, 230, 0.3)';
        ctx.strokeStyle = '#90CAF9';
        ctx.lineWidth = 2;

        // Side panels
        ctx.fillRect(width * 0.1, height * 0.3, width * 0.02, height * 0.5);
        ctx.strokeRect(width * 0.1, height * 0.3, width * 0.02, height * 0.5);
        ctx.fillRect(width * 0.88, height * 0.3, width * 0.02, height * 0.5);
        ctx.strokeRect(width * 0.88, height * 0.3, width * 0.02, height * 0.5);

        // Roof panels
        ctx.beginPath();
        ctx.moveTo(width * 0.1, height * 0.3);
        ctx.quadraticCurveTo(width * 0.5, height * 0.05, width * 0.9, height * 0.3);
        ctx.lineTo(width * 0.88, height * 0.32);
        ctx.quadraticCurveTo(width * 0.5, height * 0.08, width * 0.12, height * 0.32);
        ctx.closePath();
        ctx.fill();
        ctx.stroke();

        // Ventilation windows
        ctx.fillStyle = '#E3F2FD';
        ctx.fillRect(width * 0.15, height * 0.15, width * 0.15, height * 0.08);
        ctx.strokeRect(width * 0.15, height * 0.15, width * 0.15, height * 0.08);
        ctx.fillRect(width * 0.7, height * 0.15, width * 0.15, height * 0.08);
        ctx.strokeRect(width * 0.7, height * 0.15, width * 0.15, height * 0.08);

        // Plants inside
        const plantPositions = [0.2, 0.35, 0.5, 0.65, 0.8];
        plantPositions.forEach(pos => {
            // Pot
            ctx.fillStyle = '#D84315';
            ctx.fillRect(width * (pos - 0.03), height * 0.75, width * 0.06, height * 0.05);
            
            // Plant
            ctx.fillStyle = '#4CAF50';
            ctx.strokeStyle = '#2E7D32';
            ctx.lineWidth = 2;
            
            // Stem
            ctx.beginPath();
            ctx.moveTo(width * pos, height * 0.75);
            ctx.lineTo(width * pos, height * 0.55);
            ctx.stroke();
            
            // Leaves
            for(let i = 0; i < 3; i++) {
                ctx.beginPath();
                ctx.ellipse(
                    width * (pos - 0.04), 
                    height * (0.6 + i * 0.05),
                    width * 0.03,
                    height * 0.03,
                    -Math.PI / 4,
                    0, Math.PI * 2
                );
                ctx.fill();
                
                ctx.beginPath();
                ctx.ellipse(
                    width * (pos + 0.04), 
                    height * (0.62 + i * 0.05),
                    width * 0.03,height * 0.03,
                    Math.PI / 4,
                    0, Math.PI * 2
                );
                ctx.fill();
            }
        });

        // Irrigation system
        ctx.strokeStyle = '#0277BD';
        ctx.lineWidth = 3;
        ctx.beginPath();
        ctx.moveTo(width * 0.15, height * 0.35);
        ctx.lineTo(width * 0.85, height * 0.35);
        ctx.stroke();

        // Drip emitters
        ctx.fillStyle = '#01579B';
        plantPositions.forEach(pos => {
            ctx.beginPath();
            ctx.arc(width * pos, height * 0.35, 3, 0, Math.PI * 2);
            ctx.fill();
            
            // Water drops
            ctx.fillStyle = 'rgba(3, 169, 244, 0.6)';
            for(let i = 0; i < 3; i++) {
                ctx.beginPath();
                ctx.arc(width * pos, height * (0.4 + i * 0.1), 2, 0, Math.PI * 2);
                ctx.fill();
            }
        });

        // Heating pipes
        ctx.strokeStyle = '#FF6F00';
        ctx.lineWidth = 3;
        ctx.beginPath();
        ctx.moveTo(width * 0.1, height * 0.82);
        ctx.lineTo(width * 0.9, height * 0.82);
        ctx.stroke();

        // Temperature/humidity sensor
        ctx.fillStyle = '#FFFFFF';
        ctx.fillRect(width * 0.85, height * 0.4, width * 0.04, height * 0.06);
        ctx.strokeStyle = '#000000';
        ctx.lineWidth = 1;
        ctx.strokeRect(width * 0.85, height * 0.4, width * 0.04, height * 0.06);

        ctx.restore();
    }

    static drawTerracefarm(ctx, x, y, width, height) {
        ctx.save();
        ctx.translate(x, y);

        // Number of terraces
        const terraces = 5;
        const terraceHeight = height / (terraces + 1);

        for(let i = 0; i < terraces; i++) {
            const terraceY = height * 0.15 + i * terraceHeight;
            const terraceWidth = width * (0.85 - i * 0.1);
            const terraceX = width * 0.1 + i * width * 0.05;

            // Retaining wall
            ctx.fillStyle = '#757575';
            ctx.fillRect(terraceX, terraceY + terraceHeight * 0.7, terraceWidth, terraceHeight * 0.3);
            
            // Wall texture (stones)
            ctx.strokeStyle = '#424242';
            ctx.lineWidth = 1;
            for(let row = 0; row < 3; row++) {
                for(let col = 0; col < 8; col++) {
                    const stoneX = terraceX + col * (terraceWidth / 8);
                    const stoneY = terraceY + terraceHeight * 0.7 + row * (terraceHeight * 0.1);
                    ctx.strokeRect(stoneX, stoneY, terraceWidth / 8, terraceHeight * 0.1);
                }
            }

            // Cultivated soil
            ctx.fillStyle = '#6D4C41';
            ctx.fillRect(terraceX, terraceY, terraceWidth, terraceHeight * 0.7);

            // Crops
            ctx.fillStyle = '#4CAF50';
            const cropCount = Math.floor(terraceWidth / 30);
            for(let j = 0; j < cropCount; j++) {
                const cropX = terraceX + 15 + j * 30;
                const cropY = terraceY + terraceHeight * 0.4;
                
                // Plant stem
                ctx.fillRect(cropX - 1, cropY, 2, terraceHeight * 0.3);
                
                // Leaves
                ctx.beginPath();
                ctx.arc(cropX, cropY - 5, 4, 0, Math.PI * 2);
                ctx.fill();
            }

            // Water channel
            ctx.fillStyle = '#2196F3';
            ctx.fillRect(
                terraceX + terraceWidth * 0.05,
                terraceY + terraceHeight * 0.6,
                terraceWidth * 0.9,
                terraceHeight * 0.05
            );
        }

        // Slope behind terraces
        ctx.fillStyle = '#8D6E63';
        ctx.beginPath();
        ctx.moveTo(0, height * 0.1);
        ctx.lineTo(width, height * 0.9);
        ctx.lineTo(width, height);
        ctx.lineTo(0, height);
        ctx.closePath();
        ctx.fill();

        // Rain runoff arrows
        ctx.strokeStyle = '#1976D2';
        ctx.fillStyle = '#1976D2';
        ctx.lineWidth = 2;
        
        for(let i = 0; i < terraces; i++) {
            const arrowX = width * 0.08;
            const arrowY = height * (0.25 + i * (terraceHeight / height));
            this.drawArrow(ctx, arrowX, arrowY, arrowX, arrowY + terraceHeight * 0.4);
        }

        ctx.restore();
    }

    static drawSoilProfile(ctx, x, y, width, height, showHorizons) {
        ctx.save();
        ctx.translate(x, y);

        if(showHorizons) {
            // O Horizon (Organic layer)
            ctx.fillStyle = '#3E2723';
            ctx.fillRect(0, 0, width, height * 0.08);
            
            // Organic matter particles
            ctx.fillStyle = '#5D4037';
            for(let i = 0; i < 30; i++) {
                ctx.fillRect(
                    Math.random() * width,
                    Math.random() * height * 0.08,
                    3, 2
                );
            }

            // A Horizon (Topsoil)
            ctx.fillStyle = '#4E342E';
            ctx.fillRect(0, height * 0.08, width, height * 0.17);
            
            // Humus and fine particles
            ctx.fillStyle = '#3E2723';
            for(let i = 0; i < 40; i++) {
                ctx.beginPath();
                ctx.arc(
                    Math.random() * width,
                    height * 0.08 + Math.random() * height * 0.17,
                    1 + Math.random() * 2,
                    0, Math.PI * 2
                );
                ctx.fill();
            }
            
            // Plant roots
            ctx.strokeStyle = '#FFEB3B';
            ctx.lineWidth = 1.5;
            for(let i = 0; i < 8; i++) {
                const rootX = (i + 1) * (width / 9);
                ctx.beginPath();
                ctx.moveTo(rootX, 0);
                ctx.quadraticCurveTo(
                    rootX + (Math.random() - 0.5) * 20,
                    height * 0.15,
                    rootX + (Math.random() - 0.5) * 30,
                    height * 0.25
                );
                ctx.stroke();
            }

            // E Horizon (Eluviation/Leaching layer) - lighter colored
            ctx.fillStyle = '#8D6E63';
            ctx.fillRect(0, height * 0.25, width, height * 0.1);

            // B Horizon (Subsoil)
            ctx.fillStyle = '#A1887F';
            ctx.fillRect(0, height * 0.35, width, height * 0.3);
            
            // Accumulated clay and minerals
            ctx.fillStyle = '#D84315';
            for(let i = 0; i < 25; i++) {
                ctx.fillRect(
                    Math.random() * width,
                    height * 0.35 + Math.random() * height * 0.3,
                    4, 3
                );
            }
            
            // Iron oxide deposits
            ctx.fillStyle = '#BF360C';
            for(let i = 0; i < 15; i++) {
                ctx.beginPath();
                ctx.arc(
                    Math.random() * width,
                    height * 0.35 + Math.random() * height * 0.3,
                    2,
                    0, Math.PI * 2
                );
                ctx.fill();
            }

            // C Horizon (Parent material)
            ctx.fillStyle = '#BCAAA4';
            ctx.fillRect(0, height * 0.65, width, height * 0.25);
            
            // Weathered rock fragments
            ctx.fillStyle = '#9E9E9E';
            for(let i = 0; i < 20; i++) {
                const size = 5 + Math.random() * 10;
                ctx.fillRect(
                    Math.random() * (width - size),
                    height * 0.65 + Math.random() * height * 0.25,
                    size, size * 0.7
                );
            }

            // R Horizon (Bedrock)
            ctx.fillStyle = '#757575';
            ctx.fillRect(0, height * 0.9, width, height * 0.1);
            
            // Rock layers
            ctx.strokeStyle = '#424242';
            ctx.lineWidth = 2;
            for(let i = 0; i < 3; i++) {
                ctx.beginPath();
                ctx.moveTo(0, height * (0.92 + i * 0.03));
                ctx.lineTo(width, height * (0.92 + i * 0.03));
                ctx.stroke();
            }

            // Labels
            ctx.fillStyle = '#000000';
            ctx.font = 'bold 12px Arial';
            ctx.textAlign = 'right';
            
            ctx.fillText('O - Organic', width - 5, height * 0.04);
            ctx.fillText('A - Topsoil', width - 5, height * 0.16);
            ctx.fillText('E - Leaching', width - 5, height * 0.30);
            ctx.fillText('B - Subsoil', width - 5, height * 0.50);
            ctx.fillText('C - Parent Material', width - 5, height * 0.77);
            ctx.fillText('R - Bedrock', width - 5, height * 0.95);
        }

        // Outline
        ctx.strokeStyle = '#212121';
        ctx.lineWidth = 3;
        ctx.strokeRect(0, 0, width, height);

        ctx.restore();
    }

    static drawFishPond(ctx, x, y, width, height) {
        ctx.save();
        ctx.translate(x, y);

        // Pond banks/dykes
        ctx.fillStyle = '#6D4C41';
        ctx.beginPath();
        ctx.moveTo(0, height * 0.3);
        ctx.lineTo(width * 0.15, height * 0.5);
        ctx.lineTo(width * 0.15, height);
        ctx.lineTo(0, height);
        ctx.closePath();
        ctx.fill();

        ctx.beginPath();
        ctx.moveTo(width, height * 0.3);
        ctx.lineTo(width * 0.85, height * 0.5);
        ctx.lineTo(width * 0.85, height);
        ctx.lineTo(width, height);
        ctx.closePath();
        ctx.fill();

        // Water layers
        // Surface layer (warm, oxygen-rich)
        ctx.fillStyle = '#4FC3F7';
        ctx.fillRect(width * 0.15, height * 0.5, width * 0.7, height * 0.15);

        // Middle layer
        ctx.fillStyle = '#29B6F6';
        ctx.fillRect(width * 0.15, height * 0.65, width * 0.7, height * 0.15);

        // Bottom layer (cooler, less oxygen)
        ctx.fillStyle = '#0288D1';
        ctx.fillRect(width * 0.15, height * 0.8, width * 0.7, height * 0.1);

        // Pond bottom (mud/silt)
        ctx.fillStyle = '#5D4037';
        ctx.fillRect(width * 0.15, height * 0.9, width * 0.7, height * 0.1);

        // Inlet pipe
        ctx.fillStyle = '#757575';
        ctx.fillRect(0, height * 0.45, width * 0.15, height * 0.05);
        
        // Water flow from inlet
        ctx.fillStyle = '#81D4FA';
        ctx.beginPath();
        ctx.moveTo(width * 0.15, height * 0.47);
        ctx.lineTo(width * 0.25, height * 0.52);
        ctx.lineTo(width * 0.25, height * 0.48);
        ctx.closePath();
        ctx.fill();

        // Outlet pipe (drain)
        ctx.fillStyle = '#757575';
        ctx.fillRect(width * 0.85, height * 0.85, width * 0.15, height * 0.05);

        // Monk/outlet structure
        ctx.fillStyle = '#616161';
        ctx.fillRect(width * 0.82, height * 0.75, width * 0.06, height * 0.15);

        // Fish at different depths
        ctx.fillStyle = '#FF6F00';
        ctx.strokeStyle = '#E65100';
        ctx.lineWidth = 1;

        // Surface fish
        for(let i = 0; i < 3; i++) {
            const fx = width * (0.25 + Math.random() * 0.5);
            const fy = height * (0.52 + Math.random() * 0.1);
            this.drawSimpleFish(ctx, fx, fy, 15, true);
        }

        // Mid-water fish
        ctx.fillStyle = '#F57C00';
        for(let i = 0; i < 4; i++) {
            const fx = width * (0.25 + Math.random() * 0.5);
            const fy = height * (0.67 + Math.random() * 0.1);
            this.drawSimpleFish(ctx, fx, fy, 12, false);
        }

        // Bottom feeders
        ctx.fillStyle = '#EF6C00';
        for(let i = 0; i < 3; i++) {
            const fx = width * (0.25 + Math.random() * 0.5);
            const fy = height * (0.83 + Math.random() * 0.05);
            this.drawSimpleFish(ctx, fx, fy, 10, false);
        }

        // Aquatic plants
        ctx.strokeStyle = '#4CAF50';
        ctx.lineWidth = 2;
        for(let i = 0; i < 5; i++) {
            const plantX = width * (0.2 + i * 0.12);
            ctx.beginPath();
            ctx.moveTo(plantX, height * 0.9);
            ctx.quadraticCurveTo(
                plantX + 5, height * 0.7,
                plantX + 10, height * 0.55
            );
            ctx.stroke();
            
            // Leaves
            ctx.fillStyle = '#66BB6A';
            ctx.beginPath();
            ctx.ellipse(plantX + 10, height * 0.55, 8, 6, 0, 0, Math.PI * 2);
            ctx.fill();
        }

        // Floating plants
        ctx.fillStyle = '#8BC34A';
        for(let i = 0; i < 4; i++) {
            const leafX = width * (0.3 + i * 0.15);
            ctx.beginPath();
            ctx.ellipse(leafX, height * 0.52, 12, 8, 0, 0, Math.PI * 2);
            ctx.fill();
        }

        // Aerator (bubbles)
        ctx.fillStyle = 'rgba(255, 255, 255, 0.6)';
        const aeratorX = width * 0.7;
        for(let i = 0; i < 8; i++) {
            const bubbleY = height * (0.85 - i * 0.04);
            const bubbleX = aeratorX + (Math.random() - 0.5) * 15;
            ctx.beginPath();
            ctx.arc(bubbleX, bubbleY, 2 + Math.random() * 3, 0, Math.PI * 2);
            ctx.fill();
        }

        // Water surface
        ctx.strokeStyle = '#FFFFFF';
        ctx.lineWidth = 2;
        ctx.globalAlpha = 0.5;
        ctx.beginPath();
        ctx.moveTo(width * 0.15, height * 0.5);
        for(let i = 0; i < 10; i++) {
            ctx.quadraticCurveTo(
                width * (0.15 + i * 0.07 + 0.035), height * (0.5 - 0.005),
                width * (0.15 + (i + 1) * 0.07), height * 0.5
            );
        }
        ctx.stroke();
        ctx.globalAlpha = 1;

        ctx.restore();
    }

    static drawSimpleFish(ctx, x, y, size, facingRight) {
        ctx.save();
        
        if(!facingRight) {
            ctx.scale(-1, 1);
            x = -x;
        }

        // Body
        ctx.beginPath();
        ctx.ellipse(x, y, size, size * 0.5, 0, 0, Math.PI * 2);
        ctx.fill();
        ctx.stroke();

        // Tail
        ctx.beginPath();
        ctx.moveTo(x - size, y);
        ctx.lineTo(x - size * 1.4, y - size * 0.4);
        ctx.lineTo(x - size * 1.4, y + size * 0.4);
        ctx.closePath();
        ctx.fill();
        ctx.stroke();

        // Eye
        ctx.fillStyle = '#000000';
        ctx.beginPath();
        ctx.arc(x + size * 0.5, y - size * 0.15, size * 0.1, 0, Math.PI * 2);
        ctx.fill();

        ctx.restore();
    }

    static drawCompostPit(ctx, x, y, width, height) {
        ctx.save();
        ctx.translate(x, y);

        // Pit walls
        ctx.fillStyle = '#6D4C41';
        ctx.fillRect(0, height * 0.2, width * 0.1, height * 0.8);
        ctx.fillRect(width * 0.9, height * 0.2, width * 0.1, height * 0.8);

        // Base
        ctx.fillRect(0, height * 0.9, width, height * 0.1);

        // Layers of organic material
        const layers = [
            { y: 0.85, color: '#8D6E63', label: 'Fresh material' },
            { y: 0.75, color: '#6D4C41', label: 'Decomposing' },
            { y: 0.65, color: '#5D4037', label: 'Partially decomposed' },
            { y: 0.55, color: '#4E342E', label: 'Well decomposed' },
            { y: 0.45, color: '#3E2723', label: 'Mature compost' }
        ];

        layers.forEach((layer, index) => {
            ctx.fillStyle = layer.color;
            ctx.fillRect(
                width * 0.1,
                height * layer.y,
                width * 0.8,
                height * 0.1
            );

            // Add texture
            ctx.fillStyle = index < 2 ? '#A1887F' : '#5D4037';
            for(let i = 0; i < 20; i++) {
                ctx.fillRect(
                    width * (0.1 + Math.random() * 0.8),
                    height * (layer.y + Math.random() * 0.1),
                    3, 2
                );
            }
        });

        // Green waste (visible in top layers)
        ctx.fillStyle = '#4CAF50';
        for(let i = 0; i < 10; i++) {
            ctx.fillRect(
                width * (0.15 + Math.random() * 0.7),
                height * (0.46 + Math.random() * 0.15),
                4, 6
            );
        }

        // Kitchen waste
        ctx.fillStyle = '#FF9800';
        for(let i = 0; i < 8; i++) {
            ctx.beginPath();
            ctx.arc(
                width * (0.15 + Math.random() * 0.7),
                height * (0.5 + Math.random() * 0.12),
                3,
                0, Math.PI * 2
            );
            ctx.fill();
        }

        // Air pockets/ventilation
        ctx.fillStyle = '#E3F2FD';
        for(let i = 0; i < 15; i++) {
            ctx.beginPath();
            ctx.arc(
                width * (0.15 + Math.random() * 0.7),
                height * (0.45 + Math.random() * 0.4),
                2 + Math.random() * 3,
                0, Math.PI * 2
            );
            ctx.fill();
        }

        // Ventilation pipes
        ctx.fillStyle = '#9E9E9E';
        const pipeCount = 3;
        for(let i = 0; i < pipeCount; i++) {
            const pipeX = width * (0.25 + i * 0.25);
            ctx.fillRect(pipeX, height * 0.45, width * 0.03, height * 0.45);
            
            // Holes in pipes
            ctx.fillStyle = '#FFFFFF';
            for(let j = 0; j < 6; j++) {
                ctx.beginPath();
                ctx.arc(
                    pipeX + width * 0.015,
                    height * (0.5 + j * 0.06),
                    2,
                    0, Math.PI * 2
                );
                ctx.fill();
            }
            ctx.fillStyle = '#9E9E9E';
        }

        // Worms (decomposers)
        ctx.strokeStyle = '#E91E63';
        ctx.lineWidth = 2;
        for(let i = 0; i < 5; i++) {
            const wx = width * (0.2 + Math.random() * 0.6);
            const wy = height * (0.55 + Math.random() * 0.25);
            ctx.beginPath();
            ctx.moveTo(wx, wy);
            ctx.quadraticCurveTo(
                wx + 8, wy + 5,
                wx + 15, wy
            );
            ctx.stroke();
        }

        // Temperature indicator
        ctx.fillStyle = '#FF5722';
        ctx.fillRect(width * 0.85, height * 0.3, width * 0.03, height * 0.15);
        ctx.fillStyle = '#FFFFFF';
        ctx.font = '10px Arial';
        ctx.textAlign = 'center';
        ctx.fillText('HEAT', width * 0.865, height * 0.27);

        // Moisture
        ctx.fillStyle = '#2196F3';
        for(let i = 0; i < 10; i++) {
            ctx.beginPath();
            ctx.arc(
                width * (0.2 + Math.random() * 0.6),
                height * (0.5 + Math.random() * 0.3),
                1.5,
                0, Math.PI * 2
            );
            ctx.fill();
        }

        // Cover (optional)
        ctx.fillStyle = '#795548';
        ctx.fillRect(width * 0.05, height * 0.4, width * 0.9, height * 0.03);

        ctx.restore();
    }
}

// ============================================================================
// CROSS-SECTION DIAGRAM RENDERER
// ============================================================================

class CrossSectionDiagramRenderer {
    constructor(canvas = null) {
        this.canvas = canvas;
        this.ctx = canvas ? canvas.getContext('2d') : null;
        this.defaultFont = 'Arial, sans-serif';
        this.defaultFontSize = 12;
    }

    // Rendering methods for each diagram type
    renderDiagram(key, x, y, width, height, options = {}) {
        if(!this.ctx) {
            throw new Error('Canvas context not initialized');
        }

        const {
            showLabels = true,
            title = '',
            backgroundColor = '#ffffff'
        } = options;

        // Clear and set background
        if(backgroundColor) {
            this.ctx.fillStyle = backgroundColor;
            this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
        }

        // Render title
        if(title) {
            this.ctx.save();
            this.ctx.font = 'bold 24px Arial';
            this.ctx.fillStyle = '#2C3E50';
            this.ctx.textAlign = 'center';
            this.ctx.fillText(title, this.canvas.width / 2, 40);
            this.ctx.restore();
        }

        // Route to appropriate rendering method
        switch(key) {
            // Biology - Plant Structures
            case 'dicotLeafCrossSection':
                CrossSectionShapes.drawDicotLeaf(this.ctx, x, y, width, height, options.showCellDetail);
                if(showLabels) this.addLeafLabels(x, y, width, height, 'dicot');
                break;
            case 'monocotLeafCrossSection':
                CrossSectionShapes.drawMonocotLeaf(this.ctx, x, y, width, height);
                if(showLabels) this.addLeafLabels(x, y, width, height, 'monocot');
                break;
            case 'rootTipCrossSection':
                CrossSectionShapes.drawRootTip(this.ctx, x, y, width, height, options.showZones);
                break;
            case 'dicotStemCrossSection':
                CrossSectionShapes.drawDicotStem(this.ctx, x, y, width, height);
                if(showLabels) this.addStemLabels(x, y, width, height, 'dicot');
                break;
            case 'monocotStemCrossSection':
                CrossSectionShapes.drawMonocotStem(this.ctx, x, y, width, height);
                if(showLabels) this.addStemLabels(x, y, width, height, 'monocot');
                break;
            case 'flowerOvaryCrossSection':
                CrossSectionShapes.drawFlowerOvary(this.ctx, x, y, width, height);
                break;
            case 'seedCrossSection':
                CrossSectionShapes.drawSeed(this.ctx, x, y, width, height, options.seedType || 'bean');
                break;
            case 'fruitCrossSection':
                CrossSectionShapes.drawFruit(this.ctx, x, y, width, height, options.fruitType || 'apple');
                break;

            // Biology - Animal Anatomy
            case 'brainCrossSection':
                CrossSectionShapes.drawBrain(this.ctx, x, y, width, height, options.plane || 'sagittal');
                break;
            case 'smallIntestineCrossSection':
                CrossSectionShapes.drawSmallIntestine(this.ctx, x, y, width, height, options.showVilli);
                break;
            case 'fishGillsCrossSection':
                CrossSectionShapes.drawFishGills(this.ctx, x, y, width, height);
                break;
            case 'insectThoraxCrossSection':
                CrossSectionShapes.drawInsectThorax(this.ctx, x, y, width, height);
                break;
            case 'flowerBudCrossSection':
                CrossSectionShapes.drawFlowerBud(this.ctx, x, y, width, height);
                break;

            // Geography
            case 'earthCrossSection':
                CrossSectionShapes.drawEarth(this.ctx, x, y, width, height, options.showDepths);
                break;
            case 'volcanoCrossSection':
                CrossSectionShapes.drawVolcano(this.ctx, x, y, width, height, options.showLavaFlow);
                break;
            case 'foldMountainCrossSection':
                CrossSectionShapes.drawFoldMountain(this.ctx, x, y, width, height);
                break;
            case 'faultLineCrossSection':
                CrossSectionShapes.drawFaultLine(this.ctx, x, y, width, height, options.faultType || 'normal');
                break;
            case 'riverValleyCrossSection':
                CrossSectionShapes.drawRiverValley(this.ctx, x, y, width, height, options.valleyType || 'v-shaped');
                break;
            case 'riverMeanderCrossSection':
                CrossSectionShapes.drawRiverMeander(this.ctx, x, y, width, height);
                break;

            // Agriculture
            case 'seedGerminationCrossSection':
                CrossSectionShapes.drawSeedGermination(this.ctx, x, y, width, height, options.showStages);
                break;
            case 'greenhouseCrossSection':
                CrossSectionShapes.drawGreenhouseCrossSection(this.ctx, x, y, width, height);
                break;
            case 'terraceFarmCrossSection':
                CrossSectionShapes.drawTerraceFarm(this.ctx, x, y, width, height);
                break;
            case 'soilProfileCrossSection':
                CrossSectionShapes.drawSoilProfile(this.ctx, x, y, width, height, options.showHorizons);
                break;
            case 'fishPondCrossSection':
                CrossSectionShapes.drawFishPond(this.ctx, x, y, width, height);
                break;
            case 'compostPitCrossSection':
                CrossSectionShapes.drawCompostPit(this.ctx, x, y, width, height);
                break;

            default:
                throw new Error(`Rendering for cross-section diagram '${key}' not implemented`);
        }
    }

    // Helper methods for labels
    addLeafLabels(x, y, width, height, type) {
        this.ctx.save();
        this.ctx.font = 'bold 11px Arial';
        this.ctx.fillStyle = '#000000';
        this.ctx.textAlign = 'left';

        if(type === 'dicot') {
            this.ctx.fillText('Cuticle', x + width + 10, y + height * 0.02);
            this.ctx.fillText('Upper Epidermis', x + width + 10, y + height * 0.06);
            this.ctx.fillText('Palisade Mesophyll', x + width + 10, y + height * 0.2);
            this.ctx.fillText('Spongy Mesophyll', x + width + 10, y + height * 0.5);
            this.ctx.fillText('Vascular Bundle', x + width + 10, y + height * 0.4);
            this.ctx.fillText('Lower Epidermis', x + width + 10, y + height * 0.94);
            this.ctx.fillText('Stomata', x + width + 10, y + height * 0.97);
        } else {
            this.ctx.fillText('Bulliform Cells', x + width + 10, y + height * 0.06);
            this.ctx.fillText('Mesophyll', x + width + 10, y + height * 0.5);
            this.ctx.fillText('Vascular Bundle', x + width + 10, y + height * 0.5);
            this.ctx.fillText('Bundle Sheath', x + width + 10, y + height * 0.55);
        }

        this.ctx.restore();
    }

    addStemLabels(x, y, width, height, type) {
        this.ctx.save();
        this.ctx.font = 'bold 11px Arial';
        this.ctx.fillStyle = '#000000';
        this.ctx.textAlign = 'center';

        const centerX = x + width / 2;
        const centerY = y + height / 2;

        if(type === 'dicot') {
            this.ctx.fillText('Epidermis', centerX, y + height * 0.98);
            this.ctx.fillText('Cortex', centerX - width * 0.35, centerY);
            this.ctx.fillText('Vascular Bundles', centerX + width * 0.35, centerY - height * 0.1);
            this.ctx.fillText('(arranged in ring)', centerX + width * 0.35, centerY - height * 0.05);
            this.ctx.fillText('Pith', centerX, centerY);
            this.ctx.fillText('Xylem', centerX + width * 0.28, centerY - height * 0.18);
            this.ctx.fillText('Phloem', centerX + width * 0.22, centerY - height * 0.25);
        } else {
            this.ctx.fillText('Epidermis', centerX, y + height * 0.98);
            this.ctx.fillText('Ground Tissue', centerX - width * 0.3, centerY);
            this.ctx.fillText('Scattered Vascular Bundles', centerX, y - 10);
        }

        this.ctx.restore();
    }

    clear() {
        if(this.ctx) {
            this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        }
    }
}


export { CrossSectionDiagramsRegistry,
CrossSectionDiagramRenderer,
CrossSectionShapes};

/**

// ============================================================================
// ADD THIS TO EnhancedSpreadsheetWorkbook CLASS
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
    // UNIFIED DIAGRAM MANAGEMENT (Anatomical + Cross-Section + Stereochemistry)
    // ========================================================================

    // Get all available diagrams
    getAllAvailableDiagrams() {
        return {
            anatomical: this.getAvailableAnatomicalDiagrams(),
            crossSection: this.getAvailableCrossSectionDiagrams(),
            stereochemistry: this.getAvailableStereochemistryDiagrams()
        };
    }

    // Search all diagrams
    searchAllDiagrams(query) {
        return {
            anatomical: this.searchAnatomicalDiagrams(query),
            crossSection: this.searchCrossSectionDiagrams(query),
            stereochemistry: this.searchStereochemistryDiagrams(query)
        };
    }

    // Get all diagram statistics
    getAllDiagramStatistics() {
        const anatomicalStats = this.getAnatomicalDiagramStatistics();
        const crossSectionStats = this.getCrossSectionDiagramStatistics();
        const stereochemStats = this.getStereochemistryDiagramStatistics();

        return {
            anatomical: anatomicalStats,
            crossSection: crossSectionStats,
            stereochemistry: stereochemStats,
            combined: {
                totalAvailable: 
                    anatomicalStats.totalDiagrams + 
                    crossSectionStats.totalAvailable + 
                    stereochemStats.totalAvailable,
                totalInWorkbook: 
                    this.anatomicalDiagrams.length + 
                    this.crossSectionDiagrams.length + 
                    this.stereochemistryDiagrams.length
            }
        };
    }

    // List all diagrams by type
    listAllDiagrams() {
        return {
            anatomical: this.listAnatomicalDiagrams(),
            crossSection: this.listCrossSectionDiagrams(),
            stereochemistry: this.listStereochemistryDiagrams(),
            total: 
                this.anatomicalDiagrams.length + 
                this.crossSectionDiagrams.length + 
                this.stereochemistryDiagrams.length
        };
    }

    // Get all diagram suggestions
    getAllDiagramSuggestions() {
        return {
            anatomical: this.suggestAnatomicalDiagrams(),
            crossSection: this.suggestCrossSectionDiagrams(),
            stereochemistry: this.suggestStereochemistryDiagrams()
        };
    }

    // Render all diagrams (anatomical + cross-section + stereochemistry)
    renderAllDiagrams() {
        const results = {
            anatomical: this.renderAllAnatomicalDiagrams(),
            crossSection: this.renderAllCrossSectionDiagrams(),
            stereochemistry: this.renderAllStereochemistryDiagrams()
        };

        return {
            ...results,
            summary: {
                anatomicalRendered: results.anatomical.filter(r => !r.error).length,
                crossSectionRendered: results.crossSection.filter(r => !r.error).length,
                stereochemistryRendered: results.stereochemistry.filter(r => !r.error).length,
                totalRendered: 
                    results.anatomical.filter(r => !r.error).length + 
                    results.crossSection.filter(r => !r.error).length +
                    results.stereochemistry.filter(r => !r.error).length,
                totalErrors: 
                    results.anatomical.filter(r => r.error).length + 
                    results.crossSection.filter(r => r.error).length +
                    results.stereochemistry.filter(r => r.error).length
            }
        };
    }

    // Export all diagrams organized by type
    exportAllDiagramsToFolder(folderPath, separateByType = true) {
        if (!fs.existsSync(folderPath)) {
            fs.mkdirSync(folderPath, { recursive: true });
        }

        const results = {
            anatomical: [],
            crossSection: [],
            stereochemistry: []
        };

        if (separateByType) {
            // Create subfolders
            const anatomicalFolder = `${folderPath}/anatomical`;
            const crossSectionFolder = `${folderPath}/cross-section`;
            const stereochemFolder = `${folderPath}/stereochemistry`;
            
            [anatomicalFolder, crossSectionFolder, stereochemFolder].forEach(folder => {
                if (!fs.existsSync(folder)) {
                    fs.mkdirSync(folder, { recursive: true });
                }
            });

            // Export anatomical diagrams
            const anatomicalExport = this.exportAnatomicalDiagramsToFolder(anatomicalFolder);
            results.anatomical = anatomicalExport.results;

            // Export cross-section diagrams
            const crossSectionExport = this.exportCrossSectionDiagramsToFolder(crossSectionFolder);
            results.crossSection = crossSectionExport.results;

            // Export stereochemistry diagrams
            const stereochemExport = this.exportStereochemistryDiagramsToFolder(stereochemFolder);
            results.stereochemistry = stereochemExport.results;
        } else {
            // Export all to same folder
            const anatomicalExport = this.exportAnatomicalDiagramsToFolder(folderPath);
            results.anatomical = anatomicalExport.results;

            const crossSectionExport = this.exportCrossSectionDiagramsToFolder(folderPath);
            results.crossSection = crossSectionExport.results;

            const stereochemExport = this.exportStereochemistryDiagramsToFolder(folderPath);
            results.stereochemistry = stereochemExport.results;
        }

        return {
            folder: folderPath,
            separatedByType: separateByType,
            results,
            summary: {
                anatomicalExported: results.anatomical.filter(r => !r.error).length,
                crossSectionExported: results.crossSection.filter(r => !r.error).length,
                stereochemistryExported: results.stereochemistry.filter(r => !r.error).length,
                totalExported: 
                    results.anatomical.filter(r => !r.error).length + 
                    results.crossSection.filter(r => !r.error).length +
                    results.stereochemistry.filter(r => !r.error).length,
                totalErrors: 
                    results.anatomical.filter(r => r.error).length + 
                    results.crossSection.filter(r => r.error).length +
                    results.stereochemistry.filter(r => r.error).length
            }
        };
    }

    // Batch add diagrams by category (all three types)
    addDiagramsByCategory(category, diagramType = 'all', options = {}) {
        const results = {
            anatomical: [],
            crossSection: [],
            stereochemistry: []
        };

        if (diagramType === 'anatomical' || diagramType === 'all') {
            try {
                results.anatomical = this.addAnatomicalDiagramsByCategory(category, options);
            } catch (error) {
                results.anatomical = [{ error: error.message, category, type: 'anatomical' }];
            }
        }

        if (diagramType === 'crossSection' || diagramType === 'all') {
            try {
                results.crossSection = this.addCrossSectionDiagramsByCategory(category, options);
            } catch (error) {
                results.crossSection = [{ error: error.message, category, type: 'crossSection' }];
            }
        }

        if (diagramType === 'stereochemistry' || diagramType === 'all') {
            try {
                results.stereochemistry = this.addStereochemistryDiagramsByCategory(category, options);
            } catch (error) {
                results.stereochemistry = [{ error: error.message, category, type: 'stereochemistry' }];
            }
        }

        return results;
    }

    // Generate comprehensive diagram guide
    generateComprehensiveDiagramGuide() {
        const guide = {
            title: 'Complete Scientific Diagram Reference',
            generatedAt: new Date(),
            workbook: this.sheetName,
            anatomical: {
                title: 'Anatomical Diagrams',
                categories: {},
                totalAvailable: 0
            },
            crossSection: {
                title: 'Cross-Section Diagrams',
                categories: {},
                totalAvailable: 0
            },
            stereochemistry: {
                title: 'Stereochemistry Diagrams',
                categories: {},
                totalAvailable: 0
            },
            suggestions: this.getAllDiagramSuggestions(),
            inWorkbook: this.listAllDiagrams()
        };

        // Anatomical diagrams
        const anatomicalCategories = AnatomicalDiagramsRegistry.getAllCategories();
        anatomicalCategories.forEach(category => {
            const diagrams = AnatomicalDiagramsRegistry.getDiagramsByCategory(category);
            guide.anatomical.categories[category] = Object.entries(diagrams).map(([key, diagram]) => ({
                key,
                name: diagram.name,
                description: diagram.description,
                usage: diagram.usage,
                examples: diagram.examples
            }));
            guide.anatomical.totalAvailable += Object.keys(diagrams).length;
        });

        // Cross-section diagrams
        const crossSectionCategories = CrossSectionDiagramsRegistry.getAllCategories();
        crossSectionCategories.forEach(category => {
            const diagrams = CrossSectionDiagramsRegistry.getDiagramsByCategory(category);
            guide.crossSection.categories[category] = Object.entries(diagrams).map(([key, diagram]) => ({
                key,
                name: diagram.name,
                description: diagram.description,
                usage: diagram.usage,
                examples: diagram.examples
            }));
            guide.crossSection.totalAvailable += Object.keys(diagrams).length;
        });

        // Stereochemistry diagrams
        const stereochemCategories = StereochemistryDiagramsRegistry.getAllCategories();
        stereochemCategories.forEach(category => {
            const diagrams = StereochemistryDiagramsRegistry.getDiagramsByCategory(category);
            guide.stereochemistry.categories[category] = Object.entries(diagrams).map(([key, diagram]) => ({
                key,
                name: diagram.name,
                formula: diagram.formula,
                geometry: diagram.geometry,
                description: diagram.description,
                usage: diagram.usage,
                bondAngles: diagram.bondAngles
            }));
            guide.stereochemistry.totalAvailable += Object.keys(diagrams).length;
        });

        guide.summary = {
            totalAvailableDiagrams: 
                guide.anatomical.totalAvailable + 
                guide.crossSection.totalAvailable +
                guide.stereochemistry.totalAvailable,
            anatomicalInWorkbook: this.anatomicalDiagrams.length,
            crossSectionInWorkbook: this.crossSectionDiagrams.length,
            stereochemistryInWorkbook: this.stereochemistryDiagrams.length,
            totalInWorkbook: 
                this.anatomicalDiagrams.length + 
                this.crossSectionDiagrams.length +
                this.stereochemistryDiagrams.length
        };

        return guide;
    }

    // Generate unified report with all visualizations
    generateUnifiedVisualizationReport() {
        const baseReport = this.generateReport();
        const diagramsList = this.listAllDiagrams();
        const stats = this.getAllDiagramStatistics();

        return {
            ...baseReport,
            visualizations: {
                charts: {
                    count: this.charts.length,
                    charts: this.charts.map((chart, index) => ({
                        index,
                        type: chart.type,
                        title: chart.title
                    }))
                },
                anatomicalDiagrams: {
                    count: diagramsList.anatomical.length,
                    diagrams: diagramsList.anatomical
                },
                crossSectionDiagrams: {
                    count: diagramsList.crossSection.length,
                    diagrams: diagramsList.crossSection
                },
                stereochemistryDiagrams: {
                    count: diagramsList.stereochemistry.length,
                    diagrams: diagramsList.stereochemistry
                },
                summary: {
                    totalCharts: this.charts.length,
                    totalAnatomical: diagramsList.anatomical.length,
                    totalCrossSection: diagramsList.crossSection.length,
                    totalStereochemistry: diagramsList.stereochemistry.length,
                    totalDiagrams: diagramsList.total,
                    totalVisualizations: this.charts.length + diagramsList.total
                }
            },
            statistics: stats,
            suggestions: this.getAllDiagramSuggestions()
        };
    }

    // Quick add: Suggest and add top diagrams based on data
    quickAddSuggestedDiagrams(maxDiagrams = 5, diagramType = 'all') {
        const results = {
            anatomical: [],
            crossSection: [],
            stereochemistry: []
        };

        if (diagramType === 'anatomical' || diagramType === 'all') {
            const anatomicalSuggestions = this.suggestAnatomicalDiagrams().slice(0, maxDiagrams);
            anatomicalSuggestions.forEach(suggestion => {
                try {
                    const diagram = this.addAnatomicalDiagram({ key: suggestion.key });
                    results.anatomical.push({
                        ...diagram,
                        reason: suggestion.reason
                    });
                } catch (error) {
                    results.anatomical.push({
                        key: suggestion.key,
                        error: error.message
                    });
                }
            });
        }

        if (diagramType === 'crossSection' || diagramType === 'all') {
            const crossSectionSuggestions = this.suggestCrossSectionDiagrams().slice(0, maxDiagrams);
            crossSectionSuggestions.forEach(suggestion => {
                try {
                    const diagram = this.addCrossSectionDiagram({ key: suggestion.key });
                    results.crossSection.push({
                        ...diagram,
                        reason: suggestion.reason
                    });
                } catch (error) {
                    results.crossSection.push({
                        key: suggestion.key,
                        error: error.message
                    });
                }
            });
        }

        if (diagramType === 'stereochemistry' || diagramType === 'all') {
            const stereochemSuggestions = this.suggestStereochemistryDiagrams().slice(0, maxDiagrams);
            stereochemSuggestions.forEach(suggestion => {
                try {
                    const diagram = this.addStereochemistryDiagram({ key: suggestion.key });
                    results.stereochemistry.push({
                        ...diagram,
                        reason: suggestion.reason
                    });
                } catch (error) {
                    results.stereochemistry.push({
                        key: suggestion.key,
                        error: error.message
                    });
                }
            });
        }

        return results;
    }

    // Get diagram by ID (searches all three types)
    getDiagramById(diagramId) {
        const anatomical = this.anatomicalDiagrams.find(d => d.id === diagramId);
        if (anatomical) return { ...anatomical, type: 'anatomical' };

        const crossSection = this.crossSectionDiagrams.find(d => d.id === diagramId);
        if (crossSection) return { ...crossSection, type: 'crossSection' };

        const stereochemistry = this.stereochemistryDiagrams.find(d => d.id === diagramId);
        if (stereochemistry) return { ...stereochemistry, type: 'stereochemistry' };

        return null;
    }

    // Remove diagram by ID (searches all three types)
    removeDiagramById(diagramId) {
        const anatomicalIndex = this.anatomicalDiagrams.findIndex(d => d.id === diagramId);
        if (anatomicalIndex !== -1) {
            return this.removeAnatomicalDiagram(anatomicalIndex);
        }

        const crossSectionIndex = this.crossSectionDiagrams.findIndex(d => d.id === diagramId);
        if (crossSectionIndex !== -1) {
            return this.removeCrossSectionDiagram(crossSectionIndex);
        }

        const stereochemIndex = this.stereochemistryDiagrams.findIndex(d => d.id === diagramId);
        if (stereochemIndex !== -1) {
            return this.removeStereochemistryDiagram(stereochemIndex);
        }

        throw new Error(`Diagram with ID ${diagramId} not found`);
    }

    // Get diagram by identifier (searches all registries)
    getDiagramByIdentifier(identifier) {
        // Try as key in stereochemistry first (for formula support)
        let diagram = StereochemistryDiagramsRegistry.getDiagram(identifier);
        if (diagram) return { type: 'stereochemistry', diagram };

        // Try as formula
        const byFormula = StereochemistryDiagramsRegistry.findByFormula(identifier);
        if (Object.keys(byFormula).length > 0) {
            return { type: 'stereochemistry', diagrams: byFormula };
        }

        // Try anatomical
        diagram = AnatomicalDiagramsRegistry.getDiagram(identifier);
        if (diagram) return { type: 'anatomical', diagram };

        // Try cross-section
        diagram = CrossSectionDiagramsRegistry.getDiagram(identifier);
        if (diagram) return { type: 'crossSection', diagram };

        return { error: 'Diagram not found' };
    }

    // Generate complete diagram catalog
    generateDiagramCatalog() {
        const catalog = {
            metadata: {
                generated: new Date().toISOString(),
                workbook: this.sheetName,
                author: this.author
            },
            anatomical: {
                available: AnatomicalDiagramsRegistry.getAllDiagrams().length,
                inWorkbook: this.anatomicalDiagrams.length,
                categories: AnatomicalDiagramsRegistry.getAllCategories()
            },
            crossSection: {
                available: CrossSectionDiagramsRegistry.getAllDiagrams().length,
                inWorkbook: this.crossSectionDiagrams.length,
                categories: CrossSectionDiagramsRegistry.getAllCategories()
            },
            stereochemistry: {
                available: StereochemistryDiagramsRegistry.getAllDiagrams().length,
                inWorkbook: this.stereochemistryDiagrams.length,
                categories: StereochemistryDiagramsRegistry.getAllCategories(),
                formulas: Object.values(StereochemistryDiagramsRegistry.diagrams).map(d => d.formula)
            },
            totalDiagrams: {
                available: 
                    AnatomicalDiagramsRegistry.getAllDiagrams().length +
                    CrossSectionDiagramsRegistry.getAllDiagrams().length +
                    StereochemistryDiagramsRegistry.getAllDiagrams().length,
                inWorkbook: 
                    this.anatomicalDiagrams.length +
                    this.crossSectionDiagrams.length +
                    this.stereochemistryDiagrams.length
            }
        };

        return catalog;
    }

    // Count diagrams by type
    getDiagramCounts() {
        return {
            anatomical: this.anatomicalDiagrams.length,
            crossSection: this.crossSectionDiagrams.length,
            stereochemistry: this.stereochemistryDiagrams.length,
            total: 
                this.anatomicalDiagrams.length + 
                this.crossSectionDiagrams.length + 
                this.stereochemistryDiagrams.length
        };
    }

    // Check if workbook has diagrams of specific type
    hasDiagramsOfType(type) {
        const counts = this.getDiagramCounts();
        switch(type) {
            case 'anatomical':
                return counts.anatomical > 0;
            case 'crossSection':
                return counts.crossSection > 0;
            case 'stereochemistry':
                return counts.stereochemistry > 0;
            case 'any':
                return counts.total > 0;
            default:
                return false;
        }
    }

    // Get all diagrams of specific category across all types
    getAllDiagramsByCategory(category) {
        const results = {
            anatomical: [],
            crossSection: [],
            stereochemistry: []
        };

        // Check anatomical
        const anatomicalInCategory = AnatomicalDiagramsRegistry.getDiagramsByCategory(category);
        results.anatomical = this.anatomicalDiagrams.filter(d => 
            Object.keys(anatomicalInCategory).includes(d.key)
        );

        // Check cross-section
        const crossSectionInCategory = CrossSectionDiagramsRegistry.getDiagramsByCategory(category);
        results.crossSection = this.crossSectionDiagrams.filter(d => 
            Object.keys(crossSectionInCategory).includes(d.key)
        );

        // Check stereochemistry
        const stereochemInCategory = StereochemistryDiagramsRegistry.getDiagramsByCategory(category);
        results.stereochemistry = this.stereochemistryDiagrams.filter(d => 
            Object.keys(stereochemInCategory).includes(d.key)
        );

        return results;
    }

    // Export diagrams with comprehensive metadata
    exportDiagramsWithFullMetadata(folderPath) {
        if (!fs.existsSync(folderPath)) {
            fs.mkdirSync(folderPath, { recursive: true });
        }

        const results = {
            anatomical: [],
            crossSection: [],
            stereochemistry: []
        };

        const metadata = {
            exportDate: new Date().toISOString(),
            workbook: this.sheetName,
            author: this.author,
            diagrams: {
                anatomical: [],
                crossSection: [],
                stereochemistry: []
            }
        };

        // Export anatomical
        this.anatomicalDiagrams.forEach((diagram, index) => {
            try {
                const originalFilename = diagram.filename;
                diagram.filename = `${folderPath}/anatomical_${path.basename(diagram.filename)}`;
                
                const result = this.renderAnatomicalDiagramToPNG(index);
                results.anatomical.push(result);
                
                const diagramInfo = AnatomicalDiagramsRegistry.getDiagram(diagram.key);
                metadata.diagrams.anatomical.push({
                    filename: path.basename(diagram.filename),
                    name: diagramInfo.name,
                    category: diagramInfo.category,
                    description: diagramInfo.description
                });
                
                diagram.filename = originalFilename;
            } catch (error) {
                results.anatomical.push({ error: error.message, diagram: diagram.key });
            }
        });

        // Export cross-section
        this.crossSectionDiagrams.forEach((diagram, index) => {
            try {
                const originalFilename = diagram.filename;
                diagram.filename = `${folderPath}/crosssection_${path.basename(diagram.filename)}`;
                
                const result = this.renderCrossSectionDiagramToPNG(index);
                results.crossSection.push(result);
                
                const diagramInfo = CrossSectionDiagramsRegistry.getDiagram(diagram.key);
                metadata.diagrams.crossSection.push({
                    filename: path.basename(diagram.filename),
                    name: diagramInfo.name,
                    category: diagramInfo.category,
                    description: diagramInfo.description
                });
                
                diagram.filename = originalFilename;
            } catch (error) {
                results.crossSection.push({ error: error.message, diagram: diagram.key });
            }
        });

        // Export stereochemistry
        this.stereochemistryDiagrams.forEach((diagram, index) => {
            try {
                const originalFilename = diagram.filename;
                diagram.filename = `${folderPath}/molecule_${path.basename(diagram.filename)}`;
                
                const result = this.renderStereochemistryDiagramToPNG(index);
                results.stereochemistry.push(result);
                
                const diagramInfo = StereochemistryDiagramsRegistry.getDiagram(diagram.key);
                metadata.diagrams.stereochemistry.push({
                    filename: path.basename(diagram.filename),
                    name: diagramInfo.name,
                    formula: diagramInfo.formula,
                    geometry: diagramInfo.geometry,
                    bondAngles: diagramInfo.bondAngles,
                    category: diagramInfo.category
                });
                
                diagram.filename = originalFilename;
            } catch (error) {
                results.stereochemistry.push({ error: error.message, diagram: diagram.key });
            }
        });

        // Write metadata JSON file
        const metadataPath = `${folderPath}/complete_metadata.json`;
        fs.writeFileSync(metadataPath, JSON.stringify(metadata, null, 2));

        return {
            folder: folderPath,
            results,
            metadataFile: metadataPath,
            summary: {
                anatomicalExported: results.anatomical.filter(r => !r.error).length,
                crossSectionExported: results.crossSection.filter(r => !r.error).length,
                stereochemistryExported: results.stereochemistry.filter(r => !r.error).length,
                totalExported: 
                    results.anatomical.filter(r => !r.error).length +
                    results.crossSection.filter(r => !r.error).length +
                    results.stereochemistry.filter(r => !r.error).length,
                totalErrors: 
                    results.anatomical.filter(r => r.error).length +
                    results.crossSection.filter(r => r.error).length +
                    results.stereochemistry.filter(r => r.error).length
            }
        };
    }

    // Generate comparison report for all diagram types
    generateDiagramTypeComparisonReport() {
        return {
            title: 'Diagram Type Comparison Report',
            workbook: this.sheetName,
            generatedAt: new Date().toISOString(),
            anatomical: {
                count: this.anatomicalDiagrams.length,
                availableCount: AnatomicalDiagramsRegistry.getAllDiagrams().length,
                categories: AnatomicalDiagramsRegistry.getAllCategories(),
                utilizationRate: this.anatomicalDiagrams.length / AnatomicalDiagramsRegistry.getAllDiagrams().length
            },
            crossSection: {
                count: this.crossSectionDiagrams.length,
                availableCount: CrossSectionDiagramsRegistry.getAllDiagrams().length,
                categories: CrossSectionDiagramsRegistry.getAllCategories(),
                utilizationRate: this.crossSectionDiagrams.length / CrossSectionDiagramsRegistry.getAllDiagrams().length
            },
            stereochemistry: {
                count: this.stereochemistryDiagrams.length,
                availableCount: StereochemistryDiagramsRegistry.getAllDiagrams().length,
                categories: StereochemistryDiagramsRegistry.getAllCategories(),
                formulas: this.stereochemistryDiagrams.map(d => d.formula),
                utilizationRate: this.stereochemistryDiagrams.length / StereochemistryDiagramsRegistry.getAllDiagrams().length
            },
            summary: {
                totalDiagrams: 
                    this.anatomicalDiagrams.length + 
                    this.crossSectionDiagrams.length + 
                    this.stereochemistryDiagrams.length,
                totalAvailable: 
                    AnatomicalDiagramsRegistry.getAllDiagrams().length +
                    CrossSectionDiagramsRegistry.getAllDiagrams().length +
                    StereochemistryDiagramsRegistry.getAllDiagrams().length,
                overallUtilizationRate: 
                    (this.anatomicalDiagrams.length + this.crossSectionDiagrams.length + this.stereochemistryDiagrams.length) /
                    (AnatomicalDiagramsRegistry.getAllDiagrams().length + CrossSectionDiagramsRegistry.getAllDiagrams().length + StereochemistryDiagramsRegistry.getAllDiagrams().length)
            }
        };
    }

    // Clear all diagrams of specific type
    clearDiagramsByType(type) {
        const removed = {
            anatomical: 0,
            crossSection: 0,
            stereochemistry: 0
        };

        switch(type) {
            case 'anatomical':
                removed.anatomical = this.anatomicalDiagrams.length;
                this.anatomicalDiagrams = [];
                this.addToHistory(`Cleared all anatomical diagrams (${removed.anatomical})`);
                break;
            case 'crossSection':
                removed.crossSection = this.crossSectionDiagrams.length;
                this.crossSectionDiagrams = [];
                this.addToHistory(`Cleared all cross-section diagrams (${removed.crossSection})`);
                break;
            case 'stereochemistry':
                removed.stereochemistry = this.stereochemistryDiagrams.length;
                this.stereochemistryDiagrams = [];
                this.addToHistory(`Cleared all stereochemistry diagrams (${removed.stereochemistry})`);
                break;
            case 'all':
                removed.anatomical = this.anatomicalDiagrams.length;
                removed.crossSection = this.crossSectionDiagrams.length;
                removed.stereochemistry = this.stereochemistryDiagrams.length;
                this.anatomicalDiagrams = [];
                this.crossSectionDiagrams = [];
                this.stereochemistryDiagrams = [];
                this.addToHistory(`Cleared all diagrams (${removed.anatomical + removed.crossSection + removed.stereochemistry})`);
                break;
            default:
                throw new Error(`Invalid diagram type: ${type}`);
        }

        return removed;
    }

    // Get comprehensive workbook summary
    getWorkbookSummary() {
        return {
            metadata: {
                name: this.sheetName,
                created: this.createdDate,
                lastModified: this.lastModified,
                author: this.author
            },
            data: {
                rows: this.data.length,
                columns: this.headers.length,
                headers: this.headers
            },
            visualizations: {
                charts: this.charts.length,
                diagrams: {
                    anatomical: this.anatomicalDiagrams.length,
                    crossSection: this.crossSectionDiagrams.length,
                    stereochemistry: this.stereochemistryDiagrams.length,
                    total: this.getDiagramCounts().total
                }
            },
            history: {
                entries: this.history.length,
                lastAction: this.history[this.history.length - 1] || null
            }
        };
    }


  // ========================================================================
    // CROSS-SECTION DIAGRAM MANAGEMENT METHODS
    // ========================================================================

    // Get available cross-section diagrams
   // ========================================================================
    // CROSS-SECTION DIAGRAM MANAGEMENT METHODS
    // ========================================================================

    // Get available cross-section diagrams
    getAvailableCrossSectionDiagrams() {
        const diagrams = {};
        const categories = CrossSectionDiagramsRegistry.getAllCategories();

        categories.forEach(category => {
            diagrams[category] = CrossSectionDiagramsRegistry.getDiagramsByCategory(category);
        });

        return diagrams;
    }

    // Get cross-section diagram suggestions based on context
    suggestCrossSectionDiagrams(context = null) {
        const suggestions = [];

        // Check headers for relevant keywords
        const hasBotany = this.headers.some(h => 
            /plant|leaf|stem|root|seed|fruit|flower|botany/i.test(h)
        );
        
        const hasZoology = this.headers.some(h => 
            /animal|insect|fish|brain|intestine|gill|zoology/i.test(h)
        );
        
        const hasGeography = this.headers.some(h => 
            /earth|mountain|volcano|river|valley|soil|glacier|coast|geology|landform/i.test(h)
        );

        const hasAgriculture = this.headers.some(h => 
            /farm|crop|agriculture|irrigation|greenhouse|compost|pond|cultivat/i.test(h)
        );

        // Add suggestions based on context
        if (hasBotany) {
            suggestions.push(
                { key: 'dicotLeafCrossSection', priority: 10, reason: 'Plant anatomy data detected' },
                { key: 'dicotStemCrossSection', priority: 9, reason: 'Plant structure context' },
                { key: 'rootTipCrossSection', priority: 8, reason: 'Plant growth data' },
                { key: 'seedCrossSection', priority: 7, reason: 'Plant reproduction context' }
            );
        }

        if (hasZoology) {
            suggestions.push(
                { key: 'brainCrossSection', priority: 10, reason: 'Animal anatomy detected' },
                { key: 'smallIntestineCrossSection', priority: 9, reason: 'Digestive system context' },
                { key: 'fishGillsCrossSection', priority: 8, reason: 'Aquatic anatomy' },
                { key: 'insectThoraxCrossSection', priority: 7, reason: 'Invertebrate anatomy' }
            );
        }

        if (hasGeography) {
            suggestions.push(
                { key: 'earthCrossSection', priority: 10, reason: 'Geological data detected' },
                { key: 'volcanoCrossSection', priority: 9, reason: 'Volcanic/geological context' },
                { key: 'riverValleyCrossSection', priority: 8, reason: 'Landform data' },
                { key: 'soilProfileCrossSection', priority: 7, reason: 'Soil science context' }
            );
        }

        if (hasAgriculture) {
            suggestions.push(
                { key: 'greenhouseCrossSection', priority: 10, reason: 'Agricultural structure detected' },
                { key: 'soilProfileCrossSection', priority: 9, reason: 'Soil/cultivation data' },
                { key: 'terraceFarmCrossSection', priority: 8, reason: 'Farming systems context' },
                { key: 'fishPondCrossSection', priority: 7, reason: 'Aquaculture data' }
            );
        }

        // General suggestions if no specific context
        if (suggestions.length === 0) {
            suggestions.push(
                { key: 'dicotLeafCrossSection', priority: 7, reason: 'Popular biology diagram' },
                { key: 'earthCrossSection', priority: 6, reason: 'Earth science education' },
                { key: 'soilProfileCrossSection', priority: 5, reason: 'Environmental science' }
            );
        }

        return suggestions.sort((a, b) => b.priority - a.priority);
    }

    // Get cross-section diagram help
    getCrossSectionDiagramHelp(diagramKey) {
        const diagram = CrossSectionDiagramsRegistry.getDiagram(diagramKey);
        if (!diagram) {
            return { error: 'Cross-section diagram not found' };
        }

        return {
            name: diagram.name,
            category: diagram.category,
            description: diagram.description,
            usage: diagram.usage,
            examples: diagram.examples,
            dataRequired: diagram.dataRequired,
            defaultOptions: diagram.defaultOptions
        };
    }

    // Add cross-section diagram to workbook
    addCrossSectionDiagram(diagramConfig) {
        const {
            key,
            title = null,
            options = {},
            filename = null
        } = diagramConfig;

        // Validate diagram exists
        const diagram = CrossSectionDiagramsRegistry.getDiagram(key);
        if (!diagram) {
            throw new Error(`Cross-section diagram '${key}' not found`);
        }

        // Merge options
        const mergedOptions = { ...diagram.defaultOptions, ...options };
        if (title) mergedOptions.title = title;

        // Store diagram config
        const diagramObj = {
            id: `crosssection_${this.crossSectionDiagrams.length + 1}`,
            key,
            type: 'crossSection',
            title: mergedOptions.title,
            options: mergedOptions,
            filename: filename || `${this.sheetName}_${key}_${Date.now()}.png`,
            createdAt: new Date(),
            category: diagram.category
        };

        this.crossSectionDiagrams.push(diagramObj);
        this.addToHistory(`Added cross-section diagram: ${diagram.name}`);

        return diagramObj;
    }

    // Render cross-section diagram to PNG
    renderCrossSectionDiagramToPNG(diagramIndex) {
        if (diagramIndex < 0 || diagramIndex >= this.crossSectionDiagrams.length) {
            throw new Error(`Cross-section diagram index ${diagramIndex} out of range`);
        }

        const diagramConfig = this.crossSectionDiagrams[diagramIndex];
        
        const width = diagramConfig.options.width || 800;
        const height = diagramConfig.options.height || 600;
        const canvas = createCanvas(width, height);
        const ctx = canvas.getContext('2d');

        // Update renderer's canvas
        this.crossSectionRenderer.canvas = canvas;
        this.crossSectionRenderer.ctx = ctx;

        // Render the diagram
        this.crossSectionRenderer.renderDiagram(
            diagramConfig.key,
            50,
            80,
            width - 100,
            height - 100,
            diagramConfig.options
        );

        // Save to file
        const buffer = canvas.toBuffer('image/png');
        fs.writeFileSync(diagramConfig.filename, buffer);

        return {
            id: diagramConfig.id,
            filename: diagramConfig.filename,
            size: buffer.length,
            category: diagramConfig.category,
            type: 'crossSection'
        };
    }

    // Render all cross-section diagrams
    renderAllCrossSectionDiagrams() {
        const results = [];

        this.crossSectionDiagrams.forEach((_, index) => {
            try {
                const result = this.renderCrossSectionDiagramToPNG(index);
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

    // Get cross-section diagram statistics
    getCrossSectionDiagramStatistics() {
        const stats = CrossSectionDiagramsRegistry.getDiagramStats();
        return {
            totalAvailable: Object.values(stats).reduce((sum, cat) => sum + cat.count, 0),
            byCategory: stats,
            diagramsInWorkbook: this.crossSectionDiagrams.length
        };
    }

    // Search cross-section diagrams
    searchCrossSectionDiagrams(query) {
        return CrossSectionDiagramsRegistry.searchDiagrams(query);
    }

    // List all cross-section diagrams in workbook
    listCrossSectionDiagrams() {
        return this.crossSectionDiagrams.map((diagram, index) => ({
            index,
            id: diagram.id,
            name: diagram.title,
            type: CrossSectionDiagramsRegistry.getDiagram(diagram.key).name,
            category: diagram.category,
            filename: diagram.filename,
            created: diagram.createdAt
        }));
    }

    // Remove cross-section diagram
    removeCrossSectionDiagram(diagramIndex) {
        if (diagramIndex < 0 || diagramIndex >= this.crossSectionDiagrams.length) {
            throw new Error(`Cross-section diagram index ${diagramIndex} out of range`);
        }

        const removed = this.crossSectionDiagrams.splice(diagramIndex, 1);
        this.addToHistory(`Removed cross-section diagram: ${removed[0].title}`);
        return removed[0];
    }

    // Update cross-section diagram
    updateCrossSectionDiagram(diagramIndex, updates) {
        if (diagramIndex < 0 || diagramIndex >= this.crossSectionDiagrams.length) {
            throw new Error(`Cross-section diagram index ${diagramIndex} out of range`);
        }

        const diagram = this.crossSectionDiagrams[diagramIndex];
        
        if (updates.title) diagram.title = updates.title;
        if (updates.options) {
            diagram.options = { ...diagram.options, ...updates.options };
        }

        this.addToHistory(`Updated cross-section diagram: ${diagram.title}`);
        return diagram;
    }

    // Batch add cross-section diagrams by category
    addCrossSectionDiagramsByCategory(category, options = {}) {
        const diagrams = CrossSectionDiagramsRegistry.getDiagramsByCategory(category);
        const results = [];

        Object.keys(diagrams).forEach(key => {
            try {
                const result = this.addCrossSectionDiagram({
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

    // Export cross-section diagrams to a folder
    exportCrossSectionDiagramsToFolder(folderPath) {
        if (!fs.existsSync(folderPath)) {
            fs.mkdirSync(folderPath, { recursive: true });
        }

        const results = [];

        this.crossSectionDiagrams.forEach((diagram, index) => {
            try {
                const originalFilename = diagram.filename;
                diagram.filename = `${folderPath}/${path.basename(diagram.filename)}`;
                
                const result = this.renderCrossSectionDiagramToPNG(index);
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


// ============================================================================
// UPDATED exportToPNG - Now includes Charts, Anatomical, Cross-Section, and Stereochemistry Diagrams
// ============================================================================

exportToPNG(filename = 'spreadsheet.png', options = {}) {
    const { 
        includeCharts = false, 
        includeAnatomicalDiagrams = false,
        includeCrossSectionDiagrams = false,
        includeStereochemistryDiagrams = false,
        chartIndices = [],
        anatomicalIndices = [],
        crossSectionIndices = [],
        stereochemistryIndices = []
    } = options;

    let totalHeight = this.height;
    const visualizationsToRender = {
        charts: [],
        anatomical: [],
        crossSection: [],
        stereochemistry: []
    };

    // Collect charts to render
    if (includeCharts && this.charts.length > 0) {
        const selectedCharts = chartIndices.length > 0
            ? chartIndices.map(i => this.charts[i]).filter(Boolean)
            : this.charts;
        visualizationsToRender.charts = selectedCharts;
    }

    // Collect anatomical diagrams to render
    if (includeAnatomicalDiagrams && this.anatomicalDiagrams.length > 0) {
        const selectedDiagrams = anatomicalIndices.length > 0
            ? anatomicalIndices.map(i => this.anatomicalDiagrams[i]).filter(Boolean)
            : this.anatomicalDiagrams;
        visualizationsToRender.anatomical = selectedDiagrams;
    }

    // Collect cross-section diagrams to render
    if (includeCrossSectionDiagrams && this.crossSectionDiagrams.length > 0) {
        const selectedCrossSections = crossSectionIndices.length > 0
            ? crossSectionIndices.map(i => this.crossSectionDiagrams[i]).filter(Boolean)
            : this.crossSectionDiagrams;
        visualizationsToRender.crossSection = selectedCrossSections;
    }

    // Collect stereochemistry diagrams to render
    if (includeStereochemistryDiagrams && this.stereochemistryDiagrams.length > 0) {
        const selectedStereochem = stereochemistryIndices.length > 0
            ? stereochemistryIndices.map(i => this.stereochemistryDiagrams[i]).filter(Boolean)
            : this.stereochemistryDiagrams;
        visualizationsToRender.stereochemistry = selectedStereochem;
    }

    // Calculate additional height needed
    const totalVisualizations = 
        visualizationsToRender.charts.length + 
        visualizationsToRender.anatomical.length +
        visualizationsToRender.crossSection.length +
        visualizationsToRender.stereochemistry.length;
    
    if (totalVisualizations > 0) {
        const sectionHeaderHeight = 80;
        const itemHeight = 350;
        const itemsPerRow = 2;
        const rows = Math.ceil(totalVisualizations / itemsPerRow);
        totalHeight += sectionHeaderHeight + (itemHeight * rows) + 50;
    }

    const canvas = createCanvas(this.width, totalHeight);
    const ctx = canvas.getContext('2d');

    // Render spreadsheet
    this.renderSpreadsheet(ctx);

    // Render visualizations if any
    if (totalVisualizations > 0) {
        this.renderVisualizationsToCanvas(ctx, visualizationsToRender);
    }

    const buffer = canvas.toBuffer('image/png');
    if (filename) {
        fs.writeFileSync(filename, buffer);
    }
    return buffer;
}

// ============================================================================
// UNIFIED Visualizations Renderer - All Visualization Types
// ============================================================================

renderVisualizationsToCanvas(ctx, visualizations) {
    const { 
        charts = [], 
        anatomical = [], 
        crossSection = [], 
        stereochemistry = [] 
    } = visualizations;
    
    const allVisualizations = [
        ...charts.map(c => ({ type: 'chart', data: c, icon: '📊' })),
        ...anatomical.map(d => ({ type: 'anatomical', data: d, icon: '🫀' })),
        ...crossSection.map(d => ({ type: 'crossSection', data: d, icon: '🔬' })),
        ...stereochemistry.map(d => ({ type: 'stereochemistry', data: d, icon: '🧪' }))
    ];

    if (allVisualizations.length === 0) return;

    // Calculate exact position right after spreadsheet ends
    const numRows = this.data.length;
    const spreadsheetEndY = 100 + this.headerHeight + (numRows * this.cellHeight) + 80;

    // Section header
    const headerY = spreadsheetEndY;
    ctx.fillStyle = this.colors.headerBg;
    ctx.fillRect(0, headerY, this.width, 60);

    ctx.fillStyle = this.colors.headerText;
    ctx.font = 'bold 20px Arial';
    ctx.textAlign = 'left';
    ctx.fillText('📊 Visualizations', 30, headerY + 25);

    // Summary text
    ctx.font = '14px Arial';
    const summaryParts = [];
    if (charts.length > 0) summaryParts.push(`${charts.length} Chart${charts.length !== 1 ? 's' : ''}`);
    if (anatomical.length > 0) summaryParts.push(`${anatomical.length} Anatomical`);
    if (crossSection.length > 0) summaryParts.push(`${crossSection.length} Cross-Section`);
    if (stereochemistry.length > 0) summaryParts.push(`${stereochemistry.length} Molecule${stereochemistry.length !== 1 ? 's' : ''}`);
    
    ctx.fillText(summaryParts.join(' • '), 30, headerY + 45);

    // Visualizations layout
    let currentY = headerY + 80;
    const itemsPerRow = 2;
    const itemWidth = 700;
    const itemHeight = 500;
    const itemSpacingX = 80;
    const itemSpacingY = 80;

    allVisualizations.forEach((viz, index) => {
        const colIndex = index % itemsPerRow;
        const rowIndex = Math.floor(index / itemsPerRow);

        const vizX = 50 + (colIndex * (itemWidth + itemSpacingX));
        const vizY = currentY + (rowIndex * (itemHeight + itemSpacingY + 40));

        // Title with icon
        ctx.fillStyle = this.colors.cellText;
        ctx.font = 'bold 14px Arial';
        ctx.textAlign = 'left';
        ctx.fillText(
            `${viz.icon} ${index + 1}. ${viz.data.title}`,
            vizX,
            vizY - 15
        );

        // Type label
        ctx.font = '11px Arial';
        ctx.fillStyle = '#666666';
        const typeLabels = {
            'chart': 'Chart',
            'anatomical': 'Anatomical Diagram',
            'crossSection': 'Cross-Section',
            'stereochemistry': 'Molecular Structure'
        };
        ctx.fillText(typeLabels[viz.type], vizX, vizY - 2);

        // Border
        ctx.strokeStyle = this.colors.borderColor;
        ctx.lineWidth = 2;
        ctx.strokeRect(vizX, vizY, itemWidth, itemHeight);

        // Background
        ctx.fillStyle = '#ffffff';
        ctx.fillRect(vizX + 1, vizY + 1, itemWidth - 2, itemHeight - 2);

        // Render the visualization
        try {
            ctx.save();
            ctx.translate(vizX, vizY);

            const tempCanvas = createCanvas(itemWidth, itemHeight);
            const tempCtx = tempCanvas.getContext('2d');

            if (viz.type === 'chart') {
                // Render chart
                this.chartRenderer.renderChart(
                    tempCanvas,
                    tempCtx,
                    viz.data.key,
                    viz.data.data,
                    { ...viz.data.options, width: itemWidth, height: itemHeight }
                );
            } else if (viz.type === 'anatomical') {
                // Render anatomical diagram
                this.diagramRenderer.canvas = tempCanvas;
                this.diagramRenderer.ctx = tempCtx;
                this.renderSpecificAnatomicalDiagram(viz.data.key, {
                    ...viz.data.options,
                    width: itemWidth,
                    height: itemHeight
                });
            } else if (viz.type === 'crossSection') {
                // Render cross-section diagram
                this.crossSectionRenderer.canvas = tempCanvas;
                this.crossSectionRenderer.ctx = tempCtx;
                this.crossSectionRenderer.renderDiagram(
                    viz.data.key,
                    0,
                    0,
                    itemWidth,
                    itemHeight,
                    viz.data.options
                );
            } else if (viz.type === 'stereochemistry') {
                // Render stereochemistry diagram
                this.stereochemistryRenderer.canvas = tempCanvas;
                this.stereochemistryRenderer.ctx = tempCtx;
                this.stereochemistryRenderer.renderDiagram(
                    viz.data.key,
                    0,
                    0,
                    itemWidth,
                    itemHeight,
                    viz.data.options
                );
            }

            // Draw the rendered visualization onto main canvas
            ctx.drawImage(tempCanvas, 0, 0);
            ctx.restore();

        } catch (error) {
            ctx.restore();
            // Error state
            ctx.fillStyle = '#ffcccc';
            ctx.fillRect(vizX, vizY, itemWidth, itemHeight);
            ctx.fillStyle = '#ff0000';
            ctx.font = '12px Arial';
            ctx.textAlign = 'center';
            ctx.fillText(
                `Error rendering ${typeLabels[viz.type]}`,
                vizX + itemWidth / 2,
                vizY + itemHeight / 2
            );
            console.error(`${viz.type} ${index + 1} error:`, error.message);
        }
    });
}

// Helper method for rendering specific anatomical diagrams


// ============================================================================
// UPDATED exportToExcel - All Diagram Types
// ============================================================================

async exportToExcel(filename = 'spreadsheet.xlsx', options = {}) {
    const { 
        includeCharts = false,
        includeAnatomicalDiagrams = false,
        includeCrossSectionDiagrams = false,
        includeStereochemistryDiagrams = false
    } = options;
    
    const workbook = new ExcelJS.Workbook();
    workbook.creator = this.author;
    workbook.created = this.createdDate;
    workbook.modified = this.lastModified;
    workbook.lastPrinted = new Date();

    const worksheet = workbook.addWorksheet(this.sheetName);
    worksheet.properties.defaultRowHeight = 20;

    // Add headers
    const headerRow = worksheet.addRow(this.headers);
    headerRow.font = {
        bold: true,
        color: { argb: 'FFFFFFFF' },
        size: 12,
        name: 'Calibri'
    };
    headerRow.fill = {
        type: 'pattern',
        pattern: 'solid',
        fgColor: { argb: 'FF4472C4' }
    };
    headerRow.alignment = {
        vertical: 'middle',
        horizontal: 'center'
    };
    headerRow.height = 30;

    headerRow.eachCell(cell => {
        cell.border = {
            top: { style: 'medium', color: { argb: 'FF2E5C8A' } },
            left: { style: 'thin', color: { argb: 'FF2E5C8A' } },
            bottom: { style: 'medium', color: { argb: 'FF2E5C8A' } },
            right: { style: 'thin', color: { argb: 'FF2E5C8A' } }
        };
    });

    // Add data rows
    this.data.forEach((row, rowIndex) => {
        const excelRow = worksheet.addRow(row);
        excelRow.height = 22;

        row.forEach((cellValue, colIndex) => {
            const cellRef = `${this.columnToLetter(colIndex)}${rowIndex + 1}`;
            const cell = excelRow.getCell(colIndex + 1);

            if (this.formulas[cellRef]) {
                cell.fill = {
                    type: 'pattern',
                    pattern: 'solid',
                    fgColor: { argb: 'FFFFF2CC' }
                };
                cell.font = { bold: true, color: { argb: 'FF000000' } };
                cell.note = {
                    texts: [
                        { font: { bold: true, size: 10 }, text: 'Formula: ' },
                        { font: { size: 10 }, text: this.formulas[cellRef].formula }
                    ],
                    margins: { insetmode: 'auto', inset: [5, 5, 5, 5] }
                };
            } else if (this.calculations[cellRef] !== undefined) {
                cell.fill = {
                    type: 'pattern',
                    pattern: 'solid',
                    fgColor: { argb: 'FFE2EFDA' }
                };
                cell.font = { italic: true };
            }

            if (typeof cellValue === 'number') {
                cell.numFmt = cellValue % 1 === 0 ? '#,##0' : '#,##0.00';
                cell.alignment = { horizontal: 'right', vertical: 'middle' };
            } else {
                cell.alignment = { horizontal: 'left', vertical: 'middle' };
            }

            cell.border = {
                top: { style: 'thin', color: { argb: 'FFD0D0D0' } },
                left: { style: 'thin', color: { argb: 'FFD0D0D0' } },
                bottom: { style: 'thin', color: { argb: 'FFD0D0D0' } },
                right: { style: 'thin', color: { argb: 'FFD0D0D0' } }
            };
        });

        if (rowIndex % 2 === 1) {
            excelRow.eachCell(cell => {
                if (!cell.fill || !cell.fill.fgColor || cell.fill.fgColor.argb === 'FFFFFFFF') {
                    cell.fill = {
                        type: 'pattern',
                        pattern: 'solid',
                        fgColor: { argb: 'FFF8F8F8' }
                    };
                }
            });
        }
    });

    // Auto-fit columns
    worksheet.columns.forEach((column, index) => {
        let maxLength = this.headers[index]?.toString().length || 10;
        column.eachCell({ includeEmpty: false }, cell => {
            const cellLength = cell.value ? cell.value.toString().length : 0;
            maxLength = Math.max(maxLength, cellLength);
        });
        column.width = Math.min(Math.max(maxLength + 3, 12), 45);
    });

    worksheet.views = [{ state: 'frozen', xSplit: 0, ySplit: 1 }];

    // ========== FORMULAS SHEET ==========
    if (Object.keys(this.formulas).length > 0) {
        const formulaSheet = workbook.addWorksheet('📋 Formulas');

        const formulaHeaderRow = formulaSheet.addRow([
            'Cell', 'Formula', 'Type', 'Category', 'Description', 'Applied'
        ]);

        formulaHeaderRow.font = { bold: true, color: { argb: 'FFFFFFFF' }, size: 11 };
        formulaHeaderRow.fill = {
            type: 'pattern',
            pattern: 'solid',
            fgColor: { argb: 'FF70AD47' }
        };
        formulaHeaderRow.alignment = { vertical: 'middle', horizontal: 'center', wrapText: true };
        formulaHeaderRow.height = 30;

        Object.entries(this.formulas).forEach(([cell, data], index) => {
            const formula = SpreadsheetFormulaRegistry.getFormula(data.formulaKey);
            const formulaRow = formulaSheet.addRow([
                cell,
                data.formula,
                formula?.name || data.formulaKey,
                formula?.category || 'Unknown',
                formula?.description || '',
                data.timestamp.toLocaleString()
            ]);

            formulaRow.alignment = { vertical: 'top', wrapText: true };

            if (index % 2 === 1) {
                formulaRow.eachCell(cell => {
                    cell.fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: 'FFF0F0F0' } };
                });
            }
        });

        formulaSheet.columns = [
            { width: 15 }, { width: 35 }, { width: 25 },
            { width: 20 }, { width: 45 }, { width: 22 }
        ];
    }

    // ========== VISUALIZATIONS SHEET (All Types) ==========
    const hasVisualizations = 
        (includeCharts && this.charts.length > 0) || 
        (includeAnatomicalDiagrams && this.anatomicalDiagrams.length > 0) ||
        (includeCrossSectionDiagrams && this.crossSectionDiagrams.length > 0) ||
        (includeStereochemistryDiagrams && this.stereochemistryDiagrams.length > 0);

    if (hasVisualizations) {
        const vizSheet = workbook.addWorksheet('📊 Visualizations');
        let currentRow = 1;

        // Track temp files for cleanup AFTER Excel is saved
        const tempFilesToCleanup = [];

        // HELPER FUNCTION: Add image to Excel with proper error handling
        const addImageToExcel = async (canvas, title, type, index, metadata = {}) => {
            let tempFilePath = null;
            
            try {
                // Create temp directory if it doesn't exist
                const tempDir = os.tmpdir();
                if (!fs.existsSync(tempDir)) {
                    fs.mkdirSync(tempDir, { recursive: true });
                }

                // Generate unique filename
                const timestamp = Date.now();
                const random = Math.random().toString(36).substring(2, 15);
                tempFilePath = path.join(tempDir, `${type}_${timestamp}_${index}_${random}.png`);

                // Save canvas to buffer
                const buffer = canvas.toBuffer('image/png');
                
                // Write buffer to temp file
                fs.writeFileSync(tempFilePath, buffer);

                // Verify file exists
                if (!fs.existsSync(tempFilePath)) {
                    throw new Error(`Failed to create temp file: ${tempFilePath}`);
                }

                console.log(`  • Created temp file: ${path.basename(tempFilePath)}`);

                // Add image to workbook
                const imageId = workbook.addImage({
                    filename: tempFilePath,
                    extension: 'png'
                });

                // Add title
                const titleCell = vizSheet.getCell(`A${currentRow}`);
                titleCell.value = title;
                
                const typeColors = {
                    'chart': 'FF4472C4',
                    'anatomical': 'FFE74C3C',
                    'crossSection': 'FF27AE60',
                    'stereochemistry': 'FF9B59B6'
                };
                
                titleCell.font = { 
                    bold: true, 
                    size: 12, 
                    color: { argb: typeColors[type] || 'FF000000' } 
                };
                titleCell.alignment = { horizontal: 'left', vertical: 'middle' };
                vizSheet.getRow(currentRow).height = 25;
                currentRow += 1;

                // Add metadata if provided
                if (Object.keys(metadata).length > 0) {
                    const metaCell = vizSheet.getCell(`A${currentRow}`);
                    const metaText = Object.entries(metadata)
                        .map(([key, value]) => `${key}: ${value}`)
                        .join(' • ');
                    metaCell.value = metaText;
                    metaCell.font = { size: 10, italic: true, color: { argb: 'FF666666' } };
                    vizSheet.getRow(currentRow).height = 20;
                    currentRow += 1;
                }

                // Insert image
                const imgWidth = canvas.width;
                const imgHeight = canvas.height;
                
                vizSheet.addImage(imageId, {
                    tl: { col: 0, row: currentRow - 1 },
                    ext: { width: imgWidth, height: imgHeight },
                    editAs: 'oneCell'
                });

                // Calculate rows for image
                const rowsNeeded = Math.ceil(imgHeight / 20);
                for (let r = 0; r < rowsNeeded; r++) {
                    vizSheet.getRow(currentRow + r).height = 20;
                }
                currentRow += rowsNeeded + 2;

                console.log(`  ✓ Added ${type} to Excel: ${title}`);

                // Add to cleanup list (don't delete yet!)
                tempFilesToCleanup.push(tempFilePath);

                return true;

            } catch (error) {
                console.error(`  ❌ Error adding ${type} ${index + 1}:`, error.message);
                
                // Add error message to sheet
                const errorCell = vizSheet.getCell(`A${currentRow}`);
                errorCell.value = `⚠ Error: ${title} - ${error.message}`;
                errorCell.font = { color: { argb: 'FFFF0000' }, italic: true };
                vizSheet.getRow(currentRow).height = 25;
                currentRow += 2;

                return false;
            }
        };

        // Add Charts
        if (includeCharts && this.charts.length > 0) {
            console.log('\n📊 Adding Charts to Excel...');
            
            // Section header
            const chartHeaderCell = vizSheet.getCell(`A${currentRow}`);
            chartHeaderCell.value = '📊 CHARTS';
            chartHeaderCell.font = { bold: true, size: 14, color: { argb: 'FF4472C4' } };
            chartHeaderCell.fill = {
                type: 'pattern',
                pattern: 'solid',
                fgColor: { argb: 'FFE7F3FF' }
            };
            vizSheet.getRow(currentRow).height = 30;
            currentRow += 2;

            for (let i = 0; i < this.charts.length; i++) {
                const chartConfig = this.charts[i];
                
                try {
                    // Render chart to canvas
                    const chartCanvas = createCanvas(
                        chartConfig.options.width || 700,
                        chartConfig.options.height || 500
                    );
                    const chartCtx = chartCanvas.getContext('2d');

                    this.chartRenderer.renderChart(
                        chartCanvas,
                        chartCtx,
                        chartConfig.key,
                        chartConfig.data,
                        chartConfig.options
                    );

                    // Add to Excel
                    await addImageToExcel(
                        chartCanvas,
                        `Chart ${i + 1}: ${chartConfig.title}`,
                        'chart',
                        i,
                        { Type: chartConfig.key }
                    );

                } catch (error) {
                    console.error(`  ❌ Chart ${i + 1} rendering failed:`, error.message);
                }
            }

            currentRow += 2;
        }

        // Add Anatomical Diagrams
        if (includeAnatomicalDiagrams && this.anatomicalDiagrams.length > 0) {
            console.log('\n🫀 Adding Anatomical Diagrams to Excel...');
            
            // Section header
            const anatomicalHeaderCell = vizSheet.getCell(`A${currentRow}`);
            anatomicalHeaderCell.value = '🫀 ANATOMICAL DIAGRAMS';
            anatomicalHeaderCell.font = { bold: true, size: 14, color: { argb: 'FFE74C3C' } };
            anatomicalHeaderCell.fill = {
                type: 'pattern',
                pattern: 'solid',
                fgColor: { argb: 'FFFFE7E7' }
            };
            vizSheet.getRow(currentRow).height = 30;
            currentRow += 2;

            for (let i = 0; i < this.anatomicalDiagrams.length; i++) {
                const diagramConfig = this.anatomicalDiagrams[i];
                
                try {
                    // Render diagram to canvas
                    const diagramWidth = diagramConfig.options.width || 800;
                    const diagramHeight = diagramConfig.options.height || 700;
                    const diagramCanvas = createCanvas(diagramWidth, diagramHeight);
                    const diagramCtx = diagramCanvas.getContext('2d');

                    this.diagramRenderer.canvas = diagramCanvas;
                    this.diagramRenderer.ctx = diagramCtx;
                    
                    this.renderSpecificAnatomicalDiagram(diagramConfig.key, diagramConfig.options);

                    const diagramInfo = AnatomicalDiagramsRegistry.getDiagram(diagramConfig.key);

                    // Add to Excel
                    await addImageToExcel(
                        diagramCanvas,
                        `Diagram ${i + 1}: ${diagramConfig.title}`,
                        'anatomical',
                        i,
                        { Category: diagramInfo.category }
                    );

                } catch (error) {
                    console.error(`  ❌ Anatomical Diagram ${i + 1} rendering failed:`, error.message);
                }
            }

            currentRow += 2;
        }

        // Add Cross-Section Diagrams
        if (includeCrossSectionDiagrams && this.crossSectionDiagrams.length > 0) {
            console.log('\n🔬 Adding Cross-Section Diagrams to Excel...');
            
            // Section header
            const crossSectionHeaderCell = vizSheet.getCell(`A${currentRow}`);
            crossSectionHeaderCell.value = '🔬 CROSS-SECTION DIAGRAMS';
            crossSectionHeaderCell.font = { bold: true, size: 14, color: { argb: 'FF27AE60' } };
            crossSectionHeaderCell.fill = {
                type: 'pattern',
                pattern: 'solid',
                fgColor: { argb: 'FFE7F9EF' }
            };
            vizSheet.getRow(currentRow).height = 30;
            currentRow += 2;

            for (let i = 0; i < this.crossSectionDiagrams.length; i++) {
                const diagramConfig = this.crossSectionDiagrams[i];
                
                try {
                    // Render diagram to canvas
                    const diagramWidth = diagramConfig.options.width || 800;
                    const diagramHeight = diagramConfig.options.height || 600;
                    const diagramCanvas = createCanvas(diagramWidth, diagramHeight);
                    const diagramCtx = diagramCanvas.getContext('2d');

                    this.crossSectionRenderer.canvas = diagramCanvas;
                    this.crossSectionRenderer.ctx = diagramCtx;
                    
                    this.crossSectionRenderer.renderDiagram(
                        diagramConfig.key,
                        0,
                        0,
                        diagramWidth,
                        diagramHeight,
                        diagramConfig.options
                    );

                    const diagramInfo = CrossSectionDiagramsRegistry.getDiagram(diagramConfig.key);

                    // Add to Excel
                    await addImageToExcel(
                        diagramCanvas,
                        `Cross-Section ${i + 1}: ${diagramConfig.title}`,
                        'crossSection',
                        i,
                        { Category: diagramInfo.category }
                    );

                } catch (error) {
                    console.error(`  ❌ Cross-Section Diagram ${i + 1} rendering failed:`, error.message);
                }
            }

            currentRow += 2;
        }

        // Add Stereochemistry Diagrams
        if (includeStereochemistryDiagrams && this.stereochemistryDiagrams.length > 0) {
            console.log('\n🧪 Adding Stereochemistry Diagrams to Excel...');
            
            // Section header
            const stereochemHeaderCell = vizSheet.getCell(`A${currentRow}`);
            stereochemHeaderCell.value = '🧪 MOLECULAR STRUCTURES';
            stereochemHeaderCell.font = { bold: true, size: 14, color: { argb: 'FF9B59B6' } };
            stereochemHeaderCell.fill = {
                type: 'pattern',
                pattern: 'solid',
                fgColor: { argb: 'FFF4ECF7' }
            };
            vizSheet.getRow(currentRow).height = 30;
            currentRow += 2;

            for (let i = 0; i < this.stereochemistryDiagrams.length; i++) {
                const diagramConfig = this.stereochemistryDiagrams[i];
                
                try {
                    // Render diagram to canvas
                    const diagramWidth = diagramConfig.options.width || 800;
                    const diagramHeight = diagramConfig.options.height || 600;
                    const diagramCanvas = createCanvas(diagramWidth, diagramHeight);
                    const diagramCtx = diagramCanvas.getContext('2d');

                    this.stereochemistryRenderer.canvas = diagramCanvas;
                    this.stereochemistryRenderer.ctx = diagramCtx;
                    
                    this.stereochemistryRenderer.renderDiagram(
                        diagramConfig.key,
                        0,
                        0,
                        diagramWidth,
                        diagramHeight,
                        diagramConfig.options
                    );

                    const diagramInfo = StereochemistryDiagramsRegistry.getDiagram(diagramConfig.key);

                    // Add to Excel with molecular info
                    await addImageToExcel(
                        diagramCanvas,
                        `Molecule ${i + 1}: ${diagramConfig.title}`,
                        'stereochemistry',
                        i,
                        { 
                            Formula: diagramInfo.formula,
                            Geometry: diagramInfo.geometry.replace(/_/g, ' '),
                            'Bond Angles': diagramInfo.bondAngles.join('°, ') + '°'
                        }
                    );

                } catch (error) {
                    console.error(`  ❌ Stereochemistry Diagram ${i + 1} rendering failed:`, error.message);
                }
            }

            currentRow += 2;
        }

        vizSheet.columns = [{ width: 100 }];

        // Save workbook FIRST, then cleanup temp files
        console.log('\n💾 Saving Excel workbook...');
        await workbook.xlsx.writeFile(filename);
        console.log(`✓ Excel file saved: ${filename}\n`);

        // NOW cleanup temp files after Excel is saved
        console.log('🧹 Cleaning up temporary files...');
        tempFilesToCleanup.forEach(tempFile => {
            try {
                if (fs.existsSync(tempFile)) {
                    fs.unlinkSync(tempFile);
                    console.log(`  • Cleaned up: ${path.basename(tempFile)}`);
                }
            } catch (e) {
                console.warn(`  ⚠ Failed to delete temp file: ${tempFile}`);
            }
        });
    } else {
        // No visualizations - just save
        console.log('\n💾 Saving Excel workbook...');
        await workbook.xlsx.writeFile(filename);
        console.log(`✓ Excel file saved: ${filename}\n`);
    }

    return {
        success: true,
        filename,
        sheets: workbook.worksheets.length,
        rows: this.data.length,
        columns: this.headers.length,
        formulas: Object.keys(this.formulas).length,
        visualizations: {
            charts: includeCharts ? this.charts.length : 0,
            anatomicalDiagrams: includeAnatomicalDiagrams ? this.anatomicalDiagrams.length : 0,
            crossSectionDiagrams: includeCrossSectionDiagrams ? this.crossSectionDiagrams.length : 0,
            stereochemistryDiagrams: includeStereochemistryDiagrams ? this.stereochemistryDiagrams.length : 0,
            total: 
                (includeCharts ? this.charts.length : 0) +
                (includeAnatomicalDiagrams ? this.anatomicalDiagrams.length : 0) +
                (includeCrossSectionDiagrams ? this.crossSectionDiagrams.length : 0) +
                (includeStereochemistryDiagrams ? this.stereochemistryDiagrams.length : 0)
        }
    };
}

// ============================================================================
// UPDATED generateCombinedReport - All Visualization Types
// ============================================================================

generateCombinedReport() {
    const baseReport = this.generateReport();
    
    return {
        ...baseReport,
        anatomicalDiagrams: this.listAnatomicalDiagrams(),
        crossSectionDiagrams: this.listCrossSectionDiagrams(),
        stereochemistryDiagrams: this.listStereochemistryDiagrams(),
        statistics: {
            anatomical: this.getAnatomicalDiagramStatistics(),
            crossSection: this.getCrossSectionDiagramStatistics(),
            stereochemistry: this.getStereochemistryDiagramStatistics()
        },
        visualizations: {
            charts: this.charts.length,
            anatomicalDiagrams: this.anatomicalDiagrams.length,
            crossSectionDiagrams: this.crossSectionDiagrams.length,
            stereochemistryDiagrams: this.stereochemistryDiagrams.length,
            total: 
                this.charts.length + 
                this.anatomicalDiagrams.length +
                this.crossSectionDiagrams.length +
                this.stereochemistryDiagrams.length
        }
    };
}

// ============================================================================
// UPDATED generateReport - Complete Metadata
// ============================================================================

generateReport() {
    return {
        metadata: {
            sheetName: this.sheetName,
            created: this.createdDate,
            lastModified: this.lastModified,
            author: this.author,
            rowCount: this.data.length,
            columnCount: this.headers.length
        },
        data: {
            headers: this.headers,
            totalRows: this.data.length,
            totalCells: this.data.length * this.headers.length
        },
        formulas: {
            count: Object.keys(this.formulas).length,
            formulas: Object.entries(this.formulas).map(([cell, data]) => ({
                cell,
                formula: data.formula,
                formulaKey: data.formulaKey,
                timestamp: data.timestamp
            }))
        },
        calculations: {
            count: Object.keys(this.calculations).length
        },
        visualizations: {
            charts: {
                count: this.charts.length,
                types: [...new Set(this.charts.map(c => c.key))]
            },
            diagrams: {
                anatomical: {
                    count: this.anatomicalDiagrams.length,
                    categories: [...new Set(this.anatomicalDiagrams.map(d => d.category))]
                },
                crossSection: {
                    count: this.crossSectionDiagrams.length,
                    categories: [...new Set(this.crossSectionDiagrams.map(d => d.category))]
                },
                stereochemistry: {
                    count: this.stereochemistryDiagrams.length,
                    formulas: [...new Set(this.stereochemistryDiagrams.map(d => d.formula))],
                    geometries: [...new Set(this.stereochemistryDiagrams.map(d => {
                        const diagram = StereochemistryDiagramsRegistry.getDiagram(d.key);
                        return diagram ? diagram.geometry : 'unknown';
                    }))]
                },
                total: 
                    this.anatomicalDiagrams.length +
                    this.crossSectionDiagrams.length +
                    this.stereochemistryDiagrams.length
            }
        },
        history: {
            entries: this.history.length,
            recentActions: this.history.slice(-10)
        }
    };
}

// ============================================================================
// EXPORT CONVENIENCE METHODS
// ============================================================================

// Export with all visualizations
async exportCompleteWorkbook(baseFilename = 'complete_workbook', format = 'both') {
    const results = {
        png: null,
        excel: null
    };

    const exportOptions = {
        includeCharts: true,
        includeAnatomicalDiagrams: true,
        includeCrossSectionDiagrams: true,
        includeStereochemistryDiagrams: true
    };

    try {
        if (format === 'png' || format === 'both') {
            console.log('📊 Exporting complete workbook to PNG...');
            const pngFilename = `${baseFilename}.png`;
            this.exportToPNG(pngFilename, exportOptions);
            results.png = {
                success: true,
                filename: pngFilename,
                visualizations: this.getDiagramCounts()
            };
            console.log(`✓ PNG export complete: ${pngFilename}\n`);
        }

        if (format === 'excel' || format === 'both') {
            console.log('📊 Exporting complete workbook to Excel...');
            const excelFilename = `${baseFilename}.xlsx`;
            const excelResult = await this.exportToExcel(excelFilename, exportOptions);
            results.excel = excelResult;
        }

        return {
            success: true,
            results,
            summary: {
                format,
                charts: this.charts.length,
                anatomicalDiagrams: this.anatomicalDiagrams.length,
                crossSectionDiagrams: this.crossSectionDiagrams.length,
                stereochemistryDiagrams: this.stereochemistryDiagrams.length,
                totalVisualizations: this.getDiagramCounts().total
            }
        };

    } catch (error) {
        console.error('❌ Export failed:', error.message);
        return {
            success: false,
            error: error.message
        };
    }
}

// Export specific visualization types
async exportSelectedVisualizations(baseFilename, options = {}) {
    const {
        format = 'both',
        includeCharts = false,
        includeAnatomicalDiagrams = false,
        includeCrossSectionDiagrams = false,
        includeStereochemistryDiagrams = false,
        chartIndices = [],
        anatomicalIndices = [],
        crossSectionIndices = [],
        stereochemistryIndices = []
    } = options;

    const exportOptions = {
        includeCharts,
        includeAnatomicalDiagrams,
        includeCrossSectionDiagrams,
        includeStereochemistryDiagrams,
        chartIndices,
        anatomicalIndices,
        crossSectionIndices,
        stereochemistryIndices
    };

    const results = {
        png: null,
        excel: null
    };

    try {
        if (format === 'png' || format === 'both') {
            const pngFilename = `${baseFilename}.png`;
            this.exportToPNG(pngFilename, exportOptions);
            results.png = {
                success: true,
                filename: pngFilename
            };
        }

        if (format === 'excel' || format === 'both') {
            const excelFilename = `${baseFilename}.xlsx`;
            results.excel = await this.exportToExcel(excelFilename, exportOptions);
        }

        return {
            success: true,
            results
        };

    } catch (error) {
        return {
            success: false,
            error: error.message
        };
    }
}

// Quick export methods
async exportWithCharts(filename = 'workbook_with_charts') {
    return this.exportSelectedVisualizations(filename, {
        format: 'both',
        includeCharts: true
    });
}

async exportWithAnatomicalDiagrams(filename = 'workbook_with_anatomical') {
    return this.exportSelectedVisualizations(filename, {
        format: 'both',
        includeAnatomicalDiagrams: true
    });
}

async exportWithCrossSectionDiagrams(filename = 'workbook_with_crosssection') {
    return this.exportSelectedVisualizations(filename, {
        format: 'both',
        includeCrossSectionDiagrams: true
    });
}

async exportWithStereochemistryDiagrams(filename = 'workbook_with_molecules') {
    return this.exportSelectedVisualizations(filename, {
        format: 'both',
        includeStereochemistryDiagrams: true
    });
}

async exportWithAllDiagrams(filename = 'workbook_with_all_diagrams') {
    return this.exportSelectedVisualizations(filename, {
        format: 'both',
        includeAnatomicalDiagrams: true,
        includeCrossSectionDiagrams: true,
        includeStereochemistryDiagrams: true
    });
}

// ============================================================================
// VISUALIZATION SUMMARY METHODS
// ============================================================================

getVisualizationSummary() {
    return {
        charts: {
            count: this.charts.length,
            types: this.charts.map(c => ({
                title: c.title,
                type: c.key
            }))
        },
        anatomicalDiagrams: {
            count: this.anatomicalDiagrams.length,
            diagrams: this.anatomicalDiagrams.map(d => ({
                title: d.title,
                category: d.category
            }))
        },
        crossSectionDiagrams: {
            count: this.crossSectionDiagrams.length,
            diagrams: this.crossSectionDiagrams.map(d => ({
                title: d.title,
                category: d.category
            }))
        },
        stereochemistryDiagrams: {
            count: this.stereochemistryDiagrams.length,
            molecules: this.stereochemistryDiagrams.map(d => ({
                title: d.title,
                formula: d.formula
            }))
        },
        total: 
            this.charts.length + 
            this.anatomicalDiagrams.length +
            this.crossSectionDiagrams.length +
            this.stereochemistryDiagrams.length
    };
}

hasAnyVisualizations() {
    return (
        this.charts.length > 0 ||
        this.anatomicalDiagrams.length > 0 ||
        this.crossSectionDiagrams.length > 0 ||
        this.stereochemistryDiagrams.length > 0
    );
}

getVisualizationTypes() {
    const types = [];
    if (this.charts.length > 0) types.push('charts');
    if (this.anatomicalDiagrams.length > 0) types.push('anatomical');
    if (this.crossSectionDiagrams.length > 0) types.push('crossSection');
    if (this.stereochemistryDiagrams.length > 0) types.push('stereochemistry');
    return types;
}

// ============================================================================
// BATCH EXPORT METHODS
// ============================================================================

async exportAllVisualizationsSeparately(folderPath) {
    if (!fs.existsSync(folderPath)) {
        fs.mkdirSync(folderPath, { recursive: true });
    }

    const results = {
        charts: [],
        anatomical: [],
        crossSection: [],
        stereochemistry: [],
        errors: []
    };

    console.log('\n📊 Exporting all visualizations separately...\n');

    // Export charts
    for (let i = 0; i < this.charts.length; i++) {
        try {
            const chart = this.charts[i];
            const filename = `${folderPath}/chart_${i + 1}_${chart.title.replace(/[^a-z0-9]/gi, '_')}.png`;
            
            const canvas = createCanvas(
                chart.options.width || 700,
                chart.options.height || 500
            );
            const ctx = canvas.getContext('2d');

            this.chartRenderer.renderChart(canvas, ctx, chart.key, chart.data, chart.options);

            const buffer = canvas.toBuffer('image/png');
            fs.writeFileSync(filename, buffer);

            results.charts.push({ success: true, filename, title: chart.title });
            console.log(`✓ Chart ${i + 1}: ${chart.title}`);
        } catch (error) {
            results.errors.push({ type: 'chart', index: i, error: error.message });
            console.error(`✗ Chart ${i + 1} failed: ${error.message}`);
        }
    }

    // Export anatomical diagrams
    for (let i = 0; i < this.anatomicalDiagrams.length; i++) {
        try {
            const diagram = this.anatomicalDiagrams[i];
            const filename = `${folderPath}/anatomical_${i + 1}_${diagram.title.replace(/[^a-z0-9]/gi, '_')}.png`;
            
            const canvas = createCanvas(
                diagram.options.width || 800,
                diagram.options.height || 700
            );
            const ctx = canvas.getContext('2d');

            this.diagramRenderer.canvas = canvas;
            this.diagramRenderer.ctx = ctx;
            this.renderSpecificAnatomicalDiagram(diagram.key, diagram.options);

            const buffer = canvas.toBuffer('image/png');
            fs.writeFileSync(filename, buffer);

            results.anatomical.push({ success: true, filename, title: diagram.title });
            console.log(`✓ Anatomical ${i + 1}: ${diagram.title}`);
        } catch (error) {
            results.errors.push({ type: 'anatomical', index: i, error: error.message });
            console.error(`✗ Anatomical ${i + 1} failed: ${error.message}`);
        }
    }

    // Export cross-section diagrams
    for (let i = 0; i < this.crossSectionDiagrams.length; i++) {
        try {
            const diagram = this.crossSectionDiagrams[i];
            const filename = `${folderPath}/crosssection_${i + 1}_${diagram.title.replace(/[^a-z0-9]/gi, '_')}.png`;
            
            const canvas = createCanvas(
                diagram.options.width || 800,
                diagram.options.height || 600
            );
            const ctx = canvas.getContext('2d');

            this.crossSectionRenderer.canvas = canvas;
            this.crossSectionRenderer.ctx = ctx;
            this.crossSectionRenderer.renderDiagram(
                diagram.key,
                0,
                0,
                diagram.options.width || 800,
                diagram.options.height || 600,
                diagram.options
            );

            const buffer = canvas.toBuffer('image/png');
            fs.writeFileSync(filename, buffer);

            results.crossSection.push({ success: true, filename, title: diagram.title });
            console.log(`✓ Cross-Section ${i + 1}: ${diagram.title}`);
        } catch (error) {
            results.errors.push({ type: 'crossSection', index: i, error: error.message });
            console.error(`✗ Cross-Section ${i + 1} failed: ${error.message}`);
        }
    }

    // Export stereochemistry diagrams
    for (let i = 0; i < this.stereochemistryDiagrams.length; i++) {
        try {
            const diagram = this.stereochemistryDiagrams[i];
            const filename = `${folderPath}/molecule_${i + 1}_${diagram.title.replace(/[^a-z0-9]/gi, '_')}.png`;
            
            const canvas = createCanvas(
                diagram.options.width || 800,
                diagram.options.height || 600
            );
            const ctx = canvas.getContext('2d');

            this.stereochemistryRenderer.canvas = canvas;
            this.stereochemistryRenderer.ctx = ctx;
            this.stereochemistryRenderer.renderDiagram(
                diagram.key,
                0,
                0,
                diagram.options.width || 800,
                diagram.options.height || 600,
                diagram.options
            );

            const buffer = canvas.toBuffer('image/png');
            fs.writeFileSync(filename, buffer);

            results.stereochemistry.push({ success: true, filename, title: diagram.title });
            console.log(`✓ Molecule ${i + 1}: ${diagram.title}`);
        } catch (error) {
            results.errors.push({ type: 'stereochemistry', index: i, error: error.message });
            console.error(`✗ Molecule ${i + 1} failed: ${error.message}`);
        }
    }

    console.log('\n✓ Export complete!\n');

    return {
        folder: folderPath,
        results,
        summary: {
            chartsExported: results.charts.length,
            anatomicalExported: results.anatomical.length,
            crossSectionExported: results.crossSection.length,
            stereochemistryExported: results.stereochemistry.length,
            totalExported: 
                results.charts.length + 
                results.anatomical.length +
                results.crossSection.length +
                results.stereochemistry.length,
            errors: results.errors.length
        }
    };
}

  

    generateFormulaGuide() {
        const guide = {
            title: 'Available Formula Actions',
            categories: {},
            totalFormulas: 0,
            suggestions: []
        };

        const categories = SpreadsheetFormulaRegistry.getAllCategories();

        categories.forEach(category => {
            const formulas = SpreadsheetFormulaRegistry.getFormulasByCategory(category);
            guide.categories[category] = Object.entries(formulas).map(([key, formula]) => ({
                key,
                name: formula.name,
                description: formula.description,
                example: formula.example,
                excelFormula: formula.excelFormula,
                parameters: formula.paramNames || []
            }));
            guide.totalFormulas += Object.keys(formulas).length;
        });

        if (this.data.length > 0) {
            const sampleRange = `A2:A${Math.min(this.data.length + 1, 11)}`;
            guide.suggestions = this.suggestFormulas(sampleRange);
        }

        return guide;
    }

    getFormulaHelp(formulaKey) {
        const formula = SpreadsheetFormulaRegistry.getFormula(formulaKey);
        if (!formula) {
            return { error: 'Formula not found' };
        }

        return {
            name: formula.name,
            category: formula.category,
            description: formula.description,
            excelFormula: formula.excelFormula,
            example: formula.example,
            parameters: formula.params.map((param, index) => ({
                name: param,
                description: formula.paramNames[index] || param,
                required: true
            })),
            usage: formula.usage || 'Apply this formula to calculate results',
            tips: this.generateFormulaTips(formula)
        };
    }

    generateFormulaTips(formula) {
        const tips = [];

        if (formula.params.includes('range')) {
            tips.push('Use cell ranges like A1:A10 to reference multiple cells');
            tips.push('You can reference entire columns like A:A');
        }

        if (formula.category === 'Financial & Economic') {
            tips.push('Interest rates should be entered as decimals (e.g., 0.05 for 5%)');
            tips.push('Ensure time periods match (monthly rate with monthly periods)');
        }

        if (formula.category === 'Budget & Business') {
            tips.push('Compare actual vs budget to track performance');
            tips.push('Use conditional formatting to highlight variances');
        }

        if (formula.excelFormula === 'IF') {
            tips.push('Conditions can use operators: >, <, >=, <=, =, <>');
            tips.push('Nest multiple IF statements for complex logic');
        }

        return tips;
    }

    validateFormulaParams(formulaKey, params) {
        const formula = SpreadsheetFormulaRegistry.getFormula(formulaKey);
        if (!formula) {
            return { valid: false, error: 'Formula not found' };
        }

        const validation = {
            valid: true,
            warnings: [],
            errors: []
        };

        if (params.length < formula.params.length) {
            validation.errors.push(`Expected ${formula.params.length} parameters, got ${params.length}`);
            validation.valid = false;
        }

        params.forEach((param, index) => {
            const paramType = formula.params[index];

            if (typeof param === 'string' && param.includes(':')) {
                const range = this.parseRangeReference(param);
                if (!range.start || !range.end) {
                    validation.errors.push(`Invalid range reference: ${param}`);
                    validation.valid = false;
                }
            }
            else if (typeof param === 'string' && /^[A-Z]+\d+$/.test(param)) {
                const cell = this.parseCellReference(param);
                if (!cell) {
                    validation.errors.push(`Invalid cell reference: ${param}`);
                    validation.valid = false;
                }
            }

            if (formula.category === 'Financial & Economic' && typeof param !== 'string') {
                if (isNaN(parseFloat(param))) {
                    validation.errors.push(`Parameter ${index + 1} must be numeric`);
                    validation.valid = false;
                }
            }
        });

        return validation;
    }

    createFormulaTemplate(formulaKey, description = '') {
        const formula = SpreadsheetFormulaRegistry.getFormula(formulaKey);
        if (!formula) {
            return null;
        }

        return {
            key: formulaKey,
            name: formula.name,
            description: description || formula.description,
            template: formula.example,
            parameters: formula.paramNames.map((name, index) => ({
                name,
                placeholder: `<${name}>`,
                example: this.getParameterExample(formula.params[index])
            })),
            instructions: `Replace placeholders with your cell references or values`,
            example: formula.example
        };
    }

    getParameterExample(paramType) {
        switch (paramType) {
            case 'range':
                return 'A1:A10';
            case 'number':
                return '100';
            case 'rate':
                return '0.05';
            case 'text':
                return '"Sample Text"';
            default:
                return 'value';
        }
    }

    
    countEmptyCells() {
        let count = 0;
        this.data.forEach(row => {
            row.forEach(cell => {
                if (cell === '' || cell === null || cell === undefined) {
                    count++;
                }
            });
        });
        return count;
    }

    calculateStatistics() {
        const stats = {};

        for (let col = 0; col < this.headers.length; col++) {
            const values = [];
            this.data.forEach(row => {
                if (row[col] !== undefined && !isNaN(parseFloat(row[col]))) {
                    values.push(parseFloat(row[col]));
                }
            });

            if (values.length > 0) {
                const sum = values.reduce((a, b) => a + b, 0);
                const avg = sum / values.length;
                const sorted = [...values].sort((a, b) => a - b);

                stats[this.headers[col]] = {
                    count: values.length,
                    sum,
                    average: avg,
                    min: Math.min(...values),
                    max: Math.max(...values),
                    median: sorted[Math.floor(sorted.length / 2)]
                };
            }
        }

        return stats;
    }
}

// ============================================================================
// EXPORT REGISTRIES AND CLASSES
// ============================================================================

export { CrossSectionDiagramsRegistry,
CrossSectionDiagramRenderer,
CrossSectionShapes};
*/
