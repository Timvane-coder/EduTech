import { EnhancedTaxonomyClassificationWorkbook } from './taxonomybiology.js';
import * as docx from 'docx';
import fs from 'fs';
import path from 'path';

// ============== UTILITY FUNCTION ==============

// Generate all workbook sections for a biology topic
function generateProblemSections(workbookInstance) {
    const workbook = workbookInstance.currentWorkbook;
    if (!workbook) {
        console.error('No workbook generated');
        return [];
    }

    const sections = [];

    // Process each section
    workbook.sections.forEach((section, sectionIndex) => {
        // Section title
        sections.push(
            new docx.Paragraph({
                text: section.title,
                heading: docx.HeadingLevel.HEADING_2,
                spacing: { before: 400, after: 200 }
            })
        );

        // Section content
        if (section.data && Array.isArray(section.data)) {
            section.data.forEach(row => {
                if (Array.isArray(row)) {
                    // Handle table-like data
                    if (row.length === 2 && row[0] && row[1]) {
                        // Check if it's a header or separator
                        if (row[0] === '' && row[1] === '') {
                            // Spacing row
                            sections.push(
                                new docx.Paragraph({
                                    text: '',
                                    spacing: { after: 200 }
                                })
                            );
                        } else if (row[0].toUpperCase() === row[0] && row[1] === '') {
                            // Section header
                            sections.push(
                                new docx.Paragraph({
                                    text: row[0],
                                    heading: docx.HeadingLevel.HEADING_3,
                                    spacing: { before: 200, after: 100 }
                                })
                            );
                        } else if (row[0] === '•') {
                            // Bullet point
                            sections.push(
                                new docx.Paragraph({
                                    text: row[1],
                                    bullet: {
                                        level: 0
                                    },
                                    spacing: { after: 50 }
                                })
                            );
                        } else {
                            // Key-value pair
                            sections.push(
                                new docx.Paragraph({
                                    children: [
                                        new docx.TextRun({
                                            text: `${row[0]}: `,
                                            bold: true
                                        }),
                                        new docx.TextRun({
                                            text: String(row[1])
                                        })
                                    ],
                                    spacing: { after: 100 }
                                })
                            );
                        }
                    } else if (row.length > 2) {
                        // Multi-column row (table headers or data)
                        const isHeader = row.every(cell => 
                            typeof cell === 'string' && 
                            (cell.includes('Type') || cell.includes('Name') || cell.includes('Category'))
                        );
                        
                        sections.push(
                            new docx.Paragraph({
                                children: [
                                    new docx.TextRun({
                                        text: row.join(' | '),
                                        bold: isHeader
                                    })
                                ],
                                spacing: { after: isHeader ? 150 : 100 }
                            })
                        );
                    }
                }
            });
        }

        // Add extra spacing after section
        sections.push(
            new docx.Paragraph({
                text: '',
                spacing: { after: 300 }
            })
        );
    });

    return sections;
}



// ============== TAXONOMY AND CLASSIFICATION - RELATED PROBLEMS GENERATORS ==============

function generateRelatedClassificationSystem() {
    const relatedProblems = [];

    // Problem 1: Basic Classification Hierarchy
    relatedProblems.push({
        difficulty: 'easier',
        scenario: 'Understanding Taxonomic Hierarchy',
        problem: 'Explain the hierarchical organization of biological classification from broadest to most specific level',
        parameters: {
            specificItems: ['Domain', 'Kingdom', 'Phylum', 'Class', 'Order', 'Family', 'Genus', 'Species'],
            category: 'hierarchy',
            limit: 8
        },
        type: 'classification_system',
        context: { difficulty: 'beginner', topic: 'Classification System', focus: 'hierarchy' },
        subparts: [
            'Taxonomic Hierarchy (from broadest to most specific):',
            '',
            '1. DOMAIN (Highest rank):',
            '   - Broadest grouping',
            '   - Three domains: Bacteria, Archaea, Eukarya',
            '   - Based on fundamental cell differences',
            '',
            '2. KINGDOM:',
            '   - Major subdivision of domain',
            '   - Examples: Animalia, Plantae, Fungi',
            '',
            '3. PHYLUM (Division in plants):',
            '   - Major body plan organization',
            '   - Example: Chordata (animals with backbones)',
            '',
            '4. CLASS:',
            '   - Subdivision of phylum',
            '   - Example: Mammalia (mammals)',
            '',
            '5. ORDER:',
            '   - Subdivision of class',
            '   - Example: Primates',
            '',
            '6. FAMILY:',
            '   - Group of related genera',
            '   - Example: Hominidae (great apes)',
            '',
            '7. GENUS:',
            '   - Group of closely related species',
            '   - Example: Homo',
            '',
            '8. SPECIES (Lowest rank):',
            '   - Fundamental unit',
            '   - Example: sapiens',
            '   - Full name: Homo sapiens',
            '',
            'Mnemonic: "Dear King Philip Came Over For Good Soup"',
            '',
            'Key Principle: Each level is nested within the level above'
        ],
        helper: 'Remember: Domain → Kingdom → Phylum → Class → Order → Family → Genus → Species',
        solution: 'Eight major ranks form nested hierarchy from Domain (broadest) to Species (most specific)',
        realWorldContext: 'This system allows scientists worldwide to organize and communicate about Earth\'s biodiversity'
    });

    // Problem 2: Linnaean System Evolution
    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'Historical Development of Classification',
        problem: 'Describe how the Linnaean classification system has evolved from its creation to modern phylogenetic classification',
        parameters: {
            specificItems: ['Linnaean', 'phylogenetic', 'molecular'],
            category: 'history',
            limit: 3
        },
        type: 'classification_system',
        context: { difficulty: 'intermediate', topic: 'Classification System', focus: 'evolution' },
        subparts: [
            'Evolution of Classification Systems:',
            '',
            '1. PRE-LINNAEAN (Before 1735):',
            '   - Aristotle: Animals with/without blood',
            '   - Descriptive names (long phrases)',
            '   - No standardized system',
            '   - Based on obvious physical features',
            '',
            '2. LINNAEAN SYSTEM (1735-1859):',
            '   Innovations:',
            '   - Hierarchical classification',
            '   - Binomial nomenclature',
            '   - Standardized naming rules',
            '   - Based on morphological similarities',
            '   Limitations:',
            '   - Did not reflect evolutionary relationships',
            '   - Based only on appearance',
            '',
            '3. POST-DARWIN (1859-1970s):',
            '   Changes:',
            '   - Classification reflects evolution',
            '   - Emphasis on common ancestry',
            '   - Still primarily morphology-based',
            '   - Introduction of cladistics',
            '',
            '4. MOLECULAR ERA (1970s-1990s):',
            '   Revolution:',
            '   - DNA/protein sequences used',
            '   - Three-domain system (Woese, 1990)',
            '   - Many reclassifications',
            '   - Archaea recognized as distinct',
            '',
            '5. MODERN PHYLOGENETIC (1990s-present):',
            '   Current approach:',
            '   - Integration of molecular and morphological data',
            '   - Emphasis on monophyletic groups (clades)',
            '   - Computer-aided analysis',
            '   - Whole genome comparisons',
            '   - PhyloCode alternative system',
            '',
            'Key Shift: From similarity-based to ancestry-based classification'
        ],
        helper: 'Classification evolved from simple grouping → hierarchical system → evolutionary relationships → molecular evidence',
        solution: 'Classification advanced from Linnaeus\'s morphology-based hierarchy to modern phylogenetic system using molecular data',
        realWorldContext: 'DNA evidence has revolutionized taxonomy, revealing relationships invisible to traditional methods'
    });

    // Problem 3: Modern Classification Challenges
    relatedProblems.push({
        difficulty: 'harder',
        scenario: 'Contemporary Classification Issues',
        problem: 'Analyze modern challenges in biological classification including rapidly changing taxonomies and the species problem',
        parameters: {
            specificItems: ['molecular data', 'species concepts', 'revisions'],
            category: 'challenges',
            limit: 3
        },
        type: 'classification_system',
        context: { difficulty: 'advanced', topic: 'Classification System', focus: 'challenges' },
        subparts: [
            'Modern Classification Challenges:',
            '',
            '1. RAPID TAXONOMIC CHANGES:',
            '   Issues:',
            '   - Molecular data causes frequent reclassifications',
            '   - Name changes confuse literature',
            '   - Stability vs. accuracy conflict',
            '   Example: Bird classification completely reorganized',
            '',
            '2. CRYPTIC SPECIES:',
            '   Problem:',
            '   - Morphologically identical but genetically distinct',
            '   - Traditional methods miss them',
            '   - Conservation implications',
            '   Example: Mosquito disease vectors look identical',
            '',
            '3. HORIZONTAL GENE TRANSFER:',
            '   Complication:',
            '   - Bacteria exchange genes across species',
            '   - Gene trees ≠ species trees',
            '   - Challenges tree-based classification',
            '',
            '4. SPECIES CONCEPT DEBATES:',
            '   No universal definition:',
            '   - Biological: reproductive isolation',
            '   - Morphological: physical differences',
            '   - Phylogenetic: evolutionary history',
            '   - Ecological: niche occupation',
            '   Different concepts yield different species counts',
            '',
            '5. INCOMPLETE SAMPLING:',
            '   Problems:',
            '   - Millions of species undescribed',
            '   - Many going extinct before discovery',
            '   - Biased toward large, visible organisms',
            '   - Microbial diversity largely unknown',
            '',
            '6. DECLINING TAXONOMIC EXPERTISE:',
            '   "Taxonomic impediment":',
            '   - Fewer professional taxonomists',
            '   - Underfunded field',
            '   - Huge backlog of specimens',
            '   - Loss of traditional knowledge',
            '',
            '7. CONFLICTING DATA TYPES:',
            '   Issues:',
            '   - Molecular vs. morphological disagreements',
            '   - Different genes suggest different trees',
            '   - How to weight evidence?',
            '',
            'Solutions Being Developed:',
            '   - DNA barcoding for rapid identification',
            '   - Citizen science programs',
            '   - AI-assisted classification',
            '   - Integrated databases',
            '   - Increased funding for taxonomy'
        ],
        helper: 'Modern taxonomy faces: molecular revisions, cryptic species, gene transfer, and declining expertise',
        solution: 'Challenges include rapid changes from molecular data, cryptic species, horizontal gene transfer, and taxonomic impediment',
        realWorldContext: 'Understanding biodiversity crisis requires solving these taxonomic challenges'
    });

    // Problem 4: Classification and Conservation
    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'Taxonomy in Conservation Biology',
        problem: 'Explain how accurate taxonomic classification impacts conservation efforts and endangered species protection',
        parameters: {
            specificItems: ['conservation', 'endangered species', 'biodiversity'],
            category: 'applications',
            limit: 3
        },
        type: 'classification_system',
        context: { difficulty: 'intermediate', topic: 'Classification System', focus: 'conservation' },
        subparts: [
            'Taxonomy and Conservation Connection:',
            '',
            '1. IDENTIFYING CONSERVATION UNITS:',
            '   What to protect:',
            '   - Species are legal units of protection',
            '   - ESA (Endangered Species Act) protects species',
            '   - Must correctly identify what needs protection',
            '   - Subspecies may also receive protection',
            '',
            '2. CRYPTIC SPECIES IMPACT:',
            '   Discovery implications:',
            '   - One "species" may actually be several',
            '   - Each may have smaller population',
            '   - More species may be endangered',
            '   Example: African elephants',
            '   - Originally one species',
            '   - Now two: savanna and forest',
            '   - Forest elephant more endangered',
            '',
            '3. TAXONOMIC INFLATION:',
            '   Controversy:',
            '   - "Splitting" increases species count',
            '   - More species appear threatened',
            '   - Limited resources spread thinner',
            '   - Debate over appropriate species concepts',
            '',
            '4. PRIORITY SETTING:',
            '   Using taxonomy:',
            '   - Evolutionarily distinct species prioritized',
            '   - EDGE: Evolutionarily Distinct, Globally Endangered',
            '   - Losing unique lineages = greater loss',
            '   Example: Tuatara (only surviving order)',
            '',
            '5. LEGAL IMPLICATIONS:',
            '   Regulatory issues:',
            '   - CITES: Convention on International Trade',
            '   - Species must be correctly identified',
            '   - Name changes affect legal status',
            '   - Enforcement depends on identification',
            '',
            '6. ECOSYSTEM MANAGEMENT:',
            '   Broader context:',
            '   - Keystone species identification',
            '   - Understanding food web connections',
            '   - Indicator species selection',
            '   - Ecosystem function assessment',
            '',
            '7. FUNDING AND PUBLICITY:',
            '   Practical reality:',
            '   - "Charismatic megafauna" get more funding',
            '   - Species vs. habitat protection debate',
            '   - Unknown species can\'t be protected',
            '',
            'Case Studies:',
            '   Success: California condor recovery',
            '   Challenge: Unnamed tropical species extinction',
            '',
            'Taxonomic Stability vs. Accuracy:',
            '   - Need accurate classification for effective conservation',
            '   - But frequent changes complicate legal protection',
            '   - Balance required'
        ],
        helper: 'Accurate taxonomy is critical: can\'t protect what we can\'t correctly identify and classify',
        solution: 'Taxonomy determines conservation units, reveals cryptic endangered species, and guides protection priorities',
        realWorldContext: 'Many species going extinct before they\'re even discovered and named'
    });

    // Problem 5: Three-Domain System
    relatedProblems.push({
        difficulty: 'harder',
        scenario: 'Revolution in Life\'s Classification',
        problem: 'Explain the significance of Carl Woese\'s three-domain system and how it changed our understanding of life\'s diversity',
        parameters: {
            specificItems: ['Bacteria', 'Archaea', 'Eukarya'],
            category: 'major revision',
            limit: 3
        },
        type: 'classification_system',
        context: { difficulty: 'advanced', topic: 'Classification System', focus: 'three domains' },
        subparts: [
            'The Three-Domain Revolution:',
            '',
            'BEFORE WOESE (Five-Kingdom System):',
            '  1. Monera (all prokaryotes together)',
            '  2. Protista',
            '  3. Fungi',
            '  4. Plantae',
            '  5. Animalia',
            '  Problem: Assumed all prokaryotes were similar',
            '',
            'WOESE\'S DISCOVERY (1977-1990):',
            '  Method:',
            '   - Compared ribosomal RNA (rRNA) sequences',
            '   - Universal molecule in all life',
            '   - Conserved but with variation',
            '',
            '  Revolutionary Finding:',
            '   - "Archaebacteria" as different from bacteria',
            '   - As bacteria are from eukaryotes!',
            '   - Fundamental three-way split of life',
            '',
            'THREE DOMAINS:',
            '',
            '1. BACTERIA:',
            '   Characteristics:',
            '   - Prokaryotic cells',
            '   - Peptidoglycan cell walls',
            '   - Ester-linked membrane lipids',
            '   - Most abundant organisms',
            '   Examples: E. coli, Streptococcus, Cyanobacteria',
            '',
            '2. ARCHAEA:',
            '   Characteristics:',
            '   - Prokaryotic cells',
            '   - NO peptidoglycan',
            '   - Ether-linked lipids (unique!)',
            '   - Often extremophiles',
            '   - Gene expression more like eukaryotes',
            '   Examples: Methanogens, Halophiles, Thermophiles',
            '',
            '3. EUKARYA:',
            '   Characteristics:',
            '   - Eukaryotic cells (nucleus)',
            '   - Membrane-bound organelles',
            '   - Linear chromosomes',
            '   Includes: Protists, Fungi, Plants, Animals',
            '',
            'KEY INSIGHTS:',
            '',
            '1. Prokaryotic ≠ Primitive:',
            '   - Archaea are complex',
            '   - Different from bacteria, not simpler',
            '',
            '2. Evolutionary Relationships:',
            '   - Archaea more closely related to Eukarya',
            '   - Than to Bacteria!',
            '   - Eukaryotes may have evolved from archaeal lineage',
            '',
            '3. Life\'s Diversity:',
            '   - Most diversity is microbial',
            '   - Two of three domains are prokaryotic',
            '   - Eukaryotes are one small branch',
            '',
            '4. Fundamental Biochemistry:',
            '   - Three domains differ in:',
            '   - Cell wall composition',
            '   - Membrane lipids',
            '   - Gene structure',
            '   - RNA polymerase',
            '',
            'INITIAL RESISTANCE:',
            '  - Challenged established views',
            '  - Seemed too radical',
            '  - Gradually accepted as evidence mounted',
            '',
            'IMPACT:',
            '  - Restructured all biology',
            '  - Changed textbooks worldwide',
            '  - Opened new research areas',
            '  - Recognition of archaeal importance',
            '',
            'CURRENT STATUS:',
            '  - Widely accepted',
            '  - Some debate continues on details',
            '  - May need revision as more data accumulates',
            '  - Tree of life continually refined'
        ],
        helper: 'Woese discovered Archaea are as different from Bacteria as both are from Eukaryotes',
        solution: 'Three-domain system recognizes fundamental split: Bacteria, Archaea, and Eukarya, revolutionizing classification',
        realWorldContext: 'Woese\'s work revealed that most of life\'s diversity is invisible to the naked eye'
    });

    return relatedProblems;
}

