

nucleicAcidStructure: {
    'DNA and RNA Structure': [
        'RNA is simply a single-stranded copy of DNA — OVERSIMPLIFICATION: RNA has a different sugar (ribose vs deoxyribose), uses uracil instead of thymine, and performs structurally and catalytically distinct functions; it is not merely a "copy"',
        'The coding strand is the template for RNA polymerase — FALSE: the template strand (antisense strand) is read 3n5 by RNA polymerase; the coding strand (sense strand) has the same sequence as the mRNA (with T replaced by U) but is NOT the template',
        'Purines and pyrimidines pair with each other randomly — FALSE: base pairing is strictly specific — A pairs only with T (or U in RNA) and G pairs only with C; this specificity is determined by hydrogen bond geometry and number',
        'The two DNA strands run in the same direction (parallel) — FALSE: the two strands are antiparallel — one runs 5→3 while the other runs 3→5; this is essential for base-pair complementarity and replication'
    ],
    'Base Pairing': [
        'A-T pairs are stronger than G-C pairs because adenine and thymine are larger — FALSE: G-C pairs form THREE hydrogen bonds vs TWO for A-T; strength comes from number of hydrogen bonds, not molecular size',
        'All regions of a DNA molecule have the same melting temperature — FALSE: G-C-rich regions melt at higher temperatures because of the extra hydrogen bond per base pair; A-T-rich regions denature first',
        'Hydrogen bonds in DNA are covalent bonds — FALSE: hydrogen bonds are weak non-covalent interactions; the covalent bonds in DNA are the phosphodiester bonds in the backbone'
    ]
},

dnaReplication: {
    'Semi-Conservative Model': [
        'Semi-conservative replication means half the new DNA molecules are entirely old and half are entirely new — FALSE: semi-conservative means EACH new molecule has one old parental strand and one newly synthesised strand; after one round, ALL molecules are hybrid',
        'DNA polymerase can start a new strand from scratch — FALSE: DNA polymerase can only extend an existing strand with a free 3-OH; primase must synthesise an RNA primer first to provide this 3-OH',
        'Both strands are synthesised continuously in the direction of the replication fork — FALSE: only the leading strand is continuous; the lagging strand is synthesised discontinuously as Okazaki fragments because DNA polymerase can only work 5→3, which on the lagging strand means away from the fork'
    ],
    'Enzyme Confusion': [
        'Helicase synthesises the new DNA strand — FALSE: helicase only unwinds the double helix; synthesis is carried out by DNA polymerase III',
        'DNA ligase is the main replicative polymerase — FALSE: ligase seals the nicks between Okazaki fragments after primer removal; DNA polymerase III does the main synthesis',
        'Proofreading by DNA polymerase makes replication error-free — OVERSIMPLIFICATION: proofreading reduces error rate from ~1 in 10⁵ to ~1 in 10⁷; mismatch repair further reduces it to ~1 in 10⁹; the process is highly accurate but not perfect'
    ]
},

transcription: {
    'Strand Identity': [
        'The mRNA sequence is complementary to the coding strand of DNA — FALSE: mRNA has the SAME sequence as the coding strand (with U instead of T); mRNA is complementary to the template strand, from which it is directly synthesised',
        'RNA polymerase reads the coding strand 5→3 — FALSE: RNA polymerase reads the template strand 3→5 and synthesises RNA 5→3; the template strand is the antisense strand',
        'Transcription produces a perfect copy of the gene — OVERSIMPLIFICATION in eukaryotes: pre-mRNA is extensively processed — 5 capped, 3 polyadenylated, and spliced to remove introns — before becoming a functional mRNA'
    ],
    'Processing Errors': [
        'Introns are translated into protein — FALSE: introns are removed from pre-mRNA during splicing before export from the nucleus; only exon sequences appear in mature mRNA and are translated',
        'Exons are the non-coding sequences removed during splicing — FALSE: the opposite — EXons are EXpressed (retained in mature mRNA); INtrons are INtervening sequences that are removed',
        'The poly-A tail is encoded in the DNA — PARTIALLY TRUE: the poly-A signal sequence (AAUAAA) is DNA-encoded, but the poly-A tail itself is added post-transcriptionally by poly-A polymerase and is not directly templated'
    ]
},

translation: {
    'Ribosome and Codon Reading': [
        'The ribosome reads mRNA in the 3→5 direction — FALSE: the ribosome moves along mRNA in the 5→3 direction; codons are read 5→3  and new amino acids are added to the C-terminus of the growing chain',
        'Each tRNA recognises only one codon — PARTIALLY FALSE: due to wobble base pairing at the third codon position, some tRNAs can recognise more than one synonymous codon; one tRNA can serve multiple synonymous codons',
        'Peptide bond formation is catalysed by a ribosomal protein — FALSE: peptidyl transferase activity resides in the 23S rRNA (large ribosomal subunit) — the ribosome is a ribozyme; this is evidence for the RNA World hypothesis'
    ],
    'Genetic Code': [
        'The genetic code is ambiguous — each codon could code for more than one amino acid — FALSE: the code is degenerate (one amino acid can be specified by multiple codons) but NOT ambiguous (each codon specifies exactly one amino acid or stop signal)',
        'AUG only signals the start of translation and does not encode an amino acid — FALSE: AUG encodes methionine; the initiator methionine is the first amino acid of every protein (though it is often cleaved post-translationally)',
        'Stop codons are read by tRNA molecules like all other codons — FALSE: stop codons are recognised by protein release factors, not by tRNA molecules; no aminoacyl-tRNA exists for UAA, UAG, or UGA'
    ]
},

geneExpression: {
    'Regulation Misconceptions': [
        'All genes in a cell are expressed at the same time — FALSE: gene expression is highly regulated; different cell types express different subsets of the genome; less than 20% of genes may be active in any given cell type at any time',
        'Gene regulation in eukaryotes works the same way as in prokaryotes (operon model) — FALSE: eukaryotes lack operons; regulation involves chromatin remodelling, transcription factors binding to enhancers (which can be thousands of base pairs from the gene), post-transcriptional control, and epigenetic mechanisms not found in prokaryotes',
        'A mutation in the coding sequence always affects protein function — FALSE: synonymous mutations may not change the amino acid sequence; intronic mutations may not affect the protein unless they disrupt splice sites; promoter mutations affect expression level but not protein structure'
    ]
},



proteinBasics: {
    'Peptide Bond and Primary Structure': [
        'Denaturation breaks peptide bonds and reduces protein molecular weight — FALSE: denaturation disrupts non-covalent interactions and disulfide bonds only; the covalent peptide backbone is completely intact; SDS-PAGE after denaturation confirms unchanged polypeptide mass',
        'Hydrolysis and denaturation are the same process — FALSE: hydrolysis breaks peptide bonds using water (as in digestion by proteases); denaturation only unfolds the 3D structure without cleaving the backbone',
        'The amino acid sequence can change during denaturation — FALSE: primary structure (covalent sequence) is unaffected by any denaturant that does not include a protease or extremely harsh acid/base hydrolysis',
        'All 20 amino acids are structurally unrelated — FALSE: they share the same general structure (α-carbon, amino group, carboxyl group, H); they differ only in their R-groups'
    ],
    'Protein Diversity': [
        'All proteins have quaternary structure — FALSE: many proteins are monomers (myoglobin, lysozyme, ribonuclease); quaternary structure applies only to proteins composed of two or more polypeptide chains',
        'A larger protein is always more complex than a smaller one — FALSE: complexity is a function of structural organisation, not size; a small allosteric protein may be more functionally complex than a large structural protein like collagen'
    ]
},

proteinStructure: {
    'Secondary Structure': [
        'Hydrogen bonds in secondary structure form between R-groups — FALSE: secondary structure H-bonds form exclusively between backbone atoms — the C=O of one residue and the N–H of another; R-groups are not involved',
        'The α-helix and β-sheet are held together by hydrophobic interactions — FALSE: they are stabilised by backbone H-bonds; hydrophobic interactions stabilise tertiary structure by packing secondary structural elements',
        'Proline breaks helices because it is hydrophobic — FALSE: proline disrupts helices because its pyrrolidine ring forms a covalent bond with its own backbone nitrogen, preventing the N–H group from acting as an H-bond donor and constraining the φ backbone angle outside the helical allowed region',
        'Antiparallel β-sheets are weaker than parallel β-sheets — FALSE: antiparallel β-sheets form more linear, geometrically optimal H-bonds than parallel sheets and are generally more stable'
    ],
    'Tertiary Structure': [
        'Hydrogen bonds are the primary driving force for protein folding — FALSE: the hydrophobic effect is the dominant driving force; hydrogen bonds contribute to specificity and fine structure but are not the main thermodynamic driver because hydrogen bonds to water are broken when intramolecular H-bonds form (the net energetic gain is small)',
        'Disulfide bonds can form anywhere in the cell — FALSE: the cytoplasm is a reducing environment (high glutathione) that keeps Cys residues reduced; disulfide bonds form in the oxidising environment of the ER lumen and extracellular space only',
        'Van der Waals forces are negligible in proteins — FALSE: individually weak but extremely numerous in the tightly packed protein core; collectively they contribute substantially to folding stability',
        'Tertiary structure refers to the overall shape visible to the naked eye — FALSE: tertiary structure refers specifically to the 3D arrangement of all atoms in a single polypeptide chain as determined by non-covalent interactions between R-groups'
    ]
},

proteinFolding: {
    'Anfinsen and Chaperones': [
        'Chaperones determine the final folded structure of a protein — FALSE: chaperones prevent aggregation and provide time/space for correct folding; the final structure is encoded entirely in the primary sequence (Anfinsen\'s principle)',
        'Anfinsen\'s experiment proves chaperones are unnecessary — PARTIALLY FALSE: in vitro, at dilute concentrations, ribonuclease refolds spontaneously; in the cell, chaperones are essential because the high local protein concentration inside the cell would cause aggregation before folding could complete',
        'Refolding in Anfinsen\'s experiment is a trivial result — FALSE: the correct disulfide bonding arrangement from 105 possible pairings reforms specifically because the thermodynamic minimum (native state) guides folding to the single correct conformation'
    ],
    'Denaturation': [
        'Denaturation is always irreversible — FALSE: many proteins refold spontaneously when the denaturing agent is removed (ribonuclease, many small globular proteins); denaturation is irreversible primarily when aggregation occurs before refolding can take place',
        'Cooling a denatured protein to low temperature refolds it — USUALLY FALSE: cooling does not reverse denaturation unless the protein was only marginally destabilised; proteins denatured by heat are typically irreversibly aggregated',
        'Boiling a protein destroys its amino acids — FALSE: boiling denatures the protein (disrupts 3D structure) but does not break peptide bonds or alter amino acid chemistry; the same amino acids are present and released upon acid hydrolysis'
    ],
    'Misfolding': [
        'Prion diseases are caused by a mutation in the prion protein gene — MOSTLY FALSE: sporadic and acquired prion diseases (the majority) are caused by conformational change without any mutation; only inherited prion diseases (a minority) involve PRNP mutations. The infectious agent in acquired forms is the PrPˢᶜ conformation itself',
        'Amyloid fibrils are made of a unique amyloid protein — FALSE: many different proteins can misfold into amyloid fibrils with the same cross-β structure; amyloid is a structural state, not a specific protein'
    ]
},

