
// ==================== REPRODUCTION & DEVELOPMENT GENERATORS WITH DIAGRAMS ====================

generateRelatedAsexualReproductionDiagram(originalProblem, originalSolution, options) {
    const relatedProblems = [];

    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'Types of Asexual Reproduction',
        problem: 'Draw and explain four types of asexual reproduction: binary fission, budding, fragmentation, and vegetative propagation.',
        parameters: {
            reproductionTypes: ['binary_fission', 'budding', 'fragmentation', 'vegetative'],
            showExamples: true
        },
        type: 'reproduction_development',
        subparts: [
            'Binary fission: Single cell divides into two identical cells (bacteria, protists)',
            'Budding: Outgrowth forms new individual (yeast, hydra)',
            'Fragmentation: Body breaks into pieces, each regenerates (starfish, planaria)',
            'Vegetative propagation: New plants from stems, roots, leaves (strawberries, potatoes)'
        ],
        helper: 'Asexual reproduction: No mate needed, genetically identical offspring, rapid reproduction',
        realWorldContext: 'Understanding reproduction methods in different organisms',
        diagramInfo: {
            type: 'reproduction',
            registryKey: 'fertilization',
            renderOptions: {
                title: 'Asexual Reproduction Types',
                showLabels: true
            },
            canvasSize: { width: 900, height: 800 }
        },
        generateDiagram: function() {
            try {
                const canvas = createCanvas(
                    this.diagramInfo.canvasSize.width,
                    this.diagramInfo.canvasSize.height
                );

                const renderer = new AnatomicalDiagramRenderer(canvas);

                renderer.renderDiagram(
                    this.diagramInfo.registryKey,
                    0,
                    0,
                    this.diagramInfo.canvasSize.width,
                    this.diagramInfo.canvasSize.height,
                    this.diagramInfo.renderOptions
                );

                const buffer = canvas.toBuffer('image/png');
                const filename = `asexual_reproduction_types_${Date.now()}.png`;
                fs.writeFileSync(filename, buffer);

                console.log(`✓ Successfully generated: ${filename}`);

                return {
                    success: true,
                    filename: filename,
                    path: `./${filename}`
                };
            } catch (error) {
                console.error(`✗ Error generating diagram:`, error);
                return {
                    success: false,
                    error: error.message
                };
            }
        }
    });

    relatedProblems.push({
        difficulty: 'easier',
        scenario: 'Binary Fission in Bacteria',
        problem: 'Draw the process of binary fission in bacteria. Show how one cell becomes two.',
        parameters: {
            organism: 'bacteria',
            showSteps: true
        },
        type: 'reproduction_development',
        subparts: [
            'Step 1: DNA replicates, cell grows',
            'Step 2: DNA copies move to opposite ends',
            'Step 3: Cell membrane pinches inward',
            'Step 4: Two identical daughter cells form',
            'Result: Clones (genetically identical)'
        ],
        helper: 'Binary fission is the simplest form of reproduction; Very rapid (20 minutes for E. coli)',
        realWorldContext: 'How bacterial populations grow exponentially',
        diagramInfo: {
            type: 'cellDivision',
            registryKey: 'mitosis',
            renderOptions: {
                title: 'Binary Fission Process',
                showLabels: true
            },
            canvasSize: { width: 900, height: 700 }
        },
        generateDiagram: function() {
            try {
                const canvas = createCanvas(
                    this.diagramInfo.canvasSize.width,
                    this.diagramInfo.canvasSize.height
                );

                const renderer = new AnatomicalDiagramRenderer(canvas);

                renderer.renderDiagram(
                    this.diagramInfo.registryKey,
                    0,
                    0,
                    this.diagramInfo.canvasSize.width,
                    this.diagramInfo.canvasSize.height,
                    this.diagramInfo.renderOptions
                );

                const buffer = canvas.toBuffer('image/png');
                const filename = `binary_fission_${Date.now()}.png`;
                fs.writeFileSync(filename, buffer);

                console.log(`✓ Successfully generated: ${filename}`);

                return {
                    success: true,
                    filename: filename,
                    path: `./${filename}`
                };
            } catch (error) {
                console.error(`✗ Error generating diagram:`, error);
                return {
                    success: false,
                    error: error.message
                };
            }
        }
    });

    relatedProblems.push({
        difficulty: 'harder',
        scenario: 'Asexual vs Sexual Reproduction Comparison',
        problem: 'Compare asexual and sexual reproduction. List advantages and disadvantages of each method.',
        parameters: {
            compareTypes: true,
            showAdvantages: true,
            showDisadvantages: true
        },
        type: 'reproduction_development',
        subparts: [
            'Asexual advantages: Rapid, no mate needed, energy efficient',
            'Asexual disadvantages: No genetic variation, vulnerable to environmental changes',
            'Sexual advantages: Genetic variation, adaptation to changing environments',
            'Sexual disadvantages: Slower, requires mate, energy intensive',
            'Evolution: Sexual reproduction provides variation for natural selection'
        ],
        helper: 'Asexual = clones; Sexual = variation; Both strategies have evolutionary benefits',
        realWorldContext: 'Why different organisms use different reproductive strategies',
        diagramInfo: {
            type: 'reproduction',
            registryKey: 'gametogenesis',
            renderOptions: {
                title: 'Asexual vs Sexual Reproduction',
                showBoth: true,
                showLabels: true
            },
            canvasSize: { width: 900, height: 800 }
        },
        generateDiagram: function() {
            try {
                const canvas = createCanvas(
                    this.diagramInfo.canvasSize.width,
                    this.diagramInfo.canvasSize.height
                );

                const renderer = new AnatomicalDiagramRenderer(canvas);

                renderer.renderDiagram(
                    this.diagramInfo.registryKey,
                    0,
                    0,
                    this.diagramInfo.canvasSize.width,
                    this.diagramInfo.canvasSize.height,
                    this.diagramInfo.renderOptions
                );

                const buffer = canvas.toBuffer('image/png');
                const filename = `asexual_vs_sexual_reproduction_${Date.now()}.png`;
                fs.writeFileSync(filename, buffer);

                console.log(`✓ Successfully generated: ${filename}`);

                return {
                    success: true,
                    filename: filename,
                    path: `./${filename}`
                };
            } catch (error) {
                console.error(`✗ Error generating diagram:`, error);
                return {
                    success: false,
                    error: error.message
                };
            }
        }
    });

    return relatedProblems;
}