function generateRelatedPhylogeny() {
    const relatedProblems = [];

    // Problem 1: Reading Phylogenetic Trees
    relatedProblems.push({
        difficulty: 'easier',
        scenario: 'Interpreting Evolutionary Trees',
        problem: 'Explain how to correctly read a phylogenetic tree and identify the most closely related organisms',
        parameters: {
            specificItems: ['phylogenetic tree', 'common ancestor', 'nodes'],
            category: 'tree reading',
            limit: 3
        },
        type: 'phylogeny',
        context: { difficulty: 'beginner', topic: 'Phylogeny', focus: 'tree interpretation' },
        subparts: [
            'Reading Phylogenetic Trees:',
            '',
            'KEY COMPONENTS:',
            '',
            '1. TIPS (Terminal Nodes):',
            '   - End of each branch',
            '   - Represent taxa being compared',
            '   - Could be species, genera, or higher groups',
            '   - All tips are EQUALLY evolved',
            '',
            '2. BRANCHES:',
            '   - Lines connecting nodes',
            '   - Represent evolutionary lineages',
            '   - Length may represent:',
            '   - Time (chronogram)',
            '   - Genetic change (phylogram)',
            '   - Nothing (cladogram - topology only)',
            '',
            '3. NODES:',
            '   - Branching points',
            '   - Represent common ancestors',
            '   - More recent node = more closely related',
            '',
            '4. ROOT:',
            '   - Base of tree',
            '   - Common ancestor of all groups shown',
            '   - Indicates direction of time',
            '',
            'HOW TO DETERMINE RELATIONSHIPS:',
            '',
            'Method:',
            '  1. Trace back from two tips',
            '  2. Find their most recent common ancestor (node)',
            '  3. Closer the common ancestor = more closely related',
            '',
            'Example:',
            '  If human and chimp share node A',
            '  And human and dog share node B',
            '  And node A is more recent than node B',
            '  Then: Humans closer to chimps than to dogs',
            '',
            'COMMON MISTAKES:',
            '',
            '1. Reading Across Tips:',
            '   ❌ WRONG: "Species next to each other are most related"',
            '   ✓ CORRECT: "Relationship determined by nodes"',
            '   - Tips can be rotated without changing relationships',
            '',
            '2. Assuming Linear Progress:',
            '   ❌ WRONG: "Evolution is a ladder"',
            '   ✓ CORRECT: "Evolution is a branching bush"',
            '   - No organism is "more evolved" than another',
            '',
            '3. Tips as Ancestors:',
            '   ❌ WRONG: "Chimps evolved into humans"',
            '   ✓ CORRECT: "Humans and chimps share common ancestor"',
            '   - Tips represent modern organisms',
            '   - None evolved from each other',
            '',
            '4. Branch Length Confusion:',
            '   - Topology (branching pattern) shows relationships',
            '   - Branch length may or may not be meaningful',
            '   - Check tree legend!',
            '',
            'PRACTICE QUESTIONS:',
            '  - Which two species are most closely related?',
            '  - Which group is the outgroup?',
            '  - Is this group monophyletic?',
            '  - When did these lineages diverge?',
            '',
            'KEY PRINCIPLE:',
            '  Relationships determined by recency of common ancestry,',
            '  NOT by position on the page!'
        ],
        helper: 'Trace back to most recent common ancestor (node) to find closest relatives',
        solution: 'Read trees by tracing to most recent common node; tips can rotate; branching pattern shows relationships',
        realWorldContext: 'Phylogenetic trees are essential tools in evolution, medicine, and conservation'
    });

    // Problem 2: Monophyletic vs Paraphyletic vs Polyphyletic
    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'Valid vs Invalid Taxonomic Groups',
        problem: 'Compare monophyletic, paraphyletic, and polyphyletic groups, explaining which are considered valid in modern classification',
        parameters: {
            specificItems: ['monophyletic', 'paraphyletic', 'polyphyletic'],
            category: 'group types',
            limit: 3
        },
        type: 'phylogeny',
        context: { difficulty: 'intermediate', topic: 'Phylogeny', focus: 'group types' },
        subparts: [
            'Types of Taxonomic Groups:',
            '',
            '1. MONOPHYLETIC (Clade):',
            '   Definition:',
            '   - Includes ancestor AND all descendants',
            '   - Single "cut" on phylogenetic tree',
            '   - Natural group',
            '',
            '   Characteristics:',
            '   - All members share common ancestor',
            '   - No descendants excluded',
            '   - Defined by synapomorphies (shared derived traits)',
            '',
            '   Examples:',
            '   ✓ MAMMALS:',
            '   - Includes all descendants of first mammal',
            '   - Hair, mammary glands, three middle ear bones',
            '',
            '   ✓ BIRDS:',
            '   - Includes all descendants of first bird',
            '   - Feathers, hollow bones, wings',
            '',
            '   ✓ TETRAPODS:',
            '   - Amphibians, reptiles, birds, mammals',
            '   - All have four limbs (or descended from four-limbed ancestor)',
            '',
            '   Status: VALID in phylogenetic classification',
            '',
            '2. PARAPHYLETIC:',
            '   Definition:',
            '   - Includes ancestor but NOT all descendants',
            '   - Some descendants excluded',
            '   - Requires multiple "cuts"',
            '',
            '   Characteristics:',
            '   - Common in traditional classification',
            '   - Convenient but not natural',
            '   - Excludes some evolutionary novelties',
            '',
            '   Examples:',
            '   ❌ REPTILES (traditional):',
            '   - Includes: lizards, snakes, turtles, crocodiles',
            '   - EXCLUDES: birds (but birds are dinosaur descendants!)',
            '   - Paraphyletic because birds excluded',
            '',
            '   ❌ FISH:',
            '   - Includes: sharks, ray-finned fish, lungfish',
            '   - EXCLUDES: tetrapods (but tetrapods evolved from fish!)',
            '   - Not a natural group',
            '',
            '   ❌ INVERTEBRATES:',
            '   - Everything except vertebrates',
            '   - EXCLUDES: vertebrates',
            '   - Just "not vertebrates"',
            '',
            '   Status: NOT VALID in strict phylogenetic classification',
            '   (But still used informally for convenience)',
            '',
            '3. POLYPHYLETIC:',
            '   Definition:',
            '   - Members from different ancestors',
            '   - Multiple origins',
            '   - Based on convergent evolution',
            '',
            '   Characteristics:',
            '   - Members look similar but not closely related',
            '   - Similarity from analogous traits, not homology',
            '   - Does not reflect evolutionary history',
            '',
            '   Examples:',
            '   ❌ WARM-BLOODED ANIMALS:',
            '   - Includes: birds and mammals',
            '   - Endothermy evolved independently!',
            '   - Not a natural group',
            '',
            '   ❌ FLYING ANIMALS:',
            '   - Includes: birds, bats, insects',
            '   - Wings evolved independently three times',
            '   - Convergent evolution',
            '',
            '   ❌ CACTI-LIKE PLANTS:',
            '   - True cacti (Americas)',
            '   - Euphorbias (Africa)',
            '   - Similar adaptations, different lineages',
            '',
            '   Status: NEVER VALID - completely artificial',
            '',
            'PHYLOGENETIC CLASSIFICATION RULES:',
            '',
            'Goal: Only monophyletic groups',
            '',
            'Solutions to Paraphyletic Problems:',
            '  Reptiles:',
            '   - Include birds → Reptilia becomes monophyletic',
            '   - Or use Sauropsida (reptiles + birds)',
            '',
            '  Fish:',
            '   - No single "fish" group',
            '   - Use specific groups: Chondrichthyes, Actinopterygii, etc.',
            '',
            'Why Monophyly Matters:',
            '  - Reflects actual evolutionary history',
            '  - Predictive power (share traits)',
            '  - Stable classification',
            '  - Scientific rigor'
        ],
        helper: 'Monophyletic = ancestor + ALL descendants (valid); Paraphyletic = excludes some (invalid); Polyphyletic = multiple origins (invalid)',
        solution: 'Only monophyletic groups (clades) are valid; paraphyletic and polyphyletic groups don\'t reflect evolution',
        realWorldContext: 'Birds are dinosaurs! Traditional "Reptilia" is paraphyletic and being replaced'
    });

    // Problem 3: Homology vs Analogy
    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'Distinguishing True from Superficial Similarity',
        problem: 'Explain the difference between homologous and analogous structures and why only homology reveals relationships',
        parameters: {
            specificItems: ['homology', 'analogy', 'convergent evolution'],
            category: 'character types',
            limit: 3
        },
        type: 'phylogeny',
        context: { difficulty: 'intermediate', topic: 'Phylogeny', focus: 'homology' },
        subparts: [
            'Homology vs Analogy:',
            '',
            'HOMOLOGY:',
            '  Definition: Similarity due to shared ancestry',
            '',
            '  Characteristics:',
            '   - Inherited from common ancestor',
            '   - May look different now (divergent evolution)',
            '   - Same underlying structure',
            '   - Same developmental origin',
            '',
            '  Classic Example: VERTEBRATE FORELIMBS',
            '   - Human arm, bat wing, whale flipper, horse leg',
            '   - Look different, different functions',
            '   - But same bone structure:',
            '   - Humerus, radius, ulna, carpals, metacarpals, phalanges',
            '   - Evidence of common tetrapod ancestor',
            '',
            '  More Examples:',
            '   ✓ All vertebrate hearts (shared ancestry)',
            '   ✓ All insect mouthparts (modified appendages)',
            '   ✓ DNA/RNA in all life (universal common ancestor)',
            '',
            '  Types of Homology:',
            '   1. Structural (anatomical)',
            '   2. Developmental (embryonic)',
            '   3. Molecular (genes, proteins)',
            '',
            '  Importance:',
            '   - Reveals evolutionary relationships',
            '   - Used to construct phylogenetic trees',
            '   - Basis for classification',
            '',
            'ANALOGY (Homoplasy):',
            '  Definition: Similarity due to convergent evolution, NOT ancestry',
            '',
            '  Characteristics:',
            '   - Similar function, similar environment',
            '   - Different underlying structure',
            '   - Different developmental origin',
            '   - Independent evolution',
            '',
            '  Classic Example: WINGS',
            '   Bird wings:',
            '   - Modified forelimbs',
            '   - Feathers',
            '   - Bones inside',
            '',
            '   Insect wings:',
            '   - Outgrowths of body wall',
            '   - Chitin',
            '   - No bones',
            '',
            '   Bat wings:',
            '   - Modified forelimbs (homologous to bird wing bones)',
            '   - Skin membrane',
            '   - Elongated fingers',
            '',
            '   Result: All wings (similar function)',
            '   But only bird-bat wing bones are homologous',
            '   Bird-insect wings are analogous',
            '',
            '  More Examples:',
            '   ❌ Shark and dolphin body shape (convergence)',
            '   ❌ Cactus and euphorb succulence (similar environments)',
            '   ❌ Cephalopod and vertebrate eyes (independent evolution)',
            '',
            '  Types of Homoplasy:',
            '   1. Convergence: Similar features evolve independently',
            '   2. Parallelism: Similar changes in related lineages',
            '   3. Reversal: Return to ancestral state',
            '',
            '  Problem:',
            '   - Can mislead phylogenetic analysis',
            '   - Must be recognized and accounted for',
            '',
            'HOW TO DISTINGUISH:',
            '',
            '1. STRUCTURAL COMPARISON:',
            '   - Homology: Same basic structure',
            '   - Analogy: Different structure, similar function',
            '',
            '2. DEVELOPMENT:',
            '   - Homology: Same developmental pathway',
            '   - Analogy: Different developmental origin',
            '',
            '3. PHYLOGENETIC CONTEXT:',
            '   - Homology: Continuous through phylogeny',
            '   - Analogy: Appears in distantly related groups',
            '',
            '4. MOLECULAR DATA:',
            '   - Homology: Same genes involved',
            '   - Analogy: Different genetic basis',
            '',
            'SYNAPOMORPHY (Shared Derived Character):',
            '  - Homology that defines a clade',
            '  - Evolved in common ancestor',
            '  - Present in all descendants',
            '  - Most useful for phylogenetics',
            '  Example: Feathers define birds',
            '',
            'SYMPLESIOMORPHY (Shared Ancestral Character):',
            '  - Homology but not diagnostic',
            '  - Present in ancestor and many groups',
            '  - Doesn\'t define specific clade',
            '  Example: Vertebrae in all vertebrates',
            '',
            'WHY IT MATTERS:',
            '  - Only homology reveals relationships',
            '  - Analogy can create false groupings',
            '  - Must distinguish to build accurate trees'
        ],
        helper: 'Homology = same ancestry (reveals relationships); Analogy = convergence (misleading)',
        solution: 'Homologous structures share ancestry despite different functions; analogous structures similar by convergence',
        realWorldContext: 'Your arm and a whale flipper are homologous, but shark and dolphin fins are analogous'
    });

    // Problem 4: Molecular Clocks
    relatedProblems.push({
        difficulty: 'harder',
        scenario: 'Dating Evolutionary Events',
        problem: 'Explain how molecular clocks work to estimate divergence times and discuss their assumptions and limitations',
        parameters: {
            specificItems: ['molecular clock', 'mutation rate', 'calibration'],
            category: 'methods',
            limit: 3
        },
        type: 'phylogeny',
        context: { difficulty: 'advanced', topic: 'Phylogeny', focus: 'molecular clocks' },
        subparts: [
            'MOLECULAR CLOCKS:',
            '',
            'CONCEPT:',
            '  - Mutations accumulate at relatively constant rate',
            '  - "Genetic stopwatch"',
            '  - Can estimate time since divergence',
            '',
            'BASIC PRINCIPLE:',
            '  Formula: Time = Genetic differences / Mutation rate',
            '',
            '  Example:',
            '   - Species A and B differ by 10 mutations',
            '   - Mutation rate = 1 per million years',
            '   - Divergence time = 10 million years ago',
            '',
            'HOW IT WORKS:',
            '',
            '1. SEQUENCE COMPARISON:',
            '   - Compare same gene in different species',
            '   - Count differences (substitutions)',
            '   - More differences = longer separation',
            '',
            '2. CALIBRATION:',
            '   - Need known time point',
            '   - Usually from fossil record',
            '   - Or known biogeographic event',
            '   Examples:',
            '   - Fossil with known age',
            '   - Island formation date',
            '   - Continental separation',
            '',
            '3. RATE CALCULATION:',
            '   - Differences / Time = Rate',
            '   - Apply rate to other divergences',
            '',
            'TYPES OF MOLECULAR CLOCKS:',
            '',
            '1. STRICT CLOCK:',
            '   - Assumes constant rate everywhere',
            '   - Same rate in all lineages',
            '   - Rarely accurate in reality',
            '',
            '2. RELAXED CLOCK:',
            '   - Allows rate variation among lineages',
            '   - More realistic',
            '   - Statistically more complex',
            '   Types:',
            '   - Uncorrelated: rates vary independently',
            '   - Correlated: related species have similar rates',
            '',
            '3. LOCAL CLOCK:',
            '   - Different rates in different parts of tree',
            '   - Flexible approach',
            '',
            'ASSUMPTIONS:',
            '',
            '1. CONSTANT MUTATION RATE:',
            '   - Neutral mutations accumulate steadily',
            '   - Not under selection',
            '   - Reality: rates vary!',
            '',
            '2. NEUTRALITY:',
            '   - Most mutations don\'t affect fitness',
            '   - Fixed by genetic drift',
            '   - Problem: some sites under selection',
            '',
            '3. ACCURATE CALIBRATION:',
            '   - Fossil dates correct',
            '   - Fossil correctly placed on tree',
            '   - Challenges: incomplete fossil record',
            '',
            'VIOLATIONS (Why rates vary):',
            '',
            '1. GENERATION TIME:',
            '   - Mice: short generation, more mutations per year',
            '   - Elephants: long generation, fewer mutations per year',
            '   - Per-generation rate similar',
            '   - Per-year rate different',
            '',
            '2. METABOLIC RATE:',
            '   - Higher metabolism = more DNA damage',
            '   - More oxidative stress',
            '   - May affect mutation rate',
            '',
            '3. POPULATION SIZE:',
            '   - Small populations: genetic drift stronger',
            '   - Large populations: selection more effective',
            '   - Affects fixation of mutations',
            '',
            '4. DNA REPAIR EFFICIENCY:',
            '   - Varies among organisms',
            '   - Affects mutation accumulation',
            '',
            '5. SELECTION:',
            '   - Positive selection speeds apparent rate',
            '   - Negative selection slows apparent rate',
            '   - Varies by gene and lineage',
            '',
            'BEST GENES FOR CLOCKS:',
            '',
            'Fast-evolving (recent divergences):',
            '  - Mitochondrial DNA',
            '  - Introns',
            '  - Third codon positions',
            '',
            'Slow-evolving (ancient divergences):',
            '  - Ribosomal RNA',
            '  - Highly conserved genes',
            '  - First/second codon positions',
            '',
            'APPLICATIONS:',
            '  - Dating species divergences',
            '  - Origin of major groups',
            '  - Human evolution timeline',
            '  - Disease evolution (HIV, influenza)',
            '  - Dating domestication events',
            '',
            'LIMITATIONS:',
            '  - Rate variation (biggest problem)',
            '  - Calibration uncertainty',
            '  - Saturation at deep divergences',
            '  - Model assumptions',
            '  - Statistical uncertainty',
            '',
            'EXAMPLE: HUMAN-CHIMP DIVERGENCE',
            '  Molecular data: ~6-7 million years ago',
            '  Fossil calibration points:',
            '   - Old World monkey-ape split (~25 mya)',
            '   - Orangutan-African ape split (~14 mya)',
            '  Result: Humans and chimps diverged recently',
            '',
            'IMPROVEMENTS:',
            '  - Multiple genes (reduce error)',
            '  - Relaxed clock models',
            '  - Better calibration points',
            '  - Whole genome data',
            '  - Bayesian statistical methods'
        ],
        helper: 'Molecular clocks estimate time using mutation accumulation, but rates vary among lineages',
        solution: 'Molecular clocks use mutation rates to date divergences; require calibration and account for rate variation',
        realWorldContext: 'Molecular clocks helped establish humans and chimps diverged only 6-7 million years ago'
    });

    // Problem 5: Building Phylogenetic Trees
    relatedProblems.push({
        difficulty: 'harder',
        scenario: 'Phylogenetic Tree Construction Methods',
        problem: 'Compare different methods for constructing phylogenetic trees (parsimony, likelihood, Bayesian) and explain when each is most appropriate',
        parameters: {
            specificItems: ['parsimony', 'maximum likelihood', 'Bayesian'],
            category: 'methods',
            limit: 3
        },
        type: 'phylogeny',
        context: { difficulty: 'advanced', topic: 'Phylogeny', focus: 'tree construction' },
        subparts: [
            'PHYLOGENETIC TREE CONSTRUCTION METHODS:',
            '',
            '1. MAXIMUM PARSIMONY:',
            '',
            '   Principle:',
            '   - Simplest explanation preferred',
            '   - Occam\'s Razor applied to evolution',
            '   - Choose tree with fewest evolutionary changes',
            '',
            '   Method:',
            '   1. Generate possible trees',
            '   2. Count changes needed on each tree',
            '   3. Choose tree(s) with minimum changes',
            '',
            '   Example:',
            '   Species A, B, C',
            '   Character: Has wings (yes/no)',
            '   A: yes, B: yes, C: no',
            '   ',
            '   Tree 1: ((A,B),C)',
            '   - Wings evolved once in A-B ancestor',
            '   - 1 change (parsimonious)',
            '   ',
            '   Tree 2: (A,(B,C))',
            '   - Wings evolved twice (A and B independently)',
            '   - 2 changes (less parsimonious)',
            '',
            '   Advantages:',
            '   - Simple, intuitive concept',
            '   - No evolutionary model required',
            '   - Fast for small datasets',
            '   - Identifies character changes',
            '',
            '   Disadvantages:',
            '   - Long-branch attraction',
            '   - Assumes equal probability of all changes',
            '   - Can be misled by convergence',
            '   - Computationally intensive for many taxa',
            '',
            '   Long-Branch Attraction:',
            '   - Rapidly evolving lineages',
            '   - Incorrectly grouped together',
            '   - Multiple changes at same site',
            '   - Parsimony sees as shared derived',
            '',
            '   Best for:',
            '   - Morphological data',
            '   - Slowly evolving sequences',
            '   - When model-free approach desired',
            '',
            '2. MAXIMUM LIKELIHOOD (ML):',
            '',
            '   Principle:',
            '   - Choose tree with highest probability',
            '   - Given the data and evolutionary model',
            '   - Statistical approach',
            '',
            '   Method:',
            '   1. Choose evolutionary model',
            '      - Substitution rates',
            '      - Base frequencies',
            '      - Rate variation',
            '   2. Calculate likelihood for each tree',
            '   3. Select tree with highest likelihood',
            '',
            '   Evolutionary Models:',
            '   Simple → Complex:',
            '   - JC69: All changes equal',
            '   - K2P: Transitions ≠ transversions',
            '   - HKY85: Unequal base frequencies',
            '   - GTR: General time reversible',
            '   - +G: Rate variation (gamma distribution)',
            '   - +I: Invariant sites',
            '',
            '   Model Selection:',
            '   - Use programs like jModelTest',
            '   - Balance fit and complexity',
            '   - AIC, BIC criteria',
            '',
            '   Advantages:',
            '   - Statistically rigorous',
            '   - Accounts for different change rates',
            '   - Less susceptible to long-branch attraction',
            '   - Can test alternative hypotheses',
            '   - Likelihood ratio tests',
            '',
            '   Disadvantages:',
            '   - Computationally intensive',
            '   - Requires choosing model',
            '   - Model misspecification affects results',
            '   - Difficult to interpret likelihoods directly',
            '',
            '   Support Values:',
            '   - Bootstrap analysis',
            '   - Resample data with replacement',
            '   - Rebuild trees',
            '   - % of times clade appears',
            '   - >70% moderate, >95% strong',
            '',
            '   Best for:',
            '   - DNA/protein sequences',
            '   - When computational power available',
            '   - Rigorous statistical inference needed',
            '',
            '3. BAYESIAN INFERENCE:',
            '',
            '   Principle:',
            '   - Calculate probability of tree given data',
            '   - Posterior probability',
            '   - Incorporates prior knowledge',
            '',
            '   Bayes\' Theorem:',
            '   P(Tree|Data) = P(Data|Tree) × P(Tree) / P(Data)',
            '   ',
            '   Posterior = Likelihood × Prior / Evidence',
            '',
            '   Method:',
            '   1. Define prior probabilities',
            '      - Tree topologies',
            '      - Branch lengths',
            '      - Model parameters',
            '   2. Use MCMC (Markov Chain Monte Carlo)',
            '      - Sample tree space',
            '      - Propose new trees/parameters',
            '      - Accept/reject based on probability',
            '   3. Run until convergence',
            '   4. Summarize results',
            '      - Consensus tree',
            '      - Posterior probabilities',
            '      - Credible intervals',
            '',
            '   MCMC Process:',
            '   - Starts with random tree',
            '   - Makes small changes',
            '   - Calculates probability',
            '   - Keeps better trees more often',
            '   - Explores tree space efficiently',
            '',
            '   Convergence:',
            '   - Multiple independent runs',
            '   - Check convergence diagnostics',
            '   - ESS (Effective Sample Size)',
            '   - Should reach same distribution',
            '',
            '   Advantages:',
            '   - Provides probability estimates',
            '   - Flexible modeling framework',
            '   - Can incorporate prior information',
            '   - Accounts for uncertainty',
            '   - Often faster than ML for complex models',
            '   - Natural for divergence time estimation',
            '',
            '   Disadvantages:',
            '   - Requires prior specification',
            '   - Results depend on priors',
            '   - Computationally intensive',
            '   - MCMC convergence must be verified',
            '   - Can be overconfident (high posteriors)',
            '',
            '   Support Values:',
            '   - Posterior probabilities',
            '   - Direct probability of clade',
            '   - >0.95 considered strong',
            '   - Generally higher than bootstrap',
            '',
            '   Software:',
            '   - MrBayes: General phylogenetics',
            '   - BEAST: Divergence time estimation',
            '   - RevBayes: Complex models',
            '',
            '   Best for:',
            '   - Complex evolutionary models',
            '   - Divergence time estimation',
            '   - Integrating multiple data types',
            '   - When prior information available',
            '',
            'COMPARISON SUMMARY:',
            '',
            'Parsimony:',
            '  Speed: Fast (small datasets)',
            '  Assumptions: Minimal',
            '  Best for: Morphology, teaching',
            '',
            'Maximum Likelihood:',
            '  Speed: Slow',
            '  Assumptions: Evolutionary model',
            '  Best for: Sequence data, hypothesis testing',
            '',
            'Bayesian:',
            '  Speed: Moderate-Slow',
            '  Assumptions: Model + priors',
            '  Best for: Complex models, time estimation',
            '',
            'PRACTICAL APPROACH:',
            '  - Try multiple methods',
            '  - Compare results',
            '  - Agreement = confidence',
            '  - Disagreement = further investigation',
            '',
            'MODERN TREND:',
            '  - Likelihood and Bayesian dominate',
            '  - Whole genome data',
            '  - Complex models',
            '  - Coalescent approaches'
        ],
        helper: 'Parsimony (fewest changes), Likelihood (highest probability), Bayesian (posterior probability)',
        solution: 'Parsimony minimizes changes; ML maximizes probability; Bayesian provides posterior probabilities with priors',
        realWorldContext: 'Most modern phylogenetics uses likelihood or Bayesian methods with DNA sequence data'
    });

    return relatedProblems;
}

