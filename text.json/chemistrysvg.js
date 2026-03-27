
class ChemistrySvgDiagrams {


// ─── 5. POLYMERIZATION DIAGRAM — ADDITION & CONDENSATION ─────────────────────
  static polymerizationDiagramSvg = `<?xml version="1.0" encoding="utf-8"?>
<svg version="1.1" xmlns="http://www.w3.org/2000/svg"
     width="1000px" height="600px" viewBox="0 0 1000 600">

  <!-- Title -->
  <text x="500" y="30" font-family="Georgia,serif" font-size="16" font-weight="bold"
        fill="#000" text-anchor="middle">Addition Polymerization</text>
  <text x="500" y="50" font-family="Georgia,serif" font-size="11" fill="#000" text-anchor="middle">
    n monomers → polymer chain | Ethene → Poly(ethene)
  </text>

  <!-- ══ SECTION DIVIDER ══ -->
  <line x1="40" y1="65" x2="960" y2="65" stroke="#000" stroke-width="2"/>

  <!-- ══ STEP 1: MONOMER ══ -->
  <text x="170" y="95" font-family="Georgia,serif" font-size="13" font-weight="bold"
        fill="#000" text-anchor="middle">Step 1 — Monomer (Ethene)</text>

  <!-- Ethene structural formula: H2C=CH2 -->
  <!-- Left carbon -->
  <circle cx="110" cy="155" r="18" fill="#fff" stroke="#000" stroke-width="2.5"/>
  <text x="110" y="160" font-family="Georgia,serif" font-size="13" font-weight="bold"
        fill="#000" text-anchor="middle">C</text>
  <!-- Right carbon -->
  <circle cx="230" cy="155" r="18" fill="#fff" stroke="#000" stroke-width="2.5"/>
  <text x="230" y="160" font-family="Georgia,serif" font-size="13" font-weight="bold"
        fill="#000" text-anchor="middle">C</text>
  <!-- Double bond (two parallel lines) -->
  <line x1="128" y1="150" x2="212" y2="150" stroke="#000" stroke-width="2.5"/>
  <line x1="128" y1="160" x2="212" y2="160" stroke="#000" stroke-width="2.5"/>
  <!-- H atoms: left carbon -->
  <text x="68" y="130" font-family="Georgia,serif" font-size="13" fill="#000">H</text>
  <line x1="93" y1="144" x2="80" y2="133" stroke="#000" stroke-width="1.8"/>
  <text x="68" y="188" font-family="Georgia,serif" font-size="13" fill="#000">H</text>
  <line x1="93" y1="166" x2="80" y2="177" stroke="#000" stroke-width="1.8"/>
  <!-- H atoms: right carbon -->
  <text x="252" y="130" font-family="Georgia,serif" font-size="13" fill="#000">H</text>
  <line x1="247" y1="144" x2="259" y2="133" stroke="#000" stroke-width="1.8"/>
  <text x="252" y="188" font-family="Georgia,serif" font-size="13" fill="#000">H</text>
  <line x1="247" y1="166" x2="259" y2="177" stroke="#000" stroke-width="1.8"/>
  <!-- C=C label -->
  <text x="170" y="210" font-family="Georgia,serif" font-size="11" fill="#000"
        text-anchor="middle">C=C double bond</text>
  <text x="170" y="225" font-family="Georgia,serif" font-size="11" fill="#000"
        text-anchor="middle">(site of reaction)</text>

  <!-- ══ ARROW: monomer → activated ══ -->
  <line x1="320" y1="155" x2="390" y2="155" stroke="#000" stroke-width="2.5"/>
  <polygon points="385,148 400,155 385,162" fill="#000"/>
  <text x="355" y="143" font-family="Georgia,serif" font-size="10" fill="#000"
        text-anchor="middle">initiator /</text>
  <text x="355" y="156" font-family="Georgia,serif" font-size="10" fill="#000"
        text-anchor="middle">heat + pressure</text>

  <!-- ══ STEP 2: ACTIVATED RADICAL / CHAIN GROWTH ══ -->
  <text x="580" y="95" font-family="Georgia,serif" font-size="13" font-weight="bold"
        fill="#000" text-anchor="middle">Step 2 — Chain Growth</text>

  <!-- Three repeat units shown as linked CH2-CH2 blocks -->
  <!-- Unit 1 -->
  <rect x="410" y="130" width="80" height="50" rx="4" fill="#fff" stroke="#000" stroke-width="2"/>
  <text x="450" y="150" font-family="Georgia,serif" font-size="12" fill="#000" text-anchor="middle">CH₂</text>
  <text x="450" y="168" font-family="Georgia,serif" font-size="12" fill="#000" text-anchor="middle">|</text>
  <!-- Unit 2 -->
  <rect x="500" y="130" width="80" height="50" rx="4" fill="#fff" stroke="#000" stroke-width="2"/>
  <text x="540" y="150" font-family="Georgia,serif" font-size="12" fill="#000" text-anchor="middle">CH₂</text>
  <!-- Unit 3 -->
  <rect x="590" y="130" width="80" height="50" rx="4" fill="#fff" stroke="#000" stroke-width="2"/>
  <text x="630" y="150" font-family="Georgia,serif" font-size="12" fill="#000" text-anchor="middle">CH₂</text>
  <!-- Connecting bonds between units -->
  <line x1="490" y1="155" x2="500" y2="155" stroke="#000" stroke-width="2.5"/>
  <line x1="580" y1="155" x2="590" y2="155" stroke="#000" stroke-width="2.5"/>
  <!-- Extension dots -->
  <text x="680" y="160" font-family="Georgia,serif" font-size="18" fill="#000">···</text>
  <!-- Free radical end -->
  <circle cx="720" cy="155" r="6" fill="#000"/>
  <text x="730" y="150" font-family="Georgia,serif" font-size="10" fill="#000">•  (radical)</text>

  <!-- ══ STEP 3: POLYMER PRODUCT ══ -->
  <text x="500" y="280" font-family="Georgia,serif" font-size="13" font-weight="bold"
        fill="#000" text-anchor="middle">Step 3 — Polymer Product: Poly(ethene)</text>

  <!-- Repeat unit bracket notation -->
  <!-- Large bracket left -->
  <path d="M200,310 L188,310 L188,390 L200,390" fill="none" stroke="#000" stroke-width="3"/>
  <!-- Repeat unit content -->
  <!-- Carbon 1 -->
  <text x="260" y="343" font-family="Georgia,serif" font-size="14" fill="#000" text-anchor="middle">H</text>
  <text x="260" y="360" font-family="Georgia,serif" font-size="14" fill="#000" text-anchor="middle">|</text>
  <text x="260" y="377" font-family="Georgia,serif" font-size="14" fill="#000" text-anchor="middle">C</text>
  <text x="260" y="394" font-family="Georgia,serif" font-size="14" fill="#000" text-anchor="middle">|</text>
  <text x="260" y="410" font-family="Georgia,serif" font-size="14" fill="#000" text-anchor="middle">H</text>
  <!-- Bond between carbons -->
  <line x1="272" y1="375" x2="318" y2="375" stroke="#000" stroke-width="2.5"/>
  <!-- Carbon 2 -->
  <text x="340" y="343" font-family="Georgia,serif" font-size="14" fill="#000" text-anchor="middle">H</text>
  <text x="340" y="360" font-family="Georgia,serif" font-size="14" fill="#000" text-anchor="middle">|</text>
  <text x="340" y="377" font-family="Georgia,serif" font-size="14" fill="#000" text-anchor="middle">C</text>
  <text x="340" y="394" font-family="Georgia,serif" font-size="14" fill="#000" text-anchor="middle">|</text>
  <text x="340" y="410" font-family="Georgia,serif" font-size="14" fill="#000" text-anchor="middle">H</text>
  <!-- Bracket right -->
  <path d="M368,310 L380,310 L380,390 L368,390" fill="none" stroke="#000" stroke-width="3"/>
  <!-- Subscript n -->
  <text x="390" y="398" font-family="Georgia,serif" font-size="16" font-weight="bold" fill="#000">n</text>
  <!-- Chain extension lines -->
  <line x1="188" y1="375" x2="140" y2="375" stroke="#000" stroke-width="2"
        stroke-dasharray="6,4"/>
  <line x1="380" y1="375" x2="430" y2="375" stroke="#000" stroke-width="2"
        stroke-dasharray="6,4"/>

  <!-- ══ CONDITIONS BOX ══ -->
  <rect x="460" y="300" width="460" height="150" rx="6" fill="#fff" stroke="#000" stroke-width="2"/>
  <text x="690" y="325" font-family="Georgia,serif" font-size="13" font-weight="bold"
        fill="#000" text-anchor="middle">Reaction Conditions</text>
  <line x1="470" y1="332" x2="910" y2="332" stroke="#000" stroke-width="1.5"/>
  <text x="480" y="352" font-family="Georgia,serif" font-size="12" fill="#000">• Initiator: organic peroxide (R–O–O–R → 2RO•)</text>
  <text x="480" y="372" font-family="Georgia,serif" font-size="12" fill="#000">• Temperature: 200 °C   Pressure: 1000–3000 atm</text>
  <text x="480" y="392" font-family="Georgia,serif" font-size="12" fill="#000">• Mechanism: free-radical chain reaction</text>
  <text x="480" y="412" font-family="Georgia,serif" font-size="12" fill="#000">• Stages: initiation → propagation → termination</text>
  <text x="480" y="432" font-family="Georgia,serif" font-size="12" fill="#000">• No atoms lost — addition polymer (no by-product)</text>

  <!-- ══ OVERALL EQUATION ══ -->
  <rect x="40" y="480" width="920" height="50" rx="5" fill="#fff" stroke="#000"
        stroke-width="2" stroke-dasharray="6,3"/>
  <text x="500" y="500" font-family="Georgia,serif" font-size="13" font-weight="bold"
        fill="#000" text-anchor="middle">Overall:  n CH₂=CH₂  →  −(CH₂−CH₂)ₙ−</text>
  <text x="500" y="520" font-family="Georgia,serif" font-size="11" fill="#000"
        text-anchor="middle">
    The C=C double bond opens; each carbon forms a new single bond to adjacent repeat units
  </text>

</svg>`;


// ─── 6. AROMATIC STRUCTURE — BENZENE RESONANCE & DELOCALISATION ──────────────
  static aromaticStructureDiagramSvg = `<?xml version="1.0" encoding="utf-8"?>
<svg version="1.1" xmlns="http://www.w3.org/2000/svg"
     width="1000px" height="700px" viewBox="0 0 1000 700">

  <!-- Title -->
  <text x="500" y="30" font-family="Georgia,serif" font-size="16" font-weight="bold"
        fill="#000" text-anchor="middle">Benzene Structure — Resonance &amp; Delocalisation</text>
  <text x="500" y="50" font-family="Georgia,serif" font-size="11" fill="#000" text-anchor="middle">
    C₆H₆ | Molecular formula | Kekulé structures vs. delocalised model
  </text>
  <line x1="40" y1="62" x2="960" y2="62" stroke="#000" stroke-width="2"/>

  <!-- ══ KEKULÉ STRUCTURE 1 (left) ══ -->
  <text x="180" y="90" font-family="Georgia,serif" font-size="13" font-weight="bold"
        fill="#000" text-anchor="middle">Kekulé Structure I</text>

  <!-- Hexagon vertices for benzene ring, centre (180,185), radius 65 -->
  <!-- Vertices at 30°,90°,150°,210°,270°,330° -->
  <!-- V1(top-right)=(212,152) V2(right)=(245,185) V3(bot-right)=(212,218)
       V4(bot-left)=(148,218) V5(left)=(115,185) V6(top-left)=(148,152) -->

  <!-- Single bonds (C−C) sides: V1-V2, V3-V4, V5-V6 -->
  <line x1="212" y1="152" x2="245" y2="185" stroke="#000" stroke-width="2.5"/>
  <line x1="212" y1="218" x2="148" y2="218" stroke="#000" stroke-width="2.5"/>
  <line x1="115" y1="185" x2="148" y2="152" stroke="#000" stroke-width="2.5"/>
  <!-- Double bonds (C=C) sides: V2-V3, V4-V5, V6-V1 — drawn as double lines -->
  <!-- V2-V3 -->
  <line x1="247" y1="185" x2="214" y2="218" stroke="#000" stroke-width="2.5"/>
  <line x1="242" y1="183" x2="209" y2="216" stroke="#000" stroke-width="2.5"/>
  <!-- V4-V5 -->
  <line x1="146" y1="220" x2="113" y2="187" stroke="#000" stroke-width="2.5"/>
  <line x1="151" y1="222" x2="118" y2="189" stroke="#000" stroke-width="2.5"/>
  <!-- V6-V1 -->
  <line x1="148" y1="150" x2="212" y2="150" stroke="#000" stroke-width="2.5"/>
  <line x1="148" y1="155" x2="212" y2="155" stroke="#000" stroke-width="2.5"/>

  <!-- H atoms -->
  <text x="218" y="136" font-family="Georgia,serif" font-size="12" fill="#000">H</text>
  <text x="258" y="190" font-family="Georgia,serif" font-size="12" fill="#000">H</text>
  <text x="218" y="240" font-family="Georgia,serif" font-size="12" fill="#000">H</text>
  <text x="124" y="240" font-family="Georgia,serif" font-size="12" fill="#000">H</text>
  <text x="88" y="190" font-family="Georgia,serif" font-size="12" fill="#000">H</text>
  <text x="124" y="136" font-family="Georgia,serif" font-size="12" fill="#000">H</text>

  <!-- ══ DOUBLE-HEADED RESONANCE ARROW ══ -->
  <line x1="280" y1="185" x2="370" y2="185" stroke="#000" stroke-width="2.5"/>
  <polygon points="368,179 382,185 368,191" fill="#000"/>
  <polygon points="282,179 268,185 282,191" fill="#000"/>
  <text x="325" y="175" font-family="Georgia,serif" font-size="10" fill="#000"
        text-anchor="middle">resonance</text>

  <!-- ══ KEKULÉ STRUCTURE 2 (centre-left) ══ -->
  <text x="460" y="90" font-family="Georgia,serif" font-size="13" font-weight="bold"
        fill="#000" text-anchor="middle">Kekulé Structure II</text>

  <!-- Centre (460,185) -->
  <!-- Single bonds: V2-V3, V4-V5, V6-V1 -->
  <line x1="492" y1="152" x2="525" y2="185" stroke="#000" stroke-width="2.5"/>
  <line x1="492" y1="218" x2="428" y2="218" stroke="#000" stroke-width="2.5"/>
  <line x1="395" y1="185" x2="428" y2="152" stroke="#000" stroke-width="2.5"/>
  <!-- Double bonds: V1-V2, V3-V4, V5-V6 -->
  <!-- V1-V2 -->
  <line x1="492" y1="150" x2="525" y2="183" stroke="#000" stroke-width="2.5"/>
  <line x1="487" y1="150" x2="520" y2="183" stroke="#000" stroke-width="2.5"/>
  <!-- V3-V4 -->
  <line x1="494" y1="220" x2="430" y2="220" stroke="#000" stroke-width="2.5"/>
  <line x1="494" y1="215" x2="430" y2="215" stroke="#000" stroke-width="2.5"/>
  <!-- V5-V6 -->
  <line x1="393" y1="183" x2="426" y2="150" stroke="#000" stroke-width="2.5"/>
  <line x1="398" y1="185" x2="431" y2="152" stroke="#000" stroke-width="2.5"/>

  <!-- H atoms -->
  <text x="498" y="136" font-family="Georgia,serif" font-size="12" fill="#000">H</text>
  <text x="538" y="190" font-family="Georgia,serif" font-size="12" fill="#000">H</text>
  <text x="498" y="240" font-family="Georgia,serif" font-size="12" fill="#000">H</text>
  <text x="404" y="240" font-family="Georgia,serif" font-size="12" fill="#000">H</text>
  <text x="368" y="190" font-family="Georgia,serif" font-size="12" fill="#000">H</text>
  <text x="404" y="136" font-family="Georgia,serif" font-size="12" fill="#000">H</text>

  <!-- ══ ARROW TO DELOCALISED ══ -->
  <line x1="570" y1="185" x2="650" y2="185" stroke="#000" stroke-width="2.5"/>
  <polygon points="645,179 660,185 645,191" fill="#000"/>
  <text x="610" y="172" font-family="Georgia,serif" font-size="10" fill="#000"
        text-anchor="middle">delocalised</text>
  <text x="610" y="184" font-family="Georgia,serif" font-size="10" fill="#000"
        text-anchor="middle">model</text>

  <!-- ══ DELOCALISED MODEL (right) ══ -->
  <text x="800" y="90" font-family="Georgia,serif" font-size="13" font-weight="bold"
        fill="#000" text-anchor="middle">Delocalised Model</text>

  <!-- Hexagon outline, centre (800,185) -->
  <polygon points="832,152 865,185 832,218 768,218 735,185 768,152"
           fill="none" stroke="#000" stroke-width="2.5"/>
  <!-- Inner circle representing delocalised π electrons -->
  <circle cx="800" cy="185" r="35" fill="none" stroke="#000" stroke-width="2.5"/>

  <!-- H atoms -->
  <text x="838" y="136" font-family="Georgia,serif" font-size="12" fill="#000">H</text>
  <text x="878" y="190" font-family="Georgia,serif" font-size="12" fill="#000">H</text>
  <text x="838" y="240" font-family="Georgia,serif" font-size="12" fill="#000">H</text>
  <text x="744" y="240" font-family="Georgia,serif" font-size="12" fill="#000">H</text>
  <text x="708" y="190" font-family="Georgia,serif" font-size="12" fill="#000">H</text>
  <text x="744" y="136" font-family="Georgia,serif" font-size="12" fill="#000">H</text>

  <!-- π cloud label -->
  <text x="800" y="182" font-family="Georgia,serif" font-size="11" fill="#000"
        text-anchor="middle">π cloud</text>
  <text x="800" y="196" font-family="Georgia,serif" font-size="10" fill="#000"
        text-anchor="middle">(6 e⁻)</text>

  <!-- ══ DIVIDER ══ -->
  <line x1="40" y1="270" x2="960" y2="270" stroke="#000" stroke-width="1.5"
        stroke-dasharray="8,4"/>

  <!-- ══ BOND LENGTH EVIDENCE ══ -->
  <text x="250" y="300" font-family="Georgia,serif" font-size="13" font-weight="bold"
        fill="#000" text-anchor="middle">Bond Length Evidence</text>

  <!-- Table -->
  <rect x="40" y="312" width="420" height="120" rx="4" fill="#fff" stroke="#000" stroke-width="2"/>
  <!-- Header row -->
  <rect x="40" y="312" width="420" height="28" rx="4" fill="#000"/>
  <text x="110" y="331" font-family="Georgia,serif" font-size="11" fill="#fff"
        text-anchor="middle">Bond</text>
  <text x="270" y="331" font-family="Georgia,serif" font-size="11" fill="#fff"
        text-anchor="middle">Length (pm)</text>
  <text x="420" y="331" font-family="Georgia,serif" font-size="11" fill="#fff"
        text-anchor="middle">Type</text>
  <!-- Rows -->
  <line x1="40" y1="340" x2="460" y2="340" stroke="#000" stroke-width="1"/>
  <text x="110" y="357" font-family="Georgia,serif" font-size="11" fill="#000"
        text-anchor="middle">C−C (alkane)</text>
  <text x="270" y="357" font-family="Georgia,serif" font-size="11" fill="#000"
        text-anchor="middle">154</text>
  <text x="420" y="357" font-family="Georgia,serif" font-size="11" fill="#000"
        text-anchor="middle">single bond</text>
  <line x1="40" y1="364" x2="460" y2="364" stroke="#000" stroke-width="1"/>
  <text x="110" y="381" font-family="Georgia,serif" font-size="11" fill="#000"
        text-anchor="middle">C=C (alkene)</text>
  <text x="270" y="381" font-family="Georgia,serif" font-size="11" fill="#000"
        text-anchor="middle">134</text>
  <text x="420" y="381" font-family="Georgia,serif" font-size="11" fill="#000"
        text-anchor="middle">double bond</text>
  <line x1="40" y1="388" x2="460" y2="388" stroke="#000" stroke-width="1"/>
  <text x="110" y="405" font-family="Georgia,serif" font-size="12" font-weight="bold"
        fill="#000" text-anchor="middle">C−C (benzene)</text>
  <text x="270" y="405" font-family="Georgia,serif" font-size="12" font-weight="bold"
        fill="#000" text-anchor="middle">140</text>
  <text x="420" y="405" font-family="Georgia,serif" font-size="11" fill="#000"
        text-anchor="middle">intermediate</text>
  <line x1="40" y1="412" x2="460" y2="412" stroke="#000" stroke-width="1"/>
  <text x="250" y="428" font-family="Georgia,serif" font-size="10" fill="#000">
    → All bonds equal: consistent with delocalisation
  </text>
  <!-- Column dividers -->
  <line x1="180" y1="312" x2="180" y2="432" stroke="#000" stroke-width="1"/>
  <line x1="360" y1="312" x2="360" y2="432" stroke="#000" stroke-width="1"/>

  <!-- ══ STABILITY / ENTHALPY EVIDENCE ══ -->
  <text x="720" y="300" font-family="Georgia,serif" font-size="13" font-weight="bold"
        fill="#000" text-anchor="middle">Stability Evidence (Enthalpy)</text>

  <rect x="520" y="312" width="440" height="130" rx="4" fill="#fff" stroke="#000" stroke-width="2"/>
  <text x="530" y="334" font-family="Georgia,serif" font-size="11" fill="#000">
    Predicted ΔH°hydrogenation (3 × cyclohexene):
  </text>
  <text x="530" y="352" font-family="Georgia,serif" font-size="11" fill="#000">
    3 × (−120) = −360 kJ mol⁻¹
  </text>
  <text x="530" y="372" font-family="Georgia,serif" font-size="11" fill="#000">
    Actual ΔH°hydrogenation (benzene):
  </text>
  <text x="530" y="390" font-family="Georgia,serif" font-size="12" font-weight="bold"
        fill="#000">
    −208 kJ mol⁻¹
  </text>
  <text x="530" y="410" font-family="Georgia,serif" font-size="11" fill="#000">
    Delocalisation energy (stabilisation):
  </text>
  <text x="530" y="428" font-family="Georgia,serif" font-size="12" font-weight="bold"
        fill="#000">
    ≈ 152 kJ mol⁻¹  (benzene more stable than predicted)
  </text>

  <!-- ══ SUMMARY BOX ══ -->
  <rect x="40" y="460" width="920" height="90" rx="6" fill="#fff" stroke="#000"
        stroke-width="2" stroke-dasharray="6,3"/>
  <text x="500" y="482" font-family="Georgia,serif" font-size="13" font-weight="bold"
        fill="#000" text-anchor="middle">Key Points — Benzene Aromaticity</text>
  <line x1="50" y1="488" x2="950" y2="488" stroke="#000" stroke-width="1"/>
  <text x="60" y="506" font-family="Georgia,serif" font-size="11" fill="#000">
    • Planar molecule — all bond angles 120° — sp² hybridised carbons
  </text>
  <text x="60" y="524" font-family="Georgia,serif" font-size="11" fill="#000">
    • 6 π electrons delocalised above and below ring plane — confers extra stability (aromatic stabilisation)
  </text>
  <text x="60" y="542" font-family="Georgia,serif" font-size="11" fill="#000">
    • Prefers electrophilic aromatic substitution (EAS) — preserves ring — rather than addition
  </text>

</svg>`;


// ─── 7. ESTERIFICATION REACTION DIAGRAM ──────────────────────────────────────
  static esterificationDiagramSvg = `<?xml version="1.0" encoding="utf-8"?>
<svg version="1.1" xmlns="http://www.w3.org/2000/svg"
     width="1000px" height="600px" viewBox="0 0 1000 600">

  <!-- Title -->
  <text x="500" y="28" font-family="Georgia,serif" font-size="16" font-weight="bold"
        fill="#000" text-anchor="middle">Esterification Reaction</text>
  <text x="500" y="48" font-family="Georgia,serif" font-size="11" fill="#000" text-anchor="middle">
    Carboxylic acid + Alcohol ⇌ Ester + Water  |  Acid catalyst (conc. H₂SO₄)  |  Reversible
  </text>
  <line x1="40" y1="58" x2="960" y2="58" stroke="#000" stroke-width="2"/>

  <!-- ══ OVERALL EQUATION ══ -->
  <text x="500" y="88" font-family="Georgia,serif" font-size="13" font-weight="bold"
        fill="#000" text-anchor="middle">
    CH₃COOH  +  C₂H₅OH  ⇌  CH₃COOC₂H₅  +  H₂O
  </text>
  <text x="500" y="108" font-family="Georgia,serif" font-size="11" fill="#000" text-anchor="middle">
    ethanoic acid  +  ethanol  ⇌  ethyl ethanoate  +  water
  </text>

  <!-- ══ STRUCTURAL DIAGRAM ROW ══ -->

  <!-- ── ETHANOIC ACID ── -->
  <text x="130" y="148" font-family="Georgia,serif" font-size="12" font-weight="bold"
        fill="#000" text-anchor="middle">Ethanoic Acid</text>

  <!-- CH3 group -->
  <text x="52" y="195" font-family="Georgia,serif" font-size="13" fill="#000">H₃C</text>
  <!-- C(=O)(OH) group -->
  <line x1="82" y1="190" x2="118" y2="190" stroke="#000" stroke-width="2.5"/>
  <circle cx="130" cy="190" r="14" fill="#fff" stroke="#000" stroke-width="2"/>
  <text x="130" y="195" font-family="Georgia,serif" font-size="12" fill="#000"
        text-anchor="middle">C</text>
  <!-- C=O double bond upward -->
  <line x1="127" y1="176" x2="120" y2="155" stroke="#000" stroke-width="2.5"/>
  <line x1="133" y1="176" x2="126" y2="155" stroke="#000" stroke-width="2.5"/>
  <text x="117" y="150" font-family="Georgia,serif" font-size="13" fill="#000">O</text>
  <!-- C-OH bond downward -->
  <line x1="130" y1="204" x2="130" y2="228" stroke="#000" stroke-width="2.5"/>
  <text x="122" y="246" font-family="Georgia,serif" font-size="13" fill="#000">OH</text>
  <!-- dashed box around OH (the OH that leaves) -->
  <rect x="118" y="230" width="34" height="20" rx="3" fill="none" stroke="#000"
        stroke-width="1.5" stroke-dasharray="4,2"/>

  <!-- PLUS SIGN -->
  <text x="232" y="198" font-family="Georgia,serif" font-size="22" font-weight="bold"
        fill="#000" text-anchor="middle">+</text>

  <!-- ── ETHANOL ── -->
  <text x="330" y="148" font-family="Georgia,serif" font-size="12" font-weight="bold"
        fill="#000" text-anchor="middle">Ethanol</text>

  <text x="258" y="195" font-family="Georgia,serif" font-size="13" fill="#000">H₃C</text>
  <line x1="286" y1="190" x2="310" y2="190" stroke="#000" stroke-width="2.5"/>
  <text x="318" y="195" font-family="Georgia,serif" font-size="13" fill="#000">CH₂</text>
  <line x1="346" y1="190" x2="370" y2="190" stroke="#000" stroke-width="2.5"/>
  <!-- O-H group -->
  <text x="372" y="195" font-family="Georgia,serif" font-size="13" fill="#000">O</text>
  <line x1="384" y1="190" x2="400" y2="190" stroke="#000" stroke-width="2.5"/>
  <text x="402" y="195" font-family="Georgia,serif" font-size="13" fill="#000">H</text>
  <!-- dashed box around H (the H that leaves with O from acid) -->
  <rect x="399" y="180" width="18" height="20" rx="3" fill="none" stroke="#000"
        stroke-width="1.5" stroke-dasharray="4,2"/>

  <!-- ══ EQUILIBRIUM ARROW ══ -->
  <!-- Forward arrow -->
  <line x1="440" y1="183" x2="560" y2="183" stroke="#000" stroke-width="2.5"/>
  <polygon points="555,177 568,183 555,189" fill="#000"/>
  <!-- Reverse arrow -->
  <line x1="440" y1="197" x2="560" y2="197" stroke="#000" stroke-width="2.5"/>
  <polygon points="445,191 432,197 445,203" fill="#000"/>
  <!-- Conditions label -->
  <text x="500" y="174" font-family="Georgia,serif" font-size="10" fill="#000"
        text-anchor="middle">conc. H₂SO₄ (cat.)</text>
  <text x="500" y="215" font-family="Georgia,serif" font-size="10" fill="#000"
        text-anchor="middle">heat under reflux</text>

  <!-- ── ETHYL ETHANOATE ── -->
  <text x="665" y="148" font-family="Georgia,serif" font-size="12" font-weight="bold"
        fill="#000" text-anchor="middle">Ethyl Ethanoate (ester)</text>

  <text x="580" y="195" font-family="Georgia,serif" font-size="13" fill="#000">H₃C</text>
  <line x1="608" y1="190" x2="638" y2="190" stroke="#000" stroke-width="2.5"/>
  <circle cx="650" cy="190" r="14" fill="#fff" stroke="#000" stroke-width="2"/>
  <text x="650" y="195" font-family="Georgia,serif" font-size="12" fill="#000"
        text-anchor="middle">C</text>
  <!-- C=O upward -->
  <line x1="647" y1="176" x2="640" y2="155" stroke="#000" stroke-width="2.5"/>
  <line x1="653" y1="176" x2="646" y2="155" stroke="#000" stroke-width="2.5"/>
  <text x="637" y="150" font-family="Georgia,serif" font-size="13" fill="#000">O</text>
  <!-- C-O-C ester linkage -->
  <line x1="664" y1="190" x2="688" y2="190" stroke="#000" stroke-width="2.5"/>
  <text x="692" y="195" font-family="Georgia,serif" font-size="13" fill="#000">O</text>
  <line x1="704" y1="190" x2="726" y2="190" stroke="#000" stroke-width="2.5"/>
  <text x="728" y="195" font-family="Georgia,serif" font-size="13" fill="#000">CH₂</text>
  <line x1="756" y1="190" x2="778" y2="190" stroke="#000" stroke-width="2.5"/>
  <text x="780" y="195" font-family="Georgia,serif" font-size="13" fill="#000">CH₃</text>
  <!-- Ester linkage box -->
  <rect x="640" y="178" width="72" height="20" rx="3" fill="none" stroke="#000"
        stroke-width="2" stroke-dasharray="5,2"/>
  <text x="676" y="213" font-family="Georgia,serif" font-size="10" fill="#000"
        text-anchor="middle">ester linkage −COO−</text>

  <!-- PLUS SIGN -->
  <text x="840" y="198" font-family="Georgia,serif" font-size="22" font-weight="bold"
        fill="#000" text-anchor="middle">+</text>

  <!-- ── WATER ── -->
  <text x="920" y="148" font-family="Georgia,serif" font-size="12" font-weight="bold"
        fill="#000" text-anchor="middle">Water</text>
  <text x="920" y="198" font-family="Georgia,serif" font-size="16" font-weight="bold"
        fill="#000" text-anchor="middle">H₂O</text>
  <!-- Source labels -->
  <text x="920" y="220" font-family="Georgia,serif" font-size="9" fill="#000"
        text-anchor="middle">(H from alcohol</text>
  <text x="920" y="232" font-family="Georgia,serif" font-size="9" fill="#000"
        text-anchor="middle">OH from acid)</text>

  <!-- ══ MECHANISM OVERVIEW ══ -->
  <line x1="40" y1="270" x2="960" y2="270" stroke="#000" stroke-width="1.5"
        stroke-dasharray="8,4"/>
  <text x="500" y="296" font-family="Georgia,serif" font-size="13" font-weight="bold"
        fill="#000" text-anchor="middle">Mechanism — Nucleophilic Acyl Substitution</text>

  <!-- Step boxes -->
  <!-- Step 1 -->
  <rect x="40" y="308" width="180" height="80" rx="4" fill="#fff" stroke="#000" stroke-width="2"/>
  <text x="130" y="328" font-family="Georgia,serif" font-size="11" font-weight="bold"
        fill="#000" text-anchor="middle">Step 1</text>
  <text x="130" y="346" font-family="Georgia,serif" font-size="10" fill="#000"
        text-anchor="middle">Protonation of C=O</text>
  <text x="130" y="362" font-family="Georgia,serif" font-size="10" fill="#000"
        text-anchor="middle">by H⁺ (catalyst)</text>
  <text x="130" y="378" font-family="Georgia,serif" font-size="10" fill="#000"
        text-anchor="middle">→ activated carbonyl</text>
  <!-- Arrow -->
  <line x1="220" y1="348" x2="255" y2="348" stroke="#000" stroke-width="2"/>
  <polygon points="251,343 264,348 251,353" fill="#000"/>

  <!-- Step 2 -->
  <rect x="262" y="308" width="180" height="80" rx="4" fill="#fff" stroke="#000" stroke-width="2"/>
  <text x="352" y="328" font-family="Georgia,serif" font-size="11" font-weight="bold"
        fill="#000" text-anchor="middle">Step 2</text>
  <text x="352" y="346" font-family="Georgia,serif" font-size="10" fill="#000"
        text-anchor="middle">Nucleophilic attack</text>
  <text x="352" y="362" font-family="Georgia,serif" font-size="10" fill="#000"
        text-anchor="middle">by lone pair of O</text>
  <text x="352" y="378" font-family="Georgia,serif" font-size="10" fill="#000"
        text-anchor="middle">(alcohol oxygen)</text>
  <!-- Arrow -->
  <line x1="442" y1="348" x2="477" y2="348" stroke="#000" stroke-width="2"/>
  <polygon points="473,343 486,348 473,353" fill="#000"/>

  <!-- Step 3 -->
  <rect x="484" y="308" width="180" height="80" rx="4" fill="#fff" stroke="#000" stroke-width="2"/>
  <text x="574" y="328" font-family="Georgia,serif" font-size="11" font-weight="bold"
        fill="#000" text-anchor="middle">Step 3</text>
  <text x="574" y="346" font-family="Georgia,serif" font-size="10" fill="#000"
        text-anchor="middle">Proton transfers;</text>
  <text x="574" y="362" font-family="Georgia,serif" font-size="10" fill="#000"
        text-anchor="middle">tetrahedral</text>
  <text x="574" y="378" font-family="Georgia,serif" font-size="10" fill="#000"
        text-anchor="middle">intermediate formed</text>
  <!-- Arrow -->
  <line x1="664" y1="348" x2="699" y2="348" stroke="#000" stroke-width="2"/>
  <polygon points="695,343 708,348 695,353" fill="#000"/>

  <!-- Step 4 -->
  <rect x="706" y="308" width="220" height="80" rx="4" fill="#fff" stroke="#000" stroke-width="2"/>
  <text x="816" y="328" font-family="Georgia,serif" font-size="11" font-weight="bold"
        fill="#000" text-anchor="middle">Step 4</text>
  <text x="816" y="346" font-family="Georgia,serif" font-size="10" fill="#000"
        text-anchor="middle">Loss of H₂O; reprotonation</text>
  <text x="816" y="362" font-family="Georgia,serif" font-size="10" fill="#000"
        text-anchor="middle">of catalyst; ester formed</text>
  <text x="816" y="378" font-family="Georgia,serif" font-size="10" fill="#000"
        text-anchor="middle">→  −COO−  linkage</text>

  <!-- ══ CONDITIONS & YIELD BOX ══ -->
  <rect x="40" y="410" width="450" height="140" rx="5" fill="#fff" stroke="#000" stroke-width="2"/>
  <text x="265" y="432" font-family="Georgia,serif" font-size="12" font-weight="bold"
        fill="#000" text-anchor="middle">Reaction Conditions &amp; Practical Notes</text>
  <line x1="50" y1="438" x2="480" y2="438" stroke="#000" stroke-width="1"/>
  <text x="55" y="456" font-family="Georgia,serif" font-size="11" fill="#000">• Catalyst: conc. H₂SO₄ (few drops)</text>
  <text x="55" y="474" font-family="Georgia,serif" font-size="11" fill="#000">• Heat under reflux: prevents loss of volatile ester</text>
  <text x="55" y="492" font-family="Georgia,serif" font-size="11" fill="#000">• Equilibrium reaction — yield ≈ 67% at equilibrium</text>
  <text x="55" y="510" font-family="Georgia,serif" font-size="11" fill="#000">• Increase yield: excess acid/alcohol or remove water</text>
  <text x="55" y="528" font-family="Georgia,serif" font-size="11" fill="#000">• Purify by: separating funnel → wash → dry → distil</text>

  <!-- ══ PROPERTIES BOX ══ -->
  <rect x="510" y="410" width="450" height="140" rx="5" fill="#fff" stroke="#000" stroke-width="2"/>
  <text x="735" y="432" font-family="Georgia,serif" font-size="12" font-weight="bold"
        fill="#000" text-anchor="middle">Ester Properties &amp; Uses</text>
  <line x1="520" y1="438" x2="950" y2="438" stroke="#000" stroke-width="1"/>
  <text x="525" y="456" font-family="Georgia,serif" font-size="11" fill="#000">• Sweet/fruity smell — used as flavourings &amp; perfumes</text>
  <text x="525" y="474" font-family="Georgia,serif" font-size="11" fill="#000">• Lower boiling point than parent acid (no H-bonding)</text>
  <text x="525" y="492" font-family="Georgia,serif" font-size="11" fill="#000">• Solvents: ethyl ethanoate (nail varnish remover)</text>
  <text x="525" y="510" font-family="Georgia,serif" font-size="11" fill="#000">• Fats &amp; oils are naturally occurring esters (glycerides)</text>
  <text x="525" y="528" font-family="Georgia,serif" font-size="11" fill="#000">• Hydrolysis (+ H₂O / acid or base) reverses esterification</text>

</svg>`;


// ─── 8. CHIRALITY AND OPTICAL ISOMERS DIAGRAM ────────────────────────────────
  static chiralityDiagramSvg = `<?xml version="1.0" encoding="utf-8"?>
<svg version="1.1" xmlns="http://www.w3.org/2000/svg"
     width="1000px" height="700px" viewBox="0 0 1000 700">

  <!-- Title -->
  <text x="500" y="28" font-family="Georgia,serif" font-size="16" font-weight="bold"
        fill="#000" text-anchor="middle">Chirality and Optical Isomers</text>
  <text x="500" y="48" font-family="Georgia,serif" font-size="11" fill="#000" text-anchor="middle">
    Enantiomers of lactic acid (2-hydroxypropanoic acid) — non-superimposable mirror images
  </text>
  <line x1="40" y1="58" x2="960" y2="58" stroke="#000" stroke-width="2"/>

  <!-- ══ CHIRAL CENTRE LABEL ══ -->
  <text x="500" y="85" font-family="Georgia,serif" font-size="12" font-weight="bold"
        fill="#000" text-anchor="middle">Chiral centre (asymmetric carbon): bonded to 4 different groups</text>

  <!-- ══ WEDGE-DASH NOTATION KEY ══ -->
  <rect x="680" y="68" width="290" height="60" rx="4" fill="#fff" stroke="#000" stroke-width="1.5"/>
  <text x="825" y="86" font-family="Georgia,serif" font-size="10" font-weight="bold"
        fill="#000" text-anchor="middle">Bond Notation Key</text>
  <!-- Solid wedge -->
  <polygon points="700,110 720,100 720,120" fill="#000"/>
  <text x="730" y="112" font-family="Georgia,serif" font-size="10" fill="#000">= bond coming toward viewer</text>
  <!-- Dashed wedge drawn as dashed line -->
  <line x1="700" y1="126" x2="726" y2="118" stroke="#000" stroke-width="3"
        stroke-dasharray="3,2"/>
  <text x="730" y="128" font-family="Georgia,serif" font-size="10" fill="#000">= bond going away from viewer</text>

  <!-- ══ MIRROR PLANE ══ -->
  <line x1="500" y1="100" x2="500" y2="430" stroke="#000" stroke-width="2"
        stroke-dasharray="10,5"/>
  <text x="500" y="450" font-family="Georgia,serif" font-size="12" font-weight="bold"
        fill="#000" text-anchor="middle">Mirror Plane</text>

  <!-- ══════════════════════
       LEFT ENANTIOMER — (S)-lactic acid
  ══════════════════════ -->
  <text x="230" y="115" font-family="Georgia,serif" font-size="13" font-weight="bold"
        fill="#000" text-anchor="middle">(S)-(−)-Lactic Acid</text>
  <text x="230" y="132" font-family="Georgia,serif" font-size="10" fill="#000"
        text-anchor="middle">laevorotatory (rotates plane left)</text>

  <!-- Central chiral carbon at (230, 260) -->
  <circle cx="230" cy="260" r="18" fill="#fff" stroke="#000" stroke-width="3"/>
  <text x="230" y="265" font-family="Georgia,serif" font-size="13" font-weight="bold"
        fill="#000" text-anchor="middle">C*</text>

  <!-- Group 1: COOH — above (plain line) -->
  <line x1="230" y1="242" x2="230" y2="188" stroke="#000" stroke-width="2.5"/>
  <rect x="195" y="162" width="70" height="28" rx="3" fill="#fff" stroke="#000" stroke-width="2"/>
  <text x="230" y="181" font-family="Georgia,serif" font-size="13" fill="#000"
        text-anchor="middle">COOH</text>

  <!-- Group 2: OH — right (solid wedge toward viewer) -->
  <polygon points="248,252 330,232 330,270" fill="#000"/>
  <rect x="332" y="238" width="40" height="28" rx="3" fill="#fff" stroke="#000" stroke-width="2"/>
  <text x="352" y="257" font-family="Georgia,serif" font-size="13" fill="#000"
        text-anchor="middle">OH</text>

  <!-- Group 3: H — left (dashed = away from viewer) -->
  <line x1="212" y1="257" x2="128" y2="245" stroke="#000" stroke-width="3"
        stroke-dasharray="5,3"/>
  <rect x="94" y="233" width="36" height="28" rx="3" fill="#fff" stroke="#000" stroke-width="2"/>
  <text x="112" y="252" font-family="Georgia,serif" font-size="13" fill="#000"
        text-anchor="middle">H</text>

  <!-- Group 4: CH3 — below (plain line) -->
  <line x1="230" y1="278" x2="230" y2="336" stroke="#000" stroke-width="2.5"/>
  <rect x="192" y="336" width="76" height="28" rx="3" fill="#fff" stroke="#000" stroke-width="2"/>
  <text x="230" y="355" font-family="Georgia,serif" font-size="13" fill="#000"
        text-anchor="middle">CH₃</text>

  <!-- Priority arrows (CIP) -->
  <text x="80" y="200" font-family="Georgia,serif" font-size="10" fill="#000">Priority order:</text>
  <text x="80" y="214" font-family="Georgia,serif" font-size="10" fill="#000">OH > COOH > CH₃ > H</text>
  <text x="80" y="228" font-family="Georgia,serif" font-size="10" fill="#000">(anticlockwise) → S</text>
  <!-- Curved arrow for S -->
  <path d="M186,180 Q140,220 160,290" fill="none" stroke="#000" stroke-width="2"
        stroke-dasharray="4,2"/>
  <polygon points="156,286 162,300 168,287" fill="#000"/>

  <!-- ══════════════════════
       RIGHT ENANTIOMER — (R)-lactic acid
  ══════════════════════ -->
  <text x="770" y="115" font-family="Georgia,serif" font-size="13" font-weight="bold"
        fill="#000" text-anchor="middle">(R)-(+)-Lactic Acid</text>
  <text x="770" y="132" font-family="Georgia,serif" font-size="10" fill="#000"
        text-anchor="middle">dextrorotatory (rotates plane right)</text>

  <!-- Central chiral carbon at (770, 260) -->
  <circle cx="770" cy="260" r="18" fill="#fff" stroke="#000" stroke-width="3"/>
  <text x="770" y="265" font-family="Georgia,serif" font-size="13" font-weight="bold"
        fill="#000" text-anchor="middle">C*</text>

  <!-- Group 1: COOH — above -->
  <line x1="770" y1="242" x2="770" y2="188" stroke="#000" stroke-width="2.5"/>
  <rect x="735" y="162" width="70" height="28" rx="3" fill="#fff" stroke="#000" stroke-width="2"/>
  <text x="770" y="181" font-family="Georgia,serif" font-size="13" fill="#000"
        text-anchor="middle">COOH</text>

  <!-- Group 2: OH — left (solid wedge, mirrored) -->
  <polygon points="752,252 670,232 670,270" fill="#000"/>
  <rect x="628" y="238" width="40" height="28" rx="3" fill="#fff" stroke="#000" stroke-width="2"/>
  <text x="648" y="257" font-family="Georgia,serif" font-size="13" fill="#000"
        text-anchor="middle">OH</text>

  <!-- Group 3: H — right (dashed) -->
  <line x1="788" y1="257" x2="872" y2="245" stroke="#000" stroke-width="3"
        stroke-dasharray="5,3"/>
  <rect x="870" y="233" width="36" height="28" rx="3" fill="#fff" stroke="#000" stroke-width="2"/>
  <text x="888" y="252" font-family="Georgia,serif" font-size="13" fill="#000"
        text-anchor="middle">H</text>

  <!-- Group 4: CH3 — below -->
  <line x1="770" y1="278" x2="770" y2="336" stroke="#000" stroke-width="2.5"/>
  <rect x="732" y="336" width="76" height="28" rx="3" fill="#fff" stroke="#000" stroke-width="2"/>
  <text x="770" y="355" font-family="Georgia,serif" font-size="13" fill="#000"
        text-anchor="middle">CH₃</text>

  <!-- Priority / CIP label -->
  <text x="840" y="200" font-family="Georgia,serif" font-size="10" fill="#000">Priority order:</text>
  <text x="840" y="214" font-family="Georgia,serif" font-size="10" fill="#000">OH > COOH > CH₃ > H</text>
  <text x="840" y="228" font-family="Georgia,serif" font-size="10" fill="#000">(clockwise) → R</text>
  <!-- Curved arrow for R -->
  <path d="M814,180 Q860,220 840,290" fill="none" stroke="#000" stroke-width="2"
        stroke-dasharray="4,2"/>
  <polygon points="836,287 842,300 848,287" fill="#000"/>

  <!-- ══ NON-SUPERIMPOSABLE LABEL ══ -->
  <text x="500" y="400" font-family="Georgia,serif" font-size="12" font-weight="bold"
        fill="#000" text-anchor="middle">⟵ Non-superimposable mirror images (enantiomers) ⟶</text>

  <!-- ══ OPTICAL ROTATION DIAGRAM ══ -->
  <line x1="40" y1="470" x2="960" y2="470" stroke="#000" stroke-width="1.5"
        stroke-dasharray="8,4"/>
  <text x="500" y="498" font-family="Georgia,serif" font-size="13" font-weight="bold"
        fill="#000" text-anchor="middle">Optical Activity — Plane-Polarised Light</text>

  <!-- Polarimeter schematic -->
  <!-- Light source -->
  <rect x="40" y="520" width="70" height="40" rx="4" fill="#fff" stroke="#000" stroke-width="2"/>
  <text x="75" y="535" font-family="Georgia,serif" font-size="9" fill="#000" text-anchor="middle">Light</text>
  <text x="75" y="548" font-family="Georgia,serif" font-size="9" fill="#000" text-anchor="middle">source</text>
  <!-- Polariser -->
  <rect x="130" y="514" width="40" height="52" rx="3" fill="#fff" stroke="#000" stroke-width="2"/>
  <text x="150" y="536" font-family="Georgia,serif" font-size="8" fill="#000" text-anchor="middle">Polar-</text>
  <text x="150" y="548" font-family="Georgia,serif" font-size="8" fill="#000" text-anchor="middle">iser</text>
  <!-- Beam line -->
  <line x1="110" y1="540" x2="130" y2="540" stroke="#000" stroke-width="2"/>
  <line x1="170" y1="540" x2="310" y2="540" stroke="#000" stroke-width="2"/>
  <!-- Sample tube -->
  <rect x="310" y="520" width="200" height="40" rx="20" fill="#fff" stroke="#000" stroke-width="2"/>
  <text x="410" y="536" font-family="Georgia,serif" font-size="10" fill="#000" text-anchor="middle">Sample tube</text>
  <text x="410" y="550" font-family="Georgia,serif" font-size="9" fill="#000" text-anchor="middle">(chiral solution)</text>
  <line x1="510" y1="540" x2="650" y2="540" stroke="#000" stroke-width="2"/>
  <!-- Analyser -->
  <rect x="650" y="514" width="40" height="52" rx="3" fill="#fff" stroke="#000" stroke-width="2"/>
  <text x="670" y="536" font-family="Georgia,serif" font-size="8" fill="#000" text-anchor="middle">Ana-</text>
  <text x="670" y="548" font-family="Georgia,serif" font-size="8" fill="#000" text-anchor="middle">lyser</text>
  <line x1="690" y1="540" x2="730" y2="540" stroke="#000" stroke-width="2"/>
  <!-- Eye / detector -->
  <ellipse cx="760" cy="540" rx="28" ry="20" fill="#fff" stroke="#000" stroke-width="2"/>
  <circle cx="760" cy="540" r="8" fill="#000"/>
  <text x="760" y="575" font-family="Georgia,serif" font-size="9" fill="#000" text-anchor="middle">detector</text>

  <!-- Rotation arrows -->
  <text x="410" y="510" font-family="Georgia,serif" font-size="10" fill="#000" text-anchor="middle">
    (+) enantiomer: rotates +α°  |  (−) enantiomer: rotates −α°
  </text>

  <!-- ══ SUMMARY BOX ══ -->
  <rect x="40" y="590" width="920" height="95" rx="6" fill="#fff" stroke="#000"
        stroke-width="2" stroke-dasharray="6,3"/>
  <text x="500" y="612" font-family="Georgia,serif" font-size="13" font-weight="bold"
        fill="#000" text-anchor="middle">Key Points — Chirality &amp; Optical Isomerism</text>
  <line x1="50" y1="618" x2="950" y2="618" stroke="#000" stroke-width="1"/>
  <text x="55" y="636" font-family="Georgia,serif" font-size="11" fill="#000">
    • Chiral carbon (C*): sp³ carbon bonded to 4 different substituents — produces non-superimposable mirror images
  </text>
  <text x="55" y="654" font-family="Georgia,serif" font-size="11" fill="#000">
    • Enantiomers: identical physical/chemical properties except optical rotation and reactions with other chiral molecules
  </text>
  <text x="55" y="672" font-family="Georgia,serif" font-size="11" fill="#000">
    • Racemic mixture (racemate): 50:50 mix of both enantiomers — optically inactive overall | CIP rules assign R/S configuration
  </text>

</svg>`;




// ─── 9a. OXIDATION STATES ASSIGNMENT — K₂Cr₂O₇ ──────────────────────────────
static oxidationStatesDiagramSvg = `<?xml version="1.0" encoding="utf-8"?>
<svg version="1.1" xmlns="http://www.w3.org/2000/svg"
     width="900px" height="700px" viewBox="0 0 900 700">

  <text x="450" y="30" font-family="Georgia,serif" font-size="16" font-weight="bold"
        fill="#000" text-anchor="middle">Oxidation States Assignment</text>
  <text x="450" y="50" font-family="Georgia,serif" font-size="11" fill="#333"
        text-anchor="middle">Worked example: K₂Cr₂O₇ (potassium dichromate)</text>

  <!-- ── RULES BOX ── -->
  <rect x="30" y="70" width="380" height="280" rx="5" fill="none" stroke="#000" stroke-width="2"/>
  <text x="220" y="94" font-family="Georgia,serif" font-size="13" font-weight="bold"
        fill="#000" text-anchor="middle">Rules for Assigning Oxidation States</text>
  <line x1="30" y1="100" x2="410" y2="100" stroke="#000" stroke-width="1.5"/>

  <text x="44" y="120" font-family="Georgia,serif" font-size="11" fill="#000">1. Pure element: oxidation state = 0</text>
  <text x="56" y="134" font-family="Georgia,serif" font-size="10" fill="#444">   e.g. Fe, O₂, Cl₂ → all = 0</text>

  <text x="44" y="152" font-family="Georgia,serif" font-size="11" fill="#000">2. Monoatomic ion = ionic charge</text>
  <text x="56" y="166" font-family="Georgia,serif" font-size="10" fill="#444">   e.g. Na⁺ = +1, Mg²⁺ = +2, Cl⁻ = −1</text>

  <text x="44" y="184" font-family="Georgia,serif" font-size="11" fill="#000">3. Fluorine always = −1 in compounds</text>

  <text x="44" y="202" font-family="Georgia,serif" font-size="11" fill="#000">4. Oxygen usually = −2</text>
  <text x="56" y="216" font-family="Georgia,serif" font-size="10" fill="#444">   (exception: peroxides = −1, OF₂ = +2)</text>

  <text x="44" y="234" font-family="Georgia,serif" font-size="11" fill="#000">5. Hydrogen usually = +1</text>
  <text x="56" y="248" font-family="Georgia,serif" font-size="10" fill="#444">   (exception: metal hydrides = −1)</text>

  <text x="44" y="266" font-family="Georgia,serif" font-size="11" fill="#000">6. Group I metals = +1; Group II = +2</text>

  <text x="44" y="284" font-family="Georgia,serif" font-size="11" fill="#000">7. Sum of oxidation states in neutral</text>
  <text x="56" y="298" font-family="Georgia,serif" font-size="11" fill="#000">   compound = 0; in ion = ionic charge</text>
  <text x="56" y="312" font-family="Georgia,serif" font-size="10" fill="#444">   (this is the key balancing rule)</text>

  <!-- ── COMPOUND DISPLAY ── -->
  <rect x="450" y="70" width="420" height="120" rx="5" fill="none" stroke="#000" stroke-width="2"/>
  <text x="660" y="94" font-family="Georgia,serif" font-size="13" font-weight="bold"
        fill="#000" text-anchor="middle">Compound: K₂Cr₂O₇</text>
  <line x1="450" y1="100" x2="870" y2="100" stroke="#000" stroke-width="1.5"/>
  <text x="660" y="122" font-family="Georgia,serif" font-size="12" fill="#000"
        text-anchor="middle">Potassium dichromate(VI)</text>
  <text x="660" y="142" font-family="Georgia,serif" font-size="11" fill="#444"
        text-anchor="middle">Orange-red crystalline solid</text>
  <text x="660" y="162" font-family="Georgia,serif" font-size="11" fill="#444"
        text-anchor="middle">Common oxidising agent in redox reactions</text>

  <!-- ── CALCULATION BOX ── -->
  <rect x="450" y="210" width="420" height="220" rx="5" fill="none" stroke="#000" stroke-width="2"/>
  <text x="660" y="234" font-family="Georgia,serif" font-size="13" font-weight="bold"
        fill="#000" text-anchor="middle">Step-by-Step Calculation</text>
  <line x1="450" y1="240" x2="870" y2="240" stroke="#000" stroke-width="1.5"/>

  <text x="464" y="262" font-family="Georgia,serif" font-size="11" fill="#000">Known oxidation states:</text>
  <text x="480" y="278" font-family="Georgia,serif" font-size="11" fill="#000">• K (Group I) = +1</text>
  <text x="480" y="294" font-family="Georgia,serif" font-size="11" fill="#000">• O = −2  (no peroxide here)</text>

  <text x="464" y="316" font-family="Georgia,serif" font-size="11" fill="#000">Let oxidation state of Cr = x</text>

  <text x="464" y="338" font-family="Georgia,serif" font-size="11" fill="#000">Set up equation (neutral compound → sum = 0):</text>
  <rect x="464" y="346" width="390" height="24" rx="3" fill="#e8e8e8" stroke="#000" stroke-width="1"/>
  <text x="659" y="362" font-family="Georgia,serif" font-size="12" font-weight="bold"
        fill="#000" text-anchor="middle">2(+1) + 2x + 7(−2) = 0</text>

  <text x="464" y="390" font-family="Georgia,serif" font-size="11" fill="#000">  2 + 2x − 14 = 0   →   2x = 12   →   x = +6</text>

  <text x="464" y="412" font-family="Georgia,serif" font-size="12" font-weight="bold" fill="#000">
  </text>
  <rect x="464" y="416" width="200" height="22" rx="3" fill="#d0d0d0" stroke="#000" stroke-width="1.5"/>
  <text x="564" y="431" font-family="Georgia,serif" font-size="12" font-weight="bold"
        fill="#000" text-anchor="middle">Cr oxidation state = +6</text>

  <!-- ── VERIFICATION BOX ── -->
  <rect x="30" y="370" width="380" height="130" rx="5" fill="none" stroke="#000" stroke-width="2"/>
  <text x="220" y="394" font-family="Georgia,serif" font-size="13" font-weight="bold"
        fill="#000" text-anchor="middle">Verification</text>
  <line x1="30" y1="400" x2="410" y2="400" stroke="#000" stroke-width="1.5"/>

  <text x="44" y="422" font-family="Georgia,serif" font-size="11" fill="#000">Atom count and contributions:</text>
  <text x="44" y="440" font-family="Georgia,serif" font-size="11" fill="#000">  2 × K (+1)  =  +2</text>
  <text x="44" y="456" font-family="Georgia,serif" font-size="11" fill="#000">  2 × Cr (+6) = +12</text>
  <text x="44" y="472" font-family="Georgia,serif" font-size="11" fill="#000">  7 × O (−2)  = −14</text>
  <line x1="44" y1="478" x2="200" y2="478" stroke="#000" stroke-width="1"/>
  <text x="44" y="492" font-family="Georgia,serif" font-size="12" font-weight="bold" fill="#000">  Total = +2 + 12 − 14 = 0  ✓</text>

  <!-- ── SUMMARY / LABELLED DIAGRAM ── -->
  <rect x="30" y="520" width="840" height="160" rx="5" fill="none" stroke="#000" stroke-width="2"/>
  <text x="450" y="544" font-family="Georgia,serif" font-size="13" font-weight="bold"
        fill="#000" text-anchor="middle">Oxidation State Labels on Formula</text>
  <line x1="30" y1="550" x2="870" y2="550" stroke="#000" stroke-width="1.5"/>

  <!-- Formula with oxidation state annotations -->
  <text x="280" y="610" font-family="Georgia,serif" font-size="36" font-weight="bold" fill="#000">K</text>
  <text x="306" y="590" font-family="Georgia,serif" font-size="14" fill="#000">+1</text>
  <text x="314" y="610" font-family="Georgia,serif" font-size="24" fill="#000">₂</text>

  <text x="336" y="610" font-family="Georgia,serif" font-size="36" font-weight="bold" fill="#000">Cr</text>
  <text x="370" y="590" font-family="Georgia,serif" font-size="14" fill="#000">+6</text>
  <text x="378" y="610" font-family="Georgia,serif" font-size="24" fill="#000">₂</text>

  <text x="396" y="610" font-family="Georgia,serif" font-size="36" font-weight="bold" fill="#000">O</text>
  <text x="418" y="590" font-family="Georgia,serif" font-size="14" fill="#000">−2</text>
  <text x="424" y="610" font-family="Georgia,serif" font-size="24" fill="#000">₇</text>

  <!-- bracket lines -->
  <line x1="280" y1="620" x2="280" y2="635" stroke="#000" stroke-width="1.5"/>
  <line x1="280" y1="635" x2="324" y2="635" stroke="#000" stroke-width="1.5"/>
  <line x1="324" y1="635" x2="324" y2="620" stroke="#000" stroke-width="1.5"/>
  <text x="302" y="652" font-family="Georgia,serif" font-size="10" fill="#000" text-anchor="middle">+1 each</text>

  <line x1="336" y1="620" x2="336" y2="635" stroke="#000" stroke-width="1.5"/>
  <line x1="336" y1="635" x2="392" y2="635" stroke="#000" stroke-width="1.5"/>
  <line x1="392" y1="635" x2="392" y2="620" stroke="#000" stroke-width="1.5"/>
  <text x="364" y="652" font-family="Georgia,serif" font-size="10" fill="#000" text-anchor="middle">+6 each</text>

  <line x1="396" y1="620" x2="396" y2="635" stroke="#000" stroke-width="1.5"/>
  <line x1="396" y1="635" x2="440" y2="635" stroke="#000" stroke-width="1.5"/>
  <line x1="440" y1="635" x2="440" y2="620" stroke="#000" stroke-width="1.5"/>
  <text x="418" y="652" font-family="Georgia,serif" font-size="10" fill="#000" text-anchor="middle">−2 each</text>

  <text x="580" y="590" font-family="Georgia,serif" font-size="11" fill="#000">Note: Cr(VI) is a powerful</text>
  <text x="580" y="608" font-family="Georgia,serif" font-size="11" fill="#000">oxidising agent. It is reduced</text>
  <text x="580" y="626" font-family="Georgia,serif" font-size="11" fill="#000">to Cr(III) in redox reactions:</text>
  <text x="580" y="648" font-family="Georgia,serif" font-size="11" font-weight="bold" fill="#000">Cr₂O₇²⁻ + 14H⁺ + 6e⁻ → 2Cr³⁺ + 7H₂O</text>
</svg>`;

// ─── 9b. HALF-REACTION METHOD — MnO₄⁻ / Fe²⁺ ────────────────────────────────
static halfReactionDiagramSvg = `<?xml version="1.0" encoding="utf-8"?>
<svg version="1.1" xmlns="http://www.w3.org/2000/svg"
     width="1000px" height="800px" viewBox="0 0 1000 800">

  <text x="500" y="30" font-family="Georgia,serif" font-size="16" font-weight="bold"
        fill="#000" text-anchor="middle">Half-Reaction Method — Balancing Redox Equations</text>
  <text x="500" y="50" font-family="Georgia,serif" font-size="11" fill="#333"
        text-anchor="middle">MnO₄⁻ + Fe²⁺ → Mn²⁺ + Fe³⁺  (acidic medium)</text>

  <!-- Overall unbalanced reaction -->
  <rect x="30" y="65" width="940" height="44" rx="4" fill="none" stroke="#000" stroke-width="2"/>
  <text x="500" y="82" font-family="Georgia,serif" font-size="11" font-weight="bold"
        fill="#000" text-anchor="middle">Unbalanced equation:</text>
  <text x="500" y="100" font-family="Georgia,serif" font-size="12" fill="#000"
        text-anchor="middle">MnO₄⁻  +  Fe²⁺  →  Mn²⁺  +  Fe³⁺</text>

  <!-- Step labels column -->
  <text x="44" y="138" font-family="Georgia,serif" font-size="12" font-weight="bold" fill="#000">STEP 1</text>
  <text x="44" y="152" font-family="Georgia,serif" font-size="10" fill="#444">Separate</text>
  <text x="44" y="164" font-family="Georgia,serif" font-size="10" fill="#444">half-rxns</text>

  <!-- OXIDATION HALF -->
  <rect x="120" y="118" width="400" height="230" rx="5" fill="none" stroke="#000" stroke-width="2"/>
  <text x="320" y="140" font-family="Georgia,serif" font-size="13" font-weight="bold"
        fill="#000" text-anchor="middle">OXIDATION HALF (Anode)</text>
  <line x1="120" y1="146" x2="520" y2="146" stroke="#000" stroke-width="1.5"/>

  <text x="134" y="168" font-family="Georgia,serif" font-size="11" fill="#000">Unbalanced:  Fe²⁺ → Fe³⁺</text>
  <text x="134" y="190" font-family="Georgia,serif" font-size="11" fill="#000">Balance atoms: already balanced (1 Fe each side)</text>
  <text x="134" y="212" font-family="Georgia,serif" font-size="11" fill="#000">Balance charge (add e⁻ to right — loss of e⁻):</text>
  <rect x="134" y="220" width="340" height="22" rx="3" fill="#d8d8d8" stroke="#000" stroke-width="1"/>
  <text x="304" y="235" font-family="Georgia,serif" font-size="12" font-weight="bold"
        fill="#000" text-anchor="middle">Fe²⁺  →  Fe³⁺  +  e⁻</text>

  <text x="134" y="262" font-family="Georgia,serif" font-size="11" fill="#000">Check:  LHS charge = +2</text>
  <text x="134" y="278" font-family="Georgia,serif" font-size="11" fill="#000">        RHS charge = +3 + (−1) = +2  ✓</text>
  <text x="134" y="300" font-family="Georgia,serif" font-size="11" font-weight="bold" fill="#000">Mn: +2 → +2 ... wait — Fe: +2 → +3</text>
  <text x="134" y="318" font-family="Georgia,serif" font-size="11" fill="#000">Fe is OXIDISED (loses 1 electron)</text>
  <text x="134" y="334" font-family="Georgia,serif" font-size="10" fill="#555">(OIL — Oxidation Is Loss)</text>

  <!-- REDUCTION HALF -->
  <rect x="540" y="118" width="430" height="230" rx="5" fill="none" stroke="#000" stroke-width="2"/>
  <text x="755" y="140" font-family="Georgia,serif" font-size="13" font-weight="bold"
        fill="#000" text-anchor="middle">REDUCTION HALF (Cathode)</text>
  <line x1="540" y1="146" x2="970" y2="146" stroke="#000" stroke-width="1.5"/>

  <text x="554" y="168" font-family="Georgia,serif" font-size="11" fill="#000">Unbalanced:  MnO₄⁻ → Mn²⁺</text>
  <text x="554" y="186" font-family="Georgia,serif" font-size="11" fill="#000">Balance O: add 4H₂O to right</text>
  <text x="554" y="202" font-family="Georgia,serif" font-size="11" fill="#000">  MnO₄⁻ → Mn²⁺ + 4H₂O</text>
  <text x="554" y="220" font-family="Georgia,serif" font-size="11" fill="#000">Balance H: add 8H⁺ to left (acidic)</text>
  <text x="554" y="236" font-family="Georgia,serif" font-size="11" fill="#000">  MnO₄⁻ + 8H⁺ → Mn²⁺ + 4H₂O</text>
  <text x="554" y="254" font-family="Georgia,serif" font-size="11" fill="#000">Balance charge: LHS = −1+8 = +7; RHS = +2</text>
  <text x="554" y="270" font-family="Georgia,serif" font-size="11" fill="#000">  Add 5e⁻ to left:</text>
  <rect x="554" y="278" width="370" height="22" rx="3" fill="#d8d8d8" stroke="#000" stroke-width="1"/>
  <text x="739" y="293" font-family="Georgia,serif" font-size="12" font-weight="bold"
        fill="#000" text-anchor="middle">MnO₄⁻ + 8H⁺ + 5e⁻  →  Mn²⁺ + 4H₂O</text>
  <text x="554" y="330" font-family="Georgia,serif" font-size="11" fill="#000">Mn is REDUCED (+7 → +2, gains 5e⁻)</text>
  <text x="554" y="344" font-family="Georgia,serif" font-size="10" fill="#555">(RIG — Reduction Is Gain)</text>

  <!-- STEP 2: Equalise electrons -->
  <text x="44" y="382" font-family="Georgia,serif" font-size="12" font-weight="bold" fill="#000">STEP 2</text>
  <text x="44" y="396" font-family="Georgia,serif" font-size="10" fill="#444">Equalise</text>
  <text x="44" y="408" font-family="Georgia,serif" font-size="10" fill="#444">electrons</text>

  <rect x="120" y="365" width="840" height="80" rx="5" fill="none" stroke="#000" stroke-width="2"/>
  <text x="540" y="386" font-family="Georgia,serif" font-size="12" fill="#000" text-anchor="middle">
    Oxidation produces 1e⁻;  Reduction consumes 5e⁻
  </text>
  <text x="540" y="406" font-family="Georgia,serif" font-size="12" fill="#000" text-anchor="middle">
    Multiply oxidation half × 5:
  </text>
  <rect x="200" y="412" width="680" height="22" rx="3" fill="#d8d8d8" stroke="#000" stroke-width="1"/>
  <text x="540" y="427" font-family="Georgia,serif" font-size="12" font-weight="bold"
        fill="#000" text-anchor="middle">5Fe²⁺  →  5Fe³⁺  +  5e⁻</text>

  <!-- STEP 3: Add half-reactions -->
  <text x="44" y="478" font-family="Georgia,serif" font-size="12" font-weight="bold" fill="#000">STEP 3</text>
  <text x="44" y="492" font-family="Georgia,serif" font-size="10" fill="#444">Add &amp;</text>
  <text x="44" y="504" font-family="Georgia,serif" font-size="10" fill="#444">cancel e⁻</text>

  <rect x="120" y="460" width="840" height="110" rx="5" fill="none" stroke="#000" stroke-width="2"/>
  <text x="540" y="481" font-family="Georgia,serif" font-size="11" fill="#000" text-anchor="middle">
    Add both half-reactions; 5e⁻ cancel:
  </text>
  <text x="140" y="502" font-family="Georgia,serif" font-size="11" fill="#000">
    MnO₄⁻ + 8H⁺ + 5e⁻  +  5Fe²⁺  →  Mn²⁺ + 4H₂O  +  5Fe³⁺  +  5e⁻
  </text>
  <line x1="140" y1="510" x2="860" y2="510" stroke="#000" stroke-width="1" stroke-dasharray="4,3"/>
  <rect x="120" y="518" width="840" height="42" rx="3" fill="#c8c8c8" stroke="#000" stroke-width="1.5"/>
  <text x="540" y="534" font-family="Georgia,serif" font-size="13" font-weight="bold"
        fill="#000" text-anchor="middle">BALANCED OVERALL EQUATION:</text>
  <text x="540" y="552" font-family="Georgia,serif" font-size="13" font-weight="bold"
        fill="#000" text-anchor="middle">MnO₄⁻  +  8H⁺  +  5Fe²⁺  →  Mn²⁺  +  4H₂O  +  5Fe³⁺</text>

  <!-- STEP 4: Verify -->
  <text x="44" y="600" font-family="Georgia,serif" font-size="12" font-weight="bold" fill="#000">STEP 4</text>
  <text x="44" y="614" font-family="Georgia,serif" font-size="10" fill="#444">Verify</text>

  <rect x="120" y="582" width="840" height="100" rx="5" fill="none" stroke="#000" stroke-width="2"/>
  <text x="540" y="602" font-family="Georgia,serif" font-size="12" font-weight="bold"
        fill="#000" text-anchor="middle">Verification</text>
  <line x1="120" y1="608" x2="960" y2="608" stroke="#000" stroke-width="1.5"/>
  <text x="140" y="628" font-family="Georgia,serif" font-size="11" fill="#000">Atoms: Mn(1=1)✓  Fe(5=5)✓  O(4=4)✓  H(8=8)✓</text>
  <text x="140" y="648" font-family="Georgia,serif" font-size="11" fill="#000">Charge LHS: −1 + 8 + 5(+2) = −1 + 8 + 10 = +17</text>
  <text x="140" y="666" font-family="Georgia,serif" font-size="11" fill="#000">Charge RHS: +2 + 0 + 5(+3) = +2 + 15 = +17  ✓</text>

  <!-- Summary -->
  <rect x="30" y="700" width="940" height="84" rx="5" fill="none" stroke="#000" stroke-width="2" stroke-dasharray="5,3"/>
  <text x="500" y="720" font-family="Georgia,serif" font-size="12" font-weight="bold"
        fill="#000" text-anchor="middle">Summary: Half-Reaction Method Steps</text>
  <text x="500" y="738" font-family="Georgia,serif" font-size="11" fill="#000"
        text-anchor="middle">1. Separate into oxidation &amp; reduction halves  |  2. Balance atoms (O with H₂O, H with H⁺)</text>
  <text x="500" y="756" font-family="Georgia,serif" font-size="11" fill="#000"
        text-anchor="middle">3. Balance charge with electrons  |  4. Equalise electrons  |  5. Add &amp; cancel  |  6. Verify</text>
  <text x="500" y="774" font-family="Georgia,serif" font-size="10" fill="#555"
        text-anchor="middle">For basic medium: after balancing in acid, add equal OH⁻ to both sides to neutralise H⁺ → H₂O</text>
</svg>`;

// ─── 9c. ELECTROCHEMICAL SERIES ───────────────────────────────────────────────
static electrochemicalSeriesDiagramSvg = `<?xml version="1.0" encoding="utf-8"?>
<svg version="1.1" xmlns="http://www.w3.org/2000/svg"
     width="900px" height="800px" viewBox="0 0 900 800">

  <text x="450" y="28" font-family="Georgia,serif" font-size="16" font-weight="bold"
        fill="#000" text-anchor="middle">Electrochemical Series</text>
  <text x="450" y="46" font-family="Georgia,serif" font-size="11" fill="#333"
        text-anchor="middle">Standard electrode potentials E° at 298 K, 1 mol dm⁻³, 100 kPa</text>

  <!-- Column headers -->
  <rect x="30" y="58" width="840" height="28" rx="3" fill="#333" stroke="#000" stroke-width="1.5"/>
  <text x="160" y="77" font-family="Georgia,serif" font-size="12" font-weight="bold"
        fill="#fff" text-anchor="middle">Half-Equation (Reduction)</text>
  <text x="580" y="77" font-family="Georgia,serif" font-size="12" font-weight="bold"
        fill="#fff" text-anchor="middle">E° / V</text>
  <text x="740" y="77" font-family="Georgia,serif" font-size="12" font-weight="bold"
        fill="#fff" text-anchor="middle">Agent type</text>
  <line x1="480" y1="58" x2="480" y2="720" stroke="#000" stroke-width="1"/>
  <line x1="660" y1="58" x2="660" y2="720" stroke="#000" stroke-width="1"/>

  <!-- Data rows: alternating shading -->
  <!-- Row height 36px starting y=86 -->
  <!-- Helper: shade every other row -->
  <rect x="30" y="86"  width="840" height="30" fill="#f0f0f0"/>
  <rect x="30" y="146" width="840" height="30" fill="#f0f0f0"/>
  <rect x="30" y="206" width="840" height="30" fill="#f0f0f0"/>
  <rect x="30" y="266" width="840" height="30" fill="#f0f0f0"/>
  <rect x="30" y="326" width="840" height="30" fill="#f0f0f0"/>
  <rect x="30" y="386" width="840" height="30" fill="#f0f0f0"/>
  <rect x="30" y="446" width="840" height="30" fill="#f0f0f0"/>
  <rect x="30" y="506" width="840" height="30" fill="#f0f0f0"/>
  <rect x="30" y="566" width="840" height="30" fill="#f0f0f0"/>
  <rect x="30" y="626" width="840" height="30" fill="#f0f0f0"/>
  <rect x="30" y="686" width="840" height="30" fill="#f0f0f0"/>

  <!-- Row data -->
  <!-- E° most positive at top (strongest oxidising agents) -->
  <text x="44"  y="106" font-family="Georgia,serif" font-size="11" fill="#000">F₂  +  2e⁻  →  2F⁻</text>
  <text x="560" y="106" font-family="Georgia,serif" font-size="11" font-weight="bold" fill="#000">+2.87</text>
  <text x="670" y="106" font-family="Georgia,serif" font-size="10" fill="#000">Strongest oxidising agent ↑</text>

  <text x="44"  y="166" font-family="Georgia,serif" font-size="11" fill="#000">MnO₄⁻ + 8H⁺ + 5e⁻  →  Mn²⁺ + 4H₂O</text>
  <text x="560" y="166" font-family="Georgia,serif" font-size="11" font-weight="bold" fill="#000">+1.51</text>
  <text x="670" y="166" font-family="Georgia,serif" font-size="10" fill="#000">Strong oxidising agent</text>

  <text x="44"  y="226" font-family="Georgia,serif" font-size="11" fill="#000">Cl₂  +  2e⁻  →  2Cl⁻</text>
  <text x="560" y="226" font-family="Georgia,serif" font-size="11" font-weight="bold" fill="#000">+1.36</text>
  <text x="670" y="226" font-family="Georgia,serif" font-size="10" fill="#000">Oxidising agent</text>

  <text x="44"  y="286" font-family="Georgia,serif" font-size="11" fill="#000">Cr₂O₇²⁻ + 14H⁺ + 6e⁻  →  2Cr³⁺ + 7H₂O</text>
  <text x="560" y="286" font-family="Georgia,serif" font-size="11" font-weight="bold" fill="#000">+1.33</text>
  <text x="670" y="286" font-family="Georgia,serif" font-size="10" fill="#000">Oxidising agent</text>

  <text x="44"  y="346" font-family="Georgia,serif" font-size="11" fill="#000">O₂  +  4H⁺  +  4e⁻  →  2H₂O</text>
  <text x="560" y="346" font-family="Georgia,serif" font-size="11" font-weight="bold" fill="#000">+1.23</text>
  <text x="670" y="346" font-family="Georgia,serif" font-size="10" fill="#000">Oxidising agent</text>

  <text x="44"  y="406" font-family="Georgia,serif" font-size="11" fill="#000">Cu²⁺  +  2e⁻  →  Cu</text>
  <text x="560" y="406" font-family="Georgia,serif" font-size="11" font-weight="bold" fill="#000">+0.34</text>
  <text x="670" y="406" font-family="Georgia,serif" font-size="10" fill="#000">Weak oxidising agent</text>

  <!-- Standard hydrogen electrode — reference -->
  <rect x="30" y="436" width="840" height="30" fill="#000"/>
  <text x="44"  y="456" font-family="Georgia,serif" font-size="11" fill="#fff">2H⁺  +  2e⁻  →  H₂</text>
  <text x="560" y="456" font-family="Georgia,serif" font-size="12" font-weight="bold" fill="#fff">  0.00</text>
  <text x="670" y="456" font-family="Georgia,serif" font-size="10" fill="#fff">Standard reference (SHE)</text>

  <text x="44"  y="526" font-family="Georgia,serif" font-size="11" fill="#000">Fe²⁺  +  2e⁻  →  Fe</text>
  <text x="560" y="526" font-family="Georgia,serif" font-size="11" font-weight="bold" fill="#000">−0.44</text>
  <text x="670" y="526" font-family="Georgia,serif" font-size="10" fill="#000">Weak reducing agent</text>

  <text x="44"  y="586" font-family="Georgia,serif" font-size="11" fill="#000">Zn²⁺  +  2e⁻  →  Zn</text>
  <text x="560" y="586" font-family="Georgia,serif" font-size="11" font-weight="bold" fill="#000">−0.76</text>
  <text x="670" y="586" font-family="Georgia,serif" font-size="10" fill="#000">Reducing agent</text>

  <text x="44"  y="646" font-family="Georgia,serif" font-size="11" fill="#000">Al³⁺  +  3e⁻  →  Al</text>
  <text x="560" y="646" font-family="Georgia,serif" font-size="11" font-weight="bold" fill="#000">−1.66</text>
  <text x="670" y="646" font-family="Georgia,serif" font-size="10" fill="#000">Strong reducing agent</text>

  <text x="44"  y="706" font-family="Georgia,serif" font-size="11" fill="#000">Li⁺  +  e⁻  →  Li</text>
  <text x="560" y="706" font-family="Georgia,serif" font-size="11" font-weight="bold" fill="#000">−3.04</text>
  <text x="670" y="706" font-family="Georgia,serif" font-size="10" fill="#000">Strongest reducing agent ↓</text>

  <!-- Table border -->
  <rect x="30" y="86" width="840" height="630" fill="none" stroke="#000" stroke-width="2"/>
  <!-- Horizontal row dividers -->
  <line x1="30" y1="116" x2="870" y2="116" stroke="#888" stroke-width="0.8"/>
  <line x1="30" y1="176" x2="870" y2="176" stroke="#888" stroke-width="0.8"/>
  <line x1="30" y1="236" x2="870" y2="236" stroke="#888" stroke-width="0.8"/>
  <line x1="30" y1="296" x2="870" y2="296" stroke="#888" stroke-width="0.8"/>
  <line x1="30" y1="356" x2="870" y2="356" stroke="#888" stroke-width="0.8"/>
  <line x1="30" y1="416" x2="870" y2="416" stroke="#888" stroke-width="0.8"/>
  <line x1="30" y1="466" x2="870" y2="466" stroke="#888" stroke-width="0.8"/>
  <line x1="30" y1="536" x2="870" y2="536" stroke="#888" stroke-width="0.8"/>
  <line x1="30" y1="596" x2="870" y2="596" stroke="#888" stroke-width="0.8"/>
  <line x1="30" y1="656" x2="870" y2="656" stroke="#888" stroke-width="0.8"/>

  <!-- Arrows on right indicating direction -->
  <line x1="878" y1="86"  x2="878" y2="435" stroke="#000" stroke-width="2"/>
  <polygon points="873,90 878,76 883,90" fill="#000"/>
  <text x="890" y="265" font-family="Georgia,serif" font-size="10" fill="#000"
        transform="rotate(90,890,265)">Oxidising power increases →</text>

  <line x1="878" y1="467" x2="878" y2="716" stroke="#000" stroke-width="2"/>
  <polygon points="873,712 878,726 883,712" fill="#000"/>
  <text x="890" y="590" font-family="Georgia,serif" font-size="10" fill="#000"
        transform="rotate(90,890,590)">Reducing power increases →</text>

  <!-- E°cell rule -->
  <rect x="30" y="726" width="840" height="60" rx="5" fill="none" stroke="#000" stroke-width="2" stroke-dasharray="5,3"/>
  <text x="450" y="748" font-family="Georgia,serif" font-size="12" font-weight="bold"
        fill="#000" text-anchor="middle">Calculating E°cell:</text>
  <text x="450" y="768" font-family="Georgia,serif" font-size="12" fill="#000"
        text-anchor="middle">E°cell  =  E°cathode  −  E°anode    |    Spontaneous if E°cell &gt; 0</text>
  <text x="450" y="782" font-family="Georgia,serif" font-size="10" fill="#555"
        text-anchor="middle">The species with the higher (more positive) E° value will be reduced (act as cathode)</text>
</svg>`;

// ─── 9d. GALVANIC CELL — Zn/Cu ────────────────────────────────────────────────
static galvanicCellDiagramSvg = `<?xml version="1.0" encoding="utf-8"?>
<svg version="1.1" xmlns="http://www.w3.org/2000/svg"
     width="1000px" height="700px" viewBox="0 0 1000 700">

  <text x="500" y="28" font-family="Georgia,serif" font-size="16" font-weight="bold"
        fill="#000" text-anchor="middle">Galvanic (Voltaic) Cell — Zn / Cu</text>
  <text x="500" y="46" font-family="Georgia,serif" font-size="11" fill="#333"
        text-anchor="middle">Spontaneous redox reaction generates electrical energy  |  E°cell = +1.10 V</text>

  <!-- ══ LEFT HALF-CELL: Zn anode ══ -->
  <!-- Beaker -->
  <path d="M60,200 L60,520 Q60,540 80,540 L280,540 Q300,540 300,520 L300,200"
        fill="none" stroke="#000" stroke-width="3"/>
  <line x1="48" y1="200" x2="312" y2="200" stroke="#000" stroke-width="2.5"/>
  <!-- Solution fill (ZnSO₄) -->
  <path d="M62,380 L62,518 Q62,536 80,536 L280,536 Q298,536 298,518 L298,380 Z"
        fill="#e8e8e8"/>
  <text x="180" y="480" font-family="Georgia,serif" font-size="11" font-weight="bold"
        fill="#000" text-anchor="middle">ZnSO₄ (aq)</text>
  <text x="180" y="496" font-family="Georgia,serif" font-size="10" fill="#444"
        text-anchor="middle">1 mol dm⁻³</text>

  <!-- Zn electrode -->
  <rect x="156" y="195" width="20" height="300" rx="3" fill="#aaa" stroke="#000" stroke-width="2"/>
  <text x="166" y="185" font-family="Georgia,serif" font-size="13" font-weight="bold"
        fill="#000" text-anchor="middle">Zn</text>

  <!-- Dissolution arrows (Zn → Zn²⁺) -->
  <line x1="176" y1="430" x2="220" y2="440" stroke="#000" stroke-width="1.5" stroke-dasharray="5,3"/>
  <polygon points="217,436 224,444 213,446" fill="#000"/>
  <text x="226" y="438" font-family="Georgia,serif" font-size="9" fill="#000">Zn²⁺</text>

  <line x1="176" y1="460" x2="220" y2="468" stroke="#000" stroke-width="1.5" stroke-dasharray="5,3"/>
  <polygon points="217,464 224,472 213,474" fill="#000"/>
  <text x="226" y="470" font-family="Georgia,serif" font-size="9" fill="#000">Zn²⁺</text>

  <!-- Anode label -->
  <text x="80" y="225" font-family="Georgia,serif" font-size="12" font-weight="bold" fill="#000">ANODE  (−)</text>
  <text x="80" y="240" font-family="Georgia,serif" font-size="10" fill="#444">Oxidation</text>

  <!-- Reaction box left -->
  <rect x="40" y="555" width="280" height="50" rx="4" fill="none" stroke="#000" stroke-width="1.5"/>
  <text x="180" y="573" font-family="Georgia,serif" font-size="11" font-weight="bold"
        fill="#000" text-anchor="middle">Anode (oxidation):</text>
  <text x="180" y="592" font-family="Georgia,serif" font-size="11"
        fill="#000" text-anchor="middle">Zn  →  Zn²⁺  +  2e⁻</text>

  <!-- ══ RIGHT HALF-CELL: Cu cathode ══ -->
  <path d="M700,200 L700,520 Q700,540 720,540 L920,540 Q940,540 940,520 L940,200"
        fill="none" stroke="#000" stroke-width="3"/>
  <line x1="688" y1="200" x2="952" y2="200" stroke="#000" stroke-width="2.5"/>
  <!-- Solution fill (CuSO₄) -->
  <path d="M702,380 L702,518 Q702,536 720,536 L920,536 Q938,536 938,518 L938,380 Z"
        fill="#d8d8d8"/>
  <text x="820" y="480" font-family="Georgia,serif" font-size="11" font-weight="bold"
        fill="#000" text-anchor="middle">CuSO₄ (aq)</text>
  <text x="820" y="496" font-family="Georgia,serif" font-size="10" fill="#444"
        text-anchor="middle">1 mol dm⁻³</text>

  <!-- Cu electrode -->
  <rect x="814" y="195" width="20" height="300" rx="3" fill="#ccc" stroke="#000" stroke-width="2"/>
  <!-- Cu deposit striping -->
  <rect x="814" y="360" width="20" height="120" rx="2" fill="#aaa" stroke="#000" stroke-width="1"/>
  <text x="824" y="185" font-family="Georgia,serif" font-size="13" font-weight="bold"
        fill="#000" text-anchor="middle">Cu</text>

  <!-- Cu²⁺ deposition arrows -->
  <line x1="760" y1="430" x2="814" y2="420" stroke="#000" stroke-width="1.5" stroke-dasharray="5,3"/>
  <polygon points="810,416 818,422 808,426" fill="#000"/>
  <text x="720" y="428" font-family="Georgia,serif" font-size="9" fill="#000">Cu²⁺</text>

  <!-- Cathode label -->
  <text x="730" y="225" font-family="Georgia,serif" font-size="12" font-weight="bold" fill="#000">CATHODE  (+)</text>
  <text x="730" y="240" font-family="Georgia,serif" font-size="10" fill="#444">Reduction</text>

  <!-- Reaction box right -->
  <rect x="680" y="555" width="280" height="50" rx="4" fill="none" stroke="#000" stroke-width="1.5"/>
  <text x="820" y="573" font-family="Georgia,serif" font-size="11" font-weight="bold"
        fill="#000" text-anchor="middle">Cathode (reduction):</text>
  <text x="820" y="592" font-family="Georgia,serif" font-size="11"
        fill="#000" text-anchor="middle">Cu²⁺  +  2e⁻  →  Cu</text>

  <!-- ══ EXTERNAL CIRCUIT: Voltmeter + wires ══ -->
  <!-- Wires up from electrodes -->
  <line x1="166" y1="195" x2="166" y2="100" stroke="#000" stroke-width="3"/>
  <line x1="166" y1="100" x2="420" y2="100" stroke="#000" stroke-width="3"/>
  <line x1="824" y1="195" x2="824" y2="100" stroke="#000" stroke-width="3"/>
  <line x1="824" y1="100" x2="580" y2="100" stroke="#000" stroke-width="3"/>

  <!-- Voltmeter -->
  <circle cx="500" cy="100" r="40" fill="#fff" stroke="#000" stroke-width="2.5"/>
  <text x="500" y="94" font-family="Georgia,serif" font-size="14" font-weight="bold"
        fill="#000" text-anchor="middle">V</text>
  <text x="500" y="112" font-family="Georgia,serif" font-size="10" fill="#000"
        text-anchor="middle">+1.10 V</text>
  <!-- Voltmeter connections -->
  <line x1="460" y1="100" x2="420" y2="100" stroke="#000" stroke-width="3"/>
  <line x1="540" y1="100" x2="580" y2="100" stroke="#000" stroke-width="3"/>

  <!-- Electron flow arrows on wire -->
  <polygon points="320,95 340,100 320,105" fill="#000"/>
  <text x="322" y="88" font-family="Georgia,serif" font-size="9" fill="#000">e⁻</text>
  <polygon points="680,95 660,100 680,105" fill="#000"/>
  <text x="656" y="88" font-family="Georgia,serif" font-size="9" fill="#000">e⁻</text>
  <text x="500" y="60" font-family="Georgia,serif" font-size="10" fill="#000"
        text-anchor="middle">Electron flow: Zn (anode) → external circuit → Cu (cathode)</text>

  <!-- ══ SALT BRIDGE ══ -->
  <!-- Bridge shape -->
  <path d="M300,340 L300,300 Q300,280 320,280 L680,280 Q700,280 700,300 L700,340"
        fill="none" stroke="#000" stroke-width="3"/>
  <rect x="300" y="280" width="400" height="60" rx="8" fill="#d8d8d8" stroke="#000" stroke-width="2"/>
  <text x="500" y="308" font-family="Georgia,serif" font-size="11" font-weight="bold"
        fill="#000" text-anchor="middle">SALT BRIDGE</text>
  <text x="500" y="326" font-family="Georgia,serif" font-size="10" fill="#333"
        text-anchor="middle">KNO₃ (aq) or KCl (aq) in agar gel</text>

  <!-- Ion migration arrows in salt bridge -->
  <!-- K⁺ moving right -->
  <polygon points="560,308 576,304 576,312" fill="#000"/>
  <text x="576" y="302" font-family="Georgia,serif" font-size="9" fill="#000">K⁺ →</text>
  <!-- NO₃⁻ moving left -->
  <polygon points="440,322 424,318 424,326" fill="#000"/>
  <text x="340" y="318" font-family="Georgia,serif" font-size="9" fill="#000">← NO₃⁻</text>

  <!-- Salt bridge label note -->
  <text x="500" y="365" font-family="Georgia,serif" font-size="9" fill="#444"
        text-anchor="middle">Maintains electrical neutrality in both half-cells</text>

  <!-- ══ OVERALL SUMMARY BOX ══ -->
  <rect x="30" y="620" width="940" height="68" rx="5" fill="none" stroke="#000" stroke-width="2" stroke-dasharray="5,3"/>
  <text x="500" y="642" font-family="Georgia,serif" font-size="12" font-weight="bold"
        fill="#000" text-anchor="middle">Overall Cell Reaction:</text>
  <text x="500" y="662" font-family="Georgia,serif" font-size="12"
        fill="#000" text-anchor="middle">Zn  +  Cu²⁺  →  Zn²⁺  +  Cu</text>
  <text x="500" y="680" font-family="Georgia,serif" font-size="11"
        fill="#000" text-anchor="middle">E°cell = E°cathode − E°anode = +0.34 − (−0.76) = +1.10 V  (spontaneous — positive E°cell)</text>
</svg>`;

// ─── 9e. ELECTROLYTIC CELL — Molten NaCl ─────────────────────────────────────
static electrolyticCellDiagramSvg = `<?xml version="1.0" encoding="utf-8"?>
<svg version="1.1" xmlns="http://www.w3.org/2000/svg"
     width="1000px" height="700px" viewBox="0 0 1000 700">

  <text x="500" y="28" font-family="Georgia,serif" font-size="16" font-weight="bold"
        fill="#000" text-anchor="middle">Electrolytic Cell — Molten NaCl</text>
  <text x="500" y="46" font-family="Georgia,serif" font-size="11" fill="#333"
        text-anchor="middle">Non-spontaneous decomposition of NaCl using electrical energy</text>

  <!-- ══ CELL BODY ══ -->
  <path d="M120,180 L120,520 Q120,540 140,540 L860,540 Q880,540 880,520 L880,180"
        fill="none" stroke="#000" stroke-width="3"/>
  <line x1="106" y1="180" x2="894" y2="180" stroke="#000" stroke-width="2.5"/>
  <!-- Molten NaCl fill -->
  <path d="M122,340 L122,518 Q122,536 140,536 L860,536 Q878,536 878,518 L878,340 Z"
        fill="#e0e0e0"/>
  <text x="500" y="460" font-family="Georgia,serif" font-size="13" font-weight="bold"
        fill="#000" text-anchor="middle">Molten NaCl (electrolyte)</text>
  <text x="500" y="480" font-family="Georgia,serif" font-size="11" fill="#555"
        text-anchor="middle">Contains mobile Na⁺ and Cl⁻ ions</text>

  <!-- ══ CATHODE (−) LEFT ══ -->
  <rect x="186" y="175" width="22" height="340" rx="3" fill="#888" stroke="#000" stroke-width="2"/>
  <text x="197" y="164" font-family="Georgia,serif" font-size="13" font-weight="bold"
        fill="#000" text-anchor="middle">CATHODE (−)</text>

  <!-- Na⁺ ions moving to cathode + deposit -->
  <line x1="330" y1="400" x2="222" y2="400" stroke="#000" stroke-width="1.5"/>
  <polygon points="225,396 210,400 225,404" fill="#000"/>
  <text x="338" y="397" font-family="Georgia,serif" font-size="10" fill="#000">Na⁺ →</text>

  <line x1="330" y1="430" x2="222" y2="430" stroke="#000" stroke-width="1.5"/>
  <polygon points="225,426 210,430 225,434" fill="#000"/>

  <!-- Na product label -->
  <text x="140" y="350" font-family="Georgia,serif" font-size="10" fill="#000">Na metal</text>
  <text x="140" y="364" font-family="Georgia,serif" font-size="10" fill="#000">deposited</text>
  <!-- Bubbles indicating Na -->
  <circle cx="175" cy="330" r="6" fill="none" stroke="#000" stroke-width="1.5"/>
  <circle cx="162" cy="310" r="5" fill="none" stroke="#000" stroke-width="1.5"/>
  <circle cx="180" cy="295" r="4" fill="none" stroke="#000" stroke-width="1.5"/>

  <!-- Cathode reaction box -->
  <rect x="30" y="558" width="330" height="50" rx="4" fill="none" stroke="#000" stroke-width="1.5"/>
  <text x="195" y="576" font-family="Georgia,serif" font-size="11" font-weight="bold"
        fill="#000" text-anchor="middle">Cathode — Reduction:</text>
  <text x="195" y="596" font-family="Georgia,serif" font-size="11"
        fill="#000" text-anchor="middle">Na⁺  +  e⁻  →  Na</text>

  <!-- ══ ANODE (+) RIGHT ══ -->
  <rect x="792" y="175" width="22" height="340" rx="3" fill="#555" stroke="#000" stroke-width="2"/>
  <text x="803" y="164" font-family="Georgia,serif" font-size="13" font-weight="bold"
        fill="#000" text-anchor="middle">ANODE (+)</text>

  <!-- Cl⁻ ions moving to anode -->
  <line x1="670" y1="390" x2="790" y2="390" stroke="#000" stroke-width="1.5"/>
  <polygon points="787,386 802,390 787,394" fill="#000"/>
  <text x="588" y="387" font-family="Georgia,serif" font-size="10" fill="#000">← Cl⁻</text>

  <line x1="670" y1="420" x2="790" y2="420" stroke="#000" stroke-width="1.5"/>
  <polygon points="787,416 802,420 787,424" fill="#000"/>

  <!-- Cl₂ gas bubbles -->
  <circle cx="826" cy="310" r="7" fill="none" stroke="#000" stroke-width="1.5"/>
  <circle cx="838" cy="288" r="6" fill="none" stroke="#000" stroke-width="1.5"/>
  <circle cx="820" cy="268" r="5" fill="none" stroke="#000" stroke-width="1.5"/>
  <text x="844" y="325" font-family="Georgia,serif" font-size="10" fill="#000">Cl₂ gas</text>
  <text x="844" y="339" font-family="Georgia,serif" font-size="10" fill="#000">evolved</text>

  <!-- Anode reaction box -->
  <rect x="640" y="558" width="330" height="50" rx="4" fill="none" stroke="#000" stroke-width="1.5"/>
  <text x="805" y="576" font-family="Georgia,serif" font-size="11" font-weight="bold"
        fill="#000" text-anchor="middle">Anode — Oxidation:</text>
  <text x="805" y="596" font-family="Georgia,serif" font-size="11"
        fill="#000" text-anchor="middle">2Cl⁻  →  Cl₂  +  2e⁻</text>

  <!-- ══ EXTERNAL CIRCUIT — Battery ══ -->
  <line x1="197" y1="175" x2="197" y2="90" stroke="#000" stroke-width="3"/>
  <line x1="197" y1="90"  x2="380" y2="90" stroke="#000" stroke-width="3"/>
  <line x1="803" y1="175" x2="803" y2="90" stroke="#000" stroke-width="3"/>
  <line x1="803" y1="90"  x2="620" y2="90" stroke="#000" stroke-width="3"/>

  <!-- Battery symbol -->
  <!-- Cells: alternating long thin (+) and short thick (−) lines -->
  <line x1="400" y1="74" x2="400" y2="106" stroke="#000" stroke-width="2"/>   <!-- + thin -->
  <line x1="412" y1="80" x2="412" y2="100" stroke="#000" stroke-width="5"/>   <!-- − thick -->
  <line x1="424" y1="74" x2="424" y2="106" stroke="#000" stroke-width="2"/>
  <line x1="436" y1="80" x2="436" y2="100" stroke="#000" stroke-width="5"/>
  <line x1="448" y1="74" x2="448" y2="106" stroke="#000" stroke-width="2"/>
  <line x1="460" y1="80" x2="460" y2="100" stroke="#000" stroke-width="5"/>
  <line x1="472" y1="74" x2="472" y2="106" stroke="#000" stroke-width="2"/>
  <line x1="484" y1="80" x2="484" y2="100" stroke="#000" stroke-width="5"/>
  <line x1="496" y1="74" x2="496" y2="106" stroke="#000" stroke-width="2"/>
  <line x1="508" y1="80" x2="508" y2="100" stroke="#000" stroke-width="5"/>
  <line x1="520" y1="74" x2="520" y2="106" stroke="#000" stroke-width="2"/>
  <line x1="532" y1="80" x2="532" y2="100" stroke="#000" stroke-width="5"/>
  <line x1="544" y1="74" x2="544" y2="106" stroke="#000" stroke-width="2"/>
  <line x1="556" y1="80" x2="556" y2="100" stroke="#000" stroke-width="5"/>
  <line x1="568" y1="74" x2="568" y2="106" stroke="#000" stroke-width="2"/>
  <line x1="580" y1="80" x2="580" y2="100" stroke="#000" stroke-width="5"/>
  <line x1="592" y1="74" x2="592" y2="106" stroke="#000" stroke-width="2"/>
  <!-- Battery label -->
  <text x="496" y="62" font-family="Georgia,serif" font-size="11" fill="#000"
        text-anchor="middle">DC Power Supply / Battery</text>
  <text x="390" y="120" font-family="Georgia,serif" font-size="12" font-weight="bold"
        fill="#000">−</text>
  <text x="600" y="120" font-family="Georgia,serif" font-size="12" font-weight="bold"
        fill="#000">+</text>

  <!-- Electron flow arrows -->
  <polygon points="290,85 310,90 290,95" fill="#000"/>
  <text x="268" y="82" font-family="Georgia,serif" font-size="9" fill="#000">e⁻ →</text>
  <polygon points="714,85 694,90 714,95" fill="#000"/>
  <text x="716" y="82" font-family="Georgia,serif" font-size="9" fill="#000">← e⁻</text>

  <!-- Overall summary -->
  <rect x="30" y="622" width="940" height="64" rx="5" fill="none" stroke="#000" stroke-width="2" stroke-dasharray="5,3"/>
  <text x="500" y="644" font-family="Georgia,serif" font-size="12" font-weight="bold"
        fill="#000" text-anchor="middle">Overall Electrolysis Reaction:</text>
  <text x="500" y="664" font-family="Georgia,serif" font-size="12"
        fill="#000" text-anchor="middle">2NaCl (l)  →  2Na (l)  +  Cl₂ (g)</text>
  <text x="500" y="680" font-family="Georgia,serif" font-size="10"
        fill="#555" text-anchor="middle">Non-spontaneous — requires continuous input of electrical energy from external source</text>
</svg>`;

// ─── 9f. CELL POTENTIAL CALCULATION ──────────────────────────────────────────
static cellPotentialDiagramSvg = `<?xml version="1.0" encoding="utf-8"?>
<svg version="1.1" xmlns="http://www.w3.org/2000/svg"
     width="900px" height="700px" viewBox="0 0 900 700">

  <text x="450" y="28" font-family="Georgia,serif" font-size="16" font-weight="bold"
        fill="#000" text-anchor="middle">Cell Potential Calculation</text>
  <text x="450" y="46" font-family="Georgia,serif" font-size="11" fill="#333"
        text-anchor="middle">E°cell = E°cathode − E°anode    |    Zn/Cu cell example</text>

  <!-- ══ FORMULA BOX ══ -->
  <rect x="30" y="62" width="840" height="70" rx="5" fill="none" stroke="#000" stroke-width="2.5"/>
  <text x="450" y="88" font-family="Georgia,serif" font-size="14" font-weight="bold"
        fill="#000" text-anchor="middle">E°cell  =  E°cathode  −  E°anode</text>
  <line x1="30" y1="96" x2="870" y2="96" stroke="#000" stroke-width="1" stroke-dasharray="4,3"/>
  <text x="450" y="116" font-family="Georgia,serif" font-size="12" fill="#000"
        text-anchor="middle">where E°cathode &gt; E°anode for a spontaneous (galvanic) cell</text>

  <!-- ══ HALF-CELL DATA ══ -->
  <!-- Left: cathode -->
  <rect x="30" y="150" width="380" height="160" rx="5" fill="none" stroke="#000" stroke-width="2"/>
  <text x="220" y="174" font-family="Georgia,serif" font-size="13" font-weight="bold"
        fill="#000" text-anchor="middle">Cathode (Reduction)</text>
  <line x1="30" y1="180" x2="410" y2="180" stroke="#000" stroke-width="1.5"/>
  <text x="44" y="204" font-family="Georgia,serif" font-size="12" fill="#000">Half-equation:</text>
  <text x="44" y="222" font-family="Georgia,serif" font-size="12" font-weight="bold" fill="#000">  Cu²⁺  +  2e⁻  →  Cu</text>
  <text x="44" y="248" font-family="Georgia,serif" font-size="12" fill="#000">Standard potential:</text>
  <rect x="44" y="256" width="220" height="26" rx="3" fill="#d0d0d0" stroke="#000" stroke-width="1"/>
  <text x="154" y="273" font-family="Georgia,serif" font-size="13" font-weight="bold"
        fill="#000" text-anchor="middle">E°cathode  =  +0.34 V</text>
  <text x="44" y="300" font-family="Georgia,serif" font-size="10" fill="#555">
    (Cu²⁺ is reduced; gains electrons)
  </text>

  <!-- Right: anode -->
  <rect x="490" y="150" width="380" height="160" rx="5" fill="none" stroke="#000" stroke-width="2"/>
  <text x="680" y="174" font-family="Georgia,serif" font-size="13" font-weight="bold"
        fill="#000" text-anchor="middle">Anode (Oxidation)</text>
  <line x1="490" y1="180" x2="870" y2="180" stroke="#000" stroke-width="1.5"/>
  <text x="504" y="204" font-family="Georgia,serif" font-size="12" fill="#000">Half-equation (as reduction):</text>
  <text x="504" y="222" font-family="Georgia,serif" font-size="12" font-weight="bold" fill="#000">  Zn²⁺  +  2e⁻  →  Zn</text>
  <text x="504" y="248" font-family="Georgia,serif" font-size="12" fill="#000">Standard potential:</text>
  <rect x="504" y="256" width="220" height="26" rx="3" fill="#d0d0d0" stroke="#000" stroke-width="1"/>
  <text x="614" y="273" font-family="Georgia,serif" font-size="13" font-weight="bold"
        fill="#000" text-anchor="middle">E°anode  =  −0.76 V</text>
  <text x="504" y="300" font-family="Georgia,serif" font-size="10" fill="#555">
    (Zn is oxidised; loses electrons)
  </text>

  <!-- ══ CALCULATION ══ -->
  <rect x="30" y="330" width="840" height="180" rx="5" fill="none" stroke="#000" stroke-width="2"/>
  <text x="450" y="354" font-family="Georgia,serif" font-size="13" font-weight="bold"
        fill="#000" text-anchor="middle">Calculation Steps</text>
  <line x1="30" y1="360" x2="870" y2="360" stroke="#000" stroke-width="1.5"/>

  <text x="60" y="386" font-family="Georgia,serif" font-size="12" fill="#000">Step 1:  Identify cathode (higher E°) and anode (lower E°)</text>
  <text x="80"  y="406" font-family="Georgia,serif" font-size="12" fill="#000">Cu²⁺/Cu = +0.34 V  &gt;  Zn²⁺/Zn = −0.76 V   ∴ Cu is cathode, Zn is anode</text>
  <text x="60" y="428" font-family="Georgia,serif" font-size="12" fill="#000">Step 2:  Apply formula:</text>
  <text x="80" y="448" font-family="Georgia,serif" font-size="12" fill="#000">E°cell  =  E°cathode  −  E°anode  =  +0.34 − (−0.76)</text>
  <rect x="80" y="456" width="420" height="28" rx="3" fill="#c8c8c8" stroke="#000" stroke-width="1.5"/>
  <text x="290" y="474" font-family="Georgia,serif" font-size="14" font-weight="bold"
        fill="#000" text-anchor="middle">E°cell  =  +0.34 + 0.76  =  +1.10 V</text>

  <!-- ══ SPONTANEITY ══ -->
  <rect x="30" y="530" width="840" height="80" rx="5" fill="none" stroke="#000" stroke-width="2"/>
  <text x="450" y="552" font-family="Georgia,serif" font-size="13" font-weight="bold"
        fill="#000" text-anchor="middle">Spontaneity Check</text>
  <line x1="30" y1="558" x2="870" y2="558" stroke="#000" stroke-width="1.5"/>
  <text x="60" y="578" font-family="Georgia,serif" font-size="12" fill="#000">E°cell = +1.10 V  →  Positive E°cell  →  Spontaneous (galvanic cell)</text>
  <text x="60" y="598" font-family="Georgia,serif" font-size="12" fill="#000">Relationship to Gibbs energy:  ΔG°  =  −nFE°cell  =  −2 × 96485 × 1.10  ≈  −212 kJ mol⁻¹</text>

  <!-- ══ SUMMARY TABLE ══ -->
  <rect x="30" y="628" width="840" height="60" rx="5" fill="none" stroke="#000" stroke-width="2" stroke-dasharray="5,3"/>
  <text x="450" y="648" font-family="Georgia,serif" font-size="11" font-weight="bold"
        fill="#000" text-anchor="middle">Decision rules:</text>
  <text x="450" y="666" font-family="Georgia,serif" font-size="11"
        fill="#000" text-anchor="middle">E°cell &gt; 0 → Spontaneous (galvanic)  |  E°cell &lt; 0 → Non-spontaneous (requires electrolytic cell)</text>
  <text x="450" y="682" font-family="Georgia,serif" font-size="10"
        fill="#555" text-anchor="middle">n = moles of electrons transferred; F = Faraday constant = 96485 C mol⁻¹</text>
</svg>`;

// ─── 9g. NERNST EQUATION ─────────────────────────────────────────────────────
static nernstEquationDiagramSvg = `<?xml version="1.0" encoding="utf-8"?>
<svg version="1.1" xmlns="http://www.w3.org/2000/svg"
     width="900px" height="600px" viewBox="0 0 900 600">

  <text x="450" y="28" font-family="Georgia,serif" font-size="16" font-weight="bold"
        fill="#000" text-anchor="middle">Nernst Equation</text>
  <text x="450" y="46" font-family="Georgia,serif" font-size="11" fill="#333"
        text-anchor="middle">Cell potential under non-standard conditions — Zn/Cu cell example</text>

  <!-- ══ EQUATION BOX ══ -->
  <rect x="60" y="62" width="780" height="80" rx="5" fill="none" stroke="#000" stroke-width="2.5"/>
  <text x="450" y="90" font-family="Georgia,serif" font-size="15" font-weight="bold"
        fill="#000" text-anchor="middle">E  =  E°  −  (RT / nF) · ln Q</text>
  <line x1="60" y1="98" x2="840" y2="98" stroke="#000" stroke-width="1" stroke-dasharray="4,3"/>
  <text x="450" y="118" font-family="Georgia,serif" font-size="11" fill="#000"
        text-anchor="middle">At 298 K:   E  =  E°  −  (0.0257 / n) · ln Q    ≡    E°  −  (0.0592 / n) · log₁₀ Q</text>
  <text x="450" y="134" font-family="Georgia,serif" font-size="10" fill="#555"
        text-anchor="middle">where 0.0592 V = (RT ln10) / F at 298 K (the "Nernst factor")</text>

  <!-- ══ VARIABLE DEFINITIONS ══ -->
  <rect x="30" y="162" width="420" height="200" rx="5" fill="none" stroke="#000" stroke-width="2"/>
  <text x="240" y="184" font-family="Georgia,serif" font-size="13" font-weight="bold"
        fill="#000" text-anchor="middle">Variable Definitions</text>
  <line x1="30" y1="190" x2="450" y2="190" stroke="#000" stroke-width="1.5"/>
  <text x="44" y="212" font-family="Georgia,serif" font-size="11" fill="#000">E   = cell potential under actual conditions (V)</text>
  <text x="44" y="232" font-family="Georgia,serif" font-size="11" fill="#000">E°  = standard cell potential (V)</text>
  <text x="44" y="252" font-family="Georgia,serif" font-size="11" fill="#000">R   = gas constant = 8.314 J K⁻¹ mol⁻¹</text>
  <text x="44" y="272" font-family="Georgia,serif" font-size="11" fill="#000">T   = temperature (K)</text>
  <text x="44" y="292" font-family="Georgia,serif" font-size="11" fill="#000">n   = moles of electrons transferred</text>
  <text x="44" y="312" font-family="Georgia,serif" font-size="11" fill="#000">F   = Faraday constant = 96485 C mol⁻¹</text>
  <text x="44" y="332" font-family="Georgia,serif" font-size="11" fill="#000">Q   = reaction quotient = [products] / [reactants]</text>
  <text x="44" y="352" font-family="Georgia,serif" font-size="10" fill="#555">    (concentrations at actual conditions)</text>

  <!-- ══ CONCENTRATION EFFECT ══ -->
  <rect x="470" y="162" width="400" height="200" rx="5" fill="none" stroke="#000" stroke-width="2"/>
  <text x="670" y="184" font-family="Georgia,serif" font-size="13" font-weight="bold"
        fill="#000" text-anchor="middle">Effect of Concentration on E</text>
  <line x1="470" y1="190" x2="870" y2="190" stroke="#000" stroke-width="1.5"/>

  <text x="484" y="214" font-family="Georgia,serif" font-size="11" fill="#000">If Q &lt; 1   (reactant-rich):  ln Q &lt; 0</text>
  <text x="504" y="230" font-family="Georgia,serif" font-size="11" fill="#000">→  E  &gt;  E°   (cell potential increases)</text>

  <text x="484" y="254" font-family="Georgia,serif" font-size="11" fill="#000">If Q = 1   (standard conditions):</text>
  <text x="504" y="270" font-family="Georgia,serif" font-size="11" fill="#000">→  E  =  E°</text>

  <text x="484" y="294" font-family="Georgia,serif" font-size="11" fill="#000">If Q &gt; 1   (product-rich):  ln Q &gt; 0</text>
  <text x="504" y="310" font-family="Georgia,serif" font-size="11" fill="#000">→  E  &lt;  E°   (cell potential decreases)</text>

  <text x="484" y="340" font-family="Georgia,serif" font-size="11" fill="#000">At equilibrium:  E = 0   and   Q = K</text>
  <text x="504" y="356" font-family="Georgia,serif" font-size="11" fill="#000">→  E°  =  (RT / nF) · ln K</text>

  <!-- ══ WORKED CALCULATION ══ -->
  <rect x="30" y="380" width="840" height="160" rx="5" fill="none" stroke="#000" stroke-width="2"/>
  <text x="450" y="402" font-family="Georgia,serif" font-size="13" font-weight="bold"
        fill="#000" text-anchor="middle">Worked Example — Zn/Cu cell, non-standard concentrations</text>
  <line x1="30" y1="408" x2="870" y2="408" stroke="#000" stroke-width="1.5"/>

  <text x="44" y="428" font-family="Georgia,serif" font-size="11" fill="#000">Reaction:  Zn + Cu²⁺ → Zn²⁺ + Cu    |    E° = +1.10 V    |    n = 2    |    T = 298 K</text>
  <text x="44" y="448" font-family="Georgia,serif" font-size="11" fill="#000">Conditions: [Cu²⁺] = 0.010 mol dm⁻³;  [Zn²⁺] = 1.0 mol dm⁻³</text>
  <text x="44" y="468" font-family="Georgia,serif" font-size="11" fill="#000">Q  =  [Zn²⁺] / [Cu²⁺]  =  1.0 / 0.010  =  100</text>
  <text x="44" y="488" font-family="Georgia,serif" font-size="11" fill="#000">E  =  1.10 − (0.0257 / 2) · ln(100)  =  1.10 − (0.01285 × 4.605)</text>
  <rect x="44" y="498" width="460" height="26" rx="3" fill="#c8c8c8" stroke="#000" stroke-width="1.5"/>
  <text x="274" y="515" font-family="Georgia,serif" font-size="13" font-weight="bold"
        fill="#000" text-anchor="middle">E  =  1.10 − 0.059  =  +1.041 V</text>
  <text x="514" y="516" font-family="Georgia,serif" font-size="10" fill="#555">
    (lower than E° because Q &gt; 1)
  </text>

  <!-- Summary -->
  <rect x="30" y="554" width="840" height="36" rx="5" fill="none" stroke="#000" stroke-width="2" stroke-dasharray="5,3"/>
  <text x="450" y="576" font-family="Georgia,serif" font-size="11"
        fill="#000" text-anchor="middle">Key concept: E → 0 as the cell approaches equilibrium (Q → K); batteries "go flat" as ΔG → 0</text>
</svg>`;

// ─── 9h. FARADAY'S LAWS OF ELECTROLYSIS ──────────────────────────────────────
static faradaysLawDiagramSvg = `<?xml version="1.0" encoding="utf-8"?>
<svg version="1.1" xmlns="http://www.w3.org/2000/svg"
     width="1000px" height="700px" viewBox="0 0 1000 700">

  <text x="500" y="28" font-family="Georgia,serif" font-size="16" font-weight="bold"
        fill="#000" text-anchor="middle">Faraday's Laws of Electrolysis</text>
  <text x="500" y="46" font-family="Georgia,serif" font-size="11" fill="#333"
        text-anchor="middle">Quantitative relationship between charge passed and mass deposited</text>

  <!-- ══ FIRST LAW ══ -->
  <rect x="30" y="62" width="455" height="230" rx="5" fill="none" stroke="#000" stroke-width="2"/>
  <text x="258" y="86" font-family="Georgia,serif" font-size="14" font-weight="bold"
        fill="#000" text-anchor="middle">First Law</text>
  <line x1="30" y1="92" x2="485" y2="92" stroke="#000" stroke-width="1.5"/>
  <text x="44" y="116" font-family="Georgia,serif" font-size="12" fill="#000">"The mass of substance deposited or</text>
  <text x="44" y="134" font-family="Georgia,serif" font-size="12" fill="#000">liberated at an electrode during electrolysis</text>
  <text x="44" y="152" font-family="Georgia,serif" font-size="12" fill="#000">is directly proportional to the quantity</text>
  <text x="44" y="170" font-family="Georgia,serif" font-size="12" fill="#000">of electricity (charge) passed."</text>
  <rect x="44" y="182" width="240" height="32" rx="4" fill="#d8d8d8" stroke="#000" stroke-width="1.5"/>
  <text x="164" y="202" font-family="Georgia,serif" font-size="14" font-weight="bold"
        fill="#000" text-anchor="middle">m  ∝  Q</text>
  <text x="44" y="232" font-family="Georgia,serif" font-size="11" fill="#000">where Q = charge (C) = current (A) × time (s)</text>
  <text x="44" y="250" font-family="Georgia,serif" font-size="11" fill="#000">             Q  =  I × t</text>
  <text x="44" y="270" font-family="Georgia,serif" font-size="10" fill="#555">Double the charge → double the mass deposited</text>

  <!-- ══ SECOND LAW ══ -->
  <rect x="515" y="62" width="455" height="230" rx="5" fill="none" stroke="#000" stroke-width="2"/>
  <text x="743" y="86" font-family="Georgia,serif" font-size="14" font-weight="bold"
        fill="#000" text-anchor="middle">Second Law</text>
  <line x1="515" y1="92" x2="970" y2="92" stroke="#000" stroke-width="1.5"/>
  <text x="529" y="116" font-family="Georgia,serif" font-size="12" fill="#000">"The masses of different substances</text>
  <text x="529" y="134" font-family="Georgia,serif" font-size="12" fill="#000">deposited by the same quantity of</text>
  <text x="529" y="152" font-family="Georgia,serif" font-size="12" fill="#000">electricity are proportional to their</text>
  <text x="529" y="170" font-family="Georgia,serif" font-size="12" fill="#000">molar mass divided by charge number."</text>
  <rect x="529" y="182" width="320" height="32" rx="4" fill="#d8d8d8" stroke="#000" stroke-width="1.5"/>
  <text x="689" y="202" font-family="Georgia,serif" font-size="14" font-weight="bold"
        fill="#000" text-anchor="middle">m  ∝  M / z</text>
  <text x="529" y="232" font-family="Georgia,serif" font-size="11" fill="#000">M = molar mass (g mol⁻¹); z = charge number</text>
  <text x="529" y="250" font-family="Georgia,serif" font-size="11" fill="#000">e.g. Cu²⁺ z=2;  Ag⁺ z=1;  Al³⁺ z=3</text>
  <text x="529" y="270" font-family="Georgia,serif" font-size="10" fill="#555">Same charge: more mass for lower z / higher M</text>

  <!-- ══ MASTER FORMULA ══ -->
  <rect x="30" y="312" width="940" height="90" rx="5" fill="none" stroke="#000" stroke-width="2.5"/>
  <text x="500" y="336" font-family="Georgia,serif" font-size="13" font-weight="bold"
        fill="#000" text-anchor="middle">Combined Formula</text>
  <line x1="30" y1="342" x2="970" y2="342" stroke="#000" stroke-width="1.5"/>
  <rect x="200" y="350" width="600" height="36" rx="4" fill="#c8c8c8" stroke="#000" stroke-width="1.5"/>
  <text x="500" y="374" font-family="Georgia,serif" font-size="16" font-weight="bold"
        fill="#000" text-anchor="middle">m  =  (M × I × t)  /  (z × F)</text>
  <text x="500" y="396" font-family="Georgia,serif" font-size="10" fill="#555"
        text-anchor="middle">F = Faraday constant = 96485 C mol⁻¹  ≈  96500 C mol⁻¹</text>

  <!-- ══ WORKED EXAMPLE ══ -->
  <rect x="30" y="420" width="940" height="210" rx="5" fill="none" stroke="#000" stroke-width="2"/>
  <text x="500" y="444" font-family="Georgia,serif" font-size="13" font-weight="bold"
        fill="#000" text-anchor="middle">Worked Example</text>
  <line x1="30" y1="450" x2="970" y2="450" stroke="#000" stroke-width="1.5"/>

  <text x="44" y="474" font-family="Georgia,serif" font-size="12" fill="#000">A current of 2.0 A is passed through CuSO₄(aq) for 30 minutes.</text>
  <text x="44" y="494" font-family="Georgia,serif" font-size="12" fill="#000">Calculate the mass of copper deposited at the cathode.  (M(Cu) = 63.5 g mol⁻¹; z = 2)</text>

  <text x="44" y="518" font-family="Georgia,serif" font-size="12" fill="#000">Step 1:  Q  =  I × t  =  2.0 × (30 × 60)  =  2.0 × 1800  =  3600 C</text>
  <text x="44" y="540" font-family="Georgia,serif" font-size="12" fill="#000">Step 2:  moles of e⁻  =  Q / F  =  3600 / 96485  =  0.0373 mol</text>
  <text x="44" y="562" font-family="Georgia,serif" font-size="12" fill="#000">Step 3:  moles of Cu  =  moles of e⁻ / z  =  0.0373 / 2  =  0.01865 mol</text>
  <text x="44" y="584" font-family="Georgia,serif" font-size="12" fill="#000">Step 4:  m  =  n × M  =  0.01865 × 63.5</text>
  <rect x="44" y="592" width="340" height="26" rx="3" fill="#c8c8c8" stroke="#000" stroke-width="1.5"/>
  <text x="214" y="609" font-family="Georgia,serif" font-size="13" font-weight="bold"
        fill="#000" text-anchor="middle">m  =  1.19 g  of Cu deposited</text>

  <text x="500" y="606" font-family="Georgia,serif" font-size="11" fill="#000">Check using formula directly:</text>
  <text x="500" y="624" font-family="Georgia,serif" font-size="11" fill="#000">m = (63.5 × 2.0 × 1800) / (2 × 96485)</text>
  <text x="500" y="642" font-family="Georgia,serif" font-size="11" font-weight="bold" fill="#000">  = 228600 / 192970  ≈  1.18 g  ✓</text>
</svg>`;

// ─── 9i. CORROSION MECHANISM — Iron ──────────────────────────────────────────
static corrosionDiagramSvg = `<?xml version="1.0" encoding="utf-8"?>
<svg version="1.1" xmlns="http://www.w3.org/2000/svg"
     width="1000px" height="600px" viewBox="0 0 1000 600">

  <text x="500" y="28" font-family="Georgia,serif" font-size="16" font-weight="bold"
        fill="#000" text-anchor="middle">Corrosion Mechanism — Rusting of Iron</text>
  <text x="500" y="46" font-family="Georgia,serif" font-size="11" fill="#333"
        text-anchor="middle">Electrochemical process: requires both water and oxygen</text>

  <!-- ══ IRON SURFACE ══ -->
  <!-- Iron bulk -->
  <rect x="60" y="280" width="880" height="120" rx="5" fill="#ccc" stroke="#000" stroke-width="2.5"/>
  <text x="500" y="350" font-family="Georgia,serif" font-size="14" font-weight="bold"
        fill="#000" text-anchor="middle">Iron (Fe) — metallic structure</text>

  <!-- Grain boundary / stress line (anode region) -->
  <line x1="300" y1="280" x2="300" y2="400" stroke="#000" stroke-width="2" stroke-dasharray="4,3"/>
  <text x="300" y="270" font-family="Georgia,serif" font-size="10" fill="#000" text-anchor="middle">grain boundary</text>

  <!-- ══ ELECTROLYTE FILM (water layer on surface) ══ -->
  <path d="M60,200 L60,280 L940,280 L940,200 Q850,170 720,190 Q600,210 500,185 Q380,160 260,190 Q160,210 60,200 Z"
        fill="#e8e8e8" stroke="#000" stroke-width="1.5"/>
  <text x="500" y="248" font-family="Georgia,serif" font-size="11" font-weight="bold"
        fill="#000" text-anchor="middle">Thin electrolyte film: H₂O + dissolved O₂ + CO₂</text>

  <!-- ══ ANODE AREA (left — grain boundary, stressed) ══ -->
  <rect x="60" y="100" width="320" height="96" rx="5" fill="#f0f0f0" stroke="#000" stroke-width="2"/>
  <text x="220" y="120" font-family="Georgia,serif" font-size="12" font-weight="bold"
        fill="#000" text-anchor="middle">ANODE AREA (−)</text>
  <text x="220" y="138" font-family="Georgia,serif" font-size="11" fill="#000"
        text-anchor="middle">Oxidation occurs at stressed regions</text>
  <rect x="76" y="148" width="288" height="36" rx="3" fill="#d0d0d0" stroke="#000" stroke-width="1"/>
  <text x="220" y="170" font-family="Georgia,serif" font-size="12" font-weight="bold"
        fill="#000" text-anchor="middle">Fe  →  Fe²⁺  +  2e⁻</text>

  <!-- Arrow: Fe²⁺ moving into electrolyte -->
  <line x1="260" y1="196" x2="260" y2="248" stroke="#000" stroke-width="2"/>
  <polygon points="255,244 260,258 265,244" fill="#000"/>
  <text x="266" y="232" font-family="Georgia,serif" font-size="9" fill="#000">Fe²⁺</text>

  <!-- Electron flow arrow along iron surface -->
  <line x1="360" y1="310" x2="640" y2="310" stroke="#000" stroke-width="2.5"/>
  <polygon points="636,305 650,310 636,315" fill="#000"/>
  <text x="500" y="302" font-family="Georgia,serif" font-size="10" fill="#000"
        text-anchor="middle">e⁻ flow through iron →</text>

  <!-- ══ CATHODE AREA (right — oxygenated) ══ -->
  <rect x="620" y="100" width="320" height="96" rx="5" fill="#f0f0f0" stroke="#000" stroke-width="2"/>
  <text x="780" y="120" font-family="Georgia,serif" font-size="12" font-weight="bold"
        fill="#000" text-anchor="middle">CATHODE AREA (+)</text>
  <text x="780" y="138" font-family="Georgia,serif" font-size="11" fill="#000"
        text-anchor="middle">Reduction in oxygenated region</text>
  <rect x="636" y="148" width="288" height="36" rx="3" fill="#d0d0d0" stroke="#000" stroke-width="1"/>
  <text x="780" y="170" font-family="Georgia,serif" font-size="12" font-weight="bold"
        fill="#000" text-anchor="middle">O₂ + 2H₂O + 4e⁻  →  4OH⁻</text>

  <!-- Arrow: OH⁻ moving in electrolyte -->
  <line x1="740" y1="196" x2="740" y2="248" stroke="#000" stroke-width="2"/>
  <polygon points="735,244 740,258 745,244" fill="#000"/>
  <text x="748" y="232" font-family="Georgia,serif" font-size="9" fill="#000">OH⁻</text>

  <!-- ══ RUST FORMATION ══ -->
  <!-- Intermediate: Fe²⁺ + OH⁻ → Fe(OH)₂ -->
  <rect x="340" y="100" width="320" height="96" rx="5" fill="#e0e0e0" stroke="#000" stroke-width="2" stroke-dasharray="5,3"/>
  <text x="500" y="122" font-family="Georgia,serif" font-size="12" font-weight="bold"
        fill="#000" text-anchor="middle">Rust Formation</text>
  <text x="500" y="140" font-family="Georgia,serif" font-size="11" fill="#000"
        text-anchor="middle">Fe²⁺ + 2OH⁻ → Fe(OH)₂</text>
  <text x="500" y="158" font-family="Georgia,serif" font-size="11" fill="#000"
        text-anchor="middle">4Fe(OH)₂ + O₂ → 2Fe₂O₃·H₂O</text>
  <text x="500" y="176" font-family="Georgia,serif" font-size="10" fill="#555"
        text-anchor="middle">hydrated iron(III) oxide = rust</text>

  <!-- ══ CONDITIONS BOX ══ -->
  <rect x="60" y="420" width="420" height="120" rx="5" fill="none" stroke="#000" stroke-width="2"/>
  <text x="270" y="442" font-family="Georgia,serif" font-size="12" font-weight="bold"
        fill="#000" text-anchor="middle">Conditions Required for Rusting</text>
  <line x1="60" y1="448" x2="480" y2="448" stroke="#000" stroke-width="1.5"/>
  <text x="74" y="468" font-family="Georgia,serif" font-size="11" fill="#000">• Both water (H₂O) AND oxygen (O₂) needed</text>
  <text x="74" y="486" font-family="Georgia,serif" font-size="11" fill="#000">• Dissolved ions (e.g. NaCl) accelerate corrosion</text>
  <text x="74" y="504" font-family="Georgia,serif" font-size="11" fill="#000">  (increase electrolyte conductivity)</text>
  <text x="74" y="522" font-family="Georgia,serif" font-size="11" fill="#000">• Temperature increase speeds the reaction</text>

  <!-- ══ PREVENTION BOX ══ -->
  <rect x="520" y="420" width="420" height="120" rx="5" fill="none" stroke="#000" stroke-width="2"/>
  <text x="730" y="442" font-family="Georgia,serif" font-size="12" font-weight="bold"
        fill="#000" text-anchor="middle">Prevention Methods</text>
  <line x1="520" y1="448" x2="940" y2="448" stroke="#000" stroke-width="1.5"/>
  <text x="534" y="468" font-family="Georgia,serif" font-size="11" fill="#000">• Painting / coating (barrier protection)</text>
  <text x="534" y="486" font-family="Georgia,serif" font-size="11" fill="#000">• Galvanising: Zn coating (sacrificial anode)</text>
  <text x="534" y="504" font-family="Georgia,serif" font-size="11" fill="#000">• Sacrificial anode: Mg or Zn block attached</text>
  <text x="534" y="522" font-family="Georgia,serif" font-size="11" fill="#000">• Cathodic protection (pipelines, ships)</text>

  <!-- Overall equation -->
  <rect x="60" y="554" width="880" height="34" rx="4" fill="none" stroke="#000" stroke-width="2" stroke-dasharray="5,3"/>
  <text x="500" y="574" font-family="Georgia,serif" font-size="11" font-weight="bold"
        fill="#000" text-anchor="middle">Overall: 4Fe + 3O₂ + 2xH₂O → 2Fe₂O₃·xH₂O (rust — non-stoichiometric hydrate)</text>
</svg>`;

// ─── 9j. HYDROGEN FUEL CELL ───────────────────────────────────────────────────
static fuelCellDiagramSvg = `<?xml version="1.0" encoding="utf-8"?>
<svg version="1.1" xmlns="http://www.w3.org/2000/svg"
     width="1000px" height="700px" viewBox="0 0 1000 700">

  <text x="500" y="28" font-family="Georgia,serif" font-size="16" font-weight="bold"
        fill="#000" text-anchor="middle">Hydrogen–Oxygen Fuel Cell</text>
  <text x="500" y="46" font-family="Georgia,serif" font-size="11" fill="#333"
        text-anchor="middle">Continuous electrochemical conversion of H₂ and O₂ to electrical energy and water</text>

  <!-- ══ ANODE (left) ══ -->
  <rect x="60" y="100" width="160" height="450" rx="5" fill="#c8c8c8" stroke="#000" stroke-width="2.5"/>
  <text x="140" y="86" font-family="Georgia,serif" font-size="13" font-weight="bold"
        fill="#000" text-anchor="middle">ANODE (−)</text>

  <!-- H₂ fuel input arrow -->
  <line x1="30" y1="260" x2="60" y2="260" stroke="#000" stroke-width="2.5"/>
  <polygon points="56,255 70,260 56,265" fill="#000"/>
  <text x="14" y="256" font-family="Georgia,serif" font-size="11" font-weight="bold" fill="#000">H₂</text>
  <text x="8" y="270" font-family="Georgia,serif" font-size="9" fill="#555">fuel in</text>

  <!-- H₂ splitting at anode -->
  <text x="140" y="240" font-family="Georgia,serif" font-size="10" fill="#000" text-anchor="middle">H₂ absorbed</text>
  <text x="140" y="256" font-family="Georgia,serif" font-size="10" fill="#000" text-anchor="middle">on electrode</text>
  <!-- H⁺ arrows going right to electrolyte -->
  <line x1="220" y1="290" x2="310" y2="290" stroke="#000" stroke-width="1.5"/>
  <polygon points="307,285 322,290 307,295" fill="#000"/>
  <text x="238" y="282" font-family="Georgia,serif" font-size="9" fill="#000">H⁺</text>
  <line x1="220" y1="320" x2="310" y2="320" stroke="#000" stroke-width="1.5"/>
  <polygon points="307,315 322,320 307,325" fill="#000"/>
  <text x="238" y="312" font-family="Georgia,serif" font-size="9" fill="#000">H⁺</text>

  <!-- Anode reaction box -->
  <rect x="40" y="570" width="200" height="50" rx="4" fill="none" stroke="#000" stroke-width="1.5"/>
  <text x="140" y="588" font-family="Georgia,serif" font-size="11" font-weight="bold"
        fill="#000" text-anchor="middle">Anode (oxidation):</text>
  <text x="140" y="608" font-family="Georgia,serif" font-size="11"
        fill="#000" text-anchor="middle">2H₂  →  4H⁺  +  4e⁻</text>

  <!-- ══ ELECTROLYTE (centre) ══ -->
  <rect x="220" y="100" width="180" height="450" rx="0" fill="#e8e8e8" stroke="#000" stroke-width="2"/>
  <text x="310" y="86" font-family="Georgia,serif" font-size="11" font-weight="bold"
        fill="#000" text-anchor="middle">ELECTROLYTE</text>
  <text x="310" y="180" font-family="Georgia,serif" font-size="11" fill="#000" text-anchor="middle">Polymer</text>
  <text x="310" y="196" font-family="Georgia,serif" font-size="11" fill="#000" text-anchor="middle">membrane</text>
  <text x="310" y="212" font-family="Georgia,serif" font-size="11" fill="#000" text-anchor="middle">(PEM) or</text>
  <text x="310" y="228" font-family="Georgia,serif" font-size="11" fill="#000" text-anchor="middle">KOH (aq)</text>

  <!-- H⁺ migration arrows through electrolyte -->
  <line x1="250" y1="360" x2="398" y2="360" stroke="#000" stroke-width="1.5" stroke-dasharray="6,3"/>
  <polygon points="394,355 408,360 394,365" fill="#000"/>
  <text x="300" y="350" font-family="Georgia,serif" font-size="10" fill="#000" text-anchor="middle">H⁺ migration →</text>
  <text x="300" y="380" font-family="Georgia,serif" font-size="9" fill="#555" text-anchor="middle">(proton conducts</text>
  <text x="300" y="394" font-family="Georgia,serif" font-size="9" fill="#555" text-anchor="middle">through membrane)</text>

  <!-- ══ CATHODE (right) ══ -->
  <rect x="400" y="100" width="160" height="450" rx="5" fill="#aaa" stroke="#000" stroke-width="2.5"/>
  <text x="480" y="86" font-family="Georgia,serif" font-size="13" font-weight="bold"
        fill="#000" text-anchor="middle">CATHODE (+)</text>

  <!-- O₂ input -->
  <line x1="560" y1="260" x2="590" y2="260" stroke="#000" stroke-width="2.5"/>
  <polygon points="563,255 548,260 563,265" fill="#000"/>
  <text x="596" y="256" font-family="Georgia,serif" font-size="11" font-weight="bold" fill="#000">O₂</text>
  <text x="590" y="270" font-family="Georgia,serif" font-size="9" fill="#555">air in</text>

  <!-- H₂O output -->
  <line x1="560" y1="390" x2="610" y2="390" stroke="#000" stroke-width="2.5"/>
  <polygon points="606,385 620,390 606,395" fill="#000"/>
  <text x="616" y="387" font-family="Georgia,serif" font-size="11" font-weight="bold" fill="#000">H₂O</text>
  <text x="614" y="401" font-family="Georgia,serif" font-size="9" fill="#555">out</text>

  <!-- Cathode reaction box -->
  <rect x="380" y="570" width="200" height="50" rx="4" fill="none" stroke="#000" stroke-width="1.5"/>
  <text x="480" y="588" font-family="Georgia,serif" font-size="11" font-weight="bold"
        fill="#000" text-anchor="middle">Cathode (reduction):</text>
  <text x="480" y="608" font-family="Georgia,serif" font-size="11"
        fill="#000" text-anchor="middle">O₂ + 4H⁺ + 4e⁻  →  2H₂O</text>

  <!-- ══ EXTERNAL CIRCUIT ══ -->
  <!-- Wires up from electrodes -->
  <line x1="140" y1="100" x2="140" y2="40" stroke="#000" stroke-width="3"/>
  <line x1="140" y1="40"  x2="750" y2="40"  stroke="#000" stroke-width="3"/>
  <line x1="480" y1="100" x2="480" y2="40"  stroke="#000" stroke-width="3"/>

  <!-- Load (motor/light) symbol -->
  <circle cx="620" cy="40" r="22" fill="#fff" stroke="#000" stroke-width="2.5"/>
  <text x="620" y="36" font-family="Georgia,serif" font-size="11" font-weight="bold"
        fill="#000" text-anchor="middle">Load</text>
  <text x="620" y="50" font-family="Georgia,serif" font-size="9" fill="#000"
        text-anchor="middle">(motor)</text>
  <line x1="598" y1="40" x2="480" y2="40" stroke="#000" stroke-width="3"/>
  <line x1="642" y1="40" x2="750" y2="40" stroke="#000" stroke-width="3"/>

  <!-- Electron flow arrows -->
  <polygon points="296,35 316,40 296,45" fill="#000"/>
  <text x="200" y="32" font-family="Georgia,serif" font-size="9" fill="#000">e⁻ →</text>
  <polygon points="714,35 694,40 714,45" fill="#000"/>
  <text x="716" y="32" font-family="Georgia,serif" font-size="9" fill="#000">← e⁻</text>

  <!-- ══ ADVANTAGES BOX ══ -->
  <rect x="640" y="100" width="330" height="220" rx="5" fill="none" stroke="#000" stroke-width="2"/>
  <text x="805" y="122" font-family="Georgia,serif" font-size="12" font-weight="bold"
        fill="#000" text-anchor="middle">Advantages</text>
  <line x1="640" y1="128" x2="970" y2="128" stroke="#000" stroke-width="1.5"/>
  <text x="654" y="150" font-family="Georgia,serif" font-size="11" fill="#000">• High efficiency (~60–70%)</text>
  <text x="654" y="170" font-family="Georgia,serif" font-size="11" fill="#000">• Only product: H₂O (no CO₂)</text>
  <text x="654" y="190" font-family="Georgia,serif" font-size="11" fill="#000">• Continuous operation</text>
  <text x="654" y="210" font-family="Georgia,serif" font-size="11" fill="#000">• No moving parts (silent)</text>
  <text x="654" y="230" font-family="Georgia,serif" font-size="11" fill="#000">• Scalable power output</text>
  <text x="654" y="250" font-family="Georgia,serif" font-size="11" fill="#000">• No recharging needed</text>
  <text x="654" y="270" font-family="Georgia,serif" font-size="11" fill="#000">• Used in spacecraft, vehicles</text>
  <text x="654" y="290" font-family="Georgia,serif" font-size="11" fill="#000">• H₂ produced by electrolysis</text>
  <text x="654" y="310" font-family="Georgia,serif" font-size="11" fill="#000">  of water (if renewable energy)</text>

  <!-- Overall equation -->
  <rect x="30" y="636" width="940" height="52" rx="5" fill="none" stroke="#000" stroke-width="2" stroke-dasharray="5,3"/>
  <text x="500" y="658" font-family="Georgia,serif" font-size="12" font-weight="bold"
        fill="#000" text-anchor="middle">Overall Cell Reaction:</text>
  <text x="500" y="678" font-family="Georgia,serif" font-size="12"
        fill="#000" text-anchor="middle">2H₂  +  O₂  →  2H₂O    |    ΔG° = −237 kJ mol⁻¹ per mol H₂O</text>
</svg>`;

// ─── 9k. LEAD-ACID BATTERY ────────────────────────────────────────────────────
static batteryDiagramSvg = `<?xml version="1.0" encoding="utf-8"?>
<svg version="1.1" xmlns="http://www.w3.org/2000/svg"
     width="1000px" height="800px" viewBox="0 0 1000 800">

  <text x="500" y="28" font-family="Georgia,serif" font-size="16" font-weight="bold"
        fill="#000" text-anchor="middle">Lead-Acid Battery</text>
  <text x="500" y="46" font-family="Georgia,serif" font-size="11" fill="#333"
        text-anchor="middle">Rechargeable cell: discharging (galvanic) and charging (electrolytic) modes</text>

  <!-- ══ DISCHARGING (top half) ══ -->
  <rect x="30" y="62" width="940" height="340" rx="5" fill="none" stroke="#000" stroke-width="2.5"/>
  <text x="500" y="84" font-family="Georgia,serif" font-size="13" font-weight="bold"
        fill="#000" text-anchor="middle">DISCHARGING MODE (Galvanic — powers the car)</text>
  <line x1="30" y1="90" x2="970" y2="90" stroke="#000" stroke-width="1.5"/>

  <!-- Left electrode: Pb (anode during discharge) -->
  <rect x="100" y="110" width="30" height="240" rx="3" fill="#888" stroke="#000" stroke-width="2"/>
  <text x="115" y="104" font-family="Georgia,serif" font-size="12" font-weight="bold"
        fill="#000" text-anchor="middle">Pb</text>
  <text x="60" y="120" font-family="Georgia,serif" font-size="11" fill="#000">ANODE (−)</text>
  <text x="60" y="136" font-family="Georgia,serif" font-size="10" fill="#555">oxidation</text>

  <!-- PbSO₄ layer on Pb anode (discharge product) -->
  <rect x="130" y="200" width="18" height="80" rx="2" fill="#ddd" stroke="#000" stroke-width="1"/>
  <text x="156" y="252" font-family="Georgia,serif" font-size="9" fill="#000">PbSO₄</text>

  <!-- Electrolyte H₂SO₄ -->
  <rect x="160" y="110" width="380" height="240" rx="3" fill="#e8e8e8" stroke="#000" stroke-width="1.5" stroke-dasharray="5,3"/>
  <text x="350" y="230" font-family="Georgia,serif" font-size="12" font-weight="bold"
        fill="#000" text-anchor="middle">H₂SO₄ (aq)</text>
  <text x="350" y="250" font-family="Georgia,serif" font-size="10" fill="#555"
        text-anchor="middle">electrolyte (≈37% w/w)</text>
  <!-- SO₄²⁻ migration left -->
  <line x1="350" y1="290" x2="200" y2="290" stroke="#000" stroke-width="1.5"/>
  <polygon points="203,285 188,290 203,295" fill="#000"/>
  <text x="240" y="282" font-family="Georgia,serif" font-size="9" fill="#000">← SO₄²⁻</text>
  <!-- H⁺ migration right -->
  <line x1="360" y1="310" x2="500" y2="310" stroke="#000" stroke-width="1.5"/>
  <polygon points="497,305 512,310 497,315" fill="#000"/>
  <text x="400" y="302" font-family="Georgia,serif" font-size="9" fill="#000">H⁺ →</text>

  <!-- Right electrode: PbO₂ (cathode during discharge) -->
  <rect x="590" y="110" width="30" height="240" rx="3" fill="#555" stroke="#000" stroke-width="2"/>
  <text x="605" y="104" font-family="Georgia,serif" font-size="12" font-weight="bold"
        fill="#000" text-anchor="middle">PbO₂</text>
  <text x="630" y="120" font-family="Georgia,serif" font-size="11" fill="#000">CATHODE (+)</text>
  <text x="630" y="136" font-family="Georgia,serif" font-size="10" fill="#555">reduction</text>

  <!-- PbSO₄ layer on PbO₂ cathode -->
  <rect x="572" y="200" width="18" height="80" rx="2" fill="#ddd" stroke="#000" stroke-width="1"/>
  <text x="542" y="252" font-family="Georgia,serif" font-size="9" fill="#000">PbSO₄</text>

  <!-- External circuit: load -->
  <line x1="115" y1="110" x2="115" y2="72" stroke="#000" stroke-width="3"/>
  <line x1="115" y1="72"  x2="500" y2="72"  stroke="#000" stroke-width="3"/>
  <line x1="605" y1="110" x2="605" y2="72"  stroke="#000" stroke-width="3"/>
  <line x1="605" y1="72"  x2="500" y2="72"  stroke="#000" stroke-width="3"/>
  <circle cx="360" cy="72" r="20" fill="#fff" stroke="#000" stroke-width="2"/>
  <text x="360" y="68" font-family="Georgia,serif" font-size="9" font-weight="bold"
        fill="#000" text-anchor="middle">Load</text>
  <text x="360" y="80" font-family="Georgia,serif" font-size="8" fill="#000" text-anchor="middle">(car engine)</text>
  <polygon points="214,67 234,72 214,77" fill="#000"/>
  <text x="152" y="65" font-family="Georgia,serif" font-size="9" fill="#000">e⁻ →</text>

  <!-- Discharge reaction equations -->
  <text x="100" y="376" font-family="Georgia,serif" font-size="11" font-weight="bold" fill="#000">Anode:</text>
  <text x="160" y="376" font-family="Georgia,serif" font-size="11" fill="#000">Pb + SO₄²⁻  →  PbSO₄ + 2e⁻</text>
  <text x="500" y="376" font-family="Georgia,serif" font-size="11" font-weight="bold" fill="#000">Cathode:</text>
  <text x="570" y="376" font-family="Georgia,serif" font-size="11" fill="#000">PbO₂ + 4H⁺ + SO₄²⁻ + 2e⁻ → PbSO₄ + 2H₂O</text>
  <text x="100" y="396" font-family="Georgia,serif" font-size="11" font-weight="bold" fill="#000">Overall:</text>
  <text x="160" y="396" font-family="Georgia,serif" font-size="11" fill="#000">Pb + PbO₂ + 2H₂SO₄  →  2PbSO₄ + 2H₂O    E°cell ≈ +2.0 V</text>

  <!-- ══ CHARGING (bottom half) ══ -->
  <rect x="30" y="420" width="940" height="300" rx="5" fill="none" stroke="#000" stroke-width="2.5"/>
  <text x="500" y="444" font-family="Georgia,serif" font-size="13" font-weight="bold"
        fill="#000" text-anchor="middle">CHARGING MODE (Electrolytic — restores active materials)</text>
  <line x1="30" y1="450" x2="970" y2="450" stroke="#000" stroke-width="1.5"/>

  <text x="100" y="476" font-family="Georgia,serif" font-size="11" fill="#000">During charging, electrode roles reverse:</text>
  <text x="100" y="500" font-family="Georgia,serif" font-size="11" fill="#000">• Pb electrode (now CATHODE): PbSO₄ + 2e⁻ → Pb + SO₄²⁻  (reduction)</text>
  <text x="100" y="520" font-family="Georgia,serif" font-size="11" fill="#000">• PbO₂ electrode (now ANODE): PbSO₄ + 2H₂O → PbO₂ + 4H⁺ + SO₄²⁻ + 2e⁻  (oxidation)</text>
  <text x="100" y="544" font-family="Georgia,serif" font-size="11" fill="#000">• Overall (charging): 2PbSO₄ + 2H₂O  →  Pb + PbO₂ + 2H₂SO₄</text>
  <text x="100" y="564" font-family="Georgia,serif" font-size="10" fill="#555">  (Reversal of discharge equation — H₂SO₄ regenerated, concentration increases as battery charges)</text>

  <!-- Charging arrows: external DC source -->
  <rect x="100" y="584" width="500" height="110" rx="5" fill="none" stroke="#000" stroke-width="1.5"/>
  <text x="350" y="604" font-family="Georgia,serif" font-size="11" font-weight="bold"
        fill="#000" text-anchor="middle">Charging circuit (external DC source)</text>
  <line x1="120" y1="620" x2="560" y2="620" stroke="#000" stroke-width="2" stroke-dasharray="6,3"/>
  <!-- Battery symbol of charger -->
  <line x1="290" y1="612" x2="290" y2="628" stroke="#000" stroke-width="4"/>
  <line x1="302" y1="608" x2="302" y2="632" stroke="#000" stroke-width="1.5"/>
  <line x1="314" y1="612" x2="314" y2="628" stroke="#000" stroke-width="4"/>
  <line x1="326" y1="608" x2="326" y2="632" stroke="#000" stroke-width="1.5"/>
  <line x1="338" y1="612" x2="338" y2="628" stroke="#000" stroke-width="4"/>
  <text x="314" y="648" font-family="Georgia,serif" font-size="10" fill="#000" text-anchor="middle">Charger (DC)</text>
  <text x="130" y="638" font-family="Georgia,serif" font-size="10" fill="#000">−</text>
  <text x="546" y="638" font-family="Georgia,serif" font-size="10" fill="#000">+</text>
  <polygon points="220,615 240,620 220,625" fill="#000"/>
  <text x="159" y="613" font-family="Georgia,serif" font-size="9" fill="#000">e⁻ →</text>

  <!-- Density note -->
  <text x="100" y="672" font-family="Georgia,serif" font-size="11" fill="#000">State of charge indicator: H₂SO₄ density measured with hydrometer</text>
  <text x="100" y="690" font-family="Georgia,serif" font-size="11" fill="#000">Fully charged: ρ ≈ 1.28 g cm⁻³  |  Fully discharged: ρ ≈ 1.10 g cm⁻³</text>

  <!-- ══ SUMMARY ══ -->
  <rect x="30" y="734" width="940" height="52" rx="5" fill="none" stroke="#000" stroke-width="2" stroke-dasharray="5,3"/>
  <text x="500" y="756" font-family="Georgia,serif" font-size="11" font-weight="bold"
        fill="#000" text-anchor="middle">Key feature of rechargeable cells: discharge and charge reactions are fully reversible</text>
  <text x="500" y="776" font-family="Georgia,serif" font-size="10" fill="#555"
        text-anchor="middle">A typical car battery has 6 cells in series (≈12 V total); each cell ≈2.0 V</text>
</svg>`;

// ─── 10a. HOMOLOGOUS SERIES — Alkanes ─────────────────────────────────────────
static homologousSeriesDiagramSvg = `<?xml version="1.0" encoding="utf-8"?>
<svg version="1.1" xmlns="http://www.w3.org/2000/svg"
     width="1000px" height="800px" viewBox="0 0 1000 800">

  <text x="500" y="28" font-family="Georgia,serif" font-size="16" font-weight="bold"
        fill="#000" text-anchor="middle">Homologous Series — Alkanes (CₙH₂ₙ₊₂)</text>
  <text x="500" y="46" font-family="Georgia,serif" font-size="11" fill="#333"
        text-anchor="middle">Each member differs by −CH₂−  |  General formula CₙH₂ₙ₊₂  |  Single C−C bonds only</text>

  <!-- ══ GENERAL FORMULA BOX ══ -->
  <rect x="30" y="60" width="940" height="54" rx="5" fill="none" stroke="#000" stroke-width="2.5"/>
  <text x="160" y="82" font-family="Georgia,serif" font-size="12" font-weight="bold" fill="#000">General formula:</text>
  <text x="300" y="82" font-family="Georgia,serif" font-size="13" font-weight="bold" fill="#000">CₙH₂ₙ₊₂</text>
  <text x="480" y="82" font-family="Georgia,serif" font-size="12" fill="#000">|  Homologous difference: −CH₂−  (M = +14 g mol⁻¹)</text>
  <text x="160" y="104" font-family="Georgia,serif" font-size="11" fill="#000">All saturated (only σ bonds);  undergo combustion and free-radical substitution</text>

  <!-- ══ TABLE HEADER ══ -->
  <rect x="30" y="130" width="940" height="30" rx="0" fill="#333" stroke="#000" stroke-width="1.5"/>
  <text x="80"  y="150" font-family="Georgia,serif" font-size="11" font-weight="bold" fill="#fff">n</text>
  <text x="130" y="150" font-family="Georgia,serif" font-size="11" font-weight="bold" fill="#fff">Name</text>
  <text x="260" y="150" font-family="Georgia,serif" font-size="11" font-weight="bold" fill="#fff">Formula</text>
  <text x="400" y="150" font-family="Georgia,serif" font-size="11" font-weight="bold" fill="#fff">Structural formula</text>
  <text x="640" y="150" font-family="Georgia,serif" font-size="11" font-weight="bold" fill="#fff">M / g mol⁻¹</text>
  <text x="780" y="150" font-family="Georgia,serif" font-size="11" font-weight="bold" fill="#fff">Boiling pt / °C</text>
  <text x="900" y="150" font-family="Georgia,serif" font-size="11" font-weight="bold" fill="#fff">State</text>
  <line x1="120" y1="130" x2="120" y2="620" stroke="#888" stroke-width="1"/>
  <line x1="250" y1="130" x2="250" y2="620" stroke="#888" stroke-width="1"/>
  <line x1="390" y1="130" x2="390" y2="620" stroke="#888" stroke-width="1"/>
  <line x1="630" y1="130" x2="630" y2="620" stroke="#888" stroke-width="1"/>
  <line x1="770" y1="130" x2="770" y2="620" stroke="#888" stroke-width="1"/>
  <line x1="888" y1="130" x2="888" y2="620" stroke="#888" stroke-width="1"/>

  <!-- Alternating row fills -->
  <rect x="30" y="160" width="940" height="46" fill="#f0f0f0"/>
  <rect x="30" y="252" width="940" height="46" fill="#f0f0f0"/>
  <rect x="30" y="344" width="940" height="46" fill="#f0f0f0"/>
  <rect x="30" y="436" width="940" height="46" fill="#f0f0f0"/>
  <rect x="30" y="528" width="940" height="46" fill="#f0f0f0"/>

  <!-- Row 1: Methane -->
  <text x="72"  y="188" font-family="Georgia,serif" font-size="12" fill="#000" text-anchor="middle">1</text>
  <text x="184" y="188" font-family="Georgia,serif" font-size="12" font-weight="bold" fill="#000">Methane</text>
  <text x="316" y="188" font-family="Georgia,serif" font-size="12" fill="#000">CH₄</text>
  <text x="506" y="188" font-family="Georgia,serif" font-size="11" fill="#000">H−C−H  (tetrahedral)</text>
  <text x="697" y="188" font-family="Georgia,serif" font-size="12" fill="#000" text-anchor="middle">16</text>
  <text x="828" y="188" font-family="Georgia,serif" font-size="12" fill="#000" text-anchor="middle">−161</text>
  <text x="940" y="188" font-family="Georgia,serif" font-size="11" fill="#000" text-anchor="middle">gas</text>

  <!-- Row 2: Ethane -->
  <text x="72"  y="280" font-family="Georgia,serif" font-size="12" fill="#000" text-anchor="middle">2</text>
  <text x="184" y="280" font-family="Georgia,serif" font-size="12" font-weight="bold" fill="#000">Ethane</text>
  <text x="316" y="280" font-family="Georgia,serif" font-size="12" fill="#000">C₂H₆</text>
  <text x="506" y="280" font-family="Georgia,serif" font-size="11" fill="#000">CH₃−CH₃</text>
  <text x="697" y="280" font-family="Georgia,serif" font-size="12" fill="#000" text-anchor="middle">30</text>
  <text x="828" y="280" font-family="Georgia,serif" font-size="12" fill="#000" text-anchor="middle">−89</text>
  <text x="940" y="280" font-family="Georgia,serif" font-size="11" fill="#000" text-anchor="middle">gas</text>

  <!-- Row 3: Propane -->
  <text x="72"  y="372" font-family="Georgia,serif" font-size="12" fill="#000" text-anchor="middle">3</text>
  <text x="184" y="372" font-family="Georgia,serif" font-size="12" font-weight="bold" fill="#000">Propane</text>
  <text x="316" y="372" font-family="Georgia,serif" font-size="12" fill="#000">C₃H₈</text>
  <text x="506" y="372" font-family="Georgia,serif" font-size="11" fill="#000">CH₃−CH₂−CH₃</text>
  <text x="697" y="372" font-family="Georgia,serif" font-size="12" fill="#000" text-anchor="middle">44</text>
  <text x="828" y="372" font-family="Georgia,serif" font-size="12" fill="#000" text-anchor="middle">−42</text>
  <text x="940" y="372" font-family="Georgia,serif" font-size="11" fill="#000" text-anchor="middle">gas</text>

  <!-- Row 4: Butane -->
  <text x="72"  y="464" font-family="Georgia,serif" font-size="12" fill="#000" text-anchor="middle">4</text>
  <text x="184" y="464" font-family="Georgia,serif" font-size="12" font-weight="bold" fill="#000">Butane</text>
  <text x="316" y="464" font-family="Georgia,serif" font-size="12" fill="#000">C₄H₁₀</text>
  <text x="506" y="464" font-family="Georgia,serif" font-size="11" fill="#000">CH₃−CH₂−CH₂−CH₃</text>
  <text x="697" y="464" font-family="Georgia,serif" font-size="12" fill="#000" text-anchor="middle">58</text>
  <text x="828" y="464" font-family="Georgia,serif" font-size="12" fill="#000" text-anchor="middle">−1</text>
  <text x="940" y="464" font-family="Georgia,serif" font-size="11" fill="#000" text-anchor="middle">gas</text>

  <!-- Row 5: Pentane -->
  <text x="72"  y="556" font-family="Georgia,serif" font-size="12" fill="#000" text-anchor="middle">5</text>
  <text x="184" y="556" font-family="Georgia,serif" font-size="12" font-weight="bold" fill="#000">Pentane</text>
  <text x="316" y="556" font-family="Georgia,serif" font-size="12" fill="#000">C₅H₁₂</text>
  <text x="506" y="556" font-family="Georgia,serif" font-size="11" fill="#000">CH₃(CH₂)₃CH₃</text>
  <text x="697" y="556" font-family="Georgia,serif" font-size="12" fill="#000" text-anchor="middle">72</text>
  <text x="828" y="556" font-family="Georgia,serif" font-size="12" fill="#000" text-anchor="middle">+36</text>
  <text x="940" y="556" font-family="Georgia,serif" font-size="11" fill="#000" text-anchor="middle">liquid</text>

  <!-- Row 6: Decane (n=10) -->
  <text x="72"  y="610" font-family="Georgia,serif" font-size="12" fill="#000" text-anchor="middle">10</text>
  <text x="184" y="610" font-family="Georgia,serif" font-size="12" font-weight="bold" fill="#000">Decane</text>
  <text x="316" y="610" font-family="Georgia,serif" font-size="12" fill="#000">C₁₀H₂₂</text>
  <text x="506" y="610" font-family="Georgia,serif" font-size="11" fill="#000">CH₃(CH₂)₈CH₃</text>
  <text x="697" y="610" font-family="Georgia,serif" font-size="12" fill="#000" text-anchor="middle">142</text>
  <text x="828" y="610" font-family="Georgia,serif" font-size="12" fill="#000" text-anchor="middle">+174</text>
  <text x="940" y="610" font-family="Georgia,serif" font-size="11" fill="#000" text-anchor="middle">liquid</text>

  <!-- Table border -->
  <rect x="30" y="130" width="940" height="494" fill="none" stroke="#000" stroke-width="2"/>
  <!-- Row dividers -->
  <line x1="30" y1="206" x2="970" y2="206" stroke="#888" stroke-width="0.8"/>
  <line x1="30" y1="298" x2="970" y2="298" stroke="#888" stroke-width="0.8"/>
  <line x1="30" y1="390" x2="970" y2="390" stroke="#888" stroke-width="0.8"/>
  <line x1="30" y1="482" x2="970" y2="482" stroke="#888" stroke-width="0.8"/>
  <line x1="30" y1="574" x2="970" y2="574" stroke="#888" stroke-width="0.8"/>

  <!-- ══ TRENDS BOX ══ -->
  <rect x="30" y="640" width="940" height="148" rx="5" fill="none" stroke="#000" stroke-width="2" stroke-dasharray="5,3"/>
  <text x="500" y="662" font-family="Georgia,serif" font-size="13" font-weight="bold"
        fill="#000" text-anchor="middle">Trends with Increasing Chain Length (n)</text>
  <line x1="30" y1="668" x2="970" y2="668" stroke="#000" stroke-width="1" stroke-dasharray="4,3"/>
  <text x="50" y="690" font-family="Georgia,serif" font-size="11" fill="#000">• Boiling point increases — more London dispersion forces as surface area and M increase</text>
  <text x="50" y="710" font-family="Georgia,serif" font-size="11" fill="#000">• Viscosity increases — longer chains tangle more easily; flow becomes slower</text>
  <text x="50" y="730" font-family="Georgia,serif" font-size="11" fill="#000">• Flammability decreases — higher flash points for longer chains</text>
  <text x="50" y="750" font-family="Georgia,serif" font-size="11" fill="#000">• State changes: gases (n=1–4) → liquids (n=5–17) → waxy solids (n≥18) at room temperature</text>
  <text x="50" y="770" font-family="Georgia,serif" font-size="11" fill="#000">• Combustion: CₙH₂ₙ₊₂ + (3n+1)/2 O₂ → n CO₂ + (n+1) H₂O  (complete combustion)</text>
</svg>`;

// ─── 10b. STRUCTURAL ISOMERS — C₄H₁₀ ─────────────────────────────────────────
static structuralIsomersDiagramSvg = `<?xml version="1.0" encoding="utf-8"?>
<svg version="1.1" xmlns="http://www.w3.org/2000/svg"
     width="1000px" height="600px" viewBox="0 0 1000 600">

  <text x="500" y="28" font-family="Georgia,serif" font-size="16" font-weight="bold"
        fill="#000" text-anchor="middle">Structural Isomers — C₄H₁₀</text>
  <text x="500" y="46" font-family="Georgia,serif" font-size="11" fill="#333"
        text-anchor="middle">Same molecular formula, different structural arrangements — same M but different physical properties</text>

  <!-- Isomer 1: Butane -->
  <rect x="30" y="62" width="450" height="250" rx="5" fill="none" stroke="#000" stroke-width="2"/>
  <text x="255" y="86" font-family="Georgia,serif" font-size="13" font-weight="bold"
        fill="#000" text-anchor="middle">Isomer 1: Butane (n-butane)</text>
  <line x1="30" y1="92" x2="480" y2="92" stroke="#000" stroke-width="1.5"/>

  <!-- Structural formula: C−C−C−C chain -->
  <text x="255" y="140" font-family="Georgia,serif" font-size="18" fill="#000" text-anchor="middle">CH₃−CH₂−CH₂−CH₃</text>
  <!-- Bond line drawing -->
  <line x1="80"  y1="190" x2="180" y2="190" stroke="#000" stroke-width="2.5"/>
  <line x1="180" y1="190" x2="280" y2="190" stroke="#000" stroke-width="2.5"/>
  <line x1="280" y1="190" x2="380" y2="190" stroke="#000" stroke-width="2.5"/>
  <!-- Carbon atoms -->
  <circle cx="80"  cy="190" r="16" fill="#fff" stroke="#000" stroke-width="2"/>
  <text x="80"  y="195" font-family="Georgia,serif" font-size="11" font-weight="bold" fill="#000" text-anchor="middle">C</text>
  <circle cx="180" cy="190" r="16" fill="#fff" stroke="#000" stroke-width="2"/>
  <text x="180" y="195" font-family="Georgia,serif" font-size="11" font-weight="bold" fill="#000" text-anchor="middle">C</text>
  <circle cx="280" cy="190" r="16" fill="#fff" stroke="#000" stroke-width="2"/>
  <text x="280" y="195" font-family="Georgia,serif" font-size="11" font-weight="bold" fill="#000" text-anchor="middle">C</text>
  <circle cx="380" cy="190" r="16" fill="#fff" stroke="#000" stroke-width="2"/>
  <text x="380" y="195" font-family="Georgia,serif" font-size="11" font-weight="bold" fill="#000" text-anchor="middle">C</text>
  <!-- H atoms (simplified, just label) -->
  <text x="80"  y="168" font-family="Georgia,serif" font-size="10" fill="#555" text-anchor="middle">H₃</text>
  <text x="380" y="168" font-family="Georgia,serif" font-size="10" fill="#555" text-anchor="middle">H₃</text>
  <text x="180" y="222" font-family="Georgia,serif" font-size="10" fill="#555" text-anchor="middle">H₂</text>
  <text x="280" y="222" font-family="Georgia,serif" font-size="10" fill="#555" text-anchor="middle">H₂</text>

  <text x="44" y="248" font-family="Georgia,serif" font-size="11" fill="#000">IUPAC name: butane</text>
  <text x="44" y="264" font-family="Georgia,serif" font-size="11" fill="#000">Boiling point: −1 °C</text>
  <text x="44" y="280" font-family="Georgia,serif" font-size="11" fill="#000">Carbon skeleton: unbranched (linear) chain</text>
  <text x="44" y="296" font-family="Georgia,serif" font-size="11" fill="#000">All carbons: primary or secondary</text>

  <!-- Isomer 2: Isobutane / Methylpropane -->
  <rect x="530" y="62" width="440" height="250" rx="5" fill="none" stroke="#000" stroke-width="2"/>
  <text x="750" y="86" font-family="Georgia,serif" font-size="13" font-weight="bold"
        fill="#000" text-anchor="middle">Isomer 2: Methylpropane (isobutane)</text>
  <line x1="530" y1="92" x2="970" y2="92" stroke="#000" stroke-width="1.5"/>

  <!-- Structural formula: branched -->
  <text x="750" y="130" font-family="Georgia,serif" font-size="14" fill="#000" text-anchor="middle">(CH₃)₃CH</text>
  <!-- Bond line: central C with 3 CH₃ branches -->
  <!-- Central C at (750,190) -->
  <circle cx="750" cy="190" r="16" fill="#fff" stroke="#000" stroke-width="2"/>
  <text x="750" y="195" font-family="Georgia,serif" font-size="11" font-weight="bold" fill="#000" text-anchor="middle">C</text>
  <!-- Left branch -->
  <line x1="734" y1="190" x2="660" y2="190" stroke="#000" stroke-width="2.5"/>
  <circle cx="650" cy="190" r="16" fill="#fff" stroke="#000" stroke-width="2"/>
  <text x="650" y="195" font-family="Georgia,serif" font-size="11" font-weight="bold" fill="#000" text-anchor="middle">C</text>
  <text x="614" y="188" font-family="Georgia,serif" font-size="10" fill="#555">H₃</text>
  <!-- Right branch -->
  <line x1="766" y1="190" x2="840" y2="190" stroke="#000" stroke-width="2.5"/>
  <circle cx="850" cy="190" r="16" fill="#fff" stroke="#000" stroke-width="2"/>
  <text x="850" y="195" font-family="Georgia,serif" font-size="11" font-weight="bold" fill="#000" text-anchor="middle">C</text>
  <text x="876" y="188" font-family="Georgia,serif" font-size="10" fill="#555">H₃</text>
  <!-- Top branch -->
  <line x1="750" y1="174" x2="750" y2="140" stroke="#000" stroke-width="2.5"/>
  <circle cx="750" cy="130" r="16" fill="#fff" stroke="#000" stroke-width="2"/>
  <text x="750" y="135" font-family="Georgia,serif" font-size="11" font-weight="bold" fill="#000" text-anchor="middle">C</text>
  <text x="778" y="128" font-family="Georgia,serif" font-size="10" fill="#555">H₃</text>
  <!-- H on central C -->
  <text x="750" y="222" font-family="Georgia,serif" font-size="10" fill="#555" text-anchor="middle">H</text>

  <text x="544" y="248" font-family="Georgia,serif" font-size="11" fill="#000">IUPAC name: 2-methylpropane</text>
  <text x="544" y="264" font-family="Georgia,serif" font-size="11" fill="#000">Boiling point: −12 °C</text>
  <text x="544" y="280" font-family="Georgia,serif" font-size="11" fill="#000">Carbon skeleton: branched (1 branch point)</text>
  <text x="544" y="296" font-family="Georgia,serif" font-size="11" fill="#000">Central carbon: tertiary (bonded to 3 C atoms)</text>

  <!-- ══ COMPARISON TABLE ══ -->
  <rect x="30" y="330" width="940" height="130" rx="5" fill="none" stroke="#000" stroke-width="2"/>
  <text x="500" y="352" font-family="Georgia,serif" font-size="13" font-weight="bold"
        fill="#000" text-anchor="middle">Comparison of Isomers</text>
  <line x1="30" y1="358" x2="970" y2="358" stroke="#000" stroke-width="1.5"/>
  <!-- Header row -->
  <text x="150" y="378" font-family="Georgia,serif" font-size="11" font-weight="bold" fill="#000" text-anchor="middle">Property</text>
  <text x="430" y="378" font-family="Georgia,serif" font-size="11" font-weight="bold" fill="#000" text-anchor="middle">Butane</text>
  <text x="730" y="378" font-family="Georgia,serif" font-size="11" font-weight="bold" fill="#000" text-anchor="middle">Methylpropane</text>
  <line x1="290" y1="358" x2="290" y2="460" stroke="#888" stroke-width="1"/>
  <line x1="580" y1="358" x2="580" y2="460" stroke="#888" stroke-width="1"/>
  <line x1="30" y1="384" x2="970" y2="384" stroke="#888" stroke-width="0.8"/>
  <text x="150" y="402" font-family="Georgia,serif" font-size="11" fill="#000" text-anchor="middle">Molecular formula</text>
  <text x="430" y="402" font-family="Georgia,serif" font-size="11" fill="#000" text-anchor="middle">C₄H₁₀</text>
  <text x="730" y="402" font-family="Georgia,serif" font-size="11" fill="#000" text-anchor="middle">C₄H₁₀</text>
  <line x1="30" y1="408" x2="970" y2="408" stroke="#888" stroke-width="0.8"/>
  <text x="150" y="426" font-family="Georgia,serif" font-size="11" fill="#000" text-anchor="middle">Boiling point</text>
  <text x="430" y="426" font-family="Georgia,serif" font-size="11" fill="#000" text-anchor="middle">−1 °C</text>
  <text x="730" y="426" font-family="Georgia,serif" font-size="11" fill="#000" text-anchor="middle">−12 °C</text>
  <line x1="30" y1="432" x2="970" y2="432" stroke="#888" stroke-width="0.8"/>
  <text x="150" y="450" font-family="Georgia,serif" font-size="11" fill="#000" text-anchor="middle">Structure</text>
  <text x="430" y="450" font-family="Georgia,serif" font-size="11" fill="#000" text-anchor="middle">Linear (unbranched)</text>
  <text x="730" y="450" font-family="Georgia,serif" font-size="11" fill="#000" text-anchor="middle">Branched (1 branch point)</text>

  <!-- ══ KEY POINTS ══ -->
  <rect x="30" y="476" width="940" height="112" rx="5" fill="none" stroke="#000" stroke-width="2" stroke-dasharray="5,3"/>
  <text x="500" y="498" font-family="Georgia,serif" font-size="12" font-weight="bold"
        fill="#000" text-anchor="middle">Key Points on Structural Isomerism</text>
  <line x1="30" y1="504" x2="970" y2="504" stroke="#000" stroke-width="1" stroke-dasharray="4,3"/>
  <text x="50" y="524" font-family="Georgia,serif" font-size="11" fill="#000">• Structural isomers have the same molecular formula but different connectivity of atoms</text>
  <text x="50" y="542" font-family="Georgia,serif" font-size="11" fill="#000">• They are different compounds with different physical and possibly chemical properties</text>
  <text x="50" y="560" font-family="Georgia,serif" font-size="11" fill="#000">• Branching reduces boiling point: shorter, more compact shape → weaker London dispersion forces</text>
  <text x="50" y="578" font-family="Georgia,serif" font-size="11" fill="#000">• Types: chain isomers, position isomers, functional group isomers (C₄H₈O → aldehyde or ketone)</text>
</svg>`;

// ─── 10c. STEREOISOMERS — Geometric (cis/trans) ────────────────────────────────
static stereoisomersDiagramSvg = `<?xml version="1.0" encoding="utf-8"?>
<svg version="1.1" xmlns="http://www.w3.org/2000/svg"
     width="1000px" height="700px" viewBox="0 0 1000 700">

  <text x="500" y="28" font-family="Georgia,serif" font-size="16" font-weight="bold"
        fill="#000" text-anchor="middle">Stereoisomers — Geometric (cis/trans) Isomerism</text>
  <text x="500" y="46" font-family="Georgia,serif" font-size="11" fill="#333"
        text-anchor="middle">Same molecular formula and connectivity — different spatial arrangement around C=C</text>

  <!-- Condition box -->
  <rect x="30" y="60" width="940" height="46" rx="5" fill="none" stroke="#000" stroke-width="2"/>
  <text x="500" y="80" font-family="Georgia,serif" font-size="12" font-weight="bold"
        fill="#000" text-anchor="middle">Condition for geometric isomerism:</text>
  <text x="500" y="98" font-family="Georgia,serif" font-size="11" fill="#000"
        text-anchor="middle">Restricted rotation around C=C  |  Each C of double bond must carry two different substituents</text>

  <!-- ══ CIS ISOMER (left) ══ -->
  <rect x="30" y="122" width="450" height="280" rx="5" fill="none" stroke="#000" stroke-width="2"/>
  <text x="255" y="146" font-family="Georgia,serif" font-size="13" font-weight="bold"
        fill="#000" text-anchor="middle">cis-but-2-ene (Z-but-2-ene)</text>
  <line x1="30" y1="152" x2="480" y2="152" stroke="#000" stroke-width="1.5"/>
  <text x="255" y="172" font-family="Georgia,serif" font-size="11" fill="#555"
        text-anchor="middle">Same groups on same side of double bond</text>

  <!-- C=C double bond -->
  <line x1="180" y1="250" x2="330" y2="250" stroke="#000" stroke-width="3"/>
  <line x1="180" y1="262" x2="330" y2="262" stroke="#000" stroke-width="3"/>
  <!-- Left C -->
  <circle cx="170" cy="256" r="18" fill="#fff" stroke="#000" stroke-width="2"/>
  <text x="170" y="261" font-family="Georgia,serif" font-size="12" font-weight="bold" fill="#000" text-anchor="middle">C</text>
  <!-- Right C -->
  <circle cx="340" cy="256" r="18" fill="#fff" stroke="#000" stroke-width="2"/>
  <text x="340" y="261" font-family="Georgia,serif" font-size="12" font-weight="bold" fill="#000" text-anchor="middle">C</text>

  <!-- Left C: CH₃ up, H down (cis: both CH₃ on same side = top) -->
  <line x1="170" y1="238" x2="130" y2="192" stroke="#000" stroke-width="2"/>
  <text x="122" y="186" font-family="Georgia,serif" font-size="12" fill="#000">CH₃</text>
  <line x1="170" y1="274" x2="130" y2="310" stroke="#000" stroke-width="2"/>
  <text x="106" y="328" font-family="Georgia,serif" font-size="12" fill="#000">H</text>

  <!-- Right C: CH₃ up, H down (same side as left CH₃ = cis) -->
  <line x1="340" y1="238" x2="380" y2="192" stroke="#000" stroke-width="2"/>
  <text x="386" y="186" font-family="Georgia,serif" font-size="12" fill="#000">CH₃</text>
  <line x1="340" y1="274" x2="380" y2="310" stroke="#000" stroke-width="2"/>
  <text x="384" y="328" font-family="Georgia,serif" font-size="12" fill="#000">H</text>

  <!-- cis label with arrow -->
  <text x="255" y="348" font-family="Georgia,serif" font-size="12" font-weight="bold"
        fill="#000" text-anchor="middle">Both CH₃ groups on same side</text>
  <text x="44" y="374" font-family="Georgia,serif" font-size="11" fill="#000">Molecular formula: C₄H₈</text>
  <text x="44" y="392" font-family="Georgia,serif" font-size="11" fill="#000">Boiling point: +4 °C (polar — dipole moments reinforce)</text>

  <!-- ══ TRANS ISOMER (right) ══ -->
  <rect x="520" y="122" width="450" height="280" rx="5" fill="none" stroke="#000" stroke-width="2"/>
  <text x="745" y="146" font-family="Georgia,serif" font-size="13" font-weight="bold"
        fill="#000" text-anchor="middle">trans-but-2-ene (E-but-2-ene)</text>
  <line x1="520" y1="152" x2="970" y2="152" stroke="#000" stroke-width="1.5"/>
  <text x="745" y="172" font-family="Georgia,serif" font-size="11" fill="#555"
        text-anchor="middle">Same groups on opposite sides of double bond</text>

  <!-- C=C double bond -->
  <line x1="670" y1="250" x2="820" y2="250" stroke="#000" stroke-width="3"/>
  <line x1="670" y1="262" x2="820" y2="262" stroke="#000" stroke-width="3"/>
  <!-- Left C -->
  <circle cx="660" cy="256" r="18" fill="#fff" stroke="#000" stroke-width="2"/>
  <text x="660" y="261" font-family="Georgia,serif" font-size="12" font-weight="bold" fill="#000" text-anchor="middle">C</text>
  <!-- Right C -->
  <circle cx="830" cy="256" r="18" fill="#fff" stroke="#000" stroke-width="2"/>
  <text x="830" y="261" font-family="Georgia,serif" font-size="12" font-weight="bold" fill="#000" text-anchor="middle">C</text>

  <!-- Left C: CH₃ up, H down -->
  <line x1="660" y1="238" x2="620" y2="192" stroke="#000" stroke-width="2"/>
  <text x="596" y="186" font-family="Georgia,serif" font-size="12" fill="#000">CH₃</text>
  <line x1="660" y1="274" x2="620" y2="310" stroke="#000" stroke-width="2"/>
  <text x="604" y="328" font-family="Georgia,serif" font-size="12" fill="#000">H</text>

  <!-- Right C: CH₃ DOWN (opposite side = trans), H up -->
  <line x1="830" y1="274" x2="870" y2="310" stroke="#000" stroke-width="2"/>
  <text x="876" y="328" font-family="Georgia,serif" font-size="12" fill="#000">CH₃</text>
  <line x1="830" y1="238" x2="870" y2="192" stroke="#000" stroke-width="2"/>
  <text x="874" y="186" font-family="Georgia,serif" font-size="12" fill="#000">H</text>

  <text x="745" y="348" font-family="Georgia,serif" font-size="12" font-weight="bold"
        fill="#000" text-anchor="middle">CH₃ groups on opposite sides</text>
  <text x="534" y="374" font-family="Georgia,serif" font-size="11" fill="#000">Molecular formula: C₄H₈</text>
  <text x="534" y="392" font-family="Georgia,serif" font-size="11" fill="#000">Boiling point: +1 °C (less polar — dipoles cancel)</text>

  <!-- Mirror plane between -->
  <line x1="500" y1="122" x2="500" y2="402" stroke="#000" stroke-width="2" stroke-dasharray="8,4"/>
  <text x="500" y="118" font-family="Georgia,serif" font-size="10" fill="#000" text-anchor="middle">C=C plane</text>

  <!-- ══ KEY DIFFERENCES ══ -->
  <rect x="30" y="418" width="940" height="140" rx="5" fill="none" stroke="#000" stroke-width="2"/>
  <text x="500" y="440" font-family="Georgia,serif" font-size="13" font-weight="bold"
        fill="#000" text-anchor="middle">Key Differences and Consequences</text>
  <line x1="30" y1="446" x2="970" y2="446" stroke="#000" stroke-width="1.5"/>
  <text x="50" y="468" font-family="Georgia,serif" font-size="11" fill="#000">• Cannot interconvert without breaking the π bond (unlike conformational isomers which interconvert freely)</text>
  <text x="50" y="488" font-family="Georgia,serif" font-size="11" fill="#000">• cis: polar molecule (dipoles add); trans: non-polar (dipoles cancel) — different physical properties</text>
  <text x="50" y="508" font-family="Georgia,serif" font-size="11" fill="#000">• Biological importance: cis/trans fatty acids have very different melting points and health effects</text>
  <text x="50" y="528" font-family="Georgia,serif" font-size="11" fill="#000">• E/Z notation (IUPAC): E = entgegen (opposite); Z = zusammen (same) — based on Cahn–Ingold–Prelog priority</text>

  <!-- ══ SUMMARY BOX ══ -->
  <rect x="30" y="572" width="940" height="116" rx="5" fill="none" stroke="#000" stroke-width="2" stroke-dasharray="5,3"/>
  <text x="500" y="594" font-family="Georgia,serif" font-size="12" font-weight="bold"
        fill="#000" text-anchor="middle">E/Z Nomenclature (IUPAC system)</text>
  <line x1="30" y1="600" x2="970" y2="600" stroke="#000" stroke-width="1" stroke-dasharray="4,3"/>
  <text x="50" y="620" font-family="Georgia,serif" font-size="11" fill="#000">Assign priorities to groups on each C using atomic number (higher Z = higher priority)</text>
  <text x="50" y="640" font-family="Georgia,serif" font-size="11" fill="#000">Z (zusammen/same): higher-priority groups on same side of double bond  →  equivalent to cis if groups identical</text>
  <text x="50" y="660" font-family="Georgia,serif" font-size="11" fill="#000">E (entgegen/opposite): higher-priority groups on opposite sides  →  equivalent to trans if groups identical</text>
  <text x="50" y="680" font-family="Georgia,serif" font-size="11" fill="#000">Example: (Z)-but-2-ene = cis-but-2-ene  |  (E)-but-2-ene = trans-but-2-ene</text>
</svg>`;

// ─── 10d. FUNCTIONAL GROUPS ────────────────────────────────────────────────────
static functionalGroupsDiagramSvg = `<?xml version="1.0" encoding="utf-8"?>
<svg version="1.1" xmlns="http://www.w3.org/2000/svg"
     width="1100px" height="900px" viewBox="0 0 1100 900">

  <text x="550" y="28" font-family="Georgia,serif" font-size="16" font-weight="bold"
        fill="#000" text-anchor="middle">Organic Functional Groups</text>
  <text x="550" y="46" font-family="Georgia,serif" font-size="11" fill="#333"
        text-anchor="middle">Key functional groups, their formulae, example compounds, and characteristic reactions</text>

  <!-- TABLE STRUCTURE: 3 columns, each cell ≈360px wide, 4 rows -->
  <!-- Column dividers -->
  <line x1="380" y1="62" x2="380" y2="890" stroke="#000" stroke-width="1.5"/>
  <line x1="740" y1="62" x2="740" y2="890" stroke="#000" stroke-width="1.5"/>

  <!-- Row dividers -->
  <line x1="30"  y1="62"  x2="1070" y2="62"  stroke="#000" stroke-width="1.5"/>
  <line x1="30"  y1="270" x2="1070" y2="270" stroke="#000" stroke-width="1.5"/>
  <line x1="30"  y1="478" x2="1070" y2="478" stroke="#000" stroke-width="1.5"/>
  <line x1="30"  y1="686" x2="1070" y2="686" stroke="#000" stroke-width="1.5"/>
  <line x1="30"  y1="894" x2="1070" y2="894" stroke="#000" stroke-width="1.5"/>

  <!-- Outer border -->
  <rect x="30" y="62" width="1040" height="832" fill="none" stroke="#000" stroke-width="2"/>

  <!-- ─── ALCOHOL ─── (row 1, col 1) -->
  <rect x="30" y="62" width="350" height="208" fill="#f0f0f0"/>
  <text x="205" y="84" font-family="Georgia,serif" font-size="13" font-weight="bold"
        fill="#000" text-anchor="middle">Alcohol</text>
  <text x="205" y="100" font-family="Georgia,serif" font-size="12" fill="#000" text-anchor="middle">Functional group: −OH</text>
  <text x="205" y="118" font-family="Georgia,serif" font-size="12" fill="#000" text-anchor="middle">General: R−OH</text>
  <text x="44" y="142" font-family="Georgia,serif" font-size="11" fill="#000">Example: ethanol  CH₃CH₂OH</text>
  <text x="44" y="160" font-family="Georgia,serif" font-size="11" fill="#000">Reactions:</text>
  <text x="44" y="178" font-family="Georgia,serif" font-size="11" fill="#000">• Combustion → CO₂ + H₂O</text>
  <text x="44" y="196" font-family="Georgia,serif" font-size="11" fill="#000">• Oxidation → aldehyde → carboxylic acid</text>
  <text x="44" y="214" font-family="Georgia,serif" font-size="11" fill="#000">• Esterification with carboxylic acid</text>
  <text x="44" y="232" font-family="Georgia,serif" font-size="11" fill="#000">• Dehydration → alkene (elimination)</text>
  <text x="44" y="252" font-family="Georgia,serif" font-size="10" fill="#555">Suffix: -ol  |  Prefix: hydroxy-</text>

  <!-- ─── CARBOXYLIC ACID ─── (row 1, col 2) -->
  <text x="560" y="84" font-family="Georgia,serif" font-size="13" font-weight="bold"
        fill="#000" text-anchor="middle">Carboxylic Acid</text>
  <text x="560" y="100" font-family="Georgia,serif" font-size="12" fill="#000" text-anchor="middle">Functional group: −COOH</text>
  <text x="560" y="118" font-family="Georgia,serif" font-size="12" fill="#000" text-anchor="middle">General: R−COOH</text>
  <text x="394" y="142" font-family="Georgia,serif" font-size="11" fill="#000">Example: ethanoic acid  CH₃COOH</text>
  <text x="394" y="160" font-family="Georgia,serif" font-size="11" fill="#000">Reactions:</text>
  <text x="394" y="178" font-family="Georgia,serif" font-size="11" fill="#000">• Neutralisation with bases → salt + H₂O</text>
  <text x="394" y="196" font-family="Georgia,serif" font-size="11" fill="#000">• Esterification with alcohols (H⁺ catalyst)</text>
  <text x="394" y="214" font-family="Georgia,serif" font-size="11" fill="#000">• Reaction with carbonates → CO₂</text>
  <text x="394" y="232" font-family="Georgia,serif" font-size="11" fill="#000">• Reduction → alcohol (LiAlH₄)</text>
  <text x="394" y="252" font-family="Georgia,serif" font-size="10" fill="#555">Suffix: -anoic acid  |  Weak acid (pKₐ ≈ 4–5)</text>

  <!-- ─── ALDEHYDE ─── (row 1, col 3) -->
  <rect x="740" y="62" width="330" height="208" fill="#f0f0f0"/>
  <text x="905" y="84" font-family="Georgia,serif" font-size="13" font-weight="bold"
        fill="#000" text-anchor="middle">Aldehyde</text>
  <text x="905" y="100" font-family="Georgia,serif" font-size="12" fill="#000" text-anchor="middle">Functional group: −CHO</text>
  <text x="905" y="118" font-family="Georgia,serif" font-size="12" fill="#000" text-anchor="middle">General: R−CHO</text>
  <text x="754" y="142" font-family="Georgia,serif" font-size="11" fill="#000">Example: ethanal  CH₃CHO</text>
  <text x="754" y="160" font-family="Georgia,serif" font-size="11" fill="#000">Reactions:</text>
  <text x="754" y="178" font-family="Georgia,serif" font-size="11" fill="#000">• Oxidation → carboxylic acid</text>
  <text x="754" y="196" font-family="Georgia,serif" font-size="11" fill="#000">• Reduction → primary alcohol</text>
  <text x="754" y="214" font-family="Georgia,serif" font-size="11" fill="#000">• Tollens' test: positive (silver mirror)</text>
  <text x="754" y="232" font-family="Georgia,serif" font-size="11" fill="#000">• Fehling's test: positive (brick-red ppt)</text>
  <text x="754" y="252" font-family="Georgia,serif" font-size="10" fill="#555">Suffix: -al  |  Always terminal (end of chain)</text>

  <!-- ─── KETONE ─── (row 2, col 1) -->
  <rect x="30" y="270" width="350" height="208" fill="#f8f8f8"/>
  <text x="205" y="292" font-family="Georgia,serif" font-size="13" font-weight="bold"
        fill="#000" text-anchor="middle">Ketone</text>
  <text x="205" y="308" font-family="Georgia,serif" font-size="12" fill="#000" text-anchor="middle">Functional group: C=O (internal)</text>
  <text x="205" y="326" font-family="Georgia,serif" font-size="12" fill="#000" text-anchor="middle">General: R−CO−R′</text>
  <text x="44" y="350" font-family="Georgia,serif" font-size="11" fill="#000">Example: propanone  CH₃COCH₃</text>
  <text x="44" y="368" font-family="Georgia,serif" font-size="11" fill="#000">Reactions:</text>
  <text x="44" y="386" font-family="Georgia,serif" font-size="11" fill="#000">• Reduction → secondary alcohol</text>
  <text x="44" y="404" font-family="Georgia,serif" font-size="11" fill="#000">• Not easily oxidised (no Tollens/Fehling)</text>
  <text x="44" y="422" font-family="Georgia,serif" font-size="11" fill="#000">• Nucleophilic addition reactions</text>
  <text x="44" y="440" font-family="Georgia,serif" font-size="11" fill="#000">• Iodoform test (if CH₃CO−): yellow ppt</text>
  <text x="44" y="460" font-family="Georgia,serif" font-size="10" fill="#555">Suffix: -one  |  C=O always non-terminal</text>

  <!-- ─── ESTER ─── (row 2, col 2) -->
  <rect x="380" y="270" width="360" height="208" fill="#f8f8f8"/>
  <text x="560" y="292" font-family="Georgia,serif" font-size="13" font-weight="bold"
        fill="#000" text-anchor="middle">Ester</text>
  <text x="560" y="308" font-family="Georgia,serif" font-size="12" fill="#000" text-anchor="middle">Functional group: −COO−</text>
  <text x="560" y="326" font-family="Georgia,serif" font-size="12" fill="#000" text-anchor="middle">General: R−COO−R′</text>
  <text x="394" y="350" font-family="Georgia,serif" font-size="11" fill="#000">Example: ethyl ethanoate  CH₃COOC₂H₅</text>
  <text x="394" y="368" font-family="Georgia,serif" font-size="11" fill="#000">Reactions:</text>
  <text x="394" y="386" font-family="Georgia,serif" font-size="11" fill="#000">• Hydrolysis (acid): → acid + alcohol</text>
  <text x="394" y="404" font-family="Georgia,serif" font-size="11" fill="#000">• Hydrolysis (base/saponification): → salt</text>
  <text x="394" y="422" font-family="Georgia,serif" font-size="11" fill="#000">• Found in fats, oils, fragrances</text>
  <text x="394" y="440" font-family="Georgia,serif" font-size="11" fill="#000">• Formed by esterification (H₂SO₄ cat.)</text>
  <text x="394" y="460" font-family="Georgia,serif" font-size="10" fill="#555">Suffix: -yl -anoate  |  Fruity odours</text>

  <!-- ─── AMINE ─── (row 2, col 3) -->
  <rect x="740" y="270" width="330" height="208" fill="#f8f8f8"/>
  <text x="905" y="292" font-family="Georgia,serif" font-size="13" font-weight="bold"
        fill="#000" text-anchor="middle">Amine</text>
  <text x="905" y="308" font-family="Georgia,serif" font-size="12" fill="#000" text-anchor="middle">Functional group: −NH₂</text>
  <text x="905" y="326" font-family="Georgia,serif" font-size="12" fill="#000" text-anchor="middle">General: R−NH₂ (1°)</text>
  <text x="754" y="350" font-family="Georgia,serif" font-size="11" fill="#000">Example: methylamine  CH₃NH₂</text>
  <text x="754" y="368" font-family="Georgia,serif" font-size="11" fill="#000">Reactions:</text>
  <text x="754" y="386" font-family="Georgia,serif" font-size="11" fill="#000">• Base: R−NH₂ + HCl → R−NH₃⁺Cl⁻</text>
  <text x="754" y="404" font-family="Georgia,serif" font-size="11" fill="#000">• Nucleophile: reacts with halogenoalkanes</text>
  <text x="754" y="422" font-family="Georgia,serif" font-size="11" fill="#000">• Reaction with acid chlorides → amide</text>
  <text x="754" y="440" font-family="Georgia,serif" font-size="11" fill="#000">• Diazotisation (ArNH₂ + HNO₂ → ArN₂⁺)</text>
  <text x="754" y="460" font-family="Georgia,serif" font-size="10" fill="#555">Suffix: -amine  |  Fishy smell</text>

  <!-- ─── AMIDE ─── (row 3, col 1) -->
  <rect x="30" y="478" width="350" height="208" fill="#f0f0f0"/>
  <text x="205" y="500" font-family="Georgia,serif" font-size="13" font-weight="bold"
        fill="#000" text-anchor="middle">Amide</text>
  <text x="205" y="516" font-family="Georgia,serif" font-size="12" fill="#000" text-anchor="middle">Functional group: −CONH₂</text>
  <text x="205" y="534" font-family="Georgia,serif" font-size="12" fill="#000" text-anchor="middle">General: R−CONH₂</text>
  <text x="44" y="558" font-family="Georgia,serif" font-size="11" fill="#000">Example: ethanamide  CH₃CONH₂</text>
  <text x="44" y="576" font-family="Georgia,serif" font-size="11" fill="#000">Reactions:</text>
  <text x="44" y="594" font-family="Georgia,serif" font-size="11" fill="#000">• Hydrolysis (acid/base) → acid + amine</text>
  <text x="44" y="612" font-family="Georgia,serif" font-size="11" fill="#000">• Reduction → amine (LiAlH₄)</text>
  <text x="44" y="630" font-family="Georgia,serif" font-size="11" fill="#000">• Formed from acid chloride + amine</text>
  <text x="44" y="648" font-family="Georgia,serif" font-size="11" fill="#000">• Peptide bond is an amide bond</text>
  <text x="44" y="668" font-family="Georgia,serif" font-size="10" fill="#555">Suffix: -amide  |  Found in proteins/nylon</text>

  <!-- ─── HALOGENOALKANE ─── (row 3, col 2) -->
  <rect x="380" y="478" width="360" height="208" fill="#f0f0f0"/>
  <text x="560" y="500" font-family="Georgia,serif" font-size="13" font-weight="bold"
        fill="#000" text-anchor="middle">Halogenoalkane</text>
  <text x="560" y="516" font-family="Georgia,serif" font-size="12" fill="#000" text-anchor="middle">Functional group: −X (X = F, Cl, Br, I)</text>
  <text x="560" y="534" font-family="Georgia,serif" font-size="12" fill="#000" text-anchor="middle">General: R−X</text>
  <text x="394" y="558" font-family="Georgia,serif" font-size="11" fill="#000">Example: bromoethane  CH₃CH₂Br</text>
  <text x="394" y="576" font-family="Georgia,serif" font-size="11" fill="#000">Reactions:</text>
  <text x="394" y="594" font-family="Georgia,serif" font-size="11" fill="#000">• Nucleophilic substitution (SN1/SN2)</text>
  <text x="394" y="612" font-family="Georgia,serif" font-size="11" fill="#000">  + OH⁻ → alcohol; + NH₃ → amine</text>
  <text x="394" y="630" font-family="Georgia,serif" font-size="11" fill="#000">• Elimination with KOH/ethanol → alkene</text>
  <text x="394" y="648" font-family="Georgia,serif" font-size="11" fill="#000">• Reactivity: RI &gt; RBr &gt; RCl &gt; RF</text>
  <text x="394" y="668" font-family="Georgia,serif" font-size="10" fill="#555">Prefix: fluoro-/chloro-/bromo-/iodo-</text>

  <!-- ─── ALKENE ─── (row 3, col 3) -->
  <rect x="740" y="478" width="330" height="208" fill="#f0f0f0"/>
  <text x="905" y="500" font-family="Georgia,serif" font-size="13" font-weight="bold"
        fill="#000" text-anchor="middle">Alkene</text>
  <text x="905" y="516" font-family="Georgia,serif" font-size="12" fill="#000" text-anchor="middle">Functional group: C=C</text>
  <text x="905" y="534" font-family="Georgia,serif" font-size="12" fill="#000" text-anchor="middle">General: CₙH₂ₙ</text>
  <text x="754" y="558" font-family="Georgia,serif" font-size="11" fill="#000">Example: ethene  CH₂=CH₂</text>
  <text x="754" y="576" font-family="Georgia,serif" font-size="11" fill="#000">Reactions:</text>
  <text x="754" y="594" font-family="Georgia,serif" font-size="11" fill="#000">• Electrophilic addition (H₂, HX, Br₂, H₂O)</text>
  <text x="754" y="612" font-family="Georgia,serif" font-size="11" fill="#000">• Addition polymerisation → polymer</text>
  <text x="754" y="630" font-family="Georgia,serif" font-size="11" fill="#000">• Br₂(aq) decolourisation (unsaturation test)</text>
  <text x="754" y="648" font-family="Georgia,serif" font-size="11" fill="#000">• Oxidation: KMnO₄ → diol (cold/dilute)</text>
  <text x="754" y="668" font-family="Georgia,serif" font-size="10" fill="#555">Suffix: -ene  |  Unsaturated</text>

  <!-- ─── NITRILE ─── (row 4, col 1) -->
  <rect x="30" y="686" width="350" height="208" fill="#f8f8f8"/>
  <text x="205" y="708" font-family="Georgia,serif" font-size="13" font-weight="bold"
        fill="#000" text-anchor="middle">Nitrile</text>
  <text x="205" y="724" font-family="Georgia,serif" font-size="12" fill="#000" text-anchor="middle">Functional group: −C≡N</text>
  <text x="205" y="742" font-family="Georgia,serif" font-size="12" fill="#000" text-anchor="middle">General: R−CN</text>
  <text x="44" y="766" font-family="Georgia,serif" font-size="11" fill="#000">Example: ethanenitrile  CH₃CN</text>
  <text x="44" y="784" font-family="Georgia,serif" font-size="11" fill="#000">Reactions:</text>
  <text x="44" y="802" font-family="Georgia,serif" font-size="11" fill="#000">• Hydrolysis → amide → carboxylic acid</text>
  <text x="44" y="820" font-family="Georgia,serif" font-size="11" fill="#000">• Reduction → primary amine (LiAlH₄)</text>
  <text x="44" y="838" font-family="Georgia,serif" font-size="11" fill="#000">• Nucleophilic addition to carbonyl</text>
  <text x="44" y="876" font-family="Georgia,serif" font-size="10" fill="#555">Suffix: -nitrile  |  Chain-lengthening agent</text>

  <!-- ─── ACID CHLORIDE ─── (row 4, col 2) -->
  <rect x="380" y="686" width="360" height="208" fill="#f8f8f8"/>
  <text x="560" y="708" font-family="Georgia,serif" font-size="13" font-weight="bold"
        fill="#000" text-anchor="middle">Acid Chloride</text>
  <text x="560" y="724" font-family="Georgia,serif" font-size="12" fill="#000" text-anchor="middle">Functional group: −COCl</text>
  <text x="560" y="742" font-family="Georgia,serif" font-size="12" fill="#000" text-anchor="middle">General: R−COCl</text>
  <text x="394" y="766" font-family="Georgia,serif" font-size="11" fill="#000">Example: ethanoyl chloride  CH₃COCl</text>
  <text x="394" y="784" font-family="Georgia,serif" font-size="11" fill="#000">Reactions (very reactive):</text>
  <text x="394" y="802" font-family="Georgia,serif" font-size="11" fill="#000">• + H₂O → carboxylic acid + HCl</text>
  <text x="394" y="820" font-family="Georgia,serif" font-size="11" fill="#000">• + ROH → ester + HCl</text>
  <text x="394" y="838" font-family="Georgia,serif" font-size="11" fill="#000">• + RNH₂ → amide + HCl</text>
  <text x="394" y="876" font-family="Georgia,serif" font-size="10" fill="#555">Suffix: -oyl chloride  |  Pungent, fuming</text>

  <!-- ─── AROMATIC (benzene ring) ─── (row 4, col 3) -->
  <rect x="740" y="686" width="330" height="208" fill="#f8f8f8"/>
  <text x="905" y="708" font-family="Georgia,serif" font-size="13" font-weight="bold"
        fill="#000" text-anchor="middle">Arene (Benzene Ring)</text>
  <text x="905" y="724" font-family="Georgia,serif" font-size="12" fill="#000" text-anchor="middle">C₆H₅− (phenyl)</text>
  <!-- Benzene ring sketch -->
  <polygon points="895,748 878,760 878,784 895,796 912,784 912,760"
           fill="none" stroke="#000" stroke-width="2.5"/>
  <circle cx="895" cy="772" r="10" fill="none" stroke="#000" stroke-width="1.5"/>
  <text x="754" y="820" font-family="Georgia,serif" font-size="11" fill="#000">Reactions:</text>
  <text x="754" y="838" font-family="Georgia,serif" font-size="11" fill="#000">• Electrophilic aromatic substitution (EAS)</text>
  <text x="754" y="856" font-family="Georgia,serif" font-size="11" fill="#000">  Nitration, halogenation, sulfonation</text>
  <text x="754" y="874" font-family="Georgia,serif" font-size="11" fill="#000">• Addition (forcing conditions only)</text>
  <text x="754" y="878" font-family="Georgia,serif" font-size="10" fill="#555"></text>
</svg>`;

// ─── 10e. ORGANIC REACTION MECHANISM — Nucleophilic Substitution ──────────────
static reactionMechanismOrganicSvg = `<?xml version="1.0" encoding="utf-8"?>
<svg version="1.1" xmlns="http://www.w3.org/2000/svg"
     width="1000px" height="600px" viewBox="0 0 1000 600">

  <text x="500" y="28" font-family="Georgia,serif" font-size="16" font-weight="bold"
        fill="#000" text-anchor="middle">Organic Reaction Mechanism — Nucleophilic Substitution</text>
  <text x="500" y="46" font-family="Georgia,serif" font-size="11" fill="#333"
        text-anchor="middle">Curly arrow mechanism: SN2 (bromoethane + OH⁻) and SN1 (2-bromo-2-methylpropane + OH⁻)</text>

  <!-- ══ SN2 MECHANISM (top) ══ -->
  <rect x="30" y="62" width="940" height="230" rx="5" fill="none" stroke="#000" stroke-width="2"/>
  <text x="500" y="84" font-family="Georgia,serif" font-size="13" font-weight="bold"
        fill="#000" text-anchor="middle">SN2 — Bimolecular Nucleophilic Substitution (one step)</text>
  <line x1="30" y1="90" x2="970" y2="90" stroke="#000" stroke-width="1.5"/>
  <text x="500" y="108" font-family="Georgia,serif" font-size="11" fill="#555"
        text-anchor="middle">Rate = k[RBr][OH⁻]  |  Inversion of configuration (Walden inversion)  |  1° halogenoalkanes favoured</text>

  <!-- Reactant: HO⁻ approaching C from back -->
  <text x="60"  y="164" font-family="Georgia,serif" font-size="15" font-weight="bold" fill="#000">HO⁻</text>

  <!-- Arrow from O to C (curly arrow — nucleophile donating pair) -->
  <!-- Approximated as curved arrow -->
  <path d="M110,158 Q180,130 230,152" fill="none" stroke="#000" stroke-width="2"
        marker-end="url(#arr)"/>
  <defs>
    <marker id="arr" markerWidth="10" markerHeight="7" refX="10" refY="3.5" orient="auto">
      <polygon points="0 0, 10 3.5, 0 7" fill="#000"/>
    </marker>
  </defs>

  <!-- Central carbon of substrate -->
  <circle cx="250" cy="160" r="22" fill="#fff" stroke="#000" stroke-width="2.5"/>
  <text x="250" y="165" font-family="Georgia,serif" font-size="12" font-weight="bold" fill="#000" text-anchor="middle">C</text>
  <!-- Substituents on C -->
  <line x1="250" y1="138" x2="250" y2="112" stroke="#000" stroke-width="2"/>
  <text x="250" y="106" font-family="Georgia,serif" font-size="12" fill="#000" text-anchor="middle">H</text>
  <line x1="228" y1="160" x2="190" y2="160" stroke="#000" stroke-width="2"/>
  <text x="178" y="164" font-family="Georgia,serif" font-size="12" fill="#000">H</text>
  <line x1="250" y1="182" x2="250" y2="204" stroke="#000" stroke-width="2"/>
  <text x="250" y="218" font-family="Georgia,serif" font-size="12" fill="#000" text-anchor="middle">CH₃</text>
  <!-- Br leaving (right side) -->
  <line x1="272" y1="160" x2="320" y2="160" stroke="#000" stroke-width="2"/>
  <text x="334" y="164" font-family="Georgia,serif" font-size="12" fill="#000">Br</text>

  <!-- Arrow from C-Br bond to Br (curly arrow — electrons going to Br) -->
  <path d="M316,150 Q360,130 390,148" fill="none" stroke="#000" stroke-width="2"
        marker-end="url(#arr)"/>

  <!-- Transition state label -->
  <text x="250" y="246" font-family="Georgia,serif" font-size="10" fill="#555"
        text-anchor="middle">[HO···C···Br]‡  (pentacoordinate)</text>

  <!-- Arrow to product -->
  <line x1="420" y1="160" x2="520" y2="160" stroke="#000" stroke-width="2.5"/>
  <polygon points="516,155 530,160 516,165" fill="#000"/>
  <text x="470" y="150" font-family="Georgia,serif" font-size="11" fill="#000" text-anchor="middle">SN2</text>

  <!-- Product: ethanol + Br⁻ -->
  <text x="570" y="148" font-family="Georgia,serif" font-size="14" fill="#000">CH₃CH₂OH</text>
  <text x="700" y="148" font-family="Georgia,serif" font-size="14" fill="#000">+</text>
  <text x="730" y="148" font-family="Georgia,serif" font-size="14" fill="#000">Br⁻</text>

  <!-- Inversion note -->
  <text x="570" y="172" font-family="Georgia,serif" font-size="10" fill="#555">(configuration inverted)</text>

  <text x="44" y="278" font-family="Georgia,serif" font-size="11" fill="#000">Conditions: aqueous NaOH / KOH, heat  |  Primary substrates undergo SN2 preferentially</text>
  <text x="44" y="296" font-family="Georgia,serif" font-size="10" fill="#555">Strong nucleophile, low-polarity solvent and primary substrate all favour SN2 over SN1</text>

  <!-- ══ SN1 MECHANISM (bottom) ══ -->
  <rect x="30" y="310" width="940" height="270" rx="5" fill="none" stroke="#000" stroke-width="2"/>
  <text x="500" y="332" font-family="Georgia,serif" font-size="13" font-weight="bold"
        fill="#000" text-anchor="middle">SN1 — Unimolecular Nucleophilic Substitution (two steps)</text>
  <line x1="30" y1="338" x2="970" y2="338" stroke="#000" stroke-width="1.5"/>
  <text x="500" y="356" font-family="Georgia,serif" font-size="11" fill="#555"
        text-anchor="middle">Rate = k[RBr]  |  Racemisation (carbocation planar)  |  3° halogenoalkanes favoured</text>

  <!-- Step 1: ionisation -->
  <text x="60" y="392" font-family="Georgia,serif" font-size="12" font-weight="bold" fill="#000">Step 1 — Ionisation (slow, rate-determining):</text>
  <text x="60" y="416" font-family="Georgia,serif" font-size="12" fill="#000">(CH₃)₃C−Br</text>
  <line x1="210" y1="410" x2="300" y2="410" stroke="#000" stroke-width="2"/>
  <polygon points="296,405 310,410 296,415" fill="#000"/>
  <text x="255" y="400" font-family="Georgia,serif" font-size="11" fill="#000">slow</text>
  <text x="316" y="416" font-family="Georgia,serif" font-size="12" fill="#000">(CH₃)₃C⁺</text>
  <text x="430" y="416" font-family="Georgia,serif" font-size="14" fill="#000">+</text>
  <text x="454" y="416" font-family="Georgia,serif" font-size="12" fill="#000">Br⁻</text>
  <text x="316" y="434" font-family="Georgia,serif" font-size="10" fill="#555">(tertiary carbocation — stabilised)</text>

  <!-- Step 2: nucleophilic attack -->
  <text x="60" y="464" font-family="Georgia,serif" font-size="12" font-weight="bold" fill="#000">Step 2 — Nucleophilic attack (fast):</text>
  <text x="60" y="488" font-family="Georgia,serif" font-size="12" fill="#000">(CH₃)₃C⁺</text>
  <text x="175" y="488" font-family="Georgia,serif" font-size="14" fill="#000">+</text>
  <text x="198" y="488" font-family="Georgia,serif" font-size="12" fill="#000">OH⁻</text>
  <line x1="256" y1="482" x2="346" y2="482" stroke="#000" stroke-width="2"/>
  <polygon points="342,477 356,482 342,487" fill="#000"/>
  <text x="300" y="472" font-family="Georgia,serif" font-size="11" fill="#000">fast</text>
  <text x="362" y="488" font-family="Georgia,serif" font-size="12" fill="#000">(CH₃)₃COH</text>
  <text x="362" y="506" font-family="Georgia,serif" font-size="10" fill="#555">(2-methylpropan-2-ol)</text>
  <text x="362" y="522" font-family="Georgia,serif" font-size="10" fill="#555">(racemic mixture — attack from both faces)</text>

  <text x="44" y="556" font-family="Georgia,serif" font-size="11" fill="#000">Conditions: polar solvent (water/ethanol), weak or no nucleophile  |  Tertiary substrates favour SN1</text>
  <text x="44" y="572" font-family="Georgia,serif" font-size="10" fill="#555">Carbocation stability: 3° &gt; 2° &gt; 1°  |  Rearrangements may occur in SN1 via hydride/methyl shifts</text>
</svg>`;

// ─── 10f. ADDITION REACTION — Electrophilic Addition to Alkene ─────────────────
static additionReactionDiagramSvg = `<?xml version="1.0" encoding="utf-8"?>
<svg version="1.1" xmlns="http://www.w3.org/2000/svg"
     width="1000px" height="600px" viewBox="0 0 1000 600">

  <text x="500" y="28" font-family="Georgia,serif" font-size="16" font-weight="bold"
        fill="#000" text-anchor="middle">Electrophilic Addition — Alkene + HBr</text>
  <text x="500" y="46" font-family="Georgia,serif" font-size="11" fill="#333"
        text-anchor="middle">Addition across C=C double bond: ethene + HBr → bromoethane  |  Two-step mechanism</text>

  <!-- ══ OVERALL EQUATION ══ -->
  <rect x="30" y="62" width="940" height="46" rx="5" fill="none" stroke="#000" stroke-width="2"/>
  <text x="500" y="82" font-family="Georgia,serif" font-size="13" font-weight="bold"
        fill="#000" text-anchor="middle">CH₂=CH₂  +  HBr  →  CH₃CH₂Br</text>
  <text x="500" y="100" font-family="Georgia,serif" font-size="11" fill="#555"
        text-anchor="middle">Ethene + hydrogen bromide → bromoethane  (room temperature, no catalyst needed)</text>

  <!-- ══ STEP 1: π electrons attack electrophile H⁺ ══ -->
  <rect x="30" y="124" width="940" height="190" rx="5" fill="none" stroke="#000" stroke-width="2"/>
  <text x="500" y="146" font-family="Georgia,serif" font-size="13" font-weight="bold"
        fill="#000" text-anchor="middle">Step 1 — Electrophilic Attack: π electrons attack H (rate-determining)</text>
  <line x1="30" y1="152" x2="970" y2="152" stroke="#000" stroke-width="1.5"/>

  <!-- Alkene C=C -->
  <circle cx="220" cy="230" r="22" fill="#fff" stroke="#000" stroke-width="2.5"/>
  <text x="220" y="235" font-family="Georgia,serif" font-size="13" font-weight="bold" fill="#000" text-anchor="middle">C</text>
  <line x1="242" y1="224" x2="298" y2="224" stroke="#000" stroke-width="3"/>
  <line x1="242" y1="236" x2="298" y2="236" stroke="#000" stroke-width="3"/>
  <circle cx="320" cy="230" r="22" fill="#fff" stroke="#000" stroke-width="2.5"/>
  <text x="320" y="235" font-family="Georgia,serif" font-size="13" font-weight="bold" fill="#000" text-anchor="middle">C</text>
  <!-- H atoms on alkene -->
  <line x1="220" y1="208" x2="200" y2="180" stroke="#000" stroke-width="1.5"/>
  <text x="196" y="174" font-family="Georgia,serif" font-size="11" fill="#000">H</text>
  <line x1="220" y1="252" x2="200" y2="278" stroke="#000" stroke-width="1.5"/>
  <text x="196" y="292" font-family="Georgia,serif" font-size="11" fill="#000">H</text>
  <line x1="320" y1="208" x2="340" y2="180" stroke="#000" stroke-width="1.5"/>
  <text x="344" y="174" font-family="Georgia,serif" font-size="11" fill="#000">H</text>
  <line x1="320" y1="252" x2="340" y2="278" stroke="#000" stroke-width="1.5"/>
  <text x="344" y="292" font-family="Georgia,serif" font-size="11" fill="#000">H</text>

  <!-- HBr approaching -->
  <text x="134" y="234" font-family="Georgia,serif" font-size="13" fill="#000">H−Br</text>
  <!-- Curly arrow: π electrons → H -->
  <path d="M220,208 Q185,178 155,222" fill="none" stroke="#000" stroke-width="2"
        marker-end="url(#arr2)"/>
  <defs>
    <marker id="arr2" markerWidth="10" markerHeight="7" refX="10" refY="3.5" orient="auto">
      <polygon points="0 0, 10 3.5, 0 7" fill="#000"/>
    </marker>
  </defs>
  <!-- Arrow from H-Br bond electrons → Br⁻ -->
  <path d="M148,228 Q118,256 118,280" fill="none" stroke="#000" stroke-width="2"
        marker-end="url(#arr2)"/>

  <!-- Arrow to intermediate -->
  <line x1="420" y1="230" x2="500" y2="230" stroke="#000" stroke-width="2.5"/>
  <polygon points="496,225 510,230 496,235" fill="#000"/>

  <!-- Carbocation intermediate -->
  <circle cx="560" cy="230" r="22" fill="#fff" stroke="#000" stroke-width="2.5"/>
  <text x="560" y="235" font-family="Georgia,serif" font-size="13" font-weight="bold" fill="#000" text-anchor="middle">C</text>
  <line x1="582" y1="224" x2="630" y2="224" stroke="#000" stroke-width="2.5"/>
  <circle cx="652" cy="230" r="22" fill="#fff" stroke="#000" stroke-width="2.5"/>
  <text x="652" y="235" font-family="Georgia,serif" font-size="13" font-weight="bold" fill="#000" text-anchor="middle">C⁺</text>
  <!-- H atoms on carbocation -->
  <line x1="560" y1="208" x2="530" y2="180" stroke="#000" stroke-width="1.5"/>
  <text x="520" y="174" font-family="Georgia,serif" font-size="11" fill="#000">H</text>
  <line x1="560" y1="252" x2="530" y2="278" stroke="#000" stroke-width="1.5"/>
  <text x="520" y="292" font-family="Georgia,serif" font-size="11" fill="#000">H</text>
  <line x1="560" y1="252" x2="580" y2="278" stroke="#000" stroke-width="1.5"/>
  <text x="580" y="292" font-family="Georgia,serif" font-size="11" fill="#000">H</text>
  <line x1="652" y1="208" x2="680" y2="180" stroke="#000" stroke-width="1.5"/>
  <text x="684" y="174" font-family="Georgia,serif" font-size="11" fill="#000">H</text>
  <line x1="652" y1="252" x2="680" y2="278" stroke="#000" stroke-width="1.5"/>
  <text x="684" y="292" font-family="Georgia,serif" font-size="11" fill="#000">H</text>

  <!-- Br⁻ label -->
  <text x="740" y="234" font-family="Georgia,serif" font-size="13" fill="#000">+  Br⁻</text>

  <text x="500" y="298" font-family="Georgia,serif" font-size="10" fill="#555" text-anchor="middle">Carbocation intermediate (carbenium ion)</text>

  <!-- ══ STEP 2: Br⁻ attacks carbocation ══ -->
  <rect x="30" y="330" width="940" height="140" rx="5" fill="none" stroke="#000" stroke-width="2"/>
  <text x="500" y="352" font-family="Georgia,serif" font-size="13" font-weight="bold"
        fill="#000" text-anchor="middle">Step 2 — Nucleophilic Attack: Br⁻ attacks carbocation (fast)</text>
  <line x1="30" y1="358" x2="970" y2="358" stroke="#000" stroke-width="1.5"/>

  <text x="200" y="408" font-family="Georgia,serif" font-size="13" fill="#000">CH₃−CH⁺</text>
  <text x="330" y="408" font-family="Georgia,serif" font-size="14" fill="#000">+</text>
  <text x="360" y="408" font-family="Georgia,serif" font-size="13" fill="#000">Br⁻</text>
  <!-- Arrow from Br lone pair to C⁺ -->
  <path d="M386,398 Q430,372 456,398" fill="none" stroke="#000" stroke-width="2"
        marker-end="url(#arr2)"/>
  <line x1="490" y1="406" x2="570" y2="406" stroke="#000" stroke-width="2.5"/>
  <polygon points="566,401 580,406 566,411" fill="#000"/>
  <text x="530" y="396" font-family="Georgia,serif" font-size="11" fill="#000">fast</text>
  <text x="590" y="408" font-family="Georgia,serif" font-size="13" font-weight="bold" fill="#000">CH₃CH₂Br</text>
  <text x="590" y="430" font-family="Georgia,serif" font-size="11" fill="#555">bromoethane (product)</text>
  <text x="200" y="456" font-family="Georgia,serif" font-size="11" fill="#555">Lone pair on Br⁻ donates to empty orbital on C⁺ — new C−Br covalent bond formed</text>

  <!-- ══ MARKOVNIKOV'S RULE ══ -->
  <rect x="30" y="486" width="940" height="100" rx="5" fill="none" stroke="#000" stroke-width="2" stroke-dasharray="5,3"/>
  <text x="500" y="508" font-family="Georgia,serif" font-size="12" font-weight="bold"
        fill="#000" text-anchor="middle">Markovnikov's Rule (for asymmetric alkenes + HX)</text>
  <line x1="30" y1="514" x2="970" y2="514" stroke="#000" stroke-width="1" stroke-dasharray="4,3"/>
  <text x="50" y="534" font-family="Georgia,serif" font-size="11" fill="#000">"H adds to the C with more H atoms already attached; X adds to the C with fewer H atoms"</text>
  <text x="50" y="554" font-family="Georgia,serif" font-size="11" fill="#000">Reason: more substituted carbocation is more stable — step 1 is rate-determining</text>
  <text x="50" y="574" font-family="Georgia,serif" font-size="11" fill="#000">Example: propene + HBr → 2-bromopropane (major) not 1-bromopropane (minor)</text>
</svg>`;

// ─── 10g. SUBSTITUTION REACTION — Nucleophilic Substitution ───────────────────
static substitutionReactionDiagramSvg = `<?xml version="1.0" encoding="utf-8"?>
<svg version="1.1" xmlns="http://www.w3.org/2000/svg"
     width="1000px" height="600px" viewBox="0 0 1000 600">

  <text x="500" y="28" font-family="Georgia,serif" font-size="16" font-weight="bold"
        fill="#000" text-anchor="middle">Nucleophilic Substitution — Haloalkane + OH⁻</text>
  <text x="500" y="46" font-family="Georgia,serif" font-size="11" fill="#333"
        text-anchor="middle">Halogen replaced by hydroxide nucleophile: R−Br + OH⁻ → R−OH + Br⁻</text>

  <!-- ══ REACTANTS / CONDITIONS / PRODUCTS TABLE ══ -->
  <rect x="30" y="62" width="940" height="110" rx="5" fill="none" stroke="#000" stroke-width="2"/>
  <text x="500" y="84" font-family="Georgia,serif" font-size="13" font-weight="bold"
        fill="#000" text-anchor="middle">Summary: Common Nucleophilic Substitution Reactions of Haloalkanes</text>
  <line x1="30" y1="90" x2="970" y2="90" stroke="#000" stroke-width="1.5"/>
  <!-- Header -->
  <text x="120" y="108" font-family="Georgia,serif" font-size="11" font-weight="bold" fill="#000" text-anchor="middle">Nucleophile</text>
  <text x="330" y="108" font-family="Georgia,serif" font-size="11" font-weight="bold" fill="#000" text-anchor="middle">Conditions</text>
  <text x="580" y="108" font-family="Georgia,serif" font-size="11" font-weight="bold" fill="#000" text-anchor="middle">Product</text>
  <text x="850" y="108" font-family="Georgia,serif" font-size="11" font-weight="bold" fill="#000" text-anchor="middle">Type</text>
  <line x1="220" y1="90" x2="220" y2="172" stroke="#888" stroke-width="1"/>
  <line x1="450" y1="90" x2="450" y2="172" stroke="#888" stroke-width="1"/>
  <line x1="750" y1="90" x2="750" y2="172" stroke="#888" stroke-width="1"/>
  <line x1="30" y1="116" x2="970" y2="116" stroke="#888" stroke-width="0.8"/>
  <text x="120" y="132" font-family="Georgia,serif" font-size="11" fill="#000" text-anchor="middle">OH⁻ (aq)</text>
  <text x="330" y="132" font-family="Georgia,serif" font-size="11" fill="#000" text-anchor="middle">aq NaOH, heat</text>
  <text x="580" y="132" font-family="Georgia,serif" font-size="11" fill="#000" text-anchor="middle">Alcohol (R−OH)</text>
  <text x="850" y="132" font-family="Georgia,serif" font-size="11" fill="#000" text-anchor="middle">SN2 or SN1</text>
  <line x1="30" y1="138" x2="970" y2="138" stroke="#888" stroke-width="0.8"/>
  <text x="120" y="154" font-family="Georgia,serif" font-size="11" fill="#000" text-anchor="middle">CN⁻</text>
  <text x="330" y="154" font-family="Georgia,serif" font-size="11" fill="#000" text-anchor="middle">KCN in ethanol/water</text>
  <text x="580" y="154" font-family="Georgia,serif" font-size="11" fill="#000" text-anchor="middle">Nitrile (R−CN) + chain +1C</text>
  <text x="850" y="154" font-family="Georgia,serif" font-size="11" fill="#000" text-anchor="middle">SN2</text>
  <line x1="30" y1="160" x2="970" y2="160" stroke="#888" stroke-width="0.8"/>
  <text x="120" y="172" font-family="Georgia,serif" font-size="11" fill="#000" text-anchor="middle">NH₃ (excess)</text>
  <text x="330" y="172" font-family="Georgia,serif" font-size="11" fill="#000" text-anchor="middle">Conc. NH₃, sealed tube</text>
  <text x="580" y="172" font-family="Georgia,serif" font-size="11" fill="#000" text-anchor="middle">Amine (R−NH₂)</text>
  <text x="850" y="172" font-family="Georgia,serif" font-size="11" fill="#000" text-anchor="middle">SN2</text>

  <!-- ══ MECHANISM DIAGRAM ══ -->
  <rect x="30" y="190" width="940" height="280" rx="5" fill="none" stroke="#000" stroke-width="2"/>
  <text x="500" y="212" font-family="Georgia,serif" font-size="13" font-weight="bold"
        fill="#000" text-anchor="middle">Mechanism: bromoethane + NaOH(aq) → ethanol + NaBr</text>
  <line x1="30" y1="218" x2="970" y2="218" stroke="#000" stroke-width="1.5"/>

  <!-- Nucleophile OH⁻ -->
  <text x="80" y="320" font-family="Georgia,serif" font-size="14" fill="#000">HO:</text>
  <text x="84" y="304" font-family="Georgia,serif" font-size="10" fill="#555">nucleophile</text>
  <text x="84" y="340" font-family="Georgia,serif" font-size="10" fill="#555">(lone pair donor)</text>

  <!-- Curly arrow from O lone pair to C -->
  <path d="M115,314 Q180,278 218,310" fill="none" stroke="#000" stroke-width="2.5"
        marker-end="url(#arr3)"/>
  <defs>
    <marker id="arr3" markerWidth="10" markerHeight="7" refX="10" refY="3.5" orient="auto">
      <polygon points="0 0, 10 3.5, 0 7" fill="#000"/>
    </marker>
  </defs>

  <!-- Carbon centre -->
  <circle cx="250" cy="320" r="24" fill="#fff" stroke="#000" stroke-width="2.5"/>
  <text x="250" y="325" font-family="Georgia,serif" font-size="13" font-weight="bold" fill="#000" text-anchor="middle">C</text>
  <!-- H atoms -->
  <line x1="250" y1="296" x2="250" y2="268" stroke="#000" stroke-width="2"/>
  <text x="250" y="262" font-family="Georgia,serif" font-size="11" fill="#000" text-anchor="middle">H</text>
  <line x1="232" y1="308" x2="200" y2="286" stroke="#000" stroke-width="2"/>
  <text x="190" y="280" font-family="Georgia,serif" font-size="11" fill="#000">H</text>
  <line x1="232" y1="332" x2="200" y2="350" stroke="#000" stroke-width="2"/>
  <text x="184" y="364" font-family="Georgia,serif" font-size="11" fill="#000">CH₃</text>
  <!-- Br leaving -->
  <line x1="274" y1="320" x2="340" y2="320" stroke="#000" stroke-width="2"/>
  <text x="354" y="324" font-family="Georgia,serif" font-size="13" fill="#000">Br</text>

  <!-- Curly arrow from C-Br bond to Br⁻ -->
  <path d="M340,312 Q390,280 420,308" fill="none" stroke="#000" stroke-width="2.5"
        marker-end="url(#arr3)"/>

  <!-- Transition state notation -->
  <text x="250" y="380" font-family="Georgia,serif" font-size="11" fill="#555"
        text-anchor="middle">[HO···C···Br]‡</text>
  <text x="250" y="396" font-family="Georgia,serif" font-size="10" fill="#555"
        text-anchor="middle">transition state (pentacoordinate)</text>

  <!-- Arrow to products -->
  <line x1="460" y1="320" x2="560" y2="320" stroke="#000" stroke-width="2.5"/>
  <polygon points="556,315 570,320 556,325" fill="#000"/>

  <!-- Products -->
  <text x="590" y="306" font-family="Georgia,serif" font-size="14" font-weight="bold" fill="#000">CH₃CH₂OH</text>
  <text x="720" y="306" font-family="Georgia,serif" font-size="14" fill="#000">+  Br⁻</text>
  <text x="590" y="330" font-family="Georgia,serif" font-size="11" fill="#555">ethanol (product)</text>
  <text x="590" y="350" font-family="Georgia,serif" font-size="11" fill="#555">Br⁻ is the leaving group</text>

  <!-- key points -->
  <text x="44" y="428" font-family="Georgia,serif" font-size="11" fill="#000">• Leaving group ability: I⁻ &gt; Br⁻ &gt; Cl⁻ &gt; F⁻  (bond strength F &gt; Cl &gt; Br &gt; I, so I− leaves easiest)</text>
  <text x="44" y="448" font-family="Georgia,serif" font-size="11" fill="#000">• Nucleophile strength: CN⁻ ≈ I⁻ &gt; OH⁻ &gt; Br⁻ &gt; H₂O</text>
  <text x="44" y="468" font-family="Georgia,serif" font-size="10" fill="#555">• SN2: concerted, bimolecular, inversion; SN1: stepwise, unimolecular, racemisation</text>

  <!-- ══ REACTIVITY TREND ══ -->
  <rect x="30" y="488" width="940" height="100" rx="5" fill="none" stroke="#000" stroke-width="2" stroke-dasharray="5,3"/>
  <text x="500" y="508" font-family="Georgia,serif" font-size="12" font-weight="bold"
        fill="#000" text-anchor="middle">Reactivity of Haloalkanes Towards Nucleophilic Substitution</text>
  <line x1="30" y1="514" x2="970" y2="514" stroke="#000" stroke-width="1" stroke-dasharray="4,3"/>
  <text x="500" y="534" font-family="Georgia,serif" font-size="11" fill="#000"
        text-anchor="middle">iodoalkane  &gt;  bromoalkane  &gt;  chloroalkane  &gt;  fluoroalkane</text>
  <text x="500" y="554" font-family="Georgia,serif" font-size="11" fill="#000"
        text-anchor="middle">Test: add AgNO₃(aq) in ethanol → precipitate colour: AgCl white | AgBr cream | AgI yellow</text>
  <text x="500" y="574" font-family="Georgia,serif" font-size="11" fill="#000"
        text-anchor="middle">Rate of precipitation: RI fastest (C−I weakest bond); RF does not react (C−F very strong)</text>
</svg>`;

// ─── 10h. ELIMINATION REACTION ────────────────────────────────────────────────
static eliminationReactionDiagramSvg = `<?xml version="1.0" encoding="utf-8"?>
<svg version="1.1" xmlns="http://www.w3.org/2000/svg"
     width="1000px" height="600px" viewBox="0 0 1000 600">

  <text x="500" y="28" font-family="Georgia,serif" font-size="16" font-weight="bold"
        fill="#000" text-anchor="middle">Elimination Reaction — Forming a C=C Double Bond</text>
  <text x="500" y="46" font-family="Georgia,serif" font-size="11" fill="#333"
        text-anchor="middle">Bromoethane + KOH/ethanol → ethene + KBr + H₂O</text>

  <!-- Overall equation -->
  <rect x="30" y="62" width="940" height="46" rx="5" fill="none" stroke="#000" stroke-width="2"/>
  <text x="500" y="82" font-family="Georgia,serif" font-size="13" font-weight="bold"
        fill="#000" text-anchor="middle">CH₃CH₂Br  +  KOH (ethanol)  →  CH₂=CH₂  +  KBr  +  H₂O</text>
  <text x="500" y="100" font-family="Georgia,serif" font-size="11" fill="#555"
        text-anchor="middle">Conditions: concentrated KOH dissolved in ethanol, heat  (contrast: aq KOH + heat → substitution)</text>

  <!-- Mechanism diagram -->
  <rect x="30" y="124" width="940" height="260" rx="5" fill="none" stroke="#000" stroke-width="2"/>
  <text x="500" y="146" font-family="Georgia,serif" font-size="13" font-weight="bold"
        fill="#000" text-anchor="middle">E2 Mechanism — Concerted (bimolecular elimination)</text>
  <line x1="30" y1="152" x2="970" y2="152" stroke="#000" stroke-width="1.5"/>

  <!-- Base (OH⁻ or EtO⁻ from KOH/ethanol) -->
  <text x="60" y="270" font-family="Georgia,serif" font-size="14" fill="#000">B:</text>
  <text x="54" y="252" font-family="Georgia,serif" font-size="10" fill="#555">base</text>
  <text x="50" y="290" font-family="Georgia,serif" font-size="10" fill="#555">(EtO⁻ or OH⁻)</text>

  <!-- Arrow from base to H on β-carbon -->
  <path d="M88,262 Q150,220 190,250" fill="none" stroke="#000" stroke-width="2.5"
        marker-end="url(#arr4)"/>
  <defs>
    <marker id="arr4" markerWidth="10" markerHeight="7" refX="10" refY="3.5" orient="auto">
      <polygon points="0 0, 10 3.5, 0 7" fill="#000"/>
    </marker>
  </defs>

  <!-- β-carbon (CH₃ end) -->
  <circle cx="230" cy="268" r="22" fill="#fff" stroke="#000" stroke-width="2.5"/>
  <text x="230" y="273" font-family="Georgia,serif" font-size="12" font-weight="bold" fill="#000" text-anchor="middle">C</text>
  <text x="190" y="246" font-family="Georgia,serif" font-size="10" fill="#555">β-carbon</text>
  <!-- H on β-C (anti to Br) -->
  <line x1="230" y1="246" x2="220" y2="210" stroke="#000" stroke-width="2"/>
  <text x="210" y="202" font-family="Georgia,serif" font-size="13" fill="#000">H</text>
  <!-- Other H atoms on β-C -->
  <line x1="210" y1="272" x2="178" y2="272" stroke="#000" stroke-width="1.5"/>
  <text x="166" y="276" font-family="Georgia,serif" font-size="11" fill="#000">H</text>
  <line x1="230" y1="290" x2="218" y2="316" stroke="#000" stroke-width="1.5"/>
  <text x="210" y="330" font-family="Georgia,serif" font-size="11" fill="#000">H</text>

  <!-- Arrow from C-H bond electrons to form π bond -->
  <path d="M224,248 Q268,202 302,240" fill="none" stroke="#000" stroke-width="2.5"
        marker-end="url(#arr4)"/>

  <!-- Bond between β and α-carbons (C-C single, becoming C=C) -->
  <line x1="252" y1="268" x2="330" y2="268" stroke="#000" stroke-width="2.5"/>

  <!-- α-carbon (CHBr end) -->
  <circle cx="352" cy="268" r="22" fill="#fff" stroke="#000" stroke-width="2.5"/>
  <text x="352" y="273" font-family="Georgia,serif" font-size="12" font-weight="bold" fill="#000" text-anchor="middle">C</text>
  <text x="360" y="246" font-family="Georgia,serif" font-size="10" fill="#555">α-carbon</text>
  <!-- Br on α-C -->
  <line x1="374" y1="268" x2="430" y2="268" stroke="#000" stroke-width="2"/>
  <text x="444" y="272" font-family="Georgia,serif" font-size="13" fill="#000">Br</text>
  <!-- H on α-C -->
  <line x1="352" y1="290" x2="352" y2="318" stroke="#000" stroke-width="1.5"/>
  <text x="352" y="332" font-family="Georgia,serif" font-size="11" fill="#000" text-anchor="middle">H</text>

  <!-- Arrow from C-Br bond electrons to Br⁻ -->
  <path d="M430,258 Q480,226 510,254" fill="none" stroke="#000" stroke-width="2.5"
        marker-end="url(#arr4)"/>
  <text x="530" y="268" font-family="Georgia,serif" font-size="13" fill="#000">Br⁻</text>

  <!-- Arrow to product -->
  <line x1="580" y1="268" x2="680" y2="268" stroke="#000" stroke-width="2.5"/>
  <polygon points="676,263 690,268 676,273" fill="#000"/>

  <!-- Product: ethene -->
  <circle cx="730" cy="268" r="22" fill="#fff" stroke="#000" stroke-width="2.5"/>
  <text x="730" y="273" font-family="Georgia,serif" font-size="12" font-weight="bold" fill="#000" text-anchor="middle">C</text>
  <line x1="752" y1="260" x2="798" y2="260" stroke="#000" stroke-width="3"/>
  <line x1="752" y1="276" x2="798" y2="276" stroke="#000" stroke-width="3"/>
  <circle cx="820" cy="268" r="22" fill="#fff" stroke="#000" stroke-width="2.5"/>
  <text x="820" y="273" font-family="Georgia,serif" font-size="12" font-weight="bold" fill="#000" text-anchor="middle">C</text>
  <!-- H atoms on product ethene -->
  <line x1="730" y1="246" x2="710" y2="218" stroke="#000" stroke-width="1.5"/>
  <text x="700" y="212" font-family="Georgia,serif" font-size="11" fill="#000">H</text>
  <line x1="730" y1="290" x2="710" y2="316" stroke="#000" stroke-width="1.5"/>
  <text x="700" y="330" font-family="Georgia,serif" font-size="11" fill="#000">H</text>
  <line x1="820" y1="246" x2="840" y2="218" stroke="#000" stroke-width="1.5"/>
  <text x="844" y="212" font-family="Georgia,serif" font-size="11" fill="#000">H</text>
  <line x1="820" y1="290" x2="840" y2="316" stroke="#000" stroke-width="1.5"/>
  <text x="844" y="330" font-family="Georgia,serif" font-size="11" fill="#000">H</text>
  <text x="775" y="356" font-family="Georgia,serif" font-size="11" fill="#555"
        text-anchor="middle">ethene (product)</text>

  <!-- Saytzeff and competition -->
  <rect x="30" y="400" width="940" height="90" rx="5" fill="none" stroke="#000" stroke-width="2"/>
  <text x="500" y="422" font-family="Georgia,serif" font-size="12" font-weight="bold"
        fill="#000" text-anchor="middle">Saytzeff's Rule and Competition with Substitution</text>
  <line x1="30" y1="428" x2="970" y2="428" stroke="#000" stroke-width="1.5"/>
  <text x="50" y="448" font-family="Georgia,serif" font-size="11" fill="#000">Saytzeff: elimination gives the more substituted (more stable) alkene as the major product</text>
  <text x="50" y="468" font-family="Georgia,serif" font-size="11" fill="#000">Competition: aq KOH → substitution (SN2);  ethanolic KOH + heat → elimination (E2)</text>
  <text x="50" y="486" font-family="Georgia,serif" font-size="11" fill="#000">High temperature and bulky base both favour elimination over substitution</text>

  <!-- Summary box -->
  <rect x="30" y="504" width="940" height="84" rx="5" fill="none" stroke="#000" stroke-width="2" stroke-dasharray="5,3"/>
  <text x="500" y="526" font-family="Georgia,serif" font-size="12" font-weight="bold"
        fill="#000" text-anchor="middle">Summary: Choosing Conditions for RBr reactions</text>
  <line x1="30" y1="532" x2="970" y2="532" stroke="#000" stroke-width="1" stroke-dasharray="4,3"/>
  <text x="50" y="552" font-family="Georgia,serif" font-size="11" fill="#000">SN2 (substitution): dilute aq NaOH, room temp, polar protic solvent, primary substrate</text>
  <text x="50" y="572" font-family="Georgia,serif" font-size="11" fill="#000">E2 (elimination): conc. KOH in ethanol, heat, bulky base, secondary/tertiary substrate → alkene</text>
  <text x="50" y="584" font-family="Georgia,serif" font-size="10" fill="#555">Tertiary substrates in polar solvents with weak nucleophiles favour SN1; strong base + heat favour E1/E2</text>
</svg>`;

// ─── 10i. POLYMERISATION ──────────────────────────────────────────────────────



/**
===============================
*/



// ─── 5. CHEMICAL EQUILIBRIUM DIAGRAM ─────────────────────────────────────────
static equilibriumDiagramSvg = `<?xml version="1.0" encoding="utf-8"?>
<svg version="1.1" xmlns="http://www.w3.org/2000/svg"
     width="900px" height="600px" viewBox="0 0 900 600">

  <text x="450" y="30" font-family="Georgia,serif" font-size="16" font-weight="bold"
        fill="#000" text-anchor="middle">Chemical Equilibrium</text>
  <text x="450" y="50" font-family="Georgia,serif" font-size="11" fill="#333" text-anchor="middle">
        N₂ + 3H₂ ⇌ 2NH₃ — Forward and reverse reaction rates over time</text>

  <!-- Axes -->
  <line x1="80" y1="480" x2="820" y2="480" stroke="#000" stroke-width="2"/>
  <line x1="80" y1="480" x2="80" y2="80" stroke="#000" stroke-width="2"/>
  <!-- Axis labels -->
  <text x="450" y="515" font-family="Georgia,serif" font-size="13" fill="#000" text-anchor="middle">Time</text>
  <text x="30" y="280" font-family="Georgia,serif" font-size="13" fill="#000" text-anchor="middle"
        transform="rotate(-90 30 280)">Rate of Reaction</text>

  <!-- Equilibrium point vertical dashed line at x=520 -->
  <line x1="520" y1="90" x2="520" y2="480" stroke="#000" stroke-width="1.5" stroke-dasharray="8,4"/>
  <text x="524" y="86" font-family="Georgia,serif" font-size="11" fill="#000">Equilibrium reached</text>

  <!-- Forward rate curve: starts high (~380), decays to equilibrium rate (~180) -->
  <path d="M80,110 C160,112 240,140 320,195 C380,238 440,265 520,280 L820,280"
        fill="none" stroke="#000" stroke-width="3"/>
  <!-- Forward rate label -->
  <text x="130" y="105" font-family="Georgia,serif" font-size="12" font-weight="bold" fill="#000">Forward rate</text>
  <text x="130" y="119" font-family="Georgia,serif" font-size="10" fill="#333">(N₂ + 3H₂ → 2NH₃)</text>

  <!-- Reverse rate curve: starts low (~450), rises to same equilibrium rate (~280) -->
  <path d="M80,450 C160,445 240,400 320,350 C400,308 460,290 520,280 L820,280"
        fill="none" stroke="#000" stroke-width="3" stroke-dasharray="10,4"/>
  <!-- Reverse rate label -->
  <text x="100" y="462" font-family="Georgia,serif" font-size="12" font-weight="bold" fill="#000">Reverse rate</text>
  <text x="100" y="476" font-family="Georgia,serif" font-size="10" fill="#333">(2NH₃ → N₂ + 3H₂)</text>

  <!-- Equilibrium rate horizontal label -->
  <line x1="520" y1="280" x2="820" y2="280" stroke="#000" stroke-width="1" stroke-dasharray="4,3"/>
  <text x="830" y="284" font-family="Georgia,serif" font-size="10" fill="#000">Equal rates</text>

  <!-- Equilibrium point dot -->
  <circle cx="520" cy="280" r="6" fill="#000" stroke="#000" stroke-width="1"/>
  <text x="526" y="276" font-family="Georgia,serif" font-size="10" fill="#000">Equilibrium point</text>

  <!-- Arrow for forward curve direction -->
  <polygon points="318,192 332,188 326,204" fill="#000"/>
  <!-- Arrow for reverse curve direction -->
  <polygon points="318,353 332,357 326,341" fill="#000"/>

  <!-- Concentration panel: right side -->
  <rect x="560" y="310" width="240" height="120" rx="4" fill="none" stroke="#000" stroke-width="1.5"/>
  <text x="680" y="328" font-family="Georgia,serif" font-size="11" font-weight="bold" fill="#000" text-anchor="middle">At Equilibrium</text>
  <text x="570" y="346" font-family="Georgia,serif" font-size="10" fill="#000">Rate(forward) = Rate(reverse)</text>
  <text x="570" y="362" font-family="Georgia,serif" font-size="10" fill="#000">Concentrations: constant (not equal)</text>
  <text x="570" y="378" font-family="Georgia,serif" font-size="10" fill="#000">Dynamic: both reactions still occur</text>
  <text x="570" y="394" font-family="Georgia,serif" font-size="10" fill="#000">Closed system required</text>
  <text x="570" y="410" font-family="Georgia,serif" font-size="10" fill="#000">Macroscopic properties unchanged</text>

  <!-- Summary box -->
  <rect x="80" y="530" width="740" height="55" rx="5" fill="none" stroke="#000" stroke-width="1.8" stroke-dasharray="5,3"/>
  <text x="450" y="549" font-family="Georgia,serif" font-size="11" font-weight="bold" fill="#000" text-anchor="middle">
        Key Principle: At equilibrium, forward rate = reverse rate</text>
  <text x="450" y="565" font-family="Georgia,serif" font-size="10" fill="#333" text-anchor="middle">
        Kc = [NH₃]² / ([N₂][H₂]³)   — expression constant at fixed temperature</text>
  <text x="450" y="579" font-family="Georgia,serif" font-size="10" fill="#333" text-anchor="middle">
        Solid line = forward rate  |  Dashed line = reverse rate</text>
</svg>`;

// ─── 6. EQUILIBRIUM CONSTANT EXPRESSION DIAGRAM ──────────────────────────────
static equilibriumConstantDiagramSvg = `<?xml version="1.0" encoding="utf-8"?>
<svg version="1.1" xmlns="http://www.w3.org/2000/svg"
     width="900px" height="600px" viewBox="0 0 900 600">

  <text x="450" y="30" font-family="Georgia,serif" font-size="16" font-weight="bold"
        fill="#000" text-anchor="middle">Equilibrium Constant Expression</text>
  <text x="450" y="50" font-family="Georgia,serif" font-size="11" fill="#333" text-anchor="middle">
        Kc and Kp for the general reaction: aA + bB ⇌ cC + dD</text>

  <!-- General reaction box -->
  <rect x="60" y="65" width="780" height="55" rx="5" fill="none" stroke="#000" stroke-width="2"/>
  <text x="450" y="88" font-family="Georgia,serif" font-size="14" font-weight="bold" fill="#000" text-anchor="middle">
        aA  +  bB  ⇌  cC  +  dD</text>
  <text x="450" y="108" font-family="Georgia,serif" font-size="10" fill="#333" text-anchor="middle">
        a, b, c, d = stoichiometric coefficients   |   A, B = reactants   |   C, D = products</text>

  <!-- Kc box -->
  <rect x="60" y="140" width="370" height="180" rx="5" fill="none" stroke="#000" stroke-width="2"/>
  <text x="245" y="162" font-family="Georgia,serif" font-size="13" font-weight="bold" fill="#000" text-anchor="middle">
        Kc  (concentration equilibrium constant)</text>
  <!-- Fraction drawn with lines -->
  <text x="245" y="200" font-family="Georgia,serif" font-size="22" font-weight="bold" fill="#000" text-anchor="middle">
        [C]ᶜ[D]ᵈ</text>
  <line x1="130" y1="210" x2="360" y2="210" stroke="#000" stroke-width="2"/>
  <text x="245" y="232" font-family="Georgia,serif" font-size="22" font-weight="bold" fill="#000" text-anchor="middle">
        [A]ᵃ[B]ᵇ</text>
  <text x="100" y="200" font-family="Georgia,serif" font-size="18" font-weight="bold" fill="#000">Kc =</text>
  <text x="100" y="232" font-family="Georgia,serif" font-size="10" fill="#333">(mol dm⁻³)^(c+d−a−b)</text>
  <text x="150" y="260" font-family="Georgia,serif" font-size="10" fill="#333">[ ] = molar concentration at equilibrium</text>
  <text x="150" y="276" font-family="Georgia,serif" font-size="10" fill="#333">Products over reactants — each raised to power</text>
  <text x="150" y="292" font-family="Georgia,serif" font-size="10" fill="#333">of its stoichiometric coefficient</text>
  <text x="150" y="308" font-family="Georgia,serif" font-size="10" fill="#333">Pure solids and liquids omitted from expression</text>

  <!-- Kp box -->
  <rect x="470" y="140" width="370" height="180" rx="5" fill="none" stroke="#000" stroke-width="2"/>
  <text x="655" y="162" font-family="Georgia,serif" font-size="13" font-weight="bold" fill="#000" text-anchor="middle">
        Kp  (partial pressure equilibrium constant)</text>
  <text x="655" y="200" font-family="Georgia,serif" font-size="22" font-weight="bold" fill="#000" text-anchor="middle">
        pCᶜ · pDᵈ</text>
  <line x1="540" y1="210" x2="770" y2="210" stroke="#000" stroke-width="2"/>
  <text x="655" y="232" font-family="Georgia,serif" font-size="22" font-weight="bold" fill="#000" text-anchor="middle">
        pAᵃ · pBᵇ</text>
  <text x="510" y="200" font-family="Georgia,serif" font-size="18" font-weight="bold" fill="#000">Kp =</text>
  <text x="510" y="232" font-family="Georgia,serif" font-size="10" fill="#333">(Pa or atm)^Δn</text>
  <text x="560" y="260" font-family="Georgia,serif" font-size="10" fill="#333">p = partial pressure of each gas at equilibrium</text>
  <text x="560" y="276" font-family="Georgia,serif" font-size="10" fill="#333">Only used for gaseous equilibria</text>
  <text x="560" y="292" font-family="Georgia,serif" font-size="10" fill="#333">Δn = moles gas products − moles gas reactants</text>

  <!-- Relationship line -->
  <line x1="430" y1="230" x2="470" y2="230" stroke="#000" stroke-width="1.5" stroke-dasharray="4,3"/>
  <text x="450" y="222" font-family="Georgia,serif" font-size="10" fill="#000" text-anchor="middle">linked</text>

  <!-- Kp = Kc(RT)^Δn box -->
  <rect x="280" y="340" width="340" height="50" rx="4" fill="none" stroke="#000" stroke-width="2"/>
  <text x="450" y="360" font-family="Georgia,serif" font-size="13" font-weight="bold" fill="#000" text-anchor="middle">
        Kp = Kc (RT)^Δn</text>
  <text x="450" y="380" font-family="Georgia,serif" font-size="10" fill="#333" text-anchor="middle">
        R = 8.314 J mol⁻¹ K⁻¹  |  T in Kelvin  |  Δn = change in moles of gas</text>

  <!-- Worked example -->
  <rect x="60" y="408" width="780" height="130" rx="5" fill="none" stroke="#000" stroke-width="1.8" stroke-dasharray="5,3"/>
  <text x="450" y="426" font-family="Georgia,serif" font-size="12" font-weight="bold" fill="#000" text-anchor="middle">
        Worked Example: N₂(g) + 3H₂(g) ⇌ 2NH₃(g)</text>
  <text x="80" y="448" font-family="Georgia,serif" font-size="11" fill="#000">
        Kc = [NH₃]² / ([N₂][H₂]³)     units: (mol dm⁻³)^(2−1−3) = (mol dm⁻³)^−2 = mol⁻² dm⁶</text>
  <text x="80" y="468" font-family="Georgia,serif" font-size="11" fill="#000">
        Kp = pNH₃² / (pN₂ · pH₂³)     Δn = 2 − (1+3) = −2     ∴ Kp = Kc(RT)⁻²</text>
  <text x="80" y="490" font-family="Georgia,serif" font-size="10" fill="#333">
        If Kc &gt;&gt; 1: products favoured at equilibrium    |    If Kc &lt;&lt; 1: reactants favoured</text>
  <text x="80" y="506" font-family="Georgia,serif" font-size="10" fill="#333">
        Kc unchanged by: concentration, pressure, catalyst    |    Kc changes only with: temperature</text>
  <text x="80" y="522" font-family="Georgia,serif" font-size="10" fill="#333">
        Q (reaction quotient) vs Kc: Q &lt; Kc → forward shift;  Q &gt; Kc → reverse shift</text>
</svg>`;

// ─── 7. LE CHATELIER'S PRINCIPLE DIAGRAM ─────────────────────────────────────
static leChatellierPrincipleDiagramSvg = `<?xml version="1.0" encoding="utf-8"?>
<svg version="1.1" xmlns="http://www.w3.org/2000/svg"
     width="1000px" height="700px" viewBox="0 0 1000 700">

  <text x="500" y="30" font-family="Georgia,serif" font-size="16" font-weight="bold"
        fill="#000" text-anchor="middle">Le Chatelier's Principle</text>
  <text x="500" y="50" font-family="Georgia,serif" font-size="11" fill="#333" text-anchor="middle">
        "A system at equilibrium subjected to a stress will shift to oppose that stress"</text>
  <text x="500" y="66" font-family="Georgia,serif" font-size="11" fill="#333" text-anchor="middle">
        Reference reaction: N₂(g) + 3H₂(g) ⇌ 2NH₃(g)   ΔH = −92 kJ mol⁻¹ (exothermic)</text>

  <!-- Central equilibrium box -->
  <rect x="360" y="85" width="280" height="55" rx="6" fill="none" stroke="#000" stroke-width="2.5"/>
  <text x="500" y="108" font-family="Georgia,serif" font-size="13" font-weight="bold" fill="#000" text-anchor="middle">
        EQUILIBRIUM STATE</text>
  <text x="500" y="128" font-family="Georgia,serif" font-size="11" fill="#000" text-anchor="middle">
        N₂ + 3H₂ ⇌ 2NH₃</text>

  <!-- ── STRESS 1: Concentration increase ── -->
  <rect x="30" y="175" width="280" height="130" rx="5" fill="none" stroke="#000" stroke-width="1.8"/>
  <text x="170" y="196" font-family="Georgia,serif" font-size="12" font-weight="bold" fill="#000" text-anchor="middle">
        STRESS 1: Add Reactant</text>
  <text x="170" y="212" font-family="Georgia,serif" font-size="10" fill="#333" text-anchor="middle">
        Increase [N₂] or [H₂]</text>
  <line x1="90" y1="228" x2="250" y2="228" stroke="#000" stroke-width="1"/>
  <text x="170" y="243" font-family="Georgia,serif" font-size="11" font-weight="bold" fill="#000" text-anchor="middle">
        → Shift: FORWARD (→)</text>
  <text x="50" y="260" font-family="Georgia,serif" font-size="10" fill="#333">• More NH₃ produced</text>
  <text x="50" y="275" font-family="Georgia,serif" font-size="10" fill="#333">• Kc unchanged</text>
  <text x="50" y="290" font-family="Georgia,serif" font-size="10" fill="#333">• New equilibrium position</text>
  <!-- Arrow to centre -->
  <line x1="310" y1="240" x2="358" y2="140" stroke="#000" stroke-width="1.5" stroke-dasharray="6,3"/>
  <polygon points="354,150 362,138 366,152" fill="#000"/>

  <!-- ── STRESS 2: Remove product ── -->
  <rect x="690" y="175" width="280" height="130" rx="5" fill="none" stroke="#000" stroke-width="1.8"/>
  <text x="830" y="196" font-family="Georgia,serif" font-size="12" font-weight="bold" fill="#000" text-anchor="middle">
        STRESS 2: Remove Product</text>
  <text x="830" y="212" font-family="Georgia,serif" font-size="10" fill="#333" text-anchor="middle">
        Decrease [NH₃]</text>
  <line x1="710" y1="228" x2="970" y2="228" stroke="#000" stroke-width="1"/>
  <text x="830" y="243" font-family="Georgia,serif" font-size="11" font-weight="bold" fill="#000" text-anchor="middle">
        → Shift: FORWARD (→)</text>
  <text x="710" y="260" font-family="Georgia,serif" font-size="10" fill="#333">• System replaces NH₃</text>
  <text x="710" y="275" font-family="Georgia,serif" font-size="10" fill="#333">• Kc unchanged</text>
  <text x="710" y="290" font-family="Georgia,serif" font-size="10" fill="#333">• Used in industrial synthesis</text>
  <!-- Arrow to centre -->
  <line x1="690" y1="240" x2="642" y2="140" stroke="#000" stroke-width="1.5" stroke-dasharray="6,3"/>
  <polygon points="638,150 646,138 650,152" fill="#000"/>

  <!-- ── STRESS 3: Increase pressure ── -->
  <rect x="30" y="360" width="280" height="140" rx="5" fill="none" stroke="#000" stroke-width="1.8"/>
  <text x="170" y="381" font-family="Georgia,serif" font-size="12" font-weight="bold" fill="#000" text-anchor="middle">
        STRESS 3: Increase Pressure</text>
  <text x="170" y="397" font-family="Georgia,serif" font-size="10" fill="#333" text-anchor="middle">
        Compress gas mixture</text>
  <line x1="50" y1="412" x2="290" y2="412" stroke="#000" stroke-width="1"/>
  <text x="170" y="428" font-family="Georgia,serif" font-size="11" font-weight="bold" fill="#000" text-anchor="middle">
        → Shift: FORWARD (→)</text>
  <text x="50" y="446" font-family="Georgia,serif" font-size="10" fill="#333">• 4 mol gas → 2 mol gas</text>
  <text x="50" y="461" font-family="Georgia,serif" font-size="10" fill="#333">• Shifts to fewer moles of gas</text>
  <text x="50" y="476" font-family="Georgia,serif" font-size="10" fill="#333">• Kc unchanged; Kp unchanged</text>
  <text x="50" y="491" font-family="Georgia,serif" font-size="10" fill="#333">• Reduces pressure (opposes stress)</text>

  <!-- ── STRESS 4: Increase temperature ── -->
  <rect x="690" y="360" width="280" height="140" rx="5" fill="none" stroke="#000" stroke-width="1.8"/>
  <text x="830" y="381" font-family="Georgia,serif" font-size="12" font-weight="bold" fill="#000" text-anchor="middle">
        STRESS 4: Increase Temperature</text>
  <text x="830" y="397" font-family="Georgia,serif" font-size="10" fill="#333" text-anchor="middle">
        Add heat to system</text>
  <line x1="710" y1="412" x2="960" y2="412" stroke="#000" stroke-width="1"/>
  <text x="830" y="428" font-family="Georgia,serif" font-size="11" font-weight="bold" fill="#000" text-anchor="middle">
        → Shift: REVERSE (←)</text>
  <text x="710" y="446" font-family="Georgia,serif" font-size="10" fill="#333">• Exothermic fwd: heat = product</text>
  <text x="710" y="461" font-family="Georgia,serif" font-size="10" fill="#333">• Favours endothermic direction</text>
  <text x="710" y="476" font-family="Georgia,serif" font-size="10" fill="#333">• Kc DECREASES (exothermic rxn)</text>
  <text x="710" y="491" font-family="Georgia,serif" font-size="10" fill="#333">• Less NH₃ at new equilibrium</text>

  <!-- ── STRESS 5: Add catalyst ── -->
  <rect x="360" y="360" width="280" height="140" rx="5" fill="none" stroke="#000" stroke-width="2.5"/>
  <text x="500" y="381" font-family="Georgia,serif" font-size="12" font-weight="bold" fill="#000" text-anchor="middle">
        CATALYST ADDED</text>
  <text x="500" y="397" font-family="Georgia,serif" font-size="10" fill="#333" text-anchor="middle">
        e.g. Fe catalyst (Haber process)</text>
  <line x1="380" y1="412" x2="620" y2="412" stroke="#000" stroke-width="1"/>
  <text x="500" y="428" font-family="Georgia,serif" font-size="11" font-weight="bold" fill="#000" text-anchor="middle">
        → NO SHIFT</text>
  <text x="380" y="446" font-family="Georgia,serif" font-size="10" fill="#333">• Speeds both fwd and rev equally</text>
  <text x="380" y="461" font-family="Georgia,serif" font-size="10" fill="#333">• Equilibrium reached faster</text>
  <text x="380" y="476" font-family="Georgia,serif" font-size="10" fill="#333">• Position unchanged; Kc unchanged</text>
  <text x="380" y="491" font-family="Georgia,serif" font-size="10" fill="#333">• Lowers activation energy both ways</text>

  <!-- Summary box -->
  <rect x="30" y="520" width="940" height="60" rx="5" fill="none" stroke="#000" stroke-width="1.8" stroke-dasharray="5,3"/>
  <text x="500" y="540" font-family="Georgia,serif" font-size="12" font-weight="bold" fill="#000" text-anchor="middle">
        Summary of Shifts</text>
  <text x="500" y="558" font-family="Georgia,serif" font-size="10" fill="#333" text-anchor="middle">
        Add reactant / remove product / increase pressure (fewer mol gas side) → FORWARD shift</text>
  <text x="500" y="574" font-family="Georgia,serif" font-size="10" fill="#333" text-anchor="middle">
        Add product / remove reactant / decrease pressure / increase T (for exothermic) → REVERSE shift</text>

  <!-- Haber process note -->
  <rect x="30" y="596" width="940" height="34" rx="4" fill="none" stroke="#000" stroke-width="1.5"/>
  <text x="500" y="612" font-family="Georgia,serif" font-size="10" font-weight="bold" fill="#000" text-anchor="middle">
        Haber Process compromise: 450°C (not too low for rate), 200 atm, Fe catalyst, continuous NH₃ removal</text>
  <text x="500" y="626" font-family="Georgia,serif" font-size="10" fill="#333" text-anchor="middle">
        Lower T → higher yield but too slow; Higher P → higher yield but costly — industrial compromise required</text>
</svg>`;

// ─── 8. PRESSURE EQUILIBRIUM DIAGRAM ─────────────────────────────────────────
static pressureEquilibriumDiagramSvg = `<?xml version="1.0" encoding="utf-8"?>
<svg version="1.1" xmlns="http://www.w3.org/2000/svg"
     width="1000px" height="600px" viewBox="0 0 1000 600">

  <text x="500" y="28" font-family="Georgia,serif" font-size="16" font-weight="bold"
        fill="#000" text-anchor="middle">Effect of Pressure on Equilibrium</text>
  <text x="500" y="46" font-family="Georgia,serif" font-size="11" fill="#333" text-anchor="middle">
        N₂(g) + 3H₂(g) ⇌ 2NH₃(g)   —   4 moles gas ⇌ 2 moles gas</text>

  <!-- Mole count comparison bar -->
  <rect x="340" y="58" width="320" height="34" rx="4" fill="none" stroke="#000" stroke-width="1.8"/>
  <text x="500" y="72" font-family="Georgia,serif" font-size="11" font-weight="bold" fill="#000" text-anchor="middle">
        Reactant side: 4 mol gas  |  Product side: 2 mol gas</text>
  <text x="500" y="86" font-family="Georgia,serif" font-size="10" fill="#333" text-anchor="middle">
        Increasing pressure → shift toward fewer moles (→ forward)</text>

  <!-- LOW PRESSURE vessel -->
  <rect x="50" y="115" width="380" height="300" rx="8" fill="none" stroke="#000" stroke-width="3"/>
  <text x="240" y="138" font-family="Georgia,serif" font-size="13" font-weight="bold" fill="#000" text-anchor="middle">
        LOW PRESSURE</text>
  <text x="240" y="154" font-family="Georgia,serif" font-size="10" fill="#333" text-anchor="middle">
        Equilibrium position: less product</text>

  <!-- Molecules in low-P: many N₂ and H₂ dots, few NH₃ -->
  <!-- N₂ molecules (squares) -->
  <rect x="80" y="175" width="18" height="18" rx="2" fill="none" stroke="#000" stroke-width="2"/>
  <text x="89" y="188" font-family="Georgia,serif" font-size="8" fill="#000" text-anchor="middle">N₂</text>
  <rect x="120" y="190" width="18" height="18" rx="2" fill="none" stroke="#000" stroke-width="2"/>
  <text x="129" y="203" font-family="Georgia,serif" font-size="8" fill="#000" text-anchor="middle">N₂</text>
  <rect x="160" y="170" width="18" height="18" rx="2" fill="none" stroke="#000" stroke-width="2"/>
  <text x="169" y="183" font-family="Georgia,serif" font-size="8" fill="#000" text-anchor="middle">N₂</text>
  <!-- H₂ molecules (circles) -->
  <circle cx="210" cy="185" r="10" fill="none" stroke="#000" stroke-width="2"/>
  <text x="210" y="189" font-family="Georgia,serif" font-size="8" fill="#000" text-anchor="middle">H₂</text>
  <circle cx="250" cy="175" r="10" fill="none" stroke="#000" stroke-width="2"/>
  <text x="250" y="179" font-family="Georgia,serif" font-size="8" fill="#000" text-anchor="middle">H₂</text>
  <circle cx="290" cy="190" r="10" fill="none" stroke="#000" stroke-width="2"/>
  <text x="290" y="194" font-family="Georgia,serif" font-size="8" fill="#000" text-anchor="middle">H₂</text>
  <circle cx="330" cy="178" r="10" fill="none" stroke="#000" stroke-width="2"/>
  <text x="330" y="182" font-family="Georgia,serif" font-size="8" fill="#000" text-anchor="middle">H₂</text>
  <circle cx="370" cy="185" r="10" fill="none" stroke="#000" stroke-width="2"/>
  <text x="370" y="189" font-family="Georgia,serif" font-size="8" fill="#000" text-anchor="middle">H₂</text>
  <circle cx="90" cy="230" r="10" fill="none" stroke="#000" stroke-width="2"/>
  <text x="90" y="234" font-family="Georgia,serif" font-size="8" fill="#000" text-anchor="middle">H₂</text>
  <!-- NH₃ molecules (triangles) — fewer -->
  <polygon points="230,250 218,272 242,272" fill="none" stroke="#000" stroke-width="2"/>
  <text x="230" y="270" font-family="Georgia,serif" font-size="7" fill="#000" text-anchor="middle">NH₃</text>
  <polygon points="300,260 288,282 312,282" fill="none" stroke="#000" stroke-width="2"/>
  <text x="300" y="280" font-family="Georgia,serif" font-size="7" fill="#000" text-anchor="middle">NH₃</text>

  <!-- Low P stats -->
  <line x1="70" y1="310" x2="420" y2="310" stroke="#000" stroke-width="1"/>
  <text x="90" y="328" font-family="Georgia,serif" font-size="10" fill="#000">N₂ : H₂ : NH₃  ≈  3 : 6 : 2</text>
  <text x="90" y="344" font-family="Georgia,serif" font-size="10" fill="#000">Total moles gas: high</text>
  <text x="90" y="360" font-family="Georgia,serif" font-size="10" fill="#000">% yield of NH₃: lower</text>
  <text x="90" y="376" font-family="Georgia,serif" font-size="10" fill="#000">Kc: unchanged</text>
  <text x="90" y="395" font-family="Georgia,serif" font-size="10" fill="#000">▲ Shape: N₂ = □  H₂ = ○  NH₃ = △</text>

  <!-- HIGH PRESSURE vessel -->
  <rect x="570" y="115" width="380" height="300" rx="8" fill="none" stroke="#000" stroke-width="3"/>
  <text x="760" y="138" font-family="Georgia,serif" font-size="13" font-weight="bold" fill="#000" text-anchor="middle">
        HIGH PRESSURE</text>
  <text x="760" y="154" font-family="Georgia,serif" font-size="10" fill="#333" text-anchor="middle">
        Equilibrium shifts forward → more NH₃</text>

  <!-- Many NH₃ in high pressure vessel, fewer N₂/H₂ -->
  <rect x="600" y="175" width="18" height="18" rx="2" fill="none" stroke="#000" stroke-width="2"/>
  <text x="609" y="188" font-family="Georgia,serif" font-size="8" fill="#000" text-anchor="middle">N₂</text>
  <circle cx="650" cy="183" r="10" fill="none" stroke="#000" stroke-width="2"/>
  <text x="650" y="187" font-family="Georgia,serif" font-size="8" fill="#000" text-anchor="middle">H₂</text>
  <circle cx="690" cy="175" r="10" fill="none" stroke="#000" stroke-width="2"/>
  <text x="690" y="179" font-family="Georgia,serif" font-size="8" fill="#000" text-anchor="middle">H₂</text>
  <!-- Many NH₃ -->
  <polygon points="730,175 718,197 742,197" fill="none" stroke="#000" stroke-width="2"/>
  <text x="730" y="195" font-family="Georgia,serif" font-size="7" fill="#000" text-anchor="middle">NH₃</text>
  <polygon points="770,182 758,204 782,204" fill="none" stroke="#000" stroke-width="2"/>
  <text x="770" y="202" font-family="Georgia,serif" font-size="7" fill="#000" text-anchor="middle">NH₃</text>
  <polygon points="810,175 798,197 822,197" fill="none" stroke="#000" stroke-width="2"/>
  <text x="810" y="195" font-family="Georgia,serif" font-size="7" fill="#000" text-anchor="middle">NH₃</text>
  <polygon points="635,230 623,252 647,252" fill="none" stroke="#000" stroke-width="2"/>
  <text x="635" y="250" font-family="Georgia,serif" font-size="7" fill="#000" text-anchor="middle">NH₃</text>
  <polygon points="685,240 673,262 697,262" fill="none" stroke="#000" stroke-width="2"/>
  <text x="685" y="260" font-family="Georgia,serif" font-size="7" fill="#000" text-anchor="middle">NH₃</text>
  <polygon points="740,250 728,272 752,272" fill="none" stroke="#000" stroke-width="2"/>
  <text x="740" y="270" font-family="Georgia,serif" font-size="7" fill="#000" text-anchor="middle">NH₃</text>
  <polygon points="790,235 778,257 802,257" fill="none" stroke="#000" stroke-width="2"/>
  <text x="790" y="255" font-family="Georgia,serif" font-size="7" fill="#000" text-anchor="middle">NH₃</text>

  <!-- High P stats -->
  <line x1="585" y1="310" x2="940" y2="310" stroke="#000" stroke-width="1"/>
  <text x="605" y="328" font-family="Georgia,serif" font-size="10" fill="#000">N₂ : H₂ : NH₃  ≈  1 : 2 : 7</text>
  <text x="605" y="344" font-family="Georgia,serif" font-size="10" fill="#000">Total moles gas: lower (fewer particles)</text>
  <text x="605" y="360" font-family="Georgia,serif" font-size="10" fill="#000">% yield of NH₃: higher</text>
  <text x="605" y="376" font-family="Georgia,serif" font-size="10" fill="#000">Kc: unchanged</text>
  <text x="605" y="395" font-family="Georgia,serif" font-size="10" fill="#000">Pressure increase opposes itself (Le Chatelier)</text>

  <!-- Central arrow between vessels -->
  <line x1="432" y1="265" x2="568" y2="265" stroke="#000" stroke-width="3"/>
  <polygon points="558,259 572,265 558,271" fill="#000"/>
  <text x="500" y="256" font-family="Georgia,serif" font-size="11" font-weight="bold" fill="#000" text-anchor="middle">
        ↑ Pressure</text>
  <text x="500" y="282" font-family="Georgia,serif" font-size="10" fill="#333" text-anchor="middle">
        shift →</text>

  <!-- Summary -->
  <rect x="50" y="430" width="900" height="50" rx="5" fill="none" stroke="#000" stroke-width="1.8" stroke-dasharray="5,3"/>
  <text x="500" y="450" font-family="Georgia,serif" font-size="11" font-weight="bold" fill="#000" text-anchor="middle">
        Rule: Increasing pressure shifts equilibrium toward side with fewer moles of gas</text>
  <text x="500" y="468" font-family="Georgia,serif" font-size="10" fill="#333" text-anchor="middle">
        Equal moles each side → pressure has no effect on position  |  Kc and Kp never change with pressure</text>

  <!-- Industrial note -->
  <rect x="50" y="492" width="900" height="34" rx="4" fill="none" stroke="#000" stroke-width="1.5"/>
  <text x="500" y="508" font-family="Georgia,serif" font-size="10" font-weight="bold" fill="#000" text-anchor="middle">
        Haber process uses ~200 atm — favours NH₃ formation (4 mol → 2 mol gas)</text>
  <text x="500" y="522" font-family="Georgia,serif" font-size="10" fill="#333" text-anchor="middle">
        Higher pressure = better yield but greater cost and engineering challenge — compromise selected</text>
</svg>`;

// ─── 9. TEMPERATURE EQUILIBRIUM DIAGRAM ──────────────────────────────────────
static temperatureEquilibriumDiagramSvg = `<?xml version="1.0" encoding="utf-8"?>
<svg version="1.1" xmlns="http://www.w3.org/2000/svg"
     width="1000px" height="600px" viewBox="0 0 1000 600">

  <text x="500" y="28" font-family="Georgia,serif" font-size="16" font-weight="bold"
        fill="#000" text-anchor="middle">Effect of Temperature on Equilibrium</text>
  <text x="500" y="46" font-family="Georgia,serif" font-size="11" fill="#333" text-anchor="middle">
        Exothermic: N₂ + 3H₂ ⇌ 2NH₃  ΔH = −92 kJ mol⁻¹  |  Endothermic example: N₂ + O₂ ⇌ 2NO  ΔH = +180 kJ mol⁻¹</text>

  <!-- Rule boxes -->
  <rect x="50" y="62" width="420" height="50" rx="5" fill="none" stroke="#000" stroke-width="2"/>
  <text x="260" y="80" font-family="Georgia,serif" font-size="12" font-weight="bold" fill="#000" text-anchor="middle">
        EXOTHERMIC forward reaction (ΔH &lt; 0)</text>
  <text x="260" y="98" font-family="Georgia,serif" font-size="10" fill="#333" text-anchor="middle">
        Heat treated as a product: A ⇌ B + heat</text>

  <rect x="530" y="62" width="420" height="50" rx="5" fill="none" stroke="#000" stroke-width="2"/>
  <text x="740" y="80" font-family="Georgia,serif" font-size="12" font-weight="bold" fill="#000" text-anchor="middle">
        ENDOTHERMIC forward reaction (ΔH &gt; 0)</text>
  <text x="740" y="98" font-family="Georgia,serif" font-size="10" fill="#333" text-anchor="middle">
        Heat treated as a reactant: A + heat ⇌ B</text>

  <!-- Axes for exothermic Kc vs T graph (left) -->
  <line x1="80" y1="360" x2="430" y2="360" stroke="#000" stroke-width="2"/>
  <line x1="80" y1="360" x2="80" y2="140" stroke="#000" stroke-width="2"/>
  <text x="255" y="386" font-family="Georgia,serif" font-size="11" fill="#000" text-anchor="middle">Temperature →</text>
  <text x="40" y="255" font-family="Georgia,serif" font-size="11" fill="#000" text-anchor="middle"
        transform="rotate(-90 40 255)">Kc</text>
  <text x="255" y="128" font-family="Georgia,serif" font-size="12" font-weight="bold" fill="#000" text-anchor="middle">
        Exothermic: Kc vs Temperature</text>
  <!-- Kc decreasing curve (exothermic: higher T → lower Kc) -->
  <path d="M85,160 C140,168 200,210 280,280 C330,320 380,348 425,356"
        fill="none" stroke="#000" stroke-width="3"/>
  <!-- Arrow direction -->
  <polygon points="280,275 292,282 282,294" fill="#000"/>
  <text x="310" y="220" font-family="Georgia,serif" font-size="10" fill="#000">Kc decreases</text>
  <text x="310" y="234" font-family="Georgia,serif" font-size="10" fill="#000">as T increases</text>
  <text x="310" y="248" font-family="Georgia,serif" font-size="10" fill="#000">(reverse favoured)</text>
  <text x="310" y="262" font-family="Georgia,serif" font-size="10" fill="#000">Less product at</text>
  <text x="310" y="276" font-family="Georgia,serif" font-size="10" fill="#000">higher temperature</text>

  <!-- Effect summary exothermic -->
  <rect x="80" y="370" width="350" height="80" rx="4" fill="none" stroke="#000" stroke-width="1.5"/>
  <text x="255" y="388" font-family="Georgia,serif" font-size="11" font-weight="bold" fill="#000" text-anchor="middle">
        Exothermic: effect of temperature</text>
  <text x="95" y="404" font-family="Georgia,serif" font-size="10" fill="#000">↑ Temperature → reverse shift → less product → lower Kc</text>
  <text x="95" y="420" font-family="Georgia,serif" font-size="10" fill="#000">↓ Temperature → forward shift → more product → higher Kc</text>
  <text x="95" y="436" font-family="Georgia,serif" font-size="10" fill="#333">Low T gives better yield but reaction too slow (compromise)</text>

  <!-- Axes for endothermic Kc vs T graph (right) -->
  <line x1="560" y1="360" x2="910" y2="360" stroke="#000" stroke-width="2"/>
  <line x1="560" y1="360" x2="560" y2="140" stroke="#000" stroke-width="2"/>
  <text x="735" y="386" font-family="Georgia,serif" font-size="11" fill="#000" text-anchor="middle">Temperature →</text>
  <text x="520" y="255" font-family="Georgia,serif" font-size="11" fill="#000" text-anchor="middle"
        transform="rotate(-90 520 255)">Kc</text>
  <text x="735" y="128" font-family="Georgia,serif" font-size="12" font-weight="bold" fill="#000" text-anchor="middle">
        Endothermic: Kc vs Temperature</text>
  <!-- Kc increasing curve (endothermic: higher T → higher Kc) -->
  <path d="M565,352 C610,346 670,310 740,260 C790,222 840,180 905,155"
        fill="none" stroke="#000" stroke-width="3"/>
  <polygon points="738,256 750,258 742,270" fill="#000"/>
  <text x="620" y="210" font-family="Georgia,serif" font-size="10" fill="#000">Kc increases</text>
  <text x="620" y="224" font-family="Georgia,serif" font-size="10" fill="#000">as T increases</text>
  <text x="620" y="238" font-family="Georgia,serif" font-size="10" fill="#000">(forward favoured)</text>
  <text x="620" y="252" font-family="Georgia,serif" font-size="10" fill="#000">More product at</text>
  <text x="620" y="266" font-family="Georgia,serif" font-size="10" fill="#000">higher temperature</text>

  <!-- Effect summary endothermic -->
  <rect x="560" y="370" width="350" height="80" rx="4" fill="none" stroke="#000" stroke-width="1.5"/>
  <text x="735" y="388" font-family="Georgia,serif" font-size="11" font-weight="bold" fill="#000" text-anchor="middle">
        Endothermic: effect of temperature</text>
  <text x="575" y="404" font-family="Georgia,serif" font-size="10" fill="#000">↑ Temperature → forward shift → more product → higher Kc</text>
  <text x="575" y="420" font-family="Georgia,serif" font-size="10" fill="#000">↓ Temperature → reverse shift → less product → lower Kc</text>
  <text x="575" y="436" font-family="Georgia,serif" font-size="10" fill="#333">Higher T always improves endothermic yield</text>

  <!-- Key distinction box -->
  <rect x="50" y="466" width="900" height="56" rx="5" fill="none" stroke="#000" stroke-width="1.8" stroke-dasharray="5,3"/>
  <text x="500" y="484" font-family="Georgia,serif" font-size="12" font-weight="bold" fill="#000" text-anchor="middle">
        Critical Distinction: Temperature is the ONLY factor that changes the value of Kc</text>
  <text x="500" y="500" font-family="Georgia,serif" font-size="10" fill="#333" text-anchor="middle">
        Concentration, pressure, and catalyst changes shift position but leave Kc unchanged</text>
  <text x="500" y="516" font-family="Georgia,serif" font-size="10" fill="#333" text-anchor="middle">
        van't Hoff equation: d(ln K)/dT = ΔH° / RT²  — connects K, T, and enthalpy</text>
</svg>`;

// ─── 10. EQUILIBRIUM POSITION GRAPH ──────────────────────────────────────────
static equilibriumPositionGraphSvg = `<?xml version="1.0" encoding="utf-8"?>
<svg version="1.1" xmlns="http://www.w3.org/2000/svg"
     width="900px" height="600px" viewBox="0 0 900 600">

  <text x="450" y="28" font-family="Georgia,serif" font-size="16" font-weight="bold"
        fill="#000" text-anchor="middle">Reaching Equilibrium — Concentration vs Time</text>
  <text x="450" y="46" font-family="Georgia,serif" font-size="11" fill="#333" text-anchor="middle">
        A ⇌ B    Starting with pure A; concentration changes until equilibrium is reached</text>

  <!-- Axes -->
  <line x1="80" y1="460" x2="820" y2="460" stroke="#000" stroke-width="2"/>
  <line x1="80" y1="460" x2="80" y2="80" stroke="#000" stroke-width="2"/>
  <text x="450" y="494" font-family="Georgia,serif" font-size="13" fill="#000" text-anchor="middle">Time</text>
  <text x="30" y="270" font-family="Georgia,serif" font-size="13" fill="#000" text-anchor="middle"
        transform="rotate(-90 30 270)">Concentration (mol dm⁻³)</text>

  <!-- Equilibrium line at y=270 -->
  <line x1="500" y1="270" x2="820" y2="270" stroke="#000" stroke-width="1" stroke-dasharray="6,4"/>
  <line x1="500" y1="340" x2="820" y2="340" stroke="#000" stroke-width="1" stroke-dasharray="6,4"/>
  <text x="826" y="274" font-family="Georgia,serif" font-size="9" fill="#000">[A]eq</text>
  <text x="826" y="344" font-family="Georgia,serif" font-size="9" fill="#000">[B]eq</text>

  <!-- Vertical dashed line at equilibrium reached x=500 -->
  <line x1="500" y1="90" x2="500" y2="460" stroke="#000" stroke-width="1.5" stroke-dasharray="8,4"/>
  <text x="505" y="88" font-family="Georgia,serif" font-size="10" fill="#000">Equilibrium reached</text>

  <!-- [A] concentration curve: starts high (y=110), decays to equilibrium (y=270) -->
  <path d="M80,110 C160,115 260,155 360,210 C420,240 465,262 500,270 L820,270"
        fill="none" stroke="#000" stroke-width="3"/>
  <!-- Direction arrow on [A] -->
  <polygon points="356,207 368,213 360,225" fill="#000"/>
  <text x="130" y="108" font-family="Georgia,serif" font-size="13" font-weight="bold" fill="#000">[A] reactant</text>
  <text x="130" y="122" font-family="Georgia,serif" font-size="10" fill="#333">(decreasing)</text>

  <!-- [B] concentration curve: starts at 0 (y=460), rises to equilibrium (y=340) -->
  <path d="M80,458 C160,452 260,420 360,375 C420,354 465,344 500,340 L820,340"
        fill="none" stroke="#000" stroke-width="3" stroke-dasharray="12,5"/>
  <!-- Direction arrow on [B] -->
  <polygon points="356,378 368,372 362,360" fill="#000"/>
  <text x="130" y="452" font-family="Georgia,serif" font-size="13" font-weight="bold" fill="#000">[B] product</text>
  <text x="130" y="466" font-family="Georgia,serif" font-size="10" fill="#333">(increasing)</text>

  <!-- Rate panel -->
  <rect x="550" y="380" width="250" height="68" rx="4" fill="none" stroke="#000" stroke-width="1.5"/>
  <text x="675" y="398" font-family="Georgia,serif" font-size="11" font-weight="bold" fill="#000" text-anchor="middle">
        At Equilibrium (t &gt; t_eq)</text>
  <text x="560" y="414" font-family="Georgia,serif" font-size="10" fill="#000">• [A] and [B] both constant</text>
  <text x="560" y="430" font-family="Georgia,serif" font-size="10" fill="#000">• Rate(fwd) = Rate(rev)</text>
  <text x="560" y="444" font-family="Georgia,serif" font-size="10" fill="#000">• Dynamic, not static process</text>

  <!-- Legend -->
  <line x1="560" y1="168" x2="600" y2="168" stroke="#000" stroke-width="3"/>
  <text x="608" y="172" font-family="Georgia,serif" font-size="11" fill="#000">Reactant [A]  (solid)</text>
  <line x1="560" y1="192" x2="600" y2="192" stroke="#000" stroke-width="3" stroke-dasharray="10,4"/>
  <text x="608" y="196" font-family="Georgia,serif" font-size="11" fill="#000">Product [B]  (dashed)</text>

  <!-- Y-axis tick for initial [A] -->
  <line x1="74" y1="110" x2="80" y2="110" stroke="#000" stroke-width="2"/>
  <text x="68" y="114" font-family="Georgia,serif" font-size="10" fill="#000" text-anchor="end">[A]₀</text>

  <!-- Summary box -->
  <rect x="80" y="510" width="740" height="70" rx="5" fill="none" stroke="#000" stroke-width="1.8" stroke-dasharray="5,3"/>
  <text x="450" y="530" font-family="Georgia,serif" font-size="11" font-weight="bold" fill="#000" text-anchor="middle">
        Key Features of Equilibrium Position Graphs</text>
  <text x="450" y="548" font-family="Georgia,serif" font-size="10" fill="#333" text-anchor="middle">
        1. Curves level off at equilibrium concentrations  2. [A] decreases, [B] increases (if starting with pure A)</text>
  <text x="450" y="564" font-family="Georgia,serif" font-size="10" fill="#333" text-anchor="middle">
        3. At equilibrium: Kc = [B]/[A]  (for A ⇌ B)   4. Position ≠ rate of reaching equilibrium</text>
  <text x="450" y="578" font-family="Georgia,serif" font-size="10" fill="#333" text-anchor="middle">
        Adding catalyst → reaches equilibrium faster but same final concentrations (same Kc)</text>
</svg>`;

// ─── 11. HETEROGENEOUS EQUILIBRIUM DIAGRAM ───────────────────────────────────
static heterogeneousEquilibriumDiagramSvg = `<?xml version="1.0" encoding="utf-8"?>
<svg version="1.1" xmlns="http://www.w3.org/2000/svg"
     width="900px" height="600px" viewBox="0 0 900 600">

  <text x="450" y="28" font-family="Georgia,serif" font-size="16" font-weight="bold"
        fill="#000" text-anchor="middle">Heterogeneous Equilibrium</text>
  <text x="450" y="46" font-family="Georgia,serif" font-size="11" fill="#333" text-anchor="middle">
        CaCO₃(s) ⇌ CaO(s) + CO₂(g)   —   equilibrium involving multiple phases</text>

  <!-- Vessel diagram -->
  <rect x="280" y="65" width="340" height="260" rx="8" fill="none" stroke="#000" stroke-width="3"/>
  <text x="450" y="86" font-family="Georgia,serif" font-size="12" font-weight="bold" fill="#000" text-anchor="middle">
        Reaction Vessel (closed)</text>

  <!-- Solid CaCO3 layer at bottom -->
  <rect x="284" y="270" width="160" height="50" rx="3" fill="none" stroke="#000" stroke-width="2"/>
  <!-- Hatching pattern for solid -->
  <line x1="290" y1="278" x2="300" y2="270" stroke="#000" stroke-width="1"/>
  <line x1="305" y1="278" x2="320" y2="270" stroke="#000" stroke-width="1"/>
  <line x1="320" y1="278" x2="338" y2="270" stroke="#000" stroke-width="1"/>
  <line x1="338" y1="278" x2="355" y2="270" stroke="#000" stroke-width="1"/>
  <line x1="355" y1="278" x2="370" y2="270" stroke="#000" stroke-width="1"/>
  <line x1="370" y1="278" x2="385" y2="270" stroke="#000" stroke-width="1"/>
  <line x1="384" y1="278" x2="398" y2="270" stroke="#000" stroke-width="1"/>
  <line x1="284" y1="288" x2="295" y2="278" stroke="#000" stroke-width="1"/>
  <line x1="284" y1="300" x2="298" y2="286" stroke="#000" stroke-width="1"/>
  <text x="365" y="298" font-family="Georgia,serif" font-size="11" font-weight="bold" fill="#000">CaCO₃(s)</text>

  <!-- Solid CaO layer (adjacent) -->
  <rect x="456" y="270" width="160" height="50" rx="3" fill="none" stroke="#000" stroke-width="2" stroke-dasharray="5,3"/>
  <line x1="462" y1="278" x2="475" y2="270" stroke="#000" stroke-width="1"/>
  <line x1="478" y1="278" x2="494" y2="270" stroke="#000" stroke-width="1"/>
  <line x1="496" y1="278" x2="512" y2="270" stroke="#000" stroke-width="1"/>
  <line x1="514" y1="278" x2="530" y2="270" stroke="#000" stroke-width="1"/>
  <line x1="530" y1="278" x2="546" y2="270" stroke="#000" stroke-width="1"/>
  <line x1="546" y1="278" x2="560" y2="270" stroke="#000" stroke-width="1"/>
  <line x1="560" y1="278" x2="576" y2="270" stroke="#000" stroke-width="1"/>
  <text x="537" y="298" font-family="Georgia,serif" font-size="11" font-weight="bold" fill="#000">CaO(s)</text>

  <!-- CO₂ gas molecules floating above -->
  <circle cx="350" cy="170" r="14" fill="none" stroke="#000" stroke-width="2"/>
  <text x="350" y="175" font-family="Georgia,serif" font-size="9" fill="#000" text-anchor="middle">CO₂</text>
  <circle cx="420" cy="140" r="14" fill="none" stroke="#000" stroke-width="2"/>
  <text x="420" y="145" font-family="Georgia,serif" font-size="9" fill="#000" text-anchor="middle">CO₂</text>
  <circle cx="490" cy="165" r="14" fill="none" stroke="#000" stroke-width="2"/>
  <text x="490" y="170" font-family="Georgia,serif" font-size="9" fill="#000" text-anchor="middle">CO₂</text>
  <circle cx="560" cy="135" r="14" fill="none" stroke="#000" stroke-width="2"/>
  <text x="560" y="140" font-family="Georgia,serif" font-size="9" fill="#000" text-anchor="middle">CO₂</text>
  <circle cx="310" cy="230" r="14" fill="none" stroke="#000" stroke-width="2"/>
  <text x="310" y="235" font-family="Georgia,serif" font-size="9" fill="#000" text-anchor="middle">CO₂</text>
  <circle cx="590" cy="210" r="14" fill="none" stroke="#000" stroke-width="2"/>
  <text x="590" y="215" font-family="Georgia,serif" font-size="9" fill="#000" text-anchor="middle">CO₂</text>

  <!-- Gas label -->
  <text x="450" y="115" font-family="Georgia,serif" font-size="11" fill="#333" text-anchor="middle">
        CO₂(g) — only gas phase species</text>

  <!-- Phase labels -->
  <text x="266" y="308" font-family="Georgia,serif" font-size="9" fill="#333" text-anchor="end">solid</text>
  <text x="266" y="320" font-family="Georgia,serif" font-size="9" fill="#333" text-anchor="end">phase</text>
  <text x="266" y="140" font-family="Georgia,serif" font-size="9" fill="#333" text-anchor="end">gas</text>
  <text x="266" y="152" font-family="Georgia,serif" font-size="9" fill="#333" text-anchor="end">phase</text>

  <!-- Kp and Kc expression boxes -->
  <rect x="50" y="350" width="370" height="110" rx="5" fill="none" stroke="#000" stroke-width="2"/>
  <text x="235" y="370" font-family="Georgia,serif" font-size="12" font-weight="bold" fill="#000" text-anchor="middle">
        Equilibrium Expressions</text>
  <text x="65" y="392" font-family="Georgia,serif" font-size="11" fill="#000">
        Kc = [CO₂(g)]</text>
  <text x="65" y="412" font-family="Georgia,serif" font-size="11" fill="#000">
        Kp = p(CO₂)</text>
  <text x="65" y="432" font-family="Georgia,serif" font-size="10" fill="#333">
        Pure solids excluded: activity = 1</text>
  <text x="65" y="448" font-family="Georgia,serif" font-size="10" fill="#333">
        Kp = Kc · RT  (Δn = 1 for this reaction)</text>

  <!-- Rules box -->
  <rect x="480" y="350" width="370" height="110" rx="5" fill="none" stroke="#000" stroke-width="2"/>
  <text x="665" y="370" font-family="Georgia,serif" font-size="12" font-weight="bold" fill="#000" text-anchor="middle">
        Rules for Heterogeneous Equilibria</text>
  <text x="496" y="390" font-family="Georgia,serif" font-size="10" fill="#000">1. Pure solids: omit from K expression</text>
  <text x="496" y="408" font-family="Georgia,serif" font-size="10" fill="#000">2. Pure liquids: omit from K expression</text>
  <text x="496" y="426" font-family="Georgia,serif" font-size="10" fill="#000">3. Dissolved species: include as [conc]</text>
  <text x="496" y="444" font-family="Georgia,serif" font-size="10" fill="#000">4. Gases: include as concentration or partial p</text>

  <!-- Further examples box -->
  <rect x="50" y="476" width="800" height="110" rx="5" fill="none" stroke="#000" stroke-width="1.8" stroke-dasharray="5,3"/>
  <text x="450" y="496" font-family="Georgia,serif" font-size="12" font-weight="bold" fill="#000" text-anchor="middle">
        More Heterogeneous Examples</text>
  <text x="65" y="516" font-family="Georgia,serif" font-size="10" fill="#000">
        Fe₃O₄(s) + 4H₂(g) ⇌ 3Fe(s) + 4H₂O(g)     Kc = [H₂O]⁴ / [H₂]⁴</text>
  <text x="65" y="534" font-family="Georgia,serif" font-size="10" fill="#000">
        AgCl(s) ⇌ Ag⁺(aq) + Cl⁻(aq)               Ksp = [Ag⁺][Cl⁻]  (solubility product)</text>
  <text x="65" y="552" font-family="Georgia,serif" font-size="10" fill="#000">
        CH₃COOH(l) + C₂H₅OH(l) ⇌ CH₃COOC₂H₅(l) + H₂O(l)   Kc = [ester][water]/[acid][alcohol]</text>
  <text x="65" y="570" font-family="Georgia,serif" font-size="10" fill="#333">
        Key: adding more solid does not shift equilibrium — only surface area / gas concentration matters</text>
</svg>`;

// ─── 12. pH SCALE DIAGRAM ─────────────────────────────────────────────────────
static phScaleDiagramSvg = `<?xml version="1.0" encoding="utf-8"?>
<svg version="1.1" xmlns="http://www.w3.org/2000/svg"
     width="1000px" height="600px" viewBox="0 0 1000 600">

  <text x="500" y="28" font-family="Georgia,serif" font-size="16" font-weight="bold"
        fill="#000" text-anchor="middle">pH Scale</text>
  <text x="500" y="46" font-family="Georgia,serif" font-size="11" fill="#333" text-anchor="middle">
        pH 0–14  |  [H⁺] relationship  |  Common substances</text>

  <!-- Main pH scale bar: x=30 to x=970, y=80–130 -->
  <rect x="30" y="80" width="940" height="60" rx="4" fill="none" stroke="#000" stroke-width="2.5"/>

  <!-- pH divisions: 15 sections each ~62.7px wide -->
  <!-- Tick marks and labels for pH 0–14 -->
  <line x1="30" y1="80" x2="30" y2="140" stroke="#000" stroke-width="2"/>
  <text x="30" y="158" font-family="Georgia,serif" font-size="11" font-weight="bold" fill="#000" text-anchor="middle">0</text>

  <line x1="97" y1="80" x2="97" y2="140" stroke="#000" stroke-width="1.5"/>
  <text x="97" y="158" font-family="Georgia,serif" font-size="11" fill="#000" text-anchor="middle">1</text>

  <line x1="164" y1="80" x2="164" y2="140" stroke="#000" stroke-width="1.5"/>
  <text x="164" y="158" font-family="Georgia,serif" font-size="11" fill="#000" text-anchor="middle">2</text>

  <line x1="231" y1="80" x2="231" y2="140" stroke="#000" stroke-width="1.5"/>
  <text x="231" y="158" font-family="Georgia,serif" font-size="11" fill="#000" text-anchor="middle">3</text>

  <line x1="298" y1="80" x2="298" y2="140" stroke="#000" stroke-width="1.5"/>
  <text x="298" y="158" font-family="Georgia,serif" font-size="11" fill="#000" text-anchor="middle">4</text>

  <line x1="365" y1="80" x2="365" y2="140" stroke="#000" stroke-width="1.5"/>
  <text x="365" y="158" font-family="Georgia,serif" font-size="11" fill="#000" text-anchor="middle">5</text>

  <line x1="432" y1="80" x2="432" y2="140" stroke="#000" stroke-width="1.5"/>
  <text x="432" y="158" font-family="Georgia,serif" font-size="11" fill="#000" text-anchor="middle">6</text>

  <line x1="500" y1="80" x2="500" y2="140" stroke="#000" stroke-width="3"/>
  <text x="500" y="158" font-family="Georgia,serif" font-size="12" font-weight="bold" fill="#000" text-anchor="middle">7</text>

  <line x1="568" y1="80" x2="568" y2="140" stroke="#000" stroke-width="1.5"/>
  <text x="568" y="158" font-family="Georgia,serif" font-size="11" fill="#000" text-anchor="middle">8</text>

  <line x1="635" y1="80" x2="635" y2="140" stroke="#000" stroke-width="1.5"/>
  <text x="635" y="158" font-family="Georgia,serif" font-size="11" fill="#000" text-anchor="middle">9</text>

  <line x1="702" y1="80" x2="702" y2="140" stroke="#000" stroke-width="1.5"/>
  <text x="702" y="158" font-family="Georgia,serif" font-size="11" fill="#000" text-anchor="middle">10</text>

  <line x1="769" y1="80" x2="769" y2="140" stroke="#000" stroke-width="1.5"/>
  <text x="769" y="158" font-family="Georgia,serif" font-size="11" fill="#000" text-anchor="middle">11</text>

  <line x1="836" y1="80" x2="836" y2="140" stroke="#000" stroke-width="1.5"/>
  <text x="836" y="158" font-family="Georgia,serif" font-size="11" fill="#000" text-anchor="middle">12</text>

  <line x1="903" y1="80" x2="903" y2="140" stroke="#000" stroke-width="1.5"/>
  <text x="903" y="158" font-family="Georgia,serif" font-size="11" fill="#000" text-anchor="middle">13</text>

  <line x1="970" y1="80" x2="970" y2="140" stroke="#000" stroke-width="2"/>
  <text x="970" y="158" font-family="Georgia,serif" font-size="11" font-weight="bold" fill="#000" text-anchor="middle">14</text>

  <!-- ACID / NEUTRAL / ALKALI labels inside bar -->
  <text x="200" y="108" font-family="Georgia,serif" font-size="13" font-weight="bold" fill="#000" text-anchor="middle">◄ ACIDIC</text>
  <text x="500" y="108" font-family="Georgia,serif" font-size="11" font-weight="bold" fill="#000" text-anchor="middle">NEUTRAL</text>
  <text x="800" y="108" font-family="Georgia,serif" font-size="13" font-weight="bold" fill="#000" text-anchor="middle">ALKALINE ►</text>

  <!-- Hatching in acidic region (left half) -->
  <rect x="30" y="80" width="470" height="60" rx="0" fill="none"/>
  <!-- Hatching lines: -->
  <line x1="55" y1="80" x2="30" y2="105" stroke="#000" stroke-width="0.8"/>
  <line x1="88" y1="80" x2="48" y2="120" stroke="#000" stroke-width="0.8"/>
  <line x1="130" y1="80" x2="80" y2="130" stroke="#000" stroke-width="0.8"/>
  <line x1="175" y1="80" x2="120" y2="135" stroke="#000" stroke-width="0.8"/>
  <line x1="220" y1="80" x2="160" y2="140" stroke="#000" stroke-width="0.8"/>
  <line x1="265" y1="80" x2="205" y2="140" stroke="#000" stroke-width="0.8"/>
  <line x1="310" y1="80" x2="250" y2="140" stroke="#000" stroke-width="0.8"/>
  <line x1="355" y1="80" x2="295" y2="140" stroke="#000" stroke-width="0.8"/>
  <line x1="400" y1="80" x2="340" y2="140" stroke="#000" stroke-width="0.8"/>
  <line x1="445" y1="80" x2="385" y2="140" stroke="#000" stroke-width="0.8"/>
  <line x1="490" y1="80" x2="430" y2="140" stroke="#000" stroke-width="0.8"/>

  <!-- Common substances — pointers from pH bar downward -->
  <!-- pH 0: Battery acid -->
  <line x1="30" y1="140" x2="30" y2="180" stroke="#000" stroke-width="1.5"/>
  <text x="30" y="194" font-family="Georgia,serif" font-size="9" fill="#000" text-anchor="middle">Battery</text>
  <text x="30" y="206" font-family="Georgia,serif" font-size="9" fill="#000" text-anchor="middle">acid</text>

  <!-- pH 1: Stomach acid -->
  <line x1="97" y1="140" x2="97" y2="200" stroke="#000" stroke-width="1.5"/>
  <text x="97" y="214" font-family="Georgia,serif" font-size="9" fill="#000" text-anchor="middle">Stomach</text>
  <text x="97" y="226" font-family="Georgia,serif" font-size="9" fill="#000" text-anchor="middle">acid</text>

  <!-- pH 2–3: Lemon juice -->
  <line x1="181" y1="140" x2="181" y2="180" stroke="#000" stroke-width="1.5"/>
  <text x="181" y="194" font-family="Georgia,serif" font-size="9" fill="#000" text-anchor="middle">Lemon</text>
  <text x="181" y="206" font-family="Georgia,serif" font-size="9" fill="#000" text-anchor="middle">juice</text>

  <!-- pH 4: Tomato -->
  <line x1="298" y1="140" x2="298" y2="200" stroke="#000" stroke-width="1.5"/>
  <text x="298" y="214" font-family="Georgia,serif" font-size="9" fill="#000" text-anchor="middle">Tomato</text>
  <text x="298" y="226" font-family="Georgia,serif" font-size="9" fill="#000" text-anchor="middle">juice</text>

  <!-- pH 5: Black coffee -->
  <line x1="365" y1="140" x2="365" y2="180" stroke="#000" stroke-width="1.5"/>
  <text x="365" y="194" font-family="Georgia,serif" font-size="9" fill="#000" text-anchor="middle">Black</text>
  <text x="365" y="206" font-family="Georgia,serif" font-size="9" fill="#000" text-anchor="middle">coffee</text>

  <!-- pH 7: Pure water -->
  <line x1="500" y1="140" x2="500" y2="200" stroke="#000" stroke-width="2"/>
  <text x="500" y="214" font-family="Georgia,serif" font-size="9" font-weight="bold" fill="#000" text-anchor="middle">Pure</text>
  <text x="500" y="226" font-family="Georgia,serif" font-size="9" font-weight="bold" fill="#000" text-anchor="middle">water</text>

  <!-- pH 8: Seawater -->
  <line x1="568" y1="140" x2="568" y2="180" stroke="#000" stroke-width="1.5"/>
  <text x="568" y="194" font-family="Georgia,serif" font-size="9" fill="#000" text-anchor="middle">Sea</text>
  <text x="568" y="206" font-family="Georgia,serif" font-size="9" fill="#000" text-anchor="middle">water</text>

  <!-- pH 9: Baking soda -->
  <line x1="635" y1="140" x2="635" y2="200" stroke="#000" stroke-width="1.5"/>
  <text x="635" y="214" font-family="Georgia,serif" font-size="9" fill="#000" text-anchor="middle">Baking</text>
  <text x="635" y="226" font-family="Georgia,serif" font-size="9" fill="#000" text-anchor="middle">soda</text>

  <!-- pH 11: Ammonia -->
  <line x1="769" y1="140" x2="769" y2="180" stroke="#000" stroke-width="1.5"/>
  <text x="769" y="194" font-family="Georgia,serif" font-size="9" fill="#000" text-anchor="middle">Ammonia</text>
  <text x="769" y="206" font-family="Georgia,serif" font-size="9" fill="#000" text-anchor="middle">solution</text>

  <!-- pH 13: Bleach -->
  <line x1="903" y1="140" x2="903" y2="200" stroke="#000" stroke-width="1.5"/>
  <text x="903" y="214" font-family="Georgia,serif" font-size="9" fill="#000" text-anchor="middle">Bleach</text>

  <!-- pH 14: NaOH -->
  <line x1="970" y1="140" x2="970" y2="180" stroke="#000" stroke-width="1.5"/>
  <text x="970" y="194" font-family="Georgia,serif" font-size="9" fill="#000" text-anchor="middle">NaOH</text>
  <text x="970" y="206" font-family="Georgia,serif" font-size="9" fill="#000" text-anchor="middle">conc.</text>

  <!-- [H⁺] concentration scale -->
  <rect x="30" y="240" width="940" height="50" rx="4" fill="none" stroke="#000" stroke-width="1.5"/>
  <text x="500" y="260" font-family="Georgia,serif" font-size="10" font-weight="bold" fill="#000" text-anchor="middle">
        [H⁺] concentration (mol dm⁻³)</text>
  <text x="35" y="280" font-family="Georgia,serif" font-size="9" fill="#000">10⁰</text>
  <text x="97" y="280" font-family="Georgia,serif" font-size="9" fill="#000" text-anchor="middle">10⁻¹</text>
  <text x="231" y="280" font-family="Georgia,serif" font-size="9" fill="#000" text-anchor="middle">10⁻³</text>
  <text x="365" y="280" font-family="Georgia,serif" font-size="9" fill="#000" text-anchor="middle">10⁻⁵</text>
  <text x="500" y="280" font-family="Georgia,serif" font-size="9" fill="#000" text-anchor="middle">10⁻⁷</text>
  <text x="635" y="280" font-family="Georgia,serif" font-size="9" fill="#000" text-anchor="middle">10⁻⁹</text>
  <text x="769" y="280" font-family="Georgia,serif" font-size="9" fill="#000" text-anchor="middle">10⁻¹¹</text>
  <text x="903" y="280" font-family="Georgia,serif" font-size="9" fill="#000" text-anchor="middle">10⁻¹³</text>
  <text x="960" y="280" font-family="Georgia,serif" font-size="9" fill="#000" text-anchor="middle">10⁻¹⁴</text>

  <!-- Formulae panel -->
  <rect x="30" y="308" width="460" height="130" rx="5" fill="none" stroke="#000" stroke-width="1.8"/>
  <text x="260" y="326" font-family="Georgia,serif" font-size="12" font-weight="bold" fill="#000" text-anchor="middle">
        Key Formulae</text>
  <text x="45" y="346" font-family="Georgia,serif" font-size="11" fill="#000">pH = −log₁₀[H⁺]</text>
  <text x="45" y="364" font-family="Georgia,serif" font-size="11" fill="#000">[H⁺] = 10^(−pH)</text>
  <text x="45" y="382" font-family="Georgia,serif" font-size="11" fill="#000">Kw = [H⁺][OH⁻] = 1 × 10⁻¹⁴ mol² dm⁻⁶ (at 25°C)</text>
  <text x="45" y="400" font-family="Georgia,serif" font-size="11" fill="#000">pOH = −log₁₀[OH⁻]</text>
  <text x="45" y="418" font-family="Georgia,serif" font-size="11" fill="#000">pH + pOH = 14  (at 25°C)</text>
  <text x="45" y="430" font-family="Georgia,serif" font-size="10" fill="#333">Temperature affects Kw → neutral pH shifts with T</text>

  <!-- Indicator ranges panel -->
  <rect x="510" y="308" width="460" height="130" rx="5" fill="none" stroke="#000" stroke-width="1.8"/>
  <text x="740" y="326" font-family="Georgia,serif" font-size="12" font-weight="bold" fill="#000" text-anchor="middle">
        Common Indicator Ranges</text>
  <text x="525" y="346" font-family="Georgia,serif" font-size="10" fill="#000">Litmus:           pH 5–8    (red → purple → blue)</text>
  <text x="525" y="362" font-family="Georgia,serif" font-size="10" fill="#000">Phenolphthalein:  pH 8.2–10 (colourless → pink)</text>
  <text x="525" y="378" font-family="Georgia,serif" font-size="10" fill="#000">Methyl orange:    pH 3.1–4.4 (red → orange → yellow)</text>
  <text x="525" y="394" font-family="Georgia,serif" font-size="10" fill="#000">Universal:        pH 1–14   (full colour spectrum)</text>
  <text x="525" y="410" font-family="Georgia,serif" font-size="10" fill="#000">Bromothymol blue: pH 6–7.6  (yellow → green → blue)</text>
  <text x="525" y="426" font-family="Georgia,serif" font-size="10" fill="#333">Choose indicator whose range spans the equivalence point</text>

  <!-- Summary -->
  <rect x="30" y="456" width="940" height="50" rx="5" fill="none" stroke="#000" stroke-width="1.8" stroke-dasharray="5,3"/>
  <text x="500" y="476" font-family="Georgia,serif" font-size="11" font-weight="bold" fill="#000" text-anchor="middle">
        pH &lt; 7 = acidic  |  pH = 7 = neutral (25°C)  |  pH &gt; 7 = alkaline</text>
  <text x="500" y="494" font-family="Georgia,serif" font-size="10" fill="#333" text-anchor="middle">
        Each unit on pH scale = 10× change in [H⁺]  —  logarithmic scale</text>
</svg>`;

// ─── 13. ACID-BASE THEORIES DIAGRAM ──────────────────────────────────────────
static acidBaseTheoriesDiagramSvg = `<?xml version="1.0" encoding="utf-8"?>
<svg version="1.1" xmlns="http://www.w3.org/2000/svg"
     width="1000px" height="800px" viewBox="0 0 1000 800">

  <text x="500" y="28" font-family="Georgia,serif" font-size="16" font-weight="bold"
        fill="#000" text-anchor="middle">Acid-Base Theories Comparison</text>
  <text x="500" y="46" font-family="Georgia,serif" font-size="11" fill="#333" text-anchor="middle">
        Arrhenius  |  Brønsted–Lowry  |  Lewis — scope increases left to right</text>

  <!-- Scope arrow -->
  <line x1="50" y1="62" x2="940" y2="62" stroke="#000" stroke-width="2"/>
  <polygon points="934,57 948,62 934,67" fill="#000"/>
  <text x="500" y="58" font-family="Georgia,serif" font-size="10" fill="#000" text-anchor="middle">
        Increasing scope of definition →</text>

  <!-- ═══════════════════════════════
       ARRHENIUS THEORY
  ═══════════════════════════════ -->
  <rect x="30" y="75" width="285" height="340" rx="6" fill="none" stroke="#000" stroke-width="2.5"/>
  <text x="172" y="96" font-family="Georgia,serif" font-size="13" font-weight="bold" fill="#000" text-anchor="middle">
        ARRHENIUS</text>
  <text x="172" y="112" font-family="Georgia,serif" font-size="10" fill="#333" text-anchor="middle">
        (1884) — aqueous solutions only</text>
  <line x1="40" y1="118" x2="305" y2="118" stroke="#000" stroke-width="1"/>

  <text x="172" y="136" font-family="Georgia,serif" font-size="11" font-weight="bold" fill="#000" text-anchor="middle">
        ACID:</text>
  <text x="45" y="152" font-family="Georgia,serif" font-size="10" fill="#000">
        Produces H⁺ ions in water</text>
  <text x="45" y="168" font-family="Georgia,serif" font-size="10" fill="#000">
        HCl(aq) → H⁺(aq) + Cl⁻(aq)</text>
  <text x="45" y="184" font-family="Georgia,serif" font-size="10" fill="#000">
        H₂SO₄ → 2H⁺ + SO₄²⁻</text>
  <line x1="40" y1="194" x2="305" y2="194" stroke="#000" stroke-width="1" stroke-dasharray="4,2"/>

  <text x="172" y="212" font-family="Georgia,serif" font-size="11" font-weight="bold" fill="#000" text-anchor="middle">
        BASE:</text>
  <text x="45" y="228" font-family="Georgia,serif" font-size="10" fill="#000">
        Produces OH⁻ ions in water</text>
  <text x="45" y="244" font-family="Georgia,serif" font-size="10" fill="#000">
        NaOH(aq) → Na⁺(aq) + OH⁻(aq)</text>
  <text x="45" y="260" font-family="Georgia,serif" font-size="10" fill="#000">
        KOH → K⁺ + OH⁻</text>
  <line x1="40" y1="270" x2="305" y2="270" stroke="#000" stroke-width="1" stroke-dasharray="4,2"/>

  <text x="172" y="288" font-family="Georgia,serif" font-size="11" font-weight="bold" fill="#000" text-anchor="middle">
        LIMITATIONS:</text>
  <text x="45" y="304" font-family="Georgia,serif" font-size="10" fill="#000">• Aqueous solution only</text>
  <text x="45" y="320" font-family="Georgia,serif" font-size="10" fill="#000">• Cannot explain NH₃ as a base</text>
  <text x="45" y="336" font-family="Georgia,serif" font-size="10" fill="#000">• Cannot explain non-aqueous</text>
  <text x="45" y="352" font-family="Georgia,serif" font-size="10" fill="#000">  acid-base reactions</text>
  <text x="45" y="368" font-family="Georgia,serif" font-size="10" fill="#000">• Most restrictive definition</text>
  <text x="45" y="384" font-family="Georgia,serif" font-size="10" fill="#333">• H⁺ is actually H₃O⁺ in water</text>
  <text x="45" y="400" font-family="Georgia,serif" font-size="10" fill="#333">• Neutralisation: H⁺ + OH⁻ → H₂O</text>

  <!-- ═══════════════════════════════
       BRØNSTED-LOWRY THEORY
  ═══════════════════════════════ -->
  <rect x="358" y="75" width="285" height="340" rx="6" fill="none" stroke="#000" stroke-width="2.5"/>
  <text x="500" y="96" font-family="Georgia,serif" font-size="13" font-weight="bold" fill="#000" text-anchor="middle">
        BRØNSTED–LOWRY</text>
  <text x="500" y="112" font-family="Georgia,serif" font-size="10" fill="#333" text-anchor="middle">
        (1923) — proton transfer theory</text>
  <line x1="368" y1="118" x2="633" y2="118" stroke="#000" stroke-width="1"/>

  <text x="500" y="136" font-family="Georgia,serif" font-size="11" font-weight="bold" fill="#000" text-anchor="middle">
        ACID:</text>
  <text x="373" y="152" font-family="Georgia,serif" font-size="10" fill="#000">
        Proton donor (donates H⁺)</text>
  <text x="373" y="168" font-family="Georgia,serif" font-size="10" fill="#000">
        HCl + H₂O → H₃O⁺ + Cl⁻</text>
  <text x="373" y="184" font-family="Georgia,serif" font-size="10" fill="#000">
        (HCl donates H⁺ to water)</text>
  <line x1="368" y1="194" x2="633" y2="194" stroke="#000" stroke-width="1" stroke-dasharray="4,2"/>

  <text x="500" y="212" font-family="Georgia,serif" font-size="11" font-weight="bold" fill="#000" text-anchor="middle">
        BASE:</text>
  <text x="373" y="228" font-family="Georgia,serif" font-size="10" fill="#000">
        Proton acceptor (accepts H⁺)</text>
  <text x="373" y="244" font-family="Georgia,serif" font-size="10" fill="#000">
        NH₃ + H₂O ⇌ NH₄⁺ + OH⁻</text>
  <text x="373" y="260" font-family="Georgia,serif" font-size="10" fill="#000">
        (NH₃ accepts H⁺ from water)</text>
  <line x1="368" y1="270" x2="633" y2="270" stroke="#000" stroke-width="1" stroke-dasharray="4,2"/>

  <text x="500" y="288" font-family="Georgia,serif" font-size="11" font-weight="bold" fill="#000" text-anchor="middle">
        CONJUGATE PAIRS:</text>
  <text x="373" y="304" font-family="Georgia,serif" font-size="10" fill="#000">• Acid loses H⁺ → conjugate base</text>
  <text x="373" y="320" font-family="Georgia,serif" font-size="10" fill="#000">• Base gains H⁺ → conjugate acid</text>
  <text x="373" y="336" font-family="Georgia,serif" font-size="10" fill="#000">• HCl / Cl⁻  |  H₂O / H₃O⁺</text>
  <text x="373" y="352" font-family="Georgia,serif" font-size="10" fill="#000">• NH₃ / NH₄⁺  |  H₂O / OH⁻</text>
  <text x="373" y="368" font-family="Georgia,serif" font-size="10" fill="#000">• Works in any solvent</text>
  <text x="373" y="384" font-family="Georgia,serif" font-size="10" fill="#000">• Amphoteric species (water):</text>
  <text x="373" y="400" font-family="Georgia,serif" font-size="10" fill="#000">  acts as both acid and base</text>

  <!-- ═══════════════════════════════
       LEWIS THEORY
  ═══════════════════════════════ -->
  <rect x="685" y="75" width="285" height="340" rx="6" fill="none" stroke="#000" stroke-width="2.5"/>
  <text x="827" y="96" font-family="Georgia,serif" font-size="13" font-weight="bold" fill="#000" text-anchor="middle">
        LEWIS</text>
  <text x="827" y="112" font-family="Georgia,serif" font-size="10" fill="#333" text-anchor="middle">
        (1923) — electron pair theory</text>
  <line x1="695" y1="118" x2="960" y2="118" stroke="#000" stroke-width="1"/>

  <text x="827" y="136" font-family="Georgia,serif" font-size="11" font-weight="bold" fill="#000" text-anchor="middle">
        ACID:</text>
  <text x="700" y="152" font-family="Georgia,serif" font-size="10" fill="#000">
        Electron pair acceptor</text>
  <text x="700" y="168" font-family="Georgia,serif" font-size="10" fill="#000">
        BF₃ + :NH₃ → F₃B←NH₃</text>
  <text x="700" y="184" font-family="Georgia,serif" font-size="10" fill="#000">
        (BF₃ accepts lone pair)</text>
  <line x1="695" y1="194" x2="960" y2="194" stroke="#000" stroke-width="1" stroke-dasharray="4,2"/>

  <text x="827" y="212" font-family="Georgia,serif" font-size="11" font-weight="bold" fill="#000" text-anchor="middle">
        BASE:</text>
  <text x="700" y="228" font-family="Georgia,serif" font-size="10" fill="#000">
        Electron pair donor</text>
  <text x="700" y="244" font-family="Georgia,serif" font-size="10" fill="#000">
        :NH₃ donates lone pair</text>
  <text x="700" y="260" font-family="Georgia,serif" font-size="10" fill="#000">
        H₂O: donates to H⁺</text>
  <line x1="695" y1="270" x2="960" y2="270" stroke="#000" stroke-width="1" stroke-dasharray="4,2"/>

  <text x="827" y="288" font-family="Georgia,serif" font-size="11" font-weight="bold" fill="#000" text-anchor="middle">
        ADVANTAGES:</text>
  <text x="700" y="304" font-family="Georgia,serif" font-size="10" fill="#000">• Most general definition</text>
  <text x="700" y="320" font-family="Georgia,serif" font-size="10" fill="#000">• Includes reactions without H⁺</text>
  <text x="700" y="336" font-family="Georgia,serif" font-size="10" fill="#000">• Metal ions = Lewis acids</text>
  <text x="700" y="352" font-family="Georgia,serif" font-size="10" fill="#000">  (accept lone pairs from ligands)</text>
  <text x="700" y="368" font-family="Georgia,serif" font-size="10" fill="#000">• Explains complex ion formation</text>
  <text x="700" y="384" font-family="Georgia,serif" font-size="10" fill="#000">• CO₂ + H₂O: CO₂ = Lewis acid</text>
  <text x="700" y="400" font-family="Georgia,serif" font-size="10" fill="#000">• Works in non-aqueous, gas phase</text>

  <!-- Nested circles showing scope -->
  <ellipse cx="500" cy="530" rx="450" ry="80" fill="none" stroke="#000" stroke-width="1.5" stroke-dasharray="6,4"/>
  <text x="900" y="534" font-family="Georgia,serif" font-size="10" fill="#000">Lewis</text>
  <ellipse cx="500" cy="530" rx="320" ry="56" fill="none" stroke="#000" stroke-width="1.5" stroke-dasharray="6,4"/>
  <text x="790" y="534" font-family="Georgia,serif" font-size="10" fill="#000">B-L</text>
  <ellipse cx="500" cy="530" rx="200" ry="36" fill="none" stroke="#000" stroke-width="1.5" stroke-dasharray="6,4"/>
  <text x="670" y="534" font-family="Georgia,serif" font-size="10" fill="#000">Arrhenius</text>
  <text x="500" y="534" font-family="Georgia,serif" font-size="9" fill="#333" text-anchor="middle">
        H⁺/OH⁻ in H₂O</text>

  <!-- Comparison summary table -->
  <rect x="30" y="628" width="940" height="150" rx="5" fill="none" stroke="#000" stroke-width="1.8" stroke-dasharray="5,3"/>
  <text x="500" y="648" font-family="Georgia,serif" font-size="12" font-weight="bold" fill="#000" text-anchor="middle">
        Summary Comparison</text>
  <!-- Headers -->
  <text x="80" y="666" font-family="Georgia,serif" font-size="10" font-weight="bold" fill="#000">Theory</text>
  <text x="230" y="666" font-family="Georgia,serif" font-size="10" font-weight="bold" fill="#000">Acid defined as</text>
  <text x="430" y="666" font-family="Georgia,serif" font-size="10" font-weight="bold" fill="#000">Base defined as</text>
  <text x="660" y="666" font-family="Georgia,serif" font-size="10" font-weight="bold" fill="#000">Medium</text>
  <text x="800" y="666" font-family="Georgia,serif" font-size="10" font-weight="bold" fill="#000">Year</text>
  <line x1="40" y1="670" x2="960" y2="670" stroke="#000" stroke-width="1"/>
  <text x="80" y="686" font-family="Georgia,serif" font-size="10" fill="#000">Arrhenius</text>
  <text x="230" y="686" font-family="Georgia,serif" font-size="10" fill="#000">H⁺ producer in H₂O</text>
  <text x="430" y="686" font-family="Georgia,serif" font-size="10" fill="#000">OH⁻ producer in H₂O</text>
  <text x="660" y="686" font-family="Georgia,serif" font-size="10" fill="#000">Aqueous only</text>
  <text x="800" y="686" font-family="Georgia,serif" font-size="10" fill="#000">1884</text>
  <text x="80" y="706" font-family="Georgia,serif" font-size="10" fill="#000">Brønsted–Lowry</text>
  <text x="230" y="706" font-family="Georgia,serif" font-size="10" fill="#000">Proton (H⁺) donor</text>
  <text x="430" y="706" font-family="Georgia,serif" font-size="10" fill="#000">Proton (H⁺) acceptor</text>
  <text x="660" y="706" font-family="Georgia,serif" font-size="10" fill="#000">Any solvent</text>
  <text x="800" y="706" font-family="Georgia,serif" font-size="10" fill="#000">1923</text>
  <text x="80" y="726" font-family="Georgia,serif" font-size="10" fill="#000">Lewis</text>
  <text x="230" y="726" font-family="Georgia,serif" font-size="10" fill="#000">e⁻ pair acceptor</text>
  <text x="430" y="726" font-family="Georgia,serif" font-size="10" fill="#000">e⁻ pair donor</text>
  <text x="660" y="726" font-family="Georgia,serif" font-size="10" fill="#000">Any medium</text>
  <text x="800" y="726" font-family="Georgia,serif" font-size="10" fill="#000">1923</text>
  <line x1="40" y1="732" x2="960" y2="732" stroke="#000" stroke-width="1"/>
  <text x="500" y="750" font-family="Georgia,serif" font-size="10" fill="#333" text-anchor="middle">
        All Arrhenius acids/bases are Brønsted-Lowry; all B-L acids/bases are Lewis — Lewis is most general</text>
  <text x="500" y="766" font-family="Georgia,serif" font-size="10" fill="#333" text-anchor="middle">
        Amphoteric: H₂O, HSO₄⁻, HCO₃⁻ — can act as either acid or base depending on reaction partner</text>
</svg>`;

// ─── 14. CONJUGATE ACID-BASE PAIRS DIAGRAM ───────────────────────────────────
static conjugateAcidBasePairsSvg = `<?xml version="1.0" encoding="utf-8"?>
<svg version="1.1" xmlns="http://www.w3.org/2000/svg"
     width="1000px" height="600px" viewBox="0 0 1000 600">

  <text x="500" y="28" font-family="Georgia,serif" font-size="16" font-weight="bold"
        fill="#000" text-anchor="middle">Conjugate Acid-Base Pairs</text>
  <text x="500" y="46" font-family="Georgia,serif" font-size="11" fill="#333" text-anchor="middle">
        Brønsted–Lowry: acid donates H⁺ → forms conjugate base  |  base accepts H⁺ → forms conjugate acid</text>

  <!-- General equation box -->
  <rect x="50" y="62" width="900" height="48" rx="5" fill="none" stroke="#000" stroke-width="2"/>
  <text x="500" y="82" font-family="Georgia,serif" font-size="13" font-weight="bold" fill="#000" text-anchor="middle">
        HA  +  B  ⇌  A⁻  +  BH⁺</text>
  <text x="500" y="102" font-family="Georgia,serif" font-size="10" fill="#333" text-anchor="middle">
        Pair 1: HA / A⁻   (acid / conjugate base)     |     Pair 2: BH⁺ / B   (conjugate acid / base)</text>

  <!-- Example 1: HCl + H₂O -->
  <rect x="50" y="128" width="440" height="170" rx="5" fill="none" stroke="#000" stroke-width="2"/>
  <text x="270" y="148" font-family="Georgia,serif" font-size="12" font-weight="bold" fill="#000" text-anchor="middle">
        Example 1: Strong Acid</text>
  <text x="270" y="166" font-family="Georgia,serif" font-size="12" fill="#000" text-anchor="middle">
        HCl  +  H₂O  →  H₃O⁺  +  Cl⁻</text>
  <!-- Pair 1 brace: HCl and Cl⁻ -->
  <path d="M90,180 L90,188 L175,188 L175,180" fill="none" stroke="#000" stroke-width="1.5"/>
  <text x="132" y="202" font-family="Georgia,serif" font-size="9" fill="#000" text-anchor="middle">Pair 1</text>
  <text x="65" y="218" font-family="Georgia,serif" font-size="10" fill="#000">HCl = acid</text>
  <text x="65" y="232" font-family="Georgia,serif" font-size="10" fill="#000">Cl⁻ = conjugate base</text>
  <text x="65" y="248" font-family="Georgia,serif" font-size="10" fill="#333">(differs by 1 H⁺)</text>
  <!-- Pair 2 brace: H₂O and H₃O⁺ -->
  <path d="M225,180 L225,188 L400,188 L400,180" fill="none" stroke="#000" stroke-width="1.5"/>
  <text x="312" y="202" font-family="Georgia,serif" font-size="9" fill="#000" text-anchor="middle">Pair 2</text>
  <text x="230" y="218" font-family="Georgia,serif" font-size="10" fill="#000">H₂O = base</text>
  <text x="230" y="232" font-family="Georgia,serif" font-size="10" fill="#000">H₃O⁺ = conjugate acid</text>
  <text x="230" y="248" font-family="Georgia,serif" font-size="10" fill="#333">(differs by 1 H⁺)</text>
  <!-- H⁺ transfer arrow -->
  <line x1="140" y1="166" x2="260" y2="166" stroke="#000" stroke-width="1.5"/>
  <polygon points="256,161 270,166 256,171" fill="#000"/>
  <text x="200" y="161" font-family="Georgia,serif" font-size="9" fill="#000" text-anchor="middle">H⁺ →</text>
  <!-- Reverse arrow -->
  <line x1="380" y1="172" x2="140" y2="172" stroke="#000" stroke-width="1" stroke-dasharray="4,3"/>
  <polygon points="144,167 130,172 144,177" fill="#000"/>
  <text x="260" y="170" font-family="Georgia,serif" font-size="9" fill="#000" text-anchor="middle">← H⁺ (reverse)</text>
  <text x="270" y="285" font-family="Georgia,serif" font-size="10" fill="#333" text-anchor="middle">Complete dissociation → equilibrium lies far right</text>

  <!-- Example 2: NH₃ + H₂O -->
  <rect x="510" y="128" width="440" height="170" rx="5" fill="none" stroke="#000" stroke-width="2"/>
  <text x="730" y="148" font-family="Georgia,serif" font-size="12" font-weight="bold" fill="#000" text-anchor="middle">
        Example 2: Weak Base</text>
  <text x="730" y="166" font-family="Georgia,serif" font-size="12" fill="#000" text-anchor="middle">
        NH₃  +  H₂O  ⇌  NH₄⁺  +  OH⁻</text>
  <!-- Pair 1 brace: H₂O and OH⁻ -->
  <path d="M548,180 L548,188 L666,188 L666,180" fill="none" stroke="#000" stroke-width="1.5"/>
  <text x="607" y="202" font-family="Georgia,serif" font-size="9" fill="#000" text-anchor="middle">Pair 1</text>
  <text x="523" y="218" font-family="Georgia,serif" font-size="10" fill="#000">H₂O = acid</text>
  <text x="523" y="232" font-family="Georgia,serif" font-size="10" fill="#000">OH⁻ = conjugate base</text>
  <text x="523" y="248" font-family="Georgia,serif" font-size="10" fill="#333">(H₂O donates H⁺)</text>
  <!-- Pair 2 brace: NH₃ and NH₄⁺ -->
  <path d="M700,180 L700,188 L890,188 L890,180" fill="none" stroke="#000" stroke-width="1.5"/>
  <text x="795" y="202" font-family="Georgia,serif" font-size="9" fill="#000" text-anchor="middle">Pair 2</text>
  <text x="705" y="218" font-family="Georgia,serif" font-size="10" fill="#000">NH₃ = base</text>
  <text x="705" y="232" font-family="Georgia,serif" font-size="10" fill="#000">NH₄⁺ = conjugate acid</text>
  <text x="705" y="248" font-family="Georgia,serif" font-size="10" fill="#333">(NH₃ accepts H⁺)</text>
  <!-- H⁺ transfer arrow -->
  <line x1="600" y1="166" x2="720" y2="166" stroke="#000" stroke-width="1.5"/>
  <polygon points="716,161 730,166 716,171" fill="#000"/>
  <text x="660" y="161" font-family="Georgia,serif" font-size="9" fill="#000" text-anchor="middle">H⁺ →</text>
  <!-- Reverse arrow -->
  <line x1="850" y1="172" x2="600" y2="172" stroke="#000" stroke-width="1" stroke-dasharray="4,3"/>
  <polygon points="604,167 590,172 604,177" fill="#000"/>
  <text x="730" y="170" font-family="Georgia,serif" font-size="9" fill="#000" text-anchor="middle">← H⁺ (reverse)</text>
  <text x="730" y="285" font-family="Georgia,serif" font-size="10" fill="#333" text-anchor="middle">Partial dissociation → equilibrium lies left (Kb small)</text>

  <!-- Strength relationship box -->
  <rect x="50" y="316" width="900" height="100" rx="5" fill="none" stroke="#000" stroke-width="1.8"/>
  <text x="500" y="336" font-family="Georgia,serif" font-size="12" font-weight="bold" fill="#000" text-anchor="middle">
        Strength Relationship Between Conjugate Pairs</text>
  <text x="70" y="358" font-family="Georgia,serif" font-size="11" fill="#000">Strong acid ↔ weak conjugate base:      HCl is strong → Cl⁻ is very weak base</text>
  <text x="70" y="376" font-family="Georgia,serif" font-size="11" fill="#000">Weak acid ↔ strong conjugate base:     CH₃COOH is weak → CH₃COO⁻ is stronger base</text>
  <text x="70" y="394" font-family="Georgia,serif" font-size="11" fill="#000">Strong base ↔ weak conjugate acid:     OH⁻ is strong → H₂O is very weak acid</text>
  <text x="70" y="410" font-family="Georgia,serif" font-size="11" fill="#000">Weak base ↔ strong conjugate acid:     NH₃ is weak → NH₄⁺ is a stronger acid</text>

  <!-- Ka × Kb = Kw reminder -->
  <rect x="50" y="432" width="430" height="70" rx="4" fill="none" stroke="#000" stroke-width="1.5"/>
  <text x="265" y="450" font-family="Georgia,serif" font-size="11" font-weight="bold" fill="#000" text-anchor="middle">
        Quantitative Relationship</text>
  <text x="65" y="470" font-family="Georgia,serif" font-size="11" fill="#000">Ka(acid) × Kb(conjugate base) = Kw</text>
  <text x="65" y="488" font-family="Georgia,serif" font-size="10" fill="#333">e.g.  Ka(CH₃COOH) × Kb(CH₃COO⁻) = 10⁻¹⁴</text>
  <text x="65" y="496" font-family="Georgia,serif" font-size="10" fill="#333">∴ pKa + pKb = 14  (at 25°C)</text>

  <!-- Amphoteric species box -->
  <rect x="510" y="432" width="440" height="70" rx="4" fill="none" stroke="#000" stroke-width="1.5"/>
  <text x="730" y="450" font-family="Georgia,serif" font-size="11" font-weight="bold" fill="#000" text-anchor="middle">
        Amphoteric / Amphiprotic Species</text>
  <text x="525" y="468" font-family="Georgia,serif" font-size="10" fill="#000">H₂O, HCO₃⁻, HSO₄⁻, H₂PO₄⁻, HPO₄²⁻</text>
  <text x="525" y="484" font-family="Georgia,serif" font-size="10" fill="#333">Act as acid (donate H⁺) OR base (accept H⁺)</text>
  <text x="525" y="498" font-family="Georgia,serif" font-size="10" fill="#333">depending on reaction partner</text>

  <!-- Summary -->
  <rect x="50" y="516" width="900" height="66" rx="5" fill="none" stroke="#000" stroke-width="1.8" stroke-dasharray="5,3"/>
  <text x="500" y="534" font-family="Georgia,serif" font-size="11" font-weight="bold" fill="#000" text-anchor="middle">
        Identifying Conjugate Pairs: differ by exactly ONE proton (H⁺)</text>
  <text x="500" y="552" font-family="Georgia,serif" font-size="10" fill="#333" text-anchor="middle">
        HA → A⁻ + H⁺  (acid loses H⁺, gains negative charge or loses positive charge)</text>
  <text x="500" y="568" font-family="Georgia,serif" font-size="10" fill="#333" text-anchor="middle">
        B + H⁺ → BH⁺  (base gains H⁺, gains positive charge or loses negative charge)</text>
  <text x="500" y="576" font-family="Georgia,serif" font-size="10" fill="#333" text-anchor="middle">
        Every acid-base reaction involves exactly TWO conjugate pairs</text>
</svg>`;

// ─── 15. STRONG vs WEAK ACIDS DIAGRAM ────────────────────────────────────────
static strongWeakAcidsDiagramSvg = `<?xml version="1.0" encoding="utf-8"?>
<svg version="1.1" xmlns="http://www.w3.org/2000/svg"
     width="1000px" height="600px" viewBox="0 0 1000 600">

  <text x="500" y="28" font-family="Georgia,serif" font-size="16" font-weight="bold"
        fill="#000" text-anchor="middle">Strong vs Weak Acids — Degree of Dissociation</text>
  <text x="500" y="46" font-family="Georgia,serif" font-size="11" fill="#333" text-anchor="middle">
        HCl (strong) vs CH₃COOH (weak) — same initial concentration compared</text>

  <!-- STRONG ACID panel -->
  <rect x="30" y="65" width="450" height="330" rx="6" fill="none" stroke="#000" stroke-width="2.5"/>
  <text x="255" y="86" font-family="Georgia,serif" font-size="13" font-weight="bold" fill="#000" text-anchor="middle">
        STRONG ACID — HCl  (0.1 mol dm⁻³)</text>
  <text x="255" y="104" font-family="Georgia,serif" font-size="11" fill="#333" text-anchor="middle">
        HCl(aq) → H⁺(aq) + Cl⁻(aq)</text>
  <text x="255" y="120" font-family="Georgia,serif" font-size="10" fill="#333" text-anchor="middle">
        (one-way arrow — essentially complete dissociation)</text>

  <!-- Beaker outline -->
  <path d="M80,145 L80,310 Q80,320 90,320 L420,320 Q430,320 430,310 L430,145"
        fill="none" stroke="#000" stroke-width="2"/>
  <line x1="70" y1="145" x2="440" y2="145" stroke="#000" stroke-width="2"/>
  <!-- Solution level -->
  <line x1="82" y1="210" x2="428" y2="210" stroke="#000" stroke-width="1" stroke-dasharray="4,3"/>

  <!-- Many ion symbols -->
  <!-- H+ ions (solid circles) -->
  <circle cx="120" cy="240" r="8" fill="#000"/>
  <text x="120" y="244" font-family="Georgia,serif" font-size="7" fill="#fff" text-anchor="middle">H⁺</text>
  <circle cx="160" cy="260" r="8" fill="#000"/>
  <text x="160" y="264" font-family="Georgia,serif" font-size="7" fill="#fff" text-anchor="middle">H⁺</text>
  <circle cx="200" cy="240" r="8" fill="#000"/>
  <text x="200" y="244" font-family="Georgia,serif" font-size="7" fill="#fff" text-anchor="middle">H⁺</text>
  <circle cx="240" cy="265" r="8" fill="#000"/>
  <text x="240" y="269" font-family="Georgia,serif" font-size="7" fill="#fff" text-anchor="middle">H⁺</text>
  <circle cx="280" cy="245" r="8" fill="#000"/>
  <text x="280" y="249" font-family="Georgia,serif" font-size="7" fill="#fff" text-anchor="middle">H⁺</text>
  <circle cx="320" cy="260" r="8" fill="#000"/>
  <text x="320" y="264" font-family="Georgia,serif" font-size="7" fill="#fff" text-anchor="middle">H⁺</text>
  <circle cx="360" cy="240" r="8" fill="#000"/>
  <text x="360" y="244" font-family="Georgia,serif" font-size="7" fill="#fff" text-anchor="middle">H⁺</text>
  <circle cx="400" cy="260" r="8" fill="#000"/>
  <text x="400" y="264" font-family="Georgia,serif" font-size="7" fill="#fff" text-anchor="middle">H⁺</text>
  <!-- Cl⁻ ions (open circles) -->
  <circle cx="140" cy="280" r="9" fill="none" stroke="#000" stroke-width="2"/>
  <text x="140" y="284" font-family="Georgia,serif" font-size="7" fill="#000" text-anchor="middle">Cl⁻</text>
  <circle cx="185" cy="295" r="9" fill="none" stroke="#000" stroke-width="2"/>
  <text x="185" y="299" font-family="Georgia,serif" font-size="7" fill="#000" text-anchor="middle">Cl⁻</text>
  <circle cx="230" cy="280" r="9" fill="none" stroke="#000" stroke-width="2"/>
  <text x="230" y="284" font-family="Georgia,serif" font-size="7" fill="#000" text-anchor="middle">Cl⁻</text>
  <circle cx="275" cy="295" r="9" fill="none" stroke="#000" stroke-width="2"/>
  <text x="275" y="299" font-family="Georgia,serif" font-size="7" fill="#000" text-anchor="middle">Cl⁻</text>
  <circle cx="320" cy="285" r="9" fill="none" stroke="#000" stroke-width="2"/>
  <text x="320" y="289" font-family="Georgia,serif" font-size="7" fill="#000" text-anchor="middle">Cl⁻</text>
  <circle cx="365" cy="295" r="9" fill="none" stroke="#000" stroke-width="2"/>
  <text x="365" y="299" font-family="Georgia,serif" font-size="7" fill="#000" text-anchor="middle">Cl⁻</text>
  <circle cx="405" cy="285" r="9" fill="none" stroke="#000" stroke-width="2"/>
  <text x="405" y="289" font-family="Georgia,serif" font-size="7" fill="#000" text-anchor="middle">Cl⁻</text>
  <!-- No undissociated HCl molecules shown -->
  <text x="255" y="160" font-family="Georgia,serif" font-size="9" fill="#333" text-anchor="middle">
        No undissociated HCl molecules present</text>

  <!-- Stats -->
  <text x="80" y="342" font-family="Georgia,serif" font-size="10" fill="#000">Dissociation: ~100%   |  [H⁺] = 0.1 mol dm⁻³</text>
  <text x="80" y="358" font-family="Georgia,serif" font-size="10" fill="#000">pH = −log(0.1) = 1.0</text>
  <text x="80" y="374" font-family="Georgia,serif" font-size="10" fill="#000">Ka → very large (essentially infinite)</text>
  <text x="80" y="390" font-family="Georgia,serif" font-size="10" fill="#333">Other strong acids: H₂SO₄, HNO₃, HBr, HI, HClO₄</text>

  <!-- WEAK ACID panel -->
  <rect x="520" y="65" width="450" height="330" rx="6" fill="none" stroke="#000" stroke-width="2.5"/>
  <text x="745" y="86" font-family="Georgia,serif" font-size="13" font-weight="bold" fill="#000" text-anchor="middle">
        WEAK ACID — CH₃COOH  (0.1 mol dm⁻³)</text>
  <text x="745" y="104" font-family="Georgia,serif" font-size="11" fill="#333" text-anchor="middle">
        CH₃COOH(aq) ⇌ H⁺(aq) + CH₃COO⁻(aq)</text>
  <text x="745" y="120" font-family="Georgia,serif" font-size="10" fill="#333" text-anchor="middle">
        (reversible arrow — partial dissociation)</text>

  <!-- Beaker outline -->
  <path d="M565,145 L565,310 Q565,320 575,320 L905,320 Q915,320 915,310 L915,145"
        fill="none" stroke="#000" stroke-width="2"/>
  <line x1="555" y1="145" x2="925" y2="145" stroke="#000" stroke-width="2"/>
  <!-- Solution level -->
  <line x1="567" y1="210" x2="913" y2="210" stroke="#000" stroke-width="1" stroke-dasharray="4,3"/>

  <!-- Many undissociated molecules (large squares), few ions -->
  <!-- CH₃COOH molecules (large squares) -->
  <rect x="590" y="225" width="22" height="22" rx="2" fill="none" stroke="#000" stroke-width="2"/>
  <text x="601" y="240" font-family="Georgia,serif" font-size="7" fill="#000" text-anchor="middle">HA</text>
  <rect x="630" y="245" width="22" height="22" rx="2" fill="none" stroke="#000" stroke-width="2"/>
  <text x="641" y="260" font-family="Georgia,serif" font-size="7" fill="#000" text-anchor="middle">HA</text>
  <rect x="670" y="225" width="22" height="22" rx="2" fill="none" stroke="#000" stroke-width="2"/>
  <text x="681" y="240" font-family="Georgia,serif" font-size="7" fill="#000" text-anchor="middle">HA</text>
  <rect x="710" y="248" width="22" height="22" rx="2" fill="none" stroke="#000" stroke-width="2"/>
  <text x="721" y="263" font-family="Georgia,serif" font-size="7" fill="#000" text-anchor="middle">HA</text>
  <rect x="750" y="230" width="22" height="22" rx="2" fill="none" stroke="#000" stroke-width="2"/>
  <text x="761" y="245" font-family="Georgia,serif" font-size="7" fill="#000" text-anchor="middle">HA</text>
  <rect x="790" y="248" width="22" height="22" rx="2" fill="none" stroke="#000" stroke-width="2"/>
  <text x="801" y="263" font-family="Georgia,serif" font-size="7" fill="#000" text-anchor="middle">HA</text>
  <rect x="830" y="230" width="22" height="22" rx="2" fill="none" stroke="#000" stroke-width="2"/>
  <text x="841" y="245" font-family="Georgia,serif" font-size="7" fill="#000" text-anchor="middle">HA</text>
  <rect x="865" y="245" width="22" height="22" rx="2" fill="none" stroke="#000" stroke-width="2"/>
  <text x="876" y="260" font-family="Georgia,serif" font-size="7" fill="#000" text-anchor="middle">HA</text>
  <!-- Few H+ and CH3COO- ions -->
  <circle cx="620" cy="290" r="8" fill="#000"/>
  <text x="620" y="294" font-family="Georgia,serif" font-size="7" fill="#fff" text-anchor="middle">H⁺</text>
  <circle cx="760" cy="285" r="8" fill="#000"/>
  <text x="760" y="289" font-family="Georgia,serif" font-size="7" fill="#fff" text-anchor="middle">H⁺</text>
  <circle cx="680" cy="295" r="10" fill="none" stroke="#000" stroke-width="2"/>
  <text x="680" y="299" font-family="Georgia,serif" font-size="6" fill="#000" text-anchor="middle">A⁻</text>
  <circle cx="830" cy="292" r="10" fill="none" stroke="#000" stroke-width="2"/>
  <text x="830" y="296" font-family="Georgia,serif" font-size="6" fill="#000" text-anchor="middle">A⁻</text>
  <text x="745" y="160" font-family="Georgia,serif" font-size="9" fill="#333" text-anchor="middle">
        Mostly undissociated molecules present (squares = HA)</text>

  <!-- Stats -->
  <text x="565" y="342" font-family="Georgia,serif" font-size="10" fill="#000">Dissociation: ~1.3%   |  [H⁺] ≈ 0.0013 mol dm⁻³</text>
  <text x="565" y="358" font-family="Georgia,serif" font-size="10" fill="#000">pH ≈ 2.9   |   Ka = 1.8 × 10⁻⁵ mol dm⁻³</text>
  <text x="565" y="374" font-family="Georgia,serif" font-size="10" fill="#000">pKa = −log(Ka) = 4.74</text>
  <text x="565" y="390" font-family="Georgia,serif" font-size="10" fill="#333">Other weak acids: HF, HCN, H₂CO₃, H₂SO₃, RCOOH</text>

  <!-- Comparison summary -->
  <rect x="30" y="412" width="940" height="80" rx="5" fill="none" stroke="#000" stroke-width="1.8" stroke-dasharray="5,3"/>
  <text x="500" y="430" font-family="Georgia,serif" font-size="12" font-weight="bold" fill="#000" text-anchor="middle">
        Key Comparisons (same concentration)</text>
  <text x="50" y="450" font-family="Georgia,serif" font-size="10" fill="#000">
        Property          Strong acid (HCl)              Weak acid (CH₃COOH)</text>
  <line x1="40" y1="455" x2="960" y2="455" stroke="#000" stroke-width="1"/>
  <text x="50" y="470" font-family="Georgia,serif" font-size="10" fill="#000">
        pH                lower (more H⁺)                higher (less H⁺)</text>
  <text x="50" y="484" font-family="Georgia,serif" font-size="10" fill="#000">
        Conductivity      higher (more ions)             lower (fewer ions)</text>

  <!-- Ka expression -->
  <rect x="30" y="506" width="940" height="74" rx="5" fill="none" stroke="#000" stroke-width="1.8"/>
  <text x="500" y="524" font-family="Georgia,serif" font-size="12" font-weight="bold" fill="#000" text-anchor="middle">
        Ka Expression (weak acid equilibrium constant)</text>
  <text x="500" y="544" font-family="Georgia,serif" font-size="12" fill="#000" text-anchor="middle">
        Ka = [H⁺][A⁻] / [HA]     pKa = −log₁₀(Ka)</text>
  <text x="500" y="562" font-family="Georgia,serif" font-size="10" fill="#333" text-anchor="middle">
        Larger Ka → stronger acid  |  Lower pKa → stronger acid  |  Dilution: degree of dissociation increases</text>
  <text x="500" y="576" font-family="Georgia,serif" font-size="10" fill="#333" text-anchor="middle">
        Approximation: [H⁺] ≈ √(Ka × C)  valid when dissociation &lt;5%  —  check validity after calculation</text>
</svg>`;

// ─── 16. BUFFER SOLUTION DIAGRAM ─────────────────────────────────────────────
static bufferSolutionDiagramSvg = `<?xml version="1.0" encoding="utf-8"?>
<svg version="1.1" xmlns="http://www.w3.org/2000/svg"
     width="1000px" height="700px" viewBox="0 0 1000 700">

  <text x="500" y="28" font-family="Georgia,serif" font-size="16" font-weight="bold"
        fill="#000" text-anchor="middle">Buffer Solution</text>
  <text x="500" y="46" font-family="Georgia,serif" font-size="11" fill="#333" text-anchor="middle">
        CH₃COOH / CH₃COO⁻Na⁺ buffer — resists pH change on addition of acid or base</text>

  <!-- Buffer composition box -->
  <rect x="330" y="62" width="340" height="60" rx="5" fill="none" stroke="#000" stroke-width="2"/>
  <text x="500" y="82" font-family="Georgia,serif" font-size="12" font-weight="bold" fill="#000" text-anchor="middle">
        Buffer Components</text>
  <text x="500" y="100" font-family="Georgia,serif" font-size="11" fill="#000" text-anchor="middle">
        Weak acid: CH₃COOH  +  Salt: CH₃COONa</text>
  <text x="500" y="114" font-family="Georgia,serif" font-size="10" fill="#333" text-anchor="middle">
        (large reservoir of both HA and A⁻ present)</text>

  <!-- Three-panel layout: acid added | buffer | base added -->

  <!-- PANEL LEFT: Acid added -->
  <rect x="30" y="140" width="290" height="320" rx="6" fill="none" stroke="#000" stroke-width="2"/>
  <text x="175" y="162" font-family="Georgia,serif" font-size="12" font-weight="bold" fill="#000" text-anchor="middle">
        Add Strong ACID (H⁺)</text>
  <text x="175" y="178" font-family="Georgia,serif" font-size="10" fill="#333" text-anchor="middle">
        e.g. add HCl</text>
  <!-- Arrow down indicating H+ added -->
  <line x1="175" y1="188" x2="175" y2="208" stroke="#000" stroke-width="2"/>
  <polygon points="170,204 175,218 180,204" fill="#000"/>
  <text x="175" y="232" font-family="Georgia,serif" font-size="11" fill="#000" text-anchor="middle">H⁺ + CH₃COO⁻ →</text>
  <text x="175" y="248" font-family="Georgia,serif" font-size="11" fill="#000" text-anchor="middle">CH₃COOH</text>
  <line x1="45" y1="260" x2="305" y2="260" stroke="#000" stroke-width="1"/>
  <text x="175" y="278" font-family="Georgia,serif" font-size="10" fill="#000" text-anchor="middle">• H⁺ consumed by A⁻</text>
  <text x="175" y="294" font-family="Georgia,serif" font-size="10" fill="#000" text-anchor="middle">• [A⁻] decreases slightly</text>
  <text x="175" y="310" font-family="Georgia,serif" font-size="10" fill="#000" text-anchor="middle">• [HA] increases slightly</text>
  <text x="175" y="326" font-family="Georgia,serif" font-size="10" fill="#000" text-anchor="middle">• pH drops only slightly</text>
  <text x="175" y="342" font-family="Georgia,serif" font-size="10" fill="#000" text-anchor="middle">• Effective while A⁻ reserve</text>
  <text x="175" y="358" font-family="Georgia,serif" font-size="10" fill="#000" text-anchor="middle">  not exhausted</text>
  <!-- pH indicator -->
  <text x="175" y="390" font-family="Georgia,serif" font-size="11" font-weight="bold" fill="#000" text-anchor="middle">
        pH: 4.74 → 4.67</text>
  <text x="175" y="408" font-family="Georgia,serif" font-size="10" fill="#333" text-anchor="middle">(small drop, not to pH 1)</text>
  <text x="175" y="424" font-family="Georgia,serif" font-size="10" fill="#333" text-anchor="middle">cf. unbuffered: pH → 1</text>
  <text x="175" y="440" font-family="Georgia,serif" font-size="10" fill="#333" text-anchor="middle">Buffer capacity maintained</text>

  <!-- PANEL CENTRE: Buffer equilibrium -->
  <rect x="355" y="140" width="290" height="320" rx="6" fill="none" stroke="#000" stroke-width="2.5"/>
  <text x="500" y="162" font-family="Georgia,serif" font-size="12" font-weight="bold" fill="#000" text-anchor="middle">
        BUFFER at Equilibrium</text>
  <text x="500" y="180" font-family="Georgia,serif" font-size="11" fill="#000" text-anchor="middle">
        CH₃COOH ⇌ H⁺ + CH₃COO⁻</text>
  <!-- Large reservoir of HA and A- depicted as stacks -->
  <rect x="375" y="195" width="70" height="80" rx="3" fill="none" stroke="#000" stroke-width="2"/>
  <text x="410" y="230" font-family="Georgia,serif" font-size="10" font-weight="bold" fill="#000" text-anchor="middle">CH₃COOH</text>
  <text x="410" y="244" font-family="Georgia,serif" font-size="9" fill="#333" text-anchor="middle">large [HA]</text>
  <text x="410" y="258" font-family="Georgia,serif" font-size="9" fill="#333" text-anchor="middle">reservoir</text>
  <rect x="555" y="195" width="70" height="80" rx="3" fill="none" stroke="#000" stroke-width="2"/>
  <text x="590" y="230" font-family="Georgia,serif" font-size="10" font-weight="bold" fill="#000" text-anchor="middle">CH₃COO⁻</text>
  <text x="590" y="244" font-family="Georgia,serif" font-size="9" fill="#333" text-anchor="middle">large [A⁻]</text>
  <text x="590" y="258" font-family="Georgia,serif" font-size="9" fill="#333" text-anchor="middle">reservoir</text>
  <!-- Double-headed arrow -->
  <line x1="448" y1="235" x2="552" y2="235" stroke="#000" stroke-width="2"/>
  <polygon points="446,230 432,235 446,240" fill="#000"/>
  <polygon points="554,230 568,235 554,240" fill="#000"/>
  <text x="500" y="230" font-family="Georgia,serif" font-size="10" fill="#000" text-anchor="middle">H⁺</text>
  <!-- Henderson-Hasselbalch -->
  <line x1="365" y1="290" x2="635" y2="290" stroke="#000" stroke-width="1"/>
  <text x="500" y="308" font-family="Georgia,serif" font-size="11" font-weight="bold" fill="#000" text-anchor="middle">
        Henderson–Hasselbalch:</text>
  <text x="500" y="326" font-family="Georgia,serif" font-size="12" fill="#000" text-anchor="middle">
        pH = pKa + log([A⁻]/[HA])</text>
  <text x="500" y="346" font-family="Georgia,serif" font-size="10" fill="#333" text-anchor="middle">
        At pH = pKa:  [A⁻] = [HA]</text>
  <text x="500" y="362" font-family="Georgia,serif" font-size="10" fill="#333" text-anchor="middle">
        Max buffer capacity at pH = pKa</text>
  <text x="500" y="390" font-family="Georgia,serif" font-size="11" font-weight="bold" fill="#000" text-anchor="middle">
        Buffer pH ≈ pKa = 4.74</text>
  <text x="500" y="408" font-family="Georgia,serif" font-size="10" fill="#333" text-anchor="middle">
        (for CH₃COOH/CH₃COO⁻)</text>
  <text x="500" y="424" font-family="Georgia,serif" font-size="10" fill="#333" text-anchor="middle">
        Effective range: pKa ± 1</text>
  <text x="500" y="440" font-family="Georgia,serif" font-size="10" fill="#333" text-anchor="middle">
        i.e. pH 3.74–5.74 for this buffer</text>

  <!-- PANEL RIGHT: Base added -->
  <rect x="680" y="140" width="290" height="320" rx="6" fill="none" stroke="#000" stroke-width="2"/>
  <text x="825" y="162" font-family="Georgia,serif" font-size="12" font-weight="bold" fill="#000" text-anchor="middle">
        Add Strong BASE (OH⁻)</text>
  <text x="825" y="178" font-family="Georgia,serif" font-size="10" fill="#333" text-anchor="middle">
        e.g. add NaOH</text>
  <line x1="825" y1="188" x2="825" y2="208" stroke="#000" stroke-width="2"/>
  <polygon points="820,204 825,218 830,204" fill="#000"/>
  <text x="825" y="232" font-family="Georgia,serif" font-size="11" fill="#000" text-anchor="middle">OH⁻ + CH₃COOH →</text>
  <text x="825" y="248" font-family="Georgia,serif" font-size="11" fill="#000" text-anchor="middle">CH₃COO⁻ + H₂O</text>
  <line x1="695" y1="260" x2="960" y2="260" stroke="#000" stroke-width="1"/>
  <text x="825" y="278" font-family="Georgia,serif" font-size="10" fill="#000" text-anchor="middle">• OH⁻ consumed by HA</text>
  <text x="825" y="294" font-family="Georgia,serif" font-size="10" fill="#000" text-anchor="middle">• [HA] decreases slightly</text>
  <text x="825" y="310" font-family="Georgia,serif" font-size="10" fill="#000" text-anchor="middle">• [A⁻] increases slightly</text>
  <text x="825" y="326" font-family="Georgia,serif" font-size="10" fill="#000" text-anchor="middle">• pH rises only slightly</text>
  <text x="825" y="342" font-family="Georgia,serif" font-size="10" fill="#000" text-anchor="middle">• Effective while HA reserve</text>
  <text x="825" y="358" font-family="Georgia,serif" font-size="10" fill="#000" text-anchor="middle">  not exhausted</text>
  <text x="825" y="390" font-family="Georgia,serif" font-size="11" font-weight="bold" fill="#000" text-anchor="middle">
        pH: 4.74 → 4.81</text>
  <text x="825" y="408" font-family="Georgia,serif" font-size="10" fill="#333" text-anchor="middle">(small rise, not to pH 13)</text>
  <text x="825" y="424" font-family="Georgia,serif" font-size="10" fill="#333" text-anchor="middle">cf. unbuffered: pH → 13</text>
  <text x="825" y="440" font-family="Georgia,serif" font-size="10" fill="#333" text-anchor="middle">Buffer capacity maintained</text>

  <!-- Arrows from panels to centre -->
  <line x1="320" y1="300" x2="353" y2="300" stroke="#000" stroke-width="1.5" stroke-dasharray="4,3"/>
  <polygon points="349,295 363,300 349,305" fill="#000"/>
  <line x1="645" y1="300" x2="678" y2="300" stroke="#000" stroke-width="1.5" stroke-dasharray="4,3"/>
  <polygon points="674,295 688,300 674,305" fill="#000"/>

  <!-- Biological examples -->
  <rect x="30" y="478" width="440" height="80" rx="4" fill="none" stroke="#000" stroke-width="1.5"/>
  <text x="250" y="496" font-family="Georgia,serif" font-size="11" font-weight="bold" fill="#000" text-anchor="middle">
        Biological Buffer Systems</text>
  <text x="45" y="514" font-family="Georgia,serif" font-size="10" fill="#000">Blood: H₂CO₃ / HCO₃⁻  (pH 7.35–7.45)</text>
  <text x="45" y="530" font-family="Georgia,serif" font-size="10" fill="#000">Intracellular: H₂PO₄⁻ / HPO₄²⁻  (pH ~7.2)</text>
  <text x="45" y="546" font-family="Georgia,serif" font-size="10" fill="#333">Blood pH &lt;7.35 = acidosis; &gt;7.45 = alkalosis (fatal if extreme)</text>

  <!-- Making a buffer box -->
  <rect x="530" y="478" width="440" height="80" rx="4" fill="none" stroke="#000" stroke-width="1.5"/>
  <text x="750" y="496" font-family="Georgia,serif" font-size="11" font-weight="bold" fill="#000" text-anchor="middle">
        Making a Buffer Solution</text>
  <text x="545" y="514" font-family="Georgia,serif" font-size="10" fill="#000">Method 1: Mix weak acid + its salt (conjugate base)</text>
  <text x="545" y="530" font-family="Georgia,serif" font-size="10" fill="#000">Method 2: Add excess weak acid to NaOH (partial neutralisation)</text>
  <text x="545" y="546" font-family="Georgia,serif" font-size="10" fill="#333">pH set by ratio [A⁻]/[HA] via Henderson–Hasselbalch equation</text>

  <!-- Summary -->
  <rect x="30" y="572" width="940" height="60" rx="5" fill="none" stroke="#000" stroke-width="1.8" stroke-dasharray="5,3"/>
  <text x="500" y="592" font-family="Georgia,serif" font-size="11" font-weight="bold" fill="#000" text-anchor="middle">
        Buffer Action Summary</text>
  <text x="500" y="610" font-family="Georgia,serif" font-size="10" fill="#333" text-anchor="middle">
        Acid added → A⁻ mops up H⁺  |  Base added → HA neutralises OH⁻  |  pH stays approximately constant</text>
  <text x="500" y="626" font-family="Georgia,serif" font-size="10" fill="#333" text-anchor="middle">
        Capacity limited: buffer fails when HA or A⁻ reservoir is exhausted — add too much acid/base</text>
</svg>`;

// ─── 17. TITRATION CURVE DIAGRAM ─────────────────────────────────────────────
static titrationCurveDiagramSvg = `<?xml version="1.0" encoding="utf-8"?>
<svg version="1.1" xmlns="http://www.w3.org/2000/svg"
     width="900px" height="600px" viewBox="0 0 900 600">

  <text x="450" y="28" font-family="Georgia,serif" font-size="16" font-weight="bold"
        fill="#000" text-anchor="middle">Titration Curve — Strong Acid / Strong Base</text>
  <text x="450" y="46" font-family="Georgia,serif" font-size="11" fill="#333" text-anchor="middle">
        25 cm³ of 0.1 mol dm⁻³ HCl titrated with 0.1 mol dm⁻³ NaOH</text>

  <!-- Axes -->
  <line x1="80" y1="490" x2="820" y2="490" stroke="#000" stroke-width="2"/>
  <line x1="80" y1="490" x2="80" y2="60" stroke="#000" stroke-width="2"/>
  <!-- y-axis label -->
  <text x="30" y="280" font-family="Georgia,serif" font-size="13" fill="#000" text-anchor="middle"
        transform="rotate(-90 30 280)">pH</text>
  <!-- x-axis label -->
  <text x="450" y="522" font-family="Georgia,serif" font-size="13" fill="#000" text-anchor="middle">
        Volume of NaOH added (cm³)</text>

  <!-- y-axis ticks -->
  <line x1="74" y1="490" x2="80" y2="490" stroke="#000" stroke-width="2"/>
  <text x="68" y="494" font-family="Georgia,serif" font-size="10" fill="#000" text-anchor="end">0</text>
  <line x1="74" y1="448" x2="80" y2="448" stroke="#000" stroke-width="1.5"/>
  <text x="68" y="452" font-family="Georgia,serif" font-size="10" fill="#000" text-anchor="end">2</text>
  <line x1="74" y1="406" x2="80" y2="406" stroke="#000" stroke-width="1.5"/>
  <text x="68" y="410" font-family="Georgia,serif" font-size="10" fill="#000" text-anchor="end">4</text>
  <line x1="74" y1="364" x2="80" y2="364" stroke="#000" stroke-width="1.5"/>
  <text x="68" y="368" font-family="Georgia,serif" font-size="10" fill="#000" text-anchor="end">6</text>
  <line x1="74" y1="322" x2="80" y2="322" stroke="#000" stroke-width="2.5"/>
  <text x="68" y="326" font-family="Georgia,serif" font-size="10" font-weight="bold" fill="#000" text-anchor="end">7</text>
  <line x1="74" y1="280" x2="80" y2="280" stroke="#000" stroke-width="1.5"/>
  <text x="68" y="284" font-family="Georgia,serif" font-size="10" fill="#000" text-anchor="end">8</text>
  <line x1="74" y1="238" x2="80" y2="238" stroke="#000" stroke-width="1.5"/>
  <text x="68" y="242" font-family="Georgia,serif" font-size="10" fill="#000" text-anchor="end">10</text>
  <line x1="74" y1="196" x2="80" y2="196" stroke="#000" stroke-width="1.5"/>
  <text x="68" y="200" font-family="Georgia,serif" font-size="10" fill="#000" text-anchor="end">12</text>
  <line x1="74" y1="154" x2="80" y2="154" stroke="#000" stroke-width="1.5"/>
  <text x="68" y="158" font-family="Georgia,serif" font-size="10" fill="#000" text-anchor="end">13</text>

  <!-- x-axis ticks: 0 to 50 cm³ mapped to x=80 to x=820 (Δ=14.8/cm³) -->
  <line x1="80" y1="490" x2="80" y2="496" stroke="#000" stroke-width="1.5"/>
  <text x="80" y="508" font-family="Georgia,serif" font-size="10" fill="#000" text-anchor="middle">0</text>
  <line x1="228" y1="490" x2="228" y2="496" stroke="#000" stroke-width="1.5"/>
  <text x="228" y="508" font-family="Georgia,serif" font-size="10" fill="#000" text-anchor="middle">10</text>
  <line x1="376" y1="490" x2="376" y2="496" stroke="#000" stroke-width="1.5"/>
  <text x="376" y="508" font-family="Georgia,serif" font-size="10" fill="#000" text-anchor="middle">20</text>
  <line x1="450" y1="490" x2="450" y2="496" stroke="#000" stroke-width="2"/>
  <text x="450" y="508" font-family="Georgia,serif" font-size="10" font-weight="bold" fill="#000" text-anchor="middle">25</text>
  <line x1="524" y1="490" x2="524" y2="496" stroke="#000" stroke-width="1.5"/>
  <text x="524" y="508" font-family="Georgia,serif" font-size="10" fill="#000" text-anchor="middle">30</text>
  <line x1="672" y1="490" x2="672" y2="496" stroke="#000" stroke-width="1.5"/>
  <text x="672" y="508" font-family="Georgia,serif" font-size="10" fill="#000" text-anchor="middle">40</text>
  <line x1="820" y1="490" x2="820" y2="496" stroke="#000" stroke-width="1.5"/>
  <text x="820" y="508" font-family="Georgia,serif" font-size="10" fill="#000" text-anchor="middle">50</text>

  <!-- Equivalence point dashed lines -->
  <line x1="450" y1="70" x2="450" y2="490" stroke="#000" stroke-width="1.5" stroke-dasharray="8,4"/>
  <line x1="80" y1="322" x2="820" y2="322" stroke="#000" stroke-width="1" stroke-dasharray="4,3"/>

  <!-- TITRATION CURVE: S-shaped sigmoid -->
  <!-- Starting at pH~1 (y≈448), slow rise, then steep near equivalence (x=450,y=322), levels off pH~13 -->
  <path d="M80,448 C140,446 200,440 260,434 C310,428 350,420 390,408
           C415,398 432,375 438,348 C442,330 445,322 450,322
           C455,322 458,314 462,296 C468,269 480,242 510,218
           C550,188 620,168 700,160 C760,155 800,154 820,154"
        fill="none" stroke="#000" stroke-width="3"/>

  <!-- Equivalence point dot -->
  <circle cx="450" cy="322" r="7" fill="#000" stroke="#000" stroke-width="1"/>
  <text x="462" y="318" font-family="Georgia,serif" font-size="10" font-weight="bold" fill="#000">Equivalence point</text>
  <text x="462" y="332" font-family="Georgia,serif" font-size="10" fill="#333">pH = 7  (strong/strong)</text>
  <text x="462" y="346" font-family="Georgia,serif" font-size="10" fill="#333">V(NaOH) = 25 cm³</text>

  <!-- Indicator range panel -->
  <!-- Phenolphthalein range: pH 8.2–10, y=280 to y=238 approx -->
  <rect x="640" y="238" width="160" height="42" rx="3" fill="none" stroke="#000" stroke-width="1.5"/>
  <text x="720" y="255" font-family="Georgia,serif" font-size="9" font-weight="bold" fill="#000" text-anchor="middle">Phenolphthalein</text>
  <text x="720" y="268" font-family="Georgia,serif" font-size="9" fill="#000" text-anchor="middle">pH 8.2–10  ✓ suitable</text>
  <text x="720" y="276" font-family="Georgia,serif" font-size="9" fill="#333" text-anchor="middle">colourless → pink</text>
  <line x1="640" y1="259" x2="620" y2="285" stroke="#000" stroke-width="1" stroke-dasharray="3,2"/>

  <!-- Methyl orange range: pH 3.1–4.4 -->
  <rect x="640" y="388" width="160" height="42" rx="3" fill="none" stroke="#000" stroke-width="1.5"/>
  <text x="720" y="405" font-family="Georgia,serif" font-size="9" font-weight="bold" fill="#000" text-anchor="middle">Methyl orange</text>
  <text x="720" y="418" font-family="Georgia,serif" font-size="9" fill="#000" text-anchor="middle">pH 3.1–4.4  ✓ suitable</text>
  <text x="720" y="426" font-family="Georgia,serif" font-size="9" fill="#333" text-anchor="middle">red → orange → yellow</text>
  <line x1="640" y1="409" x2="620" y2="428" stroke="#000" stroke-width="1" stroke-dasharray="3,2"/>

  <!-- Region labels -->
  <text x="180" y="460" font-family="Georgia,serif" font-size="10" fill="#000" text-anchor="middle">Excess HCl</text>
  <text x="180" y="473" font-family="Georgia,serif" font-size="10" fill="#333" text-anchor="middle">(acidic)</text>
  <text x="640" y="170" font-family="Georgia,serif" font-size="10" fill="#000" text-anchor="middle">Excess NaOH</text>
  <text x="640" y="183" font-family="Georgia,serif" font-size="10" fill="#333" text-anchor="middle">(alkaline)</text>

  <!-- Summary box -->
  <rect x="30" y="540" width="840" height="50" rx="5" fill="none" stroke="#000" stroke-width="1.8" stroke-dasharray="5,3"/>
  <text x="450" y="558" font-family="Georgia,serif" font-size="11" font-weight="bold" fill="#000" text-anchor="middle">
        Key Features: Initial pH = 1  |  Steep region: 24.9–25.1 cm³  |  Equivalence at pH 7  |  Final pH = 13</text>
  <text x="450" y="576" font-family="Georgia,serif" font-size="10" fill="#333" text-anchor="middle">
        Both phenolphthalein and methyl orange suitable — both ranges fall within the steep region of the curve</text>
</svg>`;

// ─── 18. ACID-BASE INDICATORS DIAGRAM ────────────────────────────────────────
static indicatorDiagramSvg = `<?xml version="1.0" encoding="utf-8"?>
<svg version="1.1" xmlns="http://www.w3.org/2000/svg"
     width="1000px" height="700px" viewBox="0 0 1000 700">

  <text x="500" y="28" font-family="Georgia,serif" font-size="16" font-weight="bold"
        fill="#000" text-anchor="middle">Acid-Base Indicators — Colour Change Ranges</text>
  <text x="500" y="46" font-family="Georgia,serif" font-size="11" fill="#333" text-anchor="middle">
        pH ranges for common indicators  |  Each indicator is a weak acid with different pKa</text>

  <!-- pH axis header: 0–14 at x=130 to x=930, total=800px, each unit=57.1px -->
  <rect x="130" y="60" width="800" height="30" rx="0" fill="none" stroke="#000" stroke-width="1.5"/>
  <!-- pH ticks and labels -->
  <text x="130" y="56" font-family="Georgia,serif" font-size="10" fill="#000" text-anchor="middle">0</text>
  <line x1="130" y1="60" x2="130" y2="90" stroke="#000" stroke-width="1.5"/>
  <text x="187" y="56" font-family="Georgia,serif" font-size="10" fill="#000" text-anchor="middle">1</text>
  <line x1="187" y1="60" x2="187" y2="90" stroke="#000" stroke-width="1"/>
  <text x="244" y="56" font-family="Georgia,serif" font-size="10" fill="#000" text-anchor="middle">2</text>
  <line x1="244" y1="60" x2="244" y2="90" stroke="#000" stroke-width="1"/>
  <text x="301" y="56" font-family="Georgia,serif" font-size="10" fill="#000" text-anchor="middle">3</text>
  <line x1="301" y1="60" x2="301" y2="90" stroke="#000" stroke-width="1"/>
  <text x="358" y="56" font-family="Georgia,serif" font-size="10" fill="#000" text-anchor="middle">4</text>
  <line x1="358" y1="60" x2="358" y2="90" stroke="#000" stroke-width="1"/>
  <text x="415" y="56" font-family="Georgia,serif" font-size="10" fill="#000" text-anchor="middle">5</text>
  <line x1="415" y1="60" x2="415" y2="90" stroke="#000" stroke-width="1"/>
  <text x="472" y="56" font-family="Georgia,serif" font-size="10" fill="#000" text-anchor="middle">6</text>
  <line x1="472" y1="60" x2="472" y2="90" stroke="#000" stroke-width="1"/>
  <text x="529" y="56" font-family="Georgia,serif" font-size="11" font-weight="bold" fill="#000" text-anchor="middle">7</text>
  <line x1="529" y1="60" x2="529" y2="90" stroke="#000" stroke-width="2.5"/>
  <text x="586" y="56" font-family="Georgia,serif" font-size="10" fill="#000" text-anchor="middle">8</text>
  <line x1="586" y1="60" x2="586" y2="90" stroke="#000" stroke-width="1"/>
  <text x="643" y="56" font-family="Georgia,serif" font-size="10" fill="#000" text-anchor="middle">9</text>
  <line x1="643" y1="60" x2="643" y2="90" stroke="#000" stroke-width="1"/>
  <text x="700" y="56" font-family="Georgia,serif" font-size="10" fill="#000" text-anchor="middle">10</text>
  <line x1="700" y1="60" x2="700" y2="90" stroke="#000" stroke-width="1"/>
  <text x="757" y="56" font-family="Georgia,serif" font-size="10" fill="#000" text-anchor="middle">11</text>
  <line x1="757" y1="60" x2="757" y2="90" stroke="#000" stroke-width="1"/>
  <text x="814" y="56" font-family="Georgia,serif" font-size="10" fill="#000" text-anchor="middle">12</text>
  <line x1="814" y1="60" x2="814" y2="90" stroke="#000" stroke-width="1"/>
  <text x="871" y="56" font-family="Georgia,serif" font-size="10" fill="#000" text-anchor="middle">13</text>
  <line x1="871" y1="60" x2="871" y2="90" stroke="#000" stroke-width="1"/>
  <text x="930" y="56" font-family="Georgia,serif" font-size="10" fill="#000" text-anchor="middle">14</text>
  <line x1="930" y1="60" x2="930" y2="90" stroke="#000" stroke-width="1.5"/>
  <!-- Neutral line -->
  <line x1="529" y1="90" x2="529" y2="620" stroke="#000" stroke-width="1" stroke-dasharray="5,4"/>
  <text x="529" y="108" font-family="Georgia,serif" font-size="9" fill="#333" text-anchor="middle">neutral</text>

  <!-- Row height = 68px; starting y=115 -->
  <!-- Row 1: Litmus -->
  <text x="120" y="152" font-family="Georgia,serif" font-size="11" font-weight="bold" fill="#000" text-anchor="end">Litmus</text>
  <text x="120" y="165" font-family="Georgia,serif" font-size="9" fill="#333" text-anchor="end">pKa ~ 6.5</text>
  <!-- Red zone: pH 0–5 (x=130 to x=415) -->
  <rect x="130" y="120" width="285" height="34" rx="2" fill="none" stroke="#000" stroke-width="2"/>
  <!-- Hatching for red -->
  <line x1="145" y1="120" x2="130" y2="135" stroke="#000" stroke-width="1"/>
  <line x1="165" y1="120" x2="140" y2="145" stroke="#000" stroke-width="1"/>
  <line x1="185" y1="120" x2="155" y2="150" stroke="#000" stroke-width="1"/>
  <line x1="205" y1="120" x2="175" y2="150" stroke="#000" stroke-width="1"/>
  <line x1="225" y1="120" x2="200" y2="145" stroke="#000" stroke-width="1"/>
  <line x1="250" y1="120" x2="225" y2="145" stroke="#000" stroke-width="1"/>
  <line x1="275" y1="120" x2="250" y2="145" stroke="#000" stroke-width="1"/>
  <line x1="300" y1="120" x2="275" y2="145" stroke="#000" stroke-width="1"/>
  <line x1="325" y1="120" x2="300" y2="145" stroke="#000" stroke-width="1"/>
  <line x1="355" y1="120" x2="325" y2="150" stroke="#000" stroke-width="1"/>
  <line x1="385" y1="120" x2="355" y2="150" stroke="#000" stroke-width="1"/>
  <text x="272" y="142" font-family="Georgia,serif" font-size="10" fill="#000" text-anchor="middle">RED (acidic)</text>
  <!-- Transition: pH 5–8 (x=415 to x=586) -->
  <rect x="415" y="120" width="171" height="34" rx="2" fill="none" stroke="#000" stroke-width="1.5" stroke-dasharray="6,3"/>
  <text x="500" y="142" font-family="Georgia,serif" font-size="9" fill="#000" text-anchor="middle">→ purple →</text>
  <!-- Blue zone: pH 8–14 (x=586 to x=930) -->
  <rect x="586" y="120" width="344" height="34" rx="2" fill="none" stroke="#000" stroke-width="2"/>
  <text x="758" y="142" font-family="Georgia,serif" font-size="10" fill="#000" text-anchor="middle">BLUE (alkaline)</text>

  <!-- Row 2: Methyl orange -->
  <text x="120" y="208" font-family="Georgia,serif" font-size="11" font-weight="bold" fill="#000" text-anchor="end">Methyl orange</text>
  <text x="120" y="221" font-family="Georgia,serif" font-size="9" fill="#333" text-anchor="end">pKa ~ 3.5</text>
  <!-- Red: pH 0–3.1 (x=130 to x=307) -->
  <rect x="130" y="178" width="177" height="34" rx="2" fill="none" stroke="#000" stroke-width="2"/>
  <text x="218" y="200" font-family="Georgia,serif" font-size="10" fill="#000" text-anchor="middle">RED</text>
  <!-- Transition: pH 3.1–4.4 -->
  <rect x="307" y="178" width="80" height="34" rx="2" fill="none" stroke="#000" stroke-width="1.5" stroke-dasharray="6,3"/>
  <text x="347" y="200" font-family="Georgia,serif" font-size="9" fill="#000" text-anchor="middle">orange</text>
  <!-- Yellow: pH 4.4–14 (x=381 to x=930) -->
  <rect x="381" y="178" width="549" height="34" rx="2" fill="none" stroke="#000" stroke-width="2"/>
  <!-- Cross-hatching for yellow zone -->
  <line x1="400" y1="178" x2="381" y2="197" stroke="#000" stroke-width="0.8"/>
  <line x1="430" y1="178" x2="400" y2="208" stroke="#000" stroke-width="0.8"/>
  <line x1="460" y1="178" x2="430" y2="208" stroke="#000" stroke-width="0.8"/>
  <line x1="490" y1="178" x2="460" y2="208" stroke="#000" stroke-width="0.8"/>
  <line x1="520" y1="178" x2="490" y2="208" stroke="#000" stroke-width="0.8"/>
  <line x1="550" y1="178" x2="520" y2="208" stroke="#000" stroke-width="0.8"/>
  <line x1="580" y1="178" x2="550" y2="208" stroke="#000" stroke-width="0.8"/>
  <text x="655" y="200" font-family="Georgia,serif" font-size="10" fill="#000" text-anchor="middle">YELLOW</text>

  <!-- Row 3: Bromothymol blue -->
  <text x="120" y="266" font-family="Georgia,serif" font-size="11" font-weight="bold" fill="#000" text-anchor="end">Bromothymol</text>
  <text x="120" y="279" font-family="Georgia,serif" font-size="9" fill="#333" text-anchor="end">blue  pKa ~ 7</text>
  <!-- Yellow: pH 0–6 -->
  <rect x="130" y="238" width="342" height="34" rx="2" fill="none" stroke="#000" stroke-width="2"/>
  <text x="301" y="260" font-family="Georgia,serif" font-size="10" fill="#000" text-anchor="middle">YELLOW</text>
  <!-- Transition: pH 6–7.6 -->
  <rect x="472" y="238" width="91" height="34" rx="2" fill="none" stroke="#000" stroke-width="1.5" stroke-dasharray="6,3"/>
  <text x="517" y="260" font-family="Georgia,serif" font-size="9" fill="#000" text-anchor="middle">green</text>
  <!-- Blue: pH 7.6–14 -->
  <rect x="563" y="238" width="367" height="34" rx="2" fill="none" stroke="#000" stroke-width="2"/>
  <text x="746" y="260" font-family="Georgia,serif" font-size="10" fill="#000" text-anchor="middle">BLUE</text>

  <!-- Row 4: Phenolphthalein -->
  <text x="120" y="326" font-family="Georgia,serif" font-size="11" font-weight="bold" fill="#000" text-anchor="end">Phenolphthalein</text>
  <text x="120" y="339" font-family="Georgia,serif" font-size="9" fill="#333" text-anchor="end">pKa ~ 9.3</text>
  <!-- Colourless: pH 0–8.2 -->
  <rect x="130" y="298" width="398" height="34" rx="2" fill="none" stroke="#000" stroke-width="2" stroke-dasharray="8,3"/>
  <text x="329" y="320" font-family="Georgia,serif" font-size="10" fill="#000" text-anchor="middle">COLOURLESS</text>
  <!-- Transition: pH 8.2–10 -->
  <rect x="528" y="298" width="103" height="34" rx="2" fill="none" stroke="#000" stroke-width="1.5" stroke-dasharray="6,3"/>
  <text x="580" y="320" font-family="Georgia,serif" font-size="9" fill="#000" text-anchor="middle">faint pink</text>
  <!-- Pink: pH 10–14 -->
  <rect x="631" y="298" width="299" height="34" rx="2" fill="none" stroke="#000" stroke-width="2"/>
  <text x="780" y="320" font-family="Georgia,serif" font-size="10" fill="#000" text-anchor="middle">PINK / MAGENTA</text>

  <!-- Row 5: Universal indicator -->
  <text x="120" y="386" font-family="Georgia,serif" font-size="11" font-weight="bold" fill="#000" text-anchor="end">Universal</text>
  <text x="120" y="399" font-family="Georgia,serif" font-size="9" fill="#333" text-anchor="end">indicator</text>
  <rect x="130" y="358" width="800" height="34" rx="2" fill="none" stroke="#000" stroke-width="2"/>
  <!-- Sections with text labels -->
  <line x1="244" y1="358" x2="244" y2="392" stroke="#000" stroke-width="1"/>
  <line x1="358" y1="358" x2="358" y2="392" stroke="#000" stroke-width="1"/>
  <line x1="472" y1="358" x2="472" y2="392" stroke="#000" stroke-width="1"/>
  <line x1="529" y1="358" x2="529" y2="392" stroke="#000" stroke-width="1"/>
  <line x1="643" y1="358" x2="643" y2="392" stroke="#000" stroke-width="1"/>
  <line x1="757" y1="358" x2="757" y2="392" stroke="#000" stroke-width="1"/>
  <text x="187" y="380" font-family="Georgia,serif" font-size="9" fill="#000" text-anchor="middle">red</text>
  <text x="301" y="380" font-family="Georgia,serif" font-size="9" fill="#000" text-anchor="middle">orange</text>
  <text x="415" y="380" font-family="Georgia,serif" font-size="9" fill="#000" text-anchor="middle">yellow</text>
  <text x="500" y="380" font-family="Georgia,serif" font-size="9" fill="#000" text-anchor="middle">green</text>
  <text x="586" y="380" font-family="Georgia,serif" font-size="9" fill="#000" text-anchor="middle">blue</text>
  <text x="700" y="380" font-family="Georgia,serif" font-size="9" fill="#000" text-anchor="middle">indigo</text>
  <text x="843" y="380" font-family="Georgia,serif" font-size="9" fill="#000" text-anchor="middle">violet</text>

  <!-- Mechanism box -->
  <rect x="30" y="412" width="460" height="110" rx="5" fill="none" stroke="#000" stroke-width="1.8"/>
  <text x="260" y="430" font-family="Georgia,serif" font-size="11" font-weight="bold" fill="#000" text-anchor="middle">
        How Indicators Work</text>
  <text x="45" y="450" font-family="Georgia,serif" font-size="10" fill="#000">Indicator = weak acid  HIn ⇌ H⁺ + In⁻</text>
  <text x="45" y="468" font-family="Georgia,serif" font-size="10" fill="#000">HIn and In⁻ have different colours</text>
  <text x="45" y="486" font-family="Georgia,serif" font-size="10" fill="#000">Low pH: HIn form predominates → acid colour</text>
  <text x="45" y="504" font-family="Georgia,serif" font-size="10" fill="#000">High pH: In⁻ form predominates → base colour</text>
  <text x="45" y="514" font-family="Georgia,serif" font-size="10" fill="#333">Transition range ≈ pKa ± 1 (where [HIn] ≈ [In⁻])</text>

  <!-- Selection guide box -->
  <rect x="510" y="412" width="460" height="110" rx="5" fill="none" stroke="#000" stroke-width="1.8"/>
  <text x="740" y="430" font-family="Georgia,serif" font-size="11" font-weight="bold" fill="#000" text-anchor="middle">
        Choosing the Right Indicator</text>
  <text x="525" y="450" font-family="Georgia,serif" font-size="10" fill="#000">Strong acid/strong base: either phenolphthalein or MO</text>
  <text x="525" y="468" font-family="Georgia,serif" font-size="10" fill="#000">Weak acid/strong base: phenolphthalein (EP pH ~8.5)</text>
  <text x="525" y="486" font-family="Georgia,serif" font-size="10" fill="#000">Strong acid/weak base: methyl orange (EP pH ~5.5)</text>
  <text x="525" y="504" font-family="Georgia,serif" font-size="10" fill="#000">Weak acid/weak base: no simple indicator — use pH meter</text>
  <text x="525" y="514" font-family="Georgia,serif" font-size="10" fill="#333">Indicator range must span the equivalence point</text>

  <!-- Summary -->
  <rect x="30" y="536" width="940" height="50" rx="5" fill="none" stroke="#000" stroke-width="1.8" stroke-dasharray="5,3"/>
  <text x="500" y="556" font-family="Georgia,serif" font-size="11" font-weight="bold" fill="#000" text-anchor="middle">
        Key: Transition range ≈ pKa ± 1  |  Only add 2–3 drops of indicator (it is itself a weak acid)</text>
  <text x="500" y="574" font-family="Georgia,serif" font-size="10" fill="#333" text-anchor="middle">
        Hatched/solid = definite colour  |  Dashed box = transition zone  |  Indicators change over ~2 pH units</text>
</svg>`;

// ─── 19. Ka AND Kb RELATIONSHIP DIAGRAM ──────────────────────────────────────
static kaKbRelationshipSvg = `<?xml version="1.0" encoding="utf-8"?>
<svg version="1.1" xmlns="http://www.w3.org/2000/svg"
     width="900px" height="600px" viewBox="0 0 900 600">

  <text x="450" y="28" font-family="Georgia,serif" font-size="16" font-weight="bold"
        fill="#000" text-anchor="middle">Ka × Kb = Kw Relationship</text>
  <text x="450" y="46" font-family="Georgia,serif" font-size="11" fill="#333" text-anchor="middle">
        Conjugate pair: NH₄⁺ / NH₃  |  Ka(NH₄⁺) × Kb(NH₃) = Kw = 1.0 × 10⁻¹⁴</text>

  <!-- Central equation box -->
  <rect x="270" y="62" width="360" height="56" rx="6" fill="none" stroke="#000" stroke-width="3"/>
  <text x="450" y="86" font-family="Georgia,serif" font-size="18" font-weight="bold" fill="#000" text-anchor="middle">
        Ka × Kb = Kw</text>
  <text x="450" y="108" font-family="Georgia,serif" font-size="12" fill="#333" text-anchor="middle">
        pKa + pKb = pKw = 14  (at 25°C)</text>

  <!-- Ka expression box (left) -->
  <rect x="30" y="140" width="380" height="170" rx="5" fill="none" stroke="#000" stroke-width="2"/>
  <text x="220" y="160" font-family="Georgia,serif" font-size="12" font-weight="bold" fill="#000" text-anchor="middle">
        Ka — Acid dissociation constant</text>
  <text x="220" y="178" font-family="Georgia,serif" font-size="11" fill="#000" text-anchor="middle">
        NH₄⁺(aq) ⇌ H⁺(aq) + NH₃(aq)</text>
  <!-- Ka fraction -->
  <text x="80" y="214" font-family="Georgia,serif" font-size="14" font-weight="bold" fill="#000">Ka =</text>
  <text x="155" y="208" font-family="Georgia,serif" font-size="14" fill="#000">[H⁺][NH₃]</text>
  <line x1="152" y1="213" x2="320" y2="213" stroke="#000" stroke-width="2"/>
  <text x="155" y="228" font-family="Georgia,serif" font-size="14" fill="#000">[NH₄⁺]</text>
  <text x="45" y="252" font-family="Georgia,serif" font-size="10" fill="#000">Ka(NH₄⁺) = 5.6 × 10⁻¹⁰ mol dm⁻³</text>
  <text x="45" y="268" font-family="Georgia,serif" font-size="10" fill="#000">pKa = −log(5.6 × 10⁻¹⁰) = 9.25</text>
  <text x="45" y="284" font-family="Georgia,serif" font-size="10" fill="#333">NH₄⁺ is a weak acid (small Ka)</text>
  <text x="45" y="298" font-family="Georgia,serif" font-size="10" fill="#333">Larger Ka → stronger acid → lower pKa</text>

  <!-- Kb expression box (right) -->
  <rect x="490" y="140" width="380" height="170" rx="5" fill="none" stroke="#000" stroke-width="2"/>
  <text x="680" y="160" font-family="Georgia,serif" font-size="12" font-weight="bold" fill="#000" text-anchor="middle">
        Kb — Base dissociation constant</text>
  <text x="680" y="178" font-family="Georgia,serif" font-size="11" fill="#000" text-anchor="middle">
        NH₃(aq) + H₂O ⇌ NH₄⁺(aq) + OH⁻(aq)</text>
  <!-- Kb fraction -->
  <text x="540" y="214" font-family="Georgia,serif" font-size="14" font-weight="bold" fill="#000">Kb =</text>
  <text x="615" y="208" font-family="Georgia,serif" font-size="14" fill="#000">[NH₄⁺][OH⁻]</text>
  <line x1="612" y1="213" x2="800" y2="213" stroke="#000" stroke-width="2"/>
  <text x="615" y="228" font-family="Georgia,serif" font-size="14" fill="#000">[NH₃]</text>
  <text x="505" y="252" font-family="Georgia,serif" font-size="10" fill="#000">Kb(NH₃) = 1.8 × 10⁻⁵ mol dm⁻³</text>
  <text x="505" y="268" font-family="Georgia,serif" font-size="10" fill="#000">pKb = −log(1.8 × 10⁻⁵) = 4.75</text>
  <text x="505" y="284" font-family="Georgia,serif" font-size="10" fill="#333">NH₃ is a weak base (small Kb)</text>
  <text x="505" y="298" font-family="Georgia,serif" font-size="10" fill="#333">Larger Kb → stronger base → lower pKb</text>

  <!-- Verification box -->
  <rect x="200" y="328" width="500" height="80" rx="5" fill="none" stroke="#000" stroke-width="2"/>
  <text x="450" y="348" font-family="Georgia,serif" font-size="12" font-weight="bold" fill="#000" text-anchor="middle">
        Verification for NH₄⁺/NH₃ pair</text>
  <text x="450" y="368" font-family="Georgia,serif" font-size="11" fill="#000" text-anchor="middle">
        Ka × Kb = (5.6 × 10⁻¹⁰) × (1.8 × 10⁻⁵) = 1.0 × 10⁻¹⁴ ✓</text>
  <text x="450" y="388" font-family="Georgia,serif" font-size="11" fill="#000" text-anchor="middle">
        pKa + pKb = 9.25 + 4.75 = 14.00 ✓</text>

  <!-- Kw definition -->
  <rect x="30" y="424" width="380" height="80" rx="4" fill="none" stroke="#000" stroke-width="1.5"/>
  <text x="220" y="444" font-family="Georgia,serif" font-size="11" font-weight="bold" fill="#000" text-anchor="middle">
        Kw — Water dissociation constant</text>
  <text x="45" y="464" font-family="Georgia,serif" font-size="11" fill="#000">H₂O ⇌ H⁺ + OH⁻</text>
  <text x="45" y="482" font-family="Georgia,serif" font-size="11" fill="#000">Kw = [H⁺][OH⁻] = 1.0 × 10⁻¹⁴ at 25°C</text>
  <text x="45" y="498" font-family="Georgia,serif" font-size="10" fill="#333">Kw increases with temperature (endothermic)</text>

  <!-- Applications box -->
  <rect x="490" y="424" width="380" height="80" rx="4" fill="none" stroke="#000" stroke-width="1.5"/>
  <text x="680" y="444" font-family="Georgia,serif" font-size="11" font-weight="bold" fill="#000" text-anchor="middle">
        Practical Applications</text>
  <text x="505" y="464" font-family="Georgia,serif" font-size="10" fill="#000">If Ka known → Kb = Kw / Ka</text>
  <text x="505" y="480" font-family="Georgia,serif" font-size="10" fill="#000">If pKb known → pKa = 14 − pKb</text>
  <text x="505" y="496" font-family="Georgia,serif" font-size="10" fill="#333">Stronger acid has weaker conjugate base</text>

  <!-- Summary -->
  <rect x="30" y="518" width="840" height="66" rx="5" fill="none" stroke="#000" stroke-width="1.8" stroke-dasharray="5,3"/>
  <text x="450" y="537" font-family="Georgia,serif" font-size="11" font-weight="bold" fill="#000" text-anchor="middle">
        Summary Table of Common Pairs</text>
  <text x="50" y="555" font-family="Georgia,serif" font-size="10" fill="#000">
        Acid pair       Ka               pKa  |  Base pair      Kb               pKb</text>
  <line x1="40" y1="558" x2="860" y2="558" stroke="#000" stroke-width="1"/>
  <text x="50" y="572" font-family="Georgia,serif" font-size="10" fill="#000">
        CH₃COOH/CH₃COO⁻  1.8×10⁻⁵  4.74  |  CH₃COO⁻/CH₃COOH  5.6×10⁻¹⁰  9.26</text>
  <text x="50" y="578" font-family="Georgia,serif" font-size="10" fill="#333">
        NH₄⁺/NH₃  5.6×10⁻¹⁰  9.25  |  NH₃/NH₄⁺  1.8×10⁻⁵  4.75   →  confirms Ka×Kb = 10⁻¹⁴</text>
</svg>`;

// ─── 20. SALT HYDROLYSIS DIAGRAM ─────────────────────────────────────────────
static saltHydrolysisDiagramSvg = `<?xml version="1.0" encoding="utf-8"?>
<svg version="1.1" xmlns="http://www.w3.org/2000/svg"
     width="900px" height="600px" viewBox="0 0 900 600">

  <text x="450" y="28" font-family="Georgia,serif" font-size="16" font-weight="bold"
        fill="#000" text-anchor="middle">Salt Hydrolysis — pH of Salt Solutions</text>
  <text x="450" y="46" font-family="Georgia,serif" font-size="11" fill="#333" text-anchor="middle">
        The pH of a salt solution depends on the strength of the parent acid and base</text>

  <!-- Four-case overview -->
  <!-- Case 1: Strong acid + strong base → neutral salt -->
  <rect x="30" y="65" width="200" height="130" rx="5" fill="none" stroke="#000" stroke-width="2"/>
  <text x="130" y="84" font-family="Georgia,serif" font-size="10" font-weight="bold" fill="#000" text-anchor="middle">Strong acid +</text>
  <text x="130" y="98" font-family="Georgia,serif" font-size="10" font-weight="bold" fill="#000" text-anchor="middle">Strong base</text>
  <line x1="40" y1="104" x2="220" y2="104" stroke="#000" stroke-width="1"/>
  <text x="130" y="120" font-family="Georgia,serif" font-size="10" fill="#000" text-anchor="middle">e.g. NaCl, KNO₃</text>
  <text x="130" y="136" font-family="Georgia,serif" font-size="10" fill="#000" text-anchor="middle">Neither ion</text>
  <text x="130" y="150" font-family="Georgia,serif" font-size="10" fill="#000" text-anchor="middle">hydrolyses water</text>
  <text x="130" y="168" font-family="Georgia,serif" font-size="12" font-weight="bold" fill="#000" text-anchor="middle">pH = 7</text>
  <text x="130" y="186" font-family="Georgia,serif" font-size="10" fill="#333" text-anchor="middle">NEUTRAL</text>

  <!-- Case 2: Strong acid + weak base → acidic salt -->
  <rect x="245" y="65" width="200" height="130" rx="5" fill="none" stroke="#000" stroke-width="2"/>
  <text x="345" y="84" font-family="Georgia,serif" font-size="10" font-weight="bold" fill="#000" text-anchor="middle">Strong acid +</text>
  <text x="345" y="98" font-family="Georgia,serif" font-size="10" font-weight="bold" fill="#000" text-anchor="middle">Weak base</text>
  <line x1="255" y1="104" x2="435" y2="104" stroke="#000" stroke-width="1"/>
  <text x="345" y="120" font-family="Georgia,serif" font-size="10" fill="#000" text-anchor="middle">e.g. NH₄Cl, NH₄NO₃</text>
  <text x="345" y="136" font-family="Georgia,serif" font-size="10" fill="#000" text-anchor="middle">Cation hydrolyses:</text>
  <text x="345" y="150" font-family="Georgia,serif" font-size="10" fill="#000" text-anchor="middle">NH₄⁺ + H₂O ⇌</text>
  <text x="345" y="162" font-family="Georgia,serif" font-size="10" fill="#000" text-anchor="middle">NH₃ + H₃O⁺</text>
  <text x="345" y="178" font-family="Georgia,serif" font-size="12" font-weight="bold" fill="#000" text-anchor="middle">pH &lt; 7</text>
  <text x="345" y="190" font-family="Georgia,serif" font-size="10" fill="#333" text-anchor="middle">ACIDIC</text>

  <!-- Case 3: Weak acid + strong base → alkaline salt -->
  <rect x="460" y="65" width="200" height="130" rx="5" fill="none" stroke="#000" stroke-width="2"/>
  <text x="560" y="84" font-family="Georgia,serif" font-size="10" font-weight="bold" fill="#000" text-anchor="middle">Weak acid +</text>
  <text x="560" y="98" font-family="Georgia,serif" font-size="10" font-weight="bold" fill="#000" text-anchor="middle">Strong base</text>
  <line x1="470" y1="104" x2="650" y2="104" stroke="#000" stroke-width="1"/>
  <text x="560" y="120" font-family="Georgia,serif" font-size="10" fill="#000" text-anchor="middle">e.g. CH₃COONa</text>
  <text x="560" y="136" font-family="Georgia,serif" font-size="10" fill="#000" text-anchor="middle">Anion hydrolyses:</text>
  <text x="560" y="150" font-family="Georgia,serif" font-size="10" fill="#000" text-anchor="middle">CH₃COO⁻ + H₂O ⇌</text>
  <text x="560" y="162" font-family="Georgia,serif" font-size="10" fill="#000" text-anchor="middle">CH₃COOH + OH⁻</text>
  <text x="560" y="178" font-family="Georgia,serif" font-size="12" font-weight="bold" fill="#000" text-anchor="middle">pH &gt; 7</text>
  <text x="560" y="190" font-family="Georgia,serif" font-size="10" fill="#333" text-anchor="middle">ALKALINE</text>

  <!-- Case 4: Weak acid + weak base → depends on Ka vs Kb -->
  <rect x="675" y="65" width="200" height="130" rx="5" fill="none" stroke="#000" stroke-width="2"/>
  <text x="775" y="84" font-family="Georgia,serif" font-size="10" font-weight="bold" fill="#000" text-anchor="middle">Weak acid +</text>
  <text x="775" y="98" font-family="Georgia,serif" font-size="10" font-weight="bold" fill="#000" text-anchor="middle">Weak base</text>
  <line x1="685" y1="104" x2="865" y2="104" stroke="#000" stroke-width="1"/>
  <text x="775" y="120" font-family="Georgia,serif" font-size="10" fill="#000" text-anchor="middle">e.g. CH₃COONH₄</text>
  <text x="775" y="136" font-family="Georgia,serif" font-size="10" fill="#000" text-anchor="middle">Both ions hydrolyse</text>
  <text x="775" y="150" font-family="Georgia,serif" font-size="10" fill="#000" text-anchor="middle">Ka &gt; Kb → acidic</text>
  <text x="775" y="162" font-family="Georgia,serif" font-size="10" fill="#000" text-anchor="middle">Ka = Kb → neutral</text>
  <text x="775" y="178" font-family="Georgia,serif" font-size="12" font-weight="bold" fill="#000" text-anchor="middle">pH varies</text>
  <text x="775" y="190" font-family="Georgia,serif" font-size="10" fill="#333" text-anchor="middle">DEPENDS ON K</text>

  <!-- Worked example: NH4Cl -->
  <rect x="30" y="216" width="840" height="160" rx="5" fill="none" stroke="#000" stroke-width="2"/>
  <text x="450" y="236" font-family="Georgia,serif" font-size="12" font-weight="bold" fill="#000" text-anchor="middle">
        Worked Example: NH₄Cl (aq)  —  0.1 mol dm⁻³</text>
  <text x="50" y="258" font-family="Georgia,serif" font-size="11" fill="#000">Step 1: Identify ions — NH₄⁺ and Cl⁻</text>
  <text x="50" y="276" font-family="Georgia,serif" font-size="11" fill="#000">Step 2: Cl⁻ from strong acid (HCl) — does NOT hydrolyse. NH₄⁺ from weak base (NH₃) — DOES hydrolyse</text>
  <text x="50" y="294" font-family="Georgia,serif" font-size="11" fill="#000">Step 3: NH₄⁺ + H₂O ⇌ NH₃ + H₃O⁺    Ka(NH₄⁺) = Kw / Kb(NH₃) = 10⁻¹⁴ / 1.8×10⁻⁵ = 5.6×10⁻¹⁰</text>
  <text x="50" y="312" font-family="Georgia,serif" font-size="11" fill="#000">Step 4: [H⁺] ≈ √(Ka × C) = √(5.6×10⁻¹⁰ × 0.1) = √(5.6×10⁻¹¹) = 7.5×10⁻⁶ mol dm⁻³</text>
  <text x="50" y="330" font-family="Georgia,serif" font-size="11" fill="#000">Step 5: pH = −log(7.5×10⁻⁶) = 5.13    ✓ acidic as expected for salt of strong acid + weak base</text>
  <text x="50" y="364" font-family="Georgia,serif" font-size="10" fill="#333">Note: approximation [H⁺] = √(Ka×C) valid when Ka &lt;&lt; C (check: dissociation % &lt; 5%)</text>

  <!-- Hydrolysis constant box -->
  <rect x="30" y="392" width="420" height="90" rx="4" fill="none" stroke="#000" stroke-width="1.5"/>
  <text x="240" y="410" font-family="Georgia,serif" font-size="11" font-weight="bold" fill="#000" text-anchor="middle">
        Hydrolysis Constant (Kh)</text>
  <text x="45" y="430" font-family="Georgia,serif" font-size="10" fill="#000">For cation hydrolysis: Kh = Kw / Kb(parent base)</text>
  <text x="45" y="448" font-family="Georgia,serif" font-size="10" fill="#000">For anion hydrolysis:  Kh = Kw / Ka(parent acid)</text>
  <text x="45" y="466" font-family="Georgia,serif" font-size="10" fill="#333">Smaller Kh → less hydrolysis → pH closer to 7</text>
  <text x="45" y="476" font-family="Georgia,serif" font-size="10" fill="#333">Larger Kh → more hydrolysis → greater pH change</text>

  <!-- More examples box -->
  <rect x="470" y="392" width="400" height="90" rx="4" fill="none" stroke="#000" stroke-width="1.5"/>
  <text x="670" y="410" font-family="Georgia,serif" font-size="11" font-weight="bold" fill="#000" text-anchor="middle">
        More Salt Examples</text>
  <text x="485" y="428" font-family="Georgia,serif" font-size="10" fill="#000">NaCl → pH 7  |  KNO₃ → pH 7  (neutral)</text>
  <text x="485" y="446" font-family="Georgia,serif" font-size="10" fill="#000">CH₃COONa → pH ~9  (alkaline)</text>
  <text x="485" y="464" font-family="Georgia,serif" font-size="10" fill="#000">NH₄Cl → pH ~5  |  FeCl₃ → pH ~3 (metal cation)</text>
  <text x="485" y="474" font-family="Georgia,serif" font-size="10" fill="#333">Na₂CO₃ → pH ~11 (strong base, weak acid origin)</text>

  <!-- Summary box -->
  <rect x="30" y="496" width="840" height="88" rx="5" fill="none" stroke="#000" stroke-width="1.8" stroke-dasharray="5,3"/>
  <text x="450" y="516" font-family="Georgia,serif" font-size="11" font-weight="bold" fill="#000" text-anchor="middle">
        Summary: Predicting Salt Solution pH</text>
  <text x="50" y="534" font-family="Georgia,serif" font-size="10" fill="#000">Strong acid + Strong base → neutral (pH 7)  |  Anion from strong acid: Cl⁻, NO₃⁻, SO₄²⁻ do NOT hydrolyse</text>
  <text x="50" y="552" font-family="Georgia,serif" font-size="10" fill="#000">Weak acid + Strong base → alkaline (pH &gt;7)  |  Cation from strong base: Na⁺, K⁺, Ca²⁺ do NOT hydrolyse</text>
  <text x="50" y="570" font-family="Georgia,serif" font-size="10" fill="#000">Strong acid + Weak base → acidic (pH &lt;7)  |  Transition metals: Al³⁺, Fe³⁺ give acidic solutions via hydrolysis</text>
  <text x="50" y="578" font-family="Georgia,serif" font-size="10" fill="#333">pH formula for salt of weak acid/strong base: pH = 7 + ½(pKa)  |  weak base/strong acid: pH = 7 − ½(pKb)</text>
</svg>`;



// ─── 5. ENTHALPY PROFILE DIAGRAM — EXOTHERMIC REACTION ───────────────────────
static enthalpyProfileDiagramSvg = `<?xml version="1.0" encoding="utf-8"?>
<svg version="1.1" xmlns="http://www.w3.org/2000/svg"
     width="800px" height="600px" viewBox="0 0 800 600">

  <!-- Title -->
  <text x="200" y="30" font-family="Georgia,serif" font-size="15" font-weight="bold" fill="#000">Enthalpy Profile Diagram — Exothermic Reaction</text>
  <text x="220" y="48" font-family="Georgia,serif" font-size="10" fill="#000">Energy changes along the reaction coordinate</text>

  <!-- Axes -->
  <!-- Y axis -->
  <line x1="80" y1="60" x2="80" y2="500" stroke="#000" stroke-width="2.5"/>
  <polygon points="75,64 80,50 85,64" fill="#000"/>
  <text x="10" y="200" font-family="Georgia,serif" font-size="12" font-weight="bold" fill="#000"
        transform="rotate(-90 30 280)">Enthalpy H (kJ mol⁻¹)</text>
  <!-- X axis -->
  <line x1="80" y1="500" x2="730" y2="500" stroke="#000" stroke-width="2.5"/>
  <polygon points="726,495 740,500 726,505" fill="#000"/>
  <text x="370" y="530" font-family="Georgia,serif" font-size="12" font-weight="bold" fill="#000" text-anchor="middle">Reaction Coordinate (Progress of Reaction)</text>

  <!-- Reactants energy level: y=200 from x=90 to x=230 -->
  <line x1="90" y1="200" x2="230" y2="200" stroke="#000" stroke-width="3"/>
  <text x="100" y="190" font-family="Georgia,serif" font-size="12" font-weight="bold" fill="#000">Reactants</text>
  <text x="100" y="218" font-family="Georgia,serif" font-size="10" fill="#000">H₁ (higher energy)</text>

  <!-- Transition state peak: apex at (430, 90) -->
  <!-- Smooth curve: reactants → peak → products -->
  <path d="M230,200 C300,200 360,90 430,90 C500,90 560,340 630,340"
        fill="none" stroke="#000" stroke-width="3"/>

  <!-- Transition state marker -->
  <line x1="430" y1="90" x2="430" y2="75" stroke="#000" stroke-width="1.5" stroke-dasharray="4,3"/>
  <text x="440" y="72" font-family="Georgia,serif" font-size="11" font-weight="bold" fill="#000">Transition State ‡</text>
  <text x="440" y="86" font-family="Georgia,serif" font-size="10" fill="#000">(activated complex)</text>
  <!-- Small peak mark -->
  <circle cx="430" cy="90" r="5" fill="#fff" stroke="#000" stroke-width="2"/>

  <!-- Products energy level: y=340 from x=630 to x=720 -->
  <line x1="630" y1="340" x2="720" y2="340" stroke="#000" stroke-width="3"/>
  <text x="632" y="330" font-family="Georgia,serif" font-size="12" font-weight="bold" fill="#000">Products</text>
  <text x="632" y="358" font-family="Georgia,serif" font-size="10" fill="#000">H₂ (lower energy)</text>

  <!-- Activation energy arrow: from reactants level (y=200) up to peak (y=90), at x=300 -->
  <line x1="300" y1="200" x2="300" y2="90" stroke="#000" stroke-width="1.8" stroke-dasharray="5,3"/>
  <polygon points="295,94 300,80 305,94" fill="#000"/>
  <polygon points="295,196 300,210 305,196" fill="#000"/>
  <rect x="210" y="136" width="82" height="28" rx="3" fill="#fff" stroke="#000" stroke-width="1.5"/>
  <text x="251" y="148" font-family="Georgia,serif" font-size="11" font-weight="bold" fill="#000" text-anchor="middle">Eₐ (forward)</text>
  <text x="251" y="160" font-family="Georgia,serif" font-size="10" fill="#000" text-anchor="middle">+80 kJ mol⁻¹</text>

  <!-- ΔH arrow: from reactants (y=200) down to products (y=340), at x=680 -->
  <line x1="680" y1="200" x2="680" y2="340" stroke="#000" stroke-width="1.8" stroke-dasharray="5,3"/>
  <polygon points="675,204 680,190 685,204" fill="#000"/>
  <polygon points="675,336 680,350 685,336" fill="#000"/>
  <!-- Horizontal dashed reference lines -->
  <line x1="90" y1="200" x2="680" y2="200" stroke="#000" stroke-width="1" stroke-dasharray="4,4"/>
  <line x1="630" y1="340" x2="680" y2="340" stroke="#000" stroke-width="1" stroke-dasharray="4,4"/>
  <rect x="686" y="258" width="88" height="28" rx="3" fill="#fff" stroke="#000" stroke-width="1.5"/>
  <text x="730" y="270" font-family="Georgia,serif" font-size="11" font-weight="bold" fill="#000" text-anchor="middle">ΔH reaction</text>
  <text x="730" y="282" font-family="Georgia,serif" font-size="10" fill="#000" text-anchor="middle">−100 kJ mol⁻¹</text>

  <!-- Eₐ reverse arrow annotation -->
  <line x1="560" y1="340" x2="560" y2="90" stroke="#000" stroke-width="1.5" stroke-dasharray="4,3"/>
  <polygon points="555,94 560,80 565,94" fill="#000"/>
  <polygon points="555,336 560,350 565,336" fill="#000"/>
  <rect x="568" y="198" width="88" height="28" rx="3" fill="#fff" stroke="#000" stroke-width="1.5"/>
  <text x="612" y="210" font-family="Georgia,serif" font-size="11" font-weight="bold" fill="#000" text-anchor="middle">Eₐ (reverse)</text>
  <text x="612" y="222" font-family="Georgia,serif" font-size="10" fill="#000" text-anchor="middle">+180 kJ mol⁻¹</text>

  <!-- Info box -->
  <rect x="88" y="390" width="360" height="90" rx="5" fill="#fff" stroke="#000" stroke-width="1.8" stroke-dasharray="5,3"/>
  <text x="100" y="408" font-family="Georgia,serif" font-size="11" font-weight="bold" fill="#000">Key relationships:</text>
  <text x="100" y="424" font-family="Georgia,serif" font-size="10" fill="#000">ΔH = H(products) − H(reactants) = −100 kJ mol⁻¹</text>
  <text x="100" y="440" font-family="Georgia,serif" font-size="10" fill="#000">Eₐ(reverse) = Eₐ(forward) − ΔH = 180 kJ mol⁻¹</text>
  <text x="100" y="456" font-family="Georgia,serif" font-size="10" fill="#000">Exothermic: ΔH &lt; 0, products at lower enthalpy</text>
  <text x="100" y="472" font-family="Georgia,serif" font-size="10" fill="#000">Catalyst lowers Eₐ but does NOT change ΔH</text>

</svg>`;

// ─── 6. BORN-HABER CYCLE DIAGRAM — NaCl ──────────────────────────────────────
static bornHaberCycleDiagramSvg = `<?xml version="1.0" encoding="utf-8"?>
<svg version="1.1" xmlns="http://www.w3.org/2000/svg"
     width="800px" height="800px" viewBox="0 0 800 800">

  <!-- Title -->
  <text x="160" y="30" font-family="Georgia,serif" font-size="15" font-weight="bold" fill="#000">Born-Haber Cycle — NaCl (sodium chloride)</text>
  <text x="130" y="48" font-family="Georgia,serif" font-size="10" fill="#000">Hess's Law applied to ionic compound formation from elements</text>

  <!-- ── ENERGY LEVELS (horizontal lines) ── -->
  <!-- Level 1: Na(s) + ½Cl₂(g) — REFERENCE, y=680 -->
  <line x1="60" y1="680" x2="340" y2="680" stroke="#000" stroke-width="3"/>
  <text x="62" y="696" font-family="Georgia,serif" font-size="11" font-weight="bold" fill="#000">Na(s) + ½Cl₂(g)</text>
  <text x="62" y="710" font-family="Georgia,serif" font-size="10" fill="#000">Elements in standard states</text>

  <!-- Level 2: Na(g) + ½Cl₂(g), y=560 (atomisation of Na: +107) -->
  <line x1="60" y1="560" x2="340" y2="560" stroke="#000" stroke-width="2.5"/>
  <text x="62" y="576" font-family="Georgia,serif" font-size="11" font-weight="bold" fill="#000">Na(g) + ½Cl₂(g)</text>

  <!-- Level 3: Na(g) + Cl(g), y=470 (atomisation of Cl: +122) -->
  <line x1="60" y1="470" x2="340" y2="470" stroke="#000" stroke-width="2.5"/>
  <text x="62" y="486" font-family="Georgia,serif" font-size="11" font-weight="bold" fill="#000">Na(g) + Cl(g)</text>

  <!-- Level 4: Na⁺(g) + Cl(g), y=330 (ionisation energy of Na: +496) -->
  <line x1="60" y1="330" x2="340" y2="330" stroke="#000" stroke-width="2.5"/>
  <text x="62" y="346" font-family="Georgia,serif" font-size="11" font-weight="bold" fill="#000">Na⁺(g) + Cl(g)</text>

  <!-- Level 5: Na⁺(g) + Cl⁻(g), y=390 (electron affinity of Cl: −349, so lower than level 4) -->
  <line x1="420" y1="390" x2="720" y2="390" stroke="#000" stroke-width="2.5"/>
  <text x="422" y="406" font-family="Georgia,serif" font-size="11" font-weight="bold" fill="#000">Na⁺(g) + Cl⁻(g)</text>

  <!-- Level 6: NaCl(s) — product, y=630 (ΔHf = −411 from elements) -->
  <line x1="420" y1="630" x2="720" y2="630" stroke="#000" stroke-width="3"/>
  <text x="422" y="646" font-family="Georgia,serif" font-size="11" font-weight="bold" fill="#000">NaCl(s)</text>
  <text x="422" y="660" font-family="Georgia,serif" font-size="10" fill="#000">ionic solid (product)</text>

  <!-- ── VERTICAL ARROWS WITH LABELS ── -->

  <!-- 1. Atomisation of Na: Na(s)→Na(g), upward, x=120, y=680→560 -->
  <line x1="120" y1="675" x2="120" y2="565" stroke="#000" stroke-width="2"/>
  <polygon points="115,569 120,555 125,569" fill="#000"/>
  <rect x="128" y="604" width="130" height="32" rx="3" fill="#fff" stroke="#000" stroke-width="1.2"/>
  <text x="193" y="616" font-family="Georgia,serif" font-size="10" font-weight="bold" fill="#000" text-anchor="middle">ΔH°atom(Na)</text>
  <text x="193" y="630" font-family="Georgia,serif" font-size="10" fill="#000" text-anchor="middle">+107 kJ mol⁻¹</text>

  <!-- 2. Atomisation of Cl: ½Cl₂(g)→Cl(g), upward, x=120, y=560→470 -->
  <line x1="120" y1="555" x2="120" y2="475" stroke="#000" stroke-width="2"/>
  <polygon points="115,479 120,465 125,479" fill="#000"/>
  <rect x="128" y="500" width="130" height="32" rx="3" fill="#fff" stroke="#000" stroke-width="1.2"/>
  <text x="193" y="512" font-family="Georgia,serif" font-size="10" font-weight="bold" fill="#000" text-anchor="middle">ΔH°atom(½Cl₂)</text>
  <text x="193" y="526" font-family="Georgia,serif" font-size="10" fill="#000" text-anchor="middle">+122 kJ mol⁻¹</text>

  <!-- 3. First ionisation energy of Na: upward, x=120, y=470→330 -->
  <line x1="120" y1="465" x2="120" y2="335" stroke="#000" stroke-width="2"/>
  <polygon points="115,339 120,325 125,339" fill="#000"/>
  <rect x="128" y="384" width="130" height="32" rx="3" fill="#fff" stroke="#000" stroke-width="1.2"/>
  <text x="193" y="396" font-family="Georgia,serif" font-size="10" font-weight="bold" fill="#000" text-anchor="middle">IE₁(Na)</text>
  <text x="193" y="410" font-family="Georgia,serif" font-size="10" fill="#000" text-anchor="middle">+496 kJ mol⁻¹</text>

  <!-- 4. Electron affinity of Cl: Na⁺(g)+Cl(g)→Na⁺(g)+Cl⁻(g)
       Connect level 4 right side to level 5; arrow goes down from y=330 to y=390
       Draw at x=370 bridging the two column groups -->
  <line x1="340" y1="330" x2="420" y2="330" stroke="#000" stroke-width="1.5" stroke-dasharray="4,3"/>
  <line x1="420" y1="330" x2="420" y2="385" stroke="#000" stroke-width="2"/>
  <polygon points="415,381 420,395 425,381" fill="#000"/>
  <rect x="310" y="284" width="130" height="32" rx="3" fill="#fff" stroke="#000" stroke-width="1.2"/>
  <text x="375" y="296" font-family="Georgia,serif" font-size="10" font-weight="bold" fill="#000" text-anchor="middle">Eₐ(Cl)</text>
  <text x="375" y="310" font-family="Georgia,serif" font-size="10" fill="#000" text-anchor="middle">−349 kJ mol⁻¹</text>

  <!-- 5. Lattice enthalpy: Na⁺(g)+Cl⁻(g)→NaCl(s), downward, x=580, y=390→630 -->
  <line x1="580" y1="395" x2="580" y2="625" stroke="#000" stroke-width="2.5"/>
  <polygon points="575,621 580,635 585,621" fill="#000"/>
  <rect x="590" y="494" width="130" height="32" rx="3" fill="#fff" stroke="#000" stroke-width="1.2"/>
  <text x="655" y="506" font-family="Georgia,serif" font-size="10" font-weight="bold" fill="#000" text-anchor="middle">ΔH°latt(NaCl)</text>
  <text x="655" y="520" font-family="Georgia,serif" font-size="10" fill="#000" text-anchor="middle">−787 kJ mol⁻¹</text>

  <!-- 6. Enthalpy of formation (direct route): Na(s)+½Cl₂(g)→NaCl(s)
       Large downward arrow on right side, x=720, y=680→630 -->
  <line x1="60" y1="680" x2="420" y2="680" stroke="#000" stroke-width="1.2" stroke-dasharray="5,4"/>
  <line x1="420" y1="680" x2="420" y2="635" stroke="#000" stroke-width="2.5"/>
  <polygon points="415,639 420,625 425,639" fill="#000"/>
  <rect x="428" y="648" width="140" height="26" rx="3" fill="#fff" stroke="#000" stroke-width="1.5"/>
  <text x="498" y="656" font-family="Georgia,serif" font-size="10" font-weight="bold" fill="#000" text-anchor="middle">ΔH°f(NaCl)</text>
  <text x="498" y="669" font-family="Georgia,serif" font-size="10" fill="#000" text-anchor="middle">−411 kJ mol⁻¹</text>

  <!-- Hess's law equation box -->
  <rect x="60" y="80" width="680" height="80" rx="5" fill="#fff" stroke="#000" stroke-width="2" stroke-dasharray="5,3"/>
  <text x="400" y="102" font-family="Georgia,serif" font-size="12" font-weight="bold" fill="#000" text-anchor="middle">Hess's Law: ΔH°f = ΔH°atom(Na) + ΔH°atom(½Cl₂) + IE₁(Na) + Eₐ(Cl) + ΔH°latt</text>
  <text x="400" y="122" font-family="Georgia,serif" font-size="11" fill="#000" text-anchor="middle">−411 = +107 + 122 + 496 + (−349) + ΔH°latt</text>
  <text x="400" y="142" font-family="Georgia,serif" font-size="11" font-weight="bold" fill="#000" text-anchor="middle">∴  ΔH°latt(NaCl) = −411 − 376 = −787 kJ mol⁻¹</text>

  <!-- Energy axis label -->
  <text x="20" y="500" font-family="Georgia,serif" font-size="11" fill="#000"
        transform="rotate(-90 20 460)">Enthalpy / kJ mol⁻¹</text>
  <line x1="42" y1="720" x2="42" y2="70" stroke="#000" stroke-width="2"/>
  <polygon points="37,74 42,60 47,74" fill="#000"/>

  <!-- Column guides (light dashed) -->
  <line x1="380" y1="170" x2="380" y2="730" stroke="#000" stroke-width="1" stroke-dasharray="3,5"/>

</svg>`;

// ─── 7. HESS'S LAW DIAGRAM ────────────────────────────────────────────────────
static hesssLawDiagramSvg = `<?xml version="1.0" encoding="utf-8"?>
<svg version="1.1" xmlns="http://www.w3.org/2000/svg"
     width="800px" height="700px" viewBox="0 0 800 700">

  <!-- Title -->
  <text x="160" y="28" font-family="Georgia,serif" font-size="15" font-weight="bold" fill="#000">Hess's Law Diagram</text>
  <text x="110" y="46" font-family="Georgia,serif" font-size="10" fill="#000">The total enthalpy change is independent of the route taken — C + O₂ → CO₂</text>

  <!-- ── THREE NODE BOXES ── -->
  <!-- Node A: C(s) + O₂(g), top left, centred at (160, 200) -->
  <rect x="50" y="170" width="220" height="60" rx="6" fill="#fff" stroke="#000" stroke-width="2.5"/>
  <text x="160" y="196" font-family="Georgia,serif" font-size="13" font-weight="bold" fill="#000" text-anchor="middle">C(s) + O₂(g)</text>
  <text x="160" y="214" font-family="Georgia,serif" font-size="10" fill="#000" text-anchor="middle">reactants (elements)</text>

  <!-- Node B: CO(g) + ½O₂(g), bottom left, centred at (160, 480) -->
  <rect x="50" y="450" width="220" height="60" rx="6" fill="#fff" stroke="#000" stroke-width="2.5"/>
  <text x="160" y="476" font-family="Georgia,serif" font-size="13" font-weight="bold" fill="#000" text-anchor="middle">CO(g) + ½O₂(g)</text>
  <text x="160" y="494" font-family="Georgia,serif" font-size="10" fill="#000" text-anchor="middle">intermediate</text>

  <!-- Node C: CO₂(g), right, centred at (620, 340) -->
  <rect x="500" y="310" width="220" height="60" rx="6" fill="#fff" stroke="#000" stroke-width="2.5"/>
  <text x="610" y="336" font-family="Georgia,serif" font-size="13" font-weight="bold" fill="#000" text-anchor="middle">CO₂(g)</text>
  <text x="610" y="354" font-family="Georgia,serif" font-size="10" fill="#000" text-anchor="middle">product</text>

  <!-- ── ROUTE 1: DIRECT A → C (top arrow, thick) ── -->
  <!-- Arrow from A right edge to C left edge -->
  <line x1="270" y1="200" x2="496" y2="328" stroke="#000" stroke-width="3"/>
  <polygon points="490,320 500,338 508,326" fill="#000"/>
  <!-- Route 1 label box -->
  <rect x="320" y="228" width="164" height="42" rx="4" fill="#fff" stroke="#000" stroke-width="2"/>
  <text x="402" y="244" font-family="Georgia,serif" font-size="11" font-weight="bold" fill="#000" text-anchor="middle">Route 1 (direct)</text>
  <text x="402" y="260" font-family="Georgia,serif" font-size="11" fill="#000" text-anchor="middle">C + O₂ → CO₂</text>
  <text x="402" y="272" font-family="Georgia,serif" font-size="11" font-weight="bold" fill="#000" text-anchor="middle">ΔH₁ = −394 kJ mol⁻¹</text>

  <!-- ── ROUTE 2: INDIRECT A → B → C ── -->
  <!-- Arrow A → B (downward left) -->
  <line x1="160" y1="230" x2="160" y2="446" stroke="#000" stroke-width="2.5" stroke-dasharray="8,4"/>
  <polygon points="155,442 160,456 165,442" fill="#000"/>
  <!-- Label A→B -->
  <rect x="168" y="314" width="150" height="42" rx="4" fill="#fff" stroke="#000" stroke-width="1.8"/>
  <text x="243" y="330" font-family="Georgia,serif" font-size="10" font-weight="bold" fill="#000" text-anchor="middle">Step 1 (indirect)</text>
  <text x="243" y="344" font-family="Georgia,serif" font-size="10" fill="#000" text-anchor="middle">C + ½O₂ → CO</text>
  <text x="243" y="356" font-family="Georgia,serif" font-size="10" fill="#000" text-anchor="middle">ΔH₂ = −111 kJ mol⁻¹</text>

  <!-- Arrow B → C -->
  <line x1="270" y1="475" x2="496" y2="358" stroke="#000" stroke-width="2.5" stroke-dasharray="8,4"/>
  <polygon points="490,350 502,362 494,372" fill="#000"/>
  <!-- Label B→C -->
  <rect x="320" y="408" width="164" height="42" rx="4" fill="#fff" stroke="#000" stroke-width="1.8"/>
  <text x="402" y="424" font-family="Georgia,serif" font-size="10" font-weight="bold" fill="#000" text-anchor="middle">Step 2 (indirect)</text>
  <text x="402" y="438" font-family="Georgia,serif" font-size="10" fill="#000" text-anchor="middle">CO + ½O₂ → CO₂</text>
  <text x="402" y="450" font-family="Georgia,serif" font-size="10" fill="#000" text-anchor="middle">ΔH₃ = −283 kJ mol⁻¹</text>

  <!-- Route labels on diagram -->
  <text x="90" y="160" font-family="Georgia,serif" font-size="12" font-weight="bold" fill="#000">ROUTE 2 (indirect): two steps</text>
  <text x="330" y="160" font-family="Georgia,serif" font-size="12" font-weight="bold" fill="#000">ROUTE 1 (direct)</text>

  <!-- ── INFO BOX ── -->
  <rect x="50" y="560" width="700" height="110" rx="6" fill="#fff" stroke="#000" stroke-width="2" stroke-dasharray="5,3"/>
  <text x="400" y="580" font-family="Georgia,serif" font-size="12" font-weight="bold" fill="#000" text-anchor="middle">Hess's Law Statement:</text>
  <text x="400" y="598" font-family="Georgia,serif" font-size="11" fill="#000" text-anchor="middle">The enthalpy change for a reaction is independent of the pathway between reactants and products.</text>
  <text x="400" y="618" font-family="Georgia,serif" font-size="12" font-weight="bold" fill="#000" text-anchor="middle">ΔH₁ = ΔH₂ + ΔH₃</text>
  <text x="400" y="636" font-family="Georgia,serif" font-size="11" fill="#000" text-anchor="middle">−394 = −111 + (−283) = −394 kJ mol⁻¹   ✓</text>
  <text x="400" y="656" font-family="Georgia,serif" font-size="10" fill="#000" text-anchor="middle">Application: calculate unknown ΔH values using known values via an energy cycle</text>

</svg>`;

// ─── 8. BOND ENTHALPY DIAGRAM ─────────────────────────────────────────────────
static bondEnthalpyDiagramSvg = `<?xml version="1.0" encoding="utf-8"?>
<svg version="1.1" xmlns="http://www.w3.org/2000/svg"
     width="800px" height="700px" viewBox="0 0 800 700">

  <!-- Title -->
  <text x="160" y="28" font-family="Georgia,serif" font-size="15" font-weight="bold" fill="#000">Bond Enthalpy Diagram — H₂ + Cl₂ → 2HCl</text>
  <text x="120" y="46" font-family="Georgia,serif" font-size="10" fill="#000">Energy required to break bonds (endothermic) vs energy released forming bonds (exothermic)</text>

  <!-- ── STRUCTURAL EQUATION ROW ── -->
  <!-- H–H  molecule -->
  <circle cx="110" cy="130" r="18" fill="#fff" stroke="#000" stroke-width="2.5"/>
  <text x="110" y="135" font-family="Georgia,serif" font-size="13" font-weight="bold" fill="#000" text-anchor="middle">H</text>
  <line x1="128" y1="130" x2="152" y2="130" stroke="#000" stroke-width="3"/>
  <circle cx="170" cy="130" r="18" fill="#fff" stroke="#000" stroke-width="2.5"/>
  <text x="170" y="135" font-family="Georgia,serif" font-size="13" font-weight="bold" fill="#000" text-anchor="middle">H</text>
  <text x="140" y="164" font-family="Georgia,serif" font-size="10" fill="#000" text-anchor="middle">H–H</text>

  <text x="210" y="135" font-family="Georgia,serif" font-size="20" font-weight="bold" fill="#000">+</text>

  <!-- Cl–Cl molecule -->
  <circle cx="260" cy="130" r="20" fill="#fff" stroke="#000" stroke-width="2.5"/>
  <text x="260" y="135" font-family="Georgia,serif" font-size="12" font-weight="bold" fill="#000" text-anchor="middle">Cl</text>
  <line x1="280" y1="130" x2="304" y2="130" stroke="#000" stroke-width="3"/>
  <circle cx="324" cy="130" r="20" fill="#fff" stroke="#000" stroke-width="2.5"/>
  <text x="324" y="135" font-family="Georgia,serif" font-size="12" font-weight="bold" fill="#000" text-anchor="middle">Cl</text>
  <text x="292" y="166" font-family="Georgia,serif" font-size="10" fill="#000" text-anchor="middle">Cl–Cl</text>

  <text x="362" y="135" font-family="Georgia,serif" font-size="18" fill="#000">→</text>

  <!-- 2 × H–Cl -->
  <circle cx="420" cy="130" r="18" fill="#fff" stroke="#000" stroke-width="2.5"/>
  <text x="420" y="135" font-family="Georgia,serif" font-size="13" font-weight="bold" fill="#000" text-anchor="middle">H</text>
  <line x1="438" y1="130" x2="462" y2="130" stroke="#000" stroke-width="3"/>
  <circle cx="480" cy="130" r="20" fill="#fff" stroke="#000" stroke-width="2.5"/>
  <text x="480" y="135" font-family="Georgia,serif" font-size="12" font-weight="bold" fill="#000" text-anchor="middle">Cl</text>

  <circle cx="560" cy="130" r="18" fill="#fff" stroke="#000" stroke-width="2.5"/>
  <text x="560" y="135" font-family="Georgia,serif" font-size="13" font-weight="bold" fill="#000" text-anchor="middle">H</text>
  <line x1="578" y1="130" x2="602" y2="130" stroke="#000" stroke-width="3"/>
  <circle cx="620" cy="130" r="20" fill="#fff" stroke="#000" stroke-width="2.5"/>
  <text x="620" y="135" font-family="Georgia,serif" font-size="12" font-weight="bold" fill="#000" text-anchor="middle">Cl</text>
  <text x="535" y="166" font-family="Georgia,serif" font-size="10" fill="#000" text-anchor="middle">2 × H–Cl</text>

  <!-- ── ENERGY BAR CHART ── -->
  <!-- Y axis -->
  <line x1="80" y1="200" x2="80" y2="560" stroke="#000" stroke-width="2.5"/>
  <polygon points="75,204 80,190 85,204" fill="#000"/>
  <text x="14" y="420" font-family="Georgia,serif" font-size="11" fill="#000"
        transform="rotate(-90 26 390)">Energy / kJ mol⁻¹</text>
  <!-- X baseline -->
  <line x1="80" y1="560" x2="720" y2="560" stroke="#000" stroke-width="2"/>

  <!-- Bar 1: Breaking H–H bond +436 kJ (upward bar, hatched) -->
  <rect x="120" y="341" width="80" height="219" fill="#fff" stroke="#000" stroke-width="2"/>
  <!-- Hatch lines for endothermic -->
  <line x1="120" y1="341" x2="200" y2="560" stroke="#000" stroke-width="1"/>
  <line x1="140" y1="341" x2="200" y2="501" stroke="#000" stroke-width="1"/>
  <line x1="160" y1="341" x2="200" y2="441" stroke="#000" stroke-width="1"/>
  <line x1="180" y1="341" x2="200" y2="381" stroke="#000" stroke-width="1"/>
  <line x1="120" y1="421" x2="161" y2="341" stroke="#000" stroke-width="1"/>
  <line x1="120" y1="481" x2="121" y2="460" stroke="#000" stroke-width="1"/>
  <text x="160" y="335" font-family="Georgia,serif" font-size="10" font-weight="bold" fill="#000" text-anchor="middle">+436</text>
  <text x="160" y="580" font-family="Georgia,serif" font-size="9" fill="#000" text-anchor="middle">Break H–H</text>

  <!-- Bar 2: Breaking Cl–Cl bond +243 kJ (upward bar, hatched) -->
  <rect x="240" y="435" width="80" height="125" fill="#fff" stroke="#000" stroke-width="2"/>
  <line x1="240" y1="435" x2="320" y2="560" stroke="#000" stroke-width="1"/>
  <line x1="260" y1="435" x2="320" y2="500" stroke="#000" stroke-width="1"/>
  <line x1="280" y1="435" x2="320" y2="440" stroke="#000" stroke-width="1"/>
  <line x1="240" y1="495" x2="263" y2="435" stroke="#000" stroke-width="1"/>
  <text x="280" y="429" font-family="Georgia,serif" font-size="10" font-weight="bold" fill="#000" text-anchor="middle">+243</text>
  <text x="280" y="580" font-family="Georgia,serif" font-size="9" fill="#000" text-anchor="middle">Break Cl–Cl</text>

  <!-- Total bond breaking annotation -->
  <line x1="120" y1="310" x2="320" y2="310" stroke="#000" stroke-width="1.5" stroke-dasharray="5,3"/>
  <text x="220" y="304" font-family="Georgia,serif" font-size="10" font-weight="bold" fill="#000" text-anchor="middle">Total bonds broken = +679 kJ mol⁻¹</text>

  <!-- Bar 3: Forming 2 × H–Cl −864 kJ (downward bars, solid) -->
  <rect x="460" y="560" width="80" height="270" fill="#fff" stroke="#000" stroke-width="2"/>
  <!-- Dense fill lines for exothermic (bonds formed) -->
  <line x1="460" y1="580" x2="540" y2="580" stroke="#000" stroke-width="1"/>
  <line x1="460" y1="600" x2="540" y2="600" stroke="#000" stroke-width="1"/>
  <line x1="460" y1="620" x2="540" y2="620" stroke="#000" stroke-width="1"/>
  <line x1="460" y1="640" x2="540" y2="640" stroke="#000" stroke-width="1"/>
  <line x1="460" y1="660" x2="540" y2="660" stroke="#000" stroke-width="1"/>
  <line x1="460" y1="680" x2="540" y2="680" stroke="#000" stroke-width="1"/>
  <line x1="460" y1="700" x2="540" y2="700" stroke="#000" stroke-width="1"/>
  <line x1="460" y1="720" x2="540" y2="720" stroke="#000" stroke-width="1"/>
  <line x1="460" y1="740" x2="540" y2="740" stroke="#000" stroke-width="1"/>
  <line x1="460" y1="760" x2="540" y2="760" stroke="#000" stroke-width="1"/>
  <line x1="460" y1="780" x2="540" y2="780" stroke="#000" stroke-width="1"/>
  <line x1="460" y1="800" x2="540" y2="800" stroke="#000" stroke-width="1"/>
  <line x1="460" y1="820" x2="540" y2="820" stroke="#000" stroke-width="1"/>
  <text x="500" y="840" font-family="Georgia,serif" font-size="10" font-weight="bold" fill="#000" text-anchor="middle">−864</text>
  <text x="500" y="580" font-family="Georgia,serif" font-size="9" fill="#000" text-anchor="middle">Form 2×H–Cl</text>

  <!-- ΔH net arrow and label -->
  <line x1="620" y1="375" x2="620" y2="555" stroke="#000" stroke-width="2.5"/>
  <polygon points="615,379 620,365 625,379" fill="#000"/>
  <polygon points="615,551 620,565 625,551" fill="#000"/>
  <!-- Reference dashes -->
  <line x1="540" y1="375" x2="620" y2="375" stroke="#000" stroke-width="1.2" stroke-dasharray="4,3"/>
  <line x1="540" y1="555" x2="620" y2="555" stroke="#000" stroke-width="1.2" stroke-dasharray="4,3"/>
  <rect x="628" y="450" width="136" height="44" rx="4" fill="#fff" stroke="#000" stroke-width="1.8"/>
  <text x="696" y="466" font-family="Georgia,serif" font-size="11" font-weight="bold" fill="#000" text-anchor="middle">ΔH reaction</text>
  <text x="696" y="480" font-family="Georgia,serif" font-size="11" fill="#000" text-anchor="middle">= −185 kJ mol⁻¹</text>
  <text x="696" y="492" font-family="Georgia,serif" font-size="9" fill="#000" text-anchor="middle">(exothermic)</text>

  <!-- Summary info box -->
  <rect x="80" y="608" width="520" height="72" rx="5" fill="#fff" stroke="#000" stroke-width="1.8" stroke-dasharray="5,3"/>
  <text x="340" y="626" font-family="Georgia,serif" font-size="11" font-weight="bold" fill="#000" text-anchor="middle">Bond Enthalpy Calculation:</text>
  <text x="340" y="644" font-family="Georgia,serif" font-size="10" fill="#000" text-anchor="middle">ΔH = Σ(bonds broken) − Σ(bonds formed)</text>
  <text x="340" y="660" font-family="Georgia,serif" font-size="10" fill="#000" text-anchor="middle">= [E(H–H) + E(Cl–Cl)] − [2 × E(H–Cl)]</text>
  <text x="340" y="674" font-family="Georgia,serif" font-size="10" fill="#000" text-anchor="middle">= [436 + 243] − [2 × 432] = 679 − 864 = −185 kJ mol⁻¹</text>

</svg>`;

// ─── 9. LATTICE ENTHALPY DIAGRAM — MgO ───────────────────────────────────────
static latticeEnthalpyDiagramSvg = `<?xml version="1.0" encoding="utf-8"?>
<svg version="1.1" xmlns="http://www.w3.org/2000/svg"
     width="800px" height="700px" viewBox="0 0 800 700">

  <!-- Title -->
  <text x="160" y="28" font-family="Georgia,serif" font-size="15" font-weight="bold" fill="#000">Lattice Enthalpy Diagram — MgO</text>
  <text x="100" y="46" font-family="Georgia,serif" font-size="10" fill="#000">Energy released when gaseous ions combine to form 1 mole of ionic lattice</text>

  <!-- Energy axis -->
  <line x1="60" y1="80" x2="60" y2="600" stroke="#000" stroke-width="2.5"/>
  <polygon points="55,84 60,70 65,84" fill="#000"/>
  <text x="14" y="380" font-family="Georgia,serif" font-size="11" fill="#000"
        transform="rotate(-90 20 350)">Enthalpy / kJ mol⁻¹</text>

  <!-- ── ENERGY LEVELS ── -->
  <!-- Level 1 (top): Mg²⁺(g) + O²⁻(g) — gaseous ions y=140 -->
  <line x1="80" y1="140" x2="460" y2="140" stroke="#000" stroke-width="3"/>
  <text x="82" y="128" font-family="Georgia,serif" font-size="12" font-weight="bold" fill="#000">Mg²⁺(g) + O²⁻(g)</text>
  <text x="82" y="156" font-family="Georgia,serif" font-size="10" fill="#000">isolated gaseous ions</text>

  <!-- Level 2 (bottom): MgO(s) ionic lattice y=500 -->
  <line x1="80" y1="500" x2="460" y2="500" stroke="#000" stroke-width="3"/>
  <text x="82" y="520" font-family="Georgia,serif" font-size="12" font-weight="bold" fill="#000">MgO(s)</text>
  <text x="82" y="536" font-family="Georgia,serif" font-size="10" fill="#000">ionic lattice (solid)</text>

  <!-- ── LATTICE ENTHALPY ARROW (downward) ── -->
  <line x1="260" y1="145" x2="260" y2="494" stroke="#000" stroke-width="3"/>
  <polygon points="255,490 260,504 265,490" fill="#000"/>
  <rect x="272" y="296" width="200" height="48" rx="4" fill="#fff" stroke="#000" stroke-width="2"/>
  <text x="372" y="314" font-family="Georgia,serif" font-size="12" font-weight="bold" fill="#000" text-anchor="middle">ΔH°latt(MgO)</text>
  <text x="372" y="330" font-family="Georgia,serif" font-size="12" fill="#000" text-anchor="middle">−3791 kJ mol⁻¹</text>
  <text x="372" y="344" font-family="Georgia,serif" font-size="10" fill="#000" text-anchor="middle">(exothermic, very large)</text>

  <!-- Reverse arrow (endothermic, lattice dissociation) -->
  <line x1="220" y1="494" x2="220" y2="146" stroke="#000" stroke-width="1.8" stroke-dasharray="7,4"/>
  <polygon points="215,150 220,136 225,150" fill="#000"/>
  <text x="136" y="302" font-family="Georgia,serif" font-size="10" fill="#000" text-anchor="middle">Lattice</text>
  <text x="136" y="316" font-family="Georgia,serif" font-size="10" fill="#000" text-anchor="middle">dissociation</text>
  <text x="136" y="330" font-family="Georgia,serif" font-size="10" fill="#000" text-anchor="middle">+3791 kJ mol⁻¹</text>

  <!-- ── IONIC LATTICE DIAGRAM (right side) ── -->
  <!-- Simple 3×3 grid of alternating ions -->
  <text x="560" y="120" font-family="Georgia,serif" font-size="12" font-weight="bold" fill="#000" text-anchor="middle">MgO Lattice Structure</text>
  <!-- Row of circles representing Mg²⁺ and O²⁻ alternating -->
  <!-- Row 1 -->
  <circle cx="520" cy="170" r="22" fill="#fff" stroke="#000" stroke-width="2.5"/>
  <text x="520" y="175" font-family="Georgia,serif" font-size="10" fill="#000" text-anchor="middle">Mg²⁺</text>
  <circle cx="590" cy="170" r="28" fill="#fff" stroke="#000" stroke-width="2" stroke-dasharray="4,2"/>
  <text x="590" y="175" font-family="Georgia,serif" font-size="10" fill="#000" text-anchor="middle">O²⁻</text>
  <circle cx="666" cy="170" r="22" fill="#fff" stroke="#000" stroke-width="2.5"/>
  <text x="666" y="175" font-family="Georgia,serif" font-size="10" fill="#000" text-anchor="middle">Mg²⁺</text>
  <!-- Row 2 -->
  <circle cx="520" cy="250" r="28" fill="#fff" stroke="#000" stroke-width="2" stroke-dasharray="4,2"/>
  <text x="520" y="255" font-family="Georgia,serif" font-size="10" fill="#000" text-anchor="middle">O²⁻</text>
  <circle cx="590" cy="250" r="22" fill="#fff" stroke="#000" stroke-width="2.5"/>
  <text x="590" y="255" font-family="Georgia,serif" font-size="10" fill="#000" text-anchor="middle">Mg²⁺</text>
  <circle cx="666" cy="250" r="28" fill="#fff" stroke="#000" stroke-width="2" stroke-dasharray="4,2"/>
  <text x="666" y="255" font-family="Georgia,serif" font-size="10" fill="#000" text-anchor="middle">O²⁻</text>
  <!-- Row 3 -->
  <circle cx="520" cy="330" r="22" fill="#fff" stroke="#000" stroke-width="2.5"/>
  <text x="520" y="335" font-family="Georgia,serif" font-size="10" fill="#000" text-anchor="middle">Mg²⁺</text>
  <circle cx="590" cy="330" r="28" fill="#fff" stroke="#000" stroke-width="2" stroke-dasharray="4,2"/>
  <text x="590" y="335" font-family="Georgia,serif" font-size="10" fill="#000" text-anchor="middle">O²⁻</text>
  <circle cx="666" cy="330" r="22" fill="#fff" stroke="#000" stroke-width="2.5"/>
  <text x="666" y="335" font-family="Georgia,serif" font-size="10" fill="#000" text-anchor="middle">Mg²⁺</text>
  <!-- Bond lines between ions in lattice -->
  <line x1="542" y1="170" x2="562" y2="170" stroke="#000" stroke-width="1.5"/>
  <line x1="618" y1="170" x2="644" y2="170" stroke="#000" stroke-width="1.5"/>
  <line x1="548" y1="250" x2="568" y2="250" stroke="#000" stroke-width="1.5"/>
  <line x1="612" y1="250" x2="638" y2="250" stroke="#000" stroke-width="1.5"/>
  <line x1="542" y1="330" x2="562" y2="330" stroke="#000" stroke-width="1.5"/>
  <line x1="618" y1="330" x2="644" y2="330" stroke="#000" stroke-width="1.5"/>
  <line x1="520" y1="192" x2="520" y2="222" stroke="#000" stroke-width="1.5"/>
  <line x1="590" y1="198" x2="590" y2="228" stroke="#000" stroke-width="1.5"/>
  <line x1="666" y1="192" x2="666" y2="222" stroke="#000" stroke-width="1.5"/>
  <line x1="520" y1="278" x2="520" y2="308" stroke="#000" stroke-width="1.5"/>
  <line x1="590" y1="272" x2="590" y2="308" stroke="#000" stroke-width="1.5"/>
  <line x1="666" y1="278" x2="666" y2="302" stroke="#000" stroke-width="1.5"/>

  <!-- Factors affecting lattice enthalpy box -->
  <rect x="480" y="380" width="290" height="160" rx="5" fill="#fff" stroke="#000" stroke-width="2" stroke-dasharray="5,3"/>
  <text x="625" y="400" font-family="Georgia,serif" font-size="12" font-weight="bold" fill="#000" text-anchor="middle">Factors Affecting ΔH°latt:</text>
  <text x="492" y="420" font-family="Georgia,serif" font-size="11" fill="#000">1. Ionic charge: larger charge →</text>
  <text x="508" y="436" font-family="Georgia,serif" font-size="11" fill="#000">   more negative ΔH°latt</text>
  <text x="492" y="454" font-family="Georgia,serif" font-size="11" fill="#000">2. Ionic radius: smaller ion →</text>
  <text x="508" y="470" font-family="Georgia,serif" font-size="11" fill="#000">   more negative ΔH°latt</text>
  <text x="492" y="488" font-family="Georgia,serif" font-size="11" fill="#000">3. MgO &gt; NaCl: Mg²⁺/O²⁻ have</text>
  <text x="508" y="504" font-family="Georgia,serif" font-size="11" fill="#000">   2+ charges &amp; small radii</text>
  <text x="492" y="522" font-family="Georgia,serif" font-size="10" fill="#000">   ΔH°latt(MgO)=−3791 vs NaCl=−787</text>

  <!-- Summary box -->
  <rect x="60" y="580" width="700" height="90" rx="5" fill="#fff" stroke="#000" stroke-width="1.8" stroke-dasharray="5,3"/>
  <text x="400" y="598" font-family="Georgia,serif" font-size="11" font-weight="bold" fill="#000" text-anchor="middle">Definition: Lattice Enthalpy (ΔH°latt)</text>
  <text x="400" y="616" font-family="Georgia,serif" font-size="10" fill="#000" text-anchor="middle">The enthalpy change when 1 mole of ionic compound forms from its gaseous ions under standard conditions.</text>
  <text x="400" y="634" font-family="Georgia,serif" font-size="10" fill="#000" text-anchor="middle">Mg²⁺(g) + O²⁻(g) → MgO(s)   ΔH°latt = −3791 kJ mol⁻¹</text>
  <text x="400" y="652" font-family="Georgia,serif" font-size="10" fill="#000" text-anchor="middle">Always exothermic (negative). Cannot be measured directly — obtained via Born-Haber cycle.</text>
  <text x="400" y="664" font-family="Georgia,serif" font-size="10" fill="#000" text-anchor="middle">Large magnitude → strong ionic lattice → high mp/bp, low solubility</text>

</svg>`;

// ─── 10. ENTHALPY OF SOLUTION DIAGRAM ────────────────────────────────────────
static enthalpyOfSolutionDiagramSvg = `<?xml version="1.0" encoding="utf-8"?>
<svg version="1.1" xmlns="http://www.w3.org/2000/svg"
     width="800px" height="700px" viewBox="0 0 800 700">

  <!-- Title -->
  <text x="140" y="28" font-family="Georgia,serif" font-size="15" font-weight="bold" fill="#000">Enthalpy of Solution Diagram — NaCl(s) in Water</text>
  <text x="100" y="46" font-family="Georgia,serif" font-size="10" fill="#000">Relationship between lattice enthalpy, hydration enthalpy, and enthalpy of solution</text>

  <!-- Energy axis -->
  <line x1="60" y1="80" x2="60" y2="580" stroke="#000" stroke-width="2.5"/>
  <polygon points="55,84 60,70 65,84" fill="#000"/>
  <text x="14" y="380" font-family="Georgia,serif" font-size="11" fill="#000"
        transform="rotate(-90 20 340)">Enthalpy / kJ mol⁻¹</text>

  <!-- ── ENERGY LEVELS ── -->
  <!-- Level A: Na⁺(g) + Cl⁻(g), y=130 (gaseous ions — highest) -->
  <line x1="80" y1="130" x2="380" y2="130" stroke="#000" stroke-width="3"/>
  <text x="82" y="118" font-family="Georgia,serif" font-size="12" font-weight="bold" fill="#000">Na⁺(g) + Cl⁻(g)</text>
  <text x="82" y="148" font-family="Georgia,serif" font-size="10" fill="#000">gaseous ions</text>

  <!-- Level B: NaCl(s) + H₂O(l), y=340 (solid + water — intermediate) -->
  <line x1="80" y1="340" x2="380" y2="340" stroke="#000" stroke-width="3"/>
  <text x="82" y="328" font-family="Georgia,serif" font-size="12" font-weight="bold" fill="#000">NaCl(s) + H₂O(l)</text>
  <text x="82" y="358" font-family="Georgia,serif" font-size="10" fill="#000">solid + solvent (reference)</text>

  <!-- Level C: Na⁺(aq) + Cl⁻(aq), y=360 (hydrated ions — lowest) -->
  <line x1="420" y1="360" x2="720" y2="360" stroke="#000" stroke-width="3"/>
  <text x="422" y="348" font-family="Georgia,serif" font-size="12" font-weight="bold" fill="#000">Na⁺(aq) + Cl⁻(aq)</text>
  <text x="422" y="376" font-family="Georgia,serif" font-size="10" fill="#000">hydrated ions in solution</text>

  <!-- ── ARROW 1: Lattice dissociation A←B (endothermic, upward) ── -->
  <!-- B to A: NaCl(s) → Na⁺(g) + Cl⁻(g) -->
  <line x1="170" y1="335" x2="170" y2="136" stroke="#000" stroke-width="2.5"/>
  <polygon points="165,140 170,126 175,140" fill="#000"/>
  <rect x="178" y="210" width="158" height="48" rx="4" fill="#fff" stroke="#000" stroke-width="1.8"/>
  <text x="257" y="228" font-family="Georgia,serif" font-size="11" font-weight="bold" fill="#000" text-anchor="middle">−ΔH°latt = +787</text>
  <text x="257" y="244" font-family="Georgia,serif" font-size="10" fill="#000" text-anchor="middle">kJ mol⁻¹</text>
  <text x="257" y="256" font-family="Georgia,serif" font-size="9" fill="#000" text-anchor="middle">(lattice dissociation)</text>

  <!-- ── ARROW 2: Hydration A to C (exothermic, downward from gaseous ions) ── -->
  <!-- A (y=130, x=580) to C (y=360, x=580) -->
  <line x1="580" y1="130" x2="580" y2="354" stroke="#000" stroke-width="2.5"/>
  <polygon points="575,350 580,364 585,350" fill="#000"/>
  <!-- Dashed horizontal from A level to x=580 -->
  <line x1="380" y1="130" x2="580" y2="130" stroke="#000" stroke-width="1.2" stroke-dasharray="5,4"/>
  <rect x="590" y="220" width="158" height="48" rx="4" fill="#fff" stroke="#000" stroke-width="1.8"/>
  <text x="669" y="238" font-family="Georgia,serif" font-size="11" font-weight="bold" fill="#000" text-anchor="middle">ΔH°hyd = −784</text>
  <text x="669" y="254" font-family="Georgia,serif" font-size="10" fill="#000" text-anchor="middle">kJ mol⁻¹</text>
  <text x="669" y="266" font-family="Georgia,serif" font-size="9" fill="#000" text-anchor="middle">(total hydration)</text>

  <!-- ── ARROW 3: ΔHsol B to C ── -->
  <!-- From B y=340 to C y=360, small upward difference at x=490 -->
  <line x1="380" y1="340" x2="420" y2="340" stroke="#000" stroke-width="1.5" stroke-dasharray="4,3"/>
  <line x1="490" y1="340" x2="490" y2="355" stroke="#000" stroke-width="2.5"/>
  <polygon points="485,351 490,365 495,351" fill="#000"/>
  <rect x="380" y="448" width="200" height="48" rx="4" fill="#fff" stroke="#000" stroke-width="2"/>
  <text x="480" y="466" font-family="Georgia,serif" font-size="12" font-weight="bold" fill="#000" text-anchor="middle">ΔH°sol(NaCl)</text>
  <text x="480" y="482" font-family="Georgia,serif" font-size="11" fill="#000" text-anchor="middle">= +3 kJ mol⁻¹</text>
  <text x="480" y="494" font-family="Georgia,serif" font-size="9" fill="#000" text-anchor="middle">(slightly endothermic)</text>
  <line x1="490" y1="442" x2="490" y2="365" stroke="#000" stroke-width="1.2" stroke-dasharray="4,3"/>

  <!-- Water molecules around ion (right side visual) -->
  <text x="590" y="430" font-family="Georgia,serif" font-size="11" font-weight="bold" fill="#000">Ion hydration:</text>
  <!-- Central Na⁺ -->
  <circle cx="640" cy="490" r="18" fill="#fff" stroke="#000" stroke-width="2.5"/>
  <text x="640" y="495" font-family="Georgia,serif" font-size="10" font-weight="bold" fill="#000" text-anchor="middle">Na⁺</text>
  <!-- Surrounding water molecules (H₂O) -->
  <ellipse cx="640" cy="452" rx="16" ry="10" fill="#fff" stroke="#000" stroke-width="1.8"/>
  <text x="640" y="456" font-family="Georgia,serif" font-size="8" fill="#000" text-anchor="middle">H₂O</text>
  <ellipse cx="672" cy="468" rx="16" ry="10" fill="#fff" stroke="#000" stroke-width="1.8"/>
  <text x="672" y="472" font-family="Georgia,serif" font-size="8" fill="#000" text-anchor="middle">H₂O</text>
  <ellipse cx="672" cy="512" rx="16" ry="10" fill="#fff" stroke="#000" stroke-width="1.8"/>
  <text x="672" y="516" font-family="Georgia,serif" font-size="8" fill="#000" text-anchor="middle">H₂O</text>
  <ellipse cx="640" cy="528" rx="16" ry="10" fill="#fff" stroke="#000" stroke-width="1.8"/>
  <text x="640" y="532" font-family="Georgia,serif" font-size="8" fill="#000" text-anchor="middle">H₂O</text>
  <ellipse cx="608" cy="512" rx="16" ry="10" fill="#fff" stroke="#000" stroke-width="1.8"/>
  <text x="608" y="516" font-family="Georgia,serif" font-size="8" fill="#000" text-anchor="middle">H₂O</text>
  <ellipse cx="608" cy="468" rx="16" ry="10" fill="#fff" stroke="#000" stroke-width="1.8"/>
  <text x="608" y="472" font-family="Georgia,serif" font-size="8" fill="#000" text-anchor="middle">H₂O</text>
  <!-- Dashed bond lines -->
  <line x1="640" y1="462" x2="640" y2="472" stroke="#000" stroke-width="1" stroke-dasharray="2,2"/>
  <line x1="657" y1="471" x2="651" y2="477" stroke="#000" stroke-width="1" stroke-dasharray="2,2"/>
  <line x1="657" y1="509" x2="651" y2="504" stroke="#000" stroke-width="1" stroke-dasharray="2,2"/>
  <line x1="640" y1="518" x2="640" y2="508" stroke="#000" stroke-width="1" stroke-dasharray="2,2"/>
  <line x1="623" y1="509" x2="629" y2="504" stroke="#000" stroke-width="1" stroke-dasharray="2,2"/>
  <line x1="623" y1="471" x2="629" y2="477" stroke="#000" stroke-width="1" stroke-dasharray="2,2"/>

  <!-- Info box -->
  <rect x="60" y="598" width="700" height="84" rx="5" fill="#fff" stroke="#000" stroke-width="1.8" stroke-dasharray="5,3"/>
  <text x="400" y="616" font-family="Georgia,serif" font-size="11" font-weight="bold" fill="#000" text-anchor="middle">Hess's Law:  ΔH°sol = −ΔH°latt + ΔH°hyd(total)</text>
  <text x="400" y="634" font-family="Georgia,serif" font-size="10" fill="#000" text-anchor="middle">ΔH°sol(NaCl) = +787 + (−784) = +3 kJ mol⁻¹  (slightly endothermic — dissolves readily as entropy driven)</text>
  <text x="400" y="652" font-family="Georgia,serif" font-size="10" fill="#000" text-anchor="middle">ΔH°hyd(Na⁺) = −406 kJ mol⁻¹   |   ΔH°hyd(Cl⁻) = −378 kJ mol⁻¹   |   Total = −784 kJ mol⁻¹</text>
  <text x="400" y="670" font-family="Georgia,serif" font-size="10" fill="#000" text-anchor="middle">Dissolution favoured when |ΔH°hyd| ≥ |ΔH°latt| or entropy change (ΔS) is large and positive</text>

</svg>`;

// ─── 11. ENTROPY DIAGRAM ──────────────────────────────────────────────────────
static entropyDiagramSvg = `<?xml version="1.0" encoding="utf-8"?>
<svg version="1.1" xmlns="http://www.w3.org/2000/svg"
     width="800px" height="600px" viewBox="0 0 800 600">

  <!-- Title -->
  <text x="170" y="28" font-family="Georgia,serif" font-size="15" font-weight="bold" fill="#000">Entropy Diagram — Disorder and Entropy Changes</text>
  <text x="120" y="46" font-family="Georgia,serif" font-size="10" fill="#000">S = measure of disorder (number of accessible microstates); ΔS = S(products) − S(reactants)</text>

  <!-- ── BEFORE/AFTER PANELS ── -->
  <!-- BEFORE panel -->
  <rect x="40" y="70" width="310" height="320" rx="8" fill="#fff" stroke="#000" stroke-width="2.5"/>
  <text x="195" y="94" font-family="Georgia,serif" font-size="13" font-weight="bold" fill="#000" text-anchor="middle">BEFORE: Ice H₂O(s)</text>
  <text x="195" y="110" font-family="Georgia,serif" font-size="10" fill="#000" text-anchor="middle">ordered crystal lattice — low entropy</text>

  <!-- Regular grid of water molecules (ordered) -->
  <!-- 4×4 grid of H₂O with bonds -->
  <text x="195" y="260" font-family="Georgia,serif" font-size="40" fill="#000" text-anchor="middle" stroke="#000" stroke-width="0.5">❄</text>
  <!-- Ordered grid of molecules -->
  <circle cx="120" cy="160" r="8" fill="#fff" stroke="#000" stroke-width="2"/>
  <text x="120" y="164" font-family="Georgia,serif" font-size="7" fill="#000" text-anchor="middle">H₂O</text>
  <circle cx="170" cy="160" r="8" fill="#fff" stroke="#000" stroke-width="2"/>
  <text x="170" y="164" font-family="Georgia,serif" font-size="7" fill="#000" text-anchor="middle">H₂O</text>
  <circle cx="220" cy="160" r="8" fill="#fff" stroke="#000" stroke-width="2"/>
  <text x="220" y="164" font-family="Georgia,serif" font-size="7" fill="#000" text-anchor="middle">H₂O</text>
  <circle cx="270" cy="160" r="8" fill="#fff" stroke="#000" stroke-width="2"/>
  <text x="270" y="164" font-family="Georgia,serif" font-size="7" fill="#000" text-anchor="middle">H₂O</text>
  <circle cx="120" cy="200" r="8" fill="#fff" stroke="#000" stroke-width="2"/>
  <text x="120" y="204" font-family="Georgia,serif" font-size="7" fill="#000" text-anchor="middle">H₂O</text>
  <circle cx="170" cy="200" r="8" fill="#fff" stroke="#000" stroke-width="2"/>
  <text x="170" y="204" font-family="Georgia,serif" font-size="7" fill="#000" text-anchor="middle">H₂O</text>
  <circle cx="220" cy="200" r="8" fill="#fff" stroke="#000" stroke-width="2"/>
  <text x="220" y="204" font-family="Georgia,serif" font-size="7" fill="#000" text-anchor="middle">H₂O</text>
  <circle cx="270" cy="200" r="8" fill="#fff" stroke="#000" stroke-width="2"/>
  <text x="270" y="204" font-family="Georgia,serif" font-size="7" fill="#000" text-anchor="middle">H₂O</text>
  <!-- Hydrogen bond lines -->
  <line x1="128" y1="160" x2="162" y2="160" stroke="#000" stroke-width="1" stroke-dasharray="3,2"/>
  <line x1="178" y1="160" x2="212" y2="160" stroke="#000" stroke-width="1" stroke-dasharray="3,2"/>
  <line x1="228" y1="160" x2="262" y2="160" stroke="#000" stroke-width="1" stroke-dasharray="3,2"/>
  <line x1="128" y1="200" x2="162" y2="200" stroke="#000" stroke-width="1" stroke-dasharray="3,2"/>
  <line x1="178" y1="200" x2="212" y2="200" stroke="#000" stroke-width="1" stroke-dasharray="3,2"/>
  <line x1="228" y1="200" x2="262" y2="200" stroke="#000" stroke-width="1" stroke-dasharray="3,2"/>
  <line x1="120" y1="168" x2="120" y2="192" stroke="#000" stroke-width="1" stroke-dasharray="3,2"/>
  <line x1="170" y1="168" x2="170" y2="192" stroke="#000" stroke-width="1" stroke-dasharray="3,2"/>
  <line x1="220" y1="168" x2="220" y2="192" stroke="#000" stroke-width="1" stroke-dasharray="3,2"/>
  <line x1="270" y1="168" x2="270" y2="192" stroke="#000" stroke-width="1" stroke-dasharray="3,2"/>

  <text x="195" y="320" font-family="Georgia,serif" font-size="12" font-weight="bold" fill="#000" text-anchor="middle">S° ≈ 41 J K⁻¹ mol⁻¹</text>
  <text x="195" y="338" font-family="Georgia,serif" font-size="11" fill="#000" text-anchor="middle">Low disorder — fixed positions</text>
  <text x="195" y="356" font-family="Georgia,serif" font-size="11" fill="#000" text-anchor="middle">Few accessible microstates</text>
  <text x="195" y="374" font-family="Georgia,serif" font-size="11" fill="#000" text-anchor="middle">Highly ordered structure</text>

  <!-- PROCESS ARROW -->
  <line x1="360" y1="230" x2="432" y2="230" stroke="#000" stroke-width="3"/>
  <polygon points="428,225 442,230 428,235" fill="#000"/>
  <text x="396" y="220" font-family="Georgia,serif" font-size="11" font-weight="bold" fill="#000" text-anchor="middle">+heat</text>
  <text x="396" y="248" font-family="Georgia,serif" font-size="10" fill="#000" text-anchor="middle">melting</text>

  <!-- AFTER panel -->
  <rect x="450" y="70" width="310" height="320" rx="8" fill="#fff" stroke="#000" stroke-width="2.5"/>
  <text x="605" y="94" font-family="Georgia,serif" font-size="13" font-weight="bold" fill="#000" text-anchor="middle">AFTER: Liquid H₂O(l)</text>
  <text x="605" y="110" font-family="Georgia,serif" font-size="10" fill="#000" text-anchor="middle">random arrangement — higher entropy</text>

  <!-- Random scattered molecules -->
  <circle cx="510" cy="155" r="8" fill="#fff" stroke="#000" stroke-width="2"/>
  <text x="510" y="159" font-family="Georgia,serif" font-size="7" fill="#000" text-anchor="middle">H₂O</text>
  <circle cx="570" cy="175" r="8" fill="#fff" stroke="#000" stroke-width="2"/>
  <text x="570" y="179" font-family="Georgia,serif" font-size="7" fill="#000" text-anchor="middle">H₂O</text>
  <circle cx="540" cy="205" r="8" fill="#fff" stroke="#000" stroke-width="2"/>
  <text x="540" y="209" font-family="Georgia,serif" font-size="7" fill="#000" text-anchor="middle">H₂O</text>
  <circle cx="620" cy="150" r="8" fill="#fff" stroke="#000" stroke-width="2"/>
  <text x="620" y="154" font-family="Georgia,serif" font-size="7" fill="#000" text-anchor="middle">H₂O</text>
  <circle cx="680" cy="185" r="8" fill="#fff" stroke="#000" stroke-width="2"/>
  <text x="680" y="189" font-family="Georgia,serif" font-size="7" fill="#000" text-anchor="middle">H₂O</text>
  <circle cx="490" cy="225" r="8" fill="#fff" stroke="#000" stroke-width="2"/>
  <text x="490" y="229" font-family="Georgia,serif" font-size="7" fill="#000" text-anchor="middle">H₂O</text>
  <circle cx="660" cy="220" r="8" fill="#fff" stroke="#000" stroke-width="2"/>
  <text x="660" y="224" font-family="Georgia,serif" font-size="7" fill="#000" text-anchor="middle">H₂O</text>
  <circle cx="600" cy="240" r="8" fill="#fff" stroke="#000" stroke-width="2"/>
  <text x="600" y="244" font-family="Georgia,serif" font-size="7" fill="#000" text-anchor="middle">H₂O</text>

  <text x="605" y="320" font-family="Georgia,serif" font-size="12" font-weight="bold" fill="#000" text-anchor="middle">S° ≈ 70 J K⁻¹ mol⁻¹</text>
  <text x="605" y="338" font-family="Georgia,serif" font-size="11" fill="#000" text-anchor="middle">Higher disorder — free movement</text>
  <text x="605" y="356" font-family="Georgia,serif" font-size="11" fill="#000" text-anchor="middle">More accessible microstates</text>
  <text x="605" y="374" font-family="Georgia,serif" font-size="11" fill="#000" text-anchor="middle">Random positions &amp; orientations</text>

  <!-- ΔS calculation -->
  <rect x="240" y="408" width="320" height="38" rx="5" fill="#fff" stroke="#000" stroke-width="2.5"/>
  <text x="400" y="422" font-family="Georgia,serif" font-size="13" font-weight="bold" fill="#000" text-anchor="middle">ΔS = S°(products) − S°(reactants)</text>
  <text x="400" y="438" font-family="Georgia,serif" font-size="12" fill="#000" text-anchor="middle">ΔS = 70 − 41 = +29 J K⁻¹ mol⁻¹  (positive = more disorder)</text>

  <!-- General entropy rules -->
  <rect x="40" y="460" width="720" height="118" rx="5" fill="#fff" stroke="#000" stroke-width="1.8" stroke-dasharray="5,3"/>
  <text x="400" y="478" font-family="Georgia,serif" font-size="12" font-weight="bold" fill="#000" text-anchor="middle">Entropy Rules — When does ΔS increase (+)?</text>
  <text x="60" y="498" font-family="Georgia,serif" font-size="10" fill="#000">• Solid → liquid → gas:  S(s) &lt; S(l) &lt;&lt; S(g)   [gas has far more microstates]</text>
  <text x="60" y="514" font-family="Georgia,serif" font-size="10" fill="#000">• More moles of gas formed: e.g. CaCO₃(s) → CaO(s) + CO₂(g)   ΔS = +ve (gas produced)</text>
  <text x="60" y="530" font-family="Georgia,serif" font-size="10" fill="#000">• Dissolving ionic solids: NaCl(s) → Na⁺(aq) + Cl⁻(aq)   ΔS usually +ve</text>
  <text x="60" y="546" font-family="Georgia,serif" font-size="10" fill="#000">• Mixing gases or solutions; larger, more complex molecules have higher S°</text>
  <text x="60" y="562" font-family="Georgia,serif" font-size="10" fill="#000">• Standard entropy S° values always positive (3rd Law: S = 0 at 0 K for perfect crystal)</text>

</svg>`;

// ─── 12. GIBBS FREE ENERGY DIAGRAM ───────────────────────────────────────────
static gibbsFreeEnergyDiagramSvg = `<?xml version="1.0" encoding="utf-8"?>
<svg version="1.1" xmlns="http://www.w3.org/2000/svg"
     width="800px" height="600px" viewBox="0 0 800 600">

  <!-- Title -->
  <text x="150" y="28" font-family="Georgia,serif" font-size="15" font-weight="bold" fill="#000">Gibbs Free Energy Diagram — Spontaneity Prediction</text>
  <text x="100" y="46" font-family="Georgia,serif" font-size="10" fill="#000">ΔG = ΔH − TΔS   |   ΔG &lt; 0: spontaneous   |   ΔG = 0: equilibrium   |   ΔG &gt; 0: non-spontaneous</text>

  <!-- ── EQUATION BOX ── -->
  <rect x="40" y="60" width="720" height="56" rx="6" fill="#fff" stroke="#000" stroke-width="2.5"/>
  <text x="400" y="82" font-family="Georgia,serif" font-size="16" font-weight="bold" fill="#000" text-anchor="middle">ΔG = ΔH − TΔS</text>
  <text x="400" y="104" font-family="Georgia,serif" font-size="11" fill="#000" text-anchor="middle">G = Gibbs free energy (kJ mol⁻¹) | H = enthalpy | T = temperature (K) | S = entropy (J K⁻¹ mol⁻¹)</text>

  <!-- ── FOUR QUADRANT TABLE ── -->
  <!-- Grid: 2×2 with axes ΔH and ΔS -->
  <!-- Table at x=40, y=136, each cell 180×100 -->
  <!-- Headers -->
  <text x="230" y="152" font-family="Georgia,serif" font-size="12" font-weight="bold" fill="#000" text-anchor="middle">ΔS &gt; 0  (more disorder)</text>
  <text x="590" y="152" font-family="Georgia,serif" font-size="12" font-weight="bold" fill="#000" text-anchor="middle">ΔS &lt; 0  (less disorder)</text>

  <!-- Row labels -->
  <text x="28" y="230" font-family="Georgia,serif" font-size="11" font-weight="bold" fill="#000" text-anchor="middle"
        transform="rotate(-90 28 250)">ΔH &lt; 0 (exo)</text>
  <text x="28" y="390" font-family="Georgia,serif" font-size="11" font-weight="bold" fill="#000" text-anchor="middle"
        transform="rotate(-90 28 400)">ΔH &gt; 0 (endo)</text>

  <!-- Cell 1: ΔH<0, ΔS>0 → always spontaneous -->
  <rect x="60" y="164" width="320" height="120" rx="5" fill="#fff" stroke="#000" stroke-width="2.5"/>
  <text x="220" y="186" font-family="Georgia,serif" font-size="12" font-weight="bold" fill="#000" text-anchor="middle">ΔG = (−) − T(+) = always −</text>
  <text x="220" y="204" font-family="Georgia,serif" font-size="22" font-weight="bold" fill="#000" text-anchor="middle">ALWAYS SPONTANEOUS</text>
  <text x="220" y="224" font-family="Georgia,serif" font-size="10" fill="#000" text-anchor="middle">at all temperatures</text>
  <text x="220" y="240" font-family="Georgia,serif" font-size="10" fill="#000" text-anchor="middle">e.g. 2H₂O₂ → 2H₂O + O₂</text>
  <text x="220" y="276" font-family="Georgia,serif" font-size="11" fill="#000" text-anchor="middle">ΔG &lt; 0  ✓ (all T)</text>

  <!-- Cell 2: ΔH<0, ΔS<0 → spontaneous at low T -->
  <rect x="420" y="164" width="320" height="120" rx="5" fill="#fff" stroke="#000" stroke-width="2" stroke-dasharray="6,3"/>
  <text x="580" y="186" font-family="Georgia,serif" font-size="12" font-weight="bold" fill="#000" text-anchor="middle">ΔG = (−) − T(−) = − at low T</text>
  <text x="580" y="208" font-family="Georgia,serif" font-size="13" font-weight="bold" fill="#000" text-anchor="middle">SPONTANEOUS AT LOW T</text>
  <text x="580" y="228" font-family="Georgia,serif" font-size="10" fill="#000" text-anchor="middle">non-spontaneous at high T</text>
  <text x="580" y="244" font-family="Georgia,serif" font-size="10" fill="#000" text-anchor="middle">e.g. N₂ + 3H₂ → 2NH₃</text>
  <text x="580" y="268" font-family="Georgia,serif" font-size="11" fill="#000" text-anchor="middle">ΔG &lt; 0 when T &lt; ΔH/ΔS</text>

  <!-- Cell 3: ΔH>0, ΔS>0 → spontaneous at high T -->
  <rect x="60" y="316" width="320" height="120" rx="5" fill="#fff" stroke="#000" stroke-width="2" stroke-dasharray="6,3"/>
  <text x="220" y="338" font-family="Georgia,serif" font-size="12" font-weight="bold" fill="#000" text-anchor="middle">ΔG = (+) − T(+) = − at high T</text>
  <text x="220" y="358" font-family="Georgia,serif" font-size="13" font-weight="bold" fill="#000" text-anchor="middle">SPONTANEOUS AT HIGH T</text>
  <text x="220" y="378" font-family="Georgia,serif" font-size="10" fill="#000" text-anchor="middle">non-spontaneous at low T</text>
  <text x="220" y="394" font-family="Georgia,serif" font-size="10" fill="#000" text-anchor="middle">e.g. CaCO₃ → CaO + CO₂</text>
  <text x="220" y="418" font-family="Georgia,serif" font-size="11" fill="#000" text-anchor="middle">ΔG &lt; 0 when T &gt; ΔH/ΔS</text>

  <!-- Cell 4: ΔH>0, ΔS<0 → never spontaneous -->
  <rect x="420" y="316" width="320" height="120" rx="5" fill="#fff" stroke="#000" stroke-width="2.5"/>
  <text x="580" y="338" font-family="Georgia,serif" font-size="12" font-weight="bold" fill="#000" text-anchor="middle">ΔG = (+) − T(−) = always +</text>
  <text x="580" y="358" font-family="Georgia,serif" font-size="22" font-weight="bold" fill="#000" text-anchor="middle">NEVER SPONTANEOUS</text>
  <text x="580" y="378" font-family="Georgia,serif" font-size="10" fill="#000" text-anchor="middle">at any temperature</text>
  <text x="580" y="394" font-family="Georgia,serif" font-size="10" fill="#000" text-anchor="middle">Reverse reaction is spontaneous</text>
  <text x="580" y="418" font-family="Georgia,serif" font-size="11" fill="#000" text-anchor="middle">ΔG &gt; 0  ✗ (all T)</text>

  <!-- ── ΔG vs T GRAPH ── -->
  <rect x="40" y="460" width="340" height="120" rx="5" fill="#fff" stroke="#000" stroke-width="2"/>
  <text x="210" y="478" font-family="Georgia,serif" font-size="11" font-weight="bold" fill="#000" text-anchor="middle">ΔG vs Temperature graph</text>
  <!-- Axes -->
  <line x1="70" y1="560" x2="360" y2="560" stroke="#000" stroke-width="2"/>
  <line x1="70" y1="490" x2="70" y2="565" stroke="#000" stroke-width="2"/>
  <text x="215" y="576" font-family="Georgia,serif" font-size="9" fill="#000" text-anchor="middle">Temperature T (K)</text>
  <text x="58" y="530" font-family="Georgia,serif" font-size="9" fill="#000" text-anchor="middle"
        transform="rotate(-90 52 525)">ΔG</text>
  <text x="76" y="555" font-family="Georgia,serif" font-size="8" fill="#000">0</text>
  <!-- Lines for each case -->
  <!-- Case 1 (always -): horizontal below zero -->
  <line x1="80" y1="540" x2="350" y2="530" stroke="#000" stroke-width="2"/>
  <text x="352" y="530" font-family="Georgia,serif" font-size="8" fill="#000">ΔH−, ΔS+</text>
  <!-- Case 3 (high T): starts above, crosses zero -->
  <line x1="80" y1="502" x2="350" y2="552" stroke="#000" stroke-width="2" stroke-dasharray="5,3"/>
  <text x="352" y="552" font-family="Georgia,serif" font-size="8" fill="#000">ΔH+, ΔS+</text>
  <!-- Case 2 (low T): starts below, rises -->
  <line x1="80" y1="548" x2="350" y2="510" stroke="#000" stroke-width="2" stroke-dasharray="3,3"/>
  <!-- Zero line -->
  <line x1="70" y1="556" x2="360" y2="556" stroke="#000" stroke-width="1" stroke-dasharray="2,4"/>
  <text x="54" y="558" font-family="Georgia,serif" font-size="8" fill="#000">0</text>

  <!-- Worked example box -->
  <rect x="410" y="460" width="350" height="120" rx="5" fill="#fff" stroke="#000" stroke-width="2"/>
  <text x="585" y="478" font-family="Georgia,serif" font-size="11" font-weight="bold" fill="#000" text-anchor="middle">Worked Example:</text>
  <text x="420" y="496" font-family="Georgia,serif" font-size="10" fill="#000">Reaction: N₂(g) + 3H₂(g) → 2NH₃(g)</text>
  <text x="420" y="512" font-family="Georgia,serif" font-size="10" fill="#000">ΔH = −92 kJ mol⁻¹,  ΔS = −197 J K⁻¹mol⁻¹</text>
  <text x="420" y="530" font-family="Georgia,serif" font-size="10" fill="#000">At 298 K: ΔG = −92 − (298 × −0.197)</text>
  <text x="420" y="546" font-family="Georgia,serif" font-size="10" fill="#000">         = −92 + 58.7 = −33.3 kJ mol⁻¹</text>
  <text x="420" y="562" font-family="Georgia,serif" font-size="11" font-weight="bold" fill="#000">Spontaneous at 298 K (ΔG &lt; 0) ✓</text>
  <text x="420" y="575" font-family="Georgia,serif" font-size="9" fill="#000">Non-spontaneous above T = ΔH/ΔS = 467 K</text>

</svg>`;

// ─── 13. REACTION RATE GRAPH DIAGRAM ─────────────────────────────────────────
static reactionRateGraphDiagramSvg = `<?xml version="1.0" encoding="utf-8"?>
<svg version="1.1" xmlns="http://www.w3.org/2000/svg"
     width="800px" height="600px" viewBox="0 0 800 600">

  <!-- Title -->
  <text x="160" y="28" font-family="Georgia,serif" font-size="15" font-weight="bold" fill="#000">Reaction Rate Graph — Concentration vs Time</text>
  <text x="100" y="46" font-family="Georgia,serif" font-size="10" fill="#000">First-order reaction: rate = k[A]   |   Exponential decrease in concentration</text>

  <!-- ── MAIN GRAPH ── -->
  <!-- Axes -->
  <line x1="80" y1="60" x2="80" y2="480" stroke="#000" stroke-width="2.5"/>
  <polygon points="75,64 80,50 85,64" fill="#000"/>
  <line x1="80" y1="480" x2="720" y2="480" stroke="#000" stroke-width="2.5"/>
  <polygon points="716,475 730,480 716,485" fill="#000"/>
  <text x="400" y="516" font-family="Georgia,serif" font-size="12" font-weight="bold" fill="#000" text-anchor="middle">Time / s</text>
  <text x="20" y="270" font-family="Georgia,serif" font-size="12" font-weight="bold" fill="#000"
        transform="rotate(-90 26 270)">[A] / mol dm⁻³</text>

  <!-- Y axis tick marks and values -->
  <line x1="75" y1="100" x2="80" y2="100" stroke="#000" stroke-width="1.5"/>
  <text x="68" y="104" font-family="Georgia,serif" font-size="10" fill="#000" text-anchor="end">1.0</text>
  <line x1="75" y1="195" x2="80" y2="195" stroke="#000" stroke-width="1.5"/>
  <text x="68" y="199" font-family="Georgia,serif" font-size="10" fill="#000" text-anchor="end">0.5</text>
  <line x1="75" y1="290" x2="80" y2="290" stroke="#000" stroke-width="1.5"/>
  <text x="68" y="294" font-family="Georgia,serif" font-size="10" fill="#000" text-anchor="end">0.25</text>
  <line x1="75" y1="385" x2="80" y2="385" stroke="#000" stroke-width="1.5"/>
  <text x="68" y="389" font-family="Georgia,serif" font-size="10" fill="#000" text-anchor="end">0.125</text>

  <!-- X axis tick marks -->
  <line x1="240" y1="480" x2="240" y2="485" stroke="#000" stroke-width="1.5"/>
  <text x="240" y="498" font-family="Georgia,serif" font-size="10" fill="#000" text-anchor="middle">10</text>
  <line x1="400" y1="480" x2="400" y2="485" stroke="#000" stroke-width="1.5"/>
  <text x="400" y="498" font-family="Georgia,serif" font-size="10" fill="#000" text-anchor="middle">20</text>
  <line x1="560" y1="480" x2="560" y2="485" stroke="#000" stroke-width="1.5"/>
  <text x="560" y="498" font-family="Georgia,serif" font-size="10" fill="#000" text-anchor="middle">30</text>
  <line x1="720" y1="480" x2="720" y2="485" stroke="#000" stroke-width="1.5"/>
  <text x="714" y="498" font-family="Georgia,serif" font-size="10" fill="#000" text-anchor="middle">40</text>

  <!-- Exponential decay curve: starts at (80,100), passes through (240,195), (400,290), (560,385) -->
  <path d="M80,100 C140,100 180,130 240,195 C300,260 340,280 400,290 C460,300 500,340 560,385 C620,430 660,452 720,465"
        fill="none" stroke="#000" stroke-width="3"/>

  <!-- ── HALF-LIFE ANNOTATIONS ── -->
  <!-- t½ = 10 s: from (80,100) to (240,195) -->
  <!-- Dashed vertical from x=240, y=195 to y=480 -->
  <line x1="240" y1="195" x2="240" y2="480" stroke="#000" stroke-width="1.5" stroke-dasharray="6,4"/>
  <!-- Dashed horizontal from (80,195) to (240,195) -->
  <line x1="80" y1="195" x2="240" y2="195" stroke="#000" stroke-width="1.5" stroke-dasharray="6,4"/>
  <!-- t½ bracket -->
  <line x1="80" y1="540" x2="240" y2="540" stroke="#000" stroke-width="2"/>
  <line x1="80" y1="534" x2="80" y2="546" stroke="#000" stroke-width="2"/>
  <line x1="240" y1="534" x2="240" y2="546" stroke="#000" stroke-width="2"/>
  <text x="160" y="534" font-family="Georgia,serif" font-size="11" font-weight="bold" fill="#000" text-anchor="middle">t½ = 10 s</text>

  <!-- Second t½: from x=240 to x=400 -->
  <line x1="400" y1="290" x2="400" y2="480" stroke="#000" stroke-width="1.5" stroke-dasharray="6,4"/>
  <line x1="80" y1="290" x2="400" y2="290" stroke="#000" stroke-width="1.5" stroke-dasharray="6,4"/>
  <line x1="240" y1="548" x2="400" y2="548" stroke="#000" stroke-width="2"/>
  <line x1="240" y1="542" x2="240" y2="554" stroke="#000" stroke-width="2"/>
  <line x1="400" y1="542" x2="400" y2="554" stroke="#000" stroke-width="2"/>
  <text x="320" y="542" font-family="Georgia,serif" font-size="11" font-weight="bold" fill="#000" text-anchor="middle">t½ = 10 s</text>

  <!-- Third t½ -->
  <line x1="560" y1="385" x2="560" y2="480" stroke="#000" stroke-width="1.5" stroke-dasharray="6,4"/>
  <line x1="80" y1="385" x2="560" y2="385" stroke="#000" stroke-width="1.5" stroke-dasharray="6,4"/>
  <line x1="400" y1="556" x2="560" y2="556" stroke="#000" stroke-width="2"/>
  <line x1="400" y1="550" x2="400" y2="562" stroke="#000" stroke-width="2"/>
  <line x1="560" y1="550" x2="560" y2="562" stroke="#000" stroke-width="2"/>
  <text x="480" y="550" font-family="Georgia,serif" font-size="11" font-weight="bold" fill="#000" text-anchor="middle">t½ = 10 s</text>

  <!-- Tangent line at t=0 for initial rate -->
  <line x1="80" y1="100" x2="240" y2="290" stroke="#000" stroke-width="2" stroke-dasharray="4,3"/>
  <rect x="248" y="158" width="160" height="36" rx="3" fill="#fff" stroke="#000" stroke-width="1.5"/>
  <text x="328" y="174" font-family="Georgia,serif" font-size="10" font-weight="bold" fill="#000" text-anchor="middle">Tangent at t = 0</text>
  <text x="328" y="188" font-family="Georgia,serif" font-size="10" fill="#000" text-anchor="middle">initial rate = −Δ[A]/Δt</text>

  <!-- Info box -->
  <rect x="430" y="90" width="342" height="130" rx="5" fill="#fff" stroke="#000" stroke-width="1.8" stroke-dasharray="5,3"/>
  <text x="601" y="108" font-family="Georgia,serif" font-size="11" font-weight="bold" fill="#000" text-anchor="middle">First-Order Reaction Properties:</text>
  <text x="440" y="126" font-family="Georgia,serif" font-size="10" fill="#000">• Rate = k[A]   (rate ∝ [A])</text>
  <text x="440" y="142" font-family="Georgia,serif" font-size="10" fill="#000">• Exponential decay: [A] = [A]₀e^(−kt)</text>
  <text x="440" y="158" font-family="Georgia,serif" font-size="10" fill="#000">• Constant half-life: t½ = ln2/k = 0.693/k</text>
  <text x="440" y="174" font-family="Georgia,serif" font-size="10" fill="#000">• t½ independent of initial concentration</text>
  <text x="440" y="190" font-family="Georgia,serif" font-size="10" fill="#000">• Graph of ln[A] vs t is straight line (slope = −k)</text>
  <text x="440" y="206" font-family="Georgia,serif" font-size="10" fill="#000">• e.g. radioactive decay, many drug metabolisms</text>

</svg>`;

// ─── 14. RATE EQUATION DIAGRAM ────────────────────────────────────────────────
static rateEquationDiagramSvg = `<?xml version="1.0" encoding="utf-8"?>
<svg version="1.1" xmlns="http://www.w3.org/2000/svg"
     width="800px" height="600px" viewBox="0 0 800 600">

  <!-- Title -->
  <text x="160" y="28" font-family="Georgia,serif" font-size="15" font-weight="bold" fill="#000">Rate Equation Diagram — Rate = k[A]²[B]</text>
  <text x="100" y="46" font-family="Georgia,serif" font-size="10" fill="#000">Reaction: A + B → C   |   Overall order = 3   |   Rate constant k = 0.05 mol⁻² dm⁶ s⁻¹</text>

  <!-- ── RATE EQUATION BOX ── -->
  <rect x="40" y="60" width="720" height="70" rx="6" fill="#fff" stroke="#000" stroke-width="2.5"/>
  <text x="400" y="86" font-family="Georgia,serif" font-size="18" font-weight="bold" fill="#000" text-anchor="middle">Rate = k [A]ᵐ [B]ⁿ</text>
  <text x="400" y="118" font-family="Georgia,serif" font-size="11" fill="#000" text-anchor="middle">k = rate constant | m = order w.r.t. A = 2 | n = order w.r.t. B = 1 | overall order = m + n = 3</text>

  <!-- ── ORDERS EXPLANATION PANELS ── -->
  <!-- Zero order panel -->
  <rect x="40" y="148" width="220" height="180" rx="5" fill="#fff" stroke="#000" stroke-width="2"/>
  <text x="150" y="168" font-family="Georgia,serif" font-size="12" font-weight="bold" fill="#000" text-anchor="middle">Zero Order (m=0)</text>
  <text x="150" y="186" font-family="Georgia,serif" font-size="11" fill="#000" text-anchor="middle">Rate = k[A]⁰ = k</text>
  <text x="150" y="204" font-family="Georgia,serif" font-size="10" fill="#000" text-anchor="middle">Rate independent of [A]</text>
  <!-- Mini graph: horizontal line -->
  <line x1="60" y1="290" x2="240" y2="290" stroke="#000" stroke-width="1.5"/>
  <line x1="60" y1="220" x2="60" y2="295" stroke="#000" stroke-width="1.5"/>
  <line x1="60" y1="260" x2="240" y2="260" stroke="#000" stroke-width="2.5"/>
  <text x="50" y="293" font-family="Georgia,serif" font-size="8" fill="#000" text-anchor="end">0</text>
  <text x="150" y="305" font-family="Georgia,serif" font-size="9" fill="#000" text-anchor="middle">[A] →</text>
  <text x="46" y="250" font-family="Georgia,serif" font-size="8" fill="#000" text-anchor="end">rate</text>
  <text x="150" y="318" font-family="Georgia,serif" font-size="9" fill="#000" text-anchor="middle">Rate vs [A]: horizontal</text>

  <!-- First order panel -->
  <rect x="290" y="148" width="220" height="180" rx="5" fill="#fff" stroke="#000" stroke-width="2"/>
  <text x="400" y="168" font-family="Georgia,serif" font-size="12" font-weight="bold" fill="#000" text-anchor="middle">First Order (m=1)</text>
  <text x="400" y="186" font-family="Georgia,serif" font-size="11" fill="#000" text-anchor="middle">Rate = k[A]¹</text>
  <text x="400" y="204" font-family="Georgia,serif" font-size="10" fill="#000" text-anchor="middle">Rate ∝ [A]   (linear)</text>
  <!-- Mini graph: straight line -->
  <line x1="310" y1="290" x2="490" y2="290" stroke="#000" stroke-width="1.5"/>
  <line x1="310" y1="220" x2="310" y2="295" stroke="#000" stroke-width="1.5"/>
  <line x1="310" y1="285" x2="490" y2="225" stroke="#000" stroke-width="2.5"/>
  <text x="300" y="293" font-family="Georgia,serif" font-size="8" fill="#000" text-anchor="end">0</text>
  <text x="400" y="305" font-family="Georgia,serif" font-size="9" fill="#000" text-anchor="middle">[A] →</text>
  <text x="400" y="318" font-family="Georgia,serif" font-size="9" fill="#000" text-anchor="middle">Rate vs [A]: straight line</text>

  <!-- Second order panel -->
  <rect x="540" y="148" width="220" height="180" rx="5" fill="#fff" stroke="#000" stroke-width="2"/>
  <text x="650" y="168" font-family="Georgia,serif" font-size="12" font-weight="bold" fill="#000" text-anchor="middle">Second Order (m=2)</text>
  <text x="650" y="186" font-family="Georgia,serif" font-size="11" fill="#000" text-anchor="middle">Rate = k[A]²</text>
  <text x="650" y="204" font-family="Georgia,serif" font-size="10" fill="#000" text-anchor="middle">Rate ∝ [A]²   (curve)</text>
  <!-- Mini graph: parabola -->
  <line x1="560" y1="290" x2="740" y2="290" stroke="#000" stroke-width="1.5"/>
  <line x1="560" y1="220" x2="560" y2="295" stroke="#000" stroke-width="1.5"/>
  <path d="M560,287 C600,285 640,268 680,240 C700,226 720,222 740,220"
        fill="none" stroke="#000" stroke-width="2.5"/>
  <text x="550" y="293" font-family="Georgia,serif" font-size="8" fill="#000" text-anchor="end">0</text>
  <text x="650" y="305" font-family="Georgia,serif" font-size="9" fill="#000" text-anchor="middle">[A] →</text>
  <text x="650" y="318" font-family="Georgia,serif" font-size="9" fill="#000" text-anchor="middle">Rate vs [A]: curved (parabola)</text>

  <!-- ── UNITS OF k TABLE ── -->
  <rect x="40" y="340" width="440" height="136" rx="5" fill="#fff" stroke="#000" stroke-width="2"/>
  <text x="260" y="358" font-family="Georgia,serif" font-size="12" font-weight="bold" fill="#000" text-anchor="middle">Units of Rate Constant k</text>
  <!-- Table header -->
  <line x1="40" y1="364" x2="480" y2="364" stroke="#000" stroke-width="1.5"/>
  <text x="130" y="378" font-family="Georgia,serif" font-size="11" font-weight="bold" fill="#000" text-anchor="middle">Overall Order</text>
  <text x="310" y="378" font-family="Georgia,serif" font-size="11" font-weight="bold" fill="#000" text-anchor="middle">Units of k</text>
  <line x1="40" y1="382" x2="480" y2="382" stroke="#000" stroke-width="1"/>
  <line x1="220" y1="364" x2="220" y2="476" stroke="#000" stroke-width="1"/>
  <!-- Rows -->
  <text x="130" y="400" font-family="Georgia,serif" font-size="11" fill="#000" text-anchor="middle">Zero (0)</text>
  <text x="310" y="400" font-family="Georgia,serif" font-size="11" fill="#000" text-anchor="middle">mol dm⁻³ s⁻¹</text>
  <line x1="40" y1="406" x2="480" y2="406" stroke="#000" stroke-width="0.8"/>
  <text x="130" y="424" font-family="Georgia,serif" font-size="11" fill="#000" text-anchor="middle">First (1)</text>
  <text x="310" y="424" font-family="Georgia,serif" font-size="11" fill="#000" text-anchor="middle">s⁻¹</text>
  <line x1="40" y1="430" x2="480" y2="430" stroke="#000" stroke-width="0.8"/>
  <text x="130" y="448" font-family="Georgia,serif" font-size="11" fill="#000" text-anchor="middle">Second (2)</text>
  <text x="310" y="448" font-family="Georgia,serif" font-size="11" fill="#000" text-anchor="middle">mol⁻¹ dm³ s⁻¹</text>
  <line x1="40" y1="454" x2="480" y2="454" stroke="#000" stroke-width="0.8"/>
  <text x="130" y="472" font-family="Georgia,serif" font-size="11" fill="#000" text-anchor="middle">Third (3)</text>
  <text x="310" y="472" font-family="Georgia,serif" font-size="11" fill="#000" text-anchor="middle">mol⁻² dm⁶ s⁻¹</text>

  <!-- Worked example box -->
  <rect x="500" y="340" width="260" height="136" rx="5" fill="#fff" stroke="#000" stroke-width="2"/>
  <text x="630" y="358" font-family="Georgia,serif" font-size="11" font-weight="bold" fill="#000" text-anchor="middle">Worked Example:</text>
  <text x="510" y="376" font-family="Georgia,serif" font-size="10" fill="#000">Rate = k[A]²[B]</text>
  <text x="510" y="394" font-family="Georgia,serif" font-size="10" fill="#000">[A]=0.2, [B]=0.1, k=0.05</text>
  <text x="510" y="412" font-family="Georgia,serif" font-size="10" fill="#000">Rate = 0.05 × (0.2)² × 0.1</text>
  <text x="510" y="430" font-family="Georgia,serif" font-size="10" fill="#000">     = 0.05 × 0.04 × 0.1</text>
  <text x="510" y="450" font-family="Georgia,serif" font-size="11" font-weight="bold" fill="#000">     = 2×10⁻⁴ mol dm⁻³ s⁻¹</text>
  <text x="510" y="468" font-family="Georgia,serif" font-size="9" fill="#000">Double [A]: rate × 4 (2² = 4)</text>

  <!-- Summary -->
  <rect x="40" y="494" width="720" height="80" rx="5" fill="#fff" stroke="#000" stroke-width="1.8" stroke-dasharray="5,3"/>
  <text x="400" y="512" font-family="Georgia,serif" font-size="11" font-weight="bold" fill="#000" text-anchor="middle">Determining Reaction Orders from Experimental Data:</text>
  <text x="400" y="530" font-family="Georgia,serif" font-size="10" fill="#000" text-anchor="middle">Compare experiments where one concentration is changed while others are constant.</text>
  <text x="400" y="548" font-family="Georgia,serif" font-size="10" fill="#000" text-anchor="middle">If [A] doubles → rate × 2 (1st order) | rate × 4 (2nd order) | rate unchanged (0th order)</text>
  <text x="400" y="566" font-family="Georgia,serif" font-size="10" fill="#000" text-anchor="middle">Overall order = sum of individual orders | k has units that depend on overall order</text>

</svg>`;

// ─── 15. REACTION ORDER GRAPHS ────────────────────────────────────────────────
static reactionOrderGraphsSvg = `<?xml version="1.0" encoding="utf-8"?>
<svg version="1.1" xmlns="http://www.w3.org/2000/svg"
     width="800px" height="700px" viewBox="0 0 800 700">

  <!-- Title -->
  <text x="160" y="28" font-family="Georgia,serif" font-size="15" font-weight="bold" fill="#000">Reaction Order Graphs — Comparison</text>
  <text x="100" y="46" font-family="Georgia,serif" font-size="10" fill="#000">Three graphical methods to identify zero, first, and second order reactions</text>

  <!-- ══ ROW 1: [A] vs time ══ -->
  <text x="400" y="68" font-family="Georgia,serif" font-size="12" font-weight="bold" fill="#000" text-anchor="middle">Row 1: [A] vs time — shape identifies order</text>

  <!-- Zero order: [A] vs t — straight line -->
  <rect x="30" y="76" width="220" height="160" rx="4" fill="#fff" stroke="#000" stroke-width="2"/>
  <text x="140" y="94" font-family="Georgia,serif" font-size="11" font-weight="bold" fill="#000" text-anchor="middle">Zero Order</text>
  <line x1="50" y1="215" x2="230" y2="215" stroke="#000" stroke-width="2"/>
  <line x1="50" y1="105" x2="50" y2="218" stroke="#000" stroke-width="2"/>
  <text x="140" y="228" font-family="Georgia,serif" font-size="9" fill="#000" text-anchor="middle">time →</text>
  <text x="44" y="160" font-family="Georgia,serif" font-size="9" fill="#000" text-anchor="end">[A]</text>
  <!-- Straight line with gradient −k -->
  <line x1="52" y1="112" x2="228" y2="213" stroke="#000" stroke-width="2.5"/>
  <text x="140" y="105" font-family="Georgia,serif" font-size="9" fill="#000" text-anchor="middle">[A] = [A]₀ − kt</text>
  <text x="140" y="118" font-family="Georgia,serif" font-size="9" fill="#000" text-anchor="middle">straight line, slope = −k</text>

  <!-- First order: [A] vs t — exponential decay -->
  <rect x="290" y="76" width="220" height="160" rx="4" fill="#fff" stroke="#000" stroke-width="2"/>
  <text x="400" y="94" font-family="Georgia,serif" font-size="11" font-weight="bold" fill="#000" text-anchor="middle">First Order</text>
  <line x1="310" y1="215" x2="490" y2="215" stroke="#000" stroke-width="2"/>
  <line x1="310" y1="105" x2="310" y2="218" stroke="#000" stroke-width="2"/>
  <text x="400" y="228" font-family="Georgia,serif" font-size="9" fill="#000" text-anchor="middle">time →</text>
  <text x="304" y="160" font-family="Georgia,serif" font-size="9" fill="#000" text-anchor="end">[A]</text>
  <path d="M312,112 C350,115 380,145 420,175 C450,197 470,209 488,213"
        fill="none" stroke="#000" stroke-width="2.5"/>
  <text x="400" y="105" font-family="Georgia,serif" font-size="9" fill="#000" text-anchor="middle">[A] = [A]₀e^(−kt)</text>
  <text x="400" y="118" font-family="Georgia,serif" font-size="9" fill="#000" text-anchor="middle">exponential decay</text>

  <!-- Second order: [A] vs t — steeper curve -->
  <rect x="550" y="76" width="220" height="160" rx="4" fill="#fff" stroke="#000" stroke-width="2"/>
  <text x="660" y="94" font-family="Georgia,serif" font-size="11" font-weight="bold" fill="#000" text-anchor="middle">Second Order</text>
  <line x1="570" y1="215" x2="750" y2="215" stroke="#000" stroke-width="2"/>
  <line x1="570" y1="105" x2="570" y2="218" stroke="#000" stroke-width="2"/>
  <text x="660" y="228" font-family="Georgia,serif" font-size="9" fill="#000" text-anchor="middle">time →</text>
  <text x="564" y="160" font-family="Georgia,serif" font-size="9" fill="#000" text-anchor="end">[A]</text>
  <path d="M572,112 C580,113 596,128 630,170 C655,196 680,209 748,214"
        fill="none" stroke="#000" stroke-width="2.5"/>
  <text x="660" y="105" font-family="Georgia,serif" font-size="9" fill="#000" text-anchor="middle">1/[A] = 1/[A]₀ + kt</text>
  <text x="660" y="118" font-family="Georgia,serif" font-size="9" fill="#000" text-anchor="middle">steeper curve than 1st</text>

  <!-- ══ ROW 2: Linearised plots ══ -->
  <text x="400" y="264" font-family="Georgia,serif" font-size="12" font-weight="bold" fill="#000" text-anchor="middle">Row 2: Linearised plots — straight line confirms order</text>

  <!-- Zero order linearised: [A] vs t already straight -->
  <rect x="30" y="272" width="220" height="160" rx="4" fill="#fff" stroke="#000" stroke-width="2"/>
  <text x="140" y="290" font-family="Georgia,serif" font-size="10" font-weight="bold" fill="#000" text-anchor="middle">[A] vs t (zero order)</text>
  <line x1="50" y1="410" x2="230" y2="410" stroke="#000" stroke-width="2"/>
  <line x1="50" y1="298" x2="50" y2="413" stroke="#000" stroke-width="2"/>
  <line x1="52" y1="305" x2="228" y2="408" stroke="#000" stroke-width="2.5"/>
  <text x="140" y="423" font-family="Georgia,serif" font-size="9" fill="#000" text-anchor="middle">t (s)</text>
  <text x="140" y="302" font-family="Georgia,serif" font-size="9" fill="#000" text-anchor="middle">slope = −k</text>
  <!-- Gradient annotation -->
  <line x1="150" y1="360" x2="200" y2="360" stroke="#000" stroke-width="1" stroke-dasharray="3,2"/>
  <line x1="200" y1="360" x2="200" y2="390" stroke="#000" stroke-width="1" stroke-dasharray="3,2"/>
  <text x="185" y="356" font-family="Georgia,serif" font-size="8" fill="#000">Δ[A]</text>
  <text x="204" y="376" font-family="Georgia,serif" font-size="8" fill="#000">Δt</text>

  <!-- First order linearised: ln[A] vs t -->
  <rect x="290" y="272" width="220" height="160" rx="4" fill="#fff" stroke="#000" stroke-width="2"/>
  <text x="400" y="290" font-family="Georgia,serif" font-size="10" font-weight="bold" fill="#000" text-anchor="middle">ln[A] vs t (first order)</text>
  <line x1="310" y1="410" x2="490" y2="410" stroke="#000" stroke-width="2"/>
  <line x1="310" y1="298" x2="310" y2="413" stroke="#000" stroke-width="2"/>
  <line x1="312" y1="305" x2="488" y2="408" stroke="#000" stroke-width="2.5"/>
  <text x="400" y="423" font-family="Georgia,serif" font-size="9" fill="#000" text-anchor="middle">t (s)</text>
  <text x="304" y="355" font-family="Georgia,serif" font-size="9" fill="#000" text-anchor="end">ln[A]</text>
  <text x="400" y="302" font-family="Georgia,serif" font-size="9" fill="#000" text-anchor="middle">slope = −k</text>

  <!-- Second order linearised: 1/[A] vs t -->
  <rect x="550" y="272" width="220" height="160" rx="4" fill="#fff" stroke="#000" stroke-width="2"/>
  <text x="660" y="290" font-family="Georgia,serif" font-size="10" font-weight="bold" fill="#000" text-anchor="middle">1/[A] vs t (second order)</text>
  <line x1="570" y1="410" x2="750" y2="410" stroke="#000" stroke-width="2"/>
  <line x1="570" y1="298" x2="570" y2="413" stroke="#000" stroke-width="2"/>
  <line x1="572" y1="405" x2="748" y2="305" stroke="#000" stroke-width="2.5"/>
  <text x="660" y="423" font-family="Georgia,serif" font-size="9" fill="#000" text-anchor="middle">t (s)</text>
  <text x="564" y="355" font-family="Georgia,serif" font-size="9" fill="#000" text-anchor="end">1/[A]</text>
  <text x="660" y="302" font-family="Georgia,serif" font-size="9" fill="#000" text-anchor="middle">slope = +k (positive!)</text>

  <!-- ══ ROW 3: Half-life behaviour ══ -->
  <text x="400" y="458" font-family="Georgia,serif" font-size="12" font-weight="bold" fill="#000" text-anchor="middle">Row 3: Half-life behaviour</text>

  <rect x="30" y="466" width="220" height="100" rx="4" fill="#fff" stroke="#000" stroke-width="2"/>
  <text x="140" y="484" font-family="Georgia,serif" font-size="10" font-weight="bold" fill="#000" text-anchor="middle">Zero Order t½</text>
  <text x="140" y="502" font-family="Georgia,serif" font-size="10" fill="#000" text-anchor="middle">t½ = [A]₀ / 2k</text>
  <text x="140" y="520" font-family="Georgia,serif" font-size="10" fill="#000" text-anchor="middle">t½ decreases with time</text>
  <text x="140" y="538" font-family="Georgia,serif" font-size="9" fill="#000" text-anchor="middle">(∝ [A]₀ — depends on conc)</text>
  <text x="140" y="554" font-family="Georgia,serif" font-size="9" fill="#000" text-anchor="middle">successive t½: ½t½, ¼t½…</text>

  <rect x="290" y="466" width="220" height="100" rx="4" fill="#fff" stroke="#000" stroke-width="2"/>
  <text x="400" y="484" font-family="Georgia,serif" font-size="10" font-weight="bold" fill="#000" text-anchor="middle">First Order t½</text>
  <text x="400" y="502" font-family="Georgia,serif" font-size="10" fill="#000" text-anchor="middle">t½ = ln 2 / k = 0.693 / k</text>
  <text x="400" y="520" font-family="Georgia,serif" font-size="10" fill="#000" text-anchor="middle">t½ is CONSTANT</text>
  <text x="400" y="538" font-family="Georgia,serif" font-size="9" fill="#000" text-anchor="middle">(independent of [A]₀)</text>
  <text x="400" y="554" font-family="Georgia,serif" font-size="9" fill="#000" text-anchor="middle">Diagnostic for 1st order</text>

  <rect x="550" y="466" width="220" height="100" rx="4" fill="#fff" stroke="#000" stroke-width="2"/>
  <text x="660" y="484" font-family="Georgia,serif" font-size="10" font-weight="bold" fill="#000" text-anchor="middle">Second Order t½</text>
  <text x="660" y="502" font-family="Georgia,serif" font-size="10" fill="#000" text-anchor="middle">t½ = 1 / k[A]₀</text>
  <text x="660" y="520" font-family="Georgia,serif" font-size="10" fill="#000" text-anchor="middle">t½ increases with time</text>
  <text x="660" y="538" font-family="Georgia,serif" font-size="9" fill="#000" text-anchor="middle">(∝ 1/[A]₀)</text>
  <text x="660" y="554" font-family="Georgia,serif" font-size="9" fill="#000" text-anchor="middle">successive t½: 2t½, 4t½…</text>

  <!-- Summary bar -->
  <rect x="30" y="584" width="740" height="96" rx="5" fill="#fff" stroke="#000" stroke-width="1.8" stroke-dasharray="5,3"/>
  <text x="400" y="600" font-family="Georgia,serif" font-size="11" font-weight="bold" fill="#000" text-anchor="middle">Summary Table</text>
  <text x="60" y="618" font-family="Georgia,serif" font-size="10" font-weight="bold" fill="#000">Order</text>
  <text x="200" y="618" font-family="Georgia,serif" font-size="10" font-weight="bold" fill="#000">Rate law</text>
  <text x="360" y="618" font-family="Georgia,serif" font-size="10" font-weight="bold" fill="#000">Integrated law</text>
  <text x="550" y="618" font-family="Georgia,serif" font-size="10" font-weight="bold" fill="#000">Straight line plot</text>
  <text x="60" y="636" font-family="Georgia,serif" font-size="10" fill="#000">0</text>
  <text x="200" y="636" font-family="Georgia,serif" font-size="10" fill="#000">Rate = k</text>
  <text x="360" y="636" font-family="Georgia,serif" font-size="10" fill="#000">[A] = [A]₀ − kt</text>
  <text x="550" y="636" font-family="Georgia,serif" font-size="10" fill="#000">[A] vs t (slope=−k)</text>
  <text x="60" y="654" font-family="Georgia,serif" font-size="10" fill="#000">1</text>
  <text x="200" y="654" font-family="Georgia,serif" font-size="10" fill="#000">Rate = k[A]</text>
  <text x="360" y="654" font-family="Georgia,serif" font-size="10" fill="#000">ln[A] = ln[A]₀ − kt</text>
  <text x="550" y="654" font-family="Georgia,serif" font-size="10" fill="#000">ln[A] vs t (slope=−k)</text>
  <text x="60" y="672" font-family="Georgia,serif" font-size="10" fill="#000">2</text>
  <text x="200" y="672" font-family="Georgia,serif" font-size="10" fill="#000">Rate = k[A]²</text>
  <text x="360" y="672" font-family="Georgia,serif" font-size="10" fill="#000">1/[A] = 1/[A]₀ + kt</text>
  <text x="550" y="672" font-family="Georgia,serif" font-size="10" fill="#000">1/[A] vs t (slope=+k)</text>

</svg>`;

// ─── 16. ARRHENIUS EQUATION PLOT ─────────────────────────────────────────────
static arrheniusEquationDiagramSvg = `<?xml version="1.0" encoding="utf-8"?>
<svg version="1.1" xmlns="http://www.w3.org/2000/svg"
     width="800px" height="600px" viewBox="0 0 800 600">

  <!-- Title -->
  <text x="160" y="28" font-family="Georgia,serif" font-size="15" font-weight="bold" fill="#000">Arrhenius Equation Plot — ln(k) vs 1/T</text>
  <text x="100" y="46" font-family="Georgia,serif" font-size="10" fill="#000">k = Ae^(−Eₐ/RT)   |   ln k = ln A − Eₐ/RT   |   gradient = −Eₐ/R</text>

  <!-- ── EQUATION BOX ── -->
  <rect x="40" y="58" width="720" height="56" rx="6" fill="#fff" stroke="#000" stroke-width="2.5"/>
  <text x="400" y="80" font-family="Georgia,serif" font-size="16" font-weight="bold" fill="#000" text-anchor="middle">k = A · e^(−Eₐ/RT)</text>
  <text x="400" y="104" font-family="Georgia,serif" font-size="10" fill="#000" text-anchor="middle">k = rate constant | A = frequency (pre-exponential) factor | Eₐ = activation energy (J mol⁻¹) | R = 8.314 J K⁻¹ mol⁻¹ | T = temp (K)</text>

  <!-- ── MAIN GRAPH: ln(k) vs 1/T ── -->
  <!-- Axes -->
  <line x1="100" y1="130" x2="100" y2="490" stroke="#000" stroke-width="2.5"/>
  <polygon points="95,134 100,120 105,134" fill="#000"/>
  <line x1="100" y1="490" x2="680" y2="490" stroke="#000" stroke-width="2.5"/>
  <polygon points="676,485 690,490 676,495" fill="#000"/>

  <text x="390" y="526" font-family="Georgia,serif" font-size="12" font-weight="bold" fill="#000" text-anchor="middle">1/T / K⁻¹ (increases →, T decreases)</text>
  <text x="28" y="310" font-family="Georgia,serif" font-size="12" font-weight="bold" fill="#000"
        transform="rotate(-90 32 310)">ln k</text>

  <!-- Y axis: ln k values (higher values at top) -->
  <line x1="96" y1="160" x2="100" y2="160" stroke="#000" stroke-width="1.5"/>
  <text x="90" y="164" font-family="Georgia,serif" font-size="9" fill="#000" text-anchor="end">−2</text>
  <line x1="96" y1="250" x2="100" y2="250" stroke="#000" stroke-width="1.5"/>
  <text x="90" y="254" font-family="Georgia,serif" font-size="9" fill="#000" text-anchor="end">−4</text>
  <line x1="96" y1="340" x2="100" y2="340" stroke="#000" stroke-width="1.5"/>
  <text x="90" y="344" font-family="Georgia,serif" font-size="9" fill="#000" text-anchor="end">−6</text>
  <line x1="96" y1="430" x2="100" y2="430" stroke="#000" stroke-width="1.5"/>
  <text x="90" y="434" font-family="Georgia,serif" font-size="9" fill="#000" text-anchor="end">−8</text>

  <!-- X axis: 1/T values -->
  <line x1="200" y1="490" x2="200" y2="494" stroke="#000" stroke-width="1.5"/>
  <text x="200" y="506" font-family="Georgia,serif" font-size="9" fill="#000" text-anchor="middle">1×10⁻³</text>
  <line x1="340" y1="490" x2="340" y2="494" stroke="#000" stroke-width="1.5"/>
  <text x="340" y="506" font-family="Georgia,serif" font-size="9" fill="#000" text-anchor="middle">2×10⁻³</text>
  <line x1="480" y1="490" x2="480" y2="494" stroke="#000" stroke-width="1.5"/>
  <text x="480" y="506" font-family="Georgia,serif" font-size="9" fill="#000" text-anchor="middle">3×10⁻³</text>
  <line x1="620" y1="490" x2="620" y2="494" stroke="#000" stroke-width="1.5"/>
  <text x="620" y="506" font-family="Georgia,serif" font-size="9" fill="#000" text-anchor="middle">4×10⁻³</text>

  <!-- Straight line: ln k = −(Ea/R)(1/T) + ln A -->
  <!-- Gradient = −Ea/R = −75000/8.314 ≈ −9019 K -->
  <!-- Line from (200,170) to (600,460) — negative slope -->
  <line x1="160" y1="140" x2="660" y2="470" stroke="#000" stroke-width="3"/>

  <!-- Data points on the line -->
  <circle cx="200" cy="170" r="5" fill="#000" stroke="#000" stroke-width="1.5"/>
  <circle cx="340" cy="262" r="5" fill="#000" stroke="#000" stroke-width="1.5"/>
  <circle cx="480" cy="354" r="5" fill="#000" stroke="#000" stroke-width="1.5"/>
  <circle cx="580" cy="420" r="5" fill="#000" stroke="#000" stroke-width="1.5"/>

  <!-- ── GRADIENT TRIANGLE ── -->
  <line x1="300" y1="216" x2="480" y2="216" stroke="#000" stroke-width="1.5" stroke-dasharray="5,3"/>
  <line x1="480" y1="216" x2="480" y2="354" stroke="#000" stroke-width="1.5" stroke-dasharray="5,3"/>
  <!-- Δ(1/T) label -->
  <text x="390" y="210" font-family="Georgia,serif" font-size="11" font-weight="bold" fill="#000" text-anchor="middle">Δ(1/T)</text>
  <!-- Δ(ln k) label -->
  <text x="510" y="292" font-family="Georgia,serif" font-size="11" font-weight="bold" fill="#000">Δ(ln k)</text>

  <!-- Gradient label -->
  <rect x="110" y="360" width="200" height="56" rx="4" fill="#fff" stroke="#000" stroke-width="1.8"/>
  <text x="210" y="378" font-family="Georgia,serif" font-size="11" font-weight="bold" fill="#000" text-anchor="middle">Gradient = −Eₐ/R</text>
  <text x="210" y="394" font-family="Georgia,serif" font-size="10" fill="#000" text-anchor="middle">= −9019 K</text>
  <text x="210" y="408" font-family="Georgia,serif" font-size="10" fill="#000" text-anchor="middle">Eₐ = 9019 × 8.314 = 75 kJ mol⁻¹</text>

  <!-- y-intercept = ln A annotation -->
  <circle cx="100" cy="130" r="6" fill="#fff" stroke="#000" stroke-width="2"/>
  <line x1="108" y1="130" x2="160" y2="130" stroke="#000" stroke-width="1.5" stroke-dasharray="4,3"/>
  <rect x="162" y="118" width="120" height="26" rx="3" fill="#fff" stroke="#000" stroke-width="1.5"/>
  <text x="222" y="131" font-family="Georgia,serif" font-size="10" font-weight="bold" fill="#000" text-anchor="middle">y-intercept = ln A</text>

  <!-- Info box -->
  <rect x="540" y="120" width="222" height="160" rx="5" fill="#fff" stroke="#000" stroke-width="1.8" stroke-dasharray="5,3"/>
  <text x="651" y="138" font-family="Georgia,serif" font-size="11" font-weight="bold" fill="#000" text-anchor="middle">Arrhenius Summary:</text>
  <text x="550" y="158" font-family="Georgia,serif" font-size="10" fill="#000">ln k = ln A − Eₐ/RT</text>
  <text x="550" y="176" font-family="Georgia,serif" font-size="10" fill="#000">Plot: ln k vs 1/T</text>
  <text x="550" y="194" font-family="Georgia,serif" font-size="10" fill="#000">→ straight line</text>
  <text x="550" y="212" font-family="Georgia,serif" font-size="10" fill="#000">Slope = −Eₐ/R</text>
  <text x="550" y="230" font-family="Georgia,serif" font-size="10" fill="#000">Intercept = ln A</text>
  <text x="550" y="250" font-family="Georgia,serif" font-size="10" fill="#000">∴ Eₐ = −slope × R</text>
  <text x="550" y="270" font-family="Georgia,serif" font-size="10" fill="#000">A = e^(intercept)</text>

  <!-- Summary -->
  <rect x="40" y="540" width="720" height="46" rx="5" fill="#fff" stroke="#000" stroke-width="1.8" stroke-dasharray="5,3"/>
  <text x="400" y="558" font-family="Georgia,serif" font-size="10" fill="#000" text-anchor="middle">Higher T → larger 1/T smaller → moves left on graph → k increases (more molecules exceed Eₐ)</text>
  <text x="400" y="576" font-family="Georgia,serif" font-size="10" fill="#000" text-anchor="middle">Higher Eₐ → steeper gradient → k more sensitive to temperature change</text>

</svg>`;

// ─── 17. MAXWELL-BOLTZMANN DISTRIBUTION ──────────────────────────────────────
static maxwellBoltzmannDistributionSvg = `<?xml version="1.0" encoding="utf-8"?>
<svg version="1.1" xmlns="http://www.w3.org/2000/svg"
     width="800px" height="600px" viewBox="0 0 800 600">

  <!-- Title -->
  <text x="130" y="28" font-family="Georgia,serif" font-size="15" font-weight="bold" fill="#000">Maxwell-Boltzmann Distribution</text>
  <text x="80" y="46" font-family="Georgia,serif" font-size="10" fill="#000">Distribution of molecular kinetic energies at a given temperature — fraction of molecules vs energy</text>

  <!-- Axes -->
  <line x1="80" y1="60" x2="80" y2="460" stroke="#000" stroke-width="2.5"/>
  <polygon points="75,64 80,50 85,64" fill="#000"/>
  <line x1="80" y1="460" x2="720" y2="460" stroke="#000" stroke-width="2.5"/>
  <polygon points="716,455 730,460 716,465" fill="#000"/>
  <text x="400" y="496" font-family="Georgia,serif" font-size="12" font-weight="bold" fill="#000" text-anchor="middle">Kinetic Energy, E / kJ mol⁻¹  →</text>
  <text x="18" y="300" font-family="Georgia,serif" font-size="11" font-weight="bold" fill="#000"
        transform="rotate(-90 22 270)">Fraction of molecules</text>

  <!-- Origin label -->
  <text x="72" y="476" font-family="Georgia,serif" font-size="10" fill="#000" text-anchor="end">0</text>
  <text x="80" y="476" font-family="Georgia,serif" font-size="10" fill="#000">0</text>

  <!-- ── CURVE T₁ (lower temperature, taller narrower peak) ── -->
  <!-- Peak at ~x=260, y=100 -->
  <path d="M80,460 C100,458 140,420 180,300 C210,210 240,115 260,100
           C280,115 310,200 350,300 C390,390 440,440 520,456 C620,460 700,460 720,460"
        fill="none" stroke="#000" stroke-width="3"/>
  <!-- Peak marker T₁ -->
  <line x1="260" y1="100" x2="260" y2="460" stroke="#000" stroke-width="1.2" stroke-dasharray="5,4"/>
  <text x="255" y="92" font-family="Georgia,serif" font-size="10" fill="#000" text-anchor="end">most probable</text>
  <text x="255" y="104" font-family="Georgia,serif" font-size="10" fill="#000" text-anchor="end">energy (T₁)</text>
  <text x="180" y="80" font-family="Georgia,serif" font-size="13" font-weight="bold" fill="#000">T₁ (lower temperature)</text>

  <!-- ── CURVE T₂ (higher temperature, shorter broader, peak shifted right) ── -->
  <!-- Peak at ~x=340, y=148 -->
  <path d="M80,460 C100,458 130,450 170,400 C200,360 240,260 280,180
           C310,130 330,148 340,148
           C360,148 390,190 430,270 C470,350 530,430 620,456 C680,460 720,460 720,460"
        fill="none" stroke="#000" stroke-width="2.5" stroke-dasharray="10,5"/>
  <!-- Peak marker T₂ -->
  <line x1="340" y1="148" x2="340" y2="460" stroke="#000" stroke-width="1.2" stroke-dasharray="4,4"/>
  <text x="344" y="138" font-family="Georgia,serif" font-size="10" fill="#000">most probable</text>
  <text x="344" y="150" font-family="Georgia,serif" font-size="10" fill="#000">energy (T₂)</text>
  <text x="480" y="80" font-family="Georgia,serif" font-size="12" font-weight="bold" fill="#000">T₂ &gt; T₁ (higher temp.)</text>
  <text x="480" y="96" font-family="Georgia,serif" font-size="9" fill="#000" stroke-dasharray="8,4">(dashed curve)</text>

  <!-- ── ACTIVATION ENERGY MARKER ── -->
  <line x1="480" y1="80" x2="480" y2="460" stroke="#000" stroke-width="2.5"/>
  <rect x="488" y="192" width="70" height="26" rx="3" fill="#fff" stroke="#000" stroke-width="1.8"/>
  <text x="523" y="205" font-family="Georgia,serif" font-size="11" font-weight="bold" fill="#000" text-anchor="middle">Eₐ</text>
  <text x="488" y="175" font-family="Georgia,serif" font-size="10" fill="#000">activation energy</text>

  <!-- Shaded area T₁ molecules exceeding Eₐ (hatched to right of Eₐ on T₁ curve) -->
  <!-- Hatching over the small region on T₁ curve right of x=480 -->
  <path d="M480,456 C520,456 560,458 620,459 C660,459 700,460 720,460 L720,460 L480,460 Z"
        fill="none" stroke="#000" stroke-width="1"/>
  <!-- Add hatching lines -->
  <line x1="484" y1="458" x2="490" y2="460" stroke="#000" stroke-width="1"/>
  <line x1="494" y1="457" x2="506" y2="460" stroke="#000" stroke-width="1"/>
  <line x1="510" y1="457" x2="526" y2="460" stroke="#000" stroke-width="1"/>
  <line x1="530" y1="457" x2="550" y2="460" stroke="#000" stroke-width="1"/>
  <line x1="556" y1="458" x2="580" y2="460" stroke="#000" stroke-width="1"/>
  <text x="580" y="440" font-family="Georgia,serif" font-size="9" fill="#000">Molecules with</text>
  <text x="580" y="452" font-family="Georgia,serif" font-size="9" fill="#000">E ≥ Eₐ (T₁, small)</text>

  <!-- Legend -->
  <line x1="100" y1="504" x2="140" y2="504" stroke="#000" stroke-width="3"/>
  <text x="148" y="508" font-family="Georgia,serif" font-size="11" fill="#000">T₁ (lower temperature)</text>
  <line x1="350" y1="504" x2="390" y2="504" stroke="#000" stroke-width="2.5" stroke-dasharray="8,4"/>
  <text x="398" y="508" font-family="Georgia,serif" font-size="11" fill="#000">T₂ (higher temperature)</text>

  <!-- Key observations box -->
  <rect x="80" y="524" width="640" height="62" rx="5" fill="#fff" stroke="#000" stroke-width="1.8" stroke-dasharray="5,3"/>
  <text x="400" y="542" font-family="Georgia,serif" font-size="11" font-weight="bold" fill="#000" text-anchor="middle">Key Observations:</text>
  <text x="90" y="558" font-family="Georgia,serif" font-size="10" fill="#000">• Area under both curves is equal (same number of molecules)</text>
  <text x="90" y="572" font-family="Georgia,serif" font-size="10" fill="#000">• At higher T: curve flattens and shifts right — peak lower, broader, moves to higher energy</text>
  <text x="90" y="578" font-family="Georgia,serif" font-size="10" fill="#000">  More molecules exceed Eₐ → rate increases significantly</text>

</svg>`;

// ─── 18. CATALYST EFFECT DIAGRAM ─────────────────────────────────────────────
static catalystEffectDiagramSvg = `<?xml version="1.0" encoding="utf-8"?>
<svg version="1.1" xmlns="http://www.w3.org/2000/svg"
     width="800px" height="600px" viewBox="0 0 800 600">

  <!-- Title -->
  <text x="160" y="28" font-family="Georgia,serif" font-size="15" font-weight="bold" fill="#000">Catalyst Effect on Activation Energy</text>
  <text x="100" y="46" font-family="Georgia,serif" font-size="10" fill="#000">A catalyst provides an alternative reaction pathway with lower Eₐ — ΔH remains unchanged</text>

  <!-- Axes -->
  <line x1="80" y1="60" x2="80" y2="480" stroke="#000" stroke-width="2.5"/>
  <polygon points="75,64 80,50 85,64" fill="#000"/>
  <line x1="80" y1="480" x2="720" y2="480" stroke="#000" stroke-width="2.5"/>
  <polygon points="716,475 730,480 716,485" fill="#000"/>
  <text x="400" y="516" font-family="Georgia,serif" font-size="12" font-weight="bold" fill="#000" text-anchor="middle">Reaction Coordinate</text>
  <text x="22" y="280" font-family="Georgia,serif" font-size="12" font-weight="bold" fill="#000"
        transform="rotate(-90 26 270)">Enthalpy H / kJ mol⁻¹</text>

  <!-- Reactants level y=220, x=90-200 -->
  <line x1="90" y1="220" x2="200" y2="220" stroke="#000" stroke-width="3"/>
  <text x="92" y="210" font-family="Georgia,serif" font-size="12" font-weight="bold" fill="#000">Reactants</text>

  <!-- Products level y=360, x=600-720 -->
  <line x1="600" y1="360" x2="720" y2="360" stroke="#000" stroke-width="3"/>
  <text x="602" y="350" font-family="Georgia,serif" font-size="12" font-weight="bold" fill="#000">Products</text>

  <!-- ── UNCATALYSED CURVE (higher peak at x=400, y=90) ── -->
  <path d="M200,220 C270,220 320,90 400,90 C480,90 530,360 600,360"
        fill="none" stroke="#000" stroke-width="3"/>
  <!-- Transition state uncatalysed -->
  <circle cx="400" cy="90" r="5" fill="#fff" stroke="#000" stroke-width="2"/>
  <text x="408" y="82" font-family="Georgia,serif" font-size="10" fill="#000">‡ (uncatalysed)</text>

  <!-- ── CATALYSED CURVE (lower peak at x=400, y=180) ── -->
  <path d="M200,220 C256,220 300,160 380,168 C430,172 480,300 600,360"
        fill="none" stroke="#000" stroke-width="2.5" stroke-dasharray="10,5"/>
  <!-- Transition state catalysed -->
  <circle cx="380" cy="168" r="5" fill="#fff" stroke="#000" stroke-width="2"/>
  <text x="250" y="148" font-family="Georgia,serif" font-size="10" fill="#000">‡ (catalysed)</text>
  <line x1="310" y1="152" x2="374" y2="164" stroke="#000" stroke-width="1" stroke-dasharray="3,2"/>

  <!-- ── Eₐ ARROWS ── -->
  <!-- Uncatalysed Eₐ: y=220 to y=90 at x=290 -->
  <line x1="290" y1="218" x2="290" y2="96" stroke="#000" stroke-width="2"/>
  <polygon points="285,100 290,86 295,100" fill="#000"/>
  <polygon points="285,214 290,228 295,214" fill="#000"/>
  <rect x="172" y="144" width="110" height="36" rx="3" fill="#fff" stroke="#000" stroke-width="1.5"/>
  <text x="227" y="158" font-family="Georgia,serif" font-size="11" font-weight="bold" fill="#000" text-anchor="middle">Eₐ (uncatalysed)</text>
  <text x="227" y="172" font-family="Georgia,serif" font-size="10" fill="#000" text-anchor="middle">= +130 kJ mol⁻¹</text>

  <!-- Catalysed Eₐ: y=220 to y=168 at x=480 -->
  <line x1="480" y1="218" x2="480" y2="174" stroke="#000" stroke-width="2"/>
  <polygon points="475,178 480,164 485,178" fill="#000"/>
  <polygon points="475,214 480,228 485,214" fill="#000"/>
  <rect x="490" y="182" width="110" height="36" rx="3" fill="#fff" stroke="#000" stroke-width="1.5"/>
  <text x="545" y="196" font-family="Georgia,serif" font-size="11" font-weight="bold" fill="#000" text-anchor="middle">Eₐ (catalysed)</text>
  <text x="545" y="210" font-family="Georgia,serif" font-size="10" fill="#000" text-anchor="middle">= +60 kJ mol⁻¹</text>

  <!-- ΔEₐ bracket at x=610 -->
  <line x1="610" y1="90" x2="610" y2="168" stroke="#000" stroke-width="2"/>
  <line x1="606" y1="90" x2="614" y2="90" stroke="#000" stroke-width="2"/>
  <line x1="606" y1="168" x2="614" y2="168" stroke="#000" stroke-width="2"/>
  <text x="618" y="124" font-family="Georgia,serif" font-size="11" font-weight="bold" fill="#000">ΔEₐ = −70</text>
  <text x="618" y="138" font-family="Georgia,serif" font-size="10" fill="#000">kJ mol⁻¹</text>

  <!-- ΔH arrow (reactants to products, unchanged) at x=700 -->
  <line x1="700" y1="218" x2="700" y2="365" stroke="#000" stroke-width="2"/>
  <polygon points="695,222 700,208 705,222" fill="#000"/>
  <polygon points="695,361 700,375 705,361" fill="#000"/>
  <!-- Dashed reference lines -->
  <line x1="200" y1="220" x2="700" y2="220" stroke="#000" stroke-width="1" stroke-dasharray="4,5"/>
  <line x1="600" y1="360" x2="700" y2="360" stroke="#000" stroke-width="1" stroke-dasharray="4,5"/>
  <rect x="706" y="276" width="76" height="36" rx="3" fill="#fff" stroke="#000" stroke-width="1.5"/>
  <text x="744" y="290" font-family="Georgia,serif" font-size="11" font-weight="bold" fill="#000" text-anchor="middle">ΔH rxn</text>
  <text x="744" y="304" font-family="Georgia,serif" font-size="10" fill="#000" text-anchor="middle">unchanged</text>

  <!-- Legend -->
  <line x1="100" y1="510" x2="140" y2="510" stroke="#000" stroke-width="3"/>
  <text x="148" y="514" font-family="Georgia,serif" font-size="11" fill="#000">Uncatalysed pathway</text>
  <line x1="340" y1="510" x2="380" y2="510" stroke="#000" stroke-width="2.5" stroke-dasharray="8,4"/>
  <text x="388" y="514" font-family="Georgia,serif" font-size="11" fill="#000">Catalysed pathway</text>

  <!-- Info box -->
  <rect x="80" y="530" width="640" height="54" rx="5" fill="#fff" stroke="#000" stroke-width="1.8" stroke-dasharray="5,3"/>
  <text x="400" y="548" font-family="Georgia,serif" font-size="11" font-weight="bold" fill="#000" text-anchor="middle">How a Catalyst Works:</text>
  <text x="90" y="566" font-family="Georgia,serif" font-size="10" fill="#000">• Provides alternative reaction mechanism with lower Eₐ  →  more molecules have sufficient energy to react</text>
  <text x="90" y="578" font-family="Georgia,serif" font-size="10" fill="#000">• ΔH and ΔG are unchanged  |  Catalyst not consumed  |  Both Eₐ(fwd) and Eₐ(rev) lowered by same amount</text>

</svg>`;

// ─── 19. REACTION MECHANISM DIAGRAM ──────────────────────────────────────────
static reactionMechanismDiagramSvg = `<?xml version="1.0" encoding="utf-8"?>
<svg version="1.1" xmlns="http://www.w3.org/2000/svg"
     width="800px" height="700px" viewBox="0 0 800 700">

  <!-- Title -->
  <text x="140" y="28" font-family="Georgia,serif" font-size="15" font-weight="bold" fill="#000">Reaction Mechanism Diagram — Two-Step Pathway</text>
  <text x="80" y="46" font-family="Georgia,serif" font-size="10" fill="#000">Multi-step reaction: energy profile with intermediates, transition states, and rate-determining step</text>

  <!-- Axes -->
  <line x1="80" y1="60" x2="80" y2="500" stroke="#000" stroke-width="2.5"/>
  <polygon points="75,64 80,50 85,64" fill="#000"/>
  <line x1="80" y1="500" x2="740" y2="500" stroke="#000" stroke-width="2.5"/>
  <polygon points="736,495 750,500 736,505" fill="#000"/>
  <text x="400" y="536" font-family="Georgia,serif" font-size="12" font-weight="bold" fill="#000" text-anchor="middle">Reaction Coordinate</text>
  <text x="22" y="280" font-family="Georgia,serif" font-size="12" font-weight="bold" fill="#000"
        transform="rotate(-90 26 270)">Enthalpy / kJ mol⁻¹</text>

  <!-- ── ENERGY LEVELS ── -->
  <!-- Reactants A+B, y=240, x=90–180 -->
  <line x1="90" y1="240" x2="180" y2="240" stroke="#000" stroke-width="3"/>
  <text x="92" y="228" font-family="Georgia,serif" font-size="12" font-weight="bold" fill="#000">A + B</text>
  <text x="92" y="256" font-family="Georgia,serif" font-size="9" fill="#000">reactants</text>

  <!-- Intermediate, y=280, x=360–440 -->
  <line x1="360" y1="280" x2="440" y2="280" stroke="#000" stroke-width="2.5" stroke-dasharray="7,4"/>
  <text x="362" y="268" font-family="Georgia,serif" font-size="11" font-weight="bold" fill="#000">Intermediate</text>
  <text x="365" y="296" font-family="Georgia,serif" font-size="9" fill="#000">(metastable species)</text>

  <!-- Products C+D, y=380, x=570–660 -->
  <line x1="570" y1="380" x2="660" y2="380" stroke="#000" stroke-width="3"/>
  <text x="572" y="368" font-family="Georgia,serif" font-size="12" font-weight="bold" fill="#000">C + D</text>
  <text x="572" y="396" font-family="Georgia,serif" font-size="9" fill="#000">products</text>

  <!-- ── ENERGY PROFILE CURVE ── -->
  <!-- Step 1: Reactants → TS1 (peak at x=270, y=100) → Intermediate -->
  <!-- Step 2: Intermediate → TS2 (peak at x=510, y=200) → Products -->
  <path d="M180,240 C220,240 240,100 270,100 C300,100 330,280 360,280
           C440,280 460,200 510,200 C560,200 545,380 570,380"
        fill="none" stroke="#000" stroke-width="3"/>

  <!-- TS1 marker (first, higher peak = RDS) -->
  <circle cx="270" cy="100" r="6" fill="#fff" stroke="#000" stroke-width="2.5"/>
  <text x="278" y="92" font-family="Georgia,serif" font-size="11" font-weight="bold" fill="#000">TS₁‡</text>
  <text x="136" y="76" font-family="Georgia,serif" font-size="10" fill="#000">Transition state 1</text>
  <text x="136" y="90" font-family="Georgia,serif" font-size="10" fill="#000">(highest energy peak)</text>
  <line x1="210" y1="90" x2="264" y2="98" stroke="#000" stroke-width="1" stroke-dasharray="3,2"/>

  <!-- TS2 marker (second, lower peak) -->
  <circle cx="510" cy="200" r="6" fill="#fff" stroke="#000" stroke-width="2.5"/>
  <text x="518" y="192" font-family="Georgia,serif" font-size="11" font-weight="bold" fill="#000">TS₂‡</text>
  <text x="560" y="172" font-family="Georgia,serif" font-size="10" fill="#000">Transition state 2</text>
  <line x1="558" y1="178" x2="518" y2="196" stroke="#000" stroke-width="1" stroke-dasharray="3,2"/>

  <!-- ── Eₐ ANNOTATIONS ── -->
  <!-- Eₐ1 (LARGE = RDS): reactants y=240 to TS1 y=100, at x=200 -->
  <line x1="200" y1="238" x2="200" y2="106" stroke="#000" stroke-width="2"/>
  <polygon points="195,110 200,96 205,110" fill="#000"/>
  <polygon points="195,234 200,248 205,234" fill="#000"/>
  <rect x="80" y="158" width="112" height="40" rx="3" fill="#fff" stroke="#000" stroke-width="1.8"/>
  <text x="136" y="174" font-family="Georgia,serif" font-size="11" font-weight="bold" fill="#000" text-anchor="middle">Eₐ₁ (large)</text>
  <text x="136" y="190" font-family="Georgia,serif" font-size="10" fill="#000" text-anchor="middle">= 140 kJ mol⁻¹</text>

  <!-- Eₐ2 (smaller): intermediate y=280 to TS2 y=200, at x=475 -->
  <line x1="475" y1="278" x2="475" y2="206" stroke="#000" stroke-width="1.8"/>
  <polygon points="470,210 475,196 480,210" fill="#000"/>
  <polygon points="470,274 475,288 480,274" fill="#000"/>
  <rect x="340" y="226" width="128" height="32" rx="3" fill="#fff" stroke="#000" stroke-width="1.5"/>
  <text x="404" y="241" font-family="Georgia,serif" font-size="10" font-weight="bold" fill="#000" text-anchor="middle">Eₐ₂ (small) = 80 kJ</text>

  <!-- ── RATE-DETERMINING STEP ANNOTATION ── -->
  <!-- Bracket over Step 1 -->
  <line x1="180" y1="540" x2="360" y2="540" stroke="#000" stroke-width="2.5"/>
  <line x1="180" y1="534" x2="180" y2="546" stroke="#000" stroke-width="2.5"/>
  <line x1="360" y1="534" x2="360" y2="546" stroke="#000" stroke-width="2.5"/>
  <text x="270" y="534" font-family="Georgia,serif" font-size="11" font-weight="bold" fill="#000" text-anchor="middle">STEP 1 — Rate Determining Step</text>
  <text x="270" y="555" font-family="Georgia,serif" font-size="10" fill="#000" text-anchor="middle">(slowest step — highest Eₐ)</text>
  <line x1="270" y1="500" x2="270" y2="534" stroke="#000" stroke-width="1.2" stroke-dasharray="4,3"/>

  <!-- Bracket over Step 2 -->
  <line x1="440" y1="540" x2="570" y2="540" stroke="#000" stroke-width="2"/>
  <line x1="440" y1="534" x2="440" y2="546" stroke="#000" stroke-width="2"/>
  <line x1="570" y1="534" x2="570" y2="546" stroke="#000" stroke-width="2"/>
  <text x="505" y="534" font-family="Georgia,serif" font-size="10" fill="#000" text-anchor="middle">Step 2 (fast)</text>
  <line x1="505" y1="500" x2="505" y2="534" stroke="#000" stroke-width="1.2" stroke-dasharray="4,3"/>

  <!-- ΔH overall: reactants to products -->
  <line x1="680" y1="240" x2="680" y2="380" stroke="#000" stroke-width="2"/>
  <polygon points="675,244 680,230 685,244" fill="#000"/>
  <polygon points="675,376 680,390 685,376" fill="#000"/>
  <line x1="180" y1="240" x2="680" y2="240" stroke="#000" stroke-width="1" stroke-dasharray="4,5"/>
  <line x1="570" y1="380" x2="680" y2="380" stroke="#000" stroke-width="1" stroke-dasharray="4,5"/>
  <rect x="688" y="294" width="90" height="32" rx="3" fill="#fff" stroke="#000" stroke-width="1.5"/>
  <text x="733" y="308" font-family="Georgia,serif" font-size="11" font-weight="bold" fill="#000" text-anchor="middle">ΔH overall</text>
  <text x="733" y="320" font-family="Georgia,serif" font-size="10" fill="#000" text-anchor="middle">−ve (exo)</text>

  <!-- Info box -->
  <rect x="80" y="580" width="640" height="96" rx="5" fill="#fff" stroke="#000" stroke-width="1.8" stroke-dasharray="5,3"/>
  <text x="400" y="598" font-family="Georgia,serif" font-size="11" font-weight="bold" fill="#000" text-anchor="middle">Key Concepts for Multi-Step Mechanisms:</text>
  <text x="90" y="616" font-family="Georgia,serif" font-size="10" fill="#000">• Intermediate: a species formed in one step and consumed in another (in a trough on the energy profile)</text>
  <text x="90" y="634" font-family="Georgia,serif" font-size="10" fill="#000">• Transition state ‡: maximum energy point on each step — cannot be isolated (on each peak)</text>
  <text x="90" y="652" font-family="Georgia,serif" font-size="10" fill="#000">• Rate-determining step: the SLOWEST step — has the highest activation energy from the preceding energy minimum</text>
  <text x="90" y="670" font-family="Georgia,serif" font-size="10" fill="#000">• Rate equation reflects only species involved up to and including the rate-determining step</text>

</svg>`;

// ─── 20. HALF-LIFE DIAGRAM ────────────────────────────────────────────────────
static halfLifeDiagramSvg = `<?xml version="1.0" encoding="utf-8"?>
<svg version="1.1" xmlns="http://www.w3.org/2000/svg"
     width="800px" height="600px" viewBox="0 0 800 600">

  <!-- Title -->
  <text x="200" y="28" font-family="Georgia,serif" font-size="15" font-weight="bold" fill="#000">Half-Life Diagram — First Order Reaction</text>
  <text x="120" y="46" font-family="Georgia,serif" font-size="10" fill="#000">t½ = ln2/k = 0.693/k   |   Constant half-life: t½ independent of initial concentration [A]₀</text>

  <!-- Axes -->
  <line x1="80" y1="60" x2="80" y2="470" stroke="#000" stroke-width="2.5"/>
  <polygon points="75,64 80,50 85,64" fill="#000"/>
  <line x1="80" y1="470" x2="730" y2="470" stroke="#000" stroke-width="2.5"/>
  <polygon points="726,465 740,470 726,475" fill="#000"/>
  <text x="400" y="504" font-family="Georgia,serif" font-size="12" font-weight="bold" fill="#000" text-anchor="middle">Time / s</text>
  <text x="22" y="270" font-family="Georgia,serif" font-size="11" font-weight="bold" fill="#000"
        transform="rotate(-90 26 260)">[A] / mol dm⁻³</text>

  <!-- Y axis labels -->
  <line x1="76" y1="110" x2="80" y2="110" stroke="#000" stroke-width="1.5"/>
  <text x="70" y="114" font-family="Georgia,serif" font-size="10" fill="#000" text-anchor="end">100</text>
  <line x1="76" y1="200" x2="80" y2="200" stroke="#000" stroke-width="1.5"/>
  <text x="70" y="204" font-family="Georgia,serif" font-size="10" fill="#000" text-anchor="end">50</text>
  <line x1="76" y1="290" x2="80" y2="290" stroke="#000" stroke-width="1.5"/>
  <text x="70" y="294" font-family="Georgia,serif" font-size="10" fill="#000" text-anchor="end">25</text>
  <line x1="76" y1="380" x2="80" y2="380" stroke="#000" stroke-width="1.5"/>
  <text x="70" y="384" font-family="Georgia,serif" font-size="10" fill="#000" text-anchor="end">12.5</text>
  <line x1="76" y1="425" x2="80" y2="425" stroke="#000" stroke-width="1.5"/>
  <text x="70" y="429" font-family="Georgia,serif" font-size="10" fill="#000" text-anchor="end">6.25</text>

  <!-- X axis labels: t½=10s, so marks at 10,20,30,40 -->
  <line x1="200" y1="470" x2="200" y2="476" stroke="#000" stroke-width="1.5"/>
  <text x="200" y="489" font-family="Georgia,serif" font-size="10" fill="#000" text-anchor="middle">10</text>
  <line x1="360" y1="470" x2="360" y2="476" stroke="#000" stroke-width="1.5"/>
  <text x="360" y="489" font-family="Georgia,serif" font-size="10" fill="#000" text-anchor="middle">20</text>
  <line x1="520" y1="470" x2="520" y2="476" stroke="#000" stroke-width="1.5"/>
  <text x="520" y="489" font-family="Georgia,serif" font-size="10" fill="#000" text-anchor="middle">30</text>
  <line x1="680" y1="470" x2="680" y2="476" stroke="#000" stroke-width="1.5"/>
  <text x="680" y="489" font-family="Georgia,serif" font-size="10" fill="#000" text-anchor="middle">40</text>

  <!-- Exponential decay curve -->
  <path d="M80,110 C130,110 160,145 200,200 C240,255 280,273 360,290
           C440,307 470,343 520,380 C570,417 620,440 730,463"
        fill="none" stroke="#000" stroke-width="3"/>

  <!-- ── HALF-LIFE CONSTRUCTION LINES ── -->
  <!-- 1st half-life: 100 → 50 (t=0 to t=10) -->
  <line x1="80" y1="200" x2="200" y2="200" stroke="#000" stroke-width="1.5" stroke-dasharray="6,4"/>
  <line x1="200" y1="200" x2="200" y2="470" stroke="#000" stroke-width="1.5" stroke-dasharray="6,4"/>
  <!-- Dot at intersection -->
  <circle cx="200" cy="200" r="5" fill="#000"/>

  <!-- 2nd half-life: 50 → 25 (t=10 to t=20) -->
  <line x1="80" y1="290" x2="360" y2="290" stroke="#000" stroke-width="1.5" stroke-dasharray="6,4"/>
  <line x1="360" y1="290" x2="360" y2="470" stroke="#000" stroke-width="1.5" stroke-dasharray="6,4"/>
  <circle cx="360" cy="290" r="5" fill="#000"/>

  <!-- 3rd half-life: 25 → 12.5 (t=20 to t=30) -->
  <line x1="80" y1="380" x2="520" y2="380" stroke="#000" stroke-width="1.5" stroke-dasharray="6,4"/>
  <line x1="520" y1="380" x2="520" y2="470" stroke="#000" stroke-width="1.5" stroke-dasharray="6,4"/>
  <circle cx="520" cy="380" r="5" fill="#000"/>

  <!-- 4th half-life: 12.5 → 6.25 (t=30 to t=40) -->
  <line x1="80" y1="425" x2="680" y2="425" stroke="#000" stroke-width="1.5" stroke-dasharray="6,4"/>
  <line x1="680" y1="425" x2="680" y2="470" stroke="#000" stroke-width="1.5" stroke-dasharray="6,4"/>
  <circle cx="680" cy="425" r="5" fill="#000"/>

  <!-- t½ brackets below x-axis -->
  <!-- t½ 1: x=80 to x=200 -->
  <line x1="80" y1="520" x2="200" y2="520" stroke="#000" stroke-width="2"/>
  <line x1="80" y1="514" x2="80" y2="526" stroke="#000" stroke-width="2"/>
  <line x1="200" y1="514" x2="200" y2="526" stroke="#000" stroke-width="2"/>
  <text x="140" y="515" font-family="Georgia,serif" font-size="11" font-weight="bold" fill="#000" text-anchor="middle">t½ = 10 s</text>
  <!-- t½ 2 -->
  <line x1="200" y1="536" x2="360" y2="536" stroke="#000" stroke-width="2"/>
  <line x1="200" y1="530" x2="200" y2="542" stroke="#000" stroke-width="2"/>
  <line x1="360" y1="530" x2="360" y2="542" stroke="#000" stroke-width="2"/>
  <text x="280" y="531" font-family="Georgia,serif" font-size="11" font-weight="bold" fill="#000" text-anchor="middle">t½ = 10 s</text>
  <!-- t½ 3 -->
  <line x1="360" y1="552" x2="520" y2="552" stroke="#000" stroke-width="2"/>
  <line x1="360" y1="546" x2="360" y2="558" stroke="#000" stroke-width="2"/>
  <line x1="520" y1="546" x2="520" y2="558" stroke="#000" stroke-width="2"/>
  <text x="440" y="547" font-family="Georgia,serif" font-size="11" font-weight="bold" fill="#000" text-anchor="middle">t½ = 10 s</text>
  <!-- t½ 4 -->
  <line x1="520" y1="568" x2="680" y2="568" stroke="#000" stroke-width="2"/>
  <line x1="520" y1="562" x2="520" y2="574" stroke="#000" stroke-width="2"/>
  <line x1="680" y1="562" x2="680" y2="574" stroke="#000" stroke-width="2"/>
  <text x="600" y="563" font-family="Georgia,serif" font-size="11" font-weight="bold" fill="#000" text-anchor="middle">t½ = 10 s</text>

  <!-- Constant t½ annotation arrow -->
  <text x="420" y="130" font-family="Georgia,serif" font-size="12" font-weight="bold" fill="#000">Each t½ = constant = 10 s</text>
  <text x="420" y="148" font-family="Georgia,serif" font-size="10" fill="#000">(diagnostic of first-order kinetics)</text>

  <!-- Info box -->
  <rect x="396" y="160" width="316" height="88" rx="5" fill="#fff" stroke="#000" stroke-width="1.8" stroke-dasharray="5,3"/>
  <text x="554" y="178" font-family="Georgia,serif" font-size="11" font-weight="bold" fill="#000" text-anchor="middle">Key Equations:</text>
  <text x="406" y="196" font-family="Georgia,serif" font-size="10" fill="#000">t½ = ln 2 / k = 0.693 / k</text>
  <text x="406" y="214" font-family="Georgia,serif" font-size="10" fill="#000">k = 0.693 / t½ = 0.0693 s⁻¹</text>
  <text x="406" y="232" font-family="Georgia,serif" font-size="10" fill="#000">[A] = [A]₀ × (½)ⁿ  (after n half-lives)</text>
  <text x="406" y="240" font-family="Georgia,serif" font-size="10" fill="#000">e.g. after 3t½: [A] = 100×(½)³ = 12.5</text>

</svg>`;



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


  // ─── 1. ATOMIC STRUCTURE DIAGRAM — Carbon (Z=6) ──────────────────────────
  static atomicStructureDiagramSvg = `<?xml version="1.0" encoding="utf-8"?>
<svg version="1.1" xmlns="http://www.w3.org/2000/svg"
     width="700px" height="700px" viewBox="0 0 700 700">

  <rect x="0" y="0" width="700" height="700" fill="#ffffff"/>

  <text x="350" y="30" font-family="Georgia,serif" font-size="16" font-weight="bold"
        fill="#000000" text-anchor="middle">Carbon Atom Structure</text>
  <text x="350" y="50" font-family="Georgia,serif" font-size="11" fill="#000000" text-anchor="middle">
    Bohr model — Z = 6, shell config: 2, 4
  </text>

  <!-- Shell K (n=1) r=90 -->
  <circle cx="350" cy="370" r="90" fill="none" stroke="#000000" stroke-width="1.5" stroke-dasharray="7,4"/>
  <!-- Shell L (n=2) r=180 -->
  <circle cx="350" cy="370" r="180" fill="none" stroke="#000000" stroke-width="1.5" stroke-dasharray="7,4"/>

  <!-- Nucleus -->
  <circle cx="350" cy="370" r="42" fill="#ffffff" stroke="#000000" stroke-width="3"/>
  <text x="350" y="363" font-family="Georgia,serif" font-size="13" font-weight="bold"
        fill="#000000" text-anchor="middle">6p⁺</text>
  <text x="350" y="379" font-family="Georgia,serif" font-size="13" fill="#000000" text-anchor="middle">6n⁰</text>
  <text x="350" y="395" font-family="Georgia,serif" font-size="10" fill="#000000" text-anchor="middle">nucleus</text>

  <!-- Shell K — 2 electrons at 90° and 270° -->
  <circle cx="350" cy="280" r="9" fill="#000000" stroke="#000000" stroke-width="1.5"/>
  <circle cx="350" cy="460" r="9" fill="#000000" stroke="#000000" stroke-width="1.5"/>

  <!-- Shell L — 4 electrons at 0°, 90°, 180°, 270° -->
  <circle cx="530" cy="370" r="9" fill="#ffffff" stroke="#000000" stroke-width="2"/>
  <circle cx="350" cy="190" r="9" fill="#ffffff" stroke="#000000" stroke-width="2"/>
  <circle cx="170" cy="370" r="9" fill="#ffffff" stroke="#000000" stroke-width="2"/>
  <circle cx="350" cy="550" r="9" fill="#ffffff" stroke="#000000" stroke-width="2"/>

  <!-- Shell labels -->
  <text x="452" y="296" font-family="Georgia,serif" font-size="12" font-weight="bold" fill="#000000">K shell (n=1)</text>
  <text x="452" y="311" font-family="Georgia,serif" font-size="10" fill="#000000">2 electrons  max 2</text>

  <text x="544" y="340" font-family="Georgia,serif" font-size="12" font-weight="bold" fill="#000000">L shell (n=2)</text>
  <text x="544" y="355" font-family="Georgia,serif" font-size="10" fill="#000000">4 electrons  max 8</text>

  <!-- Leader lines -->
  <line x1="450" y1="300" x2="390" y2="310" stroke="#000000" stroke-width="1" stroke-dasharray="3,2"/>
  <line x1="542" y1="344" x2="520" y2="370" stroke="#000000" stroke-width="1" stroke-dasharray="3,2"/>

  <!-- Energy arrow -->
  <line x1="60" y1="560" x2="60" y2="180" stroke="#000000" stroke-width="2"/>
  <polygon points="55,184 60,170 65,184" fill="#000000"/>
  <text x="62" y="385" font-family="Georgia,serif" font-size="10" fill="#000000"
        transform="rotate(-90 62 380)">Increasing Energy →</text>

  <!-- Configuration box -->
  <rect x="60" y="600" width="580" height="70" rx="5"
        fill="#ffffff" stroke="#000000" stroke-width="2" stroke-dasharray="5,3"/>
  <text x="75" y="621" font-family="Georgia,serif" font-size="12" font-weight="bold" fill="#000000">
    Electron Configuration of Carbon (Z = 6):
  </text>
  <text x="75" y="639" font-family="Georgia,serif" font-size="12" fill="#000000">
    Shell notation: K, L → 2, 4
  </text>
  <text x="75" y="657" font-family="Georgia,serif" font-size="12" fill="#000000">
    Orbital notation: 1s² 2s² 2p²     Valence electrons: 4 (Group IV)
  </text>
</svg>`;

  // ─── 2. ELECTRON CONFIGURATION DIAGRAM — Iron (Z=26) ────────────────────
  static electronConfigurationDiagramSvg = `<?xml version="1.0" encoding="utf-8"?>
<svg version="1.1" xmlns="http://www.w3.org/2000/svg"
     width="900px" height="600px" viewBox="0 0 900 600">

  <rect x="0" y="0" width="900" height="600" fill="#ffffff"/>

  <text x="450" y="32" font-family="Georgia,serif" font-size="16" font-weight="bold"
        fill="#000000" text-anchor="middle">Electron Configuration — Iron (Fe, Z = 26)</text>
  <text x="450" y="52" font-family="Georgia,serif" font-size="11" fill="#000000" text-anchor="middle">
    Orbital filling diagram showing spin-up (↑) and spin-down (↓) electrons
  </text>

  <!-- Helper: draws a subshell block -->
  <!-- 1s (1 box) -->
  <text x="55" y="105" font-family="Georgia,serif" font-size="12" font-weight="bold" fill="#000000">1s</text>
  <rect x="85" y="88" width="44" height="28" fill="#ffffff" stroke="#000000" stroke-width="2"/>
  <text x="107" y="108" font-family="Georgia,serif" font-size="14" fill="#000000" text-anchor="middle">↑↓</text>

  <!-- 2s -->
  <text x="55" y="160" font-family="Georgia,serif" font-size="12" font-weight="bold" fill="#000000">2s</text>
  <rect x="85" y="143" width="44" height="28" fill="#ffffff" stroke="#000000" stroke-width="2"/>
  <text x="107" y="163" font-family="Georgia,serif" font-size="14" fill="#000000" text-anchor="middle">↑↓</text>

  <!-- 2p (3 boxes) -->
  <text x="55" y="215" font-family="Georgia,serif" font-size="12" font-weight="bold" fill="#000000">2p</text>
  <rect x="85" y="198" width="44" height="28" fill="#ffffff" stroke="#000000" stroke-width="2"/>
  <text x="107" y="218" font-family="Georgia,serif" font-size="14" fill="#000000" text-anchor="middle">↑↓</text>
  <rect x="133" y="198" width="44" height="28" fill="#ffffff" stroke="#000000" stroke-width="2"/>
  <text x="155" y="218" font-family="Georgia,serif" font-size="14" fill="#000000" text-anchor="middle">↑↓</text>
  <rect x="181" y="198" width="44" height="28" fill="#ffffff" stroke="#000000" stroke-width="2"/>
  <text x="203" y="218" font-family="Georgia,serif" font-size="14" fill="#000000" text-anchor="middle">↑↓</text>

  <!-- 3s -->
  <text x="55" y="270" font-family="Georgia,serif" font-size="12" font-weight="bold" fill="#000000">3s</text>
  <rect x="85" y="253" width="44" height="28" fill="#ffffff" stroke="#000000" stroke-width="2"/>
  <text x="107" y="273" font-family="Georgia,serif" font-size="14" fill="#000000" text-anchor="middle">↑↓</text>

  <!-- 3p (3 boxes) -->
  <text x="55" y="325" font-family="Georgia,serif" font-size="12" font-weight="bold" fill="#000000">3p</text>
  <rect x="85" y="308" width="44" height="28" fill="#ffffff" stroke="#000000" stroke-width="2"/>
  <text x="107" y="328" font-family="Georgia,serif" font-size="14" fill="#000000" text-anchor="middle">↑↓</text>
  <rect x="133" y="308" width="44" height="28" fill="#ffffff" stroke="#000000" stroke-width="2"/>
  <text x="155" y="328" font-family="Georgia,serif" font-size="14" fill="#000000" text-anchor="middle">↑↓</text>
  <rect x="181" y="308" width="44" height="28" fill="#ffffff" stroke="#000000" stroke-width="2"/>
  <text x="203" y="328" font-family="Georgia,serif" font-size="14" fill="#000000" text-anchor="middle">↑↓</text>

  <!-- 3d (5 boxes) — Fe has [Ar]3d⁶4s² → 3d: 4 paired +2 unpaired by Hund -->
  <text x="55" y="380" font-family="Georgia,serif" font-size="12" font-weight="bold" fill="#000000">3d</text>
  <rect x="85" y="363" width="44" height="28" fill="#ffffff" stroke="#000000" stroke-width="2"/>
  <text x="107" y="383" font-family="Georgia,serif" font-size="14" fill="#000000" text-anchor="middle">↑↓</text>
  <rect x="133" y="363" width="44" height="28" fill="#ffffff" stroke="#000000" stroke-width="2"/>
  <text x="155" y="383" font-family="Georgia,serif" font-size="14" fill="#000000" text-anchor="middle">↑↓</text>
  <rect x="181" y="363" width="44" height="28" fill="#ffffff" stroke="#000000" stroke-width="2"/>
  <text x="203" y="383" font-family="Georgia,serif" font-size="14" fill="#000000" text-anchor="middle">↑↓</text>
  <rect x="229" y="363" width="44" height="28" fill="#ffffff" stroke="#000000" stroke-width="2"/>
  <text x="251" y="383" font-family="Georgia,serif" font-size="14" fill="#000000" text-anchor="middle">↑</text>
  <rect x="277" y="363" width="44" height="28" fill="#ffffff" stroke="#000000" stroke-width="2"/>
  <text x="299" y="383" font-family="Georgia,serif" font-size="14" fill="#000000" text-anchor="middle">↑</text>

  <!-- 4s -->
  <text x="55" y="435" font-family="Georgia,serif" font-size="12" font-weight="bold" fill="#000000">4s</text>
  <rect x="85" y="418" width="44" height="28" fill="#ffffff" stroke="#000000" stroke-width="2"/>
  <text x="107" y="438" font-family="Georgia,serif" font-size="14" fill="#000000" text-anchor="middle">↑↓</text>

  <!-- Energy axis -->
  <line x1="38" y1="450" x2="38" y2="78" stroke="#000000" stroke-width="2"/>
  <polygon points="33,82 38,68 43,82" fill="#000000"/>
  <text x="14" y="280" font-family="Georgia,serif" font-size="10" fill="#000000"
        transform="rotate(-90 22 270)">Energy →</text>

  <!-- Notation + rules box -->
  <rect x="380" y="80" width="490" height="360" rx="5"
        fill="#ffffff" stroke="#000000" stroke-width="2"/>
  <text x="395" y="106" font-family="Georgia,serif" font-size="13" font-weight="bold" fill="#000000">
    Orbital Notation Rules:
  </text>
  <text x="395" y="128" font-family="Georgia,serif" font-size="11" fill="#000000">
    1. Aufbau Principle: fill lowest energy first
  </text>
  <text x="395" y="148" font-family="Georgia,serif" font-size="11" fill="#000000">
    2. Pauli Exclusion: max 2 e⁻ per orbital, opposite spins
  </text>
  <text x="395" y="168" font-family="Georgia,serif" font-size="11" fill="#000000">
    3. Hund's Rule: one e⁻ per orbital before pairing
  </text>
  <line x1="395" y1="178" x2="855" y2="178" stroke="#000000" stroke-width="1"/>
  <text x="395" y="200" font-family="Georgia,serif" font-size="13" font-weight="bold" fill="#000000">
    Full notation:
  </text>
  <text x="395" y="222" font-family="Georgia,serif" font-size="11" fill="#000000">
    1s² 2s² 2p⁶ 3s² 3p⁶ 3d⁶ 4s²
  </text>
  <text x="395" y="244" font-family="Georgia,serif" font-size="11" fill="#000000">
    Abbreviated: [Ar] 3d⁶ 4s²
  </text>
  <line x1="395" y1="256" x2="855" y2="256" stroke="#000000" stroke-width="1"/>
  <text x="395" y="278" font-family="Georgia,serif" font-size="11" fill="#000000">
    Unpaired electrons in 3d: 4 (↑ in boxes 4 and 5)
  </text>
  <text x="395" y="298" font-family="Georgia,serif" font-size="11" fill="#000000">
    → Fe is paramagnetic (attracted to magnetic fields)
  </text>
  <text x="395" y="318" font-family="Georgia,serif" font-size="11" fill="#000000">
    Common oxidation states: Fe²⁺ (lose 4s²),
  </text>
  <text x="395" y="338" font-family="Georgia,serif" font-size="11" fill="#000000">
    Fe³⁺ (lose 4s² + one 3d electron)
  </text>

  <!-- Legend -->
  <rect x="60" y="480" width="780" height="90" rx="5"
        fill="#ffffff" stroke="#000000" stroke-width="2" stroke-dasharray="5,3"/>
  <text x="80" y="500" font-family="Georgia,serif" font-size="11" font-weight="bold" fill="#000000">Legend:</text>
  <text x="80" y="520" font-family="Georgia,serif" font-size="11" fill="#000000">
    ↑ = spin-up electron    ↓ = spin-down electron    ↑↓ = paired electrons    □ = empty orbital
  </text>
  <text x="80" y="540" font-family="Georgia,serif" font-size="11" fill="#000000">
    Filling order: 1s 2s 2p 3s 3p 4s 3d 4p 5s 4d …  (Madelung/Aufbau rule)
  </text>
  <text x="80" y="558" font-family="Georgia,serif" font-size="10" fill="#000000">
    Note: 3d filled after 4s but 3d electrons lost before 4s in transition metal ion formation
  </text>
</svg>`;

  // ─── 3. ORBITAL SHAPES DIAGRAM ───────────────────────────────────────────
  static orbitalShapesDiagramSvg = `<?xml version="1.0" encoding="utf-8"?>
<svg version="1.1" xmlns="http://www.w3.org/2000/svg"
     width="1000px" height="700px" viewBox="0 0 1000 700">

  <rect x="0" y="0" width="1000" height="700" fill="#ffffff"/>

  <text x="500" y="32" font-family="Georgia,serif" font-size="16" font-weight="bold"
        fill="#000000" text-anchor="middle">Atomic Orbital Shapes</text>
  <text x="500" y="52" font-family="Georgia,serif" font-size="11" fill="#000000" text-anchor="middle">
    Boundary surface representations of s, p, d, f orbitals
  </text>

  <!-- === 1s orbital (sphere) === -->
  <text x="120" y="100" font-family="Georgia,serif" font-size="14" font-weight="bold"
        fill="#000000" text-anchor="middle">1s orbital</text>
  <circle cx="120" cy="200" r="70" fill="#ffffff" stroke="#000000" stroke-width="2.5"/>
  <!-- node dot at centre -->
  <circle cx="120" cy="200" r="4" fill="#000000"/>
  <text x="120" y="285" font-family="Georgia,serif" font-size="11" fill="#000000" text-anchor="middle">Spherical</text>
  <text x="120" y="300" font-family="Georgia,serif" font-size="10" fill="#000000" text-anchor="middle">l = 0,  mₗ = 0</text>
  <text x="120" y="315" font-family="Georgia,serif" font-size="10" fill="#000000" text-anchor="middle">1 orbital</text>

  <!-- === 2p orbital (dumbbell) — x,y,z shown === -->
  <text x="360" y="100" font-family="Georgia,serif" font-size="14" font-weight="bold"
        fill="#000000" text-anchor="middle">2p orbitals</text>

  <!-- 2px: horizontal dumbbell -->
  <ellipse cx="290" cy="200" rx="58" ry="32" fill="#ffffff" stroke="#000000" stroke-width="2.5"
           transform="rotate(0 290 200)"/>
  <ellipse cx="360" cy="200" rx="58" ry="32" fill="#ffffff" stroke="#000000" stroke-width="2"
           stroke-dasharray="4,3"/>
  <!-- node plane (vertical line) -->
  <line x1="325" y1="160" x2="325" y2="240" stroke="#000000" stroke-width="1.5" stroke-dasharray="3,2"/>
  <circle cx="325" cy="200" r="3" fill="#000000"/>
  <text x="260" y="215" font-family="Georgia,serif" font-size="9" fill="#000000">−</text>
  <text x="385" y="215" font-family="Georgia,serif" font-size="9" fill="#000000">+</text>
  <text x="325" y="255" font-family="Georgia,serif" font-size="10" fill="#000000" text-anchor="middle">2pₓ</text>

  <!-- 2py: vertical dumbbell -->
  <ellipse cx="465" cy="150" rx="32" ry="55" fill="#ffffff" stroke="#000000" stroke-width="2.5"/>
  <ellipse cx="465" cy="250" rx="32" ry="55" fill="#ffffff" stroke="#000000" stroke-width="2"
           stroke-dasharray="4,3"/>
  <line x1="425" y1="200" x2="505" y2="200" stroke="#000000" stroke-width="1.5" stroke-dasharray="3,2"/>
  <circle cx="465" cy="200" r="3" fill="#000000"/>
  <text x="468" y="148" font-family="Georgia,serif" font-size="9" fill="#000000">+</text>
  <text x="468" y="262" font-family="Georgia,serif" font-size="9" fill="#000000">−</text>
  <text x="465" y="320" font-family="Georgia,serif" font-size="10" fill="#000000" text-anchor="middle">2p_y</text>

  <text x="360" y="340" font-family="Georgia,serif" font-size="11" fill="#000000" text-anchor="middle">l = 1,  mₗ = −1, 0, +1  →  3 orbitals</text>
  <text x="360" y="355" font-family="Georgia,serif" font-size="10" fill="#000000" text-anchor="middle">Dumbbell shape with nodal plane at nucleus</text>

  <!-- === 3d orbital (four-lobed) === -->
  <text x="730" y="100" font-family="Georgia,serif" font-size="14" font-weight="bold"
        fill="#000000" text-anchor="middle">3d orbitals</text>

  <!-- d_xy: four lobes between axes -->
  <!-- Lobe 1 NE -->
  <ellipse cx="770" cy="160" rx="45" ry="28" fill="#ffffff" stroke="#000000" stroke-width="2"
           transform="rotate(-45 770 160)"/>
  <!-- Lobe 2 SW -->
  <ellipse cx="690" cy="240" rx="45" ry="28" fill="#ffffff" stroke="#000000" stroke-width="2"
           transform="rotate(-45 690 240)"/>
  <!-- Lobe 3 NW -->
  <ellipse cx="690" cy="160" rx="45" ry="28" fill="#ffffff" stroke="#000000" stroke-width="2"
           transform="rotate(45 690 160)"/>
  <!-- Lobe 4 SE -->
  <ellipse cx="770" cy="240" rx="45" ry="28" fill="#ffffff" stroke="#000000" stroke-width="2"
           transform="rotate(45 770 240)"/>
  <!-- axes -->
  <line x1="620" y1="200" x2="840" y2="200" stroke="#000000" stroke-width="1" stroke-dasharray="4,3"/>
  <line x1="730" y1="80" x2="730" y2="320" stroke="#000000" stroke-width="1" stroke-dasharray="4,3"/>
  <circle cx="730" cy="200" r="4" fill="#000000"/>
  <text x="844" y="203" font-family="Georgia,serif" font-size="10" fill="#000000">x</text>
  <text x="733" y="76" font-family="Georgia,serif" font-size="10" fill="#000000">y</text>
  <text x="730" y="345" font-family="Georgia,serif" font-size="10" fill="#000000" text-anchor="middle">3d_xy  (one of 5)</text>
  <text x="730" y="360" font-family="Georgia,serif" font-size="11" fill="#000000" text-anchor="middle">l = 2,  mₗ = −2,−1, 0,+1,+2  →  5 orbitals</text>

  <!-- === f orbital (complex) simplified === -->
  <text x="500" y="430" font-family="Georgia,serif" font-size="14" font-weight="bold"
        fill="#000000" text-anchor="middle">4f orbital (simplified)</text>
  <!-- 8 lobes represented as 4 pairs -->
  <ellipse cx="440" cy="530" rx="38" ry="22" fill="#ffffff" stroke="#000000" stroke-width="2"
           transform="rotate(-22 440 530)"/>
  <ellipse cx="490" cy="490" rx="38" ry="22" fill="#ffffff" stroke="#000000" stroke-width="2"
           transform="rotate(22 490 490)"/>
  <ellipse cx="510" cy="570" rx="38" ry="22" fill="#ffffff" stroke="#000000" stroke-width="2"
           transform="rotate(-60 510 570)"/>
  <ellipse cx="560" cy="510" rx="38" ry="22" fill="#ffffff" stroke="#000000" stroke-width="2"
           transform="rotate(60 560 510)"/>
  <circle cx="500" cy="530" r="4" fill="#000000"/>
  <text x="500" y="610" font-family="Georgia,serif" font-size="11" fill="#000000" text-anchor="middle">
    l = 3,  mₗ = −3 to +3  →  7 orbitals  (complex multi-lobed shapes)
  </text>

  <!-- Summary box -->
  <rect x="30" y="640" width="940" height="50" rx="5"
        fill="#ffffff" stroke="#000000" stroke-width="2" stroke-dasharray="5,3"/>
  <text x="50" y="660" font-family="Georgia,serif" font-size="11" font-weight="bold" fill="#000000">
    Summary: s (1 orbital) | p (3 orbitals) | d (5 orbitals) | f (7 orbitals)
  </text>
  <text x="50" y="678" font-family="Georgia,serif" font-size="11" fill="#000000">
    + and − labels indicate phase of wavefunction (not charge).  Nodal planes/surfaces shown as dashed lines.
  </text>
</svg>`;

  // ─── 4. ISOTOPE COMPARISON DIAGRAM — Carbon ──────────────────────────────
  static isotopeDiagramSvg = `<?xml version="1.0" encoding="utf-8"?>
<svg version="1.1" xmlns="http://www.w3.org/2000/svg"
     width="1000px" height="600px" viewBox="0 0 1000 600">

  <rect x="0" y="0" width="1000" height="600" fill="#ffffff"/>

  <text x="500" y="32" font-family="Georgia,serif" font-size="16" font-weight="bold"
        fill="#000000" text-anchor="middle">Carbon Isotopes</text>
  <text x="500" y="52" font-family="Georgia,serif" font-size="11" fill="#000000" text-anchor="middle">
    Same element (Z = 6), different number of neutrons — same electron configuration
  </text>

  <!-- === Carbon-12 === -->
  <!-- Nucleus -->
  <circle cx="180" cy="260" r="55" fill="#ffffff" stroke="#000000" stroke-width="3"/>
  <text x="180" y="252" font-family="Georgia,serif" font-size="13" font-weight="bold"
        fill="#000000" text-anchor="middle">6p⁺</text>
  <text x="180" y="270" font-family="Georgia,serif" font-size="13" fill="#000000" text-anchor="middle">6n⁰</text>
  <!-- K shell -->
  <circle cx="180" cy="260" r="100" fill="none" stroke="#000000" stroke-width="1.5" stroke-dasharray="6,4"/>
  <circle cx="180" cy="160" r="8" fill="#000000"/>
  <circle cx="180" cy="360" r="8" fill="#000000"/>
  <!-- L shell -->
  <circle cx="180" cy="260" r="160" fill="none" stroke="#000000" stroke-width="1.5" stroke-dasharray="6,4"/>
  <circle cx="340" cy="260" r="8" fill="#ffffff" stroke="#000000" stroke-width="2"/>
  <circle cx="180" cy="100" r="8" fill="#ffffff" stroke="#000000" stroke-width="2"/>
  <circle cx="20"  cy="260" r="8" fill="#ffffff" stroke="#000000" stroke-width="2"/>
  <circle cx="180" cy="420" r="8" fill="#ffffff" stroke="#000000" stroke-width="2"/>
  <!-- Label -->
  <text x="180" y="445" font-family="Georgia,serif" font-size="18" font-weight="bold"
        fill="#000000" text-anchor="middle">¹²C</text>
  <text x="180" y="463" font-family="Georgia,serif" font-size="11" fill="#000000" text-anchor="middle">
    6p⁺  6n⁰  6e⁻
  </text>
  <text x="180" y="479" font-family="Georgia,serif" font-size="10" fill="#000000" text-anchor="middle">
    Mass: 12.000 u  (98.9%)
  </text>
  <text x="180" y="495" font-family="Georgia,serif" font-size="10" fill="#000000" text-anchor="middle">
    Stable | reference standard
  </text>

  <!-- === Carbon-13 === -->
  <circle cx="500" cy="260" r="55" fill="#ffffff" stroke="#000000" stroke-width="3"/>
  <text x="500" y="252" font-family="Georgia,serif" font-size="13" font-weight="bold"
        fill="#000000" text-anchor="middle">6p⁺</text>
  <text x="500" y="270" font-family="Georgia,serif" font-size="13" fill="#000000" text-anchor="middle">7n⁰</text>
  <!-- extra neutron hatch -->
  <line x1="480" y1="268" x2="520" y2="268" stroke="#000000" stroke-width="1" stroke-dasharray="2,2"/>
  <circle cx="500" cy="260" r="100" fill="none" stroke="#000000" stroke-width="1.5" stroke-dasharray="6,4"/>
  <circle cx="500" cy="160" r="8" fill="#000000"/>
  <circle cx="500" cy="360" r="8" fill="#000000"/>
  <circle cx="500" cy="260" r="160" fill="none" stroke="#000000" stroke-width="1.5" stroke-dasharray="6,4"/>
  <circle cx="660" cy="260" r="8" fill="#ffffff" stroke="#000000" stroke-width="2"/>
  <circle cx="500" cy="100" r="8" fill="#ffffff" stroke="#000000" stroke-width="2"/>
  <circle cx="340" cy="260" r="8" fill="#ffffff" stroke="#000000" stroke-width="2"/>
  <circle cx="500" cy="420" r="8" fill="#ffffff" stroke="#000000" stroke-width="2"/>
  <text x="500" y="445" font-family="Georgia,serif" font-size="18" font-weight="bold"
        fill="#000000" text-anchor="middle">¹³C</text>
  <text x="500" y="463" font-family="Georgia,serif" font-size="11" fill="#000000" text-anchor="middle">
    6p⁺  7n⁰  6e⁻
  </text>
  <text x="500" y="479" font-family="Georgia,serif" font-size="10" fill="#000000" text-anchor="middle">
    Mass: 13.003 u  (1.1%)
  </text>
  <text x="500" y="495" font-family="Georgia,serif" font-size="10" fill="#000000" text-anchor="middle">
    Stable | NMR active (¹³C NMR)
  </text>

  <!-- === Carbon-14 === -->
  <circle cx="820" cy="260" r="55" fill="#ffffff" stroke="#000000" stroke-width="3"/>
  <text x="820" y="252" font-family="Georgia,serif" font-size="13" font-weight="bold"
        fill="#000000" text-anchor="middle">6p⁺</text>
  <text x="820" y="270" font-family="Georgia,serif" font-size="13" fill="#000000" text-anchor="middle">8n⁰</text>
  <line x1="800" y1="268" x2="840" y2="268" stroke="#000000" stroke-width="1" stroke-dasharray="2,2"/>
  <line x1="800" y1="276" x2="840" y2="276" stroke="#000000" stroke-width="1" stroke-dasharray="2,2"/>
  <circle cx="820" cy="260" r="100" fill="none" stroke="#000000" stroke-width="1.5" stroke-dasharray="6,4"/>
  <circle cx="820" cy="160" r="8" fill="#000000"/>
  <circle cx="820" cy="360" r="8" fill="#000000"/>
  <circle cx="820" cy="260" r="160" fill="none" stroke="#000000" stroke-width="1.5" stroke-dasharray="6,4"/>
  <circle cx="980" cy="260" r="8" fill="#ffffff" stroke="#000000" stroke-width="2"/>
  <circle cx="820" cy="100" r="8" fill="#ffffff" stroke="#000000" stroke-width="2"/>
  <circle cx="660" cy="260" r="8" fill="#ffffff" stroke="#000000" stroke-width="2"/>
  <circle cx="820" cy="420" r="8" fill="#ffffff" stroke="#000000" stroke-width="2"/>
  <text x="820" y="445" font-family="Georgia,serif" font-size="18" font-weight="bold"
        fill="#000000" text-anchor="middle">¹⁴C</text>
  <text x="820" y="463" font-family="Georgia,serif" font-size="11" fill="#000000" text-anchor="middle">
    6p⁺  8n⁰  6e⁻
  </text>
  <text x="820" y="479" font-family="Georgia,serif" font-size="10" fill="#000000" text-anchor="middle">
    Mass: 14.003 u  (trace)
  </text>
  <text x="820" y="495" font-family="Georgia,serif" font-size="10" fill="#000000" text-anchor="middle">
    Radioactive t½ = 5730 yr | radiocarbon dating
  </text>

  <!-- Summary box -->
  <rect x="30" y="520" width="940" height="62" rx="5"
        fill="#ffffff" stroke="#000000" stroke-width="2" stroke-dasharray="5,3"/>
  <text x="50" y="540" font-family="Georgia,serif" font-size="11" font-weight="bold" fill="#000000">
    Isotopes: same proton number (Z), different neutron number (N), hence different mass number (A = Z + N)
  </text>
  <text x="50" y="558" font-family="Georgia,serif" font-size="11" fill="#000000">
    Same chemical properties (same electron config) but different physical properties (mass, stability, nuclear spin)
  </text>
  <text x="50" y="574" font-family="Georgia,serif" font-size="10" fill="#000000">
    Filled circles (●) = K-shell electrons  |  Open circles (○) = L-shell electrons  |  Extra hatch lines in nucleus = extra neutrons
  </text>
</svg>`;

  // ─── 5. ION FORMATION DIAGRAM — Sodium Na → Na⁺ ─────────────────────────
  static ionFormationDiagramSvg = `<?xml version="1.0" encoding="utf-8"?>
<svg version="1.1" xmlns="http://www.w3.org/2000/svg"
     width="900px" height="600px" viewBox="0 0 900 600">

  <rect x="0" y="0" width="900" height="600" fill="#ffffff"/>

  <text x="450" y="30" font-family="Georgia,serif" font-size="16" font-weight="bold"
        fill="#000000" text-anchor="middle">Sodium Ion Formation — Na → Na⁺</text>
  <text x="450" y="50" font-family="Georgia,serif" font-size="11" fill="#000000" text-anchor="middle">
    Loss of one valence electron to form a stable cation (isoelectronic with Ne)
  </text>

  <!-- === BEFORE: Na atom === -->
  <text x="180" y="88" font-family="Georgia,serif" font-size="14" font-weight="bold"
        fill="#000000" text-anchor="middle">Sodium Atom (Na)</text>

  <!-- Nucleus -->
  <circle cx="180" cy="270" r="38" fill="#ffffff" stroke="#000000" stroke-width="3"/>
  <text x="180" y="264" font-family="Georgia,serif" font-size="12" font-weight="bold"
        fill="#000000" text-anchor="middle">11p⁺</text>
  <text x="180" y="280" font-family="Georgia,serif" font-size="12" fill="#000000" text-anchor="middle">12n⁰</text>

  <!-- K shell r=70 -->
  <circle cx="180" cy="270" r="70" fill="none" stroke="#000000" stroke-width="1.5" stroke-dasharray="5,3"/>
  <circle cx="180" cy="200" r="7" fill="#000000"/>
  <circle cx="180" cy="340" r="7" fill="#000000"/>

  <!-- L shell r=130 -->
  <circle cx="180" cy="270" r="130" fill="none" stroke="#000000" stroke-width="1.5" stroke-dasharray="5,3"/>
  <circle cx="310" cy="270" r="7" fill="#ffffff" stroke="#000000" stroke-width="2"/>
  <circle cx="180" cy="140" r="7" fill="#ffffff" stroke="#000000" stroke-width="2"/>
  <circle cx="50"  cy="270" r="7" fill="#ffffff" stroke="#000000" stroke-width="2"/>
  <circle cx="180" cy="400" r="7" fill="#ffffff" stroke="#000000" stroke-width="2"/>
  <circle cx="272" cy="178" r="7" fill="#ffffff" stroke="#000000" stroke-width="2"/>
  <circle cx="272" cy="362" r="7" fill="#ffffff" stroke="#000000" stroke-width="2"/>
  <circle cx="88"  cy="178" r="7" fill="#ffffff" stroke="#000000" stroke-width="2"/>
  <circle cx="88"  cy="362" r="7" fill="#ffffff" stroke="#000000" stroke-width="2"/>

  <!-- M shell r=190 — 1 electron (valence) at top -->
  <circle cx="180" cy="270" r="190" fill="none" stroke="#000000" stroke-width="2" stroke-dasharray="8,4"/>
  <!-- valence electron at top -->
  <circle cx="180" cy="80" r="9" fill="#ffffff" stroke="#000000" stroke-width="2.5"/>
  <!-- arrow pointing away: this electron will be lost -->
  <line x1="180" y1="70" x2="180" y2="42" stroke="#000000" stroke-width="2"/>
  <polygon points="175,46 180,32 185,46" fill="#000000"/>
  <text x="185" y="36" font-family="Georgia,serif" font-size="9" fill="#000000">lost →</text>

  <!-- Shell and config labels -->
  <text x="180" y="488" font-family="Georgia,serif" font-size="11" fill="#000000" text-anchor="middle">
    Config: 2, 8, 1   (11 electrons)
  </text>
  <text x="180" y="504" font-family="Georgia,serif" font-size="10" fill="#000000" text-anchor="middle">
    1s² 2s² 2p⁶ 3s¹
  </text>

  <!-- === ARROW === -->
  <line x1="390" y1="270" x2="510" y2="270" stroke="#000000" stroke-width="3"/>
  <polygon points="506,263 520,270 506,277" fill="#000000"/>
  <text x="450" y="258" font-family="Georgia,serif" font-size="12" fill="#000000" text-anchor="middle">
    − e⁻
  </text>
  <text x="450" y="295" font-family="Georgia,serif" font-size="10" fill="#000000" text-anchor="middle">
    (ionisation)
  </text>

  <!-- === AFTER: Na⁺ ion === -->
  <text x="700" y="88" font-family="Georgia,serif" font-size="14" font-weight="bold"
        fill="#000000" text-anchor="middle">Sodium Ion (Na⁺)</text>

  <!-- Nucleus (same) -->
  <circle cx="700" cy="270" r="38" fill="#ffffff" stroke="#000000" stroke-width="3"/>
  <text x="700" y="264" font-family="Georgia,serif" font-size="12" font-weight="bold"
        fill="#000000" text-anchor="middle">11p⁺</text>
  <text x="700" y="280" font-family="Georgia,serif" font-size="12" fill="#000000" text-anchor="middle">12n⁰</text>

  <!-- K shell r=70 -->
  <circle cx="700" cy="270" r="70" fill="none" stroke="#000000" stroke-width="1.5" stroke-dasharray="5,3"/>
  <circle cx="700" cy="200" r="7" fill="#000000"/>
  <circle cx="700" cy="340" r="7" fill="#000000"/>

  <!-- L shell r=130 — now outermost, 8 electrons -->
  <circle cx="700" cy="270" r="130" fill="none" stroke="#000000" stroke-width="2.5"/>
  <circle cx="830" cy="270" r="7" fill="#ffffff" stroke="#000000" stroke-width="2"/>
  <circle cx="700" cy="140" r="7" fill="#ffffff" stroke="#000000" stroke-width="2"/>
  <circle cx="570" cy="270" r="7" fill="#ffffff" stroke="#000000" stroke-width="2"/>
  <circle cx="700" cy="400" r="7" fill="#ffffff" stroke="#000000" stroke-width="2"/>
  <circle cx="792" cy="178" r="7" fill="#ffffff" stroke="#000000" stroke-width="2"/>
  <circle cx="792" cy="362" r="7" fill="#ffffff" stroke="#000000" stroke-width="2"/>
  <circle cx="608" cy="178" r="7" fill="#ffffff" stroke="#000000" stroke-width="2"/>
  <circle cx="608" cy="362" r="7" fill="#ffffff" stroke="#000000" stroke-width="2"/>

  <!-- Charge label -->
  <text x="700" y="440" font-family="Georgia,serif" font-size="22" font-weight="bold"
        fill="#000000" text-anchor="middle">Na⁺</text>
  <text x="700" y="460" font-family="Georgia,serif" font-size="11" fill="#000000" text-anchor="middle">
    Config: 2, 8   (10 electrons)
  </text>
  <text x="700" y="476" font-family="Georgia,serif" font-size="10" fill="#000000" text-anchor="middle">
    1s² 2s² 2p⁶   isoelectronic with Ne
  </text>

  <!-- Summary box -->
  <rect x="30" y="520" width="840" height="62" rx="5"
        fill="#ffffff" stroke="#000000" stroke-width="2" stroke-dasharray="5,3"/>
  <text x="50" y="540" font-family="Georgia,serif" font-size="11" font-weight="bold" fill="#000000">
    Na  →  Na⁺  +  e⁻     First ionisation energy = +496 kJ mol⁻¹
  </text>
  <text x="50" y="558" font-family="Georgia,serif" font-size="11" fill="#000000">
    Cation is smaller than atom: 11 protons now attract only 10 electrons → greater effective nuclear charge per electron
  </text>
  <text x="50" y="574" font-family="Georgia,serif" font-size="10" fill="#000000">
    Na⁺ has noble gas configuration of Ne — fully filled L shell, very stable
  </text>
</svg>`;

  // ─── 6. IONIZATION ENERGY GRAPH — Period 3 ───────────────────────────────
  static ionizationEnergyGraphSvg = `<?xml version="1.0" encoding="utf-8"?>
<svg version="1.1" xmlns="http://www.w3.org/2000/svg"
     width="900px" height="600px" viewBox="0 0 900 600">

  <rect x="0" y="0" width="900" height="600" fill="#ffffff"/>

  <text x="450" y="30" font-family="Georgia,serif" font-size="16" font-weight="bold"
        fill="#000000" text-anchor="middle">First Ionisation Energy — Period 3</text>
  <text x="450" y="50" font-family="Georgia,serif" font-size="11" fill="#000000" text-anchor="middle">
    Energy required to remove one mole of electrons from gaseous atoms: X(g) → X⁺(g) + e⁻
  </text>

  <!-- Axes -->
  <!-- Y axis -->
  <line x1="100" y1="70" x2="100" y2="480" stroke="#000000" stroke-width="2.5"/>
  <polygon points="95,74 100,60 105,74" fill="#000000"/>
  <text x="20" y="290" font-family="Georgia,serif" font-size="12" fill="#000000"
        transform="rotate(-90 38 280)">1st Ionisation Energy / kJ mol⁻¹</text>

  <!-- X axis -->
  <line x1="100" y1="480" x2="860" y2="480" stroke="#000000" stroke-width="2.5"/>
  <polygon points="856,475 870,480 856,485" fill="#000000"/>
  <text x="480" y="520" font-family="Georgia,serif" font-size="12" fill="#000000" text-anchor="middle">
    Element (Period 3)
  </text>

  <!-- Y gridlines and labels (0 to 1600 kJ/mol, scale: 400px for 1600 = 0.25px/kJ) -->
  <!-- 0 = y480, 400=y380, 800=y280, 1200=y180, 1600=y80 -->
  <line x1="98" y1="380" x2="102" y2="380" stroke="#000000" stroke-width="2"/>
  <text x="88" y="384" font-family="Georgia,serif" font-size="10" fill="#000000" text-anchor="end">400</text>
  <line x1="100" y1="380" x2="860" y2="380" stroke="#000000" stroke-width="0.7" stroke-dasharray="4,4"/>
  <line x1="98" y1="280" x2="102" y2="280" stroke="#000000" stroke-width="2"/>
  <text x="88" y="284" font-family="Georgia,serif" font-size="10" fill="#000000" text-anchor="end">800</text>
  <line x1="100" y1="280" x2="860" y2="280" stroke="#000000" stroke-width="0.7" stroke-dasharray="4,4"/>
  <line x1="98" y1="180" x2="102" y2="180" stroke="#000000" stroke-width="2"/>
  <text x="88" y="184" font-family="Georgia,serif" font-size="10" fill="#000000" text-anchor="end">1200</text>
  <line x1="100" y1="180" x2="860" y2="180" stroke="#000000" stroke-width="0.7" stroke-dasharray="4,4"/>
  <line x1="98" y1="80" x2="102" y2="80" stroke="#000000" stroke-width="2"/>
  <text x="88" y="84" font-family="Georgia,serif" font-size="10" fill="#000000" text-anchor="end">1600</text>

  <!-- Data points (approximate):
       Na=496, Mg=738, Al=577, Si=786, P=1012, S=1000, Cl=1251, Ar=1521
       y = 480 - (IE/1600)*400
  -->
  <!-- Na: y=480-124=356 -->
  <circle cx="180" cy="356" r="7" fill="#000000"/>
  <text x="180" y="500" font-family="Georgia,serif" font-size="11" fill="#000000" text-anchor="middle">Na</text>
  <text x="180" y="513" font-family="Georgia,serif" font-size="9" fill="#000000" text-anchor="middle">496</text>

  <!-- Mg: y=480-184=296 -->
  <circle cx="270" cy="296" r="7" fill="#000000"/>
  <text x="270" y="500" font-family="Georgia,serif" font-size="11" fill="#000000" text-anchor="middle">Mg</text>
  <text x="270" y="513" font-family="Georgia,serif" font-size="9" fill="#000000" text-anchor="middle">738</text>

  <!-- Al: y=480-144=336 (DROP: 3p easier than 3s) -->
  <circle cx="360" cy="336" r="7" fill="#000000"/>
  <text x="360" y="500" font-family="Georgia,serif" font-size="11" fill="#000000" text-anchor="middle">Al</text>
  <text x="360" y="513" font-family="Georgia,serif" font-size="9" fill="#000000" text-anchor="middle">577</text>

  <!-- Si: y=480-196=284 -->
  <circle cx="450" cy="284" r="7" fill="#000000"/>
  <text x="450" y="500" font-family="Georgia,serif" font-size="11" fill="#000000" text-anchor="middle">Si</text>
  <text x="450" y="513" font-family="Georgia,serif" font-size="9" fill="#000000" text-anchor="middle">786</text>

  <!-- P: y=480-253=227 -->
  <circle cx="540" cy="227" r="7" fill="#000000"/>
  <text x="540" y="500" font-family="Georgia,serif" font-size="11" fill="#000000" text-anchor="middle">P</text>
  <text x="540" y="513" font-family="Georgia,serif" font-size="9" fill="#000000" text-anchor="middle">1012</text>

  <!-- S: y=480-250=230 (DROP: paired 3p electron easier to remove) -->
  <circle cx="630" cy="230" r="7" fill="#000000"/>
  <text x="630" y="500" font-family="Georgia,serif" font-size="11" fill="#000000" text-anchor="middle">S</text>
  <text x="630" y="513" font-family="Georgia,serif" font-size="9" fill="#000000" text-anchor="middle">1000</text>

  <!-- Cl: y=480-313=167 -->
  <circle cx="720" cy="167" r="7" fill="#000000"/>
  <text x="720" y="500" font-family="Georgia,serif" font-size="11" fill="#000000" text-anchor="middle">Cl</text>
  <text x="720" y="513" font-family="Georgia,serif" font-size="9" fill="#000000" text-anchor="middle">1251</text>

  <!-- Ar: y=480-380=100 -->
  <circle cx="810" cy="100" r="7" fill="#000000"/>
  <text x="810" y="500" font-family="Georgia,serif" font-size="11" fill="#000000" text-anchor="middle">Ar</text>
  <text x="810" y="513" font-family="Georgia,serif" font-size="9" fill="#000000" text-anchor="middle">1521</text>

  <!-- Connect points with line -->
  <polyline points="180,356 270,296 360,336 450,284 540,227 630,230 720,167 810,100"
            fill="none" stroke="#000000" stroke-width="2.5"/>

  <!-- Annotation arrows for drops -->
  <!-- Mg→Al drop -->
  <line x1="310" y1="296" x2="330" y2="330" stroke="#000000" stroke-width="1.5" stroke-dasharray="4,2"/>
  <text x="240" y="318" font-family="Georgia,serif" font-size="9" fill="#000000">3p above 3s;</text>
  <text x="240" y="330" font-family="Georgia,serif" font-size="9" fill="#000000">easier to remove</text>

  <!-- P→S drop -->
  <line x1="580" y1="227" x2="610" y2="232" stroke="#000000" stroke-width="1.5" stroke-dasharray="4,2"/>
  <text x="520" y="210" font-family="Georgia,serif" font-size="9" fill="#000000">paired 3p⁻ e⁻</text>
  <text x="520" y="222" font-family="Georgia,serif" font-size="9" fill="#000000">easier to remove</text>

  <!-- Overall trend arrow -->
  <line x1="160" y1="440" x2="830" y2="440" stroke="#000000" stroke-width="1.5" stroke-dasharray="6,3"/>
  <polygon points="826,435 840,440 826,445" fill="#000000"/>
  <text x="490" y="456" font-family="Georgia,serif" font-size="10" fill="#000000" text-anchor="middle">
    General increase → (increasing nuclear charge, same shielding)
  </text>

  <!-- Box -->
  <rect x="30" y="530" width="840" height="58" rx="5"
        fill="#ffffff" stroke="#000000" stroke-width="2" stroke-dasharray="5,3"/>
  <text x="50" y="549" font-family="Georgia,serif" font-size="11" font-weight="bold" fill="#000000">
    Two anomalous drops: (1) Mg→Al: 3p orbital higher energy than 3s, shielded by 3s electrons
  </text>
  <text x="50" y="567" font-family="Georgia,serif" font-size="11" fill="#000000">
    (2) P→S: S has paired 3p electrons — inter-electron repulsion in paired orbital lowers ionisation energy
  </text>
  <text x="50" y="583" font-family="Georgia,serif" font-size="10" fill="#000000">
    Ar highest in period — full outer shell, maximum nuclear attraction per electron
  </text>
</svg>`;

  // ─── 7. ATOMIC RADIUS TRENDS ─────────────────────────────────────────────
  static atomicRadiusTrendsSvg = `<?xml version="1.0" encoding="utf-8"?>
<svg version="1.1" xmlns="http://www.w3.org/2000/svg"
     width="1000px" height="700px" viewBox="0 0 1000 700">

  <rect x="0" y="0" width="1000" height="700" fill="#ffffff"/>

  <text x="500" y="32" font-family="Georgia,serif" font-size="16" font-weight="bold"
        fill="#000000" text-anchor="middle">Atomic Radius Trends</text>
  <text x="500" y="52" font-family="Georgia,serif" font-size="11" fill="#000000" text-anchor="middle">
    Across a period: decreases →   Down a group: increases ↓
  </text>

  <!-- Period 2 elements: Li Be B C N O F Ne — circles scaled to covalent radii -->
  <!-- Radii (pm): Li=152, Be=112, B=85, C=77, N=75, O=73, F=64, Ne=38 -->
  <!-- scale: 1pm = 0.55px -->
  <text x="60" y="150" font-family="Georgia,serif" font-size="12" font-weight="bold" fill="#000000">Period 2</text>

  <!-- Li r=84 -->
  <circle cx="170" cy="180" r="84" fill="#ffffff" stroke="#000000" stroke-width="2.5"/>
  <text x="170" y="183" font-family="Georgia,serif" font-size="12" font-weight="bold" fill="#000000" text-anchor="middle">Li</text>
  <text x="170" y="275" font-family="Georgia,serif" font-size="10" fill="#000000" text-anchor="middle">152 pm</text>

  <!-- Be r=62 -->
  <circle cx="290" cy="180" r="62" fill="#ffffff" stroke="#000000" stroke-width="2.5"/>
  <text x="290" y="183" font-family="Georgia,serif" font-size="12" font-weight="bold" fill="#000000" text-anchor="middle">Be</text>
  <text x="290" y="255" font-family="Georgia,serif" font-size="10" fill="#000000" text-anchor="middle">112 pm</text>

  <!-- B r=47 -->
  <circle cx="390" cy="180" r="47" fill="#ffffff" stroke="#000000" stroke-width="2.5"/>
  <text x="390" y="183" font-family="Georgia,serif" font-size="12" font-weight="bold" fill="#000000" text-anchor="middle">B</text>
  <text x="390" y="238" font-family="Georgia,serif" font-size="10" fill="#000000" text-anchor="middle">85 pm</text>

  <!-- C r=42 -->
  <circle cx="475" cy="180" r="42" fill="#ffffff" stroke="#000000" stroke-width="2.5"/>
  <text x="475" y="183" font-family="Georgia,serif" font-size="12" font-weight="bold" fill="#000000" text-anchor="middle">C</text>
  <text x="475" y="232" font-family="Georgia,serif" font-size="10" fill="#000000" text-anchor="middle">77 pm</text>

  <!-- N r=41 -->
  <circle cx="553" cy="180" r="41" fill="#ffffff" stroke="#000000" stroke-width="2.5"/>
  <text x="553" y="183" font-family="Georgia,serif" font-size="12" font-weight="bold" fill="#000000" text-anchor="middle">N</text>
  <text x="553" y="230" font-family="Georgia,serif" font-size="10" fill="#000000" text-anchor="middle">75 pm</text>

  <!-- O r=40 -->
  <circle cx="628" cy="180" r="40" fill="#ffffff" stroke="#000000" stroke-width="2.5"/>
  <text x="628" y="183" font-family="Georgia,serif" font-size="12" font-weight="bold" fill="#000000" text-anchor="middle">O</text>
  <text x="628" y="228" font-family="Georgia,serif" font-size="10" fill="#000000" text-anchor="middle">73 pm</text>

  <!-- F r=35 -->
  <circle cx="698" cy="180" r="35" fill="#ffffff" stroke="#000000" stroke-width="2.5"/>
  <text x="698" y="183" font-family="Georgia,serif" font-size="12" font-weight="bold" fill="#000000" text-anchor="middle">F</text>
  <text x="698" y="223" font-family="Georgia,serif" font-size="10" fill="#000000" text-anchor="middle">64 pm</text>

  <!-- Ne r=21 (van der Waals) -->
  <circle cx="758" cy="180" r="21" fill="#ffffff" stroke="#000000" stroke-width="1.5" stroke-dasharray="4,3"/>
  <text x="758" y="183" font-family="Georgia,serif" font-size="11" fill="#000000" text-anchor="middle">Ne</text>
  <text x="758" y="210" font-family="Georgia,serif" font-size="10" fill="#000000" text-anchor="middle">~38 pm</text>

  <!-- Period decrease arrow -->
  <line x1="140" y1="300" x2="780" y2="300" stroke="#000000" stroke-width="2"/>
  <polygon points="776,295 790,300 776,305" fill="#000000"/>
  <text x="460" y="320" font-family="Georgia,serif" font-size="11" fill="#000000" text-anchor="middle">
    Increasing atomic number →   radius decreases (more protons, same shielding)
  </text>

  <!-- Group 1 elements down group: H Li Na K — circles -->
  <text x="60" y="370" font-family="Georgia,serif" font-size="12" font-weight="bold" fill="#000000">Group 1 (down)</text>
  <!-- Radii: H=53, Li=152, Na=186, K=227 px scaled /2 -->

  <!-- H r=27 -->
  <circle cx="170" cy="430" r="27" fill="#ffffff" stroke="#000000" stroke-width="2"/>
  <text x="170" y="434" font-family="Georgia,serif" font-size="12" font-weight="bold" fill="#000000" text-anchor="middle">H</text>
  <text x="170" y="468" font-family="Georgia,serif" font-size="10" fill="#000000" text-anchor="middle">53 pm</text>

  <!-- Li r=76 -->
  <circle cx="310" cy="455" r="76" fill="#ffffff" stroke="#000000" stroke-width="2"/>
  <text x="310" y="458" font-family="Georgia,serif" font-size="12" font-weight="bold" fill="#000000" text-anchor="middle">Li</text>
  <text x="310" y="542" font-family="Georgia,serif" font-size="10" fill="#000000" text-anchor="middle">152 pm</text>

  <!-- Na r=93 -->
  <circle cx="490" cy="463" r="93" fill="#ffffff" stroke="#000000" stroke-width="2"/>
  <text x="490" y="466" font-family="Georgia,serif" font-size="12" font-weight="bold" fill="#000000" text-anchor="middle">Na</text>
  <text x="490" y="567" font-family="Georgia,serif" font-size="10" fill="#000000" text-anchor="middle">186 pm</text>

  <!-- K r=113 -->
  <circle cx="710" cy="473" r="113" fill="#ffffff" stroke="#000000" stroke-width="2"/>
  <text x="710" y="476" font-family="Georgia,serif" font-size="12" font-weight="bold" fill="#000000" text-anchor="middle">K</text>
  <text x="710" y="596" font-family="Georgia,serif" font-size="10" fill="#000000" text-anchor="middle">227 pm</text>

  <!-- Down group arrow -->
  <line x1="830" y1="360" x2="830" y2="580" stroke="#000000" stroke-width="2"/>
  <polygon points="825,576 830,590 835,576" fill="#000000"/>
  <text x="858" y="480" font-family="Georgia,serif" font-size="11" fill="#000000"
        transform="rotate(90 855 480)">radius increases ↓</text>

  <!-- Summary box -->
  <rect x="30" y="620" width="940" height="68" rx="5"
        fill="#ffffff" stroke="#000000" stroke-width="2" stroke-dasharray="5,3"/>
  <text x="50" y="640" font-family="Georgia,serif" font-size="11" font-weight="bold" fill="#000000">
    Across a period (→): nuclear charge increases, same shielding shell → electrons pulled closer → radius decreases
  </text>
  <text x="50" y="658" font-family="Georgia,serif" font-size="11" fill="#000000">
    Down a group (↓): new electron shell added each period → increased shielding → radius increases despite higher Z
  </text>
  <text x="50" y="676" font-family="Georgia,serif" font-size="10" fill="#000000">
    Dashed circle = van der Waals radius (noble gas — no covalent radius defined)
  </text>
</svg>`;

  // ─── 8. ELECTRON AFFINITY DIAGRAM — Chlorine ─────────────────────────────
  static electronAffinityDiagramSvg = `<?xml version="1.0" encoding="utf-8"?>
<svg version="1.1" xmlns="http://www.w3.org/2000/svg"
     width="800px" height="600px" viewBox="0 0 800 600">

  <rect x="0" y="0" width="800" height="600" fill="#ffffff"/>

  <text x="400" y="30" font-family="Georgia,serif" font-size="16" font-weight="bold"
        fill="#000000" text-anchor="middle">Electron Affinity — Chlorine</text>
  <text x="400" y="50" font-family="Georgia,serif" font-size="11" fill="#000000" text-anchor="middle">
    Cl(g) + e⁻  →  Cl⁻(g)     ΔH = −349 kJ mol⁻¹  (exothermic)
  </text>

  <!-- Energy level diagram -->
  <!-- Y axis -->
  <line x1="120" y1="80" x2="120" y2="480" stroke="#000000" stroke-width="2.5"/>
  <polygon points="115,84 120,70 125,84" fill="#000000"/>
  <text x="40" y="290" font-family="Georgia,serif" font-size="12" fill="#000000"
        transform="rotate(-90 50 280)">Energy / kJ mol⁻¹</text>

  <!-- Cl(g) + e⁻ level (higher, y=160) -->
  <line x1="200" y1="180" x2="500" y2="180" stroke="#000000" stroke-width="3"/>
  <text x="510" y="184" font-family="Georgia,serif" font-size="12" fill="#000000">Cl(g) + e⁻</text>
  <text x="510" y="200" font-family="Georgia,serif" font-size="10" fill="#000000">(reactants)</text>

  <!-- Cl⁻(g) level (lower, y=360) -->
  <line x1="200" y1="360" x2="500" y2="360" stroke="#000000" stroke-width="3"/>
  <text x="510" y="364" font-family="Georgia,serif" font-size="12" fill="#000000">Cl⁻(g)</text>
  <text x="510" y="380" font-family="Georgia,serif" font-size="10" fill="#000000">(product)</text>

  <!-- Arrow down: exothermic -->
  <line x1="350" y1="180" x2="350" y2="355" stroke="#000000" stroke-width="2.5"/>
  <polygon points="345,351 350,365 355,351" fill="#000000"/>

  <!-- ΔH label -->
  <text x="360" y="275" font-family="Georgia,serif" font-size="13" font-weight="bold" fill="#000000">
    ΔH = −349 kJ mol⁻¹
  </text>
  <text x="360" y="292" font-family="Georgia,serif" font-size="11" fill="#000000">
    (exothermic: energy released)
  </text>

  <!-- Brace / bracket for energy gap -->
  <line x1="175" y1="180" x2="175" y2="360" stroke="#000000" stroke-width="1.5"/>
  <line x1="165" y1="180" x2="185" y2="180" stroke="#000000" stroke-width="1.5"/>
  <line x1="165" y1="360" x2="185" y2="360" stroke="#000000" stroke-width="1.5"/>
  <text x="130" y="278" font-family="Georgia,serif" font-size="11" fill="#000000" text-anchor="middle">349</text>
  <text x="130" y="292" font-family="Georgia,serif" font-size="11" fill="#000000" text-anchor="middle">kJ mol⁻¹</text>

  <!-- Electron dot diagram: Cl gaining electron -->
  <!-- Before: Cl with 7 valence e, one vacant -->
  <text x="200" y="450" font-family="Georgia,serif" font-size="12" font-weight="bold" fill="#000000">Before:</text>
  <!-- Cl nucleus -->
  <circle cx="310" cy="445" r="22" fill="#ffffff" stroke="#000000" stroke-width="2.5"/>
  <text x="310" y="449" font-family="Georgia,serif" font-size="12" font-weight="bold" fill="#000000" text-anchor="middle">Cl</text>
  <!-- 7 electrons shown as dots around -->
  <circle cx="310" cy="416" r="5" fill="#000000"/>
  <circle cx="338" cy="445" r="5" fill="#000000"/>
  <circle cx="310" cy="474" r="5" fill="#000000"/>
  <circle cx="282" cy="445" r="5" fill="#000000"/>
  <circle cx="330" cy="420" r="5" fill="#000000"/>
  <circle cx="330" cy="470" r="5" fill="#000000"/>
  <circle cx="290" cy="420" r="5" fill="#000000"/>
  <!-- 8th position vacant: shown as open circle -->
  <circle cx="290" cy="470" r="5" fill="#ffffff" stroke="#000000" stroke-width="1.5" stroke-dasharray="2,2"/>
  <!-- incoming electron -->
  <circle cx="260" cy="500" r="5" fill="#000000"/>
  <line x1="264" y1="496" x2="284" y2="476" stroke="#000000" stroke-width="1.5"/>
  <polygon points="281,479 287,473 280,472" fill="#000000"/>
  <text x="245" y="516" font-family="Georgia,serif" font-size="9" fill="#000000">e⁻ →</text>

  <!-- After: Cl⁻ -->
  <text x="530" y="450" font-family="Georgia,serif" font-size="12" font-weight="bold" fill="#000000">After:</text>
  <circle cx="640" cy="445" r="28" fill="#ffffff" stroke="#000000" stroke-width="3"/>
  <text x="640" y="449" font-family="Georgia,serif" font-size="12" font-weight="bold" fill="#000000" text-anchor="middle">Cl⁻</text>
  <!-- 8 electrons all filled -->
  <circle cx="640" cy="410" r="5" fill="#000000"/>
  <circle cx="668" cy="445" r="5" fill="#000000"/>
  <circle cx="640" cy="480" r="5" fill="#000000"/>
  <circle cx="612" cy="445" r="5" fill="#000000"/>
  <circle cx="660" cy="418" r="5" fill="#000000"/>
  <circle cx="660" cy="472" r="5" fill="#000000"/>
  <circle cx="620" cy="418" r="5" fill="#000000"/>
  <circle cx="620" cy="472" r="5" fill="#000000"/>
  <!-- charge label -->
  <text x="670" y="415" font-family="Georgia,serif" font-size="13" font-weight="bold" fill="#000000">−</text>

  <!-- Arrow between before/after -->
  <line x1="370" y1="445" x2="500" y2="445" stroke="#000000" stroke-width="2"/>
  <polygon points="496,440 510,445 496,450" fill="#000000"/>
  <text x="435" y="438" font-family="Georgia,serif" font-size="10" fill="#000000" text-anchor="middle">+ e⁻</text>

  <!-- Summary box -->
  <rect x="30" y="535" width="740" height="52" rx="5"
        fill="#ffffff" stroke="#000000" stroke-width="2" stroke-dasharray="5,3"/>
  <text x="50" y="555" font-family="Georgia,serif" font-size="11" font-weight="bold" fill="#000000">
    Electron affinity: energy change when one mole of electrons is added to gaseous atoms
  </text>
  <text x="50" y="573" font-family="Georgia,serif" font-size="11" fill="#000000">
    Cl has highest EA in period 3 — one electron short of full octet; strong attraction for extra electron
  </text>
</svg>`;

  // ─── 9. IONIC BONDING DIAGRAM — NaCl ─────────────────────────────────────
  static ionicBondingDiagramSvg = `<?xml version="1.0" encoding="utf-8"?>
<svg version="1.1" xmlns="http://www.w3.org/2000/svg"
     width="900px" height="600px" viewBox="0 0 900 600">

  <rect x="0" y="0" width="900" height="600" fill="#ffffff"/>

  <text x="450" y="30" font-family="Georgia,serif" font-size="16" font-weight="bold"
        fill="#000000" text-anchor="middle">Ionic Bonding — NaCl</text>
  <text x="450" y="50" font-family="Georgia,serif" font-size="11" fill="#000000" text-anchor="middle">
    Electron transfer from sodium to chlorine, forming Na⁺ and Cl⁻ ions
  </text>

  <!-- Na atom -->
  <text x="150" y="90" font-family="Georgia,serif" font-size="13" font-weight="bold"
        fill="#000000" text-anchor="middle">Na atom</text>
  <circle cx="150" cy="240" r="36" fill="#ffffff" stroke="#000000" stroke-width="3"/>
  <text x="150" y="234" font-family="Georgia,serif" font-size="11" font-weight="bold"
        fill="#000000" text-anchor="middle">11p⁺</text>
  <text x="150" y="250" font-family="Georgia,serif" font-size="11" fill="#000000" text-anchor="middle">12n⁰</text>
  <!-- K shell -->
  <circle cx="150" cy="240" r="66" fill="none" stroke="#000000" stroke-width="1.5" stroke-dasharray="5,3"/>
  <circle cx="150" cy="174" r="6" fill="#000000"/>
  <circle cx="150" cy="306" r="6" fill="#000000"/>
  <!-- L shell -->
  <circle cx="150" cy="240" r="110" fill="none" stroke="#000000" stroke-width="1.5" stroke-dasharray="5,3"/>
  <circle cx="260" cy="240" r="6" fill="#ffffff" stroke="#000000" stroke-width="2"/>
  <circle cx="150" cy="130" r="6" fill="#ffffff" stroke="#000000" stroke-width="2"/>
  <circle cx="40"  cy="240" r="6" fill="#ffffff" stroke="#000000" stroke-width="2"/>
  <circle cx="150" cy="350" r="6" fill="#ffffff" stroke="#000000" stroke-width="2"/>
  <circle cx="228" cy="162" r="6" fill="#ffffff" stroke="#000000" stroke-width="2"/>
  <circle cx="228" cy="318" r="6" fill="#ffffff" stroke="#000000" stroke-width="2"/>
  <circle cx="72"  cy="162" r="6" fill="#ffffff" stroke="#000000" stroke-width="2"/>
  <circle cx="72"  cy="318" r="6" fill="#ffffff" stroke="#000000" stroke-width="2"/>
  <!-- M shell — 1 valence e -->
  <circle cx="150" cy="240" r="148" fill="none" stroke="#000000" stroke-width="2" stroke-dasharray="8,4"/>
  <circle cx="150" cy="92" r="8" fill="#ffffff" stroke="#000000" stroke-width="2.5"/>
  <text x="108" y="368" font-family="Georgia,serif" font-size="10" fill="#000000">config: 2,8,1</text>

  <!-- Transfer arrow for electron -->
  <line x1="155" y1="88" x2="545" y2="88" stroke="#000000" stroke-width="2.5"/>
  <polygon points="541,83 555,88 541,93" fill="#000000"/>
  <text x="350" y="76" font-family="Georgia,serif" font-size="11" font-weight="bold" fill="#000000" text-anchor="middle">
    e⁻ transferred →
  </text>

  <!-- + sign between -->
  <text x="350" y="250" font-family="Georgia,serif" font-size="40" font-weight="bold"
        fill="#000000" text-anchor="middle">+</text>

  <!-- Cl atom -->
  <text x="600" y="90" font-family="Georgia,serif" font-size="13" font-weight="bold"
        fill="#000000" text-anchor="middle">Cl atom</text>
  <circle cx="600" cy="240" r="36" fill="#ffffff" stroke="#000000" stroke-width="3"/>
  <text x="600" y="234" font-family="Georgia,serif" font-size="11" font-weight="bold"
        fill="#000000" text-anchor="middle">17p⁺</text>
  <text x="600" y="250" font-family="Georgia,serif" font-size="11" fill="#000000" text-anchor="middle">18n⁰</text>
  <!-- K -->
  <circle cx="600" cy="240" r="66" fill="none" stroke="#000000" stroke-width="1.5" stroke-dasharray="5,3"/>
  <circle cx="600" cy="174" r="6" fill="#000000"/>
  <circle cx="600" cy="306" r="6" fill="#000000"/>
  <!-- L -->
  <circle cx="600" cy="240" r="110" fill="none" stroke="#000000" stroke-width="1.5" stroke-dasharray="5,3"/>
  <circle cx="710" cy="240" r="6" fill="#ffffff" stroke="#000000" stroke-width="2"/>
  <circle cx="600" cy="130" r="6" fill="#ffffff" stroke="#000000" stroke-width="2"/>
  <circle cx="490" cy="240" r="6" fill="#ffffff" stroke="#000000" stroke-width="2"/>
  <circle cx="600" cy="350" r="6" fill="#ffffff" stroke="#000000" stroke-width="2"/>
  <circle cx="678" cy="162" r="6" fill="#ffffff" stroke="#000000" stroke-width="2"/>
  <circle cx="678" cy="318" r="6" fill="#ffffff" stroke="#000000" stroke-width="2"/>
  <circle cx="522" cy="162" r="6" fill="#ffffff" stroke="#000000" stroke-width="2"/>
  <circle cx="522" cy="318" r="6" fill="#ffffff" stroke="#000000" stroke-width="2"/>
  <!-- M — 7 electrons -->
  <circle cx="600" cy="240" r="148" fill="none" stroke="#000000" stroke-width="2" stroke-dasharray="8,4"/>
  <circle cx="600" cy="92"  r="6" fill="#ffffff" stroke="#000000" stroke-width="2"/>
  <circle cx="705" cy="135" r="6" fill="#ffffff" stroke="#000000" stroke-width="2"/>
  <circle cx="748" cy="240" r="6" fill="#ffffff" stroke="#000000" stroke-width="2"/>
  <circle cx="705" cy="345" r="6" fill="#ffffff" stroke="#000000" stroke-width="2"/>
  <circle cx="600" cy="388" r="6" fill="#ffffff" stroke="#000000" stroke-width="2"/>
  <circle cx="495" cy="345" r="6" fill="#ffffff" stroke="#000000" stroke-width="2"/>
  <!-- vacant position -->
  <circle cx="452" cy="240" r="6" fill="#ffffff" stroke="#000000" stroke-width="1.5" stroke-dasharray="3,2"/>
  <text x="540" y="365" font-family="Georgia,serif" font-size="10" fill="#000000">config: 2,8,7</text>

  <!-- Result row -->
  <line x1="30" y1="420" x2="870" y2="420" stroke="#000000" stroke-width="1" stroke-dasharray="4,4"/>
  <text x="450" y="445" font-family="Georgia,serif" font-size="14" font-weight="bold"
        fill="#000000" text-anchor="middle">After electron transfer:</text>

  <!-- Na+ -->
  <circle cx="250" cy="510" r="36" fill="#ffffff" stroke="#000000" stroke-width="3"/>
  <text x="250" y="514" font-family="Georgia,serif" font-size="16" font-weight="bold"
        fill="#000000" text-anchor="middle">Na⁺</text>
  <text x="250" y="557" font-family="Georgia,serif" font-size="10" fill="#000000" text-anchor="middle">2,8  (10 e⁻)</text>
  <text x="250" y="572" font-family="Georgia,serif" font-size="10" fill="#000000" text-anchor="middle">Ne config</text>

  <!-- electrostatic attraction -->
  <line x1="295" y1="510" x2="555" y2="510" stroke="#000000" stroke-width="2.5" stroke-dasharray="6,3"/>
  <text x="425" y="502" font-family="Georgia,serif" font-size="11" fill="#000000" text-anchor="middle">electrostatic attraction</text>
  <polygon points="551,505 565,510 551,515" fill="#000000"/>
  <polygon points="299,505 285,510 299,515" fill="#000000"/>

  <!-- Cl- -->
  <circle cx="620" cy="510" r="44" fill="#ffffff" stroke="#000000" stroke-width="3"/>
  <text x="620" y="514" font-family="Georgia,serif" font-size="16" font-weight="bold"
        fill="#000000" text-anchor="middle">Cl⁻</text>
  <text x="620" y="564" font-family="Georgia,serif" font-size="10" fill="#000000" text-anchor="middle">2,8,8  (18 e⁻)</text>
  <text x="620" y="579" font-family="Georgia,serif" font-size="10" fill="#000000" text-anchor="middle">Ar config</text>

  <!-- Summary box -->
  <rect x="30" y="590" width="840" height="0" rx="5" fill="none"/>
</svg>`;

  // ─── 10. COVALENT BONDING DIAGRAM — Water H₂O ────────────────────────────
  static covalentBondingDiagramSvg = `<?xml version="1.0" encoding="utf-8"?>
<svg version="1.1" xmlns="http://www.w3.org/2000/svg"
     width="800px" height="600px" viewBox="0 0 800 600">

  <rect x="0" y="0" width="800" height="600" fill="#ffffff"/>

  <text x="400" y="30" font-family="Georgia,serif" font-size="16" font-weight="bold"
        fill="#000000" text-anchor="middle">Covalent Bonding — Water (H₂O)</text>
  <text x="400" y="50" font-family="Georgia,serif" font-size="11" fill="#000000" text-anchor="middle">
    Dot-and-cross diagram showing shared electron pairs and lone pairs
  </text>

  <!-- Central oxygen -->
  <circle cx="400" cy="280" r="60" fill="#ffffff" stroke="#000000" stroke-width="3"/>
  <text x="400" y="284" font-family="Georgia,serif" font-size="16" font-weight="bold"
        fill="#000000" text-anchor="middle">O</text>

  <!-- Left H -->
  <circle cx="220" cy="340" r="38" fill="#ffffff" stroke="#000000" stroke-width="2.5"/>
  <text x="220" y="344" font-family="Georgia,serif" font-size="16" font-weight="bold"
        fill="#000000" text-anchor="middle">H</text>

  <!-- Right H -->
  <circle cx="580" cy="340" r="38" fill="#ffffff" stroke="#000000" stroke-width="2.5"/>
  <text x="580" y="344" font-family="Georgia,serif" font-size="16" font-weight="bold"
        fill="#000000" text-anchor="middle">H</text>

  <!-- Shared pair left O-H (dots and crosses) -->
  <!-- electron from O -->
  <circle cx="312" cy="316" r="6" fill="#000000"/>
  <!-- electron from H -->
  <text x="297" y="316" font-family="Georgia,serif" font-size="14" fill="#000000">×</text>
  <!-- bond line visual aid -->
  <line x1="258" y1="332" x2="340" y2="308" stroke="#000000" stroke-width="1.5" stroke-dasharray="3,3"/>

  <!-- Shared pair right O-H -->
  <circle cx="488" cy="316" r="6" fill="#000000"/>
  <text x="500" y="316" font-family="Georgia,serif" font-size="14" fill="#000000">×</text>
  <line x1="542" y1="332" x2="460" y2="308" stroke="#000000" stroke-width="1.5" stroke-dasharray="3,3"/>

  <!-- Lone pairs on O (top: 2 pairs) -->
  <circle cx="365" cy="224" r="6" fill="#000000"/>
  <circle cx="385" cy="218" r="6" fill="#000000"/>
  <circle cx="415" cy="218" r="6" fill="#000000"/>
  <circle cx="435" cy="224" r="6" fill="#000000"/>
  <text x="400" y="196" font-family="Georgia,serif" font-size="10" fill="#000000" text-anchor="middle">
    2 lone pairs
  </text>
  <line x1="400" y1="198" x2="400" y2="218" stroke="#000000" stroke-width="1" stroke-dasharray="2,2"/>

  <!-- Bond angle -->
  <path d="M 330,308 A 70,70 0 0,1 470,308" fill="none" stroke="#000000" stroke-width="1.5" stroke-dasharray="4,3"/>
  <text x="400" y="348" font-family="Georgia,serif" font-size="12" font-weight="bold" fill="#000000" text-anchor="middle">
    104.5°
  </text>

  <!-- Labels -->
  <text x="220" y="390" font-family="Georgia,serif" font-size="11" fill="#000000" text-anchor="middle">
    H (1 electron)
  </text>
  <text x="580" y="390" font-family="Georgia,serif" font-size="11" fill="#000000" text-anchor="middle">
    H (1 electron)
  </text>
  <text x="400" y="410" font-family="Georgia,serif" font-size="11" fill="#000000" text-anchor="middle">
    O (6 valence electrons: 2 bonding + 4 lone)
  </text>

  <!-- Key -->
  <rect x="40" y="440" width="340" height="100" rx="5"
        fill="#ffffff" stroke="#000000" stroke-width="2"/>
  <text x="60" y="462" font-family="Georgia,serif" font-size="11" font-weight="bold" fill="#000000">Key:</text>
  <circle cx="75" cy="480" r="6" fill="#000000"/>
  <text x="90" y="484" font-family="Georgia,serif" font-size="11" fill="#000000">● electron from oxygen</text>
  <text x="75" y="502" font-family="Georgia,serif" font-size="14" fill="#000000">×</text>
  <text x="90" y="504" font-family="Georgia,serif" font-size="11" fill="#000000">× electron from hydrogen</text>
  <text x="60" y="526" font-family="Georgia,serif" font-size="10" fill="#000000">
    Bonding pair = one ● + one ×  shared
  </text>

  <!-- Structural formula -->
  <rect x="440" y="440" width="320" height="100" rx="5"
        fill="#ffffff" stroke="#000000" stroke-width="2"/>
  <text x="460" y="462" font-family="Georgia,serif" font-size="11" font-weight="bold" fill="#000000">Structural formula:</text>
  <text x="460" y="486" font-family="Georgia,serif" font-size="16" fill="#000000">H — O — H</text>
  <text x="460" y="508" font-family="Georgia,serif" font-size="11" fill="#000000">2 O−H single covalent bonds</text>
  <text x="460" y="526" font-family="Georgia,serif" font-size="10" fill="#000000">
    Polar bonds (O more electronegative)
  </text>

  <!-- Summary box -->
  <rect x="30" y="555" width="740" height="38" rx="5"
        fill="#ffffff" stroke="#000000" stroke-width="2" stroke-dasharray="5,3"/>
  <text x="50" y="571" font-family="Georgia,serif" font-size="11" font-weight="bold" fill="#000000">
    Covalent bond: shared pair of electrons between non-metal atoms
  </text>
  <text x="50" y="587" font-family="Georgia,serif" font-size="10" fill="#000000">
    Each H achieves He duplet (2e⁻); O achieves Ne octet (8e⁻) via 2 bonds + 2 lone pairs
  </text>
</svg>`;

  // ─── 11. LEWIS STRUCTURE DIAGRAM — CO₂ ───────────────────────────────────
  static lewisStructureDiagramSvg = `<?xml version="1.0" encoding="utf-8"?>
<svg version="1.1" xmlns="http://www.w3.org/2000/svg"
     width="700px" height="500px" viewBox="0 0 700 500">

  <rect x="0" y="0" width="700" height="500" fill="#ffffff"/>

  <text x="350" y="30" font-family="Georgia,serif" font-size="16" font-weight="bold"
        fill="#000000" text-anchor="middle">Lewis Structure — CO₂</text>
  <text x="350" y="50" font-family="Georgia,serif" font-size="11" fill="#000000" text-anchor="middle">
    Carbon dioxide: linear molecule with two C=O double bonds
  </text>

  <!-- Left O -->
  <circle cx="130" cy="230" r="50" fill="#ffffff" stroke="#000000" stroke-width="3"/>
  <text x="130" y="235" font-family="Georgia,serif" font-size="18" font-weight="bold"
        fill="#000000" text-anchor="middle">O</text>

  <!-- C -->
  <circle cx="350" cy="230" r="45" fill="#ffffff" stroke="#000000" stroke-width="3"/>
  <text x="350" y="235" font-family="Georgia,serif" font-size="18" font-weight="bold"
        fill="#000000" text-anchor="middle">C</text>

  <!-- Right O -->
  <circle cx="570" cy="230" r="50" fill="#ffffff" stroke="#000000" stroke-width="3"/>
  <text x="570" y="235" font-family="Georgia,serif" font-size="18" font-weight="bold"
        fill="#000000" text-anchor="middle">O</text>

  <!-- Left C=O double bond -->
  <line x1="180" y1="220" x2="305" y2="220" stroke="#000000" stroke-width="3"/>
  <line x1="180" y1="240" x2="305" y2="240" stroke="#000000" stroke-width="3"/>
  <text x="242" y="208" font-family="Georgia,serif" font-size="10" fill="#000000" text-anchor="middle">double bond</text>

  <!-- Right C=O double bond -->
  <line x1="395" y1="220" x2="520" y2="220" stroke="#000000" stroke-width="3"/>
  <line x1="395" y1="240" x2="520" y2="240" stroke="#000000" stroke-width="3"/>
  <text x="458" y="208" font-family="Georgia,serif" font-size="10" fill="#000000" text-anchor="middle">double bond</text>

  <!-- Lone pairs on left O -->
  <circle cx="82"  cy="200" r="6" fill="#000000"/>
  <circle cx="78"  cy="216" r="6" fill="#000000"/>
  <circle cx="82"  cy="260" r="6" fill="#000000"/>
  <circle cx="78"  cy="244" r="6" fill="#000000"/>
  <text x="50" y="230" font-family="Georgia,serif" font-size="9" fill="#000000" text-anchor="middle">2 lone</text>
  <text x="50" y="242" font-family="Georgia,serif" font-size="9" fill="#000000" text-anchor="middle">pairs</text>

  <!-- Lone pairs on right O -->
  <circle cx="618" cy="200" r="6" fill="#000000"/>
  <circle cx="622" cy="216" r="6" fill="#000000"/>
  <circle cx="618" cy="260" r="6" fill="#000000"/>
  <circle cx="622" cy="244" r="6" fill="#000000"/>
  <text x="650" y="230" font-family="Georgia,serif" font-size="9" fill="#000000" text-anchor="middle">2 lone</text>
  <text x="650" y="242" font-family="Georgia,serif" font-size="9" fill="#000000" text-anchor="middle">pairs</text>

  <!-- No lone pairs on C (uses all 4 valence e in bonding) -->
  <text x="350" y="302" font-family="Georgia,serif" font-size="10" fill="#000000" text-anchor="middle">
    (no lone pairs on C)
  </text>

  <!-- Bond angle -->
  <path d="M 240,230 A 112,112 0 0,1 460,230" fill="none" stroke="#000000" stroke-width="1.5" stroke-dasharray="5,3"/>
  <text x="350" y="370" font-family="Georgia,serif" font-size="13" font-weight="bold" fill="#000000" text-anchor="middle">
    Bond angle: 180°  (linear)
  </text>

  <!-- Valence electron counts -->
  <text x="130" y="296" font-family="Georgia,serif" font-size="10" fill="#000000" text-anchor="middle">O: 6 val. e⁻</text>
  <text x="350" y="140" font-family="Georgia,serif" font-size="10" fill="#000000" text-anchor="middle">C: 4 val. e⁻</text>
  <text x="570" y="296" font-family="Georgia,serif" font-size="10" fill="#000000" text-anchor="middle">O: 6 val. e⁻</text>

  <!-- Summary box -->
  <rect x="30" y="400" width="640" height="82" rx="5"
        fill="#ffffff" stroke="#000000" stroke-width="2" stroke-dasharray="5,3"/>
  <text x="50" y="422" font-family="Georgia,serif" font-size="11" font-weight="bold" fill="#000000">
    Total valence electrons: C(4) + 2×O(6) = 16 electrons = 8 pairs
  </text>
  <text x="50" y="442" font-family="Georgia,serif" font-size="11" fill="#000000">
    4 pairs bonding (2 per double bond) + 4 pairs lone (2 per O)
  </text>
  <text x="50" y="462" font-family="Georgia,serif" font-size="11" fill="#000000">
    Both O atoms achieve octet; C achieves octet via 2 double bonds
  </text>
  <text x="50" y="478" font-family="Georgia,serif" font-size="10" fill="#000000">
    CO₂ is non-polar overall (equal but opposite bond dipoles cancel due to linear geometry)
  </text>
</svg>`;

  // ─── 12. VSEPR THEORY DIAGRAM — Methane CH₄ ──────────────────────────────
  static vsepirTheoryDiagramSvg = `<?xml version="1.0" encoding="utf-8"?>
<svg version="1.1" xmlns="http://www.w3.org/2000/svg"
     width="700px" height="700px" viewBox="0 0 700 700">

  <rect x="0" y="0" width="700" height="700" fill="#ffffff"/>

  <text x="350" y="30" font-family="Georgia,serif" font-size="16" font-weight="bold"
        fill="#000000" text-anchor="middle">VSEPR — Methane CH₄ (Tetrahedral)</text>
  <text x="350" y="50" font-family="Georgia,serif" font-size="11" fill="#000000" text-anchor="middle">
    4 bonding pairs, 0 lone pairs → tetrahedral geometry, bond angle 109.5°
  </text>

  <!-- 3D tetrahedral representation using 2D projection -->
  <!-- Central C -->
  <circle cx="350" cy="310" r="28" fill="#ffffff" stroke="#000000" stroke-width="3"/>
  <text x="350" y="315" font-family="Georgia,serif" font-size="16" font-weight="bold"
        fill="#000000" text-anchor="middle">C</text>

  <!-- Top H (above, in plane) -->
  <line x1="350" y1="282" x2="350" y2="162" stroke="#000000" stroke-width="2.5"/>
  <circle cx="350" cy="148" r="22" fill="#ffffff" stroke="#000000" stroke-width="2.5"/>
  <text x="350" y="153" font-family="Georgia,serif" font-size="14" font-weight="bold"
        fill="#000000" text-anchor="middle">H</text>
  <text x="390" y="220" font-family="Georgia,serif" font-size="9" fill="#000000">bond in plane</text>

  <!-- Bottom-left H (wedge: coming forward) -->
  <!-- Wedge bond: filled triangle -->
  <polygon points="338,338 242,430 254,436" fill="#000000"/>
  <circle cx="236" cy="444" r="22" fill="#ffffff" stroke="#000000" stroke-width="2.5"/>
  <text x="236" y="449" font-family="Georgia,serif" font-size="14" font-weight="bold"
        fill="#000000" text-anchor="middle">H</text>
  <text x="185" y="410" font-family="Georgia,serif" font-size="9" fill="#000000">wedge (forward)</text>

  <!-- Bottom-right H (dashed: going back) -->
  <!-- Dashed bond -->
  <line x1="362" y1="336" x2="464" y2="428" stroke="#000000" stroke-width="2.5" stroke-dasharray="7,5"/>
  <circle cx="470" cy="444" r="22" fill="#ffffff" stroke="#000000" stroke-width="2.5"/>
  <text x="470" y="449" font-family="Georgia,serif" font-size="14" font-weight="bold"
        fill="#000000" text-anchor="middle">H</text>
  <text x="490" y="410" font-family="Georgia,serif" font-size="9" fill="#000000">dashed (behind)</text>

  <!-- Right H (in plane) -->
  <line x1="378" y1="310" x2="510" y2="310" stroke="#000000" stroke-width="2.5"/>
  <circle cx="524" cy="310" r="22" fill="#ffffff" stroke="#000000" stroke-width="2.5"/>
  <text x="524" y="315" font-family="Georgia,serif" font-size="14" font-weight="bold"
        fill="#000000" text-anchor="middle">H</text>

  <!-- Bond angle arc -->
  <path d="M 350,170 A 140,140 0 0,1 370,285" fill="none" stroke="#000000" stroke-width="1.5" stroke-dasharray="4,3"/>
  <text x="410" y="230" font-family="Georgia,serif" font-size="12" font-weight="bold" fill="#000000">109.5°</text>

  <!-- Info panel -->
  <rect x="40" y="500" width="280" height="160" rx="5"
        fill="#ffffff" stroke="#000000" stroke-width="2"/>
  <text x="60" y="522" font-family="Georgia,serif" font-size="12" font-weight="bold" fill="#000000">VSEPR Rules:</text>
  <text x="60" y="542" font-family="Georgia,serif" font-size="11" fill="#000000">Electron pairs repel each other</text>
  <text x="60" y="560" font-family="Georgia,serif" font-size="11" fill="#000000">and adopt maximum separation</text>
  <text x="60" y="578" font-family="Georgia,serif" font-size="11" fill="#000000">LP−LP > LP−BP > BP−BP</text>
  <text x="60" y="596" font-family="Georgia,serif" font-size="11" fill="#000000">repulsion order</text>
  <text x="60" y="616" font-family="Georgia,serif" font-size="11" fill="#000000">CH₄: 4 BP, 0 LP</text>
  <text x="60" y="634" font-family="Georgia,serif" font-size="11" fill="#000000">→ ideal tetrahedral 109.5°</text>

  <!-- Comparison table -->
  <rect x="360" y="500" width="300" height="160" rx="5"
        fill="#ffffff" stroke="#000000" stroke-width="2"/>
  <text x="380" y="522" font-family="Georgia,serif" font-size="12" font-weight="bold" fill="#000000">Related shapes:</text>
  <text x="380" y="542" font-family="Georgia,serif" font-size="10" fill="#000000">4BP 0LP → Tetrahedral   109.5°  CH₄</text>
  <text x="380" y="560" font-family="Georgia,serif" font-size="10" fill="#000000">3BP 1LP → Pyramidal     107°    NH₃</text>
  <text x="380" y="578" font-family="Georgia,serif" font-size="10" fill="#000000">2BP 2LP → Bent          104.5°  H₂O</text>
  <text x="380" y="596" font-family="Georgia,serif" font-size="10" fill="#000000">2BP 0LP → Linear        180°    CO₂</text>
  <text x="380" y="614" font-family="Georgia,serif" font-size="10" fill="#000000">3BP 0LP → Trigonal pl.  120°    BF₃</text>
  <text x="380" y="634" font-family="Georgia,serif" font-size="10" fill="#000000">LP reduce bond angle by ~2.5°</text>

  <!-- Legend -->
  <line x1="40" y1="674" x2="80" y2="674" stroke="#000000" stroke-width="2.5"/>
  <text x="88" y="678" font-family="Georgia,serif" font-size="10" fill="#000000">bond in plane</text>
  <polygon points="170,668 210,674 170,680" fill="#000000"/>
  <text x="218" y="678" font-family="Georgia,serif" font-size="10" fill="#000000">wedge (forward)</text>
  <line x1="370" y1="674" x2="410" y2="674" stroke="#000000" stroke-width="2.5" stroke-dasharray="7,5"/>
  <text x="418" y="678" font-family="Georgia,serif" font-size="10" fill="#000000">dashed (behind plane)</text>
</svg>`;

  // ─── 13. POLARITY DIAGRAM — Water ────────────────────────────────────────
  static polarityDiagramSvg = `<?xml version="1.0" encoding="utf-8"?>
<svg version="1.1" xmlns="http://www.w3.org/2000/svg"
     width="800px" height="600px" viewBox="0 0 800 600">

  <rect x="0" y="0" width="800" height="600" fill="#ffffff"/>

  <text x="400" y="30" font-family="Georgia,serif" font-size="16" font-weight="bold"
        fill="#000000" text-anchor="middle">Molecular Polarity — Water (H₂O)</text>
  <text x="400" y="50" font-family="Georgia,serif" font-size="11" fill="#000000" text-anchor="middle">
    Polar O−H bonds + bent geometry → large net dipole moment
  </text>

  <!-- Water molecule -->
  <!-- O -->
  <circle cx="400" cy="260" r="40" fill="#ffffff" stroke="#000000" stroke-width="3"/>
  <text x="400" y="265" font-family="Georgia,serif" font-size="18" font-weight="bold"
        fill="#000000" text-anchor="middle">O</text>

  <!-- H left -->
  <circle cx="240" cy="340" r="28" fill="#ffffff" stroke="#000000" stroke-width="2.5"/>
  <text x="240" y="345" font-family="Georgia,serif" font-size="16" font-weight="bold"
        fill="#000000" text-anchor="middle">H</text>

  <!-- H right -->
  <circle cx="560" cy="340" r="28" fill="#ffffff" stroke="#000000" stroke-width="2.5"/>
  <text x="560" y="345" font-family="Georgia,serif" font-size="16" font-weight="bold"
        fill="#000000" text-anchor="middle">H</text>

  <!-- Bonds -->
  <line x1="268" y1="328" x2="362" y2="278" stroke="#000000" stroke-width="2.5"/>
  <line x1="532" y1="328" x2="438" y2="278" stroke="#000000" stroke-width="2.5"/>

  <!-- Partial charges -->
  <text x="400" y="218" font-family="Georgia,serif" font-size="16" fill="#000000" text-anchor="middle">δ−</text>
  <text x="218" y="358" font-family="Georgia,serif" font-size="16" fill="#000000" text-anchor="middle">δ+</text>
  <text x="582" y="358" font-family="Georgia,serif" font-size="16" fill="#000000" text-anchor="middle">δ+</text>

  <!-- Bond dipole arrows (pointing toward more electronegative O) -->
  <!-- Left bond dipole -->
  <line x1="272" y1="332" x2="342" y2="294" stroke="#000000" stroke-width="2"/>
  <polygon points="336,290 350,284 344,298" fill="#000000"/>
  <text x="272" y="302" font-family="Georgia,serif" font-size="9" fill="#000000">bond dipole</text>

  <!-- Right bond dipole -->
  <line x1="528" y1="332" x2="458" y2="294" stroke="#000000" stroke-width="2"/>
  <polygon points="464,290 450,284 456,298" fill="#000000"/>
  <text x="508" y="302" font-family="Georgia,serif" font-size="9" fill="#000000">bond dipole</text>

  <!-- Net dipole (vector sum — pointing upward toward O) -->
  <line x1="400" y1="330" x2="400" y2="196" stroke="#000000" stroke-width="3.5"/>
  <polygon points="394,200 400,182 406,200" fill="#000000"/>
  <text x="448" y="264" font-family="Georgia,serif" font-size="12" font-weight="bold" fill="#000000">Net dipole</text>
  <text x="448" y="280" font-family="Georgia,serif" font-size="10" fill="#000000">μ = 1.85 D</text>
  <line x1="445" y1="266" x2="415" y2="240" stroke="#000000" stroke-width="1" stroke-dasharray="3,2"/>

  <!-- Bond angle -->
  <path d="M 285,330 A 118,118 0 0,1 515,330" fill="none" stroke="#000000" stroke-width="1.5" stroke-dasharray="4,3"/>
  <text x="400" y="395" font-family="Georgia,serif" font-size="12" font-weight="bold" fill="#000000" text-anchor="middle">104.5°</text>

  <!-- Electronegativity comparison -->
  <rect x="40" y="430" width="330" height="100" rx="5"
        fill="#ffffff" stroke="#000000" stroke-width="2"/>
  <text x="60" y="452" font-family="Georgia,serif" font-size="12" font-weight="bold" fill="#000000">Electronegativity (Pauling scale):</text>
  <text x="60" y="472" font-family="Georgia,serif" font-size="12" fill="#000000">O = 3.44</text>
  <text x="60" y="490" font-family="Georgia,serif" font-size="12" fill="#000000">H = 2.20</text>
  <text x="60" y="508" font-family="Georgia,serif" font-size="12" fill="#000000">ΔEN = 1.24 → polar bond</text>
  <text x="60" y="524" font-family="Georgia,serif" font-size="10" fill="#000000">ΔEN &gt; 0.4: polar; &gt; 1.7: ionic</text>

  <!-- Contrast: CO₂ non-polar -->
  <rect x="430" y="430" width="330" height="100" rx="5"
        fill="#ffffff" stroke="#000000" stroke-width="2"/>
  <text x="450" y="452" font-family="Georgia,serif" font-size="12" font-weight="bold" fill="#000000">Contrast — CO₂ (non-polar):</text>
  <text x="450" y="472" font-family="Georgia,serif" font-size="11" fill="#000000">Also has polar C=O bonds,</text>
  <text x="450" y="490" font-family="Georgia,serif" font-size="11" fill="#000000">but LINEAR geometry → dipoles</text>
  <text x="450" y="508" font-family="Georgia,serif" font-size="11" fill="#000000">cancel → μ = 0</text>
  <text x="450" y="524" font-family="Georgia,serif" font-size="10" fill="#000000">Shape determines net polarity</text>

  <!-- Summary box -->
  <rect x="30" y="544" width="740" height="46" rx="5"
        fill="#ffffff" stroke="#000000" stroke-width="2" stroke-dasharray="5,3"/>
  <text x="50" y="562" font-family="Georgia,serif" font-size="11" font-weight="bold" fill="#000000">
    Rule: polar bonds + asymmetric geometry → polar molecule
  </text>
  <text x="50" y="580" font-family="Georgia,serif" font-size="11" fill="#000000">
    H₂O: two O−H dipoles do NOT cancel (104.5° angle) → large net dipole → strong H-bonding
  </text>
</svg>`;

  // ─── 14. HYBRIDIZATION DIAGRAM — sp³ Carbon ──────────────────────────────
  static hybridizationDiagramSvg = `<?xml version="1.0" encoding="utf-8"?>
<svg version="1.1" xmlns="http://www.w3.org/2000/svg"
     width="900px" height="700px" viewBox="0 0 900 700">

  <rect x="0" y="0" width="900" height="700" fill="#ffffff"/>

  <text x="450" y="30" font-family="Georgia,serif" font-size="16" font-weight="bold"
        fill="#000000" text-anchor="middle">sp³ Hybridization — Carbon</text>
  <text x="450" y="50" font-family="Georgia,serif" font-size="11" fill="#000000" text-anchor="middle">
    One 2s + three 2p orbitals mix to form four equivalent sp³ hybrid orbitals → tetrahedral
  </text>

  <!-- === BEFORE: atomic orbitals === -->
  <text x="200" y="88" font-family="Georgia,serif" font-size="13" font-weight="bold"
        fill="#000000" text-anchor="middle">Before: Atomic Orbitals</text>

  <!-- Energy axis -->
  <line x1="52" y1="140" x2="52" y2="400" stroke="#000000" stroke-width="2"/>
  <polygon points="47,144 52,130 57,144" fill="#000000"/>
  <text x="14" y="290" font-family="Georgia,serif" font-size="10" fill="#000000"
        transform="rotate(-90 22 280)">Energy →</text>

  <!-- 2s level (lower) y=350 -->
  <line x1="80" y1="350" x2="210" y2="350" stroke="#000000" stroke-width="2.5"/>
  <text x="72" y="354" font-family="Georgia,serif" font-size="11" fill="#000000" text-anchor="end">2s</text>
  <rect x="100" y="330" width="44" height="28" fill="#ffffff" stroke="#000000" stroke-width="2"/>
  <text x="122" y="349" font-family="Georgia,serif" font-size="14" fill="#000000" text-anchor="middle">↑↓</text>

  <!-- 2p level (higher) y=200 -->
  <line x1="80" y1="200" x2="320" y2="200" stroke="#000000" stroke-width="2.5"/>
  <text x="72" y="204" font-family="Georgia,serif" font-size="11" fill="#000000" text-anchor="end">2p</text>
  <!-- 3 boxes — C has 2p² so 2 half-filled -->
  <rect x="100" y="180" width="44" height="28" fill="#ffffff" stroke="#000000" stroke-width="2"/>
  <text x="122" y="199" font-family="Georgia,serif" font-size="14" fill="#000000" text-anchor="middle">↑</text>
  <rect x="148" y="180" width="44" height="28" fill="#ffffff" stroke="#000000" stroke-width="2"/>
  <text x="170" y="199" font-family="Georgia,serif" font-size="14" fill="#000000" text-anchor="middle">↑</text>
  <rect x="196" y="180" width="44" height="28" fill="#ffffff" stroke="#000000" stroke-width="2"/>
  <!-- empty -->

  <!-- Promotion arrow -->
  <line x1="145" y1="330" x2="200" y2="210" stroke="#000000" stroke-width="1.5" stroke-dasharray="5,3"/>
  <polygon points="196,214 204,198 208,214" fill="#000000"/>
  <text x="175" y="276" font-family="Georgia,serif" font-size="9" fill="#000000">promote</text>
  <text x="175" y="288" font-family="Georgia,serif" font-size="9" fill="#000000">1 e⁻</text>

  <!-- Big arrow: mix/hybridize -->
  <line x1="340" y1="300" x2="440" y2="300" stroke="#000000" stroke-width="3"/>
  <polygon points="436,294 450,300 436,306" fill="#000000"/>
  <text x="390" y="288" font-family="Georgia,serif" font-size="12" font-weight="bold" fill="#000000" text-anchor="middle">mix</text>
  <text x="390" y="316" font-family="Georgia,serif" font-size="10" fill="#000000" text-anchor="middle">hybridise</text>

  <!-- === AFTER: sp³ orbitals === -->
  <text x="680" y="88" font-family="Georgia,serif" font-size="13" font-weight="bold"
        fill="#000000" text-anchor="middle">After: sp³ Hybrid Orbitals</text>

  <!-- 4 equivalent sp³ levels -->
  <line x1="460" y1="270" x2="860" y2="270" stroke="#000000" stroke-width="2"/>
  <text x="453" y="274" font-family="Georgia,serif" font-size="11" fill="#000000" text-anchor="end">sp³</text>
  <!-- 4 boxes — all half-filled (ready to bond) -->
  <rect x="470" y="250" width="82" height="28" fill="#ffffff" stroke="#000000" stroke-width="2"/>
  <text x="511" y="269" font-family="Georgia,serif" font-size="14" fill="#000000" text-anchor="middle">↑</text>
  <rect x="560" y="250" width="82" height="28" fill="#ffffff" stroke="#000000" stroke-width="2"/>
  <text x="601" y="269" font-family="Georgia,serif" font-size="14" fill="#000000" text-anchor="middle">↑</text>
  <rect x="650" y="250" width="82" height="28" fill="#ffffff" stroke="#000000" stroke-width="2"/>
  <text x="691" y="269" font-family="Georgia,serif" font-size="14" fill="#000000" text-anchor="middle">↑</text>
  <rect x="740" y="250" width="82" height="28" fill="#ffffff" stroke="#000000" stroke-width="2"/>
  <text x="781" y="269" font-family="Georgia,serif" font-size="14" fill="#000000" text-anchor="middle">↑</text>

  <text x="660" y="316" font-family="Georgia,serif" font-size="11" fill="#000000" text-anchor="middle">
    4 equivalent orbitals (each 25% s, 75% p character)
  </text>
  <text x="660" y="334" font-family="Georgia,serif" font-size="11" fill="#000000" text-anchor="middle">
    Point toward corners of tetrahedron → 109.5°
  </text>

  <!-- Lobe shapes of sp³ -->
  <text x="450" y="390" font-family="Georgia,serif" font-size="12" font-weight="bold" fill="#000000">sp³ orbital shape (one of four):</text>
  <!-- Large lobe -->
  <ellipse cx="580" cy="460" rx="70" ry="35" fill="#ffffff" stroke="#000000" stroke-width="2.5"/>
  <text x="578" y="464" font-family="Georgia,serif" font-size="9" fill="#000000" text-anchor="middle">large lobe</text>
  <!-- Small lobe -->
  <ellipse cx="480" cy="460" rx="28" ry="18" fill="#ffffff" stroke="#000000" stroke-width="1.5" stroke-dasharray="4,3"/>
  <text x="480" y="464" font-family="Georgia,serif" font-size="8" fill="#000000" text-anchor="middle">small</text>
  <circle cx="515" cy="460" r="4" fill="#000000"/>
  <!-- node -->
  <text x="660" y="464" font-family="Georgia,serif" font-size="10" fill="#000000">← bonds via large lobe</text>

  <!-- Comparison table -->
  <rect x="30" y="510" width="840" height="140" rx="5"
        fill="#ffffff" stroke="#000000" stroke-width="2" stroke-dasharray="5,3"/>
  <text x="50" y="532" font-family="Georgia,serif" font-size="12" font-weight="bold" fill="#000000">Hybridization Summary:</text>
  <text x="50" y="554" font-family="Georgia,serif" font-size="11" fill="#000000">sp    (1s+1p):  2 hybrids, 2 unhybridised p  → linear 180°       e.g. C in C₂H₂, BeCl₂</text>
  <text x="50" y="574" font-family="Georgia,serif" font-size="11" fill="#000000">sp²   (1s+2p):  3 hybrids, 1 unhybridised p  → trigonal pl. 120°  e.g. C in C₂H₄, BF₃</text>
  <text x="50" y="594" font-family="Georgia,serif" font-size="11" fill="#000000">sp³   (1s+3p):  4 hybrids, 0 unhybridised p  → tetrahedral 109.5° e.g. C in CH₄, NH₃</text>
  <text x="50" y="614" font-family="Georgia,serif" font-size="11" fill="#000000">sp³d  (1s+3p+1d): 5 hybrids → trigonal bipyramidal 90°/120°  e.g. PCl₅</text>
  <text x="50" y="634" font-family="Georgia,serif" font-size="11" fill="#000000">sp³d² (1s+3p+2d): 6 hybrids → octahedral 90°              e.g. SF₆</text>
  <text x="50" y="646" font-family="Georgia,serif" font-size="10" fill="#000000">
    σ bonds form via hybrid orbitals; π bonds form via unhybridised p orbital overlap
  </text>
</svg>`;

  // ─── 15. MOLECULAR ORBITAL DIAGRAM — O₂ ─────────────────────────────────
  static molecularOrbitalDiagramSvg = `<?xml version="1.0" encoding="utf-8"?>
<svg version="1.1" xmlns="http://www.w3.org/2000/svg"
     width="900px" height="700px" viewBox="0 0 900 700">

  <rect x="0" y="0" width="900" height="700" fill="#ffffff"/>

  <text x="450" y="30" font-family="Georgia,serif" font-size="16" font-weight="bold"
        fill="#000000" text-anchor="middle">Molecular Orbital Diagram — O₂</text>
  <text x="450" y="50" font-family="Georgia,serif" font-size="11" fill="#000000" text-anchor="middle">
    Bond order = 2 | Paramagnetic (2 unpaired electrons) | confirms O=O double bond
  </text>

  <!-- Left O atomic orbitals -->
  <text x="130" y="88" font-family="Georgia,serif" font-size="13" font-weight="bold"
        fill="#000000" text-anchor="middle">O atom</text>

  <!-- 2s: y=540 -->
  <line x1="70" y1="540" x2="200" y2="540" stroke="#000000" stroke-width="2.5"/>
  <text x="60" y="544" font-family="Georgia,serif" font-size="11" fill="#000000" text-anchor="end">2s</text>
  <rect x="105" y="522" width="44" height="28" fill="#ffffff" stroke="#000000" stroke-width="2"/>
  <text x="127" y="541" font-family="Georgia,serif" font-size="14" fill="#000000" text-anchor="middle">↑↓</text>

  <!-- 2p: y=360 (three orbitals) -->
  <line x1="70" y1="360" x2="200" y2="360" stroke="#000000" stroke-width="2.5"/>
  <text x="60" y="364" font-family="Georgia,serif" font-size="11" fill="#000000" text-anchor="end">2p</text>
  <rect x="80"  y="342" width="36" height="28" fill="#ffffff" stroke="#000000" stroke-width="2"/>
  <text x="98"  y="361" font-family="Georgia,serif" font-size="14" fill="#000000" text-anchor="middle">↑↓</text>
  <rect x="120" y="342" width="36" height="28" fill="#ffffff" stroke="#000000" stroke-width="2"/>
  <text x="138" y="361" font-family="Georgia,serif" font-size="14" fill="#000000" text-anchor="middle">↑↓</text>
  <rect x="160" y="342" width="36" height="28" fill="#ffffff" stroke="#000000" stroke-width="2"/>
  <text x="178" y="361" font-family="Georgia,serif" font-size="14" fill="#000000" text-anchor="middle">↑↓</text>

  <!-- Right O atomic orbitals -->
  <text x="770" y="88" font-family="Georgia,serif" font-size="13" font-weight="bold"
        fill="#000000" text-anchor="middle">O atom</text>

  <line x1="700" y1="540" x2="830" y2="540" stroke="#000000" stroke-width="2.5"/>
  <text x="840" y="544" font-family="Georgia,serif" font-size="11" fill="#000000">2s</text>
  <rect x="745" y="522" width="44" height="28" fill="#ffffff" stroke="#000000" stroke-width="2"/>
  <text x="767" y="541" font-family="Georgia,serif" font-size="14" fill="#000000" text-anchor="middle">↑↓</text>

  <line x1="700" y1="360" x2="830" y2="360" stroke="#000000" stroke-width="2.5"/>
  <text x="840" y="364" font-family="Georgia,serif" font-size="11" fill="#000000">2p</text>
  <rect x="700" y="342" width="36" height="28" fill="#ffffff" stroke="#000000" stroke-width="2"/>
  <text x="718" y="361" font-family="Georgia,serif" font-size="14" fill="#000000" text-anchor="middle">↑↓</text>
  <rect x="740" y="342" width="36" height="28" fill="#ffffff" stroke="#000000" stroke-width="2"/>
  <text x="758" y="361" font-family="Georgia,serif" font-size="14" fill="#000000" text-anchor="middle">↑↓</text>
  <rect x="780" y="342" width="36" height="28" fill="#ffffff" stroke="#000000" stroke-width="2"/>
  <text x="798" y="361" font-family="Georgia,serif" font-size="14" fill="#000000" text-anchor="middle">↑↓</text>

  <!-- Molecular Orbital levels (centre) -->
  <text x="450" y="88" font-family="Georgia,serif" font-size="13" font-weight="bold"
        fill="#000000" text-anchor="middle">O₂ Molecular Orbitals</text>

  <!-- σ2s bonding: y=580 -->
  <line x1="350" y1="580" x2="550" y2="580" stroke="#000000" stroke-width="2.5"/>
  <text x="340" y="584" font-family="Georgia,serif" font-size="10" fill="#000000" text-anchor="end">σ2s</text>
  <rect x="405" y="562" width="44" height="28" fill="#ffffff" stroke="#000000" stroke-width="2"/>
  <text x="427" y="581" font-family="Georgia,serif" font-size="14" fill="#000000" text-anchor="middle">↑↓</text>

  <!-- σ*2s antibonding: y=500 -->
  <line x1="350" y1="500" x2="550" y2="500" stroke="#000000" stroke-width="2" stroke-dasharray="6,3"/>
  <text x="340" y="504" font-family="Georgia,serif" font-size="10" fill="#000000" text-anchor="end">σ*2s</text>
  <rect x="405" y="482" width="44" height="28" fill="#ffffff" stroke="#000000" stroke-width="2"/>
  <text x="427" y="501" font-family="Georgia,serif" font-size="14" fill="#000000" text-anchor="middle">↑↓</text>

  <!-- σ2p bonding: y=420 -->
  <line x1="350" y1="420" x2="550" y2="420" stroke="#000000" stroke-width="2.5"/>
  <text x="340" y="424" font-family="Georgia,serif" font-size="10" fill="#000000" text-anchor="end">σ2p</text>
  <rect x="405" y="402" width="44" height="28" fill="#ffffff" stroke="#000000" stroke-width="2"/>
  <text x="427" y="421" font-family="Georgia,serif" font-size="14" fill="#000000" text-anchor="middle">↑↓</text>

  <!-- π2p bonding (degenerate pair): y=340 -->
  <line x1="320" y1="340" x2="580" y2="340" stroke="#000000" stroke-width="2.5"/>
  <text x="310" y="344" font-family="Georgia,serif" font-size="10" fill="#000000" text-anchor="end">π2p</text>
  <rect x="360" y="322" width="44" height="28" fill="#ffffff" stroke="#000000" stroke-width="2"/>
  <text x="382" y="341" font-family="Georgia,serif" font-size="14" fill="#000000" text-anchor="middle">↑↓</text>
  <rect x="496" y="322" width="44" height="28" fill="#ffffff" stroke="#000000" stroke-width="2"/>
  <text x="518" y="341" font-family="Georgia,serif" font-size="14" fill="#000000" text-anchor="middle">↑↓</text>

  <!-- π*2p antibonding (degenerate): y=220 — KEY: 2 unpaired e⁻ -->
  <line x1="320" y1="220" x2="580" y2="220" stroke="#000000" stroke-width="2" stroke-dasharray="6,3"/>
  <text x="310" y="224" font-family="Georgia,serif" font-size="10" fill="#000000" text-anchor="end">π*2p</text>
  <rect x="360" y="202" width="44" height="28" fill="#ffffff" stroke="#000000" stroke-width="2"/>
  <text x="382" y="221" font-family="Georgia,serif" font-size="14" fill="#000000" text-anchor="middle">↑</text>
  <rect x="496" y="202" width="44" height="28" fill="#ffffff" stroke="#000000" stroke-width="2"/>
  <text x="518" y="221" font-family="Georgia,serif" font-size="14" fill="#000000" text-anchor="middle">↑</text>
  <text x="450" y="196" font-family="Georgia,serif" font-size="10" font-weight="bold" fill="#000000" text-anchor="middle">
    ← 2 unpaired e⁻ (paramagnetic)
  </text>

  <!-- σ*2p antibonding: y=130 — empty -->
  <line x1="350" y1="130" x2="550" y2="130" stroke="#000000" stroke-width="2" stroke-dasharray="6,3"/>
  <text x="340" y="134" font-family="Georgia,serif" font-size="10" fill="#000000" text-anchor="end">σ*2p</text>
  <rect x="405" y="112" width="44" height="28" fill="#ffffff" stroke="#000000" stroke-width="2"/>

  <!-- Dashed lines connecting AO to MO -->
  <line x1="200" y1="540" x2="350" y2="580" stroke="#000000" stroke-width="1" stroke-dasharray="3,3"/>
  <line x1="200" y1="540" x2="350" y2="500" stroke="#000000" stroke-width="1" stroke-dasharray="3,3"/>
  <line x1="700" y1="540" x2="550" y2="580" stroke="#000000" stroke-width="1" stroke-dasharray="3,3"/>
  <line x1="700" y1="540" x2="550" y2="500" stroke="#000000" stroke-width="1" stroke-dasharray="3,3"/>
  <line x1="200" y1="360" x2="350" y2="420" stroke="#000000" stroke-width="1" stroke-dasharray="3,3"/>
  <line x1="200" y1="360" x2="320" y2="340" stroke="#000000" stroke-width="1" stroke-dasharray="3,3"/>
  <line x1="200" y1="360" x2="350" y2="130" stroke="#000000" stroke-width="1" stroke-dasharray="3,3"/>
  <line x1="700" y1="360" x2="550" y2="420" stroke="#000000" stroke-width="1" stroke-dasharray="3,3"/>
  <line x1="700" y1="360" x2="580" y2="340" stroke="#000000" stroke-width="1" stroke-dasharray="3,3"/>
  <line x1="700" y1="360" x2="550" y2="130" stroke="#000000" stroke-width="1" stroke-dasharray="3,3"/>

  <!-- Summary box -->
  <rect x="30" y="624" width="840" height="64" rx="5"
        fill="#ffffff" stroke="#000000" stroke-width="2" stroke-dasharray="5,3"/>
  <text x="50" y="644" font-family="Georgia,serif" font-size="11" font-weight="bold" fill="#000000">
    Bond order = (bonding e⁻ − antibonding e⁻) / 2 = (10 − 6) / 2 = 2  → confirms O=O
  </text>
  <text x="50" y="662" font-family="Georgia,serif" font-size="11" fill="#000000">
    2 unpaired e⁻ in degenerate π*2p orbitals (Hund's rule) → O₂ is paramagnetic
  </text>
  <text x="50" y="678" font-family="Georgia,serif" font-size="10" fill="#000000">
    Solid lines = bonding MOs (lower energy); Dashed lines = antibonding MOs (higher energy, marked *)
  </text>
</svg>`;

  // ─── 16. HYDROGEN BONDING DIAGRAM — Water ────────────────────────────────
  static hydrogenBondingDiagramSvg = `<?xml version="1.0" encoding="utf-8"?>
<svg version="1.1" xmlns="http://www.w3.org/2000/svg"
     width="900px" height="600px" viewBox="0 0 900 600">

  <rect x="0" y="0" width="900" height="600" fill="#ffffff"/>

  <text x="450" y="30" font-family="Georgia,serif" font-size="16" font-weight="bold"
        fill="#000000" text-anchor="middle">Hydrogen Bonding — Water</text>
  <text x="450" y="50" font-family="Georgia,serif" font-size="11" fill="#000000" text-anchor="middle">
    O−H···O hydrogen bonds between water molecules (strongest IMF in H₂O)
  </text>

  <!-- === Molecule 1 (centre-left) === -->
  <!-- O1 -->
  <circle cx="280" cy="240" r="32" fill="#ffffff" stroke="#000000" stroke-width="3"/>
  <text x="280" y="245" font-family="Georgia,serif" font-size="14" font-weight="bold"
        fill="#000000" text-anchor="middle">O</text>
  <!-- H1a (left) -->
  <circle cx="160" cy="290" r="20" fill="#ffffff" stroke="#000000" stroke-width="2.5"/>
  <text x="160" y="295" font-family="Georgia,serif" font-size="13" font-weight="bold"
        fill="#000000" text-anchor="middle">H</text>
  <line x1="180" y1="284" x2="249" y2="256" stroke="#000000" stroke-width="2.5"/>
  <!-- H1b (below) -->
  <circle cx="280" cy="360" r="20" fill="#ffffff" stroke="#000000" stroke-width="2.5"/>
  <text x="280" y="365" font-family="Georgia,serif" font-size="13" font-weight="bold"
        fill="#000000" text-anchor="middle">H</text>
  <line x1="280" y1="340" x2="280" y2="272" stroke="#000000" stroke-width="2.5"/>
  <!-- partial charges mol1 -->
  <text x="280" y="204" font-family="Georgia,serif" font-size="14" fill="#000000" text-anchor="middle">δ−</text>
  <text x="140" y="308" font-family="Georgia,serif" font-size="14" fill="#000000">δ+</text>
  <text x="258" y="385" font-family="Georgia,serif" font-size="14" fill="#000000">δ+</text>
  <!-- lone pairs on O1 -->
  <circle cx="252" cy="212" r="5" fill="#000000"/>
  <circle cx="264" cy="208" r="5" fill="#000000"/>
  <circle cx="296" cy="208" r="5" fill="#000000"/>
  <circle cx="308" cy="212" r="5" fill="#000000"/>

  <!-- === HYDROGEN BOND (dashed) from H1a to O2 === -->
  <!-- Molecule 2 (right) O2 -->
  <circle cx="520" cy="240" r="32" fill="#ffffff" stroke="#000000" stroke-width="3"/>
  <text x="520" y="245" font-family="Georgia,serif" font-size="14" font-weight="bold"
        fill="#000000" text-anchor="middle">O</text>
  <!-- H2a (right) -->
  <circle cx="640" cy="290" r="20" fill="#ffffff" stroke="#000000" stroke-width="2.5"/>
  <text x="640" y="295" font-family="Georgia,serif" font-size="13" font-weight="bold"
        fill="#000000" text-anchor="middle">H</text>
  <line x1="620" y1="284" x2="551" y2="256" stroke="#000000" stroke-width="2.5"/>
  <!-- H2b (below) -->
  <circle cx="520" cy="360" r="20" fill="#ffffff" stroke="#000000" stroke-width="2.5"/>
  <text x="520" y="365" font-family="Georgia,serif" font-size="13" font-weight="bold"
        fill="#000000" text-anchor="middle">H</text>
  <line x1="520" y1="340" x2="520" y2="272" stroke="#000000" stroke-width="2.5"/>
  <!-- partial charges mol2 -->
  <text x="520" y="204" font-family="Georgia,serif" font-size="14" fill="#000000" text-anchor="middle">δ−</text>
  <text x="656" y="308" font-family="Georgia,serif" font-size="14" fill="#000000">δ+</text>
  <!-- lone pairs on O2 -->
  <circle cx="492" cy="212" r="5" fill="#000000"/>
  <circle cx="504" cy="208" r="5" fill="#000000"/>
  <circle cx="536" cy="208" r="5" fill="#000000"/>
  <circle cx="548" cy="212" r="5" fill="#000000"/>

  <!-- Hydrogen bond line: H1a(δ+) ··· O2(δ−) lone pair -->
  <line x1="180" y1="284" x2="492" y2="218" stroke="#000000" stroke-width="2" stroke-dasharray="8,5"/>
  <text x="330" y="240" font-family="Georgia,serif" font-size="11" font-weight="bold" fill="#000000" text-anchor="middle">
    H···O hydrogen bond
  </text>
  <text x="330" y="256" font-family="Georgia,serif" font-size="9" fill="#000000" text-anchor="middle">
    (dashed line)
  </text>

  <!-- Second H-bond: H2b ··· lone pair of O3 (below) -->
  <!-- Molecule 3 (bottom-right) -->
  <circle cx="680" cy="460" r="32" fill="#ffffff" stroke="#000000" stroke-width="3"/>
  <text x="680" y="465" font-family="Georgia,serif" font-size="14" font-weight="bold"
        fill="#000000" text-anchor="middle">O</text>
  <circle cx="760" cy="510" r="20" fill="#ffffff" stroke="#000000" stroke-width="2"/>
  <text x="760" y="515" font-family="Georgia,serif" font-size="13" font-weight="bold"
        fill="#000000" text-anchor="middle">H</text>
  <line x1="740" y1="504" x2="711" y2="476" stroke="#000000" stroke-width="2.5"/>
  <circle cx="600" cy="510" r="20" fill="#ffffff" stroke="#000000" stroke-width="2"/>
  <text x="600" y="515" font-family="Georgia,serif" font-size="13" font-weight="bold"
        fill="#000000" text-anchor="middle">H</text>
  <line x1="620" y1="504" x2="649" y2="476" stroke="#000000" stroke-width="2.5"/>
  <text x="680" y="424" font-family="Georgia,serif" font-size="14" fill="#000000" text-anchor="middle">δ−</text>

  <!-- H-bond: H2b → O3 -->
  <line x1="520" y1="380" x2="658" y2="440" stroke="#000000" stroke-width="2" stroke-dasharray="8,5"/>
  <text x="578" y="422" font-family="Georgia,serif" font-size="10" fill="#000000">H···O</text>

  <!-- Properties box -->
  <rect x="30" y="430" width="300" height="140" rx="5"
        fill="#ffffff" stroke="#000000" stroke-width="2"/>
  <text x="50" y="452" font-family="Georgia,serif" font-size="12" font-weight="bold" fill="#000000">H-Bond Properties:</text>
  <text x="50" y="472" font-family="Georgia,serif" font-size="11" fill="#000000">Strength: ~20 kJ mol⁻¹</text>
  <text x="50" y="490" font-family="Georgia,serif" font-size="11" fill="#000000">Stronger than London/dipole</text>
  <text x="50" y="508" font-family="Georgia,serif" font-size="11" fill="#000000">Weaker than covalent (~400)</text>
  <text x="50" y="526" font-family="Georgia,serif" font-size="11" fill="#000000">Length: ~0.18 nm</text>
  <text x="50" y="544" font-family="Georgia,serif" font-size="11" fill="#000000">Nearly linear: O−H···O</text>

  <!-- Summary box -->
  <rect x="30" y="544" width="840" height="48" rx="5"
        fill="#ffffff" stroke="#000000" stroke-width="2" stroke-dasharray="5,3"/>
  <text x="50" y="564" font-family="Georgia,serif" font-size="11" font-weight="bold" fill="#000000">
    Conditions for H-bonding: H covalently bonded to N, O, or F; lone pair on N, O, or F
  </text>
  <text x="50" y="582" font-family="Georgia,serif" font-size="11" fill="#000000">
    Effects: anomalously high bp/mp of H₂O, ice less dense than water, solvent properties, DNA base pairing
  </text>
</svg>`;

  // ─── 17. INTERMOLECULAR FORCES COMPARISON ────────────────────────────────
  static intermolecularForcesDiagramSvg = `<?xml version="1.0" encoding="utf-8"?>
<svg version="1.1" xmlns="http://www.w3.org/2000/svg"
     width="1000px" height="700px" viewBox="0 0 1000 700">

  <rect x="0" y="0" width="1000" height="700" fill="#ffffff"/>

  <text x="500" y="30" font-family="Georgia,serif" font-size="16" font-weight="bold"
        fill="#000000" text-anchor="middle">Types of Intermolecular Forces (IMF)</text>
  <text x="500" y="50" font-family="Georgia,serif" font-size="11" fill="#000000" text-anchor="middle">
    Comparison of London dispersion, dipole-dipole, and hydrogen bonding
  </text>

  <!-- === LONDON DISPERSION FORCES === -->
  <rect x="30" y="70" width="290" height="260" rx="6"
        fill="#ffffff" stroke="#000000" stroke-width="2.5"/>
  <text x="175" y="94" font-family="Georgia,serif" font-size="13" font-weight="bold"
        fill="#000000" text-anchor="middle">London Dispersion</text>
  <text x="175" y="110" font-family="Georgia,serif" font-size="10" fill="#000000" text-anchor="middle">(van der Waals / induced dipole)</text>

  <!-- Two non-polar molecules: instantaneous dipoles -->
  <!-- Molecule A -->
  <ellipse cx="100" cy="170" rx="50" ry="28" fill="#ffffff" stroke="#000000" stroke-width="2"/>
  <text x="76" y="166" font-family="Georgia,serif" font-size="10" fill="#000000">δ−</text>
  <text x="115" y="166" font-family="Georgia,serif" font-size="10" fill="#000000">δ+</text>
  <text x="100" y="175" font-family="Georgia,serif" font-size="11" font-weight="bold" fill="#000000" text-anchor="middle">A</text>
  <!-- Molecule B (induced) -->
  <ellipse cx="250" cy="170" rx="50" ry="28" fill="#ffffff" stroke="#000000" stroke-width="2"/>
  <text x="225" y="166" font-family="Georgia,serif" font-size="10" fill="#000000">δ+</text>
  <text x="263" y="166" font-family="Georgia,serif" font-size="10" fill="#000000">δ−</text>
  <text x="250" y="175" font-family="Georgia,serif" font-size="11" font-weight="bold" fill="#000000" text-anchor="middle">B</text>
  <!-- Attraction -->
  <line x1="150" y1="170" x2="200" y2="170" stroke="#000000" stroke-width="1.5" stroke-dasharray="5,3"/>
  <text x="175" y="162" font-family="Georgia,serif" font-size="8" fill="#000000" text-anchor="middle">attract</text>

  <text x="50" y="218" font-family="Georgia,serif" font-size="10" fill="#000000">• Present in ALL molecules</text>
  <text x="50" y="234" font-family="Georgia,serif" font-size="10" fill="#000000">• Caused by instantaneous dipoles</text>
  <text x="50" y="250" font-family="Georgia,serif" font-size="10" fill="#000000">• Strength ∝ molar mass / surface area</text>
  <text x="50" y="266" font-family="Georgia,serif" font-size="10" fill="#000000">• Weakest IMF for small molecules</text>
  <text x="50" y="282" font-family="Georgia,serif" font-size="10" fill="#000000">• e.g. He, CH₄, Cl₂, noble gases</text>
  <text x="50" y="298" font-family="Georgia,serif" font-size="10" font-weight="bold" fill="#000000">Strength: ~0.1–40 kJ mol⁻¹</text>
  <text x="50" y="315" font-family="Georgia,serif" font-size="10" fill="#000000">Scales with number of electrons</text>

  <!-- === DIPOLE-DIPOLE === -->
  <rect x="355" y="70" width="290" height="260" rx="6"
        fill="#ffffff" stroke="#000000" stroke-width="2.5"/>
  <text x="500" y="94" font-family="Georgia,serif" font-size="13" font-weight="bold"
        fill="#000000" text-anchor="middle">Dipole-Dipole</text>
  <text x="500" y="110" font-family="Georgia,serif" font-size="10" fill="#000000" text-anchor="middle">(permanent dipole–permanent dipole)</text>

  <!-- HCl molecule pair -->
  <ellipse cx="420" cy="165" rx="48" ry="26" fill="#ffffff" stroke="#000000" stroke-width="2"/>
  <text x="398" y="162" font-family="Georgia,serif" font-size="10" fill="#000000">δ+</text>
  <text x="444" y="162" font-family="Georgia,serif" font-size="10" fill="#000000">δ−</text>
  <text x="402" y="170" font-family="Georgia,serif" font-size="10" fill="#000000" text-anchor="middle">H</text>
  <text x="442" y="170" font-family="Georgia,serif" font-size="10" fill="#000000" text-anchor="middle">Cl</text>
  <!-- Arrow showing dipole direction -->
  <line x1="404" y1="155" x2="438" y2="155" stroke="#000000" stroke-width="1.5"/>
  <polygon points="434,152 442,155 434,158" fill="#000000"/>

  <ellipse cx="565" cy="165" rx="48" ry="26" fill="#ffffff" stroke="#000000" stroke-width="2"/>
  <text x="543" y="162" font-family="Georgia,serif" font-size="10" fill="#000000">δ+</text>
  <text x="589" y="162" font-family="Georgia,serif" font-size="10" fill="#000000">δ−</text>
  <text x="547" y="170" font-family="Georgia,serif" font-size="10" fill="#000000" text-anchor="middle">H</text>
  <text x="587" y="170" font-family="Georgia,serif" font-size="10" fill="#000000" text-anchor="middle">Cl</text>
  <line x1="549" y1="155" x2="583" y2="155" stroke="#000000" stroke-width="1.5"/>
  <polygon points="579,152 587,155 579,158" fill="#000000"/>

  <!-- Attraction: δ− Cl1 ··· δ+ H2 -->
  <line x1="468" y1="165" x2="517" y2="165" stroke="#000000" stroke-width="1.5" stroke-dasharray="5,3"/>
  <text x="493" y="158" font-family="Georgia,serif" font-size="8" fill="#000000" text-anchor="middle">attract</text>

  <text x="375" y="218" font-family="Georgia,serif" font-size="10" fill="#000000">• Between polar molecules</text>
  <text x="375" y="234" font-family="Georgia,serif" font-size="10" fill="#000000">• δ+ end of one ↔ δ− end of next</text>
  <text x="375" y="250" font-family="Georgia,serif" font-size="10" fill="#000000">• Stronger than London (for similar size)</text>
  <text x="375" y="266" font-family="Georgia,serif" font-size="10" fill="#000000">• e.g. HCl, SO₂, CH₃Cl</text>
  <text x="375" y="282" font-family="Georgia,serif" font-size="10" fill="#000000">• Molecules must be polar (ΔEN &gt; 0.4)</text>
  <text x="375" y="298" font-family="Georgia,serif" font-size="10" font-weight="bold" fill="#000000">Strength: ~5–25 kJ mol⁻¹</text>
  <text x="375" y="315" font-family="Georgia,serif" font-size="10" fill="#000000">Always accompanies London forces</text>

  <!-- === HYDROGEN BONDING === -->
  <rect x="680" y="70" width="290" height="260" rx="6"
        fill="#ffffff" stroke="#000000" stroke-width="2.5"/>
  <text x="825" y="94" font-family="Georgia,serif" font-size="13" font-weight="bold"
        fill="#000000" text-anchor="middle">Hydrogen Bonding</text>
  <text x="825" y="110" font-family="Georgia,serif" font-size="10" fill="#000000" text-anchor="middle">(special case of dipole-dipole)</text>

  <!-- H₂O dimer -->
  <circle cx="744" cy="168" r="24" fill="#ffffff" stroke="#000000" stroke-width="2"/>
  <text x="744" y="172" font-family="Georgia,serif" font-size="12" font-weight="bold" fill="#000000" text-anchor="middle">O</text>
  <text x="744" y="140" font-family="Georgia,serif" font-size="11" fill="#000000" text-anchor="middle">δ−</text>
  <circle cx="700" cy="200" r="16" fill="#ffffff" stroke="#000000" stroke-width="2"/>
  <text x="700" y="205" font-family="Georgia,serif" font-size="11" fill="#000000" text-anchor="middle">H</text>
  <line x1="716" y1="196" x2="721" y2="188" stroke="#000000" stroke-width="2"/>
  <text x="686" y="215" font-family="Georgia,serif" font-size="9" fill="#000000">δ+</text>
  <circle cx="780" cy="198" r="16" fill="#ffffff" stroke="#000000" stroke-width="2"/>
  <text x="780" y="203" font-family="Georgia,serif" font-size="11" fill="#000000" text-anchor="middle">H</text>
  <line x1="764" y1="194" x2="767" y2="186" stroke="#000000" stroke-width="2"/>
  <text x="798" y="214" font-family="Georgia,serif" font-size="9" fill="#000000">δ+</text>
  <!-- H-bond target O -->
  <circle cx="900" cy="165" r="24" fill="#ffffff" stroke="#000000" stroke-width="2"/>
  <text x="900" y="169" font-family="Georgia,serif" font-size="12" font-weight="bold" fill="#000000" text-anchor="middle">O</text>
  <!-- H-bond dashed -->
  <line x1="796" y1="198" x2="876" y2="172" stroke="#000000" stroke-width="2" stroke-dasharray="7,4"/>
  <text x="840" y="195" font-family="Georgia,serif" font-size="9" fill="#000000">H···O</text>

  <text x="700" y="228" font-family="Georgia,serif" font-size="10" fill="#000000">• H bonded to N, O, or F</text>
  <text x="700" y="244" font-family="Georgia,serif" font-size="10" fill="#000000">• H attracted to lone pair on N/O/F</text>
  <text x="700" y="260" font-family="Georgia,serif" font-size="10" fill="#000000">• Strongest type of IMF</text>
  <text x="700" y="276" font-family="Georgia,serif" font-size="10" fill="#000000">• e.g. H₂O, NH₃, HF, DNA, proteins</text>
  <text x="700" y="292" font-family="Georgia,serif" font-size="10" fill="#000000">• Nearly linear geometry preferred</text>
  <text x="700" y="308" font-family="Georgia,serif" font-size="10" font-weight="bold" fill="#000000">Strength: ~20–50 kJ mol⁻¹</text>
  <text x="700" y="325" font-family="Georgia,serif" font-size="10" fill="#000000">Still much weaker than covalent (~400)</text>

  <!-- Strength comparison bar chart -->
  <text x="500" y="365" font-family="Georgia,serif" font-size="13" font-weight="bold"
        fill="#000000" text-anchor="middle">Relative Strength Comparison</text>

  <!-- Bar chart -->
  <!-- Y axis -->
  <line x1="100" y1="390" x2="100" y2="560" stroke="#000000" stroke-width="2"/>
  <!-- Bars -->
  <!-- London (small molecule): height 30 → ~5 kJ -->
  <rect x="150" y="530" width="80" height="30" fill="#ffffff" stroke="#000000" stroke-width="2.5"/>
  <text x="190" y="548" font-family="Georgia,serif" font-size="9" fill="#000000" text-anchor="middle">~5</text>
  <text x="190" y="575" font-family="Georgia,serif" font-size="10" fill="#000000" text-anchor="middle">London</text>
  <text x="190" y="588" font-family="Georgia,serif" font-size="10" fill="#000000" text-anchor="middle">(small mol)</text>

  <!-- London (large): height 90 -->
  <rect x="260" y="470" width="80" height="90" fill="#ffffff" stroke="#000000" stroke-width="2.5"/>
  <text x="300" y="518" font-family="Georgia,serif" font-size="9" fill="#000000" text-anchor="middle">~15</text>
  <text x="300" y="575" font-family="Georgia,serif" font-size="10" fill="#000000" text-anchor="middle">London</text>
  <text x="300" y="588" font-family="Georgia,serif" font-size="10" fill="#000000" text-anchor="middle">(large mol)</text>

  <!-- Dipole-dipole: height 60 -->
  <rect x="370" y="500" width="80" height="60" fill="#ffffff" stroke="#000000" stroke-width="2.5" stroke-dasharray="6,4"/>
  <text x="410" y="533" font-family="Georgia,serif" font-size="9" fill="#000000" text-anchor="middle">~10</text>
  <text x="410" y="575" font-family="Georgia,serif" font-size="10" fill="#000000" text-anchor="middle">Dipole-</text>
  <text x="410" y="588" font-family="Georgia,serif" font-size="10" fill="#000000" text-anchor="middle">Dipole</text>

  <!-- H-bond: height 130 -->
  <rect x="480" y="430" width="80" height="130" fill="#000000" fill-opacity="0.15" stroke="#000000" stroke-width="2.5"/>
  <text x="520" y="492" font-family="Georgia,serif" font-size="9" fill="#000000" text-anchor="middle">~20–50</text>
  <text x="520" y="575" font-family="Georgia,serif" font-size="10" fill="#000000" text-anchor="middle">H-Bond</text>
  <text x="520" y="588" font-family="Georgia,serif" font-size="10" fill="#000000" text-anchor="middle">(strongest)</text>

  <!-- Y label -->
  <text x="80" y="480" font-family="Georgia,serif" font-size="10" fill="#000000"
        transform="rotate(-90 72 480)">kJ mol⁻¹</text>

  <!-- Summary box -->
  <rect x="30" y="610" width="940" height="78" rx="5"
        fill="#ffffff" stroke="#000000" stroke-width="2" stroke-dasharray="5,3"/>
  <text x="50" y="630" font-family="Georgia,serif" font-size="11" font-weight="bold" fill="#000000">
    Strength order: London (small) &lt; Dipole-dipole &lt; London (large) &lt; H-bond &lt;&lt; Covalent bond
  </text>
  <text x="50" y="650" font-family="Georgia,serif" font-size="11" fill="#000000">
    ALL molecules have London forces; polar molecules also have dipole-dipole; only N/O/F−H compounds H-bond
  </text>
  <text x="50" y="668" font-family="Georgia,serif" font-size="11" fill="#000000">
    IMFs determine: boiling point, solubility, viscosity, surface tension, biological structure (DNA, proteins)
  </text>
  <text x="50" y="682" font-family="Georgia,serif" font-size="10" fill="#000000">
    Rule of thumb: larger molar mass → stronger London forces → higher boiling point (e.g. I₂ &gt; Br₂ &gt; Cl₂)
  </text>
</svg>`;

  // ─── 18. CRYSTAL LATTICE DIAGRAM — NaCl ──────────────────────────────────
  static crystalLatticeDiagramSvg = `<?xml version="1.0" encoding="utf-8"?>
<svg version="1.1" xmlns="http://www.w3.org/2000/svg"
     width="800px" height="800px" viewBox="0 0 800 800">

  <rect x="0" y="0" width="800" height="800" fill="#ffffff"/>

  <text x="400" y="30" font-family="Georgia,serif" font-size="16" font-weight="bold"
        fill="#000000" text-anchor="middle">NaCl Crystal Lattice</text>
  <text x="400" y="50" font-family="Georgia,serif" font-size="11" fill="#000000" text-anchor="middle">
    Face-centred cubic (FCC) structure — alternating Na⁺ and Cl⁻ ions
  </text>

  <!-- Isometric projection of 2×2×2 unit cell approximation -->
  <!-- Using offset grid: each cell ~90px -->
  <!-- Layer 1 (back) — 3×3 grid of ions -->

  <!-- Define ion positions as isometric grid:
       row 0 back: y offset -60; row 1 mid: y offset 0; row 2 front: y +60
       col 0 left: x offset -80; col 1 mid: x 0; col 2 right: x +80
       Centre at (400, 380)
       Isometric x shift: 70px/step, y shift: 40px/step for x; 80px/step for depth  -->

  <!-- Drawing a 3x3 layer grid, 2 layers (back and front) -->
  <!-- LAYER BACK (y base 260) -->
  <!-- Lattice bonds (back layer) -->
  <line x1="190" y1="260" x2="330" y2="260" stroke="#000000" stroke-width="1.5"/>
  <line x1="330" y1="260" x2="470" y2="260" stroke="#000000" stroke-width="1.5"/>
  <line x1="190" y1="340" x2="330" y2="340" stroke="#000000" stroke-width="1.5"/>
  <line x1="330" y1="340" x2="470" y2="340" stroke="#000000" stroke-width="1.5"/>
  <line x1="190" y1="260" x2="190" y2="340" stroke="#000000" stroke-width="1.5"/>
  <line x1="330" y1="260" x2="330" y2="340" stroke="#000000" stroke-width="1.5"/>
  <line x1="470" y1="260" x2="470" y2="340" stroke="#000000" stroke-width="1.5"/>

  <!-- LAYER FRONT (y base 420) -->
  <line x1="190" y1="420" x2="330" y2="420" stroke="#000000" stroke-width="1.5"/>
  <line x1="330" y1="420" x2="470" y2="420" stroke="#000000" stroke-width="1.5"/>
  <line x1="190" y1="500" x2="330" y2="500" stroke="#000000" stroke-width="1.5"/>
  <line x1="330" y1="500" x2="470" y2="500" stroke="#000000" stroke-width="1.5"/>
  <line x1="190" y1="420" x2="190" y2="500" stroke="#000000" stroke-width="1.5"/>
  <line x1="330" y1="420" x2="330" y2="500" stroke="#000000" stroke-width="1.5"/>
  <line x1="470" y1="420" x2="470" y2="500" stroke="#000000" stroke-width="1.5"/>

  <!-- Vertical connectors between layers -->
  <line x1="190" y1="340" x2="190" y2="420" stroke="#000000" stroke-width="1.5"/>
  <line x1="330" y1="340" x2="330" y2="420" stroke="#000000" stroke-width="1.5"/>
  <line x1="470" y1="340" x2="470" y2="420" stroke="#000000" stroke-width="1.5"/>

  <!-- === ION POSITIONS ===
       Alternating Na⁺ (large open circle) and Cl⁻ (small filled circle)
       6 positions: 3 rows × 2 layers × 3 cols = 18 ions shown -->
  <!-- Back layer y=260 row, y=340 row -->
  <!-- (190,260) Na⁺ -->
  <circle cx="190" cy="260" r="18" fill="#ffffff" stroke="#000000" stroke-width="3"/>
  <text x="190" cy="264" font-family="Georgia,serif" font-size="9" fill="#000000" text-anchor="middle">Na⁺</text>
  <!-- (330,260) Cl⁻ -->
  <circle cx="330" cy="260" r="24" fill="#000000" fill-opacity="0.15" stroke="#000000" stroke-width="2.5"/>
  <text x="330" y="264" font-family="Georgia,serif" font-size="9" fill="#000000" text-anchor="middle">Cl⁻</text>
  <!-- (470,260) Na⁺ -->
  <circle cx="470" cy="260" r="18" fill="#ffffff" stroke="#000000" stroke-width="3"/>
  <text x="470" y="264" font-family="Georgia,serif" font-size="9" fill="#000000" text-anchor="middle">Na⁺</text>

  <!-- (190,340) Cl⁻ -->
  <circle cx="190" cy="340" r="24" fill="#000000" fill-opacity="0.15" stroke="#000000" stroke-width="2.5"/>
  <text x="190" y="344" font-family="Georgia,serif" font-size="9" fill="#000000" text-anchor="middle">Cl⁻</text>
  <!-- (330,340) Na⁺ -->
  <circle cx="330" cy="340" r="18" fill="#ffffff" stroke="#000000" stroke-width="3"/>
  <text x="330" y="344" font-family="Georgia,serif" font-size="9" fill="#000000" text-anchor="middle">Na⁺</text>
  <!-- (470,340) Cl⁻ -->
  <circle cx="470" cy="340" r="24" fill="#000000" fill-opacity="0.15" stroke="#000000" stroke-width="2.5"/>
  <text x="470" y="344" font-family="Georgia,serif" font-size="9" fill="#000000" text-anchor="middle">Cl⁻</text>

  <!-- Front layer -->
  <!-- (190,420) Cl⁻ -->
  <circle cx="190" cy="420" r="24" fill="#000000" fill-opacity="0.15" stroke="#000000" stroke-width="2.5"/>
  <text x="190" y="424" font-family="Georgia,serif" font-size="9" fill="#000000" text-anchor="middle">Cl⁻</text>
  <!-- (330,420) Na⁺ -->
  <circle cx="330" cy="420" r="18" fill="#ffffff" stroke="#000000" stroke-width="3"/>
  <text x="330" y="424" font-family="Georgia,serif" font-size="9" fill="#000000" text-anchor="middle">Na⁺</text>
  <!-- (470,420) Cl⁻ -->
  <circle cx="470" cy="420" r="24" fill="#000000" fill-opacity="0.15" stroke="#000000" stroke-width="2.5"/>
  <text x="470" y="424" font-family="Georgia,serif" font-size="9" fill="#000000" text-anchor="middle">Cl⁻</text>

  <!-- (190,500) Na⁺ -->
  <circle cx="190" cy="500" r="18" fill="#ffffff" stroke="#000000" stroke-width="3"/>
  <text x="190" y="504" font-family="Georgia,serif" font-size="9" fill="#000000" text-anchor="middle">Na⁺</text>
  <!-- (330,500) Cl⁻ -->
  <circle cx="330" cy="500" r="24" fill="#000000" fill-opacity="0.15" stroke="#000000" stroke-width="2.5"/>
  <text x="330" y="504" font-family="Georgia,serif" font-size="9" fill="#000000" text-anchor="middle">Cl⁻</text>
  <!-- (470,500) Na⁺ -->
  <circle cx="470" cy="500" r="18" fill="#ffffff" stroke="#000000" stroke-width="3"/>
  <text x="470" y="504" font-family="Georgia,serif" font-size="9" fill="#000000" text-anchor="middle">Na⁺</text>

  <!-- Unit cell bracket -->
  <rect x="176" y="246" width="154" height="154" fill="none" stroke="#000000" stroke-width="3" stroke-dasharray="10,5"/>
  <text x="254" y="242" font-family="Georgia,serif" font-size="10" fill="#000000" text-anchor="middle">unit cell</text>

  <!-- Labels panel -->
  <rect x="540" y="260" width="230" height="220" rx="5"
        fill="#ffffff" stroke="#000000" stroke-width="2"/>
  <text x="556" y="282" font-family="Georgia,serif" font-size="12" font-weight="bold" fill="#000000">Crystal Properties:</text>
  <text x="556" y="302" font-family="Georgia,serif" font-size="11" fill="#000000">Structure: FCC</text>
  <text x="556" y="320" font-family="Georgia,serif" font-size="11" fill="#000000">Coordination no.: 6:6</text>
  <text x="556" y="338" font-family="Georgia,serif" font-size="11" fill="#000000">(each ion surrounded</text>
  <text x="556" y="354" font-family="Georgia,serif" font-size="11" fill="#000000">by 6 of opposite type)</text>
  <text x="556" y="374" font-family="Georgia,serif" font-size="11" fill="#000000">Lattice energy:</text>
  <text x="556" y="390" font-family="Georgia,serif" font-size="11" fill="#000000">−787 kJ mol⁻¹</text>
  <text x="556" y="410" font-family="Georgia,serif" font-size="11" fill="#000000">mp: 801°C   bp: 1413°C</text>
  <text x="556" y="430" font-family="Georgia,serif" font-size="11" fill="#000000">Soluble in water (polar)</text>
  <text x="556" y="450" font-family="Georgia,serif" font-size="11" fill="#000000">Conducts when molten/aq</text>
  <text x="556" y="468" font-family="Georgia,serif" font-size="11" fill="#000000">Hard but brittle</text>

  <!-- Key -->
  <rect x="30" y="550" width="240" height="60" rx="4"
        fill="#ffffff" stroke="#000000" stroke-width="2"/>
  <circle cx="60" cy="572" r="14" fill="#ffffff" stroke="#000000" stroke-width="2.5"/>
  <text x="60" y="576" font-family="Georgia,serif" font-size="9" fill="#000000" text-anchor="middle">Na⁺</text>
  <text x="82" y="576" font-family="Georgia,serif" font-size="11" fill="#000000">Na⁺ (smaller)</text>
  <circle cx="60" cy="597" r="18" fill="#000000" fill-opacity="0.15" stroke="#000000" stroke-width="2"/>
  <text x="60" y="601" font-family="Georgia,serif" font-size="9" fill="#000000" text-anchor="middle">Cl⁻</text>
  <text x="82" y="601" font-family="Georgia,serif" font-size="11" fill="#000000">Cl⁻ (larger)</text>

  <!-- Summary -->
  <rect x="30" y="630" width="740" height="68" rx="5"
        fill="#ffffff" stroke="#000000" stroke-width="2" stroke-dasharray="5,3"/>
  <text x="50" y="650" font-family="Georgia,serif" font-size="11" font-weight="bold" fill="#000000">
    Ionic lattice: electrostatic attraction between oppositely charged ions in all directions
  </text>
  <text x="50" y="668" font-family="Georgia,serif" font-size="11" fill="#000000">
    Strong lattice energy → high mp/bp | No discrete molecules (giant ionic structure)
  </text>
  <text x="50" y="686" font-family="Georgia,serif" font-size="10" fill="#000000">
    Ratio Na⁺:Cl⁻ = 1:1 | Each Na⁺ touches 6 Cl⁻ and vice versa (octahedral coordination)
  </text>
</svg>`;

  // ─── 19. METALLIC BONDING DIAGRAM — Electron Sea ─────────────────────────
  static metallicBondingDiagramSvg = `<?xml version="1.0" encoding="utf-8"?>
<svg version="1.1" xmlns="http://www.w3.org/2000/svg"
     width="900px" height="600px" viewBox="0 0 900 600">

  <rect x="0" y="0" width="900" height="600" fill="#ffffff"/>

  <text x="450" y="30" font-family="Georgia,serif" font-size="16" font-weight="bold"
        fill="#000000" text-anchor="middle">Metallic Bonding — Electron Sea Model</text>
  <text x="450" y="50" font-family="Georgia,serif" font-size="11" fill="#000000" text-anchor="middle">
    Delocalised electrons move freely between fixed positive metal cations
  </text>

  <!-- Metal cation lattice (3×3 grid of cations) -->
  <!-- Grid of Na⁺ cations at regular intervals -->
  <!-- Row 1: y=160; Row 2: y=260; Row 3: y=360; Row 4: y=460 -->
  <!-- Cols: x=140,250,360,470,580,690 -->

  <!-- Lattice background shading -->
  <rect x="100" y="130" width="680" height="370" rx="8"
        fill="#ffffff" stroke="#000000" stroke-width="2" stroke-dasharray="6,4"/>

  <!-- Cation positions — 4 rows × 6 cols = 24 cations -->
  <!-- Row 1 y=165 -->
  <circle cx="150" cy="165" r="24" fill="#ffffff" stroke="#000000" stroke-width="2.5"/>
  <text x="150" y="169" font-family="Georgia,serif" font-size="10" fill="#000000" text-anchor="middle">Na⁺</text>
  <circle cx="260" cy="165" r="24" fill="#ffffff" stroke="#000000" stroke-width="2.5"/>
  <text x="260" y="169" font-family="Georgia,serif" font-size="10" fill="#000000" text-anchor="middle">Na⁺</text>
  <circle cx="370" cy="165" r="24" fill="#ffffff" stroke="#000000" stroke-width="2.5"/>
  <text x="370" y="169" font-family="Georgia,serif" font-size="10" fill="#000000" text-anchor="middle">Na⁺</text>
  <circle cx="480" cy="165" r="24" fill="#ffffff" stroke="#000000" stroke-width="2.5"/>
  <text x="480" y="169" font-family="Georgia,serif" font-size="10" fill="#000000" text-anchor="middle">Na⁺</text>
  <circle cx="590" cy="165" r="24" fill="#ffffff" stroke="#000000" stroke-width="2.5"/>
  <text x="590" y="169" font-family="Georgia,serif" font-size="10" fill="#000000" text-anchor="middle">Na⁺</text>
  <circle cx="700" cy="165" r="24" fill="#ffffff" stroke="#000000" stroke-width="2.5"/>
  <text x="700" y="169" font-family="Georgia,serif" font-size="10" fill="#000000" text-anchor="middle">Na⁺</text>

  <!-- Row 2 y=255 -->
  <circle cx="150" cy="255" r="24" fill="#ffffff" stroke="#000000" stroke-width="2.5"/>
  <text x="150" y="259" font-family="Georgia,serif" font-size="10" fill="#000000" text-anchor="middle">Na⁺</text>
  <circle cx="260" cy="255" r="24" fill="#ffffff" stroke="#000000" stroke-width="2.5"/>
  <text x="260" y="259" font-family="Georgia,serif" font-size="10" fill="#000000" text-anchor="middle">Na⁺</text>
  <circle cx="370" cy="255" r="24" fill="#ffffff" stroke="#000000" stroke-width="2.5"/>
  <text x="370" y="259" font-family="Georgia,serif" font-size="10" fill="#000000" text-anchor="middle">Na⁺</text>
  <circle cx="480" cy="255" r="24" fill="#ffffff" stroke="#000000" stroke-width="2.5"/>
  <text x="480" y="259" font-family="Georgia,serif" font-size="10" fill="#000000" text-anchor="middle">Na⁺</text>
  <circle cx="590" cy="255" r="24" fill="#ffffff" stroke="#000000" stroke-width="2.5"/>
  <text x="590" y="259" font-family="Georgia,serif" font-size="10" fill="#000000" text-anchor="middle">Na⁺</text>
  <circle cx="700" cy="255" r="24" fill="#ffffff" stroke="#000000" stroke-width="2.5"/>
  <text x="700" y="259" font-family="Georgia,serif" font-size="10" fill="#000000" text-anchor="middle">Na⁺</text>

  <!-- Row 3 y=345 -->
  <circle cx="150" cy="345" r="24" fill="#ffffff" stroke="#000000" stroke-width="2.5"/>
  <text x="150" y="349" font-family="Georgia,serif" font-size="10" fill="#000000" text-anchor="middle">Na⁺</text>
  <circle cx="260" cy="345" r="24" fill="#ffffff" stroke="#000000" stroke-width="2.5"/>
  <text x="260" y="349" font-family="Georgia,serif" font-size="10" fill="#000000" text-anchor="middle">Na⁺</text>
  <circle cx="370" cy="345" r="24" fill="#ffffff" stroke="#000000" stroke-width="2.5"/>
  <text x="370" y="349" font-family="Georgia,serif" font-size="10" fill="#000000" text-anchor="middle">Na⁺</text>
  <circle cx="480" cy="345" r="24" fill="#ffffff" stroke="#000000" stroke-width="2.5"/>
  <text x="480" y="349" font-family="Georgia,serif" font-size="10" fill="#000000" text-anchor="middle">Na⁺</text>
  <circle cx="590" cy="345" r="24" fill="#ffffff" stroke="#000000" stroke-width="2.5"/>
  <text x="590" y="349" font-family="Georgia,serif" font-size="10" fill="#000000" text-anchor="middle">Na⁺</text>
  <circle cx="700" cy="345" r="24" fill="#ffffff" stroke="#000000" stroke-width="2.5"/>
  <text x="700" y="349" font-family="Georgia,serif" font-size="10" fill="#000000" text-anchor="middle">Na⁺</text>

  <!-- Row 4 y=435 -->
  <circle cx="150" cy="435" r="24" fill="#ffffff" stroke="#000000" stroke-width="2.5"/>
  <text x="150" y="439" font-family="Georgia,serif" font-size="10" fill="#000000" text-anchor="middle">Na⁺</text>
  <circle cx="260" cy="435" r="24" fill="#ffffff" stroke="#000000" stroke-width="2.5"/>
  <text x="260" y="439" font-family="Georgia,serif" font-size="10" fill="#000000" text-anchor="middle">Na⁺</text>
  <circle cx="370" cy="435" r="24" fill="#ffffff" stroke="#000000" stroke-width="2.5"/>
  <text x="370" y="439" font-family="Georgia,serif" font-size="10" fill="#000000" text-anchor="middle">Na⁺</text>
  <circle cx="480" cy="435" r="24" fill="#ffffff" stroke="#000000" stroke-width="2.5"/>
  <text x="480" y="439" font-family="Georgia,serif" font-size="10" fill="#000000" text-anchor="middle">Na⁺</text>
  <circle cx="590" cy="435" r="24" fill="#ffffff" stroke="#000000" stroke-width="2.5"/>
  <text x="590" y="439" font-family="Georgia,serif" font-size="10" fill="#000000" text-anchor="middle">Na⁺</text>
  <circle cx="700" cy="435" r="24" fill="#ffffff" stroke="#000000" stroke-width="2.5"/>
  <text x="700" y="439" font-family="Georgia,serif" font-size="10" fill="#000000" text-anchor="middle">Na⁺</text>

  <!-- Delocalised electrons (small filled circles scattered between cations) -->
  <circle cx="205" cy="210" r="5" fill="#000000"/>
  <circle cx="315" cy="195" r="5" fill="#000000"/>
  <circle cx="425" cy="218" r="5" fill="#000000"/>
  <circle cx="535" cy="200" r="5" fill="#000000"/>
  <circle cx="645" cy="210" r="5" fill="#000000"/>
  <circle cx="205" cy="300" r="5" fill="#000000"/>
  <circle cx="315" cy="285" r="5" fill="#000000"/>
  <circle cx="425" cy="308" r="5" fill="#000000"/>
  <circle cx="535" cy="292" r="5" fill="#000000"/>
  <circle cx="645" cy="302" r="5" fill="#000000"/>
  <circle cx="205" cy="390" r="5" fill="#000000"/>
  <circle cx="315" cy="375" r="5" fill="#000000"/>
  <circle cx="425" cy="398" r="5" fill="#000000"/>
  <circle cx="535" cy="382" r="5" fill="#000000"/>
  <circle cx="645" cy="392" r="5" fill="#000000"/>
  <!-- Motion arrows on some electrons -->
  <line x1="205" y1="210" x2="230" y2="200" stroke="#000000" stroke-width="1.5"/>
  <polygon points="226,197 234,197 230,205" fill="#000000"/>
  <line x1="425" y1="308" x2="400" y2="296" stroke="#000000" stroke-width="1.5"/>
  <polygon points="404,293 396,297 404,302" fill="#000000"/>
  <line x1="645" y1="302" x2="670" y2="310" stroke="#000000" stroke-width="1.5"/>
  <polygon points="666,313 674,309 668,304" fill="#000000"/>

  <!-- Label: electron sea -->
  <text x="425" y="477" font-family="Georgia,serif" font-size="12" font-weight="bold"
        fill="#000000" text-anchor="middle">● = delocalised e⁻ (electron sea)</text>

  <!-- Properties box -->
  <rect x="30" y="510" width="840" height="78" rx="5"
        fill="#ffffff" stroke="#000000" stroke-width="2" stroke-dasharray="5,3"/>
  <text x="50" y="530" font-family="Georgia,serif" font-size="12" font-weight="bold" fill="#000000">
    Properties explained by electron sea model:
  </text>
  <text x="50" y="550" font-family="Georgia,serif" font-size="11" fill="#000000">
    Electrical conductivity: delocalised e⁻ carry charge freely | Thermal conductivity: e⁻ transfer kinetic energy
  </text>
  <text x="50" y="568" font-family="Georgia,serif" font-size="11" fill="#000000">
    Malleability/ductility: cation layers slide — e⁻ sea reforms bonds | Metallic lustre: e⁻ reflect light
  </text>
  <text x="50" y="584" font-family="Georgia,serif" font-size="10" fill="#000000">
    Strength ∝ charge density of cation and number of delocalised e⁻ per atom (e.g. Al³⁺ stronger than Na⁺)
  </text>
</svg>`;


// ─── 5. BALANCED CHEMICAL EQUATION DIAGRAM ───────────────────────────────────
  static balancedEquationDiagramSvg = `<?xml version="1.0" encoding="utf-8"?>
<svg version="1.1" xmlns="http://www.w3.org/2000/svg"
     width="800px" height="500px" viewBox="0 0 800 500">

  <!-- Title -->
  <text x="400" y="30" font-family="Georgia,serif" font-size="15" font-weight="bold"
        fill="#000" text-anchor="middle">Balanced Chemical Equation — Water Formation</text>
  <text x="400" y="50" font-family="Georgia,serif" font-size="11" fill="#333" text-anchor="middle">
    2H₂ + O₂ → 2H₂O  |  Atoms conserved on both sides</text>

  <!-- ══ REACTANTS SIDE ══ -->
  <!-- Box: 2H₂ -->
  <rect x="30" y="80" width="220" height="300" rx="6" fill="#fff" stroke="#000" stroke-width="2.5"/>
  <text x="140" y="108" font-family="Georgia,serif" font-size="13" font-weight="bold"
        fill="#000" text-anchor="middle">REACTANTS</text>
  <line x1="30" y1="115" x2="250" y2="115" stroke="#000" stroke-width="1.5"/>

  <!-- Molecule 1: H₂ (×2) -->
  <text x="140" y="145" font-family="Georgia,serif" font-size="12" font-weight="bold"
        fill="#000" text-anchor="middle">2 × H₂ (hydrogen gas)</text>
  <!-- H-H bond diagram ×2 -->
  <!-- Molecule 1 -->
  <circle cx="90" cy="175" r="14" fill="#fff" stroke="#000" stroke-width="2"/>
  <text x="90" y="180" font-family="Georgia,serif" font-size="11" font-weight="bold"
        fill="#000" text-anchor="middle">H</text>
  <line x1="104" y1="175" x2="122" y2="175" stroke="#000" stroke-width="2.5"/>
  <circle cx="136" cy="175" r="14" fill="#fff" stroke="#000" stroke-width="2"/>
  <text x="136" y="180" font-family="Georgia,serif" font-size="11" font-weight="bold"
        fill="#000" text-anchor="middle">H</text>
  <!-- Molecule 2 -->
  <circle cx="90" cy="215" r="14" fill="#fff" stroke="#000" stroke-width="2"/>
  <text x="90" y="220" font-family="Georgia,serif" font-size="11" font-weight="bold"
        fill="#000" text-anchor="middle">H</text>
  <line x1="104" y1="215" x2="122" y2="215" stroke="#000" stroke-width="2.5"/>
  <circle cx="136" cy="215" r="14" fill="#fff" stroke="#000" stroke-width="2"/>
  <text x="136" y="220" font-family="Georgia,serif" font-size="11" font-weight="bold"
        fill="#000" text-anchor="middle">H</text>

  <!-- Molecule 2: O₂ (×1) -->
  <text x="140" y="258" font-family="Georgia,serif" font-size="12" font-weight="bold"
        fill="#000" text-anchor="middle">1 × O₂ (oxygen gas)</text>
  <circle cx="100" cy="285" r="16" fill="#fff" stroke="#000" stroke-width="2.5"/>
  <text x="100" y="290" font-family="Georgia,serif" font-size="11" font-weight="bold"
        fill="#000" text-anchor="middle">O</text>
  <line x1="116" y1="283" x2="132" y2="283" stroke="#000" stroke-width="2.5"/>
  <line x1="116" y1="289" x2="132" y2="289" stroke="#000" stroke-width="2.5"/>
  <circle cx="148" cy="285" r="16" fill="#fff" stroke="#000" stroke-width="2.5"/>
  <text x="148" y="290" font-family="Georgia,serif" font-size="11" font-weight="bold"
        fill="#000" text-anchor="middle">O</text>

  <!-- Atom count box -->
  <rect x="40" y="318" width="190" height="48" rx="4" fill="#f5f5f5" stroke="#000" stroke-width="1.5"/>
  <text x="135" y="336" font-family="Georgia,serif" font-size="10" font-weight="bold"
        fill="#000" text-anchor="middle">Atom count (reactants):</text>
  <text x="135" y="352" font-family="Georgia,serif" font-size="10" fill="#000" text-anchor="middle">H: 4   O: 2</text>

  <!-- ══ ARROW ══ -->
  <line x1="270" y1="230" x2="340" y2="230" stroke="#000" stroke-width="3"/>
  <polygon points="338,223 355,230 338,237" fill="#000"/>
  <text x="312" y="222" font-family="Georgia,serif" font-size="11" fill="#000" text-anchor="middle">reacts</text>
  <text x="312" y="248" font-family="Georgia,serif" font-size="10" fill="#333" text-anchor="middle">→</text>

  <!-- ══ PRODUCTS SIDE ══ -->
  <rect x="360" y="80" width="220" height="300" rx="6" fill="#fff" stroke="#000" stroke-width="2.5"/>
  <text x="470" y="108" font-family="Georgia,serif" font-size="13" font-weight="bold"
        fill="#000" text-anchor="middle">PRODUCTS</text>
  <line x1="360" y1="115" x2="580" y2="115" stroke="#000" stroke-width="1.5"/>

  <text x="470" y="145" font-family="Georgia,serif" font-size="12" font-weight="bold"
        fill="#000" text-anchor="middle">2 × H₂O (water)</text>

  <!-- Water molecule 1 -->
  <circle cx="440" cy="180" r="16" fill="#fff" stroke="#000" stroke-width="2.5"/>
  <text x="440" y="185" font-family="Georgia,serif" font-size="11" font-weight="bold"
        fill="#000" text-anchor="middle">O</text>
  <line x1="424" y1="190" x2="408" y2="205" stroke="#000" stroke-width="2"/>
  <circle cx="400" cy="210" r="13" fill="#fff" stroke="#000" stroke-width="2"/>
  <text x="400" y="215" font-family="Georgia,serif" font-size="10" font-weight="bold"
        fill="#000" text-anchor="middle">H</text>
  <line x1="456" y1="190" x2="470" y2="205" stroke="#000" stroke-width="2"/>
  <circle cx="478" cy="210" r="13" fill="#fff" stroke="#000" stroke-width="2"/>
  <text x="478" y="215" font-family="Georgia,serif" font-size="10" font-weight="bold"
        fill="#000" text-anchor="middle">H</text>

  <!-- Water molecule 2 -->
  <circle cx="440" cy="260" r="16" fill="#fff" stroke="#000" stroke-width="2.5"/>
  <text x="440" y="265" font-family="Georgia,serif" font-size="11" font-weight="bold"
        fill="#000" text-anchor="middle">O</text>
  <line x1="424" y1="270" x2="408" y2="285" stroke="#000" stroke-width="2"/>
  <circle cx="400" cy="290" r="13" fill="#fff" stroke="#000" stroke-width="2"/>
  <text x="400" y="295" font-family="Georgia,serif" font-size="10" font-weight="bold"
        fill="#000" text-anchor="middle">H</text>
  <line x1="456" y1="270" x2="470" y2="285" stroke="#000" stroke-width="2"/>
  <circle cx="478" cy="290" r="13" fill="#fff" stroke="#000" stroke-width="2"/>
  <text x="478" y="295" font-family="Georgia,serif" font-size="10" font-weight="bold"
        fill="#000" text-anchor="middle">H</text>

  <!-- Atom count box -->
  <rect x="370" y="318" width="190" height="48" rx="4" fill="#f5f5f5" stroke="#000" stroke-width="1.5"/>
  <text x="465" y="336" font-family="Georgia,serif" font-size="10" font-weight="bold"
        fill="#000" text-anchor="middle">Atom count (products):</text>
  <text x="465" y="352" font-family="Georgia,serif" font-size="10" fill="#000" text-anchor="middle">H: 4   O: 2</text>

  <!-- ══ CONSERVATION NOTE ══ -->
  <rect x="30" y="398" width="740" height="48" rx="5" fill="#fff" stroke="#000" stroke-width="2"
        stroke-dasharray="6,3"/>
  <text x="400" y="416" font-family="Georgia,serif" font-size="11" font-weight="bold"
        fill="#000" text-anchor="middle">Law of Conservation of Mass — Atoms are neither created nor destroyed</text>
  <text x="400" y="434" font-family="Georgia,serif" font-size="10" fill="#333" text-anchor="middle">
    Coefficients (2, 1, 2) balance equation: reactant atoms = product atoms on each element</text>

  <!-- ══ COEFFICIENT ANNOTATIONS ══ -->
  <text x="55" y="78" font-family="Georgia,serif" font-size="20" font-weight="bold"
        fill="#000">2</text>
  <text x="80" y="78" font-family="Georgia,serif" font-size="14" fill="#000">H₂</text>
  <text x="130" y="78" font-family="Georgia,serif" font-size="14" fill="#000">+</text>
  <text x="155" y="78" font-family="Georgia,serif" font-size="20" font-weight="bold"
        fill="#000">1</text>
  <text x="178" y="78" font-family="Georgia,serif" font-size="14" fill="#000">O₂</text>
  <text x="230" y="78" font-family="Georgia,serif" font-size="14" fill="#000">→</text>
  <text x="258" y="78" font-family="Georgia,serif" font-size="20" font-weight="bold"
        fill="#000">2</text>
  <text x="282" y="78" font-family="Georgia,serif" font-size="14" fill="#000">H₂O</text>

</svg>`;

// ─── 6. REACTION TYPES DIAGRAM ────────────────────────────────────────────────
  static reactionTypesDiagramSvg = `<?xml version="1.0" encoding="utf-8"?>
<svg version="1.1" xmlns="http://www.w3.org/2000/svg"
     width="800px" height="800px" viewBox="0 0 800 800">

  <!-- Title -->
  <text x="400" y="28" font-family="Georgia,serif" font-size="15" font-weight="bold"
        fill="#000" text-anchor="middle">Types of Chemical Reactions</text>
  <text x="400" y="46" font-family="Georgia,serif" font-size="10" fill="#333" text-anchor="middle">
    Four fundamental reaction patterns with examples</text>

  <!-- ══ 1. SYNTHESIS (top-left) A + B → AB ══ -->
  <rect x="20" y="60" width="370" height="165" rx="6" fill="#fff" stroke="#000" stroke-width="2.5"/>
  <text x="205" y="84" font-family="Georgia,serif" font-size="13" font-weight="bold"
        fill="#000" text-anchor="middle">1. SYNTHESIS (Combination)</text>
  <text x="205" y="100" font-family="Georgia,serif" font-size="11" fill="#333" text-anchor="middle">
    A + B → AB</text>
  <!-- Diagram -->
  <rect x="40" y="110" width="50" height="30" rx="4" fill="#fff" stroke="#000" stroke-width="2"/>
  <text x="65" y="130" font-family="Georgia,serif" font-size="11" font-weight="bold"
        fill="#000" text-anchor="middle">A</text>
  <text x="100" y="130" font-family="Georgia,serif" font-size="14" fill="#000">+</text>
  <rect x="115" y="110" width="50" height="30" rx="4" fill="#fff" stroke="#000" stroke-width="2"/>
  <text x="140" y="130" font-family="Georgia,serif" font-size="11" font-weight="bold"
        fill="#000" text-anchor="middle">B</text>
  <line x1="175" y1="125" x2="215" y2="125" stroke="#000" stroke-width="2.5"/>
  <polygon points="212,119 228,125 212,131" fill="#000"/>
  <rect x="230" y="110" width="60" height="30" rx="4" fill="#f5f5f5" stroke="#000" stroke-width="2"/>
  <text x="260" y="130" font-family="Georgia,serif" font-size="11" font-weight="bold"
        fill="#000" text-anchor="middle">AB</text>
  <text x="205" y="160" font-family="Georgia,serif" font-size="10" fill="#333" text-anchor="middle">
    e.g. 2Na + Cl₂ → 2NaCl</text>
  <text x="205" y="175" font-family="Georgia,serif" font-size="10" fill="#333" text-anchor="middle">
    e.g. N₂ + 3H₂ → 2NH₃  (Haber process)</text>
  <text x="205" y="192" font-family="Georgia,serif" font-size="9" fill="#555" text-anchor="middle">
    Two or more substances combine to form one product</text>
  <text x="205" y="208" font-family="Georgia,serif" font-size="9" fill="#555" text-anchor="middle">
    Smaller → larger; often exothermic</text>

  <!-- ══ 2. DECOMPOSITION (top-right) AB → A + B ══ -->
  <rect x="410" y="60" width="370" height="165" rx="6" fill="#fff" stroke="#000" stroke-width="2.5"/>
  <text x="595" y="84" font-family="Georgia,serif" font-size="13" font-weight="bold"
        fill="#000" text-anchor="middle">2. DECOMPOSITION</text>
  <text x="595" y="100" font-family="Georgia,serif" font-size="11" fill="#333" text-anchor="middle">
    AB → A + B</text>
  <!-- Diagram -->
  <rect x="430" y="110" width="60" height="30" rx="4" fill="#f5f5f5" stroke="#000" stroke-width="2"/>
  <text x="460" y="130" font-family="Georgia,serif" font-size="11" font-weight="bold"
        fill="#000" text-anchor="middle">AB</text>
  <line x1="492" y1="125" x2="530" y2="125" stroke="#000" stroke-width="2.5"/>
  <polygon points="528,119 544,125 528,131" fill="#000"/>
  <rect x="546" y="110" width="50" height="30" rx="4" fill="#fff" stroke="#000" stroke-width="2"/>
  <text x="571" y="130" font-family="Georgia,serif" font-size="11" font-weight="bold"
        fill="#000" text-anchor="middle">A</text>
  <text x="607" y="130" font-family="Georgia,serif" font-size="14" fill="#000">+</text>
  <rect x="620" y="110" width="50" height="30" rx="4" fill="#fff" stroke="#000" stroke-width="2"/>
  <text x="645" y="130" font-family="Georgia,serif" font-size="11" font-weight="bold"
        fill="#000" text-anchor="middle">B</text>
  <text x="595" y="160" font-family="Georgia,serif" font-size="10" fill="#333" text-anchor="middle">
    e.g. 2H₂O₂ → 2H₂O + O₂</text>
  <text x="595" y="175" font-family="Georgia,serif" font-size="10" fill="#333" text-anchor="middle">
    e.g. CaCO₃ → CaO + CO₂  (thermal decomp.)</text>
  <text x="595" y="192" font-family="Georgia,serif" font-size="9" fill="#555" text-anchor="middle">
    One compound breaks into two or more simpler substances</text>
  <text x="595" y="208" font-family="Georgia,serif" font-size="9" fill="#555" text-anchor="middle">
    Often requires heat, light or electricity</text>

  <!-- ══ 3. SINGLE DISPLACEMENT (bottom-left) A + BC → AC + B ══ -->
  <rect x="20" y="248" width="370" height="175" rx="6" fill="#fff" stroke="#000" stroke-width="2.5"/>
  <text x="205" y="272" font-family="Georgia,serif" font-size="13" font-weight="bold"
        fill="#000" text-anchor="middle">3. SINGLE DISPLACEMENT</text>
  <text x="205" y="288" font-family="Georgia,serif" font-size="11" fill="#333" text-anchor="middle">
    A + BC → AC + B</text>
  <!-- Diagram -->
  <rect x="35" y="298" width="30" height="28" rx="3" fill="#fff" stroke="#000" stroke-width="2"/>
  <text x="50" y="316" font-family="Georgia,serif" font-size="10" font-weight="bold"
        fill="#000" text-anchor="middle">A</text>
  <text x="75" y="317" font-family="Georgia,serif" font-size="12" fill="#000">+</text>
  <rect x="88" y="298" width="55" height="28" rx="3" fill="#f5f5f5" stroke="#000" stroke-width="2"/>
  <text x="115" y="316" font-family="Georgia,serif" font-size="10" font-weight="bold"
        fill="#000" text-anchor="middle">BC</text>
  <line x1="150" y1="312" x2="185" y2="312" stroke="#000" stroke-width="2.5"/>
  <polygon points="183,306 199,312 183,318" fill="#000"/>
  <rect x="200" y="298" width="55" height="28" rx="3" fill="#f5f5f5" stroke="#000" stroke-width="2"/>
  <text x="227" y="316" font-family="Georgia,serif" font-size="10" font-weight="bold"
        fill="#000" text-anchor="middle">AC</text>
  <text x="264" y="317" font-family="Georgia,serif" font-size="12" fill="#000">+</text>
  <rect x="276" y="298" width="30" height="28" rx="3" fill="#fff" stroke="#000" stroke-width="2"/>
  <text x="291" y="316" font-family="Georgia,serif" font-size="10" font-weight="bold"
        fill="#000" text-anchor="middle">B</text>
  <!-- Curved replacement arrow -->
  <path d="M50,328 Q113,355 227,328" fill="none" stroke="#000" stroke-width="1.5"
        stroke-dasharray="4,3"/>
  <text x="140" y="355" font-family="Georgia,serif" font-size="9" fill="#333" text-anchor="middle">
    A displaces B</text>
  <text x="205" y="378" font-family="Georgia,serif" font-size="10" fill="#333" text-anchor="middle">
    e.g. Zn + CuSO₄ → ZnSO₄ + Cu</text>
  <text x="205" y="393" font-family="Georgia,serif" font-size="10" fill="#333" text-anchor="middle">
    e.g. Fe + 2HCl → FeCl₂ + H₂↑</text>
  <text x="205" y="408" font-family="Georgia,serif" font-size="9" fill="#555" text-anchor="middle">
    More reactive element displaces less reactive one</text>

  <!-- ══ 4. DOUBLE DISPLACEMENT (bottom-right) AB + CD → AD + CB ══ -->
  <rect x="410" y="248" width="370" height="175" rx="6" fill="#fff" stroke="#000" stroke-width="2.5"/>
  <text x="595" y="272" font-family="Georgia,serif" font-size="13" font-weight="bold"
        fill="#000" text-anchor="middle">4. DOUBLE DISPLACEMENT</text>
  <text x="595" y="288" font-family="Georgia,serif" font-size="11" fill="#333" text-anchor="middle">
    AB + CD → AD + CB</text>
  <!-- Diagram -->
  <rect x="425" y="298" width="55" height="28" rx="3" fill="#f5f5f5" stroke="#000" stroke-width="2"/>
  <text x="452" y="316" font-family="Georgia,serif" font-size="10" font-weight="bold"
        fill="#000" text-anchor="middle">AB</text>
  <text x="490" y="317" font-family="Georgia,serif" font-size="12" fill="#000">+</text>
  <rect x="503" y="298" width="55" height="28" rx="3" fill="#f5f5f5" stroke="#000" stroke-width="2"/>
  <text x="530" y="316" font-family="Georgia,serif" font-size="10" font-weight="bold"
        fill="#000" text-anchor="middle">CD</text>
  <line x1="562" y1="312" x2="596" y2="312" stroke="#000" stroke-width="2.5"/>
  <polygon points="594,306 610,312 594,318" fill="#000"/>
  <rect x="612" y="298" width="55" height="28" rx="3" fill="#fff" stroke="#000" stroke-width="2"/>
  <text x="639" y="316" font-family="Georgia,serif" font-size="10" font-weight="bold"
        fill="#000" text-anchor="middle">AD</text>
  <text x="677" y="317" font-family="Georgia,serif" font-size="12" fill="#000">+</text>
  <rect x="688" y="298" width="55" height="28" rx="3" fill="#fff" stroke="#000" stroke-width="2"/>
  <text x="715" y="316" font-family="Georgia,serif" font-size="10" font-weight="bold"
        fill="#000" text-anchor="middle">CB</text>
  <!-- Cross arrows -->
  <path d="M452,327 Q595,358 639,327" fill="none" stroke="#000" stroke-width="1.5"
        stroke-dasharray="4,3"/>
  <path d="M530,327 Q595,362 715,327" fill="none" stroke="#333" stroke-width="1"
        stroke-dasharray="3,3"/>
  <text x="595" y="362" font-family="Georgia,serif" font-size="9" fill="#333" text-anchor="middle">
    Cations/anions swap partners</text>
  <text x="595" y="382" font-family="Georgia,serif" font-size="10" fill="#333" text-anchor="middle">
    e.g. AgNO₃ + NaCl → AgCl↓ + NaNO₃</text>
  <text x="595" y="397" font-family="Georgia,serif" font-size="10" fill="#333" text-anchor="middle">
    e.g. HCl + NaOH → NaCl + H₂O</text>
  <text x="595" y="412" font-family="Georgia,serif" font-size="9" fill="#555" text-anchor="middle">
    Precipitate, gas or water usually formed</text>

  <!-- ══ COMBUSTION (special fifth type) ══ -->
  <rect x="20" y="444" width="760" height="80" rx="6" fill="#fff" stroke="#000" stroke-width="2.5"/>
  <text x="400" y="466" font-family="Georgia,serif" font-size="13" font-weight="bold"
        fill="#000" text-anchor="middle">5. COMBUSTION (special type of synthesis/oxidation)</text>
  <text x="400" y="484" font-family="Georgia,serif" font-size="11" fill="#333" text-anchor="middle">
    Fuel + O₂ → CO₂ + H₂O  (+energy)      e.g. CH₄ + 2O₂ → CO₂ + 2H₂O</text>
  <text x="400" y="500" font-family="Georgia,serif" font-size="10" fill="#555" text-anchor="middle">
    Rapid oxidation of a fuel releasing heat and light | Complete combustion requires excess O₂</text>
  <text x="400" y="516" font-family="Georgia,serif" font-size="10" fill="#555" text-anchor="middle">
    Incomplete: fuel + limited O₂ → CO + C(soot) + H₂O</text>

  <!-- ══ SUMMARY TABLE ══ -->
  <rect x="20" y="540" width="760" height="228" rx="6" fill="#fff" stroke="#000" stroke-width="2.5"/>
  <text x="400" y="562" font-family="Georgia,serif" font-size="12" font-weight="bold"
        fill="#000" text-anchor="middle">Summary: How to Identify Reaction Type</text>
  <line x1="20" y1="568" x2="780" y2="568" stroke="#000" stroke-width="1.5"/>
  <!-- Table headers -->
  <text x="110" y="586" font-family="Georgia,serif" font-size="11" font-weight="bold"
        fill="#000" text-anchor="middle">Type</text>
  <text x="280" y="586" font-family="Georgia,serif" font-size="11" font-weight="bold"
        fill="#000" text-anchor="middle">Pattern</text>
  <text x="480" y="586" font-family="Georgia,serif" font-size="11" font-weight="bold"
        fill="#000" text-anchor="middle">Key Clue</text>
  <text x="660" y="586" font-family="Georgia,serif" font-size="11" font-weight="bold"
        fill="#000" text-anchor="middle">Energy</text>
  <line x1="20" y1="592" x2="780" y2="592" stroke="#000" stroke-width="1"/>
  <!-- Rows -->
  <text x="110" y="610" font-family="Georgia,serif" font-size="10" fill="#000" text-anchor="middle">Synthesis</text>
  <text x="280" y="610" font-family="Georgia,serif" font-size="10" fill="#000" text-anchor="middle">A + B → AB</text>
  <text x="480" y="610" font-family="Georgia,serif" font-size="10" fill="#000" text-anchor="middle">Many reactants, one product</text>
  <text x="660" y="610" font-family="Georgia,serif" font-size="10" fill="#000" text-anchor="middle">Usually exothermic</text>

  <text x="110" y="632" font-family="Georgia,serif" font-size="10" fill="#000" text-anchor="middle">Decomposition</text>
  <text x="280" y="632" font-family="Georgia,serif" font-size="10" fill="#000" text-anchor="middle">AB → A + B</text>
  <text x="480" y="632" font-family="Georgia,serif" font-size="10" fill="#000" text-anchor="middle">One reactant, many products</text>
  <text x="660" y="632" font-family="Georgia,serif" font-size="10" fill="#000" text-anchor="middle">Usually endothermic</text>

  <text x="110" y="654" font-family="Georgia,serif" font-size="10" fill="#000" text-anchor="middle">Single Disp.</text>
  <text x="280" y="654" font-family="Georgia,serif" font-size="10" fill="#000" text-anchor="middle">A + BC → AC + B</text>
  <text x="480" y="654" font-family="Georgia,serif" font-size="10" fill="#000" text-anchor="middle">Element + compound → new pairs</text>
  <text x="660" y="654" font-family="Georgia,serif" font-size="10" fill="#000" text-anchor="middle">Varies</text>

  <text x="110" y="676" font-family="Georgia,serif" font-size="10" fill="#000" text-anchor="middle">Double Disp.</text>
  <text x="280" y="676" font-family="Georgia,serif" font-size="10" fill="#000" text-anchor="middle">AB + CD → AD + CB</text>
  <text x="480" y="676" font-family="Georgia,serif" font-size="10" fill="#000" text-anchor="middle">Two compounds swap partners</text>
  <text x="660" y="676" font-family="Georgia,serif" font-size="10" fill="#000" text-anchor="middle">Varies</text>

  <text x="110" y="698" font-family="Georgia,serif" font-size="10" fill="#000" text-anchor="middle">Combustion</text>
  <text x="280" y="698" font-family="Georgia,serif" font-size="10" fill="#000" text-anchor="middle">Fuel + O₂ → CO₂ + H₂O</text>
  <text x="480" y="698" font-family="Georgia,serif" font-size="10" fill="#000" text-anchor="middle">O₂ always a reactant</text>
  <text x="660" y="698" font-family="Georgia,serif" font-size="10" fill="#000" text-anchor="middle">Always exothermic</text>

  <line x1="20" y1="706" x2="780" y2="706" stroke="#000" stroke-width="1"/>
  <text x="400" y="724" font-family="Georgia,serif" font-size="9" fill="#555" text-anchor="middle">
    Redox reactions cut across all types — track oxidation number changes to identify oxidation/reduction</text>
  <text x="400" y="742" font-family="Georgia,serif" font-size="9" fill="#555" text-anchor="middle">
    Neutralisation is a special double displacement: H⁺ + OH⁻ → H₂O</text>
  <text x="400" y="760" font-family="Georgia,serif" font-size="9" fill="#555" text-anchor="middle">
    Precipitation is a special double displacement: insoluble ionic product forms</text>

</svg>`;

// ─── 7. OXIDATION NUMBERS DIAGRAM ────────────────────────────────────────────
  static oxidationNumbersDiagramSvg = `<?xml version="1.0" encoding="utf-8"?>
<svg version="1.1" xmlns="http://www.w3.org/2000/svg"
     width="800px" height="700px" viewBox="0 0 800 700">

  <!-- Title -->
  <text x="400" y="28" font-family="Georgia,serif" font-size="15" font-weight="bold"
        fill="#000" text-anchor="middle">Oxidation Numbers — Assignment Rules &amp; Examples</text>
  <text x="400" y="46" font-family="Georgia,serif" font-size="10" fill="#333" text-anchor="middle">
    Worked example: H₂SO₄ (sulfuric acid)</text>

  <!-- ══ RULES BOX ══ -->
  <rect x="20" y="58" width="360" height="310" rx="6" fill="#fff" stroke="#000" stroke-width="2.5"/>
  <text x="200" y="80" font-family="Georgia,serif" font-size="13" font-weight="bold"
        fill="#000" text-anchor="middle">Rules for Oxidation Numbers</text>
  <line x1="20" y1="86" x2="380" y2="86" stroke="#000" stroke-width="1.5"/>

  <text x="35" y="106" font-family="Georgia,serif" font-size="11" font-weight="bold" fill="#000">Rule 1:</text>
  <text x="95" y="106" font-family="Georgia,serif" font-size="11" fill="#333">Pure element = 0</text>
  <text x="95" y="120" font-family="Georgia,serif" font-size="10" fill="#555">e.g. Na(s)=0, O₂=0, Fe(s)=0</text>

  <text x="35" y="142" font-family="Georgia,serif" font-size="11" font-weight="bold" fill="#000">Rule 2:</text>
  <text x="95" y="142" font-family="Georgia,serif" font-size="11" fill="#333">Monatomic ion = charge</text>
  <text x="95" y="156" font-family="Georgia,serif" font-size="10" fill="#555">e.g. Na⁺=+1, Fe³⁺=+3, Cl⁻=−1</text>

  <text x="35" y="178" font-family="Georgia,serif" font-size="11" font-weight="bold" fill="#000">Rule 3:</text>
  <text x="95" y="178" font-family="Georgia,serif" font-size="11" fill="#333">H = +1 (usually)</text>
  <text x="95" y="192" font-family="Georgia,serif" font-size="10" fill="#555">Exception: metal hydrides H=−1 (e.g. NaH)</text>

  <text x="35" y="214" font-family="Georgia,serif" font-size="11" font-weight="bold" fill="#000">Rule 4:</text>
  <text x="95" y="214" font-family="Georgia,serif" font-size="11" fill="#333">O = −2 (usually)</text>
  <text x="95" y="228" font-family="Georgia,serif" font-size="10" fill="#555">Exceptions: peroxides O=−1; OF₂ O=+2</text>

  <text x="35" y="250" font-family="Georgia,serif" font-size="11" font-weight="bold" fill="#000">Rule 5:</text>
  <text x="95" y="250" font-family="Georgia,serif" font-size="11" fill="#333">F = −1 always</text>
  <text x="95" y="264" font-family="Georgia,serif" font-size="10" fill="#555">(most electronegative element)</text>

  <text x="35" y="286" font-family="Georgia,serif" font-size="11" font-weight="bold" fill="#000">Rule 6:</text>
  <text x="95" y="286" font-family="Georgia,serif" font-size="11" fill="#333">Group I metals = +1 always</text>
  <text x="95" y="300" font-family="Georgia,serif" font-size="10" fill="#555">Group II metals = +2 always</text>

  <text x="35" y="322" font-family="Georgia,serif" font-size="11" font-weight="bold" fill="#000">Rule 7:</text>
  <text x="95" y="322" font-family="Georgia,serif" font-size="11" fill="#333">Sum of ox. nos. = overall charge</text>
  <text x="95" y="336" font-family="Georgia,serif" font-size="10" fill="#555">Neutral compound: sum = 0</text>
  <text x="95" y="350" font-family="Georgia,serif" font-size="10" fill="#555">Ion: sum = ion charge</text>

  <!-- ══ WORKED EXAMPLE: H₂SO₄ ══ -->
  <rect x="400" y="58" width="380" height="200" rx="6" fill="#fff" stroke="#000" stroke-width="2.5"/>
  <text x="590" y="80" font-family="Georgia,serif" font-size="13" font-weight="bold"
        fill="#000" text-anchor="middle">Worked Example: H₂SO₄</text>
  <line x1="400" y1="86" x2="780" y2="86" stroke="#000" stroke-width="1.5"/>

  <!-- H₂SO₄ large formula display -->
  <text x="590" y="128" font-family="Georgia,serif" font-size="36" font-weight="bold"
        fill="#000" text-anchor="middle">H₂SO₄</text>

  <!-- Oxidation number labels above formula -->
  <!-- H: +1 -->
  <text x="508" y="108" font-family="Georgia,serif" font-size="13" font-weight="bold"
        fill="#000" text-anchor="middle">+1</text>
  <line x1="508" y1="110" x2="508" y2="118" stroke="#000" stroke-width="1.5"/>
  <!-- S: +6 -->
  <text x="590" y="108" font-family="Georgia,serif" font-size="13" font-weight="bold"
        fill="#000" text-anchor="middle">+6</text>
  <line x1="590" y1="110" x2="590" y2="118" stroke="#000" stroke-width="1.5"/>
  <!-- O: −2 -->
  <text x="648" y="108" font-family="Georgia,serif" font-size="13" font-weight="bold"
        fill="#000" text-anchor="middle">−2</text>
  <line x1="648" y1="110" x2="648" y2="118" stroke="#000" stroke-width="1.5"/>

  <!-- Calculation steps -->
  <text x="420" y="158" font-family="Georgia,serif" font-size="11" fill="#000">Step 1: H = +1 (Rule 3) | O = −2 (Rule 4)</text>
  <text x="420" y="176" font-family="Georgia,serif" font-size="11" fill="#000">Step 2: Let S = x</text>
  <text x="420" y="194" font-family="Georgia,serif" font-size="11" fill="#000">Step 3: 2(+1) + x + 4(−2) = 0</text>
  <text x="420" y="212" font-family="Georgia,serif" font-size="11" fill="#000">         2 + x − 8 = 0  →  x = +6</text>
  <text x="420" y="230" font-family="Georgia,serif" font-size="11" font-weight="bold" fill="#000">
    ∴ S oxidation number = +6</text>

  <!-- ══ MORE EXAMPLES TABLE ══ -->
  <rect x="20" y="388" width="760" height="288" rx="6" fill="#fff" stroke="#000" stroke-width="2.5"/>
  <text x="400" y="410" font-family="Georgia,serif" font-size="13" font-weight="bold"
        fill="#000" text-anchor="middle">Further Examples — Common Compounds &amp; Ions</text>
  <line x1="20" y1="416" x2="780" y2="416" stroke="#000" stroke-width="1.5"/>

  <!-- Table headers -->
  <text x="100" y="434" font-family="Georgia,serif" font-size="11" font-weight="bold"
        fill="#000" text-anchor="middle">Compound/Ion</text>
  <text x="270" y="434" font-family="Georgia,serif" font-size="11" font-weight="bold"
        fill="#000" text-anchor="middle">Formula</text>
  <text x="440" y="434" font-family="Georgia,serif" font-size="11" font-weight="bold"
        fill="#000" text-anchor="middle">Ox. No. of underlined element</text>
  <text x="660" y="434" font-family="Georgia,serif" font-size="11" font-weight="bold"
        fill="#000" text-anchor="middle">Working</text>
  <line x1="20" y1="440" x2="780" y2="440" stroke="#000" stroke-width="1"/>

  <!-- Row 1 -->
  <text x="100" y="458" font-family="Georgia,serif" font-size="10" fill="#000" text-anchor="middle">Sodium chloride</text>
  <text x="270" y="458" font-family="Georgia,serif" font-size="10" fill="#000" text-anchor="middle">NaCl</text>
  <text x="440" y="458" font-family="Georgia,serif" font-size="10" fill="#000" text-anchor="middle">Na = +1, Cl = −1</text>
  <text x="660" y="458" font-family="Georgia,serif" font-size="10" fill="#000" text-anchor="middle">+1 + (−1) = 0 ✓</text>
  <!-- Row 2 -->
  <text x="100" y="476" font-family="Georgia,serif" font-size="10" fill="#000" text-anchor="middle">Carbon dioxide</text>
  <text x="270" y="476" font-family="Georgia,serif" font-size="10" fill="#000" text-anchor="middle">CO₂</text>
  <text x="440" y="476" font-family="Georgia,serif" font-size="10" fill="#000" text-anchor="middle">C = +4</text>
  <text x="660" y="476" font-family="Georgia,serif" font-size="10" fill="#000" text-anchor="middle">x + 2(−2)=0 → x=+4</text>
  <!-- Row 3 -->
  <text x="100" y="494" font-family="Georgia,serif" font-size="10" fill="#000" text-anchor="middle">Potassium manganate</text>
  <text x="270" y="494" font-family="Georgia,serif" font-size="10" fill="#000" text-anchor="middle">KMnO₄</text>
  <text x="440" y="494" font-family="Georgia,serif" font-size="10" fill="#000" text-anchor="middle">Mn = +7</text>
  <text x="660" y="494" font-family="Georgia,serif" font-size="10" fill="#000" text-anchor="middle">(+1)+x+4(−2)=0→x=+7</text>
  <!-- Row 4 -->
  <text x="100" y="512" font-family="Georgia,serif" font-size="10" fill="#000" text-anchor="middle">Dichromate ion</text>
  <text x="270" y="512" font-family="Georgia,serif" font-size="10" fill="#000" text-anchor="middle">Cr₂O₇²⁻</text>
  <text x="440" y="512" font-family="Georgia,serif" font-size="10" fill="#000" text-anchor="middle">Cr = +6</text>
  <text x="660" y="512" font-family="Georgia,serif" font-size="10" fill="#000" text-anchor="middle">2x+7(−2)=−2→x=+6</text>
  <!-- Row 5 -->
  <text x="100" y="530" font-family="Georgia,serif" font-size="10" fill="#000" text-anchor="middle">Iron(III) oxide</text>
  <text x="270" y="530" font-family="Georgia,serif" font-size="10" fill="#000" text-anchor="middle">Fe₂O₃</text>
  <text x="440" y="530" font-family="Georgia,serif" font-size="10" fill="#000" text-anchor="middle">Fe = +3</text>
  <text x="660" y="530" font-family="Georgia,serif" font-size="10" fill="#000" text-anchor="middle">2x+3(−2)=0→x=+3</text>
  <!-- Row 6 -->
  <text x="100" y="548" font-family="Georgia,serif" font-size="10" fill="#000" text-anchor="middle">Hydrogen peroxide</text>
  <text x="270" y="548" font-family="Georgia,serif" font-size="10" fill="#000" text-anchor="middle">H₂O₂</text>
  <text x="440" y="548" font-family="Georgia,serif" font-size="10" fill="#000" text-anchor="middle">O = −1 (peroxide!)</text>
  <text x="660" y="548" font-family="Georgia,serif" font-size="10" fill="#000" text-anchor="middle">2(+1)+2x=0→x=−1</text>
  <!-- Row 7 -->
  <text x="100" y="566" font-family="Georgia,serif" font-size="10" fill="#000" text-anchor="middle">Ammonium ion</text>
  <text x="270" y="566" font-family="Georgia,serif" font-size="10" fill="#000" text-anchor="middle">NH₄⁺</text>
  <text x="440" y="566" font-family="Georgia,serif" font-size="10" fill="#000" text-anchor="middle">N = −3</text>
  <text x="660" y="566" font-family="Georgia,serif" font-size="10" fill="#000" text-anchor="middle">x+4(+1)=+1→x=−3</text>
  <!-- Row 8 -->
  <text x="100" y="584" font-family="Georgia,serif" font-size="10" fill="#000" text-anchor="middle">Nitrate ion</text>
  <text x="270" y="584" font-family="Georgia,serif" font-size="10" fill="#000" text-anchor="middle">NO₃⁻</text>
  <text x="440" y="584" font-family="Georgia,serif" font-size="10" fill="#000" text-anchor="middle">N = +5</text>
  <text x="660" y="584" font-family="Georgia,serif" font-size="10" fill="#000" text-anchor="middle">x+3(−2)=−1→x=+5</text>

  <line x1="20" y1="594" x2="780" y2="594" stroke="#000" stroke-width="1"/>
  <text x="400" y="612" font-family="Georgia,serif" font-size="10" font-weight="bold"
        fill="#000" text-anchor="middle">Oxidation = increase in oxidation number (lose e⁻) | Reduction = decrease in oxidation number (gain e⁻)</text>
  <text x="400" y="630" font-family="Georgia,serif" font-size="10" fill="#555" text-anchor="middle">
    Mnemonic: OIL RIG (Oxidation Is Loss, Reduction Is Gain)</text>
  <text x="400" y="648" font-family="Georgia,serif" font-size="10" fill="#555" text-anchor="middle">
    The oxidising agent is reduced | The reducing agent is oxidised</text>
  <text x="400" y="666" font-family="Georgia,serif" font-size="10" fill="#555" text-anchor="middle">
    Fractional oxidation states possible in mixed compounds (e.g. Fe₃O₄: Fe = +8/3)</text>

</svg>`;

// ─── 8. REDOX REACTION DIAGRAM ────────────────────────────────────────────────
  static redoxReactionDiagramSvg = `<?xml version="1.0" encoding="utf-8"?>
<svg version="1.1" xmlns="http://www.w3.org/2000/svg"
     width="800px" height="620px" viewBox="0 0 800 620">

  <!-- Title -->
  <text x="400" y="28" font-family="Georgia,serif" font-size="15" font-weight="bold"
        fill="#000" text-anchor="middle">Redox Reaction — Electron Transfer Diagram</text>
  <text x="400" y="46" font-family="Georgia,serif" font-size="11" fill="#333" text-anchor="middle">
    Zn(s) + Cu²⁺(aq) → Zn²⁺(aq) + Cu(s)</text>

  <!-- ══ MAIN REACTION BOX ══ -->
  <rect x="20" y="60" width="760" height="130" rx="6" fill="#fff" stroke="#000" stroke-width="2.5"/>

  <!-- Zn atom (reactant) -->
  <circle cx="120" cy="120" r="38" fill="#fff" stroke="#000" stroke-width="3"/>
  <text x="120" y="115" font-family="Georgia,serif" font-size="16" font-weight="bold"
        fill="#000" text-anchor="middle">Zn</text>
  <text x="120" y="133" font-family="Georgia,serif" font-size="11" fill="#333" text-anchor="middle">ox = 0</text>
  <text x="120" y="170" font-family="Georgia,serif" font-size="10" fill="#333" text-anchor="middle">(solid)</text>

  <!-- Cu²⁺ ion (reactant) -->
  <circle cx="310" cy="120" r="38" fill="#f5f5f5" stroke="#000" stroke-width="3"/>
  <text x="310" y="115" font-family="Georgia,serif" font-size="16" font-weight="bold"
        fill="#000" text-anchor="middle">Cu²⁺</text>
  <text x="310" y="133" font-family="Georgia,serif" font-size="11" fill="#333" text-anchor="middle">ox = +2</text>
  <text x="310" y="170" font-family="Georgia,serif" font-size="10" fill="#333" text-anchor="middle">(aqueous)</text>

  <!-- Arrow -->
  <line x1="365" y1="120" x2="435" y2="120" stroke="#000" stroke-width="3"/>
  <polygon points="433,113 450,120 433,127" fill="#000"/>

  <!-- Zn²⁺ ion (product) -->
  <circle cx="530" cy="120" r="38" fill="#f5f5f5" stroke="#000" stroke-width="3"/>
  <text x="530" y="115" font-family="Georgia,serif" font-size="16" font-weight="bold"
        fill="#000" text-anchor="middle">Zn²⁺</text>
  <text x="530" y="133" font-family="Georgia,serif" font-size="11" fill="#333" text-anchor="middle">ox = +2</text>
  <text x="530" y="170" font-family="Georgia,serif" font-size="10" fill="#333" text-anchor="middle">(aqueous)</text>

  <!-- Cu atom (product) -->
  <circle cx="700" cy="120" r="38" fill="#fff" stroke="#000" stroke-width="3"/>
  <text x="700" y="115" font-family="Georgia,serif" font-size="16" font-weight="bold"
        fill="#000" text-anchor="middle">Cu</text>
  <text x="700" y="133" font-family="Georgia,serif" font-size="11" fill="#333" text-anchor="middle">ox = 0</text>
  <text x="700" y="170" font-family="Georgia,serif" font-size="10" fill="#333" text-anchor="middle">(solid)</text>

  <!-- Electron transfer arc: 2e⁻ from Zn to Cu²⁺ -->
  <!-- Curved arrow from Zn to Cu²⁺ (above) -->
  <path d="M158,90 Q215,40 272,90" fill="none" stroke="#000" stroke-width="2.5"
        stroke-dasharray="6,3"/>
  <polygon points="270,84 285,92 272,100" fill="#000"/>
  <text x="215" y="38" font-family="Georgia,serif" font-size="12" font-weight="bold"
        fill="#000" text-anchor="middle">2e⁻</text>
  <text x="215" y="52" font-family="Georgia,serif" font-size="10" fill="#333" text-anchor="middle">electron transfer</text>

  <!-- ══ HALF REACTIONS BOX ══ -->
  <rect x="20" y="205" width="370" height="120" rx="6" fill="#fff" stroke="#000" stroke-width="2.5"/>
  <text x="205" y="225" font-family="Georgia,serif" font-size="12" font-weight="bold"
        fill="#000" text-anchor="middle">OXIDATION HALF-REACTION</text>
  <line x1="20" y1="231" x2="390" y2="231" stroke="#000" stroke-width="1.5"/>
  <text x="205" y="252" font-family="Georgia,serif" font-size="14" fill="#000" text-anchor="middle">
    Zn → Zn²⁺ + 2e⁻</text>
  <text x="205" y="272" font-family="Georgia,serif" font-size="10" fill="#333" text-anchor="middle">
    Zinc loses 2 electrons (ox. no.: 0 → +2)</text>
  <text x="205" y="288" font-family="Georgia,serif" font-size="10" fill="#333" text-anchor="middle">
    Zinc is OXIDISED  |  Zinc is the REDUCING AGENT</text>
  <!-- Oxidation number change arrow -->
  <text x="205" y="310" font-family="Georgia,serif" font-size="10" fill="#000" text-anchor="middle">
    Ox. no.: 0 ──(+2)──→ +2  (increases)</text>

  <rect x="410" y="205" width="370" height="120" rx="6" fill="#fff" stroke="#000" stroke-width="2.5"/>
  <text x="595" y="225" font-family="Georgia,serif" font-size="12" font-weight="bold"
        fill="#000" text-anchor="middle">REDUCTION HALF-REACTION</text>
  <line x1="410" y1="231" x2="780" y2="231" stroke="#000" stroke-width="1.5"/>
  <text x="595" y="252" font-family="Georgia,serif" font-size="14" fill="#000" text-anchor="middle">
    Cu²⁺ + 2e⁻ → Cu</text>
  <text x="595" y="272" font-family="Georgia,serif" font-size="10" fill="#333" text-anchor="middle">
    Copper gains 2 electrons (ox. no.: +2 → 0)</text>
  <text x="595" y="288" font-family="Georgia,serif" font-size="10" fill="#333" text-anchor="middle">
    Copper is REDUCED  |  Cu²⁺ is the OXIDISING AGENT</text>
  <text x="595" y="310" font-family="Georgia,serif" font-size="10" fill="#000" text-anchor="middle">
    Ox. no.: +2 ──(−2)──→ 0  (decreases)</text>

  <!-- ══ OXIDATION NUMBER CHANGE DIAGRAM ══ -->
  <rect x="20" y="342" width="760" height="100" rx="6" fill="#fff" stroke="#000" stroke-width="2.5"/>
  <text x="400" y="362" font-family="Georgia,serif" font-size="12" font-weight="bold"
        fill="#000" text-anchor="middle">Oxidation Number Changes</text>
  <line x1="20" y1="368" x2="780" y2="368" stroke="#000" stroke-width="1.5"/>

  <!-- Zn change -->
  <text x="80" y="390" font-family="Georgia,serif" font-size="11" fill="#000" text-anchor="middle">Zn</text>
  <text x="140" y="385" font-family="Georgia,serif" font-size="13" font-weight="bold" fill="#000">0</text>
  <line x1="162" y1="386" x2="210" y2="386" stroke="#000" stroke-width="2"/>
  <polygon points="208,381 222,386 208,391" fill="#000"/>
  <text x="228" y="385" font-family="Georgia,serif" font-size="13" font-weight="bold" fill="#000">+2</text>
  <text x="185" y="402" font-family="Georgia,serif" font-size="10" fill="#333">+2 (oxidised)</text>
  <text x="80" y="422" font-family="Georgia,serif" font-size="9" fill="#555" text-anchor="middle">LOSES 2e⁻</text>

  <!-- Divider -->
  <line x1="400" y1="368" x2="400" y2="442" stroke="#000" stroke-width="1" stroke-dasharray="4,3"/>

  <!-- Cu²⁺ change -->
  <text x="480" y="390" font-family="Georgia,serif" font-size="11" fill="#000" text-anchor="middle">Cu²⁺</text>
  <text x="530" y="385" font-family="Georgia,serif" font-size="13" font-weight="bold" fill="#000">+2</text>
  <line x1="557" y1="386" x2="600" y2="386" stroke="#000" stroke-width="2"/>
  <polygon points="598,381 612,386 598,391" fill="#000"/>
  <text x="618" y="385" font-family="Georgia,serif" font-size="13" font-weight="bold" fill="#000">0</text>
  <text x="578" y="402" font-family="Georgia,serif" font-size="10" fill="#333">−2 (reduced)</text>
  <text x="480" y="422" font-family="Georgia,serif" font-size="9" fill="#555" text-anchor="middle">GAINS 2e⁻</text>

  <!-- ══ OIL RIG / KEY RULES ══ -->
  <rect x="20" y="458" width="760" height="140" rx="6" fill="#fff" stroke="#000" stroke-width="2.5"
        stroke-dasharray="6,3"/>
  <text x="400" y="478" font-family="Georgia,serif" font-size="13" font-weight="bold"
        fill="#000" text-anchor="middle">Key Rules &amp; Mnemonics</text>
  <line x1="20" y1="484" x2="780" y2="484" stroke="#000" stroke-width="1.5"/>

  <text x="40" y="504" font-family="Georgia,serif" font-size="12" font-weight="bold" fill="#000">OIL RIG:</text>
  <text x="40" y="522" font-family="Georgia,serif" font-size="11" fill="#333">
    Oxidation Is Loss (of electrons) | Reduction Is Gain (of electrons)</text>
  <text x="40" y="540" font-family="Georgia,serif" font-size="11" fill="#333">
    The OXIDISING AGENT gains electrons (and is itself reduced)</text>
  <text x="40" y="558" font-family="Georgia,serif" font-size="11" fill="#333">
    The REDUCING AGENT loses electrons (and is itself oxidised)</text>
  <text x="40" y="576" font-family="Georgia,serif" font-size="11" fill="#333">
    Electrons lost by reducing agent = electrons gained by oxidising agent</text>
  <text x="40" y="592" font-family="Georgia,serif" font-size="11" fill="#333">
    AN OX, RED CAT: ANode OXidation | REDuction CATHode</text>

</svg>`;

// ─── 9. COMBUSTION REACTION DIAGRAM ──────────────────────────────────────────
  static combustionReactionDiagramSvg = `<?xml version="1.0" encoding="utf-8"?>
<svg version="1.1" xmlns="http://www.w3.org/2000/svg"
     width="800px" height="620px" viewBox="0 0 800 620">

  <!-- Title -->
  <text x="400" y="28" font-family="Georgia,serif" font-size="15" font-weight="bold"
        fill="#000" text-anchor="middle">Combustion Reactions — Complete &amp; Incomplete</text>
  <text x="400" y="46" font-family="Georgia,serif" font-size="11" fill="#333" text-anchor="middle">
    Fuel + oxygen → products + energy    Example fuel: methane (CH₄)</text>

  <!-- ══ COMPLETE COMBUSTION (left panel) ══ -->
  <rect x="20" y="60" width="368" height="350" rx="6" fill="#fff" stroke="#000" stroke-width="2.5"/>
  <text x="204" y="82" font-family="Georgia,serif" font-size="13" font-weight="bold"
        fill="#000" text-anchor="middle">COMPLETE COMBUSTION</text>
  <text x="204" y="98" font-family="Georgia,serif" font-size="11" fill="#333" text-anchor="middle">
    (excess oxygen)</text>
  <line x1="20" y1="104" x2="388" y2="104" stroke="#000" stroke-width="1.5"/>

  <!-- Equation -->
  <text x="204" y="126" font-family="Georgia,serif" font-size="13" font-weight="bold"
        fill="#000" text-anchor="middle">CH₄ + 2O₂ → CO₂ + 2H₂O</text>

  <!-- Flame shape -->
  <path d="M204,220 Q160,180 175,145 Q185,165 195,155 Q190,135 204,145
           Q218,135 213,155 Q223,165 233,145 Q248,180 204,220Z"
        fill="#fff" stroke="#000" stroke-width="2.5"/>
  <text x="204" y="200" font-family="Georgia,serif" font-size="10" fill="#000" text-anchor="middle">flame</text>
  <!-- Burner -->
  <rect x="180" y="220" width="48" height="14" rx="3" fill="#fff" stroke="#000" stroke-width="2"/>

  <!-- Products labels -->
  <text x="80" y="260" font-family="Georgia,serif" font-size="11" font-weight="bold"
        fill="#000" text-anchor="middle">Products:</text>
  <text x="80" y="278" font-family="Georgia,serif" font-size="11" fill="#333" text-anchor="middle">CO₂ (g)</text>
  <text x="80" y="294" font-family="Georgia,serif" font-size="11" fill="#333" text-anchor="middle">H₂O (g)</text>
  <text x="80" y="310" font-family="Georgia,serif" font-size="10" fill="#555" text-anchor="middle">colourless gases</text>

  <!-- Observations -->
  <text x="300" y="260" font-family="Georgia,serif" font-size="11" font-weight="bold"
        fill="#000" text-anchor="middle">Observations:</text>
  <text x="300" y="278" font-family="Georgia,serif" font-size="10" fill="#333" text-anchor="middle">Clean blue flame</text>
  <text x="300" y="294" font-family="Georgia,serif" font-size="10" fill="#333" text-anchor="middle">No soot produced</text>
  <text x="300" y="310" font-family="Georgia,serif" font-size="10" fill="#333" text-anchor="middle">CO₂ turns</text>
  <text x="300" y="326" font-family="Georgia,serif" font-size="10" fill="#333" text-anchor="middle">limewater milky</text>
  <text x="300" y="342" font-family="Georgia,serif" font-size="10" fill="#333" text-anchor="middle">H₂O condenses</text>

  <!-- Upward arrows for products -->
  <line x1="204" y1="238" x2="204" y2="255" stroke="#000" stroke-width="1.5" stroke-dasharray="4,2"/>
  <polygon points="200,250 204,240 208,250" fill="#000"/>

  <!-- Tests -->
  <text x="204" y="378" font-family="Georgia,serif" font-size="10" font-weight="bold"
        fill="#000" text-anchor="middle">Tests for products:</text>
  <text x="204" y="394" font-family="Georgia,serif" font-size="10" fill="#333" text-anchor="middle">
    CO₂: bubble through Ca(OH)₂(aq) → white ppt</text>

  <!-- ══ INCOMPLETE COMBUSTION (right panel) ══ -->
  <rect x="412" y="60" width="368" height="350" rx="6" fill="#fff" stroke="#000" stroke-width="2.5"/>
  <text x="596" y="82" font-family="Georgia,serif" font-size="13" font-weight="bold"
        fill="#000" text-anchor="middle">INCOMPLETE COMBUSTION</text>
  <text x="596" y="98" font-family="Georgia,serif" font-size="11" fill="#333" text-anchor="middle">
    (limited/insufficient oxygen)</text>
  <line x1="412" y1="104" x2="780" y2="104" stroke="#000" stroke-width="1.5"/>

  <!-- Equation -->
  <text x="596" y="126" font-family="Georgia,serif" font-size="12" font-weight="bold"
        fill="#000" text-anchor="middle">2CH₄ + 3O₂ → 2CO + 4H₂O</text>
  <text x="596" y="143" font-family="Georgia,serif" font-size="10" fill="#333" text-anchor="middle">
    (or C(s) soot also produced)</text>

  <!-- Flame with soot (hatched top) -->
  <path d="M596,220 Q552,180 567,145 Q577,165 587,155 Q582,135 596,145
           Q610,135 605,155 Q615,165 625,145 Q640,180 596,220Z"
        fill="#fff" stroke="#000" stroke-width="2.5"/>
  <!-- Soot streaks in flame -->
  <line x1="586" y1="175" x2="584" y2="160" stroke="#000" stroke-width="1" stroke-dasharray="2,2"/>
  <line x1="596" y1="170" x2="594" y2="153" stroke="#000" stroke-width="1" stroke-dasharray="2,2"/>
  <line x1="606" y1="175" x2="604" y2="160" stroke="#000" stroke-width="1" stroke-dasharray="2,2"/>
  <text x="596" y="200" font-family="Georgia,serif" font-size="10" fill="#000" text-anchor="middle">smoky</text>
  <!-- Burner -->
  <rect x="572" y="220" width="48" height="14" rx="3" fill="#fff" stroke="#000" stroke-width="2"/>

  <!-- Products labels -->
  <text x="470" y="260" font-family="Georgia,serif" font-size="11" font-weight="bold"
        fill="#000" text-anchor="middle">Products:</text>
  <text x="470" y="278" font-family="Georgia,serif" font-size="11" fill="#333" text-anchor="middle">CO (g)</text>
  <text x="470" y="294" font-family="Georgia,serif" font-size="11" fill="#333" text-anchor="middle">C (soot)</text>
  <text x="470" y="310" font-family="Georgia,serif" font-size="11" fill="#333" text-anchor="middle">H₂O (g)</text>
  <text x="470" y="326" font-family="Georgia,serif" font-size="10" fill="#555" text-anchor="middle">+ less energy</text>

  <!-- Observations -->
  <text x="700" y="260" font-family="Georgia,serif" font-size="11" font-weight="bold"
        fill="#000" text-anchor="middle">Hazards:</text>
  <text x="700" y="278" font-family="Georgia,serif" font-size="10" fill="#333" text-anchor="middle">CO: toxic gas</text>
  <text x="700" y="294" font-family="Georgia,serif" font-size="10" fill="#333" text-anchor="middle">(odourless, binds</text>
  <text x="700" y="310" font-family="Georgia,serif" font-size="10" fill="#333" text-anchor="middle">haemoglobin)</text>
  <text x="700" y="326" font-family="Georgia,serif" font-size="10" fill="#333" text-anchor="middle">Soot: PM2.5</text>
  <text x="700" y="342" font-family="Georgia,serif" font-size="10" fill="#333" text-anchor="middle">particle pollution</text>

  <text x="596" y="378" font-family="Georgia,serif" font-size="10" font-weight="bold"
        fill="#000" text-anchor="middle">Flame colour: yellow/orange (luminous)</text>
  <text x="596" y="394" font-family="Georgia,serif" font-size="10" fill="#333" text-anchor="middle">
    Black soot deposits visible on cool surfaces</text>

  <!-- ══ ENERGY DIAGRAM ══ -->
  <rect x="20" y="428" width="760" height="80" rx="6" fill="#fff" stroke="#000" stroke-width="2.5"/>
  <text x="400" y="448" font-family="Georgia,serif" font-size="12" font-weight="bold"
        fill="#000" text-anchor="middle">Energy Released by Combustion</text>
  <line x1="20" y1="454" x2="780" y2="454" stroke="#000" stroke-width="1.5"/>
  <text x="400" y="474" font-family="Georgia,serif" font-size="11" fill="#333" text-anchor="middle">
    Complete combustion releases MORE energy than incomplete combustion</text>
  <text x="400" y="492" font-family="Georgia,serif" font-size="11" fill="#333" text-anchor="middle">
    CH₄: ΔHc = −890 kJ mol⁻¹ (complete)  |  Incomplete = lower energy yield + toxic CO produced</text>

  <!-- ══ COMPARISON TABLE ══ -->
  <rect x="20" y="526" width="760" height="80" rx="6" fill="#fff" stroke="#000" stroke-width="2.5"
        stroke-dasharray="5,3"/>
  <text x="200" y="548" font-family="Georgia,serif" font-size="11" font-weight="bold"
        fill="#000" text-anchor="middle">Complete</text>
  <text x="560" y="548" font-family="Georgia,serif" font-size="11" font-weight="bold"
        fill="#000" text-anchor="middle">Incomplete</text>
  <line x1="400" y1="528" x2="400" y2="606" stroke="#000" stroke-width="1" stroke-dasharray="4,3"/>
  <text x="200" y="568" font-family="Georgia,serif" font-size="10" fill="#333" text-anchor="middle">
    Excess O₂ | Blue flame</text>
  <text x="560" y="568" font-family="Georgia,serif" font-size="10" fill="#333" text-anchor="middle">
    Limited O₂ | Yellow/orange flame</text>
  <text x="200" y="585" font-family="Georgia,serif" font-size="10" fill="#333" text-anchor="middle">
    Products: CO₂ + H₂O only</text>
  <text x="560" y="585" font-family="Georgia,serif" font-size="10" fill="#333" text-anchor="middle">
    Products: CO + C(soot) + H₂O</text>
  <text x="200" y="600" font-family="Georgia,serif" font-size="10" fill="#333" text-anchor="middle">
    Max energy yield | Safe</text>
  <text x="560" y="600" font-family="Georgia,serif" font-size="10" fill="#333" text-anchor="middle">
    Lower yield | CO is deadly</text>

</svg>`;

// ─── 10. PRECIPITATION REACTION DIAGRAM ──────────────────────────────────────
  static precipitationReactionDiagramSvg = `<?xml version="1.0" encoding="utf-8"?>
<svg version="1.1" xmlns="http://www.w3.org/2000/svg"
     width="800px" height="620px" viewBox="0 0 800 620">

  <!-- Title -->
  <text x="400" y="28" font-family="Georgia,serif" font-size="15" font-weight="bold"
        fill="#000" text-anchor="middle">Precipitation Reaction — Silver Chloride Formation</text>
  <text x="400" y="46" font-family="Georgia,serif" font-size="11" fill="#333" text-anchor="middle">
    AgNO₃(aq) + NaCl(aq) → AgCl(s)↓ + NaNO₃(aq)</text>

  <!-- ══ SOLUTION A: AgNO₃ ══ -->
  <rect x="20" y="65" width="210" height="260" rx="6" fill="#fff" stroke="#000" stroke-width="2.5"/>
  <text x="125" y="86" font-family="Georgia,serif" font-size="12" font-weight="bold"
        fill="#000" text-anchor="middle">Solution A</text>
  <text x="125" y="102" font-family="Georgia,serif" font-size="11" fill="#333" text-anchor="middle">AgNO₃(aq)</text>
  <!-- Beaker shape -->
  <path d="M50,130 L50,290 Q50,300 60,300 L190,300 Q200,300 200,290 L200,130"
        fill="#fff" stroke="#000" stroke-width="2"/>
  <!-- Solution fill -->
  <rect x="52" y="220" width="146" height="78" fill="#e8e8e8"/>
  <!-- Ions -->
  <text x="85" y="252" font-family="Georgia,serif" font-size="13" font-weight="bold"
        fill="#000" text-anchor="middle">Ag⁺</text>
  <text x="145" y="252" font-family="Georgia,serif" font-size="13" font-weight="bold"
        fill="#000" text-anchor="middle">NO₃⁻</text>
  <text x="85" y="276" font-family="Georgia,serif" font-size="10" fill="#555" text-anchor="middle">cation</text>
  <text x="145" y="276" font-family="Georgia,serif" font-size="10" fill="#555" text-anchor="middle">anion</text>
  <!-- Rim label -->
  <rect x="52" y="130" width="146" height="12" fill="#e8e8e8" stroke="none"/>
  <text x="125" y="140" font-family="Georgia,serif" font-size="9" fill="#333" text-anchor="middle">clear solution</text>

  <!-- ══ + SIGN ══ -->
  <text x="245" y="210" font-family="Georgia,serif" font-size="32" font-weight="bold"
        fill="#000" text-anchor="middle">+</text>

  <!-- ══ SOLUTION B: NaCl ══ -->
  <rect x="270" y="65" width="210" height="260" rx="6" fill="#fff" stroke="#000" stroke-width="2.5"/>
  <text x="375" y="86" font-family="Georgia,serif" font-size="12" font-weight="bold"
        fill="#000" text-anchor="middle">Solution B</text>
  <text x="375" y="102" font-family="Georgia,serif" font-size="11" fill="#333" text-anchor="middle">NaCl(aq)</text>
  <!-- Beaker shape -->
  <path d="M300,130 L300,290 Q300,300 310,300 L440,300 Q450,300 450,290 L450,130"
        fill="#fff" stroke="#000" stroke-width="2"/>
  <!-- Solution fill -->
  <rect x="302" y="220" width="146" height="78" fill="#e8e8e8"/>
  <!-- Ions -->
  <text x="340" y="252" font-family="Georgia,serif" font-size="13" font-weight="bold"
        fill="#000" text-anchor="middle">Na⁺</text>
  <text x="405" y="252" font-family="Georgia,serif" font-size="13" font-weight="bold"
        fill="#000" text-anchor="middle">Cl⁻</text>
  <text x="340" y="276" font-family="Georgia,serif" font-size="10" fill="#555" text-anchor="middle">cation</text>
  <text x="405" y="276" font-family="Georgia,serif" font-size="10" fill="#555" text-anchor="middle">anion</text>
  <rect x="302" y="130" width="146" height="12" fill="#e8e8e8" stroke="none"/>
  <text x="375" y="140" font-family="Georgia,serif" font-size="9" fill="#333" text-anchor="middle">clear solution</text>

  <!-- ══ ARROW → ══ -->
  <line x1="497" y1="200" x2="548" y2="200" stroke="#000" stroke-width="3"/>
  <polygon points="546,193 563,200 546,207" fill="#000"/>
  <text x="530" y="193" font-family="Georgia,serif" font-size="10" fill="#333" text-anchor="middle">mix</text>

  <!-- ══ PRODUCT MIXTURE BEAKER ══ -->
  <rect x="565" y="65" width="215" height="260" rx="6" fill="#fff" stroke="#000" stroke-width="2.5"/>
  <text x="672" y="86" font-family="Georgia,serif" font-size="12" font-weight="bold"
        fill="#000" text-anchor="middle">After Mixing</text>
  <text x="672" y="102" font-family="Georgia,serif" font-size="10" fill="#333" text-anchor="middle">
    AgCl↓ + NaNO₃(aq)</text>
  <!-- Beaker shape -->
  <path d="M590,130 L590,290 Q590,300 600,300 L750,300 Q760,300 760,290 L760,130"
        fill="#fff" stroke="#000" stroke-width="2"/>
  <!-- Supernatant (clear) -->
  <rect x="592" y="168" width="166" height="60" fill="#d4d4d4" fill-opacity="0.5"/>
  <text x="672" y="196" font-family="Georgia,serif" font-size="10" fill="#333" text-anchor="middle">NaNO₃(aq)</text>
  <text x="672" y="210" font-family="Georgia,serif" font-size="9" fill="#555" text-anchor="middle">Na⁺, NO₃⁻ (spectators)</text>
  <!-- Precipitate layer -->
  <rect x="592" y="228" width="166" height="60" fill="#555"/>
  <!-- Hatching for precipitate -->
  <line x1="592" y1="238" x2="650" y2="228" stroke="#fff" stroke-width="1"/>
  <line x1="592" y1="255" x2="670" y2="228" stroke="#fff" stroke-width="1"/>
  <line x1="592" y1="272" x2="690" y2="228" stroke="#fff" stroke-width="1"/>
  <line x1="605" y1="288" x2="710" y2="228" stroke="#fff" stroke-width="1"/>
  <line x1="625" y1="288" x2="730" y2="228" stroke="#fff" stroke-width="1"/>
  <line x1="645" y1="288" x2="750" y2="228" stroke="#fff" stroke-width="1"/>
  <line x1="668" y1="288" x2="758" y2="244" stroke="#fff" stroke-width="1"/>
  <line x1="692" y1="288" x2="758" y2="264" stroke="#fff" stroke-width="1"/>
  <text x="672" y="252" font-family="Georgia,serif" font-size="10" font-weight="bold"
        fill="#fff" text-anchor="middle">AgCl(s)↓</text>
  <text x="672" y="268" font-family="Georgia,serif" font-size="9" fill="#fff" text-anchor="middle">white precipitate</text>
  <!-- Settling arrows -->
  <line x1="672" y1="215" x2="672" y2="228" stroke="#000" stroke-width="2"/>
  <polygon points="668,224 672,232 676,224" fill="#000"/>

  <!-- ══ IONIC EQUATIONS ══ -->
  <rect x="20" y="342" width="760" height="120" rx="6" fill="#fff" stroke="#000" stroke-width="2.5"/>
  <text x="400" y="362" font-family="Georgia,serif" font-size="12" font-weight="bold"
        fill="#000" text-anchor="middle">Ionic Equations</text>
  <line x1="20" y1="368" x2="780" y2="368" stroke="#000" stroke-width="1.5"/>
  <text x="40" y="388" font-family="Georgia,serif" font-size="11" font-weight="bold" fill="#000">Full ionic equation:</text>
  <text x="40" y="406" font-family="Georgia,serif" font-size="11" fill="#333">
    Ag⁺(aq) + NO₃⁻(aq) + Na⁺(aq) + Cl⁻(aq) → AgCl(s)↓ + Na⁺(aq) + NO₃⁻(aq)</text>
  <text x="40" y="428" font-family="Georgia,serif" font-size="11" font-weight="bold" fill="#000">Spectator ions removed: Na⁺ and NO₃⁻</text>
  <text x="40" y="448" font-family="Georgia,serif" font-size="13" font-weight="bold" fill="#000">
    Net ionic equation:   Ag⁺(aq) + Cl⁻(aq) → AgCl(s)↓</text>

  <!-- ══ SOLUBILITY RULES & KEY INFO ══ -->
  <rect x="20" y="478" width="760" height="128" rx="6" fill="#fff" stroke="#000" stroke-width="2.5"
        stroke-dasharray="5,3"/>
  <text x="400" y="498" font-family="Georgia,serif" font-size="12" font-weight="bold"
        fill="#000" text-anchor="middle">Solubility Rules (predicting precipitation)</text>
  <line x1="20" y1="504" x2="780" y2="504" stroke="#000" stroke-width="1.5"/>
  <text x="40" y="522" font-family="Georgia,serif" font-size="10" fill="#333">• All nitrates (NO₃⁻) soluble | All Group I and NH₄⁺ salts soluble | All chlorides soluble EXCEPT AgCl, PbCl₂, Hg₂Cl₂</text>
  <text x="40" y="540" font-family="Georgia,serif" font-size="10" fill="#333">• Most sulfates soluble EXCEPT BaSO₄, PbSO₄, CaSO₄ | Most carbonates insoluble EXCEPT Group I and NH₄⁺</text>
  <text x="40" y="558" font-family="Georgia,serif" font-size="10" fill="#333">• Most hydroxides insoluble EXCEPT Group I, Ba(OH)₂, Ca(OH)₂ (slightly)</text>
  <text x="40" y="576" font-family="Georgia,serif" font-size="10" fill="#333">• Test: Add AgNO₃(aq) → white ppt of AgCl confirms Cl⁻ present | Add Ba²⁺ → white ppt BaSO₄ confirms SO₄²⁻</text>
  <text x="40" y="594" font-family="Georgia,serif" font-size="10" fill="#333">• Precipitation is the basis of gravimetric analysis — weigh precipitate to find unknown mass of ion in solution</text>

</svg>`;

// ─── 11. ACID-BASE NEUTRALISATION DIAGRAM ────────────────────────────────────
  static acidBaseNeutralizationDiagramSvg = `<?xml version="1.0" encoding="utf-8"?>
<svg version="1.1" xmlns="http://www.w3.org/2000/svg"
     width="800px" height="620px" viewBox="0 0 800 620">

  <!-- Title -->
  <text x="400" y="28" font-family="Georgia,serif" font-size="15" font-weight="bold"
        fill="#000" text-anchor="middle">Acid-Base Neutralisation</text>
  <text x="400" y="46" font-family="Georgia,serif" font-size="11" fill="#333" text-anchor="middle">
    HCl(aq) + NaOH(aq) → NaCl(aq) + H₂O(l)    Net ionic: H⁺ + OH⁻ → H₂O</text>

  <!-- ══ ACID BEAKER ══ -->
  <rect x="20" y="62" width="200" height="250" rx="6" fill="#fff" stroke="#000" stroke-width="2.5"/>
  <text x="120" y="82" font-family="Georgia,serif" font-size="12" font-weight="bold"
        fill="#000" text-anchor="middle">ACID</text>
  <text x="120" y="98" font-family="Georgia,serif" font-size="11" fill="#333" text-anchor="middle">HCl(aq)</text>
  <path d="M40,115 L40,280 Q40,290 50,290 L190,290 Q200,290 200,280 L200,115"
        fill="#fff" stroke="#000" stroke-width="2"/>
  <rect x="42" y="200" width="156" height="78" fill="#d4d4d4"/>
  <!-- H⁺ and Cl⁻ ions -->
  <text x="75" y="235" font-family="Georgia,serif" font-size="14" font-weight="bold" fill="#000">H⁺</text>
  <text x="130" y="235" font-family="Georgia,serif" font-size="14" font-weight="bold" fill="#000">Cl⁻</text>
  <text x="75" y="255" font-family="Georgia,serif" font-size="14" font-weight="bold" fill="#000">H⁺</text>
  <text x="130" y="255" font-family="Georgia,serif" font-size="14" font-weight="bold" fill="#000">Cl⁻</text>
  <text x="75" y="275" font-family="Georgia,serif" font-size="14" font-weight="bold" fill="#000">H⁺</text>
  <text x="130" y="275" font-family="Georgia,serif" font-size="14" font-weight="bold" fill="#000">Cl⁻</text>
  <text x="120" y="140" font-family="Georgia,serif" font-size="10" fill="#333" text-anchor="middle">pH &lt; 7</text>
  <text x="120" y="156" font-family="Georgia,serif" font-size="10" fill="#555" text-anchor="middle">excess H⁺ ions</text>

  <!-- ══ + SIGN ══ -->
  <text x="233" y="215" font-family="Georgia,serif" font-size="32" font-weight="bold"
        fill="#000" text-anchor="middle">+</text>

  <!-- ══ BASE BEAKER ══ -->
  <rect x="255" y="62" width="200" height="250" rx="6" fill="#fff" stroke="#000" stroke-width="2.5"/>
  <text x="355" y="82" font-family="Georgia,serif" font-size="12" font-weight="bold"
        fill="#000" text-anchor="middle">BASE</text>
  <text x="355" y="98" font-family="Georgia,serif" font-size="11" fill="#333" text-anchor="middle">NaOH(aq)</text>
  <path d="M275,115 L275,280 Q275,290 285,290 L425,290 Q435,290 435,280 L435,115"
        fill="#fff" stroke="#000" stroke-width="2"/>
  <rect x="277" y="200" width="156" height="78" fill="#d4d4d4"/>
  <!-- Na⁺ and OH⁻ ions -->
  <text x="305" y="235" font-family="Georgia,serif" font-size="14" font-weight="bold" fill="#000">Na⁺</text>
  <text x="360" y="235" font-family="Georgia,serif" font-size="13" font-weight="bold" fill="#000">OH⁻</text>
  <text x="305" y="255" font-family="Georgia,serif" font-size="14" font-weight="bold" fill="#000">Na⁺</text>
  <text x="360" y="255" font-family="Georgia,serif" font-size="13" font-weight="bold" fill="#000">OH⁻</text>
  <text x="305" y="275" font-family="Georgia,serif" font-size="14" font-weight="bold" fill="#000">Na⁺</text>
  <text x="360" y="275" font-family="Georgia,serif" font-size="13" font-weight="bold" fill="#000">OH⁻</text>
  <text x="355" y="140" font-family="Georgia,serif" font-size="10" fill="#333" text-anchor="middle">pH &gt; 7</text>
  <text x="355" y="156" font-family="Georgia,serif" font-size="10" fill="#555" text-anchor="middle">excess OH⁻ ions</text>

  <!-- ══ ARROW ══ -->
  <line x1="470" y1="195" x2="525" y2="195" stroke="#000" stroke-width="3"/>
  <polygon points="523,188 540,195 523,202" fill="#000"/>
  <text x="498" y="188" font-family="Georgia,serif" font-size="10" fill="#333" text-anchor="middle">mix</text>

  <!-- ══ NEUTRALISATION PRODUCT BEAKER ══ -->
  <rect x="540" y="62" width="240" height="250" rx="6" fill="#fff" stroke="#000" stroke-width="2.5"/>
  <text x="660" y="82" font-family="Georgia,serif" font-size="12" font-weight="bold"
        fill="#000" text-anchor="middle">NEUTRAL PRODUCT</text>
  <text x="660" y="98" font-family="Georgia,serif" font-size="11" fill="#333" text-anchor="middle">NaCl(aq) + H₂O</text>
  <path d="M558,115 L558,280 Q558,290 568,290 L752,290 Q762,290 762,280 L762,115"
        fill="#fff" stroke="#000" stroke-width="2"/>
  <rect x="560" y="190" width="200" height="88" fill="#d4d4d4"/>
  <!-- Na⁺ and Cl⁻ ions + H₂O -->
  <text x="608" y="225" font-family="Georgia,serif" font-size="13" font-weight="bold" fill="#000">Na⁺</text>
  <text x="660" y="225" font-family="Georgia,serif" font-size="13" font-weight="bold" fill="#000">Cl⁻</text>
  <text x="715" y="225" font-family="Georgia,serif" font-size="13" fill="#000">H₂O</text>
  <text x="608" y="250" font-family="Georgia,serif" font-size="13" font-weight="bold" fill="#000">Na⁺</text>
  <text x="660" y="250" font-family="Georgia,serif" font-size="13" font-weight="bold" fill="#000">Cl⁻</text>
  <text x="715" y="250" font-family="Georgia,serif" font-size="13" fill="#000">H₂O</text>
  <text x="660" y="275" font-family="Georgia,serif" font-size="10" fill="#000" text-anchor="middle">pH = 7</text>
  <!-- pH = 7 indicator -->
  <text x="660" y="140" font-family="Georgia,serif" font-size="10" fill="#333" text-anchor="middle">pH = 7 (neutral)</text>
  <text x="660" y="156" font-family="Georgia,serif" font-size="10" fill="#555" text-anchor="middle">H⁺ + OH⁻ → H₂O</text>

  <!-- ══ H⁺ + OH⁻ → H₂O detail ══ -->
  <rect x="20" y="330" width="760" height="80" rx="6" fill="#fff" stroke="#000" stroke-width="2.5"/>
  <text x="400" y="352" font-family="Georgia,serif" font-size="13" font-weight="bold"
        fill="#000" text-anchor="middle">The Essential Neutralisation Step</text>
  <line x1="20" y1="358" x2="780" y2="358" stroke="#000" stroke-width="1.5"/>
  <!-- H⁺ circle -->
  <circle cx="140" cy="388" r="20" fill="#fff" stroke="#000" stroke-width="2.5"/>
  <text x="140" y="393" font-family="Georgia,serif" font-size="13" font-weight="bold"
        fill="#000" text-anchor="middle">H⁺</text>
  <text x="218" y="393" font-family="Georgia,serif" font-size="18" fill="#000">+</text>
  <!-- OH⁻ circle -->
  <circle cx="292" cy="388" r="20" fill="#f5f5f5" stroke="#000" stroke-width="2.5"/>
  <text x="292" y="393" font-family="Georgia,serif" font-size="12" font-weight="bold"
        fill="#000" text-anchor="middle">OH⁻</text>
  <!-- Arrow -->
  <line x1="316" y1="388" x2="356" y2="388" stroke="#000" stroke-width="2.5"/>
  <polygon points="354,382 370,388 354,394" fill="#000"/>
  <!-- H₂O molecule -->
  <circle cx="420" cy="388" r="20" fill="#e8e8e8" stroke="#000" stroke-width="2.5"/>
  <text x="420" y="393" font-family="Georgia,serif" font-size="12" font-weight="bold"
        fill="#000" text-anchor="middle">H₂O</text>
  <text x="460" y="393" font-family="Georgia,serif" font-size="11" fill="#333">+ energy (exothermic)</text>
  <text x="400" y="400" font-family="Georgia,serif" font-size="9" fill="#555"></text>

  <!-- ══ pH SCALE ══ -->
  <rect x="20" y="426" width="760" height="64" rx="6" fill="#fff" stroke="#000" stroke-width="2.5"/>
  <text x="400" y="446" font-family="Georgia,serif" font-size="12" font-weight="bold"
        fill="#000" text-anchor="middle">pH Scale</text>
  <line x1="20" y1="452" x2="780" y2="452" stroke="#000" stroke-width="1.5"/>
  <!-- Scale bar -->
  <rect x="40" y="458" width="720" height="18" rx="3" fill="#fff" stroke="#000" stroke-width="1.5"/>
  <!-- Divisions -->
  <line x1="40" y1="458" x2="40" y2="476" stroke="#000" stroke-width="2"/>
  <line x1="220" y1="458" x2="220" y2="476" stroke="#000" stroke-width="2"/>
  <line x1="400" y1="458" x2="400" y2="476" stroke="#000" stroke-width="3"/>
  <line x1="580" y1="458" x2="580" y2="476" stroke="#000" stroke-width="2"/>
  <line x1="760" y1="458" x2="760" y2="476" stroke="#000" stroke-width="2"/>
  <!-- Hatching for acid zone -->
  <rect x="41" y="459" width="178" height="16" fill="none"/>
  <line x1="60" y1="459" x2="41" y2="470" stroke="#000" stroke-width="0.8"/>
  <line x1="80" y1="459" x2="41" y2="476" stroke="#000" stroke-width="0.8"/>
  <line x1="100" y1="459" x2="58" y2="476" stroke="#000" stroke-width="0.8"/>
  <line x1="120" y1="459" x2="78" y2="476" stroke="#000" stroke-width="0.8"/>
  <line x1="140" y1="459" x2="98" y2="476" stroke="#000" stroke-width="0.8"/>
  <line x1="160" y1="459" x2="118" y2="476" stroke="#000" stroke-width="0.8"/>
  <line x1="180" y1="459" x2="138" y2="476" stroke="#000" stroke-width="0.8"/>
  <line x1="200" y1="459" x2="158" y2="476" stroke="#000" stroke-width="0.8"/>
  <line x1="220" y1="459" x2="178" y2="476" stroke="#000" stroke-width="0.8"/>
  <!-- Labels -->
  <text x="40" y="490" font-family="Georgia,serif" font-size="9" fill="#000" text-anchor="middle">0</text>
  <text x="130" y="490" font-family="Georgia,serif" font-size="10" font-weight="bold" fill="#000" text-anchor="middle">ACID</text>
  <text x="220" y="490" font-family="Georgia,serif" font-size="9" fill="#000" text-anchor="middle">7</text>
  <text x="400" y="490" font-family="Georgia,serif" font-size="10" font-weight="bold" fill="#000" text-anchor="middle">NEUTRAL</text>
  <text x="580" y="490" font-family="Georgia,serif" font-size="10" font-weight="bold" fill="#000" text-anchor="middle">ALKALINE</text>
  <text x="760" y="490" font-family="Georgia,serif" font-size="9" fill="#000" text-anchor="middle">14</text>

  <!-- ══ KEY CONCEPTS ══ -->
  <rect x="20" y="502" width="760" height="104" rx="6" fill="#fff" stroke="#000" stroke-width="2"
        stroke-dasharray="5,3"/>
  <text x="400" y="522" font-family="Georgia,serif" font-size="11" font-weight="bold"
        fill="#000" text-anchor="middle">Key Concepts</text>
  <line x1="20" y1="528" x2="780" y2="528" stroke="#000" stroke-width="1"/>
  <text x="40" y="546" font-family="Georgia,serif" font-size="10" fill="#333">• Brønsted-Lowry: acid = proton donor (H⁺ donor) | base = proton acceptor (H⁺ acceptor)</text>
  <text x="40" y="562" font-family="Georgia,serif" font-size="10" fill="#333">• Lewis: acid = electron pair acceptor | base = electron pair donor</text>
  <text x="40" y="578" font-family="Georgia,serif" font-size="10" fill="#333">• Strong acid: fully dissociates (HCl, HNO₃, H₂SO₄) | Weak acid: partially dissociates (CH₃COOH)</text>
  <text x="40" y="594" font-family="Georgia,serif" font-size="10" fill="#333">• Salt formed = cation from base + anion from acid | Neutralisation is always exothermic (ΔH ≈ −57 kJ mol⁻¹)</text>

</svg>`;

// ─── 12. COLLISION THEORY DIAGRAM ────────────────────────────────────────────
  static collisionTheoryDiagramSvg = `<?xml version="1.0" encoding="utf-8"?>
<svg version="1.1" xmlns="http://www.w3.org/2000/svg"
     width="800px" height="680px" viewBox="0 0 800 680">

  <!-- Title -->
  <text x="400" y="28" font-family="Georgia,serif" font-size="15" font-weight="bold"
        fill="#000" text-anchor="middle">Collision Theory</text>
  <text x="400" y="46" font-family="Georgia,serif" font-size="11" fill="#333" text-anchor="middle">
    Reaction occurs only when particles collide with sufficient energy AND correct orientation</text>

  <!-- ══ CONDITIONS FOR REACTION BOX ══ -->
  <rect x="20" y="58" width="760" height="50" rx="5" fill="#fff" stroke="#000" stroke-width="2.5"/>
  <text x="120" y="78" font-family="Georgia,serif" font-size="11" font-weight="bold" fill="#000">Condition 1:</text>
  <text x="210" y="78" font-family="Georgia,serif" font-size="11" fill="#333">Particles must COLLIDE</text>
  <text x="400" y="78" font-family="Georgia,serif" font-size="11" font-weight="bold" fill="#000">Condition 2:</text>
  <text x="490" y="78" font-family="Georgia,serif" font-size="11" fill="#333">Energy ≥ Activation Energy (Eₐ)</text>
  <text x="120" y="96" font-family="Georgia,serif" font-size="11" font-weight="bold" fill="#000">Condition 3:</text>
  <text x="210" y="96" font-family="Georgia,serif" font-size="11" fill="#333">Correct orientation on impact</text>

  <!-- ══ PANEL 1: Unsuccessful collision — wrong orientation ══ -->
  <rect x="20" y="122" width="236" height="200" rx="5" fill="#fff" stroke="#000" stroke-width="2"/>
  <text x="128" y="142" font-family="Georgia,serif" font-size="11" font-weight="bold"
        fill="#000" text-anchor="middle">Unsuccessful: Wrong Orientation</text>
  <line x1="20" y1="148" x2="256" y2="148" stroke="#000" stroke-width="1"/>
  <!-- Molecule A approaching -->
  <circle cx="65" cy="210" r="22" fill="#fff" stroke="#000" stroke-width="2.5"/>
  <text x="65" y="215" font-family="Georgia,serif" font-size="12" font-weight="bold"
        fill="#000" text-anchor="middle">A</text>
  <!-- velocity arrow -->
  <line x1="87" y1="210" x2="118" y2="210" stroke="#000" stroke-width="2"/>
  <polygon points="116,205 128,210 116,215" fill="#000"/>
  <!-- Molecule B (wrong face) -->
  <circle cx="180" cy="210" r="22" fill="#f5f5f5" stroke="#000" stroke-width="2.5"/>
  <text x="180" y="215" font-family="Georgia,serif" font-size="12" font-weight="bold"
        fill="#000" text-anchor="middle">B</text>
  <!-- X mark -->
  <text x="128" y="270" font-family="Georgia,serif" font-size="22" font-weight="bold"
        fill="#000" text-anchor="middle">✗</text>
  <text x="128" y="292" font-family="Georgia,serif" font-size="10" fill="#555" text-anchor="middle">
    Reactive sites not aligned</text>
  <text x="128" y="308" font-family="Georgia,serif" font-size="10" fill="#555" text-anchor="middle">
    No reaction occurs</text>

  <!-- ══ PANEL 2: Unsuccessful collision — insufficient energy ══ -->
  <rect x="282" y="122" width="236" height="200" rx="5" fill="#fff" stroke="#000" stroke-width="2"/>
  <text x="400" y="142" font-family="Georgia,serif" font-size="11" font-weight="bold"
        fill="#000" text-anchor="middle">Unsuccessful: Low Energy</text>
  <line x1="282" y1="148" x2="518" y2="148" stroke="#000" stroke-width="1"/>
  <!-- Molecule A slow -->
  <circle cx="330" cy="210" r="22" fill="#fff" stroke="#000" stroke-width="2.5"/>
  <text x="330" y="215" font-family="Georgia,serif" font-size="12" font-weight="bold"
        fill="#000" text-anchor="middle">A</text>
  <!-- short arrow (slow) -->
  <line x1="352" y1="210" x2="366" y2="210" stroke="#000" stroke-width="1.5"/>
  <polygon points="364,206 372,210 364,214" fill="#000"/>
  <!-- Molecule B -->
  <circle cx="440" cy="210" r="22" fill="#f5f5f5" stroke="#000" stroke-width="2.5"/>
  <text x="440" y="215" font-family="Georgia,serif" font-size="12" font-weight="bold"
        fill="#000" text-anchor="middle">B</text>
  <!-- Bounce arrows -->
  <line x1="350" y1="235" x2="318" y2="255" stroke="#000" stroke-width="1.5"/>
  <polygon points="316,250 312,262 324,254" fill="#000"/>
  <line x1="420" y1="235" x2="452" y2="255" stroke="#000" stroke-width="1.5"/>
  <polygon points="454,250 458,262 446,254" fill="#000"/>
  <text x="400" y="280" font-family="Georgia,serif" font-size="20" font-weight="bold"
        fill="#000" text-anchor="middle">✗</text>
  <text x="400" y="300" font-family="Georgia,serif" font-size="10" fill="#555" text-anchor="middle">
    KE &lt; Eₐ — bounce apart</text>
  <text x="400" y="316" font-family="Georgia,serif" font-size="10" fill="#555" text-anchor="middle">
    No reaction occurs</text>

  <!-- ══ PANEL 3: Successful collision ══ -->
  <rect x="544" y="122" width="236" height="200" rx="5" fill="#fff" stroke="#000" stroke-width="2.5"/>
  <text x="662" y="142" font-family="Georgia,serif" font-size="11" font-weight="bold"
        fill="#000" text-anchor="middle">Successful Collision</text>
  <line x1="544" y1="148" x2="780" y2="148" stroke="#000" stroke-width="1"/>
  <!-- A approaching fast -->
  <circle cx="588" cy="200" r="22" fill="#fff" stroke="#000" stroke-width="2.5"/>
  <text x="588" y="205" font-family="Georgia,serif" font-size="12" font-weight="bold"
        fill="#000" text-anchor="middle">A</text>
  <!-- long arrow (fast) -->
  <line x1="610" y1="200" x2="648" y2="200" stroke="#000" stroke-width="2.5"/>
  <polygon points="646,194 660,200 646,206" fill="#000"/>
  <!-- B -->
  <circle cx="725" cy="200" r="22" fill="#f5f5f5" stroke="#000" stroke-width="2.5"/>
  <text x="725" y="205" font-family="Georgia,serif" font-size="12" font-weight="bold"
        fill="#000" text-anchor="middle">B</text>
  <!-- Product AB -->
  <rect x="626" y="235" width="72" height="30" rx="4" fill="#e8e8e8" stroke="#000" stroke-width="2"/>
  <text x="662" y="255" font-family="Georgia,serif" font-size="12" font-weight="bold"
        fill="#000" text-anchor="middle">AB</text>
  <!-- Formation arrow -->
  <line x1="662" y1="222" x2="662" y2="235" stroke="#000" stroke-width="2"/>
  <polygon points="658,231 662,239 666,231" fill="#000"/>
  <text x="662" y="285" font-family="Georgia,serif" font-size="20" font-weight="bold"
        fill="#000" text-anchor="middle">✓</text>
  <text x="662" y="305" font-family="Georgia,serif" font-size="10" fill="#333" text-anchor="middle">
    KE ≥ Eₐ, correct orientation</text>

  <!-- ══ ACTIVATION ENERGY PROFILE ══ -->
  <rect x="20" y="338" width="760" height="210" rx="6" fill="#fff" stroke="#000" stroke-width="2.5"/>
  <text x="400" y="358" font-family="Georgia,serif" font-size="13" font-weight="bold"
        fill="#000" text-anchor="middle">Activation Energy Profile</text>
  <line x1="20" y1="364" x2="780" y2="364" stroke="#000" stroke-width="1.5"/>

  <!-- Axes -->
  <line x1="80" y1="420" x2="80" y2="526" stroke="#000" stroke-width="2"/>
  <line x1="80" y1="526" x2="740" y2="526" stroke="#000" stroke-width="2"/>
  <polygon points="75,424 80,410 85,424" fill="#000"/>
  <polygon points="736,521 750,526 736,531" fill="#000"/>
  <text x="68" y="476" font-family="Georgia,serif" font-size="10" fill="#000"
        transform="rotate(-90 56 476)">Energy</text>
  <text x="750" y="530" font-family="Georgia,serif" font-size="10" fill="#000">Progress</text>

  <!-- Energy profile curve -->
  <path d="M100,510 Q200,512 280,510 Q340,505 380,420 Q420,505 500,510 Q600,515 720,512"
        fill="none" stroke="#000" stroke-width="2.5"/>

  <!-- Eₐ arrow -->
  <line x1="380" y1="510" x2="380" y2="420" stroke="#000" stroke-width="1.5" stroke-dasharray="4,3"/>
  <line x1="290" y1="420" x2="390" y2="420" stroke="#000" stroke-width="2"/>
  <polygon points="388,415 400,420 388,425" fill="#000"/>
  <line x1="290" y1="510" x2="290" y2="420" stroke="#000" stroke-width="1.5" stroke-dasharray="4,3"/>
  <polygon points="286,424 290,412 294,424" fill="#000"/>
  <polygon points="286,506 290,518 294,506" fill="#000"/>
  <text x="250" y="468" font-family="Georgia,serif" font-size="11" font-weight="bold"
        fill="#000" text-anchor="middle">Eₐ</text>

  <!-- Reactants level -->
  <line x1="80" y1="510" x2="200" y2="510" stroke="#000" stroke-width="1.5" stroke-dasharray="4,3"/>
  <text x="130" y="524" font-family="Georgia,serif" font-size="10" fill="#333" text-anchor="middle">Reactants</text>
  <!-- Products level -->
  <line x1="600" y1="510" x2="720" y2="510" stroke="#000" stroke-width="1.5" stroke-dasharray="4,3"/>
  <text x="660" y="524" font-family="Georgia,serif" font-size="10" fill="#333" text-anchor="middle">Products</text>
  <!-- Transition state -->
  <text x="380" y="414" font-family="Georgia,serif" font-size="9" fill="#333" text-anchor="middle">Transition state</text>

  <!-- ══ FACTORS AFFECTING RATE ══ -->
  <rect x="20" y="562" width="760" height="104" rx="6" fill="#fff" stroke="#000" stroke-width="2"
        stroke-dasharray="5,3"/>
  <text x="400" y="582" font-family="Georgia,serif" font-size="12" font-weight="bold"
        fill="#000" text-anchor="middle">Factors That Increase Reaction Rate (Collision Theory)</text>
  <line x1="20" y1="588" x2="780" y2="588" stroke="#000" stroke-width="1"/>
  <text x="40" y="606" font-family="Georgia,serif" font-size="10" fill="#333">• ↑ Concentration → more particles per unit volume → more frequent collisions</text>
  <text x="40" y="622" font-family="Georgia,serif" font-size="10" fill="#333">• ↑ Temperature → higher average KE → more particles exceed Eₐ → more successful collisions</text>
  <text x="40" y="638" font-family="Georgia,serif" font-size="10" fill="#333">• ↑ Surface area (smaller pieces) → more exposed reactive sites → more collisions possible</text>
  <text x="40" y="654" font-family="Georgia,serif" font-size="10" fill="#333">• Catalyst → provides alternative pathway with lower Eₐ → larger proportion of collisions are successful</text>

</svg>`;

// ─── 13. MOLE CONCEPT DIAGRAM ─────────────────────────────────────────────────
  static moleDiagramSvg = `<?xml version="1.0" encoding="utf-8"?>
<svg version="1.1" xmlns="http://www.w3.org/2000/svg"
     width="800px" height="700px" viewBox="0 0 800 700">

  <!-- Title -->
  <text x="400" y="28" font-family="Georgia,serif" font-size="15" font-weight="bold"
        fill="#000" text-anchor="middle">The Mole Concept — Avogadro's Number</text>
  <text x="400" y="46" font-family="Georgia,serif" font-size="11" fill="#333" text-anchor="middle">
    1 mole = 6.022 × 10²³ particles = molar mass in grams</text>

  <!-- ══ CENTRAL MOLE CIRCLE ══ -->
  <circle cx="400" cy="260" r="90" fill="#fff" stroke="#000" stroke-width="3"/>
  <text x="400" y="245" font-family="Georgia,serif" font-size="16" font-weight="bold"
        fill="#000" text-anchor="middle">1 MOLE</text>
  <text x="400" y="265" font-family="Georgia,serif" font-size="12" fill="#333" text-anchor="middle">of any substance</text>
  <text x="400" y="285" font-family="Georgia,serif" font-size="11" fill="#333" text-anchor="middle">= 6.022 × 10²³</text>
  <text x="400" y="301" font-family="Georgia,serif" font-size="11" fill="#333" text-anchor="middle">particles</text>

  <!-- ══ SURROUNDING NODES ══ -->

  <!-- Node 1: Mass (top-left) -->
  <rect x="30" y="60" width="200" height="130" rx="8" fill="#fff" stroke="#000" stroke-width="2.5"/>
  <text x="130" y="82" font-family="Georgia,serif" font-size="12" font-weight="bold"
        fill="#000" text-anchor="middle">MASS</text>
  <line x1="30" y1="88" x2="230" y2="88" stroke="#000" stroke-width="1.5"/>
  <text x="130" y="108" font-family="Georgia,serif" font-size="20" font-weight="bold"
        fill="#000" text-anchor="middle">m = n × M</text>
  <text x="130" y="128" font-family="Georgia,serif" font-size="10" fill="#333" text-anchor="middle">m = mass (g)</text>
  <text x="130" y="144" font-family="Georgia,serif" font-size="10" fill="#333" text-anchor="middle">n = amount (mol)</text>
  <text x="130" y="160" font-family="Georgia,serif" font-size="10" fill="#333" text-anchor="middle">M = molar mass (g mol⁻¹)</text>
  <text x="130" y="178" font-family="Georgia,serif" font-size="10" fill="#555" text-anchor="middle">e.g. C: M = 12 g mol⁻¹</text>
  <!-- Connecting line -->
  <line x1="200" y1="128" x2="317" y2="210" stroke="#000" stroke-width="1.5" stroke-dasharray="5,3"/>

  <!-- Node 2: Volume gas (top-right) -->
  <rect x="570" y="60" width="200" height="130" rx="8" fill="#fff" stroke="#000" stroke-width="2.5"/>
  <text x="670" y="82" font-family="Georgia,serif" font-size="12" font-weight="bold"
        fill="#000" text-anchor="middle">GAS VOLUME</text>
  <line x1="570" y1="88" x2="770" y2="88" stroke="#000" stroke-width="1.5"/>
  <text x="670" y="108" font-family="Georgia,serif" font-size="16" font-weight="bold"
        fill="#000" text-anchor="middle">V = n × Vm</text>
  <text x="670" y="128" font-family="Georgia,serif" font-size="10" fill="#333" text-anchor="middle">Vm = 22.4 L mol⁻¹ (STP)</text>
  <text x="670" y="144" font-family="Georgia,serif" font-size="10" fill="#333" text-anchor="middle">Vm = 24.0 L mol⁻¹ (RTP)</text>
  <text x="670" y="160" font-family="Georgia,serif" font-size="10" fill="#333" text-anchor="middle">or use ideal gas law:</text>
  <text x="670" y="178" font-family="Georgia,serif" font-size="10" fill="#333" text-anchor="middle">PV = nRT</text>
  <line x1="570" y1="128" x2="483" y2="210" stroke="#000" stroke-width="1.5" stroke-dasharray="5,3"/>

  <!-- Node 3: Particles (bottom-left) -->
  <rect x="30" y="380" width="200" height="130" rx="8" fill="#fff" stroke="#000" stroke-width="2.5"/>
  <text x="130" y="402" font-family="Georgia,serif" font-size="12" font-weight="bold"
        fill="#000" text-anchor="middle">PARTICLES</text>
  <line x1="30" y1="408" x2="230" y2="408" stroke="#000" stroke-width="1.5"/>
  <text x="130" y="430" font-family="Georgia,serif" font-size="13" font-weight="bold"
        fill="#000" text-anchor="middle">N = n × Nₐ</text>
  <text x="130" y="452" font-family="Georgia,serif" font-size="10" fill="#333" text-anchor="middle">N = number of particles</text>
  <text x="130" y="468" font-family="Georgia,serif" font-size="10" fill="#333" text-anchor="middle">Nₐ = 6.022 × 10²³ mol⁻¹</text>
  <text x="130" y="484" font-family="Georgia,serif" font-size="10" fill="#555" text-anchor="middle">(Avogadro constant)</text>
  <text x="130" y="500" font-family="Georgia,serif" font-size="10" fill="#555" text-anchor="middle">particles = atoms/molecules/ions</text>
  <line x1="200" y1="408" x2="317" y2="318" stroke="#000" stroke-width="1.5" stroke-dasharray="5,3"/>

  <!-- Node 4: Concentration (bottom-right) -->
  <rect x="570" y="380" width="200" height="130" rx="8" fill="#fff" stroke="#000" stroke-width="2.5"/>
  <text x="670" y="402" font-family="Georgia,serif" font-size="12" font-weight="bold"
        fill="#000" text-anchor="middle">CONCENTRATION</text>
  <line x1="570" y1="408" x2="770" y2="408" stroke="#000" stroke-width="1.5"/>
  <text x="670" y="430" font-family="Georgia,serif" font-size="16" font-weight="bold"
        fill="#000" text-anchor="middle">c = n / V</text>
  <text x="670" y="452" font-family="Georgia,serif" font-size="10" fill="#333" text-anchor="middle">c = concentration (mol dm⁻³)</text>
  <text x="670" y="468" font-family="Georgia,serif" font-size="10" fill="#333" text-anchor="middle">n = moles of solute</text>
  <text x="670" y="484" font-family="Georgia,serif" font-size="10" fill="#333" text-anchor="middle">V = volume (dm³)</text>
  <text x="670" y="500" font-family="Georgia,serif" font-size="10" fill="#555" text-anchor="middle">n = c × V</text>
  <line x1="570" y1="408" x2="483" y2="318" stroke="#000" stroke-width="1.5" stroke-dasharray="5,3"/>

  <!-- ══ MOLAR MASSES TABLE ══ -->
  <rect x="20" y="530" width="760" height="150" rx="6" fill="#fff" stroke="#000" stroke-width="2.5"/>
  <text x="400" y="550" font-family="Georgia,serif" font-size="12" font-weight="bold"
        fill="#000" text-anchor="middle">Common Molar Masses &amp; Worked Examples</text>
  <line x1="20" y1="556" x2="780" y2="556" stroke="#000" stroke-width="1.5"/>
  <!-- Table headers -->
  <text x="100" y="574" font-family="Georgia,serif" font-size="11" font-weight="bold"
        fill="#000" text-anchor="middle">Substance</text>
  <text x="240" y="574" font-family="Georgia,serif" font-size="11" font-weight="bold"
        fill="#000" text-anchor="middle">Formula</text>
  <text x="360" y="574" font-family="Georgia,serif" font-size="11" font-weight="bold"
        fill="#000" text-anchor="middle">M (g mol⁻¹)</text>
  <text x="520" y="574" font-family="Georgia,serif" font-size="11" font-weight="bold"
        fill="#000" text-anchor="middle">Mass of 1 mol</text>
  <text x="680" y="574" font-family="Georgia,serif" font-size="11" font-weight="bold"
        fill="#000" text-anchor="middle">Particles in 1 mol</text>
  <line x1="20" y1="580" x2="780" y2="580" stroke="#000" stroke-width="1"/>
  <!-- Row 1 -->
  <text x="100" y="596" font-family="Georgia,serif" font-size="10" fill="#000" text-anchor="middle">Carbon</text>
  <text x="240" y="596" font-family="Georgia,serif" font-size="10" fill="#000" text-anchor="middle">C</text>
  <text x="360" y="596" font-family="Georgia,serif" font-size="10" fill="#000" text-anchor="middle">12</text>
  <text x="520" y="596" font-family="Georgia,serif" font-size="10" fill="#000" text-anchor="middle">12 g</text>
  <text x="680" y="596" font-family="Georgia,serif" font-size="10" fill="#000" text-anchor="middle">6.022 × 10²³ atoms</text>
  <!-- Row 2 -->
  <text x="100" y="614" font-family="Georgia,serif" font-size="10" fill="#000" text-anchor="middle">Water</text>
  <text x="240" y="614" font-family="Georgia,serif" font-size="10" fill="#000" text-anchor="middle">H₂O</text>
  <text x="360" y="614" font-family="Georgia,serif" font-size="10" fill="#000" text-anchor="middle">18</text>
  <text x="520" y="614" font-family="Georgia,serif" font-size="10" fill="#000" text-anchor="middle">18 g</text>
  <text x="680" y="614" font-family="Georgia,serif" font-size="10" fill="#000" text-anchor="middle">6.022 × 10²³ molecules</text>
  <!-- Row 3 -->
  <text x="100" y="632" font-family="Georgia,serif" font-size="10" fill="#000" text-anchor="middle">Sodium chloride</text>
  <text x="240" y="632" font-family="Georgia,serif" font-size="10" fill="#000" text-anchor="middle">NaCl</text>
  <text x="360" y="632" font-family="Georgia,serif" font-size="10" fill="#000" text-anchor="middle">58.5</text>
  <text x="520" y="632" font-family="Georgia,serif" font-size="10" fill="#000" text-anchor="middle">58.5 g</text>
  <text x="680" y="632" font-family="Georgia,serif" font-size="10" fill="#000" text-anchor="middle">6.022 × 10²³ formula units</text>
  <!-- Row 4 -->
  <text x="100" y="650" font-family="Georgia,serif" font-size="10" fill="#000" text-anchor="middle">Calcium carbonate</text>
  <text x="240" y="650" font-family="Georgia,serif" font-size="10" fill="#000" text-anchor="middle">CaCO₃</text>
  <text x="360" y="650" font-family="Georgia,serif" font-size="10" fill="#000" text-anchor="middle">100</text>
  <text x="520" y="650" font-family="Georgia,serif" font-size="10" fill="#000" text-anchor="middle">100 g</text>
  <text x="680" y="650" font-family="Georgia,serif" font-size="10" fill="#000" text-anchor="middle">6.022 × 10²³ formula units</text>
  <line x1="20" y1="658" x2="780" y2="658" stroke="#000" stroke-width="1"/>
  <text x="400" y="674" font-family="Georgia,serif" font-size="9" fill="#555" text-anchor="middle">
    Avogadro constant Nₐ = 6.02214076 × 10²³ mol⁻¹ (exact, 2019 SI definition)</text>

</svg>`;

// ─── 14. STOICHIOMETRY MAP DIAGRAM ───────────────────────────────────────────
  static stoichiometryMapDiagramSvg = `<?xml version="1.0" encoding="utf-8"?>
<svg version="1.1" xmlns="http://www.w3.org/2000/svg"
     width="800px" height="700px" viewBox="0 0 800 700">

  <!-- Title -->
  <text x="400" y="28" font-family="Georgia,serif" font-size="15" font-weight="bold"
        fill="#000" text-anchor="middle">Stoichiometry Conversion Map</text>
  <text x="400" y="46" font-family="Georgia,serif" font-size="11" fill="#333" text-anchor="middle">
    All paths pass through MOLES — the central currency of stoichiometry</text>

  <!-- ══ CENTRAL MOLES BOX ══ -->
  <rect x="300" y="280" width="200" height="80" rx="8" fill="#fff" stroke="#000" stroke-width="4"/>
  <text x="400" y="312" font-family="Georgia,serif" font-size="16" font-weight="bold"
        fill="#000" text-anchor="middle">MOLES (n)</text>
  <text x="400" y="332" font-family="Georgia,serif" font-size="12" fill="#333" text-anchor="middle">unit: mol</text>
  <text x="400" y="348" font-family="Georgia,serif" font-size="10" fill="#555" text-anchor="middle">central quantity</text>

  <!-- ══ MASS BOX (top-left) ══ -->
  <rect x="60" y="80" width="180" height="90" rx="6" fill="#fff" stroke="#000" stroke-width="2.5"/>
  <text x="150" y="103" font-family="Georgia,serif" font-size="13" font-weight="bold"
        fill="#000" text-anchor="middle">MASS</text>
  <line x1="60" y1="109" x2="240" y2="109" stroke="#000" stroke-width="1.5"/>
  <text x="150" y="127" font-family="Georgia,serif" font-size="11" fill="#333" text-anchor="middle">unit: grams (g)</text>
  <text x="150" y="143" font-family="Georgia,serif" font-size="10" fill="#555" text-anchor="middle">measured by balance</text>
  <text x="150" y="159" font-family="Georgia,serif" font-size="10" fill="#555" text-anchor="middle">e.g. 18 g H₂O</text>

  <!-- Mass ↔ Moles arrows -->
  <line x1="210" y1="170" x2="320" y2="290" stroke="#000" stroke-width="2"/>
  <polygon points="316,283 325,296 310,292" fill="#000"/>
  <line x1="315" y1="285" x2="205" y2="165" stroke="#000" stroke-width="2"/>
  <polygon points="213,168 200,158 208,172" fill="#000"/>
  <!-- Labels on arrows -->
  <text x="235" y="215" font-family="Georgia,serif" font-size="10" font-weight="bold"
        fill="#000" transform="rotate(-48 235 215)">÷ M (g mol⁻¹)</text>
  <text x="278" y="238" font-family="Georgia,serif" font-size="10" font-weight="bold"
        fill="#000" transform="rotate(-48 278 238)">× M (g mol⁻¹)</text>

  <!-- ══ GAS VOLUME BOX (top-right) ══ -->
  <rect x="560" y="80" width="200" height="90" rx="6" fill="#fff" stroke="#000" stroke-width="2.5"/>
  <text x="660" y="103" font-family="Georgia,serif" font-size="13" font-weight="bold"
        fill="#000" text-anchor="middle">GAS VOLUME</text>
  <line x1="560" y1="109" x2="760" y2="109" stroke="#000" stroke-width="1.5"/>
  <text x="660" y="127" font-family="Georgia,serif" font-size="11" fill="#333" text-anchor="middle">unit: dm³ or L</text>
  <text x="660" y="143" font-family="Georgia,serif" font-size="10" fill="#555" text-anchor="middle">Vm=22.4 L/mol (STP)</text>
  <text x="660" y="159" font-family="Georgia,serif" font-size="10" fill="#555" text-anchor="middle">Vm=24.0 L/mol (RTP)</text>

  <!-- Gas Vol ↔ Moles arrows -->
  <line x1="580" y1="170" x2="490" y2="290" stroke="#000" stroke-width="2"/>
  <polygon points="494,283 485,296 500,292" fill="#000"/>
  <line x1="495" y1="285" x2="585" y2="165" stroke="#000" stroke-width="2"/>
  <polygon points="577,168 590,158 582,172" fill="#000"/>
  <text x="512" y="200" font-family="Georgia,serif" font-size="10" font-weight="bold"
        fill="#000" transform="rotate(48 512 200)">÷ Vm</text>
  <text x="548" y="240" font-family="Georgia,serif" font-size="10" font-weight="bold"
        fill="#000" transform="rotate(48 548 240)">× Vm</text>

  <!-- ══ PARTICLES BOX (bottom-left) ══ -->
  <rect x="60" y="490" width="200" height="90" rx="6" fill="#fff" stroke="#000" stroke-width="2.5"/>
  <text x="160" y="513" font-family="Georgia,serif" font-size="13" font-weight="bold"
        fill="#000" text-anchor="middle">PARTICLES</text>
  <line x1="60" y1="519" x2="260" y2="519" stroke="#000" stroke-width="1.5"/>
  <text x="160" y="537" font-family="Georgia,serif" font-size="11" fill="#333" text-anchor="middle">atoms / molecules / ions</text>
  <text x="160" y="553" font-family="Georgia,serif" font-size="10" fill="#555" text-anchor="middle">counted using Nₐ</text>
  <text x="160" y="569" font-family="Georgia,serif" font-size="10" fill="#555" text-anchor="middle">Nₐ = 6.022 × 10²³ mol⁻¹</text>

  <!-- Particles ↔ Moles arrows -->
  <line x1="230" y1="492" x2="330" y2="390" stroke="#000" stroke-width="2"/>
  <polygon points="326,397 335,384 320,388" fill="#000"/>
  <line x1="325" y1="385" x2="225" y2="487" stroke="#000" stroke-width="2"/>
  <polygon points="233,479 220,492 228,478" fill="#000"/>
  <text x="255" y="430" font-family="Georgia,serif" font-size="10" font-weight="bold"
        fill="#000" transform="rotate(-48 255 430)">÷ Nₐ</text>
  <text x="298" y="448" font-family="Georgia,serif" font-size="10" font-weight="bold"
        fill="#000" transform="rotate(-48 298 448)">× Nₐ</text>

  <!-- ══ SOLUTION VOLUME BOX (bottom-right) ══ -->
  <rect x="560" y="490" width="200" height="90" rx="6" fill="#fff" stroke="#000" stroke-width="2.5"/>
  <text x="660" y="513" font-family="Georgia,serif" font-size="13" font-weight="bold"
        fill="#000" text-anchor="middle">SOLUTION VOL</text>
  <line x1="560" y1="519" x2="760" y2="519" stroke="#000" stroke-width="1.5"/>
  <text x="660" y="537" font-family="Georgia,serif" font-size="11" fill="#333" text-anchor="middle">unit: dm³ or cm³</text>
  <text x="660" y="553" font-family="Georgia,serif" font-size="10" fill="#555" text-anchor="middle">c = n / V</text>
  <text x="660" y="569" font-family="Georgia,serif" font-size="10" fill="#555" text-anchor="middle">n = c × V</text>

  <!-- Solution Vol ↔ Moles arrows -->
  <line x1="570" y1="492" x2="490" y2="390" stroke="#000" stroke-width="2"/>
  <polygon points="494,397 485,384 500,388" fill="#000"/>
  <line x1="495" y1="385" x2="575" y2="487" stroke="#000" stroke-width="2"/>
  <polygon points="567,479 580,492 572,478" fill="#000"/>
  <text x="515" y="420" font-family="Georgia,serif" font-size="10" font-weight="bold"
        fill="#000" transform="rotate(48 515 420)">n = c × V</text>
  <text x="548" y="448" font-family="Georgia,serif" font-size="10" font-weight="bold"
        fill="#000" transform="rotate(48 548 448)">c = n / V</text>

  <!-- ══ REACTION STOICHIOMETRY arrow (across moles box) ══ -->
  <rect x="300" y="188" width="200" height="60" rx="5" fill="#fff" stroke="#000" stroke-width="2"
        stroke-dasharray="5,3"/>
  <text x="400" y="210" font-family="Georgia,serif" font-size="11" font-weight="bold"
        fill="#000" text-anchor="middle">MOLE RATIO</text>
  <text x="400" y="228" font-family="Georgia,serif" font-size="10" fill="#333" text-anchor="middle">from balanced equation</text>
  <text x="400" y="244" font-family="Georgia,serif" font-size="10" fill="#555" text-anchor="middle">e.g. 2H₂ + O₂ → 2H₂O : ratio 2:1:2</text>
  <line x1="400" y1="248" x2="400" y2="280" stroke="#000" stroke-width="2" stroke-dasharray="4,3"/>
  <polygon points="396,276 400,284 404,276" fill="#000"/>

  <!-- ══ KEY STEPS SUMMARY ══ -->
  <rect x="20" y="600" width="760" height="88" rx="6" fill="#fff" stroke="#000" stroke-width="2.5"
        stroke-dasharray="5,3"/>
  <text x="400" y="620" font-family="Georgia,serif" font-size="12" font-weight="bold"
        fill="#000" text-anchor="middle">Standard Stoichiometry Problem Route</text>
  <line x1="20" y1="626" x2="780" y2="626" stroke="#000" stroke-width="1.5"/>
  <text x="400" y="646" font-family="Georgia,serif" font-size="11" fill="#333" text-anchor="middle">
    Given quantity → convert to MOLES → apply mole ratio → convert to required quantity</text>
  <text x="400" y="664" font-family="Georgia,serif" font-size="10" fill="#555" text-anchor="middle">
    Step 1: Write balanced equation | Step 2: n(known) = mass÷M or c×V or N÷Nₐ or V÷Vm</text>
  <text x="400" y="680" font-family="Georgia,serif" font-size="10" fill="#555" text-anchor="middle">
    Step 3: n(unknown) = n(known) × (coeff. ratio) | Step 4: Convert n(unknown) to required unit</text>

</svg>`;

// ─── 15. LIMITING REAGENT DIAGRAM ────────────────────────────────────────────
  static limitingReagentDiagramSvg = `<?xml version="1.0" encoding="utf-8"?>
<svg version="1.1" xmlns="http://www.w3.org/2000/svg"
     width="800px" height="640px" viewBox="0 0 800 640">

  <!-- Title -->
  <text x="400" y="28" font-family="Georgia,serif" font-size="15" font-weight="bold"
        fill="#000" text-anchor="middle">Limiting Reagent Diagram</text>
  <text x="400" y="46" font-family="Georgia,serif" font-size="11" fill="#333" text-anchor="middle">
    2H₂ + O₂ → 2H₂O  |  Given: 3 mol H₂ and 1 mol O₂</text>

  <!-- ══ BEFORE REACTION ══ -->
  <rect x="20" y="62" width="360" height="260" rx="6" fill="#fff" stroke="#000" stroke-width="2.5"/>
  <text x="200" y="84" font-family="Georgia,serif" font-size="13" font-weight="bold"
        fill="#000" text-anchor="middle">BEFORE REACTION</text>
  <line x1="20" y1="90" x2="380" y2="90" stroke="#000" stroke-width="1.5"/>

  <!-- H₂ molecules (3 of them) -->
  <text x="80" y="116" font-family="Georgia,serif" font-size="11" font-weight="bold"
        fill="#000">H₂ molecules (3 mol):</text>
  <!-- H₂ molecule 1 -->
  <circle cx="60" cy="150" r="14" fill="#fff" stroke="#000" stroke-width="2"/>
  <text x="60" y="155" font-family="Georgia,serif" font-size="10" font-weight="bold"
        fill="#000" text-anchor="middle">H</text>
  <line x1="74" y1="150" x2="86" y2="150" stroke="#000" stroke-width="2"/>
  <circle cx="100" cy="150" r="14" fill="#fff" stroke="#000" stroke-width="2"/>
  <text x="100" y="155" font-family="Georgia,serif" font-size="10" font-weight="bold"
        fill="#000" text-anchor="middle">H</text>
  <!-- H₂ molecule 2 -->
  <circle cx="145" cy="150" r="14" fill="#fff" stroke="#000" stroke-width="2"/>
  <text x="145" y="155" font-family="Georgia,serif" font-size="10" font-weight="bold"
        fill="#000" text-anchor="middle">H</text>
  <line x1="159" y1="150" x2="171" y2="150" stroke="#000" stroke-width="2"/>
  <circle cx="185" cy="150" r="14" fill="#fff" stroke="#000" stroke-width="2"/>
  <text x="185" y="155" font-family="Georgia,serif" font-size="10" font-weight="bold"
        fill="#000" text-anchor="middle">H</text>
  <!-- H₂ molecule 3 -->
  <circle cx="230" cy="150" r="14" fill="#fff" stroke="#000" stroke-width="2"/>
  <text x="230" y="155" font-family="Georgia,serif" font-size="10" font-weight="bold"
        fill="#000" text-anchor="middle">H</text>
  <line x1="244" y1="150" x2="256" y2="150" stroke="#000" stroke-width="2"/>
  <circle cx="270" cy="150" r="14" fill="#fff" stroke="#000" stroke-width="2"/>
  <text x="270" y="155" font-family="Georgia,serif" font-size="10" font-weight="bold"
        fill="#000" text-anchor="middle">H</text>

  <!-- O₂ molecule (1 of them) -->
  <text x="80" y="196" font-family="Georgia,serif" font-size="11" font-weight="bold"
        fill="#000">O₂ molecules (1 mol):</text>
  <circle cx="100" cy="230" r="16" fill="#f5f5f5" stroke="#000" stroke-width="2.5"/>
  <text x="100" y="235" font-family="Georgia,serif" font-size="11" font-weight="bold"
        fill="#000" text-anchor="middle">O</text>
  <line x1="116" y1="228" x2="132" y2="228" stroke="#000" stroke-width="2.5"/>
  <line x1="116" y1="234" x2="132" y2="234" stroke="#000" stroke-width="2.5"/>
  <circle cx="148" cy="230" r="16" fill="#f5f5f5" stroke="#000" stroke-width="2.5"/>
  <text x="148" y="235" font-family="Georgia,serif" font-size="11" font-weight="bold"
        fill="#000" text-anchor="middle">O</text>

  <!-- Available summary -->
  <text x="200" y="290" font-family="Georgia,serif" font-size="11" fill="#333" text-anchor="middle">
    Available: 3 mol H₂  |  1 mol O₂</text>
  <text x="200" y="308" font-family="Georgia,serif" font-size="11" fill="#333" text-anchor="middle">
    Ratio needed: 2 mol H₂ : 1 mol O₂</text>

  <!-- ══ ARROW ══ -->
  <line x1="400" y1="192" x2="450" y2="192" stroke="#000" stroke-width="3"/>
  <polygon points="448,185 465,192 448,199" fill="#000"/>
  <text x="432" y="185" font-family="Georgia,serif" font-size="10" fill="#333" text-anchor="middle">reacts</text>

  <!-- ══ AFTER REACTION ══ -->
  <rect x="470" y="62" width="310" height="260" rx="6" fill="#fff" stroke="#000" stroke-width="2.5"/>
  <text x="625" y="84" font-family="Georgia,serif" font-size="13" font-weight="bold"
        fill="#000" text-anchor="middle">AFTER REACTION</text>
  <line x1="470" y1="90" x2="780" y2="90" stroke="#000" stroke-width="1.5"/>

  <!-- Water products (2 mol) -->
  <text x="625" y="116" font-family="Georgia,serif" font-size="11" font-weight="bold"
        fill="#000" text-anchor="middle">H₂O (product): 2 mol</text>
  <!-- Water molecule 1 -->
  <circle cx="545" cy="160" r="15" fill="#e8e8e8" stroke="#000" stroke-width="2"/>
  <text x="545" y="165" font-family="Georgia,serif" font-size="10" font-weight="bold"
        fill="#000" text-anchor="middle">O</text>
  <line x1="530" y1="170" x2="515" y2="183" stroke="#000" stroke-width="2"/>
  <circle cx="508" cy="190" r="12" fill="#fff" stroke="#000" stroke-width="2"/>
  <text x="508" y="195" font-family="Georgia,serif" font-size="9" font-weight="bold"
        fill="#000" text-anchor="middle">H</text>
  <line x1="560" y1="170" x2="572" y2="183" stroke="#000" stroke-width="2"/>
  <circle cx="579" cy="190" r="12" fill="#fff" stroke="#000" stroke-width="2"/>
  <text x="579" y="195" font-family="Georgia,serif" font-size="9" font-weight="bold"
        fill="#000" text-anchor="middle">H</text>
  <!-- Water molecule 2 -->
  <circle cx="680" cy="160" r="15" fill="#e8e8e8" stroke="#000" stroke-width="2"/>
  <text x="680" y="165" font-family="Georgia,serif" font-size="10" font-weight="bold"
        fill="#000" text-anchor="middle">O</text>
  <line x1="665" y1="170" x2="650" y2="183" stroke="#000" stroke-width="2"/>
  <circle cx="643" cy="190" r="12" fill="#fff" stroke="#000" stroke-width="2"/>
  <text x="643" y="195" font-family="Georgia,serif" font-size="9" font-weight="bold"
        fill="#000" text-anchor="middle">H</text>
  <line x1="695" y1="170" x2="707" y2="183" stroke="#000" stroke-width="2"/>
  <circle cx="714" cy="190" r="12" fill="#fff" stroke="#000" stroke-width="2"/>
  <text x="714" y="195" font-family="Georgia,serif" font-size="9" font-weight="bold"
        fill="#000" text-anchor="middle">H</text>

  <!-- Excess H₂ -->
  <text x="625" y="228" font-family="Georgia,serif" font-size="11" font-weight="bold"
        fill="#000" text-anchor="middle">Excess H₂ remaining: 1 mol</text>
  <!-- Excess H₂ molecule (strikethrough to show unused) -->
  <circle cx="580" cy="255" r="13" fill="#fff" stroke="#000" stroke-width="1.5"
          stroke-dasharray="4,2"/>
  <text x="580" y="259" font-family="Georgia,serif" font-size="9"
        fill="#555" text-anchor="middle">H</text>
  <line x1="593" y1="255" x2="606" y2="255" stroke="#555" stroke-width="1.5" stroke-dasharray="3,2"/>
  <circle cx="619" cy="255" r="13" fill="#fff" stroke="#000" stroke-width="1.5"
          stroke-dasharray="4,2"/>
  <text x="619" y="259" font-family="Georgia,serif" font-size="9"
        fill="#555" text-anchor="middle">H</text>
  <text x="660" y="258" font-family="Georgia,serif" font-size="10" fill="#555">(excess)</text>

  <!-- ══ ANALYSIS BOX ══ -->
  <rect x="20" y="340" width="760" height="170" rx="6" fill="#fff" stroke="#000" stroke-width="2.5"/>
  <text x="400" y="362" font-family="Georgia,serif" font-size="13" font-weight="bold"
        fill="#000" text-anchor="middle">Identifying the Limiting Reagent — Step by Step</text>
  <line x1="20" y1="368" x2="780" y2="368" stroke="#000" stroke-width="1.5"/>

  <!-- Left: method -->
  <text x="40" y="388" font-family="Georgia,serif" font-size="11" font-weight="bold" fill="#000">Method 1: Mole ratio comparison</text>
  <text x="40" y="406" font-family="Georgia,serif" font-size="10" fill="#333">
    Ratio needed: 2 mol H₂ per 1 mol O₂  (from balanced equation)</text>
  <text x="40" y="422" font-family="Georgia,serif" font-size="10" fill="#333">
    Available: 3 mol H₂ and 1 mol O₂</text>
  <text x="40" y="438" font-family="Georgia,serif" font-size="10" fill="#333">
    For 1 mol O₂: need 2 mol H₂ — we have 3 mol H₂ (excess!)</text>
  <text x="40" y="454" font-family="Georgia,serif" font-size="10" fill="#333">
    For 3 mol H₂: need 1.5 mol O₂ — we only have 1 mol O₂ (insufficient!)</text>
  <text x="40" y="474" font-family="Georgia,serif" font-size="11" font-weight="bold" fill="#000">
    ∴ O₂ is the LIMITING REAGENT  |  H₂ is in EXCESS (1 mol H₂ unreacted)</text>
  <text x="40" y="494" font-family="Georgia,serif" font-size="10" fill="#555">
    Product: 2 mol H₂O formed (from 1 mol O₂ × mole ratio 2:1 for H₂O)</text>

  <!-- ══ METHOD 2 ══ -->
  <rect x="20" y="528" width="760" height="100" rx="6" fill="#fff" stroke="#000" stroke-width="2"
        stroke-dasharray="5,3"/>
  <text x="400" y="548" font-family="Georgia,serif" font-size="12" font-weight="bold"
        fill="#000" text-anchor="middle">Method 2: Divide moles by stoichiometric coefficient</text>
  <line x1="20" y1="554" x2="780" y2="554" stroke="#000" stroke-width="1"/>
  <text x="400" y="572" font-family="Georgia,serif" font-size="11" fill="#333" text-anchor="middle">
    H₂: 3 mol ÷ 2 = 1.5    |    O₂: 1 mol ÷ 1 = 1.0</text>
  <text x="400" y="590" font-family="Georgia,serif" font-size="11" font-weight="bold"
        fill="#000" text-anchor="middle">Smaller value (1.0) identifies limiting reagent → O₂ is limiting</text>
  <text x="400" y="608" font-family="Georgia,serif" font-size="10" fill="#555" text-anchor="middle">
    Theoretical yield = limiting reagent moles × stoich. ratio to product × M(product)</text>
  <text x="400" y="624" font-family="Georgia,serif" font-size="10" fill="#555" text-anchor="middle">
    = 1 mol O₂ × (2 mol H₂O / 1 mol O₂) × 18 g mol⁻¹ = 36 g H₂O</text>

</svg>`;

// ─── 16. PERCENT YIELD DIAGRAM ────────────────────────────────────────────────
  static percentYieldDiagramSvg = `<?xml version="1.0" encoding="utf-8"?>
<svg version="1.1" xmlns="http://www.w3.org/2000/svg"
     width="800px" height="620px" viewBox="0 0 800 620">

  <!-- Title -->
  <text x="400" y="28" font-family="Georgia,serif" font-size="15" font-weight="bold"
        fill="#000" text-anchor="middle">Percent Yield Diagram</text>
  <text x="400" y="46" font-family="Georgia,serif" font-size="11" fill="#333" text-anchor="middle">
    % yield = (actual yield ÷ theoretical yield) × 100</text>

  <!-- ══ FORMULA BOX ══ -->
  <rect x="200" y="60" width="400" height="60" rx="6" fill="#fff" stroke="#000" stroke-width="3"/>
  <text x="400" y="84" font-family="Georgia,serif" font-size="16" font-weight="bold"
        fill="#000" text-anchor="middle">% Yield = Actual Yield  × 100</text>
  <line x1="330" y1="88" x2="570" y2="88" stroke="#000" stroke-width="2"/>
  <text x="450" y="108" font-family="Georgia,serif" font-size="16" font-weight="bold"
        fill="#000" text-anchor="middle">Theoretical Yield</text>

  <!-- ══ BAR COMPARISON ══ -->
  <rect x="20" y="138" width="760" height="210" rx="6" fill="#fff" stroke="#000" stroke-width="2.5"/>
  <text x="400" y="160" font-family="Georgia,serif" font-size="13" font-weight="bold"
        fill="#000" text-anchor="middle">Visual Comparison: Theoretical vs Actual Yield</text>
  <line x1="20" y1="166" x2="780" y2="166" stroke="#000" stroke-width="1.5"/>

  <!-- Axis -->
  <line x1="80" y1="315" x2="750" y2="315" stroke="#000" stroke-width="2"/>
  <line x1="80" y1="180" x2="80" y2="315" stroke="#000" stroke-width="2"/>
  <polygon points="75,184 80,170 85,184" fill="#000"/>
  <!-- Y-axis labels -->
  <text x="70" y="319" font-family="Georgia,serif" font-size="9" fill="#000" text-anchor="end">0 g</text>
  <text x="70" y="248" font-family="Georgia,serif" font-size="9" fill="#000" text-anchor="end">5 g</text>
  <text x="70" y="177" font-family="Georgia,serif" font-size="9" fill="#000" text-anchor="end">10 g</text>
  <line x1="76" y1="247" x2="80" y2="247" stroke="#000" stroke-width="1.5"/>
  <line x1="76" y1="181" x2="80" y2="181" stroke="#000" stroke-width="1.5"/>
  <text x="55" y="252" font-family="Georgia,serif" font-size="9" fill="#000"
        transform="rotate(-90 55 252)">Mass (g)</text>

  <!-- Theoretical yield bar: 10 g = full height (315-181 = 134px high) -->
  <rect x="200" y="181" width="120" height="134" fill="#fff" stroke="#000" stroke-width="2.5"/>
  <!-- Hatching for theoretical -->
  <line x1="200" y1="201" x2="220" y2="181" stroke="#000" stroke-width="1"/>
  <line x1="200" y1="221" x2="240" y2="181" stroke="#000" stroke-width="1"/>
  <line x1="200" y1="241" x2="260" y2="181" stroke="#000" stroke-width="1"/>
  <line x1="200" y1="261" x2="280" y2="181" stroke="#000" stroke-width="1"/>
  <line x1="200" y1="281" x2="300" y2="181" stroke="#000" stroke-width="1"/>
  <line x1="200" y1="301" x2="320" y2="181" stroke="#000" stroke-width="1"/>
  <line x1="218" y1="315" x2="320" y2="213" stroke="#000" stroke-width="1"/>
  <line x1="238" y1="315" x2="320" y2="233" stroke="#000" stroke-width="1"/>
  <line x1="258" y1="315" x2="320" y2="253" stroke="#000" stroke-width="1"/>
  <line x1="278" y1="315" x2="320" y2="273" stroke="#000" stroke-width="1"/>
  <line x1="298" y1="315" x2="320" y2="293" stroke="#000" stroke-width="1"/>
  <line x1="318" y1="315" x2="320" y2="313" stroke="#000" stroke-width="1"/>
  <text x="260" y="260" font-family="Georgia,serif" font-size="12" font-weight="bold"
        fill="#000" text-anchor="middle">10 g</text>
  <text x="260" y="330" font-family="Georgia,serif" font-size="11" font-weight="bold"
        fill="#000" text-anchor="middle">Theoretical</text>
  <text x="260" y="344" font-family="Georgia,serif" font-size="10" fill="#555" text-anchor="middle">yield</text>

  <!-- Actual yield bar: 8.5 g = 134 × 0.85 = 113.9 ≈ 114px high → top at 315-114 = 201 -->
  <rect x="440" y="201" width="120" height="114" fill="#e8e8e8" stroke="#000" stroke-width="2.5"/>
  <text x="500" y="262" font-family="Georgia,serif" font-size="12" font-weight="bold"
        fill="#000" text-anchor="middle">8.5 g</text>
  <text x="500" y="330" font-family="Georgia,serif" font-size="11" font-weight="bold"
        fill="#000" text-anchor="middle">Actual</text>
  <text x="500" y="344" font-family="Georgia,serif" font-size="10" fill="#555" text-anchor="middle">yield</text>

  <!-- Loss indicator -->
  <rect x="440" y="181" width="120" height="20" fill="#fff" stroke="#000" stroke-width="1.5"
        stroke-dasharray="4,3"/>
  <text x="560" y="194" font-family="Georgia,serif" font-size="9" fill="#555">← 1.5 g loss</text>

  <!-- % yield annotation -->
  <line x1="560" y1="250" x2="640" y2="250" stroke="#000" stroke-width="1.5" stroke-dasharray="4,3"/>
  <text x="645" y="246" font-family="Georgia,serif" font-size="14" font-weight="bold" fill="#000">85%</text>
  <text x="645" y="262" font-family="Georgia,serif" font-size="10" fill="#333">yield</text>

  <!-- ══ WORKED CALCULATION ══ -->
  <rect x="20" y="364" width="760" height="100" rx="6" fill="#fff" stroke="#000" stroke-width="2.5"/>
  <text x="400" y="384" font-family="Georgia,serif" font-size="12" font-weight="bold"
        fill="#000" text-anchor="middle">Worked Calculation</text>
  <line x1="20" y1="390" x2="780" y2="390" stroke="#000" stroke-width="1.5"/>
  <text x="400" y="410" font-family="Georgia,serif" font-size="11" fill="#333" text-anchor="middle">
    % yield = (actual yield / theoretical yield) × 100</text>
  <text x="400" y="428" font-family="Georgia,serif" font-size="13" font-weight="bold"
        fill="#000" text-anchor="middle">% yield = (8.5 g / 10 g) × 100 = 85%</text>
  <text x="400" y="450" font-family="Georgia,serif" font-size="10" fill="#555" text-anchor="middle">
    Note: % yield is always ≤ 100% (you cannot make more product than stoichiometrically possible)</text>

  <!-- ══ REASONS FOR YIELD LOSS ══ -->
  <rect x="20" y="480" width="370" height="128" rx="6" fill="#fff" stroke="#000" stroke-width="2.5"
        stroke-dasharray="5,3"/>
  <text x="205" y="500" font-family="Georgia,serif" font-size="12" font-weight="bold"
        fill="#000" text-anchor="middle">Reasons for Less Than 100% Yield</text>
  <line x1="20" y1="506" x2="390" y2="506" stroke="#000" stroke-width="1"/>
  <text x="40" y="524" font-family="Georgia,serif" font-size="10" fill="#333">• Reversible reaction — equilibrium not fully right</text>
  <text x="40" y="540" font-family="Georgia,serif" font-size="10" fill="#333">• Side reactions consuming reactants</text>
  <text x="40" y="556" font-family="Georgia,serif" font-size="10" fill="#333">• Product lost during separation/purification</text>
  <text x="40" y="572" font-family="Georgia,serif" font-size="10" fill="#333">• Incomplete reaction (insufficient time/energy)</text>
  <text x="40" y="588" font-family="Georgia,serif" font-size="10" fill="#333">• Reactants not pure | Product soluble in solvent</text>

  <!-- ══ ATOM ECONOMY ══ -->
  <rect x="410" y="480" width="370" height="128" rx="6" fill="#fff" stroke="#000" stroke-width="2.5"
        stroke-dasharray="5,3"/>
  <text x="595" y="500" font-family="Georgia,serif" font-size="12" font-weight="bold"
        fill="#000" text-anchor="middle">Atom Economy (related concept)</text>
  <line x1="410" y1="506" x2="780" y2="506" stroke="#000" stroke-width="1"/>
  <text x="595" y="524" font-family="Georgia,serif" font-size="11" font-weight="bold"
        fill="#000" text-anchor="middle">% atom economy = M(desired) × 100</text>
  <line x1="430" y1="528" x2="760" y2="528" stroke="#000" stroke-width="1.5"/>
  <text x="595" y="546" font-family="Georgia,serif" font-size="11" font-weight="bold"
        fill="#000" text-anchor="middle">M(all products)</text>
  <text x="595" y="566" font-family="Georgia,serif" font-size="10" fill="#555" text-anchor="middle">
    High atom economy = greener process</text>
  <text x="595" y="582" font-family="Georgia,serif" font-size="10" fill="#555" text-anchor="middle">
    Addition reactions: 100% atom economy</text>
  <text x="595" y="598" font-family="Georgia,serif" font-size="10" fill="#555" text-anchor="middle">
    Substitution reactions: lower atom economy</text>

</svg>`;

// ─── 17. EMPIRICAL FORMULA DERIVATION ────────────────────────────────────────
  static empiricalFormulaDerivationSvg = `<?xml version="1.0" encoding="utf-8"?>
<svg version="1.1" xmlns="http://www.w3.org/2000/svg"
     width="800px" height="700px" viewBox="0 0 800 700">

  <!-- Title -->
  <text x="400" y="28" font-family="Georgia,serif" font-size="15" font-weight="bold"
        fill="#000" text-anchor="middle">Empirical Formula Derivation</text>
  <text x="400" y="46" font-family="Georgia,serif" font-size="11" fill="#333" text-anchor="middle">
    From mass/percentage composition → simplest whole-number ratio → empirical formula</text>

  <!-- ══ WORKED EXAMPLE: Glucose composition C=40%, H=6.7%, O=53.3% ══ -->
  <rect x="20" y="60" width="760" height="80" rx="6" fill="#fff" stroke="#000" stroke-width="2.5"/>
  <text x="400" y="80" font-family="Georgia,serif" font-size="13" font-weight="bold"
        fill="#000" text-anchor="middle">Worked Example: Glucose (C = 40.0%, H = 6.7%, O = 53.3%)</text>
  <line x1="20" y1="86" x2="780" y2="86" stroke="#000" stroke-width="1.5"/>
  <text x="400" y="106" font-family="Georgia,serif" font-size="11" fill="#333" text-anchor="middle">
    Assume 100 g sample: C = 40.0 g, H = 6.7 g, O = 53.3 g</text>
  <text x="400" y="124" font-family="Georgia,serif" font-size="10" fill="#555" text-anchor="middle">
    Molar masses: C = 12.0 g mol⁻¹  |  H = 1.0 g mol⁻¹  |  O = 16.0 g mol⁻¹</text>

  <!-- ══ STEP-BY-STEP TABLE ══ -->
  <rect x="20" y="158" width="760" height="300" rx="6" fill="#fff" stroke="#000" stroke-width="2.5"/>
  <text x="400" y="178" font-family="Georgia,serif" font-size="12" font-weight="bold"
        fill="#000" text-anchor="middle">Step-by-Step Derivation</text>
  <line x1="20" y1="184" x2="780" y2="184" stroke="#000" stroke-width="1.5"/>

  <!-- Column headers -->
  <text x="60" y="202" font-family="Georgia,serif" font-size="11" font-weight="bold" fill="#000">Step</text>
  <text x="180" y="202" font-family="Georgia,serif" font-size="11" font-weight="bold"
        fill="#000" text-anchor="middle">Carbon (C)</text>
  <text x="400" y="202" font-family="Georgia,serif" font-size="11" font-weight="bold"
        fill="#000" text-anchor="middle">Hydrogen (H)</text>
  <text x="620" y="202" font-family="Georgia,serif" font-size="11" font-weight="bold"
        fill="#000" text-anchor="middle">Oxygen (O)</text>
  <line x1="20" y1="208" x2="780" y2="208" stroke="#000" stroke-width="1"/>

  <!-- Step 1: % or mass -->
  <text x="60" y="230" font-family="Georgia,serif" font-size="10" font-weight="bold" fill="#000">1. % (assume 100 g)</text>
  <text x="180" y="230" font-family="Georgia,serif" font-size="12" fill="#000" text-anchor="middle">40.0 g</text>
  <text x="400" y="230" font-family="Georgia,serif" font-size="12" fill="#000" text-anchor="middle">6.7 g</text>
  <text x="620" y="230" font-family="Georgia,serif" font-size="12" fill="#000" text-anchor="middle">53.3 g</text>
  <line x1="20" y1="238" x2="780" y2="238" stroke="#000" stroke-width="0.8" stroke-dasharray="3,3"/>

  <!-- Step 2: divide by M -->
  <text x="60" y="268" font-family="Georgia,serif" font-size="10" font-weight="bold" fill="#000">2. ÷ by molar mass</text>
  <text x="60" y="282" font-family="Georgia,serif" font-size="10" fill="#555">to get moles</text>
  <text x="180" y="262" font-family="Georgia,serif" font-size="12" fill="#000" text-anchor="middle">40.0</text>
  <line x1="140" y1="266" x2="220" y2="266" stroke="#000" stroke-width="1.5"/>
  <text x="180" y="280" font-family="Georgia,serif" font-size="12" fill="#000" text-anchor="middle">12.0</text>
  <text x="180" y="296" font-family="Georgia,serif" font-size="12" font-weight="bold" fill="#000" text-anchor="middle">= 3.33 mol</text>
  <text x="400" y="262" font-family="Georgia,serif" font-size="12" fill="#000" text-anchor="middle">6.7</text>
  <line x1="360" y1="266" x2="440" y2="266" stroke="#000" stroke-width="1.5"/>
  <text x="400" y="280" font-family="Georgia,serif" font-size="12" fill="#000" text-anchor="middle">1.0</text>
  <text x="400" y="296" font-family="Georgia,serif" font-size="12" font-weight="bold" fill="#000" text-anchor="middle">= 6.70 mol</text>
  <text x="620" y="262" font-family="Georgia,serif" font-size="12" fill="#000" text-anchor="middle">53.3</text>
  <line x1="580" y1="266" x2="660" y2="266" stroke="#000" stroke-width="1.5"/>
  <text x="620" y="280" font-family="Georgia,serif" font-size="12" fill="#000" text-anchor="middle">16.0</text>
  <text x="620" y="296" font-family="Georgia,serif" font-size="12" font-weight="bold" fill="#000" text-anchor="middle">= 3.33 mol</text>
  <line x1="20" y1="306" x2="780" y2="306" stroke="#000" stroke-width="0.8" stroke-dasharray="3,3"/>

  <!-- Step 3: divide by smallest -->
  <text x="60" y="328" font-family="Georgia,serif" font-size="10" font-weight="bold" fill="#000">3. ÷ by smallest</text>
  <text x="60" y="342" font-family="Georgia,serif" font-size="10" fill="#555">(3.33 is smallest)</text>
  <text x="180" y="338" font-family="Georgia,serif" font-size="12" font-weight="bold" fill="#000" text-anchor="middle">3.33 ÷ 3.33 = 1</text>
  <text x="400" y="338" font-family="Georgia,serif" font-size="12" font-weight="bold" fill="#000" text-anchor="middle">6.70 ÷ 3.33 = 2</text>
  <text x="620" y="338" font-family="Georgia,serif" font-size="12" font-weight="bold" fill="#000" text-anchor="middle">3.33 ÷ 3.33 = 1</text>
  <line x1="20" y1="350" x2="780" y2="350" stroke="#000" stroke-width="0.8" stroke-dasharray="3,3"/>

  <!-- Step 4: whole number ratio -->
  <text x="60" y="374" font-family="Georgia,serif" font-size="10" font-weight="bold" fill="#000">4. Whole number ratio</text>
  <text x="180" y="374" font-family="Georgia,serif" font-size="14" font-weight="bold" fill="#000" text-anchor="middle">C : 1</text>
  <text x="400" y="374" font-family="Georgia,serif" font-size="14" font-weight="bold" fill="#000" text-anchor="middle">H : 2</text>
  <text x="620" y="374" font-family="Georgia,serif" font-size="14" font-weight="bold" fill="#000" text-anchor="middle">O : 1</text>
  <line x1="20" y1="384" x2="780" y2="384" stroke="#000" stroke-width="1"/>

  <!-- Step 5: Empirical formula -->
  <text x="60" y="408" font-family="Georgia,serif" font-size="11" font-weight="bold" fill="#000">5. Empirical formula:</text>
  <text x="400" y="408" font-family="Georgia,serif" font-size="18" font-weight="bold" fill="#000" text-anchor="middle">CH₂O</text>
  <text x="620" y="408" font-family="Georgia,serif" font-size="11" fill="#555" text-anchor="middle">(M = 30 g mol⁻¹)</text>
  <line x1="20" y1="418" x2="780" y2="418" stroke="#000" stroke-width="0.8" stroke-dasharray="3,3"/>

  <!-- Step 6: Molecular formula -->
  <text x="60" y="442" font-family="Georgia,serif" font-size="11" font-weight="bold" fill="#000">6. Molecular formula:</text>
  <text x="200" y="442" font-family="Georgia,serif" font-size="10" fill="#333">Mr(glucose) = 180 | n = 180 ÷ 30 = 6</text>
  <text x="600" y="442" font-family="Georgia,serif" font-size="18" font-weight="bold" fill="#000" text-anchor="middle">C₆H₁₂O₆</text>

  <!-- ══ ROUNDING GUIDE ══ -->
  <rect x="20" y="476" width="370" height="110" rx="6" fill="#fff" stroke="#000" stroke-width="2"
        stroke-dasharray="5,3"/>
  <text x="205" y="496" font-family="Georgia,serif" font-size="11" font-weight="bold"
        fill="#000" text-anchor="middle">Rounding Guide for Step 3 Ratios</text>
  <line x1="20" y1="502" x2="390" y2="502" stroke="#000" stroke-width="1"/>
  <text x="40" y="520" font-family="Georgia,serif" font-size="10" fill="#333">• Value very close to whole number → round (e.g. 1.99 → 2)</text>
  <text x="40" y="538" font-family="Georgia,serif" font-size="10" fill="#333">• Value ≈ .5 → multiply ALL ratios by 2 (e.g. 1:1.5:1 → 2:3:2)</text>
  <text x="40" y="556" font-family="Georgia,serif" font-size="10" fill="#333">• Value ≈ .33 → multiply ALL ratios by 3</text>
  <text x="40" y="574" font-family="Georgia,serif" font-size="10" fill="#333">• Value ≈ .25 → multiply ALL ratios by 4</text>

  <!-- ══ COMBUSTION ANALYSIS ══ -->
  <rect x="410" y="476" width="370" height="110" rx="6" fill="#fff" stroke="#000" stroke-width="2"
        stroke-dasharray="5,3"/>
  <text x="595" y="496" font-family="Georgia,serif" font-size="11" font-weight="bold"
        fill="#000" text-anchor="middle">From Combustion Analysis Data</text>
  <line x1="410" y1="502" x2="780" y2="502" stroke="#000" stroke-width="1"/>
  <text x="430" y="520" font-family="Georgia,serif" font-size="10" fill="#333">Burn CₓHᵧ → CO₂ + H₂O, then weigh products</text>
  <text x="430" y="538" font-family="Georgia,serif" font-size="10" fill="#333">m(C) = m(CO₂) × 12/44</text>
  <text x="430" y="556" font-family="Georgia,serif" font-size="10" fill="#333">m(H) = m(H₂O) × 2/18</text>
  <text x="430" y="574" font-family="Georgia,serif" font-size="10" fill="#333">m(O) = m(sample) − m(C) − m(H)</text>

  <!-- ══ SUMMARY ══ -->
  <rect x="20" y="600" width="760" height="84" rx="6" fill="#fff" stroke="#000" stroke-width="2.5"
        stroke-dasharray="5,3"/>
  <text x="400" y="618" font-family="Georgia,serif" font-size="11" font-weight="bold"
        fill="#000" text-anchor="middle">Key Distinctions</text>
  <line x1="20" y1="624" x2="780" y2="624" stroke="#000" stroke-width="1"/>
  <text x="400" y="642" font-family="Georgia,serif" font-size="10" fill="#333" text-anchor="middle">
    Empirical formula = simplest whole-number ratio of atoms (CH₂O)  |  May not equal molecular formula</text>
  <text x="400" y="658" font-family="Georgia,serif" font-size="10" fill="#333" text-anchor="middle">
    Molecular formula = actual number of each atom per molecule (C₆H₁₂O₆)</text>
  <text x="400" y="674" font-family="Georgia,serif" font-size="10" fill="#333" text-anchor="middle">
    To find molecular formula: determine Mr experimentally (e.g. mass spec), then n = Mr(molec) ÷ Mr(empirical)</text>

</svg>`;

// ─── 18. MOLECULAR vs EMPIRICAL FORMULA ──────────────────────────────────────
  static molecularFormulaVsEmpiricalSvg = `<?xml version="1.0" encoding="utf-8"?>
<svg version="1.1" xmlns="http://www.w3.org/2000/svg"
     width="800px" height="620px" viewBox="0 0 800 620">

  <!-- Title -->
  <text x="400" y="28" font-family="Georgia,serif" font-size="15" font-weight="bold"
        fill="#000" text-anchor="middle">Molecular Formula vs Empirical Formula</text>
  <text x="400" y="46" font-family="Georgia,serif" font-size="11" fill="#333" text-anchor="middle">
    Molecular = actual atoms per molecule  |  Empirical = simplest whole-number ratio</text>

  <!-- ══ DEFINITION BOXES ══ -->
  <rect x="20" y="60" width="360" height="110" rx="6" fill="#fff" stroke="#000" stroke-width="2.5"/>
  <text x="200" y="82" font-family="Georgia,serif" font-size="13" font-weight="bold"
        fill="#000" text-anchor="middle">EMPIRICAL FORMULA</text>
  <line x1="20" y1="88" x2="380" y2="88" stroke="#000" stroke-width="1.5"/>
  <text x="200" y="108" font-family="Georgia,serif" font-size="11" fill="#333" text-anchor="middle">
    Simplest whole-number ratio of atoms</text>
  <text x="200" y="126" font-family="Georgia,serif" font-size="11" fill="#333" text-anchor="middle">
    Derived from % composition or mass data</text>
  <text x="200" y="144" font-family="Georgia,serif" font-size="11" fill="#555" text-anchor="middle">
    e.g. CH₂O  (Mr = 30 g mol⁻¹)</text>
  <text x="200" y="160" font-family="Georgia,serif" font-size="10" fill="#555" text-anchor="middle">
    ratio C:H:O = 1:2:1</text>

  <rect x="420" y="60" width="360" height="110" rx="6" fill="#fff" stroke="#000" stroke-width="2.5"/>
  <text x="600" y="82" font-family="Georgia,serif" font-size="13" font-weight="bold"
        fill="#000" text-anchor="middle">MOLECULAR FORMULA</text>
  <line x1="420" y1="88" x2="780" y2="88" stroke="#000" stroke-width="1.5"/>
  <text x="600" y="108" font-family="Georgia,serif" font-size="11" fill="#333" text-anchor="middle">
    Actual number of atoms per molecule</text>
  <text x="600" y="126" font-family="Georgia,serif" font-size="11" fill="#333" text-anchor="middle">
    Found using Mr (molar mass from mass spec)</text>
  <text x="600" y="144" font-family="Georgia,serif" font-size="11" fill="#555" text-anchor="middle">
    e.g. C₆H₁₂O₆  (Mr = 180 g mol⁻¹)</text>
  <text x="600" y="160" font-family="Georgia,serif" font-size="10" fill="#555" text-anchor="middle">
    n = 180 ÷ 30 = 6  →  (CH₂O)₆</text>

  <!-- Relationship arrow -->
  <line x1="382" y1="115" x2="418" y2="115" stroke="#000" stroke-width="2.5"/>
  <polygon points="416,109 430,115 416,121" fill="#000"/>
  <text x="400" y="108" font-family="Georgia,serif" font-size="10" fill="#333" text-anchor="middle">× n</text>

  <!-- ══ MULTIPLE EXAMPLES TABLE ══ -->
  <rect x="20" y="188" width="760" height="250" rx="6" fill="#fff" stroke="#000" stroke-width="2.5"/>
  <text x="400" y="208" font-family="Georgia,serif" font-size="13" font-weight="bold"
        fill="#000" text-anchor="middle">Examples — Empirical vs Molecular Formulas</text>
  <line x1="20" y1="214" x2="780" y2="214" stroke="#000" stroke-width="1.5"/>

  <!-- Headers -->
  <text x="100" y="232" font-family="Georgia,serif" font-size="11" font-weight="bold"
        fill="#000" text-anchor="middle">Compound</text>
  <text x="240" y="232" font-family="Georgia,serif" font-size="11" font-weight="bold"
        fill="#000" text-anchor="middle">Empirical</text>
  <text x="340" y="232" font-family="Georgia,serif" font-size="11" font-weight="bold"
        fill="#000" text-anchor="middle">M(empirical)</text>
  <text x="460" y="232" font-family="Georgia,serif" font-size="11" font-weight="bold"
        fill="#000" text-anchor="middle">Molecular</text>
  <text x="580" y="232" font-family="Georgia,serif" font-size="11" font-weight="bold"
        fill="#000" text-anchor="middle">Mr</text>
  <text x="680" y="232" font-family="Georgia,serif" font-size="11" font-weight="bold"
        fill="#000" text-anchor="middle">n = Mr ÷ M(emp)</text>
  <line x1="20" y1="238" x2="780" y2="238" stroke="#000" stroke-width="1"/>

  <!-- Rows -->
  <text x="100" y="256" font-family="Georgia,serif" font-size="10" fill="#000" text-anchor="middle">Glucose</text>
  <text x="240" y="256" font-family="Georgia,serif" font-size="11" font-weight="bold" fill="#000" text-anchor="middle">CH₂O</text>
  <text x="340" y="256" font-family="Georgia,serif" font-size="10" fill="#000" text-anchor="middle">30</text>
  <text x="460" y="256" font-family="Georgia,serif" font-size="11" font-weight="bold" fill="#000" text-anchor="middle">C₆H₁₂O₆</text>
  <text x="580" y="256" font-family="Georgia,serif" font-size="10" fill="#000" text-anchor="middle">180</text>
  <text x="680" y="256" font-family="Georgia,serif" font-size="10" fill="#000" text-anchor="middle">6</text>

  <text x="100" y="278" font-family="Georgia,serif" font-size="10" fill="#000" text-anchor="middle">Benzene</text>
  <text x="240" y="278" font-family="Georgia,serif" font-size="11" font-weight="bold" fill="#000" text-anchor="middle">CH</text>
  <text x="340" y="278" font-family="Georgia,serif" font-size="10" fill="#000" text-anchor="middle">13</text>
  <text x="460" y="278" font-family="Georgia,serif" font-size="11" font-weight="bold" fill="#000" text-anchor="middle">C₆H₆</text>
  <text x="580" y="278" font-family="Georgia,serif" font-size="10" fill="#000" text-anchor="middle">78</text>
  <text x="680" y="278" font-family="Georgia,serif" font-size="10" fill="#000" text-anchor="middle">6</text>

  <text x="100" y="300" font-family="Georgia,serif" font-size="10" fill="#000" text-anchor="middle">Ethanoic acid</text>
  <text x="240" y="300" font-family="Georgia,serif" font-size="11" font-weight="bold" fill="#000" text-anchor="middle">CH₂O</text>
  <text x="340" y="300" font-family="Georgia,serif" font-size="10" fill="#000" text-anchor="middle">30</text>
  <text x="460" y="300" font-family="Georgia,serif" font-size="11" font-weight="bold" fill="#000" text-anchor="middle">C₂H₄O₂</text>
  <text x="580" y="300" font-family="Georgia,serif" font-size="10" fill="#000" text-anchor="middle">60</text>
  <text x="680" y="300" font-family="Georgia,serif" font-size="10" fill="#000" text-anchor="middle">2</text>

  <text x="100" y="322" font-family="Georgia,serif" font-size="10" fill="#000" text-anchor="middle">Ethane</text>
  <text x="240" y="322" font-family="Georgia,serif" font-size="11" font-weight="bold" fill="#000" text-anchor="middle">CH₃</text>
  <text x="340" y="322" font-family="Georgia,serif" font-size="10" fill="#000" text-anchor="middle">15</text>
  <text x="460" y="322" font-family="Georgia,serif" font-size="11" font-weight="bold" fill="#000" text-anchor="middle">C₂H₆</text>
  <text x="580" y="322" font-family="Georgia,serif" font-size="10" fill="#000" text-anchor="middle">30</text>
  <text x="680" y="322" font-family="Georgia,serif" font-size="10" fill="#000" text-anchor="middle">2</text>

  <text x="100" y="344" font-family="Georgia,serif" font-size="10" fill="#000" text-anchor="middle">Hydrogen peroxide</text>
  <text x="240" y="344" font-family="Georgia,serif" font-size="11" font-weight="bold" fill="#000" text-anchor="middle">HO</text>
  <text x="340" y="344" font-family="Georgia,serif" font-size="10" fill="#000" text-anchor="middle">17</text>
  <text x="460" y="344" font-family="Georgia,serif" font-size="11" font-weight="bold" fill="#000" text-anchor="middle">H₂O₂</text>
  <text x="580" y="344" font-family="Georgia,serif" font-size="10" fill="#000" text-anchor="middle">34</text>
  <text x="680" y="344" font-family="Georgia,serif" font-size="10" fill="#000" text-anchor="middle">2</text>

  <text x="100" y="366" font-family="Georgia,serif" font-size="10" fill="#000" text-anchor="middle">Water</text>
  <text x="240" y="366" font-family="Georgia,serif" font-size="11" font-weight="bold" fill="#000" text-anchor="middle">H₂O</text>
  <text x="340" y="366" font-family="Georgia,serif" font-size="10" fill="#000" text-anchor="middle">18</text>
  <text x="460" y="366" font-family="Georgia,serif" font-size="11" font-weight="bold" fill="#000" text-anchor="middle">H₂O</text>
  <text x="580" y="366" font-family="Georgia,serif" font-size="10" fill="#000" text-anchor="middle">18</text>
  <text x="680" y="366" font-family="Georgia,serif" font-size="10" fill="#000" text-anchor="middle">1 (same!)</text>

  <text x="100" y="388" font-family="Georgia,serif" font-size="10" fill="#000" text-anchor="middle">Butene</text>
  <text x="240" y="388" font-family="Georgia,serif" font-size="11" font-weight="bold" fill="#000" text-anchor="middle">CH₂</text>
  <text x="340" y="388" font-family="Georgia,serif" font-size="10" fill="#000" text-anchor="middle">14</text>
  <text x="460" y="388" font-family="Georgia,serif" font-size="11" font-weight="bold" fill="#000" text-anchor="middle">C₄H₈</text>
  <text x="580" y="388" font-family="Georgia,serif" font-size="10" fill="#000" text-anchor="middle">56</text>
  <text x="680" y="388" font-family="Georgia,serif" font-size="10" fill="#000" text-anchor="middle">4</text>
  <line x1="20" y1="398" x2="780" y2="398" stroke="#000" stroke-width="1"/>

  <text x="400" y="416" font-family="Georgia,serif" font-size="10" fill="#555" text-anchor="middle">
    Note: When empirical = molecular (n=1), both formulas are identical (e.g. H₂O, NaCl, CO₂)</text>
  <text x="400" y="430" font-family="Georgia,serif" font-size="10" fill="#555" text-anchor="middle">
    Ionic compounds are always written as empirical formulas (e.g. NaCl not Na₂Cl₂)</text>

  <!-- ══ VISUAL MULTIPLE DIAGRAM ══ -->
  <rect x="20" y="448" width="760" height="160" rx="6" fill="#fff" stroke="#000" stroke-width="2.5"/>
  <text x="400" y="468" font-family="Georgia,serif" font-size="12" font-weight="bold"
        fill="#000" text-anchor="middle">Visual: Molecular Formula as Multiple of Empirical</text>
  <line x1="20" y1="474" x2="780" y2="474" stroke="#000" stroke-width="1.5"/>

  <!-- Empirical unit CH₂O -->
  <rect x="60" y="490" width="60" height="40" rx="4" fill="#e8e8e8" stroke="#000" stroke-width="2"/>
  <text x="90" y="515" font-family="Georgia,serif" font-size="11" font-weight="bold"
        fill="#000" text-anchor="middle">CH₂O</text>
  <text x="90" y="544" font-family="Georgia,serif" font-size="9" fill="#555" text-anchor="middle">n=1</text>
  <text x="90" y="558" font-family="Georgia,serif" font-size="9" fill="#555" text-anchor="middle">Mr=30</text>
  <text x="90" y="572" font-family="Georgia,serif" font-size="9" fill="#555" text-anchor="middle">(CH₂O)</text>

  <!-- ×2 -->
  <text x="145" y="515" font-family="Georgia,serif" font-size="14" fill="#000">×2</text>
  <rect x="165" y="490" width="60" height="40" rx="4" fill="#e8e8e8" stroke="#000" stroke-width="2"/>
  <rect x="227" y="490" width="60" height="40" rx="4" fill="#e8e8e8" stroke="#000" stroke-width="2"/>
  <text x="196" y="515" font-family="Georgia,serif" font-size="11" font-weight="bold"
        fill="#000" text-anchor="middle">CH₂O</text>
  <text x="258" y="515" font-family="Georgia,serif" font-size="11" font-weight="bold"
        fill="#000" text-anchor="middle">CH₂O</text>
  <text x="213" y="544" font-family="Georgia,serif" font-size="9" fill="#555" text-anchor="middle">n=2 → C₂H₄O₂ (Mr=60)</text>
  <text x="213" y="558" font-family="Georgia,serif" font-size="9" fill="#555" text-anchor="middle">ethanoic acid</text>

  <!-- ×6 -->
  <text x="310" y="515" font-family="Georgia,serif" font-size="14" fill="#000">×6</text>
  <!-- 6 boxes -->
  <rect x="335" y="490" width="34" height="40" rx="3" fill="#e8e8e8" stroke="#000" stroke-width="1.5"/>
  <rect x="371" y="490" width="34" height="40" rx="3" fill="#e8e8e8" stroke="#000" stroke-width="1.5"/>
  <rect x="407" y="490" width="34" height="40" rx="3" fill="#e8e8e8" stroke="#000" stroke-width="1.5"/>
  <rect x="443" y="490" width="34" height="40" rx="3" fill="#e8e8e8" stroke="#000" stroke-width="1.5"/>
  <rect x="479" y="490" width="34" height="40" rx="3" fill="#e8e8e8" stroke="#000" stroke-width="1.5"/>
  <rect x="515" y="490" width="34" height="40" rx="3" fill="#e8e8e8" stroke="#000" stroke-width="1.5"/>
  <text x="352" y="515" font-family="Georgia,serif" font-size="9" font-weight="bold" fill="#000" text-anchor="middle">CH₂O</text>
  <text x="388" y="515" font-family="Georgia,serif" font-size="9" font-weight="bold" fill="#000" text-anchor="middle">CH₂O</text>
  <text x="424" y="515" font-family="Georgia,serif" font-size="9" font-weight="bold" fill="#000" text-anchor="middle">CH₂O</text>
  <text x="460" y="515" font-family="Georgia,serif" font-size="9" font-weight="bold" fill="#000" text-anchor="middle">CH₂O</text>
  <text x="496" y="515" font-family="Georgia,serif" font-size="9" font-weight="bold" fill="#000" text-anchor="middle">CH₂O</text>
  <text x="532" y="515" font-family="Georgia,serif" font-size="9" font-weight="bold" fill="#000" text-anchor="middle">CH₂O</text>
  <text x="425" y="544" font-family="Georgia,serif" font-size="9" fill="#555" text-anchor="middle">n=6 → C₆H₁₂O₆ (Mr=180)  =  glucose</text>

  <!-- Formula -->
  <text x="680" y="510" font-family="Georgia,serif" font-size="13" font-weight="bold"
        fill="#000" text-anchor="middle">Molecular</text>
  <text x="680" y="526" font-family="Georgia,serif" font-size="13" font-weight="bold"
        fill="#000" text-anchor="middle">formula =</text>
  <text x="680" y="542" font-family="Georgia,serif" font-size="13" font-weight="bold"
        fill="#000" text-anchor="middle">(empirical)ₙ</text>
  <text x="680" y="560" font-family="Georgia,serif" font-size="11" fill="#333" text-anchor="middle">n is a positive</text>
  <text x="680" y="576" font-family="Georgia,serif" font-size="11" fill="#333" text-anchor="middle">integer ≥ 1</text>

</svg>`;



}



export { ChemistrySvgDiagrams };