proteinFunction: {
    'Haemoglobin': [
        'Haemoglobin is simply four myoglobin molecules assembled together — FALSE: haemoglobin and myoglobin have similar tertiary structures (globin fold) but haemoglobin\'s quaternary structure enables cooperativity, the Bohr effect, and allosteric regulation by 2,3-BPG — none of which are properties of myoglobin monomers',
        'Myoglobin is a better oxygen transporter than haemoglobin because it has higher affinity — FALSE: myoglobin\'s high affinity means it does not release oxygen readily at tissue pO₂ values; its function is oxygen STORAGE, not transport; haemoglobin\'s sigmoidal curve is specifically adapted for delivery',
        'The T-state of haemoglobin cannot bind oxygen at all — FALSE: T-state haemoglobin has reduced affinity but can still bind oxygen; T-state simply has lower affinity (higher p50) than R-state',
        'Cooperativity in haemoglobin means all four subunits bind oxygen simultaneously — FALSE: cooperativity means the binding of O₂ to one subunit increases the affinity of the remaining subunits sequentially; they do not bind simultaneously'
    ],
    'Structure-Function Relationship': [
        'A protein with intact primary structure must have intact function — FALSE: tertiary and quaternary structures, which determine function, can be disrupted by denaturation while primary structure remains intact; a denatured enzyme has the correct sequence but no activity',
        'Post-translational modifications always activate proteins — FALSE: PTMs can activate (phosphorylation of glycogen phosphorylase), inhibit (phosphorylation of glycogen synthase), target for degradation (ubiquitination), or alter localisation (signal peptide cleavage); the effect is context-specific'
    ]
},

proteinDenaturation: {
    'Mechanism and Reversibility': [
        'pH denaturation works the same way as heat denaturation — FALSE: heat denaturation primarily increases kinetic energy, overcoming non-covalent interactions and causing unfolding; pH denaturation works by altering the ionisation state of R-groups, disrupting ionic interactions and changing hydrogen-bonding capacity — the mechanisms are distinct even if the outcome (unfolding) is similar',
        'All denaturing agents break the same bonds — FALSE: urea disrupts hydrogen bonds and exposes hydrophobic residues; beta-mercaptoethanol specifically reduces disulfide bonds (does not disrupt non-covalent interactions alone); SDS binds and denatures by coating proteins with negative charge; each agent has a specific mechanism',
        'A protein is either fully folded or fully denatured — FALSE: proteins exist as an ensemble of conformations; partial unfolding, local unfolding, and molten globule states (retaining some secondary structure but lacking fixed tertiary structure) are all physiologically relevant intermediate states'
    ]
},

lipidBasics: {
    'Classification': [
        "All lipids contain ester bonds — FALSE: sterols (cholesterol), sphingolipids (amide bond), and waxes (ester bonds but with alcohol rather than glycerol) challenge this — lipids are unified by hydrophobicity, not by bond type",
        "Lipids are the same as fats — FALSE: fats (triacylglycerols) are one lipid class; phospholipids, sterols, sphingolipids, and glycolipids are also lipids with distinct structures and functions",
        "All lipids are completely hydrophobic — FALSE: phospholipids, sphingomyelin, and glycolipids are amphipathic — they have both hydrophilic and hydrophobic regions; only triacylglycerols and waxes are essentially non-polar throughout",
        "Lipids cannot be dissolved or transported in blood — FALSE: lipoproteins (HDL, LDL, VLDL, chylomicrons) are specialised complexes that package lipids for blood transport; fatty acids are also transported bound to albumin"
    ],
    'Hydrophobic Effect': [
        "Bilayer formation requires energy input — FALSE: bilayer formation is spontaneous and driven by the increase in entropy of water molecules released from solvation of hydrophobic chains; ΔG is negative",
        "Phospholipids form micelles in biological membranes — FALSE: the two fatty acid tails give phospholipids a cylindrical shape that favours flat bilayers; cone-shaped single-chain lipids (lysophospholipids) form micelles"
    ]
},

fattyAcids: {
    'Saturation and Health': [
        "Unsaturated fats are always healthier than saturated fats — FALSE: trans unsaturated fatty acids raise LDL, lower HDL, and are more harmful cardiovascularly than naturally occurring saturated fats; the cis/trans geometry matters, not just the presence of double bonds",
        "All saturated fats increase cardiovascular risk equally — FALSE: medium-chain saturated fatty acids (e.g. lauric acid, C12:0 in coconut oil) have different metabolic handling than long-chain saturated fats (e.g. palmitate, C16:0 in red meat); the evidence varies by chain length",
        "Omega-3 fats are always anti-inflammatory and omega-6 always pro-inflammatory — OVERSIMPLIFICATION: the balance and ratio matter; arachidonic acid (omega-6) produces both pro- and anti-inflammatory eicosanoids; DHA (omega-3) produces resolvins and protectins that actively resolve inflammation"
    ],
    'Nomenclature': [
        "Delta (Δ) and omega (ω) numbering count from the same end — FALSE: Δ numbers count from the carboxyl carbon (C1); ω (omega) numbers count from the methyl carbon (the far end); 18:1Δ9 is the same double bond as 18:1ω9",
        "More double bonds always means more fluid at any temperature — MOSTLY TRUE but oversimplified: very long highly unsaturated chains can interact differently; the important variable is the number of kinks preventing tight packing, which does correlate with unsaturation",
        "Essential fatty acids are essential because they are needed in large amounts — FALSE: they are 'essential' because humans cannot synthesise them (lack the necessary desaturase enzymes) and must obtain them from diet, regardless of the quantity needed"
    ]
},

membraneStructure: {
    'Fluid Mosaic Model': [
        "Membrane lipids and proteins can move freely in all three dimensions — FALSE: lateral diffusion (within one leaflet) is rapid; flip-flop (from one leaflet to the other) is extremely slow without enzymes (flippases, floppases, scramblases) because the polar head group must cross the hydrophobic core",
        "Cholesterol always makes membranes more fluid — FALSE: cholesterol has opposite effects depending on temperature and membrane composition — it decreases fluidity at high temperatures (by constraining chain movement) and increases fluidity at low temperatures (by preventing gel formation)",
        "Membrane proteins are evenly distributed throughout the bilayer — FALSE: membrane proteins are asymmetrically distributed; many are concentrated in specific domains (lipid rafts); integral proteins cannot diffuse between inner and outer leaflets"
    ],
    'Lipid Asymmetry': [
        "Phospholipid composition is the same in both membrane leaflets — FALSE: the two leaflets are highly asymmetric; phosphatidylcholine and sphingomyelin are enriched in the outer leaflet; phosphatidylserine and phosphatidylethanolamine in the inner leaflet",
        "Phosphatidylserine on the outer leaflet is normal in healthy cells — FALSE: PS externalisation is a marker of apoptosis (and platelet activation during clotting); its appearance on the outer leaflet is the 'eat-me' signal recognised by macrophages"
    ]
},

lipidMetabolism: {
    'Beta-Oxidation': [
        "Beta-oxidation occurs in the cytoplasm — FALSE: beta-oxidation is exclusively mitochondrial for long-chain fatty acids; peroxisomal beta-oxidation handles very long-chain fatty acids (>C22) for initial shortening before mitochondrial processing",
        "Beta-oxidation and fatty acid synthesis are reverse reactions — FALSE: they use different enzymes, different cofactors (FAD/NAD⁺ vs NADPH), different acyl carriers (CoA vs ACP), occur in different compartments (mitochondria vs cytosol), and are independently regulated",
        "Unsaturated fatty acids yield the same ATP as saturated fatty acids of the same length — FALSE: each cis double bond at an even-numbered carbon eliminates one FADH₂ generation step, reducing ATP yield by approximately 1.5 ATP per double bond",
        "All fatty acids require the carnitine shuttle to enter mitochondria — FALSE: medium-chain fatty acids (C8–C12) can cross the inner mitochondrial membrane independently and are activated inside the mitochondria; only long-chain fatty acids (>C12) require CPT-I and the carnitine shuttle"
    ],
    'Lipoprotein Misconceptions': [
        "'Good cholesterol' and 'bad cholesterol' are different molecules — FALSE: both LDL and HDL transport the same cholesterol molecule; the distinction is the direction and destination of transport and the metabolic consequences of their accumulation, not the cholesterol itself",
        "Higher LDL always means more dietary fat intake — FALSE: LDL levels are more strongly influenced by saturated fat intake (which reduces LDL receptor expression) and genetic factors (LDL receptor mutations in familial hypercholesterolaemia) than by dietary cholesterol intake directly",
        "Statins eliminate cholesterol from the body — FALSE: statins inhibit hepatic cholesterol synthesis, which causes upregulation of LDL receptors that then clear LDL from the blood; body cholesterol is reduced by faster clearance, not by elimination or decomposition"
    ]
},

sterols: {
    'Cholesterol': [
        "Cholesterol is entirely harmful and should be minimised — FALSE: cholesterol is an essential structural component of all animal cell membranes, the precursor to all steroid hormones, bile acids, and vitamin D; it is dysregulation of its metabolism and transport, not its presence, that causes disease",
        "Dietary cholesterol is the primary driver of high blood LDL — FALSE: saturated and trans fat intake has a stronger effect on LDL levels than dietary cholesterol; the liver compensates for dietary cholesterol by reducing de novo synthesis (in most people)",
        "Plant-based foods contain cholesterol — FALSE: cholesterol is exclusively an animal sterol; plants contain phytosterols (beta-sitosterol, campesterol) that are structurally similar but compete with cholesterol for intestinal absorption, lowering LDL"
    ]
},