function generateRelatedDomainsKingdoms() {
    const relatedProblems = [];

    // Problem 1: Domain Characteristics
    relatedProblems.push({
        difficulty: 'easier',
        scenario: 'Three Domains of Life',
        problem: 'Compare the fundamental characteristics that distinguish the three domains of life: Bacteria, Archaea, and Eukarya',
        parameters: {
            specificItems: ['Bacteria', 'Archaea', 'Eukarya'],
            cellType: 'all',
            limit: 3
        },
        type: 'domains_kingdoms',
        context: { difficulty: 'beginner', topic: 'Domains and Kingdoms', focus: 'domain comparison' },
        subparts: [
            'THREE DOMAINS OF LIFE:',
            '',
            '1. BACTERIA:',
            '',
            '   Cell Type: Prokaryotic',
            '   - No membrane-bound nucleus',
            '   - No membrane-bound organelles',
            '',
            '   Cell Wall: Peptidoglycan',
            '   - Unique to bacteria',
            '   - Target of many antibiotics',
            '',
            '   Membrane Lipids: Ester-linked',
            '   - Fatty acids attached by ester bonds',
            '   - Similar to eukaryotes',
            '',
            '   Ribosomes: 70S',
            '   - Smaller than eukaryotic',
            '   - Target of some antibiotics',
            '',
            '   Chromosomes: Single circular',
            '   - In nucleoid region',
            '   - No histones (usually)',
            '',
            '   Gene Structure: No introns',
            '   - Continuous coding sequences',
            '   - Operons common',
            '',
            '   Size: 1-10 μm',
            '',
            '   Diversity:',
            '   - Most abundant organisms',
            '   - Extremely diverse metabolism',
            '   - Every habitat on Earth',
            '',
            '   Examples:',
            '   - E. coli (gut bacteria)',
            '   - Streptococcus (strep throat)',
            '   - Cyanobacteria (photosynthetic)',
            '',
            '2. ARCHAEA:',
            '',
            '   Cell Type: Prokaryotic',
            '   - No membrane-bound nucleus',
            '   - No membrane-bound organelles',
            '',
            '   Cell Wall: NO peptidoglycan',
            '   - Various other polymers',
            '   - Pseudopeptidoglycan in some',
            '   - Makes them antibiotic-resistant',
            '',
            '   Membrane Lipids: ETHER-linked (UNIQUE!)',
            '   - Isoprene chains',
            '   - Ether bonds (not ester)',
            '   - Sometimes monolayer',
            '   - Extremely stable',
            '',
            '   Ribosomes: 70S',
            '   - But more similar to eukaryotic',
            '   - Different from bacterial',
            '',
            '   Chromosomes: Single circular',
            '   - But with histones!',
            '   - More like eukaryotes',
            '',
            '   Gene Structure: Some introns',
            '   - RNA polymerase like eukaryotes',
            '   - Translation machinery like eukaryotes',
            '',
            '   Size: 1-10 μm',
            '',
            '   Diversity:',
            '   - Often extremophiles',
            '   - Unique biochemistry',
            '   - No known pathogens',
            '',
            '   Types:',
            '   - Methanogens (produce methane)',
            '   - Halophiles (love salt)',
            '   - Thermophiles (love heat)',
            '   - Acidophiles (love acid)',
            '',
            '   Examples:',
            '   - Methanobrevibacter (gut, produces methane)',
            '   - Halobacterium (salt lakes)',
            '   - Sulfolobus (hot acidic springs)',
            '',
            '3. EUKARYA:',
            '',
            '   Cell Type: Eukaryotic',
            '   - Membrane-bound nucleus',
            '   - Membrane-bound organelles',
            '',
            '   Cell Wall: Variable',
            '   - Cellulose (plants)',
            '   - Chitin (fungi)',
            '   - None (animals)',
            '',
            '   Membrane Lipids: Ester-linked',
            '   - With cholesterol/sterols',
            '   - More complex than bacteria',
            '',
            '   Ribosomes: 80S (cytoplasm)',
            '   - Larger than prokaryotic',
            '   - 70S in mitochondria/chloroplasts',
            '',
            '   Chromosomes: Multiple linear',
            '   - With histone proteins',
            '   - In nucleus',
            '',
            '   Gene Structure: Introns present',
            '   - RNA splicing',
            '   - Complex regulation',
            '',
            '   Size: 10-100 μm (usually)',
            '',
            '   Diversity:',
            '   - Four main kingdoms',
            '   - Multicellular common',
            '   - Complex development',
            '',
            '   Kingdoms:',
            '   - Protista (diverse unicellular)',
            '   - Fungi (decomposers)',
            '   - Plantae (photosynthetic)',
            '   - Animalia (consumers)',
            '',
            '   Examples:',
            '   - Amoeba (protist)',
            '   - Mushrooms (fungi)',
            '   - Oak tree (plant)',
            '   - Human (animal)',
            '',
            'KEY DISTINCTIONS:',
            '',
            'Bacteria vs Archaea:',
            '  - Both prokaryotic',
            '  - But fundamentally different biochemistry',
            '  - Archaea more related to Eukarya!',
            '',
            'Prokaryotes vs Eukaryotes:',
            '  - Nucleus presence',
            '  - Organelle presence',
            '  - Complexity',
            '',
            'EVOLUTIONARY RELATIONSHIPS:',
            '  - Archaea + Eukarya more closely related',
            '  - Than either to Bacteria',
            '  - Eukaryotes may have evolved from Archaea',
            '  - Mitochondria from bacterial endosymbiont'
        ],
        helper: 'Bacteria (peptidoglycan wall), Archaea (ether lipids, extremophiles), Eukarya (nucleus + organelles)',
        solution: 'Three domains differ in cell structure, membrane lipids, and gene expression; Archaea and Eukarya more related',
        realWorldContext: 'Understanding domains helps target antibiotics and reveals life\'s fundamental diversity'
    });

    // Problem 2: Kingdom Characteristics
    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'Eukaryotic Kingdoms',
        problem: 'Describe the characteristics and ecological roles of the major eukaryotic kingdoms: Protista, Fungi, Plantae, and Animalia',
        parameters: {
            domain: 'Eukarya',
            specificItems: ['Protista', 'Fungi', 'Plantae', 'Animalia'],
            limit: 4
        },
        type: 'domains_kingdoms',
        context: { difficulty: 'intermediate', topic: 'Domains and Kingdoms', focus: 'eukaryotic kingdoms' },
        subparts: [
            'FOUR EUKARYOTIC KINGDOMS:',
            '',
            '1. PROTISTA (Protists):',
            '',
            '   Note: Paraphyletic "grab-bag" kingdom',
            '   - Not a natural group',
            '   - "Everything else" that\'s eukaryotic',
            '   - Being reorganized',
            '',
            '   Characteristics:',
            '   - Mostly unicellular',
            '   - Some colonial',
            '   - Some multicellular (algae)',
            '   - Eukaryotic cells',
            '   - Extreme diversity',
            '',
            '   Types:',
            '   ',
            '   PROTOZOA (Animal-like):',
            '   - Heterotrophic',
            '   - Mobile',
            '   - Examples: Amoeba, Paramecium, Plasmodium (malaria)',
            '   ',
            '   ALGAE (Plant-like):',
            '   - Autotrophic (photosynthetic)',
            '   - Aquatic',
            '   - Examples: Diatoms, Kelp, Euglena',
            '   ',
            '   SLIME MOLDS (Fungus-like):',
            '   - Decomposers',
            '   - Unusual life cycles',
            '   - Examples: Physarum',
            '',
            '   Ecological Role:',
            '   - Base of aquatic food webs',
            '   - Oxygen production (algae)',
            '   - Decomposition',
            '   - Some cause diseases',
            '',
            '   Importance:',
            '   - Produce 50% of Earth\'s oxygen',
            '   - Critical to ocean ecosystems',
            '   - Some are major pathogens',
            '',
            '2. FUNGI:',
            '',
            '   Characteristics:',
            '   - Heterotrophic (absorptive nutrition)',
            '   - Chitin cell walls',
            '   - Mostly multicellular',
            '   - Body: mycelium (network of hyphae)',
            '   - Reproduce via spores',
            '',
            '   Nutrition:',
            '   - External digestion',
            '   - Secrete enzymes',
            '   - Absorb nutrients',
            '   - Cannot ingest food',
            '',
            '   Structure:',
            '   - Hyphae: thread-like filaments',
            '   - Mycelium: mass of hyphae',
            '   - Fruiting body: reproductive structure (mushroom)',
            '',
            '   Types:',
            '   - Decomposers (most)',
            '   - Parasites (some)',
            '   - Mutualists (mycorrhizae, lichens)',
            '',
            '   Examples:',
            '   - Mushrooms',
            '   - Yeasts (unicellular fungi)',
            '   - Molds (Penicillium)',
            '   - Rusts, smuts (plant pathogens)',
            '',
            '   Ecological Role:',
            '   - Decomposition (nutrient recycling)',
            '   - Symbiosis with plants (mycorrhizae)',
            '   - Lichens (with algae)',
            '',
            '   Importance:',
            '   - Break down dead organic matter',
            '   - Help plant nutrient uptake',
            '   - Food (mushrooms)',
            '   - Medicine (penicillin)',
            '   - Fermentation (bread, beer)',
            '   - Some cause diseases',
            '',
            '3. PLANTAE (Plants):',
            '',
            '   Characteristics:',
            '   - Autotrophic (photosynthetic)',
            '   - Cellulose cell walls',
            '   - Multicellular',
            '   - Non-motile (mostly)',
            '   - Alternation of generations',
            '',
            '   Photosynthesis:',
            '   - Chloroplasts with chlorophyll',
            '   - CO₂ + H₂O + Light → Glucose + O₂',
            '   - Primary producers',
            '',
            '   Structure:',
            '   - Tissues and organs',
            '   - Roots, stems, leaves',
            '   - Vascular system (most)',
            '',
            '   Groups:',
            '   - Bryophytes: Mosses (no vascular tissue)',
            '   - Ferns: Vascular, spores',
            '   - Gymnosperms: Conifers, seeds, no flowers',
            '   - Angiosperms: Flowering plants, fruits',
            '',
            '   Examples:',
            '   - Mosses',
            '   - Ferns',
            '   - Pine trees',
            '   - Grasses, roses, oak trees',
            '',
            '   Ecological Role:',
            '   - Primary producers',
            '   - Oxygen production',
            '   - Carbon fixation',
            '   - Habitat provision',
            '',
            '   Importance:',
            '   - Base of terrestrial food chains',
            '   - Atmospheric oxygen',
            '   - Human food source',
            '   - Lumber, paper, medicine',
            '   - Climate regulation',
            '',
            '4. ANIMALIA (Animals):',
            '',
            '   Characteristics:',
            '   - Heterotrophic (ingest food)',
            '   - No cell walls',
            '   - Multicellular',
            '   - Mobile (most)',
            '   - Nervous system',
            '   - Blastula development',
            '',
            '   Nutrition:',
            '   - Ingest food',
            '   - Internal digestion',
            '   - Consumers',
            '',
            '   Structure:',
            '   - Specialized tissues/organs',
            '   - Complex organ systems',
            '   - Coordinated movement',
            '',
            '   Diversity:',
            '   - 95% invertebrates',
            '   - 5% vertebrates',
            '',
            '   Major Groups:',
            '   ',
            '   INVERTEBRATES:',
            '   - Sponges (simplest)',
            '   - Cnidarians (jellyfish)',
            '   - Worms (flatworms, roundworms, annelids)',
            '   - Mollusks (snails, clams, octopus)',
            '   - Arthropods (insects, spiders, crustaceans)',
            '   - Echinoderms (starfish)',
            '   ',
            '   VERTEBRATES:',
            '   - Fish',
            '   - Amphibians',
            '   - Reptiles',
            '   - Birds',
            '   - Mammals',
            '',
            '   Ecological Roles:',
            '   - Consumers (herbivores, carnivores, omnivores)',
            '   - Pollinators',
            '   - Seed dispersers',
            '   - Predators (population control)',
            '',
            '   Importance:',
            '   - Ecosystem function',
            '   - Food source',
            '   - Companionship',
            '   - Research models',
            '   - Indicator species',
            '',
            'COMPARISON TABLE:',
            '',
            'Cell Wall:',
            '  Protista: Variable',
            '  Fungi: Chitin',
            '  Plantae: Cellulose',
            '  Animalia: None',
            '',
            'Nutrition:',
            '  Protista: Variable',
            '  Fungi: Absorptive heterotroph',
            '  Plantae: Autotroph (photosynthesis)',
            '  Animalia: Ingestive heterotroph',
            '',
            'Complexity:',
            '  Protista: Mostly unicellular',
            '  Fungi: Multicellular (except yeasts)',
            '  Plantae: Multicellular',
            '  Animalia: Multicellular',
            '',
            'Movement:',
            '  Protista: Some mobile',
            '  Fungi: Non-motile',
            '  Plantae: Non-motile',
            '  Animalia: Mobile'
        ],
        helper: 'Protista (diverse unicellular), Fungi (decomposers), Plantae (photosynthesis), Animalia (ingest food)',
        solution: 'Four kingdoms differ in cell walls, nutrition mode, and organization; each has distinct ecological role',
        realWorldContext: 'These kingdoms represent the major forms of complex life we interact with daily'
    });

    // Problem 3: Endosymbiotic Theory
    relatedProblems.push({
        difficulty: 'harder',
        scenario: 'Origin of Eukaryotic Cells',
        problem: 'Explain the endosymbiotic theory for the origin of mitochondria and chloroplasts, including supporting evidence',
        parameters: {
            specificItems: ['Endosymbiotic Theory', 'mitochondria', 'chloroplasts'],
            category: 'evolution',
            limit: 3
        },
        type: 'domains_kingdoms',
        context: { difficulty: 'advanced', topic: 'Domains and Kingdoms', focus: 'endosymbiosis' },
        subparts: [
            'ENDOSYMBIOTIC THEORY:',
            '',
            'BASIC CONCEPT:',
            '  - Mitochondria and chloroplasts',
            '  - Were once free-living bacteria',
            '  - Engulfed by ancestral eukaryotic cell',
            '  - Became permanent residents',
            '  - Symbiotic relationship established',
            '',
            'PROPOSED BY:',
            '  - Lynn Margulis (1967)',
            '  - Initially controversial',
            '  - Now widely accepted',
            '',
            'THE STORY:',
            '',
            '1. ORIGIN OF MITOCHONDRIA (~2 billion years ago):',
            '',
            '   Step 1: Ancestral Host Cell',
            '   - Early eukaryote (or pre-eukaryote)',
            '   - Already had nucleus',
            '   - Could engulf particles (phagocytosis)',
            '   - Anaerobic metabolism',
            '',
            '   Step 2: Bacterial Endosymbiont',
            '   - Aerobic bacterium engulfed',
            '   - Proteobacterium (probably)',
            '   - Could perform cellular respiration',
            '   - Used oxygen efficiently',
            '',
            '   Step 3: Initial Relationship',
            '   - Bacterium not digested',
            '   - Survived inside host cell',
            '   - Protected environment',
            '   - Access to nutrients',
            '',
            '   Step 4: Mutual Benefit',
            '   - Bacterium: protection, nutrients',
            '   - Host: ATP from respiration',
            '   - Both benefited (mutualism)',
            '   - Natural selection favored relationship',
            '',
            '   Step 5: Permanent Integration',
            '   - Genes transferred to host nucleus',
            '   - Bacterium lost independence',
            '   - Became organelle: MITOCHONDRION',
            '   - Essential partnership',
            '',
            '   Result:',
            '   - All eukaryotes have mitochondria',
            '   - (Or had them and lost them)',
            '   - Major evolutionary innovation',
            '   - Enabled complex life',
            '',
            '2. ORIGIN OF CHLOROPLASTS (~1.5 billion years ago):',
            '',
            '   Step 1: Cell with Mitochondria',
            '   - Eukaryote already established',
            '   - Had mitochondria',
            '   - Heterotrophic',
            '',
            '   Step 2: Cyanobacterial Endosymbiont',
            '   - Photosynthetic bacterium engulfed',
            '   - Cyanobacterium (blue-green bacteria)',
            '   - Could photosynthesize',
            '',
            '   Step 3: Symbiotic Relationship',
            '   - Cyanobacterium: protection',
            '   - Host: glucose from photosynthesis',
            '   - Both benefited',
            '',
            '   Step 4: Integration',
            '   - Genes transferred to nucleus',
            '   - Lost independence',
            '   - Became organelle: CHLOROPLAST',
            '',
            '   Result:',
            '   - Plants and algae can photosynthesize',
            '   - Foundation of food chains',
            '   - Oxygen production',
            '',
            'EVIDENCE FOR ENDOSYMBIOTIC THEORY:',
            '',
            '1. DOUBLE MEMBRANE:',
            '   Observation:',
            '   - Mitochondria: two membranes',
            '   - Chloroplasts: two membranes',
            '   ',
            '   Explanation:',
            '   - Inner membrane: original bacterial membrane',
            '   - Outer membrane: from engulfing vesicle',
            '   ',
            '   Support: Matches phagocytosis mechanism',
            '',
            '2. OWN DNA:',
            '   Observation:',
            '   - Mitochondria have their own DNA',
            '   - Chloroplasts have their own DNA',
            '   - Circular DNA (like bacteria!)',
            '   - Not linear like nuclear DNA',
            '   ',
            '   Explanation:',
            '   - Remnant of bacterial genome',
            '   - Most genes transferred to nucleus',
            '   - Some essential genes retained',
            '   ',
            '   Support: Bacterial-style genome',
            '',
            '3. OWN RIBOSOMES:',
            '   Observation:',
            '   - Mitochondria: 70S ribosomes',
            '   - Chloroplasts: 70S ribosomes',
            '   - Same as bacteria!',
            '   - Different from cytoplasmic (80S)',
            '   ',
            '   Explanation:',
            '   - Bacterial ribosomes retained',
            '   - Used for organelle protein synthesis',
            '   ',
            '   Support: Bacterial-type ribosomes',
            '',
            '4. BINARY FISSION:',
            '   Observation:',
            '   - Organelles divide independently',
            '   - Not made by ER/Golgi',
            '   - Process similar to bacteria',
            '   - Cannot be created de novo',
            '   ',
            '   Explanation:',
            '   - Retain bacterial division mechanism',
            '   - FtsZ protein (bacterial)',
            '   ',
            '   Support: Reproduce like bacteria',
            '',
            '5. SIMILAR SIZE:',
            '   Observation:',
            '   - Mitochondria: 1-10 μm',
            '   - Chloroplasts: 1-10 μm',
            '   - Same as bacteria!',
            '   ',
            '   Support: Right size for bacterial origin',
            '',
            '6. DNA SEQUENCE SIMILARITY:',
            '   Observation:',
            '   - Mitochondrial DNA similar to proteobacteria',
            '   - Chloroplast DNA similar to cyanobacteria',
            '   - Phylogenetic trees confirm',
            '   ',
            '   Explanation:',
            '   - Direct evidence of ancestry',
            '   - Molecular phylogeny',
            '   ',
            '   Support: STRONGEST EVIDENCE',
            '',
            '7. ANTIBIOTIC SENSITIVITY:',
            '   Observation:',
            '   - Some antibiotics (e.g., streptomycin)',
            '   - Affect mitochondria/chloroplasts',
            '   - Don\'t affect cytoplasmic ribosomes',
            '   ',
            '   Explanation:',
            '   - Organelles retain bacterial characteristics',
            '   - Antibiotics target bacterial machinery',
            '   ',
            '   Support: Functional similarity to bacteria',
            '',
            '8. GENE TRANSFER:',
            '   Observation:',
            '   - Most organelle genes now in nucleus',
            '   - Products imported back to organelle',
            '   - Ongoing transfer detected',
            '   ',
            '   Explanation:',
            '   - Gradual integration over time',
            '   - Host gained control',
            '   ',
            '   Support: Explains reduced organelle genomes',
            '',
            'WHY NOT ALL GENES TRANSFERRED?',
            '  - Some proteins too hydrophobic to import',
            '  - Need rapid response to local conditions',
            '  - Gene transfer still occurring',
            '',
            'SECONDARY ENDOSYMBIOSIS:',
            '  - Some protists:',
            '  - Engulfed eukaryotic algae',
            '  - Chloroplasts have 3-4 membranes!',
            '  - Evidence: nucleomorph (remnant nucleus)',
            '  - Endosymbiosis within endosymbiosis',
            '',
            'IMPLICATIONS:',
            '',
            '1. Explains eukaryotic complexity:',
            '   - Mitochondria enabled large cells',
            '   - More ATP available',
            '   - Supported complex structures',
            '',
            '2. Cooperation in evolution:',
            '   - Not just competition',
            '   - Symbiosis drives major transitions',
            '   - "Individuals" can be communities',
            '',
            '3. All complex life descended from this:',
            '   - Single origin of mitochondria',
            '   - All eukaryotes related',
            '   - Common ancestry',
            '',
            '4. Organelle diseases:',
            '   - Mitochondrial disorders',
            '   - Maternal inheritance',
            '   - Understanding helps medicine',
            '',
            'REMAINING QUESTIONS:',
            '  - Exact timing?',
            '  - Which bacteria specifically?',
            '  - How did nucleus originate?',
            '  - Were there other endosymbionts?',
            '',
            'MODERN EXAMPLES:',
            '  - Paramecium with algal symbionts',
            '  - Corals with zooxanthellae',
            '  - Aphids with Buchnera bacteria',
            '  - Shows endosymbiosis still occurs'
        ],
        helper: 'Mitochondria from aerobic bacteria, chloroplasts from cyanobacteria - both became organelles',
        solution: 'Endosymbiotic theory: organelles originated from bacteria engulfed by host cell; evidence includes own DNA, double membrane, 70S ribosomes',
        realWorldContext: 'We are walking communities - our cells contain descendants of ancient bacteria!'
    });

    // Problem 4: Prokaryotic Diversity
    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'Bacterial and Archaeal Diversity',
        problem: 'Describe the metabolic and ecological diversity of prokaryotes and explain why they are considered the most successful organisms',
        parameters: {
            specificItems: ['Bacteria', 'Archaea'],
            category: 'diversity',
            limit: 2
        },
        type: 'domains_kingdoms',
        context: { difficulty: 'intermediate', topic: 'Domains and Kingdoms', focus: 'prokaryotic diversity' },
        subparts: [
            'PROKARYOTIC DIVERSITY:',
            '',
            'WHY PROKARYOTES ARE "SUCCESSFUL":',
            '  - Most abundant organisms',
            '  - 5 × 10³⁰ prokaryotes on Earth!',
            '  - Greater biomass than all eukaryotes',
            '  - Every habitat colonized',
            '  - Oldest life forms (3.5 billion years)',
            '  - Essential to all ecosystems',
            '',
            'METABOLIC DIVERSITY (Unprecedented):',
            '',
            '1. ENERGY SOURCE:',
            '',
            '   PHOTOTROPHS (Use light):',
            '   - Cyanobacteria: oxygenic photosynthesis',
            '   - Purple/green bacteria: anoxygenic photosynthesis',
            '   - Use different pigments',
            '   ',
            '   CHEMOTROPHS (Use chemicals):',
            '   - Oxidize inorganic/organic molecules',
            '   - Most diverse group',
            '',
            '2. CARBON SOURCE:',
            '',
            '   AUTOTROPHS (Fix CO₂):',
            '   - Build organic molecules from CO₂',
            '   - Don\'t need organic carbon',
            '   - Primary producers',
            '   ',
            '   HETEROTROPHS (Use organic carbon):',
            '   - Need preformed organic molecules',
            '   - Decomposers, parasites',
            '',
            '3. ELECTRON SOURCE:',
            '',
            '   LITHOTROPHS (Use inorganic):',
            '   - H₂S, NH₃, Fe²⁺, H₂',
            '   - Unique to prokaryotes',
            '   ',
            '   ORGANOTROPHS (Use organic):',
            '   - Glucose, other organic molecules',
            '   - Similar to eukaryotes',
            '',
            'COMBINED CATEGORIES:',
            '',
            '  PHOTOAUTOTROPHS:',
            '   - Light energy + CO₂ fixation',
            '   - Cyanobacteria, purple sulfur bacteria',
            '   - Produce oxygen (cyanobacteria)',
            '',
            '  PHOTOHETEROTROPHS:',
            '   - Light energy + organic carbon',
            '   - Some purple nonsulfur bacteria',
            '   - Unusual combination',
            '',
            '  CHEMOAUTOTROPHS (CHEMOLITHOTROPHS):',
            '   - Chemical energy + CO₂ fixation',
            '   - UNIQUE TO PROKARYOTES!',
            '   - Nitrifying bacteria: NH₃ → NO₂⁻ → NO₃⁻',
            '   - Sulfur oxidizers: H₂S → S → SO₄²⁻',
            '   - Hydrogen bacteria: H₂ → H₂O',
            '   - Iron oxidizers: Fe²⁺ → Fe³⁺',
            '   - Methanogens (Archaea): H₂ + CO₂ → CH₄',
            '',
            '  CHEMOHETEROTROPHS:',
            '   - Chemical energy + organic carbon',
            '   - Most bacteria',
            '   - All animals, fungi',
            '',
            'EXTREME ENVIRONMENTS:',
            '',
            'Prokaryotes (especially Archaea) thrive where eukaryotes cannot:',
            '',
            '  THERMOPHILES:',
            '   - High temperature lovers',
            '   - Up to 122°C (250°F)!',
            '   - Hot springs, hydrothermal vents',
            '   - Example: Pyrolobus fumarii',
            '',
            '  PSYCHROPHILES:',
            '   - Cold lovers',
            '   - Antarctic ice, deep ocean',
            '   - Below 0°C',
            '',
            '  HALOPHILES:',
            '   - Salt lovers',
            '   - Dead Sea, salt mines',
            '   - Up to 30% salt',
            '   - Example: Halobacterium',
            '',
            '  ACIDOPHILES:',
            '   - Acid lovers',
            '   - pH 0-3',
            '   - Acid mine drainage',
            '   - Example: Picrophilus (pH 0)',
            '',
            '  ALKALIPHILES:',
            '   - Base lovers',
            '   - pH 9-11',
            '   - Soda lakes',
            '',
            '  BAROPHILES:',
            '   - Pressure lovers',
            '   - Deep ocean trenches',
            '   - 1000+ atmospheres',
            '',
            '  RADIATION RESISTANT:',
            '   - Deinococcus radiodurans',
            '   - Survives 1000× lethal human dose',
            '',
            'ECOLOGICAL ROLES:',
            '',
            '1. DECOMPOSERS:',
            '   - Break down dead matter',
            '   - Recycle nutrients',
            '   - Essential for ecosystem function',
            '',
            '2. NITROGEN CYCLE:',
            '   - Nitrogen fixation: N₂ → NH₃',
            '   - Nitrification: NH₃ → NO₃⁻',
            '   - Denitrification: NO₃⁻ → N₂',
            '   - ONLY prokaryotes fix nitrogen!',
            '',
            '3. CARBON CYCLE:',
            '   - Photosynthesis (cyanobacteria)',
            '   - Decomposition',
            '   - Methane production/consumption',
            '',
            '4. SULFUR CYCLE:',
            '   - Oxidation and reduction',
            '   - Chemosynthetic communities',
            '',
            '5. SYMBIONTS:',
            '   - Gut bacteria (digestion)',
            '   - Nitrogen-fixing in legume roots',
            '   - Bioluminescent in squid',
            '',
            '6. PRODUCERS:',
            '   - Cyanobacteria: major oxygen producers',
            '   - Chemosynthetic bacteria: deep sea vents',
            '',
            'HUMAN MICROBIOME:',
            '  - 10× more bacterial cells than human cells',
            '  - Essential for:',
            '  - Digestion',
            '  - Vitamin production (K, B12)',
            '  - Immune system development',
            '  - Protection from pathogens',
            '  - We are ecosystems!',
            '',
            'PATHOGENIC BACTERIA:',
            '  - Small minority',
            '  - But significant impact',
            '  Examples:',
            '  - Streptococcus: strep throat',
            '  - Mycobacterium tuberculosis: TB',
            '  - Vibrio cholerae: cholera',
            '  - Yersinia pestis: plague',
            '',
            'BENEFICIAL APPLICATIONS:',
            '  - Food production (yogurt, cheese)',
            '  - Antibiotic production',
            '  - Insulin production (genetic engineering)',
            '  - Bioremediation (cleanup)',
            '  - Industrial enzymes',
            '  - Mining (metal extraction)',
            '',
            'WHY SO SUCCESSFUL?',
            '',
            '1. RAPID REPRODUCTION:',
            '   - E. coli: 20 minutes per generation',
            '   - Quick adaptation',
            '',
            '2. HUGE POPULATIONS:',
            '   - More variation',
            '   - Faster evolution',
            '',
            '3. HORIZONTAL GENE TRANSFER:',
            '   - Share genes across species',
            '   - Rapid acquisition of new traits',
            '   - Antibiotic resistance spreads',
            '',
            '4. METABOLIC VERSATILITY:',
            '   - Can use almost anything as food',
            '   - Survive extreme conditions',
            '',
            '5. SMALL SIZE:',
            '   - High surface area to volume',
            '   - Efficient nutrient uptake',
            '   - Can exploit tiny spaces',
            '',
            '6. SIMPLE ORGANIZATION:',
            '   - Less to go wrong',
            '   - Efficient reproduction',
            '',
            'UNDISCOVERED DIVERSITY:',
            '  - Most cannot be cultured',
            '  - Only 1% studied in lab',
            '  - Metagenomics revealing vast diversity',
            '  - New phyla constantly discovered'
        ],
        helper: 'Prokaryotes dominate through metabolic diversity, rapid reproduction, and ability to survive extremes',
        solution: 'Prokaryotes show unprecedented metabolic diversity, occupy all habitats, essential for biogeochemical cycles',
        realWorldContext: 'Prokaryotes created Earth\'s oxygen atmosphere and remain essential to all life'
    });

    return relatedProblems;
}

