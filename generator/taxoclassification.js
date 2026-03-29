Here are all four generators rewritten with the async diagram generation pattern:
generateRelatedClassificationSystemsDiagram(originalProblem, originalSolution, options) {
    const relatedProblems = [];

    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'Five Kingdom Classification System',
        problem: 'Draw the Five Kingdom classification system. Describe the key characteristics of each kingdom.',
        parameters: {
            showAllKingdoms: true,
            showCharacteristics: true
        },
        type: 'taxonomy_classification',
        subparts: [
            'Kingdom Monera: Prokaryotic, unicellular, no nucleus (bacteria, blue-green algae)',
            'Kingdom Protista: Eukaryotic, mostly unicellular, diverse (amoeba, paramecium, algae)',
            'Kingdom Fungi: Eukaryotic, heterotrophic, absorptive nutrition, chitin cell walls (mushrooms, yeast)',
            'Kingdom Plantae: Eukaryotic, autotrophic (photosynthesis), cellulose cell walls, multicellular',
            'Kingdom Animalia: Eukaryotic, heterotrophic, multicellular, no cell walls, mobile',
            'Developed by R.H. Whittaker (1969)'
        ],
        helper: 'Five kingdoms based on: cell type, cell structure, nutrition mode, body organization',
        realWorldContext: 'Organizing biodiversity into manageable groups',
        diagramInfo: {
            type: 'classification',
            registryKey: 'fiveKingdoms',
            renderOptions: {
                title: 'Five Kingdom Classification',
                showLabels: true
            },
            canvasSize: { width: 900, height: 800 }
        },
        generateDiagram: async function() {
            try {
                console.log('Starting diagram generation for:', this.scenario);

                const renderer = new BiologyDiagramsRenderer();

                const canvas = await renderer.renderDiagram(
                    this.diagramInfo.registryKey,
                    0,
                    0,
                    this.diagramInfo.canvasSize.width,
                    this.diagramInfo.canvasSize.height,
                    this.diagramInfo.renderOptions
                );

                const buffer = await canvas.encode('png');
                const filename = `five_kingdoms_classification_${Date.now()}.png`;
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
                    error: error.message,
                    stack: error.stack
                };
            }
        }
    });

    relatedProblems.push({
        difficulty: 'easier',
        scenario: 'Three Domain System',
        problem: 'Draw the Three Domain system showing Bacteria, Archaea, and Eukarya. Explain how this differs from Five Kingdom system.',
        parameters: {
            showThreeDomains: true,
            compareToKingdoms: true
        },
        type: 'taxonomy_classification',
        subparts: [
            'Domain Bacteria: Prokaryotic, peptidoglycan cell walls, common bacteria',
            'Domain Archaea: Prokaryotic, no peptidoglycan, extremophiles (hot springs, salt lakes)',
            'Domain Eukarya: Eukaryotic, includes all kingdoms with nuclei (Protista, Fungi, Plantae, Animalia)',
            'Based on molecular evidence (ribosomal RNA sequences)',
            'Archaea more closely related to Eukarya than to Bacteria',
            'Proposed by Carl Woese (1990), now widely accepted'
        ],
        helper: 'Three domains are highest level of classification; Based on genetic and biochemical differences',
        realWorldContext: 'Modern classification reflects evolutionary relationships',
        diagramInfo: {
            type: 'classification',
            registryKey: 'threeDomains',
            renderOptions: {
                title: 'Three Domain System',
                showLabels: true
            },
            canvasSize: { width: 900, height: 800 }
        },
        generateDiagram: async function() {
            try {
                console.log('Starting diagram generation for:', this.scenario);

                const renderer = new BiologyDiagramsRenderer();

                const canvas = await renderer.renderDiagram(
                    this.diagramInfo.registryKey,
                    0,
                    0,
                    this.diagramInfo.canvasSize.width,
                    this.diagramInfo.canvasSize.height,
                    this.diagramInfo.renderOptions
                );

                const buffer = await canvas.encode('png');
                const filename = `three_domains_system_${Date.now()}.png`;
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
                    error: error.message,
                    stack: error.stack
                };
            }
        }
    });

    relatedProblems.push({
        difficulty: 'harder',
        scenario: 'Taxonomic Hierarchy - Complete Classification',
        problem: 'Draw the complete taxonomic hierarchy from Domain to Species. Use humans (Homo sapiens) as an example.',
        parameters: {
            showAllLevels: true,
            useHumanExample: true,
            showMnemonic: true
        },
        type: 'taxonomy_classification',
        subparts: [
            'Domain: Eukarya (organisms with nucleus)',
            'Kingdom: Animalia (multicellular, heterotrophic, mobile)',
            'Phylum: Chordata (notochord, dorsal nerve cord)',
            'Class: Mammalia (hair, mammary glands, warm-blooded)',
            'Order: Primates (opposable thumbs, forward-facing eyes)',
            'Family: Hominidae (great apes)',
            'Genus: Homo (upright posture, large brain)',
            'Species: sapiens (modern humans)',
            'Mnemonic: "Dear King Philip Came Over For Good Soup"',
            'Each level becomes more specific'
        ],
        helper: 'Hierarchy: Domain > Kingdom > Phylum > Class > Order > Family > Genus > Species',
        realWorldContext: 'Universal system for naming and organizing all life on Earth',
        diagramInfo: {
            type: 'classification',
            registryKey: 'taxonomyHierarchy',
            renderOptions: {
                title: 'Taxonomic Hierarchy (Homo sapiens)',
                showExample: true,
                showLabels: true
            },
            canvasSize: { width: 800, height: 900 }
        },
        generateDiagram: async function() {
            try {
                console.log('Starting diagram generation for:', this.scenario);

                const renderer = new BiologyDiagramsRenderer();

                const canvas = await renderer.renderDiagram(
                    this.diagramInfo.registryKey,
                    0,
                    0,
                    this.diagramInfo.canvasSize.width,
                    this.diagramInfo.canvasSize.height,
                    this.diagramInfo.renderOptions
                );

                const buffer = await canvas.encode('png');
                const filename = `taxonomic_hierarchy_${Date.now()}.png`;
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
                    error: error.message,
                    stack: error.stack
                };
            }
        }
    });

    return relatedProblems;
}