generateRelatedSexualReproductionDiagram(originalProblem, originalSolution, options) {
    const relatedProblems = [];

    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'Gametogenesis - Sperm and Egg Formation',
        problem: 'Draw and compare spermatogenesis and oogenesis. Show how many gametes each process produces.',
        parameters: {
            showSpermatogenesis: true,
            showOogenesis: true,
            compareResults: true
        },
        type: 'reproduction_development',
        subparts: [
            'Spermatogenesis: One diploid cell → 4 haploid sperm (equal division)',
            'Oogenesis: One diploid cell → 1 haploid egg + 3 polar bodies (unequal division)',
            'Both use meiosis to reduce chromosome number by half',
            'Sperm: small, motile, produced continuously from puberty',
            'Egg: large, non-motile, produced cyclically, contains nutrients'
        ],
        helper: 'Meiosis produces gametes; Fertilization restores diploid number; Genetic variation from crossing over',
        realWorldContext: 'Understanding human reproductive biology',
        diagramInfo: {
            type: 'gametogenesis',
            registryKey: 'gametogenesis',
            renderOptions: {
                title: 'Gametogenesis: Spermatogenesis vs Oogenesis',
                showBoth: true,
                showLabels: true
            },
            canvasSize: { width: 900, height: 800 }
        },
        generateDiagram: function() {
            try {
                const canvas = createCanvas(
                    this.diagramInfo.canvasSize.width,
                    this.diagramInfo.canvasSize.height
                );

                const renderer = new AnatomicalDiagramRenderer(canvas);

                renderer.renderDiagram(
                    this.diagramInfo.registryKey,
                    0,
                    0,
                    this.diagramInfo.canvasSize.width,
                    this.diagramInfo.canvasSize.height,
                    this.diagramInfo.renderOptions
                );

                const buffer = canvas.toBuffer('image/png');
                const filename = `gametogenesis_comparison_${Date.now()}.png`;
                fs.writeFileSync(filename, buffer);

                console.log(`✓ Successfully generated: ${filename}`);

                return {
                    success: true,
                    filename: filename,
                    path: `./${filename}`
                };
            } catch (error) {
                console.error(`✗ Error generating diagram:`, error);
                return {
                    success: false,
                    error: error.message
                };
            }
        }
    });

    relatedProblems.push({
        difficulty: 'easier',
        scenario: 'Fertilization Process',
        problem: 'Draw the fertilization process from sperm-egg contact to zygote formation.',
        parameters: {
            showFertilizationSteps: true,
            showZygoteFormation: true
        },
        type: 'reproduction_development',
        subparts: [
            'Step 1: Sperm reaches egg, binds to zona pellucida',
            'Step 2: Acrosome reaction - enzymes digest egg coating',
            'Step 3: Sperm nucleus enters egg (penetration)',
            'Step 4: Cortical reaction prevents polyspermy',
            'Step 5: Nuclei fuse forming diploid zygote (2n)',
            'Result: Genetic material from both parents combined'
        ],
        helper: 'Fertilization = sperm + egg → zygote; Restores diploid chromosome number; Begins development',
        realWorldContext: 'The beginning of new life in sexual reproduction',
        diagramInfo: {
            type: 'fertilization',
            registryKey: 'fertilization',
            renderOptions: {
                title: 'Fertilization Process',
                showLabels: true
            },
            canvasSize: { width: 900, height: 800 }
        },
        generateDiagram: function() {
            try {
                const canvas = createCanvas(
                    this.diagramInfo.canvasSize.width,
                    this.diagramInfo.canvasSize.height
                );

                const renderer = new AnatomicalDiagramRenderer(canvas);

                renderer.renderDiagram(
                    this.diagramInfo.registryKey,
                    0,
                    0,
                    this.diagramInfo.canvasSize.width,
                    this.diagramInfo.canvasSize.height,
                    this.diagramInfo.renderOptions
                );

                const buffer = canvas.toBuffer('image/png');
                const filename = `fertilization_process_${Date.now()}.png`;
                fs.writeFileSync(filename, buffer);

                console.log(`✓ Successfully generated: ${filename}`);

                return {
                    success: true,
                    filename: filename,
                    path: `./${filename}`
                };
            } catch (error) {
                console.error(`✗ Error generating diagram:`, error);
                return {
                    success: false,
                    error: error.message
                };
            }
        }
    });

    relatedProblems.push({
        difficulty: 'harder',
        scenario: 'Meiosis and Genetic Variation',
        problem: 'Explain how meiosis creates genetic variation through crossing over and independent assortment. Draw diagrams.',
        parameters: {
            showCrossingOver: true,
            showIndependentAssortment: true,
            calculateVariation: true
        },
        type: 'reproduction_development',
        subparts: [
            'Crossing over (Prophase I): Homologous chromosomes exchange DNA segments',
            'Independent assortment (Metaphase I): Random alignment of chromosome pairs',
            'Random fertilization: Any sperm can fertilize any egg',
            'Variation formula: 2^n possible combinations (n = haploid number)',
            'Humans: 2^23 = 8.4 million possible gametes per parent',
            'Combined variation: 8.4 million × 8.4 million = 70 trillion combinations'
        ],
        helper: 'Three sources of variation: crossing over, independent assortment, random fertilization',
        realWorldContext: 'Why siblings (except identical twins) are genetically unique',
        diagramInfo: {
            type: 'meiosis',
            registryKey: 'crossingOver',
            renderOptions: {
                title: 'Genetic Variation in Meiosis',
                showLabels: true
            },
            canvasSize: { width: 900, height: 700 }
        },
        generateDiagram: function() {
            try {
                const canvas = createCanvas(
                    this.diagramInfo.canvasSize.width,
                    this.diagramInfo.canvasSize.height
                );

                const renderer = new AnatomicalDiagramRenderer(canvas);

                renderer.renderDiagram(
                    this.diagramInfo.registryKey,
                    0,
                    0,
                    this.diagramInfo.canvasSize.width,
                    this.diagramInfo.canvasSize.height,
                    this.diagramInfo.renderOptions
                );

                const buffer = canvas.toBuffer('image/png');
                const filename = `meiosis_genetic_variation_${Date.now()}.png`;
                fs.writeFileSync(filename, buffer);

                console.log(`✓ Successfully generated: ${filename}`);

                return {
                    success: true,
                    filename: filename,
                    path: `./${filename}`
                };
            } catch (error) {
                console.error(`✗ Error generating diagram:`, error);
                return {
                    success: false,
                    error: error.message
                };
            }
        }
    });

    return relatedProblems;
}