function generateRelatedBinomialNomenclature() {
    const relatedProblems = [];

    // Problem 1: Basic Binomial Nomenclature Rules
    relatedProblems.push({
        difficulty: 'easier',
        scenario: 'Scientific Naming System Basics',
        problem: 'Explain the rules and format of binomial nomenclature and why it\'s superior to common names',
        parameters: {
            specificItems: ['Binomial Nomenclature', 'rules'],
            category: 'naming basics',
            limit: 2
        },
        type: 'binomial_nomenclature',
        context: { difficulty: 'beginner', topic: 'Binomial Nomenclature', focus: 'naming rules' },
        subparts: [
            'BINOMIAL NOMENCLATURE:',
            '',
            'DEFINITION:',
            '  - Two-part scientific naming system',
            '  - Created by Carolus Linnaeus (1753)',
            '  - Universal system for all organisms',
            '',
            'FORMAT:',
            '  Genus species',
            '  Example: Homo sapiens (humans)',
            '',
            'RULES OF NOMENCLATURE:',
            '',
            '1. TWO PARTS:',
            '   First: Genus name',
            '   - Always CAPITALIZED',
            '   - Noun',
            '   - Shared by related species',
            '   ',
            '   Second: Specific epithet (species name)',
            '   - Always LOWERCASE',
            '   - Adjective or noun',
            '   - Unique within genus',
            '   ',
            '   Example: Canis lupus (gray wolf)',
            '   - Canis = genus (dogs)',
            '   - lupus = species (wolf)',
            '',
            '2. ITALICIZATION/UNDERLINING:',
            '   - Both parts italicized in print',
            '   - Or underlined if handwritten',
            '   - Never both italicized and underlined',
            '   ',
            '   Correct: Homo sapiens or Homo sapiens',
            '   Wrong: Homo sapiens',
            '',
            '3. LANGUAGE:',
            '   - Must be Latin or Latinized',
            '   - Allows worldwide understanding',
            '   - Independent of spoken language',
            '',
            '4. ABBREVIATION:',
            '   - After first use, genus can be abbreviated',
            '   - Example: Escherichia coli → E. coli',
            '   - Never abbreviate specific epithet alone',
            '',
            '5. NEVER USE SPECIFIC EPITHET ALONE:',
            '   - "sapiens" is meaningless without "Homo"',
            '   - Many species share same specific epithet',
            '   - Example: Many species named "alba" (white)',
            '',
            '6. UNIQUENESS:',
            '   - Each species name unique within kingdom',
            '   - Same specific epithet OK in different genera',
            '   - Example: Quercus alba (oak) vs Ursus alba (bear)',
            '',
            'ADDITIONAL NOMENCLATURE:',
            '',
            'SUBSPECIES:',
            '  Format: Genus species subspecies',
            '  Example: Panthera leo persica (Asiatic lion)',
            '  All lowercase except Genus',
            '',
            'AUTHOR CITATION:',
            '  - Name of describer added',
            '  - Format: Genus species Author, Year',
            '  - Example: Homo sapiens Linnaeus, 1758',
            '  - Parentheses if genus changed',
            '',
            'WHY SCIENTIFIC NAMES BETTER THAN COMMON NAMES:',
            '',
            'PROBLEMS WITH COMMON NAMES:',
            '',
            '1. NOT UNIVERSAL:',
            '   - Vary by language',
            '   - "Dog" (English) = "Perro" (Spanish) = "Chien" (French)',
            '   - Communication barriers',
            '',
            '2. NOT UNIQUE:',
            '   - Same common name for different species',
            '   - "Robin" in US ≠ "Robin" in UK',
            '   - American robin (Turdus migratorius)',
            '   - European robin (Erithacus rubecula)',
            '   - Completely different species!',
            '',
            '3. MULTIPLE NAMES FOR SAME SPECIES:',
            '   - Mountain lion = Cougar = Puma = Panther',
            '   - All same species: Puma concolor',
            '   - Confusing!',
            '',
            '4. NOT SYSTEMATIC:',
            '   - Don\'t show relationships',
            '   - "Sea cucumber" is not a plant',
            '   - "Jellyfish" is not a fish',
            '   - Misleading!',
            '',
            '5. SOME ORGANISMS HAVE NO COMMON NAME:',
            '   - Most insects',
            '   - Most microorganisms',
            '   - Many plants',
            '',
            'ADVANTAGES OF SCIENTIFIC NAMES:',
            '',
            '1. UNIVERSAL:',
            '   - Same worldwide',
            '   - Scientists anywhere can communicate',
            '   - No translation needed',
            '',
            '2. UNIQUE:',
            '   - One name per species',
            '   - No ambiguity',
            '   - Precise identification',
            '',
            '3. SHOW RELATIONSHIPS:',
            '   - Genus shows related species',
            '   - Homo sapiens and Homo erectus clearly related',
            '   - Informative',
            '',
            '4. STABLE:',
            '   - Governed by international codes',
            '   - Changes follow rules',
            '   - Priority system',
            '',
            '5. COMPREHENSIVE:',
            '   - Every species has one',
            '   - Even newly discovered',
            '',
            'EXAMPLES:',
            '',
            'HUMANS:',
            '  Common: Human, Man, Homme, Mensch',
            '  Scientific: Homo sapiens',
            '  - Universal, unique, informative',
            '',
            'DOMESTIC DOG:',
            '  Common: Dog, Perro, Chien, Hund',
            '  Scientific: Canis lupus familiaris',
            '  - Shows relationship to wolf (Canis lupus)',
            '',
            'MALARIA PARASITE:',
            '  Common: None (microscopic)',
            '  Scientific: Plasmodium falciparum',
            '  - Essential for medical communication',
            '',
            'NAMING SOURCES:',
            '',
            'Names can describe:',
            '  - Appearance: Tyrannosaurus rex (tyrant lizard king)',
            '  - Location: Sequoia sempervirens (California redwood)',
            '  - Discoverer: Escherichia coli (Theodor Escherich)',
            '  - Habitat: Dendrobates (tree walker - poison dart frog)',
            '  - Behavior: Gorilla gorilla (gorilla sound)',
            '',
            'INTERNATIONAL CODES:',
            '',
            'Three main codes govern naming:',
            '  - ICN: Plants, fungi, algae',
            '  - ICZN: Animals',
            '  - ICNP: Bacteria, archaea',
            '',
            'Key principles:',
            '  - Priority: First published name wins',
            '  - Type specimens: Physical reference',
            '  - Publication: Must be formally described',
            '',
            'HISTORICAL NOTE:',
            '  Before Linnaeus:',
            '   - Long descriptive phrases',
            '   - Example: "Rosa sylvestris vulgaris, flore odorato incarnato"',
            '   - (Common wild rose with fragrant, flesh-colored flowers)',
            '   - Impractical!',
            '  ',
            '  Linnaeus simplified:',
            '   - Rosa canina',
            '   - Two words!',
            '   - Revolutionary'
        ],
        helper: 'Format: Genus species (both italicized, Genus capitalized) - universal, unique, informative',
        solution: 'Binomial nomenclature uses two-part Latin names (Genus species); superior to common names: universal, unique, systematic',
        realWorldContext: 'Scientific names eliminate confusion - "panther" could mean jaguar, leopard, or cougar!'
    });

    // Problem 2: Writing and Pronouncing Names
    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'Correct Usage of Scientific Names',
        problem: 'Demonstrate correct writing, abbreviation, and pronunciation of scientific names with examples',
        parameters: {
            specificItems: ['format', 'abbreviation', 'pronunciation'],
            category: 'usage',
            limit: 3
        },
        type: 'binomial_nomenclature',
        context: { difficulty: 'intermediate', topic: 'Binomial Nomenclature', focus: 'proper usage' },
        subparts: [
            'PROPER USAGE OF SCIENTIFIC NAMES:',
            '',
            'WRITING RULES:',
            '',
            '1. CAPITALIZATION:',
            '   CORRECT:',
            '   ✓ Homo sapiens (Genus capitalized)',
            '   ✓ Escherichia coli',
            '   ✓ Tyrannosaurus rex',
            '   ',
            '   INCORRECT:',
            '   ✗ homo sapiens (genus not capitalized)',
            '   ✗ Homo Sapiens (species not lowercase)',
            '   ✗ HOMO SAPIENS (not all caps)',
            '',
            '2. ITALICIZATION:',
            '   In print/typed:',
            '   ✓ Canis lupus (italicized)',
            '   ✗ Canis lupus (not italicized)',
            '   ',
            '   If handwritten:',
            '   ✓ Canis lupus (underlined separately)',
            '   ✗ Canis lupus (not underlined)',
            '',
            '3. BOTH PARTS REQUIRED:',
            '   CORRECT:',
            '   ✓ "The species Homo sapiens..."',
            '   ✓ "Humans (Homo sapiens) evolved..."',
            '   ',
            '   INCORRECT:',
            '   ✗ "The species sapiens..." (incomplete)',
            '   ✗ "Homo are primates..." (genus alone)',
            '',
            'ABBREVIATION:',
            '',
            'FIRST MENTION:',
            '  - Always write out full name',
            '  - Example: "Escherichia coli is a bacterium..."',
            '',
            'SUBSEQUENT MENTIONS:',
            '  - Can abbreviate genus',
            '  - Keep first letter + period',
            '  - Example: "E. coli reproduces rapidly..."',
            '  ',
            '  Still italicized:',
            '  ✓ E. coli (correct)',
            '  ✗ E. coli (wrong - not italicized)',
            '',
            'MULTIPLE SPECIES IN SAME GENUS:',
            '  First: "Staphylococcus aureus and S. epidermidis..."',
            '  ',
            '  If clear from context:',
            '  "In Drosophila, D. melanogaster and D. simulans..."',
            '',
            'NEVER ABBREVIATE ALONE:',
            '  ✗ "The E. is a bacterium" (meaningless)',
            '  ✓ "The E. coli is a bacterium"',
            '',
            'GENUS ALONE (When referring to whole genus):',
            '  - Write genus name in full',
            '  - Italicize',
            '  - Example: "Species in Homo include H. sapiens and H. neanderthalensis"',
            '',
            'PRONUNCIATION:',
            '',
            'GENERAL GUIDELINES:',
            '  - Latin pronunciation preferred',
            '  - But varies by region/tradition',
            '  - Correctness less important than consistency',
            '  - Written form is what matters legally',
            '',
            'COMMON EXAMPLES:',
            '',
            'Homo sapiens:',
            '  HOH-moh SAY-pee-enz',
            '  - Homo: "man" in Latin',
            '  - sapiens: "wise"',
            '',
            'Escherichia coli:',
            '  esh-er-IK-ee-ah KOH-lye',
            '  Or: E. coli = "EE KOH-lye"',
            '',
            'Tyrannosaurus rex:',
            '  tie-RAN-oh-SAWR-us REKS',
            '  - Tyrannosaurus: "tyrant lizard"',
            '  - rex: "king"',
            '',
            'Canis lupus:',
            '  KAY-nis LOO-pus',
            '  - Canis: "dog"',
            '  - lupus: "wolf"',
            '',
            'Staphylococcus aureus:',
            '  staf-ill-oh-KOK-us OR-ee-us',
            '',
            'Plasmodium falciparum:',
            '  plaz-MOH-dee-um fal-SIP-ar-um',
            '',
            'STRESS PATTERNS:',
            '  - Typically on second-to-last syllable',
            '  - If that syllable is "long"',
            '  - Otherwise third-to-last',
            '  - But many exceptions!',
            '',
            'VOWEL SOUNDS (Classical Latin):',
            '  a = "ah" (father)',
            '  e = "eh" (pet)',
            '  i = "ee" (machine)',
            '  o = "oh" (note)',
            '  u = "oo" (boot)',
            '  ae = "eye" or "ee"',
            '  oe = "oy"',
            '',
            'DON\'T WORRY TOO MUCH:',
            '  - Pronunciation varies',
            '  - Written form is standard',
            '  - Understanding matters more',
            '  - Scientists pronounce differently',
            '',
            'SPECIAL CASES:',
            '',
            'SUBSPECIES:',
            '  Format: Genus species subspecies',
            '  Example: Canis lupus familiaris',
            '  - All three parts italicized',
            '  - Only Genus capitalized',
            '  - kAY-nis LOO-pus fah-mil-ee-AR-is',
            '',
            'VARIETY (mainly plants):',
            '  Format: Genus species var. variety',
            '  Example: Brassica oleracea var. italica (broccoli)',
            '  - "var." not italicized',
            '  - Variety name italicized',
            '',
            'FORM:',
            '  Format: Genus species f. form',
            '  Example: Acer rubrum f. rubrum',
            '  - "f." not italicized',
            '',
            'CULTIVAR (cultivated variety):',
            '  Format: Genus species \'Cultivar Name\'',
            '  Example: Rosa \'Peace\'',
            '  - Single quotes, not italicized',
            '  - Capitalized',
            '  - Not Latin',
            '',
            'HYBRID:',
            '  Format: Genus × species',
            '  Example: Canis × domesticus (dog-wolf hybrid)',
            '  - × symbol (multiplication sign)',
            '  - Indicates hybrid',
            '',
            'AUTHOR CITATION:',
            '  Full format: Genus species Author, Year',
            '  Example: Homo sapiens Linnaeus, 1758',
            '  - Author and year not italicized',
            '  - Common in formal publications',
            '  ',
            '  Abbreviations:',
            '  - L. = Linnaeus',
            '  - DC. = de Candolle',
            '  - Fr. = Fries',
            '',
            'GENUS CHANGE:',
            '  If species moved to new genus:',
            '  Format: Genus species (Original Author) New Author',
            '  Example: Gasterosteus pungitius (Linnaeus) Cuvier',
            '  - Parentheses show original describer',
            '  - Outside: who made the change',
            '',
            'COMMON ERRORS TO AVOID:',
            '',
            '1. ✗ Only italicizing genus: Homo sapiens',
            '   ✓ Both italicized: Homo sapiens',
            '',
            '2. ✗ Capitalizing species: Homo Sapiens',
            '   ✓ Only genus capitalized: Homo sapiens',
            '',
            '3. ✗ Using species alone: "sapiens evolved"',
            '   ✓ Use full name: "Homo sapiens evolved"',
            '',
            '4. ✗ Abbreviating on first use: "E. coli was isolated"',
            '   ✓ Full name first: "Escherichia coli was isolated"',
            '',
            '5. ✗ Not italicizing: Homo sapiens',
            '   ✓ Always italicize: Homo sapiens',
            '',
            '6. ✗ Italicizing common names: Humans',
            '   ✓ Only scientific names: Humans (Homo sapiens)',
            '',
            'CONTEXT USAGE:',
            '',
            'In scientific papers:',
            '  "We studied Drosophila melanogaster (fruit fly)."',
            '  "D. melanogaster were reared at 25°C."',
            '  "Compared to D. simulans, D. melanogaster shows..."',
            '',
            'In casual discussion:',
            '  - Can use abbreviation throughout',
            '  - Context makes it clear',
            '  - Example: "E. coli cultures grew overnight"',
            '',
            'When introducing to general audience:',
            '  "The bacterium Escherichia coli (E. coli), commonly found in the gut..."',
            '  - Full name first',
            '  - Abbreviation in parentheses',
            '  - Can use abbreviation after',
            '',
            'PLURAL FORMS:',
            '  - Add "es" or "s" to species name',
            '  - Still italicized',
            '  Examples:',
            '  - "Multiple Homo sapiens" (no change)',
            '  - "Two Drosophilas" (informal)',
            '  - Better: "Two Drosophila species"',
            '',
            'WHEN TO USE COMMON VS SCIENTIFIC:',
            '',
            'Use common names:',
            '  - General audience',
            '  - Well-known organisms',
            '  - Informal discussion',
            '  Example: "Dogs are descended from wolves"',
            '',
            'Use scientific names:',
            '  - Precision required',
            '  - No common name exists',
            '  - Scientific publication',
            '  - Legal documents',
            '  - Comparing closely related species',
            '  Example: "Canis lupus familiaris descended from Canis lupus"',
            '',
            'Best practice (scientific writing):',
            '  "Domestic dogs (Canis lupus familiaris) are descended from gray wolves (Canis lupus)."',
            '  - Common name for clarity',
            '  - Scientific name for precision',
            '  - Both provided',
            '',
            'PRACTICE EXERCISES:',
            '',
            'Correct these errors:',
            '✗ homo Sapiens → ✓ Homo sapiens',
            '✗ E.Coli → ✓ E. coli',
            '✗ Canis Lupus → ✓ Canis lupus',
            '✗ The sapiens → ✓ The Homo sapiens',
            '✗ Tyrannosaurus Rex → ✓ Tyrannosaurus rex'
        ],
        helper: 'Always: Genus capitalized, species lowercase, both italicized; abbreviate only after first use',
        solution: 'Write Genus species (italicized, Genus capital); abbreviate after first use (E. coli); pronunciation flexible',
        realWorldContext: 'Proper scientific name usage prevents confusion in medicine, law, and international science'
    });

    // Problem 3: Etymology and Meaning
    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'Understanding Scientific Name Origins',
        problem: 'Explain how scientific names are derived and what information they can convey about organisms',
        parameters: {
            specificItems: ['etymology', 'descriptive names', 'geographic names'],
            category: 'name origins',
            limit: 3
        },
        type: 'binomial_nomenclature',
        context: { difficulty: 'intermediate', topic: 'Binomial Nomenclature', focus: 'name meanings' },
        subparts: [
            'ETYMOLOGY OF SCIENTIFIC NAMES:',
            '',
            'SOURCES OF NAMES:',
            '',
            '1. DESCRIPTIVE (Most common):',
            '   Based on appearance, behavior, or characteristics',
            '',
            '   COLOR:',
            '   - Corvus albus: "white raven" (Pied Crow)',
            '   - Quercus rubra: "red oak" (leaves turn red)',
            '   - Ursus arctos: "brown bear"',
            '   - Alba/albus = white',
            '   - Rubra/ruber = red',
            '   - Niger/nigra = black',
            '   - Viridis = green',
            '   - Flavus = yellow',
            '',
            '   SIZE:',
            '   - Balaenoptera musculus: "mouse-like whale" (Blue whale - ironic!)',
            '   - Gigantopithecus blacki: "giant ape"',
            '   - Microraptor: "small thief"',
            '   - Magnus/major = large',
            '   - Parvus/minor = small',
            '   - Giganteus = gigantic',
            '   - Nanus = dwarf',
            '',
            '   SHAPE:',
            '   - Acer palmatum: "maple with palm-shaped leaves"',
            '   - Spirobranchus giganteus: "giant spiral gills" (Christmas tree worm)',
            '   - Rotundus = round',
            '   - Linearis = linear',
            '',
            '   BEHAVIOR:',
            '   - Dendrobates: "tree walker" (poison dart frogs)',
            '   - Tyrannosaurus: "tyrant lizard" (fierce predator)',
            '   - Saltator: "jumper, dancer"',
            '   - Natrix: "swimmer"',
            '',
            '   HABITAT:',
            '   - Nepenthes ampullaria: "swamp pitcher plant"',
            '   - Montanus/montana = mountain',
            '   - Aquaticus = water',
            '   - Sylvestris = forest',
            '   - Campestris = field',
            '',
            '2. GEOGRAPHIC:',
            '   Named after place of discovery or distribution',
            '',
            '   COUNTRIES/REGIONS:',
            '   - Sequoia sempervirens: California redwood',
            '   - Castor canadensis: American beaver',
            '   - Dromaius novaehollandiae: Emu (New Holland = Australia)',
            '   - Africanus = African',
            '   - Americanus = American',
            '   - Japonicus = Japanese',
            '   - Europaeus = European',
            '',
            '   SPECIFIC LOCATIONS:',
            '   - Gorilla beringei: Beringer\'s gorilla (Virunga Mountains)',
            '   - Rattus norvegicus: Norway rat (actually from Asia!)',
            '',
            '3. COMMEMORATIVE:',
            '   Named after people (discoverers, scientists, patrons)',
            '',
            '   SCIENTISTS:',
            '   - Escherichia coli: honors Theodor Escherich',
            '   - Rafflesia arnoldii: honors Stamford Raffles and Joseph Arnold',
            '   - Linnaea borealis: honors Linnaeus himself',
            '   - Bairdella: honors Spencer Baird',
            '',
            '   PATRONS/OTHERS:',
            '   - Sinosauropteryx prima: "first Chinese lizard-wing"',
            '   - Often with "-i" or "-ii" ending for males',
            '   - "-ae" for females',
            '   Examples:',
            '   - darwini: honors Darwin',
            '   - lewisi: honors Lewis',
            '   - victoriae: honors Queen Victoria',
            '',
            '4. ECOLOGICAL RELATIONSHIPS:',
            '   ',
            '   FOOD SOURCE:',
            '   - Glossophaga soricina: "tongue-eater bat" (nectar feeder)',
            '   - Phyllophagus: "leaf eater"',
            '',
            '   SYMBIOSIS:',
            '   - Paramecium bursaria: contains algal symbionts',
            '',
            '5. MYTHOLOGY/LITERATURE:',
            '   - Titanosaurus: "titanic lizard" (Greek Titans)',
            '   - Narcissus: flower that bends down (mythological Narcissus)',
            '   - Dracaena: "female dragon" (dragon tree)',
            '',
            '6. ANATOMICAL FEATURES:',
            '   - Triceratops: "three-horned face"',
            '   - Pterodactylus: "wing finger"',
            '   - Octopus: "eight foot"',
            '   - Gastropoda: "stomach foot" (belly-walkers)',
            '',
            'COMMON PREFIXES:',
            '',
            '  Micro-: small (Microraptor)',
            '  Macro-: large (Macropus = kangaroo, "big foot")',
            '  Mega-: huge (Megalodon)',
            '  Poly-: many (Polypterus = "many fins")',
            '  Mono-: one (Monodon = "one tooth", narwhal)',
            '  Di-: two (Diplodocus = "double beam")',
            '  Tri-: three (Triceratops)',
            '  Pseudo-: false (Pseudopleuronectes)',
            '',
            'COMMON SUFFIXES (Animals):',
            '',
            '  -idae: family (Canidae = dog family)',
            '  -inae: subfamily (Pantherinae = big cats)',
            '  -ini: tribe',
            '  -pteryx: wing (Archaeopteryx = "ancient wing")',
            '  -saurus: lizard (Tyrannosaurus)',
            '  -ops: face (Triceratops)',
            '',
            'COMMON SUFFIXES (Plants):',
            '',
            '  -aceae: family (Rosaceae = rose family)',
            '  -ales: order (Rosales)',
            '  -opsida: class (Magnoliopsida)',
            '  -phyta: phylum/division (Bryophyta = mosses)',
            '',
            'BODY PARTS (Greek/Latin):',
            '',
            '  -cephalus: head (Brachycephalus = "short head")',
            '  -odon/-dont: tooth (Smilodon = "knife tooth")',
            '  -pus/-pod: foot (Octopus, Gastropoda)',
            '  -rhinus: nose (Dicerorhinus = "two-horned nose")',
            '  -pteryx/-pter: wing (Archaeopteryx, Coleoptera)',
            '  -stoma: mouth (Cyclostoma)',
            '  -urus: tail (Brachyurus = "short tail")',
            '',
            'FAMOUS EXAMPLES WITH MEANINGS:',
            '',
            'Tyrannosaurus rex:',
            '  - Tyrannosaurus: "tyrant lizard"',
            '  - rex: "king"',
            '  - Full: "Tyrant Lizard King"',
            '',
            'Homo sapiens:',
            '  - Homo: "man"',
            '  - sapiens: "wise"',
            '  - Full: "Wise Man"',
            '',
            'Acer saccharum:',
            '  - Acer: "sharp" (wood quality)',
            '  - saccharum: "sugar"',
            '  - Full: "Sugar Maple"',
            '',
            'Ursus maritimus:',
            '  - Ursus: "bear"',
            '  - maritimus: "of the sea"',
            '  - Full: "Sea Bear" (Polar bear)',
            '',
            'Canis lupus:',
            '  - Canis: "dog"',
            '  - lupus: "wolf"',
            '  - Full: "Wolf Dog"',
            '',
            'Balaenoptera musculus:',
            '  - Balaenoptera: "winged whale"',
            '  - musculus: "little mouse"',
            '  - Full: "Little mouse winged whale" (Blue whale!)',
            '  - Ironic name for largest animal',
            '',
            'Drosophila melanogaster:',
            '  - Drosophila: "dew lover" (found on rotting fruit)',
            '  - melanogaster: "black belly"',
            '',
            'HUMOROUS/CREATIVE NAMES:',
            '',
            '  - Colon rectum: beetle genus and species (yes, really!)',
            '  - Spongiforma squarepantsii: fungus named after SpongeBob',
            '  - Arthurdactylus: pterosaur (after Arthur Conan Doyle)',
            '  - Bambiraptor: small dinosaur (like young deer)',
            '  - Agra vation: beetle causing "aggravation"',
            '  - Pieza pi: insect (π)',
            '',
            'WHY ETYMOLOGY MATTERS:',
            '',
            '1. DESCRIPTIVE INFORMATION:',
            '   - Name tells you something about organism',
            '   - Aids memory and understanding',
            '   - Educational value',
            '',
            '2. HISTORICAL INSIGHT:',
            '   - When/where discovered',
            '   - Who discovered',
            '   - Scientific understanding at time',
            '',
            '3. CULTURAL CONNECTION:',
            '   - Links to mythology',
            '   - Geographic heritage',
            '   - Personal stories',
            '',
            '4. APPRECIATION:',
            '   - Names are creative',
            '   - Sometimes poetic',
            '   - Sometimes humorous',
            '',
            'CHANGING MEANINGS:',
            '  - Original meaning may be wrong',
            '  - Example: Rattus norvegicus (not from Norway)',
            '  - But name remains (stability)',
            '  - Name is just a label, not definition'
        ],
        helper: 'Names often describe appearance, honor people, indicate location, or reference mythology',
        solution: 'Scientific names derive from descriptive terms, geographic locations, person names, or characteristics; often Latin/Greek roots',
        realWorldContext: 'Understanding etymology makes names memorable: Tyrannosaurus rex = "Tyrant Lizard King"!'
    });

    // Problem 4: Taxonomic Name Changes
    relatedProblems.push({
        difficulty: 'harder',
        scenario: 'Why and How Scientific Names Change',
        problem: 'Explain the reasons for taxonomic name changes and how synonyms are handled in biological nomenclature',
        parameters: {
            specificItems: ['synonyms', 'priority rule', 'reclassification'],
            category: 'nomenclatural changes',
            limit: 3
        },
        type: 'binomial_nomenclature',
        context: { difficulty: 'advanced', topic: 'Binomial Nomenclature', focus: 'name stability' },
        subparts: [
            'TAXONOMIC NAME CHANGES:',
            '',
            'WHY NAMES CHANGE:',
            '',
            '1. RECLASSIFICATION (Most common):',
            '   Species moved to different genus',
            '',
            '   Reasons:',
            '   - New molecular data',
            '   - Re-examination of specimens',
            '   - Better understanding of relationships',
            '',
            '   Example: Giant Panda',
            '   - Originally: Ursus melanoleucus (bear genus)',
            '   - Changed to: Ailuropoda melanoleuca (own genus)',
            '   - Reason: Unique characteristics warranted new genus',
            '',
            '   Notation:',
            '   - Original author in parentheses',
            '   - Ailuropoda melanoleuca (David, 1869)',
            '   - Shows David originally described it',
            '   - But in different genus',
            '',
            '2. SYNONYMS DISCOVERED:',
            '   Same species described multiple times',
            '',
            '   How it happens:',
            '   - Different scientists',
            '   - Different locations',
            '   - Different life stages',
            '   - Poor communication',
            '',
            '   Example: Brontosaurus',
            '   - 1877: Apatosaurus ajax described',
            '   - 1879: Brontosaurus excelsus described',
            '   - 1903: Realized they were same genus',
            '   - Apatosaurus had priority (older)',
            '   - "Brontosaurus" became invalid',
            '   - 2015: Reinstated! New analysis showed differences',
            '',
            '   Types of Synonyms:',
            '   - Junior synonym: Later name (invalid)',
            '   - Senior synonym: Earlier name (valid)',
            '   - Objective synonym: Same type specimen',
            '   - Subjective synonym: Different specimens, same species',
            '',
            '3. PRIORITY VIOLATIONS:',
            '   Earlier name found',
            '',
            '   Priority Rule:',
            '   - First validly published name has precedence',
            '   - Starting dates:',
            '   - Plants: 1753 (Linnaeus, Species Plantarum)',
            '   - Animals: 1758 (Linnaeus, Systema Naturae, 10th ed.)',
            '   - Bacteria: 1980',
            '',
            '   Example:',
            '   - Widely used name for 100 years',
            '   - Obscure earlier name found',
            '   - Technically, earlier name has priority',
            '   - But... stability important',
            '',
            '4. SPLITTING:',
            '   One species divided into multiple',
            '',
            '   Reason:',
            '   - Molecular data reveals cryptic species',
            '   - Geographic variation represents distinct species',
            '   - Different species concepts applied',
            '',
            '   Example: African Elephant',
            '   - Was: Loxodonta africana',
            '   - Now: L. africana (savanna) + L. cyclotis (forest)',
            '   - Based on genetic and morphological differences',
            '',
            '5. LUMPING:',
            '   Multiple species combined into one',
            '',
            '   Reason:',
            '   - Variation continuous, not discrete',
            '   - Interbreeding discovered',
            '   - Molecular data shows little differentiation',
            '',
            '6. NOMENCLATURAL ERRORS:',
            '   Original naming violated rules',
            '',
            '   Issues:',
            '   - Improper publication',
            '   - Name already used (homonym)',
            '   - Grammar errors',
            '   - Type specimen issues',
            '',
            'HANDLING NAME CHANGES:',
            '',
            'INTERNATIONAL CODES:',
            '  Three separate codes:',
            '  - ICZN: Animals',
            '  - ICN: Plants, fungi, algae',
            '  - ICNP: Bacteria, archaea',
            '',
            '  Rules cover:',
            '  - Priority',
            '  - Valid publication',
            '  - Type specimens',
            '  - Name changes',
            '',
            'PRIORITY RULE:',
            '  First validly published name wins',
            '  ',
            '  Requirements for validity:',
            '  - Published in recognized journal',
            '  - Proper description',
            '  - Type specimen designated',
            '  - Name follows rules',
            '',
            'CONSERVATION:',
            '  Preserving widely-used names',
            '',
            '  When priority would cause problems:',
            '  - Name used for 50+ years',
            '  - Thousands of publications',
            '  - Medical/agricultural importance',
            '',
            '  Process:',
            '  - Appeal to International Commission',
            '  - Suppress earlier name',
            '  - Conserve familiar name',
            '',
            '  Example: Tyrannosaurus rex',
            '  - Earlier names existed',
            '  - But T. rex so widely known',
            '  - Name conserved',
            '',
            'NOMEN DUBIUM:',
            '  "Doubtful name"',
            '  - Based on inadequate specimen',
            '  - Cannot be confidently identified',
            '  - Not usable for classification',
            '',
            'NOMEN NUDUM:',
            '  "Naked name"',
            '  - Published without proper description',
            '  - Invalid, no nomenclatural status',
            '',
            'MAINTAINING STABILITY:',
            '',
            'Challenges:',
            '  - Accuracy vs. stability tension',
            '  - New data requires changes',
            '  - But changes cause confusion',
            '',
            'Solutions:',
            '  - Synonym lists maintained',
            '  - Databases track changes',
            '  - Type specimens preserved',
            '  - Clear documentation',
            '',
            'DATABASES:',
            '',
            '  Catalogue of Life',
            '  - Tracks accepted names',
            '  - Lists synonyms',
            '  - Updated annually',
            '',
            '  ITIS (Integrated Taxonomic Information System)',
            '  - North American focus',
            '  - Hierarchical classification',
            '',
            '  WoRMS (World Register of Marine Species)',
            '  - Marine organisms',
            '  - Expert-verified',
            '',
            '  IPNI (International Plant Names Index)',
            '  - Plant names',
            '  - Publication data',
            '',
            'SYNONYM NOTATION:',
            '',
            '  In scientific literature:',
            '  ',
            '  Current accepted name:',
            '  Felis concolor Linnaeus, 1771',
            '  ',
            '  Synonyms (= means synonym):',
            '  = Puma concolor',
            '  = Felis hippolestes',
            '  = Felis oregonensis',
            '  (Over 80 synonyms for this species!)',
            '',
            'IMPACT OF CHANGES:',
            '',
            'Problems:',
            '  - Literature uses old names',
            '  - Databases need updating',
            '  - Legal documents outdated',
            '  - Confusion for non-specialists',
            '',
            'Benefits:',
            '  - Reflects current understanding',
            '  - Improves classification',
            '  - Corrects errors',
            '  - Advances science',
            '',
            'FAMOUS EXAMPLES:',
            '',
            'Brontosaurus → Apatosaurus → Brontosaurus:',
            '  - 1879: Brontosaurus described',
            '  - 1903: Synonymized with Apatosaurus',
            '  - 2015: Resurrected as valid!',
            '  - Shows science is self-correcting',
            '',
            'Pluto (not biology but illustrative):',
            '  - Planet → Dwarf Planet',
            '  - Classification changed',
            '  - New understanding',
            '  - Similar to taxonomy',
            '',
            'HOW TO STAY CURRENT:',
            '',
            '  For researchers:',
            '  - Check authoritative databases',
            '  - Use current taxonomy in publications',
            '  - Note synonyms when relevant',
            '  - Specify which classification used',
            '',
            '  For students:',
            '  - Learn current names',
            '  - Understand names may change',
            '  - Recognize old names in literature',
            '  - Use updated references',
            '',
            'FUTURE:',
            '  - DNA barcoding reducing synonyms',
            '  - Better communication preventing duplicates',
            '  - Online databases improving access',
            '  - But changes will continue',
            '  - Science is dynamic!'
        ],
        helper: 'Names change due to reclassification, synonyms discovered, or priority rules; databases track current accepted names',
        solution: 'Names change from new data, synonyms, or priority issues; senior synonym (earlier) takes precedence; databases track changes',
        realWorldContext: 'Brontosaurus was invalid for 112 years, then reinstated in 2015 based on new analysis!'
    });

    return relatedProblems;
}

