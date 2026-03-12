class ChemistrySvgDiagrams {

  // ─── 1. TITRATION APPARATUS — LABELLED SETUP DIAGRAM ─────────────────────────
  // Shows a standard acid-base titration setup with:
  //   • Burette (with graduation markings and stopcock) clamped to retort stand
  //   • Conical (Erlenmeyer) flask below with solution and indicator colour
  //   • White tile beneath the flask
  //   • Clamp and boss on retort stand
  //   • Labels: burette, solution in burette, stopcock, conical flask,
  //             analyte + indicator, white tile, retort stand, clamp
  //   • Volume markings on burette (0–50 mL)
  //   • Dropper showing titre drop falling into flask
  static titrationApparatusLabelledSetupDiagramsvg = `<?xml version="1.0" encoding="utf-8"?>
<svg version="1.1" xmlns="http://www.w3.org/2000/svg"
     width="800px" height="800px" viewBox="0 0 560 620">

  <!-- Title -->
  <text x="90" y="24" font-family="Georgia,serif" font-size="14" font-weight="bold" fill="#000">Titration Apparatus — Labelled Setup</text>
  <text x="100" y="40" font-family="Georgia,serif" font-size="10" fill="#444">Standard acid-base titration: burette delivering titrant into analyte solution</text>

  <!-- ══ RETORT STAND ══ -->
  <!-- Base plate -->
  <rect x="310" y="545" width="160" height="18" rx="4" fill="#64748b" stroke="#334155" stroke-width="2"/>
  <!-- Vertical rod -->
  <rect x="385" y="80" width="12" height="468" rx="3" fill="#94a3b8" stroke="#64748b" stroke-width="1.5"/>

  <!-- Clamp arm (horizontal bar) -->
  <rect x="280" y="140" width="108" height="14" rx="3" fill="#64748b" stroke="#334155" stroke-width="1.5"/>
  <!-- Boss head (clamp attachment block) -->
  <rect x="378" y="132" width="22" height="30" rx="3" fill="#475569" stroke="#334155" stroke-width="1.5"/>

  <!-- ══ BURETTE ══ -->
  <!-- Main burette tube (tall thin rectangle) -->
  <rect x="216" y="100" width="26" height="340" rx="3"
        fill="#dbeafe" fill-opacity="0.6" stroke="#1e40af" stroke-width="2.5"/>
  <!-- Solution fill inside burette (NaOH coloured pale orange) -->
  <rect x="218" y="102" width="22" height="200" rx="2" fill="#fed7aa" fill-opacity="0.7"/>
  <!-- Meniscus curve at solution bottom (y=302) -->
  <path d="M218,302 Q229,310 240,302" fill="#fed7aa" fill-opacity="0.7" stroke="#f97316" stroke-width="1"/>

  <!-- Graduation marks on burette -->
  <!-- 0 at top (y=110), 50 at bottom (y=430), each 10mL = 64px -->
  <line x1="242" y1="110" x2="248" y2="110" stroke="#1e40af" stroke-width="1.5"/>
  <text x="251" y="114" font-family="Georgia,serif" font-size="9" fill="#1e40af">0</text>
  <line x1="242" y1="142" x2="248" y2="142" stroke="#1e40af" stroke-width="1.5"/>
  <text x="251" y="146" font-family="Georgia,serif" font-size="9" fill="#1e40af">5</text>
  <line x1="242" y1="174" x2="250" y2="174" stroke="#1e40af" stroke-width="1.8"/>
  <text x="251" y="178" font-family="Georgia,serif" font-size="9" fill="#1e40af">10</text>
  <line x1="242" y1="206" x2="248" y2="206" stroke="#1e40af" stroke-width="1.5"/>
  <text x="251" y="210" font-family="Georgia,serif" font-size="9" fill="#1e40af">15</text>
  <line x1="242" y1="238" x2="250" y2="238" stroke="#1e40af" stroke-width="1.8"/>
  <text x="251" y="242" font-family="Georgia,serif" font-size="9" fill="#1e40af">20</text>
  <line x1="242" y1="270" x2="248" y2="270" stroke="#1e40af" stroke-width="1.5"/>
  <text x="251" y="274" font-family="Georgia,serif" font-size="9" fill="#1e40af">25</text>
  <line x1="242" y1="302" x2="250" y2="302" stroke="#1e40af" stroke-width="1.8"/>
  <text x="251" y="306" font-family="Georgia,serif" font-size="9" fill="#1e40af">30</text>
  <line x1="242" y1="334" x2="248" y2="334" stroke="#1e40af" stroke-width="1.5"/>
  <text x="251" y="338" font-family="Georgia,serif" font-size="9" fill="#1e40af">35</text>
  <line x1="242" y1="366" x2="250" y2="366" stroke="#1e40af" stroke-width="1.8"/>
  <text x="251" y="370" font-family="Georgia,serif" font-size="9" fill="#1e40af">40</text>
  <line x1="242" y1="398" x2="248" y2="398" stroke="#1e40af" stroke-width="1.5"/>
  <text x="251" y="402" font-family="Georgia,serif" font-size="9" fill="#1e40af">45</text>
  <line x1="242" y1="430" x2="250" y2="430" stroke="#1e40af" stroke-width="1.8"/>
  <text x="251" y="434" font-family="Georgia,serif" font-size="9" fill="#1e40af">50</text>

  <!-- Minor tick marks every 1mL (every 6.4px) — abbreviated set -->
  <line x1="242" y1="116" x2="246" y2="116" stroke="#1e40af" stroke-width="1"/>
  <line x1="242" y1="122" x2="246" y2="122" stroke="#1e40af" stroke-width="1"/>
  <line x1="242" y1="128" x2="246" y2="128" stroke="#1e40af" stroke-width="1"/>
  <line x1="242" y1="134" x2="246" y2="134" stroke="#1e40af" stroke-width="1"/>
  <line x1="242" y1="148" x2="246" y2="148" stroke="#1e40af" stroke-width="1"/>
  <line x1="242" y1="154" x2="246" y2="154" stroke="#1e40af" stroke-width="1"/>
  <line x1="242" y1="160" x2="246" y2="160" stroke="#1e40af" stroke-width="1"/>
  <line x1="242" y1="166" x2="246" y2="166" stroke="#1e40af" stroke-width="1"/>

  <!-- Burette top cap -->
  <rect x="212" y="94" width="34" height="10" rx="3" fill="#1e40af" stroke="#1e3a8a" stroke-width="1.5"/>

  <!-- Narrow tip below burette main tube -->
  <rect x="225" y="440" width="8" height="30" rx="2" fill="#94a3b8" stroke="#475569" stroke-width="1.5"/>

  <!-- Stopcock (horizontal oval at y=440) -->
  <ellipse cx="229" cy="444" rx="18" ry="8" fill="#64748b" stroke="#334155" stroke-width="2"/>
  <!-- Stopcock handle (rotated rectangle) -->
  <rect x="229" y="436" width="32" height="6" rx="3" fill="#334155" stroke="#1e293b" stroke-width="1"
        transform="rotate(-30,229,439)"/>

  <!-- Tip drop of titrant falling -->
  <ellipse cx="229" cy="477" rx="3" ry="4" fill="#f97316" fill-opacity="0.85"/>
  <!-- Falling streak -->
  <line x1="229" y1="471" x2="229" y2="477" stroke="#f97316" stroke-width="1.5" stroke-dasharray="2,2"/>

  <!-- Clamp holding burette -->
  <rect x="240" y="148" width="42" height="20" rx="3" fill="#475569" fill-opacity="0.7" stroke="#334155" stroke-width="1.5"/>

  <!-- ══ CONICAL FLASK (Erlenmeyer) ══ -->
  <!-- Flask body — trapezoid shape approximation using polygon -->
  <!-- Neck: narrow top at x=205–253, y=492–516; body widens to x=150–310, y=520–560 -->
  <!-- Neck -->
  <rect x="208" y="486" width="42" height="30" rx="2" fill="#dbeafe" fill-opacity="0.5" stroke="#1e40af" stroke-width="2"/>
  <!-- Flask body trapezoid -->
  <polygon points="208,514 250,514 310,570 148,570"
           fill="#bbf7d0" fill-opacity="0.55" stroke="#15803d" stroke-width="2.5"/>
  <!-- Solution inside flask (pink-purple for phenolphthalein endpoint) -->
  <polygon points="155,570 305,570 302,548 158,548"
           fill="#f9a8d4" fill-opacity="0.65"/>
  <!-- Swirl / mixing hint inside -->
  <path d="M200,555 Q215,545 230,555 Q215,565 200,555" fill="none" stroke="#db2777" stroke-width="1.5" stroke-opacity="0.6"/>
  <!-- Flask stopper rim detail -->
  <rect x="206" y="482" width="46" height="8" rx="3" fill="#bfdbfe" stroke="#1e40af" stroke-width="1.5"/>

  <!-- ══ WHITE TILE ══ -->
  <rect x="140" y="570" width="178" height="18" rx="2" fill="#f1f5f9" stroke="#94a3b8" stroke-width="2"/>
  <text x="192" y="583" font-family="Georgia,serif" font-size="9" fill="#64748b">white tile</text>

  <!-- ══ LABELS with leader lines ══ -->

  <!-- Label: Burette -->
  <line x1="214" y1="150" x2="90" y2="140" stroke="#666" stroke-width="1" stroke-dasharray="3,2"/>
  <text x="10" y="136" font-family="Georgia,serif" font-size="11" font-weight="bold" fill="#1e40af">Burette</text>
  <text x="10" y="149" font-family="Georgia,serif" font-size="9" fill="#555">(50 mL, glass)</text>

  <!-- Label: Titrant solution in burette -->
  <line x1="240" y1="200" x2="330" y2="185" stroke="#666" stroke-width="1" stroke-dasharray="3,2"/>
  <text x="332" y="181" font-family="Georgia,serif" font-size="11" font-weight="bold" fill="#f97316">Titrant</text>
  <text x="332" y="194" font-family="Georgia,serif" font-size="9" fill="#555">(e.g. NaOH solution)</text>

  <!-- Label: Stopcock -->
  <line x1="247" y1="444" x2="330" y2="444" stroke="#666" stroke-width="1" stroke-dasharray="3,2"/>
  <text x="332" y="440" font-family="Georgia,serif" font-size="11" font-weight="bold" fill="#334155">Stopcock</text>
  <text x="332" y="453" font-family="Georgia,serif" font-size="9" fill="#555">(controls flow rate)</text>

  <!-- Label: Falling drop -->
  <line x1="232" y1="477" x2="330" y2="477" stroke="#666" stroke-width="1" stroke-dasharray="3,2"/>
  <text x="332" y="473" font-family="Georgia,serif" font-size="11" font-weight="bold" fill="#f97316">Titre drop</text>
  <text x="332" y="486" font-family="Georgia,serif" font-size="9" fill="#555">(half-drop at endpoint)</text>

  <!-- Label: Conical flask -->
  <line x1="148" y1="545" x2="60" y2="530" stroke="#666" stroke-width="1" stroke-dasharray="3,2"/>
  <text x="6" y="526" font-family="Georgia,serif" font-size="11" font-weight="bold" fill="#15803d">Conical flask</text>
  <text x="6" y="539" font-family="Georgia,serif" font-size="9" fill="#555">(Erlenmeyer, 250 mL)</text>

  <!-- Label: Analyte + indicator -->
  <line x1="155" y1="560" x2="60" y2="568" stroke="#666" stroke-width="1" stroke-dasharray="3,2"/>
  <text x="6" y="565" font-family="Georgia,serif" font-size="11" font-weight="bold" fill="#db2777">Analyte</text>
  <text x="6" y="578" font-family="Georgia,serif" font-size="9" fill="#555">+ phenolphthalein</text>
  <text x="6" y="590" font-family="Georgia,serif" font-size="9" fill="#555">indicator (pink = EP)</text>

  <!-- Label: Retort stand rod -->
  <line x1="397" y1="300" x2="450" y2="290" stroke="#666" stroke-width="1" stroke-dasharray="3,2"/>
  <text x="453" y="286" font-family="Georgia,serif" font-size="11" font-weight="bold" fill="#64748b">Retort stand</text>
  <text x="453" y="299" font-family="Georgia,serif" font-size="9" fill="#555">(support rod)</text>

  <!-- Label: Clamp -->
  <line x1="282" y1="158" x2="230" y2="130" stroke="#666" stroke-width="1" stroke-dasharray="3,2"/>
  <text x="140" y="126" font-family="Georgia,serif" font-size="11" font-weight="bold" fill="#475569">Clamp &amp; boss</text>

  <!-- Label: Retort base -->
  <line x1="390" y1="551" x2="450" y2="551" stroke="#666" stroke-width="1" stroke-dasharray="3,2"/>
  <text x="453" y="555" font-family="Georgia,serif" font-size="11" font-weight="bold" fill="#64748b">Base</text>

  <!-- ── Info box ── -->
  <rect x="30" y="60" width="270" height="58" rx="5" fill="none" stroke="#000" stroke-width="1.8" stroke-dasharray="5,3"/>
  <text x="40" y="78" font-family="Georgia,serif" font-size="11" font-weight="bold" fill="#000">Titration Equation (example):</text>
  <text x="40" y="94" font-family="Georgia,serif" font-size="11" fill="#000">NaOH + HCl → NaCl + H₂O</text>
  <text x="40" y="108" font-family="Georgia,serif" font-size="10" fill="#555">c(acid) = n(base) × V(base) / V(acid)</text>

</svg>`;

  // ─── 2. ATOMIC STRUCTURE — SHELL CONFIGURATION DIAGRAM ───────────────────────
  // Shows Bohr model of electron shells for a representative atom (Sodium, Na, Z=11):
  //   • Nucleus at centre (protons + neutrons labelled)
  //   • Electron shells K(2), L(8), M(1) as concentric circles
  //   • Electrons as dots on each shell with count labels
  //   • Shell names (K, L, M) and principal quantum number (n=1,2,3)
  //   • Electron configuration notation: 2,8,1 and 1s²2s²2p⁶3s¹
  //   • Energy level arrow indicating increasing energy outward
  //   • Nuclear composition: 11p⁺, 12n⁰ label
  static atomicStructureShellConfigurationDiagramsvg = `<?xml version="1.0" encoding="utf-8"?>
<svg version="1.1" xmlns="http://www.w3.org/2000/svg"
     width="800px" height="800px" viewBox="0 0 560 560">

  <!-- Title -->
  <text x="100" y="24" font-family="Georgia,serif" font-size="14" font-weight="bold" fill="#000">Atomic Structure — Electron Shell Configuration</text>
  <text x="80" y="40" font-family="Georgia,serif" font-size="10" fill="#444">Bohr model for Sodium (Na, Z = 11): shell configuration 2, 8, 1</text>

  <!-- Centre of diagram at (280, 290) -->

  <!-- ══ ELECTRON SHELLS (concentric circles) ══ -->
  <!-- Shell M (n=3): radius 220 -->
  <circle cx="280" cy="290" r="220" fill="none" stroke="#7c3aed" stroke-width="1.8" stroke-dasharray="8,4"/>
  <!-- Shell L (n=2): radius 145 -->
  <circle cx="280" cy="290" r="145" fill="none" stroke="#1d4ed8" stroke-width="1.8" stroke-dasharray="8,4"/>
  <!-- Shell K (n=1): radius 75 -->
  <circle cx="280" cy="290" r="75" fill="none" stroke="#15803d" stroke-width="1.8" stroke-dasharray="8,4"/>

  <!-- ══ NUCLEUS ══ -->
  <circle cx="280" cy="290" r="38" fill="#fef3c7" stroke="#d97706" stroke-width="3"/>
  <text x="280" y="284" font-family="Georgia,serif" font-size="11" font-weight="bold" fill="#92400e" text-anchor="middle">11p⁺</text>
  <text x="280" y="298" font-family="Georgia,serif" font-size="11" fill="#92400e" text-anchor="middle">12n⁰</text>
  <text x="280" y="312" font-family="Georgia,serif" font-size="9" fill="#b45309" text-anchor="middle">nucleus</text>

  <!-- ══ SHELL K — 2 electrons at r=75 ══ -->
  <!-- e1 at 90° (top) -->
  <circle cx="280" cy="215" r="7" fill="#15803d" stroke="#14532d" stroke-width="1.5"/>
  <text x="291" y="211" font-family="Georgia,serif" font-size="9" fill="#14532d">e⁻</text>
  <!-- e2 at 270° (bottom) -->
  <circle cx="280" cy="365" r="7" fill="#15803d" stroke="#14532d" stroke-width="1.5"/>
  <text x="291" y="369" font-family="Georgia,serif" font-size="9" fill="#14532d">e⁻</text>

  <!-- Shell K label -->
  <text x="360" y="218" font-family="Georgia,serif" font-size="12" font-weight="bold" fill="#15803d">K shell</text>
  <text x="360" y="231" font-family="Georgia,serif" font-size="10" fill="#15803d">n = 1  (max 2e⁻)</text>
  <line x1="355" y1="216" x2="329" y2="240" stroke="#15803d" stroke-width="1" stroke-dasharray="3,2"/>

  <!-- ══ SHELL L — 8 electrons at r=145 ══ -->
  <!-- Evenly spaced at 45° intervals: 0°,45°,90°,135°,180°,225°,270°,315° -->
  <!-- 0°: (425,290) -->
  <circle cx="425" cy="290" r="7" fill="#1d4ed8" stroke="#1e3a8a" stroke-width="1.5"/>
  <!-- 45°: (280+145*cos45, 290-145*sin45) = (382.5, 187.5) -->
  <circle cx="383" cy="188" r="7" fill="#1d4ed8" stroke="#1e3a8a" stroke-width="1.5"/>
  <!-- 90°: (280,145) -->
  <circle cx="280" cy="145" r="7" fill="#1d4ed8" stroke="#1e3a8a" stroke-width="1.5"/>
  <!-- 135°: (177,188) -->
  <circle cx="177" cy="188" r="7" fill="#1d4ed8" stroke="#1e3a8a" stroke-width="1.5"/>
  <!-- 180°: (135,290) -->
  <circle cx="135" cy="290" r="7" fill="#1d4ed8" stroke="#1e3a8a" stroke-width="1.5"/>
  <!-- 225°: (177,392) -->
  <circle cx="177" cy="392" r="7" fill="#1d4ed8" stroke="#1e3a8a" stroke-width="1.5"/>
  <!-- 270°: (280,435) -->
  <circle cx="280" cy="435" r="7" fill="#1d4ed8" stroke="#1e3a8a" stroke-width="1.5"/>
  <!-- 315°: (383,392) -->
  <circle cx="383" cy="392" r="7" fill="#1d4ed8" stroke="#1e3a8a" stroke-width="1.5"/>

  <!-- Shell L label -->
  <text x="430" y="348" font-family="Georgia,serif" font-size="12" font-weight="bold" fill="#1d4ed8">L shell</text>
  <text x="430" y="361" font-family="Georgia,serif" font-size="10" fill="#1d4ed8">n = 2  (max 8e⁻)</text>
  <line x1="430" y1="345" x2="415" y2="310" stroke="#1d4ed8" stroke-width="1" stroke-dasharray="3,2"/>

  <!-- ══ SHELL M — 1 electron at r=220, placed at 45° ══ -->
  <!-- 45°: (280+220*0.707, 290-220*0.707) = (436, 134) -->
  <circle cx="436" cy="134" r="7" fill="#7c3aed" stroke="#5b21b6" stroke-width="1.5"/>
  <text x="446" y="130" font-family="Georgia,serif" font-size="9" fill="#5b21b6">e⁻ (valence)</text>

  <!-- Shell M label -->
  <text x="60" y="78" font-family="Georgia,serif" font-size="12" font-weight="bold" fill="#7c3aed">M shell</text>
  <text x="60" y="91" font-family="Georgia,serif" font-size="10" fill="#7c3aed">n = 3  (max 18e⁻)</text>
  <line x1="100" y1="92" x2="150" y2="120" stroke="#7c3aed" stroke-width="1" stroke-dasharray="3,2"/>

  <!-- ══ ENERGY LEVEL ARROW (radially outward) ══ -->
  <line x1="40" y1="480" x2="40" y2="120" stroke="#dc2626" stroke-width="2"/>
  <polygon points="35,124 40,110 45,124" fill="#dc2626"/>
  <text x="10" y="310" font-family="Georgia,serif" font-size="10" fill="#dc2626"
        transform="rotate(-90 22 300)">Energy increases →</text>

  <!-- ══ ELECTRON LABELS on each shell ══ -->
  <!-- K shell count -->
  <rect x="162" y="274" width="36" height="16" rx="3" fill="#dcfce7" stroke="#15803d" stroke-width="1"/>
  <text x="180" y="286" font-family="Georgia,serif" font-size="10" font-weight="bold" fill="#15803d" text-anchor="middle">2 e⁻</text>
  <!-- L shell count -->
  <rect x="262" y="274" width="36" height="16" rx="3" fill="#dbeafe" stroke="#1d4ed8" stroke-width="1"/>
  <text x="280" y="286" font-family="Georgia,serif" font-size="10" font-weight="bold" fill="#1d4ed8" text-anchor="middle">8 e⁻</text>
  <!-- M shell count via label already done above -->

  <!-- ══ ELECTRON CONFIGURATION BOX ══ -->
  <rect x="30" y="490" width="500" height="58" rx="5" fill="none" stroke="#000" stroke-width="1.8" stroke-dasharray="5,3"/>
  <text x="40" y="508" font-family="Georgia,serif" font-size="11" font-weight="bold" fill="#000">Electron Configuration of Na (Z = 11):</text>
  <text x="40" y="524" font-family="Georgia,serif" font-size="11" fill="#000">Shell notation:   K, L, M  →  2 , 8 , 1</text>
  <text x="40" y="540" font-family="Georgia,serif" font-size="11" fill="#000">Orbital notation: 1s² 2s² 2p⁶ 3s¹     Valence electrons: 1  (Group I)</text>

</svg>`;

  // ─── 3. ELECTROLYSIS — ANODE/CATHODE ION MIGRATION DIAGRAM ──────────────────
  // Shows electrolysis of copper(II) sulfate solution with:
  //   • Electrolytic cell (beaker) with electrolyte solution
  //   • Anode (+) on right, cathode (−) on left (carbon/copper electrodes)
  //   • External DC power supply (battery symbol) with + and − terminals
  //   • Cation (Cu²⁺) migration arrows toward cathode
  //   • Anion (SO₄²⁻) migration arrows toward anode
  //   • Electrode reactions labelled: Cu²⁺ + 2e⁻ → Cu (cathode); Cu → Cu²⁺ + 2e⁻ (anode)
  //   • Electron flow direction in external circuit
  //   • Conventional current direction annotation
  //   • Labels: electrolyte (CuSO₄aq), ions, electrodes, power supply
  static electrolysisAnodeCathodeIonMigrationDiagramsvg = `<?xml version="1.0" encoding="utf-8"?>
<svg version="1.1" xmlns="http://www.w3.org/2000/svg"
     width="800px" height="800px" viewBox="0 0 580 520">

  <!-- Title -->
  <text x="80" y="24" font-family="Georgia,serif" font-size="14" font-weight="bold" fill="#000">Electrolysis — Anode/Cathode &amp; Ion Migration</text>
  <text x="60" y="40" font-family="Georgia,serif" font-size="10" fill="#444">Electrolysis of CuSO₄(aq) — copper(II) sulfate solution</text>

  <!-- ══ BEAKER / ELECTROLYTIC CELL ══ -->
  <!-- Beaker outline (U-shape) -->
  <path d="M100,160 L100,420 Q100,440 120,440 L460,440 Q480,440 480,420 L480,160"
        fill="none" stroke="#334155" stroke-width="3" stroke-linejoin="round"/>
  <!-- Beaker lip top rim -->
  <line x1="88" y1="160" x2="492" y2="160" stroke="#334155" stroke-width="3"/>

  <!-- Electrolyte solution fill (light blue) -->
  <path d="M102,300 L102,418 Q102,436 120,436 L460,436 Q478,436 478,418 L478,300 Z"
        fill="#bae6fd" fill-opacity="0.45"/>
  <!-- Solution surface ripple -->
  <path d="M102,300 Q200,292 290,300 Q380,308 478,300" fill="none" stroke="#0ea5e9" stroke-width="1.5"/>

  <!-- Label electrolyte -->
  <text x="220" y="390" font-family="Georgia,serif" font-size="12" font-weight="bold" fill="#0369a1" text-anchor="middle">CuSO₄ (aq)</text>
  <text x="220" y="406" font-family="Georgia,serif" font-size="10" fill="#0369a1" text-anchor="middle">electrolyte solution</text>

  <!-- ══ CATHODE (−) — LEFT ELECTRODE ══ -->
  <!-- Electrode bar -->
  <rect x="148" y="155" width="16" height="270" rx="3" fill="#475569" stroke="#1e293b" stroke-width="2"/>
  <!-- Label -->
  <text x="156" y="148" font-family="Georgia,serif" font-size="13" font-weight="bold" fill="#1e40af" text-anchor="middle">CATHODE</text>
  <text x="156" y="136" font-family="Georgia,serif" font-size="14" font-weight="bold" fill="#1e40af" text-anchor="middle">(−)</text>
  <!-- Copper deposit (orange layer on cathode surface) -->
  <rect x="164" y="300" width="10" height="110" rx="2" fill="#f97316" fill-opacity="0.7"/>
  <text x="186" y="362" font-family="Georgia,serif" font-size="9" fill="#ea580c">Cu deposit</text>

  <!-- ══ ANODE (+) — RIGHT ELECTRODE ══ -->
  <rect x="416" y="155" width="16" height="270" rx="3" fill="#475569" stroke="#1e293b" stroke-width="2"/>
  <text x="424" y="148" font-family="Georgia,serif" font-size="13" font-weight="bold" fill="#dc2626" text-anchor="middle">ANODE</text>
  <text x="424" y="136" font-family="Georgia,serif" font-size="14" font-weight="bold" fill="#dc2626" text-anchor="middle">(+)</text>
  <!-- Oxidation bubbles / dissolution indication -->
  <circle cx="410" cy="340" r="5" fill="none" stroke="#dc2626" stroke-width="1.5"/>
  <circle cx="404" cy="320" r="4" fill="none" stroke="#dc2626" stroke-width="1.5"/>
  <circle cx="412" cy="305" r="3" fill="none" stroke="#dc2626" stroke-width="1.5"/>

  <!-- ══ ION MIGRATION ARROWS IN SOLUTION ══ -->
  <!-- Cu²⁺ cations moving LEFT toward cathode -->
  <!-- Arrow 1 -->
  <line x1="340" y1="340" x2="200" y2="340" stroke="#1d4ed8" stroke-width="2.5"/>
  <polygon points="204,335 190,340 204,345" fill="#1d4ed8"/>
  <text x="250" y="332" font-family="Georgia,serif" font-size="11" font-weight="bold" fill="#1d4ed8">Cu²⁺</text>
  <text x="252" y="358" font-family="Georgia,serif" font-size="9" fill="#1d4ed8">(cation → cathode)</text>
  <!-- Arrow 2 -->
  <line x1="380" y1="370" x2="220" y2="370" stroke="#1d4ed8" stroke-width="2" stroke-dasharray="6,3"/>
  <polygon points="224,365 210,370 224,375" fill="#1d4ed8"/>

  <!-- SO₄²⁻ anions moving RIGHT toward anode -->
  <!-- Arrow 1 -->
  <line x1="200" y1="310" x2="360" y2="310" stroke="#15803d" stroke-width="2.5"/>
  <polygon points="356,305 370,310 356,315" fill="#15803d"/>
  <text x="252" y="302" font-family="Georgia,serif" font-size="11" font-weight="bold" fill="#15803d">SO₄²⁻</text>
  <text x="248" y="322" font-family="Georgia,serif" font-size="9" fill="#15803d">(anion → anode)</text>
  <!-- Arrow 2 -->
  <line x1="180" y1="420" x2="380" y2="420" stroke="#15803d" stroke-width="2" stroke-dasharray="6,3"/>
  <polygon points="376,415 390,420 376,425" fill="#15803d"/>

  <!-- ══ EXTERNAL CIRCUIT — POWER SUPPLY (battery) ══ -->
  <!-- Wires from electrodes upward and across the top -->
  <!-- Left wire from cathode top -->
  <line x1="156" y1="155" x2="156" y2="90" stroke="#1e293b" stroke-width="3"/>
  <line x1="156" y1="90" x2="240" y2="90" stroke="#1e293b" stroke-width="3"/>
  <!-- Right wire from anode top -->
  <line x1="424" y1="155" x2="424" y2="90" stroke="#1e293b" stroke-width="3"/>
  <line x1="424" y1="90" x2="340" y2="90" stroke="#1e293b" stroke-width="3"/>

  <!-- Battery symbol: long thin line (+ terminal) and short thick line (− terminal) alternating -->
  <!-- Battery centred at x=290, y=90 -->
  <!-- Cell 1 -->
  <line x1="260" y1="76" x2="260" y2="104" stroke="#1e293b" stroke-width="5"/> <!-- − thick -->
  <line x1="270" y1="70" x2="270" y2="110" stroke="#1e293b" stroke-width="2"/> <!-- + thin -->
  <!-- Cell 2 -->
  <line x1="283" y1="76" x2="283" y2="104" stroke="#1e293b" stroke-width="5"/>
  <line x1="293" y1="70" x2="293" y2="110" stroke="#1e293b" stroke-width="2"/>
  <!-- Cell 3 -->
  <line x1="306" y1="76" x2="306" y2="104" stroke="#1e293b" stroke-width="5"/>
  <line x1="316" y1="70" x2="316" y2="110" stroke="#1e293b" stroke-width="2"/>
  <!-- Battery outline box -->
  <rect x="248" y="68" width="80" height="44" rx="4" fill="none" stroke="#64748b" stroke-width="1.5" stroke-dasharray="4,3"/>
  <!-- + and − labels on battery terminals -->
  <text x="237" y="88" font-family="Georgia,serif" font-size="13" font-weight="bold" fill="#1e40af">−</text>
  <text x="334" y="88" font-family="Georgia,serif" font-size="13" font-weight="bold" fill="#dc2626">+</text>
  <text x="272" y="62" font-family="Georgia,serif" font-size="10" fill="#334155">DC Power Supply</text>

  <!-- ELECTRON FLOW arrows on external wire (e⁻ flow from anode → power supply → cathode) -->
  <!-- Arrow on right wire: electrons from anode going UP and LEFT -->
  <polygon points="390,87 402,92 390,97" fill="#7c3aed"/>
  <text x="362" y="83" font-family="Georgia,serif" font-size="9" fill="#7c3aed">e⁻ →</text>
  <!-- Arrow on left wire: electrons going RIGHT and DOWN to cathode -->
  <polygon points="188,87 178,92 188,97" fill="#7c3aed"/>
  <text x="194" y="83" font-family="Georgia,serif" font-size="9" fill="#7c3aed">← e⁻</text>
  <!-- Electron flow overall label -->
  <text x="204" y="108" font-family="Georgia,serif" font-size="9" fill="#7c3aed">Electron flow (external circuit)</text>

  <!-- ══ ELECTRODE REACTION BOXES ══ -->
  <!-- Cathode reaction -->
  <rect x="30" y="200" width="108" height="48" rx="4" fill="#dbeafe" stroke="#1e40af" stroke-width="1.8"/>
  <text x="84" y="216" font-family="Georgia,serif" font-size="9" font-weight="bold" fill="#1e40af" text-anchor="middle">CATHODE (−)</text>
  <text x="84" y="228" font-family="Georgia,serif" font-size="9" fill="#1e40af" text-anchor="middle">Reduction:</text>
  <text x="84" y="242" font-family="Georgia,serif" font-size="9" fill="#1e40af" text-anchor="middle">Cu²⁺ + 2e⁻ → Cu</text>
  <line x1="138" y1="224" x2="148" y2="224" stroke="#1e40af" stroke-width="1.5" stroke-dasharray="3,2"/>

  <!-- Anode reaction -->
  <rect x="442" y="200" width="108" height="48" rx="4" fill="#fee2e2" stroke="#dc2626" stroke-width="1.8"/>
  <text x="496" y="216" font-family="Georgia,serif" font-size="9" font-weight="bold" fill="#dc2626" text-anchor="middle">ANODE (+)</text>
  <text x="496" y="228" font-family="Georgia,serif" font-size="9" fill="#dc2626" text-anchor="middle">Oxidation:</text>
  <text x="496" y="242" font-family="Georgia,serif" font-size="9" fill="#dc2626" text-anchor="middle">Cu → Cu²⁺ + 2e⁻</text>
  <line x1="432" y1="224" x2="442" y2="224" stroke="#dc2626" stroke-width="1.5" stroke-dasharray="3,2"/>

  <!-- ══ SUMMARY BOX ══ -->
  <rect x="30" y="458" width="520" height="50" rx="5" fill="none" stroke="#000" stroke-width="1.8" stroke-dasharray="5,3"/>
  <text x="40" y="474" font-family="Georgia,serif" font-size="11" font-weight="bold" fill="#000">Key rules: Cations (+) migrate to Cathode (−) | Anions (−) migrate to Anode (+)</text>
  <text x="40" y="490" font-family="Georgia,serif" font-size="10" fill="#555">Cathode: REDUCTION (gain e⁻) | Anode: OXIDATION (lose e⁻)   Mnemonic: OIL RIG / AN OX, RED CAT</text>

</svg>`;

  // ─── 4. HYDROCARBON REACTION TYPES — CROSS-REFERENCE TABLE DIAGRAM ───────────
  // Shows a structured visual cross-reference of organic reaction types for hydrocarbons:
  //   • Rows: Alkanes, Alkenes, Alkynes, Aromatic (benzene ring)
  //   • Columns: Combustion, Addition, Substitution, Polymerisation, Elimination
  //   • Tick (✓) / cross (✗) / partial (~) filled in each cell
  //   • Example reagents/conditions noted in key cells
  //   • Structural mini-formulae for each hydrocarbon class
  //   • Colour coding: green=occurs, red=does not occur, amber=limited
  //   • Reaction type icons / shorthand equations at column headers
  static hydrocarbonReactionTypesCrossReferenceTablesvg = `<?xml version="1.0" encoding="utf-8"?>
<svg version="1.1" xmlns="http://www.w3.org/2000/svg"
     width="800px" height="800px" viewBox="0 0 700 540">

  <!-- Title -->
  <text x="100" y="24" font-family="Georgia,serif" font-size="14" font-weight="bold" fill="#000">Hydrocarbon Reaction Types — Cross-Reference Table</text>
  <text x="80" y="40" font-family="Georgia,serif" font-size="10" fill="#444">Reaction feasibility by hydrocarbon class: ✓ occurs | ~ limited/special conditions | ✗ does not occur</text>

  <!-- ══ TABLE STRUCTURE ══ -->
  <!-- Column widths: Row header=130, each of 5 cols=106px; Total table width=130+530=660 -->
  <!-- Row heights: Header=70, each of 4 rows=90px -->

  <!-- === HEADER ROW === -->
  <rect x="30" y="55" width="130" height="70" fill="#1e293b" stroke="#0f172a" stroke-width="1.5"/>
  <text x="95" y="87" font-family="Georgia,serif" font-size="11" font-weight="bold" fill="#fff" text-anchor="middle">Hydrocarbon</text>
  <text x="95" y="101" font-family="Georgia,serif" font-size="11" font-weight="bold" fill="#fff" text-anchor="middle">Class</text>
  <text x="95" y="115" font-family="Georgia,serif" font-size="10" fill="#94a3b8" text-anchor="middle">→ Reaction type</text>

  <!-- Column headers -->
  <!-- Col 1: Combustion (x=160) -->
  <rect x="160" y="55" width="106" height="70" fill="#1e293b" stroke="#0f172a" stroke-width="1.5"/>
  <text x="213" y="84" font-family="Georgia,serif" font-size="11" font-weight="bold" fill="#f97316" text-anchor="middle">Combustion</text>
  <text x="213" y="98" font-family="Georgia,serif" font-size="9" fill="#fed7aa" text-anchor="middle">+ O₂ → CO₂ + H₂O</text>
  <text x="213" y="115" font-family="Georgia,serif" font-size="9" fill="#94a3b8" text-anchor="middle">(complete)</text>

  <!-- Col 2: Addition (x=266) -->
  <rect x="266" y="55" width="106" height="70" fill="#1e293b" stroke="#0f172a" stroke-width="1.5"/>
  <text x="319" y="84" font-family="Georgia,serif" font-size="11" font-weight="bold" fill="#60a5fa" text-anchor="middle">Addition</text>
  <text x="319" y="98" font-family="Georgia,serif" font-size="9" fill="#bfdbfe" text-anchor="middle">A + B → AB</text>
  <text x="319" y="112" font-family="Georgia,serif" font-size="9" fill="#94a3b8" text-anchor="middle">(across C=C)</text>

  <!-- Col 3: Substitution (x=372) -->
  <rect x="372" y="55" width="106" height="70" fill="#1e293b" stroke="#0f172a" stroke-width="1.5"/>
  <text x="425" y="80" font-family="Georgia,serif" font-size="11" font-weight="bold" fill="#a78bfa" text-anchor="middle">Substitution</text>
  <text x="425" y="94" font-family="Georgia,serif" font-size="9" fill="#ddd6fe" text-anchor="middle">A−B + C → A−C + B</text>
  <text x="425" y="108" font-family="Georgia,serif" font-size="9" fill="#94a3b8" text-anchor="middle">(UV or Lewis acid)</text>

  <!-- Col 4: Polymerisation (x=478) -->
  <rect x="478" y="55" width="106" height="70" fill="#1e293b" stroke="#0f172a" stroke-width="1.5"/>
  <text x="531" y="80" font-family="Georgia,serif" font-size="11" font-weight="bold" fill="#34d399" text-anchor="middle">Polym-</text>
  <text x="531" y="94" font-family="Georgia,serif" font-size="11" font-weight="bold" fill="#34d399" text-anchor="middle">erisation</text>
  <text x="531" y="108" font-family="Georgia,serif" font-size="9" fill="#6ee7b7" text-anchor="middle">n(monomer) → polymer</text>

  <!-- Col 5: Elimination (x=584) -->
  <rect x="584" y="55" width="106" height="70" fill="#1e293b" stroke="#0f172a" stroke-width="1.5"/>
  <text x="637" y="84" font-family="Georgia,serif" font-size="11" font-weight="bold" fill="#fb7185" text-anchor="middle">Elimination</text>
  <text x="637" y="98" font-family="Georgia,serif" font-size="9" fill="#fda4af" text-anchor="middle">A−B → A + B</text>
  <text x="637" y="112" font-family="Georgia,serif" font-size="9" fill="#94a3b8" text-anchor="middle">(form C=C)</text>

  <!-- ══════════════════════════════════════════
       ROW 1 — ALKANES (y=125–215)
  ══════════════════════════════════════════ -->
  <!-- Row label -->
  <rect x="30" y="125" width="130" height="90" fill="#f1f5f9" stroke="#cbd5e1" stroke-width="1.5"/>
  <text x="95" y="152" font-family="Georgia,serif" font-size="12" font-weight="bold" fill="#1e293b" text-anchor="middle">Alkanes</text>
  <text x="95" y="167" font-family="Georgia,serif" font-size="11" fill="#334155" text-anchor="middle">CₙH₂ₙ₊₂</text>
  <text x="95" y="181" font-family="Georgia,serif" font-size="9" fill="#64748b" text-anchor="middle">e.g. CH₄, C₂H₆</text>
  <text x="95" y="195" font-family="Georgia,serif" font-size="9" fill="#64748b" text-anchor="middle">(single bonds only)</text>

  <!-- Combustion: ✓ (green) -->
  <rect x="160" y="125" width="106" height="90" fill="#f0fdf4" stroke="#bbf7d0" stroke-width="1.5"/>
  <text x="213" y="165" font-family="Georgia,serif" font-size="28" fill="#15803d" text-anchor="middle">✓</text>
  <text x="213" y="185" font-family="Georgia,serif" font-size="8" fill="#166534" text-anchor="middle">CH₄ + 2O₂ → CO₂ + 2H₂O</text>
  <text x="213" y="197" font-family="Georgia,serif" font-size="8" fill="#166534" text-anchor="middle">(complete combustion)</text>

  <!-- Addition: ✗ (red) -->
  <rect x="266" y="125" width="106" height="90" fill="#fff1f2" stroke="#fecdd3" stroke-width="1.5"/>
  <text x="319" y="165" font-family="Georgia,serif" font-size="28" fill="#dc2626" text-anchor="middle">✗</text>
  <text x="319" y="186" font-family="Georgia,serif" font-size="8" fill="#991b1b" text-anchor="middle">No C=C double bond</text>
  <text x="319" y="198" font-family="Georgia,serif" font-size="8" fill="#991b1b" text-anchor="middle">for addition</text>

  <!-- Substitution: ✓ with conditions (amber/green) -->
  <rect x="372" y="125" width="106" height="90" fill="#fefce8" stroke="#fef08a" stroke-width="1.5"/>
  <text x="425" y="155" font-family="Georgia,serif" font-size="22" fill="#854d0e" text-anchor="middle">~✓</text>
  <text x="425" y="172" font-family="Georgia,serif" font-size="8" fill="#713f12" text-anchor="middle">Free-radical sub.</text>
  <text x="425" y="184" font-family="Georgia,serif" font-size="8" fill="#713f12" text-anchor="middle">CH₄ + Cl₂ → CH₃Cl + HCl</text>
  <text x="425" y="196" font-family="Georgia,serif" font-size="8" fill="#713f12" text-anchor="middle">(UV light required)</text>

  <!-- Polymerisation: ✗ -->
  <rect x="478" y="125" width="106" height="90" fill="#fff1f2" stroke="#fecdd3" stroke-width="1.5"/>
  <text x="531" y="165" font-family="Georgia,serif" font-size="28" fill="#dc2626" text-anchor="middle">✗</text>
  <text x="531" y="186" font-family="Georgia,serif" font-size="8" fill="#991b1b" text-anchor="middle">No unsaturation</text>
  <text x="531" y="198" font-family="Georgia,serif" font-size="8" fill="#991b1b" text-anchor="middle">to polymerise</text>

  <!-- Elimination: ✗ -->
  <rect x="584" y="125" width="106" height="90" fill="#fff1f2" stroke="#fecdd3" stroke-width="1.5"/>
  <text x="637" y="165" font-family="Georgia,serif" font-size="28" fill="#dc2626" text-anchor="middle">✗</text>
  <text x="637" y="186" font-family="Georgia,serif" font-size="8" fill="#991b1b" text-anchor="middle">No leaving group</text>
  <text x="637" y="198" font-family="Georgia,serif" font-size="8" fill="#991b1b" text-anchor="middle">(needs haloalkane)</text>

  <!-- ══════════════════════════════════════════
       ROW 2 — ALKENES (y=215–305)
  ══════════════════════════════════════════ -->
  <rect x="30" y="215" width="130" height="90" fill="#f1f5f9" stroke="#cbd5e1" stroke-width="1.5"/>
  <text x="95" y="242" font-family="Georgia,serif" font-size="12" font-weight="bold" fill="#1e293b" text-anchor="middle">Alkenes</text>
  <text x="95" y="257" font-family="Georgia,serif" font-size="11" fill="#334155" text-anchor="middle">CₙH₂ₙ</text>
  <text x="95" y="271" font-family="Georgia,serif" font-size="9" fill="#64748b" text-anchor="middle">e.g. C₂H₄, C₃H₆</text>
  <text x="95" y="285" font-family="Georgia,serif" font-size="9" fill="#64748b" text-anchor="middle">(C=C double bond)</text>

  <!-- Combustion: ✓ -->
  <rect x="160" y="215" width="106" height="90" fill="#f0fdf4" stroke="#bbf7d0" stroke-width="1.5"/>
  <text x="213" y="255" font-family="Georgia,serif" font-size="28" fill="#15803d" text-anchor="middle">✓</text>
  <text x="213" y="275" font-family="Georgia,serif" font-size="8" fill="#166534" text-anchor="middle">(sooty flame due to</text>
  <text x="213" y="287" font-family="Georgia,serif" font-size="8" fill="#166534" text-anchor="middle">high C:H ratio)</text>

  <!-- Addition: ✓✓ (primary reaction) -->
  <rect x="266" y="215" width="106" height="90" fill="#f0fdf4" stroke="#86efac" stroke-width="2"/>
  <text x="319" y="248" font-family="Georgia,serif" font-size="22" fill="#15803d" text-anchor="middle">✓ KEY</text>
  <text x="319" y="265" font-family="Georgia,serif" font-size="8" fill="#166534" text-anchor="middle">C₂H₄ + H₂ → C₂H₆</text>
  <text x="319" y="277" font-family="Georgia,serif" font-size="8" fill="#166534" text-anchor="middle">+ Br₂(aq) → dibromoalkane</text>
  <text x="319" y="289" font-family="Georgia,serif" font-size="8" fill="#166534" text-anchor="middle">(decolorises bromine water)</text>

  <!-- Substitution: ✗ -->
  <rect x="372" y="215" width="106" height="90" fill="#fff1f2" stroke="#fecdd3" stroke-width="1.5"/>
  <text x="425" y="255" font-family="Georgia,serif" font-size="28" fill="#dc2626" text-anchor="middle">✗</text>
  <text x="425" y="276" font-family="Georgia,serif" font-size="8" fill="#991b1b" text-anchor="middle">Addition preferred</text>
  <text x="425" y="288" font-family="Georgia,serif" font-size="8" fill="#991b1b" text-anchor="middle">over substitution</text>

  <!-- Polymerisation: ✓ -->
  <rect x="478" y="215" width="106" height="90" fill="#f0fdf4" stroke="#86efac" stroke-width="2"/>
  <text x="531" y="248" font-family="Georgia,serif" font-size="22" fill="#15803d" text-anchor="middle">✓ KEY</text>
  <text x="531" y="265" font-family="Georgia,serif" font-size="8" fill="#166534" text-anchor="middle">n(CH₂=CH₂) →</text>
  <text x="531" y="277" font-family="Georgia,serif" font-size="8" fill="#166534" text-anchor="middle">poly(ethene)</text>
  <text x="531" y="289" font-family="Georgia,serif" font-size="8" fill="#166534" text-anchor="middle">(addition polymer)</text>

  <!-- Elimination: ~ (can form via reverse / with HX) -->
  <rect x="584" y="215" width="106" height="90" fill="#fff1f2" stroke="#fecdd3" stroke-width="1.5"/>
  <text x="637" y="255" font-family="Georgia,serif" font-size="28" fill="#dc2626" text-anchor="middle">✗</text>
  <text x="637" y="276" font-family="Georgia,serif" font-size="8" fill="#991b1b" text-anchor="middle">Is the product,</text>
  <text x="637" y="288" font-family="Georgia,serif" font-size="8" fill="#991b1b" text-anchor="middle">not the reactant</text>

  <!-- ══════════════════════════════════════════
       ROW 3 — ALKYNES (y=305–395)
  ══════════════════════════════════════════ -->
  <rect x="30" y="305" width="130" height="90" fill="#f1f5f9" stroke="#cbd5e1" stroke-width="1.5"/>
  <text x="95" y="332" font-family="Georgia,serif" font-size="12" font-weight="bold" fill="#1e293b" text-anchor="middle">Alkynes</text>
  <text x="95" y="347" font-family="Georgia,serif" font-size="11" fill="#334155" text-anchor="middle">CₙH₂ₙ₋₂</text>
  <text x="95" y="361" font-family="Georgia,serif" font-size="9" fill="#64748b" text-anchor="middle">e.g. C₂H₂ (ethyne)</text>
  <text x="95" y="375" font-family="Georgia,serif" font-size="9" fill="#64748b" text-anchor="middle">(C≡C triple bond)</text>

  <!-- Combustion: ✓ -->
  <rect x="160" y="305" width="106" height="90" fill="#f0fdf4" stroke="#bbf7d0" stroke-width="1.5"/>
  <text x="213" y="345" font-family="Georgia,serif" font-size="28" fill="#15803d" text-anchor="middle">✓</text>
  <text x="213" y="365" font-family="Georgia,serif" font-size="8" fill="#166534" text-anchor="middle">(very sooty flame,</text>
  <text x="213" y="377" font-family="Georgia,serif" font-size="8" fill="#166534" text-anchor="middle">high C:H ratio)</text>

  <!-- Addition: ✓ (twice possible) -->
  <rect x="266" y="305" width="106" height="90" fill="#f0fdf4" stroke="#bbf7d0" stroke-width="1.5"/>
  <text x="319" y="338" font-family="Georgia,serif" font-size="22" fill="#15803d" text-anchor="middle">✓ ×2</text>
  <text x="319" y="355" font-family="Georgia,serif" font-size="8" fill="#166534" text-anchor="middle">C₂H₂ + H₂ → C₂H₄</text>
  <text x="319" y="367" font-family="Georgia,serif" font-size="8" fill="#166534" text-anchor="middle">→ C₂H₆ (2 steps)</text>
  <text x="319" y="379" font-family="Georgia,serif" font-size="8" fill="#166534" text-anchor="middle">(two additions possible)</text>

  <!-- Substitution: ~ -->
  <rect x="372" y="305" width="106" height="90" fill="#fefce8" stroke="#fef08a" stroke-width="1.5"/>
  <text x="425" y="340" font-family="Georgia,serif" font-size="22" fill="#854d0e" text-anchor="middle">~</text>
  <text x="425" y="358" font-family="Georgia,serif" font-size="8" fill="#713f12" text-anchor="middle">Terminal C≡C−H</text>
  <text x="425" y="370" font-family="Georgia,serif" font-size="8" fill="#713f12" text-anchor="middle">acidic H replaceable</text>
  <text x="425" y="382" font-family="Georgia,serif" font-size="8" fill="#713f12" text-anchor="middle">(with strong base)</text>

  <!-- Polymerisation: ~ -->
  <rect x="478" y="305" width="106" height="90" fill="#fefce8" stroke="#fef08a" stroke-width="1.5"/>
  <text x="531" y="345" font-family="Georgia,serif" font-size="22" fill="#854d0e" text-anchor="middle">~</text>
  <text x="531" y="363" font-family="Georgia,serif" font-size="8" fill="#713f12" text-anchor="middle">Less common;</text>
  <text x="531" y="375" font-family="Georgia,serif" font-size="8" fill="#713f12" text-anchor="middle">cyclic trimers formed</text>

  <!-- Elimination: ✗ -->
  <rect x="584" y="305" width="106" height="90" fill="#fff1f2" stroke="#fecdd3" stroke-width="1.5"/>
  <text x="637" y="345" font-family="Georgia,serif" font-size="28" fill="#dc2626" text-anchor="middle">✗</text>
  <text x="637" y="366" font-family="Georgia,serif" font-size="8" fill="#991b1b" text-anchor="middle">Already highly</text>
  <text x="637" y="378" font-family="Georgia,serif" font-size="8" fill="#991b1b" text-anchor="middle">unsaturated</text>

  <!-- ══════════════════════════════════════════
       ROW 4 — ARENES (y=395–485)
  ══════════════════════════════════════════ -->
  <rect x="30" y="395" width="130" height="90" fill="#f1f5f9" stroke="#cbd5e1" stroke-width="1.5"/>
  <text x="95" y="422" font-family="Georgia,serif" font-size="12" font-weight="bold" fill="#1e293b" text-anchor="middle">Arenes</text>
  <text x="95" y="437" font-family="Georgia,serif" font-size="11" fill="#334155" text-anchor="middle">(Aromatic)</text>
  <!-- Benzene ring sketch -->
  <polygon points="95,455 82,462 82,476 95,483 108,476 108,462"
           fill="none" stroke="#334155" stroke-width="2"/>
  <circle cx="95" cy="469" r="8" fill="none" stroke="#334155" stroke-width="1.5"/>

  <!-- Combustion: ✓ -->
  <rect x="160" y="395" width="106" height="90" fill="#f0fdf4" stroke="#bbf7d0" stroke-width="1.5"/>
  <text x="213" y="432" font-family="Georgia,serif" font-size="28" fill="#15803d" text-anchor="middle">✓</text>
  <text x="213" y="452" font-family="Georgia,serif" font-size="8" fill="#166534" text-anchor="middle">(very smoky — high</text>
  <text x="213" y="464" font-family="Georgia,serif" font-size="8" fill="#166534" text-anchor="middle">C content, soot)</text>

  <!-- Addition: ~ -->
  <rect x="266" y="395" width="106" height="90" fill="#fefce8" stroke="#fef08a" stroke-width="1.5"/>
  <text x="319" y="432" font-family="Georgia,serif" font-size="22" fill="#854d0e" text-anchor="middle">~</text>
  <text x="319" y="450" font-family="Georgia,serif" font-size="8" fill="#713f12" text-anchor="middle">Only under forcing</text>
  <text x="319" y="462" font-family="Georgia,serif" font-size="8" fill="#713f12" text-anchor="middle">conditions (e.g. H₂,</text>
  <text x="319" y="474" font-family="Georgia,serif" font-size="8" fill="#713f12" text-anchor="middle">Pt cat., high P)</text>

  <!-- Substitution: ✓✓ (EAS) -->
  <rect x="372" y="395" width="106" height="90" fill="#f0fdf4" stroke="#86efac" stroke-width="2"/>
  <text x="425" y="425" font-family="Georgia,serif" font-size="16" fill="#15803d" text-anchor="middle">✓ KEY</text>
  <text x="425" y="441" font-family="Georgia,serif" font-size="8" fill="#166534" text-anchor="middle">Electrophilic aromatic</text>
  <text x="425" y="453" font-family="Georgia,serif" font-size="8" fill="#166534" text-anchor="middle">substitution (EAS)</text>
  <text x="425" y="465" font-family="Georgia,serif" font-size="8" fill="#166534" text-anchor="middle">e.g. nitration,</text>
  <text x="425" y="477" font-family="Georgia,serif" font-size="8" fill="#166534" text-anchor="middle">halogenation (Lewis acid)</text>

  <!-- Polymerisation: ~ -->
  <rect x="478" y="395" width="106" height="90" fill="#fefce8" stroke="#fef08a" stroke-width="1.5"/>
  <text x="531" y="432" font-family="Georgia,serif" font-size="22" fill="#854d0e" text-anchor="middle">~</text>
  <text x="531" y="450" font-family="Georgia,serif" font-size="8" fill="#713f12" text-anchor="middle">Styrene (vinylbenzene)</text>
  <text x="531" y="462" font-family="Georgia,serif" font-size="8" fill="#713f12" text-anchor="middle">→ polystyrene</text>
  <text x="531" y="474" font-family="Georgia,serif" font-size="8" fill="#713f12" text-anchor="middle">(side chain addition)</text>

  <!-- Elimination: ✗ -->
  <rect x="584" y="395" width="106" height="90" fill="#fff1f2" stroke="#fecdd3" stroke-width="1.5"/>
  <text x="637" y="432" font-family="Georgia,serif" font-size="28" fill="#dc2626" text-anchor="middle">✗</text>
  <text x="637" y="452" font-family="Georgia,serif" font-size="8" fill="#991b1b" text-anchor="middle">Aromatic ring</text>
  <text x="637" y="464" font-family="Georgia,serif" font-size="8" fill="#991b1b" text-anchor="middle">preserved (stable)</text>

  <!-- ── Legend box ── -->
  <rect x="30" y="495" width="640" height="34" rx="5" fill="none" stroke="#000" stroke-width="1.8" stroke-dasharray="5,3"/>
  <rect x="40" y="505" width="14" height="14" rx="2" fill="#f0fdf4" stroke="#15803d" stroke-width="1.5"/>
  <text x="58" y="516" font-family="Georgia,serif" font-size="10" fill="#15803d">✓ Occurs (readily)</text>
  <rect x="180" y="505" width="14" height="14" rx="2" fill="#fefce8" stroke="#854d0e" stroke-width="1.5"/>
  <text x="198" y="516" font-family="Georgia,serif" font-size="10" fill="#854d0e">~ Limited / special conditions</text>
  <rect x="390" y="505" width="14" height="14" rx="2" fill="#fff1f2" stroke="#dc2626" stroke-width="1.5"/>
  <text x="408" y="516" font-family="Georgia,serif" font-size="10" fill="#dc2626">✗ Does not occur</text>
  <text x="530" y="516" font-family="Georgia,serif" font-size="10" fill="#555">KEY = most characteristic</text>

</svg>`;

}