carbohydrateBasics: {
    'Composition and Formula': [
        'Carbohydrates always contain nitrogen — FALSE: the empirical formula is (CH₂O)ₙ; carbohydrates contain only carbon, hydrogen, and oxygen (nitrogen-containing derivatives like amino sugars are modifications, not the general case)',
        'All carbohydrates are sweet — FALSE: starch, cellulose, and glycogen are carbohydrates with no sweetness; sweetness is a property of small, soluble monosaccharides and some disaccharides only',
        'Carbohydrates are always simple sugars — FALSE: polysaccharides like cellulose are carbohydrates; the class spans single monomers to polymers of thousands of units',
        'The formula (CH₂O)ₙ means carbohydrates are hydrates of carbon with water molecules — INCORRECT INTERPRETATION: this is a coincidence of atomic ratios; carbohydrates are covalently bonded organic molecules, not carbon + water'
    ],
    'Reducing Sugars': [
        'All disaccharides are reducing sugars — FALSE: sucrose and trehalose are non-reducing because both anomeric carbons are involved in the glycosidic bond',
        'A reducing sugar is one that reduces itself in the Benedict\'s test — IMPRECISE: a reducing sugar reduces Cu²⁺ in the reagent by donating electrons from its free anomeric hydroxyl group; it is the copper that is reduced, not the sugar',
        'Polysaccharides always give a negative Benedict\'s test — MOSTLY TRUE but with nuance: polysaccharides have only one free anomeric end per chain and give very weak or negative results; hydrolysed polysaccharides (broken into monosaccharides) give strongly positive results'
    ]
},

monosaccharides: {
    'Stereochemistry': [
        'D and L refer to the direction the sugar rotates polarised light — FALSE: D and L refer to the configuration at the highest-numbered chiral carbon relative to D-glyceraldehyde; optical rotation direction (+ or −) is a separate property measured independently',
        'All D-sugars rotate light to the right (dextrorotatory) — FALSE: D-fructose is levorotatory (−92°) despite being a D-sugar; D/L configuration and optical rotation direction are independent properties',
        'Glucose and galactose are the same molecule — FALSE: they are epimers differing at C4; this single difference means galactose cannot be used directly in glycolysis without first being converted to glucose-1-phosphate via the Leloir pathway'
    ],
    'Ring Structure': [
        'The anomeric carbon is always C1 — NOT ALWAYS: in ketoses (e.g. fructose), the anomeric carbon is C2 (the carbonyl carbon of the ketone)',
        'α-glucose is more stable than β-glucose — FALSE: β-D-glucopyranose is MORE stable because in the chair conformation, all large substituents (including the C1-OH) are in equatorial positions; in α-glucose, the C1-OH is axial',
        'Haworth projections show the actual 3D shape of sugars — FALSE: Haworth projections are simplified 2D representations; the actual conformation is a chair, which chair conformation analysis (not Haworth) reveals'
    ]
},

disaccharidesAndPolysaccharides: {
    'Glycosidic Bonds': [
        'β(1→4) bonds are stronger than α(1→4) bonds — FALSE: both are ether-type glycosidic bonds of similar bond energy; the difference is in geometry (orientation of the bond), not bond strength',
        'Cellulose is harder to digest than starch because its bonds are stronger — INCORRECT REASONING: cellulose is indigestible because human digestive enzymes (amylases) have active sites specific for α-glycosidic bonds and cannot bind or cleave β-glycosidic bonds; it is a matter of enzyme specificity, not bond energy',
        'The number in α(1→4) means the bond involves four sugar units — FALSE: the numbers indicate which carbon atoms of the two monomers are involved: C1 of the donor and C4 of the acceptor'
    ],
    'Polysaccharide Function': [
        'Glycogen is stored primarily in muscle cells — PARTIALLY MISLEADING: while total body glycogen mass is roughly split between liver and muscle, liver glycogen is the blood glucose reserve for the whole body; muscle glycogen is reserved exclusively for local muscle use and cannot contribute to blood glucose',
        'Plants store glycogen and animals store starch — FALSE: this is the reverse; plants store starch, animals store glycogen',
        'Cellulose is nutritionally useless — OVERSIMPLIFICATION: while humans cannot digest cellulose, colonic bacteria ferment soluble dietary fibre to short-chain fatty acids (butyrate, propionate, acetate) that have significant metabolic, anti-inflammatory, and gut health effects',
        'More branching in polysaccharides means more compact storage — PARTIALLY FALSE: branching does increase compactness but the primary advantage of glycogen\'s high branching is rapid mobilisation (many non-reducing ends for simultaneous phosphorylase action), not merely compact packing'
    ]
},

carbohydrateMetabolism: {
    'Glycolysis': [
        'Glycolysis occurs in the mitochondria — FALSE: glycolysis occurs entirely in the cytoplasm (cytosol); the TCA cycle and oxidative phosphorylation occur in the mitochondria',
        'Glycolysis requires oxygen — FALSE: glycolysis is anaerobic; it proceeds without oxygen, producing pyruvate. Oxygen is required only for subsequent mitochondrial oxidation of pyruvate',
        'Glucose is broken down to CO₂ and H₂O in glycolysis — FALSE: glycolysis produces pyruvate; CO₂ and H₂O are produced in the TCA cycle and oxidative phosphorylation',
        'Glycolysis produces 38 ATP per glucose — FALSE: glycolysis produces only 2 net ATP; the 36–38 ATP figure refers to the complete aerobic oxidation of glucose including the TCA cycle and oxidative phosphorylation'
    ],
    'Glycogen Metabolism': [
        'Glycogen phosphorylase uses water to cleave glycogen — FALSE: it uses inorganic phosphate (phosphorolysis), releasing glucose-1-phosphate; this is more energetically efficient because the phosphate bond energy is preserved in glucose-1-phosphate rather than being lost as heat',
        'Insulin directly activates glycogen synthase by binding to it — FALSE: insulin activates glycogen synthase indirectly via a kinase signalling cascade that leads to DEPHOSPHORYLATION of glycogen synthase; insulin does not bind glycogen synthase directly',
        'Muscle glycogen can raise blood glucose — FALSE: muscle cells lack glucose-6-phosphatase and cannot export free glucose; muscle glycogen is exclusively for local use in muscle energy metabolism'
    ]
},

fiberAndDigestion: {
    'Dietary Fibre': [
        'Dietary fibre provides no calories — PARTIALLY FALSE: soluble dietary fibre is fermented by gut bacteria to short-chain fatty acids (SCFAs) which are absorbed and contribute approximately 2 kcal/g; insoluble fibre provides virtually no calories',
        'High-fibre diets cause nutrient malabsorption — OVERSIMPLIFICATION: while some fibres can mildly reduce absorption of specific minerals, the overall health benefits of high-fibre diets (improved glycaemic control, reduced colorectal cancer risk, improved gut microbiome diversity) far outweigh any minor absorption effects in healthy individuals',
        'Cellulose and dietary fibre are synonymous — FALSE: dietary fibre includes many indigestible polysaccharides — cellulose, hemicellulose, pectin, beta-glucans, inulin — as well as lignin (not a polysaccharide); cellulose is one component of dietary fibre'
    ],
    'Digestion': [
        'Lactose intolerance means a person has no lactase enzyme — USUALLY FALSE: most lactose-intolerant individuals have reduced (not absent) lactase expression; symptoms are dose-dependent, and small amounts of dairy are often tolerated',
        'Salivary amylase completes starch digestion — FALSE: salivary amylase begins starch hydrolysis in the mouth but is inactivated by stomach acid; pancreatic amylase in the small intestine completes the bulk of starch digestion',
        'Sucrose is directly absorbed from the intestine — FALSE: sucrose must first be hydrolysed by brush-border sucrase into glucose and fructose before absorption; intact disaccharides cannot be absorbed'
    ]
},