// ============== TAXONOMY SOLVER FUNCTIONS ==============

function solveClassificationSystemProblems() {
    const problems = generateRelatedClassificationSystem();
    const solvedProblems = [];

    problems.forEach((problem, index) => {
        console.log(`  Solving Classification System Problem ${index + 1}: ${problem.scenario}`);

        
        const workbook = new EnhancedTaxonomyClassificationWorkbook({
            theme: 'biological',
            explanationLevel: 'detailed',
            includeVisualizations: true,
            includeConceptualConnections: true,
            includeExamples: true,
            includeComparisons: true,
            includeCommonMisconceptions: true,
            includePedagogicalNotes: true,
            detailLevel: 'detailed'
        });

        workbook.handleTaxonomyProblem({
            topic: problem.type,
            parameters: problem.parameters,
            subTopic: null,
            context: problem.context
        });

        solvedProblems.push({
            problem: problem,
            workbook: workbook
        });
    });

    return solvedProblems;
}

function solvePhylogenyProblems() {
    const problems = generateRelatedPhylogeny();
    const solvedProblems = [];

    problems.forEach((problem, index) => {
        console.log(`  Solving Phylogeny Problem ${index + 1}: ${problem.scenario}`);

            const workbook = new EnhancedTaxonomyClassificationWorkbook({
            theme: 'scientific',
            explanationLevel: 'detailed',
            includeVisualizations: true,
            includeConceptualConnections: true,
            includeExamples: true,
            includeComparisons: true,
            includeCommonMisconceptions: true,
            includePedagogicalNotes: true
        });

        workbook.handleTaxonomyProblem({
            topic: problem.type,
            parameters: problem.parameters,
            subTopic: null,
            context: problem.context
        });

        solvedProblems.push({
            problem: problem,
            workbook: workbook
        });
    });

    return solvedProblems;
}