generateRelatedEmbryonicDevelopmentDiagram(originalProblem, originalSolution, options) {
    const relatedProblems = [];

    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'Early Embryonic Development Stages',
        problem: 'Draw the stages of early embryonic development from zygote to gastrula. Label each stage.',
        parameters: {
            showAllStages: true,
            includeGermLayers: true
        },
        type: 'reproduction_development',
        subparts: [
            'Zygote: Single diploid cell after fertilization',
            'Cleavage: Rapid cell divisions without growth (2, 4, 8, 16 cells)',
            'Morula: Solid ball of cells (~16-32 cells)',
            'Blastula: Hollow ball with fluid-filled cavity (blastocoel)',
            'Gastrulation: Cells migrate to form three germ layers',
            'Gastrula: Three-layered embryo (ectoderm, mesoderm, endoderm)'
        ],
        helper: 'Development sequence: zygote → cleavage → morula → blastula → gastrula → organogenesis',
        realWorldContext: 'Understanding early human development and birth defects',
        diagramInfo: {
            type: 'embryoDevelopment',
            registryKey: 'embryoDevelopment',
            renderOptions: {
                title: 'Early Embryonic Development',
                showLabels: true
            },
            canvasSize: { width: 900, height: 800 }
        },
        generateDiagram: function() {
            try {
                const canvas = createCanvas(
                    this.diagramInfo.canvasSize.width,
                    this.diagramInfo.canvasSize.height
                );

                const renderer = new AnatomicalDiagramRenderer(canvas);

                renderer.renderDiagram(
                    this.diagramInfo.registryKey,
                    0,
                    0,
                    this.diagramInfo.canvasSize.width,
                    this.diagramInfo.canvasSize.height,
                    this.diagramInfo.renderOptions
                );

                const buffer = canvas.toBuffer('image/png');
                const filename = `embryonic_development_stages_${Date.now()}.png`;
                fs.writeFileSync(filename, buffer);

                console.log(`✓ Successfully generated: ${filename}`);

                return {
                    success: true,
                    filename: filename,
                    path: `./${filename}`
                };
            } catch (error) {
                console.error(`✗ Error generating diagram:`, error);
                return {
                    success: false,
                    error: error.message
                };
            }
        }
    });

    relatedProblems.push({
        difficulty: 'easier',
        scenario: 'Three Germ Layers and Their Derivatives',
        problem: 'Draw a gastrula showing the three germ layers. List what organs/tissues develop from each layer.',
        parameters: {
            showGermLayers: true,
            listDerivatives: true
        },
        type: 'reproduction_development',
        subparts: [
            'Ectoderm (outer): Skin, hair, nails, nervous system, sense organs',
            'Mesoderm (middle): Muscles, bones, circulatory system, kidneys, reproductive organs',
            'Endoderm (inner): Digestive tract, respiratory system, liver, pancreas',
            'All organs/tissues derived from these three layers',
            'Gastrulation is critical - determines body plan'
        ],
        helper: 'Remember: Ecto=outside, Meso=middle, Endo=inside; All body structures come from these layers',
        realWorldContext: 'Understanding how complex organisms develop from simple beginnings',
        diagramInfo: {
            type: 'embryoDevelopment',
            registryKey: 'embryoDevelopment',
            renderOptions: {
                title: 'Three Germ Layers',
                showLabels: true
            },
            canvasSize: { width: 900, height: 800 }
        },
        generateDiagram: function() {
            try {
                const canvas = createCanvas(
                    this.diagramInfo.canvasSize.width,
                    this.diagramInfo.canvasSize.height
                );

                const renderer = new AnatomicalDiagramRenderer(canvas);

                renderer.renderDiagram(
                    this.diagramInfo.registryKey,
                    0,
                    0,
                    this.diagramInfo.canvasSize.width,
                    this.diagramInfo.canvasSize.height,
                    this.diagramInfo.renderOptions
                );

                const buffer = canvas.toBuffer('image/png');
                const filename = `three_germ_layers_${Date.now()}.png`;
                fs.writeFileSync(filename, buffer);

                console.log(`✓ Successfully generated: ${filename}`);

                return {
                    success: true,
                    filename: filename,
                    path: `./${filename}`
                };
            } catch (error) {
                console.error(`✗ Error generating diagram:`, error);
                return {
                    success: false,
                    error: error.message
                };
            }
        }
    });

    relatedProblems.push({
        difficulty: 'harder',
        scenario: 'Cleavage vs Normal Cell Division',
        problem: 'Compare cleavage during early development with normal mitotic cell division. Explain key differences.',
        parameters: {
            compareCleavage: true,
            compareMitosis: true,
            explainDifferences: true
        },
        type: 'reproduction_development',
        subparts: [
            'Cleavage: Rapid cell divisions WITHOUT cell growth',
            'Normal mitosis: Cell division WITH growth between divisions',
            'Cleavage result: Many small cells (same total volume as zygote)',
            'Normal mitosis result: Two cells each similar size to parent',
            'Cleavage purpose: Increase cell number rapidly for differentiation',
            'Energy: Cleavage uses stored nutrients from egg',
            'Duration: Cleavage faster (no G1/G2 phases)'
        ],
        helper: 'Cleavage = division without growth; Creates building blocks for embryo',
        realWorldContext: 'How embryos rapidly increase cell number without increasing size',
        diagramInfo: {
            type: 'cellDivision',
            registryKey: 'mitosis',
            renderOptions: {
                title: 'Cleavage vs Normal Mitosis',
                showLabels: true
            },
            canvasSize: { width: 900, height: 700 }
        },
        generateDiagram: function() {
            try {
                const canvas = createCanvas(
                    this.diagramInfo.canvasSize.width,
                    this.diagramInfo.canvasSize.height
                );

                const renderer = new AnatomicalDiagramRenderer(canvas);

                renderer.renderDiagram(
                    this.diagramInfo.registryKey,
                    0,
                    0,
                    this.diagramInfo.canvasSize.width,
                    this.diagramInfo.canvasSize.height,
                    this.diagramInfo.renderOptions
                );

                const buffer = canvas.toBuffer('image/png');
                const filename = `cleavage_vs_mitosis_${Date.now()}.png`;
                fs.writeFileSync(filename, buffer);

                console.log(`✓ Successfully generated: ${filename}`);

                return {
                    success: true,
                    filename: filename,
                    path: `./${filename}`
                };
            } catch (error) {
                console.error(`✗ Error generating diagram:`, error);
                return {
                    success: false,
                    error: error.message
                };
            }
        }
    });

    return relatedProblems;
}