generateRelatedPhylogenyDiagram(originalProblem, originalSolution, options) {
    const relatedProblems = [];

    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'Phylogenetic Tree Construction',
        problem: 'Draw a phylogenetic tree showing evolutionary relationships among vertebrates. Include fish, amphibians, reptiles, birds, and mammals.',
        parameters: {
            showVertebrates: true,
            showCommonAncestor: true,
            showDerivedTraits: true
        },
        type: 'taxonomy_classification',
        subparts: [
            'Common ancestor: Ancestral vertebrate at base of tree',
            'First branch: Fish (jaws, gills)',
            'Second branch: Amphibians (four limbs, lungs)',
            'Third branch: Reptiles (amniotic egg, dry skin)',
            'Birds: Feathers, hollow bones (from reptiles)',
            'Mammals: Hair, mammary glands (from reptiles)',
            'Branch points = common ancestors; Tips = modern organisms',
            'Shows evolutionary relationships based on shared traits'
        ],
        helper: 'Phylogenetic trees show "who is related to whom"; Closer branches = more recent common ancestor',
        realWorldContext: 'Understanding evolutionary history and relationships',
        diagramInfo: {
            type: 'phylogeny',
            registryKey: 'phylogeneticTree',
            renderOptions: {
                title: 'Vertebrate Phylogenetic Tree',
                showLabels: true
            },
            canvasSize: { width: 900, height: 800 }
        },
        generateDiagram: async function() {
            try {
                console.log('Starting diagram generation for:', this.scenario);

                const renderer = new BiologyDiagramsRenderer();

                const canvas = await renderer.renderDiagram(
                    this.diagramInfo.registryKey,
                    0,
                    0,
                    this.diagramInfo.canvasSize.width,
                    this.diagramInfo.canvasSize.height,
                    this.diagramInfo.renderOptions
                );

                const buffer = await canvas.encode('png');
                const filename = `phylogenetic_tree_vertebrates_${Date.now()}.png`;
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
                    error: error.message,
                    stack: error.stack
                };
            }
        }
    });

    relatedProblems.push({
        difficulty: 'easier',
        scenario: 'Cladogram Reading and Interpretation',
        problem: 'Draw a simple cladogram. Explain how to read it and identify derived characteristics at each branch point.',
        parameters: {
            showSimpleCladogram: true,
            showDerivedCharacters: true,
            explainReading: true
        },
        type: 'taxonomy_classification',
        subparts: [
            'Cladogram structure: Branches show evolutionary splits',
            'Branch points (nodes): Represent common ancestors',
            'Derived characteristics: New traits that appear at each node',
            'Organisms sharing more recent nodes are more closely related',
            'Example traits: Backbone, four limbs, amniotic egg, hair',
            'Tips of branches: Modern organisms or species',
            'Root: Most ancient common ancestor'
        ],
        helper: 'Cladogram = branching diagram showing evolutionary relationships; Based on shared derived characteristics',
        realWorldContext: 'Tool used by biologists to show evolutionary relationships',
        diagramInfo: {
            type: 'phylogeny',
            registryKey: 'cladogram',
            renderOptions: {
                title: 'Cladogram - Evolutionary Relationships',
                showLabels: true
            },
            canvasSize: { width: 900, height: 700 }
        },
        generateDiagram: async function() {
            try {
                console.log('Starting diagram generation for:', this.scenario);

                const renderer = new BiologyDiagramsRenderer();

                const canvas = await renderer.renderDiagram(
                    this.diagramInfo.registryKey,
                    0,
                    0,
                    this.diagramInfo.canvasSize.width,
                    this.diagramInfo.canvasSize.height,
                    this.diagramInfo.renderOptions
                );

                const buffer = await canvas.encode('png');
                const filename = `cladogram_interpretation_${Date.now()}.png`;
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
                    error: error.message,
                    stack: error.stack
                };
            }
        }
    });

    relatedProblems.push({
        difficulty: 'harder',
        scenario: 'Phylogenetic Tree vs Cladogram Comparison',
        problem: 'Compare phylogenetic trees and cladograms. Draw examples of each and explain how they differ in what information they show.',
        parameters: {
            showBothTypes: true,
            compareDifferences: true,
            explainUses: true
        },
        type: 'taxonomy_classification',
        subparts: [
            'Phylogenetic tree: Shows evolutionary relationships AND time/distance',
            'Cladogram: Shows only branching patterns (relationships), not time',
            'Phylogenetic tree: Branch lengths can represent evolutionary distance or time',
            'Cladogram: All branch lengths arbitrary (only topology matters)',
            'Both show: Common ancestry, derived traits, monophyletic groups',
            'Uses: Trees for detailed evolutionary studies; Cladograms for classification',
            'Both based on: Shared derived characteristics (synapomorphies)'
        ],
        helper: 'Phylogenetic tree = relationships + time; Cladogram = relationships only',
        realWorldContext: 'Different tools for different questions in evolutionary biology',
        diagramInfo: {
            type: 'phylogeny',
            registryKey: 'phylogeneticTree',
            renderOptions: {
                title: 'Phylogenetic Tree vs Cladogram',
                showLabels: true
            },
            canvasSize: { width: 900, height: 800 }
        },
        generateDiagram: async function() {
            try {
                console.log('Starting diagram generation for:', this.scenario);

                const renderer = new BiologyDiagramsRenderer();

                const canvas = await renderer.renderDiagram(
                    this.diagramInfo.registryKey,
                    0,
                    0,
                    this.diagramInfo.canvasSize.width,
                    this.diagramInfo.canvasSize.height,
                    this.diagramInfo.renderOptions
                );

                const buffer = await canvas.encode('png');
                const filename = `phylogenetic_vs_cladogram_${Date.now()}.png`;
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
                    error: error.message,
                    stack: error.stack
                };
            }
        }
    });

    return relatedProblems;
}