flowerStructure: {
            'Structural Components': [
                "The stamen IS the anther — INCORRECT: the stamen consists of BOTH the anther (pollen-producing head) AND the filament (stalk). Calling the stamen just the anther omits half the structure.",
                "The carpel is just the stigma — INCORRECT: the carpel comprises THREE parts: stigma (receptive surface), style (stalk), and ovary (containing ovules). Students commonly label only the stigma and ignore the style and ovary.",
                "Petals and sepals are the same structure — INCORRECT: sepals (calyx) are the outermost, usually green, leaf-like protective structures; petals (corolla) are typically coloured and function in pollinator attraction. In monocots, tepals combine both into one undifferentiated structure.",
                "The ovule becomes the fruit — FALSE: the ovule develops into the SEED; the OVARY WALL develops into the fruit (pericarp). Conflating ovule and ovary is one of the most common errors in this topic."
            ],
            'Pollination vs Fertilisation': [
                "Pollination and fertilisation are the same event — FALSE: pollination is pollen transfer from anther to stigma; fertilisation is gamete fusion inside the ovule. They are separated in time (minutes to days) and space (stigma surface vs inside ovule).",
                "Pollination immediately produces seeds — FALSE: pollination is only the beginning of a multi-step process. Seeds form only after: pollen germination → pollen tube growth through style → double fertilisation → embryo and endosperm development.",
                "Self-pollination means the plant fertilises itself using the same pollen grain simultaneously — OVERSIMPLIFICATION: self-pollination means pollen from the same plant reaches the stigma, but the pollen tube must still grow and fertilisation must still occur — the process is not instantaneous."
            ]
        },

        pollination: {
            'Pollinator Relationships': [
                "All flowers can be pollinated by any insect — FALSE: many plant-pollinator relationships are highly specific. Some orchids can only be pollinated by one species of bee; the vanilla orchid's Melipona bee relationship is an extreme example. Generalised entomophily exists, but so does extreme specialisation.",
                "Wind pollination is primitive and inefficient — MISLEADING: wind pollination is a highly refined strategy producing enormous volumes of specifically adapted pollen. It is not primitive — it is differently specialised. In open, exposed habitats, wind pollination can be more reliable than insect pollination.",
                "Self-incompatibility means the plant cannot reproduce — FALSE: self-incompatibility (SI) prevents SELF-fertilisation but allows cross-pollination with compatible mates. It is a mechanism to promote outbreeding, not a reproductive defect."
            ],
            'Pollen Properties': [
                "All pollen looks the same — FALSE: pollen morphology is highly species-specific. Palynology (pollen analysis) can identify plant species from pollen grain shape, size, and surface texture alone, with applications in forensic botany, archaeology, and allergy medicine.",
                "Wind-pollinated plants produce less pollen because there is less competition — COMPLETELY FALSE: wind-pollinated plants produce orders of magnitude MORE pollen than insect-pollinated plants, precisely because wind dispersal is statistically inefficient — enormous volume compensates for low targeting precision."
            ]
        },

        fertilisation: {
            'Double Fertilisation': [
                "Endosperm is diploid (2n) — INCORRECT: endosperm is TRIPLOID (3n), produced by fusion of one sperm nucleus (n) with TWO polar nuclei (n + n = 2n → zygote is 2n, but here n + n + n = 3n). This is one of the most frequently tested ploidy errors.",
                "Double fertilisation means two eggs are fertilised — FALSE: 'double' refers to TWO separate fusion events occurring simultaneously in the same ovule: one sperm + egg → zygote; one sperm + polar nuclei → endosperm. Only ONE egg exists in each ovule.",
                "The pollen tube carries the sperm to the egg by swimming — FALSE: pollen tube growth is directional cell elongation driven by vesicle fusion and cytoskeletal dynamics, guided by chemical signals. Sperm nuclei are non-motile and are delivered passively inside the tube — there is no swimming.",
                "Fertilisation in plants is the same as in animals — OVERSIMPLIFICATION: plant fertilisation involves a pollen tube (absent in most animals), occurs inside the ovule (not in a liquid medium), and in angiosperms involves DOUBLE fertilisation producing endosperm — an entirely plant-specific innovation."
            ]
        },

        seedAndFruit: {
            'Seed Components': [
                "The seed coat (testa) is the ovary wall — FALSE: the testa develops from the INTEGUMENTS of the ovule. The OVARY WALL develops into the pericarp (fruit). The testa and pericarp are physically separate layers from different origins — though they are adjacent in the mature fruit.",
                "All seeds need light to germinate — FALSE: germination requirements are species-specific. Some seeds require light (e.g. lettuce — positive photoblastic), some require dark (e.g. onion — negative photoblastic), and most are light-neutral. The requirement reflects the ecological niche in which germination naturally occurs.",
                "Dormancy means the seed is dead — FALSE: dormancy is a state of reduced metabolic activity — the embryo is alive but quiescent. Dormancy allows survival of unfavourable conditions and ensures germination is timed to favourable seasons."
            ],
            'Fruit Identification': [
                "A strawberry is a true fruit — MISLEADING: the fleshy red part of a strawberry is the enlarged receptacle — an accessory fruit. The true fruits are the small achenes (the 'seeds') on the surface. This is one of the most commonly misclassified 'fruits' in botanical terms.",
                "A tomato is a vegetable — BOTANICALLY FALSE: a tomato is a berry — a true fruit derived from a single superior ovary with a fleshy pericarp and multiple seeds. 'Vegetable' is a culinary term with no botanical definition.",
                "Seeds are inside fruits — ONLY TRUE FOR ANGIOSPERMS: in gymnosperms (conifers, cycads), seeds are 'naked' — not enclosed in an ovary wall, and therefore no true fruit forms. The distinction between angiosperm and gymnosperm is precisely this enclosure of the seed."
            ]
        },

        asexualReproduction: {
            'Structural Identity': [
                "Bulbs, corms, tubers, and rhizomes are all types of modified root — FALSE: ALL of these are modified STEMS (or in the case of bulbs, a compressed stem with leaf scales). They possess nodes and internodes (stem features). Only root tubers (sweet potato, dahlia) are modified roots. This is a very common and consequential error.",
                "A potato 'eye' is a scar from where roots were attached — FALSE: potato 'eyes' are axillary buds — the equivalent of the buds on an above-ground stem node. Each 'eye' can produce a new shoot, making the potato a viable vegetative propagation organ.",
                "Runners and rhizomes are the same structure — FALSE: runners (stolons) grow ABOVE ground along the soil surface; rhizomes grow BELOW ground horizontally through the soil. Both are horizontal stems, but their position, anatomy, and examples differ."
            ],
            'Clonal Reproduction': [
                "Asexual reproduction involves meiosis — FALSE: asexual reproduction is entirely MITOTIC. Meiosis only occurs during the production of spores (leading to gametophytes) in the sexual reproduction pathway. All vegetative propagation produces genetically identical offspring by mitosis.",
                "Tissue culture produces genetically diverse plants — FALSE: conventional tissue culture from a single explant produces genetically IDENTICAL (clonal) plants. Genetic diversity arises only from sexual reproduction (or rare somaclonal variation — genetic changes arising during tissue culture, which is an artefact, not a feature).",
                "Clonal populations are always more vigorous than sexually reproduced populations — FALSE: clonal populations may show hybrid vigour when first established from a heterozygous parent, but they accumulate somatic mutations over time, cannot adapt to new diseases, and show inbreeding depression effects at the population level over time."
            ]
        },

        alternationOfGenerations: {
            'Ploidy Confusion': [
                "The pollen grain is diploid — FALSE: the pollen grain is the male GAMETOPHYTE and is HAPLOID (n). It is produced by meiosis in the anther from diploid microspore mother cells. The pollen grain then divides by mitosis internally to produce the tube cell and generative cell.",
                "Meiosis produces gametes directly in plants — FALSE: in plants, meiosis produces SPORES (haploid), which then develop into the multicellular gametophyte by mitosis. Gametes are then produced by mitosis within the gametophyte. This contrasts with animals, where meiosis directly produces gametes.",
                "The gametophyte is the dominant, visible phase of the plant life cycle — FALSE for angiosperms: in angiosperms, the SPOROPHYTE is entirely dominant — the visible plant is entirely diploid sporophyte. The gametophyte is reduced to the pollen grain and embryo sac, which are microscopic and dependent on the sporophyte. This confusion arises from moss examples where the gametophyte is dominant."
            ]
        },



cellTypesAndTissues: {
    'Cell Type Confusion': [
        'Collenchyma and sclerenchyma are the same type of support tissue — FALSE: collenchyma has unevenly thickened PRIMARY walls with no lignin and remains living; sclerenchyma has uniformly thick SECONDARY walls with lignin and is dead at maturity',
        'Parenchyma cells only occur in leaves — FALSE: parenchyma is the most abundant plant cell type and occurs in roots, stems, leaves, fruits, and throughout vascular tissue',
        'Sclerenchyma fibres and sclereids are different tissues — FALSE: both are types of sclerenchyma; they differ in shape (fibres = long and tapered; sclereids = variously shaped, often isodiametric)',
        'All epidermal cells are identical — FALSE: the epidermis includes guard cells (which contain chloroplasts), trichomes, and root hairs — all structurally and functionally distinct from ordinary epidermal cells'
    ],
    'Tissue System Boundaries': [
        'The vascular tissue only includes xylem and phloem cells — FALSE: vascular tissue also includes fibres and parenchyma cells that provide support and lateral transport within the vascular bundle',
        'Ground tissue is unimportant — FALSE: ground tissue performs photosynthesis (chlorenchyma), storage, and is the structural bulk of the plant body; leaf mesophyll is entirely ground tissue',
        'The dermal tissue system is only the epidermis — PARTIALLY FALSE: in secondary growth, the dermal system is replaced by periderm (cork + cork cambium + phelloderm); epidermis is only the primary dermal system'
    ]
},

rootStructure: {
    'Casparian Strip Misconceptions': [
        'The Casparian strip blocks ALL water entry into the root — FALSE: the strip blocks the APOPLASTIC pathway only; water can still enter via the SYMPLASTIC pathway through the endodermal cytoplasm',
        'The Casparian strip is a physical wall that prevents entry entirely — FALSE: it is a chemical modification (suberin and lignin) of the existing cell wall; it forces a change in pathway (from apoplast to symplast), not a complete blockade',
        'The Casparian strip is present in all root cells — FALSE: it is found only in the ENDODERMIS, specifically in the radial and transverse walls of endodermal cells'
    ],
    'Root Zone Confusion': [
        'Root hairs are found throughout the root — FALSE: root hairs are concentrated in the MATURATION ZONE where cells are fully differentiated and the xylem is already functional for transport',
        'Lateral roots form from the epidermis — FALSE: lateral roots arise from the PERICYCLE (endogenous origin), which is why they must push through cortex and endodermis to emerge; this contrasts with lateral shoots (exogenous origin)',
        'The root cap is a meristematic zone — FALSE: the root cap is protective parenchyma tissue; the meristematic zone is just inside the root cap'
    ]
},

stemStructure: {
    'Vascular Arrangement': [
        'Monocot vascular bundles are arranged in a ring — FALSE: monocot bundles are SCATTERED throughout the ground tissue; a ring arrangement is the dicot pattern',
        'Dicot and monocot stems differ only cosmetically — FALSE: the difference in bundle arrangement has profound consequences for secondary growth (dicots can form wood; most monocots cannot) and mechanical properties',
        'Vascular bundles contain only xylem and phloem — FALSE: vascular bundles also contain sclerenchyma fibres (the bundle cap or sheath) which provide tensile strength to the bundle'
    ],
    'Secondary Growth': [
        'Annual rings are always exactly one ring per year — PARTIALLY FALSE: in tropical trees with no cold dormant season, multiple rings per year may form; rings are only reliably annual in temperate climates with a cold winter',
        'Wood is entirely composed of dead cells — MOSTLY TRUE but not absolute: wood (secondary xylem) contains living ray parenchyma cells that perform lateral transport and storage; vessel elements and fibres are dead',
        'Secondary growth makes stems wider but not stronger — FALSE: secondary xylem (wood) provides both the water-conducting capacity and the mechanical strength that supports tall trees; the two functions are inseparable in secondary xylem'
    ]
},

leafStructure: {
    'Mesophyll Layers': [
        'Palisade and spongy mesophyll perform entirely different functions — OVERSIMPLIFICATION: both perform photosynthesis; palisade is optimised for light capture (dense chloroplasts, vertical orientation); spongy is optimised for gas diffusion (air spaces) but also photosynthesises',
        'The upper epidermis always faces the sun — FALSE: in some plants (e.g. vertically oriented leaves of grasses, or inverted leaves), both surfaces may receive equal light; the structural distinction between adaxial and abaxial matters more than orientation',
        'Intercellular air spaces in spongy mesophyll are wasted space — FALSE: these spaces are functionally essential; they allow CO₂ to diffuse from stomata to all mesophyll cells, and O₂ and water vapour to diffuse from mesophyll to stomata'
    ],
    'Stomatal Function': [
        'Stomata are permanently open holes in the leaf — FALSE: stomata are dynamically regulated pores whose aperture is actively controlled by guard cell turgor, responding to light, CO₂ concentration, ABA, and humidity',
        'Guard cells open stomata by expanding uniformly — FALSE: guard cells open stomata because of ASYMMETRIC WALL THICKENING — the inner wall (facing the pore) is thicker and inextensible; swelling causes the outer wall to bow outward, pulling the inner wall open',
        'Closing stomata prevents photosynthesis entirely — FALSE: closing stomata reduces CO₂ supply and slows photosynthesis but does not stop it immediately; dissolved CO₂ in mesophyll cells continues to be used until depleted'
    ]
},