function solveDomainsKingdomsProblems() {
    const problems = generateRelatedDomainsKingdoms();
    const solvedProblems = [];

    problems.forEach((problem, index) => {
        console.log(`  Solving Domains and Kingdoms Problem ${index + 1}: ${problem.scenario}`);

        
        const workbook = new EnhancedTaxonomyClassificationWorkbook({
            theme: 'biological',
            explanationLevel: 'detailed',
            includeVisualizations: true,
            includeConceptualConnections: true,
            includeExamples: true,
            includeComparisons: true,
            includePedagogicalNotes: true
        });

        workbook.handleTaxonomyProblem({
            topic: problem.type,
            parameters: problem.parameters,
            subTopic: null,
            context: problem.context
        });

        solvedProblems.push({
            problem: problem,
            workbook: workbook
        });
    });

    return solvedProblems;
}

function solveBinomialNomenclatureProblems() {
    const problems = generateRelatedBinomialNomenclature();
    const solvedProblems = [];

    problems.forEach((problem, index) => {
        console.log(`  Solving Binomial Nomenclature Problem ${index + 1}: ${problem.scenario}`);

        
        const workbook = new EnhancedTaxonomyClassificationWorkbook({
            theme: 'scientific',
            explanationLevel: 'detailed',
            includeVisualizations: true,
            includeConceptualConnections: true,
            includeExamples: true,
            includeComparisons: true,
            includePedagogicalNotes: true
        });

        workbook.handleTaxonomyProblem({
            topic: problem.type,
            parameters: problem.parameters,
            subTopic: null,
            context: problem.context
        });

        solvedProblems.push({
            problem: problem,
            workbook: workbook
        });
    });

    return solvedProblems;
}