generateRelatedDomainsKingdomsDiagram(originalProblem, originalSolution, options) {
    const relatedProblems = [];

    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'Three Domains and Six Kingdoms Integration',
        problem: 'Draw a diagram showing how the Three Domain system incorporates the kingdoms. Show which kingdoms belong to each domain.',
        parameters: {
            showDomains: true,
            showKingdoms: true,
            showRelationships: true
        },
        type: 'taxonomy_classification',
        subparts: [
            'Domain Bacteria: Kingdom Eubacteria (true bacteria)',
            'Domain Archaea: Kingdom Archaebacteria (ancient bacteria)',
            'Domain Eukarya: Four kingdoms',
            '  - Kingdom Protista (diverse unicellular eukaryotes)',
            '  - Kingdom Fungi (decomposers, absorptive nutrition)',
            '  - Kingdom Plantae (photosynthetic, multicellular)',
            '  - Kingdom Animalia (heterotrophic, multicellular)',
            'Modern system: Three domains > Six kingdoms'
        ],
        helper: 'Domains = highest level; Two prokaryotic domains (Bacteria, Archaea), one eukaryotic (Eukarya)',
        realWorldContext: 'Current classification system used by biologists worldwide',
        diagramInfo: {
            type: 'classification',
            registryKey: 'threeDomains',
            renderOptions: {
                title: 'Three Domains and Kingdoms',
                showLabels: true
            },
            canvasSize: { width: 900, height: 800 }
        },
        generateDiagram: async function() {
            try {
                console.log('Starting diagram generation for:', this.scenario);

                const renderer = new BiologyDiagramsRenderer();

                const canvas = await renderer.renderDiagram(
                    this.diagramInfo.registryKey,
                    0,
                    0,
                    this.diagramInfo.canvasSize.width,
                    this.diagramInfo.canvasSize.height,
                    this.diagramInfo.renderOptions
                );

                const buffer = await canvas.encode('png');
                const filename = `domains_kingdoms_integration_${Date.now()}.png`;
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
                    error: error.message,
                    stack: error.stack
                };
            }
        }
    });

    relatedProblems.push({
        difficulty: 'easier',
        scenario: 'Comparing Prokaryotic Domains',
        problem: 'Create a comparison chart of Domain Bacteria and Domain Archaea. List key similarities and differences.',
        parameters: {
            compareBacteria: true,
            compareArchaea: true,
            showDifferences: true
        },
        type: 'taxonomy_classification',
        subparts: [
            'Similarities: Both prokaryotic (no nucleus), unicellular, similar size',
            'Cell wall: Bacteria have peptidoglycan, Archaea lack peptidoglycan',
            'Habitat: Bacteria everywhere, Archaea often in extreme environments',
            'Metabolism: Bacteria diverse, Archaea include methanogens',
            'Genetics: Archaea ribosomal RNA more similar to Eukarya',
            'Examples Bacteria: E. coli, Streptococcus',
            'Examples Archaea: Methanogens (swamps), Halophiles (salt lakes), Thermophiles (hot springs)'
        ],
        helper: 'Key difference: Archaea genetically closer to Eukarya despite being prokaryotes',
        realWorldContext: 'Understanding microbial diversity and evolution',
        diagramInfo: {
            type: 'classification',
            registryKey: 'prokaryoticVsEukaryotic',
            renderOptions: {
                title: 'Bacteria vs Archaea Comparison',
                showLabels: true
            },
            canvasSize: { width: 1000, height: 700 }
        },
        generateDiagram: async function() {
            try {
                console.log('Starting diagram generation for:', this.scenario);

                const renderer = new BiologyDiagramsRenderer();

                const canvas = await renderer.renderDiagram(
                    this.diagramInfo.registryKey,
                    0,
                    0,
                    this.diagramInfo.canvasSize.width,
                    this.diagramInfo.canvasSize.height,
                    this.diagramInfo.renderOptions
                );

                const buffer = await canvas.encode('png');
                const filename = `bacteria_vs_archaea_${Date.now()}.png`;
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
                    error: error.message,
                    stack: error.stack
                };
            }
        }
    });

    relatedProblems.push({
        difficulty: 'harder',
        scenario: 'Evolution of Classification Systems',
        problem: 'Trace the evolution of biological classification from Linnaeus to modern Three Domain system. Explain why systems changed.',
        parameters: {
            showHistoricalProgression: true,
            explainChanges: true,
            showEvidence: true
        },
        type: 'taxonomy_classification',
        subparts: [
            '1. Linnaeus (1750s): Two kingdoms (Plantae, Animalia) based on visible traits',
            '2. Haeckel (1866): Three kingdoms added Protista (simple organisms)',
            '3. Copeland (1938): Four kingdoms split Monera (bacteria) from Protista',
            '4. Whittaker (1969): Five kingdoms added Fungi as separate kingdom',
            '5. Woese (1990): Three domains based on molecular evidence (rRNA)',
            'Why changed: New technology (microscopes, DNA sequencing) revealed hidden relationships',
            'Modern basis: Evolutionary relationships, not just appearance',
            'Key insight: Archaea are distinct from Bacteria despite similar appearance'
        ],
        helper: 'Classification reflects current understanding; Changes as we learn more about relationships',
        realWorldContext: 'Science is self-correcting; Classification improves with new evidence',
        diagramInfo: {
            type: 'classification',
            registryKey: 'fiveKingdoms',
            renderOptions: {
                title: 'Evolution of Classification Systems',
                showLabels: true
            },
            canvasSize: { width: 900, height: 800 }
        },
        generateDiagram: async function() {
            try {
                console.log('Starting diagram generation for:', this.scenario);

                const renderer = new BiologyDiagramsRenderer();

                const canvas = await renderer.renderDiagram(
                    this.diagramInfo.registryKey,
                    0,
                    0,
                    this.diagramInfo.canvasSize.width,
                    this.diagramInfo.canvasSize.height,
                    this.diagramInfo.renderOptions
                );

                const buffer = await canvas.encode('png');
                const filename = `classification_evolution_${Date.now()}.png`;
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
                    error: error.message,
                    stack: error.stack
                };
            }
        }
    });

    return relatedProblems;
}