transportSystems: {
    'Xylem Transport': [
        'Xylem cells are living and actively pump water upward — FALSE: xylem vessel elements and tracheids are DEAD at functional maturity; water movement is driven by the PHYSICS of transpiration (cohesion-tension), not by cellular pumping',
        'Water moves upward in xylem by osmosis — FALSE: osmosis drives water from soil into the root, but water movement through the xylem is driven by TENSION (negative pressure) created by transpiration, transmitted through cohesive water columns',
        'Xylem transport is bidirectional — FALSE: xylem carries water and minerals strictly from root to shoot (unidirectional); PHLOEM is bidirectional (from source to sink, which can be above or below the source)'
    ],
    'Phloem Transport': [
        'Phloem transport is entirely passive because solutes move from high to low concentration — FALSE: phloem LOADING at the source requires active transport of sucrose into sieve tubes against a concentration gradient, driven by ATP-powered H⁺-ATPase and sucrose-H⁺ cotransporters; the bulk flow that follows loading is passive',
        'Sieve tube elements are dead like vessel elements — FALSE: sieve tube elements are LIVING at maturity, though they lack a nucleus and most organelles; they are maintained metabolically by companion cells via plasmodesmata',
        'Phloem always flows from leaf to root — FALSE: phloem flows from SOURCE to SINK; any organ producing excess assimilates is a source, and any organ consuming or storing them is a sink; flow direction depends on plant developmental stage (e.g. from leaf to developing fruit, from leaf to root, from storage organ to growing shoot)'
    ]
},


tropismBasics: {
    'Nature of Tropisms': [
        "Tropisms are plant movements — FALSE: tropisms are irreversible growth responses; the organ does not move back when the stimulus is removed, because new cell wall material has been deposited on the elongated side",
        "Any response to a stimulus is a tropism — FALSE: nastic movements (e.g. stomatal opening, Mimosa leaf folding) are responses to non-directional stimuli and are reversible; tropisms are specifically directional and growth-based",
        "Tropisms are the result of the plant 'choosing' a direction — FALSE: tropisms are deterministic hormone-mediated growth responses controlled by auxin redistribution, not behaviour in any volitional sense",
        "All plant organs show the same tropistic response to the same stimulus — FALSE: roots and shoots respond in opposite directions to both light and gravity, due to different cellular sensitivities to auxin"
    ],
    'Auxin General': [
        "More auxin always means more growth — FALSE: auxin promotes growth only within an optimal concentration range; above the optimal, it inhibits growth (especially in roots, which are far more sensitive)",
        "Auxin is the only hormone involved in plant tropisms — OVERSIMPLIFICATION: ethylene mediates thigmomorphogenesis; ABA is involved in hydrotropism; cytokinin interacts with auxin in apical dominance",
        "Auxin diffuses freely in all directions through plant tissue — FALSE: auxin transport is polar (directional) via AUX1 influx and PIN efflux carriers; lateral redistribution in tropisms is an active, regulated process"
    ]
},

phototropism: {
    'Light and Receptor': [
        "All wavelengths of light are equally effective in causing phototropism — FALSE: blue light (390–500 nm) is most effective; red light has minimal effect; phototropism is driven by phototropin receptors, not phytochrome",
        "Phytochrome is responsible for phototropism — FALSE: phytochrome detects red/far-red light and mediates germination and shade avoidance; phototropins (PHOT1, PHOT2) detect blue light and mediate phototropism",
        "The whole shoot detects light and bends — FALSE: the TIP of the shoot (apical meristem region) is the primary site of light detection and auxin redistribution; the elongation zone below responds to the auxin signal produced at the tip"
    ],
    'Auxin Movement': [
        "Light pushes auxin to the shaded side directly — MISLEADING: light activates phototropin receptors which trigger PIN carrier relocalisation, actively redirecting auxin via protein-mediated transport — light does not physically push auxin",
        "Auxin diffuses to the shaded side — PARTIALLY FALSE: some passive diffusion occurs, but directional lateral transport via PIN3 carriers is the primary mechanism; transport inhibitors block phototropism",
        "Removing the coleoptile tip stops bending because the tip bends — FALSE: the tip is the SOURCE of auxin and the site of lateral redistribution; the elongation zone (below the tip) is where bending actually occurs due to differential cell elongation"
    ]
},

gravitropism: {
    'Mechanism': [
        "Roots grow down because they are heavier than shoots — FALSE: roots actively grow downward via gravitropism; they are not passively pulled; evidence: horizontal roots actively curve downward against a supporting surface",
        "Shoots grow upward because they are lighter and float — FALSE: negative gravitropism in shoots is an active auxin-mediated growth response; tipless shoots in darkness do not grow upward consistently",
        "Statoliths are the same as chloroplasts — FALSE: statoliths are amyloplasts — starch-filled plastids denser than cytoplasm; chloroplasts contain chlorophyll and are involved in photosynthesis, not gravity sensing"
    ],
    'Root vs Shoot Response': [
        "Roots and shoots bend in the same direction in response to gravity — FALSE: roots show positive gravitropism (downward); shoots show negative gravitropism (upward); this is because the same auxin concentration promotes shoot elongation and inhibits root elongation",
        "Higher auxin concentration always causes more bending — FALSE: in roots, higher auxin concentration above the optimal actually inhibits elongation; the inhibited side grows less, not more, causing bending away from the high-auxin side"
    ]
},

auxinMechanism: {
    'Concentration Effects': [
        "Km and optimal concentration are the same concept — FALSE: Km is an enzyme kinetics term; optimal auxin concentration is the concentration producing maximum growth response; these are separate concepts from different biological systems (though analogous in shape)",
        "Roots and shoots have the same optimal auxin concentration — FALSE: shoot optimal is approximately 10⁻⁸ mol/L; root optimal is approximately 10⁻¹⁰ mol/L (100× lower); this difference is the molecular basis of opposite gravitropic bending",
        "Auxin inhibition is permanent — FALSE: auxin inhibition is concentration-dependent and reversible; reducing auxin concentration to below the inhibitory threshold restores normal growth"
    ],
    'Transport': [
        "Auxin moves by simple diffusion through plant tissue — FALSE: polar auxin transport (PAT) requires active transport via AUX1 (influx) and PIN (efflux) carrier proteins; PAT is energy-dependent and directional",
        "All PIN proteins are identical — FALSE: different PIN proteins (PIN1–PIN8) have different cellular locations and transport directions; PIN3 is specifically involved in lateral redistribution during tropisms"
    ]
},

tropismTypes: {
    'Classification Errors': [
        "Stomatal opening in response to light is a tropism — FALSE: it is a nastic movement (non-directional stimulus response); the stimulus (light intensity) is not directional, and the response (opening) is not a growth change",
        "Thigmotropism and thigmomorphogenesis are the same — FALSE: thigmotropism is directional growth toward a contact point (e.g. tendril coiling); thigmomorphogenesis is the general effect of repeated mechanical stimulation on plant form (shorter, stockier stems)",
        "Hydrotropism always follows the direction of gravity — FALSE: under drought conditions, roots can override gravitropism and grow toward a moisture gradient at an angle or even upward, demonstrating that hydrotropism is an independent and sometimes dominant tropism signal"
    ]
},



hormoneFundamentals: {
    'General Hormone Properties': [
        'Plant hormones act like animal hormones — produced in one gland and transported in blood — FALSE: most plant hormones are produced in multiple tissue types, use non-circulatory transport (polar carriers, phloem, xylem, gas diffusion), and many act locally at or near their site of synthesis',
        'Each plant response is controlled by a single hormone — FALSE: virtually all plant developmental responses involve the ratio and interaction of multiple hormone classes, not a single master signal',
        'More hormone always means a stronger response — FALSE: hormone responses are often concentration-dependent and biphasic; supraoptimal concentrations of auxin or ethylene are inhibitory',
        'Plant hormones are only relevant to plants — FALSE: auxin was originally discovered through animal bioassays; the GA biosynthesis pathway shares enzymes with human steroid metabolism; ABA is produced by some fungi and even found in animal neural tissue'
    ],
    'Transport and Production': [
        'All plant hormones are transported in the phloem — FALSE: auxin uses dedicated polar transport carriers (PIN proteins); ethylene is a gas that diffuses; cytokinins travel primarily in xylem; only some hormones primarily use phloem',
        'Plant hormones are produced only in leaves — FALSE: auxin is produced in shoot apex and young leaves; cytokinins primarily in root meristems; ABA in leaves AND roots; gibberellins in young leaves and developing seeds'
    ]
},

auxinAndGrowth: {
    'Auxin Effects': [
        'Auxin always promotes cell elongation — FALSE: this is only true within an optimal concentration range. At supraoptimal concentrations, auxin inhibits elongation — particularly in roots, which are inhibited at concentrations that promote shoot elongation. The dose-response curve is biphasic',
        'The shaded side of a coleoptile produces more auxin during phototropism — FALSE (Cholodny-Went): total auxin does not increase on the shaded side; auxin is redistributed LATERALLY from the illuminated side to the shaded side. The total quantity of auxin remains unchanged — only its distribution changes',
        'Roots and shoots respond identically to the same auxin concentration — FALSE: roots are approximately 10,000 times more sensitive to auxin than shoots. The concentration optimal for shoot elongation (≈10⁻⁶ M) inhibits root elongation; the concentration optimal for roots (≈10⁻¹⁰ M) has no effect on shoots',
        'Apical dominance means the apical bud grows faster than lateral buds — IMPRECISE: apical dominance means lateral buds are inhibited (do not grow at all, not merely grow more slowly) by auxin from the apical meristem, mediated via strigolactone induction'
    ],
    'Polar Auxin Transport': [
        'Auxin moves by simple diffusion from cell to cell — FALSE: polar auxin transport (PAT) is an active, carrier-mediated, directional process requiring energy. It depends on asymmetrically localised PIN efflux carriers and AUX1 influx carriers. PAT is blocked by specific inhibitors (NPA) that do not affect diffusion',
        'PIN proteins are symmetrically distributed on all faces of the cell — FALSE: the directional specificity of PAT comes from PIN proteins being localised exclusively on the BASAL plasma membrane face of each cell, ensuring auxin exits toward the root'
    ]
},