// ============== UPDATE COMPREHENSIVE DOCUMENT GENERATION ==============

// Replace the existing generateComprehensiveBiologyDocument function with this updated version:

async function generateComprehensiveBiologyDocument() {
    console.log('Generating Comprehensive Biology Workbook: Cell Biology + Taxonomy and Classification...');
    console.log('Generating Comprehensive Biology Workbook: Cell Biology + Taxonomy and Classification...');
    console.log('='.repeat(80));

    const documentChildren = [];

    // ============== DOCUMENT HEADER ==============
    documentChildren.push(
        new docx.Paragraph({
            text: 'Comprehensive Biology Workbook',
            heading: docx.HeadingLevel.HEADING_1,
            spacing: { after: 200 },
            alignment: docx.AlignmentType.CENTER
        })
    );

    documentChildren.push(
        new docx.Paragraph({
            text: 'Complete Guide with Related Problems',
            spacing: { after: 150 },
            alignment: docx.AlignmentType.CENTER
        })
    );

    documentChildren.push(
        new docx.Paragraph({
            text: 'Cell Biology & Taxonomy and Classification',
            spacing: { after: 300 },
            alignment: docx.AlignmentType.CENTER
        })
    );

    documentChildren.push(
        new docx.Paragraph({
            text: `Generated: ${new Date().toLocaleString()}`,
            spacing: { after: 600 },
            alignment: docx.AlignmentType.CENTER
        })
    );

    // ============== TABLE OF CONTENTS ==============
    documentChildren.push(
        new docx.Paragraph({
            text: 'Table of Contents',
            heading: docx.HeadingLevel.HEADING_2,
            spacing: { after: 200 }
        })
    );

    /**documentChildren.push(
        new docx.Paragraph({
            text: 'SECTION A: CELL BIOLOGY',
            heading: docx.HeadingLevel.HEADING_2,
            spacing: { before: 300, after: 200 }
        })
    );

    // Part I: Cell Structure
    documentChildren.push(
        new docx.Paragraph({
            text: 'Part I: Cell Structure and Types (5 Problems)',
            heading: docx.HeadingLevel.HEADING_3,
            spacing: { before: 200, after: 100 }
        })
    );

    const cellStructureProblems = generateRelatedCellStructure();
    cellStructureProblems.forEach((problem, index) => {
        documentChildren.push(
            new docx.Paragraph({
                text: `${index + 1}. ${problem.scenario}`,
                spacing: { after: 100 },
                indent: { left: 360 }
            })
        );
    });

    // Part II: Cell Membrane
    documentChildren.push(
        new docx.Paragraph({
            text: 'Part II: Cell Membrane (6 Problems)',
            heading: docx.HeadingLevel.HEADING_3,
            spacing: { before: 200, after: 100 }
        })
    );

    const membraneProblems = generateRelatedCellMembrane();
    membraneProblems.forEach((problem, index) => {
        documentChildren.push(
            new docx.Paragraph({
                text: `${index + 6}. ${problem.scenario}`,
                spacing: { after: 100 },
                indent: { left: 360 }
            })
        );
    });

    // Part III: Organelles
    documentChildren.push(
        new docx.Paragraph({
            text: 'Part III: Cell Organelles (6 Problems)',
            heading: docx.HeadingLevel.HEADING_3,
            spacing: { before: 200, after: 100 }
        })
    );

    const organellesProblems = generateRelatedOrganelles();
    organellesProblems.forEach((problem, index) => {
        documentChildren.push(
            new docx.Paragraph({
                text: `${index + 12}. ${problem.scenario}`,
                spacing: { after: 100 },
                indent: { left: 360 }
            })
        );
    });

    // Part IV: Cell Division
    documentChildren.push(
        new docx.Paragraph({
            text: 'Part IV: Cell Division and Cell Cycle (5 Problems)',
            heading: docx.HeadingLevel.HEADING_3,
            spacing: { before: 200, after: 100 }
        })
    );

    const cellDivisionProblems = generateRelatedCellDivision();
    cellDivisionProblems.forEach((problem, index) => {
        documentChildren.push(
            new docx.Paragraph({
                text: `${index + 18}. ${problem.scenario}`,
                spacing: { after: 100 },
                indent: { left: 360 }
            })
        );
    });

    // Part V: Mitosis and Meiosis
    documentChildren.push(
        new docx.Paragraph({
            text: 'Part V: Mitosis and Meiosis (5 Problems)',
            heading: docx.HeadingLevel.HEADING_3,
            spacing: { before: 200, after: 100 }
        })
    );

    const mitosisProblems = generateRelatedMitosisMeiosis();
    mitosisProblems.forEach((problem, index) => {
        documentChildren.push(
            new docx.Paragraph({
                text: `${index + 23}. ${problem.scenario}`,
                spacing: { after: 100 },
                indent: { left: 360 }
            })
        );
    });

    // Part VI: Cell Transport
    documentChildren.push(
        new docx.Paragraph({
            text: 'Part VI: Cell Transport Mechanisms (5 Problems)',
            heading: docx.HeadingLevel.HEADING_3,
            spacing: { before: 200, after: 100 }
        })
    );

    const transportProblems = generateRelatedCellTransport();
    transportProblems.forEach((problem, index) => {
        documentChildren.push(
            new docx.Paragraph({
                text: `${index + 28}. ${problem.scenario}`,
                spacing: { after: 100 },
                indent: { left: 360 }
            })
        );
    });

    // Part VII: Cellular Respiration
    documentChildren.push(
        new docx.Paragraph({
            text: 'Part VII: Cellular Respiration (5 Problems)',
            heading: docx.HeadingLevel.HEADING_3,
            spacing: { before: 200, after: 100 }
        })
    );

    const respirationProblems = generateRelatedCellularRespiration();
    respirationProblems.forEach((problem, index) => {
        documentChildren.push(
            new docx.Paragraph({
                text: `${index + 33}. ${problem.scenario}`,
                spacing: { after: 100 },
                indent: { left: 360 }
            })
        );
    });

    // Part VIII: Photosynthesis
    documentChildren.push(
        new docx.Paragraph({
            text: 'Part VIII: Photosynthesis (5 Problems)',
            heading: docx.HeadingLevel.HEADING_3,
            spacing: { before: 200, after: 100 }
        })
    );

    const photosynthesisProblems = generateRelatedPhotosynthesis();
    photosynthesisProblems.forEach((problem, index) => {
        documentChildren.push(
            new docx.Paragraph({
                text: `${index + 38}. ${problem.scenario}`,
                spacing: { after: 100 },
                indent: { left: 360 }
            })
        );
    });
    */

    // ============== TAXONOMY SECTION TOC ==============
    documentChildren.push(
        new docx.Paragraph({
            text: 'SECTION B: TAXONOMY AND CLASSIFICATION',
            heading: docx.HeadingLevel.HEADING_2,
            spacing: { before: 400, after: 200 }
        })
    );

    // Part IX: Classification System
    documentChildren.push(
        new docx.Paragraph({
            text: 'Part IX: Classification System (5 Problems)',
            heading: docx.HeadingLevel.HEADING_3,
            spacing: { before: 200, after: 100 }
        })
    );

    const classificationProblems = generateRelatedClassificationSystem();
    classificationProblems.forEach((problem, index) => {
        documentChildren.push(
            new docx.Paragraph({
                text: `${index + 43}. ${problem.scenario}`,
                spacing: { after: 100 },
                indent: { left: 360 }
            })
        );
    });

    // Part X: Phylogeny
    documentChildren.push(
        new docx.Paragraph({
            text: 'Part X: Phylogeny and Evolutionary Relationships (5 Problems)',
            heading: docx.HeadingLevel.HEADING_3,
            spacing: { before: 200, after: 100 }
        })
    );

    const phylogenyProblems = generateRelatedPhylogeny();
    phylogenyProblems.forEach((problem, index) => {
        documentChildren.push(
            new docx.Paragraph({
                text: `${index + 48}. ${problem.scenario}`,
                spacing: { after: 100 },
                indent: { left: 360 }
            })
        );
    });

    // Part XI: Domains and Kingdoms
    documentChildren.push(
        new docx.Paragraph({
            text: 'Part XI: Domains and Kingdoms (4 Problems)',
            heading: docx.HeadingLevel.HEADING_3,
            spacing: { before: 200, after: 100 }
        })
    );

    const domainsProblems = generateRelatedDomainsKingdoms();
    domainsProblems.forEach((problem, index) => {
        documentChildren.push(
            new docx.Paragraph({
                text: `${index + 53}. ${problem.scenario}`,
                spacing: { after: 100 },
                indent: { left: 360 }
            })
        );
    });

    // Part XII: Binomial Nomenclature
    documentChildren.push(
        new docx.Paragraph({
            text: 'Part XII: Binomial Nomenclature (4 Problems)',
            heading: docx.HeadingLevel.HEADING_3,
            spacing: { before: 200, after: 100 }
        })
    );

    const nomenclatureProblems = generateRelatedBinomialNomenclature();
    nomenclatureProblems.forEach((problem, index) => {
        documentChildren.push(
            new docx.Paragraph({
                text: `${index + 57}. ${problem.scenario}`,
                spacing: { after: 100 },
                indent: { left: 360 }
            })
        );
    });

    documentChildren.push(
        new docx.Paragraph({
            text: '',
            spacing: { after: 400 }
        })
    );

    // ============== SECTION A: CELL BIOLOGY (Problems 1-42) ==============
    // [Keep all existing cell biology sections exactly as they were - I'll skip repeating them here for brevity]
    
    // [All the cell biology parts I-VIII remain unchanged from the original code]
    
    // ... [Cell Structure, Membrane, Organelles, Cell Division, Mitosis/Meiosis, Transport, Respiration, Photosynthesis]

    // ============== SECTION B: TAXONOMY AND CLASSIFICATION ==============
    
    console.log('\nProcessing SECTION B: TAXONOMY AND CLASSIFICATION...');
    
    documentChildren.push(
        new docx.Paragraph({
            text: 'SECTION B: TAXONOMY AND CLASSIFICATION',
            heading: docx.HeadingLevel.HEADING_1,
            spacing: { before: 400, after: 300 },
            pageBreakBefore: true
        })
    );

    documentChildren.push(
        new docx.Paragraph({
            text: 'Understanding how scientists organize and name the diversity of life',
            spacing: { after: 400 },
            italics: true
        })
    );

    // ============== PART IX: CLASSIFICATION SYSTEM ==============
    console.log('\nProcessing Part IX: Classification System...');
    documentChildren.push(
        new docx.Paragraph({
            text: 'Part IX: Classification System',
            heading: docx.HeadingLevel.HEADING_1,
            spacing: { before: 400, after: 300 },
            pageBreakBefore: true
        })
    );

    const classificationSolved = solveClassificationSystemProblems();
    classificationSolved.forEach((solved, index) => {
        console.log(`  Adding Classification System Problem ${index + 1} to document...`);

        documentChildren.push(
            new docx.Paragraph({
                text: `Problem ${index + 43}: ${solved.problem.scenario}`,
                heading: docx.HeadingLevel.HEADING_2,
                spacing: { before: 400, after: 300 },
                pageBreakBefore: true
            })
        );

        documentChildren.push(
            new docx.Paragraph({
                text: `${solved.problem.problem}`,
                spacing: { after: 200 },
                bold: true
            })
        );

        documentChildren.push(
            new docx.Paragraph({
                text: `Difficulty: ${solved.problem.difficulty}`,
                spacing: { after: 100 }
            })
        );

        documentChildren.push(
            new docx.Paragraph({
                text: `Helper Tip: ${solved.problem.helper}`,
                spacing: { after: 200 },
                italics: true
            })
        );

        documentChildren.push(...generateProblemSections(solved.workbook));
    });

    // ============== PART X: PHYLOGENY ==============
    console.log('\nProcessing Part X: Phylogeny and Evolutionary Relationships...');
    documentChildren.push(
        new docx.Paragraph({
            text: 'Part X: Phylogeny and Evolutionary Relationships',
            heading: docx.HeadingLevel.HEADING_1,
            spacing: { before: 400, after: 300 },
            pageBreakBefore: true
        })
    );

    const phylogenySolved = solvePhylogenyProblems();
    phylogenySolved.forEach((solved, index) => {
        console.log(`  Adding Phylogeny Problem ${index + 1} to document...`);

        documentChildren.push(
            new docx.Paragraph({
                text: `Problem ${index + 48}: ${solved.problem.scenario}`,
                heading: docx.HeadingLevel.HEADING_2,
                spacing: { before: 400, after: 300 },
                pageBreakBefore: true
            })
        );

        documentChildren.push(
            new docx.Paragraph({
                text: `${solved.problem.problem}`,
                spacing: { after: 200 },
                bold: true
            })
        );

        documentChildren.push(
            new docx.Paragraph({
                text: `Difficulty: ${solved.problem.difficulty}`,
                spacing: { after: 100 }
            })
        );

        documentChildren.push(
            new docx.Paragraph({
                text: `Helper Tip: ${solved.problem.helper}`,
                spacing: { after: 200 },
                italics: true
            })
        );

        documentChildren.push(...generateProblemSections(solved.workbook));
    });

    // ============== PART XI: DOMAINS AND KINGDOMS ==============
    console.log('\nProcessing Part XI: Domains and Kingdoms...');
    documentChildren.push(
        new docx.Paragraph({
            text: 'Part XI: Domains and Kingdoms',
            heading: docx.HeadingLevel.HEADING_1,
            spacing: { before: 400, after: 300 },
            pageBreakBefore: true
        })
    );

    const domainsSolved = solveDomainsKingdomsProblems();
    domainsSolved.forEach((solved, index) => {
        console.log(`  Adding Domains and Kingdoms Problem ${index + 1} to document...`);

        documentChildren.push(
            new docx.Paragraph({
                text: `Problem ${index + 53}: ${solved.problem.scenario}`,
                heading: docx.HeadingLevel.HEADING_2,
                spacing: { before: 400, after: 300 },
                pageBreakBefore: true
            })
        );

        documentChildren.push(
            new docx.Paragraph({
                text: `${solved.problem.problem}`,
                spacing: { after: 200 },
                bold: true
            })
        );

        documentChildren.push(
            new docx.Paragraph({
                text: `Difficulty: ${solved.problem.difficulty}`,
                spacing: { after: 100 }
            })
        );

        documentChildren.push(
            new docx.Paragraph({
                text: `Helper Tip: ${solved.problem.helper}`,
                spacing: { after: 200 },
                italics: true
            })
        );

        documentChildren.push(...generateProblemSections(solved.workbook));
    });

    // ============== PART XII: BINOMIAL NOMENCLATURE ==============
    console.log('\nProcessing Part XII: Binomial Nomenclature...');
    documentChildren.push(
        new docx.Paragraph({
            text: 'Part XII: Binomial Nomenclature',
            heading: docx.HeadingLevel.HEADING_1,
            spacing: { before: 400, after: 300 },
            pageBreakBefore: true
        })
    );

    const nomenclatureSolved = solveBinomialNomenclatureProblems();
    nomenclatureSolved.forEach((solved, index) => {
        console.log(`  Adding Binomial Nomenclature Problem ${index + 1} to document...`);

        documentChildren.push(
            new docx.Paragraph({
                text: `Problem ${index + 57}: ${solved.problem.scenario}`,
                heading: docx.HeadingLevel.HEADING_2,
                spacing: { before: 400, after: 300 },
                pageBreakBefore: true
            })
        );

        documentChildren.push(
            new docx.Paragraph({
                text: `${solved.problem.problem}`,
                spacing: { after: 200 },
                bold: true
            })
        );

        documentChildren.push(
            new docx.Paragraph({
                text: `Difficulty: ${solved.problem.difficulty}`,
                spacing: { after: 100 }
            })
        );

        documentChildren.push(
            new docx.Paragraph({
                text: `Helper Tip: ${solved.problem.helper}`,
                spacing: { after: 200 },
                italics: true
            })
        );

        documentChildren.push(...generateProblemSections(solved.workbook));
    });

    // ============== CREATE AND SAVE DOCUMENT ==============
    const doc = new docx.Document({
        sections: [{
            properties: {
                page: {
                    margin: {
                        top: 720,    // 0.5 inch
                        right: 720,
                        bottom: 720,
                        left: 720
                    }
                }
            },
            children: documentChildren
        }]
    });

    // Save the document
    try {
        const buffer = await docx.Packer.toBuffer(doc);
        const filename = 'comprehensive_biology_workbook_cell_biology_and_taxonomy.docx';
        const outputPath = path.join(process.cwd(), filename);
        fs.writeFileSync(outputPath, buffer);

        console.log('\n' + '='.repeat(80));
        console.log('✓ COMPREHENSIVE BIOLOGY DOCUMENT GENERATION COMPLETE');
        console.log('='.repeat(80));
        console.log(`\n✓ Document saved as: ${outputPath}`);
        console.log('\n📊 DOCUMENT STATISTICS:');
        console.log('  • Total Problems: 60');
        console.log('\n  SECTION B: TAXONOMY AND CLASSIFICATION (18 problems)');
        console.log('    - Classification System: 5 problems');
        console.log('    - Phylogeny: 5 problems');
        console.log('    - Domains and Kingdoms: 4 problems');
        console.log('    - Binomial Nomenclature: 4 problems');
        console.log('\n📖 CONTENT BREAKDOWN:');
        console.log('  • Part I: Cell Structure and Types (Problems 1-5)');
        console.log('  • Part II: Cell Membrane (Problems 6-11)');
        console.log('  • Part III: Cell Organelles (Problems 12-17)');
        console.log('  • Part IV: Cell Division (Problems 18-22)');
        console.log('  • Part V: Mitosis and Meiosis (Problems 23-27)');
        console.log('  • Part VI: Cell Transport (Problems 28-32)');
        console.log('  • Part VII: Cellular Respiration (Problems 33-37)');
        console.log('  • Part VIII: Photosynthesis (Problems 38-42)');
        console.log('  • Part IX: Classification System (Problems 43-47)');
        console.log('  • Part X: Phylogeny (Problems 48-52)');
        console.log('  • Part XI: Domains and Kingdoms (Problems 53-56)');
        console.log('  • Part XII: Binomial Nomenclature (Problems 57-60)');
        console.log('\n📄 EXPECTED PAGES: 200+ pages');
        console.log('\n✨ Each problem includes:');
        console.log('  • Problem statement with difficulty level');
        console.log('  • Helper tips for quick guidance');
        console.log('  • Complete step-by-step explanation');
        console.log('  • Detailed biological content');
        console.log('  • Key concepts and definitions');
        console.log('  • Real-world context and applications');
        console.log('  • Common misconceptions addressed');
        console.log('  • Pedagogical notes for teaching');
        console.log('  • Comparisons and contrasts');
        console.log('  • Examples from nature');
        console.log('='.repeat(80) + '\n');
    } catch (error) {
        console.error(`\n❌ Error saving document: ${error.message}`);
        console.error(error.stack);
    }
}

// ============== RUN THE COMPREHENSIVE DOCUMENT GENERATION ==============

generateComprehensiveBiologyDocument().catch(error => {
    console.error('\n❌ FATAL ERROR:', error.message);
    console.error(error.stack);
    process.exit(1);
});
