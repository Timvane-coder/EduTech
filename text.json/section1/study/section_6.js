
initializeMisconceptionDatabase() {

 



this.commonMisconceptions = {


cellStructure: {
    'Prokaryote vs Eukaryote': [
        'Prokaryotes have no DNA — FALSE: prokaryotes have DNA in the nucleoid region; they lack a membrane-bound nucleus, not DNA',
        'Prokaryotes are primitive eukaryotes — FALSE: they are a distinct domain with their own sophisticated molecular machinery; not evolutionary precursors',
        'All bacteria are harmful — FALSE: most bacteria are harmless or beneficial; only a small minority are pathogens',
        'Prokaryotes cannot perform membrane transport — FALSE: they have extensive membrane transport systems; what they lack is a nucleus, not transport proteins'
    ],
    'Organelle Function': [
        'Ribosomes are only in eukaryotes — FALSE: ribosomes are present in ALL cells (prokaryotic 70S and eukaryotic 80S)',
        'The Golgi apparatus is only for secretion — INCOMPLETE: Golgi also delivers proteins to lysosomes, modifies lipids, and maintains the plasma membrane',
        'Mitochondria only produce ATP — INCOMPLETE: mitochondria also regulate apoptosis, Ca²⁺ homeostasis, and ROS production',
        'The smooth ER produces enzymes — FALSE: smooth ER synthesises lipids and detoxifies drugs; it is the rough ER (with ribosomes) that produces membrane and secreted proteins',
        'The nucleus contains all cell DNA — FALSE in eukaryotes: mitochondria (and chloroplasts in plants) also contain circular DNA'
    ]
},

membraneTransport: {
    'Transport Classification': [
        'Facilitated diffusion requires ATP because it uses a protein — FALSE: proteins provide a channel or conformational change, but the driving force is still the concentration gradient; no ATP is consumed',
        'Osmosis is a form of active transport because water moves against a concentration gradient — FALSE: water moves DOWN its own concentration gradient (from lower solute to higher solute = more water molecules to fewer); osmosis is passive',
        'Active transport always moves things out of the cell — FALSE: active transport can move substances into or out of cells; Na⁺/K⁺-ATPase moves Na⁺ out AND K⁺ in, both against their gradients',
        'Aquaporins use ATP to move water — FALSE: aquaporins are water channels that allow osmosis to occur rapidly; water still moves passively down its osmotic gradient; no ATP is used'
    ],
    'Osmosis Errors': [
        'In a hypotonic solution, solute enters the cell — FALSE: it is WATER that moves in osmosis, not solute; in a hypotonic solution, water enters the cell because the cell interior has higher solute concentration',
        'A cell in an isotonic solution will not change size because no transport occurs — IMPRECISE: water molecules still cross the membrane in both directions; there is no NET movement, but individual molecule crossings continue; the cell maintains constant size because rates are equal in both directions',
        'Plant cells in hypotonic solution will burst like animal cells — FALSE: the plant cell wall provides inward pressure (wall pressure) opposing turgor — the cell becomes turgid but the wall prevents lysis'
    ]
},

cellDivision: {
    'Mitosis vs Meiosis': [
        'Mitosis and meiosis produce the same type of cells — FALSE: mitosis produces diploid genetically identical cells; meiosis produces haploid genetically diverse gametes',
        'Mitosis only occurs in reproductive cells — FALSE: mitosis occurs in all dividing somatic cells for growth and repair; meiosis is restricted to germ cells',
        'After mitosis, daughter cells are different from each other — FALSE: mitotic daughter cells are genetically identical to each other and to the parent cell'
    ],
    'Cell Cycle Regulation': [
        'Cancer cells divide faster than normal cells — OVERSIMPLIFICATION: some cancers divide more slowly than normal tissue; the key feature is uncontrolled proliferation (loss of checkpoint regulation) and failure to undergo apoptosis, not necessarily faster division',
        'Tumour suppressors cause cancer when mutated — IMPRECISE: loss of tumour suppressor function removes the brakes on cell division; tumour suppressors are protective in wild-type form; it is their LOSS that contributes to cancer',
        'A cell with DNA damage will always undergo apoptosis — FALSE: the cell first attempts arrest and repair; apoptosis is the outcome only if repair fails and damage is irreparable; the decision depends on p53 target gene activation profile'
    ]
},

organelleFunction: {
    'Membrane Systems': [
        'The endoplasmic reticulum is separate from all other membranes — FALSE: the ER membrane is continuous with the outer nuclear membrane; they form a connected membrane system',
        'Vesicles randomly fuse with any membrane — FALSE: vesicle targeting is precise — SNARE proteins on vesicles (v-SNAREs) and target membranes (t-SNAREs) ensure specificity of fusion',
        'Lysosomes are only for destroying damaged organelles — INCOMPLETE: lysosomes also degrade extracellular material taken in by endocytosis and are involved in immune cell function and bone resorption by osteoclasts'
    ]
},

cellSignalling: {
    'Receptor and Signal Types': [
        'All hormones act through surface receptors — FALSE: steroid hormones (cortisol, oestrogen, testosterone) are lipid-soluble and cross the membrane to bind intracellular nuclear receptors; only water-soluble hormones require surface receptors',
        'Second messengers are the final signal in a pathway — FALSE: second messengers (cAMP, IP₃, Ca²⁺) activate kinases and other proteins that then phosphorylate or activate downstream effectors; the second messenger is an intermediate, not the final output',
        'Signal transduction stops when the ligand dissociates — PARTIALLY FALSE: the signal is terminated when the ligand dissociates AND second messengers are degraded AND phosphorylation events are reversed by phosphatases; ligand dissociation alone may not immediately end signalling due to signal persistence downstream'
    ]
},

dnaStructure: {
    'DNA Basics': [
        'DNA is only in the nucleus — FALSE in eukaryotes: mitochondria and chloroplasts also contain circular DNA; in prokaryotes, DNA is in the nucleoid with no nuclear membrane',
        'The coding strand is the template for transcription — FALSE: the template strand (also called antisense strand) is read by RNA polymerase; the coding strand (sense strand) has the same sequence as the mRNA (with T instead of U)',
        'Complementary strands are identical — FALSE: complementary strands are antiparallel and have complementary (not identical) base sequences; A pairs with T and G pairs with C'
    ],
    'RNA Differences': [
        'RNA is just a copy of DNA — OVERSIMPLIFICATION: mRNA is a working copy of one strand of one gene; the genome is not transcribed entirely; furthermore, rRNA and tRNA are functional RNA molecules, not just informational copies',
        'RNA is always less stable than DNA only because it is single-stranded — INCOMPLETE: single-strandedness contributes, but the primary chemical difference is the 2-OH group on ribose — this allows RNA to be hydrolysed by nucleophilic attack under alkaline conditions; DNA, lacking this OH, is intrinsically more stable'
    ]
},

dnaReplication: {
    'Replication Errors': [
        'DNA polymerase can start a new chain from scratch — FALSE: DNA polymerase requires a pre-existing 3-OH (provided by an RNA primer from primase) to begin synthesis; it cannot initiate de novo',
        'Both strands are synthesised continuously — FALSE: only the leading strand is synthesised continuously; the lagging strand is synthesised discontinuously as Okazaki fragments due to the antiparallel template and 5n3 directionality constraint of DNA polymerase',
        'Replication is error-free after proofreading — FALSE: proofreading reduces errors to approximately 1 in 10⁷; post-replication mismatch repair further reduces this to ~1 in 10⁹; errors still occur and are the molecular basis of mutation'
    ]
},

transcription: {
    'Transcription Errors': [
        'The promoter is the first part of the mRNA — FALSE: the promoter is a DNA regulatory sequence where RNA polymerase binds; it is upstream of the transcription start site and is NOT transcribed into the mRNA',
        'RNA polymerase synthesises RNA in the 3n5 direction — FALSE: RNA is synthesised 5→3 (same as DNA polymerase); the template is read 3→5, but the product grows 5→3',
        'All RNA in a cell is mRNA — FALSE: most cellular RNA (by mass) is rRNA (~80%) and tRNA (~15%); mRNA accounts for only ~5% of total RNA; this reflects the high demand for ribosomal components'
    ],
    'Processing Errors': [
        'Introns are junk DNA with no function — FALSE: while introns are removed from mRNA, they play roles in alternative splicing regulation, contain regulatory sequences, and some encode functional non-coding RNAs',
        'Splicing occurs in the cytoplasm — FALSE: pre-mRNA splicing occurs in the NUCLEUS by the spliceosome before the mature mRNA is exported; cytoplasmic RNA has already been spliced'
    ]
},

translation: {
    'Ribosome and Codon Errors': [
        'The ribosome reads the coding strand of DNA directly — FALSE: ribosomes translate mRNA (produced by transcription); they never directly read DNA',
        'The anticodon on tRNA is the same sequence as the codon on mRNA — FALSE: the anticodon is COMPLEMENTARY and ANTIPARALLEL to the codon — if the codon is 5-AUG-3, the anticodon is 3-UAC-5',
        'One tRNA carries all amino acids — FALSE: each amino acid is carried by one or more specific tRNAs (charged by a specific aminoacyl-tRNA synthetase); there are at least 20 different tRNA species, one for each amino acid'
    ],
    'Genetic Code Errors': [
        'Each amino acid has exactly one codon — FALSE: the code is degenerate (redundant) — most amino acids have 2–6 codons; only Met and Trp have one codon each',
        'The genetic code is different in every organism — FALSE: the code is nearly universal; minor variations exist in mitochondria and some protists, but the standard code is used by virtually all cellular life — evidence of common ancestry'
    ]
},

geneRegulation: {
    'Regulation Errors': [
        'All cells in an organism express all genes — FALSE: gene expression is cell-type specific; liver cells express albumin genes that muscle cells do not; regulation is the basis of cell differentiation',
        'Gene regulation only occurs at transcription — FALSE: regulation occurs at all levels: chromatin (epigenetic), transcription initiation, mRNA processing, mRNA stability, translation efficiency, and post-translational modification',
        'Epigenetic changes are permanent — FALSE: many epigenetic marks (histone modifications) are reversible within minutes to hours; DNA methylation is more stable but can also be reversed by TET enzymes; epigenetic reprogramming occurs during development'
    ],
    'lac Operon Errors': [
        'The lac repressor destroys lactose — FALSE: the lac repressor is a transcriptional regulator that binds the operator and blocks transcription; it does not degrade lactose; β-galactosidase (encoded by lacZ) cleaves lactose',
        'Lactose directly inactivates the repressor — FALSE: lactose is converted to allolactose by the small amount of β-galactosidase present at basal expression; it is allolactose, not lactose, that binds and inactivates the repressor'
    ]
},



skinStructure: {
    'Epidermal Layers': [
        "The hypodermis is a layer of skin — INCORRECT: the hypodermis (subcutaneous layer) is beneath the skin; the skin proper consists of only the epidermis and dermis",
        "The stratum lucidum is present in all skin — FALSE: it is present only in thick skin (palms and soles); thin skin has only four epidermal strata",
        "The stratum basale is the outermost layer — INCORRECT: it is the innermost (deepest) epidermal layer, resting on the basement membrane; the stratum corneum is the outermost",
        "All epidermal cells undergo mitosis — FALSE: mitosis is restricted to the stratum basale; cells above this layer are post-mitotic and progressively differentiating",
        "The epidermis contains blood vessels — FALSE: the epidermis is entirely avascular; it receives nutrients by diffusion from dermal capillaries through the basement membrane"
    ],
    'Keratinisation': [
        "Keratinisation means cells simply become harder — OVERSIMPLIFICATION: keratinisation is a precise molecular programme involving keratin intermediate filament assembly, cornified envelope formation, lamellar granule secretion, and nuclear breakdown",
        "Dead cells in the stratum corneum serve no function — FALSE: corneocytes are structurally crucial; they form the 'bricks' of the water barrier and physically resist pathogen penetration and abrasion",
        "The stratum corneum is replaced only when damaged — FALSE: normal desquamation replaces the entire stratum corneum continuously every 25–45 days even without injury"
    ]
},

skinFunctions: {
    'Melanin Biology': [
        "Darker skin has more melanocytes than lighter skin — FALSE: all human skin types have approximately the same number of melanocytes per unit area; skin colour is determined by melanin type, quantity, packaging in melanosomes, and distribution pattern",
        "Tanning occurs because new melanocytes are produced — FALSE: tanning occurs because existing melanocytes increase melanin synthesis and transfer to keratinocytes; melanocyte number does not significantly increase",
        "Melanin completely prevents UV damage — FALSE: melanin reduces UV penetration but does not eliminate it; individuals with darkly pigmented skin still develop UV-induced DNA damage and skin cancers, though at lower rates",
        "Albinism results from having no melanocytes — PARTIALLY FALSE: most types of albinism involve normal melanocyte numbers but defective melanin synthesis (e.g. tyrosinase enzyme deficiency); melanocytes are present but non-functional"
    ],
    'Vitamin D Synthesis': [
        "Any sunlight exposure produces vitamin D — PARTIALLY FALSE: only UV-B radiation (290–315 nm) drives the conversion; window glass blocks UV-B, so indoor sunlight is ineffective for vitamin D synthesis",
        "Oral vitamin D supplements replace all functions of skin UV synthesis — FUNCTIONALLY TRUE for vitamin D itself, but misses the point that UV-B also has immune modulatory effects independent of vitamin D; supplements do not fully replicate all effects of UV-B exposure",
        "The skin produces the active form of vitamin D directly — FALSE: skin produces vitamin D3 (cholecalciferol); this requires sequential hydroxylation in the liver (→ calcidiol) and kidney (→ calcitriol, the active form) before biological activity"
    ]
},

thermoregulation: {
    'Heat Loss Mechanisms': [
        "Shivering is a function of the integumentary system — FALSE: shivering is skeletal muscle contraction controlled by the hypothalamus; the integumentary system contributes to heat conservation through vasoconstriction and (minimally in humans) arrector pili — not shivering",
        "Sweating alone is sufficient to prevent hyperthermia in any environment — FALSE: evaporative cooling requires a water vapour pressure gradient; at 100% relative humidity, evaporation cannot occur and sweating provides no cooling regardless of rate",
        "Vasoconstriction reduces body temperature — FALSE: cutaneous vasoconstriction conserves heat (reduces heat loss from the skin surface); vasodilation is the mechanism that increases heat loss",
        "Arrector pili contraction is an important thermoregulatory mechanism in humans — FALSE: piloerection (goosebumps) provides negligible insulation in hairless humans; it is a vestigial response that was effective in ancestors with dense body hair"
    ],
    'Thermoregulation Control': [
        "The skin is the primary integrating centre for thermoregulation — FALSE: the hypothalamus (specifically the preoptic area) is the integration centre; the skin contains peripheral thermoreceptors that feed information to the hypothalamus, but all efferent responses originate centrally",
        "Core body temperature is fixed at exactly 37°C — OVERSIMPLIFICATION: core temperature varies diurnally (~0.5°C), rises during exercise, and varies slightly between individuals; 37°C is the population average set point, not an invariant value"
    ]
},

woundHealing: {
    'Phase Sequence and Timing': [
        "Wound healing phases occur in strict sequence with clear boundaries — OVERSIMPLIFICATION: phases overlap; inflammation begins while haemostasis is completing; proliferation begins while inflammation is still active",
        "A healed wound is as strong as undamaged skin — FALSE: fully remodelled scar tissue achieves a maximum of approximately 80% of original tensile strength",
        "Granulation tissue is the same as a granuloma — FALSE: granulation tissue is the normal proliferative wound healing tissue (fibroblasts + new vessels + type III collagen); a granuloma is a macrophage aggregate formed in response to foreign material or certain pathogens — completely different processes"
    ],
    'Scar and Remodelling': [
        "Scars eventually disappear completely with time — FALSE: scar tissue does not revert to normal skin architecture; collagen reorganisation reduces its visibility but the dermis remains structurally different from unwounded tissue indefinitely",
        "Keloid and hypertrophic scars are the same condition — FALSE: hypertrophic scars are confined within the original wound boundary and may regress spontaneously; keloids extend beyond the wound boundary, invade surrounding skin, and do not regress without treatment",
        "Moist wound healing increases infection risk — FALSE: this is the opposite of the evidence; moist wound healing (via appropriate dressings) accelerates re-epithelialisation and granulation tissue formation without increasing infection rates compared to dry dressings"
    ]
},

skinDisorders: {
    'Skin Cancer': [
        "Melanoma is the most common skin cancer — FALSE: basal cell carcinoma is by far the most common (~80% of skin cancers); melanoma is the least common of the three major types but carries the highest mortality due to metastatic potential",
        "Melanoma only occurs in dark, pre-existing moles — FALSE: melanoma can arise de novo (from normal skin, not a pre-existing naevus) in approximately 30% of cases; any pigmented lesion fulfilling ABCDE criteria warrants investigation",
        "Sunscreen completely prevents skin cancer — FALSE: sunscreens reduce but do not eliminate UV exposure; they require correct application (sufficient quantity, reapplication after swimming/sweating) to achieve rated SPF; behavioural sun avoidance is also required"
    ],
    'Burns': [
        "Deeper burns are always more painful — FALSE: full-thickness burns are paradoxically painless at the wound centre because sensory nerve endings are destroyed; surrounding partial-thickness areas may be intensely painful",
        "Blisters should be burst to promote healing — FALSE: intact blisters provide a sterile, moist environment that protects the wound bed and promotes re-epithelialisation; bursting them increases infection risk and slows healing"
    ]
},


excretionVsEgestion: {
    'Definitional Confusion': [
        "Excretion and egestion are the same process — FALSE: excretion removes metabolic waste products produced inside cells; egestion removes undigested food that never entered body cells",
        "Faeces are a product of excretion — MOSTLY FALSE: faeces consist primarily of undigested food, dead gut bacteria, and mucus; the only excretory component is bile pigments (bilirubin) produced from haemoglobin breakdown",
        "Defaecation is an excretory process — FALSE: it is egestion; the gut is technically outside the body (a tube running through it), so matter in the gut has never been metabolically processed by body cells",
        "CO₂ is not a waste product — FALSE: CO₂ is the primary metabolic waste product of aerobic respiration; it is excreted by the lungs, not the kidneys"
    ],
    'Organ Assignments': [
        "The kidney is the only excretory organ — FALSE: the lungs excrete CO₂ and water vapour; the liver excretes bile pigments; the skin excretes small amounts of urea and salts in sweat",
        "Sweating is a major excretory process for urea — MISLEADING: sweat contains trace urea but is primarily a thermoregulatory mechanism; urea excretion is almost entirely renal"
    ]
},

kidneyFunction: {
    'Urea Production': [
        "Urea is produced by the kidneys — FALSE: urea is synthesised in the LIVER via the urea cycle from toxic ammonia produced by amino acid deamination; the kidney only excretes it",
        "The kidney breaks down proteins to produce urea — FALSE: protein catabolism occurs in liver and peripheral tissues; the kidney receives urea in plasma and excretes it",
        "If the kidney is removed, urea production stops — FALSE: urea continues to be produced in the liver; without a kidney to excrete it, urea accumulates in the blood (uraemia), which is toxic"
    ],
    'Filtration Misconceptions': [
        "The kidney selectively filters blood to let only waste through — FALSE: ultrafiltration is NON-SELECTIVE based on size; anything below ~70 kDa passes through regardless of whether it is waste or valuable (glucose, amino acids also filter)",
        "Proteins appear in the filtrate but are broken down — FALSE: proteins do NOT normally enter the filtrate; the basement membrane and podocyte slits retain all plasma proteins above ~70 kDa",
        "The kidney reabsorbs only waste and excretes useful molecules — FALSE: this is precisely inverted; the kidney reabsorbs useful molecules (glucose, amino acids, water) and allows waste (urea, creatinine, drugs) to pass into urine"
    ],
    'GFR Misunderstanding': [
        "The 180 L filtered per day is the amount of urine produced — FALSE: 180 L is the volume of filtrate produced; 99% (~178.5 L) is reabsorbed; only ~1.5 L becomes urine",
        "A lower GFR always means better kidney function — FALSE: GFR should be within the normal range (~90–125 mL/min); a very low GFR indicates reduced filtration capacity (kidney disease); an extremely high GFR can indicate hyperfiltration injury"
    ]
},

osmoregulation: {
    'ADH Direction': [
        "ADH causes the kidneys to produce more water — FALSE: the kidneys do not produce water; ADH causes the collecting duct to reabsorb water from the filtrate back into the bloodstream",
        "High ADH causes large volumes of dilute urine — FALSE: this is exactly inverted; HIGH ADH → increased water reabsorption → SMALL volume of CONCENTRATED urine; LOW ADH → dilute, large-volume urine",
        "ADH is released when plasma osmolarity is LOW — FALSE: LOW osmolarity (excess water) suppresses ADH; HIGH osmolarity (dehydration) stimulates ADH release from the posterior pituitary"
    ],
    'Loop of Henle': [
        "The loop of Henle filters waste out of the filtrate — FALSE: no filtration occurs in the loop; the loop of Henle creates an osmotic gradient in the medulla by separating solute and water movement in opposing limbs",
        "The descending and ascending limbs of the loop do the same thing — FALSE: descending limb is permeable to water (water leaves by osmosis); ascending limb is impermeable to water but actively pumps out Na⁺/K⁺/Cl⁻ — these are opposite properties",
        "Water leaves the ascending limb into the medulla — FALSE: the ascending limb is impermeable to water — this is the defining feature that allows solute to leave without water, creating the osmotic gradient"
    ],
    'Concentrated Urine Mechanism': [
        "The kidney adds salt to concentrate urine — FALSE: the kidney produces concentrated urine by reabsorbing WATER, not by adding solute; the filtrate becomes concentrated because water is removed by osmosis in the collecting duct",
        "Concentrated urine means more waste is produced — FALSE: concentrated urine means the same amount of waste is dissolved in less water; it reflects effective water conservation, not increased waste production"
    ]
},

hormoneControl: {
    'RAAS Confusion': [
        "Renin is produced in the lungs — FALSE: renin is produced by juxtaglomerular (JG) cells in the afferent arteriole of the kidney; ACE (angiotensin-converting enzyme) is found in the lungs",
        "Aldosterone acts on the glomerulus — FALSE: aldosterone acts on the distal convoluted tubule and collecting duct, not the glomerulus; it increases Na⁺/K⁺-ATPase expression, promoting Na⁺ reabsorption",
        "ACE inhibitors prevent aldosterone from acting on the kidney — FALSE: ACE inhibitors block conversion of angiotensin I to angiotensin II; they reduce aldosterone production indirectly by reducing angiotensin II (the stimulus for aldosterone release), but they do not directly block aldosterone receptors"
    ],
    'ADH Mechanism': [
        "ADH directly opens water channels that are always present in the collecting duct — FALSE: aquaporin-2 channels must be trafficked from intracellular vesicles to the apical membrane in response to ADH; they are not constitutively present in the apical membrane",
        "ADH is released from the hypothalamus — PARTIALLY FALSE: ADH is synthesised in the hypothalamus but is stored in and released from the POSTERIOR PITUITARY (neurohypophysis)",
        "Diabetes insipidus means there is no insulin — FALSE: diabetes insipidus is a disease of ADH (either ADH deficiency or collecting duct unresponsiveness); it has no relationship to insulin or blood glucose"
    ]
},

nephronProcess: {
    'Reabsorption Misconceptions': [
        "Selective reabsorption occurs throughout the entire nephron equally — FALSE: different segments specialise in different molecules; PCT handles glucose, amino acids, most Na⁺ and water; DCT handles fine-tuning of Na⁺ and K⁺ under hormonal control; collecting duct handles water under ADH control",
        "Glucose reabsorption in the PCT is by simple diffusion — FALSE: glucose is reabsorbed by secondary active transport (co-transport with Na⁺ via SGLT1/SGLT2 on the apical membrane), which requires the Na⁺ gradient maintained by basolateral Na⁺/K⁺-ATPase",
        "All of the filtered glucose is reabsorbed regardless of plasma glucose concentration — FALSE: true at normal glucose concentrations; when plasma glucose exceeds the renal threshold (~10 mM), the transport maximum (Tm) is exceeded and glucose spills into urine"
    ],
    'Secretion vs Filtration': [
        "All waste removal in the nephron occurs by filtration — FALSE: tubular secretion in the PCT and DCT actively transports additional waste (H⁺, K⁺, drugs, creatinine) from peritubular capillaries into the tubule — this is distinct from filtration",
        "Creatinine is reabsorbed in the tubule — FALSE: creatinine is freely filtered and is not significantly reabsorbed; a small amount is secreted — this makes creatinine an excellent GFR marker because its renal handling is simple and predictable"
    ]
},




digestionBasics: {
    'Organ Roles': [
        'The stomach is the primary site of nutrient absorption — FALSE: the stomach primarily breaks down food mechanically and chemically; absorption occurs mainly in the small intestine',
        'The large intestine digests the food the small intestine could not — FALSE: the large intestine performs virtually no chemical digestion; its primary role is water/electrolyte reabsorption and microbiome fermentation of fibre',
        'The oesophagus secretes digestive enzymes as food passes through — FALSE: the oesophagus is a purely transport organ with no digestive secretory function',
        'Peristalsis occurs only in the oesophagus — FALSE: peristalsis is the primary propulsive mechanism throughout the entire alimentary canal'
    ],
    'Mechanical vs Chemical Digestion': [
        'Chewing food digests it — IMPRECISE: chewing performs mechanical digestion (breaking food into smaller pieces to increase surface area) but does not break covalent bonds; chemical digestion begins with salivary amylase',
        'Mechanical and chemical digestion are interchangeable terms — FALSE: mechanical digestion is physical disruption of food structure; chemical digestion is enzymatic hydrolysis of covalent bonds in macromolecules',
        'Digestion is complete by the time food leaves the stomach — FALSE: the majority of enzymatic digestion occurs in the small intestine, not the stomach'
    ]
},

mechanicalAndChemicalDigestion: {
    'Bile and Fat Digestion': [
        'Bile digests fats — FALSE: bile EMULSIFIES fats (physical dispersion into smaller droplets) but does not break any chemical bonds; enzymatic digestion of fat is performed by pancreatic lipase',
        'Bile is an enzyme — FALSE: bile is a mixture of bile salts, bilirubin, phospholipids, and cholesterol; it contains no enzymatic proteins',
        'Emulsification and digestion are synonymous — FALSE: emulsification is purely mechanical disruption of fat droplets; digestion requires enzymatic cleavage of ester bonds'
    ],
    'Gastric Acid': [
        'Gastric acid digests proteins — IMPRECISE: HCl denatures proteins (disrupts tertiary structure) and activates pepsinogen to pepsin, but the chemical digestion of proteins is performed by pepsin and subsequent proteases',
        'Gastric acid is produced by chief cells — FALSE: HCl is produced by parietal cells; chief cells produce pepsinogen',
        'Salivary amylase continues to work in the stomach — FALSE: salivary amylase is denatured and inactivated by gastric acid (pH 1.5–2); starch digestion effectively halts in the stomach and resumes in the duodenum with pancreatic amylase'
    ]
},

absorptionAndTransport: {
    'Fat Absorption Route': [
        'Dietary fats enter the portal vein like glucose and amino acids — FALSE: fats are packaged as chylomicrons which are too large for blood capillaries; they enter lacteals and travel via the lymphatic system before joining the bloodstream at the thoracic duct',
        'Bile salts are absorbed with fat and never recycled — FALSE: bile salts are reabsorbed specifically in the ileum and recycled to the liver via enterohepatic circulation; each bile salt molecule completes approximately 20 recycling cycles',
        'Fatty acids cannot cross biological membranes — FALSE: short- and medium-chain fatty acids and those in micelles readily cross the brush border by passive diffusion because they are lipophilic'
    ],
    'Transporter Confusion': [
        'SGLT1 transports both glucose and fructose — FALSE: fructose crosses the apical membrane via GLUT5, not SGLT1; SGLT1 is specific for glucose and galactose',
        'Glucose absorption requires no energy — FALSE: SGLT1 is a secondary active transporter driven by the Na⁺ gradient maintained by the Na⁺/K⁺-ATPase, which consumes ATP',
        'All nutrients are absorbed in the duodenum — FALSE: the duodenum is primarily a digestive organ; absorption is maximal in the jejunum; bile salts and vitamin B₁₂ are absorbed specifically in the ileum'
    ],
    'Surface Area': [
        'Villi are the smallest unit of small intestinal surface area amplification — FALSE: microvilli (on the apical surface of each enterocyte forming the brush border) are a further level of amplification beyond villi',
        'The large intestine has villi for efficient absorption — FALSE: the large intestinal mucosa is flat (no villi); it is adapted for water reabsorption, not macronutrient absorption'
    ]
},

enzymaticDigestion: {
    'Zymogen Activation': [
        'Trypsinogen is activated by trypsin in the pancreas — FALSE under normal conditions: trypsinogen is activated by enteropeptidase (enterokinase) in the duodenum; autocatalytic activation by trypsin is a safety risk and the cause of pancreatitis if it occurs prematurely',
        'Pepsin is secreted directly in its active form — FALSE: chief cells secrete pepsinogen (the inactive zymogen); it is activated by HCl (partial) and by trypsin-like autocatalysis once a small amount of pepsin forms',
        'Zymogens are stored in the nucleus — FALSE: zymogens are packaged into membrane-bound zymogen granules at the apical surface of acinar/chief cells, ready for exocytosis into the lumen'
    ],
    'Enzyme Locations and Sources': [
        'The stomach produces all the proteases needed for digestion — FALSE: pepsin only initiates protein digestion; the majority is performed by pancreatic proteases (trypsin, chymotrypsin, elastase, carboxypeptidase) in the duodenum and jejunum',
        'Brush-border enzymes are secreted into the intestinal lumen — FALSE: brush-border enzymes (lactase, sucrase, maltase) are membrane-bound proteins anchored to the apical surface of enterocytes; they are not secreted freely',
        'Pancreatic amylase is the same enzyme as salivary amylase — PARTIALLY FALSE: they are both α-amylases cleaving α-1,4-glycosidic bonds, but they are distinct proteins encoded by different genes with different properties; pancreatic amylase predominates quantitatively in digestion'
    ]
},

gutRegulation: {
    'Hormone Identity': [
        'Secretin stimulates enzyme secretion from the pancreas — FALSE: secretin stimulates bicarbonate secretion from pancreatic ductal cells; it is CCK that stimulates pancreatic enzyme secretion',
        'Gastrin is secreted by the pancreas — FALSE: gastrin is secreted by G cells in the gastric antrum and duodenum',
        'CCK digests fat — FALSE: CCK is a hormone that stimulates the release of bile and pancreatic enzymes; the actual fat digestion is carried out by the enzymes and bile salts that CCK mobilises'
    ],
    'Neural Regulation': [
        'Gut motility is entirely controlled by the brain — FALSE: the enteric nervous system (Auerbach\'s and Meissner\'s plexuses) can regulate motility and secretion independently of the CNS — it is called the "second brain" for this reason',
        'Sympathetic activation (stress) increases digestion — FALSE: sympathetic activation diverts blood from the gut and inhibits motility and secretion (fight-or-flight); parasympathetic (vagal) activation increases digestive activity (rest-and-digest)',
        'The cephalic phase requires food to be present in the mouth — FALSE: the cephalic phase is triggered by sensory anticipation — sight, smell, or even thought of food — before any food enters the mouth or stomach'
    ]
},

ventilationMechanics: {
    'Breathing Mechanics': [
        'Breathing is driven by oxygen demand — FALSE: the primary stimulus for ventilation is rising PaCO₂ (falling pH), detected by central chemoreceptors; O₂ only becomes the primary driver in chronic hypercapnia',
        'Expiration always requires muscular effort — FALSE: resting expiration is entirely passive, driven by elastic recoil of the lung and chest wall; only forced expiration recruits internal intercostals and abdominals',
        'The diaphragm pushes air out during expiration — FALSE: the diaphragm relaxes during expiration; it is the elastic recoil of previously stretched lung tissue and chest wall that generates the expiratory pressure gradient',
        'Intrapleural pressure is the same as intrapulmonary pressure — FALSE: intrapleural pressure (~−4 cmH₂O) is subatmospheric and always lower than intrapulmonary pressure; this difference keeps the lung inflated'
    ],
    'Lung Volumes': [
        'Residual volume can be measured by spirometry — FALSE: RV is the air that cannot be exhaled and never appears in a spirometer trace; body plethysmography or helium dilution is required',
        'Vital capacity equals total lung capacity — FALSE: TLC = VC + RV; vital capacity deliberately excludes residual volume',
        'A reduced FEV₁ always indicates obstructive disease — FALSE: FEV₁ is reduced in both obstructive and restrictive disease; only the FEV₁/FVC ratio distinguishes them (below 0.7 = obstructive; above 0.7 with reduced FVC = restrictive)',
        'Breathing faster always increases alveolar ventilation — FALSE: rapid shallow breathing increases dead space fraction; if TV falls toward dead space volume, alveolar ventilation approaches zero despite high respiratory rate'
    ]
},

gasExchange: {
    'Fick\'s Law Errors': [
        'CO₂ and O₂ diffuse at the same rate across the alveolar membrane — FALSE: CO₂ is approximately 20× more soluble in tissue fluid than O₂, giving it a higher diffusion coefficient (D in Fick\'s law); CO₂ exchange is rarely the limiting factor',
        'A reduced DLCO always means fibrosis — FALSE: DLCO is reduced by anything that decreases surface area (emphysema, PE), increases membrane thickness (fibrosis, pulmonary oedema), or reduces haemoglobin (anaemia)',
        'Supplemental oxygen always corrects hypoxia — FALSE: supplemental O₂ corrects V/Q mismatch and hypoventilation-related hypoxia but cannot correct true shunt (deoxygenated blood bypasses alveoli entirely)'
    ],
    'V/Q Mismatch': [
        'Dead space and shunt are the same type of V/Q mismatch — FALSE: dead space (V/Q → ∞) is ventilated but unperfused; shunt (V/Q → 0) is perfused but unventilated; they have opposite effects and different responses to O₂ therapy',
        'V/Q ratio is uniform throughout the lung — FALSE: due to gravity, the lung base has higher perfusion (Q) than ventilation (V), giving a low V/Q ratio; the apex has higher ventilation than perfusion, giving a high V/Q ratio',
        'Hypoxia in PE is caused by blockage of airflow — FALSE: PE blocks blood flow, not airflow; hypoxia results from V/Q dead space mismatch and reflex bronchoconstriction/surfactant loss, not airway obstruction'
    ]
},

gasTransport: {
    'Haemoglobin and O₂ Transport': [
        'CO₂ binds to the iron in the haem group — FALSE: CO₂ binds to the N-terminal amino groups of globin chains (carbaminohaemoglobin); the haem iron is occupied by O₂ or CO; confusing the binding site is a serious biochemical error',
        'Pulse oximetry accurately measures O₂ saturation in all patients — FALSE: pulse oximetry cannot distinguish oxyhaemoglobin from carboxyhaemoglobin (CO poisoning) or methaemoglobin, producing falsely reassuring readings in both conditions',
        'Low haemoglobin is always the most important cause of reduced O₂ delivery — CONTEXT DEPENDENT: CaO₂ has both a haemoglobin-bound component and a dissolved component; additionally, O₂ delivery (DO₂) also depends on cardiac output — severe heart failure with normal haemoglobin may deliver less O₂ than mild anaemia with high output'
    ],
    'Dissociation Curve Shifts': [
        'A left-shifted dissociation curve is always beneficial — FALSE: left shift increases O₂ affinity (better loading in lungs) but impairs unloading at tissues; fetal HbF benefits from its left shift in the placental context, but the same shift in an adult would impair tissue O₂ delivery',
        'The Bohr effect shifts the curve left — FALSE: the Bohr effect (increased CO₂, H⁺, temperature, 2,3-BPG) shifts the curve to the RIGHT; left shift is caused by the opposite conditions and by fetal haemoglobin or CO',
        'Increasing PaO₂ above 100 mmHg significantly increases O₂ content — FALSE: haemoglobin is ~97% saturated at PaO₂ = 100 mmHg (flat upper part of the curve); further increasing PaO₂ to 600 mmHg only adds ~1.8 mL O₂/dL as dissolved O₂ — a clinically modest increase'
    ]
},

respiratoryControl: {
    'Chemoreceptor Function': [
        'Oxygen is the primary stimulus for ventilation in healthy individuals — FALSE: PaCO₂ (via CSF pH) is the primary stimulus; O₂ only becomes the primary stimulus when central chemoreceptors are blunted (chronic hypercapnia in COPD)',
        'Central chemoreceptors directly sense PaO₂ — FALSE: central chemoreceptors respond to PCO₂/pH changes in CSF, not to O₂; peripheral carotid body chemoreceptors are the primary O₂ sensors',
        'Peripheral chemoreceptors respond to SaO₂ — IMPRECISE: carotid bodies respond to PaO₂ (the partial pressure of dissolved O₂), not SaO₂; they do not fire until PaO₂ falls below ~60 mmHg; patients with anaemia have normal PaO₂ and normal peripheral chemoreceptor activity despite reduced SaO₂'
    ],
    'COPD and Oxygen Therapy': [
        'COPD patients should not receive any oxygen — FALSE and dangerous: untreated hypoxia is immediately life-threatening; the correct approach is controlled oxygen to target SaO₂ 88–92%, not oxygen avoidance',
        'All COPD patients have blunted CO₂ response and rely on hypoxic drive — FALSE: only those with chronic hypercapnia (CO₂ retainers) have adapted central chemoreceptor sensitivity; many COPD patients maintain normal CO₂ sensitivity',
        'High-flow oxygen worsens hypercapnia only by removing the hypoxic drive — OVERSIMPLIFICATION: three mechanisms contribute — (1) loss of hypoxic drive; (2) pulmonary vasodilation increasing V/Q mismatch; (3) Haldane effect releasing CO₂ from haemoglobin'
    ]
},

lungVolumes: {
    'Measurement and Interpretation': [
        'Spirometry measures all lung volumes — FALSE: spirometry cannot measure RV, FRC, or TLC; it measures only volumes above the RV baseline (TV, IRV, ERV, and their combinations)',
        'A normal FEV₁/FVC ratio means lung function is normal — FALSE: FEV₁/FVC may be normal in restriction (both FEV₁ and FVC reduced proportionally); overall function is still impaired — the ratio alone is insufficient without absolute FVC and TLC values',
        'Vital capacity is the maximum air the lungs can hold — FALSE: vital capacity is the maximum air that can be exhaled after maximum inhalation — it excludes residual volume; total lung capacity (VC + RV) is the maximum the lungs can hold'
    ]
},





heartStructure: {
    'Cardiac Anatomy': [
        'Arteries always carry oxygenated blood — FALSE: pulmonary arteries carry deoxygenated blood from the right ventricle to the lungs; the term "artery" means carrying blood away from the heart, not oxygenated blood',
        'Veins always carry deoxygenated blood — FALSE: pulmonary veins carry oxygenated blood from the lungs to the left atrium',
        'The right ventricle is weaker than the left because its wall is thinner — FALSE: both ventricles generate adequate force for their respective circuits; the left wall is thicker because it must generate ~5× higher pressure (120 mmHg vs ~25 mmHg), not because it pumps harder in a general sense',
        'The heart has only two valves — FALSE: there are four valves (tricuspid, pulmonary, mitral, aortic); students often recall only the AV valves or only the semilunar valves',
        'Diastole is when the heart is resting and doing nothing — FALSE: during diastole the ventricles are actively/passively filling with blood — this is an essential phase of the cardiac cycle, not inactivity'
    ],
    'Conduction System': [
        'The AV node is the pacemaker of the heart — FALSE: the SA node is the dominant pacemaker (70 bpm); the AV node has an intrinsic rate of only ~40–60 bpm and only drives the ventricles if SA node function fails',
        'Heart sounds are produced by valves opening — FALSE: heart sounds (S1 and S2) are produced by valve CLOSURE; opening is silent under normal conditions',
        'The ECG directly shows heart muscle contracting — IMPRECISE: the ECG shows the electrical depolarisation and repolarisation sequence, not mechanical contraction directly — contraction follows depolarisation by a brief delay'
    ]
},

bloodFlow: {
    'Circulation Concepts': [
        'Blood travels through one single circulation loop — FALSE: there are two distinct loops — pulmonary (heart to lungs) and systemic (heart to body) — operating simultaneously in series',
        'Blood moves through vessels because of muscle contractions in the vessels themselves — INCOMPLETE: veins use skeletal muscle pump, respiratory pump, and valves; arteries rely on cardiac pressure; capillaries have no active pumping mechanism',
        'Capillaries are the largest vessels because they have the most surface area — FALSE: capillaries are the smallest individual vessels; their enormous total surface area arises from their vast number, not individual size'
    ],
    'Pressure and Flow': [
        'High blood pressure means blood is flowing faster — FALSE: pressure and flow velocity are different; high pressure can coexist with low flow (e.g. in a stenosed vessel) or normal flow velocity',
        'Blood pressure is the same throughout the body — FALSE: pressure is highest in the aorta (~120 mmHg) and falls progressively through arteries, arterioles, capillaries, to veins (~5–10 mmHg); this pressure gradient is what drives flow',
        'Arterioles are unimportant because they are small — FALSE: arterioles are the primary site of vascular resistance regulation; small changes in their radius produce enormous changes in flow (flow ∝ r⁴) and systemic blood pressure'
    ]
},

bloodPressure: {
    'MAP and Determinants': [
        'Blood pressure is just one number — FALSE: blood pressure is reported as systolic/diastolic (e.g. 120/80 mmHg); systolic reflects peak ventricular pressure during ejection, diastolic reflects minimum arterial pressure during ventricular filling',
        'Mean arterial pressure is the average of systolic and diastolic — FALSE: MAP ≈ DBP + ⅓(SBP − DBP), because diastole occupies approximately two-thirds of the cardiac cycle at resting heart rates — simple averaging would overestimate MAP',
        'Lowering heart rate always lowers blood pressure — OVERSIMPLIFICATION: HR is only one component of CO = HR × SV; if SV increases proportionally (as in athletes), CO and MAP may remain unchanged despite a lower HR',
        'Total peripheral resistance is fixed and cannot be changed — FALSE: TPR is dynamically regulated by arteriolar smooth muscle tone, which is controlled by the sympathetic nervous system, local metabolites, and vasoactive hormones simultaneously'
    ],
    'Regulation': [
        'The baroreceptor reflex permanently corrects hypertension — FALSE: baroreceptors adapt (reset) to chronically elevated pressure within days; they maintain the new elevated pressure as the new "normal", which is why chronic hypertension requires drug treatment rather than relying on reflexes',
        'RAAS only operates in kidney disease — FALSE: RAAS is the normal physiological mechanism for long-term blood pressure and volume control, activated by any situation reducing renal perfusion (low BP, low volume, haemorrhage)',
        'Sympathetic activation always raises blood pressure — OVERSIMPLIFICATION: sympathetic activation raises HR, contractility, and causes vasoconstriction — all raising MAP; however, local sympathetic responses in skeletal muscle during exercise cause vasodilation, showing that sympathetic effects are tissue-specific'
    ]
},

bloodComposition: {
    'Erythrocytes and Haemoglobin': [
        'Erythrocytes are typical cells with a nucleus — FALSE: mature human erythrocytes have no nucleus (ejected during maturation), no mitochondria, and no ribosomes — this maximises haemoglobin content and avoids consuming the O₂ they carry',
        'Haemoglobin carries oxygen dissolved in the cell cytoplasm — FALSE: oxygen binds chemically to the iron (Fe²⁺) of the haem group of haemoglobin — this is specific reversible binding, not simple dissolution',
        'Low haematocrit always means anaemia — FALSE: haematocrit is the percentage of blood volume occupied by erythrocytes; it can be low due to actual red cell deficiency (anaemia) OR due to plasma volume expansion (e.g. in pregnancy) — the two causes have different clinical implications'
    ],
    'Oxygen Transport': [
        'Haemoglobin is fully saturated in arterial blood — APPROXIMATELY but not exactly true: arterial haemoglobin is ~98% saturated (not 100%) because a small amount of blood passes through poorly ventilated alveoli; this physiological shunt is clinically significant in lung disease',
        'The oxygen-dissociation curve is the same under all conditions — FALSE: the curve shifts right (Bohr effect: more O₂ released) in response to increased CO₂, decreased pH, increased temperature, and increased 2,3-DPG — all conditions present in metabolically active tissues that need more O₂',
        'Carbon dioxide is transported only dissolved in plasma — FALSE: only ~7% is dissolved in plasma; ~70% is transported as bicarbonate (HCO₃⁻) after conversion by carbonic anhydrase, and ~23% as carbaminohaemoglobin bound to haemoglobin'
    ]
},

gasExchange: {
    'Diffusion Principles': [
        'Gas exchange requires active transport — FALSE: both O₂ and CO₂ move across capillary and alveolar walls entirely by passive diffusion down concentration (partial pressure) gradients — no energy is required',
        'Thick capillary walls improve gas exchange by protecting the gases — FALSE: thin capillary walls (single endothelial cell, ~1 μm) are essential for rapid diffusion — wall thickness is inversely related to diffusion rate (Fick\'s Law)',
        'CO₂ diffuses more slowly than O₂ because it is a larger molecule — FALSE: CO₂ diffuses approximately 20 times faster than O₂ across biological membranes due to its far greater solubility in aqueous solution — diffusion rate depends on solubility as well as molecular size'
    ],
    'Clinical Misconceptions': [
        'Cyanosis (blue discolouration) appears as soon as oxygen levels drop slightly — FALSE: cyanosis becomes visible only when deoxyhaemoglobin exceeds approximately 5 g/dL in capillary blood; in severe anaemia, a patient can be critically hypoxic without appearing cyanosed because there is insufficient total haemoglobin to produce 5 g/dL of deoxyhaemoglobin',
        'Breathing 100% oxygen always corrects hypoxia — FALSE: in hypoxia caused by a diffusion block or ventilation-perfusion mismatch, 100% O₂ can raise PaO₂; but in anaemia (insufficient haemoglobin) or circulatory failure (insufficient CO), supplemental oxygen has limited benefit'
    ]
},


lymphaticAnatomy: {
    'Vessel Structure': [
        'Lymphatic capillaries are closed loops like blood capillaries — FALSE: they are open-ended, blind-started vessels; fluid enters but the closed end prevents any return into the interstitium',
        'Lymphatic capillaries have a basement membrane like blood capillaries — FALSE: they lack a continuous basement membrane, which is what makes them permeable to large molecules and cells',
        'Lymph flows in both directions like venous blood — FALSE: lymph flows strictly one-way toward the venous system; semilunar valves and lymphangion contractions prevent backflow',
        'The thoracic duct drains the entire body — FALSE: it drains all except the right arm, right head, and right thorax, which drain via the right lymphatic duct'
    ],
    'Lymph Node Structure': [
        'Lymph nodes and lymph glands are different structures — FALSE: they are the same structure; "gland" is a colloquial term without anatomical basis',
        'B cells and T cells are mixed uniformly throughout the lymph node — FALSE: B cells are concentrated in cortical follicles; T cells are in the paracortex; this anatomical segregation is functionally important',
        'Efferent lymphatics enter the lymph node and afferent leave — FALSE: this is inverted. Afferent lymphatics ENTER the node (bringing unfiltered lymph); the single efferent lymphatic LEAVES at the hilum',
        'All lymph enters nodes through the hilum — FALSE: multiple afferent lymphatics enter through the capsule at multiple points; only the efferent vessel exits at the hilum'
    ]
},

immuneFunction: {
    'Cell Identity Confusion': [
        'NK cells are a type of T lymphocyte — FALSE: NK (Natural Killer) cells are innate immune cells that kill without prior sensitisation and without antigen-specific receptors; they are part of the innate, not adaptive, immune system',
        'B cells mature in the thymus — FALSE: B cells mature in the BONE MARROW (B for Bone marrow); only T cells require thymic education',
        'Plasma cells are the same as B cells — IMPRECISE: plasma cells are terminally differentiated B cells specialised for antibody secretion; they have different morphology, surface markers, and lifespan',
        'Macrophages and dendritic cells have the same function — FALSE: macrophages are primarily phagocytic; dendritic cells are the most potent professional antigen-presenting cells and the key bridge between innate and adaptive immunity'
    ],
    'Antibody Misconceptions': [
        'Antibodies directly kill pathogens — FALSE: antibodies mark (opsonise), neutralise, or activate complement; actual killing is performed by phagocytes, complement, or NK cells via ADCC',
        'All antibodies are the same — FALSE: the five classes (IgG, IgA, IgM, IgE, IgD) have different structures, locations, half-lives, and functions determined by their heavy chain constant regions',
        'The variable region of an antibody determines its class — FALSE: the CONSTANT region of the heavy chain determines the class (isotype); the VARIABLE region determines antigen specificity',
        'IgA is the main blood antibody — FALSE: IgG is the most abundant serum antibody; IgA is the predominant antibody in secretions (saliva, tears, gut lumen, breast milk)'
    ],
    'Organ Function Errors': [
        'The spleen filters lymph — FALSE: the spleen filters BLOOD; lymph nodes filter lymph. This is a critical anatomical distinction',
        'The thymus and spleen have the same function — FALSE: thymus = primary lymphoid organ for T cell maturation and selection; spleen = secondary lymphoid organ for immune responses to blood-borne antigens and red blood cell quality control',
        'Tonsils are vestigial and have no immune function — FALSE: tonsils are part of MALT and provide first-line immune surveillance for antigens entering via the upper respiratory and gastrointestinal tracts'
    ]
},

fluidBalance: {
    'Oedema Mechanism Errors': [
        'Oedema always means the body is producing too much fluid — FALSE: oedema can result from increased capillary filtration, reduced reabsorption, reduced lymphatic drainage, or reduced plasma oncotic pressure — four distinct mechanisms',
        'Lymphoedema is the same as cardiac oedema — FALSE: lymphoedema involves protein-rich fluid accumulation due to lymphatic failure; cardiac oedema involves protein-poor fluid accumulation due to elevated hydrostatic pressure; the protein content difference has major therapeutic implications',
        'Furosemide treats lymphoedema — FALSE: diuretics reduce blood volume and filtration rate but do not restore lymphatic drainage; lymphoedema requires physical therapies (manual drainage, compression) or surgical intervention',
        'Elevated capillary pressure alone causes persistent oedema — INCOMPLETE: lymphatics initially compensate for moderately elevated filtration; oedema appears only when lymphatic drainage capacity is exceeded'
    ],
    'Fat Absorption Errors': [
        'All dietary fats are absorbed into the portal blood — FALSE: short- and medium-chain fatty acids enter portal blood directly; long-chain fatty acids are packaged into chylomicrons and absorbed exclusively via lacteals',
        'Fat-soluble vitamins are absorbed like water-soluble vitamins directly into blood — FALSE: fat-soluble vitamins (A, D, E, K) travel with dietary fats into chylomicrons and enter via lacteals — they are therefore susceptible to malabsorption in any condition blocking lacteal or lymphatic function',
        'Chylomicrons enter blood capillaries directly — FALSE: chylomicrons are too large (~80–1200 nm) to cross blood capillary endothelium; they specifically enter the more permeable lymphatic capillaries (lacteals)'
    ]
},

adaptiveImmunity: {
    'T Cell Biology': [
        'CD4+ and CD8+ T cells recognise the same MHC class — FALSE: CD4+ T cells recognise antigen presented on MHC class II; CD8+ T cells recognise antigen on MHC class I — this determines which cells they interact with and what they do',
        'Positive thymic selection keeps cells that react strongly to self — FALSE: positive selection keeps cells that can recognise SELF-MHC (at any affinity sufficient for recognition); NEGATIVE selection eliminates those that react TOO STRONGLY to self (which would cause autoimmunity)',
        'All nucleated cells express MHC class II — FALSE: MHC class II is expressed only on professional antigen-presenting cells (macrophages, dendritic cells, B cells); MHC class I is expressed on ALL nucleated cells',
        'T regulatory cells suppress all T cell responses — OVERSIMPLIFICATION: Tregs suppress responses to self-antigens and prevent autoimmunity; they do not uniformly suppress all immune responses, and their suppression is context-dependent'
    ],
    'Immunological Memory': [
        'Immunological memory means the immune system literally remembers — this is anthropomorphic: memory is a cellular and molecular phenomenon — long-lived B and T cells with lower activation thresholds, pre-formed receptors, and distinct surface markers; not a conscious process',
        'The secondary immune response is faster because there are more antibodies present — INCOMPLETE: residual antibodies from the primary response may contribute, but the primary mechanism is clonal expansion of memory B and T cells, which have lower activation thresholds and faster proliferation kinetics',
        'Vaccination always provides lifelong immunity — FALSE: duration of immunity varies by vaccine and pathogen; some require booster doses (tetanus, hepatitis B) because memory cell populations decline over decades',
        'IgM and IgG are produced simultaneously in a primary response — FALSE: IgM is produced first (within days); IgG production increases later as class switching occurs in germinal centres; this sequential appearance has diagnostic value in determining timing of infection'
    ]
},

lymphNodes: {
    'Node Function': [
        'Lymph nodes produce lymphocytes from scratch — PARTIALLY FALSE: naive lymphocytes are produced in primary lymphoid organs (bone marrow, thymus) and circulate to lymph nodes; nodes are sites of lymphocyte activation and proliferation, not primary production',
        'Enlarged lymph nodes always indicate cancer — FALSE: lymphadenopathy (enlarged nodes) is most commonly caused by reactive hyperplasia (normal immune response to local infection or inflammation); cancer (lymphoma or metastasis) is one cause among many',
        'All lymph bypasses lymph nodes in some circumstances — FALSE: all lymph must pass through at least one lymph node before returning to the venous system; this is a structural anatomical arrangement',
        'Lymph node enlargement during infection means the node is failing — FALSE: enlargement indicates successful activation — the node is filling with proliferating lymphocytes mounting a response; swollen nodes during tonsillitis, for example, are working correctly'
    ]
},



reproductiveAnatomy: {
    'Male Anatomy': [
        'Sperm are produced in the epididymis — FALSE: spermatogenesis occurs in the seminiferous tubules of the testes; the epididymis is the site of sperm MATURATION and storage',
        'Vasectomy reduces testosterone production — FALSE: vasectomy severs the vas deferens (ductal system) and does not affect the Leydig cells or the HPG axis; testosterone production is unchanged',
        'Semen is produced mainly by the testes — FALSE: sperm contribute <5% of semen volume; the seminal vesicles (~60%) and prostate (~30%) contribute the bulk of semen',
        'Ejaculation and orgasm are the same event — FALSE: orgasm is a central nervous system event; ejaculation is the muscular expulsion of semen; they are coordinated but dissociable'
    ],
    'Female Anatomy': [
        'Fertilisation occurs in the uterus — FALSE: fertilisation normally occurs in the AMPULLA of the uterine tube; the fertilised egg then travels to the uterus over 3–5 days',
        'The ovaries are directly connected to the uterine tubes — FALSE: there is a small gap; the fimbriae sweep the oocyte into the infundibulum but there is no direct anatomical connection',
        'The cervix produces acidic secretions throughout the cycle — INCOMPLETE: cervical mucus changes throughout the cycle — it is thick and hostile near menstruation and luteal phase but becomes clear, stretchy (Spinnbarkeit), and permissive to sperm at mid-cycle under oestrogen influence',
        'The endometrium is shed entirely during menstruation — FALSE: the stratum basale (deep layer) is retained and provides cells for endometrial regeneration; only the stratum functionalis is shed'
    ]
},

gametogenesis: {
    'Oogenesis Timing and Arrest': [
        'A mature egg is released at ovulation — FALSE: a SECONDARY OOCYTE (arrested at Metaphase II) is released; Meiosis II is completed only if fertilisation occurs',
        'Women produce new eggs throughout their reproductive lives — FALSE: all primary oocytes are formed before birth; no new oocytes are generated after birth in humans (unlike sperm)',
        'All primary oocytes eventually ovulate — FALSE: of ~1–2 million primordial follicles at birth, only ~400–500 ovulate during a lifetime; the rest undergo atresia',
        'Oogenesis and spermatogenesis are mirror images of each other — FALSE: they differ fundamentally in timing (foetal vs post-pubertal onset), continuity (arrested vs continuous), cytokinesis equality, and product number per division'
    ],
    'Meiosis in Gametogenesis': [
        'Meiosis produces four equal products in both male and female gametogenesis — FALSE: female oogenesis undergoes asymmetric cytokinesis, producing one large oocyte and up to three small polar bodies',
        'Polar bodies are small eggs that could be fertilised — FALSE: polar bodies are non-functional by-products of meiotic division; they lack the cytoplasmic components required for embryonic development',
        'The primary oocyte undergoes meiosis continuously from birth to ovulation — FALSE: the primary oocyte is arrested at Prophase I (dictyate stage) from foetal development until ovulation — this arrest lasts up to 50 years in humans'
    ]
},

hormonalControl: {
    'HPG Axis Feedback': [
        'The LH surge is caused by negative feedback — FALSE: the mid-cycle LH surge is the ONLY positive feedback event in the HPG axis; it is triggered by sustained high oestrogen (>200 pg/mL for >36 hours)',
        'All sex hormones produce negative feedback — FALSE: oestrogen produces negative feedback at most concentrations and cycle stages, but high, sustained oestrogen (late follicular phase) produces POSITIVE feedback, triggering the LH surge',
        'FSH and LH are always regulated together — FALSE: inhibin selectively suppresses FSH without affecting LH; the two gonadotrophins can be independently regulated'
    ],
    'Menstrual Cycle Timing': [
        'The 28-day menstrual cycle means ovulation occurs on day 14 in all women — FALSE: cycle length varies (21–35 days) and ovulation is not fixed at day 14; only the LUTEAL phase is relatively fixed at ~14 days — it is the follicular phase that varies',
        'The luteal phase length varies between women with different cycle lengths — FALSE: the luteal phase is consistently ~14 days regardless of cycle length; it is the follicular phase that accounts for cycle length variability',
        'Progesterone is the dominant hormone throughout the cycle — FALSE: oestrogen dominates the follicular phase; progesterone only rises significantly after ovulation in the luteal phase'
    ],
    'Hormone Sources and Actions': [
        'hCG is the same as LH — FALSE: hCG is produced by the TROPHOBLAST of the implanting embryo, not the pituitary; it shares structural homology with LH and acts on LH receptors, but is a distinct hormone with a longer half-life',
        'Inhibin inhibits both FSH and LH equally — FALSE: inhibin SELECTIVELY suppresses FSH; it has minimal effect on LH secretion'
    ]
},

fertilisationAndImplantation: {
    'Fertilisation Events': [
        'Fertilisation occurs at the surface of the ovary — FALSE: fertilisation occurs in the AMPULLA of the uterine tube, not at the ovary; the oocyte must be swept into the tube first',
        'The acrosome reaction occurs spontaneously before sperm reach the egg — FALSE: the acrosome reaction is triggered specifically by ZP3 on the zona pellucida; premature acrosome reaction inactivates the sperm',
        'A sperm fertilises the egg by injecting DNA only — FALSE: the sperm contributes the nucleus (DNA) but also delivers PLCζ (phospholipase Cζ) into the oocyte cytoplasm, which is essential for triggering the Ca²⁺ wave and completing Meiosis II'
    ],
    'Implantation Timing': [
        'Implantation occurs immediately after fertilisation — FALSE: implantation occurs 6–10 days after fertilisation; the embryo undergoes cleavage and blastocyst formation during transit to the uterus',
        'A negative pregnancy test one week after unprotected sex rules out pregnancy — FALSE: hCG is not detectable until after implantation (~day 8–10 post-fertilisation); testing too early gives false negatives',
        'The corpus luteum persists throughout pregnancy — FALSE: the corpus luteum is maintained by hCG only until the luteoplacental shift at ~8–12 weeks, after which the PLACENTA takes over progesterone production and the corpus luteum regresses'
    ]
},

menstrualCycle: {
    'Phase Events': [
        'Menstruation begins the day after ovulation — FALSE: menstruation occurs approximately 14 days after ovulation, at the end of the luteal phase, when progesterone falls after corpus luteum regression',
        'Heavy bleeding during menstruation means more eggs were released — FALSE: menstrual flow volume reflects endometrial thickness and prostaglandin activity, not the number of follicles or oocytes',
        'The menstrual cycle is controlled by the uterus — FALSE: the cycle is orchestrated by the HPG axis (hypothalamus → pituitary → ovaries); the uterus responds to hormonal signals but does not drive the cycle'
    ],
    'Hormonal Misunderstandings': [
        'Taking the pill means hormones build up to unnatural levels in the body — FALSE: the pill suppresses the HPG axis, leading to LOWER endogenous hormone levels; exogenous oestrogen and progestogen replace rather than add to endogenous production',
        'Missed periods always indicate pregnancy — FALSE: missed periods (amenorrhoea) have many causes — stress, low body weight, excessive exercise, thyroid disorder, PCOS, and premature ovarian insufficiency, among others'
    ]
},



boneStructure: {
    'Bone as Living Tissue': [
        'Bone is non-living mineral — FALSE: bone contains living osteocytes embedded in mineralised matrix, osteoblasts actively forming matrix, osteoclasts actively resorbing matrix, blood vessels, and nerves in Haversian canals',
        'Compact bone and spongy bone are different materials — FALSE: both are made of lamellar bone tissue with the same composition; they differ in three-dimensional organisation and porosity, not in the material itself',
        'The medullary cavity is waste space — FALSE: it contains yellow (adipose) or red (haematopoietic) bone marrow; the balance shifts from predominantly red marrow in childhood to yellow marrow in most adult long bones',
        'Articular cartilage is continuously replaced by bone remodelling — FALSE: articular cartilage is avascular and aneural; it has minimal regenerative capacity and is not part of the bone remodelling system'
    ],
    'Osteon Components': [
        'Canaliculi are just drainage channels — FALSE: canaliculi contain osteocyte cytoplasmic processes connected by gap junctions; they form the mechanosensory communication network of bone',
        'Volkmann\'s canals are just smaller Haversian canals — FALSE: Volkmann\'s canals run transversely or obliquely, connecting adjacent Haversian canals and connecting the periosteum to the interior; Haversian canals run longitudinally',
        'The cement line is structurally weak and a flaw in bone design — PARTIALLY INCORRECT: cement lines do resist crack propagation by deflecting cracks along the cement line rather than allowing them to propagate straight through, which is a toughening mechanism, not a weakness'
    ]
},

boneGrowthAndRemodelling: {
    'Cell Lineages': [
        'Osteoblasts and osteoclasts come from the same precursor — FALSE: osteoblasts derive from mesenchymal stem cells (same lineage as fibroblasts and chondrocytes); osteoclasts derive from haematopoietic monocyte/macrophage precursors — fundamentally different cell lineages',
        'Osteocytes are inactive once embedded — FALSE: osteocytes are the most abundant bone cells and serve as mechanosensors; they regulate local remodelling via sclerostin production and canalicular signalling',
        'When an osteoblast stops working it dies — PARTIALLY FALSE: when an osteoblast completes a remodelling cycle it either (a) becomes embedded as an osteocyte, (b) becomes a flattened bone-lining cell on the quiescent surface, or (c) undergoes apoptosis — osteocyte conversion is the most common fate'
    ],
    'Remodelling Signals': [
        'PTH directly activates osteoclasts — FALSE: PTH acts on osteoblasts and stromal cells, which upregulate RANKL; RANKL then binds RANK on osteoclast precursors to activate differentiation; there are no functional PTH receptors on osteoclasts',
        'High bone turnover always means bone gain — FALSE: high turnover (both formation and resorption elevated) can result in net bone loss if resorption exceeds formation — as in post-menopausal osteoporosis where the resorption-formation balance shifts toward net resorption',
        'Epiphyseal plate fusion is caused by calcium deposition — FALSE: plate fusion (synostosis) is driven by sex hormone-induced apoptosis of proliferating chondrocytes and replacement of the cartilaginous plate by bone; it is a hormonally programmed developmental event, not passive mineralisation'
    ],
    'Growth Mechanisms': [
        'Bone grows from both ends of the diaphysis — FALSE: longitudinal growth occurs only at the epiphyseal plates (at the junction of epiphysis and metaphysis), not from the mid-shaft or periosteum',
        'Appositional growth and longitudinal growth use the same mechanism — FALSE: longitudinal growth depends on chondrocyte proliferation at the growth plate (endochondral mechanism); appositional growth depends on direct osteoblast activity on the periosteal surface (intramembranous-like mechanism)',
        'Once growth plates fuse, no new bone can be added — FALSE: appositional growth at the periosteum continues throughout life in response to mechanical loading; only longitudinal growth ceases at plate fusion'
    ]
},

jointTypes: {
    'Joint Classification': [
        'All movable joints are synovial — FALSE: cartilaginous joints (especially symphyses like the pubic symphysis and intervertebral discs) are amphiarthroses — slightly movable — without a synovial cavity',
        'The knee is a simple hinge joint — OVERSIMPLIFICATION: the knee is primarily a hinge (flexion/extension) but also permits limited rotation and gliding; it is technically a condyloid joint with hinge-dominant movement; it also has complex passive stabilisation from ligaments and menisci not present in a true hinge joint like the elbow',
        'Ligaments connect muscle to bone — FALSE: ligaments connect bone to bone; tendons connect muscle to bone — this is one of the most commonly confused distinctions in musculoskeletal anatomy'
    ],
    'Cartilage Biology': [
        'Articular cartilage heals like other tissues after injury — FALSE: articular cartilage is avascular and largely aneural; it cannot mount a vascular repair response; damaged cartilage is replaced by fibrocartilage (inferior mechanically) rather than hyaline cartilage',
        'Synovial fluid is secreted by articular cartilage — FALSE: synovial fluid is secreted by the synovial membrane (Type B synoviocytes — fibroblast-like cells that produce hyaluronic acid); articular cartilage is avascular and does not secrete into the joint space',
        'Osteoarthritis and rheumatoid arthritis are the same disease — FALSE: osteoarthritis is a non-inflammatory degenerative condition primarily affecting articular cartilage due to mechanical wear; rheumatoid arthritis is an autoimmune inflammatory synovitis — the primary target is the synovial membrane, with cartilage destruction secondary to pannus invasion'
    ]
},

calciumAndMineral: {
    'Hormone Roles': [
        'Calcitonin is the primary regulator of serum calcium in adults — FALSE: clinical evidence shows thyroidectomy (removing the calcitonin source) does not cause sustained hypercalcaemia in adults; by contrast, parathyroidectomy causes severe, life-threatening hypocalcaemia — confirming PTH is the dominant regulator; calcitonin has a modest role in adult calcium homeostasis and is more important in growing children',
        'Vitamin D directly raises calcium independently of PTH — PARTIALLY MISLEADING: vitamin D is activated to calcitriol by a PTH-dependent step in the kidney (PTH stimulates 1α-hydroxylase); without PTH, vitamin D activation is reduced — the two systems are interdependent',
        'PTH always causes bone loss — FALSE: intermittent (pulsatile) PTH preferentially stimulates osteoblast proliferation and survival — the basis of teriparatide as an anabolic bone therapy; only continuous elevated PTH (as in primary hyperparathyroidism) produces net bone resorption'
    ],
    'Bone Mineral Pathologies': [
        'Rickets and osteoporosis are the same condition — FALSE: rickets/osteomalacia results from failure of mineralisation (normal quantity of osteoid is laid down but not adequately mineralised); osteoporosis results from reduced bone mass with normal mineralisation of the remaining bone — a completely different pathological mechanism',
        'Vitamin D deficiency causes calcium to be lost from bones immediately — FALSE: the body first attempts to maintain serum calcium via secondary hyperparathyroidism (PTH-driven bone resorption), which initially preserves serum calcium at the cost of accelerated bone resorption; overt hypocalcaemia is a late feature of vitamin D deficiency',
        'High calcium intake alone prevents osteoporosis — FALSE: adequate calcium is necessary but not sufficient; vitamin D for absorption, mechanical loading for osteoblast stimulation, and oestrogen or other hormones for suppressing osteoclastogenesis are all required; calcium supplementation alone has modest effects on fracture prevention'
    ]
},

skeletalFunction: {
    'Functions of the Skeleton': [
        'The skeleton\'s only function is mechanical support — FALSE: the skeleton also provides organ protection (skull, thoracic cage), enables haematopoiesis in red bone marrow, serves as the body\'s calcium and phosphate reservoir, houses the immune system\'s haematopoietic progenitors, and functions as an endocrine organ via osteocalcin',
        'All adult bones contain red bone marrow — FALSE: in adults, red marrow (haematopoietic) is limited to axial skeleton (sternum, vertebrae, ribs, cranial bones) and proximal epiphyses of long bones (proximal femur, humerus); most long bone diaphyses contain yellow (adipose) marrow by adulthood',
        'Bone stores only calcium — FALSE: bone stores approximately 85% of the body\'s phosphate (as well as calcium), plus smaller amounts of magnesium, sodium, and carbonate — all incorporated into the hydroxyapatite crystal lattice and releasable under hormonal control'
    ]
},



neuronStructure: {
    'Neuron Polarity': [
        'Dendrites send signals and axons receive them — INCORRECT: dendrites receive input signals from other neurons; axons conduct signals away from the soma toward the next neuron or effector',
        'All neurons have a long axon and short dendrites — FALSE: interneurons and some sensory neurons have highly branched local processes; axon length ranges from micrometres (interneurons) to over one metre (motor neurons to the foot)',
        'The myelin sheath conducts the electrical signal — FALSE: myelin is an electrical insulator; it prevents ion flow across the internodal membrane, forcing action potentials to jump between nodes of Ranvier rather than conducting through myelin'
    ],
    'Glial Cell Role': [
        'Glial cells only provide structural support — GROSSLY INCOMPLETE: astrocytes regulate the blood-brain barrier, buffer extracellular K⁺, recycle neurotransmitters, and form tripartite synapses participating directly in synaptic transmission; microglia are the CNS immune cells; oligodendrocytes and Schwann cells form myelin essential for signal propagation',
        'Schwann cells and oligodendrocytes perform the same function in the same location — FALSE: Schwann cells are in the PNS (one cell per internode); oligodendrocytes are in the CNS (one cell myelinates multiple axons). This distinction is clinically critical: MS (CNS demyelination) has limited spontaneous remyelination; peripheral nerve injuries can regenerate because Schwann cells proliferate'
    ]
},

actionPotential: {
    'All-or-Nothing Misunderstanding': [
        'Stronger stimuli produce larger action potentials — FALSE: all action potentials in the same neuron have the same amplitude (all-or-nothing). Stimulus intensity is encoded by the FREQUENCY of action potentials, not their amplitude',
        'Action potentials get smaller as they travel along the axon — FALSE: action potentials are actively regenerated at each node of Ranvier (saltatory) or at every point along unmyelinated axons (continuous conduction); they maintain full amplitude throughout propagation',
        'An action potential can be generated anywhere along the axon — PARTIALLY FALSE: the axon hillock has the lowest threshold and highest density of voltage-gated Na⁺ channels — it is the typical initiation site. Nodes of Ranvier can regenerate (not initiate) action potentials'
    ],
    'Resting Potential Origin': [
        'The Na⁺/K⁺ pump generates the resting membrane potential — INCORRECT as the primary mechanism: the resting potential is primarily due to K⁺ leaking out through constitutively open K⁺ leak channels, leaving behind net negative charge. The pump maintains the ion gradients that allow this leak but directly contributes only ~−3 mV of the −70 mV resting potential',
        'The resting potential is −70 mV because equal numbers of Na⁺ and K⁺ are present on each side — FALSE: the potential arises from differential permeability and differential concentration gradients; it is not about equal numbers but about which ion the membrane is most permeable to at rest (predominantly K⁺)',
        'Refractory periods exist because the neuron is "tired" after firing — INCORRECT ANTHROPOMORPHISM: the absolute refractory period has a specific molecular basis — voltage-gated Na⁺ channels are in the inactivated state (blocked by their inactivation gate) and cannot be reopened until repolarisation drives them to the resting closed state'
    ],
    'Conduction and Myelin': [
        'Myelin allows the action potential to travel through the insulated section — FALSE: myelin prevents ion flow in the internodal region; the action potential does not occur in the internode. Instead, the depolarisation spreads electrotonically (passively, decrementally) to the next node where it is regenerated',
        'Unmyelinated axons cannot conduct action potentials — FALSE: they conduct by continuous propagation, just more slowly (0.5–2 m/s). C fibres (pain, temperature) are unmyelinated and conduct effectively, just slowly'
    ]
},

synapticTransmission: {
    'Neurotransmitter Identity': [
        'Excitatory neurotransmitters always cause the postsynaptic neuron to fire — FALSE: EPSPs are graded; a single EPSP rarely reaches threshold alone. Many EPSPs must summate (spatially and temporally) to drive the membrane to threshold. Whether a cell fires depends on the balance of all simultaneous EPSPs and IPSPs',
        'A neurotransmitter is either always excitatory or always inhibitory — FALSE: the effect depends on the RECEPTOR, not the neurotransmitter. Acetylcholine is excitatory at nicotinic receptors (skeletal muscle, autonomic ganglia) but inhibitory at muscarinic M2 receptors in the heart. Glutamate acting on NMDA receptors is excitatory; GABA acting on GABA-A receptors is inhibitory in adults but can be excitatory in neonates (due to different Cl⁻ gradients)',
        'Neurotransmitters are destroyed immediately after release — IMPRECISE: removal mechanisms vary — reuptake into presynaptic terminal (most monoamines, GABA), enzymatic degradation in the cleft (acetylcholine by AChE), diffusion away from the synapse, or glial uptake. The specific mechanism is pharmacologically critical'
    ],
    'Synaptic Structure': [
        'The synapse is a direct physical connection between two neurons — FALSE: the synaptic cleft is a 20–40 nm fluid-filled gap. No direct electrical or physical continuity exists at a chemical synapse (electrical synapses — gap junctions — are a distinct, less common type)',
        'Any part of the presynaptic membrane can release neurotransmitter — FALSE: vesicle fusion occurs specifically at active zones — specialised membrane domains with high Ca²⁺ channel density and scaffolding proteins that dock vesicles'
    ]
},

nervousSystemOrganisation: {
    'ANS Misconceptions': [
        'The autonomic nervous system is completely involuntary and cannot be consciously influenced — OVERSIMPLIFIED: while most autonomic functions operate below conscious awareness, techniques such as biofeedback, meditation, and the Wim Hof method demonstrate measurable voluntary influence over heart rate, skin conductance, and even immune responses via the autonomic system',
        'The sympathetic system is always active during emergencies and the parasympathetic system shuts down — FALSE: both systems are tonically active and reciprocally regulated. Withdrawal of parasympathetic tone and increase in sympathetic tone both contribute to the stress response. In some situations (diving reflex), both are simultaneously active in different vascular beds',
        'All postganglionic sympathetic fibres release noradrenaline — FALSE: postganglionic sympathetic fibres innervating sweat glands release acetylcholine (acting on muscarinic receptors), not noradrenaline — a clinically important exception'
    ],
    'Reflex Arc Errors': [
        'Reflexes require brain processing — FALSE for spinal reflexes: the integration centre for spinal reflexes is in the spinal cord. The brain receives sensory information and is aware of the reflex but does not initiate or control it. Decapitated frogs continue to scratch at irritants placed on their skin — demonstrating intact spinal reflexes without any brain input',
        'A hyperreflexic response means the reflex arc is overactive — INCOMPLETE: hyperreflexia typically reflects loss of descending inhibitory control from upper motor neurons, not a change in the reflex arc itself. The arc is intact; it has simply lost its normal modulation. This is the UMN lesion pattern'
    ]
},

reflexesAndIntegration: {
    'Signal Encoding': [
        'The nervous system increases signal strength by making larger action potentials — FALSE: action potential amplitude is fixed (all-or-nothing); intensity is encoded by rate coding (frequency of action potentials) and population coding (how many neurons are recruited)',
        'A reflex and a voluntary movement use the same neural pathways — FALSE: voluntary movements require cortical initiation via the corticospinal tract → alpha motor neuron; reflex arcs bypass the cortex and use only sensory afferent → spinal interneuron (or direct) → motor efferent. They share the final common pathway (alpha motor neuron → muscle) but differ in their origin'
    ]
},



cellCycleBasics: {
    'Cell Cycle Structure': [
        'Mitosis is the cell cycle — FALSE: mitosis is only the M phase; the cell cycle also includes G1, S, and G2, which collectively occupy ~90% of cycle time',
        'Interphase is a resting phase — FALSE: interphase is the most metabolically active period — the cell grows, replicates its entire genome, and synthesises proteins essential for division',
        'The cell cycle always takes the same amount of time — FALSE: G1 duration varies enormously depending on growth signals; S, G2, and M are more constant in a given cell type',
        'DNA replication occurs during mitosis — FALSE: DNA is replicated during S phase of interphase, well before mitosis begins'
    ],
    'Checkpoint Concepts': [
        'Checkpoints stop the cell cycle permanently — FALSE: checkpoints arrest the cycle temporarily until the problem is resolved; if repaired, the cycle resumes',
        'The spindle assembly checkpoint detects DNA damage — FALSE: the SAC detects unattached kinetochores; DNA damage is detected by the G1 and G2 checkpoints via ATM/ATR kinases',
        'Only cancer cells have checkpoints — REVERSED: normal cells have fully functional checkpoints; cancer cells have lost or bypassed checkpoint function'
    ]
},

mitosis: {
    'Chromosome Behaviour': [
        'Chromosomes are replicated during mitosis — FALSE: chromosomes (sister chromatids) are produced during S phase; mitosis only separates them',
        'Homologous chromosomes pair in mitosis — FALSE: homologous chromosomes do NOT pair in mitosis; pairing (synapsis) is unique to meiosis I',
        'Mitosis halves the chromosome number — FALSE: meiosis I halves the chromosome number; mitosis maintains it — both daughter cells are diploid if the parent was diploid',
        'Crossing over occurs in mitosis — FALSE: crossing over occurs between non-sister chromatids of HOMOLOGOUS chromosomes in meiosis I; homologues do not pair in mitosis'
    ],
    'Cytokinesis': [
        'Cytokinesis is part of mitosis — IMPRECISE: cytokinesis is the division of the cytoplasm; it follows mitosis but is a distinct process; mitosis refers specifically to nuclear division',
        'Plant and animal cells divide the same way — FALSE: animal cells use a cleavage furrow (contractile ring); plant cells use a cell plate formed by vesicle fusion; both divide the cytoplasm but by entirely different mechanisms'
    ]
},

meiosis: {
    'Sister Chromatid vs Homologue Confusion': [
        'Homologous chromosomes separate in anaphase II — FALSE: homologues separate in anaphase I; sister chromatids separate in anaphase II',
        'Crossing over occurs between sister chromatids — FALSE: crossing over occurs between NON-SISTER chromatids of HOMOLOGOUS chromosomes — sister chromatids are genetically identical, so exchange between them produces no new combinations',
        'Meiosis produces two cells — FALSE: meiosis produces FOUR haploid cells (two from meiosis I, each dividing again in meiosis II)',
        'Meiosis II is identical to mitosis — PARTIALLY MISLEADING: meiosis II separates sister chromatids like mitosis, but operates on haploid cells; no homologous pairing preceded it; the context and product ploidy are fundamentally different'
    ],
    'Genetic Variation Misconceptions': [
        'Independent assortment shuffles alleles within a chromosome — FALSE: independent assortment randomises the ORIENTATION of whole chromosome pairs at metaphase I, distributing intact chromosomes (not alleles) randomly to daughter cells; allele shuffling within a chromosome is crossing over',
        'Crossing over only occurs once per meiosis — FALSE: typically 1–3 crossovers occur per chromosome pair per meiosis; multiple chiasmata can be visible on a single bivalent',
        'Cells produced by meiosis II are genetically identical — FALSE (in the presence of crossing over): even sister chromatids from the same bivalent may differ if crossing over occurred between the gene locus and the centromere'
    ]
},

regulation: {
    'Oncogenes and Tumour Suppressors': [
        'Oncogenes are foreign genes that infect cells — FALSE: oncogenes arise from mutations in normal cellular proto-oncogenes (genes involved in growth signalling); they are mutant versions of the cell\'s own genes',
        'One mutated copy of a tumour suppressor causes cancer — FALSE (in most cases): both copies must be lost (Knudson two-hit model) because one functional copy is sufficient to maintain checkpoint control; haploinsufficiency is an exception for some genes',
        'Tumour suppressors directly destroy cancer cells — FALSE: tumour suppressors constrain cell cycle progression or promote apoptosis — they are brakes, not killers; their LOSS removes these brakes',
        'p53 directly repairs DNA — FALSE: p53 is a transcription factor that induces expression of DNA repair genes (e.g. GADD45) and CDK inhibitors (p21); it does not carry out repair itself'
    ],
    'Cancer and Cell Division': [
        'Cancer cells divide faster than normal cells — OVERSIMPLIFICATION: cancer cells divide without restraint, but some divide no faster than normal proliferating cells (e.g. gut epithelium); the key difference is that division is not stopped when it should be',
        'All cancers have the same mutations — FALSE: cancer is genetically heterogeneous; different tumours disable the same pathways (e.g. RB pathway) through different specific mutations (CDK4 amplification, cyclin D overexpression, p16 deletion, Rb mutation — all disable the same G1 checkpoint)',
        'Chemotherapy kills only cancer cells — FALSE: most chemotherapy drugs target rapidly dividing cells generally; rapidly dividing normal cells (gut epithelium, bone marrow, hair follicles) are also affected — this is the basis of common chemotherapy side effects'
    ]
},

comparisonErrors: {
    'Mitosis vs Meiosis Confusion': [
        'Meiosis occurs in all tissues — FALSE: meiosis occurs only in germline cells in the gonads; somatic cells undergo mitosis',
        'Both mitosis and meiosis reduce chromosome number — FALSE: only meiosis reduces chromosome number; mitosis maintains the parental ploidy in both daughter cells',
        'Genetic variation is produced in mitosis — FALSE: mitosis produces genetically identical daughter cells; variation arises from meiotic processes (crossing over, independent assortment) and from DNA replication errors (mutations)',
        'The products of meiosis are ready to become gametes immediately — ORGANISM-DEPENDENT: in males, meiotic products (spermatids) undergo further differentiation (spermiogenesis) to form mature sperm; in females, meiosis II is not completed until after fertilisation in most species'
    ]
},



signallingBasics: {
    'Signal and Receptor Confusion': [
        'The signal molecule enters the cell to trigger the response — FALSE for hydrophilic signals: peptide hormones, catecholamines, and neurotransmitters bind surface receptors and never enter the cell; only lipid-soluble signals (steroids, thyroid hormone) cross the membrane',
        'Receptors are only on the cell surface — FALSE: intracellular receptors exist in the cytoplasm and nucleus for lipid-soluble ligands; the receptor location is determined by whether the ligand can cross the membrane',
        'Signal transduction simply passes the signal unchanged from outside to inside — FALSE: transduction converts and amplifies the signal; the intracellular message (e.g. cAMP, phosphorylated proteins) is chemically different from the original extracellular ligand',
        'All cells respond identically to the same signal — FALSE: cellular response depends on which receptor type is expressed, which G protein is coupled, what second messengers are produced, and what effector proteins are present — the same hormone (e.g. adrenaline) produces different responses in different cell types'
    ],
    'Signalling Type Confusion': [
        'Autocrine signalling is always pathological — FALSE: autocrine signalling is a normal feature of development and immune regulation; it becomes pathological when cancer cells use it to drive uncontrolled proliferation',
        'Endocrine and paracrine signalling are distinguished only by distance — OVERSIMPLIFICATION: they also differ in mechanism of delivery (bloodstream vs diffusion), persistence of signal, and concentration at target; confusing them leads to errors in drug mechanism questions'
    ]
},

receptorTypes: {
    'GPCR Mechanism': [
        'GPCRs directly open ion channels — FALSE in most cases: GPCRs act via G proteins and second messengers; ion channel opening is a downstream consequence (e.g. cAMP opens HCN channels), not a direct receptor effect; the GPCR itself is not a channel',
        'All GPCRs increase cAMP — FALSE: Gs-coupled GPCRs increase cAMP; Gi-coupled GPCRs DECREASE cAMP by inhibiting adenylyl cyclase; Gq-coupled GPCRs do not affect cAMP at all but activate PLC instead',
        'The G protein is always the same (one type) — FALSE: Gα subunits are diverse (Gs, Gi, Gq, G12, and others), each coupling the receptor to different effectors; receptor identity determines which G protein is coupled',
        'Once a GPCR binds its ligand, it signals indefinitely — FALSE: GPCRs desensitise through GRK-mediated phosphorylation followed by β-arrestin binding, and are internalised by endocytosis; this is a key termination and regulatory mechanism'
    ],
    'RTK Mechanism': [
        'RTKs are active as monomers — FALSE: most RTKs require ligand-induced dimerisation to bring the two kinase domains into proximity for transautophosphorylation; the monomer is inactive',
        'RTKs produce cAMP as their second messenger — FALSE: RTKs typically do not generate cAMP; they activate Ras, PI3K/Akt, or PLCγ pathways; confusing RTK and GPCR downstream messengers is extremely common',
        'Phosphorylated tyrosine residues on RTKs are the active site of the kinase — PARTIALLY FALSE: some phosphotyrosines ARE in the activation loop and regulate kinase activity, but many phosphotyrosines serve as docking sites for SH2-domain-containing adaptor proteins like Grb2; the two roles are distinct'
    ],
    'Intracellular Receptor': [
        'Steroid hormones bind receptors on the cell surface — FALSE: steroid hormone receptors are intracellular (cytoplasmic or nuclear); the hormone must cross the membrane to reach them',
        'Intracellular receptor responses are always slower than surface receptor responses — MOSTLY TRUE but with exceptions: some steroid hormone effects (non-genomic actions) can occur within minutes via membrane-associated receptors or direct protein-protein interactions, independently of gene transcription'
    ]
},

secondMessengers: {
    'cAMP Misconceptions': [
        'cAMP is the same molecule as the original hormone signal — FALSE: cAMP is produced intracellularly by adenylyl cyclase from ATP; it is a relay molecule, not the original signal',
        'All GPCRs produce cAMP — FALSE: only Gs-coupled GPCRs increase cAMP; Gi-coupled receptors decrease it; Gq-coupled receptors do not affect cAMP and instead activate PLC',
        'Phosphodiesterase inhibitors reduce the signalling response — FALSE: phosphodiesterase inhibitors (e.g. caffeine, sildenafil) INCREASE and prolong the cAMP/cGMP response by preventing degradation; this is the basis of therapeutic action for sildenafil (Viagra) and theophylline'
    ],
    'IP₃ and DAG Confusion': [
        'IP₃ and DAG are produced by the same enzyme acting on cAMP — FALSE: IP₃ and DAG are both produced by phospholipase C (PLC) acting on PIP₂, a membrane phospholipid — not on cAMP; they are entirely distinct second messengers from the cAMP pathway',
        'IP₃ activates PKC directly — FALSE: IP₃ binds the IP₃ receptor on the ER to release Ca²⁺; it is DAG (plus Ca²⁺) that activates PKC at the plasma membrane; confusing IP₃ and DAG roles is one of the most common errors in this topic',
        'DAG is a water-soluble second messenger that travels through the cytoplasm — FALSE: DAG is a lipid, produced in and remaining in the plasma membrane; it recruits PKC to the membrane surface rather than diffusing through the cytoplasm as IP₃ does'
    ],
    'Calcium Misconceptions': [
        'Cytoplasmic Ca²⁺ is always high and serves as a resting signal — FALSE: resting cytoplasmic [Ca²⁺] is approximately 100 nM (very low); the large gradient between cytoplasm and ER lumen or extracellular space is essential for Ca²⁺ to work as a rapid, high-fold-change second messenger',
        'Ca²⁺ acts directly on all its effectors without a binding protein intermediary — FALSE: most Ca²⁺ effects are mediated through calmodulin, which undergoes a conformational change upon Ca²⁺ binding and then activates target proteins such as CaM kinase and MLCK'
    ]
},

signalAmplification: {
    'Amplification Misconceptions': [
        'Signal amplification means the signal gets chemically stronger — FALSE: amplification means more molecules are activated at each step; the signal is transduced and multiplied, not made louder or more potent in a chemical sense',
        'Only one type of second messenger can be produced per receptor activation — FALSE: the same activated GPCR can simultaneously produce multiple effects; e.g. Gq activates PLC (producing IP₃ and DAG), and the released Ca²⁺ can also activate calmodulin-dependent kinases — multiple parallel amplification arms',
        'Amplification means the response is always proportional to the signal strength — FALSE: cooperative kinetics, threshold effects, bistable switches, and negative feedback loops mean that signalling cascades often have non-linear, switch-like responses; small increases in signal above a threshold can produce disproportionately large responses'
    ],
    'Ras and G Protein Confusion': [
        'Ras is the same as the heterotrimeric G protein (Gα) in GPCR signalling — FALSE: Ras is a small monomeric GTPase activated in the RTK/MAPK pathway; Gα is a subunit of the heterotrimeric G protein (with Gβ and Gγ) activated by GPCRs; they are structurally related (both are GTPases) but functionally in different pathways',
        'Constitutively active Ras only affects one downstream pathway — FALSE: Ras activates multiple parallel effector pathways simultaneously including Raf/MEK/ERK, PI3K/Akt, and RalGEF pathways; this pathway redundancy is why Ras-mutant cancers are difficult to treat with single-pathway inhibitors'
    ]
},

cellularResponses: {
    'Response Specificity': [
        'The same signal always produces the same response — FALSE: the cellular response depends on which receptor subtype is expressed (e.g. α vs β adrenergic receptors produce opposite effects on smooth muscle), which G protein is coupled, and which effector proteins are available in that cell type',
        'Signal termination is the same as receptor inhibition — FALSE: termination encompasses multiple mechanisms beyond receptor blocking: second messenger degradation (phosphodiesterase), G protein deactivation (GTPase), protein dephosphorylation (phosphatase), and receptor internalisation all contribute to terminating the response',
        'Once a pathway is activated, it stays active until the ligand is removed — FALSE: receptors desensitise, second messengers are degraded, and phosphatases deactivate downstream kinases continuously — the pathway has built-in timers that limit its duration independently of whether the ligand is still present'
    ]
},




cellularRespiration: {
    'ATP Production': [
        'Fermentation produces ATP — FALSE: fermentation (lactic acid or alcoholic) does not produce any additional ATP beyond what glycolysis yields; its sole function is to regenerate NAD⁺ so glycolysis can continue',
        'The Krebs cycle produces most of the cell\'s ATP — FALSE: the Krebs cycle produces GTP (equivalent to ATP) directly, but most ATP comes from oxidative phosphorylation using the NADH and FADH₂ the Krebs cycle generates',
        'Glycolysis requires oxygen — FALSE: glycolysis is anaerobic and occurs in all living cells regardless of oxygen availability; oxygen is only required for oxidative phosphorylation',
        'Each glucose molecule produces exactly 36 or 38 ATP — OUTDATED: this figure assumed 100% coupling efficiency; the modern consensus estimate is ~30–32 ATP per glucose, accounting for proton leakage and shuttle costs'
    ],
    'Electron Transport Chain': [
        'The ETC directly produces ATP — INCOMPLETE: the ETC pumps H⁺ to create a proton gradient; ATP is produced by ATP synthase using the energy of H⁺ flowing back down its gradient (chemiosmosis); these are two separate processes',
        'FADH₂ produces the same amount of ATP as NADH — FALSE: FADH₂ donates electrons at Complex II, bypassing Complex I, so fewer H⁺ are pumped (10 vs 14 per electron pair); FADH₂ yields ~1.5 ATP vs ~2.5 ATP for NADH',
        'CO₂ is produced in the ETC — FALSE: CO₂ is produced during pyruvate decarboxylation and the Krebs cycle; the ETC does not produce CO₂ — it produces water (from O₂ + 2H⁺ + 2e⁻)'
    ],
    'Location Errors': [
        'The Krebs cycle occurs in the cristae (inner mitochondrial membrane) — FALSE: the Krebs cycle occurs in the mitochondrial matrix; the inner membrane is where the ETC and ATP synthase are located',
        'Oxidative phosphorylation occurs in the cytoplasm — FALSE: it occurs on the inner mitochondrial membrane'
    ]
},

photosynthesis: {
    'Calvin Cycle': [
        'The Calvin cycle requires darkness — FALSE: the Calvin cycle requires ATP and NADPH from the light reactions; it can operate in light or dark as long as ATP and NADPH are available, but stops in prolonged darkness when these are depleted',
        'CO₂ is split in photosynthesis to release oxygen — FALSE: O₂ comes from water splitting at PSII (photolysis), not from CO₂; this was proven by ¹⁸O isotope labelling experiments',
        'RuBisCO only performs carbon fixation — FALSE: RuBisCO also catalyses the oxygenase reaction (photorespiration), using O₂ instead of CO₂ as substrate — an energetically wasteful competing reaction',
        'Glucose is directly produced in the Calvin cycle — OVERSIMPLIFICATION: the immediate product is G3P (glyceraldehyde-3-phosphate); glucose is synthesised from two G3P molecules outside the Calvin cycle per se'
    ],
    'Light Reactions': [
        'Chlorophyll absorbs all wavelengths of light equally — FALSE: chlorophyll absorbs mainly red (~680 nm) and blue (~430 nm) light; green light is reflected, which is why plants appear green',
        'ATP produced in the light reactions is used directly in the ETC — FALSE: the ATP produced by photosynthetic ATP synthase is used in the Calvin cycle to drive carbon fixation and RuBP regeneration; it does not enter the ETC',
        'Photosynthesis and respiration are opposite reactions that cancel each other out — OVERSIMPLIFICATION: they occur simultaneously but in different organelles; at the light compensation point net gas exchange is zero, but both processes are still occurring'
    ]
},

cellCycle: {
    'Mitosis vs Meiosis': [
        'Mitosis and the cell cycle are the same thing — FALSE: the cell cycle consists of interphase (G1, S, G2) plus the M phase (mitosis + cytokinesis); mitosis is just the nuclear division phase of the cycle',
        'Mitosis produces haploid cells — FALSE: mitosis in a diploid organism produces two genetically identical diploid daughter cells; meiosis produces haploid cells for sexual reproduction',
        'DNA replication occurs during mitosis — FALSE: DNA replication occurs during S phase of interphase, before mitosis begins; by the time a cell enters mitosis, DNA replication is complete'
    ],
    'Checkpoints and Cancer': [
        'Cancer cells divide faster than normal cells — OVERSIMPLIFICATION: cancer cells escape normal growth controls; many cancer cells do not actually divide faster than normal rapidly dividing cells (e.g. gut epithelium), but they fail to stop when they should',
        'A single mutation causes cancer — FALSE: cancer typically requires accumulation of multiple mutations (commonly 4–7 driver mutations) in proto-oncogenes and tumour suppressor genes; this is the basis of the multi-hit hypothesis',
        'Tumour suppressor genes cause cancer when overexpressed — FALSE: tumour suppressor genes prevent cancer when functioning normally; it is their LOSS OF FUNCTION (deletion or inactivating mutation) that contributes to cancer'
    ],
    'Cyclin-CDK': [
        'CDKs are constitutively active kinases — FALSE: CDKs require cyclin binding for activation; cyclin protein levels oscillate through the cell cycle to provide temporal control',
        'Cyclin levels remain constant through the cell cycle — FALSE: each cyclin type rises and falls at specific points; cyclin B, for example, accumulates in G2 and is rapidly degraded at the metaphase-anaphase transition'
    ]
},

atpAndEnergy: {
    'ATP as Energy Currency': [
        'ATP stores large amounts of energy for long-term use — FALSE: ATP is a short-term energy carrier (seconds to minutes), not a long-term store; glucose, glycogen, and fat are long-term stores; the cell\'s ATP pool turns over completely every few seconds at rest',
        'ATP hydrolysis releases energy directly to other molecules — IMPRECISE: the free energy released by ATP hydrolysis is used to drive coupled reactions by phosphorylating substrates, changing protein conformations, or driving ion pumps — it is not released as free energy into the environment',
        'More ATP bonds means more stored energy — FALSE: the energy is primarily in the phosphoanhydride bonds; the number of phosphate groups matters (ATP vs ADP vs AMP), but it is the terminal phosphate bond specifically that is most important'
    ]
},

membraneTransport: {
    'Osmosis': [
        'Osmosis is the movement of solutes across a membrane — FALSE: osmosis is specifically the movement of WATER (the solvent) across a semi-permeable membrane; solutes do not move in simple osmosis',
        'Water moves from high concentration to low concentration in osmosis — MISLEADING PHRASING: water moves from low solute concentration (high water potential) to high solute concentration (low water potential) — re-state as: water moves toward where there is more solute',
        'Osmosis requires energy (ATP) — FALSE: osmosis is a passive process driven by the water potential gradient; it requires no direct energy input'
    ],
    'Active vs Passive Transport': [
        'Facilitated diffusion is a form of active transport because it uses a protein — FALSE: facilitated diffusion is passive; it uses no ATP and moves molecules down their concentration gradient; the protein only provides a pathway',
        'Active transport always uses ATP directly — FALSE: secondary active transport uses an electrochemical gradient (created by primary active transport) rather than direct ATP hydrolysis; the energy ultimately comes from ATP but is not used directly by the cotransporter',
        'The Na⁺/K⁺ pump moves Na⁺ into the cell — FALSE: it moves 3 Na⁺ OUT and 2 K⁺ IN per ATP hydrolysed; this is the basis of the negative resting membrane potential in neurons'
    ]
},




macromoleculeBasics: {
    'Polymer Classification': [
        'Lipids are polymers of fatty acids — FALSE: lipids are not polymers; they have no repeating monomer unit joined by a single uniform bond type; they are defined by hydrophobicity, not by polymerisation',
        'All biological macromolecules are polymers — FALSE: lipids are macromolecules (large biological molecules) but not polymers in the strict sense; the other three classes are polymers',
        'Condensation reactions require water — FALSE: condensation reactions RELEASE water; it is HYDROLYSIS that requires water; the two reactions are direct opposites',
        'Monomers and polymers are interchangeable in function — FALSE: monomers and their polymers often have entirely different properties and functions (glucose is sweet and soluble; cellulose is insoluble and structural)'
    ],
    'Reaction Energetics': [
        'Hydrolysis requires an enzyme to proceed — PARTIALLY FALSE: hydrolysis can occur spontaneously (e.g. RNA self-hydrolyses via the 2\'-OH) but biological rates require enzyme catalysis; enzymes accelerate the rate but do not make it thermodynamically possible',
        'Condensation and hydrolysis change the overall energy content of the molecule — OVERSIMPLIFICATION: condensation stores energy in covalent bonds; hydrolysis releases it; but the energy of the monomer units themselves is a separate question from the bond energy of the polymer linkage'
    ]
},

carbohydrates: {
    'Isomerism': [
        'α-glucose and β-glucose are different sugars (structural isomers) — FALSE: they are anomers — the same molecule differing only in the orientation of the -OH group at C1; they have identical molecular formulas and nearly identical structures',
        'Fructose is a form of glucose — FALSE: fructose and glucose are structural isomers (same formula C₆H₁₂O₆ but different connectivity); fructose is a ketose, glucose is an aldose',
        'The α/β difference is too small to matter biologically — FALSE: this single difference determines whether the resulting polysaccharide is digestible (α) or structural (β), and therefore determines the entire ecological and metabolic role of the polymer'
    ],
    'Polysaccharide Properties': [
        'Glycogen and starch are essentially the same molecule — FALSE: glycogen is more highly branched than amylopectin (branch every 8–10 residues vs every 24–30 residues in amylopectin); this difference is functionally significant for the rate of glucose mobilisation',
        'Cellulose cannot be digested by any organism — FALSE: many bacteria, fungi, and protists (including those in ruminant guts) produce cellulase; humans specifically lack the enzyme',
        'Polysaccharides always test positive with iodine — FALSE: iodine specifically tests for amylose (the helical component of starch); glycogen gives a red-brown colour (different helix geometry); cellulose gives no colour change',
        'Reducing sugars are named because they reduce in size — FALSE: reducing sugars have a free anomeric carbon (C1 -OH not involved in a glycosidic bond) that can donate electrons to reduce Cu²⁺ to Cu⁺ in Benedict\'s test; the name refers to electron donation, not size'
    ]
},

lipids: {
    'Polymer Misconception': [
        'Triglycerides are polymers of fatty acids — FALSE: a triglyceride has exactly three fatty acids esterified to one glycerol — there is no repeating unit and no polymer chain; it cannot grow by adding more monomers in the way a polysaccharide can'
    ],
    'Saturation': [
        'Unsaturated fats are healthier because they contain more energy — FALSE: all fats contain approximately the same energy per gram (~37 kJ/g); the health distinction is about cardiovascular risk (LDL cholesterol elevation), not caloric content',
        'Saturated fats are solid because they contain more carbon — FALSE: it is the ability to pack together tightly (due to straight chains with no kinks) that raises melting point; chain length and saturation are both factors, with saturation being the primary determinant for similar chain lengths',
        'Trans fats are unsaturated and therefore healthy — FALSE: trans fats are geometrically similar to saturated fats (straight chains, tight packing) and raise LDL while lowering HDL; the cis/trans distinction within unsaturated fats is as important as the saturated/unsaturated distinction'
    ],
    'Membrane': [
        'Phospholipid bilayers are held together by covalent bonds between molecules — FALSE: the bilayer is stabilised by the hydrophobic effect (non-covalent) — individual phospholipids can move laterally within the bilayer; the fluid mosaic model depends on this non-covalent organisation',
        'Cholesterol makes membranes more fluid — INCOMPLETE: cholesterol has a dual, temperature-dependent effect; at high temperatures it reduces fluidity (prevents excess disorder); at low temperatures it prevents tight packing (prevents rigidity); it acts as a fluidity buffer, not simply a fluidiser'
    ]
},

proteins: {
    'Structure Levels': [
        'Denaturation destroys the primary structure (amino acid sequence) — FALSE: denaturation disrupts secondary, tertiary, and quaternary structure; the peptide bonds of the primary structure require hydrolysis (not heat or pH change) to break',
        'Secondary structure is stabilised by R-group interactions — FALSE: secondary structure (α-helix and β-sheet) is stabilised by hydrogen bonds between backbone atoms (C=O and N-H); R-group interactions are the hallmark of TERTIARY structure',
        'Quaternary structure is found in all proteins — FALSE: only proteins with two or more polypeptide subunits have quaternary structure; monomeric proteins like myoglobin have no quaternary structure'
    ],
    'Amino Acids': [
        'All 20 amino acids differ only in size — FALSE: amino acids differ in size, charge (positive, negative, neutral), polarity (hydrophilic, hydrophobic), and chemical reactivity (e.g. cysteine forms disulphide bonds, serine is a nucleophile in enzyme mechanisms)',
        'Hydrophobic amino acids are found on the protein surface — FALSE: nonpolar (hydrophobic) amino acids are predominantly found in the protein INTERIOR, away from water; hydrophilic amino acids are predominantly on the surface',
        'The peptide bond is a single bond and rotates freely — FALSE: the peptide bond has partial double bond character due to resonance with the adjacent carbonyl; this makes the peptide bond planar and restricts rotation'
    ],
    'Denaturation': [
        'Denaturation is the same as digestion — FALSE: denaturation is a physical/chemical change in 3D structure; digestion requires specific hydrolytic enzymes that break peptide bonds; denatured proteins can subsequently be more easily digested (denaturation exposes buried peptide bonds) but denaturation itself is not digestion'
    ]
},

nucleicAcids: {
    'Base Pairing': [
        'Adenine pairs with Uracil in DNA — FALSE: in DNA, adenine pairs with THYMINE (2 H-bonds); adenine pairs with uracil only in RNA; thymine is the DNA-specific base',
        'G-C pairs are weaker than A-T pairs because G and C are smaller — FALSE: G≡C base pairs form 3 hydrogen bonds, making them STRONGER than A=T base pairs (2 H-bonds); G-C content increases melting temperature',
        'The two DNA strands are parallel (both running 5\'→3\') — FALSE: the strands are ANTIPARALLEL; one strand runs 5\'→3\' and the complementary strand runs 3\'→5\'; this is required for complementary base pairing'
    ],
    'DNA vs RNA': [
        'RNA contains thymine as one of its bases — FALSE: RNA uses URACIL instead of thymine; thymine is DNA-specific; uracil is chemically identical to thymine minus a methyl group',
        'DNA is double-stranded and RNA is always single-stranded — OVERSIMPLIFICATION: DNA is predominantly double-stranded (with the exception of some viruses); RNA is predominantly single-stranded but forms extensive secondary structures (hairpins, loops) and some viruses have double-stranded RNA genomes',
        'RNA is less important than DNA because it is temporary — FALSE: without RNA (mRNA for translation, tRNA for amino acid delivery, rRNA as the catalytic core of ribosomes), no protein could be made; RNA is the functional intermediary between genetic information and biological action'
    ],
    'Nucleotide Structure': [
        'ATP is not a nucleotide — FALSE: ATP (adenosine triphosphate) is a nucleotide — it consists of adenine (base) + ribose (sugar) + three phosphate groups; it is both an energy currency and a component of RNA',
        'The phosphate group of a nucleotide is found between the bases — FALSE: phosphate groups are part of the sugar-phosphate BACKBONE of the nucleic acid; the bases project inward (DNA) or are exposed (RNA) from the backbone'
    ]
},

waterAndBonding: {
    'Hydrogen Bonding': [
        'Hydrogen bonds are strong bonds like covalent bonds — FALSE: individual hydrogen bonds are weak (approximately 20 kJ/mol vs ~350 kJ/mol for a C-C covalent bond); their biological importance comes from their large NUMBER and cooperative nature — DNA, proteins, and water all exploit multiple simultaneous H-bonds',
        'Water molecules form hydrogen bonds only with other water molecules — FALSE: water forms hydrogen bonds with any polar molecule or charged group containing N-H or O-H bonds, or lone pairs on O or N — this is why water is such a powerful biological solvent'
    ],
    'Hydrophobic Effect': [
        'Hydrophobic molecules repel water — FALSE: hydrophobic molecules do not repel water; they simply cannot form hydrogen bonds; their exclusion from water is driven by the thermodynamic advantage of water molecules forming H-bonds with each other rather than forming a cage around the hydrophobic molecule',
        'Oil floats on water because it is lighter — INCOMPLETE: while many oils are less dense than water, the primary reason for phase separation is immiscibility — the hydrophobic effect causes oil and water to minimise the contact surface area; density difference causes which phase floats on top, but immiscibility is the cause of phase separation'
    ]
},



cellBasics: {
    'Cell Theory': [
        'Viruses are cells — FALSE: viruses are acellular; they cannot carry out metabolism independently and require a host cell for replication; they are not covered by cell theory',
        'Cell theory means all cells are the same — FALSE: cell theory states that cells are the basic unit of life, not that they are uniform; cells are enormously diverse in structure and function',
        'Cells are too small to see — IMPRECISE: most cells are visible under a light microscope at ×400 magnification; some cells (e.g. egg cells, Paramecium) are visible to the naked eye'
    ],
    'Cell Size and SA:V': [
        'Larger cells are always better because they contain more organelles — FALSE: beyond a critical size, the SA:V ratio becomes too low to supply the cell with sufficient nutrients and remove waste quickly enough',
        'SA:V ratio increases as cell size increases — FALSE: SA:V = 3/r for a sphere; as radius (r) increases, SA:V decreases — students frequently invert this relationship',
        'Microvilli increase cell volume — FALSE: microvilli are membrane extensions that increase surface area; they do not significantly increase cell volume — this is precisely their functional advantage'
    ],
    'Cell Fractionation': [
        'Differential centrifugation separates organelles by their function — FALSE: it separates by size and density; functional identity is confirmed by biochemical assays after separation',
        'The highest centrifugation speed produces the purest fraction — OVERSIMPLIFICATION: high-speed fractions still contain mixed organelles of similar size; density gradient centrifugation is needed for pure fractions',
        'Homogenisation destroys cells and their contents — PARTIALLY FALSE: homogenisation disrupts the plasma membrane to release organelles, but organelles themselves remain intact if conditions (isotonic buffer, cold temperature) are correct'
    ]
},

membraneStructure: {
    'Membrane Composition': [
        'The cell membrane is just a fat layer — OVERSIMPLIFICATION: the plasma membrane is a phospholipid bilayer with embedded proteins constituting ~50% of membrane mass; cholesterol, glycolipids, and glycoproteins are also essential components',
        'The outer and inner leaflets of the bilayer have the same composition — FALSE: glycolipids and glycoproteins are exclusively on the outer (extracellular) leaflet; phosphatidylserine is predominantly on the inner leaflet — this asymmetry is functionally critical',
        'Membrane proteins are on the surface of the bilayer — FALSE: integral proteins span the bilayer; peripheral proteins attach to the surface; both categories have distinct roles that depend on their position'
    ],
    'Membrane Fluidity': [
        'Fluid membranes are liquid like water — IMPRECISE: membrane fluidity refers to lateral movement within the plane of the bilayer, not random movement in three dimensions; lipids rarely flip between leaflets (flip-flop) without enzymes',
        'Higher temperature always damages the membrane — FALSE: higher temperature increases fluidity, which the cell compensates for; it is only extreme heat causing denaturation of membrane proteins that is damaging',
        'Saturated fatty acids make the membrane more fluid — FALSE: saturated fatty acids pack tightly together (straight chains), reducing fluidity; unsaturated fatty acids introduce kinks that prevent tight packing, increasing fluidity',
        'Cholesterol always increases membrane fluidity — FALSE: cholesterol acts as a fluidity buffer — at low temperatures it prevents excessive rigidity; at high temperatures it prevents excessive fluidity; its net effect depends on conditions'
    ],
    'Transport Mechanisms': [
        'Osmosis requires a carrier protein — FALSE: osmosis is the movement of water molecules down their water potential gradient; water can cross the lipid bilayer by simple diffusion, though aquaporins increase the rate dramatically',
        'Active transport always moves substances from low to high concentration — IMPRECISE: the defining criterion of active transport is energy expenditure (ATP), not concentration direction — but the transported molecule typically moves against its electrochemical gradient',
        'Diffusion requires a concentration gradient on both sides of the membrane — IMPRECISE: diffusion requires a concentration gradient across the membrane; molecules move from high concentration on one side to low concentration on the other side'
    ]
},

organelleFunction: {
    'Organelle Identification': [
        'Ribosomes are membrane-bound organelles — FALSE: ribosomes are non-membrane-bound ribonucleoprotein complexes; this distinction is important for antibiotic selectivity and cell fractionation',
        'The nucleus is enclosed by a single membrane — FALSE: the nuclear envelope consists of two lipid bilayers (inner and outer), giving four lipid layers total; the outer membrane is continuous with the rough ER',
        'Lysosomes are found in plant cells in the same form as in animal cells — IMPRECISE: plant cells use the vacuole (with its own hydrolytic enzymes) for degradation; distinct animal-type lysosomes are less prominent or absent in most plant cells'
    ],
    'Secretory Pathway': [
        'Proteins are modified in the ER only — FALSE: initial modifications (signal peptide cleavage, N-linked glycosylation, disulfide bond formation) occur in the ER, but further modifications (O-linked glycosylation, proteolytic processing, sorting) occur in the Golgi',
        'The Golgi apparatus receives vesicles from its trans face — FALSE: the Golgi receives incoming vesicles at its cis face (facing the ER) and ships outgoing vesicles from its trans face (facing the plasma membrane)',
        'All proteins synthesised by ribosomes enter the secretory pathway — FALSE: only proteins with a signal peptide are co-translationally inserted into the ER; the majority of cellular proteins are synthesised by free ribosomes in the cytosol and remain cytoplasmic'
    ],
    'Mitochondria and Chloroplasts': [
        'Mitochondria produce oxygen — FALSE: mitochondria CONSUME oxygen in the electron transport chain; it is chloroplasts that produce oxygen as a byproduct of the light-dependent reactions of photosynthesis',
        'Photosynthesis occurs throughout the chloroplast equally — FALSE: the light-dependent reactions occur in the thylakoid membranes (grana); the Calvin cycle (light-independent reactions) occurs in the stroma',
        'Mitochondria have one membrane — FALSE: mitochondria have two membranes (outer and inner); the inner membrane is folded into cristae and is the site of the electron transport chain and ATP synthase'
    ]
},

prokaryoteVsEukaryote: {
    'Structural Differences': [
        'Prokaryotes have no organelles at all — OVERSIMPLIFICATION: prokaryotes have no membrane-bound organelles, but they have ribosomes (non-membrane-bound), and some have internal membrane systems (e.g. thylakoid-like membranes in photosynthetic bacteria)',
        'The prokaryotic cell wall is the same as the plant cell wall — FALSE: bacterial cell walls are composed of peptidoglycan; plant cell walls are composed of cellulose; these are chemically distinct and the difference is clinically exploited by antibiotics',
        'Prokaryotes do not have DNA — FALSE: prokaryotes have a circular chromosome in the nucleoid region and often additional plasmids; they lack a membrane-bound nucleus, but DNA is present'
    ],
    'Antibiotic Selectivity': [
        'All antibiotics are safe for human cells because they target bacteria — FALSE: some antibiotics (e.g. aminoglycosides, chloramphenicol) can damage mitochondria in human cells because mitochondria retain prokaryotic features (70S ribosomes) from their endosymbiotic origin',
        'Larger ribosome size means higher activity — FALSE: ribosome size (70S vs 80S) reflects evolutionary origin and structure, not speed or activity; both function at similar rates in their respective cellular contexts',
        'Prokaryotes cannot develop resistance to antibiotics because they have no nucleus for storing resistance genes — FALSE: resistance genes are carried on plasmids in the cytoplasm and can be transferred between bacteria by conjugation (horizontal gene transfer) without requiring a nucleus'
    ]
},

cellTransport: {
    'Osmosis': [
        'Osmosis moves solutes across the membrane — FALSE: osmosis is the movement of WATER molecules across a selectively permeable membrane down the water potential gradient; solutes do not move in osmosis (unless there is a separate transport mechanism)',
        'Cells placed in pure water always burst — FALSE: plant cells with a rigid cell wall resist bursting — water enters by osmosis, creating turgor pressure that is counteracted by the cell wall; only animal cells and other cells without a wall lyse (crenate in hypertonic solutions)',
        'Water always moves toward higher solute concentration — IMPRECISE but directionally correct: water moves toward lower water potential, which is generally toward higher solute concentration; but water potential also has a pressure component (Ψp) that can override the solute component in plant cells with cell walls'
    ],
    'Active vs Passive Transport': [
        'Facilitated diffusion is a form of active transport because it uses a protein — FALSE: facilitated diffusion uses a protein channel or carrier but does not require energy (ATP); it moves substances DOWN their concentration gradient — it is passive transport',
        'Co-transport is passive because it uses a gradient rather than ATP directly — FALSE: the gradient exploited by co-transporters is created and maintained by ATP-consuming pumps (e.g. Na⁺/K⁺-ATPase); energy is consumed indirectly — the overall process is secondary active transport',
        'Endocytosis is not transport because it does not move individual molecules — FALSE: endocytosis moves large molecules, particles, and even microorganisms across the plasma membrane — it is a form of vesicular transport and is energy-dependent'
    ]
},


bioenergeticsBasics: {
    'Thermodynamics': [
        "ΔG°' determines whether a reaction proceeds in a cell — INCORRECT: ΔG (actual, not standard) determines spontaneity; intracellular concentrations far from standard conditions can make ΔG°' positive reactions proceed spontaneously in vivo",
        "Exergonic reactions always proceed spontaneously — OVERSIMPLIFICATION: even exergonic reactions require activation energy; enzymes are needed to reach a usable rate, and kinetic barriers can prevent thermodynamically favourable reactions without a catalyst",
        "Energy-releasing reactions produce ATP — INCORRECT: ATP production requires specific coupled enzymatic steps (substrate-level or oxidative phosphorylation); free energy release does not automatically result in ATP unless the machinery is present",
        "Cells can create energy — FALSE: cells cannot create or destroy energy; they transform it — converting chemical energy in nutrients to the chemical energy of ATP, with heat as the unavoidable by-product (second law of thermodynamics)"
    ],
    'ATP': [
        "ATP stores a lot of energy in its bonds — IMPRECISE: ATP does not store especially large amounts of energy; what makes it useful is the coupling mechanism — the moderate, reliable release of ~30–50 kJ/mol that is matched to the energy needs of cellular reactions, not an unusually large amount",
        "ATP is the cell's long-term energy store — FALSE: ATP is a short-term, immediate energy currency; glycogen and lipids are long-term stores; the entire ATP pool is recycled hundreds of times per day",
        "Hydrolysing ATP releases a fixed −30.5 kJ/mol in all contexts — FALSE: the actual ΔG of ATP hydrolysis in the cell is approximately −50 to −60 kJ/mol due to low [ADP] and [Pᵢ] relative to standard conditions"
    ]
},

glycolysis: {
    'Net Yield': [
        "Glycolysis produces 4 ATP per glucose — PARTIALLY CORRECT but misleading: 4 ATP are produced gross, but 2 ATP are consumed in the investment phase — the correct answer is a NET yield of 2 ATP",
        "Glycolysis requires oxygen — FALSE: glycolysis is entirely anaerobic; it occurs in the cytoplasm with no mitochondrial involvement and no O₂ requirement; this is why it is evolutionarily ancient and universal",
        "Glycolysis produces CO₂ — FALSE: CO₂ is released in pyruvate oxidation and the TCA cycle, not in glycolysis; the carbons of glucose are preserved in pyruvate"
    ],
    'Regulation': [
        "Hexokinase is the main regulatory enzyme of glycolysis — INCORRECT: PFK-1 is the key rate-limiting regulatory step; hexokinase is regulated by product inhibition but does not integrate cellular energy signals the way PFK-1 does",
        "High ATP means the cell needs more energy, so glycolysis accelerates — INVERTED: high ATP signals energy sufficiency, inhibiting PFK-1 and slowing glycolysis; low ATP/high AMP signals energy demand, activating PFK-1",
        "Fermentation produces more ATP than glycolysis — FALSE: fermentation produces no additional ATP; its sole purpose is to regenerate NAD⁺ so that glycolysis can continue to produce its 2 ATP per glucose"
    ]
},

citricAcidCycle: {
    'ATP Production': [
        "The TCA cycle produces most of the cell's ATP — FALSE: the TCA cycle produces GTP directly (equivalent to ATP) but its primary output is electron carriers (NADH and FADH₂); the vast majority of ATP is produced later by oxidative phosphorylation using these carriers",
        "The TCA cycle runs once per glucose — INCORRECT: two acetyl-CoA molecules are produced per glucose, so the cycle turns twice per glucose — all outputs must be doubled when accounting from glucose",
        "CO₂ is released in glycolysis — FALSE: CO₂ is released only during pyruvate oxidation (1 CO₂ per pyruvate) and the TCA cycle (2 CO₂ per acetyl-CoA); glycolysis preserves all 6 carbons in 2 pyruvates"
    ],
    'Oxygen Use': [
        "Oxygen is directly used in the TCA cycle — FALSE: the TCA cycle is anaerobic with respect to O₂; O₂ does not participate directly; however, the TCA cycle depends on the ETC to reoxidise NADH and FADH₂ — without O₂ (for the ETC), the TCA cycle slows due to accumulation of reduced carriers",
        "The TCA cycle is a simple circular pathway with no regulatory complexity — FALSE: citrate synthase, isocitrate dehydrogenase, and α-ketoglutarate dehydrogenase are all highly regulated by energy charge, substrate availability, and product accumulation"
    ]
},

oxidativePhosphorylation: {
    'ATP Yield': [
        "Aerobic respiration produces 36–38 ATP per glucose — OUTDATED: this value is based on P/O ratios of 3 for NADH and 2 for FADH₂, which are now known to be incorrect; modern H⁺/ATP ratios of ATP synthase (~4 H⁺/ATP) and corrected proton pumping stoichiometry give ~2.5 ATP/NADH and ~1.5 ATP/FADH₂, yielding ~30–32 ATP per glucose",
        "FADH₂ produces fewer ATP than NADH because it is a weaker molecule — MECHANISTICALLY INCORRECT: FADH₂ yields fewer ATP because it donates electrons at Complex II, bypassing Complex I, so fewer protons are pumped; the 'weakness' is about entry point, not molecular energy content per se",
        "Substrate-level phosphorylation produces most of the cell's ATP — FALSE: substrate-level phosphorylation yields only 4 ATP per glucose (2 from glycolysis, 2 GTP from TCA); approximately 26–28 ATP come from oxidative phosphorylation"
    ],
    'Mechanism': [
        "Electrons are directly transferred to ATP synthase to make ATP — FALSE: electron transfer and ATP synthesis are not directly coupled; the proton gradient (proton-motive force) is the intermediate; electrons pump protons, protons drive ATP synthase — these are two separate processes",
        "Cyanide blocks ATP synthesis by directly inhibiting ATP synthase — INCORRECT: cyanide inhibits Complex IV, blocking electron transfer to O₂; this collapses the proton gradient, which then stops ATP synthase; the inhibition of ATP synthase is indirect",
        "Uncouplers directly inhibit ATP synthase — FALSE: uncouplers allow protons to bypass ATP synthase by providing an alternative membrane-crossing pathway; ATP synthase itself remains intact but receives no driving force (the gradient is dissipated)"
    ]
},

photosynthesis: {
    'Oxygen Source': [
        "O₂ in photosynthesis comes from CO₂ — FALSE: O₂ comes from the oxidation of water (H₂O) at Photosystem II; this was definitively shown by Ruben and Kamen (1941) using ¹⁸O-labelled water and CO₂",
        "More CO₂ always means more photosynthesis — OVERSIMPLIFICATION: CO₂ is a limiting factor only when light, water, and temperature are not limiting; at high temperatures, increased photorespiration by RuBisCO can actually reduce net CO₂ fixation despite high [CO₂]",
        "Photosynthesis only occurs in the light — FALSE for the full process: the light-dependent reactions require light, but the Calvin cycle (light-independent reactions) can proceed in the dark if ATP and NADPH are available; the term 'dark reactions' is misleading"
    ],
    'Photosystems': [
        "Photosystem I comes before Photosystem II in the light reactions — FALSE: Photosystem II acts first in the Z-scheme (absorbs light, oxidises water, passes electrons to PQ); Photosystem I acts second (receives electrons from plastocyanin, reduces NADP⁺); the numbering reflects discovery order, not functional order",
        "Chlorophyll is the only photosynthetic pigment — FALSE: accessory pigments (carotenoids, xanthophylls, phycobilins) form antenna complexes that absorb different wavelengths and funnel energy to the reaction centres — they greatly expand the range of usable light",
        "The Calvin cycle directly uses light — FALSE: the Calvin cycle uses the chemical energy products of the light reactions (ATP and NADPH), not light itself; its enzymes are regulated by light-generated signals but do not absorb photons"
    ]
},

atp: {
    'Energy Currency': [
        "ATP stores energy in its 'high-energy bonds' as a special type of bond — MISLEADING: the phosphoanhydride bonds are not intrinsically 'high energy'; the large negative ΔG of hydrolysis arises from resonance stabilisation of products, electrostatic repulsion relief, and increased entropy — not from a special type of bond",
        "ATP is made only in mitochondria — FALSE: ATP is made in the cytoplasm (glycolysis via substrate-level phosphorylation), in mitochondria (oxidative phosphorylation), and in chloroplasts (photophosphorylation); substrate-level phosphorylation occurs wherever glycolytic and TCA enzymes are present",
        "Cells maintain a large reserve of ATP — FALSE: the total ATP pool in a cell is very small and would be exhausted in seconds without continuous regeneration; cells do not store ATP — they regenerate it continuously from ADP and Pᵢ"
    ]
},

const EndSection6 = "close"