gibberellinsAndCytokinins: {
    'Gibberellin Effects': [
        'Gibberellins promote cell division — FALSE: gibberellins promote CELL ELONGATION. Cell division is promoted by CYTOKININS. This is the most common confusion between these two hormone classes — each promotes a different component of growth',
        'All gibberellin-treated plants become taller — FALSE: GA-insensitive plants (carrying stable DELLA mutations, like Green Revolution Rht wheat) do not elongate in response to GA regardless of concentration. The response requires a functional GID1 receptor and degradable DELLA proteins',
        'DELLA proteins are growth promoters — FALSE: DELLA proteins are transcriptional REPRESSORS of growth genes. GA promotes growth by triggering DELLA DEGRADATION — removing the repression. Students often invert the logic of this de-repression mechanism',
        'Gibberellins are only involved in stem elongation — FALSE: GA also regulates seed germination (α-amylase induction in aleurone cells), bolting and flowering in long-day plants, and fruit development'
    ],
    'Cytokinin Effects': [
        'Cytokinins are produced in shoots and move downward — FALSE: the primary source of cytokinins is root meristems; they travel upward via xylem to promote shoot growth. This root-to-shoot signalling is functionally opposite to auxin transport direction',
        'Cytokinins and auxin always antagonise each other — OVERSIMPLIFICATION: while they are antagonistic in apical dominance (auxin suppresses lateral buds; cytokinin promotes them), they are synergistic in vascular differentiation and act together to regulate the cell cycle'
    ]
},

abscisicAcidAndEthylene: {
    'ABA Misconceptions': [
        'ABA causes abscission (leaf/fruit drop) directly — HISTORICALLY MISLEADING: ABA was named for its presumed role in abscission, but the primary driver of abscission is ETHYLENE. ABA promotes conditions that lead to ethylene production and modulates the process, but it is not the direct trigger of cell wall degradation in the abscission zone',
        'ABA is purely a stress hormone with no developmental roles — FALSE: ABA is essential for seed dormancy (a developmental process independent of stress), maturation of seeds, and regulation of germination timing. Calling ABA only a "stress hormone" misses half its biology',
        'High ABA always closes stomata regardless of light — PARTIALLY FALSE: ABA is a powerful stomatal closing signal, but guard cells integrate multiple signals. Under strong light and high CO₂ availability, blue light-mediated H⁺-ATPase activation can keep stomata open even in the presence of ABA. The ABA effect is modulated by light signal integration',
        'ABA inhibits PP2C phosphatases by directly phosphorylating them — FALSE: ABA binds the PYR/PYL/RCAR receptor protein, and the ABA-PYR complex then physically blocks the PP2C active site through protein-protein interaction — not through phosphorylation. Students often confuse the kinase/phosphatase logic of the cascade'
    ],
    'Ethylene Misconceptions': [
        'Ethylene only affects fruit ripening — FALSE: ethylene also mediates the triple response in dark-grown seedlings, wound-induced responses (activating defensin and protease inhibitor genes), flooding/waterlogging responses (inducing aerenchyma formation in roots), abscission, and flower senescence. Ripening is merely the most commercially prominent effect',
        'All fruits ripen in response to ethylene — FALSE: only climacteric fruits show autocatalytic ethylene production and ripen fully off the plant. Non-climacteric fruits (grape, citrus, strawberry) do not show this response and cannot be triggered to ripen post-harvest by ethylene treatment',
        'Ethylene is produced only by ripe fruits — FALSE: ethylene is produced in response to wounding, pathogen infection, flooding, ozone exposure, and during senescence of all plant organs including flowers and leaves. Young seedlings produce ethylene constitutively',
        'Lower temperature eliminates ethylene effects in storage — OVERSIMPLIFICATION: refrigeration slows ethylene biosynthesis (by reducing ACC synthase and ACC oxidase activity) but does not eliminate it. Climacteric fruits continue to produce ethylene at refrigeration temperatures (though more slowly); effective post-harvest management requires both temperature control AND ethylene scrubbing or receptor blocking with 1-MCP'
    ]
},

hormoneInteractions: {
    'Interaction Logic': [
        'Plant hormones act independently and their effects simply add together — FALSE: hormones interact in a complex network where the ratio between hormones often matters more than absolute concentrations. Auxin:cytokinin ratio controls organogenesis; GA:ABA ratio controls germination; ethylene:cytokinin balance controls senescence. These interactions can be synergistic (multiplicative) or antagonistic (suppressive)',
        'Synergistic means the hormones do the same thing — IMPRECISE: synergistic means the combined effect is greater than the sum of individual effects. Two hormones with different molecular mechanisms can be synergistic on the same downstream response',
        'Hormones interact only at the receptor level — FALSE: hormones can interact at the biosynthesis level (auxin induces ethylene synthesis via ACC synthase), at the signalling level (ABA and GA regulate the same DELLA pathway antagonistically), and at the transcriptional level (cytokinin ARR response regulators and auxin ARF response regulators regulate overlapping target gene sets)'
    ]
},



xylemAndWaterMovement: {
    'Direction and Mechanism': [
        'Xylem transport requires ATP from the plant — FALSE: xylem transport is entirely passive; the energy comes from solar-driven evaporation at the leaf surface, not from plant ATP',
        'Xylem cells are alive and pump water actively — FALSE: xylem vessel elements are dead at functional maturity; their death and the dissolution of their end walls creates the continuous hollow tube needed for bulk flow',
        'Root pressure is the main mechanism driving water to tree canopies — FALSE: root pressure can only push water a few metres; cohesion-tension (transpiration pull) is the primary mechanism for long-distance xylem transport',
        'Water moves from low water potential to high water potential — FALSE: water always moves from HIGH (less negative) to LOW (more negative) water potential — the same direction as any diffusing substance moving down its chemical potential gradient'
    ],
    'Cohesion-Tension': [
        'Cavitation destroys the xylem permanently — PARTIALLY TRUE: embolised vessels are non-functional, but some species can refill embolised vessels; new xylem is continuously produced by the cambium',
        'Adhesion to xylem walls is the main force holding water up — FALSE: adhesion (water to wall) contributes but the primary force is cohesion (water to water via H-bonds) that transmits tension throughout the column',
        'Water is pushed up from the roots — FALSE: in cohesion-tension, water is pulled upward from the top by the tension created at the evaporating leaf surface; pushing (root pressure) is a minor secondary mechanism'
    ]
},

phloemAndTranslocation: {
    'Mechanism and Direction': [
        'Phloem transport is passive throughout — FALSE: active loading of sucrose at source cells requires ATP; only the bulk flow down the pressure gradient is passive',
        'Phloem always transports downward from leaves to roots — FALSE: phloem transports from source to sink; young leaves at the shoot tip are sinks, so phloem can transport upward; direction depends on source-sink relationship, not anatomy',
        'Phloem and xylem transport in the same direction — FALSE: xylem transports upward (root to shoot); phloem transports from source to sink which can be upward or downward; in a mature plant, both directions of phloem flow can occur simultaneously in adjacent sieve tubes'
    ],
    'Cell Types': [
        'Phloem sieve tube elements are dead cells like xylem — FALSE: sieve tube elements are living at functional maturity; they retain a plasma membrane and cytoplasm but lose their nucleus, tonoplast, and ribosomes — they are metabolically dependent on companion cells',
        'Companion cells carry out photosynthesis to power phloem loading — FALSE: companion cells carry out cellular respiration (using mitochondria) and gene expression (using their nucleus) to provide ATP and proteins for the adjacent sieve tube element; they do not photosynthesize'
    ]
},

osmosisAndWaterPotential: {
    'Water Potential Direction': [
        'Water moves from low solute potential to high solute potential — MISLEADING: water potential, not solute potential alone, determines direction; a cell with more negative Ψs can still have higher Ψ than another cell if its Ψp is sufficiently large',
        'A cell with a higher solute concentration will always gain water — FALSE: depends on the total water potential (Ψs + Ψp); a highly turgid cell with negative Ψs but large positive Ψp may have a higher Ψ than a less concentrated but flaccid cell',
        'Osmosis requires a concentration gradient of water — IMPRECISE: osmosis is driven by a water potential gradient; water potential includes both osmotic (solute) and pressure components; a cell can gain water even if its solute concentration is equal to the surroundings if its pressure potential is lower'
    ],
    'Cell States': [
        'A plasmolysed cell is dead — FALSE: plasmolysis is reversible if the cell is returned to a solution with higher water potential; the cell membrane is intact and the cell is alive but has lost turgor',
        'Turgor pressure is the same as water potential — FALSE: turgor pressure (Ψp) is only one component of water potential; Ψ = Ψs + Ψp; a fully turgid cell in pure water has Ψ = 0 MPa despite high Ψp because Ψs is equally negative',
        'Cells become turgid by producing more solutes — OVERSIMPLIFICATION: turgidity results from water entering by osmosis in response to existing solutes; however, some plants do actively accumulate solutes (osmotic adjustment) to draw in more water under drought — this is an active process'
    ]
},

transpiration: {
    'Stomatal Mechanism': [
        'Guard cells expand uniformly to open stomata — FALSE: the inner wall of guard cells is thickened; when turgor increases, uneven wall thickening causes the cell to bow outward in a specific geometry, pulling the stomatal pore open; uniform expansion would not create an aperture',
        'Stomata open in darkness to allow CO₂ entry — FALSE: most plants close stomata in darkness (no photosynthesis requires CO₂); CAM plants are the exception — they open stomata at night to fix CO₂ and close them during the day',
        'Stomata open and close by active transport of water — FALSE: water movement is passive (osmosis); the active transport step is K⁺ (and Cl⁻) movement, which changes Ψs of the guard cell, and water follows osmotically'
    ],
    'Transpiration Function': [
        'Transpiration is purely wasteful water loss — FALSE: transpiration drives the transpiration stream that delivers mineral ions from soil to all shoot cells; it also cools leaves via latent heat of vaporisation; controlled transpiration is essential for plant function',
        'Blocking all transpiration would increase plant growth — FALSE: reduced transpiration reduces mineral delivery, reduces leaf cooling (causing heat stress), and would reduce the turgor-driven cell expansion that drives leaf growth; moderate transpiration is necessary',
        'Transpiration rate equals water uptake rate — APPROXIMATELY TRUE but imprecise: a small fraction of water taken up is used in photosynthesis and retained in growing cells; potometers measure uptake, which slightly overestimates transpiration'
    ]
},