generateRelatedHumanReproductionDiagram(originalProblem, originalSolution, options) {
    const relatedProblems = [];

    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'Human Reproductive Systems',
        problem: 'Draw both male and female reproductive systems. Label all major organs and explain their functions.',
        parameters: {
            showMale: true,
            showFemale: true,
            labelOrgans: true
        },
        type: 'reproduction_development',
        subparts: [
            'Male: Testes (sperm production), epididymis (sperm maturation), vas deferens (sperm transport), penis',
            'Male accessory glands: Seminal vesicles, prostate, bulbourethral glands',
            'Female: Ovaries (egg production), fallopian tubes (fertilization site), uterus (fetal development), vagina',
            'Hormones: Testosterone (male), Estrogen and Progesterone (female)',
            'Both systems produce gametes and hormones'
        ],
        helper: 'Male: continuous sperm production from puberty; Female: cyclic egg release (monthly)',
        realWorldContext: 'Understanding human reproductive anatomy and function',
        diagramInfo: {
            type: 'reproductive',
            registryKey: 'reproductiveSystem',
            renderOptions: {
                title: 'Human Reproductive Systems',
                sex: 'both',
                showLabels: true
            },
            canvasSize: { width: 900, height: 800 }
        },
        generateDiagram: function() {
            try {
                const canvas = createCanvas(
                    this.diagramInfo.canvasSize.width,
                    this.diagramInfo.canvasSize.height
                );

                const renderer = new AnatomicalDiagramRenderer(canvas);

                renderer.renderDiagram(
                    this.diagramInfo.registryKey,
                    0,
                    0,
                    this.diagramInfo.canvasSize.width,
                    this.diagramInfo.canvasSize.height,
                    this.diagramInfo.renderOptions
                );

                const buffer = canvas.toBuffer('image/png');
                const filename = `human_reproductive_systems_${Date.now()}.png`;
                fs.writeFileSync(filename, buffer);

                console.log(`✓ Successfully generated: ${filename}`);

                return {
                    success: true,
                    filename: filename,
                    path: `./${filename}`
                };
            } catch (error) {
                console.error(`✗ Error generating diagram:`, error);
                return {
                    success: false,
                    error: error.message
                };
            }
        }
    });

    relatedProblems.push({
        difficulty: 'easier',
        scenario: 'Menstrual Cycle',
        problem: 'Draw and explain the menstrual cycle showing hormonal changes and uterine changes over 28 days.',
        parameters: {
            showHormones: true,
            showUterineChanges: true,
            show28Days: true
        },
        type: 'reproduction_development',
        subparts: [
            'Days 1-5: Menstruation (shedding of uterine lining)',
            'Days 6-14: Follicular phase (egg matures, estrogen rises, uterine lining rebuilds)',
            'Day 14: Ovulation (LH surge triggers egg release)',
            'Days 15-28: Luteal phase (corpus luteum produces progesterone, maintains lining)',
            'If no pregnancy: Progesterone drops, menstruation begins again',
            'Hormones: FSH, LH (pituitary); Estrogen, Progesterone (ovaries)'
        ],
        helper: 'Cycle regulated by feedback loops between pituitary and ovaries; Average 28 days (varies)',
        realWorldContext: 'Understanding female reproductive physiology and fertility',
        diagramInfo: {
            type: 'reproductive',
            registryKey: 'menstrualCycle',
            renderOptions: {
                title: 'Menstrual Cycle',
                showLabels: true,
                showHormones: true
            },
            canvasSize: { width: 900, height: 700 }
        },
        generateDiagram: function() {
            try {
                const canvas = createCanvas(
                    this.diagramInfo.canvasSize.width,
                    this.diagramInfo.canvasSize.height
                );

                const renderer = new AnatomicalDiagramRenderer(canvas);

                renderer.renderDiagram(
                    this.diagramInfo.registryKey,
                    0,
                    0,
                    this.diagramInfo.canvasSize.width,
                    this.diagramInfo.canvasSize.height,
                    this.diagramInfo.renderOptions
                );

                const buffer = canvas.toBuffer('image/png');
                const filename = `menstrual_cycle_${Date.now()}.png`;
                fs.writeFileSync(filename, buffer);

                console.log(`✓ Successfully generated: ${filename}`);

                return {
                    success: true,
                    filename: filename,
                    path: `./${filename}`
                };
            } catch (error) {
                console.error(`✗ Error generating diagram:`, error);
                return {
                    success: false,
                    error: error.message
                };
            }
        }
    });

    relatedProblems.push({
        difficulty: 'harder',
        scenario: 'Pregnancy and Placental Development',
        problem: 'Draw the structure of the placenta. Explain how it supports fetal development and what it exchanges.',
        parameters: {
            showPlacentaStructure: true,
            showExchange: true,
            showUmbilicalCord: true
        },
        type: 'reproduction_development',
        subparts: [
            'Placenta structure: Maternal tissue + fetal tissue (but blood doesn\'t mix)',
            'Umbilical cord: 2 arteries (carry waste from fetus), 1 vein (brings nutrients to fetus)',
            'Exchange from mother to fetus: Oxygen, nutrients, antibodies',
            'Exchange from fetus to mother: CO2, wastes (urea)',
            'Barrier: Prevents most pathogens and large molecules',
            'Hormones: Produces progesterone and hCG to maintain pregnancy',
            'Duration: Forms by week 12, expelled after birth (afterbirth)'
        ],
        helper: 'Placenta = life support system for fetus; Connects fetal and maternal circulation without mixing blood',
        realWorldContext: 'Understanding pregnancy complications and fetal health',
        diagramInfo: {
            type: 'development',
            registryKey: 'placenta',
            renderOptions: {
                title: 'Placenta Structure and Function',
                showLabels: true
            },
            canvasSize: { width: 900, height: 800 }
        },
        generateDiagram: function() {
            try {
                const canvas = createCanvas(
                    this.diagramInfo.canvasSize.width,
                    this.diagramInfo.canvasSize.height
                );

                const renderer = new AnatomicalDiagramRenderer(canvas);

                renderer.renderDiagram(
                    this.diagramInfo.registryKey,
                    0,
                    0,
                    this.diagramInfo.canvasSize.width,
                    this.diagramInfo.canvasSize.height,
                    this.diagramInfo.renderOptions
                );

                const buffer = canvas.toBuffer('image/png');
                const filename = `placenta_structure_${Date.now()}.png`;
                fs.writeFileSync(filename, buffer);

                console.log(`✓ Successfully generated: ${filename}`);

                return {
                    success: true,
                    filename: filename,
                    path: `./${filename}`
                };
            } catch (error) {
                console.error(`✗ Error generating diagram:`, error);
                return {
                    success: false,
                    error: error.message
                };
            }
        }
    });

    return relatedProblems;
}

const EndSection1 = "close";