generateRelatedBinomialNomenclatureDiagram(originalProblem, originalSolution, options) {
    const relatedProblems = [];

    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'Binomial Nomenclature Rules and Examples',
        problem: 'Explain the binomial nomenclature system. Give five examples of organisms with their scientific names properly written.',
        parameters: {
            showRules: true,
            giveExamples: true,
            explainFormat: true
        },
        type: 'taxonomy_classification',
        subparts: [
            'Format: Genus species (two-part name in Latin)',
            'Rules: Genus capitalized, species lowercase, both italicized (or underlined)',
            'Examples:',
            '  - Homo sapiens (humans)',
            '  - Canis lupus (gray wolf)',
            '  - Felis catus (domestic cat)',
            '  - Quercus alba (white oak)',
            '  - Escherichia coli (E. coli bacteria)',
            'Developed by: Carl Linnaeus (1758)',
            'Purpose: Universal naming system, avoids confusion from common names'
        ],
        helper: 'Scientific name = Genus + species; Same worldwide, regardless of language',
        realWorldContext: 'Standard system used by all biologists to identify organisms',
        diagramInfo: {
            type: 'classification',
            registryKey: 'taxonomyHierarchy',
            renderOptions: {
                title: 'Binomial Nomenclature System',
                showExample: true,
                showLabels: true
            },
            canvasSize: { width: 800, height: 900 }
        },
        generateDiagram: async function() {
            try {
                console.log('Starting diagram generation for:', this.scenario);

                const renderer = new BiologyDiagramsRenderer();

                const canvas = await renderer.renderDiagram(
                    this.diagramInfo.registryKey,
                    0,
                    0,
                    this.diagramInfo.canvasSize.width,
                    this.diagramInfo.canvasSize.height,
                    this.diagramInfo.renderOptions
                );

                const buffer = await canvas.encode('png');
                const filename = `binomial_nomenclature_${Date.now()}.png`;
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
                    error: error.message,
                    stack: error.stack
                };
            }
        }
    });

    relatedProblems.push({
        difficulty: 'easier',
        scenario: 'Common Names vs Scientific Names',
        problem: 'Explain why scientific names are necessary. Give examples where common names cause confusion but scientific names clarify.',
        parameters: {
            showProblemWithCommonNames: true,
            showBenefitsScientificNames: true
        },
        type: 'taxonomy_classification',
        subparts: [
            'Problem 1: Same common name for different organisms',
            '  - "Robin": Turdus migratorius (American) vs Erithacus rubecula (European) - different species!',
            'Problem 2: Different common names for same organism',
            '  - Mountain lion = Cougar = Puma = Panther = Puma concolor (all same species!)',
            'Problem 3: Language barriers',
            '  - Cat (English), Gato (Spanish), Chat (French) = all Felis catus',
            'Benefits of scientific names: Universal, precise, show relationships',
            'Scientific name works in any language, any country'
        ],
        helper: 'Scientific names eliminate confusion; One organism = one name worldwide',
        realWorldContext: 'Essential for clear communication in biology and medicine',
        diagramInfo: {
            type: 'classification',
            registryKey: 'taxonomyHierarchy',
            renderOptions: {
                title: 'Scientific Naming Importance',
                showExample: true,
                showLabels: true
            },
            canvasSize: { width: 800, height: 900 }
        },
        generateDiagram: async function() {
            try {
                console.log('Starting diagram generation for:', this.scenario);

                const renderer = new BiologyDiagramsRenderer();

                const canvas = await renderer.renderDiagram(
                    this.diagramInfo.registryKey,
                    0,
                    0,
                    this.diagramInfo.canvasSize.width,
                    this.diagramInfo.canvasSize.height,
                    this.diagramInfo.renderOptions
                );

                const buffer = await canvas.encode('png');
                const filename = `common_vs_scientific_names_${Date.now()}.png`;
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
                    error: error.message,
                    stack: error.stack
                };
            }
        }
    });

    relatedProblems.push({
        difficulty: 'harder',
        scenario: 'Dichotomous Key Construction and Use',
        problem: 'Create a dichotomous key to identify 6 different organisms. Show how to use the key step-by-step.',
        parameters: {
            createKey: true,
            showHowToUse: true,
            identifyOrganisms: true
        },
        type: 'taxonomy_classification',
        subparts: [
            'Dichotomous key: Identification tool using pairs of contrasting statements',
            'Structure: Each step has two choices (yes/no, present/absent)',
            'Example key for leaves:',
            '  1a. Leaves needle-like → Go to 2',
            '  1b. Leaves broad and flat → Go to 3',
            '  2a. Needles in clusters → Pine',
            '  2b. Needles single → Spruce',
            '  3a. Leaf edges smooth → Dogwood',
            '  3b. Leaf edges serrated → Oak',
            'Usage: Start at 1, follow choices until organism identified',
            'Construction tips: Use observable traits, create clear dichotomies'
        ],
        helper: 'Dichotomous = divided into two parts; Key works by elimination through choices',
        realWorldContext: 'Tool used by field biologists to identify unknown organisms',
        diagramInfo: {
            type: 'classification',
            registryKey: 'dichotomousKey',
            renderOptions: {
                title: 'Dichotomous Key Example',
                keyType: 'leaves',
                showLabels: true
            },
            canvasSize: { width: 900, height: 800 }
        },
        generateDiagram: async function() {
            try {
                console.log('Starting diagram generation for:', this.scenario);

                const renderer = new BiologyDiagramsRenderer();

                const canvas = await renderer.renderDiagram(
                    this.diagramInfo.registryKey,
                    0,
                    0,
                    this.diagramInfo.canvasSize.width,
                    this.diagramInfo.canvasSize.height,
                    this.diagramInfo.renderOptions
                );

                const buffer = await canvas.encode('png');
                const filename = `dichotomous_key_${Date.now()}.png`;
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
                    error: error.message,
                    stack: error.stack
                };
            }
        }
    });

    return relatedProblems;
}