rootUptake: {
    'Pathways': [
        'The apoplast pathway can reach the xylem without crossing any membrane — FALSE: the Casparian strip of suberin blocks the apoplast at the endodermis, forcing water and dissolved ions to cross the endodermal plasma membrane into the symplast before reaching the xylem',
        'The symplast pathway is slower than the apoplast because it crosses membranes — PARTIALLY TRUE: membrane crossing adds resistance, but once inside the symplast, movement through plasmodesmata is relatively fast; the rate-limiting step is initial membrane entry, not movement within the symplast',
        'Ion uptake is automatic — it occurs wherever there is a concentration gradient — FALSE: many mineral ions (NO₃⁻, PO₄³⁻, K⁺) are at lower concentration in soil than in root cells; they must be taken up AGAINST their concentration gradient by active transport proteins (ATP-dependent), particularly at the endodermal membrane'
    ],
    'Casparian Strip': [
        'The Casparian strip blocks all substances from entering the xylem — FALSE: the Casparian strip blocks only the apoplast pathway; it does not prevent anything from entering the xylem — it forces everything to pass through the symplast where membrane transporters exercise selective control over which ions enter',
        'The Casparian strip is in every root cell — FALSE: it is specifically in the radial and transverse walls of endodermal cells only — the single cell layer that forms the boundary between cortex and vascular tissue'
    ]
},



plantCells: {
            'Cell Viability': [
                'Xylem cells are alive and actively pump water upward — FALSE: tracheids and vessel elements are dead at maturity; they function as hollow tubes and cannot actively pump anything',
                'Dead cells cannot have a function — FALSE: dead xylem cells are functionally essential precisely because they are dead and hollow, offering no cytoplasmic resistance to water flow',
                'All plant cells have chloroplasts — FALSE: only cells exposed to light in green tissues have chloroplasts; root cells, most vascular cells, and storage cells typically lack them',
                'Parenchyma cells are unimportant because they are simple — FALSE: parenchyma performs photosynthesis, stores nutrients, and is the source of totipotency for regeneration and wound healing'
            ],
            'Cell Wall Confusion': [
                'All plant cells have the same type of cell wall — FALSE: primary walls are thin and flexible; secondary walls are thick and often lignified; suberin-impregnated walls occur in endodermis and cork',
                'Collenchyma and sclerenchyma can be used interchangeably for support — FALSE: collenchyma is alive and flexible, suitable for growing regions; sclerenchyma is dead and rigid, suitable for mature structural tissue — they are not interchangeable',
                'Lignin is the same as cellulose — FALSE: cellulose is the structural polysaccharide of all primary walls; lignin is a phenolic polymer deposited in secondary walls of xylem and sclerenchyma, providing additional rigidity and waterproofing'
            ]
        },

        plantTissues: {
            'Meristem Misconceptions': [
                'Meristems are only found at the tip of the plant — FALSE: apical meristems are at shoot and root tips, but lateral meristems (vascular cambium and cork cambium) run along the sides of stems and roots in woody plants',
                'Once a cell differentiates from a meristem it can never divide again — MOSTLY FALSE: differentiated parenchyma cells retain totipotency and can re-enter the cell cycle under appropriate conditions — the basis for tissue culture',
                'Secondary growth occurs in all plants — FALSE: monocots lack a vascular cambium and do not produce wood; secondary growth is characteristic of woody dicots and gymnosperms'
            ],
            'Tissue System Confusion': [
                'The vascular tissue is only in the stem — FALSE: vascular tissue (xylem and phloem) runs continuously from root tip to leaf tip, branching into every organ',
                'Ground tissue is unspecialised — IMPRECISE: ground tissue includes structurally and functionally diverse cell types (parenchyma for storage and photosynthesis, collenchyma for support, sclerenchyma for structural rigidity) — it is not homogeneous'
            ]
        },

        rootsAndStems: {
            'Root Anatomy': [
                'Root hairs are separate cells — FALSE: root hairs are extensions (outgrowths) of single epidermal cells, not independent cells; they enormously increase the surface area of the existing epidermis',
                'The Casparian strip prevents all water and ions from entering the vascular cylinder — FALSE: it blocks only the apoplastic route; water and ions can still enter the symplast through the endodermal cell membranes, which is the point — controlled entry, not total exclusion',
                'Water only moves through the symplast in roots — FALSE: water moves predominantly through the apoplast in the cortex (faster, less resistance) and is redirected into the symplast only at the endodermis by the Casparian strip'
            ],
            'Secondary Growth': [
                'Annual rings in wood are produced by the apical meristem — FALSE: annual rings are produced by the vascular cambium (a lateral meristem); the apical meristem drives lengthening, not girth increase',
                'Heartwood (dark central wood) still conducts water — FALSE: heartwood is dead, resin-filled, non-conducting secondary xylem; only the outermost sapwood (living secondary xylem) conducts water'
            ]
        },

        leavesAndPhotosynthesis: {
            'Stomatal Function': [
                'Stomata open to allow transpiration — FALSE: stomata open for CO₂ uptake; transpiration (water loss) is a physical consequence of open pores, not the purpose of opening',
                'Guard cells open by photosynthesising and producing oxygen — FALSE: guard cells open by a K⁺/H⁺ pump mechanism triggered by blue light — the proton pump creates an electrochemical gradient driving K⁺ into the guard cell, followed by water osmotically. Photosynthesis by guard cells is a minor factor.',
                'More stomata always means more photosynthesis — OVERSIMPLIFICATION: stomatal density affects maximum conductance, but actual photosynthesis rate is also limited by chloroplast density, light, CO₂ concentration, and enzyme activity; more stomata increases the potential rate, not necessarily the actual rate'
            ],
            'Leaf Anatomy': [
                'The palisade mesophyll is the only photosynthetic layer — FALSE: spongy mesophyll cells also contain chloroplasts and perform photosynthesis, though at a lower rate per unit volume than palisade cells',
                'The cuticle prevents all gas exchange — FALSE: the cuticle is nearly impermeable to water and CO₂, which is why stomata are necessary; but it does not prevent all transpiration (cuticular transpiration is small but non-zero)'
            ]
        },

        transportSystems: {
            'Xylem Transport': [
                'Xylem actively pumps water upward using energy — FALSE: xylem transport is passive; the driving force is the tension created by transpiration at the leaf, not active pumping by living cells (the cells are dead)',
                'Root pressure alone can move water to the top of tall trees — FALSE: root pressure (a few bar at most) can push water only 10–20 m; cohesion-tension is required for taller trees',
                'Water molecules in xylem are chemically bonded to each other — FALSE: water molecules are held together by hydrogen bonds, which are non-covalent intermolecular attractions, not covalent chemical bonds. This distinction matters because H-bonds can break and reform, allowing the column to bend without permanently breaking.'
            ],
            'Phloem Transport': [
                'Phloem transport is unidirectional like xylem — FALSE: phloem can move sap in both directions simultaneously (in different sieve tubes) because different sinks may be above or below a given source',
                'Sieve-tube elements are dead like xylem cells — FALSE: sieve-tube elements are alive (they retain cytoplasm and plasma membrane) but lack a nucleus at maturity — their metabolic functions are supported by adjacent companion cells',
                'The pressure-flow model requires energy only at the sink — FALSE: energy is required primarily at the source for active loading of sucrose into the phloem via H⁺/sucrose cotransporters; unloading at many sinks is passive'
            ]
        },

        reproductiveStructures: {
            'Fruit and Seed Confusion': [
                'Fruit always means the edible fleshy part of a plant — FALSE in botany: a fruit is the mature ovary wall (pericarp) enclosing seeds; this includes pea pods, tomatoes, cucumbers, and sunflower achenes — the everyday definition of "fruit" is much narrower than the botanical one',
                'Seeds and fruit are the same thing — FALSE: the seed is the mature ovule (embryo + endosperm + seed coat); the fruit is the mature ovary wall surrounding the seeds. A tomato is a fruit; the seeds inside are seeds.'
            ]
        },



leafAnatomy: {
    'Layer Functions': [
        'The spongy mesophyll is the primary site of photosynthesis — FALSE: the palisade mesophyll contains the highest density of chloroplasts and performs the majority of photosynthesis; the spongy mesophyll primarily facilitates gas distribution',
        'The epidermis is transparent because it has no function — FALSE: the epidermis secretes the cuticle, provides mechanical protection, and houses stomata; its transparency is an adaptation to allow light transmission to the palisade layer below',
        'Guard cells do not contain chloroplasts — FALSE: guard cells are the only epidermal cells that DO contain chloroplasts; this is essential for ATP production to drive the H⁺-ATPase proton pump during stomatal opening',
        'The vascular bundle is simply a structural support — INCOMPLETE: it is the transport highway for both water/minerals (xylem) and sugars (phloem); its structural role is secondary to its transport function'
    ],
    'Structural Organisation': [
        'The palisade and spongy mesophyll have the same structure and function — FALSE: palisade cells are elongated, tightly packed, and densely loaded with chloroplasts; spongy cells are irregular with large air spaces; their functions (photosynthesis vs gas diffusion) reflect this structural difference',
        'Veins and nerves are the same thing in a leaf — FALSE: leaf veins are vascular bundles containing xylem and phloem; they have no electrical signalling function; the confusion arises from superficial similarity in visual branching pattern',
        'The upper and lower epidermis are identical — FALSE: the upper epidermis typically has a thicker cuticle, no stomata in most dicots, and is smooth; the lower epidermis has a thinner cuticle and carries the majority of stomata'
    ]
},

photosynthesis: {
    'Process Location': [
        'Photosynthesis occurs in all green parts of the leaf equally — IMPRECISE: photosynthesis occurs primarily in the palisade mesophyll (highest chloroplast density); the spongy mesophyll contributes less; the epidermis (except guard cells) does not photosynthesise at all',
        'Photosynthesis and respiration never occur simultaneously — FALSE: in all light conditions, respiration continues in every living cell; photosynthesis and respiration run concurrently; net gas exchange is the balance between the two',
        'Leaves only photosynthesise and do not respire — FALSE: leaves respire 24 hours a day; in bright light photosynthesis dominates and net CO₂ movement is inward; in darkness only respiration occurs and net CO₂ movement is outward'
    ],
    'CO2 and O2 Roles': [
        'O₂ is used in photosynthesis and CO₂ is produced — INVERTED: photosynthesis uses CO₂ and produces O₂; it is respiration that uses O₂ and produces CO₂; students frequently invert these when stressed',
        'Leaves release O₂ at all times — FALSE: O₂ is only released as a net export when photosynthesis rate exceeds respiration rate (above the light compensation point); at the compensation point there is no net O₂ exchange'
    ]
},

gasExchange: {
    'Stomatal Mechanics': [
        'Stomata are permanently open holes in the leaf — FALSE: stomata are dynamic openings whose aperture is actively regulated by guard cell turgor; they open and close within minutes in response to light, CO₂, ABA, and temperature',
        'Stomata are open at night to allow gas exchange during respiration — MISLEADING: stomata are typically closed at night in most plants (except CAM plants) because the net effect would be water loss without any photosynthetic benefit',
        'Stomata close under bright light to prevent water loss — FALSE: this is the opposite of the actual response; stomata open in response to blue light to admit CO₂ for photosynthesis; closure is triggered by darkness, high CO₂, ABA (drought), or high temperature'
    ],
    'Diffusion Direction': [
        'CO₂ always moves into the leaf regardless of conditions — FALSE: at night (or below the light compensation point), respiration exceeds photosynthesis, mesophyll CO₂ concentration may be higher than atmospheric, and CO₂ moves outward',
        'Gas exchange only occurs through stomata — MOSTLY FALSE: a small amount of gas exchange (typically 5–10%) occurs through the cuticle (cuticular transpiration) — significant in plants without a thick cuticle; stomata account for the majority but not totality of gas exchange'
    ]
},

transpiration: {
    'Mechanism': [
        'Water is actively pumped up the xylem by the plant — FALSE: xylem vessels are dead cells with no metabolic activity; water moves passively up the xylem driven by the cohesion-tension mechanism — the evaporative demand at the leaf surface pulls the water column upward',
        'Transpiration is the same process as photosynthesis — FALSE: transpiration is the physical evaporation and diffusion of water vapour from leaf surfaces; photosynthesis is a biochemical process fixing CO₂ into glucose; they share only the stoma as a common gateway',
        'The potometer directly measures transpiration — TECHNICALLY INCORRECT: the potometer measures water uptake by the shoot; transpiration and uptake are approximately equal under steady conditions but diverge when the plant is storing or withdrawing water from tissues'
    ],
    'Consequences': [
        'Transpiration is purely wasteful water loss that plants should minimise — OVERSIMPLIFIED: transpiration has essential benefits including driving water and mineral transport from roots to leaves (the transpiration stream), evaporative cooling of leaf surfaces, and maintaining turgor pressure in mesophyll cells',
        'Closing stomata completely would be the optimal response to drought — FALSE: complete stomatal closure halts CO₂ entry and stops photosynthesis entirely; the plant must balance water loss reduction against carbon gain; partial closure is the adaptive response in most species'
    ]
},

leafAdaptations: {
    'Xerophyte Misunderstandings': [
        'A thick cuticle is sufficient to classify a plant as a xerophyte — FALSE: many non-xerophytic plants have moderately thick cuticles; xerophytes are identified by a suite of co-occurring adaptations that together significantly reduce transpiration',
        'Xerophytes do not photosynthesise — FALSE: xerophytes are fully photosynthetic; their adaptations restrict water loss while preserving sufficient CO₂ access; CAM plants even fix carbon at night to decouple CO₂ uptake from daytime water loss',
        'All desert plants are succulents — FALSE: xerophytes include non-succulent types (e.g. Marram grass, pines, Oleander) that use structural rather than water-storage mechanisms; succulents are one xerophyte strategy, not the only one'
    ],
    'Hydrophyte Misunderstandings': [
        'Aquatic plants do not need stomata — FALSE: emergent hydrophytes and floating-leaf hydrophytes still require gas exchange with the atmosphere; water lily leaves have functional stomata on the upper surface; submerged aquatics exchange gas directly through the surface with dissolved gases in water',
        'Hydrophytes have no vascular tissue because they are surrounded by water — FALSE: hydrophytes retain xylem for structural support and mineral transport; their xylem is reduced in area but not absent'
    ]
},

rootBasics: {
    'Root Functions': [
        'Roots only absorb water — FALSE: roots also absorb mineral ions, synthesise hormones (cytokinins, ABA), store carbohydrates, anchor the plant, and maintain mutualistic symbioses',
        'Roots are passive structures that just sit in the soil — FALSE: roots actively grow toward water (hydrotropism), away from gravity (gravitropism), synthesise and release chemical signals, and remodel their architecture in response to nutrient gradients',
        'All roots grow downward — FALSE: lateral roots grow horizontally; aerial roots grow in various directions; pneumatophores grow upward; climbing plant roots grow toward surfaces'
    ],
    'Root System Types': [
        'Taproot systems are always better for anchoring plants — FALSE: fibrous systems provide superior anchorage against uprooting in many soils by binding a larger volume of soil; taproots provide better anchorage in loose, deep soils where lateral grip is not available',
        'Monocots can have taproots — MOSTLY FALSE: monocots typically have fibrous adventitious root systems and do not maintain a primary root; apparent "taproots" in monocots are storage roots, not true taproots'
    ],
    'Root Hairs': [
        'Root hairs are a separate specialised cell type — FALSE: root hairs are outgrowths of ordinary epidermal cells; the hair is a cytoplasmic extension of the same cell, not a differentiated cell type',
        'Root hairs persist throughout the plant\'s life — FALSE: root hairs are short-lived structures (days to weeks) confined to the maturation zone; as the root ages, the root hair zone moves forward as the tip grows, and old hairs are lost'
    ]
},

rootAbsorption: {
    'Casparian Strip': [
        'The Casparian strip stops all water from entering the vascular tissue — FALSE: it blocks only the APOPLASTIC pathway; water and ions continue to enter through the symplastic and transmembrane pathways; the strip redirects, not prevents, movement',
        'The Casparian strip is in the cortex — FALSE: it is specifically in the ENDODERMIS, the single cell layer immediately outside the pericycle; its position is critical because the endodermis is the last barrier before the vascular cylinder',
        'The Casparian strip is a physical wall across the whole root — FALSE: it is a band of suberin within the walls of individual endodermal cells; the band encircles each cell but the inner and outer tangential walls (faces toward cortex and vascular cylinder) remain unsuberised'
    ],
    'Water Pathways': [
        'The apoplast and symplast pathways are alternatives that compete — OVERSIMPLIFICATION: they operate sequentially; apoplastic flow dominates in the cortex, but all flow must switch to symplastic at the endodermis; they are stages in the same journey, not competing routes',
        'Osmosis alone explains ion uptake into root cells — FALSE: ions are too large and charged to cross membranes by osmosis; they require specific ion channels or active transport proteins; osmosis explains water movement only',
        'Active transport is required for all mineral ion uptake — FALSE: some ions (e.g. K⁺ at high soil concentrations) can enter via passive channels down their electrochemical gradient; active transport is essential when ion concentration outside is lower than inside'
    ],
    'Root Hair Cells': [
        'Root hairs increase the rate of osmosis by providing more membrane — INCOMPLETE: the primary benefit of root hairs is to increase the SURFACE AREA available for both osmotic water uptake and active ion transport, not to change the rate of osmosis per unit membrane area',
        'Root hairs are found along the entire root length — FALSE: root hairs develop only in the maturation zone, a specific region behind the elongation zone; the root tip and elongation zone have no root hairs'
    ]
},

rootAdaptations: {
    'Specialised Roots': [
        'Aerial roots are always absorptive — FALSE: prop roots of maize are primarily structural (anchorage); ivy aerial roots are primarily adhesive; only orchid velamen roots and mangrove aerial roots primarily absorb atmospheric water',
        'Storage roots are the same as taproots — FALSE: true taproots are the primary root axis of a seedling; storage roots can be adventitious (sweet potato), secondary tap-roots (carrot), or other forms; all taproots are primary roots but not all taproots are primarily storage organs',
        'Pneumatophores photosynthesize like stems — FALSE: pneumatophores are not photosynthetic organs; they lack chlorophyll and are specialised for gas exchange (O₂ entry, CO₂ exit) to supply submerged root tissue with oxygen'
    ],
    'Waterlogged Soil': [
        'Roots in waterlogged soil die because they are surrounded by water — FALSE: the problem is not water but the absence of O₂; waterlogged soil is rapidly depleted of O₂ by microbial respiration, causing root anoxia; roots surrounded by oxygenated water (e.g. hydroponic systems) grow normally'
    ]
},

rootGrowth: {
    'Root Tip Zones': [
        'The root tip grows by cell division throughout its length — FALSE: cell division is confined to the meristematic zone; elongation (responsible for most root penetration into soil) occurs in the elongation zone above the meristem by vacuolar expansion, not further division',
        'The root cap is part of the meristematic zone — FALSE: the root cap is a separate structure that protects the meristem; it is produced by the meristem but has its own distinct cells (columella cells, lateral root cap cells) with specific functions (gravity sensing, mucilage secretion)',
        'Removing the root cap kills the root — FALSE: the root cap is continuously replaced by the meristem; experimental removal of the root cap abolishes gravitropism temporarily but the cap regenerates and gravity responses resume within days'
    ],
    'Gravitropism': [
        'Roots grow downward because they are pulled down by weight — FALSE: root gravitropism is an active biological response involving amyloplast sedimentation in statocytes and asymmetric auxin distribution; it is not passive mechanical response to gravity'
    ]
},

rootSymbiosis: {
    'Mycorrhizae': [
        'Mycorrhizal fungi are parasites of plant roots — FALSE: mycorrhizal associations are mutualistic — the fungus obtains carbon (up to 20% of plant photosynthate) while the plant receives phosphorus, water, and other nutrients; both partners show measurably increased fitness',
        'All plants form mycorrhizal associations — FALSE: some plant families including Brassicaceae (cabbage family), Proteaceae, and Chenopodiaceae typically do not form mycorrhizae; they have alternative strategies (cluster roots, exudate-mediated phosphorus solubilisation) for nutrient acquisition',
        'Ectomycorrhizal fungi penetrate root cortex cells — FALSE: ectomycorrhizal fungi form a mantle around the root and grow BETWEEN cortical cells (Hartig net) but do not penetrate the plasma membrane; only arbuscular mycorrhizal fungi form intracellular structures (arbuscules and vesicles)'
    ],
    'Nitrogen Fixation': [
        'All plants can fix nitrogen if given the right bacteria — FALSE: nitrogen fixation is limited to specific plant-bacteria associations (mainly legumes and Rhizobium, plus a few non-legume associations like alder-Frankia); most plants including all major cereals cannot host nitrogen-fixing bacteria',
        'Nitrogen-fixing bacteria live freely in the soil and directly benefit crop plants — PARTIALLY MISLEADING: free-living nitrogen-fixing bacteria (Azotobacter, Clostridium) do exist in soil, but they fix nitrogen primarily for their own metabolism; only bacteria in root nodule symbioses reliably transfer fixed nitrogen to the plant',
        'Leghemoglobin is the same as blood haemoglobin — FALSE: leghemoglobin is encoded by the plant genome (not the bacterial genome) and has a much higher O₂ affinity than haemoglobin; it serves an analogous function (O₂ buffering) but is an independently evolved, structurally distinct protein'
    ]
},

const EndSection7 = "close"